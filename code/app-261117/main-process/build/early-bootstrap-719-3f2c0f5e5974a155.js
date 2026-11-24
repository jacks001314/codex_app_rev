"use strict"
;((exports.ids = [719]),
  (exports.modules = {
    92662(e, t, a) {
      let n, r, i, o
      var s = a(4482),
        l = a(68802)
      ;(a(78335), a(35438), new WeakMap(), new WeakSet())
      var c = a(95398),
        p = a(37119)
      function u() {
        try {
          return (
            "1" ===
            (0, c.execFileSync)("/usr/sbin/sysctl", ["-in", "sysctl.proc_translated"], {
              encoding: "utf8",
              env: (0, l.IHi)(process.env),
              stdio: ["ignore", "pipe", "ignore"],
            }).trim()
          )
        } catch {
          return !1
        }
      }
      async function d() {
        try {
          return (0, p.F$)()
        } catch {
          try {
            return await p.LJ.load("")
          } catch {
            return p.LJ.createDefault()
          }
        }
      }
      var f = a(26395),
        g = a(59099),
        m = a(65734),
        h = a(36572),
        w = a(96858),
        y = a(86697),
        b = a.n(y),
        v = a(44035),
        k = a(89477),
        S = a(68543),
        I = a(37418),
        x = a(40893),
        E = a(21832)
      let _ = "ChatGPT.app",
        A = ["com.openai.chat-sparkle-updater", "com.openai.chat-sparkle-progress"]
      function F(
        e,
        {
          applicationsDirectory: t = "/Applications",
          hasExpectedOpenAISignature: a = D,
          stopLegacyUpdater: n = C,
        } = {},
      ) {
        if (y.basename(e) !== _) return { status: "not-needed" }
        let r = y.join(t, _),
          i = y.join(t, "ChatGPT Classic.app")
        try {
          let t = k.lstatSync(r, { throwIfNoEntry: !1 })
          if (null == t) return { status: "not-needed" }
          if (!t.isDirectory() || !a(e, "com.openai.codex")) return { status: "blocked" }
          if (a(r, "com.openai.codex")) return { status: "not-needed" }
          if (
            !a(r, "com.openai.chat") ||
            null != k.lstatSync(i, { throwIfNoEntry: !1 }) ||
            !n() ||
            !a(r, "com.openai.chat")
          )
            return { status: "blocked" }
          k.renameSync(r, i)
        } catch (e) {
          return (
            (0, l.tZQ)().warning("Failed to relocate legacy ChatGPT app", {
              safe: { errorType: e instanceof Error ? e.name : typeof e },
            }),
            { status: "blocked" }
          )
        }
        return {
          status: "relocated",
          restore: () => {
            try {
              if (null != k.lstatSync(r, { throwIfNoEntry: !1 }) || null == k.lstatSync(i, { throwIfNoEntry: !1 }))
                return
              k.renameSync(i, r)
            } catch (e) {
              ;(0, l.tZQ)().warning("Failed to restore legacy ChatGPT app", {
                safe: { errorType: e instanceof Error ? e.name : typeof e },
              })
            }
          },
        }
      }
      function C() {
        if ("function" != typeof process.getuid) return !1
        let e = `gui/${process.getuid()}`,
          t = (0, c.spawnSync)("/bin/launchctl", ["print", e], { stdio: "ignore" })
        if (null != t.error || 0 !== t.status) return !1
        for (let t of A) {
          let a = `${e}/${t}`,
            n = (0, c.spawnSync)("/bin/launchctl", ["print", a], { stdio: "ignore" })
          if (null != n.error || null == n.status) return !1
          if (0 !== n.status) continue
          let r = (0, c.spawnSync)("/bin/launchctl", ["bootout", a], { stdio: "ignore" })
          if (null != r.error || 0 !== r.status) return !1
        }
        return !0
      }
      function D(e, t) {
        try {
          return (
            (0, c.execFileSync)(
              "/usr/bin/codesign",
              [
                "--verify",
                "--deep",
                "--strict",
                `-R=identifier "${t}" and anchor apple generic and certificate leaf[subject.OU] = "2DC432GLL2"`,
                e,
              ],
              { stdio: "ignore" },
            ),
            !0
          )
        } catch {
          return !1
        }
      }
      let P = (0, I.promisify)(c.execFile),
        N = x
          .Ikc({
            images: x
              .YOg(
                x
                  .Ikc({
                    "image-path": x.YjP().optional(),
                    "system-entities": x.YOg(x.Ikc({ "mount-point": x.YjP().optional() }).loose()).optional(),
                  })
                  .loose(),
              )
              .optional(),
          })
          .loose(),
        T = x.Ikc({ sourceDmgPath: x.YjP() }).loose()
      function O(e) {
        if (!("moveToApplicationsFolder" in s.app)) return "unavailable"
        ;(s.app.releaseSingleInstanceLock(), e())
        try {
          let e = s.app.moveToApplicationsFolder()
          return (e || s.app.requestSingleInstanceLock(), e ? "moved" : "canceled")
        } catch (e) {
          throw (s.app.requestSingleInstanceLock(), e)
        }
      }
      function M() {
        try {
          return (k.accessSync("/Applications", k.constants.W_OK), !0)
        } catch {
          return !1
        }
      }
      async function L(e) {
        if (!X(process.execPath, e)) return null
        let t = y.join("/Applications", y.basename(e)),
          a = y.join("/Applications", `.${y.basename(e)}.codex-installing-${process.pid}`)
        try {
          return (
            k.rmSync(a, { force: !0, recursive: !0 }),
            await P("/usr/bin/ditto", [e, a]),
            k.existsSync(t) && (await s.shell.trashItem(t)),
            k.renameSync(a, t),
            t
          )
        } catch (e) {
          return (
            (function (e) {
              try {
                k.rmSync(e, { force: !0, recursive: !0 })
              } catch (e) {
                ;(0, l.tZQ)().warning("Failed to remove staging app bundle", {
                  safe: { errorType: e instanceof Error ? e.name : typeof e },
                })
              }
            })(a),
            (0, l.tZQ)().warning("Failed to copy app bundle to Applications folder", {
              safe: { errorType: e instanceof Error ? e.name : typeof e },
            }),
            null
          )
        }
      }
      async function R(e) {
        try {
          return (s.app.releaseSingleInstanceLock(), await P("/usr/bin/open", ["-n", e]), !0)
        } catch (e) {
          return (
            (0, l.tZQ)().warning("Failed to launch installed app bundle", {
              safe: { errorType: e instanceof Error ? e.name : typeof e },
            }),
            !1
          )
        }
      }
      async function W() {
        let e,
          t = !1,
          a = new s.BrowserWindow({
            width: 420,
            height: 176,
            resizable: !1,
            maximizable: !1,
            fullscreenable: !1,
            closable: !1,
            show: !1,
            title: `Installing ${s.app.getName()}`,
            webPreferences: { contextIsolation: !0, nodeIntegration: !1, sandbox: !0, spellcheck: !1, devTools: !1 },
          }),
          n = () => {
            ;((t = !0), a.setClosable(!0))
          }
        return (
          a.setMenuBarVisibility(!1),
          a.on("close", (e) => {
            t || e.preventDefault()
          }),
          a.on("closed", () => {
            t && s.app.quit()
          }),
          a.webContents.setWindowOpenHandler(() => ({ action: "deny" })),
          a.webContents.on("will-navigate", (e) => {
            e.preventDefault()
          }),
          await a.loadURL(
            `data:text/html;charset=utf-8,${encodeURIComponent(
              ((e = JSON.stringify(s.app.getName())),
              `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    :root {
      color-scheme: light dark;
      --accent: #0a84ff;
      --background: #f5f5f7;
      --foreground: #1d1d1f;
      --muted: #6e6e73;
      --track: rgba(0, 0, 0, 0.12);
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --background: #1e1e1e;
        --foreground: #f5f5f7;
        --muted: #a1a1a6;
        --track: rgba(255, 255, 255, 0.18);
      }
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      background: var(--background);
      color: var(--foreground);
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
    }

    main {
      width: 100%;
      padding: 28px 32px;
    }

    h1 {
      margin: 0;
      font-size: 17px;
      font-weight: 600;
      letter-spacing: 0;
    }

    p {
      margin: 8px 0 0;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.45;
    }

    .progress {
      margin-top: 22px;
      height: 4px;
      overflow: hidden;
      border-radius: 999px;
      background: var(--track);
    }

    .progress::before {
      content: "";
      display: block;
      width: 45%;
      height: 100%;
      border-radius: inherit;
      background: var(--accent);
      animation: progress 1.1s linear infinite;
    }

    body[data-status="failed"] .progress {
      display: none;
    }

    @keyframes progress {
      0% {
        transform: translateX(-110%);
      }
      100% {
        transform: translateX(245%);
      }
    }
  </style>
</head>
<body data-status="installing">
  <main>
    <div id="installer-status" role="status" aria-live="polite" aria-atomic="true">
      <h1 id="title"></h1>
      <p id="detail"></p>
    </div>
    <div class="progress" role="progressbar" aria-label="Installation progress"></div>
  </main>
  <script>
    const appName = ${e};
    const statuses = {
      installing: {
        title: "Installing " + appName,
        detail: "Moving " + appName + " to Applications…"
      },
      failed: {
        title: "Couldn't install " + appName,
        detail: "Close this window and double-click " + appName + " again to retry, or drag it to Applications if the move keeps failing"
      },
      openFailed: {
        title: appName + " is installed",
        detail: "Open " + appName + " from the Applications folder to finish setup"
      },
      opening: {
        title: "Opening " + appName,
        detail: "Launching " + appName + " from Applications…"
      }
    };

    window.setInstallerStatus = (status) => {
      const nextStatus = statuses[status] ?? statuses.failed;
      const liveRegion = document.getElementById("installer-status");
      const isFailure = status === "failed" || status === "openFailed";
      liveRegion.setAttribute("role", isFailure ? "alert" : "status");
      liveRegion.setAttribute("aria-live", isFailure ? "assertive" : "polite");
      document.body.dataset.status = status;
      document.getElementById("title").textContent = nextStatus.title;
      document.getElementById("detail").textContent = nextStatus.detail;
    };

    window.addEventListener("load", () => {
      window.requestAnimationFrame(() => window.setInstallerStatus("installing"));
    });
  <\/script>
</body>
</html>`),
            )}`,
          ),
          a.isDestroyed() ||
            ((function (e) {
              let t = s.screen.getCursorScreenPoint(),
                { workArea: a } = s.screen.getDisplayNearestPoint(t),
                { width: n, height: r } = e.getBounds(),
                i = a.x + Math.max(0, a.width - n),
                o = a.y + Math.max(0, a.height - r),
                l = Math.min(i, Math.max(a.x, Math.round(t.x - n / 2))),
                c = Math.min(o, Math.max(a.y, Math.round(t.y - r / 2)))
              e.setPosition(l, c, !1)
            })(a),
            a.show(),
            a.focus()),
          {
            allowClose: n,
            setStatus: async (e) => {
              a.isDestroyed() ||
                (n(), await a.webContents.executeJavaScript(`window.setInstallerStatus(${JSON.stringify(e)})`))
            },
          }
        )
      }
      function Q() {
        let e = Z()
        if (!k.existsSync(e)) return null
        try {
          return T.parse(JSON.parse(k.readFileSync(e, "utf8"))).sourceDmgPath
        } catch (e) {
          return (
            (0, l.tZQ)().warning("Failed to read pending app source DMG cleanup", {
              safe: { errorType: e instanceof Error ? e.name : typeof e },
            }),
            null
          )
        }
      }
      function q(e) {
        let t = Z()
        ;(k.mkdirSync(y.dirname(t), { recursive: !0 }),
          k.writeFileSync(
            t,
            `${JSON.stringify({ sourceDmgPath: e })}
`,
            "utf8",
          ))
      }
      function G() {
        k.rmSync(Z(), { force: !0 })
      }
      function Z() {
        return y.join(s.app.getPath("userData"), "pending-source-dmg-cleanup.json")
      }
      function B() {
        let e = (0, E.b)()
        return e.startsWith("/Volumes/")
          ? (function (e, t) {
              let a = null,
                n = ""
              for (let r of t)
                if (".dmg" === y.extname(r.imagePath).toLowerCase())
                  for (let t of r.mountPoints) X(e, t) && t.length > n.length && ((a = r), (n = t))
              return a?.imagePath ?? null
            })(e, U())
          : null
      }
      function U() {
        let e = (0, c.execFileSync)("/usr/bin/hdiutil", ["info", "-plist"]),
          t = (0, c.execFileSync)("/usr/bin/plutil", ["-convert", "json", "-o", "-", "-"], {
            encoding: "utf8",
            input: e,
          })
        return (N.parse(JSON.parse(t)).images ?? []).flatMap((e) => {
          if (null == e["image-path"]) return []
          let t = (e["system-entities"] ?? []).flatMap((e) => (null == e["mount-point"] ? [] : [e["mount-point"]]))
          return 0 === t.length ? [] : [{ imagePath: e["image-path"], mountPoints: t }]
        })
      }
      function j(e) {
        for (let t of U())
          if (y.resolve(t.imagePath) === y.resolve(e)) {
            for (let e of t.mountPoints)
              if (
                !(function (e) {
                  try {
                    return ((0, c.execFileSync)("/usr/bin/hdiutil", ["detach", e]), !0)
                  } catch {
                    return !1
                  }
                })(e)
              )
                return !1
          }
        return !0
      }
      function X(e, t) {
        let a = y.relative(t, e)
        return "" === a || (!!a && !a.startsWith("..") && !y.isAbsolute(a))
      }
      var $ = a(8892),
        V = a(30280),
        J = (a(42419), a(149)),
        Y = a(74220),
        z = a(40767),
        H = a(62263),
        K = a(49424),
        ee = a(12842),
        et = a(77445),
        ea = a(24676),
        en = a(70484)
      let er = { "install-update": "Install Update", "check-for-updates": "Check for Updates", quit: "Quit" }
      if (null != process.versions.electron && "function" != typeof s.app.showTaskManager)
        throw Error("Codex requires the Owl app shell; stock Electron is no longer supported.")
      let ei = "darwin" === process.platform,
        {
          buildFlavor: eo,
          distributionFlavor: es,
          sqliteMigrationProvenance: el,
        } = ((n = s.app.isPackaged ? (0, $.c)() : $.C),
        (r = m.x.resolve(n)),
        (i = "win32" === process.platform ? m.x.getWindowsDistributionFlavor(r, n("codexWindowsPackageIdentity")) : r),
        (o = {
          appVersion: s.app.getVersion(),
          buildFlavor: r,
          buildCommit: process.env.CODEX_BUILD_COMMIT?.trim() || n("codexBuildCommit"),
        }),
        { buildFlavor: r, distributionFlavor: i, sqliteMigrationProvenance: o })
      ;((0, V.Ky)(),
        (0, z.p)(),
        s.app.setName((0, v.V)(es)),
        s.app.setPath(
          "userData",
          (function ({ appDataPath: e, buildFlavor: t, env: a }) {
            let n = a.CODEX_ELECTRON_USER_DATA_PATH?.trim()
            if (n) return (0, y.resolve)(n)
            let r = (0, v.D)(t),
              i = (0, y.join)(e, null == r ? "Codex" : `Codex (${r})`),
              o = a.CODEX_ELECTRON_AGENT_RUN_ID?.trim() || null
            return "agent" === t && null != o ? (0, y.join)(i, "agent", o) : i
          })({ appDataPath: s.app.getPath("appData"), buildFlavor: es, env: process.env }),
        ),
        "win32" === process.platform &&
          (delete process.env.CODEX_WINDOWS_REGISTERED_CORE,
          delete process.env.CODEX_WINDOWS_SANDBOX_PACKAGE_FAMILY,
          s.app.setAppUserModelId((0, h.m)(es))))
      let ec = (0, w.Hg)({
          isMacOS: ei,
          isPackaged: s.app.isPackaged,
          hasExplicitUserDataPath: !!process.env.CODEX_ELECTRON_USER_DATA_PATH?.trim(),
        }),
        ep = (0, K.Yy)()
      if (!ec || s.app.requestSingleInstanceLock({ startupTask: "startup-task" === ep })) {
        let e = (0, g.q)(eo)
        ;((e.windowsActivation = ep),
          ec &&
            s.app.on("second-instance", (t, a, n, r) => {
              ;("object" == typeof r && null != r && "startupTask" in r && !0 === r.startupTask) ||
                e.queueSecondInstanceArgs(a)
            }),
          s.app.whenReady().then(async () => {
            ;(0, f.r)()
            let { desktopSentry: t, appUpdates: n } = e
            if (
              (await (0, H.gw)(eo),
              !(await (async function ({
                appName: e,
                environment: t,
                readProcessTranslated: a = u,
                loadNativeIntl: n = d,
                showMessageBox: r = (e) => s.dialog.showMessageBox(e),
              }) {
                if (
                  !(function (e, t = u) {
                    return !!e.isPackaged && "darwin" === e.platform && "x64" === e.arch && t()
                  })(t, a)
                )
                  return !0
                try {
                  let t = await n(),
                    a = await r({
                      type: "warning",
                      buttons: [
                        t.formatMessage({ messageId: "desktop.intelLaunchWarning.quit", defaultMessage: "Quit" }),
                        t.formatMessage({
                          messageId: "desktop.intelLaunchWarning.continue",
                          defaultMessage: "Continue Anyway",
                        }),
                      ],
                      defaultId: 0,
                      cancelId: 0,
                      noLink: !0,
                      message: t.formatMessage({
                        messageId: "desktop.intelLaunchWarning.message",
                        defaultMessage: "{appName} is running the Intel build on an Apple Silicon Mac",
                        values: { appName: e },
                      }),
                      detail: t.formatMessage({
                        messageId: "desktop.intelLaunchWarning.detail",
                        defaultMessage:
                          "This build works through Rosetta, but the Apple Silicon build launches faster and performs better. Quit now to install the Apple Silicon build, or continue with the Intel build",
                      }),
                    })
                  return 1 === a.response
                } catch (e) {
                  return (
                    (0, l.tZQ)().warning("Failed to show Intel-on-Apple-Silicon launch warning", {
                      safe: { errorName: e instanceof Error ? e.name : null },
                    }),
                    !0
                  )
                }
              })({
                appName: s.app.getName(),
                environment: { arch: process.arch, isPackaged: s.app.isPackaged, platform: process.platform },
              })))
            )
              return void s.app.quit()
            if (
              (await (async function ({
                clearPendingSourceDmgPath: e = G,
                copyAppBundleToApplicationsFolder: t = L,
                detachSourceDmg: a = j,
                getCurrentAppBundlePath: n = E.b,
                getPendingSourceDmgPath: r = Q,
                getSourceDmgPath: i = B,
                isApplicationsFolderWritable: o = M,
                isPackaged: c = s.app.isPackaged,
                openInstalledAppBundle: p = R,
                platform: u = process.platform,
                quitCurrentApp: d = () => s.app.quit(),
                relocateLegacyChatGPTApp: f = F,
                setPendingSourceDmgPath: g = q,
                showInstallerWindow: m = W,
                sourceDmgExists: h = k.existsSync,
                trashItem: w = (e) => s.shell.trashItem(e),
                isInApplicationsFolder: y = () =>
                  (function ({ getCurrentAppBundlePath: e }) {
                    try {
                      if ("isInApplicationsFolder" in s.app) return s.app.isInApplicationsFolder()
                    } catch (e) {
                      ;(0, l.tZQ)().warning("Failed to check app Applications folder status", {
                        safe: { errorType: e instanceof Error ? e.name : typeof e },
                      })
                    }
                    try {
                      return X(e(), "/Applications")
                    } catch {
                      return !1
                    }
                  })({ getCurrentAppBundlePath: n }),
                moveAppBundleToApplicationsFolder: b = O,
              } = {}) {
                if ("darwin" !== u || !c) return !1
                if (y())
                  return (
                    await (async function ({
                      clearPendingSourceDmgPath: e,
                      detachSourceDmg: t,
                      getPendingSourceDmgPath: a,
                      sourceDmgExists: n,
                      trashItem: r,
                    }) {
                      let i = a()
                      null == i ||
                        ((await (async function ({
                          detachSourceDmg: e,
                          sourceDmgExists: t,
                          sourceDmgPath: a,
                          trashItem: n,
                        }) {
                          if (!t(a)) return !0
                          let r = !1
                          for (let t = 1; t <= 25; t += 1) {
                            try {
                              if (e(a)) {
                                r = !0
                                break
                              }
                            } catch {}
                            t < 25 && (await (0, S.setTimeout)(250))
                          }
                          if (!r) return ((0, l.tZQ)().warning("Failed to detach app source DMG after retries"), !1)
                          try {
                            return (await n(a), !0)
                          } catch (e) {
                            return (
                              (0, l.tZQ)().warning("Failed to move app source DMG to Trash", {
                                safe: { errorType: e instanceof Error ? e.name : typeof e },
                              }),
                              !1
                            )
                          }
                        })({ detachSourceDmg: t, sourceDmgExists: n, sourceDmgPath: i, trashItem: r })) &&
                          e())
                    })({
                      clearPendingSourceDmgPath: e,
                      detachSourceDmg: a,
                      getPendingSourceDmgPath: r,
                      sourceDmgExists: h,
                      trashItem: w,
                    }),
                    !1
                  )
                let v = (function (e) {
                  try {
                    return e()
                  } catch (e) {
                    return (
                      (0, l.tZQ)().warning("Failed to find app source DMG", {
                        safe: { errorType: e instanceof Error ? e.name : typeof e },
                      }),
                      null
                    )
                  }
                })(i)
                if (null == v) return !1
                let I = await m()
                !(function ({ setPendingSourceDmgPath: e, sourceDmgPath: t }) {
                  try {
                    e(t)
                  } catch (e) {
                    ;(0, l.tZQ)().warning("Failed to remember app source DMG for cleanup", {
                      safe: { errorType: e instanceof Error ? e.name : typeof e },
                    })
                  }
                })({ setPendingSourceDmgPath: g, sourceDmgPath: v })
                let x = null
                try {
                  let a = n(),
                    r = f(a)
                  switch (r.status) {
                    case "blocked":
                      return (e(), await I.setStatus("failed"), !0)
                    case "not-needed":
                      break
                    case "relocated":
                      x = r.restore
                  }
                  switch (b(I.allowClose)) {
                    case "moved":
                      return ((x = null), !0)
                    case "canceled":
                      return (e(), await I.setStatus("failed"), !0)
                  }
                  if (!o()) return (e(), await I.setStatus("failed"), !0)
                  let i = await t(a)
                  if (null == i) return (e(), await I.setStatus("failed"), !0)
                  if (((x = null), await I.setStatus("opening"), !(await p(i))))
                    return (await I.setStatus("openFailed"), !0)
                  return (d(), !0)
                } catch (t) {
                  return (
                    e(),
                    (0, l.tZQ)().warning("Failed to install app in Applications folder", {
                      safe: { errorType: t instanceof Error ? t.name : typeof t },
                    }),
                    await I.setStatus("failed"),
                    !0
                  )
                } finally {
                  x?.()
                }
              })()) ||
              !(await (0, Y.An)(el, e.waitForInteractiveLaunch))
            )
              return
            let r =
                "win32" === process.platform &&
                s.app.isPackaged &&
                null != process.resourcesPath &&
                !process.env.CODEX_CLI_PATH?.trim() &&
                "1" ===
                  (0, $.C)("codexWindowsAppContainedCore", {
                    candidates: [b().join(process.resourcesPath, "app.asar", "package.json")],
                  }),
              i = (0, en.oF)(eo),
              o = !1
            if (r || i)
              try {
                var c, p
                let e,
                  t = (0, ee.w)(),
                  a = t?.getCurrentPackageFamily()
                ;(s.app.isPackaged &&
                  null == a &&
                  (0, l.tZQ)().warning("windows_runtime_framework_identity_unavailable", {
                    safe: {
                      buildFlavor: eo,
                      appVersion: s.app.getVersion(),
                      architecture: process.arch,
                      failureReason: null == t ? "native-addon-unavailable" : "no-package-identity",
                      appContainedCoreBuild: r,
                      shouldUseWindowsRuntimeFrameworks: i,
                      hasDoNotDeElevateSwitch: s.app.commandLine.hasSwitch("do-not-de-elevate"),
                    },
                  }),
                  a && r && (process.env.CODEX_WINDOWS_SANDBOX_PACKAGE_FAMILY = a))
                let n = (0, J.Aw)(await (0, J.VB)((0, l.DnS)()), (await (0, et.e)()) != null),
                  u =
                    n.core ||
                    (r &&
                      null != a &&
                      ((c = process.getSystemVersion()),
                      (p = t?.getWindowsUpdateBuildRevision() ?? null),
                      (e = Number(c.split(".")[2])) > 26200 ||
                        ((26100 === e || 26200 === e) && null != p && p >= 9278)))
                ;((o = null != a && u), (0, l.Ges)(u), (0, en.t5)(n.primary))
              } catch (e) {
                ;((0, l.Ges)(null),
                  (0, en.qG)(!1),
                  (0, l.tZQ)().warning("windows_runtime_framework_gate_hydration_failed", {
                    safe: { buildFlavor: eo, ...(0, ea.l)(e) },
                    sensitive: { error: e },
                  }))
              }
            let m = { phase: "bootstrap-import-main" }
            try {
              if (
                (await n.initialize(),
                r && o && ((0, l.OSF)(process.resourcesPath), (process.env.CODEX_WINDOWS_REGISTERED_CORE = "1")),
                r || i)
              ) {
                let e = r && o ? "app-package" : "bundled"
                ;(0, l.tZQ)().info("windows_core_runtime_launch_selected", {
                  safe: {
                    buildFlavor: eo,
                    architecture: process.arch,
                    coreGateEnabledAtStartup: o,
                    selectedRuntimeSource: e,
                  },
                })
              }
              await (0, en.et)({ buildFlavor: eo }).catch((e) => {
                ;(0, l.tZQ)().warning("windows_primary_runtime_framework_activation_failed", {
                  safe: { buildFlavor: eo, ...(0, ea.l)(e) },
                  sensitive: { error: e },
                })
              })
              let { loadMain: e } = await a.e(916).then(a.bind(a, 9319)),
                { runMainAppStartup: t } = await e()
              await t()
            } catch (a) {
              for (let e of s.BrowserWindow.getAllWindows()) e.isDestroyed() || e.destroy()
              if (
                ((0, l.tZQ)().error("Desktop bootstrap failed to start the main app", {
                  safe: m,
                  sensitive: { error: a },
                }),
                t.captureException(a, { tags: m }),
                "1" === process.env.CODEX_ELECTRON_START_IN_BACKGROUND)
              )
                return void s.app.exit(1)
              ;(await n.startUpdaterAfterStartupFailure(),
                (await e.waitForInteractiveLaunch()) &&
                  (await (async function e(t) {
                    let { appUpdates: a } = (0, g.q)(),
                      n = a.getIsUpdateReady()
                        ? ["install-update", "quit"]
                        : a.hasUpdater()
                          ? ["check-for-updates", "quit"]
                          : ["quit"],
                      r = await s.dialog.showMessageBox({
                        type: "error",
                        buttons: n.map((e) => er[e]),
                        defaultId: 0,
                        cancelId: n.length - 1,
                        message: `${s.app.getName()} failed to start.`,
                        detail: t instanceof Error ? t.message : "The main desktop app failed during startup.",
                        noLink: !0,
                      })
                    switch (n[r.response] ?? "quit") {
                      case "install-update":
                        await a.installUpdatesIfAvailable()
                        break
                      case "check-for-updates":
                        await a.checkForUpdates()
                        break
                      case "quit":
                        s.app.quit()
                        return
                    }
                    "win32" === process.platform && (await e(t))
                  })(a)))
            }
          }))
      } else
        ((0, l.tZQ)().info("Exiting second desktop instance", {
          safe: { packaged: s.app.isPackaged, platform: process.platform },
        }),
          s.app.exit(0))
    },
    45226(e, t, a) {
      ;(a.r(t),
        a.d(
          t,
          {},
          {
            startBootstrap: function () {
              return Promise.resolve().then(a.bind(a, 92662))
            },
          },
        ))
    },
  }))
//# sourceMappingURL=early-bootstrap-719-3f2c0f5e5974a155.js.map
