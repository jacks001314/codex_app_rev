const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./thumbnail-a1a297c8b668.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./document-1143a4fe17b0.js",
      "./writing-block-theme-61c0ed2a12ed.js",
      "./writing-block-editor-styles-90146127a9c9.js",
      "./writing-block-editor-styles-4dc32da811e5.css",
      "./checkboxes-894c9e9cf353.js",
      "./preview-3690797c434b.js",
      "./editor.module-9d0afa74ff72.js",
      "./editor-8ca9404ddda9.css",
      "./preview-632774fb6fd4.css",
      "./images-8ae6089f5332.js",
      "./url-56322ec4aaae.js",
      "./api-4f89419a04a6.js",
      "./url-e0b3d4c5bcdd.css",
      "./page-metadata-e5ef71bd716c.js",
      "./assets-4f7817c757db.js",
      "./thumbnail-units-61a7a67cdfab.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $O as t,
  $St as n,
  $st as r,
  CCt as i,
  DB as a,
  DK as o,
  F3 as s,
  FBt as c,
  I3 as l,
  LNt as u,
  MNt as d,
  Mst as f,
  NNt as p,
  NSt as m,
  OB as h,
  OFt as g,
  PBt as _,
  Qst as v,
  TY as y,
  USt as b,
  VSt as x,
  XOt as S,
  Xo as C,
  Y3 as w,
  YOt as T,
  Yo as E,
  Z3 as D,
  ZSt as O,
  ek as k,
  iCt as A,
  jst as j,
  kFt as M,
  kK as ee,
  nB as te,
  nCt as ne,
  okt as re,
  rB as N,
  tkt as P,
  yCt as F,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $U as I,
  $V as L,
  AH as R,
  Ast as z,
  BRr as B,
  Bdn as V,
  CW as ie,
  DH as ae,
  EH as oe,
  F7 as se,
  Fmn as ce,
  Glt as le,
  HU as H,
  HV as U,
  Hlr as ue,
  Jdn as de,
  Jlr as W,
  Klt as fe,
  Lmn as pe,
  Mst as me,
  Nmt as G,
  Nst as he,
  OH as K,
  Olr as ge,
  P7 as q,
  PH as _e,
  Pst as ve,
  QU as ye,
  Qlt as be,
  Tan as xe,
  Tlr as J,
  UV as Se,
  Ulr as Ce,
  Xgn as Y,
  Xz as we,
  Ylt as Te,
  Zdn as Ee,
  Zgn as De,
  Zlr as Oe,
  Zz as ke,
  _an as Ae,
  aV as je,
  bLr as Me,
  bc as Ne,
  dV as Pe,
  dW as Fe,
  dan as Ie,
  epn as Le,
  fV as Re,
  fan as ze,
  gur as Be,
  hdn as Ve,
  iH as He,
  iRr as Ue,
  iV as We,
  iut as Ge,
  jmt as Ke,
  jst as qe,
  kH as Je,
  lBr as Ye,
  mlr as Xe,
  npn as Ze,
  o_n as Qe,
  pW as $e,
  pdn as et,
  qU as tt,
  q_n as nt,
  rV as rt,
  s_n as it,
  tV as at,
  tut as ot,
  tyr as st,
  uBr as ct,
  van as lt,
  wLr as ut,
  wW as dt,
  wan as ft,
  wdn as pt,
  x0 as mt,
  xc as ht,
  xht as gt,
  y0 as _t,
} from "./app-initial-ad16eaadf81f.js";
import { a as vt, i as yt, n as bt, o as xt } from "./profile-card-596b3632a9d9.js";
import { n as St, t as Ct } from "./cached-page-metadata-4ec7d429eb36.js";
import { c as wt, i as Tt, o as Et, s as Dt, t as Ot } from "./library-item-b6e80d141813.js";
import { n as kt, r as At } from "./paint-marker-cd67f822fae3.js";
function jt(e) {
  let t = (0, Pt.c)(4),
    { ariaLabel: n, children: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, X.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `px-[var(--padding-row-cell-x,var(--padding-row-x))] py-row-y text-xs text-tertiary`,
        children: (0, X.jsx)(Nt, {
          name: (0, X.jsx)(P, {
            id: `space.list.columnName`,
            defaultMessage: `Name`,
            description: `Page or file name column`,
          }),
          space: (0, X.jsx)(P, {
            id: `space.list.columnLocation`,
            defaultMessage: `Space`,
            description: `Space or source containing a Page or file. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          }),
          updated: (0, X.jsx)(P, {
            id: `space.list.columnUpdated`,
            defaultMessage: `Updated`,
            description: `Page or file update time column`,
          }),
        }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  return (
    t[1] !== n || t[2] !== r
      ? ((a = (0, X.jsxs)(`div`, {
          className: `@container sidebar-navigation`,
          children: [i, (0, X.jsx)(`ul`, { "aria-label": n, children: r })],
        })),
        (t[1] = n),
        (t[2] = r),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function Mt(e) {
  let t = (0, Pt.c)(19),
    { ariaLabel: n, title: r, icon: i, space: a, updatedAt: o, action: s, onOpen: c } = e,
    l = n ?? r,
    u;
  t[0] === i
    ? (u = t[1])
    : ((u = (0, X.jsx)(`span`, { className: `flex shrink-0 items-center`, children: i })),
      (t[0] = i),
      (t[1] = u));
  let d;
  t[2] === r
    ? (d = t[3])
    : ((d = (0, X.jsx)(`span`, { className: `truncate`, children: r })), (t[2] = r), (t[3] = d));
  let f;
  t[4] !== u || t[5] !== d
    ? ((f = (0, X.jsxs)(`span`, { className: `flex min-w-0 items-center gap-2`, children: [u, d] })),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] === o
    ? (p = t[8])
    : ((p = o == null ? `—` : (0, X.jsx)(_t, { dateString: o })), (t[7] = o), (t[8] = p));
  let m;
  t[9] !== s || t[10] !== a || t[11] !== f || t[12] !== p
    ? ((m = (0, X.jsx)(`div`, {
        className: `w-full text-base`,
        children: (0, X.jsx)(Nt, { name: f, space: a, updated: p, action: s }),
      })),
      (t[9] = s),
      (t[10] = a),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m))
    : (m = t[13]);
  let h;
  return (
    t[14] !== c || t[15] !== l || t[16] !== m || t[17] !== r
      ? ((h = (0, X.jsx)(`li`, {
          children: (0, X.jsx)(ot, {
            density: `row`,
            ariaLabel: l,
            title: r,
            isSelected: !1,
            hasInteractiveContent: !0,
            onSelect: c,
            children: m,
          }),
        })),
        (t[14] = c),
        (t[15] = l),
        (t[16] = m),
        (t[17] = r),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
function Nt(e) {
  let t = (0, Pt.c)(13),
    { name: n, space: r, updated: i, action: a } = e,
    o;
  t[0] === n
    ? (o = t[1])
    : ((o = (0, X.jsx)(`div`, { className: `min-w-0 flex-1`, children: n })), (t[0] = n), (t[1] = o));
  let s;
  t[2] === r
    ? (s = t[3])
    : ((s = (0, X.jsx)(`div`, {
        className: `pointer-events-auto hidden w-1/4 min-w-0 text-secondary @md:block`,
        children: r,
      })),
      (t[2] = r),
      (t[3] = s));
  let c;
  t[4] === i
    ? (c = t[5])
    : ((c = (0, X.jsx)(`div`, { className: `hidden w-20 shrink-0 text-secondary @lg:block`, children: i })),
      (t[4] = i),
      (t[5] = c));
  let l;
  t[6] === a
    ? (l = t[7])
    : ((l = (0, X.jsx)(`div`, {
        className: `pointer-events-auto flex w-6 shrink-0 justify-end`,
        children: a,
      })),
      (t[6] = a),
      (t[7] = l));
  let u;
  return (
    t[8] !== o || t[9] !== s || t[10] !== c || t[11] !== l
      ? ((u = (0, X.jsxs)(`div`, {
          className: `flex w-full min-w-0 items-center gap-3`,
          children: [o, s, c, l],
        })),
        (t[8] = o),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l),
        (t[12] = u))
      : (u = t[12]),
    u
  );
}
var Pt, X;
function Ft() {
  return (Ft = e(() => {
    ((Pt = _()), S(), mt(), Ge(), (X = u()));
  }))();
}
function It(e) {
  let t = (0, Lt.c)(9),
    { pathname: n } = e,
    {
      recentsReady: r,
      recentsFailed: i,
      pinsReady: a,
      pinsFailed: o,
      spacesReady: s,
      spacesFailed: c,
    } = A(zt),
    l,
    u;
  return (
    t[0] !== n || t[1] !== o || t[2] !== a || t[3] !== i || t[4] !== r || t[5] !== c || t[6] !== s
      ? ((l = () => {
          let e = De.getHomeLoad(n);
          ((r || i) && e?.finishStage(`recents_loaded`, !r && i),
            (a || o) && e?.finishStage(`pinned_loaded`, !a && o),
            (s || c) && e?.finishStage(`spaces_loaded`, !s && c));
        }),
        (u = [n, r, i, a, o, s, c]),
        (t[0] = n),
        (t[1] = o),
        (t[2] = a),
        (t[3] = i),
        (t[4] = r),
        (t[5] = c),
        (t[6] = s),
        (t[7] = l),
        (t[8] = u))
      : ((l = t[7]), (u = t[8])),
    (0, Rt.useLayoutEffect)(l, u),
    null
  );
}
var Lt, Rt, zt;
function Bt() {
  return (Bt = e(() => {
    ((Lt = _()),
      O(),
      (Rt = c()),
      r(),
      ue(),
      Y(),
      ce(),
      Le(),
      de(),
      Ve(),
      (zt = i(
        v,
        ({ get: e }) => {
          let t = e(Ce) ? e(Ze, { enabled: !1 }) : e(V, { enabled: !1 }),
            n = e(pe, { enabled: !1 }),
            r = e(Ee, { enabled: !1 });
          return {
            recentsReady: t.data != null,
            recentsFailed: t.isError,
            pinsReady: n.data != null,
            pinsFailed: n.isError,
            spacesReady: r.data != null,
            spacesFailed: r.isError,
          };
        },
        {
          isEqual: (e, t) =>
            e.recentsReady === t.recentsReady &&
            e.recentsFailed === t.recentsFailed &&
            e.pinsReady === t.pinsReady &&
            e.pinsFailed === t.pinsFailed &&
            e.spacesReady === t.spacesReady &&
            e.spacesFailed === t.spacesFailed,
        },
      )));
  }))();
}
function Vt(e) {
  let t = (0, Ut.c)(7),
    { section: r, ready: i, failed: a, pathname: o } = e,
    s = n(v),
    c = x(),
    l = o ?? c.pathname,
    u,
    d;
  return (
    t[0] !== l || t[1] !== a || t[2] !== i || t[3] !== s || t[4] !== r
      ? ((u = () => {
          (i || a) && De.homeSectionResult(r, a ? `failure` : `success`, l, q(s));
        }),
        (d = [r, i, a, l, s]),
        (t[0] = l),
        (t[1] = a),
        (t[2] = i),
        (t[3] = s),
        (t[4] = r),
        (t[5] = u),
        (t[6] = d))
      : ((u = t[5]), (d = t[6])),
    (0, Wt.useEffect)(u, d),
    null
  );
}
function Ht(e) {
  let t = (0, Ut.c)(24),
    { spaceId: n, rootPageId: r, ready: i, failed: a, creationActive: o, active: s } = e,
    c = o === void 0 || o,
    l = s === void 0 || s,
    { pathname: u } = x(),
    d,
    f;
  (t[0] !== a || t[1] !== u || t[2] !== n
    ? ((d = () => {
        a && De.collectionFailed(n, u);
      }),
      (f = [a, n, u]),
      (t[0] = a),
      (t[1] = u),
      (t[2] = n),
      (t[3] = d),
      (t[4] = f))
    : ((d = t[3]), (f = t[4])),
    (0, Wt.useLayoutEffect)(d, f));
  let p;
  t[5] !== l || t[6] !== u || t[7] !== n
    ? ((p = l && n == null && it(u) && (0, Gt.jsx)(It, { pathname: u })),
      (t[5] = l),
      (t[6] = u),
      (t[7] = n),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] !== c || t[10] !== a || t[11] !== i || t[12] !== r || t[13] !== n
    ? ((m = c && n != null && r != null && (0, Gt.jsx)(kt, { pageId: r, spaceId: n, ready: i && !a })),
      (t[9] = c),
      (t[10] = a),
      (t[11] = i),
      (t[12] = r),
      (t[13] = n),
      (t[14] = m))
    : (m = t[14]);
  let h;
  t[15] !== a || t[16] !== u || t[17] !== i || t[18] !== n
    ? ((h =
        i &&
        !a &&
        (0, Gt.jsx)(
          we,
          { requireVisibleAtPaint: !0, onPaint: () => De.collectionPaintOpportunity(n, u) },
          u,
        )),
      (t[15] = a),
      (t[16] = u),
      (t[17] = i),
      (t[18] = n),
      (t[19] = h))
    : (h = t[19]);
  let g;
  return (
    t[20] !== p || t[21] !== m || t[22] !== h
      ? ((g = (0, Gt.jsxs)(Gt.Fragment, { children: [p, m, h] })),
        (t[20] = p),
        (t[21] = m),
        (t[22] = h),
        (t[23] = g))
      : (g = t[23]),
    g
  );
}
var Ut, Wt, Gt;
function Kt() {
  return (Kt = e(() => {
    ((Ut = _()), O(), (Wt = c()), m(), se(), ke(), r(), At(), Y(), Qe(), Bt(), (Gt = u()));
  }))();
}
function qt(e) {
  let t = (0, Yt.c)(21),
    { pageId: r, updatedAt: i, fallback: a } = e,
    o = n(v),
    s = A(Be),
    c = A(Me),
    [l, u] = (0, Xt.useState)(null),
    d;
  t[0] !== s || t[1] !== r || t[2] !== i || t[3] !== c
    ? ((d = [...et(s, r), `presentation-preview`, c, i]),
      (t[0] = s),
      (t[1] = r),
      (t[2] = i),
      (t[3] = c),
      (t[4] = d))
    : (d = t[4]);
  let p = s != null && c != null,
    m;
  t[5] !== s || t[6] !== r || t[7] !== o || t[8] !== c
    ? ((m = async (e) => {
        let { signal: t } = e;
        if (s == null || c == null) return null;
        let n = () => {
          if ((t.throwIfAborted(), o.get(Be) !== s || o.get(Me) !== c || !o.get(J)))
            throw Error(`The Page preview is no longer active`);
        };
        try {
          n();
          let e = await Ue.getResponse(`/pages/{page_id}/preview`, {
            parameters: { path: { page_id: r } },
            additionalHeaders: { "ChatGPT-Account-ID": s, "Cache-Control": `no-cache, no-store` },
            expectedIdentity: { accountId: s, userId: c },
            assertRequestCurrent: n,
            retry: !1,
            signal: t,
          });
          if (e.status === 204) return null;
          let i = await e.blob();
          return (n(), i.type === `image/png` && i.size > 0 ? i : null);
        } catch {
          return (t.throwIfAborted(), null);
        }
      }),
      (t[5] = s),
      (t[6] = r),
      (t[7] = o),
      (t[8] = c),
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] !== d || t[11] !== p || t[12] !== m
    ? ((h = {
        queryKey: d,
        enabled: p,
        staleTime: 0,
        gcTime: 0,
        refetchOnMount: !0,
        refetchOnWindowFocus: !0,
        refetchOnReconnect: !0,
        refetchInterval: Jt,
        refetchIntervalInBackground: !1,
        retry: !1,
        queryFn: m,
      }),
      (t[10] = d),
      (t[11] = p),
      (t[12] = m),
      (t[13] = h))
    : (h = t[13]);
  let { data: g, dataUpdatedAt: _ } = f(h, o.queryClient);
  if (g == null || l === _) return a;
  let y;
  t[14] === g
    ? (y = t[15])
    : ((y = (e) => {
        if (e == null) return;
        let t = URL.createObjectURL(g);
        return (
          (e.src = t),
          () => {
            (e.removeAttribute(`src`), URL.revokeObjectURL(t));
          }
        );
      }),
      (t[14] = g),
      (t[15] = y));
  let b;
  t[16] === _ ? (b = t[17]) : ((b = () => u(_)), (t[16] = _), (t[17] = b));
  let x;
  return (
    t[18] !== y || t[19] !== b
      ? ((x = (0, Zt.jsx)(`img`, {
          ref: y,
          className: `absolute inset-0 size-full object-contain`,
          alt: ``,
          draggable: !1,
          onError: b,
        })),
        (t[18] = y),
        (t[19] = b),
        (t[20] = x))
      : (x = t[20]),
    x
  );
}
function Jt(e) {
  return e.state.dataUpdateCount < 4 && 1e4;
}
var Yt, Xt, Zt;
function Qt() {
  return (Qt = e(() => {
    ((Yt = _()), j(), O(), (Xt = c()), ut(), st(), Xe(), Ve(), r(), (Zt = u()));
  }))();
}
function $t(e) {
  let t = (0, nn.c)(33),
    {
      pageId: n,
      title: r,
      documentType: i,
      imagePreview: a,
      updatedAt: o,
      iconColor: s,
      namespace: c,
      symbol: l,
      loadingFallback: u,
    } = e,
    d = A(J),
    [f, p] = (0, rn.useState)(null),
    [m, h] = (0, rn.useState)(null),
    [g, _] = (0, rn.useState)(!1),
    v,
    y;
  (t[0] === f
    ? ((v = t[1]), (y = t[2]))
    : ((v = () => {
        if (f == null) return;
        let e = new IntersectionObserver((e) => h(e.some(tn)));
        return (e.observe(f), () => e.disconnect());
      }),
      (y = [f]),
      (t[0] = f),
      (t[1] = v),
      (t[2] = y)),
    (0, rn.useEffect)(v, y));
  let b;
  t[3] !== i || t[4] !== s || t[5] !== c || t[6] !== n || t[7] !== l || t[8] !== r
    ? ((b = (0, Z.jsx)(Ie, {
        iconColor: s,
        pageId: n,
        symbol: l,
        title: r,
        documentType: i,
        namespace: c,
        iconSize: 32,
        iconClassName: `text-3xl`,
        children: en,
      })),
      (t[3] = i),
      (t[4] = s),
      (t[5] = c),
      (t[6] = n),
      (t[7] = l),
      (t[8] = r),
      (t[9] = b))
    : (b = t[9]);
  let x = b,
    S;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (e) => {
        _(e != null);
      }),
      (t[10] = S))
    : (S = t[10]);
  let C = S,
    w;
  t[11] !== i || t[12] !== d
    ? ((w = d && Oe({ document_type: i }) === `page`), (t[11] = i), (t[12] = d), (t[13] = w))
    : (w = t[13]);
  let T = w,
    E;
  t[14] !== i ||
  t[15] !== d ||
  t[16] !== x ||
  t[17] !== a?.url ||
  t[18] !== m ||
  t[19] !== n ||
  t[20] !== T ||
  t[21] !== o
    ? ((E =
        !T &&
        (d &&
        i === `granola_presentation` &&
        a?.url === `/backend-api/pages/${encodeURIComponent(n)}/preview` &&
        m === !0
          ? (0, Z.jsx)(qt, { pageId: n, updatedAt: o, fallback: x })
          : x)),
      (t[14] = i),
      (t[15] = d),
      (t[16] = x),
      (t[17] = a?.url),
      (t[18] = m),
      (t[19] = n),
      (t[20] = T),
      (t[21] = o),
      (t[22] = E))
    : (E = t[22]);
  let D;
  t[23] !== x || t[24] !== g || t[25] !== m || t[26] !== u || t[27] !== n || t[28] !== T
    ? ((D =
        T &&
        (m !== !1 || g
          ? (0, Z.jsx)(`div`, {
              className: `absolute inset-0`,
              children: (0, Z.jsx)(rn.Suspense, {
                fallback: u ?? null,
                children: (0, Z.jsx)(an, {
                  pageId: n,
                  fallback: x,
                  contentRef: C,
                  isVisible: m === !0,
                  loadingFallback: u,
                }),
              }),
            })
          : (u ?? null))),
      (t[23] = x),
      (t[24] = g),
      (t[25] = m),
      (t[26] = u),
      (t[27] = n),
      (t[28] = T),
      (t[29] = D))
    : (D = t[29]);
  let O;
  return (
    t[30] !== E || t[31] !== D
      ? ((O = (0, Z.jsxs)(`div`, {
          ref: p,
          "aria-hidden": !0,
          className: `relative min-h-0 w-full flex-1 overflow-hidden`,
          children: [E, D],
        })),
        (t[30] = E),
        (t[31] = D),
        (t[32] = O))
      : (O = t[32]),
    O
  );
}
function en(e) {
  let { icon: t } = e;
  return (0, Z.jsx)(fe, { artwork: t });
}
function tn(e) {
  return e.isIntersecting;
}
var nn, rn, Z, an;
function on() {
  return (on = e(() => {
    ((nn = _()),
      O(),
      (rn = c()),
      s(),
      be(),
      W(),
      Xe(),
      ze(),
      Qt(),
      (Z = u()),
      M(),
      (an = l(
        async () =>
          (
            await g(
              async () => {
                let { PageThumbnailPreview: e } = await import(`./thumbnail-a1a297c8b668.js`);
                return { PageThumbnailPreview: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]),
              import.meta.url,
            )
          ).PageThumbnailPreview,
        { suspendToParent: !0, errorFallback: null },
      )));
  }))();
}
function sn(e) {
  let t = (0, ln.c)(17),
    { children: n, page: r, title: i, documentType: a } = e,
    o = A(Be),
    s = A(B),
    c = typeof r == `string` ? r : r.page_id,
    l;
  t[0] !== o || t[1] !== c || t[2] !== s
    ? ((l = JSON.stringify([o, s, c])), (t[0] = o), (t[1] = c), (t[2] = s), (t[3] = l))
    : (l = t[3]);
  let u = i ?? (typeof r == `string` ? `` : (r.title ?? ``)),
    d;
  t[4] !== a || t[5] !== r
    ? ((d = a == null && typeof r != `string` ? r : { document_type: a }), (t[4] = a), (t[5] = r), (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === d ? (f = t[8]) : ((f = Oe(d)), (t[7] = d), (t[8] = f));
  let p;
  return (
    t[9] !== o || t[10] !== n || t[11] !== c || t[12] !== l || t[13] !== u || t[14] !== f || t[15] !== s
      ? ((p = (0, Q.jsx)(
          cn,
          { accountId: o, userId: s, pageId: c, title: u, documentType: f, children: n },
          l,
        )),
        (t[9] = o),
        (t[10] = n),
        (t[11] = c),
        (t[12] = l),
        (t[13] = u),
        (t[14] = f),
        (t[15] = s),
        (t[16] = p))
      : (p = t[16]),
    p
  );
}
function cn(e) {
  let r = (0, ln.c)(57),
    { children: i, accountId: a, userId: o, pageId: s, title: c, documentType: l } = e,
    u = n(v),
    [d, f] = (0, un.useState)(!1),
    p = (0, un.useRef)(void 0),
    m,
    h;
  (r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = () => () => clearTimeout(p.current)), (h = []), (r[0] = m), (r[1] = h))
    : ((m = r[0]), (h = r[1])),
    (0, un.useEffect)(m, h));
  let [g, _] = (0, un.useState)(null),
    y = g != null,
    b;
  r[2] === y ? (b = r[3]) : ((b = { enabled: y }), (r[2] = y), (r[3] = b));
  let x = ne($e, g?.page ?? s, b),
    S;
  r[4] !== a || r[5] !== d || r[6] !== s || r[7] !== u || r[8] !== o
    ? ((S = () => {
        (clearTimeout(p.current), d || Je(u, s, a, o, `intent`)?.());
      }),
      (r[4] = a),
      (r[5] = d),
      (r[6] = s),
      (r[7] = u),
      (r[8] = o),
      (r[9] = S))
    : (S = r[9]);
  let C = S,
    w;
  r[10] === u
    ? (w = r[11])
    : ((w = (e) =>
        e == null
          ? []
          : Pe({
              scope: u,
              page: e,
              pageId: e.page_id,
              title: e.title ?? ``,
              kind: `page`,
              canCreatePage: !1,
              isPinned: u.get(nt).includes(e.page_id),
              onTogglePinned: () => pt(u, e.page_id, !u.get(nt).includes(e.page_id)),
              onArchive:
                L(e) && u.get($e, e) !== `request_changes`
                  ? () => {
                      u.get($e, e) !== `request_changes` && _({ kind: `archive`, page: e });
                    }
                  : void 0,
              onShare:
                e.access.can_share === !0 && u.get($e, e) !== `request_changes`
                  ? () => {
                      u.get($e, e) !== `request_changes` && _({ kind: `share`, page: e });
                    }
                  : void 0,
            })),
      (r[10] = u),
      (r[11] = w));
  let T = w,
    E;
  r[12] !== T || r[13] !== u
    ? ((E = (e) =>
        e?.drive_space_id != null && u.get(ct, `2479867784`)
          ? ie(u, e.drive_space_id).then(
              () => T(e),
              () => T(e),
            )
          : T(e)),
      (r[12] = T),
      (r[13] = u),
      (r[14] = E))
    : (E = r[14]);
  let D = E,
    O;
  r[15] !== a || r[16] !== D || r[17] !== s || r[18] !== u || r[19] !== o
    ? ((O = () => {
        (We.prefetch(u), clearTimeout(p.current));
        let e = ae(u, s, a, o);
        return e == null ? oe(u, s, a, o).then(D) : D(e);
      }),
      (r[15] = a),
      (r[16] = D),
      (r[17] = s),
      (r[18] = u),
      (r[19] = o),
      (r[20] = O))
    : (O = r[20]);
  let k = O,
    A;
  r[21] !== a || r[22] !== s || r[23] !== u || r[24] !== o
    ? ((A = (e) => {
        let t = e?.ownerDocument.defaultView?.IntersectionObserver;
        if (e == null || t == null) return;
        let n,
          r = new t((e) => {
            let [t] = e;
            (n?.(),
              (n = t?.isIntersecting
                ? u.watch((e) => {
                    let { get: t } = e;
                    if (t(ge) && t(Be) === a && t(B) === o) return Je(u, s, a, o, `visible`);
                  })
                : void 0));
          });
        return (
          r.observe(e),
          () => {
            (r.disconnect(), n?.());
          }
        );
      }),
      (r[21] = a),
      (r[22] = s),
      (r[23] = u),
      (r[24] = o),
      (r[25] = A))
    : (A = r[25]);
  let j = A,
    M;
  r[26] === C
    ? (M = r[27])
    : ((M = (e) => {
        e.pointerType !== `touch` &&
          e.target instanceof Node &&
          e.currentTarget.contains(e.target) &&
          (clearTimeout(p.current), (p.current = setTimeout(C, 50)));
      }),
      (r[26] = C),
      (r[27] = M));
  let ee;
  r[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = () => clearTimeout(p.current)), (r[28] = ee))
    : (ee = r[28]);
  let te;
  r[29] === C
    ? (te = r[30])
    : ((te = (e) => {
        e.currentTarget.contains(e.target) && C();
      }),
      (r[29] = C),
      (r[30] = te));
  let re;
  r[31] !== l || r[32] !== k || r[33] !== d || r[34] !== j || r[35] !== c
    ? ((re = (0, Q.jsx)(at, {
        ref: j,
        libraryPresentation: !0,
        documentType: l,
        getItems: k,
        kind: `page`,
        loadingMessage: dn.loading,
        onOpenChange: f,
        open: d,
        title: c,
      })),
      (r[31] = l),
      (r[32] = k),
      (r[33] = d),
      (r[34] = j),
      (r[35] = c),
      (r[36] = re))
    : (re = r[36]);
  let N;
  r[37] !== i || r[38] !== re ? ((N = i(re)), (r[37] = i), (r[38] = re), (r[39] = N)) : (N = r[39]);
  let P;
  r[40] !== M || r[41] !== te || r[42] !== N
    ? ((P = (0, Q.jsx)(`div`, {
        className: `contents`,
        onPointerEnter: M,
        onPointerLeave: ee,
        onFocusCapture: te,
        children: N,
      })),
      (r[40] = M),
      (r[41] = te),
      (r[42] = N),
      (r[43] = P))
    : (P = r[43]);
  let F;
  r[44] !== k || r[45] !== P
    ? ((F = (0, Q.jsx)(t, { getItems: k, loadingMessage: dn.loading, onOpenChange: f, children: P })),
      (r[44] = k),
      (r[45] = P),
      (r[46] = F))
    : (F = r[46]);
  let I;
  r[47] !== g || r[48] !== x
    ? ((I =
        g?.kind === `archive` && x !== `request_changes`
          ? (0, Q.jsx)(U, {
              pageId: g.page.page_id,
              pageTitle: g.page.title,
              hasChildren: g.page.has_children,
              documentType: Oe(g.page),
              onClose: () => _(null),
            })
          : null),
      (r[47] = g),
      (r[48] = x),
      (r[49] = I))
    : (I = r[49]);
  let z;
  r[50] !== g || r[51] !== x
    ? ((z =
        g?.kind === `share` && g.page.access.can_share === !0 && x !== `request_changes`
          ? (0, Q.jsx)(R, { pageId: g.page.page_id, onClose: () => _(null) })
          : null),
      (r[50] = g),
      (r[51] = x),
      (r[52] = z))
    : (z = r[52]);
  let V;
  return (
    r[53] !== F || r[54] !== I || r[55] !== z
      ? ((V = (0, Q.jsxs)(Q.Fragment, { children: [F, I, z] })),
        (r[53] = F),
        (r[54] = I),
        (r[55] = z),
        (r[56] = V))
      : (V = r[56]),
    V
  );
}
var ln, un, Q, dn;
function fn() {
  return (fn = e(() => {
    ((ln = _()),
      O(),
      (un = c()),
      S(),
      ut(),
      k(),
      r(),
      Ye(),
      dt(),
      W(),
      Xe(),
      Fe(),
      He(),
      Se(),
      je(),
      _e(),
      Re(),
      rt(),
      Ve(),
      K(),
      (Q = u()),
      (dn = T({
        loading: {
          id: `codex.space.page.actions.loading`,
          defaultMessage: `Loading actions…`,
          description: `Disabled menu item while permissions for a Page are loading`,
        },
      })));
  }))();
}
function pn(e) {
  let t = (0, _n.c)(14),
    { entry: n } = e,
    r = A(Be),
    i = A(xt),
    a = n.node.shared_by;
  if (r == null || !a?.user_id || n.node.shared_via?.length) {
    let e;
    return (t[0] === n ? (e = t[1]) : ((e = (0, $.jsx)(Tt, { entry: n })), (t[0] = n), (t[1] = e)), e);
  }
  let o = `${a.user_id}__${r}`,
    s = a.avatar_url,
    c = a.name ?? ``,
    l = i && `relative z-10`,
    u;
  t[2] === l ? (u = t[3]) : ((u = d(`inline-flex min-w-0 items-center gap-2`, l)), (t[2] = l), (t[3] = u));
  let f;
  t[4] === n ? (f = t[5]) : ((f = (0, $.jsx)(Tt, { entry: n })), (t[4] = n), (t[5] = f));
  let p;
  t[6] !== u || t[7] !== f
    ? ((p = (0, $.jsx)(`span`, { className: u, children: f })), (t[6] = u), (t[7] = f), (t[8] = p))
    : (p = t[8]);
  let m;
  return (
    t[9] !== a.avatar_url || t[10] !== o || t[11] !== c || t[12] !== p
      ? ((m = (0, $.jsx)(bt, { accountUserId: o, avatarUrl: s, label: c, children: p })),
        (t[9] = a.avatar_url),
        (t[10] = o),
        (t[11] = c),
        (t[12] = p),
        (t[13] = m))
      : (m = t[13]),
    m
  );
}
function mn(e) {
  let t = (0, _n.c)(22),
    r = n(v),
    i = `node` in e.page ? e.page.node.id : e.page.page_id,
    a = ne(yn, `node` in e.page ? i : null),
    o;
  t[0] !== a || t[1] !== e.page
    ? ((o = e.page),
      `node` in o &&
        a?.access.can_read &&
        a.deleted_at == null &&
        a.display_metadata_included !== !1 &&
        o.node.updated_at != null &&
        Date.parse(a.updated_at) > Date.parse(o.node.updated_at) &&
        (o = { ...o, node: { ...o.node, name: a.title ?? `` } }),
      (t[0] = a),
      (t[1] = e.page),
      (t[2] = o))
    : (o = t[2]);
  let s = `node` in e.page ? e.page.node.page_metadata?.document_type : e.page.document_type,
    c;
  t[3] !== s ||
  t[4] !== i ||
  t[5] !== e.browseLocation?.deleted ||
  t[6] !== e.libraryPresentation ||
  t[7] !== e.page ||
  t[8] !== e.selectionActive ||
  t[9] !== r
    ? ((c = (t) => {
        let n = t.currentTarget.querySelector(
          e.libraryPresentation || `node` in e.page ? `a[href]` : `button`,
        );
        !e.selectionActive &&
          !e.browseLocation?.deleted &&
          Oe({ document_type: s }) === `page` &&
          (`node` in e.page || (e.page.access.can_read && e.page.deleted_at == null)) &&
          t.pointerType !== `touch` &&
          t.buttons === 0 &&
          n instanceof HTMLElement &&
          t.target instanceof Node &&
          n.contains(t.target) &&
          ht(r, i, n, void 0, { prefetchPreview: !1, delayMs: 50 });
      }),
      (t[3] = s),
      (t[4] = i),
      (t[5] = e.browseLocation?.deleted),
      (t[6] = e.libraryPresentation),
      (t[7] = e.page),
      (t[8] = e.selectionActive),
      (t[9] = r),
      (t[10] = c))
    : (c = t[10]);
  let l = `node` in o ? o.node.id : o,
    u = `node` in o ? o.node.name : void 0,
    d;
  t[11] !== o || t[12] !== e
    ? ((d = (t) => (0, $.jsx)(hn, { ...e, page: o, menu: t })), (t[11] = o), (t[12] = e), (t[13] = d))
    : (d = t[13]);
  let f;
  t[14] !== s || t[15] !== l || t[16] !== u || t[17] !== d
    ? ((f = (0, $.jsx)(sn, { page: l, title: u, documentType: s, children: d })),
      (t[14] = s),
      (t[15] = l),
      (t[16] = u),
      (t[17] = d),
      (t[18] = f))
    : (f = t[18]);
  let p;
  return (
    t[19] !== c || t[20] !== f
      ? ((p = (0, $.jsx)(`div`, { className: `contents`, onPointerOver: c, children: f })),
        (t[19] = c),
        (t[20] = f),
        (t[21] = p))
      : (p = t[21]),
    p
  );
}
function hn(e) {
  let t = (0, _n.c)(125),
    {
      navigation: r,
      page: i,
      libraryItem: s,
      parentSpace: c,
      viewMode: l,
      libraryPresentation: u,
      pinnedPresentation: f,
      reorderAction: p,
      browseLocation: m,
      source: h,
      tree: g,
      reserveDisclosureSpace: _,
      selection: y,
      selected: S,
      isDropTarget: T,
      checkingMove: E,
      selectionActive: D,
      onSelect: O,
      menu: k,
    } = e,
    j = u !== void 0 && u,
    M = f !== void 0 && f,
    N = n(v),
    F = re(),
    I = b(),
    L = x(),
    R = A(Be),
    z = A(nt),
    B = `node` in i,
    V = B ? i.node.id : i.page_id,
    ie = ne(tt, V),
    ae;
  t[0] !== E || t[1] !== ie
    ? ((ae = ie || E ? (0, $.jsx)(ye, { className: `icon-xxs text-secondary` }) : void 0),
      (t[0] = E),
      (t[1] = ie),
      (t[2] = ae))
    : (ae = t[2]);
  let oe = ae,
    se = B ? i.node.name : i.title,
    ce = B ? (i.node.updated_at ?? i.node.record_creation_time) : i.updated_at,
    H = B ? i.node.page_metadata : i,
    U = H?.document_type,
    ue;
  t[3] === U ? (ue = t[4]) : ((ue = Oe({ document_type: U })), (t[3] = U), (t[4] = ue));
  let de = ue,
    W = H?.symbol,
    fe = H != null && `namespace` in H ? H.namespace : void 0,
    pe = ne(yn, B && fe === void 0 ? V : null),
    G = B && fe === void 0 ? pe?.namespace : fe,
    he;
  t[5] !== R ||
  t[6] !== B ||
  t[7] !== j ||
  t[8] !== L ||
  t[9] !== I ||
  t[10] !== r ||
  t[11] !== V ||
  t[12] !== c ||
  t[13] !== N
    ? ((he = () => {
        if (r != null) {
          r.onOpenPage(V);
          return;
        }
        c
          ? qe(N, I, L, R, c.root_page_id, V)
          : j || B
            ? I(`/space/${V}`, { state: { ...ve(L, R, V), sidebarArea: `space`, spaceSidebarAccountId: R } })
            : me(I, R, V);
      }),
      (t[5] = R),
      (t[6] = B),
      (t[7] = j),
      (t[8] = L),
      (t[9] = I),
      (t[10] = r),
      (t[11] = V),
      (t[12] = c),
      (t[13] = N),
      (t[14] = he))
    : (he = t[14]);
  let K = he,
    ge;
  t[15] !== V || t[16] !== z ? ((ge = z.includes(V)), (t[15] = V), (t[16] = z), (t[17] = ge)) : (ge = t[17]);
  let q = ge,
    _e;
  t[18] !== F || t[19] !== se || t[20] !== q
    ? ((_e = q
        ? F.formatMessage(
            {
              id: `codex.space.sidebar.unpinItem`,
              defaultMessage: `Unpin {title}`,
              description: `Action for unpinning a shared Page or Space named {title} from the sidebar's Pinned section`,
            },
            { title: se ?? `` },
          )
        : F.formatMessage(
            {
              id: `codex.space.sidebar.pinItem`,
              defaultMessage: `Pin {title}`,
              description: `Action for pinning a shared Page or Space named {title} to the sidebar's Pinned section`,
            },
            { title: se ?? `` },
          )),
      (t[18] = F),
      (t[19] = se),
      (t[20] = q),
      (t[21] = _e))
    : (_e = t[21]);
  let be = _e;
  if (!se?.trim()) {
    let e;
    (t[22] !== U || t[23] !== F || t[24] !== q
      ? ((e = q
          ? F.formatMessage(
              {
                id: `space.list.unpinUntitledPage.byDocumentType`,
                defaultMessage: `{documentType, select, granola_presentation {Unpin untitled slide} granola_workbook {Unpin untitled sheet} other {Unpin untitled page}}`,
                description: `Accessible action to unpin a Page with no title. documentType selects slide, sheet, or page for the current document.`,
              },
              { documentType: U ?? `page` },
            )
          : F.formatMessage(
              {
                id: `space.list.pinUntitledPage.byDocumentType`,
                defaultMessage: `{documentType, select, granola_presentation {Pin untitled slide} granola_workbook {Pin untitled sheet} other {Pin untitled page}}`,
                description: `Accessible action to pin a Page with no title. documentType selects slide, sheet, or page for the current document.`,
              },
              { documentType: U ?? `page` },
            )),
        (t[22] = U),
        (t[23] = F),
        (t[24] = q),
        (t[25] = e))
      : (e = t[25]),
      (be = e));
  }
  let xe = l === `grid` ? `ghostActive` : `ghost`,
    J;
  t[26] !== V || t[27] !== q || t[28] !== N
    ? ((J = (e) => {
        (e.stopPropagation(), pt(N, V, !q));
      }),
      (t[26] = V),
      (t[27] = q),
      (t[28] = N),
      (t[29] = J))
    : (J = t[29]);
  let Se;
  t[30] === q ? (Se = t[31]) : ((Se = q ? (0, $.jsx)(ee, {}) : (0, $.jsx)(o, {})), (t[30] = q), (t[31] = Se));
  let Ce;
  t[32] !== be || t[33] !== q || t[34] !== Se || t[35] !== xe || t[36] !== J
    ? ((Ce = (0, $.jsx)(w, {
        color: xe,
        size: `actionSm`,
        uniform: !0,
        "aria-label": be,
        "aria-pressed": q,
        onClick: J,
        children: Se,
      })),
      (t[32] = be),
      (t[33] = q),
      (t[34] = Se),
      (t[35] = xe),
      (t[36] = J),
      (t[37] = Ce))
    : (Ce = t[37]);
  let Y = Ce,
    we;
  t[38] !== k || t[39] !== Y
    ? ((we = (0, $.jsxs)(`span`, { className: `inline-flex items-center gap-1`, children: [Y, k] })),
      (t[38] = k),
      (t[39] = Y),
      (t[40] = we))
    : (we = t[40]);
  let Ee = we;
  if (j || B) {
    let e = m?.directoryId === `library:collection:shared-with-me`,
      n = B ? i : s,
      r;
    t[41] !== n?.node.is_shared || t[42] !== F
      ? ((r = n?.node.is_shared
          ? (0, $.jsx)(te, {
              tooltipContent: (0, $.jsx)(P, {
                id: `space.page.sharedIndicator`,
                defaultMessage: `Shared`,
                description: `Status beside a Page title indicating that the Page is shared with other people`,
              }),
              children: (0, $.jsx)(`span`, {
                className: `inline-flex items-center`,
                children: (0, $.jsx)(a, {
                  asset: C,
                  className: `shrink-0 text-secondary`,
                  "aria-hidden": !1,
                  "aria-label": F.formatMessage({
                    id: `space.page.sharedIndicator`,
                    defaultMessage: `Shared`,
                    description: `Status beside a Page title indicating that the Page is shared with other people`,
                  }),
                }),
              }),
            })
          : null),
        (t[41] = n?.node.is_shared),
        (t[42] = F),
        (t[43] = r))
      : (r = t[43]);
    let o = r,
      c =
        ((B && m?.tab === `suggested`) || m?.pageCollection === `all` || m?.pageCollection === `owned`) &&
        n?.lastUsedAt !== void 0,
      u;
    t[44] === m ? (u = t[45]) : ((u = m == null ? `modified-relative` : Ke(m)), (t[44] = m), (t[45] = u));
    let d = u,
      f = c ? n.lastUsedAt : ce,
      v = m?.tab === `suggested` || c ? `activity` : d,
      b,
      x;
    t[46] !== n || t[47] !== e || t[48] !== f || t[49] !== v
      ? ((b = (0, $.jsx)(Dt, { timestamp: f, dateKind: v })),
        e &&
          ((x = n == null ? `—` : (0, $.jsx)(pn, { entry: n })),
          (b = n == null ? `—` : (0, $.jsx)(Ot, { entry: n, dateKind: `shared` }))),
        (t[46] = n),
        (t[47] = e),
        (t[48] = f),
        (t[49] = v),
        (t[50] = b),
        (t[51] = x))
      : ((b = t[50]), (x = t[51]));
    let w = se ?? ``,
      E;
    t[52] !== b ||
    t[53] !== m ||
    t[54] !== U ||
    t[55] !== de ||
    t[56] !== F ||
    t[57] !== T ||
    t[58] !== B ||
    t[59] !== k ||
    t[60] !== H ||
    t[61] !== oe ||
    t[62] !== G ||
    t[63] !== O ||
    t[64] !== K ||
    t[65] !== i.imagePreview ||
    t[66] !== i.image_preview ||
    t[67] !== V ||
    t[68] !== Y ||
    t[69] !== q ||
    t[70] !== M ||
    t[71] !== p ||
    t[72] !== _ ||
    t[73] !== S ||
    t[74] !== y ||
    t[75] !== D ||
    t[76] !== x ||
    t[77] !== o ||
    t[78] !== h ||
    t[79] !== W ||
    t[80] !== g ||
    t[81] !== ce ||
    t[82] !== l
      ? ((E = (e) => {
          let { icon: t, title: n } = e,
            r = n || F.formatMessage(Ae(U));
          return l === `grid`
            ? (0, $.jsx)(le, {
                isDropTarget: T,
                name: r,
                square: !0,
                landscape:
                  M ||
                  de === `granola_workbook` ||
                  de === `granola_presentation` ||
                  de === `granola_whiteboard`,
                actions: D ? null : k,
                reorderAction: p,
                pinAction: D ? null : Y,
                selection: y,
                selected: S,
                onSelect: O,
                selectionActive: D,
                actionIndicator:
                  oe ??
                  (q
                    ? (0, $.jsx)(ee, {
                        className: `text-secondary`,
                        "aria-label": F.formatMessage({
                          id: `space.home.pinnedPage`,
                          defaultMessage: `Pinned`,
                          description: `Status beside a Page title indicating it is pinned in the sidebar`,
                        }),
                      })
                    : void 0),
                href: `/space/${V}`,
                onOpen: K,
                documentHeader: (0, $.jsxs)($.Fragment, {
                  children: [
                    (0, $.jsx)(`span`, { className: `shrink-0`, "data-library-item-icon": ``, children: t }),
                    (0, $.jsx)(`span`, { className: `truncate`, "data-library-item-title": ``, children: r }),
                    o,
                  ],
                }),
                children:
                  H == null
                    ? (0, $.jsx)(Ie, {
                        pageId: V,
                        title: r,
                        namespace: G,
                        iconSize: 32,
                        iconColor: `file-type`,
                        children: gn,
                      })
                    : (0, $.jsx)($t, {
                        iconColor: `file-type`,
                        pageId: V,
                        title: r,
                        documentType: U,
                        imagePreview: B ? i.imagePreview : i.image_preview,
                        updatedAt: ce,
                        namespace: G,
                        symbol: W,
                      }),
              })
            : (0, $.jsx)(Te, {
                isDropTarget: T,
                reserveDisclosureSpace: _,
                name: r,
                tree: g,
                artwork: t,
                source: h,
                favoriteMarker: (0, $.jsxs)($.Fragment, { children: [oe, o] }),
                activity: b,
                sharedBy: x,
                detail: m != null && gt(m) ? vn : void 0,
                actions: D
                  ? void 0
                  : [
                      { key: `pin`, component: Y, alwaysVisible: q },
                      { key: `menu`, component: k },
                    ],
                selection: y,
                selected: S,
                onSelect: O,
                href: `/space/${V}`,
                onOpen: K,
              });
        }),
        (t[52] = b),
        (t[53] = m),
        (t[54] = U),
        (t[55] = de),
        (t[56] = F),
        (t[57] = T),
        (t[58] = B),
        (t[59] = k),
        (t[60] = H),
        (t[61] = oe),
        (t[62] = G),
        (t[63] = O),
        (t[64] = K),
        (t[65] = i.imagePreview),
        (t[66] = i.image_preview),
        (t[67] = V),
        (t[68] = Y),
        (t[69] = q),
        (t[70] = M),
        (t[71] = p),
        (t[72] = _),
        (t[73] = S),
        (t[74] = y),
        (t[75] = D),
        (t[76] = x),
        (t[77] = o),
        (t[78] = h),
        (t[79] = W),
        (t[80] = g),
        (t[81] = ce),
        (t[82] = l),
        (t[83] = E))
      : (E = t[83]);
    let A;
    return (
      t[84] !== U || t[85] !== G || t[86] !== V || t[87] !== W || t[88] !== w || t[89] !== E
        ? ((A = (0, $.jsx)(Ie, {
            iconColor: `file-type`,
            pageId: V,
            documentType: U,
            iconSize: 20,
            namespace: G,
            symbol: W,
            title: w,
            children: E,
          })),
          (t[84] = U),
          (t[85] = G),
          (t[86] = V),
          (t[87] = W),
          (t[88] = w),
          (t[89] = E),
          (t[90] = A))
        : (A = t[90]),
      A
    );
  }
  if (l === `grid`) {
    let e = i.title ?? ``,
      n;
    t[91] !== Ee || t[92] !== U || t[93] !== F || t[94] !== K || t[95] !== i.updated_at || t[96] !== c
      ? ((n = (e) => {
          let { icon: t, title: n } = e;
          return (0, $.jsx)(ot, {
            surface: `raised`,
            ariaLabel: n || F.formatMessage(Ae(U)),
            title: n || (0, $.jsx)(P, { ...Ae(U) }),
            icon: t,
            isSelected: !1,
            hasInteractiveContent: !0,
            onSelect: K,
            rightText: (0, $.jsx)(`span`, { className: `pointer-events-auto`, children: Ee }),
            secondLine: (0, $.jsxs)(`span`, {
              className: `flex items-center justify-between gap-2`,
              children: [
                (0, $.jsxs)(`span`, {
                  className: `flex min-w-0 items-center gap-2`,
                  children: [
                    c ? (0, $.jsx)(ft, { spaceId: c.id }) : null,
                    (0, $.jsx)(`span`, {
                      className: `truncate`,
                      children:
                        c?.name ??
                        (0, $.jsx)(P, {
                          id: `space.list.personalLocation`,
                          defaultMessage: `Personal`,
                          description: `Location for a Page outside a Space`,
                        }),
                    }),
                  ],
                }),
                (0, $.jsx)(_t, { dateString: i.updated_at }),
              ],
            }),
          });
        }),
        (t[91] = Ee),
        (t[92] = U),
        (t[93] = F),
        (t[94] = K),
        (t[95] = i.updated_at),
        (t[96] = c),
        (t[97] = n))
      : (n = t[97]);
    let r;
    return (
      t[98] !== i.document_type ||
      t[99] !== i.namespace ||
      t[100] !== i.page_id ||
      t[101] !== i.symbol ||
      t[102] !== e ||
      t[103] !== n
        ? ((r = (0, $.jsx)(
            Ie,
            {
              iconColor: `file-type`,
              pageId: i.page_id,
              documentType: i.document_type,
              namespace: i.namespace,
              symbol: i.symbol,
              title: e,
              children: n,
            },
            i.page_id,
          )),
          (t[98] = i.document_type),
          (t[99] = i.namespace),
          (t[100] = i.page_id),
          (t[101] = i.symbol),
          (t[102] = e),
          (t[103] = n),
          (t[104] = r))
        : (r = t[104]),
      r
    );
  }
  let De = i.title ?? ``,
    ke;
  t[105] !== R ||
  t[106] !== Ee ||
  t[107] !== U ||
  t[108] !== F ||
  t[109] !== L ||
  t[110] !== I ||
  t[111] !== r ||
  t[112] !== K ||
  t[113] !== i.updated_at ||
  t[114] !== c ||
  t[115] !== q ||
  t[116] !== N
    ? ((ke = (e) => {
        let { icon: t, title: n } = e;
        return (0, $.jsx)(Mt, {
          ariaLabel: n || F.formatMessage(Ae(U)),
          title: n || F.formatMessage(Ae(U)),
          icon: t,
          onOpen: K,
          updatedAt: i.updated_at,
          space: c
            ? (0, $.jsxs)(`button`, {
                className: `flex max-w-full cursor-interaction items-center gap-2 text-start hover:text-default`,
                type: `button`,
                "aria-label": F.formatMessage(
                  {
                    id: `space.list.openSpace`,
                    defaultMessage: `Open {name} space`,
                    description: `Open the Space containing this Page. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                  },
                  { name: c.name },
                ),
                onClick: (e) => {
                  if ((e.stopPropagation(), r != null)) {
                    r.onOpenSpace(c);
                    return;
                  }
                  qe(N, I, L, R, c.root_page_id);
                },
                children: [
                  (0, $.jsx)(ft, { spaceId: c.id }),
                  (0, $.jsx)(`span`, { className: `truncate`, children: c.name }),
                ],
              })
            : (0, $.jsx)(P, {
                id: `space.list.personalLocation`,
                defaultMessage: `Personal`,
                description: `Location for a Page outside a Space`,
              }),
          action: (0, $.jsx)(`span`, {
            className: d(
              !q &&
                `opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-coarse:opacity-100`,
            ),
            children: Ee,
          }),
        });
      }),
      (t[105] = R),
      (t[106] = Ee),
      (t[107] = U),
      (t[108] = F),
      (t[109] = L),
      (t[110] = I),
      (t[111] = r),
      (t[112] = K),
      (t[113] = i.updated_at),
      (t[114] = c),
      (t[115] = q),
      (t[116] = N),
      (t[117] = ke))
    : (ke = t[117]);
  let je;
  return (
    t[118] !== i.document_type ||
    t[119] !== i.namespace ||
    t[120] !== i.page_id ||
    t[121] !== i.symbol ||
    t[122] !== De ||
    t[123] !== ke
      ? ((je = (0, $.jsx)(
          Ie,
          {
            iconColor: `file-type`,
            pageId: i.page_id,
            documentType: i.document_type,
            namespace: i.namespace,
            symbol: i.symbol,
            title: De,
            children: ke,
          },
          i.page_id,
        )),
        (t[118] = i.document_type),
        (t[119] = i.namespace),
        (t[120] = i.page_id),
        (t[121] = i.symbol),
        (t[122] = De),
        (t[123] = ke),
        (t[124] = je))
      : (je = t[124]),
    je
  );
}
function gn(e) {
  let { icon: t } = e;
  return (0, $.jsx)(`span`, {
    className: `relative min-h-0 w-full flex-1`,
    children: (0, $.jsx)(fe, { artwork: t }),
  });
}
var _n, $, vn, yn;
function bn() {
  return (bn = e(() => {
    ((_n = _()),
      E(),
      p(),
      O(),
      S(),
      m(),
      D(),
      mt(),
      h(),
      y(),
      Ge(),
      N(),
      G(),
      Et(),
      wt(),
      be(),
      I(),
      H(),
      yt(),
      vt(),
      r(),
      St(),
      Ft(),
      W(),
      z(),
      on(),
      Ne(),
      xe(),
      Ve(),
      ze(),
      lt(),
      fn(),
      he(),
      ($ = u()),
      (vn = `—`),
      (yn = F(v, (e, { get: t }) => (e == null ? void 0 : t(Ct, e)))));
  }))();
}
export { Ht as a, jt as c, on as i, Mt as l, bn as n, Vt as o, $t as r, Kt as s, mn as t, Ft as u };
//# sourceMappingURL=page-content-item-331f3e1fa38d.js.map
