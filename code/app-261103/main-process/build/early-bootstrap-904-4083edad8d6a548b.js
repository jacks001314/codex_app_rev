"use strict"
;((exports.ids = [904]),
  (exports.modules = {
    87115(e, r, t) {
      var o = t(89477),
        i = t(42524),
        n = t(86697),
        a = t.n(n),
        c = t(22949)
      let s = (0, t(91747).$C)("windows-file-copy")
      async function d(e, r, t) {
        ;(t.throwIfAborted(),
          await (0, c.pipeline)((0, o.createReadStream)(e), (0, o.createWriteStream)(r), { signal: t }))
      }
      async function l({ copy: e, copyKind: r, destination: t, retry: o, source: i }) {
        try {
          await e()
        } catch (d) {
          var n
          let e
          if ("win32" !== process.platform || !((n = d) instanceof Error && 6e3 === n.errno)) throw d
          s.info("windows_encrypted_copy_fallback_started", { safe: { copyKind: r, errorCode: 6e3 }, sensitive: {} })
          let a = new AbortController(),
            c = new Promise((r, t) => {
              e = setTimeout(() => {
                let e = Error("Windows encrypted resource copy timed out")
                ;(a.abort(e), t(e))
              }, 6e4)
            })
          try {
            await Promise.race([o(i, t, a.signal), c])
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
          s.info("windows_encrypted_copy_fallback_succeeded", { safe: { copyKind: r, errorCode: 6e3 }, sensitive: {} })
        }
      }
      t.d(
        r,
        {},
        {
          copyDirectoryAllowDecryptedDestinationOnEncryptionFailure: function (e) {
            return l({
              ...e,
              copyKind: "directory",
              retry: async function e(r, t, o) {
                for (let n of (o.throwIfAborted(),
                await (0, i.mkdir)(t, { recursive: !0 }),
                o.throwIfAborted(),
                await (0, i.readdir)(r, { withFileTypes: !0 }))) {
                  if ((o.throwIfAborted(), n.isSymbolicLink()))
                    throw Error("Encrypted resource copy fallback does not support reparse points.")
                  let i = a().join(r, n.name),
                    c = a().join(t, n.name)
                  n.isDirectory() ? await e(i, c, o) : await d(i, c, o)
                }
              },
            })
          },
          copyFileAllowDecryptedDestinationOnEncryptionFailure: function (e) {
            return l({ ...e, copyKind: "file", retry: d })
          },
        },
      )
    },
  }))
//# sourceMappingURL=early-bootstrap-904-4083edad8d6a548b.js.map
