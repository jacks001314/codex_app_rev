const e = require("./src-KMpTO78a.js"),
  t = require("./logger-DkO6GWbX.js");
let n = require("node:path");
n = e.o(n);
let r = require("node:fs"),
  i = require("node:fs/promises"),
  a = require("node:stream/promises");
var o = t.r(`windows-file-copy`),
  s = 6e4,
  c = 6e3;
function l(e) {
  return p({ ...e, copyKind: `directory`, retry: d });
}
function u(e) {
  return p({ ...e, copyKind: `file`, retry: f });
}
async function d(e, t, r) {
  (r.throwIfAborted(), await (0, i.mkdir)(t, { recursive: !0 }), r.throwIfAborted());
  let a = await (0, i.readdir)(e, { withFileTypes: !0 });
  for (let i of a) {
    if ((r.throwIfAborted(), i.isSymbolicLink()))
      throw Error(`Encrypted resource copy fallback does not support reparse points.`);
    let a = n.default.join(e, i.name),
      o = n.default.join(t, i.name);
    i.isDirectory() ? await d(a, o, r) : await f(a, o, r);
  }
}
async function f(e, t, n) {
  (n.throwIfAborted(),
    await (0, a.pipeline)((0, r.createReadStream)(e), (0, r.createWriteStream)(t), { signal: n }));
}
async function p({ copy: e, copyKind: t, destination: n, retry: r, source: i }) {
  try {
    await e();
  } catch (e) {
    if (process.platform !== `win32` || !m(e)) throw e;
    o.info(`windows_encrypted_copy_fallback_started`, {
      safe: { copyKind: t, errorCode: c },
      sensitive: {},
    });
    let a = new AbortController(),
      l,
      u = new Promise((e, t) => {
        l = setTimeout(() => {
          let e = Error(`Windows encrypted resource copy timed out`);
          (a.abort(e), t(e));
        }, s);
      });
    try {
      await Promise.race([r(i, n, a.signal), u]);
    } catch (e) {
      throw (
        o.warning(`windows_encrypted_copy_fallback_failed`, {
          safe: { copyKind: t, errorCode: c },
          sensitive: { error: e },
        }),
        e
      );
    } finally {
      clearTimeout(l);
    }
    o.info(`windows_encrypted_copy_fallback_succeeded`, {
      safe: { copyKind: t, errorCode: c },
      sensitive: {},
    });
  }
}
function m(e) {
  return e instanceof Error && e.errno === c;
}
((exports.copyDirectoryAllowDecryptedDestinationOnEncryptionFailure = l),
  (exports.copyFileAllowDecryptedDestinationOnEncryptionFailure = u));
//# sourceMappingURL=windows-file-copy-Dm31CRG0.js.map
