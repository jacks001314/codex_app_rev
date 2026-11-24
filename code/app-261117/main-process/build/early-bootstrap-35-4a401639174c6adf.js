"use strict"
;((exports.ids = [35]),
  (exports.modules = {
    64497(e, t, r) {
      var n = r(86697),
        a = r(4482),
        o = r(37891),
        s = r(78191),
        i = r(10631)
      let l = /^--(?:permission|allow-(?:net|ipc|fs-read|fs-write|addons|child-process|worker|inspector|wasi))(?:=|$)/
      function c() {
        return "win32" === process.platform
          ? [(0, o.nQ)()]
          : [(0, o.nQ)(), (0, o.I4)(), (0, n.join)((0, o.Dn)(), "app-server-control", "app-server-control.sock")]
      }
      r.d(
        t,
        {},
        {
          V: function (e) {
            if (null == process.versions.electron) return !0
            let t = a.app.commandLine.hasSwitch(i.Q)
            if ("unrestricted" === e.kind && !t) return !0
            if ("restricted" === e.kind && t)
              return (
                (function (e) {
                  if (
                    "restricted" === e.kind &&
                    null != process.versions.electron &&
                    (process.permission?.has("net") !== !1 || !c().every((e) => process.permission?.has("ipc", e)))
                  )
                    throw Error("Owl did not activate the required Node network permissions.")
                })(e),
                !0
              )
            let r = process.argv.slice(1).filter((e) => e !== `--${i.Q}` && !l.test(e))
            return (
              "restricted" === e.kind &&
                (r.unshift(
                  `--${i.Q}`,
                  "--permission",
                  "--allow-fs-read=*",
                  "--allow-fs-write=*",
                  "--allow-addons",
                  "--allow-child-process",
                  "--allow-worker",
                  ...c().map((e) => `--allow-ipc=${e}`),
                ),
                delete process.env.NODE_OPTIONS),
              (0, s.XO)(),
              a.app.relaunch({ args: r }),
              a.app.exit(0),
              !1
            )
          },
        },
      )
    },
    99586(e, t, r) {
      var n = r(8769),
        a = r(40893)
      let o = a.Ikc({
        requirements: a
          .Ikc({
            application: a
              .Ikc({
                network: a
                  .Ikc({
                    enabled: a.zMY(),
                    domains: a.g1P(
                      a
                        .YjP()
                        .max(253)
                        .regex(/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)*[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/),
                      a.k5n(["allow", "deny"]),
                    ),
                  })
                  .nullable(),
              })
              .nullable()
              .optional(),
          })
          .nullable(),
      })
      r.d(
        t,
        {},
        {
          $o: function (e, t) {
            if ("POST" !== t) return !1
            let r = URL.parse(e)
            return (
              r?.origin === "https://ab.chatgpt.com" &&
              "/v1/initialize" === r.pathname &&
              "" === r.username &&
              "" === r.password &&
              "" === r.hash
            )
          },
          bA: function (e, t) {
            let r = o.safeParse(t)
            if (!r.success)
              throw Error(
                "Application network requirements are invalid or unavailable. Update the app server to a version that exposes application requirements.",
              )
            if (
              null != r.data.requirements &&
              void 0 === r.data.requirements.application &&
              !(null != e && (0, n.DE9)(e) && (0, n.rT6)(e, n.MjT) >= 0 && 0 > (0, n.rT6)(e, "0.154.0-alpha.1"))
            )
              throw Error("This app server did not provide application network requirements.")
            let a = r.data.requirements?.application?.network
            return a?.enabled !== !0
              ? { kind: "unrestricted" }
              : {
                  kind: "restricted",
                  allowedDomains: new Set(
                    Object.entries(a.domains)
                      .filter(([, e]) => "allow" === e)
                      .map(([e]) => e),
                  ),
                }
          },
          tS: function (e, t) {
            let r
            try {
              r = "string" == typeof t ? new URL(t) : t
            } catch {
              return !1
            }
            return (
              !!["app:", "codex-sandbox:", "data:", "blob:", "file:", "about:"].includes(r.protocol) ||
              (null != e &&
                ("unrestricted" === e.kind ||
                  (("https:" === r.protocol || "wss:" === r.protocol) &&
                    e.allowedDomains.has(r.hostname.replace(/\.$/, "")))))
            )
          },
        },
      )
    },
    38878(e, t, r) {
      r.d(t, { E: () => w, initializeNodeNetworkPermissions: () => m })
      var n = r(42524),
        a = r(86697),
        o = r(4482),
        s = r(37891),
        i = r(67726),
        l = r(75211),
        c = r(15248),
        u = r(66439),
        p = r(64497),
        d = r(99586)
      let f = null
      function w() {
        return f
      }
      async function m() {
        ;((f = null),
          await (0, u.z1)(),
          null != process.env.CODEX_HOME && (process.env.CODEX_HOME = (0, a.resolve)(process.env.CODEX_HOME)))
        let e = !1,
          t = !1,
          w = !1,
          m = 0,
          h = null,
          v = null
        for (;;) {
          m += 1
          let u = "home-creation"
          try {
            ;(t ||
              ("win32" === process.platform && o.app.isPackaged
                ? await (async function () {
                    let e = (0, s.Dn)()
                    if ((await (0, n.mkdir)(e, { recursive: !0 })) !== void 0)
                      try {
                        await (0, n.writeFile)((0, a.join)(e, ".desktop-created"), "", { flag: "wx" })
                      } catch (e) {
                        if (e instanceof Error && "code" in e && "EEXIST" === e.code) return
                        ;(0, s.getLogger)().warning("Failed to record Windows desktop home ownership", {
                          safe: {},
                          sensitive: { error: e },
                        })
                      }
                  })()
                : await (0, n.mkdir)((0, s.Dn)(), { recursive: !0 }),
              (t = !0)),
              (u = "preparation"),
              (v =
                v ??
                Promise.resolve()
                  .then(() =>
                    (0, s.NU)(
                      {
                        hostConfig: l.a,
                        spawnInsideWsl: !1,
                        repoRoot: (0, a.join)(o.app.getAppPath(), ".."),
                        resourcesPath: (0, i.b)({
                          isPackaged: o.app.isPackaged,
                          env: process.env,
                          resourcesPath: process.resourcesPath,
                        }),
                      },
                      o.app.getVersion(),
                    ),
                  )
                  .catch((e) => {
                    throw ((v = null), e)
                  })))
            let r = await (async function (e) {
              let t,
                r = performance.now()
              try {
                let n = await Promise.race([
                  e,
                  new Promise((e, r) => {
                    t = setTimeout(() => {
                      r(new s.kK("timeout"))
                    }, 12e4)
                  }),
                ])
                if (performance.now() - r >= 12e4) throw new s.kK("timeout")
                return n
              } finally {
                clearTimeout(t)
              }
            })(v)
            ;((u = "policy-read"), (h = h ?? performance.now() + 6e4), (w = w || e))
            let { appServerVersion: c, response: m } = await (0, s.oZ)(r, {
              signOut: e,
              timeoutMs: Math.max(1, Math.min(3e4, h - performance.now())),
            })
            u = "policy-validation"
            let g = (0, d.bA)(c, m)
            if (((u = "node-permissions"), !(0, p.V)(g))) return !1
            return ((f = g), !0)
          } catch (p) {
            if (!w && (0, c.R)(p)) {
              ;((e = !0), (m = 0), (h = null))
              continue
            }
            let t = p instanceof s.kK ? p.reason : u,
              n = 1e3 * 2 ** (m - 1),
              a =
                "policy-read" === u &&
                null != h &&
                !e &&
                p instanceof s.kK &&
                p.retryable &&
                m < 3 &&
                performance.now() + n < h
            if (
              ((0, s.getLogger)().warning("Desktop startup policy read failed", {
                safe: { reason: t, phase: u, attempt: m, retrying: a },
              }),
              a)
            ) {
              await new Promise((e) => setTimeout(e, n))
              continue
            }
            let { showStartupRecoveryDialog: i } = await r.e(217).then(r.bind(r, 13416)),
              l = await i(p instanceof s.UX ? p.configError : null)
            if ("quit" === l) return (o.app.exit(0), !1)
            ;((e = "sign-out" === l), (m = 0), (h = null), "preparation" !== u && (v = null))
          }
        }
      }
    },
    67726(e, t, r) {
      let n = "CODEX_ELECTRON_RESOURCES_PATH"
      r.d(
        t,
        {},
        {
          Z: n,
          b: function ({ env: e, isPackaged: t, resourcesPath: r }) {
            return t ? r : e[n]?.trim() || r
          },
        },
      )
    },
    75211(e, t, r) {
      let n = "local"
      r.d(t, {}, { a: { id: n, display_name: "Local", kind: "local" }, n: n })
    },
    15248(e, t, r) {
      var n = r(8769),
        a = r(37891),
        o = r(40893)
      let s = new Set(
          [
            "Your access token could not be refreshed because your refresh token has expired. Please log out and sign in again.",
            "Your access token could not be refreshed because your refresh token was already used. Please log out and sign in again.",
            "Your access token could not be refreshed because your refresh token was revoked. Please log out and sign in again.",
            "Your access token could not be refreshed. Please log out and sign in again.",
          ].map((e) => `failed to read configuration layers: ${e}`),
        ),
        i = o.Ikc({ message: o.YjP() })
      r.d(
        t,
        {},
        {
          R: function e(t) {
            let r = i.safeParse(t)
            return (
              (0, n.sQ3)(t) ||
              (t instanceof a.kK && "auth" === t.reason) ||
              (r.success && s.has(r.data.message)) ||
              (t instanceof Error && null != t.cause && e(t.cause))
            )
          },
        },
      )
    },
    66439(e, t, r) {
      r.d(t, { z1: () => m, Yq: () => h, hq: () => w })
      var n = r(86697),
        a = r(4482),
        o = r(37891)
      let s = new Set([
          "INIT_CWD",
          "npm_command",
          "npm_execpath",
          "npm_node_execpath",
          "PNPM_PACKAGE_NAME",
          "PNPM_SCRIPT_SRC_DIR",
        ]),
        i = ["npm_config_", "npm_lifecycle_", "npm_package_"]
      function l(e) {
        for (let t of Object.keys(e)) {
          let r = t.toLowerCase()
          ;(s.has(t) || i.some((e) => r.startsWith(e))) && delete e[t]
        }
      }
      let c = process.env.CODEX_ELECTRON_USER_DATA_PATH?.trim() ? process.env.CODEX_HOME : void 0,
        u = null,
        p = null,
        d = null,
        f = new Set()
      function w(e) {
        let t = { ...process.env },
          r = () => {
            let r = { ...process.env },
              n = {}
            for (let e of new Set([...Object.keys(t), ...Object.keys(r)])) t[e] !== r[e] && (n[e] = r[e] ?? null)
            ;((t = r), Object.keys(n).length > 0 && e(n))
          }
        return (
          f.add(r),
          () => {
            f.delete(r)
          }
        )
      }
      async function m() {
        return h({ caller: "startup", retryFailed: !1 })
      }
      async function h({ caller: e = "startup", retryFailed: t = !0, timeoutMs: r = 5e3 } = {}) {
        if (d?.status === "loaded" || (null != d && !t))
          return (function (e, t) {
            return { ...e, caller: t, resultSource: "cache" }
          })(d, e)
        if (null != u && null != p && p >= r) return u.then((t) => ({ ...t, caller: e }))
        let n = (async function (e, t) {
          let r = Date.now()
          a.app.isPackaged || (l(process.env), f.forEach((e) => e()))
          let n = new AbortController(),
            s = null,
            i = await Promise.race([
              (0, o.MN)({ interactive: !0, extraEnv: { [o.$z]: "1" }, signal: n.signal })
                .then((e) => ({ status: "loaded", userEnv: e }))
                .catch((e) => ({ status: "failed", error: e })),
              new Promise((e) => {
                ;(s = setTimeout(() => {
                  ;(n.abort(), e({ status: "timed_out" }))
                }, t)).unref()
              }),
            ]).finally(() => {
              null != s && clearTimeout(s)
            })
          if ("loaded" === i.status)
            return (
              Object.assign(process.env, i.userEnv),
              null != c && (process.env.CODEX_HOME = c),
              a.app.isPackaged || l(process.env),
              f.forEach((e) => e()),
              { status: "loaded", path: process.env.PATH ?? null, ...v(r, e, t) }
            )
          let u =
            "timed_out" === i.status
              ? `Timed out after ${t}ms.`
              : i.error instanceof Error
                ? i.error.message
                : String(i.error)
          return (
            (0, o.getLogger)().warning("Failed to load shell env", {
              safe: {
                caller: e,
                durationMs: Date.now() - r,
                pathEntryCount: g(process.env.PATH ?? null),
                resultSource: "load",
                status: i.status,
                timeoutMs: t,
              },
              sensitive: { detail: u, path: process.env.PATH ?? null },
            }),
            { status: i.status, detail: u, path: process.env.PATH ?? null, ...v(r, e, t) }
          )
        })(e, r)
        ;((u = n), (p = r))
        try {
          var s
          let e = await n
          return ((s = e), (d?.status !== "loaded" || "loaded" === s.status) && (d = s), e)
        } finally {
          u === n && ((u = null), (p = null))
        }
      }
      function v(e, t, r) {
        let n = process.env.PATH ?? null
        return { caller: t, durationMs: Date.now() - e, pathEntryCount: g(n), resultSource: "load", timeoutMs: r }
      }
      function g(e) {
        return null == e || "" === e ? 0 : e.split(n.delimiter).length
      }
    },
  }))
//# sourceMappingURL=early-bootstrap-35-4a401639174c6adf.js.map
