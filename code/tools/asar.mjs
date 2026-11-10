// asar.mjs - Minimal, dependency-free reader for Electron ASAR archives.
//
// ASAR layout (all little endian):
//   off 0  : UInt32 payloadSize of the "size pickle"  (always 4)
//   off 4  : UInt32 byte length of the serialized header pickle
//   off 8  : UInt32 payload length of the header pickle
//   off 12 : UInt32 length of the JSON header string
//   off 16 : JSON header string (directory tree)
//   off 8 + value@4 : start of concatenated file payloads ("data region")
//
// Each file node in the JSON tree carries { size, offset (string, relative to
// the data region), unpacked?, executable?, integrity? }.
//
// This module never loads the whole archive into memory; entries are read on
// demand via pread-style positional reads.

import fs from "node:fs";
import path from "node:path";

export class AsarArchive {
  /**
   * @param {string} filePath absolute path to the .asar file
   */
  constructor(filePath) {
    this.filePath = filePath;
    this.fd = fs.openSync(filePath, "r");
    const preamble = Buffer.alloc(16);
    const bytesRead = fs.readSync(this.fd, preamble, 0, 16, 0);
    if (bytesRead < 16) throw new Error(`${filePath}: too small to be an asar archive`);
    const headerPickleSize = preamble.readUInt32LE(4);
    const jsonSize = preamble.readUInt32LE(12);
    const jsonBuf = Buffer.alloc(jsonSize);
    fs.readSync(this.fd, jsonBuf, 0, jsonSize, 16);
    /** @type {any} root directory node of the asar header */
    this.header = JSON.parse(jsonBuf.toString("utf8"));
    this.dataOffset = 8 + headerPickleSize;
  }

  close() {
    fs.closeSync(this.fd);
  }

  /**
   * Resolve a slash-separated path to its header node.
   * @param {string} p e.g. "webview/assets/index.js"
   * @returns {any|null} node, or null when missing
   */
  stat(p) {
    const parts = p.split("/").filter((s) => s.length > 0 && s !== ".");
    let node = this.header;
    for (const part of parts) {
      if (!node || !node.files) return null;
      node = node.files[part];
      if (node === undefined) return null;
    }
    return node ?? null;
  }

  /**
   * Walk the whole tree, yielding { path, node } for every entry.
   * @param {string} [root] optional subtree to walk
   * @yields {{path: string, node: any, dir: boolean}}
   */
  *walk(root = "") {
    const node = root ? this.stat(root) : this.header;
    if (!node) return;
    yield* this.#walkNode(node, root.replace(/^\/|\/$/g, ""));
  }

  *#walkNode(node, prefix) {
    if (node.files) {
      for (const [name, child] of Object.entries(node.files)) {
        const childPath = prefix ? `${prefix}/${name}` : name;
        yield { path: childPath, node: child, dir: Boolean(child.files) };
        yield* this.#walkNode(child, childPath);
      }
    }
  }

  /**
   * Read an entry fully into memory.
   * @param {string} p archive-relative path
   * @returns {Buffer|null}
   */
  read(p) {
    const node = this.stat(p);
    if (!node || node.files) return null;
    if (node.unpacked) return null; // lives in <asar>.unpacked/<p>
    const size = Number(node.size);
    const offset = this.dataOffset + Number(node.offset);
    const buf = Buffer.alloc(size);
    let pos = 0;
    while (pos < size) {
      const n = fs.readSync(this.fd, buf, pos, size - pos, offset + pos);
      if (n <= 0) break;
      pos += n;
    }
    return buf.subarray(0, pos);
  }

  /** Read an entry as UTF-8 text, or null when missing/unpacked. */
  readText(p) {
    const buf = this.read(p);
    return buf === null ? null : buf.toString("utf8");
  }

  /**
   * Stream an entry to a destination file, creating parent directories.
   * @param {string} p archive-relative path
   * @param {string} destPath absolute destination path
   * @returns {boolean} true when written
   */
  extractTo(p, destPath) {
    const node = this.stat(p);
    if (!node || node.files) return false;
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    const size = Number(node.size);
    const offset = this.dataOffset + Number(node.offset);
    const out = fs.openSync(destPath, "w");
    const chunk = Buffer.alloc(1 << 20);
    let remaining = size;
    let pos = 0;
    try {
      while (remaining > 0) {
        const want = Math.min(chunk.length, remaining);
        const n = fs.readSync(this.fd, chunk, 0, want, offset + pos);
        if (n <= 0) break;
        fs.writeSync(out, chunk, 0, n);
        pos += n;
        remaining -= n;
      }
    } finally {
      fs.closeSync(out);
    }
    return true;
  }
}

export default AsarArchive;
