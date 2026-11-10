const e = require("./rolldown-runtime-CPUxUITh.js"),
  t = require("./src-CSKkIr_z.js"),
  n = require("./logger-Bfbyn6HA.js");
let r = require("node:crypto"),
  i = require("node:fs"),
  a = require("node:path");
a = e.a(a);
let o = require("node:os"),
  s = require("node:worker_threads");
var c = (0, r.randomUUID)(),
  l = () => {
    let e = process.cwd(),
      t = [];
    return (
      process.resourcesPath && t.push(a.default.join(process.resourcesPath, `app.asar`, `package.json`)),
      t.push(a.default.join(e, `package.json`)),
      t.push(a.default.join(e, `electron`, `package.json`)),
      t
    );
  };
function u(e, { candidates: t = l(), parse: n } = {}) {
  for (let r of t) {
    if (!(0, i.existsSync)(r)) continue;
    let t = (0, i.readFileSync)(r, `utf8`),
      a = JSON.parse(t),
      o = typeof a[e] == `string` ? a[e].trim() : ``;
    if (!o) continue;
    let s = n ? n(o) : o;
    if (s != null) return s;
  }
  return null;
}
var d = n.a(`build-flavor`),
  f = [t.Ei.Nightly, t.Ei.InternalAlpha, t.Ei.PublicBeta, t.Ei.Prod],
  p = {
    [t.Ei.Nightly]: { kind: `msix` },
    [t.Ei.InternalAlpha]: { kind: `msix` },
    [t.Ei.PublicBeta]: {
      kind: `store`,
      storeProductId: `9N8CJ4W95TBZ`,
      storeUpdateManifestUrl: `https://persistent.oaistatic.com/codex-app-beta/windows-store-update.json`,
    },
    [t.Ei.Prod]: {
      kind: `store`,
      storeProductId: `9PLM9XGG6VKS`,
      storeUpdateManifestUrl: `https://persistent.oaistatic.com/codex-app-prod/windows-store-update.json`,
      storeReleaseFeedUrl: `https://persistent.oaistatic.com/codex-app-prod/windows-release.json`,
    },
  },
  m = (e) => e.CODEX_SPARKLE_ENABLED === `false`,
  h = (e, t, n, r) => !m(r) && f.includes(e) && t === n,
  g = (e, t, n) => h(e, t, `win32`, n),
  _ = (e) => p[e] ?? null,
  v = {
    ...t.Ei,
    supportsStartupPerformanceRecording(e) {
      return e === t.Ei.Dev || e === t.Ei.Nightly || e === t.Ei.InternalAlpha;
    },
    readFromPackageMetadata() {
      let e = u(`codexBuildFlavor`, { parse: (e) => (v.isValid(e) ? e : null) });
      return e
        ? (d().debug(`Resolved build flavor from package metadata`, { safe: { value: e }, sensitive: {} }), e)
        : (d().warning(`Missing codexBuildFlavor from package metadata`), null);
    },
    resolve() {
      let e = process.env.BUILD_FLAVOR,
        t = v.parse(e);
      return t
        ? (d().info(`Resolved build flavor from env`, { safe: { value: t }, sensitive: {} }), t)
        : (e?.trim() &&
            d().warning(`Invalid BUILD_FLAVOR`, { safe: { value: e, expected: v.help }, sensitive: {} }),
          v.readFromPackageMetadata() ||
            (process.env.NODE_ENV === `production`
              ? (d().warning(`BUILD_FLAVOR missing; defaulting to prod in production runtime`), v.Prod)
              : (d().warning(`BUILD_FLAVOR missing; defaulting to dev in non-production runtime`), v.Dev)));
    },
    assertMinAppServerVersionForReleaseBuild(e, t, n = process.env) {
      if (n.CODEX_RELEASE_BUILD_FLAVOR != null && !v.isInternal(e) && /-alpha(?:\.|$)/.test(t))
        throw Error(
          `MIN_APP_SERVER_VERSION cannot be an alpha version for public-beta or prod builds (received ${t})`,
        );
    },
    shouldIncludeSparkle(e, t, n = process.env) {
      return h(e, t, `darwin`, n);
    },
    shouldIncludeWindowsUpdater(e, t, n = process.env) {
      return g(e, t, n) && _(e) != null;
    },
    shouldIncludeLinuxPackageUpdater(e, t, n = process.env) {
      return h(e, t, `linux`, n);
    },
    shouldIncludeWindowsMsixUpdater(e, t, n = process.env) {
      return g(e, t, n) && _(e)?.kind === `msix`;
    },
    shouldIncludeBrowserUsePeerAuthorization(e, t) {
      return t === `darwin` && f.includes(e);
    },
    shouldIncludeUpdater(e, t, n = process.env) {
      return (
        v.shouldIncludeSparkle(e, t, n) ||
        v.shouldIncludeWindowsUpdater(e, t, n) ||
        v.shouldIncludeLinuxPackageUpdater(e, t, n)
      );
    },
    getWindowsDistributionFlavor(e, t) {
      return e === v.Prod && t === `OpenAI.CodexBeta` ? v.PublicBeta : e;
    },
    getWindowsStoreConfig(e, t = null) {
      let n = _(v.getWindowsDistributionFlavor(e, t));
      return n?.kind === `store`
        ? {
            storeProductId: n.storeProductId,
            storeUpdateManifestUrl: n.storeUpdateManifestUrl,
            storeReleaseFeedUrl: n.storeReleaseFeedUrl,
          }
        : null;
    },
    shouldIncludeWindowsAppContainedCore(e, t = null) {
      let n = v.getWindowsDistributionFlavor(e, t);
      return n === v.Dev || n === v.Nightly || n === v.InternalAlpha || n === v.PublicBeta || n === v.Prod;
    },
    shouldIncludeWindowsSandboxService(e, t = null) {
      let n = v.getWindowsDistributionFlavor(e, t);
      return n === v.Nightly || n === v.Prod;
    },
    allowDevtools(e) {
      return v.isInternal(e);
    },
  };
