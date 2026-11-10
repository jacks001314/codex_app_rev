import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AXt as r,
  Amn as i,
  DE as a,
  DLt as o,
  EE as s,
  F3t as c,
  HLt as l,
  N3t as u,
  O3t as d,
  OE as f,
  Qit as p,
  RWt as m,
  Rpn as h,
  Sln as g,
  TE as _,
  VLt as v,
  VT as y,
  WT as b,
  Zit as x,
  _E as S,
  _zt as C,
  a3t as w,
  aRt as T,
  bE as E,
  cLt as D,
  cRt as O,
  cY as ee,
  dW as te,
  fW as k,
  gE as ne,
  gLt as re,
  gRt as A,
  hRt as ie,
  hmn as j,
  i6t as M,
  iln as ae,
  kE as N,
  kXt as P,
  kmn as F,
  m6t as oe,
  mRt as se,
  nY as ce,
  nln as I,
  o3t as L,
  oRt as le,
  pln as R,
  pmn as z,
  rE as B,
  sLt as ue,
  uLt as de,
  vE as V,
  vLt as H,
  vzt as U,
  wE as W,
  wln as fe,
  xRt as pe,
  yE as me,
  yLt as he,
  yzt as ge,
  zpn as _e,
} from "./app-initial-f094ef01c64d.js";
import { Rh as G } from "./app-primary-4c40d73a1074.js";
import { r as ve, t as ye } from "./highlight-selectors-9d1b805d6cf4.js";
import { n as K, t as q } from "./scroll-to-match-9d10be663eba.js";
import { r as be } from "./thread-scroll-layout-4583603e4217.js";
import { n as J, r as xe } from "./thread-scroll-controller-context-value-6a9e93eb1505.js";
import {
  a as Se,
  i as Ce,
  n as we,
  o as Te,
  r as Ee,
  t as De,
} from "./thread-virtualizer-4f61d89b50be.js";
function Y(e) {
  let t = (0, Oe.c)(5),
    n = (0, ke.useRef)(null),
    r;
  t[0] === e
    ? (r = t[1])
    : ((r = (t) => {
        n.current ??= window.setTimeout(() => {
          ((n.current = null), t());
        }, e);
      }),
      (t[0] = e),
      (t[1] = r));
  let i = r,
    a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = () => {
        n.current != null && (window.clearTimeout(n.current), (n.current = null));
      }),
      (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  return (t[3] === i ? (s = t[4]) : ((s = { schedule: i, cancel: o }), (t[3] = i), (t[4] = s)), s);
}
var Oe,
  ke,
  Ae = e(() => {
    ((Oe = F()), (ke = t(i(), 1)));
  });
function X(e) {
  let t = (0, Me.c)(17),
    { containerRef: n, contextId: r } = e,
    i = c(y),
    o = c(b),
    s = i?.contextId === r ? i : null,
    l = s == null ? null : (o?.id ?? null),
    u = (0, Ne.useRef)(null),
    { schedule: d, cancel: p } = Y(Pe),
    m;
  t[0] !== s || t[1] !== l || t[2] !== n
    ? ((m = () => {
        let e = n.current;
        if (e == null) return;
        me(e, { includeShadowRoots: !1 });
        let t = u.current;
        if ((t != null && (a(t, !1), (u.current = null)), s == null)) return;
        let r = ye(s.matches),
          i = new Map();
        if (
          (e.querySelectorAll(`[data-content-search-unit-key]`).forEach((e) => {
            let t = e.dataset.contentSearchUnitKey;
            if (t == null) return;
            let n = r.get(t);
            n == null ||
              n.length === 0 ||
              _({
                target: e,
                query: s.query,
                maxMatches: n.length,
                includeShadowRoots: !1,
              }).matches.forEach((e, t) => {
                let r = n[t];
                r != null && (f({ element: e, matchId: r.id }), i.set(r.id, e));
              });
          }),
          l == null)
        )
          return;
        let o = i.get(l);
        o != null && (a(o, !0), (u.current = o));
      }),
      (t[0] = s),
      (t[1] = l),
      (t[2] = n),
      (t[3] = m))
    : (m = t[3]);
  let h = (0, Ne.useEffectEvent)(m),
    g;
  t[4] !== s?.runId || t[5] !== h || t[6] !== p || t[7] !== n || t[8] !== d
    ? ((g = () => {
        let e = n.current;
        if (e == null || (h(), s?.runId == null)) return;
        let t = new MutationObserver((e) => {
          N(e) &&
            d(() => {
              je(h, t);
            });
        });
        return (
          t.observe(e, { childList: !0, subtree: !0, characterData: !0 }),
          () => {
            (t.disconnect(), p());
          }
        );
      }),
      (t[4] = s?.runId),
      (t[5] = h),
      (t[6] = p),
      (t[7] = n),
      (t[8] = d),
      (t[9] = g))
    : (g = t[9]);
  let v = s?.runId,
    x;
  (t[10] !== l || t[11] !== p || t[12] !== n || t[13] !== r || t[14] !== d || t[15] !== v
    ? ((x = [v, l, p, n, r, d]),
      (t[10] = l),
      (t[11] = p),
      (t[12] = n),
      (t[13] = r),
      (t[14] = d),
      (t[15] = v),
      (t[16] = x))
    : (x = t[16]),
    (0, Ne.useEffect)(g, x));
}
function je(e, t) {
  try {
    e();
  } finally {
    t.takeRecords();
  }
}
var Me,
  Ne,
  Pe,
  Fe = e(() => {
    ((Me = F()), d(), (Ne = t(i(), 1)), s(), ve(), B(), Ae(), (Pe = 80));
  });
