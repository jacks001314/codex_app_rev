import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $ct as n,
  $nt as r,
  ADt as i,
  AO as a,
  BV as o,
  CO as s,
  Cot as c,
  Hnt as l,
  IDt as u,
  Ixt as d,
  JC as f,
  MV as p,
  NV as m,
  Pxt as h,
  TJ as g,
  TO as _,
  VDt as v,
  Vxt as y,
  Wnt as b,
  XO as x,
  ZO as S,
  Zct as C,
  _Mt as w,
  _O as T,
  cO as E,
  cz as D,
  fO as ee,
  gMt as te,
  gO as ne,
  irt as re,
  iw as O,
  jDt as k,
  lO as A,
  lrt as ie,
  mO as ae,
  nst as oe,
  oO as j,
  oSt as se,
  qC as ce,
  qnt as le,
  rst as M,
  sO as ue,
  srt as N,
  sz as de,
  t3 as P,
  tst as F,
  tw as fe,
  vO as I,
  vzt as L,
  wot as R,
  xMt as pe,
  yzt as z,
  zxt as me,
} from "./app-shared-bbfeca5e5737.js";
import {
  $lr as he,
  ARt as ge,
  ASn as _e,
  BPr as B,
  C5t as ve,
  Dq as ye,
  Ek as V,
  Eq as H,
  FEr as be,
  HPr as xe,
  I3n as Se,
  ISn as Ce,
  LTn as we,
  Mjt as Te,
  NC as U,
  Njt as W,
  PEr as Ee,
  QP as G,
  RTn as De,
  T3n as Oe,
  Tk as K,
  VSn as q,
  _F as ke,
  _Sn as Ae,
  bMr as je,
  cMr as Me,
  eDr as Ne,
  eF as Pe,
  eur as Fe,
  fMr as Ie,
  fSn as J,
  gSn as Le,
  hF as Re,
  hSn as ze,
  hp as Be,
  i1n as Ve,
  jC as He,
  jRt as Ue,
  mF as We,
  mSn as Ge,
  mp as Ke,
  n1n as qe,
  nDr as Je,
  o1n as Ye,
  oSn as Xe,
  pF as Ze,
  r1n as Qe,
  rer as $e,
  sSn as et,
  tF as tt,
  ter as nt,
  uSn as rt,
  vSn as it,
  w5t as at,
} from "./app-initial-5851df3f6cb1.js";
import { D_ as ot, E_ as st, h_ as ct, m_ as lt } from "./app-primary-fe8a450b3b04.js";
import { n as ut, t as dt } from "./gate-c0654fbd7860.js";
import { r as ft, t as pt } from "./command-messages-54cbbed1e112.js";
import { n as mt, t as ht } from "./keyboard-shortcuts-search-input-24effdcb9c56.js";
import { a as gt, n as _t, r as vt, t as yt } from "./keyboard-shortcut-command-order-20a2fd5df6d6.js";
import { n as bt, t as xt } from "./command-row-7d549d934763.js";
import { n as St, t as Ct } from "./settings-row-disclosure-81330dc4d2f4.js";
function wt(e) {
  let n = (0, Tt.c)(14),
    { shortcut: r, singleTapShortcut: i, searching: a } = e,
    s = y(Te),
    [c, l] = (0, Et.useState)(!1),
    d = (0, Et.useId)(),
    f = a ? i : null,
    p;
  n[0] !== d || n[1] !== c || n[2] !== a || n[3] !== i
    ? ((p =
        i != null && !a
          ? (0, Y.jsx)(Ct, {
              content: i,
              contentId: d,
              expanded: c,
              children: (0, Y.jsx)(fe, {
                control: null,
                size: `compact`,
                label: (0, Y.jsxs)(t, {
                  "aria-controls": d,
                  "aria-expanded": c,
                  color: `ghostTertiary`,
                  radius: `small`,
                  size: `inline`,
                  onClick: () => l(!c),
                  children: [
                    c ? (0, Y.jsx)(m, {}) : (0, Y.jsx)(o, {}),
                    (0, Y.jsx)(u, {
                      id: `settings.keyboardShortcuts.dictation.advanced`,
                      defaultMessage: `Advanced`,
                      description: `Expands the optional single-tap dictation shortcut in keyboard shortcut settings`,
                    }),
                  ],
                }),
              }),
            })
          : null),
      (n[0] = d),
      (n[1] = c),
      (n[2] = a),
      (n[3] = i),
      (n[4] = p))
    : (p = n[4]);
  let h;
  n[5] !== r || n[6] !== f || n[7] !== p
    ? ((h = (0, Y.jsxs)(ce, { children: [r, f, p] })), (n[5] = r), (n[6] = f), (n[7] = p), (n[8] = h))
    : (h = n[8]);
  let g;
  n[9] === s
    ? (g = n[10])
    : ((g = (0, Y.jsx)(K.Footer, {
        children:
          s === `app`
            ? (0, Y.jsx)(u, {
                id: `settings.keyboardShortcuts.dictation.appHint`,
                defaultMessage: `Press Esc to cancel a recording`,
                description: `Explains that Escape cancels a dictation recording`,
              })
            : (0, Y.jsx)(u, {
                id: `settings.keyboardShortcuts.dictation.hint`,
                defaultMessage: `Works in any app. Press Esc to cancel a recording.`,
                description: `Explains that the dictation shortcuts work system-wide and Escape cancels recording`,
              }),
      })),
      (n[9] = s),
      (n[10] = g));
  let _;
  return (
    n[11] !== h || n[12] !== g
      ? ((_ = (0, Y.jsxs)(K, { className: `select-none`, children: [h, g] })),
        (n[11] = h),
        (n[12] = g),
        (n[13] = _))
      : (_ = n[13]),
    _
  );
}
var Tt, Et, Y;
function Dt() {
  return (Dt = e(() => {
    ((Tt = L()), h(), (Et = z()), k(), P(), g(), W(), V(), O(), St(), f(), (Y = pe()));
  }))();
}
var X;
function Ot() {
  return (Ot = e(() => {
    (k(),
      (X = i({
        title: {
          id: `settings.keyboardShortcuts.externalBrowserLinkShortcut.title`,
          defaultMessage: `Open web link in default browser`,
          description: `Title of the modifier-click shortcut setting for opening a web link in the operating system's default browser`,
        },
        description: {
          id: `settings.keyboardShortcuts.externalBrowserLinkShortcut.description`,
          defaultMessage: `Hold the assigned keys while clicking a web link to open it in your default system browser`,
          description: `Explanation of the shortcut that opens web links in the operating system's default browser when the selected keyboard modifiers are held while clicking`,
        },
        unassigned: {
          id: `settings.keyboardShortcuts.externalBrowserLinkShortcut.unassigned`,
          defaultMessage: `Unassigned`,
          description: `Option for not assigning a modifier-click shortcut to open web links in the system browser`,
        },
        primary: {
          id: `settings.keyboardShortcuts.externalBrowserLinkShortcut.primary`,
          defaultMessage: `{platform, select, macOS {⌘+Click} other {Ctrl+Click}}`,
          description: `Option for opening web links in the system browser by holding Command on macOS or Control on Windows and Linux while clicking`,
        },
        alt: {
          id: `settings.keyboardShortcuts.externalBrowserLinkShortcut.alt`,
          defaultMessage: `{platform, select, macOS {⌥+Click} other {Alt+Click}}`,
          description: `Option for opening web links in the system browser by holding Option on macOS or Alt on Windows and Linux while clicking`,
        },
        "primary-shift": {
          id: `settings.keyboardShortcuts.externalBrowserLinkShortcut.primaryShift`,
          defaultMessage: `{platform, select, macOS {⇧⌘+Click} other {Ctrl+Shift+Click}}`,
          description: `Option for opening web links in the system browser by holding Command and Shift on macOS or Control and Shift on Windows and Linux while clicking`,
        },
      })));
  }))();
}
function kt(e) {
  let r = (0, At.c)(15),
    { platform: i, shortcut: a } = e,
    o = d(c),
    l = (0, jt.useId)(),
    [f, m] = (0, jt.useState)(!1),
    [h, g] = (0, jt.useState)(!1),
    v,
    y;
  r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Z.jsx)(u, { ...X.title })), (y = (0, Z.jsx)(u, { ...X.description })), (r[0] = v), (r[1] = y))
    : ((v = r[0]), (y = r[1]));
  let b;
  r[2] === h
    ? (b = r[3])
    : ((b = h
        ? (0, Z.jsx)(`span`, {
            className: `block text-danger`,
            role: `alert`,
            children: (0, Z.jsx)(u, {
              id: `settings.keyboardShortcuts.externalBrowserLinkShortcut.error`,
              defaultMessage: `Could not save shortcut preference`,
              description: `Error when saving the modifier-click shortcut for opening web links in the system browser fails`,
            }),
          })
        : null),
      (r[2] = h),
      (r[3] = b));
  let x;
  r[4] === b ? (x = r[5]) : ((x = (0, Z.jsxs)(Z.Fragment, { children: [y, b] })), (r[4] = b), (r[5] = x));
  let S;
  r[6] !== i || r[7] !== f || r[8] !== o || r[9] !== a || r[10] !== l
    ? ((S = (e) =>
        (0, Z.jsx)(`div`, {
          className: `flex w-96 max-w-full @max-xl/keyboard-shortcuts:w-full`,
          children: (0, Z.jsx)(s, {
            align: `end`,
            triggerButton: (0, Z.jsxs)(t, {
              ...e,
              className: `-ms-[calc(var(--spacing-button-toolbar-inline)+1px)]`,
              "aria-labelledby": [e[`aria-labelledby`], l].join(` `),
              color: `ghostSecondary`,
              disabled: f,
              radius: `large`,
              size: `toolbar`,
              children: [
                (0, Z.jsx)(`span`, { id: l, children: (0, Z.jsx)(u, { ...X[a], values: { platform: i } }) }),
                (0, Z.jsx)(p, { className: `text-tertiary` }),
              ],
            }),
            children: (0, Z.jsx)(_.RadioGroup, {
              value: a,
              children: n.map((e) =>
                (0, Z.jsx)(
                  _.RadioItem,
                  {
                    value: e,
                    onSelect: () => {
                      e !== a &&
                        (m(!0),
                        g(!1),
                        le(o, C.externalBrowserLinkShortcut, e)
                          .catch(() => g(!0))
                          .finally(() => m(!1)));
                    },
                    children: (0, Z.jsx)(u, { ...X[e], values: { platform: i } }),
                  },
                  e,
                ),
              ),
            }),
          }),
        })),
      (r[6] = i),
      (r[7] = f),
      (r[8] = o),
      (r[9] = a),
      (r[10] = l),
      (r[11] = S))
    : (S = r[11]);
  let w;
  return (
    r[12] !== x || r[13] !== S
      ? ((w = (0, Z.jsx)(fe, {
          className: `select-none @max-xl/keyboard-shortcuts:flex-col @max-xl/keyboard-shortcuts:items-stretch @max-xl/keyboard-shortcuts:gap-2`,
          label: v,
          description: x,
          control: S,
        })),
        (r[12] = x),
        (r[13] = S),
        (r[14] = w))
      : (w = r[14]),
    w
  );
}
var At, jt, Z;
function Mt() {
  return (Mt = e(() => {
    ((At = L()), it(), h(), M(), (jt = z()), k(), P(), a(), g(), R(), b(), O(), Ot(), (Z = pe()));
  }))();
}
var Nt;
function Pt() {
  return (Pt = e(() => {
    (k(),
      (Nt = i({
        title: {
          id: `settings.keyboardShortcuts.numberTarget.title`,
          defaultMessage: `Number shortcuts`,
          description: `Label for the setting that swaps number-key shortcuts between chats and tabs`,
        },
        sidebar: {
          id: `settings.keyboardShortcuts.numberTarget.sidebarWithShortcut`,
          defaultMessage: `{primary}1-9 for Chats`,
          description: `Option for using primary number shortcuts to select chats in the sidebar; primary is the Command symbol on macOS or Ctrl+ elsewhere`,
        },
        tabs: {
          id: `settings.keyboardShortcuts.numberTarget.tabsWithShortcut`,
          defaultMessage: `{primary}1-9 for Tabs`,
          description: `Option for using primary number shortcuts to select tabs in the current chat; primary is the Command symbol on macOS or Ctrl+ elsewhere`,
        },
        chatsPrimary: {
          id: `settings.keyboardShortcuts.numberTarget.chatsPrimary`,
          defaultMessage: `Use {primary}1–9 to switch chats and {secondary}1–9 to switch tabs`,
          description: `Explanation when primary number shortcuts select sidebar chats; primary is Command on macOS or Control elsewhere, secondary is Control on macOS or Alt elsewhere`,
        },
        tabsPrimary: {
          id: `settings.keyboardShortcuts.numberTarget.tabsPrimary`,
          defaultMessage: `Use {primary}1–9 to switch tabs and {secondary}1–9 to switch chats`,
          description: `Explanation when primary number shortcuts select tabs in the current chat; primary is Command on macOS or Control elsewhere, secondary is Control on macOS or Alt elsewhere`,
        },
      })));
  }))();
}
function Ft() {
  let e = (0, It.c)(25),
    t = d(c),
    { platform: n } = Fe(),
    i = n === `macOS` ? `⌘` : `Ctrl+`,
    a = r(C.primaryNumberShortcutTarget),
    { data: o } = y(et),
    [l, f] = (0, Lt.useState)(!1),
    [p, m] = (0, Lt.useState)(!1),
    h;
  e[0] !== o || e[1] !== n || e[2] !== a
    ? ((h =
        o != null && _e({ keymapState: { ...o, primaryNumberShortcutTarget: a }, isMacOS: n === `macOS` })),
      (e[0] = o),
      (e[1] = n),
      (e[2] = a),
      (e[3] = h))
    : (h = e[3]);
  let g = h,
    v;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Q.jsx)(u, { ...Nt.title })), (e[4] = v))
    : (v = e[4]);
  let b;
  e[5] === p
    ? (b = e[6])
    : ((b = p
        ? (0, Q.jsx)(`span`, {
            className: `block text-danger`,
            role: `alert`,
            children: (0, Q.jsx)(u, {
              id: `settings.keyboardShortcuts.numberTarget.error`,
              defaultMessage: `Could not save shortcut preference`,
              description: `Error when saving the numbered navigation shortcut preference fails`,
            }),
          })
        : null),
      (e[5] = p),
      (e[6] = b));
  let x;
  e[7] !== n || e[8] !== i || e[9] !== a
    ? ((x =
        a === `sidebar`
          ? (0, Q.jsx)(u, {
              ...Nt.chatsPrimary,
              values: { primary: i, secondary: n === `macOS` ? `⌃` : `Alt+` },
            })
          : (0, Q.jsx)(u, {
              ...Nt.tabsPrimary,
              values: { primary: i, secondary: n === `macOS` ? `⌃` : `Alt+` },
            })),
      (e[7] = n),
      (e[8] = i),
      (e[9] = a),
      (e[10] = x))
    : (x = e[10]);
  let S;
  e[11] === g
    ? (S = e[12])
    : ((S = g
        ? (0, Q.jsx)(`span`, {
            className: `block`,
            children: (0, Q.jsx)(u, {
              id: `settings.keyboardShortcuts.numberTarget.conflict`,
              defaultMessage: `Some number shortcuts are already assigned to other actions`,
              description: `Notice shown only when existing custom shortcuts override one or more chat or tab number shortcuts in the selected layout`,
            }),
          })
        : null),
      (e[11] = g),
      (e[12] = S));
  let w;
  e[13] !== b || e[14] !== x || e[15] !== S
    ? ((w = (0, Q.jsxs)(Q.Fragment, { children: [b, x, ` `, S] })),
      (e[13] = b),
      (e[14] = x),
      (e[15] = S),
      (e[16] = w))
    : (w = e[16]);
  let T;
  e[17] !== i || e[18] !== l || e[19] !== t || e[20] !== a
    ? ((T = (e) =>
        (0, Q.jsx)(s, {
          align: `end`,
          triggerButton: (0, Q.jsx)(G, {
            ...e,
            disabled: l,
            children: (0, Q.jsx)(u, { ...Nt[a], values: { primary: i } }),
          }),
          children: (0, Q.jsx)(_.RadioGroup, {
            value: a,
            children: [`tabs`, `sidebar`].map((e) =>
              (0, Q.jsx)(
                _.RadioItem,
                {
                  value: e,
                  onSelect: () => {
                    (f(!0),
                      m(!1),
                      le(t, C.primaryNumberShortcutTarget, e)
                        .catch(() => m(!0))
                        .finally(() => f(!1)));
                  },
                  children: (0, Q.jsx)(u, { ...Nt[e], values: { primary: i } }),
                },
                e,
              ),
            ),
          }),
        })),
      (e[17] = i),
      (e[18] = l),
      (e[19] = t),
      (e[20] = a),
      (e[21] = T))
    : (T = e[21]);
  let E;
  return (
    e[22] !== w || e[23] !== T
      ? ((E = (0, Q.jsx)(fe, { label: v, description: w, control: T })),
        (e[22] = w),
        (e[23] = T),
        (e[24] = E))
      : (E = e[24]),
    E
  );
}
var It, Lt, Q;
function Rt() {
  return (Rt = e(() => {
    ((It = L()), it(), h(), M(), (Lt = z()), k(), J(), a(), he(), R(), b(), O(), tt(), Pt(), (Q = pe()));
  }))();
}
function zt(e) {
  let n = (0, Zt.c)(117),
    { embedded: r, presentation: i } = e,
    a = r !== void 0 && r,
    o = d(c),
    s = y(De),
    l = i == null ? s === `work` : i === `chatgpt`,
    f = v(),
    { platform: p } = Fe(),
    m = oe(),
    h = y(Me),
    g = y(je),
    _ = y(Ye),
    b = Je(dt),
    S = xe(),
    w = y(Te),
    T;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = { name: `automations.local` }), (n[0] = T))
    : (T = n[0]);
  let E = me(Ee, T).isCapable,
    D;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = { name: `automations.cloud` }), (n[1] = D))
    : (D = n[1]);
  let ee = me(Ee, D).isCapable,
    ne = Je(`1372061905`),
    O = Je(`3009531526`),
    k = Je(`983842163`),
    A = y($e),
    ae = y(Oe),
    j = Je(`1532120159`),
    se = Ue();
  Je(`2171170889`);
  let M = qe(_, `toggleDebugModal`) > 0,
    ue = at(),
    [N, P] = (0, Qt.useState)(``),
    [F, fe] = (0, Qt.useState)(!1),
    [I, L] = (0, Qt.useState)(!1),
    [R, pe] = (0, Qt.useState)(!1),
    [z, he] = (0, Qt.useState)(null),
    [ge, _e] = (0, Qt.useState)(null),
    B = y(en),
    ve = B != null,
    V = y(Xe),
    H;
  n[2] !== w || n[3] !== S || n[4] !== m
    ? ((H = {
        onSuccess: (e, t) => {
          let { commandId: n } = t,
            r = re(`codex-command-keymap-state`);
          m.setQueryData(r, e);
          let i = [r];
          (n === `hotkeyWindow` && i.push(He),
            w === `os-global` && i.push(re(`global-dictation-hotkey-state`)),
            Promise.all(i.map((e) => S(e))));
        },
      }),
      (n[2] = w),
      (n[3] = S),
      (n[4] = m),
      (n[5] = H))
    : (H = n[5]);
  let be = ie(`set-codex-command-keybinding`, H),
    Se;
  n[6] !== w || n[7] !== S || n[8] !== m
    ? ((Se = {
        onSuccess: (e) => {
          let t = re(`codex-command-keymap-state`);
          m.setQueryData(t, e);
          let n = [t, He];
          (w === `os-global` && n.push(re(`global-dictation-hotkey-state`)), Promise.all(n.map((e) => S(e))));
        },
      }),
      (n[6] = w),
      (n[7] = S),
      (n[8] = m),
      (n[9] = Se))
    : (Se = n[9]);
  let Ce = ie(`reset-codex-command-keybindings`, Se),
    we = w != null,
    U,
    W,
    G,
    K,
    q;
  if (
    n[10] !== M ||
    n[11] !== h ||
    n[12] !== we ||
    n[13] !== a ||
    n[14] !== B ||
    n[15] !== b ||
    n[16] !== ge ||
    n[17] !== f ||
    n[18] !== l ||
    n[19] !== ee ||
    n[20] !== ve ||
    n[21] !== ne ||
    n[22] !== E ||
    n[23] !== j ||
    n[24] !== se ||
    n[25] !== R ||
    n[26] !== k ||
    n[27] !== F ||
    n[28] !== ae ||
    n[29] !== O ||
    n[30] !== !1 ||
    n[31] !== A ||
    n[32] !== V ||
    n[33] !== p ||
    n[34] !== ue ||
    n[35] !== _ ||
    n[36] !== Ce ||
    n[37] !== o ||
    n[38] !== N ||
    n[39] !== be ||
    n[40] !== g
  ) {
    let e;
    n[46] !== M ||
    n[47] !== h ||
    n[48] !== we ||
    n[49] !== b ||
    n[50] !== l ||
    n[51] !== ee ||
    n[52] !== ne ||
    n[53] !== E ||
    n[54] !== se ||
    n[55] !== k ||
    n[56] !== ae ||
    n[57] !== O ||
    n[58] !== !1 ||
    n[59] !== A ||
    n[60] !== V ||
    n[61] !== p ||
    n[62] !== ue ||
    n[63] !== _ ||
    n[64] !== g
      ? ((e = (e) =>
          (!l || ze(e) != null) &&
          ((e.id !== `git.toggleBlame` && e.id !== `meetings.takeNotes`) || qe(_, e.id) > 0) &&
          gt(e, {
            platform: p,
            desktopShortcuts: !0,
            allowDebugMenu: M,
            codexLocal: h || !1,
            fileLanguageFeaturesEnabled: b,
            isAutomationsEnabled: E || ee,
            modeSwitchAvailable: qe(_, e.id) > 0,
            isDictationShortcutEnabled: we,
            isHotkeyWindowEnabled: ne,
            isSpotlightEnabled: O,
            isScreenshotSelectionEnabled: k,
            isUnifiedTabStripEnabled: A,
            isSidebarCollapsible: ae,
            isPriorityFilterEnabled: ue,
            isRealtimeVoiceCommandEnabled: se || (e.id === `realtimeVoice` && rt(e.id, V, p).length > 0),
            workLocal: g,
          })),
        (n[46] = M),
        (n[47] = h),
        (n[48] = we),
        (n[49] = b),
        (n[50] = l),
        (n[51] = ee),
        (n[52] = ne),
        (n[53] = E),
        (n[54] = se),
        (n[55] = k),
        (n[56] = ae),
        (n[57] = O),
        (n[58] = !1),
        (n[59] = A),
        (n[60] = V),
        (n[61] = p),
        (n[62] = ue),
        (n[63] = _),
        (n[64] = g),
        (n[65] = e))
      : (e = n[65]);
    let r;
    n[66] !== f || n[67] !== j || n[68] !== A || n[69] !== _
      ? ((r = (e) => ({ command: e, title: pt(e, f, Qe(_, e.id), j, A).title })),
        (n[66] = f),
        (n[67] = j),
        (n[68] = A),
        (n[69] = _),
        (n[70] = r))
      : (r = n[70]);
    let i;
    n[71] === l
      ? (i = n[72])
      : ((i = (e, t) =>
          l
            ? Ge.findIndex((t) => {
                let { commandId: n } = t;
                return n === e.command.id;
              }) -
              Ge.findIndex((e) => {
                let { commandId: n } = e;
                return n === t.command.id;
              })
            : yt(e.command, t.command)),
        (n[71] = l),
        (n[72] = i));
    let s = $t.filter(e).map(r).sort(i),
      c = N.trim();
    q =
      A &&
      !F &&
      (c.length === 0 ||
        Object.values(Nt).some(
          (e) =>
            ye(
              f.formatMessage(e, {
                primary: p === `macOS` ? `⌘` : `Ctrl+`,
                secondary: p === `macOS` ? `⌃` : `Alt+`,
              }),
              c,
            ) > 0,
        ));
    let d =
        !l &&
        ve &&
        !F &&
        (c.length === 0 ||
          [X.title, X.description, X[B]].some((e) => ye(f.formatMessage(e, { platform: p }), c) > 0)),
      m =
        c.length === 0
          ? s
          : s.filter((e) => {
              let { command: t, title: n } = e,
                r = pt(t, f, Qe(_, t.id), j, A).description;
              return F
                ? rt(t.id, V, p, l ? `chatgpt` : `codex`).some((e) => {
                    let { label: t } = e;
                    return Yt(t, c);
                  })
                : [t.id, n, r].some((e) => ye(e, c) > 0);
            }),
      v = m.findIndex(qt),
      y;
    n[73] !== B || n[74] !== p || n[75] !== d
      ? ((y = d ? (0, $.jsx)($.Fragment, { children: (0, $.jsx)(kt, { platform: p, shortcut: B }) }) : null),
        (n[73] = B),
        (n[74] = p),
        (n[75] = d),
        (n[76] = y))
      : (y = n[76]);
    let S = y;
    G =
      V == null
        ? null
        : (0, $.jsx)(ht, {
            autoFocus: F,
            isSearchingByKeystrokes: F,
            trailingContent: (0, $.jsx)(de, {
              tooltipContent: (0, $.jsx)(u, {
                id: `settings.keyboardShortcuts.searchByKeystrokes.tooltip`,
                defaultMessage: `Search by keystrokes`,
                description: `Tooltip label for the keyboard shortcut search mode button`,
              }),
              children: (0, $.jsx)(t, {
                "aria-label": f.formatMessage({
                  id: `settings.keyboardShortcuts.searchByKeystrokes.ariaLabel`,
                  defaultMessage: `Search by keystrokes`,
                  description: `Accessible label for the keyboard shortcut search mode button`,
                }),
                "aria-pressed": F,
                color: F ? `secondary` : `ghost`,
                size: `toolbar`,
                uniform: !0,
                onMouseDown: Kt,
                onClick: () => {
                  (P(``), fe(Gt));
                },
                children: (0, $.jsx)(st, { className: `icon-sm` }),
              }),
            }),
            value: N,
            onKeyDown: F
              ? (e) => {
                  if (e.repeat) return;
                  if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    e.key === `Escape` && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey)
                  ) {
                    (P(``), fe(!1));
                    return;
                  }
                  let t = lt(e.nativeEvent);
                  if (t != null) {
                    let e = x(t, p === `macOS`, p === `linux`),
                      n = N.length === 0 ? e : `${N} ${e}`,
                      r =
                        N.length > 0 &&
                        s.some((e) => {
                          let { command: t } = e;
                          return rt(t.id, V, p, l ? `chatgpt` : `codex`).some((e) => {
                            let { label: t } = e;
                            return Yt(t, n);
                          });
                        });
                    P(r ? n : e);
                  }
                }
              : void 0,
            onValueChange: P,
          });
    let w;
    n[77] !== V || n[78] !== p
      ? ((w = (e) => {
          let { command: t } = e;
          return (
            V?.bindings.some((e) => e.command === t.id) &&
            !(t.id === `composer.submit` && Ae(rt(t.id, V, p).map(Wt)))
          );
        }),
        (n[77] = V),
        (n[78] = p),
        (n[79] = w))
      : (w = n[79]);
    let T = s.filter(w),
      D;
    n[80] === ge
      ? (D = n[81])
      : ((D = (e) => {
          let { command: t } = e;
          return t.id === ge;
        }),
        (n[80] = ge),
        (n[81] = D));
    let re = T.find(D),
      ie = re == null ? T : [re],
      oe = l
        ? T.length > 0
        : V != null && (V.bindings.length > 0 || (ve && B !== C.externalBrowserLinkShortcut.default));
    ((U = async function () {
      if (!R) {
        (he(null), pe(!0));
        try {
          if (l)
            for (let { command: e } of ie)
              await be.mutateAsync({ commandId: e.id, update: { type: `reset` } });
          else
            await Promise.all([
              Ce.mutateAsync(void 0),
              ve ? le(o, C.externalBrowserLinkShortcut, C.externalBrowserLinkShortcut.default) : void 0,
            ]);
          L(!1);
        } catch (e) {
          let t = e;
          he(
            t instanceof Error
              ? t.message
              : f.formatMessage({
                  id: `settings.keyboardShortcuts.resetAllError`,
                  defaultMessage: `Failed to reset keyboard shortcuts`,
                  description: `Fallback error shown when resetting all customized keyboard shortcuts fails`,
                }),
          );
        }
        pe(!1);
      }
    }),
      (W =
        l || oe
          ? (0, $.jsx)(t, {
              color: l ? `primary` : `secondary`,
              disabled: R || !oe,
              radius: l ? `full` : `default`,
              size: l ? `dialogAction` : `toolbar`,
              onClick: () => {
                (he(null), l ? U() : L(!0));
              },
              children: l
                ? (0, $.jsx)(u, {
                    id: `settings.keyboardShortcuts.restoreDefaults`,
                    defaultMessage: `Restore defaults`,
                    description: `Button in ChatGPT keyboard shortcut settings and help that restores the displayed actions to their default key bindings`,
                  })
                : (0, $.jsx)(u, {
                    id: `settings.keyboardShortcuts.resetAll`,
                    defaultMessage: `Reset all to defaults`,
                    description: `Button label to reset all customized keyboard shortcuts to their defaults`,
                  }),
            })
          : null));
    let I =
        V == null
          ? null
          : m.map((e) => {
              let { command: t, title: n } = e;
              return {
                commandId: t.id,
                section: ze(t),
                content: (0, $.jsx)(
                  xt,
                  {
                    command: t,
                    presentation: l ? `chatgpt` : `codex`,
                    description: l ? `` : pt(t, f, Qe(_, t.id), j, A).description,
                    isPending: be.isPending || R,
                    keymapState: V,
                    title: n,
                    onBlur: () => _e((e) => (e === t.id ? null : e)),
                    onFocus: () => _e(t.id),
                    onUpdate: async (e) => {
                      await be.mutateAsync({ commandId: t.id, update: e });
                    },
                  },
                  t.id,
                ),
              };
            }),
      z = I?.find(Ut),
      me = I?.find(Ht),
      H = I?.filter(Vt),
      xe = [`composer`, `thread`, `app`];
    if (I == null) {
      let e;
      (n[82] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(Ze, {
            children: (0, $.jsx)(u, {
              id: `settings.keyboardShortcuts.loading`,
              defaultMessage: `Loading shortcuts…`,
              description: `Loading label while keyboard shortcuts are being fetched`,
            }),
          })),
          (n[82] = e))
        : (e = n[82]),
        (K = e));
    } else if (l)
      K = xe.map((e) => {
        let t = I.filter((t) => t.section === e);
        return t.length === 0
          ? null
          : (0, $.jsxs)(
              `section`,
              {
                className: `flex flex-col`,
                children: [
                  (0, $.jsx)(`h3`, {
                    className: te(
                      `sticky top-0 z-10 bg-surface px-6 py-0.5 text-sm leading-6 font-medium text-secondary`,
                      a && `dark:bg-surface-tertiary`,
                    ),
                    children: (0, $.jsx)(Xt, { section: e }),
                  }),
                  (0, $.jsx)(`ul`, { className: `flex list-none flex-col px-3`, children: t.map(Bt) }),
                ],
              },
              e,
            );
      });
    else {
      let e =
          H != null && (H.length > 0 || d)
            ? (0, $.jsxs)(ce, {
                children: [
                  H.flatMap((e) => [e.content, e.commandId === `openBrowserTab` ? S : null]),
                  v === -1 ? S : null,
                ],
              })
            : null,
        t =
          m.length === 0 && !d
            ? q
              ? null
              : (0, $.jsx)($.Fragment, {
                  children: (0, $.jsx)(ce, {
                    children: (0, $.jsx)(Ke, {
                      layout: `settings-row`,
                      children: (0, $.jsx)(u, {
                        id: `settings.keyboardShortcuts.noMatches`,
                        defaultMessage: `No matching shortcuts`,
                        description: `Empty state shown when the keyboard shortcuts search has no matches`,
                      }),
                    }),
                  }),
                })
            : null,
        r =
          z || me
            ? (0, $.jsx)(wt, {
                shortcut: z?.content,
                singleTapShortcut: me?.content,
                searching: c.length > 0 && (z == null || F),
              })
            : null,
        i;
      (n[83] !== e || n[84] !== t || n[85] !== r
        ? ((i = (0, $.jsxs)($.Fragment, { children: [e, t, r] })),
          (n[83] = e),
          (n[84] = t),
          (n[85] = r),
          (n[86] = i))
        : (i = n[86]),
        (K = i));
    }
    ((n[10] = M),
      (n[11] = h),
      (n[12] = we),
      (n[13] = a),
      (n[14] = B),
      (n[15] = b),
      (n[16] = ge),
      (n[17] = f),
      (n[18] = l),
      (n[19] = ee),
      (n[20] = ve),
      (n[21] = ne),
      (n[22] = E),
      (n[23] = j),
      (n[24] = se),
      (n[25] = R),
      (n[26] = k),
      (n[27] = F),
      (n[28] = ae),
      (n[29] = O),
      (n[30] = !1),
      (n[31] = A),
      (n[32] = V),
      (n[33] = p),
      (n[34] = ue),
      (n[35] = _),
      (n[36] = Ce),
      (n[37] = o),
      (n[38] = N),
      (n[39] = be),
      (n[40] = g),
      (n[41] = U),
      (n[42] = W),
      (n[43] = G),
      (n[44] = K),
      (n[45] = q));
  } else ((U = n[41]), (W = n[42]), (G = n[43]), (K = n[44]), (q = n[45]));
  if (l) {
    let e;
    n[87] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`p`, {
          className: `px-6 text-sm leading-5 text-secondary select-none`,
          children: (0, $.jsx)(u, {
            id: `settings.keyboardShortcuts.editKeyInstructions`,
            defaultMessage: `To change a shortcut, select the key combination, and then type the new keys`,
            description: `Instructions above ChatGPT keyboard shortcuts; selecting the displayed key combination opens an inline field that captures replacement keys`,
          }),
        })),
        (n[87] = e))
      : (e = n[87]);
    let t;
    n[88] === K
      ? (t = n[89])
      : ((t = (0, $.jsxs)(`div`, { className: `flex flex-col gap-8 py-4`, children: [e, K] })),
        (n[88] = K),
        (n[89] = t));
    let r = t,
      i;
    n[90] === z
      ? (i = n[91])
      : ((i =
          z == null
            ? null
            : (0, $.jsx)(`span`, { className: `text-xs text-danger`, role: `alert`, children: z })),
        (n[90] = z),
        (n[91] = i));
    let o;
    n[92] !== W || n[93] !== i
      ? ((o = (0, $.jsxs)($.Fragment, { children: [i, W] })), (n[92] = W), (n[93] = i), (n[94] = o))
      : (o = n[94]);
    let s = o,
      c;
    return (
      n[95] !== r || n[96] !== a || n[97] !== s
        ? ((c = a
            ? (0, $.jsxs)(`div`, {
                className: `flex min-h-0 flex-1 flex-col`,
                children: [
                  (0, $.jsx)(`div`, {
                    className: `min-h-0 flex-1 scrollbar-stable overflow-y-auto`,
                    children: r,
                  }),
                  (0, $.jsx)(`div`, {
                    className: `flex items-center justify-end gap-3 border-t border-primary-outline bg-surface px-3 py-3 dark:bg-surface-tertiary`,
                    children: s,
                  }),
                ],
              })
            : (0, $.jsx)(Re, {
                footer: s,
                title: (0, $.jsx)(Pe, { slug: `keyboard-shortcuts` }),
                children: r,
              })),
          (n[95] = r),
          (n[96] = a),
          (n[97] = s),
          (n[98] = c))
        : (c = n[98]),
      c
    );
  }
  let ke;
  n[99] === a
    ? (ke = n[100])
    : ((ke = a ? null : (0, $.jsx)(Pe, { slug: `keyboard-shortcuts` })), (n[99] = a), (n[100] = ke));
  let Ne;
  n[101] === q
    ? (Ne = n[102])
    : ((Ne = q
        ? (0, $.jsx)($.Fragment, { children: (0, $.jsx)(ce, { children: (0, $.jsx)(Ft, {}) }) })
        : null),
      (n[101] = q),
      (n[102] = Ne));
  let Ie;
  n[103] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = (e) => {
        (L(e), e || he(null));
      }),
      (n[103] = Ie))
    : (Ie = n[103]);
  let J;
  n[104] !== I || n[105] !== R || n[106] !== z || n[107] !== U
    ? ((J = (0, $.jsx)(Jt, { error: z, isPending: R, open: I, onOpenChange: Ie, onConfirm: U })),
      (n[104] = I),
      (n[105] = R),
      (n[106] = z),
      (n[107] = U),
      (n[108] = J))
    : (J = n[108]);
  let Le;
  return (
    n[109] !== a ||
    n[110] !== W ||
    n[111] !== G ||
    n[112] !== K ||
    n[113] !== ke ||
    n[114] !== Ne ||
    n[115] !== J
      ? ((Le = (0, $.jsxs)(Re, {
          action: W,
          contentClassName: `@container/keyboard-shortcuts`,
          embedded: a,
          stickyControls: G,
          title: ke,
          children: [Ne, K, J],
        })),
        (n[109] = a),
        (n[110] = W),
        (n[111] = G),
        (n[112] = K),
        (n[113] = ke),
        (n[114] = Ne),
        (n[115] = J),
        (n[116] = Le))
      : (Le = n[116]),
    Le
  );
}
function Bt(e) {
  return e.content;
}
function Vt(e) {
  return e.commandId !== `globalDictationHold` && e.commandId !== `globalDictationSingleTap`;
}
function Ht(e) {
  return e.commandId === `globalDictationSingleTap`;
}
function Ut(e) {
  return e.commandId === `globalDictationHold`;
}
function Wt(e) {
  let { accelerator: t } = e;
  return t;
}
function Gt(e) {
  return !e;
}
function Kt(e) {
  e.preventDefault();
}
function qt(e) {
  let { command: t } = e;
  return t.id === `openBrowserTab`;
}
function Jt(e) {
  let n = (0, Zt.c)(28),
    { error: r, isPending: i, onConfirm: a, onOpenChange: o, open: s } = e,
    c;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(u, {
        id: `settings.keyboardShortcuts.resetAllConfirm.title`,
        defaultMessage: `Reset all keyboard shortcuts?`,
        description: `Title for the dialog confirming reset of all customized keyboard shortcuts`,
      })),
      (n[0] = c))
    : (c = n[0]);
  let l = c,
    d;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, $.jsx)(u, {
        id: `settings.keyboardShortcuts.resetAllConfirm.description`,
        defaultMessage: `This will discard all custom shortcuts and restore the defaults`,
        description: `Warning shown before resetting all customized keyboard shortcuts`,
      })),
      (n[1] = d))
    : (d = n[1]);
  let f = d,
    p;
  n[2] === a
    ? (p = n[3])
    : ((p = (e) => {
        (e.preventDefault(), a());
      }),
      (n[2] = a),
      (n[3] = p));
  let m, h;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(T, { className: `sr-only`, children: l })),
      (h = (0, $.jsx)(ne, { className: `sr-only`, children: f })),
      (n[4] = m),
      (n[5] = h))
    : ((m = n[4]), (h = n[5]));
  let g;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, $.jsx)(A, { children: (0, $.jsx)(E, { title: l, subtitle: f }) })), (n[6] = g))
    : (g = n[6]);
  let _;
  n[7] === r
    ? (_ = n[8])
    : ((_ = r == null ? null : (0, $.jsx)(A, { className: `text-danger`, children: r })),
      (n[7] = r),
      (n[8] = _));
  let v;
  n[9] === o
    ? (v = n[10])
    : ((v = () => {
        o(!1);
      }),
      (n[9] = o),
      (n[10] = v));
  let y;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, $.jsx)(u, {
        id: `settings.keyboardShortcuts.resetAllConfirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for resetting all customized keyboard shortcuts`,
      })),
      (n[11] = y))
    : (y = n[11]);
  let b;
  n[12] === v
    ? (b = n[13])
    : ((b = (0, $.jsx)(t, { color: `secondary`, onClick: v, children: y })), (n[12] = v), (n[13] = b));
  let x;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, $.jsx)(u, {
        id: `settings.keyboardShortcuts.resetAllConfirm.confirm`,
        defaultMessage: `Reset all`,
        description: `Confirmation button label for resetting all customized keyboard shortcuts`,
      })),
      (n[14] = x))
    : (x = n[14]);
  let S;
  n[15] === i
    ? (S = n[16])
    : ((S = (0, $.jsx)(t, { color: `danger`, loading: i, type: `submit`, children: x })),
      (n[15] = i),
      (n[16] = S));
  let C;
  n[17] !== b || n[18] !== S
    ? ((C = (0, $.jsx)(A, { children: (0, $.jsxs)(ue, { children: [b, S] }) })),
      (n[17] = b),
      (n[18] = S),
      (n[19] = C))
    : (C = n[19]);
  let w;
  n[20] !== C || n[21] !== p || n[22] !== _
    ? ((w = (0, $.jsxs)(j, { as: `form`, onSubmit: p, children: [m, h, g, _, C] })),
      (n[20] = C),
      (n[21] = p),
      (n[22] = _),
      (n[23] = w))
    : (w = n[23]);
  let D;
  return (
    n[24] !== o || n[25] !== s || n[26] !== w
      ? ((D = (0, $.jsx)(ae, {
          open: s,
          onOpenChange: o,
          showDialogClose: !1,
          size: `compact`,
          children: w,
        })),
        (n[24] = o),
        (n[25] = s),
        (n[26] = w),
        (n[27] = D))
      : (D = n[27]),
    D
  );
}
function Yt(e, t) {
  return e === t || e.startsWith(`${t} `);
}
function Xt(e) {
  let t = (0, Zt.c)(3),
    { section: n } = e;
  switch (n) {
    case `composer`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.keyboardShortcuts.section.composer`,
              defaultMessage: `Composer`,
              description: `Heading for shortcuts used while writing or sending a message in the ChatGPT keyboard shortcuts panel`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `thread`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.keyboardShortcuts.section.thread`,
              defaultMessage: `Chat`,
              description: `Heading for shortcuts that act on a conversation in the ChatGPT keyboard shortcuts panel`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `app`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.keyboardShortcuts.section.app`,
              defaultMessage: `App`,
              description: `Heading for application-wide shortcuts in the ChatGPT keyboard shortcuts panel`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
var Zt, Qt, $, $t, en;
function tn() {
  return (tn = e(() => {
    ((Zt = L()),
      F(),
      w(),
      it(),
      h(),
      M(),
      (Qt = z()),
      k(),
      be(),
      Se(),
      Ie(),
      J(),
      Ve(),
      ft(),
      H(),
      P(),
      I(),
      ee(),
      Be(),
      D(),
      W(),
      he(),
      U(),
      ot(),
      Le(),
      S(),
      vt(),
      _t(),
      mt(),
      B(),
      ge(),
      ut(),
      R(),
      b(),
      ke(),
      ct(),
      We(),
      tt(),
      f(),
      ve(),
      we(),
      Ne(),
      nt(),
      N(),
      bt(),
      Dt(),
      Ot(),
      Mt(),
      Pt(),
      Rt(),
      ($ = pe()),
      ($t = q.filter((e) => Ce(e) && e.id !== `findInThread`)),
      (en = se(c, ({ get: e }) => l(e, C.externalBrowserLinkShortcut))));
  }))();
}
export { tn as n, zt as t };
//# sourceMappingURL=keyboard-shortcuts-settings-d2d4f6ef52f3.js.map
