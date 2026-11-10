import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  EY as n,
  IDt as r,
  Mz as i,
  Nz as a,
  Sj as o,
  TY as s,
  VDt as c,
  _Mt as l,
  _wt as u,
  gMt as d,
  gwt as f,
  jDt as p,
  nk as m,
  sj as h,
  t3 as g,
  tk as _,
  vzt as v,
  xMt as y,
  yzt as b,
} from "./app-shared-bbfeca5e5737.js";
import { Yk as x, qk as S } from "./app-initial-5851df3f6cb1.js";
import { Ql as C, Xl as w, Zl as T } from "./app-primary-fe8a450b3b04.js";
function E(e) {
  let t = (0, N.c)(5),
    { className: r, tone: a } = e,
    o = (a === void 0 ? `default` : a) === `warning` ? `text-warning` : `text-tertiary`,
    s;
  t[0] !== r || t[1] !== o ? ((s = d(`shrink-0`, o, r)), (t[0] = r), (t[1] = o), (t[2] = s)) : (s = t[2]);
  let c;
  return (
    t[3] === s
      ? (c = t[4])
      : ((c = (0, F.jsx)(i, { className: s, asset: n, "aria-hidden": !0 })), (t[3] = s), (t[4] = c)),
    c
  );
}
function D(e) {
  let n = (0, N.c)(43),
    { className: r, isExpandable: i, review: a } = e,
    o = i === void 0 || i,
    s = c(),
    [l, f] = (0, P.useState)(!1),
    p;
  n[0] !== s || n[1] !== a ? ((p = T(s, a)), (n[0] = s), (n[1] = a), (n[2] = p)) : (p = n[2]);
  let m = p;
  if (!o) {
    let e;
    n[3] === r
      ? (e = n[4])
      : ((e = d(`min-w-0 truncate pt-1 text-codex-description/80`, r)), (n[3] = r), (n[4] = e));
    let t;
    return (
      n[5] !== e || n[6] !== m
        ? ((t = (0, F.jsx)(`div`, { className: e, children: m })), (n[5] = e), (n[6] = m), (n[7] = t))
        : (t = n[7]),
      t
    );
  }
  let g = a.status === `denied` && a.riskLevel === `high`,
    v;
  n[8] !== s || n[9] !== a ? ((v = w(s, a)), (n[8] = s), (n[9] = a), (n[10] = v)) : (v = n[10]);
  let y = v,
    b;
  n[11] === r ? (b = n[12]) : ((b = d(`flex flex-col pt-1`, r)), (n[11] = r), (n[12] = b));
  let x;
  n[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((x = () => f(O)), (n[13] = x)) : (x = n[13]);
  let C = a.status === `inProgress`,
    E = g ? `text-warning` : `text-codex-description/80 group-hover/automatic-approval-review:text-default`,
    D;
  n[14] === E ? (D = n[15]) : ((D = d(`min-w-0 truncate`, E)), (n[14] = E), (n[15] = D));
  let k;
  n[16] !== C || n[17] !== D || n[18] !== m
    ? ((k = (0, F.jsx)(S, { active: C, className: D, children: m })),
      (n[16] = C),
      (n[17] = D),
      (n[18] = m),
      (n[19] = k))
    : (k = n[19]);
  let A = l && `rotate-90 opacity-100`,
    j;
  n[20] === A
    ? (j = n[21])
    : ((j = d(
        `icon-2xs shrink-0 text-tertiary transition-[opacity,transform] duration-basic opacity-0 group-hover/automatic-approval-review:opacity-100`,
        A,
      )),
      (n[20] = A),
      (n[21] = j));
  let M;
  n[22] === j ? (M = n[23]) : ((M = (0, F.jsx)(_, { className: j })), (n[22] = j), (n[23] = M));
  let I;
  n[24] !== l || n[25] !== M || n[26] !== k
    ? ((I = (0, F.jsxs)(t, {
        className: `group/automatic-approval-review inline-flex w-fit max-w-full gap-1.5 text-start`,
        color: `ghostMuted`,
        focusRing: `inset`,
        size: `inline`,
        onClick: x,
        "aria-expanded": l,
        children: [k, M],
      })),
      (n[24] = l),
      (n[25] = M),
      (n[26] = k),
      (n[27] = I))
    : (I = n[27]);
  let L = l ? `auto` : 0,
    R = +!!l,
    z;
  n[28] !== L || n[29] !== R
    ? ((z = { height: L, opacity: R }), (n[28] = L), (n[29] = R), (n[30] = z))
    : (z = n[30]);
  let B = l ? `auto` : `none`,
    V;
  n[31] === B ? (V = n[32]) : ((V = { overflow: `hidden`, pointerEvents: B }), (n[31] = B), (n[32] = V));
  let H;
  n[33] === y
    ? (H = n[34])
    : ((H = (0, F.jsx)(`p`, {
        className: `max-w-[80ch] pt-1 text-size-chat leading-relaxed whitespace-pre-wrap text-text/60`,
        children: y,
      })),
      (n[33] = y),
      (n[34] = H));
  let U;
  n[35] !== z || n[36] !== V || n[37] !== H
    ? ((U = (0, F.jsx)(u.div, { initial: !1, animate: z, transition: h, style: V, children: H })),
      (n[35] = z),
      (n[36] = V),
      (n[37] = H),
      (n[38] = U))
    : (U = n[38]);
  let W;
  return (
    n[39] !== I || n[40] !== U || n[41] !== b
      ? ((W = (0, F.jsxs)(`div`, { className: b, children: [I, U] })),
        (n[39] = I),
        (n[40] = U),
        (n[41] = b),
        (n[42] = W))
      : (W = n[42]),
    W
  );
}
function O(e) {
  return !e;
}
function k(e) {
  let t = (0, N.c)(9),
    { className: n, isExpandable: r, reviews: i } = e,
    a;
  if (t[0] !== n || t[1] !== r || t[2] !== i) {
    let e;
    (t[4] !== n || t[5] !== r
      ? ((e = (e) => (0, F.jsx)(D, { className: n, isExpandable: r, review: e }, e.id)),
        (t[4] = n),
        (t[5] = r),
        (t[6] = e))
      : (e = t[6]),
      (a = i.map(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a));
  } else a = t[3];
  let o;
  return (
    t[7] === a ? (o = t[8]) : ((o = (0, F.jsx)(F.Fragment, { children: a })), (t[7] = a), (t[8] = o)),
    o
  );
}
function A(e) {
  let t = (0, N.c)(4),
    { isDeclined: n, reviews: r } = e;
  if (!n) {
    let e;
    return (t[0] === r ? (e = t[1]) : ((e = (0, F.jsx)(k, { reviews: r })), (t[0] = r), (t[1] = e)), e);
  }
  let i;
  return (t[2] === r ? (i = t[3]) : ((i = (0, F.jsx)(j, { reviews: r })), (t[2] = r), (t[3] = i)), i);
}
function j(e) {
  let t = (0, N.c)(4),
    { reviews: n } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = n.some(M)), (t[0] = n), (t[1] = i));
  let a = i,
    o;
  return (
    t[2] === a
      ? (o = t[3])
      : ((o = (0, F.jsx)(`p`, {
          className: `max-w-[80ch] pt-1 text-size-chat leading-relaxed text-text/60`,
          children: a
            ? (0, F.jsx)(r, {
                id: `localConversation.automaticApprovalReview.explicitAuthorizationHighRisk`,
                defaultMessage: `Requires explicit authorization because this action is considered high risk`,
                description: `Explanation shown for a tool call that automatic review declined because the action was considered high risk`,
              })
            : (0, F.jsx)(r, {
                id: `localConversation.automaticApprovalReview.explicitAuthorization`,
                defaultMessage: `Requires explicit authorization`,
                description: `Explanation shown for a tool call that automatic review declined`,
              }),
        })),
        (t[2] = a),
        (t[3] = o)),
    o
  );
}
function M(e) {
  return e.status === `denied` && e.riskLevel === `high`;
}
var N, P, F;
function I() {
  return (I = e(() => {
    ((N = v()), s(), l(), f(), (P = b()), p(), g(), a(), m(), o(), C(), x(), (F = y()));
  }))();
}
export { A as a, k as i, j as n, I as o, D as r, E as t };
//# sourceMappingURL=automatic-approval-review-details-d0acb2472248.js.map