function Ie(e) {
  let t = (0, Ze.c)(167),
    {
      collapseEmptyRows: n,
      entries: r,
      RowComponent: i,
      onApiChange: a,
      onVisibleContentReady: o,
      className: s,
      gapPx: c,
      getBottomScrollPaddingPx: l,
      onLatestTurnHeightChange: u,
      preserveMeasuredTurnViewport: d,
      getPendingRestoreScrollDistanceFromBottomPx: f,
      restoreScrollDistanceFromBottomPx: m,
      initialRestoreState: g,
      latestTurnFooter: _,
      latestTurnFooterKey: v,
      onRestoreStateChange: y,
      onViewportChange: b,
      latestTurnSynchronousMeasurementKey: x,
      retainedTurnKeys: S,
    } = e,
    C = n !== void 0 && n,
    w = c === void 0 ? et : c,
    T = d !== void 0 && d,
    E = xe(),
    D = ge(),
    [O, ee] = (0, Z.useState)(g?.turnHeightsByKey ?? it),
    [k, ne] = (0, Z.useState)(null),
    re;
  t[0] !== C || t[1] !== r || t[2] !== w || t[3] !== l || t[4] !== g || t[5] !== E
    ? ((re = () => {
        let e = We(l);
        return ze(r, Ge(E.getLastScrollDistanceFromBottomPx(), e), w, C, g);
      }),
      (t[0] = C),
      (t[1] = r),
      (t[2] = w),
      (t[3] = l),
      (t[4] = g),
      (t[5] = E),
      (t[6] = re))
    : (re = t[6]);
  let [A, ie] = (0, Z.useState)(re),
    [j, M] = (0, Z.useState)(null),
    ae = (0, Z.useRef)(null),
    N = (0, Z.useRef)(null),
    P = (0, Z.useRef)(O),
    F = (0, Z.useRef)(A),
    oe;
  t[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((oe = new Map()), (t[7] = oe)) : (oe = t[7]);
  let se = (0, Z.useRef)(oe),
    ce;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((ce = new Map()), (t[8] = ce)) : (ce = t[8]);
  let I = (0, Z.useRef)(ce),
    L;
  t[9] === Symbol.for(`react.memo_cache_sentinel`) ? ((L = new Map()), (t[9] = L)) : (L = t[9]);
  let le = (0, Z.useRef)(L),
    R;
  t[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((R = new Map()), (t[10] = R)) : (R = t[10]);
  let z = (0, Z.useRef)(R),
    B = (0, Z.useRef)(null),
    ue = (0, Z.useRef)(null),
    de = (0, Z.useRef)(!1),
    V = (0, Z.useRef)(null),
    H;
  t[11] !== C || t[12] !== r || t[13] !== w || t[14] !== O
    ? ((H = De({ collapseEmptyRows: C, entries: r, gapPx: w, measuredHeightsByKey: O })),
      (t[11] = C),
      (t[12] = r),
      (t[13] = w),
      (t[14] = O),
      (t[15] = H))
    : (H = t[15]);
  let U = H,
    W = (0, Z.useRef)(U),
    fe = (0, Z.useRef)(U),
    pe = (0, Z.useRef)(U),
    me = (0, Z.useRef)(null),
    he;
  t[16] === O
    ? (he = t[17])
    : ((he = () => {
        O !== P.current && ee(P.current);
      }),
      (t[16] = O),
      (t[17] = he));
  let _e;
  (t[18] !== r || t[19] !== w || t[20] !== O
    ? ((_e = [r, w, O]), (t[18] = r), (t[19] = w), (t[20] = O), (t[21] = _e))
    : (_e = t[21]),
    (0, Z.useLayoutEffect)(he, _e));
  let G;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (e) => {
        ((N.current = e), ne(e));
      }),
      (t[22] = G))
    : (G = t[22]);
  let ve = p(G),
    ye;
  t[23] !== C || t[24] !== r || t[25] !== w || t[26] !== U
    ? ((ye = () => {
        if (fe.current !== U) {
          ((fe.current = U),
            (W.current = De({
              collapseEmptyRows: C,
              entries: r,
              gapPx: w,
              measuredHeightsByKey: P.current,
            })));
          let e = N.current;
          e != null && (e.style.height = `${W.current.totalHeightPx}px`);
        }
        return W.current;
      }),
      (t[23] = C),
      (t[24] = r),
      (t[25] = w),
      (t[26] = U),
      (t[27] = ye))
    : (ye = t[27]);
  let K = p(ye),
    q = A.renderedRange;
  if (j != null) {
    let e = Ee({ layout: U, turnKey: j.turnKey, viewportHeightPx: A.viewportHeightPx });
    e != null &&
      (q = Ce({
        distanceFromBottomPx: e,
        layout: U,
        overscanCount: nt,
        viewportHeightPx: A.viewportHeightPx,
      }));
  } else if (!Ue(A.turnKeys, U.turnKeys)) {
    let e = A.turnKeys[A.renderedRange.startIndex];
    e != null && (q = Se({ anchorKey: e, layout: U, previousRange: q }) ?? q);
  }
  let be;
  t[28] === m
    ? (be = t[29])
    : ((be = () => {
        B.current ?? m?.();
      }),
      (t[28] = m),
      (t[29] = be));
  let J = p(be),
    Te;
  t[30] !== r.length || t[31] !== o || t[32] !== J
    ? ((Te = () => {
        o == null ||
          de.current ||
          V.current != null ||
          N.current == null ||
          (r.length > 0 && I.current.size === 0) ||
          (V.current = window.requestAnimationFrame(() => {
            V.current = window.requestAnimationFrame(() => {
              ((V.current = null),
                !(de.current || N.current == null || (r.length > 0 && I.current.size === 0)) &&
                  ((de.current = !0), J(), o()));
            });
          }));
      }),
      (t[30] = r.length),
      (t[31] = o),
      (t[32] = J),
      (t[33] = Te))
    : (Te = t[33]);
  let Y = p(Te),
    Oe;
  t[34] !== u || t[35] !== J || t[36] !== E
    ? ((Oe = (e) => {
        (e.latestTurnHeightChange != null && u?.(e.latestTurnHeightChange),
          e.restoreScrollDistanceFromBottom
            ? J()
            : e.scrollDistanceFromBottomPx != null &&
              E.compensateScrollToDistanceFromBottomPx(e.scrollDistanceFromBottomPx));
      }),
      (t[34] = u),
      (t[35] = J),
      (t[36] = E),
      (t[37] = Oe))
    : (Oe = t[37]);
  let ke = p(Oe),
    Ae;
  t[38] === K
    ? (Ae = t[39])
    : ((Ae = (e, t) => {
        if (B.current != null) return;
        let n = F.current,
          r = Be({ current: n, distanceFromBottomPx: e, layout: K(), viewportHeightPx: t });
        r !== n &&
          ((F.current = r),
          !(
            r.renderedRange.startIndex === n.renderedRange.startIndex &&
            r.renderedRange.endIndex === n.renderedRange.endIndex &&
            Ue(r.turnKeys, n.turnKeys)
          ) && ie(r));
      }),
      (t[38] = K),
      (t[39] = Ae));
  let X = p(Ae),
    je;
  t[40] !== K || t[41] !== b
    ? ((je = (e, t) => {
        if (b == null) return;
        let n = K(),
          r = Math.max(0, Math.min(n.totalHeightPx, n.totalHeightPx - e)),
          i = Math.max(0, r - t);
        b({ viewportEndPx: r, viewportStartPx: i });
      }),
      (t[40] = K),
      (t[41] = b),
      (t[42] = je))
    : (je = t[42]);
  let Me = p(je),
    Ne;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ne = (e) => {
        queueMicrotask(() => {
          (ae.current === e && (e.complete(), (ae.current = null)), M((t) => (t === e ? null : t)));
        });
      }),
      (t[43] = Ne))
    : (Ne = t[43]);
  let Pe = p(Ne),
    Fe;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fe = (e, t, n) => (
        ae.current?.complete(),
        new Promise((r) => {
          let i = { align: n?.align ?? `center`, complete: r, getTargetElement: t, turnKey: e };
          ((ae.current = i), ie(F.current), M(i));
        })
      )),
      (t[44] = Fe))
    : (Fe = t[44]);
  let Ie = p(Fe),
    Re;
  t[45] === K
    ? (Re = t[46])
    : ((Re = (e) => {
        let t = K(),
          n = t.turnIndexByKey.get(e);
        if (n == null) return null;
        let r = t.topOffsetsPx[n],
          i = t.heightsPx[n];
        return r == null || i == null ? null : { endPx: r + i, startPx: r };
      }),
      (t[45] = K),
      (t[46] = Re));
  let Ve = p(Re),
    rt;
  t[47] !== u || t[48] !== E || t[49] !== D
    ? ((rt = () => {
        let e = 0,
          t = null;
        for (let [n, r] of z.current)
          ((e += r),
            (t == null || t.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING) &&
              (t = n));
        t != null &&
          u?.({
            heightDeltaPx: null,
            heightPx: null,
            bottomViewportOverflowPx: Je({
              scrollElement: E.getScrollElement(),
              turnElement: t,
              windowZoom: D,
            }),
            turnElement: t,
            followContentHeightPx: e,
          });
      }),
      (t[47] = u),
      (t[48] = E),
      (t[49] = D),
      (t[50] = rt))
    : (rt = t[50]);
  let ot = p(rt),
    st;
  t[51] !== C ||
  t[52] !== ke ||
  t[53] !== r ||
  t[54] !== w ||
  t[55] !== l ||
  t[56] !== K ||
  t[57] !== f ||
  t[58] !== T ||
  t[59] !== E ||
  t[60] !== D
    ? ((st = (e, t) => {
        let n = t === void 0 || t,
          i = K(),
          a = B.current,
          o = P.current,
          s = o,
          c = 0,
          u = !1,
          d = null,
          p = 0,
          m = !1,
          h = E.getLastScrollDistanceFromBottomPx(),
          g = We(l),
          _ = Ge(h, g),
          v = T ? null : (f?.() ?? null),
          y = a == null ? _ : F.current.distanceFromBottomPx;
        for (let [t, n] of e) {
          let { element: e, heightPx: a } = n,
            l = I.current.get(t);
          if (l !== e) continue;
          let h = Math.max(+!C, a),
            g = o[t];
          if (g === h) continue;
          (s === o && (s = { ...o }), (s[t] = h));
          let _ = g == null ? 0 : h - g,
            v = i.turnIndexByKey.get(t);
          if (v == null) continue;
          let b = v === i.turnKeys.length - 1;
          b && ((u = !0), (c += _), (d = l));
          let x = Math.max(r[v]?.minHeightPx ?? 0, h),
            S = x - (i.heightsPx[v] ?? x);
          m ||= C && (x === 0 || i.heightsPx[v] === 0);
          let w = i.bottomOffsetsPx[v] ?? 0;
          S !== 0 && w <= y && (T || (f != null && !b)) && (p += S);
        }
        if (s === o) return !1;
        let b = De({ collapseEmptyRows: C, entries: r, gapPx: w, measuredHeightsByKey: s });
        if (m)
          for (let [e, t] of b.gapsBeforePx.entries()) {
            let n = t - (i.gapsBeforePx[e] ?? 0);
            n !== 0 &&
              (i.bottomOffsetsPx[e] ?? 0) + (i.heightsPx[e] ?? 0) <= y &&
              (T || (f != null && e !== i.turnKeys.length - 1)) &&
              (p += n);
          }
        let x = T && Ke(h, g),
          S = a?.restoreScrollDistanceFromBottom || v != null,
          O = null;
        S ||
          (O = x
            ? 0
            : p === 0
              ? (a?.scrollDistanceFromBottomPx ?? null)
              : (a?.scrollDistanceFromBottomPx ?? h) + p);
        let te = F.current.distanceFromBottomPx;
        S ? (te = v ?? te) : O != null && (te = Ge(O, g));
        let k = Be({
            current: F.current,
            distanceFromBottomPx: te,
            layout: b,
            viewportHeightPx: F.current.viewportHeightPx,
          }),
          ne = a?.latestTurnHeightChange,
          re = d ?? ne?.turnElement ?? null,
          A = {
            latestTurnHeightChange:
              u || ne != null
                ? {
                    heightDeltaPx: (ne?.heightDeltaPx ?? 0) + c,
                    heightPx: b.heightsPx.at(-1) ?? null,
                    bottomViewportOverflowPx: Je({
                      scrollElement: E.getScrollElement(),
                      turnElement: re,
                      windowZoom: D,
                    }),
                    turnElement: re,
                    followContentHeightPx: null,
                  }
                : null,
            restoreScrollDistanceFromBottom: S,
            scrollDistanceFromBottomPx: O,
            turnHeightsByKey: s,
          },
          j = N.current;
        if (
          u &&
          e.size === 1 &&
          a == null &&
          k === F.current &&
          b.gapsBeforePx.at(-1) === i.gapsBeforePx.at(-1) &&
          j != null
        )
          return (
            (P.current = s),
            (W.current = b),
            (pe.current = b),
            (j.style.height = `${b.totalHeightPx}px`),
            ke(A),
            !0
          );
        me.current ??= i;
        let M = () => {
          ((P.current = s), (W.current = b), ee(s), k !== F.current && ((F.current = k), ie(k)));
        };
        return (
          (B.current = A),
          T &&
            b.totalHeightPx !== i.totalHeightPx &&
            p === 0 &&
            !x &&
            !S &&
            E.preserveScrollPositionForNextLayout(),
          n ? (0, Qe.flushSync)(M) : M(),
          !0
        );
      }),
      (t[51] = C),
      (t[52] = ke),
      (t[53] = r),
      (t[54] = w),
      (t[55] = l),
      (t[56] = K),
      (t[57] = f),
      (t[58] = T),
      (t[59] = E),
      (t[60] = D),
      (t[61] = st))
    : (st = t[61]);
  let Q = p(st),
    ct;
  t[62] !== Q || t[63] !== ot
    ? ((ct = () => {
        if (ue.current != null) return ue.current;
        let e = new ResizeObserver((e) => {
          let t = new Map(),
            n = !1;
          for (let r of e) {
            let e = se.current.get(r.target);
            if (e == null) continue;
            let { height: i } = te(r);
            bb464: switch (e.kind) {
              case `turn`:
                t.set(e.turnKey, { element: r.target, heightPx: i });
                break bb464;
              case `latest-turn-follow-content`:
                (z.current.set(e.element, i), (n = !0));
            }
          }
          (Q(t), n && ot());
        });
        return ((ue.current = e), e);
      }),
      (t[62] = Q),
      (t[63] = ot),
      (t[64] = ct))
    : (ct = t[64]);
  let lt = p(ct),
    ut;
  t[65] !== lt || t[66] !== Y
    ? ((ut = (e, t) => {
        if (t == null) return;
        (se.current.set(t, { kind: `turn`, turnKey: e }),
          I.current.set(e, t),
          le.current.set(e, t));
        let n = lt();
        return (
          n.observe(t),
          Y(),
          () => {
            (n.unobserve(t),
              se.current.delete(t),
              le.current.get(e) === t && le.current.delete(e),
              I.current.get(e) === t && I.current.delete(e));
          }
        );
      }),
      (t[65] = lt),
      (t[66] = Y),
      (t[67] = ut))
    : (ut = t[67]);
  let dt = p(ut),
    ft;
  t[68] !== Q || t[69] !== r
    ? ((ft = () => {
        let e = r.at(-1)?.turnKey;
        if (e == null) return;
        let t = I.current.get(e);
        if (t == null) return;
        let n = t.offsetHeight;
        n <= 0 || Q(new Map([[e, { element: t, heightPx: n }]]), !1);
      }),
      (t[68] = Q),
      (t[69] = r),
      (t[70] = ft))
    : (ft = t[70]);
  let pt = p(ft),
    mt;
  t[71] === lt
    ? (mt = t[72])
    : ((mt = (e) => {
        if (e == null) return;
        (se.current.set(e, { element: e, kind: `latest-turn-follow-content` }),
          z.current.set(e, 0));
        let t = lt();
        return (
          t.observe(e),
          () => {
            (t.unobserve(e), se.current.delete(e), z.current.delete(e));
          }
        );
      }),
      (t[71] = lt),
      (t[72] = mt));
  let ht = p(mt),
    gt;
  (t[73] === Q
    ? (gt = t[74])
    : ((gt = () => {
        let e = le.current;
        if (e.size === 0) return;
        le.current = new Map();
        let t = new Map();
        for (let [n, r] of e) {
          if (I.current.get(n) !== r) continue;
          let e = r.offsetHeight;
          e > 0 && t.set(n, { element: r, heightPx: e });
        }
        if (t.size > 0 && Q(t, !1))
          for (let [t, n] of e) I.current.get(t) === n && le.current.set(t, n);
      }),
      (t[73] = Q),
      (t[74] = gt)),
    (0, Z.useLayoutEffect)(gt));
  let _t, vt;
  (t[75] !== x || t[76] !== pt
    ? ((_t = () => {
        x != null && pt();
      }),
      (vt = [x, pt]),
      (t[75] = x),
      (t[76] = pt),
      (t[77] = _t),
      (t[78] = vt))
    : ((_t = t[77]), (vt = t[78])),
    (0, Z.useLayoutEffect)(_t, vt));
  let yt, bt;
  (t[79] !== ke || t[80] !== O
    ? ((yt = () => {
        let e = B.current;
        e == null || e.turnHeightsByKey !== O || ((B.current = null), ke(e));
      }),
      (bt = [ke, O]),
      (t[79] = ke),
      (t[80] = O),
      (t[81] = yt),
      (t[82] = bt))
    : ((yt = t[81]), (bt = t[82])),
    (0, Z.useLayoutEffect)(yt, bt));
  let $, xt;
  (t[83] !== Ve || t[84] !== a || t[85] !== Ie
    ? (($ = () => {
        if (a != null)
          return (
            a({ getEntryGeometry: Ve, scrollToKey: Ie }),
            () => {
              a(null);
            }
          );
      }),
      (xt = [Ve, a, Ie]),
      (t[83] = Ve),
      (t[84] = a),
      (t[85] = Ie),
      (t[86] = $),
      (t[87] = xt))
    : (($ = t[86]), (xt = t[87])),
    (0, Z.useEffect)($, xt));
  let St;
  t[88] === Y
    ? (St = t[89])
    : ((St = () => (
        Y(),
        () => {
          V.current != null && (window.cancelAnimationFrame(V.current), (V.current = null));
        }
      )),
      (t[88] = Y),
      (t[89] = St));
  let Ct;
  (t[90] !== r.length || t[91] !== o || t[92] !== Y || t[93] !== k
    ? ((Ct = [r.length, o, Y, k]),
      (t[90] = r.length),
      (t[91] = o),
      (t[92] = Y),
      (t[93] = k),
      (t[94] = Ct))
    : (Ct = t[94]),
    (0, Z.useEffect)(St, Ct));
  let wt, Tt;
  (t[95] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((wt = () => {
        let e = se.current,
          t = I.current,
          n = z.current;
        return () => {
          (ue.current?.disconnect(),
            (ue.current = null),
            e.clear(),
            t.clear(),
            le.current.clear(),
            n.clear(),
            (B.current = null),
            ae.current?.complete(),
            (ae.current = null));
        };
      }),
      (Tt = []),
      (t[95] = wt),
      (t[96] = Tt))
    : ((wt = t[95]), (Tt = t[96])),
    (0, Z.useEffect)(wt, Tt));
  let Et, Dt;
  (t[97] === y
    ? ((Et = t[98]), (Dt = t[99]))
    : ((Et = () => {
        if (y != null)
          return () => {
            y(qe(P.current, F.current.turnKeys, F.current.renderedRange));
          };
      }),
      (Dt = [y]),
      (t[97] = y),
      (t[98] = Et),
      (t[99] = Dt)),
    (0, Z.useLayoutEffect)(Et, Dt));
  let { addScrollListener: Ot, addUserScrollListener: kt, getScrollElement: At } = E,
    jt;
  t[100] !== Ot ||
  t[101] !== kt ||
  t[102] !== l ||
  t[103] !== At ||
  t[104] !== Me ||
  t[105] !== J ||
  t[106] !== X
    ? ((jt = () => {
        let e = At();
        if (e == null) return;
        let t = () => e.clientHeight || F.current.viewportHeightPx || tt,
          n = Ot((e) => {
            let n = Ge(e, We(l));
            X(n, t());
          }),
          r = kt((e) => {
            Me(Ge(e, We(l)), t());
          }),
          i = new ResizeObserver((e) => {
            let t = e[0];
            if (t == null) return;
            let { height: n } = te(t);
            (X(F.current.distanceFromBottomPx, n), J());
          });
        return (
          i.observe(e),
          () => {
            (n(), r(), i.disconnect());
          }
        );
      }),
      (t[100] = Ot),
      (t[101] = kt),
      (t[102] = l),
      (t[103] = At),
      (t[104] = Me),
      (t[105] = J),
      (t[106] = X),
      (t[107] = jt))
    : (jt = t[107]);
  let Mt;
  (t[108] !== Ot ||
  t[109] !== kt ||
  t[110] !== l ||
  t[111] !== At ||
  t[112] !== Me ||
  t[113] !== J ||
  t[114] !== k ||
  t[115] !== X
    ? ((Mt = [Ot, kt, l, At, Me, J, k, X]),
      (t[108] = Ot),
      (t[109] = kt),
      (t[110] = l),
      (t[111] = At),
      (t[112] = Me),
      (t[113] = J),
      (t[114] = k),
      (t[115] = X),
      (t[116] = Mt))
    : (Mt = t[116]),
    (0, Z.useLayoutEffect)(jt, Mt));
  let Nt, Pt;
  (t[117] !== Q ||
  t[118] !== l ||
  t[119] !== U ||
  t[120] !== j ||
  t[121] !== E ||
  t[122] !== Pe ||
  t[123] !== X ||
  t[124] !== D
    ? ((Nt = () => {
        if (j == null) return;
        let e = E.getScrollElement();
        if (e == null) return;
        let t = new Map();
        for (let [e, n] of I.current) {
          let r = n.offsetHeight;
          r > 0 && t.set(e, { element: n, heightPx: r });
        }
        if (Q(t, !1) || B.current != null) return;
        let n = I.current.get(j.turnKey),
          r = n == null ? null : (j.getTargetElement?.(n) ?? n),
          i =
            n == null || r == null
              ? Ye({
                  align: j.align,
                  layout: U,
                  turnKey: j.turnKey,
                  viewportHeightPx: e.clientHeight,
                })
              : Xe({
                  align: j.align,
                  layout: U,
                  targetElement: r,
                  turnElement: n,
                  turnKey: j.turnKey,
                  viewportHeightPx: e.clientHeight,
                  windowZoom: D,
                });
        if (i == null) {
          Pe(j);
          return;
        }
        (E.scrollToDistanceFromBottomPx(i + We(l), `instant`, `user`), X(i, e.clientHeight), Pe(j));
      }),
      (Pt = [Q, U, j, E, Pe, l, X, D]),
      (t[117] = Q),
      (t[118] = l),
      (t[119] = U),
      (t[120] = j),
      (t[121] = E),
      (t[122] = Pe),
      (t[123] = X),
      (t[124] = D),
      (t[125] = Nt),
      (t[126] = Pt))
    : ((Nt = t[125]), (Pt = t[126])),
    (0, Z.useLayoutEffect)(Nt, Pt));
  let Ft;
  t[127] !== l ||
  t[128] !== K ||
  t[129] !== f ||
  t[130] !== j ||
  t[131] !== T ||
  t[132] !== E ||
  t[133] !== X
    ? ((Ft = () => {
        if (B.current != null) return;
        let e = pe.current,
          t = K(),
          n = me.current ?? t;
        if (((me.current = null), (pe.current = t), !T || j != null || e === n)) return;
        let r = We(l),
          i = E.getLastScrollDistanceFromBottomPx(),
          a = Ge(i, r);
        if ((f?.() ?? null) != null || Ke(i, r)) return;
        let o = He({
          distanceFromBottomPx: a,
          layout: e,
          measuredHeightsByKey: P.current,
          nextLayout: n,
          viewportHeightPx: F.current.viewportHeightPx,
        });
        if (o == null) return;
        let s = we({ anchorKey: o, distanceFromBottomPx: a, nextLayout: n, previousLayout: e });
        s == null ||
          s === a ||
          (X(s, F.current.viewportHeightPx), E.compensateScrollToDistanceFromBottomPx(s + r));
      }),
      (t[127] = l),
      (t[128] = K),
      (t[129] = f),
      (t[130] = j),
      (t[131] = T),
      (t[132] = E),
      (t[133] = X),
      (t[134] = Ft))
    : (Ft = t[134]);
  let It;
  (t[135] !== l ||
  t[136] !== K ||
  t[137] !== f ||
  t[138] !== U ||
  t[139] !== j ||
  t[140] !== T ||
  t[141] !== E ||
  t[142] !== X
    ? ((It = [l, K, f, U, j, T, E, X]),
      (t[135] = l),
      (t[136] = K),
      (t[137] = f),
      (t[138] = U),
      (t[139] = j),
      (t[140] = T),
      (t[141] = E),
      (t[142] = X),
      (t[143] = It))
    : (It = t[143]),
    (0, Z.useLayoutEffect)(Ft, It));
  let Lt;
  t[144] !== j || t[145] !== J || t[146] !== X
    ? ((Lt = () => {
        j ?? (X(F.current.distanceFromBottomPx, F.current.viewportHeightPx), J());
      }),
      (t[144] = j),
      (t[145] = J),
      (t[146] = X),
      (t[147] = Lt))
    : (Lt = t[147]);
  let Rt;
  (t[148] !== r.length || t[149] !== j || t[150] !== J || t[151] !== X
    ? ((Rt = [r.length, j, J, X]),
      (t[148] = r.length),
      (t[149] = j),
      (t[150] = J),
      (t[151] = X),
      (t[152] = Rt))
    : (Rt = t[152]),
    (0, Z.useLayoutEffect)(Lt, Rt));
  let zt = v ?? r.at(-1)?.turnKey,
    Bt = r
      .slice(q.startIndex, q.endIndex)
      .map((e, t) => ({ entry: e, turnIndex: q.startIndex + t }));
  for (let e of new Set(S)) {
    let t = U.turnIndexByKey.get(e);
    if (t == null || (t >= q.startIndex && t < q.endIndex)) continue;
    let n = r[t];
    n != null && Bt.push({ entry: n, turnIndex: t });
  }
  Bt.sort(Le);
  let Vt;
  t[153] === s ? (Vt = t[154]) : ((Vt = h(`relative shrink-0`, s)), (t[153] = s), (t[154] = Vt));
  let Ht = `${U.totalHeightPx}px`,
    Ut;
  t[155] === Ht ? (Ut = t[156]) : ((Ut = { height: Ht }), (t[155] = Ht), (t[156] = Ut));
  let Wt = `${U.topOffsetsPx[q.startIndex] ?? 0}px`,
    Gt;
  t[157] === Wt ? (Gt = t[158]) : ((Gt = { marginTop: Wt }), (t[157] = Wt), (t[158] = Gt));
  let Kt = Bt.map((e) => {
      let { entry: t, turnIndex: n } = e;
      return (0, $e.jsx)(
        at,
        {
          entry: t,
          gapBeforePx: n === q.startIndex ? 0 : (U.gapsBeforePx[n] ?? 0),
          retainedTopPx: n < q.startIndex || n >= q.endIndex ? U.topOffsetsPx[n] : void 0,
          latestTurnFollowContentRef: n === r.length - 1 && u != null ? ht : void 0,
          latestTurnFooter: t.turnKey === zt ? _ : void 0,
          RowComponent: i,
          constrainedHeightPx:
            n !== r.length - 1 && j?.turnKey !== t.turnKey && O[t.turnKey] == null
              ? U.heightsPx[n]
              : void 0,
          observeTurnElement: dt,
        },
        t.turnKey,
      );
    }),
    qt;
  t[159] !== Gt || t[160] !== Kt
    ? ((qt = (0, $e.jsx)(`div`, { className: `flex flex-col`, style: Gt, children: Kt })),
      (t[159] = Gt),
      (t[160] = Kt),
      (t[161] = qt))
    : (qt = t[161]);
  let Jt;
  return (
    t[162] !== ve || t[163] !== Vt || t[164] !== Ut || t[165] !== qt
      ? ((Jt = (0, $e.jsx)(`div`, { ref: ve, className: Vt, style: Ut, children: qt })),
        (t[162] = ve),
        (t[163] = Vt),
        (t[164] = Ut),
        (t[165] = qt),
        (t[166] = Jt))
      : (Jt = t[166]),
    Jt
  );
}
function Le(e, t) {
  return e.turnIndex - t.turnIndex;
}
function Re(e) {
  let t = (0, Ze.c)(24),
    {
      entry: n,
      gapBeforePx: r,
      latestTurnFollowContentRef: i,
      latestTurnFooter: a,
      RowComponent: o,
      constrainedHeightPx: s,
      retainedTopPx: c,
      observeTurnElement: l,
    } = e,
    { turnKey: u } = n,
    d;
  t[0] !== l || t[1] !== u
    ? ((d = (e) => l(u, e)), (t[0] = l), (t[1] = u), (t[2] = d))
    : (d = t[2]);
  let f = p(d),
    m = c != null && `absolute inset-x-0`,
    g = s != null && `overflow-hidden`,
    _;
  t[3] !== m || t[4] !== g ? ((_ = h(m, g)), (t[3] = m), (t[4] = g), (t[5] = _)) : (_ = t[5]);
  let v = c == null ? r : 0,
    y;
  t[6] !== s || t[7] !== n.minHeightPx || t[8] !== c || t[9] !== v
    ? ((y = { height: s, marginTop: v, minHeight: n.minHeightPx, top: c }),
      (t[6] = s),
      (t[7] = n.minHeightPx),
      (t[8] = c),
      (t[9] = v),
      (t[10] = y))
    : (y = t[10]);
  let b;
  t[11] !== o || t[12] !== n || t[13] !== i || t[14] !== a
    ? ((b = (0, $e.jsx)(o, { entry: n, latestTurnFooter: a, latestTurnFollowContentRef: i })),
      (t[11] = o),
      (t[12] = n),
      (t[13] = i),
      (t[14] = a),
      (t[15] = b))
    : (b = t[15]);
  let x;
  t[16] !== f || t[17] !== b || t[18] !== u
    ? ((x = (0, $e.jsx)(`div`, {
        ref: f,
        className: `[&_[data-virtualized-turn-content]]:[content-visibility:visible]`,
        "data-turn-key": u,
        children: b,
      })),
      (t[16] = f),
      (t[17] = b),
      (t[18] = u),
      (t[19] = x))
    : (x = t[19]);
  let S;
  return (
    t[20] !== _ || t[21] !== y || t[22] !== x
      ? ((S = (0, $e.jsx)(`div`, { className: _, style: y, children: x })),
        (t[20] = _),
        (t[21] = y),
        (t[22] = x),
        (t[23] = S))
      : (S = t[23]),
    S
  );
}
function ze(e, t, n, r, i) {
  let a = De({
      collapseEmptyRows: r,
      entries: e,
      gapPx: n,
      measuredHeightsByKey: i?.turnHeightsByKey ?? it,
    }),
    o = tt,
    s = Math.min(t, a.totalHeightPx),
    c = Ce({ distanceFromBottomPx: s, layout: a, overscanCount: nt, viewportHeightPx: o });
  return {
    distanceFromBottomPx: s,
    renderedRange:
      (i?.renderedWindow == null
        ? null
        : Se({
            anchorKey: i.renderedWindow.anchorKey,
            layout: a,
            previousRange: {
              startIndex: 0,
              endIndex: Math.min(i.renderedWindow.count, c.endIndex - c.startIndex),
            },
          })) ?? c,
    turnKeys: a.turnKeys,
    viewportHeightPx: o,
  };
}
function Be({ current: e, distanceFromBottomPx: t, layout: n, viewportHeightPx: r }) {
  let i = Math.min(t, n.totalHeightPx),
    a = Ce({ distanceFromBottomPx: i, layout: n, overscanCount: nt, viewportHeightPx: r }),
    o = Ve(e.renderedRange, a) ? e.renderedRange : a;
  return e.distanceFromBottomPx === i &&
    e.viewportHeightPx === r &&
    e.renderedRange.startIndex === o.startIndex &&
    e.renderedRange.endIndex === o.endIndex &&
    Ue(e.turnKeys, n.turnKeys)
    ? e
    : { distanceFromBottomPx: i, renderedRange: o, turnKeys: n.turnKeys, viewportHeightPx: r };
}
function Ve(e, t) {
  return e.startIndex <= t.startIndex && e.endIndex >= t.endIndex;
}
function He({
  distanceFromBottomPx: e,
  layout: t,
  measuredHeightsByKey: n,
  nextLayout: r,
  viewportHeightPx: i,
}) {
  let a = Ce({ distanceFromBottomPx: e, layout: t, overscanCount: 0, viewportHeightPx: i });
  for (let e = a.startIndex; e < a.endIndex; e += 1) {
    let i = t.turnKeys[e];
    if (
      i != null &&
      !t.gapKeys.has(i) &&
      (!t.collapseEmptyRows || (t.heightsPx[e] ?? 0) > 0) &&
      n[i] != null &&
      r.turnIndexByKey.has(i)
    )
      return i;
  }
  return null;
}
function Ue(e, t) {
  return e === t || (e.length === t.length && e.every((e, n) => e === t[n]));
}
function We(e) {
  return Math.max(0, e?.() ?? 0);
}
function Ge(e, t) {
  return Math.max(0, e - t);
}
function Ke(e, t) {
  return e <= (t > 0 ? 0 : 24);
}
function qe(e, t, n) {
  let r = {};
  for (let n of t) {
    let t = e[n];
    t != null && (r[n] = t);
  }
  let i = t[n.startIndex];
  return Object.keys(r).length === 0 || i == null
    ? null
    : { renderedWindow: { anchorKey: i, count: n.endIndex - n.startIndex }, turnHeightsByKey: r };
}
function Je({ scrollElement: e, turnElement: t, windowZoom: n }) {
  return e == null || t == null
    ? 0
    : U(t.getBoundingClientRect().bottom - e.getBoundingClientRect().bottom, n);
}
function Ye({ align: e, layout: t, turnKey: n, viewportHeightPx: r }) {
  if (e === `center`) return Ee({ layout: t, turnKey: n, viewportHeightPx: r });
  let i = t.turnIndexByKey.get(n);
  return i == null ? null : Math.max(0, (t.bottomOffsetsPx[i] ?? 0) + (t.heightsPx[i] ?? 0) - rt);
}
function Xe({
  align: e,
  layout: t,
  targetElement: n,
  turnElement: r,
  turnKey: i,
  windowZoom: a,
  viewportHeightPx: o,
}) {
  let s = t.turnIndexByKey.get(i);
  if (s == null) return null;
  let c = r.getBoundingClientRect(),
    l = n.getBoundingClientRect(),
    u = U(l.top - c.top, a),
    d = U(l.height, a),
    f = (t.bottomOffsetsPx[s] ?? 0) + (t.heightsPx[s] ?? 0) - u;
  return e === `top` ? Math.max(0, f - rt) : Math.max(0, f - d / 2 - o / 2);
}
var Ze,
  Z,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot = e(() => {
    ((Ze = F()),
      _e(),
      (Z = t(i(), 1)),
      (Qe = t(z(), 1)),
      C(),
      k(),
      be(),
      J(),
      x(),
      Te(),
      ($e = j()),
      (et = 12),
      (tt = 800),
      (nt = 2),
      (rt = 10),
      (it = {}),
      (at = (0, Z.memo)(Re)));
  });
