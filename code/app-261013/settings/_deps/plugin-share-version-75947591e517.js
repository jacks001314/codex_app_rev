import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $bt as n,
  ADt as r,
  Cot as i,
  D0 as a,
  IDt as o,
  Ibt as s,
  Ixt as c,
  MO as l,
  Mz as u,
  Nz as d,
  O0 as f,
  Pxt as p,
  UI as m,
  VDt as h,
  XD as g,
  YD as _,
  _Mt as v,
  cz as y,
  gMt as b,
  i_t as x,
  jDt as S,
  jO as ee,
  rst as C,
  sz as w,
  t3 as T,
  uyt as E,
  vzt as D,
  wot as O,
  xMt as k,
  yzt as A,
  zI as te,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ja as j,
  Ko as M,
  M1n as ne,
  MRt as re,
  NRt as N,
  QDr as ie,
  XDr as P,
  Xa as ae,
  Ya as oe,
  Za as F,
  fa as I,
  ha as L,
  htn as R,
  hzt as z,
  j1n as se,
  mtn as ce,
  mzt as le,
  q1n as B,
  qo as V,
} from "./app-initial-5851df3f6cb1.js";
import { a as H, i as U, o as ue, r as de } from "./app-card-23a383c72dd0.js";
function fe(e) {
  let n = (0, G.c)(99),
    {
      app: r,
      appRestriction: s,
      errorMessage: l,
      events: d,
      isConfigPending: f,
      isLoading: p,
      onOpenChange: m,
      onSetAppEnabled: g,
      showEnableToggle: _,
      onTryInChat: v,
      tools: y,
      updatingAppId: b,
    } = e,
    x = s === void 0 ? null : s,
    S = f !== void 0 && f,
    C = _ === void 0 || _,
    w = c(i),
    T = h(),
    E,
    D,
    O,
    k,
    A,
    j,
    M,
    N,
    P,
    F,
    I,
    L,
    R;
  if (
    n[0] !== r ||
    n[1] !== x ||
    n[2] !== d ||
    n[3] !== T ||
    n[4] !== S ||
    n[5] !== m ||
    n[6] !== g ||
    n[7] !== v ||
    n[8] !== w ||
    n[9] !== C ||
    n[10] !== y ||
    n[11] !== b
  ) {
    R = _e(y);
    let e, i, s, c, l;
    if (
      n[25] !== r ||
      n[26] !== x ||
      n[27] !== d ||
      n[28] !== T ||
      n[29] !== S ||
      n[30] !== g ||
      n[31] !== C ||
      n[32] !== b
    ) {
      let t = r == null ? null : te(r),
        a = b === r?.id,
        u = a || x?.isUserEditable === !1 || S,
        f = r?.isEnabled === !0 && x == null;
      i = r?.isAccessible === !0 && f && !S;
      let p = f ? Y.disableApp : Y.enableApp;
      if (((e = null), S)) {
        let t;
        (n[41] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, q.jsx)(o, { ...Y.loadingProjectSettings })), (n[41] = t))
          : (t = n[41]),
          (e = t));
      } else if (x?.isUserEditable === !1) {
        let t;
        (n[42] === x
          ? (t = n[43])
          : ((t = (0, q.jsx)(de, { restriction: x, surface: `dialog` })), (n[42] = x), (n[43] = t)),
          (e = t));
      } else if (x == null && r?.isAccessible === !0 && r.isEnabled === !1) {
        let t;
        (n[44] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, q.jsx)(o, { ...Y.unattributedDisablement })), (n[44] = t))
          : (t = n[44]),
          (e = t));
      }
      let m;
      (n[45] !== r?.description || n[46] !== d || n[47] !== T
        ? ((m = r?.description ?? T.formatMessage(d.length > 0 ? Y.subtitleWithEvents : Y.subtitle)),
          (n[45] = r?.description),
          (n[46] = d),
          (n[47] = T),
          (n[48] = m))
        : (m = n[48]),
        (c = m));
      let h = r?.name ?? ``,
        _;
      n[49] !== r || n[50] !== f
        ? ((_ =
            r != null && r.isAccessible && !f
              ? (0, q.jsx)(re, { variant: `outline`, children: (0, q.jsx)(o, { ...Y.disabledBadge }) })
              : null),
          (n[49] = r),
          (n[50] = f),
          (n[51] = _))
        : (_ = n[51]);
      let v;
      (n[52] !== h || n[53] !== _
        ? ((v = (0, q.jsx)(ae, { kind: `App`, title: h, badge: _ })), (n[52] = h), (n[53] = _), (n[54] = v))
        : (v = n[54]),
        (l = v));
      let y;
      (n[55] !== r ||
      n[56] !== e ||
      n[57] !== T ||
      n[58] !== f ||
      n[59] !== u ||
      n[60] !== a ||
      n[61] !== g ||
      n[62] !== C ||
      n[63] !== p
        ? ((y =
            r != null && C && (r.isAccessible || !r.isEnabled || a)
              ? (0, q.jsx)(`div`, {
                  className: `flex items-center`,
                  children: (0, q.jsx)(U, {
                    "data-state": f ? `checked` : `unchecked`,
                    isControlDisabled: u,
                    isExplanationFocusable: e != null,
                    tooltipContent: e ?? (0, q.jsx)(o, { ...p }),
                    children: (0, q.jsx)(ee, {
                      className: `h-token-button-composer`,
                      checked: f,
                      disabled: u,
                      ariaLabel: T.formatMessage(p),
                      onChange: (e) => {
                        g({ appId: r.id, enabled: e });
                      },
                    }),
                  }),
                })
              : null),
          (n[55] = r),
          (n[56] = e),
          (n[57] = T),
          (n[58] = f),
          (n[59] = u),
          (n[60] = a),
          (n[61] = g),
          (n[62] = C),
          (n[63] = p),
          (n[64] = y))
        : (y = n[64]),
        (s = y),
        (E = me),
        (P = `wide`),
        (F =
          r == null
            ? null
            : (0, q.jsx)(le, {
                alt: r.name,
                className: `icon-md`,
                logoUrl: r.logoUrl,
                logoDarkUrl: r.logoUrlDark,
                fallback:
                  t == null
                    ? (0, q.jsx)(ce, { className: `icon-sm text-secondary` })
                    : (0, K.createElement)(t),
              })),
        (n[25] = r),
        (n[26] = x),
        (n[27] = d),
        (n[28] = T),
        (n[29] = S),
        (n[30] = g),
        (n[31] = C),
        (n[32] = b),
        (n[33] = E),
        (n[34] = e),
        (n[35] = i),
        (n[36] = s),
        (n[37] = c),
        (n[38] = P),
        (n[39] = F),
        (n[40] = l));
    } else
      ((E = n[33]),
        (e = n[34]),
        (i = n[35]),
        (s = n[36]),
        (c = n[37]),
        (P = n[38]),
        (F = n[39]),
        (l = n[40]));
    ((I = l),
      (L = r?.name),
      (D = s),
      (O = c),
      (k = r != null),
      (A = m),
      n[65] !== r ||
      n[66] !== e ||
      n[67] !== x?.isUserEditable ||
      n[68] !== i ||
      n[69] !== T ||
      n[70] !== v ||
      n[71] !== w
        ? ((j =
            r == null
              ? null
              : (0, q.jsx)(`div`, {
                  className: `flex w-full items-center justify-end gap-2`,
                  children: (0, q.jsx)(U, {
                    isControlDisabled: !i,
                    isExplanationFocusable: e != null || x?.isUserEditable === !0,
                    tooltipContent: i
                      ? null
                      : (e ??
                        (0, q.jsx)(o, {
                          id: `skills.appsPage.toolsDialog.tryInChatDisabled`,
                          defaultMessage: `Enable and connect this app to try it now`,
                          description: `Tooltip shown when the selected app cannot be used in task yet`,
                        })),
                    children: (0, q.jsxs)(t, {
                      "aria-label": T.formatMessage({
                        id: `skills.appsPage.toolsDialog.tryInChat`,
                        defaultMessage: `Try now`,
                        description: `Footer action label to start a task with the selected app`,
                      }),
                      color: `primary`,
                      size: `toolbar`,
                      disabled: !i,
                      onClick: () => {
                        i &&
                          (ie(w, se, { name: ne.CHATGPT_APP_CLICK_TARGET_START_CHAT, connectorId: r.id }),
                          v(r));
                      },
                      children: [
                        (0, q.jsx)(u, { "aria-hidden": !1, asset: a }),
                        (0, q.jsx)(o, {
                          id: `skills.appsPage.toolsDialog.tryInChat`,
                          defaultMessage: `Try now`,
                          description: `Footer action label to start a task with the selected app`,
                        }),
                      ],
                    }),
                  }),
                })),
          (n[65] = r),
          (n[66] = e),
          (n[67] = x?.isUserEditable),
          (n[68] = i),
          (n[69] = T),
          (n[70] = v),
          (n[71] = w),
          (n[72] = j))
        : (j = n[72]),
      (N = `flex h-full min-h-0 flex-col`),
      (M =
        r != null && y.length > 0
          ? (0, q.jsx)(`div`, {
              className: `shrink-0 text-base text-secondary`,
              children: (0, q.jsx)(o, {
                id: `skills.appsPage.toolsDialog.summary`,
                defaultMessage: `The {appName} app contains {totalActions} tools ({actionTypes})`,
                description: `Summary shown above the app tool sections in the app tools dialog. Terminology update: 'tool(s)' replaces 'action(s)' for callable app capabilities. Preserve the existing translation where appropriate, changing the term and any required grammar; meaning and placeholders are unchanged.`,
                values: { appName: r.name, totalActions: y.length, actionTypes: R.map(pe).join(`, `) },
              }),
            })
          : null),
      (n[0] = r),
      (n[1] = x),
      (n[2] = d),
      (n[3] = T),
      (n[4] = S),
      (n[5] = m),
      (n[6] = g),
      (n[7] = v),
      (n[8] = w),
      (n[9] = C),
      (n[10] = y),
      (n[11] = b),
      (n[12] = E),
      (n[13] = D),
      (n[14] = O),
      (n[15] = k),
      (n[16] = A),
      (n[17] = j),
      (n[18] = M),
      (n[19] = N),
      (n[20] = P),
      (n[21] = F),
      (n[22] = I),
      (n[23] = L),
      (n[24] = R));
  } else
    ((E = n[12]),
      (D = n[13]),
      (O = n[14]),
      (k = n[15]),
      (A = n[16]),
      (j = n[17]),
      (M = n[18]),
      (N = n[19]),
      (P = n[20]),
      (F = n[21]),
      (I = n[22]),
      (L = n[23]),
      (R = n[24]));
  let z;
  n[73] === M ? (z = n[74]) : ((z = (0, q.jsx)(q.Fragment, { children: M })), (n[73] = M), (n[74] = z));
  let B;
  n[75] !== r || n[76] !== x || n[77] !== l || n[78] !== d || n[79] !== p || n[80] !== R || n[81] !== y
    ? ((B = (0, q.jsx)(oe, {
        className: `flex-1`,
        surfaceClassName: `bg-transparent`,
        children: p
          ? (0, q.jsx)(`div`, {
              className: `flex h-full min-h-32 items-center justify-center text-base text-secondary`,
              children: (0, q.jsx)(o, {
                id: `skills.appsPage.toolsDialog.loading`,
                defaultMessage: `Loading tools…`,
                description: `Loading label in the app tools dialog`,
              }),
            })
          : l == null
            ? y.length === 0 && d.length === 0
              ? (0, q.jsx)(`div`, {
                  className: `flex h-full min-h-32 items-center justify-center text-base text-secondary`,
                  children: (0, q.jsx)(o, {
                    id: `skills.appsPage.toolsDialog.empty`,
                    defaultMessage: `No tools available for this app.`,
                    description: `Empty state when no tools are available for the selected app`,
                  }),
                })
              : (0, q.jsx)(he, {
                  appId: r?.id ?? null,
                  events: d,
                  isAppDisabledWithoutRestriction: r?.isAccessible === !0 && r.isEnabled === !1 && x == null,
                  toolSections: R,
                })
            : (0, q.jsx)(`div`, {
                className: `flex h-full min-h-32 items-center justify-center text-base text-secondary`,
                children: (0, q.jsxs)(`div`, {
                  children: [
                    (0, q.jsx)(`div`, {
                      children: (0, q.jsx)(o, {
                        id: `skills.appsPage.toolsDialog.error`,
                        defaultMessage: `Unable to load tools for this app.`,
                        description: `Error state shown when connector actions could not be loaded for the selected app`,
                      }),
                    }),
                    (0, q.jsx)(`div`, { children: l }),
                  ],
                }),
              }),
      })),
      (n[75] = r),
      (n[76] = x),
      (n[77] = l),
      (n[78] = d),
      (n[79] = p),
      (n[80] = R),
      (n[81] = y),
      (n[82] = B))
    : (B = n[82]);
  let V;
  n[83] !== z || n[84] !== B || n[85] !== N
    ? ((V = (0, q.jsxs)(`div`, { className: N, children: [z, B] })),
      (n[83] = z),
      (n[84] = B),
      (n[85] = N),
      (n[86] = V))
    : (V = n[86]);
  let H;
  return (
    n[87] !== E ||
    n[88] !== D ||
    n[89] !== O ||
    n[90] !== k ||
    n[91] !== A ||
    n[92] !== j ||
    n[93] !== V ||
    n[94] !== P ||
    n[95] !== F ||
    n[96] !== I ||
    n[97] !== L
      ? ((H = (0, q.jsx)(E, {
          size: P,
          icon: F,
          title: I,
          titleText: L,
          headerActions: D,
          description: O,
          isOpen: k,
          onOpenChange: A,
          footer: j,
          children: V,
        })),
        (n[87] = E),
        (n[88] = D),
        (n[89] = O),
        (n[90] = k),
        (n[91] = A),
        (n[92] = j),
        (n[93] = V),
        (n[94] = P),
        (n[95] = F),
        (n[96] = I),
        (n[97] = L),
        (n[98] = H))
      : (H = n[98]),
    H
  );
}
function pe(e) {
  return `${e.tools.length} ${e.title.toLowerCase()}`;
}
function me(e) {
  let t = (0, G.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, q.jsxs)(q.Fragment, {
          children: [null, (0, q.jsx)(q.Fragment, { children: (0, q.jsx)(j, { ...e }) })],
        })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
function he(e) {
  let t = (0, G.c)(16),
    { appId: n, events: r, isAppDisabledWithoutRestriction: i, toolSections: a } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = {}), (t[0] = s)) : (s = t[0]);
  let [c, l] = (0, K.useState)(s),
    u;
  if (t[1] !== n || t[2] !== c || t[3] !== i || t[4] !== a) {
    let e;
    (t[6] !== n || t[7] !== c || t[8] !== i
      ? ((e = (e) => {
          let t = c[e.title] === !0;
          return (0, q.jsxs)(
            `div`,
            {
              className: `border-b border-border/70 last:border-b-0`,
              children: [
                (0, q.jsxs)(`button`, {
                  type: `button`,
                  className: `sticky top-0 z-10 flex w-full items-center justify-between bg-surface-secondary p-2.5 text-start text-base text-default`,
                  "aria-expanded": !t,
                  onClick: () => {
                    l((n) => ({ ...n, [e.title]: !t }));
                  },
                  children: [
                    (0, q.jsxs)(`span`, {
                      children: [
                        e.title,
                        (0, q.jsx)(`span`, { className: `ms-2 text-tertiary`, children: e.tools.length }),
                      ],
                    }),
                    (0, q.jsx)(_, {
                      className: t
                        ? `icon-xs shrink-0 -rotate-90 text-tertiary transition-transform`
                        : `icon-xs shrink-0 text-tertiary transition-transform`,
                    }),
                  ],
                }),
                t
                  ? null
                  : (0, q.jsx)(`div`, {
                      className: `divide-y divide-border/70`,
                      children: e.tools.map((e) =>
                        (0, q.jsxs)(
                          `div`,
                          {
                            className: b(
                              `grid grid-cols-[minmax(0,220px)_minmax(0,1fr)] gap-x-3 p-2.5`,
                              (e.disabledReason === `disabled_by_admin` ||
                                e.configRestriction != null ||
                                e.isEnabled === !1) &&
                                `opacity-60`,
                            ),
                            children: [
                              (0, q.jsxs)(`div`, {
                                className: `min-w-0 text-default`,
                                children: [
                                  (0, q.jsx)(W, { name: e.name }),
                                  (0, q.jsx)(H, { appId: n, isAppDisabledWithoutRestriction: i, tool: e }),
                                ],
                              }),
                              (0, q.jsx)(`div`, {
                                className: `text-base text-secondary`,
                                children: (0, q.jsx)(L, {
                                  className: `text-base`,
                                  components: { a: J },
                                  cwd: null,
                                  children: e.description,
                                }),
                              }),
                            ],
                          },
                          e.name,
                        ),
                      ),
                    }),
              ],
            },
            e.title,
          );
        }),
        (t[6] = n),
        (t[7] = c),
        (t[8] = i),
        (t[9] = e))
      : (e = t[9]),
      (u = a.map(e)),
      (t[1] = n),
      (t[2] = c),
      (t[3] = i),
      (t[4] = a),
      (t[5] = u));
  } else u = t[5];
  let d;
  t[10] !== r || t[11] !== a.length
    ? ((d =
        r.length > 0
          ? (0, q.jsxs)(`div`, {
              className: b(`border-b border-border/70`, a.length > 0 && `mt-4`),
              children: [
                (0, q.jsx)(`div`, {
                  className: `bg-surface-secondary p-2.5 text-base text-default`,
                  children: (0, q.jsx)(o, {
                    id: `skills.appsPage.toolsDialog.events`,
                    defaultMessage: `Events`,
                    description: `Heading for the events listed in the app tools dialog`,
                  }),
                }),
                (0, q.jsx)(`div`, { className: `divide-y divide-border/70`, children: r.map(ge) }),
              ],
            })
          : null),
      (t[10] = r),
      (t[11] = a.length),
      (t[12] = d))
    : (d = t[12]);
  let f;
  return (
    t[13] !== u || t[14] !== d
      ? ((f = (0, q.jsxs)(`div`, { className: `flex flex-col`, children: [u, d] })),
        (t[13] = u),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
function ge(e) {
  return (0, q.jsxs)(
    `div`,
    {
      className: `grid grid-cols-[minmax(0,220px)_minmax(0,1fr)] gap-x-3 p-2.5`,
      children: [
        (0, q.jsx)(`div`, { className: `min-w-0 text-default`, children: (0, q.jsx)(W, { name: e.name }) }),
        (0, q.jsx)(`div`, {
          className: `text-base text-secondary`,
          children: (0, q.jsx)(L, {
            className: `text-base`,
            components: { a: J },
            cwd: null,
            children: e.description,
          }),
        }),
      ],
    },
    e.name,
  );
}
function W(e) {
  let t = (0, G.c)(5),
    { name: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = (0, q.jsx)(`div`, { className: `truncate text-base`, children: n })), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] !== n || t[3] !== r
      ? ((i = (0, q.jsx)(w, { tooltipContent: n, openWhen: `trigger-overflows`, children: r })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = i))
      : (i = t[4]),
    i
  );
}
function _e(e) {
  let t = e.filter((e) => e.accessBadges.includes(`READ`));
  return [
    { title: `Write`, tools: e.filter((e) => !e.accessBadges.includes(`READ`)) },
    { title: `Read`, tools: t },
  ].flatMap((e) => (e.tools.length === 0 ? [] : [e]));
}
var G, K, q, J, Y;
function X() {
  return (X = e(() => {
    ((G = D()),
      B(),
      f(),
      v(),
      p(),
      (K = A()),
      S(),
      m(),
      z(),
      N(),
      T(),
      d(),
      l(),
      y(),
      g(),
      R(),
      I(),
      V(),
      P(),
      O(),
      F(),
      ue(),
      (q = k()),
      (J = M({
        conversationId: null,
        isBrowserEnabled: !1,
        openFileLinksInSidePanel: !1,
        openTarget: `external-browser`,
      })),
      (Y = r({
        disableApp: {
          id: `skills.appsPage.toolsDialog.disableApp`,
          defaultMessage: `Disable app`,
          description: `Tooltip label for disabling an app from the app tools modal`,
        },
        enableApp: {
          id: `skills.appsPage.toolsDialog.enableApp`,
          defaultMessage: `Enable app`,
          description: `Tooltip label for enabling an app from the app tools modal`,
        },
        unattributedDisablement: {
          id: `skills.appsPage.toolsDialog.unattributedDisablement`,
          defaultMessage: `This app is disabled`,
          description: `Neutral explanation when the server disables an app without exposing the responsible configuration or actor`,
        },
        loadingProjectSettings: {
          id: `skills.appsPage.toolsDialog.loadingProjectSettings`,
          defaultMessage: `Loading project settings…`,
          description: `Tooltip shown while effective app configuration is loading`,
        },
        disabledBadge: {
          id: `skills.appsPage.toolsDialog.disabledBadge`,
          defaultMessage: `Disabled`,
          description: `Badge shown when the selected app is disabled in the app tools modal`,
        },
        subtitle: {
          id: `skills.appsPage.toolsDialog.subtitle`,
          defaultMessage: `Tools for this app`,
          description: `Fallback subtitle in the app tools dialog when the app has no description`,
        },
        subtitleWithEvents: {
          id: `skills.appsPage.toolsDialog.subtitleWithEvents`,
          defaultMessage: `Tools and events for this app`,
          description: `Fallback subtitle in the app tools dialog when the app has events and no description`,
        },
      })));
  }))();
}
function ve(e) {
  let t = E(e);
  return t == null || (!s(t) && t !== `openai-primary-runtime`) ? null : `${Z}/${e}`;
}
var Z;
function Q() {
  return (Q = e(() => {
    (C(), (Z = `${new URL(n).origin}/plugins/share`));
  }))();
}
function ye({ localVersion: e, shareContext: t }) {
  return e != null && t?.remotePluginId != null && t.remoteVersion != null && x(e, t.remoteVersion) > 0;
}
function $() {
  return ($ = e(() => {
    C();
  }))();
}
export { fe as a, Q as i, $ as n, X as o, ve as r, ye as t };
//# sourceMappingURL=plugin-share-version-75947591e517.js.map
