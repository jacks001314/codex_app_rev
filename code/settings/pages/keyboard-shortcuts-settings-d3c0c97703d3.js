import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $r as n,
  A3t as r,
  AK as i,
  AMt as a,
  Amn as o,
  B6t as s,
  BS as c,
  Byt as l,
  CK as u,
  Cpn as d,
  D3t as f,
  EJt as p,
  Em as m,
  F3t as h,
  F_ as g,
  Hu as _,
  J7 as v,
  JG as y,
  JI as b,
  JS as x,
  Jit as S,
  Jrt as C,
  K7 as w,
  KG as T,
  KKt as ee,
  KS as te,
  Kit as ne,
  LK as re,
  M8t as E,
  MK as ie,
  Mm as ae,
  N3t as oe,
  NK as se,
  O3t as D,
  OJt as ce,
  Opn as le,
  P_ as ue,
  QKt as de,
  RK as fe,
  RS as O,
  S_ as pe,
  Spn as k,
  TK as A,
  UI as me,
  UK as he,
  VS as j,
  Vu as ge,
  WI as M,
  X7 as _e,
  XI as ve,
  XS as N,
  Xdt as ye,
  Xrt as P,
  Xu as F,
  YI as be,
  YKt as xe,
  Yrt as Se,
  ZG as Ce,
  Zrt as we,
  _Jt as Te,
  a3t as Ee,
  aYt as I,
  bK as De,
  c6t as Oe,
  cKt as ke,
  dlt as Ae,
  do as je,
  eit as Me,
  fKt as L,
  hmn as R,
  iit as z,
  kK as Ne,
  kMt as Pe,
  kmn as B,
  mJt as Fe,
  mR as Ie,
  nit as Le,
  o3t as V,
  orn as H,
  pR as Re,
  q7 as ze,
  qKt as U,
  qS as W,
  qu as Be,
  rit as Ve,
  s3t as He,
  sYt as Ue,
  ti as We,
  tit as Ge,
  uo as Ke,
  wK as G,
  w_ as qe,
  xK as K,
  xpn as q,
  yJt as Je,
  yKt as Ye,
  zyt as Xe,
} from "./app-initial-f094ef01c64d.js";
import {
  Co as Ze,
  To as Qe,
  _o as $e,
  cc as et,
  go as J,
  ho as tt,
  lc as nt,
  vo as rt,
  wo as it,
} from "./app-primary-4c40d73a1074.js";
import { n as at, t as ot } from "./gate-04dc472e6f9b.js";
import { n as st, t as ct } from "./keyboard-shortcuts-search-input-be03b5a70e1b.js";
import {
  a as lt,
  n as ut,
  r as dt,
  t as ft,
} from "./keyboard-shortcut-command-order-d509233d7b05.js";
var Y,
  pt = e(() => {
    (k(),
      (Y = q({
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
  });
function mt(e) {
  let t = (0, ht.c)(15),
    { platform: n, shortcut: i } = e,
    a = r(Ee),
    o = (0, gt.useId)(),
    [s, c] = (0, gt.useState)(!1),
    [l, u] = (0, gt.useState)(!1),
    f,
    p;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, X.jsx)(d, { ...Y.title })),
      (p = (0, X.jsx)(d, { ...Y.description })),
      (t[0] = f),
      (t[1] = p))
    : ((f = t[0]), (p = t[1]));
  let m;
  t[2] === l
    ? (m = t[3])
    : ((m = l
        ? (0, X.jsx)(`span`, {
            className: `block text-danger`,
            role: `alert`,
            children: (0, X.jsx)(d, {
              id: `settings.keyboardShortcuts.externalBrowserLinkShortcut.error`,
              defaultMessage: `Could not save shortcut preference`,
              description: `Error when saving the modifier-click shortcut for opening web links in the system browser fails`,
            }),
          })
        : null),
      (t[2] = l),
      (t[3] = m));
  let h;
  t[4] === m
    ? (h = t[5])
    : ((h = (0, X.jsxs)(X.Fragment, { children: [p, m] })), (t[4] = m), (t[5] = h));
  let g;
  t[6] !== n || t[7] !== s || t[8] !== a || t[9] !== i || t[10] !== o
    ? ((g = (e) =>
        (0, X.jsx)(`div`, {
          className: `flex w-96 max-w-full max-sm:w-full`,
          children: (0, X.jsx)(T, {
            align: `end`,
            triggerButton: (0, X.jsxs)(Pe, {
              ...e,
              className: `-ms-3`,
              "aria-labelledby": [e[`aria-labelledby`], o].join(` `),
              color: `ghostSecondary`,
              disabled: s,
              radius: `large`,
              size: `toolbar`,
              children: [
                (0, X.jsx)(`span`, {
                  id: o,
                  children: (0, X.jsx)(d, { ...Y[i], values: { platform: n } }),
                }),
                (0, X.jsx)(Ae, { className: `text-tertiary` }),
              ],
            }),
            children: (0, X.jsx)(y.RadioGroup, {
              value: i,
              children: H.map((e) =>
                (0, X.jsx)(
                  y.RadioItem,
                  {
                    value: e,
                    onSelect: () => {
                      e !== i &&
                        (c(!0),
                        u(!1),
                        xe(a, E.externalBrowserLinkShortcut, e)
                          .catch(() => u(!0))
                          .finally(() => c(!1)));
                    },
                    children: (0, X.jsx)(d, { ...Y[e], values: { platform: n } }),
                  },
                  e,
                ),
              ),
            }),
          }),
        })),
      (t[6] = n),
      (t[7] = s),
      (t[8] = a),
      (t[9] = i),
      (t[10] = o),
      (t[11] = g))
    : (g = t[11]);
  let _;
  return (
    t[12] !== h || t[13] !== g
      ? ((_ = (0, X.jsx)(Be, {
          className: `select-none max-sm:flex-col max-sm:items-stretch max-sm:gap-2`,
          label: f,
          description: h,
          control: g,
        })),
        (t[12] = h),
        (t[13] = g),
        (t[14] = _))
      : (_ = t[14]),
    _
  );
}
var ht,
  gt,
  X,
  _t = e(() => {
    ((ht = B()),
      A(),
      D(),
      s(),
      (gt = t(o(), 1)),
      k(),
      a(),
      Ce(),
      ye(),
      V(),
      U(),
      F(),
      pt(),
      (X = R()));
  });
function vt() {
  let e = (0, yt.c)(25),
    t = r(Ee),
    { platform: n } = l(),
    i = n === `macOS` ? `⌘` : `Ctrl+`,
    a = de(E.primaryNumberShortcutTarget),
    { data: o } = h(M),
    [s, c] = (0, bt.useState)(!1),
    [u, f] = (0, bt.useState)(!1),
    p;
  e[0] !== o || e[1] !== n || e[2] !== a
    ? ((p =
        o != null &&
        se({ keymapState: { ...o, primaryNumberShortcutTarget: a }, isMacOS: n === `macOS` })),
      (e[0] = o),
      (e[1] = n),
      (e[2] = a),
      (e[3] = p))
    : (p = e[3]);
  let m = p,
    g;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Z.jsx)(d, {
        id: `settings.keyboardShortcuts.numberTarget.title`,
        defaultMessage: `Number shortcuts`,
        description: `Label for the setting that swaps number-key shortcuts between chats and tabs`,
      })),
      (e[4] = g))
    : (g = e[4]);
  let _;
  e[5] === u
    ? (_ = e[6])
    : ((_ = u
        ? (0, Z.jsx)(`span`, {
            className: `block text-danger`,
            role: `alert`,
            children: (0, Z.jsx)(d, {
              id: `settings.keyboardShortcuts.numberTarget.error`,
              defaultMessage: `Could not save shortcut preference`,
              description: `Error when saving the numbered navigation shortcut preference fails`,
            }),
          })
        : null),
      (e[5] = u),
      (e[6] = _));
  let v;
  e[7] !== n || e[8] !== i || e[9] !== a
    ? ((v =
        a === `sidebar`
          ? (0, Z.jsx)(d, {
              id: `settings.keyboardShortcuts.numberTarget.chatsPrimary`,
              defaultMessage: `Use {primary}1–9 to switch chats and {secondary}1–9 to switch tabs`,
              description: `Explanation when primary number shortcuts select sidebar chats; primary is Command on macOS or Control elsewhere, secondary is Control on macOS or Alt elsewhere`,
              values: { primary: i, secondary: n === `macOS` ? `⌃` : `Alt+` },
            })
          : (0, Z.jsx)(d, {
              id: `settings.keyboardShortcuts.numberTarget.tabsPrimary`,
              defaultMessage: `Use {primary}1–9 to switch tabs and {secondary}1–9 to switch chats`,
              description: `Explanation when primary number shortcuts select tabs in the current chat; primary is Command on macOS or Control elsewhere, secondary is Control on macOS or Alt elsewhere`,
              values: { primary: i, secondary: n === `macOS` ? `⌃` : `Alt+` },
            })),
      (e[7] = n),
      (e[8] = i),
      (e[9] = a),
      (e[10] = v))
    : (v = e[10]);
  let b;
  e[11] === m
    ? (b = e[12])
    : ((b = m
        ? (0, Z.jsx)(`span`, {
            className: `block`,
            children: (0, Z.jsx)(d, {
              id: `settings.keyboardShortcuts.numberTarget.conflict`,
              defaultMessage: `Some number shortcuts are already assigned to other actions`,
              description: `Notice shown only when existing custom shortcuts override one or more chat or tab number shortcuts in the selected layout`,
            }),
          })
        : null),
      (e[11] = m),
      (e[12] = b));
  let x;
  e[13] !== _ || e[14] !== v || e[15] !== b
    ? ((x = (0, Z.jsxs)(Z.Fragment, { children: [_, v, ` `, b] })),
      (e[13] = _),
      (e[14] = v),
      (e[15] = b),
      (e[16] = x))
    : (x = e[16]);
  let S;
  e[17] !== i || e[18] !== s || e[19] !== t || e[20] !== a
    ? ((S = (e) =>
        (0, Z.jsx)(T, {
          align: `end`,
          triggerButton: (0, Z.jsx)(O, {
            ...e,
            disabled: s,
            children: (0, Z.jsx)(d, { ...xt[a], values: { primary: i } }),
          }),
          children: (0, Z.jsx)(y.RadioGroup, {
            value: a,
            children: [`tabs`, `sidebar`].map((e) =>
              (0, Z.jsx)(
                y.RadioItem,
                {
                  value: e,
                  onSelect: () => {
                    (c(!0),
                      f(!1),
                      xe(t, E.primaryNumberShortcutTarget, e)
                        .catch(() => f(!0))
                        .finally(() => c(!1)));
                  },
                  children: (0, Z.jsx)(d, { ...xt[e], values: { primary: i } }),
                },
                e,
              ),
            ),
          }),
        })),
      (e[17] = i),
      (e[18] = s),
      (e[19] = t),
      (e[20] = a),
      (e[21] = S))
    : (S = e[21]);
  let C;
  return (
    e[22] !== x || e[23] !== S
      ? ((C = (0, Z.jsx)(Be, { label: g, description: x, control: S })),
        (e[22] = x),
        (e[23] = S),
        (e[24] = C))
      : (C = e[24]),
    C
  );
}
var yt,
  bt,
  Z,
  xt,
  St = e(() => {
    ((yt = B()),
      A(),
      D(),
      s(),
      (bt = t(o(), 1)),
      k(),
      ve(),
      Ce(),
      Xe(),
      V(),
      U(),
      F(),
      j(),
      (Z = R()),
      (xt = q({
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
      })));
  });