function st(e) {
  let t = (e - 736) / 2;
  return t < 180 ? `overlay` : t < 400 ? `shift` : `gutter`;
}
function Q({ displayMode: e, isPinned: t, isPopoverOpen: n }) {
  let r = t && e !== `overlay`,
    i = null;
  return (
    r ? (i = `inline`) : e === `overlay` && n && (i = `popover`),
    {
      displayMode: e,
      shouldHideInlineImmediately: e === `overlay` && n,
      shouldShow: r,
      visibleSurface: i,
    }
  );
}
function ct({ displayMode: e, isPinned: t }) {
  return t && e === `shift` ? -316 / 2 : 0;
}
var lt = e(() => {
    G();
  }),
  ut,
  dt,
  ft,
  pt = e(() => {
    (d(),
      H(),
      L(),
      pe(),
      ce(),
      lt(),
      (ut = { displayMode: `overlay`, isPopoverOpen: !1 }),
      (dt = oe(w, ut)),
      (ft = M(A, (e, { get: t }) => {
        if (t(ee)) return !1;
        let n = re(e === !0 ? t(o) : t(he, e), e),
          r = t(dt);
        return (
          Q({
            displayMode: r.displayMode,
            isPinned: n,
            isPopoverOpen: r.isPopoverOpen || (typeof e != `boolean` && n),
          }).visibleSurface != null
        );
      })));
  });
