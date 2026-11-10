const e = require("./src-KMpTO78a.js"),
  t = require("./src-B6LqG3ek.js"),
  n = require("./logger-DkO6GWbX.js");
let r = require("node:os"),
  i = require("node:path");
i = e.o(i);
let a = require("node:crypto"),
  o = require("node:fs"),
  s = require("node:worker_threads");
var c = (0, a.randomUUID)(),
  l = () => {
    let e = process.cwd(),
      t = [];
    return (
      process.resourcesPath &&
        t.push(i.default.join(process.resourcesPath, `app.asar`, `package.json`)),
      t.push(i.default.join(e, `package.json`)),
      t.push(i.default.join(e, `electron`, `package.json`)),
      t
    );
  };
function u(e, { candidates: t = l(), parse: n } = {}) {
  for (let r of t) {
    if (!(0, o.existsSync)(r)) continue;
    let t = (0, o.readFileSync)(r, `utf8`),
      i = JSON.parse(t),
      a = typeof i[e] == `string` ? i[e].trim() : ``;
    if (!a) continue;
    let s = n ? n(a) : a;
    if (s != null) return s;
  }
  return null;
}
var d = n.i(`build-flavor`),
  f = [t.Nc.Nightly, t.Nc.InternalAlpha, t.Nc.PublicBeta, t.Nc.Prod],
  p = {
    [t.Nc.Nightly]: { kind: `msix` },
    [t.Nc.InternalAlpha]: { kind: `msix` },
    [t.Nc.PublicBeta]: {
      kind: `store`,
      storeProductId: `9N8CJ4W95TBZ`,
      storeUpdateManifestUrl: `https://persistent.oaistatic.com/codex-app-beta/windows-store-update.json`,
    },
    [t.Nc.Prod]: {
      kind: `store`,
      storeProductId: `9PLM9XGG6VKS`,
      storeUpdateManifestUrl: `https://persistent.oaistatic.com/codex-app-prod/windows-store-update.json`,
    },
  },
  m = (e) => e.CODEX_SPARKLE_ENABLED === `false`,
  h = (e, t, n, r) => !m(r) && f.includes(e) && t === n,
  g = (e, t, n) => h(e, t, `win32`, n),
  _ = (e) => p[e] ?? null,
  v = {
    ...t.Nc,
    readFromPackageMetadata() {
      let e = u(`codexBuildFlavor`, { parse: (e) => (v.isValid(e) ? e : null) });
      return e
        ? (d().debug(`Resolved build flavor from package metadata`, {
            safe: { value: e },
            sensitive: {},
          }),
          e)
        : (d().warning(`Missing codexBuildFlavor from package metadata`), null);
    },
    resolve() {
      let e = process.env.BUILD_FLAVOR,
        t = v.parse(e);
      return t
        ? (d().info(`Resolved build flavor from env`, { safe: { value: t }, sensitive: {} }), t)
        : (e?.trim() &&
            d().warning(`Invalid BUILD_FLAVOR`, {
              safe: { value: e, expected: v.help },
              sensitive: {},
            }),
          v.readFromPackageMetadata() ||
            (process.env.NODE_ENV === `production`
              ? (d().warning(`BUILD_FLAVOR missing; defaulting to prod in production runtime`),
                v.Prod)
              : (d().warning(`BUILD_FLAVOR missing; defaulting to dev in non-production runtime`),
                v.Dev)));
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
        ? { storeProductId: n.storeProductId, storeUpdateManifestUrl: n.storeUpdateManifestUrl }
        : null;
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
    a = (0, r.homedir)();
  return t === `darwin`
    ? (0, i.join)(a, `Library`, `Logs`, y(e ?? v.resolve()))
    : t === `win32`
      ? (0, i.join)(n.LOCALAPPDATA ?? (0, i.join)(a, `AppData`, `Local`), `Codex`, `Logs`)
      : t === `linux`
        ? (0, i.join)(n.XDG_STATE_HOME ?? (0, i.join)(a, `.local`, `state`), `codex`, `logs`)
        : (0, i.join)(a, `.codex`, `logs`);
}
var x = 10 * 1024 * 1024,
  S = 5,
  C = 1e4,
  w = 1024 * 1024,
  T = 15;
function E(e) {
  return e.toString().padStart(2, `0`);
}
function D(e, t) {
  return (0, i.join)(e, t.getUTCFullYear().toString(), E(t.getUTCMonth() + 1), E(t.getUTCDate()));
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
      a = new Date(r);
    a.setUTCDate(a.getUTCDate() - (n - 1));
    for (let t of (0, o.readdirSync)(e)) {
      if (!/^\d{4}$/.test(t)) continue;
      let n = Number(t);
      if (!Number.isFinite(n)) continue;
      let r = (0, i.join)(e, t);
      for (let e of (0, o.readdirSync)(r)) {
        if (!/^\d{2}$/.test(e)) continue;
        let t = Number(e);
        if (!Number.isFinite(t) || t < 1 || t > 12) continue;
        let s = (0, i.join)(r, e);
        for (let e of (0, o.readdirSync)(s)) {
          if (!/^\d{2}$/.test(e)) continue;
          let r = Number(e);
          !Number.isFinite(r) ||
            r < 1 ||
            r > 31 ||
            (new Date(Date.UTC(n, t - 1, r)) < a &&
              (0, o.rmSync)((0, i.join)(s, e), { recursive: !0, force: !0 }));
        }
        (0, o.readdirSync)(s).length === 0 && (0, o.rmSync)(s, { recursive: !0, force: !0 });
      }
      (0, o.readdirSync)(r).length === 0 && (0, o.rmSync)(r, { recursive: !0, force: !0 });
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
    a = t.processId ?? process.pid,
    c = t.threadId ?? s.threadId ?? 0,
    l = t.instanceId ?? j(),
    u = e.appSessionId,
    d = t.now ?? (() => new Date()),
    f = e.maxSegmentBytes ?? x,
    p = e.maxSegments ?? S,
    m = e.pendingLineLimit ?? C,
    h = e.highWaterMarkBytes ?? w,
    g = T,
    _ = t.createStream ?? ((e, t) => (0, o.createWriteStream)(e, { flags: `w`, highWaterMark: t })),
    v = O(p, S, n, `maxSegments`),
    y = O(f, x, n, `maxSegmentBytes`),
    E = O(m, C, n, `pendingLineLimit`),
    A = { logLine: () => {} };
  try {
    let e = d(),
      t = D(r, e);
    ((0, o.mkdirSync)(t, { recursive: !0 }), M(r, e, g, n));
    let s = k(u, a, c, l, e),
      f = (e) => (0, i.join)(t, `${s}-${e}.log`),
      p = !1,
      m = (e) => {
        ((p = !0),
          n(Error(`[file-logger] stream error`), {
            error: e instanceof Error ? e.message : String(e),
            rootDir: r,
            appSessionId: u,
            processId: a,
            threadId: c,
            instanceId: l,
          }));
      },
      b = (e) => (
        e.on(`error`, (e) => {
          m(e);
        }),
        e
      ),
      x = 0,
      S = 0,
      C = b(_(f(x), h)),
      w = [],
      T = 0,
      O = !1,
      A = 0,
      j = () => {
        let e = d(),
          n = D(r, e);
        n !== t &&
          ((t = n),
          (0, o.mkdirSync)(t, { recursive: !0 }),
          (s = k(u, a, c, l, e)),
          C.end(),
          (x = 0),
          (S = 0),
          (A = 0),
          (C = b(_(f(x), h))));
      },
      N = () => {
        (C.end(), (x = (x + 1) % v), (S = 0), (C = b(_(f(x), h))));
      },
      P = () => {
        if (A === 0) return;
        let e = `[file-logger] dropped ${A} lines due to backpressure\n`;
        (w.push({ text: e, bytes: Buffer.byteLength(e) }), (A = 0));
      },
      F = () => {
        if (p) {
          ((w = []), (T = 0), (A = 0));
          return;
        }
        if (O) return;
        O = !0;
        let e = !1;
        try {
          for (; !(T >= w.length && (P(), T >= w.length));) {
            let t = w[T];
            S + t.bytes > y && N();
            let n = C.write(t.text);
            if (((S += t.bytes), (T += 1), !n)) {
              ((e = !0),
                C.once(`drain`, () => {
                  ((O = !1), F());
                }));
              return;
            }
          }
          ((w = []), (T = 0));
        } catch (e) {
          (n(Error(`[file-logger] write failed`), {
            error: e instanceof Error ? e.message : String(e),
            rootDir: r,
            appSessionId: u,
            processId: a,
            threadId: c,
            instanceId: l,
            maxSegments: v,
            maxSegmentBytes: y,
            pendingLineLimit: E,
          }),
            (w = []),
            (T = 0));
        } finally {
          O && !e && (O = !1);
        }
      };
    return {
      logLine: (e) => {
        if (!p)
          try {
            !O && w.length === 0 && j();
            let t = `${e}\n`;
            if (w.length - T >= E) {
              A += 1;
              return;
            }
            (w.push({ text: t, bytes: Buffer.byteLength(t) }), F());
          } catch (e) {
            n(Error(`[file-logger] logLine threw`), {
              error: e instanceof Error ? e.message : String(e),
              rootDir: r,
              appSessionId: u,
              processId: a,
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
        processId: a,
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
//# sourceMappingURL=file-based-logger-BEXzjhGa.js.map
