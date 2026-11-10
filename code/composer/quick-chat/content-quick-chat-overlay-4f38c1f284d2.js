import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $V as n,
  A3t as ee,
  AF as r,
  AMt as i,
  AV as a,
  Amn as o,
  Dln as te,
  Eln as ne,
  F3t as re,
  Gj as s,
  Gy as ie,
  Jit as c,
  Kit as ae,
  Kj as l,
  O3t as oe,
  OL as u,
  Opn as se,
  QFt as d,
  Qy as ce,
  Rpn as le,
  SFt as f,
  Sln as p,
  Spn as m,
  TFt as h,
  ZFt as g,
  _zt as _,
  a3t as v,
  ab as y,
  cFt as b,
  dI as x,
  dW as S,
  eH as C,
  fK as ue,
  fW as w,
  gRt as de,
  hmn as T,
  jV as E,
  kF as fe,
  kL as D,
  kMt as O,
  kmn as k,
  lI as pe,
  lW as me,
  mK as A,
  nFt as j,
  nb as he,
  nln as M,
  o3t as ge,
  pRt as _e,
  pln as ve,
  pmn as N,
  rb as ye,
  sW as P,
  uln as be,
  vzt as xe,
  xRt as F,
  yzt as Se,
  zpn as Ce,
} from "./app-initial-f094ef01c64d.js";
import {
  $b as I,
  Xy as we,
  Zy as L,
  cb as R,
  eb as Te,
  ex as Ee,
  ns as De,
  rb as Oe,
  rs as ke,
  rx as Ae,
  tx as je,
  ub as Me,
} from "./app-primary-4c40d73a1074.js";
import { n as Ne, t as Pe } from "./collapse-f3eca6f029fa.js";
import {
  i as Fe,
  m as Ie,
  n as Le,
  p as Re,
  r as ze,
  t as Be,
} from "./quick-chat-floating-position-50d00104d2ad.js";
import { n as Ve, t as He } from "./quick-chat-frame-3ad7b171952a.js";
function Ue(e) {
  let t = (0, Je.c)(301),
    {
      children: r,
      containerSize: i,
      compactContent: o,
      compactWidth: te,
      footer: ie,
      renderHeader: c,
      forceExpanded: l,
      isMinimized: oe,
      onMinimizedChange: u,
      title: d,
      renderTranscript: f,
    } = e,
    m = l !== void 0 && l,
    h = ee(v),
    g = se(),
    _ = Se(),
    b = D(),
    x = (0, z.useSyncExternalStore)(Ge, Ke),
    C;
  t[0] !== x || t[1] !== _ ? ((C = xe(x, _)), (t[0] = x), (t[1] = _), (t[2] = C)) : (C = t[2]);
  let w = C,
    de = (0, z.useSyncExternalStore)(Ge, qe),
    T;
  t[3] !== de || t[4] !== _ ? ((T = xe(de, _)), (t[3] = de), (t[4] = _), (t[5] = T)) : (T = t[5]);
  let E = T,
    [fe, k] = (0, z.useState)(0),
    pe;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (e) => {
        k(S(e).height);
      }),
      (t[6] = pe))
    : (pe = t[6]);
  let A = me(pe),
    j = (i?.height ?? w) - fe,
    M = i?.width ?? E,
    ge = re(ce),
    _e = re(he),
    N = be(),
    P = p(0),
    F = p(0),
    Ce = (0, z.useRef)(null),
    [I, we] = (0, z.useState)(`compact`),
    [L, R] = (0, z.useState)(null),
    [Te, Ee] = (0, z.useState)(!1),
    [De, Oe] = (0, z.useState)(!1),
    [ke, Ae] = (0, z.useState)(!1),
    [je, Me] = (0, z.useState)(!1),
    [Ne, Fe] = (0, z.useState)(0),
    Ie;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = (e) => {
        Fe(e.contentRect.height);
      }),
      (t[7] = Ie))
    : (Ie = t[7]);
  let Ve = me(Ie),
    [Ue, et] = (0, z.useState)(null),
    [tt, nt] = (0, z.useState)(0),
    V;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (e) => {
        nt(e.contentRect.height);
      }),
      (t[8] = V))
    : (V = t[8]);
  let rt = me(V),
    H = o != null,
    [it, at] = (0, z.useState)(H);
  it !== H && (at(H), R(null));
  let U = !H && oe,
    W = H || (!m && I === `compact`),
    G = !W || Te || De || ke,
    K = ge ?? `bottom-right`,
    q,
    J,
    Y,
    X,
    Z,
    Q,
    ot,
    st,
    ct;
  if (
    t[9] !== tt ||
    t[10] !== te ||
    t[11] !== Ne ||
    t[12] !== i ||
    t[13] !== K ||
    t[14] !== Ue ||
    t[15] !== H ||
    t[16] !== G ||
    t[17] !== W ||
    t[18] !== _e ||
    t[19] !== j ||
    t[20] !== M
  ) {
    let e = Ue ?? _e ?? { height: 640, width: 560 };
    ((X = 12),
      (Y = 16 - X / 2),
      (Z = Math.max(0, j - 32 - (i == null ? 46 : 0))),
      (Q = i == null ? M / 2 : Math.max(0, M - Y * 2)));
    let n = H ? tt || 46 : (Ne || 46) + (G ? 46 : 0) + X / 2;
    ((ot = Math.min(W ? n : Xe, Z)),
      (st = Math.min(Ze + X, Q)),
      (q = We(W ? n : e.height, ot, Z)),
      (J = We((W ? (te ?? e.width) : e.width) + X, st, Q)),
      (ct = ze(K, { height: q, width: J }, j, M, X)),
      (t[9] = tt),
      (t[10] = te),
      (t[11] = Ne),
      (t[12] = i),
      (t[13] = K),
      (t[14] = Ue),
      (t[15] = H),
      (t[16] = G),
      (t[17] = W),
      (t[18] = _e),
      (t[19] = j),
      (t[20] = M),
      (t[21] = q),
      (t[22] = J),
      (t[23] = Y),
      (t[24] = X),
      (t[25] = Z),
      (t[26] = Q),
      (t[27] = ot),
      (t[28] = st),
      (t[29] = ct));
  } else
    ((q = t[21]),
      (J = t[22]),
      (Y = t[23]),
      (X = t[24]),
      (Z = t[25]),
      (Q = t[26]),
      (ot = t[27]),
      (st = t[28]),
      (ct = t[29]));
  let $ = ct,
    lt = Math.min(36, Z),
    ut = Math.min(36, Q),
    dt,
    ft;
  t[30] !== K || t[31] !== lt || t[32] !== ut || t[33] !== j || t[34] !== M
    ? ((dt = { height: lt, width: ut }),
      (ft = ze(K, dt, j, M)),
      (t[30] = K),
      (t[31] = lt),
      (t[32] = ut),
      (t[33] = j),
      (t[34] = M),
      (t[35] = dt),
      (t[36] = ft))
    : ((dt = t[35]), (ft = t[36]));
  let pt = ft.x - $.x,
    mt = X / 2,
    ht = Math.max(0, q - mt - dt.height),
    gt = J - pt - dt.width,
    _t;
  t[37] !== pt || t[38] !== ht || t[39] !== gt
    ? ((_t = { top: ht, right: gt, bottom: mt, left: pt }),
      (t[37] = pt),
      (t[38] = ht),
      (t[39] = gt),
      (t[40] = _t))
    : (_t = t[40]);
  let vt = _t,
    yt = `inset(${vt.top}px ${vt.right}px ${vt.bottom}px ${vt.left}px round var(--floating-panel-radius))`,
    bt;
  t[41] !== K ||
  t[42] !== q ||
  t[43] !== J ||
  t[44] !== X ||
  t[45] !== P ||
  t[46] !== F ||
  t[47] !== h ||
  t[48] !== j ||
  t[49] !== M
    ? ((bt = (e, t) => {
        let n = t === void 0 ? { height: q, width: J } : t,
          ee = ze(K, n, j, M, X),
          r = { x: ee.x + P.get(), y: ee.y + F.get() },
          i = ze(e, n, j, M, X);
        (P.stop(),
          F.stop(),
          P.jump(r.x - i.x),
          F.jump(r.y - i.y),
          e !== K &&
            (0, Ye.flushSync)(() => {
              ye(h, e);
            }),
          ve(P, 0, $e),
          ve(F, 0, $e));
      }),
      (t[41] = K),
      (t[42] = q),
      (t[43] = J),
      (t[44] = X),
      (t[45] = P),
      (t[46] = F),
      (t[47] = h),
      (t[48] = j),
      (t[49] = M),
      (t[50] = bt))
    : (bt = t[50]);
  let xt = bt,
    St;
  t[51] !== K ||
  t[52] !== q ||
  t[53] !== J ||
  t[54] !== X ||
  t[55] !== $.y ||
  t[56] !== P ||
  t[57] !== F ||
  t[58] !== j ||
  t[59] !== M
    ? ((St = (e, t) => {
        let n = Le(K, e, { height: q, width: J }, P.get(), t.width, j, M, X),
          ee = $.y + F.get() + q,
          r = ze(K, t, j, M, X),
          i = We(ee - t.height, 16, j - t.height - 16 + X / 2);
        (P.stop(),
          F.stop(),
          (0, Ye.flushSync)(() => {
            et({ ...t, width: t.width - X });
          }),
          P.jump(n),
          F.jump(i - r.y));
      }),
      (t[51] = K),
      (t[52] = q),
      (t[53] = J),
      (t[54] = X),
      (t[55] = $.y),
      (t[56] = P),
      (t[57] = F),
      (t[58] = j),
      (t[59] = M),
      (t[60] = St))
    : (St = t[60]);
  let Ct = St,
    wt;
  t[61] !== K || t[62] !== X || t[63] !== h || t[64] !== xt
    ? ((wt = (e) => {
        (y(h, { ...e, width: e.width - X }), xt(K, e));
      }),
      (t[61] = K),
      (t[62] = X),
      (t[63] = h),
      (t[64] = xt),
      (t[65] = wt))
    : (wt = t[65]);
  let Tt = wt,
    Et;
  t[66] === u
    ? (Et = t[67])
    : ((Et = () => {
        (R({ target: `minimized` }), u(!0));
      }),
      (t[66] = u),
      (t[67] = Et));
  let Dt = Et,
    Ot;
  t[68] !== u || t[69] !== I
    ? ((Ot = () => {
        ((0, Ye.flushSync)(() => {
          (R({ target: I }), u(!1));
        }),
          Ce.current?.querySelector(`[contenteditable='true']`)?.focus({ preventScroll: !0 }));
      }),
      (t[68] = u),
      (t[69] = I),
      (t[70] = Ot))
    : (Ot = t[70]);
  let kt = Ot,
    At;
  t[71] === W
    ? (At = t[72])
    : ((At = () => {
        (R(null), we(W ? `expanded` : `compact`));
      }),
      (t[71] = W),
      (t[72] = At));
  let jt = At,
    Mt,
    Nt,
    Pt,
    Ft,
    It,
    Lt,
    Rt,
    zt,
    Bt,
    Vt,
    Ht,
    Ut,
    Wt,
    Gt,
    Kt,
    qt,
    Jt,
    Yt,
    Xt,
    Zt,
    Qt,
    $t,
    en,
    tn,
    nn,
    rn,
    an,
    on;
  if (
    t[73] !== Tt ||
    t[74] !== o ||
    t[75] !== i ||
    t[76] !== K ||
    t[77] !== N ||
    t[78] !== q ||
    t[79] !== J ||
    t[80] !== Y ||
    t[81] !== Z ||
    t[82] !== Q ||
    t[83] !== ot ||
    t[84] !== st ||
    t[85] !== $.x ||
    t[86] !== $.y ||
    t[87] !== P ||
    t[88] !== F ||
    t[89] !== ie ||
    t[90] !== fe ||
    t[91] !== H ||
    t[92] !== g ||
    t[93] !== G ||
    t[94] !== W ||
    t[95] !== U ||
    t[96] !== je ||
    t[97] !== rt ||
    t[98] !== A ||
    t[99] !== Dt ||
    t[100] !== yt ||
    t[101] !== vt ||
    t[102] !== I ||
    t[103] !== c ||
    t[104] !== Ct ||
    t[105] !== L ||
    t[106] !== b ||
    t[107] !== xt ||
    t[108] !== d ||
    t[109] !== jt ||
    t[110] !== j ||
    t[111] !== M
  ) {
    let e = g.formatMessage(
        W
          ? {
              id: `quickChat.expandFloatingChat`,
              defaultMessage: `Expand floating chat`,
              description: `Accessible label for expanding a compact floating chat`,
            }
          : {
              id: `quickChat.showCompactFloatingChat`,
              defaultMessage: `Show compact floating chat`,
              description: `Accessible label for collapsing a floating chat`,
            },
      ),
      ee;
    t[140] === g
      ? (ee = t[141])
      : ((ee = g.formatMessage({
          id: `quickChat.resizeWidth`,
          defaultMessage: `Resize chat width`,
          description: `Accessible label for resizing the chat width`,
        })),
        (t[140] = g),
        (t[141] = ee));
    let r = ee,
      te;
    t[142] === g
      ? (te = t[143])
      : ((te = g.formatMessage({
          id: `quickChat.resizeHeight`,
          defaultMessage: `Resize chat height`,
          description: `Accessible label for resizing the chat height`,
        })),
        (t[142] = g),
        (t[143] = te));
    let re = te;
    ((Nt = He),
      t[144] !== q || t[145] !== J
        ? ((Ht = { height: q, width: J }), (t[144] = q), (t[145] = J), (t[146] = Ht))
        : (Ht = t[146]),
      (Ut = re),
      (Wt = W),
      (Gt = H || G),
      (Kt = U),
      t[147] !== Z || t[148] !== Q
        ? ((qt = { height: Z, width: Q }), (t[147] = Z), (t[148] = Q), (t[149] = qt))
        : (qt = t[149]),
      (Jt = vt),
      t[150] !== ot || t[151] !== st
        ? ((Yt = { height: ot, width: st }), (t[150] = ot), (t[151] = st), (t[152] = Yt))
        : (Yt = t[152]),
      (Xt = !0));
    let s = i != null && void 0,
      l = Y + fe,
      oe = W && !H ? `auto` : q,
      u;
    t[153] !== J || t[154] !== $.x || t[155] !== l || t[156] !== oe
      ? ((u = { bottom: l, height: oe, left: $.x, width: J }),
        (t[153] = J),
        (t[154] = $.x),
        (t[155] = l),
        (t[156] = oe),
        (t[157] = u))
      : (u = t[157]);
    let se = W || void 0,
      ce = U ? void 0 : `quick-chat`,
      f;
    t[158] !== i ||
    t[159] !== q ||
    t[160] !== J ||
    t[161] !== Y ||
    t[162] !== $.x ||
    t[163] !== $.y ||
    t[164] !== j ||
    t[165] !== M
      ? ((f =
          i == null
            ? void 0
            : {
                left: Y - $.x,
                right: Math.max(Y, M - J - Y) - $.x,
                top: Y - $.y,
                bottom: Math.max(Y, j - q - Y) - $.y,
              }),
        (t[158] = i),
        (t[159] = q),
        (t[160] = J),
        (t[161] = Y),
        (t[162] = $.x),
        (t[163] = $.y),
        (t[164] = j),
        (t[165] = M),
        (t[166] = f))
      : (f = t[166]);
    let p = i == null ? void 0 : 0,
      m = i == null ? `dialog` : `region`,
      h;
    t[167] !== P || t[168] !== F
      ? ((h = { top: `auto`, x: P, y: F }), (t[167] = P), (t[168] = F), (t[169] = h))
      : (h = t[169]);
    let _;
    t[170] !== U || t[171] !== je || t[172] !== L || t[173] !== b
      ? ((_ = b || U || je || L != null ? { duration: 0 } : { duration: 300 / 1e3, ease: ue }),
        (t[170] = U),
        (t[171] = je),
        (t[172] = L),
        (t[173] = b),
        (t[174] = _))
      : (_ = t[174]);
    let v;
    t[175] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((v = (e) => {
          e.currentTarget.contains(e.relatedTarget) || Oe(!1);
        }),
        (t[175] = v))
      : (v = t[175]);
    let y;
    t[176] !== K ||
    t[177] !== q ||
    t[178] !== J ||
    t[179] !== $.x ||
    t[180] !== $.y ||
    t[181] !== P ||
    t[182] !== F ||
    t[183] !== W ||
    t[184] !== xt ||
    t[185] !== j ||
    t[186] !== M
      ? ((y = () => {
          if ((Ae(!1), W)) {
            xt(K);
            return;
          }
          xt(Be({ height: q, left: $.x + P.get(), top: $.y + F.get(), width: J }, j, M));
        }),
        (t[176] = K),
        (t[177] = q),
        (t[178] = J),
        (t[179] = $.x),
        (t[180] = $.y),
        (t[181] = P),
        (t[182] = F),
        (t[183] = W),
        (t[184] = xt),
        (t[185] = j),
        (t[186] = M),
        (t[187] = y))
      : (y = t[187]);
    let x;
    t[188] !== P || t[189] !== F
      ? ((x = () => {
          (Ae(!0), P.stop(), F.stop());
        }),
        (t[188] = P),
        (t[189] = F),
        (t[190] = x))
      : (x = t[190]);
    let S;
    t[191] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((S = () => {
          Oe(!0);
        }),
        (t[191] = S))
      : (S = t[191]);
    let C;
    t[192] !== H || t[193] !== W || t[194] !== U
      ? ((C = (e) => {
          H ||
            U ||
            e.key !== `Escape` ||
            e.defaultPrevented ||
            (e.preventDefault(), e.stopPropagation(), W || (R(null), we(`compact`)));
        }),
        (t[192] = H),
        (t[193] = W),
        (t[194] = U),
        (t[195] = C))
      : (C = t[195]);
    let w;
    t[196] === N
      ? (w = t[197])
      : ((w = (e) => {
          e.button !== 0 ||
            !(e.target instanceof Element) ||
            e.target.closest(`[data-quick-chat-drag-handle]`) == null ||
            e.target.closest(
              `button, a, input, textarea, select, [contenteditable='true'], [role='button'], [role='menuitem']`,
            ) != null ||
            (e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), N.start(e));
        }),
        (t[196] = N),
        (t[197] = w));
    let de, T;
    (t[198] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((de = () => {
          Ee(!0);
        }),
        (T = () => {
          Ee(!1);
        }),
        (t[198] = de),
        (t[199] = T))
      : ((de = t[198]), (T = t[199])),
      t[200] !== N ||
      t[201] !== s ||
      t[202] !== u ||
      t[203] !== se ||
      t[204] !== ce ||
      t[205] !== f ||
      t[206] !== p ||
      t[207] !== m ||
      t[208] !== h ||
      t[209] !== _ ||
      t[210] !== y ||
      t[211] !== x ||
      t[212] !== C ||
      t[213] !== w ||
      t[214] !== d
        ? ((Zt = {
            "aria-label": d,
            "aria-modal": s,
            animate: u,
            "data-quick-chat-drag-handle": se,
            "data-pip-obstacle": ce,
            "data-state": `open`,
            drag: !0,
            dragConstraints: f,
            dragElastic: p,
            dragControls: N,
            dragListener: !1,
            dragMomentum: !1,
            initial: !1,
            role: m,
            style: h,
            transition: _,
            onBlurCapture: v,
            onDragEnd: y,
            onDragStart: x,
            onFocusCapture: S,
            onKeyDownCapture: C,
            onPointerDownCapture: w,
            onPointerEnter: de,
            onPointerLeave: T,
          }),
          (t[200] = N),
          (t[201] = s),
          (t[202] = u),
          (t[203] = se),
          (t[204] = ce),
          (t[205] = f),
          (t[206] = p),
          (t[207] = m),
          (t[208] = h),
          (t[209] = _),
          (t[210] = y),
          (t[211] = x),
          (t[212] = C),
          (t[213] = w),
          (t[214] = d),
          (t[215] = Zt))
        : (Zt = t[215]),
      (Qt = b),
      ($t = i == null ? `floating` : `content`),
      (en = r),
      (tn = Ct),
      (nn = Tt),
      t[216] !== P || t[217] !== F
        ? ((rn = (e) => {
            (Me(e), e && (R(null), P.stop(), F.stop()));
          }),
          (t[216] = P),
          (t[217] = F),
          (t[218] = rn))
        : (rn = t[218]));
    let E = K === `bottom-left` ? `left-0` : `right-0`,
      D;
    (t[219] === E
      ? (D = t[220])
      : ((D = le(
          Re.floatingComposerInset,
          `pointer-events-auto absolute top-full w-80 max-w-full pt-2 empty:hidden`,
          E,
        )),
        (t[219] = E),
        (t[220] = D)),
      t[221] !== ie || t[222] !== A || t[223] !== D
        ? ((an = (0, B.jsx)(`div`, {
            ref: A,
            className: D,
            "data-pip-obstacle": `quick-chat`,
            children: ie,
          })),
          (t[221] = ie),
          (t[222] = A),
          (t[223] = D),
          (t[224] = an))
        : (an = t[224]),
      t[225] !== o || t[226] !== H || t[227] !== rt
        ? ((on = H
            ? (0, B.jsx)(`div`, { ref: rt, className: `pointer-events-auto relative`, children: o })
            : null),
          (t[225] = o),
          (t[226] = H),
          (t[227] = rt),
          (t[228] = on))
        : (on = t[228]),
      (Mt = ne.div),
      (Pt = U || H));
    let k = U ? yt : L == null ? `none` : Qe,
      pe = +!U;
    t[229] !== k || t[230] !== pe
      ? ((Ft = { clipPath: k, opacity: pe }), (t[229] = k), (t[230] = pe), (t[231] = Ft))
      : (Ft = t[231]);
    let me = H && `hidden`,
      he = !U && `pointer-events-auto`;
    (t[232] !== me || t[233] !== he
      ? ((It = le(`relative z-0 flex min-h-0 flex-1 flex-col`, me, he)),
        (t[232] = me),
        (t[233] = he),
        (t[234] = It))
      : (It = t[234]),
      (Lt = !1),
      (Rt = U || H ? !0 : void 0),
      t[235] !== L || t[236] !== b
        ? ((zt = b || L == null ? { duration: 0 } : { duration: 300 / 1e3, ease: ue }),
          (t[235] = L),
          (t[236] = b),
          (t[237] = zt))
        : (zt = t[237]),
      t[238] !== U || t[239] !== yt || t[240] !== I || t[241] !== L
        ? ((Bt = (e) => {
            L?.target === (U ? `minimized` : I) &&
              typeof e == `object` &&
              `clipPath` in e &&
              e.clipPath === (U ? yt : Qe) &&
              R((e) => (e === L ? null : e));
          }),
          (t[238] = U),
          (t[239] = yt),
          (t[240] = I),
          (t[241] = L),
          (t[242] = Bt))
        : (Bt = t[242]),
      (Vt = c
        ? c({
            animateChrome: !b && !U && L == null,
            isCompact: W,
            isChromeRevealed: G,
            presentationToggleLabel: e,
            onMinimize: Dt,
            onTogglePresentation: jt,
          })
        : (0, B.jsxs)(ne.header, {
            "aria-hidden": !G || void 0,
            animate: { height: G ? 46 : 0, opacity: +!!G },
            className: le(
              `flex h-toolbar shrink-0 cursor-grab touch-none select-none items-center justify-between active:cursor-grabbing`,
              W && `mx-1.5 overflow-hidden px-2`,
              !W && `px-3`,
            ),
            "data-quick-chat-drag-handle": !0,
            initial: !1,
            inert: !G || void 0,
            transition: b || U || L != null ? { duration: 0 } : { duration: 300 / 1e3, ease: ue },
            children: [
              (0, B.jsx)(`div`, {
                className: `flex min-w-0 flex-1 items-center gap-1`,
                children: (0, B.jsx)(O, {
                  "aria-label": g.formatMessage({
                    id: `quickChat.minimizeToCorner`,
                    defaultMessage: `Minimize chat to corner`,
                    description: `Accessible label for minimizing a floating chat`,
                  }),
                  color: `ghostSecondary`,
                  size: W ? `composer` : `toolbar`,
                  uniform: !0,
                  onClick: Dt,
                  children: (0, B.jsx)(n, { className: `icon-xs` }),
                }),
              }),
              (0, B.jsx)(ae, {
                tooltipContent: e,
                delayOpen: !0,
                children: (0, B.jsx)(O, {
                  "aria-label": e,
                  color: `ghostSecondary`,
                  size: W ? `composer` : `toolbar`,
                  uniform: !0,
                  onClick: jt,
                  children: W
                    ? (0, B.jsx)(a, { "aria-hidden": !0, className: `icon-xs` })
                    : (0, B.jsx)(Pe, { "aria-hidden": !0, className: `icon-xs` }),
                }),
              }),
            ],
          })),
      (t[73] = Tt),
      (t[74] = o),
      (t[75] = i),
      (t[76] = K),
      (t[77] = N),
      (t[78] = q),
      (t[79] = J),
      (t[80] = Y),
      (t[81] = Z),
      (t[82] = Q),
      (t[83] = ot),
      (t[84] = st),
      (t[85] = $.x),
      (t[86] = $.y),
      (t[87] = P),
      (t[88] = F),
      (t[89] = ie),
      (t[90] = fe),
      (t[91] = H),
      (t[92] = g),
      (t[93] = G),
      (t[94] = W),
      (t[95] = U),
      (t[96] = je),
      (t[97] = rt),
      (t[98] = A),
      (t[99] = Dt),
      (t[100] = yt),
      (t[101] = vt),
      (t[102] = I),
      (t[103] = c),
      (t[104] = Ct),
      (t[105] = L),
      (t[106] = b),
      (t[107] = xt),
      (t[108] = d),
      (t[109] = jt),
      (t[110] = j),
      (t[111] = M),
      (t[112] = Mt),
      (t[113] = Nt),
      (t[114] = Pt),
      (t[115] = Ft),
      (t[116] = It),
      (t[117] = Lt),
      (t[118] = Rt),
      (t[119] = zt),
      (t[120] = Bt),
      (t[121] = Vt),
      (t[122] = Ht),
      (t[123] = Ut),
      (t[124] = Wt),
      (t[125] = Gt),
      (t[126] = Kt),
      (t[127] = qt),
      (t[128] = Jt),
      (t[129] = Yt),
      (t[130] = Xt),
      (t[131] = Zt),
      (t[132] = Qt),
      (t[133] = $t),
      (t[134] = en),
      (t[135] = tn),
      (t[136] = nn),
      (t[137] = rn),
      (t[138] = an),
      (t[139] = on));
  } else
    ((Mt = t[112]),
      (Nt = t[113]),
      (Pt = t[114]),
      (Ft = t[115]),
      (It = t[116]),
      (Lt = t[117]),
      (Rt = t[118]),
      (zt = t[119]),
      (Bt = t[120]),
      (Vt = t[121]),
      (Ht = t[122]),
      (Ut = t[123]),
      (Wt = t[124]),
      (Gt = t[125]),
      (Kt = t[126]),
      (qt = t[127]),
      (Jt = t[128]),
      (Yt = t[129]),
      (Xt = t[130]),
      (Zt = t[131]),
      (Qt = t[132]),
      ($t = t[133]),
      (en = t[134]),
      (tn = t[135]),
      (nn = t[136]),
      (rn = t[137]),
      (an = t[138]),
      (on = t[139]));
  let sn;
  t[243] !== W || t[244] !== f
    ? ((sn = W
        ? null
        : f(() => {
            (R(null), we(`compact`));
          })),
      (t[243] = W),
      (t[244] = f),
      (t[245] = sn))
    : (sn = t[245]);
  let cn;
  t[246] === Ve
    ? (cn = t[247])
    : ((cn = (e) => {
        ((Ce.current = e), Ve(e));
      }),
      (t[246] = Ve),
      (t[247] = cn));
  let ln;
  t[248] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ln = le(Re.floatingComposerInset, `mt-auto shrink-0`)), (t[248] = ln))
    : (ln = t[248]);
  let un;
  t[249] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((un = () => {
        (R(null), we(`expanded`));
      }),
      (t[249] = un))
    : (un = t[249]);
  let dn;
  t[250] !== r || t[251] !== G || t[252] !== W || t[253] !== b
    ? ((dn = r({ isCompact: W, isChromeRevealed: G, shouldReduceMotion: b, onSubmitStart: un })),
      (t[250] = r),
      (t[251] = G),
      (t[252] = W),
      (t[253] = b),
      (t[254] = dn))
    : (dn = t[254]);
  let fn;
  t[255] !== cn || t[256] !== dn
    ? ((fn = (0, B.jsx)(`div`, { ref: cn, className: ln, children: dn })),
      (t[255] = cn),
      (t[256] = dn),
      (t[257] = fn))
    : (fn = t[257]);
  let pn;
  t[258] !== sn || t[259] !== fn
    ? ((pn = (0, B.jsxs)(`div`, {
        className: `relative flex min-h-0 flex-1 flex-col`,
        children: [sn, fn],
      })),
      (t[258] = sn),
      (t[259] = fn),
      (t[260] = pn))
    : (pn = t[260]);
  let mn;
  t[261] !== Mt ||
  t[262] !== Pt ||
  t[263] !== Ft ||
  t[264] !== It ||
  t[265] !== Lt ||
  t[266] !== Rt ||
  t[267] !== zt ||
  t[268] !== Bt ||
  t[269] !== Vt ||
  t[270] !== pn
    ? ((mn = (0, B.jsxs)(Mt, {
        "aria-hidden": Pt,
        animate: Ft,
        className: It,
        initial: Lt,
        inert: Rt,
        transition: zt,
        onAnimationComplete: Bt,
        children: [Vt, pn],
      })),
      (t[261] = Mt),
      (t[262] = Pt),
      (t[263] = Ft),
      (t[264] = It),
      (t[265] = Lt),
      (t[266] = Rt),
      (t[267] = zt),
      (t[268] = Bt),
      (t[269] = Vt),
      (t[270] = pn),
      (t[271] = mn))
    : (mn = t[271]);
  let hn;
  t[272] !== g || t[273] !== U || t[274] !== pt || t[275] !== dt || t[276] !== kt || t[277] !== d
    ? ((hn = U
        ? (0, B.jsx)(`div`, {
            className: `pointer-events-auto absolute`,
            "data-pip-obstacle": `quick-chat`,
            style: { bottom: mt, left: pt, ...dt },
            children: (0, B.jsx)(O, {
              "aria-label": g.formatMessage(
                {
                  id: `quickChat.restoreFloatingChat`,
                  defaultMessage: `Restore floating chat: {title}`,
                  description: `Accessible label for restoring a minimized floating chat`,
                },
                { title: d },
              ),
              autoFocus: !0,
              className: `absolute inset-0 m-auto`,
              color: `ghostSecondary`,
              size: `composer`,
              uniform: !0,
              onClick: kt,
              children: (0, B.jsx)(s, { className: `icon-sm` }),
            }),
          })
        : null),
      (t[272] = g),
      (t[273] = U),
      (t[274] = pt),
      (t[275] = dt),
      (t[276] = kt),
      (t[277] = d),
      (t[278] = hn))
    : (hn = t[278]);
  let gn;
  return (
    t[279] !== Nt ||
    t[280] !== Ht ||
    t[281] !== Ut ||
    t[282] !== Wt ||
    t[283] !== Gt ||
    t[284] !== Kt ||
    t[285] !== qt ||
    t[286] !== Jt ||
    t[287] !== Yt ||
    t[288] !== Xt ||
    t[289] !== Zt ||
    t[290] !== Qt ||
    t[291] !== $t ||
    t[292] !== en ||
    t[293] !== tn ||
    t[294] !== nn ||
    t[295] !== rn ||
    t[296] !== an ||
    t[297] !== on ||
    t[298] !== mn ||
    t[299] !== hn
      ? ((gn = (0, B.jsxs)(Nt, {
          currentSize: Ht,
          heightLabel: Ut,
          isCompact: Wt,
          isCompactChromeRevealed: Gt,
          isMinimized: Kt,
          maximumSize: qt,
          minimizedSurfaceBounds: Jt,
          minimumSize: Yt,
          prefersCompactPresentation: Xt,
          sectionProps: Zt,
          shouldReduceMotion: Qt,
          variant: $t,
          widthLabel: en,
          onResize: tn,
          onResizeEnd: nn,
          onResizingChange: rn,
          children: [an, on, mn, hn],
        })),
        (t[279] = Nt),
        (t[280] = Ht),
        (t[281] = Ut),
        (t[282] = Wt),
        (t[283] = Gt),
        (t[284] = Kt),
        (t[285] = qt),
        (t[286] = Jt),
        (t[287] = Yt),
        (t[288] = Xt),
        (t[289] = Zt),
        (t[290] = Qt),
        (t[291] = $t),
        (t[292] = en),
        (t[293] = tn),
        (t[294] = nn),
        (t[295] = rn),
        (t[296] = an),
        (t[297] = on),
        (t[298] = mn),
        (t[299] = hn),
        (t[300] = gn))
      : (gn = t[300]),
    gn
  );
}
function We(e, t, n) {
  return Math.max(t, Math.min(e, n));
}
function Ge(e) {
  return (
    window.addEventListener(`resize`, e),
    () => {
      window.removeEventListener(`resize`, e);
    }
  );
}
function Ke() {
  return window.visualViewport?.height ?? window.innerHeight;
}
function qe() {
  return window.visualViewport?.width ?? window.innerWidth;
}
var Je,
  z,
  Ye,
  B,
  Xe,
  Ze,
  Qe,
  $e,
  et = e(() => {
    ((Je = k()),
      Ce(),
      M(),
      oe(),
      (z = t(o(), 1)),
      (Ye = t(N(), 1)),
      m(),
      _(),
      Fe(),
      ie(),
      i(),
      c(),
      u(),
      l(),
      Ne(),
      E(),
      C(),
      w(),
      P(),
      ge(),
      _e(),
      A(),
      Ve(),
      Ie(),
      (B = T()),
      (Xe = 400),
      (Ze = 360),
      (Qe = `inset(0px 0px 0px 0px round var(--floating-panel-radius))`),
      ($e = { type: `spring`, bounce: 0.16, duration: 0.42 }));
  });
