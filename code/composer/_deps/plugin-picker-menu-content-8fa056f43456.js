import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Amn as n,
  Ayt as r,
  B9 as i,
  Cj as a,
  Cpn as o,
  Fvt as s,
  HDt as c,
  JG as l,
  KAt as u,
  Lo as d,
  N3t as f,
  Nvt as p,
  O3t as m,
  Opn as h,
  QV as g,
  RKt as _,
  Ro as v,
  Rvt as y,
  Sj as b,
  Spn as x,
  TJt as S,
  U3t as C,
  V9 as w,
  Wvt as T,
  ZG as E,
  ZV as D,
  a3t as O,
  ayt as k,
  cAt as A,
  cT as j,
  dyt as ee,
  fk as M,
  hmn as N,
  kmn as P,
  krn as F,
  kyt as I,
  lT as L,
  lxt as R,
  mYt as z,
  mrn as B,
  mxt as V,
  o3t as H,
  pk as U,
  r6t as W,
  rrn as G,
  s3t as K,
  s6t as q,
  sxt as J,
  wJt as Y,
} from "./app-initial-f094ef01c64d.js";
import {
  Lw as te,
  Rw as ne,
  fE as re,
  om as ie,
  rm as X,
  sE as ae,
  sm as oe,
  um as se,
} from "./app-primary-4c40d73a1074.js";
function ce(e, t) {
  let n = e.get(J);
  if (n == null) return;
  let r = le(t);
  e.set(Z, n, (e) => ({ ...e, [r]: Math.min((e[r] ?? 0) + 1, 2 ** 53 - 1) }));
}
function le(e) {
  return j(e.canonicalAppId?.trim() || e.plugin.remotePluginId || e.plugin.name);
}
var Z,
  ue,
  de = e(() => {
    (K(),
      m(),
      L(),
      R(),
      V(),
      p(),
      k(),
      H(),
      A(),
      S(),
      (Z = q(O, (e) => ({}))),
      (ue = C(O, (e, { get: t, scope: n }) => {
        let r = t(J),
          i =
            r == null
              ? []
              : Object.entries(t(Z, r))
                  .sort((e, t) => t[1] - e[1])
                  .map(([e]) => e);
        return {
          enabled: !1,
          queryKey: [...T, `work-composer-installed`, r, e, `connectors`, void 0, i],
          queryFn: W,
          retry: !1,
          staleTime: Y.ONE_MINUTE,
        };
      })));
  });
