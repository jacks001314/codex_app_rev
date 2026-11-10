import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import { t as n } from "./react-d6ffadc57208.js";
import { t as r } from "./compiler-runtime-292acb85cdd3.js";
import {
  $Q as i,
  AF as a,
  Avt as o,
  C6t as s,
  Cr as c,
  Cvt as l,
  DN as u,
  FXt as d,
  ON as f,
  RQt as p,
  Son as m,
  T6t as h,
  Tr as g,
  X1t as _,
  _on as v,
  bXt as y,
  c$ as b,
  gon as x,
  hon as S,
  kF as C,
  yvt as w,
} from "./app-initial-bcc2ff475eb6.js";
import { t as T } from "./jsx-runtime-a96621a2647a.js";
import {
  Ah as E,
  Ca as D,
  Sa as O,
  ba as k,
  jh as A,
  lS as j,
  uS as M,
  xa as N,
} from "./app-primary-b36a719dba75.js";
import { n as P, t as F } from "./spinner-7be467d63a23.js";
import {
  a as I,
  i as L,
  n as R,
  o as z,
  r as B,
  t as V,
} from "./plugin-picker-menu-content-1ea89fdd6a0a.js";
import { n as H, t as U } from "./connector-logo-stack-b571b43894b2.js";
function W() {
  let e = (0, G.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, K.jsx)(O, {
          categoryLabel: null,
          className: `disabled:cursor-default disabled:opacity-100`,
          collapse: `xs`,
          disabled: !0,
          icon: null,
          indicator: `none`,
          value: (0, K.jsxs)(`span`, {
            className: `flex items-center gap-1`,
            children: [
              (0, K.jsx)(F, { className: `icon-xs shrink-0 text-default` }),
              (0, K.jsx)(`span`, {
                children: (0, K.jsx)(v, {
                  id: `composer.workMode.plugins.label`,
                  defaultMessage: `Plugins`,
                  description: `Label for the Plugins picker in the Chat home composer utility bar`,
                }),
              }),
            ],
          }),
          valueClassName: `!max-w-60 text-default`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var G,
  K,
  q = e(() => {
    ((G = r()), x(), P(), D(), (K = T()));
  });
function ee(e) {
  "use forget";
  let t = (0, J.c)(39),
    {
      connectedPlugins: n,
      defaultConnectedPluginLimit: r,
      featuredPlugins: i,
      hasLoadError: a,
      isLoading: o,
      onConnectPlugin: s,
      onOpenPluginDirectory: c,
      onPluginSelectionChange: l,
      onRequestComposerFocus: u,
      pluginInstallationStatus: d,
      selectedPluginIds: f,
      workRecommendationsHostId: p,
    } = e,
    h = m(),
    g = (0, Y.useRef)(!1),
    [_, v] = (0, Y.useState)(!1),
    y = n.length > 0,
    b;
  t[0] === h
    ? (b = t[1])
    : ((b = h.formatMessage({
        id: `composer.workMode.plugins.label`,
        defaultMessage: `Plugins`,
        description: `Label for the Plugins picker in the Chat home composer utility bar`,
      })),
      (t[0] = h),
      (t[1] = b));
  let x = b,
    S;
  t[2] === h ? (S = t[3]) : ((S = h.formatMessage(Z.pluginsTooltip)), (t[2] = h), (t[3] = S));
  let w = S,
    T;
  t[4] !== h || t[5] !== d
    ? ((T =
        d == null
          ? null
          : d.phase === `loading`
            ? h.formatMessage(Z.loadingPlugin, { pluginName: d.pluginDisplayName })
            : h.formatMessage(Z.installingPlugin, { pluginName: d.pluginDisplayName })),
      (t[4] = h),
      (t[5] = d),
      (t[6] = T))
    : (T = t[6]);
  let E = T,
    D = E ?? x,
    O;
  t[7] !== E || t[8] !== D
    ? ((O =
        E == null
          ? D
          : (0, X.jsx)(`span`, {
              className: `loading-shimmer-pure-text [--text-primary:var(--color-text)]`,
              children: D,
            })),
      (t[7] = E),
      (t[8] = D),
      (t[9] = O))
    : (O = t[9]);
  let A = O;
  if (o) {
    let e;
    return (
      t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(W, {})), (t[10] = e))
        : (e = t[10]),
      e
    );
  }
  let j;
  t[11] === y
    ? (j = t[12])
    : ((j = y ? null : (0, X.jsx)(C, { "aria-hidden": !0, className: `icon-xs shrink-0` })),
      (t[11] = y),
      (t[12] = j));
  let M;
  t[13] !== n || t[14] !== y || t[15] !== A
    ? ((M = y
        ? (0, X.jsxs)(`span`, {
            className: `flex items-center gap-1`,
            children: [
              (0, X.jsx)(`span`, {
                "aria-hidden": !0,
                className: `flex items-center`,
                children: (0, X.jsx)(U, { size: `small`, children: n.slice(0, 3).map(te) }),
              }),
              A,
            ],
          })
        : A),
      (t[13] = n),
      (t[14] = y),
      (t[15] = A),
      (t[16] = M))
    : (M = t[16]);
  let N;
  t[17] === u
    ? (N = t[18])
    : ((N = (e) => {
        g.current && ((g.current = !1), e.preventDefault(), u());
      }),
      (t[17] = u),
      (t[18] = N));
  let P;
  t[19] === l
    ? (P = t[20])
    : ((P = (e, t) => {
        ((g.current = !0), l(e, t), v(!1));
      }),
      (t[19] = l),
      (t[20] = P));
  let F;
  t[21] !== n ||
  t[22] !== r ||
  t[23] !== i ||
  t[24] !== a ||
  t[25] !== s ||
  t[26] !== c ||
  t[27] !== f ||
  t[28] !== P ||
  t[29] !== p
    ? ((F = (0, X.jsx)(V, {
        connectedPlugins: n,
        defaultConnectedPluginLimit: r,
        featuredPlugins: i,
        hasLoadError: a,
        onConnectPlugin: s,
        onOpenPluginDirectory: c,
        onPluginSelectionChange: P,
        selectedPluginIds: f,
        workRecommendationsHostId: p,
      })),
      (t[21] = n),
      (t[22] = r),
      (t[23] = i),
      (t[24] = a),
      (t[25] = s),
      (t[26] = c),
      (t[27] = f),
      (t[28] = P),
      (t[29] = p),
      (t[30] = F))
    : (F = t[30]);
  let I;
  return (
    t[31] !== _ ||
    t[32] !== w ||
    t[33] !== j ||
    t[34] !== M ||
    t[35] !== N ||
    t[36] !== F ||
    t[37] !== D
      ? ((I = (0, X.jsx)(k, {
          "aria-label": D,
          "data-composer-navigation-target": `plugins`,
          contentClassName: `overflow-hidden!`,
          contentMaxHeight: `composerPlugins`,
          contentSurface: `opaque`,
          contentWidth: `menuWide`,
          icon: j,
          menuOpen: _,
          tooltipContent: w,
          value: M,
          onOpenChange: v,
          onCloseAutoFocus: N,
          children: F,
        })),
        (t[31] = _),
        (t[32] = w),
        (t[33] = j),
        (t[34] = M),
        (t[35] = N),
        (t[36] = F),
        (t[37] = D),
        (t[38] = I))
      : (I = t[38]),
    I
  );
}
function te(e) {
  return (0, X.jsx)(
    u,
    {
      alt: ``,
      className: `object-contain`,
      size: 20,
      knownAppId: e.plugin.name,
      logoDarkUrl: e.logoDarkPath,
      logoUrl: e.logoPath,
      fallback: (0, X.jsx)(C, { className: `size-1/2 text-secondary` }),
    },
    e.plugin.id,
  );
}
var J,
  Y,
  X,
  Z,
  ne = e(() => {
    ((J = r()),
      (Y = t(n(), 1)),
      x(),
      f(),
      H(),
      a(),
      R(),
      q(),
      N(),
      (X = T()),
      (Z = S({
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
  });
function re(e) {
  "use forget";
  let t = (0, Q.c)(31),
    { composerController: n, cwd: r, hostId: a, pluginHostId: o, onRequestComposerFocus: s } = e,
    c = h(i),
    u = m(),
    f = d(),
    _;
  t[0] === a ? (_ = t[1]) : ((_ = { hostId: a }), (t[0] = a), (t[1] = _));
  let v = M(_),
    y = g(n, ie, `document`),
    b;
  t[2] !== r || t[3] !== a || t[4] !== o
    ? ((b = { cwd: r, hostId: a, pluginHostId: o, workComposer: !0 }),
      (t[2] = r),
      (t[3] = a),
      (t[4] = o),
      (t[5] = b))
    : (b = t[5]);
  let {
    connectedPlugins: x,
    defaultConnectedPluginLimit: S,
    featuredPlugins: C,
    hasLoadError: T,
    isLoading: E,
    openPluginInstall: D,
    pluginsFeatureEnabled: O,
    pluginInstallationStatus: k,
  } = L(b);
  if (!O) return null;
  let j;
  t[6] !== a || t[7] !== f || t[8] !== O || t[9] !== c
    ? ((j = () => {
        A(c, f, O, p.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER, a);
      }),
      (t[6] = a),
      (t[7] = f),
      (t[8] = O),
      (t[9] = c),
      (t[10] = j))
    : (j = t[10]);
  let N;
  t[11] !== n || t[12] !== u || t[13] !== v || t[14] !== c
    ? ((N = (e, t) => {
        if (t) {
          (z(c, e), n.insertMentionAtSelection(w(e, l(u))), v(e));
          return;
        }
        n.removePluginMentions(e.plugin.id);
      }),
      (t[11] = n),
      (t[12] = u),
      (t[13] = v),
      (t[14] = c),
      (t[15] = N))
    : (N = t[15]);
  let P;
  t[16] === y ? (P = t[17]) : ((P = y === `` ? [] : y.split(`\0`)), (t[16] = y), (t[17] = P));
  let F = o ?? a,
    I;
  return (
    t[18] !== x ||
    t[19] !== S ||
    t[20] !== C ||
    t[21] !== T ||
    t[22] !== E ||
    t[23] !== s ||
    t[24] !== D ||
    t[25] !== k ||
    t[26] !== j ||
    t[27] !== N ||
    t[28] !== P ||
    t[29] !== F
      ? ((I = (0, $.jsx)(ee, {
          connectedPlugins: x,
          defaultConnectedPluginLimit: S,
          featuredPlugins: C,
          hasLoadError: T,
          isLoading: E,
          onConnectPlugin: D,
          onOpenPluginDirectory: j,
          onPluginSelectionChange: N,
          onRequestComposerFocus: s,
          pluginInstallationStatus: k,
          selectedPluginIds: P,
          workRecommendationsHostId: F,
        })),
        (t[18] = x),
        (t[19] = S),
        (t[20] = C),
        (t[21] = T),
        (t[22] = E),
        (t[23] = s),
        (t[24] = D),
        (t[25] = k),
        (t[26] = j),
        (t[27] = N),
        (t[28] = P),
        (t[29] = F),
        (t[30] = I))
      : (I = t[30]),
    I
  );
}
function ie(e) {
  return e.getMentionedPluginIdsKey();
}
var Q, $;
e(() => {
  ((Q = r()), _(), s(), x(), y(), I(), B(), b(), E(), ne(), o(), c(), j(), ($ = T()));
})();
export { re as ComposerWorkHomePluginsControl };
//# sourceMappingURL=composer-work-home-plugins-control-5152d18e3456.js.map
