import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import { t as n } from "./react-d6ffadc57208.js";
import { t as r } from "./compiler-runtime-292acb85cdd3.js";
import {
  AF as i,
  C6t as a,
  DN as o,
  DNt as s,
  HNt as c,
  JNt as l,
  Jot as u,
  K6t as d,
  Kqt as f,
  LPt as p,
  O6t as m,
  ON as h,
  QMt as g,
  R6t as _,
  RPt as v,
  Son as y,
  _Yt as b,
  _on as x,
  bJt as S,
  dFt as C,
  e6t as w,
  gNt as T,
  gon as E,
  hAt as D,
  kF as O,
  lFt as k,
  mFt as A,
  n6t as j,
  p8t as M,
  pFt as N,
  qot as P,
  sX as F,
  t6t as I,
  uX as L,
  uht as R,
  vNt as ee,
  vTt as z,
  vl as B,
  xJt as V,
  xNt as te,
  yl as H,
} from "./app-initial-bcc2ff475eb6.js";
import { t as U } from "./jsx-runtime-a96621a2647a.js";
import {
  $h as W,
  TD as ne,
  bD as G,
  ng as re,
  og as ie,
  rg as K,
} from "./app-primary-b36a719dba75.js";
import { M as ae, d as oe, t as se } from "./zod-d9fcb1c39dba.js";
import {
  ca as ce,
  gs as le,
  hs as ue,
  od as de,
  sa as fe,
  sd as pe,
} from "./shared-icons-693ab6da8dfa.js";
function me(e, t) {
  let n = e.get(k);
  if (n == null) return;
  let r = he(t);
  e.set(q, n, (e) => ({ ...e, [r]: Math.min((e[r] ?? 0) + 1, 2 ** 53 - 1) }));
}
function he(e) {
  return N(e.canonicalAppId?.trim() || e.plugin.remotePluginId || e.plugin.name);
}
var q,
  J,
  Y = e(() => {
    (j(),
      a(),
      A(),
      C(),
      z(),
      T(),
      c(),
      I(),
      R(),
      V(),
      (q = d(w, (e) => ({}))),
      (J = _(w, (e, { get: t }) => {
        let n = t(k),
          r =
            n == null
              ? []
              : Object.entries(t(q, n))
                  .sort((e, t) => t[1] - e[1])
                  .map(([e]) => e);
        return {
          enabled: !1,
          queryKey: [...s, `work-composer-installed`, n, e, `connectors`, void 0, r],
          queryFn: M,
          retry: !1,
          staleTime: S.ONE_MINUTE,
        };
      })));
  });
