;(() => {
  "use strict"
  let e = require("electron"),
    r = "--pinned-chatgpt-webview-url=",
    i = process.argv.find((e) => e.startsWith(r))?.slice(r.length)
  function t() {
    return process.isMainFrame && location.href === i
  }
  if (t()) {
    let r,
      i = !1,
      n = !1
    e.contextBridge.exposeInMainWorld("experianDesktopVerification", {
      takeRequest() {
        if (i) throw Error("Verification request already delivered")
        return (r =
          r ??
          new Promise((n) => {
            ;(e.ipcRenderer.once("experian-verification-start", (e, o) => {
              t() && ((i = !0), (r = void 0), n(o))
            }),
              e.ipcRenderer.sendToHost("experian-verification-ready"))
          }))
      },
      finish(r) {
        i && t() && (n || ((n = !0), e.ipcRenderer.sendToHost("experian-verification-result", r)))
      },
    })
  }
  module.exports = {}
})()
//# sourceMappingURL=experian-verification-preload.js.map
