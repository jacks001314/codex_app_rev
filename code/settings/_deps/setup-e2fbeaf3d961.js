import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Cf as t,
  Gf as n,
  KYt as r,
  Nf as i,
  O3t as a,
  Sf as o,
  U3t as s,
  a3t as c,
  ayt as l,
  cz as u,
  d9 as d,
  e4t as f,
  fT as p,
  g9 as m,
  i6t as h,
  lxt as g,
  o3t as _,
  pT as v,
  syt as y,
  sz as b,
  wf as x,
  y9 as S,
} from "./app-initial-f094ef01c64d.js";
function C({ candidates: e, directoryApps: t, plugins: n, runtimeApps: r }) {
  let i = [],
    a = [],
    o = new Map(r.map((e) => [e.id, e])),
    s = new Set();
  for (let r of x({ apps: t, candidates: e })) {
    let e = n.filter((e) => y(e.marketplaceName) && v(r, e.plugin));
    if (e.length === 0) {
      o.get(r.id)?.isAccessible || i.push(r);
      continue;
    }
    if (e.some((e) => e.plugin.installed)) {
      o.get(r.id)?.isAccessible || i.push(r);
      continue;
    }
    let t = e[0];
    t != null && !s.has(t.plugin.id) && (s.add(t.plugin.id), a.push({ app: r, plugin: t }));
  }
  return { appsRequiringConnection: i, importedPlugins: a };
}
var w = e(() => {
  (p(), l(), t());
});
function T({ inputsResult: e, pluginDirectory: t }) {
  return e.status === `ready`
    ? e.data.kind === `complete`
      ? { data: e.data.setup, status: `ready` }
      : t.errorMessage == null
        ? t.isLoading
          ? { data: void 0, status: `loading` }
          : {
              data: C({
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
    : e;
}
var E,
  D,
  O = e(() => {
    (a(),
      g(),
      S(),
      u(),
      _(),
      r(),
      n(),
      t(),
      w(),
      (E = s(c, (e, { get: t, scope: n }) => m(n, e, !1, void 0))),
      (D = h(c, (e, { get: t }) => {
        let n = e === f,
          r = n ? t(o, e) : null,
          a = t(i, e),
          s = n ? r?.data?.connectors : [],
          c = a.data;
        if (c == null || (s == null && (r?.error != null || c.length === 0)))
          return r?.error != null || a.error != null
            ? {
                data: void 0,
                status: `error`,
                retry: () => {
                  (r?.refetch(), a.refetch());
                },
              }
            : { data: void 0, status: `loading` };
        let l = [...(s ?? []), ...c];
        if (l.length === 0)
          return {
            data: { kind: `complete`, setup: { appsRequiringConnection: [], importedPlugins: [] } },
            status: `ready`,
          };
        let u = t(b, e),
          p = u.data;
        if (p == null)
          return u.error == null
            ? { data: void 0, status: `loading` }
            : {
                data: void 0,
                status: `error`,
                retry: () => {
                  u.refetch();
                },
              };
        if (!p.some((e) => e.name === `apps` && e.enabled))
          return {
            data: { kind: `complete`, setup: { appsRequiringConnection: [], importedPlugins: [] } },
            status: `ready`,
          };
        let m = t(E, e),
          h = m.data;
        if (h == null)
          return m.error == null
            ? { data: void 0, status: `loading` }
            : {
                data: void 0,
                status: `error`,
                retry: () => {
                  m.refetch();
                },
              };
        let g = x({ apps: h, candidates: l });
        if (g.length === 0)
          return {
            data: { kind: `complete`, setup: { appsRequiringConnection: [], importedPlugins: [] } },
            status: `ready`,
          };
        let _ = t(d, e),
          v = _.data;
        if (v == null)
          return _.error == null
            ? { data: void 0, status: `loading` }
            : {
                data: void 0,
                status: `error`,
                retry: () => {
                  _.refetch();
                },
              };
        if (p.find((e) => e.name === `plugins`)?.enabled === !1) {
          let e = new Map(v.map((e) => [e.id, e]));
          return {
            data: {
              kind: `complete`,
              setup: {
                appsRequiringConnection: g.filter((t) => !e.get(t.id)?.isAccessible),
                importedPlugins: [],
              },
            },
            status: `ready`,
          };
        }
        return {
          data: { candidates: l, directoryApps: h, kind: `plugin-directory`, runtimeApps: v },
          status: `ready`,
        };
      })));
  });
export { D as n, O as r, T as t };
//# sourceMappingURL=setup-e2fbeaf3d961.js.map