function mt(e) {
  let t = (0, bt.c)(13),
    n = c(D),
    r = c(de),
    i = (0, $.useContext)(le),
    a = g(0),
    o = i?.mainContentTargetWidth ?? a,
    s;
  (t[0] === e
    ? (s = t[1])
    : ((s = (t) => {
        vt(e, t);
      }),
      (t[0] = e),
      (t[1] = s)),
    fe(o, `change`, s));
  let l;
  t[2] !== o || t[3] !== e
    ? ((l = () => {
        vt(e, o.get());
      }),
      (t[2] = o),
      (t[3] = e),
      (t[4] = l))
    : (l = t[4]);
  let u;
  (t[5] !== n || t[6] !== r || t[7] !== o || t[8] !== e
    ? ((u = [n, r, o, e]), (t[5] = n), (t[6] = r), (t[7] = o), (t[8] = e), (t[9] = u))
    : (u = t[9]),
    (0, $.useLayoutEffect)(l, u));
  let d, f;
  (t[10] === e
    ? ((d = t[11]), (f = t[12]))
    : ((d = () => () => {
        e.set(dt, ht);
      }),
      (f = [e]),
      (t[10] = e),
      (t[11] = d),
      (t[12] = f)),
    (0, $.useLayoutEffect)(d, f));
}
function ht(e) {
  return e.isPopoverOpen ? { ...e, isPopoverOpen: !1 } : e;
}
function gt(e) {
  let t = (0, bt.c)(55),
    { contentShiftResetKey: i, isEnabled: a, pinStateKey: s } = e === void 0 ? {} : e,
    d = a === void 0 || a,
    f = s === void 0 || s,
    p = n(w),
    m = ae(),
    h = (0, $.useId)(),
    _ = c(f === !0 ? o : null),
    v = u(f === !0 ? null : he, f !== !0 && f),
    y = re(f === !0 ? _ : v, f),
    b = c(ue),
    x = c(l),
    S = c(D),
    C = c(ee),
    T = c(de),
    E = c(dt),
    O = d && y,
    te = d && (E.isPopoverOpen || (typeof f != `boolean` && y)),
    k = c(ie),
    ne = (0, $.useContext)(le),
    A = g(0),
    j = ne?.mainContentTargetWidth ?? A,
    M = g(_t({ isPinned: O, mainContentTargetWidth: j.get() })),
    N = (0, $.useRef)(null),
    P;
  t[0] === M ? (P = t[1]) : ((P = M.get()), (t[0] = M), (t[1] = P));
  let F = (0, $.useRef)(P),
    oe = (0, $.useRef)(i),
    se = (0, $.useRef)(b),
    ce = (0, $.useRef)(x),
    I = Q({ displayMode: E.displayMode, isPinned: O, isPopoverOpen: te }),
    L = I.shouldShow && !C,
    R = g(L ? 316 : 0),
    z;
  (t[2] !== p || t[3] !== h
    ? ((z = (e) => {
        r(p, h, e);
      }),
      (t[2] = p),
      (t[3] = h),
      (t[4] = z))
    : (z = t[4]),
    fe(R, `change`, z));
  let B, V;
  (t[5] !== p || t[6] !== R || t[7] !== h
    ? ((B = () => (
        r(p, h, R.get()),
        () => {
          r(p, h, null);
        }
      )),
      (V = [p, R, h]),
      (t[5] = p),
      (t[6] = R),
      (t[7] = h),
      (t[8] = B),
      (t[9] = V))
    : ((B = t[8]), (V = t[9])),
    (0, $.useLayoutEffect)(B, V));
  let H, U;
  (t[10] !== L || t[11] !== k || t[12] !== R
    ? ((H = () => {
        let e = L ? 316 : 0;
        if (R.get() === e) return;
        let t = yt(R, e, k);
        return () => t?.stop();
      }),
      (U = [L, k, R]),
      (t[10] = L),
      (t[11] = k),
      (t[12] = R),
      (t[13] = H),
      (t[14] = U))
    : ((H = t[13]), (U = t[14])),
    (0, $.useEffect)(H, U));
  let W;
  t[15] !== M ||
  t[16] !== i ||
  t[17] !== oe ||
  t[18] !== x ||
  t[19] !== O ||
  t[20] !== j ||
  t[21] !== b ||
  t[22] !== m
    ? ((W = () => {
        let e = se.current !== b,
          t = ce.current !== x;
        if (oe.current === i && !e && !t) return;
        ((oe.current = i), (se.current = b), (ce.current = x));
        let n = _t({ isPinned: O, mainContentTargetWidth: j.get() });
        if (((F.current = n), N.current?.stop(), e)) {
          m(() => M.set(n));
          return;
        }
        M.jump(n);
      }),
      (t[15] = M),
      (t[16] = i),
      (t[17] = oe),
      (t[18] = x),
      (t[19] = O),
      (t[20] = j),
      (t[21] = b),
      (t[22] = m),
      (t[23] = W))
    : (W = t[23]);
  let pe;
  (t[24] !== M ||
  t[25] !== i ||
  t[26] !== x ||
  t[27] !== O ||
  t[28] !== j ||
  t[29] !== b ||
  t[30] !== m
    ? ((pe = [M, i, x, O, j, b, m]),
      (t[24] = M),
      (t[25] = i),
      (t[26] = x),
      (t[27] = O),
      (t[28] = j),
      (t[29] = b),
      (t[30] = m),
      (t[31] = pe))
    : (pe = t[31]),
    (0, $.useLayoutEffect)(W, pe));
  let me;
  (t[32] !== M || t[33] !== O || t[34] !== k
    ? ((me = (e) => {
        let t = _t({ isPinned: O, mainContentTargetWidth: e });
        F.current !== t && ((F.current = t), N.current?.stop(), (N.current = yt(M, t, k)));
      }),
      (t[32] = M),
      (t[33] = O),
      (t[34] = k),
      (t[35] = me))
    : (me = t[35]),
    fe(j, `change`, me));
  let ge;
  t[36] !== M || t[37] !== O || t[38] !== j || t[39] !== k
    ? ((ge = () => {
        let e = _t({ isPinned: O, mainContentTargetWidth: j.get() });
        F.current !== e && ((F.current = e), N.current?.stop(), (N.current = yt(M, e, k)));
      }),
      (t[36] = M),
      (t[37] = O),
      (t[38] = j),
      (t[39] = k),
      (t[40] = ge))
    : (ge = t[40]);
  let _e;
  (t[41] !== M || t[42] !== S || t[43] !== T || t[44] !== O || t[45] !== j || t[46] !== k
    ? ((_e = [M, O, S, T, j, k]),
      (t[41] = M),
      (t[42] = S),
      (t[43] = T),
      (t[44] = O),
      (t[45] = j),
      (t[46] = k),
      (t[47] = _e))
    : (_e = t[47]),
    (0, $.useEffect)(ge, _e));
  let G, ve;
  (t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = () => () => {
        N.current?.stop();
      }),
      (ve = []),
      (t[48] = G),
      (t[49] = ve))
    : ((G = t[48]), (ve = t[49])),
    (0, $.useEffect)(G, ve));
  let ye = I.shouldHideInlineImmediately || C,
    K = C ? null : I.visibleSurface,
    q;
  return (
    t[50] !== M || t[51] !== L || t[52] !== ye || t[53] !== K
      ? ((q = {
          contentShift: M,
          shouldHideInlineImmediately: ye,
          shouldShow: L,
          visibleSurface: K,
        }),
        (t[50] = M),
        (t[51] = L),
        (t[52] = ye),
        (t[53] = K),
        (t[54] = q))
      : (q = t[54]),
    q
  );
}
function _t({ isPinned: e, mainContentTargetWidth: t }) {
  return ct({ displayMode: st(t), isPinned: e });
}
function vt(e, t) {
  let n = st(t);
  e.set(dt, (e) => {
    let t = n === `overlay` && e.isPopoverOpen;
    return e.displayMode === n && e.isPopoverOpen === t ? e : { displayMode: n, isPopoverOpen: t };
  });
}
function yt(e, t, n) {
  return n ? (e.set(t), null) : R(e, t, T);
}
var bt,
  $,
  xt = e(() => {
    ((bt = F()), I(), d(), ($ = t(i(), 1)), O(), v(), H(), P(), L(), se(), ce(), G(), lt(), pt());
  });
