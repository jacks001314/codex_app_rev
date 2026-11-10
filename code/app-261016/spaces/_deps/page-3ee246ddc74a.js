const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-468646d3979e.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $B as n,
  $St as r,
  $mt as i,
  $st as a,
  Bst as o,
  CNt as s,
  F3 as c,
  FBt as l,
  FNt as u,
  HFt as d,
  I3 as f,
  KSt as p,
  LNt as m,
  Lit as h,
  MNt as g,
  Mst as _,
  NLt as v,
  NNt as y,
  NSt as b,
  OFt as x,
  PBt as S,
  Pit as C,
  QB as w,
  Qst as T,
  SB as E,
  SLt as D,
  TY as O,
  USt as k,
  VRt as A,
  VSt as j,
  Vit as M,
  XOt as N,
  Y3 as P,
  Z3 as ee,
  ZSt as F,
  aCt as I,
  hRt as te,
  hst as ne,
  iCt as L,
  jit as R,
  jst as z,
  kFt as re,
  kLt as B,
  kRt as V,
  mst as ie,
  nCt as H,
  okt as ae,
  sct as U,
  tkt as W,
  wB as G,
  yCt as K,
  zst as oe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Alt as q,
  BRr as se,
  Cc as J,
  Ddn as ce,
  Dlt as Y,
  Edn as le,
  Elt as X,
  Flt as ue,
  Hfn as de,
  Mlt as fe,
  Nmt as pe,
  Nst as me,
  Olt as he,
  Pst as ge,
  Qmt as _e,
  S3 as ve,
  Sc as ye,
  T3 as be,
  Ult as xe,
  Vdn as Se,
  Vfn as Ce,
  Wlt as we,
  XEn as Te,
  Xfn as Ee,
  Xgn as De,
  YEn as Oe,
  Yfn as ke,
  Zfn as Ae,
  Zgn as je,
  _ur as Me,
  b2 as Ne,
  b3 as Pe,
  bLr as Fe,
  cfn as Ie,
  gur as Le,
  hdn as Re,
  iRr as ze,
  jfn as Be,
  jlt as Ve,
  kfn as He,
  lBr as Ue,
  lfn as We,
  mlr as Ge,
  nfn as Ke,
  opn as qe,
  sRr as Je,
  spn as Ye,
  sut as Xe,
  tdn as Ze,
  tfn as Qe,
  tyr as $e,
  uBr as et,
  uut as tt,
  vLr as nt,
  v_n as rt,
  vht as it,
  wLr as at,
  w_n as ot,
  x2 as st,
  xlr as ct,
  y_n as lt,
  zfn as ut,
} from "./app-initial-ad16eaadf81f.js";
import {
  D as dt,
  E as ft,
  O as pt,
  k as mt,
  l as ht,
  p as gt,
} from "./selectable-library-item-3b495aba5b29.js";
import { i as _t, n as vt, r as yt, t as bt } from "./library-marquee-selection-b21e2d515616.js";
import { n as xt, t as St } from "./library-selection-toolbar-6dae8ae740fc.js";
import { i as Ct, n as wt } from "./state-96ed81f5e609.js";
import { a as Tt, i as Et, r as Dt, t as Ot } from "./sharing-6c4d609745aa.js";
import { n as kt, t as At } from "./space-appearance-button-cab15cc62ff2.js";
import { n as jt, t as Mt } from "./primary-teams-4409de426fe2.js";
import { a as Nt, n as Pt, s as Ft, t as It } from "./page-content-item-331f3e1fa38d.js";
import { n as Lt, t as Rt } from "./create-menu-d89f2ede6f86.js";
import { a as zt, n as Bt, o as Vt, r as Ht, s as Ut, t as Wt } from "./pinned-pages-ceb6bb4900b3.js";
function Gt(e) {
  let t = (0, qt.c)(6),
    { space: n, isActive: r, navigation: i } = e,
    a = L(Le),
    o = L(Fe),
    s = L(ct),
    c = H(be, n.root_page_id),
    { data: l, isError: u } = H(ce, n.root_page_id);
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
      ? ((f = (0, Z.jsx)(Kt, { accountId: a, userId: o, space: n, navigation: i }, d)),
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
function Kt(e) {
  let t = (0, qt.c)(14),
    { accountId: i, userId: a, space: o, navigation: s } = e,
    c = r(T),
    l = k(),
    u = j(),
    [d, f] = (0, Jt.useState)(!1),
    [p, m] = (0, Jt.useState)(null),
    g;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = () => {
        (m(null), f(!0));
      }),
      (t[0] = g))
    : (g = t[0]);
  let _;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Z.jsxs)(P, {
        color: `ghostActive`,
        size: `toolbar`,
        radius: `full`,
        onClick: g,
        children: [
          (0, Z.jsx)(E, { icon: { 16: w, 20: n } }),
          (0, Z.jsx)(W, {
            id: `codex.pages.import.action`,
            defaultMessage: `Import`,
            description: `Open the dialog to import content as a new Page in this Space`,
          }),
        ],
      })),
      (t[1] = _))
    : (_ = t[1]);
  let v;
  t[2] !== i ||
  t[3] !== u ||
  t[4] !== l ||
  t[5] !== s ||
  t[6] !== d ||
  t[7] !== p ||
  t[8] !== c ||
  t[9] !== o ||
  t[10] !== a
    ? ((v = d
        ? (0, Z.jsx)(Jt.Suspense, {
            fallback: null,
            children: (0, Z.jsx)(Yt, {
              onClose: () => f(!1),
              onImport: async (e, t) => {
                let n = () => {
                  t.throwIfAborted();
                  let e = c.query.getData(ce, o.root_page_id);
                  if (
                    c.get(Le) !== i ||
                    c.get(Fe) !== a ||
                    !c.get(ct) ||
                    e?.metadata.access.can_write !== !0 ||
                    e.metadata.deleted_at != null ||
                    c.query.getData(Se, o.id)?.interaction_mode === `request_changes`
                  )
                    throw Error(`page_import_unavailable`);
                  Pe(c, o.root_page_id);
                };
                try {
                  n();
                  let r =
                    p?.provider === e.provider &&
                    p.format === e.format &&
                    p.content === e.content &&
                    (p.format === `url` ? p.link_id : void 0) === (e.format === `url` ? e.link_id : void 0)
                      ? p
                      : { ...e, parent_page_id: o.root_page_id };
                  m(r);
                  let d = await ze.safePost(`/pages/import`, {
                    requestBody: r,
                    additionalHeaders: { ...Ie, "ChatGPT-Account-ID": i },
                    expectedIdentity: { accountId: i, userId: a },
                    assertRequestCurrent: n,
                    signal: t,
                    retry: `never`,
                    expectedErrorStatuses: [400, 403, 404, 409, 413, 422, 503],
                  });
                  return (
                    n(),
                    Ze(c, i, d),
                    f(!1),
                    s == null
                      ? await l(`/space/${d.metadata.page_id}`, {
                          state: {
                            ...ge(u, i, d.metadata.page_id),
                            spaceSidebarAccountId: i,
                            spaceSidebarRootPageId: o.root_page_id,
                          },
                        })
                      : s.onOpenPage(d.metadata.page_id),
                    `imported`
                  );
                } catch (e) {
                  let t = e;
                  if (t instanceof R) {
                    if (t.status === 409 && t.diagnosticError instanceof h) {
                      let e = Xt.safeParse(t.diagnosticError.json);
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
      (t[2] = i),
      (t[3] = u),
      (t[4] = l),
      (t[5] = s),
      (t[6] = d),
      (t[7] = p),
      (t[8] = c),
      (t[9] = o),
      (t[10] = a),
      (t[11] = v))
    : (v = t[11]);
  let y;
  return (
    t[12] === v
      ? (y = t[13])
      : ((y = (0, Z.jsxs)(Z.Fragment, { children: [_, v] })), (t[12] = v), (t[13] = y)),
    y
  );
}
var qt, Jt, Z, Yt, Xt;
function Zt() {
  return (Zt = e(() => {
    ((qt = S()),
      F(),
      (Jt = l()),
      N(),
      b(),
      d(),
      at(),
      M(),
      ee(),
      O(),
      c(),
      G(),
      ve(),
      Ge(),
      me(),
      We(),
      Re(),
      a(),
      Je(),
      C(),
      (Z = m()),
      re(),
      (Yt = f(
        async () =>
          (
            await x(
              async () => {
                let { PageImportDialog: e } = await import(`./dialog-468646d3979e.js`);
                return { PageImportDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5]),
              import.meta.url,
            )
          ).PageImportDialog,
      )),
      (Xt = V({
        code: D([
          `notion_connection_required`,
          `notion_connection_selection_required`,
          `notion_reauth_required`,
        ]),
        retryable: te(!1),
        app_id: A().min(1),
        connections: B(V({ link_id: A().min(1), label: A(), reauth_required: v() })),
      })));
  }))();
}
function Qt(e) {
  let t = (0, $t.c)(63),
    { space: n, navigation: i, excludedPageIds: a, isActive: o } = e,
    s = r(T),
    c = H(et, `1241844879`),
    { pages: l, pending: u, failed: d, failedIds: f } = H(tn, n.id),
    { data: p, isPending: m, isError: h } = H(ce, n.root_page_id),
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    E,
    D,
    O,
    k;
  if (
    t[0] !== a ||
    t[1] !== d ||
    t[2] !== f ||
    t[3] !== o ||
    t[4] !== h ||
    t[5] !== m ||
    t[6] !== i ||
    t[7] !== l ||
    t[8] !== u ||
    t[9] !== p ||
    t[10] !== s ||
    t[11] !== c ||
    t[12] !== n.id ||
    t[13] !== n.root_page_id
  ) {
    let e = new Map();
    p != null &&
      !h &&
      p.metadata.access.can_read &&
      p.metadata.deleted_at == null &&
      !a.has(p.metadata.page_id) &&
      e.set(p.metadata.page_id, p.metadata);
    for (let t of l) a.has(t.page_id) || e.set(t.page_id, t);
    y = `flex min-h-0 flex-1 flex-col`;
    let r = !u && !m,
      T = d || h;
    (t[27] !== o || t[28] !== n.id || t[29] !== n.root_page_id || t[30] !== r || t[31] !== T
      ? ((b = (0, en.jsx)(Nt, {
          spaceId: n.id,
          rootPageId: n.root_page_id,
          ready: r,
          failed: T,
          creationActive: o,
        })),
        (t[27] = o),
        (t[28] = n.id),
        (t[29] = n.root_page_id),
        (t[30] = r),
        (t[31] = T),
        (t[32] = b))
      : (b = t[32]),
      (_ = pt),
      (C = (u || m) && e.size === 0),
      (w = e.size > 0 || a.size === 0),
      (E = `grid`),
      (D = !0),
      t[33] !== d || t[34] !== h
        ? ((O =
            d || h
              ? (0, en.jsx)(W, {
                  id: `space.teamHome.pagesError`,
                  defaultMessage: `Could not load all pages`,
                  description: `Error when the team space page list or its scoped search could not finish loading`,
                })
              : void 0),
          (t[33] = d),
          (t[34] = h),
          (t[35] = O))
        : (O = t[35]),
      t[36] !== f || t[37] !== s || t[38] !== n.id || t[39] !== n.root_page_id
        ? ((k = () => {
            (s.get(le, n.id).refetch(), s.get(ce, n.root_page_id).refetch());
            for (let e of f) s.get(Be, e).refetch();
          }),
          (t[36] = f),
          (t[37] = s),
          (t[38] = n.id),
          (t[39] = n.root_page_id),
          (t[40] = k))
        : (k = t[40]),
      (g = Ht),
      (x = c),
      (S = i),
      (v = [...e.values()]),
      (t[0] = a),
      (t[1] = d),
      (t[2] = f),
      (t[3] = o),
      (t[4] = h),
      (t[5] = m),
      (t[6] = i),
      (t[7] = l),
      (t[8] = u),
      (t[9] = p),
      (t[10] = s),
      (t[11] = c),
      (t[12] = n.id),
      (t[13] = n.root_page_id),
      (t[14] = g),
      (t[15] = _),
      (t[16] = v),
      (t[17] = y),
      (t[18] = b),
      (t[19] = x),
      (t[20] = S),
      (t[21] = C),
      (t[22] = w),
      (t[23] = E),
      (t[24] = D),
      (t[25] = O),
      (t[26] = k));
  } else
    ((g = t[14]),
      (_ = t[15]),
      (v = t[16]),
      (y = t[17]),
      (b = t[18]),
      (x = t[19]),
      (S = t[20]),
      (C = t[21]),
      (w = t[22]),
      (E = t[23]),
      (D = t[24]),
      (O = t[25]),
      (k = t[26]));
  let A;
  t[41] !== n || t[42] !== v
    ? ((A = v.map((e) => ({ page: e, parentSpace: n }))), (t[41] = n), (t[42] = v), (t[43] = A))
    : (A = t[43]);
  let j;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, en.jsx)(W, {
        id: `space.teamHome.noMatchingPages`,
        defaultMessage: `No matching pages`,
        description: `No Pages in this team space match the search`,
      })),
      (t[44] = j))
    : (j = t[44]);
  let M;
  t[45] !== g || t[46] !== A || t[47] !== x || t[48] !== S
    ? ((M = (0, en.jsx)(g, {
        selectable: x,
        navigation: S,
        pages: A,
        viewMode: `grid`,
        showSource: !1,
        emptyTitle: j,
      })),
      (t[45] = g),
      (t[46] = A),
      (t[47] = x),
      (t[48] = S),
      (t[49] = M))
    : (M = t[49]);
  let N;
  t[50] !== _ ||
  t[51] !== M ||
  t[52] !== C ||
  t[53] !== w ||
  t[54] !== E ||
  t[55] !== D ||
  t[56] !== O ||
  t[57] !== k
    ? ((N = (0, en.jsx)(_, {
        loading: C,
        hasData: w,
        viewMode: E,
        squareLoading: D,
        error: O,
        onRetry: k,
        children: M,
      })),
      (t[50] = _),
      (t[51] = M),
      (t[52] = C),
      (t[53] = w),
      (t[54] = E),
      (t[55] = D),
      (t[56] = O),
      (t[57] = k),
      (t[58] = N))
    : (N = t[58]);
  let P;
  return (
    t[59] !== y || t[60] !== b || t[61] !== N
      ? ((P = (0, en.jsxs)(`div`, { className: y, children: [b, N] })),
        (t[59] = y),
        (t[60] = b),
        (t[61] = N),
        (t[62] = P))
      : (P = t[62]),
    P
  );
}
var $t, en, tn;
function nn() {
  return (nn = e(() => {
    (($t = S()),
      F(),
      N(),
      mt(),
      a(),
      Ue(),
      C(),
      zt(),
      Ft(),
      He(),
      Re(),
      (en = m()),
      (tn = K(T, (e, { get: t }) => {
        let n = t(le, e),
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
          let l = t(Be, e.page_id, { enabled: !1 }).isFetching,
            u = t(Be, e.page_id, { enabled: l || c < 6 });
          ((u.isPending || u.isFetching) && c++, (s ||= u.isPending), u.isError && o.push(e.page_id));
          let d = u.error instanceof R && [403, 404, 410].includes(u.error.status);
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
function rn(e) {
  let t = (0, un.c)(50),
    {
      navigation: n,
      space: a,
      search: o,
      viewMode: s,
      expansion: c,
      scrollContainerRef: l,
      toolbarContainer: u,
      isActive: d,
    } = e,
    f = r(T),
    p = H(et, `1241844879`),
    m = p ? Vt : It,
    h = L(Le),
    g = L(se),
    _ = L(nt),
    v;
  t[0] !== h || t[1] !== g
    ? ((v = { accountId: h, userId: g }), (t[0] = h), (t[1] = g), (t[2] = v))
    : (v = t[2]);
  let y = H(Ce, v),
    b = L(dt),
    x;
  t[3] === a.id ? (x = t[4]) : ((x = (e) => e.drive_space_id === a.id), (t[3] = a.id), (t[4] = x));
  let S = de({ items: b.pages.filter(x) }, y).items,
    C = new Set(o === `` ? S.map(cn) : []),
    [w, E] = (0, fn.useState)(50),
    D = o !== `` && a.backing_type === `drive`,
    O = !D,
    k;
  t[5] === O ? (k = t[6]) : ((k = { enabled: O }), (t[5] = O), (t[6] = k));
  let { data: A, isPending: j, isError: M, refetch: N } = H(le, a.id, k),
    { data: P, isPending: ee, isError: F, refetch: te } = H(ce, a.root_page_id),
    R = D && h != null,
    z;
  t[7] !== h || t[8] !== _ || t[9] !== o || t[10] !== a.id || t[11] !== g
    ? ((z = [...rt, h, g, _, a.id, o]),
      (t[7] = h),
      (t[8] = _),
      (t[9] = o),
      (t[10] = a.id),
      (t[11] = g),
      (t[12] = z))
    : (z = t[12]);
  let re;
  t[13] !== h || t[14] !== _ || t[15] !== f || t[16] !== o || t[17] !== a.id || t[18] !== g
    ? ((re = (e) => {
        let { pageParam: t, signal: n } = e;
        if (h == null) throw Error(`space_account_unavailable`);
        let r = Me(f, h, g, _),
          s = AbortSignal.any([n, r.signal]),
          c = [],
          l = f.get(ot, { accountId: h, userId: g });
        return (
          l.add(c),
          Promise.resolve()
            .then(async () => {
              s.throwIfAborted();
              let e = await i(
                ze.safeGet(`/spaces/{space_id}/pages`, {
                  parameters: {
                    path: { space_id: a.id },
                    query: { query: o, cursor: t || void 0, limit: 50 },
                  },
                  signal: s,
                }),
                s,
              );
              if ((s.throwIfAborted(), e.items.some((e) => e.drive_space_id !== a.id)))
                throw Error(`space_page_membership_mismatch`);
              return {
                ...e,
                items: e.items.flatMap((e) => {
                  let t = e;
                  for (let e of c) {
                    if (t == null) break;
                    t = e(t);
                  }
                  return t == null ? [] : [t];
                }),
              };
            })
            .finally(() => {
              (l.delete(c), r.stop());
            })
        );
      }),
      (t[13] = h),
      (t[14] = _),
      (t[15] = f),
      (t[16] = o),
      (t[17] = a.id),
      (t[18] = g),
      (t[19] = re))
    : (re = t[19]);
  let B;
  t[20] !== R || t[21] !== z || t[22] !== re
    ? ((B = {
        enabled: R,
        queryKey: z,
        initialPageParam: ``,
        queryFn: re,
        getNextPageParam: sn,
        retry: !1,
        staleTime: oe.THIRTY_SECONDS,
      }),
      (t[20] = R),
      (t[21] = z),
      (t[22] = re),
      (t[23] = B))
    : (B = t[23]);
  let {
      data: V,
      isPending: ie,
      isError: ae,
      refetch: U,
      fetchNextPage: G,
      hasNextPage: K,
      isFetchingNextPage: q,
    } = ne(B),
    J = D ? V?.pages.flatMap(on) : A?.pages.items,
    Y = F || (D ? ae : M),
    X =
      Y || J == null || P == null
        ? void 0
        : de(
            {
              items: (0, dn.default)(
                [P.metadata, ...(s === `list` && o === `` ? [...J].sort(Qe) : J)],
                `page_id`,
              ),
            },
            y,
          ).items.filter(
            (e) =>
              e.deleted_at == null &&
              e.access.can_read &&
              !C.has(e.page_id) &&
              ((D && e.page_id !== a.root_page_id) || (e.title ?? ``).toLocaleLowerCase().includes(o)),
          ),
    ue = ee || (D ? ie : j),
    fe = D && X?.length === 0 && K,
    pe;
  t[24] === s
    ? (pe = t[25])
    : ((pe = s === `grid` ? (0, Q.jsx)(Xe, { square: !0 }) : (0, Q.jsx)(xe, {})), (t[24] = s), (t[25] = pe));
  let me = pe,
    he = D ? V?.pages.length : w,
    ge;
  t[26] !== fe || t[27] !== s
    ? ((ge = !fe && s === `list` ? (0, Q.jsx)(xe, { rowCount: 3 }) : null),
      (t[26] = fe),
      (t[27] = s),
      (t[28] = ge))
    : (ge = t[28]);
  let _e = D ? K : (X?.length ?? 0) > w,
    ve = D && q,
    ye;
  t[29] !== G || t[30] !== D
    ? ((ye = () => {
        D ? G() : E(an);
      }),
      (t[29] = G),
      (t[30] = D),
      (t[31] = ye))
    : (ye = t[31]);
  let be;
  t[32] !== he || t[33] !== ge || t[34] !== _e || t[35] !== ve || t[36] !== ye
    ? ((be = (0, Q.jsx)(
        Ne,
        { loadingPlaceholder: ge, hasNextPage: _e, isFetchingNextPage: ve, onLoadNextPage: ye },
        he,
      )),
      (t[32] = he),
      (t[33] = ge),
      (t[34] = _e),
      (t[35] = ve),
      (t[36] = ye),
      (t[37] = be))
    : (be = t[37]);
  let Se = be,
    we;
  t[38] === a.id ? (we = t[39]) : ((we = { embedded: !0, visitId: a.id }), (t[38] = a.id), (t[39] = we));
  let Te = ln,
    Ee =
      (s !== `grid` || o !== ``) &&
      (0, Q.jsx)(Nt, {
        spaceId: a.id,
        rootPageId: a.root_page_id,
        ready: !ue && X != null,
        failed: Y,
        creationActive: d,
      }),
    De =
      C.size > 0
        ? (0, Q.jsx)(Wt, {
            pins: { pages: S, pending: !1, failed: b.failed.filter((e) => S.some((t) => t.page_id === e)) },
            animate: !1,
            renderContentItem: (e, t, r, i) =>
              `page` in e
                ? (0, Q.jsx)(m, {
                    navigation: n,
                    page: e.page,
                    parentSpace: a,
                    viewMode: t,
                    libraryPresentation: !0,
                    reorderAction: i,
                  })
                : null,
          })
        : null,
    Oe =
      s === `grid` && o === ``
        ? (0, Q.jsx)(Qt, { space: a, navigation: n, excludedPageIds: C, isActive: d })
        : (0, Q.jsx)(pt, {
            loading: !Y && ue && X == null,
            hasData: X != null && (X.length > 0 || fe || (C.size === 0 && (!D || !K))),
            viewMode: s,
            squareLoading: !0,
            listLoading: me,
            error: Y
              ? (0, Q.jsx)(W, {
                  id: `space.teamHome.pagesError`,
                  defaultMessage: `Could not load all pages`,
                  description: `Error when the team space page list or its scoped search could not finish loading`,
                })
              : void 0,
            onRetry: () => {
              (te(), D ? U() : N());
            },
            pagination: fe ? void 0 : Se,
            children: fe
              ? (0, Q.jsxs)(`div`, { className: `flex min-h-0 flex-1 flex-col`, children: [Se, me] })
              : (0, Q.jsx)(Ht, {
                  selectable: p,
                  navigation: n,
                  expansion: o === `` ? c : void 0,
                  showSource: !1,
                  pages: X?.slice(0, D ? void 0 : w).map((e) => ({ page: e, parentSpace: a })),
                  viewMode: s,
                  gridLoading: D && q,
                  emptyTitle: (0, Q.jsx)(W, {
                    id: `space.teamHome.noMatchingPages`,
                    defaultMessage: `No matching pages`,
                    description: `No Pages in this team space match the search`,
                  }),
                }),
          }),
    je;
  t[40] !== Ee || t[41] !== De || t[42] !== Oe
    ? ((je = (0, Q.jsxs)(`div`, {
        className: `flex min-h-0 flex-1 flex-col gap-8 pt-2`,
        children: [Ee, De, Oe],
      })),
      (t[40] = Ee),
      (t[41] = De),
      (t[42] = Oe),
      (t[43] = je))
    : (je = t[43]);
  let Pe;
  return (
    t[44] !== Te || t[45] !== l || t[46] !== p || t[47] !== je || t[48] !== u
      ? ((Pe = (0, Q.jsx)(Te, { enabled: p, scrollContainerRef: l, toolbarContainer: u, children: je })),
        (t[44] = Te),
        (t[45] = l),
        (t[46] = p),
        (t[47] = je),
        (t[48] = u),
        (t[49] = Pe))
      : (Pe = t[49]),
    (0, Q.jsx)(I, {
      scope: Ae,
      value: we,
      children: (0, Q.jsx)(I, {
        scope: ke,
        value: {
          basePath: `/spaces/${a.id}`,
          directoryId: null,
          tab: `all`,
          search: o,
          categories: [],
          sources: [],
          includePages: !0,
          defaultViewMode: `list`,
          selectionPages: p
            ? {
                items: X ?? [],
                pinned: o === `` ? S : [],
                viewMode: s,
                visibleCount: D ? void 0 : w,
                expandedPageKeys: c.overrides,
                rootPageId: a.root_page_id,
              }
            : void 0,
        },
        children: Pe,
      }),
    })
  );
}
function an(e) {
  return e + 50;
}
function on(e) {
  return e.items;
}
function sn(e) {
  return e.next_cursor ?? void 0;
}
function cn(e) {
  return e.page_id;
}
function ln(e) {
  let t = (0, un.c)(16),
    { enabled: n, children: r, scrollContainerRef: i, toolbarContainer: a } = e,
    o = L(gt);
  if (!n) {
    let e;
    return (
      t[0] === r ? (e = t[1]) : ((e = (0, Q.jsx)(Q.Fragment, { children: r })), (t[0] = r), (t[1] = e)),
      e
    );
  }
  let s = o && `pb-24`,
    c;
  t[2] === s ? (c = t[3]) : ((c = g(`flex min-h-0 flex-1 flex-col`, s)), (t[2] = s), (t[3] = c));
  let l;
  t[4] !== r || t[5] !== i
    ? ((l = (0, Q.jsx)(bt, { scrollContainerRef: i, children: r })), (t[4] = r), (t[5] = i), (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] !== c || t[8] !== l
    ? ((u = (0, Q.jsx)(`div`, { className: c, children: l })), (t[7] = c), (t[8] = l), (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] !== i || t[11] !== a
    ? ((d = a == null ? null : (0, pn.createPortal)((0, Q.jsx)(St, { scrollContainerRef: i }), a)),
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
var un, dn, fn, pn, Q;
function mn() {
  return (mn = e(() => {
    ((un = S()),
      ie(),
      y(),
      (dn = t(s(), 1)),
      F(),
      U(),
      (fn = l()),
      (pn = u()),
      N(),
      at(),
      $e(),
      st(),
      pe(),
      tt(),
      we(),
      mt(),
      vt(),
      ht(),
      xt(),
      a(),
      Ue(),
      o(),
      ut(),
      Pt(),
      zt(),
      Bt(),
      ft(),
      Ut(),
      Ft(),
      lt(),
      Ke(),
      Re(),
      nn(),
      (Q = m()));
  }))();
}
function hn(e) {
  let t = (0, vn.c)(7),
    { isActive: n, spaceId: r, isVisible: i, navigation: a } = e,
    o = n === void 0 || n,
    s = i === void 0 || i,
    c = L(Le),
    l = L(se),
    u = L(nt),
    { spaceId: d } = p(),
    f = r ?? d;
  if (c == null || f == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(X, {})), (t[0] = e)) : (e = t[0]),
      e
    );
  }
  let m = `${l}:${c}:${u}:${f}`,
    h;
  return (
    t[1] !== o || t[2] !== s || t[3] !== a || t[4] !== f || t[5] !== m
      ? ((h = (0, $.jsx)(yt, {
          embedded: !0,
          children: (0, $.jsx)(gn, { isActive: o, isVisible: s, navigation: a, spaceId: f }, m),
        })),
        (t[1] = o),
        (t[2] = s),
        (t[3] = a),
        (t[4] = f),
        (t[5] = m),
        (t[6] = h))
      : (h = t[6]),
    h
  );
}
function gn(e) {
  let t = (0, vn.c)(35),
    { isActive: n, isVisible: r, navigation: i, spaceId: a } = e,
    o = j(),
    s = L(_e),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = { enabled: !1 }), (t[0] = c)) : (c = t[0]);
  let { data: l } = H(Se, a, c),
    u = H(Ct, a),
    d = u.enabled && r,
    f;
  t[1] !== u || t[2] !== d
    ? ((f = { ...u, gcTime: oe.FIVE_MINUTES, staleTime: u.staleTime, enabled: d }),
      (t[1] = u),
      (t[2] = d),
      (t[3] = f))
    : (f = t[3]);
  let { data: p, error: m, isError: h, isFetchedAfterMount: g, fetchStatus: v, refetch: y } = _(f),
    b = h && v === `idle`,
    x,
    S;
  (t[4] !== m || t[5] !== b || t[6] !== r || t[7] !== a
    ? ((x = () => {
        r && b && je.collectionFailed(a, void 0, m);
      }),
      (S = [r, b, a, m]),
      (t[4] = m),
      (t[5] = b),
      (t[6] = r),
      (t[7] = a),
      (t[8] = x),
      (t[9] = S))
    : ((x = t[8]), (S = t[9])),
    (0, yn.useLayoutEffect)(x, S));
  let [C, w] = (0, yn.useState)(p?.backing_type);
  if ((p != null && C !== p.backing_type && w(p.backing_type), !r)) return null;
  if (b && m instanceof R && [403, 404, 410].includes(m.status)) {
    let e = i == null,
      n;
    t[10] === a ? (n = t[11]) : ((n = { kind: `space`, id: a }), (t[10] = a), (t[11] = n));
    let r = C == null ? void 0 : C === `drive`,
      o;
    t[12] === y ? (o = t[13]) : ((o = () => void y()), (t[12] = y), (t[13] = o));
    let s;
    return (
      t[14] !== e || t[15] !== n || t[16] !== r || t[17] !== o
        ? ((s = (0, $.jsx)(ye, { recoverWorkspace: e, target: n, canRequestAccess: r, onRetry: o })),
          (t[14] = e),
          (t[15] = n),
          (t[16] = r),
          (t[17] = o),
          (t[18] = s))
        : (s = t[18]),
      s
    );
  }
  if (b) {
    let e;
    t[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(W, {
          id: `codex.space.openError`,
          defaultMessage: `Could not open space`,
          description: `Error shown when the current account cannot load a Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        })),
        (t[19] = e))
      : (e = t[19]);
    let n;
    t[20] === y ? (n = t[21]) : ((n = () => void y()), (t[20] = y), (t[21] = n));
    let r;
    t[22] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(W, {
          id: `codex.space.page.retry`,
          defaultMessage: `Try again`,
          description: `Button that retries loading shared Pages after a failure`,
        })),
        (t[22] = r))
      : (r = t[22]);
    let i;
    return (
      t[23] === n
        ? (i = t[24])
        : ((i = (0, $.jsx)(Oe, {
            title: e,
            actions: (0, $.jsx)(P, { color: `secondary`, onClick: n, children: r }),
          })),
          (t[23] = n),
          (t[24] = i)),
      i
    );
  }
  if (p == null || !g || h) {
    let e = o.state?.createdSpaceId === a ? (p ?? l) : void 0,
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
    let i = o.state?.createdSpaceId === a ? `list` : (s.viewMode ?? `list`),
      c;
    return (
      t[27] !== n || t[28] !== r || t[29] !== i
        ? ((c = (0, $.jsx)(X, { name: n, appearance: r, viewMode: i })),
          (t[27] = n),
          (t[28] = r),
          (t[29] = i),
          (t[30] = c))
        : (c = t[30]),
      c
    );
  }
  let T;
  return (
    t[31] !== p || t[32] !== n || t[33] !== i
      ? ((T = (0, $.jsx)(_n, { isActive: n, navigation: i, space: p })),
        (t[31] = p),
        (t[32] = n),
        (t[33] = i),
        (t[34] = T))
      : (T = t[34]),
    T
  );
}
function _n(e) {
  let t = (0, vn.c)(80),
    { isActive: n, navigation: i, space: a } = e,
    o = n === void 0 || n,
    s = r(Ee),
    c = j(),
    l = k(),
    u,
    d;
  (t[0] !== o || t[1] !== s || t[2] !== a.id
    ? ((u = () => {
        if (!o) return;
        let e = () => {
          document.visibilityState === `visible` && document.hasFocus() && Ye(s, a.id);
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
      (d = [o, s, a.id]),
      (t[0] = o),
      (t[1] = s),
      (t[2] = a.id),
      (t[3] = u),
      (t[4] = d))
    : ((u = t[3]), (d = t[4])),
    (0, yn.useEffect)(u, d));
  let f = ae(),
    p = L(Le),
    m = L(se),
    h = L(nt),
    g;
  t[5] !== p || t[6] !== h || t[7] !== a.id || t[8] !== m
    ? ((g = JSON.stringify([m, p, h, a.id])), (t[5] = p), (t[6] = h), (t[7] = a.id), (t[8] = m), (t[9] = g))
    : (g = t[9]);
  let _ = g,
    [v, y] = (0, yn.useState)(``),
    b = v;
  i ?? (b = c.state?.spaceHomeSearch?.identity === _ ? c.state.spaceHomeSearch.query : ``);
  let x;
  t[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((x = { overrides: {} }), (t[10] = x)) : (x = t[10]);
  let [S, C] = (0, yn.useState)(x),
    w = L(_e),
    T = c.state?.createdSpaceId === a.id ? `list` : (w.viewMode ?? `list`),
    { data: E, isError: D } = H(ce, a.root_page_id),
    O = !D && E?.metadata.access.can_share === !0 && a.interaction_mode !== `request_changes`,
    A;
  t[11] !== f || t[12] !== a.name
    ? ((A = f.formatMessage(
        {
          id: `space.teamHome.search`,
          defaultMessage: `Search in {name}`,
          description: `Search field scoped to the named team space`,
        },
        { name: a.name },
      )),
      (t[11] = f),
      (t[12] = a.name),
      (t[13] = A))
    : (A = t[13]);
  let M = A,
    N = (0, yn.useRef)(null),
    [P, ee] = (0, yn.useState)(null),
    F;
  t[14] === a.id ? (F = t[15]) : ((F = (0, $.jsx)(Mt, { spaceId: a.id })), (t[14] = a.id), (t[15] = F));
  let I;
  t[16] === a ? (I = t[17]) : ((I = (0, $.jsx)(At, { space: a })), (t[16] = a), (t[17] = I));
  let te;
  t[18] === a.name
    ? (te = t[19])
    : ((te = (0, $.jsx)(`span`, { className: `truncate`, children: a.name })),
      (t[18] = a.name),
      (t[19] = te));
  let ne;
  t[20] !== I || t[21] !== te
    ? ((ne = (0, $.jsxs)(`span`, { className: `flex min-w-0 items-center gap-3`, children: [I, te] })),
      (t[20] = I),
      (t[21] = te),
      (t[22] = ne))
    : (ne = t[22]);
  let R;
  t[23] !== c || t[24] !== l || t[25] !== s || t[26] !== a.id
    ? ((R = (e) => {
        (it(s, { viewMode: e }),
          c.state?.createdSpaceId === a.id &&
            l(c, { replace: !0, preventScrollReset: !0, state: { ...c.state, createdSpaceId: void 0 } }));
      }),
      (t[23] = c),
      (t[24] = l),
      (t[25] = s),
      (t[26] = a.id),
      (t[27] = R))
    : (R = t[27]);
  let z;
  t[28] !== R || t[29] !== T
    ? ((z = { value: T, onChange: R }), (t[28] = R), (t[29] = T), (t[30] = z))
    : (z = t[30]);
  let re = b,
    B;
  t[31] !== _ || t[32] !== c || t[33] !== l || t[34] !== i
    ? ((B = (e) => {
        if (i != null) {
          y(e);
          return;
        }
        l(c, {
          replace: !0,
          preventScrollReset: !0,
          state: { ...c.state, spaceHomeSearch: { identity: _, query: e } },
        });
      }),
      (t[31] = _),
      (t[32] = c),
      (t[33] = l),
      (t[34] = i),
      (t[35] = B))
    : (B = t[35]);
  let V;
  t[36] === f
    ? (V = t[37])
    : ((V = f.formatMessage({
        id: `space.list.searchPlaceholder`,
        defaultMessage: `Search`,
        description: `Placeholder for the search field on Space home`,
      })),
      (t[36] = f),
      (t[37] = V));
  let ie;
  t[38] !== O || t[39] !== f || t[40] !== o || t[41] !== i || t[42] !== E || t[43] !== D || t[44] !== a
    ? ((ie =
        !D && E != null
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(Et, {
                  canShare: O,
                  renderDialog: o,
                  space: a,
                  children: (e) => {
                    let { onShare: t, prewarmSharing: n } = e;
                    return t == null
                      ? null
                      : (0, $.jsx)(he, {
                          "aria-label": f.formatMessage({
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
                (0, $.jsx)(Gt, { space: a, isActive: o, navigation: i }),
                (0, $.jsx)(Ot, { renderDialog: o, spaceId: a.id }),
              ],
            })
          : null),
      (t[38] = O),
      (t[39] = f),
      (t[40] = o),
      (t[41] = i),
      (t[42] = E),
      (t[43] = D),
      (t[44] = a),
      (t[45] = ie))
    : (ie = t[45]);
  let U;
  t[46] === a ? (U = t[47]) : ((U = (0, $.jsx)(Rt, { space: a })), (t[46] = a), (t[47] = U));
  let W;
  t[48] !== ie || t[49] !== U
    ? ((W = (0, $.jsxs)($.Fragment, { children: [ie, U] })), (t[48] = ie), (t[49] = U), (t[50] = W))
    : (W = t[50]);
  let G;
  t[51] !== b || t[52] !== M || t[53] !== z || t[54] !== B || t[55] !== V || t[56] !== W
    ? ((G = (0, $.jsx)(fe, {
        fixedSearchWidth: !0,
        viewModeControl: z,
        searchQuery: re,
        onSearchQueryChange: B,
        searchLabel: M,
        searchPlaceholder: V,
        actions: W,
      })),
      (t[51] = b),
      (t[52] = M),
      (t[53] = z),
      (t[54] = B),
      (t[55] = V),
      (t[56] = W),
      (t[57] = G))
    : (G = t[57]);
  let K;
  t[58] === b ? (K = t[59]) : ((K = b.trim().toLocaleLowerCase()), (t[58] = b), (t[59] = K));
  let oe;
  t[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (e, t) => C((n) => ({ ...n, overrides: { ...n.overrides, [e]: t } }))), (t[60] = oe))
    : (oe = t[60]);
  let q;
  t[61] !== S || t[62] !== a.root_page_id
    ? ((q = { ...S, rootPageId: a.root_page_id, onToggle: oe }),
      (t[61] = S),
      (t[62] = a.root_page_id),
      (t[63] = q))
    : (q = t[63]);
  let J;
  t[64] !== o || t[65] !== i || t[66] !== a || t[67] !== K || t[68] !== q || t[69] !== P || t[70] !== T
    ? ((J = (0, $.jsx)(rn, {
        isActive: o,
        toolbarContainer: P,
        scrollContainerRef: N,
        navigation: i,
        space: a,
        search: K,
        viewMode: T,
        expansion: q,
      })),
      (t[64] = o),
      (t[65] = i),
      (t[66] = a),
      (t[67] = K),
      (t[68] = q),
      (t[69] = P),
      (t[70] = T),
      (t[71] = J))
    : (J = t[71]);
  let Y;
  t[72] !== ne || t[73] !== G || t[74] !== J || t[75] !== F
    ? ((Y = (0, $.jsx)(Ve, {
        scrollContainerRef: N,
        subtitle: F,
        stickyNavigation: !1,
        title: ne,
        controls: G,
        children: J,
      })),
      (t[72] = ne),
      (t[73] = G),
      (t[74] = J),
      (t[75] = F),
      (t[76] = Y))
    : (Y = t[76]);
  let le;
  t[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = (0, $.jsx)(`div`, { ref: ee })), (t[77] = le))
    : (le = t[77]);
  let X;
  return (
    t[78] === Y
      ? (X = t[79])
      : ((X = (0, $.jsxs)(`div`, { className: `h-full min-h-0 contain-layout`, children: [Y, le] })),
        (t[78] = Y),
        (t[79] = X)),
    X
  );
}
var vn, yn, $;
function bn() {
  return (bn = e(() => {
    ((vn = S()),
      z(),
      F(),
      (yn = l()),
      N(),
      b(),
      at(),
      ee(),
      Te(),
      pe(),
      _t(),
      ue(),
      jt(),
      o(),
      q(),
      C(),
      J(),
      wt(),
      Dt(),
      Zt(),
      Lt(),
      De(),
      qe(),
      Tt(),
      kt(),
      Re(),
      Y(),
      mn(),
      ($ = m()));
  }))();
}
bn();
export { hn as TeamSpaceHome };
//# sourceMappingURL=page-3ee246ddc74a.js.map
