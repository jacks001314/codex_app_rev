"use strict"
;((exports.ids = [217]),
  (exports.modules = {
    13416(e, a, t) {
      t.d(a, { showStartupRecoveryDialog: () => f })
      var o = t(86697),
        s = t(4482),
        n = t(37119)
      let r = {
          messageId: "desktop.workspacePolicyRecovery.title",
          defaultMessage: "Organization settings could not be loaded",
        },
        i = {
          messageId: "desktop.workspacePolicyRecovery.detail",
          defaultMessage:
            "The app is paused until your organization settings can be loaded safely. A network connection, proxy, or firewall may be preventing access. Check your connection and try again, or sign out to use another account. If the problem continues, contact your IT administrator",
        },
        l = {
          messageId: "desktop.workspacePolicyRecovery.configTitle",
          defaultMessage: "ChatGPT configuration could not be loaded",
        },
        c = {
          messageId: "desktop.workspacePolicyRecovery.configDetailWithLocation",
          defaultMessage:
            "ChatGPT cannot start until its configuration is fixed. Open the file below, fix the reported issue, save it, then choose Retry. If your organization manages this file, contact your IT administrator.{paragraphBreak}{location}{lineBreak}{detail}",
        },
        u = {
          messageId: "desktop.workspacePolicyRecovery.configDetailWithoutLocation",
          defaultMessage:
            "ChatGPT cannot start until its configuration is fixed. Check config.toml in the app’s configuration folder for the issue below, save your changes, then choose Retry. If you cannot find the setting or your organization manages it, contact your IT administrator.{paragraphBreak}{detail}",
        },
        g = { messageId: "desktop.workspacePolicyRecovery.retry", defaultMessage: "Retry" },
        d = { messageId: "desktop.workspacePolicyRecovery.signOut", defaultMessage: "Sign out" },
        p = { messageId: "desktop.workspacePolicyRecovery.quit", defaultMessage: "Quit" }
      async function f(e) {
        let a
        ;(await s.app.whenReady(), await (0, n.dh)((0, o.join)(s.app.getAppPath(), "..")))
        let t = (0, n.F$)(),
          f = [t.formatMessage(g)]
        ;(null == e && f.push(t.formatMessage(d)), f.push(t.formatMessage(p)))
        let h = f.length - 1
        if (null == e) a = t.formatMessage(i)
        else if (null == e.filePath) a = t.formatMessage({ ...u, values: { detail: e.detail, paragraphBreak: "\n\n" } })
        else {
          let o = [e.filePath, e.line, e.column].filter((e) => null != e).join(":"),
            s = `${o}: `
          a = t.formatMessage({
            ...c,
            values: {
              location: o,
              detail: e.detail.startsWith(s) ? e.detail.slice(s.length) : e.detail,
              paragraphBreak: "\n\n",
              lineBreak: "\n",
            },
          })
        }
        let { response: m } = await s.dialog.showMessageBox({
          type: "warning",
          message: null == e ? t.formatMessage(r) : t.formatMessage(l),
          detail: a,
          buttons: f,
          defaultId: 0,
          cancelId: h,
          noLink: !0,
        })
        return m === h ? "quit" : null == e && 1 === m ? "sign-out" : "retry"
      }
    },
    37119(e, a, t) {
      var o = t(42524),
        s = t(86697),
        n = t(4482),
        r = t(8769),
        i = t(40893)
      let l = i.g1P(i.YjP(), i.YjP()),
        c = null,
        u = 0,
        g = new Set()
      class d {
        messages
        constructor(e) {
          this.messages = e
        }
        static async load(e, a = n.app.getLocale(), t) {
          let i = a.trim().replace(/_/g, "-"),
            [c, u] = i.toLowerCase().split("-"),
            g = null == u ? c : `${c}-${u.toUpperCase()}`,
            p = c ? new Intl.Locale(c).maximize().region : void 0,
            f =
              t ??
              (n.app.isPackaged
                ? (0, s.join)(n.app.getAppPath(), "native-menu-locales")
                : (0, s.join)(e, "webview", "src", "locales")),
            h = Array.from(new Set([i, g, r.oeH[c], null == p ? void 0 : `${c}-${p}`, c]))
              .filter((e) => null != e)
              .map((e) => (0, s.join)(f, `${e}.json`))
          return new d(
            (
              await Promise.all(
                h.map(async (e) => {
                  try {
                    return l.parse(JSON.parse(await (0, o.readFile)(e, "utf-8")))
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
          return new d(null)
        }
        replaceMessagesFrom(e) {
          this.messages = e.messages
        }
        formatMessage({ messageId: e, defaultMessage: a, values: t }) {
          return (this.messages?.[e] ?? a).replace(/\{(\w+)\}/g, (e, a) => t?.[a] ?? e)
        }
      }
      t.d(
        a,
        {},
        {
          F$: function () {
            if (null == c) throw Error("NativeIntl has not been configured.")
            return c.nativeIntl
          },
          LJ: d,
          dh: async function (e, a, t) {
            let o = ++u,
              s = a
            try {
              if (((s = s ?? n.app.getLocale()), c?.repoRoot === e && c.locale === s)) return
              let a = await d.load(e, s, t)
              if (o !== u) return
              let r = c?.nativeIntl
              ;(r?.replaceMessagesFrom(a), (c = { repoRoot: e, locale: s, nativeIntl: r ?? a }))
            } catch {
              if (o !== u) return
              let e = d.createDefault(),
                a = c?.nativeIntl
              ;(a?.replaceMessagesFrom(e), (c = { repoRoot: null, locale: s ?? "en", nativeIntl: a ?? e }))
            }
            for (let e of g) e()
          },
          fN: function () {
            return c?.locale ?? n.app.getLocale()
          },
        },
      )
    },
  }))
//# sourceMappingURL=early-bootstrap-217-693574dde6e08ba2.js.map
