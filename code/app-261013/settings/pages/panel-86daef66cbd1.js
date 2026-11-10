import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  BS as r,
  Cot as i,
  Cz as a,
  HNt as o,
  IDt as s,
  Ixt as c,
  JR as l,
  KDt as u,
  Kat as d,
  Ld as f,
  Mz as p,
  Nz as m,
  Pxt as h,
  Rd as g,
  Sj as _,
  Tz as v,
  VDt as ee,
  VS as y,
  YR as b,
  _Mt as x,
  _wt as S,
  awt as C,
  cz as w,
  dj as T,
  fj as E,
  fwt as D,
  gMt as te,
  gwt as O,
  hot as k,
  iwt as ne,
  jDt as A,
  lot as j,
  mj as re,
  pj as ie,
  pwt as M,
  qat as N,
  sz as P,
  t3 as F,
  vz as I,
  vzt as L,
  wkt as ae,
  wot as oe,
  xMt as R,
  yMt as z,
  ykt as B,
  yz as V,
  yzt as H,
  zxt as U,
} from "./app-shared-bbfeca5e5737.js";
import {
  DY as W,
  SY as G,
  Z1n as K,
  _Y as q,
  a0n as se,
  abn as ce,
  b5 as le,
  bY as ue,
  fY as de,
  jY as fe,
  n7 as J,
  obn as pe,
  pY as Y,
  r7 as me,
  vY as he,
  wY as ge,
  x5 as _e,
} from "./app-initial-5851df3f6cb1.js";
import { n as ve, r as ye } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
import { i as be, n as xe, r as Se, t as Ce } from "./realtime-voice-codex-status-signal-15ca0100d4ef.js";
function we(e) {
  let t = (0, Te.c)(91),
    { children: n, dockTarget: r, embeddedSlot: i } = e,
    a = ee(),
    o = n.type,
    s = v(),
    c = b(),
    l = ye(),
    u = M(1),
    d = (0, X.useRef)(!1),
    f = i !== void 0,
    p;
  t[0] === f ? (p = t[1]) : ((p = { requested: f, ready: !0 }), (t[0] = f), (t[1] = p));
  let [m, h] = (0, X.useState)(p);
  m.requested !== f && h({ requested: f, ready: !f || r?.isDocked === !0 || c || !l });
  let g = f && !m.ready && !c,
    _ = (g ? null : i) ?? (r?.isDocked ? r.slot : null),
    y = _ != null,
    [x, C] = (0, X.useState)(null),
    [w, D] = (0, X.useState)(null),
    O = (0, X.useRef)(null),
    k = (0, X.useRef)(null),
    A = (0, X.useRef)(null),
    j = (0, X.useRef)(null),
    N = (0, X.useRef)(null),
    [P, F] = (0, X.useState)(null),
    [L, oe] = (0, X.useState)(null),
    R = (0, X.useRef)(null),
    z = P == null ? (L?.anchor.x ?? 0) : P.x * (L?.travel.x ?? 0),
    B = P == null ? (L?.anchor.y ?? 0) : P.y * (L?.travel.y ?? 0),
    V;
  t[2] !== z || t[3] !== B ? ((V = { x: z, y: B }), (t[2] = z), (t[3] = B), (t[4] = V)) : (V = t[4]);
  let H = V,
    U;
  t[5] !== x || t[6] !== w || t[7] !== y || t[8] !== L || t[9] !== s
    ? ((U = () => {
        let e = O.current,
          t = k.current;
        if (x == null || w == null || e == null || t == null || x.offsetWidth === 0) return;
        let n = x.getBoundingClientRect(),
          r = w.getBoundingClientRect(),
          i = Math.min(x.offsetWidth, w.clientWidth),
          a = y && L != null ? L.height : e.offsetHeight,
          o = { x: Math.max(0, w.clientWidth - i), y: Math.max(0, w.clientHeight - a) },
          c = {
            anchor: {
              x: (0, Ee.default)((n.left - r.left) / s, 0, o.x),
              y: (0, Ee.default)((n.top - r.top) / s, 0, o.y),
            },
            width: i,
            height: a,
            overflowing: !y && t.scrollHeight > w.clientHeight,
            travel: o,
          };
        oe((e) => ((0, De.default)(e, c) ? e : c));
      }),
      (t[5] = x),
      (t[6] = w),
      (t[7] = y),
      (t[8] = L),
      (t[9] = s),
      (t[10] = U))
    : (U = t[10]);
  let W = (0, X.useEffectEvent)(U),
    G;
  t[11] !== x || t[12] !== w || t[13] !== l || t[14] !== W
    ? ((G = () => {
        let e = O.current;
        if (!l || x == null || w == null || e == null) return;
        let t = ae(x, e, W),
          n = new ResizeObserver(W);
        return (
          n.observe(w),
          () => {
            (t(), n.disconnect());
          }
        );
      }),
      (t[11] = x),
      (t[12] = w),
      (t[13] = l),
      (t[14] = W),
      (t[15] = G))
    : (G = t[15]);
  let K;
  (t[16] !== x || t[17] !== w || t[18] !== _ || t[19] !== l || t[20] !== s
    ? ((K = [x, w, l, _, s]), (t[16] = x), (t[17] = w), (t[18] = _), (t[19] = l), (t[20] = s), (t[21] = K))
    : (K = t[21]),
    (0, X.useLayoutEffect)(G, K));
  let q;
  t[22] !== r?.previewScale || t[23] !== u
    ? ((q = () => () => {
        ((R.current = null), j.current?.(), (d.current = !1), u.jump(1), r?.previewScale.jump(1));
      }),
      (t[22] = r?.previewScale),
      (t[23] = u),
      (t[24] = q))
    : (q = t[24]);
  let se = r?.surface,
    ce = r?.previewScale,
    le;
  (t[25] !== i || t[26] !== l || t[27] !== u || t[28] !== c || t[29] !== ce || t[30] !== se || t[31] !== s
    ? ((le = [l, i, se, s, c, u, ce]),
      (t[25] = i),
      (t[26] = l),
      (t[27] = u),
      (t[28] = c),
      (t[29] = ce),
      (t[30] = se),
      (t[31] = s),
      (t[32] = le))
    : (le = t[32]),
    (0, X.useLayoutEffect)(q, le));
  let ue;
  t[33] !== c || t[34] !== s
    ? ((ue = () => {
        let e = A.current;
        (N.current?.focus({ preventScroll: !0 }), (N.current = null), (A.current = null));
        let t = k.current;
        if (e == null || t == null || c) return;
        let n = t.getBoundingClientRect();
        if (n.width === 0 || n.height === 0) return;
        let r = ne(
            t,
            {
              transform: [
                `translate(${(e.left - n.left) / s}px, ${(e.top - n.top) / s}px) scale(${e.width / n.width}, ${e.height / n.height})`,
                `translate(0px, 0px) scale(1, 1)`,
              ],
            },
            re,
          ),
          i = () => {
            (r.stop(), (t.style.transform = ``));
          };
        return ((j.current = i), i);
      }),
      (t[33] = c),
      (t[34] = s),
      (t[35] = ue))
    : (ue = t[35]);
  let de;
  (t[36] !== _ || t[37] !== H.x || t[38] !== H.y || t[39] !== P || t[40] !== c || t[41] !== s
    ? ((de = [_, P, H.x, H.y, c, s]),
      (t[36] = _),
      (t[37] = H.x),
      (t[38] = H.y),
      (t[39] = P),
      (t[40] = c),
      (t[41] = s),
      (t[42] = de))
    : (de = t[42]),
    (0, X.useLayoutEffect)(ue, de));
  let fe;
  t[43] !== L || t[44] !== P?.x || t[45] !== P?.y
    ? ((fe = (e, t) => {
        let n = t !== void 0 && t;
        if (L == null) return;
        let r = {
          x: L.travel.x === 0 ? (P?.x ?? 0) : (0, Ee.default)(e.x / L.travel.x, 0, 1),
          y: L.travel.y === 0 ? (P?.y ?? 0) : (0, Ee.default)(e.y / L.travel.y, 0, 1),
        };
        F(n ? { x: Math.round(r.x), y: Math.round(r.y) } : r);
      }),
      (t[43] = L),
      (t[44] = P?.x),
      (t[45] = P?.y),
      (t[46] = fe))
    : (fe = t[46]);
  let J = fe,
    pe;
  t[47] === r?.surface
    ? (pe = t[48])
    : ((pe = (e) => {
        let t = r?.surface.getBoundingClientRect();
        return (
          t != null &&
          e.clientX >= t.left &&
          e.clientX <= t.right &&
          e.clientY >= t.top &&
          e.clientY <= t.bottom
        );
      }),
      (t[47] = r?.surface),
      (t[48] = pe));
  let Y = pe,
    me;
  t[49] !== r || t[50] !== Y || t[51] !== J || t[52] !== u || t[53] !== s
    ? ((me = (e) => {
        let t = R.current;
        t != null &&
          t.pointerId === e.pointerId &&
          ((A.current = k.current?.getBoundingClientRect() ?? null),
          (d.current = !1),
          u.jump(1),
          r?.previewScale.jump(1),
          e.type === `pointerup` && t.moved
            ? (J(
                { x: t.offset.x + (e.clientX - t.start.x) / s, y: t.offset.y + (e.clientY - t.start.y) / s },
                !0,
              ),
              t.canDock && Y(e) && ((N.current = t.captureElement), r?.onDockChange(!0)))
            : (F(t.position), t.wasDocked && ((N.current = t.captureElement), r?.onDockChange(!0))),
          (R.current = null),
          t.captureElement.hasPointerCapture(e.pointerId) &&
            t.captureElement.releasePointerCapture(e.pointerId));
      }),
      (t[49] = r),
      (t[50] = Y),
      (t[51] = J),
      (t[52] = u),
      (t[53] = s),
      (t[54] = me))
    : (me = t[54]);
  let he = me,
    ge;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = (e) => {
        e != null && C(e);
      }),
      (t[55] = ge))
    : (ge = t[55]);
  let _e = y ? 0 : L?.height,
    ve;
  t[56] === _e ? (ve = t[57]) : ((ve = { height: _e }), (t[56] = _e), (t[57] = ve));
  let be;
  t[58] !== r || t[59] !== Y || t[60] !== J || t[61] !== u || t[62] !== c || t[63] !== s
    ? ((be = (e) => {
        let t = R.current;
        if (
          t == null ||
          t.pointerId !== e.pointerId ||
          (!t.moved && Math.hypot(e.clientX - t.start.x, e.clientY - t.start.y) / s < 4)
        )
          return;
        t.moved = !0;
        let n = Y(e);
        n || (t.canDock = !0);
        let i = t.canDock && n;
        if (i !== d.current) {
          d.current = i;
          let e = c ? { duration: 0 } : re;
          (ne(u, i ? E : 1, e), r != null && ne(r.previewScale, i ? ie : 1, e));
        }
        J({ x: t.offset.x + (e.clientX - t.start.x) / s, y: t.offset.y + (e.clientY - t.start.y) / s });
      }),
      (t[58] = r),
      (t[59] = Y),
      (t[60] = J),
      (t[61] = u),
      (t[62] = c),
      (t[63] = s),
      (t[64] = be))
    : (be = t[64]);
  let xe;
  t[65] !== o ||
  t[66] !== x ||
  t[67] !== w ||
  t[68] !== n.key ||
  t[69] !== n.props ||
  t[70] !== _ ||
  t[71] !== r ||
  t[72] !== a ||
  t[73] !== y ||
  t[74] !== g ||
  t[75] !== l ||
  t[76] !== L ||
  t[77] !== J ||
  t[78] !== H ||
  t[79] !== P ||
  t[80] !== u ||
  t[81] !== c ||
  t[82] !== f ||
  t[83] !== s
    ? ((xe =
        x != null &&
        (0, Z.jsx)(I, {
          container: x.ownerDocument.body,
          children: (0, Z.jsx)(`div`, {
            ref: (e) => {
              e != null && D(e);
            },
            className: te(`pointer-events-none fixed inset-4 z-40`, (!l || L == null) && `invisible`),
            style: { zoom: s },
            inert: !l,
            children:
              w != null &&
              (0, Z.jsx)(I, {
                container: _ ?? w,
                children: (0, Z.jsx)(`div`, {
                  ref: O,
                  className: te(
                    `pointer-events-auto relative max-h-full max-w-full`,
                    !l && `invisible`,
                    !y && L?.overflowing && `overflow-y-auto`,
                  ),
                  "data-pip-obstacle": l && !y ? `orbit-call` : void 0,
                  inert: !l || g,
                  "aria-hidden": g,
                  style: {
                    width: y ? void 0 : L?.width,
                    transform: y ? void 0 : `translate(${H.x}px, ${H.y}px)`,
                  },
                  children: (0, Z.jsx)(S.div, {
                    initial: !1,
                    animate: g ? { scale: 0.9, opacity: 0 } : { scale: 1, opacity: 1 },
                    transition: { duration: c ? 0 : 150 / 1e3, ease: T },
                    onAnimationComplete: () => {
                      g && h({ requested: f, ready: !0 });
                    },
                    children: (0, Z.jsx)(S.div, {
                      style: { scale: y ? 1 : u },
                      children: (0, Z.jsx)(`div`, {
                        ref: k,
                        className: `origin-top-left`,
                        children: (0, Z.jsx)(
                          o,
                          {
                            ...n.props,
                            name: r?.isDocked && !f ? r.name : n.props.name,
                            docked: y,
                            controlsOnly: f && !g,
                            dragHandleProps: f
                              ? void 0
                              : {
                                  role: `button`,
                                  tabIndex: 0,
                                  "aria-label": a.formatMessage({
                                    id: `orbit.voiceCall.movePanel`,
                                    defaultMessage: `Move call controls`,
                                    description: `Accessible label for the draggable header of a voice call panel`,
                                  }),
                                  "aria-description": a.formatMessage({
                                    id: `orbit.voiceCall.movePanelHelp`,
                                    defaultMessage: `Drag to a corner or onto the profile. Use arrow keys to move to a corner. Press Home to reset the position`,
                                    description: `Keyboard and pointer instructions for repositioning the floating voice call controls`,
                                  }),
                                  onPointerDown: (e) => {
                                    let t = O.current;
                                    if (!e.isPrimary || e.button !== 0 || L == null || t == null || w == null)
                                      return;
                                    (e.preventDefault(), e.currentTarget.focus());
                                    let n = k.current?.getBoundingClientRect() ?? t.getBoundingClientRect(),
                                      i = w.getBoundingClientRect();
                                    (j.current?.(), (A.current = null));
                                    let a = { x: (n.left - i.left) / s, y: (n.top - i.top) / s };
                                    (J(a),
                                      (R.current = {
                                        pointerId: e.pointerId,
                                        start: { x: e.clientX, y: e.clientY },
                                        offset: a,
                                        position: P,
                                        moved: !1,
                                        wasDocked: y,
                                        canDock: !y,
                                        captureElement: e.currentTarget,
                                      }),
                                      y &&
                                        ((0, Oe.flushSync)(() => r?.onDockChange(!1)),
                                        e.currentTarget.focus({ preventScroll: !0 })),
                                      e.currentTarget.setPointerCapture(e.pointerId));
                                  },
                                  onKeyDown: (e) => {
                                    let t = k.current?.getBoundingClientRect() ?? null;
                                    bb532: switch (e.key) {
                                      case `ArrowLeft`:
                                        J({ ...H, x: 0 }, !0);
                                        break bb532;
                                      case `ArrowRight`:
                                        J({ ...H, x: L?.travel.x ?? 0 }, !0);
                                        break bb532;
                                      case `ArrowUp`:
                                        J({ ...H, y: 0 }, !0);
                                        break bb532;
                                      case `ArrowDown`:
                                        J({ ...H, y: L?.travel.y ?? 0 }, !0);
                                        break bb532;
                                      case `Home`:
                                        if (P == null && !y) {
                                          (e.preventDefault(), e.stopPropagation());
                                          return;
                                        }
                                        F(null);
                                        break bb532;
                                      case `Escape`: {
                                        let e = R.current;
                                        if (e == null) return;
                                        ((d.current = !1),
                                          u.jump(1),
                                          r?.previewScale.jump(1),
                                          F(e.position),
                                          e.wasDocked &&
                                            ((N.current = e.captureElement), r?.onDockChange(!0)),
                                          (R.current = null),
                                          e.captureElement.hasPointerCapture(e.pointerId) &&
                                            e.captureElement.releasePointerCapture(e.pointerId));
                                        break bb532;
                                      }
                                      default:
                                        return;
                                    }
                                    (e.key !== `Escape` &&
                                      y &&
                                      ((N.current = e.currentTarget), r?.onDockChange(!1)),
                                      (A.current = t),
                                      e.preventDefault(),
                                      e.stopPropagation());
                                  },
                                },
                          },
                          n.key,
                        ),
                      }),
                    }),
                  }),
                }),
              }),
          }),
        })),
      (t[65] = o),
      (t[66] = x),
      (t[67] = w),
      (t[68] = n.key),
      (t[69] = n.props),
      (t[70] = _),
      (t[71] = r),
      (t[72] = a),
      (t[73] = y),
      (t[74] = g),
      (t[75] = l),
      (t[76] = L),
      (t[77] = J),
      (t[78] = H),
      (t[79] = P),
      (t[80] = u),
      (t[81] = c),
      (t[82] = f),
      (t[83] = s),
      (t[84] = xe))
    : (xe = t[84]);
  let Se;
  return (
    t[85] !== he || t[86] !== f || t[87] !== ve || t[88] !== be || t[89] !== xe
      ? ((Se = (0, Z.jsx)(`div`, {
          ref: ge,
          className: `pointer-events-none shrink-0`,
          hidden: f,
          style: ve,
          onPointerMove: be,
          onPointerUp: he,
          onPointerCancel: he,
          onLostPointerCapture: he,
          children: xe,
        })),
        (t[85] = he),
        (t[86] = f),
        (t[87] = ve),
        (t[88] = be),
        (t[89] = xe),
        (t[90] = Se))
      : (Se = t[90]),
    Se
  );
}
var Te, Ee, De, X, Oe, Z;
function ke() {
  return (ke = e(() => {
    ((Te = L()),
      B(),
      x(),
      C(),
      O(),
      D(),
      (Ee = t(u(), 1)),
      (De = t(o(), 1)),
      (X = H()),
      (Oe = z()),
      A(),
      a(),
      V(),
      l(),
      ve(),
      _(),
      (Z = R()));
  }))();
}
function Ae(e) {
  let t = (0, je.c)(17),
    { onDismiss: r, onRetry: i, onOpenSettings: a } = e,
    o,
    c;
  t[0] === a
    ? ((o = t[1]), (c = t[2]))
    : ((o = (0, Q.jsx)(`p`, {
        className: `text-sm text-secondary`,
        children:
          a == null
            ? (0, Q.jsx)(s, {
                id: `orbit.voiceCall.microphonePermissionManual`,
                defaultMessage: `Allow microphone access in your browser or system settings, then try again`,
                description: `Recovery instructions when the app cannot open microphone permission settings directly`,
              })
            : (0, Q.jsx)(s, {
                id: `orbit.voiceCall.microphonePermissionSettings`,
                defaultMessage: `Allow microphone access in system settings, then try again`,
                description: `Recovery instructions after microphone permission blocks a dot voice call`,
              }),
      })),
      (c =
        a != null &&
        (0, Q.jsx)(n, {
          color: `primary`,
          size: `dialog`,
          radius: `full`,
          onClick: a,
          children: (0, Q.jsx)(s, {
            id: `realtimeVoice.launch.openMicrophoneSettings`,
            defaultMessage: `Open system settings`,
            description: `Button that opens the operating-system microphone privacy settings after microphone permission blocks realtime voice chat`,
          }),
        })),
      (t[0] = a),
      (t[1] = o),
      (t[2] = c));
  let l = i == null,
    u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(s, {
        id: `realtimeVoice.launch.retry`,
        defaultMessage: `Try again`,
        description: `Button that retries a failed realtime voice launch`,
      })),
      (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] !== i || t[5] !== l
    ? ((d = (0, Q.jsx)(n, {
        className: `flex-1 justify-center`,
        color: `secondary`,
        size: `dialog`,
        radius: `full`,
        disabled: l,
        onClick: i,
        children: u,
      })),
      (t[4] = i),
      (t[5] = l),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(s, {
        id: `orbit.voiceCall.dismissPermissionError`,
        defaultMessage: `Dismiss`,
        description: `Dismiss the microphone permission error in the dot call card`,
      })),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] === r
    ? (p = t[9])
    : ((p = (0, Q.jsx)(n, {
        className: `flex-1 justify-center`,
        color: `secondary`,
        size: `dialog`,
        radius: `full`,
        onClick: r,
        children: f,
      })),
      (t[8] = r),
      (t[9] = p));
  let m;
  t[10] !== d || t[11] !== p
    ? ((m = (0, Q.jsxs)(`div`, { className: `flex items-center gap-2`, children: [d, p] })),
      (t[10] = d),
      (t[11] = p),
      (t[12] = m))
    : (m = t[12]);
  let h;
  return (
    t[13] !== o || t[14] !== c || t[15] !== m
      ? ((h = (0, Q.jsxs)(Q.Fragment, { children: [o, c, m] })),
        (t[13] = o),
        (t[14] = c),
        (t[15] = m),
        (t[16] = h))
      : (h = t[16]),
    h
  );
}
var je, Q;
function Me() {
  return (Me = e(() => {
    ((je = L()), A(), F(), (Q = R()));
  }))();
}
var Ne, Pe;
function Fe() {
  return (Fe = e(() => {
    (H(),
      (Ne = R()),
      (Pe = (e) =>
        (0, Ne.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, Ne.jsx)(`path`, {
            d: `M19.5272 12.0709C19.5298 13.3002 18.5344 14.2954 17.3051 14.293L14.2053 14.2868C13.4087 14.2852 12.7625 13.6388 12.7607 12.8422L12.7586 12.1427C12.7581 11.87 12.7052 11.6782 12.6274 11.5378C12.5511 11.4 12.4302 11.2734 12.2345 11.1615C11.8162 10.9223 11.0991 10.7737 9.9744 10.7713C8.84935 10.769 8.13426 10.9152 7.71843 11.1518C7.52421 11.2623 7.40538 11.3873 7.33035 11.5233C7.25387 11.6621 7.20134 11.8526 7.20191 12.1255L7.2026 12.825C7.20417 13.6237 6.55743 14.2704 5.75869 14.2689L2.65888 14.2627C1.43165 14.2601 0.435172 13.2636 0.432602 12.0364V11.8541C0.428139 9.72327 1.62194 8.2775 3.40052 7.40704C5.1401 6.5557 7.4791 6.22313 9.97095 6.2283C12.6502 6.23399 14.9964 6.57466 16.6967 7.43811C17.5564 7.87473 18.2701 8.45489 18.7677 9.20933C19.2676 9.96753 19.5244 10.8636 19.5266 11.8879L19.5272 12.0709Z`,
            fill: `currentColor`,
          }),
        })));
  }))();
}
function Ie(e) {
  let t = (0, Le.c)(14),
    { locator: n } = e,
    r = ee(),
    i;
  t[0] === n ? (i = t[1]) : ((i = { locator: n, hideWhileResponding: !1 }), (t[0] = n), (t[1] = i));
  let a = U(xe, i),
    o = a?.type === `tool` && a.tool.type === `mcp`,
    c;
  t[2] === o ? (c = t[3]) : ((c = { enabled: o }), (t[2] = o), (t[3] = c));
  let { data: l } = U(K, n.hostId, c);
  if (a == null) {
    let e;
    return (t[4] === n ? (e = t[5]) : ((e = (0, Re.jsx)(de, { locator: n })), (t[4] = n), (t[5] = e)), e);
  }
  let u;
  t[6] !== a || t[7] !== r || t[8] !== l
    ? ((u = Se({ intl: r, resolvedApps: l, status: a })), (t[6] = a), (t[7] = r), (t[8] = l), (t[9] = u))
    : (u = t[9]);
  let d = u,
    f;
  t[10] === d?.label
    ? (f = t[11])
    : ((f =
        d?.label ??
        (0, Re.jsx)(s, {
          id: `restricted.orbit.voiceCall.thinking`,
          defaultMessage: `Thinking`,
          description: `Status while the dot brain is working during a voice call`,
        })),
      (t[10] = d?.label),
      (t[11] = f));
  let p;
  return (
    t[12] === f
      ? (p = t[13])
      : ((p = (0, Re.jsx)(`span`, { role: `status`, children: f })), (t[12] = f), (t[13] = p)),
    p
  );
}
var Le, Re;
function ze() {
  return (ze = e(() => {
    ((Le = L()), h(), A(), se(), be(), Ce(), Y(), (Re = R()));
  }))();
}
function Be(e) {
  let t = (0, Ue.c)(29),
    { locator: n, dockTarget: r, embeddedSlot: a } = e,
    o = c(i),
    s = ee(),
    l = U(ge, n),
    u = U(W, n),
    f = U(q, n),
    p = d.systemPermissions,
    [m, h] = (0, We.useOptimistic)(l?.microphoneMuted ?? !1),
    g = U(pe, n.conversationId),
    _ = U(J, n.conversationId),
    v;
  t[0] !== s || t[1] !== n || t[2] !== o || t[3] !== l
    ? ((v = async (e) => {
        try {
          (e.type === `set-microphone-muted` && h(e.muted), await he(o, n, e, l?.claimId));
        } catch {
          o.get(k).danger(
            s.formatMessage({
              id: `restricted.orbit.voiceCall.controlFailed`,
              defaultMessage: `Couldn’t update the call. Please try again`,
              description: `Error when a dot call control fails`,
            }),
            { errorAnalytics: { toastId: `restricted.orbit.voiceCall.controlFailed` } },
          );
        }
      }),
      (t[0] = s),
      (t[1] = n),
      (t[2] = o),
      (t[3] = l),
      (t[4] = v))
    : (v = t[4]);
  let y = v,
    b = _?.avatar ?? null,
    x;
  t[5] !== n.conversationId || t[6] !== b
    ? ((x = (0, $.jsx)(le, { className: `size-8`, avatar: b, identity: n.conversationId })),
      (t[5] = n.conversationId),
      (t[6] = b),
      (t[7] = x))
    : (x = t[7]);
  let S;
  t[8] !== f || t[9] !== n || t[10] !== u || t[11] !== o
    ? ((S = u
        ? {
            onDismiss: () => ue(o),
            onRetry: f
              ? () => {
                  fe(o, n);
                }
              : void 0,
            onOpenSettings:
              p == null
                ? void 0
                : () => {
                    p.openMicrophoneSettings().catch(Ve);
                  },
          }
        : void 0),
      (t[8] = f),
      (t[9] = n),
      (t[10] = u),
      (t[11] = o),
      (t[12] = S))
    : (S = t[12]);
  let C;
  t[13] === n ? (C = t[14]) : ((C = (0, $.jsx)(Ie, { locator: n })), (t[13] = n), (t[14] = C));
  let w = l?.phase ?? `starting`,
    T;
  t[15] === y ? (T = t[16]) : ((T = (e) => (0, We.startTransition)(() => y(e))), (t[15] = y), (t[16] = T));
  let E;
  t[17] !== m || t[18] !== g || t[19] !== x || t[20] !== S || t[21] !== C || t[22] !== w || t[23] !== T
    ? ((E = (0, $.jsx)(He, {
        avatar: x,
        permissionError: S,
        name: g,
        status: C,
        phase: w,
        microphoneMuted: m,
        onControl: T,
      })),
      (t[17] = m),
      (t[18] = g),
      (t[19] = x),
      (t[20] = S),
      (t[21] = C),
      (t[22] = w),
      (t[23] = T),
      (t[24] = E))
    : (E = t[24]);
  let D;
  return (
    t[25] !== r || t[26] !== a || t[27] !== E
      ? ((D = (0, $.jsx)(we, { dockTarget: r, embeddedSlot: a, children: E })),
        (t[25] = r),
        (t[26] = a),
        (t[27] = E),
        (t[28] = D))
      : (D = t[28]),
    D
  );
}
function Ve() {}
function He(e) {
  let t = (0, Ue.c)(58),
    {
      avatar: i,
      name: a,
      status: o,
      phase: c,
      microphoneMuted: l,
      onControl: u,
      permissionError: d,
      dragHandleProps: f,
      docked: m,
      controlsOnly: h,
    } = e,
    _ = m !== void 0 && m,
    v = h !== void 0 && h,
    y = ee(),
    b = (0, We.useId)(),
    x;
  t[0] !== y || t[1] !== l
    ? ((x = l
        ? y.formatMessage({
            id: `restricted.orbit.voiceCall.unmuteMic`,
            defaultMessage: `Unmute microphone`,
            description: `Enable the microphone in the dot call`,
          })
        : y.formatMessage({
            id: `restricted.orbit.voiceCall.muteMic`,
            defaultMessage: `Mute microphone`,
            description: `Mute the microphone in the dot call`,
          })),
      (t[0] = y),
      (t[1] = l),
      (t[2] = x))
    : (x = t[2]);
  let S = x,
    C;
  t[3] === y
    ? (C = t[4])
    : ((C = y.formatMessage({
        id: `restricted.orbit.voiceCall.hangUp`,
        defaultMessage: `Hang up`,
        description: `End the dot voice call`,
      })),
      (t[3] = y),
      (t[4] = C));
  let w = C,
    T = l ? `mediaSolid` : `secondary`;
  _ && !v && (T = `primary`);
  let E = o;
  if (d != null) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(s, {
          id: `realtimeVoice.launch.microphonePermissionDeniedTitle`,
          defaultMessage: `Microphone permission denied`,
          description: `Title shown when realtime voice chat cannot start because the operating system denied microphone permission`,
        })),
        (t[5] = e))
      : (e = t[5]),
      (E = e));
  } else if (c === `starting`) {
    let e;
    (t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(s, {
          id: `restricted.orbit.voiceCall.calling`,
          defaultMessage: `Calling…`,
          description: `Status while connecting a dot voice call`,
        })),
        (t[6] = e))
      : (e = t[6]),
      (E = e));
  }
  let D = _ ? void 0 : `dark`,
    O;
  t[7] === y
    ? (O = t[8])
    : ((O = y.formatMessage({
        id: `restricted.orbit.voiceCall.controls`,
        defaultMessage: `Call controls`,
        description: `Accessible label for the in-window dot call panel`,
      })),
      (t[7] = y),
      (t[8] = O));
  let k = _ && !v ? `min-w-32 gap-2` : `gap-3`,
    ne = !_ && `p-3`,
    A;
  t[9] !== k || t[10] !== ne
    ? ((A = te(`flex flex-col text-default select-none`, k, ne)), (t[9] = k), (t[10] = ne), (t[11] = A))
    : (A = t[11]);
  let j = v && d == null,
    re = f == null || _ ? void 0 : b,
    ie = f != null && `no-drag cursor-grab touch-none active:cursor-grabbing`,
    M;
  t[12] === ie ? (M = t[13]) : ((M = te(`flex min-w-0 items-start gap-2`, ie)), (t[12] = ie), (t[13] = M));
  let N = _ ? null : i,
    F = _ && `text-center text-[16px] leading-5`,
    I;
  t[14] === F ? (I = t[15]) : ((I = te(`truncate font-medium`, F)), (t[14] = F), (t[15] = I));
  let L;
  t[16] !== a || t[17] !== I
    ? ((L = (0, $.jsx)(`div`, { className: I, children: a })), (t[16] = a), (t[17] = I), (t[18] = L))
    : (L = t[18]);
  let ae = _ && d == null,
    oe = d == null && `truncate`,
    R;
  t[19] === oe ? (R = t[20]) : ((R = te(`text-secondary`, oe)), (t[19] = oe), (t[20] = R));
  let z = d == null ? void 0 : `alert`,
    B;
  t[21] !== E || t[22] !== ae || t[23] !== R || t[24] !== z
    ? ((B = (0, $.jsx)(`div`, { hidden: ae, className: R, role: z, children: E })),
      (t[21] = E),
      (t[22] = ae),
      (t[23] = R),
      (t[24] = z),
      (t[25] = B))
    : (B = t[25]);
  let V;
  t[26] === f
    ? (V = t[27])
    : ((V = f != null && (0, $.jsx)(`span`, { className: `sr-only`, children: f[`aria-description`] })),
      (t[26] = f),
      (t[27] = V));
  let H;
  t[28] !== b || t[29] !== L || t[30] !== B || t[31] !== V
    ? ((H = (0, $.jsxs)(`div`, {
        id: b,
        className: `flex min-w-0 flex-1 flex-col text-start text-sm`,
        children: [L, B, V],
      })),
      (t[28] = b),
      (t[29] = L),
      (t[30] = B),
      (t[31] = V),
      (t[32] = H))
    : (H = t[32]);
  let U;
  t[33] !== f || t[34] !== j || t[35] !== re || t[36] !== M || t[37] !== N || t[38] !== H
    ? ((U = (0, $.jsxs)(`div`, { ...f, hidden: j, "aria-describedby": re, className: M, children: [N, H] })),
      (t[33] = f),
      (t[34] = j),
      (t[35] = re),
      (t[36] = M),
      (t[37] = N),
      (t[38] = H),
      (t[39] = U))
    : (U = t[39]);
  let W;
  t[40] !== w || t[41] !== T || t[42] !== S || t[43] !== l || t[44] !== u || t[45] !== d
    ? ((W =
        d == null
          ? (0, $.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, $.jsx)(P, {
                  tooltipContent: S,
                  children: (0, $.jsx)(n, {
                    className: `flex-1 justify-center`,
                    size: `dialog`,
                    color: T,
                    radius: `full`,
                    "aria-label": S,
                    "aria-pressed": l,
                    onClick: () => u({ type: `set-microphone-muted`, muted: !l }),
                    children: (0, $.jsx)(p, {
                      asset: g,
                      className: l ? `text-(--color-background-danger-solid)` : void 0,
                    }),
                  }),
                }),
                (0, $.jsx)(P, {
                  tooltipContent: w,
                  children: (0, $.jsx)(n, {
                    className: `flex-1 justify-center`,
                    size: `dialog`,
                    color: `dangerSolid`,
                    radius: `full`,
                    "aria-label": w,
                    onClick: () => u({ type: `stop` }),
                    children: (0, $.jsx)(Pe, { "aria-hidden": `true` }),
                  }),
                }),
              ],
            })
          : (0, $.jsx)(Ae, { ...d })),
      (t[40] = w),
      (t[41] = T),
      (t[42] = S),
      (t[43] = l),
      (t[44] = u),
      (t[45] = d),
      (t[46] = W))
    : (W = t[46]);
  let G;
  t[47] !== U || t[48] !== W || t[49] !== A
    ? ((G = (0, $.jsxs)(`div`, { className: A, children: [U, W] })),
      (t[47] = U),
      (t[48] = W),
      (t[49] = A),
      (t[50] = G))
    : (G = t[50]);
  let K;
  t[51] !== _ || t[52] !== G || t[53] !== O
    ? ((K = (0, $.jsx)(r, { unstyled: _, variant: `island`, role: `region`, "aria-label": O, children: G })),
      (t[51] = _),
      (t[52] = G),
      (t[53] = O),
      (t[54] = K))
    : (K = t[54]);
  let q;
  return (
    t[55] !== K || t[56] !== D
      ? ((q = (0, $.jsx)(`div`, { className: `shrink-0`, "data-theme": D, children: K })),
        (t[55] = K),
        (t[56] = D),
        (t[57] = q))
      : (q = t[57]),
    q
  );
}
var Ue, We, $;
function Ge() {
  return (Ge = e(() => {
    ((Ue = L()),
      f(),
      x(),
      h(),
      (We = H()),
      A(),
      F(),
      y(),
      m(),
      j(),
      w(),
      ce(),
      N(),
      oe(),
      _e(),
      me(),
      ke(),
      Me(),
      Fe(),
      G(),
      ze(),
      ($ = R()));
  }))();
}
export { Ge as n, Be as t };
//# sourceMappingURL=panel-86daef66cbd1.js.map