function ge(e) {
  let t = (0, X.c)(41),
    { cwd: n, hostId: r, pluginHostId: i, marketplaceAnalytics: a, workComposer: o } = e,
    s = i === void 0 ? r : i,
    c = o !== void 0 && o,
    u;
  t[0] === r ? (u = t[1]) : ((u = { hostId: r }), (t[0] = r), (t[1] = u));
  let d = v(u),
    f;
  t[2] === s ? (f = t[3]) : ((f = ee(s)), (t[2] = s), (t[3] = f));
  let p = f,
    h = c && !1,
    g = d && !p,
    _;
  t[4] === g ? (_ = t[5]) : ((_ = { enabled: g }), (t[4] = g), (t[5] = _));
  let {
      availablePlugins: y,
      errorMessage: b,
      featuredPluginIds: x,
      reload: S,
      isLoading: C,
    } = l(s, n, _),
    w = d && p,
    T;
  t[6] !== s || t[7] !== w
    ? ((T = { enabled: w, hostId: s, roots: void 0 }), (t[6] = s), (t[7] = w), (t[8] = T))
    : (T = t[8]);
  let { data: E, error: D, isLoading: O } = te(T),
    k = d && h,
    A;
  t[9] === k ? (A = t[10]) : ((A = { enabled: k }), (t[9] = k), (t[10] = A));
  let { data: j, error: M, isLoading: N } = m(J, s, A),
    { installPlugin: P, status: F } = ne(),
    I;
  t[11] !== r || t[12] !== P || t[13] !== a || t[14] !== S
    ? ((I = (e, t) =>
        P(e, { ...t, hostId: r, ...(a == null ? {} : { marketplaceAnalytics: a }), onSuccess: S })),
      (t[11] = r),
      (t[12] = P),
      (t[13] = a),
      (t[14] = S),
      (t[15] = I))
    : (I = t[15]);
  let L = I,
    R,
    z,
    B,
    V;
  if (
    t[16] !== O ||
    t[17] !== N ||
    t[18] !== y ||
    t[19] !== b ||
    t[20] !== x ||
    t[21] !== E ||
    t[22] !== D ||
    t[23] !== C ||
    t[24] !== p ||
    t[25] !== h ||
    t[26] !== j ||
    t[27] !== M
  ) {
    let e = y;
    ((B = b != null),
      (R = C),
      p &&
        (h
          ? ((e = j ?? []), (B = D != null || M != null), (R = O || N))
          : ((e = E ?? []), (B = D != null), (R = O))),
      (z = re(e)),
      (V = ie({ featuredPluginIds: x, plugins: e }).find(ve)?.plugins.filter(_e).slice(0, 8) ?? []),
      (t[16] = O),
      (t[17] = N),
      (t[18] = y),
      (t[19] = b),
      (t[20] = x),
      (t[21] = E),
      (t[22] = D),
      (t[23] = C),
      (t[24] = p),
      (t[25] = h),
      (t[26] = j),
      (t[27] = M),
      (t[28] = R),
      (t[29] = z),
      (t[30] = B),
      (t[31] = V));
  } else ((R = t[28]), (z = t[29]), (B = t[30]), (V = t[31]));
  let H = V,
    U = F?.hostId === r ? F : null,
    W = h ? 10 : void 0,
    G = B && z.length === 0,
    K;
  return (
    t[32] !== R ||
    t[33] !== z ||
    t[34] !== H ||
    t[35] !== L ||
    t[36] !== U ||
    t[37] !== d ||
    t[38] !== W ||
    t[39] !== G
      ? ((K = {
          connectedPlugins: z,
          defaultConnectedPluginLimit: W,
          featuredPlugins: H,
          hasLoadError: G,
          isLoading: R,
          openPluginInstall: L,
          pluginsFeatureEnabled: d,
          pluginInstallationStatus: U,
        }),
        (t[32] = R),
        (t[33] = z),
        (t[34] = H),
        (t[35] = L),
        (t[36] = U),
        (t[37] = d),
        (t[38] = W),
        (t[39] = G),
        (t[40] = K))
      : (K = t[40]),
    K
  );
}
function _e(e) {
  return !e.plugin.installed && !H(e.plugin);
}
function ve(e) {
  let { section: t } = e;
  return t.id === `plugins-featured`;
}
var X,
  ye = e(() => {
    ((X = r()), a(), p(), B(), Y(), G(), W(), T(), c());
  }),
  be,
  xe = e(() => {
    (j(),
      D(),
      g(),
      a(),
      se(),
      A(),
      C(),
      T(),
      c(),
      I(),
      b(),
      V(),
      f(),
      oe(ae().trim().catch(``)).catch([]),
      (be = _(w, (e, { get: t }) => {
        let n = t(k);
        return {
          enabled: !1,
          queryKey: [...s, `work-composer-featured`, n, e, !1, void 0],
          queryFn: M,
          retry: !1,
          staleTime: S.ONE_MINUTE,
        };
      })));
  });
