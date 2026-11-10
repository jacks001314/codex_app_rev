const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./chatgpt-keyboard-shortcuts-dialog-82be1f823a9e.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./keyboard-shortcuts-settings-e8d1446aff5a.js",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./gate-c0654fbd7860.js",
      "./command-messages-4a21e8f833a2.js",
      "./keyboard-shortcuts-search-input-f2d78543b220.js",
      "./keyboard-shortcut-command-order-b9566a8645a1.js",
      "./command-row-96aff854219b.js",
      "./settings-row-disclosure-4167ebc9233a.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  F3 as t,
  FBt as n,
  HO as r,
  I3 as i,
  IO as a,
  JO as o,
  LNt as s,
  MB as c,
  OFt as l,
  PBt as u,
  RO as d,
  VO as f,
  WO as p,
  XOt as m,
  ZSt as h,
  aw as g,
  iCt as _,
  jB as v,
  kFt as y,
  nCt as b,
  okt as ee,
  qO as x,
  tkt as S,
  uw as C,
  zO as w,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $2n as te,
  A4n as T,
  Cjr as E,
  F4n as D,
  G9t as ne,
  GIr as re,
  Hpr as O,
  J_t as k,
  LFt as A,
  LIr as j,
  LTn as M,
  M4n as N,
  NIr as ie,
  RFt as ae,
  RTn as P,
  TOt as oe,
  Upr as se,
  W9t as ce,
  Y_t as le,
  c7n as ue,
  cA as de,
  e4n as F,
  hTn as I,
  j4n as L,
  njr as R,
  oEn as z,
  okn as B,
  sA as V,
  skn as H,
  tEn as fe,
  tjr as U,
  wOt as pe,
  xTn as W,
  xjr as me,
  y7n as he,
  yTn as ge,
} from "./app-initial-ad16eaadf81f.js";
import { n as _e, t as ve } from "./gate-c0654fbd7860.js";
import { r as ye, t as be } from "./command-messages-4a21e8f833a2.js";
import { n as xe, t as Se } from "./keyboard-shortcuts-search-input-f2d78543b220.js";
import { i as Ce, n as we, r as Te, t as Ee } from "./keyboard-shortcut-command-order-b9566a8645a1.js";
function De({
  keymapState: e,
  registeredCommands: t,
  hasBaseCommandHandler: n,
  isCommandAvailable: r,
  platform: i,
}) {
  return z.filter(fe).flatMap((a) => {
    if (!r(a.id)) return [];
    let o = ge(a.id, e, i);
    return o.length === 0 || (a.kind === `webview` && !n(a.id) && (t[a.id]?.length ?? 0) === 0)
      ? []
      : [{ command: a, shortcutEntries: o }];
  });
}
function G() {
  return (G = e(() => {
    (M(), W());
  }))();
}
function Oe(e, t) {
  let n = t.trim(),
    r = e.filter(
      (e) =>
        e.id !== `personalitySettings` &&
        (n.length === 0 || [e.id, e.title, e.description].some((e) => le(e, n) > 0)),
    );
  return K.flatMap((e) => {
    let t = r.filter((t) => t.sectionKey === e);
    return t.length === 0 ? [] : [{ key: e, items: t }];
  });
}
function ke(e) {
  return e.kind === `webview` && e.commandMenuGroupKey != null ? e.commandMenuGroupKey : `general`;
}
var K;
function q() {
  return (q = e(() => {
    (M(), k(), (K = [...P, `general`]));
  }))();
}
function Ae(e) {
  let t = (0, Y.c)(3),
    { onOpenChange: n } = e,
    r = _(H) === `work`,
    i;
  return (
    t[0] !== r || t[1] !== n
      ? ((i = r ? (0, Z.jsx)(Q, { onOpenChange: n }) : (0, Z.jsx)(je, { onOpenChange: n })),
        (t[0] = r),
        (t[1] = n),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function je(e) {
  let t = (0, Y.c)(28),
    { onOpenChange: n } = e,
    r = ee(),
    { platform: i } = se(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = { name: `browser.in-app` }), (t[0] = a))
    : (a = t[0]);
  let o = b(U, a).isCapable,
    s = _(ie),
    c = _(D),
    l = E(ve),
    u = _(pe) != null,
    d;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = { name: `automations.local` }), (t[1] = d))
    : (d = t[1]);
  let f = b(U, d).isCapable,
    m;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = { name: `automations.cloud` }), (t[2] = m))
    : (m = t[2]);
  let h = b(U, m).isCapable,
    g = E(`1372061905`),
    v = E(`3009531526`),
    y = E(`983842163`),
    x = _(ue),
    S = E(`1532120159`),
    C = ae(),
    w = T(c, `toggleDebugModal`) > 0,
    O = ne(),
    k = _(re),
    A = _(I),
    j;
  t[3] !== w ||
  t[4] !== o ||
  t[5] !== s ||
  t[6] !== l ||
  t[7] !== r ||
  t[8] !== h ||
  t[9] !== u ||
  t[10] !== g ||
  t[11] !== f ||
  t[12] !== S ||
  t[13] !== C ||
  t[14] !== y ||
  t[15] !== x ||
  t[16] !== v ||
  t[17] !== A ||
  t[18] !== i ||
  t[19] !== O ||
  t[20] !== c ||
  t[21] !== k
    ? ((j =
        A == null
          ? null
          : De({
              keymapState: A,
              registeredCommands: c,
              hasBaseCommandHandler: te,
              isCommandAvailable: (e) =>
                Ce(e, {
                  allowDebugMenu: w,
                  browserEnabled: o,
                  commandAccess: { codexLocal: s, workLocal: k },
                  fileLanguageFeaturesEnabled: l,
                  isAutomationsEnabled: f || h,
                  isDictationShortcutEnabled: u,
                  isHotkeyWindowEnabled: g,
                  isSpotlightEnabled: v,
                  isScreenshotSelectionEnabled: y,
                  isSidebarCollapsible: x,
                  isPriorityFilterEnabled: O,
                  isRealtimeVoiceCommandEnabled: C,
                  modeSwitchAvailable: T(c, e) > 0,
                  platform: i,
                }),
              platform: i,
            })
              .sort(Ne)
              .map((e) => {
                let { command: t, shortcutEntries: n } = e,
                  i = be(t, r, L(c, t.id), S);
                return { id: t.id, ...i, shortcutLabels: n.map(Me), sectionKey: ke(t) };
              })),
      (t[3] = w),
      (t[4] = o),
      (t[5] = s),
      (t[6] = l),
      (t[7] = r),
      (t[8] = h),
      (t[9] = u),
      (t[10] = g),
      (t[11] = f),
      (t[12] = S),
      (t[13] = C),
      (t[14] = y),
      (t[15] = x),
      (t[16] = v),
      (t[17] = A),
      (t[18] = i),
      (t[19] = O),
      (t[20] = c),
      (t[21] = k),
      (t[22] = j))
    : (j = t[22]);
  let M = j,
    N;
  t[23] === M ? (N = t[24]) : ((N = (0, Z.jsx)(Pe, { items: M })), (t[23] = M), (t[24] = N));
  let P;
  return (
    t[25] !== n || t[26] !== N
      ? ((P = (0, Z.jsx)(p, { open: !0, onOpenChange: n, size: `wide`, children: N })),
        (t[25] = n),
        (t[26] = N),
        (t[27] = P))
      : (P = t[27]),
    P
  );
}
function Me(e) {
  let { label: t } = e;
  return t;
}
function Ne(e, t) {
  return Ee(e.command, t.command);
}
function Pe(e) {
  let t = (0, Y.c)(26),
    { items: n } = e,
    [r, i] = (0, X.useState)(``),
    o,
    s,
    c,
    l,
    u,
    f,
    p,
    m,
    h;
  if (t[0] !== n || t[1] !== r) {
    let e = n == null ? null : Oe(n, r);
    ((s = a),
      (p = `tall`),
      t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((m = (0, Z.jsx)(d, {
            title: (0, Z.jsx)(x, {
              children: (0, Z.jsx)(S, {
                id: `keyboardShortcutsDialog.title`,
                defaultMessage: `Keyboard shortcuts`,
                description: `Title for the active keyboard shortcuts dialog`,
              }),
            }),
          })),
          (t[11] = m))
        : (m = t[11]),
      (h =
        n == null
          ? null
          : (0, Z.jsx)(w, {
              className: `pb-3`,
              children: (0, Z.jsx)(Se, { autoFocus: !0, value: r, onValueChange: i }),
            })),
      (o = w),
      (c = `min-h-0 flex-1 overflow-y-auto pe-3 pt-0!`),
      t[12] === n
        ? (l = t[13])
        : ((l =
            n == null
              ? (0, Z.jsx)(`div`, {
                  className: `py-1 text-sm text-secondary`,
                  children: (0, Z.jsx)(S, {
                    id: `keyboardShortcutsDialog.loading`,
                    defaultMessage: `Loading shortcuts…`,
                    description: `Loading label while active keyboard shortcuts are being fetched`,
                  }),
                })
              : null),
          (t[12] = n),
          (t[13] = l)),
      (u =
        e?.length === 0
          ? (0, Z.jsx)(`div`, {
              className: `py-1 text-sm text-secondary`,
              children:
                r.trim().length === 0
                  ? (0, Z.jsx)(S, {
                      id: `keyboardShortcutsDialog.empty`,
                      defaultMessage: `No active shortcuts`,
                      description: `Empty state shown when no active shortcuts are available`,
                    })
                  : (0, Z.jsx)(S, {
                      id: `keyboardShortcutsDialog.noMatches`,
                      defaultMessage: `No matching shortcuts`,
                      description: `Empty state shown when active shortcut search has no matches`,
                    }),
            })
          : null),
      (f = e?.map(Fe)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o),
      (t[3] = s),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u),
      (t[7] = f),
      (t[8] = p),
      (t[9] = m),
      (t[10] = h));
  } else
    ((o = t[2]),
      (s = t[3]),
      (c = t[4]),
      (l = t[5]),
      (u = t[6]),
      (f = t[7]),
      (p = t[8]),
      (m = t[9]),
      (h = t[10]));
  let g;
  t[14] !== o || t[15] !== c || t[16] !== l || t[17] !== u || t[18] !== f
    ? ((g = (0, Z.jsxs)(o, { className: c, children: [l, u, f] })),
      (t[14] = o),
      (t[15] = c),
      (t[16] = l),
      (t[17] = u),
      (t[18] = f),
      (t[19] = g))
    : (g = t[19]);
  let _;
  return (
    t[20] !== s || t[21] !== p || t[22] !== m || t[23] !== h || t[24] !== g
      ? ((_ = (0, Z.jsxs)(s, { size: p, children: [m, h, g] })),
        (t[20] = s),
        (t[21] = p),
        (t[22] = m),
        (t[23] = h),
        (t[24] = g),
        (t[25] = _))
      : (_ = t[25]),
    _
  );
}
function Fe(e) {
  return (0, Z.jsxs)(
    V,
    {
      children: [
        (0, Z.jsx)(V.Header, { title: (0, Z.jsx)(Le, { sectionKey: e.key }) }),
        (0, Z.jsx)(V.Content, { children: e.items.map(J) }),
      ],
    },
    e.key,
  );
}
function J(e) {
  return (0, Z.jsx)(
    g,
    {
      compactLabelInset: !1,
      label: e.title,
      variant: `compact`,
      children: (0, Z.jsx)(f, { children: e.shortcutLabels.map(Ie) }),
    },
    e.id,
  );
}
function Ie(e) {
  return (0, Z.jsx)(v, { keysLabel: e }, e);
}
function Le(e) {
  let t = (0, Y.c)(8),
    { sectionKey: n } = e;
  switch (n) {
    case `thread`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(S, {
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
          ? ((e = (0, Z.jsx)(S, {
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
          ? ((e = (0, Z.jsx)(S, {
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
          ? ((e = (0, Z.jsx)(S, {
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
          ? ((e = (0, Z.jsx)(S, {
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
          ? ((e = (0, Z.jsx)(S, {
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
          ? ((e = (0, Z.jsx)(S, {
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
          ? ((e = (0, Z.jsx)(S, {
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
    ((Y = u()),
      h(),
      (X = n()),
      m(),
      R(),
      he(),
      j(),
      G(),
      W(),
      N(),
      ye(),
      F(),
      o(),
      r(),
      c(),
      t(),
      oe(),
      O(),
      Te(),
      we(),
      A(),
      _e(),
      de(),
      C(),
      ce(),
      B(),
      me(),
      q(),
      xe(),
      (Z = s()),
      y(),
      (Q = i(
        async () =>
          (
            await l(
              async () => {
                let { ChatGptKeyboardShortcutsDialog: e } = await import(
                  `./chatgpt-keyboard-shortcuts-dialog-82be1f823a9e.js`
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
export { Ae as KeyboardShortcutsDialog };
//# sourceMappingURL=keyboard-shortcuts-dialog-62a4b29b8155.js.map
