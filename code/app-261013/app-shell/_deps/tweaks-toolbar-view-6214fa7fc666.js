import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AS as n,
  CS as r,
  FD as i,
  IDt as a,
  Iz as o,
  Kat as s,
  Lz as c,
  MS as l,
  Mz as u,
  ND as d,
  Nz as f,
  PS as p,
  SJ as m,
  TJ as h,
  TS as g,
  UD as _,
  VDt as v,
  Xf as y,
  Yf as b,
  _1 as ee,
  _Mt as x,
  _O as S,
  aj as C,
  cE as w,
  cO as T,
  cz as E,
  fO as D,
  gMt as O,
  gO as k,
  jDt as A,
  jS as j,
  lO as M,
  mO as N,
  oO as P,
  oj as F,
  qat as I,
  sJ as L,
  sO as R,
  sz as te,
  t3 as z,
  v1 as B,
  vO as V,
  vzt as H,
  wS as ne,
  wkt as U,
  xMt as W,
  ykt as re,
  yzt as G,
} from "./app-shared-bbfeca5e5737.js";
import { AG as K, kG as ie } from "./app-initial-5851df3f6cb1.js";
import { bu as ae, xu as oe } from "./app-primary-fe8a450b3b04.js";
import { a as se, t as ce } from "./PopcornManualEditHeaderControls-e0458d509e7c.js";
import { n as le, t as ue } from "./annotation-mode-icon-c9f59d42793c.js";
function de(e, t, { preserveTyping: n }) {
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
                oe(e) &&
                (e.isContentEditable ||
                  e.closest(
                    `input,textarea,select,[role='textbox'],[data-codex-composer],[data-codex-terminal]`,
                  ) != null),
            )))
    )
  )
    return (e.preventDefault(), e.stopImmediatePropagation(), e.type === `keydown`);
}
function fe() {
  return (fe = e(() => {
    ae();
  }))();
}
var pe, me;
function he() {
  return (he = e(() => {
    ((pe = `_active_yuua6_2`), (me = { active: pe }));
  }))();
}
function ge(e) {
  let n = (0, _e.c)(51),
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m,
    h;
  n[0] === e
    ? ((r = n[1]),
      (i = n[2]),
      (a = n[3]),
      (o = n[4]),
      (s = n[5]),
      (c = n[6]),
      (l = n[7]),
      (u = n[8]),
      (d = n[9]),
      (f = n[10]),
      (p = n[11]),
      (m = n[12]),
      (h = n[13]))
    : (({
        active: r,
        activeHoverSuppressed: i,
        activeLabel: a,
        className: s,
        compact: h,
        direction: l,
        dir: c,
        disabled: u,
        label: d,
        onActiveHoverSuppressedChange: f,
        onClick: p,
        onPointerLeave: m,
        ...o
      } = e),
      (n[0] = e),
      (n[1] = r),
      (n[2] = i),
      (n[3] = a),
      (n[4] = o),
      (n[5] = s),
      (n[6] = c),
      (n[7] = l),
      (n[8] = u),
      (n[9] = d),
      (n[10] = f),
      (n[11] = p),
      (n[12] = m),
      (n[13] = h));
  let g = h !== void 0 && h,
    [_, v] = (0, ve.useState)(!1),
    y = i ?? _,
    b = f ?? v,
    ee = u ? `ghost` : `ghostActive`,
    x = r ? `default` : `large`,
    S = l ?? c,
    C = r ? a : d,
    w = r && y,
    T = g ? `min-w-7 px-1` : `min-w-8 px-1.5`,
    E = r && me.active,
    D;
  n[14] !== s || n[15] !== T || n[16] !== E
    ? ((D = O(
        `ease-basic relative isolate max-w-40 justify-start overflow-hidden transition-[background-color,border-color,color] duration-relaxed motion-reduce:transition-none disabled:opacity-100`,
        T,
        E,
        s,
      )),
      (n[14] = s),
      (n[15] = T),
      (n[16] = E),
      (n[17] = D))
    : (D = n[17]);
  let k;
  n[18] !== r || n[19] !== p || n[20] !== b
    ? ((k = (e) => {
        (b(!r), p(e));
      }),
      (n[18] = r),
      (n[19] = p),
      (n[20] = b),
      (n[21] = k))
    : (k = n[21]);
  let A;
  n[22] !== m || n[23] !== b
    ? ((A = (e) => {
        (b(!1), m?.(e));
      }),
      (n[22] = m),
      (n[23] = b),
      (n[24] = A))
    : (A = n[24]);
  let j;
  n[25] === r
    ? (j = n[26])
    : ((j = (0, q.jsx)(ue, { active: r, size: `secondary` })), (n[25] = r), (n[26] = j));
  let M = r ? `grid-cols-[1fr] opacity-100 duration-relaxed` : `grid-cols-[0fr] opacity-0 duration-basic`,
    N = g && `@max-lg/browser-toolbar:hidden`,
    P;
  n[27] !== M || n[28] !== N
    ? ((P = O(
        `ease-basic grid min-w-0 max-w-32 transition-[grid-template-columns,opacity] motion-reduce:transition-none`,
        M,
        N,
      )),
      (n[27] = M),
      (n[28] = N),
      (n[29] = P))
    : (P = n[29]);
  let F;
  n[30] === a
    ? (F = n[31])
    : ((F = (0, q.jsx)(`span`, {
        className: `min-w-0 overflow-hidden`,
        children: (0, q.jsx)(`span`, { className: `ms-1 block truncate`, children: a }),
      })),
      (n[30] = a),
      (n[31] = F));
  let I;
  n[32] !== P || n[33] !== F
    ? ((I = (0, q.jsx)(`span`, { className: P, children: F })), (n[32] = P), (n[33] = F), (n[34] = I))
    : (I = n[34]);
  let L;
  n[35] !== j || n[36] !== I
    ? ((L = (0, q.jsxs)(`span`, { className: `flex min-w-0 items-center`, children: [j, I] })),
      (n[35] = j),
      (n[36] = I),
      (n[37] = L))
    : (L = n[37]);
  let R;
  return (
    n[38] !== r ||
    n[39] !== o ||
    n[40] !== u ||
    n[41] !== k ||
    n[42] !== A ||
    n[43] !== L ||
    n[44] !== ee ||
    n[45] !== x ||
    n[46] !== S ||
    n[47] !== C ||
    n[48] !== w ||
    n[49] !== D
      ? ((R = (0, q.jsx)(t, {
          ...o,
          color: ee,
          radius: x,
          size: `toolbar`,
          dir: S,
          disabled: u,
          "aria-label": C,
          "aria-pressed": r,
          "data-hover-suppressed": w,
          className: D,
          onClick: k,
          onPointerLeave: A,
          children: L,
        })),
        (n[38] = r),
        (n[39] = o),
        (n[40] = u),
        (n[41] = k),
        (n[42] = A),
        (n[43] = L),
        (n[44] = ee),
        (n[45] = x),
        (n[46] = S),
        (n[47] = C),
        (n[48] = w),
        (n[49] = D),
        (n[50] = R))
      : (R = n[50]),
    R
  );
}
var _e, ve, q;
function ye() {
  return (ye = e(() => {
    ((_e = H()), x(), (ve = G()), z(), le(), he(), (q = W()));
  }))();
}
function be(e, t, n) {
  let r = s?.browserHost;
  if (r == null) return () => {};
  let i = () => {
      let { x: t, y: n, width: r, height: i } = e.getBoundingClientRect();
      return { x: t, y: n, width: r, height: i };
    },
    a = !1,
    o = i(),
    c = r.registerAnnotationButton(t, o, (t) => {
      !a && !e.disabled && e.contains(document.elementFromPoint(t.x, t.y)) && n();
    });
  Promise.resolve(c).catch(() => {});
  let l = () => {
      let e = i();
      (e.x !== o.x || e.y !== o.y || e.width !== o.width || e.height !== o.height) &&
        ((o = e), Promise.resolve(c.updateBounds(o)).catch(() => {}));
    },
    u,
    d = () => {
      (u?.(), (u = U(e, null, l, { elementResize: !1 })));
    },
    f = (t) => {
      t.target instanceof Element && t.target.contains(e) && d();
    },
    p = new ResizeObserver(d);
  return (
    p.observe(e),
    document.addEventListener(`transitionend`, f, !0),
    document.addEventListener(`transitioncancel`, f, !0),
    () => {
      ((a = !0),
        p.disconnect(),
        document.removeEventListener(`transitionend`, f, !0),
        document.removeEventListener(`transitioncancel`, f, !0),
        u?.(),
        c[Symbol.dispose]());
    }
  );
}
function xe() {
  return (xe = e(() => {
    (re(), I());
  }))();
}
function Se(e) {
  let t = (0, we.c)(56),
    {
      floating: n,
      activeHoverSuppressed: r,
      direction: o,
      disabled: s,
      disabledTooltipContent: c,
      isCommentMode: l,
      onActiveHoverSuppressedChange: u,
      onDismissCoachmark: d,
      annotationTarget: f,
      onToggle: p,
      shortcutLabel: m,
      showCoachmark: h,
    } = e,
    g = n !== void 0 && n,
    y = v(),
    b = (0, Te.useRef)(null),
    [ee, x] = (0, Te.useState)(!1),
    S;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (e) => {
        let { width: t, height: n } = _(e);
        x(t > 0 && n > 0);
      }),
      (t[0] = S))
    : (S = t[0]);
  let C = i(S),
    T;
  t[1] !== C || t[2] !== h
    ? ((T = h
        ? (e) => {
            (C(e), e ?? x(!1));
          }
        : void 0),
      (t[1] = C),
      (t[2] = h),
      (t[3] = T))
    : (T = t[3]);
  let E;
  t[4] === T ? (E = t[5]) : ((E = F(b, T)), (t[4] = T), (t[5] = E));
  let D = E,
    O = f?.browserTabId,
    k = f?.conversationId,
    A;
  t[6] === p ? (A = t[7]) : ((A = () => p(!0)), (t[6] = p), (t[7] = A));
  let j = (0, Te.useEffectEvent)(A),
    M;
  t[8] !== j || t[9] !== O || t[10] !== k || t[11] !== s || t[12] !== l
    ? ((M = () => {
        let e = b.current;
        if (!(e == null || O == null || k == null || s || l))
          return be(e, { browserTabId: O, conversationId: k }, j);
      }),
      (t[8] = j),
      (t[9] = O),
      (t[10] = k),
      (t[11] = s),
      (t[12] = l),
      (t[13] = M))
    : (M = t[13]);
  let N;
  (t[14] !== O || t[15] !== k || t[16] !== s || t[17] !== g || t[18] !== l
    ? ((N = [O, k, s, g, l]), (t[14] = O), (t[15] = k), (t[16] = s), (t[17] = g), (t[18] = l), (t[19] = N))
    : (N = t[19]),
    (0, Te.useLayoutEffect)(M, N));
  let P;
  t[20] === y
    ? (P = t[21])
    : ((P = y.formatMessage({
        id: `thread.browser.commentMode`,
        defaultMessage: `Annotate this page`,
        description: `Tooltip text for the browser annotate button`,
      })),
      (t[20] = y),
      (t[21] = P));
  let I = P,
    L;
  t[22] === y
    ? (L = t[23])
    : ((L = y.formatMessage({
        id: `thread.browser.commentModeActive`,
        defaultMessage: `Annotating`,
        description: `Label shown on the browser annotate button when active`,
      })),
      (t[22] = y),
      (t[23] = L));
  let R = L,
    z;
  t[24] === y
    ? (z = t[25])
    : ((z = y.formatMessage({
        id: `thread.browser.commentModeCoachmarkDismiss`,
        defaultMessage: `Dismiss`,
        description: `Accessible label for dismissing the browser annotate coachmark`,
      })),
      (t[24] = y),
      (t[25] = z));
  let B = z,
    V;
  t[26] !== r ||
  t[27] !== I ||
  t[28] !== R ||
  t[29] !== o ||
  t[30] !== s ||
  t[31] !== g ||
  t[32] !== D ||
  t[33] !== y ||
  t[34] !== l ||
  t[35] !== u ||
  t[36] !== p
    ? ((V = g
        ? (0, J.jsx)(w, {
            label: I,
            shrink: !0,
            children: (0, J.jsx)(ce, {
              ref: D,
              "aria-label": I,
              disabled: s,
              label: y.formatMessage({
                id: `thread.browser.commentModeLabel`,
                defaultMessage: `Annotate`,
                description: `Button label for toggling browser annotation mode, unchanged while selected`,
              }),
              pressed: l,
              responsiveLabel: !0,
              size: `default`,
              variant: `annotation`,
              onClick: () => p(!1),
              children: (0, J.jsx)(ue, { active: l, size: `secondary` }),
            }),
          })
        : (0, J.jsx)(ge, {
            ref: b,
            active: l,
            activeHoverSuppressed: r,
            activeLabel: R,
            compact: !0,
            direction: o,
            disabled: s,
            label: I,
            onActiveHoverSuppressedChange: u,
            onClick: () => p(!1),
          })),
      (t[26] = r),
      (t[27] = I),
      (t[28] = R),
      (t[29] = o),
      (t[30] = s),
      (t[31] = g),
      (t[32] = D),
      (t[33] = y),
      (t[34] = l),
      (t[35] = u),
      (t[36] = p),
      (t[37] = V))
    : (V = t[37]);
  let H = V;
  if (s && c != null) {
    let e;
    t[38] === H
      ? (e = t[39])
      : ((e = (0, J.jsx)(`span`, { className: `inline-flex min-w-0`, children: H })),
        (t[38] = H),
        (t[39] = e));
    let n;
    return (
      t[40] !== c || t[41] !== e
        ? ((n = (0, J.jsx)(te, { side: `bottom`, tooltipContent: c, children: e })),
          (t[40] = c),
          (t[41] = e),
          (t[42] = n))
        : (n = t[42]),
      n
    );
  }
  let ne;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, J.jsx)(a, {
        id: `thread.browser.commentModeCoachmarkDescription`,
        defaultMessage: `Leave visual comments for ChatGPT with a single click or drag to select an area`,
        description: `Body copy shown in the browser annotate coachmark`,
      })),
      (t[43] = ne))
    : (ne = t[43]);
  let U = l ? null : m,
    W;
  t[44] === l
    ? (W = t[45])
    : ((W = l
        ? (0, J.jsx)(a, {
            id: `thread.browser.commentModeBrowseShortcutWithKeycap`,
            defaultMessage: `Click anywhere to annotate, or drag to select an area. Hold <key>Space</key> to temporarily use the webpage.`,
            description: `Tooltip explaining annotation gestures and holding the Space key to interact with the webpage. The key tag displays the translated Space key name as a keyboard badge.`,
            values: { key: Ce },
          })
        : (0, J.jsx)(a, {
            id: `thread.browser.commentModeTooltip`,
            defaultMessage: `Point at items to ask about or change`,
            description: `Tooltip for entering browser annotation mode, where users point at items on the webpage to ask ChatGPT about them or request changes. The keyboard shortcut is displayed separately.`,
          })),
      (t[44] = l),
      (t[45] = W));
  let re = h && (!g || ee),
    G = (o === `rtl`) === g ? `left` : `right`,
    K;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, J.jsx)(a, {
        id: `thread.browser.commentModeCoachmarkTitle`,
        defaultMessage: `Try Annotation Mode`,
        description: `Title shown in the browser annotate coachmark`,
      })),
      (t[46] = K))
    : (K = t[46]);
  let ae;
  return (
    t[47] !== H ||
    t[48] !== s ||
    t[49] !== B ||
    t[50] !== d ||
    t[51] !== U ||
    t[52] !== W ||
    t[53] !== re ||
    t[54] !== G
      ? ((ae = (0, J.jsx)(ie, {
          align: `start`,
          description: ne,
          disabled: s,
          dismissLabel: B,
          fallbackShortcut: U,
          fallbackSide: `bottom`,
          fallbackTooltipContent: W,
          onDismiss: d,
          open: re,
          side: G,
          sideOffset: 12,
          title: K,
          children: H,
        })),
        (t[47] = H),
        (t[48] = s),
        (t[49] = B),
        (t[50] = d),
        (t[51] = U),
        (t[52] = W),
        (t[53] = re),
        (t[54] = G),
        (t[55] = ae))
      : (ae = t[55]),
    ae
  );
}
function Ce(e) {
  return (0, J.jsx)(o, { keysLabel: e, variant: `tooltipInline` });
}
var we, Te, J;
function Ee() {
  return (Ee = e(() => {
    ((we = H()), se(), (Te = G()), A(), ye(), le(), c(), E(), d(), K(), C(), r(), xe(), (J = W()));
  }))();
}
var Y, De;
function Oe() {
  return (Oe = e(() => {
    (G(),
      (Y = W()),
      (De = (e) =>
        (0, Y.jsxs)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, Y.jsx)(`path`, {
              d: `M3.33301 12.668C3.70018 12.668 3.99788 12.9659 3.99805 13.333V14.166C3.99805 15.1794 4.81968 16.0008 5.83301 16.001H6.66602L6.80078 16.0146C7.10343 16.0768 7.33076 16.3451 7.33105 16.666C7.33105 16.9872 7.10357 17.2552 6.80078 17.3174L6.66602 17.3311H5.83301C4.08514 17.3309 2.66797 15.9139 2.66797 14.166V13.333C2.66813 12.966 2.96595 12.6681 3.33301 12.668Z`,
            }),
            (0, Y.jsx)(`path`, {
              d: `M16.666 12.668C17.0332 12.668 17.3309 12.9659 17.3311 13.333V14.166C17.3311 15.914 15.914 17.3311 14.166 17.3311H13.333C12.9659 17.3309 12.668 17.0332 12.668 16.666C12.6683 16.2991 12.9661 16.0011 13.333 16.001H14.166C15.1795 16.001 16.001 15.1795 16.001 14.166V13.333C16.0011 12.9661 16.2991 12.6683 16.666 12.668Z`,
            }),
            (0, Y.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M10 6.83496C11.748 6.83496 13.165 8.25202 13.165 10C13.165 11.748 11.748 13.165 10 13.165C8.25202 13.165 6.83496 11.748 6.83496 10C6.83496 8.25202 8.25202 6.83496 10 6.83496ZM10 8.16504C8.98656 8.16504 8.16504 8.98656 8.16504 10C8.16504 11.0134 8.98656 11.835 10 11.835C11.0134 11.835 11.835 11.0134 11.835 10C11.835 8.98656 11.0134 8.16504 10 8.16504Z`,
            }),
            (0, Y.jsx)(`path`, {
              d: `M6.80078 2.68164C7.1035 2.74379 7.33091 3.01193 7.33105 3.33301C7.33105 3.65422 7.1036 3.9222 6.80078 3.98438L6.66602 3.99805H5.83301C4.81978 3.99818 3.99821 4.81979 3.99805 5.83301V6.66602C3.99805 7.03329 3.70028 7.33105 3.33301 7.33105C2.96585 7.33092 2.66797 7.0332 2.66797 6.66602V5.83301C2.66813 4.08525 4.08524 2.6681 5.83301 2.66797H6.66602L6.80078 2.68164Z`,
            }),
            (0, Y.jsx)(`path`, {
              d: `M14.166 2.66797C15.9139 2.66797 17.3309 4.08517 17.3311 5.83301V6.66602C17.3311 7.03329 17.0333 7.33105 16.666 7.33105C16.299 7.33075 16.001 7.03309 16.001 6.66602V5.83301C16.0008 4.81971 15.1794 3.99805 14.166 3.99805H13.333C12.9659 3.99791 12.668 3.7002 12.668 3.33301C12.6681 2.96596 12.966 2.6681 13.333 2.66797H14.166Z`,
            }),
          ],
        })));
  }))();
}
var ke, Ae, je, Me, Ne;
function Pe() {
  return (Pe = e(() => {
    ((ke = `_Icon_1v4ex_1`),
      (Ae = `_screenshotIconCapture_1v4ex_78`),
      (je = `_Color_1v4ex_17`),
      (Me = `_screenshotColorFlash_1v4ex_78`),
      (Ne = { Icon: ke, screenshotIconCapture: Ae, Color: je, screenshotColorFlash: Me }));
  }))();
}
function Fe(e) {
  let n = (0, Le.c)(30),
    {
      captureScreenshotLabel: r,
      disabled: i,
      hasBrowserPage: a,
      isCommentMode: o,
      prefersReducedMotion: s,
      reserveSpaceWhenHidden: c,
      onCapture: l,
    } = e,
    u = i !== void 0 && i,
    d = c !== void 0 && c,
    [f, p] = (0, Re.useState)(null),
    m = !a || o,
    h =
      !a &&
      (d
        ? `pointer-events-none max-w-8 overflow-hidden opacity-0`
        : `pointer-events-none max-w-0 scale-95 overflow-hidden opacity-0`),
    g = a && o && `pointer-events-none max-w-0 translate-x-1 scale-90 overflow-hidden opacity-0`,
    _ = a && !o && `max-w-8 translate-x-0 scale-100 overflow-visible opacity-100`,
    v;
  n[0] !== h || n[1] !== g || n[2] !== _
    ? ((v = O(
        `ease-basic origin-right transition-[max-width,opacity,transform] duration-basic motion-reduce:transition-none`,
        h,
        g,
        _,
      )),
      (n[0] = h),
      (n[1] = g),
      (n[2] = _),
      (n[3] = v))
    : (v = n[3]);
  let y = o || u || !a,
    b = u || !a ? `ghost` : `ghostActive`,
    ee = u || !a,
    x = o ? -1 : void 0,
    S;
  n[4] !== l || n[5] !== s
    ? ((S = () => {
        (l(), s || p(Ie));
      }),
      (n[4] = l),
      (n[5] = s),
      (n[6] = S))
    : (S = n[6]);
  let C = `screenshot-icon-${f ?? 0}`,
    w = f != null,
    T = f != null,
    E,
    D;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = () => {
        p(null);
      }),
      (D = (0, X.jsx)(De, { className: `icon-sm` })),
      (n[7] = E),
      (n[8] = D))
    : ((E = n[7]), (D = n[8]));
  let k;
  n[9] === T
    ? (k = n[10])
    : ((k = (0, X.jsx)(`span`, { className: Ne.Color, "data-animating": T, onAnimationEnd: E, children: D })),
      (n[9] = T),
      (n[10] = k));
  let A;
  n[11] !== C || n[12] !== w || n[13] !== k
    ? ((A = (0, X.jsx)(`span`, { className: Ne.Icon, "data-animating": w, children: k }, C)),
      (n[11] = C),
      (n[12] = w),
      (n[13] = k),
      (n[14] = A))
    : (A = n[14]);
  let j;
  n[15] !== r || n[16] !== ee || n[17] !== x || n[18] !== S || n[19] !== A || n[20] !== b
    ? ((j = (0, X.jsx)(t, {
        color: b,
        size: `toolbar`,
        uniform: !0,
        "data-browser-sidebar-skip-address-commit": `true`,
        disabled: ee,
        "aria-label": r,
        title: r,
        tabIndex: x,
        onClick: S,
        children: A,
      })),
      (n[15] = r),
      (n[16] = ee),
      (n[17] = x),
      (n[18] = S),
      (n[19] = A),
      (n[20] = b),
      (n[21] = j))
    : (j = n[21]);
  let M;
  n[22] !== r || n[23] !== j || n[24] !== y
    ? ((M = (0, X.jsx)(te, { tooltipContent: r, disabled: y, children: j })),
      (n[22] = r),
      (n[23] = j),
      (n[24] = y),
      (n[25] = M))
    : (M = n[25]);
  let N;
  return (
    n[26] !== M || n[27] !== m || n[28] !== v
      ? ((N = (0, X.jsx)(`div`, { "aria-hidden": m, className: v, children: M })),
        (n[26] = M),
        (n[27] = m),
        (n[28] = v),
        (n[29] = N))
      : (N = n[29]),
    N
  );
}
function Ie(e) {
  return (e ?? 0) + 1;
}
var Le, Re, X;
function ze() {
  return (ze = e(() => {
    ((Le = H()), x(), (Re = G()), z(), E(), Oe(), Pe(), (X = W()));
  }))();
}
function Be(e) {
  let n = (0, Ve.c)(22),
    { onClose: r, onCloseAutoFocus: i, onConfirm: o } = e,
    s;
  n[0] === r
    ? (s = n[1])
    : ((s = (e) => {
        e || r();
      }),
      (n[0] = r),
      (n[1] = s));
  let c;
  n[2] === i
    ? (c = n[3])
    : ((c = {
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), i());
        },
      }),
      (n[2] = i),
      (n[3] = c));
  let l;
  n[4] !== r || n[5] !== o
    ? ((l = (e) => {
        (e.preventDefault(), r(), o());
      }),
      (n[4] = r),
      (n[5] = o),
      (n[6] = l))
    : (l = n[6]);
  let u;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Z.jsx)(S, {
        className: `contents`,
        children: (0, Z.jsx)(a, {
          id: `thread.browser.tweaks.cancelConfirmTitle`,
          defaultMessage: `Discard all pending annotations?`,
          description: `Title for the confirmation dialog shown before discarding pending in-app browser annotations`,
        }),
      })),
      (n[7] = u))
    : (u = n[7]);
  let d;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Z.jsx)(M, {
        children: (0, Z.jsx)(T, {
          title: u,
          subtitle: (0, Z.jsx)(k, {
            className: `contents`,
            children: (0, Z.jsx)(a, {
              id: `thread.browser.tweaks.cancelConfirmSubtitle`,
              defaultMessage: `All edits will be removed from the page`,
              description: `Subtitle for the confirmation dialog shown before discarding pending in-app browser annotations`,
            }),
          }),
          titleSize: `base`,
          subtitleSize: `sm`,
        }),
      })),
      (n[8] = d))
    : (d = n[8]);
  let f;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Z.jsx)(a, {
        id: `thread.browser.tweaks.cancelConfirmKeep`,
        defaultMessage: `Cancel`,
        description: `Cancel button for the confirmation dialog shown before discarding pending in-app browser annotations`,
      })),
      (n[9] = f))
    : (f = n[9]);
  let p;
  n[10] === r
    ? (p = n[11])
    : ((p = (0, Z.jsx)(t, { color: `secondary`, onClick: r, children: f })), (n[10] = r), (n[11] = p));
  let m;
  n[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Z.jsx)(t, {
        color: `danger`,
        type: `submit`,
        children: (0, Z.jsx)(a, {
          id: `thread.browser.tweaks.cancelConfirmClear`,
          defaultMessage: `Discard`,
          description: `Confirm button for the confirmation dialog shown before discarding pending in-app browser annotations`,
        }),
      })),
      (n[12] = m))
    : (m = n[12]);
  let h;
  n[13] === p
    ? (h = n[14])
    : ((h = (0, Z.jsx)(M, { className: `pt-2`, children: (0, Z.jsxs)(R, { children: [p, m] }) })),
      (n[13] = p),
      (n[14] = h));
  let g;
  n[15] !== l || n[16] !== h
    ? ((g = (0, Z.jsxs)(P, { as: `form`, className: `py-4`, onSubmit: l, children: [d, h] })),
      (n[15] = l),
      (n[16] = h),
      (n[17] = g))
    : (g = n[17]);
  let _;
  return (
    n[18] !== s || n[19] !== g || n[20] !== c
      ? ((_ = (0, Z.jsx)(N, {
          open: !0,
          onOpenChange: s,
          showDialogClose: !1,
          size: `compact`,
          contentProps: c,
          children: g,
        })),
        (n[18] = s),
        (n[19] = g),
        (n[20] = c),
        (n[21] = _))
      : (_ = n[21]),
    _
  );
}
var Ve, Z;
function He() {
  return (He = e(() => {
    ((Ve = H()), A(), z(), V(), D(), (Z = W()));
  }))();
}
var Ue, We;
function Ge() {
  return (Ge = e(() => {
    (G(),
      (Ue = W()),
      (We = (e) =>
        (0, Ue.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, Ue.jsx)(`path`, {
            d: `M8.50195 17.5V16.498H6.5C5.81091 16.498 5.25395 16.4987 4.80371 16.4619C4.40303 16.4292 4.04237 16.364 3.70606 16.2197L3.56348 16.1533C3.04236 15.8878 2.60586 15.4841 2.30176 14.9883L2.17969 14.7705C1.98772 14.3937 1.90851 13.9873 1.87109 13.5293C1.83432 13.0791 1.83496 12.522 1.83496 11.833V8.16699C1.83496 7.478 1.83432 6.92091 1.87109 6.4707C1.90851 6.0127 1.98772 5.60625 2.17969 5.22949L2.30176 5.01172C2.60586 4.5159 3.04236 4.1122 3.56348 3.84668L3.70606 3.78027C4.04237 3.636 4.40303 3.57083 4.80371 3.53809C5.25395 3.5013 5.81091 3.50195 6.5 3.50195H8.50195V2.5C8.50195 2.13273 8.79972 1.83496 9.16699 1.83496C9.53411 1.83514 9.83203 2.13284 9.83203 2.5V17.5C9.83203 17.8672 9.53411 18.1649 9.16699 18.165C8.79972 18.165 8.50195 17.8673 8.50195 17.5ZM16.835 11.833V8.16699C16.835 7.4561 16.8341 6.96259 16.8027 6.5791C16.7797 6.29739 16.7428 6.1076 16.6914 5.96387L16.6348 5.83398C16.4808 5.53176 16.2466 5.27886 15.959 5.10254L15.833 5.03125C15.675 4.9508 15.4635 4.89397 15.0879 4.86328C14.7044 4.83195 14.211 4.83203 13.5 4.83203H12.5C12.1328 4.83203 11.8351 4.53411 11.835 4.16699C11.835 3.79972 12.1327 3.50195 12.5 3.50195H13.5C14.1891 3.50195 14.746 3.5013 15.1963 3.53809C15.6541 3.5755 16.0599 3.65483 16.4365 3.84668L16.6553 3.96875C17.1509 4.27282 17.5549 4.70856 17.8203 5.22949L17.8867 5.37207C18.0311 5.70855 18.0961 6.06979 18.1289 6.4707C18.1657 6.92091 18.165 7.478 18.165 8.16699V11.833C18.165 12.522 18.1657 13.0791 18.1289 13.5293C18.0961 13.9302 18.0311 14.2914 17.8867 14.6279L17.8203 14.7705C17.5549 15.2914 17.1509 15.7272 16.6553 16.0312L16.4365 16.1533C16.0599 16.3452 15.6541 16.4245 15.1963 16.4619C14.746 16.4987 14.1891 16.498 13.5 16.498H12.5C12.1327 16.498 11.835 16.2003 11.835 15.833C11.8351 15.4659 12.1328 15.168 12.5 15.168H13.5C14.211 15.168 14.7044 15.1681 15.0879 15.1367C15.4635 15.106 15.675 15.0492 15.833 14.9688L15.959 14.8975C16.2466 14.7211 16.4808 14.4682 16.6348 14.166L16.6914 14.0361C16.7428 13.8924 16.7797 13.7026 16.8027 13.4209C16.8341 13.0374 16.835 12.5439 16.835 11.833Z`,
          }),
        })));
  }))();
}
var Q, Ke;
function qe() {
  return (qe = e(() => {
    (G(),
      (Q = W()),
      (Ke = (e) =>
        (0, Q.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, Q.jsx)(`path`, {
            d: `M8.50195 17.5V16.498H6.5C5.81091 16.498 5.25395 16.4987 4.80371 16.4619C4.40303 16.4292 4.04237 16.364 3.70606 16.2197L3.56348 16.1533C3.04236 15.8878 2.60586 15.4841 2.30176 14.9883L2.17969 14.7705C1.98772 14.3937 1.90851 13.9873 1.87109 13.5293C1.83432 13.0791 1.83496 12.522 1.83496 11.833V8.16699C1.83496 7.478 1.83432 6.92091 1.87109 6.4707C1.90851 6.0127 1.98772 5.60625 2.17969 5.22949L2.30176 5.01172C2.60586 4.5159 3.04236 4.1122 3.56348 3.84668L3.70606 3.78027C4.04237 3.636 4.40303 3.57083 4.80371 3.53809C5.25395 3.5013 5.81091 3.50195 6.5 3.50195H8.50195V2.5C8.50195 2.13273 8.79972 1.83496 9.16699 1.83496C9.53411 1.83514 9.83203 2.13284 9.83203 2.5V17.5C9.83203 17.8672 9.53411 18.1649 9.16699 18.165C8.79972 18.165 8.50195 17.8673 8.50195 17.5ZM16.835 11.833V8.16699C16.835 7.4561 16.8341 6.96259 16.8027 6.5791C16.7797 6.29739 16.7428 6.1076 16.6914 5.96387L16.6348 5.83398C16.4808 5.53176 16.2466 5.27886 15.959 5.10254L15.833 5.03125C15.675 4.9508 15.4635 4.89397 15.0879 4.86328C14.7044 4.83195 14.211 4.83203 13.5 4.83203H12.5C12.1328 4.83203 11.8351 4.53411 11.835 4.16699C11.835 3.79972 12.1327 3.50195 12.5 3.50195H13.5C14.1891 3.50195 14.746 3.5013 15.1963 3.53809C15.6541 3.5755 16.0599 3.65483 16.4365 3.84668L16.6553 3.96875C17.1509 4.27282 17.5549 4.70856 17.8203 5.22949L17.8867 5.37207C18.0311 5.70855 18.0961 6.06979 18.1289 6.4707C18.1657 6.92091 18.165 7.478 18.165 8.16699V11.833C18.165 12.522 18.1657 13.0791 18.1289 13.5293C18.0961 13.9302 18.0311 14.2914 17.8867 14.6279L17.8203 14.7705C17.5549 15.2914 17.1509 15.7272 16.6553 16.0312L16.4365 16.1533C16.0599 16.3452 15.6541 16.4245 15.1963 16.4619C14.746 16.4987 14.1891 16.498 13.5 16.498H12.5C12.1327 16.498 11.835 16.2003 11.835 15.833C11.8351 15.4659 12.1328 15.168 12.5 15.168H13.5C14.211 15.168 14.7044 15.1681 15.0879 15.1367C15.4635 15.106 15.675 15.0492 15.833 14.9688L15.959 14.8975C16.2466 14.7211 16.4808 14.4682 16.6348 14.166L16.6914 14.0361C16.7428 13.8924 16.7797 13.7026 16.8027 13.4209C16.8341 13.0374 16.835 12.5439 16.835 11.833ZM3.16504 11.833C3.16504 12.5439 3.16595 13.0374 3.19727 13.4209C3.22795 13.7965 3.28478 14.008 3.36524 14.166L3.43555 14.293C3.61186 14.5804 3.86488 14.8148 4.16699 14.9688L4.29688 15.0244C4.44065 15.0759 4.63016 15.1137 4.91211 15.1367C5.29563 15.1681 5.78896 15.168 6.5 15.168H8.50195V4.83203H6.5C5.78896 4.83203 5.29563 4.83195 4.91211 4.86328C4.63016 4.88632 4.44065 4.92413 4.29688 4.97559L4.16699 5.03125C3.86488 5.18518 3.61186 5.41959 3.43555 5.70703L3.36524 5.83398C3.28478 5.99198 3.22795 6.20352 3.19727 6.5791C3.16595 6.96259 3.16504 7.4561 3.16504 8.16699V11.833Z`,
          }),
        })));
  }))();
}
function Je(e) {
  let n = (0, Ye.c)(153),
    {
      toolbarRef: r,
      floating: i,
      displayUrl: s,
      reducedMotion: c,
      hasPendingAnnotations: l,
      hasQueuedTweaks: d,
      isAddModifierPressed: f,
      isOriginalViewEnabled: p,
      isSuspended: h,
      isSubmitAvailable: g,
      markersVisible: _,
      onAddToComposer: y,
      onDiscard: x,
      onExit: S,
      onOriginalViewBlur: C,
      onOriginalViewKeyDown: w,
      onOriginalViewKeyUp: T,
      onOriginalViewPointerCancel: E,
      onOriginalViewPointerDown: D,
      onOriginalViewPointerUp: k,
      onSubmit: A,
      onToggleMarkers: j,
      pendingAnnotationCount: M,
      screenshotButton: N,
    } = e,
    P = h !== void 0 && h,
    [F, I] = (0, Xe.useState)(!1),
    [R, z] = (0, Xe.useState)(null),
    B = v(),
    V;
  n[0] !== B || n[1] !== _
    ? ((V = _
        ? B.formatMessage({
            id: `thread.browser.tweaks.hideMarkers`,
            defaultMessage: `Hide markers`,
            description: `Tooltip for hiding saved annotation markers on browser pages`,
          })
        : B.formatMessage({
            id: `thread.browser.tweaks.showMarkers`,
            defaultMessage: `Show markers`,
            description: `Tooltip for showing saved annotation markers on browser pages`,
          })),
      (n[0] = B),
      (n[1] = _),
      (n[2] = V))
    : (V = n[2]);
  let H = V,
    U;
  n[3] === B
    ? (U = n[4])
    : ((U = B.formatMessage({
        id: `thread.browser.tweaks.holdToViewOriginal`,
        defaultMessage: `Hold to view original`,
        description: `Tooltip and aria label for the button that shows the original page without tweaks applied while pressed`,
      })),
      (n[3] = B),
      (n[4] = U));
  let W = U,
    re;
  n[5] === B
    ? (re = n[6])
    : ((re = B.formatMessage({
        id: `thread.browser.tweaks.discardAnnotations`,
        defaultMessage: `Discard annotations`,
        description: `Tooltip and aria label for discarding pending in-app browser annotations`,
      })),
      (n[5] = B),
      (n[6] = re));
  let G = re,
    K;
  n[7] === B
    ? (K = n[8])
    : ((K = B.formatMessage({
        id: `thread.browser.tweaks.exitAnnotations`,
        defaultMessage: `Exit annotation mode`,
        description: `Tooltip and aria label for exiting annotation mode while keeping pending annotations queued`,
      })),
      (n[7] = B),
      (n[8] = K));
  let ie = K,
    ae = p ? We : Ke,
    oe;
  n[9] !== B || n[10] !== M
    ? ((oe = M
        ? B.formatMessage(
            {
              id: `thread.browser.tweaks.sendPendingAnnotationCount`,
              defaultMessage: `Send {count, plural, one {# pending annotation} other {# pending annotations}}`,
              description: `Accessible label for the in-app browser annotation toolbar send button when annotations are pending`,
            },
            { count: M },
          )
        : void 0),
      (n[9] = B),
      (n[10] = M),
      (n[11] = oe))
    : (oe = n[11]);
  let se = oe,
    ce;
  n[12] === Symbol.for(`react.memo_cache_sentinel`) ? ((ce = (0, $.jsx)(m, {})), (n[12] = ce)) : (ce = n[12]);
  let le;
  n[13] !== ie || n[14] !== S
    ? ((le = (0, $.jsx)(t, {
        "aria-label": ie,
        color: `ghostActive`,
        size: `toolbar`,
        uniform: !0,
        onClick: S,
        children: ce,
      })),
      (n[13] = ie),
      (n[14] = S),
      (n[15] = le))
    : (le = n[15]);
  let ue;
  n[16] !== ie || n[17] !== le
    ? ((ue = (0, $.jsx)(te, { tooltipContent: ie, children: le })), (n[16] = ie), (n[17] = le), (n[18] = ue))
    : (ue = n[18]);
  let de = ue,
    fe = l ? `ghostActive` : `ghost`,
    pe = !l,
    me;
  n[19] === Symbol.for(`react.memo_cache_sentinel`) ? ((me = (0, $.jsx)(L, {})), (n[19] = me)) : (me = n[19]);
  let he;
  n[20] !== G || n[21] !== x || n[22] !== fe || n[23] !== pe
    ? ((he = (0, $.jsx)(t, {
        "aria-label": G,
        color: fe,
        size: `toolbar`,
        uniform: !0,
        disabled: pe,
        onClick: x,
        children: me,
      })),
      (n[20] = G),
      (n[21] = x),
      (n[22] = fe),
      (n[23] = pe),
      (n[24] = he))
    : (he = n[24]);
  let ge;
  n[25] !== G || n[26] !== he
    ? ((ge = (0, $.jsx)(te, { tooltipContent: G, children: he })), (n[25] = G), (n[26] = he), (n[27] = ge))
    : (ge = n[27]);
  let _e = ge,
    ve = _ === !1,
    q = _ === !1 ? `tinted` : `ghostActive`,
    ye = !l,
    be;
  n[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, $.jsx)(u, { asset: ee })), (n[28] = be))
    : (be = n[28]);
  let xe;
  n[29] !== H || n[30] !== j || n[31] !== ve || n[32] !== q || n[33] !== ye
    ? ((xe = (0, $.jsx)(t, {
        "aria-label": H,
        "aria-pressed": ve,
        color: q,
        size: `toolbar`,
        uniform: !0,
        disabled: ye,
        onClick: j,
        children: be,
      })),
      (n[29] = H),
      (n[30] = j),
      (n[31] = ve),
      (n[32] = q),
      (n[33] = ye),
      (n[34] = xe))
    : (xe = n[34]);
  let Se;
  n[35] !== H || n[36] !== xe
    ? ((Se = (0, $.jsx)(te, { tooltipContent: H, children: xe })), (n[35] = H), (n[36] = xe), (n[37] = Se))
    : (Se = n[37]);
  let Ce = Se,
    we = d ? `ghostActive` : `ghost`,
    Te = !d,
    J = p && `scale-[0.8]`,
    Ee;
  n[38] === J
    ? (Ee = n[39])
    : ((Ee = O(
        `inline-flex items-center justify-center transition-transform duration-basic motion-reduce:transition-none`,
        J,
      )),
      (n[38] = J),
      (n[39] = Ee));
  let Y;
  n[40] === ae ? (Y = n[41]) : ((Y = (0, $.jsx)(ae, { className: `icon-sm` })), (n[40] = ae), (n[41] = Y));
  let De;
  n[42] !== Ee || n[43] !== Y
    ? ((De = (0, $.jsx)(`span`, { className: Ee, children: Y })), (n[42] = Ee), (n[43] = Y), (n[44] = De))
    : (De = n[44]);
  let Oe;
  n[45] !== W ||
  n[46] !== p ||
  n[47] !== C ||
  n[48] !== w ||
  n[49] !== T ||
  n[50] !== E ||
  n[51] !== D ||
  n[52] !== k ||
  n[53] !== we ||
  n[54] !== Te ||
  n[55] !== De
    ? ((Oe = (0, $.jsx)(t, {
        "aria-label": W,
        "aria-pressed": p,
        color: we,
        size: `toolbar`,
        title: W,
        uniform: !0,
        disabled: Te,
        onBlur: C,
        onKeyDown: w,
        onKeyUp: T,
        onPointerCancel: E,
        onPointerDown: D,
        onPointerUp: k,
        children: De,
      })),
      (n[45] = W),
      (n[46] = p),
      (n[47] = C),
      (n[48] = w),
      (n[49] = T),
      (n[50] = E),
      (n[51] = D),
      (n[52] = k),
      (n[53] = we),
      (n[54] = Te),
      (n[55] = De),
      (n[56] = Oe))
    : (Oe = n[56]);
  let ke;
  n[57] !== W || n[58] !== Oe
    ? ((ke = (0, $.jsx)(te, { tooltipContent: W, children: Oe })), (n[57] = W), (n[58] = Oe), (n[59] = ke))
    : (ke = n[59]);
  let Ae = ke,
    je = i ? `accent` : `primary`,
    Me = i ? void 0 : Qe,
    Ne = !l || (!f && g === !1),
    Pe;
  n[60] !== f || n[61] !== y || n[62] !== A
    ? ((Pe = () => {
        if (f) {
          y();
          return;
        }
        let e = A();
        e != null &&
          (I(!0),
          e.then(
            () => I(!1),
            () => I(!1),
          ));
      }),
      (n[60] = f),
      (n[61] = y),
      (n[62] = A),
      (n[63] = Pe))
    : (Pe = n[63]);
  let Fe;
  n[64] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fe = (0, $.jsx)(a, {
        id: `thread.browser.tweaks.send`,
        defaultMessage: `Send`,
        description: `Send button in the in-app browser tweaks toolbar`,
      })),
      (n[64] = Fe))
    : (Fe = n[64]);
  let Ie;
  n[65] !== i || n[66] !== M || n[67] !== se
    ? ((Ie =
        !i &&
        se &&
        (0, $.jsx)(`span`, {
          className: `ms-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-black/25 px-1 disambiguated-digits text-[10px] leading-4 font-semibold`,
          children: M,
        })),
      (n[65] = i),
      (n[66] = M),
      (n[67] = se),
      (n[68] = Ie))
    : (Ie = n[68]);
  let Le;
  n[69] !== F || n[70] !== se || n[71] !== je || n[72] !== Me || n[73] !== Ne || n[74] !== Pe || n[75] !== Ie
    ? ((Le = (0, $.jsxs)(t, {
        "aria-label": se,
        color: je,
        className: Me,
        size: `toolbar`,
        disabled: Ne,
        loading: F,
        onClick: Pe,
        children: [Fe, Ie],
      })),
      (n[69] = F),
      (n[70] = se),
      (n[71] = je),
      (n[72] = Me),
      (n[73] = Ne),
      (n[74] = Pe),
      (n[75] = Ie),
      (n[76] = Le))
    : (Le = n[76]);
  let Re = Le,
    X = !P,
    ze = i
      ? `col-start-1 row-start-1 justify-self-center text-default`
      : `text-chart-blue transition-opacity duration-basic no-drag motion-reduce:transition-none`,
    Be = i && !P && `invisible`,
    Ve = P ? `opacity-100` : `pointer-events-none opacity-0`,
    Z;
  n[77] !== ze || n[78] !== Be || n[79] !== Ve
    ? ((Z = O(`inline-flex shrink-0 cursor-default items-center`, ze, Be, Ve)),
      (n[77] = ze),
      (n[78] = Be),
      (n[79] = Ve),
      (n[80] = Z))
    : (Z = n[80]);
  let He = !P,
    Ue;
  n[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ue = (0, $.jsx)(a, {
        id: `thread.browser.tweaks.spaceHeldTooltip`,
        defaultMessage: `Annotating is temporarily paused to allow interacting with the webpage`,
        description: `Tooltip explaining the Space-held indicator in the annotation toolbar`,
      })),
      (n[81] = Ue))
    : (Ue = n[81]);
  let Ge;
  n[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ge = (0, $.jsx)(o, {
        keysLabel: (0, $.jsxs)(`span`, {
          className: `flex items-center gap-1`,
          children: [
            (0, $.jsx)(u, { asset: b }),
            (0, $.jsx)(a, {
              id: `thread.browser.tweaks.spaceHeld`,
              defaultMessage: `Space`,
              description: `Label for the held Space key while temporarily browsing in annotation mode`,
            }),
          ],
        }),
      })),
      (n[82] = Ge))
    : (Ge = n[82]);
  let Q;
  n[83] === He
    ? (Q = n[84])
    : ((Q = (0, $.jsx)(te, { delayOpen: !0, disabled: He, tooltipContent: Ue, children: Ge })),
      (n[83] = He),
      (n[84] = Q));
  let qe;
  n[85] !== X || n[86] !== Z || n[87] !== Q
    ? ((qe = (0, $.jsx)(`span`, { "aria-hidden": X, className: Z, children: Q })),
      (n[85] = X),
      (n[86] = Z),
      (n[87] = Q),
      (n[88] = qe))
    : (qe = n[88]);
  let Je = qe;
  if (!i) {
    let e = P ? `bg-surface-secondary` : Ze,
      t;
    n[89] === e
      ? (t = n[90])
      : ((t = O(
          `draggable grid h-full min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-3 text-default`,
          e,
        )),
        (n[89] = e),
        (n[90] = t));
    let i;
    n[91] !== _e || n[92] !== de
      ? ((i = (0, $.jsxs)(`div`, { className: `flex items-center gap-1.5 no-drag`, children: [de, _e] })),
        (n[91] = _e),
        (n[92] = de),
        (n[93] = i))
      : (i = n[93]);
    let o;
    n[94] !== s || n[95] !== p
      ? ((o =
          p &&
          (0, $.jsx)(a, {
            id: `thread.browser.tweaks.originalTitle`,
            defaultMessage: `Original • {url}`,
            description: `Centered title in the in-app browser tweaks toolbar while the original page preview is active`,
            values: { url: s },
          })),
        (n[94] = s),
        (n[95] = p),
        (n[96] = o))
      : (o = n[96]);
    let c;
    n[97] !== s || n[98] !== p || n[99] !== P
      ? ((c =
          !p &&
          (0, $.jsx)(a, {
            id: `thread.browser.tweaks.annotatingTitle`,
            defaultMessage: `<status>Annotating</status> • {url}`,
            description: `Centered title in the in-app browser tweaks toolbar, with the annotation status styled separately`,
            values: {
              url: s,
              status: (e) => (0, $.jsx)(`span`, { className: P ? `text-secondary` : void 0, children: e }),
            },
          })),
        (n[97] = s),
        (n[98] = p),
        (n[99] = P),
        (n[100] = c))
      : (c = n[100]);
    let l;
    n[101] !== o || n[102] !== c
      ? ((l = (0, $.jsxs)(`span`, { className: `min-w-0 truncate`, children: [o, c] })),
        (n[101] = o),
        (n[102] = c),
        (n[103] = l))
      : (l = n[103]);
    let u;
    n[104] !== Je || n[105] !== l
      ? ((u = (0, $.jsxs)(`div`, {
          className: `flex min-w-0 items-center justify-center gap-1.5 text-sm select-none`,
          children: [Je, l],
        })),
        (n[104] = Je),
        (n[105] = l),
        (n[106] = u))
      : (u = n[106]);
    let d;
    n[107] !== Ce || n[108] !== Ae || n[109] !== N || n[110] !== Re
      ? ((d = (0, $.jsxs)(`div`, {
          className: `flex items-center gap-3 justify-self-end no-drag`,
          children: [N, Ce, Ae, Re],
        })),
        (n[107] = Ce),
        (n[108] = Ae),
        (n[109] = N),
        (n[110] = Re),
        (n[111] = d))
      : (d = n[111]);
    let f;
    return (
      n[112] !== t || n[113] !== i || n[114] !== u || n[115] !== d || n[116] !== r
        ? ((f = (0, $.jsxs)(`div`, { ref: r, className: t, children: [i, u, d] })),
          (n[112] = t),
          (n[113] = i),
          (n[114] = u),
          (n[115] = d),
          (n[116] = r),
          (n[117] = f))
        : (f = n[117]),
      f
    );
  }
  let et;
  n[118] === B
    ? (et = n[119])
    : ((et = B.formatMessage({
        id: `thread.browser.tweaks.toolbarLabel`,
        defaultMessage: `Browser annotations`,
        description: `Accessible label for the floating browser annotation toolbar`,
      })),
      (n[118] = B),
      (n[119] = et));
  let tt;
  n[120] === B
    ? (tt = n[121])
    : ((tt = B.formatMessage({
        id: `thread.browser.tweaks.moveToolbar`,
        defaultMessage: `Move toolbar`,
        description: `Accessible label for the browser annotation toolbar drag handle`,
      })),
      (n[120] = B),
      (n[121] = tt));
  let nt;
  n[122] === B
    ? (nt = n[123])
    : ((nt = B.formatMessage({
        id: `thread.browser.tweaks.moveToolbarDescription`,
        defaultMessage: `Drag or use arrow keys to move. Press Home to reset.`,
        description: `Keyboard and pointer instructions for moving the browser annotation toolbar`,
      })),
      (n[122] = B),
      (n[123] = nt));
  let rt = P && `invisible`,
    it;
  n[124] === rt
    ? (it = n[125])
    : ((it = O(`col-start-1 row-start-1 truncate`, rt)), (n[124] = rt), (n[125] = it));
  let at;
  n[126] === M
    ? (at = n[127])
    : ((at = M
        ? (0, $.jsx)(a, {
            id: `thread.browser.tweaks.annotatingCount`,
            defaultMessage: `Annotating · {count}`,
            description: `Status and number of pending annotations in the floating browser toolbar`,
            values: { count: M },
          })
        : (0, $.jsx)(a, {
            id: `thread.browser.tweaks.annotatingStatus`,
            defaultMessage: `Annotating`,
            description: `Status in the browser annotation toolbar while annotation mode is active`,
          })),
      (n[126] = M),
      (n[127] = at));
  let ot;
  n[128] !== P || n[129] !== it || n[130] !== at
    ? ((ot = (0, $.jsx)(`span`, { "aria-hidden": P, className: it, children: at })),
      (n[128] = P),
      (n[129] = it),
      (n[130] = at),
      (n[131] = ot))
    : (ot = n[131]);
  let st;
  n[132] !== Je || n[133] !== ot
    ? ((st = (0, $.jsx)(`div`, {
        className: `flex shrink-0 items-center px-2 text-sm select-none`,
        children: (0, $.jsxs)(`span`, { className: `grid min-w-0 items-center`, children: [Je, ot] }),
      })),
      (n[132] = Je),
      (n[133] = ot),
      (n[134] = st))
    : (st = n[134]);
  let ct;
  n[135] !== _e || n[136] !== de || n[137] !== Ce || n[138] !== Ae || n[139] !== N || n[140] !== Re
    ? ((ct = (0, $.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-1.5`,
        children: [N, Ce, Ae, _e, Re, de],
      })),
      (n[135] = _e),
      (n[136] = de),
      (n[137] = Ce),
      (n[138] = Ae),
      (n[139] = N),
      (n[140] = Re),
      (n[141] = ct))
    : (ct = n[141]);
  let lt;
  n[142] !== st || n[143] !== ct
    ? ((lt = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1.5 no-drag`,
        children: [st, ct],
      })),
      (n[142] = st),
      (n[143] = ct),
      (n[144] = lt))
    : (lt = n[144]);
  let ut;
  return (
    n[145] !== R ||
    n[146] !== c ||
    n[147] !== et ||
    n[148] !== tt ||
    n[149] !== nt ||
    n[150] !== lt ||
    n[151] !== r
      ? ((ut = (0, $.jsx)(ne, {
          ref: r,
          tabIndex: -1,
          focusOnDrag: !0,
          reducedMotion: c,
          obstacles: $e,
          variant: `annotation`,
          label: et,
          dragHandleLabel: tt,
          dragHandleDescription: nt,
          position: R,
          onPositionChange: z,
          children: lt,
        })),
        (n[145] = R),
        (n[146] = c),
        (n[147] = et),
        (n[148] = tt),
        (n[149] = nt),
        (n[150] = lt),
        (n[151] = r),
        (n[152] = ut))
      : (ut = n[152]),
    ut
  );
}
var Ye, Xe, $, Ze, Qe, $e;
function et() {
  return (et = e(() => {
    ((Ye = H()),
      y(),
      B(),
      x(),
      (Xe = G()),
      A(),
      z(),
      f(),
      h(),
      c(),
      E(),
      Ge(),
      qe(),
      l(),
      g(),
      ($ = W()),
      (Ze = `bg-[color-mix(in_srgb,var(--color-surface)_82%,var(--color-chart-blue)_18%)]`),
      (Qe = `!border-transparent !bg-chart-blue !text-white enabled:hover:!bg-chart-blue/90 data-[state=open]:!bg-chart-blue/90`),
      ($e = { getRects: n, getSnapshot: j, subscribe: p }));
  }))();
}
export { Fe as a, Ee as c, He as i, de as l, et as n, ze as o, Be as r, Se as s, Je as t, fe as u };
//# sourceMappingURL=tweaks-toolbar-view-6214fa7fc666.js.map
