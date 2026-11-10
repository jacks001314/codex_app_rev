const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./library-empty-trash-b7895de31744.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./library-trash-analytics-87135fb4164d.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  CCt as n,
  DB as r,
  EQ as i,
  F3 as a,
  FBt as o,
  G4 as s,
  HO as c,
  I3 as l,
  IO as u,
  JO as d,
  K4 as f,
  LNt as p,
  MNt as m,
  NNt as h,
  Nu as g,
  OB as _,
  OFt as v,
  PBt as y,
  Pu as b,
  QU as x,
  RO as S,
  TQ as C,
  TY as w,
  WO as T,
  XOt as E,
  Y3 as D,
  Z3 as O,
  ZSt as k,
  _V as A,
  hG as j,
  iCt as M,
  kFt as N,
  ms as P,
  okt as ee,
  ps as F,
  qO as te,
  tkt as I,
  uW as L,
  vD as R,
  yD as ne,
  zO as z,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A5n as re,
  Blr as B,
  Bpn as ie,
  Bx as ae,
  D5n as oe,
  DKn as se,
  Dlr as ce,
  Fht as le,
  Fmt as V,
  Gpn as ue,
  HRn as de,
  Hlt as fe,
  Hmt as pe,
  Jht as me,
  Jlt as he,
  Kmt as H,
  Lht as ge,
  Lmt as _e,
  Lpn as U,
  Mht as ve,
  Nht as W,
  Nmt as G,
  OKn as ye,
  Ozn as K,
  Pht as be,
  Qlt as xe,
  Qpn as Se,
  Rht as Ce,
  Rmt as we,
  Upn as Te,
  Ux as Ee,
  Vmt as De,
  Wlt as q,
  Wmt as Oe,
  XEn as ke,
  YEn as J,
  Yfn as Y,
  Ymt as Ae,
  Zlt as je,
  Zpn as Me,
  b2 as Ne,
  cht as Pe,
  cut as Fe,
  dht as Ie,
  dmt as Le,
  eS as Re,
  hht as ze,
  imn as Be,
  iut as Ve,
  lut as He,
  mlr as Ue,
  nS as We,
  nut as Ge,
  oht as Ke,
  qht as qe,
  rht as Je,
  rmn as Ye,
  rut as Xe,
  sht as Ze,
  sut as Qe,
  tS as $e,
  tht as et,
  umt as tt,
  uut as nt,
  x2 as rt,
  zlr as it,
  zmt as at,
} from "./app-initial-ad16eaadf81f.js";
import { Hr as ot, Ur as st } from "./app-primary-3e00728c2a4c.js";
import { n as ct, t as lt } from "./space-search-empty-state-4897042a9bda.js";
import { n as ut, t as dt } from "./library-trash-analytics-87135fb4164d.js";
import { a as ft, i as pt, o as mt } from "./slate-create-menu-ba9308284af3.js";
import { n as ht, t as gt } from "./space-empty-state-95c5a77c22cc.js";
import {
  A as _t,
  O as vt,
  i as yt,
  k as bt,
  n as xt,
  r as St,
} from "./selectable-library-item-3b495aba5b29.js";
function Ct(e) {
  let t = (0, Tt.c)(10),
    { favorites: n, onRetry: r, folderError: i } = e;
  if (i != null) {
    let e;
    return (t[0] === i ? (e = t[1]) : ((e = (0, X.jsx)(wt, { error: i })), (t[0] = i), (t[1] = e)), e);
  }
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a = n
        ? (0, X.jsx)(I, {
            id: `library.favorites.loadFailed`,
            defaultMessage: `Failed to load favorites`,
            description: `Error when Library Favorites could not load; the next button retries the request`,
          })
        : (0, X.jsx)(I, {
            id: `libraryNext.results.failed`,
            defaultMessage: `Failed to load files.`,
            description: `Library browse error when the first page could not be fetched`,
          })),
      (t[2] = n),
      (t[3] = a));
  let o;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsx)(I, {
        id: `libraryNext.results.retry`,
        defaultMessage: `Try again`,
        description: `Retry fetching Library results`,
      })),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] === r ? (s = t[6]) : ((s = (0, X.jsx)(D, { onClick: r, children: o })), (t[5] = r), (t[6] = s));
  let c;
  return (
    t[7] !== a || t[8] !== s
      ? ((c = (0, X.jsxs)(`div`, {
          className: `flex flex-col items-center gap-4 py-12`,
          role: `alert`,
          children: [a, s],
        })),
        (t[7] = a),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function wt(e) {
  let n = (0, Tt.c)(11),
    { error: r } = e,
    i = t(Y),
    { data: a } = M(Oe),
    o;
  n[0] === r
    ? (o = n[1])
    : ((o =
        r === `not-found`
          ? (0, X.jsx)(I, {
              id: `library.folder.notFoundOrNoAccess`,
              defaultMessage: `This folder doesn’t exist or you don’t have access`,
              description: `Library error when a connected provider returns not found for a folder, which can mean the folder is missing or the account lacks access`,
            })
          : (0, X.jsx)(I, {
              id: `artifacts.folder_surface.sharepoint.permission_denied.description`,
              defaultMessage: `You don’t have permission to view this site or folder.`,
              description: `Centered Library error shown when the connected provider account cannot access a site, library, or folder`,
            })),
      (n[0] = r),
      (n[1] = o));
  let s;
  n[2] !== a?.items || n[3] !== i
    ? ((s = () => {
        let e = a?.items.at(-2);
        Ie(i, Ae({ ...i.value, directoryId: e?.is_root ? null : (e?.id ?? null) }));
      }),
      (n[2] = a?.items),
      (n[3] = i),
      (n[4] = s))
    : (s = n[4]);
  let c;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(I, {
        id: `artifacts.folder_surface.sharepoint.permission_denied.button.back`,
        defaultMessage: `Go back`,
        description: `Button in a connected provider permission error that returns to a parent folder or Library root`,
      })),
      (n[5] = c))
    : (c = n[5]);
  let l;
  n[6] === s ? (l = n[7]) : ((l = (0, X.jsx)(D, { onClick: s, children: c })), (n[6] = s), (n[7] = l));
  let u;
  return (
    n[8] !== o || n[9] !== l
      ? ((u = (0, X.jsxs)(`div`, {
          className: `flex flex-col items-center gap-4 py-12`,
          role: `alert`,
          children: [o, l],
        })),
        (n[8] = o),
        (n[9] = l),
        (n[10] = u))
      : (u = n[10]),
    u
  );
}
var Tt, X;
function Et() {
  return (Et = e(() => {
    ((Tt = y()), k(), E(), O(), G(), (X = p()));
  }))();
}
function Dt(e) {
  let n = (0, Z.c)(99),
    {
      onOpenItem: r,
      renderContentItem: i,
      items: a,
      supplementalItems: o,
      contentPending: s,
      notice: c,
      additionalPagination: l,
      renderSource: u,
      emptyState: d,
      reserveDisclosureSpace: f,
    } = e,
    p;
  n[0] === o ? (p = n[1]) : ((p = o === void 0 ? [] : o), (n[0] = o), (n[1] = p));
  let m = p,
    h = s !== void 0 && s,
    g = f !== void 0 && f,
    _ = t(Y),
    v = ee(),
    y = M(at),
    b = M(et),
    x = M(Ce),
    S = a ?? b,
    C = m.length > 0,
    w = M(me),
    T = M(Je),
    E = _.value.tab === `favorites` && _.value.directoryId == null && !_.value.deleted,
    {
      isPending: O,
      isFetchedAfterMount: k,
      isFetching: A,
      error: j,
      refetch: N,
      hasNextPage: P,
      isFetchingNextPage: F,
      isFetchNextPageError: te,
      fetchNextPage: L,
      data: R,
    } = M(we),
    ne = M(pe),
    z =
      M(ye) === `error` &&
      _.value.directoryId == null &&
      _.value.pageCollection == null &&
      _.value.tab === `all`,
    re;
  n[2] !== j || n[3] !== _.value.directoryId
    ? ((re = _.value.directoryId == null ? null : Ye(j, Me(_.value.directoryId))),
      (n[2] = j),
      (n[3] = _.value.directoryId),
      (n[4] = re))
    : (re = n[4]);
  let B = re;
  if (E && !w) {
    let e;
    return (
      n[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(J, {
            layout: `browse`,
            title: (0, Q.jsx)(I, {
              id: `library.favorites.unavailable`,
              defaultMessage: `Favorites are not available for this account`,
              description: `Message when the Favorites link is opened in an account where the Library experience is not enabled`,
            }),
          })),
          (n[5] = e))
        : (e = n[5]),
      e
    );
  }
  if (ne === `unavailable`) {
    let e;
    n[6] === _
      ? (e = n[7])
      : ((e = () => {
          ze(_);
        }),
        (n[6] = _),
        (n[7] = e));
    let t;
    return (
      n[8] !== E || n[9] !== e
        ? ((t = (0, Q.jsx)(Ct, { favorites: E, folderError: null, onRetry: e })),
          (n[8] = E),
          (n[9] = e),
          (n[10] = t))
        : (t = n[10]),
      t
    );
  }
  let ae;
  n[11] !== R || n[12] !== A || n[13] !== F
    ? ((ae = A && (F || R == null || R.pages.some(At))), (n[11] = R), (n[12] = A), (n[13] = F), (n[14] = ae))
    : (ae = n[14]);
  let oe = ae,
    se;
  n[15] !== ne ||
  n[16] !== h ||
  n[17] !== R?.pages ||
  n[18] !== d ||
  n[19] !== S?.length ||
  n[20] !== k ||
  n[21] !== A ||
  n[22] !== O ||
  n[23] !== x?.isPending ||
  n[24] !== T
    ? ((se =
        (h && !S?.length) ||
        x?.isPending ||
        ne === `loading` ||
        (T && A && !k) ||
        (!S?.length && (O || (A && (d !== void 0 || !!R?.pages.every(kt)))))),
      (n[15] = ne),
      (n[16] = h),
      (n[17] = R?.pages),
      (n[18] = d),
      (n[19] = S?.length),
      (n[20] = k),
      (n[21] = A),
      (n[22] = O),
      (n[23] = x?.isPending),
      (n[24] = T),
      (n[25] = se))
    : (se = n[25]);
  let ce = se;
  if (!ce && ((R == null && !S?.length && !C) || B != null)) {
    let e;
    n[26] !== z || n[27] !== N || n[28] !== _
      ? ((e = () => {
          if (z) {
            ze(_);
            return;
          }
          st(_.queryClient, _.query.getOptions(we).queryKey, () => {
            N();
          });
        }),
        (n[26] = z),
        (n[27] = N),
        (n[28] = _),
        (n[29] = e))
      : (e = n[29]);
    let t;
    n[30] !== E || n[31] !== B || n[32] !== e
      ? ((t = (0, Q.jsx)(Ct, { favorites: E, onRetry: e, folderError: B })),
        (n[30] = E),
        (n[31] = B),
        (n[32] = e),
        (n[33] = t))
      : (t = n[33]);
    let r;
    return (
      n[34] !== l || n[35] !== t
        ? ((r = (0, Q.jsxs)(Q.Fragment, { children: [t, l] })), (n[34] = l), (n[35] = t), (n[36] = r))
        : (r = n[36]),
      r
    );
  }
  let le = !!_.value.search && !A && !P && ue(R?.pages),
    V = null;
  if (le && R?.pages.at(-1)?.partialResults !== !0) {
    let e;
    (n[37] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(I, {
          id: `libraryNext.results.searchIncomplete`,
          defaultMessage: `Some search results could not be loaded`,
          description: `Status when a search source could not return all of its results; the adjacent retry button retries the search`,
        })),
        (n[37] = e))
      : (e = n[37]),
      (V = e));
  } else if (j != null) {
    let e;
    (n[38] === E
      ? (e = n[39])
      : ((e = E
          ? (0, Q.jsx)(I, {
              id: `library.favorites.loadFailed`,
              defaultMessage: `Failed to load favorites`,
              description: `Error when Library Favorites could not load; the next button retries the request`,
            })
          : (0, Q.jsx)(I, {
              id: `libraryNext.results.pageFailed`,
              defaultMessage: `Failed to load files.`,
              description: `Library pagination failed while existing items remain visible`,
            })),
        (n[38] = E),
        (n[39] = e)),
      (V = e));
  }
  let de = S != null || C,
    he = _.value.pageCollection != null || (_.value.tab === `folders` && !_.value.search),
    H;
  n[40] === v
    ? (H = n[41])
    : ((H = v.formatMessage({
        id: `library.list.label`,
        defaultMessage: `Library files`,
        description: `Accessible label for the Library file list with sortable columns`,
      })),
      (n[40] = v),
      (n[41] = H));
  let ge = u != null,
    U;
  n[42] !== g || n[43] !== ge
    ? ((U = (0, Q.jsx)(Ut, { isLoading: !0, showSource: ge, reserveDisclosureSpace: g })),
      (n[42] = g),
      (n[43] = ge),
      (n[44] = U))
    : (U = n[44]);
  let ve = u != null,
    W;
  n[45] !== g || n[46] !== ve
    ? ((W = (0, Q.jsx)(fe, { showSource: ve, reserveDisclosureSpace: g })),
      (n[45] = g),
      (n[46] = ve),
      (n[47] = W))
    : (W = n[47]);
  let G;
  n[48] !== H || n[49] !== U || n[50] !== W
    ? ((G = (0, Q.jsxs)(Ge, {
        className: `-mx-[var(--padding-row-cell-x,var(--padding-row-x))] flex min-h-0 flex-1 flex-col`,
        role: `grid`,
        tabIndex: -1,
        "aria-label": H,
        "aria-multiselectable": !0,
        onKeyDown: _t,
        children: [U, W],
      })),
      (n[48] = H),
      (n[49] = U),
      (n[50] = W),
      (n[51] = G))
    : (G = n[51]);
  let K;
  n[52] !== j || n[53] !== L || n[54] !== te || n[55] !== N || n[56] !== _
    ? ((K = () => {
        st(_.queryClient, _.query.getOptions(we).queryKey, () => {
          ie(j, _.get(_e))
            ? _.queryClient.resetQueries({ queryKey: _.query.getOptions(we).queryKey, exact: !0 })
            : te && !Te(j)
              ? L({ cancelRefetch: !1 })
              : N();
        });
      }),
      (n[52] = j),
      (n[53] = L),
      (n[54] = te),
      (n[55] = N),
      (n[56] = _),
      (n[57] = K))
    : (K = n[57]);
  let be;
  n[58] !== z || n[59] !== _
    ? ((be = z
        ? (0, Q.jsx)(Ct, {
            favorites: !1,
            folderError: null,
            onRetry: () => {
              ze(_);
            },
          })
        : null),
      (n[58] = z),
      (n[59] = _),
      (n[60] = be))
    : (be = n[60]);
  let xe;
  n[61] !== c || n[62] !== be
    ? ((xe = (0, Q.jsxs)(Q.Fragment, { children: [be, c] })), (n[61] = c), (n[62] = be), (n[63] = xe))
    : (xe = n[63]);
  let Se;
  n[64] !== R?.pages ||
  n[65] !== L ||
  n[66] !== P ||
  n[67] !== A ||
  n[68] !== F ||
  n[69] !== oe ||
  n[70] !== u ||
  n[71] !== g ||
  n[72] !== _.value.categories ||
  n[73] !== _.value.includePages ||
  n[74] !== _.value.search ||
  n[75] !== _.value.tab ||
  n[76] !== y
    ? ((Se =
        _.value.includePages &&
        _.value.tab === `suggested` &&
        !_.value.search &&
        _.value.categories.length === 0 &&
        P &&
        (R?.pages.at(-1)?.results ?? R?.pages.at(-1)?.items)?.length === 0
          ? (0, Q.jsx)(D, {
              color: `ghost`,
              disabled: F,
              loading: F,
              onClick: () => {
                L({ cancelRefetch: !1 });
              },
              children: (0, Q.jsx)(I, {
                id: `libraryNext.results.loadMore`,
                defaultMessage: `Load more`,
                description: `Button to fetch more Suggested items after a batch containing only excluded files`,
              }),
            })
          : (0, Q.jsx)(
              Ne,
              {
                loadingPlaceholder:
                  y === `grid` || !oe
                    ? null
                    : (0, Q.jsx)(Ge, {
                        className: `-mx-[var(--padding-row-cell-x,var(--padding-row-x))]`,
                        children: (0, Q.jsx)(fe, {
                          rowCount: 3,
                          showSource: u != null,
                          reserveDisclosureSpace: g,
                        }),
                      }),
                hasNextPage: P,
                isFetchingNextPage: A,
                onLoadNextPage: () => {
                  L({ cancelRefetch: !1 });
                },
              },
              R?.pages.length,
            )),
      (n[64] = R?.pages),
      (n[65] = L),
      (n[66] = P),
      (n[67] = A),
      (n[68] = F),
      (n[69] = oe),
      (n[70] = u),
      (n[71] = g),
      (n[72] = _.value.categories),
      (n[73] = _.value.includePages),
      (n[74] = _.value.search),
      (n[75] = _.value.tab),
      (n[76] = y),
      (n[77] = Se))
    : (Se = n[77]);
  let Ee = y === `grid` && oe && V == null,
    De =
      z ||
      (_.value.search && (j != null || O || A || P || R?.pages.some(Ot) || le)) ||
      (d !== void 0 && (j || c))
        ? null
        : d,
    q;
  n[78] !== S ||
  n[79] !== r ||
  n[80] !== i ||
  n[81] !== u ||
  n[82] !== g ||
  n[83] !== m ||
  n[84] !== Ee ||
  n[85] !== De
    ? ((q = (0, Q.jsx)(jt, {
        entries: S,
        supplementalItems: m,
        onOpenItem: r,
        renderContentItem: i,
        renderSource: u,
        gridLoading: Ee,
        emptyState: De,
        reserveDisclosureSpace: g,
      })),
      (n[78] = S),
      (n[79] = r),
      (n[80] = i),
      (n[81] = u),
      (n[82] = g),
      (n[83] = m),
      (n[84] = Ee),
      (n[85] = De),
      (n[86] = q))
    : (q = n[86]);
  let Oe;
  return (
    n[87] !== l ||
    n[88] !== V ||
    n[89] !== ce ||
    n[90] !== G ||
    n[91] !== K ||
    n[92] !== xe ||
    n[93] !== Se ||
    n[94] !== q ||
    n[95] !== de ||
    n[96] !== he ||
    n[97] !== y
      ? ((Oe = (0, Q.jsx)(vt, {
          loading: ce,
          hasData: de,
          viewMode: y,
          squareLoading: he,
          listLoading: G,
          error: V,
          onRetry: K,
          notice: xe,
          additionalPagination: l,
          pagination: Se,
          children: q,
        })),
        (n[87] = l),
        (n[88] = V),
        (n[89] = ce),
        (n[90] = G),
        (n[91] = K),
        (n[92] = xe),
        (n[93] = Se),
        (n[94] = q),
        (n[95] = de),
        (n[96] = he),
        (n[97] = y),
        (n[98] = Oe))
      : (Oe = n[98]),
    Oe
  );
}
function Ot(e) {
  return e.searchPending;
}
function kt(e) {
  return e.items.length === 0 && !e.results?.length;
}
function At(e) {
  return e.searchPending;
}
function jt(e) {
  let n = (0, Z.c)(41),
    {
      entries: r,
      supplementalItems: i,
      onOpenItem: a,
      renderContentItem: o,
      renderSource: s,
      emptyState: c,
      reserveDisclosureSpace: l,
      gridLoading: u,
    } = e,
    d = t(Y),
    f = M(at),
    { hasNextPage: p } = M(we);
  if (r == null && i.length === 0) return null;
  let h;
  n[0] === r ? (h = n[1]) : ((h = r ?? []), (n[0] = r), (n[1] = h));
  let g = h;
  if (g.length === 0 && i.length === 0 && !u) {
    if (p) return null;
    if (c !== void 0) {
      let e;
      return (
        n[2] === c ? (e = n[3]) : ((e = (0, Q.jsx)(Q.Fragment, { children: c })), (n[2] = c), (n[3] = e)),
        e
      );
    }
    if (
      d.value.directoryId != null &&
      !d.value.search &&
      d.value.categories.length === 0 &&
      d.value.sources.length === 0 &&
      !d.value.directoryId.startsWith(`external-`) &&
      !d.value.directoryId.startsWith(`library:`)
    ) {
      let e;
      return (
        n[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(Lt, {})), (n[4] = e))
          : (e = n[4]),
        e
      );
    }
    let e;
    return (
      n[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Q.jsx)(It, {})), (n[5] = e)) : (e = n[5]),
      e
    );
  }
  if (
    f !== `grid` ||
    d.value.search ||
    d.value.deleted ||
    (d.value.tab !== `all` && d.value.directoryId == null) ||
    !g.some(Ft) ||
    !g.some(Pt)
  ) {
    let e = f === `grid` && `pt-4`,
      t;
    n[6] === e ? (t = n[7]) : ((t = m(e)), (n[6] = e), (n[7] = t));
    let r;
    n[8] !== u || n[9] !== a || n[10] !== o || n[11] !== s || n[12] !== l || n[13] !== g || n[14] !== i
      ? ((r = (0, Q.jsx)(Rt, {
          entries: g,
          supplementalItems: i,
          onOpenItem: a,
          renderContentItem: o,
          renderSource: s,
          reserveDisclosureSpace: l,
          gridLoading: u,
        })),
        (n[8] = u),
        (n[9] = a),
        (n[10] = o),
        (n[11] = s),
        (n[12] = l),
        (n[13] = g),
        (n[14] = i),
        (n[15] = r))
      : (r = n[15]);
    let c;
    return (
      n[16] !== t || n[17] !== r
        ? ((c = (0, Q.jsx)(`div`, { className: t, children: r })), (n[16] = t), (n[17] = r), (n[18] = c))
        : (c = n[18]),
      c
    );
  }
  let _;
  n[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(`h2`, {
        className: `text-lg font-medium`,
        children: (0, Q.jsx)(I, {
          id: `libraryNext.results.folders`,
          defaultMessage: `Folders`,
          description: `Heading for folders in the Library All tab`,
        }),
      })),
      (n[19] = _))
    : (_ = n[19]);
  let v;
  n[20] === g ? (v = n[21]) : ((v = g.filter(Nt)), (n[20] = g), (n[21] = v));
  let y;
  n[22] !== a || n[23] !== s || n[24] !== l || n[25] !== v
    ? ((y = (0, Q.jsxs)(`section`, {
        className: `flex flex-col gap-4`,
        children: [
          _,
          (0, Q.jsx)(Rt, {
            entries: v,
            kind: `directory`,
            onOpenItem: a,
            renderSource: s,
            reserveDisclosureSpace: l,
          }),
        ],
      })),
      (n[22] = a),
      (n[23] = s),
      (n[24] = l),
      (n[25] = v),
      (n[26] = y))
    : (y = n[26]);
  let b;
  n[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(`h2`, {
        className: `text-lg font-medium`,
        children: (0, Q.jsx)(I, {
          id: `libraryNext.results.items`,
          defaultMessage: `Items`,
          description: `Heading for files in the Library All tab`,
        }),
      })),
      (n[27] = b))
    : (b = n[27]);
  let x;
  n[28] === g ? (x = n[29]) : ((x = g.filter(Mt)), (n[28] = g), (n[29] = x));
  let S;
  n[30] !== u || n[31] !== a || n[32] !== o || n[33] !== s || n[34] !== l || n[35] !== i || n[36] !== x
    ? ((S = (0, Q.jsxs)(`section`, {
        className: `flex flex-col gap-4`,
        children: [
          b,
          (0, Q.jsx)(Rt, {
            entries: x,
            supplementalItems: i,
            kind: `file`,
            gridLoading: u,
            renderSource: s,
            renderContentItem: o,
            onOpenItem: a,
            reserveDisclosureSpace: l,
          }),
        ],
      })),
      (n[30] = u),
      (n[31] = a),
      (n[32] = o),
      (n[33] = s),
      (n[34] = l),
      (n[35] = i),
      (n[36] = x),
      (n[37] = S))
    : (S = n[37]);
  let C;
  return (
    n[38] !== y || n[39] !== S
      ? ((C = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-8 pt-4`, children: [y, S] })),
        (n[38] = y),
        (n[39] = S),
        (n[40] = C))
      : (C = n[40]),
    C
  );
}
function Mt(e) {
  return !(`node` in e) || e.node.kind !== `directory`;
}
function Nt(e) {
  return `node` in e && e.node.kind === `directory`;
}
function Pt(e) {
  return !(`node` in e) || e.node.kind !== `directory`;
}
function Ft(e) {
  return `node` in e && e.node.kind === `directory`;
}
function It() {
  let e = (0, Z.c)(43),
    n = t(Y),
    a = M(B),
    o = M(Ce),
    s,
    c;
  if (
    (e[0] === n
      ? ((s = e[1]), (c = e[2]))
      : ((s = () => Ee(n)), (c = [n]), (e[0] = n), (e[1] = s), (e[2] = c)),
    (0, Gt.useEffect)(s, c),
    n.value.basePath.startsWith(`/space`) && n.value.search.trim())
  ) {
    let t;
    return (
      e[3] === n.value.search
        ? (t = e[4])
        : ((t = (0, Q.jsx)(lt, { query: n.value.search })), (e[3] = n.value.search), (e[4] = t)),
      t
    );
  }
  if (n.value.includePages && n.value.tab === `suggested`) {
    let t;
    return (
      e[5] !== n.value.categories || e[6] !== n.value.search || e[7] !== n.value.sources
        ? ((t = (0, Q.jsx)(J, {
            layout: `browse`,
            title:
              n.value.search || n.value.categories.length || n.value.sources.length
                ? (0, Q.jsx)(I, {
                    id: `space.home.suggestedNoResults`,
                    defaultMessage: `No results`,
                    description: `Empty search results in the Suggested tab on Space home`,
                  })
                : (0, Q.jsx)(I, {
                    id: `space.home.noSuggestions`,
                    defaultMessage: `Nothing to suggest yet`,
                    description: `Empty state in the Suggested tab on Space home`,
                  }),
          })),
          (e[5] = n.value.categories),
          (e[6] = n.value.search),
          (e[7] = n.value.sources),
          (e[8] = t))
        : (t = e[8]),
      t
    );
  }
  if (n.value.tab === `favorites` && n.value.directoryId == null && !n.value.deleted) {
    let t;
    return (
      e[9] !== n.value.categories || e[10] !== n.value.search || e[11] !== n.value.sources
        ? ((t = (0, Q.jsx)(J, {
            layout: `browse`,
            title:
              n.value.search || n.value.categories.length > 0 || n.value.sources.length > 0
                ? (0, Q.jsx)(I, {
                    id: `library.favorites.noResults`,
                    defaultMessage: `No favorites found`,
                    description: `Empty Library Favorites search or filter result`,
                  })
                : (0, Q.jsx)(I, {
                    id: `library.favorites.empty`,
                    defaultMessage: `No favorites yet`,
                    description: `Empty Library Favorites tab before the user saves any items`,
                  }),
          })),
          (e[9] = n.value.categories),
          (e[10] = n.value.search),
          (e[11] = n.value.sources),
          (e[12] = t))
        : (t = e[12]),
      t
    );
  }
  if (
    n.value.search ||
    n.value.categories.length > 0 ||
    o != null ||
    (n.value.sources.length > 0 && !n.value.imageSourceTabs)
  ) {
    let t;
    e[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, Q.jsx)(j, {})), (e[13] = t)) : (t = e[13]);
    let r;
    return (
      e[14] === n.value.includePages
        ? (r = e[15])
        : ((r = (0, Q.jsx)(J, {
            layout: `browse`,
            illustration: t,
            title: n.value.includePages
              ? (0, Q.jsx)(I, {
                  id: `space.home.noItemsFound`,
                  defaultMessage: `No items found`,
                  description: `Empty Space home result when search or filters match no files or Pages`,
                })
              : (0, Q.jsx)(I, {
                  id: `libraryNext.results.noFilesFound`,
                  defaultMessage: `No files found`,
                  description: `Library empty result message when search or filters match no files, or when Trash is empty.`,
                }),
          })),
          (e[14] = n.value.includePages),
          (e[15] = r)),
      r
    );
  }
  if (n.value.deleted) {
    let t = a ? `trash` : `trash-files`,
      n;
    return (e[16] === t ? (n = e[17]) : ((n = (0, Q.jsx)(gt, { view: t })), (e[16] = t), (e[17] = n)), n);
  }
  if (n.value.tab === `recent`) {
    let t;
    return (
      e[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Q.jsx)(J, {
            layout: `page`,
            title: (0, Q.jsx)(I, {
              id: `libraryNext.results.noRecentFiles`,
              defaultMessage: `No recently opened files`,
              description: `Empty state for a connected storage provider when the current user has no recently opened files`,
            }),
          })),
          (e[18] = t))
        : (t = e[18]),
      t
    );
  }
  if (n.value.directoryId === `library:collection:shared-with-me`) {
    let t, r;
    e[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(L, {})),
        (r = (0, Q.jsx)(`h2`, {
          children: (0, Q.jsx)(I, {
            id: `libraryNext.results.sharedEmptyTitle`,
            defaultMessage: `Folder is empty`,
            description: `Empty state title in Library's Shared with me folder.`,
          }),
        })),
        (e[19] = t),
        (e[20] = r))
      : ((t = e[19]), (r = e[20]));
    let i;
    return (
      e[21] === n.value.includePages
        ? (i = e[22])
        : ((i = (0, Q.jsx)(J, {
            layout: `browse`,
            className: `select-none`,
            illustration: t,
            title: r,
            description: (0, Q.jsx)(`p`, {
              children: n.value.includePages
                ? (0, Q.jsx)(I, {
                    id: `space.home.sharedEmptyDescription`,
                    defaultMessage: `Files and Pages shared with you will live here`,
                    description: `Supporting copy in the empty Shared with you tab on Space home.`,
                  })
                : (0, Q.jsx)(I, {
                    id: `libraryNext.results.sharedEmptyDescription`,
                    defaultMessage: `Files shared with you will live here`,
                    description: `Supporting copy in the empty Shared with me Library folder.`,
                  }),
            }),
          })),
          (e[21] = n.value.includePages),
          (e[22] = i)),
      i
    );
  }
  if (n.value.directoryId != null) {
    let t;
    return (
      e[23] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Q.jsx)(J, {
            layout: `browse`,
            title: (0, Q.jsx)(I, {
              id: `libraryNext.results.emptyFolder`,
              defaultMessage: `This folder is empty.`,
              description: `Empty Library folder with no upload action available.`,
            }),
          })),
          (e[23] = t))
        : (t = e[23]),
      t
    );
  }
  let l;
  e[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(r, { asset: i })), (e[24] = l))
    : (l = e[24]);
  let u = l,
    d = n.value.imageSourceTabs && n.value.sources[0] === `uploaded`;
  if (n.value.tab === `images`) {
    let t;
    (e[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(`span`, {
          className: `flex size-12 shrink-0 items-center justify-center rounded-xl bg-background-secondary-soft`,
          children: (0, Q.jsx)(r, { asset: b }),
        })),
        (e[25] = t))
      : (t = e[25]),
      (u = t));
  } else if (n.value.tab === `folders`) {
    let t;
    (e[26] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, Q.jsx)(x, {})), (e[26] = t)) : (t = e[26]),
      (u = t));
  }
  let f = n.value.tab === `images` && `max-w-80 self-center`,
    p;
  e[27] === f ? (p = e[28]) : ((p = m(`select-none`, f)), (e[27] = f), (e[28] = p));
  let h = n.value.tab === `images` ? `page` : `browse`,
    g = n.value.tab === `images` ? `default` : `compact`,
    _,
    v;
  e[29] !== n.value.tab || e[30] !== d
    ? ((_ = (0, Q.jsx)(`h2`, {
        children: d
          ? (0, Q.jsx)(I, {
              id: `library.images.uploads.emptyTitle`,
              defaultMessage: `No uploads yet`,
              description: `Title of the empty Uploads tab on the Images page`,
            })
          : (0, Q.jsx)(I, {
              id: `libraryNext.results.emptyTabTitle`,
              defaultMessage: `{tab, select, images {No images yet} folders {Create your first folder} other {Create something new}}`,
              description: `Title of an empty Library tab. tab distinguishes Images, Folders, and the general Suggested/All views.`,
              values: { tab: n.value.tab },
            }),
      })),
      (v = (0, Q.jsx)(`p`, {
        children: d
          ? (0, Q.jsx)(I, {
              id: `library.images.uploads.emptyDescription`,
              defaultMessage: `Images you upload will appear here`,
              description: `Supporting text for the empty Uploads tab on the Images page`,
            })
          : (0, Q.jsx)(I, {
              id: `libraryNext.results.emptyTabDescription`,
              defaultMessage: `{tab, select, images {Create an image with ChatGPT.} folders {Create folders to organize items in your library} other {Things you make with ChatGPT, like images and documents, will appear here}}`,
              description: `Supporting text for an empty Library tab. tab identifies Images, Folders, or the general Suggested/All views.`,
              values: { tab: n.value.tab },
            }),
      })),
      (e[29] = n.value.tab),
      (e[30] = d),
      (e[31] = _),
      (e[32] = v))
    : ((_ = e[31]), (v = e[32]));
  let y;
  e[33] === d ? (y = e[34]) : ((y = d ? (0, Q.jsx)(ft, {}) : (0, Q.jsx)(pt, {})), (e[33] = d), (e[34] = y));
  let S;
  return (
    e[35] !== u || e[36] !== p || e[37] !== h || e[38] !== g || e[39] !== _ || e[40] !== v || e[41] !== y
      ? ((S = (0, Q.jsx)(J, {
          className: p,
          layout: h,
          spacing: g,
          illustration: u,
          title: _,
          description: v,
          actions: y,
        })),
        (e[35] = u),
        (e[36] = p),
        (e[37] = h),
        (e[38] = g),
        (e[39] = _),
        (e[40] = v),
        (e[41] = y),
        (e[42] = S))
      : (S = e[42]),
    S
  );
}
function Lt() {
  let e = (0, Z.c)(5),
    t = M(at),
    n;
  e[0] === t
    ? (n = e[1])
    : ((n =
        t === `list`
          ? (0, Q.jsx)(`div`, {
              className: `-mx-[var(--padding-row-cell-x,var(--padding-row-x))]`,
              children: (0, Q.jsx)(Ut, {}),
            })
          : null),
      (e[0] = t),
      (e[1] = n));
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(J, {
        layout: `browse`,
        illustration: (0, Q.jsx)(A, {}),
        actions: (0, Q.jsx)(ft, {}),
        title: (0, Q.jsx)(Q.Fragment, {
          children: (0, Q.jsx)(I, {
            id: `libraryNext.results.noFilesYet`,
            defaultMessage: `No files yet`,
            description: `Title for an empty Library folder where uploading is available.`,
          }),
        }),
        description: (0, Q.jsx)(Q.Fragment, {
          children: (0, Q.jsx)(I, {
            id: `libraryNext.results.uploadDescription`,
            defaultMessage: `Upload a file to start building your library`,
            description: `Description of the upload button in an empty Library folder.`,
          }),
        }),
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  return (
    e[3] === n
      ? (i = e[4])
      : ((i = (0, Q.jsxs)(`div`, { className: `flex min-h-0 flex-1 flex-col`, children: [n, r] })),
        (e[3] = n),
        (e[4] = i)),
    i
  );
}
function Rt(e) {
  let n = (0, Z.c)(40),
    {
      entries: r,
      supplementalItems: i,
      kind: a,
      onOpenItem: o,
      renderContentItem: s,
      renderSource: c,
      viewMode: l,
      showHeader: u,
      selectionEnabled: d,
      reserveDisclosureSpace: f,
      gridLoading: p,
    } = e,
    m = i === void 0 ? [] : i,
    h = u === void 0 || u,
    g = d === void 0 || d,
    _ = p !== void 0 && p,
    v = t(Y),
    y = ee(),
    b = M(at),
    x = l ?? b,
    S = M(V),
    C = M(H),
    w;
  n[0] !== C || n[1] !== o || n[2] !== s || n[3] !== c || n[4] !== f || n[5] !== g || n[6] !== x
    ? ((w = (e) => ({
        id: Se(e),
        sortMetadata: W(e, C),
        render: () =>
          `node` in e
            ? (0, Q.jsx)(St, {
                entry: e,
                onOpenItem: o,
                viewMode: x,
                source: c?.(e),
                selectionEnabled: g,
                reserveDisclosureSpace: f,
              })
            : (0, Q.jsx)(`div`, { "data-library-item": !0, children: s?.(e, x, c?.(e)) }),
      })),
      (n[0] = C),
      (n[1] = o),
      (n[2] = s),
      (n[3] = c),
      (n[4] = f),
      (n[5] = g),
      (n[6] = x),
      (n[7] = w))
    : (w = n[7]);
  let T = r.map(w),
    E;
  if (
    (n[8] === x
      ? (E = n[9])
      : ((E = (e) => ({ id: e.id, sortMetadata: e.sortMetadata, render: (t) => e.render(x, t) })),
        (n[8] = x),
        (n[9] = E)),
    T.push(...m.map(E)),
    S != null && m.length > 0)
  ) {
    let e;
    (n[10] !== S || n[11] !== C
      ? ((e = (e, t) => ve(e.sortMetadata, t.sortMetadata, S, C)), (n[10] = S), (n[11] = C), (n[12] = e))
      : (e = n[12]),
      T.sort(e));
  }
  let D = T.map(Ht);
  if (x === `grid`) {
    if (_) {
      let e;
      (n[13] !== a || n[14] !== v.value.pageCollection || n[15] !== v.value.search || n[16] !== v.value.tab
        ? ((e = (e, t) => ({
            id: `loading-${t}`,
            content: (0, Q.jsx)(Fe, {
              square:
                v.value.pageCollection != null ||
                a === `directory` ||
                (v.value.tab === `folders` && !v.value.search),
              index: t,
            }),
          })),
          (n[13] = a),
          (n[14] = v.value.pageCollection),
          (n[15] = v.value.search),
          (n[16] = v.value.tab),
          (n[17] = e))
        : (e = n[17]),
        D.push(...Array.from({ length: 3 }, e)));
    }
    return !v.value.search && m.length === 0 && r.every(Vt)
      ? (0, Q.jsx)(`div`, {
          className: `@container`,
          children: (0, Q.jsx)(`div`, {
            className: `grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 @max-sm:grid-cols-1`,
            children: D.map(Bt),
          }),
        })
      : (0, Q.jsx)(He, { items: D });
  }
  let O;
  if (!v.value.includePages) {
    let e;
    (n[18] === y
      ? (e = n[19])
      : ((e = y.formatMessage({
          id: `library.list.label`,
          defaultMessage: `Library files`,
          description: `Accessible label for the Library file list with sortable columns`,
        })),
        (n[18] = y),
        (n[19] = e)),
      (O = e));
  } else if (v.value.directoryId === `library:collection:shared-with-me`) {
    let e;
    (n[20] === y
      ? (e = n[21])
      : ((e = y.formatMessage({
          id: `space.home.sharedList`,
          defaultMessage: `Shared with you`,
          description: `Accessible label for the files and Pages shared with you on Space home`,
        })),
        (n[20] = y),
        (n[21] = e)),
      (O = e));
  } else if (v.value.tab === `recent`) {
    let e;
    (n[22] === y
      ? (e = n[23])
      : ((e = y.formatMessage({
          id: `space.provider.recents.list`,
          defaultMessage: `Recently opened files`,
          description: `Accessible label for an external file provider's recently opened files in Space`,
        })),
        (n[22] = y),
        (n[23] = e)),
      (O = e));
  } else if (v.value.tab === `suggested`) {
    let e;
    (n[24] === y
      ? (e = n[25])
      : ((e = y.formatMessage({
          id: `space.home.suggestedList`,
          defaultMessage: `Suggested content`,
          description: `Accessible label for mixed Library files and recent Pages with sortable columns`,
        })),
        (n[24] = y),
        (n[25] = e)),
      (O = e));
  } else {
    let e;
    (n[26] === y
      ? (e = n[27])
      : ((e = y.formatMessage({
          id: `space.home.itemsList`,
          defaultMessage: `Your items`,
          description: `Accessible label for the files and Pages in Your items on Space home`,
        })),
        (n[26] = y),
        (n[27] = e)),
      (O = e));
  }
  let k = Ge,
    A = O,
    j = _t,
    N;
  n[28] !== a || n[29] !== c || n[30] !== f || n[31] !== h
    ? ((N = h ? (0, Q.jsx)(Ut, { kind: a, showSource: c != null, reserveDisclosureSpace: f }) : null),
      (n[28] = a),
      (n[29] = c),
      (n[30] = f),
      (n[31] = h),
      (n[32] = N))
    : (N = n[32]);
  let P = D.map(zt),
    F;
  return (
    n[33] !== k || n[34] !== O || n[35] !== g || n[36] !== j || n[37] !== N || n[38] !== P
      ? ((F = (0, Q.jsxs)(k, {
          className: `-mx-[var(--padding-row-cell-x,var(--padding-row-x))]`,
          role: `grid`,
          tabIndex: -1,
          "aria-label": A,
          "aria-multiselectable": g,
          onKeyDown: j,
          children: [N, P],
        })),
        (n[33] = k),
        (n[34] = O),
        (n[35] = g),
        (n[36] = j),
        (n[37] = N),
        (n[38] = P),
        (n[39] = F))
      : (F = n[39]),
    F
  );
}
function zt(e) {
  return (0, Q.jsx)(Xe, { role: `presentation`, children: e.content }, e.id);
}
function Bt(e) {
  return (0, Q.jsx)(Gt.Fragment, { children: e.content }, e.id);
}
function Vt(e) {
  return `node` in e && e.node.kind === `directory`;
}
function Ht(e, t) {
  let { id: n, render: r } = e;
  return { id: n, content: r(t + 1) };
}
function Ut(e) {
  let t = (0, Z.c)(38),
    {
      kind: n,
      isLoading: r,
      showSource: i,
      selectionEnabled: a,
      selection: o,
      sizeSortEnabled: s,
      reserveDisclosureSpace: c,
    } = e,
    l = r !== void 0 && r,
    u = i !== void 0 && i,
    d = a === void 0 || a,
    f = s === void 0 || s,
    p = c !== void 0 && c,
    h = M(H),
    g = M(Ke),
    _;
  t[0] !== h || t[1] !== l || t[2] !== g || t[3] !== f
    ? ((_ = g
        ? (0, Q.jsx)(Wt, {
            sortEnabled: f,
            column: `size`,
            className: m(
              `hidden w-22 shrink-0 @lg/library-row:block`,
              h === `deleted` && `@3xl/library-row:w-40`,
            ),
            isLoading: l,
            children: (0, Q.jsx)(I, {
              id: `libraryNext.results.size`,
              defaultMessage: `Size`,
              description: `Library folder list file size column heading`,
            }),
          })
        : null),
      (t[0] = h),
      (t[1] = l),
      (t[2] = g),
      (t[3] = f),
      (t[4] = _))
    : (_ = t[4]);
  let v = _,
    y;
  t[5] !== h || t[6] !== l || t[7] !== n || t[8] !== o || t[9] !== d
    ? ((y = d && !l && h !== `saved` ? (o ?? (0, Q.jsx)(xt, { kind: n })) : void 0),
      (t[5] = h),
      (t[6] = l),
      (t[7] = n),
      (t[8] = o),
      (t[9] = d),
      (t[10] = y))
    : (y = t[10]);
  let b;
  t[11] === p ? (b = t[12]) : ((b = p ? (0, Q.jsx)(je, { depth: 0 }) : null), (t[11] = p), (t[12] = b));
  let x;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Q.jsx)(I, {
        id: `libraryNext.results.name`,
        defaultMessage: `Name`,
        description: `Library list name column heading`,
      })),
      (t[13] = x))
    : (x = t[13]);
  let S;
  t[14] === b
    ? (S = t[15])
    : ((S = (0, Q.jsxs)(`span`, { className: `flex items-center`, children: [b, x] })),
      (t[14] = b),
      (t[15] = S));
  let C;
  t[16] !== l || t[17] !== S
    ? ((C = (0, Q.jsx)(Wt, { column: `name`, className: `min-w-0 flex-1`, isLoading: l, children: S })),
      (t[16] = l),
      (t[17] = S),
      (t[18] = C))
    : (C = t[18]);
  let w;
  t[19] !== h || t[20] !== u
    ? ((w = u
        ? (0, Q.jsx)(`span`, {
            role: `columnheader`,
            "data-library-column": `source`,
            tabIndex: 0,
            className: m(`hidden shrink-0 @3xl/library-row:block`, h === `deleted` ? `w-40` : `w-60`),
            children:
              h === `deleted`
                ? (0, Q.jsx)(I, {
                    id: `libraryNext.results.space`,
                    defaultMessage: `Space`,
                    description: `Trash list column showing the Space an item belongs to. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                  })
                : (0, Q.jsx)(I, {
                    id: `libraryNext.results.source`,
                    defaultMessage: `Source`,
                    description: `Column showing the Space an item belongs to`,
                  }),
          })
        : null),
      (t[19] = h),
      (t[20] = u),
      (t[21] = w))
    : (w = t[21]);
  let T;
  t[22] === h
    ? (T = t[23])
    : ((T =
        h === `shared`
          ? (0, Q.jsx)(`span`, {
              role: `columnheader`,
              "data-library-column": `shared`,
              tabIndex: 0,
              className: `hidden w-60 shrink-0 @3xl/library-row:block`,
              children: (0, Q.jsx)(I, {
                id: `libraryNext.results.sharedBy`,
                defaultMessage: `Shared by`,
                description: `Column heading in Library's Shared with me list, above the avatar and name of the person who shared each file or folder`,
              }),
            })
          : null),
      (t[22] = h),
      (t[23] = T));
  let E = h === `deleted` ? v : null,
    D;
  t[24] === h
    ? (D = t[25])
    : ((D =
        h === `activity`
          ? (0, Q.jsx)(I, {
              id: `libraryNext.results.date`,
              defaultMessage: `Last activity`,
              description: `Suggested list date column; dates can reflect personal activity or modification, depending on the result.`,
            })
          : (0, Q.jsx)(I, {
              id: `libraryNext.results.dateHeadingWithSaved`,
              defaultMessage: `{kind, select, suggested {Last activity} shared {Shared} deleted {Deleted} saved {Saved} other {Modified}}`,
              description: `Library list date column heading. kind identifies Suggested activity, sharing date, Trash deletion date, Favorites save date, or last modification.`,
              values: { kind: h },
            })),
      (t[24] = h),
      (t[25] = D));
  let O;
  t[26] !== l || t[27] !== D
    ? ((O = (0, Q.jsx)(Wt, {
        column: `date`,
        className: `hidden w-40 shrink-0 @lg/library-row:block`,
        isLoading: l,
        children: D,
      })),
      (t[26] = l),
      (t[27] = D),
      (t[28] = O))
    : (O = t[28]);
  let k = h === `deleted` ? null : v,
    A;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Q.jsx)(`span`, { "aria-hidden": `true`, className: `w-9 shrink-0 @lg/library-row:w-16` })),
      (t[29] = A))
    : (A = t[29]);
  let j;
  return (
    t[30] !== C || t[31] !== w || t[32] !== T || t[33] !== E || t[34] !== O || t[35] !== k || t[36] !== y
      ? ((j = (0, Q.jsxs)(he, { selection: y, children: [C, w, T, E, O, k, A] })),
        (t[30] = C),
        (t[31] = w),
        (t[32] = T),
        (t[33] = E),
        (t[34] = O),
        (t[35] = k),
        (t[36] = y),
        (t[37] = j))
      : (j = t[37]),
    j
  );
}
function Wt(e) {
  let n = (0, Z.c)(19),
    { sortEnabled: i, column: a, className: o, isLoading: c, children: l } = e,
    u = i === void 0 || i,
    d = t(Y),
    f = M(V),
    p = M(De),
    h = c || !p || !u,
    g = !h && f?.key === a,
    _ = f?.direction === `asc` ? `ascending` : `descending`,
    v = f?.direction === `asc` ? s : F,
    y;
  n[0] === o ? (y = n[1]) : ((y = m(`h-full`, o)), (n[0] = o), (n[1] = y));
  let b = g ? _ : `none`,
    x;
  n[2] !== a || n[3] !== d || n[4] !== f
    ? ((x = () => d.set(Ze, le(f, a))), (n[2] = a), (n[3] = d), (n[4] = f), (n[5] = x))
    : (x = n[5]);
  let S;
  n[6] !== g || n[7] !== v
    ? ((S = g ? (0, Q.jsx)(r, { className: `shrink-0`, asset: v, focusable: `false` }) : null),
      (n[6] = g),
      (n[7] = v),
      (n[8] = S))
    : (S = n[8]);
  let C;
  n[9] !== l || n[10] !== h || n[11] !== x || n[12] !== S
    ? ((C = (0, Q.jsxs)(`button`, {
        type: `button`,
        disabled: h,
        className: `flex size-full cursor-interaction items-center gap-1 text-start outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default`,
        onClick: x,
        children: [l, S],
      })),
      (n[9] = l),
      (n[10] = h),
      (n[11] = x),
      (n[12] = S),
      (n[13] = C))
    : (C = n[13]);
  let w;
  return (
    n[14] !== a || n[15] !== y || n[16] !== b || n[17] !== C
      ? ((w = (0, Q.jsx)(`div`, {
          role: `columnheader`,
          "data-library-column": a,
          className: y,
          "aria-sort": b,
          children: C,
        })),
        (n[14] = a),
        (n[15] = y),
        (n[16] = b),
        (n[17] = C),
        (n[18] = w))
      : (w = n[18]),
    w
  );
}
var Z, Gt, Q;
function Kt() {
  return (Kt = e(() => {
    ((Z = y()),
      P(),
      f(),
      g(),
      C(),
      h(),
      k(),
      (Gt = o()),
      E(),
      O(),
      _(),
      w(),
      rt(),
      ke(),
      Ve(),
      Ue(),
      ht(),
      mt(),
      se(),
      U(),
      G(),
      ge(),
      be(),
      qe(),
      xe(),
      nt(),
      Be(),
      q(),
      Et(),
      bt(),
      ae(),
      yt(),
      ot(),
      ct(),
      (Q = p()));
  }))();
}
function qt() {
  let e = (0, Jt.c)(3),
    n = t(Y),
    r = M(at),
    i = n.value.basePath === `/space`,
    a;
  return (
    e[0] !== i || e[1] !== r
      ? ((a =
          r === `grid`
            ? (0, Yt.jsx)(Qe, { square: !0 })
            : (0, Yt.jsxs)(`div`, {
                className: `-mx-[var(--padding-row-cell-x,var(--padding-row-x))] flex min-h-0 flex-1 flex-col`,
                children: [
                  (0, Yt.jsx)(Ut, { isLoading: !0, showSource: i }),
                  (0, Yt.jsx)(fe, { showSource: i }),
                ],
              })),
        (e[0] = i),
        (e[1] = r),
        (e[2] = a))
      : (a = e[2]),
    a
  );
}
var Jt, Yt;
function Xt() {
  return (Xt = e(() => {
    ((Jt = y()), k(), G(), nt(), q(), Kt(), (Yt = p()));
  }))();
}
var Zt;
function Qt() {
  return (Qt = e(() => {
    (k(),
      G(),
      We(),
      Ue(),
      (Zt = n(Y, ({ get: e, scope: t }) => {
        if (
          !t.value.deleted ||
          t.value.search.trim() ||
          t.value.categories.length ||
          t.value.sources.length ||
          e(ce) === `loading`
        )
          return !1;
        if (e(B)) {
          let t = e(we);
          return !(t.isPending || t.isFetching || t.isError || t.hasNextPage || e(et)?.length !== 0);
        }
        {
          if (!e(Pe)) return !1;
          if (e(ce) !== `enabled`) return !0;
          let t = e(Re);
          if (
            t.isPending ||
            t.isFetching ||
            t.isError ||
            t.hasNextPage ||
            !t.data?.pages.every((e) => e.items.length === 0)
          )
            return !1;
        }
        if (!e(it)) return !0;
        let n = e($e);
        return (
          !n.isPending &&
          !n.isFetching &&
          !n.isError &&
          !n.hasNextPage &&
          n.data.pages.every((e) => e.items.length === 0)
        );
      })));
  }))();
}
function $t(e) {
  let t = (0, rn.c)(5),
    { content: n, showEmptyFileTrash: r, emptyTrashAction: i } = e;
  if (i == null && (r === void 0 || r)) {
    let e;
    return (t[0] === n ? (e = t[1]) : ((e = (0, $.jsx)(en, { content: n })), (t[0] = n), (t[1] = e)), e);
  }
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, $.jsx)(tn, { content: n, emptyTrashAction: i })), (t[2] = n), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function en(e) {
  let n = (0, rn.c)(12),
    { content: r } = e,
    i = t(Y),
    a = M(Pe),
    o = M(B);
  if (M(on)) return null;
  let s;
  n[0] !== i || n[1] !== o
    ? ((s =
        o || i.value.basePath === `/space`
          ? (0, $.jsx)(I, {
              id: `library.emptyTrash.shortAction`,
              defaultMessage: `Empty trash`,
              description: `Trash banner action that opens a confirmation before permanently deleting items of the selected type`,
            })
          : (0, $.jsx)(I, {
              id: `library.emptyTrash.action`,
              defaultMessage: `Empty file trash`,
              description: `Library Trash banner action that opens a confirmation before permanently deleting every trashed file, including files outside the current filters`,
            })),
      (n[0] = i),
      (n[1] = o),
      (n[2] = s))
    : (s = n[2]);
  let c;
  n[3] === i
    ? (c = n[4])
    : ((c = () => {
        let e = i.get(Le).sessionId;
        (ut(i, e, de.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_INITIATED),
          re(i, an, { accountId: i.value.accountId, userId: i.value.userId, sessionId: e }));
      }),
      (n[3] = i),
      (n[4] = c));
  let l;
  n[5] !== s || n[6] !== c || n[7] !== a
    ? ((l = { label: s, disabled: a, onClick: c }), (n[5] = s), (n[6] = c), (n[7] = a), (n[8] = l))
    : (l = n[8]);
  let u;
  return (
    n[9] !== r || n[10] !== l
      ? ((u = (0, $.jsx)(tn, { content: r, emptyTrashAction: l })), (n[9] = r), (n[10] = l), (n[11] = u))
      : (u = n[11]),
    u
  );
}
function tn(e) {
  let t = (0, rn.c)(8),
    { content: n, emptyTrashAction: r } = e,
    i = M(B),
    a;
  t[0] !== n || t[1] !== i
    ? ((a =
        n ??
        (i
          ? (0, $.jsx)(I, {
              id: `libraryNext.trash.unifiedDescription`,
              defaultMessage: `Restore items you've recently deleted. Items are permanently deleted after 30 days.`,
              description: `Trash banner explaining that deleted pages and files can be restored before permanent deletion after 30 days`,
            })
          : (0, $.jsx)(I, {
              id: `libraryNext.trash.description`,
              defaultMessage: `Restore files you've recently deleted. Files are deleted forever after 30 days.`,
              description: `Informational banner above Library Trash. Explains that recently deleted files can be restored and are deleted forever after 30 days.`,
            }))),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o = r?.label,
    s = r?.disabled,
    c = r?.onClick,
    l;
  return (
    t[3] !== a || t[4] !== o || t[5] !== s || t[6] !== c
      ? ((l = (0, $.jsx)(`div`, {
          className: `mb-3 select-none`,
          children: (0, $.jsx)(R, {
            variant: `insetNotice`,
            primaryCtaColor: `outlineSurface`,
            content: a,
            primaryCtaText: o,
            isPrimaryCtaDisabled: s,
            onPrimaryCtaClick: c,
          }),
        })),
        (t[3] = a),
        (t[4] = o),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
function nn(e) {
  let t = (0, rn.c)(6),
    { onClose: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = { "aria-describedby": void 0 }), (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n
    ? (i = t[2])
    : ((i = (e) => {
        e || n();
      }),
      (t[1] = n),
      (t[2] = i));
  let a;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(u, {
        children: (0, $.jsx)(z, {
          children: (0, $.jsx)(S, {
            title: (0, $.jsx)(te, {
              children: (0, $.jsx)(I, {
                id: `library.emptyTrash.loadError.title`,
                defaultMessage: `Couldn’t open Empty file trash`,
                description: `Error dialog title when the Empty file trash confirmation fails to load after retrying`,
              }),
            }),
            subtitle: (0, $.jsx)(I, {
              id: `library.emptyTrash.loadError.reload`,
              defaultMessage: `Reload the app and try again`,
              description: `Recovery instructions when loading the Empty file trash confirmation failed twice; reloading allows another attempt`,
            }),
          }),
        }),
      })),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] === i
      ? (o = t[5])
      : ((o = (0, $.jsx)(T, { open: !0, contentProps: r, onOpenChange: i, children: a })),
        (t[4] = i),
        (t[5] = o)),
    o
  );
}
var rn, $, an, on;
function sn() {
  return (sn = e(() => {
    ((rn = y()),
      K(),
      k(),
      E(),
      ne(),
      d(),
      c(),
      a(),
      oe(),
      Ue(),
      tt(),
      G(),
      dt(),
      ($ = p()),
      N(),
      (an = l(
        async () =>
          (
            await v(
              async () => {
                let { EmptyLibraryTrashDialog: e } = await import(`./library-empty-trash-b7895de31744.js`);
                return { EmptyLibraryTrashDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
              import.meta.url,
            )
          ).EmptyLibraryTrashDialog,
        { errorFallback: nn },
      )),
      (on = n(Y, ({ get: e, scope: t }) => {
        if (
          (t.value.basePath !== `/space` && t.value.basePath !== `/space/files`) ||
          !t.value.deleted ||
          t.value.directoryId != null ||
          t.value.tab === `favorites` ||
          t.value.tab === `recent` ||
          t.value.search.trim() !== `` ||
          t.value.categories.length > 0 ||
          t.value.sources.length > 0
        )
          return !1;
        let { isPending: n, isFetching: r, isError: i, hasNextPage: a } = e(we);
        return !n && !r && !i && !a && e(pe) === `available` && e(et)?.length === 0;
      })));
  }))();
}
export { qt as a, Dt as c, Zt as i, Kt as l, sn as n, Xt as o, Qt as r, Ut as s, $t as t };
//# sourceMappingURL=library-trash-banner-bfac665ecde4.js.map
