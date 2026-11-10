import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as n,
  Fat as r,
  Pat as i,
  Pxt as a,
  Zxt as o,
  iot as s,
  nSt as c,
  sMt as l,
  wot as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  Hcr as d,
  Icr as f,
  LPr as p,
  Lcr as m,
  Nbt as h,
  Ocr as g,
  Q1n as _,
  RPr as v,
  Rcr as y,
  Udr as b,
  Vcr as x,
  Wbt as ee,
  Ycr as S,
  Z1n as C,
  __r as te,
  _it as ne,
  a0n as re,
  aMr as w,
  alr as T,
  cbt as E,
  d_r as D,
  dat as O,
  e2 as k,
  fMr as A,
  gOr as j,
  hOr as M,
  ilr as ie,
  kcr as N,
  lbt as P,
  m_r as ae,
  oFr as F,
  qdr as I,
  slr as L,
  t2 as R,
  uat as z,
  ubt as B,
  vit as V,
  wcr as H,
} from "./app-initial-5851df3f6cb1.js";
function U({ candidates: e, directoryApps: t, plugins: n, runtimeApps: r, useCanonicalAppIds: i = !1 }) {
  let a = [],
    o = [],
    s = new Map(r.map((e) => [e.id, e])),
    c = new Set();
  for (let r of B({ apps: t, candidates: e })) {
    let e = n.filter((e) => (i ? W(r, e) : L(e.marketplaceName) && V(r, e.plugin)));
    if (e.length === 0) {
      s.get(r.id)?.isAccessible || a.push(r);
      continue;
    }
    if (e.some((e) => e.plugin.installed)) {
      s.get(r.id)?.isAccessible || a.push(r);
      continue;
    }
    let t = e[0];
    t != null && !c.has(t.plugin.id) && (c.add(t.plugin.id), o.push({ app: r, plugin: t }));
  }
  return { appsRequiringConnection: a, importedPlugins: o };
}
function W(e, t) {
  return (
    L(t.marketplaceName) && (t.canonicalAppId == null ? V(e, t.plugin) : b(t.canonicalAppId) === b(e.id))
  );
}
function G() {
  return (G = e(() => {
    (ne(), T(), P());
  }))();
}
var K, q, J, Y;
function X() {
  return (X = e(() => {
    ((K = t(I(), 1)),
      (q = t(l(), 1)),
      a(),
      M(),
      A(),
      O(),
      g(),
      f(),
      k(),
      x(),
      T(),
      u(),
      ae(),
      F(),
      r(),
      G(),
      (J = c(n, ({ hostId: e, apps: t }, { get: n }) => {
        let r = y(e),
          i = n(j),
          a = r ? !0 : n(d, e);
        if (a == null || (r && i == null) || (!r && e === `local` && n(w).authLoading))
          return { status: `loading`, data: void 0 };
        let o = r ? null : n(te, { hostId: e }),
          s = r ? null : n(D, { hostId: e });
        if (o?.error != null || s?.error != null)
          return {
            status: `error`,
            data: void 0,
            retry: () => {
              (o?.refetch(), s?.refetch());
            },
          };
        if (!r && (o?.data == null || s?.data == null)) return { status: `loading`, data: void 0 };
        let c = r ? void 0 : ie({ hostId: e, workspaceRoots: o?.data?.roots, codexHome: s?.data?.codexHome }),
          l = n(m, { accountId: r ? i : null, hostId: e, roots: c }),
          u = r ? null : n(R, e),
          f = [o, s, l, u];
        if (f.some((e) => e?.error != null))
          return {
            status: `error`,
            data: void 0,
            retry: () => {
              for (let e of f) e?.refetch();
            },
          };
        if (f.some((e) => e != null && e.data == null)) return { status: `loading`, data: void 0 };
        let p = (0, q.default)([...(l.data ?? []), ...(u?.data?.plugins ?? [])], ({ plugin: e }) => e.id),
          h = t.filter((e) => !p.some((t) => W(e, t))),
          g =
            a && i != null && h.length > 0
              ? n(Y, { hostId: e, appIds: h.map((e) => b(e.id)), roots: c })
              : null;
        if (g?.error != null)
          return {
            status: `error`,
            data: void 0,
            retry: () => {
              g.refetch();
            },
          };
        if (g != null && g.data == null) return { status: `loading`, data: void 0 };
        let _ = new Map(p.map((e) => [e.plugin.id, e]));
        for (let e of g?.data ?? []) {
          let t = _.get(e.plugin.id);
          _.set(
            e.plugin.id,
            t?.plugin.installed
              ? {
                  ...e,
                  plugin: {
                    ...e.plugin,
                    installed: !0,
                    installedAt: t.plugin.installedAt,
                    enabled: t.plugin.enabled,
                    installPolicy: t.plugin.installPolicy,
                    installPolicySource: t.plugin.installPolicySource,
                    localVersion: t.plugin.localVersion,
                    remotePluginId: e.plugin.remotePluginId ?? t.plugin.remotePluginId,
                  },
                }
              : e,
          );
        }
        return {
          status: `ready`,
          data: {
            plugins: Array.from(_.values()),
            isFetching: f.some((e) => e?.isFetching) || g?.isFetching === !0,
          },
        };
      })),
      (Y = o(n, ({ hostId: e, appIds: t, roots: n }, { get: r, scope: a }) => {
        let o = r(j);
        return {
          queryKey: [`plugins`, `imported-details`, e, o, t, n],
          queryFn: async ({ signal: r }) => {
            let i = [];
            for (let s of (0, K.default)(t, 4)) {
              r.throwIfAborted();
              let t = await Promise.all(
                s.map(async (t) => {
                  let { plugin_id: i } = await a.queryClient.fetchQuery(z(t, o));
                  if (i == null) return null;
                  r.throwIfAborted();
                  let s = await a.queryClient.fetchQuery({
                    ...a.query.getOptions(N, H({ hostId: e, pluginId: i, remotePluginId: i, roots: n })),
                    retry: !1,
                  });
                  return { ...S(s), canonicalAppId: t };
                }),
              );
              i.push(...t.filter((e) => e != null));
            }
            return (r.throwIfAborted(), i);
          },
          retry: !1,
          staleTime: i.ONE_MINUTE,
        };
      })));
  }))();
}
function oe({ inputsResult: e, pluginDirectory: t }) {
  return e.status === `ready`
    ? e.data.kind === `plugin-directory`
      ? t.errorMessage == null
        ? t.isLoading
          ? { data: void 0, status: `loading` }
          : {
              data: U({
                candidates: e.data.candidates,
                directoryApps: e.data.directoryApps,
                plugins: t.plugins,
                runtimeApps: e.data.runtimeApps,
              }),
              status: `ready`,
            }
        : {
            data: void 0,
            status: `error`,
            retry: () => {
              t.refetch();
            },
          }
      : { data: e.data.setup, status: `ready` }
    : e;
}
var Z, Q;
function $() {
  return ($ = e(() => {
    (a(),
      re(),
      M(),
      f(),
      v(),
      u(),
      F(),
      ee(),
      P(),
      X(),
      G(),
      (Z = o(n, (e, { get: t, scope: n }) => _(n, e, void 0))),
      (Q = c(n, (e, { get: t }) => {
        let n = e === s,
          r = n ? t(E, e) : null,
          i = t(h, e),
          a = n ? r?.data?.connectors : [],
          o = i.data;
        if (o == null || (a == null && (r?.error != null || o.length === 0)))
          return r?.error != null || i.error != null
            ? {
                data: void 0,
                status: `error`,
                retry: () => {
                  (r?.refetch(), i.refetch());
                },
              }
            : { data: void 0, status: `loading` };
        let c = [...(a ?? []), ...o];
        if (c.length === 0)
          return {
            data: { kind: `complete`, setup: { appsRequiringConnection: [], importedPlugins: [] } },
            status: `ready`,
          };
        let l = t(p, e),
          u = l.data;
        if (u == null)
          return l.error == null
            ? { data: void 0, status: `loading` }
            : {
                data: void 0,
                status: `error`,
                retry: () => {
                  l.refetch();
                },
              };
        if (!u.some((e) => e.name === `apps` && e.enabled))
          return {
            data: { kind: `complete`, setup: { appsRequiringConnection: [], importedPlugins: [] } },
            status: `ready`,
          };
        let d = t(Z, e),
          f = d.data;
        if (f == null)
          return d.error == null
            ? { data: void 0, status: `loading` }
            : {
                data: void 0,
                status: `error`,
                retry: () => {
                  d.refetch();
                },
              };
        let m = B({ apps: f, candidates: c });
        if (m.length === 0)
          return {
            data: { kind: `complete`, setup: { appsRequiringConnection: [], importedPlugins: [] } },
            status: `ready`,
          };
        let g = t(C, e),
          _ = g.data;
        if (_ == null)
          return g.error == null
            ? { data: void 0, status: `loading` }
            : {
                data: void 0,
                status: `error`,
                retry: () => {
                  g.refetch();
                },
              };
        if (u.find((e) => e.name === `plugins`)?.enabled === !1) {
          let e = new Map(_.map((e) => [e.id, e]));
          return {
            data: {
              kind: `complete`,
              setup: {
                appsRequiringConnection: m.filter((t) => !e.get(t.id)?.isAccessible),
                importedPlugins: [],
              },
            },
            status: `ready`,
          };
        }
        if (e === `local` || y(e)) {
          let n = t(J, { hostId: e, apps: m });
          return n.status === `ready`
            ? {
                status: `ready`,
                data: {
                  kind: `targeted-plugins`,
                  ...n.data,
                  setup: U({
                    candidates: c,
                    directoryApps: f,
                    plugins: n.data.plugins,
                    runtimeApps: _,
                    useCanonicalAppIds: !0,
                  }),
                },
              }
            : n;
        }
        return {
          data: { candidates: c, directoryApps: f, kind: `plugin-directory`, runtimeApps: _ },
          status: `ready`,
        };
      })));
  }))();
}
export { W as a, G as i, Q as n, $ as r, oe as t };
//# sourceMappingURL=setup-e77998d0081a.js.map
