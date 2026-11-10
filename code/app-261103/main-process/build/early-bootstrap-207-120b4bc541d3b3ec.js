"use strict"
;((exports.ids = [207]),
  (exports.modules = {
    57922(e, t, n) {
      var s = n(35553),
        o = n(88807)
      n.d(
        t,
        {},
        {
          submitUserVerificationResponse: async function (e, t, n, i, a, r, p, c) {
            let d = await (0, o.nM)(
              {
                action: "respond to verification",
                appServerClient: e,
                desktopApiOptions: t,
                path: `/messaging/rooms/${encodeURIComponent(i.roomId)}/messages/${encodeURIComponent(i.messageId)}/elicitation/response`,
                request: {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    request_fingerprint: i.requestFingerprint,
                    result: { action: "accept", content: a, _meta: c },
                  }),
                  signal: AbortSignal.any([r, AbortSignal.timeout(6e4)]),
                },
                beforeSend: p,
              },
              n,
            )
            return !!d.ok && "applied" === s.object({ status: s.string() }).parse(await d.json()).status
          },
        },
      )
    },
  }))
//# sourceMappingURL=early-bootstrap-207-120b4bc541d3b3ec.js.map
