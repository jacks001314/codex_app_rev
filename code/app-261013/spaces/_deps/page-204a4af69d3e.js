const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-1fcc8b450c10.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $It as r,
  B4 as i,
  Cot as a,
  Dz as o,
  EPt as s,
  Ext as c,
  Fat as l,
  Hxt as u,
  IDt as d,
  Ixt as f,
  Mot as p,
  Not as m,
  Pat as h,
  Pxt as g,
  Rpt as _,
  TJ as v,
  TLt as y,
  Trt as b,
  VDt as x,
  Vxt as S,
  Xot as C,
  Yot as w,
  _It as T,
  _Mt as E,
  _xt as D,
  fPt as O,
  gMt as k,
  hrt as A,
  iB as j,
  jDt as M,
  kxt as N,
  kz as P,
  nSt as F,
  oIt as ee,
  pIt as te,
  pLt as I,
  pPt as L,
  rB as ne,
  rst as re,
  sMt as ie,
  t3 as ae,
  vrt as R,
  vzt as z,
  wot as B,
  wxt as oe,
  xMt as V,
  xrt as se,
  yMt as ce,
  yzt as H,
  z4 as U,
  zxt as W,
} from "./app-shared-bbfeca5e5737.js";
import {
  $2 as G,
  $mn as le,
  ACn as K,
  Act as q,
  Cct as J,
  Dct as ue,
  Dor as de,
  Ear as Y,
  Ect as fe,
  Fcn as pe,
  Gcn as me,
  Kcn as he,
  Lcn as X,
  Mmn as ge,
  Msn as _e,
  Nar as ve,
  Nsn as ye,
  OPr as be,
  Oor as xe,
  Rct as Se,
  Sct as Ce,
  Sot as we,
  Tct as Te,
  Upt as Ee,
  XMr as De,
  YMr as Oe,
  Ymr as ke,
  Z2 as Ae,
  _c as je,
  ahn as Me,
  alt as Ne,
  dln as Pe,
  ehn as Fe,
  ehr as Ie,
  eln as Le,
  fln as Re,
  hcn as ze,
  iPr as Be,
  jCn as Ve,
  jmn as He,
  kPr as Ue,
  lmt as We,
  mcn as Ge,
  n0 as Ke,
  n4 as qe,
  nln as Je,
  nlt as Ye,
  qMr as Xe,
  qcn as Ze,
  qsn as Qe,
  sPr as $e,
  ssn as et,
  t0 as tt,
  tNr as nt,
  tln as rt,
  vc as it,
  wpt as at,
  xct as ot,
  xot as st,
  xsn as ct,
  zct as lt,
} from "./app-initial-5851df3f6cb1.js";
import {
  D as ut,
  E as dt,
  O as ft,
  k as pt,
  l as mt,
  p as ht,
} from "./selectable-library-item-873a2793fc51.js";
import { i as gt, n as _t, r as vt, t as yt } from "./library-marquee-selection-f0c8de81e25a.js";
import { n as bt, t as xt } from "./library-selection-toolbar-88821135b45f.js";
import { i as St, n as Ct } from "./state-d827adeac3bf.js";
import { a as wt, i as Tt, r as Et, t as Dt } from "./sharing-1780db7b1f52.js";
import { n as Ot, t as kt } from "./space-appearance-button-8606b155b9b0.js";
import { n as At, t as jt } from "./primary-teams-3facbefd3ebb.js";
import { a as Mt, n as Nt, s as Pt, t as Ft } from "./page-content-item-f083336f07ba.js";
import { n as It, t as Lt } from "./create-menu-e62036edae78.js";
import { a as Rt, n as zt, o as Bt, r as Vt, s as Ht, t as Ut } from "./pinned-pages-1af40ca84ec7.js";
function Wt(e) {
  let t = (0, Kt.c)(6),
    { space: n, isActive: r, navigation: i } = e,
    a = S(de),
    o = S(Oe),
    s = S(ve),
    c = W(qe, n.root_page_id),
    { data: l, isError: u } = W(ye, n.root_page_id);
  if (
    !s ||
    !r ||
    a == null ||
    o == null ||
    c != null ||
    u ||
    l?.metadata.access.can_write !== !0 ||
    l.metadata.deleted_at != null ||
    n.interaction_mode === `request_changes`
  )
    return null;
  let d = `${a}:${o}:${n.id}:${n.root_page_id}`,
    f;
  return (
    t[0] !== a || t[1] !== i || t[2] !== n || t[3] !== d || t[4] !== o
      ? ((f = (0, Z.jsx)(Gt, { accountId: a, userId: o, space: n, navigation: i }, d)),
        (t[0] = a),
        (t[1] = i),
        (t[2] = n),
        (t[3] = d),
        (t[4] = o),
        (t[5] = f))
      : (f = t[5]),
    f
  );
}
function Gt(e) {
  let t = (0, Kt.c)(14),
    { accountId: r, userId: i, space: s, navigation: l } = e,
    u = f(a),
    p = c(),
    m = oe(),
    [h, g] = (0, qt.useState)(!1),
    [_, v] = (0, qt.useState)(null),
    y;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = () => {
        (v(null), g(!0));
      }),
      (t[0] = y))
    : (y = t[0]);
  let b;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Z.jsxs)(n, {
        color: `ghostActive`,
        size: `toolbar`,
        radius: `full`,
        onClick: y,
        children: [
          (0, Z.jsx)(o, { icon: { 16: ne, 20: j } }),
          (0, Z.jsx)(d, {
            id: `codex.pages.import.action`,
            defaultMessage: `Import`,
            description: `Open the dialog to import content as a new Page in this Space`,
          }),
        ],
      })),
      (t[1] = b))
    : (b = t[1]);
  let x;
  t[2] !== r ||
  t[3] !== m ||
  t[4] !== p ||
  t[5] !== l ||
  t[6] !== h ||
  t[7] !== _ ||
  t[8] !== u ||
  t[9] !== s ||
  t[10] !== i
    ? ((x = h
        ? (0, Z.jsx)(qt.Suspense, {
            fallback: null,
            children: (0, Z.jsx)(Jt, {
              onClose: () => g(!1),
              onImport: async (e, t) => {
                let n = () => {
                  t.throwIfAborted();
                  let e = u.query.getData(ye, s.root_page_id);
                  if (
                    u.get(de) !== r ||
                    u.get(Oe) !== i ||
                    !u.get(ve) ||
                    e?.metadata.access.can_write !== !0 ||
                    e.metadata.deleted_at != null ||
                    u.query.getData(Qe, s.id)?.interaction_mode === `request_changes`
                  )
                    throw Error(`page_import_unavailable`);
                  Ae(u, s.root_page_id);
                };
                try {
                  n();
                  let a =
                    _?.provider === e.provider &&
                    _.format === e.format &&
                    _.content === e.content &&
                    (_.format === `url` ? _.link_id : void 0) === (e.format === `url` ? e.link_id : void 0)
                      ? _
                      : { ...e, parent_page_id: s.root_page_id };
                  v(a);
                  let o = await Be.safePost(`/pages/import`, {
                    requestBody: a,
                    additionalHeaders: { ...Ge, "ChatGPT-Account-ID": r },
                    expectedIdentity: { accountId: r, userId: i },
                    assertRequestCurrent: n,
                    signal: t,
                    retry: `never`,
                    expectedErrorStatuses: [400, 403, 404, 409, 413, 422, 503],
                  });
                  return (
                    n(),
                    et(u, r, o),
                    g(!1),
                    l == null
                      ? await p(`/space/${o.metadata.page_id}`, {
                          state: {
                            ...we(m, r, o.metadata.page_id),
                            spaceSidebarAccountId: r,
                            spaceSidebarRootPageId: s.root_page_id,
                          },
                        })
                      : l.onOpenPage(o.metadata.page_id),
                    `imported`
                  );
                } catch (e) {
                  let t = e;
                  if (t instanceof A) {
                    if (t.status === 409 && t.diagnosticError instanceof se) {
                      let e = Yt.safeParse(t.diagnosticError.json);
                      if (e.success) return { kind: `connection`, connection: e.data };
                    }
                    if (t.errorCode === `notion_source_unverifiable`) return `unverifiable`;
                    if (t.errorCode === `notion_source_forbidden`) return `source_rejected`;
                    if (t.status === 413) return `too_large`;
                    if (t.status === 400 || t.status === 422) return `unsupported`;
                    if (t.status === 403 || t.status === 404) return `rejected`;
                  }
                  return `failed`;
                }
              },
            }),
          })
        : null),
      (t[2] = r),
      (t[3] = m),
      (t[4] = p),
      (t[5] = l),
      (t[6] = h),
      (t[7] = _),
      (t[8] = u),
      (t[9] = s),
      (t[10] = i),
      (t[11] = x))
    : (x = t[11]);
  let S;
  return (
    t[12] === x
      ? (S = t[13])
      : ((S = (0, Z.jsxs)(Z.Fragment, { children: [b, x] })), (t[12] = x), (t[13] = S)),
    S
  );
}
var Kt, qt, Z, Jt, Yt;
function Xt() {
  return (Xt = e(() => {
    ((Kt = z()),
      g(),
      (qt = H()),
      M(),
      D(),
      s(),
      nt(),
      b(),
      ae(),
      v(),
      U(),
      P(),
      G(),
      Y(),
      st(),
      ze(),
      ct(),
      B(),
      $e(),
      R(),
      (Z = V()),
      L(),
      (Jt = i(
        async () =>
          (
            await O(
              async () => {
                let { PageImportDialog: e } = await import(`./dialog-1fcc8b450c10.js`);
                return { PageImportDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5]),
              import.meta.url,
            )
          ).PageImportDialog,
      )),
      (Yt = I({
        code: ee([
          `notion_connection_required`,
          `notion_connection_selection_required`,
          `notion_reauth_required`,
        ]),
        retryable: r(!1),
        app_id: y().min(1),
        connections: te(I({ link_id: y().min(1), label: y(), reauth_required: T() })),
      })));
  }))();
}
function Zt(e) {
  let t = (0, Qt.c)(63),
    { space: n, navigation: r, excludedPageIds: i, isActive: o } = e,
    s = f(a),
    c = W(Ue, `1241844879`),
    { pages: l, pending: u, failed: p, failedIds: m } = W(en, n.id),
    { data: h, isPending: g, isError: _ } = W(ye, n.root_page_id),
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    E,
    D,
    O,
    k,
    A;
  if (
    t[0] !== i ||
    t[1] !== p ||
    t[2] !== m ||
    t[3] !== o ||
    t[4] !== _ ||
    t[5] !== g ||
    t[6] !== r ||
    t[7] !== l ||
    t[8] !== u ||
    t[9] !== h ||
    t[10] !== s ||
    t[11] !== c ||
    t[12] !== n.id ||
    t[13] !== n.root_page_id
  ) {
    let e = new Map();
    h != null &&
      !_ &&
      h.metadata.access.can_read &&
      h.metadata.deleted_at == null &&
      !i.has(h.metadata.page_id) &&
      e.set(h.metadata.page_id, h.metadata);
    for (let t of l) i.has(t.page_id) || e.set(t.page_id, t);
    x = `flex min-h-0 flex-1 flex-col`;
    let a = !u && !g,
      f = p || _;
    (t[27] !== o || t[28] !== n.id || t[29] !== n.root_page_id || t[30] !== a || t[31] !== f
      ? ((S = (0, $t.jsx)(Mt, {
          spaceId: n.id,
          rootPageId: n.root_page_id,
          ready: a,
          failed: f,
          creationActive: o,
        })),
        (t[27] = o),
        (t[28] = n.id),
        (t[29] = n.root_page_id),
        (t[30] = a),
        (t[31] = f),
        (t[32] = S))
      : (S = t[32]),
      (y = ft),
      (T = (u || g) && e.size === 0),
      (E = e.size > 0 || i.size === 0),
      (D = `grid`),
      (O = !0),
      t[33] !== p || t[34] !== _
        ? ((k =
            p || _
              ? (0, $t.jsx)(d, {
                  id: `space.teamHome.pagesError`,
                  defaultMessage: `Could not load all pages`,
                  description: `Error when the team space page list or its scoped search could not finish loading`,
                })
              : void 0),
          (t[33] = p),
          (t[34] = _),
          (t[35] = k))
        : (k = t[35]),
      t[36] !== m || t[37] !== s || t[38] !== n.id || t[39] !== n.root_page_id
        ? ((A = () => {
            (s.get(_e, n.id).refetch(), s.get(ye, n.root_page_id).refetch());
            for (let e of m) s.get(X, e).refetch();
          }),
          (t[36] = m),
          (t[37] = s),
          (t[38] = n.id),
          (t[39] = n.root_page_id),
          (t[40] = A))
        : (A = t[40]),
      (v = Vt),
      (C = c),
      (w = r),
      (b = [...e.values()]),
      (t[0] = i),
      (t[1] = p),
      (t[2] = m),
      (t[3] = o),
      (t[4] = _),
      (t[5] = g),
      (t[6] = r),
      (t[7] = l),
      (t[8] = u),
      (t[9] = h),
      (t[10] = s),
      (t[11] = c),
      (t[12] = n.id),
      (t[13] = n.root_page_id),
      (t[14] = v),
      (t[15] = y),
      (t[16] = b),
      (t[17] = x),
      (t[18] = S),
      (t[19] = C),
      (t[20] = w),
      (t[21] = T),
      (t[22] = E),
      (t[23] = D),
      (t[24] = O),
      (t[25] = k),
      (t[26] = A));
  } else
    ((v = t[14]),
      (y = t[15]),
      (b = t[16]),
      (x = t[17]),
      (S = t[18]),
      (C = t[19]),
      (w = t[20]),
      (T = t[21]),
      (E = t[22]),
      (D = t[23]),
      (O = t[24]),
      (k = t[25]),
      (A = t[26]));
  let j;
  t[41] !== n || t[42] !== b
    ? ((j = b.map((e) => ({ page: e, parentSpace: n }))), (t[41] = n), (t[42] = b), (t[43] = j))
    : (j = t[43]);
  let M;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $t.jsx)(d, {
        id: `space.teamHome.noMatchingPages`,
        defaultMessage: `No matching pages`,
        description: `No Pages in this team space match the search`,
      })),
      (t[44] = M))
    : (M = t[44]);
  let N;
  t[45] !== v || t[46] !== j || t[47] !== C || t[48] !== w
    ? ((N = (0, $t.jsx)(v, {
        selectable: C,
        navigation: w,
        pages: j,
        viewMode: `grid`,
        showSource: !1,
        emptyTitle: M,
      })),
      (t[45] = v),
      (t[46] = j),
      (t[47] = C),
      (t[48] = w),
      (t[49] = N))
    : (N = t[49]);
  let P;
  t[50] !== y ||
  t[51] !== N ||
  t[52] !== T ||
  t[53] !== E ||
  t[54] !== D ||
  t[55] !== O ||
  t[56] !== k ||
  t[57] !== A
    ? ((P = (0, $t.jsx)(y, {
        loading: T,
        hasData: E,
        viewMode: D,
        squareLoading: O,
        error: k,
        onRetry: A,
        children: N,
      })),
      (t[50] = y),
      (t[51] = N),
      (t[52] = T),
      (t[53] = E),
      (t[54] = D),
      (t[55] = O),
      (t[56] = k),
      (t[57] = A),
      (t[58] = P))
    : (P = t[58]);
  let F;
  return (
    t[59] !== x || t[60] !== S || t[61] !== P
      ? ((F = (0, $t.jsxs)(`div`, { className: x, children: [S, P] })),
        (t[59] = x),
        (t[60] = S),
        (t[61] = P),
        (t[62] = F))
      : (F = t[62]),
    F
  );
}
var Qt, $t, en;
function tn() {
  return (tn = e(() => {
    ((Qt = z()),
      g(),
      M(),
      pt(),
      B(),
      be(),
      R(),
      Rt(),
      Pt(),
      pe(),
      ct(),
      ($t = V()),
      (en = F(a, (e, { get: t }) => {
        let n = t(_e, e),
          r = new Map(n.data?.pages.items.map((e) => [e.page_id, e])),
          i = [...r.values()],
          a = new Set(),
          o = [],
          s = n.isPending,
          c = 0;
        for (let e of i) {
          if (
            a.has(e.page_id) ||
            !e.access.can_read ||
            e.deleted_at != null ||
            (a.add(e.page_id), e.has_children !== !0 || e.page_id === n.data?.space.root_page_id)
          )
            continue;
          let l = t(X, e.page_id, { enabled: !1 }).isFetching,
            u = t(X, e.page_id, { enabled: l || c < 6 });
          ((u.isPending || u.isFetching) && c++, (s ||= u.isPending), u.isError && o.push(e.page_id));
          let d = u.error instanceof A && [403, 404, 410].includes(u.error.status);
          for (let e of d ? [] : (u.data?.items ?? []))
            e.access.can_read && e.deleted_at == null && (r.set(e.page_id, e), i.push(e));
        }
        return {
          pages: [...r.values()].filter((e) => e.access.can_read && e.deleted_at == null),
          pending: s,
          failedIds: o,
          failed: n.isError || o.length > 0,
        };
      })));
  }))();
}
function nn(e) {
  let t = (0, ln.c)(50),
    {
      navigation: n,
      space: r,
      search: i,
      viewMode: o,
      expansion: s,
      scrollContainerRef: c,
      toolbarContainer: l,
      isActive: p,
    } = e,
    g = f(a),
    v = W(Ue, `1241844879`),
    y = v ? Bt : Ft,
    b = S(de),
    x = S(De),
    C = S(Xe),
    w;
  t[0] !== b || t[1] !== x
    ? ((w = { accountId: b, userId: x }), (t[0] = b), (t[1] = x), (t[2] = w))
    : (w = t[2]);
  let T = W(he, w),
    E = S(ut),
    D;
  t[3] === r.id ? (D = t[4]) : ((D = (e) => e.drive_space_id === r.id), (t[3] = r.id), (t[4] = D));
  let O = Ze({ items: E.pages.filter(D) }, T).items,
    k = new Set(i === `` ? O.map(sn) : []),
    [A, j] = (0, dn.useState)(50),
    M = i !== `` && r.backing_type === `drive`,
    N = !M,
    P;
  t[5] === N ? (P = t[6]) : ((P = { enabled: N }), (t[5] = N), (t[6] = P));
  let { data: F, isPending: ee, isError: te, refetch: I } = W(_e, r.id, P),
    { data: L, isPending: ne, isError: re, refetch: ie } = W(ye, r.root_page_id),
    ae = M && b != null,
    R;
  t[7] !== b || t[8] !== C || t[9] !== i || t[10] !== r.id || t[11] !== x
    ? ((R = [...le, b, x, C, r.id, i]),
      (t[7] = b),
      (t[8] = C),
      (t[9] = i),
      (t[10] = r.id),
      (t[11] = x),
      (t[12] = R))
    : (R = t[12]);
  let z;
  t[13] !== b || t[14] !== C || t[15] !== g || t[16] !== i || t[17] !== r.id || t[18] !== x
    ? ((z = (e) => {
        let { pageParam: t, signal: n } = e;
        if (b == null) throw Error(`space_account_unavailable`);
        let a = xe(g, b, x, C),
          o = AbortSignal.any([n, a.signal]),
          s = [],
          c = g.get(Me, { accountId: b, userId: x });
        return (
          c.add(s),
          Promise.resolve()
            .then(async () => {
              o.throwIfAborted();
              let e = await _(
                ke.safeGet(`/spaces/{space_id}/pages`, {
                  parameters: {
                    path: { space_id: r.id },
                    query: { query: i, cursor: t || void 0, limit: 50 },
                  },
                  signal: o,
                }),
                o,
              );
              if ((o.throwIfAborted(), e.items.some((e) => e.drive_space_id !== r.id)))
                throw Error(`space_page_membership_mismatch`);
              return {
                ...e,
                items: e.items.flatMap((e) => {
                  let t = e;
                  for (let e of s) {
                    if (t == null) break;
                    t = e(t);
                  }
                  return t == null ? [] : [t];
                }),
              };
            })
            .finally(() => {
              (c.delete(s), a.stop());
            })
        );
      }),
      (t[13] = b),
      (t[14] = C),
      (t[15] = g),
      (t[16] = i),
      (t[17] = r.id),
      (t[18] = x),
      (t[19] = z))
    : (z = t[19]);
  let B;
  t[20] !== ae || t[21] !== R || t[22] !== z
    ? ((B = {
        enabled: ae,
        queryKey: R,
        initialPageParam: ``,
        queryFn: z,
        getNextPageParam: on,
        retry: !1,
        staleTime: h.THIRTY_SECONDS,
      }),
      (t[20] = ae),
      (t[21] = R),
      (t[22] = z),
      (t[23] = B))
    : (B = t[23]);
  let {
      data: oe,
      isPending: V,
      isError: se,
      refetch: ce,
      fetchNextPage: H,
      hasNextPage: U,
      isFetchingNextPage: G,
    } = m(B),
    K = M ? oe?.pages.flatMap(an) : F?.pages.items,
    q = re || (M ? se : te),
    J =
      q || K == null || L == null
        ? void 0
        : Ze({ items: (0, un.default)([L.metadata, ...K], `page_id`) }, T).items.filter(
            (e) =>
              e.deleted_at == null &&
              e.access.can_read &&
              !k.has(e.page_id) &&
              ((M && e.page_id !== r.root_page_id) || (e.title ?? ``).toLocaleLowerCase().includes(i)),
          ),
    ue = ne || (M ? V : ee),
    Y = M && J?.length === 0 && U,
    fe;
  t[24] === o
    ? (fe = t[25])
    : ((fe = o === `grid` ? (0, Q.jsx)(Ye, { square: !0 }) : (0, Q.jsx)(Se, {})), (t[24] = o), (t[25] = fe));
  let pe = fe,
    me = M ? oe?.pages.length : A,
    X;
  t[26] !== Y || t[27] !== o
    ? ((X = !Y && o === `list` ? (0, Q.jsx)(Se, { rowCount: 3 }) : null),
      (t[26] = Y),
      (t[27] = o),
      (t[28] = X))
    : (X = t[28]);
  let ge = M ? U : (J?.length ?? 0) > A,
    ve = M && G,
    be;
  t[29] !== H || t[30] !== M
    ? ((be = () => {
        M ? H() : j(rn);
      }),
      (t[29] = H),
      (t[30] = M),
      (t[31] = be))
    : (be = t[31]);
  let Ce;
  t[32] !== me || t[33] !== X || t[34] !== ge || t[35] !== ve || t[36] !== be
    ? ((Ce = (0, Q.jsx)(
        tt,
        { loadingPlaceholder: X, hasNextPage: ge, isFetchingNextPage: ve, onLoadNextPage: be },
        me,
      )),
      (t[32] = me),
      (t[33] = X),
      (t[34] = ge),
      (t[35] = ve),
      (t[36] = be),
      (t[37] = Ce))
    : (Ce = t[37]);
  let we = Ce,
    Te;
  t[38] === r.id ? (Te = t[39]) : ((Te = { embedded: !0, visitId: r.id }), (t[38] = r.id), (t[39] = Te));
  let Ee = cn,
    Oe =
      (o !== `grid` || i !== ``) &&
      (0, Q.jsx)(Mt, {
        spaceId: r.id,
        rootPageId: r.root_page_id,
        ready: !ue && J != null,
        failed: q,
        creationActive: p,
      }),
    Ae =
      k.size > 0
        ? (0, Q.jsx)(Ut, {
            pins: { pages: O, pending: !1, failed: E.failed.filter((e) => O.some((t) => t.page_id === e)) },
            animate: !1,
            renderContentItem: (e, t, i, a) =>
              `page` in e
                ? (0, Q.jsx)(y, {
                    navigation: n,
                    page: e.page,
                    parentSpace: r,
                    viewMode: t,
                    libraryPresentation: !0,
                    reorderAction: a,
                  })
                : null,
          })
        : null,
    je =
      o === `grid` && i === ``
        ? (0, Q.jsx)(Zt, { space: r, navigation: n, excludedPageIds: k, isActive: p })
        : (0, Q.jsx)(ft, {
            loading: !q && ue && J == null,
            hasData: J != null && (J.length > 0 || Y || (k.size === 0 && (!M || !U))),
            viewMode: o,
            squareLoading: !0,
            listLoading: pe,
            error: q
              ? (0, Q.jsx)(d, {
                  id: `space.teamHome.pagesError`,
                  defaultMessage: `Could not load all pages`,
                  description: `Error when the team space page list or its scoped search could not finish loading`,
                })
              : void 0,
            onRetry: () => {
              (ie(), M ? ce() : I());
            },
            pagination: Y ? void 0 : we,
            children: Y
              ? (0, Q.jsxs)(`div`, { className: `flex min-h-0 flex-1 flex-col`, children: [we, pe] })
              : (0, Q.jsx)(Vt, {
                  selectable: v,
                  navigation: n,
                  expansion: i === `` ? s : void 0,
                  showSource: !1,
                  pages: J?.slice(0, M ? void 0 : A).map((e) => ({ page: e, parentSpace: r })),
                  viewMode: o,
                  gridLoading: M && G,
                  emptyTitle: (0, Q.jsx)(d, {
                    id: `space.teamHome.noMatchingPages`,
                    defaultMessage: `No matching pages`,
                    description: `No Pages in this team space match the search`,
                  }),
                }),
          }),
    Ne;
  t[40] !== Oe || t[41] !== Ae || t[42] !== je
    ? ((Ne = (0, Q.jsxs)(`div`, {
        className: `flex min-h-0 flex-1 flex-col gap-8 pt-2`,
        children: [Oe, Ae, je],
      })),
      (t[40] = Oe),
      (t[41] = Ae),
      (t[42] = je),
      (t[43] = Ne))
    : (Ne = t[43]);
  let Pe;
  return (
    t[44] !== Ee || t[45] !== c || t[46] !== v || t[47] !== Ne || t[48] !== l
      ? ((Pe = (0, Q.jsx)(Ee, { enabled: v, scrollContainerRef: c, toolbarContainer: l, children: Ne })),
        (t[44] = Ee),
        (t[45] = c),
        (t[46] = v),
        (t[47] = Ne),
        (t[48] = l),
        (t[49] = Pe))
      : (Pe = t[49]),
    (0, Q.jsx)(u, {
      scope: Je,
      value: Te,
      children: (0, Q.jsx)(u, {
        scope: Le,
        value: {
          basePath: `/spaces/${r.id}`,
          directoryId: null,
          tab: `all`,
          search: i,
          categories: [],
          sources: [],
          includePages: !0,
          defaultViewMode: `list`,
          selectionPages: v
            ? {
                items: J ?? [],
                pinned: i === `` ? O : [],
                viewMode: o,
                visibleCount: M ? void 0 : A,
                expandedPageKeys: s.overrides,
                rootPageId: r.root_page_id,
              }
            : void 0,
        },
        children: Pe,
      }),
    })
  );
}
function rn(e) {
  return e + 50;
}
function an(e) {
  return e.items;
}
function on(e) {
  return e.next_cursor ?? void 0;
}
function sn(e) {
  return e.page_id;
}
function cn(e) {
  let t = (0, ln.c)(16),
    { enabled: n, children: r, scrollContainerRef: i, toolbarContainer: a } = e,
    o = S(ht);
  if (!n) {
    let e;
    return (
      t[0] === r ? (e = t[1]) : ((e = (0, Q.jsx)(Q.Fragment, { children: r })), (t[0] = r), (t[1] = e)),
      e
    );
  }
  let s = o && `pb-24`,
    c;
  t[2] === s ? (c = t[3]) : ((c = k(`flex min-h-0 flex-1 flex-col`, s)), (t[2] = s), (t[3] = c));
  let l;
  t[4] !== r || t[5] !== i
    ? ((l = (0, Q.jsx)(yt, { scrollContainerRef: i, children: r })), (t[4] = r), (t[5] = i), (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] !== c || t[8] !== l
    ? ((u = (0, Q.jsx)(`div`, { className: c, children: l })), (t[7] = c), (t[8] = l), (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] !== i || t[11] !== a
    ? ((d = a == null ? null : (0, fn.createPortal)((0, Q.jsx)(xt, { scrollContainerRef: i }), a)),
      (t[10] = i),
      (t[11] = a),
      (t[12] = d))
    : (d = t[12]);
  let f;
  return (
    t[13] !== u || t[14] !== d
      ? ((f = (0, Q.jsxs)(Q.Fragment, { children: [u, d] })), (t[13] = u), (t[14] = d), (t[15] = f))
      : (f = t[15]),
    f
  );
}
var ln, un, dn, fn, Q;
function pn() {
  return (pn = e(() => {
    ((ln = z()),
      p(),
      E(),
      (un = t(ie(), 1)),
      g(),
      re(),
      (dn = H()),
      (fn = ce()),
      M(),
      nt(),
      Ie(),
      Ke(),
      at(),
      Ne(),
      lt(),
      pt(),
      _t(),
      mt(),
      bt(),
      B(),
      be(),
      l(),
      me(),
      Nt(),
      Rt(),
      zt(),
      dt(),
      Ht(),
      Pt(),
      Fe(),
      ct(),
      tn(),
      (Q = V()));
  }))();
}
function mn(e) {
  let t = (0, _n.c)(7),
    { isActive: n, spaceId: r, isVisible: i, navigation: a } = e,
    o = n === void 0 || n,
    s = i === void 0 || i,
    c = S(de),
    l = S(De),
    u = S(Xe),
    { spaceId: d } = N(),
    f = r ?? d;
  if (c == null || f == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(ot, {})), (t[0] = e)) : (e = t[0]),
      e
    );
  }
  let p = `${l}:${c}:${u}:${f}`,
    m;
  return (
    t[1] !== o || t[2] !== s || t[3] !== a || t[4] !== f || t[5] !== p
      ? ((m = (0, $.jsx)(vt, {
          embedded: !0,
          children: (0, $.jsx)(hn, { isActive: o, isVisible: s, navigation: a, spaceId: f }, p),
        })),
        (t[1] = o),
        (t[2] = s),
        (t[3] = a),
        (t[4] = f),
        (t[5] = p),
        (t[6] = m))
      : (m = t[6]),
    m
  );
}
function hn(e) {
  let t = (0, _n.c)(35),
    { isActive: r, isVisible: i, navigation: a, spaceId: o } = e,
    s = oe(),
    c = S(Ee),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = { enabled: !1 }), (t[0] = l)) : (l = t[0]);
  let { data: u } = W(Qe, o, l),
    f = W(St, o),
    p = f.enabled && i,
    m;
  t[1] !== f || t[2] !== p
    ? ((m = { ...f, gcTime: h.FIVE_MINUTES, staleTime: f.staleTime, enabled: p }),
      (t[1] = f),
      (t[2] = p),
      (t[3] = m))
    : (m = t[3]);
  let { data: g, error: _, isError: v, isFetchedAfterMount: y, fetchStatus: b, refetch: x } = C(m),
    w = v && b === `idle`,
    T,
    E;
  (t[4] !== _ || t[5] !== w || t[6] !== i || t[7] !== o
    ? ((T = () => {
        i && w && ge.collectionFailed(o, void 0, _);
      }),
      (E = [i, w, o, _]),
      (t[4] = _),
      (t[5] = w),
      (t[6] = i),
      (t[7] = o),
      (t[8] = T),
      (t[9] = E))
    : ((T = t[8]), (E = t[9])),
    (0, vn.useLayoutEffect)(T, E));
  let [D, O] = (0, vn.useState)(g?.backing_type);
  if ((g != null && D !== g.backing_type && O(g.backing_type), !i)) return null;
  if (w && _ instanceof A && [403, 404, 410].includes(_.status)) {
    let e = a == null,
      n;
    t[10] === o ? (n = t[11]) : ((n = { kind: `space`, id: o }), (t[10] = o), (t[11] = n));
    let r = D == null ? void 0 : D === `drive`,
      i;
    t[12] === x ? (i = t[13]) : ((i = () => void x()), (t[12] = x), (t[13] = i));
    let s;
    return (
      t[14] !== e || t[15] !== n || t[16] !== r || t[17] !== i
        ? ((s = (0, $.jsx)(je, { recoverWorkspace: e, target: n, canRequestAccess: r, onRetry: i })),
          (t[14] = e),
          (t[15] = n),
          (t[16] = r),
          (t[17] = i),
          (t[18] = s))
        : (s = t[18]),
      s
    );
  }
  if (w) {
    let e;
    t[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(d, {
          id: `codex.space.openError`,
          defaultMessage: `Could not open space`,
          description: `Error shown when the current account cannot load a Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        })),
        (t[19] = e))
      : (e = t[19]);
    let r;
    t[20] === x ? (r = t[21]) : ((r = () => void x()), (t[20] = x), (t[21] = r));
    let i;
    t[22] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(d, {
          id: `codex.space.page.retry`,
          defaultMessage: `Try again`,
          description: `Button that retries loading shared Pages after a failure`,
        })),
        (t[22] = i))
      : (i = t[22]);
    let a;
    return (
      t[23] === r
        ? (a = t[24])
        : ((a = (0, $.jsx)(K, {
            title: e,
            actions: (0, $.jsx)(n, { color: `secondary`, onClick: r, children: i }),
          })),
          (t[23] = r),
          (t[24] = a)),
      a
    );
  }
  if (g == null || !y || v) {
    let e = s.state?.createdSpaceId === o ? (g ?? u) : void 0,
      n = e?.name,
      r;
    t[25] === e
      ? (r = t[26])
      : ((r =
          e?.symbol?.kind === `icon`
            ? { emoji: e.symbol.value, theme: e.symbol.color }
            : (e?.appearance ?? void 0)),
        (t[25] = e),
        (t[26] = r));
    let i = s.state?.createdSpaceId === o ? `list` : (c.viewMode ?? `list`),
      a;
    return (
      t[27] !== n || t[28] !== r || t[29] !== i
        ? ((a = (0, $.jsx)(ot, { name: n, appearance: r, viewMode: i })),
          (t[27] = n),
          (t[28] = r),
          (t[29] = i),
          (t[30] = a))
        : (a = t[30]),
      a
    );
  }
  let k;
  return (
    t[31] !== g || t[32] !== r || t[33] !== a
      ? ((k = (0, $.jsx)(gn, { isActive: r, navigation: a, space: g })),
        (t[31] = g),
        (t[32] = r),
        (t[33] = a),
        (t[34] = k))
      : (k = t[34]),
    k
  );
}
function gn(e) {
  let t = (0, _n.c)(80),
    { isActive: n, navigation: r, space: i } = e,
    a = n === void 0 || n,
    o = f(rt),
    s = oe(),
    l = c(),
    u,
    d;
  (t[0] !== a || t[1] !== o || t[2] !== i.id
    ? ((u = () => {
        if (!a) return;
        let e = () => {
          document.visibilityState === `visible` && document.hasFocus() && Re(o, i.id);
        };
        return (
          e(),
          window.addEventListener(`focus`, e),
          document.addEventListener(`visibilitychange`, e),
          () => {
            (window.removeEventListener(`focus`, e), document.removeEventListener(`visibilitychange`, e));
          }
        );
      }),
      (d = [a, o, i.id]),
      (t[0] = a),
      (t[1] = o),
      (t[2] = i.id),
      (t[3] = u),
      (t[4] = d))
    : ((u = t[3]), (d = t[4])),
    (0, vn.useEffect)(u, d));
  let p = x(),
    m = S(de),
    h = S(De),
    g = S(Xe),
    _;
  t[5] !== m || t[6] !== g || t[7] !== i.id || t[8] !== h
    ? ((_ = JSON.stringify([h, m, g, i.id])), (t[5] = m), (t[6] = g), (t[7] = i.id), (t[8] = h), (t[9] = _))
    : (_ = t[9]);
  let v = _,
    [y, b] = (0, vn.useState)(``),
    C = y;
  r ?? (C = s.state?.spaceHomeSearch?.identity === v ? s.state.spaceHomeSearch.query : ``);
  let w;
  t[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((w = { overrides: {} }), (t[10] = w)) : (w = t[10]);
  let [T, E] = (0, vn.useState)(w),
    D = S(Ee),
    O = s.state?.createdSpaceId === i.id ? `list` : (D.viewMode ?? `list`),
    { data: k, isError: A } = W(ye, i.root_page_id),
    j = !A && k?.metadata.access.can_share === !0 && i.interaction_mode !== `request_changes`,
    M;
  t[11] !== p || t[12] !== i.name
    ? ((M = p.formatMessage(
        {
          id: `space.teamHome.search`,
          defaultMessage: `Search in {name}`,
          description: `Search field scoped to the named team space`,
        },
        { name: i.name },
      )),
      (t[11] = p),
      (t[12] = i.name),
      (t[13] = M))
    : (M = t[13]);
  let N = M,
    P = (0, vn.useRef)(null),
    [F, ee] = (0, vn.useState)(null),
    te;
  t[14] === i.id ? (te = t[15]) : ((te = (0, $.jsx)(jt, { spaceId: i.id })), (t[14] = i.id), (t[15] = te));
  let I;
  t[16] === i ? (I = t[17]) : ((I = (0, $.jsx)(kt, { space: i })), (t[16] = i), (t[17] = I));
  let L;
  t[18] === i.name
    ? (L = t[19])
    : ((L = (0, $.jsx)(`span`, { className: `truncate`, children: i.name })), (t[18] = i.name), (t[19] = L));
  let ne;
  t[20] !== I || t[21] !== L
    ? ((ne = (0, $.jsxs)(`span`, { className: `flex min-w-0 items-center gap-3`, children: [I, L] })),
      (t[20] = I),
      (t[21] = L),
      (t[22] = ne))
    : (ne = t[22]);
  let re;
  t[23] !== s || t[24] !== l || t[25] !== o || t[26] !== i.id
    ? ((re = (e) => {
        (We(o, { viewMode: e }),
          s.state?.createdSpaceId === i.id &&
            l(s, { replace: !0, preventScrollReset: !0, state: { ...s.state, createdSpaceId: void 0 } }));
      }),
      (t[23] = s),
      (t[24] = l),
      (t[25] = o),
      (t[26] = i.id),
      (t[27] = re))
    : (re = t[27]);
  let ie;
  t[28] !== re || t[29] !== O
    ? ((ie = { value: O, onChange: re }), (t[28] = re), (t[29] = O), (t[30] = ie))
    : (ie = t[30]);
  let ae = C,
    R;
  t[31] !== v || t[32] !== s || t[33] !== l || t[34] !== r
    ? ((R = (e) => {
        if (r != null) {
          b(e);
          return;
        }
        l(s, {
          replace: !0,
          preventScrollReset: !0,
          state: { ...s.state, spaceHomeSearch: { identity: v, query: e } },
        });
      }),
      (t[31] = v),
      (t[32] = s),
      (t[33] = l),
      (t[34] = r),
      (t[35] = R))
    : (R = t[35]);
  let z;
  t[36] === p
    ? (z = t[37])
    : ((z = p.formatMessage({
        id: `space.list.searchPlaceholder`,
        defaultMessage: `Search`,
        description: `Placeholder for the search field on Space home`,
      })),
      (t[36] = p),
      (t[37] = z));
  let B;
  t[38] !== j || t[39] !== p || t[40] !== a || t[41] !== r || t[42] !== k || t[43] !== A || t[44] !== i
    ? ((B =
        !A && k != null
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(Tt, {
                  canShare: j,
                  renderDialog: a,
                  space: i,
                  children: (e) => {
                    let { onShare: t, prewarmSharing: n } = e;
                    return t == null
                      ? null
                      : (0, $.jsx)(J, {
                          "aria-label": p.formatMessage({
                            id: `space.teamHome.share`,
                            defaultMessage: `Share`,
                            description: `Open the existing sharing dialog for this team space`,
                          }),
                          onPointerEnter: (e) => {
                            e.pointerType !== `touch` && n?.();
                          },
                          onFocus: n,
                          onClick: t,
                        });
                  },
                }),
                (0, $.jsx)(Wt, { space: i, isActive: a, navigation: r }),
                (0, $.jsx)(Dt, { renderDialog: a, spaceId: i.id }),
              ],
            })
          : null),
      (t[38] = j),
      (t[39] = p),
      (t[40] = a),
      (t[41] = r),
      (t[42] = k),
      (t[43] = A),
      (t[44] = i),
      (t[45] = B))
    : (B = t[45]);
  let V;
  t[46] === i ? (V = t[47]) : ((V = (0, $.jsx)(Lt, { space: i })), (t[46] = i), (t[47] = V));
  let se;
  t[48] !== B || t[49] !== V
    ? ((se = (0, $.jsxs)($.Fragment, { children: [B, V] })), (t[48] = B), (t[49] = V), (t[50] = se))
    : (se = t[50]);
  let ce;
  t[51] !== C || t[52] !== N || t[53] !== ie || t[54] !== R || t[55] !== z || t[56] !== se
    ? ((ce = (0, $.jsx)(ue, {
        fixedSearchWidth: !0,
        viewModeControl: ie,
        searchQuery: ae,
        onSearchQueryChange: R,
        searchLabel: N,
        searchPlaceholder: z,
        actions: se,
      })),
      (t[51] = C),
      (t[52] = N),
      (t[53] = ie),
      (t[54] = R),
      (t[55] = z),
      (t[56] = se),
      (t[57] = ce))
    : (ce = t[57]);
  let H;
  t[58] === C ? (H = t[59]) : ((H = C.trim().toLocaleLowerCase()), (t[58] = C), (t[59] = H));
  let U;
  t[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (e, t) => E((n) => ({ ...n, overrides: { ...n.overrides, [e]: t } }))), (t[60] = U))
    : (U = t[60]);
  let G;
  t[61] !== T || t[62] !== i.root_page_id
    ? ((G = { ...T, rootPageId: i.root_page_id, onToggle: U }),
      (t[61] = T),
      (t[62] = i.root_page_id),
      (t[63] = G))
    : (G = t[63]);
  let le;
  t[64] !== a || t[65] !== r || t[66] !== i || t[67] !== H || t[68] !== G || t[69] !== F || t[70] !== O
    ? ((le = (0, $.jsx)(nn, {
        isActive: a,
        toolbarContainer: F,
        scrollContainerRef: P,
        navigation: r,
        space: i,
        search: H,
        viewMode: O,
        expansion: G,
      })),
      (t[64] = a),
      (t[65] = r),
      (t[66] = i),
      (t[67] = H),
      (t[68] = G),
      (t[69] = F),
      (t[70] = O),
      (t[71] = le))
    : (le = t[71]);
  let K;
  t[72] !== ne || t[73] !== ce || t[74] !== le || t[75] !== te
    ? ((K = (0, $.jsx)(fe, {
        scrollContainerRef: P,
        subtitle: te,
        stickyNavigation: !1,
        title: ne,
        controls: ce,
        children: le,
      })),
      (t[72] = ne),
      (t[73] = ce),
      (t[74] = le),
      (t[75] = te),
      (t[76] = K))
    : (K = t[76]);
  let q;
  t[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, $.jsx)(`div`, { ref: ee })), (t[77] = q))
    : (q = t[77]);
  let Y;
  return (
    t[78] === K
      ? (Y = t[79])
      : ((Y = (0, $.jsxs)(`div`, { className: `h-full min-h-0 contain-layout`, children: [K, q] })),
        (t[78] = K),
        (t[79] = Y)),
    Y
  );
}
var _n, vn, $;
function yn() {
  return (yn = e(() => {
    ((_n = z()),
      w(),
      g(),
      (vn = H()),
      M(),
      D(),
      nt(),
      ae(),
      Ve(),
      at(),
      gt(),
      q(),
      At(),
      l(),
      Te(),
      R(),
      it(),
      Ct(),
      Et(),
      Xt(),
      It(),
      He(),
      Pe(),
      wt(),
      Ot(),
      ct(),
      Ce(),
      pn(),
      ($ = V()));
  }))();
}
yn();
export { mn as TeamSpaceHome };
//# sourceMappingURL=page-204a4af69d3e.js.map
