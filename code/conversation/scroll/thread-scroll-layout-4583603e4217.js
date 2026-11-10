import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AF as r,
  Amn as i,
  BLt as a,
  D4t as o,
  E4t as s,
  Eln as c,
  F3t as l,
  LLt as u,
  O3t as d,
  OL as f,
  Opn as p,
  PLt as m,
  QLt as ee,
  Qit as h,
  RLt as te,
  Rpn as g,
  Spn as _,
  T4t as v,
  ULt as ne,
  VLt as re,
  Zit as ie,
  b4t as ae,
  bln as oe,
  dI as se,
  dW as ce,
  fW as y,
  gRt as b,
  hmn as le,
  kF as ue,
  kL as de,
  kmn as x,
  lW as fe,
  nf as pe,
  nln as S,
  sW as me,
  tf as C,
  uI as he,
  w4t as w,
  xRt as ge,
  zLt as _e,
  zpn as ve,
} from "./app-initial-f094ef01c64d.js";
import { $o as ye, Qo as be, ts as T } from "./app-primary-4c40d73a1074.js";
import {
  n as xe,
  r as Se,
  t as Ce,
} from "./thread-scroll-controller-context-value-6a9e93eb1505.js";
var we = e(() => {});
function E(e, t) {
  let n = e.closest(`[data-app-shell-main-content-layout]`),
    r = n
      ?.closest(`[data-app-shell-main-surface]`)
      ?.querySelector(`header[data-app-shell-header-layout]`);
  if (n == null || r == null) return;
  let i = null,
    a = !0,
    o = new Set(),
    s = () => {
      if (((i = null), a)) {
        a = !1;
        let e = new Set(r.querySelectorAll(Te));
        for (let t of o) e.has(t) || l.unobserve(t);
        for (let t of e) o.has(t) || l.observe(t);
        o = e;
      }
      let n = e.getBoundingClientRect(),
        s = n.width > 0 && !r.hasAttribute(`data-app-shell-tab-row`);
      if (s)
        for (let e of o) {
          let t = e.getBoundingClientRect();
          if (
            !e.hasAttribute(`data-app-shell-thread-content-overlap`) &&
            t.width > 0 &&
            t.height > 0 &&
            getComputedStyle(e).visibility !== `hidden` &&
            t.right > n.left &&
            t.left < n.right
          ) {
            s = !1;
            break;
          }
        }
      t(s);
    },
    c = () => {
      i ??= requestAnimationFrame(s);
    },
    l = new ResizeObserver((e) => {
      (e.some(({ target: e }) => !e.isConnected) && (a = !0), c());
    });
  for (let t of [n, e, r]) l.observe(t);
  return (
    c(),
    {
      schedule: c,
      updateHeader: () => {
        ((a = !0), c());
      },
      dispose: () => {
        (l.disconnect(), i != null && cancelAnimationFrame(i), t(!1));
      },
    }
  );
}
var Te,
  Ee = e(() => {
    Te = `[data-app-shell-header-obstacle], [data-app-shell-header-toolbar] > *, [data-app-shell-page-header] > :not([data-app-shell-header-toolbar])`;
  }),
  D,
  De,
  Oe = e(() => {
    ((D = `_Probe_3b6sy_1`), (De = { Probe: D }));
  });
