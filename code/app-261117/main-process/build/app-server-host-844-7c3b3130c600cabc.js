"use strict"
;((exports.ids = [844]),
  (exports.modules = {
    37119(e, t, a) {
      var r = a(42524),
        l = a(86697),
        n = a(4482),
        s = a(85816),
        o = a(40893)
      let i = o.g1P(o.YjP(), o.YjP()),
        c = null,
        u = 0,
        p = new Set()
      class f {
        messages
        constructor(e) {
          this.messages = e
        }
        static async load(e, t = n.app.getLocale(), a) {
          let o = t.trim().replace(/_/g, "-"),
            [c, u] = o.toLowerCase().split("-"),
            p = null == u ? c : `${c}-${u.toUpperCase()}`,
            g = c ? new Intl.Locale(c).maximize().region : void 0,
            m =
              a ??
              (n.app.isPackaged
                ? (0, l.join)(n.app.getAppPath(), "native-menu-locales")
                : (0, l.join)(e, "webview", "src", "locales")),
            w = Array.from(new Set([o, p, s.oeH[c], null == g ? void 0 : `${c}-${g}`, c]))
              .filter((e) => null != e)
              .map((e) => (0, l.join)(m, `${e}.json`))
          return new f(
            (
              await Promise.all(
                w.map(async (e) => {
                  try {
                    return i.parse(JSON.parse(await (0, r.readFile)(e, "utf-8")))
                  } catch (e) {
                    if (e instanceof Error && "code" in e && "ENOENT" === e.code) return null
                    throw e
                  }
                }),
              )
            ).find((e) => null != e) ?? null,
          )
        }
        static createDefault() {
          return new f(null)
        }
        replaceMessagesFrom(e) {
          this.messages = e.messages
        }
        formatMessage({ messageId: e, defaultMessage: t, values: a }) {
          return (this.messages?.[e] ?? t).replace(/\{(\w+)\}/g, (e, t) => a?.[t] ?? e)
        }
      }
      a.d(
        t,
        {},
        {
          F$: function () {
            if (null == c) throw Error("NativeIntl has not been configured.")
            return c.nativeIntl
          },
          configureNativeIntl: async function (e, t, a) {
            let r = ++u,
              l = t
            try {
              if (((l = l ?? n.app.getLocale()), c?.repoRoot === e && c.locale === l)) return
              let t = await f.load(e, l, a)
              if (r !== u) return
              let s = c?.nativeIntl
              ;(s?.replaceMessagesFrom(t), (c = { repoRoot: e, locale: l, nativeIntl: s ?? t }))
            } catch {
              if (r !== u) return
              let e = f.createDefault(),
                t = c?.nativeIntl
              ;(t?.replaceMessagesFrom(e), (c = { repoRoot: null, locale: l ?? "en", nativeIntl: t ?? e }))
            }
            for (let e of p) e()
          },
        },
      )
    },
  }))
//# sourceMappingURL=app-server-host-844-7c3b3130c600cabc.js.map
