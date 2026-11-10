import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $S as t,
  DB as n,
  Ep as r,
  FBt as i,
  FE as a,
  HO as o,
  IE as s,
  IO as c,
  JO as l,
  Jj as u,
  KO as ee,
  LNt as d,
  LO as f,
  MB as p,
  MNt as m,
  NNt as h,
  OB as g,
  PBt as _,
  RO as v,
  SY as te,
  TY as y,
  Tp as b,
  WO as x,
  XOt as S,
  Y3 as C,
  Yj as ne,
  Z3 as w,
  aC as T,
  dO as E,
  eC as D,
  g0 as O,
  h0 as k,
  jB as A,
  lC as j,
  lO as M,
  nB as re,
  oC as N,
  okt as ie,
  qO as P,
  rB as F,
  sC as I,
  sY as ae,
  tkt as L,
  yO as oe,
  zO as R,
} from "./app-shared-2feb3d4c6fcc.js";
import { $K as z, Jb as se, QK as ce, Yb as B } from "./app-initial-ad16eaadf81f.js";
import { Mu as le, ju as V } from "./app-primary-3e00728c2a4c.js";
import { a as H, t as ue } from "./PopcornManualEditHeaderControls-45cc4843f346.js";
import { n as de, t as fe } from "./annotation-mode-icon-eafbc4a6687a.js";
function pe(e, t, { preserveTyping: n }) {
  if (
    e.isTrusted &&
    e.code === `Space` &&
    !(
      !t &&
      (e.isComposing ||
        e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        (n &&
          e
            .composedPath()
            .some(
              (e) =>
                le(e) &&
                (e.isContentEditable ||
                  e.closest(
                    `input,textarea,select,[role='textbox'],[data-codex-composer],[data-codex-terminal]`,
                  ) != null),
            )))
    )
  )
    return (e.preventDefault(), e.stopImmediatePropagation(), e.type === `keydown`);
}
function me() {
  return (me = e(() => {
    V();
  }))();
}
function he(e) {
  let t = (0, U.c)(60),
    {
      attachButton: n,
      direction: r,
      disabled: i,
      disabledTooltipContent: o,
      isCommentMode: s,
      onDismissCoachmark: c,
      annotationTarget: l,
      onToggle: u,
      shortcutLabel: ee,
      showCoachmark: d,
    } = e,
    f = ie(),
    p = (0, W.useRef)(null),
    [m, h] = (0, W.useState)(!1),
    g;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (e) => {
        let { width: t, height: n } = oe(e);
        h(t > 0 && n > 0);
      }),
      (t[0] = g))
    : (g = t[0]);
  let _ = E(g),
    v;
  t[1] !== _ || t[2] !== d
    ? ((v = d
        ? (e) => {
            (_(e), e ?? h(!1));
          }
        : void 0),
      (t[1] = _),
      (t[2] = d),
      (t[3] = v))
    : (v = t[3]);
  let te;
  t[4] === v ? (te = t[5]) : ((te = ne(p, v)), (t[4] = v), (t[5] = te));
  let y = te,
    b = l?.browserTabId,
    x = l?.conversationId,
    S;
  t[6] === u ? (S = t[7]) : ((S = () => u(!0)), (t[6] = u), (t[7] = S));
  let C = (0, W.useEffectEvent)(S),
    w;
  t[8] !== C || t[9] !== n || t[10] !== b || t[11] !== x || t[12] !== i || t[13] !== s
    ? ((w = () => {
        let e = p.current;
        if (!(e == null || n == null || b == null || x == null || i || s))
          return n(e, { browserTabId: b, conversationId: x }, C);
      }),
      (t[8] = C),
      (t[9] = n),
      (t[10] = b),
      (t[11] = x),
      (t[12] = i),
      (t[13] = s),
      (t[14] = w))
    : (w = t[14]);
  let T;
  (t[15] !== n || t[16] !== b || t[17] !== x || t[18] !== i || t[19] !== s
    ? ((T = [n, b, x, i, s]), (t[15] = n), (t[16] = b), (t[17] = x), (t[18] = i), (t[19] = s), (t[20] = T))
    : (T = t[20]),
    (0, W.useLayoutEffect)(w, T));
  let D;
  t[21] === f
    ? (D = t[22])
    : ((D = f.formatMessage({
        id: `thread.browser.commentMode`,
        defaultMessage: `Annotate this page`,
        description: `Tooltip text for the browser annotate button`,
      })),
      (t[21] = f),
      (t[22] = D));
  let O = D,
    k;
  t[23] === f
    ? (k = t[24])
    : ((k = f.formatMessage({
        id: `thread.browser.commentModeCoachmarkDismiss`,
        defaultMessage: `Dismiss`,
        description: `Accessible label for dismissing the browser annotate coachmark`,
      })),
      (t[23] = f),
      (t[24] = k));
  let A = k,
    j;
  t[25] === f
    ? (j = t[26])
    : ((j = f.formatMessage({
        id: `thread.browser.commentModeLabel`,
        defaultMessage: `Annotate`,
        description: `Button label for toggling browser annotation mode, unchanged while selected`,
      })),
      (t[25] = f),
      (t[26] = j));
  let M;
  t[27] === u ? (M = t[28]) : ((M = () => u(!1)), (t[27] = u), (t[28] = M));
  let N;
  t[29] === s
    ? (N = t[30])
    : ((N = (0, G.jsx)(fe, { active: s, size: `secondary` })), (t[29] = s), (t[30] = N));
  let P;
  t[31] !== O || t[32] !== y || t[33] !== i || t[34] !== s || t[35] !== M || t[36] !== N || t[37] !== j
    ? ((P = (0, G.jsx)(ue, {
        ref: y,
        "aria-label": O,
        disabled: i,
        label: j,
        pressed: s,
        responsiveLabel: !0,
        size: `default`,
        variant: `annotation`,
        onClick: M,
        children: N,
      })),
      (t[31] = O),
      (t[32] = y),
      (t[33] = i),
      (t[34] = s),
      (t[35] = M),
      (t[36] = N),
      (t[37] = j),
      (t[38] = P))
    : (P = t[38]);
  let F;
  t[39] !== O || t[40] !== P
    ? ((F = (0, G.jsx)(a, { label: O, shrink: !0, children: P })), (t[39] = O), (t[40] = P), (t[41] = F))
    : (F = t[41]);
  let I = F;
  if (i && o != null) {
    let e;
    t[42] === I
      ? (e = t[43])
      : ((e = (0, G.jsx)(`span`, { className: `inline-flex min-w-0`, children: I })),
        (t[42] = I),
        (t[43] = e));
    let n;
    return (
      t[44] !== o || t[45] !== e
        ? ((n = (0, G.jsx)(re, { side: `bottom`, tooltipContent: o, children: e })),
          (t[44] = o),
          (t[45] = e),
          (t[46] = n))
        : (n = t[46]),
      n
    );
  }
  let ae;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, G.jsx)(L, {
        id: `thread.browser.commentModeCoachmarkDescription`,
        defaultMessage: `Leave visual comments for ChatGPT with a single click or drag to select an area`,
        description: `Body copy shown in the browser annotate coachmark`,
      })),
      (t[47] = ae))
    : (ae = t[47]);
  let R = s ? null : ee,
    z;
  t[48] === s
    ? (z = t[49])
    : ((z = s
        ? (0, G.jsx)(L, {
            id: `thread.browser.commentModeBrowseShortcutWithKeycap`,
            defaultMessage: `Click anywhere to annotate, or drag to select an area. Hold <key>Space</key> to temporarily use the webpage.`,
            description: `Tooltip explaining annotation gestures and holding the Space key to interact with the webpage. The key tag displays the translated Space key name as a keyboard badge.`,
            values: { key: ge },
          })
        : (0, G.jsx)(se, {})),
      (t[48] = s),
      (t[49] = z));
  let B = d && m,
    le = r === `rtl` ? `left` : `right`,
    V;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, G.jsx)(L, {
        id: `thread.browser.commentModeCoachmarkTitle`,
        defaultMessage: `Try Annotation Mode`,
        description: `Title shown in the browser annotate coachmark`,
      })),
      (t[50] = V))
    : (V = t[50]);
  let H;
  return (
    t[51] !== I ||
    t[52] !== i ||
    t[53] !== A ||
    t[54] !== c ||
    t[55] !== R ||
    t[56] !== z ||
    t[57] !== B ||
    t[58] !== le
      ? ((H = (0, G.jsx)(ce, {
          align: `start`,
          description: ae,
          disabled: i,
          dismissLabel: A,
          fallbackShortcut: R,
          fallbackSide: `bottom`,
          fallbackTooltipContent: z,
          onDismiss: c,
          open: B,
          side: le,
          sideOffset: 12,
          title: V,
          children: I,
        })),
        (t[51] = I),
        (t[52] = i),
        (t[53] = A),
        (t[54] = c),
        (t[55] = R),
        (t[56] = z),
        (t[57] = B),
        (t[58] = le),
        (t[59] = H))
      : (H = t[59]),
    H
  );
}
function ge(e) {
  return (0, G.jsx)(A, { keysLabel: e, variant: `tooltipInline` });
}
var U, W, G;
function _e() {
  return (_e = e(() => {
    ((U = _()), H(), (W = i()), S(), de(), B(), p(), F(), M(), z(), u(), s(), (G = d()));
  }))();
}
var K, ve;
function ye() {
  return (ye = e(() => {
    (i(),
      (K = d()),
      (ve = (e) =>
        (0, K.jsxs)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, K.jsx)(`path`, {
              d: `M3.33301 12.668C3.70018 12.668 3.99788 12.9659 3.99805 13.333V14.166C3.99805 15.1794 4.81968 16.0008 5.83301 16.001H6.66602L6.80078 16.0146C7.10343 16.0768 7.33076 16.3451 7.33105 16.666C7.33105 16.9872 7.10357 17.2552 6.80078 17.3174L6.66602 17.3311H5.83301C4.08514 17.3309 2.66797 15.9139 2.66797 14.166V13.333C2.66813 12.966 2.96595 12.6681 3.33301 12.668Z`,
            }),
            (0, K.jsx)(`path`, {
              d: `M16.666 12.668C17.0332 12.668 17.3309 12.9659 17.3311 13.333V14.166C17.3311 15.914 15.914 17.3311 14.166 17.3311H13.333C12.9659 17.3309 12.668 17.0332 12.668 16.666C12.6683 16.2991 12.9661 16.0011 13.333 16.001H14.166C15.1795 16.001 16.001 15.1795 16.001 14.166V13.333C16.0011 12.9661 16.2991 12.6683 16.666 12.668Z`,
            }),
            (0, K.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M10 6.83496C11.748 6.83496 13.165 8.25202 13.165 10C13.165 11.748 11.748 13.165 10 13.165C8.25202 13.165 6.83496 11.748 6.83496 10C6.83496 8.25202 8.25202 6.83496 10 6.83496ZM10 8.16504C8.98656 8.16504 8.16504 8.98656 8.16504 10C8.16504 11.0134 8.98656 11.835 10 11.835C11.0134 11.835 11.835 11.0134 11.835 10C11.835 8.98656 11.0134 8.16504 10 8.16504Z`,
            }),
            (0, K.jsx)(`path`, {
              d: `M6.80078 2.68164C7.1035 2.74379 7.33091 3.01193 7.33105 3.33301C7.33105 3.65422 7.1036 3.9222 6.80078 3.98438L6.66602 3.99805H5.83301C4.81978 3.99818 3.99821 4.81979 3.99805 5.83301V6.66602C3.99805 7.03329 3.70028 7.33105 3.33301 7.33105C2.96585 7.33092 2.66797 7.0332 2.66797 6.66602V5.83301C2.66813 4.08525 4.08524 2.6681 5.83301 2.66797H6.66602L6.80078 2.68164Z`,
            }),
            (0, K.jsx)(`path`, {
              d: `M14.166 2.66797C15.9139 2.66797 17.3309 4.08517 17.3311 5.83301V6.66602C17.3311 7.03329 17.0333 7.33105 16.666 7.33105C16.299 7.33075 16.001 7.03309 16.001 6.66602V5.83301C16.0008 4.81971 15.1794 3.99805 14.166 3.99805H13.333C12.9659 3.99791 12.668 3.7002 12.668 3.33301C12.6681 2.96596 12.966 2.6681 13.333 2.66797H14.166Z`,
            }),
          ],
        })));
  }))();
}
var q, be, xe, Se, Ce;
function we() {
  return (we = e(() => {
    ((q = `_Icon_1v4ex_1`),
      (be = `_screenshotIconCapture_1v4ex_78`),
      (xe = `_Color_1v4ex_17`),
      (Se = `_screenshotColorFlash_1v4ex_78`),
      (Ce = { Icon: q, screenshotIconCapture: be, Color: xe, screenshotColorFlash: Se }));
  }))();
}
function Te(e) {
  let t = (0, J.c)(30),
    {
      captureScreenshotLabel: n,
      disabled: r,
      hasBrowserPage: i,
      isCommentMode: a,
      prefersReducedMotion: o,
      reserveSpaceWhenHidden: s,
      onCapture: c,
    } = e,
    l = r !== void 0 && r,
    u = s !== void 0 && s,
    [ee, d] = (0, Y.useState)(null),
    f = !i || a,
    p =
      !i &&
      (u
        ? `pointer-events-none max-w-8 overflow-hidden opacity-0`
        : `pointer-events-none max-w-0 scale-95 overflow-hidden opacity-0`),
    h = i && a && `pointer-events-none max-w-0 translate-x-1 scale-90 overflow-hidden opacity-0`,
    g = i && !a && `max-w-8 translate-x-0 scale-100 overflow-visible opacity-100`,
    _;
  t[0] !== p || t[1] !== h || t[2] !== g
    ? ((_ = m(
        `ease-basic origin-right transition-[max-width,opacity,transform] duration-basic motion-reduce:transition-none`,
        p,
        h,
        g,
      )),
      (t[0] = p),
      (t[1] = h),
      (t[2] = g),
      (t[3] = _))
    : (_ = t[3]);
  let v = a || l || !i,
    te = l || !i ? `ghost` : `ghostActive`,
    y = l || !i,
    b = a ? -1 : void 0,
    x;
  t[4] !== c || t[5] !== o
    ? ((x = () => {
        (c(), o || d(Ee));
      }),
      (t[4] = c),
      (t[5] = o),
      (t[6] = x))
    : (x = t[6]);
  let S = `screenshot-icon-${ee ?? 0}`,
    ne = ee != null,
    w = ee != null,
    T,
    E;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = () => {
        d(null);
      }),
      (E = (0, X.jsx)(ve, { className: `icon-sm` })),
      (t[7] = T),
      (t[8] = E))
    : ((T = t[7]), (E = t[8]));
  let D;
  t[9] === w
    ? (D = t[10])
    : ((D = (0, X.jsx)(`span`, { className: Ce.Color, "data-animating": w, onAnimationEnd: T, children: E })),
      (t[9] = w),
      (t[10] = D));
  let O;
  t[11] !== S || t[12] !== ne || t[13] !== D
    ? ((O = (0, X.jsx)(`span`, { className: Ce.Icon, "data-animating": ne, children: D }, S)),
      (t[11] = S),
      (t[12] = ne),
      (t[13] = D),
      (t[14] = O))
    : (O = t[14]);
  let k;
  t[15] !== n || t[16] !== y || t[17] !== b || t[18] !== x || t[19] !== O || t[20] !== te
    ? ((k = (0, X.jsx)(C, {
        color: te,
        size: `toolbar`,
        uniform: !0,
        "data-browser-sidebar-skip-address-commit": `true`,
        disabled: y,
        "aria-label": n,
        title: n,
        tabIndex: b,
        onClick: x,
        children: O,
      })),
      (t[15] = n),
      (t[16] = y),
      (t[17] = b),
      (t[18] = x),
      (t[19] = O),
      (t[20] = te),
      (t[21] = k))
    : (k = t[21]);
  let A;
  t[22] !== n || t[23] !== k || t[24] !== v
    ? ((A = (0, X.jsx)(re, { tooltipContent: n, disabled: v, children: k })),
      (t[22] = n),
      (t[23] = k),
      (t[24] = v),
      (t[25] = A))
    : (A = t[25]);
  let j;
  return (
    t[26] !== A || t[27] !== f || t[28] !== _
      ? ((j = (0, X.jsx)(`div`, { "aria-hidden": f, className: _, children: A })),
        (t[26] = A),
        (t[27] = f),
        (t[28] = _),
        (t[29] = j))
      : (j = t[29]),
    j
  );
}
function Ee(e) {
  return (e ?? 0) + 1;
}
var J, Y, X;
function De() {
  return (De = e(() => {
    ((J = _()), h(), (Y = i()), w(), F(), ye(), we(), (X = d()));
  }))();
}
function Oe(e) {
  let t = (0, Z.c)(22),
    { onClose: n, onCloseAutoFocus: r, onConfirm: i } = e,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = (e) => {
        e || n();
      }),
      (t[0] = n),
      (t[1] = a));
  let o;
  t[2] === r
    ? (o = t[3])
    : ((o = {
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), r());
        },
      }),
      (t[2] = r),
      (t[3] = o));
  let s;
  t[4] !== n || t[5] !== i
    ? ((s = (e) => {
        (e.preventDefault(), n(), i());
      }),
      (t[4] = n),
      (t[5] = i),
      (t[6] = s))
    : (s = t[6]);
  let l;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(P, {
        className: `contents`,
        children: (0, Q.jsx)(L, {
          id: `thread.browser.tweaks.cancelConfirmTitle`,
          defaultMessage: `Discard all pending annotations?`,
          description: `Title for the confirmation dialog shown before discarding pending in-app browser annotations`,
        }),
      })),
      (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(R, {
        children: (0, Q.jsx)(v, {
          title: l,
          subtitle: (0, Q.jsx)(ee, {
            className: `contents`,
            children: (0, Q.jsx)(L, {
              id: `thread.browser.tweaks.cancelConfirmSubtitle`,
              defaultMessage: `All edits will be removed from the page`,
              description: `Subtitle for the confirmation dialog shown before discarding pending in-app browser annotations`,
            }),
          }),
          titleSize: `base`,
          subtitleSize: `sm`,
        }),
      })),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(L, {
        id: `thread.browser.tweaks.cancelConfirmKeep`,
        defaultMessage: `Cancel`,
        description: `Cancel button for the confirmation dialog shown before discarding pending in-app browser annotations`,
      })),
      (t[9] = d))
    : (d = t[9]);
  let p;
  t[10] === n
    ? (p = t[11])
    : ((p = (0, Q.jsx)(C, { color: `secondary`, onClick: n, children: d })), (t[10] = n), (t[11] = p));
  let m;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(C, {
        color: `danger`,
        type: `submit`,
        children: (0, Q.jsx)(L, {
          id: `thread.browser.tweaks.cancelConfirmClear`,
          defaultMessage: `Discard`,
          description: `Confirm button for the confirmation dialog shown before discarding pending in-app browser annotations`,
        }),
      })),
      (t[12] = m))
    : (m = t[12]);
  let h;
  t[13] === p
    ? (h = t[14])
    : ((h = (0, Q.jsx)(R, { className: `pt-2`, children: (0, Q.jsxs)(f, { children: [p, m] }) })),
      (t[13] = p),
      (t[14] = h));
  let g;
  t[15] !== s || t[16] !== h
    ? ((g = (0, Q.jsxs)(c, { as: `form`, className: `py-4`, onSubmit: s, children: [u, h] })),
      (t[15] = s),
      (t[16] = h),
      (t[17] = g))
    : (g = t[17]);
  let _;
  return (
    t[18] !== a || t[19] !== g || t[20] !== o
      ? ((_ = (0, Q.jsx)(x, {
          open: !0,
          onOpenChange: a,
          showDialogClose: !1,
          size: `compact`,
          contentProps: o,
          children: g,
        })),
        (t[18] = a),
        (t[19] = g),
        (t[20] = o),
        (t[21] = _))
      : (_ = t[21]),
    _
  );
}
var Z, Q;
function ke() {
  return (ke = e(() => {
    ((Z = _()), S(), w(), l(), o(), (Q = d()));
  }))();
}
var Ae, je;
function Me() {
  return (Me = e(() => {
    (i(),
      (Ae = d()),
      (je = (e) =>
        (0, Ae.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, Ae.jsx)(`path`, {
            d: `M8.50195 17.5V16.498H6.5C5.81091 16.498 5.25395 16.4987 4.80371 16.4619C4.40303 16.4292 4.04237 16.364 3.70606 16.2197L3.56348 16.1533C3.04236 15.8878 2.60586 15.4841 2.30176 14.9883L2.17969 14.7705C1.98772 14.3937 1.90851 13.9873 1.87109 13.5293C1.83432 13.0791 1.83496 12.522 1.83496 11.833V8.16699C1.83496 7.478 1.83432 6.92091 1.87109 6.4707C1.90851 6.0127 1.98772 5.60625 2.17969 5.22949L2.30176 5.01172C2.60586 4.5159 3.04236 4.1122 3.56348 3.84668L3.70606 3.78027C4.04237 3.636 4.40303 3.57083 4.80371 3.53809C5.25395 3.5013 5.81091 3.50195 6.5 3.50195H8.50195V2.5C8.50195 2.13273 8.79972 1.83496 9.16699 1.83496C9.53411 1.83514 9.83203 2.13284 9.83203 2.5V17.5C9.83203 17.8672 9.53411 18.1649 9.16699 18.165C8.79972 18.165 8.50195 17.8673 8.50195 17.5ZM16.835 11.833V8.16699C16.835 7.4561 16.8341 6.96259 16.8027 6.5791C16.7797 6.29739 16.7428 6.1076 16.6914 5.96387L16.6348 5.83398C16.4808 5.53176 16.2466 5.27886 15.959 5.10254L15.833 5.03125C15.675 4.9508 15.4635 4.89397 15.0879 4.86328C14.7044 4.83195 14.211 4.83203 13.5 4.83203H12.5C12.1328 4.83203 11.8351 4.53411 11.835 4.16699C11.835 3.79972 12.1327 3.50195 12.5 3.50195H13.5C14.1891 3.50195 14.746 3.5013 15.1963 3.53809C15.6541 3.5755 16.0599 3.65483 16.4365 3.84668L16.6553 3.96875C17.1509 4.27282 17.5549 4.70856 17.8203 5.22949L17.8867 5.37207C18.0311 5.70855 18.0961 6.06979 18.1289 6.4707C18.1657 6.92091 18.165 7.478 18.165 8.16699V11.833C18.165 12.522 18.1657 13.0791 18.1289 13.5293C18.0961 13.9302 18.0311 14.2914 17.8867 14.6279L17.8203 14.7705C17.5549 15.2914 17.1509 15.7272 16.6553 16.0312L16.4365 16.1533C16.0599 16.3452 15.6541 16.4245 15.1963 16.4619C14.746 16.4987 14.1891 16.498 13.5 16.498H12.5C12.1327 16.498 11.835 16.2003 11.835 15.833C11.8351 15.4659 12.1328 15.168 12.5 15.168H13.5C14.211 15.168 14.7044 15.1681 15.0879 15.1367C15.4635 15.106 15.675 15.0492 15.833 14.9688L15.959 14.8975C16.2466 14.7211 16.4808 14.4682 16.6348 14.166L16.6914 14.0361C16.7428 13.8924 16.7797 13.7026 16.8027 13.4209C16.8341 13.0374 16.835 12.5439 16.835 11.833Z`,
          }),
        })));
  }))();
}
var Ne, Pe;
function Fe() {
  return (Fe = e(() => {
    (i(),
      (Ne = d()),
      (Pe = (e) =>
        (0, Ne.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, Ne.jsx)(`path`, {
            d: `M8.50195 17.5V16.498H6.5C5.81091 16.498 5.25395 16.4987 4.80371 16.4619C4.40303 16.4292 4.04237 16.364 3.70606 16.2197L3.56348 16.1533C3.04236 15.8878 2.60586 15.4841 2.30176 14.9883L2.17969 14.7705C1.98772 14.3937 1.90851 13.9873 1.87109 13.5293C1.83432 13.0791 1.83496 12.522 1.83496 11.833V8.16699C1.83496 7.478 1.83432 6.92091 1.87109 6.4707C1.90851 6.0127 1.98772 5.60625 2.17969 5.22949L2.30176 5.01172C2.60586 4.5159 3.04236 4.1122 3.56348 3.84668L3.70606 3.78027C4.04237 3.636 4.40303 3.57083 4.80371 3.53809C5.25395 3.5013 5.81091 3.50195 6.5 3.50195H8.50195V2.5C8.50195 2.13273 8.79972 1.83496 9.16699 1.83496C9.53411 1.83514 9.83203 2.13284 9.83203 2.5V17.5C9.83203 17.8672 9.53411 18.1649 9.16699 18.165C8.79972 18.165 8.50195 17.8673 8.50195 17.5ZM16.835 11.833V8.16699C16.835 7.4561 16.8341 6.96259 16.8027 6.5791C16.7797 6.29739 16.7428 6.1076 16.6914 5.96387L16.6348 5.83398C16.4808 5.53176 16.2466 5.27886 15.959 5.10254L15.833 5.03125C15.675 4.9508 15.4635 4.89397 15.0879 4.86328C14.7044 4.83195 14.211 4.83203 13.5 4.83203H12.5C12.1328 4.83203 11.8351 4.53411 11.835 4.16699C11.835 3.79972 12.1327 3.50195 12.5 3.50195H13.5C14.1891 3.50195 14.746 3.5013 15.1963 3.53809C15.6541 3.5755 16.0599 3.65483 16.4365 3.84668L16.6553 3.96875C17.1509 4.27282 17.5549 4.70856 17.8203 5.22949L17.8867 5.37207C18.0311 5.70855 18.0961 6.06979 18.1289 6.4707C18.1657 6.92091 18.165 7.478 18.165 8.16699V11.833C18.165 12.522 18.1657 13.0791 18.1289 13.5293C18.0961 13.9302 18.0311 14.2914 17.8867 14.6279L17.8203 14.7705C17.5549 15.2914 17.1509 15.7272 16.6553 16.0312L16.4365 16.1533C16.0599 16.3452 15.6541 16.4245 15.1963 16.4619C14.746 16.4987 14.1891 16.498 13.5 16.498H12.5C12.1327 16.498 11.835 16.2003 11.835 15.833C11.8351 15.4659 12.1328 15.168 12.5 15.168H13.5C14.211 15.168 14.7044 15.1681 15.0879 15.1367C15.4635 15.106 15.675 15.0492 15.833 14.9688L15.959 14.8975C16.2466 14.7211 16.4808 14.4682 16.6348 14.166L16.6914 14.0361C16.7428 13.8924 16.7797 13.7026 16.8027 13.4209C16.8341 13.0374 16.835 12.5439 16.835 11.833ZM3.16504 11.833C3.16504 12.5439 3.16595 13.0374 3.19727 13.4209C3.22795 13.7965 3.28478 14.008 3.36524 14.166L3.43555 14.293C3.61186 14.5804 3.86488 14.8148 4.16699 14.9688L4.29688 15.0244C4.44065 15.0759 4.63016 15.1137 4.91211 15.1367C5.29563 15.1681 5.78896 15.168 6.5 15.168H8.50195V4.83203H6.5C5.78896 4.83203 5.29563 4.83195 4.91211 4.86328C4.63016 4.88632 4.44065 4.92413 4.29688 4.97559L4.16699 5.03125C3.86488 5.18518 3.61186 5.41959 3.43555 5.70703L3.36524 5.83398C3.28478 5.99198 3.22795 6.20352 3.19727 6.5791C3.16595 6.96259 3.16504 7.4561 3.16504 8.16699V11.833Z`,
          }),
        })));
  }))();
}
function Ie(e) {
  let r = (0, Le.c)(116),
    {
      toolbarRef: i,
      reducedMotion: a,
      hasPendingAnnotations: o,
      hasQueuedTweaks: s,
      isAddModifierPressed: c,
      isOriginalViewEnabled: l,
      isSuspended: u,
      isSubmitAvailable: ee,
      markersVisible: d,
      onAddToComposer: f,
      onDiscard: p,
      onExit: h,
      onOriginalViewBlur: g,
      onOriginalViewKeyDown: _,
      onOriginalViewKeyUp: v,
      onOriginalViewPointerCancel: y,
      onOriginalViewPointerDown: x,
      onOriginalViewPointerUp: S,
      onSubmit: ne,
      onToggleMarkers: w,
      pendingAnnotationCount: T,
      screenshotButton: E,
    } = e,
    D = u !== void 0 && u,
    [O, j] = (0, Re.useState)(!1),
    [M, N] = (0, Re.useState)(null),
    P = ie(),
    F;
  r[0] !== P || r[1] !== d
    ? ((F = d
        ? P.formatMessage({
            id: `thread.browser.tweaks.hideMarkers`,
            defaultMessage: `Hide markers`,
            description: `Tooltip for hiding saved annotation markers on browser pages`,
          })
        : P.formatMessage({
            id: `thread.browser.tweaks.showMarkers`,
            defaultMessage: `Show markers`,
            description: `Tooltip for showing saved annotation markers on browser pages`,
          })),
      (r[0] = P),
      (r[1] = d),
      (r[2] = F))
    : (F = r[2]);
  let I = F,
    oe;
  r[3] === P
    ? (oe = r[4])
    : ((oe = P.formatMessage({
        id: `thread.browser.tweaks.holdToViewOriginal`,
        defaultMessage: `Hold to view original`,
        description: `Tooltip and aria label for the button that shows the original page without tweaks applied while pressed`,
      })),
      (r[3] = P),
      (r[4] = oe));
  let R = oe,
    z;
  r[5] === P
    ? (z = r[6])
    : ((z = P.formatMessage({
        id: `thread.browser.tweaks.discardAnnotations`,
        defaultMessage: `Discard annotations`,
        description: `Tooltip and aria label for discarding pending in-app browser annotations`,
      })),
      (r[5] = P),
      (r[6] = z));
  let se = z,
    ce;
  r[7] === P
    ? (ce = r[8])
    : ((ce = P.formatMessage({
        id: `thread.browser.tweaks.exitAnnotations`,
        defaultMessage: `Exit annotation mode`,
        description: `Tooltip and aria label for exiting annotation mode while keeping pending annotations queued`,
      })),
      (r[7] = P),
      (r[8] = ce));
  let B = ce,
    le = l ? je : Pe,
    V;
  r[9] !== P || r[10] !== T
    ? ((V = T
        ? P.formatMessage(
            {
              id: `thread.browser.tweaks.sendPendingAnnotationCount`,
              defaultMessage: `Send {count, plural, one {# pending annotation} other {# pending annotations}}`,
              description: `Accessible label for the in-app browser annotation toolbar send button when annotations are pending`,
            },
            { count: T },
          )
        : void 0),
      (r[9] = P),
      (r[10] = T),
      (r[11] = V))
    : (V = r[11]);
  let H = V,
    ue;
  r[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, $.jsx)(te, {})), (r[12] = ue))
    : (ue = r[12]);
  let de;
  r[13] !== B || r[14] !== h
    ? ((de = (0, $.jsx)(C, {
        "aria-label": B,
        color: `ghostActive`,
        size: `toolbar`,
        uniform: !0,
        onClick: h,
        children: ue,
      })),
      (r[13] = B),
      (r[14] = h),
      (r[15] = de))
    : (de = r[15]);
  let fe;
  r[16] !== B || r[17] !== de
    ? ((fe = (0, $.jsx)(re, { tooltipContent: B, children: de })), (r[16] = B), (r[17] = de), (r[18] = fe))
    : (fe = r[18]);
  let pe = fe,
    me = o ? `ghostActive` : `ghost`,
    he = !o,
    ge;
  r[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = (0, $.jsx)(ae, {})), (r[19] = ge))
    : (ge = r[19]);
  let U;
  r[20] !== se || r[21] !== p || r[22] !== me || r[23] !== he
    ? ((U = (0, $.jsx)(C, {
        "aria-label": se,
        color: me,
        size: `toolbar`,
        uniform: !0,
        disabled: he,
        onClick: p,
        children: ge,
      })),
      (r[20] = se),
      (r[21] = p),
      (r[22] = me),
      (r[23] = he),
      (r[24] = U))
    : (U = r[24]);
  let W;
  r[25] !== se || r[26] !== U
    ? ((W = (0, $.jsx)(re, { tooltipContent: se, children: U })), (r[25] = se), (r[26] = U), (r[27] = W))
    : (W = r[27]);
  let G = W,
    _e = d === !1,
    K = d === !1 ? `tinted` : `ghostActive`,
    ve = !o,
    ye;
  r[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, $.jsx)(n, { asset: k })), (r[28] = ye))
    : (ye = r[28]);
  let q;
  r[29] !== I || r[30] !== w || r[31] !== _e || r[32] !== K || r[33] !== ve
    ? ((q = (0, $.jsx)(C, {
        "aria-label": I,
        "aria-pressed": _e,
        color: K,
        size: `toolbar`,
        uniform: !0,
        disabled: ve,
        onClick: w,
        children: ye,
      })),
      (r[29] = I),
      (r[30] = w),
      (r[31] = _e),
      (r[32] = K),
      (r[33] = ve),
      (r[34] = q))
    : (q = r[34]);
  let be;
  r[35] !== I || r[36] !== q
    ? ((be = (0, $.jsx)(re, { tooltipContent: I, children: q })), (r[35] = I), (r[36] = q), (r[37] = be))
    : (be = r[37]);
  let xe = be,
    Se = s ? `ghostActive` : `ghost`,
    Ce = !s,
    we = l && `scale-[0.8]`,
    Te;
  r[38] === we
    ? (Te = r[39])
    : ((Te = m(
        `inline-flex items-center justify-center transition-transform duration-basic motion-reduce:transition-none`,
        we,
      )),
      (r[38] = we),
      (r[39] = Te));
  let Ee;
  r[40] === le ? (Ee = r[41]) : ((Ee = (0, $.jsx)(le, { className: `icon-sm` })), (r[40] = le), (r[41] = Ee));
  let J;
  r[42] !== Te || r[43] !== Ee
    ? ((J = (0, $.jsx)(`span`, { className: Te, children: Ee })), (r[42] = Te), (r[43] = Ee), (r[44] = J))
    : (J = r[44]);
  let Y;
  r[45] !== R ||
  r[46] !== l ||
  r[47] !== g ||
  r[48] !== _ ||
  r[49] !== v ||
  r[50] !== y ||
  r[51] !== x ||
  r[52] !== S ||
  r[53] !== Se ||
  r[54] !== Ce ||
  r[55] !== J
    ? ((Y = (0, $.jsx)(C, {
        "aria-label": R,
        "aria-pressed": l,
        color: Se,
        size: `toolbar`,
        title: R,
        uniform: !0,
        disabled: Ce,
        onBlur: g,
        onKeyDown: _,
        onKeyUp: v,
        onPointerCancel: y,
        onPointerDown: x,
        onPointerUp: S,
        children: J,
      })),
      (r[45] = R),
      (r[46] = l),
      (r[47] = g),
      (r[48] = _),
      (r[49] = v),
      (r[50] = y),
      (r[51] = x),
      (r[52] = S),
      (r[53] = Se),
      (r[54] = Ce),
      (r[55] = J),
      (r[56] = Y))
    : (Y = r[56]);
  let X;
  r[57] !== R || r[58] !== Y
    ? ((X = (0, $.jsx)(re, { tooltipContent: R, children: Y })), (r[57] = R), (r[58] = Y), (r[59] = X))
    : (X = r[59]);
  let De = X,
    Oe = !o || (!c && ee === !1),
    Z;
  r[60] !== c || r[61] !== f || r[62] !== ne
    ? ((Z = () => {
        if (c) {
          f();
          return;
        }
        let e = ne();
        e != null &&
          (j(!0),
          e.then(
            () => j(!1),
            () => j(!1),
          ));
      }),
      (r[60] = c),
      (r[61] = f),
      (r[62] = ne),
      (r[63] = Z))
    : (Z = r[63]);
  let Q;
  r[64] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Q = (0, $.jsx)(L, {
        id: `thread.browser.tweaks.send`,
        defaultMessage: `Send`,
        description: `Send button in the in-app browser tweaks toolbar`,
      })),
      (r[64] = Q))
    : (Q = r[64]);
  let ke;
  r[65] !== O || r[66] !== H || r[67] !== Oe || r[68] !== Z
    ? ((ke = (0, $.jsx)(C, {
        "aria-label": H,
        color: `accent`,
        size: `toolbar`,
        disabled: Oe,
        loading: O,
        onClick: Z,
        children: Q,
      })),
      (r[65] = O),
      (r[66] = H),
      (r[67] = Oe),
      (r[68] = Z),
      (r[69] = ke))
    : (ke = r[69]);
  let Ae = ke,
    Me = !D,
    Ne = !D && `invisible`,
    Fe = D ? `opacity-100` : `pointer-events-none opacity-0`,
    Ie;
  r[70] !== Ne || r[71] !== Fe
    ? ((Ie = m(
        `inline-flex shrink-0 cursor-default items-center`,
        `col-start-1 row-start-1 justify-self-center text-default`,
        Ne,
        Fe,
      )),
      (r[70] = Ne),
      (r[71] = Fe),
      (r[72] = Ie))
    : (Ie = r[72]);
  let Be = !D,
    Ve;
  r[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ve = (0, $.jsx)(L, {
        id: `thread.browser.tweaks.spaceHeldTooltip`,
        defaultMessage: `Annotating is temporarily paused to allow interacting with the webpage`,
        description: `Tooltip explaining the Space-held indicator in the annotation toolbar`,
      })),
      (r[73] = Ve))
    : (Ve = r[73]);
  let He;
  r[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = (0, $.jsx)(A, {
        keysLabel: (0, $.jsxs)(`span`, {
          className: `flex items-center gap-1`,
          children: [
            (0, $.jsx)(n, { asset: b }),
            (0, $.jsx)(L, {
              id: `thread.browser.tweaks.spaceHeld`,
              defaultMessage: `Space`,
              description: `Label for the held Space key while temporarily browsing in annotation mode`,
            }),
          ],
        }),
      })),
      (r[74] = He))
    : (He = r[74]);
  let Ue;
  r[75] === Be
    ? (Ue = r[76])
    : ((Ue = (0, $.jsx)(re, { delayOpen: !0, disabled: Be, tooltipContent: Ve, children: He })),
      (r[75] = Be),
      (r[76] = Ue));
  let We;
  r[77] !== Me || r[78] !== Ie || r[79] !== Ue
    ? ((We = (0, $.jsx)(`span`, { "aria-hidden": Me, className: Ie, children: Ue })),
      (r[77] = Me),
      (r[78] = Ie),
      (r[79] = Ue),
      (r[80] = We))
    : (We = r[80]);
  let Ge = We,
    Ke;
  r[81] === P
    ? (Ke = r[82])
    : ((Ke = P.formatMessage({
        id: `thread.browser.tweaks.toolbarLabel`,
        defaultMessage: `Browser annotations`,
        description: `Accessible label for the floating browser annotation toolbar`,
      })),
      (r[81] = P),
      (r[82] = Ke));
  let qe;
  r[83] === P
    ? (qe = r[84])
    : ((qe = P.formatMessage({
        id: `thread.browser.tweaks.moveToolbar`,
        defaultMessage: `Move toolbar`,
        description: `Accessible label for the browser annotation toolbar drag handle`,
      })),
      (r[83] = P),
      (r[84] = qe));
  let Je;
  r[85] === P
    ? (Je = r[86])
    : ((Je = P.formatMessage({
        id: `thread.browser.tweaks.moveToolbarDescription`,
        defaultMessage: `Drag or use arrow keys to move. Press Home to reset.`,
        description: `Keyboard and pointer instructions for moving the browser annotation toolbar`,
      })),
      (r[85] = P),
      (r[86] = Je));
  let Ye = D && `invisible`,
    Xe;
  r[87] === Ye
    ? (Xe = r[88])
    : ((Xe = m(`col-start-1 row-start-1 truncate`, Ye)), (r[87] = Ye), (r[88] = Xe));
  let Ze;
  r[89] === T
    ? (Ze = r[90])
    : ((Ze = T
        ? (0, $.jsx)(L, {
            id: `thread.browser.tweaks.annotatingCount`,
            defaultMessage: `Annotating · {count}`,
            description: `Status and number of pending annotations in the floating browser toolbar`,
            values: { count: T },
          })
        : (0, $.jsx)(L, {
            id: `thread.browser.tweaks.annotatingStatus`,
            defaultMessage: `Annotating`,
            description: `Status in the browser annotation toolbar while annotation mode is active`,
          })),
      (r[89] = T),
      (r[90] = Ze));
  let Qe;
  r[91] !== D || r[92] !== Xe || r[93] !== Ze
    ? ((Qe = (0, $.jsx)(`span`, { "aria-hidden": D, className: Xe, children: Ze })),
      (r[91] = D),
      (r[92] = Xe),
      (r[93] = Ze),
      (r[94] = Qe))
    : (Qe = r[94]);
  let $e;
  r[95] !== Ge || r[96] !== Qe
    ? (($e = (0, $.jsx)(`div`, {
        className: `flex shrink-0 items-center px-2 text-sm select-none`,
        children: (0, $.jsxs)(`span`, { className: `grid min-w-0 items-center`, children: [Ge, Qe] }),
      })),
      (r[95] = Ge),
      (r[96] = Qe),
      (r[97] = $e))
    : ($e = r[97]);
  let et;
  r[98] !== G || r[99] !== pe || r[100] !== xe || r[101] !== De || r[102] !== E || r[103] !== Ae
    ? ((et = (0, $.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-1.5`,
        children: [E, xe, De, G, Ae, pe],
      })),
      (r[98] = G),
      (r[99] = pe),
      (r[100] = xe),
      (r[101] = De),
      (r[102] = E),
      (r[103] = Ae),
      (r[104] = et))
    : (et = r[104]);
  let tt;
  r[105] !== $e || r[106] !== et
    ? ((tt = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1.5 no-drag`,
        children: [$e, et],
      })),
      (r[105] = $e),
      (r[106] = et),
      (r[107] = tt))
    : (tt = r[107]);
  let nt;
  return (
    r[108] !== M ||
    r[109] !== a ||
    r[110] !== Ke ||
    r[111] !== qe ||
    r[112] !== Je ||
    r[113] !== tt ||
    r[114] !== i
      ? ((nt = (0, $.jsx)(t, {
          ref: i,
          tabIndex: -1,
          focusOnDrag: !0,
          reducedMotion: a,
          obstacles: ze,
          variant: `annotation`,
          label: Ke,
          dragHandleLabel: qe,
          dragHandleDescription: Je,
          position: M,
          onPositionChange: N,
          children: tt,
        })),
        (r[108] = M),
        (r[109] = a),
        (r[110] = Ke),
        (r[111] = qe),
        (r[112] = Je),
        (r[113] = tt),
        (r[114] = i),
        (r[115] = nt))
      : (nt = r[115]),
    nt
  );
}
var Le, Re, $, ze;
function Be() {
  return (Be = e(() => {
    ((Le = _()),
      r(),
      O(),
      h(),
      (Re = i()),
      S(),
      I(),
      w(),
      g(),
      y(),
      p(),
      F(),
      Me(),
      Fe(),
      D(),
      ($ = d()),
      (ze = { getRects: T, getSnapshot: N, subscribe: j }));
  }))();
}
export { Te as a, _e as c, ke as i, pe as l, Be as n, De as o, Oe as r, he as s, Ie as t, me as u };
//# sourceMappingURL=tweaks-toolbar-view-20b066a424b7.js.map
