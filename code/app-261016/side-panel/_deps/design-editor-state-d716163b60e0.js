import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CH as t,
  DB as n,
  Ev as r,
  FBt as i,
  FTt as a,
  ITt as o,
  LNt as s,
  MNt as c,
  NNt as l,
  OB as u,
  OH as d,
  PBt as f,
  Sv as p,
  TY as m,
  Tv as h,
  Txt as g,
  Uz as _,
  Wz as v,
  XOt as y,
  Y3 as b,
  Z3 as x,
  _D as S,
  _xt as C,
  ck as w,
  dM as T,
  eM as E,
  fD as D,
  gD as O,
  lk as k,
  mD as A,
  nB as j,
  okt as M,
  pD as ee,
  rB as N,
  rk as P,
  sct as F,
  tk as I,
  uk as L,
  xv as R,
} from "./app-shared-2feb3d4c6fcc.js";
import { gTr as z, hTr as B } from "./app-initial-ad16eaadf81f.js";
import { Au as V } from "./app-primary-3e00728c2a4c.js";
import { n as te, r as ne } from "./inspector-color-field-eb70b6035b23.js";
import { n as re, t as ie } from "./range-slider-d313bf266f03.js";
function ae(e) {
  let t = (0, oe.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, H.jsx)(`div`, {
          className: `grid grid-cols-[minmax(0,--spacing(30))_minmax(0,1fr)] items-start gap-x-3 gap-y-1.5 px-4 py-2`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var oe, H;
function U() {
  return (U = e(() => {
    ((oe = f()), (H = s()));
  }))();
}
function W(e) {
  let t = (0, se.c)(53),
    {
      ariaDescribedBy: n,
      ariaLabel: r,
      disabled: i,
      portalContainer: a,
      value: o,
      onDragActiveChange: s,
      onEditingActiveChange: c,
      onValueChange: l,
    } = e,
    u = (0, G.useRef)(null),
    d = (0, G.useRef)(!1),
    [f, p] = (0, G.useState)(null),
    m = v(),
    h;
  t[0] === c
    ? (h = t[1])
    : ((h = (e) => {
        e || (p(null), c?.(d.current));
      }),
      (t[0] = c),
      (t[1] = h));
  let g;
  t[2] === f
    ? (g = t[3])
    : ((g =
        f != null && (0, K.jsx)(ee, { virtualRef: { current: { getBoundingClientRect: () => f.anchor } } })),
      (t[2] = f),
      (t[3] = g));
  let _;
  t[4] === o ? (_ = t[5]) : ((_ = { backgroundColor: o }), (t[4] = o), (t[5] = _));
  let y;
  t[6] !== n || t[7] !== r || t[8] !== i || t[9] !== _
    ? ((y = (0, K.jsx)(O, {
        asChild: !0,
        children: (0, K.jsx)(`button`, {
          "aria-describedby": n,
          "aria-label": r,
          className: `h-5 w-5 shrink-0 cursor-interaction overflow-hidden rounded-md border border-default bg-transparent p-0`,
          disabled: i,
          style: _,
          type: `button`,
        }),
      })),
      (t[6] = n),
      (t[7] = r),
      (t[8] = i),
      (t[9] = _),
      (t[10] = y))
    : (y = t[10]);
  let b = f == null ? `end` : `start`,
    x;
  t[11] === f
    ? (x = t[12])
    : ((x = f == null ? { height: `auto` } : { height: f.collapsed ? f.collapsedHeight : f.expandedHeight }),
      (t[11] = f),
      (t[12] = x));
  let S = f == null,
    C = f == null ? void 0 : `bottom`,
    w = f == null ? void 0 : 0,
    T = f?.expandedHeight,
    k = f == null ? void 0 : `hidden`,
    A;
  t[13] !== T || t[14] !== k
    ? ((A = { height: T, overflow: k }), (t[13] = T), (t[14] = k), (t[15] = A))
    : (A = t[15]);
  let j = m ? 0 : 150 / 1e3,
    M;
  t[16] === j ? (M = t[17]) : ((M = { duration: j, ease: E }), (t[16] = j), (t[17] = M));
  let N;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (e) => {
        typeof e == `object` &&
          `height` in e &&
          p((t) => (t?.collapsed === !1 && e.height === t.expandedHeight ? null : t));
      }),
      (t[18] = N))
    : (N = t[18]);
  let P, F, I;
  t[19] === c
    ? ((P = t[20]), (F = t[21]), (I = t[22]))
    : ((P = () => c?.(d.current)),
      (F = (e) => {
        e.key.startsWith(`Arrow`) && c?.(!0);
      }),
      (I = (e) => {
        e.key.startsWith(`Arrow`) && c?.(d.current);
      }),
      (t[19] = c),
      (t[20] = P),
      (t[21] = F),
      (t[22] = I));
  let L;
  t[23] !== f || t[24] !== s || t[25] !== m
    ? ((L = (e) => {
        let t = u.current,
          n = t?.querySelector(`.react-colorful__saturation`);
        if (e === `saturation` && f == null && t != null && n != null) {
          let e = t.getBoundingClientRect(),
            r = n.getBoundingClientRect(),
            i = parseFloat(getComputedStyle(t).height),
            a = e.height / i;
          p({
            anchor: new DOMRect(e.x, e.y, e.width, 0),
            expandedHeight: i,
            collapsedHeight: (r.height + 2 * (r.left - e.left)) / a,
            collapsed: !0,
          });
        } else p((t) => (t == null || (e == null && m) ? null : { ...t, collapsed: e === `saturation` }));
        s?.(e != null);
      }),
      (t[23] = f),
      (t[24] = s),
      (t[25] = m),
      (t[26] = L))
    : (L = t[26]);
  let R;
  t[27] === c
    ? (R = t[28])
    : ((R = (e) => {
        ((d.current = e), c?.(e));
      }),
      (t[27] = c),
      (t[28] = R));
  let z;
  t[29] !== r || t[30] !== l || t[31] !== L || t[32] !== R || t[33] !== o
    ? ((z = (0, K.jsx)(te, {
        initialView: `custom`,
        color: o,
        collapseControlsWhileDragging: !0,
        label: r,
        size: `compact`,
        onChange: l,
        onDragControlChange: L,
        onEyeDropperActiveChange: R,
        onPreviewChange: l,
      })),
      (t[29] = r),
      (t[30] = l),
      (t[31] = L),
      (t[32] = R),
      (t[33] = o),
      (t[34] = z))
    : (z = t[34]);
  let B;
  t[35] !== a ||
  t[36] !== A ||
  t[37] !== M ||
  t[38] !== P ||
  t[39] !== F ||
  t[40] !== I ||
  t[41] !== z ||
  t[42] !== b ||
  t[43] !== x ||
  t[44] !== S ||
  t[45] !== C ||
  t[46] !== w
    ? ((B = (0, K.jsx)(ce, {
        ref: u,
        align: b,
        animate: x,
        avoidCollisions: S,
        disablePadding: !0,
        initial: !1,
        portalContainer: a,
        side: C,
        sideOffset: w,
        size: `content`,
        style: A,
        transition: M,
        variant: `menu`,
        onAnimationComplete: N,
        onBlurCapture: P,
        onKeyDownCapture: F,
        onKeyUpCapture: I,
        children: z,
      })),
      (t[35] = a),
      (t[36] = A),
      (t[37] = M),
      (t[38] = P),
      (t[39] = F),
      (t[40] = I),
      (t[41] = z),
      (t[42] = b),
      (t[43] = x),
      (t[44] = S),
      (t[45] = C),
      (t[46] = w),
      (t[47] = B))
    : (B = t[47]);
  let V;
  return (
    t[48] !== h || t[49] !== g || t[50] !== B || t[51] !== y
      ? ((V = (0, K.jsxs)(D, { onOpenChange: h, children: [g, y, B] })),
        (t[48] = h),
        (t[49] = g),
        (t[50] = B),
        (t[51] = y),
        (t[52] = V))
      : (V = t[52]),
    V
  );
}
var se, G, K, ce;
function q() {
  return (q = e(() => {
    ((se = f()), a(), (G = i()), ne(), S(), _(), T(), (K = s()), (ce = o.create(A)));
  }))();
}
function le(e) {
  let t = (0, ue.c)(35),
    {
      ariaDescribedBy: n,
      control: r,
      disabled: i,
      value: a,
      onControlEditingActiveChange: o,
      onScrubActiveChange: s,
      onValueChange: c,
    } = e,
    l = (0, J.useRef)(null),
    u = (0, J.useRef)(null),
    d = (0, J.useRef)(!1),
    f;
  t[0] === s
    ? (f = t[1])
    : ((f = () => {
        u.current != null && ((u.current = null), s?.(null));
      }),
      (t[0] = s),
      (t[1] = f));
  let p = f,
    m;
  t[2] === o
    ? (m = t[3])
    : ((m = (e) => {
        d.current !== e && ((d.current = e), o?.(e));
      }),
      (t[2] = o),
      (t[3] = m));
  let h = m,
    g;
  t[4] !== p || t[5] !== h
    ? ((g = () => {
        (p(), h(!1));
      }),
      (t[4] = p),
      (t[5] = h),
      (t[6] = g))
    : (g = t[6]);
  let _ = g,
    v;
  t[7] === p
    ? (v = t[8])
    : ((v = (e) => {
        e.pointerId === u.current && p();
      }),
      (t[7] = p),
      (t[8] = v));
  let y = v,
    b = (0, J.useEffectEvent)(_),
    x;
  t[9] === b
    ? (x = t[10])
    : ((x = () => {
        let e = l.current?.ownerDocument.defaultView;
        return (
          e?.addEventListener(`blur`, b),
          () => {
            (e?.removeEventListener(`blur`, b), b());
          }
        );
      }),
      (t[9] = b),
      (t[10] = x));
  let S;
  (t[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((S = []), (t[11] = S)) : (S = t[11]),
    (0, J.useEffect)(x, S));
  let C;
  t[12] === c ? (C = t[13]) : ((C = (e) => c(e.currentTarget.valueAsNumber)), (t[12] = c), (t[13] = C));
  let w, T;
  t[14] === h
    ? ((w = t[15]), (T = t[16]))
    : ((w = (e) => {
        !e.defaultPrevented && Y.has(e.key) && h(!0);
      }),
      (T = (e) => {
        Y.has(e.key) && h(!1);
      }),
      (t[14] = h),
      (t[15] = w),
      (t[16] = T));
  let E;
  t[17] !== r.callback || t[18] !== i || t[19] !== s
    ? ((E = (e) => {
        e.button === 0 &&
          e.isPrimary &&
          !i &&
          ((u.current = e.pointerId),
          e.currentTarget.setPointerCapture(e.pointerId),
          s?.(r.callback, e.currentTarget));
      }),
      (t[17] = r.callback),
      (t[18] = i),
      (t[19] = s),
      (t[20] = E))
    : (E = t[20]);
  let D;
  return (
    t[21] !== n ||
    t[22] !== r.label ||
    t[23] !== r.max ||
    t[24] !== r.min ||
    t[25] !== r.step ||
    t[26] !== i ||
    t[27] !== _ ||
    t[28] !== y ||
    t[29] !== E ||
    t[30] !== C ||
    t[31] !== w ||
    t[32] !== T ||
    t[33] !== a
      ? ((D = (0, de.jsx)(ie, {
          ref: l,
          "aria-describedby": n,
          "aria-label": r.label,
          disabled: i,
          max: r.max,
          min: r.min,
          step: r.step,
          value: a,
          onBlur: _,
          onChange: C,
          onKeyDown: w,
          onKeyUp: T,
          onPointerDown: E,
          onPointerUp: y,
          onPointerCancel: y,
          onLostPointerCapture: y,
        })),
        (t[21] = n),
        (t[22] = r.label),
        (t[23] = r.max),
        (t[24] = r.min),
        (t[25] = r.step),
        (t[26] = i),
        (t[27] = _),
        (t[28] = y),
        (t[29] = E),
        (t[30] = C),
        (t[31] = w),
        (t[32] = T),
        (t[33] = a),
        (t[34] = D))
      : (D = t[34]),
    D
  );
}
var ue, J, de, Y;
function fe() {
  return (fe = e(() => {
    ((ue = f()),
      (J = i()),
      re(),
      (de = s()),
      (Y = new Set([
        `ArrowDown`,
        `ArrowLeft`,
        `ArrowRight`,
        `ArrowUp`,
        `End`,
        `Home`,
        `PageDown`,
        `PageUp`,
      ])));
  }))();
}
function pe(e) {
  let t = (0, X.c)(21),
    {
      dropdownPortalContainer: n,
      editorState: r,
      isEditable: i,
      onControlDragActiveChange: a,
      onControlEditingActiveChange: o,
      onScrubActiveChange: s,
      onReset: c,
      onValueChange: l,
    } = e,
    u = r.annotationControls;
  if (u.controls.length === 0) return null;
  let d;
  if (
    t[0] !== u.controls ||
    t[1] !== n ||
    t[2] !== r.annotationControlChanges ||
    t[3] !== i ||
    t[4] !== a ||
    t[5] !== o ||
    t[6] !== c ||
    t[7] !== s ||
    t[8] !== l
  ) {
    let e;
    (t[10] !== n ||
    t[11] !== r.annotationControlChanges ||
    t[12] !== i ||
    t[13] !== a ||
    t[14] !== o ||
    t[15] !== c ||
    t[16] !== s ||
    t[17] !== l
      ? ((e = (e) =>
          (0, Q.jsx)(
            me,
            {
              change: r.annotationControlChanges?.find((t) => t.callback === e.callback) ?? {
                callback: e.callback,
                previousValue: e.currentValue,
                value: e.currentValue ?? B(e),
              },
              control: e,
              dropdownPortalContainer: n,
              isEditable: i,
              onControlDragActiveChange: a,
              onControlEditingActiveChange: o,
              onScrubActiveChange: s,
              onReset: () => c(e.callback),
              onValueChange: (t) => l(e.callback, t),
            },
            e.callback,
          )),
        (t[10] = n),
        (t[11] = r.annotationControlChanges),
        (t[12] = i),
        (t[13] = a),
        (t[14] = o),
        (t[15] = c),
        (t[16] = s),
        (t[17] = l),
        (t[18] = e))
      : (e = t[18]),
      (d = u.controls.map(e)),
      (t[0] = u.controls),
      (t[1] = n),
      (t[2] = r.annotationControlChanges),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = c),
      (t[7] = s),
      (t[8] = l),
      (t[9] = d));
  } else d = t[9];
  let f;
  return (
    t[19] === d ? (f = t[20]) : ((f = (0, Q.jsx)(Q.Fragment, { children: d })), (t[19] = d), (t[20] = f)),
    f
  );
}
function me(e) {
  let t = (0, X.c)(42),
    {
      change: r,
      control: i,
      dropdownPortalContainer: a,
      isEditable: o,
      onControlDragActiveChange: s,
      onControlEditingActiveChange: l,
      onScrubActiveChange: u,
      onReset: d,
      onValueChange: f,
    } = e,
    p = M(),
    m = (0, Z.useId)(),
    g = o && r.previousValue != null && r.value !== r.previousValue,
    _;
  t[0] !== i.label || t[1] !== p
    ? ((_ = p.formatMessage(
        {
          id: `browserSidebarDesignEditor.resetProperty`,
          defaultMessage: `Reset {property}`,
          description: `Accessible label for resetting a design tweak property in the in-app browser design edit card`,
        },
        { property: i.label },
      )),
      (t[0] = i.label),
      (t[1] = p),
      (t[2] = _))
    : (_ = t[2]);
  let v = _,
    y;
  t[3] === i.label
    ? (y = t[4])
    : ((y = (0, Q.jsx)(`span`, { className: `truncate`, children: i.label })), (t[3] = i.label), (t[4] = y));
  let x;
  t[5] !== i.label || t[6] !== a || t[7] !== y
    ? ((x = (0, Q.jsx)(j, {
        delayOpen: !0,
        openWhen: `trigger-overflows`,
        portalContainer: a,
        tooltipContent: i.label,
        children: y,
      })),
      (t[5] = i.label),
      (t[6] = a),
      (t[7] = y),
      (t[8] = x))
    : (x = t[8]);
  let S;
  t[9] !== i.label || t[10] !== i.reference || t[11] !== a || t[12] !== p || t[13] !== m
    ? ((S =
        i.reference == null
          ? null
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(`span`, { id: m, className: `sr-only`, dir: `ltr`, children: i.reference }),
                (0, Q.jsx)(j, {
                  cloneCustomTrigger: !0,
                  delayOpen: !0,
                  interactive: !0,
                  portalContainer: a,
                  tooltipContent: (0, Q.jsx)(`span`, {
                    className: `font-mono text-xs select-text`,
                    dir: `ltr`,
                    children: i.reference,
                  }),
                  children: (0, Q.jsx)(b, {
                    "aria-label": p.formatMessage(
                      {
                        id: `browserSidebarDesignEditor.annotationControls.reference`,
                        defaultMessage: `Reference for {property}`,
                        description: `Accessible label for a code icon that shows the site's design-system reference for a named annotation control`,
                      },
                      { property: i.label },
                    ),
                    color: `secondary`,
                    radius: `full`,
                    size: `iconSm`,
                    uniform: !0,
                    children: (0, Q.jsx)(`span`, {
                      className: `inline-flex`,
                      children: (0, Q.jsx)(n, { className: `text-tertiary`, asset: R }),
                    }),
                  }),
                }),
              ],
            })),
      (t[9] = i.label),
      (t[10] = i.reference),
      (t[11] = a),
      (t[12] = p),
      (t[13] = m),
      (t[14] = S))
    : (S = t[14]);
  let C;
  t[15] !== x || t[16] !== S
    ? ((C = (0, Q.jsxs)(`span`, {
        className: `flex min-h-7 min-w-0 items-center gap-2 text-base text-secondary select-none`,
        children: [x, S],
      })),
      (t[15] = x),
      (t[16] = S),
      (t[17] = C))
    : (C = t[17]);
  let w = i.type !== `toggle` && `w-48`,
    T;
  t[18] === w
    ? (T = t[19])
    : ((T = c(`relative flex max-w-full min-w-0 items-center justify-end`, w)), (t[18] = w), (t[19] = T));
  let E;
  t[20] !== a || t[21] !== d || t[22] !== v || t[23] !== g
    ? ((E = g
        ? (0, Q.jsx)(`span`, {
            className: `absolute end-full top-1/2 me-1.5 -translate-y-1/2`,
            children: (0, Q.jsx)(j, {
              cloneCustomTrigger: !0,
              portalContainer: a,
              tooltipContent: v,
              children: (0, Q.jsx)(b, {
                "aria-label": v,
                color: `ghost`,
                size: `iconSm`,
                uniform: !0,
                onClick: d,
                children: (0, Q.jsx)(`span`, {
                  className: `inline-flex`,
                  children: (0, Q.jsx)(n, { asset: h }),
                }),
              }),
            }),
          })
        : null),
      (t[20] = a),
      (t[21] = d),
      (t[22] = v),
      (t[23] = g),
      (t[24] = E))
    : (E = t[24]);
  let D = i.reference == null ? void 0 : m,
    O;
  t[25] !== r ||
  t[26] !== i ||
  t[27] !== a ||
  t[28] !== o ||
  t[29] !== s ||
  t[30] !== l ||
  t[31] !== u ||
  t[32] !== f ||
  t[33] !== D
    ? ((O = (0, Q.jsx)(he, {
        ariaDescribedBy: D,
        change: r,
        control: i,
        dropdownPortalContainer: a,
        isEditable: o,
        onControlDragActiveChange: s,
        onControlEditingActiveChange: l,
        onScrubActiveChange: u,
        onValueChange: f,
      })),
      (t[25] = r),
      (t[26] = i),
      (t[27] = a),
      (t[28] = o),
      (t[29] = s),
      (t[30] = l),
      (t[31] = u),
      (t[32] = f),
      (t[33] = D),
      (t[34] = O))
    : (O = t[34]);
  let k;
  t[35] !== O || t[36] !== T || t[37] !== E
    ? ((k = (0, Q.jsx)(`span`, {
        className: `flex min-h-7 min-w-0 items-center justify-end ps-6`,
        children: (0, Q.jsxs)(`span`, { className: T, children: [E, O] }),
      })),
      (t[35] = O),
      (t[36] = T),
      (t[37] = E),
      (t[38] = k))
    : (k = t[38]);
  let A;
  return (
    t[39] !== k || t[40] !== C
      ? ((A = (0, Q.jsxs)(`div`, { className: `contents`, children: [C, k] })),
        (t[39] = k),
        (t[40] = C),
        (t[41] = A))
      : (A = t[41]),
    A
  );
}
function he(e) {
  let n = (0, X.c)(61),
    {
      ariaDescribedBy: r,
      change: i,
      control: a,
      dropdownPortalContainer: o,
      isEditable: s,
      onControlDragActiveChange: l,
      onControlEditingActiveChange: u,
      onScrubActiveChange: f,
      onValueChange: p,
    } = e;
  if (a.type === `select`) {
    let e;
    if (n[0] !== i.value || n[1] !== a.options) {
      let t;
      (n[3] === i.value ? (t = n[4]) : ((t = (e) => e.value === i.value), (n[3] = i.value), (n[4] = t)),
        (e = a.options.find(t)),
        (n[0] = i.value),
        (n[1] = a.options),
        (n[2] = e));
    } else e = n[2];
    let l = e?.label ?? String(i.value),
      f = a.label,
      m;
    n[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((m = c(
          `min-w-0 rounded-lg border border-primary-outline bg-primary-soft text-default shadow-sm outline-none transition-colors focus-within:border-ring focus-within:ring-1 focus-within:ring-ring`,
          `w-full`,
          `flex min-h-7 min-w-0 cursor-interaction items-center gap-2 overflow-hidden px-3 text-start`,
        )),
        (n[5] = m))
      : (m = n[5]);
    let h = s ? void 0 : l,
      g = i.value === i.previousValue ? `text-tertiary` : `text-default`,
      _;
    n[6] === g
      ? (_ = n[7])
      : ((_ = c(`min-w-0 flex-1 truncate font-mono text-xs`, g)), (n[6] = g), (n[7] = _));
    let v;
    n[8] !== l || n[9] !== _
      ? ((v = (0, Q.jsx)(`span`, { className: _, children: l })), (n[8] = l), (n[9] = _), (n[10] = v))
      : (v = n[10]);
    let y;
    n[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((y = (0, Q.jsx)(d, { className: `text-tertiary` })), (n[11] = y))
      : (y = n[11]);
    let b;
    n[12] !== r || n[13] !== a.label || n[14] !== h || n[15] !== v
      ? ((b = (0, Q.jsxs)(`button`, {
          "aria-describedby": r,
          "aria-label": f,
          className: m,
          title: h,
          type: `button`,
          children: [v, y],
        })),
        (n[12] = r),
        (n[13] = a.label),
        (n[14] = h),
        (n[15] = v),
        (n[16] = b))
      : (b = n[16]);
    let x = b,
      S = !s,
      C;
    if (n[17] !== i.value || n[18] !== a.options || n[19] !== p) {
      let e;
      (n[21] !== i.value || n[22] !== p
        ? ((e = (e) =>
            (0, Q.jsx)(
              P.Item,
              {
                className: `wrap-anywhere`,
                allowWrap: !0,
                rightIcon:
                  e.value === i.value
                    ? (0, Q.jsx)(t, {
                        className: `opacity-75 group-hover:opacity-100 group-focus:opacity-100`,
                      })
                    : null,
                onSelect: () => p(e.value),
                children: e.label,
              },
              e.value,
            )),
          (n[21] = i.value),
          (n[22] = p),
          (n[23] = e))
        : (e = n[23]),
        (C = a.options.map(e)),
        (n[17] = i.value),
        (n[18] = a.options),
        (n[19] = p),
        (n[20] = C));
    } else C = n[20];
    let w;
    n[24] === C
      ? (w = n[25])
      : ((w = (0, Q.jsx)(P.Section, {
          className: `flex max-h-[220px] flex-col overflow-y-auto`,
          children: C,
        })),
        (n[24] = C),
        (n[25] = w));
    let T;
    return (
      n[26] !== o || n[27] !== u || n[28] !== S || n[29] !== w || n[30] !== x
        ? ((T = (0, Q.jsx)(I, {
            align: `end`,
            contentWidth: `sm`,
            disabled: S,
            portalContainer: o,
            triggerButton: x,
            onOpenChange: u,
            children: w,
          })),
          (n[26] = o),
          (n[27] = u),
          (n[28] = S),
          (n[29] = w),
          (n[30] = x),
          (n[31] = T))
        : (T = n[31]),
      T
    );
  }
  if (a.type === `toggle`) {
    let e = i.value === !0,
      t = !s,
      o;
    return (
      n[32] !== r || n[33] !== a.label || n[34] !== p || n[35] !== e || n[36] !== t
        ? ((o = (0, Q.jsx)(k, {
            "aria-describedby": r,
            ariaLabel: a.label,
            checked: e,
            disabled: t,
            onChange: p,
          })),
          (n[32] = r),
          (n[33] = a.label),
          (n[34] = p),
          (n[35] = e),
          (n[36] = t),
          (n[37] = o))
        : (o = n[37]),
      o
    );
  }
  if (a.type === `color`) {
    let e = !s,
      t = i.value !== i.previousValue,
      c = typeof i.value == `string` ? i.value : (a.defaultValue ?? a.currentValue ?? `#ffffff`),
      d;
    return (
      n[38] !== r ||
      n[39] !== a.label ||
      n[40] !== o ||
      n[41] !== l ||
      n[42] !== u ||
      n[43] !== p ||
      n[44] !== e ||
      n[45] !== t ||
      n[46] !== c
        ? ((d = (0, Q.jsx)(ge, {
            ariaDescribedBy: r,
            ariaLabel: a.label,
            disabled: e,
            isEdited: t,
            maxLength: 512,
            portalContainer: o,
            onDragActiveChange: l,
            onEditingActiveChange: u,
            value: c,
            onValueChange: p,
          })),
          (n[38] = r),
          (n[39] = a.label),
          (n[40] = o),
          (n[41] = l),
          (n[42] = u),
          (n[43] = p),
          (n[44] = e),
          (n[45] = t),
          (n[46] = c),
          (n[47] = d))
        : (d = n[47]),
      d
    );
  }
  let m = typeof i.value == `number` ? i.value : (a.defaultValue ?? a.currentValue ?? a.min),
    h = !s,
    g;
  n[48] !== r || n[49] !== a || n[50] !== u || n[51] !== f || n[52] !== p || n[53] !== h || n[54] !== m
    ? ((g = (0, Q.jsx)(le, {
        ariaDescribedBy: r,
        control: a,
        disabled: h,
        value: m,
        onControlEditingActiveChange: u,
        onScrubActiveChange: f,
        onValueChange: p,
      })),
      (n[48] = r),
      (n[49] = a),
      (n[50] = u),
      (n[51] = f),
      (n[52] = p),
      (n[53] = h),
      (n[54] = m),
      (n[55] = g))
    : (g = n[55]);
  let _;
  n[56] === m
    ? (_ = n[57])
    : ((_ = (0, Q.jsx)(`span`, {
        className: `min-w-6 shrink-0 text-end font-mono text-xs text-secondary tabular-nums`,
        children: m,
      })),
      (n[56] = m),
      (n[57] = _));
  let v;
  return (
    n[58] !== g || n[59] !== _
      ? ((v = (0, Q.jsxs)(`span`, { className: `flex w-full min-w-0 items-center gap-2`, children: [g, _] })),
        (n[58] = g),
        (n[59] = _),
        (n[60] = v))
      : (v = n[60]),
    v
  );
}
function ge(e) {
  let t = (0, X.c)(38),
    {
      ariaDescribedBy: n,
      ariaLabel: r,
      disabled: i,
      isEdited: a,
      maxLength: o,
      placeholderValue: s,
      portalContainer: l,
      value: u,
      onDragActiveChange: d,
      onEditingActiveChange: f,
      onValueChange: p,
    } = e,
    [m, h] = (0, Z.useState)(null);
  m != null && m.value !== u && h(null);
  let g;
  t[0] !== m || t[1] !== u
    ? ((g = m?.value === u ? m.text : _e(u)), (t[0] = m), (t[1] = u), (t[2] = g))
    : (g = t[2]);
  let _ = g,
    v;
  t[3] === s ? (v = t[4]) : ((v = s == null ? void 0 : _e(s)), (t[3] = s), (t[4] = v));
  let y = v,
    b;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = c(
        `min-w-0 rounded-lg border border-primary-outline bg-primary-soft text-default shadow-sm outline-none transition-colors focus-within:border-ring focus-within:ring-1 focus-within:ring-ring`,
        `w-full`,
        `flex min-h-7 min-w-0 items-center gap-2 px-2`,
      )),
      (t[5] = b))
    : (b = t[5]);
  let x = u || s,
    S;
  t[6] === x ? (S = t[7]) : ((S = ve(x)), (t[6] = x), (t[7] = S));
  let C;
  t[8] === p
    ? (C = t[9])
    : ((C = (e) => {
        (h(null), p(e));
      }),
      (t[8] = p),
      (t[9] = C));
  let w;
  t[10] !== n ||
  t[11] !== r ||
  t[12] !== i ||
  t[13] !== d ||
  t[14] !== f ||
  t[15] !== l ||
  t[16] !== S ||
  t[17] !== C
    ? ((w = (0, Q.jsx)(W, {
        ariaDescribedBy: n,
        ariaLabel: r,
        disabled: i,
        portalContainer: l,
        value: S,
        onDragActiveChange: d,
        onEditingActiveChange: f,
        onValueChange: C,
      })),
      (t[10] = n),
      (t[11] = r),
      (t[12] = i),
      (t[13] = d),
      (t[14] = f),
      (t[15] = l),
      (t[16] = S),
      (t[17] = C),
      (t[18] = w))
    : (w = t[18]);
  let T = !a && `text-tertiary`,
    E;
  t[19] === T
    ? (E = t[20])
    : ((E = c(
        `min-w-0 appearance-none border-0 bg-transparent font-mono text-default outline-none ring-0 placeholder:text-tertiary focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0`,
        `h-7 w-full truncate text-start text-xs`,
        T,
      )),
      (t[19] = T),
      (t[20] = E));
  let D;
  t[21] === Symbol.for(`react.memo_cache_sentinel`) ? ((D = () => h(null)), (t[21] = D)) : (D = t[21]);
  let O;
  t[22] !== p || t[23] !== u
    ? ((O = (e) => {
        let t = e.target.value;
        if (!$.test(t)) {
          h({ value: u, text: t });
          return;
        }
        (h(null), p(t));
      }),
      (t[22] = p),
      (t[23] = u),
      (t[24] = O))
    : (O = t[24]);
  let k;
  t[25] !== n ||
  t[26] !== r ||
  t[27] !== i ||
  t[28] !== o ||
  t[29] !== O ||
  t[30] !== E ||
  t[31] !== y ||
  t[32] !== _ ||
  t[33] !== u
    ? ((k = (0, Q.jsx)(`input`, {
        "aria-describedby": n,
        "aria-label": r,
        className: E,
        dir: `ltr`,
        disabled: i,
        maxLength: o,
        value: _,
        placeholder: y,
        title: u,
        onBlur: D,
        onChange: O,
      })),
      (t[25] = n),
      (t[26] = r),
      (t[27] = i),
      (t[28] = o),
      (t[29] = O),
      (t[30] = E),
      (t[31] = y),
      (t[32] = _),
      (t[33] = u),
      (t[34] = k))
    : (k = t[34]);
  let A;
  return (
    t[35] !== k || t[36] !== w
      ? ((A = (0, Q.jsxs)(`span`, { className: b, children: [w, k] })), (t[35] = k), (t[36] = w), (t[37] = A))
      : (A = t[37]),
    A
  );
}
function _e(e) {
  return e
    .match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i)
    ?.slice(1)
    .every((e) => Number(e) <= 255)
    ? C(e)
    : e;
}
function ve(e) {
  let t = e?.trim() ?? ``,
    n = t.match($);
  if (n != null) {
    let e = n[1];
    return e.length <= 4
      ? `#${e
          .slice(0, 3)
          .split(``)
          .map((e) => `${e}${e}`)
          .join(``)}`
      : `#${e.slice(0, 6)}`;
  }
  let r = t.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/i);
  return r == null
    ? `#000000`
    : `#${r
        .slice(1, 4)
        .map((e) => Math.min(255, Number(e)).toString(16).padStart(2, `0`))
        .join(``)}`;
}
var X, Z, Q, $;
function ye() {
  return (ye = e(() => {
    ((X = f()),
      r(),
      p(),
      l(),
      F(),
      z(),
      (Z = i()),
      y(),
      x(),
      w(),
      u(),
      m(),
      L(),
      N(),
      q(),
      fe(),
      (Q = s()),
      ($ = /^#([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i));
  }))();
}
function be() {
  return (be = e(() => {
    g();
  }))();
}
function xe() {
  return (xe = e(() => {
    (g(), be(), V());
  }))();
}
function Se(e, t, n) {
  let r = e.annotationControls.controls.find((e) => e.callback === t);
  if (r == null) return e;
  let i = e.annotationControlChanges ?? [],
    a = i.find((e) => e.callback === t),
    o = a == null ? r.currentValue : a.previousValue,
    s = { callback: t, previousValue: o, value: n ?? o ?? B(r) };
  return { ...e, annotationControlChanges: a == null ? [...i, s] : i.map((e) => (e.callback === t ? s : e)) };
}
function Ce() {
  return (Ce = e(() => {
    (z(), g(), xe());
  }))();
}
export { W as a, U as c, ye as i, Se as n, q as o, pe as r, ae as s, Ce as t };
//# sourceMappingURL=design-editor-state-d716163b60e0.js.map
