const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./shiki-highlight-provider-b037b2ec012e.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./register-pierre-themes-8ff08e47faf4.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AB as t,
  FBt as n,
  LNt as r,
  OFt as i,
  PBt as a,
  Ust as o,
  Vst as s,
  hit as c,
  kB as l,
  kFt as u,
  oit as d,
  sct as f,
  xut as p,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Bbt as m,
  Hbt as h,
  Jyt as g,
  Man as _,
  Nan as v,
  O5t as y,
  Wbt as b,
  jan as x,
  qyt as S,
} from "./app-initial-ad16eaadf81f.js";
import { n as C, t as w } from "./file-diff-presentation-eb82cf883deb.js";
import { a as T, i as E } from "./register-pierre-themes-8ff08e47faf4.js";
import { n as D, r as O } from "./virtualized-file-diff-line-position-626fc7d91724.js";
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
    ((A = a()),
      E(),
      (j = n()),
      s(),
      (M = r()),
      u(),
      (N = o()),
      (P = (0, j.lazy)(async () => ({
        default: (
          await i(
            async () => {
              let { ShikiHighlightProvider: e } = await import(`./shiki-highlight-provider-b037b2ec012e.js`);
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
  let n = (0, R.c)(45),
    r,
    i,
    a,
    o;
  n[0] === e
    ? ((r = n[1]), (i = n[2]), (a = n[3]), (o = n[4]))
    : (({ alignCommentGutter: o, lineDiffType: r, onPostRenderInstance: i, ...a } = e),
      (n[0] = e),
      (n[1] = r),
      (n[2] = i),
      (n[3] = a),
      (n[4] = o));
  let s = o !== void 0 && o,
    l = _(),
    u = v(l),
    d = c(p.lightCodeThemeId),
    f = c(p.darkCodeThemeId),
    m = c(p.diffMarkerStyle);
  t();
  let y = m === `symbols`,
    x;
  n[5] !== u || n[6] !== f || n[7] !== d
    ? ((x = u === `light` ? b(d, `light`) : b(f, `dark`)), (n[5] = u), (n[6] = f), (n[7] = d), (n[8] = x))
    : (x = n[8]);
  let S = x,
    C,
    T,
    E,
    D,
    A,
    j,
    M,
    N,
    P,
    F;
  if (n[9] !== s || n[10] !== r || n[11] !== i || n[12] !== a || n[13] !== S || n[14] !== y) {
    h(void 0);
    let e;
    n[25] === a.fileDiff ? (e = n[26]) : ((e = g(a.fileDiff)), (n[25] = a.fileDiff), (n[26] = e));
    let t = e;
    ((T = k),
      n[27] === r
        ? (E = n[28])
        : ((E = r == null ? null : (0, B.jsx)(L, { lineDiffType: r })), (n[27] = r), (n[28] = E)),
      (C = w),
      (D = a),
      (A = t),
      (j = s),
      (M = y ? `classic` : `bars`),
      (N = r),
      n[29] === i
        ? (P = n[30])
        : ((P = (e, t, n) => {
            (O(e, t), i?.(e, t, n));
          }),
          (n[29] = i),
          (n[30] = P)),
      (F = S.name),
      (n[9] = s),
      (n[10] = r),
      (n[11] = i),
      (n[12] = a),
      (n[13] = S),
      (n[14] = y),
      (n[15] = C),
      (n[16] = T),
      (n[17] = E),
      (n[18] = D),
      (n[19] = A),
      (n[20] = j),
      (n[21] = M),
      (n[22] = N),
      (n[23] = P),
      (n[24] = F));
  } else
    ((C = n[15]),
      (T = n[16]),
      (E = n[17]),
      (D = n[18]),
      (A = n[19]),
      (j = n[20]),
      (M = n[21]),
      (N = n[22]),
      (P = n[23]),
      (F = n[24]));
  let I = u,
    z;
  n[31] !== C ||
  n[32] !== I ||
  n[33] !== D ||
  n[34] !== A ||
  n[35] !== j ||
  n[36] !== M ||
  n[37] !== N ||
  n[38] !== P ||
  n[39] !== F
    ? ((z = (0, B.jsx)(C, {
        ...D,
        fileDiff: A,
        alignCommentGutter: j,
        diffIndicators: M,
        lineDiffType: N,
        onPostRenderInstance: P,
        theme: F,
        themeType: I,
      })),
      (n[31] = C),
      (n[32] = I),
      (n[33] = D),
      (n[34] = A),
      (n[35] = j),
      (n[36] = M),
      (n[37] = N),
      (n[38] = P),
      (n[39] = F),
      (n[40] = z))
    : (z = n[40]);
  let V;
  return (
    n[41] !== T || n[42] !== E || n[43] !== z
      ? ((V = (0, B.jsxs)(T, { children: [E, z] })), (n[41] = T), (n[42] = E), (n[43] = z), (n[44] = V))
      : (V = n[44]),
    V
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
    ((R = a()), E(), f(), (z = n()), C(), S(), F(), D(), d(), m(), x(), l(), y(), (B = r()));
  }))();
}
export { F as i, V as n, k as r, I as t };
//# sourceMappingURL=file-diff-232655eefd3e.js.map
