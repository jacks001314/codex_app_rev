const e = require("./rolldown-runtime-CPUxUITh.js"),
  t = require("./browser-background-switches-DmHa3bqb.js"),
  n = require("./file-based-logger-CJvvkBIo.js"),
  r = require("./zod-C7Kk26Xx.js"),
  i = require("./src-Dtwb7yKT.js"),
  a = require("./src-DsLVGakC.js"),
  o = require("./mcp-app-attachment-DQQzodzc.js"),
  s = require("./application-network-startup-DB1VeU3v.js"),
  c = require("./startup-requirements-BlaoVssN.js"),
  l = require("./logger-Bfbyn6HA.js"),
  u = require("./desktop-open-path-queue-CqGT6pda.js"),
  d = require("./src-C9YLnbgY.js");
let f = require("node:crypto"),
  p = require("path");
p = e.a(p);
let m = require("node:util"),
  h = require("node:fs");
h = e.a(h);
let g = require("node:path");
g = e.a(g);
let _ = require("node:os");
_ = e.a(_);
let v = require("node:worker_threads"),
  y = require("electron");
y = e.a(y);
let b = require("node:fs/promises");
b = e.a(b);
let x = require("node:url"),
  S = require("node:child_process"),
  C = require("fs"),
  w = require("stream"),
  T = require("util"),
  E = require("url");
E = e.a(E);
let ee = require("zlib"),
  D = require("node:timers/promises"),
  te = require("node:readline"),
  O = require("module"),
  ne = require("perf_hooks"),
  re = require("worker_threads"),
  k = require("node:diagnostics_channel");
k = e.a(k);
let A = require("diagnostics_channel");
A = e.a(A);
let ie = require("node:module"),
  ae = require("node:zlib");
var j = `https://chatgpt.com/codex`;
function oe(e) {
  let t = typeof e == `string` ? URL.parse(e) : e;
  return t == null || (t.protocol !== `codex:` && t.protocol !== `codex-dev:`)
    ? null
    : {
        destination: t.username === `` && t.password === `` && t.port === `` ? t.host : `unsupported`,
        url: t,
      };
}
function se(e) {
  return e;
}
var ce = `chatgpt-migration-announcement-completed-v1`;
function le(e) {
  return /^libfile[-_][A-Za-z0-9_-]+$/.exec(e)?.[0] === e;
}
function ue(e) {
  let t = /^https:\/\/chatgpt\.com\/api\/library\/files\/([^/]+)\/download$/.exec(e),
    n = t?.[1];
  return t?.[0] === e && n != null && le(n) ? n : null;
}
var de = 2048,
  fe = 20,
  pe = 20,
  me = `[Truncated: breadcrumb data exceeded 2 KiB]`,
  he = `https://6719eaa18601933a26ac21499dcaba2f@o33249.ingest.us.sentry.io/4510999349821440`;
function ge(e) {
  let { data: t } = e;
  if (t == null) return e;
  if (!(`arguments` in t && !M(t.arguments))) return M(t) ? e : { ...e, data: ve(t) };
  let n = { ...t, arguments: me, codex_truncated_breadcrumb_data: !0 };
  return M(n) ? { ...e, data: n } : { ...e, data: ve(t) };
}
function _e(e) {
  return `codex@${e}`;
}
function M(e) {
  try {
    let t = JSON.stringify(e);
    return t == null || t.length > de ? !1 : new TextEncoder().encode(t).byteLength <= de;
  } catch {
    return !1;
  }
}
function ve(e) {
  let t = { codex_truncated_breadcrumb_data: !0 },
    n = [],
    r = 0,
    i = !1;
  for (let a in e) {
    if (!Object.hasOwn(e, a)) continue;
    if (r === fe) {
      i = !0;
      break;
    }
    r += 1;
    let o = e[a],
      s = { ...t, [a]: M(o) ? o : me, codex_truncated_breadcrumb_data: !0 };
    M(s) ? (t = s) : n.push(a);
  }
  if (n.length > 0 || i) {
    let e = {
      ...t,
      codex_omitted_breadcrumb_data_keys: [
        ...n.slice(0, pe).map((e) => e.slice(0, 128)),
        ...(i ? [`[Additional keys omitted]`] : []),
      ],
    };
    if (M(e)) return e;
  }
  return t;
}
var ye = [
    `bootstrap`,
    `host_ready`,
    `window_created`,
    `renderer_ready`,
    `first_content_visible`,
    `background_ready`,
  ],
  be = class {
    abortController = new AbortController();
    listeners = new Set();
    phase;
    constructor(e = `bootstrap`) {
      this.phase = e;
    }
    getSnapshot = () => this.phase;
    subscribe = (e) =>
      this.abortController.signal.aborted
        ? () => {}
        : (this.listeners.add(e),
          () => {
            this.listeners.delete(e);
          });
    hasReached(e) {
      return ye.indexOf(this.phase) >= ye.indexOf(e);
    }
    reach(e) {
      if (!(this.abortController.signal.aborted || this.hasReached(e))) {
        this.phase = e;
        for (let e of this.listeners) e();
      }
    }
    whenReached(e, t) {
      return t?.aborted
        ? Promise.reject(xe(t))
        : this.abortController.signal.aborted
          ? Promise.reject(xe(this.abortController.signal))
          : this.hasReached(e)
            ? Promise.resolve()
            : new Promise((n, r) => {
                let i = this.subscribe(() => {
                    this.hasReached(e) && (o(), n());
                  }),
                  a = () => {
                    (o(), r(xe(t?.aborted ? t : this.abortController.signal)));
                  },
                  o = () => {
                    (i(),
                      t?.removeEventListener(`abort`, a),
                      this.abortController.signal.removeEventListener(`abort`, a));
                  };
                (t?.addEventListener(`abort`, a, { once: !0 }),
                  this.abortController.signal.addEventListener(`abort`, a, { once: !0 }));
              });
    }
    dispose() {
      this.abortController.signal.aborted ||
        (this.abortController.abort(new DOMException(`Startup was disposed`, `AbortError`)),
        this.listeners.clear());
    }
  };
function xe(e) {
  return e.reason instanceof Error ? e.reason : new DOMException(`Startup was canceled`, `AbortError`);
}
var Se = { report: () => {}, reportNonFatal: () => {}, reportFatal: () => {} };
function Ce(e) {
  let t = (t, n, r) => {
    let i = typeof t == `string` ? Error(t) : t;
    try {
      e(i, n, r);
    } catch {}
  };
  return {
    report: t,
    reportNonFatal: (e, n) => t(e, `non-fatal`, n),
    reportFatal: (e, n) => t(e, `fatal`, n),
  };
}
var we = `desktop.intelLaunchWarning.message`,
  Te = `{appName} is running the Intel build on an Apple Silicon Mac`,
  Ee = `desktop.intelLaunchWarning.detail`,
  De = `This build works through Rosetta, but the Apple Silicon build launches faster and performs better. Quit now to install the Apple Silicon build, or continue with the Intel build`,
  Oe = `desktop.intelLaunchWarning.quit`,
  ke = `Quit`,
  Ae = `desktop.intelLaunchWarning.continue`,
  je = `Continue Anyway`;
function Me(e, t = Pe) {
  return !e.isPackaged || e.platform !== `darwin` || e.arch !== `x64` ? !1 : t();
}
async function Ne({
  appName: e,
  environment: t,
  readProcessTranslated: n = Pe,
  loadNativeIntl: r = Fe,
  showMessageBox: i = (e) => y.dialog.showMessageBox(e),
}) {
  if (!Me(t, n)) return !0;
  try {
    let t = await r();
    return (
      (
        await i({
          type: `warning`,
          buttons: [
            t.formatMessage({ messageId: Oe, defaultMessage: ke }),
            t.formatMessage({ messageId: Ae, defaultMessage: je }),
          ],
          defaultId: 0,
          cancelId: 0,
          noLink: !0,
          message: t.formatMessage({ messageId: we, defaultMessage: Te, values: { appName: e } }),
          detail: t.formatMessage({ messageId: Ee, defaultMessage: De }),
        })
      ).response === 1
    );
  } catch (e) {
    return (
      l
        .r()
        .warning(`Failed to show Intel-on-Apple-Silicon launch warning`, {
          safe: { errorName: e instanceof Error ? e.name : null },
        }),
      !0
    );
  }
}
function Pe() {
  try {
    return (
      (0, S.execFileSync)(`/usr/sbin/sysctl`, [`-in`, `sysctl.proc_translated`], {
        encoding: `utf8`,
        env: s.Ct(process.env),
        stdio: [`ignore`, `pipe`, `ignore`],
      }).trim() === `1`
    );
  } catch {
    return !1;
  }
}
async function Fe() {
  try {
    return c.p();
  } catch {
    try {
      return await c.d.load(``);
    } catch {
      return c.d.createDefault();
    }
  }
}
var Ie = l.a(`windows-packages`),
  Le = (0, O.createRequire)(__filename);
function N() {
  let e;
  try {
    return Le((0, g.join)(process.resourcesPath, `native`, `windows-updater.node`));
  } catch (t) {
    e = t;
  }
  return (
    Ie().error(`Failed to load native Windows updater addon`, { safe: {}, sensitive: { error: e } }),
    null
  );
}
var Re = l.a(`windows-updater`);
function ze() {
  if (process.platform !== `win32` || !y.app.isPackaged) return;
  let e = N();
  if (e)
    try {
      e.deployment.registerRestart(``);
    } catch (e) {
      Re().warning(`Could not establish Windows restart lifecycle`, { safe: {}, sensitive: { error: e } });
    }
}
var Be = e.a(o.at()),
  Ve = `linux-package-metadata.json`,
  He = 9e5,
  Ue = r.O({
    codexAppBrand: r.N().trim().pipe(r.w(`chatgpt`)),
    codexBuildFlavor: r.N(),
    version: r.N().trim().min(1),
  }),
  We = class {
    options;
    isUpdateReady = !1;
    constructor(e) {
      this.options = e;
    }
    initialize() {
      this.hasUpdater() &&
        (this.checkForUpdates(),
        setInterval(() => {
          this.checkForUpdates();
        }, He).unref());
    }
    hasUpdater() {
      return Ge(this.options);
    }
    getIsUpdateReady() {
      return this.isUpdateReady;
    }
    getUnavailableReason() {
      return this.hasUpdater() ? null : `unsupported Linux package runtime`;
    }
    checkForUpdates = async () => {
      if (!this.hasUpdater() || this.isUpdateReady) return;
      let e = Ke({ buildFlavor: this.options.buildFlavor, executablePath: this.options.executablePath });
      e != null &&
        qe(e, this.options.runningVersion) &&
        ((this.isUpdateReady = !0), this.options.onUpdateReadyChanged(!0));
    };
    async checkForUpdateInformation() {
      return (
        await this.checkForUpdates(),
        this.isUpdateReady
          ? { status: `restart_required` }
          : {
              status: `unavailable`,
              reason: `Linux updates are managed by the package manager. No installed update requiring restart was detected; remote release availability was not checked.`,
            }
      );
    }
    async installUpdatesIfAvailable() {
      this.isUpdateReady && (y.app.relaunch(), this.options.onInstallUpdatesRequested?.());
    }
  };
function Ge({ buildFlavor: e, isPackaged: t }) {
  return process.platform === `linux` && t && n.i.shouldIncludeLinuxPackageUpdater(e, process.platform);
}
function Ke({ buildFlavor: e, executablePath: t }) {
  let r = g.default.join(g.default.dirname(t), `resources`, Ve);
  try {
    let t = Ue.safeParse(JSON.parse((0, h.readFileSync)(r, `utf8`)));
    return !t.success || n.i.parse(t.data.codexBuildFlavor) !== e ? null : t.data.version;
  } catch {
    return null;
  }
}
function qe(e, t) {
  let n, r;
  try {
    ((n = a.Ai(e)), (r = a.Ai(t)));
  } catch {
    return !1;
  }
  if (a.Ti(n) !== e || a.Ti(r) !== t) return !1;
  for (let e of [`major`, `minor`, `patch`]) if (n[e] !== r[e]) return n[e] > r[e];
  return !1;
}
var Je = 6048e5,
  Ye = 72e5,
  Xe = 36e5,
  Ze = 7,
  Qe = 864e5,
  P = r.A((e) => (typeof e == `number` && Number.isInteger(e) ? e : null), r.D().int().nullable()),
  $e = r.O({
    relaunchNotification: P,
    relaunchNotificationPeriodMs: P,
    relaunchWindow: r
      .L()
      .optional()
      .transform((e) => e ?? null),
    relaunchFastIfOutdatedDays: P,
  }),
  et = r.O({ entries: r.h(r.O({ duration_mins: P, start: r.O({ hour: P, minute: P }) })) }),
  tt = r.O({
    owlUpdatePolicies: r.O({
      getRelaunchNotificationPolicy: r.v((e) => typeof e == `function`),
      on: r.v((e) => typeof e == `function`),
    }),
  });
function nt() {
  let e = process._linkedBinding;
  if (typeof e != `function`) return null;
  let t;
  try {
    t = e.call(process, `electron_browser_owl_update_policies`);
  } catch {
    return null;
  }
  return ot(t) ? t.owlUpdatePolicies : null;
}
function rt(e) {
  return at(e.getRelaunchNotificationPolicy());
}
function it(e, t) {
  return lt(e + st(t), t.relaunchWindow);
}
function at(e) {
  let t = $e.safeParse(e);
  return t.success ? t.data : null;
}
function ot(e) {
  return tt.safeParse(e).success;
}
function st(e) {
  let { relaunchNotificationPeriodMs: t } = e,
    n;
  return ((n = t == null || t < Xe ? Je : t), ct(e.relaunchFastIfOutdatedDays) ? Math.min(n, Ye) : n);
}
function ct(e) {
  if (e == null || e < Ze) return !1;
  let t = a.Ei(y.app.getVersion());
  return t ? Date.now() - t.getTime() > e * Qe : !1;
}
function lt(e, t) {
  let n = ut(t);
  if (!n || n.durationMs >= 864e5) return e;
  let r = dt(e, n),
    i = r + n.durationMs;
  return e >= r && e < i ? e : e >= i ? pt(ft(r, 1), n) : e < ft(r, -1) + n.durationMs ? e : pt(r, n);
}
function ut(e) {
  let t = et.safeParse(e);
  if (!t.success) return null;
  let n = t.data.entries[0];
  if (n == null) return null;
  let { hour: r, minute: i } = n.start,
    a = n.duration_mins;
  return r == null || i == null || a == null || r < 0 || r > 23 || i < 0 || i > 59 || a < 1 || a > 1440
    ? null
    : { durationMs: a * 60 * 1e3, hour: r, minute: i };
}
function dt(e, t) {
  let n = new Date(e);
  return (n.setHours(t.hour, t.minute, 0, 0), n.getTime());
}
function ft(e, t) {
  let n = new Date(e);
  return (n.setDate(n.getDate() + t), n.getTime());
}
function pt(e, t) {
  return e + Math.floor(Math.random() * t.durationMs);
}
var mt = `codex_desktop:message-from-view`,
  ht = `codex_desktop:message-for-view`,
  gt = `codex_desktop:chunked-message-ack`,
  _t = `codex_desktop:remote-hosted-pip-video-frame`,
  vt = `codex_desktop:browser-sidebar-runtime-message`,
  yt = `codex_desktop:browser-page-event`,
  bt = `codex_desktop:mcp-app-sandbox-guest-message`,
  xt = `codex_desktop:mcp-app-sandbox-host-message`,
  St = `codex_desktop:show-context-menu`,
  Ct = `codex_desktop:get-sentry-init-options`,
  wt = `codex_desktop:get-build-flavor`,
  Tt = `codex_desktop:get-system-theme-variant`,
  Et = `codex_desktop:get-shared-object-snapshot`,
  Dt = `codex_desktop:get-initial-sidebar-bootstrap`,
  Ot = `codex_desktop:get-fast-mode-rollout-metrics`,
  kt = `codex_desktop:system-theme-variant-updated`,
  At = `codex_desktop:trigger-sentry-test`,
  jt = `codex_desktop:connect-app-host`,
  Mt = `codex_desktop:start-file-drag`,
  Nt = `codex_desktop:start-link-drag`,
  Pt = `icons`,
  Ft = `https://chatgpt.com/backend-api`,
  It = `http://localhost:8000/api`,
  Lt = `Codex Desktop`,
  Rt = `codex_desktop`;
function zt(e) {
  return `codex_desktop:worker:${e}:from-view`;
}
function Bt(e) {
  return `codex_desktop:worker:${e}:for-view`;
}
var Vt = { darwin: `Mac OS`, linux: `X11; Linux`, win32: `Windows NT 10.0` };
function Ht({ appVersion: e, platform: t = process.platform, arch: n = process.arch }) {
  return `Codex Desktop/${e} (${Vt[t] ?? t}; ${n})`;
}
function Ut() {
  let e = process.env.CODEX_APP_VERSION?.trim();
  return !y.app.isPackaged && e ? e : y.app.getVersion();
}
var Wt = class extends Error {
  constructor(e) {
    super(`Sign in to ChatGPT to ${e}.`);
  }
};
function Gt(e) {
  let t = process.env.CODEX_API_BASE_URL;
  return t && t.trim().length > 0
    ? t.replace(/\/+$/, ``)
    : (process.env.CODEX_API_ENDPOINT ?? ``).toLowerCase() === `localhost`
      ? e.devApiBaseUrl
      : e.prodApiBaseUrl;
}
function Kt(e, t) {
  return i.Qn(Gt(e), t);
}
async function qt({
  action: e,
  appServerClient: t,
  desktopOriginator: n,
  headers: r = {},
  refreshToken: i = !1,
}) {
  let a = await t.getAuthToken({ refreshToken: i });
  if (!a) throw Error(`Sign in to ChatGPT to ${e}.`);
  let o = { ...r };
  return (Zt(o, a, { desktopOriginator: n }), o);
}
async function Jt(
  { action: e, appServerClient: t, desktopApiOptions: n, path: r, request: i = {}, beforeSend: o },
  s = y.net.fetch.bind(y.net),
) {
  i.signal?.throwIfAborted();
  let c = t.getBackendRequestAuth({ refreshToken: !1 }),
    l = await (i.signal == null ? c : a.Ci(c, i.signal));
  if (l == null) throw new Wt(e);
  let u = i.signal == null ? l.signal : AbortSignal.any([l.signal, i.signal]),
    d = async (e) => {
      let t = Object.fromEntries(new Headers(i.headers));
      (Xt(t.authorization?.replace(/^Bearer /i, ``), e), Zt(t, e.token, n));
      let a = Yt(Kt(n, r), t, e);
      (await o?.(e), u.throwIfAborted());
      let c = await s(a, { ...i, headers: t, signal: u, redirect: `error` });
      return (u.throwIfAborted(), c);
    },
    f = await d(l);
  if (f.status === 401) {
    (await f.body?.cancel(), u.throwIfAborted());
    let n = await a.Ci(t.getBackendRequestAuth({ refreshToken: !0 }), u);
    if ((u.throwIfAborted(), n == null)) throw new Wt(e);
    f = await d(n);
  }
  return new Response(f.body?.pipeThrough(new TransformStream(), { signal: u }) ?? null, {
    status: f.status,
    statusText: f.statusText,
    headers: f.headers,
  });
}
function Yt(e, t, n) {
  n.signal.throwIfAborted();
  for (let e of Object.keys(t)) e.toLowerCase() === `x-openai-account-routing-override` && delete t[e];
  if (n.routing.kind === `legacy`) return e;
  let { workspace: r } = n.routing;
  r.accountRoutingOverride !== `NO_CONSTRAINT` &&
    (t[`X-OpenAI-Account-Routing-Override`] = r.accountRoutingOverride);
  let i = new URL(e);
  return `${r.backendOrigin}${i.pathname}${i.search}`;
}
function Xt(e, t) {
  if (e == null || e === t.token) return;
  let n = a.ai(e),
    r = a.ai(t.token);
  if (n == null || r == null || n.accountId !== r.accountId || n.userId !== r.userId)
    throw new DOMException(`Authenticated workspace changed`, `AbortError`);
}
function Zt(e, t, { desktopOriginator: n, includeSurfaceHeaders: r = !0 }) {
  let i = a.oi(t);
  if (
    (tn(e, `Authorization`, `Bearer ${t}`),
    i?.accountId && tn(e, `ChatGPT-Account-Id`, i.accountId),
    i?.isFedramp === !0)
  )
    tn(e, `X-OpenAI-Fedramp`, `true`);
  else {
    let t = nn(e, `X-OpenAI-Fedramp`);
    t != null && delete e[t];
  }
  r && Qt(e, { desktopOriginator: n });
}
function Qt(e, { desktopOriginator: t }) {
  (en(e, `originator`) || tn(e, `originator`, t),
    en(e, `User-Agent`) || tn(e, `User-Agent`, Ht({ appVersion: Ut() })));
}
function $t(e) {
  return a.oi(e)?.accountId ?? null;
}
function en(e, t) {
  return nn(e, t) != null;
}
function tn(e, t, n) {
  let r = nn(e, t);
  (r && delete e[r], (e[t] = n));
}
function nn(e, t) {
  let n = t.toLowerCase();
  return Object.keys(e).find((e) => e.toLowerCase() === n);
}
var rn = `codex/app/appcast`,
  an = `wham/app/appcast`,
  on = l.a(`production-appcast`);
function sn({ beta: e, installationId: t, planType: n }) {
  let r = process.arch;
  if (r !== `arm64` && r !== `x64`)
    return (on().warning(`Unsupported production appcast architecture`), null);
  let i = y.app.getVersion();
  try {
    if (a.Ti(a.Ai(i)) !== i) return (on().warning(`Invalid production appcast app version`), null);
  } catch {
    return (on().warning(`Invalid production appcast app version`), null);
  }
  let o = cn();
  return (
    o.searchParams.set(`installation_id`, t),
    o.searchParams.set(`arch`, r),
    o.searchParams.set(`app_version`, i),
    o.searchParams.set(`beta`, String(e)),
    o.searchParams.set(`os-version`, process.getSystemVersion()),
    o.searchParams.set(`plan_type`, n),
    o.toString()
  );
}
function cn() {
  let e = new URL(Kt({ desktopOriginator: Lt, devApiBaseUrl: It, prodApiBaseUrl: Ft }, an));
  return (
    [`localhost`, `127.0.0.1`, `[::1]`].includes(e.hostname.toLowerCase()) && (e.pathname = `/api/${rn}`),
    e.origin === `https://chatgpt.com` ? new URL(`https://updates.oaistatic.com/codex/app/appcast`) : e
  );
}
async function ln(e, t) {
  if (new URL(t.packageUrl).protocol !== `https:`) throw Error(`Windows update requires HTTPS.`);
  if (!e.allowed()) return null;
  let n = e.nativeAddon.getPackageLocalCachePath();
  if (n == null) throw Error(`Windows package cache is unavailable.`);
  let r = g.default.join(n, `windows-updates`),
    i = await y.net.fetch(t.packageUrl);
  if (!i.ok || !i.body || new URL(i.url || t.packageUrl).protocol !== `https:`)
    throw Error(`Windows update download failed: ${i.status}`);
  await b.default.mkdir(r, { recursive: !0 });
  let a = g.default.join(r, `prepared.msix`),
    o = g.default.join(r, `prepared.download`),
    s = (0, f.createHash)(`sha256`),
    c = 0,
    l = !1,
    u = t.length ?? Number(i.headers.get(`content-length`));
  try {
    e.onDownloadProgressChanged?.(0);
    let n = i.body.pipeThrough(
      new TransformStream({
        transform(t, n) {
          if (!e.allowed()) {
            ((l = !0), n.terminate());
            return;
          }
          ((c += t.byteLength),
            s.update(t),
            u > 0 && e.onDownloadProgressChanged?.(Math.min(100, Math.round((c * 100) / u))),
            n.enqueue(t));
        },
      }),
    );
    if ((await b.default.writeFile(o, n), l || !e.allowed())) return null;
    let r = s.digest(`hex`);
    if ((t.length != null && c !== t.length) || (t.sha256 != null && r !== t.sha256))
      throw Error(`Windows update package does not match the manifest.`);
    (await b.default.rm(a, { force: !0 }), await b.default.rename(o, a));
    let d = await e.nativeAddon.readPackageMetadata(a);
    if (
      d.packageIdentity !== e.packageIdentity ||
      d.packagePublisher !== e.packagePublisher ||
      d.architecture !== process.arch
    )
      throw Error(`Downloaded Windows package does not match this application or is not newer.`);
    return { packagePath: a, target: d.packageVersion, length: c, sha256: r };
  } finally {
    await b.default.rm(o, { force: !0 });
  }
}
function un(e, t) {
  let n = dn(e),
    r = dn(t),
    i = Math.max(n.length, r.length);
  for (let e = 0; e < i; e += 1) {
    let t = n[e] ?? 0,
      i = r[e] ?? 0;
    if (t !== i) return t - i;
  }
  return 0;
}
function dn(e) {
  let t = e.trim().split(`.`);
  if (t.some((e) => !/^\d+$/.test(e))) throw Error(`Invalid build version '${e}'.`);
  return t.map((e) => Number.parseInt(e, 10));
}
var fn = 61e3;
async function pn() {
  let e = fn - process.uptime() * 1e3;
  e > 0 && (await (0, D.setTimeout)(e));
}
var mn = l.a(`windows-updater`),
  hn = class {
    options;
    stateRoot = ``;
    isUpdateReady = !1;
    downloadProgressPercent = null;
    installProgressPercent = null;
    lastUnavailableReason = null;
    inFlightCheck = null;
    inFlightManualCheck = null;
    inFlightInstall = null;
    preparedUpdateVersion = 0;
    constructor(e) {
      this.options = e;
    }
    async initialize() {
      if (!y.app.isPackaged) {
        this.lastUnavailableReason = `dev build`;
        return;
      }
      if (!this.options.manifestUrl.trim()) {
        this.lastUnavailableReason = `missing packaged windows update url`;
        return;
      }
      if (!this.options.packageIdentity.trim()) {
        this.lastUnavailableReason = `missing packaged windows package identity`;
        return;
      }
      if (!this.options.packagePublisher.trim()) {
        this.lastUnavailableReason = `missing packaged windows package publisher`;
        return;
      }
      let e = this.options.nativeAddon.getCurrentPackageFamily()?.trim();
      if (!e) {
        this.lastUnavailableReason = `missing current windows package family`;
        return;
      }
      (this.options.nativeAddon.armProcessTreeCleanup(),
        (this.stateRoot = g.default.join(y.app.getPath(`userData`), `windows-msix-updater`, e)),
        await b.default.mkdir(this.stateRoot, { recursive: !0 }),
        (this.stateRoot = await b.default.realpath(this.stateRoot)));
      let t = await b.default.readdir(this.stateRoot, { withFileTypes: !0 });
      (await Promise.all(
        t
          .filter(
            (e) =>
              (e.isFile() && /\.(msix|download)$/i.test(e.name)) ||
              (e.isDirectory() && e.name === `installing`),
          )
          .map((e) =>
            b.default.rm(g.default.join(this.stateRoot, e.name), { recursive: e.isDirectory(), force: !0 }),
          ),
      ),
        await this.reconcileLocalPreparedState(),
        this.options.offers.setPreparedUpdateInvalidator(async () => {
          ((this.preparedUpdateVersion += 1),
            this.setUpdateReady(!1),
            await this.discardPreparedUpdate(),
            this.setUpdateLifecycleState(`idle`));
        }),
        this.options.checkIntervalMs > 0 &&
          setInterval(() => {
            this.checkForUpdatesInBackground();
          }, this.options.checkIntervalMs).unref(),
        this.options.checkForUpdatesOnInitialize !== !1 && this.checkForUpdatesInBackground());
    }
    hasUpdater() {
      return this.lastUnavailableReason == null;
    }
    getUnavailableReason() {
      return this.lastUnavailableReason;
    }
    getIsUpdateReady() {
      return this.isUpdateReady;
    }
    async checkForUpdates() {
      let e = this.inFlightManualCheck ?? this.performManualCheck().catch(() => {});
      this.inFlightManualCheck = e;
      try {
        await e;
      } finally {
        this.inFlightManualCheck === e && (this.inFlightManualCheck = null);
      }
    }
    async checkForUpdatesInBackground() {
      if (this.inFlightManualCheck) {
        await this.inFlightManualCheck;
        return;
      }
      this.inFlightInstall || (await this.runCheck({ manual: !1 }).catch(() => {}));
    }
    async installUpdatesIfAvailable() {
      if (this.inFlightInstall) {
        await this.inFlightInstall;
        return;
      }
      let e = this.installPreparedUpdate();
      this.inFlightInstall = e;
      try {
        await e;
      } catch (e) {
        if (
          (this.setInstallProgressPercent(null),
          e instanceof Error && `hresult` in e && e.hresult === 2147943623)
        )
          return;
        (mn().error(`Failed to install prepared Windows update`, { safe: {}, sensitive: { error: e } }),
          await this.showActionError({
            message: `Unable to install the ${y.app.getName()} update.`,
            detail: `Try checking for updates again.`,
          }));
      } finally {
        this.inFlightInstall === e && (this.inFlightInstall = null);
      }
    }
    async runCheck({ manual: e }) {
      let t = this.inFlightCheck ?? this.performCheck();
      this.inFlightCheck = t;
      try {
        let n = await t;
        return (e && (await this.showManualCheckResult(n)), n);
      } catch (t) {
        throw (
          this.setUpdateLifecycleState(this.isUpdateReady ? `ready` : `idle`),
          mn().error(`Failed to check for Windows updates`, { safe: {}, sensitive: { error: t } }),
          e &&
            (await this.showActionError({
              message: `Unable to check for ${y.app.getName()} updates.`,
              detail: t instanceof Error ? t.message : String(t),
            })),
          t
        );
      } finally {
        this.inFlightCheck === t && (this.inFlightCheck = null);
      }
    }
    async performManualCheck() {
      if (!this.inFlightInstall) {
        if (this.isUpdateReady && this.inFlightCheck == null) {
          await this.showManualCheckResult(`update-ready`);
          return;
        }
        await this.runCheck({ manual: !0 });
      }
    }
    async installPreparedUpdate() {
      let e = await this.readStageState();
      if (e == null) throw Error(`Install requested without a staged Windows update.`);
      try {
        if (
          (this.setUpdateReady(!1),
          this.setInstallProgressPercent(0),
          await pn(),
          await this.options.onBeforeInstall?.(),
          !this.options.allowed())
        ) {
          (this.setInstallProgressPercent(null), this.setUpdateLifecycleState(`idle`));
          return;
        }
        throw (
          await this.options.nativeAddon.activateStagedPackage(
            e.packagePath,
            (e) => {
              this.setInstallProgressPercent(e);
            },
            this.options.allowServiceInstallElevation === !0,
          ),
          Error(`Windows completed the update without restarting the app.`)
        );
      } catch (e) {
        throw (
          await this.reconcileLocalPreparedState(),
          this.setInstallProgressPercent(null),
          this.setUpdateLifecycleState(this.isUpdateReady ? `ready` : `idle`),
          e
        );
      }
    }
    async showManualCheckResult(e) {
      if (e === `waiting`) {
        await this.showActionError({
          message: `Unable to check for ${y.app.getName()} updates.`,
          detail: `Update information is temporarily unavailable. Try again later.`,
        });
        return;
      }
      if (e === `update-ready`) {
        await y.dialog.showMessageBox({
          type: `info`,
          buttons: [`OK`],
          defaultId: 0,
          noLink: !0,
          message: `${y.app.getName()} update is ready to install.`,
        });
        return;
      }
      await y.dialog.showMessageBox({
        type: `info`,
        buttons: [`OK`],
        defaultId: 0,
        noLink: !0,
        message: `${y.app.getName()} is up to date.`,
      });
    }
    async reconcileLocalPreparedState() {
      let e = await this.readStageState();
      if (e == null) {
        this.setUpdateReady(!1);
        return;
      }
      if (un(e.buildVersion, this.options.buildVersion) <= 0) {
        await this.discardPreparedUpdate();
        return;
      }
      (this.setUpdateReady(!0), this.setUpdateLifecycleState(`ready`));
    }
    async readStageState() {
      let e = this.getStageStatePath();
      try {
        let t = await b.default.readFile(e, `utf8`),
          n = JSON.parse(t);
        if (
          typeof n.buildVersion != `string` ||
          (typeof n.length != `number` && n.length != null) ||
          typeof n.packagePath != `string` ||
          (typeof n.sha256 != `string` && n.sha256 != null)
        )
          throw Error(`missing required fields`);
        let r = this.options.nativeAddon.getPackageLocalCachePath(),
          i = r == null ? null : g.default.join(r, `windows-updates`, `prepared.msix`);
        if (i == null || n.packagePath !== i)
          throw Error(`staged package needs preparation in the Windows cache`);
        return (
          await b.default.access(i),
          {
            buildVersion: n.buildVersion.trim(),
            length: n.length ?? null,
            packagePath: i,
            sha256: n.sha256?.trim().toLowerCase() ?? null,
          }
        );
      } catch (t) {
        return t?.code === `ENOENT`
          ? (await b.default.rm(e, { force: !0 }), this.setUpdateReady(!1), null)
          : (mn().warning(`Discarding invalid Windows updater staged state.`, {
              safe: {},
              sensitive: { error: t, statePath: e },
            }),
            await b.default.rm(e, { force: !0 }),
            null);
      }
    }
    async checkForUpdateInformation() {
      return this.inFlightCheck || this.inFlightManualCheck || this.inFlightInstall
        ? { status: `busy` }
        : this.options.offers.checkForUpdateInformation();
    }
    async performCheck() {
      let e = this.preparedUpdateVersion;
      this.isUpdateReady || this.setUpdateLifecycleState(`checking`);
      let t = await this.options.offers.discover();
      if (t.source === `waiting`)
        return (
          this.setUpdateLifecycleState(this.isUpdateReady ? `ready` : `idle`),
          this.isUpdateReady ? `update-ready` : `waiting`
        );
      if (!(`packageInfo` in t) || e !== this.preparedUpdateVersion)
        return (await this.discardPreparedUpdate(), this.setUpdateLifecycleState(`idle`), `up-to-date`);
      let { buildVersion: n, packageInfo: r } = t,
        i = await this.readStageState();
      if (e !== this.preparedUpdateVersion)
        return (await this.discardPreparedUpdate(), this.setUpdateLifecycleState(`idle`), `up-to-date`);
      if (
        i?.buildVersion === n &&
        (r.length == null || i.length === r.length) &&
        (r.sha256 == null || i.sha256 === r.sha256)
      )
        return (this.setUpdateReady(!0), this.setUpdateLifecycleState(`ready`), `update-ready`);
      (i != null && (await this.discardPreparedUpdate()), this.setUpdateLifecycleState(`downloading`));
      let a = await ln(
        { ...this.options, onDownloadProgressChanged: (e) => this.setDownloadProgressPercent(e) },
        r,
      );
      if (a == null || !this.options.allowed() || e !== this.preparedUpdateVersion)
        return (await this.discardPreparedUpdate(), this.setUpdateLifecycleState(`idle`), `up-to-date`);
      let o = { buildVersion: n, packagePath: a.packagePath, length: a.length, sha256: a.sha256 };
      try {
        await this.options.nativeAddon.stagePackage(o.packagePath);
      } catch (e) {
        if (
          !this.options.allowServiceInstallElevation ||
          !(e instanceof Error) ||
          !(`hresult` in e) ||
          e.hresult !== 2147958056
        )
          throw (await this.discardPreparedUpdate(), e);
      }
      let s = this.getStageStatePath();
      return (
        await b.default.writeFile(`${s}.tmp`, JSON.stringify(o, null, 2)),
        await b.default.rename(`${s}.tmp`, s),
        !this.options.allowed() || e !== this.preparedUpdateVersion
          ? (await this.discardPreparedUpdate(), this.setUpdateLifecycleState(`idle`), `up-to-date`)
          : (this.setUpdateReady(!0), this.setUpdateLifecycleState(`ready`), `update-ready`)
      );
    }
    getStageStatePath() {
      return g.default.join(this.stateRoot, `staged-msix.json`);
    }
    async discardPreparedUpdate() {
      await b.default.rm(this.getStageStatePath(), { force: !0 });
      let e = this.options.nativeAddon.getPackageLocalCachePath();
      (e != null &&
        (await b.default.rm(g.default.join(e, `windows-updates`, `prepared.msix`), { force: !0 })),
        this.setUpdateReady(!1));
    }
    setUpdateReady(e) {
      this.isUpdateReady !== e && ((this.isUpdateReady = e), this.options.onUpdateReadyChanged?.(e));
    }
    setUpdateLifecycleState(e) {
      (this.options.onUpdateLifecycleStateChanged?.(e),
        e !== `downloading` && this.setDownloadProgressPercent(null));
    }
    setDownloadProgressPercent(e) {
      let t = e == null ? null : Math.round(Math.min(100, Math.max(0, e)));
      this.downloadProgressPercent !== t &&
        ((this.downloadProgressPercent = t), this.options.onDownloadProgressChanged?.(t));
    }
    setInstallProgressPercent(e) {
      this.installProgressPercent !== e &&
        ((this.installProgressPercent = e), this.options.onInstallProgressChanged?.(e));
    }
    async showActionError({ message: e, detail: t }) {
      await y.dialog.showMessageBox({
        type: `error`,
        buttons: [`OK`],
        defaultId: 0,
        noLink: !0,
        message: e,
        detail: t,
      });
    }
  },
  gn = l.a(`windows-store-updater`),
  _n = class {
    options;
    isUpdateReady = !1;
    downloadProgressPercent = null;
    installProgressPercent = null;
    lastUnavailableReason = null;
    activeCheck = null;
    inFlightManualCheck = null;
    inFlightInstall = null;
    constructor(e) {
      this.options = e;
    }
    async initialize() {
      if (!y.app.isPackaged) {
        this.lastUnavailableReason = `dev build`;
        return;
      }
      if (!this.options.nativeAddon.getCurrentPackageFamily()?.trim()) {
        this.lastUnavailableReason = `missing current windows package family`;
        return;
      }
      (this.options.checkIntervalMs > 0 &&
        setInterval(() => {
          this.checkForUpdatesInBackground();
        }, this.options.checkIntervalMs).unref(),
        this.options.checkOnInitialize !== !1 && this.checkForUpdatesInBackground());
    }
    hasUpdater() {
      return this.lastUnavailableReason == null;
    }
    getUnavailableReason() {
      return this.lastUnavailableReason;
    }
    getIsUpdateReady() {
      return this.isUpdateReady;
    }
    async checkForUpdateInformation() {
      return this.activeCheck || this.inFlightManualCheck || this.inFlightInstall
        ? { status: `busy` }
        : this.isUpdateReady
          ? { status: `restart_required` }
          : this.options.offers.checkForUpdateInformation();
    }
    async checkForUpdates() {
      await this.runManualCheck({ allowFallback: !1 }).catch(() => {});
    }
    async checkForUpdatesWithFallbackDecision({ manual: e = !1 } = {}) {
      return e
        ? this.runManualCheck({ allowFallback: !0 })
            .then(({ decision: e }) => e)
            .catch(() => ({ kind: `handled` }))
        : this.inFlightManualCheck
          ? (await this.inFlightManualCheck.promise, { kind: `handled` })
          : this.runCheck({ allowFallback: !0, manual: !1 })
              .then(({ decision: e }) => e)
              .catch(() => ({ kind: `handled` }));
    }
    async checkForUpdatesInBackground() {
      if (this.inFlightManualCheck) {
        await this.inFlightManualCheck.promise;
        return;
      }
      await this.runCheck({ allowFallback: !1, manual: !1 }).catch(() => {});
    }
    async installUpdatesIfAvailable() {
      if (this.inFlightInstall) {
        await this.inFlightInstall;
        return;
      }
      let e = this.performInstall();
      this.inFlightInstall = e;
      try {
        await e;
      } catch (e) {
        (this.setInstallProgressPercent(null),
          gn().error(`Failed to install Windows Store update`, { safe: {}, sensitive: { error: e } }),
          await this.showActionError({
            message: `Unable to install the ${y.app.getName()} update.`,
            detail: `Try checking for updates again.`,
          }));
      } finally {
        this.inFlightInstall === e && (this.inFlightInstall = null);
      }
    }
    async runCheck({ allowFallback: e, manual: t }) {
      if (this.inFlightInstall)
        return (await this.inFlightInstall.catch(() => {}), { decision: { kind: `handled` }, outcome: null });
      let n = this.activeCheck;
      if (n == null || n.allowFallback !== e || (t && !n.manual)) {
        let r = n;
        ((n = {
          allowFallback: e,
          manual: t,
          promise: (async () => (
            r != null && (await r.promise.catch(() => {})),
            this.performCheck({ allowFallback: e, manual: t })
          ))(),
        }),
          (this.activeCheck = n));
      }
      try {
        let e = await n.promise;
        return (
          t && e.decision.kind !== `fallback` && e.outcome != null && (await this.showCheckResult(e.outcome)),
          e
        );
      } catch (e) {
        throw (
          this.setUpdateLifecycleState(this.isUpdateReady ? `ready` : `idle`),
          gn().error(`Failed to check for Windows Store updates`, { safe: {}, sensitive: { error: e } }),
          t &&
            (await this.showActionError({
              message: `Unable to check for ${y.app.getName()} updates.`,
              detail: e instanceof Error ? e.message : String(e),
            })),
          e
        );
      } finally {
        this.activeCheck === n && (this.activeCheck = null);
      }
    }
    async performCheck({ allowFallback: e, manual: t }) {
      if (this.isUpdateReady)
        return (
          this.setUpdateLifecycleState(`ready`),
          { decision: { kind: `handled` }, outcome: `update-ready` }
        );
      this.setUpdateLifecycleState(`checking`);
      let n;
      try {
        n = await this.options.offers.discover(t ? `manual` : `background`);
      } catch (e) {
        return (
          this.setUpdateLifecycleState(`idle`),
          gn().warning(`Unable to discover Windows updates`, { safe: {}, sensitive: { error: e } }),
          t &&
            (await this.showActionError({
              message: `Unable to check for ${y.app.getName()} updates.`,
              detail: `Try checking for updates again.`,
            })),
          { decision: { kind: `waiting` }, outcome: null }
        );
      }
      if (n.source === `store-unavailable`)
        return (
          this.setUpdateReady(!1),
          this.setUpdateLifecycleState(`idle`),
          e
            ? { decision: { kind: `fallback`, reason: `store-operation-failed` }, outcome: null }
            : { decision: { kind: `handled` }, outcome: `update-available-in-store` }
        );
      if (n.source !== `store`)
        return (
          this.setUpdateReady(!1),
          this.setUpdateLifecycleState(`idle`),
          {
            decision: { kind: n.source === `waiting` ? `waiting` : `handled` },
            outcome: n.source === `waiting` ? `waiting-for-store` : `up-to-date`,
          }
        );
      if (!n.canSilentlyDownload || !this.options.offers.takeStoreDownloadAttempt())
        return (
          this.setUpdateReady(!1),
          this.setUpdateLifecycleState(`idle`),
          { decision: { kind: `handled` }, outcome: `update-available-in-store` }
        );
      (this.setUpdateLifecycleState(`downloading`), this.setDownloadProgressPercent(0));
      let r = await this.options.nativeAddon.trySilentDownloadStoreUpdates((e) =>
        this.setDownloadProgressPercent(e),
      );
      return (
        r.hasUpdate || (await this.options.offers.recordStoreNoUpdate()),
        r.hasUpdate && r.canSilentlyDownload && r.completed
          ? (this.setDownloadProgressPercent(100),
            this.setUpdateReady(!0),
            this.setUpdateLifecycleState(`ready`),
            { decision: { kind: `handled` }, outcome: `update-ready` })
          : (this.setUpdateReady(!1),
            this.setUpdateLifecycleState(`idle`),
            {
              decision: { kind: `handled` },
              outcome: r.hasUpdate ? `update-available-in-store` : `up-to-date`,
            })
      );
    }
    async runManualCheck({ allowFallback: e }) {
      let t = this.inFlightManualCheck;
      if (t == null || t.allowFallback !== e) {
        let n = t;
        ((t = {
          allowFallback: e,
          promise: (async () => (
            n != null && (await n.promise.catch(() => {})),
            this.runCheck({ allowFallback: e, manual: !0 })
          ))(),
        }),
          (this.inFlightManualCheck = t));
      }
      try {
        return await t.promise;
      } finally {
        this.inFlightManualCheck === t && (this.inFlightManualCheck = null);
      }
    }
    async performInstall() {
      if (!this.isUpdateReady || (await this.activeCheck?.promise.catch(() => {}), !this.isUpdateReady))
        return;
      (this.setUpdateReady(!1),
        this.setInstallProgressPercent(0),
        await pn(),
        this.options.onBeforeInstall && (await this.options.onBeforeInstall()));
      let e = await this.options.nativeAddon.trySilentDownloadAndInstallStoreUpdates((e) => {
        this.setInstallProgressPercent(e);
      });
      if (!e.hasUpdate) {
        (await this.options.offers.recordStoreNoUpdate(), this.setInstallProgressPercent(null));
        return;
      }
      if (!e.canSilentlyDownload) {
        (this.setInstallProgressPercent(null), await this.showCheckResult(`update-available-in-store`));
        return;
      }
      if (e.completed) {
        (this.setUpdateReady(!1), this.setInstallProgressPercent(null));
        return;
      }
      throw (
        this.setUpdateReady(!0),
        this.setInstallProgressPercent(null),
        Error(`Windows Store update install failed with state '${e.overallState}'.`)
      );
    }
    setUpdateReady(e) {
      this.isUpdateReady !== e && ((this.isUpdateReady = e), this.options.onUpdateReadyChanged?.(e));
    }
    setUpdateLifecycleState(e) {
      (this.options.onUpdateLifecycleStateChanged?.(e),
        e !== `downloading` && this.setDownloadProgressPercent(null));
    }
    setDownloadProgressPercent(e) {
      let t = e == null ? null : Math.round(Math.min(100, Math.max(0, e)));
      this.downloadProgressPercent !== t &&
        ((this.downloadProgressPercent = t), this.options.onDownloadProgressChanged?.(t));
    }
    setInstallProgressPercent(e) {
      this.installProgressPercent !== e &&
        ((this.installProgressPercent = e), this.options.onInstallProgressChanged?.(e));
    }
    async showActionError({ message: e, detail: t }) {
      await y.dialog.showMessageBox({
        type: `error`,
        buttons: [`OK`],
        defaultId: 0,
        noLink: !0,
        message: e,
        detail: t,
      });
    }
    async showCheckResult(e) {
      switch (e) {
        case `up-to-date`:
          await y.dialog.showMessageBox({
            type: `info`,
            buttons: [`OK`],
            defaultId: 0,
            noLink: !0,
            message: `${y.app.getName()} is up to date.`,
          });
          return;
        case `update-ready`:
          await y.dialog.showMessageBox({
            type: `info`,
            buttons: [`OK`],
            defaultId: 0,
            noLink: !0,
            message: `${y.app.getName()} update is ready to install.`,
          });
          return;
        case `update-available-in-store`:
          await y.dialog.showMessageBox({
            type: `info`,
            buttons: [`OK`],
            defaultId: 0,
            noLink: !0,
            message: `${y.app.getName()} update is available.`,
            detail: `Open Microsoft Store to install the update.`,
          });
          return;
        case `waiting-for-store`:
          await y.dialog.showMessageBox({
            type: `info`,
            buttons: [`OK`],
            defaultId: 0,
            noLink: !0,
            message: `Microsoft Store was checked recently.`,
            detail: `Try checking again later.`,
          });
          return;
      }
    }
  },
  vn = class {
    options;
    activeUpdater = null;
    installPromise = null;
    isMsixFallbackUpdaterInitialized = !1;
    constructor(e) {
      this.options = e;
    }
    async initialize() {
      await this.options.storeUpdater.initialize();
      try {
        (await this.options.msixFallbackUpdater.initialize(), (this.isMsixFallbackUpdaterInitialized = !0));
      } catch {}
      (this.options.checkIntervalMs > 0 &&
        setInterval(() => {
          this.checkForUpdatesInBackground();
        }, this.options.checkIntervalMs).unref(),
        this.checkForUpdatesInBackground());
    }
    hasUpdater() {
      return this.options.storeUpdater.hasUpdater() || this.hasMsixFallbackUpdater();
    }
    getUnavailableReason() {
      return this.hasUpdater()
        ? null
        : (this.options.storeUpdater.getUnavailableReason() ??
            (this.isMsixFallbackUpdaterInitialized
              ? this.options.msixFallbackUpdater.getUnavailableReason()
              : null));
    }
    getIsUpdateReady() {
      return this.activeUpdater?.getIsUpdateReady() ?? !1;
    }
    async checkForUpdateInformation() {
      return this.installPromise == null
        ? this.getIsUpdateReady()
          ? { status: `restart_required` }
          : this.options.storeUpdater.hasUpdater()
            ? this.options.storeUpdater.checkForUpdateInformation()
            : this.options.msixFallbackUpdater.checkForUpdateInformation()
        : { status: `busy` };
    }
    async checkForUpdates() {
      await this.runCheck(`manual`);
    }
    async checkForUpdatesInBackground() {
      await this.runCheck(`background`);
    }
    async installUpdatesIfAvailable() {
      if (this.installPromise != null) return this.installPromise;
      let e = this.activeUpdater?.getIsUpdateReady() ? this.activeUpdater : null;
      if (e != null)
        try {
          ((this.installPromise = e.installUpdatesIfAvailable()), await this.installPromise);
        } finally {
          ((this.installPromise = null),
            this.activeUpdater != null &&
              !this.activeUpdater.getIsUpdateReady() &&
              (this.activeUpdater = null),
            this.options.onUpdateReadyChanged?.(this.getIsUpdateReady()));
        }
    }
    async runCheck(e) {
      try {
        if (!this.options.storeUpdater.hasUpdater()) {
          await this.checkMsixFallback(e);
          return;
        }
        let t = await this.options.storeUpdater.checkForUpdatesWithFallbackDecision({
          manual: e === `manual`,
        });
        if (t.kind === `fallback`) {
          await this.checkMsixFallback(e);
          return;
        }
        if (t.kind === `waiting`) {
          this.activeUpdater == null &&
            this.hasMsixFallbackUpdater() &&
            this.options.msixFallbackUpdater.getIsUpdateReady() &&
            (this.activeUpdater = this.options.msixFallbackUpdater);
          return;
        }
        this.activeUpdater = this.options.storeUpdater.getIsUpdateReady() ? this.options.storeUpdater : null;
      } finally {
        this.options.onUpdateReadyChanged?.(this.getIsUpdateReady());
      }
    }
    async checkMsixFallback(e) {
      this.hasMsixFallbackUpdater() &&
        (e === `manual`
          ? await this.options.msixFallbackUpdater.checkForUpdates()
          : await this.options.msixFallbackUpdater.checkForUpdatesInBackground(),
        this.options.msixFallbackUpdater.getIsUpdateReady()
          ? (this.activeUpdater = this.options.msixFallbackUpdater)
          : this.activeUpdater === this.options.msixFallbackUpdater && (this.activeUpdater = null));
    }
    hasMsixFallbackUpdater() {
      return this.isMsixFallbackUpdaterInitialized && this.options.msixFallbackUpdater.hasUpdater();
    }
  },
  yn = r.O({
    packageUrl: r.R({ protocol: /^https$/ }),
    length: r.D().int().positive(),
    sha256: r
      .N()
      .regex(/^[a-f0-9]{64}$/i)
      .transform((e) => e.toLowerCase()),
  }),
  bn = yn
    .partial()
    .extend({
      buildVersion: r.N().regex(/^\d+(?:\.\d+)*$/),
      packageIdentity: r.N(),
      packagePublisher: r.N().optional(),
      packages: r.h(yn.extend({ arch: r.N() })).optional(),
    }),
  xn = r.O({
    schemaVersion: r.w(1),
    packageVersion: r.N().regex(/^\d+(?:\.\d+){3}$/),
    packages: r.h(
      r.O({
        architecture: r.N().transform((e) => (e === `x86_64` ? `x64` : e)),
        downloadUrl: r.R({ protocol: /^https$/ }),
      }),
    ),
  }),
  Sn = class {
    options;
    logger = l.i(`windows-offers`);
    lastStoreCheckAtMs = null;
    lastCheckedMarker = null;
    storeDownloadAttemptAvailable = !1;
    pendingOfferOperation = Promise.resolve();
    invalidatePreparedUpdate = null;
    lastStoreResult = null;
    constructor(e) {
      this.options = e;
    }
    setPreparedUpdateInvalidator(e) {
      this.invalidatePreparedUpdate = e;
    }
    takeStoreDownloadAttempt() {
      return this.storeDownloadAttemptAvailable ? ((this.storeDownloadAttemptAvailable = !1), !0) : !1;
    }
    recordStoreNoUpdate() {
      return this.serializeOfferOperation(async () => {
        ((this.storeDownloadAttemptAvailable = !1),
          (this.lastStoreResult = { source: `none` }),
          (this.lastStoreCheckAtMs = Date.now()),
          await this.invalidatePreparedUpdate?.());
      });
    }
    async checkForUpdateInformation() {
      let e = await this.discover();
      return e.source === `waiting`
        ? { status: `unavailable`, reason: `Microsoft Store was checked recently.` }
        : e.source === `none`
          ? { status: `up_to_date` }
          : {
              status: `available`,
              availableVersion: null,
              availableBuildVersion: `buildVersion` in e ? e.buildVersion : null,
            };
    }
    discover(e = `background`) {
      return this.serializeOfferOperation(async () => {
        let t = await this.discoverOffer(e);
        return (
          (t.source === `none` || t.source === `store`) && (await this.invalidatePreparedUpdate?.()),
          t
        );
      });
    }
    serializeOfferOperation(e) {
      let t = this.pendingOfferOperation.then(e);
      return (
        (this.pendingOfferOperation = t.then(
          () => {},
          () => {},
        )),
        t
      );
    }
    async discoverOffer(e) {
      if (!this.options.getStorePackageUrl) return this.direct(`direct`);
      let t = null;
      try {
        let n = await this.readManifest();
        if (un(n.buildVersion, this.options.buildVersion) > 0) t = n.buildVersion;
        else if (
          e === `background` &&
          (this.lastStoreResult == null ||
            (this.lastStoreResult !== `unavailable` && this.lastStoreResult.source === `none`))
        )
          return { source: `none` };
      } catch (e) {
        this.logger.warning(`Windows release marker unavailable`, { safe: {}, sensitive: { error: e } });
      }
      if (
        e === `background` &&
        this.lastStoreCheckAtMs != null &&
        (t == null || t === this.lastCheckedMarker) &&
        Date.now() - this.lastStoreCheckAtMs < 18e5
      )
        return this.lastStoreResult === `unavailable`
          ? this.discoverStoreFallback()
          : (this.lastStoreResult ?? { source: `waiting` });
      ((this.lastStoreCheckAtMs = Date.now()),
        (this.lastCheckedMarker = t),
        (this.storeDownloadAttemptAvailable = !1));
      try {
        let e = await this.options.nativeAddon.discoverStoreUpdates();
        return (
          this.logger.info(`Windows update eligibility`, { safe: { source: `store`, ...e } }),
          (this.storeDownloadAttemptAvailable = e.hasUpdate && e.canSilentlyDownload),
          (this.lastStoreResult = e.hasUpdate
            ? { source: `store`, canSilentlyDownload: e.canSilentlyDownload }
            : { source: `none` }),
          this.lastStoreResult
        );
      } catch (e) {
        return (
          (this.lastStoreResult = `unavailable`),
          this.logger.warning(`Windows Store discovery unavailable`, { safe: {}, sensitive: { error: e } }),
          this.discoverStoreFallback()
        );
      }
    }
    async discoverStoreFallback() {
      try {
        return await this.direct(`store-unavailable`);
      } catch (e) {
        return (
          this.logger.warning(`Windows offline release feed unavailable`, {
            safe: {},
            sensitive: { error: e },
          }),
          { source: `waiting` }
        );
      }
    }
    async direct(e) {
      let t =
          e === `store-unavailable` && this.options.storeReleaseFeedUrl
            ? xn.parse(await this.fetchJson(this.options.storeReleaseFeedUrl))
            : await this.readManifest(),
        n = `schemaVersion` in t ? t.packageVersion : t.buildVersion,
        r = un(n, this.options.buildVersion) > 0;
      if ((this.logger.info(`Windows update eligibility`, { safe: { source: e, hasUpdate: r } }), !r))
        return { source: `none` };
      if (`schemaVersion` in t) {
        let r = t.packages.find((e) => e.architecture === process.arch);
        if (!r) throw Error(`No published Windows package for this architecture.`);
        return {
          source: e,
          buildVersion: n,
          packageInfo: { packageUrl: r.downloadUrl, length: null, sha256: null },
        };
      }
      return {
        source: e,
        buildVersion: n,
        packageInfo:
          e === `store-unavailable` && !t.packages && this.options.getStorePackageUrl
            ? { packageUrl: t.packageUrl ?? this.options.getStorePackageUrl(n), length: null, sha256: null }
            : yn.parse(t.packages ? t.packages.find((e) => e.arch === process.arch) : t),
      };
    }
    async readManifest() {
      let e = bn.parse(await this.fetchJson(this.options.manifestUrl));
      if (
        e.packageIdentity !== this.options.packageIdentity ||
        ((this.options.getStorePackageUrl == null || e.packagePublisher != null) &&
          e.packagePublisher !== this.options.packagePublisher)
      )
        throw Error(`Windows update manifest targets another package.`);
      return e;
    }
    async fetchJson(e) {
      let t = await y.net.fetch(e);
      if (!t.ok || new URL(t.url || e).protocol !== `https:`)
        throw Error(`Windows update manifest request failed: ` + t.status);
      return t.json();
    }
  },
  Cn = (0, O.createRequire)(__filename),
  wn = 3e5,
  Tn = 18e6,
  En = 6e4,
  Dn = 864e5,
  On = 3,
  kn = 2 ** 31 - 1;
function An() {
  let e = process.env.SPARKLE_UPDATE_INTERVAL_MINUTES;
  if (!e) return 9e5;
  let t = Number(e);
  return Number.isFinite(t) ? (t <= 0 ? 0 : t * 60 * 1e3) : 9e5;
}
var jn = class {
  options;
  prepareWindowsUpdate;
  logger = l.i(`sparkle`);
  inAppUpdatesLaunchPolicy = `pending`;
  latestInAppUpdatesEnabled = null;
  inAppUpdatesLaunchPolicyResolution = Promise.withResolvers();
  inAppUpdatesLaunchPolicyTimer = null;
  updaterInitialization = null;
  updater = null;
  informationCheck = null;
  isUpdateReady = !1;
  updateLifecycleState = `idle`;
  downloadProgressPercent = null;
  installProgressPercent = null;
  lastUnavailableReason = null;
  updateDownloadedAtMs = null;
  downloadedUpdateAppBrand = null;
  forcedUpdateTimer = null;
  forcedUpdateInstallStarted = !1;
  forcedUpdateRetryAtMs = null;
  owlUpdatePolicies = null;
  relaunchNotice = null;
  automaticBackgroundDownloadsEnabled = !1;
  sparkleQueryParams = { beta: !1, planType: `unknown` };
  pendingSparkleQueryParams = null;
  productionSparkle = null;
  macExecutableIdentityAtLaunch = null;
  setAutomaticBackgroundDownloadsEnabledForMac = null;
  constructor(e) {
    this.options = e;
  }
  async initialize() {
    if (!this.options.enableUpdater) {
      ((this.lastUnavailableReason =
        process.platform !== `darwin` && process.platform !== `win32`
          ? `unsupported platform`
          : `disabled for build flavor (${this.options.buildFlavor})`),
        this.inAppUpdatesLaunchPolicyResolution.resolve(void 0));
      return;
    }
    (y.ipcMain.handle(`codex_desktop:check-for-updates`, async (e) => {
      this.options.isTrustedIpcEvent(e) && (await this.checkForUpdates());
    }),
      this.logger.info(`in_app_updates_policy_wait_started`, { safe: { timeoutMs: wn } }),
      (this.inAppUpdatesLaunchPolicyTimer = setTimeout(() => {
        ((this.inAppUpdatesLaunchPolicyTimer = null),
          this.logger.info(`in_app_updates_policy_timeout`, {
            safe: { timeoutMs: wn, policy: this.inAppUpdatesLaunchPolicy },
          }),
          this.allowInAppUpdatesForLaunch());
      }, wn)),
      this.inAppUpdatesLaunchPolicyTimer.unref());
  }
  async latchInAppUpdatesEnabledForLaunch(e) {
    if (
      ((this.latestInAppUpdatesEnabled = e),
      this.logger.info(`in_app_updates_policy_latch`, {
        safe: {
          enabled: e,
          policy: this.inAppUpdatesLaunchPolicy,
          ignored: this.inAppUpdatesLaunchPolicy !== `pending`,
        },
      }),
      this.inAppUpdatesLaunchPolicy === `pending`)
    ) {
      if (e) {
        await this.allowInAppUpdatesForLaunch();
        return;
      }
      (this.clearInAppUpdatesLaunchPolicyTimer(),
        (this.inAppUpdatesLaunchPolicy = `denied`),
        this.inAppUpdatesLaunchPolicyResolution.resolve(void 0));
    }
  }
  async startUpdaterAfterStartupFailure() {
    (this.logger.info(`in_app_updates_policy_startup_recovery`, {
      safe: { policy: this.inAppUpdatesLaunchPolicy },
    }),
      await this.allowInAppUpdatesForLaunch());
  }
  hasInAppUpdatesPolicyChanges() {
    if (!this.options.enableUpdater) return !1;
    switch (this.inAppUpdatesLaunchPolicy) {
      case `allowed`:
        return this.latestInAppUpdatesEnabled === !1;
      case `denied`:
        return this.latestInAppUpdatesEnabled === !0;
      case `pending`:
        return !1;
    }
  }
  hasUpdater() {
    return this.updater != null;
  }
  async allowInAppUpdatesForLaunch() {
    this.inAppUpdatesLaunchPolicy !== `denied` &&
      (this.clearInAppUpdatesLaunchPolicyTimer(),
      (this.inAppUpdatesLaunchPolicy = `allowed`),
      this.inAppUpdatesLaunchPolicyResolution.resolve(void 0),
      await this.initializeUpdater());
  }
  initializeUpdater() {
    return this.options.enableUpdater
      ? ((this.updaterInitialization ??= this.initializeUpdaterOnce()), this.updaterInitialization)
      : Promise.resolve();
  }
  async initializeUpdaterOnce() {
    try {
      if (
        (process.platform === `win32`
          ? await this.initializeWindowsUpdater()
          : process.platform === `linux`
            ? this.initializeLinuxPackageUpdater()
            : await this.initializeMacSparkle(),
        this.hasUpdater())
      ) {
        (this.observeRelaunchNotificationPolicy(),
          this.getSupportsAutoInstallWhenIdle() &&
            this.options.onUpdateLifecycleStateChanged?.(this.updateLifecycleState));
        return;
      }
      this.logger.warning(`Updater unavailable after init.`, {
        safe: {
          platform: process.platform,
          packaged: this.options.isPackaged,
          reason: this.lastUnavailableReason,
        },
        sensitive: {},
      });
    } catch (e) {
      (this.logger.error(`Failed to set up updater`, { safe: {}, sensitive: { error: e } }),
        (this.lastUnavailableReason = `updater initialization failed`),
        (this.updater = null));
    }
  }
  clearInAppUpdatesLaunchPolicyTimer() {
    this.inAppUpdatesLaunchPolicyTimer != null &&
      (clearTimeout(this.inAppUpdatesLaunchPolicyTimer), (this.inAppUpdatesLaunchPolicyTimer = null));
  }
  getIsUpdateReady() {
    return this.isUpdateReady;
  }
  getSupportsAutoInstallWhenIdle() {
    return !1;
  }
  getIsDownloadedUpdateReady() {
    return (
      this.getSupportsAutoInstallWhenIdle() &&
      this.isUpdateReady &&
      this.updateDownloadedAtMs != null &&
      this.updateLifecycleState === `ready`
    );
  }
  getInstallProgressPercent() {
    return this.installProgressPercent;
  }
  getDownloadProgressPercent() {
    return this.downloadProgressPercent;
  }
  getDownloadedUpdateAppBrand() {
    return this.downloadedUpdateAppBrand;
  }
  getUpdateLifecycleState() {
    return this.updateLifecycleState;
  }
  getRelaunchNotice() {
    return this.relaunchNotice == null ? null : this.createRelaunchNotice(this.relaunchNotice.deadlineAtMs);
  }
  showRelaunchNoticeForDebug() {
    this.setRelaunchNotice(Date.now() + Tn);
  }
  async checkForUpdateInformation() {
    if (this.inAppUpdatesLaunchPolicy === `denied`)
      return { status: `unavailable`, reason: `In-app updates are disabled by policy.` };
    if (!this.updater?.checkForUpdateInformation)
      return {
        status: `unavailable`,
        reason: this.lastUnavailableReason ?? `The updater is not initialized yet.`,
      };
    if (this.informationCheck != null) return { status: `busy` };
    let e = this.updater
      .checkForUpdateInformation()
      .catch(
        (e) => (
          this.logger.warning(`Quiet update check failed`, { safe: {}, sensitive: { error: e } }),
          { status: `error`, reason: `The updater could not check for updates.` }
        ),
      );
    return (
      (this.informationCheck = e),
      e.then(() => {
        this.informationCheck = null;
      }),
      new Promise((t) => {
        let n = setTimeout(() => t({ status: `error`, reason: `The update check timed out.` }), 3e4);
        e.then((e) => {
          (clearTimeout(n), t(e));
        });
      })
    );
  }
  async checkForUpdates() {
    if ((await this.inAppUpdatesLaunchPolicyResolution.promise, this.inAppUpdatesLaunchPolicy !== `denied`)) {
      if ((await this.allowInAppUpdatesForLaunch(), !this.updater)) {
        this.logger.warning(`Update check request ignored (updater unavailable).`);
        return;
      }
      try {
        await this.updater.checkForUpdates();
      } catch (e) {
        (this.updateLifecycleState === `checking` &&
          !this.isUpdateReady &&
          this.setUpdateLifecycleState(`idle`),
          this.logger.error(`Failed to check for updates`, { safe: {}, sensitive: { error: e } }));
      }
    }
  }
  async installUpdatesIfAvailable() {
    if ((await this.inAppUpdatesLaunchPolicyResolution.promise, this.inAppUpdatesLaunchPolicy === `denied`))
      return !1;
    if ((await this.allowInAppUpdatesForLaunch(), !this.updater))
      return (this.logger.warning(`Update install request ignored (updater unavailable).`), !1);
    try {
      return (
        this.informationCheck == null &&
        (this.isUpdateReady && process.platform !== `darwin` && this.setUpdateLifecycleState(`installing`),
        await this.updater.installUpdatesIfAvailable(),
        process.platform === `win32` && this.installProgressPercent == null
          ? (this.setUpdateLifecycleState(this.isUpdateReady ? `ready` : `idle`),
            this.options.onInstallUpdatesAborted?.(),
            !1)
          : !0)
      );
    } catch (e) {
      return (
        this.setUpdateLifecycleState(this.isUpdateReady ? `ready` : `idle`),
        this.options.onInstallUpdatesAborted?.(),
        this.logger.error(`Failed to install update`, { safe: {}, sensitive: { error: e } }),
        !1
      );
    }
  }
  getUnavailableReason() {
    return this.inAppUpdatesLaunchPolicy === `denied`
      ? `disabled by update policy`
      : this.lastUnavailableReason;
  }
  setSparkleQueryParams(e) {
    ((0, Be.default)(this.sparkleQueryParams, e) && this.pendingSparkleQueryParams == null) ||
      ((this.sparkleQueryParams = e), this.applySparkleQueryParams());
  }
  setAutomaticBackgroundDownloadsEnabled(e) {
    this.automaticBackgroundDownloadsEnabled !== e &&
      ((this.automaticBackgroundDownloadsEnabled = e),
      this.setAutomaticBackgroundDownloadsEnabledForMac?.(e));
  }
  applySparkleQueryParams() {
    let e = this.options.productionAppcastStateStore,
      t = this.productionSparkle;
    if (e != null && t != null) {
      if (!this.canReconfigureProductionAppcast()) {
        this.pendingSparkleQueryParams = this.sparkleQueryParams;
        return;
      }
      try {
        let n = sn({
          beta: this.sparkleQueryParams.beta,
          installationId: e.getOrCreateInstallationId(),
          planType: this.sparkleQueryParams.planType,
        });
        if (n == null) return;
        (t.init(n), (this.pendingSparkleQueryParams = null), (this.lastUnavailableReason = null));
      } catch (e) {
        this.logger.error(`Failed to update production appcast plan`, { safe: {}, sensitive: { error: e } });
      }
    }
  }
  canReconfigureProductionAppcast() {
    return (
      !this.isUpdateReady && this.downloadProgressPercent == null && this.updateLifecycleState === `idle`
    );
  }
  async initializeWindowsUpdater() {
    let e = N();
    if (!e) {
      this.lastUnavailableReason = `failed to load native windows updater`;
      return;
    }
    let t = n.a(`codexWindowsPackageIdentity`)?.trim() ?? ``,
      r = n.i.getWindowsStoreConfig(this.options.buildFlavor, t),
      i = n.a(`codexWindowsPackagePublisher`)?.trim() ?? ``,
      a = r?.storeUpdateManifestUrl ?? this.resolveWindowsUpdateUrl();
    if (!a) return;
    let o = new Sn({
        nativeAddon: e,
        manifestUrl: a,
        storeReleaseFeedUrl: r?.storeReleaseFeedUrl,
        getStorePackageUrl: r ? (e) => Nn(r.storeUpdateManifestUrl, e) : null,
        buildVersion: r ? this.resolveWindowsStoreBuildVersion() : this.resolveBuildVersion(),
        packageIdentity: t,
        packagePublisher: i,
      }),
      s = An(),
      c = {
        nativeAddon: e,
        offers: o,
        allowed: () => this.inAppUpdatesLaunchPolicy === `allowed` && this.latestInAppUpdatesEnabled !== !1,
        onBeforeInstall: async () => {
          await this.prepareWindowsUpdate?.();
        },
        onUpdateReadyChanged: (e) => {
          this.setUpdateReady(e);
        },
        onDownloadProgressChanged: (e) => {
          this.setDownloadProgressPercent(e);
        },
        onInstallProgressChanged: (e) => {
          this.setInstallProgressPercent(e);
        },
        onUpdateLifecycleStateChanged: (e) => {
          this.setUpdateLifecycleState(e);
        },
      },
      l;
    if (r != null) {
      let e = process.arch === `x64` || process.arch === `arm64`,
        n = new _n({
          checkIntervalMs: e ? 0 : s,
          checkOnInitialize: !e,
          ...c,
          onUpdateReadyChanged: e ? void 0 : c.onUpdateReadyChanged,
        });
      l = e
        ? new vn({
            checkIntervalMs: s,
            storeUpdater: n,
            onUpdateReadyChanged: c.onUpdateReadyChanged,
            msixFallbackUpdater: new hn({
              allowServiceInstallElevation: !0,
              manifestUrl: r.storeUpdateManifestUrl,
              buildVersion: this.resolveWindowsStoreBuildVersion(),
              packageIdentity: t,
              packagePublisher: i,
              checkIntervalMs: 0,
              checkForUpdatesOnInitialize: !1,
              ...c,
              onUpdateReadyChanged: void 0,
            }),
          })
        : n;
    } else
      l = new hn({
        manifestUrl: a,
        allowServiceInstallElevation: !0,
        buildVersion: this.resolveBuildVersion(),
        packageIdentity: t,
        packagePublisher: i,
        checkIntervalMs: s,
        ...c,
      });
    if ((await l.initialize(), !l.hasUpdater())) {
      this.lastUnavailableReason = l.getUnavailableReason();
      return;
    }
    ((this.lastUnavailableReason = null),
      (this.updater = l),
      this.setUpdateReady(l.getIsUpdateReady()),
      this.setInstallProgressPercent(null));
  }
  initializeLinuxPackageUpdater() {
    let e = new We({
      buildFlavor: this.options.buildFlavor,
      executablePath: process.execPath,
      isPackaged: this.options.isPackaged,
      runningVersion: y.app.getVersion(),
      onInstallUpdatesRequested: () => {
        this.options.onInstallUpdatesRequested?.();
      },
      onUpdateReadyChanged: (e) => {
        this.setUpdateReady(e);
      },
    });
    if ((e.initialize(), !e.hasUpdater())) {
      this.lastUnavailableReason = e.getUnavailableReason();
      return;
    }
    ((this.lastUnavailableReason = null), (this.updater = e));
  }
  async initializeMacSparkle() {
    if (process.platform !== `darwin`) {
      this.lastUnavailableReason = `unsupported platform`;
      return;
    }
    if (!this.options.isPackaged) {
      this.lastUnavailableReason = `dev build`;
      return;
    }
    this.macExecutableIdentityAtLaunch = this.readMacExecutableIdentity();
    let e =
        this.options.buildFlavor === n.i.Prod && this.options.productionAppcastStateStore != null
          ? this.options.productionAppcastStateStore
          : null,
      t = e != null,
      r,
      i = null,
      a;
    if (e != null) {
      let t = sn({
        beta: this.sparkleQueryParams.beta,
        installationId: e.getOrCreateInstallationId(),
        planType: this.sparkleQueryParams.planType,
      });
      if (t == null) {
        this.lastUnavailableReason = `production sparkle feed unavailable`;
        return;
      }
      r = t;
    } else {
      let e = this.resolveMacSparkleFeedUrl();
      if (e == null) return;
      let t = this.options.useInternalUpdateCdn ? this.resolveMacSparkleInternalCdnFeedUrl() : null;
      ((r = t ?? e),
        (i = t ? e : null),
        (a = t ? await this.getInternalUpdateCdnRequestHeaders(r) : void 0),
        a === !1 && ((r = e), (i = null)));
    }
    let o = null,
      s = null,
      c;
    try {
      s = Cn((0, g.join)(process.resourcesPath, `native`, `sparkle.node`));
    } catch (e) {
      c = e;
    }
    if (!s) {
      (this.logger.error(`Failed to load native Sparkle addon`, { safe: {}, sensitive: { error: c } }),
        (this.lastUnavailableReason = `failed to load native sparkle addon`));
      return;
    }
    let l = s;
    try {
      (l.setLogSink((e, t) => {
        this.logger.log(
          this.decodeNativeLogLevel(e) ?? `info`,
          t,
          i != null && t === `Switching Sparkle to the fallback feed.`
            ? { safe: { updateFeed: `legacy` } }
            : void 0,
        );
      }),
        l.setInstallUpdatesRequestedSink(() => {
          this.options.onInstallUpdatesRequested?.({ quitImmediately: !1 });
        }),
        l.setUpdateCheckResultSink((e) => {
          let t = o;
          ((o = null), t?.(e));
        }),
        l.setDownloadProgressSink((e) => {
          this.setDownloadProgressPercent(e);
        }),
        l.setUpdateReadySink((e) => {
          this.setUpdateReady(e);
        }),
        l.setUpdateDownloadedSink((e, t) => {
          this.setUpdateDownloaded(e, t);
        }),
        l.setUpdateLifecycleStateSink((e) => {
          if (e === `install-aborted`) {
            this.options.onInstallUpdatesAborted?.();
            return;
          }
          this.setUpdateLifecycleState(e);
        }),
        l.setAutomaticBackgroundDownloadsEnabled(this.automaticBackgroundDownloadsEnabled),
        t || a === !1 || a === void 0 ? l.init(r) : i ? l.init(r, a, i) : l.init(r, a),
        n.i.isInternal(this.options.buildFlavor) &&
          this.logger.info(`Sparkle update feed selected`, {
            safe: { updateFeed: i == null ? `legacy` : `restricted` },
          }),
        (this.lastUnavailableReason = null));
    } catch (e) {
      (this.logger.error(`Failed to initialize Sparkle addon`, { safe: {}, sensitive: { error: e } }),
        (this.lastUnavailableReason = `failed to initialize sparkle addon`));
      return;
    }
    t && (this.productionSparkle = l);
    let u = async () => {
        if (i == null) return;
        let e = await this.getInternalUpdateCdnRequestHeaders(r);
        e && !(0, Be.default)(a, e) && (l.setCookieHeader(e.Cookie), (a = e));
      },
      d = async (e = !0) => {
        try {
          (e && i != null && (await u()),
            !this.isUpdateReady &&
              this.updateLifecycleState === `idle` &&
              this.setUpdateLifecycleState(`checking`),
            l.checkForUpdatesInBackground());
        } catch (e) {
          (this.isUpdateReady || this.setUpdateLifecycleState(`idle`),
            this.logger.error(`Failed to check for updates in background`, {
              safe: {},
              sensitive: { error: e },
            }));
        }
      };
    if (
      ((this.setAutomaticBackgroundDownloadsEnabledForMac = (e) => {
        (l.setAutomaticBackgroundDownloadsEnabled(e), e && !t && d());
      }),
      (this.updater = {
        checkForUpdateInformation: async () => (
          i != null && (await u()),
          new Promise((e, t) => {
            o = e;
            try {
              l.checkForUpdateInformation();
            } catch (e) {
              ((o = null), t(Error(`Sparkle could not start the update check.`, { cause: e })));
            }
          })
        ),
        checkForUpdates: async () => {
          (i != null && (await u()),
            !this.isUpdateReady &&
              this.updateLifecycleState === `idle` &&
              this.setUpdateLifecycleState(`checking`),
            l.checkForUpdates());
        },
        installUpdatesIfAvailable: async () => {
          (this.isUpdateReady && this.relaunchStaleMacExecutableIfNeeded()) ||
            (i != null && (await u()),
            this.isUpdateReady &&
              (this.logBackendAppcastUpdateEvent({
                action: `install_started`,
                checkType: null,
                result: null,
                targetBuildNumber: null,
              }),
              this.options.onInstallUpdatesRequested?.({ quitImmediately: !1 })),
            l.installLatestUpdate());
        },
      }),
      !t)
    ) {
      let e = An();
      (e > 0 && setInterval(() => void d(), e).unref(), d(!1));
    }
  }
  resolveMacSparkleFeedUrl() {
    return (
      (n.a(`codexSparkleFeedUrl`)?.trim() ?? ``) ||
      ((this.lastUnavailableReason = `missing packaged sparkle feed url`), null)
    );
  }
  resolveMacSparkleInternalCdnFeedUrl() {
    let e = n.a(`codexSparkleInternalCdnFeedUrl`)?.trim() ?? ``;
    if (!e) return null;
    try {
      if (new URL(e).protocol === `https:`) return e;
    } catch {}
    return (this.logger.warning(`Ignoring invalid internal update CDN feed URL`), null);
  }
  async getInternalUpdateCdnRequestHeaders(e) {
    if (!this.options.getInternalUpdateCdnRequestHeaders)
      return ((this.lastUnavailableReason = `sparkle update access is unavailable`), !1);
    let t;
    try {
      t = await this.options.getInternalUpdateCdnRequestHeaders(e);
    } catch (e) {
      return (
        this.logger.error(`Failed to authorize Sparkle update access`, { safe: {}, sensitive: { error: e } }),
        (this.lastUnavailableReason = `sparkle update access is unavailable`),
        !1
      );
    }
    return t || ((this.lastUnavailableReason = `sparkle update access was not authorized`), !1);
  }
  resolveWindowsUpdateUrl() {
    let e = n.a(`codexWindowsUpdateUrl`)?.trim() ?? ``;
    if (!e) return ((this.lastUnavailableReason = `missing packaged windows update url`), null);
    let t;
    try {
      t = new URL(e);
    } catch {
      return ((this.lastUnavailableReason = `invalid packaged windows update url`), null);
    }
    return t.protocol === `https:`
      ? t.toString()
      : ((this.lastUnavailableReason = `windows update url must use https transport`), null);
  }
  resolveBuildVersion() {
    return n.a(`codexBuildNumber`)?.trim() ?? y.app.getVersion();
  }
  resolveWindowsStoreBuildVersion() {
    let e = y.app.getVersion().trim();
    try {
      return a.ki(e);
    } catch (t) {
      return (
        this.logger.warning(
          `Failed to normalize Windows Store build version from app version; using raw app version.`,
          { safe: { appVersion: e }, sensitive: { error: t } },
        ),
        e
      );
    }
  }
  setUpdateReady(e) {
    (e
      ? this.setUpdateLifecycleState(`ready`)
      : (this.updateLifecycleState === `ready` || this.updateLifecycleState === `installing`) &&
        this.setUpdateLifecycleState(`idle`),
      this.isUpdateReady !== e &&
        ((this.isUpdateReady = e),
        e
          ? process.platform === `darwin`
            ? this.logBackendAppcastUpdateEvent({
                action: `check_completed`,
                checkType: null,
                result: `update_available`,
                targetBuildNumber: null,
              })
            : this.setUpdateDownloaded(!0)
          : (this.setUpdateDownloaded(!1), this.applyPendingSparkleQueryParams()),
        this.scheduleForcedUpdateInstall(),
        this.options.onUpdateReadyChanged?.(e)));
  }
  setUpdateDownloaded(e, t = null) {
    let n = e ? Mn(t) : null;
    if (
      (this.downloadedUpdateAppBrand !== n &&
        ((this.downloadedUpdateAppBrand = n), this.options.onDownloadedUpdateAppBrandChanged?.(n)),
      e)
    ) {
      if (this.updateDownloadedAtMs != null) return;
      ((this.updateDownloadedAtMs = Date.now()),
        this.logBackendAppcastUpdateEvent({
          action: `download_completed`,
          checkType: null,
          result: `succeeded`,
          targetBuildNumber: null,
        }));
    } else {
      if (this.updateDownloadedAtMs == null) return;
      ((this.updateDownloadedAtMs = null),
        (this.forcedUpdateInstallStarted = !1),
        (this.forcedUpdateRetryAtMs = null),
        this.applyPendingSparkleQueryParams());
    }
    this.scheduleForcedUpdateInstall();
  }
  observeRelaunchNotificationPolicy() {
    ((this.owlUpdatePolicies = nt()),
      this.owlUpdatePolicies &&
        (this.owlUpdatePolicies.on(`relaunch-notification-policy-changed`, () => {
          this.scheduleForcedUpdateInstall();
        }),
        this.scheduleForcedUpdateInstall()));
  }
  scheduleForcedUpdateInstall() {
    this.forcedUpdateTimer &&= (clearTimeout(this.forcedUpdateTimer), null);
    let e = this.getRelaunchNotificationPolicy();
    if (
      !this.isUpdateReady ||
      this.updateDownloadedAtMs == null ||
      e?.relaunchNotification !== 2 ||
      this.forcedUpdateInstallStarted
    ) {
      this.setRelaunchNotice(null);
      return;
    }
    let t = it(this.updateDownloadedAtMs, e),
      n = Math.ceil(Math.max(0, t - this.updateDownloadedAtMs) / On),
      r = this.updateDownloadedAtMs + n;
    (this.setRelaunchNotice(Date.now() < r ? null : t),
      this.scheduleForcedUpdateInstallAt(Math.max(t, this.forcedUpdateRetryAtMs ?? t), t, r));
  }
  scheduleForcedUpdateInstallAt(e, t, n) {
    let r = Date.now(),
      i = t - Dn,
      a = Math.max(0, (r < n ? Math.min(e, n) : r < i ? Math.min(e, i) : e) - r),
      o = Math.min(a, kn);
    ((this.forcedUpdateTimer = setTimeout(() => {
      this.forcedUpdateTimer = null;
      let r = Date.now();
      if (r < e) {
        (this.setRelaunchNotice(r < n ? null : t), this.scheduleForcedUpdateInstallAt(e, t, n));
        return;
      }
      this.installForcedUpdate();
    }, o)),
      this.forcedUpdateTimer.unref());
  }
  getRelaunchNotificationPolicy() {
    return this.owlUpdatePolicies ? rt(this.owlUpdatePolicies) : null;
  }
  async installForcedUpdate() {
    !this.forcedUpdateInstallStarted &&
      this.isUpdateReady &&
      ((this.forcedUpdateInstallStarted = !0),
      this.setRelaunchNotice(null),
      this.logger.info(`Installing update required by managed relaunch policy.`),
      !(await this.installUpdatesIfAvailable()) &&
        this.isUpdateReady &&
        ((this.forcedUpdateInstallStarted = !1),
        (this.forcedUpdateRetryAtMs = Date.now() + En),
        this.scheduleForcedUpdateInstall()));
  }
  setInstallProgressPercent(e) {
    (e == null
      ? this.updateLifecycleState === `installing` &&
        this.setUpdateLifecycleState(this.isUpdateReady ? `ready` : `idle`)
      : this.setUpdateLifecycleState(`installing`),
      this.installProgressPercent !== e &&
        ((this.installProgressPercent = e), this.options.onInstallProgressChanged?.(e)));
  }
  setDownloadProgressPercent(e) {
    let t = this.downloadProgressPercent;
    ((this.downloadProgressPercent = e),
      !(t === e || (t != null && e != null && Math.round(t) === Math.round(e))) &&
        this.options.onDownloadProgressChanged?.(e));
  }
  createRelaunchNotice(e) {
    let t = Date.now();
    return { deadlineAtMs: e, dismissable: e - t > Dn, reportedAtMs: t };
  }
  setRelaunchNotice(e) {
    if (e == null) {
      if (this.relaunchNotice == null) return;
      ((this.relaunchNotice = null), this.options.onRelaunchNoticeChanged?.(null));
      return;
    }
    let t = this.createRelaunchNotice(e);
    (this.relaunchNotice?.deadlineAtMs !== t.deadlineAtMs ||
      this.relaunchNotice.dismissable !== t.dismissable) &&
      ((this.relaunchNotice = t), this.options.onRelaunchNoticeChanged?.(t));
  }
  setUpdateLifecycleState(e) {
    this.updateLifecycleState !== e &&
      ((this.updateLifecycleState = e),
      e === `ready` && process.platform !== `darwin`
        ? this.setUpdateDownloaded(!0)
        : e === `idle` && !this.isUpdateReady && this.setUpdateDownloaded(!1),
      this.applyPendingSparkleQueryParams(),
      this.options.onUpdateLifecycleStateChanged?.(e));
  }
  applyPendingSparkleQueryParams() {
    this.pendingSparkleQueryParams != null &&
      this.canReconfigureProductionAppcast() &&
      this.applySparkleQueryParams();
  }
  readMacExecutableIdentity() {
    if (this.options.getMacExecutableIdentity) return this.options.getMacExecutableIdentity();
    try {
      let e = (0, h.statSync)(process.execPath, { throwIfNoEntry: !1 });
      return e?.isFile() ? { dev: e.dev, ino: e.ino } : null;
    } catch (e) {
      return (
        this.logger.warning(`Failed to read macOS app executable identity`, {
          safe: {},
          sensitive: { error: e },
        }),
        null
      );
    }
  }
  relaunchStaleMacExecutableIfNeeded() {
    let e = this.macExecutableIdentityAtLaunch;
    if (e == null) return !1;
    let t = this.readMacExecutableIdentity();
    return t == null || (t.dev === e.dev && t.ino === e.ino)
      ? !1
      : (this.logger.warning(
          `Relaunching before macOS update install because the app executable changed on disk.`,
          { safe: { currentIdentity: t, launchIdentity: e }, sensitive: {} },
        ),
        y.app.relaunch({ execPath: process.execPath }),
        this.options.onInstallUpdatesRequested
          ? this.options.onInstallUpdatesRequested({ quitImmediately: !0 })
          : y.app.quit(),
        !0);
  }
  logBackendAppcastUpdateEvent(e) {
    this.options.buildFlavor === n.i.Prod &&
      this.logger.info(`Production Sparkle update event`, {
        safe: {
          ...e,
          backendAppcastEnabled: this.productionSparkle != null,
          currentBuildNumber: n.a(`codexBuildNumber`)?.trim() ?? null,
        },
      });
  }
  decodeNativeLogLevel(e) {
    switch (e) {
      case 1:
        return `trace`;
      case 2:
        return `debug`;
      case 3:
        return `info`;
      case 4:
        return `warning`;
      case 5:
        return `error`;
      default:
        return null;
    }
  }
};
function Mn(e) {
  let t = e?.match(/^(ChatGPT|Codex)(?: \([^)]+\))?-darwin-/)?.[1];
  return i.ua(t?.toLowerCase()) ?? null;
}
function Nn(e, t) {
  return new URL(`releases/${encodeURIComponent(t)}/ChatGPT-${process.arch}.msix`, e).toString();
}
var Pn = /^dev-[a-z0-9-]+\.chatgpt-staging\.com$/;
function Fn(e) {
  try {
    let t = new URL(e);
    return t.protocol !== `https:` ||
      t.port !== `` ||
      t.username !== `` ||
      t.password !== `` ||
      (t.hostname !== `chatgpt-staging.com` && !Pn.test(t.hostname))
      ? null
      : t.origin;
  } catch {
    return null;
  }
}
function In(e, t) {
  if (
    e.protocol !== `https:` ||
    e.host !== `realtime.chatgpt-staging.com` ||
    e.pathname !== `/v1/cua` ||
    e.username !== `` ||
    e.password !== `` ||
    Fn(t) == null
  )
    return !1;
  let n = new URL(t).hostname.match(/^(dev-ephemeral-pr[0-9]+)\.chatgpt-staging\.com$/)?.[1],
    r = e.searchParams.getAll(`staging_env`);
  return n == null ? r.length === 0 : r.length === 1 && r[0] === n;
}
var Ln = new WeakSet();
function Rn(e) {
  (Ln.add(e), e.setWebsiteReportingEnabled(!1));
}
function zn(e) {
  let t = new WeakSet(),
    n = (n) => {
      t.has(n) ||
        (t.add(n),
        n.setWebsiteReportingEnabled(!1),
        e.then(
          (e) => n.setWebsiteReportingEnabled(e && !Ln.has(n)),
          () => {},
        ));
    };
  (y.app.on(`session-created`, n), y.app.whenReady().then(() => n(y.session.defaultSession)));
}
var Bn = class {
  devRendererOrigin;
  startupPolicy;
  state = { kind: `loading`, ready: a.wi() };
  generation = 0;
  disposed = !1;
  restrictions = new Map();
  preauthStatsigSessions = new Map();
  sessionsObserved = !1;
  onSessionCreated = (e) => this.applyToSession(e);
  constructor(e, t = null) {
    ((this.devRendererOrigin = e), (this.startupPolicy = t));
  }
  observeSessions() {
    this.sessionsObserved ||
      this.disposed ||
      ((this.sessionsObserved = !0),
      y.app.on(`session-created`, this.onSessionCreated),
      y.app.isReady()
        ? this.applyToSession(y.session.defaultSession)
        : y.app.whenReady().then(() => {
            this.disposed || this.applyToSession(y.session.defaultSession);
          }));
  }
  observeRequirements(e, t, n) {
    let r = () => {
        this.refreshRequirements(e.appServerVersion, () => e.getConfigRequirements(), n).catch(t);
      },
      i = e.registerInternalNotificationHandler((e) => {
        e.method === `account/updated` && r();
      }),
      a = e.registerInternalConnectionStateHandler((e) => {
        e === `connected` ? r() : this.invalidate();
      });
    return (
      e.getConnectionState() === `connected` && r(),
      () => {
        (i(), a(), (this.generation += 1));
      }
    );
  }
  async whenReady() {
    for (; this.state.kind === `loading`;) await this.state.ready.promise;
    if (this.state.kind === `failed`) throw this.state.error;
  }
  async refreshRequirements(e, t, n) {
    ((this.startupPolicy = null), this.invalidate());
    let r = this.generation,
      i = () => !this.disposed && r === this.generation;
    try {
      let r;
      try {
        r = await t(i);
      } catch (e) {
        if (!i()) return;
        if (n == null) throw e;
        if ((await n(e, i)) === `stop` || !i()) return;
        r = await t(i);
      }
      if (!i()) return;
      let a = c.i(e, r);
      if (a.kind === `restricted` && !c.a(a)) {
        this.dispose();
        return;
      }
      let o = this.state;
      ((this.state = { kind: `ready`, policy: a }), o.kind === `loading` && o.ready.resolve(void 0));
    } catch (e) {
      if (this.disposed || r !== this.generation) return;
      let t = e instanceof Error ? e : Error(`Application network requirements could not be loaded.`),
        n = this.state;
      throw ((this.state = { kind: `failed`, error: t }), n.kind === `loading` && n.ready.resolve(void 0), t);
    }
  }
  allows(e) {
    let t = URL.parse(typeof e == `string` ? e : e.href);
    return this.disposed || t == null
      ? !1
      : (this.devRendererOrigin != null &&
          (t.origin === this.devRendererOrigin ||
            t.origin === this.devRendererOrigin.replace(/^http/, `ws`))) ||
          c.r(this.state.kind === `ready` ? this.state.policy : null, t);
  }
  assertAllowed(e) {
    if (!this.allows(e)) throw Error(`Desktop network policy does not allow this destination`);
  }
  async fetch(e, t) {
    let n = typeof e == `string` || e instanceof URL ? e : e.url;
    this.assertAllowed(n);
    let r = e instanceof URL ? e.href : e;
    return y.net.fetch(r, t);
  }
  createPreauthStatsigTransport() {
    let e = new AbortController(),
      t,
      n = () => {
        e.signal.aborted || e.abort();
      };
    return {
      fetch: async (r, i) => {
        (e.signal.throwIfAborted(), i?.signal?.throwIfAborted());
        let a = new Headers(i?.headers);
        if (
          this.disposed ||
          !this.allowsPreauthStatsigRequest(r, i?.method ?? `GET`) ||
          a.has(`authorization`) ||
          a.has(`proxy-authorization`) ||
          a.has(`cookie`)
        )
          throw Error(`Pre-auth Statsig request is not allowed`);
        return (
          t ??
            ((t = y.session.fromPartition(`codex-preauth-statsig-${(0, f.randomUUID)()}`, { cache: !1 })),
            Rn(t),
            this.preauthStatsigSessions.set(t, { signal: e.signal, dispose: n }),
            this.applyToSession(t)),
          t.fetch(r, {
            ...i,
            credentials: `omit`,
            redirect: `error`,
            cache: `no-store`,
            referrerPolicy: `no-referrer`,
            signal: i?.signal == null ? e.signal : AbortSignal.any([e.signal, i.signal]),
          })
        );
      },
      dispose: n,
    };
  }
  request(e) {
    return (this.assertAllowed(e.url), y.net.request(e));
  }
  addSessionRestriction(e, t) {
    this.applyToSession(e);
    let n = this.restrictions.get(e);
    return (
      n?.add(t),
      () => {
        n?.delete(t);
      }
    );
  }
  dispose() {
    if (this.disposed) return;
    (this.invalidate(), (this.disposed = !0));
    for (let e of this.preauthStatsigSessions.values()) e.dispose();
    let e = this.state;
    ((this.state = { kind: `failed`, error: Error(`Application network disposed`) }),
      e.kind === `loading` && e.ready.resolve(void 0),
      y.app.removeListener(`session-created`, this.onSessionCreated));
    for (let e of this.restrictions.keys()) e.webRequest.onBeforeRequest((e, t) => t({ cancel: !0 }));
    (this.restrictions.clear(), this.preauthStatsigSessions.clear());
  }
  invalidate() {
    ((this.generation += 1),
      !this.disposed && this.state.kind !== `loading` && (this.state = { kind: `loading`, ready: a.wi() }));
  }
  allowsPreauthStatsigRequest(e, t) {
    if (this.state.kind === `failed` || !Vn(e, t)) return !1;
    let n = this.state.kind === `ready` ? this.state.policy : this.startupPolicy;
    return c.r(n, e);
  }
  applyToSession(e) {
    if (this.restrictions.has(e) || this.disposed) return;
    let t = new Set();
    (this.restrictions.set(e, t),
      e.webRequest.onBeforeRequest((n, r) => {
        let i = this.preauthStatsigSessions.get(e);
        if (i != null) {
          r({
            cancel: this.disposed || i.signal.aborted || !this.allowsPreauthStatsigRequest(n.url, n.method),
          });
          return;
        }
        if (!this.allows(n.url)) {
          r({ cancel: !0 });
          return;
        }
        let a;
        for (let e of t) {
          let t = e(n);
          if (t.cancel || (t.redirectURL != null && !this.allows(t.redirectURL))) {
            r({ cancel: !0 });
            return;
          }
          a = t.redirectURL ?? a;
        }
        r({ cancel: !1, redirectURL: a });
      }));
  }
};
function Vn(e, t) {
  let n = URL.parse(e);
  return (
    t === `POST` &&
    n?.origin === `https://ab.chatgpt.com` &&
    n.pathname === `/v1/initialize` &&
    n.username === `` &&
    n.password === `` &&
    n.hash === ``
  );
}
var Hn = void 0,
  Un = l.a(`codex-build-number`);
function Wn() {
  return (
    process.env.CODEX_BUILD_NUMBER?.trim() ||
    (y.app.isPackaged
      ? n.a(`codexBuildNumber`) || (Un().error(`CodexBuildNumber missing from package metadata.`), null)
      : null)
  );
}
var Gn = {
    get value() {
      return (Hn === void 0 && (Hn = Wn()), Hn);
    },
  },
  Kn = `production-appcast-bootstrap.json`,
  qn = r.O({ backendAppcastEnabled: r._().optional(), installationId: r.z().optional() }),
  Jn = class {
    logger = l.a(`production-appcast-state`);
    filePath;
    state;
    constructor(e) {
      ((this.filePath = (0, g.join)(e, Kn)), (this.state = this.readState()));
    }
    get backendAppcastEnabled() {
      return this.state.backendAppcastEnabled === !0;
    }
    getOrCreateInstallationId() {
      return this.state.installationId == null
        ? ((this.state.installationId = (0, f.randomUUID)()), this.persistState(), this.state.installationId)
        : this.state.installationId;
    }
    setBackendAppcastEnabled(e) {
      ((this.state.backendAppcastEnabled = e), this.persistState());
    }
    readState() {
      if (!(0, h.existsSync)(this.filePath)) return {};
      try {
        return qn.parse(JSON.parse((0, h.readFileSync)(this.filePath, `utf8`)));
      } catch (e) {
        return (
          this.logger().warning(`Failed to read production appcast state`, {
            safe: {},
            sensitive: { error: e },
          }),
          {}
        );
      }
    }
    persistState() {
      (0, h.mkdirSync)((0, g.dirname)(this.filePath), { recursive: !0 });
      let e = `${this.filePath}.${(0, f.randomUUID)()}.tmp`;
      try {
        ((0, h.writeFileSync)(e, JSON.stringify(this.state), `utf8`), (0, h.renameSync)(e, this.filePath));
      } catch (t) {
        throw ((0, h.rmSync)(e, { force: !0 }), t);
      }
    }
  },
  Yn = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e._globalThis = void 0),
      (e._globalThis = typeof globalThis == `object` ? globalThis : global));
  }),
  Xn = e.t((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              (r === void 0 && (r = n),
                Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__exportStar) ||
        function (e, n) {
          for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }), n(Yn(), e));
  }),
  Zn = e.t((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              (r === void 0 && (r = n),
                Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__exportStar) ||
        function (e, n) {
          for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }), n(Xn(), e));
  }),
  Qn = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.VERSION = void 0), (e.VERSION = `1.9.0`));
  }),
  $n = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.isCompatible = e._makeCompatibilityCheck = void 0));
    var t = Qn(),
      n = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
    function r(e) {
      let t = new Set([e]),
        r = new Set(),
        i = e.match(n);
      if (!i) return () => !1;
      let a = { major: +i[1], minor: +i[2], patch: +i[3], prerelease: i[4] };
      if (a.prerelease != null)
        return function (t) {
          return t === e;
        };
      function o(e) {
        return (r.add(e), !1);
      }
      function s(e) {
        return (t.add(e), !0);
      }
      return function (e) {
        if (t.has(e)) return !0;
        if (r.has(e)) return !1;
        let i = e.match(n);
        if (!i) return o(e);
        let c = { major: +i[1], minor: +i[2], patch: +i[3], prerelease: i[4] };
        return c.prerelease != null || a.major !== c.major
          ? o(e)
          : a.major === 0
            ? a.minor === c.minor && a.patch <= c.patch
              ? s(e)
              : o(e)
            : a.minor <= c.minor
              ? s(e)
              : o(e);
      };
    }
    ((e._makeCompatibilityCheck = r), (e.isCompatible = r(t.VERSION)));
  }),
  er = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.unregisterGlobal = e.getGlobal = e.registerGlobal = void 0));
    var t = Zn(),
      n = Qn(),
      r = $n(),
      i = n.VERSION.split(`.`)[0],
      a = Symbol.for(`opentelemetry.js.api.${i}`),
      o = t._globalThis;
    function s(e, t, r, i = !1) {
      let s = (o[a] = o[a] ?? { version: n.VERSION });
      if (!i && s[e]) {
        let t = Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
        return (r.error(t.stack || t.message), !1);
      }
      if (s.version !== n.VERSION) {
        let t = Error(
          `@opentelemetry/api: Registration of version v${s.version} for ${e} does not match previously registered API v${n.VERSION}`,
        );
        return (r.error(t.stack || t.message), !1);
      }
      return ((s[e] = t), r.debug(`@opentelemetry/api: Registered a global for ${e} v${n.VERSION}.`), !0);
    }
    e.registerGlobal = s;
    function c(e) {
      let t = o[a]?.version;
      if (t && (0, r.isCompatible)(t)) return o[a]?.[e];
    }
    e.getGlobal = c;
    function l(e, t) {
      t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${n.VERSION}.`);
      let r = o[a];
      r && delete r[e];
    }
    e.unregisterGlobal = l;
  }),
  tr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.DiagComponentLogger = void 0));
    var t = er();
    e.DiagComponentLogger = class {
      constructor(e) {
        this._namespace = e.namespace || `DiagComponentLogger`;
      }
      debug(...e) {
        return n(`debug`, this._namespace, e);
      }
      error(...e) {
        return n(`error`, this._namespace, e);
      }
      info(...e) {
        return n(`info`, this._namespace, e);
      }
      warn(...e) {
        return n(`warn`, this._namespace, e);
      }
      verbose(...e) {
        return n(`verbose`, this._namespace, e);
      }
    };
    function n(e, n, r) {
      let i = (0, t.getGlobal)(`diag`);
      if (i) return (r.unshift(n), i[e](...r));
    }
  }),
  nr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.DiagLogLevel = void 0),
      (function (e) {
        ((e[(e.NONE = 0)] = `NONE`),
          (e[(e.ERROR = 30)] = `ERROR`),
          (e[(e.WARN = 50)] = `WARN`),
          (e[(e.INFO = 60)] = `INFO`),
          (e[(e.DEBUG = 70)] = `DEBUG`),
          (e[(e.VERBOSE = 80)] = `VERBOSE`),
          (e[(e.ALL = 9999)] = `ALL`));
      })((e.DiagLogLevel ||= {})));
  }),
  rr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.createLogLevelDiagLogger = void 0));
    var t = nr();
    function n(e, n) {
      (e < t.DiagLogLevel.NONE
        ? (e = t.DiagLogLevel.NONE)
        : e > t.DiagLogLevel.ALL && (e = t.DiagLogLevel.ALL),
        (n ||= {}));
      function r(t, r) {
        let i = n[t];
        return typeof i == `function` && e >= r ? i.bind(n) : function () {};
      }
      return {
        error: r(`error`, t.DiagLogLevel.ERROR),
        warn: r(`warn`, t.DiagLogLevel.WARN),
        info: r(`info`, t.DiagLogLevel.INFO),
        debug: r(`debug`, t.DiagLogLevel.DEBUG),
        verbose: r(`verbose`, t.DiagLogLevel.VERBOSE),
      };
    }
    e.createLogLevelDiagLogger = n;
  }),
  ir = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.DiagAPI = void 0));
    var t = tr(),
      n = rr(),
      r = nr(),
      i = er(),
      a = `diag`;
    e.DiagAPI = class e {
      constructor() {
        function e(e) {
          return function (...t) {
            let n = (0, i.getGlobal)(`diag`);
            if (n) return n[e](...t);
          };
        }
        let o = this;
        ((o.setLogger = (e, t = { logLevel: r.DiagLogLevel.INFO }) => {
          if (e === o) {
            let e = Error(
              `Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation`,
            );
            return (o.error(e.stack ?? e.message), !1);
          }
          typeof t == `number` && (t = { logLevel: t });
          let a = (0, i.getGlobal)(`diag`),
            s = (0, n.createLogLevelDiagLogger)(t.logLevel ?? r.DiagLogLevel.INFO, e);
          if (a && !t.suppressOverrideMessage) {
            let e = Error().stack ?? `<failed to generate stacktrace>`;
            (a.warn(`Current logger will be overwritten from ${e}`),
              s.warn(`Current logger will overwrite one already registered from ${e}`));
          }
          return (0, i.registerGlobal)(`diag`, s, o, !0);
        }),
          (o.disable = () => {
            (0, i.unregisterGlobal)(a, o);
          }),
          (o.createComponentLogger = (e) => new t.DiagComponentLogger(e)),
          (o.verbose = e(`verbose`)),
          (o.debug = e(`debug`)),
          (o.info = e(`info`)),
          (o.warn = e(`warn`)),
          (o.error = e(`error`)));
      }
      static instance() {
        return ((this._instance ||= new e()), this._instance);
      }
    };
  }),
  ar = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.BaggageImpl = void 0),
      (e.BaggageImpl = class e {
        constructor(e) {
          this._entries = e ? new Map(e) : new Map();
        }
        getEntry(e) {
          let t = this._entries.get(e);
          if (t) return Object.assign({}, t);
        }
        getAllEntries() {
          return Array.from(this._entries.entries()).map(([e, t]) => [e, t]);
        }
        setEntry(t, n) {
          let r = new e(this._entries);
          return (r._entries.set(t, n), r);
        }
        removeEntry(t) {
          let n = new e(this._entries);
          return (n._entries.delete(t), n);
        }
        removeEntries(...t) {
          let n = new e(this._entries);
          for (let e of t) n._entries.delete(e);
          return n;
        }
        clear() {
          return new e();
        }
      }));
  }),
  or = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.baggageEntryMetadataSymbol = void 0),
      (e.baggageEntryMetadataSymbol = Symbol(`BaggageEntryMetadata`)));
  }),
  sr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.baggageEntryMetadataFromString = e.createBaggage = void 0));
    var t = ir(),
      n = ar(),
      r = or(),
      i = t.DiagAPI.instance();
    function a(e = {}) {
      return new n.BaggageImpl(new Map(Object.entries(e)));
    }
    e.createBaggage = a;
    function o(e) {
      return (
        typeof e != `string` &&
          (i.error(`Cannot create baggage metadata from unknown type: ${typeof e}`), (e = ``)),
        {
          __TYPE__: r.baggageEntryMetadataSymbol,
          toString() {
            return e;
          },
        }
      );
    }
    e.baggageEntryMetadataFromString = o;
  }),
  cr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ROOT_CONTEXT = e.createContextKey = void 0));
    function t(e) {
      return Symbol.for(e);
    }
    ((e.createContextKey = t),
      (e.ROOT_CONTEXT = new (class e {
        constructor(t) {
          let n = this;
          ((n._currentContext = t ? new Map(t) : new Map()),
            (n.getValue = (e) => n._currentContext.get(e)),
            (n.setValue = (t, r) => {
              let i = new e(n._currentContext);
              return (i._currentContext.set(t, r), i);
            }),
            (n.deleteValue = (t) => {
              let r = new e(n._currentContext);
              return (r._currentContext.delete(t), r);
            }));
        }
      })()));
  }),
  lr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.DiagConsoleLogger = void 0));
    var t = [
      { n: `error`, c: `error` },
      { n: `warn`, c: `warn` },
      { n: `info`, c: `info` },
      { n: `debug`, c: `debug` },
      { n: `verbose`, c: `trace` },
    ];
    e.DiagConsoleLogger = class {
      constructor() {
        function e(e) {
          return function (...t) {
            if (console) {
              let n = console[e];
              if ((typeof n != `function` && (n = console.log), typeof n == `function`))
                return n.apply(console, t);
            }
          };
        }
        for (let n = 0; n < t.length; n++) this[t[n].n] = e(t[n].c);
      }
    };
  }),
  ur = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.createNoopMeter =
        e.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC =
        e.NOOP_OBSERVABLE_GAUGE_METRIC =
        e.NOOP_OBSERVABLE_COUNTER_METRIC =
        e.NOOP_UP_DOWN_COUNTER_METRIC =
        e.NOOP_HISTOGRAM_METRIC =
        e.NOOP_GAUGE_METRIC =
        e.NOOP_COUNTER_METRIC =
        e.NOOP_METER =
        e.NoopObservableUpDownCounterMetric =
        e.NoopObservableGaugeMetric =
        e.NoopObservableCounterMetric =
        e.NoopObservableMetric =
        e.NoopHistogramMetric =
        e.NoopGaugeMetric =
        e.NoopUpDownCounterMetric =
        e.NoopCounterMetric =
        e.NoopMetric =
        e.NoopMeter =
          void 0));
    var t = class {
      constructor() {}
      createGauge(t, n) {
        return e.NOOP_GAUGE_METRIC;
      }
      createHistogram(t, n) {
        return e.NOOP_HISTOGRAM_METRIC;
      }
      createCounter(t, n) {
        return e.NOOP_COUNTER_METRIC;
      }
      createUpDownCounter(t, n) {
        return e.NOOP_UP_DOWN_COUNTER_METRIC;
      }
      createObservableGauge(t, n) {
        return e.NOOP_OBSERVABLE_GAUGE_METRIC;
      }
      createObservableCounter(t, n) {
        return e.NOOP_OBSERVABLE_COUNTER_METRIC;
      }
      createObservableUpDownCounter(t, n) {
        return e.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
      }
      addBatchObservableCallback(e, t) {}
      removeBatchObservableCallback(e) {}
    };
    e.NoopMeter = t;
    var n = class {};
    e.NoopMetric = n;
    var r = class extends n {
      add(e, t) {}
    };
    e.NoopCounterMetric = r;
    var i = class extends n {
      add(e, t) {}
    };
    e.NoopUpDownCounterMetric = i;
    var a = class extends n {
      record(e, t) {}
    };
    e.NoopGaugeMetric = a;
    var o = class extends n {
      record(e, t) {}
    };
    e.NoopHistogramMetric = o;
    var s = class {
      addCallback(e) {}
      removeCallback(e) {}
    };
    e.NoopObservableMetric = s;
    var c = class extends s {};
    e.NoopObservableCounterMetric = c;
    var l = class extends s {};
    e.NoopObservableGaugeMetric = l;
    var u = class extends s {};
    ((e.NoopObservableUpDownCounterMetric = u),
      (e.NOOP_METER = new t()),
      (e.NOOP_COUNTER_METRIC = new r()),
      (e.NOOP_GAUGE_METRIC = new a()),
      (e.NOOP_HISTOGRAM_METRIC = new o()),
      (e.NOOP_UP_DOWN_COUNTER_METRIC = new i()),
      (e.NOOP_OBSERVABLE_COUNTER_METRIC = new c()),
      (e.NOOP_OBSERVABLE_GAUGE_METRIC = new l()),
      (e.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new u()));
    function d() {
      return e.NOOP_METER;
    }
    e.createNoopMeter = d;
  }),
  dr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ValueType = void 0),
      (function (e) {
        ((e[(e.INT = 0)] = `INT`), (e[(e.DOUBLE = 1)] = `DOUBLE`));
      })((e.ValueType ||= {})));
  }),
  fr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.defaultTextMapSetter = e.defaultTextMapGetter = void 0),
      (e.defaultTextMapGetter = {
        get(e, t) {
          if (e != null) return e[t];
        },
        keys(e) {
          return e == null ? [] : Object.keys(e);
        },
      }),
      (e.defaultTextMapSetter = {
        set(e, t, n) {
          e != null && (e[t] = n);
        },
      }));
  }),
  pr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.NoopContextManager = void 0));
    var t = cr();
    e.NoopContextManager = class {
      active() {
        return t.ROOT_CONTEXT;
      }
      with(e, t, n, ...r) {
        return t.call(n, ...r);
      }
      bind(e, t) {
        return t;
      }
      enable() {
        return this;
      }
      disable() {
        return this;
      }
    };
  }),
  mr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ContextAPI = void 0));
    var t = pr(),
      n = er(),
      r = ir(),
      i = `context`,
      a = new t.NoopContextManager();
    e.ContextAPI = class e {
      constructor() {}
      static getInstance() {
        return ((this._instance ||= new e()), this._instance);
      }
      setGlobalContextManager(e) {
        return (0, n.registerGlobal)(i, e, r.DiagAPI.instance());
      }
      active() {
        return this._getContextManager().active();
      }
      with(e, t, n, ...r) {
        return this._getContextManager().with(e, t, n, ...r);
      }
      bind(e, t) {
        return this._getContextManager().bind(e, t);
      }
      _getContextManager() {
        return (0, n.getGlobal)(i) || a;
      }
      disable() {
        (this._getContextManager().disable(), (0, n.unregisterGlobal)(i, r.DiagAPI.instance()));
      }
    };
  }),
  hr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.TraceFlags = void 0),
      (function (e) {
        ((e[(e.NONE = 0)] = `NONE`), (e[(e.SAMPLED = 1)] = `SAMPLED`));
      })((e.TraceFlags ||= {})));
  }),
  gr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = void 0));
    var t = hr();
    ((e.INVALID_SPANID = `0000000000000000`),
      (e.INVALID_TRACEID = `00000000000000000000000000000000`),
      (e.INVALID_SPAN_CONTEXT = {
        traceId: e.INVALID_TRACEID,
        spanId: e.INVALID_SPANID,
        traceFlags: t.TraceFlags.NONE,
      }));
  }),
  _r = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.NonRecordingSpan = void 0));
    var t = gr();
    e.NonRecordingSpan = class {
      constructor(e = t.INVALID_SPAN_CONTEXT) {
        this._spanContext = e;
      }
      spanContext() {
        return this._spanContext;
      }
      setAttribute(e, t) {
        return this;
      }
      setAttributes(e) {
        return this;
      }
      addEvent(e, t) {
        return this;
      }
      addLink(e) {
        return this;
      }
      addLinks(e) {
        return this;
      }
      setStatus(e) {
        return this;
      }
      updateName(e) {
        return this;
      }
      end(e) {}
      isRecording() {
        return !1;
      }
      recordException(e, t) {}
    };
  }),
  vr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getSpanContext =
        e.setSpanContext =
        e.deleteSpan =
        e.setSpan =
        e.getActiveSpan =
        e.getSpan =
          void 0));
    var t = cr(),
      n = _r(),
      r = mr(),
      i = (0, t.createContextKey)(`OpenTelemetry Context Key SPAN`);
    function a(e) {
      return e.getValue(i) || void 0;
    }
    e.getSpan = a;
    function o() {
      return a(r.ContextAPI.getInstance().active());
    }
    e.getActiveSpan = o;
    function s(e, t) {
      return e.setValue(i, t);
    }
    e.setSpan = s;
    function c(e) {
      return e.deleteValue(i);
    }
    e.deleteSpan = c;
    function l(e, t) {
      return s(e, new n.NonRecordingSpan(t));
    }
    e.setSpanContext = l;
    function u(e) {
      return a(e)?.spanContext();
    }
    e.getSpanContext = u;
  }),
  yr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.wrapSpanContext = e.isSpanContextValid = e.isValidSpanId = e.isValidTraceId = void 0));
    var t = gr(),
      n = _r(),
      r = /^([0-9a-f]{32})$/i,
      i = /^[0-9a-f]{16}$/i;
    function a(e) {
      return r.test(e) && e !== t.INVALID_TRACEID;
    }
    e.isValidTraceId = a;
    function o(e) {
      return i.test(e) && e !== t.INVALID_SPANID;
    }
    e.isValidSpanId = o;
    function s(e) {
      return a(e.traceId) && o(e.spanId);
    }
    e.isSpanContextValid = s;
    function c(e) {
      return new n.NonRecordingSpan(e);
    }
    e.wrapSpanContext = c;
  }),
  br = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.NoopTracer = void 0));
    var t = mr(),
      n = vr(),
      r = _r(),
      i = yr(),
      a = t.ContextAPI.getInstance();
    e.NoopTracer = class {
      startSpan(e, t, s = a.active()) {
        if (t?.root) return new r.NonRecordingSpan();
        let c = s && (0, n.getSpanContext)(s);
        return o(c) && (0, i.isSpanContextValid)(c) ? new r.NonRecordingSpan(c) : new r.NonRecordingSpan();
      }
      startActiveSpan(e, t, r, i) {
        let o, s, c;
        if (arguments.length < 2) return;
        arguments.length === 2
          ? (c = t)
          : arguments.length === 3
            ? ((o = t), (c = r))
            : ((o = t), (s = r), (c = i));
        let l = s ?? a.active(),
          u = this.startSpan(e, o, l),
          d = (0, n.setSpan)(l, u);
        return a.with(d, c, void 0, u);
      }
    };
    function o(e) {
      return (
        typeof e == `object` &&
        typeof e.spanId == `string` &&
        typeof e.traceId == `string` &&
        typeof e.traceFlags == `number`
      );
    }
  }),
  xr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ProxyTracer = void 0));
    var t = new (br().NoopTracer)();
    e.ProxyTracer = class {
      constructor(e, t, n, r) {
        ((this._provider = e), (this.name = t), (this.version = n), (this.options = r));
      }
      startSpan(e, t, n) {
        return this._getTracer().startSpan(e, t, n);
      }
      startActiveSpan(e, t, n, r) {
        let i = this._getTracer();
        return Reflect.apply(i.startActiveSpan, i, arguments);
      }
      _getTracer() {
        if (this._delegate) return this._delegate;
        let e = this._provider.getDelegateTracer(this.name, this.version, this.options);
        return e ? ((this._delegate = e), this._delegate) : t;
      }
    };
  }),
  Sr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.NoopTracerProvider = void 0));
    var t = br();
    e.NoopTracerProvider = class {
      getTracer(e, n, r) {
        return new t.NoopTracer();
      }
    };
  }),
  Cr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ProxyTracerProvider = void 0));
    var t = xr(),
      n = new (Sr().NoopTracerProvider)();
    e.ProxyTracerProvider = class {
      getTracer(e, n, r) {
        return this.getDelegateTracer(e, n, r) ?? new t.ProxyTracer(this, e, n, r);
      }
      getDelegate() {
        return this._delegate ?? n;
      }
      setDelegate(e) {
        this._delegate = e;
      }
      getDelegateTracer(e, t, n) {
        return this._delegate?.getTracer(e, t, n);
      }
    };
  }),
  wr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SamplingDecision = void 0),
      (function (e) {
        ((e[(e.NOT_RECORD = 0)] = `NOT_RECORD`),
          (e[(e.RECORD = 1)] = `RECORD`),
          (e[(e.RECORD_AND_SAMPLED = 2)] = `RECORD_AND_SAMPLED`));
      })((e.SamplingDecision ||= {})));
  }),
  Tr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SpanKind = void 0),
      (function (e) {
        ((e[(e.INTERNAL = 0)] = `INTERNAL`),
          (e[(e.SERVER = 1)] = `SERVER`),
          (e[(e.CLIENT = 2)] = `CLIENT`),
          (e[(e.PRODUCER = 3)] = `PRODUCER`),
          (e[(e.CONSUMER = 4)] = `CONSUMER`));
      })((e.SpanKind ||= {})));
  }),
  Er = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SpanStatusCode = void 0),
      (function (e) {
        ((e[(e.UNSET = 0)] = `UNSET`), (e[(e.OK = 1)] = `OK`), (e[(e.ERROR = 2)] = `ERROR`));
      })((e.SpanStatusCode ||= {})));
  }),
  Dr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.validateValue = e.validateKey = void 0));
    var t = `[_0-9a-z-*/]`,
      n = RegExp(`^(?:${`[a-z]${t}{0,255}`}|${`[a-z0-9]${t}{0,240}@[a-z]${t}{0,13}`})$`),
      r = /^[ -~]{0,255}[!-~]$/,
      i = /,|=/;
    function a(e) {
      return n.test(e);
    }
    e.validateKey = a;
    function o(e) {
      return r.test(e) && !i.test(e);
    }
    e.validateValue = o;
  }),
  Or = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.TraceStateImpl = void 0));
    var t = Dr(),
      n = 32,
      r = 512,
      i = `,`,
      a = `=`;
    e.TraceStateImpl = class e {
      constructor(e) {
        ((this._internalState = new Map()), e && this._parse(e));
      }
      set(e, t) {
        let n = this._clone();
        return (n._internalState.has(e) && n._internalState.delete(e), n._internalState.set(e, t), n);
      }
      unset(e) {
        let t = this._clone();
        return (t._internalState.delete(e), t);
      }
      get(e) {
        return this._internalState.get(e);
      }
      serialize() {
        return this._keys()
          .reduce((e, t) => (e.push(t + a + this.get(t)), e), [])
          .join(i);
      }
      _parse(e) {
        e.length > r ||
          ((this._internalState = e
            .split(i)
            .reverse()
            .reduce((e, n) => {
              let r = n.trim(),
                i = r.indexOf(a);
              if (i !== -1) {
                let a = r.slice(0, i),
                  o = r.slice(i + 1, n.length);
                (0, t.validateKey)(a) && (0, t.validateValue)(o) && e.set(a, o);
              }
              return e;
            }, new Map())),
          this._internalState.size > n &&
            (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, n))));
      }
      _keys() {
        return Array.from(this._internalState.keys()).reverse();
      }
      _clone() {
        let t = new e();
        return ((t._internalState = new Map(this._internalState)), t);
      }
    };
  }),
  kr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.createTraceState = void 0));
    var t = Or();
    function n(e) {
      return new t.TraceStateImpl(e);
    }
    e.createTraceState = n;
  }),
  Ar = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.context = void 0),
      (e.context = mr().ContextAPI.getInstance()));
  }),
  jr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.diag = void 0),
      (e.diag = ir().DiagAPI.instance()));
  }),
  Mr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.NOOP_METER_PROVIDER = e.NoopMeterProvider = void 0));
    var t = ur(),
      n = class {
        getMeter(e, n, r) {
          return t.NOOP_METER;
        }
      };
    ((e.NoopMeterProvider = n), (e.NOOP_METER_PROVIDER = new n()));
  }),
  Nr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.MetricsAPI = void 0));
    var t = Mr(),
      n = er(),
      r = ir(),
      i = `metrics`;
    e.MetricsAPI = class e {
      constructor() {}
      static getInstance() {
        return ((this._instance ||= new e()), this._instance);
      }
      setGlobalMeterProvider(e) {
        return (0, n.registerGlobal)(i, e, r.DiagAPI.instance());
      }
      getMeterProvider() {
        return (0, n.getGlobal)(i) || t.NOOP_METER_PROVIDER;
      }
      getMeter(e, t, n) {
        return this.getMeterProvider().getMeter(e, t, n);
      }
      disable() {
        (0, n.unregisterGlobal)(i, r.DiagAPI.instance());
      }
    };
  }),
  Pr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.metrics = void 0),
      (e.metrics = Nr().MetricsAPI.getInstance()));
  }),
  Fr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.NoopTextMapPropagator = void 0),
      (e.NoopTextMapPropagator = class {
        inject(e, t) {}
        extract(e, t) {
          return e;
        }
        fields() {
          return [];
        }
      }));
  }),
  Ir = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.deleteBaggage = e.setBaggage = e.getActiveBaggage = e.getBaggage = void 0));
    var t = mr(),
      n = (0, cr().createContextKey)(`OpenTelemetry Baggage Key`);
    function r(e) {
      return e.getValue(n) || void 0;
    }
    e.getBaggage = r;
    function i() {
      return r(t.ContextAPI.getInstance().active());
    }
    e.getActiveBaggage = i;
    function a(e, t) {
      return e.setValue(n, t);
    }
    e.setBaggage = a;
    function o(e) {
      return e.deleteValue(n);
    }
    e.deleteBaggage = o;
  }),
  Lr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.PropagationAPI = void 0));
    var t = er(),
      n = Fr(),
      r = fr(),
      i = Ir(),
      a = sr(),
      o = ir(),
      s = `propagation`,
      c = new n.NoopTextMapPropagator();
    e.PropagationAPI = class e {
      constructor() {
        ((this.createBaggage = a.createBaggage),
          (this.getBaggage = i.getBaggage),
          (this.getActiveBaggage = i.getActiveBaggage),
          (this.setBaggage = i.setBaggage),
          (this.deleteBaggage = i.deleteBaggage));
      }
      static getInstance() {
        return ((this._instance ||= new e()), this._instance);
      }
      setGlobalPropagator(e) {
        return (0, t.registerGlobal)(s, e, o.DiagAPI.instance());
      }
      inject(e, t, n = r.defaultTextMapSetter) {
        return this._getGlobalPropagator().inject(e, t, n);
      }
      extract(e, t, n = r.defaultTextMapGetter) {
        return this._getGlobalPropagator().extract(e, t, n);
      }
      fields() {
        return this._getGlobalPropagator().fields();
      }
      disable() {
        (0, t.unregisterGlobal)(s, o.DiagAPI.instance());
      }
      _getGlobalPropagator() {
        return (0, t.getGlobal)(s) || c;
      }
    };
  }),
  Rr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.propagation = void 0),
      (e.propagation = Lr().PropagationAPI.getInstance()));
  }),
  zr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.TraceAPI = void 0));
    var t = er(),
      n = Cr(),
      r = yr(),
      i = vr(),
      a = ir(),
      o = `trace`;
    e.TraceAPI = class e {
      constructor() {
        ((this._proxyTracerProvider = new n.ProxyTracerProvider()),
          (this.wrapSpanContext = r.wrapSpanContext),
          (this.isSpanContextValid = r.isSpanContextValid),
          (this.deleteSpan = i.deleteSpan),
          (this.getSpan = i.getSpan),
          (this.getActiveSpan = i.getActiveSpan),
          (this.getSpanContext = i.getSpanContext),
          (this.setSpan = i.setSpan),
          (this.setSpanContext = i.setSpanContext));
      }
      static getInstance() {
        return ((this._instance ||= new e()), this._instance);
      }
      setGlobalTracerProvider(e) {
        let n = (0, t.registerGlobal)(o, this._proxyTracerProvider, a.DiagAPI.instance());
        return (n && this._proxyTracerProvider.setDelegate(e), n);
      }
      getTracerProvider() {
        return (0, t.getGlobal)(o) || this._proxyTracerProvider;
      }
      getTracer(e, t) {
        return this.getTracerProvider().getTracer(e, t);
      }
      disable() {
        ((0, t.unregisterGlobal)(o, a.DiagAPI.instance()),
          (this._proxyTracerProvider = new n.ProxyTracerProvider()));
      }
    };
  }),
  Br = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.trace = void 0),
      (e.trace = zr().TraceAPI.getInstance()));
  }),
  F = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.trace =
        e.propagation =
        e.metrics =
        e.diag =
        e.context =
        e.INVALID_SPAN_CONTEXT =
        e.INVALID_TRACEID =
        e.INVALID_SPANID =
        e.isValidSpanId =
        e.isValidTraceId =
        e.isSpanContextValid =
        e.createTraceState =
        e.TraceFlags =
        e.SpanStatusCode =
        e.SpanKind =
        e.SamplingDecision =
        e.ProxyTracerProvider =
        e.ProxyTracer =
        e.defaultTextMapSetter =
        e.defaultTextMapGetter =
        e.ValueType =
        e.createNoopMeter =
        e.DiagLogLevel =
        e.DiagConsoleLogger =
        e.ROOT_CONTEXT =
        e.createContextKey =
        e.baggageEntryMetadataFromString =
          void 0));
    var t = sr();
    Object.defineProperty(e, "baggageEntryMetadataFromString", {
      enumerable: !0,
      get: function () {
        return t.baggageEntryMetadataFromString;
      },
    });
    var n = cr();
    (Object.defineProperty(e, "createContextKey", {
      enumerable: !0,
      get: function () {
        return n.createContextKey;
      },
    }),
      Object.defineProperty(e, "ROOT_CONTEXT", {
        enumerable: !0,
        get: function () {
          return n.ROOT_CONTEXT;
        },
      }));
    var r = lr();
    Object.defineProperty(e, "DiagConsoleLogger", {
      enumerable: !0,
      get: function () {
        return r.DiagConsoleLogger;
      },
    });
    var i = nr();
    Object.defineProperty(e, "DiagLogLevel", {
      enumerable: !0,
      get: function () {
        return i.DiagLogLevel;
      },
    });
    var a = ur();
    Object.defineProperty(e, "createNoopMeter", {
      enumerable: !0,
      get: function () {
        return a.createNoopMeter;
      },
    });
    var o = dr();
    Object.defineProperty(e, "ValueType", {
      enumerable: !0,
      get: function () {
        return o.ValueType;
      },
    });
    var s = fr();
    (Object.defineProperty(e, "defaultTextMapGetter", {
      enumerable: !0,
      get: function () {
        return s.defaultTextMapGetter;
      },
    }),
      Object.defineProperty(e, "defaultTextMapSetter", {
        enumerable: !0,
        get: function () {
          return s.defaultTextMapSetter;
        },
      }));
    var c = xr();
    Object.defineProperty(e, "ProxyTracer", {
      enumerable: !0,
      get: function () {
        return c.ProxyTracer;
      },
    });
    var l = Cr();
    Object.defineProperty(e, "ProxyTracerProvider", {
      enumerable: !0,
      get: function () {
        return l.ProxyTracerProvider;
      },
    });
    var u = wr();
    Object.defineProperty(e, "SamplingDecision", {
      enumerable: !0,
      get: function () {
        return u.SamplingDecision;
      },
    });
    var d = Tr();
    Object.defineProperty(e, "SpanKind", {
      enumerable: !0,
      get: function () {
        return d.SpanKind;
      },
    });
    var f = Er();
    Object.defineProperty(e, "SpanStatusCode", {
      enumerable: !0,
      get: function () {
        return f.SpanStatusCode;
      },
    });
    var p = hr();
    Object.defineProperty(e, "TraceFlags", {
      enumerable: !0,
      get: function () {
        return p.TraceFlags;
      },
    });
    var m = kr();
    Object.defineProperty(e, "createTraceState", {
      enumerable: !0,
      get: function () {
        return m.createTraceState;
      },
    });
    var h = yr();
    (Object.defineProperty(e, "isSpanContextValid", {
      enumerable: !0,
      get: function () {
        return h.isSpanContextValid;
      },
    }),
      Object.defineProperty(e, "isValidTraceId", {
        enumerable: !0,
        get: function () {
          return h.isValidTraceId;
        },
      }),
      Object.defineProperty(e, "isValidSpanId", {
        enumerable: !0,
        get: function () {
          return h.isValidSpanId;
        },
      }));
    var g = gr();
    (Object.defineProperty(e, "INVALID_SPANID", {
      enumerable: !0,
      get: function () {
        return g.INVALID_SPANID;
      },
    }),
      Object.defineProperty(e, "INVALID_TRACEID", {
        enumerable: !0,
        get: function () {
          return g.INVALID_TRACEID;
        },
      }),
      Object.defineProperty(e, "INVALID_SPAN_CONTEXT", {
        enumerable: !0,
        get: function () {
          return g.INVALID_SPAN_CONTEXT;
        },
      }));
    var _ = Ar();
    Object.defineProperty(e, "context", {
      enumerable: !0,
      get: function () {
        return _.context;
      },
    });
    var v = jr();
    Object.defineProperty(e, "diag", {
      enumerable: !0,
      get: function () {
        return v.diag;
      },
    });
    var y = Pr();
    Object.defineProperty(e, "metrics", {
      enumerable: !0,
      get: function () {
        return y.metrics;
      },
    });
    var b = Rr();
    Object.defineProperty(e, "propagation", {
      enumerable: !0,
      get: function () {
        return b.propagation;
      },
    });
    var x = Br();
    (Object.defineProperty(e, "trace", {
      enumerable: !0,
      get: function () {
        return x.trace;
      },
    }),
      (e.default = {
        context: _.context,
        diag: v.diag,
        metrics: y.metrics,
        propagation: b.propagation,
        trace: x.trace,
      }));
  });
function Vr(e) {
  return e.setValue(Gr, !0);
}
function Hr(e) {
  return e.deleteValue(Gr);
}
function Ur(e) {
  return e.getValue(Gr) === !0;
}
var Wr,
  Gr,
  Kr = e.n(() => {
    ((Wr = e.a(F())), (Gr = (0, Wr.createContextKey)(`OpenTelemetry SDK Context Key SUPPRESS_TRACING`)));
  }),
  qr,
  Jr,
  Yr = e.n(() => {
    ((qr = `baggage`), (Jr = 4096));
  });
function Xr(e) {
  return e.reduce((e, t) => {
    let n = `${e}${e === `` ? `` : `,`}${t}`;
    return n.length > 8192 ? e : n;
  }, ``);
}
function Zr(e) {
  return e.getAllEntries().map(([e, t]) => {
    let n = `${encodeURIComponent(e)}=${encodeURIComponent(t.value)}`;
    return (t.metadata !== void 0 && (n += `;` + t.metadata.toString()), n);
  });
}
function Qr(e) {
  let t = e.split(`;`);
  if (t.length <= 0) return;
  let n = t.shift();
  if (!n) return;
  let r = n.indexOf(`=`);
  if (r <= 0) return;
  let i = decodeURIComponent(n.substring(0, r).trim()),
    a = decodeURIComponent(n.substring(r + 1).trim()),
    o;
  return (
    t.length > 0 && (o = (0, ei.baggageEntryMetadataFromString)(t.join(`;`))),
    { key: i, value: a, metadata: o }
  );
}
function $r(e) {
  let t = {};
  return (
    typeof e == `string` &&
      e.length > 0 &&
      e.split(`,`).forEach((e) => {
        let n = Qr(e);
        n !== void 0 && n.value.length > 0 && (t[n.key] = n.value);
      }),
    t
  );
}
var ei,
  ti = e.n(() => {
    ((ei = e.a(F())), Yr());
  }),
  ni,
  ri,
  ii = e.n(() => {
    ((ni = e.a(F())),
      Kr(),
      Yr(),
      ti(),
      (ri = class {
        inject(e, t, n) {
          let r = ni.propagation.getBaggage(e);
          if (!r || Ur(e)) return;
          let i = Xr(
            Zr(r)
              .filter((e) => e.length <= Jr)
              .slice(0, 180),
          );
          i.length > 0 && n.set(t, qr, i);
        }
        extract(e, t, n) {
          let r = n.get(t, qr),
            i = Array.isArray(r) ? r.join(`,`) : r;
          if (!i) return e;
          let a = {};
          return i.length === 0 ||
            (i.split(`,`).forEach((e) => {
              let t = Qr(e);
              if (t) {
                let e = { value: t.value };
                (t.metadata && (e.metadata = t.metadata), (a[t.key] = e));
              }
            }),
            Object.entries(a).length === 0)
            ? e
            : ni.propagation.setBaggage(e, ni.propagation.createBaggage(a));
        }
        fields() {
          return [qr];
        }
      }));
  }),
  ai,
  oi = e.n(() => {
    ai = class {
      _monotonicClock;
      _epochMillis;
      _performanceMillis;
      constructor(e, t) {
        ((this._monotonicClock = t), (this._epochMillis = e.now()), (this._performanceMillis = t.now()));
      }
      now() {
        let e = this._monotonicClock.now() - this._performanceMillis;
        return this._epochMillis + e;
      }
    };
  });
function si(e) {
  let t = {};
  if (typeof e != `object` || !e) return t;
  for (let n in e) {
    if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
    if (!ci(n)) {
      fi.diag.warn(`Invalid attribute key: ${n}`);
      continue;
    }
    let r = e[n];
    if (!li(r)) {
      fi.diag.warn(`Invalid attribute value set for key: ${n}`);
      continue;
    }
    t[n] = Array.isArray(r) ? r.slice() : r;
  }
  return t;
}
function ci(e) {
  return typeof e == `string` && e !== ``;
}
function li(e) {
  return e == null ? !0 : Array.isArray(e) ? ui(e) : di(typeof e);
}
function ui(e) {
  let t;
  for (let n of e) {
    if (n == null) continue;
    let e = typeof n;
    if (e !== t) {
      if (!t) {
        if (di(e)) {
          t = e;
          continue;
        }
        return !1;
      }
      return !1;
    }
  }
  return !0;
}
function di(e) {
  switch (e) {
    case `number`:
    case `boolean`:
    case `string`:
      return !0;
  }
  return !1;
}
var fi,
  pi = e.n(() => {
    fi = e.a(F());
  });
function mi() {
  return (e) => {
    _i.diag.error(hi(e));
  };
}
function hi(e) {
  return typeof e == `string` ? e : JSON.stringify(gi(e));
}
function gi(e) {
  let t = {},
    n = e;
  for (; n !== null;)
    (Object.getOwnPropertyNames(n).forEach((e) => {
      if (t[e]) return;
      let r = n[e];
      r && (t[e] = String(r));
    }),
      (n = Object.getPrototypeOf(n)));
  return t;
}
var _i,
  vi = e.n(() => {
    _i = e.a(F());
  });
function yi(e) {
  xi = e;
}
function bi(e) {
  try {
    xi(e);
  } catch {}
}
var xi,
  Si = e.n(() => {
    (vi(), (xi = mi()));
  });
function I(e) {
  let t = process.env[e];
  if (t == null || t.trim() === ``) return;
  let n = Number(t);
  if (isNaN(n)) {
    Ei.diag.warn(`Unknown value ${(0, T.inspect)(t)} for ${e}, expected a number, using defaults`);
    return;
  }
  return n;
}
function Ci(e) {
  let t = process.env[e];
  if (t != null && t.trim() !== ``) return t;
}
function wi(e) {
  let t = process.env[e]?.trim().toLowerCase();
  return t == null || t === ``
    ? !1
    : t === `true` ||
        (t === `false` ||
          Ei.diag.warn(
            `Unknown value ${(0, T.inspect)(t)} for ${e}, expected 'true' or 'false', falling back to 'false' (default)`,
          ),
        !1);
}
function Ti(e) {
  return Ci(e)
    ?.split(`,`)
    .map((e) => e.trim())
    .filter((e) => e !== ``);
}
var Ei,
  Di = e.n(() => {
    Ei = e.a(F());
  }),
  Oi,
  ki = e.n(() => {
    Oi = typeof globalThis == `object` ? globalThis : global;
  }),
  Ai,
  ji = e.n(() => {
    Ai = ne.performance;
  }),
  Mi,
  Ni = e.n(() => {
    Mi = `2.2.0`;
  }),
  Pi = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.createConstMap = void 0));
    function t(e) {
      let t = {},
        n = e.length;
      for (let r = 0; r < n; r++) {
        let n = e[r];
        n && (t[String(n).toUpperCase().replace(/[-.]/g, `_`)] = n);
      }
      return t;
    }
    e.createConstMap = t;
  }),
  Fi = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SEMATTRS_NET_HOST_CARRIER_ICC =
        e.SEMATTRS_NET_HOST_CARRIER_MNC =
        e.SEMATTRS_NET_HOST_CARRIER_MCC =
        e.SEMATTRS_NET_HOST_CARRIER_NAME =
        e.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE =
        e.SEMATTRS_NET_HOST_CONNECTION_TYPE =
        e.SEMATTRS_NET_HOST_NAME =
        e.SEMATTRS_NET_HOST_PORT =
        e.SEMATTRS_NET_HOST_IP =
        e.SEMATTRS_NET_PEER_NAME =
        e.SEMATTRS_NET_PEER_PORT =
        e.SEMATTRS_NET_PEER_IP =
        e.SEMATTRS_NET_TRANSPORT =
        e.SEMATTRS_FAAS_INVOKED_REGION =
        e.SEMATTRS_FAAS_INVOKED_PROVIDER =
        e.SEMATTRS_FAAS_INVOKED_NAME =
        e.SEMATTRS_FAAS_COLDSTART =
        e.SEMATTRS_FAAS_CRON =
        e.SEMATTRS_FAAS_TIME =
        e.SEMATTRS_FAAS_DOCUMENT_NAME =
        e.SEMATTRS_FAAS_DOCUMENT_TIME =
        e.SEMATTRS_FAAS_DOCUMENT_OPERATION =
        e.SEMATTRS_FAAS_DOCUMENT_COLLECTION =
        e.SEMATTRS_FAAS_EXECUTION =
        e.SEMATTRS_FAAS_TRIGGER =
        e.SEMATTRS_EXCEPTION_ESCAPED =
        e.SEMATTRS_EXCEPTION_STACKTRACE =
        e.SEMATTRS_EXCEPTION_MESSAGE =
        e.SEMATTRS_EXCEPTION_TYPE =
        e.SEMATTRS_DB_SQL_TABLE =
        e.SEMATTRS_DB_MONGODB_COLLECTION =
        e.SEMATTRS_DB_REDIS_DATABASE_INDEX =
        e.SEMATTRS_DB_HBASE_NAMESPACE =
        e.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC =
        e.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID =
        e.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT =
        e.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE =
        e.SEMATTRS_DB_CASSANDRA_TABLE =
        e.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL =
        e.SEMATTRS_DB_CASSANDRA_PAGE_SIZE =
        e.SEMATTRS_DB_CASSANDRA_KEYSPACE =
        e.SEMATTRS_DB_MSSQL_INSTANCE_NAME =
        e.SEMATTRS_DB_OPERATION =
        e.SEMATTRS_DB_STATEMENT =
        e.SEMATTRS_DB_NAME =
        e.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME =
        e.SEMATTRS_DB_USER =
        e.SEMATTRS_DB_CONNECTION_STRING =
        e.SEMATTRS_DB_SYSTEM =
        e.SEMATTRS_AWS_LAMBDA_INVOKED_ARN =
          void 0),
      (e.SEMATTRS_MESSAGING_DESTINATION_KIND =
        e.SEMATTRS_MESSAGING_DESTINATION =
        e.SEMATTRS_MESSAGING_SYSTEM =
        e.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES =
        e.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS =
        e.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT =
        e.SEMATTRS_AWS_DYNAMODB_COUNT =
        e.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS =
        e.SEMATTRS_AWS_DYNAMODB_SEGMENT =
        e.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD =
        e.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT =
        e.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE =
        e.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES =
        e.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES =
        e.SEMATTRS_AWS_DYNAMODB_SELECT =
        e.SEMATTRS_AWS_DYNAMODB_INDEX_NAME =
        e.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET =
        e.SEMATTRS_AWS_DYNAMODB_LIMIT =
        e.SEMATTRS_AWS_DYNAMODB_PROJECTION =
        e.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ =
        e.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY =
        e.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY =
        e.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS =
        e.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY =
        e.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES =
        e.SEMATTRS_HTTP_CLIENT_IP =
        e.SEMATTRS_HTTP_ROUTE =
        e.SEMATTRS_HTTP_SERVER_NAME =
        e.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED =
        e.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH =
        e.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED =
        e.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH =
        e.SEMATTRS_HTTP_USER_AGENT =
        e.SEMATTRS_HTTP_FLAVOR =
        e.SEMATTRS_HTTP_STATUS_CODE =
        e.SEMATTRS_HTTP_SCHEME =
        e.SEMATTRS_HTTP_HOST =
        e.SEMATTRS_HTTP_TARGET =
        e.SEMATTRS_HTTP_URL =
        e.SEMATTRS_HTTP_METHOD =
        e.SEMATTRS_CODE_LINENO =
        e.SEMATTRS_CODE_FILEPATH =
        e.SEMATTRS_CODE_NAMESPACE =
        e.SEMATTRS_CODE_FUNCTION =
        e.SEMATTRS_THREAD_NAME =
        e.SEMATTRS_THREAD_ID =
        e.SEMATTRS_ENDUSER_SCOPE =
        e.SEMATTRS_ENDUSER_ROLE =
        e.SEMATTRS_ENDUSER_ID =
        e.SEMATTRS_PEER_SERVICE =
          void 0),
      (e.DBSYSTEMVALUES_FILEMAKER =
        e.DBSYSTEMVALUES_DERBY =
        e.DBSYSTEMVALUES_FIREBIRD =
        e.DBSYSTEMVALUES_ADABAS =
        e.DBSYSTEMVALUES_CACHE =
        e.DBSYSTEMVALUES_EDB =
        e.DBSYSTEMVALUES_FIRSTSQL =
        e.DBSYSTEMVALUES_INGRES =
        e.DBSYSTEMVALUES_HANADB =
        e.DBSYSTEMVALUES_MAXDB =
        e.DBSYSTEMVALUES_PROGRESS =
        e.DBSYSTEMVALUES_HSQLDB =
        e.DBSYSTEMVALUES_CLOUDSCAPE =
        e.DBSYSTEMVALUES_HIVE =
        e.DBSYSTEMVALUES_REDSHIFT =
        e.DBSYSTEMVALUES_POSTGRESQL =
        e.DBSYSTEMVALUES_DB2 =
        e.DBSYSTEMVALUES_ORACLE =
        e.DBSYSTEMVALUES_MYSQL =
        e.DBSYSTEMVALUES_MSSQL =
        e.DBSYSTEMVALUES_OTHER_SQL =
        e.SemanticAttributes =
        e.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE =
        e.SEMATTRS_MESSAGE_COMPRESSED_SIZE =
        e.SEMATTRS_MESSAGE_ID =
        e.SEMATTRS_MESSAGE_TYPE =
        e.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE =
        e.SEMATTRS_RPC_JSONRPC_ERROR_CODE =
        e.SEMATTRS_RPC_JSONRPC_REQUEST_ID =
        e.SEMATTRS_RPC_JSONRPC_VERSION =
        e.SEMATTRS_RPC_GRPC_STATUS_CODE =
        e.SEMATTRS_RPC_METHOD =
        e.SEMATTRS_RPC_SERVICE =
        e.SEMATTRS_RPC_SYSTEM =
        e.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE =
        e.SEMATTRS_MESSAGING_KAFKA_PARTITION =
        e.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID =
        e.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP =
        e.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY =
        e.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY =
        e.SEMATTRS_MESSAGING_CONSUMER_ID =
        e.SEMATTRS_MESSAGING_OPERATION =
        e.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES =
        e.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES =
        e.SEMATTRS_MESSAGING_CONVERSATION_ID =
        e.SEMATTRS_MESSAGING_MESSAGE_ID =
        e.SEMATTRS_MESSAGING_URL =
        e.SEMATTRS_MESSAGING_PROTOCOL_VERSION =
        e.SEMATTRS_MESSAGING_PROTOCOL =
        e.SEMATTRS_MESSAGING_TEMP_DESTINATION =
          void 0),
      (e.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD =
        e.FaasDocumentOperationValues =
        e.FAASDOCUMENTOPERATIONVALUES_DELETE =
        e.FAASDOCUMENTOPERATIONVALUES_EDIT =
        e.FAASDOCUMENTOPERATIONVALUES_INSERT =
        e.FaasTriggerValues =
        e.FAASTRIGGERVALUES_OTHER =
        e.FAASTRIGGERVALUES_TIMER =
        e.FAASTRIGGERVALUES_PUBSUB =
        e.FAASTRIGGERVALUES_HTTP =
        e.FAASTRIGGERVALUES_DATASOURCE =
        e.DbCassandraConsistencyLevelValues =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_ANY =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_THREE =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_TWO =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_ONE =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_ALL =
        e.DbSystemValues =
        e.DBSYSTEMVALUES_COCKROACHDB =
        e.DBSYSTEMVALUES_MEMCACHED =
        e.DBSYSTEMVALUES_ELASTICSEARCH =
        e.DBSYSTEMVALUES_GEODE =
        e.DBSYSTEMVALUES_NEO4J =
        e.DBSYSTEMVALUES_DYNAMODB =
        e.DBSYSTEMVALUES_COSMOSDB =
        e.DBSYSTEMVALUES_COUCHDB =
        e.DBSYSTEMVALUES_COUCHBASE =
        e.DBSYSTEMVALUES_REDIS =
        e.DBSYSTEMVALUES_MONGODB =
        e.DBSYSTEMVALUES_HBASE =
        e.DBSYSTEMVALUES_CASSANDRA =
        e.DBSYSTEMVALUES_COLDFUSION =
        e.DBSYSTEMVALUES_H2 =
        e.DBSYSTEMVALUES_VERTICA =
        e.DBSYSTEMVALUES_TERADATA =
        e.DBSYSTEMVALUES_SYBASE =
        e.DBSYSTEMVALUES_SQLITE =
        e.DBSYSTEMVALUES_POINTBASE =
        e.DBSYSTEMVALUES_PERVASIVE =
        e.DBSYSTEMVALUES_NETEZZA =
        e.DBSYSTEMVALUES_MARIADB =
        e.DBSYSTEMVALUES_INTERBASE =
        e.DBSYSTEMVALUES_INSTANTDB =
        e.DBSYSTEMVALUES_INFORMIX =
          void 0),
      (e.MESSAGINGOPERATIONVALUES_RECEIVE =
        e.MessagingDestinationKindValues =
        e.MESSAGINGDESTINATIONKINDVALUES_TOPIC =
        e.MESSAGINGDESTINATIONKINDVALUES_QUEUE =
        e.HttpFlavorValues =
        e.HTTPFLAVORVALUES_QUIC =
        e.HTTPFLAVORVALUES_SPDY =
        e.HTTPFLAVORVALUES_HTTP_2_0 =
        e.HTTPFLAVORVALUES_HTTP_1_1 =
        e.HTTPFLAVORVALUES_HTTP_1_0 =
        e.NetHostConnectionSubtypeValues =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_NR =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_GSM =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_LTE =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS =
        e.NetHostConnectionTypeValues =
        e.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN =
        e.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE =
        e.NETHOSTCONNECTIONTYPEVALUES_CELL =
        e.NETHOSTCONNECTIONTYPEVALUES_WIRED =
        e.NETHOSTCONNECTIONTYPEVALUES_WIFI =
        e.NetTransportValues =
        e.NETTRANSPORTVALUES_OTHER =
        e.NETTRANSPORTVALUES_INPROC =
        e.NETTRANSPORTVALUES_PIPE =
        e.NETTRANSPORTVALUES_UNIX =
        e.NETTRANSPORTVALUES_IP =
        e.NETTRANSPORTVALUES_IP_UDP =
        e.NETTRANSPORTVALUES_IP_TCP =
        e.FaasInvokedProviderValues =
        e.FAASINVOKEDPROVIDERVALUES_GCP =
        e.FAASINVOKEDPROVIDERVALUES_AZURE =
        e.FAASINVOKEDPROVIDERVALUES_AWS =
          void 0),
      (e.MessageTypeValues =
        e.MESSAGETYPEVALUES_RECEIVED =
        e.MESSAGETYPEVALUES_SENT =
        e.RpcGrpcStatusCodeValues =
        e.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED =
        e.RPCGRPCSTATUSCODEVALUES_DATA_LOSS =
        e.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE =
        e.RPCGRPCSTATUSCODEVALUES_INTERNAL =
        e.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED =
        e.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE =
        e.RPCGRPCSTATUSCODEVALUES_ABORTED =
        e.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION =
        e.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED =
        e.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED =
        e.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS =
        e.RPCGRPCSTATUSCODEVALUES_NOT_FOUND =
        e.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED =
        e.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT =
        e.RPCGRPCSTATUSCODEVALUES_UNKNOWN =
        e.RPCGRPCSTATUSCODEVALUES_CANCELLED =
        e.RPCGRPCSTATUSCODEVALUES_OK =
        e.MessagingOperationValues =
        e.MESSAGINGOPERATIONVALUES_PROCESS =
          void 0));
    var t = Pi(),
      n = `aws.lambda.invoked_arn`,
      r = `db.system`,
      i = `db.connection_string`,
      a = `db.user`,
      o = `db.jdbc.driver_classname`,
      s = `db.name`,
      c = `db.statement`,
      l = `db.operation`,
      u = `db.mssql.instance_name`,
      d = `db.cassandra.keyspace`,
      f = `db.cassandra.page_size`,
      p = `db.cassandra.consistency_level`,
      m = `db.cassandra.table`,
      h = `db.cassandra.idempotence`,
      g = `db.cassandra.speculative_execution_count`,
      _ = `db.cassandra.coordinator.id`,
      v = `db.cassandra.coordinator.dc`,
      y = `db.hbase.namespace`,
      b = `db.redis.database_index`,
      x = `db.mongodb.collection`,
      S = `db.sql.table`,
      C = `exception.type`,
      w = `exception.message`,
      T = `exception.stacktrace`,
      E = `exception.escaped`,
      ee = `faas.trigger`,
      D = `faas.execution`,
      te = `faas.document.collection`,
      O = `faas.document.operation`,
      ne = `faas.document.time`,
      re = `faas.document.name`,
      k = `faas.time`,
      A = `faas.cron`,
      ie = `faas.coldstart`,
      ae = `faas.invoked_name`,
      j = `faas.invoked_provider`,
      oe = `faas.invoked_region`,
      se = `net.transport`,
      ce = `net.peer.ip`,
      le = `net.peer.port`,
      ue = `net.peer.name`,
      de = `net.host.ip`,
      fe = `net.host.port`,
      pe = `net.host.name`,
      me = `net.host.connection.type`,
      he = `net.host.connection.subtype`,
      ge = `net.host.carrier.name`,
      _e = `net.host.carrier.mcc`,
      M = `net.host.carrier.mnc`,
      ve = `net.host.carrier.icc`,
      ye = `peer.service`,
      be = `enduser.id`,
      xe = `enduser.role`,
      Se = `enduser.scope`,
      Ce = `thread.id`,
      we = `thread.name`,
      Te = `code.function`,
      Ee = `code.namespace`,
      De = `code.filepath`,
      Oe = `code.lineno`,
      ke = `http.method`,
      Ae = `http.url`,
      je = `http.target`,
      Me = `http.host`,
      Ne = `http.scheme`,
      Pe = `http.status_code`,
      Fe = `http.flavor`,
      Ie = `http.user_agent`,
      Le = `http.request_content_length`,
      N = `http.request_content_length_uncompressed`,
      Re = `http.response_content_length`,
      ze = `http.response_content_length_uncompressed`,
      Be = `http.server_name`,
      Ve = `http.route`,
      He = `http.client_ip`,
      Ue = `aws.dynamodb.table_names`,
      We = `aws.dynamodb.consumed_capacity`,
      Ge = `aws.dynamodb.item_collection_metrics`,
      Ke = `aws.dynamodb.provisioned_read_capacity`,
      qe = `aws.dynamodb.provisioned_write_capacity`,
      Je = `aws.dynamodb.consistent_read`,
      Ye = `aws.dynamodb.projection`,
      Xe = `aws.dynamodb.limit`,
      Ze = `aws.dynamodb.attributes_to_get`,
      Qe = `aws.dynamodb.index_name`,
      P = `aws.dynamodb.select`,
      $e = `aws.dynamodb.global_secondary_indexes`,
      et = `aws.dynamodb.local_secondary_indexes`,
      tt = `aws.dynamodb.exclusive_start_table`,
      nt = `aws.dynamodb.table_count`,
      rt = `aws.dynamodb.scan_forward`,
      it = `aws.dynamodb.segment`,
      at = `aws.dynamodb.total_segments`,
      ot = `aws.dynamodb.count`,
      st = `aws.dynamodb.scanned_count`,
      ct = `aws.dynamodb.attribute_definitions`,
      lt = `aws.dynamodb.global_secondary_index_updates`,
      ut = `messaging.system`,
      dt = `messaging.destination`,
      ft = `messaging.destination_kind`,
      pt = `messaging.temp_destination`,
      mt = `messaging.protocol`,
      ht = `messaging.protocol_version`,
      gt = `messaging.url`,
      _t = `messaging.message_id`,
      vt = `messaging.conversation_id`,
      yt = `messaging.message_payload_size_bytes`,
      bt = `messaging.message_payload_compressed_size_bytes`,
      xt = `messaging.operation`,
      St = `messaging.consumer_id`,
      Ct = `messaging.rabbitmq.routing_key`,
      wt = `messaging.kafka.message_key`,
      Tt = `messaging.kafka.consumer_group`,
      Et = `messaging.kafka.client_id`,
      Dt = `messaging.kafka.partition`,
      Ot = `messaging.kafka.tombstone`,
      kt = `rpc.system`,
      At = `rpc.service`,
      jt = `rpc.method`,
      Mt = `rpc.grpc.status_code`,
      Nt = `rpc.jsonrpc.version`,
      Pt = `rpc.jsonrpc.request_id`,
      Ft = `rpc.jsonrpc.error_code`,
      It = `rpc.jsonrpc.error_message`,
      Lt = `message.type`,
      Rt = `message.id`,
      zt = `message.compressed_size`,
      Bt = `message.uncompressed_size`;
    ((e.SEMATTRS_AWS_LAMBDA_INVOKED_ARN = n),
      (e.SEMATTRS_DB_SYSTEM = r),
      (e.SEMATTRS_DB_CONNECTION_STRING = i),
      (e.SEMATTRS_DB_USER = a),
      (e.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = o),
      (e.SEMATTRS_DB_NAME = s),
      (e.SEMATTRS_DB_STATEMENT = c),
      (e.SEMATTRS_DB_OPERATION = l),
      (e.SEMATTRS_DB_MSSQL_INSTANCE_NAME = u),
      (e.SEMATTRS_DB_CASSANDRA_KEYSPACE = d),
      (e.SEMATTRS_DB_CASSANDRA_PAGE_SIZE = f),
      (e.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = p),
      (e.SEMATTRS_DB_CASSANDRA_TABLE = m),
      (e.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = h),
      (e.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = g),
      (e.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = _),
      (e.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = v),
      (e.SEMATTRS_DB_HBASE_NAMESPACE = y),
      (e.SEMATTRS_DB_REDIS_DATABASE_INDEX = b),
      (e.SEMATTRS_DB_MONGODB_COLLECTION = x),
      (e.SEMATTRS_DB_SQL_TABLE = S),
      (e.SEMATTRS_EXCEPTION_TYPE = C),
      (e.SEMATTRS_EXCEPTION_MESSAGE = w),
      (e.SEMATTRS_EXCEPTION_STACKTRACE = T),
      (e.SEMATTRS_EXCEPTION_ESCAPED = E),
      (e.SEMATTRS_FAAS_TRIGGER = ee),
      (e.SEMATTRS_FAAS_EXECUTION = D),
      (e.SEMATTRS_FAAS_DOCUMENT_COLLECTION = te),
      (e.SEMATTRS_FAAS_DOCUMENT_OPERATION = O),
      (e.SEMATTRS_FAAS_DOCUMENT_TIME = ne),
      (e.SEMATTRS_FAAS_DOCUMENT_NAME = re),
      (e.SEMATTRS_FAAS_TIME = k),
      (e.SEMATTRS_FAAS_CRON = A),
      (e.SEMATTRS_FAAS_COLDSTART = ie),
      (e.SEMATTRS_FAAS_INVOKED_NAME = ae),
      (e.SEMATTRS_FAAS_INVOKED_PROVIDER = j),
      (e.SEMATTRS_FAAS_INVOKED_REGION = oe),
      (e.SEMATTRS_NET_TRANSPORT = se),
      (e.SEMATTRS_NET_PEER_IP = ce),
      (e.SEMATTRS_NET_PEER_PORT = le),
      (e.SEMATTRS_NET_PEER_NAME = ue),
      (e.SEMATTRS_NET_HOST_IP = de),
      (e.SEMATTRS_NET_HOST_PORT = fe),
      (e.SEMATTRS_NET_HOST_NAME = pe),
      (e.SEMATTRS_NET_HOST_CONNECTION_TYPE = me),
      (e.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = he),
      (e.SEMATTRS_NET_HOST_CARRIER_NAME = ge),
      (e.SEMATTRS_NET_HOST_CARRIER_MCC = _e),
      (e.SEMATTRS_NET_HOST_CARRIER_MNC = M),
      (e.SEMATTRS_NET_HOST_CARRIER_ICC = ve),
      (e.SEMATTRS_PEER_SERVICE = ye),
      (e.SEMATTRS_ENDUSER_ID = be),
      (e.SEMATTRS_ENDUSER_ROLE = xe),
      (e.SEMATTRS_ENDUSER_SCOPE = Se),
      (e.SEMATTRS_THREAD_ID = Ce),
      (e.SEMATTRS_THREAD_NAME = we),
      (e.SEMATTRS_CODE_FUNCTION = Te),
      (e.SEMATTRS_CODE_NAMESPACE = Ee),
      (e.SEMATTRS_CODE_FILEPATH = De),
      (e.SEMATTRS_CODE_LINENO = Oe),
      (e.SEMATTRS_HTTP_METHOD = ke),
      (e.SEMATTRS_HTTP_URL = Ae),
      (e.SEMATTRS_HTTP_TARGET = je),
      (e.SEMATTRS_HTTP_HOST = Me),
      (e.SEMATTRS_HTTP_SCHEME = Ne),
      (e.SEMATTRS_HTTP_STATUS_CODE = Pe),
      (e.SEMATTRS_HTTP_FLAVOR = Fe),
      (e.SEMATTRS_HTTP_USER_AGENT = Ie),
      (e.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = Le),
      (e.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = N),
      (e.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = Re),
      (e.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = ze),
      (e.SEMATTRS_HTTP_SERVER_NAME = Be),
      (e.SEMATTRS_HTTP_ROUTE = Ve),
      (e.SEMATTRS_HTTP_CLIENT_IP = He),
      (e.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = Ue),
      (e.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = We),
      (e.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = Ge),
      (e.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = Ke),
      (e.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = qe),
      (e.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = Je),
      (e.SEMATTRS_AWS_DYNAMODB_PROJECTION = Ye),
      (e.SEMATTRS_AWS_DYNAMODB_LIMIT = Xe),
      (e.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = Ze),
      (e.SEMATTRS_AWS_DYNAMODB_INDEX_NAME = Qe),
      (e.SEMATTRS_AWS_DYNAMODB_SELECT = P),
      (e.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = $e),
      (e.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = et),
      (e.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = tt),
      (e.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = nt),
      (e.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = rt),
      (e.SEMATTRS_AWS_DYNAMODB_SEGMENT = it),
      (e.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = at),
      (e.SEMATTRS_AWS_DYNAMODB_COUNT = ot),
      (e.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = st),
      (e.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = ct),
      (e.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = lt),
      (e.SEMATTRS_MESSAGING_SYSTEM = ut),
      (e.SEMATTRS_MESSAGING_DESTINATION = dt),
      (e.SEMATTRS_MESSAGING_DESTINATION_KIND = ft),
      (e.SEMATTRS_MESSAGING_TEMP_DESTINATION = pt),
      (e.SEMATTRS_MESSAGING_PROTOCOL = mt),
      (e.SEMATTRS_MESSAGING_PROTOCOL_VERSION = ht),
      (e.SEMATTRS_MESSAGING_URL = gt),
      (e.SEMATTRS_MESSAGING_MESSAGE_ID = _t),
      (e.SEMATTRS_MESSAGING_CONVERSATION_ID = vt),
      (e.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = yt),
      (e.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = bt),
      (e.SEMATTRS_MESSAGING_OPERATION = xt),
      (e.SEMATTRS_MESSAGING_CONSUMER_ID = St),
      (e.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = Ct),
      (e.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = wt),
      (e.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = Tt),
      (e.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = Et),
      (e.SEMATTRS_MESSAGING_KAFKA_PARTITION = Dt),
      (e.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = Ot),
      (e.SEMATTRS_RPC_SYSTEM = kt),
      (e.SEMATTRS_RPC_SERVICE = At),
      (e.SEMATTRS_RPC_METHOD = jt),
      (e.SEMATTRS_RPC_GRPC_STATUS_CODE = Mt),
      (e.SEMATTRS_RPC_JSONRPC_VERSION = Nt),
      (e.SEMATTRS_RPC_JSONRPC_REQUEST_ID = Pt),
      (e.SEMATTRS_RPC_JSONRPC_ERROR_CODE = Ft),
      (e.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = It),
      (e.SEMATTRS_MESSAGE_TYPE = Lt),
      (e.SEMATTRS_MESSAGE_ID = Rt),
      (e.SEMATTRS_MESSAGE_COMPRESSED_SIZE = zt),
      (e.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = Bt),
      (e.SemanticAttributes = (0, t.createConstMap)([
        n,
        r,
        i,
        a,
        o,
        s,
        c,
        l,
        u,
        d,
        f,
        p,
        m,
        h,
        g,
        _,
        v,
        y,
        b,
        x,
        S,
        C,
        w,
        T,
        E,
        ee,
        D,
        te,
        O,
        ne,
        re,
        k,
        A,
        ie,
        ae,
        j,
        oe,
        se,
        ce,
        le,
        ue,
        de,
        fe,
        pe,
        me,
        he,
        ge,
        _e,
        M,
        ve,
        ye,
        be,
        xe,
        Se,
        Ce,
        we,
        Te,
        Ee,
        De,
        Oe,
        ke,
        Ae,
        je,
        Me,
        Ne,
        Pe,
        Fe,
        Ie,
        Le,
        N,
        Re,
        ze,
        Be,
        Ve,
        He,
        Ue,
        We,
        Ge,
        Ke,
        qe,
        Je,
        Ye,
        Xe,
        Ze,
        Qe,
        P,
        $e,
        et,
        tt,
        nt,
        rt,
        it,
        at,
        ot,
        st,
        ct,
        lt,
        ut,
        dt,
        ft,
        pt,
        mt,
        ht,
        gt,
        _t,
        vt,
        yt,
        bt,
        xt,
        St,
        Ct,
        wt,
        Tt,
        Et,
        Dt,
        Ot,
        kt,
        At,
        jt,
        Mt,
        Nt,
        Pt,
        Ft,
        It,
        Lt,
        Rt,
        zt,
        Bt,
      ])));
    var Vt = `other_sql`,
      Ht = `mssql`,
      Ut = `mysql`,
      Wt = `oracle`,
      Gt = `db2`,
      Kt = `postgresql`,
      qt = `redshift`,
      Jt = `hive`,
      Yt = `cloudscape`,
      Xt = `hsqldb`,
      Zt = `progress`,
      Qt = `maxdb`,
      $t = `hanadb`,
      en = `ingres`,
      tn = `firstsql`,
      nn = `edb`,
      rn = `cache`,
      an = `adabas`,
      on = `firebird`,
      sn = `derby`,
      cn = `filemaker`,
      ln = `informix`,
      un = `instantdb`,
      dn = `interbase`,
      fn = `mariadb`,
      pn = `netezza`,
      mn = `pervasive`,
      hn = `pointbase`,
      gn = `sqlite`,
      _n = `sybase`,
      vn = `teradata`,
      yn = `vertica`,
      bn = `h2`,
      xn = `coldfusion`,
      Sn = `cassandra`,
      Cn = `hbase`,
      wn = `mongodb`,
      Tn = `redis`,
      En = `couchbase`,
      Dn = `couchdb`,
      On = `cosmosdb`,
      kn = `dynamodb`,
      An = `neo4j`,
      jn = `geode`,
      Mn = `elasticsearch`,
      Nn = `memcached`,
      Pn = `cockroachdb`;
    ((e.DBSYSTEMVALUES_OTHER_SQL = Vt),
      (e.DBSYSTEMVALUES_MSSQL = Ht),
      (e.DBSYSTEMVALUES_MYSQL = Ut),
      (e.DBSYSTEMVALUES_ORACLE = Wt),
      (e.DBSYSTEMVALUES_DB2 = Gt),
      (e.DBSYSTEMVALUES_POSTGRESQL = Kt),
      (e.DBSYSTEMVALUES_REDSHIFT = qt),
      (e.DBSYSTEMVALUES_HIVE = Jt),
      (e.DBSYSTEMVALUES_CLOUDSCAPE = Yt),
      (e.DBSYSTEMVALUES_HSQLDB = Xt),
      (e.DBSYSTEMVALUES_PROGRESS = Zt),
      (e.DBSYSTEMVALUES_MAXDB = Qt),
      (e.DBSYSTEMVALUES_HANADB = $t),
      (e.DBSYSTEMVALUES_INGRES = en),
      (e.DBSYSTEMVALUES_FIRSTSQL = tn),
      (e.DBSYSTEMVALUES_EDB = nn),
      (e.DBSYSTEMVALUES_CACHE = rn),
      (e.DBSYSTEMVALUES_ADABAS = an),
      (e.DBSYSTEMVALUES_FIREBIRD = on),
      (e.DBSYSTEMVALUES_DERBY = sn),
      (e.DBSYSTEMVALUES_FILEMAKER = cn),
      (e.DBSYSTEMVALUES_INFORMIX = ln),
      (e.DBSYSTEMVALUES_INSTANTDB = un),
      (e.DBSYSTEMVALUES_INTERBASE = dn),
      (e.DBSYSTEMVALUES_MARIADB = fn),
      (e.DBSYSTEMVALUES_NETEZZA = pn),
      (e.DBSYSTEMVALUES_PERVASIVE = mn),
      (e.DBSYSTEMVALUES_POINTBASE = hn),
      (e.DBSYSTEMVALUES_SQLITE = gn),
      (e.DBSYSTEMVALUES_SYBASE = _n),
      (e.DBSYSTEMVALUES_TERADATA = vn),
      (e.DBSYSTEMVALUES_VERTICA = yn),
      (e.DBSYSTEMVALUES_H2 = bn),
      (e.DBSYSTEMVALUES_COLDFUSION = xn),
      (e.DBSYSTEMVALUES_CASSANDRA = Sn),
      (e.DBSYSTEMVALUES_HBASE = Cn),
      (e.DBSYSTEMVALUES_MONGODB = wn),
      (e.DBSYSTEMVALUES_REDIS = Tn),
      (e.DBSYSTEMVALUES_COUCHBASE = En),
      (e.DBSYSTEMVALUES_COUCHDB = Dn),
      (e.DBSYSTEMVALUES_COSMOSDB = On),
      (e.DBSYSTEMVALUES_DYNAMODB = kn),
      (e.DBSYSTEMVALUES_NEO4J = An),
      (e.DBSYSTEMVALUES_GEODE = jn),
      (e.DBSYSTEMVALUES_ELASTICSEARCH = Mn),
      (e.DBSYSTEMVALUES_MEMCACHED = Nn),
      (e.DBSYSTEMVALUES_COCKROACHDB = Pn),
      (e.DbSystemValues = (0, t.createConstMap)([
        Vt,
        Ht,
        Ut,
        Wt,
        Gt,
        Kt,
        qt,
        Jt,
        Yt,
        Xt,
        Zt,
        Qt,
        $t,
        en,
        tn,
        nn,
        rn,
        an,
        on,
        sn,
        cn,
        ln,
        un,
        dn,
        fn,
        pn,
        mn,
        hn,
        gn,
        _n,
        vn,
        yn,
        bn,
        xn,
        Sn,
        Cn,
        wn,
        Tn,
        En,
        Dn,
        On,
        kn,
        An,
        jn,
        Mn,
        Nn,
        Pn,
      ])));
    var Fn = `all`,
      In = `each_quorum`,
      Ln = `quorum`,
      Rn = `local_quorum`,
      zn = `one`,
      Bn = `two`,
      Vn = `three`,
      Hn = `local_one`,
      Un = `any`,
      Wn = `serial`,
      Gn = `local_serial`;
    ((e.DBCASSANDRACONSISTENCYLEVELVALUES_ALL = Fn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = In),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = Ln),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = Rn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_ONE = zn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_TWO = Bn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_THREE = Vn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = Hn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_ANY = Un),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = Wn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = Gn),
      (e.DbCassandraConsistencyLevelValues = (0, t.createConstMap)([
        Fn,
        In,
        Ln,
        Rn,
        zn,
        Bn,
        Vn,
        Hn,
        Un,
        Wn,
        Gn,
      ])));
    var Kn = `datasource`,
      qn = `http`,
      Jn = `pubsub`,
      Yn = `timer`,
      Xn = `other`;
    ((e.FAASTRIGGERVALUES_DATASOURCE = Kn),
      (e.FAASTRIGGERVALUES_HTTP = qn),
      (e.FAASTRIGGERVALUES_PUBSUB = Jn),
      (e.FAASTRIGGERVALUES_TIMER = Yn),
      (e.FAASTRIGGERVALUES_OTHER = Xn),
      (e.FaasTriggerValues = (0, t.createConstMap)([Kn, qn, Jn, Yn, Xn])));
    var Zn = `insert`,
      Qn = `edit`,
      $n = `delete`;
    ((e.FAASDOCUMENTOPERATIONVALUES_INSERT = Zn),
      (e.FAASDOCUMENTOPERATIONVALUES_EDIT = Qn),
      (e.FAASDOCUMENTOPERATIONVALUES_DELETE = $n),
      (e.FaasDocumentOperationValues = (0, t.createConstMap)([Zn, Qn, $n])));
    var er = `alibaba_cloud`,
      tr = `aws`,
      nr = `azure`,
      rr = `gcp`;
    ((e.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = er),
      (e.FAASINVOKEDPROVIDERVALUES_AWS = tr),
      (e.FAASINVOKEDPROVIDERVALUES_AZURE = nr),
      (e.FAASINVOKEDPROVIDERVALUES_GCP = rr),
      (e.FaasInvokedProviderValues = (0, t.createConstMap)([er, tr, nr, rr])));
    var ir = `ip_tcp`,
      ar = `ip_udp`,
      or = `ip`,
      sr = `unix`,
      cr = `pipe`,
      lr = `inproc`,
      ur = `other`;
    ((e.NETTRANSPORTVALUES_IP_TCP = ir),
      (e.NETTRANSPORTVALUES_IP_UDP = ar),
      (e.NETTRANSPORTVALUES_IP = or),
      (e.NETTRANSPORTVALUES_UNIX = sr),
      (e.NETTRANSPORTVALUES_PIPE = cr),
      (e.NETTRANSPORTVALUES_INPROC = lr),
      (e.NETTRANSPORTVALUES_OTHER = ur),
      (e.NetTransportValues = (0, t.createConstMap)([ir, ar, or, sr, cr, lr, ur])));
    var dr = `wifi`,
      fr = `wired`,
      pr = `cell`,
      mr = `unavailable`,
      hr = `unknown`;
    ((e.NETHOSTCONNECTIONTYPEVALUES_WIFI = dr),
      (e.NETHOSTCONNECTIONTYPEVALUES_WIRED = fr),
      (e.NETHOSTCONNECTIONTYPEVALUES_CELL = pr),
      (e.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = mr),
      (e.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = hr),
      (e.NetHostConnectionTypeValues = (0, t.createConstMap)([dr, fr, pr, mr, hr])));
    var gr = `gprs`,
      _r = `edge`,
      vr = `umts`,
      yr = `cdma`,
      br = `evdo_0`,
      xr = `evdo_a`,
      Sr = `cdma2000_1xrtt`,
      Cr = `hsdpa`,
      wr = `hsupa`,
      Tr = `hspa`,
      Er = `iden`,
      Dr = `evdo_b`,
      Or = `lte`,
      kr = `ehrpd`,
      Ar = `hspap`,
      jr = `gsm`,
      Mr = `td_scdma`,
      Nr = `iwlan`,
      Pr = `nr`,
      Fr = `nrnsa`,
      Ir = `lte_ca`;
    ((e.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = gr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = _r),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = vr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = yr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = br),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = xr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = Sr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = Cr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = wr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = Tr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = Er),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = Dr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_LTE = Or),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = kr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = Ar),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_GSM = jr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = Mr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = Nr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_NR = Pr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = Fr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = Ir),
      (e.NetHostConnectionSubtypeValues = (0, t.createConstMap)([
        gr,
        _r,
        vr,
        yr,
        br,
        xr,
        Sr,
        Cr,
        wr,
        Tr,
        Er,
        Dr,
        Or,
        kr,
        Ar,
        jr,
        Mr,
        Nr,
        Pr,
        Fr,
        Ir,
      ])));
    var Lr = `1.0`,
      Rr = `1.1`,
      zr = `2.0`,
      Br = `SPDY`,
      F = `QUIC`;
    ((e.HTTPFLAVORVALUES_HTTP_1_0 = Lr),
      (e.HTTPFLAVORVALUES_HTTP_1_1 = Rr),
      (e.HTTPFLAVORVALUES_HTTP_2_0 = zr),
      (e.HTTPFLAVORVALUES_SPDY = Br),
      (e.HTTPFLAVORVALUES_QUIC = F),
      (e.HttpFlavorValues = { HTTP_1_0: Lr, HTTP_1_1: Rr, HTTP_2_0: zr, SPDY: Br, QUIC: F }));
    var Vr = `queue`,
      Hr = `topic`;
    ((e.MESSAGINGDESTINATIONKINDVALUES_QUEUE = Vr),
      (e.MESSAGINGDESTINATIONKINDVALUES_TOPIC = Hr),
      (e.MessagingDestinationKindValues = (0, t.createConstMap)([Vr, Hr])));
    var Ur = `receive`,
      Wr = `process`;
    ((e.MESSAGINGOPERATIONVALUES_RECEIVE = Ur),
      (e.MESSAGINGOPERATIONVALUES_PROCESS = Wr),
      (e.MessagingOperationValues = (0, t.createConstMap)([Ur, Wr])));
    var Gr = 0,
      Kr = 1,
      qr = 2,
      Jr = 3,
      Yr = 4,
      Xr = 5,
      Zr = 6,
      Qr = 7,
      $r = 8,
      ei = 9,
      ti = 10,
      ni = 11,
      ri = 12,
      ii = 13,
      ai = 14,
      oi = 15,
      si = 16;
    ((e.RPCGRPCSTATUSCODEVALUES_OK = Gr),
      (e.RPCGRPCSTATUSCODEVALUES_CANCELLED = Kr),
      (e.RPCGRPCSTATUSCODEVALUES_UNKNOWN = qr),
      (e.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = Jr),
      (e.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = Yr),
      (e.RPCGRPCSTATUSCODEVALUES_NOT_FOUND = Xr),
      (e.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = Zr),
      (e.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = Qr),
      (e.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = $r),
      (e.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = ei),
      (e.RPCGRPCSTATUSCODEVALUES_ABORTED = ti),
      (e.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = ni),
      (e.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = ri),
      (e.RPCGRPCSTATUSCODEVALUES_INTERNAL = ii),
      (e.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = ai),
      (e.RPCGRPCSTATUSCODEVALUES_DATA_LOSS = oi),
      (e.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = si),
      (e.RpcGrpcStatusCodeValues = {
        OK: Gr,
        CANCELLED: Kr,
        UNKNOWN: qr,
        INVALID_ARGUMENT: Jr,
        DEADLINE_EXCEEDED: Yr,
        NOT_FOUND: Xr,
        ALREADY_EXISTS: Zr,
        PERMISSION_DENIED: Qr,
        RESOURCE_EXHAUSTED: $r,
        FAILED_PRECONDITION: ei,
        ABORTED: ti,
        OUT_OF_RANGE: ni,
        UNIMPLEMENTED: ri,
        INTERNAL: ii,
        UNAVAILABLE: ai,
        DATA_LOSS: oi,
        UNAUTHENTICATED: si,
      }));
    var ci = `SENT`,
      li = `RECEIVED`;
    ((e.MESSAGETYPEVALUES_SENT = ci),
      (e.MESSAGETYPEVALUES_RECEIVED = li),
      (e.MessageTypeValues = (0, t.createConstMap)([ci, li])));
  }),
  Ii = e.t((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__exportStar) ||
        function (e, n) {
          for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }), n(Fi(), e));
  }),
  Li = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SEMRESATTRS_K8S_STATEFULSET_NAME =
        e.SEMRESATTRS_K8S_STATEFULSET_UID =
        e.SEMRESATTRS_K8S_DEPLOYMENT_NAME =
        e.SEMRESATTRS_K8S_DEPLOYMENT_UID =
        e.SEMRESATTRS_K8S_REPLICASET_NAME =
        e.SEMRESATTRS_K8S_REPLICASET_UID =
        e.SEMRESATTRS_K8S_CONTAINER_NAME =
        e.SEMRESATTRS_K8S_POD_NAME =
        e.SEMRESATTRS_K8S_POD_UID =
        e.SEMRESATTRS_K8S_NAMESPACE_NAME =
        e.SEMRESATTRS_K8S_NODE_UID =
        e.SEMRESATTRS_K8S_NODE_NAME =
        e.SEMRESATTRS_K8S_CLUSTER_NAME =
        e.SEMRESATTRS_HOST_IMAGE_VERSION =
        e.SEMRESATTRS_HOST_IMAGE_ID =
        e.SEMRESATTRS_HOST_IMAGE_NAME =
        e.SEMRESATTRS_HOST_ARCH =
        e.SEMRESATTRS_HOST_TYPE =
        e.SEMRESATTRS_HOST_NAME =
        e.SEMRESATTRS_HOST_ID =
        e.SEMRESATTRS_FAAS_MAX_MEMORY =
        e.SEMRESATTRS_FAAS_INSTANCE =
        e.SEMRESATTRS_FAAS_VERSION =
        e.SEMRESATTRS_FAAS_ID =
        e.SEMRESATTRS_FAAS_NAME =
        e.SEMRESATTRS_DEVICE_MODEL_NAME =
        e.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER =
        e.SEMRESATTRS_DEVICE_ID =
        e.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT =
        e.SEMRESATTRS_CONTAINER_IMAGE_TAG =
        e.SEMRESATTRS_CONTAINER_IMAGE_NAME =
        e.SEMRESATTRS_CONTAINER_RUNTIME =
        e.SEMRESATTRS_CONTAINER_ID =
        e.SEMRESATTRS_CONTAINER_NAME =
        e.SEMRESATTRS_AWS_LOG_STREAM_ARNS =
        e.SEMRESATTRS_AWS_LOG_STREAM_NAMES =
        e.SEMRESATTRS_AWS_LOG_GROUP_ARNS =
        e.SEMRESATTRS_AWS_LOG_GROUP_NAMES =
        e.SEMRESATTRS_AWS_EKS_CLUSTER_ARN =
        e.SEMRESATTRS_AWS_ECS_TASK_REVISION =
        e.SEMRESATTRS_AWS_ECS_TASK_FAMILY =
        e.SEMRESATTRS_AWS_ECS_TASK_ARN =
        e.SEMRESATTRS_AWS_ECS_LAUNCHTYPE =
        e.SEMRESATTRS_AWS_ECS_CLUSTER_ARN =
        e.SEMRESATTRS_AWS_ECS_CONTAINER_ARN =
        e.SEMRESATTRS_CLOUD_PLATFORM =
        e.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE =
        e.SEMRESATTRS_CLOUD_REGION =
        e.SEMRESATTRS_CLOUD_ACCOUNT_ID =
        e.SEMRESATTRS_CLOUD_PROVIDER =
          void 0),
      (e.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE =
        e.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE =
        e.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS =
        e.CLOUDPLATFORMVALUES_AZURE_AKS =
        e.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES =
        e.CLOUDPLATFORMVALUES_AZURE_VM =
        e.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK =
        e.CLOUDPLATFORMVALUES_AWS_LAMBDA =
        e.CLOUDPLATFORMVALUES_AWS_EKS =
        e.CLOUDPLATFORMVALUES_AWS_ECS =
        e.CLOUDPLATFORMVALUES_AWS_EC2 =
        e.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC =
        e.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS =
        e.CloudProviderValues =
        e.CLOUDPROVIDERVALUES_GCP =
        e.CLOUDPROVIDERVALUES_AZURE =
        e.CLOUDPROVIDERVALUES_AWS =
        e.CLOUDPROVIDERVALUES_ALIBABA_CLOUD =
        e.SemanticResourceAttributes =
        e.SEMRESATTRS_WEBENGINE_DESCRIPTION =
        e.SEMRESATTRS_WEBENGINE_VERSION =
        e.SEMRESATTRS_WEBENGINE_NAME =
        e.SEMRESATTRS_TELEMETRY_AUTO_VERSION =
        e.SEMRESATTRS_TELEMETRY_SDK_VERSION =
        e.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE =
        e.SEMRESATTRS_TELEMETRY_SDK_NAME =
        e.SEMRESATTRS_SERVICE_VERSION =
        e.SEMRESATTRS_SERVICE_INSTANCE_ID =
        e.SEMRESATTRS_SERVICE_NAMESPACE =
        e.SEMRESATTRS_SERVICE_NAME =
        e.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION =
        e.SEMRESATTRS_PROCESS_RUNTIME_VERSION =
        e.SEMRESATTRS_PROCESS_RUNTIME_NAME =
        e.SEMRESATTRS_PROCESS_OWNER =
        e.SEMRESATTRS_PROCESS_COMMAND_ARGS =
        e.SEMRESATTRS_PROCESS_COMMAND_LINE =
        e.SEMRESATTRS_PROCESS_COMMAND =
        e.SEMRESATTRS_PROCESS_EXECUTABLE_PATH =
        e.SEMRESATTRS_PROCESS_EXECUTABLE_NAME =
        e.SEMRESATTRS_PROCESS_PID =
        e.SEMRESATTRS_OS_VERSION =
        e.SEMRESATTRS_OS_NAME =
        e.SEMRESATTRS_OS_DESCRIPTION =
        e.SEMRESATTRS_OS_TYPE =
        e.SEMRESATTRS_K8S_CRONJOB_NAME =
        e.SEMRESATTRS_K8S_CRONJOB_UID =
        e.SEMRESATTRS_K8S_JOB_NAME =
        e.SEMRESATTRS_K8S_JOB_UID =
        e.SEMRESATTRS_K8S_DAEMONSET_NAME =
        e.SEMRESATTRS_K8S_DAEMONSET_UID =
          void 0),
      (e.TelemetrySdkLanguageValues =
        e.TELEMETRYSDKLANGUAGEVALUES_WEBJS =
        e.TELEMETRYSDKLANGUAGEVALUES_RUBY =
        e.TELEMETRYSDKLANGUAGEVALUES_PYTHON =
        e.TELEMETRYSDKLANGUAGEVALUES_PHP =
        e.TELEMETRYSDKLANGUAGEVALUES_NODEJS =
        e.TELEMETRYSDKLANGUAGEVALUES_JAVA =
        e.TELEMETRYSDKLANGUAGEVALUES_GO =
        e.TELEMETRYSDKLANGUAGEVALUES_ERLANG =
        e.TELEMETRYSDKLANGUAGEVALUES_DOTNET =
        e.TELEMETRYSDKLANGUAGEVALUES_CPP =
        e.OsTypeValues =
        e.OSTYPEVALUES_Z_OS =
        e.OSTYPEVALUES_SOLARIS =
        e.OSTYPEVALUES_AIX =
        e.OSTYPEVALUES_HPUX =
        e.OSTYPEVALUES_DRAGONFLYBSD =
        e.OSTYPEVALUES_OPENBSD =
        e.OSTYPEVALUES_NETBSD =
        e.OSTYPEVALUES_FREEBSD =
        e.OSTYPEVALUES_DARWIN =
        e.OSTYPEVALUES_LINUX =
        e.OSTYPEVALUES_WINDOWS =
        e.HostArchValues =
        e.HOSTARCHVALUES_X86 =
        e.HOSTARCHVALUES_PPC64 =
        e.HOSTARCHVALUES_PPC32 =
        e.HOSTARCHVALUES_IA64 =
        e.HOSTARCHVALUES_ARM64 =
        e.HOSTARCHVALUES_ARM32 =
        e.HOSTARCHVALUES_AMD64 =
        e.AwsEcsLaunchtypeValues =
        e.AWSECSLAUNCHTYPEVALUES_FARGATE =
        e.AWSECSLAUNCHTYPEVALUES_EC2 =
        e.CloudPlatformValues =
        e.CLOUDPLATFORMVALUES_GCP_APP_ENGINE =
        e.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS =
        e.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE =
        e.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN =
          void 0));
    var t = Pi(),
      n = `cloud.provider`,
      r = `cloud.account.id`,
      i = `cloud.region`,
      a = `cloud.availability_zone`,
      o = `cloud.platform`,
      s = `aws.ecs.container.arn`,
      c = `aws.ecs.cluster.arn`,
      l = `aws.ecs.launchtype`,
      u = `aws.ecs.task.arn`,
      d = `aws.ecs.task.family`,
      f = `aws.ecs.task.revision`,
      p = `aws.eks.cluster.arn`,
      m = `aws.log.group.names`,
      h = `aws.log.group.arns`,
      g = `aws.log.stream.names`,
      _ = `aws.log.stream.arns`,
      v = `container.name`,
      y = `container.id`,
      b = `container.runtime`,
      x = `container.image.name`,
      S = `container.image.tag`,
      C = `deployment.environment`,
      w = `device.id`,
      T = `device.model.identifier`,
      E = `device.model.name`,
      ee = `faas.name`,
      D = `faas.id`,
      te = `faas.version`,
      O = `faas.instance`,
      ne = `faas.max_memory`,
      re = `host.id`,
      k = `host.name`,
      A = `host.type`,
      ie = `host.arch`,
      ae = `host.image.name`,
      j = `host.image.id`,
      oe = `host.image.version`,
      se = `k8s.cluster.name`,
      ce = `k8s.node.name`,
      le = `k8s.node.uid`,
      ue = `k8s.namespace.name`,
      de = `k8s.pod.uid`,
      fe = `k8s.pod.name`,
      pe = `k8s.container.name`,
      me = `k8s.replicaset.uid`,
      he = `k8s.replicaset.name`,
      ge = `k8s.deployment.uid`,
      _e = `k8s.deployment.name`,
      M = `k8s.statefulset.uid`,
      ve = `k8s.statefulset.name`,
      ye = `k8s.daemonset.uid`,
      be = `k8s.daemonset.name`,
      xe = `k8s.job.uid`,
      Se = `k8s.job.name`,
      Ce = `k8s.cronjob.uid`,
      we = `k8s.cronjob.name`,
      Te = `os.type`,
      Ee = `os.description`,
      De = `os.name`,
      Oe = `os.version`,
      ke = `process.pid`,
      Ae = `process.executable.name`,
      je = `process.executable.path`,
      Me = `process.command`,
      Ne = `process.command_line`,
      Pe = `process.command_args`,
      Fe = `process.owner`,
      Ie = `process.runtime.name`,
      Le = `process.runtime.version`,
      N = `process.runtime.description`,
      Re = `service.name`,
      ze = `service.namespace`,
      Be = `service.instance.id`,
      Ve = `service.version`,
      He = `telemetry.sdk.name`,
      Ue = `telemetry.sdk.language`,
      We = `telemetry.sdk.version`,
      Ge = `telemetry.auto.version`,
      Ke = `webengine.name`,
      qe = `webengine.version`,
      Je = `webengine.description`;
    ((e.SEMRESATTRS_CLOUD_PROVIDER = n),
      (e.SEMRESATTRS_CLOUD_ACCOUNT_ID = r),
      (e.SEMRESATTRS_CLOUD_REGION = i),
      (e.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = a),
      (e.SEMRESATTRS_CLOUD_PLATFORM = o),
      (e.SEMRESATTRS_AWS_ECS_CONTAINER_ARN = s),
      (e.SEMRESATTRS_AWS_ECS_CLUSTER_ARN = c),
      (e.SEMRESATTRS_AWS_ECS_LAUNCHTYPE = l),
      (e.SEMRESATTRS_AWS_ECS_TASK_ARN = u),
      (e.SEMRESATTRS_AWS_ECS_TASK_FAMILY = d),
      (e.SEMRESATTRS_AWS_ECS_TASK_REVISION = f),
      (e.SEMRESATTRS_AWS_EKS_CLUSTER_ARN = p),
      (e.SEMRESATTRS_AWS_LOG_GROUP_NAMES = m),
      (e.SEMRESATTRS_AWS_LOG_GROUP_ARNS = h),
      (e.SEMRESATTRS_AWS_LOG_STREAM_NAMES = g),
      (e.SEMRESATTRS_AWS_LOG_STREAM_ARNS = _),
      (e.SEMRESATTRS_CONTAINER_NAME = v),
      (e.SEMRESATTRS_CONTAINER_ID = y),
      (e.SEMRESATTRS_CONTAINER_RUNTIME = b),
      (e.SEMRESATTRS_CONTAINER_IMAGE_NAME = x),
      (e.SEMRESATTRS_CONTAINER_IMAGE_TAG = S),
      (e.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = C),
      (e.SEMRESATTRS_DEVICE_ID = w),
      (e.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = T),
      (e.SEMRESATTRS_DEVICE_MODEL_NAME = E),
      (e.SEMRESATTRS_FAAS_NAME = ee),
      (e.SEMRESATTRS_FAAS_ID = D),
      (e.SEMRESATTRS_FAAS_VERSION = te),
      (e.SEMRESATTRS_FAAS_INSTANCE = O),
      (e.SEMRESATTRS_FAAS_MAX_MEMORY = ne),
      (e.SEMRESATTRS_HOST_ID = re),
      (e.SEMRESATTRS_HOST_NAME = k),
      (e.SEMRESATTRS_HOST_TYPE = A),
      (e.SEMRESATTRS_HOST_ARCH = ie),
      (e.SEMRESATTRS_HOST_IMAGE_NAME = ae),
      (e.SEMRESATTRS_HOST_IMAGE_ID = j),
      (e.SEMRESATTRS_HOST_IMAGE_VERSION = oe),
      (e.SEMRESATTRS_K8S_CLUSTER_NAME = se),
      (e.SEMRESATTRS_K8S_NODE_NAME = ce),
      (e.SEMRESATTRS_K8S_NODE_UID = le),
      (e.SEMRESATTRS_K8S_NAMESPACE_NAME = ue),
      (e.SEMRESATTRS_K8S_POD_UID = de),
      (e.SEMRESATTRS_K8S_POD_NAME = fe),
      (e.SEMRESATTRS_K8S_CONTAINER_NAME = pe),
      (e.SEMRESATTRS_K8S_REPLICASET_UID = me),
      (e.SEMRESATTRS_K8S_REPLICASET_NAME = he),
      (e.SEMRESATTRS_K8S_DEPLOYMENT_UID = ge),
      (e.SEMRESATTRS_K8S_DEPLOYMENT_NAME = _e),
      (e.SEMRESATTRS_K8S_STATEFULSET_UID = M),
      (e.SEMRESATTRS_K8S_STATEFULSET_NAME = ve),
      (e.SEMRESATTRS_K8S_DAEMONSET_UID = ye),
      (e.SEMRESATTRS_K8S_DAEMONSET_NAME = be),
      (e.SEMRESATTRS_K8S_JOB_UID = xe),
      (e.SEMRESATTRS_K8S_JOB_NAME = Se),
      (e.SEMRESATTRS_K8S_CRONJOB_UID = Ce),
      (e.SEMRESATTRS_K8S_CRONJOB_NAME = we),
      (e.SEMRESATTRS_OS_TYPE = Te),
      (e.SEMRESATTRS_OS_DESCRIPTION = Ee),
      (e.SEMRESATTRS_OS_NAME = De),
      (e.SEMRESATTRS_OS_VERSION = Oe),
      (e.SEMRESATTRS_PROCESS_PID = ke),
      (e.SEMRESATTRS_PROCESS_EXECUTABLE_NAME = Ae),
      (e.SEMRESATTRS_PROCESS_EXECUTABLE_PATH = je),
      (e.SEMRESATTRS_PROCESS_COMMAND = Me),
      (e.SEMRESATTRS_PROCESS_COMMAND_LINE = Ne),
      (e.SEMRESATTRS_PROCESS_COMMAND_ARGS = Pe),
      (e.SEMRESATTRS_PROCESS_OWNER = Fe),
      (e.SEMRESATTRS_PROCESS_RUNTIME_NAME = Ie),
      (e.SEMRESATTRS_PROCESS_RUNTIME_VERSION = Le),
      (e.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = N),
      (e.SEMRESATTRS_SERVICE_NAME = Re),
      (e.SEMRESATTRS_SERVICE_NAMESPACE = ze),
      (e.SEMRESATTRS_SERVICE_INSTANCE_ID = Be),
      (e.SEMRESATTRS_SERVICE_VERSION = Ve),
      (e.SEMRESATTRS_TELEMETRY_SDK_NAME = He),
      (e.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = Ue),
      (e.SEMRESATTRS_TELEMETRY_SDK_VERSION = We),
      (e.SEMRESATTRS_TELEMETRY_AUTO_VERSION = Ge),
      (e.SEMRESATTRS_WEBENGINE_NAME = Ke),
      (e.SEMRESATTRS_WEBENGINE_VERSION = qe),
      (e.SEMRESATTRS_WEBENGINE_DESCRIPTION = Je),
      (e.SemanticResourceAttributes = (0, t.createConstMap)([
        n,
        r,
        i,
        a,
        o,
        s,
        c,
        l,
        u,
        d,
        f,
        p,
        m,
        h,
        g,
        _,
        v,
        y,
        b,
        x,
        S,
        C,
        w,
        T,
        E,
        ee,
        D,
        te,
        O,
        ne,
        re,
        k,
        A,
        ie,
        ae,
        j,
        oe,
        se,
        ce,
        le,
        ue,
        de,
        fe,
        pe,
        me,
        he,
        ge,
        _e,
        M,
        ve,
        ye,
        be,
        xe,
        Se,
        Ce,
        we,
        Te,
        Ee,
        De,
        Oe,
        ke,
        Ae,
        je,
        Me,
        Ne,
        Pe,
        Fe,
        Ie,
        Le,
        N,
        Re,
        ze,
        Be,
        Ve,
        He,
        Ue,
        We,
        Ge,
        Ke,
        qe,
        Je,
      ])));
    var Ye = `alibaba_cloud`,
      Xe = `aws`,
      Ze = `azure`,
      Qe = `gcp`;
    ((e.CLOUDPROVIDERVALUES_ALIBABA_CLOUD = Ye),
      (e.CLOUDPROVIDERVALUES_AWS = Xe),
      (e.CLOUDPROVIDERVALUES_AZURE = Ze),
      (e.CLOUDPROVIDERVALUES_GCP = Qe),
      (e.CloudProviderValues = (0, t.createConstMap)([Ye, Xe, Ze, Qe])));
    var P = `alibaba_cloud_ecs`,
      $e = `alibaba_cloud_fc`,
      et = `aws_ec2`,
      tt = `aws_ecs`,
      nt = `aws_eks`,
      rt = `aws_lambda`,
      it = `aws_elastic_beanstalk`,
      at = `azure_vm`,
      ot = `azure_container_instances`,
      st = `azure_aks`,
      ct = `azure_functions`,
      lt = `azure_app_service`,
      ut = `gcp_compute_engine`,
      dt = `gcp_cloud_run`,
      ft = `gcp_kubernetes_engine`,
      pt = `gcp_cloud_functions`,
      mt = `gcp_app_engine`;
    ((e.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = P),
      (e.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = $e),
      (e.CLOUDPLATFORMVALUES_AWS_EC2 = et),
      (e.CLOUDPLATFORMVALUES_AWS_ECS = tt),
      (e.CLOUDPLATFORMVALUES_AWS_EKS = nt),
      (e.CLOUDPLATFORMVALUES_AWS_LAMBDA = rt),
      (e.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = it),
      (e.CLOUDPLATFORMVALUES_AZURE_VM = at),
      (e.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = ot),
      (e.CLOUDPLATFORMVALUES_AZURE_AKS = st),
      (e.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = ct),
      (e.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = lt),
      (e.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = ut),
      (e.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = dt),
      (e.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = ft),
      (e.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = pt),
      (e.CLOUDPLATFORMVALUES_GCP_APP_ENGINE = mt),
      (e.CloudPlatformValues = (0, t.createConstMap)([
        P,
        $e,
        et,
        tt,
        nt,
        rt,
        it,
        at,
        ot,
        st,
        ct,
        lt,
        ut,
        dt,
        ft,
        pt,
        mt,
      ])));
    var ht = `ec2`,
      gt = `fargate`;
    ((e.AWSECSLAUNCHTYPEVALUES_EC2 = ht),
      (e.AWSECSLAUNCHTYPEVALUES_FARGATE = gt),
      (e.AwsEcsLaunchtypeValues = (0, t.createConstMap)([ht, gt])));
    var _t = `amd64`,
      vt = `arm32`,
      yt = `arm64`,
      bt = `ia64`,
      xt = `ppc32`,
      St = `ppc64`,
      Ct = `x86`;
    ((e.HOSTARCHVALUES_AMD64 = _t),
      (e.HOSTARCHVALUES_ARM32 = vt),
      (e.HOSTARCHVALUES_ARM64 = yt),
      (e.HOSTARCHVALUES_IA64 = bt),
      (e.HOSTARCHVALUES_PPC32 = xt),
      (e.HOSTARCHVALUES_PPC64 = St),
      (e.HOSTARCHVALUES_X86 = Ct),
      (e.HostArchValues = (0, t.createConstMap)([_t, vt, yt, bt, xt, St, Ct])));
    var wt = `windows`,
      Tt = `linux`,
      Et = `darwin`,
      Dt = `freebsd`,
      Ot = `netbsd`,
      kt = `openbsd`,
      At = `dragonflybsd`,
      jt = `hpux`,
      Mt = `aix`,
      Nt = `solaris`,
      Pt = `z_os`;
    ((e.OSTYPEVALUES_WINDOWS = wt),
      (e.OSTYPEVALUES_LINUX = Tt),
      (e.OSTYPEVALUES_DARWIN = Et),
      (e.OSTYPEVALUES_FREEBSD = Dt),
      (e.OSTYPEVALUES_NETBSD = Ot),
      (e.OSTYPEVALUES_OPENBSD = kt),
      (e.OSTYPEVALUES_DRAGONFLYBSD = At),
      (e.OSTYPEVALUES_HPUX = jt),
      (e.OSTYPEVALUES_AIX = Mt),
      (e.OSTYPEVALUES_SOLARIS = Nt),
      (e.OSTYPEVALUES_Z_OS = Pt),
      (e.OsTypeValues = (0, t.createConstMap)([wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt])));
    var Ft = `cpp`,
      It = `dotnet`,
      Lt = `erlang`,
      Rt = `go`,
      zt = `java`,
      Bt = `nodejs`,
      Vt = `php`,
      Ht = `python`,
      Ut = `ruby`,
      Wt = `webjs`;
    ((e.TELEMETRYSDKLANGUAGEVALUES_CPP = Ft),
      (e.TELEMETRYSDKLANGUAGEVALUES_DOTNET = It),
      (e.TELEMETRYSDKLANGUAGEVALUES_ERLANG = Lt),
      (e.TELEMETRYSDKLANGUAGEVALUES_GO = Rt),
      (e.TELEMETRYSDKLANGUAGEVALUES_JAVA = zt),
      (e.TELEMETRYSDKLANGUAGEVALUES_NODEJS = Bt),
      (e.TELEMETRYSDKLANGUAGEVALUES_PHP = Vt),
      (e.TELEMETRYSDKLANGUAGEVALUES_PYTHON = Ht),
      (e.TELEMETRYSDKLANGUAGEVALUES_RUBY = Ut),
      (e.TELEMETRYSDKLANGUAGEVALUES_WEBJS = Wt),
      (e.TelemetrySdkLanguageValues = (0, t.createConstMap)([Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt])));
  }),
  Ri = e.t((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__exportStar) ||
        function (e, n) {
          for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }), n(Li(), e));
  }),
  zi = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ATTR_EXCEPTION_TYPE =
        e.ATTR_EXCEPTION_STACKTRACE =
        e.ATTR_EXCEPTION_MESSAGE =
        e.ATTR_EXCEPTION_ESCAPED =
        e.ERROR_TYPE_VALUE_OTHER =
        e.ATTR_ERROR_TYPE =
        e.DOTNET_GC_HEAP_GENERATION_VALUE_POH =
        e.DOTNET_GC_HEAP_GENERATION_VALUE_LOH =
        e.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 =
        e.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 =
        e.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 =
        e.ATTR_DOTNET_GC_HEAP_GENERATION =
        e.DB_SYSTEM_NAME_VALUE_POSTGRESQL =
        e.DB_SYSTEM_NAME_VALUE_MYSQL =
        e.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER =
        e.DB_SYSTEM_NAME_VALUE_MARIADB =
        e.ATTR_DB_SYSTEM_NAME =
        e.ATTR_DB_STORED_PROCEDURE_NAME =
        e.ATTR_DB_RESPONSE_STATUS_CODE =
        e.ATTR_DB_QUERY_TEXT =
        e.ATTR_DB_QUERY_SUMMARY =
        e.ATTR_DB_OPERATION_NAME =
        e.ATTR_DB_OPERATION_BATCH_SIZE =
        e.ATTR_DB_NAMESPACE =
        e.ATTR_DB_COLLECTION_NAME =
        e.ATTR_CODE_STACKTRACE =
        e.ATTR_CODE_LINE_NUMBER =
        e.ATTR_CODE_FUNCTION_NAME =
        e.ATTR_CODE_FILE_PATH =
        e.ATTR_CODE_COLUMN_NUMBER =
        e.ATTR_CLIENT_PORT =
        e.ATTR_CLIENT_ADDRESS =
        e.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED =
        e.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS =
        e.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE =
        e.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS =
        e.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK =
        e.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED =
        e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED =
        e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER =
        e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER =
        e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED =
        e.ATTR_ASPNETCORE_RATE_LIMITING_RESULT =
        e.ATTR_ASPNETCORE_RATE_LIMITING_POLICY =
        e.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE =
        e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED =
        e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED =
        e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED =
        e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED =
        e.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT =
          void 0),
      (e.OTEL_STATUS_CODE_VALUE_ERROR =
        e.ATTR_OTEL_STATUS_CODE =
        e.ATTR_OTEL_SCOPE_VERSION =
        e.ATTR_OTEL_SCOPE_NAME =
        e.NETWORK_TYPE_VALUE_IPV6 =
        e.NETWORK_TYPE_VALUE_IPV4 =
        e.ATTR_NETWORK_TYPE =
        e.NETWORK_TRANSPORT_VALUE_UNIX =
        e.NETWORK_TRANSPORT_VALUE_UDP =
        e.NETWORK_TRANSPORT_VALUE_TCP =
        e.NETWORK_TRANSPORT_VALUE_QUIC =
        e.NETWORK_TRANSPORT_VALUE_PIPE =
        e.ATTR_NETWORK_TRANSPORT =
        e.ATTR_NETWORK_PROTOCOL_VERSION =
        e.ATTR_NETWORK_PROTOCOL_NAME =
        e.ATTR_NETWORK_PEER_PORT =
        e.ATTR_NETWORK_PEER_ADDRESS =
        e.ATTR_NETWORK_LOCAL_PORT =
        e.ATTR_NETWORK_LOCAL_ADDRESS =
        e.JVM_THREAD_STATE_VALUE_WAITING =
        e.JVM_THREAD_STATE_VALUE_TIMED_WAITING =
        e.JVM_THREAD_STATE_VALUE_TERMINATED =
        e.JVM_THREAD_STATE_VALUE_RUNNABLE =
        e.JVM_THREAD_STATE_VALUE_NEW =
        e.JVM_THREAD_STATE_VALUE_BLOCKED =
        e.ATTR_JVM_THREAD_STATE =
        e.ATTR_JVM_THREAD_DAEMON =
        e.JVM_MEMORY_TYPE_VALUE_NON_HEAP =
        e.JVM_MEMORY_TYPE_VALUE_HEAP =
        e.ATTR_JVM_MEMORY_TYPE =
        e.ATTR_JVM_MEMORY_POOL_NAME =
        e.ATTR_JVM_GC_NAME =
        e.ATTR_JVM_GC_ACTION =
        e.ATTR_HTTP_ROUTE =
        e.ATTR_HTTP_RESPONSE_STATUS_CODE =
        e.ATTR_HTTP_RESPONSE_HEADER =
        e.ATTR_HTTP_REQUEST_RESEND_COUNT =
        e.ATTR_HTTP_REQUEST_METHOD_ORIGINAL =
        e.HTTP_REQUEST_METHOD_VALUE_TRACE =
        e.HTTP_REQUEST_METHOD_VALUE_PUT =
        e.HTTP_REQUEST_METHOD_VALUE_POST =
        e.HTTP_REQUEST_METHOD_VALUE_PATCH =
        e.HTTP_REQUEST_METHOD_VALUE_OPTIONS =
        e.HTTP_REQUEST_METHOD_VALUE_HEAD =
        e.HTTP_REQUEST_METHOD_VALUE_GET =
        e.HTTP_REQUEST_METHOD_VALUE_DELETE =
        e.HTTP_REQUEST_METHOD_VALUE_CONNECT =
        e.HTTP_REQUEST_METHOD_VALUE_OTHER =
        e.ATTR_HTTP_REQUEST_METHOD =
        e.ATTR_HTTP_REQUEST_HEADER =
          void 0),
      (e.ATTR_USER_AGENT_ORIGINAL =
        e.ATTR_URL_SCHEME =
        e.ATTR_URL_QUERY =
        e.ATTR_URL_PATH =
        e.ATTR_URL_FULL =
        e.ATTR_URL_FRAGMENT =
        e.ATTR_TELEMETRY_SDK_VERSION =
        e.ATTR_TELEMETRY_SDK_NAME =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_RUST =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_PHP =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_GO =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_CPP =
        e.ATTR_TELEMETRY_SDK_LANGUAGE =
        e.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS =
        e.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS =
        e.SIGNALR_TRANSPORT_VALUE_LONG_POLLING =
        e.ATTR_SIGNALR_TRANSPORT =
        e.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT =
        e.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE =
        e.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN =
        e.ATTR_SIGNALR_CONNECTION_STATUS =
        e.ATTR_SERVICE_VERSION =
        e.ATTR_SERVICE_NAME =
        e.ATTR_SERVER_PORT =
        e.ATTR_SERVER_ADDRESS =
        e.ATTR_OTEL_STATUS_DESCRIPTION =
        e.OTEL_STATUS_CODE_VALUE_OK =
          void 0),
      (e.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = `aspnetcore.diagnostics.exception.result`),
      (e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = `aborted`),
      (e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = `handled`),
      (e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = `skipped`),
      (e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = `unhandled`),
      (e.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = `aspnetcore.diagnostics.handler.type`),
      (e.ATTR_ASPNETCORE_RATE_LIMITING_POLICY = `aspnetcore.rate_limiting.policy`),
      (e.ATTR_ASPNETCORE_RATE_LIMITING_RESULT = `aspnetcore.rate_limiting.result`),
      (e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = `acquired`),
      (e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = `endpoint_limiter`),
      (e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = `global_limiter`),
      (e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = `request_canceled`),
      (e.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = `aspnetcore.request.is_unhandled`),
      (e.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = `aspnetcore.routing.is_fallback`),
      (e.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = `aspnetcore.routing.match_status`),
      (e.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = `failure`),
      (e.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = `success`),
      (e.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED = `aspnetcore.user.is_authenticated`),
      (e.ATTR_CLIENT_ADDRESS = `client.address`),
      (e.ATTR_CLIENT_PORT = `client.port`),
      (e.ATTR_CODE_COLUMN_NUMBER = `code.column.number`),
      (e.ATTR_CODE_FILE_PATH = `code.file.path`),
      (e.ATTR_CODE_FUNCTION_NAME = `code.function.name`),
      (e.ATTR_CODE_LINE_NUMBER = `code.line.number`),
      (e.ATTR_CODE_STACKTRACE = `code.stacktrace`),
      (e.ATTR_DB_COLLECTION_NAME = `db.collection.name`),
      (e.ATTR_DB_NAMESPACE = `db.namespace`),
      (e.ATTR_DB_OPERATION_BATCH_SIZE = `db.operation.batch.size`),
      (e.ATTR_DB_OPERATION_NAME = `db.operation.name`),
      (e.ATTR_DB_QUERY_SUMMARY = `db.query.summary`),
      (e.ATTR_DB_QUERY_TEXT = `db.query.text`),
      (e.ATTR_DB_RESPONSE_STATUS_CODE = `db.response.status_code`),
      (e.ATTR_DB_STORED_PROCEDURE_NAME = `db.stored_procedure.name`),
      (e.ATTR_DB_SYSTEM_NAME = `db.system.name`),
      (e.DB_SYSTEM_NAME_VALUE_MARIADB = `mariadb`),
      (e.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER = `microsoft.sql_server`),
      (e.DB_SYSTEM_NAME_VALUE_MYSQL = `mysql`),
      (e.DB_SYSTEM_NAME_VALUE_POSTGRESQL = `postgresql`),
      (e.ATTR_DOTNET_GC_HEAP_GENERATION = `dotnet.gc.heap.generation`),
      (e.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 = `gen0`),
      (e.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 = `gen1`),
      (e.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 = `gen2`),
      (e.DOTNET_GC_HEAP_GENERATION_VALUE_LOH = `loh`),
      (e.DOTNET_GC_HEAP_GENERATION_VALUE_POH = `poh`),
      (e.ATTR_ERROR_TYPE = `error.type`),
      (e.ERROR_TYPE_VALUE_OTHER = `_OTHER`),
      (e.ATTR_EXCEPTION_ESCAPED = `exception.escaped`),
      (e.ATTR_EXCEPTION_MESSAGE = `exception.message`),
      (e.ATTR_EXCEPTION_STACKTRACE = `exception.stacktrace`),
      (e.ATTR_EXCEPTION_TYPE = `exception.type`),
      (e.ATTR_HTTP_REQUEST_HEADER = (e) => `http.request.header.${e}`),
      (e.ATTR_HTTP_REQUEST_METHOD = `http.request.method`),
      (e.HTTP_REQUEST_METHOD_VALUE_OTHER = `_OTHER`),
      (e.HTTP_REQUEST_METHOD_VALUE_CONNECT = `CONNECT`),
      (e.HTTP_REQUEST_METHOD_VALUE_DELETE = `DELETE`),
      (e.HTTP_REQUEST_METHOD_VALUE_GET = `GET`),
      (e.HTTP_REQUEST_METHOD_VALUE_HEAD = `HEAD`),
      (e.HTTP_REQUEST_METHOD_VALUE_OPTIONS = `OPTIONS`),
      (e.HTTP_REQUEST_METHOD_VALUE_PATCH = `PATCH`),
      (e.HTTP_REQUEST_METHOD_VALUE_POST = `POST`),
      (e.HTTP_REQUEST_METHOD_VALUE_PUT = `PUT`),
      (e.HTTP_REQUEST_METHOD_VALUE_TRACE = `TRACE`),
      (e.ATTR_HTTP_REQUEST_METHOD_ORIGINAL = `http.request.method_original`),
      (e.ATTR_HTTP_REQUEST_RESEND_COUNT = `http.request.resend_count`),
      (e.ATTR_HTTP_RESPONSE_HEADER = (e) => `http.response.header.${e}`),
      (e.ATTR_HTTP_RESPONSE_STATUS_CODE = `http.response.status_code`),
      (e.ATTR_HTTP_ROUTE = `http.route`),
      (e.ATTR_JVM_GC_ACTION = `jvm.gc.action`),
      (e.ATTR_JVM_GC_NAME = `jvm.gc.name`),
      (e.ATTR_JVM_MEMORY_POOL_NAME = `jvm.memory.pool.name`),
      (e.ATTR_JVM_MEMORY_TYPE = `jvm.memory.type`),
      (e.JVM_MEMORY_TYPE_VALUE_HEAP = `heap`),
      (e.JVM_MEMORY_TYPE_VALUE_NON_HEAP = `non_heap`),
      (e.ATTR_JVM_THREAD_DAEMON = `jvm.thread.daemon`),
      (e.ATTR_JVM_THREAD_STATE = `jvm.thread.state`),
      (e.JVM_THREAD_STATE_VALUE_BLOCKED = `blocked`),
      (e.JVM_THREAD_STATE_VALUE_NEW = `new`),
      (e.JVM_THREAD_STATE_VALUE_RUNNABLE = `runnable`),
      (e.JVM_THREAD_STATE_VALUE_TERMINATED = `terminated`),
      (e.JVM_THREAD_STATE_VALUE_TIMED_WAITING = `timed_waiting`),
      (e.JVM_THREAD_STATE_VALUE_WAITING = `waiting`),
      (e.ATTR_NETWORK_LOCAL_ADDRESS = `network.local.address`),
      (e.ATTR_NETWORK_LOCAL_PORT = `network.local.port`),
      (e.ATTR_NETWORK_PEER_ADDRESS = `network.peer.address`),
      (e.ATTR_NETWORK_PEER_PORT = `network.peer.port`),
      (e.ATTR_NETWORK_PROTOCOL_NAME = `network.protocol.name`),
      (e.ATTR_NETWORK_PROTOCOL_VERSION = `network.protocol.version`),
      (e.ATTR_NETWORK_TRANSPORT = `network.transport`),
      (e.NETWORK_TRANSPORT_VALUE_PIPE = `pipe`),
      (e.NETWORK_TRANSPORT_VALUE_QUIC = `quic`),
      (e.NETWORK_TRANSPORT_VALUE_TCP = `tcp`),
      (e.NETWORK_TRANSPORT_VALUE_UDP = `udp`),
      (e.NETWORK_TRANSPORT_VALUE_UNIX = `unix`),
      (e.ATTR_NETWORK_TYPE = `network.type`),
      (e.NETWORK_TYPE_VALUE_IPV4 = `ipv4`),
      (e.NETWORK_TYPE_VALUE_IPV6 = `ipv6`),
      (e.ATTR_OTEL_SCOPE_NAME = `otel.scope.name`),
      (e.ATTR_OTEL_SCOPE_VERSION = `otel.scope.version`),
      (e.ATTR_OTEL_STATUS_CODE = `otel.status_code`),
      (e.OTEL_STATUS_CODE_VALUE_ERROR = `ERROR`),
      (e.OTEL_STATUS_CODE_VALUE_OK = `OK`),
      (e.ATTR_OTEL_STATUS_DESCRIPTION = `otel.status_description`),
      (e.ATTR_SERVER_ADDRESS = `server.address`),
      (e.ATTR_SERVER_PORT = `server.port`),
      (e.ATTR_SERVICE_NAME = `service.name`),
      (e.ATTR_SERVICE_VERSION = `service.version`),
      (e.ATTR_SIGNALR_CONNECTION_STATUS = `signalr.connection.status`),
      (e.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = `app_shutdown`),
      (e.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = `normal_closure`),
      (e.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = `timeout`),
      (e.ATTR_SIGNALR_TRANSPORT = `signalr.transport`),
      (e.SIGNALR_TRANSPORT_VALUE_LONG_POLLING = `long_polling`),
      (e.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = `server_sent_events`),
      (e.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = `web_sockets`),
      (e.ATTR_TELEMETRY_SDK_LANGUAGE = `telemetry.sdk.language`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_CPP = `cpp`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = `dotnet`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = `erlang`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_GO = `go`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = `java`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = `nodejs`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_PHP = `php`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = `python`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = `ruby`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_RUST = `rust`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = `swift`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = `webjs`),
      (e.ATTR_TELEMETRY_SDK_NAME = `telemetry.sdk.name`),
      (e.ATTR_TELEMETRY_SDK_VERSION = `telemetry.sdk.version`),
      (e.ATTR_URL_FRAGMENT = `url.fragment`),
      (e.ATTR_URL_FULL = `url.full`),
      (e.ATTR_URL_PATH = `url.path`),
      (e.ATTR_URL_QUERY = `url.query`),
      (e.ATTR_URL_SCHEME = `url.scheme`),
      (e.ATTR_USER_AGENT_ORIGINAL = `user_agent.original`));
  }),
  Bi = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS =
        e.METRIC_KESTREL_UPGRADED_CONNECTIONS =
        e.METRIC_KESTREL_TLS_HANDSHAKE_DURATION =
        e.METRIC_KESTREL_REJECTED_CONNECTIONS =
        e.METRIC_KESTREL_QUEUED_REQUESTS =
        e.METRIC_KESTREL_QUEUED_CONNECTIONS =
        e.METRIC_KESTREL_CONNECTION_DURATION =
        e.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES =
        e.METRIC_KESTREL_ACTIVE_CONNECTIONS =
        e.METRIC_JVM_THREAD_COUNT =
        e.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC =
        e.METRIC_JVM_MEMORY_USED =
        e.METRIC_JVM_MEMORY_LIMIT =
        e.METRIC_JVM_MEMORY_COMMITTED =
        e.METRIC_JVM_GC_DURATION =
        e.METRIC_JVM_CPU_TIME =
        e.METRIC_JVM_CPU_RECENT_UTILIZATION =
        e.METRIC_JVM_CPU_COUNT =
        e.METRIC_JVM_CLASS_UNLOADED =
        e.METRIC_JVM_CLASS_LOADED =
        e.METRIC_JVM_CLASS_COUNT =
        e.METRIC_HTTP_SERVER_REQUEST_DURATION =
        e.METRIC_HTTP_CLIENT_REQUEST_DURATION =
        e.METRIC_DOTNET_TIMER_COUNT =
        e.METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT =
        e.METRIC_DOTNET_THREAD_POOL_THREAD_COUNT =
        e.METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH =
        e.METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET =
        e.METRIC_DOTNET_PROCESS_CPU_TIME =
        e.METRIC_DOTNET_PROCESS_CPU_COUNT =
        e.METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS =
        e.METRIC_DOTNET_JIT_COMPILED_METHODS =
        e.METRIC_DOTNET_JIT_COMPILED_IL_SIZE =
        e.METRIC_DOTNET_JIT_COMPILATION_TIME =
        e.METRIC_DOTNET_GC_PAUSE_TIME =
        e.METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE =
        e.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE =
        e.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE =
        e.METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED =
        e.METRIC_DOTNET_GC_COLLECTIONS =
        e.METRIC_DOTNET_EXCEPTIONS =
        e.METRIC_DOTNET_ASSEMBLY_COUNT =
        e.METRIC_DB_CLIENT_OPERATION_DURATION =
        e.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS =
        e.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS =
        e.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION =
        e.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE =
        e.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS =
        e.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES =
        e.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS =
          void 0),
      (e.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = void 0),
      (e.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS = `aspnetcore.diagnostics.exceptions`),
      (e.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES = `aspnetcore.rate_limiting.active_request_leases`),
      (e.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS = `aspnetcore.rate_limiting.queued_requests`),
      (e.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE = `aspnetcore.rate_limiting.request.time_in_queue`),
      (e.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION = `aspnetcore.rate_limiting.request_lease.duration`),
      (e.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS = `aspnetcore.rate_limiting.requests`),
      (e.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS = `aspnetcore.routing.match_attempts`),
      (e.METRIC_DB_CLIENT_OPERATION_DURATION = `db.client.operation.duration`),
      (e.METRIC_DOTNET_ASSEMBLY_COUNT = `dotnet.assembly.count`),
      (e.METRIC_DOTNET_EXCEPTIONS = `dotnet.exceptions`),
      (e.METRIC_DOTNET_GC_COLLECTIONS = `dotnet.gc.collections`),
      (e.METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED = `dotnet.gc.heap.total_allocated`),
      (e.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE = `dotnet.gc.last_collection.heap.fragmentation.size`),
      (e.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE = `dotnet.gc.last_collection.heap.size`),
      (e.METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE = `dotnet.gc.last_collection.memory.committed_size`),
      (e.METRIC_DOTNET_GC_PAUSE_TIME = `dotnet.gc.pause.time`),
      (e.METRIC_DOTNET_JIT_COMPILATION_TIME = `dotnet.jit.compilation.time`),
      (e.METRIC_DOTNET_JIT_COMPILED_IL_SIZE = `dotnet.jit.compiled_il.size`),
      (e.METRIC_DOTNET_JIT_COMPILED_METHODS = `dotnet.jit.compiled_methods`),
      (e.METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS = `dotnet.monitor.lock_contentions`),
      (e.METRIC_DOTNET_PROCESS_CPU_COUNT = `dotnet.process.cpu.count`),
      (e.METRIC_DOTNET_PROCESS_CPU_TIME = `dotnet.process.cpu.time`),
      (e.METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET = `dotnet.process.memory.working_set`),
      (e.METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH = `dotnet.thread_pool.queue.length`),
      (e.METRIC_DOTNET_THREAD_POOL_THREAD_COUNT = `dotnet.thread_pool.thread.count`),
      (e.METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT = `dotnet.thread_pool.work_item.count`),
      (e.METRIC_DOTNET_TIMER_COUNT = `dotnet.timer.count`),
      (e.METRIC_HTTP_CLIENT_REQUEST_DURATION = `http.client.request.duration`),
      (e.METRIC_HTTP_SERVER_REQUEST_DURATION = `http.server.request.duration`),
      (e.METRIC_JVM_CLASS_COUNT = `jvm.class.count`),
      (e.METRIC_JVM_CLASS_LOADED = `jvm.class.loaded`),
      (e.METRIC_JVM_CLASS_UNLOADED = `jvm.class.unloaded`),
      (e.METRIC_JVM_CPU_COUNT = `jvm.cpu.count`),
      (e.METRIC_JVM_CPU_RECENT_UTILIZATION = `jvm.cpu.recent_utilization`),
      (e.METRIC_JVM_CPU_TIME = `jvm.cpu.time`),
      (e.METRIC_JVM_GC_DURATION = `jvm.gc.duration`),
      (e.METRIC_JVM_MEMORY_COMMITTED = `jvm.memory.committed`),
      (e.METRIC_JVM_MEMORY_LIMIT = `jvm.memory.limit`),
      (e.METRIC_JVM_MEMORY_USED = `jvm.memory.used`),
      (e.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC = `jvm.memory.used_after_last_gc`),
      (e.METRIC_JVM_THREAD_COUNT = `jvm.thread.count`),
      (e.METRIC_KESTREL_ACTIVE_CONNECTIONS = `kestrel.active_connections`),
      (e.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES = `kestrel.active_tls_handshakes`),
      (e.METRIC_KESTREL_CONNECTION_DURATION = `kestrel.connection.duration`),
      (e.METRIC_KESTREL_QUEUED_CONNECTIONS = `kestrel.queued_connections`),
      (e.METRIC_KESTREL_QUEUED_REQUESTS = `kestrel.queued_requests`),
      (e.METRIC_KESTREL_REJECTED_CONNECTIONS = `kestrel.rejected_connections`),
      (e.METRIC_KESTREL_TLS_HANDSHAKE_DURATION = `kestrel.tls_handshake.duration`),
      (e.METRIC_KESTREL_UPGRADED_CONNECTIONS = `kestrel.upgraded_connections`),
      (e.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS = `signalr.server.active_connections`),
      (e.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = `signalr.server.connection.duration`));
  }),
  Vi = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.EVENT_EXCEPTION = void 0),
      (e.EVENT_EXCEPTION = `exception`));
  }),
  Hi = e.t((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__exportStar) ||
        function (e, n) {
          for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      n(Ii(), e),
      n(Ri(), e),
      n(zi(), e),
      n(Bi(), e),
      n(Vi(), e));
  }),
  Ui,
  Wi = e.n(() => {
    Ui = `process.runtime.name`;
  }),
  Gi,
  Ki,
  qi = e.n(() => {
    (Ni(),
      (Gi = Hi()),
      Wi(),
      (Ki = {
        [Gi.ATTR_TELEMETRY_SDK_NAME]: `opentelemetry`,
        [Ui]: `node`,
        [Gi.ATTR_TELEMETRY_SDK_LANGUAGE]: Gi.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS,
        [Gi.ATTR_TELEMETRY_SDK_VERSION]: Mi,
      }));
  }),
  Ji = e.n(() => {
    (Di(), ki(), ji(), qi());
  }),
  Yi = e.n(() => {
    Ji();
  });
function Xi(e) {
  let t = e / 1e3;
  return [Math.trunc(t), Math.round((e % 1e3) * la)];
}
function Zi() {
  let e = Ai.timeOrigin;
  if (typeof e != `number`) {
    let t = Ai;
    e = t.timing && t.timing.fetchStart;
  }
  return e;
}
function Qi(e) {
  return sa(Xi(Zi()), Xi(typeof e == `number` ? e : Ai.now()));
}
function $i(e) {
  if (aa(e)) return e;
  if (typeof e == `number`) return e < Zi() ? Qi(e) : Xi(e);
  if (e instanceof Date) return Xi(e.getTime());
  throw TypeError(`Invalid input type`);
}
function ea(e, t) {
  let n = t[0] - e[0],
    r = t[1] - e[1];
  return (r < 0 && (--n, (r += ua)), [n, r]);
}
function ta(e) {
  let t = ca,
    n = `${`0`.repeat(t)}${e[1]}Z`,
    r = n.substring(n.length - t - 1);
  return new Date(e[0] * 1e3).toISOString().replace(`000Z`, r);
}
function na(e) {
  return e[0] * ua + e[1];
}
function ra(e) {
  return e[0] * 1e3 + e[1] / 1e6;
}
function ia(e) {
  return e[0] * 1e6 + e[1] / 1e3;
}
function aa(e) {
  return Array.isArray(e) && e.length === 2 && typeof e[0] == `number` && typeof e[1] == `number`;
}
function oa(e) {
  return aa(e) || typeof e == `number` || e instanceof Date;
}
function sa(e, t) {
  let n = [e[0] + t[0], e[1] + t[1]];
  return (n[1] >= ua && ((n[1] -= ua), (n[0] += 1)), n);
}
var ca,
  la,
  ua,
  da = e.n(() => {
    (Yi(), (ca = 9), (la = 10 ** 6), (ua = 10 ** ca));
  });
function fa(e) {
  typeof e != `number` && e.unref();
}
var pa = e.n(() => {}),
  ma,
  ha = e.n(() => {
    (function (e) {
      ((e[(e.SUCCESS = 0)] = `SUCCESS`), (e[(e.FAILED = 1)] = `FAILED`));
    })((ma ||= {}));
  }),
  ga,
  _a,
  va = e.n(() => {
    ((ga = e.a(F())),
      (_a = class {
        _propagators;
        _fields;
        constructor(e = {}) {
          ((this._propagators = e.propagators ?? []),
            (this._fields = Array.from(
              new Set(
                this._propagators
                  .map((e) => (typeof e.fields == `function` ? e.fields() : []))
                  .reduce((e, t) => e.concat(t), []),
              ),
            )));
        }
        inject(e, t, n) {
          for (let r of this._propagators)
            try {
              r.inject(e, t, n);
            } catch (e) {
              ga.diag.warn(`Failed to inject with ${r.constructor.name}. Err: ${e.message}`);
            }
        }
        extract(e, t, n) {
          return this._propagators.reduce((e, r) => {
            try {
              return r.extract(e, t, n);
            } catch (e) {
              ga.diag.warn(`Failed to extract with ${r.constructor.name}. Err: ${e.message}`);
            }
            return e;
          }, e);
        }
        fields() {
          return this._fields.slice();
        }
      }));
  });
function ya(e) {
  return Sa.test(e);
}
function ba(e) {
  return Ca.test(e) && !wa.test(e);
}
var xa,
  Sa,
  Ca,
  wa,
  Ta = e.n(() => {
    ((xa = `[_0-9a-z-*/]`),
      (Sa = RegExp(`^(?:${`[a-z]${xa}{0,255}`}|${`[a-z0-9]${xa}{0,240}@[a-z]${xa}{0,13}`})$`)),
      (Ca = /^[ -~]{0,255}[!-~]$/),
      (wa = /,|=/));
  }),
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja = e.n(() => {
    (Ta(),
      (Ea = 32),
      (Da = 512),
      (Oa = `,`),
      (ka = `=`),
      (Aa = class e {
        _internalState = new Map();
        constructor(e) {
          e && this._parse(e);
        }
        set(e, t) {
          let n = this._clone();
          return (n._internalState.has(e) && n._internalState.delete(e), n._internalState.set(e, t), n);
        }
        unset(e) {
          let t = this._clone();
          return (t._internalState.delete(e), t);
        }
        get(e) {
          return this._internalState.get(e);
        }
        serialize() {
          return this._keys()
            .reduce((e, t) => (e.push(t + ka + this.get(t)), e), [])
            .join(Oa);
        }
        _parse(e) {
          e.length > Da ||
            ((this._internalState = e
              .split(Oa)
              .reverse()
              .reduce((e, t) => {
                let n = t.trim(),
                  r = n.indexOf(ka);
                if (r !== -1) {
                  let i = n.slice(0, r),
                    a = n.slice(r + 1, t.length);
                  ya(i) && ba(a) && e.set(i, a);
                }
                return e;
              }, new Map())),
            this._internalState.size > Ea &&
              (this._internalState = new Map(
                Array.from(this._internalState.entries()).reverse().slice(0, Ea),
              )));
        }
        _keys() {
          return Array.from(this._internalState.keys()).reverse();
        }
        _clone() {
          let t = new e();
          return ((t._internalState = new Map(this._internalState)), t);
        }
      }));
  });
function Ma(e) {
  let t = La.exec(e);
  return !t || (t[1] === `00` && t[5])
    ? null
    : { traceId: t[2], spanId: t[3], traceFlags: parseInt(t[4], 16) };
}
var Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra,
  za = e.n(() => {
    ((Na = e.a(F())),
      Kr(),
      ja(),
      (Pa = `traceparent`),
      (Fa = `tracestate`),
      (Ia = `00`),
      (La = RegExp(
        `^\\s?((?!ff)[\\da-f]{2})-((?![0]{32})[\\da-f]{32})-((?![0]{16})[\\da-f]{16})-([\\da-f]{2})(-.*)?\\s?$`,
      )),
      (Ra = class {
        inject(e, t, n) {
          let r = Na.trace.getSpanContext(e);
          if (!r || Ur(e) || !(0, Na.isSpanContextValid)(r)) return;
          let i = `${Ia}-${r.traceId}-${r.spanId}-0${Number(r.traceFlags || Na.TraceFlags.NONE).toString(16)}`;
          (n.set(t, Pa, i), r.traceState && n.set(t, Fa, r.traceState.serialize()));
        }
        extract(e, t, n) {
          let r = n.get(t, Pa);
          if (!r) return e;
          let i = Array.isArray(r) ? r[0] : r;
          if (typeof i != `string`) return e;
          let a = Ma(i);
          if (!a) return e;
          a.isRemote = !0;
          let o = n.get(t, Fa);
          if (o) {
            let e = Array.isArray(o) ? o.join(`,`) : o;
            a.traceState = new Aa(typeof e == `string` ? e : void 0);
          }
          return Na.trace.setSpanContext(e, a);
        }
        fields() {
          return [Pa, Fa];
        }
      }));
  });
function Ba(e, t) {
  return e.setValue(Wa, t);
}
function Va(e) {
  return e.deleteValue(Wa);
}
function Ha(e) {
  return e.getValue(Wa);
}
var Ua,
  Wa,
  Ga,
  Ka = e.n(() => {
    ((Ua = e.a(F())),
      (Wa = (0, Ua.createContextKey)(`OpenTelemetry SDK Context Key RPC_METADATA`)),
      (function (e) {
        e.HTTP = `http`;
      })((Ga ||= {})));
  });
function qa(e) {
  if (!Ja(e) || Ya(e) !== Qa) return !1;
  let t = ro(e);
  if (t === null) return !0;
  let n = ao.call(t, `constructor`) && t.constructor;
  return typeof n == `function` && n instanceof n && to.call(n) === no;
}
function Ja(e) {
  return typeof e == `object` && !!e;
}
function Ya(e) {
  return e == null ? (e === void 0 ? eo : $a) : oo && oo in Object(e) ? Xa(e) : Za(e);
}
function Xa(e) {
  let t = ao.call(e, oo),
    n = e[oo],
    r = !1;
  try {
    ((e[oo] = void 0), (r = !0));
  } catch {}
  let i = so.call(e);
  return (r && (t ? (e[oo] = n) : delete e[oo]), i);
}
function Za(e) {
  return so.call(e);
}
var Qa,
  $a,
  eo,
  to,
  no,
  ro,
  io,
  ao,
  oo,
  so,
  co = e.n(() => {
    ((Qa = `[object Object]`),
      ($a = `[object Null]`),
      (eo = `[object Undefined]`),
      (to = Function.prototype.toString),
      (no = to.call(Object)),
      (ro = Object.getPrototypeOf),
      (io = Object.prototype),
      (ao = io.hasOwnProperty),
      (oo = Symbol ? Symbol.toStringTag : void 0),
      (so = io.toString));
  });
function lo(...e) {
  let t = e.shift(),
    n = new WeakMap();
  for (; e.length > 0;) t = fo(t, e.shift(), 0, n);
  return t;
}
function uo(e) {
  return mo(e) ? e.slice() : e;
}
function fo(e, t, n = 0, r) {
  let i;
  if (!(n > yo)) {
    if ((n++, _o(e) || _o(t) || ho(t))) i = uo(t);
    else if (mo(e)) {
      if (((i = e.slice()), mo(t))) for (let e = 0, n = t.length; e < n; e++) i.push(uo(t[e]));
      else if (go(t)) {
        let e = Object.keys(t);
        for (let n = 0, r = e.length; n < r; n++) {
          let r = e[n];
          i[r] = uo(t[r]);
        }
      }
    } else if (go(e)) {
      if (go(t)) {
        if (!vo(e, t)) return t;
        i = Object.assign({}, e);
        let a = Object.keys(t);
        for (let o = 0, s = a.length; o < s; o++) {
          let s = a[o],
            c = t[s];
          if (_o(c)) c === void 0 ? delete i[s] : (i[s] = c);
          else {
            let a = i[s],
              o = c;
            if (po(e, s, r) || po(t, s, r)) delete i[s];
            else {
              if (go(a) && go(o)) {
                let n = r.get(a) || [],
                  i = r.get(o) || [];
                (n.push({ obj: e, key: s }), i.push({ obj: t, key: s }), r.set(a, n), r.set(o, i));
              }
              i[s] = fo(i[s], c, n, r);
            }
          }
        }
      } else i = t;
    }
    return i;
  }
}
function po(e, t, n) {
  let r = n.get(e[t]) || [];
  for (let n = 0, i = r.length; n < i; n++) {
    let i = r[n];
    if (i.key === t && i.obj === e) return !0;
  }
  return !1;
}
function mo(e) {
  return Array.isArray(e);
}
function ho(e) {
  return typeof e == `function`;
}
function go(e) {
  return !_o(e) && !mo(e) && !ho(e) && typeof e == `object`;
}
function _o(e) {
  return (
    typeof e == `string` ||
    typeof e == `number` ||
    typeof e == `boolean` ||
    e === void 0 ||
    e instanceof Date ||
    e instanceof RegExp ||
    e === null
  );
}
function vo(e, t) {
  return !(!qa(e) || !qa(t));
}
var yo,
  bo = e.n(() => {
    (co(), (yo = 20));
  });
function xo(e, t) {
  let n,
    r = new Promise(function (e, r) {
      n = setTimeout(function () {
        r(new So(`Operation timed out.`));
      }, t);
    });
  return Promise.race([e, r]).then(
    (e) => (clearTimeout(n), e),
    (e) => {
      throw (clearTimeout(n), e);
    },
  );
}
var So,
  Co = e.n(() => {
    So = class e extends Error {
      constructor(t) {
        (super(t), Object.setPrototypeOf(this, e.prototype));
      }
    };
  });
function wo(e, t) {
  return typeof t == `string` ? e === t : !!e.match(t);
}
function To(e, t) {
  if (!t) return !1;
  for (let n of t) if (wo(e, n)) return !0;
  return !1;
}
var Eo = e.n(() => {}),
  Do,
  Oo = e.n(() => {
    Do = class {
      _promise;
      _resolve;
      _reject;
      constructor() {
        this._promise = new Promise((e, t) => {
          ((this._resolve = e), (this._reject = t));
        });
      }
      get promise() {
        return this._promise;
      }
      resolve(e) {
        this._resolve(e);
      }
      reject(e) {
        this._reject(e);
      }
    };
  }),
  ko,
  Ao = e.n(() => {
    (Oo(),
      (ko = class {
        _callback;
        _that;
        _isCalled = !1;
        _deferred = new Do();
        constructor(e, t) {
          ((this._callback = e), (this._that = t));
        }
        get isCalled() {
          return this._isCalled;
        }
        get promise() {
          return this._deferred.promise;
        }
        call(...e) {
          if (!this._isCalled) {
            this._isCalled = !0;
            try {
              Promise.resolve(this._callback.call(this._that, ...e)).then(
                (e) => this._deferred.resolve(e),
                (e) => this._deferred.reject(e),
              );
            } catch (e) {
              this._deferred.reject(e);
            }
          }
          return this._deferred.promise;
        }
      }));
  });
function jo(e) {
  return e == null
    ? void 0
    : (No[e.toUpperCase()] ??
        (Mo.diag.warn(`Unknown log level "${e}", expected one of ${Object.keys(No)}, using default`),
        Mo.DiagLogLevel.INFO));
}
var Mo,
  No,
  Po = e.n(() => {
    ((Mo = e.a(F())),
      (No = {
        ALL: Mo.DiagLogLevel.ALL,
        VERBOSE: Mo.DiagLogLevel.VERBOSE,
        DEBUG: Mo.DiagLogLevel.DEBUG,
        INFO: Mo.DiagLogLevel.INFO,
        WARN: Mo.DiagLogLevel.WARN,
        ERROR: Mo.DiagLogLevel.ERROR,
        NONE: Mo.DiagLogLevel.NONE,
      }));
  });
function Fo(e, t) {
  return new Promise((n) => {
    Io.context.with(Vr(Io.context.active()), () => {
      e.export(t, (e) => {
        n(e);
      });
    });
  });
}
var Io,
  Lo = e.n(() => {
    ((Io = e.a(F())), Kr());
  }),
  Ro = e.r({
    AnchoredClock: () => ai,
    BindOnceFuture: () => ko,
    CompositePropagator: () => _a,
    ExportResultCode: () => ma,
    RPCType: () => Ga,
    SDK_INFO: () => Ki,
    TRACE_PARENT_HEADER: () => Pa,
    TRACE_STATE_HEADER: () => Fa,
    TimeoutError: () => So,
    TraceState: () => Aa,
    W3CBaggagePropagator: () => ri,
    W3CTraceContextPropagator: () => Ra,
    _globalThis: () => Oi,
    addHrTimes: () => sa,
    callWithTimeout: () => xo,
    deleteRPCMetadata: () => Va,
    diagLogLevelFromString: () => jo,
    getBooleanFromEnv: () => wi,
    getNumberFromEnv: () => I,
    getRPCMetadata: () => Ha,
    getStringFromEnv: () => Ci,
    getStringListFromEnv: () => Ti,
    getTimeOrigin: () => Zi,
    globalErrorHandler: () => bi,
    hrTime: () => Qi,
    hrTimeDuration: () => ea,
    hrTimeToMicroseconds: () => ia,
    hrTimeToMilliseconds: () => ra,
    hrTimeToNanoseconds: () => na,
    hrTimeToTimeStamp: () => ta,
    internal: () => zo,
    isAttributeValue: () => li,
    isTimeInput: () => oa,
    isTimeInputHrTime: () => aa,
    isTracingSuppressed: () => Ur,
    isUrlIgnored: () => To,
    loggingErrorHandler: () => mi,
    merge: () => lo,
    millisToHrTime: () => Xi,
    otperformance: () => Ai,
    parseKeyPairsIntoRecord: () => $r,
    parseTraceParent: () => Ma,
    sanitizeAttributes: () => si,
    setGlobalErrorHandler: () => yi,
    setRPCMetadata: () => Ba,
    suppressTracing: () => Vr,
    timeInputToHrTime: () => $i,
    unrefTimer: () => fa,
    unsuppressTracing: () => Hr,
    urlMatches: () => wo,
  }),
  zo,
  L = e.n(() => {
    (ii(),
      oi(),
      pi(),
      Si(),
      vi(),
      da(),
      pa(),
      ha(),
      ti(),
      Yi(),
      va(),
      za(),
      Ka(),
      Kr(),
      ja(),
      bo(),
      Co(),
      Eo(),
      Ao(),
      Po(),
      Lo(),
      (zo = { _export: Fo }));
  }),
  Bo,
  Vo,
  Ho = e.n(() => {
    ((Bo = class {
      emit(e) {}
    }),
      (Vo = new Bo()));
  }),
  Uo,
  Wo,
  Go = e.n(() => {
    (Ho(),
      (Uo = class {
        getLogger(e, t, n) {
          return new Bo();
        }
      }),
      (Wo = new Uo()));
  }),
  Ko,
  qo = e.n(() => {
    (Ho(),
      (Ko = class {
        constructor(e, t, n, r) {
          ((this._provider = e), (this.name = t), (this.version = n), (this.options = r));
        }
        emit(e) {
          this._getLogger().emit(e);
        }
        _getLogger() {
          if (this._delegate) return this._delegate;
          let e = this._provider._getDelegateLogger(this.name, this.version, this.options);
          return e ? ((this._delegate = e), this._delegate) : Vo;
        }
      }));
  }),
  Jo,
  Yo = e.n(() => {
    (Go(),
      qo(),
      (Jo = class {
        getLogger(e, t, n) {
          return this._getDelegateLogger(e, t, n) ?? new Ko(this, e, t, n);
        }
        _getDelegate() {
          return this._delegate ?? Wo;
        }
        _setDelegate(e) {
          this._delegate = e;
        }
        _getDelegateLogger(e, t, n) {
          return this._delegate?.getLogger(e, t, n);
        }
      }));
  }),
  Xo,
  Zo = e.n(() => {
    Xo = typeof globalThis == `object` ? globalThis : global;
  }),
  Qo = e.n(() => {
    Zo();
  }),
  $o = e.n(() => {
    Qo();
  });
function es(e, t, n) {
  return (r) => (r === e ? t : n);
}
var ts,
  ns,
  rs = e.n(() => {
    ($o(), (ts = Symbol.for(`io.opentelemetry.js.api.logs`)), (ns = Xo));
  }),
  is,
  as = e.n(() => {
    (rs(),
      Go(),
      Yo(),
      (is = class e {
        constructor() {
          this._proxyLoggerProvider = new Jo();
        }
        static getInstance() {
          return ((this._instance ||= new e()), this._instance);
        }
        setGlobalLoggerProvider(e) {
          return ns[ts]
            ? this.getLoggerProvider()
            : ((ns[ts] = es(1, e, Wo)), this._proxyLoggerProvider._setDelegate(e), e);
        }
        getLoggerProvider() {
          return ns[ts]?.call(ns, 1) ?? this._proxyLoggerProvider;
        }
        getLogger(e, t, n) {
          return this.getLoggerProvider().getLogger(e, t, n);
        }
        disable() {
          (delete ns[ts], (this._proxyLoggerProvider = new Jo()));
        }
      }));
  }),
  os,
  ss = e.n(() => {
    (Ho(), Yo(), as(), (os = is.getInstance()));
  });
function cs(e, t, n, r) {
  for (let i = 0, a = e.length; i < a; i++) {
    let a = e[i];
    (t && a.setTracerProvider(t),
      n && a.setMeterProvider(n),
      r && a.setLoggerProvider && a.setLoggerProvider(r),
      a.getConfig().enabled || a.enable());
  }
}
function ls(e) {
  e.forEach((e) => e.disable());
}
var us = e.n(() => {});
function ds(e) {
  let t = e.tracerProvider || fs.trace.getTracerProvider(),
    n = e.meterProvider || fs.metrics.getMeterProvider(),
    r = e.loggerProvider || os.getLoggerProvider(),
    i = e.instrumentations?.flat() ?? [];
  return (
    cs(i, t, n, r),
    () => {
      ls(i);
    }
  );
}
var fs,
  ps = e.n(() => {
    ((fs = e.a(F())), ss(), us());
  });
function ms(e, t, n) {
  if (!hs(e)) return (Ms.diag.error(`Invalid version: ${e}`), !1);
  if (!t) return !0;
  t = t.replace(/([<>=~^]+)\s+/g, `$1`);
  let r = xs(e);
  if (!r) return !1;
  let i = [],
    a = gs(r, t, i, n);
  return a && !n?.includePrerelease ? ys(r, i) : a;
}
function hs(e) {
  return typeof e == `string` && Ns.test(e);
}
function gs(e, t, n, r) {
  if (t.includes(`||`)) {
    let i = t.trim().split(`||`);
    for (let t of i) if (_s(e, t, n, r)) return !0;
    return !1;
  }
  if (t.includes(` - `)) t = js(t, r);
  else if (t.includes(` `)) {
    let i = t
      .trim()
      .replace(/\s{2,}/g, ` `)
      .split(` `);
    for (let t of i) if (!_s(e, t, n, r)) return !1;
    return !0;
  }
  return _s(e, t, n, r);
}
function _s(e, t, n, r) {
  if (((t = bs(t, r)), t.includes(` `))) return gs(e, t, n, r);
  {
    let r = Ss(t);
    return (n.push(r), vs(e, r));
  }
}
function vs(e, t) {
  if (t.invalid) return !1;
  if (!t.version || Cs(t.version)) return !0;
  let n = Ds(e.versionSegments || [], t.versionSegments || []);
  if (n === 0) {
    let r = e.prereleaseSegments || [],
      i = t.prereleaseSegments || [];
    n = !r.length && !i.length ? 0 : !r.length && i.length ? 1 : r.length && !i.length ? -1 : Ds(r, i);
  }
  return Fs[t.op]?.includes(n);
}
function ys(e, t) {
  return !e.prerelease || t.some((t) => t.prerelease && t.version === e.version);
}
function bs(e, t) {
  return ((e = e.trim()), (e = ks(e, t)), (e = Os(e)), (e = As(e, t)), (e = e.trim()), e);
}
function R(e) {
  return !e || e.toLowerCase() === `x` || e === `*`;
}
function xs(e) {
  let t = e.match(Ns);
  if (!t) {
    Ms.diag.error(`Invalid version: ${e}`);
    return;
  }
  let n = t.groups.version,
    r = t.groups.prerelease,
    i = t.groups.build,
    a = n.split(`.`),
    o = r?.split(`.`);
  return {
    op: void 0,
    version: n,
    versionSegments: a,
    versionSegmentCount: a.length,
    prerelease: r,
    prereleaseSegments: o,
    prereleaseSegmentCount: o ? o.length : 0,
    build: i,
  };
}
function Ss(e) {
  if (!e) return {};
  let t = e.match(Ps);
  if (!t) return (Ms.diag.error(`Invalid range: ${e}`), { invalid: !0 });
  let n = t.groups.op,
    r = t.groups.version,
    i = t.groups.prerelease,
    a = t.groups.build,
    o = r.split(`.`),
    s = i?.split(`.`);
  return (
    n === `==` && (n = `=`),
    {
      op: n || `=`,
      version: r,
      versionSegments: o,
      versionSegmentCount: o.length,
      prerelease: i,
      prereleaseSegments: s,
      prereleaseSegmentCount: s ? s.length : 0,
      build: a,
    }
  );
}
function Cs(e) {
  return e === `*` || e === `x` || e === `X`;
}
function ws(e) {
  let t = parseInt(e, 10);
  return isNaN(t) ? e : t;
}
function Ts(e, t) {
  if (typeof e == typeof t) {
    if (typeof e == `number` || typeof e == `string`) return [e, t];
    throw Error(`Version segments can only be strings or numbers`);
  }
  return [String(e), String(t)];
}
function Es(e, t) {
  if (Cs(e) || Cs(t)) return 0;
  let [n, r] = Ts(ws(e), ws(t));
  return n > r ? 1 : n < r ? -1 : 0;
}
function Ds(e, t) {
  for (let n = 0; n < Math.max(e.length, t.length); n++) {
    let r = Es(e[n] || `0`, t[n] || `0`);
    if (r !== 0) return r;
  }
  return 0;
}
function Os(e) {
  let t = Zs;
  return e.replace(t, (e, t, n, r, i) => {
    let a;
    return (
      (a = R(t)
        ? ``
        : R(n)
          ? `>=${t}.0.0 <${+t + 1}.0.0-0`
          : R(r)
            ? `>=${t}.${n}.0 <${t}.${+n + 1}.0-0`
            : i
              ? `>=${t}.${n}.${r}-${i} <${t}.${+n + 1}.0-0`
              : `>=${t}.${n}.${r} <${t}.${+n + 1}.0-0`),
      a
    );
  });
}
function ks(e, t) {
  let n = $s,
    r = t?.includePrerelease ? `-0` : ``;
  return e.replace(n, (e, t, n, i, a) => {
    let o;
    return (
      (o = R(t)
        ? ``
        : R(n)
          ? `>=${t}.0.0${r} <${+t + 1}.0.0-0`
          : R(i)
            ? t === `0`
              ? `>=${t}.${n}.0${r} <${t}.${+n + 1}.0-0`
              : `>=${t}.${n}.0${r} <${+t + 1}.0.0-0`
            : a
              ? t === `0`
                ? n === `0`
                  ? `>=${t}.${n}.${i}-${a} <${t}.${n}.${+i + 1}-0`
                  : `>=${t}.${n}.${i}-${a} <${t}.${+n + 1}.0-0`
                : `>=${t}.${n}.${i}-${a} <${+t + 1}.0.0-0`
              : t === `0`
                ? n === `0`
                  ? `>=${t}.${n}.${i}${r} <${t}.${n}.${+i + 1}-0`
                  : `>=${t}.${n}.${i}${r} <${t}.${+n + 1}.0-0`
                : `>=${t}.${n}.${i} <${+t + 1}.0.0-0`),
      o
    );
  });
}
function As(e, t) {
  let n = qs;
  return e.replace(n, (e, n, r, i, a, o) => {
    let s = R(r),
      c = s || R(i),
      l = c || R(a),
      u = l;
    return (
      n === `=` && u && (n = ``),
      (o = t?.includePrerelease ? `-0` : ``),
      s
        ? (e = n === `>` || n === `<` ? `<0.0.0-0` : `*`)
        : n && u
          ? (c && (i = 0),
            (a = 0),
            n === `>`
              ? ((n = `>=`), c ? ((r = +r + 1), (i = 0), (a = 0)) : ((i = +i + 1), (a = 0)))
              : n === `<=` && ((n = `<`), c ? (r = +r + 1) : (i = +i + 1)),
            n === `<` && (o = `-0`),
            (e = `${n + r}.${i}.${a}${o}`))
          : c
            ? (e = `>=${r}.0.0${o} <${+r + 1}.0.0-0`)
            : l && (e = `>=${r}.${i}.0${o} <${r}.${+i + 1}.0-0`),
      e
    );
  });
}
function js(e, t) {
  let n = Ys;
  return e.replace(
    n,
    (e, n, r, i, a, o, s, c, l, u, d, f) => (
      (n = R(r)
        ? ``
        : R(i)
          ? `>=${r}.0.0${t?.includePrerelease ? `-0` : ``}`
          : R(a)
            ? `>=${r}.${i}.0${t?.includePrerelease ? `-0` : ``}`
            : o
              ? `>=${n}`
              : `>=${n}${t?.includePrerelease ? `-0` : ``}`),
      (c = R(l)
        ? ``
        : R(u)
          ? `<${+l + 1}.0.0-0`
          : R(d)
            ? `<${l}.${+u + 1}.0-0`
            : f
              ? `<=${l}.${u}.${d}-${f}`
              : t?.includePrerelease
                ? `<${l}.${u}.${+d + 1}-0`
                : `<=${c}`),
      `${n} ${c}`.trim()
    ),
  );
}
var Ms,
  Ns,
  Ps,
  Fs,
  Is,
  Ls,
  Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs,
  Ks,
  qs,
  Js,
  Ys,
  Xs,
  Zs,
  Qs,
  $s,
  ec = e.n(() => {
    ((Ms = e.a(F())),
      (Ns =
        /^(?:v)?(?<version>(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*))(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<build>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/),
      (Ps =
        /^(?<op><|>|=|==|<=|>=|~|\^|~>)?\s*(?:v)?(?<version>(?<major>x|X|\*|0|[1-9]\d*)(?:\.(?<minor>x|X|\*|0|[1-9]\d*))?(?:\.(?<patch>x|X|\*|0|[1-9]\d*))?)(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<build>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/),
      (Fs = { ">": [1], ">=": [0, 1], "=": [0], "<=": [-1, 0], "<": [-1], "!=": [-1, 1] }),
      (Is = `[a-zA-Z0-9-]`),
      (Ls = `0|[1-9]\\d*`),
      (Rs = `\\d*[a-zA-Z-]${Is}*`),
      (zs = `((?:<|>)?=?)`),
      (Bs = `(?:${Ls}|${Rs})`),
      (Vs = `(?:-(${Bs}(?:\\.${Bs})*))`),
      (Hs = `${Is}+`),
      (Us = `(?:\\+(${Hs}(?:\\.${Hs})*))`),
      (Ws = `${Ls}|x|X|\\*`),
      (Gs = `[v=\\s]*(${Ws})(?:\\.(${Ws})(?:\\.(${Ws})(?:${Vs})?${Us}?)?)?`),
      (Ks = `^${zs}\\s*${Gs}$`),
      (qs = new RegExp(Ks)),
      (Js = `^\\s*(${Gs})\\s+-\\s+(${Gs})\\s*$`),
      (Ys = new RegExp(Js)),
      (Xs = `^(?:~>?)${Gs}$`),
      (Zs = new RegExp(Xs)),
      (Qs = `^(?:\\^)${Gs}$`),
      ($s = new RegExp(Qs)));
  });
function tc(e, t, n) {
  let r = !!e[t] && Object.prototype.propertyIsEnumerable.call(e, t);
  Object.defineProperty(e, t, { configurable: !0, enumerable: r, writable: !0, value: n });
}
var z,
  nc,
  rc,
  ic,
  ac,
  oc = e.n(() => {
    ((z = console.error.bind(console)),
      (nc = (e, t, n) => {
        if (!e || !e[t]) {
          z(`no original function ` + String(t) + ` to wrap`);
          return;
        }
        if (!n) {
          (z(`no wrapper function`), z(Error().stack));
          return;
        }
        let r = e[t];
        if (typeof r != `function` || typeof n != `function`) {
          z(`original object and wrapper must be functions`);
          return;
        }
        let i = n(r, t);
        return (
          tc(i, `__original`, r),
          tc(i, `__unwrap`, () => {
            e[t] === i && tc(e, t, r);
          }),
          tc(i, `__wrapped`, !0),
          tc(e, t, i),
          i
        );
      }),
      (rc = (e, t, n) => {
        if (e) Array.isArray(e) || (e = [e]);
        else {
          (z(`must provide one or more modules to patch`), z(Error().stack));
          return;
        }
        if (!(t && Array.isArray(t))) {
          z(`must provide one or more functions to wrap on modules`);
          return;
        }
        e.forEach((e) => {
          t.forEach((t) => {
            nc(e, t, n);
          });
        });
      }),
      (ic = (e, t) => {
        if (!e || !e[t]) {
          (z(`no function to unwrap.`), z(Error().stack));
          return;
        }
        let n = e[t];
        if (!n.__unwrap) z(`no original to unwrap to -- has ` + String(t) + ` already been unwrapped?`);
        else {
          n.__unwrap();
          return;
        }
      }),
      (ac = (e, t) => {
        if (e) Array.isArray(e) || (e = [e]);
        else {
          (z(`must provide one or more modules to patch`), z(Error().stack));
          return;
        }
        if (!(t && Array.isArray(t))) {
          z(`must provide one or more functions to unwrap on modules`);
          return;
        }
        e.forEach((e) => {
          t.forEach((t) => {
            ic(e, t);
          });
        });
      }));
  }),
  sc,
  cc,
  lc = e.n(() => {
    ((sc = e.a(F())),
      ss(),
      oc(),
      (cc = class {
        instrumentationName;
        instrumentationVersion;
        _config = {};
        _tracer;
        _meter;
        _logger;
        _diag;
        constructor(e, t, n) {
          ((this.instrumentationName = e),
            (this.instrumentationVersion = t),
            this.setConfig(n),
            (this._diag = sc.diag.createComponentLogger({ namespace: e })),
            (this._tracer = sc.trace.getTracer(e, t)),
            (this._meter = sc.metrics.getMeter(e, t)),
            (this._logger = os.getLogger(e, t)),
            this._updateMetricInstruments());
        }
        _wrap = nc;
        _unwrap = ic;
        _massWrap = rc;
        _massUnwrap = ac;
        get meter() {
          return this._meter;
        }
        setMeterProvider(e) {
          ((this._meter = e.getMeter(this.instrumentationName, this.instrumentationVersion)),
            this._updateMetricInstruments());
        }
        get logger() {
          return this._logger;
        }
        setLoggerProvider(e) {
          this._logger = e.getLogger(this.instrumentationName, this.instrumentationVersion);
        }
        getModuleDefinitions() {
          let e = this.init() ?? [];
          return Array.isArray(e) ? e : [e];
        }
        _updateMetricInstruments() {}
        getConfig() {
          return this._config;
        }
        setConfig(e) {
          this._config = { enabled: !0, ...e };
        }
        setTracerProvider(e) {
          this._tracer = e.getTracer(this.instrumentationName, this.instrumentationVersion);
        }
        get tracer() {
          return this._tracer;
        }
        _runSpanCustomizationHook(e, t, n, r) {
          if (e)
            try {
              e(n, r);
            } catch (e) {
              this._diag.error(
                `Error running span customization hook due to exception in handler`,
                { triggerName: t },
                e,
              );
            }
        }
      }));
  }),
  uc = e.t((e, t) => {
    var n = require("path").sep;
    t.exports = function (e) {
      var t = e.split(n),
        r = t.lastIndexOf(`node_modules`);
      if (r !== -1 && t[r + 1]) {
        for (
          var i = t[r + 1][0] === `@`,
            a = i ? t[r + 1] + `/` + t[r + 2] : t[r + 1],
            o = i ? 3 : 2,
            s = ``,
            c = r + o - 1,
            l = 0;
          l <= c;
          l++
        )
          s += l === c ? t[l] : t[l] + n;
        for (var u = ``, d = t.length - 1, f = r + o; f <= d; f++) u += f === d ? t[f] : t[f] + n;
        return { name: a, basedir: s, path: u };
      }
    };
  }),
  dc = e.t((e, t) => {
    var n = require("path"),
      r = require("module"),
      i = d.t()(`require-in-the-middle`),
      a = uc();
    ((t.exports = u), (t.exports.Hook = u));
    var o, s;
    if (r.isBuiltin) s = r.isBuiltin;
    else if (r.builtinModules)
      s = (e) => (e.startsWith(`node:`) ? !0 : (o === void 0 && (o = new Set(r.builtinModules)), o.has(e)));
    else throw Error(`'require-in-the-middle' requires Node.js >=v9.3.0 or >=v8.10.0`);
    var c = /([/\\]index)?(\.js)?$/,
      l = class {
        constructor() {
          ((this._localCache = new Map()), (this._kRitmExports = Symbol(`RitmExports`)));
        }
        has(e, t) {
          if (this._localCache.has(e)) return !0;
          if (t) return !1;
          {
            let t = require.cache[e];
            return !!(t && this._kRitmExports in t);
          }
        }
        get(e, t) {
          let n = this._localCache.get(e);
          if (n !== void 0) return n;
          if (!t) {
            let t = require.cache[e];
            return t && t[this._kRitmExports];
          }
        }
        set(e, t, n) {
          n
            ? this._localCache.set(e, t)
            : e in require.cache
              ? (require.cache[e][this._kRitmExports] = t)
              : (i(`non-core module is unexpectedly not in require.cache: "%s"`, e),
                this._localCache.set(e, t));
        }
      };
    function u(e, t, o) {
      if (!(this instanceof u)) return new u(e, t, o);
      if (
        (typeof e == `function`
          ? ((o = e), (e = null), (t = null))
          : typeof t == `function` && ((o = t), (t = null)),
        typeof r._resolveFilename != `function`)
      ) {
        (console.error(
          `Error: Expected Module._resolveFilename to be a function (was: %s) - aborting!`,
          typeof r._resolveFilename,
        ),
          console.error(
            `Please report this error as an issue related to Node.js %s at https://github.com/nodejs/require-in-the-middle/issues`,
            process.version,
          ));
        return;
      }
      ((this._cache = new l()), (this._unhooked = !1), (this._origRequire = r.prototype.require));
      let c = this,
        d = new Set(),
        p = t ? t.internals === !0 : !1,
        m = Array.isArray(e);
      (i(`registering require hook`),
        (this._require = r.prototype.require =
          function (e) {
            return c._unhooked === !0
              ? (i(`ignoring require call - module is soft-unhooked`), c._origRequire.apply(this, arguments))
              : h.call(this, arguments, !1);
          }),
        typeof process.getBuiltinModule == `function` &&
          ((this._origGetBuiltinModule = process.getBuiltinModule),
          (this._getBuiltinModule = process.getBuiltinModule =
            function (e) {
              return c._unhooked === !0
                ? (i(`ignoring process.getBuiltinModule call - module is soft-unhooked`),
                  c._origGetBuiltinModule.apply(this, arguments))
                : h.call(this, arguments, !0);
            })));
      function h(t, l) {
        let u = t[0],
          h = s(u),
          g;
        if (h) {
          if (((g = u), u.startsWith(`node:`))) {
            let e = u.slice(5);
            s(e) && (g = e);
          }
        } else if (l)
          return (
            i(`call to process.getBuiltinModule with unknown built-in id`),
            c._origGetBuiltinModule.apply(this, t)
          );
        else
          try {
            g = r._resolveFilename(u, this);
          } catch (e) {
            return (
              i(`Module._resolveFilename("%s") threw %j, calling original Module.require`, u, e.message),
              c._origRequire.apply(this, t)
            );
          }
        let _, v;
        if (
          (i(`processing %s module require('%s'): %s`, h === !0 ? `core` : `non-core`, u, g),
          c._cache.has(g, h) === !0)
        )
          return (i(`returning already patched cached module: %s`, g), c._cache.get(g, h));
        let y = d.has(g);
        y === !1 && d.add(g);
        let b = l ? c._origGetBuiltinModule.apply(this, t) : c._origRequire.apply(this, t);
        if (y === !0) return (i(`module is in the process of being patched already - ignoring: %s`, g), b);
        if ((d.delete(g), h === !0)) {
          if (m === !0 && e.includes(g) === !1) return (i(`ignoring core module not on whitelist: %s`, g), b);
          _ = g;
        } else if (m === !0 && e.includes(g)) {
          let e = n.parse(g);
          ((_ = e.name), (v = e.dir));
        } else {
          let t = a(g);
          if (t === void 0) return (i(`could not parse filename: %s`, g), b);
          ((_ = t.name), (v = t.basedir));
          let r = f(t);
          i(`resolved filename to module: %s (id: %s, resolved: %s, basedir: %s)`, _, u, r, v);
          let o = !1;
          if (m) {
            if (
              (!u.startsWith(`.`) && e.includes(u) && ((_ = u), (o = !0)), !e.includes(_) && !e.includes(r))
            )
              return b;
            e.includes(r) && r !== _ && ((_ = r), (o = !0));
          }
          if (!o) {
            let e;
            try {
              e = require.resolve(_, { paths: [v] });
            } catch {
              return (i(`could not resolve module: %s`, _), c._cache.set(g, b, h), b);
            }
            if (e !== g) {
              if (p === !0)
                ((_ = _ + n.sep + n.relative(v, g)),
                  i(`preparing to process require of internal file: %s`, _));
              else return (i(`ignoring require of non-main module file: %s`, e), c._cache.set(g, b, h), b);
            }
          }
        }
        (c._cache.set(g, b, h), i(`calling require hook: %s`, _));
        let x = o(b, _, v);
        return (c._cache.set(g, x, h), i(`returning module: %s`, _), x);
      }
    }
    u.prototype.unhook = function () {
      ((this._unhooked = !0),
        this._require === r.prototype.require
          ? ((r.prototype.require = this._origRequire), i(`require unhook successful`))
          : i(`require unhook unsuccessful`),
        process.getBuiltinModule !== void 0 &&
          (this._getBuiltinModule === process.getBuiltinModule
            ? ((process.getBuiltinModule = this._origGetBuiltinModule),
              i(`process.getBuiltinModule unhook successful`))
            : i(`process.getBuiltinModule unhook unsuccessful`)));
    };
    function f(e) {
      let t = n.sep === `/` ? e.path : e.path.split(n.sep).join(`/`);
      return n.posix.join(e.name, t).replace(c, ``);
    }
  }),
  fc,
  pc,
  mc = e.n(() => {
    ((fc = class {
      hooks = [];
      children = new Map();
    }),
      (pc = class {
        _trie = new fc();
        _counter = 0;
        insert(e) {
          let t = this._trie;
          for (let n of e.moduleName.split(`/`)) {
            let e = t.children.get(n);
            (e || ((e = new fc()), t.children.set(n, e)), (t = e));
          }
          t.hooks.push({ hook: e, insertedId: this._counter++ });
        }
        search(e, { maintainInsertionOrder: t, fullOnly: n } = {}) {
          let r = this._trie,
            i = [],
            a = !0;
          for (let t of e.split(`/`)) {
            let e = r.children.get(t);
            if (!e) {
              a = !1;
              break;
            }
            (n || i.push(...e.hooks), (r = e));
          }
          return (
            n && a && i.push(...r.hooks),
            i.length === 0
              ? []
              : i.length === 1
                ? [i[0].hook]
                : (t && i.sort((e, t) => e.insertedId - t.insertedId), i.map(({ hook: e }) => e))
          );
        }
      }));
  });
function hc(e) {
  return p.sep === `/` ? e : e.split(p.sep).join(`/`);
}
var gc,
  _c,
  vc,
  yc = e.n(() => {
    ((gc = dc()),
      mc(),
      (_c = [`afterEach`, `after`, `beforeEach`, `before`, `describe`, `it`].every(
        (e) => typeof global[e] == `function`,
      )),
      (vc = class e {
        _moduleNameTrie = new pc();
        static _instance;
        constructor() {
          this._initialize();
        }
        _initialize() {
          new gc.Hook(null, { internals: !0 }, (e, t, n) => {
            let r = hc(t),
              i = this._moduleNameTrie.search(r, { maintainInsertionOrder: !0, fullOnly: n === void 0 });
            for (let { onRequire: r } of i) e = r(e, t, n);
            return e;
          });
        }
        register(e, t) {
          let n = { moduleName: e, onRequire: t };
          return (this._moduleNameTrie.insert(n), n);
        }
        static getInstance() {
          return _c ? new e() : (this._instance = this._instance ?? new e());
        }
      }));
  }),
  bc = e.t((e) => {
    var t = [],
      n = new WeakMap(),
      r = new WeakMap(),
      i = new Map(),
      a = [],
      o = {
        set(e, t, r) {
          return n.get(e)[t](r);
        },
        get(e, t) {
          if (t === Symbol.toStringTag) return `Module`;
          let n = r.get(e)[t];
          if (typeof n == `function`) return n();
        },
        defineProperty(e, t, r) {
          if (!(`value` in r))
            throw Error(`Getters/setters are not supported for exports property descriptors.`);
          return n.get(e)[t](r.value);
        },
      };
    function s(e, s, c, l, u) {
      (i.set(e, u), n.set(s, c), r.set(s, l));
      let d = new Proxy(s, o);
      (t.forEach((t) => t(e, d)), a.push([e, d]));
    }
    var c = !1;
    function l() {
      return c;
    }
    function u(e) {
      c = e;
    }
    ((e.register = s),
      (e.importHooks = t),
      (e.specifiers = i),
      (e.toHook = a),
      (e.getExperimentalPatchInternals = l),
      (e.setExperimentalPatchInternals = u));
  }),
  xc = e.t((e, t) => {
    var n = require("path"),
      r = uc(),
      { fileURLToPath: i } = require("url"),
      { MessageChannel: a } = require("worker_threads"),
      { importHooks: o, specifiers: s, toHook: c, getExperimentalPatchInternals: l } = bc();
    function u(e) {
      (o.push(e), c.forEach(([t, n]) => e(t, n)));
    }
    function d(e) {
      let t = o.indexOf(e);
      t > -1 && o.splice(t, 1);
    }
    function f(e, t, n, r) {
      let i = e(t, n, r);
      i && i !== t && (t.default = i);
    }
    var p;
    function m() {
      let { port1: e, port2: t } = new a(),
        n = 0,
        r;
      ((p = (t) => {
        (n++, e.postMessage(t));
      }),
        e
          .on(`message`, () => {
            (n--, r && n <= 0 && r());
          })
          .unref());
      function i() {
        let e = setInterval(() => {}, 1e3),
          t = new Promise((e) => {
            r = e;
          }).then(() => {
            clearInterval(e);
          });
        return (n === 0 && r(), t);
      }
      let o = t;
      return {
        registerOptions: { data: { addHookMessagePort: o, include: [] }, transferList: [o] },
        addHookMessagePort: o,
        waitForAllMessagesAcknowledged: i,
      };
    }
    function h(e, t, a) {
      if (!(this instanceof h)) return new h(e, t, a);
      typeof e == `function`
        ? ((a = e), (e = null), (t = null))
        : typeof t == `function` && ((a = t), (t = null));
      let o = t ? t.internals === !0 : !1;
      (p && Array.isArray(e) && p(e),
        (this._iitmHook = (t, c) => {
          let u = t,
            d = t.startsWith(`node:`),
            p;
          if (d) t = t.replace(/^node:/, ``);
          else {
            if (t.startsWith(`file://`))
              try {
                t = i(t);
              } catch {}
            let e = r(t);
            e && ((t = e.name), (p = e.basedir));
          }
          if (e) {
            for (let r of e)
              if (r === t) {
                if (p) {
                  if (o) t = t + n.sep + n.relative(p, i(u));
                  else if (!l() && !p.endsWith(s.get(u))) continue;
                }
                f(a, c, t, p);
              }
          } else f(a, c, t, p);
        }),
        u(this._iitmHook));
    }
    ((h.prototype.unhook = function () {
      d(this._iitmHook);
    }),
      (t.exports = h),
      (t.exports.Hook = h),
      (t.exports.addHook = u),
      (t.exports.removeHook = d),
      (t.exports.createAddHookMessageChannel = m));
  });
function Sc(e, t, n) {
  let r, i;
  try {
    i = e();
  } catch (e) {
    r = e;
  } finally {
    if ((t(r, i), r && !n)) throw r;
    return i;
  }
}
async function Cc(e, t, n) {
  let r, i;
  try {
    i = await e();
  } catch (e) {
    r = e;
  } finally {
    if ((await t(r, i), r && !n)) throw r;
    return i;
  }
}
function wc(e) {
  return (
    typeof e == `function` &&
    typeof e.__original == `function` &&
    typeof e.__unwrap == `function` &&
    e.__wrapped === !0
  );
}
var Tc = e.n(() => {});
function Ec(e, t, n) {
  return t === void 0 ? e.includes(`*`) : e.some((e) => ms(t, e, { includePrerelease: n }));
}
var Dc,
  Oc,
  kc,
  Ac,
  jc = e.n(() => {
    (ec(),
      oc(),
      lc(),
      yc(),
      (Dc = xc()),
      (Oc = e.a(F())),
      (kc = dc()),
      Tc(),
      (Ac = class extends cc {
        _modules;
        _hooks = [];
        _requireInTheMiddleSingleton = vc.getInstance();
        _enabled = !1;
        constructor(e, t, n) {
          super(e, t, n);
          let r = this.init();
          (r && !Array.isArray(r) && (r = [r]),
            (this._modules = r || []),
            this._config.enabled && this.enable());
        }
        _wrap = (e, t, n) => {
          if ((wc(e[t]) && this._unwrap(e, t), T.types.isProxy(e))) {
            let r = nc(Object.assign({}, e), t, n);
            return (Object.defineProperty(e, t, { value: r }), r);
          }
          return nc(e, t, n);
        };
        _unwrap = (e, t) => (T.types.isProxy(e) ? Object.defineProperty(e, t, { value: e[t] }) : ic(e, t));
        _massWrap = (e, t, n) => {
          if (e) Array.isArray(e) || (e = [e]);
          else {
            Oc.diag.error(`must provide one or more modules to patch`);
            return;
          }
          if (!(t && Array.isArray(t))) {
            Oc.diag.error(`must provide one or more functions to wrap on modules`);
            return;
          }
          e.forEach((e) => {
            t.forEach((t) => {
              this._wrap(e, t, n);
            });
          });
        };
        _massUnwrap = (e, t) => {
          if (e) Array.isArray(e) || (e = [e]);
          else {
            Oc.diag.error(`must provide one or more modules to patch`);
            return;
          }
          if (!(t && Array.isArray(t))) {
            Oc.diag.error(`must provide one or more functions to wrap on modules`);
            return;
          }
          e.forEach((e) => {
            t.forEach((t) => {
              this._unwrap(e, t);
            });
          });
        };
        _warnOnPreloadedModules() {
          this._modules.forEach((e) => {
            let { name: t } = e;
            try {
              let e = require.resolve(t);
              require.cache[e] &&
                this._diag.warn(
                  `Module ${t} has been loaded before ${this.instrumentationName} so it might not work, please initialize it before requiring ${t}`,
                );
            } catch {}
          });
        }
        _extractPackageVersion(e) {
          try {
            let t = (0, C.readFileSync)(p.join(e, `package.json`), { encoding: `utf8` }),
              n = JSON.parse(t).version;
            return typeof n == `string` ? n : void 0;
          } catch {
            Oc.diag.warn(`Failed extracting version`, e);
          }
        }
        _onRequire(e, t, n, r) {
          if (!r)
            return typeof e.patch == `function` && ((e.moduleExports = t), this._enabled)
              ? (this._diag.debug(`Applying instrumentation patch for nodejs core module on require hook`, {
                  module: e.name,
                }),
                e.patch(t))
              : t;
          let i = this._extractPackageVersion(r);
          if (((e.moduleVersion = i), e.name === n))
            return Ec(e.supportedVersions, i, e.includePrerelease) &&
              typeof e.patch == `function` &&
              ((e.moduleExports = t), this._enabled)
              ? (this._diag.debug(`Applying instrumentation patch for module on require hook`, {
                  module: e.name,
                  version: e.moduleVersion,
                  baseDir: r,
                }),
                e.patch(t, e.moduleVersion))
              : t;
          let a = e.files ?? [],
            o = p.normalize(n);
          return a
            .filter((e) => e.name === o)
            .filter((t) => Ec(t.supportedVersions, i, e.includePrerelease))
            .reduce(
              (t, n) => (
                (n.moduleExports = t),
                this._enabled
                  ? (this._diag.debug(
                      `Applying instrumentation patch for nodejs module file on require hook`,
                      { module: e.name, version: e.moduleVersion, fileName: n.name, baseDir: r },
                    ),
                    n.patch(t, e.moduleVersion))
                  : t
              ),
              t,
            );
        }
        enable() {
          if (!this._enabled) {
            if (((this._enabled = !0), this._hooks.length > 0)) {
              for (let e of this._modules) {
                typeof e.patch == `function` &&
                  e.moduleExports &&
                  (this._diag.debug(
                    `Applying instrumentation patch for nodejs module on instrumentation enabled`,
                    { module: e.name, version: e.moduleVersion },
                  ),
                  e.patch(e.moduleExports, e.moduleVersion));
                for (let t of e.files)
                  t.moduleExports &&
                    (this._diag.debug(
                      `Applying instrumentation patch for nodejs module file on instrumentation enabled`,
                      { module: e.name, version: e.moduleVersion, fileName: t.name },
                    ),
                    t.patch(t.moduleExports, e.moduleVersion));
              }
              return;
            }
            this._warnOnPreloadedModules();
            for (let e of this._modules) {
              let t = (t, n, r) => {
                  if (!r && p.isAbsolute(n)) {
                    let e = p.parse(n);
                    ((n = e.name), (r = e.dir));
                  }
                  return this._onRequire(e, t, n, r);
                },
                n = (t, n, r) => this._onRequire(e, t, n, r),
                r = p.isAbsolute(e.name)
                  ? new kc.Hook([e.name], { internals: !0 }, n)
                  : this._requireInTheMiddleSingleton.register(e.name, n);
              this._hooks.push(r);
              let i = new Dc.Hook([e.name], { internals: !1 }, t);
              this._hooks.push(i);
            }
          }
        }
        disable() {
          if (this._enabled) {
            this._enabled = !1;
            for (let e of this._modules) {
              typeof e.unpatch == `function` &&
                e.moduleExports &&
                (this._diag.debug(
                  `Removing instrumentation patch for nodejs module on instrumentation disabled`,
                  { module: e.name, version: e.moduleVersion },
                ),
                e.unpatch(e.moduleExports, e.moduleVersion));
              for (let t of e.files)
                t.moduleExports &&
                  (this._diag.debug(
                    `Removing instrumentation patch for nodejs module file on instrumentation disabled`,
                    { module: e.name, version: e.moduleVersion, fileName: t.name },
                  ),
                  t.unpatch(t.moduleExports, e.moduleVersion));
            }
          }
        }
        isEnabled() {
          return this._enabled;
        }
      }));
  }),
  Mc = e.n(() => {
    jc();
  }),
  Nc = e.n(() => {
    Mc();
  }),
  Pc,
  Fc = e.n(() => {
    Pc = class {
      name;
      supportedVersions;
      patch;
      unpatch;
      files;
      constructor(e, t, n, r, i) {
        ((this.name = e),
          (this.supportedVersions = t),
          (this.patch = n),
          (this.unpatch = r),
          (this.files = i || []));
      }
    };
  }),
  Ic,
  Lc = e.n(() => {
    (Nc(),
      (Ic = class {
        supportedVersions;
        patch;
        unpatch;
        name;
        constructor(e, t, n, r) {
          ((this.supportedVersions = t),
            (this.patch = n),
            (this.unpatch = r),
            (this.name = (0, p.normalize)(e)));
        }
      }));
  });
function Rc(e, t) {
  let n = zc.OLD,
    r = t
      ?.split(`,`)
      .map((e) => e.trim())
      .filter((e) => e !== ``);
  for (let t of r ?? [])
    if (t.toLowerCase() === e + `/dup`) {
      n = zc.DUPLICATE;
      break;
    } else t.toLowerCase() === e && (n = zc.STABLE);
  return n;
}
var zc,
  Bc = e.n(() => {
    (function (e) {
      ((e[(e.STABLE = 1)] = `STABLE`), (e[(e.OLD = 2)] = `OLD`), (e[(e.DUPLICATE = 3)] = `DUPLICATE`));
    })((zc ||= {}));
  }),
  Vc = e.r({
    InstrumentationBase: () => Ac,
    InstrumentationNodeModuleDefinition: () => Pc,
    InstrumentationNodeModuleFile: () => Ic,
    SemconvStability: () => zc,
    isWrapped: () => wc,
    registerInstrumentations: () => ds,
    safeExecuteInTheMiddle: () => Sc,
    safeExecuteInTheMiddleAsync: () => Cc,
    semconvStabilityFromStr: () => Rc,
  }),
  Hc = e.n(() => {
    (ps(), Nc(), Fc(), Lc(), Tc(), Bc());
  }),
  B = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__,
  V = globalThis,
  Uc = `10.29.0`;
function Wc() {
  return (Gc(V), V);
}
function Gc(e) {
  let t = (e.__SENTRY__ = e.__SENTRY__ || {});
  return ((t.version = t.version || `10.29.0`), (t[Uc] = t[`10.29.0`] || {}));
}
function Kc(e, t, n = V) {
  let r = (n.__SENTRY__ = n.__SENTRY__ || {}),
    i = (r[Uc] = r[`10.29.0`] || {});
  return i[e] || (i[e] = t());
}
var qc = [`debug`, `info`, `warn`, `error`, `log`, `assert`, `trace`],
  Jc = `Sentry Logger `,
  Yc = {};
function Xc(e) {
  if (!(`console` in V)) return e();
  let t = V.console,
    n = {},
    r = Object.keys(Yc);
  r.forEach((e) => {
    let r = Yc[e];
    ((n[e] = t[e]), (t[e] = r));
  });
  try {
    return e();
  } finally {
    r.forEach((e) => {
      t[e] = n[e];
    });
  }
}
function Zc() {
  il().enabled = !0;
}
function Qc() {
  il().enabled = !1;
}
function $c() {
  return il().enabled;
}
function el(...e) {
  rl(`log`, ...e);
}
function tl(...e) {
  rl(`warn`, ...e);
}
function nl(...e) {
  rl(`error`, ...e);
}
function rl(e, ...t) {
  B &&
    $c() &&
    Xc(() => {
      V.console[e](`${Jc}[${e}]:`, ...t);
    });
}
function il() {
  return B ? Kc(`loggerSettings`, () => ({ enabled: !1 })) : { enabled: !1 };
}
var H = { enable: Zc, disable: Qc, isEnabled: $c, log: el, warn: tl, error: nl },
  al = 50,
  ol = /\(error: (.*)\)/,
  sl = /captureMessage|captureException/;
function cl(...e) {
  let t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1]);
  return (e, n = 0, r = 0) => {
    let i = [],
      a = e.split(`
`);
    for (let e = n; e < a.length; e++) {
      let n = a[e];
      n.length > 1024 && (n = n.slice(0, 1024));
      let o = ol.test(n) ? n.replace(ol, `$1`) : n;
      if (!o.match(/\S*Error: /)) {
        for (let e of t) {
          let t = e(o);
          if (t) {
            i.push(t);
            break;
          }
        }
        if (i.length >= al + r) break;
      }
    }
    return ul(i.slice(r));
  };
}
function ll(e) {
  return Array.isArray(e) ? cl(...e) : e;
}
function ul(e) {
  if (!e.length) return [];
  let t = Array.from(e);
  return (
    /sentryWrapped/.test(dl(t).function || ``) && t.pop(),
    t.reverse(),
    sl.test(dl(t).function || ``) && (t.pop(), sl.test(dl(t).function || ``) && t.pop()),
    t.slice(0, al).map((e) => ({ ...e, filename: e.filename || dl(t).filename, function: e.function || `?` }))
  );
}
function dl(e) {
  return e[e.length - 1] || {};
}
var fl = `<anonymous>`;
function pl(e) {
  try {
    return !e || typeof e != `function` ? fl : e.name || fl;
  } catch {
    return fl;
  }
}
function ml(e) {
  return `__v_isVNode` in e && e.__v_isVNode ? `[VueVNode]` : `[VueViewModel]`;
}
var hl = {},
  gl = {};
function _l(e, t) {
  ((hl[e] = hl[e] || []), hl[e].push(t));
}
function vl(e, t) {
  if (!gl[e]) {
    gl[e] = !0;
    try {
      t();
    } catch (t) {
      B && H.error(`Error while instrumenting ${e}`, t);
    }
  }
}
function yl(e, t) {
  let n = e && hl[e];
  if (n)
    for (let r of n)
      try {
        r(t);
      } catch (t) {
        B &&
          H.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${pl(r)}\nError:`, t);
      }
}
var bl = null;
function xl(e) {
  let t = `error`;
  (_l(t, e), vl(t, Sl));
}
function Sl() {
  ((bl = V.onerror),
    (V.onerror = function (e, t, n, r, i) {
      return (
        yl(`error`, { column: r, error: i, line: n, msg: e, url: t }),
        bl ? bl.apply(this, arguments) : !1
      );
    }),
    (V.onerror.__SENTRY_INSTRUMENTED__ = !0));
}
var Cl = null;
function wl(e) {
  let t = `unhandledrejection`;
  (_l(t, e), vl(t, Tl));
}
function Tl() {
  ((Cl = V.onunhandledrejection),
    (V.onunhandledrejection = function (e) {
      return (yl(`unhandledrejection`, e), !Cl || Cl.apply(this, arguments));
    }),
    (V.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0));
}
var El = Object.prototype.toString;
function Dl(e) {
  switch (El.call(e)) {
    case `[object Error]`:
    case `[object Exception]`:
    case `[object DOMException]`:
    case `[object WebAssembly.Exception]`:
      return !0;
    default:
      return zl(e, Error);
  }
}
function Ol(e, t) {
  return El.call(e) === `[object ${t}]`;
}
function kl(e) {
  return Ol(e, `ErrorEvent`);
}
function Al(e) {
  return Ol(e, `String`);
}
function jl(e) {
  return (
    typeof e == `object` && !!e && `__sentry_template_string__` in e && `__sentry_template_values__` in e
  );
}
function Ml(e) {
  return e === null || jl(e) || (typeof e != `object` && typeof e != `function`);
}
function Nl(e) {
  return Ol(e, `Object`);
}
function Pl(e) {
  return typeof Event < `u` && zl(e, Event);
}
function Fl(e) {
  return typeof Element < `u` && zl(e, Element);
}
function Il(e) {
  return Ol(e, `RegExp`);
}
function Ll(e) {
  return !!(e?.then && typeof e.then == `function`);
}
function Rl(e) {
  return Nl(e) && `nativeEvent` in e && `preventDefault` in e && `stopPropagation` in e;
}
function zl(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
function Bl(e) {
  return !!(typeof e == `object` && e && (e.__isVue || e._isVue || e.__v_isVNode));
}
var Vl = V,
  Hl = 80;
function Ul(e, t = {}) {
  if (!e) return `<unknown>`;
  try {
    let n = e,
      r = [],
      i = 0,
      a = 0,
      o,
      s = Array.isArray(t) ? t : t.keyAttrs,
      c = (!Array.isArray(t) && t.maxStringLength) || Hl;
    for (; n && i++ < 5 && ((o = Wl(n, s)), !(o === `html` || (i > 1 && a + r.length * 3 + o.length >= c)));)
      (r.push(o), (a += o.length), (n = n.parentNode));
    return r.reverse().join(` > `);
  } catch {
    return `<unknown>`;
  }
}
function Wl(e, t) {
  let n = e,
    r = [];
  if (!n?.tagName) return ``;
  if (Vl.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
    if (n.dataset.sentryElement) return n.dataset.sentryElement;
  }
  r.push(n.tagName.toLowerCase());
  let i = t?.length ? t.filter((e) => n.getAttribute(e)).map((e) => [e, n.getAttribute(e)]) : null;
  if (i?.length)
    i.forEach((e) => {
      r.push(`[${e[0]}="${e[1]}"]`);
    });
  else {
    n.id && r.push(`#${n.id}`);
    let e = n.className;
    if (e && Al(e)) {
      let t = e.split(/\s+/);
      for (let e of t) r.push(`.${e}`);
    }
  }
  for (let e of [`aria-label`, `type`, `name`, `title`, `alt`]) {
    let t = n.getAttribute(e);
    t && r.push(`[${e}="${t}"]`);
  }
  return r.join(``);
}
function Gl(e, t, n) {
  if (!(t in e)) return;
  let r = e[t];
  if (typeof r != `function`) return;
  let i = n(r);
  typeof i == `function` && ql(i, r);
  try {
    e[t] = i;
  } catch {
    B && H.log(`Failed to replace method "${t}" in object`, e);
  }
}
function Kl(e, t, n) {
  try {
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
  } catch {
    B && H.log(`Failed to add non-enumerable property "${t}" to object`, e);
  }
}
function ql(e, t) {
  try {
    ((e.prototype = t.prototype = t.prototype || {}), Kl(e, `__sentry_original__`, t));
  } catch {}
}
function Jl(e) {
  return e.__sentry_original__;
}
function Yl(e) {
  if (Dl(e)) return { message: e.message, name: e.name, stack: e.stack, ...Zl(e) };
  if (Pl(e)) {
    let t = { type: e.type, target: Xl(e.target), currentTarget: Xl(e.currentTarget), ...Zl(e) };
    return (typeof CustomEvent < `u` && zl(e, CustomEvent) && (t.detail = e.detail), t);
  }
  return e;
}
function Xl(e) {
  try {
    return Fl(e) ? Ul(e) : Object.prototype.toString.call(e);
  } catch {
    return `<unknown>`;
  }
}
function Zl(e) {
  if (typeof e == `object` && e) {
    let t = {};
    for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  }
  return {};
}
function Ql(e) {
  let t = Object.keys(Yl(e));
  return (t.sort(), t[0] ? t.join(`, `) : `[object has no keys]`);
}
function $l(e, t = 0) {
  return typeof e != `string` || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`;
}
function eu(e, t) {
  let n = e,
    r = n.length;
  if (r <= 150) return n;
  t > r && (t = r);
  let i = Math.max(t - 60, 0);
  i < 5 && (i = 0);
  let a = Math.min(i + 140, r);
  return (
    a > r - 5 && (a = r),
    a === r && (i = Math.max(a - 140, 0)),
    (n = n.slice(i, a)),
    i > 0 && (n = `'{snip} ${n}`),
    a < r && (n += ` {snip}`),
    n
  );
}
function tu(e, t) {
  if (!Array.isArray(e)) return ``;
  let n = [];
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    try {
      Bl(r) ? n.push(ml(r)) : n.push(String(r));
    } catch {
      n.push(`[value cannot be serialized]`);
    }
  }
  return n.join(t);
}
function nu(e, t, n = !1) {
  return Al(e) ? (Il(t) ? t.test(e) : Al(t) ? (n ? e === t : e.includes(t)) : !1) : !1;
}
function ru(e, t = [], n = !1) {
  return t.some((t) => nu(e, t, n));
}
function iu() {
  let e = V;
  return e.crypto || e.msCrypto;
}
var au;
function ou() {
  return Math.random() * 16;
}
function U(e = iu()) {
  try {
    if (e?.randomUUID) return e.randomUUID().replace(/-/g, ``);
  } catch {}
  return (
    (au ||= `10000000100040008000100000000000`),
    au.replace(/[018]/g, (e) => (e ^ ((ou() & 15) >> (e / 4))).toString(16))
  );
}
function su(e) {
  return e.exception?.values?.[0];
}
function cu(e) {
  let { message: t, event_id: n } = e;
  if (t) return t;
  let r = su(e);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || n || `<unknown>`
    : n || `<unknown>`;
}
function lu(e, t, n) {
  let r = (e.exception = e.exception || {}),
    i = (r.values = r.values || []),
    a = (i[0] = i[0] || {});
  ((a.value ||= t || ``), (a.type ||= n || `Error`));
}
function uu(e, t) {
  let n = su(e);
  if (!n) return;
  let r = { type: `generic`, handled: !0 },
    i = n.mechanism;
  if (((n.mechanism = { ...r, ...i, ...t }), t && `data` in t)) {
    let e = { ...i?.data, ...t.data };
    n.mechanism.data = e;
  }
}
var du =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
function fu(e) {
  return parseInt(e || ``, 10);
}
function pu(e) {
  let t = e.match(du) || [],
    n = fu(t[1]),
    r = fu(t[2]),
    i = fu(t[3]);
  return {
    buildmetadata: t[5],
    major: isNaN(n) ? void 0 : n,
    minor: isNaN(r) ? void 0 : r,
    patch: isNaN(i) ? void 0 : i,
    prerelease: t[4],
  };
}
function mu(e) {
  if (hu(e)) return !0;
  try {
    Kl(e, `__sentry_captured__`, !0);
  } catch {}
  return !1;
}
function hu(e) {
  try {
    return e.__sentry_captured__;
  } catch {}
}
var gu = 1e3;
function _u() {
  return Date.now() / gu;
}
function vu() {
  let { performance: e } = V;
  if (!e?.now || !e.timeOrigin) return _u;
  let t = e.timeOrigin;
  return () => (t + e.now()) / gu;
}
var yu;
function bu() {
  return (yu ??= vu())();
}
function xu(e) {
  let t = bu(),
    n = {
      sid: U(),
      init: !0,
      timestamp: t,
      started: t,
      duration: 0,
      status: `ok`,
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => wu(n),
    };
  return (e && Su(n, e), n);
}
function Su(e, t = {}) {
  if (
    (t.user &&
      (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
      !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)),
    (e.timestamp = t.timestamp || bu()),
    t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
    t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
    t.sid && (e.sid = t.sid.length === 32 ? t.sid : U()),
    t.init !== void 0 && (e.init = t.init),
    !e.did && t.did && (e.did = `${t.did}`),
    typeof t.started == `number` && (e.started = t.started),
    e.ignoreDuration)
  )
    e.duration = void 0;
  else if (typeof t.duration == `number`) e.duration = t.duration;
  else {
    let t = e.timestamp - e.started;
    e.duration = t >= 0 ? t : 0;
  }
  (t.release && (e.release = t.release),
    t.environment && (e.environment = t.environment),
    !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
    !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
    typeof t.errors == `number` && (e.errors = t.errors),
    t.status && (e.status = t.status));
}
function Cu(e, t) {
  let n = {};
  (t ? (n = { status: t }) : e.status === `ok` && (n = { status: `exited` }), Su(e, n));
}
function wu(e) {
  return {
    sid: `${e.sid}`,
    init: e.init,
    started: new Date(e.started * 1e3).toISOString(),
    timestamp: new Date(e.timestamp * 1e3).toISOString(),
    status: e.status,
    errors: e.errors,
    did: typeof e.did == `number` || typeof e.did == `string` ? `${e.did}` : void 0,
    duration: e.duration,
    abnormal_mechanism: e.abnormal_mechanism,
    attrs: {
      release: e.release,
      environment: e.environment,
      ip_address: e.ipAddress,
      user_agent: e.userAgent,
    },
  };
}
function Tu(e, t, n = 2) {
  if (!t || typeof t != `object` || n <= 0) return t;
  if (e && Object.keys(t).length === 0) return e;
  let r = { ...e };
  for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = Tu(r[e], t[e], n - 1));
  return r;
}
function Eu() {
  return U();
}
function Du() {
  return U().substring(16);
}
var Ou = `_sentrySpan`;
function ku(e, t) {
  t ? Kl(e, Ou, t) : delete e[Ou];
}
function Au(e) {
  return e[Ou];
}
var ju = 100,
  Mu = class e {
    constructor() {
      ((this._notifyingListeners = !1),
        (this._scopeListeners = []),
        (this._eventProcessors = []),
        (this._breadcrumbs = []),
        (this._attachments = []),
        (this._user = {}),
        (this._tags = {}),
        (this._attributes = {}),
        (this._extra = {}),
        (this._contexts = {}),
        (this._sdkProcessingMetadata = {}),
        (this._propagationContext = { traceId: Eu(), sampleRand: Math.random() }));
    }
    clone() {
      let t = new e();
      return (
        (t._breadcrumbs = [...this._breadcrumbs]),
        (t._tags = { ...this._tags }),
        (t._attributes = { ...this._attributes }),
        (t._extra = { ...this._extra }),
        (t._contexts = { ...this._contexts }),
        this._contexts.flags && (t._contexts.flags = { values: [...this._contexts.flags.values] }),
        (t._user = this._user),
        (t._level = this._level),
        (t._session = this._session),
        (t._transactionName = this._transactionName),
        (t._fingerprint = this._fingerprint),
        (t._eventProcessors = [...this._eventProcessors]),
        (t._attachments = [...this._attachments]),
        (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
        (t._propagationContext = { ...this._propagationContext }),
        (t._client = this._client),
        (t._lastEventId = this._lastEventId),
        ku(t, Au(this)),
        t
      );
    }
    setClient(e) {
      this._client = e;
    }
    setLastEventId(e) {
      this._lastEventId = e;
    }
    getClient() {
      return this._client;
    }
    lastEventId() {
      return this._lastEventId;
    }
    addScopeListener(e) {
      this._scopeListeners.push(e);
    }
    addEventProcessor(e) {
      return (this._eventProcessors.push(e), this);
    }
    setUser(e) {
      return (
        (this._user = e || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }),
        this._session && Su(this._session, { user: e }),
        this._notifyScopeListeners(),
        this
      );
    }
    getUser() {
      return this._user;
    }
    setTags(e) {
      return ((this._tags = { ...this._tags, ...e }), this._notifyScopeListeners(), this);
    }
    setTag(e, t) {
      return this.setTags({ [e]: t });
    }
    setAttributes(e) {
      return ((this._attributes = { ...this._attributes, ...e }), this._notifyScopeListeners(), this);
    }
    setAttribute(e, t) {
      return this.setAttributes({ [e]: t });
    }
    removeAttribute(e) {
      return (e in this._attributes && (delete this._attributes[e], this._notifyScopeListeners()), this);
    }
    setExtras(e) {
      return ((this._extra = { ...this._extra, ...e }), this._notifyScopeListeners(), this);
    }
    setExtra(e, t) {
      return ((this._extra = { ...this._extra, [e]: t }), this._notifyScopeListeners(), this);
    }
    setFingerprint(e) {
      return ((this._fingerprint = e), this._notifyScopeListeners(), this);
    }
    setLevel(e) {
      return ((this._level = e), this._notifyScopeListeners(), this);
    }
    setTransactionName(e) {
      return ((this._transactionName = e), this._notifyScopeListeners(), this);
    }
    setContext(e, t) {
      return (
        t === null ? delete this._contexts[e] : (this._contexts[e] = t),
        this._notifyScopeListeners(),
        this
      );
    }
    setSession(e) {
      return (e ? (this._session = e) : delete this._session, this._notifyScopeListeners(), this);
    }
    getSession() {
      return this._session;
    }
    update(t) {
      if (!t) return this;
      let n = typeof t == `function` ? t(this) : t,
        {
          tags: r,
          attributes: i,
          extra: a,
          user: o,
          contexts: s,
          level: c,
          fingerprint: l = [],
          propagationContext: u,
        } = (n instanceof e ? n.getScopeData() : Nl(n) ? t : void 0) || {};
      return (
        (this._tags = { ...this._tags, ...r }),
        (this._attributes = { ...this._attributes, ...i }),
        (this._extra = { ...this._extra, ...a }),
        (this._contexts = { ...this._contexts, ...s }),
        o && Object.keys(o).length && (this._user = o),
        c && (this._level = c),
        l.length && (this._fingerprint = l),
        u && (this._propagationContext = u),
        this
      );
    }
    clear() {
      return (
        (this._breadcrumbs = []),
        (this._tags = {}),
        (this._attributes = {}),
        (this._extra = {}),
        (this._user = {}),
        (this._contexts = {}),
        (this._level = void 0),
        (this._transactionName = void 0),
        (this._fingerprint = void 0),
        (this._session = void 0),
        ku(this, void 0),
        (this._attachments = []),
        this.setPropagationContext({ traceId: Eu(), sampleRand: Math.random() }),
        this._notifyScopeListeners(),
        this
      );
    }
    addBreadcrumb(e, t) {
      let n = typeof t == `number` ? t : ju;
      if (n <= 0) return this;
      let r = { timestamp: _u(), ...e, message: e.message ? $l(e.message, 2048) : e.message };
      return (
        this._breadcrumbs.push(r),
        this._breadcrumbs.length > n &&
          ((this._breadcrumbs = this._breadcrumbs.slice(-n)),
          this._client?.recordDroppedEvent(`buffer_overflow`, `log_item`)),
        this._notifyScopeListeners(),
        this
      );
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      return ((this._breadcrumbs = []), this._notifyScopeListeners(), this);
    }
    addAttachment(e) {
      return (this._attachments.push(e), this);
    }
    clearAttachments() {
      return ((this._attachments = []), this);
    }
    getScopeData() {
      return {
        breadcrumbs: this._breadcrumbs,
        attachments: this._attachments,
        contexts: this._contexts,
        tags: this._tags,
        attributes: this._attributes,
        extra: this._extra,
        user: this._user,
        level: this._level,
        fingerprint: this._fingerprint || [],
        eventProcessors: this._eventProcessors,
        propagationContext: this._propagationContext,
        sdkProcessingMetadata: this._sdkProcessingMetadata,
        transactionName: this._transactionName,
        span: Au(this),
      };
    }
    setSDKProcessingMetadata(e) {
      return ((this._sdkProcessingMetadata = Tu(this._sdkProcessingMetadata, e, 2)), this);
    }
    setPropagationContext(e) {
      return ((this._propagationContext = e), this);
    }
    getPropagationContext() {
      return this._propagationContext;
    }
    captureException(e, t) {
      let n = t?.event_id || U();
      if (!this._client)
        return (B && H.warn(`No client configured on scope - will not capture exception!`), n);
      let r = Error(`Sentry syntheticException`);
      return (
        this._client.captureException(
          e,
          { originalException: e, syntheticException: r, ...t, event_id: n },
          this,
        ),
        n
      );
    }
    captureMessage(e, t, n) {
      let r = n?.event_id || U();
      if (!this._client) return (B && H.warn(`No client configured on scope - will not capture message!`), r);
      let i = n?.syntheticException ?? Error(e);
      return (
        this._client.captureMessage(
          e,
          t,
          { originalException: e, syntheticException: i, ...n, event_id: r },
          this,
        ),
        r
      );
    }
    captureEvent(e, t) {
      let n = t?.event_id || U();
      return this._client
        ? (this._client.captureEvent(e, { ...t, event_id: n }, this), n)
        : (B && H.warn(`No client configured on scope - will not capture event!`), n);
    }
    _notifyScopeListeners() {
      this._notifyingListeners ||=
        ((this._notifyingListeners = !0),
        this._scopeListeners.forEach((e) => {
          e(this);
        }),
        !1);
    }
  };
function Nu() {
  return Kc(`defaultCurrentScope`, () => new Mu());
}
function Pu() {
  return Kc(`defaultIsolationScope`, () => new Mu());
}
var Fu = class {
  constructor(e, t) {
    let n;
    n = e || new Mu();
    let r;
    ((r = t || new Mu()), (this._stack = [{ scope: n }]), (this._isolationScope = r));
  }
  withScope(e) {
    let t = this._pushScope(),
      n;
    try {
      n = e(t);
    } catch (e) {
      throw (this._popScope(), e);
    }
    return Ll(n)
      ? n.then(
          (e) => (this._popScope(), e),
          (e) => {
            throw (this._popScope(), e);
          },
        )
      : (this._popScope(), n);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    let e = this.getScope().clone();
    return (this._stack.push({ client: this.getClient(), scope: e }), e);
  }
  _popScope() {
    return this._stack.length <= 1 ? !1 : !!this._stack.pop();
  }
};
function Iu() {
  let e = Gc(Wc());
  return (e.stack = e.stack || new Fu(Nu(), Pu()));
}
function Lu(e) {
  return Iu().withScope(e);
}
function Ru(e, t) {
  let n = Iu();
  return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
}
function zu(e) {
  return Iu().withScope(() => e(Iu().getIsolationScope()));
}
function Bu() {
  return {
    withIsolationScope: zu,
    withScope: Lu,
    withSetScope: Ru,
    withSetIsolationScope: (e, t) => zu(t),
    getCurrentScope: () => Iu().getScope(),
    getIsolationScope: () => Iu().getIsolationScope(),
  };
}
function Vu(e) {
  let t = Gc(Wc());
  t.acs = e;
}
function Hu(e) {
  let t = Gc(e);
  return t.acs ? t.acs : Bu();
}
function W() {
  return Hu(Wc()).getCurrentScope();
}
function G() {
  return Hu(Wc()).getIsolationScope();
}
function Uu() {
  return Kc(`globalScope`, () => new Mu());
}
function Wu(...e) {
  let t = Hu(Wc());
  if (e.length === 2) {
    let [n, r] = e;
    return n ? t.withSetScope(n, r) : t.withScope(r);
  }
  return t.withScope(e[0]);
}
function K() {
  return W().getClient();
}
function Gu(e) {
  let { traceId: t, parentSpanId: n, propagationSpanId: r } = e.getPropagationContext(),
    i = { trace_id: t, span_id: r || Du() };
  return (n && (i.parent_span_id = n), i);
}
var Ku = `sentry.source`,
  qu = `sentry.sample_rate`,
  Ju = `sentry.op`,
  Yu = `sentry.origin`,
  Xu = `sentry.measurement_unit`,
  Zu = `sentry.measurement_value`,
  Qu = `sentry.custom_span_name`,
  $u = `sentry.profile_id`,
  ed = `sentry.exclusive_time`;
function td(e) {
  if (e < 400 && e >= 100) return { code: 1 };
  if (e >= 400 && e < 500)
    switch (e) {
      case 401:
        return { code: 2, message: `unauthenticated` };
      case 403:
        return { code: 2, message: `permission_denied` };
      case 404:
        return { code: 2, message: `not_found` };
      case 409:
        return { code: 2, message: `already_exists` };
      case 413:
        return { code: 2, message: `failed_precondition` };
      case 429:
        return { code: 2, message: `resource_exhausted` };
      case 499:
        return { code: 2, message: `cancelled` };
      default:
        return { code: 2, message: `invalid_argument` };
    }
  if (e >= 500 && e < 600)
    switch (e) {
      case 501:
        return { code: 2, message: `unimplemented` };
      case 503:
        return { code: 2, message: `unavailable` };
      case 504:
        return { code: 2, message: `deadline_exceeded` };
      default:
        return { code: 2, message: `internal_error` };
    }
  return { code: 2, message: `internal_error` };
}
function nd(e, t) {
  e.setAttribute(`http.response.status_code`, t);
  let n = td(t);
  n.message !== `unknown_error` && e.setStatus(n);
}
var rd = `_sentryScope`,
  id = `_sentryIsolationScope`;
function ad(e) {
  try {
    let t = V.WeakRef;
    if (typeof t == `function`) return new t(e);
  } catch {}
  return e;
}
function od(e) {
  if (e) {
    if (typeof e == `object` && `deref` in e && typeof e.deref == `function`)
      try {
        return e.deref();
      } catch {
        return;
      }
    return e;
  }
}
function sd(e, t, n) {
  e && (Kl(e, id, ad(n)), Kl(e, rd, t));
}
function cd(e) {
  let t = e;
  return { scope: t[rd], isolationScope: od(t[id]) };
}
var ld = `sentry-`,
  ud = /^sentry-/;
function dd(e) {
  let t = pd(e);
  if (!t) return;
  let n = Object.entries(t).reduce((e, [t, n]) => {
    if (t.match(ud)) {
      let r = t.slice(7);
      e[r] = n;
    }
    return e;
  }, {});
  if (Object.keys(n).length > 0) return n;
}
function fd(e) {
  if (e) return hd(Object.entries(e).reduce((e, [t, n]) => (n && (e[`${ld}${t}`] = n), e), {}));
}
function pd(e) {
  if (e && (Al(e) || Array.isArray(e)))
    return Array.isArray(e)
      ? e.reduce((e, t) => {
          let n = md(t);
          return (
            Object.entries(n).forEach(([t, n]) => {
              e[t] = n;
            }),
            e
          );
        }, {})
      : md(e);
}
function md(e) {
  return e
    .split(`,`)
    .map((e) => {
      let t = e.indexOf(`=`);
      return t === -1
        ? []
        : [e.slice(0, t), e.slice(t + 1)].map((e) => {
            try {
              return decodeURIComponent(e.trim());
            } catch {
              return;
            }
          });
    })
    .reduce((e, [t, n]) => (t && n && (e[t] = n), e), {});
}
function hd(e) {
  if (Object.keys(e).length !== 0)
    return Object.entries(e).reduce((e, [t, n], r) => {
      let i = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
        a = r === 0 ? i : `${e},${i}`;
      return a.length > 8192
        ? (B &&
            H.warn(
              `Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`,
            ),
          e)
        : a;
    }, ``);
}
var gd = /^o(\d+)\./,
  _d = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function vd(e) {
  return e === `http` || e === `https`;
}
function yd(e, t = !1) {
  let { host: n, path: r, pass: i, port: a, projectId: o, protocol: s, publicKey: c } = e;
  return `${s}://${c}${t && i ? `:${i}` : ``}@${n}${a ? `:${a}` : ``}/${r && `${r}/`}${o}`;
}
function bd(e) {
  let t = _d.exec(e);
  if (!t) {
    Xc(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  let [n, r, i = ``, a = ``, o = ``, s = ``] = t.slice(1),
    c = ``,
    l = s,
    u = l.split(`/`);
  if ((u.length > 1 && ((c = u.slice(0, -1).join(`/`)), (l = u.pop())), l)) {
    let e = l.match(/^\d+/);
    e && (l = e[0]);
  }
  return xd({ host: a, pass: i, path: c, projectId: l, port: o, protocol: n, publicKey: r });
}
function xd(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || ``,
    pass: e.pass || ``,
    host: e.host,
    port: e.port || ``,
    path: e.path || ``,
    projectId: e.projectId,
  };
}
function Sd(e) {
  if (!B) return !0;
  let { port: t, projectId: n, protocol: r } = e;
  return [`protocol`, `publicKey`, `host`, `projectId`].find(
    (t) => !e[t] && (H.error(`Invalid Sentry Dsn: ${t} missing`), !0),
  )
    ? !1
    : n.match(/^\d+$/)
      ? vd(r)
        ? t && isNaN(parseInt(t, 10))
          ? (H.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
          : !0
        : (H.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1)
      : (H.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function Cd(e) {
  return e.match(gd)?.[1];
}
function wd(e) {
  let t = e.getOptions(),
    { host: n } = e.getDsn() || {},
    r;
  return (t.orgId ? (r = String(t.orgId)) : n && (r = Cd(n)), r);
}
function Td(e) {
  let t = typeof e == `string` ? bd(e) : xd(e);
  if (t && Sd(t)) return t;
}
function Ed(e) {
  if (typeof e == `boolean`) return Number(e);
  let t = typeof e == `string` ? parseFloat(e) : e;
  if (!(typeof t != `number` || isNaN(t) || t < 0 || t > 1)) return t;
}
var Dd = RegExp(`^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$`);
function Od(e) {
  if (!e) return;
  let t = e.match(Dd);
  if (!t) return;
  let n;
  return (
    t[3] === `1` ? (n = !0) : t[3] === `0` && (n = !1),
    { traceId: t[1], parentSampled: n, parentSpanId: t[2] }
  );
}
function kd(e, t) {
  let n = Od(e),
    r = dd(t);
  if (!n?.traceId) return { traceId: Eu(), sampleRand: Math.random() };
  let i = Md(n, r);
  r && (r.sample_rand = i.toString());
  let { traceId: a, parentSpanId: o, parentSampled: s } = n;
  return { traceId: a, parentSpanId: o, sampled: s, dsc: r || {}, sampleRand: i };
}
function Ad(e = Eu(), t = Du(), n) {
  let r = ``;
  return (n !== void 0 && (r = n ? `-1` : `-0`), `${e}-${t}${r}`);
}
function jd(e = Eu(), t = Du(), n) {
  return `00-${e}-${t}-${n ? `01` : `00`}`;
}
function Md(e, t) {
  let n = Ed(t?.sample_rand);
  if (n !== void 0) return n;
  let r = Ed(t?.sample_rate);
  return r && e?.parentSampled !== void 0
    ? e.parentSampled
      ? Math.random() * r
      : r + Math.random() * (1 - r)
    : Math.random();
}
function Nd(e, t) {
  let n = wd(e);
  return t && n && t !== n
    ? (H.log(`Won't continue trace because org IDs don't match (incoming baggage: ${t}, SDK options: ${n})`),
      !1)
    : e.getOptions().strictTraceContinuation && ((t && !n) || (!t && n))
      ? (H.log(
          `Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${t}, Sentry client: ${n})`,
        ),
        !1)
      : !0;
}
var Pd = !1;
function Fd(e) {
  let { spanId: t, traceId: n } = e.spanContext(),
    { data: r, op: i, parent_span_id: a, status: o, origin: s, links: c } = q(e);
  return { parent_span_id: a, span_id: t, trace_id: n, data: r, op: i, status: o, origin: s, links: c };
}
function Id(e) {
  let { spanId: t, traceId: n, isRemote: r } = e.spanContext(),
    i = r ? t : q(e).parent_span_id,
    a = cd(e).scope;
  return {
    parent_span_id: i,
    span_id: r ? a?.getPropagationContext().propagationSpanId || Du() : t,
    trace_id: n,
  };
}
function Ld(e) {
  let { traceId: t, spanId: n } = e.spanContext();
  return Ad(t, n, Wd(e));
}
function Rd(e) {
  let { traceId: t, spanId: n } = e.spanContext();
  return jd(t, n, Wd(e));
}
function zd(e) {
  if (e && e.length > 0)
    return e.map(({ context: { spanId: e, traceId: t, traceFlags: n, ...r }, attributes: i }) => ({
      span_id: e,
      trace_id: t,
      sampled: n === 1,
      attributes: i,
      ...r,
    }));
}
function Bd(e) {
  return typeof e == `number`
    ? Vd(e)
    : Array.isArray(e)
      ? e[0] + e[1] / 1e9
      : e instanceof Date
        ? Vd(e.getTime())
        : bu();
}
function Vd(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function q(e) {
  if (Ud(e)) return e.getSpanJSON();
  let { spanId: t, traceId: n } = e.spanContext();
  if (Hd(e)) {
    let { attributes: r, startTime: i, name: a, endTime: o, status: s, links: c } = e;
    return {
      span_id: t,
      trace_id: n,
      data: r,
      description: a,
      parent_span_id:
        `parentSpanId` in e
          ? e.parentSpanId
          : `parentSpanContext` in e
            ? e.parentSpanContext?.spanId
            : void 0,
      start_timestamp: Bd(i),
      timestamp: Bd(o) || void 0,
      status: Gd(s),
      op: r[Ju],
      origin: r[Yu],
      links: zd(c),
    };
  }
  return { span_id: t, trace_id: n, start_timestamp: 0, data: {} };
}
function Hd(e) {
  let t = e;
  return !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status;
}
function Ud(e) {
  return typeof e.getSpanJSON == `function`;
}
function Wd(e) {
  let { traceFlags: t } = e.spanContext();
  return t === 1;
}
function Gd(e) {
  if (e && e.code !== 0) return e.code === 1 ? `ok` : e.message || `internal_error`;
}
var Kd = `_sentryChildSpans`,
  qd = `_sentryRootSpan`;
function Jd(e, t) {
  (Kl(t, qd, e[qd] || e), e[Kd] ? e[Kd].add(t) : Kl(e, Kd, new Set([t])));
}
function Yd(e) {
  let t = new Set();
  function n(e) {
    if (!t.has(e) && Wd(e)) {
      t.add(e);
      let r = e[Kd] ? Array.from(e[Kd]) : [];
      for (let e of r) n(e);
    }
  }
  return (n(e), Array.from(t));
}
function Xd(e) {
  return e[qd] || e;
}
function Zd() {
  let e = Hu(Wc());
  return e.getActiveSpan ? e.getActiveSpan() : Au(W());
}
function Qd() {
  Pd ||=
    (Xc(() => {
      console.warn(
        "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.",
      );
    }),
    !0);
}
var $d = !1;
function ef() {
  if ($d) return;
  function e() {
    let e = Zd(),
      t = e && Xd(e);
    if (t) {
      let e = `internal_error`;
      (B && H.log(`[Tracing] Root span: ${e} -> Global error occurred`),
        t.setStatus({ code: 2, message: e }));
    }
  }
  ((e.tag = `sentry_tracingErrorCallback`), ($d = !0), xl(e), wl(e));
}
function tf(e) {
  if (typeof __SENTRY_TRACING__ == `boolean` && !__SENTRY_TRACING__) return !1;
  let t = e || K()?.getOptions();
  return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
}
function nf(e) {
  H.log(`Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`);
}
function rf(e, t) {
  if (!t?.length || !e.description) return !1;
  for (let n of t) {
    if (of(n)) {
      if (nu(e.description, n)) return (B && nf(e), !0);
      continue;
    }
    if (!n.name && !n.op) continue;
    let t = !n.name || nu(e.description, n.name),
      r = !n.op || (e.op && nu(e.op, n.op));
    if (t && r) return (B && nf(e), !0);
  }
  return !1;
}
function af(e, t) {
  let n = t.parent_span_id,
    r = t.span_id;
  if (n) for (let t of e) t.parent_span_id === r && (t.parent_span_id = n);
}
function of(e) {
  return typeof e == `string` || e instanceof RegExp;
}
var sf = `production`,
  cf = `_frozenDsc`;
function lf(e, t) {
  Kl(e, cf, t);
}
function uf(e, t) {
  let n = t.getOptions(),
    { publicKey: r } = t.getDsn() || {},
    i = {
      environment: n.environment || `production`,
      release: n.release,
      public_key: r,
      trace_id: e,
      org_id: wd(t),
    };
  return (t.emit(`createDsc`, i), i);
}
function df(e, t) {
  let n = t.getPropagationContext();
  return n.dsc || uf(n.traceId, e);
}
function ff(e) {
  let t = K();
  if (!t) return {};
  let n = Xd(e),
    r = q(n),
    i = r.data,
    a = n.spanContext().traceState,
    o = a?.get(`sentry.sample_rate`) ?? i[`sentry.sample_rate`] ?? i[`sentry.previous_trace_sample_rate`];
  function s(e) {
    return ((typeof o == `number` || typeof o == `string`) && (e.sample_rate = `${o}`), e);
  }
  let c = n[cf];
  if (c) return s(c);
  let l = a?.get(`sentry.dsc`),
    u = l && dd(l);
  if (u) return s(u);
  let d = uf(e.spanContext().traceId, t),
    f = i[Ku],
    p = r.description;
  return (
    f !== `url` && p && (d.transaction = p),
    tf() &&
      ((d.sampled = String(Wd(n))),
      (d.sample_rand =
        a?.get(`sentry.sample_rand`) ?? cd(n).scope?.getPropagationContext().sampleRand.toString())),
    s(d),
    t.emit(`createDsc`, d, n),
    d
  );
}
var pf = class {
  constructor(e = {}) {
    ((this._traceId = e.traceId || Eu()), (this._spanId = e.spanId || Du()));
  }
  spanContext() {
    return { spanId: this._spanId, traceId: this._traceId, traceFlags: 0 };
  }
  end(e) {}
  setAttribute(e, t) {
    return this;
  }
  setAttributes(e) {
    return this;
  }
  setStatus(e) {
    return this;
  }
  updateName(e) {
    return this;
  }
  isRecording() {
    return !1;
  }
  addEvent(e, t, n) {
    return this;
  }
  addLink(e) {
    return this;
  }
  addLinks(e) {
    return this;
  }
  recordException(e, t) {}
};
function mf(e, t = 100, n = 1 / 0) {
  try {
    return gf(``, e, t, n);
  } catch (e) {
    return { ERROR: `**non-serializable** (${e})` };
  }
}
function hf(e, t = 3, n = 102400) {
  let r = mf(e, t);
  return bf(r) > n ? hf(e, t - 1, n) : r;
}
function gf(e, t, n = 1 / 0, r = 1 / 0, i = Sf()) {
  let [a, o] = i;
  if (t == null || [`boolean`, `string`].includes(typeof t) || (typeof t == `number` && Number.isFinite(t)))
    return t;
  let s = _f(e, t);
  if (!s.startsWith(`[object `)) return s;
  if (t.__sentry_skip_normalization__) return t;
  let c =
    typeof t.__sentry_override_normalization_depth__ == `number`
      ? t.__sentry_override_normalization_depth__
      : n;
  if (c === 0) return s.replace(`object `, ``);
  if (a(t)) return `[Circular ~]`;
  let l = t;
  if (l && typeof l.toJSON == `function`)
    try {
      return gf(``, l.toJSON(), c - 1, r, i);
    } catch {}
  let u = Array.isArray(t) ? [] : {},
    d = 0,
    f = Yl(t);
  for (let e in f) {
    if (!Object.prototype.hasOwnProperty.call(f, e)) continue;
    if (d >= r) {
      u[e] = `[MaxProperties ~]`;
      break;
    }
    let t = f[e];
    ((u[e] = gf(e, t, c - 1, r, i)), d++);
  }
  return (o(t), u);
}
function _f(e, t) {
  try {
    if (e === `domain` && t && typeof t == `object` && t._events) return `[Domain]`;
    if (e === `domainEmitter`) return `[DomainEmitter]`;
    if (typeof global < `u` && t === global) return `[Global]`;
    if (typeof window < `u` && t === window) return `[Window]`;
    if (typeof document < `u` && t === document) return `[Document]`;
    if (Bl(t)) return ml(t);
    if (Rl(t)) return `[SyntheticEvent]`;
    if (typeof t == `number` && !Number.isFinite(t)) return `[${t}]`;
    if (typeof t == `function`) return `[Function: ${pl(t)}]`;
    if (typeof t == `symbol`) return `[${String(t)}]`;
    if (typeof t == `bigint`) return `[BigInt: ${String(t)}]`;
    let n = vf(t);
    return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`;
  } catch (e) {
    return `**non-serializable** (${e})`;
  }
}
function vf(e) {
  let t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : `null prototype`;
}
function yf(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function bf(e) {
  return yf(JSON.stringify(e));
}
function xf(e, t) {
  let n = t.replace(/\\/g, `/`).replace(/[|\\{}()[\]^$+*?.]/g, `\\$&`),
    r = e;
  try {
    r = decodeURI(e);
  } catch {}
  return r
    .replace(/\\/g, `/`)
    .replace(/webpack:\/?/g, ``)
    .replace(RegExp(`(file://)?/*${n}/*`, `ig`), `app:///`);
}
function Sf() {
  let e = new WeakSet();
  function t(t) {
    return e.has(t) ? !0 : (e.add(t), !1);
  }
  function n(t) {
    e.delete(t);
  }
  return [t, n];
}
function Cf(e, t = []) {
  return [e, t];
}
function wf(e, t) {
  let [n, r] = e;
  return [n, [...r, t]];
}
function Tf(e, t) {
  let n = e[1];
  for (let e of n) {
    let n = e[0].type;
    if (t(e, n)) return !0;
  }
  return !1;
}
function Ef(e, t) {
  return Tf(e, (e, n) => t.includes(n));
}
function Df(e) {
  let t = Gc(V);
  return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
}
function Of(e) {
  let t = Gc(V);
  return t.decodePolyfill ? t.decodePolyfill(e) : new TextDecoder().decode(e);
}
function kf(e) {
  let [t, n] = e,
    r = JSON.stringify(t);
  function i(e) {
    typeof r == `string`
      ? (r = typeof e == `string` ? r + e : [Df(r), e])
      : r.push(typeof e == `string` ? Df(e) : e);
  }
  for (let e of n) {
    let [t, n] = e;
    if ((i(`\n${JSON.stringify(t)}\n`), typeof n == `string` || n instanceof Uint8Array)) i(n);
    else {
      let e;
      try {
        e = JSON.stringify(n);
      } catch {
        e = JSON.stringify(mf(n));
      }
      i(e);
    }
  }
  return typeof r == `string` ? r : Af(r);
}
function Af(e) {
  let t = e.reduce((e, t) => e + t.length, 0),
    n = new Uint8Array(t),
    r = 0;
  for (let t of e) (n.set(t, r), (r += t.length));
  return n;
}
function jf(e) {
  let t = typeof e == `string` ? Df(e) : e;
  function n(e) {
    let n = t.subarray(0, e);
    return ((t = t.subarray(e + 1)), n);
  }
  function r() {
    let e = t.indexOf(10);
    return (e < 0 && (e = t.length), JSON.parse(Of(n(e))));
  }
  let i = r(),
    a = [];
  for (; t.length;) {
    let e = r(),
      t = typeof e.length == `number` ? e.length : void 0;
    a.push([e, t ? n(t) : r()]);
  }
  return [i, a];
}
function Mf(e) {
  return [{ type: `span` }, e];
}
function Nf(e) {
  let t = typeof e.data == `string` ? Df(e.data) : e.data;
  return [
    {
      type: `attachment`,
      length: t.length,
      filename: e.filename,
      content_type: e.contentType,
      attachment_type: e.attachmentType,
    },
    t,
  ];
}
var Pf = {
  session: `session`,
  sessions: `session`,
  attachment: `attachment`,
  transaction: `transaction`,
  event: `error`,
  client_report: `internal`,
  user_report: `default`,
  profile: `profile`,
  profile_chunk: `profile`,
  replay_event: `replay`,
  replay_recording: `replay`,
  check_in: `monitor`,
  feedback: `feedback`,
  span: `span`,
  raw_security: `security`,
  log: `log_item`,
  metric: `metric`,
  trace_metric: `metric`,
};
function Ff(e) {
  return Pf[e];
}
function If(e) {
  if (!e?.sdk) return;
  let { name: t, version: n } = e.sdk;
  return { name: t, version: n };
}
function Lf(e, t, n, r) {
  let i = e.sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date().toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && r && { dsn: yd(r) }),
    ...(i && { trace: i }),
  };
}
function Rf(e, t) {
  if (!t) return e;
  let n = e.sdk || {};
  return (
    (e.sdk = {
      ...n,
      name: n.name || t.name,
      version: n.version || t.version,
      integrations: [...(e.sdk?.integrations || []), ...(t.integrations || [])],
      packages: [...(e.sdk?.packages || []), ...(t.packages || [])],
      settings: e.sdk?.settings || t.settings ? { ...e.sdk?.settings, ...t.settings } : void 0,
    }),
    e
  );
}
function zf(e, t, n, r) {
  let i = If(n);
  return Cf({ sent_at: new Date().toISOString(), ...(i && { sdk: i }), ...(!!r && t && { dsn: yd(t) }) }, [
    `aggregates` in e ? [{ type: `sessions` }, e] : [{ type: `session` }, e.toJSON()],
  ]);
}
function Bf(e, t, n, r) {
  let i = If(n),
    a = e.type && e.type !== `replay_event` ? e.type : `event`;
  Rf(e, n?.sdk);
  let o = Lf(e, i, r, t);
  return (delete e.sdkProcessingMetadata, Cf(o, [[{ type: a }, e]]));
}
function Vf(e, t) {
  function n(e) {
    return !!e.trace_id && !!e.public_key;
  }
  let r = ff(e[0]),
    i = t?.getDsn(),
    a = t?.getOptions().tunnel,
    o = { sent_at: new Date().toISOString(), ...(n(r) && { trace: r }), ...(!!a && i && { dsn: yd(i) }) },
    { beforeSendSpan: s, ignoreSpans: c } = t?.getOptions() || {},
    l = c?.length ? e.filter((e) => !rf(q(e), c)) : e,
    u = e.length - l.length;
  u && t?.recordDroppedEvent(`before_send`, `span`, u);
  let d = s
      ? (e) => {
          let t = q(e);
          return s(t) || (Qd(), t);
        }
      : q,
    f = [];
  for (let e of l) {
    let t = d(e);
    t && f.push(Mf(t));
  }
  return Cf(o, f);
}
function Hf(e) {
  if (!B) return;
  let { description: t = `< unknown name >`, op: n = `< unknown op >`, parent_span_id: r } = q(e),
    { spanId: i } = e.spanContext(),
    a = Wd(e),
    o = Xd(e),
    s = o === e,
    c = `[Tracing] Starting ${a ? `sampled` : `unsampled`} ${s ? `root ` : ``}span`,
    l = [`op: ${n}`, `name: ${t}`, `ID: ${i}`];
  if ((r && l.push(`parent ID: ${r}`), !s)) {
    let { op: e, description: t } = q(o);
    (l.push(`root ID: ${o.spanContext().spanId}`),
      e && l.push(`root op: ${e}`),
      t && l.push(`root description: ${t}`));
  }
  H.log(`${c}
  ${l.join(`
  `)}`);
}
function Uf(e) {
  if (!B) return;
  let { description: t = `< unknown name >`, op: n = `< unknown op >` } = q(e),
    { spanId: r } = e.spanContext(),
    i = `[Tracing] Finishing "${n}" ${Xd(e) === e ? `root ` : ``}span "${t}" with ID ${r}`;
  H.log(i);
}
function Wf(e) {
  if (!e || e.length === 0) return;
  let t = {};
  return (
    e.forEach((e) => {
      let n = e.attributes || {},
        r = n[Xu],
        i = n[Zu];
      typeof r == `string` && typeof i == `number` && (t[e.name] = { value: i, unit: r });
    }),
    t
  );
}
var Gf = 1e3,
  Kf = class {
    constructor(e = {}) {
      ((this._traceId = e.traceId || Eu()),
        (this._spanId = e.spanId || Du()),
        (this._startTime = e.startTimestamp || bu()),
        (this._links = e.links),
        (this._attributes = {}),
        this.setAttributes({ [Yu]: `manual`, [Ju]: e.op, ...e.attributes }),
        (this._name = e.name),
        e.parentSpanId && (this._parentSpanId = e.parentSpanId),
        `sampled` in e && (this._sampled = e.sampled),
        e.endTimestamp && (this._endTime = e.endTimestamp),
        (this._events = []),
        (this._isStandaloneSpan = e.isStandalone),
        this._endTime && this._onSpanEnded());
    }
    addLink(e) {
      return (this._links ? this._links.push(e) : (this._links = [e]), this);
    }
    addLinks(e) {
      return (this._links ? this._links.push(...e) : (this._links = e), this);
    }
    recordException(e, t) {}
    spanContext() {
      let { _spanId: e, _traceId: t, _sampled: n } = this;
      return { spanId: e, traceId: t, traceFlags: +!!n };
    }
    setAttribute(e, t) {
      return (t === void 0 ? delete this._attributes[e] : (this._attributes[e] = t), this);
    }
    setAttributes(e) {
      return (Object.keys(e).forEach((t) => this.setAttribute(t, e[t])), this);
    }
    updateStartTime(e) {
      this._startTime = Bd(e);
    }
    setStatus(e) {
      return ((this._status = e), this);
    }
    updateName(e) {
      return ((this._name = e), this.setAttribute(Ku, `custom`), this);
    }
    end(e) {
      this._endTime || ((this._endTime = Bd(e)), Uf(this), this._onSpanEnded());
    }
    getSpanJSON() {
      return {
        data: this._attributes,
        description: this._name,
        op: this._attributes[Ju],
        parent_span_id: this._parentSpanId,
        span_id: this._spanId,
        start_timestamp: this._startTime,
        status: Gd(this._status),
        timestamp: this._endTime,
        trace_id: this._traceId,
        origin: this._attributes[Yu],
        profile_id: this._attributes[$u],
        exclusive_time: this._attributes[ed],
        measurements: Wf(this._events),
        is_segment: (this._isStandaloneSpan && Xd(this) === this) || void 0,
        segment_id: this._isStandaloneSpan ? Xd(this).spanContext().spanId : void 0,
        links: zd(this._links),
      };
    }
    isRecording() {
      return !this._endTime && !!this._sampled;
    }
    addEvent(e, t, n) {
      B && H.log(`[Tracing] Adding an event to span:`, e);
      let r = qf(t) ? t : n || bu(),
        i = qf(t) ? {} : t || {},
        a = { name: e, time: Bd(r), attributes: i };
      return (this._events.push(a), this);
    }
    isStandaloneSpan() {
      return !!this._isStandaloneSpan;
    }
    _onSpanEnded() {
      let e = K();
      if ((e && e.emit(`spanEnd`, this), !(this._isStandaloneSpan || this === Xd(this)))) return;
      if (this._isStandaloneSpan) {
        this._sampled
          ? Xf(Vf([this], e))
          : (B &&
              H.log(`[Tracing] Discarding standalone span because its trace was not chosen to be sampled.`),
            e && e.recordDroppedEvent(`sample_rate`, `span`));
        return;
      }
      let t = this._convertSpanToTransaction();
      t && (cd(this).scope || W()).captureEvent(t);
    }
    _convertSpanToTransaction() {
      if (!Jf(q(this))) return;
      this._name ||=
        (B && H.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
        `<unlabeled transaction>`);
      let { scope: e, isolationScope: t } = cd(this),
        n = e?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
      if (this._sampled !== !0) return;
      let r = Yd(this)
          .filter((e) => e !== this && !Yf(e))
          .map((e) => q(e))
          .filter(Jf),
        i = this._attributes[Ku];
      (delete this._attributes[Qu],
        r.forEach((e) => {
          delete e.data[Qu];
        }));
      let a = {
          contexts: { trace: Fd(this) },
          spans: r.length > Gf ? r.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, Gf) : r,
          start_timestamp: this._startTime,
          timestamp: this._endTime,
          transaction: this._name,
          type: `transaction`,
          sdkProcessingMetadata: {
            capturedSpanScope: e,
            capturedSpanIsolationScope: t,
            dynamicSamplingContext: ff(this),
          },
          request: n,
          ...(i && { transaction_info: { source: i } }),
        },
        o = Wf(this._events);
      return (
        o &&
          Object.keys(o).length &&
          (B &&
            H.log(`[Measurements] Adding measurements to transaction event`, JSON.stringify(o, void 0, 2)),
          (a.measurements = o)),
        a
      );
    }
  };
function qf(e) {
  return (e && typeof e == `number`) || e instanceof Date || Array.isArray(e);
}
function Jf(e) {
  return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id;
}
function Yf(e) {
  return e instanceof Kf && e.isStandaloneSpan();
}
function Xf(e) {
  let t = K();
  if (!t) return;
  let n = e[1];
  if (!n || n.length === 0) {
    t.recordDroppedEvent(`before_send`, `span`);
    return;
  }
  t.sendEnvelope(e);
}
function Zf(e, t, n = () => {}, r = () => {}) {
  let i;
  try {
    i = e();
  } catch (e) {
    throw (t(e), n(), e);
  }
  return Qf(i, t, n, r);
}
function Qf(e, t, n, r) {
  return Ll(e)
    ? e.then(
        (e) => (n(), r(e), e),
        (e) => {
          throw (t(e), n(), e);
        },
      )
    : (n(), r(e), e);
}
function $f(e, t, n) {
  if (!tf(e)) return [!1];
  let r, i;
  typeof e.tracesSampler == `function`
    ? ((i = e.tracesSampler({
        ...t,
        inheritOrSampleWith: (e) =>
          typeof t.parentSampleRate == `number`
            ? t.parentSampleRate
            : typeof t.parentSampled == `boolean`
              ? Number(t.parentSampled)
              : e,
      })),
      (r = !0))
    : t.parentSampled === void 0
      ? e.tracesSampleRate !== void 0 && ((i = e.tracesSampleRate), (r = !0))
      : (i = t.parentSampled);
  let a = Ed(i);
  if (a === void 0)
    return (
      B &&
        H.warn(
          `[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(i)} of type ${JSON.stringify(typeof i)}.`,
        ),
      [!1]
    );
  if (!a)
    return (
      B &&
        H.log(
          `[Tracing] Discarding transaction because ${typeof e.tracesSampler == `function` ? `tracesSampler returned 0 or false` : `a negative sampling decision was inherited or tracesSampleRate is set to 0`}`,
        ),
      [!1, a, r]
    );
  let o = n < a;
  return (
    o ||
      (B &&
        H.log(
          `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`,
        )),
    [o, a, r]
  );
}
var ep = `__SENTRY_SUPPRESS_TRACING__`;
function tp(e) {
  let t = ap();
  if (t.startInactiveSpan) return t.startInactiveSpan(e);
  let n = ip(e),
    { forceTransaction: r, parentSpan: i } = e;
  return (e.scope ? (t) => Wu(e.scope, t) : i === void 0 ? (e) => e() : (e) => np(i, e))(() => {
    let t = W(),
      a = cp(t, i);
    return e.onlyIfParent && !a
      ? new pf()
      : rp({ parentSpan: a, spanArguments: n, forceTransaction: r, scope: t });
  });
}
function np(e, t) {
  let n = ap();
  return n.withActiveSpan ? n.withActiveSpan(e, t) : Wu((n) => (ku(n, e || void 0), t(n)));
}
function rp({ parentSpan: e, spanArguments: t, forceTransaction: n, scope: r }) {
  if (!tf()) {
    let r = new pf();
    return ((n || !e) && lf(r, { sampled: `false`, sample_rate: `0`, transaction: t.name, ...ff(r) }), r);
  }
  let i = G(),
    a;
  if (e && !n) ((a = sp(e, r, t)), Jd(e, a));
  else if (e) {
    let n = ff(e),
      { traceId: i, spanId: o } = e.spanContext(),
      s = Wd(e);
    ((a = op({ traceId: i, parentSpanId: o, ...t }, r, s)), lf(a, n));
  } else {
    let {
      traceId: e,
      dsc: n,
      parentSpanId: o,
      sampled: s,
    } = { ...i.getPropagationContext(), ...r.getPropagationContext() };
    ((a = op({ traceId: e, parentSpanId: o, ...t }, r, s)), n && lf(a, n));
  }
  return (Hf(a), sd(a, r, i), a);
}
function ip(e) {
  let t = { isStandalone: (e.experimental || {}).standalone, ...e };
  if (e.startTime) {
    let n = { ...t };
    return ((n.startTimestamp = Bd(e.startTime)), delete n.startTime, n);
  }
  return t;
}
function ap() {
  return Hu(Wc());
}
function op(e, t, n) {
  let r = K(),
    i = r?.getOptions() || {},
    { name: a = `` } = e,
    o = { spanAttributes: { ...e.attributes }, spanName: a, parentSampled: n };
  r?.emit(`beforeSampling`, o, { decision: !1 });
  let s = o.parentSampled ?? n,
    c = o.spanAttributes,
    l = t.getPropagationContext(),
    [u, d, f] = t.getScopeData().sdkProcessingMetadata[ep]
      ? [!1]
      : $f(
          i,
          { name: a, parentSampled: s, attributes: c, parentSampleRate: Ed(l.dsc?.sample_rate) },
          l.sampleRand,
        ),
    p = new Kf({
      ...e,
      attributes: { [Ku]: `custom`, [qu]: d !== void 0 && f ? d : void 0, ...c },
      sampled: u,
    });
  return (
    !u &&
      r &&
      (B && H.log(`[Tracing] Discarding root span because its trace was not chosen to be sampled.`),
      r.recordDroppedEvent(`sample_rate`, `transaction`)),
    r && r.emit(`spanStart`, p),
    p
  );
}
function sp(e, t, n) {
  let { spanId: r, traceId: i } = e.spanContext(),
    a = !t.getScopeData().sdkProcessingMetadata[ep] && Wd(e),
    o = a ? new Kf({ ...n, parentSpanId: r, traceId: i, sampled: a }) : new pf({ traceId: i });
  Jd(e, o);
  let s = K();
  return (s && (s.emit(`spanStart`, o), n.endTimestamp && s.emit(`spanEnd`, o)), o);
}
function cp(e, t) {
  if (t) return t;
  if (t === null) return;
  let n = Au(e);
  if (!n) return;
  let r = K();
  return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? Xd(n) : n;
}
var lp = 0,
  up = 1,
  dp = 2;
function fp(e) {
  return new mp((t) => {
    t(e);
  });
}
function pp(e) {
  return new mp((t, n) => {
    n(e);
  });
}
var mp = class e {
  constructor(e) {
    ((this._state = lp), (this._handlers = []), this._runExecutor(e));
  }
  then(t, n) {
    return new e((e, r) => {
      (this._handlers.push([
        !1,
        (n) => {
          if (!t) e(n);
          else
            try {
              e(t(n));
            } catch (e) {
              r(e);
            }
        },
        (t) => {
          if (!n) r(t);
          else
            try {
              e(n(t));
            } catch (e) {
              r(e);
            }
        },
      ]),
        this._executeHandlers());
    });
  }
  catch(e) {
    return this.then((e) => e, e);
  }
  finally(t) {
    return new e((e, n) => {
      let r, i;
      return this.then(
        (e) => {
          ((i = !1), (r = e), t && t());
        },
        (e) => {
          ((i = !0), (r = e), t && t());
        },
      ).then(() => {
        if (i) {
          n(r);
          return;
        }
        e(r);
      });
    });
  }
  _executeHandlers() {
    if (this._state === lp) return;
    let e = this._handlers.slice();
    ((this._handlers = []),
      e.forEach((e) => {
        e[0] ||= (this._state === up && e[1](this._value), this._state === dp && e[2](this._value), !0);
      }));
  }
  _runExecutor(e) {
    let t = (e, t) => {
        if (this._state === lp) {
          if (Ll(t)) {
            t.then(n, r);
            return;
          }
          ((this._state = e), (this._value = t), this._executeHandlers());
        }
      },
      n = (e) => {
        t(up, e);
      },
      r = (e) => {
        t(dp, e);
      };
    try {
      e(n, r);
    } catch (e) {
      r(e);
    }
  }
};
function hp(e, t, n, r = 0) {
  try {
    let i = gp(t, n, e, r);
    return Ll(i) ? i : fp(i);
  } catch (e) {
    return pp(e);
  }
}
function gp(e, t, n, r) {
  let i = n[r];
  if (!e || !i) return e;
  let a = i({ ...e }, t);
  return (
    B && a === null && H.log(`Event processor "${i.id || `?`}" dropped event`),
    Ll(a) ? a.then((e) => gp(e, t, n, r + 1)) : gp(a, t, n, r + 1)
  );
}
function _p(e, t) {
  let { fingerprint: n, span: r, breadcrumbs: i, sdkProcessingMetadata: a } = t;
  (bp(e, t), r && Cp(e, r), wp(e, n), xp(e, i), Sp(e, a));
}
function vp(e, t) {
  let {
    extra: n,
    tags: r,
    user: i,
    contexts: a,
    level: o,
    sdkProcessingMetadata: s,
    breadcrumbs: c,
    fingerprint: l,
    eventProcessors: u,
    attachments: d,
    propagationContext: f,
    transactionName: p,
    span: m,
  } = t;
  (yp(e, `extra`, n),
    yp(e, `tags`, r),
    yp(e, `user`, i),
    yp(e, `contexts`, a),
    (e.sdkProcessingMetadata = Tu(e.sdkProcessingMetadata, s, 2)),
    o && (e.level = o),
    p && (e.transactionName = p),
    m && (e.span = m),
    c.length && (e.breadcrumbs = [...e.breadcrumbs, ...c]),
    l.length && (e.fingerprint = [...e.fingerprint, ...l]),
    u.length && (e.eventProcessors = [...e.eventProcessors, ...u]),
    d.length && (e.attachments = [...e.attachments, ...d]),
    (e.propagationContext = { ...e.propagationContext, ...f }));
}
function yp(e, t, n) {
  e[t] = Tu(e[t], n, 1);
}
function bp(e, t) {
  let { extra: n, tags: r, user: i, contexts: a, level: o, transactionName: s } = t;
  (Object.keys(n).length && (e.extra = { ...n, ...e.extra }),
    Object.keys(r).length && (e.tags = { ...r, ...e.tags }),
    Object.keys(i).length && (e.user = { ...i, ...e.user }),
    Object.keys(a).length && (e.contexts = { ...a, ...e.contexts }),
    o && (e.level = o),
    s && e.type !== `transaction` && (e.transaction = s));
}
function xp(e, t) {
  let n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : void 0;
}
function Sp(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function Cp(e, t) {
  ((e.contexts = { trace: Id(t), ...e.contexts }),
    (e.sdkProcessingMetadata = { dynamicSamplingContext: ff(t), ...e.sdkProcessingMetadata }));
  let n = q(Xd(t)).description;
  n && !e.transaction && e.type === `transaction` && (e.transaction = n);
}
function wp(e, t) {
  ((e.fingerprint = e.fingerprint ? (Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint]) : []),
    t && (e.fingerprint = e.fingerprint.concat(t)),
    e.fingerprint.length || delete e.fingerprint);
}
var Tp, Ep, Dp, Op;
function kp(e) {
  let t = V._sentryDebugIds,
    n = V._debugIds;
  if (!t && !n) return {};
  let r = t ? Object.keys(t) : [],
    i = n ? Object.keys(n) : [];
  if (Op && r.length === Ep && i.length === Dp) return Op;
  ((Ep = r.length), (Dp = i.length), (Op = {}), (Tp ||= {}));
  let a = (t, n) => {
    for (let r of t) {
      let t = n[r],
        i = Tp?.[r];
      if (i && Op && t) ((Op[i[0]] = t), Tp && (Tp[r] = [i[0], t]));
      else if (t) {
        let n = e(r);
        for (let e = n.length - 1; e >= 0; e--) {
          let i = n[e]?.filename;
          if (i && Op && Tp) {
            ((Op[i] = t), (Tp[r] = [i, t]));
            break;
          }
        }
      }
    }
  };
  return (t && a(r, t), n && a(i, n), Op);
}
function Ap(e, t, n, r, i, a) {
  let { normalizeDepth: o = 3, normalizeMaxBreadth: s = 1e3 } = e,
    c = { ...t, event_id: t.event_id || n.event_id || U(), timestamp: t.timestamp || _u() },
    l = n.integrations || e.integrations.map((e) => e.name);
  (jp(c, e), Pp(c, l), i && i.emit(`applyFrameMetadata`, t), t.type === void 0 && Mp(c, e.stackParser));
  let u = Ip(r, n.captureContext);
  n.mechanism && uu(c, n.mechanism);
  let d = i ? i.getEventProcessors() : [],
    f = Uu().getScopeData();
  (a && vp(f, a.getScopeData()), u && vp(f, u.getScopeData()));
  let p = [...(n.attachments || []), ...f.attachments];
  return (
    p.length && (n.attachments = p),
    _p(c, f),
    hp([...d, ...f.eventProcessors], c, n).then(
      (e) => (e && Np(e), typeof o == `number` && o > 0 ? Fp(e, o, s) : e),
    )
  );
}
function jp(e, t) {
  let { environment: n, release: r, dist: i, maxValueLength: a } = t;
  ((e.environment = e.environment || n || `production`),
    !e.release && r && (e.release = r),
    !e.dist && i && (e.dist = i));
  let o = e.request;
  (o?.url && a && (o.url = $l(o.url, a)),
    a &&
      e.exception?.values?.forEach((e) => {
        e.value &&= $l(e.value, a);
      }));
}
function Mp(e, t) {
  let n = kp(t);
  e.exception?.values?.forEach((e) => {
    e.stacktrace?.frames?.forEach((e) => {
      e.filename && (e.debug_id = n[e.filename]);
    });
  });
}
function Np(e) {
  let t = {};
  if (
    (e.exception?.values?.forEach((e) => {
      e.stacktrace?.frames?.forEach((e) => {
        e.debug_id &&
          (e.abs_path ? (t[e.abs_path] = e.debug_id) : e.filename && (t[e.filename] = e.debug_id),
          delete e.debug_id);
      });
    }),
    Object.keys(t).length === 0)
  )
    return;
  ((e.debug_meta = e.debug_meta || {}), (e.debug_meta.images = e.debug_meta.images || []));
  let n = e.debug_meta.images;
  Object.entries(t).forEach(([e, t]) => {
    n.push({ type: `sourcemap`, code_file: e, debug_id: t });
  });
}
function Pp(e, t) {
  t.length > 0 && ((e.sdk = e.sdk || {}), (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
}
function Fp(e, t, n) {
  if (!e) return null;
  let r = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map((e) => ({ ...e, ...(e.data && { data: mf(e.data, t, n) }) })),
    }),
    ...(e.user && { user: mf(e.user, t, n) }),
    ...(e.contexts && { contexts: mf(e.contexts, t, n) }),
    ...(e.extra && { extra: mf(e.extra, t, n) }),
  };
  return (
    e.contexts?.trace &&
      r.contexts &&
      ((r.contexts.trace = e.contexts.trace),
      e.contexts.trace.data && (r.contexts.trace.data = mf(e.contexts.trace.data, t, n))),
    e.spans && (r.spans = e.spans.map((e) => ({ ...e, ...(e.data && { data: mf(e.data, t, n) }) }))),
    e.contexts?.flags && r.contexts && (r.contexts.flags = mf(e.contexts.flags, 3, n)),
    r
  );
}
function Ip(e, t) {
  if (!t) return e;
  let n = e ? e.clone() : new Mu();
  return (n.update(t), n);
}
function Lp(e) {
  if (e) return Rp(e) || Bp(e) ? { captureContext: e } : e;
}
function Rp(e) {
  return e instanceof Mu || typeof e == `function`;
}
var zp = [`user`, `level`, `extra`, `contexts`, `tags`, `fingerprint`, `propagationContext`];
function Bp(e) {
  return Object.keys(e).some((e) => zp.includes(e));
}
function Vp(e, t) {
  return W().captureException(e, Lp(t));
}
function Hp(e, t) {
  let n = typeof t == `string` ? t : void 0,
    r = typeof t == `string` ? void 0 : { captureContext: t };
  return W().captureMessage(e, n, r);
}
function Up(e, t) {
  return W().captureEvent(e, t);
}
function Wp(e, t) {
  G().setTag(e, t);
}
function Gp(e) {
  G().setUser(e);
}
async function Kp(e) {
  let t = K();
  return t ? t.flush(e) : (B && H.warn(`Cannot flush events. No client defined.`), Promise.resolve(!1));
}
function qp() {
  let e = K();
  return e?.getOptions().enabled !== !1 && !!e?.getTransport();
}
function Jp(e) {
  let t = G(),
    n = W(),
    { userAgent: r } = V.navigator || {},
    i = xu({ user: n.getUser() || t.getUser(), ...(r && { userAgent: r }), ...e }),
    a = t.getSession();
  return (a?.status === `ok` && Su(a, { status: `exited` }), Yp(), t.setSession(i), i);
}
function Yp() {
  let e = G(),
    t = W().getSession() || e.getSession();
  (t && Cu(t), Xp(), e.setSession());
}
function Xp() {
  let e = G(),
    t = K(),
    n = e.getSession();
  n && t && t.captureSession(n);
}
function Zp(e = !1) {
  if (e) {
    Yp();
    return;
  }
  Xp();
}
var Qp = `7`;
function $p(e) {
  let t = e.protocol ? `${e.protocol}:` : ``,
    n = e.port ? `:${e.port}` : ``;
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ``}/api/`;
}
function em(e) {
  return `${$p(e)}${e.projectId}/envelope/`;
}
function tm(e, t) {
  let n = { sentry_version: Qp };
  return (
    e.publicKey && (n.sentry_key = e.publicKey),
    t && (n.sentry_client = `${t.name}/${t.version}`),
    new URLSearchParams(n).toString()
  );
}
function nm(e, t, n) {
  return t || `${em(e)}?${tm(e, n)}`;
}
var rm = [];
function im(e) {
  let t = {};
  return (
    e.forEach((e) => {
      let { name: n } = e,
        r = t[n];
      (r && !r.isDefaultInstance && e.isDefaultInstance) || (t[n] = e);
    }),
    Object.values(t)
  );
}
function am(e) {
  let t = e.defaultIntegrations || [],
    n = e.integrations;
  t.forEach((e) => {
    e.isDefaultInstance = !0;
  });
  let r;
  if (Array.isArray(n)) r = [...t, ...n];
  else if (typeof n == `function`) {
    let e = n(t);
    r = Array.isArray(e) ? e : [e];
  } else r = t;
  return im(r);
}
function om(e, t) {
  let n = {};
  return (
    t.forEach((t) => {
      t && cm(e, t, n);
    }),
    n
  );
}
function sm(e, t) {
  for (let n of t) n?.afterAllSetup && n.afterAllSetup(e);
}
function cm(e, t, n) {
  if (n[t.name]) {
    B && H.log(`Integration skipped because it was already installed: ${t.name}`);
    return;
  }
  if (
    ((n[t.name] = t),
    !rm.includes(t.name) && typeof t.setupOnce == `function` && (t.setupOnce(), rm.push(t.name)),
    t.setup && typeof t.setup == `function` && t.setup(e),
    typeof t.preprocessEvent == `function`)
  ) {
    let n = t.preprocessEvent.bind(t);
    e.on(`preprocessEvent`, (t, r) => n(t, r, e));
  }
  if (typeof t.processEvent == `function`) {
    let n = t.processEvent.bind(t),
      r = Object.assign((t, r) => n(t, r, e), { id: t.name });
    e.addEventProcessor(r);
  }
  B && H.log(`Integration installed: ${t.name}`);
}
function J(e) {
  return e;
}
function lm(e, t) {
  return t
    ? Wu(t, () => {
        let n = Zd(),
          r = n ? Id(n) : Gu(t);
        return [n ? ff(n) : df(e, t), r];
      })
    : [void 0, void 0];
}
var um = { trace: 1, debug: 5, info: 9, warn: 13, error: 17, fatal: 21 };
function dm(e) {
  return [
    { type: `log`, item_count: e.length, content_type: `application/vnd.sentry.items.log+json` },
    { items: e },
  ];
}
function fm(e, t, n, r) {
  let i = {};
  return (
    t?.sdk && (i.sdk = { name: t.sdk.name, version: t.sdk.version }),
    n && r && (i.dsn = yd(r)),
    Cf(i, [dm(e)])
  );
}
var pm = 100;
function mm(e) {
  switch (typeof e) {
    case `number`:
      return Number.isInteger(e) ? { value: e, type: `integer` } : { value: e, type: `double` };
    case `boolean`:
      return { value: e, type: `boolean` };
    case `string`:
      return { value: e, type: `string` };
    default: {
      let t = ``;
      try {
        t = JSON.stringify(e) ?? ``;
      } catch {}
      return { value: t, type: `string` };
    }
  }
}
function hm(e, t, n, r = !0) {
  n && (!e[t] || r) && (e[t] = n);
}
function gm(e, t) {
  let n = xm(),
    r = ym(e);
  r === void 0 ? n.set(e, [t]) : r.length >= pm ? (vm(e, r), n.set(e, [t])) : n.set(e, [...r, t]);
}
function _m(e, t = W(), n = gm) {
  let r = t?.getClient() ?? K();
  if (!r) {
    B && H.warn(`No client available to capture log.`);
    return;
  }
  let { release: i, environment: a, enableLogs: o = !1, beforeSendLog: s } = r.getOptions();
  if (!o) {
    B && H.warn(`logging option not enabled, log will not be captured.`);
    return;
  }
  let [, c] = lm(r, t),
    l = { ...e.attributes },
    {
      user: { id: u, email: d, username: f },
    } = bm(t);
  (hm(l, `user.id`, u, !1),
    hm(l, `user.email`, d, !1),
    hm(l, `user.name`, f, !1),
    hm(l, `sentry.release`, i),
    hm(l, `sentry.environment`, a));
  let { name: p, version: m } = r.getSdkMetadata()?.sdk ?? {};
  (hm(l, `sentry.sdk.name`, p), hm(l, `sentry.sdk.version`, m));
  let h = r.getIntegrationByName(`Replay`),
    g = h?.getReplayId(!0);
  (hm(l, `sentry.replay_id`, g),
    g && h?.getRecordingMode() === `buffer` && hm(l, `sentry._internal.replay_is_buffering`, !0));
  let _ = e.message;
  if (jl(_)) {
    let { __sentry_template_string__: e, __sentry_template_values__: t = [] } = _;
    (t?.length && (l[`sentry.message.template`] = e),
      t.forEach((e, t) => {
        l[`sentry.message.parameter.${t}`] = e;
      }));
  }
  hm(l, `sentry.trace.parent_span_id`, Au(t)?.spanContext().spanId);
  let v = { ...e, attributes: l };
  r.emit(`beforeCaptureLog`, v);
  let y = s ? Xc(() => s(v)) : v;
  if (!y) {
    (r.recordDroppedEvent(`before_send`, `log_item`, 1),
      B && H.warn(`beforeSendLog returned null, log will not be captured.`));
    return;
  }
  let { level: b, message: x, attributes: S = {}, severityNumber: C } = y;
  (n(r, {
    timestamp: bu(),
    level: b,
    body: x,
    trace_id: c?.trace_id,
    severity_number: C ?? um[b],
    attributes: Object.keys(S).reduce((e, t) => ((e[t] = mm(S[t])), e), {}),
  }),
    r.emit(`afterCaptureLog`, y));
}
function vm(e, t) {
  let n = t ?? ym(e) ?? [];
  if (n.length === 0) return;
  let r = e.getOptions(),
    i = fm(n, r._metadata, r.tunnel, e.getDsn());
  (xm().set(e, []), e.emit(`flushLogs`), e.sendEnvelope(i));
}
function ym(e) {
  return xm().get(e);
}
function bm(e) {
  let t = Uu().getScopeData();
  return (vp(t, G().getScopeData()), vp(t, e.getScopeData()), t);
}
function xm() {
  return Kc(`clientToLogBufferMap`, () => new WeakMap());
}
function Sm(e) {
  return [
    {
      type: `trace_metric`,
      item_count: e.length,
      content_type: `application/vnd.sentry.items.trace-metric+json`,
    },
    { items: e },
  ];
}
function Cm(e, t, n, r) {
  let i = {};
  return (
    t?.sdk && (i.sdk = { name: t.sdk.name, version: t.sdk.version }),
    n && r && (i.dsn = yd(r)),
    Cf(i, [Sm(e)])
  );
}
var wm = 1e3;
function Tm(e, t) {
  let n = Om(),
    r = Dm(e);
  r === void 0 ? n.set(e, [t]) : r.length >= wm ? (Em(e, r), n.set(e, [t])) : n.set(e, [...r, t]);
}
function Em(e, t) {
  let n = t ?? Dm(e) ?? [];
  if (n.length === 0) return;
  let r = e.getOptions(),
    i = Cm(n, r._metadata, r.tunnel, e.getDsn());
  (Om().set(e, []), e.emit(`flushMetrics`), e.sendEnvelope(i));
}
function Dm(e) {
  return Om().get(e);
}
function Om() {
  return Kc(`clientToMetricBufferMap`, () => new WeakMap());
}
var km = Symbol.for(`SentryBufferFullError`);
function Am(e = 100) {
  let t = new Set();
  function n() {
    return t.size < e;
  }
  function r(e) {
    t.delete(e);
  }
  function i(e) {
    if (!n()) return pp(km);
    let i = e();
    return (
      t.add(i),
      i.then(
        () => r(i),
        () => r(i),
      ),
      i
    );
  }
  function a(e) {
    if (!t.size) return fp(!0);
    let n = Promise.allSettled(Array.from(t)).then(() => !0);
    if (!e) return n;
    let r = [n, new Promise((t) => setTimeout(() => t(!1), e))];
    return Promise.race(r);
  }
  return {
    get $() {
      return Array.from(t);
    },
    add: i,
    drain: a,
  };
}
var jm = 6e4;
function Mm(e, t = Date.now()) {
  let n = parseInt(`${e}`, 10);
  if (!isNaN(n)) return n * 1e3;
  let r = Date.parse(`${e}`);
  return isNaN(r) ? jm : r - t;
}
function Nm(e, t) {
  return e[t] || e.all || 0;
}
function Pm(e, t, n = Date.now()) {
  return Nm(e, t) > n;
}
function Fm(e, { statusCode: t, headers: n }, r = Date.now()) {
  let i = { ...e },
    a = n?.[`x-sentry-rate-limits`],
    o = n?.[`retry-after`];
  if (a)
    for (let e of a.trim().split(`,`)) {
      let [t, n, , , a] = e.split(`:`, 5),
        o = parseInt(t, 10),
        s = (isNaN(o) ? 60 : o) * 1e3;
      if (!n) i.all = r + s;
      else
        for (let e of n.split(`;`))
          e === `metric_bucket` ? (!a || a.split(`;`).includes(`custom`)) && (i[e] = r + s) : (i[e] = r + s);
    }
  else o ? (i.all = r + Mm(o, r)) : t === 429 && (i.all = r + 6e4);
  return i;
}
function Im(e, t, n = Am(e.bufferSize || 64)) {
  let r = {},
    i = (e) => n.drain(e);
  function a(i) {
    let a = [];
    if (
      (Tf(i, (t, n) => {
        let i = Ff(n);
        Pm(r, i) ? e.recordDroppedEvent(`ratelimit_backoff`, i) : a.push(t);
      }),
      a.length === 0)
    )
      return Promise.resolve({});
    let o = Cf(i[0], a),
      s = (t) => {
        Tf(o, (n, r) => {
          e.recordDroppedEvent(t, Ff(r));
        });
      };
    return n
      .add(() =>
        t({ body: kf(o) }).then(
          (e) => (
            e.statusCode !== void 0 &&
              (e.statusCode < 200 || e.statusCode >= 300) &&
              B &&
              H.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),
            (r = Fm(r, e)),
            e
          ),
          (e) => {
            throw (s(`network_error`), B && H.error(`Encountered error running transport request:`, e), e);
          },
        ),
      )
      .then(
        (e) => e,
        (e) => {
          if (e === km)
            return (
              B && H.error(`Skipped sending event because buffer is full.`),
              s(`queue_overflow`),
              Promise.resolve({})
            );
          throw e;
        },
      );
  }
  return { send: a, flush: i };
}
function Lm(e, t, n) {
  let r = [{ type: `client_report` }, { timestamp: n || _u(), discarded_events: e }];
  return Cf(t ? { dsn: t } : {}, [r]);
}
function Rm(e) {
  let t = [];
  e.message && t.push(e.message);
  try {
    let n = e.exception.values[e.exception.values.length - 1];
    n?.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`));
  } catch {}
  return t;
}
function zm(e) {
  let {
    trace_id: t,
    parent_span_id: n,
    span_id: r,
    status: i,
    origin: a,
    data: o,
    op: s,
  } = e.contexts?.trace ?? {};
  return {
    data: o ?? {},
    description: e.transaction,
    op: s,
    parent_span_id: n,
    span_id: r ?? ``,
    start_timestamp: e.start_timestamp ?? 0,
    status: i,
    timestamp: e.timestamp,
    trace_id: t ?? ``,
    origin: a,
    profile_id: o?.[$u],
    exclusive_time: o?.[ed],
    measurements: e.measurements,
    is_segment: !0,
  };
}
function Bm(e) {
  return {
    type: `transaction`,
    timestamp: e.timestamp,
    start_timestamp: e.start_timestamp,
    transaction: e.description,
    contexts: {
      trace: {
        trace_id: e.trace_id,
        span_id: e.span_id,
        parent_span_id: e.parent_span_id,
        op: e.op,
        status: e.status,
        origin: e.origin,
        data: {
          ...e.data,
          ...(e.profile_id && { "sentry.profile_id": e.profile_id }),
          ...(e.exclusive_time && { "sentry.exclusive_time": e.exclusive_time }),
        },
      },
    },
    measurements: e.measurements,
  };
}
var Vm = `Not capturing exception because it's already been captured.`,
  Hm = `Discarded session because of missing or non-string release`,
  Um = Symbol.for(`SentryInternalError`),
  Wm = Symbol.for(`SentryDoNotSendEventError`),
  Gm = 5e3;
function Km(e) {
  return { message: e, [Um]: !0 };
}
function qm(e) {
  return { message: e, [Wm]: !0 };
}
function Jm(e) {
  return !!e && typeof e == `object` && Um in e;
}
function Ym(e) {
  return !!e && typeof e == `object` && Wm in e;
}
function Xm(e, t, n, r, i) {
  let a = 0,
    o,
    s = !1;
  (e.on(n, () => {
    ((a = 0), clearTimeout(o), (s = !1));
  }),
    e.on(t, (t) => {
      ((a += r(t)),
        a >= 8e5
          ? i(e)
          : s ||
            ((s = !0),
            (o = setTimeout(() => {
              i(e);
            }, Gm))));
    }),
    e.on(`flush`, () => {
      i(e);
    }));
}
var Zm = class {
  constructor(e) {
    if (
      ((this._options = e),
      (this._integrations = {}),
      (this._numProcessing = 0),
      (this._outcomes = {}),
      (this._hooks = {}),
      (this._eventProcessors = []),
      (this._promiseBuffer = Am(e.transportOptions?.bufferSize ?? 64)),
      e.dsn ? (this._dsn = Td(e.dsn)) : B && H.warn(`No DSN provided, client will not send events.`),
      this._dsn)
    ) {
      let t = nm(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
      this._transport = e.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...e.transportOptions,
        url: t,
      });
    }
    ((this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs),
      this._options.enableLogs && Xm(this, `afterCaptureLog`, `flushLogs`, ih, vm),
      (this._options.enableMetrics ?? this._options._experiments?.enableMetrics ?? !0) &&
        Xm(this, `afterCaptureMetric`, `flushMetrics`, rh, Em));
  }
  captureException(e, t, n) {
    let r = U();
    if (mu(e)) return (B && H.log(Vm), r);
    let i = { event_id: r, ...t };
    return (
      this._process(
        () =>
          this.eventFromException(e, i)
            .then((e) => this._captureEvent(e, i, n))
            .then((e) => e),
        `error`,
      ),
      i.event_id
    );
  }
  captureMessage(e, t, n, r) {
    let i = { event_id: U(), ...n },
      a = jl(e) ? e : String(e),
      o = Ml(e),
      s = o ? this.eventFromMessage(a, t, i) : this.eventFromException(e, i);
    return (
      this._process(() => s.then((e) => this._captureEvent(e, i, r)), o ? `unknown` : `error`),
      i.event_id
    );
  }
  captureEvent(e, t, n) {
    let r = U();
    if (t?.originalException && mu(t.originalException)) return (B && H.log(Vm), r);
    let i = { event_id: r, ...t },
      a = e.sdkProcessingMetadata || {},
      o = a.capturedSpanScope,
      s = a.capturedSpanIsolationScope,
      c = Qm(e.type);
    return (this._process(() => this._captureEvent(e, i, o || n, s), c), i.event_id);
  }
  captureSession(e) {
    (this.sendSession(e), Su(e, { init: !1 }));
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  async flush(e) {
    let t = this._transport;
    if (!t) return !0;
    this.emit(`flush`);
    let n = await this._isClientDoneProcessing(e),
      r = await t.flush(e);
    return n && r;
  }
  async close(e) {
    let t = await this.flush(e);
    return ((this.getOptions().enabled = !1), this.emit(`close`), t);
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(e) {
    this._eventProcessors.push(e);
  }
  init() {
    (this._isEnabled() || this._options.integrations.some(({ name: e }) => e.startsWith(`Spotlight`))) &&
      this._setupIntegrations();
  }
  getIntegrationByName(e) {
    return this._integrations[e];
  }
  addIntegration(e) {
    let t = this._integrations[e.name];
    (cm(this, e, this._integrations), t || sm(this, [e]));
  }
  sendEvent(e, t = {}) {
    this.emit(`beforeSendEvent`, e, t);
    let n = Bf(e, this._dsn, this._options._metadata, this._options.tunnel);
    for (let e of t.attachments || []) n = wf(n, Nf(e));
    this.sendEnvelope(n).then((t) => this.emit(`afterSendEvent`, e, t));
  }
  sendSession(e) {
    let { release: t, environment: n = sf } = this._options;
    if (`aggregates` in e) {
      let r = e.attrs || {};
      if (!r.release && !t) {
        B && H.warn(Hm);
        return;
      }
      ((r.release = r.release || t), (r.environment = r.environment || n), (e.attrs = r));
    } else {
      if (!e.release && !t) {
        B && H.warn(Hm);
        return;
      }
      ((e.release = e.release || t), (e.environment = e.environment || n));
    }
    this.emit(`beforeSendSession`, e);
    let r = zf(e, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(r);
  }
  recordDroppedEvent(e, t, n = 1) {
    if (this._options.sendClientReports) {
      let r = `${e}:${t}`;
      (B && H.log(`Recording outcome: "${r}"${n > 1 ? ` (${n} times)` : ``}`),
        (this._outcomes[r] = (this._outcomes[r] || 0) + n));
    }
  }
  on(e, t) {
    let n = (this._hooks[e] = this._hooks[e] || new Set()),
      r = (...e) => t(...e);
    return (
      n.add(r),
      () => {
        n.delete(r);
      }
    );
  }
  emit(e, ...t) {
    let n = this._hooks[e];
    n && n.forEach((e) => e(...t));
  }
  async sendEnvelope(e) {
    if ((this.emit(`beforeEnvelope`, e), this._isEnabled() && this._transport))
      try {
        return await this._transport.send(e);
      } catch (e) {
        return (B && H.error(`Error while sending envelope:`, e), {});
      }
    return (B && H.error(`Transport disabled`), {});
  }
  _setupIntegrations() {
    let { integrations: e } = this._options;
    ((this._integrations = om(this, e)), sm(this, e));
  }
  _updateSessionFromEvent(e, t) {
    let n = t.level === `fatal`,
      r = !1,
      i = t.exception?.values;
    if (i) {
      ((r = !0), (n = !1));
      for (let e of i)
        if (e.mechanism?.handled === !1) {
          n = !0;
          break;
        }
    }
    let a = e.status === `ok`;
    ((a && e.errors === 0) || (a && n)) &&
      (Su(e, { ...(n && { status: `crashed` }), errors: e.errors || Number(r || n) }),
      this.captureSession(e));
  }
  async _isClientDoneProcessing(e) {
    let t = 0;
    for (; !e || t < e;) {
      if ((await new Promise((e) => setTimeout(e, 1)), !this._numProcessing)) return !0;
      t++;
    }
    return !1;
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0;
  }
  _prepareEvent(e, t, n, r) {
    let i = this.getOptions(),
      a = Object.keys(this._integrations);
    return (
      !t.integrations && a?.length && (t.integrations = a),
      this.emit(`preprocessEvent`, e, t),
      e.type || r.setLastEventId(e.event_id || t.event_id),
      Ap(i, e, t, n, this, r).then((e) =>
        e === null
          ? e
          : (this.emit(`postprocessEvent`, e, t),
            (e.contexts = { trace: Gu(n), ...e.contexts }),
            (e.sdkProcessingMetadata = { dynamicSamplingContext: df(this, n), ...e.sdkProcessingMetadata }),
            e),
      )
    );
  }
  _captureEvent(e, t = {}, n = W(), r = G()) {
    return (
      B && th(e) && H.log(`Captured error event \`${Rm(e)[0] || `<unknown>`}\``),
      this._processEvent(e, t, n, r).then(
        (e) => e.event_id,
        (e) => {
          B && (Ym(e) ? H.log(e.message) : Jm(e) ? H.warn(e.message) : H.warn(e));
        },
      )
    );
  }
  _processEvent(e, t, n, r) {
    let i = this.getOptions(),
      { sampleRate: a } = i,
      o = nh(e),
      s = th(e),
      c = `before send for type \`${e.type || `error`}\``,
      l = a === void 0 ? void 0 : Ed(a);
    if (s && typeof l == `number` && Math.random() > l)
      return (
        this.recordDroppedEvent(`sample_rate`, `error`),
        pp(qm(`Discarding event because it's not included in the random sample (sampling rate = ${a})`))
      );
    let u = Qm(e.type);
    return this._prepareEvent(e, t, n, r)
      .then((e) => {
        if (e === null)
          throw (
            this.recordDroppedEvent(`event_processor`, u),
            qm("An event processor returned `null`, will not send event.")
          );
        return t.data && t.data.__sentry__ === !0 ? e : $m(eh(this, i, e, t), c);
      })
      .then((i) => {
        if (i === null) {
          if ((this.recordDroppedEvent(`before_send`, u), o)) {
            let t = 1 + (e.spans || []).length;
            this.recordDroppedEvent(`before_send`, `span`, t);
          }
          throw qm(`${c} returned \`null\`, will not send event.`);
        }
        let a = n.getSession() || r.getSession();
        if ((s && a && this._updateSessionFromEvent(a, i), o)) {
          let e = (i.sdkProcessingMetadata?.spanCountBeforeProcessing || 0) - (i.spans ? i.spans.length : 0);
          e > 0 && this.recordDroppedEvent(`before_send`, `span`, e);
        }
        let l = i.transaction_info;
        return (
          o && l && i.transaction !== e.transaction && (i.transaction_info = { ...l, source: `custom` }),
          this.sendEvent(i, t),
          i
        );
      })
      .then(null, (e) => {
        throw Ym(e) || Jm(e)
          ? e
          : (this.captureException(e, {
              mechanism: { handled: !1, type: `internal` },
              data: { __sentry__: !0 },
              originalException: e,
            }),
            Km(
              `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`,
            ));
      });
  }
  _process(e, t) {
    (this._numProcessing++,
      this._promiseBuffer.add(e).then(
        (e) => (this._numProcessing--, e),
        (e) => (this._numProcessing--, e === km && this.recordDroppedEvent(`queue_overflow`, t), e),
      ));
  }
  _clearOutcomes() {
    let e = this._outcomes;
    return (
      (this._outcomes = {}),
      Object.entries(e).map(([e, t]) => {
        let [n, r] = e.split(`:`);
        return { reason: n, category: r, quantity: t };
      })
    );
  }
  _flushOutcomes() {
    B && H.log(`Flushing outcomes...`);
    let e = this._clearOutcomes();
    if (e.length === 0) {
      B && H.log(`No outcomes to send`);
      return;
    }
    if (!this._dsn) {
      B && H.log(`No dsn provided, will not send outcomes`);
      return;
    }
    B && H.log(`Sending outcomes:`, e);
    let t = Lm(e, this._options.tunnel && yd(this._dsn));
    this.sendEnvelope(t);
  }
};
function Qm(e) {
  return e === `replay_event` ? `replay` : e || `error`;
}
function $m(e, t) {
  let n = `${t} must return \`null\` or a valid event.`;
  if (Ll(e))
    return e.then(
      (e) => {
        if (!Nl(e) && e !== null) throw Km(n);
        return e;
      },
      (e) => {
        throw Km(`${t} rejected with ${e}`);
      },
    );
  if (!Nl(e) && e !== null) throw Km(n);
  return e;
}
function eh(e, t, n, r) {
  let { beforeSend: i, beforeSendTransaction: a, beforeSendSpan: o, ignoreSpans: s } = t,
    c = n;
  if (th(c) && i) return i(c, r);
  if (nh(c)) {
    if (o || s) {
      let t = zm(c);
      if (s?.length && rf(t, s)) return null;
      if (o) {
        let e = o(t);
        e ? (c = Tu(n, Bm(e))) : Qd();
      }
      if (c.spans) {
        let t = [],
          n = c.spans;
        for (let e of n) {
          if (s?.length && rf(e, s)) {
            af(n, e);
            continue;
          }
          if (o) {
            let n = o(e);
            n ? t.push(n) : (Qd(), t.push(e));
          } else t.push(e);
        }
        let r = c.spans.length - t.length;
        (r && e.recordDroppedEvent(`before_send`, `span`, r), (c.spans = t));
      }
    }
    if (a) {
      if (c.spans) {
        let e = c.spans.length;
        c.sdkProcessingMetadata = { ...n.sdkProcessingMetadata, spanCountBeforeProcessing: e };
      }
      return a(c, r);
    }
  }
  return c;
}
function th(e) {
  return e.type === void 0;
}
function nh(e) {
  return e.type === `transaction`;
}
function rh(e) {
  let t = 0;
  return (e.name && (t += e.name.length * 2), (t += 8), t + ah(e.attributes));
}
function ih(e) {
  let t = 0;
  return (e.message && (t += e.message.length * 2), t + ah(e.attributes));
}
function ah(e) {
  if (!e) return 0;
  let t = 0;
  return (
    Object.values(e).forEach((e) => {
      Array.isArray(e) ? (t += e.length * oh(e[0])) : Ml(e) ? (t += oh(e)) : (t += 100);
    }),
    t
  );
}
function oh(e) {
  return typeof e == `string` ? e.length * 2 : typeof e == `number` ? 8 : typeof e == `boolean` ? 4 : 0;
}
function sh(e, t, n, r, i) {
  let a = { sent_at: new Date().toISOString() };
  return (
    n?.sdk && (a.sdk = { name: n.sdk.name, version: n.sdk.version }),
    r && i && (a.dsn = yd(i)),
    t && (a.trace = t),
    Cf(a, [ch(e)])
  );
}
function ch(e) {
  return [{ type: `check_in` }, e];
}
function lh(e) {
  let t = e._metadata?.sdk,
    n = t?.name && t?.version ? `${t?.name}/${t?.version}` : void 0;
  e.transportOptions = {
    ...e.transportOptions,
    headers: { ...(n && { "user-agent": n }), ...e.transportOptions?.headers },
  };
}
function uh(e, t) {
  return e(t.stack || ``, 1);
}
function dh(e, t) {
  let n = { type: t.name || t.constructor.name, value: t.message },
    r = uh(e, t);
  return (r.length && (n.stacktrace = { frames: r }), n);
}
function fh(e) {
  for (let t in e)
    if (Object.prototype.hasOwnProperty.call(e, t)) {
      let n = e[t];
      if (n instanceof Error) return n;
    }
}
function ph(e) {
  if (`name` in e && typeof e.name == `string`) {
    let t = `'${e.name}' captured as exception`;
    return (`message` in e && typeof e.message == `string` && (t += ` with message '${e.message}'`), t);
  }
  if (`message` in e && typeof e.message == `string`) return e.message;
  let t = Ql(e);
  if (kl(e)) return `Event \`ErrorEvent\` captured as exception with message \`${e.message}\``;
  let n = mh(e);
  return `${n && n !== `Object` ? `'${n}'` : `Object`} captured as exception with keys: ${t}`;
}
function mh(e) {
  try {
    let t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : void 0;
  } catch {}
}
function hh(e, t, n, r) {
  if (Dl(n)) return [n, void 0];
  if (((t.synthetic = !0), Nl(n))) {
    let t = e?.getOptions().normalizeDepth,
      i = { __serialized__: hf(n, t) },
      a = fh(n);
    if (a) return [a, i];
    let o = ph(n),
      s = r?.syntheticException || Error(o);
    return ((s.message = o), [s, i]);
  }
  let i = r?.syntheticException || Error(n);
  return ((i.message = `${n}`), [i, void 0]);
}
function gh(e, t, n, r) {
  let i = (r?.data && r.data.mechanism) || { handled: !0, type: `generic` },
    [a, o] = hh(e, i, n, r),
    s = { exception: { values: [dh(t, a)] } };
  return (o && (s.extra = o), lu(s, void 0, void 0), uu(s, i), { ...s, event_id: r?.event_id });
}
function _h(e, t, n = `info`, r, i) {
  let a = { event_id: r?.event_id, level: n };
  if (i && r?.syntheticException) {
    let n = uh(e, r.syntheticException);
    n.length &&
      ((a.exception = { values: [{ value: t, stacktrace: { frames: n } }] }), uu(a, { synthetic: !0 }));
  }
  if (jl(t)) {
    let { __sentry_template_string__: e, __sentry_template_values__: n } = t;
    return ((a.logentry = { message: e, params: n }), a);
  }
  return ((a.message = t), a);
}
var vh = class extends Zm {
  constructor(e) {
    (ef(), lh(e), super(e), this._setUpMetricsProcessing());
  }
  eventFromException(e, t) {
    let n = gh(this, this._options.stackParser, e, t);
    return ((n.level = `error`), fp(n));
  }
  eventFromMessage(e, t = `info`, n) {
    return fp(_h(this._options.stackParser, e, t, n, this._options.attachStacktrace));
  }
  captureException(e, t, n) {
    return (yh(t), super.captureException(e, t, n));
  }
  captureEvent(e, t, n) {
    return (
      !e.type && e.exception?.values && e.exception.values.length > 0 && yh(t),
      super.captureEvent(e, t, n)
    );
  }
  captureCheckIn(e, t, n) {
    let r = `checkInId` in e && e.checkInId ? e.checkInId : U();
    if (!this._isEnabled()) return (B && H.warn(`SDK not enabled, will not capture check-in.`), r);
    let { release: i, environment: a, tunnel: o } = this.getOptions(),
      s = { check_in_id: r, monitor_slug: e.monitorSlug, status: e.status, release: i, environment: a };
    (`duration` in e && (s.duration = e.duration),
      t &&
        (s.monitor_config = {
          schedule: t.schedule,
          checkin_margin: t.checkinMargin,
          max_runtime: t.maxRuntime,
          timezone: t.timezone,
          failure_issue_threshold: t.failureIssueThreshold,
          recovery_threshold: t.recoveryThreshold,
        }));
    let [c, l] = lm(this, n);
    l && (s.contexts = { trace: l });
    let u = sh(s, c, this.getSdkMetadata(), o, this.getDsn());
    return (B && H.log(`Sending checkin:`, e.monitorSlug, e.status), this.sendEnvelope(u), r);
  }
  _prepareEvent(e, t, n, r) {
    return (
      this._options.platform && (e.platform = e.platform || this._options.platform),
      this._options.runtime &&
        (e.contexts = { ...e.contexts, runtime: e.contexts?.runtime || this._options.runtime }),
      this._options.serverName && (e.server_name = e.server_name || this._options.serverName),
      super._prepareEvent(e, t, n, r)
    );
  }
  _setUpMetricsProcessing() {
    this.on(`processMetric`, (e) => {
      this._options.serverName &&
        (e.attributes = { "server.address": this._options.serverName, ...e.attributes });
    });
  }
};
function yh(e) {
  let t = G().getScopeData().sdkProcessingMetadata.requestSession;
  if (t) {
    let n = e?.mechanism?.handled ?? !0;
    n && t.status !== `crashed` ? (t.status = `errored`) : n || (t.status = `crashed`);
  }
}
var bh = 5e3,
  xh = 36e5;
function Sh(e) {
  function t(...e) {
    B && H.log(`[Offline]:`, ...e);
  }
  return (n) => {
    let r = e(n);
    if (!n.createStore) throw Error("No `createStore` function was provided");
    let i = n.createStore(n),
      a = bh,
      o;
    function s(e, t, r) {
      return Ef(e, [`client_report`]) ? !1 : !n.shouldStore || n.shouldStore(e, t, r);
    }
    function c(e) {
      (o && clearTimeout(o),
        (o = setTimeout(async () => {
          o = void 0;
          let e = await i.shift();
          e &&
            (t(`Attempting to send previously queued event`),
            (e[0].sent_at = new Date().toISOString()),
            u(e, !0).catch((e) => {
              t(`Failed to retry sending`, e);
            }));
        }, e)),
        typeof o != `number` && o.unref && o.unref());
    }
    function l() {
      o || (c(a), (a = Math.min(a * 2, xh)));
    }
    async function u(e, o = !1) {
      if (!o && Ef(e, [`replay_event`, `replay_recording`])) return (await i.push(e), c(100), {});
      try {
        if (n.shouldSend && (await n.shouldSend(e)) === !1)
          throw Error("Envelope not sent because `shouldSend` callback returned false");
        let t = await r.send(e),
          i = 100;
        if (t) {
          if (t.headers?.[`retry-after`]) i = Mm(t.headers[`retry-after`]);
          else if (t.headers?.[`x-sentry-rate-limits`]) i = 6e4;
          else if ((t.statusCode || 0) >= 400) return t;
        }
        return (c(i), (a = bh), t);
      } catch (n) {
        if (await s(e, n, a))
          return (o ? await i.unshift(e) : await i.push(e), l(), t(`Error sending. Event queued.`, n), {});
        throw n;
      }
    }
    return (
      n.flushAtStartup && l(),
      { send: u, flush: (e) => (e === void 0 && ((a = bh), c(100)), r.flush(e)) }
    );
  };
}
var Ch = new Set();
function wh() {
  (Ch.clear(), B && H.log(`Cleared AI provider skip registrations`));
}
function Th(e) {
  if (!e) return {};
  let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!t) return {};
  let n = t[6] || ``,
    r = t[8] || ``;
  return { host: t[4], path: t[5], protocol: t[2], search: n, hash: r, relative: t[5] + n + r };
}
function Eh(e) {
  return e.split(/[?#]/, 1)[0];
}
function Dh(e) {
  let { protocol: t, host: n, path: r } = e,
    i =
      n
        ?.replace(/^.*@/, `[filtered]:[filtered]@`)
        .replace(/(:80)$/, ``)
        .replace(/(:443)$/, ``) || ``;
  return `${t ? `${t}://` : ``}${i}${r}`;
}
function Oh(e, ...t) {
  let n = new String(String.raw(e, ...t));
  return (
    (n.__sentry_template_string__ = e.join(`\0`).replace(/%/g, `%%`).replace(/\0/g, `%s`)),
    (n.__sentry_template_values__ = t),
    n
  );
}
var kh = Oh;
function Ah(e) {
  `aggregates` in e
    ? e.attrs?.ip_address === void 0 && (e.attrs = { ...e.attrs, ip_address: `{{auto}}` })
    : e.ipAddress === void 0 && (e.ipAddress = `{{auto}}`);
}
function jh(e, t, n = [t], r = `npm`) {
  let i = e._metadata || {};
  ((i.sdk ||= {
    name: `sentry.javascript.${t}`,
    packages: n.map((e) => ({ name: `${r}:@sentry/${e}`, version: Uc })),
    version: Uc,
  }),
    (e._metadata = i));
}
function Mh(e = {}) {
  let t = e.client || K();
  if (!qp() || !t) return {};
  let n = Hu(Wc());
  if (n.getTraceData) return n.getTraceData(e);
  let r = e.scope || W(),
    i = e.span || Zd(),
    a = i ? Ld(i) : Nh(r),
    o = fd(i ? ff(i) : df(t, r));
  if (!Dd.test(a)) return (H.warn(`Invalid sentry-trace data. Cannot generate trace data`), {});
  let s = { "sentry-trace": a, baggage: o };
  if (e.propagateTraceparent) {
    let e = i ? Rd(i) : Ph(r);
    e && (s.traceparent = e);
  }
  return s;
}
function Nh(e) {
  let { traceId: t, sampled: n, propagationSpanId: r } = e.getPropagationContext();
  return Ad(t, r, n);
}
function Ph(e) {
  let { traceId: t, sampled: n, propagationSpanId: r } = e.getPropagationContext();
  return jd(t, r, n);
}
function Fh(e, t, n) {
  let r,
    i,
    a,
    o = n?.maxWait ? Math.max(n.maxWait, t) : 0,
    s = n?.setTimeoutImpl || setTimeout;
  function c() {
    return (l(), (r = e()), r);
  }
  function l() {
    (i !== void 0 && clearTimeout(i), a !== void 0 && clearTimeout(a), (i = a = void 0));
  }
  function u() {
    return i !== void 0 || a !== void 0 ? c() : r;
  }
  function d() {
    return (i && clearTimeout(i), (i = s(c, t)), o && a === void 0 && (a = s(c, o)), r);
  }
  return ((d.cancel = l), (d.flush = u), d);
}
var Ih = 100;
function Lh(e, t) {
  let n = K(),
    r = G();
  if (!n) return;
  let { beforeBreadcrumb: i = null, maxBreadcrumbs: a = Ih } = n.getOptions();
  if (a <= 0) return;
  let o = { timestamp: _u(), ...e },
    s = i ? Xc(() => i(o, t)) : o;
  s !== null && (n.emit && n.emit(`beforeAddBreadcrumb`, s, t), r.addBreadcrumb(s, a));
}
var Rh,
  zh = `FunctionToString`,
  Bh = new WeakMap(),
  Vh = J(() => ({
    name: zh,
    setupOnce() {
      Rh = Function.prototype.toString;
      try {
        Function.prototype.toString = function (...e) {
          let t = Jl(this),
            n = Bh.has(K()) && t !== void 0 ? t : this;
          return Rh.apply(n, e);
        };
      } catch {}
    },
    setup(e) {
      Bh.set(e, !0);
    },
  })),
  Hh = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
    /^ResizeObserver loop completed with undelivered notifications.$/,
    /^Cannot redefine property: googletag$/,
    /^Can't find variable: gmo$/,
    /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
    `can't redefine non-configurable property "solana"`,
    `vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)`,
    `Can't find variable: _AutofillCallbackHandler`,
    /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
    /^Java exception was raised during method invocation$/,
  ],
  Uh = `EventFilters`,
  Wh = J((e = {}) => {
    let t;
    return {
      name: Uh,
      setup(n) {
        t = Gh(e, n.getOptions());
      },
      processEvent(n, r, i) {
        return ((t ||= Gh(e, i.getOptions())), Kh(n, t) ? null : n);
      },
    };
  });
function Gh(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : Hh),
    ],
    ignoreTransactions: [...(e.ignoreTransactions || []), ...(t.ignoreTransactions || [])],
  };
}
function Kh(e, t) {
  if (!e.type) {
    if (qh(e, t.ignoreErrors))
      return (
        B && H.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${cu(e)}`),
        !0
      );
    if ($h(e))
      return (
        B &&
          H.warn(
            `Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${cu(e)}`,
          ),
        !0
      );
    if (Yh(e, t.denyUrls))
      return (
        B &&
          H.warn(
            `Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${cu(e)}.\nUrl: ${Qh(e)}`,
          ),
        !0
      );
    if (!Xh(e, t.allowUrls))
      return (
        B &&
          H.warn(
            `Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${cu(e)}.\nUrl: ${Qh(e)}`,
          ),
        !0
      );
  } else if (e.type === `transaction` && Jh(e, t.ignoreTransactions))
    return (
      B && H.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${cu(e)}`),
      !0
    );
  return !1;
}
function qh(e, t) {
  return t?.length ? Rm(e).some((e) => ru(e, t)) : !1;
}
function Jh(e, t) {
  if (!t?.length) return !1;
  let n = e.transaction;
  return n ? ru(n, t) : !1;
}
function Yh(e, t) {
  if (!t?.length) return !1;
  let n = Qh(e);
  return n ? ru(n, t) : !1;
}
function Xh(e, t) {
  if (!t?.length) return !0;
  let n = Qh(e);
  return !n || ru(n, t);
}
function Zh(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n && n.filename !== `<anonymous>` && n.filename !== `[native code]`) return n.filename || null;
  }
  return null;
}
function Qh(e) {
  try {
    let t = [...(e.exception?.values ?? [])]
      .reverse()
      .find((e) => e.mechanism?.parent_id === void 0 && e.stacktrace?.frames?.length)?.stacktrace?.frames;
    return t ? Zh(t) : null;
  } catch {
    return (B && H.error(`Cannot extract url for event ${cu(e)}`), null);
  }
}
function $h(e) {
  return e.exception?.values?.length
    ? !e.message && !e.exception.values.some((e) => e.stacktrace || (e.type && e.type !== `Error`) || e.value)
    : !1;
}
function eg(e, t, n, r, i, a) {
  if (!i.exception?.values || !a || !zl(a.originalException, Error)) return;
  let o = i.exception.values.length > 0 ? i.exception.values[i.exception.values.length - 1] : void 0;
  o && (i.exception.values = tg(e, t, r, a.originalException, n, i.exception.values, o, 0));
}
function tg(e, t, n, r, i, a, o, s) {
  if (a.length >= n + 1) return a;
  let c = [...a];
  if (zl(r[i], Error)) {
    ng(o, s);
    let a = e(t, r[i]),
      l = c.length;
    (rg(a, i, l, s), (c = tg(e, t, n, r[i], i, [a, ...c], a, l)));
  }
  return (
    Array.isArray(r.errors) &&
      r.errors.forEach((r, a) => {
        if (zl(r, Error)) {
          ng(o, s);
          let l = e(t, r),
            u = c.length;
          (rg(l, `errors[${a}]`, u, s), (c = tg(e, t, n, r, i, [l, ...c], l, u)));
        }
      }),
    c
  );
}
function ng(e, t) {
  e.mechanism = {
    handled: !0,
    type: `auto.core.linked_errors`,
    ...e.mechanism,
    ...(e.type === `AggregateError` && { is_exception_group: !0 }),
    exception_id: t,
  };
}
function rg(e, t, n, r) {
  e.mechanism = { handled: !0, ...e.mechanism, type: `chained`, source: t, exception_id: n, parent_id: r };
}
var ig = `cause`,
  ag = 5,
  og = `LinkedErrors`,
  sg = J((e = {}) => {
    let t = e.limit || ag,
      n = e.key || ig;
    return {
      name: og,
      preprocessEvent(e, r, i) {
        eg(dh, i.getOptions().stackParser, n, t, e, r);
      },
    };
  });
function cg(e) {
  let t = `console`;
  (_l(t, e), vl(t, lg));
}
function lg() {
  `console` in V &&
    qc.forEach(function (e) {
      e in V.console &&
        Gl(V.console, e, function (t) {
          return (
            (Yc[e] = t),
            function (...t) {
              (yl(`console`, { args: t, level: e }), Yc[e]?.apply(V.console, t));
            }
          );
        });
    });
}
function ug(e) {
  return e === `warn`
    ? `warning`
    : [`fatal`, `error`, `warning`, `log`, `info`, `debug`].includes(e)
      ? e
      : `log`;
}
function dg(e, t) {
  let n = 0;
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    r === `.` ? e.splice(t, 1) : r === `..` ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), n--);
  }
  if (t) for (; n--;) e.unshift(`..`);
  return e;
}
var fg = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
function pg(e) {
  let t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e,
    n = fg.exec(t);
  return n ? n.slice(1) : [];
}
function mg(...e) {
  let t = ``,
    n = !1;
  for (let r = e.length - 1; r >= -1 && !n; r--) {
    let i = r >= 0 ? e[r] : `/`;
    i && ((t = `${i}/${t}`), (n = i.charAt(0) === `/`));
  }
  return (
    (t = dg(
      t.split(`/`).filter((e) => !!e),
      !n,
    ).join(`/`)),
    (n ? `/` : ``) + t || `.`
  );
}
function hg(e) {
  let t = 0;
  for (; t < e.length && e[t] === ``; t++);
  let n = e.length - 1;
  for (; n >= 0 && e[n] === ``; n--);
  return t > n ? [] : e.slice(t, n - t + 1);
}
function gg(e, t) {
  ((e = mg(e).slice(1)), (t = mg(t).slice(1)));
  let n = hg(e.split(`/`)),
    r = hg(t.split(`/`)),
    i = Math.min(n.length, r.length),
    a = i;
  for (let e = 0; e < i; e++)
    if (n[e] !== r[e]) {
      a = e;
      break;
    }
  let o = [];
  for (let e = a; e < n.length; e++) o.push(`..`);
  return ((o = o.concat(r.slice(a))), o.join(`/`));
}
function _g(e) {
  let t = pg(e),
    n = t[0] || ``,
    r = t[1];
  return !n && !r ? `.` : ((r &&= r.slice(0, r.length - 1)), n + r);
}
function vg(e, t) {
  let n = pg(e)[2] || ``;
  return (t && n.slice(t.length * -1) === t && (n = n.slice(0, n.length - t.length)), n);
}
var yg = `RewriteFrames`,
  bg = J((e = {}) => {
    let t = e.root,
      n = e.prefix || `app:///`,
      r = `window` in V && !!V.window,
      i = e.iteratee || xg({ isBrowser: r, root: t, prefix: n });
    function a(e) {
      try {
        return {
          ...e,
          exception: {
            ...e.exception,
            values: e.exception.values.map((e) => ({
              ...e,
              ...(e.stacktrace && { stacktrace: o(e.stacktrace) }),
            })),
          },
        };
      } catch {
        return e;
      }
    }
    function o(e) {
      return { ...e, frames: e?.frames?.map((e) => i(e)) };
    }
    return {
      name: yg,
      processEvent(e) {
        let t = e;
        return (e.exception && Array.isArray(e.exception.values) && (t = a(t)), t);
      },
    };
  });
function xg({ isBrowser: e, root: t, prefix: n }) {
  return (r) => {
    if (!r.filename) return r;
    let i = /^[a-zA-Z]:\\/.test(r.filename) || (r.filename.includes(`\\`) && !r.filename.includes(`/`)),
      a = /^\//.test(r.filename);
    if (e) {
      if (t) {
        let e = r.filename;
        e.indexOf(t) === 0 && (r.filename = e.replace(t, n));
      }
    } else if (i || a) {
      let e = i ? r.filename.replace(/^[a-zA-Z]:/, ``).replace(/\\/g, `/`) : r.filename;
      r.filename = `${n}${t ? gg(t, e) : vg(e)}`;
    }
    return r;
  };
}
var Sg = `Console`,
  Cg = J((e = {}) => {
    let t = new Set(e.levels || qc);
    return {
      name: Sg,
      setup(e) {
        cg(({ args: n, level: r }) => {
          K() === e && t.has(r) && wg(r, n);
        });
      },
    };
  });
function wg(e, t) {
  let n = { category: `console`, data: { arguments: t, logger: `console` }, level: ug(e), message: Tg(t) };
  if (e === `assert`) {
    if (t[0] === !1) {
      let e = t.slice(1);
      ((n.message = e.length > 0 ? `Assertion failed: ${Tg(e)}` : `Assertion failed`),
        (n.data.arguments = e));
    } else return;
  }
  Lh(n, { input: t, level: e });
}
function Tg(e) {
  return `util` in V && typeof V.util.format == `function` ? V.util.format(...e) : tu(e, ` `);
}
function Eg(e) {
  if (e !== void 0) {
    if (e >= 400 && e < 500) return `warning`;
    if (e >= 500) return `error`;
  }
}
function Dg(e, t = !1) {
  return (
    !(
      t ||
      (e &&
        !e.startsWith(`/`) &&
        !e.match(/^[A-Z]:/) &&
        !e.startsWith(`.`) &&
        !e.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//))
    ) &&
    e !== void 0 &&
    !e.includes(`node_modules/`)
  );
}
function Og(e) {
  let t = /^\s*[-]{4,}$/,
    n = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/,
    r = /at (?:async )?(.+?) \(data:(.*?),/;
  return (i) => {
    let a = i.match(r);
    if (a) return { filename: `<data:${a[2]}>`, function: a[1] };
    let o = i.match(n);
    if (o) {
      let t, n, r, i, a;
      if (o[1]) {
        r = o[1];
        let e = r.lastIndexOf(`.`);
        if ((r[e - 1] === `.` && e--, e > 0)) {
          ((t = r.slice(0, e)), (n = r.slice(e + 1)));
          let i = t.indexOf(`.Module`);
          i > 0 && ((r = r.slice(i + 1)), (t = t.slice(0, i)));
        }
        i = void 0;
      }
      (n && ((i = t), (a = n)),
        n === `<anonymous>` && ((a = void 0), (r = void 0)),
        r === void 0 && ((a ||= `?`), (r = i ? `${i}.${a}` : a)));
      let s = o[2]?.startsWith(`file://`) ? o[2].slice(7) : o[2],
        c = o[5] === `native`;
      return (
        s?.match(/\/[A-Z]:/) && (s = s.slice(1)),
        !s && o[5] && !c && (s = o[5]),
        {
          filename: s ? decodeURI(s) : void 0,
          module: e ? e(s) : void 0,
          function: r,
          lineno: Ag(o[3]),
          colno: Ag(o[4]),
          in_app: Dg(s || ``, c),
        }
      );
    }
    if (i.match(t)) return { filename: i };
  };
}
function kg(e) {
  return [90, Og(e)];
}
function Ag(e) {
  return parseInt(e || ``, 10) || void 0;
}
function jg(e, t, n) {
  let r = t ? t.replace(/^file:\/\//, ``) : void 0,
    i = e.location.columnNumber ? e.location.columnNumber + 1 : void 0,
    a = e.location.lineNumber ? e.location.lineNumber + 1 : void 0;
  return {
    filename: r,
    module: n(r),
    function: e.functionName || `?`,
    colno: i,
    lineno: a,
    in_app: r ? Dg(r) : void 0,
  };
}
var Mg = class {
  constructor(e) {
    ((this._maxSize = e), (this._cache = new Map()));
  }
  get size() {
    return this._cache.size;
  }
  get(e) {
    let t = this._cache.get(e);
    if (t !== void 0) return (this._cache.delete(e), this._cache.set(e, t), t);
  }
  set(e, t) {
    if (this._cache.size >= this._maxSize) {
      let e = this._cache.keys().next().value;
      this._cache.delete(e);
    }
    this._cache.set(e, t);
  }
  remove(e) {
    let t = this._cache.get(e);
    return (t && this._cache.delete(e), t);
  }
  clear() {
    this._cache.clear();
  }
  keys() {
    return Array.from(this._cache.keys());
  }
  values() {
    let e = [];
    return (this._cache.forEach((t) => e.push(t)), e);
  }
};
function Ng(e, ...t) {
  let [n, r, i, a] = t;
  if (Array.isArray(r)) {
    let t = { ...i };
    ((t[`sentry.message.template`] = n),
      r.forEach((e, n) => {
        t[`sentry.message.parameter.${n}`] = e;
      }),
      _m({ level: e, message: (0, m.format)(n, ...r), attributes: t }, a?.scope));
  } else _m({ level: e, message: n, attributes: r }, i?.scope ?? a?.scope);
}
function Pg(...e) {
  Ng(`info`, ...e);
}
function Fg(...e) {
  Ng(`warn`, ...e);
}
function Ig(...e) {
  Ng(`error`, ...e);
}
Hc();
var Lg = {};
function Rg(e, t, n) {
  return n ? Bg(e, t, n) : zg(e, t);
}
function zg(e, t) {
  return Object.assign(
    (n) => {
      let r = Lg[e];
      if (r) return (n && r.setConfig(n), r);
      let i = t(n);
      return ((Lg[e] = i), ds({ instrumentations: [i] }), i);
    },
    { id: e },
  );
}
function Bg(e, t, n) {
  return Object.assign(
    (r) => {
      let i = n(r),
        a = Lg[e];
      if (a) return (a.setConfig(i), a);
      let o = new t(i);
      return ((Lg[e] = o), ds({ instrumentations: [o] }), o);
    },
    { id: e },
  );
}
var Vg = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__,
  Hg = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.createConstMap = void 0));
    function t(e) {
      let t = {},
        n = e.length;
      for (let r = 0; r < n; r++) {
        let n = e[r];
        n && (t[String(n).toUpperCase().replace(/[-.]/g, `_`)] = n);
      }
      return t;
    }
    e.createConstMap = t;
  }),
  Ug = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SEMATTRS_NET_HOST_CARRIER_ICC =
        e.SEMATTRS_NET_HOST_CARRIER_MNC =
        e.SEMATTRS_NET_HOST_CARRIER_MCC =
        e.SEMATTRS_NET_HOST_CARRIER_NAME =
        e.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE =
        e.SEMATTRS_NET_HOST_CONNECTION_TYPE =
        e.SEMATTRS_NET_HOST_NAME =
        e.SEMATTRS_NET_HOST_PORT =
        e.SEMATTRS_NET_HOST_IP =
        e.SEMATTRS_NET_PEER_NAME =
        e.SEMATTRS_NET_PEER_PORT =
        e.SEMATTRS_NET_PEER_IP =
        e.SEMATTRS_NET_TRANSPORT =
        e.SEMATTRS_FAAS_INVOKED_REGION =
        e.SEMATTRS_FAAS_INVOKED_PROVIDER =
        e.SEMATTRS_FAAS_INVOKED_NAME =
        e.SEMATTRS_FAAS_COLDSTART =
        e.SEMATTRS_FAAS_CRON =
        e.SEMATTRS_FAAS_TIME =
        e.SEMATTRS_FAAS_DOCUMENT_NAME =
        e.SEMATTRS_FAAS_DOCUMENT_TIME =
        e.SEMATTRS_FAAS_DOCUMENT_OPERATION =
        e.SEMATTRS_FAAS_DOCUMENT_COLLECTION =
        e.SEMATTRS_FAAS_EXECUTION =
        e.SEMATTRS_FAAS_TRIGGER =
        e.SEMATTRS_EXCEPTION_ESCAPED =
        e.SEMATTRS_EXCEPTION_STACKTRACE =
        e.SEMATTRS_EXCEPTION_MESSAGE =
        e.SEMATTRS_EXCEPTION_TYPE =
        e.SEMATTRS_DB_SQL_TABLE =
        e.SEMATTRS_DB_MONGODB_COLLECTION =
        e.SEMATTRS_DB_REDIS_DATABASE_INDEX =
        e.SEMATTRS_DB_HBASE_NAMESPACE =
        e.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC =
        e.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID =
        e.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT =
        e.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE =
        e.SEMATTRS_DB_CASSANDRA_TABLE =
        e.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL =
        e.SEMATTRS_DB_CASSANDRA_PAGE_SIZE =
        e.SEMATTRS_DB_CASSANDRA_KEYSPACE =
        e.SEMATTRS_DB_MSSQL_INSTANCE_NAME =
        e.SEMATTRS_DB_OPERATION =
        e.SEMATTRS_DB_STATEMENT =
        e.SEMATTRS_DB_NAME =
        e.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME =
        e.SEMATTRS_DB_USER =
        e.SEMATTRS_DB_CONNECTION_STRING =
        e.SEMATTRS_DB_SYSTEM =
        e.SEMATTRS_AWS_LAMBDA_INVOKED_ARN =
          void 0),
      (e.SEMATTRS_MESSAGING_DESTINATION_KIND =
        e.SEMATTRS_MESSAGING_DESTINATION =
        e.SEMATTRS_MESSAGING_SYSTEM =
        e.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES =
        e.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS =
        e.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT =
        e.SEMATTRS_AWS_DYNAMODB_COUNT =
        e.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS =
        e.SEMATTRS_AWS_DYNAMODB_SEGMENT =
        e.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD =
        e.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT =
        e.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE =
        e.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES =
        e.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES =
        e.SEMATTRS_AWS_DYNAMODB_SELECT =
        e.SEMATTRS_AWS_DYNAMODB_INDEX_NAME =
        e.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET =
        e.SEMATTRS_AWS_DYNAMODB_LIMIT =
        e.SEMATTRS_AWS_DYNAMODB_PROJECTION =
        e.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ =
        e.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY =
        e.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY =
        e.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS =
        e.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY =
        e.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES =
        e.SEMATTRS_HTTP_CLIENT_IP =
        e.SEMATTRS_HTTP_ROUTE =
        e.SEMATTRS_HTTP_SERVER_NAME =
        e.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED =
        e.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH =
        e.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED =
        e.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH =
        e.SEMATTRS_HTTP_USER_AGENT =
        e.SEMATTRS_HTTP_FLAVOR =
        e.SEMATTRS_HTTP_STATUS_CODE =
        e.SEMATTRS_HTTP_SCHEME =
        e.SEMATTRS_HTTP_HOST =
        e.SEMATTRS_HTTP_TARGET =
        e.SEMATTRS_HTTP_URL =
        e.SEMATTRS_HTTP_METHOD =
        e.SEMATTRS_CODE_LINENO =
        e.SEMATTRS_CODE_FILEPATH =
        e.SEMATTRS_CODE_NAMESPACE =
        e.SEMATTRS_CODE_FUNCTION =
        e.SEMATTRS_THREAD_NAME =
        e.SEMATTRS_THREAD_ID =
        e.SEMATTRS_ENDUSER_SCOPE =
        e.SEMATTRS_ENDUSER_ROLE =
        e.SEMATTRS_ENDUSER_ID =
        e.SEMATTRS_PEER_SERVICE =
          void 0),
      (e.DBSYSTEMVALUES_FILEMAKER =
        e.DBSYSTEMVALUES_DERBY =
        e.DBSYSTEMVALUES_FIREBIRD =
        e.DBSYSTEMVALUES_ADABAS =
        e.DBSYSTEMVALUES_CACHE =
        e.DBSYSTEMVALUES_EDB =
        e.DBSYSTEMVALUES_FIRSTSQL =
        e.DBSYSTEMVALUES_INGRES =
        e.DBSYSTEMVALUES_HANADB =
        e.DBSYSTEMVALUES_MAXDB =
        e.DBSYSTEMVALUES_PROGRESS =
        e.DBSYSTEMVALUES_HSQLDB =
        e.DBSYSTEMVALUES_CLOUDSCAPE =
        e.DBSYSTEMVALUES_HIVE =
        e.DBSYSTEMVALUES_REDSHIFT =
        e.DBSYSTEMVALUES_POSTGRESQL =
        e.DBSYSTEMVALUES_DB2 =
        e.DBSYSTEMVALUES_ORACLE =
        e.DBSYSTEMVALUES_MYSQL =
        e.DBSYSTEMVALUES_MSSQL =
        e.DBSYSTEMVALUES_OTHER_SQL =
        e.SemanticAttributes =
        e.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE =
        e.SEMATTRS_MESSAGE_COMPRESSED_SIZE =
        e.SEMATTRS_MESSAGE_ID =
        e.SEMATTRS_MESSAGE_TYPE =
        e.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE =
        e.SEMATTRS_RPC_JSONRPC_ERROR_CODE =
        e.SEMATTRS_RPC_JSONRPC_REQUEST_ID =
        e.SEMATTRS_RPC_JSONRPC_VERSION =
        e.SEMATTRS_RPC_GRPC_STATUS_CODE =
        e.SEMATTRS_RPC_METHOD =
        e.SEMATTRS_RPC_SERVICE =
        e.SEMATTRS_RPC_SYSTEM =
        e.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE =
        e.SEMATTRS_MESSAGING_KAFKA_PARTITION =
        e.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID =
        e.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP =
        e.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY =
        e.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY =
        e.SEMATTRS_MESSAGING_CONSUMER_ID =
        e.SEMATTRS_MESSAGING_OPERATION =
        e.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES =
        e.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES =
        e.SEMATTRS_MESSAGING_CONVERSATION_ID =
        e.SEMATTRS_MESSAGING_MESSAGE_ID =
        e.SEMATTRS_MESSAGING_URL =
        e.SEMATTRS_MESSAGING_PROTOCOL_VERSION =
        e.SEMATTRS_MESSAGING_PROTOCOL =
        e.SEMATTRS_MESSAGING_TEMP_DESTINATION =
          void 0),
      (e.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD =
        e.FaasDocumentOperationValues =
        e.FAASDOCUMENTOPERATIONVALUES_DELETE =
        e.FAASDOCUMENTOPERATIONVALUES_EDIT =
        e.FAASDOCUMENTOPERATIONVALUES_INSERT =
        e.FaasTriggerValues =
        e.FAASTRIGGERVALUES_OTHER =
        e.FAASTRIGGERVALUES_TIMER =
        e.FAASTRIGGERVALUES_PUBSUB =
        e.FAASTRIGGERVALUES_HTTP =
        e.FAASTRIGGERVALUES_DATASOURCE =
        e.DbCassandraConsistencyLevelValues =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_ANY =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_THREE =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_TWO =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_ONE =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_ALL =
        e.DbSystemValues =
        e.DBSYSTEMVALUES_COCKROACHDB =
        e.DBSYSTEMVALUES_MEMCACHED =
        e.DBSYSTEMVALUES_ELASTICSEARCH =
        e.DBSYSTEMVALUES_GEODE =
        e.DBSYSTEMVALUES_NEO4J =
        e.DBSYSTEMVALUES_DYNAMODB =
        e.DBSYSTEMVALUES_COSMOSDB =
        e.DBSYSTEMVALUES_COUCHDB =
        e.DBSYSTEMVALUES_COUCHBASE =
        e.DBSYSTEMVALUES_REDIS =
        e.DBSYSTEMVALUES_MONGODB =
        e.DBSYSTEMVALUES_HBASE =
        e.DBSYSTEMVALUES_CASSANDRA =
        e.DBSYSTEMVALUES_COLDFUSION =
        e.DBSYSTEMVALUES_H2 =
        e.DBSYSTEMVALUES_VERTICA =
        e.DBSYSTEMVALUES_TERADATA =
        e.DBSYSTEMVALUES_SYBASE =
        e.DBSYSTEMVALUES_SQLITE =
        e.DBSYSTEMVALUES_POINTBASE =
        e.DBSYSTEMVALUES_PERVASIVE =
        e.DBSYSTEMVALUES_NETEZZA =
        e.DBSYSTEMVALUES_MARIADB =
        e.DBSYSTEMVALUES_INTERBASE =
        e.DBSYSTEMVALUES_INSTANTDB =
        e.DBSYSTEMVALUES_INFORMIX =
          void 0),
      (e.MESSAGINGOPERATIONVALUES_RECEIVE =
        e.MessagingDestinationKindValues =
        e.MESSAGINGDESTINATIONKINDVALUES_TOPIC =
        e.MESSAGINGDESTINATIONKINDVALUES_QUEUE =
        e.HttpFlavorValues =
        e.HTTPFLAVORVALUES_QUIC =
        e.HTTPFLAVORVALUES_SPDY =
        e.HTTPFLAVORVALUES_HTTP_2_0 =
        e.HTTPFLAVORVALUES_HTTP_1_1 =
        e.HTTPFLAVORVALUES_HTTP_1_0 =
        e.NetHostConnectionSubtypeValues =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_NR =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_GSM =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_LTE =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS =
        e.NetHostConnectionTypeValues =
        e.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN =
        e.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE =
        e.NETHOSTCONNECTIONTYPEVALUES_CELL =
        e.NETHOSTCONNECTIONTYPEVALUES_WIRED =
        e.NETHOSTCONNECTIONTYPEVALUES_WIFI =
        e.NetTransportValues =
        e.NETTRANSPORTVALUES_OTHER =
        e.NETTRANSPORTVALUES_INPROC =
        e.NETTRANSPORTVALUES_PIPE =
        e.NETTRANSPORTVALUES_UNIX =
        e.NETTRANSPORTVALUES_IP =
        e.NETTRANSPORTVALUES_IP_UDP =
        e.NETTRANSPORTVALUES_IP_TCP =
        e.FaasInvokedProviderValues =
        e.FAASINVOKEDPROVIDERVALUES_GCP =
        e.FAASINVOKEDPROVIDERVALUES_AZURE =
        e.FAASINVOKEDPROVIDERVALUES_AWS =
          void 0),
      (e.MessageTypeValues =
        e.MESSAGETYPEVALUES_RECEIVED =
        e.MESSAGETYPEVALUES_SENT =
        e.RpcGrpcStatusCodeValues =
        e.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED =
        e.RPCGRPCSTATUSCODEVALUES_DATA_LOSS =
        e.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE =
        e.RPCGRPCSTATUSCODEVALUES_INTERNAL =
        e.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED =
        e.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE =
        e.RPCGRPCSTATUSCODEVALUES_ABORTED =
        e.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION =
        e.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED =
        e.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED =
        e.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS =
        e.RPCGRPCSTATUSCODEVALUES_NOT_FOUND =
        e.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED =
        e.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT =
        e.RPCGRPCSTATUSCODEVALUES_UNKNOWN =
        e.RPCGRPCSTATUSCODEVALUES_CANCELLED =
        e.RPCGRPCSTATUSCODEVALUES_OK =
        e.MessagingOperationValues =
        e.MESSAGINGOPERATIONVALUES_PROCESS =
          void 0));
    var t = Hg(),
      n = `aws.lambda.invoked_arn`,
      r = `db.system`,
      i = `db.connection_string`,
      a = `db.user`,
      o = `db.jdbc.driver_classname`,
      s = `db.name`,
      c = `db.statement`,
      l = `db.operation`,
      u = `db.mssql.instance_name`,
      d = `db.cassandra.keyspace`,
      f = `db.cassandra.page_size`,
      p = `db.cassandra.consistency_level`,
      m = `db.cassandra.table`,
      h = `db.cassandra.idempotence`,
      g = `db.cassandra.speculative_execution_count`,
      _ = `db.cassandra.coordinator.id`,
      v = `db.cassandra.coordinator.dc`,
      y = `db.hbase.namespace`,
      b = `db.redis.database_index`,
      x = `db.mongodb.collection`,
      S = `db.sql.table`,
      C = `exception.type`,
      w = `exception.message`,
      T = `exception.stacktrace`,
      E = `exception.escaped`,
      ee = `faas.trigger`,
      D = `faas.execution`,
      te = `faas.document.collection`,
      O = `faas.document.operation`,
      ne = `faas.document.time`,
      re = `faas.document.name`,
      k = `faas.time`,
      A = `faas.cron`,
      ie = `faas.coldstart`,
      ae = `faas.invoked_name`,
      j = `faas.invoked_provider`,
      oe = `faas.invoked_region`,
      se = `net.transport`,
      ce = `net.peer.ip`,
      le = `net.peer.port`,
      ue = `net.peer.name`,
      de = `net.host.ip`,
      fe = `net.host.port`,
      pe = `net.host.name`,
      me = `net.host.connection.type`,
      he = `net.host.connection.subtype`,
      ge = `net.host.carrier.name`,
      _e = `net.host.carrier.mcc`,
      M = `net.host.carrier.mnc`,
      ve = `net.host.carrier.icc`,
      ye = `peer.service`,
      be = `enduser.id`,
      xe = `enduser.role`,
      Se = `enduser.scope`,
      Ce = `thread.id`,
      we = `thread.name`,
      Te = `code.function`,
      Ee = `code.namespace`,
      De = `code.filepath`,
      Oe = `code.lineno`,
      ke = `http.method`,
      Ae = `http.url`,
      je = `http.target`,
      Me = `http.host`,
      Ne = `http.scheme`,
      Pe = `http.status_code`,
      Fe = `http.flavor`,
      Ie = `http.user_agent`,
      Le = `http.request_content_length`,
      N = `http.request_content_length_uncompressed`,
      Re = `http.response_content_length`,
      ze = `http.response_content_length_uncompressed`,
      Be = `http.server_name`,
      Ve = `http.route`,
      He = `http.client_ip`,
      Ue = `aws.dynamodb.table_names`,
      We = `aws.dynamodb.consumed_capacity`,
      Ge = `aws.dynamodb.item_collection_metrics`,
      Ke = `aws.dynamodb.provisioned_read_capacity`,
      qe = `aws.dynamodb.provisioned_write_capacity`,
      Je = `aws.dynamodb.consistent_read`,
      Ye = `aws.dynamodb.projection`,
      Xe = `aws.dynamodb.limit`,
      Ze = `aws.dynamodb.attributes_to_get`,
      Qe = `aws.dynamodb.index_name`,
      P = `aws.dynamodb.select`,
      $e = `aws.dynamodb.global_secondary_indexes`,
      et = `aws.dynamodb.local_secondary_indexes`,
      tt = `aws.dynamodb.exclusive_start_table`,
      nt = `aws.dynamodb.table_count`,
      rt = `aws.dynamodb.scan_forward`,
      it = `aws.dynamodb.segment`,
      at = `aws.dynamodb.total_segments`,
      ot = `aws.dynamodb.count`,
      st = `aws.dynamodb.scanned_count`,
      ct = `aws.dynamodb.attribute_definitions`,
      lt = `aws.dynamodb.global_secondary_index_updates`,
      ut = `messaging.system`,
      dt = `messaging.destination`,
      ft = `messaging.destination_kind`,
      pt = `messaging.temp_destination`,
      mt = `messaging.protocol`,
      ht = `messaging.protocol_version`,
      gt = `messaging.url`,
      _t = `messaging.message_id`,
      vt = `messaging.conversation_id`,
      yt = `messaging.message_payload_size_bytes`,
      bt = `messaging.message_payload_compressed_size_bytes`,
      xt = `messaging.operation`,
      St = `messaging.consumer_id`,
      Ct = `messaging.rabbitmq.routing_key`,
      wt = `messaging.kafka.message_key`,
      Tt = `messaging.kafka.consumer_group`,
      Et = `messaging.kafka.client_id`,
      Dt = `messaging.kafka.partition`,
      Ot = `messaging.kafka.tombstone`,
      kt = `rpc.system`,
      At = `rpc.service`,
      jt = `rpc.method`,
      Mt = `rpc.grpc.status_code`,
      Nt = `rpc.jsonrpc.version`,
      Pt = `rpc.jsonrpc.request_id`,
      Ft = `rpc.jsonrpc.error_code`,
      It = `rpc.jsonrpc.error_message`,
      Lt = `message.type`,
      Rt = `message.id`,
      zt = `message.compressed_size`,
      Bt = `message.uncompressed_size`;
    ((e.SEMATTRS_AWS_LAMBDA_INVOKED_ARN = n),
      (e.SEMATTRS_DB_SYSTEM = r),
      (e.SEMATTRS_DB_CONNECTION_STRING = i),
      (e.SEMATTRS_DB_USER = a),
      (e.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = o),
      (e.SEMATTRS_DB_NAME = s),
      (e.SEMATTRS_DB_STATEMENT = c),
      (e.SEMATTRS_DB_OPERATION = l),
      (e.SEMATTRS_DB_MSSQL_INSTANCE_NAME = u),
      (e.SEMATTRS_DB_CASSANDRA_KEYSPACE = d),
      (e.SEMATTRS_DB_CASSANDRA_PAGE_SIZE = f),
      (e.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = p),
      (e.SEMATTRS_DB_CASSANDRA_TABLE = m),
      (e.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = h),
      (e.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = g),
      (e.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = _),
      (e.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = v),
      (e.SEMATTRS_DB_HBASE_NAMESPACE = y),
      (e.SEMATTRS_DB_REDIS_DATABASE_INDEX = b),
      (e.SEMATTRS_DB_MONGODB_COLLECTION = x),
      (e.SEMATTRS_DB_SQL_TABLE = S),
      (e.SEMATTRS_EXCEPTION_TYPE = C),
      (e.SEMATTRS_EXCEPTION_MESSAGE = w),
      (e.SEMATTRS_EXCEPTION_STACKTRACE = T),
      (e.SEMATTRS_EXCEPTION_ESCAPED = E),
      (e.SEMATTRS_FAAS_TRIGGER = ee),
      (e.SEMATTRS_FAAS_EXECUTION = D),
      (e.SEMATTRS_FAAS_DOCUMENT_COLLECTION = te),
      (e.SEMATTRS_FAAS_DOCUMENT_OPERATION = O),
      (e.SEMATTRS_FAAS_DOCUMENT_TIME = ne),
      (e.SEMATTRS_FAAS_DOCUMENT_NAME = re),
      (e.SEMATTRS_FAAS_TIME = k),
      (e.SEMATTRS_FAAS_CRON = A),
      (e.SEMATTRS_FAAS_COLDSTART = ie),
      (e.SEMATTRS_FAAS_INVOKED_NAME = ae),
      (e.SEMATTRS_FAAS_INVOKED_PROVIDER = j),
      (e.SEMATTRS_FAAS_INVOKED_REGION = oe),
      (e.SEMATTRS_NET_TRANSPORT = se),
      (e.SEMATTRS_NET_PEER_IP = ce),
      (e.SEMATTRS_NET_PEER_PORT = le),
      (e.SEMATTRS_NET_PEER_NAME = ue),
      (e.SEMATTRS_NET_HOST_IP = de),
      (e.SEMATTRS_NET_HOST_PORT = fe),
      (e.SEMATTRS_NET_HOST_NAME = pe),
      (e.SEMATTRS_NET_HOST_CONNECTION_TYPE = me),
      (e.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = he),
      (e.SEMATTRS_NET_HOST_CARRIER_NAME = ge),
      (e.SEMATTRS_NET_HOST_CARRIER_MCC = _e),
      (e.SEMATTRS_NET_HOST_CARRIER_MNC = M),
      (e.SEMATTRS_NET_HOST_CARRIER_ICC = ve),
      (e.SEMATTRS_PEER_SERVICE = ye),
      (e.SEMATTRS_ENDUSER_ID = be),
      (e.SEMATTRS_ENDUSER_ROLE = xe),
      (e.SEMATTRS_ENDUSER_SCOPE = Se),
      (e.SEMATTRS_THREAD_ID = Ce),
      (e.SEMATTRS_THREAD_NAME = we),
      (e.SEMATTRS_CODE_FUNCTION = Te),
      (e.SEMATTRS_CODE_NAMESPACE = Ee),
      (e.SEMATTRS_CODE_FILEPATH = De),
      (e.SEMATTRS_CODE_LINENO = Oe),
      (e.SEMATTRS_HTTP_METHOD = ke),
      (e.SEMATTRS_HTTP_URL = Ae),
      (e.SEMATTRS_HTTP_TARGET = je),
      (e.SEMATTRS_HTTP_HOST = Me),
      (e.SEMATTRS_HTTP_SCHEME = Ne),
      (e.SEMATTRS_HTTP_STATUS_CODE = Pe),
      (e.SEMATTRS_HTTP_FLAVOR = Fe),
      (e.SEMATTRS_HTTP_USER_AGENT = Ie),
      (e.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = Le),
      (e.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = N),
      (e.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = Re),
      (e.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = ze),
      (e.SEMATTRS_HTTP_SERVER_NAME = Be),
      (e.SEMATTRS_HTTP_ROUTE = Ve),
      (e.SEMATTRS_HTTP_CLIENT_IP = He),
      (e.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = Ue),
      (e.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = We),
      (e.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = Ge),
      (e.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = Ke),
      (e.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = qe),
      (e.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = Je),
      (e.SEMATTRS_AWS_DYNAMODB_PROJECTION = Ye),
      (e.SEMATTRS_AWS_DYNAMODB_LIMIT = Xe),
      (e.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = Ze),
      (e.SEMATTRS_AWS_DYNAMODB_INDEX_NAME = Qe),
      (e.SEMATTRS_AWS_DYNAMODB_SELECT = P),
      (e.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = $e),
      (e.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = et),
      (e.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = tt),
      (e.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = nt),
      (e.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = rt),
      (e.SEMATTRS_AWS_DYNAMODB_SEGMENT = it),
      (e.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = at),
      (e.SEMATTRS_AWS_DYNAMODB_COUNT = ot),
      (e.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = st),
      (e.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = ct),
      (e.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = lt),
      (e.SEMATTRS_MESSAGING_SYSTEM = ut),
      (e.SEMATTRS_MESSAGING_DESTINATION = dt),
      (e.SEMATTRS_MESSAGING_DESTINATION_KIND = ft),
      (e.SEMATTRS_MESSAGING_TEMP_DESTINATION = pt),
      (e.SEMATTRS_MESSAGING_PROTOCOL = mt),
      (e.SEMATTRS_MESSAGING_PROTOCOL_VERSION = ht),
      (e.SEMATTRS_MESSAGING_URL = gt),
      (e.SEMATTRS_MESSAGING_MESSAGE_ID = _t),
      (e.SEMATTRS_MESSAGING_CONVERSATION_ID = vt),
      (e.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = yt),
      (e.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = bt),
      (e.SEMATTRS_MESSAGING_OPERATION = xt),
      (e.SEMATTRS_MESSAGING_CONSUMER_ID = St),
      (e.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = Ct),
      (e.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = wt),
      (e.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = Tt),
      (e.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = Et),
      (e.SEMATTRS_MESSAGING_KAFKA_PARTITION = Dt),
      (e.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = Ot),
      (e.SEMATTRS_RPC_SYSTEM = kt),
      (e.SEMATTRS_RPC_SERVICE = At),
      (e.SEMATTRS_RPC_METHOD = jt),
      (e.SEMATTRS_RPC_GRPC_STATUS_CODE = Mt),
      (e.SEMATTRS_RPC_JSONRPC_VERSION = Nt),
      (e.SEMATTRS_RPC_JSONRPC_REQUEST_ID = Pt),
      (e.SEMATTRS_RPC_JSONRPC_ERROR_CODE = Ft),
      (e.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = It),
      (e.SEMATTRS_MESSAGE_TYPE = Lt),
      (e.SEMATTRS_MESSAGE_ID = Rt),
      (e.SEMATTRS_MESSAGE_COMPRESSED_SIZE = zt),
      (e.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = Bt),
      (e.SemanticAttributes = (0, t.createConstMap)([
        n,
        r,
        i,
        a,
        o,
        s,
        c,
        l,
        u,
        d,
        f,
        p,
        m,
        h,
        g,
        _,
        v,
        y,
        b,
        x,
        S,
        C,
        w,
        T,
        E,
        ee,
        D,
        te,
        O,
        ne,
        re,
        k,
        A,
        ie,
        ae,
        j,
        oe,
        se,
        ce,
        le,
        ue,
        de,
        fe,
        pe,
        me,
        he,
        ge,
        _e,
        M,
        ve,
        ye,
        be,
        xe,
        Se,
        Ce,
        we,
        Te,
        Ee,
        De,
        Oe,
        ke,
        Ae,
        je,
        Me,
        Ne,
        Pe,
        Fe,
        Ie,
        Le,
        N,
        Re,
        ze,
        Be,
        Ve,
        He,
        Ue,
        We,
        Ge,
        Ke,
        qe,
        Je,
        Ye,
        Xe,
        Ze,
        Qe,
        P,
        $e,
        et,
        tt,
        nt,
        rt,
        it,
        at,
        ot,
        st,
        ct,
        lt,
        ut,
        dt,
        ft,
        pt,
        mt,
        ht,
        gt,
        _t,
        vt,
        yt,
        bt,
        xt,
        St,
        Ct,
        wt,
        Tt,
        Et,
        Dt,
        Ot,
        kt,
        At,
        jt,
        Mt,
        Nt,
        Pt,
        Ft,
        It,
        Lt,
        Rt,
        zt,
        Bt,
      ])));
    var Vt = `other_sql`,
      Ht = `mssql`,
      Ut = `mysql`,
      Wt = `oracle`,
      Gt = `db2`,
      Kt = `postgresql`,
      qt = `redshift`,
      Jt = `hive`,
      Yt = `cloudscape`,
      Xt = `hsqldb`,
      Zt = `progress`,
      Qt = `maxdb`,
      $t = `hanadb`,
      en = `ingres`,
      tn = `firstsql`,
      nn = `edb`,
      rn = `cache`,
      an = `adabas`,
      on = `firebird`,
      sn = `derby`,
      cn = `filemaker`,
      ln = `informix`,
      un = `instantdb`,
      dn = `interbase`,
      fn = `mariadb`,
      pn = `netezza`,
      mn = `pervasive`,
      hn = `pointbase`,
      gn = `sqlite`,
      _n = `sybase`,
      vn = `teradata`,
      yn = `vertica`,
      bn = `h2`,
      xn = `coldfusion`,
      Sn = `cassandra`,
      Cn = `hbase`,
      wn = `mongodb`,
      Tn = `redis`,
      En = `couchbase`,
      Dn = `couchdb`,
      On = `cosmosdb`,
      kn = `dynamodb`,
      An = `neo4j`,
      jn = `geode`,
      Mn = `elasticsearch`,
      Nn = `memcached`,
      Pn = `cockroachdb`;
    ((e.DBSYSTEMVALUES_OTHER_SQL = Vt),
      (e.DBSYSTEMVALUES_MSSQL = Ht),
      (e.DBSYSTEMVALUES_MYSQL = Ut),
      (e.DBSYSTEMVALUES_ORACLE = Wt),
      (e.DBSYSTEMVALUES_DB2 = Gt),
      (e.DBSYSTEMVALUES_POSTGRESQL = Kt),
      (e.DBSYSTEMVALUES_REDSHIFT = qt),
      (e.DBSYSTEMVALUES_HIVE = Jt),
      (e.DBSYSTEMVALUES_CLOUDSCAPE = Yt),
      (e.DBSYSTEMVALUES_HSQLDB = Xt),
      (e.DBSYSTEMVALUES_PROGRESS = Zt),
      (e.DBSYSTEMVALUES_MAXDB = Qt),
      (e.DBSYSTEMVALUES_HANADB = $t),
      (e.DBSYSTEMVALUES_INGRES = en),
      (e.DBSYSTEMVALUES_FIRSTSQL = tn),
      (e.DBSYSTEMVALUES_EDB = nn),
      (e.DBSYSTEMVALUES_CACHE = rn),
      (e.DBSYSTEMVALUES_ADABAS = an),
      (e.DBSYSTEMVALUES_FIREBIRD = on),
      (e.DBSYSTEMVALUES_DERBY = sn),
      (e.DBSYSTEMVALUES_FILEMAKER = cn),
      (e.DBSYSTEMVALUES_INFORMIX = ln),
      (e.DBSYSTEMVALUES_INSTANTDB = un),
      (e.DBSYSTEMVALUES_INTERBASE = dn),
      (e.DBSYSTEMVALUES_MARIADB = fn),
      (e.DBSYSTEMVALUES_NETEZZA = pn),
      (e.DBSYSTEMVALUES_PERVASIVE = mn),
      (e.DBSYSTEMVALUES_POINTBASE = hn),
      (e.DBSYSTEMVALUES_SQLITE = gn),
      (e.DBSYSTEMVALUES_SYBASE = _n),
      (e.DBSYSTEMVALUES_TERADATA = vn),
      (e.DBSYSTEMVALUES_VERTICA = yn),
      (e.DBSYSTEMVALUES_H2 = bn),
      (e.DBSYSTEMVALUES_COLDFUSION = xn),
      (e.DBSYSTEMVALUES_CASSANDRA = Sn),
      (e.DBSYSTEMVALUES_HBASE = Cn),
      (e.DBSYSTEMVALUES_MONGODB = wn),
      (e.DBSYSTEMVALUES_REDIS = Tn),
      (e.DBSYSTEMVALUES_COUCHBASE = En),
      (e.DBSYSTEMVALUES_COUCHDB = Dn),
      (e.DBSYSTEMVALUES_COSMOSDB = On),
      (e.DBSYSTEMVALUES_DYNAMODB = kn),
      (e.DBSYSTEMVALUES_NEO4J = An),
      (e.DBSYSTEMVALUES_GEODE = jn),
      (e.DBSYSTEMVALUES_ELASTICSEARCH = Mn),
      (e.DBSYSTEMVALUES_MEMCACHED = Nn),
      (e.DBSYSTEMVALUES_COCKROACHDB = Pn),
      (e.DbSystemValues = (0, t.createConstMap)([
        Vt,
        Ht,
        Ut,
        Wt,
        Gt,
        Kt,
        qt,
        Jt,
        Yt,
        Xt,
        Zt,
        Qt,
        $t,
        en,
        tn,
        nn,
        rn,
        an,
        on,
        sn,
        cn,
        ln,
        un,
        dn,
        fn,
        pn,
        mn,
        hn,
        gn,
        _n,
        vn,
        yn,
        bn,
        xn,
        Sn,
        Cn,
        wn,
        Tn,
        En,
        Dn,
        On,
        kn,
        An,
        jn,
        Mn,
        Nn,
        Pn,
      ])));
    var Fn = `all`,
      In = `each_quorum`,
      Ln = `quorum`,
      Rn = `local_quorum`,
      zn = `one`,
      Bn = `two`,
      Vn = `three`,
      Hn = `local_one`,
      Un = `any`,
      Wn = `serial`,
      Gn = `local_serial`;
    ((e.DBCASSANDRACONSISTENCYLEVELVALUES_ALL = Fn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = In),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = Ln),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = Rn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_ONE = zn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_TWO = Bn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_THREE = Vn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = Hn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_ANY = Un),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = Wn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = Gn),
      (e.DbCassandraConsistencyLevelValues = (0, t.createConstMap)([
        Fn,
        In,
        Ln,
        Rn,
        zn,
        Bn,
        Vn,
        Hn,
        Un,
        Wn,
        Gn,
      ])));
    var Kn = `datasource`,
      qn = `http`,
      Jn = `pubsub`,
      Yn = `timer`,
      Xn = `other`;
    ((e.FAASTRIGGERVALUES_DATASOURCE = Kn),
      (e.FAASTRIGGERVALUES_HTTP = qn),
      (e.FAASTRIGGERVALUES_PUBSUB = Jn),
      (e.FAASTRIGGERVALUES_TIMER = Yn),
      (e.FAASTRIGGERVALUES_OTHER = Xn),
      (e.FaasTriggerValues = (0, t.createConstMap)([Kn, qn, Jn, Yn, Xn])));
    var Zn = `insert`,
      Qn = `edit`,
      $n = `delete`;
    ((e.FAASDOCUMENTOPERATIONVALUES_INSERT = Zn),
      (e.FAASDOCUMENTOPERATIONVALUES_EDIT = Qn),
      (e.FAASDOCUMENTOPERATIONVALUES_DELETE = $n),
      (e.FaasDocumentOperationValues = (0, t.createConstMap)([Zn, Qn, $n])));
    var er = `alibaba_cloud`,
      tr = `aws`,
      nr = `azure`,
      rr = `gcp`;
    ((e.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = er),
      (e.FAASINVOKEDPROVIDERVALUES_AWS = tr),
      (e.FAASINVOKEDPROVIDERVALUES_AZURE = nr),
      (e.FAASINVOKEDPROVIDERVALUES_GCP = rr),
      (e.FaasInvokedProviderValues = (0, t.createConstMap)([er, tr, nr, rr])));
    var ir = `ip_tcp`,
      ar = `ip_udp`,
      or = `ip`,
      sr = `unix`,
      cr = `pipe`,
      lr = `inproc`,
      ur = `other`;
    ((e.NETTRANSPORTVALUES_IP_TCP = ir),
      (e.NETTRANSPORTVALUES_IP_UDP = ar),
      (e.NETTRANSPORTVALUES_IP = or),
      (e.NETTRANSPORTVALUES_UNIX = sr),
      (e.NETTRANSPORTVALUES_PIPE = cr),
      (e.NETTRANSPORTVALUES_INPROC = lr),
      (e.NETTRANSPORTVALUES_OTHER = ur),
      (e.NetTransportValues = (0, t.createConstMap)([ir, ar, or, sr, cr, lr, ur])));
    var dr = `wifi`,
      fr = `wired`,
      pr = `cell`,
      mr = `unavailable`,
      hr = `unknown`;
    ((e.NETHOSTCONNECTIONTYPEVALUES_WIFI = dr),
      (e.NETHOSTCONNECTIONTYPEVALUES_WIRED = fr),
      (e.NETHOSTCONNECTIONTYPEVALUES_CELL = pr),
      (e.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = mr),
      (e.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = hr),
      (e.NetHostConnectionTypeValues = (0, t.createConstMap)([dr, fr, pr, mr, hr])));
    var gr = `gprs`,
      _r = `edge`,
      vr = `umts`,
      yr = `cdma`,
      br = `evdo_0`,
      xr = `evdo_a`,
      Sr = `cdma2000_1xrtt`,
      Cr = `hsdpa`,
      wr = `hsupa`,
      Tr = `hspa`,
      Er = `iden`,
      Dr = `evdo_b`,
      Or = `lte`,
      kr = `ehrpd`,
      Ar = `hspap`,
      jr = `gsm`,
      Mr = `td_scdma`,
      Nr = `iwlan`,
      Pr = `nr`,
      Fr = `nrnsa`,
      Ir = `lte_ca`;
    ((e.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = gr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = _r),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = vr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = yr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = br),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = xr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = Sr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = Cr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = wr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = Tr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = Er),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = Dr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_LTE = Or),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = kr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = Ar),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_GSM = jr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = Mr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = Nr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_NR = Pr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = Fr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = Ir),
      (e.NetHostConnectionSubtypeValues = (0, t.createConstMap)([
        gr,
        _r,
        vr,
        yr,
        br,
        xr,
        Sr,
        Cr,
        wr,
        Tr,
        Er,
        Dr,
        Or,
        kr,
        Ar,
        jr,
        Mr,
        Nr,
        Pr,
        Fr,
        Ir,
      ])));
    var Lr = `1.0`,
      Rr = `1.1`,
      zr = `2.0`,
      Br = `SPDY`,
      F = `QUIC`;
    ((e.HTTPFLAVORVALUES_HTTP_1_0 = Lr),
      (e.HTTPFLAVORVALUES_HTTP_1_1 = Rr),
      (e.HTTPFLAVORVALUES_HTTP_2_0 = zr),
      (e.HTTPFLAVORVALUES_SPDY = Br),
      (e.HTTPFLAVORVALUES_QUIC = F),
      (e.HttpFlavorValues = { HTTP_1_0: Lr, HTTP_1_1: Rr, HTTP_2_0: zr, SPDY: Br, QUIC: F }));
    var Vr = `queue`,
      Hr = `topic`;
    ((e.MESSAGINGDESTINATIONKINDVALUES_QUEUE = Vr),
      (e.MESSAGINGDESTINATIONKINDVALUES_TOPIC = Hr),
      (e.MessagingDestinationKindValues = (0, t.createConstMap)([Vr, Hr])));
    var Ur = `receive`,
      Wr = `process`;
    ((e.MESSAGINGOPERATIONVALUES_RECEIVE = Ur),
      (e.MESSAGINGOPERATIONVALUES_PROCESS = Wr),
      (e.MessagingOperationValues = (0, t.createConstMap)([Ur, Wr])));
    var Gr = 0,
      Kr = 1,
      qr = 2,
      Jr = 3,
      Yr = 4,
      Xr = 5,
      Zr = 6,
      Qr = 7,
      $r = 8,
      ei = 9,
      ti = 10,
      ni = 11,
      ri = 12,
      ii = 13,
      ai = 14,
      oi = 15,
      si = 16;
    ((e.RPCGRPCSTATUSCODEVALUES_OK = Gr),
      (e.RPCGRPCSTATUSCODEVALUES_CANCELLED = Kr),
      (e.RPCGRPCSTATUSCODEVALUES_UNKNOWN = qr),
      (e.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = Jr),
      (e.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = Yr),
      (e.RPCGRPCSTATUSCODEVALUES_NOT_FOUND = Xr),
      (e.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = Zr),
      (e.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = Qr),
      (e.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = $r),
      (e.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = ei),
      (e.RPCGRPCSTATUSCODEVALUES_ABORTED = ti),
      (e.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = ni),
      (e.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = ri),
      (e.RPCGRPCSTATUSCODEVALUES_INTERNAL = ii),
      (e.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = ai),
      (e.RPCGRPCSTATUSCODEVALUES_DATA_LOSS = oi),
      (e.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = si),
      (e.RpcGrpcStatusCodeValues = {
        OK: Gr,
        CANCELLED: Kr,
        UNKNOWN: qr,
        INVALID_ARGUMENT: Jr,
        DEADLINE_EXCEEDED: Yr,
        NOT_FOUND: Xr,
        ALREADY_EXISTS: Zr,
        PERMISSION_DENIED: Qr,
        RESOURCE_EXHAUSTED: $r,
        FAILED_PRECONDITION: ei,
        ABORTED: ti,
        OUT_OF_RANGE: ni,
        UNIMPLEMENTED: ri,
        INTERNAL: ii,
        UNAVAILABLE: ai,
        DATA_LOSS: oi,
        UNAUTHENTICATED: si,
      }));
    var ci = `SENT`,
      li = `RECEIVED`;
    ((e.MESSAGETYPEVALUES_SENT = ci),
      (e.MESSAGETYPEVALUES_RECEIVED = li),
      (e.MessageTypeValues = (0, t.createConstMap)([ci, li])));
  }),
  Wg = e.t((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__exportStar) ||
        function (e, n) {
          for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }), n(Ug(), e));
  }),
  Gg = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SEMRESATTRS_K8S_STATEFULSET_NAME =
        e.SEMRESATTRS_K8S_STATEFULSET_UID =
        e.SEMRESATTRS_K8S_DEPLOYMENT_NAME =
        e.SEMRESATTRS_K8S_DEPLOYMENT_UID =
        e.SEMRESATTRS_K8S_REPLICASET_NAME =
        e.SEMRESATTRS_K8S_REPLICASET_UID =
        e.SEMRESATTRS_K8S_CONTAINER_NAME =
        e.SEMRESATTRS_K8S_POD_NAME =
        e.SEMRESATTRS_K8S_POD_UID =
        e.SEMRESATTRS_K8S_NAMESPACE_NAME =
        e.SEMRESATTRS_K8S_NODE_UID =
        e.SEMRESATTRS_K8S_NODE_NAME =
        e.SEMRESATTRS_K8S_CLUSTER_NAME =
        e.SEMRESATTRS_HOST_IMAGE_VERSION =
        e.SEMRESATTRS_HOST_IMAGE_ID =
        e.SEMRESATTRS_HOST_IMAGE_NAME =
        e.SEMRESATTRS_HOST_ARCH =
        e.SEMRESATTRS_HOST_TYPE =
        e.SEMRESATTRS_HOST_NAME =
        e.SEMRESATTRS_HOST_ID =
        e.SEMRESATTRS_FAAS_MAX_MEMORY =
        e.SEMRESATTRS_FAAS_INSTANCE =
        e.SEMRESATTRS_FAAS_VERSION =
        e.SEMRESATTRS_FAAS_ID =
        e.SEMRESATTRS_FAAS_NAME =
        e.SEMRESATTRS_DEVICE_MODEL_NAME =
        e.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER =
        e.SEMRESATTRS_DEVICE_ID =
        e.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT =
        e.SEMRESATTRS_CONTAINER_IMAGE_TAG =
        e.SEMRESATTRS_CONTAINER_IMAGE_NAME =
        e.SEMRESATTRS_CONTAINER_RUNTIME =
        e.SEMRESATTRS_CONTAINER_ID =
        e.SEMRESATTRS_CONTAINER_NAME =
        e.SEMRESATTRS_AWS_LOG_STREAM_ARNS =
        e.SEMRESATTRS_AWS_LOG_STREAM_NAMES =
        e.SEMRESATTRS_AWS_LOG_GROUP_ARNS =
        e.SEMRESATTRS_AWS_LOG_GROUP_NAMES =
        e.SEMRESATTRS_AWS_EKS_CLUSTER_ARN =
        e.SEMRESATTRS_AWS_ECS_TASK_REVISION =
        e.SEMRESATTRS_AWS_ECS_TASK_FAMILY =
        e.SEMRESATTRS_AWS_ECS_TASK_ARN =
        e.SEMRESATTRS_AWS_ECS_LAUNCHTYPE =
        e.SEMRESATTRS_AWS_ECS_CLUSTER_ARN =
        e.SEMRESATTRS_AWS_ECS_CONTAINER_ARN =
        e.SEMRESATTRS_CLOUD_PLATFORM =
        e.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE =
        e.SEMRESATTRS_CLOUD_REGION =
        e.SEMRESATTRS_CLOUD_ACCOUNT_ID =
        e.SEMRESATTRS_CLOUD_PROVIDER =
          void 0),
      (e.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE =
        e.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE =
        e.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS =
        e.CLOUDPLATFORMVALUES_AZURE_AKS =
        e.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES =
        e.CLOUDPLATFORMVALUES_AZURE_VM =
        e.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK =
        e.CLOUDPLATFORMVALUES_AWS_LAMBDA =
        e.CLOUDPLATFORMVALUES_AWS_EKS =
        e.CLOUDPLATFORMVALUES_AWS_ECS =
        e.CLOUDPLATFORMVALUES_AWS_EC2 =
        e.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC =
        e.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS =
        e.CloudProviderValues =
        e.CLOUDPROVIDERVALUES_GCP =
        e.CLOUDPROVIDERVALUES_AZURE =
        e.CLOUDPROVIDERVALUES_AWS =
        e.CLOUDPROVIDERVALUES_ALIBABA_CLOUD =
        e.SemanticResourceAttributes =
        e.SEMRESATTRS_WEBENGINE_DESCRIPTION =
        e.SEMRESATTRS_WEBENGINE_VERSION =
        e.SEMRESATTRS_WEBENGINE_NAME =
        e.SEMRESATTRS_TELEMETRY_AUTO_VERSION =
        e.SEMRESATTRS_TELEMETRY_SDK_VERSION =
        e.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE =
        e.SEMRESATTRS_TELEMETRY_SDK_NAME =
        e.SEMRESATTRS_SERVICE_VERSION =
        e.SEMRESATTRS_SERVICE_INSTANCE_ID =
        e.SEMRESATTRS_SERVICE_NAMESPACE =
        e.SEMRESATTRS_SERVICE_NAME =
        e.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION =
        e.SEMRESATTRS_PROCESS_RUNTIME_VERSION =
        e.SEMRESATTRS_PROCESS_RUNTIME_NAME =
        e.SEMRESATTRS_PROCESS_OWNER =
        e.SEMRESATTRS_PROCESS_COMMAND_ARGS =
        e.SEMRESATTRS_PROCESS_COMMAND_LINE =
        e.SEMRESATTRS_PROCESS_COMMAND =
        e.SEMRESATTRS_PROCESS_EXECUTABLE_PATH =
        e.SEMRESATTRS_PROCESS_EXECUTABLE_NAME =
        e.SEMRESATTRS_PROCESS_PID =
        e.SEMRESATTRS_OS_VERSION =
        e.SEMRESATTRS_OS_NAME =
        e.SEMRESATTRS_OS_DESCRIPTION =
        e.SEMRESATTRS_OS_TYPE =
        e.SEMRESATTRS_K8S_CRONJOB_NAME =
        e.SEMRESATTRS_K8S_CRONJOB_UID =
        e.SEMRESATTRS_K8S_JOB_NAME =
        e.SEMRESATTRS_K8S_JOB_UID =
        e.SEMRESATTRS_K8S_DAEMONSET_NAME =
        e.SEMRESATTRS_K8S_DAEMONSET_UID =
          void 0),
      (e.TelemetrySdkLanguageValues =
        e.TELEMETRYSDKLANGUAGEVALUES_WEBJS =
        e.TELEMETRYSDKLANGUAGEVALUES_RUBY =
        e.TELEMETRYSDKLANGUAGEVALUES_PYTHON =
        e.TELEMETRYSDKLANGUAGEVALUES_PHP =
        e.TELEMETRYSDKLANGUAGEVALUES_NODEJS =
        e.TELEMETRYSDKLANGUAGEVALUES_JAVA =
        e.TELEMETRYSDKLANGUAGEVALUES_GO =
        e.TELEMETRYSDKLANGUAGEVALUES_ERLANG =
        e.TELEMETRYSDKLANGUAGEVALUES_DOTNET =
        e.TELEMETRYSDKLANGUAGEVALUES_CPP =
        e.OsTypeValues =
        e.OSTYPEVALUES_Z_OS =
        e.OSTYPEVALUES_SOLARIS =
        e.OSTYPEVALUES_AIX =
        e.OSTYPEVALUES_HPUX =
        e.OSTYPEVALUES_DRAGONFLYBSD =
        e.OSTYPEVALUES_OPENBSD =
        e.OSTYPEVALUES_NETBSD =
        e.OSTYPEVALUES_FREEBSD =
        e.OSTYPEVALUES_DARWIN =
        e.OSTYPEVALUES_LINUX =
        e.OSTYPEVALUES_WINDOWS =
        e.HostArchValues =
        e.HOSTARCHVALUES_X86 =
        e.HOSTARCHVALUES_PPC64 =
        e.HOSTARCHVALUES_PPC32 =
        e.HOSTARCHVALUES_IA64 =
        e.HOSTARCHVALUES_ARM64 =
        e.HOSTARCHVALUES_ARM32 =
        e.HOSTARCHVALUES_AMD64 =
        e.AwsEcsLaunchtypeValues =
        e.AWSECSLAUNCHTYPEVALUES_FARGATE =
        e.AWSECSLAUNCHTYPEVALUES_EC2 =
        e.CloudPlatformValues =
        e.CLOUDPLATFORMVALUES_GCP_APP_ENGINE =
        e.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS =
        e.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE =
        e.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN =
          void 0));
    var t = Hg(),
      n = `cloud.provider`,
      r = `cloud.account.id`,
      i = `cloud.region`,
      a = `cloud.availability_zone`,
      o = `cloud.platform`,
      s = `aws.ecs.container.arn`,
      c = `aws.ecs.cluster.arn`,
      l = `aws.ecs.launchtype`,
      u = `aws.ecs.task.arn`,
      d = `aws.ecs.task.family`,
      f = `aws.ecs.task.revision`,
      p = `aws.eks.cluster.arn`,
      m = `aws.log.group.names`,
      h = `aws.log.group.arns`,
      g = `aws.log.stream.names`,
      _ = `aws.log.stream.arns`,
      v = `container.name`,
      y = `container.id`,
      b = `container.runtime`,
      x = `container.image.name`,
      S = `container.image.tag`,
      C = `deployment.environment`,
      w = `device.id`,
      T = `device.model.identifier`,
      E = `device.model.name`,
      ee = `faas.name`,
      D = `faas.id`,
      te = `faas.version`,
      O = `faas.instance`,
      ne = `faas.max_memory`,
      re = `host.id`,
      k = `host.name`,
      A = `host.type`,
      ie = `host.arch`,
      ae = `host.image.name`,
      j = `host.image.id`,
      oe = `host.image.version`,
      se = `k8s.cluster.name`,
      ce = `k8s.node.name`,
      le = `k8s.node.uid`,
      ue = `k8s.namespace.name`,
      de = `k8s.pod.uid`,
      fe = `k8s.pod.name`,
      pe = `k8s.container.name`,
      me = `k8s.replicaset.uid`,
      he = `k8s.replicaset.name`,
      ge = `k8s.deployment.uid`,
      _e = `k8s.deployment.name`,
      M = `k8s.statefulset.uid`,
      ve = `k8s.statefulset.name`,
      ye = `k8s.daemonset.uid`,
      be = `k8s.daemonset.name`,
      xe = `k8s.job.uid`,
      Se = `k8s.job.name`,
      Ce = `k8s.cronjob.uid`,
      we = `k8s.cronjob.name`,
      Te = `os.type`,
      Ee = `os.description`,
      De = `os.name`,
      Oe = `os.version`,
      ke = `process.pid`,
      Ae = `process.executable.name`,
      je = `process.executable.path`,
      Me = `process.command`,
      Ne = `process.command_line`,
      Pe = `process.command_args`,
      Fe = `process.owner`,
      Ie = `process.runtime.name`,
      Le = `process.runtime.version`,
      N = `process.runtime.description`,
      Re = `service.name`,
      ze = `service.namespace`,
      Be = `service.instance.id`,
      Ve = `service.version`,
      He = `telemetry.sdk.name`,
      Ue = `telemetry.sdk.language`,
      We = `telemetry.sdk.version`,
      Ge = `telemetry.auto.version`,
      Ke = `webengine.name`,
      qe = `webengine.version`,
      Je = `webengine.description`;
    ((e.SEMRESATTRS_CLOUD_PROVIDER = n),
      (e.SEMRESATTRS_CLOUD_ACCOUNT_ID = r),
      (e.SEMRESATTRS_CLOUD_REGION = i),
      (e.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = a),
      (e.SEMRESATTRS_CLOUD_PLATFORM = o),
      (e.SEMRESATTRS_AWS_ECS_CONTAINER_ARN = s),
      (e.SEMRESATTRS_AWS_ECS_CLUSTER_ARN = c),
      (e.SEMRESATTRS_AWS_ECS_LAUNCHTYPE = l),
      (e.SEMRESATTRS_AWS_ECS_TASK_ARN = u),
      (e.SEMRESATTRS_AWS_ECS_TASK_FAMILY = d),
      (e.SEMRESATTRS_AWS_ECS_TASK_REVISION = f),
      (e.SEMRESATTRS_AWS_EKS_CLUSTER_ARN = p),
      (e.SEMRESATTRS_AWS_LOG_GROUP_NAMES = m),
      (e.SEMRESATTRS_AWS_LOG_GROUP_ARNS = h),
      (e.SEMRESATTRS_AWS_LOG_STREAM_NAMES = g),
      (e.SEMRESATTRS_AWS_LOG_STREAM_ARNS = _),
      (e.SEMRESATTRS_CONTAINER_NAME = v),
      (e.SEMRESATTRS_CONTAINER_ID = y),
      (e.SEMRESATTRS_CONTAINER_RUNTIME = b),
      (e.SEMRESATTRS_CONTAINER_IMAGE_NAME = x),
      (e.SEMRESATTRS_CONTAINER_IMAGE_TAG = S),
      (e.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = C),
      (e.SEMRESATTRS_DEVICE_ID = w),
      (e.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = T),
      (e.SEMRESATTRS_DEVICE_MODEL_NAME = E),
      (e.SEMRESATTRS_FAAS_NAME = ee),
      (e.SEMRESATTRS_FAAS_ID = D),
      (e.SEMRESATTRS_FAAS_VERSION = te),
      (e.SEMRESATTRS_FAAS_INSTANCE = O),
      (e.SEMRESATTRS_FAAS_MAX_MEMORY = ne),
      (e.SEMRESATTRS_HOST_ID = re),
      (e.SEMRESATTRS_HOST_NAME = k),
      (e.SEMRESATTRS_HOST_TYPE = A),
      (e.SEMRESATTRS_HOST_ARCH = ie),
      (e.SEMRESATTRS_HOST_IMAGE_NAME = ae),
      (e.SEMRESATTRS_HOST_IMAGE_ID = j),
      (e.SEMRESATTRS_HOST_IMAGE_VERSION = oe),
      (e.SEMRESATTRS_K8S_CLUSTER_NAME = se),
      (e.SEMRESATTRS_K8S_NODE_NAME = ce),
      (e.SEMRESATTRS_K8S_NODE_UID = le),
      (e.SEMRESATTRS_K8S_NAMESPACE_NAME = ue),
      (e.SEMRESATTRS_K8S_POD_UID = de),
      (e.SEMRESATTRS_K8S_POD_NAME = fe),
      (e.SEMRESATTRS_K8S_CONTAINER_NAME = pe),
      (e.SEMRESATTRS_K8S_REPLICASET_UID = me),
      (e.SEMRESATTRS_K8S_REPLICASET_NAME = he),
      (e.SEMRESATTRS_K8S_DEPLOYMENT_UID = ge),
      (e.SEMRESATTRS_K8S_DEPLOYMENT_NAME = _e),
      (e.SEMRESATTRS_K8S_STATEFULSET_UID = M),
      (e.SEMRESATTRS_K8S_STATEFULSET_NAME = ve),
      (e.SEMRESATTRS_K8S_DAEMONSET_UID = ye),
      (e.SEMRESATTRS_K8S_DAEMONSET_NAME = be),
      (e.SEMRESATTRS_K8S_JOB_UID = xe),
      (e.SEMRESATTRS_K8S_JOB_NAME = Se),
      (e.SEMRESATTRS_K8S_CRONJOB_UID = Ce),
      (e.SEMRESATTRS_K8S_CRONJOB_NAME = we),
      (e.SEMRESATTRS_OS_TYPE = Te),
      (e.SEMRESATTRS_OS_DESCRIPTION = Ee),
      (e.SEMRESATTRS_OS_NAME = De),
      (e.SEMRESATTRS_OS_VERSION = Oe),
      (e.SEMRESATTRS_PROCESS_PID = ke),
      (e.SEMRESATTRS_PROCESS_EXECUTABLE_NAME = Ae),
      (e.SEMRESATTRS_PROCESS_EXECUTABLE_PATH = je),
      (e.SEMRESATTRS_PROCESS_COMMAND = Me),
      (e.SEMRESATTRS_PROCESS_COMMAND_LINE = Ne),
      (e.SEMRESATTRS_PROCESS_COMMAND_ARGS = Pe),
      (e.SEMRESATTRS_PROCESS_OWNER = Fe),
      (e.SEMRESATTRS_PROCESS_RUNTIME_NAME = Ie),
      (e.SEMRESATTRS_PROCESS_RUNTIME_VERSION = Le),
      (e.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = N),
      (e.SEMRESATTRS_SERVICE_NAME = Re),
      (e.SEMRESATTRS_SERVICE_NAMESPACE = ze),
      (e.SEMRESATTRS_SERVICE_INSTANCE_ID = Be),
      (e.SEMRESATTRS_SERVICE_VERSION = Ve),
      (e.SEMRESATTRS_TELEMETRY_SDK_NAME = He),
      (e.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = Ue),
      (e.SEMRESATTRS_TELEMETRY_SDK_VERSION = We),
      (e.SEMRESATTRS_TELEMETRY_AUTO_VERSION = Ge),
      (e.SEMRESATTRS_WEBENGINE_NAME = Ke),
      (e.SEMRESATTRS_WEBENGINE_VERSION = qe),
      (e.SEMRESATTRS_WEBENGINE_DESCRIPTION = Je),
      (e.SemanticResourceAttributes = (0, t.createConstMap)([
        n,
        r,
        i,
        a,
        o,
        s,
        c,
        l,
        u,
        d,
        f,
        p,
        m,
        h,
        g,
        _,
        v,
        y,
        b,
        x,
        S,
        C,
        w,
        T,
        E,
        ee,
        D,
        te,
        O,
        ne,
        re,
        k,
        A,
        ie,
        ae,
        j,
        oe,
        se,
        ce,
        le,
        ue,
        de,
        fe,
        pe,
        me,
        he,
        ge,
        _e,
        M,
        ve,
        ye,
        be,
        xe,
        Se,
        Ce,
        we,
        Te,
        Ee,
        De,
        Oe,
        ke,
        Ae,
        je,
        Me,
        Ne,
        Pe,
        Fe,
        Ie,
        Le,
        N,
        Re,
        ze,
        Be,
        Ve,
        He,
        Ue,
        We,
        Ge,
        Ke,
        qe,
        Je,
      ])));
    var Ye = `alibaba_cloud`,
      Xe = `aws`,
      Ze = `azure`,
      Qe = `gcp`;
    ((e.CLOUDPROVIDERVALUES_ALIBABA_CLOUD = Ye),
      (e.CLOUDPROVIDERVALUES_AWS = Xe),
      (e.CLOUDPROVIDERVALUES_AZURE = Ze),
      (e.CLOUDPROVIDERVALUES_GCP = Qe),
      (e.CloudProviderValues = (0, t.createConstMap)([Ye, Xe, Ze, Qe])));
    var P = `alibaba_cloud_ecs`,
      $e = `alibaba_cloud_fc`,
      et = `aws_ec2`,
      tt = `aws_ecs`,
      nt = `aws_eks`,
      rt = `aws_lambda`,
      it = `aws_elastic_beanstalk`,
      at = `azure_vm`,
      ot = `azure_container_instances`,
      st = `azure_aks`,
      ct = `azure_functions`,
      lt = `azure_app_service`,
      ut = `gcp_compute_engine`,
      dt = `gcp_cloud_run`,
      ft = `gcp_kubernetes_engine`,
      pt = `gcp_cloud_functions`,
      mt = `gcp_app_engine`;
    ((e.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = P),
      (e.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = $e),
      (e.CLOUDPLATFORMVALUES_AWS_EC2 = et),
      (e.CLOUDPLATFORMVALUES_AWS_ECS = tt),
      (e.CLOUDPLATFORMVALUES_AWS_EKS = nt),
      (e.CLOUDPLATFORMVALUES_AWS_LAMBDA = rt),
      (e.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = it),
      (e.CLOUDPLATFORMVALUES_AZURE_VM = at),
      (e.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = ot),
      (e.CLOUDPLATFORMVALUES_AZURE_AKS = st),
      (e.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = ct),
      (e.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = lt),
      (e.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = ut),
      (e.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = dt),
      (e.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = ft),
      (e.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = pt),
      (e.CLOUDPLATFORMVALUES_GCP_APP_ENGINE = mt),
      (e.CloudPlatformValues = (0, t.createConstMap)([
        P,
        $e,
        et,
        tt,
        nt,
        rt,
        it,
        at,
        ot,
        st,
        ct,
        lt,
        ut,
        dt,
        ft,
        pt,
        mt,
      ])));
    var ht = `ec2`,
      gt = `fargate`;
    ((e.AWSECSLAUNCHTYPEVALUES_EC2 = ht),
      (e.AWSECSLAUNCHTYPEVALUES_FARGATE = gt),
      (e.AwsEcsLaunchtypeValues = (0, t.createConstMap)([ht, gt])));
    var _t = `amd64`,
      vt = `arm32`,
      yt = `arm64`,
      bt = `ia64`,
      xt = `ppc32`,
      St = `ppc64`,
      Ct = `x86`;
    ((e.HOSTARCHVALUES_AMD64 = _t),
      (e.HOSTARCHVALUES_ARM32 = vt),
      (e.HOSTARCHVALUES_ARM64 = yt),
      (e.HOSTARCHVALUES_IA64 = bt),
      (e.HOSTARCHVALUES_PPC32 = xt),
      (e.HOSTARCHVALUES_PPC64 = St),
      (e.HOSTARCHVALUES_X86 = Ct),
      (e.HostArchValues = (0, t.createConstMap)([_t, vt, yt, bt, xt, St, Ct])));
    var wt = `windows`,
      Tt = `linux`,
      Et = `darwin`,
      Dt = `freebsd`,
      Ot = `netbsd`,
      kt = `openbsd`,
      At = `dragonflybsd`,
      jt = `hpux`,
      Mt = `aix`,
      Nt = `solaris`,
      Pt = `z_os`;
    ((e.OSTYPEVALUES_WINDOWS = wt),
      (e.OSTYPEVALUES_LINUX = Tt),
      (e.OSTYPEVALUES_DARWIN = Et),
      (e.OSTYPEVALUES_FREEBSD = Dt),
      (e.OSTYPEVALUES_NETBSD = Ot),
      (e.OSTYPEVALUES_OPENBSD = kt),
      (e.OSTYPEVALUES_DRAGONFLYBSD = At),
      (e.OSTYPEVALUES_HPUX = jt),
      (e.OSTYPEVALUES_AIX = Mt),
      (e.OSTYPEVALUES_SOLARIS = Nt),
      (e.OSTYPEVALUES_Z_OS = Pt),
      (e.OsTypeValues = (0, t.createConstMap)([wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt])));
    var Ft = `cpp`,
      It = `dotnet`,
      Lt = `erlang`,
      Rt = `go`,
      zt = `java`,
      Bt = `nodejs`,
      Vt = `php`,
      Ht = `python`,
      Ut = `ruby`,
      Wt = `webjs`;
    ((e.TELEMETRYSDKLANGUAGEVALUES_CPP = Ft),
      (e.TELEMETRYSDKLANGUAGEVALUES_DOTNET = It),
      (e.TELEMETRYSDKLANGUAGEVALUES_ERLANG = Lt),
      (e.TELEMETRYSDKLANGUAGEVALUES_GO = Rt),
      (e.TELEMETRYSDKLANGUAGEVALUES_JAVA = zt),
      (e.TELEMETRYSDKLANGUAGEVALUES_NODEJS = Bt),
      (e.TELEMETRYSDKLANGUAGEVALUES_PHP = Vt),
      (e.TELEMETRYSDKLANGUAGEVALUES_PYTHON = Ht),
      (e.TELEMETRYSDKLANGUAGEVALUES_RUBY = Ut),
      (e.TELEMETRYSDKLANGUAGEVALUES_WEBJS = Wt),
      (e.TelemetrySdkLanguageValues = (0, t.createConstMap)([Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt])));
  }),
  Kg = e.t((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__exportStar) ||
        function (e, n) {
          for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }), n(Gg(), e));
  }),
  qg = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 =
        e.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 =
        e.ATTR_DOTNET_GC_HEAP_GENERATION =
        e.DEPLOYMENT_ENVIRONMENT_NAME_VALUE_TEST =
        e.DEPLOYMENT_ENVIRONMENT_NAME_VALUE_STAGING =
        e.DEPLOYMENT_ENVIRONMENT_NAME_VALUE_PRODUCTION =
        e.DEPLOYMENT_ENVIRONMENT_NAME_VALUE_DEVELOPMENT =
        e.ATTR_DEPLOYMENT_ENVIRONMENT_NAME =
        e.DB_SYSTEM_NAME_VALUE_POSTGRESQL =
        e.DB_SYSTEM_NAME_VALUE_MYSQL =
        e.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER =
        e.DB_SYSTEM_NAME_VALUE_MARIADB =
        e.ATTR_DB_SYSTEM_NAME =
        e.ATTR_DB_STORED_PROCEDURE_NAME =
        e.ATTR_DB_RESPONSE_STATUS_CODE =
        e.ATTR_DB_QUERY_TEXT =
        e.ATTR_DB_QUERY_SUMMARY =
        e.ATTR_DB_OPERATION_NAME =
        e.ATTR_DB_OPERATION_BATCH_SIZE =
        e.ATTR_DB_NAMESPACE =
        e.ATTR_DB_COLLECTION_NAME =
        e.ATTR_CONTAINER_IMAGE_TAGS =
        e.ATTR_CONTAINER_IMAGE_REPO_DIGESTS =
        e.ATTR_CONTAINER_IMAGE_NAME =
        e.ATTR_CONTAINER_ID =
        e.ATTR_CODE_STACKTRACE =
        e.ATTR_CODE_LINE_NUMBER =
        e.ATTR_CODE_FUNCTION_NAME =
        e.ATTR_CODE_FILE_PATH =
        e.ATTR_CODE_COLUMN_NUMBER =
        e.ATTR_CLIENT_PORT =
        e.ATTR_CLIENT_ADDRESS =
        e.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED =
        e.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS =
        e.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE =
        e.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS =
        e.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK =
        e.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED =
        e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED =
        e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER =
        e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER =
        e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED =
        e.ATTR_ASPNETCORE_RATE_LIMITING_RESULT =
        e.ATTR_ASPNETCORE_RATE_LIMITING_POLICY =
        e.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE =
        e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED =
        e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED =
        e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED =
        e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED =
        e.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT =
          void 0),
      (e.ATTR_K8S_DAEMONSET_LABEL =
        e.ATTR_K8S_DAEMONSET_ANNOTATION =
        e.ATTR_K8S_CRONJOB_UID =
        e.ATTR_K8S_CRONJOB_NAME =
        e.ATTR_K8S_CRONJOB_LABEL =
        e.ATTR_K8S_CRONJOB_ANNOTATION =
        e.ATTR_K8S_CONTAINER_RESTART_COUNT =
        e.ATTR_K8S_CONTAINER_NAME =
        e.ATTR_K8S_CLUSTER_UID =
        e.ATTR_K8S_CLUSTER_NAME =
        e.JVM_THREAD_STATE_VALUE_WAITING =
        e.JVM_THREAD_STATE_VALUE_TIMED_WAITING =
        e.JVM_THREAD_STATE_VALUE_TERMINATED =
        e.JVM_THREAD_STATE_VALUE_RUNNABLE =
        e.JVM_THREAD_STATE_VALUE_NEW =
        e.JVM_THREAD_STATE_VALUE_BLOCKED =
        e.ATTR_JVM_THREAD_STATE =
        e.ATTR_JVM_THREAD_DAEMON =
        e.JVM_MEMORY_TYPE_VALUE_NON_HEAP =
        e.JVM_MEMORY_TYPE_VALUE_HEAP =
        e.ATTR_JVM_MEMORY_TYPE =
        e.ATTR_JVM_MEMORY_POOL_NAME =
        e.ATTR_JVM_GC_NAME =
        e.ATTR_JVM_GC_ACTION =
        e.ATTR_HTTP_ROUTE =
        e.ATTR_HTTP_RESPONSE_STATUS_CODE =
        e.ATTR_HTTP_RESPONSE_HEADER =
        e.ATTR_HTTP_REQUEST_RESEND_COUNT =
        e.ATTR_HTTP_REQUEST_METHOD_ORIGINAL =
        e.HTTP_REQUEST_METHOD_VALUE_TRACE =
        e.HTTP_REQUEST_METHOD_VALUE_PUT =
        e.HTTP_REQUEST_METHOD_VALUE_POST =
        e.HTTP_REQUEST_METHOD_VALUE_PATCH =
        e.HTTP_REQUEST_METHOD_VALUE_OPTIONS =
        e.HTTP_REQUEST_METHOD_VALUE_HEAD =
        e.HTTP_REQUEST_METHOD_VALUE_GET =
        e.HTTP_REQUEST_METHOD_VALUE_DELETE =
        e.HTTP_REQUEST_METHOD_VALUE_CONNECT =
        e.HTTP_REQUEST_METHOD_VALUE_OTHER =
        e.ATTR_HTTP_REQUEST_METHOD =
        e.ATTR_HTTP_REQUEST_HEADER =
        e.ATTR_EXCEPTION_TYPE =
        e.ATTR_EXCEPTION_STACKTRACE =
        e.ATTR_EXCEPTION_MESSAGE =
        e.ATTR_EXCEPTION_ESCAPED =
        e.ERROR_TYPE_VALUE_OTHER =
        e.ATTR_ERROR_TYPE =
        e.DOTNET_GC_HEAP_GENERATION_VALUE_POH =
        e.DOTNET_GC_HEAP_GENERATION_VALUE_LOH =
        e.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 =
          void 0),
      (e.ATTR_OTEL_SCOPE_VERSION =
        e.ATTR_OTEL_SCOPE_NAME =
        e.ATTR_OTEL_EVENT_NAME =
        e.NETWORK_TYPE_VALUE_IPV6 =
        e.NETWORK_TYPE_VALUE_IPV4 =
        e.ATTR_NETWORK_TYPE =
        e.NETWORK_TRANSPORT_VALUE_UNIX =
        e.NETWORK_TRANSPORT_VALUE_UDP =
        e.NETWORK_TRANSPORT_VALUE_TCP =
        e.NETWORK_TRANSPORT_VALUE_QUIC =
        e.NETWORK_TRANSPORT_VALUE_PIPE =
        e.ATTR_NETWORK_TRANSPORT =
        e.ATTR_NETWORK_PROTOCOL_VERSION =
        e.ATTR_NETWORK_PROTOCOL_NAME =
        e.ATTR_NETWORK_PEER_PORT =
        e.ATTR_NETWORK_PEER_ADDRESS =
        e.ATTR_NETWORK_LOCAL_PORT =
        e.ATTR_NETWORK_LOCAL_ADDRESS =
        e.ATTR_K8S_STATEFULSET_UID =
        e.ATTR_K8S_STATEFULSET_NAME =
        e.ATTR_K8S_STATEFULSET_LABEL =
        e.ATTR_K8S_STATEFULSET_ANNOTATION =
        e.ATTR_K8S_REPLICASET_UID =
        e.ATTR_K8S_REPLICASET_NAME =
        e.ATTR_K8S_REPLICASET_LABEL =
        e.ATTR_K8S_REPLICASET_ANNOTATION =
        e.ATTR_K8S_POD_UID =
        e.ATTR_K8S_POD_START_TIME =
        e.ATTR_K8S_POD_NAME =
        e.ATTR_K8S_POD_LABEL =
        e.ATTR_K8S_POD_IP =
        e.ATTR_K8S_POD_HOSTNAME =
        e.ATTR_K8S_POD_ANNOTATION =
        e.ATTR_K8S_NODE_UID =
        e.ATTR_K8S_NODE_NAME =
        e.ATTR_K8S_NODE_LABEL =
        e.ATTR_K8S_NODE_ANNOTATION =
        e.ATTR_K8S_NAMESPACE_NAME =
        e.ATTR_K8S_NAMESPACE_LABEL =
        e.ATTR_K8S_NAMESPACE_ANNOTATION =
        e.ATTR_K8S_JOB_UID =
        e.ATTR_K8S_JOB_NAME =
        e.ATTR_K8S_JOB_LABEL =
        e.ATTR_K8S_JOB_ANNOTATION =
        e.ATTR_K8S_DEPLOYMENT_UID =
        e.ATTR_K8S_DEPLOYMENT_NAME =
        e.ATTR_K8S_DEPLOYMENT_LABEL =
        e.ATTR_K8S_DEPLOYMENT_ANNOTATION =
        e.ATTR_K8S_DAEMONSET_UID =
        e.ATTR_K8S_DAEMONSET_NAME =
          void 0),
      (e.ATTR_USER_AGENT_ORIGINAL =
        e.ATTR_URL_SCHEME =
        e.ATTR_URL_QUERY =
        e.ATTR_URL_PATH =
        e.ATTR_URL_FULL =
        e.ATTR_URL_FRAGMENT =
        e.ATTR_TELEMETRY_SDK_VERSION =
        e.ATTR_TELEMETRY_SDK_NAME =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_RUST =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_PHP =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_KOTLIN =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_GO =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_CPP =
        e.ATTR_TELEMETRY_SDK_LANGUAGE =
        e.ATTR_TELEMETRY_DISTRO_VERSION =
        e.ATTR_TELEMETRY_DISTRO_NAME =
        e.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS =
        e.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS =
        e.SIGNALR_TRANSPORT_VALUE_LONG_POLLING =
        e.ATTR_SIGNALR_TRANSPORT =
        e.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT =
        e.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE =
        e.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN =
        e.ATTR_SIGNALR_CONNECTION_STATUS =
        e.ATTR_SERVICE_VERSION =
        e.ATTR_SERVICE_NAMESPACE =
        e.ATTR_SERVICE_NAME =
        e.ATTR_SERVICE_INSTANCE_ID =
        e.ATTR_SERVER_PORT =
        e.ATTR_SERVER_ADDRESS =
        e.ATTR_OTEL_STATUS_DESCRIPTION =
        e.OTEL_STATUS_CODE_VALUE_OK =
        e.OTEL_STATUS_CODE_VALUE_ERROR =
        e.ATTR_OTEL_STATUS_CODE =
          void 0),
      (e.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = `aspnetcore.diagnostics.exception.result`),
      (e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = `aborted`),
      (e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = `handled`),
      (e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = `skipped`),
      (e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = `unhandled`),
      (e.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = `aspnetcore.diagnostics.handler.type`),
      (e.ATTR_ASPNETCORE_RATE_LIMITING_POLICY = `aspnetcore.rate_limiting.policy`),
      (e.ATTR_ASPNETCORE_RATE_LIMITING_RESULT = `aspnetcore.rate_limiting.result`),
      (e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = `acquired`),
      (e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = `endpoint_limiter`),
      (e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = `global_limiter`),
      (e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = `request_canceled`),
      (e.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = `aspnetcore.request.is_unhandled`),
      (e.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = `aspnetcore.routing.is_fallback`),
      (e.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = `aspnetcore.routing.match_status`),
      (e.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = `failure`),
      (e.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = `success`),
      (e.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED = `aspnetcore.user.is_authenticated`),
      (e.ATTR_CLIENT_ADDRESS = `client.address`),
      (e.ATTR_CLIENT_PORT = `client.port`),
      (e.ATTR_CODE_COLUMN_NUMBER = `code.column.number`),
      (e.ATTR_CODE_FILE_PATH = `code.file.path`),
      (e.ATTR_CODE_FUNCTION_NAME = `code.function.name`),
      (e.ATTR_CODE_LINE_NUMBER = `code.line.number`),
      (e.ATTR_CODE_STACKTRACE = `code.stacktrace`),
      (e.ATTR_CONTAINER_ID = `container.id`),
      (e.ATTR_CONTAINER_IMAGE_NAME = `container.image.name`),
      (e.ATTR_CONTAINER_IMAGE_REPO_DIGESTS = `container.image.repo_digests`),
      (e.ATTR_CONTAINER_IMAGE_TAGS = `container.image.tags`),
      (e.ATTR_DB_COLLECTION_NAME = `db.collection.name`),
      (e.ATTR_DB_NAMESPACE = `db.namespace`),
      (e.ATTR_DB_OPERATION_BATCH_SIZE = `db.operation.batch.size`),
      (e.ATTR_DB_OPERATION_NAME = `db.operation.name`),
      (e.ATTR_DB_QUERY_SUMMARY = `db.query.summary`),
      (e.ATTR_DB_QUERY_TEXT = `db.query.text`),
      (e.ATTR_DB_RESPONSE_STATUS_CODE = `db.response.status_code`),
      (e.ATTR_DB_STORED_PROCEDURE_NAME = `db.stored_procedure.name`),
      (e.ATTR_DB_SYSTEM_NAME = `db.system.name`),
      (e.DB_SYSTEM_NAME_VALUE_MARIADB = `mariadb`),
      (e.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER = `microsoft.sql_server`),
      (e.DB_SYSTEM_NAME_VALUE_MYSQL = `mysql`),
      (e.DB_SYSTEM_NAME_VALUE_POSTGRESQL = `postgresql`),
      (e.ATTR_DEPLOYMENT_ENVIRONMENT_NAME = `deployment.environment.name`),
      (e.DEPLOYMENT_ENVIRONMENT_NAME_VALUE_DEVELOPMENT = `development`),
      (e.DEPLOYMENT_ENVIRONMENT_NAME_VALUE_PRODUCTION = `production`),
      (e.DEPLOYMENT_ENVIRONMENT_NAME_VALUE_STAGING = `staging`),
      (e.DEPLOYMENT_ENVIRONMENT_NAME_VALUE_TEST = `test`),
      (e.ATTR_DOTNET_GC_HEAP_GENERATION = `dotnet.gc.heap.generation`),
      (e.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 = `gen0`),
      (e.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 = `gen1`),
      (e.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 = `gen2`),
      (e.DOTNET_GC_HEAP_GENERATION_VALUE_LOH = `loh`),
      (e.DOTNET_GC_HEAP_GENERATION_VALUE_POH = `poh`),
      (e.ATTR_ERROR_TYPE = `error.type`),
      (e.ERROR_TYPE_VALUE_OTHER = `_OTHER`),
      (e.ATTR_EXCEPTION_ESCAPED = `exception.escaped`),
      (e.ATTR_EXCEPTION_MESSAGE = `exception.message`),
      (e.ATTR_EXCEPTION_STACKTRACE = `exception.stacktrace`),
      (e.ATTR_EXCEPTION_TYPE = `exception.type`),
      (e.ATTR_HTTP_REQUEST_HEADER = (e) => `http.request.header.${e}`),
      (e.ATTR_HTTP_REQUEST_METHOD = `http.request.method`),
      (e.HTTP_REQUEST_METHOD_VALUE_OTHER = `_OTHER`),
      (e.HTTP_REQUEST_METHOD_VALUE_CONNECT = `CONNECT`),
      (e.HTTP_REQUEST_METHOD_VALUE_DELETE = `DELETE`),
      (e.HTTP_REQUEST_METHOD_VALUE_GET = `GET`),
      (e.HTTP_REQUEST_METHOD_VALUE_HEAD = `HEAD`),
      (e.HTTP_REQUEST_METHOD_VALUE_OPTIONS = `OPTIONS`),
      (e.HTTP_REQUEST_METHOD_VALUE_PATCH = `PATCH`),
      (e.HTTP_REQUEST_METHOD_VALUE_POST = `POST`),
      (e.HTTP_REQUEST_METHOD_VALUE_PUT = `PUT`),
      (e.HTTP_REQUEST_METHOD_VALUE_TRACE = `TRACE`),
      (e.ATTR_HTTP_REQUEST_METHOD_ORIGINAL = `http.request.method_original`),
      (e.ATTR_HTTP_REQUEST_RESEND_COUNT = `http.request.resend_count`),
      (e.ATTR_HTTP_RESPONSE_HEADER = (e) => `http.response.header.${e}`),
      (e.ATTR_HTTP_RESPONSE_STATUS_CODE = `http.response.status_code`),
      (e.ATTR_HTTP_ROUTE = `http.route`),
      (e.ATTR_JVM_GC_ACTION = `jvm.gc.action`),
      (e.ATTR_JVM_GC_NAME = `jvm.gc.name`),
      (e.ATTR_JVM_MEMORY_POOL_NAME = `jvm.memory.pool.name`),
      (e.ATTR_JVM_MEMORY_TYPE = `jvm.memory.type`),
      (e.JVM_MEMORY_TYPE_VALUE_HEAP = `heap`),
      (e.JVM_MEMORY_TYPE_VALUE_NON_HEAP = `non_heap`),
      (e.ATTR_JVM_THREAD_DAEMON = `jvm.thread.daemon`),
      (e.ATTR_JVM_THREAD_STATE = `jvm.thread.state`),
      (e.JVM_THREAD_STATE_VALUE_BLOCKED = `blocked`),
      (e.JVM_THREAD_STATE_VALUE_NEW = `new`),
      (e.JVM_THREAD_STATE_VALUE_RUNNABLE = `runnable`),
      (e.JVM_THREAD_STATE_VALUE_TERMINATED = `terminated`),
      (e.JVM_THREAD_STATE_VALUE_TIMED_WAITING = `timed_waiting`),
      (e.JVM_THREAD_STATE_VALUE_WAITING = `waiting`),
      (e.ATTR_K8S_CLUSTER_NAME = `k8s.cluster.name`),
      (e.ATTR_K8S_CLUSTER_UID = `k8s.cluster.uid`),
      (e.ATTR_K8S_CONTAINER_NAME = `k8s.container.name`),
      (e.ATTR_K8S_CONTAINER_RESTART_COUNT = `k8s.container.restart_count`),
      (e.ATTR_K8S_CRONJOB_ANNOTATION = (e) => `k8s.cronjob.annotation.${e}`),
      (e.ATTR_K8S_CRONJOB_LABEL = (e) => `k8s.cronjob.label.${e}`),
      (e.ATTR_K8S_CRONJOB_NAME = `k8s.cronjob.name`),
      (e.ATTR_K8S_CRONJOB_UID = `k8s.cronjob.uid`),
      (e.ATTR_K8S_DAEMONSET_ANNOTATION = (e) => `k8s.daemonset.annotation.${e}`),
      (e.ATTR_K8S_DAEMONSET_LABEL = (e) => `k8s.daemonset.label.${e}`),
      (e.ATTR_K8S_DAEMONSET_NAME = `k8s.daemonset.name`),
      (e.ATTR_K8S_DAEMONSET_UID = `k8s.daemonset.uid`),
      (e.ATTR_K8S_DEPLOYMENT_ANNOTATION = (e) => `k8s.deployment.annotation.${e}`),
      (e.ATTR_K8S_DEPLOYMENT_LABEL = (e) => `k8s.deployment.label.${e}`),
      (e.ATTR_K8S_DEPLOYMENT_NAME = `k8s.deployment.name`),
      (e.ATTR_K8S_DEPLOYMENT_UID = `k8s.deployment.uid`),
      (e.ATTR_K8S_JOB_ANNOTATION = (e) => `k8s.job.annotation.${e}`),
      (e.ATTR_K8S_JOB_LABEL = (e) => `k8s.job.label.${e}`),
      (e.ATTR_K8S_JOB_NAME = `k8s.job.name`),
      (e.ATTR_K8S_JOB_UID = `k8s.job.uid`),
      (e.ATTR_K8S_NAMESPACE_ANNOTATION = (e) => `k8s.namespace.annotation.${e}`),
      (e.ATTR_K8S_NAMESPACE_LABEL = (e) => `k8s.namespace.label.${e}`),
      (e.ATTR_K8S_NAMESPACE_NAME = `k8s.namespace.name`),
      (e.ATTR_K8S_NODE_ANNOTATION = (e) => `k8s.node.annotation.${e}`),
      (e.ATTR_K8S_NODE_LABEL = (e) => `k8s.node.label.${e}`),
      (e.ATTR_K8S_NODE_NAME = `k8s.node.name`),
      (e.ATTR_K8S_NODE_UID = `k8s.node.uid`),
      (e.ATTR_K8S_POD_ANNOTATION = (e) => `k8s.pod.annotation.${e}`),
      (e.ATTR_K8S_POD_HOSTNAME = `k8s.pod.hostname`),
      (e.ATTR_K8S_POD_IP = `k8s.pod.ip`),
      (e.ATTR_K8S_POD_LABEL = (e) => `k8s.pod.label.${e}`),
      (e.ATTR_K8S_POD_NAME = `k8s.pod.name`),
      (e.ATTR_K8S_POD_START_TIME = `k8s.pod.start_time`),
      (e.ATTR_K8S_POD_UID = `k8s.pod.uid`),
      (e.ATTR_K8S_REPLICASET_ANNOTATION = (e) => `k8s.replicaset.annotation.${e}`),
      (e.ATTR_K8S_REPLICASET_LABEL = (e) => `k8s.replicaset.label.${e}`),
      (e.ATTR_K8S_REPLICASET_NAME = `k8s.replicaset.name`),
      (e.ATTR_K8S_REPLICASET_UID = `k8s.replicaset.uid`),
      (e.ATTR_K8S_STATEFULSET_ANNOTATION = (e) => `k8s.statefulset.annotation.${e}`),
      (e.ATTR_K8S_STATEFULSET_LABEL = (e) => `k8s.statefulset.label.${e}`),
      (e.ATTR_K8S_STATEFULSET_NAME = `k8s.statefulset.name`),
      (e.ATTR_K8S_STATEFULSET_UID = `k8s.statefulset.uid`),
      (e.ATTR_NETWORK_LOCAL_ADDRESS = `network.local.address`),
      (e.ATTR_NETWORK_LOCAL_PORT = `network.local.port`),
      (e.ATTR_NETWORK_PEER_ADDRESS = `network.peer.address`),
      (e.ATTR_NETWORK_PEER_PORT = `network.peer.port`),
      (e.ATTR_NETWORK_PROTOCOL_NAME = `network.protocol.name`),
      (e.ATTR_NETWORK_PROTOCOL_VERSION = `network.protocol.version`),
      (e.ATTR_NETWORK_TRANSPORT = `network.transport`),
      (e.NETWORK_TRANSPORT_VALUE_PIPE = `pipe`),
      (e.NETWORK_TRANSPORT_VALUE_QUIC = `quic`),
      (e.NETWORK_TRANSPORT_VALUE_TCP = `tcp`),
      (e.NETWORK_TRANSPORT_VALUE_UDP = `udp`),
      (e.NETWORK_TRANSPORT_VALUE_UNIX = `unix`),
      (e.ATTR_NETWORK_TYPE = `network.type`),
      (e.NETWORK_TYPE_VALUE_IPV4 = `ipv4`),
      (e.NETWORK_TYPE_VALUE_IPV6 = `ipv6`),
      (e.ATTR_OTEL_EVENT_NAME = `otel.event.name`),
      (e.ATTR_OTEL_SCOPE_NAME = `otel.scope.name`),
      (e.ATTR_OTEL_SCOPE_VERSION = `otel.scope.version`),
      (e.ATTR_OTEL_STATUS_CODE = `otel.status_code`),
      (e.OTEL_STATUS_CODE_VALUE_ERROR = `ERROR`),
      (e.OTEL_STATUS_CODE_VALUE_OK = `OK`),
      (e.ATTR_OTEL_STATUS_DESCRIPTION = `otel.status_description`),
      (e.ATTR_SERVER_ADDRESS = `server.address`),
      (e.ATTR_SERVER_PORT = `server.port`),
      (e.ATTR_SERVICE_INSTANCE_ID = `service.instance.id`),
      (e.ATTR_SERVICE_NAME = `service.name`),
      (e.ATTR_SERVICE_NAMESPACE = `service.namespace`),
      (e.ATTR_SERVICE_VERSION = `service.version`),
      (e.ATTR_SIGNALR_CONNECTION_STATUS = `signalr.connection.status`),
      (e.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = `app_shutdown`),
      (e.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = `normal_closure`),
      (e.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = `timeout`),
      (e.ATTR_SIGNALR_TRANSPORT = `signalr.transport`),
      (e.SIGNALR_TRANSPORT_VALUE_LONG_POLLING = `long_polling`),
      (e.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = `server_sent_events`),
      (e.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = `web_sockets`),
      (e.ATTR_TELEMETRY_DISTRO_NAME = `telemetry.distro.name`),
      (e.ATTR_TELEMETRY_DISTRO_VERSION = `telemetry.distro.version`),
      (e.ATTR_TELEMETRY_SDK_LANGUAGE = `telemetry.sdk.language`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_CPP = `cpp`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = `dotnet`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = `erlang`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_GO = `go`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = `java`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_KOTLIN = `kotlin`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = `nodejs`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_PHP = `php`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = `python`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = `ruby`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_RUST = `rust`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = `swift`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = `webjs`),
      (e.ATTR_TELEMETRY_SDK_NAME = `telemetry.sdk.name`),
      (e.ATTR_TELEMETRY_SDK_VERSION = `telemetry.sdk.version`),
      (e.ATTR_URL_FRAGMENT = `url.fragment`),
      (e.ATTR_URL_FULL = `url.full`),
      (e.ATTR_URL_PATH = `url.path`),
      (e.ATTR_URL_QUERY = `url.query`),
      (e.ATTR_URL_SCHEME = `url.scheme`),
      (e.ATTR_USER_AGENT_ORIGINAL = `user_agent.original`));
  }),
  Jg = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS =
        e.METRIC_KESTREL_UPGRADED_CONNECTIONS =
        e.METRIC_KESTREL_TLS_HANDSHAKE_DURATION =
        e.METRIC_KESTREL_REJECTED_CONNECTIONS =
        e.METRIC_KESTREL_QUEUED_REQUESTS =
        e.METRIC_KESTREL_QUEUED_CONNECTIONS =
        e.METRIC_KESTREL_CONNECTION_DURATION =
        e.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES =
        e.METRIC_KESTREL_ACTIVE_CONNECTIONS =
        e.METRIC_JVM_THREAD_COUNT =
        e.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC =
        e.METRIC_JVM_MEMORY_USED =
        e.METRIC_JVM_MEMORY_LIMIT =
        e.METRIC_JVM_MEMORY_COMMITTED =
        e.METRIC_JVM_GC_DURATION =
        e.METRIC_JVM_CPU_TIME =
        e.METRIC_JVM_CPU_RECENT_UTILIZATION =
        e.METRIC_JVM_CPU_COUNT =
        e.METRIC_JVM_CLASS_UNLOADED =
        e.METRIC_JVM_CLASS_LOADED =
        e.METRIC_JVM_CLASS_COUNT =
        e.METRIC_HTTP_SERVER_REQUEST_DURATION =
        e.METRIC_HTTP_CLIENT_REQUEST_DURATION =
        e.METRIC_DOTNET_TIMER_COUNT =
        e.METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT =
        e.METRIC_DOTNET_THREAD_POOL_THREAD_COUNT =
        e.METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH =
        e.METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET =
        e.METRIC_DOTNET_PROCESS_CPU_TIME =
        e.METRIC_DOTNET_PROCESS_CPU_COUNT =
        e.METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS =
        e.METRIC_DOTNET_JIT_COMPILED_METHODS =
        e.METRIC_DOTNET_JIT_COMPILED_IL_SIZE =
        e.METRIC_DOTNET_JIT_COMPILATION_TIME =
        e.METRIC_DOTNET_GC_PAUSE_TIME =
        e.METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE =
        e.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE =
        e.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE =
        e.METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED =
        e.METRIC_DOTNET_GC_COLLECTIONS =
        e.METRIC_DOTNET_EXCEPTIONS =
        e.METRIC_DOTNET_ASSEMBLY_COUNT =
        e.METRIC_DB_CLIENT_OPERATION_DURATION =
        e.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS =
        e.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS =
        e.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION =
        e.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE =
        e.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS =
        e.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES =
        e.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS =
          void 0),
      (e.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = void 0),
      (e.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS = `aspnetcore.diagnostics.exceptions`),
      (e.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES = `aspnetcore.rate_limiting.active_request_leases`),
      (e.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS = `aspnetcore.rate_limiting.queued_requests`),
      (e.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE = `aspnetcore.rate_limiting.request.time_in_queue`),
      (e.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION = `aspnetcore.rate_limiting.request_lease.duration`),
      (e.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS = `aspnetcore.rate_limiting.requests`),
      (e.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS = `aspnetcore.routing.match_attempts`),
      (e.METRIC_DB_CLIENT_OPERATION_DURATION = `db.client.operation.duration`),
      (e.METRIC_DOTNET_ASSEMBLY_COUNT = `dotnet.assembly.count`),
      (e.METRIC_DOTNET_EXCEPTIONS = `dotnet.exceptions`),
      (e.METRIC_DOTNET_GC_COLLECTIONS = `dotnet.gc.collections`),
      (e.METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED = `dotnet.gc.heap.total_allocated`),
      (e.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE = `dotnet.gc.last_collection.heap.fragmentation.size`),
      (e.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE = `dotnet.gc.last_collection.heap.size`),
      (e.METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE = `dotnet.gc.last_collection.memory.committed_size`),
      (e.METRIC_DOTNET_GC_PAUSE_TIME = `dotnet.gc.pause.time`),
      (e.METRIC_DOTNET_JIT_COMPILATION_TIME = `dotnet.jit.compilation.time`),
      (e.METRIC_DOTNET_JIT_COMPILED_IL_SIZE = `dotnet.jit.compiled_il.size`),
      (e.METRIC_DOTNET_JIT_COMPILED_METHODS = `dotnet.jit.compiled_methods`),
      (e.METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS = `dotnet.monitor.lock_contentions`),
      (e.METRIC_DOTNET_PROCESS_CPU_COUNT = `dotnet.process.cpu.count`),
      (e.METRIC_DOTNET_PROCESS_CPU_TIME = `dotnet.process.cpu.time`),
      (e.METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET = `dotnet.process.memory.working_set`),
      (e.METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH = `dotnet.thread_pool.queue.length`),
      (e.METRIC_DOTNET_THREAD_POOL_THREAD_COUNT = `dotnet.thread_pool.thread.count`),
      (e.METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT = `dotnet.thread_pool.work_item.count`),
      (e.METRIC_DOTNET_TIMER_COUNT = `dotnet.timer.count`),
      (e.METRIC_HTTP_CLIENT_REQUEST_DURATION = `http.client.request.duration`),
      (e.METRIC_HTTP_SERVER_REQUEST_DURATION = `http.server.request.duration`),
      (e.METRIC_JVM_CLASS_COUNT = `jvm.class.count`),
      (e.METRIC_JVM_CLASS_LOADED = `jvm.class.loaded`),
      (e.METRIC_JVM_CLASS_UNLOADED = `jvm.class.unloaded`),
      (e.METRIC_JVM_CPU_COUNT = `jvm.cpu.count`),
      (e.METRIC_JVM_CPU_RECENT_UTILIZATION = `jvm.cpu.recent_utilization`),
      (e.METRIC_JVM_CPU_TIME = `jvm.cpu.time`),
      (e.METRIC_JVM_GC_DURATION = `jvm.gc.duration`),
      (e.METRIC_JVM_MEMORY_COMMITTED = `jvm.memory.committed`),
      (e.METRIC_JVM_MEMORY_LIMIT = `jvm.memory.limit`),
      (e.METRIC_JVM_MEMORY_USED = `jvm.memory.used`),
      (e.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC = `jvm.memory.used_after_last_gc`),
      (e.METRIC_JVM_THREAD_COUNT = `jvm.thread.count`),
      (e.METRIC_KESTREL_ACTIVE_CONNECTIONS = `kestrel.active_connections`),
      (e.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES = `kestrel.active_tls_handshakes`),
      (e.METRIC_KESTREL_CONNECTION_DURATION = `kestrel.connection.duration`),
      (e.METRIC_KESTREL_QUEUED_CONNECTIONS = `kestrel.queued_connections`),
      (e.METRIC_KESTREL_QUEUED_REQUESTS = `kestrel.queued_requests`),
      (e.METRIC_KESTREL_REJECTED_CONNECTIONS = `kestrel.rejected_connections`),
      (e.METRIC_KESTREL_TLS_HANDSHAKE_DURATION = `kestrel.tls_handshake.duration`),
      (e.METRIC_KESTREL_UPGRADED_CONNECTIONS = `kestrel.upgraded_connections`),
      (e.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS = `signalr.server.active_connections`),
      (e.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = `signalr.server.connection.duration`));
  }),
  Yg = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.EVENT_EXCEPTION = void 0),
      (e.EVENT_EXCEPTION = `exception`));
  }),
  Xg = e.t((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__exportStar) ||
        function (e, n) {
          for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      n(Wg(), e),
      n(Kg(), e),
      n(qg(), e),
      n(Jg(), e),
      n(Yg(), e));
  });
function Zg() {
  return `unknown_service:${process.argv0}`;
}
var Qg = (e) => typeof e == `object` && !!e && typeof e.then == `function`,
  Y = e.a(F());
L();
var $g = Xg(),
  e_ = class e {
    _rawAttributes;
    _asyncAttributesPending = !1;
    _schemaUrl;
    _memoizedAttributes;
    static FromAttributeList(t, n) {
      let r = new e({}, n);
      return (
        (r._rawAttributes = r_(t)),
        (r._asyncAttributesPending = t.filter(([e, t]) => Qg(t)).length > 0),
        r
      );
    }
    constructor(e, t) {
      let n = e.attributes ?? {};
      ((this._rawAttributes = Object.entries(n).map(
        ([e, t]) => (Qg(t) && (this._asyncAttributesPending = !0), [e, t]),
      )),
        (this._rawAttributes = r_(this._rawAttributes)),
        (this._schemaUrl = i_(t?.schemaUrl)));
    }
    get asyncAttributesPending() {
      return this._asyncAttributesPending;
    }
    async waitForAsyncAttributes() {
      if (this.asyncAttributesPending) {
        for (let e = 0; e < this._rawAttributes.length; e++) {
          let [t, n] = this._rawAttributes[e];
          this._rawAttributes[e] = [t, Qg(n) ? await n : n];
        }
        this._asyncAttributesPending = !1;
      }
    }
    get attributes() {
      if (
        (this.asyncAttributesPending &&
          Y.diag.error(`Accessing resource attributes before async attributes settled`),
        this._memoizedAttributes)
      )
        return this._memoizedAttributes;
      let e = {};
      for (let [t, n] of this._rawAttributes) {
        if (Qg(n)) {
          Y.diag.debug(`Unsettled resource attribute ${t} skipped`);
          continue;
        }
        n != null && (e[t] ??= n);
      }
      return (this._asyncAttributesPending || (this._memoizedAttributes = e), e);
    }
    getRawAttributes() {
      return this._rawAttributes;
    }
    get schemaUrl() {
      return this._schemaUrl;
    }
    merge(t) {
      if (t == null) return this;
      let n = a_(this, t),
        r = n ? { schemaUrl: n } : void 0;
      return e.FromAttributeList([...t.getRawAttributes(), ...this.getRawAttributes()], r);
    }
  };
function t_(e, t) {
  return e_.FromAttributeList(Object.entries(e), t);
}
function n_() {
  return t_({
    [$g.ATTR_SERVICE_NAME]: Zg(),
    [$g.ATTR_TELEMETRY_SDK_LANGUAGE]: Ki[$g.ATTR_TELEMETRY_SDK_LANGUAGE],
    [$g.ATTR_TELEMETRY_SDK_NAME]: Ki[$g.ATTR_TELEMETRY_SDK_NAME],
    [$g.ATTR_TELEMETRY_SDK_VERSION]: Ki[$g.ATTR_TELEMETRY_SDK_VERSION],
  });
}
function r_(e) {
  return e.map(([e, t]) =>
    Qg(t)
      ? [
          e,
          t.catch((t) => {
            Y.diag.debug(`promise rejection for resource attribute: %s - %s`, e, t);
          }),
        ]
      : [e, t],
  );
}
function i_(e) {
  if (typeof e == `string` || e === void 0) return e;
  Y.diag.warn(`Schema URL must be string or undefined, got %s. Schema URL will be ignored.`, e);
}
function a_(e, t) {
  let n = e?.schemaUrl,
    r = t?.schemaUrl,
    i = n === void 0 || n === ``,
    a = r === void 0 || r === ``;
  if (i) return r;
  if (a || n === r) return n;
  Y.diag.warn(
    `Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.`,
    n,
    r,
  );
}
var o_ = `exception`;
L();
var X = Hi(),
  s_ = class {
    _spanContext;
    kind;
    parentSpanContext;
    attributes = {};
    links = [];
    events = [];
    startTime;
    resource;
    instrumentationScope;
    _droppedAttributesCount = 0;
    _droppedEventsCount = 0;
    _droppedLinksCount = 0;
    name;
    status = { code: Y.SpanStatusCode.UNSET };
    endTime = [0, 0];
    _ended = !1;
    _duration = [-1, -1];
    _spanProcessor;
    _spanLimits;
    _attributeValueLengthLimit;
    _performanceStartTime;
    _performanceOffset;
    _startTimeProvided;
    constructor(e) {
      let t = Date.now();
      ((this._spanContext = e.spanContext),
        (this._performanceStartTime = Ai.now()),
        (this._performanceOffset = t - (this._performanceStartTime + Zi())),
        (this._startTimeProvided = e.startTime != null),
        (this._spanLimits = e.spanLimits),
        (this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0),
        (this._spanProcessor = e.spanProcessor),
        (this.name = e.name),
        (this.parentSpanContext = e.parentSpanContext),
        (this.kind = e.kind),
        (this.links = e.links || []),
        (this.startTime = this._getTime(e.startTime ?? t)),
        (this.resource = e.resource),
        (this.instrumentationScope = e.scope),
        e.attributes != null && this.setAttributes(e.attributes),
        this._spanProcessor.onStart(this, e.context));
    }
    spanContext() {
      return this._spanContext;
    }
    setAttribute(e, t) {
      if (t == null || this._isSpanEnded()) return this;
      if (e.length === 0) return (Y.diag.warn(`Invalid attribute key: ${e}`), this);
      if (!li(t)) return (Y.diag.warn(`Invalid attribute value set for key: ${e}`), this);
      let { attributeCountLimit: n } = this._spanLimits;
      return n !== void 0 &&
        Object.keys(this.attributes).length >= n &&
        !Object.prototype.hasOwnProperty.call(this.attributes, e)
        ? (this._droppedAttributesCount++, this)
        : ((this.attributes[e] = this._truncateToSize(t)), this);
    }
    setAttributes(e) {
      for (let [t, n] of Object.entries(e)) this.setAttribute(t, n);
      return this;
    }
    addEvent(e, t, n) {
      if (this._isSpanEnded()) return this;
      let { eventCountLimit: r } = this._spanLimits;
      if (r === 0) return (Y.diag.warn(`No events allowed.`), this._droppedEventsCount++, this);
      (r !== void 0 &&
        this.events.length >= r &&
        (this._droppedEventsCount === 0 && Y.diag.debug(`Dropping extra events.`),
        this.events.shift(),
        this._droppedEventsCount++),
        oa(t) && (oa(n) || (n = t), (t = void 0)));
      let i = si(t);
      return (
        this.events.push({ name: e, attributes: i, time: this._getTime(n), droppedAttributesCount: 0 }),
        this
      );
    }
    addLink(e) {
      return (this.links.push(e), this);
    }
    addLinks(e) {
      return (this.links.push(...e), this);
    }
    setStatus(e) {
      return this._isSpanEnded()
        ? this
        : ((this.status = { ...e }),
          this.status.message != null &&
            typeof e.message != `string` &&
            (Y.diag.warn(`Dropping invalid status.message of type '${typeof e.message}', expected 'string'`),
            delete this.status.message),
          this);
    }
    updateName(e) {
      return (this._isSpanEnded() || (this.name = e), this);
    }
    end(e) {
      if (this._isSpanEnded()) {
        Y.diag.error(
          `${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`,
        );
        return;
      }
      ((this._ended = !0),
        (this.endTime = this._getTime(e)),
        (this._duration = ea(this.startTime, this.endTime)),
        this._duration[0] < 0 &&
          (Y.diag.warn(
            `Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.`,
            this.startTime,
            this.endTime,
          ),
          (this.endTime = this.startTime.slice()),
          (this._duration = [0, 0])),
        this._droppedEventsCount > 0 &&
          Y.diag.warn(`Dropped ${this._droppedEventsCount} events because eventCountLimit reached`),
        this._spanProcessor.onEnd(this));
    }
    _getTime(e) {
      if (typeof e == `number` && e <= Ai.now()) return Qi(e + this._performanceOffset);
      if (typeof e == `number`) return Xi(e);
      if (e instanceof Date) return Xi(e.getTime());
      if (aa(e)) return e;
      if (this._startTimeProvided) return Xi(Date.now());
      let t = Ai.now() - this._performanceStartTime;
      return sa(this.startTime, Xi(t));
    }
    isRecording() {
      return this._ended === !1;
    }
    recordException(e, t) {
      let n = {};
      (typeof e == `string`
        ? (n[X.ATTR_EXCEPTION_MESSAGE] = e)
        : e &&
          (e.code
            ? (n[X.ATTR_EXCEPTION_TYPE] = e.code.toString())
            : e.name && (n[X.ATTR_EXCEPTION_TYPE] = e.name),
          e.message && (n[X.ATTR_EXCEPTION_MESSAGE] = e.message),
          e.stack && (n[X.ATTR_EXCEPTION_STACKTRACE] = e.stack)),
        n[X.ATTR_EXCEPTION_TYPE] || n[X.ATTR_EXCEPTION_MESSAGE]
          ? this.addEvent(o_, n, t)
          : Y.diag.warn(`Failed to record an exception ${e}`));
    }
    get duration() {
      return this._duration;
    }
    get ended() {
      return this._ended;
    }
    get droppedAttributesCount() {
      return this._droppedAttributesCount;
    }
    get droppedEventsCount() {
      return this._droppedEventsCount;
    }
    get droppedLinksCount() {
      return this._droppedLinksCount;
    }
    _isSpanEnded() {
      if (this._ended) {
        let e = Error(
          `Operation attempted on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`,
        );
        Y.diag.warn(
          `Cannot execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`,
          e,
        );
      }
      return this._ended;
    }
    _truncateToLimitUtil(e, t) {
      return e.length <= t ? e : e.substring(0, t);
    }
    _truncateToSize(e) {
      let t = this._attributeValueLengthLimit;
      return t <= 0
        ? (Y.diag.warn(`Attribute value limit must be positive, got ${t}`), e)
        : typeof e == `string`
          ? this._truncateToLimitUtil(e, t)
          : Array.isArray(e)
            ? e.map((e) => (typeof e == `string` ? this._truncateToLimitUtil(e, t) : e))
            : e;
    }
  },
  c_;
(function (e) {
  ((e[(e.NOT_RECORD = 0)] = `NOT_RECORD`),
    (e[(e.RECORD = 1)] = `RECORD`),
    (e[(e.RECORD_AND_SAMPLED = 2)] = `RECORD_AND_SAMPLED`));
})((c_ ||= {}));
var l_ = class {
    shouldSample() {
      return { decision: c_.NOT_RECORD };
    }
    toString() {
      return `AlwaysOffSampler`;
    }
  },
  u_ = class {
    shouldSample() {
      return { decision: c_.RECORD_AND_SAMPLED };
    }
    toString() {
      return `AlwaysOnSampler`;
    }
  };
L();
var d_ = class {
    _root;
    _remoteParentSampled;
    _remoteParentNotSampled;
    _localParentSampled;
    _localParentNotSampled;
    constructor(e) {
      ((this._root = e.root),
        (this._root ||= (bi(Error(`ParentBasedSampler must have a root sampler configured`)), new u_())),
        (this._remoteParentSampled = e.remoteParentSampled ?? new u_()),
        (this._remoteParentNotSampled = e.remoteParentNotSampled ?? new l_()),
        (this._localParentSampled = e.localParentSampled ?? new u_()),
        (this._localParentNotSampled = e.localParentNotSampled ?? new l_()));
    }
    shouldSample(e, t, n, r, i, a) {
      let o = Y.trace.getSpanContext(e);
      return !o || !(0, Y.isSpanContextValid)(o)
        ? this._root.shouldSample(e, t, n, r, i, a)
        : o.isRemote
          ? o.traceFlags & Y.TraceFlags.SAMPLED
            ? this._remoteParentSampled.shouldSample(e, t, n, r, i, a)
            : this._remoteParentNotSampled.shouldSample(e, t, n, r, i, a)
          : o.traceFlags & Y.TraceFlags.SAMPLED
            ? this._localParentSampled.shouldSample(e, t, n, r, i, a)
            : this._localParentNotSampled.shouldSample(e, t, n, r, i, a);
    }
    toString() {
      return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
    }
  },
  f_ = class {
    _ratio;
    _upperBound;
    constructor(e = 0) {
      ((this._ratio = e),
        (this._ratio = this._normalize(e)),
        (this._upperBound = Math.floor(this._ratio * 4294967295)));
    }
    shouldSample(e, t) {
      return {
        decision:
          (0, Y.isValidTraceId)(t) && this._accumulate(t) < this._upperBound
            ? c_.RECORD_AND_SAMPLED
            : c_.NOT_RECORD,
      };
    }
    toString() {
      return `TraceIdRatioBased{${this._ratio}}`;
    }
    _normalize(e) {
      return typeof e != `number` || isNaN(e) ? 0 : e >= 1 ? 1 : e <= 0 ? 0 : e;
    }
    _accumulate(e) {
      let t = 0;
      for (let n = 0; n < e.length / 8; n++) {
        let r = n * 8,
          i = parseInt(e.slice(r, r + 8), 16);
        t = (t ^ i) >>> 0;
      }
      return t;
    }
  };
L();
var p_;
(function (e) {
  ((e.AlwaysOff = `always_off`),
    (e.AlwaysOn = `always_on`),
    (e.ParentBasedAlwaysOff = `parentbased_always_off`),
    (e.ParentBasedAlwaysOn = `parentbased_always_on`),
    (e.ParentBasedTraceIdRatio = `parentbased_traceidratio`),
    (e.TraceIdRatio = `traceidratio`));
})((p_ ||= {}));
var m_ = 1;
function h_() {
  return {
    sampler: g_(),
    forceFlushTimeoutMillis: 3e4,
    generalLimits: {
      attributeValueLengthLimit: I(`OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT`) ?? 1 / 0,
      attributeCountLimit: I(`OTEL_ATTRIBUTE_COUNT_LIMIT`) ?? 128,
    },
    spanLimits: {
      attributeValueLengthLimit: I(`OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT`) ?? 1 / 0,
      attributeCountLimit: I(`OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT`) ?? 128,
      linkCountLimit: I(`OTEL_SPAN_LINK_COUNT_LIMIT`) ?? 128,
      eventCountLimit: I(`OTEL_SPAN_EVENT_COUNT_LIMIT`) ?? 128,
      attributePerEventCountLimit: I(`OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT`) ?? 128,
      attributePerLinkCountLimit: I(`OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT`) ?? 128,
    },
  };
}
function g_() {
  let e = Ci(`OTEL_TRACES_SAMPLER`) ?? p_.ParentBasedAlwaysOn;
  switch (e) {
    case p_.AlwaysOn:
      return new u_();
    case p_.AlwaysOff:
      return new l_();
    case p_.ParentBasedAlwaysOn:
      return new d_({ root: new u_() });
    case p_.ParentBasedAlwaysOff:
      return new d_({ root: new l_() });
    case p_.TraceIdRatio:
      return new f_(__());
    case p_.ParentBasedTraceIdRatio:
      return new d_({ root: new f_(__()) });
    default:
      return (
        Y.diag.error(`OTEL_TRACES_SAMPLER value "${e}" invalid, defaulting to "${p_.ParentBasedAlwaysOn}".`),
        new d_({ root: new u_() })
      );
  }
}
function __() {
  let e = I(`OTEL_TRACES_SAMPLER_ARG`);
  return e == null
    ? (Y.diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${m_}.`), m_)
    : e < 0 || e > 1
      ? (Y.diag.error(
          `OTEL_TRACES_SAMPLER_ARG=${e} was given, but it is out of range ([0..1]), defaulting to ${m_}.`,
        ),
        m_)
      : e;
}
L();
function v_(e) {
  let t = { sampler: g_() },
    n = h_(),
    r = Object.assign({}, n, t, e);
  return (
    (r.generalLimits = Object.assign({}, n.generalLimits, e.generalLimits || {})),
    (r.spanLimits = Object.assign({}, n.spanLimits, e.spanLimits || {})),
    r
  );
}
function y_(e) {
  let t = Object.assign({}, e.spanLimits);
  return (
    (t.attributeCountLimit =
      e.spanLimits?.attributeCountLimit ??
      e.generalLimits?.attributeCountLimit ??
      I(`OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT`) ??
      I(`OTEL_ATTRIBUTE_COUNT_LIMIT`) ??
      128),
    (t.attributeValueLengthLimit =
      e.spanLimits?.attributeValueLengthLimit ??
      e.generalLimits?.attributeValueLengthLimit ??
      I(`OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT`) ??
      I(`OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT`) ??
      1 / 0),
    Object.assign({}, e, { spanLimits: t })
  );
}
L();
var b_ = class {
    _exporter;
    _maxExportBatchSize;
    _maxQueueSize;
    _scheduledDelayMillis;
    _exportTimeoutMillis;
    _isExporting = !1;
    _finishedSpans = [];
    _timer;
    _shutdownOnce;
    _droppedSpansCount = 0;
    constructor(e, t) {
      ((this._exporter = e),
        (this._maxExportBatchSize =
          typeof t?.maxExportBatchSize == `number`
            ? t.maxExportBatchSize
            : (I(`OTEL_BSP_MAX_EXPORT_BATCH_SIZE`) ?? 512)),
        (this._maxQueueSize =
          typeof t?.maxQueueSize == `number` ? t.maxQueueSize : (I(`OTEL_BSP_MAX_QUEUE_SIZE`) ?? 2048)),
        (this._scheduledDelayMillis =
          typeof t?.scheduledDelayMillis == `number`
            ? t.scheduledDelayMillis
            : (I(`OTEL_BSP_SCHEDULE_DELAY`) ?? 5e3)),
        (this._exportTimeoutMillis =
          typeof t?.exportTimeoutMillis == `number`
            ? t.exportTimeoutMillis
            : (I(`OTEL_BSP_EXPORT_TIMEOUT`) ?? 3e4)),
        (this._shutdownOnce = new ko(this._shutdown, this)),
        this._maxExportBatchSize > this._maxQueueSize &&
          (Y.diag.warn(
            `BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize`,
          ),
          (this._maxExportBatchSize = this._maxQueueSize)));
    }
    forceFlush() {
      return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll();
    }
    onStart(e, t) {}
    onEnd(e) {
      this._shutdownOnce.isCalled ||
        ((e.spanContext().traceFlags & Y.TraceFlags.SAMPLED) !== 0 && this._addToBuffer(e));
    }
    shutdown() {
      return this._shutdownOnce.call();
    }
    _shutdown() {
      return Promise.resolve()
        .then(() => this.onShutdown())
        .then(() => this._flushAll())
        .then(() => this._exporter.shutdown());
    }
    _addToBuffer(e) {
      if (this._finishedSpans.length >= this._maxQueueSize) {
        (this._droppedSpansCount === 0 && Y.diag.debug(`maxQueueSize reached, dropping spans`),
          this._droppedSpansCount++);
        return;
      }
      (this._droppedSpansCount > 0 &&
        (Y.diag.warn(`Dropped ${this._droppedSpansCount} spans because maxQueueSize reached`),
        (this._droppedSpansCount = 0)),
        this._finishedSpans.push(e),
        this._maybeStartTimer());
    }
    _flushAll() {
      return new Promise((e, t) => {
        let n = [],
          r = Math.ceil(this._finishedSpans.length / this._maxExportBatchSize);
        for (let e = 0, t = r; e < t; e++) n.push(this._flushOneBatch());
        Promise.all(n)
          .then(() => {
            e();
          })
          .catch(t);
      });
    }
    _flushOneBatch() {
      return (
        this._clearTimer(),
        this._finishedSpans.length === 0
          ? Promise.resolve()
          : new Promise((e, t) => {
              let n = setTimeout(() => {
                t(Error(`Timeout`));
              }, this._exportTimeoutMillis);
              Y.context.with(Vr(Y.context.active()), () => {
                let r;
                this._finishedSpans.length <= this._maxExportBatchSize
                  ? ((r = this._finishedSpans), (this._finishedSpans = []))
                  : (r = this._finishedSpans.splice(0, this._maxExportBatchSize));
                let i = () =>
                    this._exporter.export(r, (r) => {
                      (clearTimeout(n),
                        r.code === ma.SUCCESS
                          ? e()
                          : t(r.error ?? Error(`BatchSpanProcessor: span export failed`)));
                    }),
                  a = null;
                for (let e = 0, t = r.length; e < t; e++) {
                  let t = r[e];
                  t.resource.asyncAttributesPending &&
                    t.resource.waitForAsyncAttributes &&
                    ((a ??= []), a.push(t.resource.waitForAsyncAttributes()));
                }
                a === null
                  ? i()
                  : Promise.all(a).then(i, (e) => {
                      (bi(e), t(e));
                    });
              });
            })
      );
    }
    _maybeStartTimer() {
      if (this._isExporting) return;
      let e = () => {
        ((this._isExporting = !0),
          this._flushOneBatch()
            .finally(() => {
              ((this._isExporting = !1),
                this._finishedSpans.length > 0 && (this._clearTimer(), this._maybeStartTimer()));
            })
            .catch((e) => {
              ((this._isExporting = !1), bi(e));
            }));
      };
      if (this._finishedSpans.length >= this._maxExportBatchSize) return e();
      this._timer === void 0 &&
        ((this._timer = setTimeout(() => e(), this._scheduledDelayMillis)),
        typeof this._timer != `number` && this._timer.unref());
    }
    _clearTimer() {
      this._timer !== void 0 && (clearTimeout(this._timer), (this._timer = void 0));
    }
  },
  x_ = class extends b_ {
    onShutdown() {}
  },
  S_ = 8,
  C_ = 16,
  w_ = class {
    generateTraceId = E_(C_);
    generateSpanId = E_(S_);
  },
  T_ = Buffer.allocUnsafe(C_);
function E_(e) {
  return function () {
    for (let t = 0; t < e / 4; t++) T_.writeUInt32BE((Math.random() * 2 ** 32) >>> 0, t * 4);
    for (let t = 0; t < e && !(T_[t] > 0); t++) t === e - 1 && (T_[e - 1] = 1);
    return T_.toString(`hex`, 0, e);
  };
}
L();
var D_ = class {
  _sampler;
  _generalLimits;
  _spanLimits;
  _idGenerator;
  instrumentationScope;
  _resource;
  _spanProcessor;
  constructor(e, t, n, r) {
    let i = v_(t);
    ((this._sampler = i.sampler),
      (this._generalLimits = i.generalLimits),
      (this._spanLimits = i.spanLimits),
      (this._idGenerator = t.idGenerator || new w_()),
      (this._resource = n),
      (this._spanProcessor = r),
      (this.instrumentationScope = e));
  }
  startSpan(e, t = {}, n = Y.context.active()) {
    t.root && (n = Y.trace.deleteSpan(n));
    let r = Y.trace.getSpan(n);
    if (Ur(n))
      return (
        Y.diag.debug(`Instrumentation suppressed, returning Noop Span`),
        Y.trace.wrapSpanContext(Y.INVALID_SPAN_CONTEXT)
      );
    let i = r?.spanContext(),
      a = this._idGenerator.generateSpanId(),
      o,
      s,
      c;
    !i || !Y.trace.isSpanContextValid(i)
      ? (s = this._idGenerator.generateTraceId())
      : ((s = i.traceId), (c = i.traceState), (o = i));
    let l = t.kind ?? Y.SpanKind.INTERNAL,
      u = (t.links ?? []).map((e) => ({ context: e.context, attributes: si(e.attributes) })),
      d = si(t.attributes),
      f = this._sampler.shouldSample(n, s, e, l, d, u);
    c = f.traceState ?? c;
    let p = f.decision === Y.SamplingDecision.RECORD_AND_SAMPLED ? Y.TraceFlags.SAMPLED : Y.TraceFlags.NONE,
      m = { traceId: s, spanId: a, traceFlags: p, traceState: c };
    if (f.decision === Y.SamplingDecision.NOT_RECORD)
      return (
        Y.diag.debug(`Recording is off, propagating context in a non-recording span`),
        Y.trace.wrapSpanContext(m)
      );
    let h = si(Object.assign(d, f.attributes));
    return new s_({
      resource: this._resource,
      scope: this.instrumentationScope,
      context: n,
      spanContext: m,
      name: e,
      kind: l,
      links: u,
      parentSpanContext: o,
      attributes: h,
      startTime: t.startTime,
      spanProcessor: this._spanProcessor,
      spanLimits: this._spanLimits,
    });
  }
  startActiveSpan(e, t, n, r) {
    let i, a, o;
    if (arguments.length < 2) return;
    arguments.length === 2
      ? (o = t)
      : arguments.length === 3
        ? ((i = t), (o = n))
        : ((i = t), (a = n), (o = r));
    let s = a ?? Y.context.active(),
      c = this.startSpan(e, i, s),
      l = Y.trace.setSpan(s, c);
    return Y.context.with(l, o, void 0, c);
  }
  getGeneralLimits() {
    return this._generalLimits;
  }
  getSpanLimits() {
    return this._spanLimits;
  }
};
L();
var O_ = class {
  _spanProcessors;
  constructor(e) {
    this._spanProcessors = e;
  }
  forceFlush() {
    let e = [];
    for (let t of this._spanProcessors) e.push(t.forceFlush());
    return new Promise((t) => {
      Promise.all(e)
        .then(() => {
          t();
        })
        .catch((e) => {
          (bi(e || Error(`MultiSpanProcessor: forceFlush failed`)), t());
        });
    });
  }
  onStart(e, t) {
    for (let n of this._spanProcessors) n.onStart(e, t);
  }
  onEnd(e) {
    for (let t of this._spanProcessors) t.onEnd(e);
  }
  shutdown() {
    let e = [];
    for (let t of this._spanProcessors) e.push(t.shutdown());
    return new Promise((t, n) => {
      Promise.all(e).then(() => {
        t();
      }, n);
    });
  }
};
L();
var k_;
(function (e) {
  ((e[(e.resolved = 0)] = `resolved`),
    (e[(e.timeout = 1)] = `timeout`),
    (e[(e.error = 2)] = `error`),
    (e[(e.unresolved = 3)] = `unresolved`));
})((k_ ||= {}));
var A_ = class {
  _config;
  _tracers = new Map();
  _resource;
  _activeSpanProcessor;
  constructor(e = {}) {
    let t = lo({}, h_(), y_(e));
    ((this._resource = t.resource ?? n_()),
      (this._config = Object.assign({}, t, { resource: this._resource })));
    let n = [];
    (e.spanProcessors?.length && n.push(...e.spanProcessors), (this._activeSpanProcessor = new O_(n)));
  }
  getTracer(e, t, n) {
    let r = `${e}@${t || ``}:${n?.schemaUrl || ``}`;
    return (
      this._tracers.has(r) ||
        this._tracers.set(
          r,
          new D_(
            { name: e, version: t, schemaUrl: n?.schemaUrl },
            this._config,
            this._resource,
            this._activeSpanProcessor,
          ),
        ),
      this._tracers.get(r)
    );
  }
  forceFlush() {
    let e = this._config.forceFlushTimeoutMillis,
      t = this._activeSpanProcessor._spanProcessors.map(
        (t) =>
          new Promise((n) => {
            let r,
              i = setTimeout(() => {
                (n(Error(`Span processor did not completed within timeout period of ${e} ms`)),
                  (r = k_.timeout));
              }, e);
            t.forceFlush()
              .then(() => {
                (clearTimeout(i), r !== k_.timeout && ((r = k_.resolved), n(r)));
              })
              .catch((e) => {
                (clearTimeout(i), (r = k_.error), n(e));
              });
          }),
      );
    return new Promise((e, n) => {
      Promise.all(t)
        .then((t) => {
          let r = t.filter((e) => e !== k_.resolved);
          r.length > 0 ? n(r) : e();
        })
        .catch((e) => n([e]));
    });
  }
  shutdown() {
    return this._activeSpanProcessor.shutdown();
  }
};
L();
var j_ = `sentry.parentIsRemote`,
  M_ = `sentry.graphql.operation`;
function N_(e) {
  if (`parentSpanId` in e) return e.parentSpanId;
  if (`parentSpanContext` in e) return e.parentSpanContext?.spanId;
}
function P_(e) {
  let t = e;
  return !!t.attributes && typeof t.attributes == `object`;
}
function F_(e) {
  return typeof e.kind == `number`;
}
function I_(e) {
  return !!e.status;
}
function L_(e) {
  return !!e.name;
}
function R_(e) {
  if (!P_(e)) return {};
  let t = e.attributes[X.ATTR_URL_FULL] || e.attributes[X.SEMATTRS_HTTP_URL],
    n = {
      url: t,
      "http.method": e.attributes[X.ATTR_HTTP_REQUEST_METHOD] || e.attributes[X.SEMATTRS_HTTP_METHOD],
    };
  !n[`http.method`] && n.url && (n[`http.method`] = `GET`);
  try {
    if (typeof t == `string`) {
      let e = Th(t);
      ((n.url = Dh(e)), e.search && (n[`http.query`] = e.search), e.hash && (n[`http.fragment`] = e.hash));
    }
  } catch {}
  return n;
}
function z_(e) {
  return F_(e) ? e.kind : Y.SpanKind.INTERNAL;
}
var B_ = `sentry-trace`,
  V_ = `baggage`,
  H_ = `sentry.dsc`,
  U_ = `sentry.sampled_not_recording`,
  W_ = `sentry.url`,
  G_ = `sentry.sample_rand`,
  K_ = `sentry.sample_rate`,
  q_ = (0, Y.createContextKey)(`sentry_scopes`),
  J_ = (0, Y.createContextKey)(`sentry_fork_isolation_scope`),
  Y_ = (0, Y.createContextKey)(`sentry_fork_set_scope`),
  X_ = (0, Y.createContextKey)(`sentry_fork_set_isolation_scope`),
  Z_ = `_scopeContext`;
function Q_(e) {
  return e.getValue(q_);
}
function $_(e, t) {
  return e.setValue(q_, t);
}
function ev(e, t) {
  Kl(e, Z_, t);
}
function tv(e) {
  return e[Z_];
}
function nv(e) {
  let { traceFlags: t, traceState: n } = e,
    r = n ? n.get(U_) === `1` : !1;
  if (t === Y.TraceFlags.SAMPLED) return !0;
  if (r) return !1;
  let i = n ? n.get(H_) : void 0,
    a = i ? dd(i) : void 0;
  if (a?.sampled === `true`) return !0;
  if (a?.sampled === `false`) return !1;
}
function rv(e, t, n) {
  let r = t[X.ATTR_HTTP_REQUEST_METHOD] || t[X.SEMATTRS_HTTP_METHOD];
  if (r) return ov({ attributes: t, name: e, kind: n }, r);
  let i = t[X.SEMATTRS_DB_SYSTEM],
    a = typeof t[`sentry.op`] == `string` && t[`sentry.op`].startsWith(`cache.`);
  if (i && !a) return av({ attributes: t, name: e });
  let o = t[`sentry.source`] === `custom` ? `custom` : `route`;
  if (t[X.SEMATTRS_RPC_SERVICE]) return { ...lv(e, t, `route`), op: `rpc` };
  if (t[X.SEMATTRS_MESSAGING_SYSTEM]) return { ...lv(e, t, o), op: `message` };
  let s = t[X.SEMATTRS_FAAS_TRIGGER];
  return s ? { ...lv(e, t, o), op: s.toString() } : { op: void 0, description: e, source: `custom` };
}
function iv(e) {
  let t = P_(e) ? e.attributes : {};
  return rv(L_(e) ? e.name : `<unknown>`, t, z_(e));
}
function av({ attributes: e, name: t }) {
  let n = e[Qu];
  if (typeof n == `string`) return { op: `db`, description: n, source: e[`sentry.source`] || `custom` };
  if (e[`sentry.source`] === `custom`) return { op: `db`, description: t, source: `custom` };
  let r = e[X.SEMATTRS_DB_STATEMENT];
  return { op: `db`, description: r ? r.toString() : t, source: `task` };
}
function ov({ name: e, kind: t, attributes: n }, r) {
  let i = [`http`];
  switch (t) {
    case Y.SpanKind.CLIENT:
      i.push(`client`);
      break;
    case Y.SpanKind.SERVER:
      i.push(`server`);
  }
  n[`sentry.http.prefetch`] && i.push(`prefetch`);
  let { urlPath: a, url: o, query: s, fragment: c, hasRoute: l } = cv(n, t);
  if (!a) return { ...lv(e, n), op: i.join(`.`) };
  let u = n[M_],
    d = `${r} ${a}`,
    f = u ? `${d} (${sv(u)})` : d,
    p = l || a === `/` ? `route` : `url`,
    m = {};
  (o && (m.url = o), s && (m[`http.query`] = s), c && (m[`http.fragment`] = c));
  let h = t === Y.SpanKind.CLIENT || t === Y.SpanKind.SERVER,
    g = !`${n[`sentry.origin`] || `manual`}`.startsWith(`auto`),
    _ = n[Ku] === `custom`,
    v = n[Qu],
    { description: y, source: b } = !_ && v == null && (h || !g) ? { description: f, source: p } : lv(e, n);
  return { op: i.join(`.`), description: y, source: b, data: m };
}
function sv(e) {
  if (Array.isArray(e)) {
    let t = e.slice().sort();
    return t.length <= 5 ? t.join(`, `) : `${t.slice(0, 5).join(`, `)}, +${t.length - 5}`;
  }
  return `${e}`;
}
function cv(e, t) {
  let n = e[X.SEMATTRS_HTTP_TARGET],
    r = e[X.SEMATTRS_HTTP_URL] || e[X.ATTR_URL_FULL],
    i = e[X.ATTR_HTTP_ROUTE],
    a = typeof r == `string` ? Th(r) : void 0,
    o = a ? Dh(a) : void 0,
    s = a?.search || void 0,
    c = a?.hash || void 0;
  return typeof i == `string`
    ? { urlPath: i, url: o, query: s, fragment: c, hasRoute: !0 }
    : t === Y.SpanKind.SERVER && typeof n == `string`
      ? { urlPath: Eh(n), url: o, query: s, fragment: c, hasRoute: !1 }
      : a
        ? { urlPath: o, url: o, query: s, fragment: c, hasRoute: !1 }
        : typeof n == `string`
          ? { urlPath: Eh(n), url: o, query: s, fragment: c, hasRoute: !1 }
          : { urlPath: void 0, url: o, query: s, fragment: c, hasRoute: !1 };
}
function lv(e, t, n = `custom`) {
  let r = t[`sentry.source`] || n,
    i = t[Qu];
  return i && typeof i == `string` ? { description: i, source: r } : { description: e, source: r };
}
function uv() {
  return Y.trace.getActiveSpan();
}
var dv = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__;
function fv({ dsc: e, sampled: t }) {
  let n = e ? fd(e) : void 0,
    r = new Aa(),
    i = n ? r.set(H_, n) : r;
  return t === !1 ? i.set(U_, `1`) : i;
}
var pv = new Set();
function mv(e) {
  pv.add(e);
}
var hv = class extends ri {
    constructor() {
      (super(), mv(`SentryPropagator`), (this._urlMatchesTargetsMap = new Mg(100)));
    }
    inject(e, t, n) {
      if (Ur(e)) {
        dv && H.log(`[Tracing] Not injecting trace data for url because tracing is suppressed.`);
        return;
      }
      let r = Y.trace.getSpan(e),
        i = r && Cv(r),
        a = K()?.getOptions()?.tracePropagationTargets;
      if (!_v(i, a, this._urlMatchesTargetsMap)) {
        dv &&
          H.log(
            `[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:`,
            i,
          );
        return;
      }
      let o = Sv(t),
        s = Y.propagation.getBaggage(e) || Y.propagation.createBaggage({}),
        { dynamicSamplingContext: c, traceId: l, spanId: u, sampled: d } = vv(e);
      if (o) {
        let e = pd(o);
        e &&
          Object.entries(e).forEach(([e, t]) => {
            s = s.setEntry(e, { value: t });
          });
      }
      (c && (s = Object.entries(c).reduce((e, [t, n]) => (n ? e.setEntry(`${ld}${t}`, { value: n }) : e), s)),
        l && l !== Y.INVALID_TRACEID && n.set(t, B_, Ad(l, u, d)),
        super.inject(Y.propagation.setBaggage(e, s), t, n));
    }
    extract(e, t, n) {
      let r = n.get(t, B_),
        i = n.get(t, V_);
      return xv(yv(e, { sentryTrace: r ? (Array.isArray(r) ? r[0] : r) : void 0, baggage: i }));
    }
    fields() {
      return [B_, V_];
    }
  },
  gv = `[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:`;
function _v(e, t, n) {
  if (typeof e != `string` || !t) return !0;
  let r = n?.get(e);
  if (r !== void 0) return (dv && !r && H.log(gv, e), r);
  let i = ru(e, t);
  return (n?.set(e, i), dv && !i && H.log(gv, e), i);
}
function vv(e, t = {}) {
  let n = Y.trace.getSpan(e);
  if (n?.spanContext().isRemote) {
    let e = n.spanContext();
    return { dynamicSamplingContext: ff(n), traceId: e.traceId, spanId: void 0, sampled: nv(e) };
  }
  if (n) {
    let e = n.spanContext();
    return { dynamicSamplingContext: ff(n), traceId: e.traceId, spanId: e.spanId, sampled: nv(e) };
  }
  let r = t.scope || Q_(e)?.scope || W(),
    i = t.client || K(),
    a = r.getPropagationContext();
  return {
    dynamicSamplingContext: i ? df(i, r) : void 0,
    traceId: a.traceId,
    spanId: a.propagationSpanId,
    sampled: a.sampled,
  };
}
function yv(e, { sentryTrace: t, baggage: n }) {
  let { traceId: r, parentSpanId: i, sampled: a, dsc: o } = kd(t, n),
    s = K(),
    c = dd(n);
  if (!i || (s && !Nd(s, c?.org_id))) return e;
  let l = wv({ traceId: r, spanId: i, sampled: a, dsc: o });
  return Y.trace.setSpanContext(e, l);
}
function bv(e, t, n) {
  let r = xv(yv(e, t));
  return Y.context.with(r, n);
}
function xv(e) {
  let t = Q_(e);
  return $_(e, { scope: t ? t.scope : W().clone(), isolationScope: t ? t.isolationScope : G() });
}
function Sv(e) {
  try {
    let t = e[V_];
    return Array.isArray(t) ? t.join(`,`) : t;
  } catch {
    return;
  }
}
function Cv(e) {
  let t = q(e).data,
    n = t[X.SEMATTRS_HTTP_URL] || t[X.ATTR_URL_FULL];
  if (typeof n == `string`) return n;
  let r = e.spanContext().traceState?.get(W_);
  if (r) return r;
}
function wv({ spanId: e, traceId: t, sampled: n, dsc: r }) {
  let i = fv({ dsc: r, sampled: n });
  return {
    traceId: t,
    spanId: e,
    isRemote: !0,
    traceFlags: n ? Y.TraceFlags.SAMPLED : Y.TraceFlags.NONE,
    traceState: i,
  };
}
function Tv(e, t, n) {
  let r = Av(),
    { name: i, parentSpan: a } = e;
  return Lv(a)(() => {
    let a = Nv(e.scope, e.forceTransaction),
      o = e.onlyIfParent && !Y.trace.getSpan(a) ? Vr(a) : a,
      s = jv(e);
    if (!tf()) {
      let e = Ur(o) ? o : Vr(o);
      return Y.context.with(e, () =>
        r.startActiveSpan(i, s, e, (e) =>
          Y.context.with(a, () =>
            Zf(
              () => t(e),
              () => {
                q(e).status === void 0 && e.setStatus({ code: Y.SpanStatusCode.ERROR });
              },
              n ? () => e.end() : void 0,
            ),
          ),
        ),
      );
    }
    return r.startActiveSpan(i, s, o, (e) =>
      Zf(
        () => t(e),
        () => {
          q(e).status === void 0 && e.setStatus({ code: Y.SpanStatusCode.ERROR });
        },
        n ? () => e.end() : void 0,
      ),
    );
  });
}
function Ev(e, t) {
  return Tv(e, t, !0);
}
function Dv(e, t) {
  return Tv(e, (e) => t(e, () => e.end()), !1);
}
function Ov(e) {
  let t = Av(),
    { name: n, parentSpan: r } = e;
  return Lv(r)(() => {
    let r = Nv(e.scope, e.forceTransaction),
      i = e.onlyIfParent && !Y.trace.getSpan(r) ? Vr(r) : r,
      a = jv(e);
    return (tf() || (i = Ur(i) ? i : Vr(i)), t.startSpan(n, a, i));
  });
}
function kv(e, t) {
  let n = e ? Y.trace.setSpan(Y.context.active(), e) : Y.trace.deleteSpan(Y.context.active());
  return Y.context.with(n, () => t(W()));
}
function Av() {
  return K()?.tracer || Y.trace.getTracer(`@sentry/opentelemetry`, `10.29.0`);
}
function jv(e) {
  let { startTime: t, attributes: n, kind: r, op: i, links: a } = e,
    o = typeof t == `number` ? Mv(t) : t;
  return { attributes: i ? { [Ju]: i, ...n } : n, kind: r, links: a, startTime: o };
}
function Mv(e) {
  return e < 9999999999 ? e * 1e3 : e;
}
function Nv(e, t) {
  let n = Pv(e),
    r = Y.trace.getSpan(n);
  if (!r || !t) return n;
  let i = Y.trace.deleteSpan(n),
    { spanId: a, traceId: o } = r.spanContext(),
    s = nv(r.spanContext()),
    c = fv({ dsc: ff(Xd(r)), sampled: s }),
    l = {
      traceId: o,
      spanId: a,
      isRemote: !0,
      traceFlags: s ? Y.TraceFlags.SAMPLED : Y.TraceFlags.NONE,
      traceState: c,
    };
  return Y.trace.setSpanContext(i, l);
}
function Pv(e) {
  if (e) {
    let t = tv(e);
    if (t) return t;
  }
  return Y.context.active();
}
function Fv(e, t) {
  return bv(Y.context.active(), e, t);
}
function Iv(e, t) {
  let n = tv(t),
    r = n && Y.trace.getSpan(n),
    i = r ? Id(r) : Gu(t);
  return [r ? ff(r) : df(e, t), i];
}
function Lv(e) {
  return e === void 0 ? (e) => e() : (t) => kv(e, t);
}
function Rv(e) {
  let t = Vr(Y.context.active());
  return Y.context.with(t, e);
}
function zv({ span: e, scope: t, client: n } = {}) {
  let r = (t && tv(t)) ?? Y.context.active();
  if (e) {
    let { scope: t } = cd(e);
    r = (t && tv(t)) || Y.trace.setSpan(Y.context.active(), e);
  }
  let { traceId: i, spanId: a, sampled: o, dynamicSamplingContext: s } = vv(r, { scope: t, client: n });
  return { "sentry-trace": Ad(i, a, o), baggage: fd(s) };
}
function Bv() {
  function e() {
    return Q_(Y.context.active()) || { scope: Nu(), isolationScope: Pu() };
  }
  function t(e) {
    let t = Y.context.active();
    return Y.context.with(t, () => e(a()));
  }
  function n(e, t) {
    let n = tv(e) || Y.context.active();
    return Y.context.with(n.setValue(Y_, e), () => t(e));
  }
  function r(e) {
    let t = Y.context.active();
    return Y.context.with(t.setValue(J_, !0), () => e(o()));
  }
  function i(e, t) {
    let n = Y.context.active();
    return Y.context.with(n.setValue(X_, e), () => t(o()));
  }
  function a() {
    return e().scope;
  }
  function o() {
    return e().isolationScope;
  }
  Vu({
    withScope: t,
    withSetScope: n,
    withSetIsolationScope: i,
    withIsolationScope: r,
    getCurrentScope: a,
    getIsolationScope: o,
    startSpan: Ev,
    startSpanManual: Dv,
    startInactiveSpan: Ov,
    getActiveSpan: uv,
    suppressTracing: Rv,
    getTraceData: zv,
    continueTrace: Fv,
    withActiveSpan: kv,
  });
}
function Vv(e) {
  class t extends e {
    constructor(...e) {
      (super(...e), mv(`SentryContextManager`));
    }
    with(e, t, n, ...r) {
      let i = Q_(e),
        a = i?.scope || W(),
        o = i?.isolationScope || G(),
        s = e.getValue(J_) === !0,
        c = e.getValue(Y_),
        l = e.getValue(X_),
        u = c || a.clone(),
        d = $_(e, { scope: u, isolationScope: l || (s ? o.clone() : o) })
          .deleteValue(J_)
          .deleteValue(Y_)
          .deleteValue(X_);
      return (ev(u, d), super.with(d, t, n, ...r));
    }
  }
  return t;
}
function Hv(e) {
  let t = new Map();
  for (let n of e) Wv(t, n);
  return Array.from(t, function ([e, t]) {
    return t;
  });
}
function Uv(e) {
  return e.attributes[j_] === !0 ? void 0 : N_(e);
}
function Wv(e, t) {
  let n = t.spanContext().spanId,
    r = Uv(t);
  if (!r) {
    Kv(e, { id: n, span: t, children: [] });
    return;
  }
  let i = Gv(e, r),
    a = Kv(e, { id: n, span: t, parentNode: i, children: [] });
  i.children.push(a);
}
function Gv(e, t) {
  return e.get(t) || Kv(e, { id: t, children: [] });
}
function Kv(e, t) {
  let n = e.get(t.id);
  return n?.span
    ? n
    : n && !n.span
      ? ((n.span = t.span), (n.parentNode = t.parentNode), n)
      : (e.set(t.id, t), t);
}
var qv = {
    1: `cancelled`,
    2: `unknown_error`,
    3: `invalid_argument`,
    4: `deadline_exceeded`,
    5: `not_found`,
    6: `already_exists`,
    7: `permission_denied`,
    8: `resource_exhausted`,
    9: `failed_precondition`,
    10: `aborted`,
    11: `out_of_range`,
    12: `unimplemented`,
    13: `internal_error`,
    14: `unavailable`,
    15: `data_loss`,
    16: `unauthenticated`,
  },
  Jv = (e) => Object.values(qv).includes(e);
function Yv(e) {
  let t = P_(e) ? e.attributes : {},
    n = I_(e) ? e.status : void 0;
  if (n) {
    if (n.code === Y.SpanStatusCode.OK) return { code: 1 };
    if (n.code === Y.SpanStatusCode.ERROR) {
      if (n.message === void 0) {
        let e = Xv(t);
        if (e) return e;
      }
      return n.message && Jv(n.message)
        ? { code: 2, message: n.message }
        : { code: 2, message: `internal_error` };
    }
  }
  return Xv(t) || (n?.code === Y.SpanStatusCode.UNSET ? { code: 1 } : { code: 2, message: `unknown_error` });
}
function Xv(e) {
  let t = e[X.ATTR_HTTP_RESPONSE_STATUS_CODE] || e[X.SEMATTRS_HTTP_STATUS_CODE],
    n = e[X.SEMATTRS_RPC_GRPC_STATUS_CODE],
    r = typeof t == `number` ? t : typeof t == `string` ? parseInt(t) : void 0;
  if (typeof r == `number`) return td(r);
  if (typeof n == `string`) return { code: 2, message: qv[n] || `unknown_error` };
}
var Zv = 1e3,
  Qv = 300,
  $v = class {
    constructor(e) {
      ((this._finishedSpanBucketSize = e?.timeout || Qv),
        (this._finishedSpanBuckets = Array(this._finishedSpanBucketSize).fill(void 0)),
        (this._lastCleanupTimestampInS = Math.floor(Date.now() / 1e3)),
        (this._spansToBucketEntry = new WeakMap()),
        (this._sentSpans = new Map()),
        (this._debouncedFlush = Fh(this.flush.bind(this), 1, { maxWait: 100 })));
    }
    export(e) {
      let t = Math.floor(Date.now() / 1e3);
      if (this._lastCleanupTimestampInS !== t) {
        let e = 0;
        (this._finishedSpanBuckets.forEach((n, r) => {
          n &&
            n.timestampInS <= t - this._finishedSpanBucketSize &&
            ((e += n.spans.size), (this._finishedSpanBuckets[r] = void 0));
        }),
          e > 0 &&
            dv &&
            H.log(
              `SpanExporter dropped ${e} spans because they were pending for more than ${this._finishedSpanBucketSize} seconds.`,
            ),
          (this._lastCleanupTimestampInS = t));
      }
      let n = t % this._finishedSpanBucketSize,
        r = this._finishedSpanBuckets[n] || { timestampInS: t, spans: new Set() };
      ((this._finishedSpanBuckets[n] = r), r.spans.add(e), this._spansToBucketEntry.set(e, r));
      let i = Uv(e);
      (!i || this._sentSpans.has(i)) && this._debouncedFlush();
    }
    flush() {
      let e = this._finishedSpanBuckets.flatMap((e) => (e ? Array.from(e.spans) : []));
      this._flushSentSpanCache();
      let t = this._maybeSend(e),
        n = t.size,
        r = e.length - n;
      dv &&
        H.log(`SpanExporter exported ${n} spans, ${r} spans are waiting for their parent spans to finish`);
      let i = Date.now() + Qv * 1e3;
      for (let e of t) {
        this._sentSpans.set(e.spanContext().spanId, i);
        let t = this._spansToBucketEntry.get(e);
        t && t.spans.delete(e);
      }
      this._debouncedFlush.cancel();
    }
    clear() {
      ((this._finishedSpanBuckets = this._finishedSpanBuckets.fill(void 0)),
        this._sentSpans.clear(),
        this._debouncedFlush.cancel());
    }
    _maybeSend(e) {
      let t = Hv(e),
        n = new Set(),
        r = this._getCompletedRootNodes(t);
      for (let e of r) {
        let t = e.span;
        n.add(t);
        let r = ty(t);
        if (e.parentNode && this._sentSpans.has(e.parentNode.id)) {
          let e = r.contexts?.trace?.data;
          e && (e[`sentry.parent_span_already_sent`] = !0);
        }
        let i = r.spans || [];
        for (let t of e.children) ny(t, i, n);
        r.spans = i.length > Zv ? i.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, Zv) : i;
        let a = Wf(t.events);
        (a && (r.measurements = a), Up(r));
      }
      return n;
    }
    _flushSentSpanCache() {
      let e = Date.now();
      for (let [t, n] of this._sentSpans.entries()) n <= e && this._sentSpans.delete(t);
    }
    _nodeIsCompletedRootNodeOrHasSentParent(e) {
      return !!e.span && (!e.parentNode || this._sentSpans.has(e.parentNode.id));
    }
    _getCompletedRootNodes(e) {
      return e.filter((e) => this._nodeIsCompletedRootNodeOrHasSentParent(e));
    }
  };
function ey(e) {
  let t = e.attributes;
  return { origin: t[Yu], op: t[Ju], source: t[Ku] };
}
function ty(e) {
  let { op: t, description: n, data: r, origin: i = `manual`, source: a } = ry(e),
    o = cd(e),
    s = e.attributes[qu],
    c = { [Ku]: a, [qu]: s, [Ju]: t, [Yu]: i, ...r, ...iy(e.attributes) },
    { links: l } = e,
    { traceId: u, spanId: d } = e.spanContext(),
    f = {
      parent_span_id: N_(e),
      span_id: d,
      trace_id: u,
      data: c,
      origin: i,
      op: t,
      status: Gd(Yv(e)),
      links: zd(l),
    },
    p = c[X.ATTR_HTTP_RESPONSE_STATUS_CODE],
    m = typeof p == `number` ? { response: { status_code: p } } : void 0;
  return {
    contexts: { trace: f, otel: { resource: e.resource.attributes }, ...m },
    spans: [],
    start_timestamp: Bd(e.startTime),
    timestamp: Bd(e.endTime),
    transaction: n,
    type: `transaction`,
    sdkProcessingMetadata: {
      capturedSpanScope: o.scope,
      capturedSpanIsolationScope: o.isolationScope,
      sampleRate: s,
      dynamicSamplingContext: ff(e),
    },
    ...(a && { transaction_info: { source: a } }),
  };
}
function ny(e, t, n) {
  let r = e.span;
  if ((r && n.add(r), !r)) {
    e.children.forEach((e) => {
      ny(e, t, n);
    });
    return;
  }
  let i = r.spanContext().spanId,
    a = r.spanContext().traceId,
    o = N_(r),
    { attributes: s, startTime: c, endTime: l, links: u } = r,
    { op: d, description: f, data: p, origin: m = `manual` } = ry(r),
    h = { [Yu]: m, [Ju]: d, ...iy(s), ...p },
    g = Yv(r),
    _ = {
      span_id: i,
      trace_id: a,
      data: h,
      description: f,
      parent_span_id: o,
      start_timestamp: Bd(c),
      timestamp: Bd(l) || void 0,
      status: Gd(g),
      op: d,
      origin: m,
      measurements: Wf(r.events),
      links: zd(u),
    };
  (t.push(_),
    e.children.forEach((e) => {
      ny(e, t, n);
    }));
}
function ry(e) {
  let { op: t, source: n, origin: r } = ey(e),
    { op: i, description: a, source: o, data: s } = iv(e);
  return { op: t || i, description: a, source: n || o, origin: r, data: { ...s, ...ay(e) } };
}
function iy(e) {
  let t = { ...e };
  return (delete t[qu], delete t[j_], delete t[Qu], t);
}
function ay(e) {
  let t = e.attributes,
    n = {};
  e.kind !== Y.SpanKind.INTERNAL && (n[`otel.kind`] = Y.SpanKind[e.kind]);
  let r = t[X.SEMATTRS_HTTP_STATUS_CODE];
  r && (n[X.ATTR_HTTP_RESPONSE_STATUS_CODE] = r);
  let i = R_(e);
  return (
    i.url && (n.url = i.url),
    i[`http.query`] && (n[`http.query`] = i[`http.query`].slice(1)),
    i[`http.fragment`] && (n[`http.fragment`] = i[`http.fragment`].slice(1)),
    n
  );
}
function oy(e, t) {
  let n = Y.trace.getSpan(t),
    r = Q_(t);
  (n && !n.spanContext().isRemote && Jd(n, e),
    n?.spanContext().isRemote && e.setAttribute(j_, !0),
    t === Y.ROOT_CONTEXT && (r = { scope: Nu(), isolationScope: Pu() }),
    r && sd(e, r.scope, r.isolationScope),
    Hf(e),
    K()?.emit(`spanStart`, e));
}
function sy(e) {
  (Uf(e), K()?.emit(`spanEnd`, e));
}
var cy = class {
    constructor(e) {
      (mv(`SentrySpanProcessor`), (this._exporter = new $v(e)));
    }
    async forceFlush() {
      this._exporter.flush();
    }
    async shutdown() {
      this._exporter.clear();
    }
    onStart(e, t) {
      oy(e, t);
    }
    onEnd(e) {
      (sy(e), this._exporter.export(e));
    }
  },
  ly = class {
    constructor(e) {
      ((this._client = e), mv(`SentrySampler`));
    }
    shouldSample(e, t, n, r, i, a) {
      let o = this._client.getOptions(),
        s = py(e),
        c = s?.spanContext();
      if (!tf(o)) return dy({ decision: void 0, context: e, spanAttributes: i });
      let l = i[X.SEMATTRS_HTTP_METHOD] || i[X.ATTR_HTTP_REQUEST_METHOD];
      if (r === Y.SpanKind.CLIENT && l && (!s || c?.isRemote))
        return dy({ decision: void 0, context: e, spanAttributes: i });
      let u = s ? uy(s, t, n) : void 0;
      if (s && !c?.isRemote)
        return dy({ decision: u ? c_.RECORD_AND_SAMPLED : c_.NOT_RECORD, context: e, spanAttributes: i });
      let { description: d, data: f, op: p } = rv(n, i, r),
        m = { ...f, ...i };
      p && (m[Ju] = p);
      let h = { decision: !0 };
      if (
        (this._client.emit(
          `beforeSampling`,
          { spanAttributes: m, spanName: d, parentSampled: u, parentContext: c },
          h,
        ),
        !h.decision)
      )
        return dy({ decision: void 0, context: e, spanAttributes: i });
      let { isolationScope: g } = Q_(e) ?? {},
        _ = c?.traceState ? c.traceState.get(H_) : void 0,
        v = _ ? dd(_) : void 0,
        y = Ed(v?.sample_rand) ?? Math.random(),
        [b, x, S] = $f(
          o,
          {
            name: d,
            attributes: m,
            normalizedRequest: g?.getScopeData().sdkProcessingMetadata.normalizedRequest,
            parentSampled: u,
            parentSampleRate: Ed(v?.sample_rate),
          },
          y,
        ),
        C = `${l}`.toUpperCase();
      return C === `OPTIONS` || C === `HEAD`
        ? (dv && H.log(`[Tracing] Not sampling span because HTTP method is '${C}' for ${n}`),
          dy({
            decision: c_.NOT_RECORD,
            context: e,
            spanAttributes: i,
            sampleRand: y,
            downstreamTraceSampleRate: 0,
          }))
        : (!b &&
            u === void 0 &&
            (dv && H.log(`[Tracing] Discarding root span because its trace was not chosen to be sampled.`),
            this._client.recordDroppedEvent(`sample_rate`, `transaction`)),
          {
            ...dy({
              decision: b ? c_.RECORD_AND_SAMPLED : c_.NOT_RECORD,
              context: e,
              spanAttributes: i,
              sampleRand: y,
              downstreamTraceSampleRate: S ? x : void 0,
            }),
            attributes: { [qu]: S ? x : void 0 },
          });
    }
    toString() {
      return `SentrySampler`;
    }
  };
function uy(e, t, n) {
  let r = e.spanContext();
  if ((0, Y.isSpanContextValid)(r) && r.traceId === t) {
    if (r.isRemote) {
      let t = nv(e.spanContext());
      return (dv && H.log(`[Tracing] Inheriting remote parent's sampled decision for ${n}: ${t}`), t);
    }
    let t = nv(r);
    return (dv && H.log(`[Tracing] Inheriting parent's sampled decision for ${n}: ${t}`), t);
  }
}
function dy({ decision: e, context: t, spanAttributes: n, sampleRand: r, downstreamTraceSampleRate: i }) {
  let a = fy(t, n);
  return (
    i !== void 0 && (a = a.set(K_, `${i}`)),
    r !== void 0 && (a = a.set(G_, `${r}`)),
    e == null
      ? { decision: c_.NOT_RECORD, traceState: a }
      : e === c_.NOT_RECORD
        ? { decision: e, traceState: a.set(U_, `1`) }
        : { decision: e, traceState: a }
  );
}
function fy(e, t) {
  let n = Y.trace.getSpan(e)?.spanContext()?.traceState || new Aa(),
    r = t[X.SEMATTRS_HTTP_URL] || t[X.ATTR_URL_FULL];
  return (r && typeof r == `string` && (n = n.set(W_, r)), n);
}
function py(e) {
  let t = Y.trace.getSpan(e);
  return t && (0, Y.isSpanContextValid)(t.spanContext()) ? t : void 0;
}
function my(e, t) {
  if (!e) return t;
  let n = pd(e),
    r = pd(t);
  if (!r) return e;
  let i = { ...n };
  return (
    Object.entries(r).forEach(([e, t]) => {
      i[e] || (i[e] = t);
    }),
    hd(i)
  );
}
var hy = pu(process.versions.node),
  gy = hy.major,
  _y = hy.minor;
(L(), Hc());
var vy = `sentry-trace`,
  yy = `baggage`,
  by = /baggage: (.*)\r\n/,
  xy = class extends Ac {
    constructor(e = {}) {
      (super(`@sentry/instrumentation-node-fetch`, Uc, e),
        (this._channelSubs = []),
        (this._propagationDecisionMap = new Mg(100)),
        (this._ignoreOutgoingRequestsMap = new WeakMap()));
    }
    init() {}
    disable() {
      (super.disable(), this._channelSubs.forEach((e) => e.unsubscribe()), (this._channelSubs = []));
    }
    enable() {
      (super.enable(),
        (this._channelSubs = this._channelSubs || []),
        !(this._channelSubs.length > 0) &&
          (this._subscribeToChannel(`undici:request:create`, this._onRequestCreated.bind(this)),
          this._subscribeToChannel(`undici:request:headers`, this._onResponseHeaders.bind(this))));
    }
    _onRequestCreated({ request: e }) {
      if (this.getConfig().enabled === !1) return;
      let t = this._shouldIgnoreOutgoingRequest(e);
      if ((this._ignoreOutgoingRequestsMap.set(e, t), t)) return;
      let n = wy(e.origin, e.path),
        r = K()?.getOptions().tracePropagationTargets,
        i = _v(n, r, this._propagationDecisionMap) ? Mh() : void 0;
      if (!i) return;
      let { "sentry-trace": a, baggage: o } = i;
      if (Array.isArray(e.headers)) {
        let t = e.headers;
        a && !t.includes(vy) && t.push(vy, a);
        let n = t.findIndex((e) => e === yy);
        if (o && n === -1) t.push(yy, o);
        else if (o) {
          let e = t[n + 1],
            r = my(e, o);
          r && (t[n + 1] = r);
        }
      } else {
        let t = e.headers;
        a && !t.includes(`${vy}:`) && (e.headers += `${vy}: ${a}\r\n`);
        let n = e.headers.match(by)?.[1];
        if (o && !n) e.headers += `${yy}: ${o}\r\n`;
        else if (o) {
          let t = my(n, o);
          t && (e.headers = e.headers.replace(by, `baggage: ${t}\r\n`));
        }
      }
    }
    _onResponseHeaders({ request: e, response: t }) {
      let n = this.getConfig();
      if (n.enabled === !1) return;
      let r = n.breadcrumbs,
        i = r === void 0 || r,
        a = this._ignoreOutgoingRequestsMap.get(e);
      i && !a && Sy(e, t);
    }
    _subscribeToChannel(e, t) {
      let n = gy > 18 || (gy === 18 && _y >= 19),
        r;
      if (n) (A.subscribe?.(e, t), (r = () => A.unsubscribe?.(e, t)));
      else {
        let n = A.channel(e);
        (n.subscribe(t), (r = () => n.unsubscribe(t)));
      }
      this._channelSubs.push({ name: e, unsubscribe: r });
    }
    _shouldIgnoreOutgoingRequest(e) {
      if (Ur(Y.context.active())) return !0;
      let t = wy(e.origin, e.path),
        n = this.getConfig().ignoreOutgoingRequests;
      return typeof n != `function` || !t ? !1 : n(t);
    }
  };
function Sy(e, t) {
  let n = Cy(e),
    r = t.statusCode,
    i = Eg(r);
  Lh(
    { category: `http`, data: { status_code: r, ...n }, type: `http`, level: i },
    { event: `response`, request: e, response: t },
  );
}
function Cy(e) {
  try {
    let t = Th(wy(e.origin, e.path)),
      n = { url: Dh(t), "http.method": e.method || `GET` };
    return (t.search && (n[`http.query`] = t.search), t.hash && (n[`http.fragment`] = t.hash), n);
  } catch {
    return {};
  }
}
function wy(e, t = `/`) {
  try {
    return new URL(t, e).toString();
  } catch {
    let n = `${e}`;
    return n.endsWith(`/`) && t.startsWith(`/`)
      ? `${n}${t.slice(1)}`
      : !n.endsWith(`/`) && !t.startsWith(`/`)
        ? `${n}/${t.slice(1)}`
        : `${n}${t}`;
  }
}
var Ty = (0, m.promisify)(h.readFile),
  Ey = (0, m.promisify)(h.readdir),
  Dy = `Context`,
  Oy = J((e = {}) => {
    let t,
      n = { app: !0, os: !0, device: !0, culture: !0, cloudResource: !0, ...e };
    async function r(e) {
      t === void 0 && (t = i());
      let n = ky(await t);
      return (
        (e.contexts = {
          ...e.contexts,
          app: { ...n.app, ...e.contexts?.app },
          os: { ...n.os, ...e.contexts?.os },
          device: { ...n.device, ...e.contexts?.device },
          culture: { ...n.culture, ...e.contexts?.culture },
          cloud_resource: { ...n.cloud_resource, ...e.contexts?.cloud_resource },
        }),
        e
      );
    }
    async function i() {
      let e = {};
      if (
        (n.os && (e.os = await Ay()),
        n.app && (e.app = My()),
        n.device && (e.device = Ny(n.device)),
        n.culture)
      ) {
        let t = jy();
        t && (e.culture = t);
      }
      return (n.cloudResource && (e.cloud_resource = Vy()), e);
    }
    return {
      name: Dy,
      processEvent(e) {
        return r(e);
      },
    };
  });
function ky(e) {
  if (
    (e.app?.app_memory && (e.app.app_memory = process.memoryUsage().rss),
    e.app?.free_memory && typeof process.availableMemory == `function`)
  ) {
    let t = process.availableMemory?.();
    t != null && (e.app.free_memory = t);
  }
  return (e.device?.free_memory && (e.device.free_memory = _.freemem()), e);
}
async function Ay() {
  let e = _.platform();
  switch (e) {
    case `darwin`:
      return Ry();
    case `linux`:
      return By();
    default:
      return { name: Py[e] || e, version: _.release() };
  }
}
function jy() {
  try {
    if (typeof process.versions.icu != `string`) return;
    let e = new Date(9e8);
    if (new Intl.DateTimeFormat(`es`, { month: `long` }).format(e) === `enero`) {
      let e = Intl.DateTimeFormat().resolvedOptions();
      return { locale: e.locale, timezone: e.timeZone };
    }
  } catch {}
}
function My() {
  let e = process.memoryUsage().rss,
    t = { app_start_time: new Date(Date.now() - process.uptime() * 1e3).toISOString(), app_memory: e };
  if (typeof process.availableMemory == `function`) {
    let e = process.availableMemory?.();
    e != null && (t.free_memory = e);
  }
  return t;
}
function Ny(e) {
  let t = {},
    n;
  try {
    n = _.uptime();
  } catch {}
  if (
    (typeof n == `number` && (t.boot_time = new Date(Date.now() - n * 1e3).toISOString()),
    (t.arch = _.arch()),
    (e === !0 || e.memory) && ((t.memory_size = _.totalmem()), (t.free_memory = _.freemem())),
    e === !0 || e.cpu)
  ) {
    let e = _.cpus(),
      n = e?.[0];
    n && ((t.processor_count = e.length), (t.cpu_description = n.model), (t.processor_frequency = n.speed));
  }
  return t;
}
var Py = {
    aix: `IBM AIX`,
    freebsd: `FreeBSD`,
    openbsd: `OpenBSD`,
    sunos: `SunOS`,
    win32: `Windows`,
    ohos: `OpenHarmony`,
    android: `Android`,
  },
  Fy = [
    { name: `fedora-release`, distros: [`Fedora`] },
    { name: `redhat-release`, distros: [`Red Hat Linux`, `Centos`] },
    { name: `redhat_version`, distros: [`Red Hat Linux`] },
    { name: `SuSE-release`, distros: [`SUSE Linux`] },
    { name: `lsb-release`, distros: [`Ubuntu Linux`, `Arch Linux`] },
    { name: `debian_version`, distros: [`Debian`] },
    { name: `debian_release`, distros: [`Debian`] },
    { name: `arch-release`, distros: [`Arch Linux`] },
    { name: `gentoo-release`, distros: [`Gentoo Linux`] },
    { name: `novell-release`, distros: [`SUSE Linux`] },
    { name: `alpine-release`, distros: [`Alpine Linux`] },
  ],
  Iy = {
    alpine: (e) => e,
    arch: (e) => Ly(/distrib_release=(.*)/, e),
    centos: (e) => Ly(/release ([^ ]+)/, e),
    debian: (e) => e,
    fedora: (e) => Ly(/release (..)/, e),
    mint: (e) => Ly(/distrib_release=(.*)/, e),
    red: (e) => Ly(/release ([^ ]+)/, e),
    suse: (e) => Ly(/VERSION = (.*)\n/, e),
    ubuntu: (e) => Ly(/distrib_release=(.*)/, e),
  };
function Ly(e, t) {
  let n = e.exec(t);
  return n ? n[1] : void 0;
}
async function Ry() {
  let e = {
    kernel_version: _.release(),
    name: `Mac OS X`,
    version: `10.${Number(_.release().split(`.`)[0]) - 4}`,
  };
  try {
    let t = await new Promise((e, t) => {
      (0, S.execFile)(`/usr/bin/sw_vers`, (n, r) => {
        if (n) {
          t(n);
          return;
        }
        e(r);
      });
    });
    ((e.name = Ly(/^ProductName:\s+(.*)$/m, t)),
      (e.version = Ly(/^ProductVersion:\s+(.*)$/m, t)),
      (e.build = Ly(/^BuildVersion:\s+(.*)$/m, t)));
  } catch {}
  return e;
}
function zy(e) {
  return e.split(` `)[0].toLowerCase();
}
async function By() {
  let e = { kernel_version: _.release(), name: `Linux` };
  try {
    let t = await Ey(`/etc`),
      n = Fy.find((e) => t.includes(e.name));
    if (!n) return e;
    let r = (await Ty((0, g.join)(`/etc`, n.name), { encoding: `utf-8` })).toLowerCase(),
      { distros: i } = n;
    ((e.name = i.find((e) => r.indexOf(zy(e)) >= 0) || i[0]), (e.version = Iy[zy(e.name)]?.(r)));
  } catch {}
  return e;
}
function Vy() {
  if (process.env.VERCEL) return { "cloud.provider": `vercel`, "cloud.region": process.env.VERCEL_REGION };
  if (process.env.AWS_REGION)
    return {
      "cloud.provider": `aws`,
      "cloud.region": process.env.AWS_REGION,
      "cloud.platform": process.env.AWS_EXECUTION_ENV,
    };
  if (process.env.GCP_PROJECT) return { "cloud.provider": `gcp` };
  if (process.env.ALIYUN_REGION_ID)
    return { "cloud.provider": `alibaba_cloud`, "cloud.region": process.env.ALIYUN_REGION_ID };
  if (process.env.WEBSITE_SITE_NAME && process.env.REGION_NAME)
    return { "cloud.provider": `azure`, "cloud.region": process.env.REGION_NAME };
  if (process.env.IBM_CLOUD_REGION)
    return { "cloud.provider": `ibm_cloud`, "cloud.region": process.env.IBM_CLOUD_REGION };
  if (process.env.TENCENTCLOUD_REGION)
    return {
      "cloud.provider": `tencent_cloud`,
      "cloud.region": process.env.TENCENTCLOUD_REGION,
      "cloud.account.id": process.env.TENCENTCLOUD_APPID,
      "cloud.availability_zone": process.env.TENCENTCLOUD_ZONE,
    };
  if (process.env.NETLIFY) return { "cloud.provider": `netlify` };
  if (process.env.FLY_REGION) return { "cloud.provider": `fly.io`, "cloud.region": process.env.FLY_REGION };
  if (process.env.DYNO) return { "cloud.provider": `heroku` };
}
var Hy = new Mg(10),
  Uy = new Mg(20),
  Wy = 7,
  Gy = `ContextLines`;
function Ky(e, t, n) {
  let r = e.get(t);
  return r === void 0 ? (e.set(t, n), n) : r;
}
function qy(e) {
  return !!(
    e.startsWith(`node:`) ||
    e.endsWith(`.min.js`) ||
    e.endsWith(`.min.cjs`) ||
    e.endsWith(`.min.mjs`) ||
    e.startsWith(`data:`)
  );
}
function Jy(e) {
  return (e.lineno !== void 0 && e.lineno > 1e4) || (e.colno !== void 0 && e.colno > 1e3);
}
function Yy(e, t) {
  let n = Hy.get(e);
  if (n === void 0) return !1;
  for (let e = t[0]; e <= t[1]; e++) if (n[e] === void 0) return !1;
  return !0;
}
function Xy(e, t) {
  if (!e.length) return [];
  let n = 0,
    r = e[0];
  if (typeof r != `number`) return [];
  let i = ib(r, t),
    a = [];
  for (;;) {
    if (n === e.length - 1) {
      a.push(i);
      break;
    }
    let r = e[n + 1];
    if (typeof r != `number`) break;
    (r <= i[1] ? (i[1] = r + t) : (a.push(i), (i = ib(r, t))), n++);
  }
  return a;
}
function Zy(e, t, n) {
  return new Promise((r, i) => {
    let a = (0, h.createReadStream)(e),
      o = (0, te.createInterface)({ input: a });
    function s() {
      (a.destroy(), r());
    }
    let c = 0,
      l = 0,
      u = t[l];
    if (u === void 0) {
      s();
      return;
    }
    let d = u[0],
      f = u[1];
    function p(t) {
      (Uy.set(e, 1),
        Vg && H.error(`Failed to read file: ${e}. Error: ${t}`),
        o.close(),
        o.removeAllListeners(),
        s());
    }
    (a.on(`error`, p),
      o.on(`error`, p),
      o.on(`close`, s),
      o.on(`line`, (e) => {
        if ((c++, !(c < d) && ((n[c] = eu(e, 0)), c >= f))) {
          if (l === t.length - 1) {
            (o.close(), o.removeAllListeners());
            return;
          }
          l++;
          let e = t[l];
          if (e === void 0) {
            (o.close(), o.removeAllListeners());
            return;
          }
          ((d = e[0]), (f = e[1]));
        }
      }));
  });
}
async function Qy(e, t) {
  let n = {};
  if (t > 0 && e.exception?.values) {
    for (let t of e.exception.values)
      if (t.stacktrace?.frames?.length)
        for (let e = t.stacktrace.frames.length - 1; e >= 0; e--) {
          let r = t.stacktrace.frames[e],
            i = r?.filename;
          !r ||
            typeof i != `string` ||
            typeof r.lineno != `number` ||
            qy(i) ||
            Jy(r) ||
            (n[i] || (n[i] = []), n[i].push(r.lineno));
        }
  }
  let r = Object.keys(n);
  if (r.length == 0) return e;
  let i = [];
  for (let e of r) {
    if (Uy.get(e)) continue;
    let r = n[e];
    if (!r) continue;
    r.sort((e, t) => e - t);
    let a = Xy(r, t);
    if (a.every((t) => Yy(e, t))) continue;
    let o = Ky(Hy, e, {});
    i.push(Zy(e, a, o));
  }
  if (
    (await Promise.all(i).catch(() => {
      Vg && H.log(`Failed to read one or more source files and resolve context lines`);
    }),
    t > 0 && e.exception?.values)
  )
    for (let n of e.exception.values)
      n.stacktrace?.frames && n.stacktrace.frames.length > 0 && $y(n.stacktrace.frames, t, Hy);
  return e;
}
function $y(e, t, n) {
  for (let r of e)
    if (r.filename && r.context_line === void 0 && typeof r.lineno == `number`) {
      let e = n.get(r.filename);
      if (e === void 0) continue;
      tb(r.lineno, r, t, e);
    }
}
function eb(e) {
  (delete e.pre_context, delete e.context_line, delete e.post_context);
}
function tb(e, t, n, r) {
  if (t.lineno === void 0 || r === void 0) {
    Vg && H.error(`Cannot resolve context for frame with no lineno or file contents`);
    return;
  }
  t.pre_context = [];
  for (let i = nb(e, n); i < e; i++) {
    let e = r[i];
    if (e === void 0) {
      (eb(t), Vg && H.error(`Could not find line ${i} in file ${t.filename}`));
      return;
    }
    t.pre_context.push(e);
  }
  if (r[e] === void 0) {
    (eb(t), Vg && H.error(`Could not find line ${e} in file ${t.filename}`));
    return;
  }
  t.context_line = r[e];
  let i = rb(e, n);
  t.post_context = [];
  for (let n = e + 1; n <= i; n++) {
    let e = r[n];
    if (e === void 0) break;
    t.post_context.push(e);
  }
}
function nb(e, t) {
  return Math.max(1, e - t);
}
function rb(e, t) {
  return e + t;
}
function ib(e, t) {
  return [nb(e, t), rb(e, t)];
}
var ab = J((e = {}) => {
    let t = e.frameContextLines === void 0 ? Wy : e.frameContextLines;
    return {
      name: Gy,
      processEvent(e) {
        return Qy(e, t);
      },
    };
  }),
  ob;
async function sb() {
  if (ob === void 0)
    try {
      ob = !!(await import(`node:inspector`)).url();
    } catch {
      ob = !1;
    }
  return ob;
}
var cb = `__SENTRY_ERROR_LOCAL_VARIABLES__`;
function lb(e, t, n) {
  let r = 0,
    i = 5,
    a = 0;
  return (
    setInterval(() => {
      (a === 0 ? r > e && ((i *= 2), n(i), i > 86400 && (i = 86400), (a = i)) : (--a, a === 0 && t()),
        (r = 0));
    }, 1e3).unref(),
    () => {
      r += 1;
    }
  );
}
function ub(e) {
  return e !== void 0 && (e.length === 0 || e === `?` || e === `<anonymous>`);
}
function db(e, t) {
  return e === t || `Object.${e}` === t || e === `Object.${t}` || (ub(e) && ub(t));
}
var fb = `LyohIEBzZW50cnkvbm9kZS1jb3JlIDEwLjI5LjAgKDM1MjlkNDYpIHwgaHR0cHM6Ly9naXRodWIuY29tL2dldHNlbnRyeS9zZW50cnktamF2YXNjcmlwdCAqLwppbXBvcnR7U2Vzc2lvbiBhcyBlfWZyb20ibm9kZTppbnNwZWN0b3IvcHJvbWlzZXMiO2ltcG9ydHt3b3JrZXJEYXRhIGFzIHR9ZnJvbSJub2RlOndvcmtlcl90aHJlYWRzIjtjb25zdCBuPWdsb2JhbFRoaXMsaT17fTtjb25zdCBvPSJfX1NFTlRSWV9FUlJPUl9MT0NBTF9WQVJJQUJMRVNfXyI7Y29uc3QgYT10O2Z1bmN0aW9uIHMoLi4uZSl7YS5kZWJ1ZyYmZnVuY3Rpb24oZSl7aWYoISgiY29uc29sZSJpbiBuKSlyZXR1cm4gZSgpO2NvbnN0IHQ9bi5jb25zb2xlLG89e30sYT1PYmplY3Qua2V5cyhpKTthLmZvckVhY2goZT0+e2NvbnN0IG49aVtlXTtvW2VdPXRbZV0sdFtlXT1ufSk7dHJ5e3JldHVybiBlKCl9ZmluYWxseXthLmZvckVhY2goZT0+e3RbZV09b1tlXX0pfX0oKCk9PmNvbnNvbGUubG9nKCJbTG9jYWxWYXJpYWJsZXMgV29ya2VyXSIsLi4uZSkpfWFzeW5jIGZ1bmN0aW9uIGMoZSx0LG4saSl7Y29uc3Qgbz1hd2FpdCBlLnBvc3QoIlJ1bnRpbWUuZ2V0UHJvcGVydGllcyIse29iamVjdElkOnQsb3duUHJvcGVydGllczohMH0pO2lbbl09by5yZXN1bHQuZmlsdGVyKGU9PiJsZW5ndGgiIT09ZS5uYW1lJiYhaXNOYU4ocGFyc2VJbnQoZS5uYW1lLDEwKSkpLnNvcnQoKGUsdCk9PnBhcnNlSW50KGUubmFtZSwxMCktcGFyc2VJbnQodC5uYW1lLDEwKSkubWFwKGU9PmUudmFsdWU/LnZhbHVlKX1hc3luYyBmdW5jdGlvbiByKGUsdCxuLGkpe2NvbnN0IG89YXdhaXQgZS5wb3N0KCJSdW50aW1lLmdldFByb3BlcnRpZXMiLHtvYmplY3RJZDp0LG93blByb3BlcnRpZXM6ITB9KTtpW25dPW8ucmVzdWx0Lm1hcChlPT5bZS5uYW1lLGUudmFsdWU/LnZhbHVlXSkucmVkdWNlKChlLFt0LG5dKT0+KGVbdF09bixlKSx7fSl9ZnVuY3Rpb24gdShlLHQpe2UudmFsdWUmJigidmFsdWUiaW4gZS52YWx1ZT92b2lkIDA9PT1lLnZhbHVlLnZhbHVlfHxudWxsPT09ZS52YWx1ZS52YWx1ZT90W2UubmFtZV09YDwke2UudmFsdWUudmFsdWV9PmA6dFtlLm5hbWVdPWUudmFsdWUudmFsdWU6ImRlc2NyaXB0aW9uImluIGUudmFsdWUmJiJmdW5jdGlvbiIhPT1lLnZhbHVlLnR5cGU/dFtlLm5hbWVdPWA8JHtlLnZhbHVlLmRlc2NyaXB0aW9ufT5gOiJ1bmRlZmluZWQiPT09ZS52YWx1ZS50eXBlJiYodFtlLm5hbWVdPSI8dW5kZWZpbmVkPiIpKX1hc3luYyBmdW5jdGlvbiBsKGUsdCl7Y29uc3Qgbj1hd2FpdCBlLnBvc3QoIlJ1bnRpbWUuZ2V0UHJvcGVydGllcyIse29iamVjdElkOnQsb3duUHJvcGVydGllczohMH0pLGk9e307Zm9yKGNvbnN0IHQgb2Ygbi5yZXN1bHQpaWYodC52YWx1ZT8ub2JqZWN0SWQmJiJBcnJheSI9PT10LnZhbHVlLmNsYXNzTmFtZSl7Y29uc3Qgbj10LnZhbHVlLm9iamVjdElkO2F3YWl0IGMoZSxuLHQubmFtZSxpKX1lbHNlIGlmKHQudmFsdWU/Lm9iamVjdElkJiYiT2JqZWN0Ij09PXQudmFsdWUuY2xhc3NOYW1lKXtjb25zdCBuPXQudmFsdWUub2JqZWN0SWQ7YXdhaXQgcihlLG4sdC5uYW1lLGkpfWVsc2UgdC52YWx1ZSYmdSh0LGkpO3JldHVybiBpfWxldCBmOyhhc3luYyBmdW5jdGlvbigpe2NvbnN0IHQ9bmV3IGU7dC5jb25uZWN0VG9NYWluVGhyZWFkKCkscygiQ29ubmVjdGVkIHRvIG1haW4gdGhyZWFkIik7bGV0IG49ITE7dC5vbigiRGVidWdnZXIucmVzdW1lZCIsKCk9PntuPSExfSksdC5vbigiRGVidWdnZXIucGF1c2VkIixlPT57bj0hMCxhc3luYyBmdW5jdGlvbihlLHtyZWFzb246dCxkYXRhOntvYmplY3RJZDpufSxjYWxsRnJhbWVzOml9KXtpZigiZXhjZXB0aW9uIiE9PXQmJiJwcm9taXNlUmVqZWN0aW9uIiE9PXQpcmV0dXJuO2lmKGY/LigpLG51bGw9PW4pcmV0dXJuO2NvbnN0IGE9W107Zm9yKGxldCB0PTA7dDxpLmxlbmd0aDt0Kyspe2NvbnN0e3Njb3BlQ2hhaW46bixmdW5jdGlvbk5hbWU6byx0aGlzOnN9PWlbdF0sYz1uLmZpbmQoZT0+ImxvY2FsIj09PWUudHlwZSkscj0iZ2xvYmFsIiE9PXMuY2xhc3NOYW1lJiZzLmNsYXNzTmFtZT9gJHtzLmNsYXNzTmFtZX0uJHtvfWA6bztpZih2b2lkIDA9PT1jPy5vYmplY3Qub2JqZWN0SWQpYVt0XT17ZnVuY3Rpb246cn07ZWxzZXtjb25zdCBuPWF3YWl0IGwoZSxjLm9iamVjdC5vYmplY3RJZCk7YVt0XT17ZnVuY3Rpb246cix2YXJzOm59fX1hd2FpdCBlLnBvc3QoIlJ1bnRpbWUuY2FsbEZ1bmN0aW9uT24iLHtmdW5jdGlvbkRlY2xhcmF0aW9uOmBmdW5jdGlvbigpIHsgdGhpcy4ke299ID0gdGhpcy4ke299IHx8ICR7SlNPTi5zdHJpbmdpZnkoYSl9OyB9YCxzaWxlbnQ6ITAsb2JqZWN0SWQ6bn0pLGF3YWl0IGUucG9zdCgiUnVudGltZS5yZWxlYXNlT2JqZWN0Iix7b2JqZWN0SWQ6bn0pfSh0LGUucGFyYW1zKS50aGVuKGFzeW5jKCk9PntuJiZhd2FpdCB0LnBvc3QoIkRlYnVnZ2VyLnJlc3VtZSIpfSxhc3luYyBlPT57biYmYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5yZXN1bWUiKX0pfSksYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5lbmFibGUiKTtjb25zdCBpPSExIT09YS5jYXB0dXJlQWxsRXhjZXB0aW9ucztpZihhd2FpdCB0LnBvc3QoIkRlYnVnZ2VyLnNldFBhdXNlT25FeGNlcHRpb25zIix7c3RhdGU6aT8iYWxsIjoidW5jYXVnaHQifSksaSl7Y29uc3QgZT1hLm1heEV4Y2VwdGlvbnNQZXJTZWNvbmR8fDUwO2Y9ZnVuY3Rpb24oZSx0LG4pe2xldCBpPTAsbz01LGE9MDtyZXR1cm4gc2V0SW50ZXJ2YWwoKCk9PnswPT09YT9pPmUmJihvKj0yLG4obyksbz44NjQwMCYmKG89ODY0MDApLGE9byk6KGEtPTEsMD09PWEmJnQoKSksaT0wfSwxZTMpLnVucmVmKCksKCk9PntpKz0xfX0oZSxhc3luYygpPT57cygiUmF0ZS1saW1pdCBsaWZ0ZWQuIiksYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5zZXRQYXVzZU9uRXhjZXB0aW9ucyIse3N0YXRlOiJhbGwifSl9LGFzeW5jIGU9PntzKGBSYXRlLWxpbWl0IGV4Y2VlZGVkLiBEaXNhYmxpbmcgY2FwdHVyaW5nIG9mIGNhdWdodCBleGNlcHRpb25zIGZvciAke2V9IHNlY29uZHMuYCksYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5zZXRQYXVzZU9uRXhjZXB0aW9ucyIse3N0YXRlOiJ1bmNhdWdodCJ9KX0pfX0pKCkuY2F0Y2goZT0+e3MoIkZhaWxlZCB0byBzdGFydCBkZWJ1Z2dlciIsZSl9KSxzZXRJbnRlcnZhbCgoKT0+e30sMWU0KTs=`;
function pb(...e) {
  H.log(`[LocalVariables]`, ...e);
}
var mb = J((e = {}) => {
  function t(t, n) {
    let r = (t.stacktrace?.frames || []).filter((e) => e.function !== `new Promise`);
    for (let t = 0; t < r.length; t++) {
      let i = r.length - t - 1,
        a = n[t],
        o = r[i];
      if (!o || !a) break;
      a.vars === void 0 ||
        (o.in_app === !1 && e.includeOutOfAppFrames !== !0) ||
        !db(o.function, a.function) ||
        (o.vars = a.vars);
    }
  }
  function n(e, n) {
    if (
      n.originalException &&
      typeof n.originalException == `object` &&
      `__SENTRY_ERROR_LOCAL_VARIABLES__` in n.originalException &&
      Array.isArray(n.originalException.__SENTRY_ERROR_LOCAL_VARIABLES__)
    ) {
      for (let r of e.exception?.values || []) t(r, n.originalException[cb]);
      n.originalException[cb] = void 0;
    }
    return e;
  }
  async function r() {
    let e = await import(`node:inspector`);
    e.url() || e.open(0);
  }
  function i(e) {
    let t = new v.Worker(new URL(`data:application/javascript;base64,${fb}`), {
      workerData: e,
      execArgv: [],
      env: { ...process.env, NODE_OPTIONS: void 0 },
    });
    (process.on(`exit`, () => {
      t.terminate();
    }),
      t.once(`error`, (e) => {
        pb(`Worker error`, e);
      }),
      t.once(`exit`, (e) => {
        pb(`Worker exit`, e);
      }),
      t.unref());
  }
  return {
    name: `LocalVariablesAsync`,
    async setup(t) {
      if (!t.getOptions().includeLocalVariables) return;
      if (await sb()) {
        H.warn(`Local variables capture has been disabled because the debugger was already enabled`);
        return;
      }
      let n = { ...e, debug: H.isEnabled() };
      r().then(
        () => {
          try {
            i(n);
          } catch (e) {
            H.error(`Failed to start worker`, e);
          }
        },
        (e) => {
          H.error(`Failed to start inspector`, e);
        },
      );
    },
    processEvent(e, t) {
      return n(e, t);
    },
  };
});
function hb(e) {
  if (e !== void 0) return e.slice(-10).reduce((e, t) => `${e},${t.function},${t.lineno},${t.colno}`, ``);
}
function gb(e, t) {
  if (t !== void 0) return hb(e(t, 1));
}
function _b(e) {
  let t = [],
    n = !1;
  function r(r) {
    ((t = []), !n && ((n = !0), e(r)));
  }
  t.push(r);
  function i(e) {
    t.push(e);
  }
  function a(e) {
    let n = t.pop() || r;
    try {
      n(e);
    } catch {
      r(e);
    }
  }
  return { add: i, next: a };
}
var vb = class e {
    constructor(e) {
      this._session = e;
    }
    static async create(t) {
      if (t) return t;
      let n = await import(`node:inspector`);
      return new e(new n.Session());
    }
    configureAndConnect(e, t) {
      (this._session.connect(),
        this._session.on(`Debugger.paused`, (t) => {
          e(t, () => {
            this._session.post(`Debugger.resume`);
          });
        }),
        this._session.post(`Debugger.enable`),
        this._session.post(`Debugger.setPauseOnExceptions`, { state: t ? `all` : `uncaught` }));
    }
    setPauseOnExceptions(e) {
      this._session.post(`Debugger.setPauseOnExceptions`, { state: e ? `all` : `uncaught` });
    }
    getLocalVariables(e, t) {
      this._getProperties(e, (e) => {
        let { add: n, next: r } = _b(t);
        for (let t of e)
          if (t.value?.objectId && t.value.className === `Array`) {
            let e = t.value.objectId;
            n((n) => this._unrollArray(e, t.name, n, r));
          } else if (t.value?.objectId && t.value.className === `Object`) {
            let e = t.value.objectId;
            n((n) => this._unrollObject(e, t.name, n, r));
          } else t.value && n((e) => this._unrollOther(t, e, r));
        r({});
      });
    }
    _getProperties(e, t) {
      this._session.post(`Runtime.getProperties`, { objectId: e, ownProperties: !0 }, (e, n) => {
        t(e ? [] : n.result);
      });
    }
    _unrollArray(e, t, n, r) {
      this._getProperties(e, (e) => {
        ((n[t] = e
          .filter((e) => e.name !== `length` && !isNaN(parseInt(e.name, 10)))
          .sort((e, t) => parseInt(e.name, 10) - parseInt(t.name, 10))
          .map((e) => e.value?.value)),
          r(n));
      });
    }
    _unrollObject(e, t, n, r) {
      this._getProperties(e, (e) => {
        ((n[t] = e.map((e) => [e.name, e.value?.value]).reduce((e, [t, n]) => ((e[t] = n), e), {})), r(n));
      });
    }
    _unrollOther(e, t, n) {
      (e.value &&
        (`value` in e.value
          ? e.value.value === void 0 || e.value.value === null
            ? (t[e.name] = `<${e.value.value}>`)
            : (t[e.name] = e.value.value)
          : `description` in e.value && e.value.type !== `function`
            ? (t[e.name] = `<${e.value.description}>`)
            : e.value.type === `undefined` && (t[e.name] = `<undefined>`)),
        n(t));
    }
  },
  yb = `LocalVariables`,
  bb = J((e = {}, t) => {
    let n = new Mg(20),
      r,
      i = !1;
    function a(t) {
      let r = hb(t.stacktrace?.frames);
      if (r === void 0) return;
      let i = n.remove(r);
      if (i === void 0) return;
      let a = (t.stacktrace?.frames || []).filter((e) => e.function !== `new Promise`);
      for (let t = 0; t < a.length; t++) {
        let n = a.length - t - 1,
          r = i[t],
          o = a[n];
        if (!o || !r) break;
        r.vars === void 0 ||
          (o.in_app === !1 && e.includeOutOfAppFrames !== !0) ||
          !db(o.function, r.function) ||
          (o.vars = r.vars);
      }
    }
    function o(e) {
      for (let t of e.exception?.values || []) a(t);
      return e;
    }
    let s;
    async function c() {
      let a = K()?.getOptions();
      if (a?.includeLocalVariables) {
        if (gy < 18) {
          H.log("The `LocalVariables` integration is only supported on Node >= v18.");
          return;
        }
        if (await sb()) {
          H.warn(`Local variables capture has been disabled because the debugger was already enabled`);
          return;
        }
        try {
          let o = await vb.create(t),
            s = (e, { params: { reason: t, data: i, callFrames: a } }, s) => {
              if (t !== `exception` && t !== `promiseRejection`) {
                s();
                return;
              }
              r?.();
              let c = gb(e, i.description);
              if (c == null) {
                s();
                return;
              }
              let { add: l, next: u } = _b((e) => {
                (n.set(c, e), s());
              });
              for (let e = 0; e < Math.min(a.length, 5); e++) {
                let { scopeChain: t, functionName: n, this: r } = a[e],
                  i = t.find((e) => e.type === `local`),
                  s = r.className === `global` || !r.className ? n : `${r.className}.${n}`;
                if (i?.object.objectId === void 0)
                  l((t) => {
                    ((t[e] = { function: s }), u(t));
                  });
                else {
                  let t = i.object.objectId;
                  l((n) =>
                    o.getLocalVariables(t, (t) => {
                      ((n[e] = { function: s, vars: t }), u(n));
                    }),
                  );
                }
              }
              u([]);
            },
            c = e.captureAllExceptions !== !1;
          (o.configureAndConnect((e, t) => s(a.stackParser, e, t), c),
            c &&
              (r = lb(
                e.maxExceptionsPerSecond || 50,
                () => {
                  (H.log(`Local variables rate-limit lifted.`), o.setPauseOnExceptions(!0));
                },
                (e) => {
                  (H.log(
                    `Local variables rate-limit exceeded. Disabling capturing of caught exceptions for ${e} seconds.`,
                  ),
                    o.setPauseOnExceptions(!1));
                },
              )),
            (i = !0));
        } catch (e) {
          H.log("The `LocalVariables` integration failed to start.", e);
        }
      }
    }
    return {
      name: yb,
      setupOnce() {
        s = c();
      },
      async processEvent(e) {
        return (await s, i ? o(e) : e);
      },
      _getCachedFramesCount() {
        return n.size;
      },
      _getFirstCachedFrame() {
        return n.values()[0];
      },
    };
  }),
  xb = (e = {}) => (hy.major < 19 ? bb(e) : mb(e)),
  Sb = 2e3;
function Cb(e) {
  Xc(() => {
    console.error(e);
  });
  let t = K();
  if (t === void 0) {
    (Vg && H.warn(`No NodeClient was defined, we are exiting the process now.`), global.process.exit(1));
    return;
  }
  let n = t.getOptions(),
    r = n?.shutdownTimeout && n.shutdownTimeout > 0 ? n.shutdownTimeout : Sb;
  t.close(r).then(
    (e) => {
      (e || (Vg && H.warn(`We reached the timeout for emptying the request buffer, still exiting now!`)),
        global.process.exit(1));
    },
    (e) => {
      Vg && H.error(e);
    },
  );
}
var wb = `OnUnhandledRejection`,
  Tb = [{ name: `AI_NoOutputGeneratedError` }],
  Eb = J((e = {}) => {
    let t = { mode: e.mode ?? `warn`, ignore: [...Tb, ...(e.ignore ?? [])] };
    return {
      name: wb,
      setup(e) {
        global.process.on(`unhandledRejection`, Ab(e, t));
      },
    };
  });
function Db(e) {
  if (typeof e != `object` || !e) return { name: ``, message: String(e ?? ``) };
  let t = e;
  return {
    name: typeof t.name == `string` ? t.name : ``,
    message: typeof t.message == `string` ? t.message : String(e),
  };
}
function Ob(e, t) {
  let n = e.name === void 0 || nu(t.name, e.name, !0),
    r = e.message === void 0 || nu(t.message, e.message);
  return n && r;
}
function kb(e, t) {
  let n = Db(t);
  return e.some((e) => Ob(e, n));
}
function Ab(e, t) {
  return function (n, r) {
    if (K() !== e || kb(t.ignore ?? [], n)) return;
    let i = t.mode === `strict` ? `fatal` : `error`,
      a = n && typeof n == `object` ? n._sentry_active_span : void 0;
    ((a ? (e) => np(a, e) : (e) => e())(() => {
      Vp(n, {
        originalException: r,
        captureContext: { extra: { unhandledPromiseRejection: !0 }, level: i },
        mechanism: { handled: !1, type: `auto.node.onunhandledrejection` },
      });
    }),
      jb(n, t.mode));
  };
}
function jb(e, t) {
  let n = `This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason:`;
  t === `warn`
    ? Xc(() => {
        (console.warn(n), console.error(e && typeof e == `object` && `stack` in e ? e.stack : e));
      })
    : t === `strict` &&
      (Xc(() => {
        console.warn(n);
      }),
      Cb(e));
}
var Mb = `ChildProcess`,
  Nb = J((e = {}) => ({
    name: Mb,
    setup() {
      (k.channel(`child_process`).subscribe((t) => {
        t && typeof t == `object` && `process` in t && Pb(t.process, e);
      }),
        k.channel(`worker_threads`).subscribe((t) => {
          t && typeof t == `object` && `worker` in t && Fb(t.worker, e);
        }));
    },
  }));
function Pb(e, t) {
  let n = !1,
    r;
  e.on(`spawn`, () => {
    if (e.spawnfile === `/usr/bin/sw_vers`) {
      n = !0;
      return;
    }
    ((r = { spawnfile: e.spawnfile }), t.includeChildProcessArgs && (r.spawnargs = e.spawnargs));
  })
    .on(`exit`, (e) => {
      n ||
        ((n = !0),
        e !== null &&
          e !== 0 &&
          Lh({
            category: `child_process`,
            message: `Child process exited with code '${e}'`,
            level: e === 0 ? `info` : `warning`,
            data: r,
          }));
    })
    .on(`error`, (e) => {
      n ||
        ((n = !0),
        Lh({
          category: `child_process`,
          message: `Child process errored with '${e.message}'`,
          level: `error`,
          data: r,
        }));
    });
}
function Fb(e, t) {
  let n;
  e.on(`online`, () => {
    n = e.threadId;
  }).on(`error`, (e) => {
    t.captureWorkerErrors === !1
      ? Lh({
          category: `worker_thread`,
          message: `Worker thread errored with '${e.message}'`,
          level: `error`,
          data: { threadId: n },
        })
      : Vp(e, {
          mechanism: { type: `auto.child_process.worker_thread`, handled: !1, data: { threadId: String(n) } },
        });
  });
}
var Ib = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.AbstractAsyncHooksContextManager = void 0));
    var t = require("events"),
      n = [`addListener`, `on`, `once`, `prependListener`, `prependOnceListener`];
    e.AbstractAsyncHooksContextManager = class {
      bind(e, n) {
        return n instanceof t.EventEmitter
          ? this._bindEventEmitter(e, n)
          : typeof n == `function`
            ? this._bindFunction(e, n)
            : n;
      }
      _bindFunction(e, t) {
        let n = this,
          r = function (...r) {
            return n.with(e, () => t.apply(this, r));
          };
        return (
          Object.defineProperty(r, "length", {
            enumerable: !1,
            configurable: !0,
            writable: !1,
            value: t.length,
          }),
          r
        );
      }
      _bindEventEmitter(e, t) {
        return this._getPatchMap(t) === void 0
          ? (this._createPatchMap(t),
            n.forEach((n) => {
              t[n] !== void 0 && (t[n] = this._patchAddListener(t, t[n], e));
            }),
            typeof t.removeListener == `function` &&
              (t.removeListener = this._patchRemoveListener(t, t.removeListener)),
            typeof t.off == `function` && (t.off = this._patchRemoveListener(t, t.off)),
            typeof t.removeAllListeners == `function` &&
              (t.removeAllListeners = this._patchRemoveAllListeners(t, t.removeAllListeners)),
            t)
          : t;
      }
      _patchRemoveListener(e, t) {
        let n = this;
        return function (r, i) {
          let a = n._getPatchMap(e)?.[r];
          if (a === void 0) return t.call(this, r, i);
          let o = a.get(i);
          return t.call(this, r, o || i);
        };
      }
      _patchRemoveAllListeners(e, t) {
        let n = this;
        return function (r) {
          let i = n._getPatchMap(e);
          return (
            i !== void 0 && (arguments.length === 0 ? n._createPatchMap(e) : i[r] !== void 0 && delete i[r]),
            t.apply(this, arguments)
          );
        };
      }
      _patchAddListener(e, t, n) {
        let r = this;
        return function (i, a) {
          if (r._wrapped) return t.call(this, i, a);
          let o = r._getPatchMap(e);
          o === void 0 && (o = r._createPatchMap(e));
          let s = o[i];
          s === void 0 && ((s = new WeakMap()), (o[i] = s));
          let c = r.bind(n, a);
          (s.set(a, c), (r._wrapped = !0));
          try {
            return t.call(this, i, c);
          } finally {
            r._wrapped = !1;
          }
        };
      }
      _createPatchMap(e) {
        let t = Object.create(null);
        return ((e[this._kOtListeners] = t), t);
      }
      _getPatchMap(e) {
        return e[this._kOtListeners];
      }
      _kOtListeners = Symbol(`OtListeners`);
      _wrapped = !1;
    };
  }),
  Lb = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.AsyncHooksContextManager = void 0));
    var t = F(),
      n = require("async_hooks"),
      r = Ib();
    e.AsyncHooksContextManager = class extends r.AbstractAsyncHooksContextManager {
      _asyncHook;
      _contexts = new Map();
      _stack = [];
      constructor() {
        (super(),
          (this._asyncHook = n.createHook({
            init: this._init.bind(this),
            before: this._before.bind(this),
            after: this._after.bind(this),
            destroy: this._destroy.bind(this),
            promiseResolve: this._destroy.bind(this),
          })));
      }
      active() {
        return this._stack[this._stack.length - 1] ?? t.ROOT_CONTEXT;
      }
      with(e, t, n, ...r) {
        this._enterContext(e);
        try {
          return t.call(n, ...r);
        } finally {
          this._exitContext();
        }
      }
      enable() {
        return (this._asyncHook.enable(), this);
      }
      disable() {
        return (this._asyncHook.disable(), this._contexts.clear(), (this._stack = []), this);
      }
      _init(e, t) {
        if (t === `TIMERWRAP`) return;
        let n = this._stack[this._stack.length - 1];
        n !== void 0 && this._contexts.set(e, n);
      }
      _destroy(e) {
        this._contexts.delete(e);
      }
      _before(e) {
        let t = this._contexts.get(e);
        t !== void 0 && this._enterContext(t);
      }
      _after() {
        this._exitContext();
      }
      _enterContext(e) {
        this._stack.push(e);
      }
      _exitContext() {
        this._stack.pop();
      }
    };
  }),
  Rb = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.AsyncLocalStorageContextManager = void 0));
    var t = F(),
      n = require("async_hooks"),
      r = Ib();
    e.AsyncLocalStorageContextManager = class extends r.AbstractAsyncHooksContextManager {
      _asyncLocalStorage;
      constructor() {
        (super(), (this._asyncLocalStorage = new n.AsyncLocalStorage()));
      }
      active() {
        return this._asyncLocalStorage.getStore() ?? t.ROOT_CONTEXT;
      }
      with(e, t, n, ...r) {
        let i = n == null ? t : t.bind(n);
        return this._asyncLocalStorage.run(e, i, ...r);
      }
      enable() {
        return this;
      }
      disable() {
        return (this._asyncLocalStorage.disable(), this);
      }
    };
  }),
  zb = Vv(
    e.t((e) => {
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AsyncLocalStorageContextManager = e.AsyncHooksContextManager = void 0));
      var t = Lb();
      Object.defineProperty(e, "AsyncHooksContextManager", {
        enumerable: !0,
        get: function () {
          return t.AsyncHooksContextManager;
        },
      });
      var n = Rb();
      Object.defineProperty(e, "AsyncLocalStorageContextManager", {
        enumerable: !0,
        get: function () {
          return n.AsyncLocalStorageContextManager;
        },
      });
    })().AsyncLocalStorageContextManager,
  );
function Bb() {
  (Y.diag.disable(),
    Y.diag.setLogger(
      { error: H.error, warn: H.warn, info: H.log, debug: H.log, verbose: H.log },
      Y.DiagLogLevel.DEBUG,
    ));
}
function Vb(e) {
  return e.replace(/^[A-Z]:/, ``).replace(/\\/g, `/`);
}
function Hb(e = process.argv[1] ? _g(process.argv[1]) : process.cwd(), t = g.sep === `\\`) {
  let n = t ? Vb(e) : e;
  return (e) => {
    if (!e) return;
    let r = t ? Vb(e) : e,
      { dir: i, base: a, ext: o } = g.posix.parse(r);
    (o === `.js` || o === `.mjs` || o === `.cjs`) && (a = a.slice(0, o.length * -1));
    let s = decodeURIComponent(a);
    i ||= `.`;
    let c = i.lastIndexOf(`/node_modules`);
    if (c > -1) return `${i.slice(c + 14).replace(/\//g, `.`)}:${s}`;
    if (i.startsWith(n)) {
      let e = i.slice(n.length + 1).replace(/\//g, `.`);
      return e ? `${e}:${s}` : s;
    }
    return s;
  };
}
Hc();
var Ub = 6e4,
  Wb = class extends vh {
    constructor(e) {
      let t =
          e.includeServerName === !1
            ? void 0
            : e.serverName || global.process.env.SENTRY_NAME || _.hostname(),
        n = {
          ...e,
          platform: `node`,
          runtime: { name: `node`, version: global.process.version },
          serverName: t,
        };
      (e.openTelemetryInstrumentations && ds({ instrumentations: e.openTelemetryInstrumentations }),
        jh(n, `node`),
        H.log(
          `Initializing Sentry: process: ${process.pid}, thread: ${re.isMainThread ? `main` : `worker-${re.threadId}`}.`,
        ),
        super(n),
        this.getOptions().enableLogs &&
          ((this._logOnExitFlushListener = () => {
            vm(this);
          }),
          t &&
            this.on(`beforeCaptureLog`, (e) => {
              e.attributes = { ...e.attributes, "server.address": t };
            }),
          process.on(`beforeExit`, this._logOnExitFlushListener)));
    }
    get tracer() {
      if (this._tracer) return this._tracer;
      let e = Uc,
        t = Y.trace.getTracer(`@sentry/node`, e);
      return ((this._tracer = t), t);
    }
    async flush(e) {
      return (
        await this.traceProvider?.forceFlush(),
        this.getOptions().sendClientReports && this._flushOutcomes(),
        super.flush(e)
      );
    }
    async close(e) {
      (this._clientReportInterval && clearInterval(this._clientReportInterval),
        this._clientReportOnExitFlushListener &&
          process.off(`beforeExit`, this._clientReportOnExitFlushListener),
        this._logOnExitFlushListener && process.off(`beforeExit`, this._logOnExitFlushListener));
      let t = await super.close(e);
      return (this.traceProvider && (await this.traceProvider.shutdown()), t);
    }
    startClientReportTracking() {
      let e = this.getOptions();
      e.sendClientReports &&
        ((this._clientReportOnExitFlushListener = () => {
          this._flushOutcomes();
        }),
        (this._clientReportInterval = setInterval(() => {
          (Vg && H.log(`Flushing client reports based on interval.`), this._flushOutcomes());
        }, e.clientReportFlushInterval ?? Ub).unref()),
        process.on(`beforeExit`, this._clientReportOnExitFlushListener));
    }
    _setupIntegrations() {
      (wh(), super._setupIntegrations());
    }
    _getTraceInfoFromScope(e) {
      return e ? Iv(this, e) : [void 0, void 0];
    }
  },
  Gb = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.PACKAGE_NAME = e.PACKAGE_VERSION = void 0),
      (e.PACKAGE_VERSION = `0.19.0`),
      (e.PACKAGE_NAME = `@opentelemetry/instrumentation-undici`));
  }),
  Kb = e.t((t) => {
    (Object.defineProperty(t, "__esModule", { value: !0 }), (t.UndiciInstrumentation = void 0));
    var n = require("diagnostics_channel"),
      r = require("url"),
      i = (Hc(), e.i(Vc)),
      a = F(),
      o = (L(), e.i(Ro)),
      s = Hi(),
      c = Gb();
    t.UndiciInstrumentation = class extends i.InstrumentationBase {
      _recordFromReq = new WeakMap();
      constructor(e = {}) {
        super(c.PACKAGE_NAME, c.PACKAGE_VERSION, e);
      }
      init() {}
      disable() {
        (super.disable(), this._channelSubs.forEach((e) => e.unsubscribe()), (this._channelSubs.length = 0));
      }
      enable() {
        (super.enable(),
          (this._channelSubs = this._channelSubs || []),
          !(this._channelSubs.length > 0) &&
            (this.subscribeToChannel(`undici:request:create`, this.onRequestCreated.bind(this)),
            this.subscribeToChannel(`undici:client:sendHeaders`, this.onRequestHeaders.bind(this)),
            this.subscribeToChannel(`undici:request:headers`, this.onResponseHeaders.bind(this)),
            this.subscribeToChannel(`undici:request:trailers`, this.onDone.bind(this)),
            this.subscribeToChannel(`undici:request:error`, this.onError.bind(this))));
      }
      _updateMetricInstruments() {
        this._httpClientDurationHistogram = this.meter.createHistogram(
          s.METRIC_HTTP_CLIENT_REQUEST_DURATION,
          {
            description: `Measures the duration of outbound HTTP requests.`,
            unit: `s`,
            valueType: a.ValueType.DOUBLE,
            advice: {
              explicitBucketBoundaries: [
                0.005, 0.01, 0.025, 0.05, 0.075, 0.1, 0.25, 0.5, 0.75, 1, 2.5, 5, 7.5, 10,
              ],
            },
          },
        );
      }
      subscribeToChannel(e, t) {
        let [r, i] = process.version
            .replace(`v`, ``)
            .split(`.`)
            .map((e) => Number(e)),
          a = r > 18 || (r === 18 && i >= 19),
          o;
        if (a) (n.subscribe?.(e, t), (o = () => n.unsubscribe?.(e, t)));
        else {
          let r = n.channel(e);
          (r.subscribe(t), (o = () => r.unsubscribe(t)));
        }
        this._channelSubs.push({ name: e, unsubscribe: o });
      }
      parseRequestHeaders(e) {
        let t = new Map();
        if (Array.isArray(e.headers))
          for (let n = 0; n < e.headers.length; n += 2) {
            let r = e.headers[n],
              i = e.headers[n + 1];
            typeof r == `string` && t.set(r.toLowerCase(), i);
          }
        else if (typeof e.headers == `string`) {
          let n = e.headers.split(`\r
`);
          for (let e of n) {
            if (!e) continue;
            let n = e.indexOf(`:`);
            if (n === -1) continue;
            let r = e.substring(0, n).toLowerCase(),
              i = e.substring(n + 1).trim(),
              a = t.get(r);
            a && Array.isArray(a) ? a.push(i) : a ? t.set(r, [a, i]) : t.set(r, i);
          }
        }
        return t;
      }
      onRequestCreated({ request: e }) {
        let t = this.getConfig(),
          n = t.enabled !== !1;
        if (
          (0, i.safeExecuteInTheMiddle)(
            () => !n || e.method === `CONNECT` || t.ignoreRequestHook?.(e),
            (e) => e && this._diag.error(`caught ignoreRequestHook error: `, e),
            !0,
          )
        )
          return;
        let c = (0, o.hrTime)(),
          l;
        try {
          l = new r.URL(e.path, e.origin);
        } catch (e) {
          this._diag.warn(`could not determine url.full:`, e);
          return;
        }
        let u = l.protocol.replace(`:`, ``),
          d = this.getRequestMethod(e.method),
          f = {
            [s.ATTR_HTTP_REQUEST_METHOD]: d,
            [s.ATTR_HTTP_REQUEST_METHOD_ORIGINAL]: e.method,
            [s.ATTR_URL_FULL]: l.toString(),
            [s.ATTR_URL_PATH]: l.pathname,
            [s.ATTR_URL_QUERY]: l.search,
            [s.ATTR_URL_SCHEME]: u,
          },
          p = { https: `443`, http: `80` },
          m = l.hostname,
          h = l.port || p[u];
        ((f[s.ATTR_SERVER_ADDRESS] = m), h && !isNaN(Number(h)) && (f[s.ATTR_SERVER_PORT] = Number(h)));
        let g = this.parseRequestHeaders(e).get(`user-agent`);
        if (g) {
          let e = Array.isArray(g) ? g[g.length - 1] : g;
          f[s.ATTR_USER_AGENT_ORIGINAL] = e;
        }
        let _ = (0, i.safeExecuteInTheMiddle)(
          () => t.startSpanHook?.(e),
          (e) => e && this._diag.error(`caught startSpanHook error: `, e),
          !0,
        );
        _ &&
          Object.entries(_).forEach(([e, t]) => {
            f[e] = t;
          });
        let v = a.context.active(),
          y = a.trace.getSpan(v),
          b;
        ((b =
          t.requireParentforSpans && (!y || !a.trace.isSpanContextValid(y.spanContext()))
            ? a.trace.wrapSpanContext(a.INVALID_SPAN_CONTEXT)
            : this.tracer.startSpan(
                d === `_OTHER` ? `HTTP` : d,
                { kind: a.SpanKind.CLIENT, attributes: f },
                v,
              )),
          (0, i.safeExecuteInTheMiddle)(
            () => t.requestHook?.(b, e),
            (e) => e && this._diag.error(`caught requestHook error: `, e),
            !0,
          ));
        let x = a.trace.setSpan(a.context.active(), b),
          S = {};
        a.propagation.inject(x, S);
        let C = Object.entries(S);
        for (let t = 0; t < C.length; t++) {
          let [n, r] = C[t];
          typeof e.addHeader == `function`
            ? e.addHeader(n, r)
            : typeof e.headers == `string`
              ? (e.headers += `${n}: ${r}\r\n`)
              : Array.isArray(e.headers) && e.headers.push(n, r);
        }
        this._recordFromReq.set(e, { span: b, attributes: f, startTime: c });
      }
      onRequestHeaders({ request: e, socket: t }) {
        let n = this._recordFromReq.get(e);
        if (!n) return;
        let r = this.getConfig(),
          { span: i } = n,
          { remoteAddress: a, remotePort: o } = t,
          c = { [s.ATTR_NETWORK_PEER_ADDRESS]: a, [s.ATTR_NETWORK_PEER_PORT]: o };
        if (r.headersToSpanAttributes?.requestHeaders) {
          let t = new Set(r.headersToSpanAttributes.requestHeaders.map((e) => e.toLowerCase())),
            n = this.parseRequestHeaders(e);
          for (let [e, r] of n.entries())
            if (t.has(e)) {
              let t = Array.isArray(r) ? r.join(`, `) : r;
              c[`http.request.header.${e}`] = t;
            }
        }
        i.setAttributes(c);
      }
      onResponseHeaders({ request: e, response: t }) {
        let n = this._recordFromReq.get(e);
        if (!n) return;
        let { span: r, attributes: o } = n,
          c = { [s.ATTR_HTTP_RESPONSE_STATUS_CODE]: t.statusCode },
          l = this.getConfig();
        (0, i.safeExecuteInTheMiddle)(
          () => l.responseHook?.(r, { request: e, response: t }),
          (e) => e && this._diag.error(`caught responseHook error: `, e),
          !0,
        );
        let u = new Set();
        l.headersToSpanAttributes?.responseHeaders &&
          l.headersToSpanAttributes?.responseHeaders.forEach((e) => u.add(e.toLowerCase()));
        for (let e = 0; e < t.headers.length; e += 2) {
          let n = t.headers[e].toString().toLowerCase(),
            r = t.headers[e + 1];
          if ((u.has(n) && (c[`http.response.header.${n}`] = r.toString()), n === `content-length`)) {
            let e = Number(r.toString());
            isNaN(e) || (c[`http.response.header.content-length`] = e);
          }
        }
        (r.setAttributes(c),
          r.setStatus({ code: t.statusCode >= 400 ? a.SpanStatusCode.ERROR : a.SpanStatusCode.UNSET }),
          (n.attributes = Object.assign(o, c)));
      }
      onDone({ request: e }) {
        let t = this._recordFromReq.get(e);
        if (!t) return;
        let { span: n, attributes: r, startTime: i } = t;
        (n.end(), this._recordFromReq.delete(e), this.recordRequestDuration(r, i));
      }
      onError({ request: e, error: t }) {
        let n = this._recordFromReq.get(e);
        if (!n) return;
        let { span: r, attributes: i, startTime: o } = n;
        (r.recordException(t),
          r.setStatus({ code: a.SpanStatusCode.ERROR, message: t.message }),
          r.end(),
          this._recordFromReq.delete(e),
          (i[s.ATTR_ERROR_TYPE] = t.message),
          this.recordRequestDuration(i, o));
      }
      recordRequestDuration(e, t) {
        let n = {};
        [
          s.ATTR_HTTP_RESPONSE_STATUS_CODE,
          s.ATTR_HTTP_REQUEST_METHOD,
          s.ATTR_SERVER_ADDRESS,
          s.ATTR_SERVER_PORT,
          s.ATTR_URL_SCHEME,
          s.ATTR_ERROR_TYPE,
        ].forEach((t) => {
          t in e && (n[t] = e[t]);
        });
        let r = (0, o.hrTimeToMilliseconds)((0, o.hrTimeDuration)(t, (0, o.hrTime)())) / 1e3;
        this._httpClientDurationHistogram.record(r, n);
      }
      getRequestMethod(e) {
        return e.toUpperCase() in
          { CONNECT: !0, OPTIONS: !0, HEAD: !0, GET: !0, POST: !0, PUT: !0, PATCH: !0, DELETE: !0, TRACE: !0 }
          ? e.toUpperCase()
          : `_OTHER`;
      }
    };
  }),
  qb = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.UndiciInstrumentation = void 0));
    var t = Kb();
    Object.defineProperty(e, "UndiciInstrumentation", {
      enumerable: !0,
      get: function () {
        return t.UndiciInstrumentation;
      },
    });
  })(),
  Jb = `NodeFetch`,
  Yb = Rg(Jb, qb.UndiciInstrumentation, (e) => ex(e)),
  Xb = Rg(`${Jb}.sentry`, xy, (e) => e),
  Zb = J((e = {}) => ({
    name: `NodeFetch`,
    setupOnce() {
      ($b(e, K()?.getOptions()) && Yb(e), Xb(e));
    },
  }));
function Qb(e, t = `/`) {
  let n = `${e}`;
  return n.endsWith(`/`) && t.startsWith(`/`)
    ? `${n}${t.slice(1)}`
    : !n.endsWith(`/`) && !t.startsWith(`/`)
      ? `${n}/${t.slice(1)}`
      : `${n}${t}`;
}
function $b(e, t = {}) {
  return typeof e.spans == `boolean` ? e.spans : !t.skipOpenTelemetrySetup && tf(t);
}
function ex(e = {}) {
  return {
    requireParentforSpans: !1,
    ignoreRequestHook: (t) => {
      let n = Qb(t.origin, t.path),
        r = e.ignoreOutgoingRequests;
      return !!(r && n && r(n));
    },
    startSpanHook: () => ({ [Yu]: `auto.http.otel.node_fetch` }),
    requestHook: e.requestHook,
    responseHook: e.responseHook,
  };
}
var tx = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__,
  nx = 1e6;
function rx(e, t = {}) {
  (e.getOptions().debug && Bb(), (e.traceProvider = ix(e, t)));
}
function ix(e, t = {}) {
  let n = new A_({
    sampler: new ly(e),
    resource: n_().merge(
      t_({
        [X.ATTR_SERVICE_NAME]: `node`,
        [X.SEMRESATTRS_SERVICE_NAMESPACE]: `sentry`,
        [X.ATTR_SERVICE_VERSION]: Uc,
      }),
    ),
    forceFlushTimeoutMillis: 500,
    spanProcessors: [
      new cy({ timeout: ax(e.getOptions().maxSpanWaitDuration) }),
      ...(t.spanProcessors || []),
    ],
  });
  return (
    Y.trace.setGlobalTracerProvider(n),
    Y.propagation.setGlobalPropagator(new hv()),
    Y.context.setGlobalContextManager(new zb()),
    n
  );
}
function ax(e) {
  if (e != null) {
    if (e > nx)
      return (tx && H.warn(`\`maxSpanWaitDuration\` is too high, using the maximum value of ${nx}`), nx);
    if (e <= 0 || Number.isNaN(e)) {
      tx && H.warn("`maxSpanWaitDuration` must be a positive number, using default value instead.");
      return;
    }
    return e;
  }
}
var ox;
function sx() {
  if (ox) return;
  let e = (ox = new Map());
  function t(t, n) {
    let r = e.get(t) || { id: t };
    ((r.url = xf(n, y.app.getAppPath())), e.set(t, r));
  }
  function n(t, n) {
    let r = e.get(t) || { id: t };
    ((r.title = n), e.set(t, r));
  }
  y.app.on(`web-contents-created`, (r, i) => {
    let a = i.id;
    (i.on(`did-navigate`, (e, n) => t(a, n)),
      i.on(`did-navigate-in-page`, (e, n) => t(a, n)),
      i.on(`page-title-updated`, (e, t) => n(a, t)),
      i.on(`destroyed`, () => {
        setTimeout(() => {
          e.delete(a);
        }, 5e3);
      }));
  });
}
function cx(e) {
  return ox?.get(e);
}
var lx = {
  app: (e) => !e.startsWith(`remote-`),
  autoUpdater: () => !0,
  webContents: (e) => [`dom-ready`, `context-menu`, `load-url`, `destroyed`].includes(e),
  browserWindow: (e) =>
    [
      `closed`,
      `close`,
      `unresponsive`,
      `responsive`,
      `show`,
      `blur`,
      `focus`,
      `hide`,
      `maximize`,
      `minimize`,
      `restore`,
      `enter-full-screen`,
      `leave-full-screen`,
    ].includes(e),
  screen: () => !0,
  powerMonitor: () => !0,
  captureWindowTitles: !1,
};
function ux(e) {
  return Object.keys(e).reduce((t, n) => {
    if (n === `captureWindowTitles`) t[n] = !!e[n];
    else {
      let r = e[n];
      Array.isArray(r) ? (t[n] = (e) => r.includes(e)) : (typeof r == `function` || r === !1) && (t[n] = r);
    }
    return t;
  }, {});
}
var dx = J((e = {}) => {
    let t = { ...lx, ...ux(e) };
    return {
      name: `ElectronBreadcrumbs`,
      setup(e) {
        let n = e.getOptions(),
          r = !!n?.enableLogs;
        function i(e, n, i, a) {
          let o = e.emit.bind(e);
          e.emit = (e, ...s) => {
            if (i && i(e)) {
              let i = {
                category: `electron`,
                message: `${n}.${e}`,
                timestamp: new Date().getTime() / 1e3,
                type: `ui`,
              };
              (a &&
                ((i.data = { ...cx(a) }), !t.captureWindowTitles && i.data?.title && delete i.data?.title),
                Lh(i));
              let o = { "sentry.origin": `auto.electron.events` };
              (i.data?.id && (o.id = i.data.id),
                i.data?.url && (o.url = i.data.url),
                r && Pg(kh`electron.${n}.${e}`, o));
            }
            return o(e, ...s);
          };
        }
        (sx(),
          y.app.whenReady().then(
            () => {
              (t.screen && i(y.screen, `screen`, t.screen),
                t.powerMonitor && i(y.powerMonitor, `powerMonitor`, t.powerMonitor));
            },
            () => {},
          ),
          t.app && i(y.app, `app`, t.app),
          t.autoUpdater && i(y.autoUpdater, `autoUpdater`, t.autoUpdater),
          t.browserWindow &&
            y.app.on(`browser-window-created`, (e, r) => {
              let a = r.webContents.id;
              i(r, n?.getRendererName?.(r.webContents) || `window`, t.browserWindow, a);
            }),
          t.webContents &&
            y.app.on(`web-contents-created`, (e, r) => {
              let a = r.id;
              i(r, n?.getRendererName?.(r) || `renderer`, t.webContents, a);
            }));
      },
    };
  }),
  fx = J(() => ({
    name: `OnUncaughtException`,
    setup(e) {
      let t = e.getOptions();
      global.process.on(`uncaughtException`, (n) => {
        (Vp(n, {
          originalException: n,
          captureContext: { level: `fatal` },
          data: { mechanism: { handled: !1, type: `generic` } },
        }),
          e.flush(t.shutdownTimeout || 2e3).then(
            () => {
              if (t?.onFatalError) t.onFatalError(n);
              else if (global.process.listenerCount(`uncaughtException`) <= 2) {
                (console.error(`Uncaught Exception:`), console.error(n));
                let e = n.stack,
                  t = `Uncaught Exception:\n${e === void 0 ? `${n.name}: ${n.message}` : e}`;
                y.dialog.showErrorBox(`A JavaScript error occurred in the main process`, t);
              }
            },
            () => {},
          ));
      });
    },
  }));
function px() {
  let e = Uu().getScopeData(),
    t = G().getScopeData(),
    n = W().getScopeData();
  return (vp(e, t), vp(e, n), (e.eventProcessors = []), e);
}
function mx(e) {
  (G().addScopeListener((t) => {
    e(px(), t);
  }),
    W().addScopeListener((t) => {
      e(px(), t);
    }),
    Uu().addScopeListener((t) => {
      e(px(), t);
    }));
}
var hx = `7.5.0`,
  gx = `sentry.javascript.electron`;
function _x(e) {
  return {
    name: gx,
    packages: [{ name: `npm:@sentry/electron`, version: hx }],
    version: hx,
    settings: { infer_ip: e ? `auto` : `never` },
  };
}
function vx() {
  return `${(y.app.name || y.app.getName()).replace(/\W/g, `-`)}@${y.app.getVersion()}`;
}
function yx() {
  return y.app.isPackaged ? `production` : `development`;
}
async function bx(e) {
  let t = { message: `test` },
    n = {};
  for (let r of e.getEventProcessors()) {
    if (t === null) break;
    t = await r(t, n);
  }
  return (delete t?.message, t || {});
}
var xx;
(function (e) {
  ((e[(e.Classic = 1)] = `Classic`), (e[(e.Protocol = 2)] = `Protocol`), (e[(e.Both = 3)] = `Both`));
})((xx ||= {}));
function Sx(e) {
  return {
    createUrl: (t) => `${e}://${t}/sentry_key`,
    urlMatches: function (e, t) {
      return e.startsWith(this.createUrl(t));
    },
    createKey: (t) => `${e}.${t}`,
    namespace: e,
  };
}
var Cx = `sentry-electron-renderer-id`,
  wx = `__sentry_message_port_message__`;
function Tx(e) {
  return !!(e && typeof e == `object` && wx in e);
}
function Ex() {
  return { [wx]: !0 };
}
var Dx = pu(process.versions.electron),
  Ox = { major: Dx.major || 0, minor: Dx.minor || 0, patch: Dx.patch || 0 },
  kx = Ox.major,
  Ax = [`clean-exit`, `abnormal-exit`, `killed`, `crashed`, `oom`, `launch-failed`, `integrity-failure`];
function jx() {
  return (0, p.join)(y.app.getPath(`userData`), `sentry`);
}
function Mx() {
  return Ox.major >= 25;
}
function Nx(e, t, n) {
  Mx()
    ? e.handle(
        t,
        async (e) => (
          n({
            windowId: e.headers.get(`sentry-electron-renderer-id`) || void 0,
            url: e.url,
            body: Buffer.from(await e.arrayBuffer()),
          }),
          new Response(``)
        ),
      )
    : e.registerStringProtocol(t, (e, t) => {
        (n({ windowId: e.headers[Cx], url: e.url, body: e.uploadData?.[0]?.bytes }), t(``));
      });
}
function Px(e, t) {
  if (e.registerPreloadScript) e.registerPreloadScript({ type: `frame`, filePath: t });
  else {
    let n = e.getPreloads();
    e.setPreloads([t, ...n]);
  }
}
var Fx = class {
    constructor() {
      ((this._entries = []), (this._waiters = []), (this._value = 1));
    }
    async runExclusive(e) {
      let t = await this._acquire();
      try {
        return await e();
      } finally {
        t();
      }
    }
    _acquire() {
      return new Promise((e, t) => {
        (this._entries.push({ resolve: e, reject: t }), this._dispatch());
      });
    }
    _release() {
      ((this._value += 1), this._dispatch());
    }
    _dispatch() {
      for (let e = this._value; e > 0; e--) {
        let t = this._entries?.shift();
        t && ((this._value -= e), (e = this._value + 1), t.resolve(this._newReleaser()));
      }
      this._drainUnlockWaiters();
    }
    _newReleaser() {
      let e = !1;
      return () => {
        e || ((e = !0), this._release());
      };
    }
    _drainUnlockWaiters() {
      for (let e = this._value; e > 0; e--)
        this._waiters[e - 1] && (this._waiters.forEach((e) => e()), (this._waiters = []));
    }
  },
  Ix = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.*\d{0,10}Z$/;
function Lx(e, t) {
  return typeof t == `string` && Ix.test(t) ? new Date(t) : t;
}
var Rx = class {
    constructor(e, t, n) {
      ((this._lock = new Fx()), (this._path = (0, p.join)(e, `${t}.json`)), (this._initial = n));
    }
    async set(e) {
      await this._lock.runExclusive(async () => {
        this._data = e;
        try {
          if (e === void 0)
            try {
              await C.promises.unlink(this._path);
            } catch {}
          else
            (await C.promises.mkdir((0, p.dirname)(this._path), { recursive: !0 }),
              await C.promises.writeFile(this._path, JSON.stringify(e)));
        } catch (e) {
          H.warn(`Failed to write to store`, e);
        }
      });
    }
    async get() {
      return this._lock.runExclusive(async () => {
        if (this._data === void 0)
          try {
            this._data = JSON.parse(await C.promises.readFile(this._path, `utf8`), Lx);
          } catch {
            this._data = this._initial;
          }
        return this._data;
      });
    }
    async update(e) {
      await this.set(e(await this.get()));
    }
    async clear() {
      await this.set(this._initial);
    }
    async getModifiedDate() {
      try {
        return (await C.promises.stat(this._path))?.mtime;
      } catch {
        return;
      }
    }
  },
  zx = class extends Rx {
    constructor(e, t, n, r = 500) {
      (super(e, t, n), (this._throttleTime = r));
    }
    async set(e) {
      ((this._data = e),
        (this._pendingWrite = {
          data: e,
          timeout: this._pendingWrite?.timeout || setTimeout(() => this._writePending(), this._throttleTime),
        }));
    }
    _writePending() {
      if (this._pendingWrite) {
        let e = this._pendingWrite.data;
        ((this._pendingWrite = void 0), super.set(e).catch(() => {}));
      }
    }
  },
  Bx = 6e4,
  Vx,
  Hx;
function Ux() {
  return (Vx || ((Vx = new Rx(jx(), `session`, void 0)), (Hx = Vx.get().then((e) => e && xu(e)))), Vx);
}
function Wx(e) {
  let t = { ...e };
  return (delete t.toJSON, t);
}
var Gx;
function Kx(e) {
  let t = Jp();
  (e && Zp(),
    Ux()
      .set(Wx(t))
      .catch(() => {}),
    (Gx = setInterval(async () => {
      let e = G().getSession();
      e && e.status === `ok` && (await Ux().set(Wx(e)));
    }, Bx)));
}
async function qx() {
  Gx && clearInterval(Gx);
  let e = G().getSession();
  (e
    ? e.status === `ok`
      ? (H.log(`Ending session`), Yp())
      : H.log(`Session was already ended`)
    : H.log(`No session`),
    await Ux().clear(),
    await Kp(2e3));
}
async function Jx() {
  let e = await Hx,
    t = G(),
    n = t.getSession();
  return (e && ((Hx = void 0), e.status === `ok` && t.setSession(xu(e))), n);
}
function Yx(e) {
  G().setSession(e);
}
async function Xx() {
  let e = K(),
    t = await Hx;
  if (t && e) {
    if (t.status !== `ok`) {
      Hx = void 0;
      return;
    }
    H.log(`Found previous abnormal session`);
    let n = xu(t);
    (Su(n, {
      status: `abnormal`,
      errors: (n.errors || 0) + 1,
      release: t.attrs?.release,
      environment: t.attrs?.environment,
    }),
      await e.sendSession(n),
      (Hx = void 0));
  }
}
function Zx() {
  Gx && clearInterval(Gx);
  let e = G().getSession();
  e &&
    e.status === `ok` &&
    (H.log(`Setting session as abnormal ANR`),
    Su(e, { status: `abnormal`, abnormal_mechanism: `anr_foreground` }),
    Zp());
}
function Qx() {
  y.app.on(`before-quit`, () => {
    (y.app.removeListener(`will-quit`, $x), y.app.on(`will-quit`, $x));
  });
}
var $x = async (e) => {
    if (!e.defaultPrevented) {
      (H.log(`[Session] Exit Handler`), e.preventDefault());
      try {
        await qx();
      } catch (e) {
        H.warn(`[Session] Error ending session:`, e);
      }
      y.app.exit();
    }
  },
  eS = `MDMP`;
function tS(e) {
  return {
    signature: e.subarray(0, 4).toString(),
    version: e.readUInt32LE(4),
    streamCount: e.readUInt32LE(8),
    streamDirectoryRva: e.readUInt32LE(12),
    checksum: e.readUInt32LE(16),
    timeDateStamp: new Date(e.readUInt32LE(20) * 1e3),
    flags: e.readBigUInt64LE(24),
  };
}
function nS(e, t) {
  return { dataSize: e.readUInt32LE(t), rva: e.readUInt32LE(t + 4) };
}
function rS(e, t) {
  return { streamType: e.readUInt32LE(t), location: nS(e, t + 4) };
}
function iS(e, t) {
  return e.subarray(t.rva, t.rva + t.dataSize);
}
function aS(e, t) {
  return nS(e, t + 20);
}
function oS(e, t) {
  let n = e.readUInt32LE(t);
  return e.toString(`utf8`, t + 4, t + 4 + n);
}
function sS(e, t, n) {
  let r = e.readUInt32LE(n),
    i = e.readUInt16LE(n + 4),
    a = e.readUInt32LE(n + 8);
  if (i === 1) return { name: oS(t, r), value: oS(t, a) };
}
function cS(e, t) {
  let n = e.subarray(t.rva, t.rva + t.dataSize);
  if (n.length === 0) return {};
  let r = aS(n, 0),
    i = e.subarray(r.rva, r.rva + r.dataSize),
    a = i.readUInt32LE(0),
    o = 4,
    s = {};
  for (let t = 0; t < a; t++) {
    let t = sS(i, e, o);
    if (t) {
      let { name: e, value: n } = t;
      s[e] = n;
    }
    o += 12;
  }
  return s;
}
function lS(e, t) {
  let n = e.subarray(t.rva, t.rva + t.dataSize);
  if (n.length === 0) return {};
  let r = n.readUInt32LE(0),
    i = 4,
    a = {};
  for (let t = 0; t < r; t++) {
    let t = nS(n, i + 4);
    ((a = { ...a, ...cS(e, t) }), (i += 12));
  }
  return a;
}
function uS(e, t) {
  return lS(e, nS(t, 44));
}
function dS(e) {
  if (e.length < 1e4) throw Error(`Minidump was less than 10KB so likely incomplete.`);
  let t;
  try {
    t = tS(e);
  } catch {
    throw Error(`Failed to parse minidump header`);
  }
  if (t.signature !== `MDMP`) throw Error(`Minidump signature was not '${eS}'`);
  try {
    for (let n = 0; n < t.streamCount; n++) {
      let r = rS(e, t.streamDirectoryRva + n * 12);
      if (r.streamType === 1129316353) {
        let n = uS(e, iS(e, r.location));
        return { header: t, crashpadAnnotations: n };
      }
    }
  } catch {}
  return { header: t };
}
var fS = 30,
  pS = 864e5,
  mS = 1e3,
  hS = 5e3,
  gS = 500,
  _S = hS / gS;
function vS(e) {
  return new Promise((t) => setTimeout(t, e));
}
function yS(e) {
  let t = new Fx();
  return async (n, r) => {
    await t.runExclusive(async () => {
      for (let t of await e())
        try {
          if (n) continue;
          H.log(`Found minidump`, t);
          let e = await C.promises.stat(t),
            i = new Date().getTime() - fS * pS;
          if (e.mtimeMs < i) {
            H.log(`Ignoring minidump as it is over ${fS} days old`);
            continue;
          }
          let a = 0;
          for (; a <= _S;) {
            let n = new Date().getTime() - mS;
            if (e.mtimeMs < n) {
              let e = await C.promises.readFile(t);
              try {
                let n = dS(e);
                (H.log(`Sending minidump`),
                  await r(n, { attachmentType: `event.minidump`, filename: (0, p.basename)(t), data: e }));
              } catch (e) {
                let t = e instanceof Error ? e.toString() : `Unknown error`;
                H.warn(`Dropping minidump:\n${t}`);
                break;
              }
              break;
            }
            (H.log(`Waiting. Minidump has been modified in the last ${mS} milliseconds.`),
              (a += 1),
              await vS(gS),
              (e = await C.promises.stat(t)));
          }
          a >= _S && H.warn(`Timed out waiting for minidump to stop being modified`);
        } catch (e) {
          H.error(`Failed to load minidump`, e);
        } finally {
          try {
            await C.promises.unlink(t);
          } catch {
            H.warn(`Could not delete minidump`, t);
          }
        }
    });
  };
}
async function bS(e, t = 100) {
  if (t > 2e3) return;
  let n = (0, p.join)(e, `metadata`);
  try {
    (await C.promises.unlink(n), H.log(`Deleted Crashpad metadata file`, n));
  } catch (n) {
    n.code &&
      n.code == `EBUSY` &&
      setTimeout(async () => {
        await bS(e, t * 2);
      }, t);
  }
}
async function xS(e) {
  let t = [];
  for (let n of e)
    try {
      let e = await C.promises.readdir(n);
      t.push(...e.map((e) => (0, p.join)(n, e)));
    } catch {}
  return t;
}
function SS() {
  let e = y.app.getPath(`crashDumps`),
    t = process.platform === `win32` ? `reports` : `completed`,
    n = [(0, p.join)(e, t)];
  return (
    (process.platform === `darwin` || process.platform === `linux`) && n.push((0, p.join)(e, `pending`)),
    yS(async () => (await bS(e).catch((e) => H.error(e)), (await xS(n)).filter((e) => e.endsWith(`.dmp`))))
  );
}
var CS = J((e = {}) => {
  let t = e.maxMinidumpsPerSession || 10,
    n,
    r,
    i;
  function a() {
    (H.log(`Starting Electron crashReporter`),
      y.crashReporter.start({
        companyName: ``,
        ignoreSystemCrashHandler: !0,
        productName: y.app.name || y.app.getName(),
        submitURL: `https://f.a.k/e`,
        uploadToServer: !1,
        compress: !0,
      }));
  }
  function o(e) {
    function t(t) {
      setImmediate(async () => n?.set({ scope: t, event: await bx(e) }));
    }
    (mx((e) => {
      t(e);
    }),
      t(px()));
  }
  async function s(e, n) {
    t <= 0 && H.log(`Not sending minidumps because the limit has been reached`);
    let r = e.getOptions().enabled === !1 || t <= 0,
      a = !1;
    return (
      await i?.(r, async (e, r) => {
        a = !0;
        let i = e.crashpadAnnotations?.process_type?.replace(`-process`, ``),
          o = await n(i);
        if (e.crashpadAnnotations) {
          let t = Object.entries(e.crashpadAnnotations).reduce(
            (e, [t, n]) => ((e[`crashpad.${t}`] = n), e),
            {},
          );
          o.contexts = { ...o.contexts, electron: { ...o.contexts?.electron, ...t } };
        }
        t > 0 && (--t, Up(o, { attachments: [r] }));
      }),
      a
    );
  }
  async function c(e, t, n, r) {
    let { getRendererName: i } = t;
    await s(e, (e) => {
      let t = (e === `renderer` && i ? i(n) : e) || `unknown`;
      return (
        H.log(`'${t}' process '${r.reason}'`),
        {
          contexts: { electron: { crashed_url: cx(n.id)?.url || `unknown`, details: r } },
          level: `fatal`,
          platform: `native`,
          tags: { "event.environment": `native`, "event.process": t, "exit.reason": r.reason },
        }
      );
    });
  }
  async function l(e, t) {
    (H.log(`${t.type} process has ${t.reason}`),
      await s(e, (e) => ({
        contexts: { electron: { details: t } },
        level: `fatal`,
        platform: `native`,
        tags: { "event.environment": `native`, "event.process": e || t.type, "exit.reason": t.reason },
      })));
  }
  return {
    name: `SentryMinidump`,
    setup(e) {
      if (process.mas) return;
      (a(), (n = new zx(jx(), `scope_v3`, { scope: new Mu().getScopeData() })), (r = n.get()));
      try {
        i = SS();
      } catch (e) {
        H.error(`Failed to create minidump loader`, e);
      }
      let t = e.getOptions();
      if ((o(e), !t?.dsn))
        throw Error(`Attempted to enable Electron native crash reporter but no DSN was supplied`);
      (sx(),
        y.app.on(`render-process-gone`, async (n, r, i) => {
          Ax.includes(i.reason) && (await c(e, t, r, i));
        }),
        y.app.on(`child-process-gone`, async (t, n) => {
          Ax.includes(n.reason) && (await l(e, n));
        }),
        y.app.on(`diagnostic-minidump-created`, () => {
          s(e, (e) => ({
            level: `fatal`,
            platform: `native`,
            tags: { "event.environment": `native`, "event.process": e || `unknown` },
          })).catch((e) => H.error(`Failed to capture diagnostic minidumps`, e));
        }));
      let u;
      s(e, async (t) => {
        let n = {
            level: `fatal`,
            platform: `native`,
            tags: { "event.environment": `native`, "event.process": t || `unknown` },
          },
          i = await r;
        return (
          i &&
            (i.scope && _p(n, i.scope),
            (n.release = i.event?.release),
            (n.environment = i.event?.environment),
            (n.contexts = i.event?.contexts),
            (n.sdkProcessingMetadata = {
              dynamicSamplingContext: {
                trace_id: i.scope.propagationContext.traceId,
                release: i.event?.release,
                environment: i.event?.environment,
                public_key: e.getDsn()?.publicKey,
              },
            })),
          (u = await Jx()),
          n
        );
      })
        .then(async (e) => {
          e ? u && Yx(u) : await Xx();
        })
        .catch((e) => H.error(e));
    },
  };
});
function wS(e) {
  (delete e.sdkProcessingMetadata?.capturedSpanScope,
    delete e.sdkProcessingMetadata?.capturedSpanIsolationScope);
  for (let t of e.spans || []) delete t.spanRecorder;
}
function TS(e, t) {
  wS(t);
  let n = {
    ...e,
    ...t,
    contexts: {
      ...e.contexts,
      ...t.contexts,
      app: { ...e.contexts?.app, ...t.contexts?.app },
      device: { ...e.contexts?.device, ...t.contexts?.device },
    },
    tags: { ...e.tags, ...t.tags },
    sdk: { ...e.sdk, ...t.sdk },
  };
  return ((e.extra || t.extra) && (n.extra = { ...e.extra, ...t.extra }), n);
}
var ES = Hb(y.app.getAppPath());
function DS(e, t) {
  for (let n of e.exception?.values || [])
    for (let e of n.stacktrace?.frames || []) e.filename &&= xf(e.filename, t);
  for (let n of e.debug_meta?.images || []) n.type === `sourcemap` && (n.code_file = xf(n.code_file, t));
  e.transaction &&= xf(e.transaction, t);
  let { request: n = {} } = e;
  if (
    ((n.url &&= xf(n.url, t)),
    e.contexts?.feedback?.url &&
      typeof e.contexts.feedback.url == `string` &&
      (e.contexts.feedback.url = xf(e.contexts.feedback.url, t)),
    e.spans)
  )
    for (let n of e.spans) n.description?.startsWith(`file://`) && (n.description = xf(n.description, t));
  return e;
}
function OS(e, t, n) {
  let r = Cf(t[0]),
    i = !1;
  return (
    Tf(t, (t, a) => {
      if (a === `replay_event`) {
        i = !0;
        let [a, o] = t,
          s = W().getScopeData();
        ((o.breadcrumbs = s.breadcrumbs),
          (o.tags = s.tags),
          (o.user = s.user),
          (o.environment = e.environment),
          Array.isArray(o.urls) && (o.urls = o.urls.map((e) => xf(e, n))),
          o?.request?.url && (o.request.url = xf(o.request.url, n)),
          (r = wf(r, [a, o])));
      } else a === `replay_recording` && (r = wf(r, t));
    }),
    i ? r : t
  );
}
function kS(e, t) {
  for (let n of e.profile.frames)
    ((n.abs_path &&= xf(n.abs_path, t)),
      `filename` in n && typeof n.filename == `string` && (n.filename = xf(n.filename, t)),
      (n.module &&= ES(n.abs_path)));
}
function AS(e, t, n) {
  (n.release && (e.release = n.release), n.environment && (e.environment = n.environment));
  let r = e.profile;
  if (r?.frames)
    for (let e of r.frames)
      ((e.abs_path &&= xf(e.abs_path, t)), (e.filename &&= xf(e.filename, t)), (e.module &&= ES(e.abs_path)));
}
function jS(e, t, n) {
  let [r] = t,
    i = Cf({ ...r, sdk: { name: `sentry.javascript.electron`, version: hx } }),
    a = !1;
  return (
    Tf(t, (t, r) => {
      if (r === `profile_chunk`) {
        a = !0;
        let [r, o] = t;
        (AS(o, n, e), (i = wf(i, [r, o])));
      }
    }),
    a ? i : t
  );
}
function MS() {
  try {
    return require.resolve(`../../preload/default.js`);
  } catch {
    try {
      let e = (0, E.fileURLToPath)({}.url);
      return (0, p.resolve)(e, `..`, `..`, `..`, `..`, `preload`, `default.js`);
    } catch {}
  }
}
var NS = J(() => ({
    name: `PreloadInjection`,
    setup(e) {
      let t = e.getOptions();
      (t.ipcMode & xx.Classic) !== 0 &&
        y.app.once(`ready`, () => {
          let e = MS();
          if (e && typeof e == `string` && (0, p.isAbsolute)(e) && (0, C.existsSync)(e))
            for (let n of t.getSessions()) Px(n, e);
          else
            H.log(
              `The preload script could not be injected automatically. This is most likely caused by bundling of the main process`,
            );
        });
    },
  })),
  PS = J((e = {}) => ({
    name: `MainProcessSession`,
    setup() {
      (Kx(!!e.sendOnCreate), Qx());
    },
  })),
  FS = { screen: !0, deviceModelManufacturer: !1 };
function IS() {
  return new Promise((e) => {
    try {
      (0, S.exec)(
        `powershell -NoProfile "Get-CimInstance -ClassName Win32_ComputerSystem | ConvertTo-Json"`,
        (t, n) => {
          t && e({});
          try {
            let t = JSON.parse(n);
            if (t.Manufacturer || t.Model) {
              e({ manufacturer: t.Manufacturer, model: t.Model });
              return;
            }
          } catch {}
          e({});
        },
      );
    } catch {
      e({});
    }
  });
}
function LS() {
  return new Promise((e) => {
    try {
      (0, S.exec)(`system_profiler SPHardwareDataType -json`, (t, n) => {
        t && e({});
        try {
          let t = JSON.parse(n.trim());
          if (t.SPHardwareDataType?.[0]?.machine_model) {
            e({ manufacturer: `Apple`, model: t.SPHardwareDataType[0].machine_model });
            return;
          }
        } catch {}
        e({});
      });
    } catch {
      e({});
    }
  });
}
function RS() {
  return process.platform === `win32` ? IS() : process.platform === `darwin` ? LS() : Promise.resolve({});
}
var zS = J((e = {}) => {
  let t = {},
    n = e.deviceModelManufacturer,
    r = { ...FS, ...e };
  function i() {
    let e = y.screen.getPrimaryDisplay(),
      n = Math.floor(e.size.width * e.scaleFactor),
      r = Math.floor(e.size.height * e.scaleFactor);
    ((t.screen_density = e.scaleFactor), (t.screen_resolution = `${n}x${r}`));
  }
  async function a() {
    let { manufacturer: e, model: n } = await RS();
    (e || n) && ((t.manufacturer = e), (t.model = n));
  }
  return {
    name: `AdditionalContext`,
    setup() {
      r.screen &&
        y.app.whenReady().then(
          () => {
            (i(),
              y.screen.on(`display-metrics-changed`, () => {
                i();
              }));
          },
          () => {},
        );
    },
    processEvent: async (e) => (n && ((n = !1), await a()), TS(e, { contexts: { device: t } })),
  };
});
function BS(e) {
  let { method: t, options: n } =
      typeof e == `string`
        ? { method: `GET`, options: E.parse(e) }
        : { method: (e.method || `GET`).toUpperCase(), options: e },
    r = `url` in n ? n.url : void 0;
  if (!r) {
    let e = {};
    ((e.protocol = n.protocol || `http:`),
      n.host
        ? (e.host = n.host)
        : ((e.hostname = n.hostname ? n.hostname : `localhost`), n.port && (e.port = n.port)));
    let t = E.parse(n.path || `/`);
    ((e.pathname = t.pathname), (e.search = t.search), (e.hash = t.hash), (r = E.format(e)));
  }
  return { method: t, url: r };
}
function VS(e, t, n) {
  let r = new Mg(100),
    i = new Mg(100),
    a = (t, n) => {
      if (e.tracing === void 0) return !0;
      if (e.tracing === !1) return !1;
      let i = `${t}:${n}`,
        a = r.get(i);
      if (a !== void 0) return a;
      let o = e.tracing === !0 || e.tracing(t, n);
      return (r.set(i, o), o);
    },
    o = (e, t) => {
      let r = `${e}:${t}`,
        a = i.get(r);
      if (a !== void 0) return a;
      if (n) {
        let e = ru(t, n);
        return (i.set(r, e), e);
      }
      return !0;
    },
    s = (e, n, r, i, a) => {
      let o = Eg(a?.statusCode);
      if (
        (Lh(
          {
            type: `http`,
            category: `electron.net`,
            data: { url: r, method: n, status_code: a?.statusCode },
            level: o,
          },
          { event: e, request: i, response: a },
        ),
        !t)
      )
        return;
      let s = { "sentry.origin": `auto.electron.net`, statusCode: a?.statusCode };
      switch (o) {
        case `error`:
          Ig(kh`Electron.net request failed: ${n} ${r}`, s);
          break;
        case `warning`:
          Fg(kh`Electron.net request warning: ${n} ${r}`, s);
          break;
        default:
          Pg(kh`Electron.net request succeeded: ${n} ${r}`, s);
      }
    };
  return function (t) {
    return function (n) {
      let { url: r, method: i } = BS(n),
        c = t.apply(this, [n]);
      if (r.match(/sentry_key/) || c.getHeader(`x-sentry-auth`)) return c;
      let l = a(i, r)
        ? tp({
            name: `${i} ${r}`,
            onlyIfParent: !0,
            attributes: { url: r, type: `net.request`, "http.method": i },
            op: `http.client`,
          })
        : new pf();
      if ((l.setAttribute(Yu, `auto.http.electron.net`), o(i, r)))
        for (let [e, t] of Object.entries(Mh({ span: l })))
          (H.log(`[Tracing] Adding ${e} header ${t} to outgoing request to "${r}": `), c.setHeader(e, t));
      return c
        .once(`response`, function (t) {
          (e.breadcrumbs !== !1 && s(`response`, i, r, this, t),
            t.statusCode && nd(l, t.statusCode),
            l.end());
        })
        .once(`error`, function (t) {
          (e.breadcrumbs !== !1 && s(`error`, i, r, this, void 0), nd(l, 500), l.end());
        });
    };
  };
}
var HS = J((e = {}) => ({
    name: `ElectronNet`,
    setup(t) {
      let n = t.getOptions(),
        r = !!n?.enableLogs;
      (e.breadcrumbs !== !1 || e.tracing !== !1) &&
        Gl(y.net, `request`, VS(e, r, n?.tracePropagationTargets));
    },
  })),
  US = { breadcrumbs: Ax, events: [`abnormal-exit`, `launch-failed`, `integrity-failure`] };
function WS(e, t) {
  let n = `'${t}' process exited with '${e}'`,
    r = kh`'${t}' process exited with '${e}'`;
  switch (e) {
    case `abnormal-exit`:
    case `killed`:
      return { message: n, level: `warning`, log: Fg, messageFmt: r };
    case `crashed`:
    case `oom`:
    case `launch-failed`:
    case `integrity-failure`:
      return { message: n, level: `fatal`, log: Ig, messageFmt: r };
    default:
      return { message: n, level: `debug`, log: Pg, messageFmt: r };
  }
}
var GS = J((e = {}) => {
    let { breadcrumbs: t, events: n } = e,
      r = Nb(e),
      i = {
        breadcrumbs: Array.isArray(t) ? t : t === !1 ? [] : US.breadcrumbs,
        events: Array.isArray(n) ? n : n === !1 ? [] : US.events,
      };
    return {
      name: `ChildProcess`,
      setup(e) {
        r.setup?.(e);
        let { breadcrumbs: t, events: n } = i;
        if (Array.from(new Set([...t, ...n])).length > 0) {
          let r = e.getOptions(),
            i = !!r?.enableLogs;
          (y.app.on(`child-process-gone`, (e, r) => {
            let { reason: a } = r,
              { message: o, level: s, log: c, messageFmt: l } = WS(r.reason, r.type);
            (n.includes(a) && Hp(o, { level: s, tags: { "event.process": r.type } }),
              t.includes(a) &&
                (Lh({ type: `process`, category: `child-process`, message: o, level: s, data: r }),
                i &&
                  c(l, {
                    "sentry.origin": `auto.electron.child-process`,
                    exitCode: r.exitCode,
                    name: r.name,
                    serviceName: r.serviceName,
                  })));
          }),
            y.app.on(`render-process-gone`, (e, a, o) => {
              let { reason: s } = o,
                c = r?.getRendererName?.(a) || `renderer`,
                { message: l, level: u, log: d, messageFmt: f } = WS(o.reason, c);
              (n.includes(s) && Hp(l, u),
                t.includes(s) &&
                  (Lh({ type: `process`, category: `child-process`, message: l, level: u, data: o }),
                  i && d(f, { "sentry.origin": `auto.electron.child-process`, exitCode: o.exitCode })));
            }));
        }
      },
    };
  }),
  KS = J(() => ({
    name: `Screenshots`,
    async processEvent(e, t, n) {
      if (!n.getOptions().attachScreenshot) return e;
      if (!e.transaction && e.platform !== `native`) {
        let e = 1;
        for (let n of y.BrowserWindow.getAllWindows()) {
          t.attachments ||= [];
          try {
            if (!n.isDestroyed() && n.isVisible()) {
              let r = e === 1 ? `screenshot.png` : `screenshot-${e}.png`,
                i = await n.capturePage();
              (t.attachments.push({ filename: r, data: i.toPNG(), contentType: `image/png` }), (e += 1));
            }
          } catch (e) {
            H.error(`Error capturing screenshot`, e);
          }
        }
      }
      return e;
    },
  }));
function qS(e = {}, t, n) {
  if (e[t]) {
    let r = e[t];
    Array.isArray(r) ? r.push(n) : (e[t] = [r, n]);
  } else e[t] = n;
  return { responseHeaders: e };
}
function JS(e, t, n) {
  e.webRequest.onHeadersReceived((e, r) => {
    r(qS(e.responseHeaders, t, n));
  });
}
var YS;
function XS(e, t) {
  if (!YS) return;
  let n = t.event_id;
  (YS.set(n, t), e && (e.contexts = { ...e.contexts, profile: { profile_id: n } }));
}
var ZS = J(() => ({
    name: `RendererProfiling`,
    setup(e) {
      let t = e.getOptions();
      t.enableRendererProfiling &&
        ((YS = new Mg(10)),
        y.app.on(`ready`, () => {
          t.getSessions().forEach((e) => JS(e, `Document-Policy`, `js-profiling`));
        }),
        e.on?.(`beforeEnvelope`, (e) => {
          let n;
          if (
            (Tf(e, (e, t) => {
              if (t === `transaction`)
                for (let t = 1; t < e.length; t++) {
                  let r = e[t];
                  r?.contexts?.profile?.profile_id &&
                    ((n = r.contexts.profile.profile_id), delete r.contexts.profile);
                }
            }),
            !n)
          )
            return;
          let r = YS?.remove(n);
          r &&
            (kS(r, y.app.getAppPath()),
            (r.release = t.release || vx()),
            (r.environment = t.environment || yx()),
            e[1].push([{ type: `profile` }, r]));
        }));
    },
  })),
  QS = J(() => ({
    name: `NormalizePaths`,
    setup: (e) => {
      setImmediate(() => {
        e.on(`beforeEnvelope`, (e) => {
          Tf(e, (e, t) => {
            t === `profile` && kS(e[1], y.app.getAppPath());
          });
        });
      });
    },
    processEvent(e) {
      return DS(e, y.app.getAppPath());
    },
  }));
function $S() {
  return y.app.getAppMetrics().reduce((e, t) => e + t.memory.workingSetSize * 1024, 0);
}
var eC = J(() => ({
  name: `ElectronContext`,
  processEvent(e, t, n) {
    (delete e.contexts?.runtime,
      delete e.contexts?.app?.app_memory,
      e.request?.headers && delete e.request.headers[`User-Agent`]);
    let { release: r = vx(), environment: i = yx() } = n.getOptions();
    return TS(
      {
        contexts: {
          app: {
            app_name: y.app.name || y.app.getName(),
            app_version: y.app.getVersion(),
            build_type: process.mas ? `app-store` : process.windowsStore ? `windows-store` : void 0,
            app_memory: $S(),
            app_arch: process.arch,
          },
          browser: { name: `Chrome` },
          chrome: { name: `Chrome`, type: `runtime`, version: process.versions.chrome },
          device: { family: `Desktop` },
          node: { name: `Node`, type: `runtime`, version: process.versions.node },
          runtime: { name: `Electron`, version: process.versions.electron },
        },
        environment: i,
        release: r,
        tags: { "event.origin": `electron`, "event.environment": `javascript`, "event.process": `browser` },
      },
      e,
    );
  },
}));
function tC(e) {
  return {
    name: e.deviceString || `GPU`,
    active: e.active,
    id: `0x${e.deviceId.toString(16).padStart(4, `0`)}`,
    vendor_id: `0x${e.vendorId.toString(16).padStart(4, `0`)}`,
    vendor_name: e.vendorString,
    driver_version: e.driverVersion,
  };
}
var nC = J((e = { infoLevel: `basic` }) => {
    let t;
    return {
      name: `GpuContext`,
      processEvent: async (n) => {
        if (t === void 0) {
          let n = await y.app.getGPUInfo(e.infoLevel).catch(() => void 0);
          t = n ? n.gpuDevice.map(tC) : [];
        }
        if (t.length === 1) n.contexts = { ...n.contexts, gpu: t[0] };
        else if (t.length > 1) {
          n.contexts = { ...n.contexts };
          for (let e = 0; e < t.length; e++) {
            let r = t[e];
            ((r.type = `gpu`), (n.contexts[`gpu_${e + 1}`] = r));
          }
        }
        return n;
      },
    };
  }),
  rC = 30,
  iC = 50;
function aC(e, t, n, r) {
  let i = { filename: e, function: t === `<anonymous>` ? `?` : t, in_app: !0 };
  return (n !== void 0 && (i.lineno = n), r !== void 0 && (i.colno = r), i);
}
var oC = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
  sC =
    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  cC = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  lC = /at (.+?) ?\(data:(.+?),/,
  uC = [
    rC,
    (e) => {
      let t = e.match(lC);
      if (t) return { filename: `<data:${t[2]}>`, function: t[1] };
      let n = oC.exec(e);
      if (n) {
        let [, e, t, r] = n;
        return aC(e, `?`, +t, +r);
      }
      let r = sC.exec(e);
      if (r) {
        if (r[2] && r[2].indexOf(`eval`) === 0) {
          let e = cC.exec(r[2]);
          e && ((r[2] = e[1]), (r[3] = e[2]), (r[4] = e[3]));
        }
        let [e, t] = pC(r[1] || `?`, r[2]);
        return aC(t, e, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0);
      }
    },
  ],
  dC =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  fC = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
cl(uC, [
  iC,
  (e) => {
    let t = dC.exec(e);
    if (t) {
      if (t[3] && t[3].indexOf(` > eval`) > -1) {
        let e = fC.exec(t[3]);
        e && ((t[1] = t[1] || `eval`), (t[3] = e[1]), (t[4] = e[2]), (t[5] = ``));
      }
      let e = t[3],
        n = t[1] || `?`;
      return (([n, e] = pC(n, e)), aC(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0));
    }
  },
]);
var pC = (e, t) => {
    let n = e.indexOf(`safari-extension`) !== -1,
      r = e.indexOf(`safari-web-extension`) !== -1;
    return n || r
      ? [
          e.indexOf(`@`) === -1 ? `?` : e.split(`@`)[0],
          n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
        ]
      : [e, t];
  },
  mC = 50,
  [, hC] = uC,
  [, gC] = kg(),
  _C = (e, t = 0) => {
    let n = [];
    for (let r of e
      .split(
        `
`,
      )
      .slice(t)) {
      let e = hC(r),
        t = gC(r);
      if (
        (e && t?.in_app !== !1 ? n.push(e) : t && (t.module === void 0 && delete t.module, n.push(t)),
        n.length >= mC)
      )
        break;
    }
    return ul(n);
  },
  vC = cl(kg(Hb(y.app.getAppPath())));
async function yC(e) {
  if (e.isDestroyed()) return;
  let t = e.mainFrame;
  if (typeof t.collectJavaScriptCallStack != `function`)
    throw Error(`Native JavaScript stack collection is unavailable`);
  let n = await t.collectJavaScriptCallStack();
  if (n) {
    if (n.includes(`Website owner has not opted in`)) {
      H.warn(`Could not collect renderer stack frames.
A 'Document-Policy' header of 'include-js-call-stacks-in-crash-reports' must be set`);
      return;
    }
    return _C(n);
  }
}
function bC(e, ...t) {
  H.log(`[Renderer Event Loop Block] ${e}`, ...t);
}
function xC(e, t, n) {
  return () => {
    let r = performance.now(),
      i = Date.now(),
      a = n();
    yC(e)
      .then((e) => {
        if (e) {
          let o = n(),
            s = o.count - a.count;
          t(e, {
            native_stack_capture_duration_ms: Math.round(performance.now() - r),
            heartbeats_received_during_native_stack_capture: s,
            ...(s > 0 ? { latest_heartbeat_sent_after_native_stack_request_ms: o.sentAtMs - i } : {}),
          });
        }
      })
      .catch(() => {});
  };
}
function SC(e, t) {
  (bC(`Connecting to debugger`), e.debugger.attach(`1.3`));
  let n = new Map(),
    r = Hb(y.app.getAppPath());
  return (
    e.debugger.on(`message`, (i, a, o) => {
      if (a === `Debugger.scriptParsed`) {
        let e = o;
        n.set(e.scriptId, e.url);
      } else if (a === `Debugger.paused`) {
        let i = o;
        if (i.reason !== `other`) return;
        let a = [...i.callFrames];
        (e.debugger.sendCommand(`Debugger.resume`).then(null, () => {}),
          t(ul(a.map((e) => jg(e, n.get(e.location.scriptId), r)))));
      }
    }),
    e.debugger.sendCommand(`Debugger.enable`).catch(() => {}),
    () => {
      if (!e.isDestroyed())
        return (bC(`Pausing debugger to capture stack trace`), e.debugger.sendCommand(`Debugger.pause`));
    }
  );
}
function CC(e, t, n, r) {
  let i = y.BrowserWindow.fromWebContents(e),
    a = !1,
    o = !1,
    s = !1,
    c,
    l = 0,
    u;
  function d() {
    (clearTimeout(c),
      (c = void 0),
      a &&
        !o &&
        !s &&
        e.isFocused() &&
        (!i || (i.isVisible() && !i.isMinimized())) &&
        (c = setTimeout(n, t + 100)));
  }
  function f() {
    ((a = !1), clearTimeout(c));
    for (let [e, t, n] of p) e.off(t, n);
    r();
  }
  let p = [
    [e, `blur`, d],
    [
      e,
      `focus`,
      () => {
        ((a = !0), d());
      },
    ],
    [e, `destroyed`, f],
    [e, `render-process-gone`, f],
    [
      e,
      `did-start-navigation`,
      (e, t, n, r) => {
        r && !n && f();
      },
    ],
    [
      y.powerMonitor,
      `suspend`,
      () => {
        ((o = !0), d());
      },
    ],
    [
      y.powerMonitor,
      `resume`,
      () => {
        ((o = !1), d());
      },
    ],
    [
      y.powerMonitor,
      `lock-screen`,
      () => {
        ((s = !0), d());
      },
    ],
    [
      y.powerMonitor,
      `unlock-screen`,
      () => {
        ((s = !1), d());
      },
    ],
  ];
  if (i) for (let e of [`show`, `hide`, `minimize`, `restore`]) p.push([i, e, d]);
  for (let [e, t, n] of p) e.on(t, n);
  return {
    alive: (e) => {
      (l++, (u = e), d());
    },
    getHeartbeats: () => ({ count: l, sentAtMs: u }),
    enabled: (e) => {
      ((a = e), d());
    },
    dispose: f,
  };
}
var wC = `RendererEventLoopBlock`,
  TC = J((e = {}) => {
    let t = new Map(),
      n,
      r = !1;
    function i(e) {
      return n?.getRendererName?.(e);
    }
    function a(e, t, n, r) {
      Zx();
      let a = i(e) || `renderer`;
      Up({
        level: `error`,
        extra: r,
        exception: {
          values: [
            {
              type: `ApplicationNotResponding`,
              value: `Application Not Responding for at least ${t} ms`,
              stacktrace: { frames: n },
              mechanism: { type: `ANR` },
            },
          ],
        },
        tags: { "event.process": a },
      });
    }
    return {
      name: wC,
      setup: (i) => {
        ((n = i.getOptions()),
          i.on(`close`, () => {
            r = !0;
            for (let e of t.values()) e.dispose();
          }),
          kx >= 34 &&
            (y.app.commandLine.appendSwitch(
              `enable-features`,
              `DocumentPolicyIncludeJSCallStacksInCrashReports`,
            ),
            e.captureNativeStacktrace &&
              y.app.on(`ready`, () => {
                n?.getSessions().forEach((e) =>
                  JS(e, `Document-Policy`, `include-js-call-stacks-in-crash-reports`),
                );
              })));
      },
      createRendererEventLoopBlockStatusHandler: () => (n, i) => {
        if (r) return;
        let o = t.get(i);
        if (o !== void 0 || n.status === `visible`) {
          if (o === void 0) {
            bC(`Renderer sent first status message`, n.config);
            let r = i.id,
              s;
            (n.config.captureStackTrace &&
              (s = (e.captureNativeStacktrace ? xC : SC)(
                i,
                (e, t) => {
                  (bC(`Event captured with stack frames`),
                    a(i, n.config.anrThreshold, e, { ...t, electron_web_contents_id: r }));
                },
                () => o.getHeartbeats(),
              )),
              (o = CC(
                i,
                n.config.anrThreshold,
                () => {
                  (bC(`Watchdog timeout`),
                    s
                      ? s()
                      : (bC(`Capturing event`),
                        a(i, n.config.anrThreshold, void 0, { electron_web_contents_id: r })));
                },
                () => t.delete(i),
              )),
              t.set(i, o));
          }
          n.status === `alive`
            ? o.alive(n.sentAtMs)
            : (bC(`Renderer visibility changed '${n.status}'`), o.enabled(n.status === `visible`));
        }
      },
    };
  });
function EC(e) {
  return e.getIntegrationByName(wC)?.createRendererEventLoopBlockStatusHandler();
}
var DC = 32768;
function OC(e) {
  return new w.Readable({
    read() {
      (this.push(e), this.push(null));
    },
  });
}
function kC(e) {
  let { hostname: t, pathname: n, port: r, protocol: i, search: a } = new E.URL(e);
  return { method: `POST`, hostname: t, path: `${n}${a}`, port: parseInt(r, 10), protocol: i };
}
function AC(e) {
  return Im(e, jC(e.url, e.headers || {}));
}
function jC(e, t) {
  return (
    (t[`Content-Type`] = `application/x-sentry-envelope`),
    function (n) {
      return y.app.whenReady().then(
        () =>
          new Promise((r, i) => {
            let a = OC(n.body),
              o = { ...t };
            n.body.length > DC && ((o[`content-encoding`] = `gzip`), (a = a.pipe((0, ee.createGzip)())));
            let s = y.net.request(kC(e));
            for (let [e, t] of Object.entries(o)) s.setHeader(e, t);
            (s.on(`response`, (e) => {
              (e.on(`error`, i), e.on(`data`, () => {}), e.on(`end`, () => {}));
              let t = e.headers[`retry-after`] ?? null,
                n = e.headers[`x-sentry-rate-limits`] ?? null;
              r({
                statusCode: e.statusCode,
                headers: {
                  "retry-after": Array.isArray(t) ? t[0] || null : t,
                  "x-sentry-rate-limits": Array.isArray(n) ? n[0] || null : n,
                },
              });
            }),
              s.on(`error`, i),
              a.pipe(s));
          }),
      );
    }
  );
}
var MC = 864e5;
function NC(e, t) {
  let n = Date.now() - MC * t;
  return (e?.date?.getTime() || 0) < n;
}
function PC(e) {
  let t = e[0];
  if (typeof t.sent_at == `string`) return new Date(t.sent_at);
}
function FC(e) {
  function t(...e) {
    H.log(`[Offline Store]:`, ...e);
  }
  let n = {
      maxAgeDays: e.maxAgeDays || 30,
      maxQueueSize: e.maxQueueSize || 30,
      queuePath: e.queuePath || (0, p.join)(jx(), `queue`),
    },
    r = new Rx(n.queuePath, `queue-v2`, []);
  function i(e) {
    C.promises.unlink((0, p.join)(n.queuePath, e)).catch(() => {});
  }
  function a(e) {
    for (; e[0] && NC(e[0], n.maxAgeDays);) {
      let n = e.shift();
      (t(`Removing stale envelope`, n), i(n.id));
    }
  }
  async function o(e, o, s) {
    t(`${o}ing envelope into offline storage`);
    let c = U();
    try {
      let t = kf(e);
      (await C.promises.mkdir(n.queuePath, { recursive: !0 }),
        await C.promises.writeFile((0, p.join)(n.queuePath, c), t));
    } catch (e) {
      t(`Failed to save`, e);
    }
    await r.update((t) =>
      o === `push` && (a(t), t.length >= n.maxQueueSize)
        ? (i(c), t)
        : (t[o]({ id: c, date: s || PC(e) || new Date() }), t),
    );
  }
  let s;
  return {
    push: async (e) => {
      await o(e, `push`);
    },
    unshift: async (e) => {
      await o(e, `unshift`, s);
    },
    shift: async () => {
      t(`Popping envelope from offline storage`);
      let e;
      if ((await r.update((t) => (a(t), (e = t.shift()), t)), e))
        try {
          let t = await C.promises.readFile((0, p.join)(n.queuePath, e.id));
          return (i(e.id), (s = e.date), jf(t));
        } catch (e) {
          t(`Failed to read`, e);
        }
    },
  };
}
function IC(e = AC) {
  return (t) => Sh(e)({ flushAtStartup: !0, createStore: FC, ...t });
}
function LC(e) {
  let t,
    n = [],
    r;
  return (
    Tf(e, (e, i) => {
      if (i === `event` || i === `transaction` || i === `feedback`) t = Array.isArray(e) ? e[1] : void 0;
      else if (i === `attachment`) {
        let [t, r] = e;
        n.push({
          filename: t.filename,
          attachmentType: t.attachment_type,
          contentType: t.content_type,
          data: r,
        });
      } else i === `profile` && (r = e[1]);
    }),
    t ? [t, n, r] : void 0
  );
}
function RC(e) {
  let t;
  return (
    Tf(e, (e, n) => {
      n === `profile_chunk` && (t = e[1]);
    }),
    t
  );
}
async function zC(e) {
  let t = e.getIntegrationByName(`Context`),
    n = e.getIntegrationByName(`AdditionalContext`),
    r = {},
    i = {};
  ((r = (await t?.processEvent?.(r, i, e)) || r), (r = (await n?.processEvent?.(r, i, e)) || r));
  let a = {};
  return (
    r.contexts?.os?.name && (a[`os.name`] = r.contexts.os.name),
    r.contexts?.os?.version && (a[`os.version`] = r.contexts.os.version),
    r.contexts?.device?.brand && (a[`device.brand`] = r.contexts.device.brand),
    r.contexts?.device?.model && (a[`device.model`] = r.contexts.device.model),
    r.contexts?.device?.family && (a[`device.family`] = r.contexts.device.family),
    a
  );
}
var BC;
function VC(e) {
  return (
    BC === void 0 &&
      ((BC = {}),
      zC(e)
        .then((e) => {
          BC = e;
        })
        .catch(() => {})),
    BC || {}
  );
}
var HC, UC;
function WC() {
  ((HC ||= new Set()), (UC ||= new Map()));
  for (let e of y.webContents.getAllWebContents()) {
    let t = e.id;
    HC.has(t) ||
      e.isDestroyed() ||
      e.executeJavaScript(`window.__SENTRY_RENDERER_ID__`).then((n) => {
        n &&
          HC &&
          UC &&
          (HC.add(t),
          UC.set(n, t),
          e.once(`destroyed`, () => {
            (HC?.delete(t), UC?.delete(n));
          }));
      }, H.error);
  }
}
function GC(e, t, n, r, i) {
  let a = (i && e?.getRendererName?.(i)) || `renderer`;
  ((t.breadcrumbs = t.breadcrumbs || []),
    delete t.environment,
    delete t.sdk?.name,
    delete t.sdk?.version,
    delete t.sdk?.packages,
    n && (t.sdkProcessingMetadata = { ...t.sdkProcessingMetadata, dynamicSamplingContext: n }),
    Up(TS(t, { tags: { "event.process": a } }), { attachments: r }));
}
var KC;
function qC(e, t, n, r) {
  let i = jf(n),
    [a] = i,
    o = a.trace;
  o &&
    ((KC ||= e.getDsn()?.publicKey),
    (o.release = t.release),
    (o.environment = t.environment),
    (o.public_key = KC));
  let s = LC(i);
  if (s) {
    let [e, n, i] = s;
    (i && XS(e, i), GC(t, e, o, n, r));
  } else if (RC(i)) {
    let e = jS(t, i, y.app.getAppPath());
    K()?.getTransport()?.send(e);
  } else {
    let e = OS(t, i, y.app.getAppPath());
    K()?.getTransport()?.send(e);
  }
}
function JC(e) {
  return e != null && Object.keys(e).length > 0;
}
function YC(e, t) {
  let n;
  try {
    n = JSON.parse(t);
  } catch {
    H.warn(`sentry-electron received an invalid scope message`);
    return;
  }
  let r = W();
  (JC(n.user) && r.setUser(n.user), JC(n.tags) && r.setTags(n.tags), JC(n.extra) && r.setExtras(n.extra));
  for (let e of n.attachments || []) r.addAttachment(e);
  let i = n.breadcrumbs.pop();
  i && r.addBreadcrumb(i, e?.maxBreadcrumbs || 100);
}
function XC(e, t, n, r) {
  let i = (n && t?.getRendererName?.(n)) || `renderer`,
    a = r || {};
  (t.release && (a[`sentry.release`] = { value: t.release, type: `string` }),
    t.environment && (a[`sentry.environment`] = { value: t.environment, type: `string` }),
    (a[`sentry.sdk.name`] = { value: `sentry.javascript.electron`, type: `string` }),
    (a[`sentry.sdk.version`] = { value: hx, type: `string` }),
    (a[`electron.process`] = { value: i, type: `string` }));
  let o = VC(e);
  return (
    o[`os.name`] && (a[`os.name`] = { value: o[`os.name`], type: `string` }),
    o[`os.version`] && (a[`os.version`] = { value: o[`os.version`], type: `string` }),
    o[`device.brand`] && (a[`device.brand`] = { value: o[`device.brand`], type: `string` }),
    o[`device.model`] && (a[`device.model`] = { value: o[`device.model`], type: `string` }),
    o[`device.family`] && (a[`device.family`] = { value: o[`device.family`], type: `string` }),
    a
  );
}
function ZC(e, t, n, r) {
  ((n.attributes = XC(e, t, r, n.attributes)), gm(e, n));
}
function QC(e, t, n, r) {
  ((n.attributes = XC(e, t, r, n.attributes)), Tm(e, n));
}
function $C(e, t, n) {
  if (y.app.isReady())
    throw Error(`Sentry SDK should be initialized before the Electron app 'ready' event is fired`);
  let r = {
    scheme: t.namespace,
    privileges: { bypassCSP: !0, corsEnabled: !0, supportFetchAPI: !0, secure: !0 },
  };
  (y.protocol.registerSchemesAsPrivileged([r]),
    (y.protocol.registerSchemesAsPrivileged = new Proxy(y.protocol.registerSchemesAsPrivileged, {
      apply: (e, t, n) => {
        e([...n[0], r]);
      },
    })));
  let i = EC(e);
  y.app
    .whenReady()
    .then(() => {
      for (let r of n.getSessions())
        Nx(r.protocol, t.namespace, (r) => {
          let a = () => {
              let e = r.windowId ? UC?.get(r.windowId) : void 0;
              return e ? y.webContents.fromId(e) : void 0;
            },
            o = r.body;
          if (t.urlMatches(r.url, `start`)) WC();
          else if (t.urlMatches(r.url, `scope`) && o) YC(n, o.toString());
          else if (t.urlMatches(r.url, `envelope`) && o) qC(e, n, o, a());
          else if (t.urlMatches(r.url, `structured-log`) && o) ZC(e, n, JSON.parse(o.toString()), a());
          else if (t.urlMatches(r.url, `metric`) && o) QC(e, n, JSON.parse(o.toString()), a());
          else if (i && t.urlMatches(r.url, `status`) && o) {
            let e = a();
            if (e) {
              let t = JSON.parse(o.toString()).status;
              i(t, e);
            }
          }
        });
    })
    .catch((e) => H.error(e));
}
function ew(e, t, n) {
  (y.ipcMain.on(t.createKey(`start`), ({ sender: e }) => {
    let t = e.id;
    ((HC ||= new Set()),
      !HC.has(t) &&
        (e.isDestroyed() ||
          (HC.add(t),
          e.once(`destroyed`, () => {
            HC?.delete(t);
          }))));
  }),
    y.ipcMain.on(t.createKey(`scope`), (e, t) => YC(n, t)),
    y.ipcMain.on(t.createKey(`envelope`), ({ sender: t }, r) => qC(e, n, r, t)),
    y.ipcMain.on(t.createKey(`structured-log`), ({ sender: t }, r) => ZC(e, n, r, t)),
    y.ipcMain.on(t.createKey(`metric`), ({ sender: t }, r) => QC(e, n, r, t)));
  let r = EC(e);
  r && y.ipcMain.on(t.createKey(`status`), ({ sender: e }, t) => r(t, e));
}
function tw(e, t) {
  let n = Sx(t.ipcNamespace);
  ((t.ipcMode & xx.Protocol) > 0 && $C(e, n, t), (t.ipcMode & xx.Classic) > 0 && ew(e, n, t));
}
function nw(e) {
  H.log(`[Utility Process] ${e}`);
}
function rw() {
  y.utilityProcess?.fork &&
    (y.utilityProcess.fork = new Proxy(y.utilityProcess.fork, {
      apply: (e, t, n) => {
        let r = e.apply(t, n);
        function i() {
          let [, , e] = n;
          return e?.serviceName || `pid:${r.pid}`;
        }
        return (
          r.on(`message`, (e) => {
            if (Tx(e)) {
              nw(`SDK started in utility process '${i()}'`);
              let { port1: e, port2: t } = new y.MessageChannelMain();
              (t.on(`message`, (e) => {
                (e.data instanceof Uint8Array || typeof e.data == `string`) && iw(e.data);
              }),
                t.start(),
                r.postMessage(Ex(), [e]));
            }
          }),
          (r.on = new Proxy(r.on, {
            apply: (e, t, [n, r]) =>
              n === `message`
                ? e.apply(t, [
                    `message`,
                    (e) => {
                      if (!Tx(e)) return r(e);
                    },
                  ])
                : e.apply(t, [n, r]),
          })),
          r
        );
      },
    }));
}
function iw(e) {
  let t = jf(e),
    n = LC(t);
  if (n) {
    let [e, t] = n;
    aw(e, t);
  } else K()?.getTransport()?.send(t);
}
function aw(e, t) {
  (delete e.environment,
    delete e.release,
    delete e.sdk?.name,
    delete e.sdk?.version,
    delete e.sdk?.packages,
    Up(TS(e, { tags: { "event.process": `utility` } }), { attachments: t }));
}
function ow(e) {
  let t = [
    CS(),
    dx(),
    HS(),
    eC(),
    GS(),
    fx(),
    NS(),
    zS(),
    KS(),
    nC(),
    TC(),
    PS(),
    Wh(),
    Vh(),
    sg(),
    Cg(),
    Zb(),
    Eb(),
    ab(),
    xb(),
    Oy({ cloudResource: !1 }),
    QS(),
  ];
  return (e.attachScreenshot && t.push(KS()), e.enableRendererProfiling && t.push(ZS()), t);
}
function sw(e) {
  let [t = 0] = process.versions.electron.split(`.`).map(Number);
  if (t < 23) throw Error(`Sentry Electron SDK requires Electron 23 or higher`);
  let n = {
      _metadata: { sdk: _x(!!e.sendDefaultPii) },
      ipcMode: xx.Both,
      ipcNamespace: `sentry-ipc`,
      release: vx(),
      environment: yx(),
      defaultIntegrations: ow(e),
      transport: IC(),
      transportOptions: {},
      getSessions: () => [y.session.defaultSession],
      ...e,
      stackParser: ll(e.stackParser || vC),
      includeServerName: !1,
    },
    r = { ...n, integrations: am(n) };
  (r.debug && H.enable(), lw(r), rw(), Bv());
  let i = W();
  i.update(r.initialScope);
  let a = new Wb(r);
  (r.sendDefaultPii === !0 && a.on(`beforeSendSession`, Ah),
    a.on(`beforeCaptureLog`, (e) => {
      e.attributes = { ...e.attributes, "electron.process": `browser`, ...VC(a) };
    }),
    i.setClient(a),
    a.init(),
    tw(a, r),
    r.skipOpenTelemetrySetup || rx(a));
}
var cw = [
  { userAdded: `ElectronMinidump`, toRemove: `SentryMinidump` },
  { userAdded: `BrowserWindowSession`, toRemove: `MainProcessSession` },
];
function lw(e) {
  for (let { userAdded: t, toRemove: n } of cw)
    e.integrations.some((e) => e.name === t) && (e.integrations = e.integrations.filter((e) => e.name !== n));
}
var uw = l.a(`owl-browser-crash-counter`),
  dw = null,
  fw = !1,
  pw = 0,
  mw = class extends c.Nt {
    delivery = null;
    listener = null;
    constructor(e) {
      (super(), e.once(`destroyed`, () => this[Symbol.dispose]()));
    }
    subscribe(e) {
      (this.unsubscribe(), (this.listener = e.dup()), this.listener.onRpcBroken(() => this.unsubscribe()));
      let t = this.listener;
      ((this.delivery = async (e) => {
        try {
          var n = a.jr();
          await n.u(t(e));
        } catch (e) {
          n.e = e;
        } finally {
          n.d();
        }
      }),
        gw(this.delivery));
    }
    unsubscribe() {
      (dw === this.delivery && gw(null),
        (this.delivery = null),
        this.listener?.[Symbol.dispose](),
        (this.listener = null));
    }
    [Symbol.dispose]() {
      this.unsubscribe();
    }
  };
function hw() {
  ((pw += 1), _w());
}
function gw(e) {
  ((dw = e), _w());
}
async function _w() {
  if (dw == null || pw === 0 || fw) return;
  fw = !0;
  let e = dw,
    t = pw,
    n = !1;
  try {
    (await e(t), (pw -= t), (n = !0));
  } catch {
    uw().info(`Failed to deliver Owl browser crash counter`);
  } finally {
    fw = !1;
  }
  pw > 0 && (n || dw !== e) && _w();
}
var vw = `event.minidump`,
  yw = `.dmp`,
  bw = `_sidecar.json`;
function xw(e, t) {
  if (e === `win32`) return [g.win32.join(t, `reports`)];
  let n = [g.posix.join(t, `completed`)];
  return ((e === `darwin` || e === `linux`) && n.push(g.posix.join(t, `pending`)), n);
}
function Sw(e = {}) {
  let t = e.maxMinidumpAttachments;
  return (n, r) => {
    if (!r.attachments?.some(({ attachmentType: e }) => e === vw)) return n;
    let i = Cw(r, e),
      a = n.contexts?.electron?.[`crashpad.ptype`],
      o = i?.ptype ?? (typeof a == `string` ? a : void 0);
    if (o == null) return null;
    if ((Ow(n, i, o), i?.ptype === `browser` && i.capture_kind === `crash` && hw(), t != null)) {
      let e = t;
      ((r.attachments = r.attachments?.filter((t) => t.attachmentType !== vw || (e !== 0 && (--e, !0)))),
        (t = e));
    }
    return n;
  };
}
function Cw(e, t) {
  let n = ww(t);
  for (let t of e.attachments ?? []) {
    if (t.attachmentType !== vw) continue;
    let e = Ew(t.filename, n);
    if (e != null) return e;
  }
  return null;
}
function ww(e) {
  let t = e.crashDumpsPath ?? Tw(e.app);
  return t == null ? [] : xw(e.platform ?? process.platform, t);
}
function Tw(e) {
  try {
    return e?.getPath(`crashDumps`);
  } catch {
    return;
  }
}
function Ew(e, t) {
  let n = Dw(e);
  if (n == null) return null;
  let r = [...new Set(t.map((e) => (0, g.join)(e, n)))].sort();
  for (let e of r)
    if ((0, h.existsSync)(e))
      try {
        let t = JSON.parse((0, h.readFileSync)(e, `utf8`));
        if (typeof t != `object` || !t || Array.isArray(t)) continue;
        let n = `capture_kind` in t ? t.capture_kind : void 0,
          r = `ptype` in t ? t.ptype : void 0,
          i = `osarch` in t ? t.osarch : void 0;
        return {
          capture_kind: typeof n == `string` ? n : void 0,
          osarch: typeof i == `string` ? i : void 0,
          ptype: typeof r == `string` ? r : void 0,
        };
      } catch {
        continue;
      }
  return null;
}
function Dw(e) {
  return e.toLowerCase().endsWith(yw) ? `${e.slice(0, -4)}${bw}` : null;
}
function Ow(e, t, n) {
  let r = e.tags ?? {};
  ((e.tags = r), (r[`minidump.source`] = `owl`));
  let i = t?.capture_kind === `crash` || t?.capture_kind === `dump_without_crashing`;
  i && (r[`minidump.capture_kind`] = t.capture_kind);
  let a = r[`event.process`];
  ((a == null || a === `unknown`) && (r[`event.process`] = n),
    t?.capture_kind === `dump_without_crashing`
      ? ((e.level = `error`), (r[`exit.reason`] = `dump_without_crashing`))
      : (r[`exit.reason`] ??= `crashed`));
  let o = e.contexts ?? {};
  e.contexts = o;
  let s = o.electron ?? {};
  ((o.electron = s),
    t?.ptype != null && s[`crashpad.ptype`] == null && (s[`crashpad.ptype`] = t.ptype),
    t?.osarch != null && s[`crashpad.osarch`] == null && (s[`crashpad.osarch`] = t.osarch),
    i && (s[`crashpad.capture_kind`] = t.capture_kind));
}
var kw = (0, m.promisify)(ae.gzip);
function Aw(e) {
  return (t) =>
    Im(t, async ({ body: n }) => {
      await y.app.whenReady();
      let r = n.length > 32768,
        i = r ? await kw(n) : n,
        a = await e.fetch(t.url, {
          method: `POST`,
          headers: {
            ...t.headers,
            "Content-Type": `application/x-sentry-envelope`,
            ...(r ? { "Content-Encoding": `gzip` } : {}),
          },
          body: typeof i == `string` ? i : new Uint8Array(i),
          redirect: `error`,
          signal: AbortSignal.timeout(1e4),
        });
      return (
        await a.body?.cancel(),
        {
          statusCode: a.status,
          headers: {
            "retry-after": a.headers.get(`retry-after`),
            "x-sentry-rate-limits": a.headers.get(`x-sentry-rate-limits`),
          },
        }
      );
    });
}
var jw = 0.001,
  Mw = 2097152,
  Nw = Promise.withResolvers(),
  Pw = Nw.promise,
  Fw = { addBreadcrumb: Lh, captureException: Vp, captureMessage: Hp, setUser: Gp },
  Iw = {
    codexAppSessionId: n.o,
    buildFlavor: n.i.resolve(),
    buildNumber: Gn.value,
    appVersion: y.app.getVersion(),
    desktopTraceSampleRate: process.env.CODEX_OTEL_TRACES_ENDPOINT == null ? 0 : 1,
    dsn: he,
  };
function Lw(e, t) {
  if (!e) {
    Nw.resolve(!1);
    return;
  }
  Rw();
  let r = a.Di(Iw.appVersion),
    i = Iw.buildFlavor === n.i.Prod,
    o = !i,
    s = !i || Math.random() < jw,
    c;
  i && (c = +!!s);
  let l = _e(r.version);
  (sw({
    ipcMode: xx.Classic,
    dsn: Iw.dsn,
    transport: IC(Aw(t)),
    environment: Iw.buildFlavor,
    release: l,
    dist: Iw.buildNumber ?? void 0,
    beforeBreadcrumb: ge,
    beforeSend: Sw({ app: y.app, maxMinidumpAttachments: c }),
    tracesSampleRate: 0,
    integrations: (e) => [
      ...e.filter(
        ({ name: e }) =>
          e !== `ChildProcess` &&
          e !== `Console` &&
          e !== `SentryMinidump` &&
          e !== `ElectronMinidump` &&
          e !== `RendererEventLoopBlock`,
      ),
      TC({ captureNativeStacktrace: !0 }),
      CS(),
      GS({
        breadcrumbs: [`clean-exit`, `abnormal-exit`, `killed`, `crashed`, `oom`, `integrity-failure`],
        events: [`abnormal-exit`, `integrity-failure`],
      }),
      Cg({ levels: [`warn`, `error`] }),
      bg({ root: y.app.isPackaged ? y.app.getAppPath() : process.cwd(), prefix: `app:///` }),
    ],
  }),
    Wp(`sessionId`, n.o),
    Wp(`preRelease`, o),
    Wp(`minidumpAttachmentUploadEnabled`, s),
    Wp(`buildFlavor`, Iw.buildFlavor),
    Wp(`bundle`, `electron`),
    Wp(`host`, `app`),
    zw(),
    Nw.resolve(!0));
}
function Rw() {
  let e = (0, g.join)(y.app.getPath(`userData`), `sentry`, `scope_v3.json`);
  try {
    (0, h.statSync)(e).size > Mw && (0, h.unlinkSync)(e);
  } catch {}
}
function zw() {
  let e = new Set();
  function t(t, n, r, i) {
    let a = [`launch-failed`, t, n, String(r)],
      o = a.join(`\0`);
    e.has(o) ||
      (e.add(o),
      Hp(`Electron process launch failed`, {
        fingerprint: a,
        level: `fatal`,
        tags: {
          "event.process": t,
          "exit.code": r,
          "exit.reason": `launch-failed`,
          "process.name": n,
          ...(i == null ? {} : { "exit.last_error": i }),
        },
      }));
  }
  (y.app.on(`child-process-gone`, (e, n) => {
    n.reason === `launch-failed` && t(n.type, n.serviceName ?? n.name ?? n.type, n.exitCode, n.lastError);
  }),
    y.app.on(`render-process-gone`, (e, n, r) => {
      r.reason === `launch-failed` && t(`renderer`, n.getType(), r.exitCode);
    }));
}
function Bw(e) {
  e === `light` || e === `dark` ? (y.nativeTheme.themeSource = e) : (y.nativeTheme.themeSource = `system`);
}
var Vw = `.codex-global-state.json`,
  Hw = `config.toml`;
function Uw(e) {
  return new c.D((0, g.join)(e, Vw));
}
async function Ww(e, t) {
  (e.set(c.O, t), await e.flush());
}
function Gw(e, t = !1) {
  return {
    core: t || e.get(`electron-windows-core-runtime-frameworks-enabled`) === !0,
    primary: t || e.get(`electron-windows-primary-runtime-frameworks-enabled`) === !0,
  };
}
function Kw(e, t) {
  return process.platform === `win32` &&
    t.kind === `local` &&
    !s.xt() &&
    e.get(`electron-prefer-mxc-enabled`) === !0
    ? [`features.prefer_mxc=true`]
    : [];
}
async function qw(e, t) {
  (e.set(c.F, t), await e.flush());
}
async function Jw(e, t) {
  (e.set(c.B, t.core), e.set(c.V, t.primary), await e.flush());
}
async function Yw({ moduleDir: e }) {
  a.Yr();
  let t = s.lt(),
    n = process.env.BUILD_FLAVOR ?? (process.env.NODE_ENV === `production` ? `prod` : `dev`),
    r = (0, g.join)(
      t,
      `sqlite`,
      n === `prod` ? `codex-history-snapshots.db` : `codex-history-snapshots-${n}.db`,
    );
  await Promise.allSettled([``, `-wal`, `-shm`, `-journal`].map((e) => (0, b.rm)(`${r}${e}`, { force: !0 })));
  let o = (0, g.join)(e, `preload.js`),
    l = (0, g.join)(e, `..`, `..`),
    u = (0, g.join)(l, `..`),
    d = Uw(t),
    f = d.getStateFilePath();
  (0, h.existsSync)(f) ||
    (0, h.existsSync)(`${f}.bak`) ||
    (d.set(i.vs.DESKTOP_FIRST_SEEN_AT_MS, Date.now()), d.update(c.P, (e) => ({ ...e, [ce]: !0 })));
  let p = new c.l((0, g.join)(t, Hw), d),
    m =
      process.platform === `win32` && p.getEffective(i.H.runCodexInWsl.key) === !0 && (await s.ht()) != null;
  s.bt(() => m);
  let _ = await s.ut({ preferWsl: m });
  return (
    Bw(p.getEffective(i.X.theme.key) ?? `system`),
    {
      codexHome: t,
      executionCodexHome: _,
      preloadPath: o,
      desktopRoot: l,
      repoRoot: u,
      globalState: d,
      settingsStore: p,
    }
  );
}
var Xw = class {
  checks = [];
  customChecks = [];
  registerCheck(e) {
    this.customChecks.push(e);
  }
  register(e, t) {
    this.checks.push(async (n) => {
      let [r, i] = await Promise.all([e, t(n)]);
      return !(0, Be.default)(r, i);
    });
  }
  async hasChanges(e) {
    if (this.customChecks.some((e) => e())) return !0;
    let t = await e();
    return (await Promise.all(this.checks.map((e) => e(t)))).some((e) => e);
  }
};
function Zw(e) {
  return e >= 48 && e <= 57 ? e - 48 : e >= 97 && e <= 102 ? e - 87 : e - 55;
}
function Qw(e) {
  let t = new Uint8Array(e.length / 2),
    n = 0;
  for (let r = 0; r < e.length; r += 2) {
    let i = Zw(e.charCodeAt(r)),
      a = Zw(e.charCodeAt(r + 1));
    t[n++] = (i << 4) | a;
  }
  return t;
}
L();
function $w(e) {
  let t = BigInt(1e9);
  return BigInt(Math.trunc(e[0])) * t + BigInt(Math.trunc(e[1]));
}
function eT(e) {
  return { low: Number(BigInt.asUintN(32, e)), high: Number(BigInt.asUintN(32, e >> BigInt(32))) };
}
function tT(e) {
  return eT($w(e));
}
function nT(e) {
  return $w(e).toString();
}
var rT = typeof BigInt < `u` ? nT : na;
function iT(e) {
  return e;
}
function aT(e) {
  if (e !== void 0) return Qw(e);
}
var oT = { encodeHrTime: tT, encodeSpanContext: Qw, encodeOptionalSpanContext: aT };
function sT(e) {
  if (e === void 0) return oT;
  let t = e.useLongBits ?? !0,
    n = e.useHex ?? !1;
  return {
    encodeHrTime: t ? tT : rT,
    encodeSpanContext: n ? iT : Qw,
    encodeOptionalSpanContext: n ? iT : aT,
  };
}
function cT(e) {
  let t = { attributes: uT(e.attributes), droppedAttributesCount: 0 },
    n = e.schemaUrl;
  return (n && n !== `` && (t.schemaUrl = n), t);
}
function lT(e) {
  return { name: e.name, version: e.version };
}
function uT(e) {
  return Object.keys(e).map((t) => dT(t, e[t]));
}
function dT(e, t) {
  return { key: e, value: fT(t) };
}
function fT(e) {
  let t = typeof e;
  return t === `string`
    ? { stringValue: e }
    : t === `number`
      ? Number.isInteger(e)
        ? { intValue: e }
        : { doubleValue: e }
      : t === `boolean`
        ? { boolValue: e }
        : e instanceof Uint8Array
          ? { bytesValue: e }
          : Array.isArray(e)
            ? { arrayValue: { values: e.map(fT) } }
            : t === `object` && e != null
              ? { kvlistValue: { values: Object.entries(e).map(([e, t]) => dT(e, t)) } }
              : {};
}
var pT = 256,
  mT = 512;
function hT(e, t) {
  let n = (e & 255) | pT;
  return (t && (n |= mT), n);
}
function gT(e, t) {
  let n = e.spanContext(),
    r = e.status,
    i = e.parentSpanContext?.spanId ? t.encodeSpanContext(e.parentSpanContext?.spanId) : void 0;
  return {
    traceId: t.encodeSpanContext(n.traceId),
    spanId: t.encodeSpanContext(n.spanId),
    parentSpanId: i,
    traceState: n.traceState?.serialize(),
    name: e.name,
    kind: e.kind == null ? 0 : e.kind + 1,
    startTimeUnixNano: t.encodeHrTime(e.startTime),
    endTimeUnixNano: t.encodeHrTime(e.endTime),
    attributes: uT(e.attributes),
    droppedAttributesCount: e.droppedAttributesCount,
    events: e.events.map((e) => vT(e, t)),
    droppedEventsCount: e.droppedEventsCount,
    status: { code: r.code, message: r.message },
    links: e.links.map((e) => _T(e, t)),
    droppedLinksCount: e.droppedLinksCount,
    flags: hT(n.traceFlags, e.parentSpanContext?.isRemote),
  };
}
function _T(e, t) {
  return {
    attributes: e.attributes ? uT(e.attributes) : [],
    spanId: t.encodeSpanContext(e.context.spanId),
    traceId: t.encodeSpanContext(e.context.traceId),
    traceState: e.context.traceState?.serialize(),
    droppedAttributesCount: e.droppedAttributesCount || 0,
    flags: hT(e.context.traceFlags, e.context.isRemote),
  };
}
function vT(e, t) {
  return {
    attributes: e.attributes ? uT(e.attributes) : [],
    name: e.name,
    timeUnixNano: t.encodeHrTime(e.time),
    droppedAttributesCount: e.droppedAttributesCount || 0,
  };
}
function yT(e, t) {
  return { resourceSpans: xT(e, sT(t)) };
}
function bT(e) {
  let t = new Map();
  for (let n of e) {
    let e = t.get(n.resource);
    e || ((e = new Map()), t.set(n.resource, e));
    let r = `${n.instrumentationScope.name}@${n.instrumentationScope.version || ``}:${n.instrumentationScope.schemaUrl || ``}`,
      i = e.get(r);
    (i || ((i = []), e.set(r, i)), i.push(n));
  }
  return t;
}
function xT(e, t) {
  let n = bT(e),
    r = [],
    i = n.entries(),
    a = i.next();
  for (; !a.done;) {
    let [e, n] = a.value,
      o = [],
      s = n.values(),
      c = s.next();
    for (; !c.done;) {
      let e = c.value;
      if (e.length > 0) {
        let n = e.map((e) => gT(e, t));
        o.push({
          scope: lT(e[0].instrumentationScope),
          spans: n,
          schemaUrl: e[0].instrumentationScope.schemaUrl,
        });
      }
      c = s.next();
    }
    let l = cT(e),
      u = { resource: l, scopeSpans: o, schemaUrl: l.schemaUrl };
    (r.push(u), (a = i.next()));
  }
  return r;
}
var ST = {
  serializeRequest: (e) => {
    let t = yT(e, { useHex: !0, useLongBits: !1 });
    return new TextEncoder().encode(JSON.stringify(t));
  },
  deserializeResponse: (e) => {
    if (e.length === 0) return {};
    let t = new TextDecoder();
    return JSON.parse(t.decode(e));
  },
};
L();
var CT = new Ra(),
  wT = null,
  TT = null,
  ET = new f_(0),
  DT = 0,
  OT = !1,
  kT = {
    shouldSample: (e, t, n, r, i, a) =>
      a?.some(({ context: e }) => (e.traceFlags & Y.TraceFlags.SAMPLED) !== 0)
        ? { decision: c_.RECORD_AND_SAMPLED }
        : ET.shouldSample(e, t),
    toString: () => ET.toString(),
  };
function AT(e, t, n) {
  (Y.context.setGlobalContextManager(new zb()),
    (DT = e.desktopTraceSampleRate),
    (OT = t === `electron-main`),
    (ET = new f_(DT)),
    n != null && (wT = n));
  let r = new A_({
    resource: t_({
      "codex.build_flavor": e.buildFlavor,
      "codex.build_number": e.buildNumber ?? `unknown`,
      "codex.process": t,
      "os.type": process.platform,
      "service.name": `codex-desktop`,
      "service.version": e.appVersion,
    }),
    sampler: new d_({ root: kT }),
    spanProcessors: [
      new x_(LT(), {
        exportTimeoutMillis: 1e4,
        maxExportBatchSize: 256,
        maxQueueSize: 1024,
        scheduledDelayMillis: 5e3,
      }),
    ],
  });
  TT = r;
  let i = r.getTracer(`codex-desktop`);
  s.Qt({
    getActiveSpanContext: () => {
      let e = Y.trace.getActiveSpan();
      if (e == null) return null;
      let { spanId: t, traceFlags: n, traceId: r } = e.spanContext();
      return (n & Y.TraceFlags.SAMPLED) === 0 ? null : { spanId: t, traceId: r };
    },
    getActiveTraceContext: () => {
      let e = {};
      return (
        CT.inject(Y.context.active(), e, Y.defaultTextMapSetter),
        e.traceparent == null
          ? null
          : { traceparent: e.traceparent, ...(e.tracestate == null ? {} : { tracestate: e.tracestate }) }
      );
    },
    runWithTraceContext: (e, t) =>
      e == null ? t() : Y.context.with(CT.extract(Y.context.active(), e, Y.defaultTextMapGetter), t),
    setActiveSpanAttributes: (e) => {
      Y.trace.getActiveSpan()?.setAttributes(e);
    },
    setActiveSpanOutcome: (e, t) => {
      let n = Y.trace.getActiveSpan();
      n != null &&
        (n.setAttribute(`codex.outcome`, e),
        e === `failure` &&
          (n.setAttribute(`error.category`, t ?? `operation`),
          n.setAttribute(`error.type`, `operation_failed`),
          n.setStatus({ code: Y.SpanStatusCode.ERROR })));
    },
    startSpan: (e, t) => {
      let n =
        e.root === !0
          ? Y.ROOT_CONTEXT
          : e.trace == null
            ? Y.context.active()
            : CT.extract(Y.context.active(), e.trace, Y.defaultTextMapGetter);
      return i.startActiveSpan(
        e.name,
        {
          attributes: { "codex.operation": e.op, ...e.attributes },
          links: e.links?.flatMap((e) => {
            let t = Y.trace.getSpanContext(CT.extract(Y.ROOT_CONTEXT, e, Y.defaultTextMapGetter));
            return t == null ? [] : [{ context: t }];
          }),
          startTime: e.startTimeMs,
        },
        n,
        (n) => {
          let r = (t) => {
            if (t != null) {
              let e = s.Zt(t);
              (n.setAttributes(e),
                e[`codex.outcome`] === `failure` && n.setStatus({ code: Y.SpanStatusCode.ERROR }));
            }
            n.end(e.endTimeMs);
          };
          try {
            let e = t();
            return (
              e instanceof Promise
                ? e.then(
                    () => r(),
                    (e) => r(e),
                  )
                : r(),
              e
            );
          } catch (e) {
            throw (r(e), e);
          }
        },
      );
    },
  });
}
function jT(e) {
  wT = e;
}
function MT(e) {
  process.env.CODEX_OTEL_TRACES_ENDPOINT ??
    ((DT = Number.isFinite(e) ? Math.min(1, Math.max(0, e)) : 0), (ET = new f_(DT)));
}
function NT() {
  return DT > 0;
}
function PT() {
  return DT;
}
async function FT(e) {
  if (!OT || NT()) {
    if (wT == null) throw Error(`Desktop trace exporter is unavailable`);
    await wT(e);
  }
}
async function IT() {
  await TT?.forceFlush();
}
function LT() {
  return {
    export: (e, t) => {
      let n = ST.serializeRequest(e);
      if (n == null) {
        t({ code: ma.FAILED });
        return;
      }
      FT(n).then(
        () => t({ code: ma.SUCCESS }),
        (e) => t({ code: ma.FAILED, error: e }),
      );
    },
    shutdown: async () => {},
  };
}
var RT = null;
function zT(e) {
  if (RT) return RT;
  let r = Date.now();
  if (process.env.CODEX_DESKTOP_NETWORK_POLICY != null)
    throw Error(
      `Restricted Desktop networking is not available in this runtime. Use app-server application requirements instead of CODEX_DESKTOP_NETWORK_POLICY.`,
    );
  let i = new Bn(t.c(), c.t());
  (s.it((e, t) => i.fetch(e, t)), i.observeSessions());
  let o = new a.c(),
    u = new Xw(),
    d = (e) => e.analytics?.enabled !== !1,
    f = o.get().then(d);
  (u.register(
    f.catch(() => !1),
    d,
  ),
    zn(f),
    f
      .then(
        (e) => Lw(e, i),
        () => Lw(!1, i),
      )
      .catch((e) => {
        l.r().warning(`Failed to initialize desktop error reporting`, { safe: {}, sensitive: { error: e } });
      }),
    AT(Iw, `electron-main`));
  let p = e ?? n.i.resolve(),
    m = t._(p),
    h = Ce((e, t, n) => {
      Fw.captureException(e, {
        fingerprint: n.groupingFingerprint,
        level: t === `fatal` ? `fatal` : `error`,
        tags: n.tags,
        extra: n.extra,
      });
    }),
    _ = (e) => {
      h.reportNonFatal(`Datadog log sink failure`, {
        kind: `datadog-log-sink-failure`,
        tags: { failureType: e.type, reason: e.reason },
        extra: { failure: e },
      });
    },
    v = new a.ht({
      analyticsEnabled: f,
      waitUntilReady: () => i.whenReady(),
      fetchImpl: (e, t) => i.fetch(e, t),
      reportFailure: _,
    });
  y.app.once(`quit`, () => {
    (v.dispose(), i.dispose());
  });
  let b = new a.mt({
    source: `codex-desktop`,
    env: p,
    codexAppSessionId: n.o,
    platform: process.platform,
    buildInfo: { version: y.app.getVersion(), buildNumber: Gn.value },
    reportFailure: _,
    transport: v,
  });
  t.m(h, b, m);
  let x = [],
    S = new Set(),
    C = new Set(),
    w = 0,
    T = !1;
  y.app.once(`quit`, () => {
    T = !0;
    for (let e of S) e(!1);
    S.clear();
    for (let e of C) e(!1);
    (C.clear(), (x.length = 0));
  });
  let E = null,
    ee = () => {
      if (RT?.windowsActivation === `startup-task`) {
        RT.windowsActivation = `interactive`;
        for (let e of S) e(!0);
        (S.clear(), RT.onInteractiveLaunch?.());
      }
    },
    D = () => {
      if (process.platform === `win32` && y.app.isPackaged) {
        y.app.exit(0);
        return;
      }
      y.app.quit();
    },
    te = (e) => {},
    O = () => {},
    ne = (e) => {},
    re = (e) => {},
    k = (e) => {},
    A = (e) => {},
    ie = (e) => {},
    ae = (e) => !1,
    j =
      p === n.i.Prod && process.platform === `darwin` && n.a(`codexReleaseChannel`) !== `prod-internal`
        ? new Jn((0, g.join)(y.app.getPath(`appData`), n.r(p)))
        : null;
  return (
    (RT = {
      windowsActivation: null,
      onInteractiveLaunch: null,
      waitForInteractiveLaunch: () =>
        T
          ? Promise.resolve(!1)
          : RT?.windowsActivation === `startup-task`
            ? new Promise((e) => S.add(e))
            : Promise.resolve(!0),
      get isBackgroundLaunch() {
        return this.windowsActivation === `startup-task`;
      },
      applicationNetwork: i,
      startedAtMs: r,
      buildFlavor: p,
      desktopSentry: Fw,
      errorReporter: h,
      datadogLogger: b,
      maxLogLevel: m,
      startupConfig: o,
      startupPolicies: u,
      appUpdates: new jn({
        enableUpdater: n.i.shouldIncludeUpdater(p, process.platform, process.env),
        buildFlavor: p,
        isPackaged: y.app.isPackaged,
        useInternalUpdateCdn: !1,
        getInternalUpdateCdnRequestHeaders: void 0,
        productionAppcastStateStore: j?.backendAppcastEnabled ? j : void 0,
        onUpdateReadyChanged: (e) => {
          re(e);
        },
        onInstallUpdatesRequested: (e) => {
          D(e);
        },
        onInstallUpdatesAborted: () => {
          O();
        },
        onInstallProgressChanged: (e) => {
          k(e);
        },
        onDownloadProgressChanged: (e) => {
          A(e);
        },
        onDownloadedUpdateAppBrandChanged: (e) => {
          ie(e);
        },
        onUpdateLifecycleStateChanged: (e) => {
          te(e);
        },
        onRelaunchNoticeChanged: (e) => {
          ne(e);
        },
        isTrustedIpcEvent: (e) => ae(e),
      }),
      startupPhases: new be(),
      productionAppcastStateStore: j,
      setSparkleBridgeHandlers: (e) => {
        (e.onInstallUpdatesRequested != null && (D = e.onInstallUpdatesRequested),
          e.onInstallUpdatesAborted != null && (O = e.onInstallUpdatesAborted),
          e.onUpdateLifecycleStateChanged != null && (te = e.onUpdateLifecycleStateChanged),
          e.onRelaunchNoticeChanged != null && (ne = e.onRelaunchNoticeChanged),
          e.onUpdateReadyChanged != null && (re = e.onUpdateReadyChanged),
          e.onInstallProgressChanged != null && (k = e.onInstallProgressChanged),
          e.onDownloadProgressChanged != null && (A = e.onDownloadProgressChanged),
          e.onDownloadedUpdateAppBrandChanged != null && (ie = e.onDownloadedUpdateAppBrandChanged),
          e.isTrustedIpcEvent != null && (ae = e.isTrustedIpcEvent));
      },
      setSecondInstanceArgsHandler: (e) => {
        if (!T) {
          E = e;
          for (let t of x) e(t);
          x.length = 0;
          for (let e of C) e(!0);
          C.clear();
        }
      },
      openFromTray: async (e, t) => {
        if (T) return;
        let n = ++w;
        for (let e of C) e(!1);
        if ((C.clear(), ee(), e === `new-chat` && RT?.windowsActivation != null && E == null)) {
          RT.queueSecondInstanceArgs([
            `--chatgpt-shell=` + encodeURIComponent(JSON.stringify({ kind: `new-chat` })),
          ]);
          return;
        }
        (process.platform !== `win32` ||
          E != null ||
          ((await new Promise((e) => C.add(e))) && !T && n === w)) &&
          (await t());
      },
      queueSecondInstanceArgs: (e) => {
        if (!T) {
          if ((ee(), E)) {
            E(e);
            return;
          }
          x.push(e);
        }
      },
    }),
    RT
  );
}
var BT = Object.freeze([`http:`, `https:`]),
  VT = new Set([`about:blank`]);
function HT(e) {
  return UT(e).allowed;
}
function UT(e) {
  if (VT.has(e)) return { allowed: !0, reason: `allowed` };
  let t;
  try {
    t = new URL(e);
  } catch {
    return { allowed: !1, reason: `invalid_url` };
  }
  return BT.includes(t.protocol)
    ? { allowed: !0, reason: `allowed` }
    : { allowed: !1, reason: `unsupported_protocol` };
}
function WT(e, t) {
  return e.includes(`://`)
    ? GT(e, t.raw)
    : t.hostPort == null
      ? !t.raw.includes(`://`) && GT(e, t.raw)
      : GT(e, t.hostPort);
}
function GT(e, t) {
  let n = KT(e);
  if (n.length === 1) return n[0] === t;
  let [r = ``] = n,
    i = t;
  if (r.length > 0) {
    if (!i.startsWith(r)) return !1;
    i = i.slice(r.length);
  }
  for (let e of n.slice(1, -1)) {
    if (e.length === 0) continue;
    let t = i.indexOf(e);
    if (t === -1) return !1;
    i = i.slice(t + e.length);
  }
  let a = n.at(-1) ?? ``;
  return a.length === 0 || i.endsWith(a);
}
function KT(e) {
  let t = [],
    n = ``;
  for (let r = 0; r < e.length; r += 1) {
    let i = e[r];
    if (i === `*`) {
      (t.push(n), (n = ``));
      continue;
    }
    if (i === `\\`) {
      let t = e[r + 1];
      if (t === `*` || t === `\\`) {
        ((n += t), (r += 1));
        continue;
      }
    }
    n += i;
  }
  return (t.push(n), t);
}
var qT = `MCP Apps browser belongs to another task.`,
  JT = {
    Prepare: `mcp_app_frame_prepare`,
    Activate: `mcp_app_frame_activate`,
    Release: `mcp_app_frame_release`,
  };
function YT(e) {
  return (
    (e.protocol === `codex-sandbox:` || e.protocol === `https:`) &&
    [`web-sandbox.oaiusercontent.com`, `staging-web-sandbox.oaiusercontent.com`].some(
      (t) => e.hostname === t || e.hostname.endsWith(`.${t}`),
    ) &&
    e.port === `` &&
    e.username === `` &&
    e.password === ``
  );
}
var XT = new TextEncoder(),
  ZT = 42,
  QT = 63;
function $T(e) {
  if (!aE(e)) return null;
  let t = nE(e);
  return t === `` || t === `*.` || t === `**.`
    ? null
    : t.startsWith(`**.`)
      ? { canonicalPattern: t, hostnamePattern: t.slice(3), kind: `apex-and-subdomains` }
      : t.startsWith(`*.`)
        ? { canonicalPattern: t, hostnamePattern: t.slice(2), kind: `subdomains-only` }
        : { canonicalPattern: t, hostnamePattern: t, kind: `exact` };
}
function eE(e, t) {
  let n = tE(t);
  switch (e.kind) {
    case `exact`:
      return sE(e.hostnamePattern, n);
    case `subdomains-only`:
      return oE(e.hostnamePattern, n);
    case `apex-and-subdomains`:
      return sE(e.hostnamePattern, n) || oE(e.hostnamePattern, n);
  }
}
function tE(e) {
  let t = dE(e);
  if (t.startsWith(`[`)) {
    let e = t.indexOf(`]`);
    if (e !== -1) return rE(t.slice(1, e));
  }
  return fE(t, `:`) === 1 ? rE(t.split(`:`)[0] ?? ``) : rE(t);
}
function nE(e) {
  let t = dE(e);
  return t === `*`
    ? `*`
    : t.startsWith(`**.`)
      ? `**.${tE(t.slice(3))}`
      : t.startsWith(`*.`)
        ? `*.${tE(t.slice(2))}`
        : tE(t);
}
function rE(e) {
  let t = uE(e).replace(/\.+$/u, ``);
  for (let e of [`%25`, `%`]) {
    let n = t.indexOf(e);
    if (n === -1) continue;
    let r = t.slice(0, n);
    if (iE(r)) return `${r}%${t.slice(n + e.length)}`;
  }
  return t;
}
function iE(e) {
  if (/^\d{1,3}(?:\.\d{1,3}){3}$/u.test(e))
    return e.split(`.`).every((e) => Number(e) <= 255 && String(Number(e)) === e);
  if (!e.includes(`:`) || /[^\da-f:.]/iu.test(e)) return !1;
  try {
    return new URL(`http://[${e}]/`).hostname.length > 0;
  } catch {
    return !1;
  }
}
function aE(e) {
  let t = dE(e);
  if (/[{}\\/\p{White_Space}]/u.test(t)) return !1;
  let n = t.replace(/^\*\*?\./u, ``);
  if (n.includes(`**`)) return !1;
  if (!/[[\]]/u.test(n)) return !0;
  let r = n.indexOf(`]`);
  if (!n.startsWith(`[`) || r === -1) return !1;
  let i = n.slice(1, r),
    a = n.slice(r + 1),
    o = rE(i),
    s = o.split(`%`)[0] ?? ``;
  return (
    !/[[\]]/u.test(i + a) &&
    (o === `*` || (s.includes(`:`) && iE(s))) &&
    (/^\.*$/u.test(a) || a.startsWith(`:`))
  );
}
function oE(e, t) {
  return sE(`?*.${e}`, t);
}
function sE(e, t) {
  return cE(XT.encode(e), XT.encode(t));
}
function cE(e, t) {
  let n = 0,
    r = 0,
    i = -1,
    a = 0;
  for (; r < t.length;)
    if (e[n] === ZT) ((i = n), (n += 1), (a = r));
    else if (e[n] === QT || lE(e[n]) === lE(t[r])) ((n += 1), (r += 1));
    else if (i !== -1) ((n = i + 1), (a += 1), (r = a));
    else return !1;
  for (; e[n] === ZT;) n += 1;
  return n === e.length;
}
function lE(e) {
  return e !== void 0 && e >= 65 && e <= 90 ? e + 32 : e;
}
function uE(e) {
  return e.replace(/[A-Z]/g, (e) => e.toLowerCase());
}
function dE(e) {
  return e.replace(/^\p{White_Space}+|\p{White_Space}+$/gu, ``);
}
function fE(e, t) {
  let n = 0;
  for (let r of e) r === t && (n += 1);
  return n;
}
function pE(e) {
  try {
    let t = new URL(e);
    return t.protocol !== `http:` && t.protocol !== `https:` ? null : t;
  } catch {
    return null;
  }
}
function mE(e) {
  let t = pE(e);
  if (t != null) return t;
  try {
    let t = new URL(e);
    return YT(t) ? t : null;
  } catch {
    return null;
  }
}
function hE(e, t) {
  return e.protocol !== t.protocol || e.port !== t.port ? !1 : eE(e.hostnamePattern, t.hostname);
}
function gE(e, t) {
  let n = _E(e),
    r = pE(t.raw);
  return n == null || r == null ? WT(e, t) : hE(n, r);
}
function _E(e) {
  if (e !== e.trim() || /\s/u.test(e)) return null;
  let t = e.indexOf(`://`);
  if (t <= 0) return null;
  let n = vE(e.slice(t + 3));
  if (n == null || !bE(n) || xE(n)) return null;
  try {
    let t = mE(e.replaceAll(`?`, `*`));
    if (t == null) return null;
    let r = n.includes(`?`)
        ? n
            .split(`.`)
            .map((e) => (/[*?]/u.test(e) ? e : new URL(`https://${e}.invalid`).hostname.slice(0, -8)))
            .join(`.`)
        : t.hostname.replace(/%2a/giu, `*`),
      i = $T(r);
    if (i == null) return null;
    let a = r.startsWith(`[`) ? `[${i.canonicalPattern}]` : i.canonicalPattern;
    return {
      canonicalKey: JSON.stringify([t.protocol, i.canonicalPattern, t.port]),
      canonicalPattern: `${t.protocol}//${a}${t.port.length > 0 ? `:${t.port}` : ``}`,
      hostnamePattern: i,
      port: t.port,
      protocol: t.protocol,
    };
  } catch {
    return null;
  }
}
function vE(e) {
  if (e.length === 0 || /[/#\\@]/u.test(e)) return null;
  if (e.startsWith(`[`)) {
    let t = e.indexOf(`]`);
    return t <= 1 || !yE(e.slice(t + 1)) ? null : e.slice(0, t + 1);
  }
  let t = e.indexOf(`:`);
  if (t === -1) return e;
  if (t !== e.lastIndexOf(`:`)) return null;
  let n = e.slice(t + 1);
  return /^\d+$/u.test(n) ? e.slice(0, t) : null;
}
function yE(e) {
  return e.length === 0 || (e.startsWith(`:`) && /^\d+$/u.test(e.slice(1)));
}
function bE(e) {
  return e.startsWith(`[`)
    ? e.endsWith(`]`)
    : e.length === 0 || e.includes(`%`) || e.endsWith(`..`)
      ? !1
      : e
          .replace(/\.$/u, ``)
          .split(`.`)
          .every((e) => e.length > 0);
}
function xE(e) {
  return (
    !e.startsWith(`[`) &&
    e
      .replace(/\.$/u, ``)
      .split(`.`)
      .some((e) => /[*?]/u.test(e) && /[^\p{ASCII}]/u.test(e))
  );
}
function SE(e, t) {
  let n = CE(e);
  if (n == null) return `invalid-origin`;
  let r = (e) => gE(e.trim(), n);
  return t.deniedWebMcpOrigins.some(r)
    ? `site-denied`
    : t.allowedWebMcpOrigins.some(r)
      ? `allowed`
      : t.webMcpEnabled === !1
        ? `default-denied`
        : `allowed`;
}
function CE(e) {
  let t = mE(e);
  if (t != null) return { raw: `${t.protocol}//${t.host}`, hostPort: t.host };
  try {
    let t = new URL(e);
    return t.protocol === `file:` ? ((t.search = ``), (t.hash = ``), { raw: t.href, hostPort: null }) : null;
  } catch {
    return null;
  }
}
r.O({
  blockId: r.N().min(1).max(256).optional(),
  threadId: r.N().min(1).max(256).optional(),
  messageId: r.N().min(1).max(256).optional(),
  requestId: r.N(),
});
function wE(e, t, n) {
  let r = new URLSearchParams();
  (t?.blockId != null && r.set(`block`, t.blockId),
    t?.threadId != null && r.set(`thread`, t.threadId),
    t?.messageId != null && r.set(`message`, t.messageId));
  let i = r.toString(),
    a = t == null && n != null ? `#${encodeURIComponent(n)}` : ``;
  return `/space/${encodeURIComponent(e)}${i === `` ? a : `?${i}`}`;
}
var TE = [new URL(j).origin],
  EE = /^(page|space):\/\/([A-Za-z0-9][A-Za-z0-9._~-]{0,199})(?:#([A-Za-z0-9][A-Za-z0-9._~-]{0,199}))?$/u;
function DE(e) {
  return OE(e, `link`);
}
function OE(e, t) {
  let n = EE.exec(e);
  if (n != null)
    return n[1] === `space`
      ? n[3] == null
        ? { kind: `space`, id: n[2] }
        : null
      : { kind: `page`, id: n[2], blockId: n[3] };
  try {
    let n = new URL(e),
      r = n.pathname.startsWith(`/codex/app/space/`) ? `/codex/app/space/` : `/space/`,
      a = n.pathname.startsWith(r) ? n.pathname.slice(r.length) : ``,
      o = n.hash === `` ? void 0 : n.hash.slice(1);
    return TE.includes(n.origin) &&
      n.username === `` &&
      n.password === `` &&
      (t === `link` || (!n.searchParams.has(`thread`) && !n.searchParams.has(`message`))) &&
      i.zo.test(a) &&
      (o == null || i.zo.test(o))
      ? { kind: `page`, id: a, blockId: o }
      : null;
  } catch {
    return null;
  }
}
var kE = [
    {
      displayName: `CSV`,
      extension: `csv`,
      mimeType: `text/csv`,
      macOSContentType: `public.comma-separated-values-text`,
      windowsAssociation: `open-with-only`,
    },
    {
      displayName: `DOCX`,
      extension: `docx`,
      mimeType: `application/vnd.openxmlformats-officedocument.wordprocessingml.document`,
      windowsAssociation: `open-with-only`,
    },
    {
      displayName: `PPTX`,
      extension: `pptx`,
      mimeType: `application/vnd.openxmlformats-officedocument.presentationml.presentation`,
      windowsAssociation: `open-with-only`,
    },
    {
      displayName: `TSV`,
      extension: `tsv`,
      mimeType: `text/tab-separated-values`,
      macOSContentType: `public.tab-separated-values-text`,
      windowsAssociation: `open-with-only`,
    },
    {
      displayName: `XLS`,
      extension: `xls`,
      mimeType: `application/vnd.ms-excel`,
      windowsAssociation: `open-with-only`,
    },
    {
      displayName: `XLSM`,
      extension: `xlsm`,
      mimeType: `application/vnd.ms-excel.sheet.macroEnabled.12`,
      windowsAssociation: `open-with-only`,
    },
    {
      displayName: `XLSX`,
      extension: `xlsx`,
      mimeType: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,
      windowsAssociation: `open-with-only`,
    },
    {
      advertiseOnLinux: !1,
      displayName: `ChatGPT Skill`,
      extension: `skill`,
      macOSContentType: `com.openai.codex.skill`,
      macOSHandlerRank: `Owner`,
      mimeType: `application/vnd.openai.codex.skill`,
      windowsAssociation: `default-eligible`,
    },
  ],
  AE = kE.map(({ extension: e }) => `.${e}`);
kE.flatMap(({ advertiseOnLinux: e, mimeType: t }) => (e === !1 ? [] : [t]));
var jE = new Set(AE);
function ME(e) {
  return jE.has(g.extname(e).toLowerCase());
}
function NE(e, t = process.platform) {
  let n = FE(e, t),
    r = [];
  for (let e = 1; e < n.length; e += 1) {
    let i = n[e];
    if (i == null || i.length === 0) continue;
    if (i === `--open-project`) {
      e += 1;
      continue;
    }
    if (i.startsWith(`--open-project=`) || i.startsWith(`-`) || IE(i)) continue;
    let a = LE(i);
    a != null && RE(a, t) && ME(a) && r.push(a);
  }
  return r;
}
function PE(e) {
  let t = [],
    n = new Set();
  for (let r of e) n.has(r) || (n.add(r), t.push({ label: g.basename(r), path: r, fsPath: r }));
  return t;
}
function FE(e, t) {
  if (t !== `win32`) return e;
  let n = e.indexOf(`--single-argument`);
  if (n === -1) return e;
  let r = e[n + 1];
  return n !== e.length - 2 || r == null || !/^(?:codex|https?):\/\//i.test(r) ? [] : [...e.slice(0, 1), r];
}
function IE(e) {
  return e.toLowerCase().startsWith(`codex://`);
}
function LE(e) {
  if (!e.toLowerCase().startsWith(`file://`)) return e;
  try {
    return (0, x.fileURLToPath)(e);
  } catch {
    return null;
  }
}
function RE(e, t) {
  return t === `win32` ? g.win32.isAbsolute(e) : g.posix.isAbsolute(e);
}
var zE = r.N().regex(i.zo);
function BE(e) {
  if (e.username !== `` || e.password !== `` || e.port !== `` || e.search !== `` || e.hash !== ``)
    return null;
  let t = zE.safeParse(e.pathname.slice(1));
  return t.success ? wE(t.data) : null;
}
var VE = `codex`,
  HE = `chatgpt.com`,
  UE = `/codex/open-app`,
  WE = `codex-dev`,
  GE = `--open-project`,
  KE = new Set([`marketplace`]),
  qE = new Set([`marketplacePath`, `mode`]),
  JE = `connections/ssh/add`,
  YE = new Set([`name`, `alias`, `projectPath`, `enabled`]),
  XE = [
    `browser-use`,
    `chronicle`,
    `connections`,
    `connections/computer`,
    `connections/devices`,
    `connections/ssh`,
    JE,
  ],
  ZE = new Set([`name`, `description`, `imageUrl`, `spriteVersionNumber`]),
  QE = r
    .r()
    .pipe(r.I([r.w(1), r.w(2)]))
    .optional(),
  $E = r.R().transform((e, t) => {
    let n = new URL(e).protocol;
    return n !== `http:` && n !== `https:`
      ? (t.addIssue({ code: `custom`, message: `Invalid browser deep link URL` }), r.G)
      : e;
  }),
  eD = r
    .N()
    .regex(/^[A-Za-z0-9_-]{1,128}$/)
    .transform(se),
  tD = r.d([`true`, `false`]).transform((e) => e === `true`),
  nD = /^sage-backfill-[a-f0-9]{64}$/,
  rD = /^kepler(?:-[a-z0-9-]+)?\.gateway\.(?:data-0s|data-1)\.internal\.api\.openai\.org$/;
function iD(e, t = process.platform) {
  return e || t === `win32` || t === `linux` ? VE : WE;
}
function Z(e) {
  return e.pathname.split(`/`).filter(Boolean);
}
function Q(e, t) {
  let n = e.searchParams.get(t);
  return n == null || n.trim().length === 0 ? null : n;
}
function aD(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return null;
  }
  return t.protocol !== `https:` ||
    t.hostname !== HE ||
    t.pathname !== UE ||
    t.username !== `` ||
    t.password !== `` ||
    t.port !== `` ||
    t.hash !== ``
    ? null
    : i.Ka(t.searchParams);
}
function oD(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return null;
  }
  if (t.protocol === `https:`) {
    let n = DE(e);
    if (n?.kind === `page`)
      return t.searchParams.has(`no_universal_links`)
        ? null
        : { kind: `spacePage`, path: `${wE(n.id)}${t.search}${t.hash}` };
    if (t.hostname !== HE || t.username !== `` || t.password !== `` || t.port !== `` || t.hash !== ``)
      return null;
    let r = u.l(t);
    if (r != null) return r;
    if (t.pathname === `/codex/deeplink` && t.searchParams.get(`target`) === `team-join`) {
      let e = t.searchParams.getAll(`team_id`),
        n = e.length === 1 ? e[0].trim() : null;
      return n ? { kind: `joinTeam`, teamId: n } : null;
    }
    if (t.pathname === `/cloud-environments/new`)
      return t.search === `` ? { kind: `cloudEnvironmentCreate` } : null;
    if (t.pathname === `/plugins` || t.pathname.startsWith(`/plugins/`))
      return t.searchParams.has(`no_universal_links`)
        ? null
        : ((t.pathname = t.pathname.slice(8)), Z(t).length === 0 ? { kind: `plugins` } : SD(t));
    let i = ue(e);
    if (i != null) return { kind: `libraryFile`, libraryFileId: i };
    let a = aD(e);
    return a == null ? lD(t) : oD(a);
  }
  let n = oe(t);
  if (n == null) return null;
  if (n.destination === `orbit`) return e === `${t.protocol}//orbit` ? { kind: `agentOnboarding` } : null;
  if (n.destination === `dots`) return e === `${t.protocol}//dots` ? { kind: `dotsHome` } : null;
  if (n.destination === `teams`) {
    let [e, n, r] = Z(t),
      i = wD(e);
    return i != null && r == null && (n == null || n === `join`)
      ? { kind: n === `join` ? `joinTeam` : `team`, teamId: i }
      : null;
  }
  switch (n.destination) {
    case `cloud-environments`:
      return t.pathname === `/new` && t.search === `` && t.hash === ``
        ? { kind: `cloudEnvironmentCreate` }
        : null;
    case `plugins`:
      return CD(t) ?? vD(t) ?? yD(t) ?? SD(t);
    case `mcp-app`:
      return CD(t);
    case `activate`:
      return e === `${t.protocol}//activate/life_sciences`
        ? { kind: `experienceActivation`, experience: `life_sciences` }
        : null;
    case `pets`:
      return bD(t);
    case `automations`: {
      let [e, n] = Z(t);
      if (e == null) return { kind: `automations` };
      let i = wD(e),
        a = r.d([`cloud`, `local`]).safeParse(t.searchParams.get(`automationSource`) ?? `cloud`);
      return i == null || n != null || !a.success
        ? null
        : {
            kind: `automation`,
            automationId: i,
            automationSource: a.data,
            edit: t.searchParams.get(`edit`) === `true`,
          };
    }
    case `codex-app`:
      return mD(t);
    case `connector`:
      return TD(t, e);
    case `chatgpt`:
      return lD(t);
    case `browser`:
      return hD(t, e);
    case `launch`:
      return Z(t).length === 0 ? { kind: `launch` } : null;
    case `new`:
      return gD(t);
    case `settings`:
      return [`mcp-app`, `plugins`].includes(Z(t)[0] ?? ``) ? CD(t) : uD(t);
    case `shared-thread`:
      return sD(t);
    case `space`: {
      let e = BE(t);
      return e == null ? null : { kind: `spacePage`, path: e };
    }
    case `skills`:
      return cD(t);
    case `sites`: {
      let [e, n, i] = Z(t),
        a = wD(e),
        o = Q(t, `codex_thread_id`),
        s = o == null ? null : r.z().safeParse(o),
        c = Q(t, `browser_url`),
        l = c == null ? null : ED(c);
      if (a == null || n !== `edit` || i != null || s?.success === !1 || (c != null && l == null))
        return null;
      let u = new URLSearchParams();
      s?.success === !0 && u.set(`codex_thread_id`, s.data);
      let d = t.searchParams.get(`prompt`);
      (d != null && u.set(`prompt`, d),
        d && t.searchParams.get(`site_edit_source`) === `widget` && u.set(`site_edit_source`, `widget`));
      for (let e of [`account_id`, `hostId`]) {
        let n = Q(t, e);
        n != null && u.set(e, n);
      }
      l != null && u.set(`browser_url`, l);
      let f = `/sites/${encodeURIComponent(a)}/edit`;
      return { kind: `siteEdit`, path: u.size === 0 ? f : `${f}?${u}` };
    }
    case `threads`: {
      let e = Z(t);
      if (e[0] === `wake`) {
        let n = r.z().safeParse(e[1]);
        return n.success && e.length === 2 && t.search === `` && t.hash === ``
          ? { kind: `wakeQueuedThread`, conversationId: n.data }
          : null;
      }
      if (e[0] === `new`)
        return [`browserUrl`, `mode`, `originUrl`, `path`, `prompt`].some((e) => t.searchParams.has(e))
          ? gD(t)
          : { kind: `newThread` };
      let n = i.lo(t, { allowExtraPathSegments: !0 }),
        a = _D(t),
        o = r
          .w(`shared`)
          .optional()
          .safeParse(t.searchParams.get(`threadAccess`) ?? void 0);
      return n == null || a == null || !o.success
        ? null
        : { kind: `localConversation`, ...n, ...a, hostId: Q(t, `hostId`) ?? void 0, threadAccess: o.data };
    }
    default:
      return null;
  }
}
function sD(e) {
  let t = e.searchParams.getAll(`handoff_id`),
    n = t[0],
    [i, a] = Z(e);
  return i == null ||
    !/^cx_[0-9a-f]{32}$/.test(i) ||
    a != null ||
    e.username !== `` ||
    e.password !== `` ||
    e.port !== `` ||
    e.hash !== `` ||
    [...e.searchParams.keys()].some((e) => e !== `handoff_id`) ||
    t.length > 1 ||
    (n != null && !r.z().safeParse(n).success)
    ? null
    : { kind: `sharedCodexSnapshot`, shareId: i, ...(n == null ? {} : { handoffId: n }) };
}
function cD(e) {
  let t = e.searchParams.get(`category`);
  return t == null
    ? { kind: `skills` }
    : { kind: `skills`, search: `?${new URLSearchParams({ category: t }).toString()}` };
}
function lD(e) {
  let [t, n, r, i] = Z(e);
  if (t !== `share` || i != null || e.searchParams.size !== 0) return null;
  let a = n;
  if (n === `e`) a = r;
  else if (r != null) return null;
  let o = wD(a);
  return o == null ? null : { kind: `sharedChatGptConversation`, sharedConversationId: o };
}
function uD(e) {
  let t = Z(e),
    n = t.join(`/`);
  if (n === `personal-vault`) {
    let t = new URLSearchParams({ view: `personal-vault` }),
      n = c.wt.safeParse({ type: Q(e, `type`), name: Q(e, `name`) });
    return (
      n.success &&
        e.searchParams.getAll(`type`).length === 1 &&
        e.searchParams.getAll(`name`).length === 1 &&
        xD(e, new Set([`type`, `name`])) &&
        (t.set(`type`, n.data.type), t.set(`name`, n.data.name)),
      { kind: `settings`, section: `local-environments`, search: `?${t.toString()}` }
    );
  }
  let [, r, a] = t,
    o = null;
  r === `google-chrome` ? (o = `chrome`) : r != null && i.Pr(r) && (o = r);
  let s = t[0] === `computer-use` && a == null && o != null ? `computer-use/${o}` : XE.find((e) => e === n);
  if (s == null) return { kind: `settings` };
  let l = { kind: `settings`, section: s };
  if (s === JE) {
    let t = Q(e, `name`)?.trim(),
      n = Q(e, `alias`)?.trim(),
      r = t ?? n,
      i = Q(e, `projectPath`)?.trim(),
      a = Q(e, `enabled`)?.trim();
    if (
      r == null ||
      (t != null && n != null && t !== n) ||
      (e.searchParams.has(`projectPath`) && i == null) ||
      (e.searchParams.has(`enabled`) && a !== `true` && a !== `false`) ||
      !xD(e, YE)
    )
      return { kind: `settings`, section: `connections/ssh` };
    let o = new URLSearchParams({ name: r });
    (i != null && o.set(`projectPath`, i), a != null && o.set(`enabled`, a), (l.search = `?${o.toString()}`));
  }
  return (e.hash !== `` && (l.hash = e.hash), l);
}
function dD(e, { allowBareWindowsProjectPathArg: t = !1 } = {}) {
  let n = [];
  for (let r = 0; r < e.length; r += 1) {
    let i = e[r];
    if (i === GE) {
      let t = e[r + 1]?.trim();
      ((r += 1), t && n.push({ route: { kind: `newThread`, path: t } }));
      continue;
    }
    if (i.startsWith(`${GE}=`)) {
      let e = i.slice(15).trim();
      e && n.push({ route: { kind: `newThread`, path: e } });
      continue;
    }
    let a = oD(i);
    if (a) {
      n.push({ route: a, sourceUrl: fD(a, i), isOsDeepLink: !0 });
      continue;
    }
    t && r > 0 && pD(i) && n.push({ route: { kind: `newThread`, path: i } });
  }
  return n;
}
function fD(e, t) {
  let n = new URL(t);
  if (n.protocol === `https:` && n.hostname === HE && n.pathname === UE) {
    let e = new URLSearchParams();
    for (let t of [`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`]) {
      let r = n.searchParams.get(t)?.trim();
      r && e.set(t, r);
    }
    return ((n.search = e.toString()), n.toString());
  }
  if (e.kind === `spacePage`) return `codex://space`;
  if (e.kind === `siteEdit`) return `codex://sites/edit`;
  if (e.kind === `libraryFile` || e.kind === `joinTeam` || e.kind === `browserHandoff`) return;
  if (e.kind === `sharedCodexSnapshot`) return `codex://shared-thread?utm_source=shared_thread_viewer`;
  let r = e.kind === `settings` ? Z(n).join(`/`) : null;
  return e.kind !== `connectorOAuthCallback` &&
    r !== JE &&
    r !== `personal-vault` &&
    !(`browserUrl` in e && e.browserUrl != null)
    ? t
    : void 0;
}
function pD(e) {
  let t = e.trim();
  return t.length === 0 ? !1 : /^[a-zA-Z]:[\\/]/.test(t) || t.startsWith(`\\\\`);
}
function mD(e) {
  let [t] = Z(e);
  return t === `apply-config` ? { kind: `applyCodexAppConfig` } : null;
}
function hD(e, t) {
  let n = e.searchParams.get(`url`);
  if (
    e.pathname !== `` ||
    e.username !== `` ||
    e.password !== `` ||
    e.port !== `` ||
    e.hash !== `` ||
    t.includes(`#`) ||
    e.searchParams.size !== 1 ||
    n == null
  )
    return null;
  let r = ED(n);
  return r == null ? null : { kind: `browser`, browserUrl: r };
}
function gD(e) {
  let t = _D(e),
    n = e.searchParams.getAll(`mode`),
    r = Q(e, `originUrl`),
    a = Q(e, `path`),
    o = Q(e, `projectId`),
    s;
  if (n.length > 1) return null;
  if (n.length === 1) {
    let e = i.to.safeParse(n[0]);
    if (!e.success) return null;
    s = e.data;
  }
  return t == null ||
    (a != null && !i.mi(a)) ||
    (t.prompt == null && t.browserUrl == null && s == null && r == null && a == null && o == null)
    ? null
    : {
        codexAppMode: s,
        kind: `newThread`,
        originUrl: r,
        path: a,
        projectId: o == null ? void 0 : i.an(o),
        ...t,
      };
}
function _D(e) {
  let t = Q(e, `prompt`),
    n = e.searchParams.get(`browserTabId`),
    r = n == null ? null : eD.safeParse(n),
    i = e.searchParams.get(`browserActive`),
    a = i == null ? null : tD.safeParse(i),
    o = e.searchParams.get(`browserUrl`),
    s = o == null ? null : $E.safeParse(o);
  if (
    (s != null && !s.success) ||
    (r != null && !r.success) ||
    (a != null && !a.success) ||
    (s == null && (r != null || a != null)) ||
    (a != null && r == null)
  )
    return null;
  if (a?.data === !1) {
    if (s == null || !s.success || r == null || !r.success || !nD.test(r.data)) return null;
    let e = new URL(s.data);
    if (
      e.protocol !== `https:` ||
      e.username !== `` ||
      e.password !== `` ||
      e.port !== `` ||
      e.hash !== `` ||
      !rD.test(e.hostname) ||
      e.pathname !== `/backfill` ||
      e.searchParams.size !== 2 ||
      e.searchParams.get(`backfillUi`) !== `sage` ||
      !e.searchParams.get(`sageBackfillId`)
    )
      return null;
  }
  let c = { browserUrl: s?.data, prompt: t ?? void 0 };
  return (r != null && (c.browserTabId = r.data), a != null && (c.browserActive = a.data), c);
}
function vD(e) {
  let [t, n, r] = Z(e);
  if (t !== `install` || r != null) return null;
  let a = wD(n);
  if (a == null || !xD(e, KE)) return null;
  let o = Q(e, `marketplace`)?.trim();
  return i.co(o) ? { kind: `pluginInstall`, marketplaceName: o, pluginName: a } : null;
}
function yD(e) {
  let [t, n] = Z(e);
  if (n != null || !xD(e, qE)) return null;
  let r = wD(t),
    a = Q(e, `marketplacePath`)?.trim(),
    o = Q(e, `mode`)?.trim();
  return r == null || a == null || (o != null && o !== `share`) || !i.pi(a) || !i.mi(a)
    ? null
    : {
        kind: `localPluginDetail`,
        hostId: null,
        marketplacePath: a,
        pluginName: r,
        openShareDialog: o === `share`,
      };
}
function bD(e) {
  let [t, n] = Z(e);
  if (t !== `install` || n != null || !xD(e, ZE)) return null;
  let r = Q(e, `name`)?.trim(),
    i = Q(e, `description`)?.trim() ?? null,
    a = Q(e, `imageUrl`),
    o = QE.safeParse(Q(e, `spriteVersionNumber`) ?? void 0);
  if (r == null || a == null || !o.success) return null;
  try {
    let e = new URL(a);
    return e.protocol === `https:`
      ? { kind: `petInstall`, name: r, description: i, imageUrl: e.toString(), spriteVersionNumber: o.data }
      : null;
  } catch {
    return null;
  }
}
function xD(e, t) {
  for (let n of e.searchParams.keys()) if (!t.has(n)) return !1;
  return !0;
}
function SD(e) {
  let [t, n] = Z(e);
  if (n != null) return null;
  let r = wD(t);
  if (r == null) return null;
  let a = i.io(r);
  return a == null ? null : { kind: `pluginDetail`, hostId: Q(e, `hostId`), pluginId: a };
}
function CD(e) {
  let t = i.uo(e);
  return t == null ? null : { kind: `pluginMcpApp`, ...t };
}
function wD(e) {
  if (e == null || e.trim().length === 0) return null;
  try {
    let t = decodeURIComponent(e).trim();
    return t.length > 0 ? t : null;
  } catch {
    return null;
  }
}
function TD(e, t) {
  let [n] = Z(e);
  return n === `oauth_callback`
    ? { kind: `connectorOAuthCallback`, fullRedirectUrl: t, returnTo: Q(e, `returnTo`) }
    : null;
}
function ED(e) {
  if (e.trim() !== e) return null;
  let t;
  try {
    t = new URL(e);
  } catch {
    return null;
  }
  return (t.protocol !== `http:` && t.protocol !== `https:`) ||
    t.hostname === `` ||
    t.username !== `` ||
    t.password !== ``
    ? null
    : t.toString();
}
function DD({ isMacOS: e, isPackaged: t, hasExplicitUserDataPath: n = !1 }) {
  return t ? !e || n : !1;
}
function OD({
  app: e,
  isMacOS: t,
  platform: n = process.platform,
  ensurePrimaryWindowVisible: r,
  getPrimaryWindow: a,
  navigateToRoute: o,
  initialArgv: s,
  errorReporter: c,
  onDeepLinkReceived: d,
  openHttpUrl: f,
  wakeQueuedThread: p,
  isReadyToWake: m = () => !0,
}) {
  let h = [],
    g = new Set(),
    _ = new Set(),
    v = !1,
    y = l.r();
  async function b(e) {
    if (_.has(e)) return;
    _.add(e);
    let t = 0;
    try {
      for (; g.delete(e);)
        try {
          (await p?.(e), (t = 0));
        } catch (n) {
          if (
            (g.add(e),
            y.warning(`Failed to wake queued thread`, { safe: {}, sensitive: { error: n } }),
            ++t >= 3)
          )
            return;
          await (0, D.setTimeout)(1e3);
        }
    } finally {
      _.delete(e);
    }
  }
  async function x() {
    if (e.isReady() && m()) for (let e of g) b(e);
    let t = h.at(-1);
    if (t == null || !e.isReady()) return;
    let n =
      t.kind === `codexDeepLink` && t.route.kind === `localConversation` && t.route.browserActive === !1
        ? await a?.()
        : null;
    if (h.at(-1) !== t) return;
    let i = n ?? (await r());
    i &&
      h.at(-1) === t &&
      ((h.length = 0),
      t.kind === `codexDeepLink` ? await o(i, t.route) : t.kind === `httpUrl` && (await f?.(i, t.urlString)));
  }
  function S(t) {
    (t.kind === `wakeQueuedThread`
      ? g.add(t.conversationId)
      : ((v = !0), h.push({ kind: `codexDeepLink`, route: t })),
      e.isReady() &&
        x().catch((e) => {
          c.reportNonFatal(e instanceof Error ? e : i.cn(e), { kind: `flush-pending-deep-links` });
        }));
  }
  function C(t) {
    ((v = !0),
      h.push({ kind: `httpUrl`, urlString: t }),
      e.isReady() &&
        x().catch((e) => {
          c.reportNonFatal(e instanceof Error ? e : i.cn(e), { kind: `flush-pending-http-urls` });
        }));
  }
  function w(e, t) {
    let n = oD(e);
    return n
      ? (S(
          t != null && (n.kind === `localPluginDetail` || n.kind === `localConversation`)
            ? { ...n, hostId: t }
            : n,
        ),
        !0)
      : !1;
  }
  let T = e.isPackaged && !t;
  function E(e) {
    if (n !== `linux`) return null;
    let t = e.at(-1);
    return t == null || oD(t) != null ? null : ED(t);
  }
  function ee(e) {
    if (n !== `win32`) return !1;
    for (let t = e.length - 1; t >= 0; --t) {
      let n = ED(e[t]);
      if (n != null) return (C(n), !0);
    }
    return !1;
  }
  function te(e) {
    let t = FE(e, n),
      r = dD(t),
      i = E(t),
      a = r.findLast((e) => e.route.kind !== `wakeQueuedThread`);
    a?.isOsDeepLink && i == null && d?.(a.sourceUrl);
    for (let e of r) S(e.route);
    return (i == null ? r.length === 0 && ee(t) : C(i), r.some((e) => e.route.kind === `wakeQueuedThread`));
  }
  function O(e) {
    let t = FE(e, n),
      r = dD(t, { allowBareWindowsProjectPathArg: T }),
      i = E(t),
      a = r.findLast((e) => e.route.kind !== `wakeQueuedThread`);
    a?.isOsDeepLink && i == null && d?.(a.sourceUrl);
    for (let e of r) S(e.route);
    return (i != null && C(i), i != null || r.length > 0 || ee(t));
  }
  function ne() {
    if (process.platform === `win32`) return;
    let t = iD(e.isPackaged);
    try {
      e.setAsDefaultProtocolClient(t) ||
        y.warning(`Failed to register protocol handler`, {
          safe: { scheme: t, isPackaged: e.isPackaged },
          sensitive: {},
        });
    } catch (e) {
      y.warning(`Failed to register protocol handler`, { safe: { scheme: t }, sensitive: { error: e } });
    }
  }
  function re() {
    if (!t) return;
    let n = (e, t) => {
      let n = oD(e);
      if (n) {
        (S(n), n.kind !== `wakeQueuedThread` && d?.(fD(n, e)), t?.preventDefault());
        return;
      }
      let r = ED(e);
      r && (C(r), t?.preventDefault());
    };
    (e.on(`open-url`, (e, t) => {
      n(t, e);
    }),
      u.u(e, (e, t) => (S(t), d?.(void 0), !0)));
    for (let e of u.c()) n(e);
  }
  let k = te(s),
    A = u.n().map(oD),
    ie = !v && A.every((e) => e?.kind === `wakeQueuedThread`) && (k || A.length > 0);
  return {
    isWakeOnlyLaunch: () => ie && !v,
    registerProtocolClient: ne,
    startHandlingNativeUrls: re,
    queueProcessArgs: O,
    flushPendingDeepLinks: x,
    queueCodexDeepLinkUrl: w,
  };
}
function kD({ appDataPath: e, buildFlavor: t, env: n }) {
  let r = n.CODEX_ELECTRON_USER_DATA_PATH?.trim();
  if (r) return (0, g.resolve)(r);
  let a = i.Ut(t),
    o = (0, g.join)(e, a == null ? `Codex` : `Codex (${a})`),
    s = n.CODEX_ELECTRON_AGENT_RUN_ID?.trim() || null;
  return t === `agent` && s != null ? (0, g.join)(o, `agent`, s) : o;
}
function AD() {
  let e = process.execPath;
  for (;;) {
    if (g.extname(e) === `.app`) return e;
    let t = g.dirname(e);
    if (t === e) return process.execPath;
    e = t;
  }
}
var jD = `ChatGPT.app`,
  MD = `ChatGPT Classic.app`,
  ND = [`com.openai.chat-sparkle-updater`, `com.openai.chat-sparkle-progress`],
  PD = `2DC432GLL2`;
function FD(
  e,
  {
    applicationsDirectory: t = `/Applications`,
    hasExpectedOpenAISignature: n = LD,
    stopLegacyUpdater: r = ID,
  } = {},
) {
  if (g.basename(e) !== jD) return { status: `not-needed` };
  let i = g.join(t, jD),
    a = g.join(t, MD);
  try {
    let t = h.lstatSync(i, { throwIfNoEntry: !1 });
    if (t == null) return { status: `not-needed` };
    if (!t.isDirectory() || !n(e, `com.openai.codex`)) return { status: `blocked` };
    if (n(i, `com.openai.codex`)) return { status: `not-needed` };
    if (
      !n(i, `com.openai.chat`) ||
      h.lstatSync(a, { throwIfNoEntry: !1 }) != null ||
      !r() ||
      !n(i, `com.openai.chat`)
    )
      return { status: `blocked` };
    h.renameSync(i, a);
  } catch (e) {
    return (
      l
        .r()
        .warning(`Failed to relocate legacy ChatGPT app`, {
          safe: { errorType: e instanceof Error ? e.name : typeof e },
        }),
      { status: `blocked` }
    );
  }
  return {
    status: `relocated`,
    restore: () => {
      try {
        if (h.lstatSync(i, { throwIfNoEntry: !1 }) != null || h.lstatSync(a, { throwIfNoEntry: !1 }) == null)
          return;
        h.renameSync(a, i);
      } catch (e) {
        l.r().warning(`Failed to restore legacy ChatGPT app`, {
          safe: { errorType: e instanceof Error ? e.name : typeof e },
        });
      }
    },
  };
}
function ID() {
  if (typeof process.getuid != `function`) return !1;
  let e = `gui/${process.getuid()}`,
    t = (0, S.spawnSync)(`/bin/launchctl`, [`print`, e], { stdio: `ignore` });
  if (t.error != null || t.status !== 0) return !1;
  for (let t of ND) {
    let n = `${e}/${t}`,
      r = (0, S.spawnSync)(`/bin/launchctl`, [`print`, n], { stdio: `ignore` });
    if (r.error != null || r.status == null) return !1;
    if (r.status !== 0) continue;
    let i = (0, S.spawnSync)(`/bin/launchctl`, [`bootout`, n], { stdio: `ignore` });
    if (i.error != null || i.status !== 0) return !1;
  }
  return !0;
}
function LD(e, t) {
  try {
    return (
      (0, S.execFileSync)(
        `/usr/bin/codesign`,
        [
          `--verify`,
          `--deep`,
          `--strict`,
          `-R=identifier "${t}" and anchor apple generic and certificate leaf[subject.OU] = "${PD}"`,
          e,
        ],
        { stdio: `ignore` },
      ),
      !0
    );
  } catch {
    return !1;
  }
}
var RD = `pending-source-dmg-cleanup.json`,
  zD = 25,
  BD = 250,
  VD = (0, m.promisify)(S.execFile),
  HD = r
    .O({
      images: r
        .h(
          r
            .O({
              "image-path": r.N().optional(),
              "system-entities": r.h(r.O({ "mount-point": r.N().optional() }).loose()).optional(),
            })
            .loose(),
        )
        .optional(),
    })
    .loose(),
  UD = r.O({ sourceDmgPath: r.N() }).loose();
async function WD({
  clearPendingSourceDmgPath: e = aO,
  copyAppBundleToApplicationsFolder: t = JD,
  detachSourceDmg: n = uO,
  getCurrentAppBundlePath: r = AD,
  getPendingSourceDmgPath: i = rO,
  getSourceDmgPath: a = sO,
  isApplicationsFolderWritable: o = qD,
  isPackaged: s = y.app.isPackaged,
  openInstalledAppBundle: c = YD,
  platform: u = process.platform,
  quitCurrentApp: d = () => y.app.quit(),
  relocateLegacyChatGPTApp: f = FD,
  setPendingSourceDmgPath: p = iO,
  showInstallerWindow: m = XD,
  sourceDmgExists: g = h.existsSync,
  trashItem: _ = (e) => y.shell.trashItem(e),
  isInApplicationsFolder: v = () => GD({ getCurrentAppBundlePath: r }),
  moveAppBundleToApplicationsFolder: b = KD,
} = {}) {
  if (u !== `darwin` || !s) return !1;
  if (v())
    return (
      await $D({
        clearPendingSourceDmgPath: e,
        detachSourceDmg: n,
        getPendingSourceDmgPath: i,
        sourceDmgExists: g,
        trashItem: _,
      }),
      !1
    );
  let x = eO(a);
  if (x == null) return !1;
  let S = await m();
  tO({ setPendingSourceDmgPath: p, sourceDmgPath: x });
  let C = null;
  try {
    let n = r(),
      i = f(n);
    switch (i.status) {
      case `blocked`:
        return (e(), await S.setStatus(`failed`), !0);
      case `not-needed`:
        break;
      case `relocated`:
        C = i.restore;
    }
    switch (b(S.allowClose)) {
      case `moved`:
        return ((C = null), !0);
      case `canceled`:
        return (e(), await S.setStatus(`failed`), !0);
    }
    if (!o()) return (e(), await S.setStatus(`failed`), !0);
    let a = await t(n);
    return a == null
      ? (e(), await S.setStatus(`failed`), !0)
      : ((C = null),
        await S.setStatus(`opening`),
        (await c(a)) ? (d(), !0) : (await S.setStatus(`openFailed`), !0));
  } catch (t) {
    return (
      e(),
      l
        .r()
        .warning(`Failed to install app in Applications folder`, {
          safe: { errorType: t instanceof Error ? t.name : typeof t },
        }),
      await S.setStatus(`failed`),
      !0
    );
  } finally {
    C?.();
  }
}
function GD({ getCurrentAppBundlePath: e }) {
  try {
    if (`isInApplicationsFolder` in y.app) return y.app.isInApplicationsFolder();
  } catch (e) {
    l.r().warning(`Failed to check app Applications folder status`, {
      safe: { errorType: e instanceof Error ? e.name : typeof e },
    });
  }
  try {
    return pO(e(), `/Applications`);
  } catch {
    return !1;
  }
}
function KD(e) {
  if (!(`moveToApplicationsFolder` in y.app)) return `unavailable`;
  (y.app.releaseSingleInstanceLock(), e());
  try {
    let e = y.app.moveToApplicationsFolder();
    return (e || y.app.requestSingleInstanceLock(), e ? `moved` : `canceled`);
  } catch (e) {
    throw (y.app.requestSingleInstanceLock(), e);
  }
}
function qD() {
  try {
    return (h.accessSync(`/Applications`, h.constants.W_OK), !0);
  } catch {
    return !1;
  }
}
async function JD(e) {
  if (!pO(process.execPath, e)) return null;
  let t = g.join(`/Applications`, g.basename(e)),
    n = g.join(`/Applications`, `.${g.basename(e)}.codex-installing-${process.pid}`);
  try {
    return (
      h.rmSync(n, { force: !0, recursive: !0 }),
      await VD(`/usr/bin/ditto`, [e, n]),
      h.existsSync(t) && (await y.shell.trashItem(t)),
      h.renameSync(n, t),
      t
    );
  } catch (e) {
    return (
      QD(n),
      l
        .r()
        .warning(`Failed to copy app bundle to Applications folder`, {
          safe: { errorType: e instanceof Error ? e.name : typeof e },
        }),
      null
    );
  }
}
async function YD(e) {
  try {
    return (y.app.releaseSingleInstanceLock(), await VD(`/usr/bin/open`, [`-n`, e]), !0);
  } catch (e) {
    return (
      l
        .r()
        .warning(`Failed to launch installed app bundle`, {
          safe: { errorType: e instanceof Error ? e.name : typeof e },
        }),
      !1
    );
  }
}
async function XD() {
  let e = !1,
    t = new y.BrowserWindow({
      width: 420,
      height: 176,
      resizable: !1,
      maximizable: !1,
      fullscreenable: !1,
      closable: !1,
      show: !1,
      title: `Installing ${y.app.getName()}`,
      webPreferences: {
        contextIsolation: !0,
        nodeIntegration: !1,
        sandbox: !0,
        spellcheck: !1,
        devTools: !1,
      },
    }),
    n = () => {
      ((e = !0), t.setClosable(!0));
    };
  return (
    t.setMenuBarVisibility(!1),
    t.on(`close`, (t) => {
      e || t.preventDefault();
    }),
    t.on(`closed`, () => {
      e && y.app.quit();
    }),
    t.webContents.setWindowOpenHandler(() => ({ action: `deny` })),
    t.webContents.on(`will-navigate`, (e) => {
      e.preventDefault();
    }),
    await t.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(fO(y.app.getName()))}`),
    t.isDestroyed() || (ZD(t), t.show(), t.focus()),
    {
      allowClose: n,
      setStatus: async (e) => {
        t.isDestroyed() ||
          (n(), await t.webContents.executeJavaScript(`window.setInstallerStatus(${JSON.stringify(e)})`));
      },
    }
  );
}
function ZD(e) {
  let t = y.screen.getCursorScreenPoint(),
    { workArea: n } = y.screen.getDisplayNearestPoint(t),
    { width: r, height: i } = e.getBounds(),
    a = n.x + Math.max(0, n.width - r),
    o = n.y + Math.max(0, n.height - i),
    s = Math.min(a, Math.max(n.x, Math.round(t.x - r / 2))),
    c = Math.min(o, Math.max(n.y, Math.round(t.y - i / 2)));
  e.setPosition(s, c, !1);
}
function QD(e) {
  try {
    h.rmSync(e, { force: !0, recursive: !0 });
  } catch (e) {
    l.r().warning(`Failed to remove staging app bundle`, {
      safe: { errorType: e instanceof Error ? e.name : typeof e },
    });
  }
}
async function $D({
  clearPendingSourceDmgPath: e,
  detachSourceDmg: t,
  getPendingSourceDmgPath: n,
  sourceDmgExists: r,
  trashItem: i,
}) {
  let a = n();
  a != null && (await nO({ detachSourceDmg: t, sourceDmgExists: r, sourceDmgPath: a, trashItem: i })) && e();
}
function eO(e) {
  try {
    return e();
  } catch (e) {
    return (
      l
        .r()
        .warning(`Failed to find app source DMG`, {
          safe: { errorType: e instanceof Error ? e.name : typeof e },
        }),
      null
    );
  }
}
function tO({ setPendingSourceDmgPath: e, sourceDmgPath: t }) {
  try {
    e(t);
  } catch (e) {
    l.r().warning(`Failed to remember app source DMG for cleanup`, {
      safe: { errorType: e instanceof Error ? e.name : typeof e },
    });
  }
}
async function nO({ detachSourceDmg: e, sourceDmgExists: t, sourceDmgPath: n, trashItem: r }) {
  if (!t(n)) return !0;
  let i = !1;
  for (let t = 1; t <= zD; t += 1) {
    try {
      if (e(n)) {
        i = !0;
        break;
      }
    } catch {}
    t < zD && (await (0, D.setTimeout)(BD));
  }
  if (!i) return (l.r().warning(`Failed to detach app source DMG after retries`), !1);
  try {
    return (await r(n), !0);
  } catch (e) {
    return (
      l
        .r()
        .warning(`Failed to move app source DMG to Trash`, {
          safe: { errorType: e instanceof Error ? e.name : typeof e },
        }),
      !1
    );
  }
}
function rO() {
  let e = oO();
  if (!h.existsSync(e)) return null;
  try {
    return UD.parse(JSON.parse(h.readFileSync(e, `utf8`))).sourceDmgPath;
  } catch (e) {
    return (
      l
        .r()
        .warning(`Failed to read pending app source DMG cleanup`, {
          safe: { errorType: e instanceof Error ? e.name : typeof e },
        }),
      null
    );
  }
}
function iO(e) {
  let t = oO();
  (h.mkdirSync(g.dirname(t), { recursive: !0 }),
    h.writeFileSync(t, `${JSON.stringify({ sourceDmgPath: e })}\n`, `utf8`));
}
function aO() {
  h.rmSync(oO(), { force: !0 });
}
function oO() {
  return g.join(y.app.getPath(`userData`), RD);
}
function sO() {
  let e = AD();
  return e.startsWith(`/Volumes/`) ? cO(e, lO()) : null;
}
function cO(e, t) {
  let n = null,
    r = ``;
  for (let i of t)
    if (g.extname(i.imagePath).toLowerCase() === `.dmg`)
      for (let t of i.mountPoints) pO(e, t) && t.length > r.length && ((n = i), (r = t));
  return n?.imagePath ?? null;
}
function lO() {
  let e = (0, S.execFileSync)(`/usr/bin/hdiutil`, [`info`, `-plist`]),
    t = (0, S.execFileSync)(`/usr/bin/plutil`, [`-convert`, `json`, `-o`, `-`, `-`], {
      encoding: `utf8`,
      input: e,
    });
  return (HD.parse(JSON.parse(t)).images ?? []).flatMap((e) => {
    if (e[`image-path`] == null) return [];
    let t = (e[`system-entities`] ?? []).flatMap((e) => (e[`mount-point`] == null ? [] : [e[`mount-point`]]));
    return t.length === 0 ? [] : [{ imagePath: e[`image-path`], mountPoints: t }];
  });
}
function uO(e) {
  for (let t of lO())
    if (g.resolve(t.imagePath) === g.resolve(e)) {
      for (let e of t.mountPoints) if (!dO(e)) return !1;
    }
  return !0;
}
function dO(e) {
  try {
    return ((0, S.execFileSync)(`/usr/bin/hdiutil`, [`detach`, e]), !0);
  } catch {
    return !1;
  }
}
function fO(e) {
  return `<!doctype html>
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
    const appName = ${JSON.stringify(e)};
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
</html>`;
}
function pO(e, t) {
  let n = g.relative(t, e);
  return n === `` || (!!n && !n.startsWith(`..`) && !g.isAbsolute(n));
}
var mO = 1e4;
function hO() {
  if (process.platform !== `darwin` || !y.app.isPackaged) return !1;
  let e = _O(),
    t = g.default.join(process.resourcesPath, `native`, `launch-services-helper`);
  if (e == null || !(0, h.existsSync)(t) || !gO(t, [`needs-renamed-dock-tile-repair`, e])) return !1;
  try {
    return (y.app.setActivationPolicy(`accessory`), gO(t, [`repair-renamed-dock-tile`, e]));
  } finally {
    y.app.setActivationPolicy(`regular`);
  }
}
function gO(e, t) {
  try {
    return (0, S.execFileSync)(e, t, { encoding: `utf8`, timeout: mO }).trim() === `true`;
  } catch {
    return !1;
  }
}
function _O() {
  let e = g.default.dirname(g.default.dirname(process.execPath)),
    t = g.default.dirname(e);
  return t.endsWith(`.app`) ? t : null;
}
var vO = { retry: `Retry`, recover: `Back Up and Rebuild`, quit: `Quit` },
  yO = `db-backups`,
  bO = `failed to initialize sqlite state runtime under `,
  xO = `failed to initialize state runtime at `,
  SO = `timed out waiting for state db backfill at `,
  CO = `Codex app-server process closed: `,
  wO = `
Most recent error: `;
function TO(e) {
  let t = EO(e);
  return t.startsWith(bO) || t.startsWith(xO) || t.startsWith(SO);
}
function EO(e) {
  let t = e instanceof Error ? e.message : String(e);
  if (t.startsWith(CO)) return t.slice(33);
  let n = t.indexOf(wO);
  return n === -1 ? t : t.slice(n + 20);
}
async function DO(e, t) {
  return OO({
    databasePath: a.Jr(),
    waitForInteractive: t,
    open: () => {
      let t = a.Yr({ migrationProvenance: e });
      if (t == null) throw Error(`SQLite is only available in the Electron app.`);
      jO(t);
    },
  });
}
async function OO({
  databasePath: e,
  onBackfillWait: t,
  waitForInteractive: n,
  open: r,
  shouldHandleError: i = () => !0,
}) {
  let a = new Set(),
    o = !1;
  for (;;)
    try {
      return (await r(), !0);
    } catch (r) {
      if (!i(r)) throw r;
      if (AO(r)) {
        o || ((o = !0), await t?.());
        continue;
      }
      if (n != null && !(await n())) return !1;
      let s = kO(e),
        c = r;
      if (s != null && (WO(r, s) || (await HO(s))) && !a.has(s)) {
        a.add(s);
        try {
          await NO(s);
          continue;
        } catch (e) {
          c = { originalError: r, recoveryError: e };
        }
      }
      for (;;) {
        let e = await MO(s, c);
        if (e === `retry`) break;
        if (e === `recover` && s != null)
          try {
            await NO(s);
            break;
          } catch (e) {
            c = { originalError: c, recoveryError: e };
            continue;
          }
        return (y.app.quit(), !1);
      }
      continue;
    }
}
function kO(e) {
  return e != null && (g.posix.isAbsolute(e) || g.win32.isAbsolute(e)) ? e : null;
}
function AO(e) {
  let t = EO(e);
  return TO(e) && t.includes(SO);
}
function jO(e) {
  if (typeof e.prepare(`PRAGMA user_version`).get()?.user_version != `number`)
    throw Error(`SQLite readiness query returned an unexpected result.`);
}
async function MO(e, t) {
  let n = e == null ? [`retry`, `quit`] : [`retry`, `recover`, `quit`];
  return (
    n[
      (
        await y.dialog.showMessageBox({
          type: `error`,
          buttons: n.map((e) => vO[e]),
          defaultId: 0,
          cancelId: n.length - 1,
          message: `${y.app.getName()} cannot access its local database.`,
          detail: [
            `The app cannot finish launching until its SQLite database is accessible.`,
            ``,
            `Database path: ${e ?? `unavailable in app-server startup error`}`,
            ``,
            e == null
              ? `Close other ${y.app.getName()} applications, then click Retry to check whether access has been restored.`
              : `Close other ${y.app.getName()} applications, then click Retry to check whether access has been restored. If the database cannot be opened, Back Up and Rebuild moves it aside so the app can create a fresh one.`,
            ``,
            `Error: ${FO(t)}`,
          ].join(`
`),
          noLink: !0,
        })
      ).response
    ] ?? `quit`
  );
}
async function NO(e) {
  await PO(e, await IO(e));
}
async function PO(e, t, n) {
  let r = {
    type: `info`,
    buttons: [`OK`],
    defaultId: 0,
    cancelId: 0,
    message: `${y.app.getName()} rebuilt its local database.`,
    detail: [
      `${y.app.getName()} detected a damaged local database, moved it into a backup folder, and will continue startup with a fresh database.`,
      ``,
      `Database path: ${e}`,
      ``,
      `Backup folder: ${t}`,
    ].join(`
`),
    noLink: !0,
  };
  if (n == null || n.isDestroyed()) {
    await y.dialog.showMessageBox(r);
    return;
  }
  await y.dialog.showMessageBox(n, r);
}
function FO(e) {
  return GO(e)
    ? [FO(e.originalError), ``, `Recovery failed: ${FO(e.recoveryError)}`].join(`
`)
    : e instanceof Error && e.message.length > 0
      ? e.message
      : String(e);
}
async function IO(e) {
  a.qr();
  let t = (0, g.dirname)(e);
  if ((await UO(t))?.isFile()) return BO(t);
  let n = LO(e),
    r = await RO(t);
  for (let e of n) (await VO(e)) && (await (0, b.rename)(e, (0, g.join)(r, (0, g.basename)(e))));
  return r;
}
function LO(e) {
  return [e, `${e}-wal`, `${e}-shm`];
}
async function RO(e) {
  return zO((0, g.join)(e, yO));
}
async function zO(e) {
  await (0, b.mkdir)(e, { recursive: !0 });
  for (let t = 0; ; t += 1) {
    let n = (0, g.join)(e, `sqlite-${Math.floor(Date.now() / 1e3)}-${t}`);
    try {
      return (await (0, b.mkdir)(n, { recursive: !1 }), n);
    } catch (e) {
      if (!KO(e, `EEXIST`)) throw e;
    }
  }
}
async function BO(e) {
  let t = await zO((0, g.join)((0, g.dirname)(e), `${(0, g.basename)(e)}.${yO}`));
  return (
    await (0, b.rename)(e, (0, g.join)(t, (0, g.basename)(e))),
    await (0, b.mkdir)(e, { recursive: !0 }),
    t
  );
}
async function VO(e) {
  try {
    return (await (0, b.stat)(e), !0);
  } catch (e) {
    if (KO(e, `ENOENT`)) return !1;
    throw e;
  }
}
async function HO(e) {
  return (await UO((0, g.dirname)(e)))?.isFile() ? !0 : ((await UO(e))?.isDirectory() ?? !1);
}
async function UO(e) {
  try {
    return await (0, b.stat)(e);
  } catch (e) {
    if (KO(e, `ENOENT`)) return null;
    throw e;
  }
}
function WO(e, t) {
  if (KO(e, `SQLITE_CORRUPT`) || KO(e, `SQLITE_NOTADB`)) return !0;
  let n = FO(e).replaceAll(t, ``).toLowerCase();
  return (
    n.includes(`database disk image is malformed`) ||
    n.includes(`file is not a database`) ||
    /\bsqlite_(?:corrupt|notadb)\b/.test(n)
  );
}
function GO(e) {
  return typeof e == `object` && !!e && `originalError` in e && `recoveryError` in e;
}
function KO(e, t) {
  return typeof e == `object` && !!e && `code` in e && e.code === t;
}
var qO = () => !1;
function JO() {
  y.app.on(`window-all-closed`, () => {
    process.platform !== `win32` &&
      ((process.platform === `darwin` && y.app.isPackaged) ||
        (process.platform === `linux` && qO()) ||
        y.app.quit());
  });
}
function YO(e) {
  qO = e;
}
var XO = `CODEX_ELECTRON_DEV_PARENT_PID`,
  ZO = `CODEX_ELECTRON_DEV_WEBVIEW_PID`,
  QO = `CODEX_ELECTRON_DEV_RELAUNCH_MARKER_PATH`,
  $O = 1e3;
r.O({ browserBackgroundNetworkingDisabled: r._(), desktopOpenEvents: r.N().optional() });
function ek(e) {
  let t = e?.trim();
  if (!t) return null;
  let n = Number(t);
  return !Number.isInteger(n) || n <= 0 ? null : n;
}
function tk(e) {
  return ek(e);
}
function nk(e) {
  return ek(e);
}
function rk(e) {
  return typeof e == `object` && !!e && `code` in e && e.code === `ESRCH`;
}
function ik({
  browserBackgroundNetworkingDisabled: e = process.argv.some((e) => e.split(`=`, 1)[0] === `--${t.n}`),
  markerPath: n = process.env[QO]?.trim(),
  writeMarker: r = (e, t) => {
    (0, h.writeFileSync)(e, `${JSON.stringify(t)}\n`, { encoding: `utf8`, mode: 384 });
  },
} = {}) {
  if (!n) return !1;
  try {
    return (
      r(n, {
        browserBackgroundNetworkingDisabled: e,
        desktopOpenEvents: process.env.CODEX_DESKTOP_RELAUNCH_OPEN_EVENTS,
      }),
      !0
    );
  } catch {
    return !1;
  }
}
function ak(e, t = (e, t) => process.kill(e, t)) {
  try {
    return (t(e, 0), !0);
  } catch (e) {
    return !rk(e);
  }
}
function ok({
  app: e,
  parentPid: t = tk(process.env[XO]),
  pollIntervalMs: n = $O,
  isParentProcessRunning: r = ak,
  setIntervalImpl: i = setInterval,
  clearIntervalImpl: a = clearInterval,
}) {
  if (t == null) return () => {};
  let o = !1,
    s = () => {
      o || ((o = !0), a(c));
    },
    c = i(() => {
      r(t) || (s(), e.quit());
    }, n);
  return (e.once(`will-quit`, s), s);
}
function sk({ app: e, webviewPid: t = nk(process.env[ZO]), killImpl: n = (e, t) => process.kill(e, t) }) {
  if (t == null) return () => {};
  let r = () => {
    try {
      n(-t, `SIGKILL`);
      return;
    } catch {}
    try {
      n(t, `SIGKILL`);
    } catch {}
  };
  return (
    e.once(`will-quit`, r),
    () => {
      e.off(`will-quit`, r);
    }
  );
}
function ck(e = ik, t) {
  (e({
    browserBackgroundNetworkingDisabled: t?.some(
      (e) => e.split(`=`, 1)[0] === `--codex-browser-background-networking-disabled`,
    ),
  }) || y.app.relaunch({ args: t }),
    y.app.quit());
}
var lk = l.a(`startup-performance-recording`),
  uk = !1;
function dk() {
  return uk;
}
async function fk() {
  let e = c.p(),
    { response: t } = await y.dialog.showMessageBox({
      type: `question`,
      message: e.formatMessage({
        messageId: `electron.traceRecording.startup.confirm`,
        defaultMessage: `Restart and record startup performance?`,
      }),
      detail: e.formatMessage({
        messageId: `electron.traceRecording.startup.consent`,
        defaultMessage: `Codex will record the first two minutes after restarting and save a trace on this computer. It may contain private information such as file paths and chat names. Nothing is uploaded automatically.`,
      }),
      buttons: [
        e.formatMessage({
          messageId: `electron.traceRecording.startup.restart`,
          defaultMessage: `Restart and Record`,
        }),
        e.formatMessage({ messageId: `electron.traceRecording.startup.cancel`, defaultMessage: `Cancel` }),
      ],
      defaultId: 1,
      cancelId: 1,
    });
  if (t === 0)
    try {
      (await (0, b.writeFile)((0, g.join)(y.app.getPath(`userData`), `record-next-startup`), ``, {
        mode: 384,
      }),
        ck());
    } catch (e) {
      lk().warning(`Could not arm startup recording`, { safe: {}, sensitive: { error: e } });
    }
}
async function pk(e) {
  if (n.i.supportsStartupPerformanceRecording(e)) {
    try {
      await (0, b.unlink)((0, g.join)(y.app.getPath(`userData`), `record-next-startup`));
    } catch (e) {
      if (e instanceof Error && `code` in e && e.code === `ENOENT`) return;
      lk().warning(`Could not consume startup recording request`, { safe: {}, sensitive: { error: e } });
      return;
    }
    ((uk = !0), await Promise.race([mk(), (0, D.setTimeout)(1e3, void 0, { ref: !1 })]));
  }
}
async function mk() {
  try {
    let e = (0, g.join)(y.app.getPath(`userData`), `startup-performance`);
    await (0, b.mkdir)(e, { recursive: !0, mode: 448 });
    let t = (0, g.join)(e, `startup-${Date.now()}.pftrace`);
    (await y.contentTracing.startRecording({
      included_categories: [`toplevel`, `blink.user_timing`, `disabled-by-default-v8.cpu_profiler`],
      excluded_categories: [`*`],
      excludeExtensionRenderers: !0,
      recording_mode: `record-until-full`,
      useJsonOutput: !1,
    }),
      setTimeout(() => {
        y.contentTracing
          .stopRecording(t)
          .then((e) => y.shell.showItemInFolder(e))
          .catch((e) => {
            lk().warning(`Could not save startup recording`, { safe: {}, sensitive: { error: e } });
          })
          .finally(hk);
      }, 12e4).unref());
  } catch (e) {
    (hk(), lk().warning(`Could not begin startup recording`, { safe: {}, sensitive: { error: e } }));
  }
}
function hk() {
  uk = !1;
  let e = y.Menu.getApplicationMenu(),
    t = e?.getMenuItemById(`toggle-trace-recording`);
  t != null && (t.enabled = !0);
  let n = e?.getMenuItemById(`restart-record-startup`);
  n != null && (n.enabled = !0);
}
var gk = `HKCU\\`,
  _k = (0, ie.createRequire)(__filename),
  vk;
function yk({ loadAddon: e = Ak } = {}) {
  try {
    return e()?.getShellActivation?.() ?? null;
  } catch {
    return null;
  }
}
function bk({ loadAddon: e = Ak, platform: t = process.platform } = {}) {
  if (t !== `win32`) return `unknown`;
  try {
    let t = e();
    return t == null ? `unknown` : t.isCurrentAccountAdministratorCapable() ? `administrator` : `standard`;
  } catch {
    return `unknown`;
  }
}
function xk({ loadAddon: e = Ak, platform: t = process.platform } = {}) {
  if (t !== `win32`) return null;
  try {
    return e()?.getSystemPerformanceSnapshot?.() ?? null;
  } catch {
    return null;
  }
}
async function Sk(e) {
  if (process.platform !== `win32`) return !0;
  try {
    return (await Ak()?.supportsPersistentAcls?.(e)) ?? !0;
  } catch {
    return !0;
  }
}
async function Ck({ progId: e, loadAddon: t = Ak, platform: n = process.platform }) {
  if (n !== `win32`) return null;
  try {
    return (await t()?.getWebBrowserState?.(e)) ?? null;
  } catch {
    return null;
  }
}
function wk(e) {
  return Ak()?.isNetworkDrive?.(e) === !0;
}
function Tk({ key: e, name: t, loadAddon: n = Ak, platform: r = process.platform }) {
  if (r !== `win32`) return null;
  let i = kk(e);
  return n()?.readCurrentUserRegistryStringValue?.(i, t) ?? null;
}
function Ek({ loadAddon: e = Ak, platform: t = process.platform } = {}) {
  t === `win32` &&
    a.cn({
      async listProcesses(t) {
        return e()?.listProcesses?.(t) ?? [];
      },
    });
}
function Dk(e) {
  return Ak()?.shortcutCharacterKeyCode?.(e) ?? null;
}
function Ok(e, t, n, r = !1) {
  try {
    let i = Ak();
    return i?.KeyboardMonitor == null ? null : new i.KeyboardMonitor(e, t, n, r);
  } catch {
    return null;
  }
}
function kk(e) {
  if (!e.startsWith(gk) || e.length === 5) throw Error(`Registry key must be under HKCU`);
  return e.slice(5);
}
function Ak() {
  if (process.platform !== `win32`) return null;
  if (vk != null) return vk;
  let e = c.Lt({ env: process.env, resourcesPath: process.resourcesPath });
  if (e == null) return null;
  let t = g.default.join(e, `native`, `windows-account.node`);
  return (0, h.existsSync)(t) ? ((vk = _k(t)), vk) : null;
}
function jk() {
  return (
    process.platform === `win32` &&
    y.app.isPackaged &&
    process.resourcesPath != null &&
    !process.env.CODEX_CLI_PATH?.trim() &&
    n.a(`codexWindowsAppContainedCore`, {
      candidates: [g.default.join(process.resourcesPath, `app.asar`, `package.json`)],
    }) === `1`
  );
}
function Mk() {
  (s.Ft(process.resourcesPath), (process.env.CODEX_WINDOWS_REGISTERED_CORE = `1`));
}
var Nk = 4096,
  Pk = r.T({
    partner: r
      .N()
      .optional()
      .catch(void 0),
    deal: r
      .N()
      .optional()
      .catch(void 0),
    provisioned_on: r
      .V()
      .optional()
      .catch(void 0),
  });
async function Fk() {
  if (process.platform === `win32` && y.app.isPackaged)
    try {
      let e = (0, g.join)(
        (0, g.dirname)((0, g.dirname)(process.execPath)),
        `microsoft.system.package.metadata`,
        `Custom.data`,
      );
      if ((await (0, b.stat)(e)).size > Nk) return;
      let t = await (0, b.readFile)(e);
      if (t.byteLength > Nk) return;
      let n = Pk.safeParse(JSON.parse(t.toString(`utf8`).replace(/^\uFEFF/, ``)));
      if (!n.success) return;
      let { partner: r, deal: i, provisioned_on: a, ...o } = n.data;
      return { partner: r, deal: i, provisionedUtcDate: a, customDataJson: JSON.stringify(o) };
    } catch {
      return;
    }
}
var Ik = r.O({
    hresult: r
      .D()
      .int()
      .min(0)
      .max(4294967295)
      .optional()
      .catch(void 0),
    currentPackageFullNameResult: r
      .D()
      .int()
      .min(0)
      .max(4294967295)
      .optional()
      .catch(void 0),
    nativeFailureStep: r
      .d([
        `initialize-winrt`,
        `application-data-current`,
        `local-settings`,
        `settings-values`,
        `selection-lookup`,
        `legacy-selection-lookup`,
        `selection-parse`,
      ])
      .optional()
      .catch(void 0),
    code: r
      .d([`EACCES`, `EBUSY`, `EPERM`, `ENOSPC`, `ENOENT`, `EIO`, `EMFILE`, `ENFILE`, `EROFS`])
      .optional()
      .catch(void 0),
  }),
  $ = class extends Error {
    reason;
    httpStatus;
    constructor(e, t, n) {
      (super(e), (this.reason = t), (this.httpStatus = n));
    }
  };
function Lk(e, t) {
  let n = Ik.safeParse(e),
    i = n.success ? n.data.hresult : void 0,
    a = n.success ? n.data.code : void 0,
    o = e instanceof Error ? /^net::(ERR_[A-Z0-9_]{1,64})$/.exec(e.message)?.[1] : void 0,
    s = `unknown`;
  return (
    t?.aborted || (e instanceof Error && e.name === `AbortError`)
      ? (s = `cancelled`)
      : e instanceof $
        ? (s = e.reason)
        : e instanceof Error && e.name === `TimeoutError`
          ? (s = `timeout`)
          : e instanceof r.B
            ? (s = `invalid-manifest`)
            : e instanceof SyntaxError
              ? (s = `invalid-json`)
              : i == null
                ? o == null
                  ? a != null && (s = `filesystem-error`)
                  : (s = `network-error`)
                : (s = `windows-error`),
    {
      failureReason: s,
      hresult: i,
      currentPackageFullNameResult: n.success ? n.data.currentPackageFullNameResult : void 0,
      nativeFailureStep: n.success ? n.data.nativeFailureStep : void 0,
      httpStatus: e instanceof $ ? e.httpStatus : void 0,
      networkErrorCode: o,
      systemErrorCode: a,
    }
  );
}
var Rk = l.a(`restricted-codex-windows-runtime-framework`),
  zk = `OpenAI.CodexPrimaryRuntime`,
  Bk = `codex-windows-runtime-framework-`,
  Vk = `.cleanup`,
  Hk = `CN="OpenAI OpCo, LLC", O="OpenAI OpCo, LLC", L=San Francisco, S=California, C=US`,
  Uk = new Map(),
  Wk = !1,
  Gk = new Set();
function Kk() {
  return Wk;
}
function qk(e) {
  let t = e && N()?.getCurrentPackageFamily() != null,
    n = Wk !== t;
  ((Wk = t), t || s.X(null), n && Gk.forEach((e) => e()));
}
function Jk(e) {
  return (
    Gk.add(e),
    () => {
      Gk.delete(e);
    }
  );
}
function Yk(e, t = process.platform, r = _.default.release(), i = process.arch) {
  return (
    t === `win32` &&
    (i === `arm64` || i === `x64`) &&
    Number(r.split(`.`)[2]) >= 22621 &&
    (e === n.i.Nightly || e === n.i.InternalAlpha || e === n.i.PublicBeta || e === n.i.Prod)
  );
}
async function Xk({ buildFlavor: e, progress: t = { step: `configuration` }, signal: n }) {
  if (!Wk || !Yk(e)) return;
  let r = N();
  if (r == null)
    throw new $(
      `Windows primary runtime framework activation support is unavailable.`,
      `native-support-unavailable`,
    );
  (aA(r), (t.step = `persisted-package-read`));
  let i = r.readPrimaryRuntimeSelection(),
    a = i == null ? null : nA(i.packageFamilyName);
  t.step = `package-query`;
  let o =
    i != null && a != null ? await r.findPrimaryRuntimePackage(i.packageFamilyName, i.packageFullName) : null;
  if (o != null && i != null && a != null) {
    ((t.step = `package-verify`),
      oA({
        installedPackage: o,
        packageFamilyName: i.packageFamilyName,
        packageIdentity: a,
        packagePublisher: Hk,
      }),
      (t.step = `activation-pin`),
      n?.throwIfAborted());
    let e = eA({
      installedPackage: o,
      nativeAddon: r,
      packageFamilyName: i.packageFamilyName,
      packageIdentity: a,
    });
    ($k(e, !0),
      s.X(e),
      Rk().info(`windows_primary_runtime_framework_activated`, {
        safe: {
          architecture: process.arch,
          packageIdentity: a,
          packageVersion: o.packageVersion,
          activatedRuntimeSource: `primary-framework`,
        },
        sensitive: {},
      }));
  } else {
    let e = `not-installed`;
    (i == null ? (e = `no-persisted-package`) : (a ?? (e = `untrusted-persisted-identity`)),
      Rk().info(`windows_primary_runtime_framework_activation_skipped`, {
        safe: { architecture: process.arch, reason: e },
        sensitive: {},
      }));
  }
}
async function Zk(e, t, n, r, i) {
  if (!Kk()) throw new $(`Windows primary runtime frameworks are disabled.`, `configuration-disabled`);
  cA(e.archiveUrl, `Windows primary runtime framework package`);
  let o = N();
  if (o == null)
    throw new $(
      `Windows primary runtime framework native addon is unavailable.`,
      `native-support-unavailable`,
    );
  if (e.bundleVersion == null)
    throw new $(`Windows primary runtime framework bundle version is missing.`, `configuration-missing`);
  let s = a.ki(e.bundleVersion),
    c = a.Oi(zk, s),
    l = await Qk({
      nativeAddon: o,
      packageFamilyName: `${c}_3k8sg7r9htsxt`,
      packageIdentity: c,
      packageLength: e.archiveSizeBytes,
      packagePublisher: Hk,
      packageSha256: e.archiveSha256,
      packageUrl: e.archiveUrl,
      internalCdnUrl: e.internalCdnUrl,
      getInternalUpdateCdnRequestHeaders: n,
      signal: t,
      packageVersion: s,
      onTelemetryStageChange: r,
      onDownloadProgress: i,
    });
  return (
    Rk().info(`windows_primary_runtime_framework_ready`, {
      safe: {
        bundleVersion: e.bundleVersion,
        packageIdentity: c,
        packageVersion: s,
        architecture: process.arch,
      },
      sensitive: { frameworkRoot: l },
    }),
    l
  );
}
async function Qk({
  nativeAddon: e,
  packageFamilyName: t,
  packageIdentity: n,
  packageLength: r,
  packagePublisher: i,
  packageSha256: a,
  packageUrl: o,
  internalCdnUrl: s,
  getInternalUpdateCdnRequestHeaders: c,
  packageVersion: l,
  signal: u,
  onTelemetryStageChange: d,
  onDownloadProgress: f,
}) {
  let p = sA({ packageFamilyName: t, packageIdentity: n, packageVersion: l });
  d?.(`query_framework`);
  let m = await e.findPrimaryRuntimePackage(t, p);
  if (
    (m != null &&
      (d?.(`verify_framework`),
      oA({ packageFamilyName: t, packageIdentity: n, packagePublisher: i, installedPackage: m })),
    m == null || un(m.packageVersion, l) < 0)
  ) {
    if (
      (await rA({
        installPackage: e.installPrimaryRuntimePackage,
        stagingRoot: e.getPackageLocalCachePath() ?? _.default.tmpdir(),
        packageIdentity: n,
        packageLength: r,
        packageSha256: a,
        packageUrl: o,
        internalCdnUrl: s,
        getInternalUpdateCdnRequestHeaders: c,
        signal: u,
        onTelemetryStageChange: d,
        onDownloadProgress: f,
      }),
      d?.(`query_framework`),
      (m = await e.findPrimaryRuntimePackage(t, p)),
      m == null)
    )
      throw new $(`Windows runtime framework ${n} was not installed.`, `package-not-installed`);
    (d?.(`verify_framework`),
      oA({ packageFamilyName: t, packageIdentity: n, packagePublisher: i, installedPackage: m }));
  }
  if (m.packageVersion !== l)
    throw new $(`Windows runtime framework ${n} version mismatch.`, `version-mismatch`);
  return (
    u?.throwIfAborted(),
    d?.(`pin_framework`),
    eA({ installedPackage: m, nativeAddon: e, packageFamilyName: t, packageIdentity: n })
  );
}
function $k(e, t = !1) {
  let n = N(),
    r = [...Uk.values()].find((t) => t.installPath === e && t.nativeAddon === n);
  if (r == null)
    throw new $(`Windows primary runtime framework selection could not be saved.`, `pin-unavailable`);
  r.nativeAddon.savePrimaryRuntimeSelection(r.handle, t);
}
function eA({ installedPackage: e, nativeAddon: t, packageFamilyName: n, packageIdentity: r }) {
  if (Uk.get(e.packageFullName)?.nativeAddon === t) return e.installPath;
  let i = t.pinPrimaryRuntimePackage(n, e.packageFullName);
  if (i == null) throw new $(`Windows runtime framework ${r} could not be pinned.`, `pin-unavailable`);
  if (i.packageFullName !== e.packageFullName || i.installPath !== e.installPath)
    throw (
      t.unpinPrimaryRuntimePackage(i.handle),
      new $(`Windows runtime framework ${r} pin did not match.`, `pin-mismatch`)
    );
  return (
    Uk.set(e.packageFullName, { handle: i.handle, installPath: i.installPath, nativeAddon: t }),
    tA(t, i.handle),
    i.installPath
  );
}
async function tA(e, t) {
  try {
    let n = await e.deferPrimaryRuntimeRemoval(t);
    Rk().info(`windows_primary_runtime_framework_removal_deferred`, {
      safe: { status: n ? `requested` : `unsupported` },
    });
  } catch (e) {
    Rk().warning(`windows_primary_runtime_framework_deferred_removal_failed`, {
      safe: { status: `failed` },
      sensitive: { error: e },
    });
  }
}
function nA(e) {
  if (!e.endsWith(`_3k8sg7r9htsxt`)) return null;
  let t = e.slice(0, -14);
  return /^OpenAI\.CodexPrimaryRuntime\.v\d+-\d+-\d+-\d+$/.test(t) ? t : null;
}
async function rA({
  installPackage: e,
  stagingRoot: t,
  packageIdentity: n,
  packageLength: r,
  packageSha256: i,
  packageUrl: a,
  internalCdnUrl: o,
  getInternalUpdateCdnRequestHeaders: s,
  signal: c,
  onTelemetryStageChange: l,
  onDownloadProgress: u,
}) {
  (c?.throwIfAborted(), l?.(`create_staging_directory`));
  let d = await b.default.mkdtemp(g.default.join(t, Bk)),
    p = g.default.join(d, `${n}.msix`);
  try {
    let t = 0,
      o = (0, f.createHash)(`sha256`),
      s = null,
      d = async (e, a, m = !1) => {
        l?.(`download_framework`);
        let g = new AbortController(),
          _ = `response`,
          v,
          x,
          S = setTimeout(() => {
            let e = Date.now();
            (Rk().warning(`Windows runtime framework download stalled`, {
              safe: {
                downloadPhase: _,
                online: y.net.isOnline(),
                receivedBytes: t,
                lastChunkAgeMs: v == null ? null : e - v,
                lastWriteAgeMs: x == null ? null : e - x,
                source: a == null ? `blob` : `protected-cdn`,
              },
            }),
              g.abort(
                new DOMException(
                  `Windows runtime framework download made no progress for 120 seconds.`,
                  `TimeoutError`,
                ),
              ));
          }, 12e4),
          C = c == null ? g.signal : AbortSignal.any([c, g.signal]),
          w,
          T = m && s != null ? t : 0;
        T === 0 && ((t = 0), (s = null));
        let E = 0;
        try {
          u?.({ downloadedBytes: T, totalBytes: r ?? null });
          {
            let t = new Headers({ "Accept-Encoding": `identity` });
            (T > 0 && s != null && (t.set(`Range`, `bytes=${T}-`), t.set(`If-Range`, s)),
              (w = await y.net.fetch(e, { headers: t, signal: C })));
          }
          if (T > 0 && w.status === 416) return (clearTimeout(S), g.abort(), d(e, a));
          if (!w.ok || w.body == null)
            throw new $(
              `Windows runtime framework package download failed with status ${w.status}.`,
              `http-error`,
              w.status,
            );
          if ((w.url && cA(w.url, `Windows runtime framework package response`), w.status === 206)) {
            let e = w.headers.get(`content-range`)?.match(/^bytes (\d+)-(\d+)\/(\d+)$/);
            if (
              T === 0 ||
              e == null ||
              Number(e[1]) !== T ||
              Number(e[2]) < T ||
              Number(e[2]) >= Number(e[3]) ||
              (r != null && Number(e[3]) !== r)
            )
              throw new $(
                `Windows runtime framework download returned an invalid byte range.`,
                `http-error`,
                w.status,
              );
          } else ((t = 0), (o = (0, f.createHash)(`sha256`)), await b.default.rm(p, { force: !0 }));
          let c = w.headers.get(`etag`);
          ((s = c?.startsWith(`"`) ? c : w.headers.get(`last-modified`)),
            (w.headers.get(`content-encoding`) ?? `identity`) !== `identity` && (s = null),
            (_ = `open-file`));
          let m = await b.default.open(p, t > 0 ? h.constants.O_WRONLY | h.constants.O_APPEND : `wx`);
          try {
            ((_ = `read-body`),
              await w.body.pipeTo(
                new WritableStream({
                  async write(e) {
                    (e.byteLength > 0 && ((v = Date.now()), S.refresh()),
                      (_ = `write-file`),
                      await m.writeFile(e),
                      o.update(e),
                      (t += e.byteLength));
                    let n = Date.now();
                    ((x = n),
                      (_ = `read-body`),
                      n - E >= 100 && (u?.({ downloadedBytes: t, totalBytes: r ?? null }), (E = n)));
                  },
                }),
                { signal: C },
              ));
          } finally {
            ((_ = `close-file`), await m.close());
          }
          if (
            (C.throwIfAborted(),
            l?.(`verify_framework_download`),
            u?.({ downloadedBytes: t, totalBytes: r ?? null }),
            r != null && t !== r)
          )
            throw new $(`Windows runtime framework ${n} length mismatch.`, `length-mismatch`);
          if (o.digest(`hex`) !== i.toLowerCase())
            throw new $(`Windows runtime framework ${n} checksum mismatch.`, `checksum-mismatch`);
        } catch (e) {
          throw (
            Rk().warning(`Windows runtime framework download failed`, {
              safe: {
                ...Lk(e, c),
                failureReason: Lk(C.aborted ? C.reason : e, c).failureReason,
                source: a == null ? `blob` : `protected-cdn`,
                expectedBytes: r,
                receivedBytes: t,
                httpStatus: w?.status,
                responseIsHtml: w?.headers.get(`content-type`)?.toLowerCase().startsWith(`text/html`),
              },
              sensitive: { error: e },
            }),
            C.throwIfAborted(),
            e
          );
        } finally {
          (clearTimeout(S), g.abort());
        }
      };
    (await d(a).catch(async (e) => {
      if ((c?.throwIfAborted(), !(e instanceof Error && e.name === `TimeoutError`))) throw e;
      await d(a, void 0, !0);
    }),
      c?.throwIfAborted(),
      l?.(`install_framework`),
      await e(p));
  } finally {
    try {
      await b.default.writeFile(`${d}${Vk}`, ``);
    } catch (e) {
      Rk().warning(`Windows runtime framework cleanup marker failed`, {
        safe: Lk(e),
        sensitive: { error: e },
      });
    }
    try {
      await iA(d);
    } catch (e) {
      Rk().warning(`Windows runtime framework staging cleanup failed`, {
        safe: Lk(e),
        sensitive: { error: e },
      });
    }
  }
}
async function iA(e) {
  (await b.default.rm(e, { recursive: !0, force: !0, maxRetries: 3 }),
    await b.default.rm(`${e}${Vk}`, { force: !0 }));
}
async function aA(e) {
  try {
    let t = e.getPackageLocalCachePath?.() ?? _.default.tmpdir(),
      n = await b.default.readdir(t, { withFileTypes: !0 });
    await Promise.all(
      n
        .filter((e) => e.isFile() && e.name.startsWith(Bk) && e.name.endsWith(Vk))
        .map((e) => iA(g.default.join(t, e.name.slice(0, -8)))),
    );
  } catch (e) {
    Rk().warning(`Windows runtime framework deferred staging cleanup failed`, {
      safe: Lk(e),
      sensitive: { error: e },
    });
  }
}
function oA({ installedPackage: e, packageFamilyName: t, packageIdentity: n, packagePublisher: r }) {
  if (
    e.packageIdentity !== n ||
    e.packageFamilyName !== t ||
    e.packagePublisher !== r ||
    e.architecture !== process.arch
  )
    throw new $(`Windows runtime framework ${n} identity mismatch.`, `identity-mismatch`);
}
function sA({ packageFamilyName: e, packageIdentity: t, packageVersion: n }) {
  return `${t}_${n}_${process.arch}__${e.slice(e.lastIndexOf(`_`) + 1)}`;
}
function cA(e, t) {
  if (new URL(e).protocol !== `https:`) throw new $(`${t} requires HTTPS.`, `https-required`);
}
var lA = { "install-update": `Install Update`, "check-for-updates": `Check for Updates`, quit: `Quit` };
if (process.versions.electron != null && typeof y.app.showTaskManager != `function`)
  throw Error(`Codex requires the Owl app shell; stock Electron is no longer supported.`);
async function uA(e) {
  let { appUpdates: t } = zT(),
    n = t.getIsUpdateReady()
      ? [`install-update`, `quit`]
      : t.hasUpdater()
        ? [`check-for-updates`, `quit`]
        : [`quit`];
  switch (
    n[
      (
        await y.dialog.showMessageBox({
          type: `error`,
          buttons: n.map((e) => lA[e]),
          defaultId: 0,
          cancelId: n.length - 1,
          message: `${y.app.getName()} failed to start.`,
          detail: e instanceof Error ? e.message : `The main desktop app failed during startup.`,
          noLink: !0,
        })
      ).response
    ] ??
    `quit`
  ) {
    case `install-update`:
      await t.installUpdatesIfAvailable();
      break;
    case `check-for-updates`:
      await t.checkForUpdates();
      break;
    case `quit`:
      y.app.quit();
      return;
  }
  process.platform === `win32` && (await uA(e));
}
var dA = process.platform === `darwin`,
  fA = n.i.resolve(),
  pA =
    process.platform === `win32`
      ? n.i.getWindowsDistributionFlavor(fA, n.a(`codexWindowsPackageIdentity`))
      : fA,
  mA = {
    appVersion: y.app.getVersion(),
    buildFlavor: fA,
    buildCommit: process.env.CODEX_BUILD_COMMIT?.trim() || n.a(`codexBuildCommit`),
  };
(t.h(),
  JO(),
  y.app.setName(i.Wt(pA)),
  y.app.setPath(`userData`, kD({ appDataPath: y.app.getPath(`appData`), buildFlavor: pA, env: process.env })),
  process.platform === `win32` &&
    (delete process.env.CODEX_WINDOWS_REGISTERED_CORE,
    delete process.env.CODEX_WINDOWS_SANDBOX_PACKAGE_FAMILY,
    y.app.setAppUserModelId(n.r(pA))));
var hA = DD({
    isMacOS: dA,
    isPackaged: y.app.isPackaged,
    hasExplicitUserDataPath: !!process.env.CODEX_ELECTRON_USER_DATA_PATH?.trim(),
  }),
  gA = yk();
if (hA && !y.app.requestSingleInstanceLock({ startupTask: gA === `startup-task` }))
  (l
    .r()
    .info(`Exiting second desktop instance`, {
      safe: { packaged: y.app.isPackaged, platform: process.platform },
    }),
    y.app.exit(0));
else {
  hO() &&
    l
      .r()
      .info(`Repaired renamed Dock tile`, {
        safe: { platform: process.platform, version: y.app.getVersion() },
      });
  let e = zT(fA);
  ((e.windowsActivation = gA),
    hA &&
      y.app.on(`second-instance`, (t, n, r, i) => {
        (typeof i == `object` && i && `startupTask` in i && i.startupTask === !0) ||
          e.queueSecondInstanceArgs(n);
      }),
    y.app.whenReady().then(async () => {
      ze();
      let { desktopSentry: t, appUpdates: n } = e;
      if (
        (await pk(fA),
        !(await Ne({
          appName: y.app.getName(),
          environment: { arch: process.arch, isPackaged: y.app.isPackaged, platform: process.platform },
        })))
      ) {
        y.app.quit();
        return;
      }
      if ((await WD()) || !(await DO(mA, e.waitForInteractiveLaunch))) return;
      let r = jk(),
        i = Yk(fA, process.platform),
        a = !1;
      if (r || i)
        try {
          let e = N(),
            t = e?.getCurrentPackageFamily();
          (y.app.isPackaged &&
            t == null &&
            l
              .r()
              .warning(`windows_runtime_framework_identity_unavailable`, {
                safe: {
                  buildFlavor: fA,
                  appVersion: y.app.getVersion(),
                  architecture: process.arch,
                  failureReason: e == null ? `native-addon-unavailable` : `no-package-identity`,
                  appContainedCoreBuild: r,
                  shouldUseWindowsRuntimeFrameworks: i,
                  hasDoNotDeElevateSwitch: y.app.commandLine.hasSwitch(`do-not-de-elevate`),
                },
              }),
            t && r && (process.env.CODEX_WINDOWS_SANDBOX_PACKAGE_FAMILY = t));
          let n = Gw(Uw(s.lt()), (await Fk()) != null);
          ((a = t != null && n.core), s.It(n.core), qk(n.primary));
        } catch (e) {
          (s.It(null),
            qk(!1),
            l
              .r()
              .warning(`windows_runtime_framework_gate_hydration_failed`, {
                safe: { buildFlavor: fA, ...Lk(e) },
                sensitive: { error: e },
              }));
        }
      let o = { phase: `bootstrap-import-main` };
      try {
        if ((await n.initialize(), r && a && Mk(), r || i)) {
          let e = r && a ? `app-package` : `bundled`;
          l.r().info(`windows_core_runtime_launch_selected`, {
            safe: {
              buildFlavor: fA,
              architecture: process.arch,
              coreGateEnabledAtStartup: a,
              selectedRuntimeSource: e,
            },
          });
        }
        await Xk({ buildFlavor: fA }).catch((e) => {
          l.r().warning(`windows_primary_runtime_framework_activation_failed`, {
            safe: { buildFlavor: fA, ...Lk(e) },
            sensitive: { error: e },
          });
        });
        let { runMainAppStartup: e } = await Promise.resolve().then(() => require("./main-C4DYk222.js"));
        await e();
      } catch (r) {
        for (let e of y.BrowserWindow.getAllWindows()) e.isDestroyed() || e.destroy();
        (l.r().error(`Desktop bootstrap failed to start the main app`, { safe: o }),
          t.captureException(r, { tags: o }),
          await n.startUpdaterAfterStartupFailure(),
          (await e.waitForInteractiveLaunch()) && (await uA(r)));
      }
    }));
}
((exports.$ = Kw),
  (exports.A = AD),
  (exports.At = bt),
  (exports.B = _E),
  (exports.Bt = Nt),
  (exports.C = sk),
  (exports.Ct = It),
  (exports.D = TO),
  (exports.Dt = ht),
  (exports.E = YO),
  (exports.Et = xt),
  (exports.F = OD),
  (exports.Ft = Ct),
  (exports.G = zT),
  (exports.Gt = Bt),
  (exports.H = JT),
  (exports.Ht = At),
  (exports.I = PE),
  (exports.It = Et),
  (exports.J = PT),
  (exports.Jt = Se),
  (exports.K = FT),
  (exports.Kt = zt),
  (exports.L = ME),
  (exports.Lt = Tt),
  (exports.M = iD),
  (exports.Mt = wt),
  (exports.N = oD),
  (exports.Nt = Ot),
  (exports.O = PO),
  (exports.Ot = yt),
  (exports.P = ED),
  (exports.Pt = Dt),
  (exports.Q = Yw),
  (exports.R = NE),
  (exports.Rt = St),
  (exports.S = ck),
  (exports.St = Lt),
  (exports.T = ok),
  (exports.Tt = jt),
  (exports.U = YT),
  (exports.Ut = Ft),
  (exports.V = qT),
  (exports.Vt = kt),
  (exports.W = HT),
  (exports.Wt = _t),
  (exports.X = MT),
  (exports.Xt = j),
  (exports.Y = NT),
  (exports.Yt = se),
  (exports.Z = jT),
  (exports._ = Ok),
  (exports._t = qt),
  (exports.a = Jk),
  (exports.at = Pw),
  (exports.b = dk),
  (exports.bt = gt),
  (exports.c = Lk),
  (exports.ct = Gn),
  (exports.d = bk),
  (exports.dt = Zt),
  (exports.et = Ww),
  (exports.f = Dk),
  (exports.ft = Yt),
  (exports.g = Ak),
  (exports.gt = $t),
  (exports.h = wk),
  (exports.ht = Jt),
  (exports.i = Yk),
  (exports.it = Iw),
  (exports.j = aD),
  (exports.jt = mt),
  (exports.k = OO),
  (exports.kt = vt),
  (exports.l = Fk),
  (exports.lt = In),
  (exports.m = Ck),
  (exports.mt = Xt),
  (exports.n = Xk),
  (exports.nt = qw),
  (exports.o = $k),
  (exports.ot = mw),
  (exports.p = xk),
  (exports.pt = Qt),
  (exports.q = IT),
  (exports.qt = N),
  (exports.r = Zk),
  (exports.rt = Bw),
  (exports.s = qk),
  (exports.st = K),
  (exports.t = Kk),
  (exports.tt = Jw),
  (exports.u = Ek),
  (exports.ut = Wt),
  (exports.v = Tk),
  (exports.vt = Kt),
  (exports.w = ik),
  (exports.wt = Pt),
  (exports.x = fk),
  (exports.xt = Rt),
  (exports.y = Sk),
  (exports.yt = Ut),
  (exports.z = SE),
  (exports.zt = Mt));
//# sourceMappingURL=bootstrap-cdWF4rWM.js.map
