import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $j as t,
  AO as n,
  Cot as r,
  Hj as i,
  IDt as a,
  Pxt as o,
  TO as s,
  VDt as c,
  aD as l,
  aSt as u,
  i3 as d,
  iD as f,
  jDt as p,
  nSt as m,
  rst as h,
  sMt as g,
  vht as _,
  vzt as v,
  wot as y,
  xMt as b,
  yzt as x,
  zxt as S,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bcr as C,
  Clr as w,
  FAn as T,
  Hcr as E,
  Icr as D,
  Idn as O,
  Ilr as k,
  Jlr as ee,
  Ldn as A,
  Q0 as te,
  Rcr as ne,
  Slr as j,
  Tdn as M,
  Tlr as re,
  Udr as N,
  Vcr as P,
  X0 as F,
  Xcr as ie,
  Xlr as ae,
  Ylr as oe,
  _2 as I,
  alr as se,
  blr as L,
  f2 as R,
  fOr as ce,
  fur as le,
  g2 as ue,
  glr as de,
  hOr as fe,
  hzt as z,
  jdn as pe,
  l2 as me,
  mur as he,
  mzt as B,
  qlr as V,
  s2 as H,
  wlr as U,
  xlr as ge,
} from "./app-initial-5851df3f6cb1.js";
import { Sr as W } from "./app-primary-fe8a450b3b04.js";
import { t as G } from "./use-search-plugins-cbd1e6e17321.js";
import { n as K, t as q } from "./connect-plugins-submenu-item-adcf8e633552.js";
function J(e, t) {
  let n = e.get(ce);
  if (n == null) return;
  let r = Y(t);
  e.set(X, n, (e) => ({ ...e, [r]: Math.min((e[r] ?? 0) + 1, 2 ** 53 - 1) }));
}
function Y(e) {
  return N(e.canonicalAppId?.trim() || e.plugin.remotePluginId || e.plugin.name);
}
var X, _e;
function Z() {
  return (Z = e(() => {
    (o(),
      fe(),
      T(),
      D(),
      y(),
      (X = u(r, (e) => ({}))),
      (_e = m(r, (e, { get: t }) => (t(ce), { data: void 0, error: null, isLoading: !1 }))));
  }))();
}
function ve(e) {
  let t = (0, Se.c)(54),
    { cwd: n, hostId: r, pluginHostId: i, marketplaceAnalytics: a, workComposer: o } = e,
    s = i === void 0 ? r : i,
    c = o !== void 0 && o,
    l;
  t[0] === r ? (l = t[1]) : ((l = { hostId: r }), (t[0] = r), (t[1] = l));
  let u = ee(l),
    d;
  t[2] === s ? (d = t[3]) : ((d = ne(s)), (t[2] = s), (t[3] = d));
  let f = d,
    p = c && !1,
    m;
  t[4] !== n || t[5] !== f
    ? ((m = f ? void 0 : [n].filter(_)), (t[4] = n), (t[5] = f), (t[6] = m))
    : (m = t[6]);
  let h;
  t[7] !== s || t[8] !== u || t[9] !== m
    ? ((h = { enabled: u, hostId: s, roots: m }), (t[7] = s), (t[8] = u), (t[9] = m), (t[10] = h))
    : (h = t[10]);
  let { data: g, error: v, isLoading: y, refetch: b } = C(h),
    x = he(r),
    T = S(E, r),
    D;
  t[11] !== x?.authMethod || t[12] !== u || t[13] !== T || t[14] !== p
    ? ((D = u && !p && T === !0 && de(x?.authMethod ?? null)),
      (t[11] = x?.authMethod),
      (t[12] = u),
      (t[13] = T),
      (t[14] = p),
      (t[15] = D))
    : (D = t[15]);
  let O = D,
    k;
  t[16] === O ? (k = t[17]) : ((k = { enabled: O }), (t[16] = O), (t[17] = k));
  let { data: A } = S(te, r, k),
    j;
  t[18] !== s || t[19] !== u ? ((j = u && !ne(s)), (t[18] = s), (t[19] = u), (t[20] = j)) : (j = t[20]);
  let M = j,
    N;
  t[21] !== r || t[22] !== M
    ? ((N = { enabled: M, hostId: r }), (t[21] = r), (t[22] = M), (t[23] = N))
    : (N = t[23]);
  let P = ae(N),
    F;
  t[24] !== P || t[25] !== r
    ? ((F = { computerUseAvailability: P, hostId: r }), (t[24] = P), (t[25] = r), (t[26] = F))
    : (F = t[26]);
  let oe = ge(F),
    I;
  t[27] !== r || t[28] !== M
    ? ((I = { enabled: M, hostId: r }), (t[27] = r), (t[28] = M), (t[29] = I))
    : (I = t[29]);
  let se = re(I),
    L;
  t[30] !== r || t[31] !== M
    ? ((L = { enabled: M, hostId: r }), (t[30] = r), (t[31] = M), (t[32] = L))
    : (L = t[32]);
  let R = w(L),
    { data: ce, error: le, isLoading: fe } = S(u && p ? _e : null, s) ?? {},
    { installPlugin: z, status: me } = pe(),
    B;
  t[33] !== r || t[34] !== z || t[35] !== a || t[36] !== b
    ? ((B = (e, t) =>
        z(
          e.installedPlugin ?? {
            displayName: e.displayName,
            remoteMarketplaceName: `chatgpt-workspace`,
            remotePluginId: e.remotePluginId ?? e.id,
          },
          {
            ...t,
            hostId: r,
            ...(a == null ? {} : { marketplaceAnalytics: a }),
            onSuccess: async () => {
              await b();
            },
          },
        )),
      (t[33] = r),
      (t[34] = z),
      (t[35] = a),
      (t[36] = b),
      (t[37] = B))
    : (B = t[37]);
  let V = B,
    H = ue(
      ie({
        plugins: (p ? ce : g) ?? [],
        isComputerUseAvailable: P.available,
        isExternalBrowserUseAvailable: se.available,
        isInAppBrowserUseAvailable: R.available,
        isMessagesAvailable: oe.available,
      }),
    ),
    U;
  t[38] === g ? (U = t[39]) : ((U = new Set(g?.flatMap(xe))), (t[38] = g), (t[39] = U));
  let W = U,
    G;
  t[40] !== O || t[41] !== A?.sections || t[42] !== W || t[43] !== g
    ? ((G =
        !O || g == null
          ? []
          : (A?.sections
              .find(be)
              ?.plugins.filter((e) => !W.has(e.id) && e.status !== `DISABLED_BY_ADMIN`)
              .slice(0, 8)
              .map(ye) ?? [])),
      (t[40] = O),
      (t[41] = A?.sections),
      (t[42] = W),
      (t[43] = g),
      (t[44] = G))
    : (G = t[44]);
  let K = G,
    q = me?.hostId === r ? me : null,
    J = p ? 10 : void 0,
    Y = (v != null || le != null) && H.length === 0,
    X = y || fe || P.isLoading || oe.isLoading || se.isLoading || R.isLoading,
    Z;
  return (
    t[45] !== H ||
    t[46] !== K ||
    t[47] !== V ||
    t[48] !== q ||
    t[49] !== u ||
    t[50] !== J ||
    t[51] !== Y ||
    t[52] !== X
      ? ((Z = {
          connectedPlugins: H,
          defaultConnectedPluginLimit: J,
          featuredPlugins: K,
          hasLoadError: Y,
          isLoading: X,
          openPluginInstall: V,
          pluginsFeatureEnabled: u,
          pluginInstallationStatus: q,
        }),
        (t[45] = H),
        (t[46] = K),
        (t[47] = V),
        (t[48] = q),
        (t[49] = u),
        (t[50] = J),
        (t[51] = Y),
        (t[52] = X),
        (t[53] = Z))
      : (Z = t[53]),
    Z
  );
}
function ye(e) {
  return H(e, null);
}
function be(e) {
  return e.id === `featured`;
}
function xe(e) {
  let { plugin: t } = e;
  return [t.id, t.remotePluginId, t.shareContext?.remotePluginId];
}
var Se;
function Ce() {
  return (Ce = e(() => {
    ((Se = v()), o(), h(), le(), oe(), U(), j(), V(), L(), Z(), M(), R(), me(), D(), F(), P(), se());
  }))();
}
function we(e) {
  let t = (0, Ee.c)(17),
    { onSelectionChange: n, plugin: r, selected: a } = e,
    o;
  t[0] === r ? (o = t[1]) : ((o = i(r)), (t[0] = r), (t[1] = o));
  let c = o,
    l = c?.iconSmall ?? r.logoDarkPath,
    u = c?.iconSmall ?? r.logoPath,
    d;
  t[2] !== r.plugin.name || t[3] !== l || t[4] !== u
    ? ((d = (0, Q.jsx)(Te, { name: r.plugin.name, logoDarkUrl: l, logoUrl: u })),
      (t[2] = r.plugin.name),
      (t[3] = l),
      (t[4] = u),
      (t[5] = d))
    : (d = t[5]);
  let f = d,
    p;
  t[6] !== c?.displayName || t[7] !== r
    ? ((p = c?.displayName ?? O(r)), (t[6] = c?.displayName), (t[7] = r), (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] === p ? (m = t[10]) : ((m = (0, Q.jsx)(`span`, { children: p })), (t[9] = p), (t[10] = m));
  let h = m,
    g;
  return (
    t[11] !== f || t[12] !== h || t[13] !== n || t[14] !== r || t[15] !== a
      ? ((g =
          a == null
            ? (0, Q.jsx)(s.Item, {
                "data-plugin-impression-id": r.plugin.remotePluginId ?? r.plugin.id,
                leftIcon: f,
                onSelect: () => n(r, !0),
                children: h,
              })
            : (0, Q.jsx)(s.CheckboxItem, {
                "data-plugin-impression-id": r.plugin.remotePluginId ?? r.plugin.id,
                checked: a,
                leftIcon: f,
                onCheckedChange: (e) => n(r, e),
                children: h,
              })),
        (t[11] = f),
        (t[12] = h),
        (t[13] = n),
        (t[14] = r),
        (t[15] = a),
        (t[16] = g))
      : (g = t[16]),
    g
  );
}
function Te(e) {
  let t = (0, Ee.c)(5),
    { logoDarkUrl: n, logoUrl: r, name: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(f, { className: `size-full text-secondary` })), (t[0] = a))
    : (a = t[0]);
  let o;
  return (
    t[1] !== n || t[2] !== r || t[3] !== i
      ? ((o = (0, Q.jsx)(s.ItemIcon, {
          size: `xs`,
          children: (0, Q.jsx)(B, {
            alt: ``,
            className: `size-full object-contain`,
            knownAppId: i,
            logoDarkUrl: n,
            logoUrl: r,
            fallback: a,
          }),
        })),
        (t[1] = n),
        (t[2] = r),
        (t[3] = i),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
var Ee, Q;
function De() {
  return (De = e(() => {
    ((Ee = v()), A(), t(), z(), n(), l(), (Q = b()));
  }))();
}
function Oe() {
  return (Oe = e(() => {
    (v(), g(), k(), x(), t(), n(), d(), Z(), De(), G(), b());
  }))();
}
function ke(e) {
  let t = (0, Pe.c)(22),
    n = c(),
    [r, i] = (0, Fe.useState)(``),
    o = (0, Fe.useRef)([]),
    l = I({ additionalSearchValues: Me, plugins: e.connectedPlugins, query: r }),
    u =
      e.defaultConnectedPluginLimit != null && r.trim().length === 0
        ? l.slice(0, e.defaultConnectedPluginLimit)
        : l,
    d = function (t) {
      if (t == null || e.onPluginImpressions == null) return;
      let n = W(t, u.map(je), new Set(), Ae, [], (e) => {
        o.current = e;
      });
      return () => {
        (n(), (o.current = []));
      };
    },
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(s.Separator, {})), (t[0] = f))
    : (f = t[0]);
  let p;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(a, {
        id: `composer.workMode.plugins.connect`,
        defaultMessage: `Connect plugins`,
        description: `Label and action for connecting plugins from the Chat home composer plugin picker`,
      })),
      (t[1] = p))
    : (p = t[1]);
  let m = (0, $.jsxs)($.Fragment, {
      children: [
        f,
        (0, $.jsx)(s.Section, {
          className: `flex flex-col`,
          children: (0, $.jsx)(q, {
            featuredPlugins: e.featuredPlugins,
            label: p,
            onConnectPlugin: e.onConnectPlugin,
            onOpenPluginDirectory: e.onOpenPluginDirectory,
            onPluginImpressions:
              e.onPluginImpressions == null
                ? void 0
                : (t, n) => e.onPluginImpressions?.([...new Set([...o.current, ...t])], n),
            workRecommendationsHostId: e.workRecommendationsHostId,
          }),
        }),
      ],
    }),
    h;
  t[2] === n
    ? (h = t[3])
    : ((h = n.formatMessage({
        id: `composer.workMode.plugins.search`,
        defaultMessage: `Search plugins…`,
        description: `Placeholder for the plugin search field in the Chat home composer`,
      })),
      (t[2] = n),
      (t[3] = h));
  let g;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (e) => i(e.currentTarget.value)), (t[4] = g))
    : (g = t[4]);
  let _;
  t[5] !== r || t[6] !== h
    ? ((_ = (0, $.jsx)(s.SearchInput, {
        autoFocus: !0,
        className: `mb-1`,
        placeholder: h,
        value: r,
        onChange: g,
      })),
      (t[5] = r),
      (t[6] = h),
      (t[7] = _))
    : (_ = t[7]);
  let v = s,
    y;
  t[8] !== e.onPluginSelectionChange || t[9] !== e.selectedPluginIds
    ? ((y = (t) =>
        (0, $.jsx)(
          we,
          {
            onSelectionChange: e.onPluginSelectionChange,
            plugin: t,
            selected: e.selectedPluginIds?.includes(t.plugin.id),
          },
          t.plugin.id,
        )),
      (t[8] = e.onPluginSelectionChange),
      (t[9] = e.selectedPluginIds),
      (t[10] = y))
    : (y = t[10]);
  let b = u.map(y),
    x = e.hasLoadError,
    S = l.length === 0,
    C;
  t[11] === r ? (C = t[12]) : ((C = r.trim()), (t[11] = r), (t[12] = C));
  let w = C.length > 0,
    T;
  t[13] !== e.hasLoadError || t[14] !== S || t[15] !== w
    ? ((T = (0, $.jsx)(Ne, { hasLoadError: x, isEmpty: S, isSearching: w })),
      (t[13] = e.hasLoadError),
      (t[14] = S),
      (t[15] = w),
      (t[16] = T))
    : (T = t[16]);
  let E;
  return (
    t[17] !== d || t[18] !== T || t[19] !== v.Section || t[20] !== b
      ? ((E = (0, $.jsxs)(v.Section, {
          ref: d,
          className: `min-h-0 flex-1 overflow-y-auto`,
          children: [b, T],
        })),
        (t[17] = d),
        (t[18] = T),
        (t[19] = v.Section),
        (t[20] = b),
        (t[21] = E))
      : (E = t[21]),
    (0, $.jsxs)($.Fragment, { children: [_, null, (0, $.jsxs)($.Fragment, { children: [E, m] })] })
  );
}
function Ae() {}
function je(e) {
  return e.plugin.remotePluginId ?? e.plugin.id;
}
function Me(e) {
  let t = i(e);
  return t == null ? [] : [t.displayName];
}
function Ne(e) {
  let t = (0, Pe.c)(3),
    { hasLoadError: n, isEmpty: r, isSearching: i } = e;
  if (n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(s.Message, {
            compact: !0,
            role: `status`,
            tone: `error`,
            children: (0, $.jsx)(a, {
              id: `composer.workMode.plugins.loadError`,
              defaultMessage: `Couldn't load plugins`,
              description: `Error shown when plugins fail to load in the Chat home composer`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (!r) return null;
  let o;
  return (
    t[1] === i
      ? (o = t[2])
      : ((o = (0, $.jsx)(s.Message, {
          compact: !0,
          role: `status`,
          children: i
            ? (0, $.jsx)(a, {
                id: `composer.workMode.plugins.search.empty`,
                defaultMessage: `No plugins found`,
                description: `Empty state when plugin search has no matches in the Chat home composer`,
              })
            : (0, $.jsx)(a, {
                id: `composer.workMode.plugins.installed.empty`,
                defaultMessage: `No connected plugins`,
                description: `Empty state when there are no connected and available plugins in the Chat home composer`,
              }),
        })),
        (t[1] = i),
        (t[2] = o)),
    o
  );
}
var Pe, Fe, $;
function Ie() {
  return (Ie = e(() => {
    ((Pe = v()), o(), (Fe = x()), p(), fe(), t(), n(), Oe(), K(), De(), R(), ($ = b()));
  }))();
}
export { Z as a, ve as i, Ie as n, J as o, Ce as r, ke as t };
//# sourceMappingURL=plugin-picker-menu-content-e1d68f55c61b.js.map
