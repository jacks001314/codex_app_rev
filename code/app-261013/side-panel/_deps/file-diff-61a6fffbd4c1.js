const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./shiki-highlight-provider-d964b57bf416.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./register-pierre-themes-26873099a398.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $nt as t,
  Aat as n,
  Fz as r,
  Oat as i,
  Pz as a,
  Wnt as o,
  _lt as s,
  fPt as c,
  pPt as l,
  rst as u,
  vzt as d,
  xMt as f,
  yzt as p,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ayt as m,
  DVt as h,
  Eyt as g,
  Fvt as _,
  Ivt as v,
  Oyt as y,
  dnn as b,
  fnn as x,
  unn as S,
} from "./app-initial-5851df3f6cb1.js";
import { n as C, t as w } from "./file-diff-presentation-b6cc0ce0d4c4.js";
import { a as T, i as E } from "./register-pierre-themes-26873099a398.js";
import { n as D, r as O } from "./virtualized-file-diff-line-position-cb3b3529be70.js";
function k(e) {
  let t = (0, A.c)(3),
    { children: n } = e,
    r = T();
  if (N) return n;
  let i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i =
          r == null
            ? (0, M.jsx)(j.Suspense, { fallback: null, children: (0, M.jsx)(P, { children: n }) })
            : n),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
var A, j, M, N, P;
function F() {
  return (F = e(() => {
    ((A = d()),
      E(),
      (j = p()),
      i(),
      (M = f()),
      l(),
      (N = n()),
      (P = (0, j.lazy)(async () => ({
        default: (
          await c(
            async () => {
              let { ShikiHighlightProvider: e } = await import(`./shiki-highlight-provider-d964b57bf416.js`);
              return { ShikiHighlightProvider: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
            import.meta.url,
          )
        ).ShikiHighlightProvider,
      }))));
  }))();
}
function I(e) {
  let n = (0, R.c)(41),
    i,
    a,
    o;
  n[0] === e
    ? ((i = n[1]), (a = n[2]), (o = n[3]))
    : (({ alignCommentGutter: o, lineDiffType: i, ...a } = e),
      (n[0] = e),
      (n[1] = i),
      (n[2] = a),
      (n[3] = o));
  let c = o !== void 0 && o,
    l = b(),
    u = x(l),
    d = t(s.lightCodeThemeId),
    f = t(s.darkCodeThemeId),
    p = t(s.diffMarkerStyle);
  r();
  let h = p === `symbols`,
    g;
  n[4] !== u || n[5] !== f || n[6] !== d
    ? ((g = u === `light` ? m(d, `light`) : m(f, `dark`)), (n[4] = u), (n[5] = f), (n[6] = d), (n[7] = g))
    : (g = n[7]);
  let _ = g,
    S,
    C,
    T,
    E,
    D,
    A,
    j,
    M,
    N,
    P;
  if (n[8] !== c || n[9] !== i || n[10] !== a || n[11] !== _ || n[12] !== h) {
    y(void 0);
    let e;
    n[23] === a.fileDiff ? (e = n[24]) : ((e = v(a.fileDiff)), (n[23] = a.fileDiff), (n[24] = e));
    let t = e;
    ((C = k),
      n[25] === i
        ? (T = n[26])
        : ((T = i == null ? null : (0, B.jsx)(L, { lineDiffType: i })), (n[25] = i), (n[26] = T)),
      (S = w),
      (E = a),
      (D = t),
      (A = c),
      (j = h ? `classic` : `bars`),
      (M = i),
      (N = O),
      (P = _.name),
      (n[8] = c),
      (n[9] = i),
      (n[10] = a),
      (n[11] = _),
      (n[12] = h),
      (n[13] = S),
      (n[14] = C),
      (n[15] = T),
      (n[16] = E),
      (n[17] = D),
      (n[18] = A),
      (n[19] = j),
      (n[20] = M),
      (n[21] = N),
      (n[22] = P));
  } else
    ((S = n[13]),
      (C = n[14]),
      (T = n[15]),
      (E = n[16]),
      (D = n[17]),
      (A = n[18]),
      (j = n[19]),
      (M = n[20]),
      (N = n[21]),
      (P = n[22]));
  let F = u,
    I;
  n[27] !== S ||
  n[28] !== F ||
  n[29] !== E ||
  n[30] !== D ||
  n[31] !== A ||
  n[32] !== j ||
  n[33] !== M ||
  n[34] !== N ||
  n[35] !== P
    ? ((I = (0, B.jsx)(S, {
        ...E,
        fileDiff: D,
        alignCommentGutter: A,
        diffIndicators: j,
        lineDiffType: M,
        onPostRenderInstance: N,
        theme: P,
        themeType: F,
      })),
      (n[27] = S),
      (n[28] = F),
      (n[29] = E),
      (n[30] = D),
      (n[31] = A),
      (n[32] = j),
      (n[33] = M),
      (n[34] = N),
      (n[35] = P),
      (n[36] = I))
    : (I = n[36]);
  let z;
  return (
    n[37] !== C || n[38] !== T || n[39] !== I
      ? ((z = (0, B.jsxs)(C, { children: [T, I] })), (n[37] = C), (n[38] = T), (n[39] = I), (n[40] = z))
      : (z = n[40]),
    z
  );
}
function L(e) {
  let t = (0, R.c)(4),
    { lineDiffType: n } = e,
    r = T(),
    i,
    a;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = () => {
          if (r == null) return;
          let e = r.getDiffRenderOptions();
          e.lineDiffType !== n && r.setRenderOptions({ ...e, lineDiffType: n });
        }),
        (a = [n, r]),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : ((i = t[2]), (a = t[3])),
    (0, z.useEffect)(i, a),
    null
  );
}
var R, z, B;
function V() {
  return (V = e(() => {
    ((R = d()), E(), u(), (z = p()), C(), _(), F(), D(), o(), g(), S(), a(), h(), (B = f()));
  }))();
}
export { F as i, V as n, k as r, I as t };
//# sourceMappingURL=file-diff-61a6fffbd4c1.js.map
