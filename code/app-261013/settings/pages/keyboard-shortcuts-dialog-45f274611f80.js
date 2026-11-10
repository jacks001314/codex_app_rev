const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./chatgpt-keyboard-shortcuts-dialog-e602db2554fc.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./keyboard-shortcuts-settings-d2d4f6ef52f3.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./gate-c0654fbd7860.js",
      "./command-messages-54cbbed1e112.js",
      "./keyboard-shortcuts-search-input-24effdcb9c56.js",
      "./keyboard-shortcut-command-order-20a2fd5df6d6.js",
      "./command-row-7d549d934763.js",
      "./settings-row-disclosure-81330dc4d2f4.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  B4 as n,
  IDt as r,
  Iz as i,
  Lz as a,
  Pxt as o,
  VDt as s,
  Vxt as c,
  _O as l,
  cO as u,
  dO as d,
  fO as f,
  fPt as p,
  iw as m,
  jDt as h,
  lO as g,
  mO as _,
  oO as v,
  pPt as y,
  vO as b,
  vzt as x,
  xMt as S,
  yzt as C,
  z4 as w,
  zxt as T,
} from "./app-shared-bbfeca5e5737.js";
import {
  $lr as E,
  ARt as D,
  C5t as O,
  Dq as k,
  E$n as A,
  Ek as j,
  Eq as M,
  FEr as N,
  I3n as ee,
  ISn as te,
  LTn as P,
  Mjt as F,
  Njt as I,
  PEr as L,
  RTn as ne,
  T$n as re,
  T3n as ie,
  Tk as R,
  VSn as ae,
  bMr as oe,
  cMr as se,
  eDr as ce,
  eur as le,
  fMr as ue,
  fSn as z,
  i1n as B,
  jRt as V,
  n1n as H,
  nDr as U,
  o1n as de,
  oSn as fe,
  r1n as pe,
  rer as me,
  ter as he,
  uSn as ge,
  vSn as W,
  w5t as _e,
  ySn as ve,
} from "./app-initial-5851df3f6cb1.js";
import { n as ye, t as be } from "./gate-c0654fbd7860.js";
import { r as xe, t as Se } from "./command-messages-54cbbed1e112.js";
import { n as Ce, t as we } from "./keyboard-shortcuts-search-input-24effdcb9c56.js";
import { i as Te, n as Ee, r as De, t as Oe } from "./keyboard-shortcut-command-order-20a2fd5df6d6.js";
function ke({
  keymapState: e,
  registeredCommands: t,
  hasBaseCommandHandler: n,
  isCommandAvailable: r,
  platform: i,
}) {
  return ae.filter(te).flatMap((a) => {
    if (!r(a.id)) return [];
    let o = ge(a.id, e, i);
    return o.length === 0 || (a.kind === `webview` && !n(a.id) && (t[a.id]?.length ?? 0) === 0)
      ? []
      : [{ command: a, shortcutEntries: o }];
  });
}
function G() {
  return (G = e(() => {
    (W(), z());
  }))();
}
function Ae(e, t) {
  let n = t.trim(),
    r = e.filter(
      (e) =>
        e.id !== `personalitySettings` &&
        (n.length === 0 || [e.id, e.title, e.description].some((e) => k(e, n) > 0)),
    );
  return K.flatMap((e) => {
    let t = r.filter((t) => t.sectionKey === e);
    return t.length === 0 ? [] : [{ key: e, items: t }];
  });
}
function je(e) {
  return e.kind === `webview` && e.commandMenuGroupKey != null ? e.commandMenuGroupKey : `general`;
}
var K;
function q() {
  return (q = e(() => {
    (W(), M(), (K = [...ve, `general`]));
  }))();
}
function Me(e) {
  let t = (0, Y.c)(3),
    { onOpenChange: n } = e,
    r = c(ne) === `work`,
    i;
  return (
    t[0] !== r || t[1] !== n
      ? ((i = r ? (0, Z.jsx)(Q, { onOpenChange: n }) : (0, Z.jsx)(J, { onOpenChange: n })),
        (t[0] = r),
        (t[1] = n),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function J(e) {
  let t = (0, Y.c)(29),
    { onOpenChange: n } = e,
    r = s(),
    { platform: i } = le(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = { name: `browser.in-app` }), (t[0] = a))
    : (a = t[0]);
  let o = T(L, a).isCapable,
    l = c(se),
    u = c(de),
    d = U(be),
    f = c(F) != null,
    p;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = { name: `automations.local` }), (t[1] = p))
    : (p = t[1]);
  let m = T(L, p).isCapable,
    h;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = { name: `automations.cloud` }), (t[2] = h))
    : (h = t[2]);
  let g = T(L, h).isCapable,
    v = U(`1372061905`),
    y = U(`3009531526`),
    b = U(`983842163`),
    x = c(me),
    S = c(ie),
    C = U(`1532120159`),
    w = V(),
    E = H(u, `toggleDebugModal`) > 0,
    D = _e(),
    O = c(oe),
    k = c(fe),
    A;
  t[3] !== E ||
  t[4] !== o ||
  t[5] !== l ||
  t[6] !== d ||
  t[7] !== r ||
  t[8] !== g ||
  t[9] !== f ||
  t[10] !== v ||
  t[11] !== m ||
  t[12] !== C ||
  t[13] !== w ||
  t[14] !== b ||
  t[15] !== S ||
  t[16] !== y ||
  t[17] !== x ||
  t[18] !== k ||
  t[19] !== i ||
  t[20] !== D ||
  t[21] !== u ||
  t[22] !== O
    ? ((A =
        k == null
          ? null
          : ke({
              keymapState: k,
              registeredCommands: u,
              hasBaseCommandHandler: re,
              isCommandAvailable: (e) =>
                Te(e, {
                  allowDebugMenu: E,
                  browserEnabled: o,
                  commandAccess: { codexLocal: l, workLocal: O },
                  fileLanguageFeaturesEnabled: d,
                  isAutomationsEnabled: m || g,
                  isDictationShortcutEnabled: f,
                  isHotkeyWindowEnabled: v,
                  isSpotlightEnabled: y,
                  isScreenshotSelectionEnabled: b,
                  isUnifiedTabStripEnabled: x,
                  isSidebarCollapsible: S,
                  isPriorityFilterEnabled: D,
                  isRealtimeVoiceCommandEnabled: w,
                  modeSwitchAvailable: H(u, e) > 0,
                  platform: i,
                }),
              platform: i,
            })
              .sort(Pe)
              .map((e) => {
                let { command: t, shortcutEntries: n } = e,
                  i = Se(t, r, pe(u, t.id), C, x);
                return { id: t.id, ...i, shortcutLabels: n.map(Ne), sectionKey: je(t) };
              })),
      (t[3] = E),
      (t[4] = o),
      (t[5] = l),
      (t[6] = d),
      (t[7] = r),
      (t[8] = g),
      (t[9] = f),
      (t[10] = v),
      (t[11] = m),
      (t[12] = C),
      (t[13] = w),
      (t[14] = b),
      (t[15] = S),
      (t[16] = y),
      (t[17] = x),
      (t[18] = k),
      (t[19] = i),
      (t[20] = D),
      (t[21] = u),
      (t[22] = O),
      (t[23] = A))
    : (A = t[23]);
  let j = A,
    M;
  t[24] === j ? (M = t[25]) : ((M = (0, Z.jsx)(Fe, { items: j })), (t[24] = j), (t[25] = M));
  let N;
  return (
    t[26] !== n || t[27] !== M
      ? ((N = (0, Z.jsx)(_, { open: !0, onOpenChange: n, size: `wide`, children: M })),
        (t[26] = n),
        (t[27] = M),
        (t[28] = N))
      : (N = t[28]),
    N
  );
}
function Ne(e) {
  let { label: t } = e;
  return t;
}
function Pe(e, t) {
  return Oe(e.command, t.command);
}
function Fe(e) {
  let t = (0, Y.c)(26),
    { items: n } = e,
    [i, a] = (0, X.useState)(``),
    o,
    s,
    c,
    d,
    f,
    p,
    m,
    h,
    _;
  if (t[0] !== n || t[1] !== i) {
    let e = n == null ? null : Ae(n, i);
    ((s = v),
      (m = `tall`),
      t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((h = (0, Z.jsx)(u, {
            title: (0, Z.jsx)(l, {
              children: (0, Z.jsx)(r, {
                id: `keyboardShortcutsDialog.title`,
                defaultMessage: `Keyboard shortcuts`,
                description: `Title for the active keyboard shortcuts dialog`,
              }),
            }),
          })),
          (t[11] = h))
        : (h = t[11]),
      (_ =
        n == null
          ? null
          : (0, Z.jsx)(g, {
              className: `pb-3`,
              children: (0, Z.jsx)(we, { autoFocus: !0, value: i, onValueChange: a }),
            })),
      (o = g),
      (c = `min-h-0 flex-1 overflow-y-auto pe-3 pt-0!`),
      t[12] === n
        ? (d = t[13])
        : ((d =
            n == null
              ? (0, Z.jsx)(`div`, {
                  className: `py-1 text-sm text-secondary`,
                  children: (0, Z.jsx)(r, {
                    id: `keyboardShortcutsDialog.loading`,
                    defaultMessage: `Loading shortcuts…`,
                    description: `Loading label while active keyboard shortcuts are being fetched`,
                  }),
                })
              : null),
          (t[12] = n),
          (t[13] = d)),
      (f =
        e?.length === 0
          ? (0, Z.jsx)(`div`, {
              className: `py-1 text-sm text-secondary`,
              children:
                i.trim().length === 0
                  ? (0, Z.jsx)(r, {
                      id: `keyboardShortcutsDialog.empty`,
                      defaultMessage: `No active shortcuts`,
                      description: `Empty state shown when no active shortcuts are available`,
                    })
                  : (0, Z.jsx)(r, {
                      id: `keyboardShortcutsDialog.noMatches`,
                      defaultMessage: `No matching shortcuts`,
                      description: `Empty state shown when active shortcut search has no matches`,
                    }),
            })
          : null),
      (p = e?.map(Ie)),
      (t[0] = n),
      (t[1] = i),
      (t[2] = o),
      (t[3] = s),
      (t[4] = c),
      (t[5] = d),
      (t[6] = f),
      (t[7] = p),
      (t[8] = m),
      (t[9] = h),
      (t[10] = _));
  } else
    ((o = t[2]),
      (s = t[3]),
      (c = t[4]),
      (d = t[5]),
      (f = t[6]),
      (p = t[7]),
      (m = t[8]),
      (h = t[9]),
      (_ = t[10]));
  let y;
  t[14] !== o || t[15] !== c || t[16] !== d || t[17] !== f || t[18] !== p
    ? ((y = (0, Z.jsxs)(o, { className: c, children: [d, f, p] })),
      (t[14] = o),
      (t[15] = c),
      (t[16] = d),
      (t[17] = f),
      (t[18] = p),
      (t[19] = y))
    : (y = t[19]);
  let b;
  return (
    t[20] !== s || t[21] !== m || t[22] !== h || t[23] !== _ || t[24] !== y
      ? ((b = (0, Z.jsxs)(s, { size: m, children: [h, _, y] })),
        (t[20] = s),
        (t[21] = m),
        (t[22] = h),
        (t[23] = _),
        (t[24] = y),
        (t[25] = b))
      : (b = t[25]),
    b
  );
}
function Ie(e) {
  return (0, Z.jsxs)(
    R,
    {
      children: [
        (0, Z.jsx)(R.Header, { title: (0, Z.jsx)(ze, { sectionKey: e.key }) }),
        (0, Z.jsx)(R.Content, { children: e.items.map(Le) }),
      ],
    },
    e.key,
  );
}
function Le(e) {
  return (0, Z.jsx)(
    t,
    {
      compactLabelInset: !1,
      label: e.title,
      variant: `compact`,
      children: (0, Z.jsx)(d, { children: e.shortcutLabels.map(Re) }),
    },
    e.id,
  );
}
function Re(e) {
  return (0, Z.jsx)(i, { keysLabel: e }, e);
}
function ze(e) {
  let t = (0, Y.c)(8),
    { sectionKey: n } = e;
  switch (n) {
    case `thread`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(r, {
              id: `keyboardShortcutsDialog.section.thread`,
              defaultMessage: `Chat`,
              description: `Section title for active task keyboard shortcuts`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `navigation`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(r, {
              id: `keyboardShortcutsDialog.section.navigation`,
              defaultMessage: `Navigation`,
              description: `Section title for active navigation keyboard shortcuts`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `panels`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(r, {
              id: `keyboardShortcutsDialog.section.panels`,
              defaultMessage: `Panels`,
              description: `Section title for active panel keyboard shortcuts`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `workspace`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(r, {
              id: `keyboardShortcutsDialog.section.workspace`,
              defaultMessage: `Project`,
              description: `Section title for active project keyboard shortcuts`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `skills`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(r, {
              id: `keyboardShortcutsDialog.section.skills`,
              defaultMessage: `Skills`,
              description: `Section title for active skill keyboard shortcuts`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `configure`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(r, {
              id: `keyboardShortcutsDialog.section.configure`,
              defaultMessage: `Configure`,
              description: `Section title for active configuration keyboard shortcuts`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `app`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(r, {
              id: `keyboardShortcutsDialog.section.app`,
              defaultMessage: `App`,
              description: `Section title for active app keyboard shortcuts`,
            })),
            (t[6] = e))
          : (e = t[6]),
        e
      );
    }
    case `general`: {
      let e;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(r, {
              id: `keyboardShortcutsDialog.section.general`,
              defaultMessage: `General`,
              description: `Section title for general active keyboard shortcuts`,
            })),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
  }
}
var Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((Y = x()),
      o(),
      (X = C()),
      h(),
      N(),
      ee(),
      ue(),
      G(),
      z(),
      B(),
      xe(),
      A(),
      b(),
      f(),
      a(),
      w(),
      I(),
      E(),
      De(),
      Ee(),
      D(),
      ye(),
      j(),
      m(),
      O(),
      P(),
      ce(),
      he(),
      q(),
      Ce(),
      (Z = S()),
      y(),
      (Q = n(
        async () =>
          (
            await p(
              async () => {
                let { ChatGptKeyboardShortcutsDialog: e } = await import(
                  `./chatgpt-keyboard-shortcuts-dialog-e602db2554fc.js`
                );
                return { ChatGptKeyboardShortcutsDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
              import.meta.url,
            )
          ).ChatGptKeyboardShortcutsDialog,
      )));
  }))();
}
$();
export { Me as KeyboardShortcutsDialog };
//# sourceMappingURL=keyboard-shortcuts-dialog-45f274611f80.js.map
