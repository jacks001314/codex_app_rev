import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Cpn as n,
  HIt as r,
  KYt as i,
  MMt as a,
  Rpn as o,
  Spn as s,
  _Jt as c,
  e4t as l,
  hmn as u,
  jMt as d,
  kmn as f,
  nWt as p,
  vJt as m,
  zpn as h,
} from "./app-initial-f094ef01c64d.js";
function g(e) {
  let t = (0, _.c)(14),
    { className: n, showAfterOnly: r, after: i, before: a } = e,
    s;
  t[0] === n ? (s = t[1]) : ((s = o(`relative overflow-auto`, n)), (t[0] = n), (t[1] = s));
  let c = r ? `grid-cols-1` : `grid-cols-2`,
    l;
  t[2] === c ? (l = t[3]) : ((l = o(`grid gap-px`, c)), (t[2] = c), (t[3] = l));
  let u;
  t[4] !== i || t[5] !== a || t[6] !== r
    ? ((u = r ? i : (0, v.jsxs)(v.Fragment, { children: [a, i] })),
      (t[4] = i),
      (t[5] = a),
      (t[6] = r),
      (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] !== l || t[9] !== u
    ? ((d = (0, v.jsx)(`div`, { className: l, children: u })), (t[8] = l), (t[9] = u), (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== s || t[12] !== d
      ? ((f = (0, v.jsx)(`div`, { className: s, children: d })),
        (t[11] = s),
        (t[12] = d),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
var _,
  v,
  y = e(() => {
    ((_ = f()), h(), (v = u()));
  });
function b(e) {
  let t = (0, S.c)(6),
    { className: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = o(`text-secondary flex items-center gap-2`, r)), (t[0] = r), (t[1] = i));
  let a, s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, C.jsx)(d, { className: `icon-xs text-tertiary` })),
      (s = (0, C.jsx)(n, {
        id: `codex.diffView.richPreviewLoading`,
        defaultMessage: `Loading preview…`,
        description: `Loading label while rich preview renders in the diff view`,
      })),
      (t[2] = a),
      (t[3] = s))
    : ((a = t[2]), (s = t[3]));
  let c;
  return (
    t[4] === i
      ? (c = t[5])
      : ((c = (0, C.jsxs)(`div`, { className: i, children: [a, s] })), (t[4] = i), (t[5] = c)),
    c
  );
}
function x(e) {
  let t = (0, S.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, C.jsx)(`div`, {
          className: `flex min-h-40 flex-col`,
          children: (0, C.jsx)(`div`, {
            className: `flex flex-1 items-center justify-center overflow-auto p-3 text-sm`,
            children: n,
          }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var S,
  C,
  w = e(() => {
    ((S = f()), h(), s(), a(), (C = u()));
  });
function T(e) {
  let t = (0, E.c)(32),
    n = e?.kind === `git`,
    r = e?.kind === `worktree` ? e : null,
    i = e?.path ?? ``,
    a = i.length > 0 && i !== `/dev/null`,
    o = n ? (e?.cwd ?? null) : null,
    s = n ? (e?.hostId ?? `local`) : l,
    c = n ? i : ``,
    u = n ? (e?.ref ?? `head`) : `head`,
    d;
  t[0] !== o || t[1] !== s || t[2] !== c || t[3] !== u
    ? ((d = { cwd: o, hostId: s, path: c, ref: u }),
      (t[0] = o),
      (t[1] = s),
      (t[2] = c),
      (t[3] = u),
      (t[4] = d))
    : (d = t[4]);
  let f = n && a,
    p;
  t[5] === f ? (p = t[6]) : ((p = { enabled: f }), (t[5] = f), (t[6] = p));
  let h;
  t[7] !== d || t[8] !== p
    ? ((h = { params: d, queryConfig: p }), (t[7] = d), (t[8] = p), (t[9] = h))
    : (h = t[9]);
  let { data: g, isLoading: _, isError: v } = m(`read-git-file-binary`, h),
    y = n ? `` : i,
    b = r?.hostId ?? `local`,
    x = r?.environmentId,
    S;
  t[10] !== x || t[11] !== y || t[12] !== b
    ? ((S = { path: y, hostId: b, environmentId: x }),
      (t[10] = x),
      (t[11] = y),
      (t[12] = b),
      (t[13] = S))
    : (S = t[13]);
  let C;
  t[14] === r
    ? (C = t[15])
    : ((C = r?.environmentId == null ? void 0 : [r.hostId, r.environmentId]),
      (t[14] = r),
      (t[15] = C));
  let w = !n && a,
    T;
  t[16] !== C || t[17] !== w
    ? ((T = { cacheKey: C, enabled: w }), (t[16] = C), (t[17] = w), (t[18] = T))
    : (T = t[18]);
  let O;
  t[19] !== S || t[20] !== T
    ? ((O = { params: S, queryConfig: T }), (t[19] = S), (t[20] = T), (t[21] = O))
    : (O = t[21]);
  let { data: k, isLoading: A, isError: j } = m(`read-file-binary`, O);
  if (!a) {
    let e;
    return (
      t[22] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { dataUrl: null, isLoading: !1, isError: !1 }), (t[22] = e))
        : (e = t[22]),
      e
    );
  }
  let M = n ? g?.contentsBase64 : k?.contentsBase64,
    N = n ? g?.mimeType : k?.mimeType,
    P;
  t[23] === i ? (P = t[24]) : ((P = i ? (0, D.lookup)(i) : !1), (t[23] = i), (t[24] = P));
  let F = P,
    I = N ?? (typeof F == `string` ? F : `application/octet-stream`);
  if (!M) {
    let e = n ? _ : A,
      r = n ? v : j,
      i;
    return (
      t[25] !== e || t[26] !== r
        ? ((i = { dataUrl: null, isLoading: e, isError: r }), (t[25] = e), (t[26] = r), (t[27] = i))
        : (i = t[27]),
      i
    );
  }
  let L = `data:${I};base64,${M}`,
    R = n ? _ : A,
    z = n ? v : j,
    B;
  return (
    t[28] !== L || t[29] !== R || t[30] !== z
      ? ((B = { dataUrl: L, isLoading: R, isError: z }),
        (t[28] = L),
        (t[29] = R),
        (t[30] = z),
        (t[31] = B))
      : (B = t[31]),
    B
  );
}
var E,
  D,
  O = e(() => {
    ((E = f()), (D = t(r(), 1)), i(), c(), p());
  });
export { w as a, x as i, T as n, g as o, b as r, y as s, O as t };
//# sourceMappingURL=use-binary-preview-source-4f8b7bce953a.js.map
