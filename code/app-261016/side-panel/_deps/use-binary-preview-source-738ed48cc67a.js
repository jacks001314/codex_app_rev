import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $st as n,
  Bst as r,
  Cit as i,
  LNt as a,
  MNt as o,
  NNt as s,
  PBt as c,
  Qst as l,
  XOt as u,
  Yst as d,
  ZA as f,
  ZSt as p,
  ast as m,
  e6 as h,
  ist as g,
  mCt as _,
  nCt as v,
  tkt as y,
  wit as b,
  zst as x,
} from "./app-shared-2feb3d4c6fcc.js";
import { Axr as S, Dor as C, KBr as w } from "./app-initial-ad16eaadf81f.js";
function T(e) {
  let t = (0, E.c)(14),
    { className: n, showAfterOnly: r, after: i, before: a } = e,
    s;
  t[0] === n ? (s = t[1]) : ((s = o(`relative overflow-auto`, n)), (t[0] = n), (t[1] = s));
  let c = r ? `grid-cols-1` : `grid-cols-2`,
    l;
  t[2] === c ? (l = t[3]) : ((l = o(`grid gap-px`, c)), (t[2] = c), (t[3] = l));
  let u;
  t[4] !== i || t[5] !== a || t[6] !== r
    ? ((u = r ? i : (0, D.jsxs)(D.Fragment, { children: [a, i] })),
      (t[4] = i),
      (t[5] = a),
      (t[6] = r),
      (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] !== l || t[9] !== u
    ? ((d = (0, D.jsx)(`div`, { className: l, children: u })), (t[8] = l), (t[9] = u), (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== s || t[12] !== d
      ? ((f = (0, D.jsx)(`div`, { className: s, children: d })), (t[11] = s), (t[12] = d), (t[13] = f))
      : (f = t[13]),
    f
  );
}
var E, D;
function O() {
  return (O = e(() => {
    ((E = c()), s(), (D = a()));
  }))();
}
function k(e) {
  let n = (0, j.c)(6),
    { className: r } = e,
    i;
  n[0] === r ? (i = n[1]) : ((i = o(`text-secondary flex items-center gap-2`, r)), (n[0] = r), (n[1] = i));
  let a, s;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, M.jsx)(t, { className: `icon-xs text-tertiary` })),
      (s = (0, M.jsx)(y, {
        id: `codex.diffView.richPreviewLoading`,
        defaultMessage: `Loading preview…`,
        description: `Loading label while rich preview renders in the diff view`,
      })),
      (n[2] = a),
      (n[3] = s))
    : ((a = n[2]), (s = n[3]));
  let c;
  return (
    n[4] === i
      ? (c = n[5])
      : ((c = (0, M.jsxs)(`div`, { className: i, children: [a, s] })), (n[4] = i), (n[5] = c)),
    c
  );
}
function A(e) {
  let t = (0, j.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, M.jsx)(`div`, {
          className: `flex min-h-40 flex-col`,
          children: (0, M.jsx)(`div`, {
            className: `flex flex-1 items-center justify-center overflow-auto p-3 text-sm`,
            children: n,
          }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var j, M;
function N() {
  return (N = e(() => {
    ((j = c()), s(), u(), h(), (M = a()));
  }))();
}
var P;
function F() {
  return (F = e(() => {
    (p(),
      m(),
      n(),
      r(),
      C(),
      (P = _(l, (e) => ({
        queryKey: [`git-file`, e],
        enabled: g?.gitFiles != null && e.cwd != null && e.path.length > 0 && e.path !== `/dev/null`,
        networkMode: `always`,
        staleTime: x.FIVE_SECONDS,
        queryFn: ({ signal: t }) => {
          let n = g?.gitFiles;
          if (n == null) throw Error(`Git file reads are unavailable`);
          return S(n.readBinary(e), t);
        },
      }))));
  }))();
}
function I(e) {
  let t = (0, L.c)(28),
    n = e?.kind === `git`,
    r = e?.kind === `worktree` ? e : null,
    i = e?.path ?? ``,
    a = i.length > 0 && i !== `/dev/null`,
    o = n ? (e?.cwd ?? null) : null,
    s = n ? (e?.hostId ?? `local`) : d,
    c = n ? i : ``,
    l = n ? (e?.ref ?? `head`) : `head`,
    u;
  t[0] !== o || t[1] !== s || t[2] !== c || t[3] !== l
    ? ((u = { cwd: o, hostId: s, path: c, ref: l, source: `thread_diff` }),
      (t[0] = o),
      (t[1] = s),
      (t[2] = c),
      (t[3] = l),
      (t[4] = u))
    : (u = t[4]);
  let { data: f, isLoading: p, isError: m } = v(P, u),
    h = n ? `` : i,
    g = r?.hostId ?? `local`,
    _ = r?.conversationId,
    y = r?.environmentId,
    x;
  t[5] !== h || t[6] !== g || t[7] !== _ || t[8] !== y
    ? ((x = { path: h, hostId: g, conversationId: _, environmentId: y }),
      (t[5] = h),
      (t[6] = g),
      (t[7] = _),
      (t[8] = y),
      (t[9] = x))
    : (x = t[9]);
  let S;
  t[10] === r
    ? (S = t[11])
    : ((S = r?.environmentId == null ? void 0 : [r.hostId, r.environmentId]), (t[10] = r), (t[11] = S));
  let C = !n && a,
    w;
  t[12] !== S || t[13] !== C
    ? ((w = { cacheKey: S, enabled: C }), (t[12] = S), (t[13] = C), (t[14] = w))
    : (w = t[14]);
  let T;
  t[15] !== w || t[16] !== x
    ? ((T = { params: x, queryConfig: w }), (t[15] = w), (t[16] = x), (t[17] = T))
    : (T = t[17]);
  let { data: E, isLoading: D, isError: O } = b(`read-file-binary`, T);
  if (!a) {
    let e;
    return (
      t[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { dataUrl: null, isLoading: !1, isError: !1 }), (t[18] = e))
        : (e = t[18]),
      e
    );
  }
  let k = n ? f?.contentsBase64 : E?.contentsBase64,
    A = n ? f?.mimeType : E?.mimeType,
    j;
  t[19] === i ? (j = t[20]) : ((j = i ? (0, R.lookup)(i) : !1), (t[19] = i), (t[20] = j));
  let M = j,
    N = A ?? (typeof M == `string` ? M : `application/octet-stream`);
  if (!k) {
    let e = n ? p : D,
      r = n ? m : O,
      i;
    return (
      t[21] !== e || t[22] !== r
        ? ((i = { dataUrl: null, isLoading: e, isError: r }), (t[21] = e), (t[22] = r), (t[23] = i))
        : (i = t[23]),
      i
    );
  }
  let F = `data:${N};base64,${k}`,
    I = n ? p : D,
    z = n ? m : O,
    B;
  return (
    t[24] !== F || t[25] !== I || t[26] !== z
      ? ((B = { dataUrl: F, isLoading: I, isError: z }), (t[24] = F), (t[25] = I), (t[26] = z), (t[27] = B))
      : (B = t[27]),
    B
  );
}
var L, R;
function z() {
  return (z = e(() => {
    ((L = c()), p(), (R = f()), w(), i(), C(), F());
  }))();
}
export { N as a, A as i, I as n, T as o, k as r, O as s, z as t };
//# sourceMappingURL=use-binary-preview-source-738ed48cc67a.js.map