function Ct() {
  let e = (0, Ft.c)(110),
    t = r(Ee),
    a = le(),
    { platform: o } = l(),
    s = f(),
    u = h(ke),
    p = h(Ye),
    m = h(_e),
    _ = Ue(ot),
    v = ce(),
    y;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = { name: `dictation.composer` }), (e[0] = y))
    : (y = e[0]);
  let { isCapable: S } = oe(Re, y),
    C;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = { name: `dictation.global` }), (e[1] = C))
    : (C = e[1]);
  let { isCapable: T } = oe(Re, C),
    ee;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = { name: `automations.local` }), (e[2] = ee))
    : (ee = e[2]);
  let ie = oe(Re, ee).isCapable,
    se;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = { name: `automations.cloud` }), (e[3] = se))
    : (se = e[3]);
  let D = oe(Re, se).isCapable,
    ue;
  e[4] === T ? (ue = e[5]) : ((ue = { enabled: T }), (e[4] = T), (e[5] = ue));
  let { data: de } = h(Ze, ue),
    fe = Ue(`1372061905`),
    O = Ue(`3528415127`),
    k = Ue(`1532120159`),
    A = je(),
    he = w(m, `toggleDebugModal`) > 0,
    j = ae(),
    [M, ve] = (0, Q.useState)(``),
    [N, ye] = (0, Q.useState)(!1),
    [P, F] = (0, Q.useState)(null),
    be;
  e[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((be = {}), (e[6] = be)) : (be = e[6]);
  let [Se, Ce] = (0, Q.useState)(be),
    [we, Te] = (0, Q.useState)(!1),
    [I, Oe] = (0, Q.useState)(!1),
    [Ae, Me] = (0, Q.useState)(null),
    L = h(Lt),
    R = L != null,
    z = h(me),
    Ne;
  e[7] !== v || e[8] !== s
    ? ((Ne = {
        onSuccess: (e, t) => {
          let { commandId: r } = t,
            i = Fe(`codex-command-keymap-state`);
          s.setQueryData(i, e);
          let a = [i];
          (r === `hotkeyWindow` && a.push(n),
            (r === `globalDictationHold` || r === `globalDictationToggle`) &&
              a.push(Fe(`global-dictation-hotkey-state`)),
            Promise.all(a.map((e) => v(e))));
        },
      }),
      (e[7] = v),
      (e[8] = s),
      (e[9] = Ne))
    : (Ne = e[9]);
  let B = Je(`set-codex-command-keybinding`, Ne),
    Ie;
  e[10] !== v || e[11] !== s
    ? ((Ie = {
        onSuccess: (e) => {
          let t = Fe(`codex-command-keymap-state`);
          (s.setQueryData(t, e),
            Promise.all([t, n, Fe(`global-dictation-hotkey-state`)].map((e) => v(e))));
        },
      }),
      (e[10] = v),
      (e[11] = s),
      (e[12] = Ie))
    : (Ie = e[12]);
  let Le = Je(`reset-codex-command-keybindings`, Ie),
    V,
    H,
    U,
    W;
  if (
    e[13] !== he ||
    e[14] !== u ||
    e[15] !== L ||
    e[16] !== _ ||
    e[17] !== de ||
    e[18] !== a ||
    e[19] !== D ||
    e[20] !== S ||
    e[21] !== R ||
    e[22] !== T ||
    e[23] !== fe ||
    e[24] !== ie ||
    e[25] !== k ||
    e[26] !== A ||
    e[27] !== N ||
    e[28] !== O ||
    e[29] !== z ||
    e[30] !== o ||
    e[31] !== j ||
    e[32] !== m ||
    e[33] !== M ||
    e[34] !== p
  ) {
    let t;
    e[39] !== he ||
    e[40] !== u ||
    e[41] !== _ ||
    e[42] !== de ||
    e[43] !== D ||
    e[44] !== S ||
    e[45] !== T ||
    e[46] !== fe ||
    e[47] !== ie ||
    e[48] !== A ||
    e[49] !== O ||
    e[50] !== z ||
    e[51] !== o ||
    e[52] !== j ||
    e[53] !== m ||
    e[54] !== p
      ? ((t = (e) =>
          (e.id !== `git.toggleBlame` || w(m, e.id) > 0) &&
          lt(e, {
            allowDebugMenu: he,
            codexLocal: u,
            fileLanguageFeaturesEnabled: _,
            isAutomationsEnabled: ie || D,
            modeSwitchAvailable: w(m, e.id) > 0,
            isDictationEnabled: S,
            isGlobalDictationEnabled: T && Qe(de),
            isHotkeyWindowEnabled: fe,
            isUnifiedTabStripEnabled: O,
            isPriorityFilterEnabled: j,
            isRealtimeVoiceCommandEnabled:
              A || (e.id === `realtimeVoice` && b(e.id, z, o).length > 0),
            workLocal: p,
          })),
        (e[39] = he),
        (e[40] = u),
        (e[41] = _),
        (e[42] = de),
        (e[43] = D),
        (e[44] = S),
        (e[45] = T),
        (e[46] = fe),
        (e[47] = ie),
        (e[48] = A),
        (e[49] = O),
        (e[50] = z),
        (e[51] = o),
        (e[52] = j),
        (e[53] = m),
        (e[54] = p),
        (e[55] = t))
      : (t = e[55]);
    let n;
    (e[56] !== a || e[57] !== k || e[58] !== m
      ? ((n = (e) => ({ command: e, title: pe(e, a, ze(m, e.id), k).title })),
        (e[56] = a),
        (e[57] = k),
        (e[58] = m),
        (e[59] = n))
      : (n = e[59]),
      (W = It.filter(t).map(n).sort(Dt)));
    let r = M.trim();
    ((H =
      R &&
      !N &&
      (r.length === 0 ||
        [Y.title, Y.description, Y[L]].some((e) => g(a.formatMessage(e, { platform: o }), r) > 0))),
      (V =
        r.length === 0
          ? W
          : W.filter((e) => {
              let { command: t, title: n } = e,
                i = pe(t, a, ze(m, t.id), k).description;
              return N
                ? b(t.id, z, o).some((e) => {
                    let { label: t } = e;
                    return kt(t, r);
                  })
                : [t.id, n, i].some((e) => g(e, r) > 0);
            })),
      (U = V.findIndex(Et)),
      (e[13] = he),
      (e[14] = u),
      (e[15] = L),
      (e[16] = _),
      (e[17] = de),
      (e[18] = a),
      (e[19] = D),
      (e[20] = S),
      (e[21] = R),
      (e[22] = T),
      (e[23] = fe),
      (e[24] = ie),
      (e[25] = k),
      (e[26] = A),
      (e[27] = N),
      (e[28] = O),
      (e[29] = z),
      (e[30] = o),
      (e[31] = j),
      (e[32] = m),
      (e[33] = M),
      (e[34] = p),
      (e[35] = V),
      (e[36] = H),
      (e[37] = U),
      (e[38] = W));
  } else ((V = e[35]), (H = e[36]), (U = e[37]), (W = e[38]));
  let Ve = U,
    He;
  e[60] !== L || e[61] !== o || e[62] !== H
    ? ((He = H
        ? (0, $.jsx)($.Fragment, { children: (0, $.jsx)(mt, { platform: o, shortcut: L }) })
        : null),
      (e[60] = L),
      (e[61] = o),
      (e[62] = H),
      (e[63] = He))
    : (He = e[63]);
  let We = He,
    Ge;
  e[64] !== a || e[65] !== N || e[66] !== z || e[67] !== o || e[68] !== M || e[69] !== W
    ? ((Ge =
        z == null
          ? null
          : (0, $.jsx)(ct, {
              autoFocus: N,
              isSearchingByKeystrokes: N,
              trailingContent: (0, $.jsx)(ne, {
                tooltipContent: (0, $.jsx)(d, {
                  id: `settings.keyboardShortcuts.searchByKeystrokes.tooltip`,
                  defaultMessage: `Search by keystrokes`,
                  description: `Tooltip label for the keyboard shortcut search mode button`,
                }),
                children: (0, $.jsx)(Pe, {
                  "aria-label": a.formatMessage({
                    id: `settings.keyboardShortcuts.searchByKeystrokes.ariaLabel`,
                    defaultMessage: `Search by keystrokes`,
                    description: `Accessible label for the keyboard shortcut search mode button`,
                  }),
                  "aria-pressed": N,
                  color: N ? `secondary` : `ghost`,
                  size: `toolbar`,
                  uniform: !0,
                  onMouseDown: Tt,
                  onClick: () => {
                    (ve(``), ye(wt));
                  },
                  children: (0, $.jsx)(et, { className: `icon-sm` }),
                }),
              }),
              value: M,
              onKeyDown: N
                ? (e) => {
                    if (e.repeat) return;
                    if (
                      (e.preventDefault(),
                      e.stopPropagation(),
                      e.key === `Escape` && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey)
                    ) {
                      (ve(``), ye(!1));
                      return;
                    }
                    let t = $e(e.nativeEvent);
                    if (t != null) {
                      let e = De(t, o === `macOS`, o === `linux`),
                        n = M.length === 0 ? e : `${M} ${e}`,
                        r =
                          M.length > 0 &&
                          W.some((e) => {
                            let { command: t } = e;
                            return b(t.id, z, o).some((e) => {
                              let { label: t } = e;
                              return kt(t, n);
                            });
                          });
                      ve(r ? n : e);
                    }
                  }
                : void 0,
              onValueChange: ve,
            })),
      (e[64] = a),
      (e[65] = N),
      (e[66] = z),
      (e[67] = o),
      (e[68] = M),
      (e[69] = W),
      (e[70] = Ge))
    : (Ge = e[70]);
  let Ke = Ge,
    G;
  e[71] !== L || e[72] !== R || e[73] !== I || e[74] !== z
    ? ((G =
        z != null && (z.bindings.length > 0 || (R && L !== E.externalBrowserLinkShortcut.default))
          ? (0, $.jsx)(Pe, {
              color: `secondary`,
              disabled: I,
              size: `toolbar`,
              onClick: () => {
                (Me(null), Te(!0));
              },
              children: (0, $.jsx)(d, {
                id: `settings.keyboardShortcuts.resetAll`,
                defaultMessage: `Reset all to defaults`,
                description: `Button label to reset all customized keyboard shortcuts to their defaults`,
              }),
            })
          : null),
      (e[71] = L),
      (e[72] = R),
      (e[73] = I),
      (e[74] = z),
      (e[75] = G))
    : (G = e[75]);
  let qe;
  e[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qe = (0, $.jsx)(c, { slug: `keyboard-shortcuts` })), (e[76] = qe))
    : (qe = e[76]);
  let K;
  e[77] === O
    ? (K = e[78])
    : ((K = O
        ? (0, $.jsx)($.Fragment, { children: (0, $.jsx)(ge, { children: (0, $.jsx)(vt, {}) }) })
        : null),
      (e[77] = O),
      (e[78] = K));
  let q;
  e[79] !== Ve ||
  e[80] !== P ||
  e[81] !== Se ||
  e[82] !== We ||
  e[83] !== V ||
  e[84] !== a ||
  e[85] !== k ||
  e[86] !== z ||
  e[87] !== o ||
  e[88] !== m ||
  e[89] !== t ||
  e[90] !== B ||
  e[91] !== H
    ? ((q =
        z == null
          ? (0, $.jsx)(te, {
              children: (0, $.jsx)(d, {
                id: `settings.keyboardShortcuts.loading`,
                defaultMessage: `Loading shortcuts…`,
                description: `Loading label while keyboard shortcuts are being fetched`,
              }),
            })
          : (0, $.jsxs)(ge, {
              children: [
                V.length === 0 && !H
                  ? (0, $.jsx)(Be, {
                      control: null,
                      label: (0, $.jsx)(`span`, {
                        className: `font-normal text-secondary`,
                        children: (0, $.jsx)(d, {
                          id: `settings.keyboardShortcuts.noMatches`,
                          defaultMessage: `No matching shortcuts`,
                          description: `Empty state shown when the keyboard shortcuts search has no matches`,
                        }),
                      }),
                    })
                  : V.flatMap((e) => {
                      let { command: n, title: r } = e,
                        s = pe(n, a, ze(m, n.id), k).description,
                        c = Se[n.id],
                        l = b(n.id, z, o),
                        u =
                          z.bindings.some((e) => e.command === n.id) &&
                          (n.id !== `searchChats` || l.length > 0),
                        d = Nt({
                          commandId: n.id,
                          hasCustomBinding: u,
                          keymapState: z,
                          platform: o,
                          shortcutEntries: l,
                        }),
                        f = P?.commandId === n.id && P.mode === `append`,
                        p = l.length === 0 ? [null] : l,
                        h = f && l.length > 0 ? [...l, null] : p,
                        g = `keyboard-shortcut-${n.id}-label`;
                      return [
                        (0, $.jsx)(
                          Be,
                          {
                            className: `max-sm:flex-col max-sm:items-stretch max-sm:gap-2`,
                            control: (0, $.jsx)(`div`, {
                              "aria-labelledby": g,
                              className: `flex w-96 max-w-full flex-col max-sm:w-full`,
                              role: `group`,
                              children: h.map((e, s) => {
                                let c =
                                    P?.commandId === n.id &&
                                    (P.mode === `append`
                                      ? e == null && s === l.length
                                      : P.accelerator === (e?.accelerator ?? null)),
                                  f = `${g}-binding-${s}`;
                                return (0, $.jsx)(
                                  tt,
                                  {
                                    accelerator: e?.accelerator ?? null,
                                    acceleratorLabel: e?.label ?? null,
                                    allowsBareModifiers: i(n),
                                    allowsSequences: n.kind === `webview` && !re(n),
                                    ariaLabelledBy: f,
                                    canAppend: !re(n),
                                    captureAriaLabel: a.formatMessage(
                                      {
                                        id: `settings.keyboardShortcuts.captureAriaLabel`,
                                        defaultMessage: `Shortcut capture for {commandTitle}`,
                                        description: `Aria label for the shortcut capture input for a command`,
                                      },
                                      { commandTitle: r },
                                    ),
                                    conflict: c ? P.conflictingCommandTitle : null,
                                    disabled: B.isPending,
                                    hotkeyName: r,
                                    isCapturing: c,
                                    valueLabelId: f,
                                    onCancelCapture: () => {
                                      F(null);
                                    },
                                    onCapture: (r) => {
                                      if (e != null && jt(e.accelerator, r, o === `macOS`)) {
                                        F(null);
                                        return;
                                      }
                                      let i = At({
                                        accelerator: r,
                                        commandId: n.id,
                                        intl: a,
                                        keymapState: z,
                                        platform: o,
                                        registeredCommands: m,
                                        useMiniLanguage: k,
                                      });
                                      if (i != null) {
                                        F((e) =>
                                          e?.commandId === n.id
                                            ? { ...e, conflictingCommandTitle: i }
                                            : e,
                                        );
                                        return;
                                      }
                                      let s;
                                      ((s =
                                        P?.mode === `append`
                                          ? { type: `append`, accelerator: r }
                                          : e == null
                                            ? { type: `set`, accelerator: r }
                                            : {
                                                type: `replace`,
                                                previousAccelerator: e.accelerator,
                                                accelerator: r,
                                              }),
                                        Pt({
                                          scope: t,
                                          commandId: n.id,
                                          intl: a,
                                          setCommandKeybinding: B,
                                          setErrorByCommandId: Ce,
                                          update: s,
                                        }).finally(() => {
                                          F((e) => (e === P ? null : e));
                                        }));
                                    },
                                    onClear: () => {
                                      e != null &&
                                        Pt({
                                          scope: t,
                                          commandId: n.id,
                                          intl: a,
                                          setCommandKeybinding: B,
                                          setErrorByCommandId: Ce,
                                          update: { type: `remove`, accelerator: e.accelerator },
                                        });
                                    },
                                    onReset:
                                      s === d && u
                                        ? () => {
                                            Pt({
                                              scope: t,
                                              commandId: n.id,
                                              intl: a,
                                              setCommandKeybinding: B,
                                              setErrorByCommandId: Ce,
                                              update: { type: `reset` },
                                            });
                                          }
                                        : void 0,
                                    onStartCapture: (t) => {
                                      (Ce((e) => ({ ...e, [n.id]: void 0 })),
                                        F({
                                          commandId: n.id,
                                          accelerator:
                                            t === `append` ? null : (e?.accelerator ?? null),
                                          conflictingCommandTitle: null,
                                          mode: t,
                                        }));
                                    },
                                  },
                                  `${n.id}-${e?.accelerator ?? `unassigned`}`,
                                );
                              }),
                            }),
                            description:
                              s !== `` || c != null
                                ? (0, $.jsxs)($.Fragment, {
                                    children: [
                                      s,
                                      c == null
                                        ? null
                                        : (0, $.jsx)(`span`, {
                                            className: `block text-xs text-danger`,
                                            children: c,
                                          }),
                                    ],
                                  })
                                : void 0,
                            label: (0, $.jsx)(`span`, {
                              id: g,
                              className: `block truncate`,
                              children: r,
                            }),
                          },
                          n.id,
                        ),
                        n.id === `openBrowserTab` ? We : null,
                      ];
                    }),
                Ve === -1 ? We : null,
              ],
            })),
      (e[79] = Ve),
      (e[80] = P),
      (e[81] = Se),
      (e[82] = We),
      (e[83] = V),
      (e[84] = a),
      (e[85] = k),
      (e[86] = z),
      (e[87] = o),
      (e[88] = m),
      (e[89] = t),
      (e[90] = B),
      (e[91] = H),
      (e[92] = q))
    : (q = e[92]);
  let Xe;
  e[93] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xe = (e) => {
        (Te(e), e || Me(null));
      }),
      (e[93] = Xe))
    : (Xe = e[93]);
  let J;
  e[94] !== a || e[95] !== R || e[96] !== Le || e[97] !== t
    ? ((J = async () => {
        (Me(null), Oe(!0));
        try {
          (await Promise.all([
            Le.mutateAsync(void 0),
            R
              ? xe(t, E.externalBrowserLinkShortcut, E.externalBrowserLinkShortcut.default)
              : void 0,
          ]),
            Te(!1));
        } catch (e) {
          let t = e;
          Me(
            t instanceof Error
              ? t.message
              : a.formatMessage({
                  id: `settings.keyboardShortcuts.resetAllError`,
                  defaultMessage: `Failed to reset keyboard shortcuts`,
                  description: `Fallback error shown when resetting all customized keyboard shortcuts fails`,
                }),
          );
        }
        Oe(!1);
      }),
      (e[94] = a),
      (e[95] = R),
      (e[96] = Le),
      (e[97] = t),
      (e[98] = J))
    : (J = e[98]);
  let nt;
  e[99] !== we || e[100] !== I || e[101] !== Ae || e[102] !== J
    ? ((nt = (0, $.jsx)(Ot, { error: Ae, isPending: I, open: we, onOpenChange: Xe, onConfirm: J })),
      (e[99] = we),
      (e[100] = I),
      (e[101] = Ae),
      (e[102] = J),
      (e[103] = nt))
    : (nt = e[103]);
  let rt;
  return (
    e[104] !== Ke || e[105] !== G || e[106] !== K || e[107] !== q || e[108] !== nt
      ? ((rt = (0, $.jsxs)(x, { action: G, stickyControls: Ke, title: qe, children: [K, q, nt] })),
        (e[104] = Ke),
        (e[105] = G),
        (e[106] = K),
        (e[107] = q),
        (e[108] = nt),
        (e[109] = rt))
      : (rt = e[109]),
    rt
  );
}
function wt(e) {
  return !e;
}
function Tt(e) {
  e.preventDefault();
}
function Et(e) {
  let { command: t } = e;
  return t.id === `openBrowserTab`;
}
function Dt(e, t) {
  return ft(e.command, t.command);
}
function Ot(e) {
  let t = (0, Ft.c)(28),
    { error: n, isPending: r, onConfirm: i, onOpenChange: a, open: o } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(d, {
        id: `settings.keyboardShortcuts.resetAllConfirm.title`,
        defaultMessage: `Reset all keyboard shortcuts?`,
        description: `Title for the dialog confirming reset of all customized keyboard shortcuts`,
      })),
      (t[0] = s))
    : (s = t[0]);
  let c = s,
    l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(d, {
        id: `settings.keyboardShortcuts.resetAllConfirm.description`,
        defaultMessage: `This will discard all custom shortcuts and restore the defaults`,
        description: `Warning shown before resetting all customized keyboard shortcuts`,
      })),
      (t[1] = l))
    : (l = t[1]);
  let u = l,
    f;
  t[2] === i
    ? (f = t[3])
    : ((f = (e) => {
        (e.preventDefault(), i());
      }),
      (t[2] = i),
      (t[3] = f));
  let p, m;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(Ve, { className: `sr-only`, children: c })),
      (m = (0, $.jsx)(Le, { className: `sr-only`, children: u })),
      (t[4] = p),
      (t[5] = m))
    : ((p = t[4]), (m = t[5]));
  let h;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(we, { children: (0, $.jsx)(P, { title: c, subtitle: u }) })), (t[6] = h))
    : (h = t[6]);
  let g;
  t[7] === n
    ? (g = t[8])
    : ((g = n == null ? null : (0, $.jsx)(we, { className: `text-danger`, children: n })),
      (t[7] = n),
      (t[8] = g));
  let _;
  t[9] === a
    ? (_ = t[10])
    : ((_ = () => {
        a(!1);
      }),
      (t[9] = a),
      (t[10] = _));
  let v;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, $.jsx)(d, {
        id: `settings.keyboardShortcuts.resetAllConfirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for resetting all customized keyboard shortcuts`,
      })),
      (t[11] = v))
    : (v = t[11]);
  let y;
  t[12] === _
    ? (y = t[13])
    : ((y = (0, $.jsx)(Pe, { color: `secondary`, onClick: _, children: v })),
      (t[12] = _),
      (t[13] = y));
  let b;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, $.jsx)(d, {
        id: `settings.keyboardShortcuts.resetAllConfirm.confirm`,
        defaultMessage: `Reset all`,
        description: `Confirmation button label for resetting all customized keyboard shortcuts`,
      })),
      (t[14] = b))
    : (b = t[14]);
  let x;
  t[15] === r
    ? (x = t[16])
    : ((x = (0, $.jsx)(Pe, { color: `danger`, loading: r, type: `submit`, children: b })),
      (t[15] = r),
      (t[16] = x));
  let S;
  t[17] !== y || t[18] !== x
    ? ((S = (0, $.jsx)(we, { children: (0, $.jsxs)(Se, { children: [y, x] }) })),
      (t[17] = y),
      (t[18] = x),
      (t[19] = S))
    : (S = t[19]);
  let w;
  t[20] !== S || t[21] !== f || t[22] !== g
    ? ((w = (0, $.jsxs)(C, { as: `form`, onSubmit: f, children: [p, m, h, g, S] })),
      (t[20] = S),
      (t[21] = f),
      (t[22] = g),
      (t[23] = w))
    : (w = t[23]);
  let T;
  return (
    t[24] !== a || t[25] !== o || t[26] !== w
      ? ((T = (0, $.jsx)(Ge, {
          open: o,
          onOpenChange: a,
          showDialogClose: !1,
          size: `compact`,
          children: w,
        })),
        (t[24] = a),
        (t[25] = o),
        (t[26] = w),
        (t[27] = T))
      : (T = t[27]),
    T
  );
}
function kt(e, t) {
  return e === t || e.startsWith(`${t} `);
}
function At({
  accelerator: e,
  commandId: t,
  intl: n,
  keymapState: r,
  platform: i,
  registeredCommands: a,
  useMiniLanguage: o,
}) {
  let s = be(e, i);
  switch (s) {
    case `find`:
    case `findNext`:
    case `findPrevious`:
      return n.formatMessage(
        {
          id: `settings.keyboardShortcuts.fixedFindCommand`,
          defaultMessage: `{command, select, find {Find} findNext {Find Next} other {Find Previous}}`,
          description: `Fixed Find command title shown for a shortcut conflict`,
        },
        { command: s },
      );
    case null:
      break;
  }
  for (let s of It)
    if (
      !(s.id === t || (s.id === `toggleDebugModal` && w(a, s.id) === 0)) &&
      !Ne(s.id, t) &&
      b(s.id, r, i).some((t) => Mt(t.accelerator, e, i === `macOS`))
    )
      return pe(s, n, ze(a, s.id), o).title;
  return null;
}
function jt(e, t, n) {
  return De(e, n) === De(t, n);
}
function Mt(e, t, n) {
  let r = u(e).map((e) => De(e, n)),
    i = u(t).map((e) => De(e, n)),
    a = Math.min(r.length, i.length);
  return a > 0 && (r.length === a || i.length === a) && r.slice(0, a).every((e, t) => e === i[t]);
}
function Nt({
  commandId: e,
  hasCustomBinding: t,
  keymapState: n,
  platform: r,
  shortcutEntries: i,
}) {
  if (!t) return null;
  let a = ie({
      commandId: e,
      windowType: `electron`,
      isMacOS: r === `macOS`,
      keymapState: { ...n, bindings: [] },
    }),
    o = i.findIndex((e, t) => e.accelerator !== a[t]);
  return o === -1 ? 0 : o;
}
async function Pt({
  scope: e,
  commandId: t,
  intl: n,
  setCommandKeybinding: r,
  setErrorByCommandId: i,
  update: a,
}) {
  i((e) => ({ ...e, [t]: void 0 }));
  try {
    await r.mutateAsync({ commandId: t, update: a });
  } catch (e) {
    i((r) => ({
      ...r,
      [t]:
        e instanceof Error
          ? e.message
          : n.formatMessage({
              id: `settings.keyboardShortcuts.updateError`,
              defaultMessage: `Failed to update shortcut`,
              description: `Fallback error shown when updating an action shortcut fails`,
            }),
    }));
  }
}
var Ft, Q, $, It, Lt;
e(() => {
  ((Ft = B()),
    He(),
    A(),
    D(),
    s(),
    (Q = t(o(), 1)),
    k(),
    Ie(),
    L(),
    ve(),
    v(),
    qe(),
    ue(),
    a(),
    z(),
    Me(),
    S(),
    Xe(),
    We(),
    nt(),
    K(),
    dt(),
    ut(),
    st(),
    G(),
    p(),
    Ke(),
    at(),
    V(),
    it(),
    J(),
    U(),
    N(),
    rt(),
    W(),
    F(),
    j(),
    _(),
    m(),
    I(),
    Te(),
    pt(),
    _t(),
    St(),
    ($ = R()),
    (It = he.filter((e) => fe(e) && e.id !== `findInThread`)),
    (Lt = Oe(Ee, ({ get: e }) => ee(e, E.externalBrowserLinkShortcut))));
})();
export { Ct as KeyboardShortcutsSettings };
//# sourceMappingURL=keyboard-shortcuts-settings-d3c0c97703d3.js.map