function St({
  contextId: e,
  getTurns: t,
  hydratePersistedMatch: n,
  revealUnrenderedMatches: r = !1,
  searchPersisted: i,
  scrollAdapter: a,
}) {
  return {
    domain: `conversation`,
    contextId: e,
    async search(e, n) {
      let r = wt(e, t());
      if (i == null) return r;
      let a = await i(e, n);
      return a == null ? r : Ct(r, a);
    },
    async ensureVisible(t, i) {
      if (
        t.domain !== `conversation` ||
        t.contextId !== e ||
        (t.turnCursor != null && n != null && (!(await n(t, i)) || i?.signal?.aborted))
      )
        return;
      let o = t.turnCursor != null,
        s = a.getTurnContainer(t.turnKey),
        c = E(t),
        l = r && s != null && W({ container: s, matchId: c, includeShadowRoots: !1 }) == null;
      if (s == null || o || l) {
        if (
          i?.signal?.aborted ||
          (i?.signal == null
            ? await a.scrollToTurn(t.turnKey)
            : await a.scrollToTurn(t.turnKey, { signal: i.signal }),
          i?.signal?.aborted)
        )
          return;
        s = a.getTurnContainer(t.turnKey);
      }
      s != null &&
        (await K({ container: s, matchId: c, includeShadowRoots: !1, signal: i?.signal }));
    },
  };
}
function Ct(e, t) {
  let n = new Map(e.matches.map((e) => [e.id, e])),
    r = (0, Tt.default)([...t.matches.map((e) => n.get(e.id) ?? e), ...e.matches], `id`).map(
      (e, t) => ({
        ...e,
        ordinal: t + 1,
      }),
    );
  return {
    ...e,
    matches: r,
    totalMatches: Math.max(r.length, e.totalMatches, t.totalMatches),
    isCapped: e.isCapped || t.isCapped,
  };
}
function wt(e, t) {
  let n = e.query.trim();
  if (n.length === 0)
    return {
      domain: e.domain,
      contextId: e.contextId,
      query: n,
      matches: [],
      totalMatches: 0,
      isCapped: !1,
    };
  let r = [],
    i = 0,
    a = !1;
  for (let o of t)
    for (let t of o.units) {
      let s = t.text;
      if (s.length === 0) continue;
      let { offsets: c, totalMatches: l, isCapped: u } = S(s, n, Et - r.length);
      ((i += l), u && (a = !0));
      for (let [n, { start: i, end: a }] of c.entries())
        r.push({
          id: `conversation:${o.turnKey}:${t.unitId}:${n}`,
          ordinal: r.length + 1,
          location: {
            domain: `conversation`,
            contextId: e.contextId,
            turnKey: o.turnKey,
            unitId: t.unitId,
            matchIndex: n,
          },
          snippet: ne(s, i, a),
        });
    }
  return {
    domain: e.domain,
    contextId: e.contextId,
    query: n,
    matches: r,
    totalMatches: i,
    isCapped: a,
  };
}
var Tt,
  Et,
  Dt = e(() => {
    ((Tt = t(m(), 1)), s(), q(), V(), (Et = 250));
  });
export {
  mt as a,
  dt as c,
  Fe as d,
  X as f,
  gt as i,
  Ie as l,
  Dt as n,
  pt as o,
  xt as r,
  ft as s,
  St as t,
  ot as u,
};
//# sourceMappingURL=conversation-source-3c0ae9358599.js.map
