import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  Cot as r,
  IDt as i,
  Ixt as a,
  Pxt as o,
  Vxt as s,
  _O as c,
  cO as l,
  fO as u,
  gO as d,
  jDt as f,
  lO as p,
  mO as m,
  oO as h,
  sO as g,
  t3 as _,
  vO as v,
  vzt as y,
  wot as b,
  xMt as x,
  yzt as S,
  zxt as C,
} from "./app-shared-bbfeca5e5737.js";
import { gOn as w, vOn as T, wOn as E } from "./app-initial-5851df3f6cb1.js";
import { An as D, kn as O } from "./app-primary-fe8a450b3b04.js";
function k(e) {
  let n = (0, A.c)(40),
    { canDisable: r, featureName: a, isUpdating: o, onOpenChange: s, onManage: u, onTurnOff: f } = e,
    _;
  n[0] === a
    ? (_ = n[1])
    : ((_ =
        a == null
          ? (0, j.jsx)(i, { ...M.title })
          : (0, j.jsx)(i, { ...M.blockedTitle, values: { featureName: a } })),
      (n[0] = a),
      (n[1] = _));
  let v = _,
    y;
  n[2] === a
    ? (y = n[3])
    : ((y =
        a == null
          ? (0, j.jsx)(i, { ...M.description })
          : (0, j.jsx)(i, { ...M.blockedDescription, values: { featureName: a } })),
      (n[2] = a),
      (n[3] = y));
  let b = y,
    x = a == null,
    S;
  n[4] === v
    ? (S = n[5])
    : ((S = (0, j.jsx)(c, { className: `sr-only`, children: v })), (n[4] = v), (n[5] = S));
  let C;
  n[6] === b
    ? (C = n[7])
    : ((C = (0, j.jsx)(d, { className: `sr-only`, children: b })), (n[6] = b), (n[7] = C));
  let w;
  n[8] === f
    ? (w = n[9])
    : ((w = (e) => {
        (e.preventDefault(), e.stopPropagation(), f());
      }),
      (n[8] = f),
      (n[9] = w));
  let T;
  n[10] !== b || n[11] !== v
    ? ((T = (0, j.jsx)(p, { children: (0, j.jsx)(l, { title: v, subtitle: b }) })),
      (n[10] = b),
      (n[11] = v),
      (n[12] = T))
    : (T = n[12]);
  let E;
  n[13] !== a || n[14] !== u || n[15] !== s
    ? ((E = a == null ? u : () => s(!1)), (n[13] = a), (n[14] = u), (n[15] = s), (n[16] = E))
    : (E = n[16]);
  let D;
  n[17] === a
    ? (D = n[18])
    : ((D =
        a == null
          ? (0, j.jsx)(i, {
              id: `chatgptConversations.lockdown.dialog.manage`,
              defaultMessage: `Manage lockdown`,
              description: `Button that opens Security settings to manage account-wide Lockdown mode`,
            })
          : (0, j.jsx)(i, {
              id: `chatgptConversations.lockdown.dialog.keepOn`,
              defaultMessage: `Keep Lockdown on`,
              description: `Dismiss the blocked-feature explanation without changing Lockdown mode`,
            })),
      (n[17] = a),
      (n[18] = D));
  let O;
  n[19] !== o || n[20] !== E || n[21] !== D
    ? ((O = (0, j.jsx)(t, {
        color: `outline`,
        disabled: o,
        size: `dialogAction`,
        type: `button`,
        onClick: E,
        children: D,
      })),
      (n[19] = o),
      (n[20] = E),
      (n[21] = D),
      (n[22] = O))
    : (O = n[22]);
  let k = !r,
    N;
  n[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, j.jsx)(i, {
        id: `chatgptConversations.lockdown.dialog.turnOff`,
        defaultMessage: `Turn off for this chat`,
        description: `Button that disables Lockdown mode only for the current chat`,
      })),
      (n[23] = N))
    : (N = n[23]);
  let P;
  n[24] !== o || n[25] !== k
    ? ((P = (0, j.jsx)(t, { disabled: k, loading: o, size: `dialogAction`, type: `submit`, children: N })),
      (n[24] = o),
      (n[25] = k),
      (n[26] = P))
    : (P = n[26]);
  let F;
  n[27] !== O || n[28] !== P
    ? ((F = (0, j.jsx)(p, { children: (0, j.jsxs)(g, { className: `flex-wrap`, children: [O, P] }) })),
      (n[27] = O),
      (n[28] = P),
      (n[29] = F))
    : (F = n[29]);
  let I;
  n[30] !== F || n[31] !== w || n[32] !== T
    ? ((I = (0, j.jsxs)(h, { as: `form`, onSubmit: w, children: [T, F] })),
      (n[30] = F),
      (n[31] = w),
      (n[32] = T),
      (n[33] = I))
    : (I = n[33]);
  let L;
  return (
    n[34] !== s || n[35] !== I || n[36] !== x || n[37] !== S || n[38] !== C
      ? ((L = (0, j.jsxs)(m, {
          open: !0,
          onOpenChange: s,
          showDialogClose: x,
          size: `compact`,
          children: [S, C, I],
        })),
        (n[34] = s),
        (n[35] = I),
        (n[36] = x),
        (n[37] = S),
        (n[38] = C),
        (n[39] = L))
      : (L = n[39]),
    L
  );
}
var A, j, M;
function N() {
  return (N = e(() => {
    ((A = y()),
      f(),
      _(),
      v(),
      u(),
      (j = x()),
      (M = n({
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
  let t = (0, F.c)(20),
    { canDisable: n, conversationId: i, featureName: o, onClose: c, onManage: l } = e,
    u = a(r),
    d = s(w),
    f = C(T, i),
    [p, m] = (0, I.useState)(!1),
    h;
  t[0] !== n || t[1] !== f || t[2] !== i || t[3] !== d || t[4] !== p || t[5] !== c || t[6] !== u
    ? ((h = async () => {
        !p && d && f && n && (m(!0), (await D(u, i, !0)) && c(), m(!1));
      }),
      (t[0] = n),
      (t[1] = f),
      (t[2] = i),
      (t[3] = d),
      (t[4] = p),
      (t[5] = c),
      (t[6] = u),
      (t[7] = h))
    : (h = t[7]);
  let g = h,
    _ = d && f && n,
    v = l ?? c,
    y;
  t[8] !== p || t[9] !== c
    ? ((y = (e) => {
        !e && !p && c();
      }),
      (t[8] = p),
      (t[9] = c),
      (t[10] = y))
    : (y = t[10]);
  let b;
  t[11] === g ? (b = t[12]) : ((b = () => void g()), (t[11] = g), (t[12] = b));
  let x;
  return (
    t[13] !== o || t[14] !== p || t[15] !== _ || t[16] !== v || t[17] !== y || t[18] !== b
      ? ((x = (0, L.jsx)(k, {
          canDisable: _,
          featureName: o,
          isUpdating: p,
          onManage: v,
          onOpenChange: y,
          onTurnOff: b,
        })),
        (t[13] = o),
        (t[14] = p),
        (t[15] = _),
        (t[16] = v),
        (t[17] = y),
        (t[18] = b),
        (t[19] = x))
      : (x = t[19]),
    x
  );
}
var F, I, L;
function R() {
  return (R = e(() => {
    ((F = y()), o(), (I = S()), b(), O(), N(), E(), (L = x()));
  }))();
}
R();
export { P as ChatGptConsumerLockdownDialogController };
//# sourceMappingURL=dialog-controller-baaeb8b2cfde.js.map