function Se(e) {
  "use forget";
  let t = (0, Ce.c)(13),
    {
      featuredPlugins: n,
      label: r,
      onConnectPlugin: i,
      onOpenPluginDirectory: a,
      workRecommendationsHostId: s,
    } = e,
    { data: c, isLoading: l } = m(be, s),
    u = c ?? n,
    d;
  t[0] === l
    ? (d = t[1])
    : ((d = l
        ? (0, Z.jsx)(F.Message, {
            compact: !0,
            role: `status`,
            children: (0, Z.jsx)(`span`, {
              className: `loading-shimmer-pure-text select-none`,
              children: (0, Z.jsx)(x, {
                id: `composer.workMode.plugins.loadingRecommendations`,
                defaultMessage: `Loading plugins…`,
                description: `Status in the Connect plugins submenu while recommended plugins load. Installed plugins and the Browse all plugins action remain available.`,
              }),
            }),
          })
        : null),
      (t[0] = l),
      (t[1] = d));
  let f;
  t[2] !== i || t[3] !== u
    ? ((f =
        u.length > 0
          ? (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(F.Section, {
                  className: `flex flex-col`,
                  children: u.map((e) =>
                    (0, Z.jsxs)(
                      F.Item,
                      {
                        rightIconAsset: le,
                        onSelect: () => i(e),
                        children: [
                          (0, Z.jsx)(F.ItemIcon, {
                            size: `xs`,
                            children: (0, Z.jsx)(o, {
                              alt: ``,
                              className: `size-full object-contain`,
                              knownAppId: e.plugin.name,
                              logoDarkUrl: e.logoDarkPath,
                              logoUrl: e.logoPath,
                              fallback: (0, Z.jsx)(O, { className: `size-full text-secondary` }),
                            }),
                          }),
                          (0, Z.jsx)(`span`, { children: P(e) }),
                        ],
                      },
                      e.plugin.id,
                    ),
                  ),
                }),
                (0, Z.jsx)(F.Separator, {}),
              ],
            })
          : null),
      (t[2] = i),
      (t[3] = u),
      (t[4] = f))
    : (f = t[4]);
  let p;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Z.jsx)(x, {
        id: `composer.workMode.plugins.browseAll`,
        defaultMessage: `Browse all plugins`,
        description: `Action that opens the full plugin directory from a plugin picker`,
      })),
      (t[5] = p))
    : (p = t[5]);
  let h;
  t[6] === a
    ? (h = t[7])
    : ((h = (0, Z.jsx)(F.Section, {
        className: `flex flex-col`,
        children: (0, Z.jsx)(F.Item, { rightIconAsset: fe, onSelect: a, children: p }),
      })),
      (t[6] = a),
      (t[7] = h));
  let g;
  return (
    t[8] !== r || t[9] !== d || t[10] !== f || t[11] !== h
      ? ((g = (0, Z.jsxs)(F.FlyoutSubmenuItem, {
          leftIconAsset: pe,
          contentSurface: `opaque`,
          contentWidth: `menuWide`,
          label: r,
          children: [d, f, h],
        })),
        (t[8] = r),
        (t[9] = d),
        (t[10] = f),
        (t[11] = h),
        (t[12] = g))
      : (g = t[12]),
    g
  );
}
var Ce,
  Z,
  we = e(() => {
    ((Ce = r()), ce(), de(), ue(), a(), E(), h(), L(), i(), xe(), u(), (Z = U()));
  });
