import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $j as t,
  ADt as n,
  Ext as r,
  HG as i,
  Ixt as a,
  Pxt as o,
  Rj as s,
  Rnt as c,
  TJ as l,
  VDt as u,
  VG as d,
  W7 as f,
  Wj as p,
  _xt as m,
  a3 as h,
  jDt as g,
  o3 as _,
  vzt as v,
  xMt as y,
  yzt as b,
} from "./app-shared-bbfeca5e5737.js";
import {
  B1n as x,
  C1n as S,
  Fd as C,
  G0 as w,
  IAt as T,
  PAt as E,
  Pd as D,
  QOn as O,
  V1n as k,
  W0 as A,
  ZOn as j,
  dBt as M,
  fBt as N,
  gCr as P,
  q1n as F,
  sCr as I,
  w1n as ee,
  yCr as L,
} from "./app-initial-5851df3f6cb1.js";
import { Al as R, Ml as z, jl as B, kl as V } from "./app-primary-fe8a450b3b04.js";
import {
  a as H,
  i as te,
  n as U,
  o as ne,
  r as W,
  t as G,
} from "./plugin-picker-menu-content-e1d68f55c61b.js";
function re(e) {
  "use forget";
  let t = (0, K.c)(38),
    {
      connectedPlugins: n,
      defaultConnectedPluginLimit: r,
      featuredPlugins: a,
      hasLoadError: o,
      isLoading: s,
      menuOpen: c,
      onConnectPlugin: l,
      onOpenPluginDirectory: f,
      onOpenChange: p,
      onPluginImpressions: m,
      onPluginSelectionChange: h,
      onRequestComposerFocus: g,
      pluginInstallationStatus: v,
      selectedPluginIds: y,
      workRecommendationsHostId: b,
    } = e,
    x = u(),
    S = (0, q.useRef)(!1),
    C;
  t[0] === x
    ? (C = t[1])
    : ((C = x.formatMessage({
        id: `composer.workMode.plugins.label`,
        defaultMessage: `Plugins`,
        description: `Label for the Plugins picker in the Chat home composer utility bar`,
      })),
      (t[0] = x),
      (t[1] = C));
  let w = C,
    T;
  t[2] === x ? (T = t[3]) : ((T = x.formatMessage(Y.pluginsTooltip)), (t[2] = x), (t[3] = T));
  let E = T,
    D;
  t[4] !== x || t[5] !== v
    ? ((D =
        v == null
          ? null
          : v.phase === `loading`
            ? x.formatMessage(Y.loadingPlugin, { pluginName: v.pluginDisplayName })
            : x.formatMessage(Y.installingPlugin, { pluginName: v.pluginDisplayName })),
      (t[4] = x),
      (t[5] = v),
      (t[6] = D))
    : (D = t[6]);
  let O = D,
    k = O ?? w,
    A;
  t[7] !== O || t[8] !== k
    ? ((A =
        O == null
          ? k
          : (0, J.jsx)(`span`, {
              ref: _,
              className: `loading-shimmer-pure-text [--text-primary:var(--color-text)]`,
              children: k,
            })),
      (t[7] = O),
      (t[8] = k),
      (t[9] = A))
    : (A = t[9]);
  let j = A;
  if (s) {
    let e;
    return (
      t[10] !== c || t[11] !== p
        ? ((e = (0, J.jsx)(V, { menuOpen: c, onOpenChange: p })), (t[10] = c), (t[11] = p), (t[12] = e))
        : (e = t[12]),
      e
    );
  }
  let M;
  t[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((M = { 16: d, 20: i }), (t[13] = M)) : (M = t[13]);
  let N;
  t[14] === g
    ? (N = t[15])
    : ((N = (e) => {
        S.current && ((S.current = !1), e.preventDefault(), g());
      }),
      (t[14] = g),
      (t[15] = N));
  let P;
  t[16] !== p || t[17] !== h
    ? ((P = (e, t) => {
        ((S.current = !0), h(e, t), p(!1));
      }),
      (t[16] = p),
      (t[17] = h),
      (t[18] = P))
    : (P = t[18]);
  let F;
  t[19] !== n ||
  t[20] !== r ||
  t[21] !== a ||
  t[22] !== o ||
  t[23] !== l ||
  t[24] !== f ||
  t[25] !== m ||
  t[26] !== y ||
  t[27] !== P ||
  t[28] !== b
    ? ((F = (0, J.jsx)(G, {
        connectedPlugins: n,
        defaultConnectedPluginLimit: r,
        featuredPlugins: a,
        hasLoadError: o,
        onConnectPlugin: l,
        onOpenPluginDirectory: f,
        onPluginImpressions: m,
        onPluginSelectionChange: P,
        selectedPluginIds: y,
        workRecommendationsHostId: b,
      })),
      (t[19] = n),
      (t[20] = r),
      (t[21] = a),
      (t[22] = o),
      (t[23] = l),
      (t[24] = f),
      (t[25] = m),
      (t[26] = y),
      (t[27] = P),
      (t[28] = b),
      (t[29] = F))
    : (F = t[29]);
  let I;
  return (
    t[30] !== c || t[31] !== p || t[32] !== E || t[33] !== N || t[34] !== F || t[35] !== j || t[36] !== k
      ? ((I = (0, J.jsx)(B, {
          "aria-label": k,
          "data-composer-navigation-target": `plugins`,
          contentClassName: `overflow-hidden!`,
          contentMaxHeight: `composerPlugins`,
          contentSurface: `opaque`,
          contentWidth: `menuWide`,
          foreground: `primary`,
          iconSource: M,
          menuOpen: c,
          tooltipContent: E,
          value: j,
          onOpenChange: p,
          onCloseAutoFocus: N,
          children: F,
        })),
        (t[30] = c),
        (t[31] = p),
        (t[32] = E),
        (t[33] = N),
        (t[34] = F),
        (t[35] = j),
        (t[36] = k),
        (t[37] = I))
      : (I = t[37]),
    I
  );
}
var K, q, J, Y;
function X() {
  return (X = e(() => {
    ((K = v()),
      (q = b()),
      g(),
      h(),
      l(),
      U(),
      R(),
      z(),
      (J = y()),
      (Y = n({
        pluginsTooltip: {
          id: `composer.workMode.plugins.tooltip`,
          defaultMessage: `Work with ChatGPT across your favorite tools`,
          description: `Tooltip for the Plugins picker in the Chat home composer utility bar`,
        },
        installingPlugin: {
          id: `composer.workMode.plugins.installing`,
          defaultMessage: `Installing {pluginName}`,
          description: `Label for the Plugins picker while installing a named plugin`,
        },
        loadingPlugin: {
          id: `composer.workMode.plugins.loading`,
          defaultMessage: `Loading {pluginName}`,
          description: `Label for the Plugins picker while loading a named plugin installation`,
        },
      })));
  }))();
}
function ie(e) {
  "use forget";
  let t = (0, Z.c)(44),
    {
      composerController: n,
      cwd: i,
      hostId: o,
      menuOpen: c,
      onOpenChange: l,
      pluginHostId: d,
      onRequestComposerFocus: m,
    } = e,
    h = a(I),
    g = u(),
    _ = r(),
    v,
    y;
  t[0] === h
    ? ((v = t[1]), (y = t[2]))
    : ((v = () => P(h)),
      (y = () => (h.value.kind === `chatgpt` ? h.value.conversationId : null)),
      (t[0] = h),
      (t[1] = v),
      (t[2] = y));
  let b;
  t[3] === h ? (b = t[4]) : ((b = (e) => N({ scope: h, path: e })), (t[3] = h), (t[4] = b));
  let S;
  t[5] !== o || t[6] !== v || t[7] !== y || t[8] !== b
    ? ((S = {
        getLocalConversationId: v,
        getChatGptConversationId: y,
        hostId: o,
        marketplaceAnalytics: O.workComposer,
        onMentionInserted: b,
      }),
      (t[5] = o),
      (t[6] = v),
      (t[7] = y),
      (t[8] = b),
      (t[9] = S))
    : (S = t[9]);
  let E = C(S),
    D = T(n, ae, `document`),
    A;
  t[10] !== i || t[11] !== o || t[12] !== d
    ? ((A = { cwd: i, hostId: o, pluginHostId: d, marketplaceAnalytics: O.workComposer, workComposer: !0 }),
      (t[10] = i),
      (t[11] = o),
      (t[12] = d),
      (t[13] = A))
    : (A = t[13]);
  let {
    connectedPlugins: j,
    defaultConnectedPluginLimit: M,
    featuredPlugins: F,
    hasLoadError: L,
    isLoading: R,
    openPluginInstall: z,
    pluginsFeatureEnabled: B,
    pluginInstallationStatus: V,
  } = te(A);
  if (!B) return null;
  let H;
  t[14] === h
    ? (H = t[15])
    : ((H = (e, t) => {
        for (let n of t)
          ee(h, O.workComposer.chatgpt, {
            action: k.CHATGPT_PLUGIN_ACTION_TYPE_IMPRESSION,
            result: x.CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS,
            pluginId: n,
            pluginIds: e,
          });
      }),
      (t[14] = h),
      (t[15] = H));
  let U;
  t[16] !== o || t[17] !== _ || t[18] !== B || t[19] !== h
    ? ((U = () => {
        w(h, _, B, f.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER, o);
      }),
      (t[16] = o),
      (t[17] = _),
      (t[18] = B),
      (t[19] = h),
      (t[20] = U))
    : (U = t[20]);
  let W;
  t[21] !== n || t[22] !== g || t[23] !== E || t[24] !== h
    ? ((W = (e, t) => {
        if (t) {
          (ne(h, e), n.insertMentionAtSelection(s(e, p(g))), E(e));
          return;
        }
        n.removePluginMentions(e.plugin.id);
      }),
      (t[21] = n),
      (t[22] = g),
      (t[23] = E),
      (t[24] = h),
      (t[25] = W))
    : (W = t[25]);
  let G;
  t[26] === D ? (G = t[27]) : ((G = D === `` ? [] : D.split(`\0`)), (t[26] = D), (t[27] = G));
  let K = d ?? o,
    q;
  return (
    t[28] !== j ||
    t[29] !== M ||
    t[30] !== F ||
    t[31] !== L ||
    t[32] !== R ||
    t[33] !== c ||
    t[34] !== l ||
    t[35] !== m ||
    t[36] !== z ||
    t[37] !== V ||
    t[38] !== K ||
    t[39] !== H ||
    t[40] !== U ||
    t[41] !== W ||
    t[42] !== G
      ? ((q = (0, Q.jsx)(re, {
          connectedPlugins: j,
          defaultConnectedPluginLimit: M,
          featuredPlugins: F,
          hasLoadError: L,
          isLoading: R,
          menuOpen: c,
          onOpenChange: l,
          onConnectPlugin: z,
          onPluginImpressions: H,
          onOpenPluginDirectory: U,
          onPluginSelectionChange: W,
          onRequestComposerFocus: m,
          pluginInstallationStatus: V,
          selectedPluginIds: G,
          workRecommendationsHostId: K,
        })),
        (t[28] = j),
        (t[29] = M),
        (t[30] = F),
        (t[31] = L),
        (t[32] = R),
        (t[33] = c),
        (t[34] = l),
        (t[35] = m),
        (t[36] = z),
        (t[37] = V),
        (t[38] = K),
        (t[39] = H),
        (t[40] = U),
        (t[41] = W),
        (t[42] = G),
        (t[43] = q))
      : (q = t[43]),
    q
  );
}
function ae(e) {
  return e.getMentionedPluginIdsKey();
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = v()), F(), c(), o(), g(), m(), M(), S(), H(), j(), W(), L(), A(), X(), t(), E(), D(), (Q = y()));
  }))();
}
$();
export { ie as ComposerWorkHomePluginsControl };
//# sourceMappingURL=composer-work-home-plugins-control-228c2ec89e4d.js.map
