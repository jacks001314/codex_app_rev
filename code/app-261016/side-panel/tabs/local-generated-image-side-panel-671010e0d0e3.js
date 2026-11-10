import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $O as t,
  $St as n,
  $X as r,
  $st as i,
  C2 as a,
  CC as o,
  DB as s,
  DC as c,
  DS as l,
  ES as u,
  FBt as d,
  FE as f,
  FNt as p,
  FTt as m,
  ITt as h,
  IU as g,
  Iw as _,
  Jj as v,
  LNt as y,
  Lst as b,
  Lw as x,
  MNt as S,
  NNt as C,
  OB as w,
  OC as T,
  PBt as E,
  Qst as D,
  Rst as O,
  TC as k,
  TY as A,
  Uz as j,
  Vrt as M,
  WOt as N,
  Wz as ee,
  XOt as P,
  XS as F,
  Y3 as te,
  YOt as I,
  Yj as ne,
  Z3 as re,
  ZSt as L,
  bB as ie,
  dO as ae,
  eZ as R,
  ek as oe,
  gB as se,
  hB as ce,
  iCt as le,
  lO as z,
  lZ as ue,
  nCt as de,
  okt as fe,
  qrt as pe,
  tkt as B,
  uZ as me,
  vB as he,
  w2 as ge,
  yB as _e,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $9n as ve,
  $K as ye,
  $p as be,
  ALr as xe,
  Bp as Se,
  CDr as Ce,
  Crn as we,
  D2n as Te,
  D7n as Ee,
  Di as De,
  EM as Oe,
  EVr as ke,
  Eer as Ae,
  Ei as je,
  FDr as Me,
  Ii as Ne,
  KBr as Pe,
  Kp as Fe,
  MOr as Ie,
  Mi as Le,
  Npr as Re,
  O2n as V,
  Oi as ze,
  Ou as Be,
  Pi as Ve,
  QK as He,
  Qd as H,
  Qp as U,
  TM as W,
  TVr as G,
  Ter as K,
  Ti as Ue,
  Ujn as q,
  VPn as J,
  Yp as We,
  Zd as Ge,
  Zp as Ke,
  _0n as qe,
  _Cn as Je,
  _p as Y,
  _rn as Ye,
  adr as Xe,
  aon as Ze,
  drn as Qe,
  eOr as $e,
  eer as et,
  em as tt,
  eon as nt,
  gCn as rt,
  gp as X,
  iit as it,
  ion as at,
  it as ot,
  j7n as st,
  ji as ct,
  jpr as lt,
  kLr as ut,
  kM as dt,
  ki as ft,
  ku as pt,
  lt as mt,
  nOr as ht,
  nm as gt,
  odr as _t,
  ot as vt,
  p0n as yt,
  qjn as bt,
  qp as xt,
  rit as St,
  rm as Ct,
  ron as wt,
  st as Tt,
  tin as Et,
  tm as Dt,
  vrn as Ot,
  vs as kt,
  xMr as At,
  xs as jt,
  yMr as Mt,
  zOr as Nt,
} from "./app-initial-ad16eaadf81f.js";
import { fm as Pt, um as Ft } from "./app-primary-3e00728c2a4c.js";
import { n as It, t as Lt } from "./image-loading-state-b022a48d1f73.js";
import { n as Rt, t as zt } from "./generated-image-placeholder-1b8c60c62b01.js";
import { n as Bt, t as Vt } from "./generated-image-source-99de49df778d.js";
import { n as Ht, t as Ut } from "./generated-image-context-menu-f31af82c03a2.js";
import { r as Wt, t as Gt } from "./image-data-396f3850bc09.js";
import { n as Kt, t as qt } from "./image-edit-toolbar-b4c63cc4a779.js";
import { n as Jt, t as Yt } from "./deleted-image-placeholder-c375839fe1bf.js";
import {
  a as Xt,
  c as Zt,
  d as Qt,
  f as $t,
  g as en,
  h as tn,
  i as nn,
  l as rn,
  m as an,
  n as on,
  o as sn,
  p as cn,
  r as ln,
  s as un,
  t as dn,
  u as fn,
} from "./image-side-panel-c3dea2552162.js";
async function pn(
  e,
  { hostId: t, image: n, imageAssetResolver: r, onFailure: i, queryClient: a, updateComments: o },
) {
  let s = De(n.id);
  (o(mn(e, s)).length > 0 &&
    !(await ct(e, {
      displaySrc: n.previewSrc,
      hostId: t,
      image: n,
      imageAssetResolver: r,
      onFailure: i,
      queryClient: a,
    }))) ||
    pt(
      {
        composerScope: e,
        absoluteImageFilePath: lt(n.src),
        attachmentId: s,
        attachmentSrc: n.src,
        downloadFileName: ze(n),
        downloadSrc: n.src,
        hostId: t,
        isCloudComposer: e.get(we) === `cloud`,
        queryClient: a,
        src: n.previewSrc,
      },
      o(mn(e, s)),
    );
}
function mn(e, t) {
  return e.get(Ot).find((e) => e.attachmentId === t)?.comments ?? [];
}
function hn() {
  return (hn = e(() => {
    (Et(), Re(), ft(), Be());
  }))();
}
function gn(e) {
  let r = (0, vn.c)(33),
    {
      active: i,
      comments: a,
      conversationId: o,
      image: s,
      imageAssetResolver: c,
      imageRef: l,
      isDraftActive: d,
      isViewTransitioning: f,
      selected: p,
      tool: m,
      onActivate: h,
      onAddToChat: g,
      onDeleteComment: _,
      onDraftActiveChange: v,
      onImageLoad: y,
      onSubmitComment: b,
    } = e,
    x = n(Ce),
    C = fe(),
    w;
  r[0] !== o || r[1] !== s.previewSrc || r[2] !== c
    ? ((w = { src: s.previewSrc, conversationId: o, imageAssetResolver: c, shouldLoadFileDataUrl: !1 }),
      (r[0] = o),
      (r[1] = s.previewSrc),
      (r[2] = c),
      (r[3] = w))
    : (w = r[3]);
  let { previewSrc: T } = Bt(w),
    E = T ?? s.previewSrc,
    D;
  r[4] !== E || r[5] !== s || r[6] !== c || r[7] !== C || r[8] !== g || r[9] !== x
    ? ((D = () => Ut(x, { displaySrc: E, image: s, imageAssetResolver: c, intl: C, onAddToChat: g })),
      (r[4] = E),
      (r[5] = s),
      (r[6] = c),
      (r[7] = C),
      (r[8] = g),
      (r[9] = x),
      (r[10] = D))
    : (D = r[10]);
  let O = f && `z-10`,
    k;
  r[11] === O ? (k = r[12]) : ((k = S(`relative max-w-full shrink-0`, O)), (r[11] = O), (r[12] = k));
  let A;
  r[13] !== i ||
  r[14] !== a ||
  r[15] !== E ||
  r[16] !== s ||
  r[17] !== l ||
  r[18] !== d ||
  r[19] !== h ||
  r[20] !== _ ||
  r[21] !== v ||
  r[22] !== y ||
  r[23] !== b ||
  r[24] !== p ||
  r[25] !== m
    ? ((A =
        m === `comment` && tt(s).canEdit
          ? (0, yn.jsx)(`div`, {
              className: S(
                `relative flex max-w-full shrink-0 items-center rounded-xl bg-surface-secondary/85 outline-none`,
                (d || a.length > 0) && `ring-2 ring-chart-blue`,
              ),
              onContextMenuCapture: _n,
              children: (0, yn.jsx)(tn, {
                alt: s.alt,
                comments: a,
                imageRef: l,
                isDraftActive: d,
                layout: `playground`,
                onDraftActiveChange: v,
                referrerPolicy: `no-referrer`,
                src: E,
                onDeleteComment: _,
                onImageLoad: y,
                onSubmitComment: b,
              }),
            })
          : (0, yn.jsxs)(`button`, {
              ref: l,
              type: `button`,
              "aria-label": s.alt,
              "aria-pressed": m === `select` ? p : i,
              className: S(
                `relative block max-w-full shrink-0 cursor-interaction overflow-hidden rounded-xl bg-surface-secondary/85 outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.995]`,
                (m === `select` ? p : i) && `ring-2 ring-chart-blue`,
              ),
              onClick: () => {
                h(E);
              },
              children: [
                (0, yn.jsx)(`img`, {
                  ref: (e) => {
                    e?.complete && e.naturalWidth > 0 && y?.(e);
                  },
                  className: `block h-auto !max-h-[292px] w-auto max-w-full object-contain`,
                  alt: ``,
                  decoding: `async`,
                  draggable: !1,
                  referrerPolicy: `no-referrer`,
                  src: E,
                  onLoad: (e) => y?.(e.currentTarget),
                }),
                m === `select` && p
                  ? (0, yn.jsx)(`span`, {
                      className: `absolute top-2 right-2 rounded-full bg-surface text-chart-blue shadow-sm`,
                      children: (0, yn.jsx)(u, { className: `size-5` }),
                    })
                  : null,
              ],
            })),
      (r[13] = i),
      (r[14] = a),
      (r[15] = E),
      (r[16] = s),
      (r[17] = l),
      (r[18] = d),
      (r[19] = h),
      (r[20] = _),
      (r[21] = v),
      (r[22] = y),
      (r[23] = b),
      (r[24] = p),
      (r[25] = m),
      (r[26] = A))
    : (A = r[26]);
  let j;
  r[27] !== k || r[28] !== A
    ? ((j = (0, yn.jsx)(`div`, { className: k, children: A })), (r[27] = k), (r[28] = A), (r[29] = j))
    : (j = r[29]);
  let M;
  return (
    r[30] !== D || r[31] !== j
      ? ((M = (0, yn.jsx)(t, { getItems: D, children: j })), (r[30] = D), (r[31] = j), (r[32] = M))
      : (M = r[32]),
    M
  );
}
function _n(e) {
  e.target instanceof HTMLElement &&
    (e.target.isContentEditable || e.target.closest(`input, textarea, [contenteditable='true']`) != null) &&
    e.stopPropagation();
}
var vn, yn;
function bn() {
  return (bn = e(() => {
    ((vn = E()), C(), L(), P(), oe(), l(), Dt(), Me(), Ht(), Vt(), en(), (yn = y()));
  }))();
}
var xn, Sn;
function Cn() {
  return (Cn = e(() => {
    (d(),
      (xn = y()),
      (Sn = (e) =>
        (0, xn.jsx)(`svg`, {
          width: 13,
          height: 13,
          viewBox: `0 0 13 13`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, xn.jsx)(`path`, {
            d: `M0 2.44444C0 1.09442 1.09442 0 2.44444 0H3.33333C3.70152 0 4 0.298477 4 0.666667C4 1.03486 3.70152 1.33333 3.33333 1.33333H2.44444C1.83079 1.33333 1.33333 1.83079 1.33333 2.44444V3.33333C1.33333 3.70152 1.03486 4 0.666667 4C0.298477 4 0 3.70152 0 3.33333V2.44444ZM8 0.666667C8 0.298477 8.29848 0 8.66667 0H9.55556C10.9056 0 12 1.09442 12 2.44444V3.33333C12 3.70152 11.7015 4 11.3333 4C10.9651 4 10.6667 3.70152 10.6667 3.33333V2.44444C10.6667 1.83079 10.1692 1.33333 9.55556 1.33333H8.66667C8.29848 1.33333 8 1.03486 8 0.666667ZM7.09363 7.09256L8.43971 10.9065L9.0609 9.57534C9.16686 9.34829 9.34937 9.16578 9.57642 9.05983L10.9075 8.43864L7.09363 7.09256ZM5.65074 7.01053C5.35243 6.16531 6.16639 5.35136 7.01161 5.64967L11.9666 7.39849C12.8673 7.71639 12.9282 8.96701 12.0627 9.37094L10.2281 10.2271L9.37202 12.0616C8.96808 12.9272 7.71747 12.8663 7.39956 11.9655L5.65074 7.01053ZM0.666667 8C1.03486 8 1.33333 8.29848 1.33333 8.66667V9.55556C1.33333 10.1692 1.83079 10.6667 2.44444 10.6667H3.33333C3.70152 10.6667 4 10.9651 4 11.3333C4 11.7015 3.70152 12 3.33333 12H2.44444C1.09442 12 0 10.9056 0 9.55556V8.66667C0 8.29848 0.298477 8 0.666667 8Z`,
            fill: `currentColor`,
          }),
        })));
  }))();
}
function wn(e) {
  let t = (0, Tn.c)(50),
    { activeTool: n, commentCount: r, isUnifiedViewerEnabled: i, onActiveToolChange: o } = e,
    c = i !== void 0 && i,
    l = fe(),
    u = c ? `ghostSecondary` : `ghostActive`,
    d = c ? `imageToolbar` : `composerSm`,
    f = c ? `large` : `default`,
    p;
  t[0] !== u || t[1] !== d || t[2] !== f
    ? ((p = { color: u, size: d, radius: f }), (t[0] = u), (t[1] = d), (t[2] = f), (t[3] = p))
    : (p = t[3]);
  let m = p,
    h = c ? `[@container_(max-width:450px)]:sr-only` : `text-base`,
    g;
  t[4] === l
    ? (g = t[5])
    : ((g = l.formatMessage({
        id: `codex.localConversation.imagePlayground.tools`,
        defaultMessage: `Image playground tools`,
        description: `Accessible label for the image playground toolbar.`,
      })),
      (t[4] = l),
      (t[5] = g));
  let _ = g;
  if (n === `comment`) {
    let e;
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, En.jsx)(B, {
          id: `codex.localConversation.imagePlayground.commentHelper`,
          defaultMessage: `Add comments on multiple images to batch edit them`,
          description: `Helper text shown in canvas comment mode before the user has added comments to any images.`,
        })),
        (t[6] = e))
      : (e = t[6]);
    let n;
    t[7] === o
      ? (n = t[8])
      : ((n = () => {
          o(`navigate`);
        }),
        (t[7] = o),
        (t[8] = n));
    let i = c ? `embedded` : `compact`,
      a;
    return (
      t[9] !== r || t[10] !== n || t[11] !== i || t[12] !== _
        ? ((a = (0, En.jsx)(cn, { ariaLabel: _, commentCount: r, emptyMessage: e, onCancel: n, variant: i })),
          (t[9] = r),
          (t[10] = n),
          (t[11] = i),
          (t[12] = _),
          (t[13] = a))
        : (a = t[13]),
      a
    );
  }
  let v = c ? `embedded` : `compact`,
    y;
  t[14] !== l || t[15] !== c
    ? ((y = c ? l.formatMessage(Dn.comment) : void 0), (t[14] = l), (t[15] = c), (t[16] = y))
    : (y = t[16]);
  let b;
  t[17] === o
    ? (b = t[18])
    : ((b = () => {
        o(`comment`);
      }),
      (t[17] = o),
      (t[18] = b));
  let x;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, En.jsx)(s, { "aria-hidden": !1, asset: a })), (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, En.jsx)(B, { ...Dn.comment })), (t[20] = S))
    : (S = t[20]);
  let C;
  t[21] === h
    ? (C = t[22])
    : ((C = (0, En.jsx)(`span`, { className: h, children: S })), (t[21] = h), (t[22] = C));
  let w;
  t[23] !== m || t[24] !== C || t[25] !== y || t[26] !== b
    ? ((w = (0, En.jsxs)(te, { ...m, title: y, onClick: b, children: [x, C] })),
      (t[23] = m),
      (t[24] = C),
      (t[25] = y),
      (t[26] = b),
      (t[27] = w))
    : (w = t[27]);
  let T = n === `select`,
    E = n === `select` ? `secondary` : m.color,
    D;
  t[28] !== l || t[29] !== c
    ? ((D = c ? l.formatMessage(Dn.multiSelect) : void 0), (t[28] = l), (t[29] = c), (t[30] = D))
    : (D = t[30]);
  let O;
  t[31] !== n || t[32] !== o
    ? ((O = () => {
        o(n === `select` ? `navigate` : `select`);
      }),
      (t[31] = n),
      (t[32] = o),
      (t[33] = O))
    : (O = t[33]);
  let k;
  t[34] === Symbol.for(`react.memo_cache_sentinel`) ? ((k = (0, En.jsx)(Sn, {})), (t[34] = k)) : (k = t[34]);
  let A;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, En.jsx)(B, { ...Dn.multiSelect })), (t[35] = A))
    : (A = t[35]);
  let j;
  t[36] === h
    ? (j = t[37])
    : ((j = (0, En.jsx)(`span`, { className: h, children: A })), (t[36] = h), (t[37] = j));
  let M;
  t[38] !== m || t[39] !== T || t[40] !== E || t[41] !== D || t[42] !== O || t[43] !== j
    ? ((M = (0, En.jsxs)(te, { ...m, "aria-pressed": T, color: E, title: D, onClick: O, children: [k, j] })),
      (t[38] = m),
      (t[39] = T),
      (t[40] = E),
      (t[41] = D),
      (t[42] = O),
      (t[43] = j),
      (t[44] = M))
    : (M = t[44]);
  let N;
  return (
    t[45] !== w || t[46] !== M || t[47] !== v || t[48] !== _
      ? ((N = (0, En.jsxs)(qt, { ariaLabel: _, variant: v, children: [w, M] })),
        (t[45] = w),
        (t[46] = M),
        (t[47] = v),
        (t[48] = _),
        (t[49] = N))
      : (N = t[49]),
    N
  );
}
var Tn, En, Dn;
function On() {
  return (On = e(() => {
    ((Tn = E()),
      ge(),
      P(),
      re(),
      w(),
      Cn(),
      an(),
      Kt(),
      (En = y()),
      (Dn = I({
        comment: {
          id: `codex.localConversation.imagePlayground.commentAction`,
          defaultMessage: `Comment`,
          description: `Toolbar action that enters canvas image comment mode.`,
        },
        multiSelect: {
          id: `codex.localConversation.imagePlayground.multiSelectAction`,
          defaultMessage: `Multi-select`,
          description: `Toolbar action that enters canvas image multi-select mode.`,
        },
      })));
  }))();
}
function kn(e) {
  let t = (0, An.c)(29),
    { children: n, onZoomPercentChange: r, renderHeader: i, toolbar: a, zoomPercent: s } = e,
    c;
  t[0] !== r || t[1] !== s
    ? ((c = { onZoomPercentChange: r, zoomPercent: s }), (t[0] = r), (t[1] = s), (t[2] = c))
    : (c = t[2]);
  let {
      zoomTargetRef: l,
      handleClickCapture: u,
      handlePointerMoveCapture: d,
      setScrollContainerRef: f,
      setZoomAtViewportCenter: p,
    } = $t(c),
    m;
  t[3] !== i || t[4] !== p || t[5] !== s
    ? ((m =
        i == null
          ? (0, jn.jsx)(`div`, {
              className: `absolute top-2 right-2 z-40 flex h-8 items-center`,
              children: (0, jn.jsx)(k, { zoomPercent: s, onZoomPercentChange: p }),
            })
          : i(
              (0, jn.jsx)(o, {
                zoomOptions: [25, 50, 100, 150, 200],
                zoomPercent: s,
                onZoomPercentChange: p,
              }),
            )),
      (t[3] = i),
      (t[4] = p),
      (t[5] = s),
      (t[6] = m))
    : (m = t[6]);
  let h = i == null ? `contents` : `relative flex min-h-0 flex-1 flex-col`,
    g =
      i == null
        ? `scroll-pt-14 ps-3 pe-16 pt-[max(calc(var(--spacing)*14),var(--right-panel-composer-overlay-top-reserve,0px))] pb-[calc(var(--right-panel-composer-overlay-reserve,0px)+var(--spacing)*6)]`
        : `scroll-pt-6 px-3 py-6`,
    _;
  t[7] === g ? (_ = t[8]) : ((_ = S(`h-full min-h-0 overflow-auto`, g)), (t[7] = g), (t[8] = _));
  let v = s / 100,
    y;
  t[9] === v ? (y = t[10]) : ((y = { zoom: v }), (t[9] = v), (t[10] = y));
  let b;
  t[11] !== n || t[12] !== y || t[13] !== l
    ? ((b = (0, jn.jsx)(`div`, {
        ref: l,
        className: `flex min-w-max flex-col items-start gap-6`,
        style: y,
        children: n,
      })),
      (t[11] = n),
      (t[12] = y),
      (t[13] = l),
      (t[14] = b))
    : (b = t[14]);
  let x;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, jn.jsx)(`div`, { className: `h-1/2` })), (t[15] = x))
    : (x = t[15]);
  let C;
  t[16] !== u || t[17] !== d || t[18] !== f || t[19] !== _ || t[20] !== b
    ? ((C = (0, jn.jsxs)(`div`, {
        ref: f,
        "data-generated-image-playground-scroll": !0,
        className: _,
        onClickCapture: u,
        onPointerMoveCapture: d,
        children: [b, x],
      })),
      (t[16] = u),
      (t[17] = d),
      (t[18] = f),
      (t[19] = _),
      (t[20] = b),
      (t[21] = C))
    : (C = t[21]);
  let w;
  t[22] !== C || t[23] !== h || t[24] !== a
    ? ((w = (0, jn.jsxs)(`div`, { className: h, children: [a, C] })),
      (t[22] = C),
      (t[23] = h),
      (t[24] = a),
      (t[25] = w))
    : (w = t[25]);
  let T;
  return (
    t[26] !== w || t[27] !== m
      ? ((T = (0, jn.jsxs)(jn.Fragment, { children: [m, w] })), (t[26] = w), (t[27] = m), (t[28] = T))
      : (T = t[28]),
    T
  );
}
var An, jn;
function Mn() {
  return (Mn = e(() => {
    ((An = E()), C(), F(), c(), Qt(), (jn = y()));
  }))();
}
function Nn(e) {
  let t = (0, Ln.c)(144),
    {
      activeImageId: r,
      conversationId: i,
      focusedImageRef: a,
      groups: o,
      imageAssetResolver: s,
      initialTool: c,
      isViewTransitioning: l,
      onGeneratedImageSelection: u,
      onImageLoad: d,
      onSelectImage: f,
      onZoomPercentChange: p,
      renderHeader: m,
      zoomPercent: h,
    } = e,
    g = c === void 0 ? `navigate` : c,
    _ = n(Ce),
    v = O(),
    y = fe(),
    b = m != null,
    [x, C] = (0, Rn.useState)(null),
    w;
  t[0] !== i || t[1] !== y || t[2] !== _
    ? ((w = { scope: _, conversationId: i, intl: y }), (t[0] = i), (t[1] = y), (t[2] = _), (t[3] = w))
    : (w = t[3]);
  let { notifyImageInputUnsupported: T, supportsImageInputs: E } = Ct(w),
    D = de(ve, i) ?? `local`,
    k = le(Qe),
    A = le(Ye),
    j = le(Ot),
    [M, N] = (0, Rn.useState)(g),
    [ee, P] = (0, Rn.useState)(null),
    F = (0, Rn.useRef)(null),
    [te, I] = (0, Rn.useState)(k);
  te !== k && (I(k), N(`navigate`), P(null));
  let re;
  t[4] === A ? (re = t[5]) : ((re = new Set(A.map(Fn))), (t[4] = A), (t[5] = re));
  let L = re,
    ie;
  t[6] === j ? (ie = t[7]) : ((ie = new Map(j.map(Pn))), (t[6] = j), (t[7] = ie));
  let ae = ie,
    R,
    oe,
    ce;
  if (t[8] !== r || t[9] !== o) {
    ((R = new Set()), (oe = []));
    for (let e of o) for (let t of e.images) t.loading || (oe.push(t), R.add(De(t.id)));
    let e;
    (t[13] === r ? (e = t[14]) : ((e = (e) => e.id === r), (t[13] = r), (t[14] = e)),
      (ce = oe.find(e)),
      (t[8] = r),
      (t[9] = o),
      (t[10] = R),
      (t[11] = oe),
      (t[12] = ce));
  } else ((R = t[10]), (oe = t[11]), (ce = t[12]));
  let z = ce,
    ue;
  if (t[15] !== j || t[16] !== R) {
    let e;
    (t[18] === R
      ? (e = t[19])
      : ((e = (e, t) => (R.has(t.attachmentId) ? e + t.comments.length : e)), (t[18] = R), (t[19] = e)),
      (ue = j.reduce(e, 0)),
      (t[15] = j),
      (t[16] = R),
      (t[17] = ue));
  } else ue = t[17];
  let B = ue,
    me;
  t[20] !== y || t[21] !== _
    ? ((me = () => {
        _.get(pe).danger(
          y.formatMessage({
            id: `codex.localConversation.imagePlayground.commentFailed`,
            defaultMessage: `Could not add image comment`,
            description: `Error shown when an image comment could not be added in the image playground.`,
          }),
          { errorAnalytics: { toastId: `codex.localConversation.imagePlayground.commentFailed` } },
        );
      }),
      (t[20] = y),
      (t[21] = _),
      (t[22] = me))
    : (me = t[22]);
  let he = se(me),
    ge;
  t[23] !== y || t[24] !== _
    ? ((ge = () => {
        _.get(pe).danger(
          y.formatMessage({
            id: `codex.localConversation.imagePlayground.selectFailed`,
            defaultMessage: `Could not select image`,
            description: `Error shown when a generated image could not be added to the composer.`,
          }),
          { errorAnalytics: { toastId: `codex.localConversation.imagePlayground.selectFailed` } },
        );
      }),
      (t[23] = y),
      (t[24] = _),
      (t[25] = ge))
    : (ge = t[25]);
  let _e = se(ge),
    ye;
  t[26] !== T || t[27] !== u || t[28] !== E
    ? ((ye = () => (E ? (u?.(), !0) : (T(), !1))), (t[26] = T), (t[27] = u), (t[28] = E), (t[29] = ye))
    : (ye = t[29]);
  let be = se(ye),
    xe;
  t[30] !== D || t[31] !== s || t[32] !== u || t[33] !== v || t[34] !== _ || t[35] !== _e
    ? ((xe = (e, t, n) => {
        (u?.(),
          ct(_, {
            displaySrc: t,
            hostId: D,
            image: e,
            imageAssetResolver: s,
            onFailure: _e,
            queryClient: v,
            selectionMode: n,
          }));
      }),
      (t[30] = D),
      (t[31] = s),
      (t[32] = u),
      (t[33] = v),
      (t[34] = _),
      (t[35] = _e),
      (t[36] = xe))
    : (xe = t[36]);
  let Se = se(xe),
    we;
  t[37] !== z || t[38] !== M || t[39] !== Se || t[40] !== _ || t[41] !== E
    ? ((we = (e) => {
        if (e != null && M === `navigate` && E && z != null) {
          if (!tt(z).canSelect) {
            (Ue(_), (F.current = null));
            return;
          }
          Se(z, z.previewSrc, `single`);
        }
      }),
      (t[37] = z),
      (t[38] = M),
      (t[39] = Se),
      (t[40] = _),
      (t[41] = E),
      (t[42] = we))
    : (we = t[42]);
  let Te = se(we),
    Ee = E ? Te : void 0,
    Oe;
  t[43] !== a || t[44] !== Ee ? ((Oe = ne(a, Ee)), (t[43] = a), (t[44] = Ee), (t[45] = Oe)) : (Oe = t[45]);
  let Ae = Oe,
    Me;
  t[46] !== M || t[47] !== Se || t[48] !== T || t[49] !== f || t[50] !== _ || t[51] !== E
    ? ((Me = (e, t, n) => {
        if (!tt(e).canSelect) {
          (Ue(_), (F.current = null), f(e));
          return;
        }
        if (M === `navigate`) {
          (f(e), E && Se(e, n, `single`));
          return;
        }
        if (t) {
          (je(_, e.id), F.current?.image.id === e.id && (F.current = null));
          return;
        }
        if (!E) {
          T();
          return;
        }
        ((F.current = { displaySrc: n, image: e }), Se(e, n, `multiple`));
      }),
      (t[46] = M),
      (t[47] = Se),
      (t[48] = T),
      (t[49] = f),
      (t[50] = _),
      (t[51] = E),
      (t[52] = Me))
    : (Me = t[52]);
  let Ne = se(Me),
    Pe;
  t[53] !== D || t[54] !== s || t[55] !== v || t[56] !== _ || t[57] !== he
    ? ((Pe = (e, t) => {
        pn(_, {
          hostId: D,
          image: e,
          imageAssetResolver: s,
          onFailure: he,
          queryClient: v,
          updateComments: (e) => e.filter((e) => e.id !== t),
        });
      }),
      (t[53] = D),
      (t[54] = s),
      (t[55] = v),
      (t[56] = _),
      (t[57] = he),
      (t[58] = Pe))
    : (Pe = t[58]);
  let Fe = se(Pe),
    Ie;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = (e, t) => {
        P(t ? e : null);
      }),
      (t[59] = Ie))
    : (Ie = t[59]);
  let Le = se(Ie),
    Re;
  t[60] !== D || t[61] !== s || t[62] !== T || t[63] !== v || t[64] !== _ || t[65] !== he || t[66] !== E
    ? ((Re = (e, t) => {
        if (!E) {
          T();
          return;
        }
        let n = { ...t, id: t.id ?? ke() };
        pn(_, {
          hostId: D,
          image: e,
          imageAssetResolver: s,
          onFailure: he,
          queryClient: v,
          updateComments: (e) => (t.id == null ? [...e, n] : e.map((e) => (e.id === t.id ? n : e))),
        });
      }),
      (t[60] = D),
      (t[61] = s),
      (t[62] = T),
      (t[63] = v),
      (t[64] = _),
      (t[65] = he),
      (t[66] = E),
      (t[67] = Re))
    : (Re = t[67]);
  let V = se(Re),
    ze;
  t[68] !== r ||
  t[69] !== M ||
  t[70] !== Se ||
  t[71] !== f ||
  t[72] !== R ||
  t[73] !== oe ||
  t[74] !== _ ||
  t[75] !== E
    ? ((ze = (e) => {
        if (
          (e !== M && e !== `navigate` && Ve(_, { imageSource: `generated`, mode: e, view: `canvas` }),
          M !== `select` && e === `select` && (F.current = null),
          M === `select` && e === `navigate`)
        ) {
          let e = F.current,
            t = e,
            n = _.get(Ye);
          if (
            (e != null &&
              (!n.some((t) => t.id === De(e.image.id)) ||
                !oe.some((t) => t.id === e.image.id && t.src === e.image.src)) &&
              (t = null),
            t == null)
          ) {
            let e;
            for (let t of n) R.has(t.id) && (e = t.id);
            let i = e == null ? oe.find((e) => e.id === r) : oe.find((t) => De(t.id) === e);
            i != null && (t = { displaySrc: i.previewSrc, image: i });
          }
          (t != null && tt(t.image).canSelect && E && (f(t.image), Se(t.image, t.displaySrc, `single`)),
            (F.current = null));
        }
        (N(e), M === `comment` && e !== `comment` && (P(null), Ue(_)));
      }),
      (t[68] = r),
      (t[69] = M),
      (t[70] = Se),
      (t[71] = f),
      (t[72] = R),
      (t[73] = oe),
      (t[74] = _),
      (t[75] = E),
      (t[76] = ze))
    : (ze = t[76]);
  let Be;
  t[77] !== M || t[78] !== B || t[79] !== b || t[80] !== ze
    ? ((Be = (0, Z.jsx)(wn, {
        isUnifiedViewerEnabled: b,
        activeTool: M,
        commentCount: B,
        onActiveToolChange: ze,
      })),
      (t[77] = M),
      (t[78] = B),
      (t[79] = b),
      (t[80] = ze),
      (t[81] = Be))
    : (Be = t[81]);
  let He = Be,
    H = b ? C : void 0,
    U =
      b &&
      `flex flex-col pt-[var(--right-panel-composer-overlay-top-reserve,0px)] pb-[var(--right-panel-composer-overlay-reserve,0px)]`,
    W;
  t[82] === U
    ? (W = t[83])
    : ((W = S(`@container relative h-full min-h-0 bg-surface-secondary`, U)), (t[82] = U), (t[83] = W));
  let G;
  t[84] !== z || t[85] !== b || t[86] !== l || t[87] !== He
    ? ((G =
        !b && tt(z).canEdit
          ? (0, Z.jsx)(`div`, {
              className: `pointer-events-none absolute top-2 right-0 left-0 z-40 flex justify-center px-4 [@container_(max-width:630px)]:hidden`,
              children: (0, Z.jsx)(`div`, { className: l ? void 0 : `pointer-events-auto`, children: He }),
            })
          : null),
      (t[84] = z),
      (t[85] = b),
      (t[86] = l),
      (t[87] = He),
      (t[88] = G))
    : (G = t[88]);
  let K;
  t[89] !== M || t[90] !== m
    ? ((K = m == null ? void 0 : (e) => m({ zoomControl: e, navigationDisabled: M === `comment` })),
      (t[89] = M),
      (t[90] = m),
      (t[91] = K))
    : (K = t[91]);
  let q;
  t[92] !== z || t[93] !== x || t[94] !== b || t[95] !== l || t[96] !== He
    ? ((q =
        b && tt(z).canEdit
          ? (0, Z.jsx)(`div`, {
              className: `contents [@container_(max-width:630px)]:hidden`,
              inert: l,
              children: (0, Z.jsx)(rn, { dragBoundary: x, children: He }),
            })
          : null),
      (t[92] = z),
      (t[93] = x),
      (t[94] = b),
      (t[95] = l),
      (t[96] = He),
      (t[97] = q))
    : (q = t[97]);
  let J;
  if (
    t[98] !== ee ||
    t[99] !== r ||
    t[100] !== M ||
    t[101] !== L ||
    t[102] !== i ||
    t[103] !== a ||
    t[104] !== o ||
    t[105] !== be ||
    t[106] !== Fe ||
    t[107] !== Le ||
    t[108] !== Ne ||
    t[109] !== V ||
    t[110] !== s ||
    t[111] !== ae ||
    t[112] !== l ||
    t[113] !== d ||
    t[114] !== Ae
  ) {
    let e;
    (t[116] !== ee ||
    t[117] !== r ||
    t[118] !== M ||
    t[119] !== L ||
    t[120] !== i ||
    t[121] !== a ||
    t[122] !== be ||
    t[123] !== Fe ||
    t[124] !== Le ||
    t[125] !== Ne ||
    t[126] !== V ||
    t[127] !== s ||
    t[128] !== ae ||
    t[129] !== l ||
    t[130] !== d ||
    t[131] !== Ae
      ? ((e = (e) =>
          (0, Z.jsx)(
            Bn,
            {
              activeDraftImageId: ee,
              activeImageId: r,
              attachmentIds: L,
              conversationId: i,
              focusedImageRef: Ae,
              group: e,
              imageAssetResolver: s,
              imageCommentsByAttachmentId: ae,
              isViewTransitioning: l,
              loadingImageRef: a,
              tool: M,
              onAddToChat: be,
              onDeleteComment: Fe,
              onDraftActiveChange: Le,
              onImageActivate: Ne,
              onImageLoad: d,
              onSubmitComment: V,
            },
            e.id,
          )),
        (t[116] = ee),
        (t[117] = r),
        (t[118] = M),
        (t[119] = L),
        (t[120] = i),
        (t[121] = a),
        (t[122] = be),
        (t[123] = Fe),
        (t[124] = Le),
        (t[125] = Ne),
        (t[126] = V),
        (t[127] = s),
        (t[128] = ae),
        (t[129] = l),
        (t[130] = d),
        (t[131] = Ae),
        (t[132] = e))
      : (e = t[132]),
      (J = o.map(e)),
      (t[98] = ee),
      (t[99] = r),
      (t[100] = M),
      (t[101] = L),
      (t[102] = i),
      (t[103] = a),
      (t[104] = o),
      (t[105] = be),
      (t[106] = Fe),
      (t[107] = Le),
      (t[108] = Ne),
      (t[109] = V),
      (t[110] = s),
      (t[111] = ae),
      (t[112] = l),
      (t[113] = d),
      (t[114] = Ae),
      (t[115] = J));
  } else J = t[115];
  let We;
  t[133] !== p || t[134] !== K || t[135] !== q || t[136] !== J || t[137] !== h
    ? ((We = (0, Z.jsx)(kn, {
        renderHeader: K,
        toolbar: q,
        onZoomPercentChange: p,
        zoomPercent: h,
        children: J,
      })),
      (t[133] = p),
      (t[134] = K),
      (t[135] = q),
      (t[136] = J),
      (t[137] = h),
      (t[138] = We))
    : (We = t[138]);
  let Ge;
  return (
    t[139] !== H || t[140] !== W || t[141] !== G || t[142] !== We
      ? ((Ge = (0, Z.jsxs)(`div`, { ref: H, className: W, children: [G, We] })),
        (t[139] = H),
        (t[140] = W),
        (t[141] = G),
        (t[142] = We),
        (t[143] = Ge))
      : (Ge = t[143]),
    Ge
  );
}
function Pn(e) {
  return [e.attachmentId, e.comments];
}
function Fn(e) {
  return e.id;
}
function In(e) {
  return e.loading;
}
var Ln, Rn, Z, zn, Bn;
function Vn() {
  return (Vn = e(() => {
    ((Ln = E()),
      b(),
      C(),
      m(),
      L(),
      (Rn = d()),
      P(),
      G(),
      et(),
      Et(),
      M(),
      gt(),
      Dt(),
      Me(),
      Pe(),
      v(),
      ce(),
      Le(),
      hn(),
      bn(),
      ft(),
      On(),
      Mn(),
      fn(),
      It(),
      (Z = y()),
      (zn = []),
      (Bn = (0, Rn.memo)(function (e) {
        let t = (0, Ln.c)(51),
          {
            activeDraftImageId: n,
            activeImageId: r,
            attachmentIds: i,
            conversationId: a,
            focusedImageRef: o,
            group: s,
            imageAssetResolver: c,
            imageCommentsByAttachmentId: l,
            isViewTransitioning: u,
            loadingImageRef: d,
            tool: f,
            onAddToChat: p,
            onDeleteComment: m,
            onDraftActiveChange: g,
            onImageActivate: _,
            onImageLoad: v,
            onSubmitComment: y,
          } = e,
          b = !u || s.images.some((e) => e.id === r) ? 1 : 0,
          x;
        t[0] === b ? (x = t[1]) : ((x = { opacity: b }), (t[0] = b), (t[1] = x));
        let C;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((C = { opacity: 1 }), (t[2] = C)) : (C = t[2]);
        let w = u ? 0.24 : 0,
          T;
        t[3] === w ? (T = t[4]) : ((T = { duration: 0.14, delay: w }), (t[3] = w), (t[4] = T));
        let E;
        t[5] !== s.images || t[6] !== s.turnStartedAtMs
          ? ((E = S(
              `relative flex max-w-full gap-2`,
              (s.turnStartedAtMs != null || s.images.some(In)) && `pt-6`,
            )),
            (t[5] = s.images),
            (t[6] = s.turnStartedAtMs),
            (t[7] = E))
          : (E = t[7]);
        let D;
        t[8] === s.turnStartedAtMs
          ? (D = t[9])
          : ((D =
              s.turnStartedAtMs == null
                ? null
                : (0, Z.jsx)(`time`, {
                    className: `absolute top-0 text-xs text-tertiary select-none`,
                    dateTime: new Date(s.turnStartedAtMs).toISOString(),
                    children: (0, Z.jsx)(N, {
                      value: s.turnStartedAtMs,
                      dateStyle: `medium`,
                      timeStyle: `short`,
                    }),
                  })),
            (t[8] = s.turnStartedAtMs),
            (t[9] = D));
        let O;
        if (
          t[10] !== n ||
          t[11] !== r ||
          t[12] !== i ||
          t[13] !== a ||
          t[14] !== o ||
          t[15] !== s.images ||
          t[16] !== c ||
          t[17] !== l ||
          t[18] !== u ||
          t[19] !== d ||
          t[20] !== p ||
          t[21] !== m ||
          t[22] !== g ||
          t[23] !== _ ||
          t[24] !== v ||
          t[25] !== y ||
          t[26] !== f
        ) {
          let e;
          (t[28] !== n ||
          t[29] !== r ||
          t[30] !== i ||
          t[31] !== a ||
          t[32] !== o ||
          t[33] !== c ||
          t[34] !== l ||
          t[35] !== u ||
          t[36] !== d ||
          t[37] !== p ||
          t[38] !== m ||
          t[39] !== g ||
          t[40] !== _ ||
          t[41] !== v ||
          t[42] !== y ||
          t[43] !== f
            ? ((e = (e) => {
                if (e.loading)
                  return (0, Z.jsx)(
                    `div`,
                    {
                      ref: e.id === r ? d : void 0,
                      className: `w-72 max-w-full shrink-0`,
                      children: (0, Z.jsx)(Lt, { presentation: `playground` }),
                    },
                    e.id,
                  );
                let t = De(e.id),
                  s = e.id === r,
                  h = i.has(t),
                  b = l.get(t) ?? zn;
                return (0, Z.jsx)(
                  gn,
                  {
                    active: s,
                    comments: b,
                    conversationId: a,
                    image: e,
                    imageAssetResolver: c,
                    imageRef: s ? o : void 0,
                    isDraftActive: n === e.id,
                    isViewTransitioning: s && u,
                    selected: h,
                    tool: f,
                    onActivate: (t) => {
                      _(e, h, t);
                    },
                    onAddToChat: p,
                    onDeleteComment: (t) => {
                      m(e, t);
                    },
                    onDraftActiveChange: (t) => {
                      g(e.id, t);
                    },
                    onImageLoad: s ? v : void 0,
                    onSubmitComment: (t) => {
                      y(e, t);
                    },
                  },
                  e.id,
                );
              }),
              (t[28] = n),
              (t[29] = r),
              (t[30] = i),
              (t[31] = a),
              (t[32] = o),
              (t[33] = c),
              (t[34] = l),
              (t[35] = u),
              (t[36] = d),
              (t[37] = p),
              (t[38] = m),
              (t[39] = g),
              (t[40] = _),
              (t[41] = v),
              (t[42] = y),
              (t[43] = f),
              (t[44] = e))
            : (e = t[44]),
            (O = s.images.map(e)),
            (t[10] = n),
            (t[11] = r),
            (t[12] = i),
            (t[13] = a),
            (t[14] = o),
            (t[15] = s.images),
            (t[16] = c),
            (t[17] = l),
            (t[18] = u),
            (t[19] = d),
            (t[20] = p),
            (t[21] = m),
            (t[22] = g),
            (t[23] = _),
            (t[24] = v),
            (t[25] = y),
            (t[26] = f),
            (t[27] = O));
        } else O = t[27];
        let k;
        return (
          t[45] !== x || t[46] !== T || t[47] !== E || t[48] !== D || t[49] !== O
            ? ((k = (0, Z.jsxs)(h.div, {
                initial: x,
                animate: C,
                transition: T,
                className: E,
                children: [D, O],
              })),
              (t[45] = x),
              (t[46] = T),
              (t[47] = E),
              (t[48] = D),
              (t[49] = O),
              (t[50] = k))
            : (k = t[50]),
          k
        );
      })));
  }))();
}
function Hn(e) {
  let t = (0, Un.c)(39),
    { placement: r, shouldShowCoachmark: i, onDismissCoachmark: a, view: o, onViewChange: c } = e,
    l = r === void 0 ? `overlay` : r,
    u = n(D),
    d = fe(),
    p;
  t[0] === d
    ? (p = t[1])
    : ((p = d.formatMessage({
        id: `codex.localConversation.imagePlayground.view`,
        defaultMessage: `Image view`,
        description: `Accessible label for the image view toggle.`,
      })),
      (t[0] = d),
      (t[1] = p));
  let m;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Wn.jsx)(s, { "aria-hidden": !1, asset: me })), (t[2] = m))
    : (m = t[2]);
  let h;
  t[3] === d
    ? (h = t[4])
    : ((h = d.formatMessage({
        id: `codex.localConversation.imagePlayground.singleView`,
        defaultMessage: `Focused view`,
        description: `Accessible label for the focused image view.`,
      })),
      (t[3] = d),
      (t[4] = h));
  let g;
  t[5] === h ? (g = t[6]) : ((g = { id: `single`, label: m, ariaLabel: h }), (t[5] = h), (t[6] = g));
  let _;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Wn.jsx)(s, { "aria-hidden": !1, asset: R })), (t[7] = _))
    : (_ = t[7]);
  let v;
  t[8] === d
    ? (v = t[9])
    : ((v = d.formatMessage({
        id: `codex.localConversation.imagePlayground.playgroundView`,
        defaultMessage: `Canvas view`,
        description: `Accessible label for the image canvas view.`,
      })),
      (t[8] = d),
      (t[9] = v));
  let y;
  t[10] === v ? (y = t[11]) : ((y = { id: `playground`, label: _, ariaLabel: v }), (t[10] = v), (t[11] = y));
  let b;
  t[12] !== g || t[13] !== y ? ((b = [g, y]), (t[12] = g), (t[13] = y), (t[14] = b)) : (b = t[14]);
  let x;
  t[15] !== a || t[16] !== c || t[17] !== u || t[18] !== i || t[19] !== o
    ? ((x = (e) => {
        (i && o === `single` && e === `playground` && At(u, W, {}), a(), c(e));
      }),
      (t[15] = a),
      (t[16] = c),
      (t[17] = u),
      (t[18] = i),
      (t[19] = o),
      (t[20] = x))
    : (x = t[20]);
  let C;
  t[21] !== x || t[22] !== b || t[23] !== o
    ? ((C = (0, Wn.jsx)(Ge, { uniform: !0, variant: `viewer`, options: b, selectedId: o, onSelect: x })),
      (t[21] = x),
      (t[22] = b),
      (t[23] = o),
      (t[24] = C))
    : (C = t[24]);
  let w;
  t[25] !== C || t[26] !== p
    ? ((w = (0, Wn.jsx)(f, { label: p, children: C })), (t[25] = C), (t[26] = p), (t[27] = w))
    : (w = t[27]);
  let T = w,
    E = l === `overlay` && `absolute top-2 left-2 z-40`,
    O;
  t[28] === E ? (O = t[29]) : ((O = S(E)), (t[28] = E), (t[29] = O));
  let k;
  t[30] !== d || t[31] !== a || t[32] !== i || t[33] !== T || t[34] !== o
    ? ((k = i
        ? (0, Wn.jsx)(He, {
            align: `start`,
            description: (0, Wn.jsx)(B, {
              id: `codex.localConversation.imagePlayground.canvasViewCoachmarkDescription`,
              defaultMessage: `Switch between a focused image and all generated images`,
              description: `Body copy shown in the image view toggle coachmark.`,
            }),
            dismissLabel: d.formatMessage({
              id: `codex.localConversation.imagePlayground.canvasViewCoachmarkDismiss`,
              defaultMessage: `Dismiss`,
              description: `Accessible label for dismissing the image view toggle coachmark.`,
            }),
            onDismiss: a,
            open: !0,
            side: `right`,
            sideOffset: 12,
            title:
              o === `single`
                ? (0, Wn.jsx)(B, {
                    id: `codex.localConversation.imagePlayground.canvasViewCoachmarkTitle`,
                    defaultMessage: `Try Canvas view`,
                    description: `Title shown in the image view toggle coachmark when Canvas view is closed.`,
                  })
                : (0, Wn.jsx)(B, {
                    id: `codex.localConversation.imagePlayground.focusedViewCoachmarkTitle`,
                    defaultMessage: `Try focused view`,
                    description: `Title shown in the image view toggle coachmark when Canvas view is open.`,
                  }),
            children: T,
          })
        : T),
      (t[30] = d),
      (t[31] = a),
      (t[32] = i),
      (t[33] = T),
      (t[34] = o),
      (t[35] = k))
    : (k = t[35]);
  let A;
  return (
    t[36] !== O || t[37] !== k
      ? ((A = (0, Wn.jsx)(`div`, { className: O, children: k })), (t[36] = O), (t[37] = k), (t[38] = A))
      : (A = t[38]),
    A
  );
}
var Un, Wn;
function Gn() {
  return (Gn = e(() => {
    ((Un = E()), dt(), ue(), r(), C(), L(), P(), w(), H(), Mt(), i(), ye(), F(), (Wn = y()));
  }))();
}
function Kn(e) {
  let t = (0, or.c)(192),
    {
      conversationId: r,
      fallbackImage: i,
      historicalGeneratedImageGroups: a,
      imageAssetResolver: o,
      initialImageId: s,
      initialPlaygroundTool: c,
      liveTailGeneratedImageGroup: l,
      onActiveImageChange: u,
      onGeneratedImageSelection: d,
      onViewChange: p,
      optimisticImageEditMessageId: m,
      view: h,
    } = e,
    g = n(Ce),
    _ = fe(),
    v = le(Se),
    y = le(Pt),
    b = (v != null && v === i.tabId) || (y != null && y === i.tabId),
    x = le(it),
    C = i.presentation === `overlay`,
    w = C || (x && i.tabId != null),
    E = le(ht),
    D = ee(),
    O;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = new Set()), (t[0] = O)) : (O = t[0]);
  let k = (0, Q.useRef)(O),
    A = ie(),
    j;
  t[1] === s ? (j = t[2]) : ((j = { id: s }), (t[1] = s), (t[2] = j));
  let [M, N] = (0, Q.useState)(j),
    [P, F] = (0, Q.useState)(null),
    te = (0, Q.useId)(),
    I = i.viewerId ?? te,
    ne = de(Ke, I),
    [re, L] = (0, Q.useState)(l?.id),
    [R, oe] = (0, Q.useState)(null),
    [ce, z] = (0, Q.useState)(dr),
    [ue, pe] = (0, Q.useState)(i.zoom?.manualZoomPercent ?? null),
    [me, he] = (0, Q.useState)(!1),
    [ge, _e] = (0, Q.useState)(null),
    [ve, ye] = (0, Q.useState)(null),
    [xe, we] = (0, Q.useState)(null),
    [Te, De] = (0, Q.useState)(D),
    [ke, Ae] = (0, Q.useState)(null),
    [Me, Pe] = (0, Q.useState)(null),
    Fe = le(fr),
    [Ie, Le] = (0, Q.useState)(!1),
    Re = (0, Q.useRef)(!1),
    [V, ze] = (0, Q.useState)(null),
    Be = (0, Q.useRef)(null),
    Ve = (0, Q.useRef)(s),
    He = (0, Q.useRef)(null),
    H = m == null ? null : `optimistic-image-edit:` + m,
    U,
    W,
    G,
    K,
    Ue,
    q,
    J;
  if (
    t[3] !== M ||
    t[4] !== a ||
    t[5] !== C ||
    t[6] !== l ||
    t[7] !== P ||
    t[8] !== m ||
    t[9] !== H ||
    t[10] !== re ||
    t[11] !== R ||
    t[12] !== ne
  ) {
    let e = H == null ? null : { id: H, turnStartedAtMs: null, images: [{ id: H, loading: !0 }] },
      n = [...a, ...(l == null ? [] : [l]), ...(e == null ? [] : [e])];
    ((Ue = n.flatMap(Qn)),
      (q = (e) => Ue.find((t) => !t.loading && t.id === e.id) ?? e),
      (W = n.map((e) => ({ ...e, images: e.images.map((e) => (e.loading ? e : We(ne, e))) }))),
      (G = W.flatMap(Zn)),
      (J = G.filter(Xn)));
    let r = H != null && P?.optimisticImageId === H ? e : l;
    if (
      ((K = r?.id === P?.liveTailGroupId ? r?.images.slice(P?.liveTailImageIndex) : r?.images),
      P != null && (!C || !K?.length) && F(null),
      m !== R && (oe(m), H != null))
    ) {
      let e = C ? J.find((e) => e.id === M.id) : void 0;
      (F(
        e == null
          ? null
          : {
              sourceImage: e,
              optimisticImageId: H,
              liveTailGroupId: l?.id,
              liveTailImageIndex: l?.images.length ?? 0,
            },
      ),
        N({
          id: H,
          pendingLiveTailGroupId: l?.id,
          pendingLiveTailImageIndex: l?.images.length ?? 0,
          previousImageId: M.id,
        }),
        pe(null));
    }
    if (l?.id !== re) {
      L(l?.id);
      let e = l?.images.find(Yn);
      if (l != null && e != null && H == null && R == null && M.pendingLiveTailImageIndex == null) {
        let t = C ? J.find((e) => e.id === M.id) : void 0;
        (F(
          t == null
            ? null
            : {
                sourceImage: t,
                optimisticImageId: null,
                liveTailGroupId: l.id,
                liveTailImageIndex: l.images.indexOf(e),
              },
        ),
          N({
            id: e.id,
            pendingLiveTailGroupId: l.id,
            pendingLiveTailImageIndex: l.images.indexOf(e),
            previousImageId: M.id,
          }),
          pe(null));
      }
    }
    ((U = G.find((e) => e.id === M.id)),
      U == null &&
        M.pendingLiveTailImageIndex != null &&
        l != null &&
        (U = l.id === M.pendingLiveTailGroupId ? l.images[M.pendingLiveTailImageIndex] : l.images.at(-1)),
      (U ??= J.find((e) => e.id === M.previousImageId) ?? J.at(-1)),
      U != null &&
        M.pendingLiveTailImageIndex != null &&
        (U.id !== M.id || !U.loading) &&
        N(U.loading ? { ...M, id: U.id } : { id: U.id }),
      (W.find((e) => e.images.some((e) => e.id === U?.id))?.images ?? []).filter(Jn),
      (t[3] = M),
      (t[4] = a),
      (t[5] = C),
      (t[6] = l),
      (t[7] = P),
      (t[8] = m),
      (t[9] = H),
      (t[10] = re),
      (t[11] = R),
      (t[12] = ne),
      (t[13] = U),
      (t[14] = W),
      (t[15] = G),
      (t[16] = K),
      (t[17] = Ue),
      (t[18] = q),
      (t[19] = J));
  } else ((U = t[13]), (W = t[14]), (G = t[15]), (K = t[16]), (Ue = t[17]), (q = t[18]), (J = t[19]));
  let qe = (C || E) && G.length > 1,
    Je;
  t[20] !== U || t[21] !== Ue
    ? ((Je = Ue.find((e) => e.id === U?.id)), (t[20] = U), (t[21] = Ue), (t[22] = Je))
    : (Je = t[22]);
  let Y = Je,
    Ye = U != null && !U.loading ? U.src : null,
    Xe;
  t[23] !== U || t[24] !== C || t[25] !== P?.sourceImage || t[26] !== K
    ? ((Xe = C && K?.some((e) => e.id === U?.id) ? P?.sourceImage : void 0),
      (t[23] = U),
      (t[24] = C),
      (t[25] = P?.sourceImage),
      (t[26] = K),
      (t[27] = Xe))
    : (Xe = t[27]);
  let Ze = Xe,
    Qe;
  t[28] !== Ye || t[29] !== Ze
    ? ((Qe = (e) => {
        Ye != null && e.naturalWidth > 0 && (Ae(Ye), Ze != null && F(null));
      }),
      (t[28] = Ye),
      (t[29] = Ze),
      (t[30] = Qe))
    : (Qe = t[30]);
  let $e = Qe,
    et = U != null && !U.loading ? U.src : ``,
    tt;
  t[31] !== et || t[32] !== I
    ? ((tt = { viewerId: I, assetSrc: et }), (t[31] = et), (t[32] = I), (t[33] = tt))
    : (tt = t[33]);
  let nt = de(un, tt),
    rt = !i.readOnly && U != null && !U.loading && U.id === ge,
    X = b || rt || (U != null && (nt.hasPendingComment || U.id === ve)),
    at;
  t[34] !== U ||
  t[35] !== M ||
  t[36] !== i.editStateRef?.current?.isEditing ||
  t[37] !== X ||
  t[38] !== l?.id ||
  t[39] !== l?.images ||
  t[40] !== u ||
  t[41] !== H ||
  t[42] !== q
    ? ((at = (e) => {
        X ||
          i.editStateRef?.current?.isEditing ||
          U == null ||
          e.id === U.id ||
          (N(
            e.loading && e.id === H
              ? {
                  id: e.id,
                  pendingLiveTailGroupId: l?.id,
                  pendingLiveTailImageIndex: l?.images.length ?? 0,
                  previousImageId: U.loading ? M.previousImageId : U.id,
                }
              : { id: e.id },
          ),
          pe(null),
          e.loading || ((Ve.current = e.id), u?.(q(e))));
      }),
      (t[34] = U),
      (t[35] = M),
      (t[36] = i.editStateRef?.current?.isEditing),
      (t[37] = X),
      (t[38] = l?.id),
      (t[39] = l?.images),
      (t[40] = u),
      (t[41] = H),
      (t[42] = q),
      (t[43] = at))
    : (at = t[43]);
  let ot = at,
    st = !C && r != null && U != null && Te && !Ie && Fe === !1,
    ct,
    lt;
  (t[44] !== g || t[45] !== st || t[46] !== h
    ? ((lt = () => {
        st && h === `single` && !Re.current && ((Re.current = !0), At(g, Oe, {}));
      }),
      (ct = [g, st, h]),
      (t[44] = g),
      (t[45] = st),
      (t[46] = h),
      (t[47] = ct),
      (t[48] = lt))
    : ((ct = t[47]), (lt = t[48])),
    (0, Q.useEffect)(lt, ct));
  let ut, dt;
  (t[49] === D
    ? ((ut = t[50]), (dt = t[51]))
    : ((ut = () => {
        let e = window.setTimeout(
          () => {
            De(!0);
          },
          D ? 0 : Ee.duration * 1e3,
        );
        return () => {
          window.clearTimeout(e);
        };
      }),
      (dt = [D]),
      (t[49] = D),
      (t[50] = ut),
      (t[51] = dt)),
    (0, Q.useEffect)(ut, dt));
  let ft, pt;
  (t[52] !== Ye || t[53] !== Te || t[54] !== ke
    ? ((ft = () => {
        if (!Te || Ye == null || ke !== Ye) return;
        let e = !1,
          t;
        return (
          jt().then(() => {
            if (e) return;
            let n = () => Pe(Ye);
            if (window.requestIdleCallback != null) {
              let e = window.requestIdleCallback(n);
              t = () => window.cancelIdleCallback(e);
            } else {
              let e = window.setTimeout(n, 0);
              t = () => window.clearTimeout(e);
            }
          }),
          () => {
            ((e = !0), t?.());
          }
        );
      }),
      (pt = [Ye, Te, ke]),
      (t[52] = Ye),
      (t[53] = Te),
      (t[54] = ke),
      (t[55] = ft),
      (t[56] = pt))
    : ((ft = t[55]), (pt = t[56])),
    (0, Q.useEffect)(ft, pt));
  let mt, gt;
  (t[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mt = () => () => {
        He.current?.cancel();
      }),
      (gt = []),
      (t[57] = mt),
      (t[58] = gt))
    : ((mt = t[57]), (gt = t[58])),
    (0, Q.useEffect)(mt, gt));
  let _t;
  t[59] === h
    ? (_t = t[60])
    : ((_t = () => {
        let e = Be.current;
        h === `playground` && e != null && ir(e);
      }),
      (t[59] = h),
      (t[60] = _t));
  let vt = ae(_t),
    yt,
    bt;
  (t[61] !== vt || t[62] !== h
    ? ((yt = () => {
        let e = Be.current;
        if (h !== `playground` || e == null) {
          vt(null);
          return;
        }
        return (
          vt(e.closest(`[data-generated-image-playground-scroll]`)),
          ir(e),
          () => {
            vt(null);
          }
        );
      }),
      (bt = [vt, h]),
      (t[61] = vt),
      (t[62] = h),
      (t[63] = yt),
      (t[64] = bt))
    : ((yt = t[63]), (bt = t[64])),
    (0, Q.useLayoutEffect)(yt, bt));
  let xt;
  t[65] !== U || t[66] !== u || t[67] !== H || t[68] !== q || t[69] !== h
    ? ((xt = (e) => {
        ((Be.current = e),
          e != null && h === `playground` && U?.id === H && ir(e),
          e != null && U != null && !U.loading && Ve.current !== U.id && ((Ve.current = U.id), u?.(q(U))));
      }),
      (t[65] = U),
      (t[66] = u),
      (t[67] = H),
      (t[68] = q),
      (t[69] = h),
      (t[70] = xt))
    : (xt = t[70]);
  let St = se(xt),
    Ct;
  t[71] !== U || t[72] !== i.editStateRef?.current?.isEditing || t[73] !== G || t[74] !== C || t[75] !== ot
    ? ((Ct = (e) => {
        if (
          i.editStateRef?.current?.isEditing ||
          e.defaultPrevented ||
          e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.isComposing ||
          e.keyCode === 229 ||
          (e.key !== `ArrowUp` && e.key !== `ArrowDown`) ||
          !(e.target instanceof HTMLElement) ||
          U == null
        )
          return;
        let t =
          C &&
          e.target.closest(
            `[data-image-preview-composer] [contenteditable="true"], [data-image-preview-composer] textarea`,
          ) != null;
        if (
          !t &&
          (e.target.isContentEditable ||
            e.target.closest(`input, textarea, select, button, [role="slider"], [contenteditable="true"]`) !=
              null)
        )
          return;
        let n = G.findIndex((e) => e.id === U.id);
        if (n < 0) return;
        (e.preventDefault(), t && e.stopPropagation());
        let r = G[n + (e.key === `ArrowUp` ? -1 : 1)];
        r != null && ot(r);
      }),
      (t[71] = U),
      (t[72] = i.editStateRef?.current?.isEditing),
      (t[73] = G),
      (t[74] = C),
      (t[75] = ot),
      (t[76] = Ct))
    : (Ct = t[76]);
  let wt = (0, Q.useEffectEvent)(Ct),
    Tt = !X && h === `single` && U != null && G.length > 1,
    Et;
  t[77] !== wt || t[78] !== C || t[79] !== V || t[80] !== Tt
    ? ((Et = () => {
        let e = V?.closest(`[role="tabpanel"], [role="dialog"]`);
        if (Tt && e != null)
          return (
            e.addEventListener(`keydown`, wt, C),
            () => {
              e.removeEventListener(`keydown`, wt, C);
            }
          );
      }),
      (t[77] = wt),
      (t[78] = C),
      (t[79] = V),
      (t[80] = Tt),
      (t[81] = Et))
    : (Et = t[81]);
  let Dt;
  if (
    (t[82] !== C || t[83] !== V || t[84] !== Tt
      ? ((Dt = [C, V, Tt]), (t[82] = C), (t[83] = V), (t[84] = Tt), (t[85] = Dt))
      : (Dt = t[85]),
    (0, Q.useEffect)(Et, Dt),
    U == null)
  ) {
    let e;
    t[86] !== i.zoom || t[87] !== ue
      ? ((e = i.zoom ?? { manualZoomPercent: ue, onZoomPercentChange: pe, onZoomToFit: () => pe(null) }),
        (t[86] = i.zoom),
        (t[87] = ue),
        (t[88] = e))
      : (e = t[88]);
    let n;
    return (
      t[89] !== i || t[90] !== e
        ? ((n = (0, $.jsx)(dn, { ...i, zoom: e })), (t[89] = i), (t[90] = e), (t[91] = n))
        : (n = t[91]),
      n
    );
  }
  let Ot;
  t[92] !== X ||
  t[93] !== p ||
  t[94] !== ce ||
  t[95] !== J ||
  t[96] !== g ||
  t[97] !== D ||
  t[98] !== h ||
  t[99] !== A
    ? ((Ot = (e) => {
        if (X || e === h) return;
        let t = He.current;
        (t != null && ((He.current = null), (t.oncancel = null), (t.onfinish = null), t.cancel(), he(!1)),
          Ne(g, {
            availableImageCount: J.length,
            entrypoint: `view_toggle`,
            imageSource: `generated`,
            view: e === `playground` ? `canvas` : `single`,
          }));
        let n = rr(Be.current);
        (he(!0),
          (0, sr.flushSync)(() => {
            p(e);
          }));
        let r = Be.current;
        e === `playground` && r != null && ir(r);
        let i = rr(r);
        if (D || n == null || i == null || r == null || typeof r.animate != `function`) {
          he(!1);
          return;
        }
        let a = r.animate(
          [
            { transform: ar(n, i, A, e === `playground` ? ce / 100 : 1), transformOrigin: `top left` },
            { transform: `none`, transformOrigin: `top left` },
          ],
          { duration: 450, easing: `cubic-bezier(0.22, 1, 0.36, 1)`, fill: `both` },
        );
        He.current = a;
        let o = () => {
          He.current === a &&
            ((He.current = null), (a.oncancel = null), (a.onfinish = null), he(!1), a.cancel());
        };
        ((a.oncancel = o), (a.onfinish = o));
      }),
      (t[92] = X),
      (t[93] = p),
      (t[94] = ce),
      (t[95] = J),
      (t[96] = g),
      (t[97] = D),
      (t[98] = h),
      (t[99] = A),
      (t[100] = Ot))
    : (Ot = t[100]);
  let kt = Ot,
    Mt;
  t[101] !== kt ||
  t[102] !== r ||
  t[103] !== X ||
  t[104] !== C ||
  t[105] !== g ||
  t[106] !== st ||
  t[107] !== h
    ? ((Mt =
        !C && r != null
          ? (0, $.jsx)(`div`, {
              className: S(`contents`, X && `invisible`),
              inert: X,
              children: (0, $.jsx)(Hn, {
                placement: `flow`,
                shouldShowCoachmark: st && !X,
                onDismissCoachmark: () => {
                  (Le(!0), g.set(fr, !0));
                },
                view: h,
                onViewChange: kt,
              }),
            })
          : null),
      (t[101] = kt),
      (t[102] = r),
      (t[103] = X),
      (t[104] = C),
      (t[105] = g),
      (t[106] = st),
      (t[107] = h),
      (t[108] = Mt))
    : (Mt = t[108]);
  let Nt = Mt,
    Ft;
  t[109] === Y
    ? (Ft = t[110])
    : ((Ft = Y != null && !Y.loading ? (Y.displayVariants ?? []) : []), (t[109] = Y), (t[110] = Ft));
  let It = Ft,
    Lt = U.loading ? `original` : (U.displayVariantId ?? `original`),
    Rt;
  t[111] !== U.id ||
  t[112] !== It ||
  t[113] !== _ ||
  t[114] !== X ||
  t[115] !== Y ||
  t[116] !== g ||
  t[117] !== Lt ||
  t[118] !== I
    ? ((Rt = (e) =>
        Y != null && !Y.loading && It.length > 0
          ? (0, $.jsx)(f, {
              label: _.formatMessage({
                id: `codex.imageGen.displayVariant`,
                defaultMessage: `Image display`,
                description: `Accessible label for choosing which version of an image to display, such as an animation, a grid of frames, or the original image.`,
              }),
              children: (0, $.jsx)(Ge, {
                variant: `viewer`,
                selectedId: Lt,
                options: [
                  ...It.map(qn),
                  {
                    id: `original`,
                    label: Y.isAnimated
                      ? (0, $.jsx)(B, {
                          id: `codex.imageGen.animationGif`,
                          defaultMessage: `Gif`,
                          description: `Compact image viewer toggle option. Plays the animated GIF. The other option, Sheet, shows the editable grid of frames. Keep the GIF file format name.`,
                        })
                      : (0, $.jsx)(B, {
                          id: `codex.imageGen.displayVariant.original`,
                          defaultMessage: `Original`,
                          description: `Compact image viewer option that displays the original image instead of one of its alternate versions.`,
                        }),
                  },
                ].map((t) => ({ ...t, disabled: X || e })),
                onSelect: (e) => {
                  e !== Lt && (je(g, U.id), be(g, I, U.id, e), pe(null));
                },
              }),
            })
          : null),
      (t[111] = U.id),
      (t[112] = It),
      (t[113] = _),
      (t[114] = X),
      (t[115] = Y),
      (t[116] = g),
      (t[117] = Lt),
      (t[118] = I),
      (t[119] = Rt))
    : (Rt = t[119]);
  let zt = Rt,
    Bt;
  t[120] !== U ||
  t[121] !== r ||
  t[122] !== i ||
  t[123] !== o ||
  t[124] !== _ ||
  t[125] !== rt ||
  t[126] !== Ze ||
  t[127] !== $e ||
  t[128] !== Y ||
  t[129] !== V ||
  t[130] !== zt ||
  t[131] !== g ||
  t[132] !== St ||
  t[133] !== qe ||
  t[134] !== ue ||
  t[135] !== xe ||
  t[136] !== Nt ||
  t[137] !== I
    ? ((Bt = U.loading
        ? (0, $.jsx)(dn, {
            ...i,
            headerViewControl: Nt,
            renderHeaderLeadingControls: (e) => {
              let { navigationDisabled: t } = e;
              return zt(t);
            },
            hasImageRail: qe,
            loadingContent: (0, $.jsx)(nr, { sourceImage: Ze, conversationId: r, imageAssetResolver: o }),
          })
        : (0, $.jsx)(
            tr,
            {
              activeImage: U,
              clipboardScope: V,
              conversationId: r,
              fallbackImage: {
                ...i,
                viewerId: I,
                headerViewControl: Nt,
                buildCommentPrompt:
                  U.displayVariantId != null && Y != null && !Y.loading && Y.isAnimated
                    ? (e) =>
                        Xt(g, {
                          animation: Y,
                          conversationId: i.chatGptConversationId,
                          imageAssetResolver: o,
                          viewerId: I,
                          intl: _,
                          comments: e,
                        })
                    : i.buildCommentPrompt,
                onImageEditSubmitStatusChange: (e) => {
                  (ye((t) => (e === `pending` ? U.id : t === U.id ? null : t)),
                    i.onImageEditSubmitStatusChange?.(e));
                },
              },
              focusedImageRef: St,
              hasImageRail: qe,
              imageAssetResolver: o,
              loadingPreviewSource: Ze,
              manualZoomPercent: ue,
              onManualZoomPercentChange: pe,
              onImageLoad: $e,
              onPanoramaInteraction: (e, t) => {
                if (t === `360Impression`) {
                  if (k.current.has(e)) return;
                  k.current.add(e);
                }
                i.onPanoramaInteraction?.(e, t);
              },
              removeMode: {
                active: rt,
                onActiveChange: (e) => _e((t) => (e ? U.id : t === U.id ? null : t)),
              },
              sizeControlContainer: xe,
              renderHeaderLeadingControls: (e) => {
                let { navigationDisabled: t } = e;
                return zt(t);
              },
            },
            U.id,
          )),
      (t[120] = U),
      (t[121] = r),
      (t[122] = i),
      (t[123] = o),
      (t[124] = _),
      (t[125] = rt),
      (t[126] = Ze),
      (t[127] = $e),
      (t[128] = Y),
      (t[129] = V),
      (t[130] = zt),
      (t[131] = g),
      (t[132] = St),
      (t[133] = qe),
      (t[134] = ue),
      (t[135] = xe),
      (t[136] = Nt),
      (t[137] = I),
      (t[138] = Bt))
    : (Bt = t[138]);
  let Vt = Bt,
    Ht = !C && `bg-surface-secondary`,
    Ut = !C && E && `[--viewer-header-start-inset:var(--app-shell-titlebar-left-inset,0px)]`,
    Wt = w && `flex flex-col`,
    Gt = me && `pointer-events-none`,
    Kt;
  t[139] !== Ht || t[140] !== Ut || t[141] !== Wt || t[142] !== Gt
    ? ((Kt = S(`relative h-full min-h-0 min-w-0 w-full`, Ht, Ut, Wt, Gt)),
      (t[139] = Ht),
      (t[140] = Ut),
      (t[141] = Wt),
      (t[142] = Gt),
      (t[143] = Kt))
    : (Kt = t[143]);
  let qt;
  t[144] !== It || t[145] !== r || t[146] !== Te || t[147] !== o || t[148] !== Y || t[149] !== Me
    ? ((qt =
        Te &&
        Y != null &&
        !Y.loading &&
        Me === Y.src &&
        It.map((e) =>
          (0, $.jsx)(er, { src: e.asset.src, conversationId: r, imageAssetResolver: o }, e.asset.src),
        )),
      (t[144] = It),
      (t[145] = r),
      (t[146] = Te),
      (t[147] = o),
      (t[148] = Y),
      (t[149] = Me),
      (t[150] = qt))
    : (qt = t[150]);
  let Jt;
  t[151] !== w || t[152] !== zt || t[153] !== Nt
    ? ((Jt = w
        ? null
        : (0, $.jsxs)(`div`, {
            className: `absolute start-[calc(var(--spacing)*2+var(--viewer-header-start-inset,0px))] top-2 z-40 flex items-center gap-2`,
            children: [Nt, zt(!1)],
          })),
      (t[151] = w),
      (t[152] = zt),
      (t[153] = Nt),
      (t[154] = Jt))
    : (Jt = t[154]);
  let Yt;
  t[155] !== r || t[156] !== X || t[157] !== C
    ? ((Yt = null), (t[155] = r), (t[156] = X), (t[157] = C), (t[158] = Yt))
    : (Yt = t[158]);
  let Zt;
  t[159] !== U.id ||
  t[160] !== U.loading ||
  t[161] !== U.sourceImage ||
  t[162] !== U.tabTitle ||
  t[163] !== Vt ||
  t[164] !== r ||
  t[165] !== i ||
  t[166] !== W ||
  t[167] !== G ||
  t[168] !== o ||
  t[169] !== c ||
  t[170] !== X ||
  t[171] !== C ||
  t[172] !== w ||
  t[173] !== me ||
  t[174] !== $e ||
  t[175] !== d ||
  t[176] !== H ||
  t[177] !== ce ||
  t[178] !== zt ||
  t[179] !== ot ||
  t[180] !== St ||
  t[181] !== qe ||
  t[182] !== D ||
  t[183] !== h ||
  t[184] !== Nt
    ? ((Zt =
        !C && h === `playground` && r != null
          ? (0, $.jsx)(`div`, {
              className: w ? `relative min-h-0 flex-1` : `contents`,
              children: (0, $.jsx)(Nn, {
                activeImageId: U.id,
                conversationId: r,
                focusedImageRef: St,
                groups: W,
                imageAssetResolver: o,
                initialTool: c,
                isViewTransitioning: me && !D,
                onGeneratedImageSelection: d,
                onImageLoad: $e,
                onSelectImage: ot,
                onZoomPercentChange: z,
                renderHeader: w
                  ? (e) => {
                      let { zoomControl: t, navigationDisabled: n } = e,
                        r = (e) =>
                          (0, $.jsx)(ln, {
                            title: U.loading ? (i.title ?? i.alt) : U.tabTitle,
                            image: U.loading ? void 0 : U.sourceImage,
                            navigationDisabled: X || n,
                            readOnly: i.readOnly ?? !1,
                            children: e,
                          });
                      return (0, $.jsx)(T, {
                        density: `surface`,
                        leading: [
                          {
                            id: `title`,
                            content:
                              i.renderHeaderMenuActions?.({
                                image: U.loading ? void 0 : U.sourceImage,
                                imageId: U.id,
                                isImageActionsDisabled: X || n,
                                isUnifiedViewerEnabled: !0,
                                renderMenu: r,
                              }) ?? r(null),
                            hidePriority: 4,
                          },
                          { id: `view-controls`, content: Nt, hidePriority: 5 },
                          { id: `animation-view`, content: zt(n) },
                        ],
                        trailing: [
                          { id: `zoom`, content: t, hidePriority: 3 },
                          { id: `window-controls`, content: i.headerWindowControls },
                        ],
                      });
                    }
                  : void 0,
                zoomPercent: ce,
              }),
            })
          : (0, $.jsxs)(`div`, {
              className: `flex h-full min-h-0`,
              children: [
                qe
                  ? (0, $.jsxs)(`div`, {
                      className: `pointer-events-none relative flex h-full w-18 shrink-0`,
                      children: [
                        (0, $.jsx)($n, {
                          activeId: U.id,
                          autoScrollImageId: H,
                          images: G,
                          conversationId: r,
                          imageAssetResolver: o,
                          hidden: X,
                          isOverlay: C,
                          isUnifiedViewerEnabled: w,
                          onAddToChat: d,
                          onDownloaded: i.onDownloaded,
                          onSelect: ot,
                        }),
                        (0, $.jsx)(`div`, {
                          ref: we,
                          className: `[container-type:size] pointer-events-none absolute inset-0 z-30 flex items-center justify-center pt-[var(--right-panel-composer-overlay-top-reserve,0px)] pb-[var(--right-panel-composer-overlay-reserve,0px)]`,
                        }),
                      ],
                    })
                  : null,
                (0, $.jsx)(`div`, { className: `min-w-0 flex-1`, children: Vt }),
              ],
            })),
      (t[159] = U.id),
      (t[160] = U.loading),
      (t[161] = U.sourceImage),
      (t[162] = U.tabTitle),
      (t[163] = Vt),
      (t[164] = r),
      (t[165] = i),
      (t[166] = W),
      (t[167] = G),
      (t[168] = o),
      (t[169] = c),
      (t[170] = X),
      (t[171] = C),
      (t[172] = w),
      (t[173] = me),
      (t[174] = $e),
      (t[175] = d),
      (t[176] = H),
      (t[177] = ce),
      (t[178] = zt),
      (t[179] = ot),
      (t[180] = St),
      (t[181] = qe),
      (t[182] = D),
      (t[183] = h),
      (t[184] = Nt),
      (t[185] = Zt))
    : (Zt = t[185]);
  let Qt;
  return (
    t[186] !== Kt || t[187] !== qt || t[188] !== Jt || t[189] !== Yt || t[190] !== Zt
      ? ((Qt = (0, $.jsxs)(`div`, { ref: ze, className: Kt, children: [qt, Jt, Yt, Zt] })),
        (t[186] = Kt),
        (t[187] = qt),
        (t[188] = Jt),
        (t[189] = Yt),
        (t[190] = Zt),
        (t[191] = Qt))
      : (Qt = t[191]),
    Qt
  );
}
function qn(e) {
  return { id: e.id, label: (0, $.jsx)(B, { ...e.label }) };
}
function Jn(e) {
  return !e.loading;
}
function Yn(e) {
  return e.loading;
}
function Xn(e) {
  return !e.loading;
}
function Zn(e) {
  return e.images;
}
function Qn(e) {
  return e.images;
}
function $n(e) {
  let t = (0, or.c)(48),
    {
      activeId: n,
      autoScrollImageId: r,
      images: i,
      conversationId: a,
      imageAssetResolver: o,
      hidden: s,
      isOverlay: c,
      isUnifiedViewerEnabled: l,
      onAddToChat: u,
      onDownloaded: d,
      onSelect: f,
    } = e,
    p = fe(),
    m = c && !0,
    g;
  if (t[0] !== n || t[1] !== i) {
    let e;
    (t[3] === n ? (e = t[4]) : ((e = (e) => e.id === n), (t[3] = n), (t[4] = e)),
      (g = i.findIndex(e)),
      (t[0] = n),
      (t[1] = i),
      (t[2] = g));
  } else g = t[2];
  let _ = Math.max(g, 0),
    v = (0, Q.useRef)(null),
    y = (0, Q.useRef)(null),
    b = (0, Q.useRef)(ur + _ * lr + cr / 2),
    x = 12 + (i.length - 1) * lr + cr,
    C,
    w;
  (t[5] !== n || t[6] !== r || t[7] !== i.length
    ? ((C = () => {
        let e = v.current;
        e != null &&
          r != null &&
          r === n &&
          y.current !== r &&
          ((y.current = r),
          (b.current = ur + (i.length - 1) * lr + cr / 2),
          e.scrollTo({ top: e.scrollHeight }));
      }),
      (w = [n, r, i.length]),
      (t[5] = n),
      (t[6] = r),
      (t[7] = i.length),
      (t[8] = C),
      (t[9] = w))
    : ((C = t[8]), (w = t[9])),
    (0, Q.useLayoutEffect)(C, w));
  let T;
  t[10] === x
    ? (T = t[11])
    : ((T = (e, t) => {
        let n = Math.min(x, t.clientHeight) / 2;
        return Math.min(Math.max(e - n, 0), t.scrollHeight - t.clientHeight);
      }),
      (t[10] = x),
      (t[11] = T));
  let E = T,
    D,
    O,
    k,
    A,
    j;
  if (
    t[12] !== n ||
    t[13] !== _ ||
    t[14] !== a ||
    t[15] !== E ||
    t[16] !== m ||
    t[17] !== s ||
    t[18] !== o ||
    t[19] !== i ||
    t[20] !== p ||
    t[21] !== l ||
    t[22] !== u ||
    t[23] !== d ||
    t[24] !== f
  ) {
    let e = (e) => {
      let t = i[e];
      if (t == null) return;
      let n = ur + e * lr + cr / 2;
      ((b.current = n), f(t));
      let r = v.current;
      r?.scrollTo({ top: E(n, r) });
    };
    t[30] === E
      ? (D = t[31])
      : ((D = (e) => {
          e != null && v.current == null && ((e.scrollTop = E(b.current, e)), (v.current = e));
        }),
        (t[30] = E),
        (t[31] = D));
    let r = !l && `mt-10`,
      c = l && `mt-14`,
      g = s && `invisible`;
    (t[32] !== r || t[33] !== c || t[34] !== g
      ? ((O = S(
          `pointer-events-auto relative z-10 w-18 shrink-0 [scrollbar-width:none] overflow-y-auto py-1.5 ps-0.5 [&::-webkit-scrollbar]:hidden`,
          r,
          c,
          g,
        )),
        (t[32] = r),
        (t[33] = c),
        (t[34] = g),
        (t[35] = O))
      : (O = t[35]),
      (k = s),
      t[36] !== n || t[37] !== E || t[38] !== i || t[39] !== f
        ? ((A = (e) => {
            if (e.ctrlKey) return;
            e.preventDefault();
            let t =
                e.deltaMode === WheelEvent.DOM_DELTA_LINE
                  ? e.deltaY * 16
                  : e.deltaMode === WheelEvent.DOM_DELTA_PAGE
                    ? e.deltaY * e.currentTarget.clientHeight
                    : e.deltaY,
              r = Math.min(Math.max(b.current + t, 29), ur + (i.length - 1) * lr + cr / 2);
            ((b.current = r), (e.currentTarget.scrollTop = E(r, e.currentTarget)));
            let a = Math.round((r - ur - cr / 2) / lr),
              o = i[a];
            o != null && o.id !== n && f(o);
          }),
          (t[36] = n),
          (t[37] = E),
          (t[38] = i),
          (t[39] = f),
          (t[40] = A))
        : (A = t[40]),
      (j = i.map((t, r) => {
        let s = t.id === n;
        return (0, $.jsx)(
          h.button,
          {
            type: `button`,
            animate: { opacity: s || m ? 1 : 0.34, scale: s ? 1.2 : 0.95 },
            "aria-current": s ? `true` : void 0,
            "aria-label": t.loading
              ? p.formatMessage({
                  id: `codex.chatGptConversation.imageGeneration.loadingLabel`,
                  defaultMessage: `Generating image...`,
                  description: `Aria label for the image generation loading placeholder`,
                })
              : t.alt,
            className: S(
              `mx-auto mb-2 flex cursor-interaction overflow-hidden rounded-lg border border-default focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
              m ? `bg-surface` : !t.loading && `bg-surface-secondary/85`,
            ),
            style: { height: cr, width: cr },
            initial: !1,
            transition: { duration: 0.12 },
            onClick: () => {
              e(r);
            },
            onKeyDown: (t) => {
              let n =
                t.key === `ArrowUp` || t.key === `ArrowLeft`
                  ? -1
                  : +(t.key === `ArrowDown` || t.key === `ArrowRight`);
              if (n === 0) return;
              t.preventDefault();
              let r = _ + n;
              r < 0 || r >= i.length || e(r);
            },
            children: t.loading
              ? (0, $.jsx)(Lt, { presentation: `thumbnail` })
              : (0, $.jsx)(pr, {
                  image: t,
                  conversationId: a,
                  imageAssetResolver: o,
                  onAddToChat: u,
                  onDownloaded: () => d?.(t.id),
                }),
          },
          t.id,
        );
      })),
      (t[12] = n),
      (t[13] = _),
      (t[14] = a),
      (t[15] = E),
      (t[16] = m),
      (t[17] = s),
      (t[18] = o),
      (t[19] = i),
      (t[20] = p),
      (t[21] = l),
      (t[22] = u),
      (t[23] = d),
      (t[24] = f),
      (t[25] = D),
      (t[26] = O),
      (t[27] = k),
      (t[28] = A),
      (t[29] = j));
  } else ((D = t[25]), (O = t[26]), (k = t[27]), (A = t[28]), (j = t[29]));
  let M;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsx)(`div`, { style: { height: `calc(50% - ${cr / 2}px)` } })), (t[41] = M))
    : (M = t[41]);
  let N;
  return (
    t[42] !== D || t[43] !== O || t[44] !== k || t[45] !== A || t[46] !== j
      ? ((N = (0, $.jsxs)(`div`, { ref: D, className: O, inert: k, onWheel: A, children: [j, M] })),
        (t[42] = D),
        (t[43] = O),
        (t[44] = k),
        (t[45] = A),
        (t[46] = j),
        (t[47] = N))
      : (N = t[47]),
    N
  );
}
function er(e) {
  let t = (0, or.c)(6),
    { src: n, conversationId: r, imageAssetResolver: i } = e,
    a;
  t[0] !== r || t[1] !== i || t[2] !== n
    ? ((a = { src: n, conversationId: r, imageAssetResolver: i, shouldLoadFileDataUrl: !1 }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = n),
      (t[3] = a))
    : (a = t[3]);
  let { previewSrc: o } = Bt(a),
    s;
  return (
    t[4] === o
      ? (s = t[5])
      : ((s =
          o == null
            ? null
            : (0, $.jsx)(`img`, {
                alt: ``,
                src: o,
                hidden: !0,
                loading: `eager`,
                decoding: `async`,
                fetchPriority: `low`,
                referrerPolicy: `no-referrer`,
              })),
        (t[4] = o),
        (t[5] = s)),
    s
  );
}
function tr(e) {
  let t = (0, or.c)(61),
    {
      activeImage: n,
      clipboardScope: r,
      conversationId: i,
      fallbackImage: a,
      focusedImageRef: o,
      hasImageRail: s,
      imageAssetResolver: c,
      loadingPreviewSource: l,
      manualZoomPercent: u,
      onPanoramaInteraction: d,
      removeMode: f,
      sizeControlContainer: p,
      footerActions: m,
      renderHeaderLeadingControls: h,
      onManualZoomPercentChange: g,
      onImageLoad: _,
    } = e,
    v = fe(),
    { onImageEditSubmit: y } = a,
    b;
  t[0] !== n.src || t[1] !== i || t[2] !== c
    ? ((b = { src: n.src, conversationId: i, imageAssetResolver: c, shouldLoadFileDataUrl: !1 }),
      (t[0] = n.src),
      (t[1] = i),
      (t[2] = c),
      (t[3] = b))
    : (b = t[3]);
  let { downloadSrc: x, previewSrc: S, isError: C, refetch: w, deleted: T, onImageError: E } = Bt(b),
    D;
  if (S == null) {
    let e;
    (t[4] !== i || t[5] !== c || t[6] !== v || t[7] !== C || t[8] !== l || t[9] !== w
      ? ((e = C
          ? (0, $.jsxs)(X, {
              className: `flex-col gap-3 select-none`,
              children: [
                (0, $.jsx)(`span`, {
                  role: `status`,
                  children: (0, $.jsx)(B, {
                    id: `codex.generatedImage.sourceUnavailable`,
                    defaultMessage: `Image unavailable`,
                    description: `Shown when a generated image could not be downloaded for the image viewer`,
                  }),
                }),
                (0, $.jsx)(te, {
                  color: `secondary`,
                  onClick: w,
                  children: (0, $.jsx)(B, {
                    id: `codex.generatedImage.retrySource`,
                    defaultMessage: `Retry`,
                    description: `Button to retry downloading a generated image that failed to load in the image viewer`,
                  }),
                }),
              ],
            })
          : (0, $.jsx)(nr, {
              ariaLabel: v.formatMessage({
                id: `codex.generatedImage.loadingSource`,
                defaultMessage: `Loading image…`,
                description: `Accessible label while an existing generated image is being downloaded for display`,
              }),
              sourceImage: l,
              conversationId: i,
              imageAssetResolver: c,
            })),
        (t[4] = i),
        (t[5] = c),
        (t[6] = v),
        (t[7] = C),
        (t[8] = l),
        (t[9] = w),
        (t[10] = e))
      : (e = t[10]),
      (D = e));
  }
  if (T != null) {
    let e;
    if (
      (t[11] !== T || t[12] !== c
        ? ((e = (0, $.jsx)(Yt, { deleted: T, imageAssetResolver: c })), (t[11] = T), (t[12] = c), (t[13] = e))
        : (e = t[13]),
      (D = e),
      a.presentation !== `overlay` && n.displayVariantId == null)
    )
      return D;
  }
  if (
    a.presentation !== `overlay` &&
    n.displayVariantId == null &&
    c?.validationSessionId != null &&
    S == null
  ) {
    let e;
    return (
      t[14] === D
        ? (e = t[15])
        : ((e = (0, $.jsx)(`div`, {
            className: `[container-type:size] flex size-full items-center justify-center overflow-hidden p-4`,
            children: D,
          })),
          (t[14] = D),
          (t[15] = e)),
      e
    );
  }
  let O = n.alt,
    k;
  t[16] === n.id ? (k = t[17]) : ((k = De(n.id)), (t[16] = n.id), (t[17] = k));
  let A = n.src,
    j = x ?? S ?? n.src,
    M = D,
    N;
  t[18] !== a.imageRef || t[19] !== o
    ? ((N = ne(o, a.imageRef)), (t[18] = a.imageRef), (t[19] = o), (t[20] = N))
    : (N = t[20]);
  let ee = n.id === a.imageId ? a.initialEditTool : void 0,
    P;
  t[21] !== a || t[22] !== E
    ? ((P = () => {
        (E?.(), a.onImageError?.());
      }),
      (t[21] = a),
      (t[22] = E),
      (t[23] = P))
    : (P = t[23]);
  let F = S == null ? void 0 : n,
    I;
  t[24] !== n.displayVariantId || t[25] !== n.id || t[26] !== y
    ? ((I = y == null ? void 0 : (e, t) => y({ ...e, imageId: n.id, imageVariant: n.displayVariantId }, t)),
      (t[24] = n.displayVariantId),
      (t[25] = n.id),
      (t[26] = y),
      (t[27] = I))
    : (I = t[27]);
  let re = S ?? ``,
    L;
  t[28] === g ? (L = t[29]) : ((L = () => g(null)), (t[28] = g), (t[29] = L));
  let ie;
  t[30] !== u || t[31] !== g || t[32] !== L
    ? ((ie = { manualZoomPercent: u, onZoomPercentChange: g, onZoomToFit: L }),
      (t[30] = u),
      (t[31] = g),
      (t[32] = L),
      (t[33] = ie))
    : (ie = t[33]);
  let ae;
  return (
    t[34] !== n.alt ||
    t[35] !== n.id ||
    t[36] !== n.isAnimated ||
    t[37] !== n.sourceImage ||
    t[38] !== n.src ||
    t[39] !== n.tabTitle ||
    t[40] !== r ||
    t[41] !== a ||
    t[42] !== m ||
    t[43] !== s ||
    t[44] !== c ||
    t[45] !== _ ||
    t[46] !== d ||
    t[47] !== f ||
    t[48] !== h ||
    t[49] !== p ||
    t[50] !== F ||
    t[51] !== I ||
    t[52] !== re ||
    t[53] !== ie ||
    t[54] !== k ||
    t[55] !== j ||
    t[56] !== N ||
    t[57] !== ee ||
    t[58] !== P ||
    t[59] !== D
      ? ((ae = (0, $.jsx)(dn, {
          ...a,
          alt: O,
          attachmentId: k,
          attachmentSrc: A,
          imageAssetResolver: c,
          clipboardScope: r,
          downloadSrc: j,
          hasImageRail: s,
          loadingContent: M,
          imageRef: N,
          onImageLoad: _,
          imageId: n.id,
          initialEditTool: ee,
          onPanoramaInteraction: d,
          onImageError: P,
          panoramaImage: F,
          sourceImage: n.sourceImage,
          isAnimated: n.isAnimated,
          readOnly: a.readOnly,
          removeMode: f,
          sizeControlContainer: p,
          footerActions: m,
          title: n.tabTitle,
          renderHeaderLeadingControls: h,
          onImageEditSubmit: I,
          referrerPolicy: `no-referrer`,
          src: re,
          zoom: ie,
        })),
        (t[34] = n.alt),
        (t[35] = n.id),
        (t[36] = n.isAnimated),
        (t[37] = n.sourceImage),
        (t[38] = n.src),
        (t[39] = n.tabTitle),
        (t[40] = r),
        (t[41] = a),
        (t[42] = m),
        (t[43] = s),
        (t[44] = c),
        (t[45] = _),
        (t[46] = d),
        (t[47] = f),
        (t[48] = h),
        (t[49] = p),
        (t[50] = F),
        (t[51] = I),
        (t[52] = re),
        (t[53] = ie),
        (t[54] = k),
        (t[55] = j),
        (t[56] = N),
        (t[57] = ee),
        (t[58] = P),
        (t[59] = D),
        (t[60] = ae))
      : (ae = t[60]),
    ae
  );
}
function nr(e) {
  let t = (0, or.c)(7),
    { ariaLabel: n, sourceImage: r, conversationId: i, imageAssetResolver: a } = e,
    o = r?.src ?? ``,
    s;
  t[0] !== i || t[1] !== a || t[2] !== o
    ? ((s = { src: o, conversationId: i, imageAssetResolver: a, shouldLoadFileDataUrl: !1 }),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o),
      (t[3] = s))
    : (s = t[3]);
  let { previewSrc: c } = Bt(s),
    l = c ?? void 0,
    u;
  return (
    t[4] !== n || t[5] !== l
      ? ((u = (0, $.jsx)(Lt, { ariaLabel: n, presentation: `single`, previewSrc: l })),
        (t[4] = n),
        (t[5] = l),
        (t[6] = u))
      : (u = t[6]),
    u
  );
}
function rr(e) {
  let t = e?.getBoundingClientRect();
  return t == null || t.width <= 0 || t.height <= 0 ? null : t;
}
function ir(e) {
  let t = e.closest(`[data-generated-image-playground-scroll]`),
    n = t != null && e.getBoundingClientRect().right > t.getBoundingClientRect().right;
  e.scrollIntoView({ block: `start`, inline: n ? `center` : `nearest` });
}
function ar(e, t, n, r) {
  return `translate(${Number((_e(e.left - t.left, n) / r).toFixed(4))}px, ${Number((_e(e.top - t.top, n) / r).toFixed(4))}px) scale(${Number((e.width / t.width).toFixed(4))}, ${Number((e.height / t.height).toFixed(4))})`;
}
var or, Q, sr, $, cr, lr, ur, dr, fr, pr;
function mr() {
  return (mr = e(() => {
    ((or = E()),
      dt(),
      C(),
      m(),
      L(),
      (Q = d()),
      (sr = p()),
      P(),
      st(),
      $e(),
      he(),
      Fe(),
      re(),
      oe(),
      A(),
      Y(),
      H(),
      j(),
      U(),
      kt(),
      St(),
      Mt(),
      z(),
      Me(),
      ut(),
      v(),
      ce(),
      F(),
      Jt(),
      Le(),
      Ht(),
      Rt(),
      Vn(),
      ft(),
      Gn(),
      Vt(),
      sn(),
      Zt(),
      nn(),
      It(),
      on(),
      Ft(),
      ($ = y()),
      (cr = 46),
      (lr = 54),
      (ur = 6),
      (dr = 100),
      (fr = xe(`has-dismissed-image-canvas-view-coachmark-v1`, !1)),
      (pr = (0, Q.memo)(function (e) {
        let r = (0, or.c)(23),
          { image: i, conversationId: a, imageAssetResolver: o, onAddToChat: s, onDownloaded: c } = e,
          l = n(Ce),
          u = fe(),
          d = o?.validationSessionId == null ? i.previewSrc : i.src,
          f;
        r[0] !== a || r[1] !== o || r[2] !== d
          ? ((f = { src: d, conversationId: a, imageAssetResolver: o, shouldLoadFileDataUrl: !1 }),
            (r[0] = a),
            (r[1] = o),
            (r[2] = d),
            (r[3] = f))
          : (f = r[3]);
        let { previewSrc: p, isError: m, deleted: h, onImageError: _ } = Bt(f);
        if (h != null) {
          let e;
          return (
            r[4] === h
              ? (e = r[5])
              : ((e = (0, $.jsx)(Yt, { deleted: h, compact: !0 })), (r[4] = h), (r[5] = e)),
            e
          );
        }
        if (p == null) {
          let e;
          return (
            r[6] !== u || r[7] !== m
              ? ((e = m
                  ? (0, $.jsx)(`span`, {
                      className: `flex size-full items-center justify-center text-secondary`,
                      role: `img`,
                      "aria-label": u.formatMessage({
                        id: `codex.generatedImage.thumbnailUnavailable`,
                        defaultMessage: `Image unavailable`,
                        description: `Accessible label for a generated image thumbnail whose download failed; selecting it opens the viewer with a retry button`,
                      }),
                      children: (0, $.jsx)(g, {}),
                    })
                  : (0, $.jsx)(zt, { className: `size-full`, "aria-busy": !0 })),
                (r[6] = u),
                (r[7] = m),
                (r[8] = e))
              : (e = r[8]),
            e
          );
        }
        let v;
        r[9] !== i || r[10] !== o || r[11] !== u || r[12] !== s || r[13] !== c || r[14] !== p || r[15] !== l
          ? ((v = () =>
              Ut(l, {
                displaySrc: p,
                image: i,
                imageAssetResolver: o,
                intl: u,
                onAddToChat: s,
                onDownloaded: c,
              })),
            (r[9] = i),
            (r[10] = o),
            (r[11] = u),
            (r[12] = s),
            (r[13] = c),
            (r[14] = p),
            (r[15] = l),
            (r[16] = v))
          : (v = r[16]);
        let y;
        r[17] !== _ || r[18] !== p
          ? ((y = (0, $.jsx)(`img`, {
              alt: ``,
              className: `size-full rounded-lg object-cover`,
              decoding: `async`,
              loading: `lazy`,
              onError: _,
              referrerPolicy: `no-referrer`,
              src: p,
            })),
            (r[17] = _),
            (r[18] = p),
            (r[19] = y))
          : (y = r[19]);
        let b;
        return (
          r[20] !== v || r[21] !== y
            ? ((b = (0, $.jsx)(t, { getItems: v, children: y })), (r[20] = v), (r[21] = y), (r[22] = b))
            : (b = r[22]),
          b
        );
      })));
  }))();
}
function hr(e) {
  let t = (0, vr.c)(26),
    r,
    i;
  t[0] === e
    ? ((r = t[1]), (i = t[2]))
    : (({ initialImages: r, ...i } = e), (t[0] = e), (t[1] = r), (t[2] = i));
  let a = n(Ie),
    o = le(at),
    s = a.value,
    c;
  t[3] !== s.conversationId || t[4] !== s.routeKind
    ? ((c = s.routeKind === `chatgpt-thread` ? Te(s.conversationId) : null),
      (t[3] = s.conversationId),
      (t[4] = s.routeKind),
      (t[5] = c))
    : (c = t[5]);
  let l = c,
    u = fe(),
    d = de(Tt, l),
    f = de(qe, l),
    p = de(yt, l),
    m = de(nt, l),
    h = de(ot, l),
    g = de(q, l),
    _,
    v;
  if (t[6] !== f || t[7] !== r || t[8] !== u || t[9] !== p || t[10] !== g || t[11] !== d) {
    let e = d?.flatMap(_r) ?? [],
      n = xt({ conversationTitle: f, images: p?.kind === `post` ? Gt(p.post, e) : e, intl: u }),
      i = new Map(n.map(gr));
    _ = [];
    for (let e of d ?? []) {
      let t = [];
      for (let n of e.images) {
        let e = i.get(n.id);
        n.src == null || n.status !== `completed`
          ? t.push({ id: n.id, loading: !0 })
          : e != null && t.push(e);
      }
      _.push({ id: e.id, turnStartedAtMs: e.turnStartedAtMs, images: t });
    }
    let a = r.flatMap((e) =>
      i.has(e.id) || (g && x(e.src)) ? [] : [g && x(e.previewSrc) ? { ...e, previewSrc: e.src } : e],
    );
    ((v = _.slice(0, -1)),
      a.length > 0 && v.unshift({ id: `opening-images`, images: a, turnStartedAtMs: null }),
      (t[6] = f),
      (t[7] = r),
      (t[8] = u),
      (t[9] = p),
      (t[10] = g),
      (t[11] = d),
      (t[12] = _),
      (t[13] = v));
  } else ((_ = t[12]), (v = t[13]));
  let y = i.imageAssetResolver ?? m ?? void 0,
    b;
  t[14] !== y || t[15] !== o
    ? ((b = y?.validationSessionId == null ? y : { ...y, validationSessionId: o }),
      (t[14] = y),
      (t[15] = o),
      (t[16] = b))
    : (b = t[16]);
  let S;
  t[17] === _ ? (S = t[18]) : ((S = _.at(-1) ?? null), (t[17] = _), (t[18] = S));
  let C;
  return (
    t[19] !== f || t[20] !== v || t[21] !== h || t[22] !== i || t[23] !== b || t[24] !== S
      ? ((C = (0, yr.jsx)(Kn, {
          ...i,
          imageAssetResolver: b,
          conversationId: null,
          conversationTitle: f,
          historicalGeneratedImageGroups: v,
          liveTailGeneratedImageGroup: S,
          optimisticImageEditMessageId: h,
        })),
        (t[19] = f),
        (t[20] = v),
        (t[21] = h),
        (t[22] = i),
        (t[23] = b),
        (t[24] = S),
        (t[25] = C))
      : (C = t[25]),
    C
  );
}
function gr(e) {
  return [e.id, e];
}
function _r(e) {
  return e.images;
}
var vr, yr;
function br() {
  return (br = e(() => {
    ((vr = E()), L(), P(), mr(), U(), _(), Nt(), wt(), V(), J(), bt(), Wt(), mt(), Ze(), vt(), (yr = y()));
  }))();
}
function xr(e) {
  let t = (0, Tr.c)(19),
    r,
    i,
    a;
  t[0] === e
    ? ((r = t[1]), (i = t[2]), (a = t[3]))
    : (({ initialImages: r, restrictLiveTailToInitialImages: a, ...i } = e),
      (t[0] = e),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a));
  let o = a !== void 0 && a,
    s = n(Ce),
    c = fe(),
    l = i.fallbackImage.sourceConversationId ?? s.value.routeConversationId,
    u = de(Ae, l),
    d = de(K, l),
    f = de(_t, l),
    p = de(Je, l),
    m,
    h;
  t[4] !== p || t[5] !== u || t[6] !== r || t[7] !== c || t[8] !== d || t[9] !== o
    ? ((m =
        u == null
          ? []
          : Cr({
              conversationTitle: p,
              metadataImages: r,
              generatedImageTurns: wr(u, r),
              imageNumberOffset: 0,
              intl: c,
            })),
      (h =
        d == null
          ? null
          : (Cr({
              conversationTitle: p,
              metadataImages: r,
              generatedImageTurns: o ? wr([d], r) : [d],
              imageNumberOffset: m.reduce(Sr, 0),
              intl: c,
            })[0] ?? null)),
      (t[4] = p),
      (t[5] = u),
      (t[6] = r),
      (t[7] = c),
      (t[8] = d),
      (t[9] = o),
      (t[10] = m),
      (t[11] = h))
    : ((m = t[10]), (h = t[11]));
  let g = h,
    _;
  return (
    t[12] !== l || t[13] !== p || t[14] !== m || t[15] !== g || t[16] !== f || t[17] !== i
      ? ((_ = (0, Er.jsx)(Kn, {
          ...i,
          conversationId: l,
          conversationTitle: p,
          historicalGeneratedImageGroups: m,
          liveTailGeneratedImageGroup: g,
          optimisticImageEditMessageId: f,
        })),
        (t[12] = l),
        (t[13] = p),
        (t[14] = m),
        (t[15] = g),
        (t[16] = f),
        (t[17] = i),
        (t[18] = _))
      : (_ = t[18]),
    _
  );
}
function Sr(e, t) {
  return e + t.images.length;
}
function Cr({
  conversationTitle: e,
  metadataImages: t,
  generatedImageTurns: n,
  imageNumberOffset: r,
  intl: i,
}) {
  let a = new Map(t.map((e) => [e.id, e])),
    o = r;
  return n.map((t) => ({
    id: t.id,
    turnStartedAtMs: t.turnStartedAtMs,
    images: t.images.map((t) => {
      if (((o += 1), t.src == null)) return { id: t.id, loading: !0 };
      let n = a.get(t.id),
        r =
          n?.alt ??
          i.formatMessage(
            {
              id: `codex.localConversation.generatedImage`,
              defaultMessage: `Generated image {imageNumber}`,
              description: `Alt text for an assistant-generated image shown in the final response`,
            },
            { imageNumber: o },
          );
      return {
        alt: r,
        isAnimated: n?.isAnimated,
        displayVariants: n?.displayVariants,
        height: n?.height,
        id: t.id,
        previewSrc: n?.previewSrc ?? t.src,
        hasPanoramaPrompt: t.hasPanoramaPrompt ?? n?.hasPanoramaPrompt,
        sourceImage: n?.sourceImage,
        src: t.src,
        tabTitle:
          n?.tabTitle ??
          (e == null
            ? r
            : i.formatMessage(
                {
                  id: `codex.localConversation.generatedImageTabTitle`,
                  defaultMessage: `{conversationTitle} - Generated image {imageNumber}`,
                  description: `Title for a generated image preview tab, prefixed by the conversation title`,
                },
                { conversationTitle: e, imageNumber: o },
              )),
        width: n?.width,
      };
    }),
  }));
}
function wr(e, t) {
  let n = new Set(t.map((e) => e.id));
  return e.flatMap((e) => {
    let t = e.images.filter((e) => n.has(e.id));
    return t.length === 0 ? [] : [{ ...e, images: t }];
  });
}
var Tr, Er;
function Dr() {
  return (Dr = e(() => {
    ((Tr = E()), L(), P(), et(), rt(), Me(), mr(), Xe(), (Er = y()));
  }))();
}
export { Kn as a, br as i, Dr as n, mr as o, hr as r, xr as t };
//# sourceMappingURL=local-generated-image-side-panel-671010e0d0e3.js.map
