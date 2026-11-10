"use strict"
;((exports.ids = [887]),
  (exports.modules = {
    88426(e, t, a) {
      function s(e) {
        let t = e.pathname.endsWith("/frame.html"),
          a = e.pathname.endsWith("/nux-avatar.html")
        return (
          (t || a) &&
          "app:" === e.protocol &&
          "-" === e.host &&
          "" === e.username &&
          "" === e.password &&
          /^\/assets\/orbit-character-[a-f0-9]{16}\/[a-f0-9]{16}\/[^/]+$/.test(e.pathname)
        )
      }
      ;(a.r(t),
        a.d(
          t,
          {},
          {
            addCharacterFrameHeaders: function (e, t) {
              if (s(e)) {
                let e = new Headers(t.headers)
                return (
                  e.set("Document-Isolation-Policy", "isolate-and-require-corp"),
                  e.set("Content-Security-Policy", "frame-ancestors 'self'"),
                  new Response(t.body, { status: t.status, statusText: t.statusText, headers: e })
                )
              }
              return t
            },
            isAllowedCharacterFrameUrl: s,
          },
        ))
    },
  }))
//# sourceMappingURL=early-bootstrap-887-f7ed78e57a5e2e4f.js.map
