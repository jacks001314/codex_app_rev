import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ixt as t,
  Pxt as n,
  TJ as r,
  VDt as i,
  Vxt as a,
  _wt as o,
  _xt as s,
  gwt as ee,
  jDt as c,
  mV as te,
  vzt as l,
  wxt as ne,
  xMt as u,
  yzt as d,
  zxt as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as re,
  $pr as p,
  A0 as m,
  Bpr as h,
  Cpr as ie,
  Cwr as g,
  Cy as ae,
  GMr as oe,
  HG as _,
  Mbn as se,
  O0 as v,
  OPr as y,
  Opr as b,
  QPr as ce,
  UG as le,
  Vpr as ue,
  WG as de,
  XHt as x,
  XMr as fe,
  XPr as S,
  YHt as pe,
  YPr as me,
  _Tn as C,
  _Tr as w,
  eFr as T,
  fUt as he,
  gwr as ge,
  hUt as _e,
  jbn as E,
  kPr as ve,
  mUt as D,
  nSn as ye,
  pUt as be,
  rSn as O,
  rmr as xe,
  tNr as k,
  v8n as A,
  vTn as j,
  vTr as Se,
  vmr as M,
  wpr as Ce,
  wwr as we,
  xy as Te,
  ymr as Ee,
  zpr as N,
} from "./app-initial-5851df3f6cb1.js";
import { r as P, t as F } from "./task-events-f449478e42ea.js";
import { n as I, t as De } from "./thread-panel-toggle-button-66afa6499036.js";
import { n as L, t as Oe } from "./lazy-room-view-da68d3e602b4.js";
function R(e) {
  let n = (0, z.c)(61),
    { children: r, conversationId: s, contentX: ee, isOrbit: c } = e,
    l = c !== void 0 && c,
    u = t(ge),
    d = u.value.orbitId,
    p = i(),
    m = a(N),
    h,
    g;
  (n[0] === u
    ? ((h = n[1]), (g = n[2]))
    : ((h = () => u.watch(ke)), (g = [u]), (n[0] = u), (n[1] = h), (n[2] = g)),
    (0, B.useEffect)(h, g));
  let { data: ae } = f(ie, d ?? null),
    _;
  n[3] === m ? (_ = n[4]) : ((_ = { enabled: m }), (n[3] = m), (n[4] = _));
  let { data: v } = f(Ce, d == null ? s : null, _),
    y = d == null ? v : ae,
    [b, ue] = (0, B.useState)(!1),
    x = y?.messaging_room_id != null,
    S = f(he, d == null ? s : null),
    w = a(_e),
    T = f(re, s),
    E;
  n[5] !== s || n[6] !== d || n[7] !== T
    ? ((E = d != null || s == null ? null : { hostId: T, threadId: s }),
      (n[5] = s),
      (n[6] = d),
      (n[7] = T),
      (n[8] = E))
    : (E = n[8]);
  let D = f(xe, E),
    O;
  n[9] !== l || n[10] !== w || n[11] !== D || n[12] !== y?.aeon_kind || n[13] !== u.value
    ? ((O = l || D || Se(u.value) || y?.aeon_kind === `orbit` || w),
      (n[9] = l),
      (n[10] = w),
      (n[11] = D),
      (n[12] = y?.aeon_kind),
      (n[13] = u.value),
      (n[14] = O))
    : (O = n[14]);
  let k = O,
    A = m && (k || S),
    j = ne(),
    M = j.state?.orbitPrewarmId,
    P = M ?? j.key,
    F = (0, B.useRef)(null),
    I = (0, B.useRef)(null),
    L,
    R;
  (n[15] !== s || n[16] !== u || n[17] !== A
    ? ((L = () => {
        if (A)
          return u.watch((e) => {
            if (s == null || e.get(ye) !== !0 || e.get(we)) return;
            let t = e.get(Ee) ? e.get(le, s).data : e.get(de).data;
            if (t?.conversationId !== s) return;
            let n = JSON.stringify([t.roomId, t.unreadMessageAt]),
              r = e.get(ce, e.get(re, s));
            if (r == null || (I.current?.key === n && I.current.client === r)) return;
            let i = { key: n, client: r };
            I.current = i;
            let a = me(e, r.hostId).markConversationAsRead(s),
              o = !1;
            return (
              a.then(
                () => {
                  o = !0;
                },
                () => {
                  I.current === i && (I.current = null);
                },
              ),
              () => {
                (!o && I.current === i && (I.current = null), a[Symbol.dispose]());
              }
            );
          });
      }),
      (R = [s, u, A]),
      (n[15] = s),
      (n[16] = u),
      (n[17] = A),
      (n[18] = L),
      (n[19] = R))
    : ((L = n[18]), (R = n[19])),
    (0, B.useEffect)(L, R));
  let H, U;
  (n[20] !== s || n[21] !== d || n[22] !== M || n[23] !== P || n[24] !== u
    ? ((U = () =>
        u.watch((e) => {
          if (e.get(we) || !e.get(N)) return;
          let t = d == null ? e.get(Ce, s).data : e.get(ie, d).data;
          t != null &&
            t.aeon_kind !== `aeon` &&
            (je(u, e.get(oe), e.get(fe)),
            t.messaging_room_id != null &&
              e.get(ve, `775990392`) &&
              (F.current?.key !== P && (F.current = { key: P, attempt: u.get(se, void 0).claim(M) }),
              F.current.attempt.room(e, t)));
        })),
      (H = [s, d, M, P, u]),
      (n[20] = s),
      (n[21] = d),
      (n[22] = M),
      (n[23] = P),
      (n[24] = u),
      (n[25] = H),
      (n[26] = U))
    : ((H = n[25]), (U = n[26])),
    (0, B.useEffect)(U, H),
    A && !b && ue(!0));
  let W = !k && (!A || y !== void 0),
    G = ee ?? 0,
    K;
  n[27] === G ? (K = n[28]) : ((K = { "--orbit-messages-content-x": G }), (n[27] = G), (n[28] = K));
  let q = K,
    J;
  n[29] === s
    ? (J = n[30])
    : ((J = s == null ? null : (0, V.jsx)(Te, { conversationId: s })), (n[29] = s), (n[30] = J));
  let Y;
  n[31] !== r || n[32] !== W || n[33] !== A
    ? ((Y = W ? (0, V.jsx)(`div`, { className: `h-full min-h-0`, hidden: A, children: r }) : null),
      (n[31] = r),
      (n[32] = W),
      (n[33] = A),
      (n[34] = Y))
    : (Y = n[34]);
  let X;
  n[35] !== s || n[36] !== d || n[37] !== m || n[38] !== W
    ? ((X = !m && !W ? (0, V.jsx)(Ae, { conversationId: s, dotId: d }) : null),
      (n[35] = s),
      (n[36] = d),
      (n[37] = m),
      (n[38] = W),
      (n[39] = X))
    : (X = n[39]);
  let Z;
  n[40] !== m || n[41] !== x || n[42] !== p || n[43] !== k || n[44] !== u || n[45] !== A
    ? ((Z =
        m && !k && (x || A)
          ? (0, V.jsx)(pe.HeaderAction, {
              actionId: `aeon-conversation-view`,
              align: `end`,
              order: 225,
              unifiedSlotPosition: `thread`,
              children: (0, V.jsx)(De, {
                label: p.formatMessage({
                  id: `restricted.aeonMessaging.toggle`,
                  defaultMessage: `Messages`,
                  description: `Tooltip and accessible label for the chat-bubble button at the top of a dot that toggles between its task and direct messages; the button is selected while messages are visible`,
                }),
                pressed: A,
                onClick: () => u.set(be, A ? `work` : `chat`),
                children: (0, V.jsx)(te, {}),
              }),
            })
          : null),
      (n[40] = m),
      (n[41] = x),
      (n[42] = p),
      (n[43] = k),
      (n[44] = u),
      (n[45] = A),
      (n[46] = Z))
    : (Z = n[46]);
  let Q;
  n[47] !== q || n[48] !== s || n[49] !== d || n[50] !== m || n[51] !== b || n[52] !== k || n[53] !== A
    ? ((Q =
        m && b
          ? (0, V.jsx)(o.div, {
              className: `h-full min-h-0`,
              hidden: !A,
              style: q,
              children: (0, V.jsx)(B.Suspense, {
                fallback: (0, V.jsx)(C, { delay: !k, debugName: `AeonConversationView.messages` }),
                children: (0, V.jsx)(Oe, { conversationId: s, dotId: d, active: A }),
              }),
            })
          : null),
      (n[47] = q),
      (n[48] = s),
      (n[49] = d),
      (n[50] = m),
      (n[51] = b),
      (n[52] = k),
      (n[53] = A),
      (n[54] = Q))
    : (Q = n[54]);
  let $;
  return (
    n[55] !== J || n[56] !== Y || n[57] !== X || n[58] !== Z || n[59] !== Q
      ? (($ = (0, V.jsxs)(V.Fragment, { children: [J, Y, X, Z, Q] })),
        (n[55] = J),
        (n[56] = Y),
        (n[57] = X),
        (n[58] = Z),
        (n[59] = Q),
        (n[60] = $))
      : ($ = n[60]),
    $
  );
}
function ke(e) {
  let { get: t } = e;
  t(P);
}
function Ae(e) {
  let t = (0, z.c)(5),
    { conversationId: n, dotId: r } = e;
  if (a(h)) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, V.jsx)(C, { delay: !1, debugName: `AeonConversationView.access` })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, V.jsx)(C, { delay: !1, debugName: `AeonConversationView.messages` })), (t[1] = i))
    : (i = t[1]);
  let o;
  return (
    t[2] !== n || t[3] !== r
      ? ((o = (0, V.jsx)(B.Suspense, {
          fallback: i,
          children: (0, V.jsx)(Oe, { conversationId: n, dotId: r, active: !1 }),
        })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function je(e, t, n) {
  t == null ||
    n == null ||
    e.query.getData(v, { accountId: t, userId: n })?.first_name?.trim() ||
    e.query.getOrFetch(v, { accountId: t, userId: n }).catch(() => void 0);
}
var z, B, V;
function H() {
  return (H = e(() => {
    ((z = l()),
      ee(),
      n(),
      (B = d()),
      c(),
      s(),
      S(),
      T(),
      A(),
      x(),
      O(),
      k(),
      m(),
      r(),
      j(),
      M(),
      b(),
      ae(),
      g(),
      y(),
      I(),
      w(),
      p(),
      ue(),
      L(),
      E(),
      _(),
      F(),
      D(),
      (V = u()));
  }))();
}
export { H as n, R as t };
//# sourceMappingURL=conversation-view-7b7c0046b8d4.js.map
