const e = require("./rolldown-runtime-CPUxUITh.js"),
  t = require("./browser-background-switches-oSaaOz4s.js"),
  n = require("./file-based-logger-DD0smlUs.js"),
  r = require("./zod-C7Kk26Xx.js"),
  i = require("./src-CSKkIr_z.js"),
  a = require("./src-CsH31EEu.js"),
  o = require("./mcp-app-attachment-DQQzodzc.js"),
  s = require("./application-network-startup-BG13czUt.js"),
  c = require("./startup-requirements-noLGSvyx.js"),
  l = require("./logger-Bfbyn6HA.js"),
  u = require("./desktop-open-path-queue-BRLR7DdW.js"),
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
  ne = require("module"),
  re = require("perf_hooks"),
  ie = require("worker_threads"),
  O = require("node:diagnostics_channel");
O = e.a(O);
let k = require("diagnostics_channel");
k = e.a(k);
let ae = require("node:module"),
  oe = require("node:zlib");
var se = `https://chatgpt.com/codex`;
function ce(e) {
  let t = typeof e == `string` ? URL.parse(e) : e;
  return t == null || (t.protocol !== `codex:` && t.protocol !== `codex-dev:`)
    ? null
    : {
        destination: t.username === `` && t.password === `` && t.port === `` ? t.host : `unsupported`,
        url: t,
      };
}
function le(e) {
  return e;
}
var ue = `chatgpt-migration-announcement-completed-v1`;
function de(e) {
  return /^libfile[-_][A-Za-z0-9_-]+$/.exec(e)?.[0] === e;
}
function fe(e) {
  let t = /^https:\/\/chatgpt\.com\/api\/library\/files\/([^/]+)\/download$/.exec(e),
    n = t?.[1];
  return t?.[0] === e && n != null && de(n) ? n : null;
}
var pe = 2048,
  me = 20,
  he = 20,
  ge = `[Truncated: breadcrumb data exceeded 2 KiB]`,
  _e = `https://6719eaa18601933a26ac21499dcaba2f@o33249.ingest.us.sentry.io/4510999349821440`;
function ve(e) {
  let { data: t } = e;
  if (t == null) return e;
  if (!(`arguments` in t && !A(t.arguments))) return A(t) ? e : { ...e, data: be(t) };
  let n = { ...t, arguments: ge, codex_truncated_breadcrumb_data: !0 };
  return A(n) ? { ...e, data: n } : { ...e, data: be(t) };
}
function ye(e) {
  return `codex@${e}`;
}
function A(e) {
  try {
    let t = JSON.stringify(e);
    return t == null || t.length > pe ? !1 : new TextEncoder().encode(t).byteLength <= pe;
  } catch {
    return !1;
  }
}
function be(e) {
  let t = { codex_truncated_breadcrumb_data: !0 },
    n = [],
    r = 0,
    i = !1;
  for (let a in e) {
    if (!Object.hasOwn(e, a)) continue;
    if (r === me) {
      i = !0;
      break;
    }
    r += 1;
    let o = e[a],
      s = { ...t, [a]: A(o) ? o : ge, codex_truncated_breadcrumb_data: !0 };
    A(s) ? (t = s) : n.push(a);
  }
  if (n.length > 0 || i) {
    let e = {
      ...t,
      codex_omitted_breadcrumb_data_keys: [
        ...n.slice(0, he).map((e) => e.slice(0, 128)),
        ...(i ? [`[Additional keys omitted]`] : []),
      ],
    };
    if (A(e)) return e;
  }
  return t;
}
var xe = [
    `bootstrap`,
    `host_ready`,
    `window_created`,
    `renderer_ready`,
    `first_content_visible`,
    `background_ready`,
  ],
  Se = class {
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
      return xe.indexOf(this.phase) >= xe.indexOf(e);
    }
    reach(e) {
      if (!(this.abortController.signal.aborted || this.hasReached(e))) {
        this.phase = e;
        for (let e of this.listeners) e();
      }
    }
    whenReached(e, t) {
      return t?.aborted
        ? Promise.reject(Ce(t))
        : this.abortController.signal.aborted
          ? Promise.reject(Ce(this.abortController.signal))
          : this.hasReached(e)
            ? Promise.resolve()
            : new Promise((n, r) => {
                let i = this.subscribe(() => {
                    this.hasReached(e) && (o(), n());
                  }),
                  a = () => {
                    (o(), r(Ce(t?.aborted ? t : this.abortController.signal)));
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
function Ce(e) {
  return e.reason instanceof Error ? e.reason : new DOMException(`Startup was canceled`, `AbortError`);
}
var we = { report: () => {}, reportNonFatal: () => {}, reportFatal: () => {} };
function Te(e) {
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
var Ee = `desktop.intelLaunchWarning.message`,
  De = `{appName} is running the Intel build on an Apple Silicon Mac`,
  Oe = `desktop.intelLaunchWarning.detail`,
  ke = `This build works through Rosetta, but the Apple Silicon build launches faster and performs better. Quit now to install the Apple Silicon build, or continue with the Intel build`,
  Ae = `desktop.intelLaunchWarning.quit`,
  je = `Quit`,
  Me = `desktop.intelLaunchWarning.continue`,
  Ne = `Continue Anyway`;
function Pe(e, t = Ie) {
  return !e.isPackaged || e.platform !== `darwin` || e.arch !== `x64` ? !1 : t();
}
async function Fe({
  appName: e,
  environment: t,
  readProcessTranslated: n = Ie,
  loadNativeIntl: r = Le,
  showMessageBox: i = (e) => y.dialog.showMessageBox(e),
}) {
  if (!Pe(t, n)) return !0;
  try {
    let t = await r();
    return (
      (
        await i({
          type: `warning`,
          buttons: [
            t.formatMessage({ messageId: Ae, defaultMessage: je }),
            t.formatMessage({ messageId: Me, defaultMessage: Ne }),
          ],
          defaultId: 0,
          cancelId: 0,
          noLink: !0,
          message: t.formatMessage({ messageId: Ee, defaultMessage: De, values: { appName: e } }),
          detail: t.formatMessage({ messageId: Oe, defaultMessage: ke }),
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
function Ie() {
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
async function Le() {
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
var Re = l.a(`windows-packages`),
  ze = (0, ne.createRequire)(__filename);
function j() {
  let e;
  try {
    return ze((0, g.join)(process.resourcesPath, `native`, `windows-updater.node`));
  } catch (t) {
    e = t;
  }
  return (
    Re().error(`Failed to load native Windows updater addon`, { safe: {}, sensitive: { error: e } }),
    null
  );
}
var Be = l.a(`windows-updater`);
function Ve() {
  if (process.platform !== `win32` || !y.app.isPackaged) return;
  let e = j();
  if (e)
    try {
      e.deployment.registerRestart(``);
    } catch (e) {
      Be().warning(`Could not establish Windows restart lifecycle`, { safe: {}, sensitive: { error: e } });
    }
}
var He = e.a(o.at()),
  Ue = `linux-package-metadata.json`,
  We = 9e5,
  Ge = r.O({
    codexAppBrand: r.N().trim().pipe(r.w(`chatgpt`)),
    codexBuildFlavor: r.N(),
    version: r.N().trim().min(1),
  }),
  Ke = class {
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
        }, We).unref());
    }
    hasUpdater() {
      return qe(this.options);
    }
    getIsUpdateReady() {
      return this.isUpdateReady;
    }
    getUnavailableReason() {
      return this.hasUpdater() ? null : `unsupported Linux package runtime`;
    }
    checkForUpdates = async () => {
      if (!this.hasUpdater() || this.isUpdateReady) return;
      let e = Je({ buildFlavor: this.options.buildFlavor, executablePath: this.options.executablePath });
      e != null &&
        Ye(e, this.options.runningVersion) &&
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
function qe({ buildFlavor: e, isPackaged: t }) {
  return process.platform === `linux` && t && n.i.shouldIncludeLinuxPackageUpdater(e, process.platform);
}
function Je({ buildFlavor: e, executablePath: t }) {
  let r = g.default.join(g.default.dirname(t), `resources`, Ue);
  try {
    let t = Ge.safeParse(JSON.parse((0, h.readFileSync)(r, `utf8`)));
    return !t.success || n.i.parse(t.data.codexBuildFlavor) !== e ? null : t.data.version;
  } catch {
    return null;
  }
}
function Ye(e, t) {
  let n, r;
  try {
    ((n = a.Li(e)), (r = a.Li(t)));
  } catch {
    return !1;
  }
  if (a.Mi(n) !== e || a.Mi(r) !== t) return !1;
  for (let e of [`major`, `minor`, `patch`]) if (n[e] !== r[e]) return n[e] > r[e];
  return !1;
}
var Xe = 6048e5,
  Ze = 72e5,
  Qe = 36e5,
  $e = 7,
  et = 864e5,
  M = r.A((e) => (typeof e == `number` && Number.isInteger(e) ? e : null), r.D().int().nullable()),
  tt = r.O({
    relaunchNotification: M,
    relaunchNotificationPeriodMs: M,
    relaunchWindow: r
      .L()
      .optional()
      .transform((e) => e ?? null),
    relaunchFastIfOutdatedDays: M,
  }),
  nt = r.O({ entries: r.h(r.O({ duration_mins: M, start: r.O({ hour: M, minute: M }) })) }),
  rt = r.O({
    owlUpdatePolicies: r.O({
      getRelaunchNotificationPolicy: r.v((e) => typeof e == `function`),
      on: r.v((e) => typeof e == `function`),
    }),
  });
function it() {
  let e = process._linkedBinding;
  if (typeof e != `function`) return null;
  let t;
  try {
    t = e.call(process, `electron_browser_owl_update_policies`);
  } catch {
    return null;
  }
  return ct(t) ? t.owlUpdatePolicies : null;
}
function at(e) {
  return st(e.getRelaunchNotificationPolicy());
}
function ot(e, t) {
  return dt(e + lt(t), t.relaunchWindow);
}
function st(e) {
  let t = tt.safeParse(e);
  return t.success ? t.data : null;
}
function ct(e) {
  return rt.safeParse(e).success;
}
function lt(e) {
  let { relaunchNotificationPeriodMs: t } = e,
    n;
  return ((n = t == null || t < Qe ? Xe : t), ut(e.relaunchFastIfOutdatedDays) ? Math.min(n, Ze) : n);
}
function ut(e) {
  if (e == null || e < $e) return !1;
  let t = a.Ni(y.app.getVersion());
  return t ? Date.now() - t.getTime() > e * et : !1;
}
function dt(e, t) {
  let n = ft(t);
  if (!n || n.durationMs >= 864e5) return e;
  let r = pt(e, n),
    i = r + n.durationMs;
  return e >= r && e < i ? e : e >= i ? ht(mt(r, 1), n) : e < mt(r, -1) + n.durationMs ? e : ht(r, n);
}
function ft(e) {
  let t = nt.safeParse(e);
  if (!t.success) return null;
  let n = t.data.entries[0];
  if (n == null) return null;
  let { hour: r, minute: i } = n.start,
    a = n.duration_mins;
  return r == null || i == null || a == null || r < 0 || r > 23 || i < 0 || i > 59 || a < 1 || a > 1440
    ? null
    : { durationMs: a * 60 * 1e3, hour: r, minute: i };
}
function pt(e, t) {
  let n = new Date(e);
  return (n.setHours(t.hour, t.minute, 0, 0), n.getTime());
}
function mt(e, t) {
  let n = new Date(e);
  return (n.setDate(n.getDate() + t), n.getTime());
}
function ht(e, t) {
  return e + Math.floor(Math.random() * t.durationMs);
}
var gt = `codex_desktop:message-from-view`,
  _t = `codex_desktop:message-for-view`,
  vt = `codex_desktop:chunked-message-ack`,
  yt = `codex_desktop:remote-hosted-pip-video-frame`,
  bt = `codex_desktop:browser-sidebar-runtime-message`,
  xt = `codex_desktop:browser-page-event`,
  St = `codex_desktop:mcp-app-sandbox-guest-message`,
  Ct = `codex_desktop:mcp-app-sandbox-host-message`,
  wt = `codex_desktop:show-context-menu`,
  Tt = `codex_desktop:get-sentry-init-options`,
  Et = `codex_desktop:get-build-flavor`,
  Dt = `codex_desktop:get-system-theme-variant`,
  Ot = `codex_desktop:get-shared-object-snapshot`,
  kt = `codex_desktop:get-initial-sidebar-bootstrap`,
  At = `codex_desktop:get-fast-mode-rollout-metrics`,
  jt = `codex_desktop:system-theme-variant-updated`,
  Mt = `codex_desktop:trigger-sentry-test`,
  Nt = `codex_desktop:connect-app-host`,
  Pt = `codex_desktop:start-file-drag`,
  Ft = `codex_desktop:start-link-drag`,
  It = `icons`,
  Lt = `https://chatgpt.com/backend-api`,
  Rt = `http://localhost:8000/api`,
  zt = `Codex Desktop`,
  Bt = `codex_desktop`;
function Vt(e) {
  return `codex_desktop:worker:${e}:from-view`;
}
function Ht(e) {
  return `codex_desktop:worker:${e}:for-view`;
}
var Ut = { darwin: `Mac OS`, linux: `X11; Linux`, win32: `Windows NT 10.0` };
function Wt({ appVersion: e, platform: t = process.platform, arch: n = process.arch }) {
  return `Codex Desktop/${e} (${Ut[t] ?? t}; ${n})`;
}
function Gt() {
  let e = process.env.CODEX_APP_VERSION?.trim();
  return !y.app.isPackaged && e ? e : y.app.getVersion();
}
var Kt = class extends Error {
  constructor(e) {
    super(`Sign in to ChatGPT to ${e}.`);
  }
};
function qt(e) {
  let t = process.env.CODEX_API_BASE_URL;
  return t && t.trim().length > 0
    ? t.replace(/\/+$/, ``)
    : (process.env.CODEX_API_ENDPOINT ?? ``).toLowerCase() === `localhost`
      ? e.devApiBaseUrl
      : e.prodApiBaseUrl;
}
function Jt(e, t) {
  return i.$n(qt(e), t);
}
async function Yt({
  action: e,
  appServerClient: t,
  desktopOriginator: n,
  headers: r = {},
  refreshToken: i = !1,
}) {
  let a = await t.getAuthToken({ refreshToken: i });
  if (!a) throw Error(`Sign in to ChatGPT to ${e}.`);
  let o = { ...r };
  return ($t(o, a, { desktopOriginator: n }), o);
}
async function Xt(
  { action: e, appServerClient: t, desktopApiOptions: n, path: r, request: i = {}, beforeSend: o },
  s = y.net.fetch.bind(y.net),
) {
  i.signal?.throwIfAborted();
  let c = t.getBackendRequestAuth({ refreshToken: !1 }),
    l = await (i.signal == null ? c : a.Ai(c, i.signal));
  if (l == null) throw new Kt(e);
  let u = i.signal == null ? l.signal : AbortSignal.any([l.signal, i.signal]),
    d = async (e) => {
      let t = Object.fromEntries(new Headers(i.headers));
      (Qt(t.authorization?.replace(/^Bearer /i, ``), e), $t(t, e.token, n));
      let a = Zt(Jt(n, r), t, e);
      (await o?.(e), u.throwIfAborted());
      let c = await s(a, { ...i, headers: t, signal: u, redirect: `error` });
      return (u.throwIfAborted(), c);
    },
    f = await d(l);
  if (f.status === 401) {
    (await f.body?.cancel(), u.throwIfAborted());
    let n = await a.Ai(t.getBackendRequestAuth({ refreshToken: !0 }), u);
    if ((u.throwIfAborted(), n == null)) throw new Kt(e);
    f = await d(n);
  }
  return new Response(f.body?.pipeThrough(new TransformStream(), { signal: u }) ?? null, {
    status: f.status,
    statusText: f.statusText,
    headers: f.headers,
  });
}
function Zt(e, t, n) {
  n.signal.throwIfAborted();
  for (let e of Object.keys(t)) e.toLowerCase() === `x-openai-account-routing-override` && delete t[e];
  if (n.routing.kind === `legacy`) return e;
  let { workspace: r } = n.routing;
  r.accountRoutingOverride !== `NO_CONSTRAINT` &&
    (t[`X-OpenAI-Account-Routing-Override`] = r.accountRoutingOverride);
  let i = new URL(e);
  return `${r.backendOrigin}${i.pathname}${i.search}`;
}
function Qt(e, t) {
  if (e == null || e === t.token) return;
  let n = a.mi(e),
    r = a.mi(t.token);
  if (n == null || r == null || n.accountId !== r.accountId || n.userId !== r.userId)
    throw new DOMException(`Authenticated workspace changed`, `AbortError`);
}
function $t(e, t, { desktopOriginator: n, includeSurfaceHeaders: r = !0 }) {
  let i = a.hi(t);
  if (
    (rn(e, `Authorization`, `Bearer ${t}`),
    i?.accountId && rn(e, `ChatGPT-Account-Id`, i.accountId),
    i?.isFedramp === !0)
  )
    rn(e, `X-OpenAI-Fedramp`, `true`);
  else {
    let t = an(e, `X-OpenAI-Fedramp`);
    t != null && delete e[t];
  }
  r && en(e, { desktopOriginator: n });
}
function en(e, { desktopOriginator: t }) {
  (nn(e, `originator`) || rn(e, `originator`, t),
    nn(e, `User-Agent`) || rn(e, `User-Agent`, Wt({ appVersion: Gt() })));
}
function tn(e) {
  return a.hi(e)?.accountId ?? null;
}
function nn(e, t) {
  return an(e, t) != null;
}
function rn(e, t, n) {
  let r = an(e, t);
  (r && delete e[r], (e[t] = n));
}
function an(e, t) {
  let n = t.toLowerCase();
  return Object.keys(e).find((e) => e.toLowerCase() === n);
}
var on = `codex/app/appcast`,
  sn = `wham/app/appcast`,
  cn = l.a(`production-appcast`);
function ln({ beta: e, installationId: t, planType: n }) {
  let r = process.arch;
  if (r !== `arm64` && r !== `x64`)
    return (cn().warning(`Unsupported production appcast architecture`), null);
  let i = y.app.getVersion();
  try {
    if (a.Mi(a.Li(i)) !== i) return (cn().warning(`Invalid production appcast app version`), null);
  } catch {
    return (cn().warning(`Invalid production appcast app version`), null);
  }
  let o = un();
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
function un() {
  let e = new URL(Jt({ desktopOriginator: zt, devApiBaseUrl: Rt, prodApiBaseUrl: Lt }, sn));
  return (
    [`localhost`, `127.0.0.1`, `[::1]`].includes(e.hostname.toLowerCase()) && (e.pathname = `/api/${on}`),
    e.origin === `https://chatgpt.com` ? new URL(`https://updates.oaistatic.com/codex/app/appcast`) : e
  );
}
async function dn(e, t) {
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
function fn(e, t) {
  let n = pn(e),
    r = pn(t),
    i = Math.max(n.length, r.length);
  for (let e = 0; e < i; e += 1) {
    let t = n[e] ?? 0,
      i = r[e] ?? 0;
    if (t !== i) return t - i;
  }
  return 0;
}
function pn(e) {
  let t = e.trim().split(`.`);
  if (t.some((e) => !/^\d+$/.test(e))) throw Error(`Invalid build version '${e}'.`);
  return t.map((e) => Number.parseInt(e, 10));
}
var mn = 61e3;
async function hn() {
  let e = mn - process.uptime() * 1e3;
  e > 0 && (await (0, D.setTimeout)(e));
}
var gn = l.a(`windows-updater`),
  _n = class {
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
        (gn().error(`Failed to install prepared Windows update`, { safe: {}, sensitive: { error: e } }),
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
          gn().error(`Failed to check for Windows updates`, { safe: {}, sensitive: { error: t } }),
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
          await hn(),
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
      if (fn(e.buildVersion, this.options.buildVersion) <= 0) {
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
          : (gn().warning(`Discarding invalid Windows updater staged state.`, {
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
      let a = await dn(
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
  vn = l.a(`windows-store-updater`),
  yn = class {
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
          vn().error(`Failed to install Windows Store update`, { safe: {}, sensitive: { error: e } }),
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
          vn().error(`Failed to check for Windows Store updates`, { safe: {}, sensitive: { error: e } }),
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
          vn().warning(`Unable to discover Windows updates`, { safe: {}, sensitive: { error: e } }),
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
        await hn(),
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
  bn = class {
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
  xn = r.O({
    packageUrl: r.R({ protocol: /^https$/ }),
    length: r.D().int().positive(),
    sha256: r
      .N()
      .regex(/^[a-f0-9]{64}$/i)
      .transform((e) => e.toLowerCase()),
  }),
  Sn = xn
    .partial()
    .extend({
      buildVersion: r.N().regex(/^\d+(?:\.\d+)*$/),
      packageIdentity: r.N(),
      packagePublisher: r.N().optional(),
      packages: r.h(xn.extend({ arch: r.N() })).optional(),
    }),
  Cn = r.O({
    schemaVersion: r.w(1),
    packageVersion: r.N().regex(/^\d+(?:\.\d+){3}$/),
    packages: r.h(
      r.O({
        architecture: r.N().transform((e) => (e === `x86_64` ? `x64` : e)),
        downloadUrl: r.R({ protocol: /^https$/ }),
      }),
    ),
  }),
  wn = class {
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
        if (fn(n.buildVersion, this.options.buildVersion) > 0) t = n.buildVersion;
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
            ? Cn.parse(await this.fetchJson(this.options.storeReleaseFeedUrl))
            : await this.readManifest(),
        n = `schemaVersion` in t ? t.packageVersion : t.buildVersion,
        r = fn(n, this.options.buildVersion) > 0;
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
            : xn.parse(t.packages ? t.packages.find((e) => e.arch === process.arch) : t),
      };
    }
    async readManifest() {
      let e = Sn.parse(await this.fetchJson(this.options.manifestUrl));
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
  Tn = (0, ne.createRequire)(__filename),
  En = 3e5,
  Dn = 18e6,
  On = 6e4,
  kn = 864e5,
  An = 3,
  jn = 2 ** 31 - 1;
function Mn() {
  let e = process.env.SPARKLE_UPDATE_INTERVAL_MINUTES;
  if (!e) return 9e5;
  let t = Number(e);
  return Number.isFinite(t) ? (t <= 0 ? 0 : t * 60 * 1e3) : 9e5;
}
var Nn = class {
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
      this.logger.info(`in_app_updates_policy_wait_started`, { safe: { timeoutMs: En } }),
      (this.inAppUpdatesLaunchPolicyTimer = setTimeout(() => {
        ((this.inAppUpdatesLaunchPolicyTimer = null),
          this.logger.info(`in_app_updates_policy_timeout`, {
            safe: { timeoutMs: En, policy: this.inAppUpdatesLaunchPolicy },
          }),
          this.allowInAppUpdatesForLaunch());
      }, En)),
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
    this.setRelaunchNotice(Date.now() + Dn);
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
    ((0, He.default)(this.sparkleQueryParams, e) && this.pendingSparkleQueryParams == null) ||
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
        let n = ln({
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
    let e = j();
    if (!e) {
      this.lastUnavailableReason = `failed to load native windows updater`;
      return;
    }
    let t = n.a(`codexWindowsPackageIdentity`)?.trim() ?? ``,
      r = n.i.getWindowsStoreConfig(this.options.buildFlavor, t),
      i = n.a(`codexWindowsPackagePublisher`)?.trim() ?? ``,
      a = r?.storeUpdateManifestUrl ?? this.resolveWindowsUpdateUrl();
    if (!a) return;
    let o = new wn({
        nativeAddon: e,
        manifestUrl: a,
        storeReleaseFeedUrl: r?.storeReleaseFeedUrl,
        getStorePackageUrl: r ? (e) => Fn(r.storeUpdateManifestUrl, e) : null,
        buildVersion: r ? this.resolveWindowsStoreBuildVersion() : this.resolveBuildVersion(),
        packageIdentity: t,
        packagePublisher: i,
      }),
      s = Mn(),
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
        n = new yn({
          checkIntervalMs: e ? 0 : s,
          checkOnInitialize: !e,
          ...c,
          onUpdateReadyChanged: e ? void 0 : c.onUpdateReadyChanged,
        });
      l = e
        ? new bn({
            checkIntervalMs: s,
            storeUpdater: n,
            onUpdateReadyChanged: c.onUpdateReadyChanged,
            msixFallbackUpdater: new _n({
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
      l = new _n({
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
    let e = new Ke({
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
      let t = ln({
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
      s = Tn((0, g.join)(process.resourcesPath, `native`, `sparkle.node`));
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
        e && !(0, He.default)(a, e) && (l.setCookieHeader(e.Cookie), (a = e));
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
      let e = Mn();
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
      return a.Ii(e);
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
    let n = e ? Pn(t) : null;
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
    ((this.owlUpdatePolicies = it()),
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
    let t = ot(this.updateDownloadedAtMs, e),
      n = Math.ceil(Math.max(0, t - this.updateDownloadedAtMs) / An),
      r = this.updateDownloadedAtMs + n;
    (this.setRelaunchNotice(Date.now() < r ? null : t),
      this.scheduleForcedUpdateInstallAt(Math.max(t, this.forcedUpdateRetryAtMs ?? t), t, r));
  }
  scheduleForcedUpdateInstallAt(e, t, n) {
    let r = Date.now(),
      i = t - kn,
      a = Math.max(0, (r < n ? Math.min(e, n) : r < i ? Math.min(e, i) : e) - r),
      o = Math.min(a, jn);
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
    return this.owlUpdatePolicies ? at(this.owlUpdatePolicies) : null;
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
        (this.forcedUpdateRetryAtMs = Date.now() + On),
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
    return { deadlineAtMs: e, dismissable: e - t > kn, reportedAtMs: t };
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
function Pn(e) {
  let t = e?.match(/^(ChatGPT|Codex)(?: \([^)]+\))?-darwin-/)?.[1];
  return i.da(t?.toLowerCase()) ?? null;
}
function Fn(e, t) {
  return new URL(`releases/${encodeURIComponent(t)}/ChatGPT-${process.arch}.msix`, e).toString();
}
var In = /^dev-[a-z0-9-]+\.chatgpt-staging\.com$/;
function Ln(e) {
  try {
    let t = new URL(e);
    return t.protocol !== `https:` ||
      t.port !== `` ||
      t.username !== `` ||
      t.password !== `` ||
      (t.hostname !== `chatgpt-staging.com` && !In.test(t.hostname))
      ? null
      : t.origin;
  } catch {
    return null;
  }
}
function Rn(e, t) {
  if (
    e.protocol !== `https:` ||
    e.host !== `realtime.chatgpt-staging.com` ||
    e.pathname !== `/v1/cua` ||
    e.username !== `` ||
    e.password !== `` ||
    Ln(t) == null
  )
    return !1;
  let n = new URL(t).hostname.match(/^(dev-ephemeral-pr[0-9]+)\.chatgpt-staging\.com$/)?.[1],
    r = e.searchParams.getAll(`staging_env`);
  return n == null ? r.length === 0 : r.length === 1 && r[0] === n;
}
var zn = new WeakSet();
function Bn(e) {
  (zn.add(e), e.setWebsiteReportingEnabled(!1));
}
function Vn(e) {
  let t = new WeakSet(),
    n = (n) => {
      t.has(n) ||
        (t.add(n),
        n.setWebsiteReportingEnabled(!1),
        e.then(
          (e) => n.setWebsiteReportingEnabled(e && !zn.has(n)),
          () => {},
        ));
    };
  (y.app.on(`session-created`, n), y.app.whenReady().then(() => n(y.session.defaultSession)));
}
var Hn = class {
  devRendererOrigin;
  startupPolicy;
  state = { kind: `loading`, ready: a.ji() };
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
            Bn(t),
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
      !this.disposed && this.state.kind !== `loading` && (this.state = { kind: `loading`, ready: a.ji() }));
  }
  allowsPreauthStatsigRequest(e, t) {
    if (this.state.kind === `failed` || !Un(e, t)) return !1;
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
function Un(e, t) {
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
var Wn = void 0,
  Gn = l.a(`codex-build-number`);
function Kn() {
  return (
    process.env.CODEX_BUILD_NUMBER?.trim() ||
    (y.app.isPackaged
      ? n.a(`codexBuildNumber`) || (Gn().error(`CodexBuildNumber missing from package metadata.`), null)
      : null)
  );
}
var qn = {
    get value() {
      return (Wn === void 0 && (Wn = Kn()), Wn);
    },
  },
  Jn = `production-appcast-bootstrap.json`,
  Yn = r.O({ backendAppcastEnabled: r._().optional(), installationId: r.z().optional() }),
  Xn = class {
    logger = l.a(`production-appcast-state`);
    filePath;
    state;
    constructor(e) {
      ((this.filePath = (0, g.join)(e, Jn)), (this.state = this.readState()));
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
        return Yn.parse(JSON.parse((0, h.readFileSync)(this.filePath, `utf8`)));
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
  Zn = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.VERSION = void 0), (e.VERSION = `1.9.1`));
  }),
  Qn = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.isCompatible = e._makeCompatibilityCheck = void 0));
    var t = Zn(),
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
  $n = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.unregisterGlobal = e.getGlobal = e.registerGlobal = void 0));
    var t = Zn(),
      n = Qn(),
      r = t.VERSION.split(`.`)[0],
      i = Symbol.for(`opentelemetry.js.api.${r}`),
      a =
        typeof globalThis == `object`
          ? globalThis
          : typeof self == `object`
            ? self
            : typeof window == `object`
              ? window
              : typeof global == `object`
                ? global
                : {};
    function o(e, n, r, o = !1) {
      let s = (a[i] = a[i] ?? { version: t.VERSION });
      if (!o && s[e]) {
        let t = Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
        return (r.error(t.stack || t.message), !1);
      }
      if (s.version !== t.VERSION) {
        let n = Error(
          `@opentelemetry/api: Registration of version v${s.version} for ${e} does not match previously registered API v${t.VERSION}`,
        );
        return (r.error(n.stack || n.message), !1);
      }
      return ((s[e] = n), r.debug(`@opentelemetry/api: Registered a global for ${e} v${t.VERSION}.`), !0);
    }
    e.registerGlobal = o;
    function s(e) {
      let t = a[i]?.version;
      if (t && (0, n.isCompatible)(t)) return a[i]?.[e];
    }
    e.getGlobal = s;
    function c(e, n) {
      n.debug(`@opentelemetry/api: Unregistering a global for ${e} v${t.VERSION}.`);
      let r = a[i];
      r && delete r[e];
    }
    e.unregisterGlobal = c;
  }),
  er = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.DiagComponentLogger = void 0));
    var t = $n();
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
      if (i) return i[e](n, ...r);
    }
  }),
  tr = e.t((e) => {
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
  nr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.createLogLevelDiagLogger = void 0));
    var t = tr();
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
  rr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.DiagAPI = void 0));
    var t = er(),
      n = nr(),
      r = tr(),
      i = $n(),
      a = `diag`;
    e.DiagAPI = class e {
      static instance() {
        return ((this._instance ||= new e()), this._instance);
      }
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
    };
  }),
  ir = e.t((e) => {
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
          return Array.from(this._entries.entries());
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
  ar = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.baggageEntryMetadataSymbol = void 0),
      (e.baggageEntryMetadataSymbol = Symbol(`BaggageEntryMetadata`)));
  }),
  or = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.baggageEntryMetadataFromString = e.createBaggage = void 0));
    var t = rr(),
      n = ir(),
      r = ar(),
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
  sr = e.t((e) => {
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
  cr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.DiagConsoleLogger = e._originalConsoleMethods = void 0));
    var t = [
      { n: `error`, c: `error` },
      { n: `warn`, c: `warn` },
      { n: `info`, c: `info` },
      { n: `debug`, c: `debug` },
      { n: `verbose`, c: `trace` },
    ];
    if (((e._originalConsoleMethods = {}), typeof console < `u`))
      for (let t of [`error`, `warn`, `info`, `debug`, `trace`, `log`])
        typeof console[t] == `function` && (e._originalConsoleMethods[t] = console[t]);
    e.DiagConsoleLogger = class {
      constructor() {
        function n(t) {
          return function (...n) {
            let r = e._originalConsoleMethods[t];
            if (
              (typeof r != `function` && (r = e._originalConsoleMethods.log),
              typeof r != `function` &&
                console &&
                ((r = console[t]), typeof r != `function` && (r = console.log)),
              typeof r == `function`)
            )
              return r.apply(console, n);
          };
        }
        for (let e = 0; e < t.length; e++) this[t[e].n] = n(t[e].c);
      }
    };
  }),
  lr = e.t((e) => {
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
  ur = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ValueType = void 0),
      (function (e) {
        ((e[(e.INT = 0)] = `INT`), (e[(e.DOUBLE = 1)] = `DOUBLE`));
      })((e.ValueType ||= {})));
  }),
  dr = e.t((e) => {
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
  fr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.NoopContextManager = void 0));
    var t = sr();
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
  pr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ContextAPI = void 0));
    var t = fr(),
      n = $n(),
      r = rr(),
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
  mr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.TraceFlags = void 0),
      (function (e) {
        ((e[(e.NONE = 0)] = `NONE`), (e[(e.SAMPLED = 1)] = `SAMPLED`));
      })((e.TraceFlags ||= {})));
  }),
  hr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = void 0));
    var t = mr();
    ((e.INVALID_SPANID = `0000000000000000`),
      (e.INVALID_TRACEID = `00000000000000000000000000000000`),
      (e.INVALID_SPAN_CONTEXT = {
        traceId: e.INVALID_TRACEID,
        spanId: e.INVALID_SPANID,
        traceFlags: t.TraceFlags.NONE,
      }));
  }),
  gr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.NonRecordingSpan = void 0));
    var t = hr();
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
  _r = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getSpanContext =
        e.setSpanContext =
        e.deleteSpan =
        e.setSpan =
        e.getActiveSpan =
        e.getSpan =
          void 0));
    var t = sr(),
      n = gr(),
      r = pr(),
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
  vr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.wrapSpanContext = e.isSpanContextValid = e.isValidSpanId = e.isValidTraceId = void 0));
    var t = hr(),
      n = gr(),
      r = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
        1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
        1,
      ]);
    function i(e, t) {
      if (typeof e != `string` || e.length !== t) return !1;
      let n = 0;
      for (let t = 0; t < e.length; t += 4)
        n +=
          (r[e.charCodeAt(t)] | 0) +
          (r[e.charCodeAt(t + 1)] | 0) +
          (r[e.charCodeAt(t + 2)] | 0) +
          (r[e.charCodeAt(t + 3)] | 0);
      return n === t;
    }
    function a(e) {
      return i(e, 32) && e !== t.INVALID_TRACEID;
    }
    e.isValidTraceId = a;
    function o(e) {
      return i(e, 16) && e !== t.INVALID_SPANID;
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
  yr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.NoopTracer = void 0));
    var t = pr(),
      n = _r(),
      r = gr(),
      i = vr(),
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
        !!e &&
        `spanId` in e &&
        typeof e.spanId == `string` &&
        `traceId` in e &&
        typeof e.traceId == `string` &&
        `traceFlags` in e &&
        typeof e.traceFlags == `number`
      );
    }
  }),
  br = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ProxyTracer = void 0));
    var t = new (yr().NoopTracer)();
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
  xr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.NoopTracerProvider = void 0));
    var t = yr();
    e.NoopTracerProvider = class {
      getTracer(e, n, r) {
        return new t.NoopTracer();
      }
    };
  }),
  Sr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ProxyTracerProvider = void 0));
    var t = br(),
      n = new (xr().NoopTracerProvider)();
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
  Cr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SamplingDecision = void 0),
      (function (e) {
        ((e[(e.NOT_RECORD = 0)] = `NOT_RECORD`),
          (e[(e.RECORD = 1)] = `RECORD`),
          (e[(e.RECORD_AND_SAMPLED = 2)] = `RECORD_AND_SAMPLED`));
      })((e.SamplingDecision ||= {})));
  }),
  wr = e.t((e) => {
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
  Tr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SpanStatusCode = void 0),
      (function (e) {
        ((e[(e.UNSET = 0)] = `UNSET`), (e[(e.OK = 1)] = `OK`), (e[(e.ERROR = 2)] = `ERROR`));
      })((e.SpanStatusCode ||= {})));
  }),
  Er = e.t((e) => {
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
  Dr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.TraceStateImpl = void 0));
    var t = Er(),
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
        return Array.from(this._internalState.keys())
          .reduceRight((e, t) => (e.push(t + a + this.get(t)), e), [])
          .join(i);
      }
      _parse(e) {
        e.length > r ||
          ((this._internalState = e.split(i).reduceRight((e, n) => {
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
  Or = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.createTraceState = void 0));
    var t = Dr();
    function n(e) {
      return new t.TraceStateImpl(e);
    }
    e.createTraceState = n;
  }),
  kr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.context = void 0),
      (e.context = pr().ContextAPI.getInstance()));
  }),
  Ar = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.diag = void 0),
      (e.diag = rr().DiagAPI.instance()));
  }),
  jr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.NOOP_METER_PROVIDER = e.NoopMeterProvider = void 0));
    var t = lr(),
      n = class {
        getMeter(e, n, r) {
          return t.NOOP_METER;
        }
      };
    ((e.NoopMeterProvider = n), (e.NOOP_METER_PROVIDER = new n()));
  }),
  Mr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.MetricsAPI = void 0));
    var t = jr(),
      n = $n(),
      r = rr(),
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
  Nr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.metrics = void 0),
      (e.metrics = Mr().MetricsAPI.getInstance()));
  }),
  Pr = e.t((e) => {
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
  Fr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.deleteBaggage = e.setBaggage = e.getActiveBaggage = e.getBaggage = void 0));
    var t = pr(),
      n = (0, sr().createContextKey)(`OpenTelemetry Baggage Key`);
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
  Ir = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.PropagationAPI = void 0));
    var t = $n(),
      n = Pr(),
      r = dr(),
      i = Fr(),
      a = or(),
      o = rr(),
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
  Lr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.propagation = void 0),
      (e.propagation = Ir().PropagationAPI.getInstance()));
  }),
  Rr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.TraceAPI = void 0));
    var t = $n(),
      n = Sr(),
      r = vr(),
      i = _r(),
      a = rr(),
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
  zr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.trace = void 0),
      (e.trace = Rr().TraceAPI.getInstance()));
  }),
  N = e.t((e) => {
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
    var t = or();
    Object.defineProperty(e, "baggageEntryMetadataFromString", {
      enumerable: !0,
      get: function () {
        return t.baggageEntryMetadataFromString;
      },
    });
    var n = sr();
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
    var r = cr();
    Object.defineProperty(e, "DiagConsoleLogger", {
      enumerable: !0,
      get: function () {
        return r.DiagConsoleLogger;
      },
    });
    var i = tr();
    Object.defineProperty(e, "DiagLogLevel", {
      enumerable: !0,
      get: function () {
        return i.DiagLogLevel;
      },
    });
    var a = lr();
    Object.defineProperty(e, "createNoopMeter", {
      enumerable: !0,
      get: function () {
        return a.createNoopMeter;
      },
    });
    var o = ur();
    Object.defineProperty(e, "ValueType", {
      enumerable: !0,
      get: function () {
        return o.ValueType;
      },
    });
    var s = dr();
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
    var c = br();
    Object.defineProperty(e, "ProxyTracer", {
      enumerable: !0,
      get: function () {
        return c.ProxyTracer;
      },
    });
    var l = Sr();
    Object.defineProperty(e, "ProxyTracerProvider", {
      enumerable: !0,
      get: function () {
        return l.ProxyTracerProvider;
      },
    });
    var u = Cr();
    Object.defineProperty(e, "SamplingDecision", {
      enumerable: !0,
      get: function () {
        return u.SamplingDecision;
      },
    });
    var d = wr();
    Object.defineProperty(e, "SpanKind", {
      enumerable: !0,
      get: function () {
        return d.SpanKind;
      },
    });
    var f = Tr();
    Object.defineProperty(e, "SpanStatusCode", {
      enumerable: !0,
      get: function () {
        return f.SpanStatusCode;
      },
    });
    var p = mr();
    Object.defineProperty(e, "TraceFlags", {
      enumerable: !0,
      get: function () {
        return p.TraceFlags;
      },
    });
    var m = Or();
    Object.defineProperty(e, "createTraceState", {
      enumerable: !0,
      get: function () {
        return m.createTraceState;
      },
    });
    var h = vr();
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
    var g = hr();
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
    var _ = kr();
    Object.defineProperty(e, "context", {
      enumerable: !0,
      get: function () {
        return _.context;
      },
    });
    var v = Ar();
    Object.defineProperty(e, "diag", {
      enumerable: !0,
      get: function () {
        return v.diag;
      },
    });
    var y = Nr();
    Object.defineProperty(e, "metrics", {
      enumerable: !0,
      get: function () {
        return y.metrics;
      },
    });
    var b = Lr();
    Object.defineProperty(e, "propagation", {
      enumerable: !0,
      get: function () {
        return b.propagation;
      },
    });
    var x = zr();
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
function Br(e) {
  return e.setValue(Wr, !0);
}
function Vr(e) {
  return e.deleteValue(Wr);
}
function Hr(e) {
  return e.getValue(Wr) === !0;
}
var Ur,
  Wr,
  Gr = e.n(() => {
    ((Ur = e.a(N())), (Wr = (0, Ur.createContextKey)(`OpenTelemetry SDK Context Key SUPPRESS_TRACING`)));
  }),
  Kr,
  qr,
  Jr = e.n(() => {
    ((Kr = `baggage`), (qr = 4096));
  });
function Yr(e) {
  return e.reduce((e, t) => {
    let n = `${e}${e === `` ? `` : `,`}${t}`;
    return n.length > 8192 ? e : n;
  }, ``);
}
function Xr(e) {
  return e.getAllEntries().map(([e, t]) => {
    let n = `${encodeURIComponent(e)}=${encodeURIComponent(t.value)}`;
    return (t.metadata !== void 0 && (n += `;` + t.metadata.toString()), n);
  });
}
function Zr(e) {
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
    t.length > 0 && (o = (0, $r.baggageEntryMetadataFromString)(t.join(`;`))),
    { key: i, value: a, metadata: o }
  );
}
function Qr(e) {
  let t = {};
  return (
    typeof e == `string` &&
      e.length > 0 &&
      e.split(`,`).forEach((e) => {
        let n = Zr(e);
        n !== void 0 && n.value.length > 0 && (t[n.key] = n.value);
      }),
    t
  );
}
var $r,
  ei = e.n(() => {
    (($r = e.a(N())), Jr());
  }),
  ti,
  ni,
  ri = e.n(() => {
    ((ti = e.a(N())),
      Gr(),
      Jr(),
      ei(),
      (ni = class {
        inject(e, t, n) {
          let r = ti.propagation.getBaggage(e);
          if (!r || Hr(e)) return;
          let i = Yr(
            Xr(r)
              .filter((e) => e.length <= qr)
              .slice(0, 180),
          );
          i.length > 0 && n.set(t, Kr, i);
        }
        extract(e, t, n) {
          let r = n.get(t, Kr),
            i = Array.isArray(r) ? r.join(`,`) : r;
          if (!i) return e;
          let a = {};
          return i.length === 0 ||
            (i.split(`,`).forEach((e) => {
              let t = Zr(e);
              if (t) {
                let e = { value: t.value };
                (t.metadata && (e.metadata = t.metadata), (a[t.key] = e));
              }
            }),
            Object.entries(a).length === 0)
            ? e
            : ti.propagation.setBaggage(e, ti.propagation.createBaggage(a));
        }
        fields() {
          return [Kr];
        }
      }));
  }),
  ii,
  ai = e.n(() => {
    ii = class {
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
function oi(e) {
  let t = {};
  if (typeof e != `object` || !e) return t;
  for (let n in e) {
    if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
    if (!si(n)) {
      di.diag.warn(`Invalid attribute key: ${n}`);
      continue;
    }
    let r = e[n];
    if (!ci(r)) {
      di.diag.warn(`Invalid attribute value set for key: ${n}`);
      continue;
    }
    t[n] = Array.isArray(r) ? r.slice() : r;
  }
  return t;
}
function si(e) {
  return typeof e == `string` && e !== ``;
}
function ci(e) {
  return e == null ? !0 : Array.isArray(e) ? li(e) : ui(typeof e);
}
function li(e) {
  let t;
  for (let n of e) {
    if (n == null) continue;
    let e = typeof n;
    if (e !== t) {
      if (!t) {
        if (ui(e)) {
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
function ui(e) {
  switch (e) {
    case `number`:
    case `boolean`:
    case `string`:
      return !0;
  }
  return !1;
}
var di,
  fi = e.n(() => {
    di = e.a(N());
  });
function pi() {
  return (e) => {
    gi.diag.error(mi(e));
  };
}
function mi(e) {
  return typeof e == `string` ? e : JSON.stringify(hi(e));
}
function hi(e) {
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
var gi,
  _i = e.n(() => {
    gi = e.a(N());
  });
function vi(e) {
  bi = e;
}
function yi(e) {
  try {
    bi(e);
  } catch {}
}
var bi,
  xi = e.n(() => {
    (_i(), (bi = pi()));
  });
function P(e) {
  let t = process.env[e];
  if (t == null || t.trim() === ``) return;
  let n = Number(t);
  if (isNaN(n)) {
    Ti.diag.warn(`Unknown value ${(0, T.inspect)(t)} for ${e}, expected a number, using defaults`);
    return;
  }
  return n;
}
function Si(e) {
  let t = process.env[e];
  if (t != null && t.trim() !== ``) return t;
}
function Ci(e) {
  let t = process.env[e]?.trim().toLowerCase();
  return t == null || t === ``
    ? !1
    : t === `true` ||
        (t === `false` ||
          Ti.diag.warn(
            `Unknown value ${(0, T.inspect)(t)} for ${e}, expected 'true' or 'false', falling back to 'false' (default)`,
          ),
        !1);
}
function wi(e) {
  return Si(e)
    ?.split(`,`)
    .map((e) => e.trim())
    .filter((e) => e !== ``);
}
var Ti,
  Ei = e.n(() => {
    Ti = e.a(N());
  }),
  Di,
  Oi = e.n(() => {
    Di = typeof globalThis == `object` ? globalThis : global;
  }),
  ki,
  Ai = e.n(() => {
    ki = re.performance;
  }),
  ji,
  Mi = e.n(() => {
    ji = `2.2.0`;
  }),
  Ni = e.t((e) => {
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
  Pi = e.t((e) => {
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
    var t = Ni(),
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
      ne = `faas.document.operation`,
      re = `faas.document.time`,
      ie = `faas.document.name`,
      O = `faas.time`,
      k = `faas.cron`,
      ae = `faas.coldstart`,
      oe = `faas.invoked_name`,
      se = `faas.invoked_provider`,
      ce = `faas.invoked_region`,
      le = `net.transport`,
      ue = `net.peer.ip`,
      de = `net.peer.port`,
      fe = `net.peer.name`,
      pe = `net.host.ip`,
      me = `net.host.port`,
      he = `net.host.name`,
      ge = `net.host.connection.type`,
      _e = `net.host.connection.subtype`,
      ve = `net.host.carrier.name`,
      ye = `net.host.carrier.mcc`,
      A = `net.host.carrier.mnc`,
      be = `net.host.carrier.icc`,
      xe = `peer.service`,
      Se = `enduser.id`,
      Ce = `enduser.role`,
      we = `enduser.scope`,
      Te = `thread.id`,
      Ee = `thread.name`,
      De = `code.function`,
      Oe = `code.namespace`,
      ke = `code.filepath`,
      Ae = `code.lineno`,
      je = `http.method`,
      Me = `http.url`,
      Ne = `http.target`,
      Pe = `http.host`,
      Fe = `http.scheme`,
      Ie = `http.status_code`,
      Le = `http.flavor`,
      Re = `http.user_agent`,
      ze = `http.request_content_length`,
      j = `http.request_content_length_uncompressed`,
      Be = `http.response_content_length`,
      Ve = `http.response_content_length_uncompressed`,
      He = `http.server_name`,
      Ue = `http.route`,
      We = `http.client_ip`,
      Ge = `aws.dynamodb.table_names`,
      Ke = `aws.dynamodb.consumed_capacity`,
      qe = `aws.dynamodb.item_collection_metrics`,
      Je = `aws.dynamodb.provisioned_read_capacity`,
      Ye = `aws.dynamodb.provisioned_write_capacity`,
      Xe = `aws.dynamodb.consistent_read`,
      Ze = `aws.dynamodb.projection`,
      Qe = `aws.dynamodb.limit`,
      $e = `aws.dynamodb.attributes_to_get`,
      et = `aws.dynamodb.index_name`,
      M = `aws.dynamodb.select`,
      tt = `aws.dynamodb.global_secondary_indexes`,
      nt = `aws.dynamodb.local_secondary_indexes`,
      rt = `aws.dynamodb.exclusive_start_table`,
      it = `aws.dynamodb.table_count`,
      at = `aws.dynamodb.scan_forward`,
      ot = `aws.dynamodb.segment`,
      st = `aws.dynamodb.total_segments`,
      ct = `aws.dynamodb.count`,
      lt = `aws.dynamodb.scanned_count`,
      ut = `aws.dynamodb.attribute_definitions`,
      dt = `aws.dynamodb.global_secondary_index_updates`,
      ft = `messaging.system`,
      pt = `messaging.destination`,
      mt = `messaging.destination_kind`,
      ht = `messaging.temp_destination`,
      gt = `messaging.protocol`,
      _t = `messaging.protocol_version`,
      vt = `messaging.url`,
      yt = `messaging.message_id`,
      bt = `messaging.conversation_id`,
      xt = `messaging.message_payload_size_bytes`,
      St = `messaging.message_payload_compressed_size_bytes`,
      Ct = `messaging.operation`,
      wt = `messaging.consumer_id`,
      Tt = `messaging.rabbitmq.routing_key`,
      Et = `messaging.kafka.message_key`,
      Dt = `messaging.kafka.consumer_group`,
      Ot = `messaging.kafka.client_id`,
      kt = `messaging.kafka.partition`,
      At = `messaging.kafka.tombstone`,
      jt = `rpc.system`,
      Mt = `rpc.service`,
      Nt = `rpc.method`,
      Pt = `rpc.grpc.status_code`,
      Ft = `rpc.jsonrpc.version`,
      It = `rpc.jsonrpc.request_id`,
      Lt = `rpc.jsonrpc.error_code`,
      Rt = `rpc.jsonrpc.error_message`,
      zt = `message.type`,
      Bt = `message.id`,
      Vt = `message.compressed_size`,
      Ht = `message.uncompressed_size`;
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
      (e.SEMATTRS_FAAS_DOCUMENT_OPERATION = ne),
      (e.SEMATTRS_FAAS_DOCUMENT_TIME = re),
      (e.SEMATTRS_FAAS_DOCUMENT_NAME = ie),
      (e.SEMATTRS_FAAS_TIME = O),
      (e.SEMATTRS_FAAS_CRON = k),
      (e.SEMATTRS_FAAS_COLDSTART = ae),
      (e.SEMATTRS_FAAS_INVOKED_NAME = oe),
      (e.SEMATTRS_FAAS_INVOKED_PROVIDER = se),
      (e.SEMATTRS_FAAS_INVOKED_REGION = ce),
      (e.SEMATTRS_NET_TRANSPORT = le),
      (e.SEMATTRS_NET_PEER_IP = ue),
      (e.SEMATTRS_NET_PEER_PORT = de),
      (e.SEMATTRS_NET_PEER_NAME = fe),
      (e.SEMATTRS_NET_HOST_IP = pe),
      (e.SEMATTRS_NET_HOST_PORT = me),
      (e.SEMATTRS_NET_HOST_NAME = he),
      (e.SEMATTRS_NET_HOST_CONNECTION_TYPE = ge),
      (e.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = _e),
      (e.SEMATTRS_NET_HOST_CARRIER_NAME = ve),
      (e.SEMATTRS_NET_HOST_CARRIER_MCC = ye),
      (e.SEMATTRS_NET_HOST_CARRIER_MNC = A),
      (e.SEMATTRS_NET_HOST_CARRIER_ICC = be),
      (e.SEMATTRS_PEER_SERVICE = xe),
      (e.SEMATTRS_ENDUSER_ID = Se),
      (e.SEMATTRS_ENDUSER_ROLE = Ce),
      (e.SEMATTRS_ENDUSER_SCOPE = we),
      (e.SEMATTRS_THREAD_ID = Te),
      (e.SEMATTRS_THREAD_NAME = Ee),
      (e.SEMATTRS_CODE_FUNCTION = De),
      (e.SEMATTRS_CODE_NAMESPACE = Oe),
      (e.SEMATTRS_CODE_FILEPATH = ke),
      (e.SEMATTRS_CODE_LINENO = Ae),
      (e.SEMATTRS_HTTP_METHOD = je),
      (e.SEMATTRS_HTTP_URL = Me),
      (e.SEMATTRS_HTTP_TARGET = Ne),
      (e.SEMATTRS_HTTP_HOST = Pe),
      (e.SEMATTRS_HTTP_SCHEME = Fe),
      (e.SEMATTRS_HTTP_STATUS_CODE = Ie),
      (e.SEMATTRS_HTTP_FLAVOR = Le),
      (e.SEMATTRS_HTTP_USER_AGENT = Re),
      (e.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = ze),
      (e.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = j),
      (e.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = Be),
      (e.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = Ve),
      (e.SEMATTRS_HTTP_SERVER_NAME = He),
      (e.SEMATTRS_HTTP_ROUTE = Ue),
      (e.SEMATTRS_HTTP_CLIENT_IP = We),
      (e.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = Ge),
      (e.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = Ke),
      (e.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = qe),
      (e.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = Je),
      (e.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = Ye),
      (e.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = Xe),
      (e.SEMATTRS_AWS_DYNAMODB_PROJECTION = Ze),
      (e.SEMATTRS_AWS_DYNAMODB_LIMIT = Qe),
      (e.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = $e),
      (e.SEMATTRS_AWS_DYNAMODB_INDEX_NAME = et),
      (e.SEMATTRS_AWS_DYNAMODB_SELECT = M),
      (e.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = tt),
      (e.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = nt),
      (e.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = rt),
      (e.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = it),
      (e.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = at),
      (e.SEMATTRS_AWS_DYNAMODB_SEGMENT = ot),
      (e.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = st),
      (e.SEMATTRS_AWS_DYNAMODB_COUNT = ct),
      (e.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = lt),
      (e.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = ut),
      (e.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = dt),
      (e.SEMATTRS_MESSAGING_SYSTEM = ft),
      (e.SEMATTRS_MESSAGING_DESTINATION = pt),
      (e.SEMATTRS_MESSAGING_DESTINATION_KIND = mt),
      (e.SEMATTRS_MESSAGING_TEMP_DESTINATION = ht),
      (e.SEMATTRS_MESSAGING_PROTOCOL = gt),
      (e.SEMATTRS_MESSAGING_PROTOCOL_VERSION = _t),
      (e.SEMATTRS_MESSAGING_URL = vt),
      (e.SEMATTRS_MESSAGING_MESSAGE_ID = yt),
      (e.SEMATTRS_MESSAGING_CONVERSATION_ID = bt),
      (e.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = xt),
      (e.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = St),
      (e.SEMATTRS_MESSAGING_OPERATION = Ct),
      (e.SEMATTRS_MESSAGING_CONSUMER_ID = wt),
      (e.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = Tt),
      (e.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = Et),
      (e.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = Dt),
      (e.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = Ot),
      (e.SEMATTRS_MESSAGING_KAFKA_PARTITION = kt),
      (e.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = At),
      (e.SEMATTRS_RPC_SYSTEM = jt),
      (e.SEMATTRS_RPC_SERVICE = Mt),
      (e.SEMATTRS_RPC_METHOD = Nt),
      (e.SEMATTRS_RPC_GRPC_STATUS_CODE = Pt),
      (e.SEMATTRS_RPC_JSONRPC_VERSION = Ft),
      (e.SEMATTRS_RPC_JSONRPC_REQUEST_ID = It),
      (e.SEMATTRS_RPC_JSONRPC_ERROR_CODE = Lt),
      (e.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = Rt),
      (e.SEMATTRS_MESSAGE_TYPE = zt),
      (e.SEMATTRS_MESSAGE_ID = Bt),
      (e.SEMATTRS_MESSAGE_COMPRESSED_SIZE = Vt),
      (e.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = Ht),
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
        ne,
        re,
        ie,
        O,
        k,
        ae,
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
        ve,
        ye,
        A,
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
        Re,
        ze,
        j,
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
        $e,
        et,
        M,
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
        Vt,
        Ht,
      ])));
    var Ut = `other_sql`,
      Wt = `mssql`,
      Gt = `mysql`,
      Kt = `oracle`,
      qt = `db2`,
      Jt = `postgresql`,
      Yt = `redshift`,
      Xt = `hive`,
      Zt = `cloudscape`,
      Qt = `hsqldb`,
      $t = `progress`,
      en = `maxdb`,
      tn = `hanadb`,
      nn = `ingres`,
      rn = `firstsql`,
      an = `edb`,
      on = `cache`,
      sn = `adabas`,
      cn = `firebird`,
      ln = `derby`,
      un = `filemaker`,
      dn = `informix`,
      fn = `instantdb`,
      pn = `interbase`,
      mn = `mariadb`,
      hn = `netezza`,
      gn = `pervasive`,
      _n = `pointbase`,
      vn = `sqlite`,
      yn = `sybase`,
      bn = `teradata`,
      xn = `vertica`,
      Sn = `h2`,
      Cn = `coldfusion`,
      wn = `cassandra`,
      Tn = `hbase`,
      En = `mongodb`,
      Dn = `redis`,
      On = `couchbase`,
      kn = `couchdb`,
      An = `cosmosdb`,
      jn = `dynamodb`,
      Mn = `neo4j`,
      Nn = `geode`,
      Pn = `elasticsearch`,
      Fn = `memcached`,
      In = `cockroachdb`;
    ((e.DBSYSTEMVALUES_OTHER_SQL = Ut),
      (e.DBSYSTEMVALUES_MSSQL = Wt),
      (e.DBSYSTEMVALUES_MYSQL = Gt),
      (e.DBSYSTEMVALUES_ORACLE = Kt),
      (e.DBSYSTEMVALUES_DB2 = qt),
      (e.DBSYSTEMVALUES_POSTGRESQL = Jt),
      (e.DBSYSTEMVALUES_REDSHIFT = Yt),
      (e.DBSYSTEMVALUES_HIVE = Xt),
      (e.DBSYSTEMVALUES_CLOUDSCAPE = Zt),
      (e.DBSYSTEMVALUES_HSQLDB = Qt),
      (e.DBSYSTEMVALUES_PROGRESS = $t),
      (e.DBSYSTEMVALUES_MAXDB = en),
      (e.DBSYSTEMVALUES_HANADB = tn),
      (e.DBSYSTEMVALUES_INGRES = nn),
      (e.DBSYSTEMVALUES_FIRSTSQL = rn),
      (e.DBSYSTEMVALUES_EDB = an),
      (e.DBSYSTEMVALUES_CACHE = on),
      (e.DBSYSTEMVALUES_ADABAS = sn),
      (e.DBSYSTEMVALUES_FIREBIRD = cn),
      (e.DBSYSTEMVALUES_DERBY = ln),
      (e.DBSYSTEMVALUES_FILEMAKER = un),
      (e.DBSYSTEMVALUES_INFORMIX = dn),
      (e.DBSYSTEMVALUES_INSTANTDB = fn),
      (e.DBSYSTEMVALUES_INTERBASE = pn),
      (e.DBSYSTEMVALUES_MARIADB = mn),
      (e.DBSYSTEMVALUES_NETEZZA = hn),
      (e.DBSYSTEMVALUES_PERVASIVE = gn),
      (e.DBSYSTEMVALUES_POINTBASE = _n),
      (e.DBSYSTEMVALUES_SQLITE = vn),
      (e.DBSYSTEMVALUES_SYBASE = yn),
      (e.DBSYSTEMVALUES_TERADATA = bn),
      (e.DBSYSTEMVALUES_VERTICA = xn),
      (e.DBSYSTEMVALUES_H2 = Sn),
      (e.DBSYSTEMVALUES_COLDFUSION = Cn),
      (e.DBSYSTEMVALUES_CASSANDRA = wn),
      (e.DBSYSTEMVALUES_HBASE = Tn),
      (e.DBSYSTEMVALUES_MONGODB = En),
      (e.DBSYSTEMVALUES_REDIS = Dn),
      (e.DBSYSTEMVALUES_COUCHBASE = On),
      (e.DBSYSTEMVALUES_COUCHDB = kn),
      (e.DBSYSTEMVALUES_COSMOSDB = An),
      (e.DBSYSTEMVALUES_DYNAMODB = jn),
      (e.DBSYSTEMVALUES_NEO4J = Mn),
      (e.DBSYSTEMVALUES_GEODE = Nn),
      (e.DBSYSTEMVALUES_ELASTICSEARCH = Pn),
      (e.DBSYSTEMVALUES_MEMCACHED = Fn),
      (e.DBSYSTEMVALUES_COCKROACHDB = In),
      (e.DbSystemValues = (0, t.createConstMap)([
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
        Fn,
        In,
      ])));
    var Ln = `all`,
      Rn = `each_quorum`,
      zn = `quorum`,
      Bn = `local_quorum`,
      Vn = `one`,
      Hn = `two`,
      Un = `three`,
      Wn = `local_one`,
      Gn = `any`,
      Kn = `serial`,
      qn = `local_serial`;
    ((e.DBCASSANDRACONSISTENCYLEVELVALUES_ALL = Ln),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = Rn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = zn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = Bn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_ONE = Vn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_TWO = Hn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_THREE = Un),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = Wn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_ANY = Gn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = Kn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = qn),
      (e.DbCassandraConsistencyLevelValues = (0, t.createConstMap)([
        Ln,
        Rn,
        zn,
        Bn,
        Vn,
        Hn,
        Un,
        Wn,
        Gn,
        Kn,
        qn,
      ])));
    var Jn = `datasource`,
      Yn = `http`,
      Xn = `pubsub`,
      Zn = `timer`,
      Qn = `other`;
    ((e.FAASTRIGGERVALUES_DATASOURCE = Jn),
      (e.FAASTRIGGERVALUES_HTTP = Yn),
      (e.FAASTRIGGERVALUES_PUBSUB = Xn),
      (e.FAASTRIGGERVALUES_TIMER = Zn),
      (e.FAASTRIGGERVALUES_OTHER = Qn),
      (e.FaasTriggerValues = (0, t.createConstMap)([Jn, Yn, Xn, Zn, Qn])));
    var $n = `insert`,
      er = `edit`,
      tr = `delete`;
    ((e.FAASDOCUMENTOPERATIONVALUES_INSERT = $n),
      (e.FAASDOCUMENTOPERATIONVALUES_EDIT = er),
      (e.FAASDOCUMENTOPERATIONVALUES_DELETE = tr),
      (e.FaasDocumentOperationValues = (0, t.createConstMap)([$n, er, tr])));
    var nr = `alibaba_cloud`,
      rr = `aws`,
      ir = `azure`,
      ar = `gcp`;
    ((e.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = nr),
      (e.FAASINVOKEDPROVIDERVALUES_AWS = rr),
      (e.FAASINVOKEDPROVIDERVALUES_AZURE = ir),
      (e.FAASINVOKEDPROVIDERVALUES_GCP = ar),
      (e.FaasInvokedProviderValues = (0, t.createConstMap)([nr, rr, ir, ar])));
    var or = `ip_tcp`,
      sr = `ip_udp`,
      cr = `ip`,
      lr = `unix`,
      ur = `pipe`,
      dr = `inproc`,
      fr = `other`;
    ((e.NETTRANSPORTVALUES_IP_TCP = or),
      (e.NETTRANSPORTVALUES_IP_UDP = sr),
      (e.NETTRANSPORTVALUES_IP = cr),
      (e.NETTRANSPORTVALUES_UNIX = lr),
      (e.NETTRANSPORTVALUES_PIPE = ur),
      (e.NETTRANSPORTVALUES_INPROC = dr),
      (e.NETTRANSPORTVALUES_OTHER = fr),
      (e.NetTransportValues = (0, t.createConstMap)([or, sr, cr, lr, ur, dr, fr])));
    var pr = `wifi`,
      mr = `wired`,
      hr = `cell`,
      gr = `unavailable`,
      _r = `unknown`;
    ((e.NETHOSTCONNECTIONTYPEVALUES_WIFI = pr),
      (e.NETHOSTCONNECTIONTYPEVALUES_WIRED = mr),
      (e.NETHOSTCONNECTIONTYPEVALUES_CELL = hr),
      (e.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = gr),
      (e.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = _r),
      (e.NetHostConnectionTypeValues = (0, t.createConstMap)([pr, mr, hr, gr, _r])));
    var vr = `gprs`,
      yr = `edge`,
      br = `umts`,
      xr = `cdma`,
      Sr = `evdo_0`,
      Cr = `evdo_a`,
      wr = `cdma2000_1xrtt`,
      Tr = `hsdpa`,
      Er = `hsupa`,
      Dr = `hspa`,
      Or = `iden`,
      kr = `evdo_b`,
      Ar = `lte`,
      jr = `ehrpd`,
      Mr = `hspap`,
      Nr = `gsm`,
      Pr = `td_scdma`,
      Fr = `iwlan`,
      Ir = `nr`,
      Lr = `nrnsa`,
      Rr = `lte_ca`;
    ((e.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = vr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = yr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = br),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = xr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = Sr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = Cr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = wr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = Tr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = Er),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = Dr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = Or),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = kr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_LTE = Ar),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = jr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = Mr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_GSM = Nr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = Pr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = Fr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_NR = Ir),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = Lr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = Rr),
      (e.NetHostConnectionSubtypeValues = (0, t.createConstMap)([
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
        Lr,
        Rr,
      ])));
    var zr = `1.0`,
      N = `1.1`,
      Br = `2.0`,
      Vr = `SPDY`,
      Hr = `QUIC`;
    ((e.HTTPFLAVORVALUES_HTTP_1_0 = zr),
      (e.HTTPFLAVORVALUES_HTTP_1_1 = N),
      (e.HTTPFLAVORVALUES_HTTP_2_0 = Br),
      (e.HTTPFLAVORVALUES_SPDY = Vr),
      (e.HTTPFLAVORVALUES_QUIC = Hr),
      (e.HttpFlavorValues = { HTTP_1_0: zr, HTTP_1_1: N, HTTP_2_0: Br, SPDY: Vr, QUIC: Hr }));
    var Ur = `queue`,
      Wr = `topic`;
    ((e.MESSAGINGDESTINATIONKINDVALUES_QUEUE = Ur),
      (e.MESSAGINGDESTINATIONKINDVALUES_TOPIC = Wr),
      (e.MessagingDestinationKindValues = (0, t.createConstMap)([Ur, Wr])));
    var Gr = `receive`,
      Kr = `process`;
    ((e.MESSAGINGOPERATIONVALUES_RECEIVE = Gr),
      (e.MESSAGINGOPERATIONVALUES_PROCESS = Kr),
      (e.MessagingOperationValues = (0, t.createConstMap)([Gr, Kr])));
    var qr = 0,
      Jr = 1,
      Yr = 2,
      Xr = 3,
      Zr = 4,
      Qr = 5,
      $r = 6,
      ei = 7,
      ti = 8,
      ni = 9,
      ri = 10,
      ii = 11,
      ai = 12,
      oi = 13,
      si = 14,
      ci = 15,
      li = 16;
    ((e.RPCGRPCSTATUSCODEVALUES_OK = qr),
      (e.RPCGRPCSTATUSCODEVALUES_CANCELLED = Jr),
      (e.RPCGRPCSTATUSCODEVALUES_UNKNOWN = Yr),
      (e.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = Xr),
      (e.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = Zr),
      (e.RPCGRPCSTATUSCODEVALUES_NOT_FOUND = Qr),
      (e.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = $r),
      (e.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = ei),
      (e.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = ti),
      (e.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = ni),
      (e.RPCGRPCSTATUSCODEVALUES_ABORTED = ri),
      (e.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = ii),
      (e.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = ai),
      (e.RPCGRPCSTATUSCODEVALUES_INTERNAL = oi),
      (e.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = si),
      (e.RPCGRPCSTATUSCODEVALUES_DATA_LOSS = ci),
      (e.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = li),
      (e.RpcGrpcStatusCodeValues = {
        OK: qr,
        CANCELLED: Jr,
        UNKNOWN: Yr,
        INVALID_ARGUMENT: Xr,
        DEADLINE_EXCEEDED: Zr,
        NOT_FOUND: Qr,
        ALREADY_EXISTS: $r,
        PERMISSION_DENIED: ei,
        RESOURCE_EXHAUSTED: ti,
        FAILED_PRECONDITION: ni,
        ABORTED: ri,
        OUT_OF_RANGE: ii,
        UNIMPLEMENTED: ai,
        INTERNAL: oi,
        UNAVAILABLE: si,
        DATA_LOSS: ci,
        UNAUTHENTICATED: li,
      }));
    var ui = `SENT`,
      di = `RECEIVED`;
    ((e.MESSAGETYPEVALUES_SENT = ui),
      (e.MESSAGETYPEVALUES_RECEIVED = di),
      (e.MessageTypeValues = (0, t.createConstMap)([ui, di])));
  }),
  Fi = e.t((e) => {
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
    (Object.defineProperty(e, "__esModule", { value: !0 }), n(Pi(), e));
  }),
  Ii = e.t((e) => {
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
    var t = Ni(),
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
      ne = `faas.instance`,
      re = `faas.max_memory`,
      ie = `host.id`,
      O = `host.name`,
      k = `host.type`,
      ae = `host.arch`,
      oe = `host.image.name`,
      se = `host.image.id`,
      ce = `host.image.version`,
      le = `k8s.cluster.name`,
      ue = `k8s.node.name`,
      de = `k8s.node.uid`,
      fe = `k8s.namespace.name`,
      pe = `k8s.pod.uid`,
      me = `k8s.pod.name`,
      he = `k8s.container.name`,
      ge = `k8s.replicaset.uid`,
      _e = `k8s.replicaset.name`,
      ve = `k8s.deployment.uid`,
      ye = `k8s.deployment.name`,
      A = `k8s.statefulset.uid`,
      be = `k8s.statefulset.name`,
      xe = `k8s.daemonset.uid`,
      Se = `k8s.daemonset.name`,
      Ce = `k8s.job.uid`,
      we = `k8s.job.name`,
      Te = `k8s.cronjob.uid`,
      Ee = `k8s.cronjob.name`,
      De = `os.type`,
      Oe = `os.description`,
      ke = `os.name`,
      Ae = `os.version`,
      je = `process.pid`,
      Me = `process.executable.name`,
      Ne = `process.executable.path`,
      Pe = `process.command`,
      Fe = `process.command_line`,
      Ie = `process.command_args`,
      Le = `process.owner`,
      Re = `process.runtime.name`,
      ze = `process.runtime.version`,
      j = `process.runtime.description`,
      Be = `service.name`,
      Ve = `service.namespace`,
      He = `service.instance.id`,
      Ue = `service.version`,
      We = `telemetry.sdk.name`,
      Ge = `telemetry.sdk.language`,
      Ke = `telemetry.sdk.version`,
      qe = `telemetry.auto.version`,
      Je = `webengine.name`,
      Ye = `webengine.version`,
      Xe = `webengine.description`;
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
      (e.SEMRESATTRS_FAAS_INSTANCE = ne),
      (e.SEMRESATTRS_FAAS_MAX_MEMORY = re),
      (e.SEMRESATTRS_HOST_ID = ie),
      (e.SEMRESATTRS_HOST_NAME = O),
      (e.SEMRESATTRS_HOST_TYPE = k),
      (e.SEMRESATTRS_HOST_ARCH = ae),
      (e.SEMRESATTRS_HOST_IMAGE_NAME = oe),
      (e.SEMRESATTRS_HOST_IMAGE_ID = se),
      (e.SEMRESATTRS_HOST_IMAGE_VERSION = ce),
      (e.SEMRESATTRS_K8S_CLUSTER_NAME = le),
      (e.SEMRESATTRS_K8S_NODE_NAME = ue),
      (e.SEMRESATTRS_K8S_NODE_UID = de),
      (e.SEMRESATTRS_K8S_NAMESPACE_NAME = fe),
      (e.SEMRESATTRS_K8S_POD_UID = pe),
      (e.SEMRESATTRS_K8S_POD_NAME = me),
      (e.SEMRESATTRS_K8S_CONTAINER_NAME = he),
      (e.SEMRESATTRS_K8S_REPLICASET_UID = ge),
      (e.SEMRESATTRS_K8S_REPLICASET_NAME = _e),
      (e.SEMRESATTRS_K8S_DEPLOYMENT_UID = ve),
      (e.SEMRESATTRS_K8S_DEPLOYMENT_NAME = ye),
      (e.SEMRESATTRS_K8S_STATEFULSET_UID = A),
      (e.SEMRESATTRS_K8S_STATEFULSET_NAME = be),
      (e.SEMRESATTRS_K8S_DAEMONSET_UID = xe),
      (e.SEMRESATTRS_K8S_DAEMONSET_NAME = Se),
      (e.SEMRESATTRS_K8S_JOB_UID = Ce),
      (e.SEMRESATTRS_K8S_JOB_NAME = we),
      (e.SEMRESATTRS_K8S_CRONJOB_UID = Te),
      (e.SEMRESATTRS_K8S_CRONJOB_NAME = Ee),
      (e.SEMRESATTRS_OS_TYPE = De),
      (e.SEMRESATTRS_OS_DESCRIPTION = Oe),
      (e.SEMRESATTRS_OS_NAME = ke),
      (e.SEMRESATTRS_OS_VERSION = Ae),
      (e.SEMRESATTRS_PROCESS_PID = je),
      (e.SEMRESATTRS_PROCESS_EXECUTABLE_NAME = Me),
      (e.SEMRESATTRS_PROCESS_EXECUTABLE_PATH = Ne),
      (e.SEMRESATTRS_PROCESS_COMMAND = Pe),
      (e.SEMRESATTRS_PROCESS_COMMAND_LINE = Fe),
      (e.SEMRESATTRS_PROCESS_COMMAND_ARGS = Ie),
      (e.SEMRESATTRS_PROCESS_OWNER = Le),
      (e.SEMRESATTRS_PROCESS_RUNTIME_NAME = Re),
      (e.SEMRESATTRS_PROCESS_RUNTIME_VERSION = ze),
      (e.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = j),
      (e.SEMRESATTRS_SERVICE_NAME = Be),
      (e.SEMRESATTRS_SERVICE_NAMESPACE = Ve),
      (e.SEMRESATTRS_SERVICE_INSTANCE_ID = He),
      (e.SEMRESATTRS_SERVICE_VERSION = Ue),
      (e.SEMRESATTRS_TELEMETRY_SDK_NAME = We),
      (e.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = Ge),
      (e.SEMRESATTRS_TELEMETRY_SDK_VERSION = Ke),
      (e.SEMRESATTRS_TELEMETRY_AUTO_VERSION = qe),
      (e.SEMRESATTRS_WEBENGINE_NAME = Je),
      (e.SEMRESATTRS_WEBENGINE_VERSION = Ye),
      (e.SEMRESATTRS_WEBENGINE_DESCRIPTION = Xe),
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
        ne,
        re,
        ie,
        O,
        k,
        ae,
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
        ve,
        ye,
        A,
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
        Re,
        ze,
        j,
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
      ])));
    var Ze = `alibaba_cloud`,
      Qe = `aws`,
      $e = `azure`,
      et = `gcp`;
    ((e.CLOUDPROVIDERVALUES_ALIBABA_CLOUD = Ze),
      (e.CLOUDPROVIDERVALUES_AWS = Qe),
      (e.CLOUDPROVIDERVALUES_AZURE = $e),
      (e.CLOUDPROVIDERVALUES_GCP = et),
      (e.CloudProviderValues = (0, t.createConstMap)([Ze, Qe, $e, et])));
    var M = `alibaba_cloud_ecs`,
      tt = `alibaba_cloud_fc`,
      nt = `aws_ec2`,
      rt = `aws_ecs`,
      it = `aws_eks`,
      at = `aws_lambda`,
      ot = `aws_elastic_beanstalk`,
      st = `azure_vm`,
      ct = `azure_container_instances`,
      lt = `azure_aks`,
      ut = `azure_functions`,
      dt = `azure_app_service`,
      ft = `gcp_compute_engine`,
      pt = `gcp_cloud_run`,
      mt = `gcp_kubernetes_engine`,
      ht = `gcp_cloud_functions`,
      gt = `gcp_app_engine`;
    ((e.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = M),
      (e.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = tt),
      (e.CLOUDPLATFORMVALUES_AWS_EC2 = nt),
      (e.CLOUDPLATFORMVALUES_AWS_ECS = rt),
      (e.CLOUDPLATFORMVALUES_AWS_EKS = it),
      (e.CLOUDPLATFORMVALUES_AWS_LAMBDA = at),
      (e.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = ot),
      (e.CLOUDPLATFORMVALUES_AZURE_VM = st),
      (e.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = ct),
      (e.CLOUDPLATFORMVALUES_AZURE_AKS = lt),
      (e.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = ut),
      (e.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = dt),
      (e.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = ft),
      (e.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = pt),
      (e.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = mt),
      (e.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = ht),
      (e.CLOUDPLATFORMVALUES_GCP_APP_ENGINE = gt),
      (e.CloudPlatformValues = (0, t.createConstMap)([
        M,
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
      ])));
    var _t = `ec2`,
      vt = `fargate`;
    ((e.AWSECSLAUNCHTYPEVALUES_EC2 = _t),
      (e.AWSECSLAUNCHTYPEVALUES_FARGATE = vt),
      (e.AwsEcsLaunchtypeValues = (0, t.createConstMap)([_t, vt])));
    var yt = `amd64`,
      bt = `arm32`,
      xt = `arm64`,
      St = `ia64`,
      Ct = `ppc32`,
      wt = `ppc64`,
      Tt = `x86`;
    ((e.HOSTARCHVALUES_AMD64 = yt),
      (e.HOSTARCHVALUES_ARM32 = bt),
      (e.HOSTARCHVALUES_ARM64 = xt),
      (e.HOSTARCHVALUES_IA64 = St),
      (e.HOSTARCHVALUES_PPC32 = Ct),
      (e.HOSTARCHVALUES_PPC64 = wt),
      (e.HOSTARCHVALUES_X86 = Tt),
      (e.HostArchValues = (0, t.createConstMap)([yt, bt, xt, St, Ct, wt, Tt])));
    var Et = `windows`,
      Dt = `linux`,
      Ot = `darwin`,
      kt = `freebsd`,
      At = `netbsd`,
      jt = `openbsd`,
      Mt = `dragonflybsd`,
      Nt = `hpux`,
      Pt = `aix`,
      Ft = `solaris`,
      It = `z_os`;
    ((e.OSTYPEVALUES_WINDOWS = Et),
      (e.OSTYPEVALUES_LINUX = Dt),
      (e.OSTYPEVALUES_DARWIN = Ot),
      (e.OSTYPEVALUES_FREEBSD = kt),
      (e.OSTYPEVALUES_NETBSD = At),
      (e.OSTYPEVALUES_OPENBSD = jt),
      (e.OSTYPEVALUES_DRAGONFLYBSD = Mt),
      (e.OSTYPEVALUES_HPUX = Nt),
      (e.OSTYPEVALUES_AIX = Pt),
      (e.OSTYPEVALUES_SOLARIS = Ft),
      (e.OSTYPEVALUES_Z_OS = It),
      (e.OsTypeValues = (0, t.createConstMap)([Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It])));
    var Lt = `cpp`,
      Rt = `dotnet`,
      zt = `erlang`,
      Bt = `go`,
      Vt = `java`,
      Ht = `nodejs`,
      Ut = `php`,
      Wt = `python`,
      Gt = `ruby`,
      Kt = `webjs`;
    ((e.TELEMETRYSDKLANGUAGEVALUES_CPP = Lt),
      (e.TELEMETRYSDKLANGUAGEVALUES_DOTNET = Rt),
      (e.TELEMETRYSDKLANGUAGEVALUES_ERLANG = zt),
      (e.TELEMETRYSDKLANGUAGEVALUES_GO = Bt),
      (e.TELEMETRYSDKLANGUAGEVALUES_JAVA = Vt),
      (e.TELEMETRYSDKLANGUAGEVALUES_NODEJS = Ht),
      (e.TELEMETRYSDKLANGUAGEVALUES_PHP = Ut),
      (e.TELEMETRYSDKLANGUAGEVALUES_PYTHON = Wt),
      (e.TELEMETRYSDKLANGUAGEVALUES_RUBY = Gt),
      (e.TELEMETRYSDKLANGUAGEVALUES_WEBJS = Kt),
      (e.TelemetrySdkLanguageValues = (0, t.createConstMap)([Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt])));
  }),
  Li = e.t((e) => {
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
    (Object.defineProperty(e, "__esModule", { value: !0 }), n(Ii(), e));
  }),
  Ri = e.t((e) => {
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
  zi = e.t((e) => {
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
  Bi = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.EVENT_EXCEPTION = void 0),
      (e.EVENT_EXCEPTION = `exception`));
  }),
  Vi = e.t((e) => {
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
      n(Fi(), e),
      n(Li(), e),
      n(Ri(), e),
      n(zi(), e),
      n(Bi(), e));
  }),
  Hi,
  Ui = e.n(() => {
    Hi = `process.runtime.name`;
  }),
  Wi,
  Gi,
  Ki = e.n(() => {
    (Mi(),
      (Wi = Vi()),
      Ui(),
      (Gi = {
        [Wi.ATTR_TELEMETRY_SDK_NAME]: `opentelemetry`,
        [Hi]: `node`,
        [Wi.ATTR_TELEMETRY_SDK_LANGUAGE]: Wi.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS,
        [Wi.ATTR_TELEMETRY_SDK_VERSION]: ji,
      }));
  }),
  qi = e.n(() => {
    (Ei(), Oi(), Ai(), Ki());
  }),
  Ji = e.n(() => {
    qi();
  });
function Yi(e) {
  let t = e / 1e3;
  return [Math.trunc(t), Math.round((e % 1e3) * ca)];
}
function Xi() {
  let e = ki.timeOrigin;
  if (typeof e != `number`) {
    let t = ki;
    e = t.timing && t.timing.fetchStart;
  }
  return e;
}
function Zi(e) {
  return oa(Yi(Xi()), Yi(typeof e == `number` ? e : ki.now()));
}
function Qi(e) {
  if (ia(e)) return e;
  if (typeof e == `number`) return e < Xi() ? Zi(e) : Yi(e);
  if (e instanceof Date) return Yi(e.getTime());
  throw TypeError(`Invalid input type`);
}
function $i(e, t) {
  let n = t[0] - e[0],
    r = t[1] - e[1];
  return (r < 0 && (--n, (r += la)), [n, r]);
}
function ea(e) {
  let t = sa,
    n = `${`0`.repeat(t)}${e[1]}Z`,
    r = n.substring(n.length - t - 1);
  return new Date(e[0] * 1e3).toISOString().replace(`000Z`, r);
}
function ta(e) {
  return e[0] * la + e[1];
}
function na(e) {
  return e[0] * 1e3 + e[1] / 1e6;
}
function ra(e) {
  return e[0] * 1e6 + e[1] / 1e3;
}
function ia(e) {
  return Array.isArray(e) && e.length === 2 && typeof e[0] == `number` && typeof e[1] == `number`;
}
function aa(e) {
  return ia(e) || typeof e == `number` || e instanceof Date;
}
function oa(e, t) {
  let n = [e[0] + t[0], e[1] + t[1]];
  return (n[1] >= la && ((n[1] -= la), (n[0] += 1)), n);
}
var sa,
  ca,
  la,
  ua = e.n(() => {
    (Ji(), (sa = 9), (ca = 10 ** 6), (la = 10 ** sa));
  });
function da(e) {
  typeof e != `number` && e.unref();
}
var fa = e.n(() => {}),
  pa,
  ma = e.n(() => {
    (function (e) {
      ((e[(e.SUCCESS = 0)] = `SUCCESS`), (e[(e.FAILED = 1)] = `FAILED`));
    })((pa ||= {}));
  }),
  ha,
  ga,
  _a = e.n(() => {
    ((ha = e.a(N())),
      (ga = class {
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
              ha.diag.warn(`Failed to inject with ${r.constructor.name}. Err: ${e.message}`);
            }
        }
        extract(e, t, n) {
          return this._propagators.reduce((e, r) => {
            try {
              return r.extract(e, t, n);
            } catch (e) {
              ha.diag.warn(`Failed to extract with ${r.constructor.name}. Err: ${e.message}`);
            }
            return e;
          }, e);
        }
        fields() {
          return this._fields.slice();
        }
      }));
  });
function va(e) {
  return xa.test(e);
}
function ya(e) {
  return Sa.test(e) && !Ca.test(e);
}
var ba,
  xa,
  Sa,
  Ca,
  wa = e.n(() => {
    ((ba = `[_0-9a-z-*/]`),
      (xa = RegExp(`^(?:${`[a-z]${ba}{0,255}`}|${`[a-z0-9]${ba}{0,240}@[a-z]${ba}{0,13}`})$`)),
      (Sa = /^[ -~]{0,255}[!-~]$/),
      (Ca = /,|=/));
  }),
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa = e.n(() => {
    (wa(),
      (Ta = 32),
      (Ea = 512),
      (Da = `,`),
      (Oa = `=`),
      (ka = class e {
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
            .reduce((e, t) => (e.push(t + Oa + this.get(t)), e), [])
            .join(Da);
        }
        _parse(e) {
          e.length > Ea ||
            ((this._internalState = e
              .split(Da)
              .reverse()
              .reduce((e, t) => {
                let n = t.trim(),
                  r = n.indexOf(Oa);
                if (r !== -1) {
                  let i = n.slice(0, r),
                    a = n.slice(r + 1, t.length);
                  va(i) && ya(a) && e.set(i, a);
                }
                return e;
              }, new Map())),
            this._internalState.size > Ta &&
              (this._internalState = new Map(
                Array.from(this._internalState.entries()).reverse().slice(0, Ta),
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
function ja(e) {
  let t = Ia.exec(e);
  return !t || (t[1] === `00` && t[5])
    ? null
    : { traceId: t[2], spanId: t[3], traceFlags: parseInt(t[4], 16) };
}
var Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra = e.n(() => {
    ((Ma = e.a(N())),
      Gr(),
      Aa(),
      (Na = `traceparent`),
      (Pa = `tracestate`),
      (Fa = `00`),
      (Ia = RegExp(
        `^\\s?((?!ff)[\\da-f]{2})-((?![0]{32})[\\da-f]{32})-((?![0]{16})[\\da-f]{16})-([\\da-f]{2})(-.*)?\\s?$`,
      )),
      (La = class {
        inject(e, t, n) {
          let r = Ma.trace.getSpanContext(e);
          if (!r || Hr(e) || !(0, Ma.isSpanContextValid)(r)) return;
          let i = `${Fa}-${r.traceId}-${r.spanId}-0${Number(r.traceFlags || Ma.TraceFlags.NONE).toString(16)}`;
          (n.set(t, Na, i), r.traceState && n.set(t, Pa, r.traceState.serialize()));
        }
        extract(e, t, n) {
          let r = n.get(t, Na);
          if (!r) return e;
          let i = Array.isArray(r) ? r[0] : r;
          if (typeof i != `string`) return e;
          let a = ja(i);
          if (!a) return e;
          a.isRemote = !0;
          let o = n.get(t, Pa);
          if (o) {
            let e = Array.isArray(o) ? o.join(`,`) : o;
            a.traceState = new ka(typeof e == `string` ? e : void 0);
          }
          return Ma.trace.setSpanContext(e, a);
        }
        fields() {
          return [Na, Pa];
        }
      }));
  });
function za(e, t) {
  return e.setValue(Ua, t);
}
function Ba(e) {
  return e.deleteValue(Ua);
}
function Va(e) {
  return e.getValue(Ua);
}
var Ha,
  Ua,
  Wa,
  Ga = e.n(() => {
    ((Ha = e.a(N())),
      (Ua = (0, Ha.createContextKey)(`OpenTelemetry SDK Context Key RPC_METADATA`)),
      (function (e) {
        e.HTTP = `http`;
      })((Wa ||= {})));
  });
function Ka(e) {
  if (!qa(e) || Ja(e) !== Za) return !1;
  let t = no(e);
  if (t === null) return !0;
  let n = io.call(t, `constructor`) && t.constructor;
  return typeof n == `function` && n instanceof n && eo.call(n) === to;
}
function qa(e) {
  return typeof e == `object` && !!e;
}
function Ja(e) {
  return e == null ? (e === void 0 ? $a : Qa) : ao && ao in Object(e) ? Ya(e) : Xa(e);
}
function Ya(e) {
  let t = io.call(e, ao),
    n = e[ao],
    r = !1;
  try {
    ((e[ao] = void 0), (r = !0));
  } catch {}
  let i = oo.call(e);
  return (r && (t ? (e[ao] = n) : delete e[ao]), i);
}
function Xa(e) {
  return oo.call(e);
}
var Za,
  Qa,
  $a,
  eo,
  to,
  no,
  ro,
  io,
  ao,
  oo,
  so = e.n(() => {
    ((Za = `[object Object]`),
      (Qa = `[object Null]`),
      ($a = `[object Undefined]`),
      (eo = Function.prototype.toString),
      (to = eo.call(Object)),
      (no = Object.getPrototypeOf),
      (ro = Object.prototype),
      (io = ro.hasOwnProperty),
      (ao = Symbol ? Symbol.toStringTag : void 0),
      (oo = ro.toString));
  });
function co(...e) {
  let t = e.shift(),
    n = new WeakMap();
  for (; e.length > 0;) t = uo(t, e.shift(), 0, n);
  return t;
}
function lo(e) {
  return po(e) ? e.slice() : e;
}
function uo(e, t, n = 0, r) {
  let i;
  if (!(n > vo)) {
    if ((n++, go(e) || go(t) || mo(t))) i = lo(t);
    else if (po(e)) {
      if (((i = e.slice()), po(t))) for (let e = 0, n = t.length; e < n; e++) i.push(lo(t[e]));
      else if (ho(t)) {
        let e = Object.keys(t);
        for (let n = 0, r = e.length; n < r; n++) {
          let r = e[n];
          i[r] = lo(t[r]);
        }
      }
    } else if (ho(e)) {
      if (ho(t)) {
        if (!_o(e, t)) return t;
        i = Object.assign({}, e);
        let a = Object.keys(t);
        for (let o = 0, s = a.length; o < s; o++) {
          let s = a[o],
            c = t[s];
          if (go(c)) c === void 0 ? delete i[s] : (i[s] = c);
          else {
            let a = i[s],
              o = c;
            if (fo(e, s, r) || fo(t, s, r)) delete i[s];
            else {
              if (ho(a) && ho(o)) {
                let n = r.get(a) || [],
                  i = r.get(o) || [];
                (n.push({ obj: e, key: s }), i.push({ obj: t, key: s }), r.set(a, n), r.set(o, i));
              }
              i[s] = uo(i[s], c, n, r);
            }
          }
        }
      } else i = t;
    }
    return i;
  }
}
function fo(e, t, n) {
  let r = n.get(e[t]) || [];
  for (let n = 0, i = r.length; n < i; n++) {
    let i = r[n];
    if (i.key === t && i.obj === e) return !0;
  }
  return !1;
}
function po(e) {
  return Array.isArray(e);
}
function mo(e) {
  return typeof e == `function`;
}
function ho(e) {
  return !go(e) && !po(e) && !mo(e) && typeof e == `object`;
}
function go(e) {
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
function _o(e, t) {
  return !(!Ka(e) || !Ka(t));
}
var vo,
  yo = e.n(() => {
    (so(), (vo = 20));
  });
function bo(e, t) {
  let n,
    r = new Promise(function (e, r) {
      n = setTimeout(function () {
        r(new xo(`Operation timed out.`));
      }, t);
    });
  return Promise.race([e, r]).then(
    (e) => (clearTimeout(n), e),
    (e) => {
      throw (clearTimeout(n), e);
    },
  );
}
var xo,
  So = e.n(() => {
    xo = class e extends Error {
      constructor(t) {
        (super(t), Object.setPrototypeOf(this, e.prototype));
      }
    };
  });
function Co(e, t) {
  return typeof t == `string` ? e === t : !!e.match(t);
}
function wo(e, t) {
  if (!t) return !1;
  for (let n of t) if (Co(e, n)) return !0;
  return !1;
}
var To = e.n(() => {}),
  Eo,
  Do = e.n(() => {
    Eo = class {
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
  Oo,
  ko = e.n(() => {
    (Do(),
      (Oo = class {
        _callback;
        _that;
        _isCalled = !1;
        _deferred = new Eo();
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
function Ao(e) {
  return e == null
    ? void 0
    : (Mo[e.toUpperCase()] ??
        (jo.diag.warn(`Unknown log level "${e}", expected one of ${Object.keys(Mo)}, using default`),
        jo.DiagLogLevel.INFO));
}
var jo,
  Mo,
  No = e.n(() => {
    ((jo = e.a(N())),
      (Mo = {
        ALL: jo.DiagLogLevel.ALL,
        VERBOSE: jo.DiagLogLevel.VERBOSE,
        DEBUG: jo.DiagLogLevel.DEBUG,
        INFO: jo.DiagLogLevel.INFO,
        WARN: jo.DiagLogLevel.WARN,
        ERROR: jo.DiagLogLevel.ERROR,
        NONE: jo.DiagLogLevel.NONE,
      }));
  });
function Po(e, t) {
  return new Promise((n) => {
    Fo.context.with(Br(Fo.context.active()), () => {
      e.export(t, (e) => {
        n(e);
      });
    });
  });
}
var Fo,
  Io = e.n(() => {
    ((Fo = e.a(N())), Gr());
  }),
  Lo = e.r({
    AnchoredClock: () => ii,
    BindOnceFuture: () => Oo,
    CompositePropagator: () => ga,
    ExportResultCode: () => pa,
    RPCType: () => Wa,
    SDK_INFO: () => Gi,
    TRACE_PARENT_HEADER: () => Na,
    TRACE_STATE_HEADER: () => Pa,
    TimeoutError: () => xo,
    TraceState: () => ka,
    W3CBaggagePropagator: () => ni,
    W3CTraceContextPropagator: () => La,
    _globalThis: () => Di,
    addHrTimes: () => oa,
    callWithTimeout: () => bo,
    deleteRPCMetadata: () => Ba,
    diagLogLevelFromString: () => Ao,
    getBooleanFromEnv: () => Ci,
    getNumberFromEnv: () => P,
    getRPCMetadata: () => Va,
    getStringFromEnv: () => Si,
    getStringListFromEnv: () => wi,
    getTimeOrigin: () => Xi,
    globalErrorHandler: () => yi,
    hrTime: () => Zi,
    hrTimeDuration: () => $i,
    hrTimeToMicroseconds: () => ra,
    hrTimeToMilliseconds: () => na,
    hrTimeToNanoseconds: () => ta,
    hrTimeToTimeStamp: () => ea,
    internal: () => Ro,
    isAttributeValue: () => ci,
    isTimeInput: () => aa,
    isTimeInputHrTime: () => ia,
    isTracingSuppressed: () => Hr,
    isUrlIgnored: () => wo,
    loggingErrorHandler: () => pi,
    merge: () => co,
    millisToHrTime: () => Yi,
    otperformance: () => ki,
    parseKeyPairsIntoRecord: () => Qr,
    parseTraceParent: () => ja,
    sanitizeAttributes: () => oi,
    setGlobalErrorHandler: () => vi,
    setRPCMetadata: () => za,
    suppressTracing: () => Br,
    timeInputToHrTime: () => Qi,
    unrefTimer: () => da,
    unsuppressTracing: () => Vr,
    urlMatches: () => Co,
  }),
  Ro,
  zo = e.n(() => {
    (ri(),
      ai(),
      fi(),
      xi(),
      _i(),
      ua(),
      fa(),
      ma(),
      ei(),
      Ji(),
      _a(),
      Ra(),
      Ga(),
      Gr(),
      Aa(),
      yo(),
      So(),
      To(),
      ko(),
      No(),
      Io(),
      (Ro = { _export: Po }));
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
    ((fs = e.a(N())), ss(), us());
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
function F(e) {
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
      (a = F(t)
        ? ``
        : F(n)
          ? `>=${t}.0.0 <${+t + 1}.0.0-0`
          : F(r)
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
      (o = F(t)
        ? ``
        : F(n)
          ? `>=${t}.0.0${r} <${+t + 1}.0.0-0`
          : F(i)
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
    let s = F(r),
      c = s || F(i),
      l = c || F(a),
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
      (n = F(r)
        ? ``
        : F(i)
          ? `>=${r}.0.0${t?.includePrerelease ? `-0` : ``}`
          : F(a)
            ? `>=${r}.${i}.0${t?.includePrerelease ? `-0` : ``}`
            : o
              ? `>=${n}`
              : `>=${n}${t?.includePrerelease ? `-0` : ``}`),
      (c = F(l)
        ? ``
        : F(u)
          ? `<${+l + 1}.0.0-0`
          : F(d)
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
    ((Ms = e.a(N())),
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
var I,
  nc,
  rc,
  ic,
  ac,
  oc = e.n(() => {
    ((I = console.error.bind(console)),
      (nc = (e, t, n) => {
        if (!e || !e[t]) {
          I(`no original function ` + String(t) + ` to wrap`);
          return;
        }
        if (!n) {
          (I(`no wrapper function`), I(Error().stack));
          return;
        }
        let r = e[t];
        if (typeof r != `function` || typeof n != `function`) {
          I(`original object and wrapper must be functions`);
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
          (I(`must provide one or more modules to patch`), I(Error().stack));
          return;
        }
        if (!(t && Array.isArray(t))) {
          I(`must provide one or more functions to wrap on modules`);
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
          (I(`no function to unwrap.`), I(Error().stack));
          return;
        }
        let n = e[t];
        if (!n.__unwrap) I(`no original to unwrap to -- has ` + String(t) + ` already been unwrapped?`);
        else {
          n.__unwrap();
          return;
        }
      }),
      (ac = (e, t) => {
        if (e) Array.isArray(e) || (e = [e]);
        else {
          (I(`must provide one or more modules to patch`), I(Error().stack));
          return;
        }
        if (!(t && Array.isArray(t))) {
          I(`must provide one or more functions to unwrap on modules`);
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
    ((sc = e.a(N())),
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
      (Oc = e.a(N())),
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
  L = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__,
  R = globalThis,
  Uc = `10.29.0`;
function Wc() {
  return (Gc(R), R);
}
function Gc(e) {
  let t = (e.__SENTRY__ = e.__SENTRY__ || {});
  return ((t.version = t.version || `10.29.0`), (t[Uc] = t[`10.29.0`] || {}));
}
function Kc(e, t, n = R) {
  let r = (n.__SENTRY__ = n.__SENTRY__ || {}),
    i = (r[Uc] = r[`10.29.0`] || {});
  return i[e] || (i[e] = t());
}
var qc = [`debug`, `info`, `warn`, `error`, `log`, `assert`, `trace`],
  Jc = `Sentry Logger `,
  Yc = {};
function Xc(e) {
  if (!(`console` in R)) return e();
  let t = R.console,
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
  L &&
    $c() &&
    Xc(() => {
      R.console[e](`${Jc}[${e}]:`, ...t);
    });
}
function il() {
  return L ? Kc(`loggerSettings`, () => ({ enabled: !1 })) : { enabled: !1 };
}
var z = { enable: Zc, disable: Qc, isEnabled: $c, log: el, warn: tl, error: nl },
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
      L && z.error(`Error while instrumenting ${e}`, t);
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
        L &&
          z.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${pl(r)}\nError:`, t);
      }
}
var bl = null;
function xl(e) {
  let t = `error`;
  (_l(t, e), vl(t, Sl));
}
function Sl() {
  ((bl = R.onerror),
    (R.onerror = function (e, t, n, r, i) {
      return (
        yl(`error`, { column: r, error: i, line: n, msg: e, url: t }),
        bl ? bl.apply(this, arguments) : !1
      );
    }),
    (R.onerror.__SENTRY_INSTRUMENTED__ = !0));
}
var Cl = null;
function wl(e) {
  let t = `unhandledrejection`;
  (_l(t, e), vl(t, Tl));
}
function Tl() {
  ((Cl = R.onunhandledrejection),
    (R.onunhandledrejection = function (e) {
      return (yl(`unhandledrejection`, e), !Cl || Cl.apply(this, arguments));
    }),
    (R.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0));
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
var Vl = R,
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
    L && z.log(`Failed to replace method "${t}" in object`, e);
  }
}
function Kl(e, t, n) {
  try {
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
  } catch {
    L && z.log(`Failed to add non-enumerable property "${t}" to object`, e);
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
  let e = R;
  return e.crypto || e.msCrypto;
}
var au;
function ou() {
  return Math.random() * 16;
}
function su(e = iu()) {
  try {
    if (e?.randomUUID) return e.randomUUID().replace(/-/g, ``);
  } catch {}
  return (
    (au ||= `10000000100040008000100000000000`),
    au.replace(/[018]/g, (e) => (e ^ ((ou() & 15) >> (e / 4))).toString(16))
  );
}
function cu(e) {
  return e.exception?.values?.[0];
}
function lu(e) {
  let { message: t, event_id: n } = e;
  if (t) return t;
  let r = cu(e);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || n || `<unknown>`
    : n || `<unknown>`;
}
function uu(e, t, n) {
  let r = (e.exception = e.exception || {}),
    i = (r.values = r.values || []),
    a = (i[0] = i[0] || {});
  ((a.value ||= t || ``), (a.type ||= n || `Error`));
}
function du(e, t) {
  let n = cu(e);
  if (!n) return;
  let r = { type: `generic`, handled: !0 },
    i = n.mechanism;
  if (((n.mechanism = { ...r, ...i, ...t }), t && `data` in t)) {
    let e = { ...i?.data, ...t.data };
    n.mechanism.data = e;
  }
}
var fu =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
function pu(e) {
  return parseInt(e || ``, 10);
}
function mu(e) {
  let t = e.match(fu) || [],
    n = pu(t[1]),
    r = pu(t[2]),
    i = pu(t[3]);
  return {
    buildmetadata: t[5],
    major: isNaN(n) ? void 0 : n,
    minor: isNaN(r) ? void 0 : r,
    patch: isNaN(i) ? void 0 : i,
    prerelease: t[4],
  };
}
function hu(e) {
  if (gu(e)) return !0;
  try {
    Kl(e, `__sentry_captured__`, !0);
  } catch {}
  return !1;
}
function gu(e) {
  try {
    return e.__sentry_captured__;
  } catch {}
}
var _u = 1e3;
function vu() {
  return Date.now() / _u;
}
function yu() {
  let { performance: e } = R;
  if (!e?.now || !e.timeOrigin) return vu;
  let t = e.timeOrigin;
  return () => (t + e.now()) / _u;
}
var bu;
function xu() {
  return (bu ??= yu())();
}
function Su(e) {
  let t = xu(),
    n = {
      sid: su(),
      init: !0,
      timestamp: t,
      started: t,
      duration: 0,
      status: `ok`,
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => Tu(n),
    };
  return (e && Cu(n, e), n);
}
function Cu(e, t = {}) {
  if (
    (t.user &&
      (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
      !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)),
    (e.timestamp = t.timestamp || xu()),
    t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
    t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
    t.sid && (e.sid = t.sid.length === 32 ? t.sid : su()),
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
function wu(e, t) {
  let n = {};
  (t ? (n = { status: t }) : e.status === `ok` && (n = { status: `exited` }), Cu(e, n));
}
function Tu(e) {
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
function Eu(e, t, n = 2) {
  if (!t || typeof t != `object` || n <= 0) return t;
  if (e && Object.keys(t).length === 0) return e;
  let r = { ...e };
  for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = Eu(r[e], t[e], n - 1));
  return r;
}
function Du() {
  return su();
}
function Ou() {
  return su().substring(16);
}
var ku = `_sentrySpan`;
function Au(e, t) {
  t ? Kl(e, ku, t) : delete e[ku];
}
function ju(e) {
  return e[ku];
}
var Mu = 100,
  Nu = class e {
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
        (this._propagationContext = { traceId: Du(), sampleRand: Math.random() }));
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
        Au(t, ju(this)),
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
        this._session && Cu(this._session, { user: e }),
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
        Au(this, void 0),
        (this._attachments = []),
        this.setPropagationContext({ traceId: Du(), sampleRand: Math.random() }),
        this._notifyScopeListeners(),
        this
      );
    }
    addBreadcrumb(e, t) {
      let n = typeof t == `number` ? t : Mu;
      if (n <= 0) return this;
      let r = { timestamp: vu(), ...e, message: e.message ? $l(e.message, 2048) : e.message };
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
        span: ju(this),
      };
    }
    setSDKProcessingMetadata(e) {
      return ((this._sdkProcessingMetadata = Eu(this._sdkProcessingMetadata, e, 2)), this);
    }
    setPropagationContext(e) {
      return ((this._propagationContext = e), this);
    }
    getPropagationContext() {
      return this._propagationContext;
    }
    captureException(e, t) {
      let n = t?.event_id || su();
      if (!this._client)
        return (L && z.warn(`No client configured on scope - will not capture exception!`), n);
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
      let r = n?.event_id || su();
      if (!this._client) return (L && z.warn(`No client configured on scope - will not capture message!`), r);
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
      let n = t?.event_id || su();
      return this._client
        ? (this._client.captureEvent(e, { ...t, event_id: n }, this), n)
        : (L && z.warn(`No client configured on scope - will not capture event!`), n);
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
function Pu() {
  return Kc(`defaultCurrentScope`, () => new Nu());
}
function Fu() {
  return Kc(`defaultIsolationScope`, () => new Nu());
}
var Iu = class {
  constructor(e, t) {
    let n;
    n = e || new Nu();
    let r;
    ((r = t || new Nu()), (this._stack = [{ scope: n }]), (this._isolationScope = r));
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
function Lu() {
  let e = Gc(Wc());
  return (e.stack = e.stack || new Iu(Pu(), Fu()));
}
function Ru(e) {
  return Lu().withScope(e);
}
function zu(e, t) {
  let n = Lu();
  return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
}
function Bu(e) {
  return Lu().withScope(() => e(Lu().getIsolationScope()));
}
function Vu() {
  return {
    withIsolationScope: Bu,
    withScope: Ru,
    withSetScope: zu,
    withSetIsolationScope: (e, t) => Bu(t),
    getCurrentScope: () => Lu().getScope(),
    getIsolationScope: () => Lu().getIsolationScope(),
  };
}
function Hu(e) {
  let t = Gc(Wc());
  t.acs = e;
}
function Uu(e) {
  let t = Gc(e);
  return t.acs ? t.acs : Vu();
}
function B() {
  return Uu(Wc()).getCurrentScope();
}
function V() {
  return Uu(Wc()).getIsolationScope();
}
function Wu() {
  return Kc(`globalScope`, () => new Nu());
}
function Gu(...e) {
  let t = Uu(Wc());
  if (e.length === 2) {
    let [n, r] = e;
    return n ? t.withSetScope(n, r) : t.withScope(r);
  }
  return t.withScope(e[0]);
}
function H() {
  return B().getClient();
}
function Ku(e) {
  let { traceId: t, parentSpanId: n, propagationSpanId: r } = e.getPropagationContext(),
    i = { trace_id: t, span_id: r || Ou() };
  return (n && (i.parent_span_id = n), i);
}
var qu = `sentry.source`,
  Ju = `sentry.sample_rate`,
  Yu = `sentry.op`,
  Xu = `sentry.origin`,
  Zu = `sentry.measurement_unit`,
  Qu = `sentry.measurement_value`,
  $u = `sentry.custom_span_name`,
  ed = `sentry.profile_id`,
  td = `sentry.exclusive_time`;
function nd(e) {
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
function rd(e, t) {
  e.setAttribute(`http.response.status_code`, t);
  let n = nd(t);
  n.message !== `unknown_error` && e.setStatus(n);
}
var id = `_sentryScope`,
  ad = `_sentryIsolationScope`;
function od(e) {
  try {
    let t = R.WeakRef;
    if (typeof t == `function`) return new t(e);
  } catch {}
  return e;
}
function sd(e) {
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
function cd(e, t, n) {
  e && (Kl(e, ad, od(n)), Kl(e, id, t));
}
function ld(e) {
  let t = e;
  return { scope: t[id], isolationScope: sd(t[ad]) };
}
var ud = `sentry-`,
  dd = /^sentry-/;
function fd(e) {
  let t = md(e);
  if (!t) return;
  let n = Object.entries(t).reduce((e, [t, n]) => {
    if (t.match(dd)) {
      let r = t.slice(7);
      e[r] = n;
    }
    return e;
  }, {});
  if (Object.keys(n).length > 0) return n;
}
function pd(e) {
  if (e) return gd(Object.entries(e).reduce((e, [t, n]) => (n && (e[`${ud}${t}`] = n), e), {}));
}
function md(e) {
  if (e && (Al(e) || Array.isArray(e)))
    return Array.isArray(e)
      ? e.reduce((e, t) => {
          let n = hd(t);
          return (
            Object.entries(n).forEach(([t, n]) => {
              e[t] = n;
            }),
            e
          );
        }, {})
      : hd(e);
}
function hd(e) {
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
function gd(e) {
  if (Object.keys(e).length !== 0)
    return Object.entries(e).reduce((e, [t, n], r) => {
      let i = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
        a = r === 0 ? i : `${e},${i}`;
      return a.length > 8192
        ? (L &&
            z.warn(
              `Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`,
            ),
          e)
        : a;
    }, ``);
}
var _d = /^o(\d+)\./,
  vd = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function yd(e) {
  return e === `http` || e === `https`;
}
function bd(e, t = !1) {
  let { host: n, path: r, pass: i, port: a, projectId: o, protocol: s, publicKey: c } = e;
  return `${s}://${c}${t && i ? `:${i}` : ``}@${n}${a ? `:${a}` : ``}/${r && `${r}/`}${o}`;
}
function xd(e) {
  let t = vd.exec(e);
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
  return Sd({ host: a, pass: i, path: c, projectId: l, port: o, protocol: n, publicKey: r });
}
function Sd(e) {
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
function Cd(e) {
  if (!L) return !0;
  let { port: t, projectId: n, protocol: r } = e;
  return [`protocol`, `publicKey`, `host`, `projectId`].find(
    (t) => !e[t] && (z.error(`Invalid Sentry Dsn: ${t} missing`), !0),
  )
    ? !1
    : n.match(/^\d+$/)
      ? yd(r)
        ? t && isNaN(parseInt(t, 10))
          ? (z.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
          : !0
        : (z.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1)
      : (z.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function wd(e) {
  return e.match(_d)?.[1];
}
function Td(e) {
  let t = e.getOptions(),
    { host: n } = e.getDsn() || {},
    r;
  return (t.orgId ? (r = String(t.orgId)) : n && (r = wd(n)), r);
}
function Ed(e) {
  let t = typeof e == `string` ? xd(e) : Sd(e);
  if (t && Cd(t)) return t;
}
function Dd(e) {
  if (typeof e == `boolean`) return Number(e);
  let t = typeof e == `string` ? parseFloat(e) : e;
  if (!(typeof t != `number` || isNaN(t) || t < 0 || t > 1)) return t;
}
var Od = RegExp(`^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$`);
function kd(e) {
  if (!e) return;
  let t = e.match(Od);
  if (!t) return;
  let n;
  return (
    t[3] === `1` ? (n = !0) : t[3] === `0` && (n = !1),
    { traceId: t[1], parentSampled: n, parentSpanId: t[2] }
  );
}
function Ad(e, t) {
  let n = kd(e),
    r = fd(t);
  if (!n?.traceId) return { traceId: Du(), sampleRand: Math.random() };
  let i = Nd(n, r);
  r && (r.sample_rand = i.toString());
  let { traceId: a, parentSpanId: o, parentSampled: s } = n;
  return { traceId: a, parentSpanId: o, sampled: s, dsc: r || {}, sampleRand: i };
}
function jd(e = Du(), t = Ou(), n) {
  let r = ``;
  return (n !== void 0 && (r = n ? `-1` : `-0`), `${e}-${t}${r}`);
}
function Md(e = Du(), t = Ou(), n) {
  return `00-${e}-${t}-${n ? `01` : `00`}`;
}
function Nd(e, t) {
  let n = Dd(t?.sample_rand);
  if (n !== void 0) return n;
  let r = Dd(t?.sample_rate);
  return r && e?.parentSampled !== void 0
    ? e.parentSampled
      ? Math.random() * r
      : r + Math.random() * (1 - r)
    : Math.random();
}
function Pd(e, t) {
  let n = Td(e);
  return t && n && t !== n
    ? (z.log(`Won't continue trace because org IDs don't match (incoming baggage: ${t}, SDK options: ${n})`),
      !1)
    : e.getOptions().strictTraceContinuation && ((t && !n) || (!t && n))
      ? (z.log(
          `Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${t}, Sentry client: ${n})`,
        ),
        !1)
      : !0;
}
var Fd = !1;
function Id(e) {
  let { spanId: t, traceId: n } = e.spanContext(),
    { data: r, op: i, parent_span_id: a, status: o, origin: s, links: c } = U(e);
  return { parent_span_id: a, span_id: t, trace_id: n, data: r, op: i, status: o, origin: s, links: c };
}
function Ld(e) {
  let { spanId: t, traceId: n, isRemote: r } = e.spanContext(),
    i = r ? t : U(e).parent_span_id,
    a = ld(e).scope;
  return {
    parent_span_id: i,
    span_id: r ? a?.getPropagationContext().propagationSpanId || Ou() : t,
    trace_id: n,
  };
}
function Rd(e) {
  let { traceId: t, spanId: n } = e.spanContext();
  return jd(t, n, Gd(e));
}
function zd(e) {
  let { traceId: t, spanId: n } = e.spanContext();
  return Md(t, n, Gd(e));
}
function Bd(e) {
  if (e && e.length > 0)
    return e.map(({ context: { spanId: e, traceId: t, traceFlags: n, ...r }, attributes: i }) => ({
      span_id: e,
      trace_id: t,
      sampled: n === 1,
      attributes: i,
      ...r,
    }));
}
function Vd(e) {
  return typeof e == `number`
    ? Hd(e)
    : Array.isArray(e)
      ? e[0] + e[1] / 1e9
      : e instanceof Date
        ? Hd(e.getTime())
        : xu();
}
function Hd(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function U(e) {
  if (Wd(e)) return e.getSpanJSON();
  let { spanId: t, traceId: n } = e.spanContext();
  if (Ud(e)) {
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
      start_timestamp: Vd(i),
      timestamp: Vd(o) || void 0,
      status: Kd(s),
      op: r[Yu],
      origin: r[Xu],
      links: Bd(c),
    };
  }
  return { span_id: t, trace_id: n, start_timestamp: 0, data: {} };
}
function Ud(e) {
  let t = e;
  return !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status;
}
function Wd(e) {
  return typeof e.getSpanJSON == `function`;
}
function Gd(e) {
  let { traceFlags: t } = e.spanContext();
  return t === 1;
}
function Kd(e) {
  if (e && e.code !== 0) return e.code === 1 ? `ok` : e.message || `internal_error`;
}
var qd = `_sentryChildSpans`,
  Jd = `_sentryRootSpan`;
function Yd(e, t) {
  (Kl(t, Jd, e[Jd] || e), e[qd] ? e[qd].add(t) : Kl(e, qd, new Set([t])));
}
function Xd(e) {
  let t = new Set();
  function n(e) {
    if (!t.has(e) && Gd(e)) {
      t.add(e);
      let r = e[qd] ? Array.from(e[qd]) : [];
      for (let e of r) n(e);
    }
  }
  return (n(e), Array.from(t));
}
function Zd(e) {
  return e[Jd] || e;
}
function Qd() {
  let e = Uu(Wc());
  return e.getActiveSpan ? e.getActiveSpan() : ju(B());
}
function $d() {
  Fd ||=
    (Xc(() => {
      console.warn(
        "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.",
      );
    }),
    !0);
}
var ef = !1;
function tf() {
  if (ef) return;
  function e() {
    let e = Qd(),
      t = e && Zd(e);
    if (t) {
      let e = `internal_error`;
      (L && z.log(`[Tracing] Root span: ${e} -> Global error occurred`),
        t.setStatus({ code: 2, message: e }));
    }
  }
  ((e.tag = `sentry_tracingErrorCallback`), (ef = !0), xl(e), wl(e));
}
function nf(e) {
  if (typeof __SENTRY_TRACING__ == `boolean` && !__SENTRY_TRACING__) return !1;
  let t = e || H()?.getOptions();
  return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
}
function rf(e) {
  z.log(`Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`);
}
function af(e, t) {
  if (!t?.length || !e.description) return !1;
  for (let n of t) {
    if (sf(n)) {
      if (nu(e.description, n)) return (L && rf(e), !0);
      continue;
    }
    if (!n.name && !n.op) continue;
    let t = !n.name || nu(e.description, n.name),
      r = !n.op || (e.op && nu(e.op, n.op));
    if (t && r) return (L && rf(e), !0);
  }
  return !1;
}
function of(e, t) {
  let n = t.parent_span_id,
    r = t.span_id;
  if (n) for (let t of e) t.parent_span_id === r && (t.parent_span_id = n);
}
function sf(e) {
  return typeof e == `string` || e instanceof RegExp;
}
var cf = `production`,
  lf = `_frozenDsc`;
function uf(e, t) {
  Kl(e, lf, t);
}
function df(e, t) {
  let n = t.getOptions(),
    { publicKey: r } = t.getDsn() || {},
    i = {
      environment: n.environment || `production`,
      release: n.release,
      public_key: r,
      trace_id: e,
      org_id: Td(t),
    };
  return (t.emit(`createDsc`, i), i);
}
function ff(e, t) {
  let n = t.getPropagationContext();
  return n.dsc || df(n.traceId, e);
}
function pf(e) {
  let t = H();
  if (!t) return {};
  let n = Zd(e),
    r = U(n),
    i = r.data,
    a = n.spanContext().traceState,
    o = a?.get(`sentry.sample_rate`) ?? i[`sentry.sample_rate`] ?? i[`sentry.previous_trace_sample_rate`];
  function s(e) {
    return ((typeof o == `number` || typeof o == `string`) && (e.sample_rate = `${o}`), e);
  }
  let c = n[lf];
  if (c) return s(c);
  let l = a?.get(`sentry.dsc`),
    u = l && fd(l);
  if (u) return s(u);
  let d = df(e.spanContext().traceId, t),
    f = i[qu],
    p = r.description;
  return (
    f !== `url` && p && (d.transaction = p),
    nf() &&
      ((d.sampled = String(Gd(n))),
      (d.sample_rand =
        a?.get(`sentry.sample_rand`) ?? ld(n).scope?.getPropagationContext().sampleRand.toString())),
    s(d),
    t.emit(`createDsc`, d, n),
    d
  );
}
var mf = class {
  constructor(e = {}) {
    ((this._traceId = e.traceId || Du()), (this._spanId = e.spanId || Ou()));
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
function hf(e, t = 100, n = 1 / 0) {
  try {
    return _f(``, e, t, n);
  } catch (e) {
    return { ERROR: `**non-serializable** (${e})` };
  }
}
function gf(e, t = 3, n = 102400) {
  let r = hf(e, t);
  return xf(r) > n ? gf(e, t - 1, n) : r;
}
function _f(e, t, n = 1 / 0, r = 1 / 0, i = Cf()) {
  let [a, o] = i;
  if (t == null || [`boolean`, `string`].includes(typeof t) || (typeof t == `number` && Number.isFinite(t)))
    return t;
  let s = vf(e, t);
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
      return _f(``, l.toJSON(), c - 1, r, i);
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
    ((u[e] = _f(e, t, c - 1, r, i)), d++);
  }
  return (o(t), u);
}
function vf(e, t) {
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
    let n = yf(t);
    return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`;
  } catch (e) {
    return `**non-serializable** (${e})`;
  }
}
function yf(e) {
  let t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : `null prototype`;
}
function bf(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function xf(e) {
  return bf(JSON.stringify(e));
}
function Sf(e, t) {
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
function Cf() {
  let e = new WeakSet();
  function t(t) {
    return e.has(t) ? !0 : (e.add(t), !1);
  }
  function n(t) {
    e.delete(t);
  }
  return [t, n];
}
function wf(e, t = []) {
  return [e, t];
}
function Tf(e, t) {
  let [n, r] = e;
  return [n, [...r, t]];
}
function Ef(e, t) {
  let n = e[1];
  for (let e of n) {
    let n = e[0].type;
    if (t(e, n)) return !0;
  }
  return !1;
}
function Df(e, t) {
  return Ef(e, (e, n) => t.includes(n));
}
function Of(e) {
  let t = Gc(R);
  return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
}
function kf(e) {
  let t = Gc(R);
  return t.decodePolyfill ? t.decodePolyfill(e) : new TextDecoder().decode(e);
}
function Af(e) {
  let [t, n] = e,
    r = JSON.stringify(t);
  function i(e) {
    typeof r == `string`
      ? (r = typeof e == `string` ? r + e : [Of(r), e])
      : r.push(typeof e == `string` ? Of(e) : e);
  }
  for (let e of n) {
    let [t, n] = e;
    if ((i(`\n${JSON.stringify(t)}\n`), typeof n == `string` || n instanceof Uint8Array)) i(n);
    else {
      let e;
      try {
        e = JSON.stringify(n);
      } catch {
        e = JSON.stringify(hf(n));
      }
      i(e);
    }
  }
  return typeof r == `string` ? r : jf(r);
}
function jf(e) {
  let t = e.reduce((e, t) => e + t.length, 0),
    n = new Uint8Array(t),
    r = 0;
  for (let t of e) (n.set(t, r), (r += t.length));
  return n;
}
function Mf(e) {
  let t = typeof e == `string` ? Of(e) : e;
  function n(e) {
    let n = t.subarray(0, e);
    return ((t = t.subarray(e + 1)), n);
  }
  function r() {
    let e = t.indexOf(10);
    return (e < 0 && (e = t.length), JSON.parse(kf(n(e))));
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
function Nf(e) {
  return [{ type: `span` }, e];
}
function Pf(e) {
  let t = typeof e.data == `string` ? Of(e.data) : e.data;
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
var Ff = {
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
function If(e) {
  return Ff[e];
}
function Lf(e) {
  if (!e?.sdk) return;
  let { name: t, version: n } = e.sdk;
  return { name: t, version: n };
}
function Rf(e, t, n, r) {
  let i = e.sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date().toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && r && { dsn: bd(r) }),
    ...(i && { trace: i }),
  };
}
function zf(e, t) {
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
function Bf(e, t, n, r) {
  let i = Lf(n);
  return wf({ sent_at: new Date().toISOString(), ...(i && { sdk: i }), ...(!!r && t && { dsn: bd(t) }) }, [
    `aggregates` in e ? [{ type: `sessions` }, e] : [{ type: `session` }, e.toJSON()],
  ]);
}
function Vf(e, t, n, r) {
  let i = Lf(n),
    a = e.type && e.type !== `replay_event` ? e.type : `event`;
  zf(e, n?.sdk);
  let o = Rf(e, i, r, t);
  return (delete e.sdkProcessingMetadata, wf(o, [[{ type: a }, e]]));
}
function Hf(e, t) {
  function n(e) {
    return !!e.trace_id && !!e.public_key;
  }
  let r = pf(e[0]),
    i = t?.getDsn(),
    a = t?.getOptions().tunnel,
    o = { sent_at: new Date().toISOString(), ...(n(r) && { trace: r }), ...(!!a && i && { dsn: bd(i) }) },
    { beforeSendSpan: s, ignoreSpans: c } = t?.getOptions() || {},
    l = c?.length ? e.filter((e) => !af(U(e), c)) : e,
    u = e.length - l.length;
  u && t?.recordDroppedEvent(`before_send`, `span`, u);
  let d = s
      ? (e) => {
          let t = U(e);
          return s(t) || ($d(), t);
        }
      : U,
    f = [];
  for (let e of l) {
    let t = d(e);
    t && f.push(Nf(t));
  }
  return wf(o, f);
}
function Uf(e) {
  if (!L) return;
  let { description: t = `< unknown name >`, op: n = `< unknown op >`, parent_span_id: r } = U(e),
    { spanId: i } = e.spanContext(),
    a = Gd(e),
    o = Zd(e),
    s = o === e,
    c = `[Tracing] Starting ${a ? `sampled` : `unsampled`} ${s ? `root ` : ``}span`,
    l = [`op: ${n}`, `name: ${t}`, `ID: ${i}`];
  if ((r && l.push(`parent ID: ${r}`), !s)) {
    let { op: e, description: t } = U(o);
    (l.push(`root ID: ${o.spanContext().spanId}`),
      e && l.push(`root op: ${e}`),
      t && l.push(`root description: ${t}`));
  }
  z.log(`${c}
  ${l.join(`
  `)}`);
}
function Wf(e) {
  if (!L) return;
  let { description: t = `< unknown name >`, op: n = `< unknown op >` } = U(e),
    { spanId: r } = e.spanContext(),
    i = `[Tracing] Finishing "${n}" ${Zd(e) === e ? `root ` : ``}span "${t}" with ID ${r}`;
  z.log(i);
}
function Gf(e) {
  if (!e || e.length === 0) return;
  let t = {};
  return (
    e.forEach((e) => {
      let n = e.attributes || {},
        r = n[Zu],
        i = n[Qu];
      typeof r == `string` && typeof i == `number` && (t[e.name] = { value: i, unit: r });
    }),
    t
  );
}
var Kf = 1e3,
  qf = class {
    constructor(e = {}) {
      ((this._traceId = e.traceId || Du()),
        (this._spanId = e.spanId || Ou()),
        (this._startTime = e.startTimestamp || xu()),
        (this._links = e.links),
        (this._attributes = {}),
        this.setAttributes({ [Xu]: `manual`, [Yu]: e.op, ...e.attributes }),
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
      this._startTime = Vd(e);
    }
    setStatus(e) {
      return ((this._status = e), this);
    }
    updateName(e) {
      return ((this._name = e), this.setAttribute(qu, `custom`), this);
    }
    end(e) {
      this._endTime || ((this._endTime = Vd(e)), Wf(this), this._onSpanEnded());
    }
    getSpanJSON() {
      return {
        data: this._attributes,
        description: this._name,
        op: this._attributes[Yu],
        parent_span_id: this._parentSpanId,
        span_id: this._spanId,
        start_timestamp: this._startTime,
        status: Kd(this._status),
        timestamp: this._endTime,
        trace_id: this._traceId,
        origin: this._attributes[Xu],
        profile_id: this._attributes[ed],
        exclusive_time: this._attributes[td],
        measurements: Gf(this._events),
        is_segment: (this._isStandaloneSpan && Zd(this) === this) || void 0,
        segment_id: this._isStandaloneSpan ? Zd(this).spanContext().spanId : void 0,
        links: Bd(this._links),
      };
    }
    isRecording() {
      return !this._endTime && !!this._sampled;
    }
    addEvent(e, t, n) {
      L && z.log(`[Tracing] Adding an event to span:`, e);
      let r = Jf(t) ? t : n || xu(),
        i = Jf(t) ? {} : t || {},
        a = { name: e, time: Vd(r), attributes: i };
      return (this._events.push(a), this);
    }
    isStandaloneSpan() {
      return !!this._isStandaloneSpan;
    }
    _onSpanEnded() {
      let e = H();
      if ((e && e.emit(`spanEnd`, this), !(this._isStandaloneSpan || this === Zd(this)))) return;
      if (this._isStandaloneSpan) {
        this._sampled
          ? Zf(Hf([this], e))
          : (L &&
              z.log(`[Tracing] Discarding standalone span because its trace was not chosen to be sampled.`),
            e && e.recordDroppedEvent(`sample_rate`, `span`));
        return;
      }
      let t = this._convertSpanToTransaction();
      t && (ld(this).scope || B()).captureEvent(t);
    }
    _convertSpanToTransaction() {
      if (!Yf(U(this))) return;
      this._name ||=
        (L && z.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
        `<unlabeled transaction>`);
      let { scope: e, isolationScope: t } = ld(this),
        n = e?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
      if (this._sampled !== !0) return;
      let r = Xd(this)
          .filter((e) => e !== this && !Xf(e))
          .map((e) => U(e))
          .filter(Yf),
        i = this._attributes[qu];
      (delete this._attributes[$u],
        r.forEach((e) => {
          delete e.data[$u];
        }));
      let a = {
          contexts: { trace: Id(this) },
          spans: r.length > Kf ? r.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, Kf) : r,
          start_timestamp: this._startTime,
          timestamp: this._endTime,
          transaction: this._name,
          type: `transaction`,
          sdkProcessingMetadata: {
            capturedSpanScope: e,
            capturedSpanIsolationScope: t,
            dynamicSamplingContext: pf(this),
          },
          request: n,
          ...(i && { transaction_info: { source: i } }),
        },
        o = Gf(this._events);
      return (
        o &&
          Object.keys(o).length &&
          (L &&
            z.log(`[Measurements] Adding measurements to transaction event`, JSON.stringify(o, void 0, 2)),
          (a.measurements = o)),
        a
      );
    }
  };
function Jf(e) {
  return (e && typeof e == `number`) || e instanceof Date || Array.isArray(e);
}
function Yf(e) {
  return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id;
}
function Xf(e) {
  return e instanceof qf && e.isStandaloneSpan();
}
function Zf(e) {
  let t = H();
  if (!t) return;
  let n = e[1];
  if (!n || n.length === 0) {
    t.recordDroppedEvent(`before_send`, `span`);
    return;
  }
  t.sendEnvelope(e);
}
function Qf(e, t, n = () => {}, r = () => {}) {
  let i;
  try {
    i = e();
  } catch (e) {
    throw (t(e), n(), e);
  }
  return $f(i, t, n, r);
}
function $f(e, t, n, r) {
  return Ll(e)
    ? e.then(
        (e) => (n(), r(e), e),
        (e) => {
          throw (t(e), n(), e);
        },
      )
    : (n(), r(e), e);
}
function ep(e, t, n) {
  if (!nf(e)) return [!1];
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
  let a = Dd(i);
  if (a === void 0)
    return (
      L &&
        z.warn(
          `[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(i)} of type ${JSON.stringify(typeof i)}.`,
        ),
      [!1]
    );
  if (!a)
    return (
      L &&
        z.log(
          `[Tracing] Discarding transaction because ${typeof e.tracesSampler == `function` ? `tracesSampler returned 0 or false` : `a negative sampling decision was inherited or tracesSampleRate is set to 0`}`,
        ),
      [!1, a, r]
    );
  let o = n < a;
  return (
    o ||
      (L &&
        z.log(
          `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`,
        )),
    [o, a, r]
  );
}
var tp = `__SENTRY_SUPPRESS_TRACING__`;
function np(e) {
  let t = op();
  if (t.startInactiveSpan) return t.startInactiveSpan(e);
  let n = ap(e),
    { forceTransaction: r, parentSpan: i } = e;
  return (e.scope ? (t) => Gu(e.scope, t) : i === void 0 ? (e) => e() : (e) => rp(i, e))(() => {
    let t = B(),
      a = lp(t, i);
    return e.onlyIfParent && !a
      ? new mf()
      : ip({ parentSpan: a, spanArguments: n, forceTransaction: r, scope: t });
  });
}
function rp(e, t) {
  let n = op();
  return n.withActiveSpan ? n.withActiveSpan(e, t) : Gu((n) => (Au(n, e || void 0), t(n)));
}
function ip({ parentSpan: e, spanArguments: t, forceTransaction: n, scope: r }) {
  if (!nf()) {
    let r = new mf();
    return ((n || !e) && uf(r, { sampled: `false`, sample_rate: `0`, transaction: t.name, ...pf(r) }), r);
  }
  let i = V(),
    a;
  if (e && !n) ((a = cp(e, r, t)), Yd(e, a));
  else if (e) {
    let n = pf(e),
      { traceId: i, spanId: o } = e.spanContext(),
      s = Gd(e);
    ((a = sp({ traceId: i, parentSpanId: o, ...t }, r, s)), uf(a, n));
  } else {
    let {
      traceId: e,
      dsc: n,
      parentSpanId: o,
      sampled: s,
    } = { ...i.getPropagationContext(), ...r.getPropagationContext() };
    ((a = sp({ traceId: e, parentSpanId: o, ...t }, r, s)), n && uf(a, n));
  }
  return (Uf(a), cd(a, r, i), a);
}
function ap(e) {
  let t = { isStandalone: (e.experimental || {}).standalone, ...e };
  if (e.startTime) {
    let n = { ...t };
    return ((n.startTimestamp = Vd(e.startTime)), delete n.startTime, n);
  }
  return t;
}
function op() {
  return Uu(Wc());
}
function sp(e, t, n) {
  let r = H(),
    i = r?.getOptions() || {},
    { name: a = `` } = e,
    o = { spanAttributes: { ...e.attributes }, spanName: a, parentSampled: n };
  r?.emit(`beforeSampling`, o, { decision: !1 });
  let s = o.parentSampled ?? n,
    c = o.spanAttributes,
    l = t.getPropagationContext(),
    [u, d, f] = t.getScopeData().sdkProcessingMetadata[tp]
      ? [!1]
      : ep(
          i,
          { name: a, parentSampled: s, attributes: c, parentSampleRate: Dd(l.dsc?.sample_rate) },
          l.sampleRand,
        ),
    p = new qf({
      ...e,
      attributes: { [qu]: `custom`, [Ju]: d !== void 0 && f ? d : void 0, ...c },
      sampled: u,
    });
  return (
    !u &&
      r &&
      (L && z.log(`[Tracing] Discarding root span because its trace was not chosen to be sampled.`),
      r.recordDroppedEvent(`sample_rate`, `transaction`)),
    r && r.emit(`spanStart`, p),
    p
  );
}
function cp(e, t, n) {
  let { spanId: r, traceId: i } = e.spanContext(),
    a = !t.getScopeData().sdkProcessingMetadata[tp] && Gd(e),
    o = a ? new qf({ ...n, parentSpanId: r, traceId: i, sampled: a }) : new mf({ traceId: i });
  Yd(e, o);
  let s = H();
  return (s && (s.emit(`spanStart`, o), n.endTimestamp && s.emit(`spanEnd`, o)), o);
}
function lp(e, t) {
  if (t) return t;
  if (t === null) return;
  let n = ju(e);
  if (!n) return;
  let r = H();
  return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? Zd(n) : n;
}
var up = 0,
  dp = 1,
  fp = 2;
function pp(e) {
  return new hp((t) => {
    t(e);
  });
}
function mp(e) {
  return new hp((t, n) => {
    n(e);
  });
}
var hp = class e {
  constructor(e) {
    ((this._state = up), (this._handlers = []), this._runExecutor(e));
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
    if (this._state === up) return;
    let e = this._handlers.slice();
    ((this._handlers = []),
      e.forEach((e) => {
        e[0] ||= (this._state === dp && e[1](this._value), this._state === fp && e[2](this._value), !0);
      }));
  }
  _runExecutor(e) {
    let t = (e, t) => {
        if (this._state === up) {
          if (Ll(t)) {
            t.then(n, r);
            return;
          }
          ((this._state = e), (this._value = t), this._executeHandlers());
        }
      },
      n = (e) => {
        t(dp, e);
      },
      r = (e) => {
        t(fp, e);
      };
    try {
      e(n, r);
    } catch (e) {
      r(e);
    }
  }
};
function gp(e, t, n, r = 0) {
  try {
    let i = _p(t, n, e, r);
    return Ll(i) ? i : pp(i);
  } catch (e) {
    return mp(e);
  }
}
function _p(e, t, n, r) {
  let i = n[r];
  if (!e || !i) return e;
  let a = i({ ...e }, t);
  return (
    L && a === null && z.log(`Event processor "${i.id || `?`}" dropped event`),
    Ll(a) ? a.then((e) => _p(e, t, n, r + 1)) : _p(a, t, n, r + 1)
  );
}
function vp(e, t) {
  let { fingerprint: n, span: r, breadcrumbs: i, sdkProcessingMetadata: a } = t;
  (xp(e, t), r && wp(e, r), Tp(e, n), Sp(e, i), Cp(e, a));
}
function yp(e, t) {
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
  (bp(e, `extra`, n),
    bp(e, `tags`, r),
    bp(e, `user`, i),
    bp(e, `contexts`, a),
    (e.sdkProcessingMetadata = Eu(e.sdkProcessingMetadata, s, 2)),
    o && (e.level = o),
    p && (e.transactionName = p),
    m && (e.span = m),
    c.length && (e.breadcrumbs = [...e.breadcrumbs, ...c]),
    l.length && (e.fingerprint = [...e.fingerprint, ...l]),
    u.length && (e.eventProcessors = [...e.eventProcessors, ...u]),
    d.length && (e.attachments = [...e.attachments, ...d]),
    (e.propagationContext = { ...e.propagationContext, ...f }));
}
function bp(e, t, n) {
  e[t] = Eu(e[t], n, 1);
}
function xp(e, t) {
  let { extra: n, tags: r, user: i, contexts: a, level: o, transactionName: s } = t;
  (Object.keys(n).length && (e.extra = { ...n, ...e.extra }),
    Object.keys(r).length && (e.tags = { ...r, ...e.tags }),
    Object.keys(i).length && (e.user = { ...i, ...e.user }),
    Object.keys(a).length && (e.contexts = { ...a, ...e.contexts }),
    o && (e.level = o),
    s && e.type !== `transaction` && (e.transaction = s));
}
function Sp(e, t) {
  let n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : void 0;
}
function Cp(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function wp(e, t) {
  ((e.contexts = { trace: Ld(t), ...e.contexts }),
    (e.sdkProcessingMetadata = { dynamicSamplingContext: pf(t), ...e.sdkProcessingMetadata }));
  let n = U(Zd(t)).description;
  n && !e.transaction && e.type === `transaction` && (e.transaction = n);
}
function Tp(e, t) {
  ((e.fingerprint = e.fingerprint ? (Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint]) : []),
    t && (e.fingerprint = e.fingerprint.concat(t)),
    e.fingerprint.length || delete e.fingerprint);
}
var Ep, Dp, Op, kp;
function Ap(e) {
  let t = R._sentryDebugIds,
    n = R._debugIds;
  if (!t && !n) return {};
  let r = t ? Object.keys(t) : [],
    i = n ? Object.keys(n) : [];
  if (kp && r.length === Dp && i.length === Op) return kp;
  ((Dp = r.length), (Op = i.length), (kp = {}), (Ep ||= {}));
  let a = (t, n) => {
    for (let r of t) {
      let t = n[r],
        i = Ep?.[r];
      if (i && kp && t) ((kp[i[0]] = t), Ep && (Ep[r] = [i[0], t]));
      else if (t) {
        let n = e(r);
        for (let e = n.length - 1; e >= 0; e--) {
          let i = n[e]?.filename;
          if (i && kp && Ep) {
            ((kp[i] = t), (Ep[r] = [i, t]));
            break;
          }
        }
      }
    }
  };
  return (t && a(r, t), n && a(i, n), kp);
}
function jp(e, t, n, r, i, a) {
  let { normalizeDepth: o = 3, normalizeMaxBreadth: s = 1e3 } = e,
    c = { ...t, event_id: t.event_id || n.event_id || su(), timestamp: t.timestamp || vu() },
    l = n.integrations || e.integrations.map((e) => e.name);
  (Mp(c, e), Fp(c, l), i && i.emit(`applyFrameMetadata`, t), t.type === void 0 && Np(c, e.stackParser));
  let u = Lp(r, n.captureContext);
  n.mechanism && du(c, n.mechanism);
  let d = i ? i.getEventProcessors() : [],
    f = Wu().getScopeData();
  (a && yp(f, a.getScopeData()), u && yp(f, u.getScopeData()));
  let p = [...(n.attachments || []), ...f.attachments];
  return (
    p.length && (n.attachments = p),
    vp(c, f),
    gp([...d, ...f.eventProcessors], c, n).then(
      (e) => (e && Pp(e), typeof o == `number` && o > 0 ? Ip(e, o, s) : e),
    )
  );
}
function Mp(e, t) {
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
function Np(e, t) {
  let n = Ap(t);
  e.exception?.values?.forEach((e) => {
    e.stacktrace?.frames?.forEach((e) => {
      e.filename && (e.debug_id = n[e.filename]);
    });
  });
}
function Pp(e) {
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
function Fp(e, t) {
  t.length > 0 && ((e.sdk = e.sdk || {}), (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
}
function Ip(e, t, n) {
  if (!e) return null;
  let r = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map((e) => ({ ...e, ...(e.data && { data: hf(e.data, t, n) }) })),
    }),
    ...(e.user && { user: hf(e.user, t, n) }),
    ...(e.contexts && { contexts: hf(e.contexts, t, n) }),
    ...(e.extra && { extra: hf(e.extra, t, n) }),
  };
  return (
    e.contexts?.trace &&
      r.contexts &&
      ((r.contexts.trace = e.contexts.trace),
      e.contexts.trace.data && (r.contexts.trace.data = hf(e.contexts.trace.data, t, n))),
    e.spans && (r.spans = e.spans.map((e) => ({ ...e, ...(e.data && { data: hf(e.data, t, n) }) }))),
    e.contexts?.flags && r.contexts && (r.contexts.flags = hf(e.contexts.flags, 3, n)),
    r
  );
}
function Lp(e, t) {
  if (!t) return e;
  let n = e ? e.clone() : new Nu();
  return (n.update(t), n);
}
function Rp(e) {
  if (e) return zp(e) || Vp(e) ? { captureContext: e } : e;
}
function zp(e) {
  return e instanceof Nu || typeof e == `function`;
}
var Bp = [`user`, `level`, `extra`, `contexts`, `tags`, `fingerprint`, `propagationContext`];
function Vp(e) {
  return Object.keys(e).some((e) => Bp.includes(e));
}
function Hp(e, t) {
  return B().captureException(e, Rp(t));
}
function Up(e, t) {
  let n = typeof t == `string` ? t : void 0,
    r = typeof t == `string` ? void 0 : { captureContext: t };
  return B().captureMessage(e, n, r);
}
function Wp(e, t) {
  return B().captureEvent(e, t);
}
function Gp(e, t) {
  V().setTag(e, t);
}
function Kp(e) {
  V().setUser(e);
}
async function qp(e) {
  let t = H();
  return t ? t.flush(e) : (L && z.warn(`Cannot flush events. No client defined.`), Promise.resolve(!1));
}
function Jp() {
  let e = H();
  return e?.getOptions().enabled !== !1 && !!e?.getTransport();
}
function Yp(e) {
  let t = V(),
    n = B(),
    { userAgent: r } = R.navigator || {},
    i = Su({ user: n.getUser() || t.getUser(), ...(r && { userAgent: r }), ...e }),
    a = t.getSession();
  return (a?.status === `ok` && Cu(a, { status: `exited` }), Xp(), t.setSession(i), i);
}
function Xp() {
  let e = V(),
    t = B().getSession() || e.getSession();
  (t && wu(t), Zp(), e.setSession());
}
function Zp() {
  let e = V(),
    t = H(),
    n = e.getSession();
  n && t && t.captureSession(n);
}
function Qp(e = !1) {
  if (e) {
    Xp();
    return;
  }
  Zp();
}
var $p = `7`;
function em(e) {
  let t = e.protocol ? `${e.protocol}:` : ``,
    n = e.port ? `:${e.port}` : ``;
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ``}/api/`;
}
function tm(e) {
  return `${em(e)}${e.projectId}/envelope/`;
}
function nm(e, t) {
  let n = { sentry_version: $p };
  return (
    e.publicKey && (n.sentry_key = e.publicKey),
    t && (n.sentry_client = `${t.name}/${t.version}`),
    new URLSearchParams(n).toString()
  );
}
function rm(e, t, n) {
  return t || `${tm(e)}?${nm(e, n)}`;
}
var im = [];
function am(e) {
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
function om(e) {
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
  return am(r);
}
function sm(e, t) {
  let n = {};
  return (
    t.forEach((t) => {
      t && lm(e, t, n);
    }),
    n
  );
}
function cm(e, t) {
  for (let n of t) n?.afterAllSetup && n.afterAllSetup(e);
}
function lm(e, t, n) {
  if (n[t.name]) {
    L && z.log(`Integration skipped because it was already installed: ${t.name}`);
    return;
  }
  if (
    ((n[t.name] = t),
    !im.includes(t.name) && typeof t.setupOnce == `function` && (t.setupOnce(), im.push(t.name)),
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
  L && z.log(`Integration installed: ${t.name}`);
}
function W(e) {
  return e;
}
function um(e, t) {
  return t
    ? Gu(t, () => {
        let n = Qd(),
          r = n ? Ld(n) : Ku(t);
        return [n ? pf(n) : ff(e, t), r];
      })
    : [void 0, void 0];
}
var dm = { trace: 1, debug: 5, info: 9, warn: 13, error: 17, fatal: 21 };
function fm(e) {
  return [
    { type: `log`, item_count: e.length, content_type: `application/vnd.sentry.items.log+json` },
    { items: e },
  ];
}
function pm(e, t, n, r) {
  let i = {};
  return (
    t?.sdk && (i.sdk = { name: t.sdk.name, version: t.sdk.version }),
    n && r && (i.dsn = bd(r)),
    wf(i, [fm(e)])
  );
}
var mm = 100;
function hm(e) {
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
function gm(e, t, n, r = !0) {
  n && (!e[t] || r) && (e[t] = n);
}
function _m(e, t) {
  let n = Sm(),
    r = bm(e);
  r === void 0 ? n.set(e, [t]) : r.length >= mm ? (ym(e, r), n.set(e, [t])) : n.set(e, [...r, t]);
}
function vm(e, t = B(), n = _m) {
  let r = t?.getClient() ?? H();
  if (!r) {
    L && z.warn(`No client available to capture log.`);
    return;
  }
  let { release: i, environment: a, enableLogs: o = !1, beforeSendLog: s } = r.getOptions();
  if (!o) {
    L && z.warn(`logging option not enabled, log will not be captured.`);
    return;
  }
  let [, c] = um(r, t),
    l = { ...e.attributes },
    {
      user: { id: u, email: d, username: f },
    } = xm(t);
  (gm(l, `user.id`, u, !1),
    gm(l, `user.email`, d, !1),
    gm(l, `user.name`, f, !1),
    gm(l, `sentry.release`, i),
    gm(l, `sentry.environment`, a));
  let { name: p, version: m } = r.getSdkMetadata()?.sdk ?? {};
  (gm(l, `sentry.sdk.name`, p), gm(l, `sentry.sdk.version`, m));
  let h = r.getIntegrationByName(`Replay`),
    g = h?.getReplayId(!0);
  (gm(l, `sentry.replay_id`, g),
    g && h?.getRecordingMode() === `buffer` && gm(l, `sentry._internal.replay_is_buffering`, !0));
  let _ = e.message;
  if (jl(_)) {
    let { __sentry_template_string__: e, __sentry_template_values__: t = [] } = _;
    (t?.length && (l[`sentry.message.template`] = e),
      t.forEach((e, t) => {
        l[`sentry.message.parameter.${t}`] = e;
      }));
  }
  gm(l, `sentry.trace.parent_span_id`, ju(t)?.spanContext().spanId);
  let v = { ...e, attributes: l };
  r.emit(`beforeCaptureLog`, v);
  let y = s ? Xc(() => s(v)) : v;
  if (!y) {
    (r.recordDroppedEvent(`before_send`, `log_item`, 1),
      L && z.warn(`beforeSendLog returned null, log will not be captured.`));
    return;
  }
  let { level: b, message: x, attributes: S = {}, severityNumber: C } = y;
  (n(r, {
    timestamp: xu(),
    level: b,
    body: x,
    trace_id: c?.trace_id,
    severity_number: C ?? dm[b],
    attributes: Object.keys(S).reduce((e, t) => ((e[t] = hm(S[t])), e), {}),
  }),
    r.emit(`afterCaptureLog`, y));
}
function ym(e, t) {
  let n = t ?? bm(e) ?? [];
  if (n.length === 0) return;
  let r = e.getOptions(),
    i = pm(n, r._metadata, r.tunnel, e.getDsn());
  (Sm().set(e, []), e.emit(`flushLogs`), e.sendEnvelope(i));
}
function bm(e) {
  return Sm().get(e);
}
function xm(e) {
  let t = Wu().getScopeData();
  return (yp(t, V().getScopeData()), yp(t, e.getScopeData()), t);
}
function Sm() {
  return Kc(`clientToLogBufferMap`, () => new WeakMap());
}
function Cm(e) {
  return [
    {
      type: `trace_metric`,
      item_count: e.length,
      content_type: `application/vnd.sentry.items.trace-metric+json`,
    },
    { items: e },
  ];
}
function wm(e, t, n, r) {
  let i = {};
  return (
    t?.sdk && (i.sdk = { name: t.sdk.name, version: t.sdk.version }),
    n && r && (i.dsn = bd(r)),
    wf(i, [Cm(e)])
  );
}
var Tm = 1e3;
function Em(e, t) {
  let n = km(),
    r = Om(e);
  r === void 0 ? n.set(e, [t]) : r.length >= Tm ? (Dm(e, r), n.set(e, [t])) : n.set(e, [...r, t]);
}
function Dm(e, t) {
  let n = t ?? Om(e) ?? [];
  if (n.length === 0) return;
  let r = e.getOptions(),
    i = wm(n, r._metadata, r.tunnel, e.getDsn());
  (km().set(e, []), e.emit(`flushMetrics`), e.sendEnvelope(i));
}
function Om(e) {
  return km().get(e);
}
function km() {
  return Kc(`clientToMetricBufferMap`, () => new WeakMap());
}
var Am = Symbol.for(`SentryBufferFullError`);
function jm(e = 100) {
  let t = new Set();
  function n() {
    return t.size < e;
  }
  function r(e) {
    t.delete(e);
  }
  function i(e) {
    if (!n()) return mp(Am);
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
    if (!t.size) return pp(!0);
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
var Mm = 6e4;
function Nm(e, t = Date.now()) {
  let n = parseInt(`${e}`, 10);
  if (!isNaN(n)) return n * 1e3;
  let r = Date.parse(`${e}`);
  return isNaN(r) ? Mm : r - t;
}
function Pm(e, t) {
  return e[t] || e.all || 0;
}
function Fm(e, t, n = Date.now()) {
  return Pm(e, t) > n;
}
function Im(e, { statusCode: t, headers: n }, r = Date.now()) {
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
  else o ? (i.all = r + Nm(o, r)) : t === 429 && (i.all = r + 6e4);
  return i;
}
function Lm(e, t, n = jm(e.bufferSize || 64)) {
  let r = {},
    i = (e) => n.drain(e);
  function a(i) {
    let a = [];
    if (
      (Ef(i, (t, n) => {
        let i = If(n);
        Fm(r, i) ? e.recordDroppedEvent(`ratelimit_backoff`, i) : a.push(t);
      }),
      a.length === 0)
    )
      return Promise.resolve({});
    let o = wf(i[0], a),
      s = (t) => {
        Ef(o, (n, r) => {
          e.recordDroppedEvent(t, If(r));
        });
      };
    return n
      .add(() =>
        t({ body: Af(o) }).then(
          (e) => (
            e.statusCode !== void 0 &&
              (e.statusCode < 200 || e.statusCode >= 300) &&
              L &&
              z.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),
            (r = Im(r, e)),
            e
          ),
          (e) => {
            throw (s(`network_error`), L && z.error(`Encountered error running transport request:`, e), e);
          },
        ),
      )
      .then(
        (e) => e,
        (e) => {
          if (e === Am)
            return (
              L && z.error(`Skipped sending event because buffer is full.`),
              s(`queue_overflow`),
              Promise.resolve({})
            );
          throw e;
        },
      );
  }
  return { send: a, flush: i };
}
function Rm(e, t, n) {
  let r = [{ type: `client_report` }, { timestamp: n || vu(), discarded_events: e }];
  return wf(t ? { dsn: t } : {}, [r]);
}
function zm(e) {
  let t = [];
  e.message && t.push(e.message);
  try {
    let n = e.exception.values[e.exception.values.length - 1];
    n?.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`));
  } catch {}
  return t;
}
function Bm(e) {
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
    profile_id: o?.[ed],
    exclusive_time: o?.[td],
    measurements: e.measurements,
    is_segment: !0,
  };
}
function Vm(e) {
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
var Hm = `Not capturing exception because it's already been captured.`,
  Um = `Discarded session because of missing or non-string release`,
  Wm = Symbol.for(`SentryInternalError`),
  Gm = Symbol.for(`SentryDoNotSendEventError`),
  Km = 5e3;
function qm(e) {
  return { message: e, [Wm]: !0 };
}
function Jm(e) {
  return { message: e, [Gm]: !0 };
}
function Ym(e) {
  return !!e && typeof e == `object` && Wm in e;
}
function Xm(e) {
  return !!e && typeof e == `object` && Gm in e;
}
function Zm(e, t, n, r, i) {
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
            }, Km))));
    }),
    e.on(`flush`, () => {
      i(e);
    }));
}
var Qm = class {
  constructor(e) {
    if (
      ((this._options = e),
      (this._integrations = {}),
      (this._numProcessing = 0),
      (this._outcomes = {}),
      (this._hooks = {}),
      (this._eventProcessors = []),
      (this._promiseBuffer = jm(e.transportOptions?.bufferSize ?? 64)),
      e.dsn ? (this._dsn = Ed(e.dsn)) : L && z.warn(`No DSN provided, client will not send events.`),
      this._dsn)
    ) {
      let t = rm(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
      this._transport = e.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...e.transportOptions,
        url: t,
      });
    }
    ((this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs),
      this._options.enableLogs && Zm(this, `afterCaptureLog`, `flushLogs`, ah, ym),
      (this._options.enableMetrics ?? this._options._experiments?.enableMetrics ?? !0) &&
        Zm(this, `afterCaptureMetric`, `flushMetrics`, ih, Dm));
  }
  captureException(e, t, n) {
    let r = su();
    if (hu(e)) return (L && z.log(Hm), r);
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
    let i = { event_id: su(), ...n },
      a = jl(e) ? e : String(e),
      o = Ml(e),
      s = o ? this.eventFromMessage(a, t, i) : this.eventFromException(e, i);
    return (
      this._process(() => s.then((e) => this._captureEvent(e, i, r)), o ? `unknown` : `error`),
      i.event_id
    );
  }
  captureEvent(e, t, n) {
    let r = su();
    if (t?.originalException && hu(t.originalException)) return (L && z.log(Hm), r);
    let i = { event_id: r, ...t },
      a = e.sdkProcessingMetadata || {},
      o = a.capturedSpanScope,
      s = a.capturedSpanIsolationScope,
      c = $m(e.type);
    return (this._process(() => this._captureEvent(e, i, o || n, s), c), i.event_id);
  }
  captureSession(e) {
    (this.sendSession(e), Cu(e, { init: !1 }));
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
    (lm(this, e, this._integrations), t || cm(this, [e]));
  }
  sendEvent(e, t = {}) {
    this.emit(`beforeSendEvent`, e, t);
    let n = Vf(e, this._dsn, this._options._metadata, this._options.tunnel);
    for (let e of t.attachments || []) n = Tf(n, Pf(e));
    this.sendEnvelope(n).then((t) => this.emit(`afterSendEvent`, e, t));
  }
  sendSession(e) {
    let { release: t, environment: n = cf } = this._options;
    if (`aggregates` in e) {
      let r = e.attrs || {};
      if (!r.release && !t) {
        L && z.warn(Um);
        return;
      }
      ((r.release = r.release || t), (r.environment = r.environment || n), (e.attrs = r));
    } else {
      if (!e.release && !t) {
        L && z.warn(Um);
        return;
      }
      ((e.release = e.release || t), (e.environment = e.environment || n));
    }
    this.emit(`beforeSendSession`, e);
    let r = Bf(e, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(r);
  }
  recordDroppedEvent(e, t, n = 1) {
    if (this._options.sendClientReports) {
      let r = `${e}:${t}`;
      (L && z.log(`Recording outcome: "${r}"${n > 1 ? ` (${n} times)` : ``}`),
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
        return (L && z.error(`Error while sending envelope:`, e), {});
      }
    return (L && z.error(`Transport disabled`), {});
  }
  _setupIntegrations() {
    let { integrations: e } = this._options;
    ((this._integrations = sm(this, e)), cm(this, e));
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
      (Cu(e, { ...(n && { status: `crashed` }), errors: e.errors || Number(r || n) }),
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
      jp(i, e, t, n, this, r).then((e) =>
        e === null
          ? e
          : (this.emit(`postprocessEvent`, e, t),
            (e.contexts = { trace: Ku(n), ...e.contexts }),
            (e.sdkProcessingMetadata = { dynamicSamplingContext: ff(this, n), ...e.sdkProcessingMetadata }),
            e),
      )
    );
  }
  _captureEvent(e, t = {}, n = B(), r = V()) {
    return (
      L && nh(e) && z.log(`Captured error event \`${zm(e)[0] || `<unknown>`}\``),
      this._processEvent(e, t, n, r).then(
        (e) => e.event_id,
        (e) => {
          L && (Xm(e) ? z.log(e.message) : Ym(e) ? z.warn(e.message) : z.warn(e));
        },
      )
    );
  }
  _processEvent(e, t, n, r) {
    let i = this.getOptions(),
      { sampleRate: a } = i,
      o = rh(e),
      s = nh(e),
      c = `before send for type \`${e.type || `error`}\``,
      l = a === void 0 ? void 0 : Dd(a);
    if (s && typeof l == `number` && Math.random() > l)
      return (
        this.recordDroppedEvent(`sample_rate`, `error`),
        mp(Jm(`Discarding event because it's not included in the random sample (sampling rate = ${a})`))
      );
    let u = $m(e.type);
    return this._prepareEvent(e, t, n, r)
      .then((e) => {
        if (e === null)
          throw (
            this.recordDroppedEvent(`event_processor`, u),
            Jm("An event processor returned `null`, will not send event.")
          );
        return t.data && t.data.__sentry__ === !0 ? e : eh(th(this, i, e, t), c);
      })
      .then((i) => {
        if (i === null) {
          if ((this.recordDroppedEvent(`before_send`, u), o)) {
            let t = 1 + (e.spans || []).length;
            this.recordDroppedEvent(`before_send`, `span`, t);
          }
          throw Jm(`${c} returned \`null\`, will not send event.`);
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
        throw Xm(e) || Ym(e)
          ? e
          : (this.captureException(e, {
              mechanism: { handled: !1, type: `internal` },
              data: { __sentry__: !0 },
              originalException: e,
            }),
            qm(
              `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`,
            ));
      });
  }
  _process(e, t) {
    (this._numProcessing++,
      this._promiseBuffer.add(e).then(
        (e) => (this._numProcessing--, e),
        (e) => (this._numProcessing--, e === Am && this.recordDroppedEvent(`queue_overflow`, t), e),
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
    L && z.log(`Flushing outcomes...`);
    let e = this._clearOutcomes();
    if (e.length === 0) {
      L && z.log(`No outcomes to send`);
      return;
    }
    if (!this._dsn) {
      L && z.log(`No dsn provided, will not send outcomes`);
      return;
    }
    L && z.log(`Sending outcomes:`, e);
    let t = Rm(e, this._options.tunnel && bd(this._dsn));
    this.sendEnvelope(t);
  }
};
function $m(e) {
  return e === `replay_event` ? `replay` : e || `error`;
}
function eh(e, t) {
  let n = `${t} must return \`null\` or a valid event.`;
  if (Ll(e))
    return e.then(
      (e) => {
        if (!Nl(e) && e !== null) throw qm(n);
        return e;
      },
      (e) => {
        throw qm(`${t} rejected with ${e}`);
      },
    );
  if (!Nl(e) && e !== null) throw qm(n);
  return e;
}
function th(e, t, n, r) {
  let { beforeSend: i, beforeSendTransaction: a, beforeSendSpan: o, ignoreSpans: s } = t,
    c = n;
  if (nh(c) && i) return i(c, r);
  if (rh(c)) {
    if (o || s) {
      let t = Bm(c);
      if (s?.length && af(t, s)) return null;
      if (o) {
        let e = o(t);
        e ? (c = Eu(n, Vm(e))) : $d();
      }
      if (c.spans) {
        let t = [],
          n = c.spans;
        for (let e of n) {
          if (s?.length && af(e, s)) {
            of(n, e);
            continue;
          }
          if (o) {
            let n = o(e);
            n ? t.push(n) : ($d(), t.push(e));
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
function nh(e) {
  return e.type === void 0;
}
function rh(e) {
  return e.type === `transaction`;
}
function ih(e) {
  let t = 0;
  return (e.name && (t += e.name.length * 2), (t += 8), t + oh(e.attributes));
}
function ah(e) {
  let t = 0;
  return (e.message && (t += e.message.length * 2), t + oh(e.attributes));
}
function oh(e) {
  if (!e) return 0;
  let t = 0;
  return (
    Object.values(e).forEach((e) => {
      Array.isArray(e) ? (t += e.length * sh(e[0])) : Ml(e) ? (t += sh(e)) : (t += 100);
    }),
    t
  );
}
function sh(e) {
  return typeof e == `string` ? e.length * 2 : typeof e == `number` ? 8 : typeof e == `boolean` ? 4 : 0;
}
function ch(e, t, n, r, i) {
  let a = { sent_at: new Date().toISOString() };
  return (
    n?.sdk && (a.sdk = { name: n.sdk.name, version: n.sdk.version }),
    r && i && (a.dsn = bd(i)),
    t && (a.trace = t),
    wf(a, [lh(e)])
  );
}
function lh(e) {
  return [{ type: `check_in` }, e];
}
function uh(e) {
  let t = e._metadata?.sdk,
    n = t?.name && t?.version ? `${t?.name}/${t?.version}` : void 0;
  e.transportOptions = {
    ...e.transportOptions,
    headers: { ...(n && { "user-agent": n }), ...e.transportOptions?.headers },
  };
}
function dh(e, t) {
  return e(t.stack || ``, 1);
}
function fh(e, t) {
  let n = { type: t.name || t.constructor.name, value: t.message },
    r = dh(e, t);
  return (r.length && (n.stacktrace = { frames: r }), n);
}
function ph(e) {
  for (let t in e)
    if (Object.prototype.hasOwnProperty.call(e, t)) {
      let n = e[t];
      if (n instanceof Error) return n;
    }
}
function mh(e) {
  if (`name` in e && typeof e.name == `string`) {
    let t = `'${e.name}' captured as exception`;
    return (`message` in e && typeof e.message == `string` && (t += ` with message '${e.message}'`), t);
  }
  if (`message` in e && typeof e.message == `string`) return e.message;
  let t = Ql(e);
  if (kl(e)) return `Event \`ErrorEvent\` captured as exception with message \`${e.message}\``;
  let n = hh(e);
  return `${n && n !== `Object` ? `'${n}'` : `Object`} captured as exception with keys: ${t}`;
}
function hh(e) {
  try {
    let t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : void 0;
  } catch {}
}
function gh(e, t, n, r) {
  if (Dl(n)) return [n, void 0];
  if (((t.synthetic = !0), Nl(n))) {
    let t = e?.getOptions().normalizeDepth,
      i = { __serialized__: gf(n, t) },
      a = ph(n);
    if (a) return [a, i];
    let o = mh(n),
      s = r?.syntheticException || Error(o);
    return ((s.message = o), [s, i]);
  }
  let i = r?.syntheticException || Error(n);
  return ((i.message = `${n}`), [i, void 0]);
}
function _h(e, t, n, r) {
  let i = (r?.data && r.data.mechanism) || { handled: !0, type: `generic` },
    [a, o] = gh(e, i, n, r),
    s = { exception: { values: [fh(t, a)] } };
  return (o && (s.extra = o), uu(s, void 0, void 0), du(s, i), { ...s, event_id: r?.event_id });
}
function vh(e, t, n = `info`, r, i) {
  let a = { event_id: r?.event_id, level: n };
  if (i && r?.syntheticException) {
    let n = dh(e, r.syntheticException);
    n.length &&
      ((a.exception = { values: [{ value: t, stacktrace: { frames: n } }] }), du(a, { synthetic: !0 }));
  }
  if (jl(t)) {
    let { __sentry_template_string__: e, __sentry_template_values__: n } = t;
    return ((a.logentry = { message: e, params: n }), a);
  }
  return ((a.message = t), a);
}
var yh = class extends Qm {
  constructor(e) {
    (tf(), uh(e), super(e), this._setUpMetricsProcessing());
  }
  eventFromException(e, t) {
    let n = _h(this, this._options.stackParser, e, t);
    return ((n.level = `error`), pp(n));
  }
  eventFromMessage(e, t = `info`, n) {
    return pp(vh(this._options.stackParser, e, t, n, this._options.attachStacktrace));
  }
  captureException(e, t, n) {
    return (bh(t), super.captureException(e, t, n));
  }
  captureEvent(e, t, n) {
    return (
      !e.type && e.exception?.values && e.exception.values.length > 0 && bh(t),
      super.captureEvent(e, t, n)
    );
  }
  captureCheckIn(e, t, n) {
    let r = `checkInId` in e && e.checkInId ? e.checkInId : su();
    if (!this._isEnabled()) return (L && z.warn(`SDK not enabled, will not capture check-in.`), r);
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
    let [c, l] = um(this, n);
    l && (s.contexts = { trace: l });
    let u = ch(s, c, this.getSdkMetadata(), o, this.getDsn());
    return (L && z.log(`Sending checkin:`, e.monitorSlug, e.status), this.sendEnvelope(u), r);
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
function bh(e) {
  let t = V().getScopeData().sdkProcessingMetadata.requestSession;
  if (t) {
    let n = e?.mechanism?.handled ?? !0;
    n && t.status !== `crashed` ? (t.status = `errored`) : n || (t.status = `crashed`);
  }
}
var xh = 5e3,
  Sh = 36e5;
function Ch(e) {
  function t(...e) {
    L && z.log(`[Offline]:`, ...e);
  }
  return (n) => {
    let r = e(n);
    if (!n.createStore) throw Error("No `createStore` function was provided");
    let i = n.createStore(n),
      a = xh,
      o;
    function s(e, t, r) {
      return Df(e, [`client_report`]) ? !1 : !n.shouldStore || n.shouldStore(e, t, r);
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
      o || (c(a), (a = Math.min(a * 2, Sh)));
    }
    async function u(e, o = !1) {
      if (!o && Df(e, [`replay_event`, `replay_recording`])) return (await i.push(e), c(100), {});
      try {
        if (n.shouldSend && (await n.shouldSend(e)) === !1)
          throw Error("Envelope not sent because `shouldSend` callback returned false");
        let t = await r.send(e),
          i = 100;
        if (t) {
          if (t.headers?.[`retry-after`]) i = Nm(t.headers[`retry-after`]);
          else if (t.headers?.[`x-sentry-rate-limits`]) i = 6e4;
          else if ((t.statusCode || 0) >= 400) return t;
        }
        return (c(i), (a = xh), t);
      } catch (n) {
        if (await s(e, n, a))
          return (o ? await i.unshift(e) : await i.push(e), l(), t(`Error sending. Event queued.`, n), {});
        throw n;
      }
    }
    return (
      n.flushAtStartup && l(),
      { send: u, flush: (e) => (e === void 0 && ((a = xh), c(100)), r.flush(e)) }
    );
  };
}
var wh = new Set();
function Th() {
  (wh.clear(), L && z.log(`Cleared AI provider skip registrations`));
}
function Eh(e) {
  if (!e) return {};
  let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!t) return {};
  let n = t[6] || ``,
    r = t[8] || ``;
  return { host: t[4], path: t[5], protocol: t[2], search: n, hash: r, relative: t[5] + n + r };
}
function Dh(e) {
  return e.split(/[?#]/, 1)[0];
}
function Oh(e) {
  let { protocol: t, host: n, path: r } = e,
    i =
      n
        ?.replace(/^.*@/, `[filtered]:[filtered]@`)
        .replace(/(:80)$/, ``)
        .replace(/(:443)$/, ``) || ``;
  return `${t ? `${t}://` : ``}${i}${r}`;
}
function kh(e, ...t) {
  let n = new String(String.raw(e, ...t));
  return (
    (n.__sentry_template_string__ = e.join(`\0`).replace(/%/g, `%%`).replace(/\0/g, `%s`)),
    (n.__sentry_template_values__ = t),
    n
  );
}
var Ah = kh;
function jh(e) {
  `aggregates` in e
    ? e.attrs?.ip_address === void 0 && (e.attrs = { ...e.attrs, ip_address: `{{auto}}` })
    : e.ipAddress === void 0 && (e.ipAddress = `{{auto}}`);
}
function Mh(e, t, n = [t], r = `npm`) {
  let i = e._metadata || {};
  ((i.sdk ||= {
    name: `sentry.javascript.${t}`,
    packages: n.map((e) => ({ name: `${r}:@sentry/${e}`, version: Uc })),
    version: Uc,
  }),
    (e._metadata = i));
}
function Nh(e = {}) {
  let t = e.client || H();
  if (!Jp() || !t) return {};
  let n = Uu(Wc());
  if (n.getTraceData) return n.getTraceData(e);
  let r = e.scope || B(),
    i = e.span || Qd(),
    a = i ? Rd(i) : Ph(r),
    o = pd(i ? pf(i) : ff(t, r));
  if (!Od.test(a)) return (z.warn(`Invalid sentry-trace data. Cannot generate trace data`), {});
  let s = { "sentry-trace": a, baggage: o };
  if (e.propagateTraceparent) {
    let e = i ? zd(i) : Fh(r);
    e && (s.traceparent = e);
  }
  return s;
}
function Ph(e) {
  let { traceId: t, sampled: n, propagationSpanId: r } = e.getPropagationContext();
  return jd(t, r, n);
}
function Fh(e) {
  let { traceId: t, sampled: n, propagationSpanId: r } = e.getPropagationContext();
  return Md(t, r, n);
}
function Ih(e, t, n) {
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
var Lh = 100;
function Rh(e, t) {
  let n = H(),
    r = V();
  if (!n) return;
  let { beforeBreadcrumb: i = null, maxBreadcrumbs: a = Lh } = n.getOptions();
  if (a <= 0) return;
  let o = { timestamp: vu(), ...e },
    s = i ? Xc(() => i(o, t)) : o;
  s !== null && (n.emit && n.emit(`beforeAddBreadcrumb`, s, t), r.addBreadcrumb(s, a));
}
var zh,
  Bh = `FunctionToString`,
  Vh = new WeakMap(),
  Hh = W(() => ({
    name: Bh,
    setupOnce() {
      zh = Function.prototype.toString;
      try {
        Function.prototype.toString = function (...e) {
          let t = Jl(this),
            n = Vh.has(H()) && t !== void 0 ? t : this;
          return zh.apply(n, e);
        };
      } catch {}
    },
    setup(e) {
      Vh.set(e, !0);
    },
  })),
  Uh = [
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
  Wh = `EventFilters`,
  Gh = W((e = {}) => {
    let t;
    return {
      name: Wh,
      setup(n) {
        t = Kh(e, n.getOptions());
      },
      processEvent(n, r, i) {
        return ((t ||= Kh(e, i.getOptions())), qh(n, t) ? null : n);
      },
    };
  });
function Kh(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : Uh),
    ],
    ignoreTransactions: [...(e.ignoreTransactions || []), ...(t.ignoreTransactions || [])],
  };
}
function qh(e, t) {
  if (!e.type) {
    if (Jh(e, t.ignoreErrors))
      return (
        L && z.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${lu(e)}`),
        !0
      );
    if (eg(e))
      return (
        L &&
          z.warn(
            `Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${lu(e)}`,
          ),
        !0
      );
    if (Xh(e, t.denyUrls))
      return (
        L &&
          z.warn(
            `Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${lu(e)}.\nUrl: ${$h(e)}`,
          ),
        !0
      );
    if (!Zh(e, t.allowUrls))
      return (
        L &&
          z.warn(
            `Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${lu(e)}.\nUrl: ${$h(e)}`,
          ),
        !0
      );
  } else if (e.type === `transaction` && Yh(e, t.ignoreTransactions))
    return (
      L && z.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${lu(e)}`),
      !0
    );
  return !1;
}
function Jh(e, t) {
  return t?.length ? zm(e).some((e) => ru(e, t)) : !1;
}
function Yh(e, t) {
  if (!t?.length) return !1;
  let n = e.transaction;
  return n ? ru(n, t) : !1;
}
function Xh(e, t) {
  if (!t?.length) return !1;
  let n = $h(e);
  return n ? ru(n, t) : !1;
}
function Zh(e, t) {
  if (!t?.length) return !0;
  let n = $h(e);
  return !n || ru(n, t);
}
function Qh(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n && n.filename !== `<anonymous>` && n.filename !== `[native code]`) return n.filename || null;
  }
  return null;
}
function $h(e) {
  try {
    let t = [...(e.exception?.values ?? [])]
      .reverse()
      .find((e) => e.mechanism?.parent_id === void 0 && e.stacktrace?.frames?.length)?.stacktrace?.frames;
    return t ? Qh(t) : null;
  } catch {
    return (L && z.error(`Cannot extract url for event ${lu(e)}`), null);
  }
}
function eg(e) {
  return e.exception?.values?.length
    ? !e.message && !e.exception.values.some((e) => e.stacktrace || (e.type && e.type !== `Error`) || e.value)
    : !1;
}
function tg(e, t, n, r, i, a) {
  if (!i.exception?.values || !a || !zl(a.originalException, Error)) return;
  let o = i.exception.values.length > 0 ? i.exception.values[i.exception.values.length - 1] : void 0;
  o && (i.exception.values = ng(e, t, r, a.originalException, n, i.exception.values, o, 0));
}
function ng(e, t, n, r, i, a, o, s) {
  if (a.length >= n + 1) return a;
  let c = [...a];
  if (zl(r[i], Error)) {
    rg(o, s);
    let a = e(t, r[i]),
      l = c.length;
    (ig(a, i, l, s), (c = ng(e, t, n, r[i], i, [a, ...c], a, l)));
  }
  return (
    Array.isArray(r.errors) &&
      r.errors.forEach((r, a) => {
        if (zl(r, Error)) {
          rg(o, s);
          let l = e(t, r),
            u = c.length;
          (ig(l, `errors[${a}]`, u, s), (c = ng(e, t, n, r, i, [l, ...c], l, u)));
        }
      }),
    c
  );
}
function rg(e, t) {
  e.mechanism = {
    handled: !0,
    type: `auto.core.linked_errors`,
    ...e.mechanism,
    ...(e.type === `AggregateError` && { is_exception_group: !0 }),
    exception_id: t,
  };
}
function ig(e, t, n, r) {
  e.mechanism = { handled: !0, ...e.mechanism, type: `chained`, source: t, exception_id: n, parent_id: r };
}
var ag = `cause`,
  og = 5,
  sg = `LinkedErrors`,
  cg = W((e = {}) => {
    let t = e.limit || og,
      n = e.key || ag;
    return {
      name: sg,
      preprocessEvent(e, r, i) {
        tg(fh, i.getOptions().stackParser, n, t, e, r);
      },
    };
  });
function lg(e) {
  let t = `console`;
  (_l(t, e), vl(t, ug));
}
function ug() {
  `console` in R &&
    qc.forEach(function (e) {
      e in R.console &&
        Gl(R.console, e, function (t) {
          return (
            (Yc[e] = t),
            function (...t) {
              (yl(`console`, { args: t, level: e }), Yc[e]?.apply(R.console, t));
            }
          );
        });
    });
}
function dg(e) {
  return e === `warn`
    ? `warning`
    : [`fatal`, `error`, `warning`, `log`, `info`, `debug`].includes(e)
      ? e
      : `log`;
}
function fg(e, t) {
  let n = 0;
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    r === `.` ? e.splice(t, 1) : r === `..` ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), n--);
  }
  if (t) for (; n--;) e.unshift(`..`);
  return e;
}
var pg = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
function mg(e) {
  let t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e,
    n = pg.exec(t);
  return n ? n.slice(1) : [];
}
function hg(...e) {
  let t = ``,
    n = !1;
  for (let r = e.length - 1; r >= -1 && !n; r--) {
    let i = r >= 0 ? e[r] : `/`;
    i && ((t = `${i}/${t}`), (n = i.charAt(0) === `/`));
  }
  return (
    (t = fg(
      t.split(`/`).filter((e) => !!e),
      !n,
    ).join(`/`)),
    (n ? `/` : ``) + t || `.`
  );
}
function gg(e) {
  let t = 0;
  for (; t < e.length && e[t] === ``; t++);
  let n = e.length - 1;
  for (; n >= 0 && e[n] === ``; n--);
  return t > n ? [] : e.slice(t, n - t + 1);
}
function _g(e, t) {
  ((e = hg(e).slice(1)), (t = hg(t).slice(1)));
  let n = gg(e.split(`/`)),
    r = gg(t.split(`/`)),
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
function vg(e) {
  let t = mg(e),
    n = t[0] || ``,
    r = t[1];
  return !n && !r ? `.` : ((r &&= r.slice(0, r.length - 1)), n + r);
}
function yg(e, t) {
  let n = mg(e)[2] || ``;
  return (t && n.slice(t.length * -1) === t && (n = n.slice(0, n.length - t.length)), n);
}
var bg = `RewriteFrames`,
  xg = W((e = {}) => {
    let t = e.root,
      n = e.prefix || `app:///`,
      r = `window` in R && !!R.window,
      i = e.iteratee || Sg({ isBrowser: r, root: t, prefix: n });
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
      name: bg,
      processEvent(e) {
        let t = e;
        return (e.exception && Array.isArray(e.exception.values) && (t = a(t)), t);
      },
    };
  });
function Sg({ isBrowser: e, root: t, prefix: n }) {
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
      r.filename = `${n}${t ? _g(t, e) : yg(e)}`;
    }
    return r;
  };
}
var Cg = `Console`,
  wg = W((e = {}) => {
    let t = new Set(e.levels || qc);
    return {
      name: Cg,
      setup(e) {
        lg(({ args: n, level: r }) => {
          H() === e && t.has(r) && Tg(r, n);
        });
      },
    };
  });
function Tg(e, t) {
  let n = { category: `console`, data: { arguments: t, logger: `console` }, level: dg(e), message: Eg(t) };
  if (e === `assert`) {
    if (t[0] === !1) {
      let e = t.slice(1);
      ((n.message = e.length > 0 ? `Assertion failed: ${Eg(e)}` : `Assertion failed`),
        (n.data.arguments = e));
    } else return;
  }
  Rh(n, { input: t, level: e });
}
function Eg(e) {
  return `util` in R && typeof R.util.format == `function` ? R.util.format(...e) : tu(e, ` `);
}
function Dg(e) {
  if (e !== void 0) {
    if (e >= 400 && e < 500) return `warning`;
    if (e >= 500) return `error`;
  }
}
function Og(e, t = !1) {
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
function kg(e) {
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
          lineno: jg(o[3]),
          colno: jg(o[4]),
          in_app: Og(s || ``, c),
        }
      );
    }
    if (i.match(t)) return { filename: i };
  };
}
function Ag(e) {
  return [90, kg(e)];
}
function jg(e) {
  return parseInt(e || ``, 10) || void 0;
}
function Mg(e, t, n) {
  let r = t ? t.replace(/^file:\/\//, ``) : void 0,
    i = e.location.columnNumber ? e.location.columnNumber + 1 : void 0,
    a = e.location.lineNumber ? e.location.lineNumber + 1 : void 0;
  return {
    filename: r,
    module: n(r),
    function: e.functionName || `?`,
    colno: i,
    lineno: a,
    in_app: r ? Og(r) : void 0,
  };
}
var Ng = class {
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
function Pg(e, ...t) {
  let [n, r, i, a] = t;
  if (Array.isArray(r)) {
    let t = { ...i };
    ((t[`sentry.message.template`] = n),
      r.forEach((e, n) => {
        t[`sentry.message.parameter.${n}`] = e;
      }),
      vm({ level: e, message: (0, m.format)(n, ...r), attributes: t }, a?.scope));
  } else vm({ level: e, message: n, attributes: r }, i?.scope ?? a?.scope);
}
function Fg(...e) {
  Pg(`info`, ...e);
}
function Ig(...e) {
  Pg(`warn`, ...e);
}
function Lg(...e) {
  Pg(`error`, ...e);
}
var Rg = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e._globalThis = void 0),
      (e._globalThis = typeof globalThis == `object` ? globalThis : global));
  }),
  zg = e.t((e) => {
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
    (Object.defineProperty(e, "__esModule", { value: !0 }), n(Rg(), e));
  }),
  Bg = e.t((e) => {
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
    (Object.defineProperty(e, "__esModule", { value: !0 }), n(zg(), e));
  }),
  Vg = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.VERSION = void 0), (e.VERSION = `1.9.0`));
  }),
  Hg = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.isCompatible = e._makeCompatibilityCheck = void 0));
    var t = Vg(),
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
  Ug = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.unregisterGlobal = e.getGlobal = e.registerGlobal = void 0));
    var t = Bg(),
      n = Vg(),
      r = Hg(),
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
  Wg = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.DiagComponentLogger = void 0));
    var t = Ug();
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
  Gg = e.t((e) => {
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
  Kg = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.createLogLevelDiagLogger = void 0));
    var t = Gg();
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
  qg = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.DiagAPI = void 0));
    var t = Wg(),
      n = Kg(),
      r = Gg(),
      i = Ug(),
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
  Jg = e.t((e) => {
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
  Yg = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.baggageEntryMetadataSymbol = void 0),
      (e.baggageEntryMetadataSymbol = Symbol(`BaggageEntryMetadata`)));
  }),
  Xg = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.baggageEntryMetadataFromString = e.createBaggage = void 0));
    var t = qg(),
      n = Jg(),
      r = Yg(),
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
  Zg = e.t((e) => {
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
  Qg = e.t((e) => {
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
  $g = e.t((e) => {
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
  e_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ValueType = void 0),
      (function (e) {
        ((e[(e.INT = 0)] = `INT`), (e[(e.DOUBLE = 1)] = `DOUBLE`));
      })((e.ValueType ||= {})));
  }),
  t_ = e.t((e) => {
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
  n_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.NoopContextManager = void 0));
    var t = Zg();
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
  r_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ContextAPI = void 0));
    var t = n_(),
      n = Ug(),
      r = qg(),
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
  i_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.TraceFlags = void 0),
      (function (e) {
        ((e[(e.NONE = 0)] = `NONE`), (e[(e.SAMPLED = 1)] = `SAMPLED`));
      })((e.TraceFlags ||= {})));
  }),
  a_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = void 0));
    var t = i_();
    ((e.INVALID_SPANID = `0000000000000000`),
      (e.INVALID_TRACEID = `00000000000000000000000000000000`),
      (e.INVALID_SPAN_CONTEXT = {
        traceId: e.INVALID_TRACEID,
        spanId: e.INVALID_SPANID,
        traceFlags: t.TraceFlags.NONE,
      }));
  }),
  o_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.NonRecordingSpan = void 0));
    var t = a_();
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
  s_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getSpanContext =
        e.setSpanContext =
        e.deleteSpan =
        e.setSpan =
        e.getActiveSpan =
        e.getSpan =
          void 0));
    var t = Zg(),
      n = o_(),
      r = r_(),
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
  c_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.wrapSpanContext = e.isSpanContextValid = e.isValidSpanId = e.isValidTraceId = void 0));
    var t = a_(),
      n = o_(),
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
  l_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.NoopTracer = void 0));
    var t = r_(),
      n = s_(),
      r = o_(),
      i = c_(),
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
  u_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ProxyTracer = void 0));
    var t = new (l_().NoopTracer)();
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
  d_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.NoopTracerProvider = void 0));
    var t = l_();
    e.NoopTracerProvider = class {
      getTracer(e, n, r) {
        return new t.NoopTracer();
      }
    };
  }),
  f_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ProxyTracerProvider = void 0));
    var t = u_(),
      n = new (d_().NoopTracerProvider)();
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
  p_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SamplingDecision = void 0),
      (function (e) {
        ((e[(e.NOT_RECORD = 0)] = `NOT_RECORD`),
          (e[(e.RECORD = 1)] = `RECORD`),
          (e[(e.RECORD_AND_SAMPLED = 2)] = `RECORD_AND_SAMPLED`));
      })((e.SamplingDecision ||= {})));
  }),
  m_ = e.t((e) => {
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
  h_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SpanStatusCode = void 0),
      (function (e) {
        ((e[(e.UNSET = 0)] = `UNSET`), (e[(e.OK = 1)] = `OK`), (e[(e.ERROR = 2)] = `ERROR`));
      })((e.SpanStatusCode ||= {})));
  }),
  g_ = e.t((e) => {
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
  __ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.TraceStateImpl = void 0));
    var t = g_(),
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
  v_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.createTraceState = void 0));
    var t = __();
    function n(e) {
      return new t.TraceStateImpl(e);
    }
    e.createTraceState = n;
  }),
  y_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.context = void 0),
      (e.context = r_().ContextAPI.getInstance()));
  }),
  b_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.diag = void 0),
      (e.diag = qg().DiagAPI.instance()));
  }),
  x_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.NOOP_METER_PROVIDER = e.NoopMeterProvider = void 0));
    var t = $g(),
      n = class {
        getMeter(e, n, r) {
          return t.NOOP_METER;
        }
      };
    ((e.NoopMeterProvider = n), (e.NOOP_METER_PROVIDER = new n()));
  }),
  S_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.MetricsAPI = void 0));
    var t = x_(),
      n = Ug(),
      r = qg(),
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
  C_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.metrics = void 0),
      (e.metrics = S_().MetricsAPI.getInstance()));
  }),
  w_ = e.t((e) => {
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
  T_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.deleteBaggage = e.setBaggage = e.getActiveBaggage = e.getBaggage = void 0));
    var t = r_(),
      n = (0, Zg().createContextKey)(`OpenTelemetry Baggage Key`);
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
  E_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.PropagationAPI = void 0));
    var t = Ug(),
      n = w_(),
      r = t_(),
      i = T_(),
      a = Xg(),
      o = qg(),
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
  D_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.propagation = void 0),
      (e.propagation = E_().PropagationAPI.getInstance()));
  }),
  O_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.TraceAPI = void 0));
    var t = Ug(),
      n = f_(),
      r = c_(),
      i = s_(),
      a = qg(),
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
  k_ = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.trace = void 0),
      (e.trace = O_().TraceAPI.getInstance()));
  }),
  A_ = e.t((e) => {
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
    var t = Xg();
    Object.defineProperty(e, "baggageEntryMetadataFromString", {
      enumerable: !0,
      get: function () {
        return t.baggageEntryMetadataFromString;
      },
    });
    var n = Zg();
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
    var r = Qg();
    Object.defineProperty(e, "DiagConsoleLogger", {
      enumerable: !0,
      get: function () {
        return r.DiagConsoleLogger;
      },
    });
    var i = Gg();
    Object.defineProperty(e, "DiagLogLevel", {
      enumerable: !0,
      get: function () {
        return i.DiagLogLevel;
      },
    });
    var a = $g();
    Object.defineProperty(e, "createNoopMeter", {
      enumerable: !0,
      get: function () {
        return a.createNoopMeter;
      },
    });
    var o = e_();
    Object.defineProperty(e, "ValueType", {
      enumerable: !0,
      get: function () {
        return o.ValueType;
      },
    });
    var s = t_();
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
    var c = u_();
    Object.defineProperty(e, "ProxyTracer", {
      enumerable: !0,
      get: function () {
        return c.ProxyTracer;
      },
    });
    var l = f_();
    Object.defineProperty(e, "ProxyTracerProvider", {
      enumerable: !0,
      get: function () {
        return l.ProxyTracerProvider;
      },
    });
    var u = p_();
    Object.defineProperty(e, "SamplingDecision", {
      enumerable: !0,
      get: function () {
        return u.SamplingDecision;
      },
    });
    var d = m_();
    Object.defineProperty(e, "SpanKind", {
      enumerable: !0,
      get: function () {
        return d.SpanKind;
      },
    });
    var f = h_();
    Object.defineProperty(e, "SpanStatusCode", {
      enumerable: !0,
      get: function () {
        return f.SpanStatusCode;
      },
    });
    var p = i_();
    Object.defineProperty(e, "TraceFlags", {
      enumerable: !0,
      get: function () {
        return p.TraceFlags;
      },
    });
    var m = v_();
    Object.defineProperty(e, "createTraceState", {
      enumerable: !0,
      get: function () {
        return m.createTraceState;
      },
    });
    var h = c_();
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
    var g = a_();
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
    var _ = y_();
    Object.defineProperty(e, "context", {
      enumerable: !0,
      get: function () {
        return _.context;
      },
    });
    var v = b_();
    Object.defineProperty(e, "diag", {
      enumerable: !0,
      get: function () {
        return v.diag;
      },
    });
    var y = C_();
    Object.defineProperty(e, "metrics", {
      enumerable: !0,
      get: function () {
        return y.metrics;
      },
    });
    var b = D_();
    Object.defineProperty(e, "propagation", {
      enumerable: !0,
      get: function () {
        return b.propagation;
      },
    });
    var x = k_();
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
function j_(e, t, n, r) {
  for (let i = 0, a = e.length; i < a; i++) {
    let a = e[i];
    (t && a.setTracerProvider(t),
      n && a.setMeterProvider(n),
      r && a.setLoggerProvider && a.setLoggerProvider(r),
      a.getConfig().enabled || a.enable());
  }
}
function M_(e) {
  e.forEach((e) => e.disable());
}
var G = e.a(A_());
ss();
function N_(e) {
  let t = e.tracerProvider || G.trace.getTracerProvider(),
    n = e.meterProvider || G.metrics.getMeterProvider(),
    r = e.loggerProvider || os.getLoggerProvider(),
    i = e.instrumentations?.flat() ?? [];
  return (
    j_(i, t, n, r),
    () => {
      M_(i);
    }
  );
}
var P_ =
    /^(?:v)?(?<version>(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*))(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<build>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
  F_ =
    /^(?<op><|>|=|==|<=|>=|~|\^|~>)?\s*(?:v)?(?<version>(?<major>x|X|\*|0|[1-9]\d*)(?:\.(?<minor>x|X|\*|0|[1-9]\d*))?(?:\.(?<patch>x|X|\*|0|[1-9]\d*))?)(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<build>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
  I_ = { ">": [1], ">=": [0, 1], "=": [0], "<=": [-1, 0], "<": [-1], "!=": [-1, 1] };
function L_(e, t, n) {
  if (!R_(e)) return (G.diag.error(`Invalid version: ${e}`), !1);
  if (!t) return !0;
  t = t.replace(/([<>=~^]+)\s+/g, `$1`);
  let r = W_(e);
  if (!r) return !1;
  let i = [],
    a = z_(r, t, i, n);
  return a && !n?.includePrerelease ? H_(r, i) : a;
}
function R_(e) {
  return typeof e == `string` && P_.test(e);
}
function z_(e, t, n, r) {
  if (t.includes(`||`)) {
    let i = t.trim().split(`||`);
    for (let t of i) if (B_(e, t, n, r)) return !0;
    return !1;
  }
  if (t.includes(` - `)) t = vv(t, r);
  else if (t.includes(` `)) {
    let i = t
      .trim()
      .replace(/\s{2,}/g, ` `)
      .split(` `);
    for (let t of i) if (!B_(e, t, n, r)) return !1;
    return !0;
  }
  return B_(e, t, n, r);
}
function B_(e, t, n, r) {
  if (((t = U_(t, r)), t.includes(` `))) return z_(e, t, n, r);
  {
    let r = G_(t);
    return (n.push(r), V_(e, r));
  }
}
function V_(e, t) {
  if (t.invalid) return !1;
  if (!t.version || K_(t.version)) return !0;
  let n = X_(e.versionSegments || [], t.versionSegments || []);
  if (n === 0) {
    let r = e.prereleaseSegments || [],
      i = t.prereleaseSegments || [];
    n = !r.length && !i.length ? 0 : !r.length && i.length ? 1 : r.length && !i.length ? -1 : X_(r, i);
  }
  return I_[t.op]?.includes(n);
}
function H_(e, t) {
  return !e.prerelease || t.some((t) => t.prerelease && t.version === e.version);
}
function U_(e, t) {
  return ((e = e.trim()), (e = gv(e, t)), (e = hv(e)), (e = _v(e, t)), (e = e.trim()), e);
}
function K(e) {
  return !e || e.toLowerCase() === `x` || e === `*`;
}
function W_(e) {
  let t = e.match(P_);
  if (!t) {
    G.diag.error(`Invalid version: ${e}`);
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
function G_(e) {
  if (!e) return {};
  let t = e.match(F_);
  if (!t) return (G.diag.error(`Invalid range: ${e}`), { invalid: !0 });
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
function K_(e) {
  return e === `*` || e === `x` || e === `X`;
}
function q_(e) {
  let t = parseInt(e, 10);
  return isNaN(t) ? e : t;
}
function J_(e, t) {
  if (typeof e == typeof t) {
    if (typeof e == `number` || typeof e == `string`) return [e, t];
    throw Error(`Version segments can only be strings or numbers`);
  }
  return [String(e), String(t)];
}
function Y_(e, t) {
  if (K_(e) || K_(t)) return 0;
  let [n, r] = J_(q_(e), q_(t));
  return n > r ? 1 : n < r ? -1 : 0;
}
function X_(e, t) {
  for (let n = 0; n < Math.max(e.length, t.length); n++) {
    let r = Y_(e[n] || `0`, t[n] || `0`);
    if (r !== 0) return r;
  }
  return 0;
}
var Z_ = `[a-zA-Z0-9-]`,
  Q_ = `0|[1-9]\\d*`,
  $_ = `\\d*[a-zA-Z-]${Z_}*`,
  ev = `((?:<|>)?=?)`,
  tv = `(?:${Q_}|${$_})`,
  nv = `(?:-(${tv}(?:\\.${tv})*))`,
  rv = `${Z_}+`,
  iv = `(?:\\+(${rv}(?:\\.${rv})*))`,
  av = `${Q_}|x|X|\\*`,
  ov = `[v=\\s]*(${av})(?:\\.(${av})(?:\\.(${av})(?:${nv})?${iv}?)?)?`,
  sv = `^${ev}\\s*${ov}$`,
  cv = new RegExp(sv),
  lv = `^\\s*(${ov})\\s+-\\s+(${ov})\\s*$`,
  uv = new RegExp(lv),
  dv = `^(?:~>?)${ov}$`,
  fv = new RegExp(dv),
  pv = `^(?:\\^)${ov}$`,
  mv = new RegExp(pv);
function hv(e) {
  let t = fv;
  return e.replace(t, (e, t, n, r, i) => {
    let a;
    return (
      (a = K(t)
        ? ``
        : K(n)
          ? `>=${t}.0.0 <${+t + 1}.0.0-0`
          : K(r)
            ? `>=${t}.${n}.0 <${t}.${+n + 1}.0-0`
            : i
              ? `>=${t}.${n}.${r}-${i} <${t}.${+n + 1}.0-0`
              : `>=${t}.${n}.${r} <${t}.${+n + 1}.0-0`),
      a
    );
  });
}
function gv(e, t) {
  let n = mv,
    r = t?.includePrerelease ? `-0` : ``;
  return e.replace(n, (e, t, n, i, a) => {
    let o;
    return (
      (o = K(t)
        ? ``
        : K(n)
          ? `>=${t}.0.0${r} <${+t + 1}.0.0-0`
          : K(i)
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
function _v(e, t) {
  let n = cv;
  return e.replace(n, (e, n, r, i, a, o) => {
    let s = K(r),
      c = s || K(i),
      l = c || K(a),
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
function vv(e, t) {
  let n = uv;
  return e.replace(
    n,
    (e, n, r, i, a, o, s, c, l, u, d, f) => (
      (n = K(r)
        ? ``
        : K(i)
          ? `>=${r}.0.0${t?.includePrerelease ? `-0` : ``}`
          : K(a)
            ? `>=${r}.${i}.0${t?.includePrerelease ? `-0` : ``}`
            : o
              ? `>=${n}`
              : `>=${n}${t?.includePrerelease ? `-0` : ``}`),
      (c = K(l)
        ? ``
        : K(u)
          ? `<${+l + 1}.0.0-0`
          : K(d)
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
var yv = console.error.bind(console);
function bv(e, t, n) {
  let r = !!e[t] && Object.prototype.propertyIsEnumerable.call(e, t);
  Object.defineProperty(e, t, { configurable: !0, enumerable: r, writable: !0, value: n });
}
var xv = (e, t, n) => {
    if (!e || !e[t]) {
      yv(`no original function ` + String(t) + ` to wrap`);
      return;
    }
    if (!n) {
      (yv(`no wrapper function`), yv(Error().stack));
      return;
    }
    let r = e[t];
    if (typeof r != `function` || typeof n != `function`) {
      yv(`original object and wrapper must be functions`);
      return;
    }
    let i = n(r, t);
    return (
      bv(i, `__original`, r),
      bv(i, `__unwrap`, () => {
        e[t] === i && bv(e, t, r);
      }),
      bv(i, `__wrapped`, !0),
      bv(e, t, i),
      i
    );
  },
  Sv = (e, t, n) => {
    if (e) Array.isArray(e) || (e = [e]);
    else {
      (yv(`must provide one or more modules to patch`), yv(Error().stack));
      return;
    }
    if (!(t && Array.isArray(t))) {
      yv(`must provide one or more functions to wrap on modules`);
      return;
    }
    e.forEach((e) => {
      t.forEach((t) => {
        xv(e, t, n);
      });
    });
  },
  Cv = (e, t) => {
    if (!e || !e[t]) {
      (yv(`no function to unwrap.`), yv(Error().stack));
      return;
    }
    let n = e[t];
    if (!n.__unwrap) yv(`no original to unwrap to -- has ` + String(t) + ` already been unwrapped?`);
    else {
      n.__unwrap();
      return;
    }
  },
  wv = (e, t) => {
    if (e) Array.isArray(e) || (e = [e]);
    else {
      (yv(`must provide one or more modules to patch`), yv(Error().stack));
      return;
    }
    if (!(t && Array.isArray(t))) {
      yv(`must provide one or more functions to unwrap on modules`);
      return;
    }
    e.forEach((e) => {
      t.forEach((t) => {
        Cv(e, t);
      });
    });
  };
ss();
var Tv = class {
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
        (this._diag = G.diag.createComponentLogger({ namespace: e })),
        (this._tracer = G.trace.getTracer(e, t)),
        (this._meter = G.metrics.getMeter(e, t)),
        (this._logger = os.getLogger(e, t)),
        this._updateMetricInstruments());
    }
    _wrap = xv;
    _unwrap = Cv;
    _massWrap = Sv;
    _massUnwrap = wv;
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
  },
  Ev = class {
    hooks = [];
    children = new Map();
  },
  Dv = class {
    _trie = new Ev();
    _counter = 0;
    insert(e) {
      let t = this._trie;
      for (let n of e.moduleName.split(`/`)) {
        let e = t.children.get(n);
        (e || ((e = new Ev()), t.children.set(n, e)), (t = e));
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
  },
  Ov = dc(),
  kv = [`afterEach`, `after`, `beforeEach`, `before`, `describe`, `it`].every(
    (e) => typeof global[e] == `function`,
  ),
  Av = class e {
    _moduleNameTrie = new Dv();
    static _instance;
    constructor() {
      this._initialize();
    }
    _initialize() {
      new Ov.Hook(null, { internals: !0 }, (e, t, n) => {
        let r = jv(t),
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
      return kv ? new e() : (this._instance = this._instance ?? new e());
    }
  };
function jv(e) {
  return p.sep === `/` ? e : e.split(p.sep).join(`/`);
}
function Mv(e) {
  return (
    typeof e == `function` &&
    typeof e.__original == `function` &&
    typeof e.__unwrap == `function` &&
    e.__wrapped === !0
  );
}
var Nv = xc(),
  Pv = class extends Tv {
    _modules;
    _hooks = [];
    _requireInTheMiddleSingleton = Av.getInstance();
    _enabled = !1;
    constructor(e, t, n) {
      super(e, t, n);
      let r = this.init();
      (r && !Array.isArray(r) && (r = [r]), (this._modules = r || []), this._config.enabled && this.enable());
    }
    _wrap = (e, t, n) => {
      if ((Mv(e[t]) && this._unwrap(e, t), T.types.isProxy(e))) {
        let r = xv(Object.assign({}, e), t, n);
        return (Object.defineProperty(e, t, { value: r }), r);
      }
      return xv(e, t, n);
    };
    _unwrap = (e, t) => (T.types.isProxy(e) ? Object.defineProperty(e, t, { value: e[t] }) : Cv(e, t));
    _massWrap = (e, t, n) => {
      if (e) Array.isArray(e) || (e = [e]);
      else {
        G.diag.error(`must provide one or more modules to patch`);
        return;
      }
      if (!(t && Array.isArray(t))) {
        G.diag.error(`must provide one or more functions to wrap on modules`);
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
        G.diag.error(`must provide one or more modules to patch`);
        return;
      }
      if (!(t && Array.isArray(t))) {
        G.diag.error(`must provide one or more functions to wrap on modules`);
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
        G.diag.warn(`Failed extracting version`, e);
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
        return Fv(e.supportedVersions, i, e.includePrerelease) &&
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
        .filter((t) => Fv(t.supportedVersions, i, e.includePrerelease))
        .reduce(
          (t, n) => (
            (n.moduleExports = t),
            this._enabled
              ? (this._diag.debug(`Applying instrumentation patch for nodejs module file on require hook`, {
                  module: e.name,
                  version: e.moduleVersion,
                  fileName: n.name,
                  baseDir: r,
                }),
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
              ? new Ov.Hook([e.name], { internals: !0 }, n)
              : this._requireInTheMiddleSingleton.register(e.name, n);
          this._hooks.push(r);
          let i = new Nv.Hook([e.name], { internals: !1 }, t);
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
  };
function Fv(e, t, n) {
  return t === void 0 ? e.includes(`*`) : e.some((e) => L_(t, e, { includePrerelease: n }));
}
var Iv = {};
function Lv(e, t, n) {
  return n ? zv(e, t, n) : Rv(e, t);
}
function Rv(e, t) {
  return Object.assign(
    (n) => {
      let r = Iv[e];
      if (r) return (n && r.setConfig(n), r);
      let i = t(n);
      return ((Iv[e] = i), N_({ instrumentations: [i] }), i);
    },
    { id: e },
  );
}
function zv(e, t, n) {
  return Object.assign(
    (r) => {
      let i = n(r),
        a = Iv[e];
      if (a) return (a.setConfig(i), a);
      let o = new t(i);
      return ((Iv[e] = o), N_({ instrumentations: [o] }), o);
    },
    { id: e },
  );
}
var Bv = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__,
  Vv = e.t((e) => {
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
  Hv = e.t((e) => {
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
    var t = Vv(),
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
      ne = `faas.document.operation`,
      re = `faas.document.time`,
      ie = `faas.document.name`,
      O = `faas.time`,
      k = `faas.cron`,
      ae = `faas.coldstart`,
      oe = `faas.invoked_name`,
      se = `faas.invoked_provider`,
      ce = `faas.invoked_region`,
      le = `net.transport`,
      ue = `net.peer.ip`,
      de = `net.peer.port`,
      fe = `net.peer.name`,
      pe = `net.host.ip`,
      me = `net.host.port`,
      he = `net.host.name`,
      ge = `net.host.connection.type`,
      _e = `net.host.connection.subtype`,
      ve = `net.host.carrier.name`,
      ye = `net.host.carrier.mcc`,
      A = `net.host.carrier.mnc`,
      be = `net.host.carrier.icc`,
      xe = `peer.service`,
      Se = `enduser.id`,
      Ce = `enduser.role`,
      we = `enduser.scope`,
      Te = `thread.id`,
      Ee = `thread.name`,
      De = `code.function`,
      Oe = `code.namespace`,
      ke = `code.filepath`,
      Ae = `code.lineno`,
      je = `http.method`,
      Me = `http.url`,
      Ne = `http.target`,
      Pe = `http.host`,
      Fe = `http.scheme`,
      Ie = `http.status_code`,
      Le = `http.flavor`,
      Re = `http.user_agent`,
      ze = `http.request_content_length`,
      j = `http.request_content_length_uncompressed`,
      Be = `http.response_content_length`,
      Ve = `http.response_content_length_uncompressed`,
      He = `http.server_name`,
      Ue = `http.route`,
      We = `http.client_ip`,
      Ge = `aws.dynamodb.table_names`,
      Ke = `aws.dynamodb.consumed_capacity`,
      qe = `aws.dynamodb.item_collection_metrics`,
      Je = `aws.dynamodb.provisioned_read_capacity`,
      Ye = `aws.dynamodb.provisioned_write_capacity`,
      Xe = `aws.dynamodb.consistent_read`,
      Ze = `aws.dynamodb.projection`,
      Qe = `aws.dynamodb.limit`,
      $e = `aws.dynamodb.attributes_to_get`,
      et = `aws.dynamodb.index_name`,
      M = `aws.dynamodb.select`,
      tt = `aws.dynamodb.global_secondary_indexes`,
      nt = `aws.dynamodb.local_secondary_indexes`,
      rt = `aws.dynamodb.exclusive_start_table`,
      it = `aws.dynamodb.table_count`,
      at = `aws.dynamodb.scan_forward`,
      ot = `aws.dynamodb.segment`,
      st = `aws.dynamodb.total_segments`,
      ct = `aws.dynamodb.count`,
      lt = `aws.dynamodb.scanned_count`,
      ut = `aws.dynamodb.attribute_definitions`,
      dt = `aws.dynamodb.global_secondary_index_updates`,
      ft = `messaging.system`,
      pt = `messaging.destination`,
      mt = `messaging.destination_kind`,
      ht = `messaging.temp_destination`,
      gt = `messaging.protocol`,
      _t = `messaging.protocol_version`,
      vt = `messaging.url`,
      yt = `messaging.message_id`,
      bt = `messaging.conversation_id`,
      xt = `messaging.message_payload_size_bytes`,
      St = `messaging.message_payload_compressed_size_bytes`,
      Ct = `messaging.operation`,
      wt = `messaging.consumer_id`,
      Tt = `messaging.rabbitmq.routing_key`,
      Et = `messaging.kafka.message_key`,
      Dt = `messaging.kafka.consumer_group`,
      Ot = `messaging.kafka.client_id`,
      kt = `messaging.kafka.partition`,
      At = `messaging.kafka.tombstone`,
      jt = `rpc.system`,
      Mt = `rpc.service`,
      Nt = `rpc.method`,
      Pt = `rpc.grpc.status_code`,
      Ft = `rpc.jsonrpc.version`,
      It = `rpc.jsonrpc.request_id`,
      Lt = `rpc.jsonrpc.error_code`,
      Rt = `rpc.jsonrpc.error_message`,
      zt = `message.type`,
      Bt = `message.id`,
      Vt = `message.compressed_size`,
      Ht = `message.uncompressed_size`;
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
      (e.SEMATTRS_FAAS_DOCUMENT_OPERATION = ne),
      (e.SEMATTRS_FAAS_DOCUMENT_TIME = re),
      (e.SEMATTRS_FAAS_DOCUMENT_NAME = ie),
      (e.SEMATTRS_FAAS_TIME = O),
      (e.SEMATTRS_FAAS_CRON = k),
      (e.SEMATTRS_FAAS_COLDSTART = ae),
      (e.SEMATTRS_FAAS_INVOKED_NAME = oe),
      (e.SEMATTRS_FAAS_INVOKED_PROVIDER = se),
      (e.SEMATTRS_FAAS_INVOKED_REGION = ce),
      (e.SEMATTRS_NET_TRANSPORT = le),
      (e.SEMATTRS_NET_PEER_IP = ue),
      (e.SEMATTRS_NET_PEER_PORT = de),
      (e.SEMATTRS_NET_PEER_NAME = fe),
      (e.SEMATTRS_NET_HOST_IP = pe),
      (e.SEMATTRS_NET_HOST_PORT = me),
      (e.SEMATTRS_NET_HOST_NAME = he),
      (e.SEMATTRS_NET_HOST_CONNECTION_TYPE = ge),
      (e.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = _e),
      (e.SEMATTRS_NET_HOST_CARRIER_NAME = ve),
      (e.SEMATTRS_NET_HOST_CARRIER_MCC = ye),
      (e.SEMATTRS_NET_HOST_CARRIER_MNC = A),
      (e.SEMATTRS_NET_HOST_CARRIER_ICC = be),
      (e.SEMATTRS_PEER_SERVICE = xe),
      (e.SEMATTRS_ENDUSER_ID = Se),
      (e.SEMATTRS_ENDUSER_ROLE = Ce),
      (e.SEMATTRS_ENDUSER_SCOPE = we),
      (e.SEMATTRS_THREAD_ID = Te),
      (e.SEMATTRS_THREAD_NAME = Ee),
      (e.SEMATTRS_CODE_FUNCTION = De),
      (e.SEMATTRS_CODE_NAMESPACE = Oe),
      (e.SEMATTRS_CODE_FILEPATH = ke),
      (e.SEMATTRS_CODE_LINENO = Ae),
      (e.SEMATTRS_HTTP_METHOD = je),
      (e.SEMATTRS_HTTP_URL = Me),
      (e.SEMATTRS_HTTP_TARGET = Ne),
      (e.SEMATTRS_HTTP_HOST = Pe),
      (e.SEMATTRS_HTTP_SCHEME = Fe),
      (e.SEMATTRS_HTTP_STATUS_CODE = Ie),
      (e.SEMATTRS_HTTP_FLAVOR = Le),
      (e.SEMATTRS_HTTP_USER_AGENT = Re),
      (e.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = ze),
      (e.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = j),
      (e.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = Be),
      (e.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = Ve),
      (e.SEMATTRS_HTTP_SERVER_NAME = He),
      (e.SEMATTRS_HTTP_ROUTE = Ue),
      (e.SEMATTRS_HTTP_CLIENT_IP = We),
      (e.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = Ge),
      (e.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = Ke),
      (e.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = qe),
      (e.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = Je),
      (e.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = Ye),
      (e.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = Xe),
      (e.SEMATTRS_AWS_DYNAMODB_PROJECTION = Ze),
      (e.SEMATTRS_AWS_DYNAMODB_LIMIT = Qe),
      (e.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = $e),
      (e.SEMATTRS_AWS_DYNAMODB_INDEX_NAME = et),
      (e.SEMATTRS_AWS_DYNAMODB_SELECT = M),
      (e.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = tt),
      (e.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = nt),
      (e.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = rt),
      (e.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = it),
      (e.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = at),
      (e.SEMATTRS_AWS_DYNAMODB_SEGMENT = ot),
      (e.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = st),
      (e.SEMATTRS_AWS_DYNAMODB_COUNT = ct),
      (e.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = lt),
      (e.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = ut),
      (e.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = dt),
      (e.SEMATTRS_MESSAGING_SYSTEM = ft),
      (e.SEMATTRS_MESSAGING_DESTINATION = pt),
      (e.SEMATTRS_MESSAGING_DESTINATION_KIND = mt),
      (e.SEMATTRS_MESSAGING_TEMP_DESTINATION = ht),
      (e.SEMATTRS_MESSAGING_PROTOCOL = gt),
      (e.SEMATTRS_MESSAGING_PROTOCOL_VERSION = _t),
      (e.SEMATTRS_MESSAGING_URL = vt),
      (e.SEMATTRS_MESSAGING_MESSAGE_ID = yt),
      (e.SEMATTRS_MESSAGING_CONVERSATION_ID = bt),
      (e.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = xt),
      (e.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = St),
      (e.SEMATTRS_MESSAGING_OPERATION = Ct),
      (e.SEMATTRS_MESSAGING_CONSUMER_ID = wt),
      (e.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = Tt),
      (e.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = Et),
      (e.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = Dt),
      (e.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = Ot),
      (e.SEMATTRS_MESSAGING_KAFKA_PARTITION = kt),
      (e.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = At),
      (e.SEMATTRS_RPC_SYSTEM = jt),
      (e.SEMATTRS_RPC_SERVICE = Mt),
      (e.SEMATTRS_RPC_METHOD = Nt),
      (e.SEMATTRS_RPC_GRPC_STATUS_CODE = Pt),
      (e.SEMATTRS_RPC_JSONRPC_VERSION = Ft),
      (e.SEMATTRS_RPC_JSONRPC_REQUEST_ID = It),
      (e.SEMATTRS_RPC_JSONRPC_ERROR_CODE = Lt),
      (e.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = Rt),
      (e.SEMATTRS_MESSAGE_TYPE = zt),
      (e.SEMATTRS_MESSAGE_ID = Bt),
      (e.SEMATTRS_MESSAGE_COMPRESSED_SIZE = Vt),
      (e.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = Ht),
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
        ne,
        re,
        ie,
        O,
        k,
        ae,
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
        ve,
        ye,
        A,
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
        Re,
        ze,
        j,
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
        $e,
        et,
        M,
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
        Vt,
        Ht,
      ])));
    var Ut = `other_sql`,
      Wt = `mssql`,
      Gt = `mysql`,
      Kt = `oracle`,
      qt = `db2`,
      Jt = `postgresql`,
      Yt = `redshift`,
      Xt = `hive`,
      Zt = `cloudscape`,
      Qt = `hsqldb`,
      $t = `progress`,
      en = `maxdb`,
      tn = `hanadb`,
      nn = `ingres`,
      rn = `firstsql`,
      an = `edb`,
      on = `cache`,
      sn = `adabas`,
      cn = `firebird`,
      ln = `derby`,
      un = `filemaker`,
      dn = `informix`,
      fn = `instantdb`,
      pn = `interbase`,
      mn = `mariadb`,
      hn = `netezza`,
      gn = `pervasive`,
      _n = `pointbase`,
      vn = `sqlite`,
      yn = `sybase`,
      bn = `teradata`,
      xn = `vertica`,
      Sn = `h2`,
      Cn = `coldfusion`,
      wn = `cassandra`,
      Tn = `hbase`,
      En = `mongodb`,
      Dn = `redis`,
      On = `couchbase`,
      kn = `couchdb`,
      An = `cosmosdb`,
      jn = `dynamodb`,
      Mn = `neo4j`,
      Nn = `geode`,
      Pn = `elasticsearch`,
      Fn = `memcached`,
      In = `cockroachdb`;
    ((e.DBSYSTEMVALUES_OTHER_SQL = Ut),
      (e.DBSYSTEMVALUES_MSSQL = Wt),
      (e.DBSYSTEMVALUES_MYSQL = Gt),
      (e.DBSYSTEMVALUES_ORACLE = Kt),
      (e.DBSYSTEMVALUES_DB2 = qt),
      (e.DBSYSTEMVALUES_POSTGRESQL = Jt),
      (e.DBSYSTEMVALUES_REDSHIFT = Yt),
      (e.DBSYSTEMVALUES_HIVE = Xt),
      (e.DBSYSTEMVALUES_CLOUDSCAPE = Zt),
      (e.DBSYSTEMVALUES_HSQLDB = Qt),
      (e.DBSYSTEMVALUES_PROGRESS = $t),
      (e.DBSYSTEMVALUES_MAXDB = en),
      (e.DBSYSTEMVALUES_HANADB = tn),
      (e.DBSYSTEMVALUES_INGRES = nn),
      (e.DBSYSTEMVALUES_FIRSTSQL = rn),
      (e.DBSYSTEMVALUES_EDB = an),
      (e.DBSYSTEMVALUES_CACHE = on),
      (e.DBSYSTEMVALUES_ADABAS = sn),
      (e.DBSYSTEMVALUES_FIREBIRD = cn),
      (e.DBSYSTEMVALUES_DERBY = ln),
      (e.DBSYSTEMVALUES_FILEMAKER = un),
      (e.DBSYSTEMVALUES_INFORMIX = dn),
      (e.DBSYSTEMVALUES_INSTANTDB = fn),
      (e.DBSYSTEMVALUES_INTERBASE = pn),
      (e.DBSYSTEMVALUES_MARIADB = mn),
      (e.DBSYSTEMVALUES_NETEZZA = hn),
      (e.DBSYSTEMVALUES_PERVASIVE = gn),
      (e.DBSYSTEMVALUES_POINTBASE = _n),
      (e.DBSYSTEMVALUES_SQLITE = vn),
      (e.DBSYSTEMVALUES_SYBASE = yn),
      (e.DBSYSTEMVALUES_TERADATA = bn),
      (e.DBSYSTEMVALUES_VERTICA = xn),
      (e.DBSYSTEMVALUES_H2 = Sn),
      (e.DBSYSTEMVALUES_COLDFUSION = Cn),
      (e.DBSYSTEMVALUES_CASSANDRA = wn),
      (e.DBSYSTEMVALUES_HBASE = Tn),
      (e.DBSYSTEMVALUES_MONGODB = En),
      (e.DBSYSTEMVALUES_REDIS = Dn),
      (e.DBSYSTEMVALUES_COUCHBASE = On),
      (e.DBSYSTEMVALUES_COUCHDB = kn),
      (e.DBSYSTEMVALUES_COSMOSDB = An),
      (e.DBSYSTEMVALUES_DYNAMODB = jn),
      (e.DBSYSTEMVALUES_NEO4J = Mn),
      (e.DBSYSTEMVALUES_GEODE = Nn),
      (e.DBSYSTEMVALUES_ELASTICSEARCH = Pn),
      (e.DBSYSTEMVALUES_MEMCACHED = Fn),
      (e.DBSYSTEMVALUES_COCKROACHDB = In),
      (e.DbSystemValues = (0, t.createConstMap)([
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
        Fn,
        In,
      ])));
    var Ln = `all`,
      Rn = `each_quorum`,
      zn = `quorum`,
      Bn = `local_quorum`,
      Vn = `one`,
      Hn = `two`,
      Un = `three`,
      Wn = `local_one`,
      Gn = `any`,
      Kn = `serial`,
      qn = `local_serial`;
    ((e.DBCASSANDRACONSISTENCYLEVELVALUES_ALL = Ln),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = Rn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = zn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = Bn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_ONE = Vn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_TWO = Hn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_THREE = Un),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = Wn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_ANY = Gn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = Kn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = qn),
      (e.DbCassandraConsistencyLevelValues = (0, t.createConstMap)([
        Ln,
        Rn,
        zn,
        Bn,
        Vn,
        Hn,
        Un,
        Wn,
        Gn,
        Kn,
        qn,
      ])));
    var Jn = `datasource`,
      Yn = `http`,
      Xn = `pubsub`,
      Zn = `timer`,
      Qn = `other`;
    ((e.FAASTRIGGERVALUES_DATASOURCE = Jn),
      (e.FAASTRIGGERVALUES_HTTP = Yn),
      (e.FAASTRIGGERVALUES_PUBSUB = Xn),
      (e.FAASTRIGGERVALUES_TIMER = Zn),
      (e.FAASTRIGGERVALUES_OTHER = Qn),
      (e.FaasTriggerValues = (0, t.createConstMap)([Jn, Yn, Xn, Zn, Qn])));
    var $n = `insert`,
      er = `edit`,
      tr = `delete`;
    ((e.FAASDOCUMENTOPERATIONVALUES_INSERT = $n),
      (e.FAASDOCUMENTOPERATIONVALUES_EDIT = er),
      (e.FAASDOCUMENTOPERATIONVALUES_DELETE = tr),
      (e.FaasDocumentOperationValues = (0, t.createConstMap)([$n, er, tr])));
    var nr = `alibaba_cloud`,
      rr = `aws`,
      ir = `azure`,
      ar = `gcp`;
    ((e.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = nr),
      (e.FAASINVOKEDPROVIDERVALUES_AWS = rr),
      (e.FAASINVOKEDPROVIDERVALUES_AZURE = ir),
      (e.FAASINVOKEDPROVIDERVALUES_GCP = ar),
      (e.FaasInvokedProviderValues = (0, t.createConstMap)([nr, rr, ir, ar])));
    var or = `ip_tcp`,
      sr = `ip_udp`,
      cr = `ip`,
      lr = `unix`,
      ur = `pipe`,
      dr = `inproc`,
      fr = `other`;
    ((e.NETTRANSPORTVALUES_IP_TCP = or),
      (e.NETTRANSPORTVALUES_IP_UDP = sr),
      (e.NETTRANSPORTVALUES_IP = cr),
      (e.NETTRANSPORTVALUES_UNIX = lr),
      (e.NETTRANSPORTVALUES_PIPE = ur),
      (e.NETTRANSPORTVALUES_INPROC = dr),
      (e.NETTRANSPORTVALUES_OTHER = fr),
      (e.NetTransportValues = (0, t.createConstMap)([or, sr, cr, lr, ur, dr, fr])));
    var pr = `wifi`,
      mr = `wired`,
      hr = `cell`,
      gr = `unavailable`,
      _r = `unknown`;
    ((e.NETHOSTCONNECTIONTYPEVALUES_WIFI = pr),
      (e.NETHOSTCONNECTIONTYPEVALUES_WIRED = mr),
      (e.NETHOSTCONNECTIONTYPEVALUES_CELL = hr),
      (e.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = gr),
      (e.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = _r),
      (e.NetHostConnectionTypeValues = (0, t.createConstMap)([pr, mr, hr, gr, _r])));
    var vr = `gprs`,
      yr = `edge`,
      br = `umts`,
      xr = `cdma`,
      Sr = `evdo_0`,
      Cr = `evdo_a`,
      wr = `cdma2000_1xrtt`,
      Tr = `hsdpa`,
      Er = `hsupa`,
      Dr = `hspa`,
      Or = `iden`,
      kr = `evdo_b`,
      Ar = `lte`,
      jr = `ehrpd`,
      Mr = `hspap`,
      Nr = `gsm`,
      Pr = `td_scdma`,
      Fr = `iwlan`,
      Ir = `nr`,
      Lr = `nrnsa`,
      Rr = `lte_ca`;
    ((e.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = vr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = yr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = br),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = xr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = Sr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = Cr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = wr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = Tr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = Er),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = Dr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = Or),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = kr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_LTE = Ar),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = jr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = Mr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_GSM = Nr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = Pr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = Fr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_NR = Ir),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = Lr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = Rr),
      (e.NetHostConnectionSubtypeValues = (0, t.createConstMap)([
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
        Lr,
        Rr,
      ])));
    var zr = `1.0`,
      N = `1.1`,
      Br = `2.0`,
      Vr = `SPDY`,
      Hr = `QUIC`;
    ((e.HTTPFLAVORVALUES_HTTP_1_0 = zr),
      (e.HTTPFLAVORVALUES_HTTP_1_1 = N),
      (e.HTTPFLAVORVALUES_HTTP_2_0 = Br),
      (e.HTTPFLAVORVALUES_SPDY = Vr),
      (e.HTTPFLAVORVALUES_QUIC = Hr),
      (e.HttpFlavorValues = { HTTP_1_0: zr, HTTP_1_1: N, HTTP_2_0: Br, SPDY: Vr, QUIC: Hr }));
    var Ur = `queue`,
      Wr = `topic`;
    ((e.MESSAGINGDESTINATIONKINDVALUES_QUEUE = Ur),
      (e.MESSAGINGDESTINATIONKINDVALUES_TOPIC = Wr),
      (e.MessagingDestinationKindValues = (0, t.createConstMap)([Ur, Wr])));
    var Gr = `receive`,
      Kr = `process`;
    ((e.MESSAGINGOPERATIONVALUES_RECEIVE = Gr),
      (e.MESSAGINGOPERATIONVALUES_PROCESS = Kr),
      (e.MessagingOperationValues = (0, t.createConstMap)([Gr, Kr])));
    var qr = 0,
      Jr = 1,
      Yr = 2,
      Xr = 3,
      Zr = 4,
      Qr = 5,
      $r = 6,
      ei = 7,
      ti = 8,
      ni = 9,
      ri = 10,
      ii = 11,
      ai = 12,
      oi = 13,
      si = 14,
      ci = 15,
      li = 16;
    ((e.RPCGRPCSTATUSCODEVALUES_OK = qr),
      (e.RPCGRPCSTATUSCODEVALUES_CANCELLED = Jr),
      (e.RPCGRPCSTATUSCODEVALUES_UNKNOWN = Yr),
      (e.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = Xr),
      (e.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = Zr),
      (e.RPCGRPCSTATUSCODEVALUES_NOT_FOUND = Qr),
      (e.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = $r),
      (e.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = ei),
      (e.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = ti),
      (e.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = ni),
      (e.RPCGRPCSTATUSCODEVALUES_ABORTED = ri),
      (e.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = ii),
      (e.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = ai),
      (e.RPCGRPCSTATUSCODEVALUES_INTERNAL = oi),
      (e.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = si),
      (e.RPCGRPCSTATUSCODEVALUES_DATA_LOSS = ci),
      (e.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = li),
      (e.RpcGrpcStatusCodeValues = {
        OK: qr,
        CANCELLED: Jr,
        UNKNOWN: Yr,
        INVALID_ARGUMENT: Xr,
        DEADLINE_EXCEEDED: Zr,
        NOT_FOUND: Qr,
        ALREADY_EXISTS: $r,
        PERMISSION_DENIED: ei,
        RESOURCE_EXHAUSTED: ti,
        FAILED_PRECONDITION: ni,
        ABORTED: ri,
        OUT_OF_RANGE: ii,
        UNIMPLEMENTED: ai,
        INTERNAL: oi,
        UNAVAILABLE: si,
        DATA_LOSS: ci,
        UNAUTHENTICATED: li,
      }));
    var ui = `SENT`,
      di = `RECEIVED`;
    ((e.MESSAGETYPEVALUES_SENT = ui),
      (e.MESSAGETYPEVALUES_RECEIVED = di),
      (e.MessageTypeValues = (0, t.createConstMap)([ui, di])));
  }),
  Uv = e.t((e) => {
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
    (Object.defineProperty(e, "__esModule", { value: !0 }), n(Hv(), e));
  }),
  Wv = e.t((e) => {
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
    var t = Vv(),
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
      ne = `faas.instance`,
      re = `faas.max_memory`,
      ie = `host.id`,
      O = `host.name`,
      k = `host.type`,
      ae = `host.arch`,
      oe = `host.image.name`,
      se = `host.image.id`,
      ce = `host.image.version`,
      le = `k8s.cluster.name`,
      ue = `k8s.node.name`,
      de = `k8s.node.uid`,
      fe = `k8s.namespace.name`,
      pe = `k8s.pod.uid`,
      me = `k8s.pod.name`,
      he = `k8s.container.name`,
      ge = `k8s.replicaset.uid`,
      _e = `k8s.replicaset.name`,
      ve = `k8s.deployment.uid`,
      ye = `k8s.deployment.name`,
      A = `k8s.statefulset.uid`,
      be = `k8s.statefulset.name`,
      xe = `k8s.daemonset.uid`,
      Se = `k8s.daemonset.name`,
      Ce = `k8s.job.uid`,
      we = `k8s.job.name`,
      Te = `k8s.cronjob.uid`,
      Ee = `k8s.cronjob.name`,
      De = `os.type`,
      Oe = `os.description`,
      ke = `os.name`,
      Ae = `os.version`,
      je = `process.pid`,
      Me = `process.executable.name`,
      Ne = `process.executable.path`,
      Pe = `process.command`,
      Fe = `process.command_line`,
      Ie = `process.command_args`,
      Le = `process.owner`,
      Re = `process.runtime.name`,
      ze = `process.runtime.version`,
      j = `process.runtime.description`,
      Be = `service.name`,
      Ve = `service.namespace`,
      He = `service.instance.id`,
      Ue = `service.version`,
      We = `telemetry.sdk.name`,
      Ge = `telemetry.sdk.language`,
      Ke = `telemetry.sdk.version`,
      qe = `telemetry.auto.version`,
      Je = `webengine.name`,
      Ye = `webengine.version`,
      Xe = `webengine.description`;
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
      (e.SEMRESATTRS_FAAS_INSTANCE = ne),
      (e.SEMRESATTRS_FAAS_MAX_MEMORY = re),
      (e.SEMRESATTRS_HOST_ID = ie),
      (e.SEMRESATTRS_HOST_NAME = O),
      (e.SEMRESATTRS_HOST_TYPE = k),
      (e.SEMRESATTRS_HOST_ARCH = ae),
      (e.SEMRESATTRS_HOST_IMAGE_NAME = oe),
      (e.SEMRESATTRS_HOST_IMAGE_ID = se),
      (e.SEMRESATTRS_HOST_IMAGE_VERSION = ce),
      (e.SEMRESATTRS_K8S_CLUSTER_NAME = le),
      (e.SEMRESATTRS_K8S_NODE_NAME = ue),
      (e.SEMRESATTRS_K8S_NODE_UID = de),
      (e.SEMRESATTRS_K8S_NAMESPACE_NAME = fe),
      (e.SEMRESATTRS_K8S_POD_UID = pe),
      (e.SEMRESATTRS_K8S_POD_NAME = me),
      (e.SEMRESATTRS_K8S_CONTAINER_NAME = he),
      (e.SEMRESATTRS_K8S_REPLICASET_UID = ge),
      (e.SEMRESATTRS_K8S_REPLICASET_NAME = _e),
      (e.SEMRESATTRS_K8S_DEPLOYMENT_UID = ve),
      (e.SEMRESATTRS_K8S_DEPLOYMENT_NAME = ye),
      (e.SEMRESATTRS_K8S_STATEFULSET_UID = A),
      (e.SEMRESATTRS_K8S_STATEFULSET_NAME = be),
      (e.SEMRESATTRS_K8S_DAEMONSET_UID = xe),
      (e.SEMRESATTRS_K8S_DAEMONSET_NAME = Se),
      (e.SEMRESATTRS_K8S_JOB_UID = Ce),
      (e.SEMRESATTRS_K8S_JOB_NAME = we),
      (e.SEMRESATTRS_K8S_CRONJOB_UID = Te),
      (e.SEMRESATTRS_K8S_CRONJOB_NAME = Ee),
      (e.SEMRESATTRS_OS_TYPE = De),
      (e.SEMRESATTRS_OS_DESCRIPTION = Oe),
      (e.SEMRESATTRS_OS_NAME = ke),
      (e.SEMRESATTRS_OS_VERSION = Ae),
      (e.SEMRESATTRS_PROCESS_PID = je),
      (e.SEMRESATTRS_PROCESS_EXECUTABLE_NAME = Me),
      (e.SEMRESATTRS_PROCESS_EXECUTABLE_PATH = Ne),
      (e.SEMRESATTRS_PROCESS_COMMAND = Pe),
      (e.SEMRESATTRS_PROCESS_COMMAND_LINE = Fe),
      (e.SEMRESATTRS_PROCESS_COMMAND_ARGS = Ie),
      (e.SEMRESATTRS_PROCESS_OWNER = Le),
      (e.SEMRESATTRS_PROCESS_RUNTIME_NAME = Re),
      (e.SEMRESATTRS_PROCESS_RUNTIME_VERSION = ze),
      (e.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = j),
      (e.SEMRESATTRS_SERVICE_NAME = Be),
      (e.SEMRESATTRS_SERVICE_NAMESPACE = Ve),
      (e.SEMRESATTRS_SERVICE_INSTANCE_ID = He),
      (e.SEMRESATTRS_SERVICE_VERSION = Ue),
      (e.SEMRESATTRS_TELEMETRY_SDK_NAME = We),
      (e.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = Ge),
      (e.SEMRESATTRS_TELEMETRY_SDK_VERSION = Ke),
      (e.SEMRESATTRS_TELEMETRY_AUTO_VERSION = qe),
      (e.SEMRESATTRS_WEBENGINE_NAME = Je),
      (e.SEMRESATTRS_WEBENGINE_VERSION = Ye),
      (e.SEMRESATTRS_WEBENGINE_DESCRIPTION = Xe),
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
        ne,
        re,
        ie,
        O,
        k,
        ae,
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
        ve,
        ye,
        A,
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
        Re,
        ze,
        j,
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
      ])));
    var Ze = `alibaba_cloud`,
      Qe = `aws`,
      $e = `azure`,
      et = `gcp`;
    ((e.CLOUDPROVIDERVALUES_ALIBABA_CLOUD = Ze),
      (e.CLOUDPROVIDERVALUES_AWS = Qe),
      (e.CLOUDPROVIDERVALUES_AZURE = $e),
      (e.CLOUDPROVIDERVALUES_GCP = et),
      (e.CloudProviderValues = (0, t.createConstMap)([Ze, Qe, $e, et])));
    var M = `alibaba_cloud_ecs`,
      tt = `alibaba_cloud_fc`,
      nt = `aws_ec2`,
      rt = `aws_ecs`,
      it = `aws_eks`,
      at = `aws_lambda`,
      ot = `aws_elastic_beanstalk`,
      st = `azure_vm`,
      ct = `azure_container_instances`,
      lt = `azure_aks`,
      ut = `azure_functions`,
      dt = `azure_app_service`,
      ft = `gcp_compute_engine`,
      pt = `gcp_cloud_run`,
      mt = `gcp_kubernetes_engine`,
      ht = `gcp_cloud_functions`,
      gt = `gcp_app_engine`;
    ((e.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = M),
      (e.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = tt),
      (e.CLOUDPLATFORMVALUES_AWS_EC2 = nt),
      (e.CLOUDPLATFORMVALUES_AWS_ECS = rt),
      (e.CLOUDPLATFORMVALUES_AWS_EKS = it),
      (e.CLOUDPLATFORMVALUES_AWS_LAMBDA = at),
      (e.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = ot),
      (e.CLOUDPLATFORMVALUES_AZURE_VM = st),
      (e.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = ct),
      (e.CLOUDPLATFORMVALUES_AZURE_AKS = lt),
      (e.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = ut),
      (e.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = dt),
      (e.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = ft),
      (e.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = pt),
      (e.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = mt),
      (e.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = ht),
      (e.CLOUDPLATFORMVALUES_GCP_APP_ENGINE = gt),
      (e.CloudPlatformValues = (0, t.createConstMap)([
        M,
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
      ])));
    var _t = `ec2`,
      vt = `fargate`;
    ((e.AWSECSLAUNCHTYPEVALUES_EC2 = _t),
      (e.AWSECSLAUNCHTYPEVALUES_FARGATE = vt),
      (e.AwsEcsLaunchtypeValues = (0, t.createConstMap)([_t, vt])));
    var yt = `amd64`,
      bt = `arm32`,
      xt = `arm64`,
      St = `ia64`,
      Ct = `ppc32`,
      wt = `ppc64`,
      Tt = `x86`;
    ((e.HOSTARCHVALUES_AMD64 = yt),
      (e.HOSTARCHVALUES_ARM32 = bt),
      (e.HOSTARCHVALUES_ARM64 = xt),
      (e.HOSTARCHVALUES_IA64 = St),
      (e.HOSTARCHVALUES_PPC32 = Ct),
      (e.HOSTARCHVALUES_PPC64 = wt),
      (e.HOSTARCHVALUES_X86 = Tt),
      (e.HostArchValues = (0, t.createConstMap)([yt, bt, xt, St, Ct, wt, Tt])));
    var Et = `windows`,
      Dt = `linux`,
      Ot = `darwin`,
      kt = `freebsd`,
      At = `netbsd`,
      jt = `openbsd`,
      Mt = `dragonflybsd`,
      Nt = `hpux`,
      Pt = `aix`,
      Ft = `solaris`,
      It = `z_os`;
    ((e.OSTYPEVALUES_WINDOWS = Et),
      (e.OSTYPEVALUES_LINUX = Dt),
      (e.OSTYPEVALUES_DARWIN = Ot),
      (e.OSTYPEVALUES_FREEBSD = kt),
      (e.OSTYPEVALUES_NETBSD = At),
      (e.OSTYPEVALUES_OPENBSD = jt),
      (e.OSTYPEVALUES_DRAGONFLYBSD = Mt),
      (e.OSTYPEVALUES_HPUX = Nt),
      (e.OSTYPEVALUES_AIX = Pt),
      (e.OSTYPEVALUES_SOLARIS = Ft),
      (e.OSTYPEVALUES_Z_OS = It),
      (e.OsTypeValues = (0, t.createConstMap)([Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It])));
    var Lt = `cpp`,
      Rt = `dotnet`,
      zt = `erlang`,
      Bt = `go`,
      Vt = `java`,
      Ht = `nodejs`,
      Ut = `php`,
      Wt = `python`,
      Gt = `ruby`,
      Kt = `webjs`;
    ((e.TELEMETRYSDKLANGUAGEVALUES_CPP = Lt),
      (e.TELEMETRYSDKLANGUAGEVALUES_DOTNET = Rt),
      (e.TELEMETRYSDKLANGUAGEVALUES_ERLANG = zt),
      (e.TELEMETRYSDKLANGUAGEVALUES_GO = Bt),
      (e.TELEMETRYSDKLANGUAGEVALUES_JAVA = Vt),
      (e.TELEMETRYSDKLANGUAGEVALUES_NODEJS = Ht),
      (e.TELEMETRYSDKLANGUAGEVALUES_PHP = Ut),
      (e.TELEMETRYSDKLANGUAGEVALUES_PYTHON = Wt),
      (e.TELEMETRYSDKLANGUAGEVALUES_RUBY = Gt),
      (e.TELEMETRYSDKLANGUAGEVALUES_WEBJS = Kt),
      (e.TelemetrySdkLanguageValues = (0, t.createConstMap)([Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt])));
  }),
  Gv = e.t((e) => {
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
    (Object.defineProperty(e, "__esModule", { value: !0 }), n(Wv(), e));
  }),
  Kv = e.t((e) => {
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
  qv = e.t((e) => {
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
  Jv = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.EVENT_EXCEPTION = void 0),
      (e.EVENT_EXCEPTION = `exception`));
  }),
  Yv = e.t((e) => {
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
      n(Uv(), e),
      n(Gv(), e),
      n(Kv(), e),
      n(qv(), e),
      n(Jv(), e));
  });
function Xv() {
  return `unknown_service:${process.argv0}`;
}
var Zv = (e) => typeof e == `object` && !!e && typeof e.then == `function`,
  q = e.a(N());
zo();
var J = Yv(),
  Qv = class e {
    _rawAttributes;
    _asyncAttributesPending = !1;
    _schemaUrl;
    _memoizedAttributes;
    static FromAttributeList(t, n) {
      let r = new e({}, n);
      return (
        (r._rawAttributes = ty(t)),
        (r._asyncAttributesPending = t.filter(([e, t]) => Zv(t)).length > 0),
        r
      );
    }
    constructor(e, t) {
      let n = e.attributes ?? {};
      ((this._rawAttributes = Object.entries(n).map(
        ([e, t]) => (Zv(t) && (this._asyncAttributesPending = !0), [e, t]),
      )),
        (this._rawAttributes = ty(this._rawAttributes)),
        (this._schemaUrl = ny(t?.schemaUrl)));
    }
    get asyncAttributesPending() {
      return this._asyncAttributesPending;
    }
    async waitForAsyncAttributes() {
      if (this.asyncAttributesPending) {
        for (let e = 0; e < this._rawAttributes.length; e++) {
          let [t, n] = this._rawAttributes[e];
          this._rawAttributes[e] = [t, Zv(n) ? await n : n];
        }
        this._asyncAttributesPending = !1;
      }
    }
    get attributes() {
      if (
        (this.asyncAttributesPending &&
          q.diag.error(`Accessing resource attributes before async attributes settled`),
        this._memoizedAttributes)
      )
        return this._memoizedAttributes;
      let e = {};
      for (let [t, n] of this._rawAttributes) {
        if (Zv(n)) {
          q.diag.debug(`Unsettled resource attribute ${t} skipped`);
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
      let n = ry(this, t),
        r = n ? { schemaUrl: n } : void 0;
      return e.FromAttributeList([...t.getRawAttributes(), ...this.getRawAttributes()], r);
    }
  };
function $v(e, t) {
  return Qv.FromAttributeList(Object.entries(e), t);
}
function ey() {
  return $v({
    [J.ATTR_SERVICE_NAME]: Xv(),
    [J.ATTR_TELEMETRY_SDK_LANGUAGE]: Gi[J.ATTR_TELEMETRY_SDK_LANGUAGE],
    [J.ATTR_TELEMETRY_SDK_NAME]: Gi[J.ATTR_TELEMETRY_SDK_NAME],
    [J.ATTR_TELEMETRY_SDK_VERSION]: Gi[J.ATTR_TELEMETRY_SDK_VERSION],
  });
}
function ty(e) {
  return e.map(([e, t]) =>
    Zv(t)
      ? [
          e,
          t.catch((t) => {
            q.diag.debug(`promise rejection for resource attribute: %s - %s`, e, t);
          }),
        ]
      : [e, t],
  );
}
function ny(e) {
  if (typeof e == `string` || e === void 0) return e;
  q.diag.warn(`Schema URL must be string or undefined, got %s. Schema URL will be ignored.`, e);
}
function ry(e, t) {
  let n = e?.schemaUrl,
    r = t?.schemaUrl,
    i = n === void 0 || n === ``,
    a = r === void 0 || r === ``;
  if (i) return r;
  if (a || n === r) return n;
  q.diag.warn(
    `Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.`,
    n,
    r,
  );
}
var iy = `exception`;
zo();
var Y = Vi(),
  ay = class {
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
    status = { code: q.SpanStatusCode.UNSET };
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
        (this._performanceStartTime = ki.now()),
        (this._performanceOffset = t - (this._performanceStartTime + Xi())),
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
      if (e.length === 0) return (q.diag.warn(`Invalid attribute key: ${e}`), this);
      if (!ci(t)) return (q.diag.warn(`Invalid attribute value set for key: ${e}`), this);
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
      if (r === 0) return (q.diag.warn(`No events allowed.`), this._droppedEventsCount++, this);
      (r !== void 0 &&
        this.events.length >= r &&
        (this._droppedEventsCount === 0 && q.diag.debug(`Dropping extra events.`),
        this.events.shift(),
        this._droppedEventsCount++),
        aa(t) && (aa(n) || (n = t), (t = void 0)));
      let i = oi(t);
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
            (q.diag.warn(`Dropping invalid status.message of type '${typeof e.message}', expected 'string'`),
            delete this.status.message),
          this);
    }
    updateName(e) {
      return (this._isSpanEnded() || (this.name = e), this);
    }
    end(e) {
      if (this._isSpanEnded()) {
        q.diag.error(
          `${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`,
        );
        return;
      }
      ((this._ended = !0),
        (this.endTime = this._getTime(e)),
        (this._duration = $i(this.startTime, this.endTime)),
        this._duration[0] < 0 &&
          (q.diag.warn(
            `Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.`,
            this.startTime,
            this.endTime,
          ),
          (this.endTime = this.startTime.slice()),
          (this._duration = [0, 0])),
        this._droppedEventsCount > 0 &&
          q.diag.warn(`Dropped ${this._droppedEventsCount} events because eventCountLimit reached`),
        this._spanProcessor.onEnd(this));
    }
    _getTime(e) {
      if (typeof e == `number` && e <= ki.now()) return Zi(e + this._performanceOffset);
      if (typeof e == `number`) return Yi(e);
      if (e instanceof Date) return Yi(e.getTime());
      if (ia(e)) return e;
      if (this._startTimeProvided) return Yi(Date.now());
      let t = ki.now() - this._performanceStartTime;
      return oa(this.startTime, Yi(t));
    }
    isRecording() {
      return this._ended === !1;
    }
    recordException(e, t) {
      let n = {};
      (typeof e == `string`
        ? (n[Y.ATTR_EXCEPTION_MESSAGE] = e)
        : e &&
          (e.code
            ? (n[Y.ATTR_EXCEPTION_TYPE] = e.code.toString())
            : e.name && (n[Y.ATTR_EXCEPTION_TYPE] = e.name),
          e.message && (n[Y.ATTR_EXCEPTION_MESSAGE] = e.message),
          e.stack && (n[Y.ATTR_EXCEPTION_STACKTRACE] = e.stack)),
        n[Y.ATTR_EXCEPTION_TYPE] || n[Y.ATTR_EXCEPTION_MESSAGE]
          ? this.addEvent(iy, n, t)
          : q.diag.warn(`Failed to record an exception ${e}`));
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
        q.diag.warn(
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
        ? (q.diag.warn(`Attribute value limit must be positive, got ${t}`), e)
        : typeof e == `string`
          ? this._truncateToLimitUtil(e, t)
          : Array.isArray(e)
            ? e.map((e) => (typeof e == `string` ? this._truncateToLimitUtil(e, t) : e))
            : e;
    }
  },
  oy;
(function (e) {
  ((e[(e.NOT_RECORD = 0)] = `NOT_RECORD`),
    (e[(e.RECORD = 1)] = `RECORD`),
    (e[(e.RECORD_AND_SAMPLED = 2)] = `RECORD_AND_SAMPLED`));
})((oy ||= {}));
var sy = class {
    shouldSample() {
      return { decision: oy.NOT_RECORD };
    }
    toString() {
      return `AlwaysOffSampler`;
    }
  },
  cy = class {
    shouldSample() {
      return { decision: oy.RECORD_AND_SAMPLED };
    }
    toString() {
      return `AlwaysOnSampler`;
    }
  };
zo();
var ly = class {
    _root;
    _remoteParentSampled;
    _remoteParentNotSampled;
    _localParentSampled;
    _localParentNotSampled;
    constructor(e) {
      ((this._root = e.root),
        (this._root ||= (yi(Error(`ParentBasedSampler must have a root sampler configured`)), new cy())),
        (this._remoteParentSampled = e.remoteParentSampled ?? new cy()),
        (this._remoteParentNotSampled = e.remoteParentNotSampled ?? new sy()),
        (this._localParentSampled = e.localParentSampled ?? new cy()),
        (this._localParentNotSampled = e.localParentNotSampled ?? new sy()));
    }
    shouldSample(e, t, n, r, i, a) {
      let o = q.trace.getSpanContext(e);
      return !o || !(0, q.isSpanContextValid)(o)
        ? this._root.shouldSample(e, t, n, r, i, a)
        : o.isRemote
          ? o.traceFlags & q.TraceFlags.SAMPLED
            ? this._remoteParentSampled.shouldSample(e, t, n, r, i, a)
            : this._remoteParentNotSampled.shouldSample(e, t, n, r, i, a)
          : o.traceFlags & q.TraceFlags.SAMPLED
            ? this._localParentSampled.shouldSample(e, t, n, r, i, a)
            : this._localParentNotSampled.shouldSample(e, t, n, r, i, a);
    }
    toString() {
      return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
    }
  },
  uy = class {
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
          (0, q.isValidTraceId)(t) && this._accumulate(t) < this._upperBound
            ? oy.RECORD_AND_SAMPLED
            : oy.NOT_RECORD,
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
zo();
var dy;
(function (e) {
  ((e.AlwaysOff = `always_off`),
    (e.AlwaysOn = `always_on`),
    (e.ParentBasedAlwaysOff = `parentbased_always_off`),
    (e.ParentBasedAlwaysOn = `parentbased_always_on`),
    (e.ParentBasedTraceIdRatio = `parentbased_traceidratio`),
    (e.TraceIdRatio = `traceidratio`));
})((dy ||= {}));
var fy = 1;
function py() {
  return {
    sampler: my(),
    forceFlushTimeoutMillis: 3e4,
    generalLimits: {
      attributeValueLengthLimit: P(`OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT`) ?? 1 / 0,
      attributeCountLimit: P(`OTEL_ATTRIBUTE_COUNT_LIMIT`) ?? 128,
    },
    spanLimits: {
      attributeValueLengthLimit: P(`OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT`) ?? 1 / 0,
      attributeCountLimit: P(`OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT`) ?? 128,
      linkCountLimit: P(`OTEL_SPAN_LINK_COUNT_LIMIT`) ?? 128,
      eventCountLimit: P(`OTEL_SPAN_EVENT_COUNT_LIMIT`) ?? 128,
      attributePerEventCountLimit: P(`OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT`) ?? 128,
      attributePerLinkCountLimit: P(`OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT`) ?? 128,
    },
  };
}
function my() {
  let e = Si(`OTEL_TRACES_SAMPLER`) ?? dy.ParentBasedAlwaysOn;
  switch (e) {
    case dy.AlwaysOn:
      return new cy();
    case dy.AlwaysOff:
      return new sy();
    case dy.ParentBasedAlwaysOn:
      return new ly({ root: new cy() });
    case dy.ParentBasedAlwaysOff:
      return new ly({ root: new sy() });
    case dy.TraceIdRatio:
      return new uy(hy());
    case dy.ParentBasedTraceIdRatio:
      return new ly({ root: new uy(hy()) });
    default:
      return (
        q.diag.error(`OTEL_TRACES_SAMPLER value "${e}" invalid, defaulting to "${dy.ParentBasedAlwaysOn}".`),
        new ly({ root: new cy() })
      );
  }
}
function hy() {
  let e = P(`OTEL_TRACES_SAMPLER_ARG`);
  return e == null
    ? (q.diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${fy}.`), fy)
    : e < 0 || e > 1
      ? (q.diag.error(
          `OTEL_TRACES_SAMPLER_ARG=${e} was given, but it is out of range ([0..1]), defaulting to ${fy}.`,
        ),
        fy)
      : e;
}
zo();
function gy(e) {
  let t = { sampler: my() },
    n = py(),
    r = Object.assign({}, n, t, e);
  return (
    (r.generalLimits = Object.assign({}, n.generalLimits, e.generalLimits || {})),
    (r.spanLimits = Object.assign({}, n.spanLimits, e.spanLimits || {})),
    r
  );
}
function _y(e) {
  let t = Object.assign({}, e.spanLimits);
  return (
    (t.attributeCountLimit =
      e.spanLimits?.attributeCountLimit ??
      e.generalLimits?.attributeCountLimit ??
      P(`OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT`) ??
      P(`OTEL_ATTRIBUTE_COUNT_LIMIT`) ??
      128),
    (t.attributeValueLengthLimit =
      e.spanLimits?.attributeValueLengthLimit ??
      e.generalLimits?.attributeValueLengthLimit ??
      P(`OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT`) ??
      P(`OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT`) ??
      1 / 0),
    Object.assign({}, e, { spanLimits: t })
  );
}
var vy = 8,
  yy = 16,
  by = class {
    generateTraceId = Sy(yy);
    generateSpanId = Sy(vy);
  },
  xy = Buffer.allocUnsafe(yy);
function Sy(e) {
  return function () {
    for (let t = 0; t < e / 4; t++) xy.writeUInt32BE((Math.random() * 2 ** 32) >>> 0, t * 4);
    for (let t = 0; t < e && !(xy[t] > 0); t++) t === e - 1 && (xy[e - 1] = 1);
    return xy.toString(`hex`, 0, e);
  };
}
zo();
var Cy = class {
  _sampler;
  _generalLimits;
  _spanLimits;
  _idGenerator;
  instrumentationScope;
  _resource;
  _spanProcessor;
  constructor(e, t, n, r) {
    let i = gy(t);
    ((this._sampler = i.sampler),
      (this._generalLimits = i.generalLimits),
      (this._spanLimits = i.spanLimits),
      (this._idGenerator = t.idGenerator || new by()),
      (this._resource = n),
      (this._spanProcessor = r),
      (this.instrumentationScope = e));
  }
  startSpan(e, t = {}, n = q.context.active()) {
    t.root && (n = q.trace.deleteSpan(n));
    let r = q.trace.getSpan(n);
    if (Hr(n))
      return (
        q.diag.debug(`Instrumentation suppressed, returning Noop Span`),
        q.trace.wrapSpanContext(q.INVALID_SPAN_CONTEXT)
      );
    let i = r?.spanContext(),
      a = this._idGenerator.generateSpanId(),
      o,
      s,
      c;
    !i || !q.trace.isSpanContextValid(i)
      ? (s = this._idGenerator.generateTraceId())
      : ((s = i.traceId), (c = i.traceState), (o = i));
    let l = t.kind ?? q.SpanKind.INTERNAL,
      u = (t.links ?? []).map((e) => ({ context: e.context, attributes: oi(e.attributes) })),
      d = oi(t.attributes),
      f = this._sampler.shouldSample(n, s, e, l, d, u);
    c = f.traceState ?? c;
    let p = f.decision === q.SamplingDecision.RECORD_AND_SAMPLED ? q.TraceFlags.SAMPLED : q.TraceFlags.NONE,
      m = { traceId: s, spanId: a, traceFlags: p, traceState: c };
    if (f.decision === q.SamplingDecision.NOT_RECORD)
      return (
        q.diag.debug(`Recording is off, propagating context in a non-recording span`),
        q.trace.wrapSpanContext(m)
      );
    let h = oi(Object.assign(d, f.attributes));
    return new ay({
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
    let s = a ?? q.context.active(),
      c = this.startSpan(e, i, s),
      l = q.trace.setSpan(s, c);
    return q.context.with(l, o, void 0, c);
  }
  getGeneralLimits() {
    return this._generalLimits;
  }
  getSpanLimits() {
    return this._spanLimits;
  }
};
zo();
var wy = class {
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
          (yi(e || Error(`MultiSpanProcessor: forceFlush failed`)), t());
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
zo();
var Ty;
(function (e) {
  ((e[(e.resolved = 0)] = `resolved`),
    (e[(e.timeout = 1)] = `timeout`),
    (e[(e.error = 2)] = `error`),
    (e[(e.unresolved = 3)] = `unresolved`));
})((Ty ||= {}));
var Ey = class {
  _config;
  _tracers = new Map();
  _resource;
  _activeSpanProcessor;
  constructor(e = {}) {
    let t = co({}, py(), _y(e));
    ((this._resource = t.resource ?? ey()),
      (this._config = Object.assign({}, t, { resource: this._resource })));
    let n = [];
    (e.spanProcessors?.length && n.push(...e.spanProcessors), (this._activeSpanProcessor = new wy(n)));
  }
  getTracer(e, t, n) {
    let r = `${e}@${t || ``}:${n?.schemaUrl || ``}`;
    return (
      this._tracers.has(r) ||
        this._tracers.set(
          r,
          new Cy(
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
                  (r = Ty.timeout));
              }, e);
            t.forceFlush()
              .then(() => {
                (clearTimeout(i), r !== Ty.timeout && ((r = Ty.resolved), n(r)));
              })
              .catch((e) => {
                (clearTimeout(i), (r = Ty.error), n(e));
              });
          }),
      );
    return new Promise((e, n) => {
      Promise.all(t)
        .then((t) => {
          let r = t.filter((e) => e !== Ty.resolved);
          r.length > 0 ? n(r) : e();
        })
        .catch((e) => n([e]));
    });
  }
  shutdown() {
    return this._activeSpanProcessor.shutdown();
  }
};
zo();
var Dy = `sentry.parentIsRemote`,
  Oy = `sentry.graphql.operation`;
function ky(e) {
  if (`parentSpanId` in e) return e.parentSpanId;
  if (`parentSpanContext` in e) return e.parentSpanContext?.spanId;
}
function Ay(e) {
  let t = e;
  return !!t.attributes && typeof t.attributes == `object`;
}
function jy(e) {
  return typeof e.kind == `number`;
}
function My(e) {
  return !!e.status;
}
function Ny(e) {
  return !!e.name;
}
function Py(e) {
  if (!Ay(e)) return {};
  let t = e.attributes[Y.ATTR_URL_FULL] || e.attributes[Y.SEMATTRS_HTTP_URL],
    n = {
      url: t,
      "http.method": e.attributes[Y.ATTR_HTTP_REQUEST_METHOD] || e.attributes[Y.SEMATTRS_HTTP_METHOD],
    };
  !n[`http.method`] && n.url && (n[`http.method`] = `GET`);
  try {
    if (typeof t == `string`) {
      let e = Eh(t);
      ((n.url = Oh(e)), e.search && (n[`http.query`] = e.search), e.hash && (n[`http.fragment`] = e.hash));
    }
  } catch {}
  return n;
}
function Fy(e) {
  return jy(e) ? e.kind : q.SpanKind.INTERNAL;
}
var Iy = `sentry-trace`,
  Ly = `baggage`,
  Ry = `sentry.dsc`,
  zy = `sentry.sampled_not_recording`,
  By = `sentry.url`,
  Vy = `sentry.sample_rand`,
  Hy = `sentry.sample_rate`,
  Uy = (0, q.createContextKey)(`sentry_scopes`),
  Wy = (0, q.createContextKey)(`sentry_fork_isolation_scope`),
  Gy = (0, q.createContextKey)(`sentry_fork_set_scope`),
  Ky = (0, q.createContextKey)(`sentry_fork_set_isolation_scope`),
  qy = `_scopeContext`;
function Jy(e) {
  return e.getValue(Uy);
}
function Yy(e, t) {
  return e.setValue(Uy, t);
}
function Xy(e, t) {
  Kl(e, qy, t);
}
function Zy(e) {
  return e[qy];
}
function Qy(e) {
  let { traceFlags: t, traceState: n } = e,
    r = n ? n.get(zy) === `1` : !1;
  if (t === q.TraceFlags.SAMPLED) return !0;
  if (r) return !1;
  let i = n ? n.get(Ry) : void 0,
    a = i ? fd(i) : void 0;
  if (a?.sampled === `true`) return !0;
  if (a?.sampled === `false`) return !1;
}
function $y(e, t, n) {
  let r = t[Y.ATTR_HTTP_REQUEST_METHOD] || t[Y.SEMATTRS_HTTP_METHOD];
  if (r) return nb({ attributes: t, name: e, kind: n }, r);
  let i = t[Y.SEMATTRS_DB_SYSTEM],
    a = typeof t[`sentry.op`] == `string` && t[`sentry.op`].startsWith(`cache.`);
  if (i && !a) return tb({ attributes: t, name: e });
  let o = t[`sentry.source`] === `custom` ? `custom` : `route`;
  if (t[Y.SEMATTRS_RPC_SERVICE]) return { ...ab(e, t, `route`), op: `rpc` };
  if (t[Y.SEMATTRS_MESSAGING_SYSTEM]) return { ...ab(e, t, o), op: `message` };
  let s = t[Y.SEMATTRS_FAAS_TRIGGER];
  return s ? { ...ab(e, t, o), op: s.toString() } : { op: void 0, description: e, source: `custom` };
}
function eb(e) {
  let t = Ay(e) ? e.attributes : {};
  return $y(Ny(e) ? e.name : `<unknown>`, t, Fy(e));
}
function tb({ attributes: e, name: t }) {
  let n = e[$u];
  if (typeof n == `string`) return { op: `db`, description: n, source: e[`sentry.source`] || `custom` };
  if (e[`sentry.source`] === `custom`) return { op: `db`, description: t, source: `custom` };
  let r = e[Y.SEMATTRS_DB_STATEMENT];
  return { op: `db`, description: r ? r.toString() : t, source: `task` };
}
function nb({ name: e, kind: t, attributes: n }, r) {
  let i = [`http`];
  switch (t) {
    case q.SpanKind.CLIENT:
      i.push(`client`);
      break;
    case q.SpanKind.SERVER:
      i.push(`server`);
  }
  n[`sentry.http.prefetch`] && i.push(`prefetch`);
  let { urlPath: a, url: o, query: s, fragment: c, hasRoute: l } = ib(n, t);
  if (!a) return { ...ab(e, n), op: i.join(`.`) };
  let u = n[Oy],
    d = `${r} ${a}`,
    f = u ? `${d} (${rb(u)})` : d,
    p = l || a === `/` ? `route` : `url`,
    m = {};
  (o && (m.url = o), s && (m[`http.query`] = s), c && (m[`http.fragment`] = c));
  let h = t === q.SpanKind.CLIENT || t === q.SpanKind.SERVER,
    g = !`${n[`sentry.origin`] || `manual`}`.startsWith(`auto`),
    _ = n[qu] === `custom`,
    v = n[$u],
    { description: y, source: b } = !_ && v == null && (h || !g) ? { description: f, source: p } : ab(e, n);
  return { op: i.join(`.`), description: y, source: b, data: m };
}
function rb(e) {
  if (Array.isArray(e)) {
    let t = e.slice().sort();
    return t.length <= 5 ? t.join(`, `) : `${t.slice(0, 5).join(`, `)}, +${t.length - 5}`;
  }
  return `${e}`;
}
function ib(e, t) {
  let n = e[Y.SEMATTRS_HTTP_TARGET],
    r = e[Y.SEMATTRS_HTTP_URL] || e[Y.ATTR_URL_FULL],
    i = e[Y.ATTR_HTTP_ROUTE],
    a = typeof r == `string` ? Eh(r) : void 0,
    o = a ? Oh(a) : void 0,
    s = a?.search || void 0,
    c = a?.hash || void 0;
  return typeof i == `string`
    ? { urlPath: i, url: o, query: s, fragment: c, hasRoute: !0 }
    : t === q.SpanKind.SERVER && typeof n == `string`
      ? { urlPath: Dh(n), url: o, query: s, fragment: c, hasRoute: !1 }
      : a
        ? { urlPath: o, url: o, query: s, fragment: c, hasRoute: !1 }
        : typeof n == `string`
          ? { urlPath: Dh(n), url: o, query: s, fragment: c, hasRoute: !1 }
          : { urlPath: void 0, url: o, query: s, fragment: c, hasRoute: !1 };
}
function ab(e, t, n = `custom`) {
  let r = t[`sentry.source`] || n,
    i = t[$u];
  return i && typeof i == `string` ? { description: i, source: r } : { description: e, source: r };
}
function ob() {
  return q.trace.getActiveSpan();
}
var sb = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__;
function cb({ dsc: e, sampled: t }) {
  let n = e ? pd(e) : void 0,
    r = new ka(),
    i = n ? r.set(Ry, n) : r;
  return t === !1 ? i.set(zy, `1`) : i;
}
var lb = new Set();
function ub(e) {
  lb.add(e);
}
var db = class extends ni {
    constructor() {
      (super(), ub(`SentryPropagator`), (this._urlMatchesTargetsMap = new Ng(100)));
    }
    inject(e, t, n) {
      if (Hr(e)) {
        sb && z.log(`[Tracing] Not injecting trace data for url because tracing is suppressed.`);
        return;
      }
      let r = q.trace.getSpan(e),
        i = r && yb(r),
        a = H()?.getOptions()?.tracePropagationTargets;
      if (!pb(i, a, this._urlMatchesTargetsMap)) {
        sb &&
          z.log(
            `[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:`,
            i,
          );
        return;
      }
      let o = vb(t),
        s = q.propagation.getBaggage(e) || q.propagation.createBaggage({}),
        { dynamicSamplingContext: c, traceId: l, spanId: u, sampled: d } = mb(e);
      if (o) {
        let e = md(o);
        e &&
          Object.entries(e).forEach(([e, t]) => {
            s = s.setEntry(e, { value: t });
          });
      }
      (c && (s = Object.entries(c).reduce((e, [t, n]) => (n ? e.setEntry(`${ud}${t}`, { value: n }) : e), s)),
        l && l !== q.INVALID_TRACEID && n.set(t, Iy, jd(l, u, d)),
        super.inject(q.propagation.setBaggage(e, s), t, n));
    }
    extract(e, t, n) {
      let r = n.get(t, Iy),
        i = n.get(t, Ly);
      return _b(hb(e, { sentryTrace: r ? (Array.isArray(r) ? r[0] : r) : void 0, baggage: i }));
    }
    fields() {
      return [Iy, Ly];
    }
  },
  fb = `[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:`;
function pb(e, t, n) {
  if (typeof e != `string` || !t) return !0;
  let r = n?.get(e);
  if (r !== void 0) return (sb && !r && z.log(fb, e), r);
  let i = ru(e, t);
  return (n?.set(e, i), sb && !i && z.log(fb, e), i);
}
function mb(e, t = {}) {
  let n = q.trace.getSpan(e);
  if (n?.spanContext().isRemote) {
    let e = n.spanContext();
    return { dynamicSamplingContext: pf(n), traceId: e.traceId, spanId: void 0, sampled: Qy(e) };
  }
  if (n) {
    let e = n.spanContext();
    return { dynamicSamplingContext: pf(n), traceId: e.traceId, spanId: e.spanId, sampled: Qy(e) };
  }
  let r = t.scope || Jy(e)?.scope || B(),
    i = t.client || H(),
    a = r.getPropagationContext();
  return {
    dynamicSamplingContext: i ? ff(i, r) : void 0,
    traceId: a.traceId,
    spanId: a.propagationSpanId,
    sampled: a.sampled,
  };
}
function hb(e, { sentryTrace: t, baggage: n }) {
  let { traceId: r, parentSpanId: i, sampled: a, dsc: o } = Ad(t, n),
    s = H(),
    c = fd(n);
  if (!i || (s && !Pd(s, c?.org_id))) return e;
  let l = bb({ traceId: r, spanId: i, sampled: a, dsc: o });
  return q.trace.setSpanContext(e, l);
}
function gb(e, t, n) {
  let r = _b(hb(e, t));
  return q.context.with(r, n);
}
function _b(e) {
  let t = Jy(e);
  return Yy(e, { scope: t ? t.scope : B().clone(), isolationScope: t ? t.isolationScope : V() });
}
function vb(e) {
  try {
    let t = e[Ly];
    return Array.isArray(t) ? t.join(`,`) : t;
  } catch {
    return;
  }
}
function yb(e) {
  let t = U(e).data,
    n = t[Y.SEMATTRS_HTTP_URL] || t[Y.ATTR_URL_FULL];
  if (typeof n == `string`) return n;
  let r = e.spanContext().traceState?.get(By);
  if (r) return r;
}
function bb({ spanId: e, traceId: t, sampled: n, dsc: r }) {
  let i = cb({ dsc: r, sampled: n });
  return {
    traceId: t,
    spanId: e,
    isRemote: !0,
    traceFlags: n ? q.TraceFlags.SAMPLED : q.TraceFlags.NONE,
    traceState: i,
  };
}
function xb(e, t, n) {
  let r = Eb(),
    { name: i, parentSpan: a } = e;
  return Nb(a)(() => {
    let a = kb(e.scope, e.forceTransaction),
      o = e.onlyIfParent && !q.trace.getSpan(a) ? Br(a) : a,
      s = Db(e);
    if (!nf()) {
      let e = Hr(o) ? o : Br(o);
      return q.context.with(e, () =>
        r.startActiveSpan(i, s, e, (e) =>
          q.context.with(a, () =>
            Qf(
              () => t(e),
              () => {
                U(e).status === void 0 && e.setStatus({ code: q.SpanStatusCode.ERROR });
              },
              n ? () => e.end() : void 0,
            ),
          ),
        ),
      );
    }
    return r.startActiveSpan(i, s, o, (e) =>
      Qf(
        () => t(e),
        () => {
          U(e).status === void 0 && e.setStatus({ code: q.SpanStatusCode.ERROR });
        },
        n ? () => e.end() : void 0,
      ),
    );
  });
}
function Sb(e, t) {
  return xb(e, t, !0);
}
function Cb(e, t) {
  return xb(e, (e) => t(e, () => e.end()), !1);
}
function wb(e) {
  let t = Eb(),
    { name: n, parentSpan: r } = e;
  return Nb(r)(() => {
    let r = kb(e.scope, e.forceTransaction),
      i = e.onlyIfParent && !q.trace.getSpan(r) ? Br(r) : r,
      a = Db(e);
    return (nf() || (i = Hr(i) ? i : Br(i)), t.startSpan(n, a, i));
  });
}
function Tb(e, t) {
  let n = e ? q.trace.setSpan(q.context.active(), e) : q.trace.deleteSpan(q.context.active());
  return q.context.with(n, () => t(B()));
}
function Eb() {
  return H()?.tracer || q.trace.getTracer(`@sentry/opentelemetry`, `10.29.0`);
}
function Db(e) {
  let { startTime: t, attributes: n, kind: r, op: i, links: a } = e,
    o = typeof t == `number` ? Ob(t) : t;
  return { attributes: i ? { [Yu]: i, ...n } : n, kind: r, links: a, startTime: o };
}
function Ob(e) {
  return e < 9999999999 ? e * 1e3 : e;
}
function kb(e, t) {
  let n = Ab(e),
    r = q.trace.getSpan(n);
  if (!r || !t) return n;
  let i = q.trace.deleteSpan(n),
    { spanId: a, traceId: o } = r.spanContext(),
    s = Qy(r.spanContext()),
    c = cb({ dsc: pf(Zd(r)), sampled: s }),
    l = {
      traceId: o,
      spanId: a,
      isRemote: !0,
      traceFlags: s ? q.TraceFlags.SAMPLED : q.TraceFlags.NONE,
      traceState: c,
    };
  return q.trace.setSpanContext(i, l);
}
function Ab(e) {
  if (e) {
    let t = Zy(e);
    if (t) return t;
  }
  return q.context.active();
}
function jb(e, t) {
  return gb(q.context.active(), e, t);
}
function Mb(e, t) {
  let n = Zy(t),
    r = n && q.trace.getSpan(n),
    i = r ? Ld(r) : Ku(t);
  return [r ? pf(r) : ff(e, t), i];
}
function Nb(e) {
  return e === void 0 ? (e) => e() : (t) => Tb(e, t);
}
function Pb(e) {
  let t = Br(q.context.active());
  return q.context.with(t, e);
}
function Fb({ span: e, scope: t, client: n } = {}) {
  let r = (t && Zy(t)) ?? q.context.active();
  if (e) {
    let { scope: t } = ld(e);
    r = (t && Zy(t)) || q.trace.setSpan(q.context.active(), e);
  }
  let { traceId: i, spanId: a, sampled: o, dynamicSamplingContext: s } = mb(r, { scope: t, client: n });
  return { "sentry-trace": jd(i, a, o), baggage: pd(s) };
}
function Ib() {
  function e() {
    return Jy(q.context.active()) || { scope: Pu(), isolationScope: Fu() };
  }
  function t(e) {
    let t = q.context.active();
    return q.context.with(t, () => e(a()));
  }
  function n(e, t) {
    let n = Zy(e) || q.context.active();
    return q.context.with(n.setValue(Gy, e), () => t(e));
  }
  function r(e) {
    let t = q.context.active();
    return q.context.with(t.setValue(Wy, !0), () => e(o()));
  }
  function i(e, t) {
    let n = q.context.active();
    return q.context.with(n.setValue(Ky, e), () => t(o()));
  }
  function a() {
    return e().scope;
  }
  function o() {
    return e().isolationScope;
  }
  Hu({
    withScope: t,
    withSetScope: n,
    withSetIsolationScope: i,
    withIsolationScope: r,
    getCurrentScope: a,
    getIsolationScope: o,
    startSpan: Sb,
    startSpanManual: Cb,
    startInactiveSpan: wb,
    getActiveSpan: ob,
    suppressTracing: Pb,
    getTraceData: Fb,
    continueTrace: jb,
    withActiveSpan: Tb,
  });
}
function Lb(e) {
  class t extends e {
    constructor(...e) {
      (super(...e), ub(`SentryContextManager`));
    }
    with(e, t, n, ...r) {
      let i = Jy(e),
        a = i?.scope || B(),
        o = i?.isolationScope || V(),
        s = e.getValue(Wy) === !0,
        c = e.getValue(Gy),
        l = e.getValue(Ky),
        u = c || a.clone(),
        d = Yy(e, { scope: u, isolationScope: l || (s ? o.clone() : o) })
          .deleteValue(Wy)
          .deleteValue(Gy)
          .deleteValue(Ky);
      return (Xy(u, d), super.with(d, t, n, ...r));
    }
  }
  return t;
}
function Rb(e) {
  let t = new Map();
  for (let n of e) Bb(t, n);
  return Array.from(t, function ([e, t]) {
    return t;
  });
}
function zb(e) {
  return e.attributes[Dy] === !0 ? void 0 : ky(e);
}
function Bb(e, t) {
  let n = t.spanContext().spanId,
    r = zb(t);
  if (!r) {
    Hb(e, { id: n, span: t, children: [] });
    return;
  }
  let i = Vb(e, r),
    a = Hb(e, { id: n, span: t, parentNode: i, children: [] });
  i.children.push(a);
}
function Vb(e, t) {
  return e.get(t) || Hb(e, { id: t, children: [] });
}
function Hb(e, t) {
  let n = e.get(t.id);
  return n?.span
    ? n
    : n && !n.span
      ? ((n.span = t.span), (n.parentNode = t.parentNode), n)
      : (e.set(t.id, t), t);
}
var Ub = {
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
  Wb = (e) => Object.values(Ub).includes(e);
function Gb(e) {
  let t = Ay(e) ? e.attributes : {},
    n = My(e) ? e.status : void 0;
  if (n) {
    if (n.code === q.SpanStatusCode.OK) return { code: 1 };
    if (n.code === q.SpanStatusCode.ERROR) {
      if (n.message === void 0) {
        let e = Kb(t);
        if (e) return e;
      }
      return n.message && Wb(n.message)
        ? { code: 2, message: n.message }
        : { code: 2, message: `internal_error` };
    }
  }
  return Kb(t) || (n?.code === q.SpanStatusCode.UNSET ? { code: 1 } : { code: 2, message: `unknown_error` });
}
function Kb(e) {
  let t = e[Y.ATTR_HTTP_RESPONSE_STATUS_CODE] || e[Y.SEMATTRS_HTTP_STATUS_CODE],
    n = e[Y.SEMATTRS_RPC_GRPC_STATUS_CODE],
    r = typeof t == `number` ? t : typeof t == `string` ? parseInt(t) : void 0;
  if (typeof r == `number`) return nd(r);
  if (typeof n == `string`) return { code: 2, message: Ub[n] || `unknown_error` };
}
var qb = 1e3,
  Jb = 300,
  Yb = class {
    constructor(e) {
      ((this._finishedSpanBucketSize = e?.timeout || Jb),
        (this._finishedSpanBuckets = Array(this._finishedSpanBucketSize).fill(void 0)),
        (this._lastCleanupTimestampInS = Math.floor(Date.now() / 1e3)),
        (this._spansToBucketEntry = new WeakMap()),
        (this._sentSpans = new Map()),
        (this._debouncedFlush = Ih(this.flush.bind(this), 1, { maxWait: 100 })));
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
            sb &&
            z.log(
              `SpanExporter dropped ${e} spans because they were pending for more than ${this._finishedSpanBucketSize} seconds.`,
            ),
          (this._lastCleanupTimestampInS = t));
      }
      let n = t % this._finishedSpanBucketSize,
        r = this._finishedSpanBuckets[n] || { timestampInS: t, spans: new Set() };
      ((this._finishedSpanBuckets[n] = r), r.spans.add(e), this._spansToBucketEntry.set(e, r));
      let i = zb(e);
      (!i || this._sentSpans.has(i)) && this._debouncedFlush();
    }
    flush() {
      let e = this._finishedSpanBuckets.flatMap((e) => (e ? Array.from(e.spans) : []));
      this._flushSentSpanCache();
      let t = this._maybeSend(e),
        n = t.size,
        r = e.length - n;
      sb &&
        z.log(`SpanExporter exported ${n} spans, ${r} spans are waiting for their parent spans to finish`);
      let i = Date.now() + Jb * 1e3;
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
      let t = Rb(e),
        n = new Set(),
        r = this._getCompletedRootNodes(t);
      for (let e of r) {
        let t = e.span;
        n.add(t);
        let r = Zb(t);
        if (e.parentNode && this._sentSpans.has(e.parentNode.id)) {
          let e = r.contexts?.trace?.data;
          e && (e[`sentry.parent_span_already_sent`] = !0);
        }
        let i = r.spans || [];
        for (let t of e.children) Qb(t, i, n);
        r.spans = i.length > qb ? i.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, qb) : i;
        let a = Gf(t.events);
        (a && (r.measurements = a), Wp(r));
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
function Xb(e) {
  let t = e.attributes;
  return { origin: t[Xu], op: t[Yu], source: t[qu] };
}
function Zb(e) {
  let { op: t, description: n, data: r, origin: i = `manual`, source: a } = $b(e),
    o = ld(e),
    s = e.attributes[Ju],
    c = { [qu]: a, [Ju]: s, [Yu]: t, [Xu]: i, ...r, ...ex(e.attributes) },
    { links: l } = e,
    { traceId: u, spanId: d } = e.spanContext(),
    f = {
      parent_span_id: ky(e),
      span_id: d,
      trace_id: u,
      data: c,
      origin: i,
      op: t,
      status: Kd(Gb(e)),
      links: Bd(l),
    },
    p = c[Y.ATTR_HTTP_RESPONSE_STATUS_CODE],
    m = typeof p == `number` ? { response: { status_code: p } } : void 0;
  return {
    contexts: { trace: f, otel: { resource: e.resource.attributes }, ...m },
    spans: [],
    start_timestamp: Vd(e.startTime),
    timestamp: Vd(e.endTime),
    transaction: n,
    type: `transaction`,
    sdkProcessingMetadata: {
      capturedSpanScope: o.scope,
      capturedSpanIsolationScope: o.isolationScope,
      sampleRate: s,
      dynamicSamplingContext: pf(e),
    },
    ...(a && { transaction_info: { source: a } }),
  };
}
function Qb(e, t, n) {
  let r = e.span;
  if ((r && n.add(r), !r)) {
    e.children.forEach((e) => {
      Qb(e, t, n);
    });
    return;
  }
  let i = r.spanContext().spanId,
    a = r.spanContext().traceId,
    o = ky(r),
    { attributes: s, startTime: c, endTime: l, links: u } = r,
    { op: d, description: f, data: p, origin: m = `manual` } = $b(r),
    h = { [Xu]: m, [Yu]: d, ...ex(s), ...p },
    g = Gb(r),
    _ = {
      span_id: i,
      trace_id: a,
      data: h,
      description: f,
      parent_span_id: o,
      start_timestamp: Vd(c),
      timestamp: Vd(l) || void 0,
      status: Kd(g),
      op: d,
      origin: m,
      measurements: Gf(r.events),
      links: Bd(u),
    };
  (t.push(_),
    e.children.forEach((e) => {
      Qb(e, t, n);
    }));
}
function $b(e) {
  let { op: t, source: n, origin: r } = Xb(e),
    { op: i, description: a, source: o, data: s } = eb(e);
  return { op: t || i, description: a, source: n || o, origin: r, data: { ...s, ...tx(e) } };
}
function ex(e) {
  let t = { ...e };
  return (delete t[Ju], delete t[Dy], delete t[$u], t);
}
function tx(e) {
  let t = e.attributes,
    n = {};
  e.kind !== q.SpanKind.INTERNAL && (n[`otel.kind`] = q.SpanKind[e.kind]);
  let r = t[Y.SEMATTRS_HTTP_STATUS_CODE];
  r && (n[Y.ATTR_HTTP_RESPONSE_STATUS_CODE] = r);
  let i = Py(e);
  return (
    i.url && (n.url = i.url),
    i[`http.query`] && (n[`http.query`] = i[`http.query`].slice(1)),
    i[`http.fragment`] && (n[`http.fragment`] = i[`http.fragment`].slice(1)),
    n
  );
}
function nx(e, t) {
  let n = q.trace.getSpan(t),
    r = Jy(t);
  (n && !n.spanContext().isRemote && Yd(n, e),
    n?.spanContext().isRemote && e.setAttribute(Dy, !0),
    t === q.ROOT_CONTEXT && (r = { scope: Pu(), isolationScope: Fu() }),
    r && cd(e, r.scope, r.isolationScope),
    Uf(e),
    H()?.emit(`spanStart`, e));
}
function rx(e) {
  (Wf(e), H()?.emit(`spanEnd`, e));
}
var ix = class {
    constructor(e) {
      (ub(`SentrySpanProcessor`), (this._exporter = new Yb(e)));
    }
    async forceFlush() {
      this._exporter.flush();
    }
    async shutdown() {
      this._exporter.clear();
    }
    onStart(e, t) {
      nx(e, t);
    }
    onEnd(e) {
      (rx(e), this._exporter.export(e));
    }
  },
  ax = class {
    constructor(e) {
      ((this._client = e), ub(`SentrySampler`));
    }
    shouldSample(e, t, n, r, i, a) {
      let o = this._client.getOptions(),
        s = lx(e),
        c = s?.spanContext();
      if (!nf(o)) return sx({ decision: void 0, context: e, spanAttributes: i });
      let l = i[Y.SEMATTRS_HTTP_METHOD] || i[Y.ATTR_HTTP_REQUEST_METHOD];
      if (r === q.SpanKind.CLIENT && l && (!s || c?.isRemote))
        return sx({ decision: void 0, context: e, spanAttributes: i });
      let u = s ? ox(s, t, n) : void 0;
      if (s && !c?.isRemote)
        return sx({ decision: u ? oy.RECORD_AND_SAMPLED : oy.NOT_RECORD, context: e, spanAttributes: i });
      let { description: d, data: f, op: p } = $y(n, i, r),
        m = { ...f, ...i };
      p && (m[Yu] = p);
      let h = { decision: !0 };
      if (
        (this._client.emit(
          `beforeSampling`,
          { spanAttributes: m, spanName: d, parentSampled: u, parentContext: c },
          h,
        ),
        !h.decision)
      )
        return sx({ decision: void 0, context: e, spanAttributes: i });
      let { isolationScope: g } = Jy(e) ?? {},
        _ = c?.traceState ? c.traceState.get(Ry) : void 0,
        v = _ ? fd(_) : void 0,
        y = Dd(v?.sample_rand) ?? Math.random(),
        [b, x, S] = ep(
          o,
          {
            name: d,
            attributes: m,
            normalizedRequest: g?.getScopeData().sdkProcessingMetadata.normalizedRequest,
            parentSampled: u,
            parentSampleRate: Dd(v?.sample_rate),
          },
          y,
        ),
        C = `${l}`.toUpperCase();
      return C === `OPTIONS` || C === `HEAD`
        ? (sb && z.log(`[Tracing] Not sampling span because HTTP method is '${C}' for ${n}`),
          sx({
            decision: oy.NOT_RECORD,
            context: e,
            spanAttributes: i,
            sampleRand: y,
            downstreamTraceSampleRate: 0,
          }))
        : (!b &&
            u === void 0 &&
            (sb && z.log(`[Tracing] Discarding root span because its trace was not chosen to be sampled.`),
            this._client.recordDroppedEvent(`sample_rate`, `transaction`)),
          {
            ...sx({
              decision: b ? oy.RECORD_AND_SAMPLED : oy.NOT_RECORD,
              context: e,
              spanAttributes: i,
              sampleRand: y,
              downstreamTraceSampleRate: S ? x : void 0,
            }),
            attributes: { [Ju]: S ? x : void 0 },
          });
    }
    toString() {
      return `SentrySampler`;
    }
  };
function ox(e, t, n) {
  let r = e.spanContext();
  if ((0, q.isSpanContextValid)(r) && r.traceId === t) {
    if (r.isRemote) {
      let t = Qy(e.spanContext());
      return (sb && z.log(`[Tracing] Inheriting remote parent's sampled decision for ${n}: ${t}`), t);
    }
    let t = Qy(r);
    return (sb && z.log(`[Tracing] Inheriting parent's sampled decision for ${n}: ${t}`), t);
  }
}
function sx({ decision: e, context: t, spanAttributes: n, sampleRand: r, downstreamTraceSampleRate: i }) {
  let a = cx(t, n);
  return (
    i !== void 0 && (a = a.set(Hy, `${i}`)),
    r !== void 0 && (a = a.set(Vy, `${r}`)),
    e == null
      ? { decision: oy.NOT_RECORD, traceState: a }
      : e === oy.NOT_RECORD
        ? { decision: e, traceState: a.set(zy, `1`) }
        : { decision: e, traceState: a }
  );
}
function cx(e, t) {
  let n = q.trace.getSpan(e)?.spanContext()?.traceState || new ka(),
    r = t[Y.SEMATTRS_HTTP_URL] || t[Y.ATTR_URL_FULL];
  return (r && typeof r == `string` && (n = n.set(By, r)), n);
}
function lx(e) {
  let t = q.trace.getSpan(e);
  return t && (0, q.isSpanContextValid)(t.spanContext()) ? t : void 0;
}
function ux(e, t) {
  if (!e) return t;
  let n = md(e),
    r = md(t);
  if (!r) return e;
  let i = { ...n };
  return (
    Object.entries(r).forEach(([e, t]) => {
      i[e] || (i[e] = t);
    }),
    gd(i)
  );
}
var dx = mu(process.versions.node),
  fx = dx.major,
  px = dx.minor;
zo();
var mx = `sentry-trace`,
  hx = `baggage`,
  gx = /baggage: (.*)\r\n/,
  _x = class extends Pv {
    constructor(e = {}) {
      (super(`@sentry/instrumentation-node-fetch`, Uc, e),
        (this._channelSubs = []),
        (this._propagationDecisionMap = new Ng(100)),
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
      let n = bx(e.origin, e.path),
        r = H()?.getOptions().tracePropagationTargets,
        i = pb(n, r, this._propagationDecisionMap) ? Nh() : void 0;
      if (!i) return;
      let { "sentry-trace": a, baggage: o } = i;
      if (Array.isArray(e.headers)) {
        let t = e.headers;
        a && !t.includes(mx) && t.push(mx, a);
        let n = t.findIndex((e) => e === hx);
        if (o && n === -1) t.push(hx, o);
        else if (o) {
          let e = t[n + 1],
            r = ux(e, o);
          r && (t[n + 1] = r);
        }
      } else {
        let t = e.headers;
        a && !t.includes(`${mx}:`) && (e.headers += `${mx}: ${a}\r\n`);
        let n = e.headers.match(gx)?.[1];
        if (o && !n) e.headers += `${hx}: ${o}\r\n`;
        else if (o) {
          let t = ux(n, o);
          t && (e.headers = e.headers.replace(gx, `baggage: ${t}\r\n`));
        }
      }
    }
    _onResponseHeaders({ request: e, response: t }) {
      let n = this.getConfig();
      if (n.enabled === !1) return;
      let r = n.breadcrumbs,
        i = r === void 0 || r,
        a = this._ignoreOutgoingRequestsMap.get(e);
      i && !a && vx(e, t);
    }
    _subscribeToChannel(e, t) {
      let n = fx > 18 || (fx === 18 && px >= 19),
        r;
      if (n) (k.subscribe?.(e, t), (r = () => k.unsubscribe?.(e, t)));
      else {
        let n = k.channel(e);
        (n.subscribe(t), (r = () => n.unsubscribe(t)));
      }
      this._channelSubs.push({ name: e, unsubscribe: r });
    }
    _shouldIgnoreOutgoingRequest(e) {
      if (Hr(q.context.active())) return !0;
      let t = bx(e.origin, e.path),
        n = this.getConfig().ignoreOutgoingRequests;
      return typeof n != `function` || !t ? !1 : n(t);
    }
  };
function vx(e, t) {
  let n = yx(e),
    r = t.statusCode,
    i = Dg(r);
  Rh(
    { category: `http`, data: { status_code: r, ...n }, type: `http`, level: i },
    { event: `response`, request: e, response: t },
  );
}
function yx(e) {
  try {
    let t = Eh(bx(e.origin, e.path)),
      n = { url: Oh(t), "http.method": e.method || `GET` };
    return (t.search && (n[`http.query`] = t.search), t.hash && (n[`http.fragment`] = t.hash), n);
  } catch {
    return {};
  }
}
function bx(e, t = `/`) {
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
var xx = (0, m.promisify)(h.readFile),
  Sx = (0, m.promisify)(h.readdir),
  Cx = `Context`,
  wx = W((e = {}) => {
    let t,
      n = { app: !0, os: !0, device: !0, culture: !0, cloudResource: !0, ...e };
    async function r(e) {
      t === void 0 && (t = i());
      let n = Tx(await t);
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
        (n.os && (e.os = await Ex()),
        n.app && (e.app = Ox()),
        n.device && (e.device = kx(n.device)),
        n.culture)
      ) {
        let t = Dx();
        t && (e.culture = t);
      }
      return (n.cloudResource && (e.cloud_resource = Lx()), e);
    }
    return {
      name: Cx,
      processEvent(e) {
        return r(e);
      },
    };
  });
function Tx(e) {
  if (
    (e.app?.app_memory && (e.app.app_memory = process.memoryUsage().rss),
    e.app?.free_memory && typeof process.availableMemory == `function`)
  ) {
    let t = process.availableMemory?.();
    t != null && (e.app.free_memory = t);
  }
  return (e.device?.free_memory && (e.device.free_memory = _.freemem()), e);
}
async function Ex() {
  let e = _.platform();
  switch (e) {
    case `darwin`:
      return Px();
    case `linux`:
      return Ix();
    default:
      return { name: Ax[e] || e, version: _.release() };
  }
}
function Dx() {
  try {
    if (typeof process.versions.icu != `string`) return;
    let e = new Date(9e8);
    if (new Intl.DateTimeFormat(`es`, { month: `long` }).format(e) === `enero`) {
      let e = Intl.DateTimeFormat().resolvedOptions();
      return { locale: e.locale, timezone: e.timeZone };
    }
  } catch {}
}
function Ox() {
  let e = process.memoryUsage().rss,
    t = { app_start_time: new Date(Date.now() - process.uptime() * 1e3).toISOString(), app_memory: e };
  if (typeof process.availableMemory == `function`) {
    let e = process.availableMemory?.();
    e != null && (t.free_memory = e);
  }
  return t;
}
function kx(e) {
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
var Ax = {
    aix: `IBM AIX`,
    freebsd: `FreeBSD`,
    openbsd: `OpenBSD`,
    sunos: `SunOS`,
    win32: `Windows`,
    ohos: `OpenHarmony`,
    android: `Android`,
  },
  jx = [
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
  Mx = {
    alpine: (e) => e,
    arch: (e) => Nx(/distrib_release=(.*)/, e),
    centos: (e) => Nx(/release ([^ ]+)/, e),
    debian: (e) => e,
    fedora: (e) => Nx(/release (..)/, e),
    mint: (e) => Nx(/distrib_release=(.*)/, e),
    red: (e) => Nx(/release ([^ ]+)/, e),
    suse: (e) => Nx(/VERSION = (.*)\n/, e),
    ubuntu: (e) => Nx(/distrib_release=(.*)/, e),
  };
function Nx(e, t) {
  let n = e.exec(t);
  return n ? n[1] : void 0;
}
async function Px() {
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
    ((e.name = Nx(/^ProductName:\s+(.*)$/m, t)),
      (e.version = Nx(/^ProductVersion:\s+(.*)$/m, t)),
      (e.build = Nx(/^BuildVersion:\s+(.*)$/m, t)));
  } catch {}
  return e;
}
function Fx(e) {
  return e.split(` `)[0].toLowerCase();
}
async function Ix() {
  let e = { kernel_version: _.release(), name: `Linux` };
  try {
    let t = await Sx(`/etc`),
      n = jx.find((e) => t.includes(e.name));
    if (!n) return e;
    let r = (await xx((0, g.join)(`/etc`, n.name), { encoding: `utf-8` })).toLowerCase(),
      { distros: i } = n;
    ((e.name = i.find((e) => r.indexOf(Fx(e)) >= 0) || i[0]), (e.version = Mx[Fx(e.name)]?.(r)));
  } catch {}
  return e;
}
function Lx() {
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
var Rx = new Ng(10),
  zx = new Ng(20),
  Bx = 7,
  Vx = `ContextLines`;
function Hx(e, t, n) {
  let r = e.get(t);
  return r === void 0 ? (e.set(t, n), n) : r;
}
function Ux(e) {
  return !!(
    e.startsWith(`node:`) ||
    e.endsWith(`.min.js`) ||
    e.endsWith(`.min.cjs`) ||
    e.endsWith(`.min.mjs`) ||
    e.startsWith(`data:`)
  );
}
function Wx(e) {
  return (e.lineno !== void 0 && e.lineno > 1e4) || (e.colno !== void 0 && e.colno > 1e3);
}
function Gx(e, t) {
  let n = Rx.get(e);
  if (n === void 0) return !1;
  for (let e = t[0]; e <= t[1]; e++) if (n[e] === void 0) return !1;
  return !0;
}
function Kx(e, t) {
  if (!e.length) return [];
  let n = 0,
    r = e[0];
  if (typeof r != `number`) return [];
  let i = eS(r, t),
    a = [];
  for (;;) {
    if (n === e.length - 1) {
      a.push(i);
      break;
    }
    let r = e[n + 1];
    if (typeof r != `number`) break;
    (r <= i[1] ? (i[1] = r + t) : (a.push(i), (i = eS(r, t))), n++);
  }
  return a;
}
function qx(e, t, n) {
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
      (zx.set(e, 1),
        Bv && z.error(`Failed to read file: ${e}. Error: ${t}`),
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
async function Jx(e, t) {
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
            Ux(i) ||
            Wx(r) ||
            (n[i] || (n[i] = []), n[i].push(r.lineno));
        }
  }
  let r = Object.keys(n);
  if (r.length == 0) return e;
  let i = [];
  for (let e of r) {
    if (zx.get(e)) continue;
    let r = n[e];
    if (!r) continue;
    r.sort((e, t) => e - t);
    let a = Kx(r, t);
    if (a.every((t) => Gx(e, t))) continue;
    let o = Hx(Rx, e, {});
    i.push(qx(e, a, o));
  }
  if (
    (await Promise.all(i).catch(() => {
      Bv && z.log(`Failed to read one or more source files and resolve context lines`);
    }),
    t > 0 && e.exception?.values)
  )
    for (let n of e.exception.values)
      n.stacktrace?.frames && n.stacktrace.frames.length > 0 && Yx(n.stacktrace.frames, t, Rx);
  return e;
}
function Yx(e, t, n) {
  for (let r of e)
    if (r.filename && r.context_line === void 0 && typeof r.lineno == `number`) {
      let e = n.get(r.filename);
      if (e === void 0) continue;
      Zx(r.lineno, r, t, e);
    }
}
function Xx(e) {
  (delete e.pre_context, delete e.context_line, delete e.post_context);
}
function Zx(e, t, n, r) {
  if (t.lineno === void 0 || r === void 0) {
    Bv && z.error(`Cannot resolve context for frame with no lineno or file contents`);
    return;
  }
  t.pre_context = [];
  for (let i = Qx(e, n); i < e; i++) {
    let e = r[i];
    if (e === void 0) {
      (Xx(t), Bv && z.error(`Could not find line ${i} in file ${t.filename}`));
      return;
    }
    t.pre_context.push(e);
  }
  if (r[e] === void 0) {
    (Xx(t), Bv && z.error(`Could not find line ${e} in file ${t.filename}`));
    return;
  }
  t.context_line = r[e];
  let i = $x(e, n);
  t.post_context = [];
  for (let n = e + 1; n <= i; n++) {
    let e = r[n];
    if (e === void 0) break;
    t.post_context.push(e);
  }
}
function Qx(e, t) {
  return Math.max(1, e - t);
}
function $x(e, t) {
  return e + t;
}
function eS(e, t) {
  return [Qx(e, t), $x(e, t)];
}
var tS = W((e = {}) => {
    let t = e.frameContextLines === void 0 ? Bx : e.frameContextLines;
    return {
      name: Vx,
      processEvent(e) {
        return Jx(e, t);
      },
    };
  }),
  nS;
async function rS() {
  if (nS === void 0)
    try {
      nS = !!(await import(`node:inspector`)).url();
    } catch {
      nS = !1;
    }
  return nS;
}
var iS = `__SENTRY_ERROR_LOCAL_VARIABLES__`;
function aS(e, t, n) {
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
function oS(e) {
  return e !== void 0 && (e.length === 0 || e === `?` || e === `<anonymous>`);
}
function sS(e, t) {
  return e === t || `Object.${e}` === t || e === `Object.${t}` || (oS(e) && oS(t));
}
var cS = `LyohIEBzZW50cnkvbm9kZS1jb3JlIDEwLjI5LjAgKDM1MjlkNDYpIHwgaHR0cHM6Ly9naXRodWIuY29tL2dldHNlbnRyeS9zZW50cnktamF2YXNjcmlwdCAqLwppbXBvcnR7U2Vzc2lvbiBhcyBlfWZyb20ibm9kZTppbnNwZWN0b3IvcHJvbWlzZXMiO2ltcG9ydHt3b3JrZXJEYXRhIGFzIHR9ZnJvbSJub2RlOndvcmtlcl90aHJlYWRzIjtjb25zdCBuPWdsb2JhbFRoaXMsaT17fTtjb25zdCBvPSJfX1NFTlRSWV9FUlJPUl9MT0NBTF9WQVJJQUJMRVNfXyI7Y29uc3QgYT10O2Z1bmN0aW9uIHMoLi4uZSl7YS5kZWJ1ZyYmZnVuY3Rpb24oZSl7aWYoISgiY29uc29sZSJpbiBuKSlyZXR1cm4gZSgpO2NvbnN0IHQ9bi5jb25zb2xlLG89e30sYT1PYmplY3Qua2V5cyhpKTthLmZvckVhY2goZT0+e2NvbnN0IG49aVtlXTtvW2VdPXRbZV0sdFtlXT1ufSk7dHJ5e3JldHVybiBlKCl9ZmluYWxseXthLmZvckVhY2goZT0+e3RbZV09b1tlXX0pfX0oKCk9PmNvbnNvbGUubG9nKCJbTG9jYWxWYXJpYWJsZXMgV29ya2VyXSIsLi4uZSkpfWFzeW5jIGZ1bmN0aW9uIGMoZSx0LG4saSl7Y29uc3Qgbz1hd2FpdCBlLnBvc3QoIlJ1bnRpbWUuZ2V0UHJvcGVydGllcyIse29iamVjdElkOnQsb3duUHJvcGVydGllczohMH0pO2lbbl09by5yZXN1bHQuZmlsdGVyKGU9PiJsZW5ndGgiIT09ZS5uYW1lJiYhaXNOYU4ocGFyc2VJbnQoZS5uYW1lLDEwKSkpLnNvcnQoKGUsdCk9PnBhcnNlSW50KGUubmFtZSwxMCktcGFyc2VJbnQodC5uYW1lLDEwKSkubWFwKGU9PmUudmFsdWU/LnZhbHVlKX1hc3luYyBmdW5jdGlvbiByKGUsdCxuLGkpe2NvbnN0IG89YXdhaXQgZS5wb3N0KCJSdW50aW1lLmdldFByb3BlcnRpZXMiLHtvYmplY3RJZDp0LG93blByb3BlcnRpZXM6ITB9KTtpW25dPW8ucmVzdWx0Lm1hcChlPT5bZS5uYW1lLGUudmFsdWU/LnZhbHVlXSkucmVkdWNlKChlLFt0LG5dKT0+KGVbdF09bixlKSx7fSl9ZnVuY3Rpb24gdShlLHQpe2UudmFsdWUmJigidmFsdWUiaW4gZS52YWx1ZT92b2lkIDA9PT1lLnZhbHVlLnZhbHVlfHxudWxsPT09ZS52YWx1ZS52YWx1ZT90W2UubmFtZV09YDwke2UudmFsdWUudmFsdWV9PmA6dFtlLm5hbWVdPWUudmFsdWUudmFsdWU6ImRlc2NyaXB0aW9uImluIGUudmFsdWUmJiJmdW5jdGlvbiIhPT1lLnZhbHVlLnR5cGU/dFtlLm5hbWVdPWA8JHtlLnZhbHVlLmRlc2NyaXB0aW9ufT5gOiJ1bmRlZmluZWQiPT09ZS52YWx1ZS50eXBlJiYodFtlLm5hbWVdPSI8dW5kZWZpbmVkPiIpKX1hc3luYyBmdW5jdGlvbiBsKGUsdCl7Y29uc3Qgbj1hd2FpdCBlLnBvc3QoIlJ1bnRpbWUuZ2V0UHJvcGVydGllcyIse29iamVjdElkOnQsb3duUHJvcGVydGllczohMH0pLGk9e307Zm9yKGNvbnN0IHQgb2Ygbi5yZXN1bHQpaWYodC52YWx1ZT8ub2JqZWN0SWQmJiJBcnJheSI9PT10LnZhbHVlLmNsYXNzTmFtZSl7Y29uc3Qgbj10LnZhbHVlLm9iamVjdElkO2F3YWl0IGMoZSxuLHQubmFtZSxpKX1lbHNlIGlmKHQudmFsdWU/Lm9iamVjdElkJiYiT2JqZWN0Ij09PXQudmFsdWUuY2xhc3NOYW1lKXtjb25zdCBuPXQudmFsdWUub2JqZWN0SWQ7YXdhaXQgcihlLG4sdC5uYW1lLGkpfWVsc2UgdC52YWx1ZSYmdSh0LGkpO3JldHVybiBpfWxldCBmOyhhc3luYyBmdW5jdGlvbigpe2NvbnN0IHQ9bmV3IGU7dC5jb25uZWN0VG9NYWluVGhyZWFkKCkscygiQ29ubmVjdGVkIHRvIG1haW4gdGhyZWFkIik7bGV0IG49ITE7dC5vbigiRGVidWdnZXIucmVzdW1lZCIsKCk9PntuPSExfSksdC5vbigiRGVidWdnZXIucGF1c2VkIixlPT57bj0hMCxhc3luYyBmdW5jdGlvbihlLHtyZWFzb246dCxkYXRhOntvYmplY3RJZDpufSxjYWxsRnJhbWVzOml9KXtpZigiZXhjZXB0aW9uIiE9PXQmJiJwcm9taXNlUmVqZWN0aW9uIiE9PXQpcmV0dXJuO2lmKGY/LigpLG51bGw9PW4pcmV0dXJuO2NvbnN0IGE9W107Zm9yKGxldCB0PTA7dDxpLmxlbmd0aDt0Kyspe2NvbnN0e3Njb3BlQ2hhaW46bixmdW5jdGlvbk5hbWU6byx0aGlzOnN9PWlbdF0sYz1uLmZpbmQoZT0+ImxvY2FsIj09PWUudHlwZSkscj0iZ2xvYmFsIiE9PXMuY2xhc3NOYW1lJiZzLmNsYXNzTmFtZT9gJHtzLmNsYXNzTmFtZX0uJHtvfWA6bztpZih2b2lkIDA9PT1jPy5vYmplY3Qub2JqZWN0SWQpYVt0XT17ZnVuY3Rpb246cn07ZWxzZXtjb25zdCBuPWF3YWl0IGwoZSxjLm9iamVjdC5vYmplY3RJZCk7YVt0XT17ZnVuY3Rpb246cix2YXJzOm59fX1hd2FpdCBlLnBvc3QoIlJ1bnRpbWUuY2FsbEZ1bmN0aW9uT24iLHtmdW5jdGlvbkRlY2xhcmF0aW9uOmBmdW5jdGlvbigpIHsgdGhpcy4ke299ID0gdGhpcy4ke299IHx8ICR7SlNPTi5zdHJpbmdpZnkoYSl9OyB9YCxzaWxlbnQ6ITAsb2JqZWN0SWQ6bn0pLGF3YWl0IGUucG9zdCgiUnVudGltZS5yZWxlYXNlT2JqZWN0Iix7b2JqZWN0SWQ6bn0pfSh0LGUucGFyYW1zKS50aGVuKGFzeW5jKCk9PntuJiZhd2FpdCB0LnBvc3QoIkRlYnVnZ2VyLnJlc3VtZSIpfSxhc3luYyBlPT57biYmYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5yZXN1bWUiKX0pfSksYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5lbmFibGUiKTtjb25zdCBpPSExIT09YS5jYXB0dXJlQWxsRXhjZXB0aW9ucztpZihhd2FpdCB0LnBvc3QoIkRlYnVnZ2VyLnNldFBhdXNlT25FeGNlcHRpb25zIix7c3RhdGU6aT8iYWxsIjoidW5jYXVnaHQifSksaSl7Y29uc3QgZT1hLm1heEV4Y2VwdGlvbnNQZXJTZWNvbmR8fDUwO2Y9ZnVuY3Rpb24oZSx0LG4pe2xldCBpPTAsbz01LGE9MDtyZXR1cm4gc2V0SW50ZXJ2YWwoKCk9PnswPT09YT9pPmUmJihvKj0yLG4obyksbz44NjQwMCYmKG89ODY0MDApLGE9byk6KGEtPTEsMD09PWEmJnQoKSksaT0wfSwxZTMpLnVucmVmKCksKCk9PntpKz0xfX0oZSxhc3luYygpPT57cygiUmF0ZS1saW1pdCBsaWZ0ZWQuIiksYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5zZXRQYXVzZU9uRXhjZXB0aW9ucyIse3N0YXRlOiJhbGwifSl9LGFzeW5jIGU9PntzKGBSYXRlLWxpbWl0IGV4Y2VlZGVkLiBEaXNhYmxpbmcgY2FwdHVyaW5nIG9mIGNhdWdodCBleGNlcHRpb25zIGZvciAke2V9IHNlY29uZHMuYCksYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5zZXRQYXVzZU9uRXhjZXB0aW9ucyIse3N0YXRlOiJ1bmNhdWdodCJ9KX0pfX0pKCkuY2F0Y2goZT0+e3MoIkZhaWxlZCB0byBzdGFydCBkZWJ1Z2dlciIsZSl9KSxzZXRJbnRlcnZhbCgoKT0+e30sMWU0KTs=`;
function lS(...e) {
  z.log(`[LocalVariables]`, ...e);
}
var uS = W((e = {}) => {
  function t(t, n) {
    let r = (t.stacktrace?.frames || []).filter((e) => e.function !== `new Promise`);
    for (let t = 0; t < r.length; t++) {
      let i = r.length - t - 1,
        a = n[t],
        o = r[i];
      if (!o || !a) break;
      a.vars === void 0 ||
        (o.in_app === !1 && e.includeOutOfAppFrames !== !0) ||
        !sS(o.function, a.function) ||
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
      for (let r of e.exception?.values || []) t(r, n.originalException[iS]);
      n.originalException[iS] = void 0;
    }
    return e;
  }
  async function r() {
    let e = await import(`node:inspector`);
    e.url() || e.open(0);
  }
  function i(e) {
    let t = new v.Worker(new URL(`data:application/javascript;base64,${cS}`), {
      workerData: e,
      execArgv: [],
      env: { ...process.env, NODE_OPTIONS: void 0 },
    });
    (process.on(`exit`, () => {
      t.terminate();
    }),
      t.once(`error`, (e) => {
        lS(`Worker error`, e);
      }),
      t.once(`exit`, (e) => {
        lS(`Worker exit`, e);
      }),
      t.unref());
  }
  return {
    name: `LocalVariablesAsync`,
    async setup(t) {
      if (!t.getOptions().includeLocalVariables) return;
      if (await rS()) {
        z.warn(`Local variables capture has been disabled because the debugger was already enabled`);
        return;
      }
      let n = { ...e, debug: z.isEnabled() };
      r().then(
        () => {
          try {
            i(n);
          } catch (e) {
            z.error(`Failed to start worker`, e);
          }
        },
        (e) => {
          z.error(`Failed to start inspector`, e);
        },
      );
    },
    processEvent(e, t) {
      return n(e, t);
    },
  };
});
function dS(e) {
  if (e !== void 0) return e.slice(-10).reduce((e, t) => `${e},${t.function},${t.lineno},${t.colno}`, ``);
}
function fS(e, t) {
  if (t !== void 0) return dS(e(t, 1));
}
function pS(e) {
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
var mS = class e {
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
        let { add: n, next: r } = pS(t);
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
  hS = `LocalVariables`,
  gS = W((e = {}, t) => {
    let n = new Ng(20),
      r,
      i = !1;
    function a(t) {
      let r = dS(t.stacktrace?.frames);
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
          !sS(o.function, r.function) ||
          (o.vars = r.vars);
      }
    }
    function o(e) {
      for (let t of e.exception?.values || []) a(t);
      return e;
    }
    let s;
    async function c() {
      let a = H()?.getOptions();
      if (a?.includeLocalVariables) {
        if (fx < 18) {
          z.log("The `LocalVariables` integration is only supported on Node >= v18.");
          return;
        }
        if (await rS()) {
          z.warn(`Local variables capture has been disabled because the debugger was already enabled`);
          return;
        }
        try {
          let o = await mS.create(t),
            s = (e, { params: { reason: t, data: i, callFrames: a } }, s) => {
              if (t !== `exception` && t !== `promiseRejection`) {
                s();
                return;
              }
              r?.();
              let c = fS(e, i.description);
              if (c == null) {
                s();
                return;
              }
              let { add: l, next: u } = pS((e) => {
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
              (r = aS(
                e.maxExceptionsPerSecond || 50,
                () => {
                  (z.log(`Local variables rate-limit lifted.`), o.setPauseOnExceptions(!0));
                },
                (e) => {
                  (z.log(
                    `Local variables rate-limit exceeded. Disabling capturing of caught exceptions for ${e} seconds.`,
                  ),
                    o.setPauseOnExceptions(!1));
                },
              )),
            (i = !0));
        } catch (e) {
          z.log("The `LocalVariables` integration failed to start.", e);
        }
      }
    }
    return {
      name: hS,
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
  _S = (e = {}) => (dx.major < 19 ? gS(e) : uS(e)),
  vS = 2e3;
function yS(e) {
  Xc(() => {
    console.error(e);
  });
  let t = H();
  if (t === void 0) {
    (Bv && z.warn(`No NodeClient was defined, we are exiting the process now.`), global.process.exit(1));
    return;
  }
  let n = t.getOptions(),
    r = n?.shutdownTimeout && n.shutdownTimeout > 0 ? n.shutdownTimeout : vS;
  t.close(r).then(
    (e) => {
      (e || (Bv && z.warn(`We reached the timeout for emptying the request buffer, still exiting now!`)),
        global.process.exit(1));
    },
    (e) => {
      Bv && z.error(e);
    },
  );
}
var bS = `OnUnhandledRejection`,
  xS = [{ name: `AI_NoOutputGeneratedError` }],
  SS = W((e = {}) => {
    let t = { mode: e.mode ?? `warn`, ignore: [...xS, ...(e.ignore ?? [])] };
    return {
      name: bS,
      setup(e) {
        global.process.on(`unhandledRejection`, ES(e, t));
      },
    };
  });
function CS(e) {
  if (typeof e != `object` || !e) return { name: ``, message: String(e ?? ``) };
  let t = e;
  return {
    name: typeof t.name == `string` ? t.name : ``,
    message: typeof t.message == `string` ? t.message : String(e),
  };
}
function wS(e, t) {
  let n = e.name === void 0 || nu(t.name, e.name, !0),
    r = e.message === void 0 || nu(t.message, e.message);
  return n && r;
}
function TS(e, t) {
  let n = CS(t);
  return e.some((e) => wS(e, n));
}
function ES(e, t) {
  return function (n, r) {
    if (H() !== e || TS(t.ignore ?? [], n)) return;
    let i = t.mode === `strict` ? `fatal` : `error`,
      a = n && typeof n == `object` ? n._sentry_active_span : void 0;
    ((a ? (e) => rp(a, e) : (e) => e())(() => {
      Hp(n, {
        originalException: r,
        captureContext: { extra: { unhandledPromiseRejection: !0 }, level: i },
        mechanism: { handled: !1, type: `auto.node.onunhandledrejection` },
      });
    }),
      DS(n, t.mode));
  };
}
function DS(e, t) {
  let n = `This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason:`;
  t === `warn`
    ? Xc(() => {
        (console.warn(n), console.error(e && typeof e == `object` && `stack` in e ? e.stack : e));
      })
    : t === `strict` &&
      (Xc(() => {
        console.warn(n);
      }),
      yS(e));
}
var OS = `ChildProcess`,
  kS = W((e = {}) => ({
    name: OS,
    setup() {
      (O.channel(`child_process`).subscribe((t) => {
        t && typeof t == `object` && `process` in t && AS(t.process, e);
      }),
        O.channel(`worker_threads`).subscribe((t) => {
          t && typeof t == `object` && `worker` in t && jS(t.worker, e);
        }));
    },
  }));
function AS(e, t) {
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
          Rh({
            category: `child_process`,
            message: `Child process exited with code '${e}'`,
            level: e === 0 ? `info` : `warning`,
            data: r,
          }));
    })
    .on(`error`, (e) => {
      n ||
        ((n = !0),
        Rh({
          category: `child_process`,
          message: `Child process errored with '${e.message}'`,
          level: `error`,
          data: r,
        }));
    });
}
function jS(e, t) {
  let n;
  e.on(`online`, () => {
    n = e.threadId;
  }).on(`error`, (e) => {
    t.captureWorkerErrors === !1
      ? Rh({
          category: `worker_thread`,
          message: `Worker thread errored with '${e.message}'`,
          level: `error`,
          data: { threadId: n },
        })
      : Hp(e, {
          mechanism: { type: `auto.child_process.worker_thread`, handled: !1, data: { threadId: String(n) } },
        });
  });
}
var MS = e.t((e) => {
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
  NS = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.AsyncHooksContextManager = void 0));
    var t = A_(),
      n = require("async_hooks"),
      r = MS();
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
  PS = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.AsyncLocalStorageContextManager = void 0));
    var t = A_(),
      n = require("async_hooks"),
      r = MS();
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
  FS = Lb(
    e.t((e) => {
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AsyncLocalStorageContextManager = e.AsyncHooksContextManager = void 0));
      var t = NS();
      Object.defineProperty(e, "AsyncHooksContextManager", {
        enumerable: !0,
        get: function () {
          return t.AsyncHooksContextManager;
        },
      });
      var n = PS();
      Object.defineProperty(e, "AsyncLocalStorageContextManager", {
        enumerable: !0,
        get: function () {
          return n.AsyncLocalStorageContextManager;
        },
      });
    })().AsyncLocalStorageContextManager,
  );
function IS() {
  (q.diag.disable(),
    q.diag.setLogger(
      { error: z.error, warn: z.warn, info: z.log, debug: z.log, verbose: z.log },
      q.DiagLogLevel.DEBUG,
    ));
}
function LS(e) {
  return e.replace(/^[A-Z]:/, ``).replace(/\\/g, `/`);
}
function RS(e = process.argv[1] ? vg(process.argv[1]) : process.cwd(), t = g.sep === `\\`) {
  let n = t ? LS(e) : e;
  return (e) => {
    if (!e) return;
    let r = t ? LS(e) : e,
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
var zS = 6e4,
  BS = class extends yh {
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
      (e.openTelemetryInstrumentations && N_({ instrumentations: e.openTelemetryInstrumentations }),
        Mh(n, `node`),
        z.log(
          `Initializing Sentry: process: ${process.pid}, thread: ${ie.isMainThread ? `main` : `worker-${ie.threadId}`}.`,
        ),
        super(n),
        this.getOptions().enableLogs &&
          ((this._logOnExitFlushListener = () => {
            ym(this);
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
        t = q.trace.getTracer(`@sentry/node`, e);
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
          (Bv && z.log(`Flushing client reports based on interval.`), this._flushOutcomes());
        }, e.clientReportFlushInterval ?? zS).unref()),
        process.on(`beforeExit`, this._clientReportOnExitFlushListener));
    }
    _setupIntegrations() {
      (Th(), super._setupIntegrations());
    }
    _getTraceInfoFromScope(e) {
      return e ? Mb(this, e) : [void 0, void 0];
    }
  },
  VS = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.PACKAGE_NAME = e.PACKAGE_VERSION = void 0),
      (e.PACKAGE_VERSION = `0.19.0`),
      (e.PACKAGE_NAME = `@opentelemetry/instrumentation-undici`));
  }),
  HS = e.t((t) => {
    (Object.defineProperty(t, "__esModule", { value: !0 }), (t.UndiciInstrumentation = void 0));
    var n = require("diagnostics_channel"),
      r = require("url"),
      i = (Hc(), e.i(Vc)),
      a = N(),
      o = (zo(), e.i(Lo)),
      s = Vi(),
      c = VS();
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
  US = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.UndiciInstrumentation = void 0));
    var t = HS();
    Object.defineProperty(e, "UndiciInstrumentation", {
      enumerable: !0,
      get: function () {
        return t.UndiciInstrumentation;
      },
    });
  })(),
  WS = `NodeFetch`,
  GS = Lv(WS, US.UndiciInstrumentation, (e) => XS(e)),
  KS = Lv(`${WS}.sentry`, _x, (e) => e),
  qS = W((e = {}) => ({
    name: `NodeFetch`,
    setupOnce() {
      (YS(e, H()?.getOptions()) && GS(e), KS(e));
    },
  }));
function JS(e, t = `/`) {
  let n = `${e}`;
  return n.endsWith(`/`) && t.startsWith(`/`)
    ? `${n}${t.slice(1)}`
    : !n.endsWith(`/`) && !t.startsWith(`/`)
      ? `${n}/${t.slice(1)}`
      : `${n}${t}`;
}
function YS(e, t = {}) {
  return typeof e.spans == `boolean` ? e.spans : !t.skipOpenTelemetrySetup && nf(t);
}
function XS(e = {}) {
  return {
    requireParentforSpans: !1,
    ignoreRequestHook: (t) => {
      let n = JS(t.origin, t.path),
        r = e.ignoreOutgoingRequests;
      return !!(r && n && r(n));
    },
    startSpanHook: () => ({ [Xu]: `auto.http.otel.node_fetch` }),
    requestHook: e.requestHook,
    responseHook: e.responseHook,
  };
}
var ZS = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__,
  QS = 1e6;
function $S(e, t = {}) {
  (e.getOptions().debug && IS(), (e.traceProvider = eC(e, t)));
}
function eC(e, t = {}) {
  let n = new Ey({
    sampler: new ax(e),
    resource: ey().merge(
      $v({
        [Y.ATTR_SERVICE_NAME]: `node`,
        [Y.SEMRESATTRS_SERVICE_NAMESPACE]: `sentry`,
        [Y.ATTR_SERVICE_VERSION]: Uc,
      }),
    ),
    forceFlushTimeoutMillis: 500,
    spanProcessors: [
      new ix({ timeout: tC(e.getOptions().maxSpanWaitDuration) }),
      ...(t.spanProcessors || []),
    ],
  });
  return (
    q.trace.setGlobalTracerProvider(n),
    q.propagation.setGlobalPropagator(new db()),
    q.context.setGlobalContextManager(new FS()),
    n
  );
}
function tC(e) {
  if (e != null) {
    if (e > QS)
      return (ZS && z.warn(`\`maxSpanWaitDuration\` is too high, using the maximum value of ${QS}`), QS);
    if (e <= 0 || Number.isNaN(e)) {
      ZS && z.warn("`maxSpanWaitDuration` must be a positive number, using default value instead.");
      return;
    }
    return e;
  }
}
var nC;
function rC() {
  if (nC) return;
  let e = (nC = new Map());
  function t(t, n) {
    let r = e.get(t) || { id: t };
    ((r.url = Sf(n, y.app.getAppPath())), e.set(t, r));
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
function iC(e) {
  return nC?.get(e);
}
var aC = {
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
function oC(e) {
  return Object.keys(e).reduce((t, n) => {
    if (n === `captureWindowTitles`) t[n] = !!e[n];
    else {
      let r = e[n];
      Array.isArray(r) ? (t[n] = (e) => r.includes(e)) : (typeof r == `function` || r === !1) && (t[n] = r);
    }
    return t;
  }, {});
}
var sC = W((e = {}) => {
    let t = { ...aC, ...oC(e) };
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
                ((i.data = { ...iC(a) }), !t.captureWindowTitles && i.data?.title && delete i.data?.title),
                Rh(i));
              let o = { "sentry.origin": `auto.electron.events` };
              (i.data?.id && (o.id = i.data.id),
                i.data?.url && (o.url = i.data.url),
                r && Fg(Ah`electron.${n}.${e}`, o));
            }
            return o(e, ...s);
          };
        }
        (rC(),
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
  cC = W(() => ({
    name: `OnUncaughtException`,
    setup(e) {
      let t = e.getOptions();
      global.process.on(`uncaughtException`, (n) => {
        (Hp(n, {
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
function lC() {
  let e = Wu().getScopeData(),
    t = V().getScopeData(),
    n = B().getScopeData();
  return (yp(e, t), yp(e, n), (e.eventProcessors = []), e);
}
function uC(e) {
  (V().addScopeListener((t) => {
    e(lC(), t);
  }),
    B().addScopeListener((t) => {
      e(lC(), t);
    }),
    Wu().addScopeListener((t) => {
      e(lC(), t);
    }));
}
var dC = `7.5.0`,
  fC = `sentry.javascript.electron`;
function pC(e) {
  return {
    name: fC,
    packages: [{ name: `npm:@sentry/electron`, version: dC }],
    version: dC,
    settings: { infer_ip: e ? `auto` : `never` },
  };
}
function mC() {
  return `${(y.app.name || y.app.getName()).replace(/\W/g, `-`)}@${y.app.getVersion()}`;
}
function hC() {
  return y.app.isPackaged ? `production` : `development`;
}
async function gC(e) {
  let t = { message: `test` },
    n = {};
  for (let r of e.getEventProcessors()) {
    if (t === null) break;
    t = await r(t, n);
  }
  return (delete t?.message, t || {});
}
var _C;
(function (e) {
  ((e[(e.Classic = 1)] = `Classic`), (e[(e.Protocol = 2)] = `Protocol`), (e[(e.Both = 3)] = `Both`));
})((_C ||= {}));
function vC(e) {
  return {
    createUrl: (t) => `${e}://${t}/sentry_key`,
    urlMatches: function (e, t) {
      return e.startsWith(this.createUrl(t));
    },
    createKey: (t) => `${e}.${t}`,
    namespace: e,
  };
}
var yC = `sentry-electron-renderer-id`,
  bC = `__sentry_message_port_message__`;
function xC(e) {
  return !!(e && typeof e == `object` && bC in e);
}
function SC() {
  return { [bC]: !0 };
}
var CC = mu(process.versions.electron),
  wC = { major: CC.major || 0, minor: CC.minor || 0, patch: CC.patch || 0 },
  TC = wC.major,
  EC = [`clean-exit`, `abnormal-exit`, `killed`, `crashed`, `oom`, `launch-failed`, `integrity-failure`];
function DC() {
  return (0, p.join)(y.app.getPath(`userData`), `sentry`);
}
function OC() {
  return wC.major >= 25;
}
function kC(e, t, n) {
  OC()
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
        (n({ windowId: e.headers[yC], url: e.url, body: e.uploadData?.[0]?.bytes }), t(``));
      });
}
function AC(e, t) {
  if (e.registerPreloadScript) e.registerPreloadScript({ type: `frame`, filePath: t });
  else {
    let n = e.getPreloads();
    e.setPreloads([t, ...n]);
  }
}
var jC = class {
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
  MC = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.*\d{0,10}Z$/;
function NC(e, t) {
  return typeof t == `string` && MC.test(t) ? new Date(t) : t;
}
var PC = class {
    constructor(e, t, n) {
      ((this._lock = new jC()), (this._path = (0, p.join)(e, `${t}.json`)), (this._initial = n));
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
          z.warn(`Failed to write to store`, e);
        }
      });
    }
    async get() {
      return this._lock.runExclusive(async () => {
        if (this._data === void 0)
          try {
            this._data = JSON.parse(await C.promises.readFile(this._path, `utf8`), NC);
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
  FC = class extends PC {
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
  IC = 6e4,
  LC,
  RC;
function zC() {
  return (LC || ((LC = new PC(DC(), `session`, void 0)), (RC = LC.get().then((e) => e && Su(e)))), LC);
}
function BC(e) {
  let t = { ...e };
  return (delete t.toJSON, t);
}
var VC;
function HC(e) {
  let t = Yp();
  (e && Qp(),
    zC()
      .set(BC(t))
      .catch(() => {}),
    (VC = setInterval(async () => {
      let e = V().getSession();
      e && e.status === `ok` && (await zC().set(BC(e)));
    }, IC)));
}
async function UC() {
  VC && clearInterval(VC);
  let e = V().getSession();
  (e
    ? e.status === `ok`
      ? (z.log(`Ending session`), Xp())
      : z.log(`Session was already ended`)
    : z.log(`No session`),
    await zC().clear(),
    await qp(2e3));
}
async function WC() {
  let e = await RC,
    t = V(),
    n = t.getSession();
  return (e && ((RC = void 0), e.status === `ok` && t.setSession(Su(e))), n);
}
function GC(e) {
  V().setSession(e);
}
async function KC() {
  let e = H(),
    t = await RC;
  if (t && e) {
    if (t.status !== `ok`) {
      RC = void 0;
      return;
    }
    z.log(`Found previous abnormal session`);
    let n = Su(t);
    (Cu(n, {
      status: `abnormal`,
      errors: (n.errors || 0) + 1,
      release: t.attrs?.release,
      environment: t.attrs?.environment,
    }),
      await e.sendSession(n),
      (RC = void 0));
  }
}
function qC() {
  VC && clearInterval(VC);
  let e = V().getSession();
  e &&
    e.status === `ok` &&
    (z.log(`Setting session as abnormal ANR`),
    Cu(e, { status: `abnormal`, abnormal_mechanism: `anr_foreground` }),
    Qp());
}
function JC() {
  y.app.on(`before-quit`, () => {
    (y.app.removeListener(`will-quit`, YC), y.app.on(`will-quit`, YC));
  });
}
var YC = async (e) => {
    if (!e.defaultPrevented) {
      (z.log(`[Session] Exit Handler`), e.preventDefault());
      try {
        await UC();
      } catch (e) {
        z.warn(`[Session] Error ending session:`, e);
      }
      y.app.exit();
    }
  },
  XC = `MDMP`;
function ZC(e) {
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
function QC(e, t) {
  return { dataSize: e.readUInt32LE(t), rva: e.readUInt32LE(t + 4) };
}
function $C(e, t) {
  return { streamType: e.readUInt32LE(t), location: QC(e, t + 4) };
}
function ew(e, t) {
  return e.subarray(t.rva, t.rva + t.dataSize);
}
function tw(e, t) {
  return QC(e, t + 20);
}
function nw(e, t) {
  let n = e.readUInt32LE(t);
  return e.toString(`utf8`, t + 4, t + 4 + n);
}
function rw(e, t, n) {
  let r = e.readUInt32LE(n),
    i = e.readUInt16LE(n + 4),
    a = e.readUInt32LE(n + 8);
  if (i === 1) return { name: nw(t, r), value: nw(t, a) };
}
function iw(e, t) {
  let n = e.subarray(t.rva, t.rva + t.dataSize);
  if (n.length === 0) return {};
  let r = tw(n, 0),
    i = e.subarray(r.rva, r.rva + r.dataSize),
    a = i.readUInt32LE(0),
    o = 4,
    s = {};
  for (let t = 0; t < a; t++) {
    let t = rw(i, e, o);
    if (t) {
      let { name: e, value: n } = t;
      s[e] = n;
    }
    o += 12;
  }
  return s;
}
function aw(e, t) {
  let n = e.subarray(t.rva, t.rva + t.dataSize);
  if (n.length === 0) return {};
  let r = n.readUInt32LE(0),
    i = 4,
    a = {};
  for (let t = 0; t < r; t++) {
    let t = QC(n, i + 4);
    ((a = { ...a, ...iw(e, t) }), (i += 12));
  }
  return a;
}
function ow(e, t) {
  return aw(e, QC(t, 44));
}
function sw(e) {
  if (e.length < 1e4) throw Error(`Minidump was less than 10KB so likely incomplete.`);
  let t;
  try {
    t = ZC(e);
  } catch {
    throw Error(`Failed to parse minidump header`);
  }
  if (t.signature !== `MDMP`) throw Error(`Minidump signature was not '${XC}'`);
  try {
    for (let n = 0; n < t.streamCount; n++) {
      let r = $C(e, t.streamDirectoryRva + n * 12);
      if (r.streamType === 1129316353) {
        let n = ow(e, ew(e, r.location));
        return { header: t, crashpadAnnotations: n };
      }
    }
  } catch {}
  return { header: t };
}
var cw = 30,
  lw = 864e5,
  uw = 1e3,
  dw = 5e3,
  fw = 500,
  pw = dw / fw;
function mw(e) {
  return new Promise((t) => setTimeout(t, e));
}
function hw(e) {
  let t = new jC();
  return async (n, r) => {
    await t.runExclusive(async () => {
      for (let t of await e())
        try {
          if (n) continue;
          z.log(`Found minidump`, t);
          let e = await C.promises.stat(t),
            i = new Date().getTime() - cw * lw;
          if (e.mtimeMs < i) {
            z.log(`Ignoring minidump as it is over ${cw} days old`);
            continue;
          }
          let a = 0;
          for (; a <= pw;) {
            let n = new Date().getTime() - uw;
            if (e.mtimeMs < n) {
              let e = await C.promises.readFile(t);
              try {
                let n = sw(e);
                (z.log(`Sending minidump`),
                  await r(n, { attachmentType: `event.minidump`, filename: (0, p.basename)(t), data: e }));
              } catch (e) {
                let t = e instanceof Error ? e.toString() : `Unknown error`;
                z.warn(`Dropping minidump:\n${t}`);
                break;
              }
              break;
            }
            (z.log(`Waiting. Minidump has been modified in the last ${uw} milliseconds.`),
              (a += 1),
              await mw(fw),
              (e = await C.promises.stat(t)));
          }
          a >= pw && z.warn(`Timed out waiting for minidump to stop being modified`);
        } catch (e) {
          z.error(`Failed to load minidump`, e);
        } finally {
          try {
            await C.promises.unlink(t);
          } catch {
            z.warn(`Could not delete minidump`, t);
          }
        }
    });
  };
}
async function gw(e, t = 100) {
  if (t > 2e3) return;
  let n = (0, p.join)(e, `metadata`);
  try {
    (await C.promises.unlink(n), z.log(`Deleted Crashpad metadata file`, n));
  } catch (n) {
    n.code &&
      n.code == `EBUSY` &&
      setTimeout(async () => {
        await gw(e, t * 2);
      }, t);
  }
}
async function _w(e) {
  let t = [];
  for (let n of e)
    try {
      let e = await C.promises.readdir(n);
      t.push(...e.map((e) => (0, p.join)(n, e)));
    } catch {}
  return t;
}
function vw() {
  let e = y.app.getPath(`crashDumps`),
    t = process.platform === `win32` ? `reports` : `completed`,
    n = [(0, p.join)(e, t)];
  return (
    (process.platform === `darwin` || process.platform === `linux`) && n.push((0, p.join)(e, `pending`)),
    hw(async () => (await gw(e).catch((e) => z.error(e)), (await _w(n)).filter((e) => e.endsWith(`.dmp`))))
  );
}
var yw = W((e = {}) => {
  let t = e.maxMinidumpsPerSession || 10,
    n,
    r,
    i;
  function a() {
    (z.log(`Starting Electron crashReporter`),
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
      setImmediate(async () => n?.set({ scope: t, event: await gC(e) }));
    }
    (uC((e) => {
      t(e);
    }),
      t(lC()));
  }
  async function s(e, n) {
    t <= 0 && z.log(`Not sending minidumps because the limit has been reached`);
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
        t > 0 && (--t, Wp(o, { attachments: [r] }));
      }),
      a
    );
  }
  async function c(e, t, n, r) {
    let { getRendererName: i } = t;
    await s(e, (e) => {
      let t = (e === `renderer` && i ? i(n) : e) || `unknown`;
      return (
        z.log(`'${t}' process '${r.reason}'`),
        {
          contexts: { electron: { crashed_url: iC(n.id)?.url || `unknown`, details: r } },
          level: `fatal`,
          platform: `native`,
          tags: { "event.environment": `native`, "event.process": t, "exit.reason": r.reason },
        }
      );
    });
  }
  async function l(e, t) {
    (z.log(`${t.type} process has ${t.reason}`),
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
      (a(), (n = new FC(DC(), `scope_v3`, { scope: new Nu().getScopeData() })), (r = n.get()));
      try {
        i = vw();
      } catch (e) {
        z.error(`Failed to create minidump loader`, e);
      }
      let t = e.getOptions();
      if ((o(e), !t?.dsn))
        throw Error(`Attempted to enable Electron native crash reporter but no DSN was supplied`);
      (rC(),
        y.app.on(`render-process-gone`, async (n, r, i) => {
          EC.includes(i.reason) && (await c(e, t, r, i));
        }),
        y.app.on(`child-process-gone`, async (t, n) => {
          EC.includes(n.reason) && (await l(e, n));
        }),
        y.app.on(`diagnostic-minidump-created`, () => {
          s(e, (e) => ({
            level: `fatal`,
            platform: `native`,
            tags: { "event.environment": `native`, "event.process": e || `unknown` },
          })).catch((e) => z.error(`Failed to capture diagnostic minidumps`, e));
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
            (i.scope && vp(n, i.scope),
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
          (u = await WC()),
          n
        );
      })
        .then(async (e) => {
          e ? u && GC(u) : await KC();
        })
        .catch((e) => z.error(e));
    },
  };
});
function bw(e) {
  (delete e.sdkProcessingMetadata?.capturedSpanScope,
    delete e.sdkProcessingMetadata?.capturedSpanIsolationScope);
  for (let t of e.spans || []) delete t.spanRecorder;
}
function xw(e, t) {
  bw(t);
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
var Sw = RS(y.app.getAppPath());
function Cw(e, t) {
  for (let n of e.exception?.values || [])
    for (let e of n.stacktrace?.frames || []) e.filename &&= Sf(e.filename, t);
  for (let n of e.debug_meta?.images || []) n.type === `sourcemap` && (n.code_file = Sf(n.code_file, t));
  e.transaction &&= Sf(e.transaction, t);
  let { request: n = {} } = e;
  if (
    ((n.url &&= Sf(n.url, t)),
    e.contexts?.feedback?.url &&
      typeof e.contexts.feedback.url == `string` &&
      (e.contexts.feedback.url = Sf(e.contexts.feedback.url, t)),
    e.spans)
  )
    for (let n of e.spans) n.description?.startsWith(`file://`) && (n.description = Sf(n.description, t));
  return e;
}
function ww(e, t, n) {
  let r = wf(t[0]),
    i = !1;
  return (
    Ef(t, (t, a) => {
      if (a === `replay_event`) {
        i = !0;
        let [a, o] = t,
          s = B().getScopeData();
        ((o.breadcrumbs = s.breadcrumbs),
          (o.tags = s.tags),
          (o.user = s.user),
          (o.environment = e.environment),
          Array.isArray(o.urls) && (o.urls = o.urls.map((e) => Sf(e, n))),
          o?.request?.url && (o.request.url = Sf(o.request.url, n)),
          (r = Tf(r, [a, o])));
      } else a === `replay_recording` && (r = Tf(r, t));
    }),
    i ? r : t
  );
}
function Tw(e, t) {
  for (let n of e.profile.frames)
    ((n.abs_path &&= Sf(n.abs_path, t)),
      `filename` in n && typeof n.filename == `string` && (n.filename = Sf(n.filename, t)),
      (n.module &&= Sw(n.abs_path)));
}
function Ew(e, t, n) {
  (n.release && (e.release = n.release), n.environment && (e.environment = n.environment));
  let r = e.profile;
  if (r?.frames)
    for (let e of r.frames)
      ((e.abs_path &&= Sf(e.abs_path, t)), (e.filename &&= Sf(e.filename, t)), (e.module &&= Sw(e.abs_path)));
}
function Dw(e, t, n) {
  let [r] = t,
    i = wf({ ...r, sdk: { name: `sentry.javascript.electron`, version: dC } }),
    a = !1;
  return (
    Ef(t, (t, r) => {
      if (r === `profile_chunk`) {
        a = !0;
        let [r, o] = t;
        (Ew(o, n, e), (i = Tf(i, [r, o])));
      }
    }),
    a ? i : t
  );
}
function Ow() {
  try {
    return require.resolve(`../../preload/default.js`);
  } catch {
    try {
      let e = (0, E.fileURLToPath)({}.url);
      return (0, p.resolve)(e, `..`, `..`, `..`, `..`, `preload`, `default.js`);
    } catch {}
  }
}
var kw = W(() => ({
    name: `PreloadInjection`,
    setup(e) {
      let t = e.getOptions();
      (t.ipcMode & _C.Classic) !== 0 &&
        y.app.once(`ready`, () => {
          let e = Ow();
          if (e && typeof e == `string` && (0, p.isAbsolute)(e) && (0, C.existsSync)(e))
            for (let n of t.getSessions()) AC(n, e);
          else
            z.log(
              `The preload script could not be injected automatically. This is most likely caused by bundling of the main process`,
            );
        });
    },
  })),
  Aw = W((e = {}) => ({
    name: `MainProcessSession`,
    setup() {
      (HC(!!e.sendOnCreate), JC());
    },
  })),
  jw = { screen: !0, deviceModelManufacturer: !1 };
function Mw() {
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
function Nw() {
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
function Pw() {
  return process.platform === `win32` ? Mw() : process.platform === `darwin` ? Nw() : Promise.resolve({});
}
var Fw = W((e = {}) => {
  let t = {},
    n = e.deviceModelManufacturer,
    r = { ...jw, ...e };
  function i() {
    let e = y.screen.getPrimaryDisplay(),
      n = Math.floor(e.size.width * e.scaleFactor),
      r = Math.floor(e.size.height * e.scaleFactor);
    ((t.screen_density = e.scaleFactor), (t.screen_resolution = `${n}x${r}`));
  }
  async function a() {
    let { manufacturer: e, model: n } = await Pw();
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
    processEvent: async (e) => (n && ((n = !1), await a()), xw(e, { contexts: { device: t } })),
  };
});
function Iw(e) {
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
function Lw(e, t, n) {
  let r = new Ng(100),
    i = new Ng(100),
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
      let o = Dg(a?.statusCode);
      if (
        (Rh(
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
          Lg(Ah`Electron.net request failed: ${n} ${r}`, s);
          break;
        case `warning`:
          Ig(Ah`Electron.net request warning: ${n} ${r}`, s);
          break;
        default:
          Fg(Ah`Electron.net request succeeded: ${n} ${r}`, s);
      }
    };
  return function (t) {
    return function (n) {
      let { url: r, method: i } = Iw(n),
        c = t.apply(this, [n]);
      if (r.match(/sentry_key/) || c.getHeader(`x-sentry-auth`)) return c;
      let l = a(i, r)
        ? np({
            name: `${i} ${r}`,
            onlyIfParent: !0,
            attributes: { url: r, type: `net.request`, "http.method": i },
            op: `http.client`,
          })
        : new mf();
      if ((l.setAttribute(Xu, `auto.http.electron.net`), o(i, r)))
        for (let [e, t] of Object.entries(Nh({ span: l })))
          (z.log(`[Tracing] Adding ${e} header ${t} to outgoing request to "${r}": `), c.setHeader(e, t));
      return c
        .once(`response`, function (t) {
          (e.breadcrumbs !== !1 && s(`response`, i, r, this, t),
            t.statusCode && rd(l, t.statusCode),
            l.end());
        })
        .once(`error`, function (t) {
          (e.breadcrumbs !== !1 && s(`error`, i, r, this, void 0), rd(l, 500), l.end());
        });
    };
  };
}
var Rw = W((e = {}) => ({
    name: `ElectronNet`,
    setup(t) {
      let n = t.getOptions(),
        r = !!n?.enableLogs;
      (e.breadcrumbs !== !1 || e.tracing !== !1) &&
        Gl(y.net, `request`, Lw(e, r, n?.tracePropagationTargets));
    },
  })),
  zw = { breadcrumbs: EC, events: [`abnormal-exit`, `launch-failed`, `integrity-failure`] };
function Bw(e, t) {
  let n = `'${t}' process exited with '${e}'`,
    r = Ah`'${t}' process exited with '${e}'`;
  switch (e) {
    case `abnormal-exit`:
    case `killed`:
      return { message: n, level: `warning`, log: Ig, messageFmt: r };
    case `crashed`:
    case `oom`:
    case `launch-failed`:
    case `integrity-failure`:
      return { message: n, level: `fatal`, log: Lg, messageFmt: r };
    default:
      return { message: n, level: `debug`, log: Fg, messageFmt: r };
  }
}
var Vw = W((e = {}) => {
    let { breadcrumbs: t, events: n } = e,
      r = kS(e),
      i = {
        breadcrumbs: Array.isArray(t) ? t : t === !1 ? [] : zw.breadcrumbs,
        events: Array.isArray(n) ? n : n === !1 ? [] : zw.events,
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
              { message: o, level: s, log: c, messageFmt: l } = Bw(r.reason, r.type);
            (n.includes(a) && Up(o, { level: s, tags: { "event.process": r.type } }),
              t.includes(a) &&
                (Rh({ type: `process`, category: `child-process`, message: o, level: s, data: r }),
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
                { message: l, level: u, log: d, messageFmt: f } = Bw(o.reason, c);
              (n.includes(s) && Up(l, u),
                t.includes(s) &&
                  (Rh({ type: `process`, category: `child-process`, message: l, level: u, data: o }),
                  i && d(f, { "sentry.origin": `auto.electron.child-process`, exitCode: o.exitCode })));
            }));
        }
      },
    };
  }),
  Hw = W(() => ({
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
            z.error(`Error capturing screenshot`, e);
          }
        }
      }
      return e;
    },
  }));
function Uw(e = {}, t, n) {
  if (e[t]) {
    let r = e[t];
    Array.isArray(r) ? r.push(n) : (e[t] = [r, n]);
  } else e[t] = n;
  return { responseHeaders: e };
}
function Ww(e, t, n) {
  e.webRequest.onHeadersReceived((e, r) => {
    r(Uw(e.responseHeaders, t, n));
  });
}
var Gw;
function Kw(e, t) {
  if (!Gw) return;
  let n = t.event_id;
  (Gw.set(n, t), e && (e.contexts = { ...e.contexts, profile: { profile_id: n } }));
}
var qw = W(() => ({
    name: `RendererProfiling`,
    setup(e) {
      let t = e.getOptions();
      t.enableRendererProfiling &&
        ((Gw = new Ng(10)),
        y.app.on(`ready`, () => {
          t.getSessions().forEach((e) => Ww(e, `Document-Policy`, `js-profiling`));
        }),
        e.on?.(`beforeEnvelope`, (e) => {
          let n;
          if (
            (Ef(e, (e, t) => {
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
          let r = Gw?.remove(n);
          r &&
            (Tw(r, y.app.getAppPath()),
            (r.release = t.release || mC()),
            (r.environment = t.environment || hC()),
            e[1].push([{ type: `profile` }, r]));
        }));
    },
  })),
  Jw = W(() => ({
    name: `NormalizePaths`,
    setup: (e) => {
      setImmediate(() => {
        e.on(`beforeEnvelope`, (e) => {
          Ef(e, (e, t) => {
            t === `profile` && Tw(e[1], y.app.getAppPath());
          });
        });
      });
    },
    processEvent(e) {
      return Cw(e, y.app.getAppPath());
    },
  }));
function Yw() {
  return y.app.getAppMetrics().reduce((e, t) => e + t.memory.workingSetSize * 1024, 0);
}
var Xw = W(() => ({
  name: `ElectronContext`,
  processEvent(e, t, n) {
    (delete e.contexts?.runtime,
      delete e.contexts?.app?.app_memory,
      e.request?.headers && delete e.request.headers[`User-Agent`]);
    let { release: r = mC(), environment: i = hC() } = n.getOptions();
    return xw(
      {
        contexts: {
          app: {
            app_name: y.app.name || y.app.getName(),
            app_version: y.app.getVersion(),
            build_type: process.mas ? `app-store` : process.windowsStore ? `windows-store` : void 0,
            app_memory: Yw(),
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
function Zw(e) {
  return {
    name: e.deviceString || `GPU`,
    active: e.active,
    id: `0x${e.deviceId.toString(16).padStart(4, `0`)}`,
    vendor_id: `0x${e.vendorId.toString(16).padStart(4, `0`)}`,
    vendor_name: e.vendorString,
    driver_version: e.driverVersion,
  };
}
var Qw = W((e = { infoLevel: `basic` }) => {
    let t;
    return {
      name: `GpuContext`,
      processEvent: async (n) => {
        if (t === void 0) {
          let n = await y.app.getGPUInfo(e.infoLevel).catch(() => void 0);
          t = n ? n.gpuDevice.map(Zw) : [];
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
  $w = 30,
  eT = 50;
function tT(e, t, n, r) {
  let i = { filename: e, function: t === `<anonymous>` ? `?` : t, in_app: !0 };
  return (n !== void 0 && (i.lineno = n), r !== void 0 && (i.colno = r), i);
}
var nT = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
  rT =
    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  iT = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  aT = /at (.+?) ?\(data:(.+?),/,
  oT = [
    $w,
    (e) => {
      let t = e.match(aT);
      if (t) return { filename: `<data:${t[2]}>`, function: t[1] };
      let n = nT.exec(e);
      if (n) {
        let [, e, t, r] = n;
        return tT(e, `?`, +t, +r);
      }
      let r = rT.exec(e);
      if (r) {
        if (r[2] && r[2].indexOf(`eval`) === 0) {
          let e = iT.exec(r[2]);
          e && ((r[2] = e[1]), (r[3] = e[2]), (r[4] = e[3]));
        }
        let [e, t] = lT(r[1] || `?`, r[2]);
        return tT(t, e, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0);
      }
    },
  ],
  sT =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  cT = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
cl(oT, [
  eT,
  (e) => {
    let t = sT.exec(e);
    if (t) {
      if (t[3] && t[3].indexOf(` > eval`) > -1) {
        let e = cT.exec(t[3]);
        e && ((t[1] = t[1] || `eval`), (t[3] = e[1]), (t[4] = e[2]), (t[5] = ``));
      }
      let e = t[3],
        n = t[1] || `?`;
      return (([n, e] = lT(n, e)), tT(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0));
    }
  },
]);
var lT = (e, t) => {
    let n = e.indexOf(`safari-extension`) !== -1,
      r = e.indexOf(`safari-web-extension`) !== -1;
    return n || r
      ? [
          e.indexOf(`@`) === -1 ? `?` : e.split(`@`)[0],
          n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
        ]
      : [e, t];
  },
  uT = 50,
  [, dT] = oT,
  [, fT] = Ag(),
  pT = (e, t = 0) => {
    let n = [];
    for (let r of e
      .split(
        `
`,
      )
      .slice(t)) {
      let e = dT(r),
        t = fT(r);
      if (
        (e && t?.in_app !== !1 ? n.push(e) : t && (t.module === void 0 && delete t.module, n.push(t)),
        n.length >= uT)
      )
        break;
    }
    return ul(n);
  },
  mT = cl(Ag(RS(y.app.getAppPath())));
async function hT(e) {
  if (e.isDestroyed()) return;
  let t = e.mainFrame;
  if (typeof t.collectJavaScriptCallStack != `function`)
    throw Error(`Native JavaScript stack collection is unavailable`);
  let n = await t.collectJavaScriptCallStack();
  if (n) {
    if (n.includes(`Website owner has not opted in`)) {
      z.warn(`Could not collect renderer stack frames.
A 'Document-Policy' header of 'include-js-call-stacks-in-crash-reports' must be set`);
      return;
    }
    return pT(n);
  }
}
function gT(e, ...t) {
  z.log(`[Renderer Event Loop Block] ${e}`, ...t);
}
function _T(e, t, n) {
  return () => {
    let r = performance.now(),
      i = Date.now(),
      a = n();
    hT(e)
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
function vT(e, t) {
  (gT(`Connecting to debugger`), e.debugger.attach(`1.3`));
  let n = new Map(),
    r = RS(y.app.getAppPath());
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
          t(ul(a.map((e) => Mg(e, n.get(e.location.scriptId), r)))));
      }
    }),
    e.debugger.sendCommand(`Debugger.enable`).catch(() => {}),
    () => {
      if (!e.isDestroyed())
        return (gT(`Pausing debugger to capture stack trace`), e.debugger.sendCommand(`Debugger.pause`));
    }
  );
}
function yT(e, t, n, r) {
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
var bT = `RendererEventLoopBlock`,
  xT = W((e = {}) => {
    let t = new Map(),
      n,
      r = !1;
    function i(e) {
      return n?.getRendererName?.(e);
    }
    function a(e, t, n, r) {
      qC();
      let a = i(e) || `renderer`;
      Wp({
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
      name: bT,
      setup: (i) => {
        ((n = i.getOptions()),
          i.on(`close`, () => {
            r = !0;
            for (let e of t.values()) e.dispose();
          }),
          TC >= 34 &&
            (y.app.commandLine.appendSwitch(
              `enable-features`,
              `DocumentPolicyIncludeJSCallStacksInCrashReports`,
            ),
            e.captureNativeStacktrace &&
              y.app.on(`ready`, () => {
                n?.getSessions().forEach((e) =>
                  Ww(e, `Document-Policy`, `include-js-call-stacks-in-crash-reports`),
                );
              })));
      },
      createRendererEventLoopBlockStatusHandler: () => (n, i) => {
        if (r) return;
        let o = t.get(i);
        if (o !== void 0 || n.status === `visible`) {
          if (o === void 0) {
            gT(`Renderer sent first status message`, n.config);
            let r = i.id,
              s;
            (n.config.captureStackTrace &&
              (s = (e.captureNativeStacktrace ? _T : vT)(
                i,
                (e, t) => {
                  (gT(`Event captured with stack frames`),
                    a(i, n.config.anrThreshold, e, { ...t, electron_web_contents_id: r }));
                },
                () => o.getHeartbeats(),
              )),
              (o = yT(
                i,
                n.config.anrThreshold,
                () => {
                  (gT(`Watchdog timeout`),
                    s
                      ? s()
                      : (gT(`Capturing event`),
                        a(i, n.config.anrThreshold, void 0, { electron_web_contents_id: r })));
                },
                () => t.delete(i),
              )),
              t.set(i, o));
          }
          n.status === `alive`
            ? o.alive(n.sentAtMs)
            : (gT(`Renderer visibility changed '${n.status}'`), o.enabled(n.status === `visible`));
        }
      },
    };
  });
function ST(e) {
  return e.getIntegrationByName(bT)?.createRendererEventLoopBlockStatusHandler();
}
var CT = 32768;
function wT(e) {
  return new w.Readable({
    read() {
      (this.push(e), this.push(null));
    },
  });
}
function TT(e) {
  let { hostname: t, pathname: n, port: r, protocol: i, search: a } = new E.URL(e);
  return { method: `POST`, hostname: t, path: `${n}${a}`, port: parseInt(r, 10), protocol: i };
}
function ET(e) {
  return Lm(e, DT(e.url, e.headers || {}));
}
function DT(e, t) {
  return (
    (t[`Content-Type`] = `application/x-sentry-envelope`),
    function (n) {
      return y.app.whenReady().then(
        () =>
          new Promise((r, i) => {
            let a = wT(n.body),
              o = { ...t };
            n.body.length > CT && ((o[`content-encoding`] = `gzip`), (a = a.pipe((0, ee.createGzip)())));
            let s = y.net.request(TT(e));
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
var OT = 864e5;
function kT(e, t) {
  let n = Date.now() - OT * t;
  return (e?.date?.getTime() || 0) < n;
}
function AT(e) {
  let t = e[0];
  if (typeof t.sent_at == `string`) return new Date(t.sent_at);
}
function jT(e) {
  function t(...e) {
    z.log(`[Offline Store]:`, ...e);
  }
  let n = {
      maxAgeDays: e.maxAgeDays || 30,
      maxQueueSize: e.maxQueueSize || 30,
      queuePath: e.queuePath || (0, p.join)(DC(), `queue`),
    },
    r = new PC(n.queuePath, `queue-v2`, []);
  function i(e) {
    C.promises.unlink((0, p.join)(n.queuePath, e)).catch(() => {});
  }
  function a(e) {
    for (; e[0] && kT(e[0], n.maxAgeDays);) {
      let n = e.shift();
      (t(`Removing stale envelope`, n), i(n.id));
    }
  }
  async function o(e, o, s) {
    t(`${o}ing envelope into offline storage`);
    let c = su();
    try {
      let t = Af(e);
      (await C.promises.mkdir(n.queuePath, { recursive: !0 }),
        await C.promises.writeFile((0, p.join)(n.queuePath, c), t));
    } catch (e) {
      t(`Failed to save`, e);
    }
    await r.update((t) =>
      o === `push` && (a(t), t.length >= n.maxQueueSize)
        ? (i(c), t)
        : (t[o]({ id: c, date: s || AT(e) || new Date() }), t),
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
          return (i(e.id), (s = e.date), Mf(t));
        } catch (e) {
          t(`Failed to read`, e);
        }
    },
  };
}
function MT(e = ET) {
  return (t) => Ch(e)({ flushAtStartup: !0, createStore: jT, ...t });
}
function NT(e) {
  let t,
    n = [],
    r;
  return (
    Ef(e, (e, i) => {
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
function PT(e) {
  let t;
  return (
    Ef(e, (e, n) => {
      n === `profile_chunk` && (t = e[1]);
    }),
    t
  );
}
async function FT(e) {
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
var IT;
function LT(e) {
  return (
    IT === void 0 &&
      ((IT = {}),
      FT(e)
        .then((e) => {
          IT = e;
        })
        .catch(() => {})),
    IT || {}
  );
}
var RT, zT;
function BT() {
  ((RT ||= new Set()), (zT ||= new Map()));
  for (let e of y.webContents.getAllWebContents()) {
    let t = e.id;
    RT.has(t) ||
      e.isDestroyed() ||
      e.executeJavaScript(`window.__SENTRY_RENDERER_ID__`).then((n) => {
        n &&
          RT &&
          zT &&
          (RT.add(t),
          zT.set(n, t),
          e.once(`destroyed`, () => {
            (RT?.delete(t), zT?.delete(n));
          }));
      }, z.error);
  }
}
function VT(e, t, n, r, i) {
  let a = (i && e?.getRendererName?.(i)) || `renderer`;
  ((t.breadcrumbs = t.breadcrumbs || []),
    delete t.environment,
    delete t.sdk?.name,
    delete t.sdk?.version,
    delete t.sdk?.packages,
    n && (t.sdkProcessingMetadata = { ...t.sdkProcessingMetadata, dynamicSamplingContext: n }),
    Wp(xw(t, { tags: { "event.process": a } }), { attachments: r }));
}
var HT;
function UT(e, t, n, r) {
  let i = Mf(n),
    [a] = i,
    o = a.trace;
  o &&
    ((HT ||= e.getDsn()?.publicKey),
    (o.release = t.release),
    (o.environment = t.environment),
    (o.public_key = HT));
  let s = NT(i);
  if (s) {
    let [e, n, i] = s;
    (i && Kw(e, i), VT(t, e, o, n, r));
  } else if (PT(i)) {
    let e = Dw(t, i, y.app.getAppPath());
    H()?.getTransport()?.send(e);
  } else {
    let e = ww(t, i, y.app.getAppPath());
    H()?.getTransport()?.send(e);
  }
}
function WT(e) {
  return e != null && Object.keys(e).length > 0;
}
function GT(e, t) {
  let n;
  try {
    n = JSON.parse(t);
  } catch {
    z.warn(`sentry-electron received an invalid scope message`);
    return;
  }
  let r = B();
  (WT(n.user) && r.setUser(n.user), WT(n.tags) && r.setTags(n.tags), WT(n.extra) && r.setExtras(n.extra));
  for (let e of n.attachments || []) r.addAttachment(e);
  let i = n.breadcrumbs.pop();
  i && r.addBreadcrumb(i, e?.maxBreadcrumbs || 100);
}
function KT(e, t, n, r) {
  let i = (n && t?.getRendererName?.(n)) || `renderer`,
    a = r || {};
  (t.release && (a[`sentry.release`] = { value: t.release, type: `string` }),
    t.environment && (a[`sentry.environment`] = { value: t.environment, type: `string` }),
    (a[`sentry.sdk.name`] = { value: `sentry.javascript.electron`, type: `string` }),
    (a[`sentry.sdk.version`] = { value: dC, type: `string` }),
    (a[`electron.process`] = { value: i, type: `string` }));
  let o = LT(e);
  return (
    o[`os.name`] && (a[`os.name`] = { value: o[`os.name`], type: `string` }),
    o[`os.version`] && (a[`os.version`] = { value: o[`os.version`], type: `string` }),
    o[`device.brand`] && (a[`device.brand`] = { value: o[`device.brand`], type: `string` }),
    o[`device.model`] && (a[`device.model`] = { value: o[`device.model`], type: `string` }),
    o[`device.family`] && (a[`device.family`] = { value: o[`device.family`], type: `string` }),
    a
  );
}
function qT(e, t, n, r) {
  ((n.attributes = KT(e, t, r, n.attributes)), _m(e, n));
}
function JT(e, t, n, r) {
  ((n.attributes = KT(e, t, r, n.attributes)), Em(e, n));
}
function YT(e, t, n) {
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
  let i = ST(e);
  y.app
    .whenReady()
    .then(() => {
      for (let r of n.getSessions())
        kC(r.protocol, t.namespace, (r) => {
          let a = () => {
              let e = r.windowId ? zT?.get(r.windowId) : void 0;
              return e ? y.webContents.fromId(e) : void 0;
            },
            o = r.body;
          if (t.urlMatches(r.url, `start`)) BT();
          else if (t.urlMatches(r.url, `scope`) && o) GT(n, o.toString());
          else if (t.urlMatches(r.url, `envelope`) && o) UT(e, n, o, a());
          else if (t.urlMatches(r.url, `structured-log`) && o) qT(e, n, JSON.parse(o.toString()), a());
          else if (t.urlMatches(r.url, `metric`) && o) JT(e, n, JSON.parse(o.toString()), a());
          else if (i && t.urlMatches(r.url, `status`) && o) {
            let e = a();
            if (e) {
              let t = JSON.parse(o.toString()).status;
              i(t, e);
            }
          }
        });
    })
    .catch((e) => z.error(e));
}
function XT(e, t, n) {
  (y.ipcMain.on(t.createKey(`start`), ({ sender: e }) => {
    let t = e.id;
    ((RT ||= new Set()),
      !RT.has(t) &&
        (e.isDestroyed() ||
          (RT.add(t),
          e.once(`destroyed`, () => {
            RT?.delete(t);
          }))));
  }),
    y.ipcMain.on(t.createKey(`scope`), (e, t) => GT(n, t)),
    y.ipcMain.on(t.createKey(`envelope`), ({ sender: t }, r) => UT(e, n, r, t)),
    y.ipcMain.on(t.createKey(`structured-log`), ({ sender: t }, r) => qT(e, n, r, t)),
    y.ipcMain.on(t.createKey(`metric`), ({ sender: t }, r) => JT(e, n, r, t)));
  let r = ST(e);
  r && y.ipcMain.on(t.createKey(`status`), ({ sender: e }, t) => r(t, e));
}
function ZT(e, t) {
  let n = vC(t.ipcNamespace);
  ((t.ipcMode & _C.Protocol) > 0 && YT(e, n, t), (t.ipcMode & _C.Classic) > 0 && XT(e, n, t));
}
function QT(e) {
  z.log(`[Utility Process] ${e}`);
}
function $T() {
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
            if (xC(e)) {
              QT(`SDK started in utility process '${i()}'`);
              let { port1: e, port2: t } = new y.MessageChannelMain();
              (t.on(`message`, (e) => {
                (e.data instanceof Uint8Array || typeof e.data == `string`) && eE(e.data);
              }),
                t.start(),
                r.postMessage(SC(), [e]));
            }
          }),
          (r.on = new Proxy(r.on, {
            apply: (e, t, [n, r]) =>
              n === `message`
                ? e.apply(t, [
                    `message`,
                    (e) => {
                      if (!xC(e)) return r(e);
                    },
                  ])
                : e.apply(t, [n, r]),
          })),
          r
        );
      },
    }));
}
function eE(e) {
  let t = Mf(e),
    n = NT(t);
  if (n) {
    let [e, t] = n;
    tE(e, t);
  } else H()?.getTransport()?.send(t);
}
function tE(e, t) {
  (delete e.environment,
    delete e.release,
    delete e.sdk?.name,
    delete e.sdk?.version,
    delete e.sdk?.packages,
    Wp(xw(e, { tags: { "event.process": `utility` } }), { attachments: t }));
}
function nE(e) {
  let t = [
    yw(),
    sC(),
    Rw(),
    Xw(),
    Vw(),
    cC(),
    kw(),
    Fw(),
    Hw(),
    Qw(),
    xT(),
    Aw(),
    Gh(),
    Hh(),
    cg(),
    wg(),
    qS(),
    SS(),
    tS(),
    _S(),
    wx({ cloudResource: !1 }),
    Jw(),
  ];
  return (e.attachScreenshot && t.push(Hw()), e.enableRendererProfiling && t.push(qw()), t);
}
function rE(e) {
  let [t = 0] = process.versions.electron.split(`.`).map(Number);
  if (t < 23) throw Error(`Sentry Electron SDK requires Electron 23 or higher`);
  let n = {
      _metadata: { sdk: pC(!!e.sendDefaultPii) },
      ipcMode: _C.Both,
      ipcNamespace: `sentry-ipc`,
      release: mC(),
      environment: hC(),
      defaultIntegrations: nE(e),
      transport: MT(),
      transportOptions: {},
      getSessions: () => [y.session.defaultSession],
      ...e,
      stackParser: ll(e.stackParser || mT),
      includeServerName: !1,
    },
    r = { ...n, integrations: om(n) };
  (r.debug && z.enable(), aE(r), $T(), Ib());
  let i = B();
  i.update(r.initialScope);
  let a = new BS(r);
  (r.sendDefaultPii === !0 && a.on(`beforeSendSession`, jh),
    a.on(`beforeCaptureLog`, (e) => {
      e.attributes = { ...e.attributes, "electron.process": `browser`, ...LT(a) };
    }),
    i.setClient(a),
    a.init(),
    ZT(a, r),
    r.skipOpenTelemetrySetup || $S(a));
}
var iE = [
  { userAdded: `ElectronMinidump`, toRemove: `SentryMinidump` },
  { userAdded: `BrowserWindowSession`, toRemove: `MainProcessSession` },
];
function aE(e) {
  for (let { userAdded: t, toRemove: n } of iE)
    e.integrations.some((e) => e.name === t) && (e.integrations = e.integrations.filter((e) => e.name !== n));
}
var oE = l.a(`owl-browser-crash-counter`),
  sE = null,
  cE = !1,
  lE = 0,
  uE = class extends c.Nt {
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
          var n = a.Vr();
          await n.u(t(e));
        } catch (e) {
          n.e = e;
        } finally {
          n.d();
        }
      }),
        fE(this.delivery));
    }
    unsubscribe() {
      (sE === this.delivery && fE(null),
        (this.delivery = null),
        this.listener?.[Symbol.dispose](),
        (this.listener = null));
    }
    [Symbol.dispose]() {
      this.unsubscribe();
    }
  };
function dE() {
  ((lE += 1), pE());
}
function fE(e) {
  ((sE = e), pE());
}
async function pE() {
  if (sE == null || lE === 0 || cE) return;
  cE = !0;
  let e = sE,
    t = lE,
    n = !1;
  try {
    (await e(t), (lE -= t), (n = !0));
  } catch {
    oE().info(`Failed to deliver Owl browser crash counter`);
  } finally {
    cE = !1;
  }
  lE > 0 && (n || sE !== e) && pE();
}
var mE = `event.minidump`,
  hE = `.dmp`,
  gE = `_sidecar.json`;
function _E(e, t) {
  if (e === `win32`) return [g.win32.join(t, `reports`)];
  let n = [g.posix.join(t, `completed`)];
  return ((e === `darwin` || e === `linux`) && n.push(g.posix.join(t, `pending`)), n);
}
function vE(e = {}) {
  let t = e.maxMinidumpAttachments;
  return (n, r) => {
    if (!r.attachments?.some(({ attachmentType: e }) => e === mE)) return n;
    let i = yE(r, e),
      a = n.contexts?.electron?.[`crashpad.ptype`],
      o = i?.ptype ?? (typeof a == `string` ? a : void 0);
    if (o == null) return null;
    if ((wE(n, i, o), i?.ptype === `browser` && i.capture_kind === `crash` && dE(), t != null)) {
      let e = t;
      ((r.attachments = r.attachments?.filter((t) => t.attachmentType !== mE || (e !== 0 && (--e, !0)))),
        (t = e));
    }
    return n;
  };
}
function yE(e, t) {
  let n = bE(t);
  for (let t of e.attachments ?? []) {
    if (t.attachmentType !== mE) continue;
    let e = SE(t.filename, n);
    if (e != null) return e;
  }
  return null;
}
function bE(e) {
  let t = e.crashDumpsPath ?? xE(e.app);
  return t == null ? [] : _E(e.platform ?? process.platform, t);
}
function xE(e) {
  try {
    return e?.getPath(`crashDumps`);
  } catch {
    return;
  }
}
function SE(e, t) {
  let n = CE(e);
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
function CE(e) {
  return e.toLowerCase().endsWith(hE) ? `${e.slice(0, -4)}${gE}` : null;
}
function wE(e, t, n) {
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
var TE = (0, m.promisify)(oe.gzip);
function EE(e) {
  return (t) =>
    Lm(t, async ({ body: n }) => {
      await y.app.whenReady();
      let r = n.length > 32768,
        i = r ? await TE(n) : n,
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
var DE = 0.001,
  OE = 2097152,
  kE = Promise.withResolvers(),
  AE = kE.promise,
  jE = { addBreadcrumb: Rh, captureException: Hp, captureMessage: Up, setUser: Kp },
  ME = {
    codexAppSessionId: n.o,
    buildFlavor: n.i.resolve(),
    buildNumber: qn.value,
    appVersion: y.app.getVersion(),
    desktopTraceSampleRate: process.env.CODEX_OTEL_TRACES_ENDPOINT == null ? 0 : 1,
    dsn: _e,
  };
function NE(e, t) {
  if (!e) {
    kE.resolve(!1);
    return;
  }
  PE();
  let r = a.Pi(ME.appVersion),
    i = ME.buildFlavor === n.i.Prod,
    o = !i,
    s = !i || Math.random() < DE,
    c;
  i && (c = +!!s);
  let l = ye(r.version);
  (rE({
    ipcMode: _C.Classic,
    dsn: ME.dsn,
    transport: MT(EE(t)),
    environment: ME.buildFlavor,
    release: l,
    dist: ME.buildNumber ?? void 0,
    beforeBreadcrumb: ve,
    beforeSend: vE({ app: y.app, maxMinidumpAttachments: c }),
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
      xT({ captureNativeStacktrace: !0 }),
      yw(),
      Vw({
        breadcrumbs: [`clean-exit`, `abnormal-exit`, `killed`, `crashed`, `oom`, `integrity-failure`],
        events: [`abnormal-exit`, `integrity-failure`],
      }),
      wg({ levels: [`warn`, `error`] }),
      xg({ root: y.app.isPackaged ? y.app.getAppPath() : process.cwd(), prefix: `app:///` }),
    ],
  }),
    Gp(`sessionId`, n.o),
    Gp(`preRelease`, o),
    Gp(`minidumpAttachmentUploadEnabled`, s),
    Gp(`buildFlavor`, ME.buildFlavor),
    Gp(`bundle`, `electron`),
    Gp(`host`, `app`),
    FE(),
    kE.resolve(!0));
}
function PE() {
  let e = (0, g.join)(y.app.getPath(`userData`), `sentry`, `scope_v3.json`);
  try {
    (0, h.statSync)(e).size > OE && (0, h.unlinkSync)(e);
  } catch {}
}
function FE() {
  let e = new Set();
  function t(t, n, r, i) {
    let a = [`launch-failed`, t, n, String(r)],
      o = a.join(`\0`);
    e.has(o) ||
      (e.add(o),
      Up(`Electron process launch failed`, {
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
function IE(e) {
  e === `light` || e === `dark` ? (y.nativeTheme.themeSource = e) : (y.nativeTheme.themeSource = `system`);
}
var LE = `.codex-global-state.json`,
  RE = `config.toml`;
function zE(e) {
  return new c.D((0, g.join)(e, LE));
}
async function BE(e, t) {
  (e.set(c.O, t), await e.flush());
}
function VE(e, t = !1) {
  return {
    core: t || e.get(`electron-windows-core-runtime-frameworks-enabled`) === !0,
    primary: t || e.get(`electron-windows-primary-runtime-frameworks-enabled`) === !0,
  };
}
function HE(e, t) {
  return process.platform === `win32` &&
    t.kind === `local` &&
    !s.xt() &&
    e.get(`electron-prefer-mxc-enabled`) === !0
    ? [`features.prefer_mxc=true`]
    : [];
}
async function UE(e, t) {
  (e.set(c.F, t), await e.flush());
}
async function WE(e, t) {
  (e.set(c.B, t.core), e.set(c.V, t.primary), await e.flush());
}
async function GE({ moduleDir: e }) {
  a.ii();
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
    d = zE(t),
    f = d.getStateFilePath();
  (0, h.existsSync)(f) ||
    (0, h.existsSync)(`${f}.bak`) ||
    (d.set(i.ys.DESKTOP_FIRST_SEEN_AT_MS, Date.now()), d.update(c.P, (e) => ({ ...e, [ue]: !0 })));
  let p = new c.l((0, g.join)(t, RE), d),
    m =
      process.platform === `win32` && p.getEffective(i.H.runCodexInWsl.key) === !0 && (await s.ht()) != null;
  s.bt(() => m);
  let _ = await s.ut({ preferWsl: m });
  return (
    IE(p.getEffective(i.X.theme.key) ?? `system`),
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
var KE = class {
    checks = [];
    customChecks = [];
    registerCheck(e) {
      this.customChecks.push(e);
    }
    register(e, t) {
      this.checks.push(async (n) => {
        let [r, i] = await Promise.all([e, t(n)]);
        return !(0, He.default)(r, i);
      });
    }
    async hasChanges(e) {
      if (this.customChecks.some((e) => e())) return !0;
      let t = await e();
      return (await Promise.all(this.checks.map((e) => e(t)))).some((e) => e);
    }
  },
  qE = (0, G.createContextKey)(`OpenTelemetry SDK Context Key SUPPRESS_TRACING`);
function JE(e) {
  return e.setValue(qE, !0);
}
function YE(e) {
  return e.getValue(qE) === !0;
}
function XE(e) {
  let t = {};
  if (typeof e != `object` || !e) return t;
  for (let n in e) {
    if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
    if (!ZE(n)) {
      G.diag.warn(`Invalid attribute key: ${n}`);
      continue;
    }
    let r = e[n];
    if (!QE(r)) {
      G.diag.warn(`Invalid attribute value set for key: ${n}`);
      continue;
    }
    t[n] = Array.isArray(r) ? r.slice() : r;
  }
  return t;
}
function ZE(e) {
  return typeof e == `string` && e !== ``;
}
function QE(e) {
  return e == null ? !0 : Array.isArray(e) ? $E(e) : eD(typeof e);
}
function $E(e) {
  let t;
  for (let n of e) {
    if (n == null) continue;
    let e = typeof n;
    if (e !== t) {
      if (!t) {
        if (eD(e)) {
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
function eD(e) {
  switch (e) {
    case `number`:
    case `boolean`:
    case `string`:
      return !0;
  }
  return !1;
}
function tD() {
  return (e) => {
    G.diag.error(nD(e));
  };
}
function nD(e) {
  return typeof e == `string` ? e : JSON.stringify(rD(e));
}
function rD(e) {
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
var iD = tD();
function aD(e) {
  try {
    iD(e);
  } catch {}
}
function X(e) {
  let t = process.env[e];
  if (t == null || t.trim() === ``) return;
  let n = Number(t);
  if (isNaN(n)) {
    G.diag.warn(`Unknown value ${(0, T.inspect)(t)} for ${e}, expected a number, using defaults`);
    return;
  }
  return n;
}
function oD(e) {
  let t = process.env[e];
  if (t != null && t.trim() !== ``) return t;
}
var sD = re.performance,
  cD = `2.2.0`,
  lD = `process.runtime.name`,
  uD = {
    [Y.ATTR_TELEMETRY_SDK_NAME]: `opentelemetry`,
    [lD]: `node`,
    [Y.ATTR_TELEMETRY_SDK_LANGUAGE]: Y.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS,
    [Y.ATTR_TELEMETRY_SDK_VERSION]: cD,
  },
  dD = 9,
  fD = 10 ** 6,
  pD = 10 ** dD;
function mD(e) {
  let t = e / 1e3;
  return [Math.trunc(t), Math.round((e % 1e3) * fD)];
}
function hD() {
  let e = sD.timeOrigin;
  if (typeof e != `number`) {
    let t = sD;
    e = t.timing && t.timing.fetchStart;
  }
  return e;
}
function gD(e) {
  return xD(mD(hD()), mD(typeof e == `number` ? e : sD.now()));
}
function _D(e, t) {
  let n = t[0] - e[0],
    r = t[1] - e[1];
  return (r < 0 && (--n, (r += pD)), [n, r]);
}
function vD(e) {
  return e[0] * pD + e[1];
}
function yD(e) {
  return Array.isArray(e) && e.length === 2 && typeof e[0] == `number` && typeof e[1] == `number`;
}
function bD(e) {
  return yD(e) || typeof e == `number` || e instanceof Date;
}
function xD(e, t) {
  let n = [e[0] + t[0], e[1] + t[1]];
  return (n[1] >= pD && ((n[1] -= pD), (n[0] += 1)), n);
}
var SD;
(function (e) {
  ((e[(e.SUCCESS = 0)] = `SUCCESS`), (e[(e.FAILED = 1)] = `FAILED`));
})((SD ||= {}));
var CD = `[_0-9a-z-*/]`,
  wD = RegExp(`^(?:${`[a-z]${CD}{0,255}`}|${`[a-z0-9]${CD}{0,240}@[a-z]${CD}{0,13}`})$`),
  TD = /^[ -~]{0,255}[!-~]$/,
  ED = /,|=/;
function DD(e) {
  return wD.test(e);
}
function OD(e) {
  return TD.test(e) && !ED.test(e);
}
var kD = 32,
  AD = 512,
  jD = `,`,
  MD = `=`,
  ND = class e {
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
        .reduce((e, t) => (e.push(t + MD + this.get(t)), e), [])
        .join(jD);
    }
    _parse(e) {
      e.length > AD ||
        ((this._internalState = e
          .split(jD)
          .reverse()
          .reduce((e, t) => {
            let n = t.trim(),
              r = n.indexOf(MD);
            if (r !== -1) {
              let i = n.slice(0, r),
                a = n.slice(r + 1, t.length);
              DD(i) && OD(a) && e.set(i, a);
            }
            return e;
          }, new Map())),
        this._internalState.size > kD &&
          (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, kD))));
    }
    _keys() {
      return Array.from(this._internalState.keys()).reverse();
    }
    _clone() {
      let t = new e();
      return ((t._internalState = new Map(this._internalState)), t);
    }
  },
  PD = `traceparent`,
  FD = `tracestate`,
  ID = `00`,
  LD = RegExp(
    `^\\s?((?!ff)[\\da-f]{2})-((?![0]{32})[\\da-f]{32})-((?![0]{16})[\\da-f]{16})-([\\da-f]{2})(-.*)?\\s?$`,
  );
function RD(e) {
  let t = LD.exec(e);
  return !t || (t[1] === `00` && t[5])
    ? null
    : { traceId: t[2], spanId: t[3], traceFlags: parseInt(t[4], 16) };
}
var zD = class {
    inject(e, t, n) {
      let r = G.trace.getSpanContext(e);
      if (!r || YE(e) || !(0, G.isSpanContextValid)(r)) return;
      let i = `${ID}-${r.traceId}-${r.spanId}-0${Number(r.traceFlags || G.TraceFlags.NONE).toString(16)}`;
      (n.set(t, PD, i), r.traceState && n.set(t, FD, r.traceState.serialize()));
    }
    extract(e, t, n) {
      let r = n.get(t, PD);
      if (!r) return e;
      let i = Array.isArray(r) ? r[0] : r;
      if (typeof i != `string`) return e;
      let a = RD(i);
      if (!a) return e;
      a.isRemote = !0;
      let o = n.get(t, FD);
      if (o) {
        let e = Array.isArray(o) ? o.join(`,`) : o;
        a.traceState = new ND(typeof e == `string` ? e : void 0);
      }
      return G.trace.setSpanContext(e, a);
    }
    fields() {
      return [PD, FD];
    }
  },
  BD = `[object Object]`,
  VD = `[object Null]`,
  HD = `[object Undefined]`,
  UD = Function.prototype.toString,
  WD = UD.call(Object),
  GD = Object.getPrototypeOf,
  KD = Object.prototype,
  qD = KD.hasOwnProperty,
  JD = Symbol ? Symbol.toStringTag : void 0,
  YD = KD.toString;
function XD(e) {
  if (!ZD(e) || QD(e) !== BD) return !1;
  let t = GD(e);
  if (t === null) return !0;
  let n = qD.call(t, `constructor`) && t.constructor;
  return typeof n == `function` && n instanceof n && UD.call(n) === WD;
}
function ZD(e) {
  return typeof e == `object` && !!e;
}
function QD(e) {
  return e == null ? (e === void 0 ? HD : VD) : JD && JD in Object(e) ? $D(e) : eO(e);
}
function $D(e) {
  let t = qD.call(e, JD),
    n = e[JD],
    r = !1;
  try {
    ((e[JD] = void 0), (r = !0));
  } catch {}
  let i = YD.call(e);
  return (r && (t ? (e[JD] = n) : delete e[JD]), i);
}
function eO(e) {
  return YD.call(e);
}
var tO = 20;
function nO(...e) {
  let t = e.shift(),
    n = new WeakMap();
  for (; e.length > 0;) t = iO(t, e.shift(), 0, n);
  return t;
}
function rO(e) {
  return oO(e) ? e.slice() : e;
}
function iO(e, t, n = 0, r) {
  let i;
  if (!(n > tO)) {
    if ((n++, lO(e) || lO(t) || sO(t))) i = rO(t);
    else if (oO(e)) {
      if (((i = e.slice()), oO(t))) for (let e = 0, n = t.length; e < n; e++) i.push(rO(t[e]));
      else if (cO(t)) {
        let e = Object.keys(t);
        for (let n = 0, r = e.length; n < r; n++) {
          let r = e[n];
          i[r] = rO(t[r]);
        }
      }
    } else if (cO(e)) {
      if (cO(t)) {
        if (!uO(e, t)) return t;
        i = Object.assign({}, e);
        let a = Object.keys(t);
        for (let o = 0, s = a.length; o < s; o++) {
          let s = a[o],
            c = t[s];
          if (lO(c)) c === void 0 ? delete i[s] : (i[s] = c);
          else {
            let a = i[s],
              o = c;
            if (aO(e, s, r) || aO(t, s, r)) delete i[s];
            else {
              if (cO(a) && cO(o)) {
                let n = r.get(a) || [],
                  i = r.get(o) || [];
                (n.push({ obj: e, key: s }), i.push({ obj: t, key: s }), r.set(a, n), r.set(o, i));
              }
              i[s] = iO(i[s], c, n, r);
            }
          }
        }
      } else i = t;
    }
    return i;
  }
}
function aO(e, t, n) {
  let r = n.get(e[t]) || [];
  for (let n = 0, i = r.length; n < i; n++) {
    let i = r[n];
    if (i.key === t && i.obj === e) return !0;
  }
  return !1;
}
function oO(e) {
  return Array.isArray(e);
}
function sO(e) {
  return typeof e == `function`;
}
function cO(e) {
  return !lO(e) && !oO(e) && !sO(e) && typeof e == `object`;
}
function lO(e) {
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
function uO(e, t) {
  return !(!XD(e) || !XD(t));
}
var dO = class {
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
  },
  fO = class {
    _callback;
    _that;
    _isCalled = !1;
    _deferred = new dO();
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
  };
function pO(e) {
  return e >= 48 && e <= 57 ? e - 48 : e >= 97 && e <= 102 ? e - 87 : e - 55;
}
function mO(e) {
  let t = new Uint8Array(e.length / 2),
    n = 0;
  for (let r = 0; r < e.length; r += 2) {
    let i = pO(e.charCodeAt(r)),
      a = pO(e.charCodeAt(r + 1));
    t[n++] = (i << 4) | a;
  }
  return t;
}
function hO(e) {
  let t = BigInt(1e9);
  return BigInt(Math.trunc(e[0])) * t + BigInt(Math.trunc(e[1]));
}
function gO(e) {
  return { low: Number(BigInt.asUintN(32, e)), high: Number(BigInt.asUintN(32, e >> BigInt(32))) };
}
function _O(e) {
  return gO(hO(e));
}
function vO(e) {
  return hO(e).toString();
}
var yO = typeof BigInt < `u` ? vO : vD;
function bO(e) {
  return e;
}
function xO(e) {
  if (e !== void 0) return mO(e);
}
var SO = { encodeHrTime: _O, encodeSpanContext: mO, encodeOptionalSpanContext: xO };
function CO(e) {
  if (e === void 0) return SO;
  let t = e.useLongBits ?? !0,
    n = e.useHex ?? !1;
  return {
    encodeHrTime: t ? _O : yO,
    encodeSpanContext: n ? bO : mO,
    encodeOptionalSpanContext: n ? bO : xO,
  };
}
function wO(e) {
  let t = { attributes: EO(e.attributes), droppedAttributesCount: 0 },
    n = e.schemaUrl;
  return (n && n !== `` && (t.schemaUrl = n), t);
}
function TO(e) {
  return { name: e.name, version: e.version };
}
function EO(e) {
  return Object.keys(e).map((t) => DO(t, e[t]));
}
function DO(e, t) {
  return { key: e, value: OO(t) };
}
function OO(e) {
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
            ? { arrayValue: { values: e.map(OO) } }
            : t === `object` && e != null
              ? { kvlistValue: { values: Object.entries(e).map(([e, t]) => DO(e, t)) } }
              : {};
}
function kO() {
  return `unknown_service:${process.argv0}`;
}
var AO = (e) => typeof e == `object` && !!e && typeof e.then == `function`,
  jO = class e {
    _rawAttributes;
    _asyncAttributesPending = !1;
    _schemaUrl;
    _memoizedAttributes;
    static FromAttributeList(t, n) {
      let r = new e({}, n);
      return (
        (r._rawAttributes = PO(t)),
        (r._asyncAttributesPending = t.filter(([e, t]) => AO(t)).length > 0),
        r
      );
    }
    constructor(e, t) {
      let n = e.attributes ?? {};
      ((this._rawAttributes = Object.entries(n).map(
        ([e, t]) => (AO(t) && (this._asyncAttributesPending = !0), [e, t]),
      )),
        (this._rawAttributes = PO(this._rawAttributes)),
        (this._schemaUrl = FO(t?.schemaUrl)));
    }
    get asyncAttributesPending() {
      return this._asyncAttributesPending;
    }
    async waitForAsyncAttributes() {
      if (this.asyncAttributesPending) {
        for (let e = 0; e < this._rawAttributes.length; e++) {
          let [t, n] = this._rawAttributes[e];
          this._rawAttributes[e] = [t, AO(n) ? await n : n];
        }
        this._asyncAttributesPending = !1;
      }
    }
    get attributes() {
      if (
        (this.asyncAttributesPending &&
          G.diag.error(`Accessing resource attributes before async attributes settled`),
        this._memoizedAttributes)
      )
        return this._memoizedAttributes;
      let e = {};
      for (let [t, n] of this._rawAttributes) {
        if (AO(n)) {
          G.diag.debug(`Unsettled resource attribute ${t} skipped`);
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
      let n = IO(this, t),
        r = n ? { schemaUrl: n } : void 0;
      return e.FromAttributeList([...t.getRawAttributes(), ...this.getRawAttributes()], r);
    }
  };
function MO(e, t) {
  return jO.FromAttributeList(Object.entries(e), t);
}
function NO() {
  return MO({
    [J.ATTR_SERVICE_NAME]: kO(),
    [J.ATTR_TELEMETRY_SDK_LANGUAGE]: uD[J.ATTR_TELEMETRY_SDK_LANGUAGE],
    [J.ATTR_TELEMETRY_SDK_NAME]: uD[J.ATTR_TELEMETRY_SDK_NAME],
    [J.ATTR_TELEMETRY_SDK_VERSION]: uD[J.ATTR_TELEMETRY_SDK_VERSION],
  });
}
function PO(e) {
  return e.map(([e, t]) =>
    AO(t)
      ? [
          e,
          t.catch((t) => {
            G.diag.debug(`promise rejection for resource attribute: %s - %s`, e, t);
          }),
        ]
      : [e, t],
  );
}
function FO(e) {
  if (typeof e == `string` || e === void 0) return e;
  G.diag.warn(`Schema URL must be string or undefined, got %s. Schema URL will be ignored.`, e);
}
function IO(e, t) {
  let n = e?.schemaUrl,
    r = t?.schemaUrl,
    i = n === void 0 || n === ``,
    a = r === void 0 || r === ``;
  if (i) return r;
  if (a || n === r) return n;
  G.diag.warn(
    `Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.`,
    n,
    r,
  );
}
var LO = 256,
  RO = 512;
function zO(e, t) {
  let n = (e & 255) | LO;
  return (t && (n |= RO), n);
}
function BO(e, t) {
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
    attributes: EO(e.attributes),
    droppedAttributesCount: e.droppedAttributesCount,
    events: e.events.map((e) => HO(e, t)),
    droppedEventsCount: e.droppedEventsCount,
    status: { code: r.code, message: r.message },
    links: e.links.map((e) => VO(e, t)),
    droppedLinksCount: e.droppedLinksCount,
    flags: zO(n.traceFlags, e.parentSpanContext?.isRemote),
  };
}
function VO(e, t) {
  return {
    attributes: e.attributes ? EO(e.attributes) : [],
    spanId: t.encodeSpanContext(e.context.spanId),
    traceId: t.encodeSpanContext(e.context.traceId),
    traceState: e.context.traceState?.serialize(),
    droppedAttributesCount: e.droppedAttributesCount || 0,
    flags: zO(e.context.traceFlags, e.context.isRemote),
  };
}
function HO(e, t) {
  return {
    attributes: e.attributes ? EO(e.attributes) : [],
    name: e.name,
    timeUnixNano: t.encodeHrTime(e.time),
    droppedAttributesCount: e.droppedAttributesCount || 0,
  };
}
function UO(e, t) {
  return { resourceSpans: GO(e, CO(t)) };
}
function WO(e) {
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
function GO(e, t) {
  let n = WO(e),
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
        let n = e.map((e) => BO(e, t));
        o.push({
          scope: TO(e[0].instrumentationScope),
          spans: n,
          schemaUrl: e[0].instrumentationScope.schemaUrl,
        });
      }
      c = s.next();
    }
    let l = wO(e),
      u = { resource: l, scopeSpans: o, schemaUrl: l.schemaUrl };
    (r.push(u), (a = i.next()));
  }
  return r;
}
var KO = {
    serializeRequest: (e) => {
      let t = UO(e, { useHex: !0, useLongBits: !1 });
      return new TextEncoder().encode(JSON.stringify(t));
    },
    deserializeResponse: (e) => {
      if (e.length === 0) return {};
      let t = new TextDecoder();
      return JSON.parse(t.decode(e));
    },
  },
  qO = `exception`,
  JO = class {
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
    status = { code: G.SpanStatusCode.UNSET };
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
        (this._performanceStartTime = sD.now()),
        (this._performanceOffset = t - (this._performanceStartTime + hD())),
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
      if (e.length === 0) return (G.diag.warn(`Invalid attribute key: ${e}`), this);
      if (!QE(t)) return (G.diag.warn(`Invalid attribute value set for key: ${e}`), this);
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
      if (r === 0) return (G.diag.warn(`No events allowed.`), this._droppedEventsCount++, this);
      (r !== void 0 &&
        this.events.length >= r &&
        (this._droppedEventsCount === 0 && G.diag.debug(`Dropping extra events.`),
        this.events.shift(),
        this._droppedEventsCount++),
        bD(t) && (bD(n) || (n = t), (t = void 0)));
      let i = XE(t);
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
            (G.diag.warn(`Dropping invalid status.message of type '${typeof e.message}', expected 'string'`),
            delete this.status.message),
          this);
    }
    updateName(e) {
      return (this._isSpanEnded() || (this.name = e), this);
    }
    end(e) {
      if (this._isSpanEnded()) {
        G.diag.error(
          `${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`,
        );
        return;
      }
      ((this._ended = !0),
        (this.endTime = this._getTime(e)),
        (this._duration = _D(this.startTime, this.endTime)),
        this._duration[0] < 0 &&
          (G.diag.warn(
            `Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.`,
            this.startTime,
            this.endTime,
          ),
          (this.endTime = this.startTime.slice()),
          (this._duration = [0, 0])),
        this._droppedEventsCount > 0 &&
          G.diag.warn(`Dropped ${this._droppedEventsCount} events because eventCountLimit reached`),
        this._spanProcessor.onEnd(this));
    }
    _getTime(e) {
      if (typeof e == `number` && e <= sD.now()) return gD(e + this._performanceOffset);
      if (typeof e == `number`) return mD(e);
      if (e instanceof Date) return mD(e.getTime());
      if (yD(e)) return e;
      if (this._startTimeProvided) return mD(Date.now());
      let t = sD.now() - this._performanceStartTime;
      return xD(this.startTime, mD(t));
    }
    isRecording() {
      return this._ended === !1;
    }
    recordException(e, t) {
      let n = {};
      (typeof e == `string`
        ? (n[Y.ATTR_EXCEPTION_MESSAGE] = e)
        : e &&
          (e.code
            ? (n[Y.ATTR_EXCEPTION_TYPE] = e.code.toString())
            : e.name && (n[Y.ATTR_EXCEPTION_TYPE] = e.name),
          e.message && (n[Y.ATTR_EXCEPTION_MESSAGE] = e.message),
          e.stack && (n[Y.ATTR_EXCEPTION_STACKTRACE] = e.stack)),
        n[Y.ATTR_EXCEPTION_TYPE] || n[Y.ATTR_EXCEPTION_MESSAGE]
          ? this.addEvent(qO, n, t)
          : G.diag.warn(`Failed to record an exception ${e}`));
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
        G.diag.warn(
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
        ? (G.diag.warn(`Attribute value limit must be positive, got ${t}`), e)
        : typeof e == `string`
          ? this._truncateToLimitUtil(e, t)
          : Array.isArray(e)
            ? e.map((e) => (typeof e == `string` ? this._truncateToLimitUtil(e, t) : e))
            : e;
    }
  },
  YO;
(function (e) {
  ((e[(e.NOT_RECORD = 0)] = `NOT_RECORD`),
    (e[(e.RECORD = 1)] = `RECORD`),
    (e[(e.RECORD_AND_SAMPLED = 2)] = `RECORD_AND_SAMPLED`));
})((YO ||= {}));
var XO = class {
    shouldSample() {
      return { decision: YO.NOT_RECORD };
    }
    toString() {
      return `AlwaysOffSampler`;
    }
  },
  ZO = class {
    shouldSample() {
      return { decision: YO.RECORD_AND_SAMPLED };
    }
    toString() {
      return `AlwaysOnSampler`;
    }
  },
  QO = class {
    _root;
    _remoteParentSampled;
    _remoteParentNotSampled;
    _localParentSampled;
    _localParentNotSampled;
    constructor(e) {
      ((this._root = e.root),
        (this._root ||= (aD(Error(`ParentBasedSampler must have a root sampler configured`)), new ZO())),
        (this._remoteParentSampled = e.remoteParentSampled ?? new ZO()),
        (this._remoteParentNotSampled = e.remoteParentNotSampled ?? new XO()),
        (this._localParentSampled = e.localParentSampled ?? new ZO()),
        (this._localParentNotSampled = e.localParentNotSampled ?? new XO()));
    }
    shouldSample(e, t, n, r, i, a) {
      let o = G.trace.getSpanContext(e);
      return !o || !(0, G.isSpanContextValid)(o)
        ? this._root.shouldSample(e, t, n, r, i, a)
        : o.isRemote
          ? o.traceFlags & G.TraceFlags.SAMPLED
            ? this._remoteParentSampled.shouldSample(e, t, n, r, i, a)
            : this._remoteParentNotSampled.shouldSample(e, t, n, r, i, a)
          : o.traceFlags & G.TraceFlags.SAMPLED
            ? this._localParentSampled.shouldSample(e, t, n, r, i, a)
            : this._localParentNotSampled.shouldSample(e, t, n, r, i, a);
    }
    toString() {
      return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
    }
  },
  $O = class {
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
          (0, G.isValidTraceId)(t) && this._accumulate(t) < this._upperBound
            ? YO.RECORD_AND_SAMPLED
            : YO.NOT_RECORD,
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
  },
  ek;
(function (e) {
  ((e.AlwaysOff = `always_off`),
    (e.AlwaysOn = `always_on`),
    (e.ParentBasedAlwaysOff = `parentbased_always_off`),
    (e.ParentBasedAlwaysOn = `parentbased_always_on`),
    (e.ParentBasedTraceIdRatio = `parentbased_traceidratio`),
    (e.TraceIdRatio = `traceidratio`));
})((ek ||= {}));
var tk = 1;
function nk() {
  return {
    sampler: rk(),
    forceFlushTimeoutMillis: 3e4,
    generalLimits: {
      attributeValueLengthLimit: X(`OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT`) ?? 1 / 0,
      attributeCountLimit: X(`OTEL_ATTRIBUTE_COUNT_LIMIT`) ?? 128,
    },
    spanLimits: {
      attributeValueLengthLimit: X(`OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT`) ?? 1 / 0,
      attributeCountLimit: X(`OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT`) ?? 128,
      linkCountLimit: X(`OTEL_SPAN_LINK_COUNT_LIMIT`) ?? 128,
      eventCountLimit: X(`OTEL_SPAN_EVENT_COUNT_LIMIT`) ?? 128,
      attributePerEventCountLimit: X(`OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT`) ?? 128,
      attributePerLinkCountLimit: X(`OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT`) ?? 128,
    },
  };
}
function rk() {
  let e = oD(`OTEL_TRACES_SAMPLER`) ?? ek.ParentBasedAlwaysOn;
  switch (e) {
    case ek.AlwaysOn:
      return new ZO();
    case ek.AlwaysOff:
      return new XO();
    case ek.ParentBasedAlwaysOn:
      return new QO({ root: new ZO() });
    case ek.ParentBasedAlwaysOff:
      return new QO({ root: new XO() });
    case ek.TraceIdRatio:
      return new $O(ik());
    case ek.ParentBasedTraceIdRatio:
      return new QO({ root: new $O(ik()) });
    default:
      return (
        G.diag.error(`OTEL_TRACES_SAMPLER value "${e}" invalid, defaulting to "${ek.ParentBasedAlwaysOn}".`),
        new QO({ root: new ZO() })
      );
  }
}
function ik() {
  let e = X(`OTEL_TRACES_SAMPLER_ARG`);
  return e == null
    ? (G.diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${tk}.`), tk)
    : e < 0 || e > 1
      ? (G.diag.error(
          `OTEL_TRACES_SAMPLER_ARG=${e} was given, but it is out of range ([0..1]), defaulting to ${tk}.`,
        ),
        tk)
      : e;
}
function ak(e) {
  let t = { sampler: rk() },
    n = nk(),
    r = Object.assign({}, n, t, e);
  return (
    (r.generalLimits = Object.assign({}, n.generalLimits, e.generalLimits || {})),
    (r.spanLimits = Object.assign({}, n.spanLimits, e.spanLimits || {})),
    r
  );
}
function ok(e) {
  let t = Object.assign({}, e.spanLimits);
  return (
    (t.attributeCountLimit =
      e.spanLimits?.attributeCountLimit ??
      e.generalLimits?.attributeCountLimit ??
      X(`OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT`) ??
      X(`OTEL_ATTRIBUTE_COUNT_LIMIT`) ??
      128),
    (t.attributeValueLengthLimit =
      e.spanLimits?.attributeValueLengthLimit ??
      e.generalLimits?.attributeValueLengthLimit ??
      X(`OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT`) ??
      X(`OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT`) ??
      1 / 0),
    Object.assign({}, e, { spanLimits: t })
  );
}
var sk = class {
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
            : (X(`OTEL_BSP_MAX_EXPORT_BATCH_SIZE`) ?? 512)),
        (this._maxQueueSize =
          typeof t?.maxQueueSize == `number` ? t.maxQueueSize : (X(`OTEL_BSP_MAX_QUEUE_SIZE`) ?? 2048)),
        (this._scheduledDelayMillis =
          typeof t?.scheduledDelayMillis == `number`
            ? t.scheduledDelayMillis
            : (X(`OTEL_BSP_SCHEDULE_DELAY`) ?? 5e3)),
        (this._exportTimeoutMillis =
          typeof t?.exportTimeoutMillis == `number`
            ? t.exportTimeoutMillis
            : (X(`OTEL_BSP_EXPORT_TIMEOUT`) ?? 3e4)),
        (this._shutdownOnce = new fO(this._shutdown, this)),
        this._maxExportBatchSize > this._maxQueueSize &&
          (G.diag.warn(
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
        ((e.spanContext().traceFlags & G.TraceFlags.SAMPLED) !== 0 && this._addToBuffer(e));
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
        (this._droppedSpansCount === 0 && G.diag.debug(`maxQueueSize reached, dropping spans`),
          this._droppedSpansCount++);
        return;
      }
      (this._droppedSpansCount > 0 &&
        (G.diag.warn(`Dropped ${this._droppedSpansCount} spans because maxQueueSize reached`),
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
              G.context.with(JE(G.context.active()), () => {
                let r;
                this._finishedSpans.length <= this._maxExportBatchSize
                  ? ((r = this._finishedSpans), (this._finishedSpans = []))
                  : (r = this._finishedSpans.splice(0, this._maxExportBatchSize));
                let i = () =>
                    this._exporter.export(r, (r) => {
                      (clearTimeout(n),
                        r.code === SD.SUCCESS
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
                      (aD(e), t(e));
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
              ((this._isExporting = !1), aD(e));
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
  ck = class extends sk {
    onShutdown() {}
  },
  lk = 8,
  uk = 16,
  dk = class {
    generateTraceId = pk(uk);
    generateSpanId = pk(lk);
  },
  fk = Buffer.allocUnsafe(uk);
function pk(e) {
  return function () {
    for (let t = 0; t < e / 4; t++) fk.writeUInt32BE((Math.random() * 2 ** 32) >>> 0, t * 4);
    for (let t = 0; t < e && !(fk[t] > 0); t++) t === e - 1 && (fk[e - 1] = 1);
    return fk.toString(`hex`, 0, e);
  };
}
var mk = class {
    _sampler;
    _generalLimits;
    _spanLimits;
    _idGenerator;
    instrumentationScope;
    _resource;
    _spanProcessor;
    constructor(e, t, n, r) {
      let i = ak(t);
      ((this._sampler = i.sampler),
        (this._generalLimits = i.generalLimits),
        (this._spanLimits = i.spanLimits),
        (this._idGenerator = t.idGenerator || new dk()),
        (this._resource = n),
        (this._spanProcessor = r),
        (this.instrumentationScope = e));
    }
    startSpan(e, t = {}, n = G.context.active()) {
      t.root && (n = G.trace.deleteSpan(n));
      let r = G.trace.getSpan(n);
      if (YE(n))
        return (
          G.diag.debug(`Instrumentation suppressed, returning Noop Span`),
          G.trace.wrapSpanContext(G.INVALID_SPAN_CONTEXT)
        );
      let i = r?.spanContext(),
        a = this._idGenerator.generateSpanId(),
        o,
        s,
        c;
      !i || !G.trace.isSpanContextValid(i)
        ? (s = this._idGenerator.generateTraceId())
        : ((s = i.traceId), (c = i.traceState), (o = i));
      let l = t.kind ?? G.SpanKind.INTERNAL,
        u = (t.links ?? []).map((e) => ({ context: e.context, attributes: XE(e.attributes) })),
        d = XE(t.attributes),
        f = this._sampler.shouldSample(n, s, e, l, d, u);
      c = f.traceState ?? c;
      let p = f.decision === G.SamplingDecision.RECORD_AND_SAMPLED ? G.TraceFlags.SAMPLED : G.TraceFlags.NONE,
        m = { traceId: s, spanId: a, traceFlags: p, traceState: c };
      if (f.decision === G.SamplingDecision.NOT_RECORD)
        return (
          G.diag.debug(`Recording is off, propagating context in a non-recording span`),
          G.trace.wrapSpanContext(m)
        );
      let h = XE(Object.assign(d, f.attributes));
      return new JO({
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
      let s = a ?? G.context.active(),
        c = this.startSpan(e, i, s),
        l = G.trace.setSpan(s, c);
      return G.context.with(l, o, void 0, c);
    }
    getGeneralLimits() {
      return this._generalLimits;
    }
    getSpanLimits() {
      return this._spanLimits;
    }
  },
  hk = class {
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
            (aD(e || Error(`MultiSpanProcessor: forceFlush failed`)), t());
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
  },
  gk;
(function (e) {
  ((e[(e.resolved = 0)] = `resolved`),
    (e[(e.timeout = 1)] = `timeout`),
    (e[(e.error = 2)] = `error`),
    (e[(e.unresolved = 3)] = `unresolved`));
})((gk ||= {}));
var _k = class {
    _config;
    _tracers = new Map();
    _resource;
    _activeSpanProcessor;
    constructor(e = {}) {
      let t = nO({}, nk(), ok(e));
      ((this._resource = t.resource ?? NO()),
        (this._config = Object.assign({}, t, { resource: this._resource })));
      let n = [];
      (e.spanProcessors?.length && n.push(...e.spanProcessors), (this._activeSpanProcessor = new hk(n)));
    }
    getTracer(e, t, n) {
      let r = `${e}@${t || ``}:${n?.schemaUrl || ``}`;
      return (
        this._tracers.has(r) ||
          this._tracers.set(
            r,
            new mk(
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
                    (r = gk.timeout));
                }, e);
              t.forceFlush()
                .then(() => {
                  (clearTimeout(i), r !== gk.timeout && ((r = gk.resolved), n(r)));
                })
                .catch((e) => {
                  (clearTimeout(i), (r = gk.error), n(e));
                });
            }),
        );
      return new Promise((e, n) => {
        Promise.all(t)
          .then((t) => {
            let r = t.filter((e) => e !== gk.resolved);
            r.length > 0 ? n(r) : e();
          })
          .catch((e) => n([e]));
      });
    }
    shutdown() {
      return this._activeSpanProcessor.shutdown();
    }
  },
  vk = new zD(),
  yk = null,
  bk = null,
  xk = new $O(0),
  Sk = 0,
  Ck = !1,
  wk = {
    shouldSample: (e, t, n, r, i, a) =>
      a?.some(({ context: e }) => (e.traceFlags & G.TraceFlags.SAMPLED) !== 0)
        ? { decision: YO.RECORD_AND_SAMPLED }
        : xk.shouldSample(e, t),
    toString: () => xk.toString(),
  };
function Tk(e, t, n) {
  (G.context.setGlobalContextManager(new FS()),
    (Sk = e.desktopTraceSampleRate),
    (Ck = t === `electron-main`),
    (xk = new $O(Sk)),
    n != null && (yk = n));
  let r = new _k({
    resource: MO({
      "codex.build_flavor": e.buildFlavor,
      "codex.build_number": e.buildNumber ?? `unknown`,
      "codex.process": t,
      "os.type": process.platform,
      "service.name": `codex-desktop`,
      "service.version": e.appVersion,
    }),
    sampler: new QO({ root: wk }),
    spanProcessors: [
      new ck(Mk(), {
        exportTimeoutMillis: 1e4,
        maxExportBatchSize: 256,
        maxQueueSize: 1024,
        scheduledDelayMillis: 5e3,
      }),
    ],
  });
  bk = r;
  let i = r.getTracer(`codex-desktop`);
  s.Qt({
    getActiveSpanContext: () => {
      let e = G.trace.getActiveSpan();
      if (e == null) return null;
      let { spanId: t, traceFlags: n, traceId: r } = e.spanContext();
      return (n & G.TraceFlags.SAMPLED) === 0 ? null : { spanId: t, traceId: r };
    },
    getActiveTraceContext: () => {
      let e = {};
      return (
        vk.inject(G.context.active(), e, G.defaultTextMapSetter),
        e.traceparent == null
          ? null
          : { traceparent: e.traceparent, ...(e.tracestate == null ? {} : { tracestate: e.tracestate }) }
      );
    },
    runWithTraceContext: (e, t) =>
      e == null ? t() : G.context.with(vk.extract(G.context.active(), e, G.defaultTextMapGetter), t),
    setActiveSpanAttributes: (e) => {
      G.trace.getActiveSpan()?.setAttributes(e);
    },
    setActiveSpanOutcome: (e, t) => {
      let n = G.trace.getActiveSpan();
      n != null &&
        (n.setAttribute(`codex.outcome`, e),
        e === `failure` &&
          (n.setAttribute(`error.category`, t ?? `operation`),
          n.setAttribute(`error.type`, `operation_failed`),
          n.setStatus({ code: G.SpanStatusCode.ERROR })));
    },
    startSpan: (e, t) => {
      let n =
        e.root === !0
          ? G.ROOT_CONTEXT
          : e.trace == null
            ? G.context.active()
            : vk.extract(G.context.active(), e.trace, G.defaultTextMapGetter);
      return i.startActiveSpan(
        e.name,
        {
          attributes: { "codex.operation": e.op, ...e.attributes },
          links: e.links?.flatMap((e) => {
            let t = G.trace.getSpanContext(vk.extract(G.ROOT_CONTEXT, e, G.defaultTextMapGetter));
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
                e[`codex.outcome`] === `failure` && n.setStatus({ code: G.SpanStatusCode.ERROR }));
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
function Ek(e) {
  yk = e;
}
function Dk(e) {
  process.env.CODEX_OTEL_TRACES_ENDPOINT ??
    ((Sk = Number.isFinite(e) ? Math.min(1, Math.max(0, e)) : 0), (xk = new $O(Sk)));
}
function Ok() {
  return Sk > 0;
}
function kk() {
  return Sk;
}
async function Ak(e) {
  if (!Ck || Ok()) {
    if (yk == null) throw Error(`Desktop trace exporter is unavailable`);
    await yk(e);
  }
}
async function jk() {
  await bk?.forceFlush();
}
function Mk() {
  return {
    export: (e, t) => {
      let n = KO.serializeRequest(e);
      if (n == null) {
        t({ code: SD.FAILED });
        return;
      }
      Ak(n).then(
        () => t({ code: SD.SUCCESS }),
        (e) => t({ code: SD.FAILED, error: e }),
      );
    },
    shutdown: async () => {},
  };
}
var Nk = null;
function Pk(e) {
  if (Nk) return Nk;
  let r = Date.now();
  if (process.env.CODEX_DESKTOP_NETWORK_POLICY != null)
    throw Error(
      `Restricted Desktop networking is not available in this runtime. Use app-server application requirements instead of CODEX_DESKTOP_NETWORK_POLICY.`,
    );
  let i = new Hn(t.c(), c.t());
  (s.it((e, t) => i.fetch(e, t)), i.observeSessions());
  let o = new a.p(),
    u = new KE(),
    d = (e) => e.analytics?.enabled !== !1,
    f = o.get().then(d);
  (u.register(
    f.catch(() => !1),
    d,
  ),
    Vn(f),
    f
      .then(
        (e) => NE(e, i),
        () => NE(!1, i),
      )
      .catch((e) => {
        l.r().warning(`Failed to initialize desktop error reporting`, { safe: {}, sensitive: { error: e } });
      }),
    Tk(ME, `electron-main`));
  let p = e ?? n.i.resolve(),
    m = t._(p),
    h = Te((e, t, n) => {
      jE.captureException(e, {
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
    v = new a.pt({
      analyticsEnabled: f,
      waitUntilReady: () => i.whenReady(),
      fetchImpl: (e, t) => i.fetch(e, t),
      reportFailure: _,
    });
  y.app.once(`quit`, () => {
    (v.dispose(), i.dispose());
  });
  let b = new a.ft({
    source: `codex-desktop`,
    env: p,
    codexAppSessionId: n.o,
    platform: process.platform,
    buildInfo: { version: y.app.getVersion(), buildNumber: qn.value },
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
      if (Nk?.windowsActivation === `startup-task`) {
        Nk.windowsActivation = `interactive`;
        for (let e of S) e(!0);
        (S.clear(), Nk.onInteractiveLaunch?.());
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
    ne = () => {},
    re = (e) => {},
    ie = (e) => {},
    O = (e) => {},
    k = (e) => {},
    ae = (e) => {},
    oe = (e) => !1,
    se =
      p === n.i.Prod && process.platform === `darwin` && n.a(`codexReleaseChannel`) !== `prod-internal`
        ? new Xn((0, g.join)(y.app.getPath(`appData`), n.r(p)))
        : null;
  return (
    (Nk = {
      windowsActivation: null,
      onInteractiveLaunch: null,
      waitForInteractiveLaunch: () =>
        T
          ? Promise.resolve(!1)
          : Nk?.windowsActivation === `startup-task`
            ? new Promise((e) => S.add(e))
            : Promise.resolve(!0),
      get isBackgroundLaunch() {
        return this.windowsActivation === `startup-task`;
      },
      applicationNetwork: i,
      startedAtMs: r,
      buildFlavor: p,
      desktopSentry: jE,
      errorReporter: h,
      datadogLogger: b,
      maxLogLevel: m,
      startupConfig: o,
      startupPolicies: u,
      appUpdates: new Nn({
        enableUpdater: n.i.shouldIncludeUpdater(p, process.platform, process.env),
        buildFlavor: p,
        isPackaged: y.app.isPackaged,
        useInternalUpdateCdn: !1,
        getInternalUpdateCdnRequestHeaders: void 0,
        productionAppcastStateStore: se?.backendAppcastEnabled ? se : void 0,
        onUpdateReadyChanged: (e) => {
          ie(e);
        },
        onInstallUpdatesRequested: (e) => {
          D(e);
        },
        onInstallUpdatesAborted: () => {
          ne();
        },
        onInstallProgressChanged: (e) => {
          O(e);
        },
        onDownloadProgressChanged: (e) => {
          k(e);
        },
        onDownloadedUpdateAppBrandChanged: (e) => {
          ae(e);
        },
        onUpdateLifecycleStateChanged: (e) => {
          te(e);
        },
        onRelaunchNoticeChanged: (e) => {
          re(e);
        },
        isTrustedIpcEvent: (e) => oe(e),
      }),
      startupPhases: new Se(),
      productionAppcastStateStore: se,
      setSparkleBridgeHandlers: (e) => {
        (e.onInstallUpdatesRequested != null && (D = e.onInstallUpdatesRequested),
          e.onInstallUpdatesAborted != null && (ne = e.onInstallUpdatesAborted),
          e.onUpdateLifecycleStateChanged != null && (te = e.onUpdateLifecycleStateChanged),
          e.onRelaunchNoticeChanged != null && (re = e.onRelaunchNoticeChanged),
          e.onUpdateReadyChanged != null && (ie = e.onUpdateReadyChanged),
          e.onInstallProgressChanged != null && (O = e.onInstallProgressChanged),
          e.onDownloadProgressChanged != null && (k = e.onDownloadProgressChanged),
          e.onDownloadedUpdateAppBrandChanged != null && (ae = e.onDownloadedUpdateAppBrandChanged),
          e.isTrustedIpcEvent != null && (oe = e.isTrustedIpcEvent));
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
        if ((C.clear(), ee(), e === `new-chat` && Nk?.windowsActivation != null && E == null)) {
          Nk.queueSecondInstanceArgs([
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
    Nk
  );
}
var Fk = Object.freeze([`http:`, `https:`]),
  Ik = new Set([`about:blank`]);
function Lk(e) {
  return Rk(e).allowed;
}
function Rk(e) {
  if (Ik.has(e)) return { allowed: !0, reason: `allowed` };
  let t;
  try {
    t = new URL(e);
  } catch {
    return { allowed: !1, reason: `invalid_url` };
  }
  return Fk.includes(t.protocol)
    ? { allowed: !0, reason: `allowed` }
    : { allowed: !1, reason: `unsupported_protocol` };
}
function zk(e, t) {
  return e.includes(`://`)
    ? Bk(e, t.raw)
    : t.hostPort == null
      ? !t.raw.includes(`://`) && Bk(e, t.raw)
      : Bk(e, t.hostPort);
}
function Bk(e, t) {
  let n = Vk(e);
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
function Vk(e) {
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
var Hk = `MCP Apps browser belongs to another task.`,
  Uk = {
    Prepare: `mcp_app_frame_prepare`,
    Activate: `mcp_app_frame_activate`,
    Release: `mcp_app_frame_release`,
  };
function Wk(e) {
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
var Gk = new TextEncoder(),
  Kk = 42,
  qk = 63;
function Jk(e) {
  if (!eA(e)) return null;
  let t = Zk(e);
  return t === `` || t === `*.` || t === `**.`
    ? null
    : t.startsWith(`**.`)
      ? { canonicalPattern: t, hostnamePattern: t.slice(3), kind: `apex-and-subdomains` }
      : t.startsWith(`*.`)
        ? { canonicalPattern: t, hostnamePattern: t.slice(2), kind: `subdomains-only` }
        : { canonicalPattern: t, hostnamePattern: t, kind: `exact` };
}
function Yk(e, t) {
  let n = Xk(t);
  switch (e.kind) {
    case `exact`:
      return nA(e.hostnamePattern, n);
    case `subdomains-only`:
      return tA(e.hostnamePattern, n);
    case `apex-and-subdomains`:
      return nA(e.hostnamePattern, n) || tA(e.hostnamePattern, n);
  }
}
function Xk(e) {
  let t = oA(e);
  if (t.startsWith(`[`)) {
    let e = t.indexOf(`]`);
    if (e !== -1) return Qk(t.slice(1, e));
  }
  return sA(t, `:`) === 1 ? Qk(t.split(`:`)[0] ?? ``) : Qk(t);
}
function Zk(e) {
  let t = oA(e);
  return t === `*`
    ? `*`
    : t.startsWith(`**.`)
      ? `**.${Xk(t.slice(3))}`
      : t.startsWith(`*.`)
        ? `*.${Xk(t.slice(2))}`
        : Xk(t);
}
function Qk(e) {
  let t = aA(e).replace(/\.+$/u, ``);
  for (let e of [`%25`, `%`]) {
    let n = t.indexOf(e);
    if (n === -1) continue;
    let r = t.slice(0, n);
    if ($k(r)) return `${r}%${t.slice(n + e.length)}`;
  }
  return t;
}
function $k(e) {
  if (/^\d{1,3}(?:\.\d{1,3}){3}$/u.test(e))
    return e.split(`.`).every((e) => Number(e) <= 255 && String(Number(e)) === e);
  if (!e.includes(`:`) || /[^\da-f:.]/iu.test(e)) return !1;
  try {
    return new URL(`http://[${e}]/`).hostname.length > 0;
  } catch {
    return !1;
  }
}
function eA(e) {
  let t = oA(e);
  if (/[{}\\/\p{White_Space}]/u.test(t)) return !1;
  let n = t.replace(/^\*\*?\./u, ``);
  if (n.includes(`**`)) return !1;
  if (!/[[\]]/u.test(n)) return !0;
  let r = n.indexOf(`]`);
  if (!n.startsWith(`[`) || r === -1) return !1;
  let i = n.slice(1, r),
    a = n.slice(r + 1),
    o = Qk(i),
    s = o.split(`%`)[0] ?? ``;
  return (
    !/[[\]]/u.test(i + a) &&
    (o === `*` || (s.includes(`:`) && $k(s))) &&
    (/^\.*$/u.test(a) || a.startsWith(`:`))
  );
}
function tA(e, t) {
  return nA(`?*.${e}`, t);
}
function nA(e, t) {
  return rA(Gk.encode(e), Gk.encode(t));
}
function rA(e, t) {
  let n = 0,
    r = 0,
    i = -1,
    a = 0;
  for (; r < t.length;)
    if (e[n] === Kk) ((i = n), (n += 1), (a = r));
    else if (e[n] === qk || iA(e[n]) === iA(t[r])) ((n += 1), (r += 1));
    else if (i !== -1) ((n = i + 1), (a += 1), (r = a));
    else return !1;
  for (; e[n] === Kk;) n += 1;
  return n === e.length;
}
function iA(e) {
  return e !== void 0 && e >= 65 && e <= 90 ? e + 32 : e;
}
function aA(e) {
  return e.replace(/[A-Z]/g, (e) => e.toLowerCase());
}
function oA(e) {
  return e.replace(/^\p{White_Space}+|\p{White_Space}+$/gu, ``);
}
function sA(e, t) {
  let n = 0;
  for (let r of e) r === t && (n += 1);
  return n;
}
function cA(e) {
  try {
    let t = new URL(e);
    return t.protocol !== `http:` && t.protocol !== `https:` ? null : t;
  } catch {
    return null;
  }
}
function lA(e) {
  let t = cA(e);
  if (t != null) return t;
  try {
    let t = new URL(e);
    return Wk(t) ? t : null;
  } catch {
    return null;
  }
}
function uA(e, t) {
  return e.protocol !== t.protocol || e.port !== t.port ? !1 : Yk(e.hostnamePattern, t.hostname);
}
function dA(e, t) {
  let n = fA(e),
    r = cA(t.raw);
  return n == null || r == null ? zk(e, t) : uA(n, r);
}
function fA(e) {
  if (e !== e.trim() || /\s/u.test(e)) return null;
  let t = e.indexOf(`://`);
  if (t <= 0) return null;
  let n = pA(e.slice(t + 3));
  if (n == null || !hA(n) || gA(n)) return null;
  try {
    let t = lA(e.replaceAll(`?`, `*`));
    if (t == null) return null;
    let r = n.includes(`?`)
        ? n
            .split(`.`)
            .map((e) => (/[*?]/u.test(e) ? e : new URL(`https://${e}.invalid`).hostname.slice(0, -8)))
            .join(`.`)
        : t.hostname.replace(/%2a/giu, `*`),
      i = Jk(r);
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
function pA(e) {
  if (e.length === 0 || /[/#\\@]/u.test(e)) return null;
  if (e.startsWith(`[`)) {
    let t = e.indexOf(`]`);
    return t <= 1 || !mA(e.slice(t + 1)) ? null : e.slice(0, t + 1);
  }
  let t = e.indexOf(`:`);
  if (t === -1) return e;
  if (t !== e.lastIndexOf(`:`)) return null;
  let n = e.slice(t + 1);
  return /^\d+$/u.test(n) ? e.slice(0, t) : null;
}
function mA(e) {
  return e.length === 0 || (e.startsWith(`:`) && /^\d+$/u.test(e.slice(1)));
}
function hA(e) {
  return e.startsWith(`[`)
    ? e.endsWith(`]`)
    : e.length === 0 || e.includes(`%`) || e.endsWith(`..`)
      ? !1
      : e
          .replace(/\.$/u, ``)
          .split(`.`)
          .every((e) => e.length > 0);
}
function gA(e) {
  return (
    !e.startsWith(`[`) &&
    e
      .replace(/\.$/u, ``)
      .split(`.`)
      .some((e) => /[*?]/u.test(e) && /[^\p{ASCII}]/u.test(e))
  );
}
function _A(e, t) {
  let n = vA(e);
  if (n == null) return `invalid-origin`;
  let r = (e) => dA(e.trim(), n);
  return t.deniedWebMcpOrigins.some(r)
    ? `site-denied`
    : t.allowedWebMcpOrigins.some(r)
      ? `allowed`
      : t.webMcpEnabled === !1
        ? `default-denied`
        : `allowed`;
}
function vA(e) {
  let t = lA(e);
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
function yA(e, t, n) {
  let r = new URLSearchParams();
  (t?.blockId != null && r.set(`block`, t.blockId),
    t?.threadId != null && r.set(`thread`, t.threadId),
    t?.messageId != null && r.set(`message`, t.messageId));
  let i = r.toString(),
    a = t == null && n != null ? `#${encodeURIComponent(n)}` : ``;
  return `/space/${encodeURIComponent(e)}${i === `` ? a : `?${i}`}`;
}
var bA = [new URL(se).origin],
  xA = /^(page|space):\/\/([A-Za-z0-9][A-Za-z0-9._~-]{0,199})(?:#([A-Za-z0-9][A-Za-z0-9._~-]{0,199}))?$/u;
function SA(e) {
  return CA(e, `link`);
}
function CA(e, t) {
  let n = xA.exec(e);
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
    return bA.includes(n.origin) &&
      n.username === `` &&
      n.password === `` &&
      (t === `link` || (!n.searchParams.has(`thread`) && !n.searchParams.has(`message`))) &&
      i.Bo.test(a) &&
      (o == null || i.Bo.test(o))
      ? { kind: `page`, id: a, blockId: o }
      : null;
  } catch {
    return null;
  }
}
var wA = [
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
  TA = wA.map(({ extension: e }) => `.${e}`);
wA.flatMap(({ advertiseOnLinux: e, mimeType: t }) => (e === !1 ? [] : [t]));
var EA = new Set(TA);
function DA(e) {
  return EA.has(g.extname(e).toLowerCase());
}
function OA(e, t = process.platform) {
  let n = AA(e, t),
    r = [];
  for (let e = 1; e < n.length; e += 1) {
    let i = n[e];
    if (i == null || i.length === 0) continue;
    if (i === `--open-project`) {
      e += 1;
      continue;
    }
    if (i.startsWith(`--open-project=`) || i.startsWith(`-`) || jA(i)) continue;
    let a = MA(i);
    a != null && NA(a, t) && DA(a) && r.push(a);
  }
  return r;
}
function kA(e) {
  let t = [],
    n = new Set();
  for (let r of e) n.has(r) || (n.add(r), t.push({ label: g.basename(r), path: r, fsPath: r }));
  return t;
}
function AA(e, t) {
  if (t !== `win32`) return e;
  let n = e.indexOf(`--single-argument`);
  if (n === -1) return e;
  let r = e[n + 1];
  return n !== e.length - 2 || r == null || !/^(?:codex|https?):\/\//i.test(r) ? [] : [...e.slice(0, 1), r];
}
function jA(e) {
  return e.toLowerCase().startsWith(`codex://`);
}
function MA(e) {
  if (!e.toLowerCase().startsWith(`file://`)) return e;
  try {
    return (0, x.fileURLToPath)(e);
  } catch {
    return null;
  }
}
function NA(e, t) {
  return t === `win32` ? g.win32.isAbsolute(e) : g.posix.isAbsolute(e);
}
var PA = r.N().regex(i.Bo);
function FA(e) {
  if (e.username !== `` || e.password !== `` || e.port !== `` || e.search !== `` || e.hash !== ``)
    return null;
  let t = PA.safeParse(e.pathname.slice(1));
  return t.success ? yA(t.data) : null;
}
var IA = `codex`,
  LA = `chatgpt.com`,
  RA = `/codex/open-app`,
  zA = `codex-dev`,
  BA = `--open-project`,
  VA = new Set([`marketplace`]),
  HA = new Set([`marketplacePath`, `mode`]),
  UA = `connections/ssh/add`,
  WA = new Set([`name`, `alias`, `projectPath`, `enabled`]),
  GA = [
    `browser-use`,
    `chronicle`,
    `connections`,
    `connections/computer`,
    `connections/devices`,
    `connections/ssh`,
    UA,
  ],
  KA = new Set([`name`, `description`, `imageUrl`, `spriteVersionNumber`]),
  qA = r
    .r()
    .pipe(r.I([r.w(1), r.w(2)]))
    .optional(),
  JA = r.R().transform((e, t) => {
    let n = new URL(e).protocol;
    return n !== `http:` && n !== `https:`
      ? (t.addIssue({ code: `custom`, message: `Invalid browser deep link URL` }), r.G)
      : e;
  }),
  YA = r
    .N()
    .regex(/^[A-Za-z0-9_-]{1,128}$/)
    .transform(le),
  XA = r.d([`true`, `false`]).transform((e) => e === `true`),
  ZA = /^sage-backfill-[a-f0-9]{64}$/,
  QA = /^kepler(?:-[a-z0-9-]+)?\.gateway\.(?:data-0s|data-1)\.internal\.api\.openai\.org$/;
function $A(e, t = process.platform) {
  return e || t === `win32` || t === `linux` ? IA : zA;
}
function Z(e) {
  return e.pathname.split(`/`).filter(Boolean);
}
function Q(e, t) {
  let n = e.searchParams.get(t);
  return n == null || n.trim().length === 0 ? null : n;
}
function ej(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return null;
  }
  return t.protocol !== `https:` ||
    t.hostname !== LA ||
    t.pathname !== RA ||
    t.username !== `` ||
    t.password !== `` ||
    t.port !== `` ||
    t.hash !== ``
    ? null
    : i.qa(t.searchParams);
}
function tj(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return null;
  }
  if (t.protocol === `https:`) {
    let n = SA(e);
    if (n?.kind === `page`)
      return t.searchParams.has(`no_universal_links`)
        ? null
        : { kind: `spacePage`, path: `${yA(n.id)}${t.search}${t.hash}` };
    if (t.hostname !== LA || t.username !== `` || t.password !== `` || t.port !== `` || t.hash !== ``)
      return null;
    let r = u.l(t);
    if (r != null) return r;
    if (t.pathname === `/codex/deeplink` && t.searchParams.get(`target`) === `team-join`) {
      let e = t.searchParams.getAll(`team_id`),
        n = e.length === 1 ? e[0].trim() : null;
      return n ? { kind: `joinTeam`, teamId: n } : null;
    }
    if (t.pathname === `/cloud-environments/new`)
      return t.search === `` || t.search === `?utm_source=chatgpt.com`
        ? { kind: `cloudEnvironmentCreate` }
        : null;
    if (t.pathname === `/plugins` || t.pathname.startsWith(`/plugins/`))
      return t.searchParams.has(`no_universal_links`)
        ? null
        : ((t.pathname = t.pathname.slice(8)), Z(t).length === 0 ? { kind: `plugins` } : _j(t));
    let i = fe(e);
    if (i != null) return { kind: `libraryFile`, libraryFileId: i };
    let a = ej(e);
    return a == null ? ij(t) : tj(a);
  }
  let n = ce(t);
  if (n == null) return null;
  if (n.destination === `orbit`) return e === `${t.protocol}//orbit` ? { kind: `agentOnboarding` } : null;
  if (n.destination === `dots`) return e === `${t.protocol}//dots` ? { kind: `dotsHome` } : null;
  if (n.destination === `teams`) {
    let [e, n, r] = Z(t),
      i = yj(e);
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
      return vj(t) ?? pj(t) ?? mj(t) ?? _j(t);
    case `mcp-app`:
      return vj(t);
    case `activate`:
      return e === `${t.protocol}//activate/life_sciences`
        ? { kind: `experienceActivation`, experience: `life_sciences` }
        : null;
    case `pets`:
      return hj(t);
    case `automations`: {
      let [e, n] = Z(t);
      if (e == null) return { kind: `automations` };
      let i = yj(e),
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
      return lj(t);
    case `connector`:
      return bj(t, e);
    case `chatgpt`:
      return ij(t);
    case `browser`:
      return uj(t, e);
    case `launch`:
      return Z(t).length === 0 ? { kind: `launch` } : null;
    case `new`:
      return dj(t);
    case `settings`:
      return [`mcp-app`, `plugins`].includes(Z(t)[0] ?? ``) ? vj(t) : aj(t);
    case `shared-thread`:
      return nj(t);
    case `space`: {
      let e = FA(t);
      return e == null ? null : { kind: `spacePage`, path: e };
    }
    case `skills`:
      return rj(t);
    case `sites`: {
      let [e, n, i] = Z(t),
        a = yj(e),
        o = Q(t, `codex_thread_id`),
        s = o == null ? null : r.z().safeParse(o),
        c = Q(t, `browser_url`),
        l = c == null ? null : xj(c);
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
          ? dj(t)
          : { kind: `newThread` };
      let n = i.uo(t, { allowExtraPathSegments: !0 }),
        a = fj(t),
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
function nj(e) {
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
function rj(e) {
  let t = e.searchParams.get(`category`);
  return t == null
    ? { kind: `skills` }
    : { kind: `skills`, search: `?${new URLSearchParams({ category: t }).toString()}` };
}
function ij(e) {
  let [t, n, r, i] = Z(e);
  if (t !== `share` || i != null || e.searchParams.size !== 0) return null;
  let a = n;
  if (n === `e`) a = r;
  else if (r != null) return null;
  let o = yj(a);
  return o == null ? null : { kind: `sharedChatGptConversation`, sharedConversationId: o };
}
function aj(e) {
  let t = Z(e),
    n = t.join(`/`);
  if (n === `personal-vault`) {
    let t = new URLSearchParams({ view: `personal-vault` }),
      n = c.wt.safeParse({ type: Q(e, `type`), name: Q(e, `name`) });
    return (
      n.success &&
        e.searchParams.getAll(`type`).length === 1 &&
        e.searchParams.getAll(`name`).length === 1 &&
        gj(e, new Set([`type`, `name`])) &&
        (t.set(`type`, n.data.type), t.set(`name`, n.data.name)),
      { kind: `settings`, section: `local-environments`, search: `?${t.toString()}` }
    );
  }
  let [, r, a] = t,
    o = null;
  r === `google-chrome` ? (o = `chrome`) : r != null && i.Fr(r) && (o = r);
  let s = t[0] === `computer-use` && a == null && o != null ? `computer-use/${o}` : GA.find((e) => e === n);
  if (s == null) return { kind: `settings` };
  let l = { kind: `settings`, section: s };
  if (s === UA) {
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
      !gj(e, WA)
    )
      return { kind: `settings`, section: `connections/ssh` };
    let o = new URLSearchParams({ name: r });
    (i != null && o.set(`projectPath`, i), a != null && o.set(`enabled`, a), (l.search = `?${o.toString()}`));
  }
  return (e.hash !== `` && (l.hash = e.hash), l);
}
function oj(e, { allowBareWindowsProjectPathArg: t = !1 } = {}) {
  let n = [];
  for (let r = 0; r < e.length; r += 1) {
    let i = e[r];
    if (i === BA) {
      let t = e[r + 1]?.trim();
      ((r += 1), t && n.push({ route: { kind: `newThread`, path: t } }));
      continue;
    }
    if (i.startsWith(`${BA}=`)) {
      let e = i.slice(15).trim();
      e && n.push({ route: { kind: `newThread`, path: e } });
      continue;
    }
    let a = tj(i);
    if (a) {
      n.push({ route: a, sourceUrl: sj(a, i), isOsDeepLink: !0 });
      continue;
    }
    t && r > 0 && cj(i) && n.push({ route: { kind: `newThread`, path: i } });
  }
  return n;
}
function sj(e, t) {
  let n = new URL(t);
  if (n.protocol === `https:` && n.hostname === LA && n.pathname === RA) {
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
    r !== UA &&
    r !== `personal-vault` &&
    !(`browserUrl` in e && e.browserUrl != null)
    ? t
    : void 0;
}
function cj(e) {
  let t = e.trim();
  return t.length === 0 ? !1 : /^[a-zA-Z]:[\\/]/.test(t) || t.startsWith(`\\\\`);
}
function lj(e) {
  let [t] = Z(e);
  return t === `apply-config` ? { kind: `applyCodexAppConfig` } : null;
}
function uj(e, t) {
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
  let r = xj(n);
  return r == null ? null : { kind: `browser`, browserUrl: r };
}
function dj(e) {
  let t = fj(e),
    n = e.searchParams.getAll(`mode`),
    r = Q(e, `originUrl`),
    a = Q(e, `path`),
    o = Q(e, `projectId`),
    s;
  if (n.length > 1) return null;
  if (n.length === 1) {
    let e = i.no.safeParse(n[0]);
    if (!e.success) return null;
    s = e.data;
  }
  return t == null ||
    (a != null && !i.hi(a)) ||
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
function fj(e) {
  let t = Q(e, `prompt`),
    n = e.searchParams.get(`browserTabId`),
    r = n == null ? null : YA.safeParse(n),
    i = e.searchParams.get(`browserActive`),
    a = i == null ? null : XA.safeParse(i),
    o = e.searchParams.get(`browserUrl`),
    s = o == null ? null : JA.safeParse(o);
  if (
    (s != null && !s.success) ||
    (r != null && !r.success) ||
    (a != null && !a.success) ||
    (s == null && (r != null || a != null)) ||
    (a != null && r == null)
  )
    return null;
  if (a?.data === !1) {
    if (s == null || !s.success || r == null || !r.success || !ZA.test(r.data)) return null;
    let e = new URL(s.data);
    if (
      e.protocol !== `https:` ||
      e.username !== `` ||
      e.password !== `` ||
      e.port !== `` ||
      e.hash !== `` ||
      !QA.test(e.hostname) ||
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
function pj(e) {
  let [t, n, r] = Z(e);
  if (t !== `install` || r != null) return null;
  let a = yj(n);
  if (a == null || !gj(e, VA)) return null;
  let o = Q(e, `marketplace`)?.trim();
  return i.lo(o) ? { kind: `pluginInstall`, marketplaceName: o, pluginName: a } : null;
}
function mj(e) {
  let [t, n] = Z(e);
  if (n != null || !gj(e, HA)) return null;
  let r = yj(t),
    a = Q(e, `marketplacePath`)?.trim(),
    o = Q(e, `mode`)?.trim();
  return r == null || a == null || (o != null && o !== `share`) || !i.mi(a) || !i.hi(a)
    ? null
    : {
        kind: `localPluginDetail`,
        hostId: null,
        marketplacePath: a,
        pluginName: r,
        openShareDialog: o === `share`,
      };
}
function hj(e) {
  let [t, n] = Z(e);
  if (t !== `install` || n != null || !gj(e, KA)) return null;
  let r = Q(e, `name`)?.trim(),
    i = Q(e, `description`)?.trim() ?? null,
    a = Q(e, `imageUrl`),
    o = qA.safeParse(Q(e, `spriteVersionNumber`) ?? void 0);
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
function gj(e, t) {
  for (let n of e.searchParams.keys()) if (!t.has(n)) return !1;
  return !0;
}
function _j(e) {
  let [t, n] = Z(e);
  if (n != null) return null;
  let r = yj(t);
  if (r == null) return null;
  let a = i.ao(r);
  return a == null ? null : { kind: `pluginDetail`, hostId: Q(e, `hostId`), pluginId: a };
}
function vj(e) {
  let t = i.do(e);
  return t == null ? null : { kind: `pluginMcpApp`, ...t };
}
function yj(e) {
  if (e == null || e.trim().length === 0) return null;
  try {
    let t = decodeURIComponent(e).trim();
    return t.length > 0 ? t : null;
  } catch {
    return null;
  }
}
function bj(e, t) {
  let [n] = Z(e);
  return n === `oauth_callback`
    ? { kind: `connectorOAuthCallback`, fullRedirectUrl: t, returnTo: Q(e, `returnTo`) }
    : null;
}
function xj(e) {
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
function Sj({ isMacOS: e, isPackaged: t, hasExplicitUserDataPath: n = !1 }) {
  return t ? !e || n : !1;
}
function Cj({
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
    let n = tj(e);
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
    return t == null || tj(t) != null ? null : xj(t);
  }
  function ee(e) {
    if (n !== `win32`) return !1;
    for (let t = e.length - 1; t >= 0; --t) {
      let n = xj(e[t]);
      if (n != null) return (C(n), !0);
    }
    return !1;
  }
  function te(e) {
    let t = AA(e, n),
      r = oj(t),
      i = E(t),
      a = r.findLast((e) => e.route.kind !== `wakeQueuedThread`);
    a?.isOsDeepLink && i == null && d?.(a.sourceUrl);
    for (let e of r) S(e.route);
    return (i == null ? r.length === 0 && ee(t) : C(i), r.some((e) => e.route.kind === `wakeQueuedThread`));
  }
  function ne(e) {
    let t = AA(e, n),
      r = oj(t, { allowBareWindowsProjectPathArg: T }),
      i = E(t),
      a = r.findLast((e) => e.route.kind !== `wakeQueuedThread`);
    a?.isOsDeepLink && i == null && d?.(a.sourceUrl);
    for (let e of r) S(e.route);
    return (i != null && C(i), i != null || r.length > 0 || ee(t));
  }
  function re() {
    if (process.platform === `win32`) return;
    let t = $A(e.isPackaged);
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
  function ie() {
    if (!t) return;
    let n = (e, t) => {
      let n = tj(e);
      if (n) {
        (S(n), n.kind !== `wakeQueuedThread` && d?.(sj(n, e)), t?.preventDefault());
        return;
      }
      let r = xj(e);
      r && (C(r), t?.preventDefault());
    };
    (e.on(`open-url`, (e, t) => {
      n(t, e);
    }),
      u.u(e, (e, t) => (S(t), d?.(void 0), !0)));
    for (let e of u.c()) n(e);
  }
  let O = te(s),
    k = u.n().map(tj),
    ae = !v && k.every((e) => e?.kind === `wakeQueuedThread`) && (O || k.length > 0);
  return {
    isWakeOnlyLaunch: () => ae && !v,
    registerProtocolClient: re,
    startHandlingNativeUrls: ie,
    queueProcessArgs: ne,
    flushPendingDeepLinks: x,
    queueCodexDeepLinkUrl: w,
  };
}
function wj({ appDataPath: e, buildFlavor: t, env: n }) {
  let r = n.CODEX_ELECTRON_USER_DATA_PATH?.trim();
  if (r) return (0, g.resolve)(r);
  let a = i.Ut(t),
    o = (0, g.join)(e, a == null ? `Codex` : `Codex (${a})`),
    s = n.CODEX_ELECTRON_AGENT_RUN_ID?.trim() || null;
  return t === `agent` && s != null ? (0, g.join)(o, `agent`, s) : o;
}
function Tj() {
  let e = process.execPath;
  for (;;) {
    if (g.extname(e) === `.app`) return e;
    let t = g.dirname(e);
    if (t === e) return process.execPath;
    e = t;
  }
}
var Ej = `ChatGPT.app`,
  Dj = `ChatGPT Classic.app`,
  Oj = [`com.openai.chat-sparkle-updater`, `com.openai.chat-sparkle-progress`],
  kj = `2DC432GLL2`;
function Aj(
  e,
  {
    applicationsDirectory: t = `/Applications`,
    hasExpectedOpenAISignature: n = Mj,
    stopLegacyUpdater: r = jj,
  } = {},
) {
  if (g.basename(e) !== Ej) return { status: `not-needed` };
  let i = g.join(t, Ej),
    a = g.join(t, Dj);
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
function jj() {
  if (typeof process.getuid != `function`) return !1;
  let e = `gui/${process.getuid()}`,
    t = (0, S.spawnSync)(`/bin/launchctl`, [`print`, e], { stdio: `ignore` });
  if (t.error != null || t.status !== 0) return !1;
  for (let t of Oj) {
    let n = `${e}/${t}`,
      r = (0, S.spawnSync)(`/bin/launchctl`, [`print`, n], { stdio: `ignore` });
    if (r.error != null || r.status == null) return !1;
    if (r.status !== 0) continue;
    let i = (0, S.spawnSync)(`/bin/launchctl`, [`bootout`, n], { stdio: `ignore` });
    if (i.error != null || i.status !== 0) return !1;
  }
  return !0;
}
function Mj(e, t) {
  try {
    return (
      (0, S.execFileSync)(
        `/usr/bin/codesign`,
        [
          `--verify`,
          `--deep`,
          `--strict`,
          `-R=identifier "${t}" and anchor apple generic and certificate leaf[subject.OU] = "${kj}"`,
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
var Nj = `pending-source-dmg-cleanup.json`,
  Pj = 25,
  Fj = 250,
  Ij = (0, m.promisify)(S.execFile),
  Lj = r
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
  Rj = r.O({ sourceDmgPath: r.N() }).loose();
async function zj({
  clearPendingSourceDmgPath: e = eM,
  copyAppBundleToApplicationsFolder: t = Uj,
  detachSourceDmg: n = aM,
  getCurrentAppBundlePath: r = Tj,
  getPendingSourceDmgPath: i = Qj,
  getSourceDmgPath: a = nM,
  isApplicationsFolderWritable: o = Hj,
  isPackaged: s = y.app.isPackaged,
  openInstalledAppBundle: c = Wj,
  platform: u = process.platform,
  quitCurrentApp: d = () => y.app.quit(),
  relocateLegacyChatGPTApp: f = Aj,
  setPendingSourceDmgPath: p = $j,
  showInstallerWindow: m = Gj,
  sourceDmgExists: g = h.existsSync,
  trashItem: _ = (e) => y.shell.trashItem(e),
  isInApplicationsFolder: v = () => Bj({ getCurrentAppBundlePath: r }),
  moveAppBundleToApplicationsFolder: b = Vj,
} = {}) {
  if (u !== `darwin` || !s) return !1;
  if (v())
    return (
      await Jj({
        clearPendingSourceDmgPath: e,
        detachSourceDmg: n,
        getPendingSourceDmgPath: i,
        sourceDmgExists: g,
        trashItem: _,
      }),
      !1
    );
  let x = Yj(a);
  if (x == null) return !1;
  let S = await m();
  Xj({ setPendingSourceDmgPath: p, sourceDmgPath: x });
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
function Bj({ getCurrentAppBundlePath: e }) {
  try {
    if (`isInApplicationsFolder` in y.app) return y.app.isInApplicationsFolder();
  } catch (e) {
    l.r().warning(`Failed to check app Applications folder status`, {
      safe: { errorType: e instanceof Error ? e.name : typeof e },
    });
  }
  try {
    return cM(e(), `/Applications`);
  } catch {
    return !1;
  }
}
function Vj(e) {
  if (!(`moveToApplicationsFolder` in y.app)) return `unavailable`;
  (y.app.releaseSingleInstanceLock(), e());
  try {
    let e = y.app.moveToApplicationsFolder();
    return (e || y.app.requestSingleInstanceLock(), e ? `moved` : `canceled`);
  } catch (e) {
    throw (y.app.requestSingleInstanceLock(), e);
  }
}
function Hj() {
  try {
    return (h.accessSync(`/Applications`, h.constants.W_OK), !0);
  } catch {
    return !1;
  }
}
async function Uj(e) {
  if (!cM(process.execPath, e)) return null;
  let t = g.join(`/Applications`, g.basename(e)),
    n = g.join(`/Applications`, `.${g.basename(e)}.codex-installing-${process.pid}`);
  try {
    return (
      h.rmSync(n, { force: !0, recursive: !0 }),
      await Ij(`/usr/bin/ditto`, [e, n]),
      h.existsSync(t) && (await y.shell.trashItem(t)),
      h.renameSync(n, t),
      t
    );
  } catch (e) {
    return (
      qj(n),
      l
        .r()
        .warning(`Failed to copy app bundle to Applications folder`, {
          safe: { errorType: e instanceof Error ? e.name : typeof e },
        }),
      null
    );
  }
}
async function Wj(e) {
  try {
    return (y.app.releaseSingleInstanceLock(), await Ij(`/usr/bin/open`, [`-n`, e]), !0);
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
async function Gj() {
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
    await t.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(sM(y.app.getName()))}`),
    t.isDestroyed() || (Kj(t), t.show(), t.focus()),
    {
      allowClose: n,
      setStatus: async (e) => {
        t.isDestroyed() ||
          (n(), await t.webContents.executeJavaScript(`window.setInstallerStatus(${JSON.stringify(e)})`));
      },
    }
  );
}
function Kj(e) {
  let t = y.screen.getCursorScreenPoint(),
    { workArea: n } = y.screen.getDisplayNearestPoint(t),
    { width: r, height: i } = e.getBounds(),
    a = n.x + Math.max(0, n.width - r),
    o = n.y + Math.max(0, n.height - i),
    s = Math.min(a, Math.max(n.x, Math.round(t.x - r / 2))),
    c = Math.min(o, Math.max(n.y, Math.round(t.y - i / 2)));
  e.setPosition(s, c, !1);
}
function qj(e) {
  try {
    h.rmSync(e, { force: !0, recursive: !0 });
  } catch (e) {
    l.r().warning(`Failed to remove staging app bundle`, {
      safe: { errorType: e instanceof Error ? e.name : typeof e },
    });
  }
}
async function Jj({
  clearPendingSourceDmgPath: e,
  detachSourceDmg: t,
  getPendingSourceDmgPath: n,
  sourceDmgExists: r,
  trashItem: i,
}) {
  let a = n();
  a != null && (await Zj({ detachSourceDmg: t, sourceDmgExists: r, sourceDmgPath: a, trashItem: i })) && e();
}
function Yj(e) {
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
function Xj({ setPendingSourceDmgPath: e, sourceDmgPath: t }) {
  try {
    e(t);
  } catch (e) {
    l.r().warning(`Failed to remember app source DMG for cleanup`, {
      safe: { errorType: e instanceof Error ? e.name : typeof e },
    });
  }
}
async function Zj({ detachSourceDmg: e, sourceDmgExists: t, sourceDmgPath: n, trashItem: r }) {
  if (!t(n)) return !0;
  let i = !1;
  for (let t = 1; t <= Pj; t += 1) {
    try {
      if (e(n)) {
        i = !0;
        break;
      }
    } catch {}
    t < Pj && (await (0, D.setTimeout)(Fj));
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
function Qj() {
  let e = tM();
  if (!h.existsSync(e)) return null;
  try {
    return Rj.parse(JSON.parse(h.readFileSync(e, `utf8`))).sourceDmgPath;
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
function $j(e) {
  let t = tM();
  (h.mkdirSync(g.dirname(t), { recursive: !0 }),
    h.writeFileSync(t, `${JSON.stringify({ sourceDmgPath: e })}\n`, `utf8`));
}
function eM() {
  h.rmSync(tM(), { force: !0 });
}
function tM() {
  return g.join(y.app.getPath(`userData`), Nj);
}
function nM() {
  let e = Tj();
  return e.startsWith(`/Volumes/`) ? rM(e, iM()) : null;
}
function rM(e, t) {
  let n = null,
    r = ``;
  for (let i of t)
    if (g.extname(i.imagePath).toLowerCase() === `.dmg`)
      for (let t of i.mountPoints) cM(e, t) && t.length > r.length && ((n = i), (r = t));
  return n?.imagePath ?? null;
}
function iM() {
  let e = (0, S.execFileSync)(`/usr/bin/hdiutil`, [`info`, `-plist`]),
    t = (0, S.execFileSync)(`/usr/bin/plutil`, [`-convert`, `json`, `-o`, `-`, `-`], {
      encoding: `utf8`,
      input: e,
    });
  return (Lj.parse(JSON.parse(t)).images ?? []).flatMap((e) => {
    if (e[`image-path`] == null) return [];
    let t = (e[`system-entities`] ?? []).flatMap((e) => (e[`mount-point`] == null ? [] : [e[`mount-point`]]));
    return t.length === 0 ? [] : [{ imagePath: e[`image-path`], mountPoints: t }];
  });
}
function aM(e) {
  for (let t of iM())
    if (g.resolve(t.imagePath) === g.resolve(e)) {
      for (let e of t.mountPoints) if (!oM(e)) return !1;
    }
  return !0;
}
function oM(e) {
  try {
    return ((0, S.execFileSync)(`/usr/bin/hdiutil`, [`detach`, e]), !0);
  } catch {
    return !1;
  }
}
function sM(e) {
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
function cM(e, t) {
  let n = g.relative(t, e);
  return n === `` || (!!n && !n.startsWith(`..`) && !g.isAbsolute(n));
}
var lM = 1e4;
function uM() {
  if (process.platform !== `darwin` || !y.app.isPackaged) return !1;
  let e = fM(),
    t = g.default.join(process.resourcesPath, `native`, `launch-services-helper`);
  if (e == null || !(0, h.existsSync)(t) || !dM(t, [`needs-renamed-dock-tile-repair`, e])) return !1;
  try {
    return (y.app.setActivationPolicy(`accessory`), dM(t, [`repair-renamed-dock-tile`, e]));
  } finally {
    y.app.setActivationPolicy(`regular`);
  }
}
function dM(e, t) {
  try {
    return (0, S.execFileSync)(e, t, { encoding: `utf8`, timeout: lM }).trim() === `true`;
  } catch {
    return !1;
  }
}
function fM() {
  let e = g.default.dirname(g.default.dirname(process.execPath)),
    t = g.default.dirname(e);
  return t.endsWith(`.app`) ? t : null;
}
var pM = { retry: `Retry`, recover: `Back Up and Rebuild`, quit: `Quit` },
  mM = `db-backups`,
  hM = `failed to initialize sqlite state runtime under `,
  gM = `failed to initialize state runtime at `,
  _M = `timed out waiting for state db backfill at `,
  vM = `Codex app-server process closed: `,
  yM = `
Most recent error: `;
function bM(e) {
  let t = xM(e);
  return t.startsWith(hM) || t.startsWith(gM) || t.startsWith(_M);
}
function xM(e) {
  let t = e instanceof Error ? e.message : String(e);
  if (t.startsWith(vM)) return t.slice(33);
  let n = t.indexOf(yM);
  return n === -1 ? t : t.slice(n + 20);
}
async function SM(e, t) {
  return CM({
    databasePath: a.ri(),
    waitForInteractive: t,
    open: () => {
      let t = a.ii({ migrationProvenance: e });
      if (t == null) throw Error(`SQLite is only available in the Electron app.`);
      EM(t);
    },
  });
}
async function CM({
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
      if (TM(r)) {
        o || ((o = !0), await t?.());
        continue;
      }
      if (n != null && !(await n())) return !1;
      let s = wM(e),
        c = r;
      if (s != null && (zM(r, s) || (await LM(s))) && !a.has(s)) {
        a.add(s);
        try {
          await OM(s);
          continue;
        } catch (e) {
          c = { originalError: r, recoveryError: e };
        }
      }
      for (;;) {
        let e = await DM(s, c);
        if (e === `retry`) break;
        if (e === `recover` && s != null)
          try {
            await OM(s);
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
function wM(e) {
  return e != null && (g.posix.isAbsolute(e) || g.win32.isAbsolute(e)) ? e : null;
}
function TM(e) {
  let t = xM(e);
  return bM(e) && t.includes(_M);
}
function EM(e) {
  if (typeof e.prepare(`PRAGMA user_version`).get()?.user_version != `number`)
    throw Error(`SQLite readiness query returned an unexpected result.`);
}
async function DM(e, t) {
  let n = e == null ? [`retry`, `quit`] : [`retry`, `recover`, `quit`];
  return (
    n[
      (
        await y.dialog.showMessageBox({
          type: `error`,
          buttons: n.map((e) => pM[e]),
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
            `Error: ${AM(t)}`,
          ].join(`
`),
          noLink: !0,
        })
      ).response
    ] ?? `quit`
  );
}
async function OM(e) {
  await kM(e, await jM(e));
}
async function kM(e, t, n) {
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
function AM(e) {
  return BM(e)
    ? [AM(e.originalError), ``, `Recovery failed: ${AM(e.recoveryError)}`].join(`
`)
    : e instanceof Error && e.message.length > 0
      ? e.message
      : String(e);
}
async function jM(e) {
  a.ni();
  let t = (0, g.dirname)(e);
  if ((await RM(t))?.isFile()) return FM(t);
  let n = MM(e),
    r = await NM(t);
  for (let e of n) (await IM(e)) && (await (0, b.rename)(e, (0, g.join)(r, (0, g.basename)(e))));
  return r;
}
function MM(e) {
  return [e, `${e}-wal`, `${e}-shm`];
}
async function NM(e) {
  return PM((0, g.join)(e, mM));
}
async function PM(e) {
  await (0, b.mkdir)(e, { recursive: !0 });
  for (let t = 0; ; t += 1) {
    let n = (0, g.join)(e, `sqlite-${Math.floor(Date.now() / 1e3)}-${t}`);
    try {
      return (await (0, b.mkdir)(n, { recursive: !1 }), n);
    } catch (e) {
      if (!VM(e, `EEXIST`)) throw e;
    }
  }
}
async function FM(e) {
  let t = await PM((0, g.join)((0, g.dirname)(e), `${(0, g.basename)(e)}.${mM}`));
  return (
    await (0, b.rename)(e, (0, g.join)(t, (0, g.basename)(e))),
    await (0, b.mkdir)(e, { recursive: !0 }),
    t
  );
}
async function IM(e) {
  try {
    return (await (0, b.stat)(e), !0);
  } catch (e) {
    if (VM(e, `ENOENT`)) return !1;
    throw e;
  }
}
async function LM(e) {
  return (await RM((0, g.dirname)(e)))?.isFile() ? !0 : ((await RM(e))?.isDirectory() ?? !1);
}
async function RM(e) {
  try {
    return await (0, b.stat)(e);
  } catch (e) {
    if (VM(e, `ENOENT`)) return null;
    throw e;
  }
}
function zM(e, t) {
  if (VM(e, `SQLITE_CORRUPT`) || VM(e, `SQLITE_NOTADB`)) return !0;
  let n = AM(e).replaceAll(t, ``).toLowerCase();
  return (
    n.includes(`database disk image is malformed`) ||
    n.includes(`file is not a database`) ||
    /\bsqlite_(?:corrupt|notadb)\b/.test(n)
  );
}
function BM(e) {
  return typeof e == `object` && !!e && `originalError` in e && `recoveryError` in e;
}
function VM(e, t) {
  return typeof e == `object` && !!e && `code` in e && e.code === t;
}
var HM = () => !1;
function UM() {
  y.app.on(`window-all-closed`, () => {
    process.platform !== `win32` &&
      ((process.platform === `darwin` && y.app.isPackaged) ||
        (process.platform === `linux` && HM()) ||
        y.app.quit());
  });
}
function WM(e) {
  HM = e;
}
var GM = `CODEX_ELECTRON_DEV_PARENT_PID`,
  KM = `CODEX_ELECTRON_DEV_WEBVIEW_PID`,
  qM = `CODEX_ELECTRON_DEV_RELAUNCH_MARKER_PATH`,
  JM = 1e3;
r.O({ browserBackgroundNetworkingDisabled: r._(), desktopOpenEvents: r.N().optional() });
function YM(e) {
  let t = e?.trim();
  if (!t) return null;
  let n = Number(t);
  return !Number.isInteger(n) || n <= 0 ? null : n;
}
function XM(e) {
  return YM(e);
}
function ZM(e) {
  return YM(e);
}
function QM(e) {
  return typeof e == `object` && !!e && `code` in e && e.code === `ESRCH`;
}
function $M({
  browserBackgroundNetworkingDisabled: e = process.argv.some((e) => e.split(`=`, 1)[0] === `--${t.n}`),
  markerPath: n = process.env[qM]?.trim(),
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
function eN(e, t = (e, t) => process.kill(e, t)) {
  try {
    return (t(e, 0), !0);
  } catch (e) {
    return !QM(e);
  }
}
function tN({
  app: e,
  parentPid: t = XM(process.env[GM]),
  pollIntervalMs: n = JM,
  isParentProcessRunning: r = eN,
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
function nN({ app: e, webviewPid: t = ZM(process.env[KM]), killImpl: n = (e, t) => process.kill(e, t) }) {
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
function rN(e = $M, t) {
  (e({
    browserBackgroundNetworkingDisabled: t?.some(
      (e) => e.split(`=`, 1)[0] === `--codex-browser-background-networking-disabled`,
    ),
  }) || y.app.relaunch({ args: t }),
    y.app.quit());
}
var iN = l.a(`startup-performance-recording`),
  aN = !1;
function oN() {
  return aN;
}
async function sN() {
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
        rN());
    } catch (e) {
      iN().warning(`Could not arm startup recording`, { safe: {}, sensitive: { error: e } });
    }
}
async function cN(e) {
  if (n.i.supportsStartupPerformanceRecording(e)) {
    try {
      await (0, b.unlink)((0, g.join)(y.app.getPath(`userData`), `record-next-startup`));
    } catch (e) {
      if (e instanceof Error && `code` in e && e.code === `ENOENT`) return;
      iN().warning(`Could not consume startup recording request`, { safe: {}, sensitive: { error: e } });
      return;
    }
    ((aN = !0), await Promise.race([lN(), (0, D.setTimeout)(1e3, void 0, { ref: !1 })]));
  }
}
async function lN() {
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
            iN().warning(`Could not save startup recording`, { safe: {}, sensitive: { error: e } });
          })
          .finally(uN);
      }, 12e4).unref());
  } catch (e) {
    (uN(), iN().warning(`Could not begin startup recording`, { safe: {}, sensitive: { error: e } }));
  }
}
function uN() {
  aN = !1;
  let e = y.Menu.getApplicationMenu(),
    t = e?.getMenuItemById(`toggle-trace-recording`);
  t != null && (t.enabled = !0);
  let n = e?.getMenuItemById(`restart-record-startup`);
  n != null && (n.enabled = !0);
}
var dN = `HKCU\\`,
  fN = (0, ae.createRequire)(__filename),
  pN;
function mN({ loadAddon: e = TN } = {}) {
  try {
    return e()?.getShellActivation?.() ?? null;
  } catch {
    return null;
  }
}
function hN({ loadAddon: e = TN, platform: t = process.platform } = {}) {
  if (t !== `win32`) return `unknown`;
  try {
    let t = e();
    return t == null ? `unknown` : t.isCurrentAccountAdministratorCapable() ? `administrator` : `standard`;
  } catch {
    return `unknown`;
  }
}
function gN({ loadAddon: e = TN, platform: t = process.platform } = {}) {
  if (t !== `win32`) return null;
  try {
    return e()?.getSystemPerformanceSnapshot?.() ?? null;
  } catch {
    return null;
  }
}
async function _N(e) {
  if (process.platform !== `win32`) return !0;
  try {
    return (await TN()?.supportsPersistentAcls?.(e)) ?? !0;
  } catch {
    return !0;
  }
}
async function vN({ progId: e, loadAddon: t = TN, platform: n = process.platform }) {
  if (n !== `win32`) return null;
  try {
    return (await t()?.getWebBrowserState?.(e)) ?? null;
  } catch {
    return null;
  }
}
function yN(e) {
  return TN()?.isNetworkDrive?.(e) === !0;
}
function bN({ key: e, name: t, loadAddon: n = TN, platform: r = process.platform }) {
  if (r !== `win32`) return null;
  let i = wN(e);
  return n()?.readCurrentUserRegistryStringValue?.(i, t) ?? null;
}
function xN({ loadAddon: e = TN, platform: t = process.platform } = {}) {
  t === `win32` &&
    a.on({
      async listProcesses(t) {
        return e()?.listProcesses?.(t) ?? [];
      },
    });
}
function SN(e) {
  return TN()?.shortcutCharacterKeyCode?.(e) ?? null;
}
function CN(e, t, n, r = !1) {
  try {
    let i = TN();
    return i?.KeyboardMonitor == null ? null : new i.KeyboardMonitor(e, t, n, r);
  } catch {
    return null;
  }
}
function wN(e) {
  if (!e.startsWith(dN) || e.length === 5) throw Error(`Registry key must be under HKCU`);
  return e.slice(5);
}
function TN() {
  if (process.platform !== `win32`) return null;
  if (pN != null) return pN;
  let e = c.Lt({ isPackaged: y.app.isPackaged, env: process.env, resourcesPath: process.resourcesPath });
  if (e == null) return null;
  let t = g.default.join(e, `native`, `windows-account.node`);
  return (0, h.existsSync)(t) ? ((pN = fN(t)), pN) : null;
}
function EN() {
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
function DN() {
  (s.Ft(process.resourcesPath), (process.env.CODEX_WINDOWS_REGISTERED_CORE = `1`));
}
var ON = 4096,
  kN = r.T({
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
async function AN() {
  if (process.platform === `win32` && y.app.isPackaged)
    try {
      let e = (0, g.join)(
        (0, g.dirname)((0, g.dirname)(process.execPath)),
        `microsoft.system.package.metadata`,
        `Custom.data`,
      );
      if ((await (0, b.stat)(e)).size > ON) return;
      let t = await (0, b.readFile)(e);
      if (t.byteLength > ON) return;
      let n = kN.safeParse(JSON.parse(t.toString(`utf8`).replace(/^\uFEFF/, ``)));
      if (!n.success) return;
      let { partner: r, deal: i, provisioned_on: a, ...o } = n.data;
      return { partner: r, deal: i, provisionedUtcDate: a, customDataJson: JSON.stringify(o) };
    } catch {
      return;
    }
}
var jN = r.O({
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
function MN(e, t) {
  let n = jN.safeParse(e),
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
var NN = l.a(`restricted-codex-windows-runtime-framework`),
  PN = `OpenAI.CodexPrimaryRuntime`,
  FN = `codex-windows-runtime-framework-`,
  IN = `.cleanup`,
  LN = `CN="OpenAI OpCo, LLC", O="OpenAI OpCo, LLC", L=San Francisco, S=California, C=US`,
  RN = new Map(),
  zN = !1,
  BN = new Set();
function VN() {
  return zN;
}
function HN(e) {
  let t = e && j()?.getCurrentPackageFamily() != null,
    n = zN !== t;
  ((zN = t), t || s.X(null), n && BN.forEach((e) => e()));
}
function UN(e) {
  return (
    BN.add(e),
    () => {
      BN.delete(e);
    }
  );
}
function WN(e, t = process.platform, r = _.default.release(), i = process.arch) {
  return (
    t === `win32` &&
    (i === `arm64` || i === `x64`) &&
    Number(r.split(`.`)[2]) >= 22621 &&
    (e === n.i.Nightly || e === n.i.InternalAlpha || e === n.i.PublicBeta || e === n.i.Prod)
  );
}
async function GN({ buildFlavor: e, progress: t = { step: `configuration` }, signal: n }) {
  if (!zN || !WN(e)) return;
  let r = j();
  if (r == null)
    throw new $(
      `Windows primary runtime framework activation support is unavailable.`,
      `native-support-unavailable`,
    );
  (eP(r), (t.step = `persisted-package-read`));
  let i = r.readPrimaryRuntimeSelection(),
    a = i == null ? null : ZN(i.packageFamilyName);
  t.step = `package-query`;
  let o =
    i != null && a != null ? await r.findPrimaryRuntimePackage(i.packageFamilyName, i.packageFullName) : null;
  if (o != null && i != null && a != null) {
    ((t.step = `package-verify`),
      tP({
        installedPackage: o,
        packageFamilyName: i.packageFamilyName,
        packageIdentity: a,
        packagePublisher: LN,
      }),
      (t.step = `activation-pin`),
      n?.throwIfAborted());
    let e = YN({
      installedPackage: o,
      nativeAddon: r,
      packageFamilyName: i.packageFamilyName,
      packageIdentity: a,
    });
    (JN(e, !0),
      s.X(e),
      NN().info(`windows_primary_runtime_framework_activated`, {
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
      NN().info(`windows_primary_runtime_framework_activation_skipped`, {
        safe: { architecture: process.arch, reason: e },
        sensitive: {},
      }));
  }
}
async function KN(e, t, n, r, i) {
  if (!VN()) throw new $(`Windows primary runtime frameworks are disabled.`, `configuration-disabled`);
  rP(e.archiveUrl, `Windows primary runtime framework package`);
  let o = j();
  if (o == null)
    throw new $(
      `Windows primary runtime framework native addon is unavailable.`,
      `native-support-unavailable`,
    );
  if (e.bundleVersion == null)
    throw new $(`Windows primary runtime framework bundle version is missing.`, `configuration-missing`);
  let s = a.Ii(e.bundleVersion),
    c = a.Fi(PN, s),
    l = await qN({
      nativeAddon: o,
      packageFamilyName: `${c}_3k8sg7r9htsxt`,
      packageIdentity: c,
      packageLength: e.archiveSizeBytes,
      packagePublisher: LN,
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
    NN().info(`windows_primary_runtime_framework_ready`, {
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
async function qN({
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
  let p = nP({ packageFamilyName: t, packageIdentity: n, packageVersion: l });
  d?.(`query_framework`);
  let m = await e.findPrimaryRuntimePackage(t, p);
  if (
    (m != null &&
      (d?.(`verify_framework`),
      tP({ packageFamilyName: t, packageIdentity: n, packagePublisher: i, installedPackage: m })),
    m == null || fn(m.packageVersion, l) < 0)
  ) {
    if (
      (await QN({
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
      tP({ packageFamilyName: t, packageIdentity: n, packagePublisher: i, installedPackage: m }));
  }
  if (m.packageVersion !== l)
    throw new $(`Windows runtime framework ${n} version mismatch.`, `version-mismatch`);
  return (
    u?.throwIfAborted(),
    d?.(`pin_framework`),
    YN({ installedPackage: m, nativeAddon: e, packageFamilyName: t, packageIdentity: n })
  );
}
function JN(e, t = !1) {
  let n = j(),
    r = [...RN.values()].find((t) => t.installPath === e && t.nativeAddon === n);
  if (r == null)
    throw new $(`Windows primary runtime framework selection could not be saved.`, `pin-unavailable`);
  r.nativeAddon.savePrimaryRuntimeSelection(r.handle, t);
}
function YN({ installedPackage: e, nativeAddon: t, packageFamilyName: n, packageIdentity: r }) {
  if (RN.get(e.packageFullName)?.nativeAddon === t) return e.installPath;
  let i = t.pinPrimaryRuntimePackage(n, e.packageFullName);
  if (i == null) throw new $(`Windows runtime framework ${r} could not be pinned.`, `pin-unavailable`);
  if (i.packageFullName !== e.packageFullName || i.installPath !== e.installPath)
    throw (
      t.unpinPrimaryRuntimePackage(i.handle),
      new $(`Windows runtime framework ${r} pin did not match.`, `pin-mismatch`)
    );
  return (
    RN.set(e.packageFullName, { handle: i.handle, installPath: i.installPath, nativeAddon: t }),
    XN(t, i.handle),
    i.installPath
  );
}
async function XN(e, t) {
  try {
    let n = await e.deferPrimaryRuntimeRemoval(t);
    NN().info(`windows_primary_runtime_framework_removal_deferred`, {
      safe: { status: n ? `requested` : `unsupported` },
    });
  } catch (e) {
    NN().warning(`windows_primary_runtime_framework_deferred_removal_failed`, {
      safe: { status: `failed` },
      sensitive: { error: e },
    });
  }
}
function ZN(e) {
  if (!e.endsWith(`_3k8sg7r9htsxt`)) return null;
  let t = e.slice(0, -14);
  return /^OpenAI\.CodexPrimaryRuntime\.v\d+-\d+-\d+-\d+$/.test(t) ? t : null;
}
async function QN({
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
  let d = await b.default.mkdtemp(g.default.join(t, FN)),
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
            (NN().warning(`Windows runtime framework download stalled`, {
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
          if ((w.url && rP(w.url, `Windows runtime framework package response`), w.status === 206)) {
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
            NN().warning(`Windows runtime framework download failed`, {
              safe: {
                ...MN(e, c),
                failureReason: MN(C.aborted ? C.reason : e, c).failureReason,
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
      await b.default.writeFile(`${d}${IN}`, ``);
    } catch (e) {
      NN().warning(`Windows runtime framework cleanup marker failed`, {
        safe: MN(e),
        sensitive: { error: e },
      });
    }
    try {
      await $N(d);
    } catch (e) {
      NN().warning(`Windows runtime framework staging cleanup failed`, {
        safe: MN(e),
        sensitive: { error: e },
      });
    }
  }
}
async function $N(e) {
  (await b.default.rm(e, { recursive: !0, force: !0, maxRetries: 3 }),
    await b.default.rm(`${e}${IN}`, { force: !0 }));
}
async function eP(e) {
  try {
    let t = e.getPackageLocalCachePath?.() ?? _.default.tmpdir(),
      n = await b.default.readdir(t, { withFileTypes: !0 });
    await Promise.all(
      n
        .filter((e) => e.isFile() && e.name.startsWith(FN) && e.name.endsWith(IN))
        .map((e) => $N(g.default.join(t, e.name.slice(0, -8)))),
    );
  } catch (e) {
    NN().warning(`Windows runtime framework deferred staging cleanup failed`, {
      safe: MN(e),
      sensitive: { error: e },
    });
  }
}
function tP({ installedPackage: e, packageFamilyName: t, packageIdentity: n, packagePublisher: r }) {
  if (
    e.packageIdentity !== n ||
    e.packageFamilyName !== t ||
    e.packagePublisher !== r ||
    e.architecture !== process.arch
  )
    throw new $(`Windows runtime framework ${n} identity mismatch.`, `identity-mismatch`);
}
function nP({ packageFamilyName: e, packageIdentity: t, packageVersion: n }) {
  return `${t}_${n}_${process.arch}__${e.slice(e.lastIndexOf(`_`) + 1)}`;
}
function rP(e, t) {
  if (new URL(e).protocol !== `https:`) throw new $(`${t} requires HTTPS.`, `https-required`);
}
var iP = { "install-update": `Install Update`, "check-for-updates": `Check for Updates`, quit: `Quit` };
if (process.versions.electron != null && typeof y.app.showTaskManager != `function`)
  throw Error(`Codex requires the Owl app shell; stock Electron is no longer supported.`);
async function aP(e) {
  let { appUpdates: t } = Pk(),
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
          buttons: n.map((e) => iP[e]),
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
  process.platform === `win32` && (await aP(e));
}
var oP = process.platform === `darwin`,
  sP = n.i.resolve(),
  cP =
    process.platform === `win32`
      ? n.i.getWindowsDistributionFlavor(sP, n.a(`codexWindowsPackageIdentity`))
      : sP,
  lP = {
    appVersion: y.app.getVersion(),
    buildFlavor: sP,
    buildCommit: process.env.CODEX_BUILD_COMMIT?.trim() || n.a(`codexBuildCommit`),
  };
(t.h(),
  UM(),
  y.app.setName(i.Wt(cP)),
  y.app.setPath(`userData`, wj({ appDataPath: y.app.getPath(`appData`), buildFlavor: cP, env: process.env })),
  process.platform === `win32` &&
    (delete process.env.CODEX_WINDOWS_REGISTERED_CORE,
    delete process.env.CODEX_WINDOWS_SANDBOX_PACKAGE_FAMILY,
    y.app.setAppUserModelId(n.r(cP))));
var uP = Sj({
    isMacOS: oP,
    isPackaged: y.app.isPackaged,
    hasExplicitUserDataPath: !!process.env.CODEX_ELECTRON_USER_DATA_PATH?.trim(),
  }),
  dP = mN();
if (uP && !y.app.requestSingleInstanceLock({ startupTask: dP === `startup-task` }))
  (l
    .r()
    .info(`Exiting second desktop instance`, {
      safe: { packaged: y.app.isPackaged, platform: process.platform },
    }),
    y.app.exit(0));
else {
  uM() &&
    l
      .r()
      .info(`Repaired renamed Dock tile`, {
        safe: { platform: process.platform, version: y.app.getVersion() },
      });
  let e = Pk(sP);
  ((e.windowsActivation = dP),
    uP &&
      y.app.on(`second-instance`, (t, n, r, i) => {
        (typeof i == `object` && i && `startupTask` in i && i.startupTask === !0) ||
          e.queueSecondInstanceArgs(n);
      }),
    y.app.whenReady().then(async () => {
      Ve();
      let { desktopSentry: t, appUpdates: n } = e;
      if (
        (await cN(sP),
        !(await Fe({
          appName: y.app.getName(),
          environment: { arch: process.arch, isPackaged: y.app.isPackaged, platform: process.platform },
        })))
      ) {
        y.app.quit();
        return;
      }
      if ((await zj()) || !(await SM(lP, e.waitForInteractiveLaunch))) return;
      let r = EN(),
        i = WN(sP, process.platform),
        a = !1;
      if (r || i)
        try {
          let e = j(),
            t = e?.getCurrentPackageFamily();
          (y.app.isPackaged &&
            t == null &&
            l
              .r()
              .warning(`windows_runtime_framework_identity_unavailable`, {
                safe: {
                  buildFlavor: sP,
                  appVersion: y.app.getVersion(),
                  architecture: process.arch,
                  failureReason: e == null ? `native-addon-unavailable` : `no-package-identity`,
                  appContainedCoreBuild: r,
                  shouldUseWindowsRuntimeFrameworks: i,
                  hasDoNotDeElevateSwitch: y.app.commandLine.hasSwitch(`do-not-de-elevate`),
                },
              }),
            t && r && (process.env.CODEX_WINDOWS_SANDBOX_PACKAGE_FAMILY = t));
          let n = VE(zE(s.lt()), (await AN()) != null);
          ((a = t != null && n.core), s.It(n.core), HN(n.primary));
        } catch (e) {
          (s.It(null),
            HN(!1),
            l
              .r()
              .warning(`windows_runtime_framework_gate_hydration_failed`, {
                safe: { buildFlavor: sP, ...MN(e) },
                sensitive: { error: e },
              }));
        }
      let o = { phase: `bootstrap-import-main` };
      try {
        if ((await n.initialize(), r && a && DN(), r || i)) {
          let e = r && a ? `app-package` : `bundled`;
          l.r().info(`windows_core_runtime_launch_selected`, {
            safe: {
              buildFlavor: sP,
              architecture: process.arch,
              coreGateEnabledAtStartup: a,
              selectedRuntimeSource: e,
            },
          });
        }
        await GN({ buildFlavor: sP }).catch((e) => {
          l.r().warning(`windows_primary_runtime_framework_activation_failed`, {
            safe: { buildFlavor: sP, ...MN(e) },
            sensitive: { error: e },
          });
        });
        let { runMainAppStartup: e } = await Promise.resolve().then(() => require("./main-CT5a1yCd.js"));
        await e();
      } catch (r) {
        for (let e of y.BrowserWindow.getAllWindows()) e.isDestroyed() || e.destroy();
        (l.r().error(`Desktop bootstrap failed to start the main app`, { safe: o }),
          t.captureException(r, { tags: o }),
          await n.startUpdaterAfterStartupFailure(),
          (await e.waitForInteractiveLaunch()) && (await aP(r)));
      }
    }));
}
((exports.$ = HE),
  (exports.A = Tj),
  (exports.At = bt),
  (exports.B = fA),
  (exports.Bt = Pt),
  (exports.C = nN),
  (exports.Ct = zt),
  (exports.D = bM),
  (exports.Dt = Ct),
  (exports.E = WM),
  (exports.Et = Nt),
  (exports.F = Cj),
  (exports.Ft = kt),
  (exports.G = Pk),
  (exports.Gt = yt),
  (exports.H = Uk),
  (exports.Ht = jt),
  (exports.I = kA),
  (exports.It = Tt),
  (exports.J = kk),
  (exports.Jt = j),
  (exports.K = Ak),
  (exports.Kt = Ht),
  (exports.L = DA),
  (exports.Lt = Ot),
  (exports.M = $A),
  (exports.Mt = gt),
  (exports.N = tj),
  (exports.Nt = Et),
  (exports.O = kM),
  (exports.Ot = _t),
  (exports.P = xj),
  (exports.Pt = At),
  (exports.Q = GE),
  (exports.R = OA),
  (exports.Rt = Dt),
  (exports.S = rN),
  (exports.St = Bt),
  (exports.T = tN),
  (exports.Tt = It),
  (exports.U = Wk),
  (exports.Ut = Mt),
  (exports.V = Hk),
  (exports.Vt = Ft),
  (exports.W = Lk),
  (exports.Wt = Lt),
  (exports.X = Dk),
  (exports.Xt = le),
  (exports.Y = Ok),
  (exports.Yt = we),
  (exports.Z = Ek),
  (exports.Zt = se),
  (exports._ = CN),
  (exports._t = Yt),
  (exports.a = UN),
  (exports.at = AE),
  (exports.b = oN),
  (exports.bt = Wt),
  (exports.c = MN),
  (exports.ct = qn),
  (exports.d = hN),
  (exports.dt = $t),
  (exports.et = BE),
  (exports.f = SN),
  (exports.ft = Zt),
  (exports.g = TN),
  (exports.gt = tn),
  (exports.h = yN),
  (exports.ht = Xt),
  (exports.i = WN),
  (exports.it = ME),
  (exports.j = ej),
  (exports.jt = St),
  (exports.k = CM),
  (exports.kt = xt),
  (exports.l = AN),
  (exports.lt = Rn),
  (exports.m = vN),
  (exports.mt = Qt),
  (exports.n = GN),
  (exports.nt = UE),
  (exports.o = JN),
  (exports.ot = uE),
  (exports.p = gN),
  (exports.pt = en),
  (exports.q = jk),
  (exports.qt = Vt),
  (exports.r = KN),
  (exports.rt = IE),
  (exports.s = HN),
  (exports.st = H),
  (exports.t = VN),
  (exports.tt = WE),
  (exports.u = xN),
  (exports.ut = Kt),
  (exports.v = bN),
  (exports.vt = Jt),
  (exports.w = $M),
  (exports.wt = Rt),
  (exports.x = sN),
  (exports.xt = vt),
  (exports.y = _N),
  (exports.yt = Gt),
  (exports.z = _A),
  (exports.zt = wt));
//# sourceMappingURL=bootstrap-CpPAbkl1.js.map
