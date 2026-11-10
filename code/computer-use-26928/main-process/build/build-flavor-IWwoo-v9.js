const e = require("./rolldown-runtime-CPUxUITh.js"),
  t = require("./src-ghAWefM3.js"),
  n = require("./logger-CUwSCKgw.js");
let r = require("node:fs"),
  i = require("node:path");
i = e.a(i);
var a = () => {
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
function o(e, { candidates: t = a(), parse: n } = {}) {
  for (let i of t) {
    if (!(0, r.existsSync)(i)) continue;
    let t = (0, r.readFileSync)(i, `utf8`),
      a = JSON.parse(t),
      o = typeof a[e] == `string` ? a[e].trim() : ``;
    if (!o) continue;
    let s = n ? n(o) : o;
    if (s != null) return s;
  }
  return null;
}
var s = n.i(`build-flavor`),
  c = [t.Mi.Nightly, t.Mi.InternalAlpha, t.Mi.PublicBeta, t.Mi.Prod],
  l = {
    [t.Mi.Nightly]: { kind: `msix` },
    [t.Mi.InternalAlpha]: { kind: `msix` },
    [t.Mi.PublicBeta]: {
      kind: `store`,
      storeProductId: `9N8CJ4W95TBZ`,
      storeUpdateManifestUrl: `https://persistent.oaistatic.com/codex-app-beta/windows-store-update.json`,
    },
    [t.Mi.Prod]: {
      kind: `store`,
      storeProductId: `9PLM9XGG6VKS`,
      storeUpdateManifestUrl: `https://persistent.oaistatic.com/codex-app-prod/windows-store-update.json`,
    },
  },
  u = (e) => e.CODEX_SPARKLE_ENABLED === `false`,
  d = (e, t, n, r) => !u(r) && c.includes(e) && t === n,
  f = (e, t, n) => d(e, t, `win32`, n),
  p = (e) => l[e] ?? null,
  m = {
    ...t.Mi,
    readFromPackageMetadata() {
      let e = o(`codexBuildFlavor`, { parse: (e) => (m.isValid(e) ? e : null) });
      return e
        ? (s().debug(`Resolved build flavor from package metadata`, {
            safe: { value: e },
            sensitive: {},
          }),
          e)
        : (s().warning(`Missing codexBuildFlavor from package metadata`), null);
    },
    resolve() {
      let e = process.env.BUILD_FLAVOR,
        t = m.parse(e);
      return t
        ? (s().info(`Resolved build flavor from env`, { safe: { value: t }, sensitive: {} }), t)
        : (e?.trim() &&
            s().warning(`Invalid BUILD_FLAVOR`, {
              safe: { value: e, expected: m.help },
              sensitive: {},
            }),
          m.readFromPackageMetadata() ||
            (process.env.NODE_ENV === `production`
              ? (s().warning(`BUILD_FLAVOR missing; defaulting to prod in production runtime`),
                m.Prod)
              : (s().warning(`BUILD_FLAVOR missing; defaulting to dev in non-production runtime`),
                m.Dev)));
    },
    assertMinAppServerVersionForReleaseBuild(e, t, n = process.env) {
      if (n.CODEX_RELEASE_BUILD_FLAVOR != null && !m.isInternal(e) && /-alpha(?:\.|$)/.test(t))
        throw Error(
          `MIN_APP_SERVER_VERSION cannot be an alpha version for public-beta or prod builds (received ${t})`,
        );
    },
    shouldIncludeSparkle(e, t, n = process.env) {
      return d(e, t, `darwin`, n);
    },
    shouldIncludeWindowsUpdater(e, t, n = process.env) {
      return f(e, t, n) && p(e) != null;
    },
    shouldIncludeLinuxPackageUpdater(e, t, n = process.env) {
      return d(e, t, `linux`, n);
    },
    shouldIncludeWindowsMsixUpdater(e, t, n = process.env) {
      return f(e, t, n) && p(e)?.kind === `msix`;
    },
    shouldIncludeBrowserUsePeerAuthorization(e, t) {
      return t === `darwin` && c.includes(e);
    },
    shouldIncludeUpdater(e, t, n = process.env) {
      return (
        m.shouldIncludeSparkle(e, t, n) ||
        m.shouldIncludeWindowsUpdater(e, t, n) ||
        m.shouldIncludeLinuxPackageUpdater(e, t, n)
      );
    },
    getWindowsDistributionFlavor(e, t) {
      return e === m.Prod && t === `OpenAI.CodexBeta` ? m.PublicBeta : e;
    },
    getWindowsStoreConfig(e, t = null) {
      let n = p(m.getWindowsDistributionFlavor(e, t));
      return n?.kind === `store`
        ? { storeProductId: n.storeProductId, storeUpdateManifestUrl: n.storeUpdateManifestUrl }
        : null;
    },
    shouldIncludeWindowsAppContainedCore(e, t = null) {
      let n = m.getWindowsDistributionFlavor(e, t);
      return (
        n === m.Dev ||
        n === m.Nightly ||
        n === m.InternalAlpha ||
        n === m.PublicBeta ||
        n === m.Prod
      );
    },
    shouldIncludeWindowsSandboxService(e, t = null) {
      let n = m.getWindowsDistributionFlavor(e, t);
      return n === m.Nightly || n === m.Prod;
    },
    allowDevtools(e) {
      return m.isInternal(e);
    },
  };
(Object.defineProperty(exports, "n", {
  enumerable: !0,
  get: function () {
    return o;
  },
}),
  Object.defineProperty(exports, "t", {
    enumerable: !0,
    get: function () {
      return m;
    },
  }));
//# sourceMappingURL=build-flavor-IWwoo-v9.js.map
