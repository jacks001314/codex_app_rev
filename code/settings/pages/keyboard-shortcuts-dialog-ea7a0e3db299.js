import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $rt as n,
  Amn as r,
  Byt as i,
  Cpn as a,
  EK as o,
  Em as s,
  F3t as c,
  F_ as l,
  H7 as u,
  J7 as d,
  JI as f,
  Jrt as p,
  K7 as m,
  Ku as h,
  Mm as g,
  N3t as _,
  O3t as v,
  Opn as ee,
  P_ as y,
  Qu as b,
  RK as x,
  S_ as S,
  Spn as C,
  TK as w,
  U7 as T,
  UI as te,
  UK as E,
  X7 as D,
  XI as O,
  Xit as k,
  Xrt as A,
  Xu as j,
  Yit as M,
  Zrt as N,
  Zu as P,
  aYt as F,
  cKt as ne,
  do as re,
  eit as I,
  fKt as L,
  hmn as ie,
  iit as ae,
  kmn as R,
  mR as z,
  pR as B,
  q7 as V,
  rit as H,
  sYt as U,
  tit as W,
  uo as G,
  w_ as K,
  yKt as q,
  zyt as J,
} from "./app-initial-f094ef01c64d.js";
import { n as oe, t as se } from "./gate-04dc472e6f9b.js";
import { n as ce, t as le } from "./keyboard-shortcuts-search-input-be03b5a70e1b.js";
import {
  i as ue,
  n as de,
  r as fe,
  t as pe,
} from "./keyboard-shortcut-command-order-d509233d7b05.js";
function me({
  keymapState: e,
  registeredCommands: t,
  hasBaseCommandHandler: n,
  isCommandAvailable: r,
  platform: i,
}) {
  return E.filter(x).flatMap((a) => {
    if (!r(a.id)) return [];
    let o = f(a.id, e, i);
    return o.length === 0 || (a.kind === `webview` && !n(a.id) && (t[a.id]?.length ?? 0) === 0)
      ? []
      : [{ command: a, shortcutEntries: o }];
  });
}
var he = e(() => {
  (w(), O());
});
function ge(e, t) {
  let n = t.trim(),
    r = e.filter(
      (e) =>
        e.id !== `personalitySettings` &&
        (n.length === 0 || [e.id, e.title, e.description].some((e) => l(e, n) > 0)),
    );
  return Y.flatMap((e) => {
    let t = r.filter((t) => t.sectionKey === e);
    return t.length === 0 ? [] : [{ key: e, items: t }];
  });
}
function _e(e) {
  return e.kind === `webview` && e.commandMenuGroupKey != null ? e.commandMenuGroupKey : `general`;
}
var Y,
  ve = e(() => {
    (w(), y(), (Y = [...o, `general`]));
  });
