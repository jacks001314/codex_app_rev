const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./thumbnail-06e3eb3d4b3e.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./document-e135fecdb63d.js",
      "./writing-block-theme-61c0ed2a12ed.js",
      "./writing-block-editor-styles-90146127a9c9.js",
      "./writing-block-editor-styles-4dc32da811e5.css",
      "./checkboxes-e2ffcb23d363.js",
      "./preview-3e5329112556.js",
      "./editor.module-79b8a30b4fbe.js",
      "./editor-c20f2a3b7037.css",
      "./preview-632774fb6fd4.css",
      "./images-7c1b1f09d7e2.js",
      "./url-4698e75f04db.js",
      "./api-d4f3b59d2f9b.js",
      "./url-e0b3d4c5bcdd.css",
      "./page-metadata-2ff7f696ceb6.js",
      "./assets-4f7817c757db.js",
      "./thumbnail-units-f6617d0ee142.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  AG as r,
  B4 as i,
  Cot as a,
  Ext as o,
  IDt as s,
  Ixt as c,
  MG as l,
  Mz as u,
  Nz as d,
  Pxt as f,
  SO as p,
  TJ as m,
  VDt as h,
  Vxt as g,
  _Mt as _,
  _xt as v,
  bo as y,
  cz as b,
  fPt as x,
  gMt as S,
  jDt as C,
  nSt as w,
  oSt as T,
  pPt as E,
  sz as D,
  t3 as O,
  vzt as k,
  wot as A,
  wxt as j,
  xMt as M,
  xO as ee,
  yo as N,
  yzt as P,
  z4 as F,
  zxt as te,
} from "./app-shared-bbfeca5e5737.js";
import {
  $H as I,
  $ct as L,
  Asn as ne,
  Bar as R,
  Bct as re,
  Dhn as ie,
  Dor as ae,
  Dz as z,
  Ear as B,
  Ez as oe,
  GV as V,
  Gtn as H,
  Hmn as U,
  KV as se,
  Ksn as ce,
  Lar as le,
  Mmn as ue,
  N$ as W,
  OPr as G,
  Oz as de,
  PH as fe,
  RH as pe,
  Sfn as me,
  Sot as he,
  Spt as ge,
  Vct as K,
  Vmn as _e,
  Wct as ve,
  Wtn as ye,
  XMr as be,
  XR as q,
  Xct as xe,
  Xtn as Se,
  YR as Ce,
  ZB as J,
  ZH as we,
  Ztn as Y,
  aB as Te,
  aln as Ee,
  aor as De,
  bfn as Oe,
  bot as ke,
  cB as Ae,
  cor as je,
  d5 as Me,
  ecn as X,
  eor as Ne,
  f5 as Pe,
  fmt as Fe,
  gc as Ie,
  hc as Le,
  iB as Re,
  inn as ze,
  j$ as Be,
  jmn as Ve,
  kH as He,
  kPr as Ue,
  kz as We,
  lB as Ge,
  lU as Ke,
  nB as qe,
  nH as Je,
  oB as Ye,
  qct as Xe,
  rcn as Ze,
  rnn as Qe,
  sH as $e,
  sln as et,
  tNr as tt,
  tV as nt,
  tor as rt,
  uU as it,
  vot as at,
  wpt as ot,
  xot as st,
  xsn as ct,
  yot as lt,
  zH as ut,
} from "./app-initial-5851df3f6cb1.js";
import { a as dt, i as ft, n as pt, o as mt } from "./profile-card-24cf744f537b.js";
import { n as ht, t as gt } from "./cached-page-metadata-7a5a83af28c7.js";
import { c as _t, i as vt, o as yt, s as bt, t as xt } from "./library-item-a06d7f108fc4.js";
import { n as St, r as Ct } from "./paint-marker-e3ad0035e126.js";
function wt(e) {
  let t = (0, Dt.c)(4),
    { ariaLabel: n, children: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Z.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `px-[var(--padding-row-cell-x,var(--padding-row-x))] py-row-y text-xs text-tertiary`,
        children: (0, Z.jsx)(Et, {
          name: (0, Z.jsx)(s, {
            id: `space.list.columnName`,
            defaultMessage: `Name`,
            description: `Page or file name column`,
          }),
          space: (0, Z.jsx)(s, {
            id: `space.list.columnLocation`,
            defaultMessage: `Space`,
            description: `Space or source containing a Page or file. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          }),
          updated: (0, Z.jsx)(s, {
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
      ? ((a = (0, Z.jsxs)(`div`, {
          className: `@container sidebar-navigation`,
          children: [i, (0, Z.jsx)(`ul`, { "aria-label": n, children: r })],
        })),
        (t[1] = n),
        (t[2] = r),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function Tt(e) {
  let t = (0, Dt.c)(19),
    { ariaLabel: n, title: r, icon: i, space: a, updatedAt: o, action: s, onOpen: c } = e,
    l = n ?? r,
    u;
  t[0] === i
    ? (u = t[1])
    : ((u = (0, Z.jsx)(`span`, { className: `flex shrink-0 items-center`, children: i })),
      (t[0] = i),
      (t[1] = u));
  let d;
  t[2] === r
    ? (d = t[3])
    : ((d = (0, Z.jsx)(`span`, { className: `truncate`, children: r })), (t[2] = r), (t[3] = d));
  let f;
  t[4] !== u || t[5] !== d
    ? ((f = (0, Z.jsxs)(`span`, { className: `flex min-w-0 items-center gap-2`, children: [u, d] })),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] === o
    ? (p = t[8])
    : ((p = o == null ? `—` : (0, Z.jsx)(Be, { dateString: o })), (t[7] = o), (t[8] = p));
  let m;
  t[9] !== s || t[10] !== a || t[11] !== f || t[12] !== p
    ? ((m = (0, Z.jsx)(`div`, {
        className: `w-full text-base`,
        children: (0, Z.jsx)(Et, { name: f, space: a, updated: p, action: s }),
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
      ? ((h = (0, Z.jsx)(`li`, {
          children: (0, Z.jsx)(xe, {
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
function Et(e) {
  let t = (0, Dt.c)(13),
    { name: n, space: r, updated: i, action: a } = e,
    o;
  t[0] === n
    ? (o = t[1])
    : ((o = (0, Z.jsx)(`div`, { className: `min-w-0 flex-1`, children: n })), (t[0] = n), (t[1] = o));
  let s;
  t[2] === r
    ? (s = t[3])
    : ((s = (0, Z.jsx)(`div`, {
        className: `pointer-events-auto hidden w-1/4 min-w-0 text-secondary @md:block`,
        children: r,
      })),
      (t[2] = r),
      (t[3] = s));
  let c;
  t[4] === i
    ? (c = t[5])
    : ((c = (0, Z.jsx)(`div`, { className: `hidden w-20 shrink-0 text-secondary @lg:block`, children: i })),
      (t[4] = i),
      (t[5] = c));
  let l;
  t[6] === a
    ? (l = t[7])
    : ((l = (0, Z.jsx)(`div`, {
        className: `pointer-events-auto flex w-6 shrink-0 justify-end`,
        children: a,
      })),
      (t[6] = a),
      (t[7] = l));
  let u;
  return (
    t[8] !== o || t[9] !== s || t[10] !== c || t[11] !== l
      ? ((u = (0, Z.jsxs)(`div`, {
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
var Dt, Z;
function Ot() {
  return (Ot = e(() => {
    ((Dt = k()), C(), W(), L(), (Z = M()));
  }))();
}
function kt(e) {
  let t = (0, At.c)(9),
    { pathname: n } = e,
    {
      recentsReady: r,
      recentsFailed: i,
      pinsReady: a,
      pinsFailed: o,
      spacesReady: s,
      spacesFailed: c,
    } = g(Mt),
    l,
    u;
  return (
    t[0] !== n || t[1] !== o || t[2] !== a || t[3] !== i || t[4] !== r || t[5] !== c || t[6] !== s
      ? ((l = () => {
          let e = ue.getHomeLoad(n);
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
    (0, jt.useLayoutEffect)(l, u),
    null
  );
}
var At, jt, Mt;
function Nt() {
  return (Nt = e(() => {
    ((At = k()),
      f(),
      (jt = P()),
      A(),
      Ne(),
      Ve(),
      Oe(),
      Ee(),
      X(),
      ct(),
      (Mt = T(
        a,
        ({ get: e }) => {
          let t = e(rt) ? e(et, { enabled: !1 }) : e(ce, { enabled: !1 }),
            n = e(me, { enabled: !1 }),
            r = e(Ze, { enabled: !1 });
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
function Pt(e) {
  let t = (0, It.c)(7),
    { section: n, ready: r, failed: i, pathname: o } = e,
    s = c(a),
    l = j(),
    u = o ?? l.pathname,
    d,
    f;
  return (
    t[0] !== u || t[1] !== i || t[2] !== r || t[3] !== s || t[4] !== n
      ? ((d = () => {
          (r || i) && ue.homeSectionResult(n, i ? `failure` : `success`, u, Me(s));
        }),
        (f = [n, r, i, u, s]),
        (t[0] = u),
        (t[1] = i),
        (t[2] = r),
        (t[3] = s),
        (t[4] = n),
        (t[5] = d),
        (t[6] = f))
      : ((d = t[5]), (f = t[6])),
    (0, Lt.useEffect)(d, f),
    null
  );
}
function Ft(e) {
  let t = (0, It.c)(24),
    { spaceId: n, rootPageId: r, ready: i, failed: a, creationActive: o, active: s } = e,
    c = o === void 0 || o,
    l = s === void 0 || s,
    { pathname: u } = j(),
    d,
    f;
  (t[0] !== a || t[1] !== u || t[2] !== n
    ? ((d = () => {
        a && ue.collectionFailed(n, u);
      }),
      (f = [a, n, u]),
      (t[0] = a),
      (t[1] = u),
      (t[2] = n),
      (t[3] = d),
      (t[4] = f))
    : ((d = t[3]), (f = t[4])),
    (0, Lt.useLayoutEffect)(d, f));
  let p;
  t[5] !== l || t[6] !== u || t[7] !== n
    ? ((p = l && n == null && U(u) && (0, Rt.jsx)(kt, { pathname: u })),
      (t[5] = l),
      (t[6] = u),
      (t[7] = n),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] !== c || t[10] !== a || t[11] !== i || t[12] !== r || t[13] !== n
    ? ((m = c && n != null && r != null && (0, Rt.jsx)(St, { pageId: r, spaceId: n, ready: i && !a })),
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
        (0, Rt.jsx)(
          Ce,
          { requireVisibleAtPaint: !0, onPaint: () => ue.collectionPaintOpportunity(n, u) },
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
      ? ((g = (0, Rt.jsxs)(Rt.Fragment, { children: [p, m, h] })),
        (t[20] = p),
        (t[21] = m),
        (t[22] = h),
        (t[23] = g))
      : (g = t[23]),
    g
  );
}
var It, Lt, Rt;
function zt() {
  return (zt = e(() => {
    ((It = k()), f(), (Lt = P()), v(), Pe(), q(), A(), Ct(), Ve(), _e(), Nt(), (Rt = M()));
  }))();
}
function Bt(e) {
  let t = (0, Ut.c)(24),
    { pageId: n, title: r, documentType: i, iconColor: a, namespace: o, symbol: s, loadingFallback: c } = e,
    l = g(le),
    [u, d] = (0, Wt.useState)(null),
    [f, p] = (0, Wt.useState)(null),
    [m, h] = (0, Wt.useState)(!1),
    _,
    v;
  (t[0] === u
    ? ((_ = t[1]), (v = t[2]))
    : ((_ = () => {
        if (u == null) return;
        let e = new IntersectionObserver((e) => p(e.some(Ht)));
        return (e.observe(u), () => e.disconnect());
      }),
      (v = [u]),
      (t[0] = u),
      (t[1] = _),
      (t[2] = v)),
    (0, Wt.useEffect)(_, v));
  let y;
  t[3] !== i || t[4] !== a || t[5] !== o || t[6] !== n || t[7] !== s || t[8] !== r
    ? ((y = (0, Gt.jsx)(ye, {
        iconColor: a,
        pageId: n,
        symbol: s,
        title: r,
        documentType: i,
        namespace: o,
        iconSize: 32,
        iconClassName: `text-3xl`,
        children: Vt,
      })),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = n),
      (t[7] = s),
      (t[8] = r),
      (t[9] = y))
    : (y = t[9]);
  let b = y,
    x;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (e) => {
        h(e != null);
      }),
      (t[10] = x))
    : (x = t[10]);
  let S = x,
    C;
  t[11] !== i || t[12] !== l
    ? ((C = l && je({ document_type: i }) === `page`), (t[11] = i), (t[12] = l), (t[13] = C))
    : (C = t[13]);
  let w = C,
    T = !w && b,
    E;
  t[14] !== b || t[15] !== m || t[16] !== f || t[17] !== c || t[18] !== n || t[19] !== w
    ? ((E =
        w &&
        (f !== !1 || m
          ? (0, Gt.jsx)(`div`, {
              className: `absolute inset-0`,
              children: (0, Gt.jsx)(Wt.Suspense, {
                fallback: c ?? null,
                children: (0, Gt.jsx)(Kt, {
                  pageId: n,
                  fallback: b,
                  contentRef: S,
                  isVisible: f === !0,
                  loadingFallback: c,
                }),
              }),
            })
          : (c ?? null))),
      (t[14] = b),
      (t[15] = m),
      (t[16] = f),
      (t[17] = c),
      (t[18] = n),
      (t[19] = w),
      (t[20] = E))
    : (E = t[20]);
  let D;
  return (
    t[21] !== T || t[22] !== E
      ? ((D = (0, Gt.jsxs)(`div`, {
          ref: d,
          "aria-hidden": !0,
          className: `relative min-h-0 w-full flex-1 overflow-hidden`,
          children: [T, E],
        })),
        (t[21] = T),
        (t[22] = E),
        (t[23] = D))
      : (D = t[23]),
    D
  );
}
function Vt(e) {
  let { icon: t } = e;
  return (0, Gt.jsx)(K, { artwork: t });
}
function Ht(e) {
  return e.isIntersecting;
}
var Ut, Wt, Gt, Kt;
function qt() {
  return (qt = e(() => {
    ((Ut = k()),
      f(),
      (Wt = P()),
      F(),
      Xe(),
      De(),
      B(),
      H(),
      (Gt = M()),
      E(),
      (Kt = i(
        async () =>
          (
            await x(
              async () => {
                let { PageThumbnailPreview: e } = await import(`./thumbnail-06e3eb3d4b3e.js`);
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
function Jt(e) {
  let t = (0, Xt.c)(17),
    { children: n, page: r, title: i, documentType: a } = e,
    o = g(ae),
    s = g(be),
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
  t[7] === d ? (f = t[8]) : ((f = je(d)), (t[7] = d), (t[8] = f));
  let p;
  return (
    t[9] !== o || t[10] !== n || t[11] !== c || t[12] !== l || t[13] !== u || t[14] !== f || t[15] !== s
      ? ((p = (0, Q.jsx)(
          Yt,
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
function Yt(e) {
  let t = (0, Xt.c)(57),
    { children: n, accountId: r, userId: i, pageId: o, title: s, documentType: l } = e,
    u = c(a),
    [d, f] = (0, Zt.useState)(!1),
    p = (0, Zt.useRef)(void 0),
    m,
    h;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = () => () => clearTimeout(p.current)), (h = []), (t[0] = m), (t[1] = h))
    : ((m = t[0]), (h = t[1])),
    (0, Zt.useEffect)(m, h));
  let [g, _] = (0, Zt.useState)(null),
    v = g != null,
    y;
  t[2] === v ? (y = t[3]) : ((y = { enabled: v }), (t[2] = v), (t[3] = y));
  let b = te(I, g?.page ?? o, y),
    x;
  t[4] !== r || t[5] !== d || t[6] !== o || t[7] !== u || t[8] !== i
    ? ((x = () => {
        (clearTimeout(p.current), d || We(u, o, r, i, `intent`)?.());
      }),
      (t[4] = r),
      (t[5] = d),
      (t[6] = o),
      (t[7] = u),
      (t[8] = i),
      (t[9] = x))
    : (x = t[9]);
  let S = x,
    C;
  t[10] === u
    ? (C = t[11])
    : ((C = (e) =>
        e == null
          ? []
          : Ae({
              scope: u,
              page: e,
              pageId: e.page_id,
              title: e.title ?? ``,
              kind: `page`,
              canCreatePage: !1,
              isPinned: u.get(ie).includes(e.page_id),
              onTogglePinned: () => ne(u, e.page_id, !u.get(ie).includes(e.page_id)),
              onArchive:
                Je(e) && u.get(I, e) !== `request_changes`
                  ? () => {
                      u.get(I, e) !== `request_changes` && _({ kind: `archive`, page: e });
                    }
                  : void 0,
              onShare:
                e.access.can_share === !0 && u.get(I, e) !== `request_changes`
                  ? () => {
                      u.get(I, e) !== `request_changes` && _({ kind: `share`, page: e });
                    }
                  : void 0,
            })),
      (t[10] = u),
      (t[11] = C));
  let w = C,
    T;
  t[12] !== w || t[13] !== u
    ? ((T = (e) =>
        e?.drive_space_id != null && u.get(Ue, `2479867784`)
          ? Ke(u, e.drive_space_id).then(
              () => w(e),
              () => w(e),
            )
          : w(e)),
      (t[12] = w),
      (t[13] = u),
      (t[14] = T))
    : (T = t[14]);
  let E = T,
    D;
  t[15] !== r || t[16] !== E || t[17] !== o || t[18] !== u || t[19] !== i
    ? ((D = () => {
        (Te.prefetch(u), clearTimeout(p.current));
        let e = z(u, o, r, i);
        return e == null ? oe(u, o, r, i).then(E) : E(e);
      }),
      (t[15] = r),
      (t[16] = E),
      (t[17] = o),
      (t[18] = u),
      (t[19] = i),
      (t[20] = D))
    : (D = t[20]);
  let O = D,
    k;
  t[21] !== r || t[22] !== o || t[23] !== u || t[24] !== i
    ? ((k = (e) => {
        let t = e?.ownerDocument.defaultView?.IntersectionObserver;
        if (e == null || t == null) return;
        let n,
          a = new t((e) => {
            let [t] = e;
            (n?.(),
              (n = t?.isIntersecting
                ? u.watch((e) => {
                    let { get: t } = e;
                    if (t(R) && t(ae) === r && t(be) === i) return We(u, o, r, i, `visible`);
                  })
                : void 0));
          });
        return (
          a.observe(e),
          () => {
            (a.disconnect(), n?.());
          }
        );
      }),
      (t[21] = r),
      (t[22] = o),
      (t[23] = u),
      (t[24] = i),
      (t[25] = k))
    : (k = t[25]);
  let A = k,
    j;
  t[26] === S
    ? (j = t[27])
    : ((j = (e) => {
        e.pointerType !== `touch` &&
          e.target instanceof Node &&
          e.currentTarget.contains(e.target) &&
          (clearTimeout(p.current), (p.current = setTimeout(S, 50)));
      }),
      (t[26] = S),
      (t[27] = j));
  let M;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = () => clearTimeout(p.current)), (t[28] = M))
    : (M = t[28]);
  let N;
  t[29] === S
    ? (N = t[30])
    : ((N = (e) => {
        e.currentTarget.contains(e.target) && S();
      }),
      (t[29] = S),
      (t[30] = N));
  let P;
  t[31] !== l || t[32] !== O || t[33] !== d || t[34] !== A || t[35] !== s
    ? ((P = (0, Q.jsx)(qe, {
        ref: A,
        libraryPresentation: !0,
        documentType: l,
        getItems: O,
        kind: `page`,
        loadingMessage: Qt.loading,
        onOpenChange: f,
        open: d,
        title: s,
      })),
      (t[31] = l),
      (t[32] = O),
      (t[33] = d),
      (t[34] = A),
      (t[35] = s),
      (t[36] = P))
    : (P = t[36]);
  let F;
  t[37] !== n || t[38] !== P ? ((F = n(P)), (t[37] = n), (t[38] = P), (t[39] = F)) : (F = t[39]);
  let L;
  t[40] !== j || t[41] !== N || t[42] !== F
    ? ((L = (0, Q.jsx)(`div`, {
        className: `contents`,
        onPointerEnter: j,
        onPointerLeave: M,
        onFocusCapture: N,
        children: F,
      })),
      (t[40] = j),
      (t[41] = N),
      (t[42] = F),
      (t[43] = L))
    : (L = t[43]);
  let re;
  t[44] !== O || t[45] !== L
    ? ((re = (0, Q.jsx)(ee, { getItems: O, loadingMessage: Qt.loading, onOpenChange: f, children: L })),
      (t[44] = O),
      (t[45] = L),
      (t[46] = re))
    : (re = t[46]);
  let B;
  t[47] !== g || t[48] !== b
    ? ((B =
        g?.kind === `archive` && b !== `request_changes`
          ? (0, Q.jsx)(V, {
              pageId: g.page.page_id,
              pageTitle: g.page.title,
              hasChildren: g.page.has_children,
              documentType: je(g.page),
              onClose: () => _(null),
            })
          : null),
      (t[47] = g),
      (t[48] = b),
      (t[49] = B))
    : (B = t[49]);
  let H;
  t[50] !== g || t[51] !== b
    ? ((H =
        g?.kind === `share` && g.page.access.can_share === !0 && b !== `request_changes`
          ? (0, Q.jsx)(J, { pageId: g.page.page_id, onClose: () => _(null) })
          : null),
      (t[50] = g),
      (t[51] = b),
      (t[52] = H))
    : (H = t[52]);
  let U;
  return (
    t[53] !== re || t[54] !== B || t[55] !== H
      ? ((U = (0, Q.jsxs)(Q.Fragment, { children: [re, B, H] })),
        (t[53] = re),
        (t[54] = B),
        (t[55] = H),
        (t[56] = U))
      : (U = t[56]),
    U
  );
}
var Xt, Zt, Q, Qt;
function $t() {
  return ($t = e(() => {
    ((Xt = k()),
      f(),
      (Zt = P()),
      C(),
      tt(),
      p(),
      A(),
      G(),
      it(),
      De(),
      B(),
      we(),
      $e(),
      se(),
      Ye(),
      nt(),
      Ge(),
      Re(),
      ct(),
      de(),
      (Q = M()),
      (Qt = n({
        loading: {
          id: `codex.space.page.actions.loading`,
          defaultMessage: `Loading actions…`,
          description: `Disabled menu item while permissions for a Page are loading`,
        },
      })));
  }))();
}
function en(e) {
  let t = (0, an.c)(14),
    { entry: n } = e,
    r = g(ae),
    i = g(mt),
    a = n.node.shared_by;
  if (r == null || !a?.user_id || n.node.shared_via?.length) {
    let e;
    return (t[0] === n ? (e = t[1]) : ((e = (0, $.jsx)(vt, { entry: n })), (t[0] = n), (t[1] = e)), e);
  }
  let o = `${a.user_id}__${r}`,
    s = a.avatar_url,
    c = a.name ?? ``,
    l = i && `relative z-10`,
    u;
  t[2] === l ? (u = t[3]) : ((u = S(`inline-flex min-w-0 items-center gap-2`, l)), (t[2] = l), (t[3] = u));
  let d;
  t[4] === n ? (d = t[5]) : ((d = (0, $.jsx)(vt, { entry: n })), (t[4] = n), (t[5] = d));
  let f;
  t[6] !== u || t[7] !== d
    ? ((f = (0, $.jsx)(`span`, { className: u, children: d })), (t[6] = u), (t[7] = d), (t[8] = f))
    : (f = t[8]);
  let p;
  return (
    t[9] !== a.avatar_url || t[10] !== o || t[11] !== c || t[12] !== f
      ? ((p = (0, $.jsx)(pt, { accountUserId: o, avatarUrl: s, label: c, children: f })),
        (t[9] = a.avatar_url),
        (t[10] = o),
        (t[11] = c),
        (t[12] = f),
        (t[13] = p))
      : (p = t[13]),
    p
  );
}
function tn(e) {
  let t = (0, an.c)(22),
    n = c(a),
    r = `node` in e.page ? e.page.node.id : e.page.page_id,
    i = te(sn, `node` in e.page ? r : null),
    o;
  t[0] !== i || t[1] !== e.page
    ? ((o = e.page),
      `node` in o &&
        i?.access.can_read &&
        i.deleted_at == null &&
        i.display_metadata_included !== !1 &&
        o.node.updated_at != null &&
        Date.parse(i.updated_at) > Date.parse(o.node.updated_at) &&
        (o = { ...o, node: { ...o.node, name: i.title ?? `` } }),
      (t[0] = i),
      (t[1] = e.page),
      (t[2] = o))
    : (o = t[2]);
  let s = `node` in e.page ? e.page.node.page_metadata?.document_type : e.page.document_type,
    l;
  t[3] !== s ||
  t[4] !== r ||
  t[5] !== e.browseLocation?.deleted ||
  t[6] !== e.libraryPresentation ||
  t[7] !== e.page ||
  t[8] !== e.selectionActive ||
  t[9] !== n
    ? ((l = (t) => {
        let i = t.currentTarget.querySelector(
          e.libraryPresentation || `node` in e.page ? `a[href]` : `button`,
        );
        !e.selectionActive &&
          !e.browseLocation?.deleted &&
          je({ document_type: s }) === `page` &&
          (`node` in e.page || (e.page.access.can_read && e.page.deleted_at == null)) &&
          t.pointerType !== `touch` &&
          t.buttons === 0 &&
          i instanceof HTMLElement &&
          t.target instanceof Node &&
          i.contains(t.target) &&
          Ie(n, r, i, void 0, { prefetchPreview: !1, delayMs: 50 });
      }),
      (t[3] = s),
      (t[4] = r),
      (t[5] = e.browseLocation?.deleted),
      (t[6] = e.libraryPresentation),
      (t[7] = e.page),
      (t[8] = e.selectionActive),
      (t[9] = n),
      (t[10] = l))
    : (l = t[10]);
  let u = `node` in o ? o.node.id : o,
    d = `node` in o ? o.node.name : void 0,
    f;
  t[11] !== o || t[12] !== e
    ? ((f = (t) => (0, $.jsx)(nn, { ...e, page: o, menu: t })), (t[11] = o), (t[12] = e), (t[13] = f))
    : (f = t[13]);
  let p;
  t[14] !== s || t[15] !== u || t[16] !== d || t[17] !== f
    ? ((p = (0, $.jsx)(Jt, { page: u, title: d, documentType: s, children: f })),
      (t[14] = s),
      (t[15] = u),
      (t[16] = d),
      (t[17] = f),
      (t[18] = p))
    : (p = t[18]);
  let m;
  return (
    t[19] !== l || t[20] !== p
      ? ((m = (0, $.jsx)(`div`, { className: `contents`, onPointerOver: l, children: p })),
        (t[19] = l),
        (t[20] = p),
        (t[21] = m))
      : (m = t[21]),
    m
  );
}
function nn(e) {
  let n = (0, an.c)(121),
    {
      navigation: i,
      page: d,
      libraryItem: f,
      parentSpace: p,
      viewMode: m,
      libraryPresentation: _,
      pinnedPresentation: v,
      reorderAction: b,
      browseLocation: x,
      source: C,
      tree: w,
      reserveDisclosureSpace: T,
      selection: E,
      selected: O,
      isDropTarget: k,
      checkingMove: A,
      selectionActive: M,
      onSelect: ee,
      menu: N,
    } = e,
    P = _ !== void 0 && _,
    F = v !== void 0 && v,
    I = c(a),
    L = h(),
    R = o(),
    z = j(),
    B = g(ae),
    oe = g(ie),
    V = `node` in d,
    H = V ? d.node.id : d.page_id,
    U = te(fe, H),
    se;
  n[0] !== A || n[1] !== U
    ? ((se = U || A ? (0, $.jsx)(pe, { className: `icon-xxs text-secondary` }) : void 0),
      (n[0] = A),
      (n[1] = U),
      (n[2] = se))
    : (se = n[2]);
  let ce = se,
    le = V ? d.node.name : d.title,
    ue = V ? (d.node.updated_at ?? d.node.record_creation_time) : d.updated_at,
    W = V ? d.node.page_metadata : d,
    G = W?.document_type,
    de;
  n[3] === G ? (de = n[4]) : ((de = je({ document_type: G })), (n[3] = G), (n[4] = de));
  let me = de,
    K = W?.symbol,
    _e = W != null && `namespace` in W ? W.namespace : void 0,
    be = te(sn, V && _e === void 0 ? H : null),
    q = V && _e === void 0 ? be?.namespace : _e,
    Ce;
  n[5] !== B ||
  n[6] !== V ||
  n[7] !== P ||
  n[8] !== z ||
  n[9] !== R ||
  n[10] !== i ||
  n[11] !== H ||
  n[12] !== p ||
  n[13] !== I
    ? ((Ce = () => {
        if (i != null) {
          i.onOpenPage(H);
          return;
        }
        p
          ? lt(I, R, z, B, p.root_page_id, H)
          : P || V
            ? R(`/space/${H}`, { state: { ...he(z, B, H), sidebarArea: `space`, spaceSidebarAccountId: B } })
            : ke(R, B, H);
      }),
      (n[5] = B),
      (n[6] = V),
      (n[7] = P),
      (n[8] = z),
      (n[9] = R),
      (n[10] = i),
      (n[11] = H),
      (n[12] = p),
      (n[13] = I),
      (n[14] = Ce))
    : (Ce = n[14]);
  let J = Ce,
    we;
  n[15] !== H || n[16] !== oe
    ? ((we = oe.includes(H)), (n[15] = H), (n[16] = oe), (n[17] = we))
    : (we = n[17]);
  let Y = we,
    Te;
  n[18] !== L || n[19] !== le || n[20] !== Y
    ? ((Te = Y
        ? L.formatMessage(
            {
              id: `codex.space.sidebar.unpinItem`,
              defaultMessage: `Unpin {title}`,
              description: `Action for unpinning a shared Page or Space named {title} from the sidebar's Pinned section`,
            },
            { title: le ?? `` },
          )
        : L.formatMessage(
            {
              id: `codex.space.sidebar.pinItem`,
              defaultMessage: `Pin {title}`,
              description: `Action for pinning a shared Page or Space named {title} to the sidebar's Pinned section`,
            },
            { title: le ?? `` },
          )),
      (n[18] = L),
      (n[19] = le),
      (n[20] = Y),
      (n[21] = Te))
    : (Te = n[21]);
  let Ee = Te;
  if (!le?.trim()) {
    let e;
    (n[22] !== G || n[23] !== L || n[24] !== Y
      ? ((e = Y
          ? L.formatMessage(
              {
                id: `space.list.unpinUntitledPage.byDocumentType`,
                defaultMessage: `{documentType, select, granola_presentation {Unpin untitled slide} granola_workbook {Unpin untitled sheet} other {Unpin untitled page}}`,
                description: `Accessible action to unpin a Page with no title. documentType selects slide, sheet, or page for the current document.`,
              },
              { documentType: G ?? `page` },
            )
          : L.formatMessage(
              {
                id: `space.list.pinUntitledPage.byDocumentType`,
                defaultMessage: `{documentType, select, granola_presentation {Pin untitled slide} granola_workbook {Pin untitled sheet} other {Pin untitled page}}`,
                description: `Accessible action to pin a Page with no title. documentType selects slide, sheet, or page for the current document.`,
              },
              { documentType: G ?? `page` },
            )),
        (n[22] = G),
        (n[23] = L),
        (n[24] = Y),
        (n[25] = e))
      : (e = n[25]),
      (Ee = e));
  }
  let De = m === `grid` ? `ghostActive` : `ghost`,
    Oe;
  n[26] !== H || n[27] !== Y || n[28] !== I
    ? ((Oe = (e) => {
        (e.stopPropagation(), ne(I, H, !Y));
      }),
      (n[26] = H),
      (n[27] = Y),
      (n[28] = I),
      (n[29] = Oe))
    : (Oe = n[29]);
  let Ae;
  n[30] === Y ? (Ae = n[31]) : ((Ae = Y ? (0, $.jsx)(l, {}) : (0, $.jsx)(r, {})), (n[30] = Y), (n[31] = Ae));
  let Me;
  n[32] !== Ee || n[33] !== Y || n[34] !== Ae || n[35] !== De || n[36] !== Oe
    ? ((Me = (0, $.jsx)(t, {
        color: De,
        size: `actionSm`,
        uniform: !0,
        "aria-label": Ee,
        "aria-pressed": Y,
        onClick: Oe,
        children: Ae,
      })),
      (n[32] = Ee),
      (n[33] = Y),
      (n[34] = Ae),
      (n[35] = De),
      (n[36] = Oe),
      (n[37] = Me))
    : (Me = n[37]);
  let X = Me,
    Ne;
  n[38] !== N || n[39] !== X
    ? ((Ne = (0, $.jsxs)(`span`, { className: `inline-flex items-center gap-1`, children: [X, N] })),
      (n[38] = N),
      (n[39] = X),
      (n[40] = Ne))
    : (Ne = n[40]);
  let Pe = Ne;
  if (P || V) {
    let e = x?.directoryId === `library:collection:shared-with-me`,
      t = V ? d : f,
      r;
    n[41] !== t?.node.is_shared || n[42] !== L
      ? ((r = t?.node.is_shared
          ? (0, $.jsx)(D, {
              tooltipContent: (0, $.jsx)(s, {
                id: `space.page.sharedIndicator`,
                defaultMessage: `Shared`,
                description: `Status beside a Page title indicating that the Page is shared with other people`,
              }),
              children: (0, $.jsx)(`span`, {
                className: `inline-flex items-center`,
                children: (0, $.jsx)(u, {
                  asset: y,
                  className: `shrink-0 text-secondary`,
                  "aria-hidden": !1,
                  "aria-label": L.formatMessage({
                    id: `space.page.sharedIndicator`,
                    defaultMessage: `Shared`,
                    description: `Status beside a Page title indicating that the Page is shared with other people`,
                  }),
                }),
              }),
            })
          : null),
        (n[41] = t?.node.is_shared),
        (n[42] = L),
        (n[43] = r))
      : (r = n[43]);
    let i = r,
      a =
        ((V && x?.tab === `suggested`) || x?.pageCollection === `all` || x?.pageCollection === `owned`) &&
        t?.lastUsedAt !== void 0,
      o;
    n[44] === x ? (o = n[45]) : ((o = x == null ? `modified-relative` : ge(x)), (n[44] = x), (n[45] = o));
    let c = o,
      p = a ? t.lastUsedAt : ue,
      h = x?.tab === `suggested` || a ? `activity` : c,
      g,
      _;
    n[46] !== t || n[47] !== e || n[48] !== p || n[49] !== h
      ? ((g = (0, $.jsx)(bt, { timestamp: p, dateKind: h })),
        e &&
          ((_ = t == null ? `—` : (0, $.jsx)(en, { entry: t })),
          (g = t == null ? `—` : (0, $.jsx)(xt, { entry: t, dateKind: `shared` }))),
        (n[46] = t),
        (n[47] = e),
        (n[48] = p),
        (n[49] = h),
        (n[50] = g),
        (n[51] = _))
      : ((g = n[50]), (_ = n[51]));
    let v = le ?? ``,
      S;
    n[52] !== g ||
    n[53] !== x ||
    n[54] !== G ||
    n[55] !== me ||
    n[56] !== L ||
    n[57] !== k ||
    n[58] !== N ||
    n[59] !== W ||
    n[60] !== ce ||
    n[61] !== q ||
    n[62] !== ee ||
    n[63] !== J ||
    n[64] !== H ||
    n[65] !== X ||
    n[66] !== Y ||
    n[67] !== F ||
    n[68] !== b ||
    n[69] !== T ||
    n[70] !== O ||
    n[71] !== E ||
    n[72] !== M ||
    n[73] !== _ ||
    n[74] !== i ||
    n[75] !== C ||
    n[76] !== K ||
    n[77] !== w ||
    n[78] !== m
      ? ((S = (e) => {
          let { icon: t, title: n } = e,
            r = n || L.formatMessage(Se(G));
          return m === `grid`
            ? (0, $.jsx)(re, {
                isDropTarget: k,
                name: r,
                square: !0,
                landscape:
                  F ||
                  me === `granola_workbook` ||
                  me === `granola_presentation` ||
                  me === `granola_whiteboard`,
                actions: M ? null : N,
                reorderAction: b,
                pinAction: M ? null : X,
                selection: E,
                selected: O,
                onSelect: ee,
                selectionActive: M,
                actionIndicator:
                  ce ??
                  (Y
                    ? (0, $.jsx)(l, {
                        className: `text-secondary`,
                        "aria-label": L.formatMessage({
                          id: `space.home.pinnedPage`,
                          defaultMessage: `Pinned`,
                          description: `Status beside a Page title indicating it is pinned in the sidebar`,
                        }),
                      })
                    : void 0),
                href: `/space/${H}`,
                onOpen: J,
                documentHeader: (0, $.jsxs)($.Fragment, {
                  children: [t, (0, $.jsx)(`span`, { className: `truncate`, children: r }), i],
                }),
                children:
                  W == null
                    ? (0, $.jsx)(ye, {
                        pageId: H,
                        title: r,
                        namespace: q,
                        iconSize: 32,
                        iconColor: `file-type`,
                        children: rn,
                      })
                    : (0, $.jsx)(Bt, {
                        iconColor: `file-type`,
                        pageId: H,
                        title: r,
                        documentType: G,
                        namespace: q,
                        symbol: K,
                      }),
              })
            : (0, $.jsx)(ve, {
                isDropTarget: k,
                reserveDisclosureSpace: T,
                name: r,
                tree: w,
                artwork: t,
                source: C,
                favoriteMarker: (0, $.jsxs)($.Fragment, { children: [ce, i] }),
                activity: g,
                sharedBy: _,
                detail: x != null && Fe(x) ? on : void 0,
                actions: M
                  ? void 0
                  : [
                      { key: `pin`, component: X, alwaysVisible: Y },
                      { key: `menu`, component: N },
                    ],
                selection: E,
                selected: O,
                onSelect: ee,
                href: `/space/${H}`,
                onOpen: J,
              });
        }),
        (n[52] = g),
        (n[53] = x),
        (n[54] = G),
        (n[55] = me),
        (n[56] = L),
        (n[57] = k),
        (n[58] = N),
        (n[59] = W),
        (n[60] = ce),
        (n[61] = q),
        (n[62] = ee),
        (n[63] = J),
        (n[64] = H),
        (n[65] = X),
        (n[66] = Y),
        (n[67] = F),
        (n[68] = b),
        (n[69] = T),
        (n[70] = O),
        (n[71] = E),
        (n[72] = M),
        (n[73] = _),
        (n[74] = i),
        (n[75] = C),
        (n[76] = K),
        (n[77] = w),
        (n[78] = m),
        (n[79] = S))
      : (S = n[79]);
    let A;
    return (
      n[80] !== G || n[81] !== q || n[82] !== H || n[83] !== K || n[84] !== v || n[85] !== S
        ? ((A = (0, $.jsx)(ye, {
            iconColor: `file-type`,
            pageId: H,
            documentType: G,
            iconSize: 20,
            namespace: q,
            symbol: K,
            title: v,
            children: S,
          })),
          (n[80] = G),
          (n[81] = q),
          (n[82] = H),
          (n[83] = K),
          (n[84] = v),
          (n[85] = S),
          (n[86] = A))
        : (A = n[86]),
      A
    );
  }
  if (m === `grid`) {
    let e = d.title ?? ``,
      t;
    n[87] !== Pe || n[88] !== G || n[89] !== L || n[90] !== J || n[91] !== d.updated_at || n[92] !== p
      ? ((t = (e) => {
          let { icon: t, title: n } = e;
          return (0, $.jsx)(xe, {
            surface: `raised`,
            ariaLabel: n || L.formatMessage(Se(G)),
            title: n || (0, $.jsx)(s, { ...Se(G) }),
            icon: t,
            isSelected: !1,
            hasInteractiveContent: !0,
            onSelect: J,
            rightText: (0, $.jsx)(`span`, { className: `pointer-events-auto`, children: Pe }),
            secondLine: (0, $.jsxs)(`span`, {
              className: `flex items-center justify-between gap-2`,
              children: [
                (0, $.jsxs)(`span`, {
                  className: `flex min-w-0 items-center gap-2`,
                  children: [
                    p ? (0, $.jsx)(Qe, { spaceId: p.id }) : null,
                    (0, $.jsx)(`span`, {
                      className: `truncate`,
                      children:
                        p?.name ??
                        (0, $.jsx)(s, {
                          id: `space.list.personalLocation`,
                          defaultMessage: `Personal`,
                          description: `Location for a Page outside a Space`,
                        }),
                    }),
                  ],
                }),
                (0, $.jsx)(Be, { dateString: d.updated_at }),
              ],
            }),
          });
        }),
        (n[87] = Pe),
        (n[88] = G),
        (n[89] = L),
        (n[90] = J),
        (n[91] = d.updated_at),
        (n[92] = p),
        (n[93] = t))
      : (t = n[93]);
    let r;
    return (
      n[94] !== d.document_type ||
      n[95] !== d.namespace ||
      n[96] !== d.page_id ||
      n[97] !== d.symbol ||
      n[98] !== e ||
      n[99] !== t
        ? ((r = (0, $.jsx)(
            ye,
            {
              iconColor: `file-type`,
              pageId: d.page_id,
              documentType: d.document_type,
              namespace: d.namespace,
              symbol: d.symbol,
              title: e,
              children: t,
            },
            d.page_id,
          )),
          (n[94] = d.document_type),
          (n[95] = d.namespace),
          (n[96] = d.page_id),
          (n[97] = d.symbol),
          (n[98] = e),
          (n[99] = t),
          (n[100] = r))
        : (r = n[100]),
      r
    );
  }
  let Ie = d.title ?? ``,
    Le;
  n[101] !== B ||
  n[102] !== Pe ||
  n[103] !== G ||
  n[104] !== L ||
  n[105] !== z ||
  n[106] !== R ||
  n[107] !== i ||
  n[108] !== J ||
  n[109] !== d.updated_at ||
  n[110] !== p ||
  n[111] !== Y ||
  n[112] !== I
    ? ((Le = (e) => {
        let { icon: t, title: n } = e;
        return (0, $.jsx)(Tt, {
          ariaLabel: n || L.formatMessage(Se(G)),
          title: n || L.formatMessage(Se(G)),
          icon: t,
          onOpen: J,
          updatedAt: d.updated_at,
          space: p
            ? (0, $.jsxs)(`button`, {
                className: `flex max-w-full cursor-interaction items-center gap-2 text-start hover:text-default`,
                type: `button`,
                "aria-label": L.formatMessage(
                  {
                    id: `space.list.openSpace`,
                    defaultMessage: `Open {name} space`,
                    description: `Open the Space containing this Page. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                  },
                  { name: p.name },
                ),
                onClick: (e) => {
                  if ((e.stopPropagation(), i != null)) {
                    i.onOpenSpace(p);
                    return;
                  }
                  lt(I, R, z, B, p.root_page_id);
                },
                children: [
                  (0, $.jsx)(Qe, { spaceId: p.id }),
                  (0, $.jsx)(`span`, { className: `truncate`, children: p.name }),
                ],
              })
            : (0, $.jsx)(s, {
                id: `space.list.personalLocation`,
                defaultMessage: `Personal`,
                description: `Location for a Page outside a Space`,
              }),
          action: (0, $.jsx)(`span`, {
            className: S(
              !Y &&
                `opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-coarse:opacity-100`,
            ),
            children: Pe,
          }),
        });
      }),
      (n[101] = B),
      (n[102] = Pe),
      (n[103] = G),
      (n[104] = L),
      (n[105] = z),
      (n[106] = R),
      (n[107] = i),
      (n[108] = J),
      (n[109] = d.updated_at),
      (n[110] = p),
      (n[111] = Y),
      (n[112] = I),
      (n[113] = Le))
    : (Le = n[113]);
  let Re;
  return (
    n[114] !== d.document_type ||
    n[115] !== d.namespace ||
    n[116] !== d.page_id ||
    n[117] !== d.symbol ||
    n[118] !== Ie ||
    n[119] !== Le
      ? ((Re = (0, $.jsx)(
          ye,
          {
            iconColor: `file-type`,
            pageId: d.page_id,
            documentType: d.document_type,
            namespace: d.namespace,
            symbol: d.symbol,
            title: Ie,
            children: Le,
          },
          d.page_id,
        )),
        (n[114] = d.document_type),
        (n[115] = d.namespace),
        (n[116] = d.page_id),
        (n[117] = d.symbol),
        (n[118] = Ie),
        (n[119] = Le),
        (n[120] = Re))
      : (Re = n[120]),
    Re
  );
}
function rn(e) {
  let { icon: t } = e;
  return (0, $.jsx)(`span`, {
    className: `relative min-h-0 w-full flex-1`,
    children: (0, $.jsx)(K, { artwork: t }),
  });
}
var an, $, on, sn;
function cn() {
  return (cn = e(() => {
    ((an = k()),
      N(),
      _(),
      f(),
      C(),
      v(),
      O(),
      W(),
      d(),
      m(),
      L(),
      b(),
      ot(),
      yt(),
      _t(),
      Xe(),
      ut(),
      He(),
      ft(),
      dt(),
      A(),
      ht(),
      Ot(),
      De(),
      at(),
      qt(),
      Le(),
      ze(),
      ct(),
      H(),
      Y(),
      $t(),
      st(),
      ($ = M()),
      (on = `—`),
      (sn = w(a, (e, { get: t }) => (e == null ? void 0 : t(gt, e)))));
  }))();
}
export { Ft as a, wt as c, qt as i, Tt as l, cn as n, Pt as o, Bt as r, zt as s, tn as t, Ot as u };
//# sourceMappingURL=page-content-item-f083336f07ba.js.map
