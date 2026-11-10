import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $S as n,
  $Y as r,
  ADt as i,
  Aw as a,
  C0 as o,
  CS as s,
  Cot as c,
  Cz as l,
  FD as u,
  IDt as d,
  Ixt as f,
  JR as p,
  JS as m,
  Mz as h,
  ND as g,
  Nz as _,
  Pxt as v,
  QS as y,
  SO as b,
  TDt as x,
  TJ as S,
  Tz as C,
  VDt as w,
  Vxt as T,
  XS as E,
  Xx as D,
  YR as O,
  Yx as k,
  _Mt as A,
  _wt as j,
  aj as M,
  bz as N,
  cE as ee,
  dX as P,
  eX as F,
  fX as I,
  gMt as te,
  gwt as ne,
  hot as re,
  jDt as L,
  jw as R,
  lot as ie,
  nst as ae,
  oj as oe,
  t3 as se,
  tst as z,
  vzt as B,
  w0 as ce,
  wot as V,
  wz as le,
  xMt as H,
  xO as ue,
  xz as de,
  yMt as fe,
  yzt as pe,
  zH as me,
  zxt as he,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Qn as ge,
  AG as _e,
  BCr as ve,
  BZn as U,
  Bi as ye,
  Cwr as be,
  Du as xe,
  Eu as Se,
  Fi as Ce,
  Fnt as we,
  Hi as Te,
  Hlr as Ee,
  Ii as De,
  Inn as Oe,
  Int as ke,
  Ip as Ae,
  J3n as W,
  Li as je,
  Lj as Me,
  Lnn as Ne,
  Lp as Pe,
  MIr as G,
  Ni as Fe,
  Nnn as K,
  Oi as Ie,
  Pen as q,
  Pi as Le,
  QDr as Re,
  RCr as J,
  Ri as Y,
  Rj as ze,
  Rnn as Be,
  Si as Ve,
  U8n as He,
  Vj as X,
  W3n as Ue,
  W8n as We,
  W9t as Ge,
  WZn as Ke,
  Wlr as qe,
  X9t as Je,
  XDr as Ye,
  Xd as Xe,
  Yd as Ze,
  Z9t as Z,
  _8n as Qe,
  _i as $e,
  _sr as et,
  abn as tt,
  bOn as nt,
  e$n as rt,
  gi as it,
  gsr as at,
  gwr as ot,
  hi as st,
  hp as ct,
  hs as lt,
  iNr as ut,
  it as dt,
  jIr as ft,
  ji as pt,
  kG as mt,
  ki as ht,
  mi as gt,
  mp as _t,
  nen as vt,
  oFr as yt,
  obn as bt,
  ot as xt,
  pi as St,
  rNr as Ct,
  rt as wt,
  sCr as Tt,
  tt as Et,
  v8n as Dt,
  vs as Ot,
  wOn as kt,
  yCr as At,
  yi as jt,
  yjn as Mt,
} from "./app-initial-5851df3f6cb1.js";
import { $p as Nt, Zp as Pt } from "./app-primary-fe8a450b3b04.js";
import { n as Ft, t as It } from "./image-loading-state-af1ec7ad2f7e.js";
import { n as Lt, t as Rt } from "./generated-image-placeholder-8a3a4a0b8b61.js";
import { n as zt, t as Bt } from "./generated-image-source-27993f6c1759.js";
import { n as Vt, t as Ht } from "./generated-image-context-menu-c17f000c3733.js";
import { r as Ut, t as Wt } from "./image-data-65a946774990.js";
import { n as Gt, t as Kt } from "./image-edit-toolbar-5598d748a2a3.js";
import { n as qt, t as Jt } from "./deleted-image-placeholder-303f4bbcbf13.js";
import {
  a as Yt,
  c as Xt,
  d as Zt,
  f as Qt,
  g as $t,
  h as en,
  i as tn,
  l as nn,
  m as rn,
  n as an,
  o as on,
  p as sn,
  r as cn,
  s as ln,
  t as un,
  u as dn,
} from "./image-side-panel-35356e8bb6f2.js";
async function fn(
  e,
  { hostId: t, image: n, imageAssetResolver: r, onFailure: i, queryClient: a, updateComments: o },
) {
  let s = st(n.id);
  (o(pn(e, s)).length > 0 &&
    !(await jt(e, {
      displaySrc: n.previewSrc,
      hostId: t,
      image: n,
      imageAssetResolver: r,
      onFailure: i,
      queryClient: a,
    }))) ||
    xe(
      {
        composerScope: e,
        absoluteImageFilePath: Ee(n.src),
        attachmentId: s,
        attachmentSrc: n.src,
        downloadFileName: it(n),
        downloadSrc: n.src,
        hostId: t,
        isCloudComposer: e.get(vt) === `cloud`,
        queryClient: a,
        src: n.previewSrc,
      },
      o(pn(e, s)),
    );
}
function pn(e, t) {
  return e.get(Z).find((e) => e.attachmentId === t)?.comments ?? [];
}
function mn() {
  return (mn = e(() => {
    (q(), qe(), $e(), Se());
  }))();
}
function hn(e) {
  let t = (0, _n.c)(33),
    {
      active: n,
      comments: r,
      conversationId: i,
      image: a,
      imageAssetResolver: o,
      imageRef: s,
      isDraftActive: c,
      isViewTransitioning: l,
      selected: u,
      tool: d,
      onActivate: p,
      onAddToChat: m,
      onDeleteComment: h,
      onDraftActiveChange: g,
      onImageLoad: _,
      onSubmitComment: v,
    } = e,
    y = f(Tt),
    b = w(),
    x;
  t[0] !== i || t[1] !== a.previewSrc || t[2] !== o
    ? ((x = { src: a.previewSrc, conversationId: i, imageAssetResolver: o, shouldLoadFileDataUrl: !1 }),
      (t[0] = i),
      (t[1] = a.previewSrc),
      (t[2] = o),
      (t[3] = x))
    : (x = t[3]);
  let { previewSrc: S } = zt(x),
    C = S ?? a.previewSrc,
    T;
  t[4] !== C || t[5] !== a || t[6] !== o || t[7] !== b || t[8] !== m || t[9] !== y
    ? ((T = () => Ht(y, { displaySrc: C, image: a, imageAssetResolver: o, intl: b, onAddToChat: m })),
      (t[4] = C),
      (t[5] = a),
      (t[6] = o),
      (t[7] = b),
      (t[8] = m),
      (t[9] = y),
      (t[10] = T))
    : (T = t[10]);
  let E = l && `z-10`,
    D;
  t[11] === E ? (D = t[12]) : ((D = te(`relative max-w-full shrink-0`, E)), (t[11] = E), (t[12] = D));
  let O;
  t[13] !== n ||
  t[14] !== r ||
  t[15] !== C ||
  t[16] !== a ||
  t[17] !== s ||
  t[18] !== c ||
  t[19] !== p ||
  t[20] !== h ||
  t[21] !== g ||
  t[22] !== _ ||
  t[23] !== v ||
  t[24] !== u ||
  t[25] !== d
    ? ((O =
        d === `comment` && De(a).canEdit
          ? (0, vn.jsx)(`div`, {
              className: te(
                `relative flex max-w-full shrink-0 items-center rounded-xl bg-surface-secondary/85 outline-none`,
                (c || r.length > 0) && `ring-2 ring-chart-blue`,
              ),
              onContextMenuCapture: gn,
              children: (0, vn.jsx)(en, {
                alt: a.alt,
                comments: r,
                imageRef: s,
                isDraftActive: c,
                layout: `playground`,
                onDraftActiveChange: g,
                referrerPolicy: `no-referrer`,
                src: C,
                onDeleteComment: h,
                onImageLoad: _,
                onSubmitComment: v,
              }),
            })
          : (0, vn.jsxs)(`button`, {
              ref: s,
              type: `button`,
              "aria-label": a.alt,
              "aria-pressed": d === `select` ? u : n,
              className: te(
                `relative block max-w-full shrink-0 cursor-interaction overflow-hidden rounded-xl bg-surface-secondary/85 outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.995]`,
                (d === `select` ? u : n) && `ring-2 ring-chart-blue`,
              ),
              onClick: () => {
                p(C);
              },
              children: [
                (0, vn.jsx)(`img`, {
                  ref: (e) => {
                    e?.complete && e.naturalWidth > 0 && _?.(e);
                  },
                  className: `block h-auto !max-h-[292px] w-auto max-w-full object-contain`,
                  alt: ``,
                  decoding: `async`,
                  draggable: !1,
                  referrerPolicy: `no-referrer`,
                  src: C,
                  onLoad: (e) => _?.(e.currentTarget),
                }),
                d === `select` && u
                  ? (0, vn.jsx)(`span`, {
                      className: `absolute top-2 right-2 rounded-full bg-surface text-chart-blue shadow-sm`,
                      children: (0, vn.jsx)(k, { className: `size-5` }),
                    })
                  : null,
              ],
            })),
      (t[13] = n),
      (t[14] = r),
      (t[15] = C),
      (t[16] = a),
      (t[17] = s),
      (t[18] = c),
      (t[19] = p),
      (t[20] = h),
      (t[21] = g),
      (t[22] = _),
      (t[23] = v),
      (t[24] = u),
      (t[25] = d),
      (t[26] = O))
    : (O = t[26]);
  let A;
  t[27] !== D || t[28] !== O
    ? ((A = (0, vn.jsx)(`div`, { className: D, children: O })), (t[27] = D), (t[28] = O), (t[29] = A))
    : (A = t[29]);
  let j;
  return (
    t[30] !== T || t[31] !== A
      ? ((j = (0, vn.jsx)(ue, { getItems: T, children: A })), (t[30] = T), (t[31] = A), (t[32] = j))
      : (j = t[32]),
    j
  );
}
function gn(e) {
  e.target instanceof HTMLElement &&
    (e.target.isContentEditable || e.target.closest(`input, textarea, [contenteditable='true']`) != null) &&
    e.stopPropagation();
}
var _n, vn;
function yn() {
  return (yn = e(() => {
    ((_n = B()), A(), v(), L(), b(), D(), je(), At(), Vt(), Bt(), $t(), (vn = H()));
  }))();
}
var bn, xn;
function Sn() {
  return (Sn = e(() => {
    (pe(),
      (bn = H()),
      (xn = (e) =>
        (0, bn.jsx)(`svg`, {
          width: 13,
          height: 13,
          viewBox: `0 0 13 13`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, bn.jsx)(`path`, {
            d: `M0 2.44444C0 1.09442 1.09442 0 2.44444 0H3.33333C3.70152 0 4 0.298477 4 0.666667C4 1.03486 3.70152 1.33333 3.33333 1.33333H2.44444C1.83079 1.33333 1.33333 1.83079 1.33333 2.44444V3.33333C1.33333 3.70152 1.03486 4 0.666667 4C0.298477 4 0 3.70152 0 3.33333V2.44444ZM8 0.666667C8 0.298477 8.29848 0 8.66667 0H9.55556C10.9056 0 12 1.09442 12 2.44444V3.33333C12 3.70152 11.7015 4 11.3333 4C10.9651 4 10.6667 3.70152 10.6667 3.33333V2.44444C10.6667 1.83079 10.1692 1.33333 9.55556 1.33333H8.66667C8.29848 1.33333 8 1.03486 8 0.666667ZM7.09363 7.09256L8.43971 10.9065L9.0609 9.57534C9.16686 9.34829 9.34937 9.16578 9.57642 9.05983L10.9075 8.43864L7.09363 7.09256ZM5.65074 7.01053C5.35243 6.16531 6.16639 5.35136 7.01161 5.64967L11.9666 7.39849C12.8673 7.71639 12.9282 8.96701 12.0627 9.37094L10.2281 10.2271L9.37202 12.0616C8.96808 12.9272 7.71747 12.8663 7.39956 11.9655L5.65074 7.01053ZM0.666667 8C1.03486 8 1.33333 8.29848 1.33333 8.66667V9.55556C1.33333 10.1692 1.83079 10.6667 2.44444 10.6667H3.33333C3.70152 10.6667 4 10.9651 4 11.3333C4 11.7015 3.70152 12 3.33333 12H2.44444C1.09442 12 0 10.9056 0 9.55556V8.66667C0 8.29848 0.298477 8 0.666667 8Z`,
            fill: `currentColor`,
          }),
        })));
  }))();
}
function Cn(e) {
  let n = (0, wn.c)(50),
    { activeTool: r, commentCount: i, isUnifiedViewerEnabled: a, onActiveToolChange: s } = e,
    c = a !== void 0 && a,
    l = w(),
    u = c ? `ghostSecondary` : `ghostActive`,
    f = c ? `imageToolbar` : `composerSm`,
    p = c ? `large` : `default`,
    m;
  n[0] !== u || n[1] !== f || n[2] !== p
    ? ((m = { color: u, size: f, radius: p }), (n[0] = u), (n[1] = f), (n[2] = p), (n[3] = m))
    : (m = n[3]);
  let g = m,
    _ = c ? `[@container_(max-width:450px)]:sr-only` : `text-base`,
    v;
  n[4] === l
    ? (v = n[5])
    : ((v = l.formatMessage({
        id: `codex.localConversation.imagePlayground.tools`,
        defaultMessage: `Image playground tools`,
        description: `Accessible label for the image playground toolbar.`,
      })),
      (n[4] = l),
      (n[5] = v));
  let y = v;
  if (r === `comment`) {
    let e;
    n[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Tn.jsx)(d, {
          id: `codex.localConversation.imagePlayground.commentHelper`,
          defaultMessage: `Add comments on multiple images to batch edit them`,
          description: `Helper text shown in canvas comment mode before the user has added comments to any images.`,
        })),
        (n[6] = e))
      : (e = n[6]);
    let t;
    n[7] === s
      ? (t = n[8])
      : ((t = () => {
          s(`navigate`);
        }),
        (n[7] = s),
        (n[8] = t));
    let r = c ? `embedded` : `compact`,
      a;
    return (
      n[9] !== i || n[10] !== t || n[11] !== r || n[12] !== y
        ? ((a = (0, Tn.jsx)(sn, { ariaLabel: y, commentCount: i, emptyMessage: e, onCancel: t, variant: r })),
          (n[9] = i),
          (n[10] = t),
          (n[11] = r),
          (n[12] = y),
          (n[13] = a))
        : (a = n[13]),
      a
    );
  }
  let b = c ? `embedded` : `compact`,
    x;
  n[14] !== l || n[15] !== c
    ? ((x = c ? l.formatMessage(En.comment) : void 0), (n[14] = l), (n[15] = c), (n[16] = x))
    : (x = n[16]);
  let S;
  n[17] === s
    ? (S = n[18])
    : ((S = () => {
        s(`comment`);
      }),
      (n[17] = s),
      (n[18] = S));
  let C;
  n[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Tn.jsx)(h, { "aria-hidden": !1, asset: o })), (n[19] = C))
    : (C = n[19]);
  let T;
  n[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Tn.jsx)(d, { ...En.comment })), (n[20] = T))
    : (T = n[20]);
  let E;
  n[21] === _
    ? (E = n[22])
    : ((E = (0, Tn.jsx)(`span`, { className: _, children: T })), (n[21] = _), (n[22] = E));
  let D;
  n[23] !== g || n[24] !== E || n[25] !== x || n[26] !== S
    ? ((D = (0, Tn.jsxs)(t, { ...g, title: x, onClick: S, children: [C, E] })),
      (n[23] = g),
      (n[24] = E),
      (n[25] = x),
      (n[26] = S),
      (n[27] = D))
    : (D = n[27]);
  let O = r === `select`,
    k = r === `select` ? `secondary` : g.color,
    A;
  n[28] !== l || n[29] !== c
    ? ((A = c ? l.formatMessage(En.multiSelect) : void 0), (n[28] = l), (n[29] = c), (n[30] = A))
    : (A = n[30]);
  let j;
  n[31] !== r || n[32] !== s
    ? ((j = () => {
        s(r === `select` ? `navigate` : `select`);
      }),
      (n[31] = r),
      (n[32] = s),
      (n[33] = j))
    : (j = n[33]);
  let M;
  n[34] === Symbol.for(`react.memo_cache_sentinel`) ? ((M = (0, Tn.jsx)(xn, {})), (n[34] = M)) : (M = n[34]);
  let N;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Tn.jsx)(d, { ...En.multiSelect })), (n[35] = N))
    : (N = n[35]);
  let ee;
  n[36] === _
    ? (ee = n[37])
    : ((ee = (0, Tn.jsx)(`span`, { className: _, children: N })), (n[36] = _), (n[37] = ee));
  let P;
  n[38] !== g || n[39] !== O || n[40] !== k || n[41] !== A || n[42] !== j || n[43] !== ee
    ? ((P = (0, Tn.jsxs)(t, { ...g, "aria-pressed": O, color: k, title: A, onClick: j, children: [M, ee] })),
      (n[38] = g),
      (n[39] = O),
      (n[40] = k),
      (n[41] = A),
      (n[42] = j),
      (n[43] = ee),
      (n[44] = P))
    : (P = n[44]);
  let F;
  return (
    n[45] !== D || n[46] !== P || n[47] !== b || n[48] !== y
      ? ((F = (0, Tn.jsxs)(Kt, { ariaLabel: y, variant: b, children: [D, P] })),
        (n[45] = D),
        (n[46] = P),
        (n[47] = b),
        (n[48] = y),
        (n[49] = F))
      : (F = n[49]),
    F
  );
}
var wn, Tn, En;
function Dn() {
  return (Dn = e(() => {
    ((wn = B()),
      ce(),
      L(),
      se(),
      _(),
      Sn(),
      rn(),
      Gt(),
      (Tn = H()),
      (En = i({
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
function On(e) {
  let t = (0, kn.c)(29),
    { children: n, onZoomPercentChange: r, renderHeader: i, toolbar: a, zoomPercent: o } = e,
    s;
  t[0] !== r || t[1] !== o
    ? ((s = { onZoomPercentChange: r, zoomPercent: o }), (t[0] = r), (t[1] = o), (t[2] = s))
    : (s = t[2]);
  let {
      zoomTargetRef: c,
      handleClickCapture: l,
      handlePointerMoveCapture: u,
      setScrollContainerRef: d,
      setZoomAtViewportCenter: f,
    } = Qt(s),
    p;
  t[3] !== i || t[4] !== f || t[5] !== o
    ? ((p =
        i == null
          ? (0, An.jsx)(`div`, {
              className: `absolute top-2 right-2 z-40 flex h-8 items-center`,
              children: (0, An.jsx)(E, { zoomPercent: o, onZoomPercentChange: f }),
            })
          : i(
              (0, An.jsx)(m, {
                zoomOptions: [25, 50, 100, 150, 200],
                zoomPercent: o,
                onZoomPercentChange: f,
              }),
            )),
      (t[3] = i),
      (t[4] = f),
      (t[5] = o),
      (t[6] = p))
    : (p = t[6]);
  let h = i == null ? `contents` : `relative flex min-h-0 flex-1 flex-col`,
    g =
      i == null
        ? `scroll-pt-14 ps-3 pe-16 pt-[max(calc(var(--spacing)*14),var(--right-panel-composer-overlay-top-reserve,0px))] pb-[calc(var(--right-panel-composer-overlay-reserve,0px)+var(--spacing)*6)]`
        : `scroll-pt-6 px-3 py-6`,
    _;
  t[7] === g ? (_ = t[8]) : ((_ = te(`h-full min-h-0 overflow-auto`, g)), (t[7] = g), (t[8] = _));
  let v = o / 100,
    y;
  t[9] === v ? (y = t[10]) : ((y = { zoom: v }), (t[9] = v), (t[10] = y));
  let b;
  t[11] !== n || t[12] !== y || t[13] !== c
    ? ((b = (0, An.jsx)(`div`, {
        ref: c,
        className: `flex min-w-max flex-col items-start gap-6`,
        style: y,
        children: n,
      })),
      (t[11] = n),
      (t[12] = y),
      (t[13] = c),
      (t[14] = b))
    : (b = t[14]);
  let x;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, An.jsx)(`div`, { className: `h-1/2` })), (t[15] = x))
    : (x = t[15]);
  let S;
  t[16] !== l || t[17] !== u || t[18] !== d || t[19] !== _ || t[20] !== b
    ? ((S = (0, An.jsxs)(`div`, {
        ref: d,
        "data-generated-image-playground-scroll": !0,
        className: _,
        onClickCapture: l,
        onPointerMoveCapture: u,
        children: [b, x],
      })),
      (t[16] = l),
      (t[17] = u),
      (t[18] = d),
      (t[19] = _),
      (t[20] = b),
      (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] !== S || t[23] !== h || t[24] !== a
    ? ((C = (0, An.jsxs)(`div`, { className: h, children: [a, S] })),
      (t[22] = S),
      (t[23] = h),
      (t[24] = a),
      (t[25] = C))
    : (C = t[25]);
  let w;
  return (
    t[26] !== C || t[27] !== p
      ? ((w = (0, An.jsxs)(An.Fragment, { children: [p, C] })), (t[26] = C), (t[27] = p), (t[28] = w))
      : (w = t[28]),
    w
  );
}
var kn, An;
function jn() {
  return (jn = e(() => {
    ((kn = B()), A(), s(), y(), Zt(), (An = H()));
  }))();
}
function Mn(e) {
  let t = (0, In.c)(144),
    {
      activeImageId: n,
      conversationId: r,
      focusedImageRef: i,
      groups: a,
      imageAssetResolver: o,
      initialTool: s,
      isViewTransitioning: c,
      onGeneratedImageSelection: l,
      onImageLoad: u,
      onSelectImage: d,
      onZoomPercentChange: p,
      renderHeader: m,
      zoomPercent: h,
    } = e,
    g = s === void 0 ? `navigate` : s,
    _ = f(Tt),
    v = ae(),
    y = w(),
    b = m != null,
    [x, S] = (0, Ln.useState)(null),
    C;
  t[0] !== r || t[1] !== y || t[2] !== _
    ? ((C = { scope: _, conversationId: r, intl: y }), (t[0] = r), (t[1] = y), (t[2] = _), (t[3] = C))
    : (C = t[3]);
  let { notifyImageInputUnsupported: E, supportsImageInputs: D } = Pe(C),
    O = he(Qe, r) ?? `local`,
    k = T(Ge),
    A = T(Je),
    j = T(Z),
    [M, N] = (0, Ln.useState)(g),
    [ee, P] = (0, Ln.useState)(null),
    F = (0, Ln.useRef)(null),
    [I, ne] = (0, Ln.useState)(k);
  I !== k && (ne(k), N(`navigate`), P(null));
  let L;
  t[4] === A ? (L = t[5]) : ((L = new Set(A.map(Pn))), (t[4] = A), (t[5] = L));
  let R = L,
    ie;
  t[6] === j ? (ie = t[7]) : ((ie = new Map(j.map(Nn))), (t[6] = j), (t[7] = ie));
  let se = ie,
    z,
    B,
    ce;
  if (t[8] !== n || t[9] !== a) {
    ((z = new Set()), (B = []));
    for (let e of a) for (let t of e.images) t.loading || (B.push(t), z.add(st(t.id)));
    let e;
    (t[13] === n ? (e = t[14]) : ((e = (e) => e.id === n), (t[13] = n), (t[14] = e)),
      (ce = B.find(e)),
      (t[8] = n),
      (t[9] = a),
      (t[10] = z),
      (t[11] = B),
      (t[12] = ce));
  } else ((z = t[10]), (B = t[11]), (ce = t[12]));
  let V = ce,
    le;
  if (t[15] !== j || t[16] !== z) {
    let e;
    (t[18] === z
      ? (e = t[19])
      : ((e = (e, t) => (z.has(t.attachmentId) ? e + t.comments.length : e)), (t[18] = z), (t[19] = e)),
      (le = j.reduce(e, 0)),
      (t[15] = j),
      (t[16] = z),
      (t[17] = le));
  } else le = t[17];
  let H = le,
    ue;
  t[20] !== y || t[21] !== _
    ? ((ue = () => {
        _.get(re).danger(
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
      (t[22] = ue))
    : (ue = t[22]);
  let fe = de(ue),
    pe;
  t[23] !== y || t[24] !== _
    ? ((pe = () => {
        _.get(re).danger(
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
      (t[25] = pe))
    : (pe = t[25]);
  let me = de(pe),
    ge;
  t[26] !== E || t[27] !== l || t[28] !== D
    ? ((ge = () => (D ? (l?.(), !0) : (E(), !1))), (t[26] = E), (t[27] = l), (t[28] = D), (t[29] = ge))
    : (ge = t[29]);
  let _e = de(ge),
    ve;
  t[30] !== O || t[31] !== o || t[32] !== l || t[33] !== v || t[34] !== _ || t[35] !== me
    ? ((ve = (e, t, n) => {
        (l?.(),
          jt(_, {
            displaySrc: t,
            hostId: O,
            image: e,
            imageAssetResolver: o,
            onFailure: me,
            queryClient: v,
            selectionMode: n,
          }));
      }),
      (t[30] = O),
      (t[31] = o),
      (t[32] = l),
      (t[33] = v),
      (t[34] = _),
      (t[35] = me),
      (t[36] = ve))
    : (ve = t[36]);
  let U = de(ve),
    be;
  t[37] !== V || t[38] !== M || t[39] !== U || t[40] !== _ || t[41] !== D
    ? ((be = (e) => {
        if (e != null && M === `navigate` && D && V != null) {
          if (!De(V).canSelect) {
            (St(_), (F.current = null));
            return;
          }
          U(V, V.previewSrc, `single`);
        }
      }),
      (t[37] = V),
      (t[38] = M),
      (t[39] = U),
      (t[40] = _),
      (t[41] = D),
      (t[42] = be))
    : (be = t[42]);
  let xe = de(be),
    Se = D ? xe : void 0,
    Ce;
  t[43] !== i || t[44] !== Se ? ((Ce = oe(i, Se)), (t[43] = i), (t[44] = Se), (t[45] = Ce)) : (Ce = t[45]);
  let we = Ce,
    Te;
  t[46] !== M || t[47] !== U || t[48] !== E || t[49] !== d || t[50] !== _ || t[51] !== D
    ? ((Te = (e, t, n) => {
        if (!De(e).canSelect) {
          (St(_), (F.current = null), d(e));
          return;
        }
        if (M === `navigate`) {
          (d(e), D && U(e, n, `single`));
          return;
        }
        if (t) {
          (gt(_, e.id), F.current?.image.id === e.id && (F.current = null));
          return;
        }
        if (!D) {
          E();
          return;
        }
        ((F.current = { displaySrc: n, image: e }), U(e, n, `multiple`));
      }),
      (t[46] = M),
      (t[47] = U),
      (t[48] = E),
      (t[49] = d),
      (t[50] = _),
      (t[51] = D),
      (t[52] = Te))
    : (Te = t[52]);
  let Ee = de(Te),
    Oe;
  t[53] !== O || t[54] !== o || t[55] !== v || t[56] !== _ || t[57] !== fe
    ? ((Oe = (e, t) => {
        fn(_, {
          hostId: O,
          image: e,
          imageAssetResolver: o,
          onFailure: fe,
          queryClient: v,
          updateComments: (e) => e.filter((e) => e.id !== t),
        });
      }),
      (t[53] = O),
      (t[54] = o),
      (t[55] = v),
      (t[56] = _),
      (t[57] = fe),
      (t[58] = Oe))
    : (Oe = t[58]);
  let ke = de(Oe),
    Ae;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = (e, t) => {
        P(t ? e : null);
      }),
      (t[59] = Ae))
    : (Ae = t[59]);
  let W = de(Ae),
    je;
  t[60] !== O || t[61] !== o || t[62] !== E || t[63] !== v || t[64] !== _ || t[65] !== fe || t[66] !== D
    ? ((je = (e, t) => {
        if (!D) {
          E();
          return;
        }
        let n = { ...t, id: t.id ?? G() };
        fn(_, {
          hostId: O,
          image: e,
          imageAssetResolver: o,
          onFailure: fe,
          queryClient: v,
          updateComments: (e) => (t.id == null ? [...e, n] : e.map((e) => (e.id === t.id ? n : e))),
        });
      }),
      (t[60] = O),
      (t[61] = o),
      (t[62] = E),
      (t[63] = v),
      (t[64] = _),
      (t[65] = fe),
      (t[66] = D),
      (t[67] = je))
    : (je = t[67]);
  let Me = de(je),
    Ne;
  t[68] !== n ||
  t[69] !== M ||
  t[70] !== U ||
  t[71] !== d ||
  t[72] !== z ||
  t[73] !== B ||
  t[74] !== _ ||
  t[75] !== D
    ? ((Ne = (e) => {
        if (
          (e !== M && e !== `navigate` && ye(_, { imageSource: `generated`, mode: e, view: `canvas` }),
          M !== `select` && e === `select` && (F.current = null),
          M === `select` && e === `navigate`)
        ) {
          let e = F.current,
            t = e,
            r = _.get(Je);
          if (
            (e != null &&
              (!r.some((t) => t.id === st(e.image.id)) ||
                !B.some((t) => t.id === e.image.id && t.src === e.image.src)) &&
              (t = null),
            t == null)
          ) {
            let e;
            for (let t of r) z.has(t.id) && (e = t.id);
            let i = e == null ? B.find((e) => e.id === n) : B.find((t) => st(t.id) === e);
            i != null && (t = { displaySrc: i.previewSrc, image: i });
          }
          (t != null && De(t.image).canSelect && D && (d(t.image), U(t.image, t.displaySrc, `single`)),
            (F.current = null));
        }
        (N(e), M === `comment` && e !== `comment` && (P(null), St(_)));
      }),
      (t[68] = n),
      (t[69] = M),
      (t[70] = U),
      (t[71] = d),
      (t[72] = z),
      (t[73] = B),
      (t[74] = _),
      (t[75] = D),
      (t[76] = Ne))
    : (Ne = t[76]);
  let Fe;
  t[77] !== M || t[78] !== H || t[79] !== b || t[80] !== Ne
    ? ((Fe = (0, Rn.jsx)(Cn, {
        isUnifiedViewerEnabled: b,
        activeTool: M,
        commentCount: H,
        onActiveToolChange: Ne,
      })),
      (t[77] = M),
      (t[78] = H),
      (t[79] = b),
      (t[80] = Ne),
      (t[81] = Fe))
    : (Fe = t[81]);
  let K = Fe,
    Ie = b ? S : void 0,
    q =
      b &&
      `flex flex-col pt-[var(--right-panel-composer-overlay-top-reserve,0px)] pb-[var(--right-panel-composer-overlay-reserve,0px)]`,
    Le;
  t[82] === q
    ? (Le = t[83])
    : ((Le = te(`@container relative h-full min-h-0 bg-surface-secondary`, q)), (t[82] = q), (t[83] = Le));
  let Re;
  t[84] !== V || t[85] !== b || t[86] !== c || t[87] !== K
    ? ((Re =
        !b && De(V).canEdit
          ? (0, Rn.jsx)(`div`, {
              className: `pointer-events-none absolute top-2 right-0 left-0 z-40 flex justify-center px-4 [@container_(max-width:630px)]:hidden`,
              children: (0, Rn.jsx)(`div`, { className: c ? void 0 : `pointer-events-auto`, children: K }),
            })
          : null),
      (t[84] = V),
      (t[85] = b),
      (t[86] = c),
      (t[87] = K),
      (t[88] = Re))
    : (Re = t[88]);
  let J;
  t[89] !== M || t[90] !== m
    ? ((J = m == null ? void 0 : (e) => m({ zoomControl: e, navigationDisabled: M === `comment` })),
      (t[89] = M),
      (t[90] = m),
      (t[91] = J))
    : (J = t[91]);
  let Y;
  t[92] !== V || t[93] !== x || t[94] !== b || t[95] !== c || t[96] !== K
    ? ((Y =
        b && De(V).canEdit
          ? (0, Rn.jsx)(`div`, {
              className: `contents [@container_(max-width:630px)]:hidden`,
              inert: c,
              children: (0, Rn.jsx)(nn, { dragBoundary: x, children: K }),
            })
          : null),
      (t[92] = V),
      (t[93] = x),
      (t[94] = b),
      (t[95] = c),
      (t[96] = K),
      (t[97] = Y))
    : (Y = t[97]);
  let ze;
  if (
    t[98] !== ee ||
    t[99] !== n ||
    t[100] !== M ||
    t[101] !== R ||
    t[102] !== r ||
    t[103] !== i ||
    t[104] !== a ||
    t[105] !== _e ||
    t[106] !== ke ||
    t[107] !== W ||
    t[108] !== Ee ||
    t[109] !== Me ||
    t[110] !== o ||
    t[111] !== se ||
    t[112] !== c ||
    t[113] !== u ||
    t[114] !== we
  ) {
    let e;
    (t[116] !== ee ||
    t[117] !== n ||
    t[118] !== M ||
    t[119] !== R ||
    t[120] !== r ||
    t[121] !== i ||
    t[122] !== _e ||
    t[123] !== ke ||
    t[124] !== W ||
    t[125] !== Ee ||
    t[126] !== Me ||
    t[127] !== o ||
    t[128] !== se ||
    t[129] !== c ||
    t[130] !== u ||
    t[131] !== we
      ? ((e = (e) =>
          (0, Rn.jsx)(
            Bn,
            {
              activeDraftImageId: ee,
              activeImageId: n,
              attachmentIds: R,
              conversationId: r,
              focusedImageRef: we,
              group: e,
              imageAssetResolver: o,
              imageCommentsByAttachmentId: se,
              isViewTransitioning: c,
              loadingImageRef: i,
              tool: M,
              onAddToChat: _e,
              onDeleteComment: ke,
              onDraftActiveChange: W,
              onImageActivate: Ee,
              onImageLoad: u,
              onSubmitComment: Me,
            },
            e.id,
          )),
        (t[116] = ee),
        (t[117] = n),
        (t[118] = M),
        (t[119] = R),
        (t[120] = r),
        (t[121] = i),
        (t[122] = _e),
        (t[123] = ke),
        (t[124] = W),
        (t[125] = Ee),
        (t[126] = Me),
        (t[127] = o),
        (t[128] = se),
        (t[129] = c),
        (t[130] = u),
        (t[131] = we),
        (t[132] = e))
      : (e = t[132]),
      (ze = a.map(e)),
      (t[98] = ee),
      (t[99] = n),
      (t[100] = M),
      (t[101] = R),
      (t[102] = r),
      (t[103] = i),
      (t[104] = a),
      (t[105] = _e),
      (t[106] = ke),
      (t[107] = W),
      (t[108] = Ee),
      (t[109] = Me),
      (t[110] = o),
      (t[111] = se),
      (t[112] = c),
      (t[113] = u),
      (t[114] = we),
      (t[115] = ze));
  } else ze = t[115];
  let Be;
  t[133] !== p || t[134] !== J || t[135] !== Y || t[136] !== ze || t[137] !== h
    ? ((Be = (0, Rn.jsx)(On, {
        renderHeader: J,
        toolbar: Y,
        onZoomPercentChange: p,
        zoomPercent: h,
        children: ze,
      })),
      (t[133] = p),
      (t[134] = J),
      (t[135] = Y),
      (t[136] = ze),
      (t[137] = h),
      (t[138] = Be))
    : (Be = t[138]);
  let Ve;
  return (
    t[139] !== Ie || t[140] !== Le || t[141] !== Re || t[142] !== Be
      ? ((Ve = (0, Rn.jsxs)(`div`, { ref: Ie, className: Le, children: [Re, Be] })),
        (t[139] = Ie),
        (t[140] = Le),
        (t[141] = Re),
        (t[142] = Be),
        (t[143] = Ve))
      : (Ve = t[143]),
    Ve
  );
}
function Nn(e) {
  return [e.attachmentId, e.comments];
}
function Pn(e) {
  return e.id;
}
function Fn(e) {
  return e.loading;
}
var In, Ln, Rn, zn, Bn;
function Vn() {
  return (Vn = e(() => {
    ((In = B()),
      z(),
      A(),
      ne(),
      v(),
      (Ln = pe()),
      L(),
      ft(),
      Dt(),
      q(),
      ie(),
      Ae(),
      je(),
      At(),
      yt(),
      M(),
      N(),
      Y(),
      mn(),
      yn(),
      $e(),
      Dn(),
      jn(),
      dn(),
      Ft(),
      (Rn = H()),
      (zn = []),
      (Bn = (0, Ln.memo)(function (e) {
        let t = (0, In.c)(51),
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
            onDraftActiveChange: h,
            onImageActivate: g,
            onImageLoad: _,
            onSubmitComment: v,
          } = e,
          y = !u || s.images.some((e) => e.id === r) ? 1 : 0,
          b;
        t[0] === y ? (b = t[1]) : ((b = { opacity: y }), (t[0] = y), (t[1] = b));
        let S;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((S = { opacity: 1 }), (t[2] = S)) : (S = t[2]);
        let C = u ? 0.24 : 0,
          w;
        t[3] === C ? (w = t[4]) : ((w = { duration: 0.14, delay: C }), (t[3] = C), (t[4] = w));
        let T;
        t[5] !== s.images || t[6] !== s.turnStartedAtMs
          ? ((T = te(
              `relative flex max-w-full gap-2`,
              (s.turnStartedAtMs != null || s.images.some(Fn)) && `pt-6`,
            )),
            (t[5] = s.images),
            (t[6] = s.turnStartedAtMs),
            (t[7] = T))
          : (T = t[7]);
        let E;
        t[8] === s.turnStartedAtMs
          ? (E = t[9])
          : ((E =
              s.turnStartedAtMs == null
                ? null
                : (0, Rn.jsx)(`time`, {
                    className: `absolute top-0 text-xs text-tertiary select-none`,
                    dateTime: new Date(s.turnStartedAtMs).toISOString(),
                    children: (0, Rn.jsx)(x, {
                      value: s.turnStartedAtMs,
                      dateStyle: `medium`,
                      timeStyle: `short`,
                    }),
                  })),
            (t[8] = s.turnStartedAtMs),
            (t[9] = E));
        let D;
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
          t[22] !== h ||
          t[23] !== g ||
          t[24] !== _ ||
          t[25] !== v ||
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
          t[39] !== h ||
          t[40] !== g ||
          t[41] !== _ ||
          t[42] !== v ||
          t[43] !== f
            ? ((e = (e) => {
                if (e.loading)
                  return (0, Rn.jsx)(
                    `div`,
                    {
                      ref: e.id === r ? d : void 0,
                      className: `w-72 max-w-full shrink-0`,
                      children: (0, Rn.jsx)(It, { presentation: `playground` }),
                    },
                    e.id,
                  );
                let t = st(e.id),
                  s = e.id === r,
                  y = i.has(t),
                  b = l.get(t) ?? zn;
                return (0, Rn.jsx)(
                  hn,
                  {
                    active: s,
                    comments: b,
                    conversationId: a,
                    image: e,
                    imageAssetResolver: c,
                    imageRef: s ? o : void 0,
                    isDraftActive: n === e.id,
                    isViewTransitioning: s && u,
                    selected: y,
                    tool: f,
                    onActivate: (t) => {
                      g(e, y, t);
                    },
                    onAddToChat: p,
                    onDeleteComment: (t) => {
                      m(e, t);
                    },
                    onDraftActiveChange: (t) => {
                      h(e.id, t);
                    },
                    onImageLoad: s ? _ : void 0,
                    onSubmitComment: (t) => {
                      v(e, t);
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
              (t[39] = h),
              (t[40] = g),
              (t[41] = _),
              (t[42] = v),
              (t[43] = f),
              (t[44] = e))
            : (e = t[44]),
            (D = s.images.map(e)),
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
            (t[22] = h),
            (t[23] = g),
            (t[24] = _),
            (t[25] = v),
            (t[26] = f),
            (t[27] = D));
        } else D = t[27];
        let O;
        return (
          t[45] !== b || t[46] !== w || t[47] !== T || t[48] !== E || t[49] !== D
            ? ((O = (0, Rn.jsxs)(j.div, {
                initial: b,
                animate: S,
                transition: w,
                className: T,
                children: [E, D],
              })),
              (t[45] = b),
              (t[46] = w),
              (t[47] = T),
              (t[48] = E),
              (t[49] = D),
              (t[50] = O))
            : (O = t[50]),
          O
        );
      })));
  }))();
}
function Hn(e) {
  let t = (0, Un.c)(39),
    { placement: n, shouldShowCoachmark: r, onDismissCoachmark: i, view: a, onViewChange: o } = e,
    s = n === void 0 ? `overlay` : n,
    l = f(c),
    u = w(),
    p;
  t[0] === u
    ? (p = t[1])
    : ((p = u.formatMessage({
        id: `codex.localConversation.imagePlayground.view`,
        defaultMessage: `Image view`,
        description: `Accessible label for the image view toggle.`,
      })),
      (t[0] = u),
      (t[1] = p));
  let m;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Wn.jsx)(h, { "aria-hidden": !1, asset: I })), (t[2] = m))
    : (m = t[2]);
  let g;
  t[3] === u
    ? (g = t[4])
    : ((g = u.formatMessage({
        id: `codex.localConversation.imagePlayground.singleView`,
        defaultMessage: `Focused view`,
        description: `Accessible label for the focused image view.`,
      })),
      (t[3] = u),
      (t[4] = g));
  let _;
  t[5] === g ? (_ = t[6]) : ((_ = { id: `single`, label: m, ariaLabel: g }), (t[5] = g), (t[6] = _));
  let v;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Wn.jsx)(h, { "aria-hidden": !1, asset: F })), (t[7] = v))
    : (v = t[7]);
  let y;
  t[8] === u
    ? (y = t[9])
    : ((y = u.formatMessage({
        id: `codex.localConversation.imagePlayground.playgroundView`,
        defaultMessage: `Canvas view`,
        description: `Accessible label for the image canvas view.`,
      })),
      (t[8] = u),
      (t[9] = y));
  let b;
  t[10] === y ? (b = t[11]) : ((b = { id: `playground`, label: v, ariaLabel: y }), (t[10] = y), (t[11] = b));
  let x;
  t[12] !== _ || t[13] !== b ? ((x = [_, b]), (t[12] = _), (t[13] = b), (t[14] = x)) : (x = t[14]);
  let S;
  t[15] !== i || t[16] !== o || t[17] !== l || t[18] !== r || t[19] !== a
    ? ((S = (e) => {
        (r && a === `single` && e === `playground` && Re(l, Me, {}), i(), o(e));
      }),
      (t[15] = i),
      (t[16] = o),
      (t[17] = l),
      (t[18] = r),
      (t[19] = a),
      (t[20] = S))
    : (S = t[20]);
  let C;
  t[21] !== S || t[22] !== x || t[23] !== a
    ? ((C = (0, Wn.jsx)(Ze, { uniform: !0, variant: `viewer`, options: x, selectedId: a, onSelect: S })),
      (t[21] = S),
      (t[22] = x),
      (t[23] = a),
      (t[24] = C))
    : (C = t[24]);
  let T;
  t[25] !== C || t[26] !== p
    ? ((T = (0, Wn.jsx)(ee, { label: p, children: C })), (t[25] = C), (t[26] = p), (t[27] = T))
    : (T = t[27]);
  let E = T,
    D = s === `overlay` && `absolute top-2 left-2 z-40`,
    O;
  t[28] === D ? (O = t[29]) : ((O = te(D)), (t[28] = D), (t[29] = O));
  let k;
  t[30] !== u || t[31] !== i || t[32] !== r || t[33] !== E || t[34] !== a
    ? ((k = r
        ? (0, Wn.jsx)(mt, {
            align: `start`,
            description: (0, Wn.jsx)(d, {
              id: `codex.localConversation.imagePlayground.canvasViewCoachmarkDescription`,
              defaultMessage: `Switch between a focused image and all generated images`,
              description: `Body copy shown in the image view toggle coachmark.`,
            }),
            dismissLabel: u.formatMessage({
              id: `codex.localConversation.imagePlayground.canvasViewCoachmarkDismiss`,
              defaultMessage: `Dismiss`,
              description: `Accessible label for dismissing the image view toggle coachmark.`,
            }),
            onDismiss: i,
            open: !0,
            side: `right`,
            sideOffset: 12,
            title:
              a === `single`
                ? (0, Wn.jsx)(d, {
                    id: `codex.localConversation.imagePlayground.canvasViewCoachmarkTitle`,
                    defaultMessage: `Try Canvas view`,
                    description: `Title shown in the image view toggle coachmark when Canvas view is closed.`,
                  })
                : (0, Wn.jsx)(d, {
                    id: `codex.localConversation.imagePlayground.focusedViewCoachmarkTitle`,
                    defaultMessage: `Try focused view`,
                    description: `Title shown in the image view toggle coachmark when Canvas view is open.`,
                  }),
            children: E,
          })
        : E),
      (t[30] = u),
      (t[31] = i),
      (t[32] = r),
      (t[33] = E),
      (t[34] = a),
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
    ((Un = B()), X(), P(), r(), A(), v(), L(), _(), Xe(), Ye(), V(), _e(), s(), (Wn = H()));
  }))();
}
function Kn(e) {
  let t = (0, ar.c)(180),
    {
      conversationId: r,
      fallbackImage: i,
      historicalGeneratedImageGroups: a,
      imageAssetResolver: o,
      initialImageId: s,
      initialPlaygroundTool: c,
      liveTailGeneratedImageGroup: l,
      onActiveImageChange: p,
      onGeneratedImageSelection: m,
      onViewChange: h,
      optimisticImageEditMessageId: g,
      view: _,
    } = e,
    v = f(Tt),
    y = w(),
    b = T(Ve),
    x = T(Nt),
    S = (b != null && b === i.tabId) || (x != null && x === i.tabId),
    E = T(ke),
    D = i.presentation === `overlay`,
    k = D || (E && i.tabId != null),
    A = T(ve),
    j = O(),
    M;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((M = new Set()), (t[0] = M)) : (M = t[0]);
  let N = (0, Q.useRef)(M),
    P = C(),
    F;
  t[1] === s ? (F = t[2]) : ((F = { id: s }), (t[1] = s), (t[2] = F));
  let [I, ne] = (0, Q.useState)(F),
    re = (0, Q.useId)(),
    L = i.viewerId ?? re,
    R = he(Fe, L),
    [ie, ae] = (0, Q.useState)(l?.id),
    [oe, se] = (0, Q.useState)(null),
    [z, B] = (0, Q.useState)(ur),
    [ce, V] = (0, Q.useState)(i.zoom?.manualZoomPercent ?? null),
    [le, H] = (0, Q.useState)(!1),
    [ue, fe] = (0, Q.useState)(null),
    [pe, me] = (0, Q.useState)(null),
    [ge, _e] = (0, Q.useState)(null),
    [U, ye] = (0, Q.useState)(j),
    [be, xe] = (0, Q.useState)(null),
    [Se, we] = (0, Q.useState)(null),
    Ee = T(dr),
    [De, Oe] = (0, Q.useState)(!1),
    Ae = (0, Q.useRef)(!1),
    [W, je] = (0, Q.useState)(null),
    Me = (0, Q.useRef)(null),
    Ne = (0, Q.useRef)(s),
    Pe = (0, Q.useRef)(null),
    G = g == null ? null : `optimistic-image-edit:` + g,
    K,
    Ie,
    q,
    Le,
    J,
    Y;
  if (
    t[3] !== I ||
    t[4] !== a ||
    t[5] !== l ||
    t[6] !== g ||
    t[7] !== G ||
    t[8] !== ie ||
    t[9] !== oe ||
    t[10] !== R
  ) {
    let e = G == null ? null : { id: G, turnStartedAtMs: null, images: [{ id: G, loading: !0 }] },
      n = [...a, ...(l == null ? [] : [l]), ...(e == null ? [] : [e])];
    if (
      ((Le = n.flatMap(Qn)),
      (J = (e) => Le.find((t) => !t.loading && t.id === e.id) ?? e),
      (Ie = n.map((e) => ({ ...e, images: e.images.map((e) => (e.loading ? e : pt(R, e))) }))),
      (q = Ie.flatMap(Zn)),
      (Y = q.filter(Xn)),
      g !== oe &&
        (se(g),
        G != null &&
          (ne({
            id: G,
            pendingLiveTailGroupId: l?.id,
            pendingLiveTailImageIndex: l?.images.length ?? 0,
            previousImageId: I.id,
          }),
          V(null))),
      l?.id !== ie)
    ) {
      ae(l?.id);
      let e = l?.images.find(Yn);
      l != null &&
        e != null &&
        G == null &&
        oe == null &&
        I.pendingLiveTailImageIndex == null &&
        (ne({
          id: e.id,
          pendingLiveTailGroupId: l.id,
          pendingLiveTailImageIndex: l.images.indexOf(e),
          previousImageId: I.id,
        }),
        V(null));
    }
    ((K = q.find((e) => e.id === I.id)),
      K == null &&
        I.pendingLiveTailImageIndex != null &&
        l != null &&
        (K = l.id === I.pendingLiveTailGroupId ? l.images[I.pendingLiveTailImageIndex] : l.images.at(-1)),
      (K ??= Y.find((e) => e.id === I.previousImageId) ?? Y.at(-1)),
      K != null &&
        I.pendingLiveTailImageIndex != null &&
        (K.id !== I.id || !K.loading) &&
        ne(K.loading ? { ...I, id: K.id } : { id: K.id }),
      (Ie.find((e) => e.images.some((e) => e.id === K?.id))?.images ?? []).filter(Jn),
      (t[3] = I),
      (t[4] = a),
      (t[5] = l),
      (t[6] = g),
      (t[7] = G),
      (t[8] = ie),
      (t[9] = oe),
      (t[10] = R),
      (t[11] = K),
      (t[12] = Ie),
      (t[13] = q),
      (t[14] = Le),
      (t[15] = J),
      (t[16] = Y));
  } else ((K = t[11]), (Ie = t[12]), (q = t[13]), (Le = t[14]), (J = t[15]), (Y = t[16]));
  let Be = (D || A) && q.length > 1,
    He;
  t[17] !== K || t[18] !== Le
    ? ((He = Le.find((e) => e.id === K?.id)), (t[17] = K), (t[18] = Le), (t[19] = He))
    : (He = t[19]);
  let X = He,
    We = K != null && !K.loading ? K.src : null,
    Ge;
  t[20] === We
    ? (Ge = t[21])
    : ((Ge = (e) => {
        We != null && e.naturalWidth > 0 && xe(We);
      }),
      (t[20] = We),
      (t[21] = Ge));
  let Ke = Ge,
    qe = K != null && !K.loading ? K.src : ``,
    Je;
  t[22] !== qe || t[23] !== L
    ? ((Je = { viewerId: L, assetSrc: qe }), (t[22] = qe), (t[23] = L), (t[24] = Je))
    : (Je = t[24]);
  let Ye = he(ln, Je),
    Xe = !i.readOnly && K != null && !K.loading && K.id === ue,
    Z = S || Xe || (K != null && (Ye.hasPendingComment || K.id === pe)),
    Qe;
  t[25] !== K ||
  t[26] !== I ||
  t[27] !== Z ||
  t[28] !== l?.id ||
  t[29] !== l?.images ||
  t[30] !== p ||
  t[31] !== G ||
  t[32] !== J
    ? ((Qe = (e) => {
        Z ||
          K == null ||
          e.id === K.id ||
          (ne(
            e.loading && e.id === G
              ? {
                  id: e.id,
                  pendingLiveTailGroupId: l?.id,
                  pendingLiveTailImageIndex: l?.images.length ?? 0,
                  previousImageId: K.loading ? I.previousImageId : K.id,
                }
              : { id: e.id },
          ),
          V(null),
          e.loading || ((Ne.current = e.id), p?.(J(e))));
      }),
      (t[25] = K),
      (t[26] = I),
      (t[27] = Z),
      (t[28] = l?.id),
      (t[29] = l?.images),
      (t[30] = p),
      (t[31] = G),
      (t[32] = J),
      (t[33] = Qe))
    : (Qe = t[33]);
  let $e = Qe,
    et = !D && r != null && K != null && U && !De && Ee === !1,
    tt,
    nt;
  (t[34] !== v || t[35] !== et || t[36] !== _
    ? ((tt = () => {
        et && _ === `single` && !Ae.current && ((Ae.current = !0), Re(v, ze, {}));
      }),
      (nt = [v, et, _]),
      (t[34] = v),
      (t[35] = et),
      (t[36] = _),
      (t[37] = tt),
      (t[38] = nt))
    : ((tt = t[37]), (nt = t[38])),
    (0, Q.useEffect)(tt, nt));
  let rt, it;
  (t[39] === j
    ? ((rt = t[40]), (it = t[41]))
    : ((rt = () => {
        let e = window.setTimeout(
          () => {
            ye(!0);
          },
          j ? 0 : Ue.duration * 1e3,
        );
        return () => {
          window.clearTimeout(e);
        };
      }),
      (it = [j]),
      (t[39] = j),
      (t[40] = rt),
      (t[41] = it)),
    (0, Q.useEffect)(rt, it));
  let at, ot;
  (t[42] !== We || t[43] !== U || t[44] !== be
    ? ((at = () => {
        if (!U || We == null || be !== We) return;
        let e = !1,
          t;
        return (
          Ot().then(() => {
            if (e) return;
            let n = () => we(We);
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
      (ot = [We, U, be]),
      (t[42] = We),
      (t[43] = U),
      (t[44] = be),
      (t[45] = at),
      (t[46] = ot))
    : ((at = t[45]), (ot = t[46])),
    (0, Q.useEffect)(at, ot));
  let st, ct;
  (t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = () => () => {
        Pe.current?.cancel();
      }),
      (ct = []),
      (t[47] = st),
      (t[48] = ct))
    : ((st = t[47]), (ct = t[48])),
    (0, Q.useEffect)(st, ct));
  let lt;
  t[49] === _
    ? (lt = t[50])
    : ((lt = () => {
        let e = Me.current;
        _ === `playground` && e != null && rr(e);
      }),
      (t[49] = _),
      (t[50] = lt));
  let ut = u(lt),
    dt,
    ft;
  (t[51] !== ut || t[52] !== _
    ? ((dt = () => {
        let e = Me.current;
        if (_ !== `playground` || e == null) {
          ut(null);
          return;
        }
        return (
          ut(e.closest(`[data-generated-image-playground-scroll]`)),
          rr(e),
          () => {
            ut(null);
          }
        );
      }),
      (ft = [ut, _]),
      (t[51] = ut),
      (t[52] = _),
      (t[53] = dt),
      (t[54] = ft))
    : ((dt = t[53]), (ft = t[54])),
    (0, Q.useLayoutEffect)(dt, ft));
  let mt;
  t[55] !== K || t[56] !== p || t[57] !== G || t[58] !== J || t[59] !== _
    ? ((mt = (e) => {
        ((Me.current = e),
          e != null && _ === `playground` && K?.id === G && rr(e),
          e != null && K != null && !K.loading && Ne.current !== K.id && ((Ne.current = K.id), p?.(J(K))));
      }),
      (t[55] = K),
      (t[56] = p),
      (t[57] = G),
      (t[58] = J),
      (t[59] = _),
      (t[60] = mt))
    : (mt = t[60]);
  let ht = de(mt),
    _t;
  t[61] !== K || t[62] !== q || t[63] !== D || t[64] !== $e
    ? ((_t = (e) => {
        if (
          e.defaultPrevented ||
          e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.isComposing ||
          e.keyCode === 229 ||
          (e.key !== `ArrowUp` && e.key !== `ArrowDown`) ||
          !(e.target instanceof HTMLElement) ||
          K == null
        )
          return;
        let t =
          D &&
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
        let n = q.findIndex((e) => e.id === K.id);
        if (n < 0) return;
        (e.preventDefault(), t && e.stopPropagation());
        let r = q[n + (e.key === `ArrowUp` ? -1 : 1)];
        r != null && $e(r);
      }),
      (t[61] = K),
      (t[62] = q),
      (t[63] = D),
      (t[64] = $e),
      (t[65] = _t))
    : (_t = t[65]);
  let vt = (0, Q.useEffectEvent)(_t),
    yt = !Z && _ === `single` && K != null && q.length > 1,
    bt;
  t[66] !== vt || t[67] !== D || t[68] !== W || t[69] !== yt
    ? ((bt = () => {
        let e = W?.closest(`[role="tabpanel"], [role="dialog"]`);
        if (yt && e != null)
          return (
            e.addEventListener(`keydown`, vt, D),
            () => {
              e.removeEventListener(`keydown`, vt, D);
            }
          );
      }),
      (t[66] = vt),
      (t[67] = D),
      (t[68] = W),
      (t[69] = yt),
      (t[70] = bt))
    : (bt = t[70]);
  let xt;
  if (
    (t[71] !== D || t[72] !== W || t[73] !== yt
      ? ((xt = [D, W, yt]), (t[71] = D), (t[72] = W), (t[73] = yt), (t[74] = xt))
      : (xt = t[74]),
    (0, Q.useEffect)(bt, xt),
    K == null)
  ) {
    let e;
    t[75] !== i.zoom || t[76] !== ce
      ? ((e = i.zoom ?? { manualZoomPercent: ce, onZoomPercentChange: V, onZoomToFit: () => V(null) }),
        (t[75] = i.zoom),
        (t[76] = ce),
        (t[77] = e))
      : (e = t[77]);
    let n;
    return (
      t[78] !== i || t[79] !== e
        ? ((n = (0, $.jsx)(un, { ...i, zoom: e })), (t[78] = i), (t[79] = e), (t[80] = n))
        : (n = t[80]),
      n
    );
  }
  let St;
  t[81] !== Z ||
  t[82] !== h ||
  t[83] !== z ||
  t[84] !== Y ||
  t[85] !== v ||
  t[86] !== j ||
  t[87] !== _ ||
  t[88] !== P
    ? ((St = (e) => {
        if (Z || e === _) return;
        let t = Pe.current;
        (t != null && ((Pe.current = null), (t.oncancel = null), (t.onfinish = null), t.cancel(), H(!1)),
          Te(v, {
            availableImageCount: Y.length,
            entrypoint: `view_toggle`,
            imageSource: `generated`,
            view: e === `playground` ? `canvas` : `single`,
          }));
        let n = nr(Me.current);
        (H(!0),
          (0, or.flushSync)(() => {
            h(e);
          }));
        let r = Me.current;
        e === `playground` && r != null && rr(r);
        let i = nr(r);
        if (j || n == null || i == null || r == null || typeof r.animate != `function`) {
          H(!1);
          return;
        }
        let a = r.animate(
          [
            { transform: ir(n, i, P, e === `playground` ? z / 100 : 1), transformOrigin: `top left` },
            { transform: `none`, transformOrigin: `top left` },
          ],
          { duration: 450, easing: `cubic-bezier(0.22, 1, 0.36, 1)`, fill: `both` },
        );
        Pe.current = a;
        let o = () => {
          Pe.current === a &&
            ((Pe.current = null), (a.oncancel = null), (a.onfinish = null), H(!1), a.cancel());
        };
        ((a.oncancel = o), (a.onfinish = o));
      }),
      (t[81] = Z),
      (t[82] = h),
      (t[83] = z),
      (t[84] = Y),
      (t[85] = v),
      (t[86] = j),
      (t[87] = _),
      (t[88] = P),
      (t[89] = St))
    : (St = t[89]);
  let Ct = St,
    wt;
  t[90] !== Ct || t[91] !== r || t[92] !== Z || t[93] !== D || t[94] !== v || t[95] !== et || t[96] !== _
    ? ((wt =
        !D && r != null
          ? (0, $.jsx)(`div`, {
              className: te(`contents`, Z && `invisible`),
              inert: Z,
              children: (0, $.jsx)(Hn, {
                placement: `flow`,
                shouldShowCoachmark: et && !Z,
                onDismissCoachmark: () => {
                  (Oe(!0), v.set(dr, !0));
                },
                view: _,
                onViewChange: Ct,
              }),
            })
          : null),
      (t[90] = Ct),
      (t[91] = r),
      (t[92] = Z),
      (t[93] = D),
      (t[94] = v),
      (t[95] = et),
      (t[96] = _),
      (t[97] = wt))
    : (wt = t[97]);
  let Et = wt,
    Dt;
  t[98] === X
    ? (Dt = t[99])
    : ((Dt = X != null && !X.loading ? (X.displayVariants ?? []) : []), (t[98] = X), (t[99] = Dt));
  let kt = Dt,
    At = K.loading ? `original` : (K.displayVariantId ?? `original`),
    jt;
  t[100] !== K.id ||
  t[101] !== kt ||
  t[102] !== y ||
  t[103] !== Z ||
  t[104] !== X ||
  t[105] !== v ||
  t[106] !== At ||
  t[107] !== L
    ? ((jt = (e) =>
        X != null && !X.loading && kt.length > 0
          ? (0, $.jsx)(ee, {
              label: y.formatMessage({
                id: `codex.imageGen.displayVariant`,
                defaultMessage: `Image display`,
                description: `Accessible label for choosing which version of an image to display, such as an animation, a grid of frames, or the original image.`,
              }),
              children: (0, $.jsx)(Ze, {
                variant: `viewer`,
                selectedId: At,
                options: [
                  ...kt.map(qn),
                  {
                    id: `original`,
                    label: X.isAnimated
                      ? (0, $.jsx)(d, {
                          id: `codex.imageGen.animationGif`,
                          defaultMessage: `Gif`,
                          description: `Compact image viewer toggle option. Plays the animated GIF. The other option, Sheet, shows the editable grid of frames. Keep the GIF file format name.`,
                        })
                      : (0, $.jsx)(d, {
                          id: `codex.imageGen.displayVariant.original`,
                          defaultMessage: `Original`,
                          description: `Compact image viewer option that displays the original image instead of one of its alternate versions.`,
                        }),
                  },
                ].map((t) => ({ ...t, disabled: Z || e })),
                onSelect: (e) => {
                  e !== At && (gt(v, K.id), Ce(v, L, K.id, e), V(null));
                },
              }),
            })
          : null),
      (t[100] = K.id),
      (t[101] = kt),
      (t[102] = y),
      (t[103] = Z),
      (t[104] = X),
      (t[105] = v),
      (t[106] = At),
      (t[107] = L),
      (t[108] = jt))
    : (jt = t[108]);
  let Mt = jt,
    Pt;
  t[109] !== K ||
  t[110] !== r ||
  t[111] !== i ||
  t[112] !== o ||
  t[113] !== y ||
  t[114] !== Xe ||
  t[115] !== Ke ||
  t[116] !== X ||
  t[117] !== W ||
  t[118] !== Mt ||
  t[119] !== v ||
  t[120] !== ht ||
  t[121] !== Be ||
  t[122] !== ce ||
  t[123] !== ge ||
  t[124] !== Et ||
  t[125] !== L
    ? ((Pt = K.loading
        ? (0, $.jsx)(un, {
            ...i,
            headerViewControl: Et,
            renderHeaderLeadingControls: (e) => {
              let { navigationDisabled: t } = e;
              return Mt(t);
            },
            hasImageRail: Be,
            loadingContent: (0, $.jsx)(It, { presentation: `single` }),
          })
        : (0, $.jsx)(
            tr,
            {
              activeImage: K,
              clipboardScope: W,
              conversationId: r,
              fallbackImage: {
                ...i,
                viewerId: L,
                headerViewControl: Et,
                buildCommentPrompt:
                  K.displayVariantId != null && X != null && !X.loading && X.isAnimated
                    ? (e) =>
                        Yt(v, {
                          animation: X,
                          conversationId: i.chatGptConversationId,
                          imageAssetResolver: o,
                          viewerId: L,
                          intl: y,
                          comments: e,
                        })
                    : i.buildCommentPrompt,
                onImageEditSubmitStatusChange: (e) => {
                  (me((t) => (e === `pending` ? K.id : t === K.id ? null : t)),
                    i.onImageEditSubmitStatusChange?.(e));
                },
              },
              focusedImageRef: ht,
              hasImageRail: Be,
              imageAssetResolver: o,
              manualZoomPercent: ce,
              onManualZoomPercentChange: V,
              onImageLoad: Ke,
              onPanoramaInteraction: (e, t) => {
                if (t === `360Impression`) {
                  if (N.current.has(e)) return;
                  N.current.add(e);
                }
                i.onPanoramaInteraction?.(e, t);
              },
              removeMode: {
                active: Xe,
                onActiveChange: (e) => fe((t) => (e ? K.id : t === K.id ? null : t)),
              },
              sizeControlContainer: ge,
              renderHeaderLeadingControls: (e) => {
                let { navigationDisabled: t } = e;
                return Mt(t);
              },
            },
            K.id,
          )),
      (t[109] = K),
      (t[110] = r),
      (t[111] = i),
      (t[112] = o),
      (t[113] = y),
      (t[114] = Xe),
      (t[115] = Ke),
      (t[116] = X),
      (t[117] = W),
      (t[118] = Mt),
      (t[119] = v),
      (t[120] = ht),
      (t[121] = Be),
      (t[122] = ce),
      (t[123] = ge),
      (t[124] = Et),
      (t[125] = L),
      (t[126] = Pt))
    : (Pt = t[126]);
  let Ft = Pt,
    Lt = !D && `bg-surface-secondary`,
    Rt = !D && A && `[--viewer-header-start-inset:var(--app-shell-titlebar-left-inset,0px)]`,
    zt = k && `flex flex-col`,
    Bt = le && `pointer-events-none`,
    Vt;
  t[127] !== Lt || t[128] !== Rt || t[129] !== zt || t[130] !== Bt
    ? ((Vt = te(`relative h-full min-h-0 min-w-0 w-full`, Lt, Rt, zt, Bt)),
      (t[127] = Lt),
      (t[128] = Rt),
      (t[129] = zt),
      (t[130] = Bt),
      (t[131] = Vt))
    : (Vt = t[131]);
  let Ht;
  t[132] !== kt || t[133] !== r || t[134] !== U || t[135] !== o || t[136] !== X || t[137] !== Se
    ? ((Ht =
        U &&
        X != null &&
        !X.loading &&
        Se === X.src &&
        kt.map((e) =>
          (0, $.jsx)(er, { src: e.asset.src, conversationId: r, imageAssetResolver: o }, e.asset.src),
        )),
      (t[132] = kt),
      (t[133] = r),
      (t[134] = U),
      (t[135] = o),
      (t[136] = X),
      (t[137] = Se),
      (t[138] = Ht))
    : (Ht = t[138]);
  let Ut;
  t[139] !== k || t[140] !== Mt || t[141] !== Et
    ? ((Ut = k
        ? null
        : (0, $.jsxs)(`div`, {
            className: `absolute start-[calc(var(--spacing)*2+var(--viewer-header-start-inset,0px))] top-2 z-40 flex items-center gap-2`,
            children: [Et, Mt(!1)],
          })),
      (t[139] = k),
      (t[140] = Mt),
      (t[141] = Et),
      (t[142] = Ut))
    : (Ut = t[142]);
  let Wt;
  t[143] !== r || t[144] !== Z || t[145] !== D
    ? ((Wt = null), (t[143] = r), (t[144] = Z), (t[145] = D), (t[146] = Wt))
    : (Wt = t[146]);
  let Gt;
  t[147] !== K.id ||
  t[148] !== K.loading ||
  t[149] !== K.sourceImage ||
  t[150] !== K.tabTitle ||
  t[151] !== Ft ||
  t[152] !== r ||
  t[153] !== i ||
  t[154] !== Ie ||
  t[155] !== q ||
  t[156] !== o ||
  t[157] !== c ||
  t[158] !== Z ||
  t[159] !== D ||
  t[160] !== k ||
  t[161] !== le ||
  t[162] !== Ke ||
  t[163] !== m ||
  t[164] !== G ||
  t[165] !== z ||
  t[166] !== Mt ||
  t[167] !== $e ||
  t[168] !== ht ||
  t[169] !== Be ||
  t[170] !== j ||
  t[171] !== _ ||
  t[172] !== Et
    ? ((Gt =
        !D && _ === `playground` && r != null
          ? (0, $.jsx)(`div`, {
              className: k ? `relative min-h-0 flex-1` : `contents`,
              children: (0, $.jsx)(Mn, {
                activeImageId: K.id,
                conversationId: r,
                focusedImageRef: ht,
                groups: Ie,
                imageAssetResolver: o,
                initialTool: c,
                isViewTransitioning: le && !j,
                onGeneratedImageSelection: m,
                onImageLoad: Ke,
                onSelectImage: $e,
                onZoomPercentChange: B,
                renderHeader: k
                  ? (e) => {
                      let { zoomControl: t, navigationDisabled: r } = e,
                        a = (e) =>
                          (0, $.jsx)(cn, {
                            title: K.loading ? (i.title ?? i.alt) : K.tabTitle,
                            image: K.loading ? void 0 : K.sourceImage,
                            navigationDisabled: Z || r,
                            readOnly: i.readOnly ?? !1,
                            children: e,
                          });
                      return (0, $.jsx)(n, {
                        density: `surface`,
                        leading: [
                          {
                            id: `title`,
                            content:
                              i.renderHeaderMenuActions?.({
                                image: K.loading ? void 0 : K.sourceImage,
                                imageId: K.id,
                                isImageActionsDisabled: Z || r,
                                isUnifiedViewerEnabled: !0,
                                renderMenu: a,
                              }) ?? a(null),
                            hidePriority: 4,
                          },
                          { id: `view-controls`, content: Et, hidePriority: 5 },
                          { id: `animation-view`, content: Mt(r) },
                        ],
                        trailing: [
                          { id: `zoom`, content: t, hidePriority: 3 },
                          { id: `window-controls`, content: i.headerWindowControls },
                        ],
                      });
                    }
                  : void 0,
                zoomPercent: z,
              }),
            })
          : (0, $.jsxs)(`div`, {
              className: `flex h-full min-h-0`,
              children: [
                Be
                  ? (0, $.jsxs)(`div`, {
                      className: `pointer-events-none relative flex h-full w-18 shrink-0`,
                      children: [
                        (0, $.jsx)($n, {
                          activeId: K.id,
                          autoScrollImageId: G,
                          images: q,
                          conversationId: r,
                          imageAssetResolver: o,
                          hidden: Z,
                          isOverlay: D,
                          isUnifiedViewerEnabled: k,
                          onAddToChat: m,
                          onDownloaded: i.onDownloaded,
                          onSelect: $e,
                        }),
                        (0, $.jsx)(`div`, {
                          ref: _e,
                          className: `[container-type:size] pointer-events-none absolute inset-0 z-30 flex items-center justify-center pt-[var(--right-panel-composer-overlay-top-reserve,0px)] pb-[var(--right-panel-composer-overlay-reserve,0px)]`,
                        }),
                      ],
                    })
                  : null,
                (0, $.jsx)(`div`, { className: `min-w-0 flex-1`, children: Ft }),
              ],
            })),
      (t[147] = K.id),
      (t[148] = K.loading),
      (t[149] = K.sourceImage),
      (t[150] = K.tabTitle),
      (t[151] = Ft),
      (t[152] = r),
      (t[153] = i),
      (t[154] = Ie),
      (t[155] = q),
      (t[156] = o),
      (t[157] = c),
      (t[158] = Z),
      (t[159] = D),
      (t[160] = k),
      (t[161] = le),
      (t[162] = Ke),
      (t[163] = m),
      (t[164] = G),
      (t[165] = z),
      (t[166] = Mt),
      (t[167] = $e),
      (t[168] = ht),
      (t[169] = Be),
      (t[170] = j),
      (t[171] = _),
      (t[172] = Et),
      (t[173] = Gt))
    : (Gt = t[173]);
  let Kt;
  return (
    t[174] !== Vt || t[175] !== Ht || t[176] !== Ut || t[177] !== Wt || t[178] !== Gt
      ? ((Kt = (0, $.jsxs)(`div`, { ref: je, className: Vt, children: [Ht, Ut, Wt, Gt] })),
        (t[174] = Vt),
        (t[175] = Ht),
        (t[176] = Ut),
        (t[177] = Wt),
        (t[178] = Gt),
        (t[179] = Kt))
      : (Kt = t[179]),
    Kt
  );
}
function qn(e) {
  return { id: e.id, label: (0, $.jsx)(d, { ...e.label }) };
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
  let t = (0, ar.c)(48),
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
    p = w(),
    m = c && !0,
    h;
  if (t[0] !== n || t[1] !== i) {
    let e;
    (t[3] === n ? (e = t[4]) : ((e = (e) => e.id === n), (t[3] = n), (t[4] = e)),
      (h = i.findIndex(e)),
      (t[0] = n),
      (t[1] = i),
      (t[2] = h));
  } else h = t[2];
  let g = Math.max(h, 0),
    _ = (0, Q.useRef)(null),
    v = (0, Q.useRef)(null),
    y = (0, Q.useRef)(lr + g * cr + sr / 2),
    b = 12 + (i.length - 1) * cr + sr,
    x,
    S;
  (t[5] !== n || t[6] !== r || t[7] !== i.length
    ? ((x = () => {
        let e = _.current;
        e != null &&
          r != null &&
          r === n &&
          v.current !== r &&
          ((v.current = r),
          (y.current = lr + (i.length - 1) * cr + sr / 2),
          e.scrollTo({ top: e.scrollHeight }));
      }),
      (S = [n, r, i.length]),
      (t[5] = n),
      (t[6] = r),
      (t[7] = i.length),
      (t[8] = x),
      (t[9] = S))
    : ((x = t[8]), (S = t[9])),
    (0, Q.useLayoutEffect)(x, S));
  let C;
  t[10] === b
    ? (C = t[11])
    : ((C = (e, t) => {
        let n = Math.min(b, t.clientHeight) / 2;
        return Math.min(Math.max(e - n, 0), t.scrollHeight - t.clientHeight);
      }),
      (t[10] = b),
      (t[11] = C));
  let T = C,
    E,
    D,
    O,
    k,
    A;
  if (
    t[12] !== n ||
    t[13] !== g ||
    t[14] !== a ||
    t[15] !== T ||
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
      let n = lr + e * cr + sr / 2;
      ((y.current = n), f(t));
      let r = _.current;
      r?.scrollTo({ top: T(n, r) });
    };
    t[30] === T
      ? (E = t[31])
      : ((E = (e) => {
          e != null && _.current == null && ((e.scrollTop = T(y.current, e)), (_.current = e));
        }),
        (t[30] = T),
        (t[31] = E));
    let r = !l && `mt-10`,
      c = l && `mt-14`,
      h = s && `invisible`;
    (t[32] !== r || t[33] !== c || t[34] !== h
      ? ((D = te(
          `pointer-events-auto relative z-10 w-18 shrink-0 [scrollbar-width:none] overflow-y-auto py-1.5 ps-0.5 [&::-webkit-scrollbar]:hidden`,
          r,
          c,
          h,
        )),
        (t[32] = r),
        (t[33] = c),
        (t[34] = h),
        (t[35] = D))
      : (D = t[35]),
      (O = s),
      t[36] !== n || t[37] !== T || t[38] !== i || t[39] !== f
        ? ((k = (e) => {
            if (e.ctrlKey) return;
            e.preventDefault();
            let t =
                e.deltaMode === WheelEvent.DOM_DELTA_LINE
                  ? e.deltaY * 16
                  : e.deltaMode === WheelEvent.DOM_DELTA_PAGE
                    ? e.deltaY * e.currentTarget.clientHeight
                    : e.deltaY,
              r = Math.min(Math.max(y.current + t, 29), lr + (i.length - 1) * cr + sr / 2);
            ((y.current = r), (e.currentTarget.scrollTop = T(r, e.currentTarget)));
            let a = Math.round((r - lr - sr / 2) / cr),
              o = i[a];
            o != null && o.id !== n && f(o);
          }),
          (t[36] = n),
          (t[37] = T),
          (t[38] = i),
          (t[39] = f),
          (t[40] = k))
        : (k = t[40]),
      (A = i.map((t, r) => {
        let s = t.id === n;
        return (0, $.jsx)(
          j.button,
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
            className: te(
              `mx-auto mb-2 flex cursor-interaction overflow-hidden rounded-lg border border-default focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
              m ? `bg-surface` : !t.loading && `bg-surface-secondary/85`,
            ),
            style: { height: sr, width: sr },
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
              let r = g + n;
              r < 0 || r >= i.length || e(r);
            },
            children: t.loading
              ? (0, $.jsx)(It, { presentation: `thumbnail` })
              : (0, $.jsx)(fr, {
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
      (t[13] = g),
      (t[14] = a),
      (t[15] = T),
      (t[16] = m),
      (t[17] = s),
      (t[18] = o),
      (t[19] = i),
      (t[20] = p),
      (t[21] = l),
      (t[22] = u),
      (t[23] = d),
      (t[24] = f),
      (t[25] = E),
      (t[26] = D),
      (t[27] = O),
      (t[28] = k),
      (t[29] = A));
  } else ((E = t[25]), (D = t[26]), (O = t[27]), (k = t[28]), (A = t[29]));
  let M;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsx)(`div`, { style: { height: `calc(50% - ${sr / 2}px)` } })), (t[41] = M))
    : (M = t[41]);
  let N;
  return (
    t[42] !== E || t[43] !== D || t[44] !== O || t[45] !== k || t[46] !== A
      ? ((N = (0, $.jsxs)(`div`, { ref: E, className: D, inert: O, onWheel: k, children: [A, M] })),
        (t[42] = E),
        (t[43] = D),
        (t[44] = O),
        (t[45] = k),
        (t[46] = A),
        (t[47] = N))
      : (N = t[47]),
    N
  );
}
function er(e) {
  let t = (0, ar.c)(6),
    { src: n, conversationId: r, imageAssetResolver: i } = e,
    a;
  t[0] !== r || t[1] !== i || t[2] !== n
    ? ((a = { src: n, conversationId: r, imageAssetResolver: i, shouldLoadFileDataUrl: !1 }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = n),
      (t[3] = a))
    : (a = t[3]);
  let { previewSrc: o } = zt(a),
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
  let n = (0, ar.c)(58),
    {
      activeImage: r,
      clipboardScope: i,
      conversationId: a,
      fallbackImage: o,
      focusedImageRef: s,
      hasImageRail: c,
      imageAssetResolver: l,
      manualZoomPercent: u,
      onPanoramaInteraction: f,
      removeMode: p,
      sizeControlContainer: m,
      footerActions: h,
      renderHeaderLeadingControls: g,
      onManualZoomPercentChange: _,
      onImageLoad: v,
    } = e,
    y = w(),
    { onImageEditSubmit: b } = o,
    x;
  n[0] !== r.src || n[1] !== a || n[2] !== l
    ? ((x = { src: r.src, conversationId: a, imageAssetResolver: l, shouldLoadFileDataUrl: !1 }),
      (n[0] = r.src),
      (n[1] = a),
      (n[2] = l),
      (n[3] = x))
    : (x = n[3]);
  let { downloadSrc: S, previewSrc: C, isError: T, refetch: E, deleted: D, onImageError: O } = zt(x),
    k;
  if (C == null) {
    let e;
    (n[4] !== y || n[5] !== T || n[6] !== E
      ? ((e = T
          ? (0, $.jsxs)(_t, {
              className: `flex-col gap-3 select-none`,
              children: [
                (0, $.jsx)(`span`, {
                  role: `status`,
                  children: (0, $.jsx)(d, {
                    id: `codex.generatedImage.sourceUnavailable`,
                    defaultMessage: `Image unavailable`,
                    description: `Shown when a generated image could not be downloaded for the image viewer`,
                  }),
                }),
                (0, $.jsx)(t, {
                  color: `secondary`,
                  onClick: E,
                  children: (0, $.jsx)(d, {
                    id: `codex.generatedImage.retrySource`,
                    defaultMessage: `Retry`,
                    description: `Button to retry downloading a generated image that failed to load in the image viewer`,
                  }),
                }),
              ],
            })
          : (0, $.jsx)(It, {
              ariaLabel: y.formatMessage({
                id: `codex.generatedImage.loadingSource`,
                defaultMessage: `Loading image…`,
                description: `Accessible label while an existing generated image is being downloaded for display`,
              }),
              presentation: `single`,
            })),
        (n[4] = y),
        (n[5] = T),
        (n[6] = E),
        (n[7] = e))
      : (e = n[7]),
      (k = e));
  }
  if (D != null) {
    let e;
    if (
      (n[8] !== D || n[9] !== l
        ? ((e = (0, $.jsx)(Jt, { deleted: D, imageAssetResolver: l })), (n[8] = D), (n[9] = l), (n[10] = e))
        : (e = n[10]),
      (k = e),
      o.presentation !== `overlay` && r.displayVariantId == null)
    )
      return k;
  }
  if (
    o.presentation !== `overlay` &&
    r.displayVariantId == null &&
    l?.validationSessionId != null &&
    C == null
  ) {
    let e;
    return (
      n[11] === k
        ? (e = n[12])
        : ((e = (0, $.jsx)(`div`, {
            className: `[container-type:size] flex size-full items-center justify-center overflow-hidden p-4`,
            children: k,
          })),
          (n[11] = k),
          (n[12] = e)),
      e
    );
  }
  let A = r.alt,
    j;
  n[13] === r.id ? (j = n[14]) : ((j = st(r.id)), (n[13] = r.id), (n[14] = j));
  let M = r.src,
    N = S ?? C ?? r.src,
    ee = k,
    P;
  n[15] !== o.imageRef || n[16] !== s
    ? ((P = oe(s, o.imageRef)), (n[15] = o.imageRef), (n[16] = s), (n[17] = P))
    : (P = n[17]);
  let F = r.id === o.imageId ? o.initialEditTool : void 0,
    I;
  n[18] !== o || n[19] !== O
    ? ((I = () => {
        (O?.(), o.onImageError?.());
      }),
      (n[18] = o),
      (n[19] = O),
      (n[20] = I))
    : (I = n[20]);
  let te = C == null ? void 0 : r,
    ne;
  n[21] !== r.displayVariantId || n[22] !== r.id || n[23] !== b
    ? ((ne = b == null ? void 0 : (e, t) => b({ ...e, imageId: r.id, imageVariant: r.displayVariantId }, t)),
      (n[21] = r.displayVariantId),
      (n[22] = r.id),
      (n[23] = b),
      (n[24] = ne))
    : (ne = n[24]);
  let re = C ?? ``,
    L;
  n[25] === _ ? (L = n[26]) : ((L = () => _(null)), (n[25] = _), (n[26] = L));
  let R;
  n[27] !== u || n[28] !== _ || n[29] !== L
    ? ((R = { manualZoomPercent: u, onZoomPercentChange: _, onZoomToFit: L }),
      (n[27] = u),
      (n[28] = _),
      (n[29] = L),
      (n[30] = R))
    : (R = n[30]);
  let ie;
  return (
    n[31] !== r.alt ||
    n[32] !== r.id ||
    n[33] !== r.isAnimated ||
    n[34] !== r.sourceImage ||
    n[35] !== r.src ||
    n[36] !== r.tabTitle ||
    n[37] !== i ||
    n[38] !== o ||
    n[39] !== h ||
    n[40] !== c ||
    n[41] !== l ||
    n[42] !== v ||
    n[43] !== f ||
    n[44] !== p ||
    n[45] !== g ||
    n[46] !== m ||
    n[47] !== te ||
    n[48] !== ne ||
    n[49] !== re ||
    n[50] !== R ||
    n[51] !== j ||
    n[52] !== N ||
    n[53] !== P ||
    n[54] !== F ||
    n[55] !== I ||
    n[56] !== k
      ? ((ie = (0, $.jsx)(un, {
          ...o,
          alt: A,
          attachmentId: j,
          attachmentSrc: M,
          imageAssetResolver: l,
          clipboardScope: i,
          downloadSrc: N,
          hasImageRail: c,
          loadingContent: ee,
          imageRef: P,
          onImageLoad: v,
          imageId: r.id,
          initialEditTool: F,
          onPanoramaInteraction: f,
          onImageError: I,
          panoramaImage: te,
          sourceImage: r.sourceImage,
          isAnimated: r.isAnimated,
          readOnly: o.readOnly,
          removeMode: p,
          sizeControlContainer: m,
          footerActions: h,
          title: r.tabTitle,
          renderHeaderLeadingControls: g,
          onImageEditSubmit: ne,
          referrerPolicy: `no-referrer`,
          src: re,
          zoom: R,
        })),
        (n[31] = r.alt),
        (n[32] = r.id),
        (n[33] = r.isAnimated),
        (n[34] = r.sourceImage),
        (n[35] = r.src),
        (n[36] = r.tabTitle),
        (n[37] = i),
        (n[38] = o),
        (n[39] = h),
        (n[40] = c),
        (n[41] = l),
        (n[42] = v),
        (n[43] = f),
        (n[44] = p),
        (n[45] = g),
        (n[46] = m),
        (n[47] = te),
        (n[48] = ne),
        (n[49] = re),
        (n[50] = R),
        (n[51] = j),
        (n[52] = N),
        (n[53] = P),
        (n[54] = F),
        (n[55] = I),
        (n[56] = k),
        (n[57] = ie))
      : (ie = n[57]),
    ie
  );
}
function nr(e) {
  let t = e?.getBoundingClientRect();
  return t == null || t.width <= 0 || t.height <= 0 ? null : t;
}
function rr(e) {
  let t = e.closest(`[data-generated-image-playground-scroll]`),
    n = t != null && e.getBoundingClientRect().right > t.getBoundingClientRect().right;
  e.scrollIntoView({ block: `start`, inline: n ? `center` : `nearest` });
}
function ir(e, t, n, r) {
  return `translate(${Number((le(e.left - t.left, n) / r).toFixed(4))}px, ${Number((le(e.top - t.top, n) / r).toFixed(4))}px) scale(${Number((e.width / t.width).toFixed(4))}, ${Number((e.height / t.height).toFixed(4))})`;
}
var ar, Q, or, $, sr, cr, lr, ur, dr, fr;
function pr() {
  return (pr = e(() => {
    ((ar = B()),
      X(),
      A(),
      ne(),
      v(),
      (Q = pe()),
      (or = fe()),
      L(),
      W(),
      J(),
      l(),
      Ie(),
      se(),
      b(),
      S(),
      ct(),
      Xe(),
      p(),
      Le(),
      lt(),
      we(),
      Ye(),
      g(),
      At(),
      Ct(),
      M(),
      N(),
      s(),
      qt(),
      Y(),
      Vt(),
      Lt(),
      Vn(),
      $e(),
      Gn(),
      Bt(),
      on(),
      Xt(),
      tn(),
      Ft(),
      an(),
      Pt(),
      ($ = H()),
      (sr = 46),
      (cr = 54),
      (lr = 6),
      (ur = 100),
      (dr = ut(`has-dismissed-image-canvas-view-coachmark-v1`, !1)),
      (fr = (0, Q.memo)(function (e) {
        let t = (0, ar.c)(23),
          { image: n, conversationId: r, imageAssetResolver: i, onAddToChat: a, onDownloaded: o } = e,
          s = f(Tt),
          c = w(),
          l = i?.validationSessionId == null ? n.previewSrc : n.src,
          u;
        t[0] !== r || t[1] !== i || t[2] !== l
          ? ((u = { src: l, conversationId: r, imageAssetResolver: i, shouldLoadFileDataUrl: !1 }),
            (t[0] = r),
            (t[1] = i),
            (t[2] = l),
            (t[3] = u))
          : (u = t[3]);
        let { previewSrc: d, isError: p, deleted: m, onImageError: h } = zt(u);
        if (m != null) {
          let e;
          return (
            t[4] === m
              ? (e = t[5])
              : ((e = (0, $.jsx)(Jt, { deleted: m, compact: !0 })), (t[4] = m), (t[5] = e)),
            e
          );
        }
        if (d == null) {
          let e;
          return (
            t[6] !== c || t[7] !== p
              ? ((e = p
                  ? (0, $.jsx)(`span`, {
                      className: `flex size-full items-center justify-center text-secondary`,
                      role: `img`,
                      "aria-label": c.formatMessage({
                        id: `codex.generatedImage.thumbnailUnavailable`,
                        defaultMessage: `Image unavailable`,
                        description: `Accessible label for a generated image thumbnail whose download failed; selecting it opens the viewer with a retry button`,
                      }),
                      children: (0, $.jsx)(me, {}),
                    })
                  : (0, $.jsx)(Rt, { className: `size-full`, "aria-busy": !0 })),
                (t[6] = c),
                (t[7] = p),
                (t[8] = e))
              : (e = t[8]),
            e
          );
        }
        let g;
        t[9] !== n || t[10] !== i || t[11] !== c || t[12] !== a || t[13] !== o || t[14] !== d || t[15] !== s
          ? ((g = () =>
              Ht(s, {
                displaySrc: d,
                image: n,
                imageAssetResolver: i,
                intl: c,
                onAddToChat: a,
                onDownloaded: o,
              })),
            (t[9] = n),
            (t[10] = i),
            (t[11] = c),
            (t[12] = a),
            (t[13] = o),
            (t[14] = d),
            (t[15] = s),
            (t[16] = g))
          : (g = t[16]);
        let _;
        t[17] !== h || t[18] !== d
          ? ((_ = (0, $.jsx)(`img`, {
              alt: ``,
              className: `size-full rounded-lg object-cover`,
              decoding: `async`,
              loading: `lazy`,
              onError: h,
              referrerPolicy: `no-referrer`,
              src: d,
            })),
            (t[17] = h),
            (t[18] = d),
            (t[19] = _))
          : (_ = t[19]);
        let v;
        return (
          t[20] !== g || t[21] !== _
            ? ((v = (0, $.jsx)(ue, { getItems: g, children: _ })), (t[20] = g), (t[21] = _), (t[22] = v))
            : (v = t[22]),
          v
        );
      })));
  }))();
}
function mr(e) {
  let t = (0, _r.c)(26),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ initialImages: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = f(ot),
    a = T(Ne),
    o = i.value,
    s;
  t[3] !== o.conversationId || t[4] !== o.routeKind
    ? ((s = o.routeKind === `chatgpt-thread` ? ge(o.conversationId) : null),
      (t[3] = o.conversationId),
      (t[4] = o.routeKind),
      (t[5] = s))
    : (s = t[5]);
  let c = s,
    l = w(),
    u = he(dt, c),
    d = he(Ke, c),
    p = he(U, c),
    m = he(K, c),
    h = he(Et, c),
    g = he(nt, c),
    _,
    v;
  if (t[6] !== d || t[7] !== n || t[8] !== l || t[9] !== p || t[10] !== g || t[11] !== u) {
    let e = u?.flatMap(gr) ?? [],
      r = ht({ conversationTitle: d, images: p?.kind === `post` ? Wt(p.post, e) : e, intl: l }),
      i = new Map(r.map(hr));
    _ = [];
    for (let e of u ?? []) {
      let t = [];
      for (let n of e.images) {
        let e = i.get(n.id);
        n.src == null || n.status !== `completed`
          ? t.push({ id: n.id, loading: !0 })
          : e != null && t.push(e);
      }
      _.push({ id: e.id, turnStartedAtMs: e.turnStartedAtMs, images: t });
    }
    let a = n.flatMap((e) =>
      i.has(e.id) || (g && R(e.src)) ? [] : [g && R(e.previewSrc) ? { ...e, previewSrc: e.src } : e],
    );
    ((v = _.slice(0, -1)),
      a.length > 0 && v.unshift({ id: `opening-images`, images: a, turnStartedAtMs: null }),
      (t[6] = d),
      (t[7] = n),
      (t[8] = l),
      (t[9] = p),
      (t[10] = g),
      (t[11] = u),
      (t[12] = _),
      (t[13] = v));
  } else ((_ = t[12]), (v = t[13]));
  let y = r.imageAssetResolver ?? m ?? void 0,
    b;
  t[14] !== y || t[15] !== a
    ? ((b = y?.validationSessionId == null ? y : { ...y, validationSessionId: a }),
      (t[14] = y),
      (t[15] = a),
      (t[16] = b))
    : (b = t[16]);
  let x;
  t[17] === _ ? (x = t[18]) : ((x = _.at(-1) ?? null), (t[17] = _), (t[18] = x));
  let S;
  return (
    t[19] !== d || t[20] !== v || t[21] !== h || t[22] !== r || t[23] !== b || t[24] !== x
      ? ((S = (0, vr.jsx)(Kn, {
          ...r,
          imageAssetResolver: b,
          conversationId: null,
          conversationTitle: d,
          historicalGeneratedImageGroups: v,
          liveTailGeneratedImageGroup: x,
          optimisticImageEditMessageId: h,
        })),
        (t[19] = d),
        (t[20] = v),
        (t[21] = h),
        (t[22] = r),
        (t[23] = b),
        (t[24] = x),
        (t[25] = S))
      : (S = t[25]),
    S
  );
}
function hr(e) {
  return [e.id, e];
}
function gr(e) {
  return e.images;
}
var _r, vr;
function yr() {
  return (yr = e(() => {
    ((_r = B()), v(), L(), pr(), Le(), a(), be(), Oe(), rt(), Mt(), kt(), Ut(), xt(), Be(), wt(), (vr = H()));
  }))();
}
function br(e) {
  let t = (0, wr.c)(19),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ initialImages: n, restrictLiveTailToInitialImages: i, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i));
  let a = i !== void 0 && i,
    o = f(Tt),
    s = w(),
    c = r.fallbackImage.sourceConversationId ?? o.value.routeConversationId,
    l = he(We, c),
    u = he(He, c),
    d = he(et, c),
    p = he(bt, c),
    m,
    h;
  t[4] !== p || t[5] !== l || t[6] !== n || t[7] !== s || t[8] !== u || t[9] !== a
    ? ((m =
        l == null
          ? []
          : Sr({
              conversationTitle: p,
              metadataImages: n,
              generatedImageTurns: Cr(l, n),
              imageNumberOffset: 0,
              intl: s,
            })),
      (h =
        u == null
          ? null
          : (Sr({
              conversationTitle: p,
              metadataImages: n,
              generatedImageTurns: a ? Cr([u], n) : [u],
              imageNumberOffset: m.reduce(xr, 0),
              intl: s,
            })[0] ?? null)),
      (t[4] = p),
      (t[5] = l),
      (t[6] = n),
      (t[7] = s),
      (t[8] = u),
      (t[9] = a),
      (t[10] = m),
      (t[11] = h))
    : ((m = t[10]), (h = t[11]));
  let g = h,
    _;
  return (
    t[12] !== c || t[13] !== p || t[14] !== m || t[15] !== g || t[16] !== d || t[17] !== r
      ? ((_ = (0, Tr.jsx)(Kn, {
          ...r,
          conversationId: c,
          conversationTitle: p,
          historicalGeneratedImageGroups: m,
          liveTailGeneratedImageGroup: g,
          optimisticImageEditMessageId: d,
        })),
        (t[12] = c),
        (t[13] = p),
        (t[14] = m),
        (t[15] = g),
        (t[16] = d),
        (t[17] = r),
        (t[18] = _))
      : (_ = t[18]),
    _
  );
}
function xr(e, t) {
  return e + t.images.length;
}
function Sr({
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
function Cr(e, t) {
  let n = new Set(t.map((e) => e.id));
  return e.flatMap((e) => {
    let t = e.images.filter((e) => n.has(e.id));
    return t.length === 0 ? [] : [{ ...e, images: t }];
  });
}
var wr, Tr;
function Er() {
  return (Er = e(() => {
    ((wr = B()), v(), L(), Dt(), tt(), At(), pr(), at(), (Tr = H()));
  }))();
}
export { Kn as a, yr as i, Er as n, pr as o, mr as r, br as t };
//# sourceMappingURL=local-generated-image-side-panel-7b37869cd190.js.map
