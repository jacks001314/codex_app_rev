"use strict"
;((exports.ids = [623]),
  (exports.modules = {
    29370(t, e, n) {
      var s = n(60521),
        o = n(42355),
        u = n(70174),
        r = n(57067),
        d = n(40893),
        c = n(23065)
      let i = d.Pq9().transform((t, e) => {
        try {
          return { customInstructions: (0, u.Rf)(r.Kh, t, { ignoreUnknownFields: !0 }).customInstructions ?? null }
        } catch {
          return (e.addIssue({ code: "custom", message: "Invalid Cloud agent settings response" }), c.tm)
        }
      })
      n.d(
        e,
        {},
        {
          cloudAgentSettingsEnvelope: function (t) {
            let e = r.zL.method[t.method],
              n = "updateCloudAgentSettings" === t.method ? { customInstructions: t.customInstructions } : {}
            return { method: `/${e.parent.typeName}/${e.name}`, request: (0, s.aB)(e.input, (0, o.v)(e.input, n)) }
          },
          cloudAgentSettingsResponse: i,
        },
      )
    },
  }))
//# sourceMappingURL=early-bootstrap-623-793323257ed31f5e.js.map
