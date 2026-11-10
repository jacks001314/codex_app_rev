import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BY as t,
  C2 as n,
  CY as r,
  DB as i,
  FBt as a,
  HK as o,
  Iq as ee,
  JOt as s,
  LNt as c,
  M4 as l,
  MNt as te,
  NNt as u,
  OB as ne,
  PBt as d,
  PU as re,
  S0 as f,
  TY as p,
  XO as m,
  XOt as h,
  Y3 as g,
  YO as ie,
  Z3 as _,
  bB as ae,
  ck as v,
  fq as oe,
  hy as y,
  j4 as b,
  my as se,
  okt as ce,
  pq as le,
  rk as x,
  tk as ue,
  tkt as de,
  vB as S,
  w2 as C,
  wB as fe,
  x0 as pe,
  xB as me,
  zY as w,
} from "./app-shared-2feb3d4c6fcc.js";
import { n as T, t as he } from "./image-edit-toolbar-b4c63cc4a779.js";
import { n as E, t as ge } from "./drawing-size-slider-ad117f2bc3b3.js";
import { n as D, t as _e } from "./image-edit-size-control-b617380ec325.js";
function O(e) {
  let n = (0, xe.c)(126),
    {
      ref: a,
      imageSize: o,
      isSubmitting: ee,
      onCancel: s,
      onSubmit: c,
      sizeControlContainer: l,
      renderToolbar: u,
      toolbarVariant: ne,
      viewport: d,
    } = e,
    re = ne === void 0 ? `compact` : ne,
    f = ce(),
    p = ae(),
    m = re === `embedded`,
    h = (0, M.useRef)(null),
    _ = (0, M.useRef)(null),
    [v, oe] = (0, M.useState)(P),
    [y, se] = (0, M.useState)(null),
    le;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((le = []), (n[0] = le)) : (le = n[0]);
  let [x, ue] = (0, M.useState)(le),
    S;
  n[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((S = []), (n[1] = S)) : (S = n[1]);
  let [C, fe] = (0, M.useState)(S),
    pe = x.length > 0 || C.length > 0,
    w = d.imageRect.width > 0 ? (v * d.fitImageRect.width) / d.imageRect.width : v,
    T = (be(o, v) * d.fitImageRect.width) / o.width,
    E;
  n[2] === o
    ? (E = n[3])
    : ((E = (e, t) => {
        (ue(e), fe(t));
        let n = h.current;
        n != null && k(n, o, e, getComputedStyle(n).color);
      }),
      (n[2] = o),
      (n[3] = E));
  let D = E,
    O;
  n[4] !== o || n[5] !== x
    ? ((O = () => {
        let e = _.current;
        ((_.current = null), se(null));
        let t = h.current;
        e != null &&
          t != null &&
          (t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
          k(t, o, x, getComputedStyle(t).color));
      }),
      (n[4] = o),
      (n[5] = x),
      (n[6] = O))
    : (O = n[6]);
  let A = O,
    I;
  (n[7] === A ? (I = n[8]) : ((I = () => ({ onViewportInteractionStart: A })), (n[7] = A), (n[8] = I)),
    (0, M.useImperativeHandle)(a, I));
  let L;
  n[9] !== A || n[10] !== x || n[11] !== D || n[12] !== d.isInteracting || n[13] !== d.isPanReady
    ? ((L = (e) => {
        let t = _.current;
        if (t != null && t.pointerId === e.pointerId) {
          if (e.defaultPrevented || d.isInteracting || d.isPanReady) {
            A();
            return;
          }
          ((_.current = null),
            e.currentTarget.hasPointerCapture(e.pointerId) &&
              e.currentTarget.releasePointerCapture(e.pointerId),
            D([...x, t.stroke], []));
        }
      }),
      (n[9] = A),
      (n[10] = x),
      (n[11] = D),
      (n[12] = d.isInteracting),
      (n[13] = d.isPanReady),
      (n[14] = L))
    : (L = n[14]);
  let R = L,
    z;
  n[15] !== pe || n[16] !== m
    ? ((z = pe
        ? null
        : (0, N.jsx)(`span`, {
            className: te(
              `min-w-0 truncate leading-[18px] text-tertiary`,
              m ? `px-2.5 text-sm` : `px-1.5 text-base`,
            ),
            children: (0, N.jsx)(de, {
              id: `imageSidePanel.removeHelper`,
              defaultMessage: `Brush over what you want to remove`,
              description: `Helper text shown while selecting an image area to remove.`,
            }),
          })),
      (n[15] = pe),
      (n[16] = m),
      (n[17] = z))
    : (z = n[17]);
  let B = x.length === 0,
    V = !pe,
    Ce = m ? `large` : `default`,
    we = m ? `imageToolbar` : `composerSm`,
    H;
  n[18] === f
    ? (H = n[19])
    : ((H = f.formatMessage({
        id: `imageSidePanel.undoRemoveSelection`,
        defaultMessage: `Undo`,
        description: `Toolbar action that undoes the last brushed remove selection.`,
      })),
      (n[18] = f),
      (n[19] = H));
  let U;
  n[20] !== x || n[21] !== C || n[22] !== D
    ? ((U = () => {
        let e = x.at(-1);
        e != null && D(x.slice(0, -1), [...C, e]);
      }),
      (n[20] = x),
      (n[21] = C),
      (n[22] = D),
      (n[23] = U))
    : (U = n[23]);
  let W;
  n[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, N.jsx)(i, { "aria-hidden": !1, asset: b })), (n[24] = W))
    : (W = n[24]);
  let G;
  n[25] !== V || n[26] !== Ce || n[27] !== we || n[28] !== H || n[29] !== U || n[30] !== B
    ? ((G = (0, N.jsx)(g, {
        color: `ghostActive`,
        disabled: B,
        hidden: V,
        radius: Ce,
        size: we,
        uniform: !0,
        "aria-label": H,
        onClick: U,
        children: W,
      })),
      (n[25] = V),
      (n[26] = Ce),
      (n[27] = we),
      (n[28] = H),
      (n[29] = U),
      (n[30] = B),
      (n[31] = G))
    : (G = n[31]);
  let K = C.length === 0,
    q = !pe,
    J = m ? `large` : `default`,
    Y = m ? `imageToolbar` : `composerSm`,
    X;
  n[32] === f
    ? (X = n[33])
    : ((X = f.formatMessage({
        id: `imageSidePanel.redoRemoveSelection`,
        defaultMessage: `Redo`,
        description: `Toolbar action that redoes the last undone remove selection.`,
      })),
      (n[32] = f),
      (n[33] = X));
  let Z;
  n[34] !== x || n[35] !== C || n[36] !== D
    ? ((Z = () => {
        let e = C.at(-1);
        e != null && D([...x, e], C.slice(0, -1));
      }),
      (n[34] = x),
      (n[35] = C),
      (n[36] = D),
      (n[37] = Z))
    : (Z = n[37]);
  let Te;
  n[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (0, N.jsx)(i, { className: `-scale-x-100`, "aria-hidden": !1, asset: b })), (n[38] = Te))
    : (Te = n[38]);
  let Ee;
  n[39] !== K || n[40] !== q || n[41] !== J || n[42] !== Y || n[43] !== X || n[44] !== Z
    ? ((Ee = (0, N.jsx)(g, {
        color: `ghostActive`,
        disabled: K,
        hidden: q,
        radius: J,
        size: Y,
        uniform: !0,
        "aria-label": X,
        onClick: Z,
        children: Te,
      })),
      (n[39] = K),
      (n[40] = q),
      (n[41] = J),
      (n[42] = Y),
      (n[43] = X),
      (n[44] = Z),
      (n[45] = Ee))
    : (Ee = n[45]);
  let De = m
      ? void 0
      : `!border-transparent !bg-chart-blue !text-base !text-inverse enabled:hover:!bg-chart-blue/90 data-[state=open]:!bg-chart-blue/90`,
    Oe = x.length === 0 || ee,
    Q = m ? `dialog` : `composerSm`,
    $;
  n[46] !== o || n[47] !== c || n[48] !== x
    ? (($ = () => {
        x.length > 0 && c(ye(o, x));
      }),
      (n[46] = o),
      (n[47] = c),
      (n[48] = x),
      (n[49] = $))
    : ($ = n[49]);
  let ke;
  n[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = (0, N.jsx)(de, {
        id: `imageSidePanel.sendRemoveSelection`,
        defaultMessage: `Send`,
        description: `Toolbar action that submits the selected image area to remove.`,
      })),
      (n[50] = ke))
    : (ke = n[50]);
  let Ae;
  n[51] !== ee || n[52] !== De || n[53] !== Oe || n[54] !== Q || n[55] !== $
    ? ((Ae = (0, N.jsx)(g, {
        className: De,
        color: `primary`,
        disabled: Oe,
        loading: ee,
        size: Q,
        onClick: $,
        children: ke,
      })),
      (n[51] = ee),
      (n[52] = De),
      (n[53] = Oe),
      (n[54] = Q),
      (n[55] = $),
      (n[56] = Ae))
    : (Ae = n[56]);
  let je = m ? `ghostActive` : `ghostTertiary`,
    Me = m ? `large` : `default`,
    Ne = m ? `imageToolbar` : `composerSm`,
    Pe;
  n[57] === f
    ? (Pe = n[58])
    : ((Pe = f.formatMessage({
        id: `imageSidePanel.cancelRemoveMode`,
        defaultMessage: `Cancel`,
        description: `Toolbar action that exits image remove mode.`,
      })),
      (n[57] = f),
      (n[58] = Pe));
  let Fe;
  n[59] === m
    ? (Fe = n[60])
    : ((Fe = m
        ? (0, N.jsx)(r, {})
        : (0, N.jsx)(me, { legacyIcon: ie, asset16: t, legacyClassName: `icon-2xs`, "aria-hidden": !0 })),
      (n[59] = m),
      (n[60] = Fe));
  let Ie;
  n[61] !== s || n[62] !== je || n[63] !== Me || n[64] !== Ne || n[65] !== Pe || n[66] !== Fe
    ? ((Ie = (0, N.jsx)(g, {
        color: je,
        radius: Me,
        size: Ne,
        uniform: !0,
        "aria-label": Pe,
        onClick: s,
        children: Fe,
      })),
      (n[61] = s),
      (n[62] = je),
      (n[63] = Me),
      (n[64] = Ne),
      (n[65] = Pe),
      (n[66] = Fe),
      (n[67] = Ie))
    : (Ie = n[67]);
  let Le;
  n[68] !== G || n[69] !== Ee || n[70] !== Ae || n[71] !== Ie || n[72] !== z
    ? ((Le = (0, N.jsxs)(N.Fragment, { children: [z, G, Ee, Ae, Ie] })),
      (n[68] = G),
      (n[69] = Ee),
      (n[70] = Ae),
      (n[71] = Ie),
      (n[72] = z),
      (n[73] = Le))
    : (Le = n[73]);
  let Re = Le,
    ze;
  n[74] !== Re || n[75] !== re
    ? ((ze = (0, N.jsx)(he, { className: `pointer-events-auto`, variant: re, children: Re })),
      (n[74] = Re),
      (n[75] = re),
      (n[76] = ze))
    : (ze = n[76]);
  let Be;
  n[77] !== u || n[78] !== ze ? ((Be = u(ze)), (n[77] = u), (n[78] = ze), (n[79] = Be)) : (Be = n[79]);
  let Ve = d.imageRect,
    He;
  n[80] === f
    ? (He = n[81])
    : ((He = f.formatMessage({
        id: `imageSidePanel.removeSurface`,
        defaultMessage: `Mark areas to remove`,
        description: `Accessible label for the image surface where users brush over areas to remove.`,
      })),
      (n[80] = f),
      (n[81] = He));
  let Ue = !d.isPanReady && !d.isInteracting && `cursor-none`,
    We;
  n[82] === Ue
    ? (We = n[83])
    : ((We = te(`absolute inset-0 h-full w-full touch-none text-info opacity-50`, Ue)),
      (n[82] = Ue),
      (n[83] = We));
  let Ge;
  n[84] !== w || n[85] !== o || n[86] !== d.isInteracting || n[87] !== d.isPanReady
    ? ((Ge = (e) => {
        if (
          e.defaultPrevented ||
          e.button !== 0 ||
          d.isInteracting ||
          d.isPanReady ||
          (e.pointerType === `touch` && !e.isPrimary)
        )
          return;
        let t = ve(e);
        t != null &&
          (se(t),
          (_.current = { pointerId: e.pointerId, stroke: { brushSize: w, points: [t] } }),
          e.currentTarget.setPointerCapture(e.pointerId),
          j(e.currentTarget, o, t, t, w, getComputedStyle(e.currentTarget).color));
      }),
      (n[84] = w),
      (n[85] = o),
      (n[86] = d.isInteracting),
      (n[87] = d.isPanReady),
      (n[88] = Ge))
    : (Ge = n[88]);
  let Ke;
  n[89] !== o || n[90] !== d.isInteracting || n[91] !== d.isPanReady
    ? ((Ke = (e) => {
        if (d.isInteracting || d.isPanReady) return;
        let t = ve(e);
        se(t);
        let n = _.current;
        if (n == null || n.pointerId !== e.pointerId || t == null) return;
        let r = n.stroke.points.at(-1);
        r != null &&
          (n.stroke.points.push(t),
          j(e.currentTarget, o, r, t, n.stroke.brushSize, getComputedStyle(e.currentTarget).color));
      }),
      (n[89] = o),
      (n[90] = d.isInteracting),
      (n[91] = d.isPanReady),
      (n[92] = Ke))
    : (Ke = n[92]);
  let qe;
  n[93] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qe = () => {
        se(null);
      }),
      (n[93] = qe))
    : (qe = n[93]);
  let Je;
  n[94] !== A ||
  n[95] !== R ||
  n[96] !== o.height ||
  n[97] !== o.width ||
  n[98] !== He ||
  n[99] !== We ||
  n[100] !== Ge ||
  n[101] !== Ke
    ? ((Je = (0, N.jsx)(`canvas`, {
        ref: h,
        "aria-label": He,
        className: We,
        height: o.height,
        width: o.width,
        onPointerDown: Ge,
        onPointerMove: Ke,
        onPointerUp: R,
        onPointerCancel: A,
        onLostPointerCapture: A,
        onPointerLeave: qe,
      })),
      (n[94] = A),
      (n[95] = R),
      (n[96] = o.height),
      (n[97] = o.width),
      (n[98] = He),
      (n[99] = We),
      (n[100] = Ge),
      (n[101] = Ke),
      (n[102] = Je))
    : (Je = n[102]);
  let Ye;
  n[103] !== y || n[104] !== T || n[105] !== d.isInteracting || n[106] !== d.isPanReady
    ? ((Ye =
        y != null && !d.isInteracting && !d.isPanReady
          ? (0, N.jsx)(`div`, {
              "aria-hidden": !0,
              className: `pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-text/20`,
              style: { height: T, left: `${y.x * 100}%`, top: `${y.y * 100}%`, width: T },
            })
          : null),
      (n[103] = y),
      (n[104] = T),
      (n[105] = d.isInteracting),
      (n[106] = d.isPanReady),
      (n[107] = Ye))
    : (Ye = n[107]);
  let Xe;
  n[108] !== Je || n[109] !== Ye || n[110] !== d.imageRect
    ? ((Xe = (0, N.jsx)(`div`, {
        className: `absolute inset-0 overflow-hidden`,
        children: (0, N.jsxs)(`div`, { className: `absolute`, style: Ve, children: [Je, Ye] }),
      })),
      (n[108] = Je),
      (n[109] = Ye),
      (n[110] = d.imageRect),
      (n[111] = Xe))
    : (Xe = n[111]);
  let Ze;
  n[112] === f
    ? (Ze = n[113])
    : ((Ze = f.formatMessage({
        id: `imageSidePanel.removeBrushSize`,
        defaultMessage: `Brush size`,
        description: `Accessible label for the slider that changes the remove selection brush size.`,
      })),
      (n[112] = f),
      (n[113] = Ze));
  let Qe;
  n[114] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qe = (e) => {
        (se(null), oe(e));
      }),
      (n[114] = Qe))
    : (Qe = n[114]);
  let $e;
  n[115] !== v || n[116] !== Ze
    ? (($e = (0, N.jsx)(ge, {
        className: `max-h-[100cqh]`,
        "aria-label": Ze,
        disabled: !1,
        max: F,
        min: Se,
        name: `remove-brush-size`,
        value: v,
        onValueChange: Qe,
      })),
      (n[115] = v),
      (n[116] = Ze),
      (n[117] = $e))
    : ($e = n[117]);
  let et;
  n[118] !== l || n[119] !== $e || n[120] !== p
    ? ((et = (0, N.jsx)(_e, { container: l, zoom: p, children: $e })),
      (n[118] = l),
      (n[119] = $e),
      (n[120] = p),
      (n[121] = et))
    : (et = n[121]);
  let tt;
  return (
    n[122] !== Be || n[123] !== Xe || n[124] !== et
      ? ((tt = (0, N.jsxs)(`div`, { className: `relative h-full w-full`, children: [Be, Xe, et] })),
        (n[122] = Be),
        (n[123] = Xe),
        (n[124] = et),
        (n[125] = tt))
      : (tt = n[125]),
    tt
  );
}
function ve(e) {
  let t = e.currentTarget.getBoundingClientRect();
  return t.width <= 0 || t.height <= 0
    ? null
    : { x: (e.clientX - t.left) / t.width, y: (e.clientY - t.top) / t.height };
}
function k(e, t, n, r) {
  ((e.width = t.width), (e.height = t.height));
  for (let i of n) A(e, t, i, r);
}
function A(e, t, n, r) {
  for (let i = 0; i < n.points.length; i += 1) {
    let a = n.points[i];
    a != null && j(e, t, n.points[i - 1] ?? a, a, n.brushSize, r);
  }
}
function j(e, t, n, r, i, a) {
  let o = e.getContext(`2d`);
  if (o == null) return;
  let ee = n.x * t.width,
    s = n.y * t.height,
    c = r.x * t.width,
    l = r.y * t.height,
    te = be(t, i);
  if (ee === c && s === l) {
    ((o.fillStyle = a), o.beginPath(), o.arc(ee, s, te / 2, 0, Math.PI * 2), o.fill());
    return;
  }
  ((o.strokeStyle = a),
    (o.lineCap = `round`),
    (o.lineJoin = `round`),
    (o.lineWidth = te),
    o.beginPath(),
    o.moveTo(ee, s),
    o.lineTo(c, l),
    o.stroke());
}
function ye(e, t) {
  let n = document.createElement(`canvas`);
  ((n.width = e.width), (n.height = e.height));
  let r = n.getContext(`2d`);
  if (r == null) return ``;
  ((r.fillStyle = `black`), r.fillRect(0, 0, e.width, e.height));
  for (let r of t) A(n, e, r, `white`);
  return n.toDataURL(`image/png`);
}
function be(e, t) {
  return (Math.min(e.width, e.height) * t) / I;
}
var xe, M, N, P, F, Se, I;
function L() {
  return (L = e(() => {
    ((xe = d()),
      l(),
      w(),
      u(),
      (M = a()),
      h(),
      S(),
      _(),
      E(),
      ne(),
      p(),
      fe(),
      m(),
      D(),
      T(),
      (N = c()),
      (P = 70),
      (F = 130),
      (Se = 5),
      (I = 500));
  }))();
}
var R, z;
function B() {
  return (B = e(() => {
    (a(),
      (R = c()),
      (z = (e) =>
        (0, R.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, R.jsx)(`path`, {
            d: `M16.0015 7.33334C16.0015 6.62231 16.0016 6.12897 15.9702 5.74545C15.9472 5.4635 15.9094 5.27399 15.8579 5.13022L15.8022 5.00034C15.6483 4.69823 15.4139 4.4452 15.1265 4.26889L14.9995 4.19858C14.8415 4.11812 14.63 4.0613 14.2544 4.03061C13.8709 3.99929 13.3774 3.99838 12.6665 3.99838H7.3335C6.62246 3.99838 6.12913 3.99928 5.74561 4.03061C5.3699 4.06131 5.1585 4.11807 5.00049 4.19858C4.65524 4.3745 4.37465 4.65509 4.19873 5.00034C4.11822 5.15834 4.06146 5.36975 4.03076 5.74545C3.99943 6.12897 3.99854 6.62231 3.99854 7.33334V12.6664C3.99854 13.3772 3.99945 13.8708 4.03076 14.2542C4.06145 14.6298 4.11827 14.8414 4.19873 14.9994L4.26904 15.1263C4.44535 15.4137 4.69838 15.6482 5.00049 15.8021L5.13037 15.8578C5.27414 15.9092 5.46365 15.947 5.74561 15.9701C6.12912 16.0014 6.62246 16.0013 7.3335 16.0013H12.6665C13.3774 16.0013 13.8709 16.0014 14.2544 15.9701C14.6298 15.9394 14.8415 15.8825 14.9995 15.8021C15.3448 15.6262 15.6263 15.3446 15.8022 14.9994L15.8579 14.8695C15.9093 14.7257 15.9472 14.536 15.9702 14.2542C16.0015 13.8708 16.0015 13.3772 16.0015 12.6664V7.33334ZM17.3315 12.6664C17.3315 13.3554 17.3322 13.9124 17.2954 14.3626C17.2627 14.7636 17.1977 15.1248 17.0532 15.4613L16.9868 15.6039C16.6834 16.1992 16.1993 16.6833 15.604 16.9867C15.2272 17.1786 14.8208 17.2578 14.3628 17.2953C13.9126 17.332 13.3555 17.3314 12.6665 17.3314H7.3335C6.64441 17.3314 6.08745 17.332 5.63721 17.2953C5.23652 17.2625 4.87587 17.1973 4.53955 17.0531L4.39697 16.9867C3.87586 16.7211 3.43936 16.3174 3.13525 15.8216L3.01318 15.6039C2.82122 15.2271 2.74201 14.8206 2.70459 14.3626C2.66782 13.9124 2.66846 13.3553 2.66846 12.6664V7.33334C2.66846 6.64425 2.6678 6.0873 2.70459 5.63706C2.742 5.17926 2.82138 4.77344 3.01318 4.39682C3.31662 3.80129 3.80144 3.31647 4.39697 3.01303C4.77359 2.82123 5.17942 2.74185 5.63721 2.70444C6.08745 2.66765 6.6444 2.66831 7.3335 2.66831H12.6665C13.3555 2.66831 13.9126 2.66767 14.3628 2.70444C14.8208 2.74186 15.2272 2.82106 15.604 3.01303L15.8218 3.1351C16.3176 3.4392 16.7213 3.8757 16.9868 4.39682L17.0532 4.5394C17.1975 4.87572 17.2627 5.23637 17.2954 5.63706C17.3322 6.0873 17.3315 6.64425 17.3315 7.33334V12.6664Z`,
          }),
        })));
  }))();
}
var V, Ce;
function we() {
  return (we = e(() => {
    (a(),
      (V = c()),
      (Ce = (e) =>
        (0, V.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, V.jsx)(`path`, {
            d: `M15.1687 6.5C15.1687 5.78896 15.1678 5.29563 15.1365 4.91211C15.1134 4.6301 15.0756 4.44066 15.0242 4.29688L14.9685 4.16699C14.8145 3.8648 14.5803 3.61186 14.2927 3.43555L14.1667 3.36524C14.0088 3.28475 13.7971 3.22797 13.4216 3.19727C13.0382 3.16594 12.5446 3.16504 11.8337 3.16504H8.16675C7.45571 3.16504 6.96238 3.16593 6.57886 3.19727C6.20315 3.22797 5.99175 3.28473 5.83374 3.36524C5.4885 3.54116 5.2079 3.82175 5.03198 4.16699C4.95147 4.325 4.89472 4.5364 4.86401 4.91211C4.83268 5.29563 4.83179 5.78896 4.83179 6.5V13.5C4.83179 14.211 4.83268 14.7044 4.86401 15.0879C4.89472 15.4636 4.95147 15.675 5.03198 15.833L5.1023 15.959C5.27861 16.2466 5.53148 16.4807 5.83374 16.6348L5.96362 16.6914C6.10737 16.7428 6.297 16.7797 6.57886 16.8027C6.96238 16.8341 7.45571 16.835 8.16675 16.835H11.8337C12.5446 16.835 13.0382 16.8341 13.4216 16.8027C13.7971 16.772 14.0088 16.7153 14.1667 16.6348L14.2927 16.5645C14.5803 16.3881 14.8145 16.1352 14.9685 15.833L15.0242 15.7031C15.0756 15.5593 15.1134 15.3699 15.1365 15.0879C15.1678 14.7044 15.1687 14.211 15.1687 13.5V6.5ZM16.4988 13.5C16.4988 14.1891 16.4985 14.746 16.4617 15.1963C16.4289 15.5969 16.3647 15.9577 16.2205 16.2939L16.1531 16.4365C15.8875 16.9577 15.484 17.3941 14.988 17.6982L14.7703 17.8203C14.3937 18.0122 13.9878 18.0915 13.53 18.1289C13.0799 18.1657 12.5227 18.165 11.8337 18.165H8.16675C7.47766 18.165 6.9207 18.1657 6.47046 18.1289C6.06981 18.0962 5.70909 18.031 5.3728 17.8867L5.23023 17.8203C4.70919 17.5548 4.2726 17.151 3.96851 16.6553L3.84644 16.4365C3.65463 16.0599 3.57525 15.6541 3.53784 15.1963C3.50106 14.746 3.50171 14.1891 3.50171 13.5V6.5C3.50171 5.81091 3.50106 5.25395 3.53784 4.80371C3.57525 4.34592 3.65463 3.94009 3.84644 3.56348C4.14988 2.96794 4.63469 2.48313 5.23023 2.17969C5.60684 1.98788 6.01267 1.90851 6.47046 1.87109C6.9207 1.83431 7.47766 1.83496 8.16675 1.83496H11.8337C12.5227 1.83496 13.0799 1.83431 13.53 1.87109C13.9878 1.90853 14.3937 1.98783 14.7703 2.17969L14.988 2.30176C15.484 2.60587 15.8875 3.04228 16.1531 3.56348L16.2205 3.70606C16.3647 4.0423 16.4289 4.40313 16.4617 4.80371C16.4985 5.25395 16.4988 5.81091 16.4988 6.5V13.5Z`,
          }),
        })));
  }))();
}
var H, U;
function W() {
  return (W = e(() => {
    (a(),
      (H = c()),
      (U = (e) =>
        (0, H.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, H.jsx)(`path`, {
            d: `M16.835 8.16666C16.835 7.45562 16.8341 6.96229 16.8027 6.57877C16.7797 6.29691 16.7428 6.10728 16.6914 5.96353L16.6348 5.83365C16.4807 5.53139 16.2466 5.27852 15.959 5.1022L15.833 5.03189C15.675 4.95138 15.4636 4.89462 15.0879 4.86392C14.7044 4.83259 14.211 4.8317 13.5 4.8317H6.5C5.78896 4.8317 5.29563 4.83259 4.91211 4.86392C4.5364 4.89462 4.325 4.95138 4.16699 5.03189C3.82175 5.20781 3.54116 5.48841 3.36524 5.83365C3.28473 5.99166 3.22797 6.20306 3.19727 6.57877C3.16593 6.96229 3.16504 7.45562 3.16504 8.16666V11.8336C3.16504 12.5445 3.16594 13.0381 3.19727 13.4215C3.22797 13.797 3.28475 14.0087 3.36524 14.1667L3.43555 14.2926C3.61186 14.5802 3.8648 14.8144 4.16699 14.9684L4.29688 15.0241C4.44066 15.0756 4.6301 15.1133 4.91211 15.1364C5.29563 15.1677 5.78896 15.1686 6.5 15.1686H13.5C14.211 15.1686 14.7044 15.1677 15.0879 15.1364C15.4635 15.1057 15.675 15.0489 15.833 14.9684L15.959 14.8971C16.2464 14.7209 16.4808 14.4687 16.6348 14.1667L16.6914 14.0358C16.7427 13.8922 16.7797 13.7028 16.8027 13.4215C16.8341 13.0381 16.835 12.5445 16.835 11.8336V8.16666ZM18.165 11.8336C18.165 12.5226 18.1657 13.0798 18.1289 13.5299C18.0961 13.9306 18.031 14.2913 17.8867 14.6276L17.8203 14.7702C17.5549 15.2911 17.1509 15.7268 16.6553 16.0309L16.4365 16.153C16.0598 16.3449 15.6542 16.4242 15.1963 16.4616C14.746 16.4984 14.1891 16.4987 13.5 16.4987H6.5C5.81091 16.4987 5.25395 16.4984 4.80371 16.4616C4.40313 16.4288 4.0423 16.3646 3.70606 16.2204L3.56348 16.153C3.04228 15.8874 2.60587 15.4839 2.30176 14.9879L2.17969 14.7702C1.98783 14.3936 1.90853 13.9877 1.87109 13.5299C1.83431 13.0798 1.83496 12.5226 1.83496 11.8336V8.16666C1.83496 7.47757 1.83431 6.92061 1.87109 6.47037C1.90851 6.01258 1.98788 5.60675 2.17969 5.23013C2.48313 4.6346 2.96794 4.14978 3.56348 3.84634C3.94009 3.65454 4.34592 3.57516 4.80371 3.53775C5.25395 3.50096 5.81091 3.50162 6.5 3.50162H13.5C14.1891 3.50162 14.746 3.50096 15.1963 3.53775C15.6541 3.57516 16.0599 3.65454 16.4365 3.84634L16.6553 3.96842C17.151 4.27251 17.5548 4.7091 17.8203 5.23013L17.8867 5.37271C18.031 5.709 18.0962 6.06972 18.1289 6.47037C18.1657 6.92061 18.165 7.47756 18.165 8.16666V11.8336Z`,
          }),
        })));
  }))();
}
var G, K;
function q() {
  return (q = e(() => {
    (a(),
      (G = c()),
      (K = (e) =>
        (0, G.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, G.jsx)(`path`, {
            d: `M9.16504 2.33154C8.454 2.33154 7.96067 2.33243 7.57715 2.36377C7.29514 2.38681 7.1057 2.4246 6.96191 2.47607L6.83203 2.53174C6.52984 2.68571 6.2769 2.91997 6.10059 3.20752L6.03027 3.3335C5.94979 3.49146 5.89301 3.70311 5.86231 4.07861C5.83098 4.46207 5.83008 4.95564 5.83008 5.6665V14.3335C5.83008 15.0445 5.83097 15.5379 5.86231 15.9214C5.89301 16.2971 5.94977 16.5085 6.03027 16.6665C6.2062 17.0117 6.48679 17.2923 6.83203 17.4683C6.99004 17.5488 7.20144 17.6055 7.57715 17.6362C7.96067 17.6676 8.454 17.6685 9.16504 17.6685L10.835 17.7056C11.546 17.7056 12.0393 17.7047 12.4229 17.6733C12.7986 17.6426 13.01 17.5859 13.168 17.5054L13.2939 17.4351C13.5816 17.2587 13.8157 17.0059 13.9697 16.7036L14.0264 16.5737C14.0778 16.43 14.1147 16.2404 14.1377 15.9585C14.169 15.575 14.1699 15.0816 14.1699 14.3706V5.70361C14.1699 4.99275 14.169 4.49918 14.1377 4.11572C14.107 3.74022 14.0502 3.52857 13.9697 3.3706L13.8994 3.24463C13.7231 2.95708 13.4702 2.72282 13.168 2.56885L13.0381 2.51318C12.8943 2.46171 12.7049 2.42392 12.4229 2.40088C12.0393 2.36954 11.546 2.36865 10.835 2.36865L9.16504 2.33154ZM10.835 1.03857C11.5241 1.03857 12.081 1.0389 12.5312 1.07568C12.9318 1.10842 13.2927 1.1727 13.6289 1.31689L13.7715 1.38428C14.2927 1.64984 14.7291 2.05339 15.0332 2.54932L15.1553 2.76709C15.3471 3.14369 15.4264 3.54956 15.4639 4.00732C15.5006 4.45749 15.5 5.01467 15.5 5.70361V14.3706C15.5 15.0597 15.5007 15.6167 15.4639 16.0669C15.4311 16.4675 15.3659 16.8283 15.2217 17.1646L15.1553 17.3071C14.8898 17.8282 14.4859 18.2648 13.9902 18.5688L13.7715 18.6909C13.3949 18.8827 12.989 18.9621 12.5312 18.9995C12.081 19.0363 11.5241 19.0356 10.835 19.0356L9.16504 18.9985C8.47595 18.9985 7.91899 18.9992 7.46875 18.9624C7.01096 18.925 6.60513 18.8456 6.22852 18.6538C5.63298 18.3504 5.14817 17.8656 4.84473 17.27C4.65292 16.8934 4.57355 16.4876 4.53613 16.0298C4.49935 15.5795 4.5 15.0226 4.5 14.3335V5.6665C4.5 4.97756 4.49935 4.42038 4.53613 3.97021C4.57356 3.51245 4.65287 3.10658 4.84473 2.72998L4.9668 2.51221C5.2709 2.01628 5.70732 1.61273 6.22852 1.34717L6.37109 1.27979C6.70734 1.13559 7.06817 1.07131 7.46875 1.03857C7.91899 1.00179 8.47595 1.00146 9.16504 1.00146L10.835 1.03857Z`,
          }),
        })));
  }))();
}
var J, Y;
function X() {
  return (X = e(() => {
    (a(),
      (J = c()),
      (Y = (e) =>
        (0, J.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, J.jsx)(`path`, {
            d: `M17.6685 9C17.6685 8.28896 17.6676 7.79563 17.6362 7.41211C17.6132 7.1301 17.5754 6.94066 17.5239 6.79688L17.4683 6.66699C17.3143 6.3648 17.08 6.11186 16.7925 5.93555L16.6665 5.86524C16.5085 5.78475 16.2969 5.72797 15.9214 5.69727C15.5379 5.66594 15.0444 5.66504 14.3335 5.66504H5.6665C4.95547 5.66504 4.46213 5.66593 4.07861 5.69727C3.70291 5.72797 3.4915 5.78473 3.3335 5.86524C2.98825 6.04116 2.70766 6.32175 2.53174 6.66699C2.45123 6.825 2.39447 7.0364 2.36377 7.41211C2.33244 7.79563 2.33154 8.28896 2.33154 9V11C2.33154 11.711 2.33244 12.2044 2.36377 12.5879C2.39447 12.9636 2.45123 13.175 2.53174 13.333L2.60205 13.459C2.77837 13.7466 3.03124 13.9807 3.3335 14.1348L3.46338 14.1914C3.60713 14.2428 3.79676 14.2797 4.07861 14.3027C4.46213 14.3341 4.95547 14.335 5.6665 14.335H14.3335C15.0444 14.335 15.5379 14.3341 15.9214 14.3027C16.2969 14.272 16.5085 14.2153 16.6665 14.1348L16.7925 14.0645C17.08 13.8881 17.3143 13.6352 17.4683 13.333L17.5239 13.2031C17.5754 13.0593 17.6132 12.8699 17.6362 12.5879C17.6676 12.2044 17.6685 11.711 17.6685 11V9ZM18.9985 11C18.9985 11.6891 18.9982 12.246 18.9614 12.6963C18.9287 13.0969 18.8644 13.4577 18.7202 13.7939L18.6528 13.9365C18.3873 14.4577 17.9837 14.8941 17.4878 15.1982L17.27 15.3203C16.8934 15.5122 16.4876 15.5915 16.0298 15.6289C15.5796 15.6657 15.0224 15.665 14.3335 15.665H5.6665C4.97741 15.665 4.42046 15.6657 3.97022 15.6289C3.56957 15.5962 3.20885 15.531 2.87256 15.3867L2.72998 15.3203C2.20895 15.0548 1.77236 14.651 1.46826 14.1553L1.34619 13.9365C1.15439 13.5599 1.07501 13.1541 1.0376 12.6963C1.00081 12.246 1.00147 11.6891 1.00147 11V9C1.00147 8.31091 1.00081 7.75395 1.0376 7.30371C1.07501 6.84592 1.15439 6.44009 1.34619 6.06348C1.64963 5.46794 2.13445 4.98313 2.72998 4.67969C3.1066 4.48788 3.51242 4.40851 3.97022 4.37109C4.42046 4.33431 4.97741 4.33496 5.6665 4.33496H14.3335C15.0224 4.33496 15.5796 4.33431 16.0298 4.37109C16.4876 4.40853 16.8934 4.48783 17.27 4.67969L17.4878 4.80176C17.9837 5.10587 18.3873 5.54228 18.6528 6.06348L18.7202 6.20606C18.8644 6.5423 18.9287 6.90313 18.9614 7.30371C18.9982 7.75395 18.9985 8.31091 18.9985 9V11Z`,
          }),
        })));
  }))();
}
var Z, Te;
function Ee() {
  return (Ee = e(() => {
    (a(),
      (Z = c()),
      (Te = (e) =>
        (0, Z.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, Z.jsx)(`path`, {
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M14.667 4.80762C15.6931 4.80779 16.5252 5.63994 16.5254 6.66602V13.333C16.5254 14.3592 15.6932 15.1912 14.667 15.1914H5.33301C4.30683 15.1912 3.47461 14.3592 3.47461 13.333V6.66602C3.47478 5.63994 4.30694 4.80779 5.33301 4.80762H14.667ZM5.33301 5.8584C4.88683 5.85857 4.52557 6.21984 4.52539 6.66602V8.99414C4.76984 8.87578 5.04327 8.80767 5.33301 8.80762H10.667C11.6931 8.80779 12.5252 9.63995 12.5254 10.666V13.333C12.5254 13.6232 12.4566 13.8969 12.3379 14.1416H14.667C15.1133 14.1414 15.4746 13.7793 15.4746 13.333V6.66602C15.4744 6.21984 15.1132 5.85857 14.667 5.8584H5.33301ZM5.33301 9.8584C4.88684 9.85857 4.52557 10.2198 4.52539 10.666V13.333C4.52539 13.7793 4.88673 14.1414 5.33301 14.1416H10.667C11.1133 14.1414 11.4746 13.7793 11.4746 13.333V10.666C11.4744 10.2198 11.1132 9.85857 10.667 9.8584H5.33301Z`,
          }),
        })));
  }))();
}
function De(e) {
  let t = (0, Oe.c)(93),
    {
      canEditImage: r,
      downloadAction: a,
      isLoading: s,
      isSubmittingBackgroundRemoval: c,
      isSubmittingResize: l,
      onComment: u,
      onMarkup: ne,
      showComment: d,
      onErase: f,
      onRemoveBackground: p,
      onResize: m,
      resizeMenuOpen: h,
      onResizeMenuOpenChange: ie,
      variant: _,
    } = e,
    ae = d === void 0 || d,
    v = ce(),
    y = _ === `embedded`,
    b = _ === `imageTools`,
    S = y ? `[@container_(max-width:450px)]:sr-only` : `[@container_(max-width:630px)]:sr-only`,
    C = y ? `ghostSecondary` : `ghostActive`,
    fe = y || b ? `imageToolbar` : `composerSm`,
    me = y ? `large` : `default`,
    w;
  t[0] !== C || t[1] !== fe || t[2] !== me
    ? ((w = { color: C, size: fe, radius: me }), (t[0] = C), (t[1] = fe), (t[2] = me), (t[3] = w))
    : (w = t[3]);
  let T = w,
    E;
  t[4] === v
    ? (E = t[5])
    : ((E = v.formatMessage({
        id: `imageSidePanel.comment`,
        defaultMessage: `Comment`,
        description: `Toolbar action that enters image comment mode.`,
      })),
      (t[4] = v),
      (t[5] = E));
  let ge = E,
    D;
  t[6] !== v || t[7] !== y || t[8] !== b
    ? ((D =
        y || b
          ? v.formatMessage({
              id: `imageSidePanel.erase`,
              defaultMessage: `Erase`,
              description: `Image panel toolbar action that lets the user brush over an area of the image to erase it.`,
            })
          : v.formatMessage({
              id: `imageSidePanel.remove`,
              defaultMessage: `Remove`,
              description: `Toolbar action that enters image remove mode.`,
            })),
      (t[6] = v),
      (t[7] = y),
      (t[8] = b),
      (t[9] = D))
    : (D = t[9]);
  let _e = D,
    O = y ? _e : void 0,
    ve = !r || c,
    k;
  t[10] === b
    ? (k = t[11])
    : ((k = b ? (0, Q.jsx)(re, {}) : (0, Q.jsx)(i, { "aria-hidden": !1, asset: pe })),
      (t[10] = b),
      (t[11] = k));
  let A = !y && !b && `text-base`,
    j;
  t[12] !== S || t[13] !== A ? ((j = te(S, A)), (t[12] = S), (t[13] = A), (t[14] = j)) : (j = t[14]);
  let ye;
  t[15] !== _e || t[16] !== j
    ? ((ye = (0, Q.jsx)(`span`, { className: j, children: _e })), (t[15] = _e), (t[16] = j), (t[17] = ye))
    : (ye = t[17]);
  let be;
  t[18] !== T || t[19] !== _e || t[20] !== f || t[21] !== k || t[22] !== ye || t[23] !== O || t[24] !== ve
    ? ((be = (0, Q.jsxs)(g, {
        ...T,
        "aria-label": _e,
        title: O,
        disabled: ve,
        onClick: f,
        children: [k, ye],
      })),
      (t[18] = T),
      (t[19] = _e),
      (t[20] = f),
      (t[21] = k),
      (t[22] = ye),
      (t[23] = O),
      (t[24] = ve),
      (t[25] = be))
    : (be = t[25]);
  let xe = be,
    M = y ? void 0 : `pointer-events-auto`,
    N;
  t[26] !== T || t[27] !== r || t[28] !== v || t[29] !== y || t[30] !== c || t[31] !== S || t[32] !== ne
    ? ((N =
        ne == null
          ? null
          : (0, Q.jsxs)(g, {
              ...T,
              title: y
                ? v.formatMessage({
                    id: `imageSidePanel.markup`,
                    defaultMessage: `Markup`,
                    description: `Open drawing, text, shapes, and comments on an image`,
                  })
                : void 0,
              disabled: !r || c,
              onClick: ne,
              children: [
                (0, Q.jsx)(ee, {}),
                (0, Q.jsx)(`span`, {
                  className: S,
                  children: (0, Q.jsx)(de, {
                    id: `imageSidePanel.markup`,
                    defaultMessage: `Markup`,
                    description: `Open drawing, text, shapes, and comments on an image`,
                  }),
                }),
              ],
            })),
      (t[26] = T),
      (t[27] = r),
      (t[28] = v),
      (t[29] = y),
      (t[30] = c),
      (t[31] = S),
      (t[32] = ne),
      (t[33] = N))
    : (N = t[33]);
  let P;
  t[34] !== T ||
  t[35] !== ge ||
  t[36] !== y ||
  t[37] !== b ||
  t[38] !== s ||
  t[39] !== c ||
  t[40] !== S ||
  t[41] !== u ||
  t[42] !== ae
    ? ((P = ae
        ? (0, Q.jsxs)(g, {
            ...T,
            "aria-label": ge,
            title: y ? ge : void 0,
            disabled: s || c,
            onClick: u,
            children: [
              b ? (0, Q.jsx)(o, {}) : (0, Q.jsx)(i, { "aria-hidden": !1, asset: y ? se : n }),
              (0, Q.jsx)(`span`, { className: te(S, !y && !b && `text-base`), children: ge }),
            ],
          })
        : null),
      (t[34] = T),
      (t[35] = ge),
      (t[36] = y),
      (t[37] = b),
      (t[38] = s),
      (t[39] = c),
      (t[40] = S),
      (t[41] = u),
      (t[42] = ae),
      (t[43] = P))
    : (P = t[43]);
  let F;
  t[44] === v
    ? (F = t[45])
    : ((F = v.formatMessage({
        id: `imageSidePanel.removeBackground`,
        defaultMessage: `Remove BG`,
        description: `Compact image panel action that immediately removes the current image's background while preserving its foreground subjects. BG is short for background.`,
      })),
      (t[44] = v),
      (t[45] = F));
  let Se = !r || l,
    I;
  t[46] === b ? (I = t[47]) : ((I = b ? (0, Q.jsx)(le, {}) : (0, Q.jsx)(oe, {})), (t[46] = b), (t[47] = I));
  let L;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Q.jsx)(de, {
        id: `imageSidePanel.removeBackground`,
        defaultMessage: `Remove BG`,
        description: `Compact image panel action that immediately removes the current image's background while preserving its foreground subjects. BG is short for background.`,
      })),
      (t[48] = L))
    : (L = t[48]);
  let R;
  t[49] === S
    ? (R = t[50])
    : ((R = (0, Q.jsx)(`span`, { className: S, children: L })), (t[49] = S), (t[50] = R));
  let z;
  t[51] !== T || t[52] !== c || t[53] !== p || t[54] !== F || t[55] !== Se || t[56] !== I || t[57] !== R
    ? ((z = (0, Q.jsxs)(g, {
        ...T,
        "aria-label": F,
        disabled: Se,
        loading: c,
        onClick: p,
        children: [I, R],
      })),
      (t[51] = T),
      (t[52] = c),
      (t[53] = p),
      (t[54] = F),
      (t[55] = Se),
      (t[56] = I),
      (t[57] = R),
      (t[58] = z))
    : (z = t[58]);
  let B = y ? `top` : `bottom`,
    V;
  t[59] === v
    ? (V = t[60])
    : ((V = v.formatMessage({
        id: `imageSidePanel.resize`,
        defaultMessage: `Resize`,
        description: `Toolbar action that resizes the current image.`,
      })),
      (t[59] = v),
      (t[60] = V));
  let Ce = !r || c,
    we = b ? `icon-md` : `icon-sm`,
    H;
  t[61] === we ? (H = t[62]) : ((H = (0, Q.jsx)(Te, { className: we })), (t[61] = we), (t[62] = H));
  let U = !y && !b && `text-base`,
    W;
  t[63] !== S || t[64] !== U ? ((W = te(S, U)), (t[63] = S), (t[64] = U), (t[65] = W)) : (W = t[65]);
  let G;
  t[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, Q.jsx)(de, {
        id: `imageSidePanel.resize`,
        defaultMessage: `Resize`,
        description: `Toolbar action that resizes the current image.`,
      })),
      (t[66] = G))
    : (G = t[66]);
  let K;
  t[67] === W
    ? (K = t[68])
    : ((K = (0, Q.jsx)(`span`, { className: W, children: G })), (t[67] = W), (t[68] = K));
  let q;
  t[69] !== T || t[70] !== l || t[71] !== V || t[72] !== Ce || t[73] !== H || t[74] !== K
    ? ((q = (0, Q.jsxs)(g, { ...T, "aria-label": V, disabled: Ce, loading: l, children: [H, K] })),
      (t[69] = T),
      (t[70] = l),
      (t[71] = V),
      (t[72] = Ce),
      (t[73] = H),
      (t[74] = K),
      (t[75] = q))
    : (q = t[75]);
  let J;
  t[76] === m
    ? (J = t[77])
    : ((J = $.map((e) => {
        let { icon: t, label: n, ratio: r } = e;
        return (0, Q.jsx)(
          x.Item,
          {
            LeftIcon: t,
            onSelect: () => m(r),
            children: (0, Q.jsxs)(`span`, {
              className: `flex w-full items-center justify-between gap-4`,
              children: [
                (0, Q.jsx)(de, { ...n }),
                (0, Q.jsx)(`span`, { className: `text-tertiary`, children: r }),
              ],
            }),
          },
          r,
        );
      })),
      (t[76] = m),
      (t[77] = J));
  let Y;
  t[78] !== ie || t[79] !== h || t[80] !== B || t[81] !== q || t[82] !== J
    ? ((Y = (0, Q.jsx)(ue, {
        align: `center`,
        contentWidth: `xs`,
        open: h,
        onOpenChange: ie,
        side: B,
        triggerButton: q,
        children: J,
      })),
      (t[78] = ie),
      (t[79] = h),
      (t[80] = B),
      (t[81] = q),
      (t[82] = J),
      (t[83] = Y))
    : (Y = t[83]);
  let X;
  return (
    t[84] !== a ||
    t[85] !== xe ||
    t[86] !== M ||
    t[87] !== N ||
    t[88] !== P ||
    t[89] !== z ||
    t[90] !== Y ||
    t[91] !== _
      ? ((X = (0, Q.jsxs)(he, { className: M, variant: _, children: [N, P, z, xe, Y, a] })),
        (t[84] = a),
        (t[85] = xe),
        (t[86] = M),
        (t[87] = N),
        (t[88] = P),
        (t[89] = z),
        (t[90] = Y),
        (t[91] = _),
        (t[92] = X))
      : (X = t[92]),
    X
  );
}
var Oe, Q, $;
function ke() {
  return (ke = e(() => {
    ((Oe = d()),
      C(),
      y(),
      f(),
      u(),
      h(),
      _(),
      v(),
      ne(),
      p(),
      B(),
      we(),
      W(),
      q(),
      X(),
      Ee(),
      T(),
      (Q = c()),
      ($ = [
        {
          icon: z,
          label: s({
            id: `imageSidePanel.aspectRatio.square`,
            defaultMessage: `Square`,
            description: `Label for the 1:1 image resize option.`,
          }),
          ratio: `1:1`,
        },
        {
          icon: Ce,
          label: s({
            id: `imageSidePanel.aspectRatio.portrait`,
            defaultMessage: `Portrait`,
            description: `Label for the 3:4 image resize option.`,
          }),
          ratio: `3:4`,
        },
        {
          icon: K,
          label: s({
            id: `imageSidePanel.aspectRatio.story`,
            defaultMessage: `Story`,
            description: `Label for the 9:16 image resize option.`,
          }),
          ratio: `9:16`,
        },
        {
          icon: U,
          label: s({
            id: `imageSidePanel.aspectRatio.landscape`,
            defaultMessage: `Landscape`,
            description: `Label for the 4:3 image resize option.`,
          }),
          ratio: `4:3`,
        },
        {
          icon: Y,
          label: s({
            id: `imageSidePanel.aspectRatio.widescreen`,
            defaultMessage: `Widescreen`,
            description: `Label for the 16:9 image resize option.`,
          }),
          ratio: `16:9`,
        },
      ]));
  }))();
}
export { L as i, ke as n, O as r, De as t };
//# sourceMappingURL=image-tools-toolbar-fcd30c6251a3.js.map