function y(e) {
  switch (e) {
    case v.Agent:
      return `com.openai.codex.agent`;
    case v.Dev:
      return `com.openai.codex.dev`;
    case v.Nightly:
      return `com.openai.codex.nightly`;
    case v.InternalAlpha:
      return `com.openai.codex.alpha`;
    case v.PublicBeta:
      return `com.openai.codex.beta`;
    case v.Prod:
      return `com.openai.codex`;
  }
}
function b(e, t = process.platform) {
  let n = process.env,
    r = (0, o.homedir)();
  if (t === `darwin`) return (0, a.join)(r, `Library`, `Logs`, y(e ?? v.resolve()));
  if (t === `win32`) {
    let e = n.LOCALAPPDATA ?? (0, a.join)(r, `AppData`, `Local`);
    return (0, a.join)(e, `Codex`, `Logs`);
  }
  if (t === `linux`) {
    let e = n.XDG_STATE_HOME ?? (0, a.join)(r, `.local`, `state`);
    return (0, a.join)(e, `codex`, `logs`);
  }
  return (0, a.join)(r, `.codex`, `logs`);
}
var x = 10485760,
  S = 5,
  C = 1e4,
  w = 1048576,
  T = 15;
function E(e) {
  return e.toString().padStart(2, `0`);
}
function D(e, t) {
  let n = t.getUTCFullYear().toString(),
    r = E(t.getUTCMonth() + 1),
    i = E(t.getUTCDate());
  return (0, a.join)(e, n, r, i);
}
function O(e, t, n, r) {
  return e > 0 ? e : (n(Error(`[file-logger] invalid ${r}`), { [r]: e }), t);
}
function k(e, t, n, r, i) {
  return `codex-desktop-${e}-${t}-t${n}-i${r}-${E(i.getUTCHours())}${E(i.getUTCMinutes())}${E(i.getUTCSeconds())}`;
}
var A = 0;
function j() {
  return ((A += 1), A);
}
function M(e, t, n, r) {
  try {
    let r = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())),
      o = new Date(r);
    o.setUTCDate(o.getUTCDate() - (n - 1));
    for (let t of (0, i.readdirSync)(e)) {
      if (!/^\d{4}$/.test(t)) continue;
      let n = Number(t);
      if (!Number.isFinite(n)) continue;
      let r = (0, a.join)(e, t);
      for (let e of (0, i.readdirSync)(r)) {
        if (!/^\d{2}$/.test(e)) continue;
        let t = Number(e);
        if (!Number.isFinite(t) || t < 1 || t > 12) continue;
        let s = (0, a.join)(r, e);
        for (let e of (0, i.readdirSync)(s)) {
          if (!/^\d{2}$/.test(e)) continue;
          let r = Number(e);
          !Number.isFinite(r) ||
            r < 1 ||
            r > 31 ||
            (new Date(Date.UTC(n, t - 1, r)) < o &&
              (0, i.rmSync)((0, a.join)(s, e), { recursive: !0, force: !0 }));
        }
        (0, i.readdirSync)(s).length === 0 && (0, i.rmSync)(s, { recursive: !0, force: !0 });
      }
      (0, i.readdirSync)(r).length === 0 && (0, i.rmSync)(r, { recursive: !0, force: !0 });
    }
  } catch (t) {
    r(Error(`[file-logger] failed to prune old logs`), {
      rootDir: e,
      retentionDays: n,
      error: t instanceof Error ? t.message : String(t),
    });
  }
}
function N(e, t = {}) {
  let n = (t, n) => e.nonFatalReporter.reportNonFatal(t, { kind: `file-based-logger`, extra: n }),
    r = e.rootDir ?? b(),
    o = t.processId ?? process.pid,
    c = t.threadId ?? s.threadId ?? 0,
    l = t.instanceId ?? j(),
    u = e.appSessionId,
    d = t.now ?? (() => new Date()),
    f = e.maxSegmentBytes ?? x,
    p = e.maxSegments ?? S,
    m = e.pendingLineLimit ?? C,
    h = e.highWaterMarkBytes ?? w,
    g = T,
    _ =
      t.createStream ??
      ((e, t, n = !1) => (0, i.createWriteStream)(e, { flags: n ? `a` : `w`, highWaterMark: t })),
    v = O(p, S, n, `maxSegments`),
    y = O(f, x, n, `maxSegmentBytes`),
    E = O(m, C, n, `pendingLineLimit`),
    A = { logLine: () => {}, startAsyncWrites: () => {} };
  try {
    let t = d(),
      s = D(r, t);
    ((0, i.mkdirSync)(s, { recursive: !0 }), M(r, t, g, n));
    let f = k(u, o, c, l, t),
      p = (e) => (0, a.join)(s, `${f}-${e}.log`),
      m = !1,
      b = (e) => {
        ((m = !0),
          n(Error(`[file-logger] stream error`), {
            error: e instanceof Error ? e.message : String(e),
            rootDir: r,
            appSessionId: u,
            processId: o,
            threadId: c,
            instanceId: l,
          }));
      },
      x = (e) => (
        e.on(`error`, (e) => {
          b(e);
        }),
        e
      ),
      S = 0,
      C = 0,
      w = e.startSynchronous === !0,
      T = (e = !1) => (w ? null : x(_(p(S), h, e))),
      O = T(),
      A = [],
      j = 0,
      N = !1,
      P = 0,
      F = () => {
        let e = d(),
          t = D(r, e);
        t !== s &&
          ((s = t),
          (0, i.mkdirSync)(s, { recursive: !0 }),
          (f = k(u, o, c, l, e)),
          O?.end(),
          (S = 0),
          (C = 0),
          (P = 0),
          (O = T()));
      },
      I = () => {
        (O?.end(), (S = (S + 1) % v), (C = 0), (O = T()));
      },
      L = () => {
        if (P === 0) return;
        let e = `[file-logger] dropped ${P} lines due to backpressure\n`;
        (A.push({ text: e, bytes: Buffer.byteLength(e) }), (P = 0));
      },
      R = () => {
        if (m) {
          ((A = []), (j = 0), (P = 0));
          return;
        }
        if (N) return;
        N = !0;
        let e = !1;
        try {
          for (; !(j >= A.length && (L(), j >= A.length));) {
            let t = A[j];
            if ((C + t.bytes > y && I(), O == null)) {
              ((0, i.writeFileSync)(p(S), t.text, { flag: C === 0 ? `w` : `a` }), (C += t.bytes), (j += 1));
              continue;
            }
            let n = O.write(t.text);
            if (((C += t.bytes), (j += 1), !n)) {
              ((e = !0),
                O.once(`drain`, () => {
                  ((N = !1), R());
                }));
              return;
            }
          }
          ((A = []), (j = 0));
        } catch (e) {
          (n(Error(`[file-logger] write failed`), {
            error: e instanceof Error ? e.message : String(e),
            rootDir: r,
            appSessionId: u,
            processId: o,
            threadId: c,
            instanceId: l,
            maxSegments: v,
            maxSegmentBytes: y,
            pendingLineLimit: E,
          }),
            (A = []),
            (j = 0));
        } finally {
          N && !e && (N = !1);
        }
      };
    return {
      startAsyncWrites: () => {
        if (w && !m) {
          w = !1;
          try {
            O = T(C > 0);
          } catch (e) {
            b(e);
          }
        }
      },
      logLine: (e) => {
        if (!m)
          try {
            !N && A.length === 0 && F();
            let t = `${e}\n`;
            if (A.length - j >= E) {
              P += 1;
              return;
            }
            (A.push({ text: t, bytes: Buffer.byteLength(t) }), R());
          } catch (e) {
            n(Error(`[file-logger] logLine threw`), {
              error: e instanceof Error ? e.message : String(e),
              rootDir: r,
              appSessionId: u,
              processId: o,
              threadId: c,
              instanceId: l,
            });
          }
      },
    };
  } catch {
    return (
      n(Error(`[file-logger] failed to initialize`), {
        rootDir: r,
        appSessionId: u,
        processId: o,
        threadId: c,
        instanceId: l,
      }),
      A
    );
  }
}
(Object.defineProperty(exports, "a", {
  enumerable: !0,
  get: function () {
    return u;
  },
}),
  Object.defineProperty(exports, "i", {
    enumerable: !0,
    get: function () {
      return v;
    },
  }),
  Object.defineProperty(exports, "n", {
    enumerable: !0,
    get: function () {
      return b;
    },
  }),
  Object.defineProperty(exports, "o", {
    enumerable: !0,
    get: function () {
      return c;
    },
  }),
  Object.defineProperty(exports, "r", {
    enumerable: !0,
    get: function () {
      return y;
    },
  }),
  Object.defineProperty(exports, "t", {
    enumerable: !0,
    get: function () {
      return N;
    },
  }));
//# sourceMappingURL=file-based-logger-DD0smlUs.js.map