function ye(e) {
  let t = (0, Z.c)(29),
    { onOpenChange: n } = e,
    r = ee(),
    { platform: a } = i(),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { name: `browser.in-app` }), (t[0] = o))
    : (o = t[0]);
  let s = _(B, o).isCapable,
    l = c(ne),
    d = c(D),
    f = U(se),
    p;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = { name: `dictation.composer` }), (t[1] = p))
    : (p = t[1]);
  let { isCapable: h } = _(B, p),
    v;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = { name: `dictation.global` }), (t[2] = v))
    : (v = t[2]);
  let { isCapable: y } = _(B, v),
    b;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = { name: `automations.local` }), (t[3] = b))
    : (b = t[3]);
  let x = _(B, b).isCapable,
    C;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = { name: `automations.cloud` }), (t[4] = C))
    : (C = t[4]);
  let w = _(B, C).isCapable,
    T = U(`1372061905`),
    E = U(`3528415127`),
    O = U(`1532120159`),
    k = re(),
    A = m(d, `toggleDebugModal`) > 0,
    j = g(),
    M = c(q),
    N = c(te),
    P;
  t[5] !== A ||
  t[6] !== s ||
  t[7] !== l ||
  t[8] !== f ||
  t[9] !== r ||
  t[10] !== w ||
  t[11] !== h ||
  t[12] !== y ||
  t[13] !== T ||
  t[14] !== x ||
  t[15] !== O ||
  t[16] !== k ||
  t[17] !== E ||
  t[18] !== N ||
  t[19] !== a ||
  t[20] !== j ||
  t[21] !== d ||
  t[22] !== M
    ? ((P =
        N == null
          ? null
          : me({
              keymapState: N,
              registeredCommands: d,
              hasBaseCommandHandler: u,
              isCommandAvailable: (e) =>
                ue(e, {
                  allowDebugMenu: A,
                  browserEnabled: s,
                  commandAccess: { codexLocal: l, workLocal: M },
                  fileLanguageFeaturesEnabled: f,
                  isAutomationsEnabled: x || w,
                  isDictationEnabled: h,
                  isGlobalDictationEnabled: y,
                  isHotkeyWindowEnabled: T,
                  isUnifiedTabStripEnabled: E,
                  isPriorityFilterEnabled: j,
                  isRealtimeVoiceCommandEnabled: k,
                  modeSwitchAvailable: m(d, e) > 0,
                  platform: a,
                }),
              platform: a,
            })
              .sort(xe)
              .map((e) => {
                let { command: t, shortcutEntries: n } = e,
                  i = S(t, r, V(d, t.id), O);
                return { id: t.id, ...i, shortcutLabels: n.map(be), sectionKey: _e(t) };
              })),
      (t[5] = A),
      (t[6] = s),
      (t[7] = l),
      (t[8] = f),
      (t[9] = r),
      (t[10] = w),
      (t[11] = h),
      (t[12] = y),
      (t[13] = T),
      (t[14] = x),
      (t[15] = O),
      (t[16] = k),
      (t[17] = E),
      (t[18] = N),
      (t[19] = a),
      (t[20] = j),
      (t[21] = d),
      (t[22] = M),
      (t[23] = P))
    : (P = t[23]);
  let F = P,
    I;
  t[24] === F ? (I = t[25]) : ((I = (0, $.jsx)(Se, { items: F })), (t[24] = F), (t[25] = I));
  let L;
  return (
    t[26] !== n || t[27] !== I
      ? ((L = (0, $.jsx)(W, { open: !0, onOpenChange: n, size: `wide`, children: I })),
        (t[26] = n),
        (t[27] = I),
        (t[28] = L))
      : (L = t[28]),
    L
  );
}
function be(e) {
  let { label: t } = e;
  return t;
}
function xe(e, t) {
  return pe(e.command, t.command);
}
function Se(e) {
  let t = (0, Z.c)(26),
    { items: n } = e,
    [r, i] = (0, Q.useState)(``),
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    m,
    h;
  if (t[0] !== n || t[1] !== r) {
    let e = n == null ? null : ge(n, r);
    ((s = p),
      (f = `tall`),
      t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((m = (0, $.jsx)(A, {
            title: (0, $.jsx)(H, {
              children: (0, $.jsx)(a, {
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
          : (0, $.jsx)(N, {
              className: `pb-3`,
              children: (0, $.jsx)(le, { autoFocus: !0, value: r, onValueChange: i }),
            })),
      (o = N),
      (c = `min-h-0 flex-1 overflow-y-auto pe-3 pt-0!`),
      t[12] === n
        ? (l = t[13])
        : ((l =
            n == null
              ? (0, $.jsx)(`div`, {
                  className: `py-1 text-sm text-secondary`,
                  children: (0, $.jsx)(a, {
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
          ? (0, $.jsx)(`div`, {
              className: `py-1 text-sm text-secondary`,
              children:
                r.trim().length === 0
                  ? (0, $.jsx)(a, {
                      id: `keyboardShortcutsDialog.empty`,
                      defaultMessage: `No active shortcuts`,
                      description: `Empty state shown when no active shortcuts are available`,
                    })
                  : (0, $.jsx)(a, {
                      id: `keyboardShortcutsDialog.noMatches`,
                      defaultMessage: `No matching shortcuts`,
                      description: `Empty state shown when active shortcut search has no matches`,
                    }),
            })
          : null),
      (d = e?.map(Ce)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o),
      (t[3] = s),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u),
      (t[7] = d),
      (t[8] = f),
      (t[9] = m),
      (t[10] = h));
  } else
    ((o = t[2]),
      (s = t[3]),
      (c = t[4]),
      (l = t[5]),
      (u = t[6]),
      (d = t[7]),
      (f = t[8]),
      (m = t[9]),
      (h = t[10]));
  let g;
  t[14] !== o || t[15] !== c || t[16] !== l || t[17] !== u || t[18] !== d
    ? ((g = (0, $.jsxs)(o, { className: c, children: [l, u, d] })),
      (t[14] = o),
      (t[15] = c),
      (t[16] = l),
      (t[17] = u),
      (t[18] = d),
      (t[19] = g))
    : (g = t[19]);
  let _;
  return (
    t[20] !== s || t[21] !== f || t[22] !== m || t[23] !== h || t[24] !== g
      ? ((_ = (0, $.jsxs)(s, { size: f, children: [m, h, g] })),
        (t[20] = s),
        (t[21] = f),
        (t[22] = m),
        (t[23] = h),
        (t[24] = g),
        (t[25] = _))
      : (_ = t[25]),
    _
  );
}
function Ce(e) {
  return (0, $.jsxs)(
    P,
    {
      children: [
        (0, $.jsx)(P.Header, { title: (0, $.jsx)(Te, { sectionKey: e.key }) }),
        (0, $.jsx)(P.Content, { children: e.items.map(X) }),
      ],
    },
    e.key,
  );
}
function X(e) {
  return (0, $.jsx)(
    h,
    {
      compactLabelInset: !1,
      label: e.title,
      variant: `compact`,
      children: (0, $.jsx)(n, { children: e.shortcutLabels.map(we) }),
    },
    e.id,
  );
}
function we(e) {
  return (0, $.jsx)(M, { keysLabel: e }, e);
}
function Te(e) {
  let t = (0, Z.c)(8),
    { sectionKey: n } = e;
  switch (n) {
    case `thread`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(a, {
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
          ? ((e = (0, $.jsx)(a, {
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
          ? ((e = (0, $.jsx)(a, {
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
          ? ((e = (0, $.jsx)(a, {
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
          ? ((e = (0, $.jsx)(a, {
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
          ? ((e = (0, $.jsx)(a, {
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
          ? ((e = (0, $.jsx)(a, {
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
          ? ((e = (0, $.jsx)(a, {
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
var Z, Q, $;
e(() => {
  ((Z = R()),
    v(),
    (Q = t(r(), 1)),
    C(),
    z(),
    L(),
    he(),
    O(),
    d(),
    K(),
    T(),
    ae(),
    I(),
    k(),
    J(),
    fe(),
    de(),
    G(),
    oe(),
    b(),
    j(),
    s(),
    F(),
    ve(),
    ce(),
    ($ = ie()));
})();
export { ye as KeyboardShortcutsDialog };
//# sourceMappingURL=keyboard-shortcuts-dialog-ea7a0e3db299.js.map