function tt(e) {
  let t = (0, nt.c)(43),
    { children: n, title: r, renderTranscript: i } = e,
    a = ee(de),
    o = se(),
    s = (0, V.useContext)(fe),
    ie = (0, V.useContext)(pe),
    c = Se(),
    ae = (0, V.useRef)(null),
    [l, oe] = (0, V.useState)(null),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (e) => {
        oe({ height: e.contentRect.height, width: e.contentRect.width });
      }),
      (t[0] = u))
    : (u = t[0]);
  let d = me(u),
    ce = re(Oe),
    le = re(Ae),
    f = re(h.activeTab$),
    p;
  t[1] === f ? (p = t[2]) : ((p = g(f)), (t[1] = f), (t[2] = p));
  let m = p,
    _ = !ce && !le,
    v = m == null && !_ ? 118 : 0,
    y,
    b;
  (t[3] !== _ || t[4] !== s || t[5] !== v || t[6] !== a
    ? ((y = () => {
        if (s != null)
          return (
            s.style.setProperty(we, `${_ ? 0 : 102}px`),
            s.style.setProperty(L, `${v}px`),
            R(a, v),
            () => {
              (s.style.removeProperty(we), s.style.removeProperty(L), R(a, 0));
            }
          );
      }),
      (b = [_, s, v, a]),
      (t[3] = _),
      (t[4] = s),
      (t[5] = v),
      (t[6] = a),
      (t[7] = y),
      (t[8] = b))
    : ((y = t[7]), (b = t[8])),
    (0, V.useLayoutEffect)(y, b));
  let x, S;
  if (
    (t[9] !== s || t[10] !== c
      ? ((x = () => {
          let e = ae.current;
          if (s == null || e == null) return;
          let t = () => {
            let t = s.getBoundingClientRect();
            Object.assign(e.style, {
              height: `${xe(t.height, c)}px`,
              left: `${xe(t.left, c)}px`,
              top: `${xe(t.top, c)}px`,
              width: `${xe(t.width, c)}px`,
            });
          };
          t();
          let n = new ResizeObserver(t);
          return (
            n.observe(s),
            window.addEventListener(`resize`, t),
            () => {
              (n.disconnect(), window.removeEventListener(`resize`, t));
            }
          );
        }),
        (S = [s, c]),
        (t[9] = s),
        (t[10] = c),
        (t[11] = x),
        (t[12] = S))
      : ((x = t[11]), (S = t[12])),
    (0, V.useLayoutEffect)(x, S),
    s == null)
  )
    return null;
  let C;
  t[13] === c ? (C = t[14]) : ((C = { zoom: c }), (t[13] = c), (t[14] = C));
  let ue = ie ?? `0px`,
    w;
  t[15] === ue ? (w = t[16]) : ((w = { bottom: ue }), (t[15] = ue), (t[16] = w));
  let T;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, H.jsx)(`div`, { "aria-hidden": !0, className: `h-toolbar-pane shrink-0` })),
      (t[17] = T))
    : (T = t[17]);
  let E;
  t[18] !== m ||
  t[19] !== f?.tabId ||
  t[20] !== n ||
  t[21] !== l ||
  t[22] !== le ||
  t[23] !== o ||
  t[24] !== _ ||
  t[25] !== s ||
  t[26] !== i ||
  t[27] !== a ||
  t[28] !== r ||
  t[29] !== c
    ? ((E =
        l == null
          ? null
          : (0, H.jsx)(te, {
              transformPagePoint: (e) => ({ x: e.x / c, y: e.y / c }),
              children: (0, H.jsx)(Ee, {
                value: {
                  activeBrowserTabId: m,
                  isExpanding: !1,
                  isInsideOverlay: !0,
                  onAttachmentAdded: () => {
                    a.get(h.activeTab$)?.tabId === f?.tabId &&
                      (a.get(Oe) || Me(a, { prefersReducedMotion: !0 }), j());
                  },
                  shouldAnimate: !1,
                },
                children: (0, H.jsx)(I, {
                  value: `expanded`,
                  children: (0, H.jsx)(Ue, {
                    containerSize: l,
                    forceExpanded: le,
                    isMinimized: _,
                    onMinimizedChange: (e) => {
                      e === a.get(Oe) && Me(a, { prefersReducedMotion: !0 });
                    },
                    title:
                      r ??
                      o.formatMessage({
                        id: `quickChat.mainConversation`,
                        defaultMessage: `Chat`,
                        description: `Fallback title for the task's main conversation in the floating chat`,
                      }),
                    renderTranscript: () => i?.(),
                    children: (e) => (0, H.jsx)(De, { value: s, children: n(e) }),
                  }),
                }),
              }),
            })),
      (t[18] = m),
      (t[19] = f?.tabId),
      (t[20] = n),
      (t[21] = l),
      (t[22] = le),
      (t[23] = o),
      (t[24] = _),
      (t[25] = s),
      (t[26] = i),
      (t[27] = a),
      (t[28] = r),
      (t[29] = c),
      (t[30] = E))
    : (E = t[30]);
  let D;
  t[31] !== d || t[32] !== E
    ? ((D = (0, H.jsx)(`div`, {
        ref: d,
        className: `relative min-h-0 flex-1 overflow-hidden`,
        children: E,
      })),
      (t[31] = d),
      (t[32] = E),
      (t[33] = D))
    : (D = t[33]);
  let O;
  t[34] !== D || t[35] !== w
    ? ((O = (0, H.jsxs)(ne.div, {
        className: `absolute inset-x-0 top-toolbar flex flex-col`,
        style: w,
        children: [T, D],
      })),
      (t[34] = D),
      (t[35] = w),
      (t[36] = O))
    : (O = t[36]);
  let k;
  t[37] !== O || t[38] !== C
    ? ((k = (0, H.jsx)(`div`, {
        ref: ae,
        className: `pointer-events-none fixed z-[41]`,
        style: C,
        children: O,
      })),
      (t[37] = O),
      (t[38] = C),
      (t[39] = k))
    : (k = t[39]);
  let A;
  return (
    t[40] !== s.ownerDocument.body || t[41] !== k
      ? ((A = (0, rt.createPortal)(k, s.ownerDocument.body)),
        (t[40] = s.ownerDocument.body),
        (t[41] = k),
        (t[42] = A))
      : (A = t[42]),
    A
  );
}
var nt,
  V,
  rt,
  H,
  it = e(() => {
    ((nt = k()),
      M(),
      oe(),
      (V = t(o(), 1)),
      (rt = t(N(), 1)),
      m(),
      x(),
      r(),
      f(),
      _(),
      d(),
      ke(),
      b(),
      et(),
      P(),
      F(),
      je(),
      Te(),
      (H = T()));
  });
export { it as n, tt as t };
//# sourceMappingURL=content-quick-chat-overlay-4f38c1f284d2.js.map
