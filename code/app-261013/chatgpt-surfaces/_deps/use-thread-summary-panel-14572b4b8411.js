import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $R as t,
  Cot as n,
  Ixt as r,
  KCt as i,
  Pxt as a,
  QR as o,
  Vxt as s,
  awt as c,
  fSt as l,
  fwt as u,
  hwt as d,
  iwt as f,
  lDt as p,
  lot as m,
  mwt as h,
  nSt as g,
  oDt as _,
  pot as v,
  pwt as y,
  qCt as ee,
  sDt as te,
  vzt as ne,
  wot as b,
  yzt as x,
  zxt as re,
} from "./app-shared-bbfeca5e5737.js";
import {
  BCr as ie,
  C3n as ae,
  Cwr as S,
  HOn as oe,
  I3n as C,
  J3n as w,
  Jbn as T,
  K3n as se,
  L3n as ce,
  O3n as le,
  P3n as ue,
  RCr as de,
  S3n as fe,
  U3n as pe,
  VOn as E,
  W3n as me,
  exn as he,
  gwr as ge,
} from "./app-initial-5851df3f6cb1.js";
import { i as D, n as O, r as k, t as _e } from "./thread-summary-panel-layout-488b931a4b80.js";
var ve, A, ye;
function j() {
  return (j = e(() => {
    (a(),
      C(),
      b(),
      S(),
      T(),
      D(),
      (ve = { displayMode: `overlay`, isPopoverOpen: !1 }),
      (A = l(n, ve)),
      (ye = g(ge, (e, { get: t }) => {
        if (t(he)) return !1;
        let n = ue(e === !0 ? t(pe) : t(ce, e), e),
          r = t(A);
        return (
          _e({
            displayMode: r.displayMode,
            isPinned: n,
            isPopoverOpen: r.isPopoverOpen || (typeof e != `boolean` && n),
          }).visibleSurface != null
        );
      })));
  }))();
}
function M(e, t) {
  let n = (0, we.c)(15),
    r = t !== void 0 && t,
    i = s(ae),
    a = s(le),
    o = (0, F.useContext)(se),
    c = y(0),
    l = o?.mainContentTargetWidth ?? c,
    u;
  n[0] !== r || n[1] !== l || n[2] !== e
    ? ((u = () => {
        Se(e, r ? `overlay` : k(l.get()));
      }),
      (n[0] = r),
      (n[1] = l),
      (n[2] = e),
      (n[3] = u))
    : (u = n[3]);
  let f = u,
    p;
  (n[4] === f
    ? (p = n[5])
    : ((p = () => {
        te.update(f);
      }),
      (n[4] = f),
      (n[5] = p)),
    d(l, `change`, p));
  let m;
  n[6] === f ? (m = n[7]) : ((m = () => (f(), () => _(f))), (n[6] = f), (n[7] = m));
  let h;
  (n[8] !== i || n[9] !== a || n[10] !== f
    ? ((h = [i, a, f]), (n[8] = i), (n[9] = a), (n[10] = f), (n[11] = h))
    : (h = n[11]),
    (0, F.useLayoutEffect)(m, h));
  let g, v;
  (n[12] === e
    ? ((g = n[13]), (v = n[14]))
    : ((g = () => () => {
        e.set(A, N);
      }),
      (v = [e]),
      (n[12] = e),
      (n[13] = g),
      (n[14] = v)),
    (0, F.useLayoutEffect)(g, v));
}
function N(e) {
  return e.isPopoverOpen ? { ...e, isPopoverOpen: !1 } : e;
}
function P(e) {
  let i = (0, we.c)(92),
    {
      contentShiftResetKey: a,
      controlledIsOpen: o,
      floatingPanelWidth: c,
      getCurrentPinStateKey: l,
      isEnabled: u,
      pinStateKey: f,
    } = e === void 0 ? {} : e,
    p = u === void 0 || u,
    m = f === void 0 || f,
    h = r(n),
    g = ee(),
    _ = (0, F.useId)(),
    te = s(o == null && m === !0 ? pe : null),
    ne = re(o == null && m !== !0 ? ce : null, m !== !0 && m),
    b = o ?? ue(m === !0 ? te : ne, m),
    x = s(fe),
    S = s(ie),
    C = s(ae),
    w = s(he),
    T = s(le),
    de = s(A),
    E = p && b,
    me = c ?? 300,
    ge = p && c == null && (o ?? (de.isPopoverOpen || (typeof m != `boolean` && b))),
    D = s(t),
    O = s(oe),
    ve = (0, F.useContext)(se),
    ye = y(0),
    j = ve?.mainContentTargetWidth ?? ye,
    M = y(xe({ isSummaryPanelPinned: E, floatingPanelWidth: c, mainContentTargetWidth: j.get() })),
    N;
  i[0] === j ? (N = i[1]) : ((N = (e) => j.on(`change`, e)), (i[0] = j), (i[1] = N));
  let P = { subscribe: N, getSnapshot: () => k(j.get(), me) },
    Se = (0, F.useSyncExternalStore)(P.subscribe, P.getSnapshot, P.getSnapshot),
    I = (0, F.useRef)(null),
    L;
  i[2] === M ? (L = i[3]) : ((L = M.get()), (i[2] = M), (i[3] = L));
  let R = (0, F.useRef)(L),
    z = (0, F.useRef)(!1),
    B = (0, F.useRef)(a),
    Te = (0, F.useRef)(x),
    Ee = (0, F.useRef)(S),
    De = _e({ displayMode: Se, isPinned: E && c == null, isPopoverOpen: ge }),
    V = De.shouldShow && !w,
    H = V || (c != null && Se !== `overlay`) ? 308 + me - 300 : 0,
    U = y(H),
    W;
  (i[4] !== O || i[5] !== h || i[6] !== _
    ? ((W = (e) => {
        O && v(h, _, Math.abs(e) * 2);
      }),
      (i[4] = O),
      (i[5] = h),
      (i[6] = _),
      (i[7] = W))
    : (W = i[7]),
    d(M, `change`, W));
  let G;
  (i[8] !== O || i[9] !== h || i[10] !== _
    ? ((G = (e) => {
        O || v(h, _, e);
      }),
      (i[8] = O),
      (i[9] = h),
      (i[10] = _),
      (i[11] = G))
    : (G = i[11]),
    d(U, `change`, G));
  let K, q;
  (i[12] !== M || i[13] !== O || i[14] !== h || i[15] !== U || i[16] !== _
    ? ((K = () => (
        v(h, _, O ? Math.abs(M.get()) * 2 : U.get()),
        () => {
          v(h, _, null);
        }
      )),
      (q = [M, O, h, U, _]),
      (i[12] = M),
      (i[13] = O),
      (i[14] = h),
      (i[15] = U),
      (i[16] = _),
      (i[17] = K),
      (i[18] = q))
    : ((K = i[17]), (q = i[18])),
    (0, F.useLayoutEffect)(K, q));
  let J, Y;
  (i[19] !== D || i[20] !== U || i[21] !== H
    ? ((Y = () => {
        let e = H;
        if (U.get() === e) return;
        let t = Ce(U, e, D);
        return () => t?.stop();
      }),
      (J = [H, D, U]),
      (i[19] = D),
      (i[20] = U),
      (i[21] = H),
      (i[22] = J),
      (i[23] = Y))
    : ((J = i[22]), (Y = i[23])),
    (0, F.useEffect)(Y, J));
  let X;
  i[24] !== M ||
  i[25] !== a ||
  i[26] !== B ||
  i[27] !== o ||
  i[28] !== c ||
  i[29] !== l ||
  i[30] !== S ||
  i[31] !== p ||
  i[32] !== j ||
  i[33] !== m ||
  i[34] !== x ||
  i[35] !== h ||
  i[36] !== g
    ? ((X = () => {
        let e = Te.current !== x,
          t = Ee.current !== S;
        if (!z.current && B.current === a && !e && !t) return;
        ((z.current = !1), (B.current = a), (Te.current = x), (Ee.current = S));
        let n = be(h, p, l?.() ?? m, j.get(), c, o);
        if (((R.current = n), I.current?.stop(), e)) {
          g(() => M.set(n));
          return;
        }
        M.jump(n);
      }),
      (i[24] = M),
      (i[25] = a),
      (i[26] = B),
      (i[27] = o),
      (i[28] = c),
      (i[29] = l),
      (i[30] = S),
      (i[31] = p),
      (i[32] = j),
      (i[33] = m),
      (i[34] = x),
      (i[35] = h),
      (i[36] = g),
      (i[37] = X))
    : (X = i[37]);
  let Z;
  (i[38] !== M ||
  i[39] !== a ||
  i[40] !== o ||
  i[41] !== c ||
  i[42] !== l ||
  i[43] !== S ||
  i[44] !== p ||
  i[45] !== E ||
  i[46] !== j ||
  i[47] !== m ||
  i[48] !== x ||
  i[49] !== h ||
  i[50] !== g
    ? ((Z = [M, a, o, c, l, S, p, E, j, m, x, h, g]),
      (i[38] = M),
      (i[39] = a),
      (i[40] = o),
      (i[41] = c),
      (i[42] = l),
      (i[43] = S),
      (i[44] = p),
      (i[45] = E),
      (i[46] = j),
      (i[47] = m),
      (i[48] = x),
      (i[49] = h),
      (i[50] = g),
      (i[51] = Z))
    : (Z = i[51]),
    (0, F.useLayoutEffect)(X, Z));
  let Oe;
  (i[52] !== M ||
  i[53] !== o ||
  i[54] !== c ||
  i[55] !== l ||
  i[56] !== p ||
  i[57] !== j ||
  i[58] !== m ||
  i[59] !== h ||
  i[60] !== D
    ? ((Oe = (e) => {
        if (z.current) return;
        let t = be(h, p, l?.() ?? m, e, c, o);
        if (R.current !== t) {
          if (((R.current = t), I.current?.stop(), e === 0 || j.getPrevious() === 0)) {
            M.jump(t);
            return;
          }
          I.current = Ce(M, t, D);
        }
      }),
      (i[52] = M),
      (i[53] = o),
      (i[54] = c),
      (i[55] = l),
      (i[56] = p),
      (i[57] = j),
      (i[58] = m),
      (i[59] = h),
      (i[60] = D),
      (i[61] = Oe))
    : (Oe = i[61]),
    d(j, `change`, Oe));
  let Q;
  i[62] !== M ||
  i[63] !== o ||
  i[64] !== c ||
  i[65] !== l ||
  i[66] !== p ||
  i[67] !== j ||
  i[68] !== m ||
  i[69] !== h ||
  i[70] !== D
    ? ((Q = () => {
        let e = be(h, p, l?.() ?? m, j.get(), c, o);
        R.current !== e && ((R.current = e), I.current?.stop(), (I.current = Ce(M, e, D)));
      }),
      (i[62] = M),
      (i[63] = o),
      (i[64] = c),
      (i[65] = l),
      (i[66] = p),
      (i[67] = j),
      (i[68] = m),
      (i[69] = h),
      (i[70] = D),
      (i[71] = Q))
    : (Q = i[71]);
  let ke;
  (i[72] !== M ||
  i[73] !== o ||
  i[74] !== c ||
  i[75] !== l ||
  i[76] !== p ||
  i[77] !== C ||
  i[78] !== T ||
  i[79] !== E ||
  i[80] !== j ||
  i[81] !== m ||
  i[82] !== h ||
  i[83] !== D
    ? ((ke = [M, o, c, l, p, E, C, T, j, m, h, D]),
      (i[72] = M),
      (i[73] = o),
      (i[74] = c),
      (i[75] = l),
      (i[76] = p),
      (i[77] = C),
      (i[78] = T),
      (i[79] = E),
      (i[80] = j),
      (i[81] = m),
      (i[82] = h),
      (i[83] = D),
      (i[84] = ke))
    : (ke = i[84]),
    (0, F.useEffect)(Q, ke));
  let Ae, je;
  (i[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = () => () => {
        ((z.current = !0), I.current?.stop());
      }),
      (je = []),
      (i[85] = Ae),
      (i[86] = je))
    : ((Ae = i[85]), (je = i[86])),
    (0, F.useLayoutEffect)(Ae, je));
  let Me = De.shouldHideInlineImmediately || w,
    Ne = w ? null : De.visibleSurface,
    $;
  return (
    i[87] !== M || i[88] !== V || i[89] !== Me || i[90] !== Ne
      ? (($ = { contentShift: M, shouldHideInlineImmediately: Me, shouldShow: V, visibleSurface: Ne }),
        (i[87] = M),
        (i[88] = V),
        (i[89] = Me),
        (i[90] = Ne),
        (i[91] = $))
      : ($ = i[91]),
    $
  );
}
function be(e, t, n, r, i, a) {
  return xe({
    isSummaryPanelPinned: t && (a ?? ue(n === !0 ? e.get(pe) : e.get(ce, n), n)),
    floatingPanelWidth: i,
    mainContentTargetWidth: r,
  });
}
function xe({ isSummaryPanelPinned: e, floatingPanelWidth: t, mainContentTargetWidth: n }) {
  let r = k(n, t);
  return O(
    t != null && r === `overlay`
      ? { displayMode: k(n), isPinned: e }
      : { displayMode: r, isPinned: t != null || e, panelWidth: t },
  );
}
function Se(e, t) {
  e.set(A, (e) => {
    let n = t === `overlay` && e.isPopoverOpen;
    return e.displayMode === t && e.isPopoverOpen === n ? e : { displayMode: t, isPopoverOpen: n };
  });
}
function Ce(e, t, n) {
  return n ? (e.set(t), null) : f(e, t, me);
}
var we, F;
function I() {
  return (I = e(() => {
    ((we = ne()), c(), p(), i(), u(), h(), a(), (F = x()), w(), de(), C(), E(), m(), b(), o(), T(), D(), j());
  }))();
}
export { ye as a, j as i, P as n, A as o, M as r, I as t };
//# sourceMappingURL=use-thread-summary-panel-14572b4b8411.js.map
