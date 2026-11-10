import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  Bk as r,
  Cot as i,
  EPt as a,
  Ext as o,
  Fat as s,
  I3 as c,
  IDt as l,
  Ixt as u,
  MG as d,
  Mot as f,
  Mz as p,
  Not as m,
  Nxt as h,
  Nz as g,
  P3 as _,
  Pat as v,
  Pxt as y,
  QG as b,
  Rnt as x,
  Rxt as S,
  TJ as C,
  VDt as w,
  Vk as T,
  Vxt as E,
  Wtt as D,
  XV as O,
  Xot as k,
  Yot as A,
  ZG as j,
  _Mt as M,
  _xt as N,
  cSt as P,
  cz as F,
  fLt as I,
  fSt as L,
  gMt as R,
  hot as z,
  hrt as ee,
  jDt as B,
  lot as V,
  nst as te,
  sMt as ne,
  sz as re,
  t3 as ie,
  tst as H,
  vrt as ae,
  vzt as oe,
  wot as se,
  wxt as ce,
  xMt as le,
  yzt as ue,
  zxt as de,
} from "./app-shared-bbfeca5e5737.js";
import {
  $3n as fe,
  ACn as pe,
  AU as me,
  Agn as he,
  BL as ge,
  BYt as _e,
  Bhn as ve,
  Bnn as ye,
  Cwr as be,
  DU as xe,
  EU as Se,
  FB as Ce,
  Fct as we,
  GB as Te,
  GMr as Ee,
  Ggr as De,
  IB as Oe,
  IYt as U,
  Ict as ke,
  JPn as W,
  KB as Ae,
  Lhn as je,
  MRt as Me,
  Mct as Ne,
  Mgn as Pe,
  NRt as G,
  ONr as Fe,
  OU as Ie,
  Pct as Le,
  Q3n as K,
  QDr as Re,
  Qjr as ze,
  Rhn as Be,
  TNr as Ve,
  Vhn as He,
  XB as Ue,
  XDr as We,
  XPn as Ge,
  Xgr as Ke,
  YB as qe,
  ZPn as Je,
  Zjr as Ye,
  cEr as Xe,
  co as Ze,
  dwn as Qe,
  e6n as $e,
  eC as et,
  eDr as tt,
  eOr as nt,
  ekr as rt,
  eor as it,
  fur as at,
  gwr as ot,
  hwn as st,
  jCn as ct,
  jgn as lt,
  lIr as ut,
  lo as dt,
  mNr as ft,
  n0 as pt,
  nC as mt,
  nDr as q,
  nEr as ht,
  pur as gt,
  rkr as _t,
  sIr as vt,
  t0 as yt,
  tEr as J,
  tNr as bt,
  tor as xt,
  xPn as St,
  yPn as Ct,
  zB as wt,
  zL as Tt,
  zhn as Et,
  znn as Dt,
} from "./app-initial-5851df3f6cb1.js";
import { n as Ot, t as kt } from "./appgen-disabled-tooltip-1654c4d763a0.js";
import { a as At, i as jt } from "./query-343b01d94338.js";
import { r as Mt, t as Nt } from "./document-title-1619f32b59ec.js";
import { n as Pt, t as Ft } from "./space-search-empty-state-92b70c289368.js";
import { a as It, i as Lt, n as Rt, o as zt } from "./profile-card-24cf744f537b.js";
import { n as Bt, t as Vt } from "./Curve-5a664ce149df.js";
import { a as Y, i as Ht, n as Ut, o as Wt } from "./appgen-access-state-messages-64c90daeb132.js";
import { n as Gt, t as Kt } from "./open-appgen-share-dialog-8d437cfd3c67.js";
import {
  c as qt,
  i as Jt,
  l as Yt,
  n as Xt,
  r as Zt,
  s as Qt,
  t as $t,
} from "./appgen-updated-at-e59785444f71.js";
import { n as en, t as tn } from "./appgen-view-controls-af930745ff2a.js";
import { n as nn, t as rn } from "./appgen-view-mode-be8a18b4fdaf.js";
var an, on;
function sn() {
  return (sn = e(() => {
    (y(),
      a(),
      se(),
      Ye(),
      At(),
      (an = I().int().positive().catch(5)),
      (on = P(i, (e, { scope: t }) => {
        let n = new Map(),
          r = new Map(),
          i = null,
          a = !1;
        function o() {
          if (a || r.size === 0) return;
          let n = an.parse(t.get(ze, `821253728`)?.get(`traffic_graph_batch_size`, 5)),
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
    { onNavigateToSite: n, projectId: r, projectTitle: a } = e,
    s = u(i),
    d = w(),
    f = o(),
    p = (0, hn.useId)(),
    m = S(on, `30d`),
    h;
  t[0] === r
    ? (h = t[1])
    : ((h = { includeRequestBreakdown: !0, granularity: `daily`, projectId: r, range: `30d` }),
      (t[0] = r),
      (t[1] = h));
  let g;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = { enabled: !1 }), (t[2] = g)) : (g = t[2]);
  let { data: v, isError: y } = de(jt, h, g),
    b;
  t[3] === v
    ? (b = t[4])
    : ((b = v?.hasRequestBreakdown
        ? { ...v, summary: { ...v.summary, pageViews: v.traffic.reduce(un, 0) }, traffic: v.traffic.map(ln) }
        : v),
      (t[3] = v),
      (t[4] = b));
  let x = b,
    C;
  if (x != null) {
    let e;
    t[5] === x
      ? (e = t[6])
      : ((e = (0, X.jsx)(`span`, {
          className: `block min-h-0 w-full flex-1`,
          children: (0, X.jsx)(dn, { overview: x }),
        })),
        (t[5] = x),
        (t[6] = e));
    let n = x.summary.pageViews,
      r;
    t[7] !== d || t[8] !== x.summary.pageViews
      ? ((r = d.formatNumber(x.summary.pageViews, { notation: `compact`, maximumFractionDigits: 1 })),
        (t[7] = d),
        (t[8] = x.summary.pageViews),
        (t[9] = r))
      : (r = t[9]);
    let i;
    t[10] !== x.summary.pageViews || t[11] !== r
      ? ((i = (0, X.jsx)(l, {
          id: `appgenPage.traffic.visitsTotal`,
          defaultMessage: `{count, plural, one {{visits} Visit} other {{visits} Visits}}`,
          description: `Small label below a site's graph showing its total page visits over the last 30 days. count is the numeric total used for pluralization; visits is the same total formatted as a compact localized number, such as 1.2K.`,
          values: { count: n, visits: r },
        })),
        (t[10] = x.summary.pageViews),
        (t[11] = r),
        (t[12] = i))
      : (i = t[12]);
    let a;
    t[13] !== i || t[14] !== p
      ? ((a = (0, X.jsx)(`span`, {
          id: p,
          className: `w-full shrink-0 truncate text-start text-xs leading-4 text-secondary tabular-nums select-none`,
          children: i,
        })),
        (t[13] = i),
        (t[14] = p),
        (t[15] = a))
      : (a = t[15]);
    let o;
    (t[16] !== e || t[17] !== a
      ? ((o = (0, X.jsxs)(X.Fragment, { children: [e, a] })), (t[16] = e), (t[17] = a), (t[18] = o))
      : (o = t[18]),
      (C = o));
  } else if (y) {
    let e;
    (t[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(`span`, {
          className: `sr-only`,
          children: (0, X.jsx)(l, {
            id: `appgenAnalytics.overview.error`,
            defaultMessage: `Unable to load analytics`,
            description: `Error shown when the site analytics overview cannot load`,
          }),
        })),
        (t[19] = e))
      : (e = t[19]),
      (C = e));
  } else {
    let e;
    (t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(fe, { lines: 1, size: `sm` })), (t[20] = e))
      : (e = t[20]),
      (C = e));
  }
  let T;
  t[21] !== r || t[22] !== m
    ? ((T = (e) => (e == null ? void 0 : m.observe(e, r))), (t[21] = r), (t[22] = m), (t[23] = T))
    : (T = t[23]);
  let E = x == null ? void 0 : p,
    D;
  t[24] !== d || t[25] !== a
    ? ((D = d.formatMessage(
        {
          id: `appgenPage.traffic.openAnalytics`,
          defaultMessage: `Open analytics for {siteTitle}: page views over the past 30 days`,
          description: `Accessible button label for a site owner's graph showing daily page views over the last 30 days. The siteTitle placeholder is the user-provided website title. Selecting the graph opens that site's analytics page.`,
        },
        { siteTitle: a },
      )),
      (t[24] = d),
      (t[25] = a),
      (t[26] = D))
    : (D = t[26]);
  let O;
  t[27] !== f || t[28] !== n || t[29] !== r || t[30] !== s
    ? ((O = () => {
        (Oe(s, {
          action: _.CODEX_APPGEN_INTERACTION_ACTION_ANALYTICS_OPENED,
          projectId: r,
          source: c.CODEX_APPGEN_INTERACTION_SOURCE_SITES,
        }),
          (n ?? f)(J(r)));
      }),
      (t[27] = f),
      (t[28] = n),
      (t[29] = r),
      (t[30] = s),
      (t[31] = O))
    : (O = t[31]);
  let k;
  return (
    t[32] !== C || t[33] !== T || t[34] !== E || t[35] !== D || t[36] !== O
      ? ((k = (0, X.jsx)(`button`, {
          ref: T,
          className: `group/traffic pointer-events-auto relative z-10 flex h-14 w-24 shrink-0 cursor-interaction flex-col justify-center gap-1 rounded-md border border-transparent p-1 hover:border-strong focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none [@container_(max-width:520px)]:hidden [@container_(max-width:720px)]:w-16`,
          "aria-describedby": E,
          "aria-label": D,
          type: `button`,
          onClick: O,
          children: C,
        })),
        (t[32] = C),
        (t[33] = T),
        (t[34] = E),
        (t[35] = D),
        (t[36] = O),
        (t[37] = k))
      : (k = t[37]),
    k
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
    ((mn = oe()), y(), (hn = ue()), B(), N(), Bt(), $e(), se(), Ce(), Xe(), At(), sn(), (X = le()));
  }))();
}
function _n(e) {
  let t = (0, Z.c)(83),
    { collectionNavigation: n, onNavigateToSite: r, renderLayout: a } = e,
    o = u(i),
    { data: s, status: d } = Ke(),
    f = (0, Q.useRef)(!1),
    p;
  t[0] === o
    ? (p = t[1])
    : ((p = () => {
        let e = o.get(nt).submitCodexAnalyticsEvent;
        f.current || e == null || ((f.current = !0), e({ eventKind: `appgen_my_apps_view` }));
      }),
      (t[0] = o),
      (t[1] = p));
  let g = (0, Q.useEffectEvent)(p),
    y;
  t[2] !== s || t[3] !== d || t[4] !== g
    ? ((y = () => {
        d === `success` && s === !0 && g();
      }),
      (t[2] = s),
      (t[3] = d),
      (t[4] = g),
      (t[5] = y))
    : (y = t[5]);
  let x;
  (t[6] !== s || t[7] !== d ? ((x = [s, d]), (t[6] = s), (t[7] = d), (t[8] = x)) : (x = t[8]),
    (0, Q.useEffect)(y, x));
  let S = w(),
    C = (0, Q.useId)(),
    T = E(xt),
    D = q(`476199071`),
    O = q(`1425956883`),
    [A, M] = h(),
    N = ce(),
    P = new URL(n?.href ?? N.pathname + N.search, `https://chatgpt.com`),
    F = n == null ? A : P.searchParams,
    I = (e, t) => {
      if (n == null) M(e, t);
      else {
        let r = e(new URLSearchParams(F));
        n.onNavigate(P.pathname + (r.size > 0 ? `?${r}` : ``), t);
      }
    },
    L = `owned`;
  O && F.get(`view`) === `pinned`
    ? (L = `pinned`)
    : D &&
      (F.get(`view`) === `shared` ? (L = `shared`) : F.get(`view`) !== `owned` && n != null && (L = `all`));
  let [R, z] = (0, Q.useState)(``),
    B = n == null ? R : (F.get(`search`) ?? ``),
    V;
  t[9] !== n || t[10] !== I
    ? ((V = (e) => {
        n == null
          ? z(e)
          : I(
              (t) => {
                let n = new URLSearchParams(t);
                return (e ? n.set(`search`, e) : n.delete(`search`), n);
              },
              { replace: !0 },
            );
      }),
      (t[9] = n),
      (t[10] = I),
      (t[11] = V))
    : (V = t[11]);
  let ne = V,
    { accountId: re, userId: ie } = gt(),
    H = E(nn),
    ae = B.trim().toLowerCase(),
    oe = L === `pinned`,
    se;
  t[12] === oe ? (se = t[13]) : ((se = { enabled: oe }), (t[12] = oe), (t[13] = se));
  let {
      data: le,
      hasNextPage: ue,
      isFetchNextPageError: fe,
      isFetchingNextPage: pe,
      isLoading: he,
      isError: ge,
      fetchNextPage: ye,
      refetch: be,
    } = de(me, { accountId: re, userId: ie, query: ae }, se),
    Se = L !== `owned` && L !== `pinned`,
    Ce;
  t[14] === Se
    ? (Ce = t[15])
    : ((Ce = { ...He, enabled: Se, staleTime: v.THIRTY_SECONDS }), (t[14] = Se), (t[15] = Ce));
  let { data: Te, isLoading: Ee } = k(Ce),
    De = D && Te?.supports_editable_listing !== !1,
    U = L === `pinned` || De ? L : `owned`,
    ke = U === `shared` || U === `all`,
    W = ke && Te?.enabled === !0 && Te.supports_workspace_listing,
    Ae = ke && Ee,
    je = U !== `owned` && U !== `pinned` && !W && !Ae,
    Me;
  t[16] === je
    ? (Me = t[17])
    : ((Me = { ...Et, staleTime: v.FIVE_MINUTES, enabled: je }), (t[16] = je), (t[17] = Me));
  let {
      data: Pe,
      error: G,
      hasNextPage: Fe,
      isFetchNextPageError: Ie,
      isFetchingNextPage: Le,
      isLoading: K,
      isError: Re,
      fetchNextPage: ze,
      refetch: Ve,
    } = m(Me),
    Ue = U !== `shared` && U !== `pinned`,
    We;
  t[18] === Ue
    ? (We = t[19])
    : ((We = { ...Be, enabled: Ue, staleTime: v.FIVE_MINUTES }), (t[18] = Ue), (t[19] = We));
  let {
      data: Ge,
      hasNextPage: qe,
      isFetchNextPageError: Je,
      isFetchingNextPage: Ye,
      isLoading: Xe,
      isError: Qe,
      fetchNextPage: $e,
      refetch: et,
    } = m(We),
    {
      data: tt,
      hasNextPage: rt,
      isFetchNextPageError: it,
      isFetchingNextPage: at,
      isLoading: ot,
      isError: st,
      fetchNextPage: ct,
      refetch: lt,
    } = m({ ...ve(ae), enabled: W, staleTime: v.THIRTY_SECONDS }),
    ut = te(),
    dt;
  t[20] !== n || t[21] !== Ie || t[22] !== ut || t[23] !== U || t[24] !== I || t[25] !== G || t[26] !== W
    ? ((dt = () => {
        U === `owned` ||
          U === `pinned` ||
          W ||
          Ie ||
          !(G instanceof ee) ||
          G.status !== 400 ||
          (ut.setQueryData(He.queryKey, Tn),
          I(
            (e) => {
              let t = new URLSearchParams(e);
              return (n == null ? t.delete(`view`) : t.set(`view`, `owned`), t);
            },
            { replace: !0 },
          ));
      }),
      (t[20] = n),
      (t[21] = Ie),
      (t[22] = ut),
      (t[23] = U),
      (t[24] = I),
      (t[25] = G),
      (t[26] = W),
      (t[27] = dt))
    : (dt = t[27]);
  let ft = (0, Q.useEffectEvent)(dt),
    pt;
  t[28] === ft
    ? (pt = t[29])
    : ((pt = () => {
        ft();
      }),
      (t[28] = ft),
      (t[29] = pt));
  let mt;
  (t[30] !== Ie || t[31] !== ut || t[32] !== U || t[33] !== G || t[34] !== W
    ? ((mt = [ut, U, W, G, Ie]),
      (t[30] = Ie),
      (t[31] = ut),
      (t[32] = U),
      (t[33] = G),
      (t[34] = W),
      (t[35] = mt))
    : (mt = t[35]),
    (0, Q.useEffect)(pt, mt));
  let ht = {
      hasNextPage: ue,
      isFetchNextPageError: fe,
      isFetchingNextPage: pe,
      isLoading: he,
      isError: ge,
      fetchNextPage: ye,
      refetch: be,
    },
    _t = {
      hasNextPage: Fe,
      isFetchNextPageError: Ie,
      isFetchingNextPage: Le,
      isLoading: K,
      isError: Re,
      fetchNextPage: ze,
      refetch: Ve,
    },
    vt = {
      hasNextPage: qe,
      isFetchNextPageError: Je,
      isFetchingNextPage: Ye,
      isLoading: Xe,
      isError: Qe,
      fetchNextPage: $e,
      refetch: et,
    },
    yt = W
      ? {
          hasNextPage: rt,
          isFetchNextPageError: it,
          isFetchingNextPage: at,
          isLoading: ot,
          isError: st,
          fetchNextPage: ct,
          refetch: lt,
        }
      : _t,
    J = { pinned: [ht], all: [vt, yt], owned: [vt], shared: [yt] }[U],
    bt = J.some(wn),
    St = J.some(Cn),
    Ct = J.some(Sn),
    Tt = Ae || J.some(xn),
    Dt = (e) => {
      let t = e !== void 0 && e;
      for (let e of J)
        e.hasNextPage && !e.isFetchingNextPage && e.isFetchNextPageError === t && e.fetchNextPage();
    },
    Ot = _e(),
    kt = (e) =>
      e.title.toLowerCase().includes(ae) ||
      e.slug.toLowerCase().includes(ae) ||
      e.description?.toLowerCase().includes(ae) === !0,
    At = W ? tt : Pe,
    jt = U === `owned` ? Ge : At;
  U === `pinned`
    ? (jt = le)
    : U === `all` &&
      (jt =
        Ge == null && At == null
          ? void 0
          : (0, qn.default)([...(Ge?.filter(kt).map(bn) ?? []), ...(At ?? [])], `id`).sort(yn));
  let Mt =
      jt?.filter(
        (e) => (U !== `shared` || W || e.current_user_role !== `owner`) && (U === `pinned` || W || kt(e)),
      ) ?? null,
    Pt = J.some(vn),
    Ft = S.formatMessage({
      id: `appgenPage.sites.search`,
      defaultMessage: `Search sites`,
      description: `Accessible label and placeholder for searching Sites`,
    }),
    It;
  t[36] !== n?.state || t[37] !== o || t[38] !== Ot
    ? ((It = () => {
        (Oe(o, {
          action: _.CODEX_APPGEN_INTERACTION_ACTION_CREATE_SITE_CLICKED,
          source: c.CODEX_APPGEN_INTERACTION_SOURCE_SITES,
        }),
          xe(o, Ot, { type: `create` }, n?.state));
      }),
      (t[36] = n?.state),
      (t[37] = o),
      (t[38] = Ot),
      (t[39] = It))
    : (It = t[39]);
  let Lt = It,
    Rt;
  t[40] !== n?.state || t[41] !== o || t[42] !== Ot
    ? ((Rt = (e, t, r) => {
        xe(
          o,
          Ot,
          {
            type: r === void 0 ? `edit` : r,
            liveUrl: t,
            projectId: e.id,
            projectTitle: e.title,
            latestEditContext: e.latest_edit_context,
          },
          n?.state,
        );
      }),
      (t[40] = n?.state),
      (t[41] = o),
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
    Y = De || O,
    Ht;
  t[46] !== n ||
  t[47] !== De ||
  t[48] !== S ||
  t[49] !== C ||
  t[50] !== O ||
  t[51] !== U ||
  t[52] !== I ||
  t[53] !== Y
    ? ((Ht = Y
        ? (0, $.jsx)(Ze, {
            ariaLabel: S.formatMessage({
              id: `appgenPage.views.label`,
              defaultMessage: `Site views`,
              description: `Accessible label for switching between owned, shared, and pinned sites`,
            }),
            tabs: [
              ...(n == null || !De
                ? []
                : [
                    {
                      key: `all`,
                      panelId: `${C}-all`,
                      name: (0, $.jsx)(l, {
                        id: `appgenPage.ownership.all`,
                        defaultMessage: `All`,
                        description: `Tab listing owned sites and sites shared with the current user`,
                      }),
                    },
                  ]),
              ...(O
                ? [
                    {
                      key: `pinned`,
                      panelId: `${C}-pinned`,
                      name: (0, $.jsx)(l, {
                        id: `appgenPage.pins.tab`,
                        defaultMessage: `Pinned`,
                        description: `Tab listing the current user's pinned sites`,
                      }),
                    },
                  ]
                : []),
              {
                key: `owned`,
                panelId: `${C}-owned`,
                name:
                  n == null
                    ? (0, $.jsx)(l, {
                        id: `appgenPage.ownership.owned`,
                        defaultMessage: `Owned by you`,
                        description: `Tab listing sites owned by the current user`,
                      })
                    : (0, $.jsx)(l, {
                        id: `appgenPage.ownership.yours`,
                        defaultMessage: `Your sites`,
                        description: `Tab listing sites owned by the current user`,
                      }),
              },
              ...(De
                ? [
                    {
                      key: `shared`,
                      panelId: `${C}-shared`,
                      name: (0, $.jsx)(l, {
                        id: `appgenPage.ownership.shared`,
                        defaultMessage: `Shared with you`,
                        description: `Tab listing sites shared with the current user`,
                      }),
                    },
                  ]
                : []),
            ],
            selectedKey: U,
            variant: `browse`,
            scrollable: !0,
            onSelect: (e) => {
              (z(``),
                I((t) => {
                  let r = new URLSearchParams(t);
                  return (
                    r.delete(`search`),
                    e === `shared` || e === `pinned` || (n != null && e === `owned`)
                      ? r.set(`view`, e)
                      : r.delete(`view`),
                    r
                  );
                }));
            },
          })
        : void 0),
      (t[46] = n),
      (t[47] = De),
      (t[48] = S),
      (t[49] = C),
      (t[50] = O),
      (t[51] = U),
      (t[52] = I),
      (t[53] = Y),
      (t[54] = Ht))
    : (Ht = t[54]);
  let Ut = Ht,
    Wt;
  t[55] === S
    ? (Wt = t[56])
    : ((Wt = S.formatMessage({
        id: `appgenPage.title`,
        defaultMessage: `Sites`,
        description: `Header title for the Sites page`,
      })),
      (t[55] = S),
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
      id: Y ? `${C}-${U}` : void 0,
      "aria-labelledby": Y ? `${C}-${U}-tab` : void 0,
      role: Y ? `tabpanel` : void 0,
      tabIndex: Y ? 0 : void 0,
      className: `mx-auto flex min-h-full w-full flex-1 flex-col bg-surface`,
      children: [
        Gt,
        (0, $.jsx)(En, {
          onNavigateToSite: r,
          pinned: U === `pinned`,
          hasNextPage: bt,
          isFetchNextPageError: St,
          isFetchingNextPage: Ct,
          isLoading: Tt,
          projects: Pt && !Mt?.length ? null : Mt,
          emptyStateShared: U === `shared`,
          searchQuery: B.trim(),
          shared: U !== `owned`,
          viewMode: H,
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
  t[62] !== o || t[63] !== H
    ? ((Yt = (e) => {
        e !== H && (wt(o, e), o.set(nn, e));
      }),
      (t[62] = o),
      (t[63] = H),
      (t[64] = Yt))
    : (Yt = t[64]);
  let Xt = Yt;
  if (a != null)
    return a({
      tabs: Ut,
      children: Jt,
      searchQuery: B,
      onSearchQueryChange: ne,
      searchPlaceholder: Ft,
      searchMaxLength: W || U === `pinned` ? 200 : void 0,
      viewMode: H,
      onViewModeChange: Xt,
    });
  let Zt;
  t[65] === Symbol.for(`react.memo_cache_sentinel`) ? ((Zt = { 16: j, 20: b }), (t[65] = Zt)) : (Zt = t[65]);
  let Qt = T ? `browser:max-md:sr-only` : void 0,
    $t;
  t[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($t = (0, $.jsx)(l, {
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
  t[69] !== Lt || t[70] !== T || t[71] !== en
    ? ((rn = (0, $.jsx)(we, { color: `primary`, icon: Zt, onClick: Lt, squareOnMobile: T, children: en })),
      (t[69] = Lt),
      (t[70] = T),
      (t[71] = en),
      (t[72] = rn))
    : (rn = t[72]);
  let an, on;
  t[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((an = (0, $.jsx)(l, {
        id: `appgenPage.title`,
        defaultMessage: `Sites`,
        description: `Header title for the Sites page`,
      })),
      (on = (0, $.jsx)(l, {
        id: `codexAppgenAnnouncementModal.title`,
        defaultMessage: `Turn your ideas into live websites`,
        description: `Title for the Sites announcement modal`,
      })),
      (t[73] = an),
      (t[74] = on))
    : ((an = t[73]), (on = t[74]));
  let sn = W || U === `pinned` ? 200 : void 0,
    cn;
  t[75] !== Ft || t[76] !== B || t[77] !== ne || t[78] !== sn
    ? ((cn = {
        id: `appgen-site-search`,
        autoFocus: !1,
        variant: `toolbar-compact`,
        label: Ft,
        maxLength: sn,
        onSearchQueryChange: ne,
        placeholder: Ft,
        searchQuery: B,
      }),
      (t[75] = Ft),
      (t[76] = B),
      (t[77] = ne),
      (t[78] = sn),
      (t[79] = cn))
    : (cn = t[79]);
  let ln;
  return (
    t[80] !== Xt || t[81] !== H
      ? ((ln = (0, $.jsx)(tn, { viewMode: H, onViewModeChange: Xt })),
        (t[80] = Xt),
        (t[81] = H),
        (t[82] = ln))
      : (ln = t[82]),
    (0, $.jsx)(`div`, {
      className: `flex h-full min-h-0 flex-col bg-surface`,
      children: (0, $.jsx)(Ne, {
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
      emptyStateShared: r,
      hasNextPage: i,
      isFetchNextPageError: a,
      isFetchingNextPage: o,
      isLoading: s,
      onCreate: c,
      onEdit: u,
      onNavigateToSite: d,
      onLoadNextPage: f,
      onRetryNextPage: p,
      onRetry: m,
      pinned: h,
      projects: g,
      searchQuery: _,
      shared: v,
      viewMode: y,
    } = e,
    b = p === void 0 ? f : p,
    x = h !== void 0 && h;
  if (s) {
    let e;
    return (
      t[0] !== v || t[1] !== y
        ? ((e = (0, $.jsx)(Dn, { shared: v, viewMode: y })), (t[0] = v), (t[1] = y), (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (g == null) {
    let e;
    return (t[3] === m ? (e = t[4]) : ((e = (0, $.jsx)(Mn, { onRetry: m })), (t[3] = m), (t[4] = e)), e);
  }
  if (g.length === 0 && !i && !a) {
    let e;
    return (
      t[5] !== r || t[6] !== c || t[7] !== x || t[8] !== _ || t[9] !== v
        ? ((e =
            _.length > 0
              ? (0, $.jsx)(Ft, { query: _ })
              : (0, $.jsx)(jn, { pinned: x, onCreate: c, shared: r ?? v })),
          (t[5] = r),
          (t[6] = c),
          (t[7] = x),
          (t[8] = _),
          (t[9] = v),
          (t[10] = e))
        : (e = t[10]),
      e
    );
  }
  let S;
  t[11] !== i ||
  t[12] !== o ||
  t[13] !== u ||
  t[14] !== f ||
  t[15] !== d ||
  t[16] !== g ||
  t[17] !== v ||
  t[18] !== y
    ? ((S = (0, $.jsx)(Nn, {
        projects: g,
        hasNextPage: i,
        isFetchingNextPage: o,
        onEdit: u,
        onNavigateToSite: d,
        onLoadNextPage: f,
        shared: v,
        viewMode: y,
      })),
      (t[11] = i),
      (t[12] = o),
      (t[13] = u),
      (t[14] = f),
      (t[15] = d),
      (t[16] = g),
      (t[17] = v),
      (t[18] = y),
      (t[19] = S))
    : (S = t[19]);
  let C;
  t[20] !== a || t[21] !== o || t[22] !== b
    ? ((C = a
        ? (0, $.jsxs)(`div`, {
            className: `flex items-center justify-center gap-3 py-6 text-sm text-secondary`,
            role: `alert`,
            children: [
              (0, $.jsx)(l, {
                id: `appgenPage.pagination.error`,
                defaultMessage: `Unable to load more sites`,
                description: `Error below the Sites list when a later page fails to load and the list may be incomplete`,
              }),
              (0, $.jsx)(n, {
                color: `outline`,
                size: `toolbar`,
                loading: o,
                onClick: b,
                children: (0, $.jsx)(l, {
                  id: `appgenPage.pagination.retry`,
                  defaultMessage: `Retry`,
                  description: `Button to retry loading the failed next page of Sites without reloading already loaded sites`,
                }),
              }),
            ],
          })
        : null),
      (t[20] = a),
      (t[21] = o),
      (t[22] = b),
      (t[23] = C))
    : (C = t[23]);
  let w;
  return (
    t[24] !== S || t[25] !== C
      ? ((w = (0, $.jsxs)($.Fragment, { children: [S, C] })), (t[24] = S), (t[25] = C), (t[26] = w))
      : (w = t[26]),
    w
  );
}
function Dn(e) {
  let t = (0, Z.c)(12),
    { shared: n, viewMode: r } = e,
    i = q(`262557526`),
    a = q(`60299493`),
    o = (0, Q.useId)(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(l, {
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
  let u;
  t[3] !== i || t[4] !== n || t[5] !== a || t[6] !== r
    ? ((u =
        r === `grid`
          ? (0, $.jsx)(`div`, {
              className: `grid grid-cols-1 gap-6 pt-4 @md:grid-cols-2 @2xl:grid-cols-3 @5xl:grid-cols-4`,
              children: Array.from({ length: 6 }, On),
            })
          : (0, $.jsx)(`div`, {
              className: `@container`,
              children: (0, $.jsxs)(`div`, {
                className: R(`grid`, Rn(n, i && a)),
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
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== o || t[9] !== c || t[10] !== u
      ? ((d = (0, $.jsxs)(`section`, {
          "aria-busy": `true`,
          "aria-labelledby": o,
          className: `@container pb-3`,
          "data-testid": `sites-loading-skeleton`,
          role: `status`,
          children: [c, u],
        })),
        (t[8] = o),
        (t[9] = c),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
function On(e, t) {
  return (0, $.jsx)(kn, {}, t);
}
function kn() {
  let e = (0, Z.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, $.jsx)(K, {
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
                    (0, $.jsx)(K, { className: `w-28 max-w-[75%]`, size: `sm`, variant: `chatgpt-project` }),
                    (0, $.jsx)(K, {
                      className: `mt-2 w-36 max-w-[90%]`,
                      size: `sm`,
                      variant: `chatgpt-project`,
                    }),
                  ],
                }),
                (0, $.jsx)(K, {
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
    r = q(`262557526`),
    i = q(`60299493`),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(K, { className: `h-[50px] w-20 shrink-0`, size: `fill`, variant: `chatgpt-project` })),
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
              (0, $.jsx)(K, { className: `w-44 max-w-[58%]`, size: `sm`, variant: `chatgpt-project` }),
              (0, $.jsx)(K, { className: `mt-2 w-24`, size: `sm`, variant: `chatgpt-project` }),
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
              (0, $.jsx)(K, { className: `size-5 shrink-0`, size: `fill`, variant: `chatgpt-project` }),
              (0, $.jsx)(K, { className: `w-20`, size: `sm`, variant: `chatgpt-project` }),
            ],
          })
        : null),
      (t[2] = n),
      (t[3] = s));
  let c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(`div`, {
        className: `hidden min-w-0 ps-4 [@container_(min-width:521px)]:block`,
        children: (0, $.jsx)(K, { className: `w-20`, size: `sm`, variant: `chatgpt-project` }),
      })),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] !== r || t[6] !== i
    ? ((l =
        r && i
          ? (0, $.jsx)(`div`, {
              className: `hidden min-w-0 ps-4 [@container_(min-width:521px)]:block`,
              children: (0, $.jsx)(K, { className: `w-20`, size: `sm`, variant: `chatgpt-project` }),
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
          (0, $.jsx)(K, { className: `h-9 w-[84px]`, size: `fill`, variant: `chatgpt-project` }),
          (0, $.jsx)(K, { className: `size-9`, size: `fill`, variant: `chatgpt-project` }),
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
    { onCreate: r, pinned: i, shared: a } = e,
    o = i !== void 0 && i,
    s = a !== void 0 && a,
    c,
    u;
  if (o) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(l, {
          id: `appgenPage.pins.empty.title`,
          defaultMessage: `No pinned sites yet`,
          description: `Empty state title when the user has not pinned any sites`,
        })),
        (t[0] = e))
      : (e = t[0]),
      (c = e));
    let n;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(l, {
          id: `appgenPage.pins.empty.description`,
          defaultMessage: `Choose “Pin” from a site's menu to find it here`,
          description: `Instructions for adding sites to the empty Pinned tab`,
        })),
        (t[1] = n))
      : (n = t[1]),
      (u = n));
  } else if (s) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(l, {
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
      ? ((e = (0, $.jsx)(l, {
          id: `appgenPage.empty.title`,
          defaultMessage: `No sites yet`,
          description: `Empty state title for the Sites page`,
        })),
        (t[3] = e))
      : (e = t[3]),
      (c = e));
    let n;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(l, {
          id: `appgenPage.empty.description`,
          defaultMessage: `Build websites and apps with databases and sign-in—try “Build a team dashboard” or “Create an event signup page”`,
          description: `Explanation shown to a first-time Sites user: they can create websites and applications with databases and authentication by asking for a team dashboard or event signup page`,
        })),
        (t[4] = n))
      : (n = t[4]),
      (u = n));
  }
  let d;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, $.jsx)(`span`, {
        className: `flex size-12 shrink-0 items-center justify-center rounded-xl bg-background-secondary-soft`,
        children: (0, $.jsx)(p, { asset: T }),
      })),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] !== r || t[7] !== o || t[8] !== s
    ? ((f =
        s || o
          ? void 0
          : (0, $.jsx)(n, {
              color: `primary`,
              size: `toolbar`,
              onClick: r,
              children: (0, $.jsx)(l, {
                id: `appgenPage.empty.create`,
                defaultMessage: `Create new site`,
                description: `Button label for creating a new site from the empty state`,
              }),
            })),
      (t[6] = r),
      (t[7] = o),
      (t[8] = s),
      (t[9] = f))
    : (f = t[9]);
  let m;
  return (
    t[10] !== u || t[11] !== f || t[12] !== c
      ? ((m = (0, $.jsx)(pe, {
          className: `max-w-lg self-center text-balance select-none`,
          layout: `page`,
          spacing: `default`,
          illustration: d,
          title: c,
          description: u,
          actions: f,
        })),
        (t[10] = u),
        (t[11] = f),
        (t[12] = c),
        (t[13] = m))
      : (m = t[13]),
    m
  );
}
function Mn(e) {
  let t = (0, Z.c)(4),
    { onRetry: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(l, {
        id: `appgenPage.error.title`,
        defaultMessage: `Unable to load sites`,
        description: `Error state title for the Sites page`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(l, {
        id: `appgenPage.error.retry`,
        defaultMessage: `Retry`,
        description: `Button label in the Sites error state that retries loading the user's Sites list`,
      })),
      (t[1] = a))
    : (a = t[1]);
  let o;
  return (
    t[2] === r
      ? (o = t[3])
      : ((o = (0, $.jsx)(pe, {
          layout: `browse`,
          title: i,
          actions: (0, $.jsx)(n, { color: `primary`, size: `toolbar`, onClick: r, children: a }),
        })),
        (t[2] = r),
        (t[3] = o)),
    o
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
    u = q(`262557526`),
    d = q(`60299493`),
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
    h;
  t[5] === m ? (h = t[6]) : ((h = { enabled: m }), (t[5] = m), (t[6] = h));
  let { data: g } = de(et, p, h),
    _ = p.length > 0,
    v;
  t[7] === _ ? (v = t[8]) : ((v = { enabled: _ }), (t[7] = _), (t[8] = v));
  let { data: y } = E(rt, v),
    b;
  t[9] === y?.items ? (b = t[10]) : ((b = new Set(y?.items.map(Fn))), (t[9] = y?.items), (t[10] = b));
  let x = b,
    S;
  t[11] !== g || t[12] !== x
    ? ((S = new Set(g?.filter((e) => e.automation_ids.some((e) => x.has(e))).map(Pn))),
      (t[11] = g),
      (t[12] = x),
      (t[13] = S))
    : (S = t[13]);
  let C = S,
    w,
    T;
  if (t[14] !== u || t[15] !== c || t[16] !== d || t[17] !== l) {
    let e =
        l === `grid` ? `grid-cols-1 gap-6 @md:grid-cols-2 @2xl:grid-cols-3 @5xl:grid-cols-4` : Rn(c, u && d),
      n = l === `grid` && `pt-4`;
    (t[20] === n ? (T = t[21]) : ((T = R(`@container pb-3`, n)), (t[20] = n), (t[21] = T)),
      (w = R(`grid`, e)),
      (t[14] = u),
      (t[15] = c),
      (t[16] = d),
      (t[17] = l),
      (t[18] = w),
      (t[19] = T));
  } else ((w = t[18]), (T = t[19]));
  let D = l === `grid` ? `sites-grid` : `sites-table`,
    O;
  t[22] !== c || t[23] !== l
    ? ((O = l === `list` ? (0, $.jsx)(zn, { shared: c }) : null), (t[22] = c), (t[23] = l), (t[24] = O))
    : (O = t[24]);
  let k;
  if (t[25] !== C || t[26] !== i || t[27] !== a || t[28] !== s || t[29] !== c || t[30] !== l) {
    let e;
    (t[32] !== C || t[33] !== i || t[34] !== a || t[35] !== c || t[36] !== l
      ? ((e = (e) =>
          (0, $.jsx)(
            Bn,
            {
              project: e,
              hasAutomations: (!c || e.current_user_role === `owner`) && C.has(e.id),
              shared: c,
              onEdit: i,
              onNavigateToSite: a,
              viewMode: l,
            },
            e.id,
          )),
        (t[32] = C),
        (t[33] = i),
        (t[34] = a),
        (t[35] = c),
        (t[36] = l),
        (t[37] = e))
      : (e = t[37]),
      (k = s.map(e)),
      (t[25] = C),
      (t[26] = i),
      (t[27] = a),
      (t[28] = s),
      (t[29] = c),
      (t[30] = l),
      (t[31] = k));
  } else k = t[31];
  let A;
  t[38] !== D || t[39] !== O || t[40] !== k || t[41] !== null || t[42] !== w
    ? ((A = (0, $.jsxs)(`div`, { className: w, "data-testid": D, children: [O, k, null] })),
      (t[38] = D),
      (t[39] = O),
      (t[40] = k),
      (t[41] = null),
      (t[42] = w),
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
    ? ((M = (0, $.jsx)(yt, {
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
    t[53] !== A || t[54] !== M || t[55] !== T
      ? ((N = (0, $.jsxs)(`div`, { className: T, children: [A, M] })),
        (t[53] = A),
        (t[54] = M),
        (t[55] = T),
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
    i = q(`262557526`),
    a = q(`60299493`),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(`span`, {
        className: `sr-only`,
        children: (0, $.jsx)(l, {
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
                  className: R(`grid`, Rn(n, i && a)),
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
    r = q(`262557526`),
    i = q(`60299493`),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(`div`, {
        className: `flex min-w-0 items-center gap-4`,
        children: (0, $.jsx)(`span`, {
          className: `min-w-0 flex-1`,
          children: (0, $.jsx)(l, {
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
            children: (0, $.jsx)(l, {
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
        children: (0, $.jsx)(l, {
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
              children: (0, $.jsx)(l, {
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
  let u;
  return (
    t[7] !== o || t[8] !== c
      ? ((u = (0, $.jsxs)(`div`, {
          className: `col-span-full grid h-10.5 grid-cols-subgrid items-center border-b border-subtle px-4 text-sm leading-5 text-secondary select-none [&:has(+_[data-appgen-row]:hover)]:border-transparent`,
          children: [a, o, s, c],
        })),
        (t[7] = o),
        (t[8] = c),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function Bn(e) {
  let t = (0, Z.c)(55),
    { hasAutomations: n, onEdit: r, onNavigateToSite: i, project: a, shared: o, viewMode: s } = e,
    l = u(ot),
    d = w(),
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = { mounted: !1 }), (t[0] = f)) : (f = t[0]);
  let p = (0, Q.useRef)(f),
    m;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = () => {
        let e = { mounted: !0 };
        return (
          (p.current = e),
          () => {
            ((e.mounted = !1), e.closeExternalOpen?.());
          }
        );
      }),
      (t[1] = m))
    : (m = t[1]);
  let h;
  (t[2] !== a.id || t[3] !== l ? ((h = [l, a.id]), (t[2] = a.id), (t[3] = l), (t[4] = h)) : (h = t[4]),
    (0, Q.useEffect)(m, h));
  let g = a.status === `suspended`,
    v = g ? null : a.live_url,
    y = o ? a.current_user_role === `owner` : a.current_user_role !== `editor`,
    b = y || a.current_user_role === `editor`,
    x = q(`1498265771`) && i != null && b && v != null,
    S;
  t[5] !== d || t[6] !== v || t[7] !== i || t[8] !== a.id || t[9] !== a.title || t[10] !== l || t[11] !== s
    ? ((S = async (e) => {
        if (v == null) return;
        let t = l.get(vt),
          n = l.get(Ee),
          r = l.get(st.activeTab$)?.tabId,
          o = p.current,
          c = l.get(lt),
          u = Symbol(),
          f = (e) => {
            let i = e === void 0 ? l : e;
            return (
              o.mounted &&
              i.get(Jn) === u &&
              !Fe() &&
              i.get(vt) === t &&
              i.get(Ee) === n &&
              i.get(st.activeTab$)?.tabId === r
            );
          };
        c && l.set(Jn, u);
        let m = v,
          h = !0;
        if (c && !e?.metaKey && !e?.ctrlKey && !e?.shiftKey && !e?.altKey) {
          try {
            let e = await l.query.fetch(Pe, a.id);
            if (e.live_url == null) return;
            m = e.live_url;
          } catch {
            h = !1;
          }
          if (!f()) return;
        }
        let g = (t) => {
          let n = s === `grid` ? qe.CHATGPT_SITES_SOURCE_HOME_GRID : qe.CHATGPT_SITES_SOURCE_HOME_LIST;
          try {
            Re(l, Te, {
              interactionType: t,
              projectId: a.id,
              source: e == null ? qe.CHATGPT_SITES_SOURCE_HOME_SITE_MENU : n,
            });
          } catch {}
        };
        if (
          h &&
          ge(l, { type: `appgen-app`, projectId: a.id, title: a.title, url: m }, e, !0, i, `full-width`)
        ) {
          g(Ae.CHATGPT_SITES_INTERACTION_TYPE_PREVIEW_OPENED);
          return;
        }
        let _ = (e) => {
          (e == null
            ? Je({
                href: m,
                initiator: `sites_library`,
                openTarget: `external-browser`,
                disposition: `new-tab`,
              })
            : Ge({
                event: e,
                href: m,
                initiator: `sites_library`,
                openTarget: `external-browser`,
                disposition: `new-tab`,
              })) && g(Ae.CHATGPT_SITES_INTERACTION_TYPE_SITE_OPENED);
        };
        if (c && navigator.userActivation?.isActive === !1) {
          o.closeExternalOpen?.();
          let e,
            t = () => {
              (e?.(),
                (e = void 0),
                window.removeEventListener(ft, r),
                o.closeExternalOpen === n && (o.closeExternalOpen = void 0));
            },
            n = () => {
              (i.close(), t());
            },
            r = () => {
              f() || n();
            },
            i = l
              .get(z)
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
          ((o.closeExternalOpen = n),
            window.addEventListener(ft, r),
            (e = l.watch((e) => {
              f(e) || n();
            })),
            r());
          return;
        }
        _(e);
      }),
      (t[5] = d),
      (t[6] = v),
      (t[7] = i),
      (t[8] = a.id),
      (t[9] = a.title),
      (t[10] = l),
      (t[11] = s),
      (t[12] = S))
    : (S = t[12]);
  let C = S,
    T;
  t[13] !== C || t[14] !== v || t[15] !== r || t[16] !== x || t[17] !== a || t[18] !== l
    ? ((T = (e) => {
        if (x) {
          C(e);
          return;
        }
        (Oe(l, {
          action: _.CODEX_APPGEN_INTERACTION_ACTION_EDIT_WITH_CHAT_CLICKED,
          projectId: a.id,
          source: c.CODEX_APPGEN_INTERACTION_SOURCE_SITES,
        }),
          r(a, v, `edit`));
      }),
      (t[13] = C),
      (t[14] = v),
      (t[15] = r),
      (t[16] = x),
      (t[17] = a),
      (t[18] = l),
      (t[19] = T))
    : (T = t[19]);
  let E = T,
    D;
  t[20] !== d || t[21] !== x || t[22] !== a.title
    ? ((D = x
        ? d.formatMessage(
            {
              id: `appgenPage.visit`,
              defaultMessage: `Visit {siteTitle}`,
              description: `Accessible label for opening a live site from the sites list`,
            },
            { siteTitle: a.title },
          )
        : d.formatMessage(
            {
              id: `appgenPage.edit`,
              defaultMessage: `Edit {siteTitle}`,
              description: `Accessible label for starting a new conversation to edit a site from the sites list`,
            },
            { siteTitle: a.title },
          )),
      (t[20] = d),
      (t[21] = x),
      (t[22] = a.title),
      (t[23] = D))
    : (D = t[23]);
  let O = D,
    k = a.status === `active` && a.live_url == null,
    A;
  t[24] !== C || t[25] !== x
    ? ((A = x ? (e) => void C(e) : void 0), (t[24] = C), (t[25] = x), (t[26] = A))
    : (A = t[26]);
  let j;
  t[27] !== v || t[28] !== r || t[29] !== a
    ? ((j = (e) => r(a, v, e)), (t[27] = v), (t[28] = r), (t[29] = a), (t[30] = j))
    : (j = t[30]);
  let M;
  t[31] !== E || t[32] !== n || t[33] !== i || t[34] !== O || t[35] !== a || t[36] !== o || t[37] !== s
    ? ((M = (e) =>
        s === `grid`
          ? (0, $.jsx)(Hn, { actions: e, onOpen: E, openLabel: O, project: a, shared: o })
          : (0, $.jsx)(Vn, {
              actions: e,
              hasAutomations: n,
              onOpen: E,
              openLabel: O,
              onNavigateToSite: i,
              project: a,
              shared: o,
            })),
      (t[31] = E),
      (t[32] = n),
      (t[33] = i),
      (t[34] = O),
      (t[35] = a),
      (t[36] = o),
      (t[37] = s),
      (t[38] = M))
    : (M = t[38]);
  let N;
  return (
    t[39] !== b ||
    t[40] !== y ||
    t[41] !== n ||
    t[42] !== g ||
    t[43] !== v ||
    t[44] !== i ||
    t[45] !== a.disabled_by ||
    t[46] !== a.id ||
    t[47] !== a.is_pinned ||
    t[48] !== a.title ||
    t[49] !== M ||
    t[50] !== k ||
    t[51] !== A ||
    t[52] !== j ||
    t[53] !== s
      ? ((N = (0, $.jsx)(Qt, {
          canEdit: b,
          canManage: y,
          initialIsOwner: y,
          disabled: g,
          disabledBy: a.disabled_by,
          hasAutomations: n,
          isPinned: a.is_pinned,
          liveUrl: v,
          projectId: a.id,
          projectTitle: a.title,
          surface: `sites`,
          unpublished: k,
          viewMode: s,
          onNavigateToSite: i,
          onPreview: A,
          onEdit: j,
          children: M,
        })),
        (t[39] = b),
        (t[40] = y),
        (t[41] = n),
        (t[42] = g),
        (t[43] = v),
        (t[44] = i),
        (t[45] = a.disabled_by),
        (t[46] = a.id),
        (t[47] = a.is_pinned),
        (t[48] = a.title),
        (t[49] = M),
        (t[50] = k),
        (t[51] = A),
        (t[52] = j),
        (t[53] = s),
        (t[54] = N))
      : (N = t[54]),
    N
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
    u = w(),
    d = q(`262557526`),
    f = q(`60299493`),
    p = s.live_url,
    m = s.status === `suspended`,
    h = s.status === `active` && p == null,
    g = m ? null : p,
    _ = s.owner,
    v = c ? s.current_user_role === `owner` : s.current_user_role !== `editor`,
    y = v || s.current_user_role === `editor`,
    b;
  t[0] === s.disabled_by
    ? (b = t[1])
    : ((b = (0, $.jsx)(kt, { disabledBy: s.disabled_by })), (t[0] = s.disabled_by), (t[1] = b));
  let x = b,
    S = !m && `hover:bg-primary-ghost-hover`,
    C;
  t[2] === S
    ? (C = t[3])
    : ((C = R(
        `group/site-row relative col-span-full grid min-h-[82px] grid-cols-subgrid items-center overflow-hidden rounded-xl px-4 py-4 select-none after:pointer-events-none after:absolute after:inset-x-3 after:bottom-0 after:border-b after:border-subtle hover:after:opacity-0`,
        S,
      )),
      (t[2] = S),
      (t[3] = C));
  let T;
  t[4] !== g || t[5] !== y || t[6] !== u || t[7] !== s.title
    ? ((T =
        !y && g != null
          ? (0, $.jsx)(Ct, {
              "aria-label": u.formatMessage(
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
      (t[6] = u),
      (t[7] = s.title),
      (t[8] = T))
    : (T = t[8]);
  let E;
  t[9] !== y || t[10] !== m || t[11] !== i || t[12] !== a
    ? ((E = y
        ? (0, $.jsx)(`button`, {
            "aria-label": a,
            className: `absolute inset-0 cursor-interaction rounded-xl bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
            disabled: m,
            type: `button`,
            onClick: i,
          })
        : null),
      (t[9] = y),
      (t[10] = m),
      (t[11] = i),
      (t[12] = a),
      (t[13] = E))
    : (E = t[13]);
  let D;
  t[14] === s.screenshot_url
    ? (D = t[15])
    : ((D = (0, $.jsx)(Zt, { screenshotUrl: s.screenshot_url, viewMode: `list` })),
      (t[14] = s.screenshot_url),
      (t[15] = D));
  let O;
  t[16] === s.title
    ? (O = t[17])
    : ((O = (0, $.jsx)(`span`, {
        className: `min-w-0 truncate text-base leading-6 text-default`,
        children: s.title,
      })),
      (t[16] = s.title),
      (t[17] = O));
  let k;
  t[18] === s.is_pinned
    ? (k = t[19])
    : ((k = s.is_pinned ? (0, $.jsx)(Un, {}) : null), (t[18] = s.is_pinned), (t[19] = k));
  let A;
  t[20] !== r || t[21] !== o || t[22] !== s.id
    ? ((A = r ? (0, $.jsx)(Wn, { projectId: s.id, onNavigateToSite: o }) : null),
      (t[20] = r),
      (t[21] = o),
      (t[22] = s.id),
      (t[23] = A))
    : (A = t[23]);
  let j;
  t[24] !== x || t[25] !== m || t[26] !== s.disabled_by
    ? ((j = m
        ? (0, $.jsx)(re, {
            interactive: s.disabled_by === `openai`,
            tooltipContent: x,
            children: (0, $.jsx)(Me, {
              className: `pointer-events-auto shrink-0 px-1.5 py-0.5 text-xs font-medium`,
              children: (0, $.jsx)(l, {
                id: `appgenPage.disabledBadge`,
                defaultMessage: `Disabled`,
                description: `Status badge shown next to a site name when the site is disabled`,
              }),
            }),
          })
        : null),
      (t[24] = x),
      (t[25] = m),
      (t[26] = s.disabled_by),
      (t[27] = j))
    : (j = t[27]);
  let M;
  t[28] !== j || t[29] !== O || t[30] !== k || t[31] !== A
    ? ((M = (0, $.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [O, k, A, j] })),
      (t[28] = j),
      (t[29] = O),
      (t[30] = k),
      (t[31] = A),
      (t[32] = M))
    : (M = t[32]);
  let N;
  t[33] === s.updated_at
    ? (N = t[34])
    : ((N = (0, $.jsx)($t, { dateString: s.updated_at })), (t[33] = s.updated_at), (t[34] = N));
  let P;
  t[35] === h
    ? (P = t[36])
    : ((P = h
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(`span`, {
                "aria-hidden": !0,
                className: `size-0.5 shrink-0 rounded-full bg-text-tertiary`,
              }),
              (0, $.jsx)(`span`, {
                className: `truncate`,
                children: (0, $.jsx)(l, {
                  id: `appgenPage.notPublished`,
                  defaultMessage: `Not published`,
                  description: `Sites row status for a Site that has not been published`,
                }),
              }),
            ],
          })
        : null),
      (t[35] = h),
      (t[36] = P));
  let F;
  t[37] === s.sharing
    ? (F = t[38])
    : ((F = (0, $.jsx)(Y, {
        accessState: s.sharing,
        "aria-hidden": !0,
        className: `icon-xs hidden shrink-0 [@container_(max-width:520px)]:block`,
      })),
      (t[37] = s.sharing),
      (t[38] = F));
  let I;
  t[39] !== N || t[40] !== P || t[41] !== F
    ? ((I = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1.5 text-sm leading-5 text-secondary`,
        children: [N, P, F],
      })),
      (t[39] = N),
      (t[40] = P),
      (t[41] = F),
      (t[42] = I))
    : (I = t[42]);
  let L;
  t[43] !== M || t[44] !== I
    ? ((L = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col gap-px`, children: [M, I] })),
      (t[43] = M),
      (t[44] = I),
      (t[45] = L))
    : (L = t[45]);
  let z;
  t[46] !== L || t[47] !== D
    ? ((z = (0, $.jsxs)(`div`, {
        className: `pointer-events-none relative z-10 flex min-w-0 items-center gap-4`,
        children: [D, L],
      })),
      (t[46] = L),
      (t[47] = D),
      (t[48] = z))
    : (z = t[48]);
  let ee;
  t[49] !== _?.email || t[50] !== _?.name || t[51] !== s.current_user_role || t[52] !== c
    ? ((ee = c
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
      (t[53] = ee))
    : (ee = t[53]);
  let B;
  t[54] !== y || t[55] !== v || t[56] !== m || t[57] !== s.id || t[58] !== s.sharing || t[59] !== s.title
    ? ((B = (0, $.jsx)(Kn, {
        accessState: s.sharing,
        canManage: v,
        canViewSharing: y,
        disabled: m,
        projectId: s.id,
        projectTitle: s.title,
        viewMode: `list`,
      })),
      (t[54] = y),
      (t[55] = v),
      (t[56] = m),
      (t[57] = s.id),
      (t[58] = s.sharing),
      (t[59] = s.title),
      (t[60] = B))
    : (B = t[60]);
  let V;
  t[61] !== d ||
  t[62] !== v ||
  t[63] !== m ||
  t[64] !== o ||
  t[65] !== s.id ||
  t[66] !== s.title ||
  t[67] !== f ||
  t[68] !== h
    ? ((V =
        d && f
          ? (0, $.jsx)(`div`, {
              className: `pointer-events-none relative z-10 min-w-0 ps-4 [@container_(max-width:520px)]:hidden`,
              children:
                v && !m && !h
                  ? (0, $.jsx)(cn, { onNavigateToSite: o, projectId: s.id, projectTitle: s.title })
                  : null,
            })
          : null),
      (t[61] = d),
      (t[62] = v),
      (t[63] = m),
      (t[64] = o),
      (t[65] = s.id),
      (t[66] = s.title),
      (t[67] = f),
      (t[68] = h),
      (t[69] = V))
    : (V = t[69]);
  let te;
  return (
    t[70] !== n ||
    t[71] !== z ||
    t[72] !== ee ||
    t[73] !== B ||
    t[74] !== V ||
    t[75] !== C ||
    t[76] !== T ||
    t[77] !== E
      ? ((te = (0, $.jsxs)(`div`, { className: C, "data-appgen-row": !0, children: [T, E, z, ee, B, V, n] })),
        (t[70] = n),
        (t[71] = z),
        (t[72] = ee),
        (t[73] = B),
        (t[74] = V),
        (t[75] = C),
        (t[76] = T),
        (t[77] = E),
        (t[78] = te))
      : (te = t[78]),
    te
  );
}
function Hn(e) {
  let t = (0, Z.c)(55),
    { actions: n, onOpen: r, openLabel: i, project: a, shared: o } = e,
    s = w(),
    c = a.live_url,
    u = a.status === `suspended`,
    d = u ? null : c,
    f = o ? a.current_user_role === `owner` : a.current_user_role !== `editor`,
    p = f || a.current_user_role === `editor`,
    m;
  t[0] === a.disabled_by
    ? (m = t[1])
    : ((m = (0, $.jsx)(kt, { disabledBy: a.disabled_by })), (t[0] = a.disabled_by), (t[1] = m));
  let h = m,
    g;
  t[2] !== d || t[3] !== p || t[4] !== s || t[5] !== a.title
    ? ((g =
        !p && d != null
          ? (0, $.jsx)(Ct, {
              "aria-label": s.formatMessage(
                {
                  id: `appgenPage.visit`,
                  defaultMessage: `Visit {siteTitle}`,
                  description: `Accessible label for opening a live site from the sites grid`,
                },
                { siteTitle: a.title },
              ),
              className: `absolute inset-0 cursor-interaction rounded-2xl bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
              href: d,
              initiator: `sites_library`,
              openTarget: `external-browser`,
            })
          : null),
      (t[2] = d),
      (t[3] = p),
      (t[4] = s),
      (t[5] = a.title),
      (t[6] = g))
    : (g = t[6]);
  let _;
  t[7] !== p || t[8] !== u || t[9] !== r || t[10] !== i
    ? ((_ = p
        ? (0, $.jsx)(`button`, {
            "aria-label": i,
            className: `absolute inset-0 cursor-interaction rounded-2xl bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
            disabled: u,
            type: `button`,
            onClick: r,
          })
        : null),
      (t[7] = p),
      (t[8] = u),
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
  let y = !u && `group-hover/site-card:bg-primary-ghost-hover`,
    b;
  t[14] === y
    ? (b = t[15])
    : ((b = R(
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
  t[20] !== h || t[21] !== u || t[22] !== a.disabled_by
    ? ((C = u
        ? (0, $.jsx)(re, {
            interactive: a.disabled_by === `openai`,
            tooltipContent: h,
            children: (0, $.jsx)(Me, {
              className: `pointer-events-auto shrink-0 px-1.5 py-0.5 text-xs font-medium`,
              children: (0, $.jsx)(l, {
                id: `appgenPage.disabledBadge`,
                defaultMessage: `Disabled`,
                description: `Status badge shown next to a site name when the site is disabled`,
              }),
            }),
          })
        : null),
      (t[20] = h),
      (t[21] = u),
      (t[22] = a.disabled_by),
      (t[23] = C))
    : (C = t[23]);
  let T;
  t[24] !== x || t[25] !== S || t[26] !== C
    ? ((T = (0, $.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [x, S, C] })),
      (t[24] = x),
      (t[25] = S),
      (t[26] = C),
      (t[27] = T))
    : (T = t[27]);
  let E;
  t[28] !== p || t[29] !== f || t[30] !== u || t[31] !== a.id || t[32] !== a.sharing || t[33] !== a.title
    ? ((E = (0, $.jsx)(Kn, {
        accessState: a.sharing,
        canManage: f,
        canViewSharing: p,
        disabled: u,
        projectId: a.id,
        projectTitle: a.title,
        viewMode: `grid`,
      })),
      (t[28] = p),
      (t[29] = f),
      (t[30] = u),
      (t[31] = a.id),
      (t[32] = a.sharing),
      (t[33] = a.title),
      (t[34] = E))
    : (E = t[34]);
  let D;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, $.jsx)(`span`, {
        "aria-hidden": !0,
        className: `size-0.5 shrink-0 rounded-full bg-text-tertiary`,
      })),
      (t[35] = D))
    : (D = t[35]);
  let O;
  t[36] === a.updated_at
    ? (O = t[37])
    : ((O = (0, $.jsx)(`span`, {
        className: `shrink-0 whitespace-nowrap`,
        children: (0, $.jsx)($t, { dateString: a.updated_at }),
      })),
      (t[36] = a.updated_at),
      (t[37] = O));
  let k;
  t[38] !== E || t[39] !== O
    ? ((k = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1.5 text-xs leading-4 text-secondary`,
        children: [E, D, O],
      })),
      (t[38] = E),
      (t[39] = O),
      (t[40] = k))
    : (k = t[40]);
  let A;
  t[41] !== T || t[42] !== k
    ? ((A = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-1 ps-3`, children: [T, k] })),
      (t[41] = T),
      (t[42] = k),
      (t[43] = A))
    : (A = t[43]);
  let j;
  t[44] === n
    ? (j = t[45])
    : ((j = (0, $.jsx)(`div`, {
        className: `pointer-events-auto relative z-10 flex items-center gap-1 pe-2`,
        children: n,
      })),
      (t[44] = n),
      (t[45] = j));
  let M;
  t[46] !== A || t[47] !== j || t[48] !== b
    ? ((M = (0, $.jsxs)(`div`, { className: b, children: [A, j] })),
      (t[46] = A),
      (t[47] = j),
      (t[48] = b),
      (t[49] = M))
    : (M = t[49]);
  let N;
  return (
    t[50] !== M || t[51] !== g || t[52] !== _ || t[53] !== v
      ? ((N = (0, $.jsxs)(`article`, {
          className: `group/site-card relative flex h-64 min-w-0 flex-col overflow-hidden rounded-2xl border border-subtle bg-surface-card shadow-card`,
          children: [g, _, v, M],
        })),
        (t[50] = M),
        (t[51] = g),
        (t[52] = _),
        (t[53] = v),
        (t[54] = N))
      : (N = t[54]),
    N
  );
}
function Un() {
  let e = (0, Z.c)(3),
    t = w(),
    n = q(`1425956883`),
    r;
  return (
    e[0] !== t || e[1] !== n
      ? ((r = n
          ? (0, $.jsx)(d, {
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
    { projectId: r, onNavigateToSite: i } = e,
    a = o(),
    s = w(),
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = s.formatMessage({
        id: `appgenAutomations.indicator`,
        defaultMessage: `View this Site’s schedules`,
        description: `Tooltip and accessible label for the clock icon on a Site with scheduled tasks`,
      })),
      (t[0] = s),
      (t[1] = c));
  let l = c,
    u;
  t[2] !== a || t[3] !== i || t[4] !== r
    ? ((u = () => void (i ?? a)(ht(r))), (t[2] = a), (t[3] = i), (t[4] = r), (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = (0, $.jsx)(O, {})), (t[6] = d)) : (d = t[6]);
  let f;
  t[7] !== l || t[8] !== u
    ? ((f = (0, $.jsx)(n, {
        "aria-label": l,
        className: `pointer-events-auto`,
        color: `ghost`,
        radius: `full`,
        size: `compact`,
        uniform: !0,
        onClick: u,
        children: d,
      })),
      (t[7] = l),
      (t[8] = u),
      (t[9] = f))
    : (f = t[9]);
  let p;
  return (
    t[10] !== l || t[11] !== f
      ? ((p = (0, $.jsx)(re, { tooltipContent: l, children: f })), (t[10] = l), (t[11] = f), (t[12] = p))
      : (p = t[12]),
    p
  );
}
function Gn(e) {
  let t = (0, Z.c)(20),
    { ownerEmail: n, ownerName: r, isCurrentUser: i } = e,
    a = w(),
    o = E(zt),
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
    u = c ?? n ?? ``,
    d = o && `pointer-events-auto`,
    f;
  t[4] === d ? (f = t[5]) : ((f = R(`flex min-w-0 items-center gap-2`, d)), (t[4] = d), (t[5] = f));
  let p;
  t[6] === c
    ? (p = t[7])
    : ((p = (0, $.jsx)(Dt, { alt: ``, name: c, size: `response`, src: null })), (t[6] = c), (t[7] = p));
  let m;
  t[8] === c
    ? (m = t[9])
    : ((m =
        c ??
        (0, $.jsx)(l, {
          id: `appgenPage.ownerUnavailable`,
          defaultMessage: `Owner unavailable`,
          description: `Fallback shown when a shared site's owner display is unavailable`,
        })),
      (t[8] = c),
      (t[9] = m));
  let h;
  t[10] === m
    ? (h = t[11])
    : ((h = (0, $.jsx)(`span`, {
        className: `truncate text-default [@container_(max-width:520px)]:sr-only`,
        children: m,
      })),
      (t[10] = m),
      (t[11] = h));
  let g;
  t[12] !== f || t[13] !== p || t[14] !== h
    ? ((g = (0, $.jsxs)(`span`, { className: f, children: [p, h] })),
      (t[12] = f),
      (t[13] = p),
      (t[14] = h),
      (t[15] = g))
    : (g = t[15]);
  let _;
  return (
    t[16] !== n || t[17] !== u || t[18] !== g
      ? ((_ = (0, $.jsx)(`div`, {
          className: `pointer-events-none relative z-10 flex min-w-0 items-center gap-2 ps-4 text-sm leading-5 [@container_(max-width:520px)]:sr-only`,
          children: (0, $.jsx)(Rt, { accountUserId: null, accountUserEmail: n, label: u, children: g }),
        })),
        (t[16] = n),
        (t[17] = u),
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
      canViewSharing: a,
      canManage: o,
      disabled: s,
      projectId: c,
      projectTitle: d,
      viewMode: f,
    } = e,
    p = o === void 0 || o,
    m = s !== void 0 && s,
    h = u(i),
    g;
  t[0] === r
    ? (g = t[1])
    : ((g = (0, $.jsx)(Y, { className: `icon-xs shrink-0`, accessState: r, "aria-hidden": !0 })),
      (t[0] = r),
      (t[1] = g));
  let _ = f === `list` && `[@container_(max-width:520px)]:sr-only`,
    v;
  t[2] === _ ? (v = t[3]) : ((v = R(`truncate`, _)), (t[2] = _), (t[3] = v));
  let y;
  t[4] === r ? (y = t[5]) : ((y = Ut(r)), (t[4] = r), (t[5] = y));
  let b;
  t[6] !== r || t[7] !== y
    ? ((b = (0, $.jsx)(l, { ...y, values: r })), (t[6] = r), (t[7] = y), (t[8] = b))
    : (b = t[8]);
  let x;
  t[9] !== v || t[10] !== b
    ? ((x = (0, $.jsx)(`span`, { className: v, children: b })), (t[9] = v), (t[10] = b), (t[11] = x))
    : (x = t[11]);
  let S;
  t[12] !== g || t[13] !== x
    ? ((S = (0, $.jsxs)($.Fragment, { children: [g, x] })), (t[12] = g), (t[13] = x), (t[14] = S))
    : (S = t[14]);
  let C = S;
  if (!a) {
    let e =
        f === `list`
          ? `ps-4 text-sm leading-5 text-default [@container_(max-width:520px)]:sr-only`
          : `text-xs leading-4 text-secondary`,
      n;
    t[15] === e
      ? (n = t[16])
      : ((n = R(`pointer-events-none relative z-10 flex min-w-0 items-center gap-1.5 justify-self-start`, e)),
        (t[15] = e),
        (t[16] = n));
    let r;
    return (
      t[17] !== C || t[18] !== n
        ? ((r = (0, $.jsx)(`div`, { className: n, children: C })), (t[17] = C), (t[18] = n), (t[19] = r))
        : (r = t[19]),
      r
    );
  }
  let w =
      f === `list`
        ? `ps-4 text-sm leading-5 text-default [@container_(max-width:520px)]:sr-only [@container_(max-width:520px)]:focus:not-sr-only`
        : `text-xs leading-4 text-secondary`,
    T;
  t[20] === w
    ? (T = t[21])
    : ((T = R(
        `pointer-events-auto relative z-10 min-w-0 gap-1.5 justify-self-start text-start underline-offset-2 hover:underline focus-visible:underline disabled:opacity-50 disabled:hover:no-underline`,
        w,
      )),
      (t[20] = w),
      (t[21] = T));
  let E;
  t[22] !== p || t[23] !== c || t[24] !== d || t[25] !== h
    ? ((E = () =>
        Gt(h, c, {
          initialIsOwner: p,
          initialProjectTitle: d,
          source: D.CODEX_SITES_SHARING_SOURCE_SITES_ACCESS_BADGE,
        })),
      (t[22] = p),
      (t[23] = c),
      (t[24] = d),
      (t[25] = h),
      (t[26] = E))
    : (E = t[26]);
  let O;
  t[27] === d
    ? (O = t[28])
    : ((O = (0, $.jsx)(`span`, {
        className: `sr-only`,
        children: (0, $.jsx)(l, {
          id: `appgenPage.openSharingSettings`,
          defaultMessage: `, open sharing settings for {siteTitle}`,
          description: `Additional accessible button label for opening site sharing settings from the sites list access status`,
          values: { siteTitle: d },
        }),
      })),
      (t[27] = d),
      (t[28] = O));
  let k;
  return (
    t[29] !== C || t[30] !== m || t[31] !== T || t[32] !== E || t[33] !== O
      ? ((k = (0, $.jsxs)(n, {
          className: T,
          color: `ghostMuted`,
          disabled: m,
          size: `inline`,
          onClick: E,
          children: [C, O],
        })),
        (t[29] = C),
        (t[30] = m),
        (t[31] = T),
        (t[32] = E),
        (t[33] = O),
        (t[34] = k))
      : (k = t[34]),
    k
  );
}
var Z, qn, Q, $, Jn;
function Yn() {
  return (Yn = e(() => {
    ((Z = oe()),
      Ue(),
      x(),
      r(),
      f(),
      A(),
      H(),
      M(),
      (qn = t(ne(), 1)),
      y(),
      (Q = ue()),
      B(),
      N(),
      ut(),
      Qe(),
      bt(),
      Ve(),
      at(),
      _t(),
      ye(),
      G(),
      ie(),
      St(),
      W(),
      g(),
      C(),
      pt(),
      ct(),
      ke(),
      Le(),
      $e(),
      dt(),
      V(),
      F(),
      Mt(),
      U(),
      Pt(),
      Lt(),
      It(),
      We(),
      De(),
      se(),
      be(),
      it(),
      tt(),
      s(),
      ae(),
      gn(),
      Wt(),
      Ht(),
      Ce(),
      mt(),
      Ot(),
      Yt(),
      Xe(),
      Jt(),
      je(),
      Xt(),
      en(),
      rn(),
      Kt(),
      Tt(),
      he(),
      Ie(),
      Se(),
      ($ = le()),
      (Jn = L(ot, Symbol())));
  }))();
}
export { En as n, Yn as r, _n as t };
//# sourceMappingURL=appgen-page-21a4f1e2c40b.js.map
