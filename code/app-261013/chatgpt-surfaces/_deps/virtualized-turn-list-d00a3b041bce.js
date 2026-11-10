import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cz as t,
  IDt as n,
  Ixt as r,
  Pxt as i,
  Tz as a,
  UD as o,
  Vxt as s,
  _Mt as c,
  _xt as l,
  bz as u,
  gMt as d,
  jDt as f,
  vzt as p,
  wxt as m,
  wz as h,
  xMt as g,
  xz as _,
  yMt as v,
  yzt as y,
  zxt as b,
} from "./app-shared-bbfeca5e5737.js";
import { Cwr as ee, GMr as x, gwr as S, tNr as C } from "./app-initial-5851df3f6cb1.js";
import { n as w, r as te } from "./thread-scroll-controller-context-value-f766898c7055.js";
import { n as T, t as E } from "./conversation-navigation-state-ff699adf115c.js";
import { a as ne, i as re, n as ie, o as ae, r as oe, t as se } from "./thread-virtualizer-e1964ca5c039.js";
function ce(e) {
  let t = (0, le.c)(15),
    { onNavigate: r } = e,
    i = (0, D.useRef)(null),
    a = (0, D.useRef)(null),
    [o, s] = (0, D.useState)(!1),
    c,
    l;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = () => {
        let e = i.current;
        if (e == null) return;
        let t = e.ownerDocument,
          n = e.closest(`[data-thread-scroll-footer]`) ?? e.parentElement,
          r = () => {
            let n = t.activeElement;
            n != null &&
              e.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING &&
              (e.tabIndex = 0);
          },
          o = (t) => {
            t.key === `Tab` && !t.shiftKey && !t.defaultPrevented && (e.tabIndex = -1);
          };
        return (
          t.addEventListener(`keydown`, o),
          n?.addEventListener(`focusin`, r),
          () => {
            (t.removeEventListener(`keydown`, o), n?.removeEventListener(`focusin`, r), a.current?.abort());
          }
        );
      }),
      (l = []),
      (t[0] = c),
      (t[1] = l))
    : ((c = t[0]), (l = t[1])),
    (0, D.useEffect)(c, l));
  let u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = () => a.current?.abort()), (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] === r
    ? (d = t[4])
    : ((d = (e) => {
        a.current?.abort();
        let t = e.currentTarget;
        t.tabIndex = -1;
        let n = new AbortController();
        ((a.current = n),
          s(!1),
          r(n.signal).then((e) => {
            !n.signal.aborted &&
              t.isConnected &&
              t.ownerDocument.activeElement === t &&
              (e?.isConnected ? e.focus({ preventScroll: !0 }) : s(!0));
          }));
      }),
      (t[3] = r),
      (t[4] = d));
  let f;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, O.jsx)(n, {
        id: `codex.conversation.latestResponse`,
        defaultMessage: `Latest response`,
        description: `Invisible heading before the composer; focusing it moves to the newest assistant response`,
      })),
      (t[5] = f))
    : (f = t[5]);
  let p;
  t[6] === d
    ? (p = t[7])
    : ((p = (0, O.jsx)(`h4`, {
        ref: i,
        className: `sr-only m-0 select-none`,
        tabIndex: 0,
        onBlur: u,
        onFocus: d,
        children: f,
      })),
      (t[6] = d),
      (t[7] = p));
  let m;
  t[8] === o
    ? (m = t[9])
    : ((m = o
        ? (0, O.jsx)(n, {
            id: `codex.conversation.latestResponseUnavailable`,
            defaultMessage: `No response available`,
            description: `Screen-reader announcement when navigation to the latest assistant response finds no response in the conversation`,
          })
        : null),
      (t[8] = o),
      (t[9] = m));
  let h;
  t[10] === m
    ? (h = t[11])
    : ((h = (0, O.jsx)(`span`, { className: `sr-only m-0`, role: `status`, children: m })),
      (t[10] = m),
      (t[11] = h));
  let g;
  return (
    t[12] !== p || t[13] !== h
      ? ((g = (0, O.jsxs)(O.Fragment, { children: [p, h] })), (t[12] = p), (t[13] = h), (t[14] = g))
      : (g = t[14]),
    g
  );
}
var le, D, O;
function k() {
  return (k = e(() => {
    ((le = p()), (D = y()), f(), (O = g()));
  }))();
}
function A(e) {
  let t = (0, j.c)(18),
    { ready: n, onNavigate: i } = e,
    a = r(S),
    o = s(x),
    c = m(),
    l = c.state?.sidebarArea === `scheduled`,
    u;
  t[0] !== o || t[1] !== c.key
    ? ((u = { locationKey: c.key, accountId: o }), (t[0] = o), (t[1] = c.key), (t[2] = u))
    : (u = t[2]);
  let d = b(T, u),
    f = (0, ue.useEffectEvent)(i),
    p;
  t[3] !== o || t[4] !== d || t[5] !== c.key || t[6] !== f || t[7] !== n || t[8] !== l || t[9] !== a
    ? ((p = () => {
        if (!l || !n || d) return;
        let e = new AbortController();
        return (
          f(e.signal).then(() => {
            e.signal.aborted || a.set(T, { locationKey: c.key, accountId: o }, !0);
          }),
          () => e.abort()
        );
      }),
      (t[3] = o),
      (t[4] = d),
      (t[5] = c.key),
      (t[6] = f),
      (t[7] = n),
      (t[8] = l),
      (t[9] = a),
      (t[10] = p))
    : (p = t[10]);
  let h;
  return (
    t[11] !== o || t[12] !== d || t[13] !== c.key || t[14] !== n || t[15] !== l || t[16] !== a
      ? ((h = [o, d, c.key, n, l, a]),
        (t[11] = o),
        (t[12] = d),
        (t[13] = c.key),
        (t[14] = n),
        (t[15] = l),
        (t[16] = a),
        (t[17] = h))
      : (h = t[17]),
    (0, ue.useEffect)(p, h),
    null
  );
}
var j, ue;
function de() {
  return (de = e(() => {
    ((j = p()), i(), (ue = y()), l(), C(), E(), ee());
  }))();
}
function M(e) {
  let t = (0, Te.c)(235),
    {
      collapseEmptyRows: n,
      entries: r,
      RowComponent: i,
      onApiChange: s,
      onVisibleContentReady: c,
      className: l,
      gapPx: u,
      getBottomScrollPaddingPx: f,
      onLatestTurnHeightChange: p,
      preserveMeasuredTurnViewport: m,
      preserveUnderfilledViewport: g,
      getPendingRestoreScrollDistanceFromBottomPx: v,
      restoreScrollDistanceFromBottomPx: y,
      initialRestoreState: b,
      latestTurnFooter: ee,
      latestTurnFooterKey: x,
      onRestoreStateChange: S,
      onViewportChange: C,
      onHistoryRetentionBoundaryChange: w,
      latestTurnSynchronousMeasurementKey: T,
      layoutReadyTurnKey: E,
      onTurnLayoutReady: ae,
      synchronousMeasurementTurnKey: ce,
      retainedTurnKeys: le,
    } = e,
    D = n !== void 0 && n,
    O = u === void 0 ? Oe : u,
    k = m !== void 0 && m,
    A = g !== void 0 && g,
    [j, ue] = (0, I.useState)(null),
    de;
  t[0] !== j || t[1] !== A || t[2] !== r
    ? ((de = r.map((e) => ({
        turnKey: e.turnKey,
        gapBeforePx: e.gapBeforePx,
        estimatedHeightPx: e.estimatedHeightPx,
        minHeightPx:
          A && j?.turnKey === e.turnKey && e.turnKey === r.at(-1)?.turnKey
            ? Math.max(e.minHeightPx ?? 0, j.viewportHeightPx - j.heightOutsideTurnPx)
            : e.minHeightPx,
        type: e.type,
      }))),
      (t[0] = j),
      (t[1] = A),
      (t[2] = r),
      (t[3] = de))
    : (de = t[3]);
  let M = de,
    N = te(),
    P = a(),
    L = P * (globalThis.devicePixelRatio ?? 1),
    Fe = b?.turnHeightsByKey ?? Ne,
    [R, Ie] = (0, I.useState)(Fe),
    [z, Le] = (0, I.useState)(null),
    Re;
  t[4] !== D || t[5] !== M || t[6] !== O || t[7] !== f || t[8] !== b || t[9] !== L || t[10] !== N
    ? ((Re = () => {
        let e = F(f);
        return me(M, ye(N.getLastScrollDistanceFromBottomPx(), e), O, D, b, L);
      }),
      (t[4] = D),
      (t[5] = M),
      (t[6] = O),
      (t[7] = f),
      (t[8] = b),
      (t[9] = L),
      (t[10] = N),
      (t[11] = Re))
    : (Re = t[11]);
  let [ze, Be] = (0, I.useState)(Re),
    [B] = (0, I.useState)(pe),
    V = (0, I.useSyncExternalStore)(B.subscribe, B.getSnapshot, B.getSnapshot),
    Ve = (0, I.useRef)(null),
    H = (0, I.useRef)(R),
    U = (0, I.useRef)(ze),
    He = (0, I.useRef)(null),
    Ue;
  t[12] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ue = new Map()), (t[12] = Ue)) : (Ue = t[12]);
  let We = (0, I.useRef)(Ue),
    Ge;
  t[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ge = new Map()), (t[13] = Ge)) : (Ge = t[13]);
  let W = (0, I.useRef)(Ge),
    Ke;
  t[14] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ke = new WeakSet()), (t[14] = Ke)) : (Ke = t[14]);
  let qe = (0, I.useRef)(Ke),
    Je;
  t[15] === Symbol.for(`react.memo_cache_sentinel`) ? ((Je = new Map()), (t[15] = Je)) : (Je = t[15]);
  let Ye = (0, I.useRef)(Je),
    Xe;
  t[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((Xe = new Map()), (t[16] = Xe)) : (Xe = t[16]);
  let Ze = (0, I.useRef)(Xe),
    G = (0, I.useRef)(null),
    Qe = (0, I.useRef)(null),
    $e = (0, I.useRef)(0),
    et = (0, I.useRef)(null),
    [tt, nt] = (0, I.useState)(null),
    rt = (0, I.useRef)(!1),
    it = (0, I.useRef)(null),
    at;
  t[17] !== D || t[18] !== M || t[19] !== O || t[20] !== L || t[21] !== R
    ? ((at = se({ collapseEmptyRows: D, entries: M, gapPx: O, measuredHeightsByKey: R, pixelScale: L })),
      (t[17] = D),
      (t[18] = M),
      (t[19] = O),
      (t[20] = L),
      (t[21] = R),
      (t[22] = at))
    : (at = t[22]);
  let K = at,
    ot = (0, I.useRef)(K),
    st = (0, I.useRef)(K),
    ct = (0, I.useRef)(K),
    lt = (0, I.useRef)(null),
    ut;
  t[23] === R
    ? (ut = t[24])
    : ((ut = () => {
        R !== H.current && Ie(H.current);
      }),
      (t[23] = R),
      (t[24] = ut));
  let dt;
  (t[25] !== D || t[26] !== M || t[27] !== O || t[28] !== L || t[29] !== R
    ? ((dt = [D, M, O, L, R]), (t[25] = D), (t[26] = M), (t[27] = O), (t[28] = L), (t[29] = R), (t[30] = dt))
    : (dt = t[30]),
    (0, I.useLayoutEffect)(ut, dt));
  let ft;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = (e) => {
        ((Ve.current = e), Le(e));
      }),
      (t[31] = ft))
    : (ft = t[31]);
  let pt = _(ft),
    mt;
  t[32] !== D || t[33] !== M || t[34] !== O || t[35] !== K || t[36] !== L || t[37] !== R
    ? ((mt = () => {
        if (st.current !== K) {
          ((st.current = K),
            (ot.current =
              R === H.current
                ? K
                : se({
                    collapseEmptyRows: D,
                    entries: M,
                    gapPx: O,
                    measuredHeightsByKey: H.current,
                    pixelScale: L,
                  })));
          let e = Ve.current;
          e != null && (e.style.height = `${ot.current.totalHeightPx}px`);
        }
        return ot.current;
      }),
      (t[32] = D),
      (t[33] = M),
      (t[34] = O),
      (t[35] = K),
      (t[36] = L),
      (t[37] = R),
      (t[38] = mt))
    : (mt = t[38]);
  let q = _(mt),
    ht;
  t[39] !== f || t[40] !== N || t[41] !== P
    ? ((ht = (e) => {
        let t = N.getScrollElement(),
          n = Ve.current,
          r = t?.firstElementChild;
        return n == null || r == null
          ? e - F(f)
          : e - h(r.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, P);
      }),
      (t[39] = f),
      (t[40] = N),
      (t[41] = P),
      (t[42] = ht))
    : (ht = t[42]);
  let gt = _(ht),
    J = ze.renderedRange;
  if (V != null) {
    let e = oe({ layout: K, turnKey: V.turnKey, viewportHeightPx: ze.viewportHeightPx });
    e != null &&
      (J = re({
        distanceFromBottomPx: e,
        layout: K,
        overscanCount: je,
        viewportHeightPx: ze.viewportHeightPx,
      }));
  } else if (!_e(ze.turnKeys, K.turnKeys)) {
    let e = ze.turnKeys[ze.renderedRange.startIndex];
    e != null && (J = ne({ anchorKey: e, layout: K, previousRange: J }) ?? J);
  }
  let _t;
  t[43] === y
    ? (_t = t[44])
    : ((_t = () => {
        G.current ?? y?.();
      }),
      (t[43] = y),
      (t[44] = _t));
  let Y = _(_t),
    vt;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((vt = () => {
        it.current != null && (window.cancelAnimationFrame(it.current), (it.current = null));
      }),
      (t[45] = vt))
    : (vt = t[45]);
  let X = _(vt),
    yt;
  t[46] !== M || t[47] !== c || t[48] !== Y
    ? ((yt = () => {
        c == null ||
          rt.current ||
          it.current != null ||
          Ve.current == null ||
          (M.length > 0 && W.current.size === 0) ||
          (it.current = window.requestAnimationFrame(() => {
            it.current = window.requestAnimationFrame(() => {
              ((it.current = null),
                !(rt.current || Ve.current == null || (M.length > 0 && W.current.size === 0)) &&
                  ((rt.current = !0), Y(), c()));
            });
          }));
      }),
      (t[46] = M),
      (t[47] = c),
      (t[48] = Y),
      (t[49] = yt))
    : (yt = t[49]);
  let bt = _(yt),
    xt = r.slice(J.startIndex, J.endIndex).map((e, t) => ({ entry: e, turnIndex: J.startIndex + t }));
  for (let e of new Set(le)) {
    let t = K.turnIndexByKey.get(e);
    if (t == null || (t >= J.startIndex && t < J.endIndex)) continue;
    let n = r[t];
    n != null && xt.push({ entry: n, turnIndex: t });
  }
  xt.sort(fe);
  let St =
      w == null
        ? []
        : xt.map((e) => {
            let { entry: t, turnIndex: n } = e,
              r = null;
            return (
              `sourceTurnId` in t && typeof t.sourceTurnId == `string`
                ? (r = t.sourceTurnId)
                : `turnId` in t && typeof t.turnId == `string` && (r = t.turnId),
              {
                turnIndex: n,
                turnId: r,
                retained: le?.includes(t.turnKey) === !0,
                gap: t.type === `gap`,
                firstProtectedItemId:
                  `turnStatus` in t &&
                  t.turnStatus === `inProgress` &&
                  `turnItemIds` in t &&
                  Array.isArray(t.turnItemIds)
                    ? (t.turnItemIds.at(-500) ?? null)
                    : null,
              }
            );
          }),
    Ct = _((e) => {
      if (w == null) return;
      if (e > 24 || B.getSnapshot() != null) {
        w(null);
        return;
      }
      let t = re({
          distanceFromBottomPx: ye(e, F(f)),
          layout: K,
          overscanCount: 0,
          viewportHeightPx: ze.viewportHeightPx,
        }),
        n = null;
      for (let e of St)
        if (!(e.gap || (!e.retained && (e.turnIndex < t.startIndex || e.turnIndex >= t.endIndex)))) {
          if (e.turnId == null) {
            w(null);
            return;
          }
          n ??= { oldestRenderedTurnId: e.turnId, firstProtectedItemId: e.firstProtectedItemId };
        }
      w(n);
    }),
    wt;
  (t[50] !== Ct || t[51] !== N
    ? ((wt = () => {
        Ct(N.getLastScrollDistanceFromBottomPx());
      }),
      (t[50] = Ct),
      (t[51] = N),
      (t[52] = wt))
    : (wt = t[52]),
    (0, I.useLayoutEffect)(wt, [r, le, J.startIndex, J.endIndex, w, V, Ct, N]));
  let Tt;
  t[53] !== E || t[54] !== ae || t[55] !== N
    ? ((Tt = () => {
        if (E == null || ae == null || G.current != null || Ye.current.size > 0) return;
        let e = N.getScrollElement(),
          t = W.current.get(E);
        e == null ||
          e.clientHeight <= 0 ||
          t == null ||
          !qe.current.has(t) ||
          (H.current[E] ?? 0) <= 0 ||
          ae(E, t);
      }),
      (t[53] = E),
      (t[54] = ae),
      (t[55] = N),
      (t[56] = Tt))
    : (Tt = t[56]);
  let Et = _(Tt),
    Dt;
  t[57] !== f || t[58] !== p || t[59] !== Y || t[60] !== N
    ? ((Dt = (e) => {
        let t = F(f);
        (e.latestTurnHeightChange != null && p?.(e.latestTurnHeightChange),
          e.restoreScrollDistanceFromBottom
            ? Y()
            : e.scrollDistanceFromBottomPx != null &&
              N.compensateScrollToDistanceFromBottomPx(e.scrollDistanceFromBottomPx + F(f) - t));
      }),
      (t[57] = f),
      (t[58] = p),
      (t[59] = Y),
      (t[60] = N),
      (t[61] = Dt))
    : (Dt = t[61]);
  let Ot = _(Dt),
    kt;
  t[62] === q
    ? (kt = t[63])
    : ((kt = (e, t) => {
        if (G.current != null) return;
        let n = U.current,
          r = he({ current: n, distanceFromBottomPx: e, layout: q(), viewportHeightPx: t });
        r !== n &&
          ((U.current = r),
          !(
            r.renderedRange.startIndex === n.renderedRange.startIndex &&
            r.renderedRange.endIndex === n.renderedRange.endIndex &&
            _e(r.turnKeys, n.turnKeys)
          ) && Be(r));
      }),
      (t[62] = q),
      (t[63] = kt));
  let Z = _(kt),
    At,
    jt;
  (t[64] === w
    ? ((At = t[65]), (jt = t[66]))
    : ((At = () => () => w?.(void 0)), (jt = [w]), (t[64] = w), (t[65] = At), (t[66] = jt)),
    (0, I.useLayoutEffect)(At, jt));
  let Mt;
  t[67] !== q || t[68] !== C
    ? ((Mt = (e, t) => {
        if (C == null) return;
        let n = q(),
          r = Math.max(0, Math.min(n.totalHeightPx, n.totalHeightPx - e)),
          i = Math.max(0, r - t);
        C({ viewportEndPx: r, viewportStartPx: i });
      }),
      (t[67] = q),
      (t[68] = C),
      (t[69] = Mt))
    : (Mt = t[69]);
  let Q = _(Mt),
    Nt;
  t[70] === B
    ? (Nt = t[71])
    : ((Nt = (e) => {
        B.getSnapshot() === e && B.replace(null);
      }),
      (t[70] = B),
      (t[71] = Nt));
  let Pt = _(Nt),
    Ft;
  t[72] !== w || t[73] !== B
    ? ((Ft = (e, t, n) =>
        n?.signal?.aborted
          ? Promise.resolve()
          : (w?.(null),
            new Promise((r) => {
              let i = () => {
                  B.getSnapshot() === a && B.replace(null);
                },
                a = {
                  align: n?.align ?? `center`,
                  complete: () => {
                    (n?.signal?.removeEventListener(`abort`, i), r());
                  },
                  getTargetElement: t,
                  turnKey: e,
                };
              (Be(U.current), B.replace(a), n?.signal?.addEventListener(`abort`, i, { once: !0 }));
            }))),
      (t[72] = w),
      (t[73] = B),
      (t[74] = Ft))
    : (Ft = t[74]);
  let It = _(Ft),
    Lt;
  t[75] === q
    ? (Lt = t[76])
    : ((Lt = (e) => {
        let t = q(),
          n = t.turnIndexByKey.get(e);
        if (n == null) return null;
        let r = t.topOffsetsPx[n],
          i = t.heightsPx[n];
        return r == null || i == null ? null : { endPx: r + i, startPx: r };
      }),
      (t[75] = q),
      (t[76] = Lt));
  let Rt = _(Lt),
    zt;
  t[77] !== p || t[78] !== N || t[79] !== P
    ? ((zt = () => {
        let e = 0,
          t = null;
        for (let [n, r] of Ze.current)
          ((e += r),
            (t == null || t.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING) && (t = n));
        t != null &&
          p?.({
            heightDeltaPx: null,
            heightPx: null,
            bottomViewportOverflowPx: Se({
              scrollElement: N.getScrollElement(),
              turnElement: t,
              windowZoom: P,
            }),
            turnElement: t,
            followContentHeightPx: e,
          });
      }),
      (t[77] = p),
      (t[78] = N),
      (t[79] = P),
      (t[80] = zt))
    : (zt = t[80]);
  let Bt = _(zt),
    Vt;
  t[81] !== D ||
  t[82] !== Ot ||
  t[83] !== M ||
  t[84] !== O ||
  t[85] !== f ||
  t[86] !== q ||
  t[87] !== gt ||
  t[88] !== v ||
  t[89] !== L ||
  t[90] !== k ||
  t[91] !== N ||
  t[92] !== B ||
  t[93] !== P
    ? ((Vt = (e, t, n) => {
        let r = t === void 0 || t,
          i = n === void 0 ? `measured` : n,
          a = q(),
          o = N.getScrollElement(),
          s = G.current,
          c = H.current,
          l = c,
          u = 0,
          d = !1,
          p = null,
          m = 0,
          h = !1,
          g = !1,
          _ = i === `controller` ? N.getLastScrollDistanceFromBottomPx() : ve(N, P),
          y = F(f),
          b = ye(_, y),
          ee = k ? null : (v?.() ?? null),
          x = s == null ? b : U.current.distanceFromBottomPx,
          S = x;
        if (k && B.getSnapshot() == null && v?.() == null) {
          let e = _e(ct.current.turnKeys, a.turnKeys) ? a : ct.current,
            t = e === a ? (s?.scrollDistanceFromBottomPx ?? _) : _,
            n = ge({
              distanceFromBottomPx: gt(t),
              preferLatestVisibleRow: t < y,
              layout: e,
              measuredHeightsByKey: c,
              nextLayout: a,
              viewportHeightPx: U.current.viewportHeightPx,
            }),
            r = o?.ownerDocument.activeElement,
            i = r?.closest(`[data-turn-key]`),
            l = i?.dataset.turnKey;
          if (o && r && i && l && W.current.get(l) === i) {
            let e = r.getBoundingClientRect(),
              t = o.getBoundingClientRect();
            e.bottom > t.top && e.top < t.bottom && (n = l);
          }
          let u = n == null ? null : a.turnIndexByKey.get(n);
          u != null && (S = a.bottomOffsetsPx[u] ?? x);
        }
        for (let [t, n] of e) {
          let { element: e, heightPx: r } = n,
            i = W.current.get(t);
          if (i !== e) continue;
          r > 0 ? qe.current.add(i) : qe.current.delete(i);
          let o = Math.max(+!D, r),
            s = c[t];
          if (s === o) continue;
          (l === c && (l = { ...c }), (l[t] = o));
          let f = a.turnIndexByKey.get(t);
          if (f == null) continue;
          let _ = f === a.turnKeys.length - 1,
            y = Math.round(Math.max(M[f]?.minHeightPx ?? 0, o) * L) / L,
            b = y - (a.heightsPx[f] ?? y);
          ((g = g || s == null || b !== 0),
            _ && ((d = !0), (u += s == null ? 0 : b), (p = i)),
            (h ||= D && (y === 0 || a.heightsPx[f] === 0)),
            (a.bottomOffsetsPx[f] ?? 0) <= S && (k || (v != null && !_)) && (m += b));
        }
        if (l === c) return !1;
        if (!g) return ((H.current = l), !1);
        let C = se({ collapseEmptyRows: D, entries: M, gapPx: O, measuredHeightsByKey: l, pixelScale: L });
        if (h)
          for (let [e, t] of C.gapsBeforePx.entries()) {
            let n = t - (a.gapsBeforePx[e] ?? 0);
            (a.bottomOffsetsPx[e] ?? 0) + (a.heightsPx[e] ?? 0) <= S &&
              (k || (v != null && e !== a.turnKeys.length - 1)) &&
              (m += n);
          }
        let w =
            k &&
            N.shouldFollowContentGrowth() &&
            be(_, y) &&
            p?.querySelector(`[data-preserve-turn-viewport]`) == null,
          te = s?.restoreScrollDistanceFromBottom || ee != null,
          T = null;
        te ||
          (T = w
            ? 0
            : m === 0
              ? (s?.scrollDistanceFromBottomPx ?? (k || !d ? _ : null))
              : (s?.scrollDistanceFromBottomPx ?? N.getUnroundedScrollDistanceFromBottomPx(_)) + m);
        let E = U.current.distanceFromBottomPx;
        te ? (E = ee ?? E) : T != null && (E = ye(T, y));
        let ne = he({
            current: U.current,
            distanceFromBottomPx: E,
            layout: C,
            viewportHeightPx: U.current.viewportHeightPx,
          }),
          re = s?.latestTurnHeightChange,
          ie = p ?? re?.turnElement ?? null,
          ae = {
            latestTurnHeightChange:
              d || re != null
                ? {
                    heightDeltaPx: (re?.heightDeltaPx ?? 0) + u,
                    heightPx: C.heightsPx.at(-1) ?? null,
                    bottomViewportOverflowPx: Se({
                      scrollElement: N.getScrollElement(),
                      turnElement: ie,
                      windowZoom: P,
                    }),
                    turnElement: ie,
                    followContentHeightPx: null,
                  }
                : null,
            restoreScrollDistanceFromBottom: te,
            scrollDistanceFromBottomPx: T,
            turnHeightsByKey: l,
          },
          oe = Ve.current;
        for (let [t, n] of e) {
          let { element: e } = n,
            r = C.turnIndexByKey.get(t);
          W.current.get(t) === e &&
            r != null &&
            e.parentElement != null &&
            ((e.parentElement.style.height = `${C.heightsPx[r]}px`), (e.parentElement.style.minHeight = ``));
        }
        if (
          d &&
          e.size === 1 &&
          s == null &&
          ne === U.current &&
          C.gapsBeforePx.at(-1) === a.gapsBeforePx.at(-1) &&
          oe != null
        )
          return (
            (H.current = l),
            (ot.current = C),
            (ct.current = C),
            (oe.style.height = `${C.totalHeightPx}px`),
            Ot(ae),
            !0
          );
        lt.current ??= a;
        let ce = () => {
          ((H.current = l), (ot.current = C), Ie(l), ne !== U.current && ((U.current = ne), Be(ne)));
        };
        return ((G.current = ae), r ? (0, Ee.flushSync)(ce) : ce(), !0);
      }),
      (t[81] = D),
      (t[82] = Ot),
      (t[83] = M),
      (t[84] = O),
      (t[85] = f),
      (t[86] = q),
      (t[87] = gt),
      (t[88] = v),
      (t[89] = L),
      (t[90] = k),
      (t[91] = N),
      (t[92] = B),
      (t[93] = P),
      (t[94] = Vt))
    : (Vt = t[94]);
  let $ = _(Vt),
    Ht;
  t[95] !== $ || t[96] !== Bt || t[97] !== Et
    ? ((Ht = () => {
        if (Qe.current != null) return Qe.current;
        let e = new ResizeObserver((e) => {
          let t = new Map(),
            n = !1;
          for (let r of e) {
            let e = We.current.get(r.target);
            if (e == null) continue;
            let { height: i } = o(r);
            bb814: switch (e.kind) {
              case `turn`:
                t.set(e.turnKey, { element: r.target, heightPx: i });
                break bb814;
              case `latest-turn-follow-content`:
                (Ze.current.set(e.element, i), (n = !0));
            }
          }
          ($(t), n && Bt(), Et());
        });
        return ((Qe.current = e), e);
      }),
      (t[95] = $),
      (t[96] = Bt),
      (t[97] = Et),
      (t[98] = Ht))
    : (Ht = t[98]);
  let Ut = _(Ht),
    Wt;
  t[99] !== Ut || t[100] !== bt
    ? ((Wt = (e, t) => {
        if (t == null) return;
        (We.current.set(t, { kind: `turn`, turnKey: e }),
          W.current.set(e, t),
          qe.current.delete(t),
          Ye.current.set(e, t));
        let n = Ut();
        return (
          n.observe(t),
          bt(),
          () => {
            (n.unobserve(t),
              We.current.delete(t),
              Ye.current.get(e) === t && Ye.current.delete(e),
              W.current.get(e) === t && W.current.delete(e));
          }
        );
      }),
      (t[99] = Ut),
      (t[100] = bt),
      (t[101] = Wt))
    : (Wt = t[101]);
  let Gt = _(Wt),
    Kt;
  t[102] !== $ || t[103] !== M || t[104] !== ce || t[105] !== P
    ? ((Kt = () => {
        let e = ce ?? M.at(-1)?.turnKey;
        if (e == null) return;
        let t = W.current.get(e);
        if (t == null) return;
        let n = h(t.getBoundingClientRect().height, P);
        n <= 0 || $(new Map([[e, { element: t, heightPx: n }]]), !1);
      }),
      (t[102] = $),
      (t[103] = M),
      (t[104] = ce),
      (t[105] = P),
      (t[106] = Kt))
    : (Kt = t[106]);
  let qt = _(Kt),
    Jt;
  t[107] === Ut
    ? (Jt = t[108])
    : ((Jt = (e) => {
        if (e == null) return;
        (We.current.set(e, { element: e, kind: `latest-turn-follow-content` }), Ze.current.set(e, 0));
        let t = Ut();
        return (
          t.observe(e),
          () => {
            (t.unobserve(e), We.current.delete(e), Ze.current.delete(e));
          }
        );
      }),
      (t[107] = Ut),
      (t[108] = Jt));
  let Yt = _(Jt),
    Xt;
  (t[109] !== $ || t[110] !== P
    ? ((Xt = () => {
        let e = Ye.current;
        if (e.size === 0) {
          $e.current = 0;
          return;
        }
        if (et.current != null) return;
        if ($e.current >= Ae) {
          et.current = requestAnimationFrame((e) => {
            ((et.current = null), ($e.current = 0), nt(e));
          });
          return;
        }
        (($e.current += 1), (Ye.current = new Map()));
        let t = new Map();
        for (let [n, r] of e) {
          if (W.current.get(n) !== r) continue;
          let e = h(r.getBoundingClientRect().height, P);
          e > 0 && t.set(n, { element: r, heightPx: e });
        }
        if (t.size > 0) {
          if ($(t, !1, `controller`)) for (let [t, n] of e) W.current.get(t) === n && Ye.current.set(t, n);
          else $e.current = 0;
        }
      }),
      (t[109] = $),
      (t[110] = P),
      (t[111] = Xt))
    : (Xt = t[111]),
    (0, I.useLayoutEffect)(Xt));
  let Zt, Qt;
  (t[112] !== T || t[113] !== qt
    ? ((Zt = () => {
        T != null && qt();
      }),
      (Qt = [T, qt]),
      (t[112] = T),
      (t[113] = qt),
      (t[114] = Zt),
      (t[115] = Qt))
    : ((Zt = t[114]), (Qt = t[115])),
    (0, I.useLayoutEffect)(Zt, Qt));
  let $t, en;
  (t[116] !== Ot || t[117] !== R
    ? (($t = () => {
        let e = G.current;
        e != null && e.turnHeightsByKey === R && ((G.current = null), Ot(e));
      }),
      (en = [Ot, R]),
      (t[116] = Ot),
      (t[117] = R),
      (t[118] = $t),
      (t[119] = en))
    : (($t = t[118]), (en = t[119])),
    (0, I.useLayoutEffect)($t, en));
  let tn;
  t[120] !== M ||
  t[121] !== j ||
  t[122] !== K.heightsPx ||
  t[123] !== A ||
  t[124] !== R ||
  t[125] !== z ||
  t[126] !== P
    ? ((tn = (e) => {
        if (!A || j?.viewportHeightPx === e) return;
        if (j != null) {
          (0, Ee.flushSync)(() => {
            ue({ ...j, viewportHeightPx: e });
          });
          return;
        }
        let t = z?.closest(`[data-thread-user-message-navigation-content]`),
          n = t?.lastElementChild,
          r = M.at(-1)?.turnKey;
        if (t == null || n == null || r == null || M.some((e) => R[e.turnKey] == null)) return;
        let i =
          h(t.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, P) -
          parseFloat(getComputedStyle(t).paddingBottom);
        i <= 24 ||
          (0, Ee.flushSync)(() => {
            ue({ turnKey: r, heightOutsideTurnPx: e - (K.heightsPx.at(-1) ?? 0) - i, viewportHeightPx: e });
          });
      }),
      (t[120] = M),
      (t[121] = j),
      (t[122] = K.heightsPx),
      (t[123] = A),
      (t[124] = R),
      (t[125] = z),
      (t[126] = P),
      (t[127] = tn))
    : (tn = t[127]);
  let nn = _(tn),
    rn,
    an;
  (t[128] !== Rt || t[129] !== s || t[130] !== It
    ? ((rn = () => {
        if (s != null)
          return (
            s({ getEntryGeometry: Rt, scrollToKey: It }),
            () => {
              s(null);
            }
          );
      }),
      (an = [Rt, s, It]),
      (t[128] = Rt),
      (t[129] = s),
      (t[130] = It),
      (t[131] = rn),
      (t[132] = an))
    : ((rn = t[131]), (an = t[132])),
    (0, I.useEffect)(rn, an));
  let on, sn;
  (t[133] === X
    ? ((on = t[134]), (sn = t[135]))
    : ((on = () => () => {
        ((rt.current = !1), X());
      }),
      (sn = [X]),
      (t[133] = X),
      (t[134] = on),
      (t[135] = sn)),
    (0, I.useLayoutEffect)(on, sn));
  let cn;
  t[136] !== X || t[137] !== bt
    ? ((cn = () => (bt(), X)), (t[136] = X), (t[137] = bt), (t[138] = cn))
    : (cn = t[138]);
  let ln;
  (t[139] !== X || t[140] !== M.length || t[141] !== c || t[142] !== bt || t[143] !== z
    ? ((ln = [X, M.length, c, bt, z]),
      (t[139] = X),
      (t[140] = M.length),
      (t[141] = c),
      (t[142] = bt),
      (t[143] = z),
      (t[144] = ln))
    : (ln = t[144]),
    (0, I.useEffect)(cn, ln));
  let un, dn;
  (t[145] === B
    ? ((un = t[146]), (dn = t[147]))
    : ((un = () => {
        let e = We.current,
          t = W.current,
          n = Ze.current;
        return () => {
          (et.current != null && (cancelAnimationFrame(et.current), (et.current = null)),
            Qe.current?.disconnect(),
            (Qe.current = null),
            e.clear(),
            t.clear(),
            Ye.current.clear(),
            n.clear(),
            (G.current = null),
            B.replace(null));
        };
      }),
      (dn = [B]),
      (t[145] = B),
      (t[146] = un),
      (t[147] = dn)),
    (0, I.useEffect)(un, dn));
  let fn, pn;
  (t[148] === S
    ? ((fn = t[149]), (pn = t[150]))
    : ((fn = () => {
        if (S != null)
          return () => {
            S(xe(H.current, U.current.turnKeys, U.current.renderedRange));
          };
      }),
      (pn = [S]),
      (t[148] = S),
      (t[149] = fn),
      (t[150] = pn)),
    (0, I.useLayoutEffect)(fn, pn));
  let { addScrollListener: mn, addUserScrollListener: hn, getScrollElement: gn } = N,
    _n,
    vn;
  (t[151] !== mn ||
  t[152] !== hn ||
  t[153] !== f ||
  t[154] !== gn ||
  t[155] !== nn ||
  t[156] !== A ||
  t[157] !== Ct ||
  t[158] !== Et ||
  t[159] !== Q ||
  t[160] !== Y ||
  t[161] !== z ||
  t[162] !== Z
    ? ((_n = () => {
        let e = gn();
        if (e == null) return;
        let t = () => ((He.current ??= e.clientHeight), He.current || U.current.viewportHeightPx || ke),
          n = mn((e) => {
            let n = ye(e, F(f));
            (Z(n, t()), Ct(e));
          }),
          r = hn((e) => {
            Q(ye(e, F(f)), t());
          }),
          i = new ResizeObserver((n) => {
            let r = n.find((t) => t.target === e);
            if (r != null) {
              let { height: e } = o(r);
              ((He.current = e), Z(U.current.distanceFromBottomPx, e), Y());
            }
            (nn(t()), Et());
          });
        return (
          i.observe(e),
          A && z != null && i.observe(z),
          () => {
            (n(), r(), i.disconnect());
          }
        );
      }),
      (vn = [mn, hn, f, gn, nn, Et, A, Q, Ct, Y, z, Z]),
      (t[151] = mn),
      (t[152] = hn),
      (t[153] = f),
      (t[154] = gn),
      (t[155] = nn),
      (t[156] = A),
      (t[157] = Ct),
      (t[158] = Et),
      (t[159] = Q),
      (t[160] = Y),
      (t[161] = z),
      (t[162] = Z),
      (t[163] = _n),
      (t[164] = vn))
    : ((_n = t[163]), (vn = t[164])),
    (0, I.useLayoutEffect)(_n, vn));
  let yn;
  t[165] !== $ ||
  t[166] !== f ||
  t[167] !== K ||
  t[168] !== V ||
  t[169] !== N ||
  t[170] !== B ||
  t[171] !== Pt ||
  t[172] !== Z ||
  t[173] !== P
    ? ((yn = () => {
        if (V == null || B.getSnapshot() !== V || et.current != null) return;
        let e = N.getScrollElement();
        if (e == null) return;
        let t = new Map();
        for (let [e, n] of W.current) {
          let r = h(n.getBoundingClientRect().height, P);
          r > 0 && t.set(e, { element: n, heightPx: r });
        }
        if ($(t, !1) || G.current != null) return;
        let n = W.current.get(V.turnKey),
          r = n == null ? null : (V.getTargetElement?.(n) ?? n),
          i =
            n == null || r == null
              ? Ce({ align: V.align, layout: K, turnKey: V.turnKey, viewportHeightPx: e.clientHeight })
              : we({
                  align: V.align,
                  layout: K,
                  targetElement: r,
                  turnElement: n,
                  turnKey: V.turnKey,
                  viewportHeightPx: e.clientHeight,
                  windowZoom: P,
                });
        if (i == null) {
          queueMicrotask(() => Pt(V));
          return;
        }
        let a =
          V.align === `top` && r != null
            ? Math.max(
                0,
                N.getLastScrollDistanceFromBottomPx() -
                  h(r.getBoundingClientRect().top - e.getBoundingClientRect().top, P) +
                  Me,
              )
            : i + F(f);
        (N.scrollToDistanceFromBottomPx(a, `instant`, `user`),
          Z(Math.max(0, a - F(f)), e.clientHeight),
          queueMicrotask(() => Pt(V)));
      }),
      (t[165] = $),
      (t[166] = f),
      (t[167] = K),
      (t[168] = V),
      (t[169] = N),
      (t[170] = B),
      (t[171] = Pt),
      (t[172] = Z),
      (t[173] = P),
      (t[174] = yn))
    : (yn = t[174]);
  let bn;
  (t[175] !== $ ||
  t[176] !== f ||
  t[177] !== K ||
  t[178] !== tt ||
  t[179] !== V ||
  t[180] !== N ||
  t[181] !== B ||
  t[182] !== Pt ||
  t[183] !== Z ||
  t[184] !== P
    ? ((bn = [$, K, tt, V, N, B, Pt, f, Z, P]),
      (t[175] = $),
      (t[176] = f),
      (t[177] = K),
      (t[178] = tt),
      (t[179] = V),
      (t[180] = N),
      (t[181] = B),
      (t[182] = Pt),
      (t[183] = Z),
      (t[184] = P),
      (t[185] = bn))
    : (bn = t[185]),
    (0, I.useLayoutEffect)(yn, bn));
  let xn;
  t[186] !== f ||
  t[187] !== q ||
  t[188] !== gt ||
  t[189] !== v ||
  t[190] !== V ||
  t[191] !== k ||
  t[192] !== N ||
  t[193] !== Z
    ? ((xn = () => {
        if (G.current != null) return;
        let e = ct.current,
          t = q(),
          n = lt.current ?? t;
        if (
          ((lt.current = null),
          (ct.current = t),
          V != null || (!k && e.turnKeys.at(-1) !== n.turnKeys.at(-1)) || e === n)
        )
          return;
        let r = F(f),
          i = N.getLastScrollDistanceFromBottomPx(),
          a = ye(i, r);
        if ((v?.() ?? null) != null) return;
        if (N.shouldFollowContentGrowth() && be(i, r)) {
          N.compensateScrollToDistanceFromBottomPx(0);
          return;
        }
        let o = ge({
          distanceFromBottomPx: gt(i),
          preferLatestVisibleRow: i < r,
          layout: e,
          measuredHeightsByKey: H.current,
          nextLayout: n,
          viewportHeightPx: U.current.viewportHeightPx,
        });
        if (o == null) return;
        let s = ie({ anchorKey: o, distanceFromBottomPx: a, nextLayout: n, previousLayout: e });
        s == null ||
          (s === a && e.totalHeightPx === n.totalHeightPx) ||
          (Z(s, U.current.viewportHeightPx),
          N.compensateScrollToDistanceFromBottomPx(N.getUnroundedScrollDistanceFromBottomPx(i) + s - a));
      }),
      (t[186] = f),
      (t[187] = q),
      (t[188] = gt),
      (t[189] = v),
      (t[190] = V),
      (t[191] = k),
      (t[192] = N),
      (t[193] = Z),
      (t[194] = xn))
    : (xn = t[194]);
  let Sn;
  (t[195] !== f ||
  t[196] !== q ||
  t[197] !== gt ||
  t[198] !== v ||
  t[199] !== K ||
  t[200] !== V ||
  t[201] !== k ||
  t[202] !== N ||
  t[203] !== Z
    ? ((Sn = [f, q, gt, v, K, V, k, N, Z]),
      (t[195] = f),
      (t[196] = q),
      (t[197] = gt),
      (t[198] = v),
      (t[199] = K),
      (t[200] = V),
      (t[201] = k),
      (t[202] = N),
      (t[203] = Z),
      (t[204] = Sn))
    : (Sn = t[204]),
    (0, I.useLayoutEffect)(xn, Sn));
  let Cn;
  t[205] !== V || t[206] !== Q || t[207] !== Y || t[208] !== Z
    ? ((Cn = () => {
        V == null &&
          G.current == null &&
          (Z(U.current.distanceFromBottomPx, U.current.viewportHeightPx),
          Y(),
          Q(U.current.distanceFromBottomPx, U.current.viewportHeightPx));
      }),
      (t[205] = V),
      (t[206] = Q),
      (t[207] = Y),
      (t[208] = Z),
      (t[209] = Cn))
    : (Cn = t[209]);
  let wn;
  (t[210] !== K || t[211] !== V || t[212] !== Q || t[213] !== Y || t[214] !== Z
    ? ((wn = [K, V, Q, Y, Z]),
      (t[210] = K),
      (t[211] = V),
      (t[212] = Q),
      (t[213] = Y),
      (t[214] = Z),
      (t[215] = wn))
    : (wn = t[215]),
    (0, I.useLayoutEffect)(Cn, wn));
  let Tn;
  (t[216] === Et
    ? (Tn = t[217])
    : ((Tn = () => {
        Et();
      }),
      (t[216] = Et),
      (t[217] = Tn)),
    (0, I.useLayoutEffect)(Tn));
  let En;
  t[218] !== M || t[219] !== x
    ? ((En = x ?? M.at(-1)?.turnKey), (t[218] = M), (t[219] = x), (t[220] = En))
    : (En = t[220]);
  let Dn = En,
    On;
  t[221] === l ? (On = t[222]) : ((On = d(`relative shrink-0`, l)), (t[221] = l), (t[222] = On));
  let kn;
  t[223] === K.totalHeightPx
    ? (kn = t[224])
    : ((kn = { height: K.totalHeightPx }), (t[223] = K.totalHeightPx), (t[224] = kn));
  let An = `${K.topOffsetsPx[J.startIndex] ?? 0}px`,
    jn;
  t[225] === An ? (jn = t[226]) : ((jn = { marginTop: An }), (t[225] = An), (t[226] = jn));
  let Mn = xt.map((e) => {
      let { entry: t, turnIndex: n } = e;
      return (0, De.jsx)(
        Pe,
        {
          entry: t,
          gapBeforePx: n === J.startIndex ? 0 : (K.gapsBeforePx[n] ?? 0),
          retainedTopPx: n < J.startIndex || n >= J.endIndex ? K.topOffsetsPx[n] : void 0,
          latestTurnFollowContentRef: n === M.length - 1 && p != null ? Yt : void 0,
          latestTurnFooter: t.turnKey === Dn ? ee : void 0,
          RowComponent: i,
          measuredHeightPx: R[t.turnKey] == null ? void 0 : K.heightsPx[n],
          constrainedHeightPx:
            n !== M.length - 1 && V?.turnKey !== t.turnKey && R[t.turnKey] == null ? K.heightsPx[n] : void 0,
          observeTurnElement: Gt,
        },
        t.turnKey,
      );
    }),
    Nn;
  t[227] !== jn || t[228] !== Mn
    ? ((Nn = (0, De.jsx)(`div`, { className: `flex flex-col`, style: jn, children: Mn })),
      (t[227] = jn),
      (t[228] = Mn),
      (t[229] = Nn))
    : (Nn = t[229]);
  let Pn;
  return (
    t[230] !== pt || t[231] !== On || t[232] !== kn || t[233] !== Nn
      ? ((Pn = (0, De.jsx)(`div`, { ref: pt, className: On, style: kn, children: Nn })),
        (t[230] = pt),
        (t[231] = On),
        (t[232] = kn),
        (t[233] = Nn),
        (t[234] = Pn))
      : (Pn = t[234]),
    Pn
  );
}
function fe(e, t) {
  return e.turnIndex - t.turnIndex;
}
function pe() {
  return new L();
}
function N(e) {
  let t = (0, Te.c)(24),
    {
      entry: n,
      gapBeforePx: r,
      latestTurnFollowContentRef: i,
      latestTurnFooter: a,
      RowComponent: o,
      constrainedHeightPx: s,
      measuredHeightPx: c,
      retainedTopPx: l,
      observeTurnElement: u,
    } = e,
    { turnKey: f } = n,
    p;
  t[0] !== u || t[1] !== f ? ((p = (e) => u(f, e)), (t[0] = u), (t[1] = f), (t[2] = p)) : (p = t[2]);
  let m = _(p),
    h = l != null && `absolute inset-x-0`,
    g = s != null && `overflow-hidden`,
    v;
  t[3] !== h || t[4] !== g ? ((v = d(h, g)), (t[3] = h), (t[4] = g), (t[5] = v)) : (v = t[5]);
  let y = c ?? s,
    b = l == null ? r : 0,
    ee = c == null ? n.minHeightPx : void 0,
    x;
  t[6] !== l || t[7] !== y || t[8] !== b || t[9] !== ee
    ? ((x = { height: y, marginTop: b, minHeight: ee, top: l }),
      (t[6] = l),
      (t[7] = y),
      (t[8] = b),
      (t[9] = ee),
      (t[10] = x))
    : (x = t[10]);
  let S;
  t[11] !== o || t[12] !== n || t[13] !== i || t[14] !== a
    ? ((S = (0, De.jsx)(o, { entry: n, latestTurnFooter: a, latestTurnFollowContentRef: i })),
      (t[11] = o),
      (t[12] = n),
      (t[13] = i),
      (t[14] = a),
      (t[15] = S))
    : (S = t[15]);
  let C;
  t[16] !== m || t[17] !== S || t[18] !== f
    ? ((C = (0, De.jsx)(`div`, {
        ref: m,
        className: `[&_[data-virtualized-turn-content]]:[content-visibility:visible]`,
        "data-turn-key": f,
        children: S,
      })),
      (t[16] = m),
      (t[17] = S),
      (t[18] = f),
      (t[19] = C))
    : (C = t[19]);
  let w;
  return (
    t[20] !== C || t[21] !== v || t[22] !== x
      ? ((w = (0, De.jsx)(`div`, { className: v, style: x, children: C })),
        (t[20] = C),
        (t[21] = v),
        (t[22] = x),
        (t[23] = w))
      : (w = t[23]),
    w
  );
}
function me(e, t, n, r, i, a) {
  let o = se({
      collapseEmptyRows: r,
      entries: e,
      gapPx: n,
      measuredHeightsByKey: i?.turnHeightsByKey ?? Ne,
      pixelScale: a,
    }),
    s = ke,
    c = Math.min(t, o.totalHeightPx),
    l = re({ distanceFromBottomPx: c, layout: o, overscanCount: je, viewportHeightPx: s });
  return {
    distanceFromBottomPx: c,
    renderedRange:
      (i?.renderedWindow == null
        ? null
        : ne({
            anchorKey: i.renderedWindow.anchorKey,
            layout: o,
            previousRange: {
              startIndex: 0,
              endIndex: Math.min(i.renderedWindow.count, l.endIndex - l.startIndex),
            },
          })) ?? l,
    turnKeys: o.turnKeys,
    viewportHeightPx: s,
  };
}
function he({ current: e, distanceFromBottomPx: t, layout: n, viewportHeightPx: r }) {
  let i = Math.min(t, n.totalHeightPx),
    a = re({ distanceFromBottomPx: i, layout: n, overscanCount: je, viewportHeightPx: r }),
    o = P(e.renderedRange, a) ? e.renderedRange : a;
  return e.distanceFromBottomPx === i &&
    e.viewportHeightPx === r &&
    e.renderedRange.startIndex === o.startIndex &&
    e.renderedRange.endIndex === o.endIndex &&
    _e(e.turnKeys, n.turnKeys)
    ? e
    : { distanceFromBottomPx: i, renderedRange: o, turnKeys: n.turnKeys, viewportHeightPx: r };
}
function P(e, t) {
  return e.startIndex <= t.startIndex && e.endIndex >= t.endIndex;
}
function ge({
  distanceFromBottomPx: e,
  preferLatestVisibleRow: t,
  layout: n,
  measuredHeightsByKey: r,
  nextLayout: i,
  viewportHeightPx: a,
}) {
  let o = re({
      distanceFromBottomPx: e,
      layout: n,
      overscanCount: 0,
      viewportHeightPx: Math.max(0, a + Math.min(0, e)),
    }),
    s = null;
  for (let c = o.startIndex; c < o.endIndex; c += 1) {
    let o = n.turnKeys[c];
    if (
      o != null &&
      !n.gapKeys.has(o) &&
      (!n.collapseEmptyRows || (n.heightsPx[c] ?? 0) > 0) &&
      r[o] != null &&
      i.turnIndexByKey.has(o) &&
      (n.bottomOffsetsPx[c] ?? 0) < e + a &&
      (n.bottomOffsetsPx[c] ?? 0) + (n.heightsPx[c] ?? 0) > e
    ) {
      if (t) s = o;
      else if (((s ??= o), (n.bottomOffsetsPx[c] ?? 0) + (n.heightsPx[c] ?? 0) <= e + a)) return o;
    }
  }
  return s;
}
function _e(e, t) {
  return e === t || (e.length === t.length && e.every((e, n) => e === t[n]));
}
function ve(e, t) {
  let n = e.getScrollElement(),
    r = n?.firstElementChild;
  if (n == null || r == null || n.clientHeight === 0) return e.getLastScrollDistanceFromBottomPx();
  let i = r.getBoundingClientRect();
  if (i.height === 0) return e.getLastScrollDistanceFromBottomPx();
  let a = n.scrollTop,
    o = a + h(i.bottom - n.getBoundingClientRect().top, t);
  return Math.max(0, Math.round(o) - n.clientHeight) - a;
}
function F(e) {
  return Math.max(0, e?.() ?? 0);
}
function ye(e, t) {
  return Math.max(0, e - t);
}
function be(e, t) {
  return t === 0 && e <= 24;
}
function xe(e, t, n) {
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
function Se({ scrollElement: e, turnElement: t, windowZoom: n }) {
  return e == null || t == null
    ? 0
    : h(t.getBoundingClientRect().bottom - e.getBoundingClientRect().bottom, n);
}
function Ce({ align: e, layout: t, turnKey: n, viewportHeightPx: r }) {
  if (e === `center`) return oe({ layout: t, turnKey: n, viewportHeightPx: r });
  let i = t.turnIndexByKey.get(n);
  return i == null ? null : Math.max(0, (t.bottomOffsetsPx[i] ?? 0) + (t.heightsPx[i] ?? 0) - r + Me);
}
function we({
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
    u = h(l.top - c.top, a),
    d = h(l.height, a),
    f = (t.bottomOffsetsPx[s] ?? 0) + (t.heightsPx[s] ?? 0) - u;
  return e === `top` ? Math.max(0, f - o + Me) : Math.max(0, f - d / 2 - o / 2);
}
var Te, I, Ee, De, Oe, ke, Ae, je, Me, Ne, Pe, L;
function Fe() {
  return (Fe = e(() => {
    ((Te = p()),
      c(),
      (I = y()),
      (Ee = v()),
      t(),
      w(),
      u(),
      ae(),
      (De = g()),
      (Oe = 12),
      (ke = 800),
      (Ae = 8),
      (je = 2),
      (Me = 10),
      (Ne = {}),
      (Pe = (0, I.memo)(N)),
      (L = class {
        request = null;
        listeners = new Set();
        getSnapshot = () => this.request;
        subscribe = (e) => (
          this.listeners.add(e),
          () => {
            this.listeners.delete(e);
          }
        );
        replace(e) {
          if (this.request === e) return;
          let t = this.request;
          ((this.request = e), t?.complete());
          for (let e of this.listeners) e();
        }
      }));
  }))();
}
export { ce as a, de as i, Fe as n, k as o, A as r, M as t };
//# sourceMappingURL=virtualized-turn-list-d00a3b041bce.js.map
