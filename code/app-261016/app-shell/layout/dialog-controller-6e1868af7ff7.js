import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  HO as i,
  IO as a,
  JO as o,
  KO as s,
  LNt as c,
  LO as l,
  PBt as u,
  Qst as d,
  RO as f,
  WO as p,
  XOt as m,
  Y3 as h,
  YOt as g,
  Z3 as _,
  ZSt as v,
  iCt as y,
  nCt as b,
  qO as x,
  tkt as S,
  zO as C,
} from "./app-shared-2feb3d4c6fcc.js";
import { Vjn as w, qjn as T, zjn as E } from "./app-initial-ad16eaadf81f.js";
import { Rn as D, zn as O } from "./app-primary-3e00728c2a4c.js";
function k(e) {
  let t = (0, A.c)(40),
    { canDisable: n, featureName: r, isUpdating: i, onOpenChange: o, onManage: c, onTurnOff: u } = e,
    d;
  t[0] === r
    ? (d = t[1])
    : ((d =
        r == null
          ? (0, j.jsx)(S, { ...M.title })
          : (0, j.jsx)(S, { ...M.blockedTitle, values: { featureName: r } })),
      (t[0] = r),
      (t[1] = d));
  let m = d,
    g;
  t[2] === r
    ? (g = t[3])
    : ((g =
        r == null
          ? (0, j.jsx)(S, { ...M.description })
          : (0, j.jsx)(S, { ...M.blockedDescription, values: { featureName: r } })),
      (t[2] = r),
      (t[3] = g));
  let _ = g,
    v = r == null,
    y;
  t[4] === m
    ? (y = t[5])
    : ((y = (0, j.jsx)(x, { className: `sr-only`, children: m })), (t[4] = m), (t[5] = y));
  let b;
  t[6] === _
    ? (b = t[7])
    : ((b = (0, j.jsx)(s, { className: `sr-only`, children: _ })), (t[6] = _), (t[7] = b));
  let w;
  t[8] === u
    ? (w = t[9])
    : ((w = (e) => {
        (e.preventDefault(), e.stopPropagation(), u());
      }),
      (t[8] = u),
      (t[9] = w));
  let T;
  t[10] !== _ || t[11] !== m
    ? ((T = (0, j.jsx)(C, { children: (0, j.jsx)(f, { title: m, subtitle: _ }) })),
      (t[10] = _),
      (t[11] = m),
      (t[12] = T))
    : (T = t[12]);
  let E;
  t[13] !== r || t[14] !== c || t[15] !== o
    ? ((E = r == null ? c : () => o(!1)), (t[13] = r), (t[14] = c), (t[15] = o), (t[16] = E))
    : (E = t[16]);
  let D;
  t[17] === r
    ? (D = t[18])
    : ((D =
        r == null
          ? (0, j.jsx)(S, {
              id: `chatgptConversations.lockdown.dialog.manage`,
              defaultMessage: `Manage lockdown`,
              description: `Button that opens Security settings to manage account-wide Lockdown mode`,
            })
          : (0, j.jsx)(S, {
              id: `chatgptConversations.lockdown.dialog.keepOn`,
              defaultMessage: `Keep Lockdown on`,
              description: `Dismiss the blocked-feature explanation without changing Lockdown mode`,
            })),
      (t[17] = r),
      (t[18] = D));
  let O;
  t[19] !== i || t[20] !== E || t[21] !== D
    ? ((O = (0, j.jsx)(h, {
        color: `outline`,
        disabled: i,
        size: `dialogAction`,
        type: `button`,
        onClick: E,
        children: D,
      })),
      (t[19] = i),
      (t[20] = E),
      (t[21] = D),
      (t[22] = O))
    : (O = t[22]);
  let k = !n,
    N;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, j.jsx)(S, {
        id: `chatgptConversations.lockdown.dialog.turnOff`,
        defaultMessage: `Turn off for this chat`,
        description: `Button that disables Lockdown mode only for the current chat`,
      })),
      (t[23] = N))
    : (N = t[23]);
  let P;
  t[24] !== i || t[25] !== k
    ? ((P = (0, j.jsx)(h, { disabled: k, loading: i, size: `dialogAction`, type: `submit`, children: N })),
      (t[24] = i),
      (t[25] = k),
      (t[26] = P))
    : (P = t[26]);
  let F;
  t[27] !== O || t[28] !== P
    ? ((F = (0, j.jsx)(C, { children: (0, j.jsxs)(l, { className: `flex-wrap`, children: [O, P] }) })),
      (t[27] = O),
      (t[28] = P),
      (t[29] = F))
    : (F = t[29]);
  let I;
  t[30] !== F || t[31] !== w || t[32] !== T
    ? ((I = (0, j.jsxs)(a, { as: `form`, onSubmit: w, children: [T, F] })),
      (t[30] = F),
      (t[31] = w),
      (t[32] = T),
      (t[33] = I))
    : (I = t[33]);
  let L;
  return (
    t[34] !== o || t[35] !== I || t[36] !== v || t[37] !== y || t[38] !== b
      ? ((L = (0, j.jsxs)(p, {
          open: !0,
          onOpenChange: o,
          showDialogClose: v,
          size: `compact`,
          children: [y, b, I],
        })),
        (t[34] = o),
        (t[35] = I),
        (t[36] = v),
        (t[37] = y),
        (t[38] = b),
        (t[39] = L))
      : (L = t[39]),
    L
  );
}
var A, j, M;
function N() {
  return (N = e(() => {
    ((A = u()),
      m(),
      _(),
      o(),
      i(),
      (j = c()),
      (M = g({
        blockedDescription: {
          id: `chatgptConversations.lockdown.dialog.blockedDescription`,
          defaultMessage: `Lockdown mode limits features that can connect to the web, external services, or custom tools. Turn it off for this chat to use {featureName}.`,
          description: `Explanation of why a selected feature is blocked and the option to disable Lockdown for this chat only`,
        },
        blockedTitle: {
          id: `chatgptConversations.lockdown.dialog.blockedTitle`,
          defaultMessage: `{featureName} is unavailable in Lockdown mode`,
          description: `Title explaining why the selected feature cannot be used while Lockdown mode is enabled`,
        },
        title: {
          id: `chatgptConversations.lockdown.dialog.title`,
          defaultMessage: `Lockdown mode is on for this chat`,
          description: `Title of the dialog explaining the current chat's Lockdown restrictions`,
        },
        description: {
          id: `chatgptConversations.lockdown.dialog.description`,
          defaultMessage: `Lockdown mode limits features that can connect to the web, external services, or custom tools. If you turn it off for this chat, you can turn it back on anytime from the More menu in the top-right corner.`,
          description: `Explanation of Lockdown mode and how to restore it after disabling it for one chat`,
        },
      })));
  }))();
}
function P(e) {
  let n = (0, F.c)(20),
    { canDisable: r, conversationId: i, featureName: a, onClose: o, onManage: s } = e,
    c = t(d),
    l = y(E),
    u = b(w, i),
    [f, p] = (0, I.useState)(!1),
    m;
  n[0] !== r || n[1] !== u || n[2] !== i || n[3] !== l || n[4] !== f || n[5] !== o || n[6] !== c
    ? ((m = async () => {
        !f && l && u && r && (p(!0), (await O(c, i, !0)) && o(), p(!1));
      }),
      (n[0] = r),
      (n[1] = u),
      (n[2] = i),
      (n[3] = l),
      (n[4] = f),
      (n[5] = o),
      (n[6] = c),
      (n[7] = m))
    : (m = n[7]);
  let h = m,
    g = l && u && r,
    _ = s ?? o,
    v;
  n[8] !== f || n[9] !== o
    ? ((v = (e) => {
        !e && !f && o();
      }),
      (n[8] = f),
      (n[9] = o),
      (n[10] = v))
    : (v = n[10]);
  let x;
  n[11] === h ? (x = n[12]) : ((x = () => void h()), (n[11] = h), (n[12] = x));
  let S;
  return (
    n[13] !== a || n[14] !== f || n[15] !== g || n[16] !== _ || n[17] !== v || n[18] !== x
      ? ((S = (0, L.jsx)(k, {
          canDisable: g,
          featureName: a,
          isUpdating: f,
          onManage: _,
          onOpenChange: v,
          onTurnOff: x,
        })),
        (n[13] = a),
        (n[14] = f),
        (n[15] = g),
        (n[16] = _),
        (n[17] = v),
        (n[18] = x),
        (n[19] = S))
      : (S = n[19]),
    S
  );
}
var F, I, L;
function R() {
  return (R = e(() => {
    ((F = u()), v(), (I = r()), n(), D(), N(), T(), (L = c()));
  }))();
}
R();
export { P as ChatGptConsumerLockdownDialogController };
//# sourceMappingURL=dialog-controller-6e1868af7ff7.js.map
