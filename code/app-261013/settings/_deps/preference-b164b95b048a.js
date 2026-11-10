const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./setup-readiness-cd3a7c54e8d4.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-e7c27dd40beb.css",
      "./contracts-80c91d59a0a6.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Fat as n,
  Hvt as r,
  Pat as i,
  Pxt as a,
  Zxt as o,
  fPt as s,
  pPt as c,
  qxt as l,
  rst as u,
  wot as d,
} from "./app-shared-bbfeca5e5737.js";
import {
  Akn as f,
  Aur as p,
  BPr as m,
  Ckn as h,
  Gcr as g,
  Hur as _,
  Icr as v,
  Jcr as y,
  Ncr as b,
  Pcr as x,
  QMr as S,
  Rcr as C,
  Skn as w,
  Ucr as T,
  VPr as E,
  Vur as D,
  alr as O,
  dIn as k,
  fMr as A,
  gOr as j,
  hOr as M,
  iPr as N,
  jkn as P,
  kur as F,
  sPr as I,
  tNr as L,
  uIn as R,
  wkn as z,
  xMr as B,
} from "./app-initial-5851df3f6cb1.js";
import { i as V, n as H, r as U, t as W } from "./contracts-80c91d59a0a6.js";
async function G(e, t, { enabled: n, signal: i, prepareForChat: a = !1, prepareForChatSignal: o }) {
  let c = () => !i.aborted && q(e, t);
  if (!c()) return { status: `cancelled` };
  try {
    let l = e.query.getData(Y, t) ?? (await e.query.getOrFetch(Y, t));
    if (!c()) return { status: `cancelled` };
    if (
      (l.plugin != null && l.plugin.canonical_app_id !== `connector_openai_write_like_me`) ||
      (n && !l.canInstall)
    )
      return { status: `failed` };
    if (n && !l.installed && l.plugin != null) {
      let n = await V(
        e,
        { displayName: l.plugin.release.display_name, remotePluginId: l.plugin.id, remoteMarketplaceName: r },
        {
          hostId: t.hostId,
          signal: i,
          suppressSuccessToast: !0,
          appConnectOptions: { connectorId: W, productSku: p(t.hostId) ? `TPP` : `CODEX` },
        },
      );
      if (!c() || n === `cancelled`) return { status: `cancelled` };
      if (n === `failed`) return { status: `failed` };
    } else if (!n && l.installed && l.plugin != null) {
      let n = x(l.plugin);
      await z({
        scope: e,
        hostId: t.hostId,
        queryClient: e.queryClient,
        marketplaceName: n.marketplaceName,
        pluginId: n.plugin.id,
        pluginName: n.plugin.name,
        requestPluginId: l.plugin.id,
        signal: i,
      });
    } else {
      if (n && !l.enabled && l.plugin != null)
        try {
          await N.safePost(`/ps/plugins/{plugin_id}/enable`, {
            parameters: { path: { plugin_id: l.plugin.id } },
            additionalHeaders: D(p(t.hostId) ? `chatgpt` : `codex`),
          });
        } finally {
          h((t) => E(e.queryClient, t));
        }
      if (!c()) return { status: `cancelled` };
      !C(t.hostId) &&
        (!n || !a || !l.enabled) &&
        (await P({ scope: e, hostId: t.hostId, queryClient: e.queryClient }));
    }
    if (!c()) return { status: `cancelled` };
    await e.query.invalidate(Y, t, { refetchType: `none` });
    let u = await e.query.fetch(Y, t);
    if (!c()) return { status: `cancelled` };
    if (!(n ? u.enabled && u.plugin?.id === l.plugin?.id : !u.installed)) return { status: `failed` };
    if (n && a && !o?.aborted && u.plugin != null) {
      let { prepareWritingStyleForChat: n } = await s(
          async () => {
            let { prepareWritingStyleForChat: e } = await import(`./setup-readiness-cd3a7c54e8d4.js`);
            return { prepareWritingStyleForChat: e };
          },
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
          import.meta.url,
        ),
        r = o ?? i,
        a = await n(e, t, u.plugin, r, () => c() && !r.aborted, l.installed);
      if (a !== `ready`) return { status: a };
    }
    return c() ? { status: `saved`, enabled: n } : { status: `cancelled` };
  } catch {
    return { status: c() ? `failed` : `cancelled` };
  }
}
async function K(e, t, n) {
  if (!q(e, t)) throw new DOMException(`Account changed`, `AbortError`);
  let r = AbortSignal.any([n, AbortSignal.timeout(T)]),
    [{ plugin_id: i }, a] = await Promise.all([
      N.safeGet(`/ps/plugins/canonical-app/{app_id}`, {
        parameters: { path: { app_id: W } },
        additionalHeaders: D(p(t.hostId) ? `chatgpt` : `codex`),
        signal: r,
      }),
      b(e, { productContext: p(t.hostId) ? `chatgpt` : `codex`, surface: `settings`, signal: r }),
    ]);
  if (!q(e, t)) throw new DOMException(`Account changed`, `AbortError`);
  let o =
      a.find((e) => e.plugin.remotePluginId === i) ??
      a.find((e) => e.canonicalAppId === `connector_openai_write_like_me`),
    s =
      o?.servicePlugin ??
      (i == null
        ? null
        : await N.safeGet(`/ps/plugins/{plugin_id}`, {
            parameters: { path: { plugin_id: i } },
            additionalHeaders: D(p(t.hostId) ? `chatgpt` : `codex`),
            signal: r,
          }));
  if (!q(e, t)) throw new DOMException(`Account changed`, `AbortError`);
  return {
    plugin: s,
    installed: o != null,
    enabled: o?.plugin.enabled === !0,
    canInstall:
      s?.id === i &&
      s.canonical_app_id === `connector_openai_write_like_me` &&
      s.status === `ENABLED` &&
      s.installation_policy !== `NOT_AVAILABLE`,
  };
}
function q(e, t) {
  return e.get(j) === t.accountId && e.get(S).userId === t.userId && e.get(B).status === `allowed`;
}
function J(e) {
  return [...y, `writing-style-preference`, W, e.accountId, e.userId, e.hostId];
}
var Y, X;
function Z() {
  return (Z = e(() => {
    (a(),
      u(),
      k(),
      F(),
      M(),
      L(),
      A(),
      _(),
      w(),
      f(),
      g(),
      v(),
      O(),
      m(),
      d(),
      n(),
      I(),
      H(),
      U(),
      c(),
      (Y = o(t, (e, { scope: t, get: n }) => ({
        queryKey: J(e),
        queryFn: ({ signal: n }) => K(t, e, n),
        enabled: n(j) === e.accountId && n(S).userId === e.userId && n(B).status === `allowed`,
        retry: !1,
        staleTime: i.ONE_MINUTE,
      }))),
      (X = l(
        t,
        (e, { scope: t }) => ({
          mutationKey: [`writing-style-preference`, e.accountId, e.userId],
          mutationFn: async ({ entryPoint: n = `unknown`, hostId: r, ...i }) => {
            let a = performance.now(),
              o = { enabled: String(i.enabled), entry_point: n };
            t.get(R).count(`default`, `write_like_me.preference_change`, { ...o, outcome: `started` });
            let s = await G(t, { ...e, hostId: r }, i),
              c = { saved: `success`, cancelled: `aborted`, failed: `failure` }[s.status];
            return (
              t.get(R).count(`default`, `write_like_me.preference_change`, { ...o, outcome: c }),
              t
                .get(R)
                .hist(
                  `default`,
                  `write_like_me.preference_change_duration_ms`,
                  { ...o, outcome: c },
                  performance.now() - a,
                ),
              s
            );
          },
        }),
        { excludeFieldsFromKey: [`hostId`] },
      )));
  }))();
}
export { Y as n, X as r, Z as t };
//# sourceMappingURL=preference-b164b95b048a.js.map
