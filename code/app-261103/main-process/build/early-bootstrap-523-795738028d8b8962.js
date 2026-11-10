"use strict"
;((exports.ids = [523]),
  (exports.modules = {
    9496(e, r, o) {
      var t = o(89477),
        i = o(42524),
        a = o(86697),
        n = o.n(a),
        c = o(22949)
      let s = (0, o(91747).$C)("windows-file-copy")
      o.d(
        r,
        {},
        {
          copyDirectoryAllowDecryptedDestinationOnEncryptionFailure: function (e) {
            return (async function ({ copy: e, copyKind: r, destination: o, retry: t, source: i }) {
              try {
                await e()
              } catch (d) {
                var a
                let e
                if ("win32" !== process.platform || !((a = d) instanceof Error && 6e3 === a.errno)) throw d
                s.info("windows_encrypted_copy_fallback_started", {
                  safe: { copyKind: r, errorCode: 6e3 },
                  sensitive: {},
                })
                let n = new AbortController(),
                  c = new Promise((r, o) => {
                    e = setTimeout(() => {
                      let e = Error("Windows encrypted resource copy timed out")
                      ;(n.abort(e), o(e))
                    }, 6e4)
                  })
                try {
                  await Promise.race([t(i, o, n.signal), c])
                } catch (e) {
                  throw (
                    s.warning("windows_encrypted_copy_fallback_failed", {
                      safe: { copyKind: r, errorCode: 6e3 },
                      sensitive: { error: e },
                    }),
                    e
                  )
                } finally {
                  clearTimeout(e)
                }
                s.info("windows_encrypted_copy_fallback_succeeded", {
                  safe: { copyKind: r, errorCode: 6e3 },
                  sensitive: {},
                })
              }
            })({
              ...e,
              copyKind: "directory",
              retry: async function e(r, o, a) {
                for (let s of (a.throwIfAborted(),
                await (0, i.mkdir)(o, { recursive: !0 }),
                a.throwIfAborted(),
                await (0, i.readdir)(r, { withFileTypes: !0 }))) {
                  if ((a.throwIfAborted(), s.isSymbolicLink()))
                    throw Error("Encrypted resource copy fallback does not support reparse points.")
                  let i = n().join(r, s.name),
                    d = n().join(o, s.name)
                  s.isDirectory()
                    ? await e(i, d, a)
                    : await (async function (e, r, o) {
                        ;(o.throwIfAborted(),
                          await (0, c.pipeline)((0, t.createReadStream)(e), (0, t.createWriteStream)(r), { signal: o }))
                      })(i, d, a)
                }
              },
            })
          },
        },
      )
    },
  }))
//# sourceMappingURL=early-bootstrap-523-795738028d8b8962.js.map
