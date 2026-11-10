import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AJ as r,
  Amn as i,
  Cj as a,
  Cpn as o,
  IXt as s,
  JQt as c,
  JXt as l,
  Jpt as u,
  MMt as d,
  O3t as f,
  Opn as p,
  Sj as m,
  Spn as h,
  Upt as g,
  e0t as _,
  fk as v,
  hmn as y,
  jMt as b,
  kmn as x,
  pk as S,
  tmt as C,
  xpn as w,
  zJ as T,
} from "./app-initial-f094ef01c64d.js";
import {
  Bx as E,
  Fp as D,
  Pp as O,
  Rx as k,
  ca as A,
  iS as j,
  la as M,
  rS as N,
  sa as P,
  ua as F,
} from "./app-primary-4c40d73a1074.js";
import {
  a as I,
  i as ee,
  n as L,
  o as R,
  r as z,
  t as B,
} from "./plugin-picker-menu-content-8fa056f43456.js";
import { n as V, t as te } from "./connector-logo-stack-25292da058a9.js";
function ne() {
  let e = (0, H.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, U.jsx)(M, {
          categoryLabel: null,
          className: `disabled:cursor-default disabled:opacity-100`,
          collapse: `xs`,
          disabled: !0,
          icon: null,
          indicator: `none`,
          value: (0, U.jsxs)(`span`, {
            className: `flex items-center gap-1`,
            children: [
              (0, U.jsx)(b, { className: `icon-xs shrink-0 text-default` }),
              (0, U.jsx)(`span`, {
                children: (0, U.jsx)(o, {
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
var H,
  U,
  W = e(() => {
    ((H = x()), h(), d(), F(), (U = y()));
  });
function G(e) {
  "use forget";
  let t = (0, q.c)(39),
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
      workRecommendationsHostId: h,
    } = e,
    g = p(),
    _ = (0, J.useRef)(!1),
    [v, y] = (0, J.useState)(!1),
    b = n.length > 0,
    x;
  t[0] === g
    ? (x = t[1])
    : ((x = g.formatMessage({
        id: `composer.workMode.plugins.label`,
        defaultMessage: `Plugins`,
        description: `Label for the Plugins picker in the Chat home composer utility bar`,
      })),
      (t[0] = g),
      (t[1] = x));
  let S = x,
    C;
  t[2] === g ? (C = t[3]) : ((C = g.formatMessage(X.pluginsTooltip)), (t[2] = g), (t[3] = C));
  let w = C,
    T;
  t[4] !== g || t[5] !== d
    ? ((T =
        d == null
          ? null
          : d.phase === `loading`
            ? g.formatMessage(X.loadingPlugin, { pluginName: d.pluginDisplayName })
            : g.formatMessage(X.installingPlugin, { pluginName: d.pluginDisplayName })),
      (t[4] = g),
      (t[5] = d),
      (t[6] = T))
    : (T = t[6]);
  let E = T,
    D = E ?? S,
    O;
  t[7] !== E || t[8] !== D
    ? ((O =
        E == null
          ? D
          : (0, Y.jsx)(`span`, {
              className: `loading-shimmer-pure-text [--text-primary:var(--color-text)]`,
              children: D,
            })),
      (t[7] = E),
      (t[8] = D),
      (t[9] = O))
    : (O = t[9]);
  let k = O;
  if (o) {
    let e;
    return (
      t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(ne, {})), (t[10] = e))
        : (e = t[10]),
      e
    );
  }
  let A;
  t[11] === b
    ? (A = t[12])
    : ((A = b ? null : (0, Y.jsx)(m, { "aria-hidden": !0, className: `icon-xs shrink-0` })),
      (t[11] = b),
      (t[12] = A));
  let j;
  t[13] !== n || t[14] !== b || t[15] !== k
    ? ((j = b
        ? (0, Y.jsxs)(`span`, {
            className: `flex items-center gap-1`,
            children: [
              (0, Y.jsx)(`span`, {
                "aria-hidden": !0,
                className: `flex items-center`,
                children: (0, Y.jsx)(te, { size: `small`, children: n.slice(0, 3).map(K) }),
              }),
              k,
            ],
          })
        : k),
      (t[13] = n),
      (t[14] = b),
      (t[15] = k),
      (t[16] = j))
    : (j = t[16]);
  let M;
  t[17] === u
    ? (M = t[18])
    : ((M = (e) => {
        _.current && ((_.current = !1), e.preventDefault(), u());
      }),
      (t[17] = u),
      (t[18] = M));
  let N;
  t[19] === l
    ? (N = t[20])
    : ((N = (e, t) => {
        ((_.current = !0), l(e, t), y(!1));
      }),
      (t[19] = l),
      (t[20] = N));
  let F;
  t[21] !== n ||
  t[22] !== r ||
  t[23] !== i ||
  t[24] !== a ||
  t[25] !== s ||
  t[26] !== c ||
  t[27] !== f ||
  t[28] !== N ||
  t[29] !== h
    ? ((F = (0, Y.jsx)(B, {
        connectedPlugins: n,
        defaultConnectedPluginLimit: r,
        featuredPlugins: i,
        hasLoadError: a,
        onConnectPlugin: s,
        onOpenPluginDirectory: c,
        onPluginSelectionChange: N,
        selectedPluginIds: f,
        workRecommendationsHostId: h,
      })),
      (t[21] = n),
      (t[22] = r),
      (t[23] = i),
      (t[24] = a),
      (t[25] = s),
      (t[26] = c),
      (t[27] = f),
      (t[28] = N),
      (t[29] = h),
      (t[30] = F))
    : (F = t[30]);
  let I;
  return (
    t[31] !== v ||
    t[32] !== w ||
    t[33] !== A ||
    t[34] !== j ||
    t[35] !== M ||
    t[36] !== F ||
    t[37] !== D
      ? ((I = (0, Y.jsx)(P, {
          "aria-label": D,
          "data-composer-navigation-target": `plugins`,
          contentClassName: `overflow-hidden!`,
          contentMaxHeight: `composerPlugins`,
          contentSurface: `opaque`,
          contentWidth: `menuWide`,
          icon: A,
          menuOpen: v,
          tooltipContent: w,
          value: j,
          onOpenChange: y,
          onCloseAutoFocus: M,
          children: F,
        })),
        (t[31] = v),
        (t[32] = w),
        (t[33] = A),
        (t[34] = j),
        (t[35] = M),
        (t[36] = F),
        (t[37] = D),
        (t[38] = I))
      : (I = t[38]),
    I
  );
}
function K(e) {
  return (0, Y.jsx)(
    v,
    {
      alt: ``,
      className: `object-contain`,
      size: 20,
      knownAppId: e.plugin.name,
      logoDarkUrl: e.logoDarkPath,
      logoUrl: e.logoPath,
      fallback: (0, Y.jsx)(m, { className: `size-1/2 text-secondary` }),
    },
    e.plugin.id,
  );
}
var q,
  J,
  Y,
  X,
  Z = e(() => {
    ((q = x()),
      (J = t(i(), 1)),
      h(),
      S(),
      V(),
      a(),
      L(),
      W(),
      A(),
      (Y = y()),
      (X = w({
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
    { composerController: i, cwd: a, hostId: o, pluginHostId: s, onRequestComposerFocus: d } = e,
    f = n(r),
    m = p(),
    h = l(),
    _;
  t[0] === o ? (_ = t[1]) : ((_ = { hostId: o }), (t[0] = o), (t[1] = _));
  let v = j(_),
    y = E(i, ie, `document`),
    b;
  t[2] !== a || t[3] !== o || t[4] !== s
    ? ((b = { cwd: a, hostId: o, pluginHostId: s, workComposer: !0 }),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = b))
    : (b = t[5]);
  let {
    connectedPlugins: x,
    defaultConnectedPluginLimit: S,
    featuredPlugins: C,
    hasLoadError: w,
    isLoading: T,
    openPluginInstall: O,
    pluginsFeatureEnabled: k,
    pluginInstallationStatus: A,
  } = ee(b);
  if (!k) return null;
  let M;
  t[6] !== o || t[7] !== h || t[8] !== k || t[9] !== f
    ? ((M = () => {
        D(f, h, k, c.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER, o);
      }),
      (t[6] = o),
      (t[7] = h),
      (t[8] = k),
      (t[9] = f),
      (t[10] = M))
    : (M = t[10]);
  let N;
  t[11] !== i || t[12] !== m || t[13] !== v || t[14] !== f
    ? ((N = (e, t) => {
        if (t) {
          (R(f, e), i.insertMentionAtSelection(g(e, u(m))), v(e));
          return;
        }
        i.removePluginMentions(e.plugin.id);
      }),
      (t[11] = i),
      (t[12] = m),
      (t[13] = v),
      (t[14] = f),
      (t[15] = N))
    : (N = t[15]);
  let P;
  t[16] === y ? (P = t[17]) : ((P = y === `` ? [] : y.split(`\0`)), (t[16] = y), (t[17] = P));
  let F = s ?? o,
    I;
  return (
    t[18] !== x ||
    t[19] !== S ||
    t[20] !== C ||
    t[21] !== w ||
    t[22] !== T ||
    t[23] !== d ||
    t[24] !== O ||
    t[25] !== A ||
    t[26] !== M ||
    t[27] !== N ||
    t[28] !== P ||
    t[29] !== F
      ? ((I = (0, $.jsx)(G, {
          connectedPlugins: x,
          defaultConnectedPluginLimit: S,
          featuredPlugins: C,
          hasLoadError: w,
          isLoading: T,
          onConnectPlugin: O,
          onOpenPluginDirectory: M,
          onPluginSelectionChange: N,
          onRequestComposerFocus: d,
          pluginInstallationStatus: A,
          selectedPluginIds: P,
          workRecommendationsHostId: F,
        })),
        (t[18] = x),
        (t[19] = S),
        (t[20] = C),
        (t[21] = w),
        (t[22] = T),
        (t[23] = d),
        (t[24] = O),
        (t[25] = A),
        (t[26] = M),
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
  ((Q = x()), _(), f(), h(), s(), I(), z(), T(), O(), Z(), C(), k(), N(), ($ = y()));
})();
export { re as ComposerWorkHomePluginsControl };
//# sourceMappingURL=composer-work-home-plugins-control-40bb3845a52f.js.map
