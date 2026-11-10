import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  A6 as i,
  Bst as a,
  CNt as o,
  DB as s,
  FBt as c,
  HFt as l,
  JK as u,
  KH as d,
  LNt as f,
  Lst as p,
  M6 as m,
  MNt as h,
  Mst as g,
  NNt as _,
  NSt as v,
  OB as y,
  ORt as b,
  PBt as x,
  Pit as S,
  Qst as C,
  Rrt as w,
  Rst as T,
  TCt as E,
  TY as D,
  USt as O,
  VSt as k,
  Vrt as A,
  Wnt as j,
  XOt as M,
  XSt as N,
  Y3 as P,
  YK as ee,
  Z3 as F,
  ZSt as I,
  hst as L,
  iCt as R,
  jit as te,
  jst as z,
  kCt as ne,
  kK as re,
  mst as ie,
  nB as B,
  nCt as ae,
  okt as V,
  qrt as oe,
  rB as se,
  tCt as ce,
  tkt as H,
  vA as le,
  yA as ue,
  zst as de,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $br as fe,
  ADn as pe,
  AV as me,
  Air as he,
  BFt as ge,
  BV as _e,
  BW as ve,
  Blt as ye,
  CMr as be,
  CR as xe,
  CRn as Se,
  Cjr as U,
  Cqt as Ce,
  DNr as we,
  DV as Te,
  Dqt as Ee,
  EAr as De,
  EV as Oe,
  F7n as W,
  GLn as ke,
  HW as G,
  Hlr as Ae,
  I7n as je,
  IV as Me,
  Jbr as Ne,
  L7n as K,
  LV as Pe,
  Llt as Fe,
  MOr as q,
  Mir as Ie,
  PDn as Le,
  Qvn as Re,
  SR as ze,
  SRn as Be,
  Ulr as Ve,
  VV as He,
  VW as Ue,
  Vlt as We,
  WRr as Ge,
  WW as Ke,
  XEn as qe,
  Xvn as Je,
  YEn as Ye,
  Zvn as Xe,
  avn as Ze,
  b2 as Qe,
  bAr as $e,
  bIr as et,
  bRn as tt,
  do as nt,
  imr as rt,
  ivn as it,
  jC as at,
  kC as ot,
  nzr as st,
  oon as ct,
  ovn as lt,
  qLn as ut,
  rmr as dt,
  rvn as ft,
  son as pt,
  svn as mt,
  szr as ht,
  uo as gt,
  wLr as _t,
  wNr as vt,
  x2 as yt,
  xIr as bt,
  xMr as xt,
  xjr as St,
  yAr as J,
  yMr as Ct,
  zFt as wt,
  zOr as Tt,
  zRr as Et,
  zlt as Dt,
} from "./app-initial-ad16eaadf81f.js";
import { n as Ot, t as kt } from "./appgen-disabled-tooltip-72287f1924e6.js";
import { a as At, i as jt } from "./query-c97cf6c91f57.js";
import { r as Mt, t as Nt } from "./document-title-149d008a9f01.js";
import { n as Pt, t as Ft } from "./space-search-empty-state-4897042a9bda.js";
import { a as It, i as Lt, n as Rt, o as zt } from "./profile-card-596b3632a9d9.js";
import { n as Bt, t as Vt } from "./Curve-a04a12effa13.js";
import { a as Y, i as Ht, n as Ut, o as Wt } from "./appgen-access-state-messages-dd6b2c460774.js";
import { n as Gt, t as Kt } from "./open-appgen-share-dialog-ccbe887b06fc.js";
import {
  c as qt,
  i as Jt,
  l as Yt,
  n as Xt,
  r as Zt,
  s as Qt,
  t as $t,
} from "./appgen-updated-at-fa039345ab33.js";
import { n as en, t as tn } from "./appgen-view-controls-bda9289fd271.js";
import { n as nn, t as rn } from "./appgen-view-mode-62307ffb4b18.js";
var an, on;
function sn() {
  return (sn = e(() => {
    (I(),
      l(),
      r(),
      et(),
      At(),
      (an = b().int().positive().catch(5)),
      (on = E(C, (e, { scope: t }) => {
        let n = new Map(),
          r = new Map(),
          i = null,
          a = !1;
        function o() {
          if (a || r.size === 0) return;
          let n = an.parse(t.get(bt, `821253728`)?.get(`traffic_graph_batch_size`, 5)),
            i = [...r]
              .sort(([e], [t]) =>
                e.compareDocumentPosition(t) === Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1,
              )
              .slice(0, n);
          a = !0;
          for (let [e] of i) r.delete(e);
          Promise.allSettled(
            i.map(([, n]) =>
              t.query.fetch(jt, {
                includeRequestBreakdown: !0,
                granularity: `daily`,
                projectId: n,
                range: e,
              }),
            ),
          ).then(() => {
            ((a = !1), o());
          });
        }
        return {
          observe(e, t) {
            return (
              (i ??= new IntersectionObserver((e) => {
                for (let t of e) {
                  let e = n.get(t.target);
                  e != null && (t.isIntersecting ? r.set(t.target, e) : r.delete(t.target));
                }
                o();
              })),
              n.set(e, t),
              i.observe(e),
              () => {
                (n.delete(e), r.delete(e), i?.unobserve(e), n.size === 0 && (i?.disconnect(), (i = null)));
              }
            );
          },
        };
      })));
  }))();
}
function cn(e) {
  let t = (0, mn.c)(38),
    { onNavigateToSite: r, projectId: a, projectTitle: o } = e,
    s = n(C),
    c = V(),
    l = O(),
    u = (0, hn.useId)(),
    d = ce(on, `30d`),
    f;
  t[0] === a
    ? (f = t[1])
    : ((f = { includeRequestBreakdown: !0, granularity: `daily`, projectId: a, range: `30d` }),
      (t[0] = a),
      (t[1] = f));
  let p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((p = { enabled: !1 }), (t[2] = p)) : (p = t[2]);
  let { data: h, isError: g } = ae(jt, f, p),
    _;
  t[3] === h
    ? (_ = t[4])
    : ((_ = h?.hasRequestBreakdown
        ? { ...h, summary: { ...h.summary, pageViews: h.traffic.reduce(un, 0) }, traffic: h.traffic.map(ln) }
        : h),
      (t[3] = h),
      (t[4] = _));
  let v = _,
    y;
  if (v != null) {
    let e;
    t[5] === v
      ? (e = t[6])
      : ((e = (0, X.jsx)(`span`, {
          className: `block min-h-0 w-full flex-1`,
          children: (0, X.jsx)(dn, { overview: v }),
        })),
        (t[5] = v),
        (t[6] = e));
    let n = v.summary.pageViews,
      r;
    t[7] !== c || t[8] !== v.summary.pageViews
      ? ((r = c.formatNumber(v.summary.pageViews, { notation: `compact`, maximumFractionDigits: 1 })),
        (t[7] = c),
        (t[8] = v.summary.pageViews),
        (t[9] = r))
      : (r = t[9]);
    let i;
    t[10] !== v.summary.pageViews || t[11] !== r
      ? ((i = (0, X.jsx)(H, {
          id: `appgenPage.traffic.visitsTotal`,
          defaultMessage: `{count, plural, one {{visits} Visit} other {{visits} Visits}}`,
          description: `Small label below a site's graph showing its total page visits over the last 30 days. count is the numeric total used for pluralization; visits is the same total formatted as a compact localized number, such as 1.2K.`,
          values: { count: n, visits: r },
        })),
        (t[10] = v.summary.pageViews),
        (t[11] = r),
        (t[12] = i))
      : (i = t[12]);
    let a;
    t[13] !== i || t[14] !== u
      ? ((a = (0, X.jsx)(`span`, {
          id: u,
          className: `w-full shrink-0 truncate text-start text-xs leading-4 text-secondary tabular-nums select-none`,
          children: i,
        })),
        (t[13] = i),
        (t[14] = u),
        (t[15] = a))
      : (a = t[15]);
    let o;
    (t[16] !== e || t[17] !== a
      ? ((o = (0, X.jsxs)(X.Fragment, { children: [e, a] })), (t[16] = e), (t[17] = a), (t[18] = o))
      : (o = t[18]),
      (y = o));
  } else if (g) {
    let e;
    (t[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(`span`, {
          className: `sr-only`,
          children: (0, X.jsx)(H, {
            id: `appgenAnalytics.overview.error`,
            defaultMessage: `Unable to load analytics`,
            description: `Error shown when the site analytics overview cannot load`,
          }),
        })),
        (t[19] = e))
      : (e = t[19]),
      (y = e));
  } else {
    let e;
    (t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(je, { lines: 1, size: `sm` })), (t[20] = e))
      : (e = t[20]),
      (y = e));
  }
  let b;
  t[21] !== a || t[22] !== d
    ? ((b = (e) => (e == null ? void 0 : d.observe(e, a))), (t[21] = a), (t[22] = d), (t[23] = b))
    : (b = t[23]);
  let x = v == null ? void 0 : u,
    S;
  t[24] !== c || t[25] !== o
    ? ((S = c.formatMessage(
        {
          id: `appgenPage.traffic.openAnalytics`,
          defaultMessage: `Open analytics for {siteTitle}: page views over the past 30 days`,
          description: `Accessible button label for a site owner's graph showing daily page views over the last 30 days. The siteTitle placeholder is the user-provided website title. Selecting the graph opens that site's analytics page.`,
        },
        { siteTitle: o },
      )),
      (t[24] = c),
      (t[25] = o),
      (t[26] = S))
    : (S = t[26]);
  let w;
  t[27] !== l || t[28] !== r || t[29] !== a || t[30] !== s
    ? ((w = () => {
        (Te(s, {
          action: i.CODEX_APPGEN_INTERACTION_ACTION_ANALYTICS_OPENED,
          projectId: a,
          source: m.CODEX_APPGEN_INTERACTION_SOURCE_SITES,
        }),
          (r ?? l)(J(a)));
      }),
      (t[27] = l),
      (t[28] = r),
      (t[29] = a),
      (t[30] = s),
      (t[31] = w))
    : (w = t[31]);
  let T;
  return (
    t[32] !== y || t[33] !== b || t[34] !== x || t[35] !== S || t[36] !== w
      ? ((T = (0, X.jsx)(`button`, {
          ref: b,
          className: `group/traffic pointer-events-auto relative z-10 flex h-14 w-24 shrink-0 cursor-interaction flex-col justify-center gap-1 rounded-md border border-transparent p-1 hover:border-strong focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none [@container_(max-width:520px)]:hidden [@container_(max-width:720px)]:w-16`,
          "aria-describedby": x,
          "aria-label": S,
          type: `button`,
          onClick: w,
          children: y,
        })),
        (t[32] = y),
        (t[33] = b),
        (t[34] = x),
        (t[35] = S),
        (t[36] = w),
        (t[37] = T))
      : (T = t[37]),
    T
  );
}
function ln(e) {
  return { ...e, pageViews: e.requestsByType?.page_load ?? 0 };
}
function un(e, t) {
  return e + (t.requestsByType?.page_load ?? 0);
}
function dn(e) {
  let t = (0, mn.c)(13),
    { overview: n } = e,
    r;
  if (t[0] !== n.endTimeMs || t[1] !== n.startTimeMs || t[2] !== n.traffic) {
    let e;
    t[4] !== n.endTimeMs || t[5] !== n.startTimeMs
      ? ((e = (e) => {
          let { timestampMs: t } = e;
          return t >= n.startTimeMs && t < n.endTimeMs;
        }),
        (t[4] = n.endTimeMs),
        (t[5] = n.startTimeMs),
        (t[6] = e))
      : (e = t[6]);
    let i = n.traffic.filter(e).toSorted(pn),
      a = Math.max(1, ...i.map(fn)),
      o;
    (t[7] !== a || t[8] !== n.endTimeMs || t[9] !== n.startTimeMs
      ? ((o = (e) => {
          let { timestampMs: t, pageViews: r } = e;
          return {
            x: 1 + (94 * (t - n.startTimeMs)) / (n.endTimeMs - n.startTimeMs - 864e5),
            y: 38 - (36 * r) / a,
          };
        }),
        (t[7] = a),
        (t[8] = n.endTimeMs),
        (t[9] = n.startTimeMs),
        (t[10] = o))
      : (o = t[10]),
      (r = i.map(o)),
      (t[0] = n.endTimeMs),
      (t[1] = n.startTimeMs),
      (t[2] = n.traffic),
      (t[3] = r));
  } else r = t[3];
  let i = r,
    a;
  return (
    t[11] === i
      ? (a = t[12])
      : ((a = (0, X.jsx)(`svg`, {
          className: `size-full text-tertiary group-hover/traffic:text-purple group-focus-visible/traffic:text-purple`,
          "aria-hidden": !0,
          focusable: `false`,
          preserveAspectRatio: `none`,
          viewBox: `0 0 96 40`,
          children: (0, X.jsx)(Vt, {
            fill: `none`,
            points: i,
            stroke: `currentColor`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            strokeWidth: 1.5,
            type: `monotoneX`,
          }),
        })),
        (t[11] = i),
        (t[12] = a)),
    a
  );
}
function fn(e) {
  let { pageViews: t } = e;
  return t;
}
function pn(e, t) {
  return e.timestampMs - t.timestampMs;
}
var mn, hn, X;
function gn() {
  return (gn = e(() => {
    ((mn = x()), I(), (hn = c()), M(), v(), Bt(), K(), r(), Oe(), De(), At(), sn(), (X = f()));
  }))();
}
function _n(e) {
  let t = (0, Z.c)(83),
    { collectionNavigation: r, onNavigateToSite: a, renderLayout: o } = e,
    s = n(C),
    { data: c, status: l } = fe(),
    d = (0, Q.useRef)(!1),
    f;
  t[0] === s
    ? (f = t[1])
    : ((f = () => {
        let e = s.get(be).submitCodexAnalyticsEvent;
        d.current || e == null || ((d.current = !0), e({ eventKind: `appgen_my_apps_view` }));
      }),
      (t[0] = s),
      (t[1] = f));
  let p = (0, Q.useEffectEvent)(f),
    h;
  t[2] !== c || t[3] !== l || t[4] !== p
    ? ((h = () => {
        l === `success` && c === !0 && p();
      }),
      (t[2] = c),
      (t[3] = l),
      (t[4] = p),
      (t[5] = h))
    : (h = t[5]);
  let _;
  (t[6] !== c || t[7] !== l ? ((_ = [c, l]), (t[6] = c), (t[7] = l), (t[8] = _)) : (_ = t[8]),
    (0, Q.useEffect)(h, _));
  let v = V(),
    y = (0, Q.useId)(),
    b = R(Ve),
    x = U(`476199071`),
    S = U(`1425956883`),
    [w, E] = N(),
    D = k(),
    O = new URL(r?.href ?? D.pathname + D.search, `https://chatgpt.com`),
    A = r == null ? w : O.searchParams,
    j = (e, t) => {
      if (r == null) E(e, t);
      else {
        let n = e(new URLSearchParams(A));
        r.onNavigate(O.pathname + (n.size > 0 ? `?${n}` : ``), t);
      }
    },
    M = `owned`;
  S && A.get(`view`) === `pinned`
    ? (M = `pinned`)
    : x &&
      (A.get(`view`) === `shared` ? (M = `shared`) : A.get(`view`) !== `owned` && r != null && (M = `all`));
  let [P, F] = (0, Q.useState)(``),
    I = r == null ? P : (A.get(`search`) ?? ``),
    z;
  t[9] !== r || t[10] !== j
    ? ((z = (e) => {
        r == null
          ? F(e)
          : j(
              (t) => {
                let n = new URLSearchParams(t);
                return (e ? n.set(`search`, e) : n.delete(`search`), n);
              },
              { replace: !0 },
            );
      }),
      (t[9] = r),
      (t[10] = j),
      (t[11] = z))
    : (z = t[11]);
  let ne = z,
    { accountId: re, userId: ie } = rt(),
    B = R(nn),
    oe = I.trim().toLowerCase(),
    se = M === `pinned`,
    ce;
  t[12] === se ? (ce = t[13]) : ((ce = { enabled: se }), (t[12] = se), (t[13] = ce));
  let {
      data: le,
      hasNextPage: ue,
      isFetchNextPageError: pe,
      isFetchingNextPage: he,
      isLoading: ge,
      isError: _e,
      fetchNextPage: ve,
      refetch: xe,
    } = ae(Ke, { accountId: re, userId: ie, query: oe }, ce),
    Se = M !== `owned` && M !== `pinned`,
    Ce;
  t[14] === Se
    ? (Ce = t[15])
    : ((Ce = { ...mt, enabled: Se, staleTime: de.THIRTY_SECONDS }), (t[14] = Se), (t[15] = Ce));
  let { data: we, isLoading: De } = g(Ce),
    Oe = x && we?.supports_editable_listing !== !1,
    W = M === `pinned` || Oe ? M : `owned`,
    ke = W === `shared` || W === `all`,
    G = ke && we?.enabled === !0 && we.supports_workspace_listing,
    Ae = ke && De,
    je = W !== `owned` && W !== `pinned` && !G && !Ae,
    Me;
  t[16] === je
    ? (Me = t[17])
    : ((Me = { ...Ze, staleTime: de.FIVE_MINUTES, enabled: je }), (t[16] = je), (t[17] = Me));
  let {
      data: Ne,
      error: K,
      hasNextPage: Pe,
      isFetchNextPageError: q,
      isFetchingNextPage: Ie,
      isLoading: Le,
      isError: Re,
      fetchNextPage: ze,
      refetch: Be,
    } = L(Me),
    He = W !== `shared` && W !== `pinned`,
    We;
  t[18] === He
    ? (We = t[19])
    : ((We = { ...it, enabled: He, staleTime: de.FIVE_MINUTES }), (t[18] = He), (t[19] = We));
  let {
      data: Ge,
      hasNextPage: qe,
      isFetchNextPageError: Je,
      isFetchingNextPage: Ye,
      isLoading: Xe,
      isError: Qe,
      fetchNextPage: $e,
      refetch: et,
    } = L(We),
    {
      data: tt,
      hasNextPage: nt,
      isFetchNextPageError: at,
      isFetchingNextPage: ot,
      isLoading: st,
      isError: ct,
      fetchNextPage: ut,
      refetch: dt,
    } = L({ ...lt(oe), enabled: G, staleTime: de.THIRTY_SECONDS }),
    ft = T(),
    pt;
  t[20] !== r || t[21] !== q || t[22] !== ft || t[23] !== W || t[24] !== j || t[25] !== K || t[26] !== G
    ? ((pt = () => {
        W === `owned` ||
          W === `pinned` ||
          G ||
          q ||
          !(K instanceof te) ||
          K.status !== 400 ||
          (ft.setQueryData(mt.queryKey, Tn),
          j(
            (e) => {
              let t = new URLSearchParams(e);
              return (r == null ? t.delete(`view`) : t.set(`view`, `owned`), t);
            },
            { replace: !0 },
          ));
      }),
      (t[20] = r),
      (t[21] = q),
      (t[22] = ft),
      (t[23] = W),
      (t[24] = j),
      (t[25] = K),
      (t[26] = G),
      (t[27] = pt))
    : (pt = t[27]);
  let ht = (0, Q.useEffectEvent)(pt),
    _t;
  t[28] === ht
    ? (_t = t[29])
    : ((_t = () => {
        ht();
      }),
      (t[28] = ht),
      (t[29] = _t));
  let vt;
  (t[30] !== q || t[31] !== ft || t[32] !== W || t[33] !== K || t[34] !== G
    ? ((vt = [ft, W, G, K, q]),
      (t[30] = q),
      (t[31] = ft),
      (t[32] = W),
      (t[33] = K),
      (t[34] = G),
      (t[35] = vt))
    : (vt = t[35]),
    (0, Q.useEffect)(_t, vt));
  let yt = {
      hasNextPage: ue,
      isFetchNextPageError: pe,
      isFetchingNextPage: he,
      isLoading: ge,
      isError: _e,
      fetchNextPage: ve,
      refetch: xe,
    },
    bt = {
      hasNextPage: Pe,
      isFetchNextPageError: q,
      isFetchingNextPage: Ie,
      isLoading: Le,
      isError: Re,
      fetchNextPage: ze,
      refetch: Be,
    },
    xt = {
      hasNextPage: qe,
      isFetchNextPageError: Je,
      isFetchingNextPage: Ye,
      isLoading: Xe,
      isError: Qe,
      fetchNextPage: $e,
      refetch: et,
    },
    St = G
      ? {
          hasNextPage: nt,
          isFetchNextPageError: at,
          isFetchingNextPage: ot,
          isLoading: st,
          isError: ct,
          fetchNextPage: ut,
          refetch: dt,
        }
      : bt,
    J = { pinned: [yt], all: [xt, St], owned: [xt], shared: [St] }[W],
    Ct = J.some(wn),
    wt = J.some(Cn),
    Tt = J.some(Sn),
    Et = Ae || J.some(xn),
    Dt = (e) => {
      let t = e !== void 0 && e;
      for (let e of J)
        e.hasNextPage && !e.isFetchingNextPage && e.isFetchNextPageError === t && e.fetchNextPage();
    },
    Ot = Ee(),
    kt = (e) =>
      e.title.toLowerCase().includes(oe) ||
      e.slug.toLowerCase().includes(oe) ||
      e.description?.toLowerCase().includes(oe) === !0,
    At = G ? tt : Ne,
    jt = W === `owned` ? Ge : At;
  W === `pinned`
    ? (jt = le)
    : W === `all` &&
      (jt =
        Ge == null && At == null
          ? void 0
          : (0, qn.default)([...(Ge?.filter(kt).map(bn) ?? []), ...(At ?? [])], `id`).sort(yn));
  let Mt =
      jt?.filter(
        (e) => (W !== `shared` || G || e.current_user_role !== `owner`) && (W === `pinned` || G || kt(e)),
      ) ?? null,
    Pt = J.some(vn),
    Ft = v.formatMessage({
      id: `appgenPage.sites.search`,
      defaultMessage: `Search sites`,
      description: `Accessible label and placeholder for searching Sites`,
    }),
    It;
  t[36] !== r?.state || t[37] !== s || t[38] !== Ot
    ? ((It = () => {
        (Te(s, {
          action: i.CODEX_APPGEN_INTERACTION_ACTION_CREATE_SITE_CLICKED,
          source: m.CODEX_APPGEN_INTERACTION_SOURCE_SITES,
        }),
          Ue(s, Ot, { type: `create` }, r?.state));
      }),
      (t[36] = r?.state),
      (t[37] = s),
      (t[38] = Ot),
      (t[39] = It))
    : (It = t[39]);
  let Lt = It,
    Rt;
  t[40] !== r?.state || t[41] !== s || t[42] !== Ot
    ? ((Rt = (e, t, n) => {
        Ue(
          s,
          Ot,
          {
            type: n === void 0 ? `edit` : n,
            liveUrl: t,
            projectId: e.id,
            projectTitle: e.title,
            latestEditContext: e.latest_edit_context,
          },
          r?.state,
        );
      }),
      (t[40] = r?.state),
      (t[41] = s),
      (t[42] = Ot),
      (t[43] = Rt))
    : (Rt = t[43]);
  let zt = Rt,
    Bt;
  t[44] === J
    ? (Bt = t[45])
    : ((Bt = () => {
        for (let e of J) e.refetch();
      }),
      (t[44] = J),
      (t[45] = Bt));
  let Vt = Bt,
    Y = Oe || S,
    Ht;
  t[46] !== r ||
  t[47] !== Oe ||
  t[48] !== v ||
  t[49] !== y ||
  t[50] !== S ||
  t[51] !== W ||
  t[52] !== j ||
  t[53] !== Y
    ? ((Ht = Y
        ? (0, $.jsx)(gt, {
            ariaLabel: v.formatMessage({
              id: `appgenPage.views.label`,
              defaultMessage: `Site views`,
              description: `Accessible label for switching between owned, shared, and pinned sites`,
            }),
            tabs: [
              ...(r == null || !Oe
                ? []
                : [
                    {
                      key: `all`,
                      panelId: `${y}-all`,
                      name: (0, $.jsx)(H, {
                        id: `appgenPage.ownership.all`,
                        defaultMessage: `All`,
                        description: `Tab listing owned sites and sites shared with the current user`,
                      }),
                    },
                  ]),
              ...(S
                ? [
                    {
                      key: `pinned`,
                      panelId: `${y}-pinned`,
                      name: (0, $.jsx)(H, {
                        id: `appgenPage.pins.tab`,
                        defaultMessage: `Pinned`,
                        description: `Tab listing the current user's pinned sites`,
                      }),
                    },
                  ]
                : []),
              {
                key: `owned`,
                panelId: `${y}-owned`,
                name:
                  r == null
                    ? (0, $.jsx)(H, {
                        id: `appgenPage.ownership.owned`,
                        defaultMessage: `Owned by you`,
                        description: `Tab listing sites owned by the current user`,
                      })
                    : (0, $.jsx)(H, {
                        id: `appgenPage.ownership.yours`,
                        defaultMessage: `Your sites`,
                        description: `Tab listing sites owned by the current user`,
                      }),
              },
              ...(Oe
                ? [
                    {
                      key: `shared`,
                      panelId: `${y}-shared`,
                      name: (0, $.jsx)(H, {
                        id: `appgenPage.ownership.shared`,
                        defaultMessage: `Shared with you`,
                        description: `Tab listing sites shared with the current user`,
                      }),
                    },
                  ]
                : []),
            ],
            selectedKey: W,
            variant: `browse`,
            scrollable: !0,
            onSelect: (e) => {
              (F(``),
                j((t) => {
                  let n = new URLSearchParams(t);
                  return (
                    n.delete(`search`),
                    e === `shared` || e === `pinned` || (r != null && e === `owned`)
                      ? n.set(`view`, e)
                      : n.delete(`view`),
                    n
                  );
                }));
            },
          })
        : void 0),
      (t[46] = r),
      (t[47] = Oe),
      (t[48] = v),
      (t[49] = y),
      (t[50] = S),
      (t[51] = W),
      (t[52] = j),
      (t[53] = Y),
      (t[54] = Ht))
    : (Ht = t[54]);
  let Ut = Ht,
    Wt;
  t[55] === v
    ? (Wt = t[56])
    : ((Wt = v.formatMessage({
        id: `appgenPage.title`,
        defaultMessage: `Sites`,
        description: `Header title for the Sites page`,
      })),
      (t[55] = v),
      (t[56] = Wt));
  let Gt;
  t[57] === Wt ? (Gt = t[58]) : ((Gt = (0, $.jsx)(Nt, { title: Wt })), (t[57] = Wt), (t[58] = Gt));
  let Kt, qt;
  t[59] === Dt
    ? ((Kt = t[60]), (qt = t[61]))
    : ((Kt = () => {
        Dt();
      }),
      (qt = () => Dt(!0)),
      (t[59] = Dt),
      (t[60] = Kt),
      (t[61] = qt));
  let Jt = (0, $.jsxs)(`div`, {
      id: Y ? `${y}-${W}` : void 0,
      "aria-labelledby": Y ? `${y}-${W}-tab` : void 0,
      role: Y ? `tabpanel` : void 0,
      tabIndex: Y ? 0 : void 0,
      className: `mx-auto flex min-h-full w-full flex-1 flex-col bg-surface`,
      children: [
        Gt,
        (0, $.jsx)(En, {
          onNavigateToSite: a,
          pinned: W === `pinned`,
          hasNextPage: Ct,
          isFetchNextPageError: wt,
          isFetchingNextPage: Tt,
          isLoading: Et,
          projects: Pt && !Mt?.length ? null : Mt,
          emptyStateShared: W === `shared`,
          searchQuery: I.trim(),
          shared: W !== `owned`,
          viewMode: B,
          onCreate: Lt,
          onEdit: zt,
          onLoadNextPage: Kt,
          onRetryNextPage: qt,
          onRetry: Vt,
        }),
        Pt && Mt?.length ? (0, $.jsx)(Mn, { onRetry: Vt }) : null,
      ],
    }),
    Yt;
  t[62] !== s || t[63] !== B
    ? ((Yt = (e) => {
        e !== B && (me(s, e), s.set(nn, e));
      }),
      (t[62] = s),
      (t[63] = B),
      (t[64] = Yt))
    : (Yt = t[64]);
  let Xt = Yt;
  if (o != null)
    return o({
      tabs: Ut,
      children: Jt,
      searchQuery: I,
      onSearchQueryChange: ne,
      searchPlaceholder: Ft,
      searchMaxLength: G || W === `pinned` ? 200 : void 0,
      viewMode: B,
      onViewModeChange: Xt,
    });
  let Zt;
  t[65] === Symbol.for(`react.memo_cache_sentinel`) ? ((Zt = { 16: u, 20: ee }), (t[65] = Zt)) : (Zt = t[65]);
  let Qt = b ? `browser:max-md:sr-only` : void 0,
    $t;
  t[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($t = (0, $.jsx)(H, {
        id: `appgenPage.createSite`,
        defaultMessage: `Create Site`,
        description: `Button label for starting a new site from the Sites page`,
      })),
      (t[66] = $t))
    : ($t = t[66]);
  let en;
  t[67] === Qt
    ? (en = t[68])
    : ((en = (0, $.jsx)(`span`, { className: Qt, children: $t })), (t[67] = Qt), (t[68] = en));
  let rn;
  t[69] !== Lt || t[70] !== b || t[71] !== en
    ? ((rn = (0, $.jsx)(ye, { color: `primary`, icon: Zt, onClick: Lt, squareOnMobile: b, children: en })),
      (t[69] = Lt),
      (t[70] = b),
      (t[71] = en),
      (t[72] = rn))
    : (rn = t[72]);
  let an, on;
  t[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((an = (0, $.jsx)(H, {
        id: `appgenPage.title`,
        defaultMessage: `Sites`,
        description: `Header title for the Sites page`,
      })),
      (on = (0, $.jsx)(H, {
        id: `codexAppgenAnnouncementModal.title`,
        defaultMessage: `Turn your ideas into live websites`,
        description: `Title for the Sites announcement modal`,
      })),
      (t[73] = an),
      (t[74] = on))
    : ((an = t[73]), (on = t[74]));
  let sn = G || W === `pinned` ? 200 : void 0,
    cn;
  t[75] !== Ft || t[76] !== I || t[77] !== ne || t[78] !== sn
    ? ((cn = {
        id: `appgen-site-search`,
        autoFocus: !1,
        variant: `toolbar-compact`,
        label: Ft,
        maxLength: sn,
        onSearchQueryChange: ne,
        placeholder: Ft,
        searchQuery: I,
      }),
      (t[75] = Ft),
      (t[76] = I),
      (t[77] = ne),
      (t[78] = sn),
      (t[79] = cn))
    : (cn = t[79]);
  let ln;
  return (
    t[80] !== Xt || t[81] !== B
      ? ((ln = (0, $.jsx)(tn, { viewMode: B, onViewModeChange: Xt })),
        (t[80] = Xt),
        (t[81] = B),
        (t[82] = ln))
      : (ln = t[82]),
    (0, $.jsx)(`div`, {
      className: `flex h-full min-h-0 flex-col bg-surface`,
      children: (0, $.jsx)(Fe, {
        animateContentLayout: !1,
        collapseHeaderOnScroll: !0,
        expandSearchWhenWrapped: !0,
        contentClassName: `bg-surface`,
        contentWidth: `extraWide`,
        headerPlacement: `sticky`,
        headerVariant: `compact`,
        headerAction: rn,
        stickyControls: Ut,
        title: an,
        subtitle: on,
        search: cn,
        searchToolbar: ln,
        children: Jt,
      }),
    })
  );
}
function vn(e) {
  return e.isError && !e.isFetchNextPageError;
}
function yn(e, t) {
  return Date.parse(t.updated_at) - Date.parse(e.updated_at);
}
function bn(e) {
  return { ...e, current_user_role: `owner` };
}
function xn(e) {
  return e.isLoading;
}
function Sn(e) {
  return e.isFetchingNextPage;
}
function Cn(e) {
  return e.isFetchNextPageError;
}
function wn(e) {
  return e.hasNextPage && !e.isFetchNextPageError;
}
function Tn(e) {
  return e == null ? e : { ...e, supports_editable_listing: !1 };
}
function En(e) {
  let t = (0, Z.c)(27),
    {
      emptyStateShared: n,
      hasNextPage: r,
      isFetchNextPageError: i,
      isFetchingNextPage: a,
      isLoading: o,
      onCreate: s,
      onEdit: c,
      onNavigateToSite: l,
      onLoadNextPage: u,
      onRetryNextPage: d,
      onRetry: f,
      pinned: p,
      projects: m,
      searchQuery: h,
      shared: g,
      viewMode: _,
    } = e,
    v = d === void 0 ? u : d,
    y = p !== void 0 && p;
  if (o) {
    let e;
    return (
      t[0] !== g || t[1] !== _
        ? ((e = (0, $.jsx)(Dn, { shared: g, viewMode: _ })), (t[0] = g), (t[1] = _), (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (m == null) {
    let e;
    return (t[3] === f ? (e = t[4]) : ((e = (0, $.jsx)(Mn, { onRetry: f })), (t[3] = f), (t[4] = e)), e);
  }
  if (m.length === 0 && !r && !i) {
    let e;
    return (
      t[5] !== n || t[6] !== s || t[7] !== y || t[8] !== h || t[9] !== g
        ? ((e =
            h.length > 0
              ? (0, $.jsx)(Ft, { query: h })
              : (0, $.jsx)(jn, { pinned: y, onCreate: s, shared: n ?? g })),
          (t[5] = n),
          (t[6] = s),
          (t[7] = y),
          (t[8] = h),
          (t[9] = g),
          (t[10] = e))
        : (e = t[10]),
      e
    );
  }
  let b;
  t[11] !== r ||
  t[12] !== a ||
  t[13] !== c ||
  t[14] !== u ||
  t[15] !== l ||
  t[16] !== m ||
  t[17] !== g ||
  t[18] !== _
    ? ((b = (0, $.jsx)(Nn, {
        projects: m,
        hasNextPage: r,
        isFetchingNextPage: a,
        onEdit: c,
        onNavigateToSite: l,
        onLoadNextPage: u,
        shared: g,
        viewMode: _,
      })),
      (t[11] = r),
      (t[12] = a),
      (t[13] = c),
      (t[14] = u),
      (t[15] = l),
      (t[16] = m),
      (t[17] = g),
      (t[18] = _),
      (t[19] = b))
    : (b = t[19]);
  let x;
  t[20] !== i || t[21] !== a || t[22] !== v
    ? ((x = i
        ? (0, $.jsxs)(`div`, {
            className: `flex items-center justify-center gap-3 py-6 text-sm text-secondary`,
            role: `alert`,
            children: [
              (0, $.jsx)(H, {
                id: `appgenPage.pagination.error`,
                defaultMessage: `Unable to load more sites`,
                description: `Error below the Sites list when a later page fails to load and the list may be incomplete`,
              }),
              (0, $.jsx)(P, {
                color: `outline`,
                size: `toolbar`,
                loading: a,
                onClick: v,
                children: (0, $.jsx)(H, {
                  id: `appgenPage.pagination.retry`,
                  defaultMessage: `Retry`,
                  description: `Button to retry loading the failed next page of Sites without reloading already loaded sites`,
                }),
              }),
            ],
          })
        : null),
      (t[20] = i),
      (t[21] = a),
      (t[22] = v),
      (t[23] = x))
    : (x = t[23]);
  let S;
  return (
    t[24] !== b || t[25] !== x
      ? ((S = (0, $.jsxs)($.Fragment, { children: [b, x] })), (t[24] = b), (t[25] = x), (t[26] = S))
      : (S = t[26]),
    S
  );
}
function Dn(e) {
  let t = (0, Z.c)(12),
    { shared: n, viewMode: r } = e,
    i = U(`262557526`),
    a = U(`60299493`),
    o = (0, Q.useId)(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(H, {
        id: `appgenPage.loading`,
        defaultMessage: `Loading sites`,
        description: `Accessible status while the Sites page is loading`,
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === o
    ? (c = t[2])
    : ((c = (0, $.jsx)(`h2`, { id: o, className: `sr-only`, children: s })), (t[1] = o), (t[2] = c));
  let l;
  t[3] !== i || t[4] !== n || t[5] !== a || t[6] !== r
    ? ((l =
        r === `grid`
          ? (0, $.jsx)(`div`, {
              className: `grid grid-cols-1 gap-6 pt-4 @md:grid-cols-2 @2xl:grid-cols-3 @5xl:grid-cols-4`,
              children: Array.from({ length: 6 }, On),
            })
          : (0, $.jsx)(`div`, {
              className: `@container`,
              children: (0, $.jsxs)(`div`, {
                className: h(`grid`, Rn(n, i && a)),
                children: [
                  (0, $.jsx)(zn, { shared: n }),
                  Array.from({ length: 7 }, (e, t) => (0, $.jsx)(An, { shared: n }, t)),
                ],
              }),
            })),
      (t[3] = i),
      (t[4] = n),
      (t[5] = a),
      (t[6] = r),
      (t[7] = l))
    : (l = t[7]);
  let u;
  return (
    t[8] !== o || t[9] !== c || t[10] !== l
      ? ((u = (0, $.jsxs)(`section`, {
          "aria-busy": `true`,
          "aria-labelledby": o,
          className: `@container pb-3`,
          "data-testid": `sites-loading-skeleton`,
          role: `status`,
          children: [c, l],
        })),
        (t[8] = o),
        (t[9] = c),
        (t[10] = l),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
function On(e, t) {
  return (0, $.jsx)(kn, {}, t);
}
function kn() {
  let e = (0, Z.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, $.jsx)(W, {
        className: `min-h-0 w-full flex-1 rounded-none`,
        size: `fill`,
        variant: `chatgpt-project`,
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsxs)(`div`, {
          "aria-hidden": !0,
          className: `flex h-64 flex-col overflow-hidden rounded-2xl border border-subtle bg-surface-card`,
          children: [
            t,
            (0, $.jsxs)(`div`, {
              className: `flex h-16 shrink-0 items-center justify-between border-t border-subtle px-3`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `min-w-0 flex-1`,
                  children: [
                    (0, $.jsx)(W, { className: `w-28 max-w-[75%]`, size: `sm`, variant: `chatgpt-project` }),
                    (0, $.jsx)(W, {
                      className: `mt-2 w-36 max-w-[90%]`,
                      size: `sm`,
                      variant: `chatgpt-project`,
                    }),
                  ],
                }),
                (0, $.jsx)(W, {
                  className: `ms-3 size-6 shrink-0`,
                  size: `fill`,
                  variant: `chatgpt-project`,
                }),
              ],
            }),
          ],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
function An(e) {
  let t = (0, Z.c)(12),
    { shared: n } = e,
    r = U(`262557526`),
    i = U(`60299493`),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(W, { className: `h-[50px] w-20 shrink-0`, size: `fill`, variant: `chatgpt-project` })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-4`,
        children: [
          a,
          (0, $.jsxs)(`div`, {
            className: `min-w-0 flex-1`,
            children: [
              (0, $.jsx)(W, { className: `w-44 max-w-[58%]`, size: `sm`, variant: `chatgpt-project` }),
              (0, $.jsx)(W, { className: `mt-2 w-24`, size: `sm`, variant: `chatgpt-project` }),
            ],
          }),
        ],
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] === n
    ? (s = t[3])
    : ((s = n
        ? (0, $.jsxs)(`div`, {
            className: `hidden min-w-0 items-center gap-2 ps-4 [@container_(min-width:521px)]:flex`,
            children: [
              (0, $.jsx)(W, { className: `size-5 shrink-0`, size: `fill`, variant: `chatgpt-project` }),
              (0, $.jsx)(W, { className: `w-20`, size: `sm`, variant: `chatgpt-project` }),
            ],
          })
        : null),
      (t[2] = n),
      (t[3] = s));
  let c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(`div`, {
        className: `hidden min-w-0 ps-4 [@container_(min-width:521px)]:block`,
        children: (0, $.jsx)(W, { className: `w-20`, size: `sm`, variant: `chatgpt-project` }),
      })),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] !== r || t[6] !== i
    ? ((l =
        r && i
          ? (0, $.jsx)(`div`, {
              className: `hidden min-w-0 ps-4 [@container_(min-width:521px)]:block`,
              children: (0, $.jsx)(W, { className: `w-20`, size: `sm`, variant: `chatgpt-project` }),
            })
          : null),
      (t[5] = r),
      (t[6] = i),
      (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsxs)(qt, {
        children: [
          (0, $.jsx)(W, { className: `h-9 w-[84px]`, size: `fill`, variant: `chatgpt-project` }),
          (0, $.jsx)(W, { className: `size-9`, size: `fill`, variant: `chatgpt-project` }),
        ],
      })),
      (t[8] = u))
    : (u = t[8]);
  let d;
  return (
    t[9] !== s || t[10] !== l
      ? ((d = (0, $.jsxs)(`div`, {
          "aria-hidden": !0,
          className: `col-span-full grid min-h-[82px] grid-cols-subgrid items-center px-4 py-4`,
          children: [o, s, c, l, u],
        })),
        (t[9] = s),
        (t[10] = l),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
function jn(e) {
  let t = (0, Z.c)(14),
    { onCreate: n, pinned: r, shared: i } = e,
    a = r !== void 0 && r,
    o = i !== void 0 && i,
    c,
    l;
  if (a) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(H, {
          id: `appgenPage.pins.empty.title`,
          defaultMessage: `No pinned sites yet`,
          description: `Empty state title when the user has not pinned any sites`,
        })),
        (t[0] = e))
      : (e = t[0]),
      (c = e));
    let n;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(H, {
          id: `appgenPage.pins.empty.description`,
          defaultMessage: `Choose “Pin” from a site's menu to find it here`,
          description: `Instructions for adding sites to the empty Pinned tab`,
        })),
        (t[1] = n))
      : (n = t[1]),
      (l = n));
  } else if (o) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(H, {
          id: `appgenPage.shared.empty.title`,
          defaultMessage: `No sites shared with you`,
          description: `Empty state title for Sites shared with the current user`,
        })),
        (t[2] = e))
      : (e = t[2]),
      (c = e));
  } else {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(H, {
          id: `appgenPage.empty.title`,
          defaultMessage: `No sites yet`,
          description: `Empty state title for the Sites page`,
        })),
        (t[3] = e))
      : (e = t[3]),
      (c = e));
    let n;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(H, {
          id: `appgenPage.empty.description`,
          defaultMessage: `Build websites and apps with databases and sign-in—try “Build a team dashboard” or “Create an event signup page”`,
          description: `Explanation shown to a first-time Sites user: they can create websites and applications with databases and authentication by asking for a team dashboard or event signup page`,
        })),
        (t[4] = n))
      : (n = t[4]),
      (l = n));
  }
  let u;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(`span`, {
        className: `flex size-12 shrink-0 items-center justify-center rounded-xl bg-background-secondary-soft`,
        children: (0, $.jsx)(s, { asset: ue }),
      })),
      (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] !== n || t[7] !== a || t[8] !== o
    ? ((d =
        o || a
          ? void 0
          : (0, $.jsx)(P, {
              color: `primary`,
              size: `toolbar`,
              onClick: n,
              children: (0, $.jsx)(H, {
                id: `appgenPage.empty.create`,
                defaultMessage: `Create new site`,
                description: `Button label for creating a new site from the empty state`,
              }),
            })),
      (t[6] = n),
      (t[7] = a),
      (t[8] = o),
      (t[9] = d))
    : (d = t[9]);
  let f;
  return (
    t[10] !== l || t[11] !== d || t[12] !== c
      ? ((f = (0, $.jsx)(Ye, {
          className: `max-w-lg self-center text-balance select-none`,
          layout: `page`,
          spacing: `default`,
          illustration: u,
          title: c,
          description: l,
          actions: d,
        })),
        (t[10] = l),
        (t[11] = d),
        (t[12] = c),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
function Mn(e) {
  let t = (0, Z.c)(4),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(H, {
        id: `appgenPage.error.title`,
        defaultMessage: `Unable to load sites`,
        description: `Error state title for the Sites page`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(H, {
        id: `appgenPage.error.retry`,
        defaultMessage: `Retry`,
        description: `Button label in the Sites error state that retries loading the user's Sites list`,
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, $.jsx)(Ye, {
          layout: `browse`,
          title: r,
          actions: (0, $.jsx)(P, { color: `primary`, size: `toolbar`, onClick: n, children: i }),
        })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
function Nn(e) {
  let t = (0, Z.c)(57),
    {
      hasNextPage: n,
      isFetchingNextPage: r,
      onEdit: i,
      onNavigateToSite: a,
      onLoadNextPage: o,
      projects: s,
      shared: c,
      viewMode: l,
    } = e,
    u = U(`262557526`),
    d = U(`60299493`),
    f;
  if (t[0] !== s || t[1] !== c) {
    let e;
    (t[3] === c ? (e = t[4]) : ((e = (e) => !c || e.current_user_role === `owner`), (t[3] = c), (t[4] = e)),
      (f = s.filter(e).map(In)),
      (t[0] = s),
      (t[1] = c),
      (t[2] = f));
  } else f = t[2];
  let p = f,
    m = p.length > 0,
    g;
  t[5] === m ? (g = t[6]) : ((g = { enabled: m }), (t[5] = m), (t[6] = g));
  let { data: _ } = ae(ot, p, g),
    v = p.length > 0,
    y;
  t[7] === v ? (y = t[8]) : ((y = { enabled: v }), (t[7] = v), (t[8] = y));
  let { data: b } = R(vt, y),
    x;
  t[9] === b?.items ? (x = t[10]) : ((x = new Set(b?.items.map(Fn))), (t[9] = b?.items), (t[10] = x));
  let S = x,
    C;
  t[11] !== _ || t[12] !== S
    ? ((C = new Set(_?.filter((e) => e.automation_ids.some((e) => S.has(e))).map(Pn))),
      (t[11] = _),
      (t[12] = S),
      (t[13] = C))
    : (C = t[13]);
  let w = C,
    T,
    E;
  if (t[14] !== u || t[15] !== c || t[16] !== d || t[17] !== l) {
    let e =
        l === `grid` ? `grid-cols-1 gap-6 @md:grid-cols-2 @2xl:grid-cols-3 @5xl:grid-cols-4` : Rn(c, u && d),
      n = l === `grid` && `pt-4`;
    (t[20] === n ? (E = t[21]) : ((E = h(`@container pb-3`, n)), (t[20] = n), (t[21] = E)),
      (T = h(`grid`, e)),
      (t[14] = u),
      (t[15] = c),
      (t[16] = d),
      (t[17] = l),
      (t[18] = T),
      (t[19] = E));
  } else ((T = t[18]), (E = t[19]));
  let D = l === `grid` ? `sites-grid` : `sites-table`,
    O;
  t[22] !== c || t[23] !== l
    ? ((O = l === `list` ? (0, $.jsx)(zn, { shared: c }) : null), (t[22] = c), (t[23] = l), (t[24] = O))
    : (O = t[24]);
  let k;
  if (t[25] !== w || t[26] !== i || t[27] !== a || t[28] !== s || t[29] !== c || t[30] !== l) {
    let e;
    (t[32] !== w || t[33] !== i || t[34] !== a || t[35] !== c || t[36] !== l
      ? ((e = (e) =>
          (0, $.jsx)(
            Bn,
            {
              project: e,
              hasAutomations: (!c || e.current_user_role === `owner`) && w.has(e.id),
              shared: c,
              onEdit: i,
              onNavigateToSite: a,
              viewMode: l,
            },
            e.id,
          )),
        (t[32] = w),
        (t[33] = i),
        (t[34] = a),
        (t[35] = c),
        (t[36] = l),
        (t[37] = e))
      : (e = t[37]),
      (k = s.map(e)),
      (t[25] = w),
      (t[26] = i),
      (t[27] = a),
      (t[28] = s),
      (t[29] = c),
      (t[30] = l),
      (t[31] = k));
  } else k = t[31];
  let A;
  t[38] !== D || t[39] !== O || t[40] !== k || t[41] !== null || t[42] !== T
    ? ((A = (0, $.jsxs)(`div`, { className: T, "data-testid": D, children: [O, k, null] })),
      (t[38] = D),
      (t[39] = O),
      (t[40] = k),
      (t[41] = null),
      (t[42] = T),
      (t[43] = A))
    : (A = t[43]);
  let j;
  t[44] !== r || t[45] !== c || t[46] !== l
    ? ((j = l === `list` && r ? (0, $.jsx)(Ln, { shared: c, viewMode: l }) : null),
      (t[44] = r),
      (t[45] = c),
      (t[46] = l),
      (t[47] = j))
    : (j = t[47]);
  let M;
  t[48] !== n || t[49] !== r || t[50] !== o || t[51] !== j
    ? ((M = (0, $.jsx)(Qe, {
        browserLoadingPlaceholder: j,
        hasNextPage: n,
        isFetchingNextPage: r,
        onLoadNextPage: o,
      })),
      (t[48] = n),
      (t[49] = r),
      (t[50] = o),
      (t[51] = j),
      (t[52] = M))
    : (M = t[52]);
  let N;
  return (
    t[53] !== A || t[54] !== M || t[55] !== E
      ? ((N = (0, $.jsxs)(`div`, { className: E, children: [A, M] })),
        (t[53] = A),
        (t[54] = M),
        (t[55] = E),
        (t[56] = N))
      : (N = t[56]),
    N
  );
}
function Pn(e) {
  return e.project_id;
}
function Fn(e) {
  let { automation: t } = e;
  return t.id;
}
function In(e) {
  return e.id;
}
function Ln(e) {
  let t = (0, Z.c)(6),
    { shared: n, viewMode: r } = e,
    i = U(`262557526`),
    a = U(`60299493`),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(`span`, {
        className: `sr-only`,
        children: (0, $.jsx)(H, {
          id: `appgenPage.loadingMore`,
          defaultMessage: `Loading more sites`,
          description: `Accessible status while another page of Sites is loading`,
        }),
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  return (
    t[1] !== i || t[2] !== n || t[3] !== a || t[4] !== r
      ? ((s = (0, $.jsxs)(`div`, {
          className: `w-full`,
          "data-testid": `sites-pagination-loading`,
          role: `status`,
          children: [
            o,
            r === `grid`
              ? (0, $.jsx)(kn, {})
              : (0, $.jsx)(`div`, {
                  className: h(`grid`, Rn(n, i && a)),
                  children: (0, $.jsx)(An, { shared: n }),
                }),
          ],
        })),
        (t[1] = i),
        (t[2] = n),
        (t[3] = a),
        (t[4] = r),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
function Rn(e, t) {
  return t
    ? e
      ? `grid-cols-[minmax(0,1fr)_minmax(120px,160px)_minmax(120px,160px)_minmax(120px,160px)_auto] [@container_(max-width:720px)]:grid-cols-[minmax(0,1fr)_auto_auto_minmax(120px,160px)_auto] [@container_(max-width:520px)]:grid-cols-[minmax(0,1fr)_auto]`
      : `grid-cols-[minmax(0,1fr)_minmax(120px,160px)_minmax(120px,160px)_auto] [@container_(max-width:520px)]:grid-cols-[minmax(0,1fr)_auto]`
    : e
      ? `grid-cols-[minmax(0,1fr)_minmax(120px,160px)_minmax(120px,160px)_auto] [@container_(max-width:720px)]:grid-cols-[minmax(0,1fr)_auto_auto_auto] [@container_(max-width:520px)]:grid-cols-[minmax(0,1fr)_auto]`
      : `grid-cols-[minmax(0,1fr)_minmax(120px,160px)_auto] [@container_(max-width:520px)]:grid-cols-[minmax(0,1fr)_auto]`;
}
function zn(e) {
  let t = (0, Z.c)(10),
    { shared: n } = e,
    r = U(`262557526`),
    i = U(`60299493`),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(`div`, {
        className: `flex min-w-0 items-center gap-4`,
        children: (0, $.jsx)(`span`, {
          className: `min-w-0 flex-1`,
          children: (0, $.jsx)(H, {
            id: `appgenPage.list.site`,
            defaultMessage: `Site`,
            description: `Column header for a site in the Sites list`,
          }),
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === n
    ? (o = t[2])
    : ((o = n
        ? (0, $.jsx)(`span`, {
            className: `ps-4 [@container_(max-width:520px)]:sr-only`,
            children: (0, $.jsx)(H, {
              id: `appgenPage.list.owner`,
              defaultMessage: `Owner`,
              description: `Column header for the owner of a shared site`,
            }),
          })
        : null),
      (t[1] = n),
      (t[2] = o));
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(`span`, {
        className: `ps-4 [@container_(max-width:520px)]:sr-only`,
        children: (0, $.jsx)(H, {
          id: `appgenPage.list.sharedWith`,
          defaultMessage: `Shared with`,
          description: `Column header for who can access a site in the Sites list`,
        }),
      })),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] !== r || t[5] !== i
    ? ((c =
        r && i
          ? (0, $.jsx)(`span`, {
              className: `ps-4 select-none [@container_(max-width:520px)]:hidden`,
              children: (0, $.jsx)(H, {
                id: `appgenPage.list.pageViews`,
                defaultMessage: `Visits (30d)`,
                description: `Column header above compact graphs and totals showing page views for each site over the past 30 days in the Sites list. 30d means 30 days.`,
              }),
            })
          : null),
      (t[4] = r),
      (t[5] = i),
      (t[6] = c))
    : (c = t[6]);
  let l;
  return (
    t[7] !== o || t[8] !== c
      ? ((l = (0, $.jsxs)(`div`, {
          className: `col-span-full grid h-10.5 grid-cols-subgrid items-center border-b border-subtle px-4 text-sm leading-5 text-secondary select-none [&:has(+_[data-appgen-row]:hover)]:border-transparent`,
          children: [a, o, s, c],
        })),
        (t[7] = o),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
function Bn(e) {
  let t = (0, Z.c)(55),
    { hasAutomations: r, onEdit: a, onNavigateToSite: o, project: s, shared: c, viewMode: l } = e,
    u = n(q),
    d = V(),
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = { mounted: !1 }), (t[0] = f)) : (f = t[0]);
  let p = (0, Q.useRef)(f),
    h;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = () => {
        let e = { mounted: !0 };
        return (
          (p.current = e),
          () => {
            ((e.mounted = !1), e.closeExternalOpen?.());
          }
        );
      }),
      (t[1] = h))
    : (h = t[1]);
  let g;
  (t[2] !== s.id || t[3] !== u ? ((g = [u, s.id]), (t[2] = s.id), (t[3] = u), (t[4] = g)) : (g = t[4]),
    (0, Q.useEffect)(h, g));
  let _ = s.status === `suspended`,
    v = _ ? null : s.live_url,
    y = c ? s.current_user_role === `owner` : s.current_user_role !== `editor`,
    b = y || s.current_user_role === `editor`,
    x = U(`1498265771`) && o != null && b && v != null,
    S;
  t[5] !== d || t[6] !== v || t[7] !== o || t[8] !== s.id || t[9] !== s.title || t[10] !== u || t[11] !== l
    ? ((S = async (e) => {
        if (v == null) return;
        let t = u.get(he),
          n = u.get(Et),
          r = u.get(Le.activeTab$)?.tabId,
          i = p.current,
          a = u.get(Xe),
          c = Symbol(),
          f = (e) => {
            let a = e === void 0 ? u : e;
            return (
              i.mounted &&
              a.get(Jn) === c &&
              !ht() &&
              a.get(he) === t &&
              a.get(Et) === n &&
              a.get(Le.activeTab$)?.tabId === r
            );
          };
        a && u.set(Jn, c);
        let m = v,
          h = !0;
        if (a && !e?.metaKey && !e?.ctrlKey && !e?.shiftKey && !e?.altKey) {
          try {
            let e = await u.query.fetch(Re, s.id);
            if (e.live_url == null) return;
            m = e.live_url;
          } catch {
            h = !1;
          }
          if (!f()) return;
        }
        let g = (t) => {
          let n = l === `grid` ? _e.CHATGPT_SITES_SOURCE_HOME_GRID : _e.CHATGPT_SITES_SOURCE_HOME_LIST;
          try {
            xt(u, Me, {
              interactionType: t,
              projectId: s.id,
              source: e == null ? _e.CHATGPT_SITES_SOURCE_HOME_SITE_MENU : n,
            });
          } catch {}
        };
        if (
          h &&
          xe(u, { type: `appgen-app`, projectId: s.id, title: s.title, url: m }, e, !0, o, `full-width`, !1)
        ) {
          g(Pe.CHATGPT_SITES_INTERACTION_TYPE_PREVIEW_OPENED);
          return;
        }
        let _ = (e) => {
          (e == null
            ? Se({
                href: m,
                initiator: `sites_library`,
                openTarget: `external-browser`,
                disposition: `new-tab`,
              })
            : Be({
                event: e,
                href: m,
                initiator: `sites_library`,
                openTarget: `external-browser`,
                disposition: `new-tab`,
              })) && g(Pe.CHATGPT_SITES_INTERACTION_TYPE_SITE_OPENED);
        };
        if (a && navigator.userActivation?.isActive === !1) {
          i.closeExternalOpen?.();
          let e,
            t = () => {
              (e?.(),
                (e = void 0),
                window.removeEventListener(Ge, r),
                i.closeExternalOpen === n && (i.closeExternalOpen = void 0));
            },
            n = () => {
              (a.close(), t());
            },
            r = () => {
              f() || n();
            },
            a = u
              .get(oe)
              .info(
                d.formatMessage({
                  id: `appgenPage.preview.externalOpen.title`,
                  defaultMessage: `Open this Site in a new tab`,
                  description: `Persistent notification offering a fresh click when a selected Site needs to open externally after its preview capability lookup outlives browser popup activation. No placeholders.`,
                }),
                {
                  id: `sites-preview-external-open`,
                  duration: 0,
                  onRemove: t,
                  primaryAction: {
                    label: d.formatMessage({
                      id: `appgenPage.openSite.label`,
                      defaultMessage: `Open site`,
                      description: `Menu item for opening a published Site`,
                    }),
                    onClick: () => {
                      let e = f();
                      (n(), e && _());
                    },
                  },
                },
              );
          ((i.closeExternalOpen = n),
            window.addEventListener(Ge, r),
            (e = u.watch((e) => {
              f(e) || n();
            })),
            r());
          return;
        }
        _(e);
      }),
      (t[5] = d),
      (t[6] = v),
      (t[7] = o),
      (t[8] = s.id),
      (t[9] = s.title),
      (t[10] = u),
      (t[11] = l),
      (t[12] = S))
    : (S = t[12]);
  let C = S,
    w;
  t[13] !== C || t[14] !== v || t[15] !== a || t[16] !== x || t[17] !== s || t[18] !== u
    ? ((w = (e) => {
        if (x) {
          C(e);
          return;
        }
        (Te(u, {
          action: i.CODEX_APPGEN_INTERACTION_ACTION_EDIT_WITH_CHAT_CLICKED,
          projectId: s.id,
          source: m.CODEX_APPGEN_INTERACTION_SOURCE_SITES,
        }),
          a(s, v, `edit`));
      }),
      (t[13] = C),
      (t[14] = v),
      (t[15] = a),
      (t[16] = x),
      (t[17] = s),
      (t[18] = u),
      (t[19] = w))
    : (w = t[19]);
  let T = w,
    E;
  t[20] !== d || t[21] !== x || t[22] !== s.title
    ? ((E = x
        ? d.formatMessage(
            {
              id: `appgenPage.visit`,
              defaultMessage: `Visit {siteTitle}`,
              description: `Accessible label for opening a live site from the sites list`,
            },
            { siteTitle: s.title },
          )
        : d.formatMessage(
            {
              id: `appgenPage.edit`,
              defaultMessage: `Edit {siteTitle}`,
              description: `Accessible label for starting a new conversation to edit a site from the sites list`,
            },
            { siteTitle: s.title },
          )),
      (t[20] = d),
      (t[21] = x),
      (t[22] = s.title),
      (t[23] = E))
    : (E = t[23]);
  let D = E,
    O = s.status === `active` && s.live_url == null,
    k;
  t[24] !== C || t[25] !== x
    ? ((k = x ? (e) => void C(e) : void 0), (t[24] = C), (t[25] = x), (t[26] = k))
    : (k = t[26]);
  let A;
  t[27] !== v || t[28] !== a || t[29] !== s
    ? ((A = (e) => a(s, v, e)), (t[27] = v), (t[28] = a), (t[29] = s), (t[30] = A))
    : (A = t[30]);
  let j;
  t[31] !== T || t[32] !== r || t[33] !== o || t[34] !== D || t[35] !== s || t[36] !== c || t[37] !== l
    ? ((j = (e) =>
        l === `grid`
          ? (0, $.jsx)(Hn, { actions: e, onOpen: T, openLabel: D, project: s, shared: c })
          : (0, $.jsx)(Vn, {
              actions: e,
              hasAutomations: r,
              onOpen: T,
              openLabel: D,
              onNavigateToSite: o,
              project: s,
              shared: c,
            })),
      (t[31] = T),
      (t[32] = r),
      (t[33] = o),
      (t[34] = D),
      (t[35] = s),
      (t[36] = c),
      (t[37] = l),
      (t[38] = j))
    : (j = t[38]);
  let M;
  return (
    t[39] !== b ||
    t[40] !== y ||
    t[41] !== r ||
    t[42] !== _ ||
    t[43] !== v ||
    t[44] !== o ||
    t[45] !== s.disabled_by ||
    t[46] !== s.id ||
    t[47] !== s.is_pinned ||
    t[48] !== s.title ||
    t[49] !== j ||
    t[50] !== O ||
    t[51] !== k ||
    t[52] !== A ||
    t[53] !== l
      ? ((M = (0, $.jsx)(Qt, {
          canEdit: b,
          canManage: y,
          initialIsOwner: y,
          disabled: _,
          disabledBy: s.disabled_by,
          hasAutomations: r,
          isPinned: s.is_pinned,
          liveUrl: v,
          projectId: s.id,
          projectTitle: s.title,
          surface: `sites`,
          unpublished: O,
          viewMode: l,
          onNavigateToSite: o,
          onPreview: k,
          onEdit: A,
          children: j,
        })),
        (t[39] = b),
        (t[40] = y),
        (t[41] = r),
        (t[42] = _),
        (t[43] = v),
        (t[44] = o),
        (t[45] = s.disabled_by),
        (t[46] = s.id),
        (t[47] = s.is_pinned),
        (t[48] = s.title),
        (t[49] = j),
        (t[50] = O),
        (t[51] = k),
        (t[52] = A),
        (t[53] = l),
        (t[54] = M))
      : (M = t[54]),
    M
  );
}
function Vn(e) {
  let t = (0, Z.c)(79),
    {
      actions: n,
      hasAutomations: r,
      onOpen: i,
      openLabel: a,
      onNavigateToSite: o,
      project: s,
      shared: c,
    } = e,
    l = V(),
    u = U(`262557526`),
    d = U(`60299493`),
    f = s.live_url,
    p = s.status === `suspended`,
    m = s.status === `active` && f == null,
    g = p ? null : f,
    _ = s.owner,
    v = c ? s.current_user_role === `owner` : s.current_user_role !== `editor`,
    y = v || s.current_user_role === `editor`,
    b;
  t[0] === s.disabled_by
    ? (b = t[1])
    : ((b = (0, $.jsx)(kt, { disabledBy: s.disabled_by })), (t[0] = s.disabled_by), (t[1] = b));
  let x = b,
    S = !p && `hover:bg-primary-ghost-hover`,
    C;
  t[2] === S
    ? (C = t[3])
    : ((C = h(
        `group/site-row relative col-span-full grid min-h-[82px] grid-cols-subgrid items-center overflow-hidden rounded-xl px-4 py-4 select-none after:pointer-events-none after:absolute after:inset-x-3 after:bottom-0 after:border-b after:border-subtle hover:after:opacity-0`,
        S,
      )),
      (t[2] = S),
      (t[3] = C));
  let w;
  t[4] !== g || t[5] !== y || t[6] !== l || t[7] !== s.title
    ? ((w =
        !y && g != null
          ? (0, $.jsx)(ke, {
              "aria-label": l.formatMessage(
                {
                  id: `appgenPage.visit`,
                  defaultMessage: `Visit {siteTitle}`,
                  description: `Accessible label for opening a live site from the sites list`,
                },
                { siteTitle: s.title },
              ),
              className: `absolute inset-0 cursor-interaction rounded-xl bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
              href: g,
              initiator: `sites_library`,
              openTarget: `external-browser`,
            })
          : null),
      (t[4] = g),
      (t[5] = y),
      (t[6] = l),
      (t[7] = s.title),
      (t[8] = w))
    : (w = t[8]);
  let T;
  t[9] !== y || t[10] !== p || t[11] !== i || t[12] !== a
    ? ((T = y
        ? (0, $.jsx)(`button`, {
            "aria-label": a,
            className: `absolute inset-0 cursor-interaction rounded-xl bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
            disabled: p,
            type: `button`,
            onClick: i,
          })
        : null),
      (t[9] = y),
      (t[10] = p),
      (t[11] = i),
      (t[12] = a),
      (t[13] = T))
    : (T = t[13]);
  let E;
  t[14] === s.screenshot_url
    ? (E = t[15])
    : ((E = (0, $.jsx)(Zt, { screenshotUrl: s.screenshot_url, viewMode: `list` })),
      (t[14] = s.screenshot_url),
      (t[15] = E));
  let D;
  t[16] === s.title
    ? (D = t[17])
    : ((D = (0, $.jsx)(`span`, {
        className: `min-w-0 truncate text-base leading-6 text-default`,
        children: s.title,
      })),
      (t[16] = s.title),
      (t[17] = D));
  let O;
  t[18] === s.is_pinned
    ? (O = t[19])
    : ((O = s.is_pinned ? (0, $.jsx)(Un, {}) : null), (t[18] = s.is_pinned), (t[19] = O));
  let k;
  t[20] !== r || t[21] !== o || t[22] !== s.id
    ? ((k = r ? (0, $.jsx)(Wn, { projectId: s.id, onNavigateToSite: o }) : null),
      (t[20] = r),
      (t[21] = o),
      (t[22] = s.id),
      (t[23] = k))
    : (k = t[23]);
  let A;
  t[24] !== x || t[25] !== p || t[26] !== s.disabled_by
    ? ((A = p
        ? (0, $.jsx)(B, {
            interactive: s.disabled_by === `openai`,
            tooltipContent: x,
            children: (0, $.jsx)(wt, {
              className: `pointer-events-auto shrink-0 px-1.5 py-0.5 text-xs font-medium`,
              children: (0, $.jsx)(H, {
                id: `appgenPage.disabledBadge`,
                defaultMessage: `Disabled`,
                description: `Status badge shown next to a site name when the site is disabled`,
              }),
            }),
          })
        : null),
      (t[24] = x),
      (t[25] = p),
      (t[26] = s.disabled_by),
      (t[27] = A))
    : (A = t[27]);
  let j;
  t[28] !== A || t[29] !== D || t[30] !== O || t[31] !== k
    ? ((j = (0, $.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [D, O, k, A] })),
      (t[28] = A),
      (t[29] = D),
      (t[30] = O),
      (t[31] = k),
      (t[32] = j))
    : (j = t[32]);
  let M;
  t[33] === s.updated_at
    ? (M = t[34])
    : ((M = (0, $.jsx)($t, { dateString: s.updated_at })), (t[33] = s.updated_at), (t[34] = M));
  let N;
  t[35] === m
    ? (N = t[36])
    : ((N = m
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(`span`, {
                "aria-hidden": !0,
                className: `size-0.5 shrink-0 rounded-full bg-text-tertiary`,
              }),
              (0, $.jsx)(`span`, {
                className: `truncate`,
                children: (0, $.jsx)(H, {
                  id: `appgenPage.notPublished`,
                  defaultMessage: `Not published`,
                  description: `Sites row status for a Site that has not been published`,
                }),
              }),
            ],
          })
        : null),
      (t[35] = m),
      (t[36] = N));
  let P;
  t[37] === s.sharing
    ? (P = t[38])
    : ((P = (0, $.jsx)(Y, {
        accessState: s.sharing,
        "aria-hidden": !0,
        className: `icon-xs hidden shrink-0 [@container_(max-width:520px)]:block`,
      })),
      (t[37] = s.sharing),
      (t[38] = P));
  let ee;
  t[39] !== M || t[40] !== N || t[41] !== P
    ? ((ee = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1.5 text-sm leading-5 text-secondary`,
        children: [M, N, P],
      })),
      (t[39] = M),
      (t[40] = N),
      (t[41] = P),
      (t[42] = ee))
    : (ee = t[42]);
  let F;
  t[43] !== j || t[44] !== ee
    ? ((F = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col gap-px`, children: [j, ee] })),
      (t[43] = j),
      (t[44] = ee),
      (t[45] = F))
    : (F = t[45]);
  let I;
  t[46] !== F || t[47] !== E
    ? ((I = (0, $.jsxs)(`div`, {
        className: `pointer-events-none relative z-10 flex min-w-0 items-center gap-4`,
        children: [E, F],
      })),
      (t[46] = F),
      (t[47] = E),
      (t[48] = I))
    : (I = t[48]);
  let L;
  t[49] !== _?.email || t[50] !== _?.name || t[51] !== s.current_user_role || t[52] !== c
    ? ((L = c
        ? (0, $.jsx)(Gn, {
            ownerEmail: _?.email,
            ownerName: _?.name ?? _?.email,
            isCurrentUser: s.current_user_role === `owner`,
          })
        : null),
      (t[49] = _?.email),
      (t[50] = _?.name),
      (t[51] = s.current_user_role),
      (t[52] = c),
      (t[53] = L))
    : (L = t[53]);
  let R;
  t[54] !== y || t[55] !== v || t[56] !== p || t[57] !== s.id || t[58] !== s.sharing || t[59] !== s.title
    ? ((R = (0, $.jsx)(Kn, {
        accessState: s.sharing,
        canManage: v,
        canViewSharing: y,
        disabled: p,
        projectId: s.id,
        projectTitle: s.title,
        viewMode: `list`,
      })),
      (t[54] = y),
      (t[55] = v),
      (t[56] = p),
      (t[57] = s.id),
      (t[58] = s.sharing),
      (t[59] = s.title),
      (t[60] = R))
    : (R = t[60]);
  let te;
  t[61] !== u ||
  t[62] !== v ||
  t[63] !== p ||
  t[64] !== o ||
  t[65] !== s.id ||
  t[66] !== s.title ||
  t[67] !== d ||
  t[68] !== m
    ? ((te =
        u && d
          ? (0, $.jsx)(`div`, {
              className: `pointer-events-none relative z-10 min-w-0 ps-4 [@container_(max-width:520px)]:hidden`,
              children:
                v && !p && !m
                  ? (0, $.jsx)(cn, { onNavigateToSite: o, projectId: s.id, projectTitle: s.title })
                  : null,
            })
          : null),
      (t[61] = u),
      (t[62] = v),
      (t[63] = p),
      (t[64] = o),
      (t[65] = s.id),
      (t[66] = s.title),
      (t[67] = d),
      (t[68] = m),
      (t[69] = te))
    : (te = t[69]);
  let z;
  return (
    t[70] !== n ||
    t[71] !== I ||
    t[72] !== L ||
    t[73] !== R ||
    t[74] !== te ||
    t[75] !== C ||
    t[76] !== w ||
    t[77] !== T
      ? ((z = (0, $.jsxs)(`div`, { className: C, "data-appgen-row": !0, children: [w, T, I, L, R, te, n] })),
        (t[70] = n),
        (t[71] = I),
        (t[72] = L),
        (t[73] = R),
        (t[74] = te),
        (t[75] = C),
        (t[76] = w),
        (t[77] = T),
        (t[78] = z))
      : (z = t[78]),
    z
  );
}
function Hn(e) {
  let t = (0, Z.c)(55),
    { actions: n, onOpen: r, openLabel: i, project: a, shared: o } = e,
    s = V(),
    c = a.live_url,
    l = a.status === `suspended`,
    u = l ? null : c,
    d = o ? a.current_user_role === `owner` : a.current_user_role !== `editor`,
    f = d || a.current_user_role === `editor`,
    p;
  t[0] === a.disabled_by
    ? (p = t[1])
    : ((p = (0, $.jsx)(kt, { disabledBy: a.disabled_by })), (t[0] = a.disabled_by), (t[1] = p));
  let m = p,
    g;
  t[2] !== u || t[3] !== f || t[4] !== s || t[5] !== a.title
    ? ((g =
        !f && u != null
          ? (0, $.jsx)(ke, {
              "aria-label": s.formatMessage(
                {
                  id: `appgenPage.visit`,
                  defaultMessage: `Visit {siteTitle}`,
                  description: `Accessible label for opening a live site from the sites grid`,
                },
                { siteTitle: a.title },
              ),
              className: `absolute inset-0 cursor-interaction rounded-2xl bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
              href: u,
              initiator: `sites_library`,
              openTarget: `external-browser`,
            })
          : null),
      (t[2] = u),
      (t[3] = f),
      (t[4] = s),
      (t[5] = a.title),
      (t[6] = g))
    : (g = t[6]);
  let _;
  t[7] !== f || t[8] !== l || t[9] !== r || t[10] !== i
    ? ((_ = f
        ? (0, $.jsx)(`button`, {
            "aria-label": i,
            className: `absolute inset-0 cursor-interaction rounded-2xl bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
            disabled: l,
            type: `button`,
            onClick: r,
          })
        : null),
      (t[7] = f),
      (t[8] = l),
      (t[9] = r),
      (t[10] = i),
      (t[11] = _))
    : (_ = t[11]);
  let v;
  t[12] === a.screenshot_url
    ? (v = t[13])
    : ((v = (0, $.jsx)(Zt, { screenshotUrl: a.screenshot_url, viewMode: `grid` })),
      (t[12] = a.screenshot_url),
      (t[13] = v));
  let y = !l && `group-hover/site-card:bg-primary-ghost-hover`,
    b;
  t[14] === y
    ? (b = t[15])
    : ((b = h(
        `pointer-events-none relative z-10 grid h-16 min-w-0 shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center border-t border-subtle`,
        y,
      )),
      (t[14] = y),
      (t[15] = b));
  let x;
  t[16] === a.title
    ? (x = t[17])
    : ((x = (0, $.jsx)(`span`, {
        className: `min-w-0 truncate text-sm leading-5 font-medium text-default`,
        children: a.title,
      })),
      (t[16] = a.title),
      (t[17] = x));
  let S;
  t[18] === a.is_pinned
    ? (S = t[19])
    : ((S = a.is_pinned ? (0, $.jsx)(Un, {}) : null), (t[18] = a.is_pinned), (t[19] = S));
  let C;
  t[20] !== m || t[21] !== l || t[22] !== a.disabled_by
    ? ((C = l
        ? (0, $.jsx)(B, {
            interactive: a.disabled_by === `openai`,
            tooltipContent: m,
            children: (0, $.jsx)(wt, {
              className: `pointer-events-auto shrink-0 px-1.5 py-0.5 text-xs font-medium`,
              children: (0, $.jsx)(H, {
                id: `appgenPage.disabledBadge`,
                defaultMessage: `Disabled`,
                description: `Status badge shown next to a site name when the site is disabled`,
              }),
            }),
          })
        : null),
      (t[20] = m),
      (t[21] = l),
      (t[22] = a.disabled_by),
      (t[23] = C))
    : (C = t[23]);
  let w;
  t[24] !== x || t[25] !== S || t[26] !== C
    ? ((w = (0, $.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [x, S, C] })),
      (t[24] = x),
      (t[25] = S),
      (t[26] = C),
      (t[27] = w))
    : (w = t[27]);
  let T;
  t[28] !== f || t[29] !== d || t[30] !== l || t[31] !== a.id || t[32] !== a.sharing || t[33] !== a.title
    ? ((T = (0, $.jsx)(Kn, {
        accessState: a.sharing,
        canManage: d,
        canViewSharing: f,
        disabled: l,
        projectId: a.id,
        projectTitle: a.title,
        viewMode: `grid`,
      })),
      (t[28] = f),
      (t[29] = d),
      (t[30] = l),
      (t[31] = a.id),
      (t[32] = a.sharing),
      (t[33] = a.title),
      (t[34] = T))
    : (T = t[34]);
  let E;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, $.jsx)(`span`, {
        "aria-hidden": !0,
        className: `size-0.5 shrink-0 rounded-full bg-text-tertiary`,
      })),
      (t[35] = E))
    : (E = t[35]);
  let D;
  t[36] === a.updated_at
    ? (D = t[37])
    : ((D = (0, $.jsx)(`span`, {
        className: `shrink-0 whitespace-nowrap`,
        children: (0, $.jsx)($t, { dateString: a.updated_at }),
      })),
      (t[36] = a.updated_at),
      (t[37] = D));
  let O;
  t[38] !== T || t[39] !== D
    ? ((O = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1.5 text-xs leading-4 text-secondary`,
        children: [T, E, D],
      })),
      (t[38] = T),
      (t[39] = D),
      (t[40] = O))
    : (O = t[40]);
  let k;
  t[41] !== w || t[42] !== O
    ? ((k = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-1 ps-3`, children: [w, O] })),
      (t[41] = w),
      (t[42] = O),
      (t[43] = k))
    : (k = t[43]);
  let A;
  t[44] === n
    ? (A = t[45])
    : ((A = (0, $.jsx)(`div`, {
        className: `pointer-events-auto relative z-10 flex items-center gap-1 pe-2`,
        children: n,
      })),
      (t[44] = n),
      (t[45] = A));
  let j;
  t[46] !== k || t[47] !== A || t[48] !== b
    ? ((j = (0, $.jsxs)(`div`, { className: b, children: [k, A] })),
      (t[46] = k),
      (t[47] = A),
      (t[48] = b),
      (t[49] = j))
    : (j = t[49]);
  let M;
  return (
    t[50] !== j || t[51] !== g || t[52] !== _ || t[53] !== v
      ? ((M = (0, $.jsxs)(`article`, {
          className: `group/site-card relative flex h-64 min-w-0 flex-col overflow-hidden rounded-2xl border border-subtle bg-surface-card shadow-card`,
          children: [g, _, v, j],
        })),
        (t[50] = j),
        (t[51] = g),
        (t[52] = _),
        (t[53] = v),
        (t[54] = M))
      : (M = t[54]),
    M
  );
}
function Un() {
  let e = (0, Z.c)(3),
    t = V(),
    n = U(`1425956883`),
    r;
  return (
    e[0] !== t || e[1] !== n
      ? ((r = n
          ? (0, $.jsx)(re, {
              "aria-label": t.formatMessage({
                id: `appgenPage.pins.indicator`,
                defaultMessage: `Pinned`,
                description: `Accessible label for the icon marking a site as pinned`,
              }),
              className: `text-secondary`,
            })
          : null),
        (e[0] = t),
        (e[1] = n),
        (e[2] = r))
      : (r = e[2]),
    r
  );
}
function Wn(e) {
  let t = (0, Z.c)(13),
    { projectId: n, onNavigateToSite: r } = e,
    i = O(),
    a = V(),
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = a.formatMessage({
        id: `appgenAutomations.indicator`,
        defaultMessage: `View this Site’s schedules`,
        description: `Tooltip and accessible label for the clock icon on a Site with scheduled tasks`,
      })),
      (t[0] = a),
      (t[1] = o));
  let s = o,
    c;
  t[2] !== i || t[3] !== r || t[4] !== n
    ? ((c = () => void (r ?? i)($e(n))), (t[2] = i), (t[3] = r), (t[4] = n), (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = (0, $.jsx)(d, {})), (t[6] = l)) : (l = t[6]);
  let u;
  t[7] !== s || t[8] !== c
    ? ((u = (0, $.jsx)(P, {
        "aria-label": s,
        className: `pointer-events-auto`,
        color: `ghost`,
        radius: `full`,
        size: `compact`,
        uniform: !0,
        onClick: c,
        children: l,
      })),
      (t[7] = s),
      (t[8] = c),
      (t[9] = u))
    : (u = t[9]);
  let f;
  return (
    t[10] !== s || t[11] !== u
      ? ((f = (0, $.jsx)(B, { tooltipContent: s, children: u })), (t[10] = s), (t[11] = u), (t[12] = f))
      : (f = t[12]),
    f
  );
}
function Gn(e) {
  let t = (0, Z.c)(20),
    { ownerEmail: n, ownerName: r, isCurrentUser: i } = e,
    a = V(),
    o = R(zt),
    s;
  t[0] !== a || t[1] !== i || t[2] !== r
    ? ((s = i
        ? a.formatMessage({
            id: `appgenPage.ownerYou`,
            defaultMessage: `You`,
            description: `Owner label for a site owned by the current user`,
          })
        : r?.trim() || null),
      (t[0] = a),
      (t[1] = i),
      (t[2] = r),
      (t[3] = s))
    : (s = t[3]);
  let c = s,
    l = c ?? n ?? ``,
    u = o && `pointer-events-auto`,
    d;
  t[4] === u ? (d = t[5]) : ((d = h(`flex min-w-0 items-center gap-2`, u)), (t[4] = u), (t[5] = d));
  let f;
  t[6] === c
    ? (f = t[7])
    : ((f = (0, $.jsx)(ct, { alt: ``, name: c, size: `response`, src: null })), (t[6] = c), (t[7] = f));
  let p;
  t[8] === c
    ? (p = t[9])
    : ((p =
        c ??
        (0, $.jsx)(H, {
          id: `appgenPage.ownerUnavailable`,
          defaultMessage: `Owner unavailable`,
          description: `Fallback shown when a shared site's owner display is unavailable`,
        })),
      (t[8] = c),
      (t[9] = p));
  let m;
  t[10] === p
    ? (m = t[11])
    : ((m = (0, $.jsx)(`span`, {
        className: `truncate text-default [@container_(max-width:520px)]:sr-only`,
        children: p,
      })),
      (t[10] = p),
      (t[11] = m));
  let g;
  t[12] !== d || t[13] !== f || t[14] !== m
    ? ((g = (0, $.jsxs)(`span`, { className: d, children: [f, m] })),
      (t[12] = d),
      (t[13] = f),
      (t[14] = m),
      (t[15] = g))
    : (g = t[15]);
  let _;
  return (
    t[16] !== n || t[17] !== l || t[18] !== g
      ? ((_ = (0, $.jsx)(`div`, {
          className: `pointer-events-none relative z-10 flex min-w-0 items-center gap-2 ps-4 text-sm leading-5 [@container_(max-width:520px)]:sr-only`,
          children: (0, $.jsx)(Rt, { accountUserId: null, accountUserEmail: n, label: l, children: g }),
        })),
        (t[16] = n),
        (t[17] = l),
        (t[18] = g),
        (t[19] = _))
      : (_ = t[19]),
    _
  );
}
function Kn(e) {
  let t = (0, Z.c)(35),
    {
      accessState: r,
      canViewSharing: i,
      canManage: a,
      disabled: o,
      projectId: s,
      projectTitle: c,
      viewMode: l,
    } = e,
    u = a === void 0 || a,
    d = o !== void 0 && o,
    f = n(C),
    p;
  t[0] === r
    ? (p = t[1])
    : ((p = (0, $.jsx)(Y, { className: `icon-xs shrink-0`, accessState: r, "aria-hidden": !0 })),
      (t[0] = r),
      (t[1] = p));
  let m = l === `list` && `[@container_(max-width:520px)]:sr-only`,
    g;
  t[2] === m ? (g = t[3]) : ((g = h(`truncate`, m)), (t[2] = m), (t[3] = g));
  let _;
  t[4] === r ? (_ = t[5]) : ((_ = Ut(r)), (t[4] = r), (t[5] = _));
  let v;
  t[6] !== r || t[7] !== _
    ? ((v = (0, $.jsx)(H, { ..._, values: r })), (t[6] = r), (t[7] = _), (t[8] = v))
    : (v = t[8]);
  let y;
  t[9] !== g || t[10] !== v
    ? ((y = (0, $.jsx)(`span`, { className: g, children: v })), (t[9] = g), (t[10] = v), (t[11] = y))
    : (y = t[11]);
  let b;
  t[12] !== p || t[13] !== y
    ? ((b = (0, $.jsxs)($.Fragment, { children: [p, y] })), (t[12] = p), (t[13] = y), (t[14] = b))
    : (b = t[14]);
  let x = b;
  if (!i) {
    let e =
        l === `list`
          ? `ps-4 text-sm leading-5 text-default [@container_(max-width:520px)]:sr-only`
          : `text-xs leading-4 text-secondary`,
      n;
    t[15] === e
      ? (n = t[16])
      : ((n = h(`pointer-events-none relative z-10 flex min-w-0 items-center gap-1.5 justify-self-start`, e)),
        (t[15] = e),
        (t[16] = n));
    let r;
    return (
      t[17] !== x || t[18] !== n
        ? ((r = (0, $.jsx)(`div`, { className: n, children: x })), (t[17] = x), (t[18] = n), (t[19] = r))
        : (r = t[19]),
      r
    );
  }
  let S =
      l === `list`
        ? `ps-4 text-sm leading-5 text-default [@container_(max-width:520px)]:sr-only [@container_(max-width:520px)]:focus:not-sr-only`
        : `text-xs leading-4 text-secondary`,
    w;
  t[20] === S
    ? (w = t[21])
    : ((w = h(
        `pointer-events-auto relative z-10 min-w-0 gap-1.5 justify-self-start text-start underline-offset-2 hover:underline focus-visible:underline disabled:opacity-50 disabled:hover:no-underline`,
        S,
      )),
      (t[20] = S),
      (t[21] = w));
  let T;
  t[22] !== u || t[23] !== s || t[24] !== c || t[25] !== f
    ? ((T = () =>
        Gt(f, s, {
          initialIsOwner: u,
          initialProjectTitle: c,
          source: j.CODEX_SITES_SHARING_SOURCE_SITES_ACCESS_BADGE,
        })),
      (t[22] = u),
      (t[23] = s),
      (t[24] = c),
      (t[25] = f),
      (t[26] = T))
    : (T = t[26]);
  let E;
  t[27] === c
    ? (E = t[28])
    : ((E = (0, $.jsx)(`span`, {
        className: `sr-only`,
        children: (0, $.jsx)(H, {
          id: `appgenPage.openSharingSettings`,
          defaultMessage: `, open sharing settings for {siteTitle}`,
          description: `Additional accessible button label for opening site sharing settings from the sites list access status`,
          values: { siteTitle: c },
        }),
      })),
      (t[27] = c),
      (t[28] = E));
  let D;
  return (
    t[29] !== x || t[30] !== d || t[31] !== w || t[32] !== T || t[33] !== E
      ? ((D = (0, $.jsxs)(P, {
          className: w,
          color: `ghostMuted`,
          disabled: d,
          size: `inline`,
          onClick: T,
          children: [x, E],
        })),
        (t[29] = x),
        (t[30] = d),
        (t[31] = w),
        (t[32] = T),
        (t[33] = E),
        (t[34] = D))
      : (D = t[34]),
    D
  );
}
var Z, qn, Q, $, Jn;
function Yn() {
  return (Yn = e(() => {
    ((Z = x()),
      He(),
      w(),
      le(),
      ie(),
      z(),
      p(),
      _(),
      (qn = t(o(), 1)),
      I(),
      (Q = c()),
      M(),
      v(),
      Ie(),
      pe(),
      _t(),
      st(),
      dt(),
      we(),
      pt(),
      ge(),
      F(),
      ut(),
      tt(),
      y(),
      D(),
      yt(),
      qe(),
      We(),
      Dt(),
      K(),
      nt(),
      A(),
      se(),
      Mt(),
      Ce(),
      Pt(),
      Lt(),
      It(),
      Ct(),
      Ne(),
      r(),
      Tt(),
      Ae(),
      St(),
      a(),
      S(),
      gn(),
      Wt(),
      Ht(),
      Oe(),
      at(),
      Ot(),
      Yt(),
      De(),
      Jt(),
      ft(),
      Xt(),
      en(),
      rn(),
      Kt(),
      ze(),
      Je(),
      G(),
      ve(),
      ($ = f()),
      (Jn = ne(q, Symbol())));
  }))();
}
export { En as n, Yn as r, _n as t };
//# sourceMappingURL=appgen-page-72031c72f68a.js.map
