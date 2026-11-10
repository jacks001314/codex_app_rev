import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  AH as r,
  CQ as i,
  CS as a,
  Dz as o,
  IDt as s,
  Ixt as c,
  Mz as l,
  Nz as u,
  Pxt as d,
  Rq as f,
  TJ as p,
  VDt as m,
  Vxt as h,
  _Mt as g,
  cI as _,
  gMt as v,
  jDt as y,
  kz as b,
  lE as x,
  lMt as S,
  nE as C,
  qG as w,
  sI as T,
  t3 as E,
  vzt as D,
  wQ as O,
  xMt as k,
  zq as ee,
  zxt as A,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as j,
  Dor as M,
  Ear as N,
  FEr as P,
  Jdt as te,
  Oar as ne,
  PEr as re,
  S6n as F,
  Tct as ie,
  _nn as ae,
  a6n as oe,
  aor as se,
  b6n as ce,
  bTn as le,
  cor as I,
  d6n as L,
  gwr as ue,
  hln as de,
  hnn as fe,
  kB as pe,
  l6n as me,
  lIr as he,
  mln as ge,
  nEt as _e,
  o6n as ve,
  oor as ye,
  oqt as be,
  p6n as xe,
  pnn as Se,
  qdt as Ce,
  qpn as we,
  qtn as Te,
  rcn as Ee,
  sor as De,
  tEt as Oe,
  tqt as ke,
  u6n as Ae,
  uIr as R,
  wB as je,
  wct as Me,
  wor as Ne,
  wsn as z,
  xsn as B,
  yTn as V,
} from "./app-initial-5851df3f6cb1.js";
import { n as Pe, t as Fe } from "./quick-chat-floating-surface-51ff4a9417a5.js";
import { S as Ie, d as Le, u as Re, x as ze } from "./state-dc42f06f4898.js";
import {
  a as Be,
  c as Ve,
  d as He,
  f as Ue,
  g as We,
  h as Ge,
  l as H,
  o as Ke,
  u as qe,
} from "./filename-menu-actions-c1dd81b47dd6.js";
import {
  b as Je,
  c as Ye,
  f as Xe,
  l as Ze,
  p as Qe,
  r as $e,
  s as U,
  t as et,
  u as tt,
  v as W,
  x as nt,
  y as rt,
} from "./title-menu-e11b34d28710.js";
import { n as it, t as at } from "./facepile-4ea3da6a7b88.js";
import { i as ot, n as st, r as ct, t as lt } from "./share-control-34a4e6ed1550.js";
import { i as ut, n as dt, t as ft } from "./presentation-a8c851b59c58.js";
function pt(e) {
  let t = (0, G.c)(5),
    { pageId: i } = e,
    a = h(M),
    o = A(z, i ?? null),
    c;
  t[0] !== a || t[1] !== i
    ? ((c = { accountId: a, pageId: i }), (t[0] = a), (t[1] = i), (t[2] = c))
    : (c = t[2]);
  let u = A(pe, c),
    d = h(be);
  if (u || d != null) return null;
  let f;
  return (
    t[3] === o?.document_type
      ? (f = t[4])
      : ((f = (0, q.jsx)(`div`, {
          inert: !0,
          "aria-hidden": !0,
          children: (0, q.jsx)(ce, {
            value: `expanded`,
            children: (0, q.jsx)(Fe, {
              isMinimized: !1,
              onMinimizedChange: K.default,
              presentation: `compact`,
              renderTranscript: mt,
              showHeader: !1,
              title: ``,
              children: () =>
                (0, q.jsx)(L, {
                  inert: !0,
                  layout: `single-line`,
                  children: (0, q.jsx)(L.Body, {
                    layout: `single-line`,
                    children: (0, q.jsx)(L.AdaptiveFooter, {
                      layout: `single-line`,
                      leadingControls: (0, q.jsx)(n, {
                        disabled: !0,
                        color: `ghost`,
                        size: `composer`,
                        children: (0, q.jsx)(w, {}),
                      }),
                      input: (0, q.jsx)(L.Input, {
                        layout: `single-line`,
                        children: (0, q.jsx)(me, {
                          singleLine: !0,
                          children: (0, q.jsx)(`div`, {
                            className: `truncate text-secondary select-none`,
                            children: (0, q.jsx)(s, {
                              id: `codex.page.chat.placeholder.byDocumentType`,
                              values: { documentType: o?.document_type ?? `page` },
                              defaultMessage: `{documentType, select, granola_presentation {Work with this slide…} granola_workbook {Work with this sheet…} other {Work with this page…}}`,
                              description: `Placeholder in the floating Page chat composer. documentType selects slide, sheet, or page for the current document.`,
                            }),
                          }),
                        }),
                      }),
                      trailingControls: (0, q.jsxs)(L.FooterActions, {
                        children: [
                          (0, q.jsx)(n, {
                            disabled: !0,
                            color: `ghost`,
                            size: `composer`,
                            children: (0, q.jsx)(r, {}),
                          }),
                          (0, q.jsx)(n, {
                            disabled: !0,
                            color: `ghost`,
                            size: `composer`,
                            children: (0, q.jsx)(l, { asset: O }),
                          }),
                          (0, q.jsx)(n, {
                            disabled: !0,
                            color: `ghost`,
                            size: `composer`,
                            children: (0, q.jsx)(oe, {}),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
            }),
          }),
        })),
        (t[3] = o?.document_type),
        (t[4] = f)),
    f
  );
}
function mt() {
  return null;
}
var G, K, q;
function J() {
  return (J = e(() => {
    ((G = D()),
      i(),
      (K = t(S(), 1)),
      d(),
      y(),
      Ae(),
      xe(),
      ve(),
      E(),
      u(),
      p(),
      Ne(),
      je(),
      ke(),
      B(),
      Pe(),
      F(),
      (q = k()));
  }))();
}
function ht(e) {
  let t = (0, Y.c)(26),
    { pageId: n, spaceId: r, title: i, headerOverlay: a, showComposer: o } = e,
    s = a !== void 0 && a,
    c = o !== void 0 && o,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = { enabled: !1 }), (t[0] = l)) : (l = t[0]);
  let { data: u } = h(Ee, l),
    d;
  t[1] !== n || t[2] !== r || t[3] !== u?.items
    ? ((d = u?.items.find((e) => (n == null ? e.id === r : e.root_page_id === n))),
      (t[1] = n),
      (t[2] = r),
      (t[3] = u?.items),
      (t[4] = d))
    : (d = t[4]);
  let f = d,
    p = s && `viewer-header-scroll-mask pt-[var(--viewer-header-height)]`,
    m;
  t[5] === p
    ? (m = t[6])
    : ((m = v(`min-h-0 flex-1 scrollbar-stable overflow-y-auto`, p)), (t[5] = p), (t[6] = m));
  let g;
  t[7] !== n || t[8] !== f || t[9] !== i
    ? ((g = (0, X.jsx)(gt, { pageId: n, space: f, title: i })),
      (t[7] = n),
      (t[8] = f),
      (t[9] = i),
      (t[10] = g))
    : (g = t[10]);
  let _ = n ?? f?.root_page_id ?? r ?? ``,
    y;
  t[11] === _ ? (y = t[12]) : ((y = (0, X.jsx)(dt, { pageId: _ })), (t[11] = _), (t[12] = y));
  let b;
  t[13] !== g || t[14] !== y
    ? ((b = (0, X.jsx)(ft, { heading: g, children: y })), (t[13] = g), (t[14] = y), (t[15] = b))
    : (b = t[15]);
  let x;
  t[16] !== b || t[17] !== m
    ? ((x = (0, X.jsx)(`div`, { className: m, children: b })), (t[16] = b), (t[17] = m), (t[18] = x))
    : (x = t[18]);
  let S;
  t[19] !== n || t[20] !== c || t[21] !== f?.root_page_id
    ? ((S = c && (0, X.jsx)(pt, { pageId: n ?? f?.root_page_id })),
      (t[19] = n),
      (t[20] = c),
      (t[21] = f?.root_page_id),
      (t[22] = S))
    : (S = t[22]);
  let C;
  return (
    t[23] !== x || t[24] !== S
      ? ((C = (0, X.jsxs)(X.Fragment, { children: [x, S] })), (t[23] = x), (t[24] = S), (t[25] = C))
      : (C = t[25]),
    C
  );
}
function gt(e) {
  let t = (0, Y.c)(18),
    { pageId: n, space: r, title: i } = e,
    a = A(z, n ?? ``),
    o = A(Le, n ?? ``),
    s = r?.id,
    c;
  t[0] === s ? (c = t[1]) : ((c = { spaceId: s }), (t[0] = s), (t[1] = c));
  let l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = { enabled: !1 }), (t[2] = l)) : (l = t[2]);
  let u = A(ae, c, l),
    d = r != null,
    f = a == null ? (r?.symbol ?? null) : (a.symbol ?? null);
  if (d && f == null) {
    let e;
    (t[3] === u ? (e = t[4]) : ((e = Se(u)), (t[3] = u), (t[4] = e)), (f = e));
  }
  let p = r == null ? (a?.title ?? i) : (i ?? r.name);
  if (!d && f == null && p != null) {
    let e;
    t[5] === p ? (e = t[6]) : ((e = we(p)), (t[5] = p), (t[6] = e));
    let n = e;
    if (((p = n.title), n.emoji != null)) {
      let e;
      (t[7] === n.emoji
        ? (e = t[8])
        : ((e = { kind: `emoji`, value: n.emoji }), (t[7] = n.emoji), (t[8] = e)),
        (f = e));
    }
  }
  o && !d && f == null && (f = Ie);
  let m = u?.theme,
    h;
  t[9] !== d || t[10] !== f || t[11] !== m
    ? ((h = (0, X.jsx)(Ze, {
        disabled: !0,
        legacyEmoji: null,
        symbol: f,
        space: d,
        spaceTheme: m,
        onChange: _t,
      })),
      (t[9] = d),
      (t[10] = f),
      (t[11] = m),
      (t[12] = h))
    : (h = t[12]);
  let g;
  t[13] === p
    ? (g = t[14])
    : ((g =
        p == null
          ? (0, X.jsx)(Oe, { className: `h-10 w-64 max-w-full` })
          : (0, X.jsx)(Xe, { disabled: !0, readOnly: !0, value: p.replace(/[\r\n]+/g, ` `) })),
      (t[13] = p),
      (t[14] = g));
  let _;
  return (
    t[15] !== h || t[16] !== g
      ? ((_ = (0, X.jsxs)(`div`, {
          className: `group/page-title relative flex flex-col gap-6`,
          children: [h, g],
        })),
        (t[15] = h),
        (t[16] = g),
        (t[17] = _))
      : (_ = t[17]),
    _
  );
}
function _t() {}
var Y, X;
function Z() {
  return (Z = e(() => {
    ((Y = D()), g(), d(), _e(), Re(), ze(), fe(), B(), Te(), J(), ut(), Qe(), tt(), (X = k()));
  }))();
}
function vt(e) {
  let t = (0, Q.c)(3),
    n = e.host?.Pending,
    r;
  return (
    t[0] !== n || t[1] !== e
      ? ((r =
          n == null || e.host == null
            ? (0, $.jsx)(yt, { ...e })
            : (0, $.jsx)(n, { host: e.host, pageId: e.pageId, onRetry: e.onRetry })),
        (t[0] = n),
        (t[1] = e),
        (t[2] = r))
      : (r = t[2]),
    r
  );
}
function yt(e) {
  let t = (0, Q.c)(82),
    n = c(ue),
    r = m(),
    i = h(ne),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = { name: `automations.cloud` }), (t[0] = a))
    : (a = t[0]);
  let s = A(i && !e.viewOnly ? re : null, a),
    l = A(z, e.pageId),
    u = l?.access.can_read === !0,
    d = l?.access.can_write === !0,
    p = l == null ? e.pagePreview?.title : l.title,
    g = l == null ? (e.documentType ?? e.pagePreview?.documentType) : I(l),
    _ = g == null || g === `page` ? et : H,
    v = l != null && l.site_project_id == null && (g == null || g === `page` || g === `unsupported`),
    y = e.onRetry == null && u && v && g === `page`,
    b;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = { name: `chatgpt.quick-chat` }), (t[1] = b))
    : (b = t[1]);
  let { isCapable: S } = A(re, b);
  if (e.viewOnly) {
    let n;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(V, { fillParent: !0 })), (t[2] = n))
        : (n = t[2]),
      (0, $.jsx)(
        W,
        {
          documentType: g,
          pageId: e.pageId,
          failed: e.onRetry != null,
          onRetry: e.onRetry ?? e.retryLoading,
          experience: e.experience,
          children: n,
        },
        e.pageId,
      )
    );
  }
  if (e.loadingFallback != null && e.onRetry == null) {
    let n;
    return (
      t[3] === e.loadingFallback
        ? (n = t[4])
        : ((n = (0, $.jsx)($.Fragment, { children: e.loadingFallback })),
          (t[3] = e.loadingFallback),
          (t[4] = n)),
      n
    );
  }
  let w;
  if (e.surface === `inline`) {
    let n = p ?? ``,
      r = l?.symbol,
      i = l?.document_type,
      a = e.onRetry == null ? e.pagePreview?.parent : void 0,
      o;
    t[5] !== e.explorer ||
    t[6] !== e.onOpenPage ||
    t[7] !== e.pageId ||
    t[8] !== e.space ||
    t[9] !== a ||
    t[10] !== p
      ? ((o = (0, $.jsx)(H, {
          loadAncestry: !1,
          explorer: e.explorer,
          pageId: e.pageId,
          title: p,
          initialParent: a,
          onOpenPage: e.onOpenPage,
          space: e.space,
        })),
        (t[5] = e.explorer),
        (t[6] = e.onOpenPage),
        (t[7] = e.pageId),
        (t[8] = e.space),
        (t[9] = a),
        (t[10] = p),
        (t[11] = o))
      : (o = t[11]);
    let s;
    t[12] === e ? (s = t[13]) : ((s = () => e.onOpenPage(e.pageId)), (t[12] = e), (t[13] = s));
    let c;
    (t[14] !== e.onSelectInlineTitle ||
    t[15] !== e.pageId ||
    t[16] !== n ||
    t[17] !== r ||
    t[18] !== i ||
    t[19] !== o ||
    t[20] !== s
      ? ((c = (0, $.jsx)(Ge, {
          pageId: e.pageId,
          onSelect: e.onSelectInlineTitle,
          title: n,
          symbol: r,
          documentType: i,
          navigation: o,
          people: null,
          overflow: null,
          onExpand: s,
        })),
        (t[14] = e.onSelectInlineTitle),
        (t[15] = e.pageId),
        (t[16] = n),
        (t[17] = r),
        (t[18] = i),
        (t[19] = o),
        (t[20] = s),
        (t[21] = c))
      : (c = t[21]),
      (w = c));
  } else if (
    (e.surface === `side-panel` || !te(`/space/:pageId`)) &&
    (g === `granola_workbook` || g === `granola_presentation`)
  ) {
    let r;
    t[22] !== l || t[23] !== e.pageId
      ? ((r = l == null ? de(e.pageId) : l.access.can_write), (t[22] = l), (t[23] = e.pageId), (t[24] = r))
      : (r = t[24]);
    let i;
    t[25] !== e || t[26] !== n
      ? ((i = (t) => {
          e.surface === `side-panel` ? e.onOpenPage(t) : R(n, T(t));
        }),
        (t[25] = e),
        (t[26] = n),
        (t[27] = i))
      : (i = t[27]);
    let a = g === `granola_presentation` ? `presentation` : `spreadsheet`,
      o;
    t[28] === a
      ? (o = t[29])
      : ((o = {
          open: void 0,
          onOpenChange: void 0,
          onCloseAutoFocus: void 0,
          icon: (0, $.jsx)(x, { fileType: a }),
          actions: null,
        }),
        (t[28] = a),
        (t[29] = o));
    let s;
    t[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = {
          editingControls: null,
          annotationControl: null,
          commentsControl: null,
          zoomControl: null,
          navigationControl: null,
          supplementalActions: null,
        }),
        (t[30] = s))
      : (s = t[30]);
    let c;
    (t[31] !== u || t[32] !== e.onRetry
      ? ((c = e.onRetry == null && u ? (0, $.jsx)(lt, { disabled: !0 }) : void 0),
        (t[31] = u),
        (t[32] = e.onRetry),
        (t[33] = c))
      : (c = t[33]),
      (w = (0, $.jsx)(Ke, {
        surface: e.surface,
        overlay: g === `granola_presentation`,
        separator: !1,
        children: (0, $.jsx)(ct, {
          contentFade: g === `granola_workbook`,
          kind: g === `granola_workbook` ? `spreadsheet` : `presentation`,
          canWrite: r,
          onClose: e.surface !== `side-panel` || u ? e.onClose : void 0,
          tabId: u ? e.panelTabId : void 0,
          title: p ?? ``,
          actions: (0, $.jsx)(H, {
            loadAncestry: !1,
            explorer: e.explorer,
            documentType: g,
            pageId: e.pageId,
            title: p,
            initialParent: e.onRetry == null ? e.pagePreview?.parent : void 0,
            onOpenPage: i,
            space: e.space,
            menu: o,
          }),
          controls: s,
          shareControl: c,
        }),
      })));
  } else {
    let r = e.surface,
      i = e.panelTabId,
      a = e.onClose,
      c;
    t[34] === l ? (c = t[35]) : ((c = l != null && I(l) !== `page`), (t[34] = l), (t[35] = c));
    let m = e.explorer,
      h;
    t[36] === l ? (h = t[37]) : ((h = De(l)), (t[36] = l), (t[37] = h));
    let b;
    t[38] !== e || t[39] !== n
      ? ((b = (t) => {
          e.surface === `side-panel` ? e.onOpenPage(t) : R(n, T(t));
        }),
        (t[38] = e),
        (t[39] = n),
        (t[40] = b))
      : (b = t[40]);
    let x;
    t[41] !== d || t[42] !== y
      ? ((x =
          y && d
            ? (0, $.jsxs)($.Fragment, {
                children: [
                  (0, $.jsx)(`span`, {
                    className: `inline-flex items-center gap-1`,
                    "data-viewer-header-collapsible": !0,
                    "aria-busy": `true`,
                    children: [`generate`, `image`, `visualize`].map(bt),
                  }),
                  (0, $.jsx)(U, { action: `insert`, disabled: !0 }),
                ],
              })
            : null),
        (t[41] = d),
        (t[42] = y),
        (t[43] = x))
      : (x = t[43]);
    let S;
    t[44] !== d || t[45] !== s?.isCapable || t[46] !== y
      ? ((S = y && d && s?.isCapable ? (0, $.jsx)(Je, { disabled: !0, "aria-busy": !0 }) : null),
        (t[44] = d),
        (t[45] = s?.isCapable),
        (t[46] = y),
        (t[47] = S))
      : (S = t[47]);
    let E;
    t[48] === y
      ? (E = t[49])
      : ((E = y
          ? (0, $.jsx)(C, {
              disabled: !0,
              uniform: !0,
              "aria-hidden": !0,
              children: (0, $.jsx)(o, { icon: { 16: f, 20: ee } }),
            })
          : null),
        (t[48] = y),
        (t[49] = E));
    let D;
    t[50] !== u || t[51] !== l || t[52] !== e.onRetry
      ? ((D = e.onRetry == null && u && ye(l) ? (0, $.jsx)(at, { people: [], showPlaceholder: !0 }) : null),
        (t[50] = u),
        (t[51] = l),
        (t[52] = e.onRetry),
        (t[53] = D))
      : (D = t[53]);
    let O;
    (t[54] !== u || t[55] !== e.onRetry
      ? ((O = e.onRetry == null && u && (0, $.jsx)(Me, { disabled: !0 })),
        (t[54] = u),
        (t[55] = e.onRetry),
        (t[56] = O))
      : (O = t[56]),
      (w = (0, $.jsx)(Be, {
        contentFade: v,
        surface: r,
        tabId: i,
        onClose: a,
        separator: c,
        navigation: (0, $.jsx)(_, {
          loadAncestry: !1,
          explorer: m,
          isLeaf: h,
          documentType: g,
          onOpenPage: b,
          initialParent: e.onRetry == null ? e.pagePreview?.parent : void 0,
          pageId: e.pageId,
          space: e.space,
          title: p,
        }),
        actions: x,
        automations: S,
        comments: E,
        supplementalActions: null,
        people: D,
        sharing: O,
      })));
  }
  let E = W,
    D = e.onRetry != null,
    O = e.onRetry ?? e.retryLoading,
    k = He,
    j =
      e.onRetry == null &&
      !v &&
      (0, $.jsx)(`div`, {
        className: `relative min-h-0 flex-1`,
        role: `status`,
        "aria-label": r.formatMessage(
          {
            id: `codex.space.page.surfaceLoading.byDocumentType`,
            defaultMessage: `{documentType, select, granola_presentation {Loading slide} granola_workbook {Loading sheet} other {Loading page}}`,
            description: `Accessible status while the selected Page type or its content is loading. documentType selects slide, sheet, or page for the current document.`,
          },
          { documentType: g ?? `page` },
        ),
        children: (0, $.jsx)(`div`, {
          className:
            e.surface === `side-panel` && g === `granola_presentation`
              ? `absolute inset-x-0 top-[var(--viewer-header-height)] bottom-0`
              : `absolute inset-0`,
          children: (0, $.jsx)(V, { fillParent: !0 }),
        }),
      }),
    M;
  t[57] !== u ||
  t[58] !== v ||
  t[59] !== e.onRetry ||
  t[60] !== e.pageId ||
  t[61] !== e.space?.id ||
  t[62] !== e.surface ||
  t[63] !== S ||
  t[64] !== p
    ? ((M =
        e.onRetry == null &&
        v &&
        (0, $.jsx)(ht, {
          headerOverlay: e.surface !== `inline`,
          pageId: e.pageId,
          title: p,
          spaceId: e.space?.id,
          showComposer: u && (e.surface == null || e.surface === `route`) && S,
        })),
      (t[57] = u),
      (t[58] = v),
      (t[59] = e.onRetry),
      (t[60] = e.pageId),
      (t[61] = e.space?.id),
      (t[62] = e.surface),
      (t[63] = S),
      (t[64] = p),
      (t[65] = M))
    : (M = t[65]);
  let N;
  t[66] !== k || t[67] !== e.explorer || t[68] !== j || t[69] !== M
    ? ((N = (0, $.jsxs)(k, { explorer: e.explorer, children: [j, M] })),
      (t[66] = k),
      (t[67] = e.explorer),
      (t[68] = j),
      (t[69] = M),
      (t[70] = N))
    : (N = t[70]);
  let P;
  t[71] !== w || t[72] !== N
    ? ((P = (0, $.jsxs)(`section`, {
        className: `relative flex h-full min-h-0 flex-col overflow-hidden`,
        children: [w, N],
      })),
      (t[71] = w),
      (t[72] = N),
      (t[73] = P))
    : (P = t[73]);
  let F;
  return (
    t[74] !== E ||
    t[75] !== g ||
    t[76] !== e.experience ||
    t[77] !== e.pageId ||
    t[78] !== D ||
    t[79] !== O ||
    t[80] !== P
      ? ((F = (0, $.jsx)(
          E,
          { documentType: g, pageId: e.pageId, failed: D, onRetry: O, experience: e.experience, children: P },
          e.pageId,
        )),
        (t[74] = E),
        (t[75] = g),
        (t[76] = e.experience),
        (t[77] = e.pageId),
        (t[78] = D),
        (t[79] = O),
        (t[80] = P),
        (t[81] = F))
      : (F = t[81]),
    F
  );
}
function bt(e) {
  return (0, $.jsx)(U, { action: e, disabled: !0 }, e);
}
var Q, $;
function xt() {
  return (xt = e(() => {
    ((Q = D()),
      d(),
      _(),
      y(),
      P(),
      he(),
      p(),
      b(),
      le(),
      nt(),
      ge(),
      Ue(),
      N(),
      Ce(),
      it(),
      B(),
      j(),
      a(),
      ie(),
      We(),
      ot(),
      st(),
      rt(),
      se(),
      Z(),
      qe(),
      Ve(),
      Ye(),
      $e(),
      ($ = k()));
  }))();
}
export { Z as a, gt as i, xt as n, ht as r, vt as t };
//# sourceMappingURL=pending-4692967c2dbe.js.map
