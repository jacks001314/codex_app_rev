const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./library-empty-trash-b55e29b80525.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./library-trash-analytics-b5f56547a9f3.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  B4 as n,
  CZ as r,
  GE as i,
  IDt as a,
  Ixt as o,
  J2 as s,
  Lo as c,
  Mz as l,
  Nz as u,
  Pxt as d,
  Ro as f,
  TJ as p,
  VDt as m,
  Vxt as h,
  WE as g,
  Xl as _,
  Yl as v,
  _Mt as y,
  _O as b,
  cO as x,
  fO as S,
  fPt as C,
  gMt as w,
  jDt as T,
  lO as E,
  mO as D,
  mU as O,
  oO as k,
  oSt as A,
  pPt as j,
  q2 as M,
  t3 as N,
  tU as ee,
  vO as P,
  vzt as F,
  wZ as te,
  xB as I,
  xMt as L,
  yW as ne,
  yzt as re,
  z4 as ie,
} from "./app-shared-bbfeca5e5737.js";
import {
  $ct as ae,
  $pt as oe,
  ACn as R,
  Apt as se,
  Bpt as ce,
  Cmt as z,
  Dmt as le,
  Dx as ue,
  Ear as de,
  Emt as B,
  Ept as fe,
  Ex as V,
  Fpt as pe,
  G4n as H,
  Gln as me,
  Hln as U,
  Imt as W,
  J4n as G,
  Jln as he,
  Jpt as ge,
  Kct as K,
  Kpt as _e,
  Lct as ve,
  Lmt as ye,
  Lpt as q,
  Mpt as be,
  Npt as xe,
  Opt as Se,
  Ox as Ce,
  Qar as J,
  Qct as we,
  Qpt as Te,
  Uct as Ee,
  Xln as De,
  Zar as Oe,
  Zct as ke,
  Zpt as Ae,
  _x as je,
  alt as Me,
  cun as Ne,
  dUn as Pe,
  eIn as Fe,
  eln as Y,
  gFn as Ie,
  ilt as Le,
  jCn as Re,
  kpt as ze,
  mx as Be,
  n0 as Ve,
  nlt as He,
  nmt as Ue,
  npt as We,
  nun as Ge,
  omt as Ke,
  qct as qe,
  rlt as Je,
  run as Ye,
  sun as Xe,
  t0 as Ze,
  tpt as Qe,
  uUn as $e,
  wmt as et,
  wpt as tt,
  zar as nt,
  zct as rt,
} from "./app-initial-5851df3f6cb1.js";
import { Mr as it, Nr as at } from "./app-primary-fe8a450b3b04.js";
import { n as ot, t as st } from "./space-search-empty-state-92b70c289368.js";
import { n as ct, t as lt } from "./library-trash-analytics-b5f56547a9f3.js";
import { a as ut, i as dt, o as ft } from "./slate-create-menu-404dcfc5139c.js";
import { n as pt, t as mt } from "./space-empty-state-7ae0513531fc.js";
import {
  A as ht,
  O as gt,
  i as _t,
  k as vt,
  n as yt,
  r as bt,
} from "./selectable-library-item-873a2793fc51.js";
function xt(e) {
  let n = (0, Ct.c)(10),
    { favorites: r, onRetry: i, folderError: o } = e;
  if (o != null) {
    let e;
    return (n[0] === o ? (e = n[1]) : ((e = (0, X.jsx)(St, { error: o })), (n[0] = o), (n[1] = e)), e);
  }
  let s;
  n[2] === r
    ? (s = n[3])
    : ((s = r
        ? (0, X.jsx)(a, {
            id: `library.favorites.loadFailed`,
            defaultMessage: `Failed to load favorites`,
            description: `Error when Library Favorites could not load; the next button retries the request`,
          })
        : (0, X.jsx)(a, {
            id: `libraryNext.results.failed`,
            defaultMessage: `Failed to load files.`,
            description: `Library browse error when the first page could not be fetched`,
          })),
      (n[2] = r),
      (n[3] = s));
  let c;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(a, {
        id: `libraryNext.results.retry`,
        defaultMessage: `Try again`,
        description: `Retry fetching Library results`,
      })),
      (n[4] = c))
    : (c = n[4]);
  let l;
  n[5] === i ? (l = n[6]) : ((l = (0, X.jsx)(t, { onClick: i, children: c })), (n[5] = i), (n[6] = l));
  let u;
  return (
    n[7] !== s || n[8] !== l
      ? ((u = (0, X.jsxs)(`div`, {
          className: `flex flex-col items-center gap-4 py-12`,
          role: `alert`,
          children: [s, l],
        })),
        (n[7] = s),
        (n[8] = l),
        (n[9] = u))
      : (u = n[9]),
    u
  );
}
function St(e) {
  let n = (0, Ct.c)(11),
    { error: r } = e,
    i = o(Y),
    { data: s } = h(pe),
    c;
  n[0] === r
    ? (c = n[1])
    : ((c =
        r === `not-found`
          ? (0, X.jsx)(a, {
              id: `library.folder.notFoundOrNoAccess`,
              defaultMessage: `This folder doesn’t exist or you don’t have access`,
              description: `Library error when a connected provider returns not found for a folder, which can mean the folder is missing or the account lacks access`,
            })
          : (0, X.jsx)(a, {
              id: `artifacts.folder_surface.sharepoint.permission_denied.description`,
              defaultMessage: `You don’t have permission to view this site or folder.`,
              description: `Centered Library error shown when the connected provider account cannot access a site, library, or folder`,
            })),
      (n[0] = r),
      (n[1] = c));
  let l;
  n[2] !== s?.items || n[3] !== i
    ? ((l = () => {
        let e = s?.items.at(-2);
        Ue(i, ce({ ...i.value, directoryId: e?.is_root ? null : (e?.id ?? null) }));
      }),
      (n[2] = s?.items),
      (n[3] = i),
      (n[4] = l))
    : (l = n[4]);
  let u;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsx)(a, {
        id: `artifacts.folder_surface.sharepoint.permission_denied.button.back`,
        defaultMessage: `Go back`,
        description: `Button in a connected provider permission error that returns to a parent folder or Library root`,
      })),
      (n[5] = u))
    : (u = n[5]);
  let d;
  n[6] === l ? (d = n[7]) : ((d = (0, X.jsx)(t, { onClick: l, children: u })), (n[6] = l), (n[7] = d));
  let f;
  return (
    n[8] !== c || n[9] !== d
      ? ((f = (0, X.jsxs)(`div`, {
          className: `flex flex-col items-center gap-4 py-12`,
          role: `alert`,
          children: [c, d],
        })),
        (n[8] = c),
        (n[9] = d),
        (n[10] = f))
      : (f = n[10]),
    f
  );
}
var Ct, X;
function wt() {
  return (wt = e(() => {
    ((Ct = F()), d(), T(), N(), tt(), (X = L()));
  }))();
}
function Tt(e) {
  let n = (0, Z.c)(96),
    {
      onOpenItem: r,
      renderContentItem: i,
      items: s,
      contentPending: c,
      notice: l,
      additionalPagination: u,
      renderSource: d,
      emptyState: f,
      reserveDisclosureSpace: p,
    } = e,
    g = c !== void 0 && c,
    _ = p !== void 0 && p,
    v = o(Y),
    y = m(),
    b = h(se),
    x = h(_e),
    S = h(le),
    C = s ?? x,
    w = h(ye),
    T = h(ge),
    E = v.value.tab === `favorites` && v.value.directoryId == null && !v.value.deleted,
    {
      isPending: D,
      isFetchedAfterMount: O,
      isFetching: k,
      error: A,
      refetch: j,
      hasNextPage: M,
      isFetchingNextPage: N,
      isFetchNextPageError: ee,
      fetchNextPage: P,
      data: F,
    } = h(ze),
    te = h(xe),
    I =
      h(Pe) === `error` &&
      v.value.directoryId == null &&
      v.value.pageCollection == null &&
      v.value.tab === `all`,
    L;
  n[0] !== A || n[1] !== v.value.directoryId
    ? ((L = v.value.directoryId == null ? null : Xe(A, Ge(v.value.directoryId))),
      (n[0] = A),
      (n[1] = v.value.directoryId),
      (n[2] = L))
    : (L = n[2]);
  let ne = L;
  if (E && !w) {
    let e;
    return (
      n[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(R, {
            layout: `browse`,
            title: (0, Q.jsx)(a, {
              id: `library.favorites.unavailable`,
              defaultMessage: `Favorites are not available for this account`,
              description: `Message when the Favorites link is opened in an account where the Library experience is not enabled`,
            }),
          })),
          (n[3] = e))
        : (e = n[3]),
      e
    );
  }
  if (te === `unavailable`) {
    let e;
    n[4] === v
      ? (e = n[5])
      : ((e = () => {
          Ke(v);
        }),
        (n[4] = v),
        (n[5] = e));
    let t;
    return (
      n[6] !== E || n[7] !== e
        ? ((t = (0, Q.jsx)(xt, { favorites: E, folderError: null, onRetry: e })),
          (n[6] = E),
          (n[7] = e),
          (n[8] = t))
        : (t = n[8]),
      t
    );
  }
  let re;
  n[9] !== F || n[10] !== k || n[11] !== N
    ? ((re = k && (N || F == null || F.pages.some(Ot))), (n[9] = F), (n[10] = k), (n[11] = N), (n[12] = re))
    : (re = n[12]);
  let ie = re,
    ae;
  n[13] !== te ||
  n[14] !== g ||
  n[15] !== F?.pages ||
  n[16] !== f ||
  n[17] !== C?.length ||
  n[18] !== O ||
  n[19] !== k ||
  n[20] !== D ||
  n[21] !== S?.isPending ||
  n[22] !== T
    ? ((ae =
        (g && !C?.length) ||
        S?.isPending ||
        te === `loading` ||
        (T && k && !O) ||
        (!C?.length && (D || (k && (f !== void 0 || !!F?.pages.every(Dt)))))),
      (n[13] = te),
      (n[14] = g),
      (n[15] = F?.pages),
      (n[16] = f),
      (n[17] = C?.length),
      (n[18] = O),
      (n[19] = k),
      (n[20] = D),
      (n[21] = S?.isPending),
      (n[22] = T),
      (n[23] = ae))
    : (ae = n[23]);
  let oe = ae;
  if (!oe && ((F == null && !C?.length) || ne != null)) {
    let e;
    n[24] !== I || n[25] !== j || n[26] !== v
      ? ((e = () => {
          if (I) {
            Ke(v);
            return;
          }
          at(v.queryClient, v.query.getOptions(ze).queryKey, () => {
            j();
          });
        }),
        (n[24] = I),
        (n[25] = j),
        (n[26] = v),
        (n[27] = e))
      : (e = n[27]);
    let t;
    n[28] !== E || n[29] !== ne || n[30] !== e
      ? ((t = (0, Q.jsx)(xt, { favorites: E, onRetry: e, folderError: ne })),
        (n[28] = E),
        (n[29] = ne),
        (n[30] = e),
        (n[31] = t))
      : (t = n[31]);
    let r;
    return (
      n[32] !== u || n[33] !== t
        ? ((r = (0, Q.jsxs)(Q.Fragment, { children: [t, u] })), (n[32] = u), (n[33] = t), (n[34] = r))
        : (r = n[34]),
      r
    );
  }
  let ce = !!v.value.search && !k && !M && De(F?.pages),
    z = null;
  if (ce && F?.pages.at(-1)?.partialResults !== !0) {
    let e;
    (n[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(a, {
          id: `libraryNext.results.searchIncomplete`,
          defaultMessage: `Some search results could not be loaded`,
          description: `Status when a search source could not return all of its results; the adjacent retry button retries the search`,
        })),
        (n[35] = e))
      : (e = n[35]),
      (z = e));
  } else if (A != null) {
    let e;
    (n[36] === E
      ? (e = n[37])
      : ((e = E
          ? (0, Q.jsx)(a, {
              id: `library.favorites.loadFailed`,
              defaultMessage: `Failed to load favorites`,
              description: `Error when Library Favorites could not load; the next button retries the request`,
            })
          : (0, Q.jsx)(a, {
              id: `libraryNext.results.pageFailed`,
              defaultMessage: `Failed to load files.`,
              description: `Library pagination failed while existing items remain visible`,
            })),
        (n[36] = E),
        (n[37] = e)),
      (z = e));
  }
  let ue = C != null,
    de = v.value.pageCollection != null || (v.value.tab === `folders` && !v.value.search),
    B;
  n[38] === y
    ? (B = n[39])
    : ((B = y.formatMessage({
        id: `library.list.label`,
        defaultMessage: `Library files`,
        description: `Accessible label for the Library file list with sortable columns`,
      })),
      (n[38] = y),
      (n[39] = B));
  let fe = d != null,
    V;
  n[40] !== _ || n[41] !== fe
    ? ((V = (0, Q.jsx)(Bt, { isLoading: !0, showSource: fe, reserveDisclosureSpace: _ })),
      (n[40] = _),
      (n[41] = fe),
      (n[42] = V))
    : (V = n[42]);
  let pe = d != null,
    H;
  n[43] !== _ || n[44] !== pe
    ? ((H = (0, Q.jsx)(ve, { showSource: pe, reserveDisclosureSpace: _ })),
      (n[43] = _),
      (n[44] = pe),
      (n[45] = H))
    : (H = n[45]);
  let U;
  n[46] !== V || n[47] !== H || n[48] !== B
    ? ((U = (0, Q.jsxs)(ke, {
        className: `-mx-[var(--padding-row-cell-x,var(--padding-row-x))] flex min-h-0 flex-1 flex-col`,
        role: `grid`,
        tabIndex: -1,
        "aria-label": B,
        "aria-multiselectable": !0,
        onKeyDown: ht,
        children: [V, H],
      })),
      (n[46] = V),
      (n[47] = H),
      (n[48] = B),
      (n[49] = U))
    : (U = n[49]);
  let W;
  n[50] !== A || n[51] !== P || n[52] !== ee || n[53] !== j || n[54] !== v
    ? ((W = () => {
        at(v.queryClient, v.query.getOptions(ze).queryKey, () => {
          me(A, v.get(Se))
            ? v.queryClient.resetQueries({ queryKey: v.query.getOptions(ze).queryKey, exact: !0 })
            : ee && !he(A)
              ? P({ cancelRefetch: !1 })
              : j();
        });
      }),
      (n[50] = A),
      (n[51] = P),
      (n[52] = ee),
      (n[53] = j),
      (n[54] = v),
      (n[55] = W))
    : (W = n[55]);
  let G;
  n[56] !== I || n[57] !== v
    ? ((G = I
        ? (0, Q.jsx)(xt, {
            favorites: !1,
            folderError: null,
            onRetry: () => {
              Ke(v);
            },
          })
        : null),
      (n[56] = I),
      (n[57] = v),
      (n[58] = G))
    : (G = n[58]);
  let K;
  n[59] !== l || n[60] !== G
    ? ((K = (0, Q.jsxs)(Q.Fragment, { children: [G, l] })), (n[59] = l), (n[60] = G), (n[61] = K))
    : (K = n[61]);
  let q;
  n[62] !== F?.pages ||
  n[63] !== P ||
  n[64] !== M ||
  n[65] !== k ||
  n[66] !== N ||
  n[67] !== ie ||
  n[68] !== d ||
  n[69] !== _ ||
  n[70] !== v.value.categories ||
  n[71] !== v.value.includePages ||
  n[72] !== v.value.search ||
  n[73] !== v.value.tab ||
  n[74] !== b
    ? ((q =
        v.value.includePages &&
        v.value.tab === `suggested` &&
        !v.value.search &&
        v.value.categories.length === 0 &&
        M &&
        (F?.pages.at(-1)?.results ?? F?.pages.at(-1)?.items)?.length === 0
          ? (0, Q.jsx)(t, {
              color: `ghost`,
              disabled: N,
              loading: N,
              onClick: () => {
                P({ cancelRefetch: !1 });
              },
              children: (0, Q.jsx)(a, {
                id: `libraryNext.results.loadMore`,
                defaultMessage: `Load more`,
                description: `Button to fetch more Suggested items after a batch containing only excluded files`,
              }),
            })
          : (0, Q.jsx)(
              Ze,
              {
                loadingPlaceholder:
                  b === `grid` || !ie
                    ? null
                    : (0, Q.jsx)(ke, {
                        className: `-mx-[var(--padding-row-cell-x,var(--padding-row-x))]`,
                        children: (0, Q.jsx)(ve, {
                          rowCount: 3,
                          showSource: d != null,
                          reserveDisclosureSpace: _,
                        }),
                      }),
                hasNextPage: M,
                isFetchingNextPage: k,
                onLoadNextPage: () => {
                  P({ cancelRefetch: !1 });
                },
              },
              F?.pages.length,
            )),
      (n[62] = F?.pages),
      (n[63] = P),
      (n[64] = M),
      (n[65] = k),
      (n[66] = N),
      (n[67] = ie),
      (n[68] = d),
      (n[69] = _),
      (n[70] = v.value.categories),
      (n[71] = v.value.includePages),
      (n[72] = v.value.search),
      (n[73] = v.value.tab),
      (n[74] = b),
      (n[75] = q))
    : (q = n[75]);
  let be = b === `grid` && ie && z == null,
    Ce =
      I ||
      (v.value.search && (A != null || D || k || M || F?.pages.some(Et) || ce)) ||
      (f !== void 0 && (A || l))
        ? null
        : f,
    J;
  n[76] !== C || n[77] !== r || n[78] !== i || n[79] !== d || n[80] !== _ || n[81] !== be || n[82] !== Ce
    ? ((J = (0, Q.jsx)(kt, {
        entries: C,
        onOpenItem: r,
        renderContentItem: i,
        renderSource: d,
        gridLoading: be,
        emptyState: Ce,
        reserveDisclosureSpace: _,
      })),
      (n[76] = C),
      (n[77] = r),
      (n[78] = i),
      (n[79] = d),
      (n[80] = _),
      (n[81] = be),
      (n[82] = Ce),
      (n[83] = J))
    : (J = n[83]);
  let we;
  return (
    n[84] !== u ||
    n[85] !== z ||
    n[86] !== oe ||
    n[87] !== U ||
    n[88] !== W ||
    n[89] !== K ||
    n[90] !== q ||
    n[91] !== J ||
    n[92] !== ue ||
    n[93] !== de ||
    n[94] !== b
      ? ((we = (0, Q.jsx)(gt, {
          loading: oe,
          hasData: ue,
          viewMode: b,
          squareLoading: de,
          listLoading: U,
          error: z,
          onRetry: W,
          notice: K,
          additionalPagination: u,
          pagination: q,
          children: J,
        })),
        (n[84] = u),
        (n[85] = z),
        (n[86] = oe),
        (n[87] = U),
        (n[88] = W),
        (n[89] = K),
        (n[90] = q),
        (n[91] = J),
        (n[92] = ue),
        (n[93] = de),
        (n[94] = b),
        (n[95] = we))
      : (we = n[95]),
    we
  );
}
function Et(e) {
  return e.searchPending;
}
function Dt(e) {
  return e.items.length === 0 && !e.results?.length;
}
function Ot(e) {
  return e.searchPending;
}
function kt(e) {
  let t = (0, Z.c)(37),
    {
      entries: n,
      onOpenItem: r,
      renderContentItem: i,
      renderSource: s,
      emptyState: c,
      reserveDisclosureSpace: l,
      gridLoading: u,
    } = e,
    d = o(Y),
    f = h(se),
    { hasNextPage: p } = h(ze);
  if (n == null) return null;
  if (n.length === 0 && !u) {
    if (p) return null;
    if (c !== void 0) {
      let e;
      return (
        t[0] === c ? (e = t[1]) : ((e = (0, Q.jsx)(Q.Fragment, { children: c })), (t[0] = c), (t[1] = e)),
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
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(Ft, {})), (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Q.jsx)(Pt, {})), (t[3] = e)) : (e = t[3]),
      e
    );
  }
  if (
    f !== `grid` ||
    d.value.search ||
    d.value.deleted ||
    (d.value.tab !== `all` && d.value.directoryId == null) ||
    !n.some(Nt) ||
    !n.some(Mt)
  ) {
    let e = f === `grid` && `pt-4`,
      a;
    t[4] === e ? (a = t[5]) : ((a = w(e)), (t[4] = e), (t[5] = a));
    let o;
    t[6] !== n || t[7] !== u || t[8] !== r || t[9] !== i || t[10] !== s || t[11] !== l
      ? ((o = (0, Q.jsx)(It, {
          entries: n,
          onOpenItem: r,
          renderContentItem: i,
          renderSource: s,
          reserveDisclosureSpace: l,
          gridLoading: u,
        })),
        (t[6] = n),
        (t[7] = u),
        (t[8] = r),
        (t[9] = i),
        (t[10] = s),
        (t[11] = l),
        (t[12] = o))
      : (o = t[12]);
    let c;
    return (
      t[13] !== a || t[14] !== o
        ? ((c = (0, Q.jsx)(`div`, { className: a, children: o })), (t[13] = a), (t[14] = o), (t[15] = c))
        : (c = t[15]),
      c
    );
  }
  let m;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(`h2`, {
        className: `text-lg font-medium`,
        children: (0, Q.jsx)(a, {
          id: `libraryNext.results.folders`,
          defaultMessage: `Folders`,
          description: `Heading for folders in the Library All tab`,
        }),
      })),
      (t[16] = m))
    : (m = t[16]);
  let g;
  t[17] === n ? (g = t[18]) : ((g = n.filter(jt)), (t[17] = n), (t[18] = g));
  let _;
  t[19] !== r || t[20] !== s || t[21] !== l || t[22] !== g
    ? ((_ = (0, Q.jsxs)(`section`, {
        className: `flex flex-col gap-4`,
        children: [
          m,
          (0, Q.jsx)(It, {
            entries: g,
            kind: `directory`,
            onOpenItem: r,
            renderSource: s,
            reserveDisclosureSpace: l,
          }),
        ],
      })),
      (t[19] = r),
      (t[20] = s),
      (t[21] = l),
      (t[22] = g),
      (t[23] = _))
    : (_ = t[23]);
  let v;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Q.jsx)(`h2`, {
        className: `text-lg font-medium`,
        children: (0, Q.jsx)(a, {
          id: `libraryNext.results.items`,
          defaultMessage: `Items`,
          description: `Heading for files in the Library All tab`,
        }),
      })),
      (t[24] = v))
    : (v = t[24]);
  let y;
  t[25] === n ? (y = t[26]) : ((y = n.filter(At)), (t[25] = n), (t[26] = y));
  let b;
  t[27] !== u || t[28] !== r || t[29] !== i || t[30] !== s || t[31] !== l || t[32] !== y
    ? ((b = (0, Q.jsxs)(`section`, {
        className: `flex flex-col gap-4`,
        children: [
          v,
          (0, Q.jsx)(It, {
            entries: y,
            kind: `file`,
            gridLoading: u,
            renderSource: s,
            renderContentItem: i,
            onOpenItem: r,
            reserveDisclosureSpace: l,
          }),
        ],
      })),
      (t[27] = u),
      (t[28] = r),
      (t[29] = i),
      (t[30] = s),
      (t[31] = l),
      (t[32] = y),
      (t[33] = b))
    : (b = t[33]);
  let x;
  return (
    t[34] !== _ || t[35] !== b
      ? ((x = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-8 pt-4`, children: [_, b] })),
        (t[34] = _),
        (t[35] = b),
        (t[36] = x))
      : (x = t[36]),
    x
  );
}
function At(e) {
  return !(`node` in e) || e.node.kind !== `directory`;
}
function jt(e) {
  return `node` in e && e.node.kind === `directory`;
}
function Mt(e) {
  return !(`node` in e) || e.node.kind !== `directory`;
}
function Nt(e) {
  return `node` in e && e.node.kind === `directory`;
}
function Pt() {
  let e = (0, Z.c)(43),
    t = o(Y),
    n = h(J),
    r = h(le),
    i,
    s;
  if (
    (e[0] === t
      ? ((i = e[1]), (s = e[2]))
      : ((i = () => je(t)), (s = [t]), (e[0] = t), (e[1] = i), (e[2] = s)),
    (0, Ht.useEffect)(i, s),
    t.value.basePath.startsWith(`/space`) && t.value.search.trim())
  ) {
    let n;
    return (
      e[3] === t.value.search
        ? (n = e[4])
        : ((n = (0, Q.jsx)(st, { query: t.value.search })), (e[3] = t.value.search), (e[4] = n)),
      n
    );
  }
  if (t.value.includePages && t.value.tab === `suggested`) {
    let n;
    return (
      e[5] !== t.value.categories || e[6] !== t.value.search || e[7] !== t.value.sources
        ? ((n = (0, Q.jsx)(R, {
            layout: `browse`,
            title:
              t.value.search || t.value.categories.length || t.value.sources.length
                ? (0, Q.jsx)(a, {
                    id: `space.home.suggestedNoResults`,
                    defaultMessage: `No results`,
                    description: `Empty search results in the Suggested tab on Space home`,
                  })
                : (0, Q.jsx)(a, {
                    id: `space.home.noSuggestions`,
                    defaultMessage: `Nothing to suggest yet`,
                    description: `Empty state in the Suggested tab on Space home`,
                  }),
          })),
          (e[5] = t.value.categories),
          (e[6] = t.value.search),
          (e[7] = t.value.sources),
          (e[8] = n))
        : (n = e[8]),
      n
    );
  }
  if (t.value.tab === `favorites` && t.value.directoryId == null && !t.value.deleted) {
    let n;
    return (
      e[9] !== t.value.categories || e[10] !== t.value.search || e[11] !== t.value.sources
        ? ((n = (0, Q.jsx)(R, {
            layout: `browse`,
            title:
              t.value.search || t.value.categories.length > 0 || t.value.sources.length > 0
                ? (0, Q.jsx)(a, {
                    id: `library.favorites.noResults`,
                    defaultMessage: `No favorites found`,
                    description: `Empty Library Favorites search or filter result`,
                  })
                : (0, Q.jsx)(a, {
                    id: `library.favorites.empty`,
                    defaultMessage: `No favorites yet`,
                    description: `Empty Library Favorites tab before the user saves any items`,
                  }),
          })),
          (e[9] = t.value.categories),
          (e[10] = t.value.search),
          (e[11] = t.value.sources),
          (e[12] = n))
        : (n = e[12]),
      n
    );
  }
  if (
    t.value.search ||
    t.value.categories.length > 0 ||
    r != null ||
    (t.value.sources.length > 0 && !t.value.imageSourceTabs)
  ) {
    let n;
    e[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = (0, Q.jsx)(ne, {})), (e[13] = n)) : (n = e[13]);
    let r;
    return (
      e[14] === t.value.includePages
        ? (r = e[15])
        : ((r = (0, Q.jsx)(R, {
            layout: `browse`,
            illustration: n,
            title: t.value.includePages
              ? (0, Q.jsx)(a, {
                  id: `space.home.noItemsFound`,
                  defaultMessage: `No items found`,
                  description: `Empty Space home result when search or filters match no files or Pages`,
                })
              : (0, Q.jsx)(a, {
                  id: `libraryNext.results.noFilesFound`,
                  defaultMessage: `No files found`,
                  description: `Library empty result message when search or filters match no files, or when Trash is empty.`,
                }),
          })),
          (e[14] = t.value.includePages),
          (e[15] = r)),
      r
    );
  }
  if (t.value.deleted) {
    let t = n ? `trash` : `trash-files`,
      r;
    return (e[16] === t ? (r = e[17]) : ((r = (0, Q.jsx)(mt, { view: t })), (e[16] = t), (e[17] = r)), r);
  }
  if (t.value.tab === `recent`) {
    let t;
    return (
      e[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Q.jsx)(R, {
            layout: `page`,
            title: (0, Q.jsx)(a, {
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
  if (t.value.directoryId === `library:collection:shared-with-me`) {
    let n, r;
    e[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(O, {})),
        (r = (0, Q.jsx)(`h2`, {
          children: (0, Q.jsx)(a, {
            id: `libraryNext.results.sharedEmptyTitle`,
            defaultMessage: `Folder is empty`,
            description: `Empty state title in Library's Shared with me folder.`,
          }),
        })),
        (e[19] = n),
        (e[20] = r))
      : ((n = e[19]), (r = e[20]));
    let i;
    return (
      e[21] === t.value.includePages
        ? (i = e[22])
        : ((i = (0, Q.jsx)(R, {
            layout: `browse`,
            className: `select-none`,
            illustration: n,
            title: r,
            description: (0, Q.jsx)(`p`, {
              children: t.value.includePages
                ? (0, Q.jsx)(a, {
                    id: `space.home.sharedEmptyDescription`,
                    defaultMessage: `Files and Pages shared with you will live here`,
                    description: `Supporting copy in the empty Shared with you tab on Space home.`,
                  })
                : (0, Q.jsx)(a, {
                    id: `libraryNext.results.sharedEmptyDescription`,
                    defaultMessage: `Files shared with you will live here`,
                    description: `Supporting copy in the empty Shared with me Library folder.`,
                  }),
            }),
          })),
          (e[21] = t.value.includePages),
          (e[22] = i)),
      i
    );
  }
  if (t.value.directoryId != null) {
    let t;
    return (
      e[23] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Q.jsx)(R, {
            layout: `browse`,
            title: (0, Q.jsx)(a, {
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
  let c;
  e[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(l, { asset: te })), (e[24] = c))
    : (c = e[24]);
  let u = c,
    d = t.value.imageSourceTabs && t.value.sources[0] === `uploaded`;
  if (t.value.tab === `images`) {
    let t;
    (e[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(`span`, {
          className: `flex size-12 shrink-0 items-center justify-center rounded-xl bg-background-secondary-soft`,
          children: (0, Q.jsx)(l, { asset: _ }),
        })),
        (e[25] = t))
      : (t = e[25]),
      (u = t));
  } else if (t.value.tab === `folders`) {
    let t;
    (e[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(ee, {})), (e[26] = t))
      : (t = e[26]),
      (u = t));
  }
  let f = t.value.tab === `images` && `max-w-80 self-center`,
    p;
  e[27] === f ? (p = e[28]) : ((p = w(`select-none`, f)), (e[27] = f), (e[28] = p));
  let m = t.value.tab === `images` ? `page` : `browse`,
    g = t.value.tab === `images` ? `default` : `compact`,
    v,
    y;
  e[29] !== t.value.tab || e[30] !== d
    ? ((v = (0, Q.jsx)(`h2`, {
        children: d
          ? (0, Q.jsx)(a, {
              id: `library.images.uploads.emptyTitle`,
              defaultMessage: `No uploads yet`,
              description: `Title of the empty Uploads tab on the Images page`,
            })
          : (0, Q.jsx)(a, {
              id: `libraryNext.results.emptyTabTitle`,
              defaultMessage: `{tab, select, images {No images yet} folders {Create your first folder} other {Create something new}}`,
              description: `Title of an empty Library tab. tab distinguishes Images, Folders, and the general Suggested/All views.`,
              values: { tab: t.value.tab },
            }),
      })),
      (y = (0, Q.jsx)(`p`, {
        children: d
          ? (0, Q.jsx)(a, {
              id: `library.images.uploads.emptyDescription`,
              defaultMessage: `Images you upload will appear here`,
              description: `Supporting text for the empty Uploads tab on the Images page`,
            })
          : (0, Q.jsx)(a, {
              id: `libraryNext.results.emptyTabDescription`,
              defaultMessage: `{tab, select, images {Create an image with ChatGPT.} folders {Create folders to organize items in your library} other {Things you make with ChatGPT, like images and documents, will appear here}}`,
              description: `Supporting text for an empty Library tab. tab identifies Images, Folders, or the general Suggested/All views.`,
              values: { tab: t.value.tab },
            }),
      })),
      (e[29] = t.value.tab),
      (e[30] = d),
      (e[31] = v),
      (e[32] = y))
    : ((v = e[31]), (y = e[32]));
  let b;
  e[33] === d ? (b = e[34]) : ((b = d ? (0, Q.jsx)(ut, {}) : (0, Q.jsx)(dt, {})), (e[33] = d), (e[34] = b));
  let x;
  return (
    e[35] !== u || e[36] !== p || e[37] !== m || e[38] !== g || e[39] !== v || e[40] !== y || e[41] !== b
      ? ((x = (0, Q.jsx)(R, {
          className: p,
          layout: m,
          spacing: g,
          illustration: u,
          title: v,
          description: y,
          actions: b,
        })),
        (e[35] = u),
        (e[36] = p),
        (e[37] = m),
        (e[38] = g),
        (e[39] = v),
        (e[40] = y),
        (e[41] = b),
        (e[42] = x))
      : (x = e[42]),
    x
  );
}
function Ft() {
  let e = (0, Z.c)(5),
    t = h(se),
    n;
  e[0] === t
    ? (n = e[1])
    : ((n =
        t === `list`
          ? (0, Q.jsx)(`div`, {
              className: `-mx-[var(--padding-row-cell-x,var(--padding-row-x))]`,
              children: (0, Q.jsx)(Bt, {}),
            })
          : null),
      (e[0] = t),
      (e[1] = n));
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(R, {
        layout: `browse`,
        illustration: (0, Q.jsx)(I, {}),
        actions: (0, Q.jsx)(ut, {}),
        title: (0, Q.jsx)(Q.Fragment, {
          children: (0, Q.jsx)(a, {
            id: `libraryNext.results.noFilesYet`,
            defaultMessage: `No files yet`,
            description: `Title for an empty Library folder where uploading is available.`,
          }),
        }),
        description: (0, Q.jsx)(Q.Fragment, {
          children: (0, Q.jsx)(a, {
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
function It(e) {
  let t = (0, Z.c)(63),
    {
      entries: n,
      kind: r,
      onOpenItem: i,
      renderContentItem: a,
      renderSource: s,
      viewMode: c,
      showHeader: l,
      selectionEnabled: u,
      reserveDisclosureSpace: d,
      gridLoading: f,
    } = e,
    p = l === void 0 || l,
    g = u === void 0 || u,
    _ = f !== void 0 && f,
    v = o(Y),
    y = m(),
    b = h(se),
    x = c ?? b,
    S,
    C,
    w,
    T,
    E,
    D,
    O,
    k,
    A,
    j;
  if (
    t[0] !== n ||
    t[1] !== _ ||
    t[2] !== y ||
    t[3] !== r ||
    t[4] !== i ||
    t[5] !== a ||
    t[6] !== s ||
    t[7] !== d ||
    t[8] !== v.value.directoryId ||
    t[9] !== v.value.includePages ||
    t[10] !== v.value.pageCollection ||
    t[11] !== v.value.search ||
    t[12] !== v.value.tab ||
    t[13] !== g ||
    t[14] !== p ||
    t[15] !== x
  ) {
    T = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[26] !== i || t[27] !== a || t[28] !== s || t[29] !== d || t[30] !== g || t[31] !== x
        ? ((e = (e) => ({
            id: Ye(e),
            content:
              `node` in e
                ? (0, Q.jsx)(bt, {
                    entry: e,
                    onOpenItem: i,
                    viewMode: x,
                    source: s?.(e),
                    selectionEnabled: g,
                    reserveDisclosureSpace: d,
                  })
                : (0, Q.jsx)(`div`, { "data-library-item": !0, children: a?.(e, x, s?.(e)) }),
          })),
          (t[26] = i),
          (t[27] = a),
          (t[28] = s),
          (t[29] = d),
          (t[30] = g),
          (t[31] = x),
          (t[32] = e))
        : (e = t[32]);
      let o = n.map(e);
      if (x === `grid`) {
        if (_) {
          let e;
          (t[33] !== r ||
          t[34] !== v.value.pageCollection ||
          t[35] !== v.value.search ||
          t[36] !== v.value.tab
            ? ((e = (e, t) => ({
                id: `loading-${t}`,
                content: (0, Q.jsx)(Je, {
                  square:
                    v.value.pageCollection != null ||
                    r === `directory` ||
                    (v.value.tab === `folders` && !v.value.search),
                  index: t,
                }),
              })),
              (t[33] = r),
              (t[34] = v.value.pageCollection),
              (t[35] = v.value.search),
              (t[36] = v.value.tab),
              (t[37] = e))
            : (e = t[37]),
            o.push(...Array.from({ length: 3 }, e)));
        }
        if (!v.value.search && n.every(zt)) {
          T = (0, Q.jsx)(`div`, {
            className: `@container`,
            children: (0, Q.jsx)(`div`, {
              className: `grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 @max-sm:grid-cols-1`,
              children: o.map(Rt),
            }),
          });
          break bb0;
        }
        T = (0, Q.jsx)(Le, { items: o });
        break bb0;
      }
      let c;
      if (!v.value.includePages) {
        let e;
        (t[38] === y
          ? (e = t[39])
          : ((e = y.formatMessage({
              id: `library.list.label`,
              defaultMessage: `Library files`,
              description: `Accessible label for the Library file list with sortable columns`,
            })),
            (t[38] = y),
            (t[39] = e)),
          (c = e));
      } else if (v.value.directoryId === `library:collection:shared-with-me`) {
        let e;
        (t[40] === y
          ? (e = t[41])
          : ((e = y.formatMessage({
              id: `space.home.sharedList`,
              defaultMessage: `Shared with you`,
              description: `Accessible label for the files and Pages shared with you on Space home`,
            })),
            (t[40] = y),
            (t[41] = e)),
          (c = e));
      } else if (v.value.tab === `recent`) {
        let e;
        (t[42] === y
          ? (e = t[43])
          : ((e = y.formatMessage({
              id: `space.provider.recents.list`,
              defaultMessage: `Recently opened files`,
              description: `Accessible label for an external file provider's recently opened files in Space`,
            })),
            (t[42] = y),
            (t[43] = e)),
          (c = e));
      } else if (v.value.tab === `suggested`) {
        let e;
        (t[44] === y
          ? (e = t[45])
          : ((e = y.formatMessage({
              id: `space.home.suggestedList`,
              defaultMessage: `Suggested content`,
              description: `Accessible label for mixed Library files and recent Pages with sortable columns`,
            })),
            (t[44] = y),
            (t[45] = e)),
          (c = e));
      } else {
        let e;
        (t[46] === y
          ? (e = t[47])
          : ((e = y.formatMessage({
              id: `space.home.itemsList`,
              defaultMessage: `Your items`,
              description: `Accessible label for the files and Pages in Your items on Space home`,
            })),
            (t[46] = y),
            (t[47] = e)),
          (c = e));
      }
      ((S = ke),
        (E = `-mx-[var(--padding-row-cell-x,var(--padding-row-x))]`),
        (D = `grid`),
        (O = -1),
        (k = c),
        (A = g),
        (j = ht),
        t[48] !== r || t[49] !== s || t[50] !== d || t[51] !== p
          ? ((C = p ? (0, Q.jsx)(Bt, { kind: r, showSource: s != null, reserveDisclosureSpace: d }) : null),
            (t[48] = r),
            (t[49] = s),
            (t[50] = d),
            (t[51] = p),
            (t[52] = C))
          : (C = t[52]),
        (w = o.map(Lt)));
    }
    ((t[0] = n),
      (t[1] = _),
      (t[2] = y),
      (t[3] = r),
      (t[4] = i),
      (t[5] = a),
      (t[6] = s),
      (t[7] = d),
      (t[8] = v.value.directoryId),
      (t[9] = v.value.includePages),
      (t[10] = v.value.pageCollection),
      (t[11] = v.value.search),
      (t[12] = v.value.tab),
      (t[13] = g),
      (t[14] = p),
      (t[15] = x),
      (t[16] = S),
      (t[17] = C),
      (t[18] = w),
      (t[19] = T),
      (t[20] = E),
      (t[21] = D),
      (t[22] = O),
      (t[23] = k),
      (t[24] = A),
      (t[25] = j));
  } else
    ((S = t[16]),
      (C = t[17]),
      (w = t[18]),
      (T = t[19]),
      (E = t[20]),
      (D = t[21]),
      (O = t[22]),
      (k = t[23]),
      (A = t[24]),
      (j = t[25]));
  if (T !== Symbol.for(`react.early_return_sentinel`)) return T;
  let M;
  return (
    t[53] !== S ||
    t[54] !== C ||
    t[55] !== w ||
    t[56] !== E ||
    t[57] !== D ||
    t[58] !== O ||
    t[59] !== k ||
    t[60] !== A ||
    t[61] !== j
      ? ((M = (0, Q.jsxs)(S, {
          className: E,
          role: D,
          tabIndex: O,
          "aria-label": k,
          "aria-multiselectable": A,
          onKeyDown: j,
          children: [C, w],
        })),
        (t[53] = S),
        (t[54] = C),
        (t[55] = w),
        (t[56] = E),
        (t[57] = D),
        (t[58] = O),
        (t[59] = k),
        (t[60] = A),
        (t[61] = j),
        (t[62] = M))
      : (M = t[62]),
    M
  );
}
function Lt(e) {
  return (0, Q.jsx)(we, { role: `presentation`, children: e.content }, e.id);
}
function Rt(e) {
  return (0, Q.jsx)(Ht.Fragment, { children: e.content }, e.id);
}
function zt(e) {
  return `node` in e && e.node.kind === `directory`;
}
function Bt(e) {
  let t = (0, Z.c)(38),
    {
      kind: n,
      isLoading: r,
      showSource: i,
      selectionEnabled: o,
      selection: s,
      sizeSortEnabled: c,
      reserveDisclosureSpace: l,
    } = e,
    u = r !== void 0 && r,
    d = i !== void 0 && i,
    f = o === void 0 || o,
    p = c === void 0 || c,
    m = l !== void 0 && l,
    g = h(q),
    _ = h(Ae),
    v;
  t[0] !== g || t[1] !== u || t[2] !== _ || t[3] !== p
    ? ((v = _
        ? (0, Q.jsx)(Vt, {
            sortEnabled: p,
            column: `size`,
            className: w(
              `hidden w-22 shrink-0 @lg/library-row:block`,
              g === `deleted` && `@3xl/library-row:w-40`,
            ),
            isLoading: u,
            children: (0, Q.jsx)(a, {
              id: `libraryNext.results.size`,
              defaultMessage: `Size`,
              description: `Library folder list file size column heading`,
            }),
          })
        : null),
      (t[0] = g),
      (t[1] = u),
      (t[2] = _),
      (t[3] = p),
      (t[4] = v))
    : (v = t[4]);
  let y = v,
    b;
  t[5] !== g || t[6] !== u || t[7] !== n || t[8] !== s || t[9] !== f
    ? ((b = f && !u && g !== `saved` ? (s ?? (0, Q.jsx)(yt, { kind: n })) : void 0),
      (t[5] = g),
      (t[6] = u),
      (t[7] = n),
      (t[8] = s),
      (t[9] = f),
      (t[10] = b))
    : (b = t[10]);
  let x;
  t[11] === m ? (x = t[12]) : ((x = m ? (0, Q.jsx)(K, { depth: 0 }) : null), (t[11] = m), (t[12] = x));
  let S;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsx)(a, {
        id: `libraryNext.results.name`,
        defaultMessage: `Name`,
        description: `Library list name column heading`,
      })),
      (t[13] = S))
    : (S = t[13]);
  let C;
  t[14] === x
    ? (C = t[15])
    : ((C = (0, Q.jsxs)(`span`, { className: `flex items-center`, children: [x, S] })),
      (t[14] = x),
      (t[15] = C));
  let T;
  t[16] !== u || t[17] !== C
    ? ((T = (0, Q.jsx)(Vt, { column: `name`, className: `min-w-0 flex-1`, isLoading: u, children: C })),
      (t[16] = u),
      (t[17] = C),
      (t[18] = T))
    : (T = t[18]);
  let E;
  t[19] !== g || t[20] !== d
    ? ((E = d
        ? (0, Q.jsx)(`span`, {
            role: `columnheader`,
            "data-library-column": `source`,
            tabIndex: 0,
            className: w(`hidden shrink-0 @3xl/library-row:block`, g === `deleted` ? `w-40` : `w-60`),
            children:
              g === `deleted`
                ? (0, Q.jsx)(a, {
                    id: `libraryNext.results.space`,
                    defaultMessage: `Space`,
                    description: `Trash list column showing the Space an item belongs to. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                  })
                : (0, Q.jsx)(a, {
                    id: `libraryNext.results.source`,
                    defaultMessage: `Source`,
                    description: `Column showing the Space an item belongs to`,
                  }),
          })
        : null),
      (t[19] = g),
      (t[20] = d),
      (t[21] = E))
    : (E = t[21]);
  let D;
  t[22] === g
    ? (D = t[23])
    : ((D =
        g === `shared`
          ? (0, Q.jsx)(`span`, {
              role: `columnheader`,
              "data-library-column": `shared`,
              tabIndex: 0,
              className: `hidden w-60 shrink-0 @3xl/library-row:block`,
              children: (0, Q.jsx)(a, {
                id: `libraryNext.results.sharedBy`,
                defaultMessage: `Shared by`,
                description: `Column heading in Library's Shared with me list, above the avatar and name of the person who shared each file or folder`,
              }),
            })
          : null),
      (t[22] = g),
      (t[23] = D));
  let O = g === `deleted` ? y : null,
    k;
  t[24] === g
    ? (k = t[25])
    : ((k =
        g === `activity`
          ? (0, Q.jsx)(a, {
              id: `libraryNext.results.date`,
              defaultMessage: `Last activity`,
              description: `Suggested list date column; dates can reflect personal activity or modification, depending on the result.`,
            })
          : (0, Q.jsx)(a, {
              id: `libraryNext.results.dateHeadingWithSaved`,
              defaultMessage: `{kind, select, suggested {Last activity} shared {Shared} deleted {Deleted} saved {Saved} other {Modified}}`,
              description: `Library list date column heading. kind identifies Suggested activity, sharing date, Trash deletion date, Favorites save date, or last modification.`,
              values: { kind: g },
            })),
      (t[24] = g),
      (t[25] = k));
  let A;
  t[26] !== u || t[27] !== k
    ? ((A = (0, Q.jsx)(Vt, {
        column: `date`,
        className: `hidden w-40 shrink-0 @lg/library-row:block`,
        isLoading: u,
        children: k,
      })),
      (t[26] = u),
      (t[27] = k),
      (t[28] = A))
    : (A = t[28]);
  let j = g === `deleted` ? null : y,
    M;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Q.jsx)(`span`, { "aria-hidden": `true`, className: `w-9 shrink-0 @lg/library-row:w-16` })),
      (t[29] = M))
    : (M = t[29]);
  let N;
  return (
    t[30] !== T || t[31] !== E || t[32] !== D || t[33] !== O || t[34] !== A || t[35] !== j || t[36] !== b
      ? ((N = (0, Q.jsxs)(Ee, { selection: b, children: [T, E, D, O, A, j, M] })),
        (t[30] = T),
        (t[31] = E),
        (t[32] = D),
        (t[33] = O),
        (t[34] = A),
        (t[35] = j),
        (t[36] = b),
        (t[37] = N))
      : (N = t[37]),
    N
  );
}
function Vt(e) {
  let t = (0, Z.c)(19),
    { sortEnabled: n, column: r, className: i, isLoading: a, children: s } = e,
    u = n === void 0 || n,
    d = o(Y),
    f = h(fe),
    p = h(be),
    m = a || !p || !u,
    g = !m && f?.key === r,
    _ = f?.direction === `asc` ? `ascending` : `descending`,
    v = f?.direction === `asc` ? M : c,
    y;
  t[0] === i ? (y = t[1]) : ((y = w(`h-full`, i)), (t[0] = i), (t[1] = y));
  let b = g ? _ : `none`,
    x;
  t[2] !== r || t[3] !== d || t[4] !== f
    ? ((x = () => d.set(Te, et(f, r))), (t[2] = r), (t[3] = d), (t[4] = f), (t[5] = x))
    : (x = t[5]);
  let S;
  t[6] !== g || t[7] !== v
    ? ((S = g ? (0, Q.jsx)(l, { className: `shrink-0`, asset: v, focusable: `false` }) : null),
      (t[6] = g),
      (t[7] = v),
      (t[8] = S))
    : (S = t[8]);
  let C;
  t[9] !== s || t[10] !== m || t[11] !== x || t[12] !== S
    ? ((C = (0, Q.jsxs)(`button`, {
        type: `button`,
        disabled: m,
        className: `flex size-full cursor-interaction items-center gap-1 text-start outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default`,
        onClick: x,
        children: [s, S],
      })),
      (t[9] = s),
      (t[10] = m),
      (t[11] = x),
      (t[12] = S),
      (t[13] = C))
    : (C = t[13]);
  let T;
  return (
    t[14] !== r || t[15] !== y || t[16] !== b || t[17] !== C
      ? ((T = (0, Q.jsx)(`div`, {
          role: `columnheader`,
          "data-library-column": r,
          className: y,
          "aria-sort": b,
          children: C,
        })),
        (t[14] = r),
        (t[15] = y),
        (t[16] = b),
        (t[17] = C),
        (t[18] = T))
      : (T = t[18]),
    T
  );
}
var Z, Ht, Q;
function Ut() {
  return (Ut = e(() => {
    ((Z = F()),
      f(),
      s(),
      v(),
      r(),
      y(),
      d(),
      (Ht = re()),
      T(),
      N(),
      u(),
      p(),
      Ve(),
      Re(),
      ae(),
      de(),
      pt(),
      ft(),
      $e(),
      U(),
      tt(),
      B(),
      z(),
      W(),
      qe(),
      Me(),
      Ne(),
      rt(),
      wt(),
      vt(),
      Be(),
      _t(),
      it(),
      ot(),
      (Q = L()));
  }))();
}
function Wt() {
  let e = (0, Gt.c)(3),
    t = o(Y),
    n = h(se),
    r = t.value.basePath === `/space`,
    i;
  return (
    e[0] !== r || e[1] !== n
      ? ((i =
          n === `grid`
            ? (0, Kt.jsx)(He, { square: !0 })
            : (0, Kt.jsxs)(`div`, {
                className: `-mx-[var(--padding-row-cell-x,var(--padding-row-x))] flex min-h-0 flex-1 flex-col`,
                children: [
                  (0, Kt.jsx)(Bt, { isLoading: !0, showSource: r }),
                  (0, Kt.jsx)(ve, { showSource: r }),
                ],
              })),
        (e[0] = r),
        (e[1] = n),
        (e[2] = i))
      : (i = e[2]),
    i
  );
}
var Gt, Kt;
function qt() {
  return (qt = e(() => {
    ((Gt = F()), d(), tt(), Me(), rt(), Ut(), (Kt = L()));
  }))();
}
var Jt;
function Yt() {
  return (Yt = e(() => {
    (d(),
      tt(),
      Ce(),
      de(),
      (Jt = A(Y, ({ get: e, scope: t }) => {
        if (
          !t.value.deleted ||
          t.value.search.trim() ||
          t.value.categories.length ||
          t.value.sources.length ||
          e(nt) === `loading`
        )
          return !1;
        if (e(J)) {
          let t = e(ze);
          return !(t.isPending || t.isFetching || t.isError || t.hasNextPage || e(_e)?.length !== 0);
        }
        {
          if (!e(oe)) return !1;
          if (e(nt) !== `enabled`) return !0;
          let t = e(V);
          if (
            t.isPending ||
            t.isFetching ||
            t.isError ||
            t.hasNextPage ||
            !t.data?.pages.every((e) => e.items.length === 0)
          )
            return !1;
        }
        if (!e(Oe)) return !0;
        let n = e(ue);
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
function Xt(e) {
  let t = (0, en.c)(5),
    { content: n, showEmptyFileTrash: r, emptyTrashAction: i } = e;
  if (i == null && (r === void 0 || r)) {
    let e;
    return (t[0] === n ? (e = t[1]) : ((e = (0, $.jsx)(Zt, { content: n })), (t[0] = n), (t[1] = e)), e);
  }
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, $.jsx)(Qt, { content: n, emptyTrashAction: i })), (t[2] = n), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Zt(e) {
  let t = (0, en.c)(12),
    { content: n } = e,
    r = o(Y),
    i = h(oe),
    s = h(J);
  if (h(nn)) return null;
  let c;
  t[0] !== r || t[1] !== s
    ? ((c =
        s || r.value.basePath === `/space`
          ? (0, $.jsx)(a, {
              id: `library.emptyTrash.shortAction`,
              defaultMessage: `Empty trash`,
              description: `Trash banner action that opens a confirmation before permanently deleting items of the selected type`,
            })
          : (0, $.jsx)(a, {
              id: `library.emptyTrash.action`,
              defaultMessage: `Empty file trash`,
              description: `Library Trash banner action that opens a confirmation before permanently deleting every trashed file, including files outside the current filters`,
            })),
      (t[0] = r),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === r
    ? (l = t[4])
    : ((l = () => {
        let e = r.get(We).sessionId;
        (ct(r, e, Ie.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_INITIATED),
          G(r, tn, { accountId: r.value.accountId, userId: r.value.userId, sessionId: e }));
      }),
      (t[3] = r),
      (t[4] = l));
  let u;
  t[5] !== c || t[6] !== l || t[7] !== i
    ? ((u = { label: c, disabled: i, onClick: l }), (t[5] = c), (t[6] = l), (t[7] = i), (t[8] = u))
    : (u = t[8]);
  let d;
  return (
    t[9] !== n || t[10] !== u
      ? ((d = (0, $.jsx)(Qt, { content: n, emptyTrashAction: u })), (t[9] = n), (t[10] = u), (t[11] = d))
      : (d = t[11]),
    d
  );
}
function Qt(e) {
  let t = (0, en.c)(8),
    { content: n, emptyTrashAction: r } = e,
    i = h(J),
    o;
  t[0] !== n || t[1] !== i
    ? ((o =
        n ??
        (i
          ? (0, $.jsx)(a, {
              id: `libraryNext.trash.unifiedDescription`,
              defaultMessage: `Restore items you've recently deleted. Items are permanently deleted after 30 days.`,
              description: `Trash banner explaining that deleted pages and files can be restored before permanent deletion after 30 days`,
            })
          : (0, $.jsx)(a, {
              id: `libraryNext.trash.description`,
              defaultMessage: `Restore files you've recently deleted. Files are deleted forever after 30 days.`,
              description: `Informational banner above Library Trash. Explains that recently deleted files can be restored and are deleted forever after 30 days.`,
            }))),
      (t[0] = n),
      (t[1] = i),
      (t[2] = o))
    : (o = t[2]);
  let s = r?.label,
    c = r?.disabled,
    l = r?.onClick,
    u;
  return (
    t[3] !== o || t[4] !== s || t[5] !== c || t[6] !== l
      ? ((u = (0, $.jsx)(`div`, {
          className: `mb-3 select-none`,
          children: (0, $.jsx)(g, {
            variant: `insetNotice`,
            primaryCtaColor: `outlineSurface`,
            content: o,
            primaryCtaText: s,
            isPrimaryCtaDisabled: c,
            onPrimaryCtaClick: l,
          }),
        })),
        (t[3] = o),
        (t[4] = s),
        (t[5] = c),
        (t[6] = l),
        (t[7] = u))
      : (u = t[7]),
    u
  );
}
function $t(e) {
  let t = (0, en.c)(6),
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
  let o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(k, {
        children: (0, $.jsx)(E, {
          children: (0, $.jsx)(x, {
            title: (0, $.jsx)(b, {
              children: (0, $.jsx)(a, {
                id: `library.emptyTrash.loadError.title`,
                defaultMessage: `Couldn’t open Empty file trash`,
                description: `Error dialog title when the Empty file trash confirmation fails to load after retrying`,
              }),
            }),
            subtitle: (0, $.jsx)(a, {
              id: `library.emptyTrash.loadError.reload`,
              defaultMessage: `Reload the app and try again`,
              description: `Recovery instructions when loading the Empty file trash confirmation failed twice; reloading allows another attempt`,
            }),
          }),
        }),
      })),
      (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] === i
      ? (s = t[5])
      : ((s = (0, $.jsx)(D, { open: !0, contentProps: r, onOpenChange: i, children: o })),
        (t[4] = i),
        (t[5] = s)),
    s
  );
}
var en, $, tn, nn;
function rn() {
  return (rn = e(() => {
    ((en = F()),
      Fe(),
      d(),
      T(),
      i(),
      P(),
      S(),
      ie(),
      H(),
      de(),
      Qe(),
      tt(),
      lt(),
      ($ = L()),
      j(),
      (tn = n(
        async () =>
          (
            await C(
              async () => {
                let { EmptyLibraryTrashDialog: e } = await import(`./library-empty-trash-b55e29b80525.js`);
                return { EmptyLibraryTrashDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
              import.meta.url,
            )
          ).EmptyLibraryTrashDialog,
        { errorFallback: $t },
      )),
      (nn = A(Y, ({ get: e, scope: t }) => {
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
        let { isPending: n, isFetching: r, isError: i, hasNextPage: a } = e(ze);
        return !n && !r && !i && !a && e(xe) === `available` && e(_e)?.length === 0;
      })));
  }))();
}
export { Wt as a, Tt as c, Jt as i, Ut as l, rn as n, qt as o, Yt as r, Bt as s, Xt as t };
//# sourceMappingURL=library-trash-banner-c92dc8d87bb0.js.map