function fe(e) {
  let t = (0, he.c)(41),
    { cwd: n, hostId: i, pluginHostId: a, marketplaceAnalytics: o, workComposer: c } = e,
    l = a === void 0 ? i : a,
    u = c !== void 0 && c,
    d;
  t[0] === i ? (d = t[1]) : ((d = { hostId: i }), (t[0] = i), (t[1] = d));
  let p = r(d),
    m;
  t[2] === l ? (m = t[3]) : ((m = s(l)), (t[2] = l), (t[3] = m));
  let h = m,
    g = u && !1,
    _ = p && !h,
    v;
  t[4] === _ ? (v = t[5]) : ((v = { enabled: _ }), (t[4] = _), (t[5] = v));
  let {
      availablePlugins: b,
      errorMessage: x,
      featuredPluginIds: S,
      reload: C,
      isLoading: w,
    } = ee(l, n, v),
    T = p && h,
    E;
  t[6] !== l || t[7] !== T
    ? ((E = { enabled: T, hostId: l, roots: void 0 }), (t[6] = l), (t[7] = T), (t[8] = E))
    : (E = t[8]);
  let { data: D, error: O, isLoading: k } = y(E),
    A = p && g,
    j;
  t[9] === A ? (j = t[10]) : ((j = { enabled: A }), (t[9] = A), (t[10] = j));
  let { data: M, error: N, isLoading: P } = f(ue, l, j),
    { installPlugin: F, status: I } = re(),
    L;
  t[11] !== i || t[12] !== F || t[13] !== o || t[14] !== C
    ? ((L = (e, t) =>
        F(e, { ...t, hostId: i, ...(o == null ? {} : { marketplaceAnalytics: o }), onSuccess: C })),
      (t[11] = i),
      (t[12] = F),
      (t[13] = o),
      (t[14] = C),
      (t[15] = L))
    : (L = t[15]);
  let R = L,
    z,
    B,
    V,
    H;
  if (
    t[16] !== k ||
    t[17] !== P ||
    t[18] !== b ||
    t[19] !== x ||
    t[20] !== S ||
    t[21] !== D ||
    t[22] !== O ||
    t[23] !== w ||
    t[24] !== h ||
    t[25] !== g ||
    t[26] !== M ||
    t[27] !== N
  ) {
    let e = b;
    ((V = x != null),
      (z = w),
      h &&
        (g
          ? ((e = M ?? []), (V = O != null || N != null), (z = k || P))
          : ((e = D ?? []), (V = O != null), (z = k))),
      (B = ie(e)),
      (H = se({ featuredPluginIds: S, plugins: e }).find(me)?.plugins.filter(pe).slice(0, 8) ?? []),
      (t[16] = k),
      (t[17] = P),
      (t[18] = b),
      (t[19] = x),
      (t[20] = S),
      (t[21] = D),
      (t[22] = O),
      (t[23] = w),
      (t[24] = h),
      (t[25] = g),
      (t[26] = M),
      (t[27] = N),
      (t[28] = z),
      (t[29] = B),
      (t[30] = V),
      (t[31] = H));
  } else ((z = t[28]), (B = t[29]), (V = t[30]), (H = t[31]));
  let U = H,
    W = I?.hostId === i ? I : null,
    G = g ? 10 : void 0,
    K = V && B.length === 0,
    q;
  return (
    t[32] !== z ||
    t[33] !== B ||
    t[34] !== U ||
    t[35] !== R ||
    t[36] !== W ||
    t[37] !== p ||
    t[38] !== G ||
    t[39] !== K
      ? ((q = {
          connectedPlugins: B,
          defaultConnectedPluginLimit: G,
          featuredPlugins: U,
          hasLoadError: K,
          isLoading: z,
          openPluginInstall: R,
          pluginsFeatureEnabled: p,
          pluginInstallationStatus: W,
        }),
        (t[32] = z),
        (t[33] = B),
        (t[34] = U),
        (t[35] = R),
        (t[36] = W),
        (t[37] = p),
        (t[38] = G),
        (t[39] = K),
        (t[40] = q))
      : (q = t[40]),
    q
  );
}
function pe(e) {
  return !e.plugin.installed && !v(e.plugin);
}
function me(e) {
  let { section: t } = e;
  return t.id === `plugins-featured`;
}
var he,
  ge = e(() => {
    ((he = P()), m(), I(), d(), de(), ae(), X(), p(), k());
  }),
  _e,
  ve = e(() => {
    (K(),
      c(),
      u(),
      m(),
      G(),
      L(),
      R(),
      p(),
      k(),
      H(),
      z(),
      S(),
      _(),
      B(F().trim().catch(``)).catch([]),
      (_e = C(O, (e, { get: t }) => {
        let n = t(J);
        return {
          enabled: !1,
          queryKey: [...T, `work-composer-featured`, n, e, !1, void 0],
          queryFn: W,
          retry: !1,
          staleTime: Y.ONE_MINUTE,
        };
      })));
  });
