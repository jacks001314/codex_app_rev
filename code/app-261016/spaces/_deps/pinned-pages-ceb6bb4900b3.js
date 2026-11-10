import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  CU as r,
  FBt as i,
  IH as a,
  LNt as o,
  MNt as s,
  NNt as c,
  NSt as l,
  PBt as u,
  Pit as d,
  Qst as f,
  TY as p,
  USt as m,
  VSt as h,
  XOt as g,
  Y3 as _,
  Z3 as v,
  ZSt as y,
  bB as b,
  iCt as x,
  jit as S,
  lB as C,
  nCt as w,
  okt as T,
  tkt as E,
  uB as D,
  vB as O,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Afn as k,
  Ast as A,
  Azt as j,
  B0 as M,
  BRr as N,
  CEn as P,
  D0 as F,
  DEn as I,
  Ddn as L,
  E0 as R,
  Fmt as z,
  G_n as B,
  Glt as V,
  HU as H,
  Ifn as U,
  Ilr as ee,
  JB as W,
  Jlr as G,
  Jlt as K,
  KB as te,
  Lfn as ne,
  MEn as re,
  NEn as ie,
  Nmt as q,
  OEn as ae,
  Ozt as oe,
  Qlt as se,
  SEn as ce,
  TEn as le,
  Tan as ue,
  Ult as de,
  Wlt as fe,
  XEn as pe,
  YEn as me,
  Yfn as he,
  Ylt as ge,
  Zlr as _e,
  Zlt as ve,
  _En as ye,
  _H as be,
  bH as xe,
  cut as Se,
  dan as Ce,
  efn as we,
  fEn as Te,
  fan as Ee,
  gEn as De,
  gH as Oe,
  gur as ke,
  hEn as Ae,
  hH as je,
  hdn as Me,
  jfn as Ne,
  jst as Pe,
  kfn as Fe,
  kzt as Ie,
  lut as Le,
  mlr as Re,
  nfn as ze,
  nir as Be,
  pur as Ve,
  qB as He,
  qU as Ue,
  q_n as We,
  uut as Ge,
  vH as Ke,
  vIr as qe,
  vdn as Je,
  wEn as Ye,
  wLr as Xe,
  wan as Ze,
  xH as Qe,
  yEn as $e,
  yH as et,
  yIr as tt,
  z0 as nt,
} from "./app-initial-ad16eaadf81f.js";
import { n as rt, t as it } from "./cached-page-metadata-4ec7d429eb36.js";
import { a as at, i as ot, n as st, r as ct, t as lt } from "./native-drag-91a589044ace.js";
import {
  A as ut,
  d as dt,
  i as ft,
  l as pt,
  p as mt,
  t as ht,
  y as gt,
} from "./selectable-library-item-3b495aba5b29.js";
import { i as _t, n as vt, r as yt, t as bt } from "./page-content-item-331f3e1fa38d.js";
function xt(e) {
  let n = (0, St.c)(15),
    {
      page: r,
      expansion: i,
      knownChildrenByParent: o,
      renderPage: c,
      ancestors: l,
      showSource: u,
      showSharedBy: d,
      showSize: p,
    } = e,
    m = l === void 0 ? [] : l,
    h = u !== void 0 && u,
    g = d !== void 0 && d,
    v = p !== void 0 && p,
    y = t(f),
    b = T(),
    { defer_child_checks: C } = x(ne),
    D = x(ee),
    O = x(ke),
    A = x(N),
    j = `node` in r ? r.node.id : r.page_id,
    M = `node` in r ? r.node.name : r.title,
    P = j === i.rootPageId,
    F = JSON.stringify([...m, j]),
    I = !P && (i.overrides[F] ?? !1),
    L = o.get(j),
    R;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((R = { enabled: !1 }), (n[0] = R)) : (R = n[0]);
  let { data: z, isPending: B, isError: V, error: H } = w(Ne, j, R),
    U = w(k, j),
    G;
  n[1] === H
    ? (G = n[2])
    : ((G = H instanceof S && [403, 404, 410].includes(H.status)), (n[1] = H), (n[2] = G));
  let K = G,
    re = m.length,
    ie = te({
      pageId: j,
      data: z,
      error: H,
      partial: U,
      knownChildren: L,
      sitePagesEnabled: D,
      excludedPageIds: i.excludedPageIds,
      ancestors: m,
      moveDisplay: i.moveDisplay,
    }),
    q = !P && !K && (ie.length > 0 || ((`node` in r || r.has_children !== !1) && (z == null || V))),
    ae = q && (C || ie.length > 0 || (!(`node` in r) && r.has_children === !0) || I || V),
    oe = I && ae,
    se;
  n[3] === oe ? (se = n[4]) : ((se = { enabled: oe }), (n[3] = oe), (n[4] = se));
  let { refetch: ce } = w(Ne, j, se),
    le =
      (C
        ? !(`node` in r) && m.length === 0 && r.has_children === !0
        : m.length === 0 || `node` in r || r.has_children == null) &&
      !I &&
      q &&
      (`node` in r || (r.access.can_read && r.deleted_at == null)),
    ue;
  n[5] !== O || n[6] !== j || n[7] !== le || n[8] !== y || n[9] !== A
    ? ((ue = (e) => (e != null && le ? W(y, j, e, { accountId: O, userId: A }) : void 0)),
      (n[5] = O),
      (n[6] = j),
      (n[7] = le),
      (n[8] = y),
      (n[9] = A),
      (n[10] = ue))
    : (ue = n[10]);
  let fe = ue,
    pe;
  n[11] !== I || n[12] !== b || n[13] !== M
    ? ((pe = I
        ? b.formatMessage(
            {
              id: `space.pageTree.collapse`,
              defaultMessage: `Collapse {title}`,
              description: `Hide child rows of the named Page in the Space list`,
            },
            { title: M ?? `` },
          )
        : b.formatMessage(
            {
              id: `space.pageTree.expand`,
              defaultMessage: `Expand {title}`,
              description: `Show child rows of the named Page in the Space list`,
            },
            { title: M ?? `` },
          )),
      (n[11] = I),
      (n[12] = b),
      (n[13] = M),
      (n[14] = pe))
    : (pe = n[14]);
  let me = pe,
    he = {
      depth: re,
      expanded: I,
      onToggle: q ? (e) => i.onToggle(F, e) : void 0,
      disclosure: ae
        ? (0, J.jsx)(_, {
            className: `relative before:absolute before:-inset-1.5 before:content-['']`,
            color: `disclosure`,
            size: `inline`,
            radius: `small`,
            uniform: !0,
            "aria-label": me,
            title: me,
            "aria-expanded": I,
            onClick: (e) => {
              (e.stopPropagation(), i.onToggle(F, !I));
            },
            children: (0, J.jsx)(a, { className: s(`text-secondary`, I && `rotate-90`) }),
          })
        : void 0,
    };
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(`div`, {
        ref: fe,
        role: `presentation`,
        "data-library-item": !0,
        onDropCapture: (e) => ot.expandDrop(y, e, P ? null : j, () => i.onToggle(F, !0)),
        children: c(r, he),
      }),
      I && ae
        ? (0, J.jsxs)(J.Fragment, {
            children: [
              ie.map((e) =>
                (0, J.jsx)(
                  xt,
                  {
                    page: e,
                    expansion: i,
                    knownChildrenByParent: o,
                    renderPage: c,
                    ancestors: [...m, j],
                    showSource: h,
                    showSharedBy: g,
                    showSize: v,
                  },
                  e.page_id,
                ),
              ),
              B && ie.length === 0
                ? (0, J.jsx)(de, {
                    rowCount: 1,
                    treeDepth: re + 1,
                    showSource: h,
                    showSharedBy: g,
                    showSize: v,
                    loadingLabel: (0, J.jsx)(E, {
                      id: `space.pageTree.loading`,
                      defaultMessage: `Loading subpages…`,
                      description: `Status while child Pages load in a list`,
                    }),
                  })
                : null,
              V && !K
                ? (0, J.jsxs)(`div`, {
                    className: `flex items-center gap-2 px-row-x py-row-y text-sm text-secondary`,
                    role: `status`,
                    children: [
                      (0, J.jsx)(E, {
                        id: `space.pageTree.error`,
                        defaultMessage: `Could not load subpages`,
                        description: `Error loading child Pages in the Space list`,
                      }),
                      (0, J.jsx)(_, {
                        color: `ghost`,
                        size: `compact`,
                        onClick: () => void ce(),
                        children: (0, J.jsx)(E, {
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
var St, J;
function Ct() {
  return (Ct = e(() => {
    ((St = u()), c(), y(), g(), Xe(), v(), p(), fe(), ct(), n(), d(), U(), Re(), Fe(), Me(), He(), (J = o()));
  }))();
}
function wt(e) {
  let t = (0, Tt.c)(8),
    { pageId: n, depth: r } = e,
    i = w(et, n);
  if (i == null) return null;
  let a = i === `before` ? `top-0` : `bottom-0`,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = s(`pointer-events-none absolute inset-x-0 z-10 flex h-0 items-center`, a)),
      (t[0] = a),
      (t[1] = o));
  let c;
  t[2] === r ? (c = t[3]) : ((c = r == null ? null : (0, Et.jsx)(ve, { depth: r })), (t[2] = r), (t[3] = c));
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Et.jsx)(`div`, { className: `min-w-0 flex-1`, children: (0, Et.jsx)(R, { active: !0 }) })),
      (t[4] = l))
    : (l = t[4]);
  let u;
  return (
    t[5] !== o || t[6] !== c
      ? ((u = (0, Et.jsxs)(`div`, { className: o, children: [c, l] })), (t[5] = o), (t[6] = c), (t[7] = u))
      : (u = t[7]),
    u
  );
}
var Tt, Et;
function Dt() {
  return (Dt = e(() => {
    ((Tt = u()), c(), y(), se(), F(), Qe(), (Et = o()));
  }))();
}
function Ot(e) {
  let n = (0, kt.c)(44),
    r = t(he),
    i = (0, At.useId)(),
    a = T(),
    o = `page_id` in e.page ? e.page.page_id : e.page.node.id,
    c = w(it, o),
    l = `page_id` in e.page ? e.page : c,
    u = w(dt, o),
    d = x(mt),
    f = w(Ue, o),
    p = w(xe, o),
    m = w(Ke, o),
    h = w(lt, o),
    g = w(be, o),
    _ = x(st),
    v = x(z),
    y,
    b;
  (n[0] !== o || n[1] !== r
    ? ((y = () => () => ot.end(r, o)), (b = [r, o]), (n[0] = o), (n[1] = r), (n[2] = y), (n[3] = b))
    : ((y = n[2]), (b = n[3])),
    (0, At.useEffect)(y, b));
  let S = (l == null || l.access.can_read) && r.value.tab !== `favorites`,
    C = `page_id` in e.page ? e.page.title : e.page.node.name,
    E = g && `opacity-50`,
    D;
  n[4] === E ? (D = n[5]) : ((D = s(`relative`, E)), (n[4] = E), (n[5] = D));
  let O = S ? o : void 0,
    k = S ? i : void 0,
    A = f || m || void 0,
    j =
      _ &&
      (v == null || (l != null && l.display_metadata_included !== !1 && l.parent == null)) &&
      e.viewMode === `list` &&
      !e.pinnedPresentation,
    M;
  n[6] !== o || n[7] !== e.tree || n[8] !== r || n[9] !== j
    ? ((M = at(r, o, e.tree, j)), (n[6] = o), (n[7] = e.tree), (n[8] = r), (n[9] = j), (n[10] = M))
    : (M = n[10]);
  let N = S && u,
    P;
  n[11] !== o || n[12] !== a || n[13] !== C || n[14] !== e.page || n[15] !== e.viewMode || n[16] !== S
    ? ((P = S
        ? (0, jt.jsx)(ht, {
            id: o,
            viewMode: e.viewMode,
            label: C
              ? a.formatMessage(
                  {
                    id: `space.library.selectPage`,
                    defaultMessage: `Select {name}`,
                    description: `Accessible label for selecting a Page in the Library; name is the Page title`,
                  },
                  { name: C },
                )
              : a.formatMessage(
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
      (n[11] = o),
      (n[12] = a),
      (n[13] = C),
      (n[14] = e.page),
      (n[15] = e.viewMode),
      (n[16] = S),
      (n[17] = P))
    : (P = n[17]);
  let F;
  n[18] !== d || n[19] !== o || n[20] !== r || n[21] !== S || n[22] !== u
    ? ((F = (e) =>
        !S || (!d && !e?.shiftKey)
          ? !1
          : (gt(r, o, e?.shiftKey ? !0 : !u, e?.shiftKey, e?.currentTarget), !0)),
      (n[18] = d),
      (n[19] = o),
      (n[20] = r),
      (n[21] = S),
      (n[22] = u),
      (n[23] = F))
    : (F = n[23]);
  let I;
  n[24] !== d || n[25] !== m || n[26] !== p || n[27] !== e || n[28] !== P || n[29] !== F || n[30] !== N
    ? ((I = (0, jt.jsx)(bt, {
        ...e,
        selected: N,
        selectionActive: d,
        isDropTarget: p,
        checkingMove: m,
        selection: P,
        onSelect: F,
      })),
      (n[24] = d),
      (n[25] = m),
      (n[26] = p),
      (n[27] = e),
      (n[28] = P),
      (n[29] = F),
      (n[30] = N),
      (n[31] = I))
    : (I = n[31]);
  let L = e.tree?.depth,
    R;
  n[32] !== o || n[33] !== L
    ? ((R = (0, jt.jsx)(wt, { pageId: o, depth: L })), (n[32] = o), (n[33] = L), (n[34] = R))
    : (R = n[34]);
  let B;
  return (
    n[35] !== h ||
    n[36] !== I ||
    n[37] !== R ||
    n[38] !== D ||
    n[39] !== O ||
    n[40] !== k ||
    n[41] !== A ||
    n[42] !== M
      ? ((B = (0, jt.jsxs)(`div`, {
          className: D,
          "data-library-item": ``,
          "data-library-selection-id": O,
          "data-library-selection-key": k,
          draggable: h,
          "aria-busy": A,
          ...M,
          children: [I, R],
        })),
        (n[35] = h),
        (n[36] = I),
        (n[37] = R),
        (n[38] = D),
        (n[39] = O),
        (n[40] = k),
        (n[41] = A),
        (n[42] = M),
        (n[43] = B))
      : (B = n[43]),
    B
  );
}
var kt, At, jt;
function Mt() {
  return (Mt = e(() => {
    ((kt = u()), c(), y(), (At = i()), g(), q(), pt(), ft(), rt(), Dt(), ct(), H(), vt(), (jt = o()));
  }))();
}
function Nt(e) {
  let t = (0, Bt.c)(46),
    {
      navigation: n,
      pages: r,
      viewMode: i,
      emptyTitle: a,
      emptyState: o,
      spaceRoots: s,
      showSource: c,
      expansion: l,
      reserveDisclosureSpace: u,
      knownChildrenByParent: d,
      selectable: f,
      gridLoading: p,
    } = e,
    m = c === void 0 || c,
    h = f !== void 0 && f,
    g = p !== void 0 && p,
    _ = T(),
    v = h ? Ot : bt,
    y = u ?? l != null;
  if (r == null && s == null) return null;
  let b, x;
  t[0] !== l || t[1] !== d || t[2] !== r || t[3] !== i
    ? ((b = l != null && r != null && i === `list` ? (d ?? we(r.map(Lt), []).pagesByParentId) : void 0),
      (x = new Set(
        b == null
          ? []
          : [...b].flatMap((e) => {
              let [t, n] = e;
              return t === l?.rootPageId ? [] : n.map(It);
            }),
      )),
      (t[0] = l),
      (t[1] = d),
      (t[2] = r),
      (t[3] = i),
      (t[4] = b),
      (t[5] = x))
    : ((b = t[4]), (x = t[5]));
  let S = x,
    C;
  if (
    t[6] !== v ||
    t[7] !== b ||
    t[8] !== l ||
    t[9] !== g ||
    t[10] !== n ||
    t[11] !== S ||
    t[12] !== r ||
    t[13] !== y ||
    t[14] !== m ||
    t[15] !== s ||
    t[16] !== i
  ) {
    if (
      ((C = [
        ...(s?.map((e) => ({
          id: e.root_page_id,
          content: (0, Y.jsx)(Rt, {
            navigation: n,
            space: e,
            viewMode: i,
            showSource: m,
            reserveDisclosureSpace: y,
          }),
        })) ?? []),
        ...(r
          ?.filter((e) => {
            let { page: t } = e;
            return !S.has(t.page_id);
          })
          .map((e) => {
            let { page: t, parentSpace: r } = e,
              a;
            return (
              m && (a = r == null ? Vt : (0, Y.jsx)(zt, { navigation: n, space: r })),
              {
                id: t.page_id,
                content:
                  l != null && b != null
                    ? (0, Y.jsx)(xt, {
                        page: t,
                        showSource: m,
                        expansion: l,
                        knownChildrenByParent: b,
                        renderPage: (e, t) =>
                          (0, Y.jsx)(v, {
                            navigation: n,
                            page: e,
                            parentSpace: r,
                            viewMode: `list`,
                            libraryPresentation: !0,
                            source: a,
                            tree: t,
                          }),
                      })
                    : (0, Y.jsx)(v, {
                        navigation: n,
                        page: t,
                        parentSpace: r,
                        viewMode: i,
                        libraryPresentation: !0,
                        reserveDisclosureSpace: y,
                        source: a,
                      }),
              }
            );
          }) ?? []),
      ]),
      i === `grid` && g)
    ) {
      let e;
      (t[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = Array.from({ length: 3 }, Ft)), (t[18] = e))
        : (e = t[18]),
        C.push(...e));
    }
    ((t[6] = v),
      (t[7] = b),
      (t[8] = l),
      (t[9] = g),
      (t[10] = n),
      (t[11] = S),
      (t[12] = r),
      (t[13] = y),
      (t[14] = m),
      (t[15] = s),
      (t[16] = i),
      (t[17] = C));
  } else C = t[17];
  if (C.length === 0) {
    let e;
    t[19] !== o || t[20] !== a
      ? ((e = o ?? (0, Y.jsx)(me, { layout: `browse`, title: a })), (t[19] = o), (t[20] = a), (t[21] = e))
      : (e = t[21]);
    let n;
    return (
      t[22] === e ? (n = t[23]) : ((n = (0, Y.jsx)(Y.Fragment, { children: e })), (t[22] = e), (t[23] = n)),
      n
    );
  }
  if (i === `grid`) {
    let e;
    return (t[24] === C ? (e = t[25]) : ((e = (0, Y.jsx)(Le, { items: C })), (t[24] = C), (t[25] = e)), e);
  }
  let w;
  t[26] === _
    ? (w = t[27])
    : ((w = _.formatMessage({
        id: `space.list.pages`,
        defaultMessage: `Pages`,
        description: `Accessible label for the list of Pages on Space home and Personal`,
      })),
      (t[26] = _),
      (t[27] = w));
  let D;
  t[28] === y ? (D = t[29]) : ((D = y ? (0, Y.jsx)(ve, { depth: 0 }) : null), (t[28] = y), (t[29] = D));
  let O;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Y.jsx)(E, {
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
  let A;
  t[33] === m
    ? (A = t[34])
    : ((A = m
        ? (0, Y.jsx)(`span`, {
            role: `columnheader`,
            "data-library-column": `source`,
            tabIndex: 0,
            className: `hidden w-60 shrink-0 @3xl/library-row:block`,
            children: (0, Y.jsx)(E, {
              id: `libraryNext.results.source`,
              defaultMessage: `Source`,
              description: `Column showing the Space an item belongs to`,
            }),
          })
        : null),
      (t[33] = m),
      (t[34] = A));
  let j, M;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Y.jsx)(`span`, {
        role: `columnheader`,
        "data-library-column": `date`,
        tabIndex: 0,
        className: `hidden w-40 shrink-0 @lg/library-row:block`,
        children: (0, Y.jsx)(E, {
          id: `libraryNext.results.lastActivity`,
          defaultMessage: `Last activity`,
          description: `Library list activity column heading`,
        }),
      })),
      (M = (0, Y.jsx)(`span`, { "aria-hidden": `true`, className: `w-9 shrink-0 @lg/library-row:w-16` })),
      (t[35] = j),
      (t[36] = M))
    : ((j = t[35]), (M = t[36]));
  let N;
  t[37] !== k || t[38] !== A
    ? ((N = (0, Y.jsxs)(K, { children: [k, A, j, M] })), (t[37] = k), (t[38] = A), (t[39] = N))
    : (N = t[39]);
  let P;
  t[40] === C ? (P = t[41]) : ((P = C.map(Pt)), (t[40] = C), (t[41] = P));
  let F;
  return (
    t[42] !== N || t[43] !== P || t[44] !== w
      ? ((F = (0, Y.jsxs)(`div`, {
          className: `-mx-[var(--padding-row-cell-x,var(--padding-row-x))]`,
          role: `grid`,
          tabIndex: -1,
          onKeyDown: ut,
          "aria-label": w,
          children: [N, P],
        })),
        (t[42] = N),
        (t[43] = P),
        (t[44] = w),
        (t[45] = F))
      : (F = t[45]),
    F
  );
}
function Pt(e) {
  let { id: t, content: n } = e;
  return (0, Y.jsx)(`div`, { role: `presentation`, "data-library-item": !0, children: n }, t);
}
function Ft(e, t) {
  return { id: `loading-${t}`, content: (0, Y.jsx)(Se, { square: !0, index: t }) };
}
function It(e) {
  return e.page_id;
}
function Lt(e) {
  let { page: t } = e;
  return t;
}
function Rt(e) {
  let n = (0, Bt.c)(24),
    { navigation: r, space: i, viewMode: a, showSource: o, reserveDisclosureSpace: s } = e,
    c = t(f),
    l = m(),
    u = h(),
    d = w(Je, i.root_page_id, { enabled: !1 }) ?? i.root_page_metadata,
    p = d == null ? i.symbol : d.symbol,
    g = d?.document_type,
    _;
  n[0] === g ? (_ = n[1]) : ((_ = _e({ document_type: g })), (n[0] = g), (n[1] = _));
  let v = _,
    y;
  n[2] !== u || n[3] !== l || n[4] !== r || n[5] !== c || n[6] !== i
    ? ((y = () => {
        if (r != null) {
          r.onOpenSpace(i);
          return;
        }
        Pe(c, l, u, c.get(ke), i.root_page_id);
      }),
      (n[2] = u),
      (n[3] = l),
      (n[4] = r),
      (n[5] = c),
      (n[6] = i),
      (n[7] = y))
    : (y = n[7]);
  let b = y,
    x = d?.document_type,
    S;
  n[8] !== v ||
  n[9] !== d?.document_type ||
  n[10] !== r ||
  n[11] !== b ||
  n[12] !== s ||
  n[13] !== o ||
  n[14] !== i ||
  n[15] !== p ||
  n[16] !== a
    ? ((S = (e) => {
        let { icon: t, title: n } = e;
        return a === `grid`
          ? (0, Y.jsx)(V, {
              name: i.name,
              square: !0,
              landscape: v === `granola_workbook` || v === `granola_presentation`,
              onOpen: b,
              documentHeader: (0, Y.jsxs)(Y.Fragment, {
                children: [t, (0, Y.jsx)(`span`, { className: `truncate`, children: n })],
              }),
              children: (0, Y.jsx)(yt, {
                iconColor: `file-type`,
                pageId: i.root_page_id,
                title: i.name,
                documentType: d?.document_type,
                symbol: p,
              }),
            })
          : (0, Y.jsx)(ge, {
              reserveDisclosureSpace: s,
              name: i.name,
              artwork: t,
              activity: null,
              source: o ? (0, Y.jsx)(zt, { navigation: r, space: i }) : void 0,
              onOpen: b,
            });
      }),
      (n[8] = v),
      (n[9] = d?.document_type),
      (n[10] = r),
      (n[11] = b),
      (n[12] = s),
      (n[13] = o),
      (n[14] = i),
      (n[15] = p),
      (n[16] = a),
      (n[17] = S))
    : (S = n[17]);
  let C;
  return (
    n[18] !== i.name || n[19] !== i.root_page_id || n[20] !== p || n[21] !== x || n[22] !== S
      ? ((C = (0, Y.jsx)(Ce, {
          iconColor: `file-type`,
          pageId: i.root_page_id,
          documentType: x,
          iconSize: 20,
          symbol: p,
          title: i.name,
          children: S,
        })),
        (n[18] = i.name),
        (n[19] = i.root_page_id),
        (n[20] = p),
        (n[21] = x),
        (n[22] = S),
        (n[23] = C))
      : (C = n[23]),
    C
  );
}
function zt(e) {
  let n = (0, Bt.c)(18),
    { navigation: r, space: i } = e,
    a = t(f),
    o = T(),
    s = m(),
    c = h(),
    l;
  n[0] !== o || n[1] !== i.name
    ? ((l = o.formatMessage(
        {
          id: `space.list.openSpace`,
          defaultMessage: `Open {name} space`,
          description: `Open the Space containing this Page. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        },
        { name: i.name },
      )),
      (n[0] = o),
      (n[1] = i.name),
      (n[2] = l))
    : (l = n[2]);
  let u;
  n[3] !== c || n[4] !== s || n[5] !== r || n[6] !== a || n[7] !== i
    ? ((u = (e) => {
        if ((e.stopPropagation(), r != null)) {
          r.onOpenSpace(i);
          return;
        }
        Pe(a, s, c, a.get(ke), i.root_page_id);
      }),
      (n[3] = c),
      (n[4] = s),
      (n[5] = r),
      (n[6] = a),
      (n[7] = i),
      (n[8] = u))
    : (u = n[8]);
  let d;
  n[9] === i.id ? (d = n[10]) : ((d = (0, Y.jsx)(Ze, { spaceId: i.id })), (n[9] = i.id), (n[10] = d));
  let p;
  n[11] === i.name
    ? (p = n[12])
    : ((p = (0, Y.jsx)(`span`, { className: `truncate`, children: i.name })), (n[11] = i.name), (n[12] = p));
  let g;
  return (
    n[13] !== l || n[14] !== u || n[15] !== d || n[16] !== p
      ? ((g = (0, Y.jsxs)(`button`, {
          className: `relative z-10 flex max-w-full cursor-interaction items-center gap-2 text-start hover:text-default`,
          type: `button`,
          "aria-label": l,
          onClick: u,
          children: [d, p],
        })),
        (n[13] = l),
        (n[14] = u),
        (n[15] = d),
        (n[16] = p),
        (n[17] = g))
      : (g = n[17]),
    g
  );
}
var Bt, Y, Vt;
function Ht() {
  return (Ht = e(() => {
    ((Bt = u()),
      y(),
      g(),
      l(),
      pe(),
      se(),
      Ge(),
      n(),
      G(),
      A(),
      _t(),
      ue(),
      ze(),
      Me(),
      Ee(),
      vt(),
      Ct(),
      Mt(),
      (Y = o()),
      (Vt = `—`));
  }))();
}
function Ut(e) {
  let n = (0, qt.c)(87),
    { pages: r, renderContentItem: i, isCurrent: a, children: o } = e,
    s = t(f),
    c = (0, X.useId)(),
    l = T(),
    u = 8 * b(),
    d = x(ke),
    p = x(N),
    m = h(),
    [g, _] = (0, X.useState)(null),
    v = (0, X.useRef)(null),
    y = (0, X.useRef)(null),
    S = (0, X.useRef)(null),
    w = (0, X.useRef)(null),
    E;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = { activationConstraint: { distance: 6 } }), (n[0] = E))
    : (E = n[0]);
  let D;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = { activationConstraint: { delay: 250, tolerance: 5 } }), (n[1] = D))
    : (D = n[1]);
  let O;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = { coordinateGetter: De }), (n[2] = O))
    : (O = n[2]);
  let k = ie(re(Jt, E), re(Ye, D), re(ce, O)),
    A;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = () => {
        ((w.current = null), (v.current = null), (y.current = null), _(null));
      }),
      (n[3] = A))
    : (A = n[3]);
  let M = A;
  j(g != null, v, M);
  let P;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = () => () => {
        (S.current?.abort(),
          w.current != null &&
            document.dispatchEvent(
              new KeyboardEvent(`keydown`, { bubbles: !0, cancelable: !0, code: `Escape`, key: `Escape` }),
            ));
      }),
      (n[4] = P))
    : (P = n[4]);
  let F;
  (n[5] !== d || n[6] !== m.key || n[7] !== p
    ? ((F = [m.key, d, p]), (n[5] = d), (n[6] = m.key), (n[7] = p), (n[8] = F))
    : (F = n[8]),
    (0, X.useEffect)(P, F));
  let I;
  n[9] === r ? (I = n[10]) : ((I = r.map(Wt)), (n[9] = r), (n[10] = I));
  let L = I,
    R,
    z,
    B,
    V,
    H,
    U,
    ee,
    W,
    G,
    K,
    te;
  if (
    n[11] !== d ||
    n[12] !== g ||
    n[13] !== o ||
    n[14] !== c ||
    n[15] !== u ||
    n[16] !== L ||
    n[17] !== l ||
    n[18] !== a ||
    n[19] !== m.key ||
    n[20] !== r ||
    n[21] !== i ||
    n[22] !== s ||
    n[23] !== k ||
    n[24] !== p
  ) {
    let e;
    n[36] === g ? (e = n[37]) : ((e = (e) => e.page_id === g), (n[36] = g), (n[37] = e));
    let t = r.find(e);
    ((z = $e),
      (te = c),
      (B = k),
      n[38] === u
        ? (V = n[39])
        : ((V = (e) => {
            let t = e.pointerCoordinates;
            if (t == null) return le(e);
            let n = ae(e);
            if (n.length > 0) return ((y.current = n[0].id), n);
            let r = y.current == null ? void 0 : e.droppableRects.get(y.current);
            return r != null &&
              t.x >= r.left - u &&
              t.x <= r.right + u &&
              t.y >= r.top - u &&
              t.y <= r.bottom + u &&
              y.current != null
              ? [{ id: y.current }]
              : [];
          }),
          (n[38] = u),
          (n[39] = V)));
    let f;
    n[40] === l
      ? (f = n[41])
      : ((f = l.formatMessage({
          id: `space.home.pinned.reorderInstructions`,
          defaultMessage: `Press Space to pick up a pinned item, use the arrow keys to move it, and press Space to drop it. Press Escape to cancel.`,
          description: `Keyboard instructions for reordering pinned previews on Suggested`,
        })),
        (n[40] = l),
        (n[41] = f));
    let h;
    n[42] === f ? (h = n[43]) : ((h = { draggable: f }), (n[42] = f), (n[43] = h));
    let b;
    n[44] === l
      ? (b = n[45])
      : ((b = () =>
          l.formatMessage({
            id: `space.home.pinned.reorderStarted`,
            defaultMessage: `Pinned item picked up`,
            description: `Screen reader announcement when a Suggested pin drag starts`,
          })),
        (n[44] = l),
        (n[45] = b));
    let x;
    n[46] !== L || n[47] !== l
      ? ((x = (e) => {
          let { over: t } = e;
          return t == null
            ? void 0
            : l.formatMessage(
                {
                  id: `space.home.pinned.reorderPosition`,
                  defaultMessage: `Position {position} of {count}`,
                  description: `Screen reader announcement of the proposed position while reordering Suggested pins`,
                },
                { position: L.indexOf(String(t.id)) + 1, count: L.length },
              );
        }),
        (n[46] = L),
        (n[47] = l),
        (n[48] = x))
      : (x = n[48]);
    let T, E;
    n[49] === l
      ? ((T = n[50]), (E = n[51]))
      : ((T = () =>
          l.formatMessage({
            id: `space.home.pinned.reorderEnded`,
            defaultMessage: `Pinned item released`,
            description: `Screen reader announcement when a Suggested pin drag ends`,
          })),
        (E = () =>
          l.formatMessage({
            id: `space.home.pinned.reorderCancelled`,
            defaultMessage: `Reordering cancelled`,
            description: `Screen reader announcement when reordering Suggested pins is cancelled`,
          })),
        (n[49] = l),
        (n[50] = T),
        (n[51] = E));
    let D;
    (n[52] !== b || n[53] !== x || n[54] !== T || n[55] !== E
      ? ((D = { onDragStart: b, onDragOver: x, onDragEnd: T, onDragCancel: E }),
        (n[52] = b),
        (n[53] = x),
        (n[54] = T),
        (n[55] = E),
        (n[56] = D))
      : (D = n[56]),
      n[57] !== h || n[58] !== D
        ? ((H = { screenReaderInstructions: h, announcements: D }), (n[57] = h), (n[58] = D), (n[59] = H))
        : (H = n[59]),
      n[60] !== d || n[61] !== m.key || n[62] !== p
        ? ((U = (e) => {
            let { active: t, activatorEvent: n } = e;
            if ((C(), n.type !== `keydown`)) {
              S.current?.abort();
              let e = new AbortController();
              ((S.current = e),
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
            ((w.current = { accountId: d, userId: p, locationKey: m.key }),
              (v.current = oe(n)),
              _(String(t.id)));
          }),
          (n[60] = d),
          (n[61] = m.key),
          (n[62] = p),
          (n[63] = U))
        : (U = n[63]),
      (ee = M),
      n[64] !== d || n[65] !== L || n[66] !== a || n[67] !== m.key || n[68] !== s
        ? ((W = (e) => {
            let { active: t, over: n } = e,
              r = w.current;
            (M(),
              r != null &&
                d != null &&
                s.get(ke) === r.accountId &&
                s.get(N) === r.userId &&
                m.key === r.locationKey &&
                a?.() !== !1 &&
                n != null &&
                Oe(
                  s,
                  s
                    .get(We)
                    .filter((e) => L.includes(e))
                    .map((e) => Be(d, e)),
                  Be(d, String(t.id)),
                  Be(d, String(n.id)),
                ));
          }),
          (n[64] = d),
          (n[65] = L),
          (n[66] = a),
          (n[67] = m.key),
          (n[68] = s),
          (n[69] = W))
        : (W = n[69]),
      n[70] !== o || n[71] !== L
        ? ((G = (0, Z.jsx)(Te, { items: L, children: o })), (n[70] = o), (n[71] = L), (n[72] = G))
        : (G = n[72]),
      (R = nt),
      (K =
        t == null ? null : (0, Z.jsx)(`div`, { className: `opacity-70`, children: i({ page: t }, `grid`) })),
      (n[11] = d),
      (n[12] = g),
      (n[13] = o),
      (n[14] = c),
      (n[15] = u),
      (n[16] = L),
      (n[17] = l),
      (n[18] = a),
      (n[19] = m.key),
      (n[20] = r),
      (n[21] = i),
      (n[22] = s),
      (n[23] = k),
      (n[24] = p),
      (n[25] = R),
      (n[26] = z),
      (n[27] = B),
      (n[28] = V),
      (n[29] = H),
      (n[30] = U),
      (n[31] = ee),
      (n[32] = W),
      (n[33] = G),
      (n[34] = K),
      (n[35] = te));
  } else
    ((R = n[25]),
      (z = n[26]),
      (B = n[27]),
      (V = n[28]),
      (H = n[29]),
      (U = n[30]),
      (ee = n[31]),
      (W = n[32]),
      (G = n[33]),
      (K = n[34]),
      (te = n[35]));
  let ne;
  n[73] !== R || n[74] !== K
    ? ((ne = (0, Z.jsx)(R, { children: K })), (n[73] = R), (n[74] = K), (n[75] = ne))
    : (ne = n[75]);
  let q;
  return (
    n[76] !== z ||
    n[77] !== B ||
    n[78] !== V ||
    n[79] !== H ||
    n[80] !== U ||
    n[81] !== ee ||
    n[82] !== W ||
    n[83] !== G ||
    n[84] !== ne ||
    n[85] !== te
      ? ((q = (0, Z.jsxs)(z, {
          id: te,
          sensors: B,
          collisionDetection: V,
          accessibility: H,
          onDragStart: U,
          onDragCancel: ee,
          onDragEnd: W,
          children: [G, ne],
        })),
        (n[76] = z),
        (n[77] = B),
        (n[78] = V),
        (n[79] = H),
        (n[80] = U),
        (n[81] = ee),
        (n[82] = W),
        (n[83] = G),
        (n[84] = ne),
        (n[85] = te),
        (n[86] = q))
      : (q = n[86]),
    q
  );
}
function Wt(e) {
  return e.page_id;
}
function Gt(e) {
  let t = (0, qt.c)(27),
    { page: n, children: i } = e,
    a = T(),
    o;
  t[0] === n.page_id ? (o = t[1]) : ((o = { id: n.page_id }), (t[0] = n.page_id), (t[1] = o));
  let {
      attributes: c,
      listeners: l,
      setNodeRef: u,
      setActivatorNodeRef: d,
      isDragging: f,
      isOver: p,
      activeIndex: m,
      overIndex: h,
    } = ye(o),
    g = null;
  p && !f && (g = m < h ? `after` : `before`);
  let v;
  t[2] === l
    ? (v = t[3])
    : ((v = (e) => {
        e.defaultPrevented ||
          (e.target instanceof Element &&
            e.target.closest(
              `button, input, textarea, select, [role="button"], [role="menuitem"], [contenteditable="true"]`,
            ) != null) ||
          (e.type === `pointerdown` ? l?.onPointerDown?.(e) : l?.onTouchStart?.(e));
      }),
      (t[2] = l),
      (t[3] = v));
  let y = v,
    b = f && `opacity-50`,
    x;
  t[4] === b ? (x = t[5]) : ((x = s(`relative`, b)), (t[4] = b), (t[5] = x));
  let S;
  t[6] !== a || t[7] !== n.page_id || t[8] !== n.title
    ? ((S = a.formatMessage(
        {
          id: `space.home.pinned.reorderHandle`,
          defaultMessage: `Reorder {title}`,
          description: `Accessible label for the drag handle on a pinned Suggested preview`,
        },
        { title: n.title || n.page_id },
      )),
      (t[6] = a),
      (t[7] = n.page_id),
      (t[8] = n.title),
      (t[9] = S))
    : (S = t[9]);
  let C;
  t[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((C = (0, Z.jsx)(r, {})), (t[10] = C)) : (C = t[10]);
  let w;
  t[11] !== c || t[12] !== l || t[13] !== d || t[14] !== S
    ? ((w = (0, Z.jsx)(_, {
        ...c,
        ...l,
        ref: d,
        className: `sr-only cursor-grab touch-none focus:not-sr-only active:cursor-grabbing`,
        color: `secondary`,
        size: `cardAction`,
        uniform: !0,
        "aria-label": S,
        children: C,
      })),
      (t[11] = c),
      (t[12] = l),
      (t[13] = d),
      (t[14] = S),
      (t[15] = w))
    : (w = t[15]);
  let E;
  t[16] !== i || t[17] !== w ? ((E = i(w)), (t[16] = i), (t[17] = w), (t[18] = E)) : (E = t[18]);
  let D;
  t[19] === g
    ? (D = t[20])
    : ((D =
        g == null
          ? null
          : (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(`div`, {
                  className: s(
                    `pointer-events-none absolute inset-x-0 @sm:hidden`,
                    g === `before` ? `-top-2` : `-bottom-2`,
                  ),
                  children: (0, Z.jsx)(R, { active: !0 }),
                }),
                (0, Z.jsx)(`div`, {
                  className: s(
                    `pointer-events-none absolute inset-y-0 hidden @sm:block`,
                    g === `before` ? `-start-2` : `-end-2`,
                  ),
                  children: (0, Z.jsx)(R, { active: !0, orientation: `vertical` }),
                }),
              ],
            })),
      (t[19] = g),
      (t[20] = D));
  let O;
  return (
    t[21] !== y || t[22] !== u || t[23] !== x || t[24] !== E || t[25] !== D
      ? ((O = (0, Z.jsxs)(`div`, {
          ref: u,
          className: x,
          onPointerDown: y,
          onTouchStart: y,
          onDragStartCapture: Kt,
          children: [E, D],
        })),
        (t[21] = y),
        (t[22] = u),
        (t[23] = x),
        (t[24] = E),
        (t[25] = D),
        (t[26] = O))
      : (O = t[26]),
    O
  );
}
function Kt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var qt, X, Z, Jt;
function Yt() {
  return (Yt = e(() => {
    ((qt = u()),
      I(),
      Ae(),
      c(),
      y(),
      (X = i()),
      g(),
      l(),
      O(),
      Xe(),
      v(),
      M(),
      p(),
      D(),
      Ie(),
      Ve(),
      B(),
      je(),
      n(),
      F(),
      (Z = o()),
      (Jt = class extends P {
        static activators = P.activators.map((e) => ({
          ...e,
          handler: (t, n) => t.nativeEvent.pointerType !== `touch` && e.handler(t, n),
        }));
      }));
  }))();
}
function Xt(e) {
  let n = (0, Zt.c)(10),
    { pins: r } = e,
    { pages: i, pending: a, failed: o } = r,
    s = t(f),
    c;
  n[0] !== i || n[1] !== a
    ? ((c =
        a && !i.length
          ? (0, Q.jsx)(`div`, {
              role: `status`,
              className: `text-secondary`,
              children: (0, Q.jsx)(E, {
                id: `space.home.loadingPinnedPages`,
                defaultMessage: `Loading pinned pages…`,
                description: `Status while fetching pinned Pages for the Suggested homepage`,
              }),
            })
          : null),
      (n[0] = i),
      (n[1] = a),
      (n[2] = c))
    : (c = n[2]);
  let l;
  n[3] !== o || n[4] !== a || n[5] !== s
    ? ((l = o.length
        ? (0, Q.jsxs)(`div`, {
            role: `status`,
            className: `flex items-center gap-3 text-secondary`,
            children: [
              (0, Q.jsx)(E, {
                id: `space.home.pinnedLoadFailed`,
                defaultMessage: `Some pinned pages could not be loaded`,
                description: `Warning when some pinned Pages could not be fetched`,
              }),
              (0, Q.jsx)(_, {
                color: `ghost`,
                disabled: a,
                onClick: () => {
                  tt(o, (e) => s.get(L, e).refetch(), { concurrency: 4 });
                },
                children: (0, Q.jsx)(E, {
                  id: `libraryNext.results.retry`,
                  defaultMessage: `Try again`,
                  description: `Retry fetching Library results`,
                }),
              }),
            ],
          })
        : null),
      (n[3] = o),
      (n[4] = a),
      (n[5] = s),
      (n[6] = l))
    : (l = n[6]);
  let u;
  return (
    n[7] !== c || n[8] !== l
      ? ((u = (0, Q.jsxs)(Q.Fragment, { children: [c, l] })), (n[7] = c), (n[8] = l), (n[9] = u))
      : (u = n[9]),
    u
  );
}
var Zt, Q;
function Qt() {
  return (Qt = e(() => {
    ((Zt = u()), y(), qe(), g(), v(), n(), Me(), (Q = o()));
  }))();
}
function $t(e) {
  let t = (0, en.c)(32),
    {
      pins: n,
      sites: r,
      sitePagination: i,
      showPages: a,
      renderContentItem: o,
      animate: s,
      isCurrent: c,
    } = e,
    l = a === void 0 || a,
    u = (0, tn.useId)(),
    d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, $.jsx)(E, {
        id: `space.home.pinnedHeading`,
        defaultMessage: `Pinned`,
        description: `Pinned Pages shown as previews on the Suggested homepage`,
      })),
      (t[0] = d))
    : (d = t[0]);
  let f;
  t[1] === u
    ? (f = t[2])
    : ((f = (0, $.jsx)(`h2`, { id: u, className: `sr-only`, children: d })), (t[1] = u), (t[2] = f));
  let p;
  t[3] !== n || t[4] !== l ? ((p = l ? n.pages : []), (t[3] = n), (t[4] = l), (t[5] = p)) : (p = t[5]);
  let m;
  if (t[6] !== n || t[7] !== o || t[8] !== l || t[9] !== r) {
    let e;
    t[11] === o
      ? (e = t[12])
      : ((e = (e) => ({
          id: e.page_id,
          content: (0, $.jsx)(Gt, { page: e, children: (t) => o({ page: e }, `grid`, void 0, t) }),
        })),
        (t[11] = o),
        (t[12] = e));
    let i;
    (t[13] === o
      ? (i = t[14])
      : ((i = (e) => ({ id: `site:${e.id}`, content: o({ siteProject: e }, `grid`) })),
        (t[13] = o),
        (t[14] = i)),
      (m = [...(l ? n.pages : []).map(e), ...(r ?? []).map(i)]),
      (t[6] = n),
      (t[7] = o),
      (t[8] = l),
      (t[9] = r),
      (t[10] = m));
  } else m = t[10];
  let h;
  t[15] !== s || t[16] !== m
    ? ((h = (0, $.jsx)(Le, { animate: s, items: m })), (t[15] = s), (t[16] = m), (t[17] = h))
    : (h = t[17]);
  let g;
  t[18] !== c || t[19] !== o || t[20] !== p || t[21] !== h
    ? ((g = (0, $.jsx)(Ut, { pages: p, renderContentItem: o, isCurrent: c, children: h })),
      (t[18] = c),
      (t[19] = o),
      (t[20] = p),
      (t[21] = h),
      (t[22] = g))
    : (g = t[22]);
  let _;
  t[23] !== n || t[24] !== l
    ? ((_ = l && (0, $.jsx)(Xt, { pins: n })), (t[23] = n), (t[24] = l), (t[25] = _))
    : (_ = t[25]);
  let v;
  return (
    t[26] !== u || t[27] !== i || t[28] !== f || t[29] !== g || t[30] !== _
      ? ((v = (0, $.jsxs)(`section`, {
          className: `flex flex-col gap-4`,
          "aria-labelledby": u,
          children: [f, g, _, i],
        })),
        (t[26] = u),
        (t[27] = i),
        (t[28] = f),
        (t[29] = g),
        (t[30] = _),
        (t[31] = v))
      : (v = t[31]),
    v
  );
}
var en, tn, $;
function nn() {
  return (nn = e(() => {
    ((en = u()), (tn = i()), g(), Ge(), Yt(), Qt(), ($ = o()));
  }))();
}
export { Ht as a, xt as c, zt as i, Ct as l, nn as n, Ot as o, Nt as r, Mt as s, $t as t };
//# sourceMappingURL=pinned-pages-ceb6bb4900b3.js.map
