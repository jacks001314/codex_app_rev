import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  AB as n,
  DM as r,
  FBt as i,
  HM as a,
  LNt as o,
  NM as ee,
  NSt as s,
  PBt as c,
  RK as l,
  Rrt as u,
  TY as d,
  USt as f,
  W9 as p,
  XOt as m,
  YOt as h,
  ZSt as g,
  aL as _,
  iCt as te,
  kB as v,
  n6 as y,
  okt as ne,
  t6 as b,
  zK as x,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CDr as S,
  D3n as C,
  FDr as w,
  Id as T,
  LXn as re,
  Ld as E,
  MDr as ie,
  YNn as D,
  ZZt as O,
  _Dt as k,
  _Lt as A,
  a1t as ae,
  a3n as j,
  bMn as M,
  eJt as N,
  gLt as P,
  i3n as F,
  jXn as I,
  m4 as L,
  n3n as oe,
  o1t as R,
  p4 as z,
  qZt as se,
  rPn as B,
  sJt as V,
  t3n as ce,
  v3n as le,
  y3n as ue,
  yDt as de,
  yMn as fe,
} from "./app-initial-ad16eaadf81f.js";
import { Bl as pe, Hl as me, Ul as he, Vl as H } from "./app-primary-3e00728c2a4c.js";
import {
  a as U,
  i as ge,
  n as _e,
  o as ve,
  r as ye,
  t as be,
} from "./plugin-picker-menu-content-a42a095b1656.js";
function xe(e) {
  "use forget";
  let t = (0, Se.c)(50),
    {
      collapse: r,
      connectedPlugins: i,
      defaultConnectedPluginLimit: a,
      featuredPlugins: o,
      hasLoadError: ee,
      isLoading: s,
      menuOpen: c,
      onConnectPlugin: u,
      onOpenPluginDirectory: d,
      onOpenChange: f,
      onPluginImpressions: p,
      onPluginSelectionChange: m,
      onRequestComposerFocus: h,
      pluginInstallationStatus: g,
      selectedPluginIds: _,
      showConnectedPluginLogos: te,
      workRecommendationsHostId: v,
    } = e,
    b = te !== void 0 && te,
    S = ne(),
    C = n(),
    w = (0, Ce.useRef)(!1),
    T;
  t[0] === S
    ? (T = t[1])
    : ((T = S.formatMessage({
        id: `composer.workMode.plugins.label`,
        defaultMessage: `Plugins`,
        description: `Label for the Plugins picker in the Chat home composer utility bar`,
      })),
      (t[0] = S),
      (t[1] = T));
  let re = T,
    E;
  t[2] === S ? (E = t[3]) : ((E = S.formatMessage(G.pluginsTooltip)), (t[2] = S), (t[3] = E));
  let ie = E,
    D;
  t[4] !== S || t[5] !== g
    ? ((D =
        g == null
          ? null
          : g.phase === `loading`
            ? S.formatMessage(G.loadingPlugin, { pluginName: g.pluginDisplayName })
            : S.formatMessage(G.installingPlugin, { pluginName: g.pluginDisplayName })),
      (t[4] = S),
      (t[5] = g),
      (t[6] = D))
    : (D = t[6]);
  let O = D,
    k = O ?? re,
    A;
  t[7] !== O || t[8] !== k
    ? ((A =
        O == null
          ? k
          : (0, W.jsx)(`span`, {
              ref: y,
              className: `loading-shimmer-pure-text [--text-primary:var(--color-text)]`,
              children: k,
            })),
      (t[7] = O),
      (t[8] = k),
      (t[9] = A))
    : (A = t[9]);
  let ae = A;
  if (s) {
    let e;
    return (
      t[10] !== r || t[11] !== c || t[12] !== f || t[13] !== b
        ? ((e = (0, W.jsx)(pe, { menuOpen: c, onOpenChange: f, showIndicator: b, collapse: r })),
          (t[10] = r),
          (t[11] = c),
          (t[12] = f),
          (t[13] = b),
          (t[14] = e))
        : (e = t[14]),
      e
    );
  }
  let j;
  t[15] !== i || t[16] !== b
    ? ((j = b && i.length > 0 ? void 0 : { 16: l, 20: x }), (t[15] = i), (t[16] = b), (t[17] = j))
    : (j = t[17]);
  let M = b ? `home-chevron` : `none`,
    N;
  t[18] !== i || t[19] !== C || t[20] !== b
    ? ((N = b
        ? i
            .slice(0, 3)
            .map((e) => ({
              id: e.plugin.id,
              src: (C ? e.logoDarkPath : e.logoPath) ?? e.logoPath ?? e.logoDarkPath,
              fallbackIcon: l,
            }))
        : void 0),
      (t[18] = i),
      (t[19] = C),
      (t[20] = b),
      (t[21] = N))
    : (N = t[21]);
  let P;
  t[22] === h
    ? (P = t[23])
    : ((P = (e) => {
        w.current && ((w.current = !1), e.preventDefault(), h());
      }),
      (t[22] = h),
      (t[23] = P));
  let F;
  t[24] !== f || t[25] !== m
    ? ((F = (e, t) => {
        ((w.current = !0), m(e, t), f(!1));
      }),
      (t[24] = f),
      (t[25] = m),
      (t[26] = F))
    : (F = t[26]);
  let I;
  t[27] !== i ||
  t[28] !== a ||
  t[29] !== o ||
  t[30] !== ee ||
  t[31] !== u ||
  t[32] !== d ||
  t[33] !== p ||
  t[34] !== _ ||
  t[35] !== F ||
  t[36] !== v
    ? ((I = (0, W.jsx)(be, {
        connectedPlugins: i,
        defaultConnectedPluginLimit: a,
        featuredPlugins: o,
        hasLoadError: ee,
        onConnectPlugin: u,
        onOpenPluginDirectory: d,
        onPluginImpressions: p,
        onPluginSelectionChange: F,
        selectedPluginIds: _,
        workRecommendationsHostId: v,
      })),
      (t[27] = i),
      (t[28] = a),
      (t[29] = o),
      (t[30] = ee),
      (t[31] = u),
      (t[32] = d),
      (t[33] = p),
      (t[34] = _),
      (t[35] = F),
      (t[36] = v),
      (t[37] = I))
    : (I = t[37]);
  let L;
  return (
    t[38] !== r ||
    t[39] !== c ||
    t[40] !== f ||
    t[41] !== ie ||
    t[42] !== I ||
    t[43] !== j ||
    t[44] !== M ||
    t[45] !== N ||
    t[46] !== P ||
    t[47] !== ae ||
    t[48] !== k
      ? ((L = (0, W.jsx)(me, {
          "aria-label": k,
          "data-composer-navigation-target": `plugins`,
          contentClassName: `overflow-hidden!`,
          contentMaxHeight: `composerPlugins`,
          contentSurface: `opaque`,
          contentWidth: `menuWide`,
          collapse: r,
          foreground: `primary`,
          iconSource: j,
          indicator: M,
          leadingLogos: N,
          menuOpen: c,
          tooltipContent: ie,
          value: ae,
          onOpenChange: f,
          onCloseAutoFocus: P,
          children: I,
        })),
        (t[38] = r),
        (t[39] = c),
        (t[40] = f),
        (t[41] = ie),
        (t[42] = I),
        (t[43] = j),
        (t[44] = M),
        (t[45] = N),
        (t[46] = P),
        (t[47] = ae),
        (t[48] = k),
        (t[49] = L))
      : (L = t[49]),
    L
  );
}
var Se, Ce, W, G;
function K() {
  return (K = e(() => {
    ((Se = c()),
      (Ce = i()),
      m(),
      b(),
      d(),
      _e(),
      v(),
      H(),
      he(),
      (W = o()),
      (G = h({
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
function q(e) {
  "use forget";
  let n = (0, Te.c)(65),
    {
      collapse: i,
      composerController: a,
      cwd: o,
      hostId: s,
      menuOpen: c,
      onOpenChange: l,
      pluginHostId: u,
      onRequestComposerFocus: d,
      showConnectedPluginLogos: m,
      workComposer: h,
    } = e,
    g = h === void 0 || h,
    v = t(S),
    y = ne(),
    b = f(),
    x = te(g ? null : N),
    C = x?.selectedModel == null ? void 0 : x.models?.modelConfigBySlug?.[x.selectedModel.slug],
    w = g ? F.CHATGPT_PRODUCT_EXPERIENCE_WORK : F.CHATGPT_PRODUCT_EXPERIENCE_CHAT,
    T;
  n[0] === w
    ? (T = n[1])
    : ((T = { ...M.workComposer, chatgpt: { ...M.workComposer.chatgpt, productExperience: w } }),
      (n[0] = w),
      (n[1] = T));
  let O = T,
    k,
    j;
  n[2] === v
    ? ((k = n[3]), (j = n[4]))
    : ((k = () => ie(v)),
      (j = () => (v.value.kind === `chatgpt` ? v.value.conversationId : null)),
      (n[2] = v),
      (n[3] = k),
      (n[4] = j));
  let P;
  n[5] === v ? (P = n[6]) : ((P = (e) => A({ scope: v, path: e })), (n[5] = v), (n[6] = P));
  let I;
  n[7] !== s || n[8] !== O || n[9] !== k || n[10] !== j || n[11] !== P
    ? ((I = {
        getLocalConversationId: k,
        getChatGptConversationId: j,
        hostId: s,
        marketplaceAnalytics: O,
        onMentionInserted: P,
      }),
      (n[7] = s),
      (n[8] = O),
      (n[9] = k),
      (n[10] = j),
      (n[11] = P),
      (n[12] = I))
    : (I = n[12]);
  let R = E(I),
    z = de(a, we, `document`),
    B;
  n[13] !== o || n[14] !== s || n[15] !== O || n[16] !== u || n[17] !== g
    ? ((B = { cwd: o, hostId: s, pluginHostId: u, marketplaceAnalytics: O, workComposer: g }),
      (n[13] = o),
      (n[14] = s),
      (n[15] = O),
      (n[16] = u),
      (n[17] = g),
      (n[18] = B))
    : (B = n[18]);
  let {
      connectedPlugins: V,
      defaultConnectedPluginLimit: ce,
      featuredPlugins: fe,
      hasLoadError: pe,
      isLoading: me,
      openPluginInstall: he,
      pluginsFeatureEnabled: H,
      pluginInstallationStatus: U,
    } = ge(B),
    { data: _e, isError: ye, isLoading: be } = te(!g && H ? D : null) ?? {},
    Se = ye !== void 0 && ye,
    Ce = be !== void 0 && be,
    W = se(_e, V),
    G;
  n[19] !== C || n[20] !== x?.selectedModel?.slug
    ? ((G = (e) =>
        re(e, {
          conversation: {
            gizmoId: null,
            isProjectMode: !1,
            modelSlug: C == null ? void 0 : x?.selectedModel?.slug,
            enabledTools: C?.enabledTools,
            attachments: C?.attachments,
            reasoningType: C?.reasoningType,
            surface: `chat`,
          },
        })),
      (n[19] = C),
      (n[20] = x?.selectedModel?.slug),
      (n[21] = G))
    : (G = n[21]);
  let K = ae(W, `chat`, G),
    q;
  n[22] !== K || n[23] !== V || n[24] !== g
    ? ((q = g ? V : V.filter((e) => K?.[_(e.plugin.id)] != null)),
      (n[22] = K),
      (n[23] = V),
      (n[24] = g),
      (n[25] = q))
    : (q = n[25]);
  let J = q;
  if (!H) return null;
  let Y;
  n[26] !== fe || n[27] !== g ? ((Y = g ? fe : []), (n[26] = fe), (n[27] = g), (n[28] = Y)) : (Y = n[28]);
  let De = pe || (Se && J.length === 0),
    Oe = me || Ce,
    X;
  n[29] !== O || n[30] !== v
    ? ((X = (e, t) => {
        for (let n of t)
          oe(v, O.chatgpt, {
            action: ue.CHATGPT_PLUGIN_ACTION_TYPE_IMPRESSION,
            result: le.CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS,
            pluginId: n,
            pluginIds: e,
          });
      }),
      (n[29] = O),
      (n[30] = v),
      (n[31] = X))
    : (X = n[31]);
  let Z;
  n[32] !== s || n[33] !== b || n[34] !== H || n[35] !== v
    ? ((Z = () => {
        L(v, b, H, p.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER, s);
      }),
      (n[32] = s),
      (n[33] = b),
      (n[34] = H),
      (n[35] = v),
      (n[36] = Z))
    : (Z = n[36]);
  let Q;
  n[37] !== W || n[38] !== K || n[39] !== a || n[40] !== y || n[41] !== R || n[42] !== v || n[43] !== g
    ? ((Q = (e, t) => {
        if (t) {
          g && ve(v, e);
          let t = r(e, ee(y));
          if ((a.insertMentionAtSelection(t), !g)) {
            let n = K?.[_(e.plugin.id)];
            a.convertMentionsToText(`apps`, (e) => {
              let r = W?.[e];
              return e !== t.path && (n?.mutually_exclusive === !0 || r?.mutually_exclusive === !0);
            });
          }
          R(e);
          return;
        }
        a.removePluginMentions(e.plugin.id);
      }),
      (n[37] = W),
      (n[38] = K),
      (n[39] = a),
      (n[40] = y),
      (n[41] = R),
      (n[42] = v),
      (n[43] = g),
      (n[44] = Q))
    : (Q = n[44]);
  let $;
  n[45] === z ? ($ = n[46]) : (($ = z === `` ? [] : z.split(`\0`)), (n[45] = z), (n[46] = $));
  let ke = g ? (u ?? s) : void 0,
    Ae;
  return (
    n[47] !== i ||
    n[48] !== ce ||
    n[49] !== c ||
    n[50] !== l ||
    n[51] !== d ||
    n[52] !== he ||
    n[53] !== U ||
    n[54] !== J ||
    n[55] !== m ||
    n[56] !== Y ||
    n[57] !== De ||
    n[58] !== Oe ||
    n[59] !== X ||
    n[60] !== Z ||
    n[61] !== Q ||
    n[62] !== $ ||
    n[63] !== ke
      ? ((Ae = (0, Ee.jsx)(xe, {
          collapse: i,
          connectedPlugins: J,
          defaultConnectedPluginLimit: ce,
          featuredPlugins: Y,
          hasLoadError: De,
          isLoading: Oe,
          menuOpen: c,
          onOpenChange: l,
          onConnectPlugin: he,
          onPluginImpressions: X,
          onOpenPluginDirectory: Z,
          onPluginSelectionChange: Q,
          onRequestComposerFocus: d,
          pluginInstallationStatus: U,
          selectedPluginIds: $,
          showConnectedPluginLogos: m,
          workRecommendationsHostId: ke,
        })),
        (n[47] = i),
        (n[48] = ce),
        (n[49] = c),
        (n[50] = l),
        (n[51] = d),
        (n[52] = he),
        (n[53] = U),
        (n[54] = J),
        (n[55] = m),
        (n[56] = Y),
        (n[57] = De),
        (n[58] = Oe),
        (n[59] = X),
        (n[60] = Z),
        (n[61] = Q),
        (n[62] = $),
        (n[63] = ke),
        (n[64] = Ae))
      : (Ae = n[64]),
    Ae
  );
}
function we(e) {
  return e.getMentionedPluginIdsKey();
}
var Te, Ee;
function J() {
  return (J = e(() => {
    ((Te = c()),
      C(),
      j(),
      u(),
      g(),
      m(),
      s(),
      P(),
      R(),
      B(),
      V(),
      I(),
      O(),
      ce(),
      U(),
      fe(),
      ye(),
      w(),
      z(),
      K(),
      a(),
      k(),
      T(),
      (Ee = o()));
  }))();
}
J();
export { q as ComposerWorkHomePluginsControl };
//# sourceMappingURL=composer-work-home-plugins-control-9e4a8906ca4b.js.map