function ke(e) {
  let t = (0, O.c)(3),
    { contentX: n } = e,
    r = (0, k.useContext)(ue),
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = r == null ? null : (0, A.jsx)(Ae, { contentX: n })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function Ae(e) {
  let t = (0, O.c)(6),
    { contentX: r } = e,
    i = n(b),
    o = l(ne),
    s;
  t[0] !== r || t[1] !== i
    ? ((s = (e) => {
        if (e == null) return;
        let t = E(e, (e) => {
          i.set(m, e);
        });
        if (t == null) return;
        let n = i.watch((e) => {
            let { get: n } = e;
            (n(u), n(te), n(_e), n(a), n(ee), t.updateHeader());
          }),
          o = r?.on(`change`, t.schedule);
        return () => {
          (n(), o?.(), t.dispose());
        };
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = s))
    : (s = t[2]);
  let c = s,
    d;
  return (
    t[3] !== o || t[4] !== c
      ? ((d =
          o === `thread-edge-scroll`
            ? (0, A.jsx)(`div`, { ref: c, className: De.Probe, "aria-hidden": !0 })
            : null),
        (t[3] = o),
        (t[4] = c),
        (t[5] = d))
      : (d = t[5]),
    d
  );
}
var O,
  k,
  A,
  j = e(() => {
    ((O = x()), d(), (k = t(i(), 1)), ge(), r(), re(), Ee(), Oe(), (A = le()));
  });
function je(e) {
  let t = (0, M.c)(10),
    { isWorking: n, responseSpacer: r } = e,
    i = n !== void 0 && n,
    a = p(),
    o = Se(),
    s;
  t[0] !== r || t[1] !== o
    ? ((s = () => {
        let e = r?.getHeightPx();
        return e == null ? o.isScrolledFromBottom : o.getLastScrollDistanceFromBottomPx() > e + 24;
      }),
      (t[0] = r),
      (t[1] = o),
      (t[2] = s))
    : (s = t[2]);
  let c = s,
    l = (0, Me.useSyncExternalStore)(o.addScrollListener, c, c),
    u = r?.scrollToBottom ?? o.scrollToBottom,
    d;
  t[3] === a
    ? (d = t[4])
    : ((d = a.formatMessage({
        id: `localConversation.scrollToBottomButton`,
        defaultMessage: `Scroll to bottom`,
        description: `Accessible label for the button that scrolls a conversation to its latest message`,
      })),
      (t[3] = a),
      (t[4] = d));
  let f = l && i,
    m;
  return (
    t[5] !== u || t[6] !== l || t[7] !== d || t[8] !== f
      ? ((m = (0, N.jsx)(`div`, {
          className: `relative h-0`,
          children: (0, N.jsx)(C, {
            className: `bottom-[calc(100%+6*var(--spacing))]`,
            label: d,
            onClick: u,
            show: l,
            showWorkingDots: f,
          }),
        })),
        (t[5] = u),
        (t[6] = l),
        (t[7] = d),
        (t[8] = f),
        (t[9] = m))
      : (m = t[9]),
    m
  );
}
var M,
  Me,
  N,
  P = e(() => {
    ((M = x()), (Me = t(i(), 1)), _(), pe(), we(), xe(), (N = le()));
  }),
  F,
  I,
  Ne,
  Pe = e(() => {
    ((F = `_compactHeaderScrollFade_1bcyj_1`),
      (I = `_compactScrollMask_1bcyj_16`),
      (Ne = { compactHeaderScrollFade: F, compactScrollMask: I }));
  });
function Fe(e) {
  let t = (0, He.c)(137),
    {
      active: n,
      autoLoadHistory: r,
      contentX: i,
      children: a,
      footer: s,
      hasLiveMcpAppFrame: l,
      hideScrollbar: u,
      loadPastHiddenHistoryPages: d,
      onScroll: f,
      onUserScrollToTop: p,
      initialOffset: m,
      presentation: ee,
      preserveViewportOnContentGrowth: te,
      responseSpacer: _,
      remoteHostedPIPAnchorHostId: ne,
      scrollToBottomButton: re,
      scrollOrigin: ie,
      threadEndContent: se,
    } = e,
    y = n === void 0 || n,
    b = r === void 0 || r,
    le = l !== void 0 && l,
    ue = u !== void 0 && u,
    x = d !== void 0 && d,
    pe = m === void 0 ? 0 : m,
    S = ee === void 0 ? `default` : ee,
    me = te !== void 0 && te,
    C = ie === void 0 ? `bottom` : ie,
    w = pe != null && pe > 24 ? pe : 0,
    ge = de(),
    _e;
  t[0] === i ? (_e = t[1]) : ((_e = () => `${Math.abs(i?.get() ?? 0)}px`), (t[0] = i), (t[1] = _e));
  let ve = oe(_e),
    T = (0, L.useRef)(null),
    [xe, Se] = (0, L.useState)(!1),
    we = (0, L.useRef)(null),
    E = (0, L.useRef)(w),
    Te = (0, L.useRef)(null),
    Ee = (0, L.useRef)(null),
    D;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((D = new Set()), (t[2] = D)) : (D = t[2]);
  let De = (0, L.useRef)(D),
    Oe;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((Oe = new Set()), (t[3] = Oe)) : (Oe = t[3]);
  let Ae = (0, L.useRef)(Oe),
    O = (0, L.useRef)(null),
    k = (0, L.useRef)(!0),
    A = (0, L.useRef)(!1),
    j = (0, L.useRef)(null),
    M = (0, L.useRef)(!1),
    Me = (0, L.useRef)(!1),
    N = (0, L.useRef)(null),
    P = (0, L.useRef)(null),
    F = (0, L.useContext)(he),
    I;
  t[4] !== S || t[5] !== F
    ? ((I = (e) => {
        if (((T.current = e), !(S === `compact` || e == null || F == null)))
          return F((t) => {
            M.current || Re(e) || o(e, v(e) + t);
          });
      }),
      (t[4] = S),
      (t[5] = F),
      (t[6] = I))
    : (I = t[6]);
  let Pe = I,
    Fe;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fe = () => T.current), (t[7] = Fe))
    : (Fe = t[7]);
  let qe = h(Fe),
    z;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = () => E.current), (t[8] = z))
    : (z = t[8]);
  let Je = z,
    Ye;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ye = (e) => (
        De.current.add(e),
        e(E.current),
        () => {
          De.current.delete(e);
        }
      )),
      (t[9] = Ye))
    : (Ye = t[9]);
  let Xe = h(Ye),
    Ze;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ze = (e) => (
        Ae.current.add(e),
        () => {
          Ae.current.delete(e);
        }
      )),
      (t[10] = Ze))
    : (Ze = t[10]);
  let B = h(Ze),
    Qe;
  t[11] !== f || t[12] !== _ || t[13] !== C
    ? ((Qe = (e) => {
        ((E.current = e),
          C === `bottom` && (Te.current = Math.max(0, e - (_?.getHeightPx() ?? 0))));
        let t = e <= 24;
        f?.(e, t);
        for (let t of De.current) t(e);
        Se(!t);
      }),
      (t[11] = f),
      (t[12] = _),
      (t[13] = C),
      (t[14] = Qe))
    : (Qe = t[14]);
  let V = h(Qe),
    $e;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($e = () => {
        ((M.current = !1),
          P.current != null && (window.cancelAnimationFrame(P.current), (P.current = null)));
      }),
      (t[15] = $e))
    : ($e = t[15]);
  let H = h($e),
    et;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((et = () => {
        ((O.current = null),
          (M.current = !0),
          P.current != null && (window.cancelAnimationFrame(P.current), (P.current = null)));
      }),
      (t[16] = et))
    : (et = t[16]);
  let tt = h(et),
    nt;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((nt = () => {
        N.current = null;
      }),
      (t[17] = nt))
    : (nt = t[17]);
  let U = h(nt),
    rt;
  t[18] !== U || t[19] !== V
    ? ((rt = (e, t) => {
        let n = T.current;
        if (n == null) return;
        ((O.current = null), U());
        let r = Math.max(0, t(n));
        (n.scrollTo({ behavior: e, top: r === 0 ? 0 : -r }), V(v(n)));
      }),
      (t[18] = U),
      (t[19] = V),
      (t[20] = rt))
    : (rt = t[20]);
  let W = h(rt),
    it;
  t[21] !== H || t[22] !== W
    ? ((it = (e, t, n) => {
        let r = n === void 0 ? `system` : n,
          i = E.current,
          a = Math.max(0, e);
        (a > 24 && H(), W(t, () => a));
        let o = E.current;
        if (r === `user` && o !== i) for (let e of Ae.current) e(o, i);
      }),
      (t[21] = H),
      (t[22] = W),
      (t[23] = it))
    : (it = t[23]);
  let G = h(it),
    at;
  t[24] === W
    ? (at = t[25])
    : ((at = (e) => {
        M.current || W(`instant`, () => e);
      }),
      (t[24] = W),
      (t[25] = at));
  let K = h(at),
    ot;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = (e) => {
        Me.current = e;
      }),
      (t[26] = ot))
    : (ot = t[26]);
  let st = h(ot),
    ct;
  t[27] !== U || t[28] !== W
    ? ((ct = () => {
        let e = T.current;
        if (M.current || e == null || N.current != null) return;
        let t = {
          distanceFromBottomPx: E.current,
          scrollHeightPx: e.scrollHeight,
          wheelDistanceFromBottomPx: 0,
        };
        ((N.current = t),
          window.requestAnimationFrame(() => {
            if (N.current === t) {
              if (T.current !== e) {
                U();
                return;
              }
              if (e.scrollHeight === t.scrollHeightPx) {
                U();
                return;
              }
              W(`instant`, () => t.distanceFromBottomPx + t.wheelDistanceFromBottomPx);
            }
          }));
      }),
      (t[27] = U),
      (t[28] = W),
      (t[29] = ct))
    : (ct = t[29]);
  let lt = h(ct),
    ut;
  t[30] !== b || t[31] !== x || t[32] !== p
    ? ((ut = async () => {
        if (A.current || p == null) return;
        let e = j.current;
        ((A.current = !0),
          await (async () => {
            try {
              for (; j.current === e && T.current != null && ze(T.current, x);) {
                let e = T.current.scrollHeight;
                if ((await p()) === `stop` || !b) break;
                let t = T.current;
                if (t != null && t.scrollHeight - t.clientHeight > We && (!x || t.scrollHeight > e))
                  break;
              }
            } catch {}
          })().finally(() => {
            ((A.current = !1), j.current !== e && j.current?.());
          }));
      }),
      (t[30] = b),
      (t[31] = x),
      (t[32] = p),
      (t[33] = ut))
    : (ut = t[33]);
  let q = h(ut),
    dt,
    ft;
  (t[34] !== y || t[35] !== b || t[36] !== q || t[37] !== p
    ? ((dt = () => {
        let e = T.current;
        if (!y || !b || e == null || p == null) return;
        let t,
          n,
          r = () => {
            let r = e.clientHeight,
              i = e.scrollHeight;
            T.current !== e ||
              r <= 0 ||
              i - r > We ||
              A.current ||
              (t === r && n === i) ||
              ((t = r), (n = i), q());
          };
        j.current = r;
        let i = new ResizeObserver(r);
        i.observe(e);
        let a = e.firstElementChild;
        a != null && i.observe(a);
        let o = window.requestAnimationFrame(r);
        return () => {
          (j.current === r && (j.current = null), window.cancelAnimationFrame(o), i.disconnect());
        };
      }),
      (ft = [y, b, q, p]),
      (t[34] = y),
      (t[35] = b),
      (t[36] = q),
      (t[37] = p),
      (t[38] = dt),
      (t[39] = ft))
    : ((dt = t[38]), (ft = t[39])),
    (0, L.useEffect)(dt, ft));
  let pt;
  t[40] !== U || t[41] !== H || t[42] !== ge || t[43] !== W || t[44] !== tt
    ? ((pt = () => {
        let e = T.current;
        if (e == null) return;
        U();
        let t = v(e);
        if (ge || t <= 24) {
          (W(`instant`, Ie), H());
          return;
        }
        tt();
        let n = performance.now(),
          r = (e) => {
            let i = T.current;
            if (i == null) {
              H();
              return;
            }
            let a = Math.min(1, (e - n) / Ue),
              s = 1 - (1 - a) ** 3;
            if ((o(i, t * (1 - s)), a < 1 && !Re(i))) {
              P.current = window.requestAnimationFrame(r);
              return;
            }
            (o(i, 0), H());
          };
        P.current = window.requestAnimationFrame(r);
      }),
      (t[40] = U),
      (t[41] = H),
      (t[42] = ge),
      (t[43] = W),
      (t[44] = tt),
      (t[45] = pt))
    : (pt = t[45]);
  let mt = h(pt),
    ht,
    gt;
  (t[46] !== y || t[47] !== H || t[48] !== V || t[49] !== _ || t[50] !== w || t[51] !== C
    ? ((ht = () => {
        let e = Ee.current;
        Ee.current = { active: y, restoredDistanceFromBottomPx: w, scrollOrigin: C };
        let t = T.current;
        if (!y || t == null) {
          H();
          return;
        }
        if (
          e == null ||
          e.active !== y ||
          e.scrollOrigin !== C ||
          e.restoredDistanceFromBottomPx !== w
        ) {
          H();
          let n = e != null && (!e.active || e.scrollOrigin === `top`),
            r = w;
          if (C === `top`) r = Math.max(0, t.scrollHeight - t.clientHeight);
          else if (n) {
            let e = Te.current;
            r = e == null ? w : e + (_?.getHeightPx() ?? 0);
          }
          (o(t, r), V(v(t)), (k.current = C === `top` || v(t) - (_?.getHeightPx() ?? 0) <= 24));
        }
      }),
      (gt = [y, H, V, _, w, C]),
      (t[46] = y),
      (t[47] = H),
      (t[48] = V),
      (t[49] = _),
      (t[50] = w),
      (t[51] = C),
      (t[52] = ht),
      (t[53] = gt))
    : ((ht = t[52]), (gt = t[53])),
    (0, L.useLayoutEffect)(ht, gt));
  let _t, vt;
  (t[54] !== y ||
  t[55] !== B ||
  t[56] !== K ||
  t[57] !== me ||
  t[58] !== _ ||
  t[59] !== C ||
  t[60] !== G
    ? ((_t = () => {
        let e = T.current;
        if (!y || (C === `bottom` && !me) || e == null) return;
        let t = e.querySelector(`[data-thread-user-message-navigation-content]`);
        if (t == null) return;
        let n = Math.max(0, t.scrollHeight - (_?.getHeightPx() ?? 0)),
          r = B((t) => {
            if (C === `top`) {
              k.current = e.scrollHeight - e.clientHeight - t <= 24;
              return;
            }
            k.current = t <= 24;
          }),
          i = new ResizeObserver(() => {
            let r = _?.getHeightPx() ?? 0,
              i = Math.max(0, t.scrollHeight - r),
              a = i - n;
            n = i;
            let o = v(e);
            if ((C === `bottom` && o <= 24 && (k.current = !0), C === `top` && k.current)) {
              G(Math.max(0, e.scrollHeight - e.clientHeight), `instant`);
              return;
            }
            if (a <= 0) return;
            let s = o + a;
            (k.current && (s = Math.min(s, r)), K(s));
          });
        return (
          i.observe(t),
          C === `top` && i.observe(e),
          () => {
            (r(), i.disconnect());
          }
        );
      }),
      (vt = [y, B, K, me, _, C, G]),
      (t[54] = y),
      (t[55] = B),
      (t[56] = K),
      (t[57] = me),
      (t[58] = _),
      (t[59] = C),
      (t[60] = G),
      (t[61] = _t),
      (t[62] = vt))
    : ((_t = t[61]), (vt = t[62])),
    (0, L.useLayoutEffect)(_t, vt));
  let yt, bt;
  (t[63] !== y || t[64] !== U || t[65] !== H || t[66] !== q || t[67] !== x || t[68] !== V
    ? ((yt = () => {
        let e = T.current;
        if (!y || e == null) return;
        let t = new AbortController(),
          n = { passive: !0, signal: t.signal },
          r = null,
          i = null,
          a = (t) => {
            H();
            let n = t === `away` ? Be(e) > 0 : v(e) > 0;
            O.current = n ? { direction: t, lastAtMs: performance.now() } : null;
          },
          s = () => {
            let t = v(e);
            (t <= 24 && H(), V(t));
          },
          c = () => {
            let t = N.current;
            t != null &&
              e.scrollHeight !== t.scrollHeightPx &&
              (U(), o(e, t.distanceFromBottomPx + t.wheelDistanceFromBottomPx));
            let n = E.current,
              r = i;
            if (r != null) {
              i = null;
              let t = v(e);
              e.scrollHeight === r.scrollHeightPx &&
                e.scrollTop !== r.scrollTopPx &&
                t !== n &&
                (O.current = { direction: t > n ? `away` : `toward`, lastAtMs: performance.now() });
            }
            let a = O.current;
            if (a == null) {
              s();
              return;
            }
            let c = performance.now();
            if (c - a.lastAtMs > Ke) {
              ((O.current = null), s());
              return;
            }
            s();
            let l = v(e);
            if ((l > n ? `away` : l < n ? `toward` : null) === a.direction) {
              ((a.lastAtMs = c), l > n && ze(e, x) && q());
              for (let e of Ae.current) e(l, n);
              l <= 24 && (O.current = null);
            }
          },
          l = (t) => {
            let n = Ve(t, e.clientHeight),
              r = N.current;
            (r == null ? U() : (r.wheelDistanceFromBottomPx -= n),
              t.deltaY < 0 && Be(e) <= 0 && q(),
              n !== 0 && a(n < 0 ? `away` : `toward`));
          },
          u = (t) => {
            let n = Le(t, e);
            n != null && (U(), a(n), n === `away` && Be(e) <= 0 && q());
          },
          d = (t) => {
            ((i = null),
              (O.current = null),
              !(t.pointerType !== `mouse` || t.target !== e) &&
                (U(), H(), (i = { scrollHeightPx: e.scrollHeight, scrollTopPx: e.scrollTop })));
          },
          f = () => {
            i = null;
          },
          p = (e) => {
            r = e.touches.length === 1 ? e.touches[0] : null;
          },
          m = (t) => {
            let n = t.touches.length === 1 ? t.touches[0] : null;
            if (r == null || n == null || n.identifier !== r.identifier) {
              r = null;
              return;
            }
            let i = n.clientX - r.clientX,
              o = n.clientY - r.clientY;
            Math.max(Math.abs(i), Math.abs(o)) < Ge ||
              ((r = null),
              Math.abs(o) > Math.abs(i) && (U(), a(o > 0 ? `away` : `toward`)),
              o > Math.abs(i) && Be(e) <= 0 && q());
          },
          ee = () => {
            r = null;
          };
        return (
          e.addEventListener(`pointerdown`, d, n),
          e.addEventListener(`pointerup`, f, n),
          e.addEventListener(`pointercancel`, f, n),
          e.addEventListener(`keydown`, u, n),
          e.addEventListener(`touchstart`, p, n),
          e.addEventListener(`touchmove`, m, n),
          e.addEventListener(`touchend`, ee, n),
          e.addEventListener(`touchcancel`, ee, n),
          e.addEventListener(`wheel`, l, n),
          e.addEventListener(`scroll`, c, n),
          () => {
            t.abort();
          }
        );
      }),
      (bt = [y, U, H, x, q, V]),
      (t[63] = y),
      (t[64] = U),
      (t[65] = H),
      (t[66] = q),
      (t[67] = x),
      (t[68] = V),
      (t[69] = yt),
      (t[70] = bt))
    : ((yt = t[69]), (bt = t[70])),
    (0, L.useEffect)(yt, bt));
  let xt, St;
  (t[71] === H
    ? ((xt = t[72]), (St = t[73]))
    : ((xt = () => () => {
        H();
      }),
      (St = [H]),
      (t[71] = H),
      (t[72] = xt),
      (t[73] = St)),
    (0, L.useEffect)(xt, St));
  let Ct;
  t[74] !== Xe ||
  t[75] !== B ||
  t[76] !== K ||
  t[77] !== qe ||
  t[78] !== xe ||
  t[79] !== lt ||
  t[80] !== mt ||
  t[81] !== G ||
  t[82] !== st
    ? ((Ct = {
        addScrollListener: Xe,
        addUserScrollListener: B,
        compensateScrollToDistanceFromBottomPx: K,
        getLastScrollDistanceFromBottomPx: Je,
        getScrollElement: qe,
        isScrolledFromBottom: xe,
        preserveScrollPositionForNextLayout: lt,
        scrollToBottom: mt,
        scrollToDistanceFromBottomPx: G,
        setFooterResizeViewportPreserveDisabled: st,
      }),
      (t[74] = Xe),
      (t[75] = B),
      (t[76] = K),
      (t[77] = qe),
      (t[78] = xe),
      (t[79] = lt),
      (t[80] = mt),
      (t[81] = G),
      (t[82] = st),
      (t[83] = Ct))
    : (Ct = t[83]);
  let wt = Ct,
    Tt;
  t[84] !== S || t[85] !== W
    ? ((Tt = (e) => {
        let { height: t } = ce(e),
          n = T.current;
        if (n == null) return;
        let r = we.current;
        r !== t &&
          (n.style.setProperty(
            `--thread-scroll-padding-bottom`,
            `${t + (S === `compact` ? 0 : 16)}px`,
          ),
          (we.current = t),
          !(M.current || Me.current) && (r == null || Re(n) || W(`instant`, (e) => v(e) + t - r)));
      }),
      (t[84] = S),
      (t[85] = W),
      (t[86] = Tt))
    : (Tt = t[86]);
  let Et = fe(Tt),
    Dt;
  t[87] !== i || t[88] !== ve
    ? ((Dt = i == null ? void 0 : { x: i, "--thread-wide-block-inline-shift": ve }),
      (t[87] = i),
      (t[88] = ve),
      (t[89] = Dt))
    : (Dt = t[89]);
  let J = Dt,
    Ot;
  t[90] !== y ||
  t[91] !== J ||
  t[92] !== s ||
  t[93] !== Et ||
  t[94] !== S ||
  t[95] !== _ ||
  t[96] !== C ||
  t[97] !== re
    ? ((Ot = s
        ? (0, R.jsx)(c.div, {
            ref: Et,
            className: g(
              `pointer-events-none absolute inset-x-0 bottom-0 z-10`,
              S === `compact` ? `w-full shrink-0` : `pb-4 browser:pb-6`,
            ),
            "data-thread-scroll-footer": `true`,
            style: J,
            children: (0, R.jsxs)(`div`, {
              "data-pip-obstacle": `thread-footer`,
              className: g(
                `relative z-10 flex flex-col *:pointer-events-auto`,
                S === `compact` ? void 0 : be,
              ),
              children: [
                !y || C === `top` || re == null
                  ? null
                  : (0, R.jsx)(je, { ...re, responseSpacer: _ }),
                s,
              ],
            }),
          })
        : null),
      (t[90] = y),
      (t[91] = J),
      (t[92] = s),
      (t[93] = Et),
      (t[94] = S),
      (t[95] = _),
      (t[96] = C),
      (t[97] = re),
      (t[98] = Ot))
    : (Ot = t[98]);
  let kt = Ot,
    At = S === `compact` ? `relative flex min-h-0 flex-1 flex-col` : `relative h-full flex-1`,
    jt = le ? `[content-visibility:visible]` : `[content-visibility:auto]`,
    Y;
  t[99] !== At || t[100] !== jt
    ? ((Y = g(At, jt)), (t[99] = At), (t[100] = jt), (t[101] = Y))
    : (Y = t[101]);
  let Mt = S === `compact` ? void 0 : ae.timelineScroll,
    Nt =
      S === `compact`
        ? `flex min-h-0 flex-1 flex-col-reverse`
        : `h-full electron:[scrollbar-gutter:stable_both-edges] pt-(--thread-content-top-inset) [--thread-sticky-header-top:calc(var(--spacing)*8)] browser:[--thread-sticky-header-top:var(--thread-content-top-inset,0px)] [&:has([data-thread-scroll-footer='true']:focus-within)]:[scroll-padding-bottom:0px] flex flex-col-reverse`,
    Pt = S === `compact` && (s ? Ne.compactScrollMask : Ne.compactHeaderScrollFade),
    Ft = ue && `hide-scrollbar`,
    X;
  t[102] !== Nt || t[103] !== Pt || t[104] !== Ft
    ? ((X = g(
        `thread-scroll-container overflow-x-hidden overflow-y-auto [overflow-anchor:none] [scroll-padding-bottom:var(--thread-scroll-padding-bottom,0px)] [container-name:thread-content] [container-type:inline-size] focus:outline-none`,
        Nt,
        Pt,
        Ft,
      )),
      (t[102] = Nt),
      (t[103] = Pt),
      (t[104] = Ft),
      (t[105] = X))
    : (X = t[105]);
  let Z;
  t[106] !== i || t[107] !== S
    ? ((Z = S === `compact` ? null : (0, R.jsx)(ke, { contentX: i })),
      (t[106] = i),
      (t[107] = S),
      (t[108] = Z))
    : (Z = t[108]);
  let Q;
  t[109] === S
    ? (Q = t[110])
    : ((Q = g(
        `relative flex flex-1 shrink-0 flex-col`,
        S === `compact` ? void 0 : [be, `pb-8 has-[[data-compact-status-slot-clearance]]:pb-0`],
      )),
      (t[109] = S),
      (t[110] = Q));
  let $;
  t[111] !== a || t[112] !== Q
    ? (($ = (0, R.jsx)(`div`, {
        "data-mcp-app-portal-target": `true`,
        "data-thread-user-message-navigation-content": !0,
        className: Q,
        children: a,
      })),
      (t[111] = a),
      (t[112] = Q),
      (t[113] = $))
    : ($ = t[113]);
  let It;
  t[114] !== s || t[115] !== S
    ? ((It = s
        ? (0, R.jsx)(`div`, {
            "aria-hidden": !0,
            className: g(
              `sticky bottom-0 z-10 mt-auto w-full shrink-0`,
              S === `compact`
                ? `h-(--thread-scroll-padding-bottom)`
                : `h-[calc(var(--thread-scroll-padding-bottom)-var(--spacing)*4)]`,
            ),
            children: S === `compact` ? null : (0, R.jsx)(ye, {}),
          })
        : null),
      (t[114] = s),
      (t[115] = S),
      (t[116] = It))
    : (It = t[116]);
  let Lt;
  t[117] !== J || t[118] !== Z || t[119] !== $ || t[120] !== null || t[121] !== It
    ? ((Lt = (0, R.jsxs)(c.div, {
        style: J,
        className: `flex min-h-full shrink-0 flex-col justify-start overflow-x-clip`,
        children: [Z, $, null, It],
      })),
      (t[117] = J),
      (t[118] = Z),
      (t[119] = $),
      (t[120] = null),
      (t[121] = It),
      (t[122] = Lt))
    : (Lt = t[122]);
  let Rt = S === `compact` ? null : kt,
    zt;
  t[123] !== ne || t[124] !== Pe || t[125] !== Mt || t[126] !== X || t[127] !== Lt || t[128] !== Rt
    ? ((zt = (0, R.jsxs)(`div`, {
        ref: Pe,
        "data-pip-anchor-host": ne,
        ...Mt,
        className: X,
        children: [Lt, Rt],
      })),
      (t[123] = ne),
      (t[124] = Pe),
      (t[125] = Mt),
      (t[126] = X),
      (t[127] = Lt),
      (t[128] = Rt),
      (t[129] = zt))
    : (zt = t[129]);
  let Bt = S === `compact` ? kt : null,
    Vt;
  t[130] !== Y || t[131] !== zt || t[132] !== Bt
    ? ((Vt = (0, R.jsxs)(`div`, { className: Y, children: [zt, Bt] })),
      (t[130] = Y),
      (t[131] = zt),
      (t[132] = Bt),
      (t[133] = Vt))
    : (Vt = t[133]);
  let Ht;
  return (
    t[134] !== wt || t[135] !== Vt
      ? ((Ht = (0, R.jsx)(Ce, { value: wt, children: Vt })),
        (t[134] = wt),
        (t[135] = Vt),
        (t[136] = Ht))
      : (Ht = t[136]),
    Ht
  );
}
function Ie() {
  return 0;
}
function Le(e, t) {
  if (e.defaultPrevented || e.repeat) return null;
  let n = e.target;
  if (
    n instanceof HTMLElement &&
    n !== t &&
    (n.isContentEditable ||
      n.closest(`input, select, textarea`) != null ||
      ((e.key === ` ` || e.key === `Spacebar`) && n.closest(`button, [role="button"]`) != null))
  )
    return null;
  switch (e.key) {
    case `ArrowUp`:
    case `Home`:
    case `PageUp`:
      return `away`;
    case ` `:
    case `Spacebar`:
      return e.shiftKey ? `away` : `toward`;
    case `ArrowDown`:
    case `End`:
    case `PageDown`:
      return `toward`;
    default:
      return null;
  }
}
function Re(e) {
  return v(e) <= 24;
}
function ze(e, t) {
  return Be(e) <= (t ? Math.max(e.clientHeight, We) : We);
}
function Be(e) {
  return e.scrollHeight - e.clientHeight - v(e);
}
function Ve(e, t) {
  return e.deltaMode === z ? e.deltaY * qe : e.deltaMode === Je ? e.deltaY * t : e.deltaY;
}
var He,
  L,
  R,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  z,
  Je,
  Ye = e(() => {
    ((He = x()),
      ve(),
      S(),
      (L = t(i(), 1)),
      w(),
      se(),
      j(),
      f(),
      y(),
      me(),
      ie(),
      we(),
      T(),
      xe(),
      s(),
      P(),
      Pe(),
      (R = le()),
      (Ue = 260),
      (We = 64),
      (Ge = 8),
      (Ke = 1e3),
      (qe = 16),
      (z = 1),
      (Je = 2));
  });
export { Ye as n, we as r, Fe as t };
//# sourceMappingURL=thread-scroll-layout-4583603e4217.js.map
