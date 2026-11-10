const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./menu-a5e033fd2a64.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./menu-53a4f4c3463d.js",
      "./scope-fb5d3b4015cc.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $0 as t,
  AO as n,
  B4 as r,
  Cot as i,
  DJ as a,
  Dz as o,
  EJ as s,
  IDt as c,
  Ixt as l,
  Jot as u,
  OJ as d,
  Pxt as f,
  TO as p,
  Vxt as m,
  d$ as h,
  e2 as g,
  f$ as _,
  fPt as v,
  jDt as y,
  kz as b,
  m$ as x,
  n2 as S,
  p$ as ee,
  pPt as te,
  qot as ne,
  t2 as re,
  vzt as C,
  wot as w,
  xMt as T,
  z4 as ie,
} from "./app-shared-bbfeca5e5737.js";
import {
  Fb as E,
  GMr as D,
  Ib as O,
  KNn as k,
  Nb as A,
  XMr as j,
  XNn as M,
  ZNn as N,
  fUn as P,
  lIr as F,
  sIr as I,
  tNr as L,
  uIr as R,
  uUn as z,
} from "./app-initial-5851df3f6cb1.js";
import { n as B, t as V } from "./query-4ecbf204b1e6.js";
function H(e) {
  let t = (0, W.c)(12),
    { ownerId: n, source: r } = e,
    a = l(i),
    s;
  t[0] === r ? (s = t[1]) : ((s = (0, G.jsx)(U, { source: r })), (t[0] = r), (t[1] = s));
  let u;
  t[2] !== n || t[3] !== a
    ? ((u = () => {
        O(a, n, `file-info`);
      }),
      (t[2] = n),
      (t[3] = a),
      (t[4] = u))
    : (u = t[4]);
  let d, f;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, G.jsx)(p.ItemIcon, { children: (0, G.jsx)(o, { icon: { assets: { 16: ee, 20: h } } }) })),
      (f = (0, G.jsx)(c, {
        id: `chatgptFilePreview.fileInfo.menuItem`,
        defaultMessage: `File info`,
        description: `Short action label in a file preview title menu. Selecting it opens a panel with metadata for the current file.`,
      })),
      (t[5] = d),
      (t[6] = f))
    : ((d = t[5]), (f = t[6]));
  let m;
  t[7] === u
    ? (m = t[8])
    : ((m = (0, G.jsxs)(p.Item, { onSelect: u, children: [d, f] })), (t[7] = u), (t[8] = m));
  let g;
  return (
    t[9] !== s || t[10] !== m
      ? ((g = (0, G.jsxs)(G.Fragment, { children: [s, m] })), (t[9] = s), (t[10] = m), (t[11] = g))
      : (g = t[11]),
    g
  );
}
function U(e) {
  let t = (0, W.c)(4),
    { source: n } = e,
    r = l(i),
    a = m(D),
    o = m(j),
    s;
  return (
    t[0] !== a || t[1] !== n || t[2] !== o
      ? ((s = V({ accountId: a, source: n, userId: o })), (t[0] = a), (t[1] = n), (t[2] = o), (t[3] = s))
      : (s = t[3]),
    u(s, r.queryClient),
    null
  );
}
var W, G;
function K() {
  return (K = e(() => {
    ((W = C()), x(), _(), ne(), f(), y(), L(), n(), b(), w(), E(), B(), (G = T()));
  }))();
}
function ae(e) {
  let n = (0, q.c)(16),
    { libraryFileId: r, disabled: s, onSelect: u } = e,
    f = l(i),
    { pathname: h } = m(I),
    g = M(),
    _ = N();
  if (!m(P) || h === `/library` || h?.startsWith(`/library/`)) return null;
  let v;
  n[0] === _ ? (v = n[1]) : ((v = _({ 16: re, 20: t }, { 16: a, 20: d })), (n[0] = _), (n[1] = v));
  let y;
  n[2] === v ? (y = n[3]) : ((y = (0, J.jsx)(o, { icon: { assets: v } })), (n[2] = v), (n[3] = y));
  let b;
  n[4] !== r || n[5] !== _ || n[6] !== u || n[7] !== f
    ? ((b = () => {
        (u?.(), R(f, _(`/library/file/${encodeURIComponent(r)}`, `/space/file/${encodeURIComponent(r)}`)));
      }),
      (n[4] = r),
      (n[5] = _),
      (n[6] = u),
      (n[7] = f),
      (n[8] = b))
    : (b = n[8]);
  let x;
  n[9] === g
    ? (x = n[10])
    : ((x = g
        ? (0, J.jsx)(c, {
            id: `artifactViewer.openInLibrary.space`,
            defaultMessage: `Open in Space`,
            description: `Artifact title menu action for opening the saved artifact in Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          })
        : (0, J.jsx)(c, {
            id: `artifactViewer.openInLibrary`,
            defaultMessage: `Open in Library`,
            description: `Artifact title menu action for opening the saved artifact in Library`,
          })),
      (n[9] = g),
      (n[10] = x));
  let S;
  return (
    n[11] !== s || n[12] !== y || n[13] !== b || n[14] !== x
      ? ((S = (0, J.jsx)(p.Item, { disabled: s, leftIcon: y, onSelect: b, children: x })),
        (n[11] = s),
        (n[12] = y),
        (n[13] = b),
        (n[14] = x),
        (n[15] = S))
      : (S = n[15]),
    S
  );
}
var q, J;
function Y() {
  return (Y = e(() => {
    ((q = C()), S(), g(), f(), y(), F(), n(), s(), b(), k(), z(), w(), (J = T()));
  }))();
}
function oe(e) {
  let t = (0, X.c)(23),
    {
      children: n,
      favoriteAction: r,
      file: i,
      fileInfoOwnerId: a,
      fileInfoSource: o,
      libraryFileId: s,
      openInLibraryDisabled: c,
      onOpenLibrary: l,
      versionHistoryAction: u,
    } = e,
    d = s ?? i?.libraryFileId,
    f;
  t[0] !== a || t[1] !== o
    ? ((f = o == null ? void 0 : (a ?? A(o))), (t[0] = a), (t[1] = o), (t[2] = f))
    : (f = t[2]);
  let m = f,
    h = m != null || d != null || r != null || u != null || i != null;
  if (!h && n == null) return null;
  let g;
  t[3] !== m || t[4] !== o
    ? ((g = m == null || o == null ? null : (0, Z.jsx)(H, { ownerId: m, source: o })),
      (t[3] = m),
      (t[4] = o),
      (t[5] = g))
    : (g = t[5]);
  let _;
  t[6] !== d || t[7] !== l || t[8] !== c
    ? ((_ = d == null ? null : (0, Z.jsx)(ae, { disabled: c, libraryFileId: d, onSelect: l })),
      (t[6] = d),
      (t[7] = l),
      (t[8] = c),
      (t[9] = _))
    : (_ = t[9]);
  let v;
  t[10] !== i || t[11] !== u
    ? ((v = u ?? (i == null ? null : (0, Z.jsx)(Q, { file: i }))), (t[10] = i), (t[11] = u), (t[12] = v))
    : (v = t[12]);
  let y;
  t[13] !== n || t[14] !== h
    ? ((y = h && n != null ? (0, Z.jsx)(p.Separator, { className: `last:hidden` }) : null),
      (t[13] = n),
      (t[14] = h),
      (t[15] = y))
    : (y = t[15]);
  let b;
  return (
    t[16] !== n || t[17] !== r || t[18] !== g || t[19] !== _ || t[20] !== v || t[21] !== y
      ? ((b = (0, Z.jsxs)(Z.Fragment, { children: [g, _, r, v, y, n] })),
        (t[16] = n),
        (t[17] = r),
        (t[18] = g),
        (t[19] = _),
        (t[20] = v),
        (t[21] = y),
        (t[22] = b))
      : (b = t[22]),
    b
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = C()),
      n(),
      ie(),
      K(),
      Y(),
      E(),
      (Z = T()),
      te(),
      (Q = r(
        async () =>
          (
            await v(
              async () => {
                let { LibraryFilePreviewVersionHistory: e } = await import(`./menu-a5e033fd2a64.js`);
                return { LibraryFilePreviewVersionHistory: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
              import.meta.url,
            )
          ).LibraryFilePreviewVersionHistory,
      )));
  }))();
}
export { $ as n, oe as t };
//# sourceMappingURL=menu-items-b78a5ea99a11.js.map
