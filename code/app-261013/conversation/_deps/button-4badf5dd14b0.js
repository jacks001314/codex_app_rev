import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  CS as n,
  Cot as r,
  IDt as i,
  Ixt as a,
  Mz as o,
  Nz as s,
  Pxt as c,
  TJ as l,
  VDt as u,
  cz as d,
  jDt as f,
  nE as p,
  nS as m,
  sz as h,
  t3 as g,
  tS as _,
  vzt as v,
  wG as y,
  wot as b,
  xMt as x,
  zxt as S,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as C,
  OPr as w,
  SY as T,
  TY as E,
  _Y as D,
  abn as O,
  b7n as k,
  cbn as A,
  dbn as j,
  fbn as M,
  jY as N,
  kPr as P,
  obn as F,
  pbn as I,
  v8n as L,
  y7n as R,
} from "./app-initial-5851df3f6cb1.js";
import { n as z, t as B } from "./channel-button-bad94b04d4c2.js";
function V(e) {
  let n = (0, U.c)(43),
    { conversationId: s, mode: c, alwaysVisible: l, onStart: d } = e,
    f = c === void 0 ? `toolbar` : c,
    g = l !== void 0 && l,
    _ = a(r),
    v = u(),
    b = S(P, `548063743`),
    x = S(C, s),
    w;
  n[0] !== s || n[1] !== x
    ? ((w = { hostId: x, threadId: s }), (n[0] = s), (n[1] = x), (n[2] = w))
    : (w = n[2]);
  let T = S(k, w),
    O;
  n[3] !== s || n[4] !== x
    ? ((O = { conversationId: s, hostId: x }), (n[3] = s), (n[4] = x), (n[5] = O))
    : (O = n[5]);
  let A = S(E, O),
    j;
  n[6] !== s || n[7] !== x
    ? ((j = { conversationId: s, hostId: x }), (n[6] = s), (n[7] = x), (n[8] = j))
    : (j = n[8]);
  let M = S(D, j),
    F = A !== `inactive`,
    I = A === `starting`,
    L;
  n[9] !== s || n[10] !== x || n[11] !== d || n[12] !== _
    ? ((L = () => {
        (d?.(), N(_, { conversationId: s, hostId: x }));
      }),
      (n[9] = s),
      (n[10] = x),
      (n[11] = d),
      (n[12] = _),
      (n[13] = L))
    : (L = n[13]);
  let R = L,
    z;
  n[14] === v
    ? (z = n[15])
    : ((z = v.formatMessage({
        id: `restricted.orbit.voiceCall.start`,
        defaultMessage: `Start call`,
        description: `Start a voice call with this dot`,
      })),
      (n[14] = v),
      (n[15] = z));
  let V = z;
  if (!g && (!T || !b)) return null;
  if (f === `setup`) {
    let e = !M || F,
      r;
    n[16] === s ? (r = n[17]) : ((r = (0, W.jsx)(H, { conversationId: s })), (n[16] = s), (n[17] = r));
    let i;
    return (
      n[18] !== I || n[19] !== R || n[20] !== e || n[21] !== r
        ? ((i = (0, W.jsx)(t, {
            className: `w-full justify-center`,
            color: `primary`,
            size: `detailAction`,
            disabled: e,
            loading: I,
            onClick: R,
            children: r,
          })),
          (n[18] = I),
          (n[19] = R),
          (n[20] = e),
          (n[21] = r),
          (n[22] = i))
        : (i = n[22]),
      i
    );
  }
  if (f === `shortcut`) {
    let e;
    n[23] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, W.jsx)(y, {})), (n[23] = e)) : (e = n[23]);
    let t = !M || F,
      r;
    n[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, W.jsx)(i, {
          id: `restricted.orbit.voiceCall.shortcut`,
          defaultMessage: `Call`,
          description: `Button starting a voice call with the dot from its profile`,
        })),
        (n[24] = r))
      : (r = n[24]);
    let a;
    return (
      n[25] !== F || n[26] !== I || n[27] !== V || n[28] !== R || n[29] !== t
        ? ((a = (0, W.jsx)(B, {
            mode: `shortcut`,
            icon: e,
            "aria-label": V,
            "aria-pressed": F,
            "aria-busy": I,
            disabled: t,
            loading: I,
            onClick: R,
            children: r,
          })),
          (n[25] = F),
          (n[26] = I),
          (n[27] = V),
          (n[28] = R),
          (n[29] = t),
          (n[30] = a))
        : (a = n[30]),
      a
    );
  }
  let G = !M || F,
    K;
  n[31] !== F || n[32] !== V || n[33] !== R || n[34] !== G
    ? ((K = { uniform: !0, "aria-label": V, "aria-pressed": F, disabled: G, onClick: R }),
      (n[31] = F),
      (n[32] = V),
      (n[33] = R),
      (n[34] = G),
      (n[35] = K))
    : (K = n[35]);
  let q = K,
    J;
  n[36] !== q || n[37] !== F || n[38] !== f
    ? ((J =
        f === `floating`
          ? (0, W.jsx)(p, { ...q, children: (0, W.jsx)(o, { asset: m }) })
          : (0, W.jsx)(t, {
              color: F ? `secondary` : `toolbar`,
              size: `toolbar`,
              ...q,
              children: (0, W.jsx)(y, {}),
            })),
      (n[36] = q),
      (n[37] = F),
      (n[38] = f),
      (n[39] = J))
    : (J = n[39]);
  let Y;
  return (
    n[40] !== V || n[41] !== J
      ? ((Y = (0, W.jsx)(h, { tooltipContent: V, children: J })), (n[40] = V), (n[41] = J), (n[42] = Y))
      : (Y = n[42]),
    Y
  );
}
function H(e) {
  let t = (0, U.c)(5),
    { conversationId: n } = e,
    r = S(F, n),
    a = S(A, n) ?? r,
    o;
  t[0] === a ? (o = t[1]) : ((o = I(a)), (t[0] = a), (t[1] = o));
  let s = !o,
    c;
  return (
    t[2] !== r || t[3] !== s
      ? ((c = (0, W.jsx)(i, {
          id: `restricted.orbit.voiceCall.setupWithName.dot`,
          defaultMessage: `Call {hasName, select, true {{name}} other {your dot}}`,
          description: `Primary action starting a voice call from contact setup. Use the dot's custom name when present; dot is the untranslated term for the user's agent.`,
          values: { name: r, hasName: s },
        })),
        (t[2] = r),
        (t[3] = s),
        (t[4] = c))
      : (c = t[4]),
    c
  );
}
var U, W;
function G() {
  return (G = e(() => {
    ((U = v()),
      _(),
      c(),
      f(),
      L(),
      g(),
      s(),
      l(),
      d(),
      O(),
      j(),
      b(),
      w(),
      n(),
      M(),
      z(),
      R(),
      T(),
      (W = x()));
  }))();
}
export { G as n, V as t };
//# sourceMappingURL=button-4badf5dd14b0.js.map
