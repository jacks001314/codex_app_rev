import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  AE as r,
  DB as i,
  DU as a,
  E$ as o,
  LNt as s,
  MNt as c,
  NNt as l,
  OB as u,
  PBt as d,
  RJ as f,
  SB as p,
  T$ as m,
  TE as h,
  TNt as g,
  TY as _,
  WK as v,
  XI as y,
  XOt as b,
  XS as x,
  Y3 as S,
  Z3 as C,
  ZI as w,
  ZSt as T,
  iCt as E,
  nCt as D,
  okt as O,
  tkt as k,
  wB as A,
  zJ as ee,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Alt as j,
  GVt as M,
  H7n as N,
  HOn as P,
  Ian as F,
  J7n as I,
  Jlr as te,
  K7n as ne,
  MOr as re,
  MSt as ie,
  Mir as ae,
  NSt as oe,
  Nir as se,
  Pan as ce,
  Ran as le,
  U7n as ue,
  UOn as de,
  X7n as fe,
  XVt as pe,
  Xlr as me,
  Ylr as he,
  Zdn as ge,
  Zlr as L,
  a9n as _e,
  bV as ve,
  cgn as ye,
  glr as be,
  gur as xe,
  hV as Se,
  hdn as R,
  klt as Ce,
  lpn as we,
  man as Te,
  mlr as Ee,
  njr as De,
  npt as Oe,
  pur as ke,
  q7n as Ae,
  r9n as je,
  rpt as Me,
  tjr as z,
  upn as Ne,
  vdn as B,
  zOr as Pe,
} from "./app-initial-ad16eaadf81f.js";
import { n as Fe, t as Ie } from "./floating-chat-surface-1eaefa25765a.js";
import { S as Le, d as Re, u as ze, x as Be } from "./state-cbddb42ae355.js";
import {
  a as Ve,
  c as He,
  d as Ue,
  f as We,
  g as Ge,
  h as Ke,
  l as V,
  o as qe,
  u as Je,
} from "./filename-menu-actions-39e6b8a922f7.js";
import {
  b as Ye,
  c as Xe,
  f as Ze,
  l as Qe,
  p as $e,
  r as et,
  s as H,
  t as tt,
  u as nt,
  v as U,
  x as rt,
  y as it,
} from "./title-menu-b54babdcf17c.js";
import { n as at, t as ot } from "./facepile-acf5586b71ad.js";
import { i as st, n as ct, r as lt, t as ut } from "./share-control-9fdbf30ec74a.js";
import { i as dt, n as ft, t as pt } from "./presentation-f202ffb8d1c1.js";
function mt(e) {
  let t = (0, W.c)(5),
    { pageId: n } = e,
    r = E(xe),
    s = D(B, n ?? null),
    c;
  t[0] !== r || t[1] !== n
    ? ((c = { accountId: r, pageId: n }), (t[0] = r), (t[1] = n), (t[2] = c))
    : (c = t[2]);
  let l = D(ve, c),
    u = E(pe);
  if (l || u != null) return null;
  let d;
  return (
    t[3] === s?.document_type
      ? (d = t[4])
      : ((d = (0, K.jsx)(`div`, {
          inert: !0,
          "aria-hidden": !0,
          children: (0, K.jsx)(je, {
            value: `expanded`,
            children: (0, K.jsx)(Ie, {
              isMinimized: !1,
              onMinimizedChange: G.default,
              presentation: `compact`,
              renderTranscript: ht,
              showHeader: !1,
              title: ``,
              children: () =>
                (0, K.jsx)(I, {
                  inert: !0,
                  layout: `single-line`,
                  children: (0, K.jsx)(I.Body, {
                    layout: `single-line`,
                    children: (0, K.jsx)(I.AdaptiveFooter, {
                      layout: `single-line`,
                      leadingControls: (0, K.jsx)(S, {
                        disabled: !0,
                        color: `ghost`,
                        size: `composer`,
                        children: (0, K.jsx)(v, {}),
                      }),
                      input: (0, K.jsx)(I.Input, {
                        layout: `single-line`,
                        children: (0, K.jsx)(ne, {
                          singleLine: !0,
                          children: (0, K.jsx)(`div`, {
                            className: `truncate text-secondary select-none`,
                            children: (0, K.jsx)(k, {
                              id: `codex.page.chat.placeholder.byDocumentType`,
                              values: { documentType: s?.document_type ?? `page` },
                              defaultMessage: `{documentType, select, granola_presentation {Work with this slide…} granola_workbook {Work with this sheet…} other {Work with this page…}}`,
                              description: `Placeholder in the floating Page chat composer. documentType selects slide, sheet, or page for the current document.`,
                            }),
                          }),
                        }),
                      }),
                      trailingControls: (0, K.jsxs)(I.FooterActions, {
                        children: [
                          (0, K.jsx)(S, {
                            disabled: !0,
                            color: `ghost`,
                            size: `composer`,
                            children: (0, K.jsx)(a, {}),
                          }),
                          (0, K.jsx)(S, {
                            disabled: !0,
                            color: `ghost`,
                            size: `composer`,
                            children: (0, K.jsx)(i, { asset: o }),
                          }),
                          (0, K.jsx)(S, {
                            disabled: !0,
                            color: `ghost`,
                            size: `composer`,
                            children: (0, K.jsx)(N, {}),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
            }),
          }),
        })),
        (t[3] = s?.document_type),
        (t[4] = d)),
    d
  );
}
function ht() {
  return null;
}
var W, G, K;
function q() {
  return (q = e(() => {
    ((W = d()),
      m(),
      (G = t(g(), 1)),
      T(),
      b(),
      Fe(),
      Ae(),
      fe(),
      ue(),
      C(),
      u(),
      _(),
      ke(),
      Se(),
      M(),
      R(),
      _e(),
      (K = s()));
  }))();
}
function J(e) {
  let t = (0, Y.c)(26),
    { pageId: n, spaceId: r, title: i, headerOverlay: a, showComposer: o } = e,
    s = a !== void 0 && a,
    l = o !== void 0 && o,
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = { enabled: !1 }), (t[0] = u)) : (u = t[0]);
  let { data: d } = E(ge, u),
    f;
  t[1] !== n || t[2] !== r || t[3] !== d?.items
    ? ((f = d?.items.find((e) => (n == null ? e.id === r : e.root_page_id === n))),
      (t[1] = n),
      (t[2] = r),
      (t[3] = d?.items),
      (t[4] = f))
    : (f = t[4]);
  let p = f,
    m = s && `viewer-header-scroll-mask pt-[var(--viewer-header-height)]`,
    h;
  t[5] === m
    ? (h = t[6])
    : ((h = c(`min-h-0 flex-1 scrollbar-stable overflow-y-auto`, m)), (t[5] = m), (t[6] = h));
  let g;
  t[7] !== n || t[8] !== p || t[9] !== i
    ? ((g = (0, X.jsx)(gt, { pageId: n, space: p, title: i })),
      (t[7] = n),
      (t[8] = p),
      (t[9] = i),
      (t[10] = g))
    : (g = t[10]);
  let _ = n ?? p?.root_page_id ?? r ?? ``,
    v;
  t[11] === _ ? (v = t[12]) : ((v = (0, X.jsx)(ft, { pageId: _ })), (t[11] = _), (t[12] = v));
  let y;
  t[13] !== g || t[14] !== v
    ? ((y = (0, X.jsx)(pt, { heading: g, children: v })), (t[13] = g), (t[14] = v), (t[15] = y))
    : (y = t[15]);
  let b;
  t[16] !== y || t[17] !== h
    ? ((b = (0, X.jsx)(`div`, { className: h, children: y })), (t[16] = y), (t[17] = h), (t[18] = b))
    : (b = t[18]);
  let x;
  t[19] !== n || t[20] !== l || t[21] !== p?.root_page_id
    ? ((x = l && (0, X.jsx)(mt, { pageId: n ?? p?.root_page_id })),
      (t[19] = n),
      (t[20] = l),
      (t[21] = p?.root_page_id),
      (t[22] = x))
    : (x = t[22]);
  let S;
  return (
    t[23] !== b || t[24] !== x
      ? ((S = (0, X.jsxs)(X.Fragment, { children: [b, x] })), (t[23] = b), (t[24] = x), (t[25] = S))
      : (S = t[25]),
    S
  );
}
function gt(e) {
  let t = (0, Y.c)(18),
    { pageId: n, space: r, title: i } = e,
    a = D(B, n ?? ``),
    o = D(Re, n ?? ``),
    s = r?.id,
    c;
  t[0] === s ? (c = t[1]) : ((c = { spaceId: s }), (t[0] = s), (t[1] = c));
  let l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = { enabled: !1 }), (t[2] = l)) : (l = t[2]);
  let u = D(le, c, l),
    d = r != null,
    f = a == null ? (r?.symbol ?? null) : (a.symbol ?? null);
  if (d && f == null) {
    let e;
    (t[3] === u ? (e = t[4]) : ((e = ce(u)), (t[3] = u), (t[4] = e)), (f = e));
  }
  let p = r == null ? (a?.title ?? i) : (i ?? r.name);
  if (!d && f == null && p != null) {
    let e;
    t[5] === p ? (e = t[6]) : ((e = ye(p)), (t[5] = p), (t[6] = e));
    let n = e;
    if (((p = n.title), n.emoji != null)) {
      let e;
      (t[7] === n.emoji
        ? (e = t[8])
        : ((e = { kind: `emoji`, value: n.emoji }), (t[7] = n.emoji), (t[8] = e)),
        (f = e));
    }
  }
  o && !d && f == null && (f = Le);
  let m = u?.theme,
    h;
  t[9] !== d || t[10] !== f || t[11] !== m
    ? ((h = (0, X.jsx)(Qe, {
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
          ? (0, X.jsx)(ie, { className: `h-10 w-64 max-w-full` })
          : (0, X.jsx)(Ze, { disabled: !0, readOnly: !0, value: p.replace(/[\r\n]+/g, ` `) })),
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
    ((Y = d()), l(), T(), oe(), ze(), Be(), F(), R(), Te(), q(), dt(), $e(), nt(), (X = s()));
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
    i = n(re),
    a = O(),
    o = E(be),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { name: `automations.cloud` }), (t[0] = s))
    : (s = t[0]);
  let c = D(o && !e.viewOnly ? z : null, s),
    l = D(B, e.pageId),
    u = l?.access.can_read === !0,
    d = l?.access.can_write === !0,
    m = l == null ? e.pagePreview?.title : l.title,
    g = l == null ? (e.documentType ?? e.pagePreview?.documentType) : L(l),
    _ = g == null || g === `page` ? tt : V,
    v = l != null && l.site_project_id == null && (g == null || g === `page` || g === `unsupported`),
    b = e.onRetry == null && u && v && g === `page`,
    x;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { name: `chatgpt.quick-chat` }), (t[1] = x))
    : (x = t[1]);
  let { isCapable: S } = D(z, x);
  if (e.viewOnly) {
    let n;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(P, { fillParent: !0 })), (t[2] = n))
        : (n = t[2]),
      (0, $.jsx)(
        U,
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
  let C;
  if (e.surface === `inline`) {
    let n = m ?? ``,
      r = l?.symbol,
      i = l?.document_type,
      a = e.onRetry == null ? e.pagePreview?.parent : void 0,
      o;
    t[5] !== e.explorer ||
    t[6] !== e.onOpenPage ||
    t[7] !== e.pageId ||
    t[8] !== e.space ||
    t[9] !== a ||
    t[10] !== m
      ? ((o = (0, $.jsx)(V, {
          loadAncestry: !1,
          explorer: e.explorer,
          pageId: e.pageId,
          title: m,
          initialParent: a,
          onOpenPage: e.onOpenPage,
          space: e.space,
        })),
        (t[5] = e.explorer),
        (t[6] = e.onOpenPage),
        (t[7] = e.pageId),
        (t[8] = e.space),
        (t[9] = a),
        (t[10] = m),
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
      ? ((c = (0, $.jsx)(Ke, {
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
      (C = c));
  } else if (
    (e.surface === `side-panel` || !Me(`/space/:pageId`)) &&
    (g === `granola_workbook` || g === `granola_presentation`)
  ) {
    let n;
    t[22] !== l || t[23] !== e.pageId
      ? ((n = l == null ? Ne(e.pageId) : l.access.can_write), (t[22] = l), (t[23] = e.pageId), (t[24] = n))
      : (n = t[24]);
    let a;
    t[25] !== e || t[26] !== i
      ? ((a = (t) => {
          e.surface === `side-panel` ? e.onOpenPage(t) : se(i, y(t));
        }),
        (t[25] = e),
        (t[26] = i),
        (t[27] = a))
      : (a = t[27]);
    let o = g === `granola_presentation` ? `presentation` : `spreadsheet`,
      s;
    t[28] === o
      ? (s = t[29])
      : ((s = {
          open: void 0,
          onOpenChange: void 0,
          onCloseAutoFocus: void 0,
          icon: (0, $.jsx)(r, { fileType: o }),
          actions: null,
        }),
        (t[28] = o),
        (t[29] = s));
    let c;
    t[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = {
          editingControls: null,
          annotationControl: null,
          commentsControl: null,
          zoomControl: null,
          navigationControl: null,
          supplementalActions: null,
        }),
        (t[30] = c))
      : (c = t[30]);
    let d;
    (t[31] !== u || t[32] !== e.onRetry
      ? ((d = e.onRetry == null && u ? (0, $.jsx)(ut, { disabled: !0 }) : void 0),
        (t[31] = u),
        (t[32] = e.onRetry),
        (t[33] = d))
      : (d = t[33]),
      (C = (0, $.jsx)(qe, {
        surface: e.surface,
        overlay: g === `granola_presentation`,
        separator: !1,
        children: (0, $.jsx)(lt, {
          contentFade: g === `granola_workbook`,
          kind: g === `granola_workbook` ? `spreadsheet` : `presentation`,
          canWrite: n,
          onClose: e.surface !== `side-panel` || u ? e.onClose : void 0,
          tabId: u ? e.panelTabId : void 0,
          title: m ?? ``,
          actions: (0, $.jsx)(V, {
            loadAncestry: !1,
            explorer: e.explorer,
            documentType: g,
            pageId: e.pageId,
            title: m,
            initialParent: e.onRetry == null ? e.pagePreview?.parent : void 0,
            onOpenPage: a,
            space: e.space,
            menu: s,
          }),
          controls: c,
          shareControl: d,
        }),
      })));
  } else {
    let n = e.surface,
      r = e.panelTabId,
      a = e.onClose,
      o;
    t[34] === l ? (o = t[35]) : ((o = l != null && L(l) !== `page`), (t[34] = l), (t[35] = o));
    let s = e.explorer,
      x;
    t[36] === l ? (x = t[37]) : ((x = me(l)), (t[36] = l), (t[37] = x));
    let S;
    t[38] !== e || t[39] !== i
      ? ((S = (t) => {
          e.surface === `side-panel` ? e.onOpenPage(t) : se(i, y(t));
        }),
        (t[38] = e),
        (t[39] = i),
        (t[40] = S))
      : (S = t[40]);
    let w;
    t[41] !== d || t[42] !== b
      ? ((w =
          b && d
            ? (0, $.jsxs)($.Fragment, {
                children: [
                  (0, $.jsx)(`span`, {
                    className: `inline-flex items-center gap-1`,
                    "data-viewer-header-collapsible": !0,
                    "aria-busy": `true`,
                    children: [`generate`, `image`, `visualize`].map(bt),
                  }),
                  (0, $.jsx)(H, { action: `insert`, disabled: !0 }),
                ],
              })
            : null),
        (t[41] = d),
        (t[42] = b),
        (t[43] = w))
      : (w = t[43]);
    let T;
    t[44] !== d || t[45] !== c?.isCapable || t[46] !== b
      ? ((T = b && d && c?.isCapable ? (0, $.jsx)(Ye, { disabled: !0, "aria-busy": !0 }) : null),
        (t[44] = d),
        (t[45] = c?.isCapable),
        (t[46] = b),
        (t[47] = T))
      : (T = t[47]);
    let E;
    t[48] === b
      ? (E = t[49])
      : ((E = b
          ? (0, $.jsx)(h, {
              disabled: !0,
              uniform: !0,
              "aria-hidden": !0,
              children: (0, $.jsx)(p, { icon: { 16: f, 20: ee } }),
            })
          : null),
        (t[48] = b),
        (t[49] = E));
    let D;
    t[50] !== u || t[51] !== l || t[52] !== e.onRetry
      ? ((D = e.onRetry == null && u && he(l) ? (0, $.jsx)(ot, { people: [], showPlaceholder: !0 }) : null),
        (t[50] = u),
        (t[51] = l),
        (t[52] = e.onRetry),
        (t[53] = D))
      : (D = t[53]);
    let O;
    (t[54] !== u || t[55] !== e.onRetry
      ? ((O = e.onRetry == null && u && (0, $.jsx)(Ce, { disabled: !0 })),
        (t[54] = u),
        (t[55] = e.onRetry),
        (t[56] = O))
      : (O = t[56]),
      (C = (0, $.jsx)(Ve, {
        contentFade: v,
        surface: n,
        tabId: r,
        onClose: a,
        separator: o,
        navigation: (0, $.jsx)(_, {
          loadAncestry: !1,
          explorer: s,
          isLeaf: x,
          documentType: g,
          onOpenPage: S,
          initialParent: e.onRetry == null ? e.pagePreview?.parent : void 0,
          pageId: e.pageId,
          space: e.space,
          title: m,
        }),
        actions: w,
        automations: T,
        comments: E,
        supplementalActions: null,
        people: D,
        sharing: O,
      })));
  }
  let w = U,
    T = e.onRetry != null,
    k = e.onRetry ?? e.retryLoading,
    A = Ue,
    j =
      e.onRetry == null &&
      !v &&
      (0, $.jsx)(`div`, {
        className: `relative min-h-0 flex-1`,
        role: `status`,
        "aria-label": a.formatMessage(
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
          children: (0, $.jsx)(P, { fillParent: !0 }),
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
  t[64] !== m
    ? ((M =
        e.onRetry == null &&
        v &&
        (0, $.jsx)(J, {
          headerOverlay: e.surface !== `inline`,
          pageId: e.pageId,
          title: m,
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
      (t[64] = m),
      (t[65] = M))
    : (M = t[65]);
  let N;
  t[66] !== A || t[67] !== e.explorer || t[68] !== j || t[69] !== M
    ? ((N = (0, $.jsxs)(A, { explorer: e.explorer, children: [j, M] })),
      (t[66] = A),
      (t[67] = e.explorer),
      (t[68] = j),
      (t[69] = M),
      (t[70] = N))
    : (N = t[70]);
  let F;
  t[71] !== C || t[72] !== N
    ? ((F = (0, $.jsxs)(`section`, {
        className: `relative flex h-full min-h-0 flex-col overflow-hidden`,
        children: [C, N],
      })),
      (t[71] = C),
      (t[72] = N),
      (t[73] = F))
    : (F = t[73]);
  let I;
  return (
    t[74] !== w ||
    t[75] !== g ||
    t[76] !== e.experience ||
    t[77] !== e.pageId ||
    t[78] !== T ||
    t[79] !== k ||
    t[80] !== F
      ? ((I = (0, $.jsx)(
          w,
          { documentType: g, pageId: e.pageId, failed: T, onRetry: k, experience: e.experience, children: F },
          e.pageId,
        )),
        (t[74] = w),
        (t[75] = g),
        (t[76] = e.experience),
        (t[77] = e.pageId),
        (t[78] = T),
        (t[79] = k),
        (t[80] = F),
        (t[81] = I))
      : (I = t[81]),
    I
  );
}
function bt(e) {
  return (0, $.jsx)(H, { action: e, disabled: !0 }, e);
}
var Q, $;
function xt() {
  return (xt = e(() => {
    ((Q = d()),
      T(),
      w(),
      b(),
      De(),
      ae(),
      _(),
      A(),
      de(),
      rt(),
      we(),
      We(),
      Ee(),
      Oe(),
      at(),
      R(),
      Pe(),
      x(),
      j(),
      Ge(),
      st(),
      ct(),
      it(),
      te(),
      Z(),
      Je(),
      He(),
      Xe(),
      et(),
      ($ = s()));
  }))();
}
export { Z as a, gt as i, xt as n, J as r, vt as t };
//# sourceMappingURL=pending-ab5af760fea1.js.map