function Te(e) {
  "use forget";
  let t = (0, Ee.c)(40),
    {
      connectedPlugins: n,
      defaultConnectedPluginLimit: r,
      featuredPlugins: i,
      hasLoadError: a,
      onConnectPlugin: s,
      onOpenPluginDirectory: c,
      onPluginSelectionChange: l,
      selectedPluginIds: u,
      workRecommendationsHostId: d,
    } = e,
    f = y(),
    [p, m] = (0, Q.useState)(``),
    h,
    g,
    _,
    v,
    b;
  if (t[0] !== n || t[1] !== r || t[2] !== f || t[3] !== l || t[4] !== p || t[5] !== u) {
    g = K({ plugins: n, query: p });
    let e = r != null && p.trim().length === 0 ? g.slice(0, r) : g,
      i;
    t[11] === f
      ? (i = t[12])
      : ((i = f.formatMessage({
          id: `composer.workMode.plugins.search`,
          defaultMessage: `Search plugins…`,
          description: `Placeholder for the plugin search field in the Chat home composer`,
        })),
        (t[11] = f),
        (t[12] = i));
    let a;
    (t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (e) => m(e.currentTarget.value)), (t[13] = a))
      : (a = t[13]),
      t[14] !== p || t[15] !== i
        ? ((b = (0, $.jsx)(F.SearchInput, {
            autoFocus: !0,
            className: `mb-1`,
            placeholder: i,
            value: p,
            onChange: a,
          })),
          (t[14] = p),
          (t[15] = i),
          (t[16] = b))
        : (b = t[16]),
      (h = F.Section),
      (_ = `min-h-0 flex-1 overflow-y-auto`));
    let s;
    (t[17] !== l || t[18] !== u
      ? ((s = (e) => {
          let t = (0, $.jsx)(F.ItemIcon, {
            size: `xs`,
            children: (0, $.jsx)(o, {
              alt: ``,
              className: `size-full object-contain`,
              knownAppId: e.plugin.name,
              logoDarkUrl: e.logoDarkPath,
              logoUrl: e.logoPath,
              fallback: (0, $.jsx)(O, { className: `size-full text-secondary` }),
            }),
          });
          return u == null
            ? (0, $.jsx)(
                F.Item,
                {
                  leftIcon: t,
                  onSelect: () => l(e, !0),
                  children: (0, $.jsx)(`span`, { children: P(e) }),
                },
                e.plugin.id,
              )
            : (0, $.jsx)(
                F.CheckboxItem,
                {
                  checked: u.includes(e.plugin.id),
                  leftIcon: t,
                  onCheckedChange: (t) => l(e, t),
                  children: (0, $.jsx)(`span`, { children: P(e) }),
                },
                e.plugin.id,
              );
        }),
        (t[17] = l),
        (t[18] = u),
        (t[19] = s))
      : (s = t[19]),
      (v = e.map(s)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = f),
      (t[3] = l),
      (t[4] = p),
      (t[5] = u),
      (t[6] = h),
      (t[7] = g),
      (t[8] = _),
      (t[9] = v),
      (t[10] = b));
  } else ((h = t[6]), (g = t[7]), (_ = t[8]), (v = t[9]), (b = t[10]));
  let S;
  t[20] !== g || t[21] !== a || t[22] !== p
    ? ((S = a
        ? (0, $.jsx)(F.Message, {
            compact: !0,
            role: `status`,
            tone: `error`,
            children: (0, $.jsx)(x, {
              id: `composer.workMode.plugins.loadError`,
              defaultMessage: `Couldn't load plugins`,
              description: `Error shown when plugins fail to load in the Chat home composer`,
            }),
          })
        : g.length === 0
          ? (0, $.jsx)(F.Message, {
              compact: !0,
              role: `status`,
              children:
                p.trim().length > 0
                  ? (0, $.jsx)(x, {
                      id: `composer.workMode.plugins.search.empty`,
                      defaultMessage: `No plugins found`,
                      description: `Empty state when plugin search has no matches in the Chat home composer`,
                    })
                  : (0, $.jsx)(x, {
                      id: `composer.workMode.plugins.installed.empty`,
                      defaultMessage: `No connected plugins`,
                      description: `Empty state when there are no connected and available plugins in the Chat home composer`,
                    }),
            })
          : null),
      (t[20] = g),
      (t[21] = a),
      (t[22] = p),
      (t[23] = S))
    : (S = t[23]);
  let C;
  t[24] !== h || t[25] !== _ || t[26] !== v || t[27] !== S
    ? ((C = (0, $.jsxs)(h, { className: _, children: [v, S] })),
      (t[24] = h),
      (t[25] = _),
      (t[26] = v),
      (t[27] = S),
      (t[28] = C))
    : (C = t[28]);
  let w;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, $.jsx)(F.Separator, {})), (t[29] = w))
    : (w = t[29]);
  let T;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(x, {
        id: `composer.workMode.plugins.connect`,
        defaultMessage: `Connect plugins`,
        description: `Label and action for connecting plugins from the Chat home composer plugin picker`,
      })),
      (t[30] = T))
    : (T = t[30]);
  let E;
  t[31] !== i || t[32] !== s || t[33] !== c || t[34] !== d
    ? ((E = (0, $.jsx)(F.Section, {
        className: `flex flex-col`,
        children: (0, $.jsx)(Se, {
          featuredPlugins: i,
          label: T,
          onConnectPlugin: s,
          onOpenPluginDirectory: c,
          workRecommendationsHostId: d,
        }),
      })),
      (t[31] = i),
      (t[32] = s),
      (t[33] = c),
      (t[34] = d),
      (t[35] = E))
    : (E = t[35]);
  let D;
  return (
    t[36] !== b || t[37] !== C || t[38] !== E
      ? ((D = (0, $.jsxs)($.Fragment, { children: [b, C, w, E] })),
        (t[36] = b),
        (t[37] = C),
        (t[38] = E),
        (t[39] = D))
      : (D = t[39]),
    D
  );
}
var Ee,
  Q,
  $,
  De = e(() => {
    ((Ee = r()), (Q = t(n(), 1)), E(), h(), L(), i(), we(), u(), W(), ($ = U()));
  });
export { Y as a, ge as i, De as n, me as o, ye as r, Te as t };
//# sourceMappingURL=plugin-picker-menu-content-1ea89fdd6a0a.js.map
