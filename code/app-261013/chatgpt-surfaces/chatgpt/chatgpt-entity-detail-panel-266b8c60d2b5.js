import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AOt as n,
  Cot as r,
  DOt as i,
  EOt as a,
  IDt as o,
  Ixt as s,
  OOt as c,
  Pxt as l,
  TJ as u,
  Vxt as d,
  _Mt as f,
  gMt as p,
  jDt as m,
  kOt as h,
  nSt as g,
  qz as _,
  t3 as v,
  vzt as y,
  wot as b,
  xMt as x,
  yzt as S,
  zxt as C,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as w,
  Jyr as ee,
  NDr as T,
  Nxn as E,
  Sxn as D,
  Txn as O,
  Uyr as k,
  eDr as A,
  gwr as j,
  kZn as M,
  nDr as N,
  pOr as P,
  vxn as F,
  xwr as I,
  yjn as te,
} from "./app-initial-5851df3f6cb1.js";
import { Da as L, Ea as R } from "./app-primary-fe8a450b3b04.js";
function z(e) {
  let t = (0, B.c)(13),
    n,
    r,
    o;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (o = t[3]))
    : (({ className: r, children: n, ...o } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = o));
  let s;
  t[4] === r ? (s = t[5]) : ((s = p(`relative min-h-0 overflow-hidden`, r)), (t[4] = r), (t[5] = s));
  let l;
  t[6] !== n || t[7] !== o
    ? ((l = (0, V.jsx)(h, { className: `size-full overscroll-contain`, tabIndex: 0, ...o, children: n })),
      (t[6] = n),
      (t[7] = o),
      (t[8] = l))
    : (l = t[8]);
  let u;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, V.jsx)(i, {
        className: `flex w-2 touch-none p-0.5 select-none`,
        orientation: `vertical`,
        children: (0, V.jsx)(c, {
          className: `relative flex-1 rounded-full bg-token-scrollbar-slider-background hover:bg-token-scrollbar-slider-hover-background active:bg-token-scrollbar-slider-active-background`,
        }),
      })),
      (t[9] = u))
    : (u = t[9]);
  let d;
  return (
    t[10] !== s || t[11] !== l
      ? ((d = (0, V.jsxs)(a, { className: s, type: `hover`, children: [l, u] })),
        (t[10] = s),
        (t[11] = l),
        (t[12] = d))
      : (d = t[12]),
    d
  );
}
var B, V;
function H() {
  return (H = e(() => {
    ((B = y()), n(), f(), (V = x()));
  }))();
}
function U(e) {
  let t = (0, J.c)(20),
    { accountId: n, children: r, conversationId: i, params: a } = e,
    o = s(j),
    c = N(`1290093942`),
    l = C(Q, i),
    u = d(P),
    f = (0, Y.useSyncExternalStore)(E, D, G),
    p;
  t[0] !== f || t[1] !== a || t[2] !== o.value
    ? ((p = I(o.value) == null ? f : `chatgpt:${a.sourceConversationId}`),
      (t[0] = f),
      (t[1] = a),
      (t[2] = o.value),
      (t[3] = p))
    : (p = t[3]);
  let m = p;
  if (n !== u) return null;
  let h;
  t[4] !== n || t[5] !== f || t[6] !== m || t[7] !== c || t[8] !== l || t[9] !== a
    ? ((h =
        c &&
        n != null &&
        m?.startsWith(`chatgpt:`) === !0 &&
        m === f &&
        l &&
        a.extraParams?.disableFollowUpButton !== !0),
      (t[4] = n),
      (t[5] = f),
      (t[6] = m),
      (t[7] = c),
      (t[8] = l),
      (t[9] = a),
      (t[10] = h))
    : (h = t[10]);
  let g = h,
    _;
  t[11] !== n || t[12] !== i || t[13] !== a || t[14] !== o || t[15] !== g
    ? ((_ = g
        ? () => {
            if (n == null || o.get(P) !== n) return;
            let e = I(o.value) == null ? D() : `chatgpt:${a.sourceConversationId}`;
            if (!e?.startsWith(`chatgpt:`) || D() !== e) return;
            let t = e.slice(8),
              r = o.get(Z, i);
            (L(o, t, {
              accountId: n,
              label: a.query,
              instruction: `The user is referring to this in particular:\n${a.query}\n\n---\n\nReply to user query using the following additional context:\n ${r}`,
              disableWebSearch: !1,
              targetedReplyText: a.query,
              sidebarFollowUp: {
                conversationId: i,
                messageIds: Object.values(o.get(M, i) ?? {}).flatMap(W),
                originatingConversationId: a.sourceConversationId,
                category: a.category ?? `other`,
              },
            }),
              F(e));
          }
        : void 0),
      (t[11] = n),
      (t[12] = i),
      (t[13] = a),
      (t[14] = o),
      (t[15] = g),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  return (
    t[17] !== r || t[18] !== _
      ? ((v = (0, X.jsx)(K, { onFollowUp: _, children: r })), (t[17] = r), (t[18] = _), (t[19] = v))
      : (v = t[19]),
    v
  );
}
function W(e) {
  let { message: t } = e;
  return t?.id == null ? [] : [t.id];
}
function G() {
  return null;
}
function K(e) {
  let t = (0, J.c)(8),
    { children: n, onFollowUp: r } = e,
    i = r == null ? void 0 : `pb-24`,
    a;
  t[0] !== n || t[1] !== i
    ? ((a = (0, X.jsx)(z, {
        className: `h-full`,
        children: (0, X.jsx)(`div`, { className: i, children: n }),
      })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === r ? (o = t[4]) : ((o = r != null && (0, X.jsx)(q, { onFollowUp: r })), (t[3] = r), (t[4] = o));
  let s;
  return (
    t[5] !== a || t[6] !== o
      ? ((s = (0, X.jsxs)(`div`, { className: `relative h-full min-h-0 flex-1`, children: [a, o] })),
        (t[5] = a),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function q(e) {
  let n = (0, J.c)(4),
    { onFollowUp: r } = e,
    i,
    a;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, X.jsx)(_, {})),
      (a = (0, X.jsx)(o, {
        id: `entities.sidebarFollowUpFloatingButton.label`,
        defaultMessage: `Follow up`,
        description: `The label for the follow-up button, allowing users to ask follow up questions in the conversation based on the entity information shown in the sidebar when clicked.`,
      })),
      (n[0] = i),
      (n[1] = a))
    : ((i = n[0]), (a = n[1]));
  let s;
  return (
    n[2] === r
      ? (s = n[3])
      : ((s = (0, X.jsx)(`div`, {
          className: `absolute end-6 bottom-6`,
          children: (0, X.jsxs)(t, { color: `primary`, size: `large`, onClick: r, children: [i, a] }),
        })),
        (n[2] = r),
        (n[3] = s)),
    s
  );
}
var J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((J = y()),
      l(),
      ee(),
      (Y = S()),
      m(),
      te(),
      T(),
      R(),
      O(),
      v(),
      u(),
      H(),
      b(),
      w(),
      A(),
      (X = x()),
      (Z = g(r, (e, { get: t }) =>
        Object.values(t(M, e) ?? {}).flatMap(({ message: e }) => (e == null ? [] : [k(e)])).join(`
`),
      )),
      (Q = g(r, (e, { get: t }) => t(Z, e).trim().length > 0)));
  }))();
}
export { z as a, $ as i, K as n, H as o, q as r, U as t };
//# sourceMappingURL=chatgpt-entity-detail-panel-266b8c60d2b5.js.map
