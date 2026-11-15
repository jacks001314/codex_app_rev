"use strict"
;((exports.ids = [718]),
  (exports.modules = {
    19837(e, t, i) {
      let r
      i.d(t, { fileTypeFromBuffer: () => G })
      let n = {
          128: "€",
          130: "‚",
          131: "ƒ",
          132: "„",
          133: "…",
          134: "†",
          135: "‡",
          136: "ˆ",
          137: "‰",
          138: "Š",
          139: "‹",
          140: "Œ",
          142: "Ž",
          145: "‘",
          146: "’",
          147: "“",
          148: "”",
          149: "•",
          150: "–",
          151: "—",
          152: "˜",
          153: "™",
          154: "š",
          155: "›",
          156: "œ",
          158: "ž",
          159: "Ÿ",
        },
        a = {}
      for (let [e, t] of Object.entries(n)) a[t] = Number.parseInt(e, 10)
      function s(e, t) {
        0 !== t.length && (e.push(String.fromCharCode.apply(null, t)), (t.length = 0))
      }
      function o(e, t, i) {
        ;(t.push(i), t.length >= 32768 && s(e, t))
      }
      function c(e) {
        return new DataView(e.buffer, e.byteOffset)
      }
      let f = { len: 1, get: (e, t) => c(e).getUint8(t), put: (e, t, i) => (c(e).setUint8(t, i), t + 1) },
        h = { len: 2, get: (e, t) => c(e).getUint16(t, !0), put: (e, t, i) => (c(e).setUint16(t, i, !0), t + 2) },
        m = { len: 2, get: (e, t) => c(e).getUint16(t), put: (e, t, i) => (c(e).setUint16(t, i), t + 2) },
        l = { len: 4, get: (e, t) => c(e).getUint32(t, !0), put: (e, t, i) => (c(e).setUint32(t, i, !0), t + 4) },
        u = { len: 4, get: (e, t) => c(e).getUint32(t), put: (e, t, i) => (c(e).setUint32(t, i), t + 4) },
        p = { len: 4, get: (e, t) => c(e).getInt32(t), put: (e, t, i) => (c(e).setInt32(t, i), t + 4) },
        d = { len: 8, get: (e, t) => c(e).getBigUint64(t, !0), put: (e, t, i) => (c(e).setBigUint64(t, i, !0), t + 8) }
      class g {
        constructor(e, t) {
          ;((this.len = e), (this.encoding = t))
        }
        get(e, t = 0) {
          return (function (e, t = "utf-8") {
            switch (t.toLowerCase()) {
              case "utf-8":
              case "utf8": {
                let t = (function () {
                  if (void 0 !== globalThis.TextDecoder)
                    return null != r ? r : (r = new globalThis.TextDecoder("utf-8"))
                })()
                return t
                  ? t.decode(e)
                  : (function (e) {
                      let t = [],
                        i = [],
                        r = 0
                      for (e.length >= 3 && 239 === e[0] && 187 === e[1] && 191 === e[2] && (r = 3); r < e.length;) {
                        var n
                        let a = e[r]
                        if (a <= 127) {
                          ;(o(t, i, a), r++)
                          continue
                        }
                        if (a < 194 || a > 244) {
                          ;(o(t, i, 65533), r++)
                          continue
                        }
                        if (a <= 223) {
                          if (r + 1 >= e.length) {
                            ;(o(t, i, 65533), r++)
                            continue
                          }
                          let n = e[r + 1]
                          if ((192 & n) != 128) {
                            ;(o(t, i, 65533), r++)
                            continue
                          }
                          ;(o(t, i, ((31 & a) << 6) | (63 & n)), (r += 2))
                          continue
                        }
                        if (a <= 239) {
                          if (r + 2 >= e.length) {
                            ;(o(t, i, 65533), r++)
                            continue
                          }
                          let n = e[r + 1],
                            s = e[r + 2]
                          if (
                            (192 & n) != 128 ||
                            (192 & s) != 128 ||
                            (224 === a && n < 160) ||
                            (237 === a && n >= 160)
                          ) {
                            ;(o(t, i, 65533), r++)
                            continue
                          }
                          ;(o(t, i, ((15 & a) << 12) | ((63 & n) << 6) | (63 & s)), (r += 3))
                          continue
                        }
                        if (r + 3 >= e.length) {
                          ;(o(t, i, 65533), r++)
                          continue
                        }
                        let s = e[r + 1],
                          c = e[r + 2],
                          f = e[r + 3]
                        if (
                          (192 & s) != 128 ||
                          (192 & c) != 128 ||
                          (192 & f) != 128 ||
                          (240 === a && s < 144) ||
                          (244 === a && s > 143)
                        ) {
                          ;(o(t, i, 65533), r++)
                          continue
                        }
                        ;((n = ((7 & a) << 18) | ((63 & s) << 12) | ((63 & c) << 6) | (63 & f)) <= 65535
                          ? o(t, i, n)
                          : (o(t, i, 55296 + ((n -= 65536) >> 10)), o(t, i, 56320 + (1023 & n))),
                          (r += 4))
                      }
                      return (s(t, i), t.join(""))
                    })(e)
              }
              case "utf-16le":
                return (function (e) {
                  let t = [],
                    i = [],
                    r = e.length,
                    n = 0
                  for (; n + 1 < r;) {
                    let a = e[n] | (e[n + 1] << 8)
                    if (((n += 2), a >= 55296 && a <= 56319)) {
                      if (n + 1 < r) {
                        let r = e[n] | (e[n + 1] << 8)
                        r >= 56320 && r <= 57343 ? (o(t, i, a), o(t, i, r), (n += 2)) : o(t, i, 65533)
                      } else o(t, i, 65533)
                      continue
                    }
                    if (a >= 56320 && a <= 57343) {
                      o(t, i, 65533)
                      continue
                    }
                    o(t, i, a)
                  }
                  return (n < r && o(t, i, 65533), s(t, i), t.join(""))
                })(e)
              case "us-ascii":
              case "ascii":
                return (function (e) {
                  let t = []
                  for (let i = 0; i < e.length; i += 32768) {
                    let r = Math.min(e.length, i + 32768),
                      n = Array(r - i)
                    for (let t = i, a = 0; t < r; t++, a++) n[a] = 127 & e[t]
                    t.push(String.fromCharCode.apply(null, n))
                  }
                  return t.join("")
                })(e)
              case "latin1":
              case "iso-8859-1":
                return (function (e) {
                  let t = []
                  for (let i = 0; i < e.length; i += 32768) {
                    let r = Math.min(e.length, i + 32768),
                      n = Array(r - i)
                    for (let t = i, a = 0; t < r; t++, a++) n[a] = e[t]
                    t.push(String.fromCharCode.apply(null, n))
                  }
                  return t.join("")
                })(e)
              case "windows-1252":
                return (function (e) {
                  let t = [],
                    i = ""
                  for (let r = 0; r < e.length; r++) {
                    let a = e[r],
                      s = a >= 128 && a <= 159 ? n[a] : void 0
                    ;(i += null != s ? s : String.fromCharCode(a)).length >= 32768 && (t.push(i), (i = ""))
                  }
                  return (i && t.push(i), t.join(""))
                })(e)
              default:
                throw RangeError(`Encoding '${t}' not supported`)
            }
          })(e.subarray(t, t + this.len), this.encoding)
        }
      }
      class x extends Error {
        constructor() {
          ;(super("End-Of-Stream"), (this.name = "EndOfStreamError"))
        }
      }
      class k extends Error {
        constructor(e = "The operation was aborted") {
          ;(super(e), (this.name = "AbortError"))
        }
      }
      class w {
        constructor() {
          ;((this.endOfStream = !1), (this.interrupted = !1), (this.peekQueue = []))
        }
        async peek(e, t = !1) {
          let i = await this.read(e, t)
          return (this.peekQueue.push(e.subarray(0, i)), i)
        }
        async read(e, t = !1) {
          if (0 === e.length) return 0
          let i = this.readFromPeekBuffer(e)
          if ((this.endOfStream || (i += await this.readRemainderFromStream(e.subarray(i), t)), 0 === i && !t))
            throw new x()
          return i
        }
        readFromPeekBuffer(e) {
          let t = e.length,
            i = 0
          for (; this.peekQueue.length > 0 && t > 0;) {
            let r = this.peekQueue.pop()
            if (!r) throw Error("peekData should be defined")
            let n = Math.min(r.length, t)
            ;(e.set(r.subarray(0, n), i), (i += n), (t -= n), n < r.length && this.peekQueue.push(r.subarray(n)))
          }
          return i
        }
        async readRemainderFromStream(e, t) {
          let i = 0
          for (; i < e.length && !this.endOfStream;) {
            if (this.interrupted) throw new k()
            let r = await this.readFromStream(e.subarray(i), t)
            if (0 === r) break
            i += r
          }
          if (!t && i < e.length) throw new x()
          return i
        }
      }
      class y extends w {
        constructor(e) {
          ;(super(), (this.reader = e))
        }
        async abort() {
          return this.close()
        }
        async close() {
          this.reader.releaseLock()
        }
      }
      class b extends y {
        async readFromStream(e, t) {
          if (0 === e.length) return 0
          let i = await this.reader.read(new Uint8Array(e.length), { min: t ? void 0 : e.length })
          return (i.done && (this.endOfStream = i.done), i.value) ? (e.set(i.value), i.value.length) : 0
        }
      }
      class S extends w {
        constructor(e) {
          ;(super(), (this.reader = e), (this.buffer = null))
        }
        writeChunk(e, t) {
          let i = Math.min(t.length, e.length)
          return (e.set(t.subarray(0, i)), i < t.length ? (this.buffer = t.subarray(i)) : (this.buffer = null), i)
        }
        async readFromStream(e, t) {
          if (0 === e.length) return 0
          let i = 0
          for (this.buffer && (i += this.writeChunk(e, this.buffer)); i < e.length && !this.endOfStream;) {
            let t = await this.reader.read()
            if (t.done) {
              this.endOfStream = !0
              break
            }
            t.value && (i += this.writeChunk(e.subarray(i), t.value))
          }
          if (!t && 0 === i && this.endOfStream) throw new x()
          return i
        }
        abort() {
          return ((this.interrupted = !0), this.reader.cancel())
        }
        async close() {
          ;(await this.abort(), this.reader.releaseLock())
        }
      }
      class z {
        constructor(e) {
          ;((this.numBuffer = new Uint8Array(8)),
            (this.position = 0),
            (this.onClose = e?.onClose),
            e?.abortSignal &&
              e.abortSignal.addEventListener("abort", () => {
                this.abort()
              }))
        }
        async readToken(e, t = this.position) {
          let i = new Uint8Array(e.len)
          if ((await this.readBuffer(i, { position: t })) < e.len) throw new x()
          return e.get(i, 0)
        }
        async peekToken(e, t = this.position) {
          let i = new Uint8Array(e.len)
          if ((await this.peekBuffer(i, { position: t })) < e.len) throw new x()
          return e.get(i, 0)
        }
        async readNumber(e) {
          if ((await this.readBuffer(this.numBuffer, { length: e.len })) < e.len) throw new x()
          return e.get(this.numBuffer, 0)
        }
        async peekNumber(e) {
          if ((await this.peekBuffer(this.numBuffer, { length: e.len })) < e.len) throw new x()
          return e.get(this.numBuffer, 0)
        }
        async ignore(e) {
          if (e < 0) throw RangeError("ignore length must be ≥ 0 bytes")
          if (void 0 !== this.fileInfo.size) {
            let t = this.fileInfo.size - this.position
            if (e > t) return ((this.position += t), t)
          }
          return ((this.position += e), e)
        }
        async close() {
          ;(await this.abort(), await this.onClose?.())
        }
        normalizeOptions(e, t) {
          if (!this.supportsRandomAccess() && t && void 0 !== t.position && t.position < this.position)
            throw Error("`options.position` must be equal or greater than `tokenizer.position`")
          return { ...{ mayBeLess: !1, offset: 0, length: e.length, position: this.position }, ...t }
        }
        abort() {
          return Promise.resolve()
        }
      }
      class v extends z {
        constructor(e, t) {
          ;(super(t), (this.streamReader = e), (this.fileInfo = t?.fileInfo ?? {}))
        }
        async readBuffer(e, t) {
          let i = this.normalizeOptions(e, t),
            r = i.position - this.position
          if (r > 0) return (await this.ignore(r), this.readBuffer(e, t))
          if (r < 0) throw Error("`options.position` must be equal or greater than `tokenizer.position`")
          if (0 === i.length) return 0
          let n = await this.streamReader.read(e.subarray(0, i.length), i.mayBeLess)
          if (((this.position += n), (!t || !t.mayBeLess) && n < i.length)) throw new x()
          return n
        }
        async peekBuffer(e, t) {
          let i = this.normalizeOptions(e, t),
            r = 0
          if (i.position) {
            let t = i.position - this.position
            if (t > 0) {
              let n = new Uint8Array(i.length + t)
              return ((r = await this.peekBuffer(n, { mayBeLess: i.mayBeLess })), e.set(n.subarray(t)), r - t)
            }
            if (t < 0) throw Error("Cannot peek from a negative offset in a stream")
          }
          if (i.length > 0) {
            try {
              r = await this.streamReader.peek(e.subarray(0, i.length), i.mayBeLess)
            } catch (e) {
              if (t?.mayBeLess && e instanceof x) return 0
              throw e
            }
            if (!i.mayBeLess && r < i.length) throw new x()
          }
          return r
        }
        async ignore(e) {
          if (e < 0) throw RangeError("ignore length must be ≥ 0 bytes")
          let t = Math.min(256e3, e),
            i = new Uint8Array(t),
            r = 0
          for (; r < e;) {
            let n = e - r,
              a = await this.readBuffer(i, { length: Math.min(t, n) })
            if (a < 0) return a
            r += a
          }
          return r
        }
        abort() {
          return this.streamReader.abort()
        }
        async close() {
          return this.streamReader.close()
        }
        supportsRandomAccess() {
          return !1
        }
      }
      class T extends z {
        constructor(e, t) {
          ;(super(t), (this.uint8Array = e), (this.fileInfo = { ...(t?.fileInfo ?? {}), ...{ size: e.length } }))
        }
        async readBuffer(e, t) {
          t?.position && (this.position = t.position)
          let i = await this.peekBuffer(e, t)
          return ((this.position += i), i)
        }
        async peekBuffer(e, t) {
          let i = this.normalizeOptions(e, t),
            r = Math.min(this.uint8Array.length - i.position, i.length)
          if (!i.mayBeLess && r < i.length) throw new x()
          return (e.set(this.uint8Array.subarray(i.position, i.position + r)), r)
        }
        close() {
          return super.close()
        }
        supportsRandomAccess() {
          return !0
        }
        setPosition(e) {
          this.position = e
        }
      }
      class E extends z {
        constructor(e, t) {
          ;(super(t),
            (this.blob = e),
            (this.fileInfo = { ...(t?.fileInfo ?? {}), ...{ size: e.size, mimeType: e.type } }))
        }
        async readBuffer(e, t) {
          t?.position && (this.position = t.position)
          let i = await this.peekBuffer(e, t)
          return ((this.position += i), i)
        }
        async peekBuffer(e, t) {
          let i = this.normalizeOptions(e, t),
            r = Math.min(this.blob.size - i.position, i.length)
          if (!i.mayBeLess && r < i.length) throw new x()
          let n = await this.blob.slice(i.position, i.position + r).arrayBuffer()
          return (e.set(new Uint8Array(n)), r)
        }
        close() {
          return super.close()
        }
        supportsRandomAccess() {
          return !0
        }
        setPosition(e) {
          this.position = e
        }
      }
      var B = i(28104)
      let A = {
          get: (e) => ({ signature: l.get(e, 0), compressedSize: l.get(e, 8), uncompressedSize: l.get(e, 12) }),
          len: 16,
        },
        I = {
          get(e) {
            let t = h.get(e, 6)
            return {
              signature: l.get(e, 0),
              minVersion: h.get(e, 4),
              dataDescriptor: !!(8 & t),
              compressedMethod: h.get(e, 8),
              compressedSize: l.get(e, 18),
              uncompressedSize: l.get(e, 22),
              filenameLength: h.get(e, 26),
              extraFieldLength: h.get(e, 28),
              filename: null,
            }
          },
          len: 30,
        },
        C = {
          get: (e) => ({
            signature: l.get(e, 0),
            nrOfThisDisk: h.get(e, 4),
            nrOfThisDiskWithTheStart: h.get(e, 6),
            nrOfEntriesOnThisDisk: h.get(e, 8),
            nrOfEntriesOfSize: h.get(e, 10),
            sizeOfCd: l.get(e, 12),
            offsetOfStartOfCd: l.get(e, 16),
            zipFileCommentLength: h.get(e, 20),
          }),
          len: 22,
        },
        D = {
          get(e) {
            let t = h.get(e, 8)
            return {
              signature: l.get(e, 0),
              minVersion: h.get(e, 6),
              dataDescriptor: !!(8 & t),
              compressedMethod: h.get(e, 10),
              compressedSize: l.get(e, 20),
              uncompressedSize: l.get(e, 24),
              filenameLength: h.get(e, 28),
              extraFieldLength: h.get(e, 30),
              fileCommentLength: h.get(e, 32),
              relativeOffsetOfLocalHeader: l.get(e, 42),
              filename: null,
            }
          },
          len: 46,
        }
      function L(e) {
        let t = new Uint8Array(l.len)
        return (l.put(t, 0, e), t)
      }
      let F = B("tokenizer:inflate"),
        M = L(0x8074b50),
        U = L(0x6054b50)
      class R {
        constructor(e) {
          ;((this.tokenizer = e), (this.syncBuffer = new Uint8Array(262144)))
        }
        async isZip() {
          return (await this.peekSignature()) === 0x4034b50
        }
        peekSignature() {
          return this.tokenizer.peekToken(l)
        }
        async findEndOfCentralDirectoryLocator() {
          let e = this.tokenizer,
            t = Math.min(16384, e.fileInfo.size),
            i = this.syncBuffer.subarray(0, t)
          await this.tokenizer.readBuffer(i, { position: e.fileInfo.size - t })
          for (let r = i.length - 4; r >= 0; r--)
            if (i[r] === U[0] && i[r + 1] === U[1] && i[r + 2] === U[2] && i[r + 3] === U[3])
              return e.fileInfo.size - t + r
          return -1
        }
        async readCentralDirectory() {
          if (!this.tokenizer.supportsRandomAccess())
            return void F("Cannot reading central-directory without random-read support")
          F("Reading central-directory...")
          let e = this.tokenizer.position,
            t = await this.findEndOfCentralDirectoryLocator()
          if (t > 0) {
            F("Central-directory 32-bit signature found")
            let i = await this.tokenizer.readToken(C, t),
              r = []
            this.tokenizer.setPosition(i.offsetOfStartOfCd)
            for (let e = 0; e < i.nrOfEntriesOfSize; ++e) {
              let t = await this.tokenizer.readToken(D)
              if (0x2014b50 !== t.signature) throw Error("Expected Central-File-Header signature")
              ;((t.filename = await this.tokenizer.readToken(new g(t.filenameLength, "utf-8"))),
                await this.tokenizer.ignore(t.extraFieldLength),
                await this.tokenizer.ignore(t.fileCommentLength),
                r.push(t),
                F(`Add central-directory file-entry: n=${e + 1}/${r.length}: filename=${r[e].filename}`))
            }
            return (this.tokenizer.setPosition(e), r)
          }
          this.tokenizer.setPosition(e)
        }
        async unzip(e) {
          let t = await this.readCentralDirectory()
          if (t) return this.iterateOverCentralDirectory(t, e)
          let i = !1
          do {
            let t,
              r = await this.readLocalFileHeader()
            if (!r) break
            let n = e(r)
            if (
              ((i = !!n.stop),
              await this.tokenizer.ignore(r.extraFieldLength),
              r.dataDescriptor && 0 === r.compressedSize)
            ) {
              let e = [],
                t = 262144
              F("Compressed-file-size unknown, scanning for next data-descriptor-signature....")
              let i = -1
              for (; i < 0 && 262144 === t;) {
                t = await this.tokenizer.peekBuffer(this.syncBuffer, { mayBeLess: !0 })
                let r =
                  (i = (function (e, t) {
                    let i = e.length,
                      r = t.length
                    if (r > i) return -1
                    for (let n = 0; n <= i - r; n++) {
                      let i = !0
                      for (let a = 0; a < r; a++)
                        if (e[n + a] !== t[a]) {
                          i = !1
                          break
                        }
                      if (i) return n
                    }
                    return -1
                  })(this.syncBuffer.subarray(0, t), M)) >= 0
                    ? i
                    : t
                if (n.handler) {
                  let t = new Uint8Array(r)
                  ;(await this.tokenizer.readBuffer(t), e.push(t))
                } else await this.tokenizer.ignore(r)
              }
              ;(F(`Found data-descriptor-signature at pos=${this.tokenizer.position}`),
                n.handler &&
                  (await this.inflate(
                    r,
                    (function (e) {
                      let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
                        i = 0
                      for (let r of e) (t.set(r, i), (i += r.length))
                      return t
                    })(e),
                    n.handler,
                  )))
            } else
              n.handler
                ? (F(`Reading compressed-file-data: ${r.compressedSize} bytes`),
                  (t = new Uint8Array(r.compressedSize)),
                  await this.tokenizer.readBuffer(t),
                  await this.inflate(r, t, n.handler))
                : (F(`Ignoring compressed-file-data: ${r.compressedSize} bytes`),
                  await this.tokenizer.ignore(r.compressedSize))
            if (
              (F(`Reading data-descriptor at pos=${this.tokenizer.position}`),
              r.dataDescriptor && 0x8074b50 !== (await this.tokenizer.readToken(A)).signature)
            )
              throw Error(`Expected data-descriptor-signature at position ${this.tokenizer.position - A.len}`)
          } while (!i)
        }
        async iterateOverCentralDirectory(e, t) {
          for (let i of e) {
            let e = t(i)
            if (e.handler) {
              this.tokenizer.setPosition(i.relativeOffsetOfLocalHeader)
              let t = await this.readLocalFileHeader()
              if (t) {
                await this.tokenizer.ignore(t.extraFieldLength)
                let r = new Uint8Array(i.compressedSize)
                ;(await this.tokenizer.readBuffer(r), await this.inflate(t, r, e.handler))
              }
            }
            if (e.stop) break
          }
        }
        async inflate(e, t, i) {
          if (0 === e.compressedMethod) return i(t)
          if (8 !== e.compressedMethod) throw Error(`Unsupported ZIP compression method: ${e.compressedMethod}`)
          return (
            F(`Decompress filename=${e.filename}, compressed-size=${t.length}`),
            i(await R.decompressDeflateRaw(t))
          )
        }
        static async decompressDeflateRaw(e) {
          let t = new ReadableStream({
              start(t) {
                ;(t.enqueue(e), t.close())
              },
            }),
            i = new DecompressionStream("deflate-raw"),
            r = t.pipeThrough(i)
          try {
            let e = new Response(r),
              t = await e.arrayBuffer()
            return new Uint8Array(t)
          } catch (e) {
            throw TypeError(
              e instanceof Error
                ? `Failed to deflate ZIP entry: ${e.message}`
                : "Unknown decompression error in ZIP entry",
            )
          }
        }
        async readLocalFileHeader() {
          let e = await this.tokenizer.peekToken(l)
          if (0x4034b50 === e) {
            let e = await this.tokenizer.readToken(I)
            return ((e.filename = await this.tokenizer.readToken(new g(e.filenameLength, "utf-8"))), e)
          }
          if (0x2014b50 === e) return !1
          if (0xe011cfd0 === e) throw Error("Encrypted ZIP")
          throw Error("Unexpected signature")
        }
      }
      class P {
        constructor(e) {
          this.tokenizer = e
        }
        inflate() {
          let e = this.tokenizer
          return new ReadableStream({
            async pull(t) {
              let i = new Uint8Array(1024),
                r = await e.readBuffer(i, { mayBeLess: !0 })
              0 === r ? t.close() : t.enqueue(i.subarray(0, r))
            },
          }).pipeThrough(new DecompressionStream("gzip"))
        }
      }
      function O(e) {
        let { byteLength: t } = e
        return 6 === t
          ? 0x100000000 * e.getUint16(0) + e.getUint32(2)
          : 5 === t
            ? 0x100000000 * e.getUint8(0) + e.getUint32(1)
            : 4 === t
              ? e.getUint32(0)
              : 3 === t
                ? 65536 * e.getUint8(0) + e.getUint16(1)
                : 2 === t
                  ? e.getUint16(0)
                  : 1 === t
                    ? e.getUint8(0)
                    : void 0
      }
      ;(Object.prototype.toString,
        new globalThis.TextDecoder("utf8"),
        new globalThis.TextEncoder(),
        Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0")))
      let N = { get: (e, t) => (127 & e[t + 3]) | (e[t + 2] << 7) | (e[t + 1] << 14) | (e[t] << 21), len: 4 },
        j = new Set(["Unexpected signature", "Encrypted ZIP", "Expected Central-File-Header signature"]),
        $ = [
          "ZIP entry count exceeds ",
          "Unsupported ZIP compression method:",
          "ZIP entry compressed data exceeds ",
          "ZIP entry decompressed data exceeds ",
          "Expected data-descriptor-signature at position ",
        ],
        Z = new Set(["Z_BUF_ERROR", "Z_DATA_ERROR", "ERR_INVALID_STATE"])
      class q extends Error {}
      function W(e, t, i) {
        if (!Number.isFinite(e) || e < 0 || e > t) throw new q(`${i} has invalid size ${e} (maximum ${t} bytes)`)
        return e
      }
      async function V(e, t, { maximumLength: i = 0x1000000, reason: r = "skip" } = {}) {
        let n = W(t, i, r)
        await e.ignore(n)
      }
      async function _(e, t, i, { maximumLength: r = t.length, reason: n = "read" } = {}) {
        let a = W(i?.length ?? t.length, r, n)
        return e.readBuffer(t, { ...i, length: a })
      }
      async function G(e, t) {
        return new ee(t).fromBuffer(e)
      }
      function H(e) {
        switch ((e = e.toLowerCase())) {
          case "application/epub+zip":
            return { ext: "epub", mime: e }
          case "application/vnd.oasis.opendocument.text":
            return { ext: "odt", mime: e }
          case "application/vnd.oasis.opendocument.text-template":
            return { ext: "ott", mime: e }
          case "application/vnd.oasis.opendocument.spreadsheet":
            return { ext: "ods", mime: e }
          case "application/vnd.oasis.opendocument.spreadsheet-template":
            return { ext: "ots", mime: e }
          case "application/vnd.oasis.opendocument.presentation":
            return { ext: "odp", mime: e }
          case "application/vnd.oasis.opendocument.presentation-template":
            return { ext: "otp", mime: e }
          case "application/vnd.oasis.opendocument.graphics":
            return { ext: "odg", mime: e }
          case "application/vnd.oasis.opendocument.graphics-template":
            return { ext: "otg", mime: e }
          case "application/vnd.openxmlformats-officedocument.presentationml.slideshow":
            return { ext: "ppsx", mime: e }
          case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
            return { ext: "xlsx", mime: e }
          case "application/vnd.ms-excel.sheet.macroenabled":
            return { ext: "xlsm", mime: "application/vnd.ms-excel.sheet.macroenabled.12" }
          case "application/vnd.openxmlformats-officedocument.spreadsheetml.template":
            return { ext: "xltx", mime: e }
          case "application/vnd.ms-excel.template.macroenabled":
            return { ext: "xltm", mime: "application/vnd.ms-excel.template.macroenabled.12" }
          case "application/vnd.ms-powerpoint.slideshow.macroenabled":
            return { ext: "ppsm", mime: "application/vnd.ms-powerpoint.slideshow.macroenabled.12" }
          case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            return { ext: "docx", mime: e }
          case "application/vnd.ms-word.document.macroenabled":
            return { ext: "docm", mime: "application/vnd.ms-word.document.macroenabled.12" }
          case "application/vnd.openxmlformats-officedocument.wordprocessingml.template":
            return { ext: "dotx", mime: e }
          case "application/vnd.ms-word.template.macroenabledtemplate":
            return { ext: "dotm", mime: "application/vnd.ms-word.template.macroenabled.12" }
          case "application/vnd.openxmlformats-officedocument.presentationml.template":
            return { ext: "potx", mime: e }
          case "application/vnd.ms-powerpoint.template.macroenabled":
            return { ext: "potm", mime: "application/vnd.ms-powerpoint.template.macroenabled.12" }
          case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
            return { ext: "pptx", mime: e }
          case "application/vnd.ms-powerpoint.presentation.macroenabled":
            return { ext: "pptm", mime: "application/vnd.ms-powerpoint.presentation.macroenabled.12" }
          case "application/vnd.ms-visio.drawing":
            return { ext: "vsdx", mime: "application/vnd.visio" }
          case "application/vnd.ms-package.3dmanufacturing-3dmodel+xml":
            return { ext: "3mf", mime: "model/3mf" }
        }
      }
      function Q(e, t, i) {
        for (let [r, n] of ((i = { offset: 0, ...i }), t.entries()))
          if (i.mask) {
            if (n !== (i.mask[r] & e[r + i.offset])) return !1
          } else if (n !== e[r + i.offset]) return !1
        return !0
      }
      function X(e) {
        let t = e.fileInfo.size
        return !Number.isFinite(t) || t === Number.MAX_SAFE_INTEGER
      }
      function J(e, t, i) {
        return X(e) && e.position - t > i
      }
      function K(e, t = 1048576) {
        for (let i of [e.compressedSize, e.uncompressedSize]) if (!Number.isFinite(i) || i < 0 || i > t) return !1
        return !0
      }
      function Y(e) {
        if (
          e.hasContentTypesEntry &&
          !e.hasUnparseableContentTypes &&
          !e.isParsingContentTypes &&
          !e.hasParsedContentTypesEntry
        ) {
          if (e.hasWordDirectory)
            return { ext: "docx", mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" }
          if (e.hasPresentationDirectory)
            return { ext: "pptx", mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation" }
          if (e.hasSpreadsheetDirectory)
            return { ext: "xlsx", mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }
          if (e.hasThreeDimensionalModelEntry) return { ext: "3mf", mime: "model/3mf" }
        }
      }
      ;((R.prototype.inflate = async function (e, t, i) {
        if (0 === e.compressedMethod) return i(t)
        if (8 !== e.compressedMethod) throw Error(`Unsupported ZIP compression method: ${e.compressedMethod}`)
        return i(
          await (async function (e, { maximumLength: t = 1048576 } = {}) {
            let i = new ReadableStream({
                start(t) {
                  ;(t.enqueue(e), t.close())
                },
              })
                .pipeThrough(new DecompressionStream("deflate-raw"))
                .getReader(),
              r = [],
              n = 0
            try {
              for (;;) {
                let { done: e, value: a } = await i.read()
                if (e) break
                if ((n += a.length) > t)
                  throw (await i.cancel(), Error(`ZIP entry decompressed data exceeds ${t} bytes`))
                r.push(a)
              }
            } finally {
              i.releaseLock()
            }
            let a = new Uint8Array(n),
              s = 0
            for (let e of r) (a.set(e, s), (s += e.length))
            return a
          })(t, { maximumLength: 1048576 }),
        )
      }),
        (R.prototype.unzip = async function (e) {
          let t = !1,
            i = 0,
            r = this.tokenizer.position
          this.knownSizeDescriptorScannedBytes = 0
          do {
            if (J(this.tokenizer, r, 0x1000000)) throw new q("ZIP stream probing exceeds 16777216 bytes")
            let n = await this.readLocalFileHeader()
            if (!n) break
            if (++i > 1024) throw Error("ZIP entry count exceeds 1024")
            let a = e(n)
            ;((t = !!a.stop), await this.tokenizer.ignore(n.extraFieldLength))
            let s = await (async function (e, t, { shouldBuffer: i, maximumDescriptorLength: r = 1048576 } = {}) {
              if (t.dataDescriptor && 0 === t.compressedSize)
                return (async function (e, { shouldBuffer: t, maximumLength: i = 1048576 } = {}) {
                  let { syncBuffer: r } = e,
                    { length: n } = r,
                    a = [],
                    s = 0
                  for (;;) {
                    let o = await e.tokenizer.peekBuffer(r, { mayBeLess: !0 }),
                      c = (function (e, t) {
                        if (e.length < 16) return -1
                        let i = e.length - 16
                        for (let r = 0; r <= i; r++)
                          if (0x8074b50 === l.get(e, r) && l.get(e, r + 8) === t + r) return r
                        return -1
                      })(r.subarray(0, o), s),
                      f = c >= 0 ? 0 : o === n ? Math.min(15, o - 1) : 0,
                      h = c >= 0 ? c : o - f
                    if (0 === h) break
                    if ((s += h) > i) throw Error(`ZIP entry compressed data exceeds ${i} bytes`)
                    if (t) {
                      let t = new Uint8Array(h)
                      ;(await e.tokenizer.readBuffer(t), a.push(t))
                    } else await e.tokenizer.ignore(h)
                    if (c >= 0) break
                  }
                  if ((X(e.tokenizer) || (e.knownSizeDescriptorScannedBytes += s), t)) {
                    let e = new Uint8Array(s),
                      t = 0
                    for (let i of a) (e.set(i, t), (t += i.length))
                    return e
                  }
                })(e, { shouldBuffer: i, maximumLength: r })
              if (!i)
                return void (await V(e.tokenizer, t.compressedSize, {
                  maximumLength: X(e.tokenizer) ? 1048576 : e.tokenizer.fileInfo.size,
                  reason: "ZIP entry compressed data",
                }))
              let n = (function (e) {
                let t = e.fileInfo.size
                return Math.min(Number.isFinite(t) ? Math.max(0, t - e.position) : Number.MAX_SAFE_INTEGER, 0x7fffffff)
              })(e.tokenizer)
              if (!Number.isFinite(t.compressedSize) || t.compressedSize < 0 || t.compressedSize > n)
                throw Error(`ZIP entry compressed data exceeds ${n} bytes`)
              let a = new Uint8Array(t.compressedSize)
              return (await e.tokenizer.readBuffer(a), a)
            })(this, n, {
              shouldBuffer: !!a.handler,
              maximumDescriptorLength: Math.min(
                1048576,
                X(this.tokenizer)
                  ? Math.max(0, 0x1000000 - (this.tokenizer.position - r))
                  : Math.max(0, 1048576 - this.knownSizeDescriptorScannedBytes),
              ),
            })
            if ((a.handler && (await this.inflate(n, s, a.handler)), n.dataDescriptor)) {
              let e = new Uint8Array(16)
              if ((await this.tokenizer.readBuffer(e), 0x8074b50 !== l.get(e, 0)))
                throw Error(`Expected data-descriptor-signature at position ${this.tokenizer.position - e.length}`)
            }
            if (J(this.tokenizer, r, 0x1000000)) throw new q("ZIP stream probing exceeds 16777216 bytes")
          } while (!t)
        }))
      class ee {
        constructor(e) {
          var t
          let i = Number.isFinite((t = e?.mpegOffsetTolerance)) ? Math.max(0, Math.min(4098, Math.trunc(t))) : 0
          ;((this.options = { ...e, mpegOffsetTolerance: i }),
            (this.detectors = [
              ...(this.options.customDetectors ?? []),
              { id: "core", detect: this.detectConfident },
              { id: "core.imprecise", detect: this.detectImprecise },
            ]),
            (this.tokenizerOptions = { abortSignal: this.options.signal }),
            (this.gzipProbeDepth = 0))
        }
        getTokenizerOptions() {
          return { ...this.tokenizerOptions }
        }
        createTokenizerFromWebStream(e) {
          var t
          let i, r, n
          return (function (e) {
            let t = e?.streamReader
            if (t?.constructor?.name !== "WebStreamByobReader") return e
            let { reader: i } = t,
              r = async () => {
                ;(await i.cancel(), i.releaseLock())
              }
            return (
              (t.close = r),
              (t.abort = async () => {
                ;((t.interrupted = !0), await r())
              }),
              e
            )
          })(
            ((t = this.getTokenizerOptions()),
            (i = (function (e) {
              try {
                let t = e.getReader({ mode: "byob" })
                if (t instanceof ReadableStreamDefaultReader) return new S(t)
                return new b(t)
              } catch (t) {
                if (t instanceof TypeError) return new S(e.getReader())
                throw t
              }
            })(e)),
            (n = (r = t ?? {}).onClose),
            (r.onClose = async () => {
              if ((await i.close(), n)) return n()
            }),
            new v(i, r)),
          )
        }
        async parseTokenizer(e, t = 0) {
          this.detectionReentryCount = t
          let i = e.position
          for (let t of this.detectors) {
            let r
            try {
              r = await t.detect(e)
            } catch (e) {
              if (e instanceof x || e instanceof q) return
              throw e
            }
            if (r) return r
            if (i !== e.position) return
          }
        }
        async fromTokenizer(e) {
          try {
            return await this.parseTokenizer(e)
          } finally {
            await e.close()
          }
        }
        async fromBuffer(e) {
          if (!(e instanceof Uint8Array || e instanceof ArrayBuffer))
            throw TypeError(
              `Expected the \`input\` argument to be of type \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof e}\``,
            )
          let t = e instanceof Uint8Array ? e : new Uint8Array(e)
          if (t?.length > 1) return this.fromTokenizer(new T(t, this.getTokenizerOptions()))
        }
        async fromBlob(e) {
          this.options.signal?.throwIfAborted()
          let t = new E(e, this.getTokenizerOptions())
          return this.fromTokenizer(t)
        }
        async fromStream(e) {
          this.options.signal?.throwIfAborted()
          let t = this.createTokenizerFromWebStream(e)
          return this.fromTokenizer(t)
        }
        async toDetectionStream(e, t) {
          var i, r, n
          let a,
            s,
            o = Number.isFinite((i = t?.sampleSize ?? 4100)) ? Math.max(1, Math.trunc(i)) : 4100,
            c = e.getReader({ mode: "byob" })
          try {
            let { value: e, done: t } = await ((r = new Uint8Array(o)),
            (n = this.options.signal),
            void 0 === n
              ? c.read(r)
              : (n.throwIfAborted(),
                new Promise((e, t) => {
                  let i = () => {
                      n.removeEventListener("abort", a)
                    },
                    a = () => {
                      let e = n.reason
                      ;(i(),
                        (async () => {
                          try {
                            await c.cancel(e)
                          } catch {}
                        })(),
                        t(e))
                    }
                  ;(n.addEventListener("abort", a, { once: !0 }),
                    (async () => {
                      try {
                        let t = await c.read(r)
                        ;(i(), e(t))
                      } catch (e) {
                        ;(i(), t(e))
                      }
                    })())
                })))
            if (((s = e), !t && e))
              try {
                a = await this.fromBuffer(e.subarray(0, o))
              } catch (e) {
                if (!(e instanceof x)) throw e
                a = void 0
              }
            s = e
          } finally {
            c.releaseLock()
          }
          let f = new TransformStream({
              async start(e) {
                e.enqueue(s)
              },
              transform(e, t) {
                t.enqueue(e)
              },
            }),
            h = e.pipeThrough(f)
          return ((h.fileType = a), h)
        }
        async detectGzip(e) {
          let t, i, r, n, a, s, o, c, f
          if (this.gzipProbeDepth >= 1) return { ext: "gz", mime: "application/gzip" }
          let h =
              ((a = new P(e).inflate().getReader()),
              (s = 0),
              (o = !1),
              (c = !1),
              (f = async (e) => {
                o || c || ((c = !0), await a.cancel(e))
              }),
              new ReadableStream({
                async pull(e) {
                  if (s >= 0x1000000) {
                    ;(e.close(), await f())
                    return
                  }
                  let { done: t, value: i } = await a.read()
                  if (t || !i) {
                    ;((o = !0), e.close())
                    return
                  }
                  let r = 0x1000000 - s
                  if (i.length > r) {
                    ;(e.enqueue(i.subarray(0, r)), (s += r), e.close(), await f())
                    return
                  }
                  ;(e.enqueue(i), (s += i.length))
                },
                async cancel(e) {
                  await f(e)
                },
              })),
            m = X(e)
          if (m) {
            let e = new AbortController()
            ;((t = setTimeout(() => {
              e.abort(new DOMException("Operation timed out after 100 ms", "TimeoutError"))
            }, 100)),
              (i = void 0 === this.options.signal ? e.signal : AbortSignal.any([this.options.signal, e.signal])),
              ((r = new ee({ ...this.options, signal: i })).gzipProbeDepth = this.gzipProbeDepth + 1))
          } else this.gzipProbeDepth++
          try {
            n = await (r ?? this).fromStream(h)
          } catch (e) {
            if (e?.name === "AbortError" && i?.reason?.name !== "TimeoutError") throw e
          } finally {
            ;(clearTimeout(t), !m && this.gzipProbeDepth--)
          }
          return n?.ext === "tar"
            ? { ext: "tar.gz", mime: "application/gzip" }
            : { ext: "gz", mime: "application/gzip" }
        }
        check(e, t) {
          return Q(this.buffer, e, t)
        }
        checkString(e, t) {
          return this.check(
            (function (e, t) {
              if ("utf-16le" === t) {
                let t = []
                for (let i = 0; i < e.length; i++) {
                  let r = e.charCodeAt(i)
                  t.push(255 & r, (r >> 8) & 255)
                }
                return t
              }
              if ("utf-16be" === t) {
                let t = []
                for (let i = 0; i < e.length; i++) {
                  let r = e.charCodeAt(i)
                  t.push((r >> 8) & 255, 255 & r)
                }
                return t
              }
              return [...e].map((e) => e.charCodeAt(0))
            })(e, t?.encoding),
            t,
          )
        }
        detectConfident = async (e) => {
          if (
            ((this.buffer = new Uint8Array(4100)),
            void 0 === e.fileInfo.size && (e.fileInfo.size = Number.MAX_SAFE_INTEGER),
            (this.tokenizer = e),
            X(e) && (await e.peekBuffer(this.buffer, { length: 3, mayBeLess: !0 }), this.check([31, 139, 8])))
          )
            return this.detectGzip(e)
          if ((await e.peekBuffer(this.buffer, { length: 32, mayBeLess: !0 }), this.check([66, 77])))
            return { ext: "bmp", mime: "image/bmp" }
          if (this.check([11, 119])) return { ext: "ac3", mime: "audio/vnd.dolby.dd-raw" }
          if (this.check([120, 1])) return { ext: "dmg", mime: "application/x-apple-diskimage" }
          if (this.check([77, 90])) return { ext: "exe", mime: "application/x-msdownload" }
          if (this.check([37, 33]))
            return (await e.peekBuffer(this.buffer, { length: 24, mayBeLess: !0 }),
            this.checkString("PS-Adobe-", { offset: 2 }) && this.checkString(" EPSF-", { offset: 14 }))
              ? { ext: "eps", mime: "application/eps" }
              : { ext: "ps", mime: "application/postscript" }
          if (this.check([31, 160]) || this.check([31, 157])) return { ext: "Z", mime: "application/x-compress" }
          if (this.check([199, 113])) return { ext: "cpio", mime: "application/x-cpio" }
          if (this.check([96, 234])) return { ext: "arj", mime: "application/x-arj" }
          if (this.check([239, 187, 191])) {
            if (this.detectionReentryCount >= 256) return
            return (this.detectionReentryCount++, await this.tokenizer.ignore(3), this.detectConfident(e))
          }
          if (this.check([71, 73, 70])) return { ext: "gif", mime: "image/gif" }
          if (this.check([73, 73, 188])) return { ext: "jxr", mime: "image/vnd.ms-photo" }
          if (this.check([31, 139, 8])) return this.detectGzip(e)
          if (this.check([66, 90, 104])) return { ext: "bz2", mime: "application/x-bzip2" }
          if (this.checkString("ID3")) {
            await V(e, 6, { maximumLength: 6, reason: "ID3 header prefix" })
            let t = await e.readToken(N),
              i = X(e)
            if (!Number.isFinite(t) || t < 0 || (i && (t > 0x1000000 || e.position + t > 0x1000000))) return
            if (e.position + t > e.fileInfo.size) {
              if (i) return
              return { ext: "mp3", mime: "audio/mpeg" }
            }
            try {
              await V(e, t, { maximumLength: i ? 0x1000000 : e.fileInfo.size, reason: "ID3 payload" })
            } catch (e) {
              if (e instanceof x) return
              throw e
            }
            if (this.detectionReentryCount >= 256) return
            return (this.detectionReentryCount++, this.parseTokenizer(e, this.detectionReentryCount))
          }
          if (this.checkString("MP+")) return { ext: "mpc", mime: "audio/x-musepack" }
          if ((67 === this.buffer[0] || 70 === this.buffer[0]) && this.check([87, 83], { offset: 1 }))
            return { ext: "swf", mime: "application/x-shockwave-flash" }
          if (this.check([255, 216, 255]))
            return this.check([247], { offset: 3 })
              ? { ext: "jls", mime: "image/jls" }
              : { ext: "jpg", mime: "image/jpeg" }
          if (this.check([79, 98, 106, 1])) return { ext: "avro", mime: "application/avro" }
          if (this.checkString("FLIF")) return { ext: "flif", mime: "image/flif" }
          if (this.checkString("8BPS")) return { ext: "psd", mime: "image/vnd.adobe.photoshop" }
          if (this.checkString("MPCK")) return { ext: "mpc", mime: "audio/x-musepack" }
          if (this.checkString("FORM")) return { ext: "aif", mime: "audio/aiff" }
          if (this.checkString("icns", { offset: 0 })) return { ext: "icns", mime: "image/icns" }
          if (this.check([80, 75, 3, 4])) {
            let t,
              i = {
                hasContentTypesEntry: !1,
                hasParsedContentTypesEntry: !1,
                isParsingContentTypes: !1,
                hasUnparseableContentTypes: !1,
                hasWordDirectory: !1,
                hasPresentationDirectory: !1,
                hasSpreadsheetDirectory: !1,
                hasThreeDimensionalModelEntry: !1,
              }
            try {
              await new R(e).unzip((e) => {
                var r
                ;((r = e.filename).startsWith("word/") && (i.hasWordDirectory = !0),
                  r.startsWith("ppt/") && (i.hasPresentationDirectory = !0),
                  r.startsWith("xl/") && (i.hasSpreadsheetDirectory = !0),
                  r.startsWith("3D/") && r.endsWith(".model") && (i.hasThreeDimensionalModelEntry = !0))
                let n = "[Content_Types].xml" === e.filename,
                  a = Y(i)
                if (!n && a) return ((t = a), { stop: !0 })
                switch (e.filename) {
                  case "META-INF/mozilla.rsa":
                    return ((t = { ext: "xpi", mime: "application/x-xpinstall" }), { stop: !0 })
                  case "META-INF/MANIFEST.MF":
                    return ((t = { ext: "jar", mime: "application/java-archive" }), { stop: !0 })
                  case "mimetype":
                    if (!K(e, 1048576)) return {}
                    return {
                      async handler(e) {
                        let i = new TextDecoder("utf-8").decode(e).trim()
                        t = H(i)
                      },
                      stop: !0,
                    }
                  case "[Content_Types].xml":
                    if (((i.hasContentTypesEntry = !0), !K(e, 1048576)))
                      return ((i.hasUnparseableContentTypes = !0), {})
                    return (
                      (i.isParsingContentTypes = !0),
                      {
                        async handler(e) {
                          let r = new TextDecoder("utf-8").decode(e),
                            n = (function (e) {
                              let t = e.indexOf('.main+xml"')
                              if (-1 === t) {
                                let t = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml"
                                return e.includes(`ContentType="${t}"`) ? t : void 0
                              }
                              let i = e.slice(0, t),
                                r = i.lastIndexOf('"')
                              return i.slice(r + 1)
                            })(r)
                          ;(n && (t = H(n)), (i.hasParsedContentTypesEntry = !0), (i.isParsingContentTypes = !1))
                        },
                        stop: !0,
                      }
                    )
                  default:
                    if (/classes\d*\.dex/.test(e.filename))
                      return ((t = { ext: "apk", mime: "application/vnd.android.package-archive" }), { stop: !0 })
                    return {}
                }
              })
            } catch (e) {
              if (
                !(function (e) {
                  if (e instanceof x || e instanceof q) return !0
                  if (!(e instanceof Error)) return !1
                  if (j.has(e.message) || Z.has(e.code)) return !0
                  for (let t of $) if (e.message.startsWith(t)) return !0
                  return !1
                })(e)
              )
                throw e
              i.isParsingContentTypes && ((i.isParsingContentTypes = !1), (i.hasUnparseableContentTypes = !0))
            }
            return t ?? Y(i) ?? { ext: "zip", mime: "application/zip" }
          }
          if (this.checkString("OggS")) {
            await e.ignore(28)
            let t = new Uint8Array(8)
            return (await e.readBuffer(t), Q(t, [79, 112, 117, 115, 72, 101, 97, 100]))
              ? { ext: "opus", mime: "audio/ogg; codecs=opus" }
              : Q(t, [128, 116, 104, 101, 111, 114, 97])
                ? { ext: "ogv", mime: "video/ogg" }
                : Q(t, [1, 118, 105, 100, 101, 111, 0])
                  ? { ext: "ogm", mime: "video/ogg" }
                  : Q(t, [127, 70, 76, 65, 67])
                    ? { ext: "oga", mime: "audio/ogg" }
                    : Q(t, [83, 112, 101, 101, 120, 32, 32])
                      ? { ext: "spx", mime: "audio/ogg" }
                      : Q(t, [1, 118, 111, 114, 98, 105, 115])
                        ? { ext: "ogg", mime: "audio/ogg" }
                        : { ext: "ogx", mime: "application/ogg" }
          }
          if (
            this.check([80, 75]) &&
            (3 === this.buffer[2] || 5 === this.buffer[2] || 7 === this.buffer[2]) &&
            (4 === this.buffer[3] || 6 === this.buffer[3] || 8 === this.buffer[3])
          )
            return { ext: "zip", mime: "application/zip" }
          if (this.checkString("MThd")) return { ext: "mid", mime: "audio/midi" }
          if (
            this.checkString("wOFF") &&
            (this.check([0, 1, 0, 0], { offset: 4 }) || this.checkString("OTTO", { offset: 4 }))
          )
            return { ext: "woff", mime: "font/woff" }
          if (
            this.checkString("wOF2") &&
            (this.check([0, 1, 0, 0], { offset: 4 }) || this.checkString("OTTO", { offset: 4 }))
          )
            return { ext: "woff2", mime: "font/woff2" }
          if (this.check([212, 195, 178, 161]) || this.check([161, 178, 195, 212]))
            return { ext: "pcap", mime: "application/vnd.tcpdump.pcap" }
          if (this.checkString("DSD ")) return { ext: "dsf", mime: "audio/x-dsf" }
          if (this.checkString("LZIP")) return { ext: "lz", mime: "application/x-lzip" }
          if (this.checkString("fLaC")) return { ext: "flac", mime: "audio/flac" }
          if (this.check([66, 80, 71, 251])) return { ext: "bpg", mime: "image/bpg" }
          if (this.checkString("wvpk")) return { ext: "wv", mime: "audio/wavpack" }
          if (this.checkString("%PDF")) return { ext: "pdf", mime: "application/pdf" }
          if (this.check([0, 97, 115, 109])) return { ext: "wasm", mime: "application/wasm" }
          if (this.check([73, 73])) {
            let e = await this.readTiffHeader(!1)
            if (e) return e
          }
          if (this.check([77, 77])) {
            let e = await this.readTiffHeader(!0)
            if (e) return e
          }
          if (this.checkString("MAC ")) return { ext: "ape", mime: "audio/ape" }
          if (this.check([26, 69, 223, 163])) {
            async function t() {
              let t = await e.peekNumber(f),
                i = 128,
                r = 0
              for (; (t & i) == 0 && 0 !== i;) (++r, (i >>= 1))
              let n = new Uint8Array(r + 1)
              return (await _(e, n, void 0, { maximumLength: n.length, reason: "EBML field" }), n)
            }
            async function i() {
              let e = await t(),
                i = await t()
              i[0] ^= 128 >> (i.length - 1)
              let r = Math.min(6, i.length),
                n = new DataView(e.buffer),
                a = new DataView(i.buffer, i.length - r, r)
              return { id: O(n), len: O(a) }
            }
            let r = await i(),
              n = e.position
            switch (
              await (async function (t) {
                let r = 0
                for (; t > 0;) {
                  if (++r > 256 || J(e, n, 0x1000000)) return
                  let a = e.position,
                    s = await i()
                  if (17026 === s.id) {
                    if (s.len > 64) return
                    let t = W(s.len, 64, "EBML DocType")
                    return (await e.readToken(new g(t))).replaceAll(/\00.*$/g, "")
                  }
                  if (
                    (X(e) && (!Number.isFinite(s.len) || s.len < 0 || s.len > 1048576)) ||
                    (await V(e, s.len, { maximumLength: X(e) ? 1048576 : e.fileInfo.size, reason: "EBML payload" }),
                    --t,
                    e.position <= a)
                  )
                    return
                }
              })(r.len)
            ) {
              case "webm":
                return { ext: "webm", mime: "video/webm" }
              case "matroska":
                return { ext: "mkv", mime: "video/matroska" }
              default:
                return
            }
          }
          if (this.checkString("SQLi")) return { ext: "sqlite", mime: "application/x-sqlite3" }
          if (this.check([78, 69, 83, 26])) return { ext: "nes", mime: "application/x-nintendo-nes-rom" }
          if (this.checkString("Cr24")) return { ext: "crx", mime: "application/x-google-chrome-extension" }
          if (this.checkString("MSCF") || this.checkString("ISc("))
            return { ext: "cab", mime: "application/vnd.ms-cab-compressed" }
          if (this.check([237, 171, 238, 219])) return { ext: "rpm", mime: "application/x-rpm" }
          if (this.check([197, 208, 211, 198])) return { ext: "eps", mime: "application/eps" }
          if (this.check([40, 181, 47, 253])) return { ext: "zst", mime: "application/zstd" }
          if (this.check([127, 69, 76, 70])) return { ext: "elf", mime: "application/x-elf" }
          if (this.check([33, 66, 68, 78])) return { ext: "pst", mime: "application/vnd.ms-outlook" }
          if (this.checkString("PAR1") || this.checkString("PARE"))
            return { ext: "parquet", mime: "application/vnd.apache.parquet" }
          if (this.checkString("ttcf")) return { ext: "ttc", mime: "font/collection" }
          if (
            this.check([254, 237, 250, 206]) ||
            this.check([254, 237, 250, 207]) ||
            this.check([206, 250, 237, 254]) ||
            this.check([207, 250, 237, 254])
          )
            return { ext: "macho", mime: "application/x-mach-binary" }
          if (this.check([4, 34, 77, 24])) return { ext: "lz4", mime: "application/x-lz4" }
          if (this.checkString("regf")) return { ext: "dat", mime: "application/x-ft-windows-registry-hive" }
          if (this.checkString("$FL2") || this.checkString("$FL3"))
            return { ext: "sav", mime: "application/x-spss-sav" }
          if (this.check([79, 84, 84, 79, 0])) return { ext: "otf", mime: "font/otf" }
          if (this.checkString("#!AMR")) return { ext: "amr", mime: "audio/amr" }
          if (this.checkString("{\\rtf")) return { ext: "rtf", mime: "application/rtf" }
          if (this.check([70, 76, 86, 1])) return { ext: "flv", mime: "video/x-flv" }
          if (this.checkString("IMPM")) return { ext: "it", mime: "audio/x-it" }
          if (
            this.checkString("-lh0-", { offset: 2 }) ||
            this.checkString("-lh1-", { offset: 2 }) ||
            this.checkString("-lh2-", { offset: 2 }) ||
            this.checkString("-lh3-", { offset: 2 }) ||
            this.checkString("-lh4-", { offset: 2 }) ||
            this.checkString("-lh5-", { offset: 2 }) ||
            this.checkString("-lh6-", { offset: 2 }) ||
            this.checkString("-lh7-", { offset: 2 }) ||
            this.checkString("-lzs-", { offset: 2 }) ||
            this.checkString("-lz4-", { offset: 2 }) ||
            this.checkString("-lz5-", { offset: 2 }) ||
            this.checkString("-lhd-", { offset: 2 })
          )
            return { ext: "lzh", mime: "application/x-lzh-compressed" }
          if (this.check([0, 0, 1, 186])) {
            if (this.check([33], { offset: 4, mask: [241] })) return { ext: "mpg", mime: "video/MP1S" }
            if (this.check([68], { offset: 4, mask: [196] })) return { ext: "mpg", mime: "video/MP2P" }
          }
          if (this.checkString("ITSF")) return { ext: "chm", mime: "application/vnd.ms-htmlhelp" }
          if (this.check([202, 254, 186, 190])) {
            let e = u.get(this.buffer, 4),
              t = m.get(this.buffer, 6)
            if (e > 0 && e <= 30) return { ext: "macho", mime: "application/x-mach-binary" }
            if (t > 30) return { ext: "class", mime: "application/java-vm" }
          }
          if (this.checkString(".RMF")) return { ext: "rm", mime: "application/vnd.rn-realmedia" }
          if (this.checkString("DRACO")) return { ext: "drc", mime: "application/vnd.google.draco" }
          if (this.check([253, 55, 122, 88, 90, 0])) return { ext: "xz", mime: "application/x-xz" }
          if (this.checkString("<?xml ")) return { ext: "xml", mime: "application/xml" }
          if (this.check([55, 122, 188, 175, 39, 28])) return { ext: "7z", mime: "application/x-7z-compressed" }
          if (this.check([82, 97, 114, 33, 26, 7]) && (0 === this.buffer[6] || 1 === this.buffer[6]))
            return { ext: "rar", mime: "application/x-rar-compressed" }
          if (this.checkString("solid ")) return { ext: "stl", mime: "model/stl" }
          if (this.checkString("AC")) {
            let e = new g(4, "latin1").get(this.buffer, 2)
            if (e.match("^d*") && e >= 1e3 && e <= 1050) return { ext: "dwg", mime: "image/vnd.dwg" }
          }
          if (this.checkString("070707")) return { ext: "cpio", mime: "application/x-cpio" }
          if (this.checkString("BLENDER")) return { ext: "blend", mime: "application/x-blender" }
          if (this.checkString("!<arch>"))
            return (await e.ignore(8), "debian-binary" === (await e.readToken(new g(13, "ascii"))))
              ? { ext: "deb", mime: "application/x-deb" }
              : { ext: "ar", mime: "application/x-unix-archive" }
          if (this.checkString("WEBVTT") && ["\n", "\r", "	", " ", "\0"].some((e) => this.checkString(e, { offset: 6 })))
            return { ext: "vtt", mime: "text/vtt" }
          if (this.check([137, 80, 78, 71, 13, 10, 26, 10])) {
            let t = { ext: "png", mime: "image/png" },
              i = { ext: "apng", mime: "image/apng" }
            await e.ignore(8)
            let r = X(e),
              n = e.position,
              a = 0,
              s = !1
            do {
              if (++a > 512 || J(e, n, 0x1000000)) break
              let o = e.position,
                c = await (async function () {
                  return { length: await e.readToken(p), type: await e.readToken(new g(4, "latin1")) }
                })()
              if (c.length < 0) return
              if ("IHDR" === c.type) {
                if (13 !== c.length) return
                s = !0
              }
              switch (c.type) {
                case "IDAT":
                  return t
                case "acTL":
                  return i
                default:
                  if (!s && "CgBI" !== c.type) return
                  if (r && c.length > 1048576) return s && (32 & c.type.codePointAt(0)) != 0 ? t : void 0
                  try {
                    await V(e, c.length + 4, {
                      maximumLength: r ? 1048580 : e.fileInfo.size,
                      reason: "PNG chunk payload",
                    })
                  } catch (e) {
                    if (!r && (e instanceof q || e instanceof x)) return t
                    throw e
                  }
              }
              if (e.position <= o) break
            } while (e.position + 8 < e.fileInfo.size)
            return t
          }
          if (this.check([65, 82, 82, 79, 87, 49, 0, 0]))
            return { ext: "arrow", mime: "application/vnd.apache.arrow.file" }
          if (this.check([103, 108, 84, 70, 2, 0, 0, 0])) return { ext: "glb", mime: "model/gltf-binary" }
          if (
            this.check([102, 114, 101, 101], { offset: 4 }) ||
            this.check([109, 100, 97, 116], { offset: 4 }) ||
            this.check([109, 111, 111, 118], { offset: 4 }) ||
            this.check([119, 105, 100, 101], { offset: 4 })
          )
            return { ext: "mov", mime: "video/quicktime" }
          if (this.check([73, 73, 82, 79, 8, 0, 0, 0, 24])) return { ext: "orf", mime: "image/x-olympus-orf" }
          if (this.checkString("gimp xcf ")) return { ext: "xcf", mime: "image/x-xcf" }
          if (this.checkString("ftyp", { offset: 4 }) && (96 & this.buffer[8]) != 0) {
            let e = new g(4, "latin1").get(this.buffer, 8).replace("\0", " ").trim()
            switch (e) {
              case "avif":
              case "avis":
                return { ext: "avif", mime: "image/avif" }
              case "mif1":
                return { ext: "heic", mime: "image/heif" }
              case "msf1":
                return { ext: "heic", mime: "image/heif-sequence" }
              case "heic":
              case "heix":
                return { ext: "heic", mime: "image/heic" }
              case "hevc":
              case "hevx":
                return { ext: "heic", mime: "image/heic-sequence" }
              case "qt":
                return { ext: "mov", mime: "video/quicktime" }
              case "M4V":
              case "M4VH":
              case "M4VP":
                return { ext: "m4v", mime: "video/x-m4v" }
              case "M4P":
                return { ext: "m4p", mime: "video/mp4" }
              case "M4B":
                return { ext: "m4b", mime: "audio/mp4" }
              case "M4A":
                return { ext: "m4a", mime: "audio/x-m4a" }
              case "F4V":
                return { ext: "f4v", mime: "video/mp4" }
              case "F4P":
                return { ext: "f4p", mime: "video/mp4" }
              case "F4A":
                return { ext: "f4a", mime: "audio/mp4" }
              case "F4B":
                return { ext: "f4b", mime: "audio/mp4" }
              case "crx":
                return { ext: "cr3", mime: "image/x-canon-cr3" }
              default:
                if (e.startsWith("3g")) {
                  if (e.startsWith("3g2")) return { ext: "3g2", mime: "video/3gpp2" }
                  return { ext: "3gp", mime: "video/3gpp" }
                }
                return { ext: "mp4", mime: "video/mp4" }
            }
          }
          if (this.checkString("REGEDIT4\r\n")) return { ext: "reg", mime: "application/x-ms-regedit" }
          if (this.check([82, 73, 70, 70])) {
            if (this.checkString("WEBP", { offset: 8 })) return { ext: "webp", mime: "image/webp" }
            if (this.check([65, 86, 73], { offset: 8 })) return { ext: "avi", mime: "video/vnd.avi" }
            if (this.check([87, 65, 86, 69], { offset: 8 })) return { ext: "wav", mime: "audio/wav" }
            if (this.check([81, 76, 67, 77], { offset: 8 })) return { ext: "qcp", mime: "audio/qcelp" }
          }
          if (this.check([73, 73, 85, 0, 24, 0, 0, 0, 136, 231, 116, 216]))
            return { ext: "rw2", mime: "image/x-panasonic-rw2" }
          if (this.check([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
            let t = !1
            try {
              await V(e, 30, { maximumLength: 30, reason: "ASF header prelude" })
              let i = X(e),
                r = e.position,
                n = 0
              for (; e.position + 24 < e.fileInfo.size && !(++n > 512 || J(e, r, 0x1000000));) {
                let r = e.position,
                  n = await (async function () {
                    let t = new Uint8Array(16)
                    return (
                      await _(e, t, void 0, { maximumLength: t.length, reason: "ASF header GUID" }),
                      { id: t, size: Number(await e.readToken(d)) }
                    )
                  })(),
                  a = n.size - 24
                if (!Number.isFinite(a) || a < 0) {
                  t = !0
                  break
                }
                if (Q(n.id, [145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101])) {
                  let t = new Uint8Array(16)
                  if (
                    ((a -= await _(e, t, void 0, { maximumLength: t.length, reason: "ASF stream type GUID" })),
                    Q(t, [64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43]))
                  )
                    return { ext: "asf", mime: "audio/x-ms-asf" }
                  if (Q(t, [192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43]))
                    return { ext: "asf", mime: "video/x-ms-asf" }
                  break
                }
                if (
                  (i && a > 1048576) ||
                  (await V(e, a, { maximumLength: i ? 1048576 : e.fileInfo.size, reason: "ASF header payload" }),
                  e.position <= r)
                ) {
                  t = !0
                  break
                }
              }
            } catch (i) {
              if (i instanceof x || i instanceof q) X(e) && (t = !0)
              else throw i
            }
            if (t) return
            return { ext: "asf", mime: "application/vnd.ms-asf" }
          }
          if (this.check([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10])) return { ext: "ktx", mime: "image/ktx" }
          if ((this.check([126, 16, 4]) || this.check([126, 24, 4])) && this.check([48, 77, 73, 69], { offset: 4 }))
            return { ext: "mie", mime: "application/x-mie" }
          if (this.check([39, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], { offset: 2 }))
            return { ext: "shp", mime: "application/x-esri-shape" }
          if (this.check([255, 79, 255, 81])) return { ext: "j2c", mime: "image/j2c" }
          if (this.check([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10]))
            switch ((await e.ignore(20), await e.readToken(new g(4, "ascii")))) {
              case "jp2 ":
                return { ext: "jp2", mime: "image/jp2" }
              case "jpx ":
                return { ext: "jpx", mime: "image/jpx" }
              case "jpm ":
                return { ext: "jpm", mime: "image/jpm" }
              case "mjp2":
                return { ext: "mj2", mime: "image/mj2" }
              default:
                return
            }
          if (this.check([255, 10]) || this.check([0, 0, 0, 12, 74, 88, 76, 32, 13, 10, 135, 10]))
            return { ext: "jxl", mime: "image/jxl" }
          if (this.check([254, 255]))
            return this.checkString("<?xml ", { offset: 2, encoding: "utf-16be" })
              ? { ext: "xml", mime: "application/xml" }
              : void 0
          if (this.check([208, 207, 17, 224, 161, 177, 26, 225])) return { ext: "cfb", mime: "application/x-cfb" }
          if (
            (await e.peekBuffer(this.buffer, { length: Math.min(256, e.fileInfo.size), mayBeLess: !0 }),
            this.check([97, 99, 115, 112], { offset: 36 }))
          )
            return { ext: "icc", mime: "application/vnd.iccprofile" }
          if (this.checkString("**ACE", { offset: 7 }) && this.checkString("**", { offset: 12 }))
            return { ext: "ace", mime: "application/x-ace-compressed" }
          if (this.checkString("BEGIN:")) {
            if (this.checkString("VCARD", { offset: 6 })) return { ext: "vcf", mime: "text/vcard" }
            if (this.checkString("VCALENDAR", { offset: 6 })) return { ext: "ics", mime: "text/calendar" }
          }
          if (this.checkString("FUJIFILMCCD-RAW")) return { ext: "raf", mime: "image/x-fujifilm-raf" }
          if (this.checkString("Extended Module:")) return { ext: "xm", mime: "audio/x-xm" }
          if (this.checkString("Creative Voice File")) return { ext: "voc", mime: "audio/x-voc" }
          if (this.check([4, 0, 0, 0]) && this.buffer.length >= 16) {
            let e = new DataView(this.buffer.buffer).getUint32(12, !0)
            if (e > 12 && this.buffer.length >= e + 16)
              try {
                let t = new TextDecoder().decode(this.buffer.subarray(16, e + 16))
                if (JSON.parse(t).files) return { ext: "asar", mime: "application/x-asar" }
              } catch {}
          }
          if (this.check([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2])) return { ext: "mxf", mime: "application/mxf" }
          if (this.checkString("SCRM", { offset: 44 })) return { ext: "s3m", mime: "audio/x-s3m" }
          if (
            (this.check([71]) && this.check([71], { offset: 188 })) ||
            (this.check([71], { offset: 4 }) && this.check([71], { offset: 196 }))
          )
            return { ext: "mts", mime: "video/mp2t" }
          if (this.check([66, 79, 79, 75, 77, 79, 66, 73], { offset: 60 }))
            return { ext: "mobi", mime: "application/x-mobipocket-ebook" }
          if (this.check([68, 73, 67, 77], { offset: 128 })) return { ext: "dcm", mime: "application/dicom" }
          if (this.check([76, 0, 0, 0, 1, 20, 2, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70]))
            return { ext: "lnk", mime: "application/x.ms.shortcut" }
          if (this.check([98, 111, 111, 107, 0, 0, 0, 0, 109, 97, 114, 107, 0, 0, 0, 0]))
            return { ext: "alias", mime: "application/x.apple.alias" }
          if (this.checkString("Kaydara FBX Binary  \0")) return { ext: "fbx", mime: "application/x.autodesk.fbx" }
          if (
            this.check([76, 80], { offset: 34 }) &&
            (this.check([0, 0, 1], { offset: 8 }) ||
              this.check([1, 0, 2], { offset: 8 }) ||
              this.check([2, 0, 2], { offset: 8 }))
          )
            return { ext: "eot", mime: "application/vnd.ms-fontobject" }
          if (this.check([6, 6, 237, 245, 216, 29, 70, 229, 189, 49, 239, 231, 254, 116, 183, 29]))
            return { ext: "indd", mime: "application/x-indesign" }
          if (
            this.check([255, 255, 0, 0, 7, 0, 0, 0, 4, 0, 0, 0, 1, 0, 1, 0]) ||
            this.check([0, 0, 255, 255, 0, 0, 0, 7, 0, 0, 0, 4, 0, 1, 0, 1])
          )
            return { ext: "jmp", mime: "application/x-jmp-data" }
          if (
            (await e.peekBuffer(this.buffer, { length: Math.min(512, e.fileInfo.size), mayBeLess: !0 }),
            (this.checkString("ustar", { offset: 257 }) &&
              (this.checkString("\0", { offset: 262 }) || this.checkString(" ", { offset: 262 }))) ||
              (this.check([0, 0, 0, 0, 0, 0], { offset: 257 }) &&
                (function (e, t = 0) {
                  let i = Number.parseInt(new g(6).get(e, 148).replace(/\0.*$/, "").trim(), 8)
                  if (Number.isNaN(i)) return !1
                  let r = 256
                  for (let i = t; i < t + 148; i++) r += e[i]
                  for (let i = t + 156; i < t + 512; i++) r += e[i]
                  return i === r
                })(this.buffer)))
          )
            return { ext: "tar", mime: "application/x-tar" }
          if (this.check([255, 254])) {
            let e = "utf-16le"
            return this.checkString("<?xml ", { offset: 2, encoding: e })
              ? { ext: "xml", mime: "application/xml" }
              : this.check([255, 14], { offset: 2 }) && this.checkString("SketchUp Model", { offset: 4, encoding: e })
                ? { ext: "skp", mime: "application/vnd.sketchup.skp" }
                : this.checkString("Windows Registry Editor Version 5.00\r\n", { offset: 2, encoding: e })
                  ? { ext: "reg", mime: "application/x-ms-regedit" }
                  : void 0
          }
          if (this.checkString("-----BEGIN PGP MESSAGE-----")) return { ext: "pgp", mime: "application/pgp-encrypted" }
        }
        detectImprecise = async (e) => {
          var t
          this.buffer = new Uint8Array(4100)
          let i = Number.isFinite((t = e.fileInfo.size)) ? Math.max(0, t) : Number.MAX_SAFE_INTEGER
          if (
            (await e.peekBuffer(this.buffer, { length: Math.min(8, i), mayBeLess: !0 }),
            this.check([0, 0, 1, 186]) || this.check([0, 0, 1, 179]))
          )
            return { ext: "mpg", mime: "video/mpeg" }
          if (this.check([0, 1, 0, 0, 0])) return { ext: "ttf", mime: "font/ttf" }
          if (this.check([0, 0, 1, 0])) return { ext: "ico", mime: "image/x-icon" }
          if (this.check([0, 0, 2, 0])) return { ext: "cur", mime: "image/x-icon" }
          if (
            (await e.peekBuffer(this.buffer, {
              length: Math.min(2 + this.options.mpegOffsetTolerance, i),
              mayBeLess: !0,
            }),
            this.buffer.length >= 2 + this.options.mpegOffsetTolerance)
          )
            for (let e = 0; e <= this.options.mpegOffsetTolerance; ++e) {
              let t = this.scanMpeg(e)
              if (t) return t
            }
        }
        async readTiffTag(e) {
          let t = await this.tokenizer.readToken(e ? m : h)
          switch ((await this.tokenizer.ignore(10), t)) {
            case 50341:
              return { ext: "arw", mime: "image/x-sony-arw" }
            case 50706:
              return { ext: "dng", mime: "image/x-adobe-dng" }
          }
        }
        async readTiffIFD(e) {
          let t = await this.tokenizer.readToken(e ? m : h)
          if (!(t > 512) && (!X(this.tokenizer) || !(2 + 12 * t > 0x1000000)))
            for (let i = 0; i < t; ++i) {
              let t = await this.readTiffTag(e)
              if (t) return t
            }
        }
        async readTiffHeader(e) {
          let t = { ext: "tif", mime: "image/tiff" },
            i = (e ? m : h).get(this.buffer, 2),
            r = (e ? u : l).get(this.buffer, 4)
          if (42 === i) {
            let i
            if (r >= 6) {
              if (this.checkString("CR", { offset: 8 })) return { ext: "cr2", mime: "image/x-canon-cr2" }
              if (r >= 8) {
                let t = (e ? m : h).get(this.buffer, 8),
                  i = (e ? m : h).get(this.buffer, 10)
                if ((28 === t && 254 === i) || (31 === t && 11 === i)) return { ext: "nef", mime: "image/x-nikon-nef" }
              }
            }
            if (X(this.tokenizer) && r > 1048576) return t
            let n = X(this.tokenizer) ? 0x1000000 : this.tokenizer.fileInfo.size
            try {
              await V(this.tokenizer, r, { maximumLength: n, reason: "TIFF IFD offset" })
            } catch (e) {
              if (e instanceof x) return
              throw e
            }
            try {
              i = await this.readTiffIFD(e)
            } catch (e) {
              if (e instanceof x) return
              throw e
            }
            return i ?? t
          }
          if (43 === i) return t
        }
        scanMpeg(e) {
          if (this.check([255, 224], { offset: e, mask: [255, 224] })) {
            if (this.check([16], { offset: e + 1, mask: [22] }))
              return (this.check([8], { offset: e + 1, mask: [8] }), { ext: "aac", mime: "audio/aac" })
            if (this.check([2], { offset: e + 1, mask: [6] })) return { ext: "mp3", mime: "audio/mpeg" }
            if (this.check([4], { offset: e + 1, mask: [6] })) return { ext: "mp2", mime: "audio/mpeg" }
            if (this.check([6], { offset: e + 1, mask: [6] })) return { ext: "mp1", mime: "audio/mpeg" }
          }
        }
      }
    },
  }))
//# sourceMappingURL=early-bootstrap-718-fe77df518c1b6f73.js.map