function ye(e) {
  "use forget";
  let t = (0, be.c)(13),
    {
      featuredPlugins: n,
      label: r,
      onConnectPlugin: a,
      onOpenPluginDirectory: s,
      workRecommendationsHostId: c,
    } = e,
    { data: u, isLoading: d } = f(_e, c),
    p = u ?? n,
    m;
  t[0] === d
    ? (m = t[1])
    : ((m = d
        ? (0, Q.jsx)(l.Message, {
            compact: !0,
            role: `status`,
            children: (0, Q.jsx)(`span`, {
              className: `loading-shimmer-pure-text select-none`,
              children: (0, Q.jsx)(o, {
                id: `composer.workMode.plugins.loadingRecommendations`,
                defaultMessage: `Loading plugins…`,
                description: `Status in the Connect plugins submenu while recommended plugins load. Installed plugins and the Browse all plugins action remain available.`,
              }),
            }),
          })
        : null),
      (t[0] = d),
      (t[1] = m));
  let h;
  t[2] !== a || t[3] !== p
    ? ((h =
        p.length > 0
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(l.Section, {
                  className: `flex flex-col`,
                  children: p.map((e) =>
                    (0, Q.jsxs)(
                      l.Item,
                      {
                        RightIcon: D,
                        onSelect: () => a(e),
                        children: [
                          (0, Q.jsx)(l.ItemIcon, {
                            size: `xs`,
                            children: (0, Q.jsx)(M, {
                              alt: ``,
                              className: `size-full object-contain`,
                              knownAppId: e.plugin.name,
                              logoDarkUrl: e.logoDarkPath,
                              logoUrl: e.logoPath,
                              fallback: (0, Q.jsx)(b, { className: `size-full text-secondary` }),
                            }),
                          }),
                          (0, Q.jsx)(`span`, { children: i(e) }),
                        ],
                      },
                      e.plugin.id,
                    ),
                  ),
                }),
                (0, Q.jsx)(l.Separator, {}),
              ],
            })
          : null),
      (t[2] = a),
      (t[3] = p),
      (t[4] = h))
    : (h = t[4]);
  let g;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Q.jsx)(o, {
        id: `composer.workMode.plugins.browseAll`,
        defaultMessage: `Browse all plugins`,
        description: `Action that opens the full plugin directory from a plugin picker`,
      })),
      (t[5] = g))
    : (g = t[5]);
  let _;
  t[6] === s
    ? (_ = t[7])
    : ((_ = (0, Q.jsx)(l.Section, {
        className: `flex flex-col`,
        children: (0, Q.jsx)(l.Item, { RightIcon: te, onSelect: s, children: g }),
      })),
      (t[6] = s),
      (t[7] = _));
  let v;
  return (
    t[8] !== r || t[9] !== m || t[10] !== h || t[11] !== _
      ? ((v = (0, Q.jsxs)(l.FlyoutSubmenuItem, {
          LeftIcon: b,
          contentSurface: `opaque`,
          contentWidth: `menuWide`,
          label: r,
          children: [m, h, _],
        })),
        (t[8] = r),
        (t[9] = m),
        (t[10] = h),
        (t[11] = _),
        (t[12] = v))
      : (v = t[12]),
    v
  );
}
var be,
  Q,
  xe = e(() => {
    ((be = P()), m(), x(), U(), E(), a(), ne(), g(), ve(), w(), (Q = N()));
  });
