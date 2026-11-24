"use strict"
;((exports.ids = [207]),
  (exports.modules = {
    57922(e, t, n) {
      var s = n(40893),
        o = n(88807)
      n.d(
        t,
        {},
        {
          submitUserVerificationResponse: async function (e, t, n, i, a, r, p, c, d) {
            let u = await (0, o.nM)(
              {
                action: "respond to verification",
                appServerClient: e,
                desktopApiOptions: t,
                path: `/messaging/rooms/${encodeURIComponent(a.roomId)}/messages/${encodeURIComponent(a.messageId)}/elicitation/response`,
                request: {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    ...(null != d && void 0 !== i && /^[A-Za-z0-9._-]{1,128}$/.test(i) ? { "OAI-Device-Id": i } : {}),
                  },
                  body: JSON.stringify({
                    request_fingerprint: a.requestFingerprint,
                    result: { action: "accept", content: r, _meta: d },
                  }),
                  signal: AbortSignal.any([p, AbortSignal.timeout(6e4)]),
                },
                beforeSend: c,
              },
              n,
            )
            return !!u.ok && "applied" === s.Ikc({ status: s.YjP() }).parse(await u.json()).status
          },
        },
      )
    },
  }))
//# sourceMappingURL=early-bootstrap-207-650163685606ae20.js.map
