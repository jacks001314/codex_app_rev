import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  BV as n,
  Cot as r,
  Cz as i,
  EH as a,
  Ext as o,
  IDt as s,
  Ixt as c,
  Pxt as l,
  TJ as u,
  Tz as d,
  VDt as f,
  Vxt as p,
  _Mt as m,
  _xt as h,
  gMt as g,
  hrt as _,
  hz as v,
  jDt as y,
  mz as b,
  t3 as x,
  vrt as S,
  vzt as C,
  wot as w,
  wxt as T,
  xMt as E,
  yzt as D,
  zxt as O,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Ut as k,
  ACn as A,
  Bct as j,
  Dhn as M,
  Dor as N,
  Ear as P,
  Fcn as F,
  Gtn as I,
  Hcn as ee,
  Icn as L,
  Jar as te,
  Kct as R,
  Lcn as z,
  Nsn as B,
  PH as V,
  QSn as H,
  QUt as U,
  R$ as W,
  Rct as G,
  Thn as K,
  Ucn as ne,
  Uct as q,
  Wct as re,
  Wer as ie,
  Wtn as ae,
  XMr as oe,
  XSn as se,
  Xjr as ce,
  Xz as le,
  Yjr as ue,
  Yz as de,
  ZSn as fe,
  ZUt as pe,
  Zz as me,
  aCn as he,
  alt as ge,
  aor as _e,
  b1 as ve,
  cCn as ye,
  ccn as be,
  cor as xe,
  eCn as Se,
  eln as Ce,
  iCn as we,
  ilt as Te,
  inn as Ee,
  jCn as De,
  kH as Oe,
  lCn as ke,
  mCn as Ae,
  oCn as je,
  ocn as Me,
  pCn as Ne,
  qSn as Pe,
  qct as Fe,
  rCn as Ie,
  rlt as Le,
  rnn as Re,
  tNr as ze,
  vH as Be,
  vot as Ve,
  wor as He,
  wpt as Ue,
  wsn as We,
  x1 as Ge,
  xsn as Ke,
  yH as qe,
  yot as Je,
  z$ as Ye,
  zct as Xe,
} from "./app-initial-5851df3f6cb1.js";
import { a as Ze, i as Qe, n as $e, o as et, r as tt, t as nt } from "./native-drag-0315af0f8adc.js";
import {
  A as rt,
  d as it,
  i as at,
  l as ot,
  p as st,
  t as ct,
  y as lt,
} from "./selectable-library-item-873a2793fc51.js";
import { i as ut, n as dt, r as ft, t as pt } from "./page-content-item-f083336f07ba.js";
function mt(e) {
  let i = (0, ht.c)(15),
    {
      page: a,
      expansion: o,
      knownChildrenByParent: l,
      renderPage: u,
      ancestors: d,
      showSource: m,
      showSharedBy: h,
      showSize: v,
    } = e,
    y = d === void 0 ? [] : d,
    b = m !== void 0 && m,
    x = h !== void 0 && h,
    S = v !== void 0 && v,
    C = c(r),
    w = f(),
    { defer_child_checks: T } = p(ne),
    E = p(te),
    D = p(N),
    k = p(oe),
    A = `node` in a ? a.node.id : a.page_id,
    j = `node` in a ? a.node.name : a.title,
    M = A === o.rootPageId,
    P = JSON.stringify([...y, A]),
    F = o.movingPage,
    I = !M && (o.overrides[P] ?? !1),
    ee = l.get(A),
    R;
  i[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((R = { enabled: !1 }), (i[0] = R)) : (R = i[0]);
  let { data: B, isPending: V, isError: H, error: U } = O(z, A, R),
    W = O(L, A),
    K;
  i[1] === U
    ? (K = i[2])
    : ((K = U instanceof _ && [403, 404, 410].includes(U.status)), (i[1] = U), (i[2] = K));
  let q = K,
    re = y.length,
    ie = de({
      pageId: A,
      data: B,
      error: U,
      partial: W,
      knownChildren: ee,
      sitePagesEnabled: E,
      excludedPageIds: o.excludedPageIds,
      ancestors: y,
      movingPage: F,
    }),
    ae = !M && !q && (ie.length > 0 || ((`node` in a || a.has_children !== !1) && (B == null || H))),
    se = ae && (T || ie.length > 0 || (!(`node` in a) && a.has_children === !0) || I || H),
    ce = I && se,
    le;
  i[3] === ce ? (le = i[4]) : ((le = { enabled: ce }), (i[3] = ce), (i[4] = le));
  let { refetch: ue } = O(z, A, le),
    fe =
      (T
        ? !(`node` in a) && y.length === 0 && a.has_children === !0
        : y.length === 0 || `node` in a || a.has_children == null) &&
      !I &&
      ae &&
      (`node` in a || (a.access.can_read && a.deleted_at == null)),
    pe;
  i[5] !== D || i[6] !== A || i[7] !== fe || i[8] !== C || i[9] !== k
    ? ((pe = (e) => (e != null && fe ? me(C, A, e, { accountId: D, userId: k }) : void 0)),
      (i[5] = D),
      (i[6] = A),
      (i[7] = fe),
      (i[8] = C),
      (i[9] = k),
      (i[10] = pe))
    : (pe = i[10]);
  let he = pe,
    ge;
  i[11] !== I || i[12] !== w || i[13] !== j
    ? ((ge = I
        ? w.formatMessage(
            {
              id: `space.pageTree.collapse`,
              defaultMessage: `Collapse {title}`,
              description: `Hide child rows of the named Page in the Space list`,
            },
            { title: j ?? `` },
          )
        : w.formatMessage(
            {
              id: `space.pageTree.expand`,
              defaultMessage: `Expand {title}`,
              description: `Show child rows of the named Page in the Space list`,
            },
            { title: j ?? `` },
          )),
      (i[11] = I),
      (i[12] = w),
      (i[13] = j),
      (i[14] = ge))
    : (ge = i[14]);
  let _e = ge,
    ve = {
      depth: re,
      expanded: I,
      onToggle: ae ? (e) => o.onToggle(P, e) : void 0,
      disclosure: se
        ? (0, J.jsx)(t, {
            className: `relative before:absolute before:-inset-1.5 before:content-['']`,
            color: `disclosure`,
            size: `inline`,
            radius: `small`,
            uniform: !0,
            "aria-label": _e,
            title: _e,
            "aria-expanded": I,
            onClick: (e) => {
              (e.stopPropagation(), o.onToggle(P, !I));
            },
            children: (0, J.jsx)(n, { className: g(`text-secondary`, I && `rotate-90`) }),
          })
        : void 0,
    };
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(`div`, {
        ref: he,
        role: `presentation`,
        "data-library-item": !0,
        onDropCapture: (e) => Ze.expandDrop(C, e, M ? null : A, () => o.onToggle(P, !0)),
        children: u(a, ve),
      }),
      I && se
        ? (0, J.jsxs)(J.Fragment, {
            children: [
              ie.map((e) =>
                (0, J.jsx)(
                  mt,
                  {
                    page: e,
                    expansion: o,
                    knownChildrenByParent: l,
                    renderPage: u,
                    ancestors: [...y, A],
                    showSource: b,
                    showSharedBy: x,
                    showSize: S,
                  },
                  e.page_id,
                ),
              ),
              V && ie.length === 0
                ? (0, J.jsx)(G, {
                    rowCount: 1,
                    treeDepth: re + 1,
                    showSource: b,
                    showSharedBy: x,
                    showSize: S,
                    loadingLabel: (0, J.jsx)(s, {
                      id: `space.pageTree.loading`,
                      defaultMessage: `Loading subpages…`,
                      description: `Status while child Pages load in a list`,
                    }),
                  })
                : null,
              H && !q
                ? (0, J.jsxs)(`div`, {
                    className: `flex items-center gap-2 px-row-x py-row-y text-sm text-secondary`,
                    role: `status`,
                    children: [
                      (0, J.jsx)(s, {
                        id: `space.pageTree.error`,
                        defaultMessage: `Could not load subpages`,
                        description: `Error loading child Pages in the Space list`,
                      }),
                      (0, J.jsx)(t, {
                        color: `ghost`,
                        size: `compact`,
                        onClick: () => void ue(),
                        children: (0, J.jsx)(s, {
                          id: `codex.space.page.retry`,
                          defaultMessage: `Try again`,
                          description: `Button that retries loading shared Pages after a failure`,
                        }),
                      }),
                    ],
                  })
                : null,
            ],
          })
        : null,
    ],
  });
}
var ht, J;
function gt() {
  return (gt = e(() => {
    ((ht = C()), m(), l(), y(), ze(), x(), u(), Xe(), Qe(), w(), S(), ee(), P(), F(), Ke(), le(), (J = E()));
  }))();
}
function _t(e) {
  let t = (0, vt.c)(36),
    n = c(Ce),
    r = (0, yt.useId)(),
    i = f(),
    a = `page_id` in e.page ? e.page.page_id : e.page.node.id,
    o = `page_id` in e.page ? e.page : void 0,
    s = O(it, a),
    l = p(st),
    u = O(V, a),
    d = O(tt, a),
    m = O($e, a),
    h = O(nt, a),
    g,
    _;
  (t[0] !== a || t[1] !== n
    ? ((g = () => () => Ze.end(n, a)), (_ = [n, a]), (t[0] = a), (t[1] = n), (t[2] = g), (t[3] = _))
    : ((g = t[2]), (_ = t[3])),
    (0, yt.useEffect)(g, _));
  let v = (o == null || o.access.can_read) && n.value.tab !== `favorites`,
    y = `page_id` in e.page ? e.page.title : e.page.node.name,
    b = v ? a : void 0,
    x = v ? r : void 0,
    S = u || m || void 0,
    C;
  t[4] !== a || t[5] !== e.tree || t[6] !== n
    ? ((C = et(n, a, e.tree)), (t[4] = a), (t[5] = e.tree), (t[6] = n), (t[7] = C))
    : (C = t[7]);
  let w = v && s,
    T;
  t[8] !== a || t[9] !== i || t[10] !== y || t[11] !== e.page || t[12] !== e.viewMode || t[13] !== v
    ? ((T = v
        ? (0, bt.jsx)(ct, {
            id: a,
            viewMode: e.viewMode,
            label: y
              ? i.formatMessage(
                  {
                    id: `space.library.selectPage`,
                    defaultMessage: `Select {name}`,
                    description: `Accessible label for selecting a Page in the Library; name is the Page title`,
                  },
                  { name: y },
                )
              : i.formatMessage(
                  {
                    id: `space.library.selectUntitledPage.byDocumentType`,
                    defaultMessage: `{documentType, select, granola_presentation {Select untitled slide} granola_workbook {Select untitled sheet} other {Select untitled page}}`,
                    description: `Accessible label for selecting a Page that has no title in the Library. documentType selects slide, sheet, or page for the current document.`,
                  },
                  {
                    documentType:
                      (`page_id` in e.page
                        ? e.page.document_type
                        : e.page.node.page_metadata?.document_type) ?? `page`,
                  },
                ),
          })
        : void 0),
      (t[8] = a),
      (t[9] = i),
      (t[10] = y),
      (t[11] = e.page),
      (t[12] = e.viewMode),
      (t[13] = v),
      (t[14] = T))
    : (T = t[14]);
  let E;
  t[15] !== l || t[16] !== a || t[17] !== n || t[18] !== v || t[19] !== s
    ? ((E = (e) =>
        !v || (!l && !e?.shiftKey)
          ? !1
          : (lt(n, a, e?.shiftKey ? !0 : !s, e?.shiftKey, e?.currentTarget), !0)),
      (t[15] = l),
      (t[16] = a),
      (t[17] = n),
      (t[18] = v),
      (t[19] = s),
      (t[20] = E))
    : (E = t[20]);
  let D;
  t[21] !== l || t[22] !== m || t[23] !== d || t[24] !== e || t[25] !== w || t[26] !== T || t[27] !== E
    ? ((D = (0, bt.jsx)(pt, {
        ...e,
        selected: w,
        selectionActive: l,
        isDropTarget: d,
        checkingMove: m,
        selection: T,
        onSelect: E,
      })),
      (t[21] = l),
      (t[22] = m),
      (t[23] = d),
      (t[24] = e),
      (t[25] = w),
      (t[26] = T),
      (t[27] = E),
      (t[28] = D))
    : (D = t[28]);
  let k;
  return (
    t[29] !== h || t[30] !== b || t[31] !== x || t[32] !== S || t[33] !== C || t[34] !== D
      ? ((k = (0, bt.jsx)(`div`, {
          "data-library-item": ``,
          "data-library-selection-id": b,
          "data-library-selection-key": x,
          draggable: h,
          "aria-busy": S,
          ...C,
          children: D,
        })),
        (t[29] = h),
        (t[30] = b),
        (t[31] = x),
        (t[32] = S),
        (t[33] = C),
        (t[34] = D),
        (t[35] = k))
      : (k = t[35]),
    k
  );
}
var vt, yt, bt;
function xt() {
  return (xt = e(() => {
    ((vt = C()), l(), (yt = D()), y(), Ue(), ot(), at(), Qe(), Oe(), dt(), (bt = E()));
  }))();
}
function St(e) {
  let t = (0, kt.c)(46),
    {
      navigation: n,
      pages: r,
      viewMode: i,
      emptyTitle: a,
      emptyState: o,
      spaceRoots: c,
      showSource: l,
      expansion: u,
      reserveDisclosureSpace: d,
      knownChildrenByParent: p,
      selectable: m,
      gridLoading: h,
    } = e,
    g = l === void 0 || l,
    _ = m !== void 0 && m,
    v = h !== void 0 && h,
    y = f(),
    b = _ ? _t : pt,
    x = d ?? u != null;
  if (r == null && c == null) return null;
  let S, C;
  t[0] !== u || t[1] !== p || t[2] !== r || t[3] !== i
    ? ((S = u != null && r != null && i === `list` ? (p ?? Me(r.map(Et), []).pagesByParentId) : void 0),
      (C = new Set(
        S == null
          ? []
          : [...S].flatMap((e) => {
              let [t, n] = e;
              return t === u?.rootPageId ? [] : n.map(Tt);
            }),
      )),
      (t[0] = u),
      (t[1] = p),
      (t[2] = r),
      (t[3] = i),
      (t[4] = S),
      (t[5] = C))
    : ((S = t[4]), (C = t[5]));
  let w = C,
    T;
  if (
    t[6] !== b ||
    t[7] !== S ||
    t[8] !== u ||
    t[9] !== v ||
    t[10] !== n ||
    t[11] !== w ||
    t[12] !== r ||
    t[13] !== x ||
    t[14] !== g ||
    t[15] !== c ||
    t[16] !== i
  ) {
    if (
      ((T = [
        ...(c?.map((e) => ({
          id: e.root_page_id,
          content: (0, Y.jsx)(Dt, {
            navigation: n,
            space: e,
            viewMode: i,
            showSource: g,
            reserveDisclosureSpace: x,
          }),
        })) ?? []),
        ...(r
          ?.filter((e) => {
            let { page: t } = e;
            return !w.has(t.page_id);
          })
          .map((e) => {
            let { page: t, parentSpace: r } = e,
              a;
            return (
              g && (a = r == null ? At : (0, Y.jsx)(Ot, { navigation: n, space: r })),
              {
                id: t.page_id,
                content:
                  u != null && S != null
                    ? (0, Y.jsx)(mt, {
                        page: t,
                        showSource: g,
                        expansion: u,
                        knownChildrenByParent: S,
                        renderPage: (e, t) =>
                          (0, Y.jsx)(b, {
                            navigation: n,
                            page: e,
                            parentSpace: r,
                            viewMode: `list`,
                            libraryPresentation: !0,
                            source: a,
                            tree: t,
                          }),
                      })
                    : (0, Y.jsx)(b, {
                        navigation: n,
                        page: t,
                        parentSpace: r,
                        viewMode: i,
                        libraryPresentation: !0,
                        reserveDisclosureSpace: x,
                        source: a,
                      }),
              }
            );
          }) ?? []),
      ]),
      i === `grid` && v)
    ) {
      let e;
      (t[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = Array.from({ length: 3 }, wt)), (t[18] = e))
        : (e = t[18]),
        T.push(...e));
    }
    ((t[6] = b),
      (t[7] = S),
      (t[8] = u),
      (t[9] = v),
      (t[10] = n),
      (t[11] = w),
      (t[12] = r),
      (t[13] = x),
      (t[14] = g),
      (t[15] = c),
      (t[16] = i),
      (t[17] = T));
  } else T = t[17];
  if (T.length === 0) {
    let e;
    t[19] !== o || t[20] !== a
      ? ((e = o ?? (0, Y.jsx)(A, { layout: `browse`, title: a })), (t[19] = o), (t[20] = a), (t[21] = e))
      : (e = t[21]);
    let n;
    return (
      t[22] === e ? (n = t[23]) : ((n = (0, Y.jsx)(Y.Fragment, { children: e })), (t[22] = e), (t[23] = n)),
      n
    );
  }
  if (i === `grid`) {
    let e;
    return (t[24] === T ? (e = t[25]) : ((e = (0, Y.jsx)(Te, { items: T })), (t[24] = T), (t[25] = e)), e);
  }
  let E;
  t[26] === y
    ? (E = t[27])
    : ((E = y.formatMessage({
        id: `space.list.pages`,
        defaultMessage: `Pages`,
        description: `Accessible label for the list of Pages on Space home and Personal`,
      })),
      (t[26] = y),
      (t[27] = E));
  let D;
  t[28] === x ? (D = t[29]) : ((D = x ? (0, Y.jsx)(R, { depth: 0 }) : null), (t[28] = x), (t[29] = D));
  let O;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Y.jsx)(s, {
        id: `libraryNext.results.name`,
        defaultMessage: `Name`,
        description: `Library list name column heading`,
      })),
      (t[30] = O))
    : (O = t[30]);
  let k;
  t[31] === D
    ? (k = t[32])
    : ((k = (0, Y.jsxs)(`span`, {
        role: `columnheader`,
        "data-library-column": `name`,
        tabIndex: 0,
        className: `flex min-w-0 flex-1 items-center`,
        children: [D, O],
      })),
      (t[31] = D),
      (t[32] = k));
  let j;
  t[33] === g
    ? (j = t[34])
    : ((j = g
        ? (0, Y.jsx)(`span`, {
            role: `columnheader`,
            "data-library-column": `source`,
            tabIndex: 0,
            className: `hidden w-60 shrink-0 @3xl/library-row:block`,
            children: (0, Y.jsx)(s, {
              id: `libraryNext.results.source`,
              defaultMessage: `Source`,
              description: `Column showing the Space an item belongs to`,
            }),
          })
        : null),
      (t[33] = g),
      (t[34] = j));
  let M, N;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Y.jsx)(`span`, {
        role: `columnheader`,
        "data-library-column": `date`,
        tabIndex: 0,
        className: `hidden w-40 shrink-0 @lg/library-row:block`,
        children: (0, Y.jsx)(s, {
          id: `libraryNext.results.lastActivity`,
          defaultMessage: `Last activity`,
          description: `Library list activity column heading`,
        }),
      })),
      (N = (0, Y.jsx)(`span`, { "aria-hidden": `true`, className: `w-9 shrink-0 @lg/library-row:w-16` })),
      (t[35] = M),
      (t[36] = N))
    : ((M = t[35]), (N = t[36]));
  let P;
  t[37] !== k || t[38] !== j
    ? ((P = (0, Y.jsxs)(q, { children: [k, j, M, N] })), (t[37] = k), (t[38] = j), (t[39] = P))
    : (P = t[39]);
  let F;
  t[40] === T ? (F = t[41]) : ((F = T.map(Ct)), (t[40] = T), (t[41] = F));
  let I;
  return (
    t[42] !== P || t[43] !== F || t[44] !== E
      ? ((I = (0, Y.jsxs)(`div`, {
          className: `-mx-[var(--padding-row-cell-x,var(--padding-row-x))]`,
          role: `grid`,
          tabIndex: -1,
          onKeyDown: rt,
          "aria-label": E,
          children: [P, F],
        })),
        (t[42] = P),
        (t[43] = F),
        (t[44] = E),
        (t[45] = I))
      : (I = t[45]),
    I
  );
}
function Ct(e) {
  let { id: t, content: n } = e;
  return (0, Y.jsx)(`div`, { role: `presentation`, "data-library-item": !0, children: n }, t);
}
function wt(e, t) {
  return { id: `loading-${t}`, content: (0, Y.jsx)(Le, { square: !0, index: t }) };
}
function Tt(e) {
  return e.page_id;
}
function Et(e) {
  let { page: t } = e;
  return t;
}
function Dt(e) {
  let t = (0, kt.c)(24),
    { navigation: n, space: i, viewMode: a, showSource: s, reserveDisclosureSpace: l } = e,
    u = c(r),
    d = o(),
    f = T(),
    p = O(We, i.root_page_id, { enabled: !1 }) ?? i.root_page_metadata,
    m = p == null ? i.symbol : p.symbol,
    h = p?.document_type,
    g;
  t[0] === h ? (g = t[1]) : ((g = xe({ document_type: h })), (t[0] = h), (t[1] = g));
  let _ = g,
    v;
  t[2] !== f || t[3] !== d || t[4] !== n || t[5] !== u || t[6] !== i
    ? ((v = () => {
        if (n != null) {
          n.onOpenSpace(i);
          return;
        }
        Je(u, d, f, u.get(N), i.root_page_id);
      }),
      (t[2] = f),
      (t[3] = d),
      (t[4] = n),
      (t[5] = u),
      (t[6] = i),
      (t[7] = v))
    : (v = t[7]);
  let y = v,
    b = p?.document_type,
    x;
  t[8] !== _ ||
  t[9] !== p?.document_type ||
  t[10] !== n ||
  t[11] !== y ||
  t[12] !== l ||
  t[13] !== s ||
  t[14] !== i ||
  t[15] !== m ||
  t[16] !== a
    ? ((x = (e) => {
        let { icon: t, title: r } = e;
        return a === `grid`
          ? (0, Y.jsx)(j, {
              name: i.name,
              square: !0,
              landscape: _ === `granola_workbook` || _ === `granola_presentation`,
              onOpen: y,
              documentHeader: (0, Y.jsxs)(Y.Fragment, {
                children: [t, (0, Y.jsx)(`span`, { className: `truncate`, children: r })],
              }),
              children: (0, Y.jsx)(ft, {
                iconColor: `file-type`,
                pageId: i.root_page_id,
                title: i.name,
                documentType: p?.document_type,
                symbol: m,
              }),
            })
          : (0, Y.jsx)(re, {
              reserveDisclosureSpace: l,
              name: i.name,
              artwork: t,
              activity: null,
              source: s ? (0, Y.jsx)(Ot, { navigation: n, space: i }) : void 0,
              onOpen: y,
            });
      }),
      (t[8] = _),
      (t[9] = p?.document_type),
      (t[10] = n),
      (t[11] = y),
      (t[12] = l),
      (t[13] = s),
      (t[14] = i),
      (t[15] = m),
      (t[16] = a),
      (t[17] = x))
    : (x = t[17]);
  let S;
  return (
    t[18] !== i.name || t[19] !== i.root_page_id || t[20] !== m || t[21] !== b || t[22] !== x
      ? ((S = (0, Y.jsx)(ae, {
          iconColor: `file-type`,
          pageId: i.root_page_id,
          documentType: b,
          iconSize: 20,
          symbol: m,
          title: i.name,
          children: x,
        })),
        (t[18] = i.name),
        (t[19] = i.root_page_id),
        (t[20] = m),
        (t[21] = b),
        (t[22] = x),
        (t[23] = S))
      : (S = t[23]),
    S
  );
}
function Ot(e) {
  let t = (0, kt.c)(18),
    { navigation: n, space: i } = e,
    a = c(r),
    s = f(),
    l = o(),
    u = T(),
    d;
  t[0] !== s || t[1] !== i.name
    ? ((d = s.formatMessage(
        {
          id: `space.list.openSpace`,
          defaultMessage: `Open {name} space`,
          description: `Open the Space containing this Page. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        },
        { name: i.name },
      )),
      (t[0] = s),
      (t[1] = i.name),
      (t[2] = d))
    : (d = t[2]);
  let p;
  t[3] !== u || t[4] !== l || t[5] !== n || t[6] !== a || t[7] !== i
    ? ((p = (e) => {
        if ((e.stopPropagation(), n != null)) {
          n.onOpenSpace(i);
          return;
        }
        Je(a, l, u, a.get(N), i.root_page_id);
      }),
      (t[3] = u),
      (t[4] = l),
      (t[5] = n),
      (t[6] = a),
      (t[7] = i),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] === i.id ? (m = t[10]) : ((m = (0, Y.jsx)(Re, { spaceId: i.id })), (t[9] = i.id), (t[10] = m));
  let h;
  t[11] === i.name
    ? (h = t[12])
    : ((h = (0, Y.jsx)(`span`, { className: `truncate`, children: i.name })), (t[11] = i.name), (t[12] = h));
  let g;
  return (
    t[13] !== d || t[14] !== p || t[15] !== m || t[16] !== h
      ? ((g = (0, Y.jsxs)(`button`, {
          className: `relative z-10 flex max-w-full cursor-interaction items-center gap-2 text-start hover:text-default`,
          type: `button`,
          "aria-label": d,
          onClick: p,
          children: [m, h],
        })),
        (t[13] = d),
        (t[14] = p),
        (t[15] = m),
        (t[16] = h),
        (t[17] = g))
      : (g = t[17]),
    g
  );
}
var kt, Y, At;
function jt() {
  return (jt = e(() => {
    ((kt = C()),
      l(),
      y(),
      h(),
      De(),
      Fe(),
      ge(),
      w(),
      _e(),
      Ve(),
      ut(),
      Ee(),
      be(),
      Ke(),
      I(),
      dt(),
      gt(),
      xt(),
      (Y = E()),
      (At = `—`));
  }))();
}
function Mt(e) {
  let t = (0, It.c)(87),
    { pages: n, renderContentItem: i, isCurrent: a, children: o } = e,
    s = c(r),
    l = (0, X.useId)(),
    u = f(),
    m = 8 * d(),
    h = p(N),
    g = p(oe),
    _ = T(),
    [v, y] = (0, X.useState)(null),
    x = (0, X.useRef)(null),
    S = (0, X.useRef)(null),
    C = (0, X.useRef)(null),
    w = (0, X.useRef)(null),
    E;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = { activationConstraint: { distance: 6 } }), (t[0] = E))
    : (E = t[0]);
  let D;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = { activationConstraint: { delay: 250, tolerance: 5 } }), (t[1] = D))
    : (D = t[1]);
  let O;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = { coordinateGetter: fe }), (t[2] = O))
    : (O = t[2]);
  let A = Ae(Ne(Lt, E), Ne(he, D), Ne(Ie, O)),
    j;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = () => {
        ((w.current = null), (x.current = null), (S.current = null), y(null));
      }),
      (t[3] = j))
    : (j = t[3]);
  let P = j;
  k(v != null, x, P);
  let F;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = () => () => {
        (C.current?.abort(),
          w.current != null &&
            document.dispatchEvent(
              new KeyboardEvent(`keydown`, { bubbles: !0, cancelable: !0, code: `Escape`, key: `Escape` }),
            ));
      }),
      (t[4] = F))
    : (F = t[4]);
  let I;
  (t[5] !== h || t[6] !== _.key || t[7] !== g
    ? ((I = [_.key, h, g]), (t[5] = h), (t[6] = _.key), (t[7] = g), (t[8] = I))
    : (I = t[8]),
    (0, X.useEffect)(F, I));
  let ee;
  t[9] === n ? (ee = t[10]) : ((ee = n.map(Nt)), (t[9] = n), (t[10] = ee));
  let L = ee,
    te,
    R,
    z,
    B,
    V,
    H,
    U,
    W,
    G,
    K,
    ne;
  if (
    t[11] !== h ||
    t[12] !== v ||
    t[13] !== o ||
    t[14] !== l ||
    t[15] !== m ||
    t[16] !== L ||
    t[17] !== u ||
    t[18] !== a ||
    t[19] !== _.key ||
    t[20] !== n ||
    t[21] !== i ||
    t[22] !== s ||
    t[23] !== A ||
    t[24] !== g
  ) {
    let e;
    t[36] === v ? (e = t[37]) : ((e = (e) => e.page_id === v), (t[36] = v), (t[37] = e));
    let r = n.find(e);
    ((R = Se),
      (ne = l),
      (z = A),
      t[38] === m
        ? (B = t[39])
        : ((B = (e) => {
            let t = e.pointerCoordinates;
            if (t == null) return je(e);
            let n = ke(e);
            if (n.length > 0) return ((S.current = n[0].id), n);
            let r = S.current == null ? void 0 : e.droppableRects.get(S.current);
            return r != null &&
              t.x >= r.left - m &&
              t.x <= r.right + m &&
              t.y >= r.top - m &&
              t.y <= r.bottom + m &&
              S.current != null
              ? [{ id: S.current }]
              : [];
          }),
          (t[38] = m),
          (t[39] = B)));
    let c;
    t[40] === u
      ? (c = t[41])
      : ((c = u.formatMessage({
          id: `space.home.pinned.reorderInstructions`,
          defaultMessage: `Press Space to pick up a pinned item, use the arrow keys to move it, and press Space to drop it. Press Escape to cancel.`,
          description: `Keyboard instructions for reordering pinned previews on Suggested`,
        })),
        (t[40] = u),
        (t[41] = c));
    let d;
    t[42] === c ? (d = t[43]) : ((d = { draggable: c }), (t[42] = c), (t[43] = d));
    let f;
    t[44] === u
      ? (f = t[45])
      : ((f = () =>
          u.formatMessage({
            id: `space.home.pinned.reorderStarted`,
            defaultMessage: `Pinned item picked up`,
            description: `Screen reader announcement when a Suggested pin drag starts`,
          })),
        (t[44] = u),
        (t[45] = f));
    let p;
    t[46] !== L || t[47] !== u
      ? ((p = (e) => {
          let { over: t } = e;
          return t == null
            ? void 0
            : u.formatMessage(
                {
                  id: `space.home.pinned.reorderPosition`,
                  defaultMessage: `Position {position} of {count}`,
                  description: `Screen reader announcement of the proposed position while reordering Suggested pins`,
                },
                { position: L.indexOf(String(t.id)) + 1, count: L.length },
              );
        }),
        (t[46] = L),
        (t[47] = u),
        (t[48] = p))
      : (p = t[48]);
    let T, E;
    t[49] === u
      ? ((T = t[50]), (E = t[51]))
      : ((T = () =>
          u.formatMessage({
            id: `space.home.pinned.reorderEnded`,
            defaultMessage: `Pinned item released`,
            description: `Screen reader announcement when a Suggested pin drag ends`,
          })),
        (E = () =>
          u.formatMessage({
            id: `space.home.pinned.reorderCancelled`,
            defaultMessage: `Reordering cancelled`,
            description: `Screen reader announcement when reordering Suggested pins is cancelled`,
          })),
        (t[49] = u),
        (t[50] = T),
        (t[51] = E));
    let D;
    (t[52] !== f || t[53] !== p || t[54] !== T || t[55] !== E
      ? ((D = { onDragStart: f, onDragOver: p, onDragEnd: T, onDragCancel: E }),
        (t[52] = f),
        (t[53] = p),
        (t[54] = T),
        (t[55] = E),
        (t[56] = D))
      : (D = t[56]),
      t[57] !== d || t[58] !== D
        ? ((V = { screenReaderInstructions: d, announcements: D }), (t[57] = d), (t[58] = D), (t[59] = V))
        : (V = t[59]),
      t[60] !== h || t[61] !== _.key || t[62] !== g
        ? ((H = (e) => {
            let { active: t, activatorEvent: n } = e;
            if ((b(), n.type !== `keydown`)) {
              C.current?.abort();
              let e = new AbortController();
              ((C.current = e),
                document.addEventListener(
                  `click`,
                  (t) => {
                    (t.detail !== 0 && t.preventDefault(), e.abort());
                  },
                  { capture: !0, once: !0, signal: e.signal },
                ),
                document.addEventListener(`pointerdown`, () => e.abort(), {
                  capture: !0,
                  once: !0,
                  signal: e.signal,
                }));
            }
            ((w.current = { accountId: h, userId: g, locationKey: _.key }),
              (x.current = pe(n)),
              y(String(t.id)));
          }),
          (t[60] = h),
          (t[61] = _.key),
          (t[62] = g),
          (t[63] = H))
        : (H = t[63]),
      (U = P),
      t[64] !== h || t[65] !== L || t[66] !== a || t[67] !== _.key || t[68] !== s
        ? ((W = (e) => {
            let { active: t, over: n } = e,
              r = w.current;
            (P(),
              r != null &&
                h != null &&
                s.get(N) === r.accountId &&
                s.get(oe) === r.userId &&
                _.key === r.locationKey &&
                a?.() !== !1 &&
                n != null &&
                qe(
                  s,
                  s
                    .get(M)
                    .filter((e) => L.includes(e))
                    .map((e) => ie(h, e)),
                  ie(h, String(t.id)),
                  ie(h, String(n.id)),
                ));
          }),
          (t[64] = h),
          (t[65] = L),
          (t[66] = a),
          (t[67] = _.key),
          (t[68] = s),
          (t[69] = W))
        : (W = t[69]),
      t[70] !== o || t[71] !== L
        ? ((G = (0, Z.jsx)(Pe, { items: L, children: o })), (t[70] = o), (t[71] = L), (t[72] = G))
        : (G = t[72]),
      (te = ve),
      (K =
        r == null ? null : (0, Z.jsx)(`div`, { className: `opacity-70`, children: i({ page: r }, `grid`) })),
      (t[11] = h),
      (t[12] = v),
      (t[13] = o),
      (t[14] = l),
      (t[15] = m),
      (t[16] = L),
      (t[17] = u),
      (t[18] = a),
      (t[19] = _.key),
      (t[20] = n),
      (t[21] = i),
      (t[22] = s),
      (t[23] = A),
      (t[24] = g),
      (t[25] = te),
      (t[26] = R),
      (t[27] = z),
      (t[28] = B),
      (t[29] = V),
      (t[30] = H),
      (t[31] = U),
      (t[32] = W),
      (t[33] = G),
      (t[34] = K),
      (t[35] = ne));
  } else
    ((te = t[25]),
      (R = t[26]),
      (z = t[27]),
      (B = t[28]),
      (V = t[29]),
      (H = t[30]),
      (U = t[31]),
      (W = t[32]),
      (G = t[33]),
      (K = t[34]),
      (ne = t[35]));
  let q;
  t[73] !== te || t[74] !== K
    ? ((q = (0, Z.jsx)(te, { children: K })), (t[73] = te), (t[74] = K), (t[75] = q))
    : (q = t[75]);
  let re;
  return (
    t[76] !== R ||
    t[77] !== z ||
    t[78] !== B ||
    t[79] !== V ||
    t[80] !== H ||
    t[81] !== U ||
    t[82] !== W ||
    t[83] !== G ||
    t[84] !== q ||
    t[85] !== ne
      ? ((re = (0, Z.jsxs)(R, {
          id: ne,
          sensors: z,
          collisionDetection: B,
          accessibility: V,
          onDragStart: H,
          onDragCancel: U,
          onDragEnd: W,
          children: [G, q],
        })),
        (t[76] = R),
        (t[77] = z),
        (t[78] = B),
        (t[79] = V),
        (t[80] = H),
        (t[81] = U),
        (t[82] = W),
        (t[83] = G),
        (t[84] = q),
        (t[85] = ne),
        (t[86] = re))
      : (re = t[86]),
    re
  );
}
function Nt(e) {
  return e.page_id;
}
function Pt(e) {
  let n = (0, It.c)(27),
    { page: r, children: i } = e,
    o = f(),
    s;
  n[0] === r.page_id ? (s = n[1]) : ((s = { id: r.page_id }), (n[0] = r.page_id), (n[1] = s));
  let {
      attributes: c,
      listeners: l,
      setNodeRef: u,
      setActivatorNodeRef: d,
      isDragging: p,
      isOver: m,
      activeIndex: h,
      overIndex: _,
    } = H(s),
    v = null;
  m && !p && (v = h < _ ? `after` : `before`);
  let y;
  n[2] === l
    ? (y = n[3])
    : ((y = (e) => {
        e.defaultPrevented ||
          (e.target instanceof Element &&
            e.target.closest(
              `button, input, textarea, select, [role="button"], [role="menuitem"], [contenteditable="true"]`,
            ) != null) ||
          (e.type === `pointerdown` ? l?.onPointerDown?.(e) : l?.onTouchStart?.(e));
      }),
      (n[2] = l),
      (n[3] = y));
  let b = y,
    x = p && `opacity-50`,
    S;
  n[4] === x ? (S = n[5]) : ((S = g(`relative`, x)), (n[4] = x), (n[5] = S));
  let C;
  n[6] !== o || n[7] !== r.page_id || n[8] !== r.title
    ? ((C = o.formatMessage(
        {
          id: `space.home.pinned.reorderHandle`,
          defaultMessage: `Reorder {title}`,
          description: `Accessible label for the drag handle on a pinned Suggested preview`,
        },
        { title: r.title || r.page_id },
      )),
      (n[6] = o),
      (n[7] = r.page_id),
      (n[8] = r.title),
      (n[9] = C))
    : (C = n[9]);
  let w;
  n[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((w = (0, Z.jsx)(a, {})), (n[10] = w)) : (w = n[10]);
  let T;
  n[11] !== c || n[12] !== l || n[13] !== d || n[14] !== C
    ? ((T = (0, Z.jsx)(t, {
        ...c,
        ...l,
        ref: d,
        className: `sr-only cursor-grab touch-none focus:not-sr-only active:cursor-grabbing`,
        color: `secondary`,
        size: `cardAction`,
        uniform: !0,
        "aria-label": C,
        children: w,
      })),
      (n[11] = c),
      (n[12] = l),
      (n[13] = d),
      (n[14] = C),
      (n[15] = T))
    : (T = n[15]);
  let E;
  n[16] !== i || n[17] !== T ? ((E = i(T)), (n[16] = i), (n[17] = T), (n[18] = E)) : (E = n[18]);
  let D;
  n[19] === v
    ? (D = n[20])
    : ((D =
        v == null
          ? null
          : (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(`div`, {
                  className: g(
                    `pointer-events-none absolute inset-x-0 @sm:hidden`,
                    v === `before` ? `-top-2` : `-bottom-2`,
                  ),
                  children: (0, Z.jsx)(W, { active: !0 }),
                }),
                (0, Z.jsx)(`div`, {
                  className: g(
                    `pointer-events-none absolute inset-y-0 hidden @sm:block`,
                    v === `before` ? `-start-2` : `-end-2`,
                  ),
                  children: (0, Z.jsx)(W, { active: !0, orientation: `vertical` }),
                }),
              ],
            })),
      (n[19] = v),
      (n[20] = D));
  let O;
  return (
    n[21] !== b || n[22] !== u || n[23] !== S || n[24] !== E || n[25] !== D
      ? ((O = (0, Z.jsxs)(`div`, {
          ref: u,
          className: S,
          onPointerDown: b,
          onTouchStart: b,
          onDragStartCapture: Ft,
          children: [E, D],
        })),
        (n[21] = b),
        (n[22] = u),
        (n[23] = S),
        (n[24] = E),
        (n[25] = D),
        (n[26] = O))
      : (O = n[26]),
    O
  );
}
function Ft(e) {
  (e.preventDefault(), e.stopPropagation());
}
var It, X, Z, Lt;
function Rt() {
  return (Rt = e(() => {
    ((It = C()),
      ye(),
      se(),
      m(),
      l(),
      (X = D()),
      y(),
      h(),
      i(),
      ze(),
      x(),
      Ge(),
      u(),
      v(),
      U(),
      He(),
      K(),
      Be(),
      w(),
      Ye(),
      (Z = E()),
      (Lt = class extends we {
        static activators = we.activators.map((e) => ({
          ...e,
          handler: (t, n) => t.nativeEvent.pointerType !== `touch` && e.handler(t, n),
        }));
      }));
  }))();
}
function zt(e) {
  let n = (0, Bt.c)(10),
    { pins: i } = e,
    { pages: a, pending: o, failed: l } = i,
    u = c(r),
    d;
  n[0] !== a || n[1] !== o
    ? ((d =
        o && !a.length
          ? (0, Q.jsx)(`div`, {
              role: `status`,
              className: `text-secondary`,
              children: (0, Q.jsx)(s, {
                id: `space.home.loadingPinnedPages`,
                defaultMessage: `Loading pinned pages…`,
                description: `Status while fetching pinned Pages for the Suggested homepage`,
              }),
            })
          : null),
      (n[0] = a),
      (n[1] = o),
      (n[2] = d))
    : (d = n[2]);
  let f;
  n[3] !== l || n[4] !== o || n[5] !== u
    ? ((f = l.length
        ? (0, Q.jsxs)(`div`, {
            role: `status`,
            className: `flex items-center gap-3 text-secondary`,
            children: [
              (0, Q.jsx)(s, {
                id: `space.home.pinnedLoadFailed`,
                defaultMessage: `Some pinned pages could not be loaded`,
                description: `Warning when some pinned Pages could not be fetched`,
              }),
              (0, Q.jsx)(t, {
                color: `ghost`,
                disabled: o,
                onClick: () => {
                  ce(l, (e) => u.get(B, e).refetch(), { concurrency: 4 });
                },
                children: (0, Q.jsx)(s, {
                  id: `libraryNext.results.retry`,
                  defaultMessage: `Try again`,
                  description: `Retry fetching Library results`,
                }),
              }),
            ],
          })
        : null),
      (n[3] = l),
      (n[4] = o),
      (n[5] = u),
      (n[6] = f))
    : (f = n[6]);
  let p;
  return (
    n[7] !== d || n[8] !== f
      ? ((p = (0, Q.jsxs)(Q.Fragment, { children: [d, f] })), (n[7] = d), (n[8] = f), (n[9] = p))
      : (p = n[9]),
    p
  );
}
var Bt, Q;
function Vt() {
  return (Vt = e(() => {
    ((Bt = C()), l(), ue(), y(), x(), w(), Ke(), (Q = E()));
  }))();
}
function Ht(e) {
  let t = (0, Ut.c)(32),
    {
      pins: n,
      sites: r,
      sitePagination: i,
      showPages: a,
      renderContentItem: o,
      animate: c,
      isCurrent: l,
    } = e,
    u = a === void 0 || a,
    d = (0, Wt.useId)(),
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(s, {
        id: `space.home.pinnedHeading`,
        defaultMessage: `Pinned`,
        description: `Pinned Pages shown as previews on the Suggested homepage`,
      })),
      (t[0] = f))
    : (f = t[0]);
  let p;
  t[1] === d
    ? (p = t[2])
    : ((p = (0, $.jsx)(`h2`, { id: d, className: `sr-only`, children: f })), (t[1] = d), (t[2] = p));
  let m;
  t[3] !== n || t[4] !== u ? ((m = u ? n.pages : []), (t[3] = n), (t[4] = u), (t[5] = m)) : (m = t[5]);
  let h;
  if (t[6] !== n || t[7] !== o || t[8] !== u || t[9] !== r) {
    let e;
    t[11] === o
      ? (e = t[12])
      : ((e = (e) => ({
          id: e.page_id,
          content: (0, $.jsx)(Pt, { page: e, children: (t) => o({ page: e }, `grid`, void 0, t) }),
        })),
        (t[11] = o),
        (t[12] = e));
    let i;
    (t[13] === o
      ? (i = t[14])
      : ((i = (e) => ({ id: `site:${e.id}`, content: o({ siteProject: e }, `grid`) })),
        (t[13] = o),
        (t[14] = i)),
      (h = [...(u ? n.pages : []).map(e), ...(r ?? []).map(i)]),
      (t[6] = n),
      (t[7] = o),
      (t[8] = u),
      (t[9] = r),
      (t[10] = h));
  } else h = t[10];
  let g;
  t[15] !== c || t[16] !== h
    ? ((g = (0, $.jsx)(Te, { animate: c, items: h })), (t[15] = c), (t[16] = h), (t[17] = g))
    : (g = t[17]);
  let _;
  t[18] !== l || t[19] !== o || t[20] !== m || t[21] !== g
    ? ((_ = (0, $.jsx)(Mt, { pages: m, renderContentItem: o, isCurrent: l, children: g })),
      (t[18] = l),
      (t[19] = o),
      (t[20] = m),
      (t[21] = g),
      (t[22] = _))
    : (_ = t[22]);
  let v;
  t[23] !== n || t[24] !== u
    ? ((v = u && (0, $.jsx)(zt, { pins: n })), (t[23] = n), (t[24] = u), (t[25] = v))
    : (v = t[25]);
  let y;
  return (
    t[26] !== d || t[27] !== i || t[28] !== p || t[29] !== _ || t[30] !== v
      ? ((y = (0, $.jsxs)(`section`, {
          className: `flex flex-col gap-4`,
          "aria-labelledby": d,
          children: [p, _, v, i],
        })),
        (t[26] = d),
        (t[27] = i),
        (t[28] = p),
        (t[29] = _),
        (t[30] = v),
        (t[31] = y))
      : (y = t[31]),
    y
  );
}
var Ut, Wt, $;
function Gt() {
  return (Gt = e(() => {
    ((Ut = C()), (Wt = D()), y(), ge(), Rt(), Vt(), ($ = E()));
  }))();
}
export { jt as a, mt as c, Ot as i, gt as l, Gt as n, _t as o, St as r, xt as s, Ht as t };
//# sourceMappingURL=pinned-pages-1af40ca84ec7.js.map