function Se(e) {
  "use forget";
  let t = (0, Ce.c)(40),
    {
      connectedPlugins: n,
      defaultConnectedPluginLimit: r,
      featuredPlugins: a,
      hasLoadError: s,
      onConnectPlugin: c,
      onOpenPluginDirectory: u,
      onPluginSelectionChange: d,
      selectedPluginIds: f,
      workRecommendationsHostId: p,
    } = e,
    m = h(),
    [g, _] = (0, we.useState)(``),
    v,
    y,
    x,
    S,
    C;
  if (t[0] !== n || t[1] !== r || t[2] !== m || t[3] !== d || t[4] !== g || t[5] !== f) {
    y = oe({ plugins: n, query: g });
    let e = r != null && g.trim().length === 0 ? y.slice(0, r) : y,
      a;
    t[11] === m
      ? (a = t[12])
      : ((a = m.formatMessage({
          id: `composer.workMode.plugins.search`,
          defaultMessage: `Search plugins…`,
          description: `Placeholder for the plugin search field in the Chat home composer`,
        })),
        (t[11] = m),
        (t[12] = a));
    let o;
    (t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (e) => _(e.currentTarget.value)), (t[13] = o))
      : (o = t[13]),
      t[14] !== g || t[15] !== a
        ? ((C = (0, $.jsx)(l.SearchInput, {
            autoFocus: !0,
            className: `mb-1`,
            placeholder: a,
            value: g,
            onChange: o,
          })),
          (t[14] = g),
          (t[15] = a),
          (t[16] = C))
        : (C = t[16]),
      (v = l.Section),
      (x = `min-h-0 flex-1 overflow-y-auto`));
    let s;
    (t[17] !== d || t[18] !== f
      ? ((s = (e) => {
          let t = (0, $.jsx)(l.ItemIcon, {
            size: `xs`,
            children: (0, $.jsx)(M, {
              alt: ``,
              className: `size-full object-contain`,
              knownAppId: e.plugin.name,
              logoDarkUrl: e.logoDarkPath,
              logoUrl: e.logoPath,
              fallback: (0, $.jsx)(b, { className: `size-full text-secondary` }),
            }),
          });
          return f == null
            ? (0, $.jsx)(
                l.Item,
                {
                  leftIcon: t,
                  onSelect: () => d(e, !0),
                  children: (0, $.jsx)(`span`, { children: i(e) }),
                },
                e.plugin.id,
              )
            : (0, $.jsx)(
                l.CheckboxItem,
                {
                  checked: f.includes(e.plugin.id),
                  leftIcon: t,
                  onCheckedChange: (t) => d(e, t),
                  children: (0, $.jsx)(`span`, { children: i(e) }),
                },
                e.plugin.id,
              );
        }),
        (t[17] = d),
        (t[18] = f),
        (t[19] = s))
      : (s = t[19]),
      (S = e.map(s)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = m),
      (t[3] = d),
      (t[4] = g),
      (t[5] = f),
      (t[6] = v),
      (t[7] = y),
      (t[8] = x),
      (t[9] = S),
      (t[10] = C));
  } else ((v = t[6]), (y = t[7]), (x = t[8]), (S = t[9]), (C = t[10]));
  let w;
  t[20] !== y || t[21] !== s || t[22] !== g
    ? ((w = s
        ? (0, $.jsx)(l.Message, {
            compact: !0,
            role: `status`,
            tone: `error`,
            children: (0, $.jsx)(o, {
              id: `composer.workMode.plugins.loadError`,
              defaultMessage: `Couldn't load plugins`,
              description: `Error shown when plugins fail to load in the Chat home composer`,
            }),
          })
        : y.length === 0
          ? (0, $.jsx)(l.Message, {
              compact: !0,
              role: `status`,
              children:
                g.trim().length > 0
                  ? (0, $.jsx)(o, {
                      id: `composer.workMode.plugins.search.empty`,
                      defaultMessage: `No plugins found`,
                      description: `Empty state when plugin search has no matches in the Chat home composer`,
                    })
                  : (0, $.jsx)(o, {
                      id: `composer.workMode.plugins.installed.empty`,
                      defaultMessage: `No connected plugins`,
                      description: `Empty state when there are no connected and available plugins in the Chat home composer`,
                    }),
            })
          : null),
      (t[20] = y),
      (t[21] = s),
      (t[22] = g),
      (t[23] = w))
    : (w = t[23]);
  let T;
  t[24] !== v || t[25] !== x || t[26] !== S || t[27] !== w
    ? ((T = (0, $.jsxs)(v, { className: x, children: [S, w] })),
      (t[24] = v),
      (t[25] = x),
      (t[26] = S),
      (t[27] = w),
      (t[28] = T))
    : (T = t[28]);
  let E;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, $.jsx)(l.Separator, {})), (t[29] = E))
    : (E = t[29]);
  let D;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, $.jsx)(o, {
        id: `composer.workMode.plugins.connect`,
        defaultMessage: `Connect plugins`,
        description: `Label and action for connecting plugins from the Chat home composer plugin picker`,
      })),
      (t[30] = D))
    : (D = t[30]);
  let O;
  t[31] !== a || t[32] !== c || t[33] !== u || t[34] !== p
    ? ((O = (0, $.jsx)(l.Section, {
        className: `flex flex-col`,
        children: (0, $.jsx)(ye, {
          featuredPlugins: a,
          label: D,
          onConnectPlugin: c,
          onOpenPluginDirectory: u,
          workRecommendationsHostId: p,
        }),
      })),
      (t[31] = a),
      (t[32] = c),
      (t[33] = u),
      (t[34] = p),
      (t[35] = O))
    : (O = t[35]);
  let k;
  return (
    t[36] !== C || t[37] !== T || t[38] !== O
      ? ((k = (0, $.jsxs)($.Fragment, { children: [C, T, E, O] })),
        (t[36] = C),
        (t[37] = T),
        (t[38] = O),
        (t[39] = k))
      : (k = t[39]),
    k
  );
}
var Ce,
  we,
  $,
  Te = e(() => {
    ((Ce = P()), (we = t(n(), 1)), x(), U(), E(), a(), xe(), w(), X(), ($ = N()));
  });
export { de as a, fe as i, Te as n, ce as o, ge as r, Se as t };
//# sourceMappingURL=plugin-picker-menu-content-8fa056f43456.js.map
