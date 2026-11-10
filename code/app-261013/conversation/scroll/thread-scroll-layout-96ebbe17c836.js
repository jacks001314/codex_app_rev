import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FD as t,
  Ixt as n,
  JR as r,
  ND as i,
  Pxt as a,
  UD as o,
  VDt as s,
  Vxt as c,
  YR as l,
  _Mt as u,
  _wt as d,
  bz as f,
  dwt as p,
  gMt as m,
  gwt as h,
  jDt as ee,
  uwt as te,
  vzt as ne,
  xMt as re,
  xz as g,
  yzt as _,
} from "./app-shared-bbfeca5e5737.js";
import {
  ATn as ie,
  Cwr as ae,
  FCr as oe,
  ICr as se,
  JCr as v,
  LCr as ce,
  MTn as le,
  NCr as ue,
  Q$n as de,
  RCr as fe,
  VCr as pe,
  X$n as me,
  Y8t as y,
  Z$n as b,
  e1n as he,
  gwr as x,
  hA as ge,
  jCr as S,
  kTn as _e,
  mA as ve,
  q$n as ye,
  q8t as C,
} from "./app-initial-5851df3f6cb1.js";
import { n as be, t as xe } from "./frame-container-41423da37713.js";
import { n as w, r as T, t as Se } from "./thread-scroll-controller-context-value-f766898c7055.js";
function E(e, t) {
  let n = e.closest(`[data-app-shell-main-content-layout]`),
    r = (
      n?.closest(`[data-app-shell-page-surface]`) ?? n?.closest(`[data-app-shell-main-surface]`)
    )?.querySelector(`header[data-app-shell-header-layout]`);
  if (n == null || r == null) return;
  let i = null,
    a = !0,
    o = new Set(),
    s = () => {
      if (((i = null), a)) {
        a = !1;
        let e = new Set(r.querySelectorAll(Ce));
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
var Ce;
function we() {
  return (we = e(() => {
    Ce = `[data-app-shell-header-obstacle], [data-app-shell-header-toolbar] > *, [data-app-shell-page-header] > :not([data-app-shell-header-toolbar])`;
  }))();
}
var D, Te;
function O() {
  return (O = e(() => {
    ((D = `_Probe_18cce_1`), (Te = { Probe: D }));
  }))();
}
function Ee(e) {
  let t = (0, k.c)(5),
    { contentX: n } = e,
    r = (0, Oe.useContext)(C),
    i;
  t[0] !== n || t[1] !== r
    ? ((i = r == null ? null : (0, ke.jsx)(De, { contentX: n })), (t[0] = n), (t[1] = r), (t[2] = i))
    : (i = t[2]);
  let a;
  return (
    t[3] === i
      ? (a = t[4])
      : ((a = (0, ke.jsx)(`div`, { className: `contents`, children: i })), (t[3] = i), (t[4] = a)),
    a
  );
}
function De(e) {
  let t = (0, k.c)(6),
    { contentX: r } = e,
    i = n(x),
    a = c(pe),
    o;
  t[0] !== r || t[1] !== i
    ? ((o = (e) => {
        if (e == null) return;
        let t = E(e, (e) => {
          i.set(S, e);
        });
        if (t == null) return;
        let n = i.watch((e) => {
            let { get: n } = e;
            (n(ue), n(oe), n(se), n(ce), n(v), t.updateHeader());
          }),
          a = r?.on(`change`, t.schedule);
        return () => {
          (n(), a?.(), t.dispose());
        };
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = o))
    : (o = t[2]);
  let s = o,
    l;
  return (
    t[3] !== a || t[4] !== s
      ? ((l =
          a === `thread-edge-scroll`
            ? (0, ke.jsx)(`div`, { ref: s, className: Te.Probe, "aria-hidden": !0 })
            : null),
        (t[3] = a),
        (t[4] = s),
        (t[5] = l))
      : (l = t[5]),
    l
  );
}
var k, Oe, ke;
function A() {
  return (A = e(() => {
    ((k = ne()), a(), (Oe = _()), ae(), y(), fe(), we(), O(), (ke = re()));
  }))();
}
var j;
function M() {
  return (M = e(() => {
    j = class {
      current = null;
      listeners = new Set();
      get = () => this.current?.spacer;
      holdViewport = () => {
        this.current?.holdViewport?.();
      };
      subscribe = (e) => (
        this.listeners.add(e),
        () => {
          this.listeners.delete(e);
        }
      );
      register = (e) => {
        let t = { spacer: e, holdViewport: e?.holdViewport };
        return (
          (this.current = t),
          queueMicrotask(this.notify),
          {
            clear: () => {
              this.current === t && t.spacer != null && ((t.spacer = null), this.notify());
            },
            notifyHeightChange: () => {
              this.current === t && this.notify();
            },
            dispose: () => {
              this.current === t && ((this.current = null), queueMicrotask(this.notify));
            },
          }
        );
      };
      notify = () => {
        for (let e of this.listeners) e();
      };
    };
  }))();
}
function Ae(e) {
  let t = (0, je.c)(13),
    { isWorking: n } = e,
    r = n !== void 0 && n,
    i = s(),
    a = T(),
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = () => {
        let e = a.getResponseSpacer()?.getHeightPx();
        return e == null ? a.isScrolledFromBottom : a.getLastScrollDistanceFromBottomPx() > e + 24;
      }),
      (t[0] = a),
      (t[1] = o));
  let c = o,
    l;
  t[2] === a
    ? (l = t[3])
    : ((l = (e) => {
        let t = a.addScrollListener(e),
          n = a.responseSpacerController.subscribe(e);
        return () => {
          (t(), n());
        };
      }),
      (t[2] = a),
      (t[3] = l));
  let u = (0, N.useSyncExternalStore)(l, c, c),
    d;
  t[4] === a
    ? (d = t[5])
    : ((d = () => {
        let e = a.getResponseSpacer();
        e == null ? a.scrollToBottom() : e.scrollToBottom();
      }),
      (t[4] = a),
      (t[5] = d));
  let f = d,
    p;
  t[6] === i
    ? (p = t[7])
    : ((p = i.formatMessage({
        id: `localConversation.scrollToBottomButton`,
        defaultMessage: `Scroll to bottom`,
        description: `Accessible label for the button that scrolls a conversation to its latest message`,
      })),
      (t[6] = i),
      (t[7] = p));
  let m = u && r,
    h;
  return (
    t[8] !== f || t[9] !== u || t[10] !== p || t[11] !== m
      ? ((h = (0, P.jsx)(`div`, {
          className: `relative h-0`,
          children: (0, P.jsx)(ve, {
            className: `bottom-[calc(100%+6*var(--spacing))]`,
            label: p,
            onClick: f,
            show: u,
            showWorkingDots: m,
          }),
        })),
        (t[8] = f),
        (t[9] = u),
        (t[10] = p),
        (t[11] = m),
        (t[12] = h))
      : (h = t[12]),
    h
  );
}
var je, N, P;
function Me() {
  return (Me = e(() => {
    ((je = ne()), (N = _()), ee(), ge(), w(), (P = re()));
  }))();
}
var Ne, Pe, Fe, F, Ie;
function Le() {
  return (Le = e(() => {
    ((Ne = `_homeFooter_121j8_2`),
      (Pe = `_compactHeaderScrollFade_121j8_2`),
      (Fe = `_compactScrollMask_121j8_2`),
      (F = `_transcriptContent_121j8_2`),
      (Ie = { homeFooter: Ne, compactHeaderScrollFade: Pe, compactScrollMask: Fe, transcriptContent: F }));
  }))();
}
function I(e) {
  let n = (0, Ge.c)(156),
    {
      active: r,
      autoLoadHistory: i,
      contentX: a,
      children: c,
      footer: u,
      composerFade: f,
      footerLeadingContent: h,
      footerPlacement: ee,
      hideScrollbar: te,
      loadPastHiddenHistoryPages: ne,
      onScroll: re,
      onUserScrollToTop: _,
      initialOffset: ae,
      presentation: oe,
      preserveViewportOnContentGrowth: se,
      renderLayout: v,
      responseSpacer: ce,
      remoteHostedPIPAnchorHostId: le,
      scrollToBottomButton: ue,
      scrollOrigin: fe,
      threadEndContent: pe,
      transcriptWidth: me,
    } = e,
    y = r === void 0 || r,
    x = i === void 0 || i,
    ge = f === void 0 || f,
    S = ee === void 0 ? `bottom` : ee,
    ve = te !== void 0 && te,
    C = ne !== void 0 && ne,
    xe = ae === void 0 ? 0 : ae,
    w = oe === void 0 ? `default` : oe,
    T = se !== void 0 && se,
    E = fe === void 0 ? `bottom` : fe,
    Ce = me === void 0 ? `constrained` : me,
    we = s(),
    D = xe != null && xe > 24 ? xe : 0,
    Te = l(),
    O;
  n[0] === a ? (O = n[1]) : ((O = () => `${Math.abs(a?.get() ?? 0)}px`), (n[0] = a), (n[1] = O));
  let De = p(O),
    k = (0, L.useRef)(null),
    [Oe, ke] = (0, L.useState)(!1),
    [A] = (0, L.useState)(Ve),
    j;
  n[2] !== ce || n[3] !== A
    ? ((j = () => {
        if (ce === null) return null;
        let e = A.get();
        return e === void 0 ? ce : e;
      }),
      (n[2] = ce),
      (n[3] = A),
      (n[4] = j))
    : (j = n[4]);
  let M = j,
    je = (0, L.useRef)(null),
    N = (0, L.useRef)(D),
    P = (0, L.useRef)(null),
    Me = (0, L.useRef)(null),
    Ne = (0, L.useRef)(null),
    Pe;
  n[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((Pe = new Set()), (n[5] = Pe)) : (Pe = n[5]);
  let Fe = (0, L.useRef)(Pe),
    F;
  n[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((F = new Set()), (n[6] = F)) : (F = n[6]);
  let Le = (0, L.useRef)(F),
    I = (0, L.useRef)(null),
    Xe = D <= 24,
    Ze;
  n[7] === Xe ? (Ze = n[8]) : ((Ze = { bottom: Xe, top: !0 }), (n[7] = Xe), (n[8] = Ze));
  let z = (0, L.useRef)(Ze),
    Qe = (0, L.useRef)(!1),
    B = (0, L.useRef)(null),
    $e = (0, L.useRef)(!1),
    et = (0, L.useRef)(!1),
    V = (0, L.useRef)(null),
    tt;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((tt = (e) => {
        ((k.current = e), (P.current = null));
      }),
      (n[9] = tt))
    : (tt = n[9]);
  let nt = tt,
    rt;
  n[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((rt = () => k.current), (n[10] = rt)) : (rt = n[10]);
  let it = g(rt),
    at;
  n[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((at = () => N.current), (n[11] = at)) : (at = n[11]);
  let ot = at,
    st;
  n[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = (e) => (
        Fe.current.add(e),
        e(N.current),
        () => {
          Fe.current.delete(e);
        }
      )),
      (n[12] = st))
    : (st = n[12]);
  let ct = g(st),
    lt;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (e) => (
        Le.current.add(e),
        () => {
          Le.current.delete(e);
        }
      )),
      (n[13] = lt))
    : (lt = n[13]);
  let ut = g(lt),
    dt;
  n[14] !== y || n[15] !== M || n[16] !== re || n[17] !== E
    ? ((dt = (e) => {
        if (!y) return;
        (P.current?.actualDistanceFromBottomPx !== e && (P.current = null),
          (N.current = e),
          E === `bottom` && (Me.current = Math.max(0, e - (M()?.getHeightPx() ?? 0))));
        let t = e <= 24;
        re?.(e, t);
        for (let t of Fe.current) t(e);
        ke(!t);
      }),
      (n[14] = y),
      (n[15] = M),
      (n[16] = re),
      (n[17] = E),
      (n[18] = dt))
    : (dt = n[18]);
  let H = g(dt),
    ft;
  n[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = () => {
        (($e.current = !1),
          V.current != null && (window.cancelAnimationFrame(V.current), (V.current = null)));
      }),
      (n[19] = ft))
    : (ft = n[19]);
  let U = g(ft),
    pt;
  n[20] !== U || n[21] !== A || n[22] !== E
    ? ((pt = () => {
        (U(), (z.current[E] = !1), A.holdViewport());
      }),
      (n[20] = U),
      (n[21] = A),
      (n[22] = E),
      (n[23] = pt))
    : (pt = n[23]);
  let mt = g(pt),
    ht;
  n[24] === E ? (ht = n[25]) : ((ht = () => z.current[E]), (n[24] = E), (n[25] = ht));
  let W = g(ht),
    gt;
  n[26] === E
    ? (gt = n[27])
    : ((gt = (e, t) => {
        let n = k.current;
        E === `top` && n != null
          ? (z.current[E] = n.scrollHeight - n.clientHeight - e <= 24)
          : (z.current[E] = e < t && e <= 24);
        for (let n of Le.current) n(e, t);
      }),
      (n[26] = E),
      (n[27] = gt));
  let G = g(gt),
    _t;
  n[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_t = () => {
        ((I.current = null),
          (P.current = null),
          ($e.current = !0),
          V.current != null && (window.cancelAnimationFrame(V.current), (V.current = null)));
      }),
      (n[28] = _t))
    : (_t = n[28]);
  let vt = g(_t),
    yt;
  n[29] === H
    ? (yt = n[30])
    : ((yt = (e, t) => {
        let n = k.current;
        if (n == null) return;
        let r = Math.max(0, t(n));
        r !== b(n) && (I.current = null);
        let i = Math.max(0, n.scrollHeight - n.clientHeight - r);
        n.scrollTop !== i && n.scrollTo({ behavior: e, top: i });
        let a = b(n);
        ((P.current =
          e === `instant` && a !== r && r > 0 && r < n.scrollHeight - n.clientHeight
            ? { requestedDistanceFromBottomPx: r, actualDistanceFromBottomPx: a }
            : null),
          H(a));
      }),
      (n[29] = H),
      (n[30] = yt));
  let K = g(yt),
    bt;
  n[31] !== U || n[32] !== G || n[33] !== E || n[34] !== K
    ? ((bt = (e, t, n) => {
        let r = n === void 0 ? `system` : n,
          i = N.current,
          a = Math.max(0, e);
        (a > 24 && U(), a === 0 && E === `bottom` && (z.current[E] = !0), K(t, () => a));
        let o = N.current;
        r === `user` && o !== i && G(o, i);
      }),
      (n[31] = U),
      (n[32] = G),
      (n[33] = E),
      (n[34] = K),
      (n[35] = bt))
    : (bt = n[35]);
  let q = g(bt),
    xt;
  n[36] === K
    ? (xt = n[37])
    : ((xt = (e) => {
        $e.current || K(`instant`, () => e);
      }),
      (n[36] = K),
      (n[37] = xt));
  let J = g(xt),
    St;
  n[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((St = (e) => {
        et.current = e;
      }),
      (n[38] = St))
    : (St = n[38]);
  let Ct = g(St),
    wt;
  n[39] !== x || n[40] !== C || n[41] !== _
    ? ((wt = async () => {
        if (Qe.current || _ == null) return;
        let e = B.current;
        ((Qe.current = !0),
          await (async () => {
            try {
              for (; B.current === e && k.current != null && We(k.current, C);) {
                let e = k.current.scrollHeight;
                if ((await _()) === `stop` || !x) break;
                let t = k.current;
                if (t != null && t.scrollHeight - t.clientHeight > qe && (!C || t.scrollHeight > e)) break;
              }
            } catch {}
          })().finally(() => {
            ((Qe.current = !1), B.current !== e && B.current?.());
          }));
      }),
      (n[39] = x),
      (n[40] = C),
      (n[41] = _),
      (n[42] = wt))
    : (wt = n[42]);
  let Y = g(wt),
    Tt,
    Et;
  (n[43] !== y || n[44] !== x || n[45] !== Y || n[46] !== _
    ? ((Tt = () => {
        let e = k.current;
        if (!y || !x || e == null || _ == null) return;
        let t,
          n,
          r = () => {
            let i = e.clientHeight,
              a = e.scrollHeight;
            B.current !== r ||
              k.current !== e ||
              i <= 0 ||
              a - i > qe ||
              Qe.current ||
              ((t !== i || n !== a) && ((t = i), (n = a), Y()));
          };
        B.current = r;
        let i = new ResizeObserver(r);
        i.observe(e);
        let a = e.firstElementChild;
        a != null && i.observe(a);
        let o = window.requestAnimationFrame(r);
        return () => {
          (B.current === r && (B.current = null), window.cancelAnimationFrame(o), i.disconnect());
        };
      }),
      (Et = [y, x, Y, _]),
      (n[43] = y),
      (n[44] = x),
      (n[45] = Y),
      (n[46] = _),
      (n[47] = Tt),
      (n[48] = Et))
    : ((Tt = n[47]), (Et = n[48])),
    (0, L.useEffect)(Tt, Et));
  let Dt;
  n[49] !== U || n[50] !== Te || n[51] !== E || n[52] !== K || n[53] !== vt
    ? ((Dt = () => {
        let e = k.current;
        if (e == null) return;
        z.current[E] = E === `bottom`;
        let t = b(e);
        if (Te || t <= 24) {
          (K(`instant`, Be), U());
          return;
        }
        vt();
        let n = performance.now(),
          r = (e) => {
            let i = k.current;
            if (i == null) {
              U();
              return;
            }
            let a = Math.min(1, (e - n) / Ke),
              o = 1 - (1 - a) ** 3;
            if ((he(i, t * (1 - o)), a < 1 && !Ue(i))) {
              V.current = window.requestAnimationFrame(r);
              return;
            }
            (K(`instant`, ze), U());
          };
        V.current = window.requestAnimationFrame(r);
      }),
      (n[49] = U),
      (n[50] = Te),
      (n[51] = E),
      (n[52] = K),
      (n[53] = vt),
      (n[54] = Dt))
    : (Dt = n[54]);
  let Ot = g(Dt),
    kt,
    At;
  (n[55] !== y || n[56] !== U || n[57] !== M || n[58] !== H || n[59] !== D || n[60] !== E
    ? ((kt = () => {
        let e = Ne.current;
        Ne.current = { active: y, scrollOrigin: E };
        let t = k.current;
        if (!y || t == null) {
          U();
          return;
        }
        if (e == null || e.active !== y || e.scrollOrigin !== E) {
          (U(), (P.current = null));
          let n = e != null && (!e.active || e.scrollOrigin === `top`),
            r = D;
          if (E === `top`) r = Math.max(0, t.scrollHeight - t.clientHeight);
          else if (n) {
            let e = Me.current;
            r = e == null ? D : e + (M()?.getHeightPx() ?? 0);
          }
          (he(t, r), H(b(t)), E === `top` && (z.current.top = !0));
        }
      }),
      (At = [y, U, H, M, D, E]),
      (n[55] = y),
      (n[56] = U),
      (n[57] = M),
      (n[58] = H),
      (n[59] = D),
      (n[60] = E),
      (n[61] = kt),
      (n[62] = At))
    : ((kt = n[61]), (At = n[62])),
    (0, L.useLayoutEffect)(kt, At));
  let jt, Mt;
  (n[63] !== y || n[64] !== J || n[65] !== M || n[66] !== T || n[67] !== E || n[68] !== q || n[69] !== W
    ? ((jt = () => {
        let e = k.current;
        if (!y || e == null) return;
        let t = e.querySelector(`[data-thread-user-message-navigation-content]`);
        if (t == null) return;
        let n = Math.max(0, t.scrollHeight - (M()?.getHeightPx() ?? 0)),
          r = e.clientHeight,
          i = e.scrollTop,
          a = new ResizeObserver(() => {
            let a = Math.abs(i - e.scrollTop) > 1;
            i = e.scrollTop;
            let o = r !== e.clientHeight;
            r = e.clientHeight;
            let s = M(),
              c = s?.getHeightPx() ?? 0,
              l = Math.max(0, t.scrollHeight - c),
              u = l - n;
            n = l;
            let d = b(e);
            if (E === `top` && z.current[E]) {
              q(Math.max(0, e.scrollHeight - e.clientHeight), `instant`);
              return;
            }
            if (E === `bottom` && !T) {
              W() &&
                N.current === 0 &&
                d > 0 &&
                !a &&
                I.current?.direction !== `away` &&
                (J(0), (i = e.scrollTop));
              return;
            }
            if (u <= 0 && !o) return;
            s?.consumeGrowth?.(Math.max(0, u));
            let f = s?.getHeightPx() ?? 0,
              p = d + f - c;
            (W() && (p = Math.min(p, f)), J(p));
          });
        return (
          (E === `top` || T) && a.observe(t),
          a.observe(e),
          E === `bottom` && !T && e.firstElementChild != null && a.observe(e.firstElementChild),
          () => {
            a.disconnect();
          }
        );
      }),
      (Mt = [y, J, T, M, E, q, W]),
      (n[63] = y),
      (n[64] = J),
      (n[65] = M),
      (n[66] = T),
      (n[67] = E),
      (n[68] = q),
      (n[69] = W),
      (n[70] = jt),
      (n[71] = Mt))
    : ((jt = n[70]), (Mt = n[71])),
    (0, L.useLayoutEffect)(jt, Mt));
  let Nt;
  n[72] === U
    ? (Nt = n[73])
    : ((Nt = (e) => {
        let t = k.current;
        if (t == null) return;
        (U(), (P.current = null));
        let n = e === `away` ? de(t) > 0 : b(t) > 0;
        I.current = n ? { direction: e, lastAtMs: performance.now() } : null;
      }),
      (n[72] = U),
      (n[73] = Nt));
  let X = g(Nt),
    Pt;
  n[74] !== Y || n[75] !== X
    ? ((Pt = (e) => {
        let t = e.currentTarget;
        e.defaultPrevented ||
          !e.nativeEvent.composedPath().includes(t) ||
          e.ctrlKey ||
          e.shiftKey ||
          Math.abs(e.deltaY) <= Math.abs(e.deltaX) ||
          (e.deltaY < 0 && de(t) <= 0 && Y(), X(e.deltaY < 0 ? `away` : `toward`));
      }),
      (n[74] = Y),
      (n[75] = X),
      (n[76] = Pt))
    : (Pt = n[76]);
  let Ft = g(Pt),
    It;
  n[77] !== Y || n[78] !== X
    ? ((It = (e) => {
        let t = e.currentTarget;
        if (!e.nativeEvent.composedPath().includes(t)) return;
        let n = He(e.nativeEvent, t);
        n != null && (X(n), n === `away` && de(t) <= 0 && Y());
      }),
      (n[77] = Y),
      (n[78] = X),
      (n[79] = It))
    : (It = n[79]);
  let Lt = g(It),
    Rt,
    zt;
  (n[80] !== y || n[81] !== U || n[82] !== Y || n[83] !== C || n[84] !== H || n[85] !== G || n[86] !== X
    ? ((Rt = () => {
        let e = k.current;
        if (!y || e == null) return;
        let t = new AbortController(),
          n = { passive: !0, signal: t.signal },
          r = null,
          i = null,
          a = () => {
            let t = b(e);
            (t <= 24 && U(), H(t));
          },
          o = () => {
            let t = N.current,
              n = i;
            if (n != null) {
              i = null;
              let r = b(e);
              e.scrollHeight === n.scrollHeightPx &&
                e.scrollTop !== n.scrollTopPx &&
                r !== t &&
                (I.current = { direction: r > t ? `away` : `toward`, lastAtMs: performance.now() });
            }
            let r = I.current;
            if (r == null) {
              a();
              return;
            }
            let o = performance.now();
            if (o - r.lastAtMs > Ye) {
              ((I.current = null), a());
              return;
            }
            a();
            let s = b(e);
            (s > t ? `away` : s < t ? `toward` : null) === r.direction &&
              ((r.lastAtMs = o), s > t && We(e, C) && Y(), G(s, t), s <= 24 && (I.current = null));
          },
          s = (t) => {
            ((i = null),
              (I.current = null),
              t.pointerType === `mouse` &&
                t.target === e &&
                (U(),
                (P.current = null),
                (i = { scrollHeightPx: e.scrollHeight, scrollTopPx: e.scrollTop })));
          },
          c = () => {
            i = null;
          },
          l = (e) => {
            r = e.touches.length === 1 ? e.touches[0] : null;
          },
          u = (t) => {
            let n = t.touches.length === 1 ? t.touches[0] : null;
            if (r == null || n == null || n.identifier !== r.identifier) {
              r = null;
              return;
            }
            let i = n.clientX - r.clientX,
              a = n.clientY - r.clientY;
            Math.max(Math.abs(i), Math.abs(a)) < Je ||
              ((r = null),
              Math.abs(a) > Math.abs(i) && X(a > 0 ? `away` : `toward`),
              a > Math.abs(i) && de(e) <= 0 && Y());
          },
          d = () => {
            r = null;
          };
        return (
          e.addEventListener(`pointerdown`, s, n),
          e.addEventListener(`pointerup`, c, n),
          e.addEventListener(`pointercancel`, c, n),
          e.addEventListener(`touchstart`, l, n),
          e.addEventListener(`touchmove`, u, n),
          e.addEventListener(`touchend`, d, n),
          e.addEventListener(`touchcancel`, d, n),
          e.addEventListener(`scroll`, o, n),
          () => {
            t.abort();
          }
        );
      }),
      (zt = [y, U, C, Y, H, G, X]),
      (n[80] = y),
      (n[81] = U),
      (n[82] = Y),
      (n[83] = C),
      (n[84] = H),
      (n[85] = G),
      (n[86] = X),
      (n[87] = Rt),
      (n[88] = zt))
    : ((Rt = n[87]), (zt = n[88])),
    (0, L.useEffect)(Rt, zt));
  let Bt, Vt;
  (n[89] === U
    ? ((Bt = n[90]), (Vt = n[91]))
    : ((Bt = () => () => {
        U();
      }),
      (Vt = [U]),
      (n[89] = U),
      (n[90] = Bt),
      (n[91] = Vt)),
    (0, L.useEffect)(Bt, Vt));
  let Ht;
  n[92] !== ct ||
  n[93] !== ut ||
  n[94] !== J ||
  n[95] !== M ||
  n[96] !== it ||
  n[97] !== mt ||
  n[98] !== Oe ||
  n[99] !== A ||
  n[100] !== Ot ||
  n[101] !== q ||
  n[102] !== Ct ||
  n[103] !== W
    ? ((Ht = {
        addScrollListener: ct,
        addUserScrollListener: ut,
        compensateScrollToDistanceFromBottomPx: J,
        getLastScrollDistanceFromBottomPx: ot,
        getUnroundedScrollDistanceFromBottomPx(e) {
          let t = P.current;
          return t?.actualDistanceFromBottomPx === e ? t.requestedDistanceFromBottomPx : e;
        },
        getScrollElement: it,
        getResponseSpacer: M,
        responseSpacerController: A,
        isScrolledFromBottom: Oe,
        holdViewport: mt,
        shouldFollowContentGrowth: W,
        scrollToBottom: Ot,
        scrollToDistanceFromBottomPx: q,
        setFooterResizeViewportPreserveDisabled: Ct,
      }),
      (n[92] = ct),
      (n[93] = ut),
      (n[94] = J),
      (n[95] = M),
      (n[96] = it),
      (n[97] = mt),
      (n[98] = Oe),
      (n[99] = A),
      (n[100] = Ot),
      (n[101] = q),
      (n[102] = Ct),
      (n[103] = W),
      (n[104] = Ht))
    : (Ht = n[104]);
  let Ut = Ht,
    Wt;
  n[105] !== w || n[106] !== H || n[107] !== K
    ? ((Wt = (e) => {
        let { height: t } = o(e),
          n = k.current;
        if (n == null || (je.current?.scrollElement === n ? je.current.heightPx : null) === t) return;
        let r = Ue(n);
        (n.style.setProperty(`--thread-scroll-padding-bottom`, `${t + (w === `compact` ? 0 : 16)}px`),
          (je.current = { scrollElement: n, heightPx: t }),
          !($e.current || et.current) && (r ? K(`instant`, Re) : H(b(n))));
      }),
      (n[105] = w),
      (n[106] = H),
      (n[107] = K),
      (n[108] = Wt))
    : (Wt = n[108]);
  let Gt = t(Wt),
    Kt;
  n[109] !== a || n[110] !== De
    ? ((Kt = a == null ? void 0 : { x: a, "--thread-wide-block-inline-shift": De }),
      (n[109] = a),
      (n[110] = De),
      (n[111] = Kt))
    : (Kt = n[111]);
  let qt = Kt,
    Jt;
  n[112] !== y || n[113] !== S || n[114] !== E || n[115] !== ue
    ? ((Jt = !y || S === `home` || E === `top` || ue == null ? null : (0, R.jsx)(Ae, { ...ue })),
      (n[112] = y),
      (n[113] = S),
      (n[114] = E),
      (n[115] = ue),
      (n[116] = Jt))
    : (Jt = n[116]);
  let Z = Jt,
    Q = v == null && !!u,
    Yt;
  n[117] === w
    ? (Yt = n[118])
    : ((Yt = m(
        `relative z-10 flex flex-col *:pointer-events-auto`,
        w === `compact` ? void 0 : [_e, `extension:px-2`],
      )),
      (n[117] = w),
      (n[118] = Yt));
  let Xt = Yt,
    Zt;
  n[119] !== qt ||
  n[120] !== u ||
  n[121] !== Xt ||
  n[122] !== h ||
  n[123] !== S ||
  n[124] !== Gt ||
  n[125] !== Q ||
  n[126] !== w ||
  n[127] !== Z
    ? ((Zt = Q
        ? (0, R.jsxs)(d.div, {
            ref: Gt,
            className: m(
              `pointer-events-none absolute inset-x-0 z-20 has-[[data-thread-focus-mode]]:bg-surface`,
              S === `home` ? [`max-sm:bottom-0`, `home-composer-anchor`, Ie.homeFooter] : `bottom-0`,
              { compact: `w-full shrink-0`, panel: `pb-3`, default: `pb-(--thread-composer-bottom-inset)` }[
                w
              ],
            ),
            "data-thread-scroll-footer": `true`,
            style: qt,
            children: [
              w === `compact` || S === `home` ? null : (0, R.jsx)(ie, { part: `surface` }),
              h == null
                ? null
                : (0, R.jsxs)(`div`, {
                    className: `relative z-10 *:pointer-events-auto`,
                    "data-pip-obstacle": `thread-footer-leading`,
                    children: [(0, R.jsx)(`div`, { className: Xt, children: Z }), h],
                  }),
              (0, R.jsxs)(`div`, {
                className: Xt,
                "data-pip-obstacle": `thread-footer`,
                children: [h == null ? Z : null, u],
              }),
            ],
          })
        : null),
      (n[119] = qt),
      (n[120] = u),
      (n[121] = Xt),
      (n[122] = h),
      (n[123] = S),
      (n[124] = Gt),
      (n[125] = Q),
      (n[126] = w),
      (n[127] = Z),
      (n[128] = Zt))
    : (Zt = n[128]);
  let Qt = Zt,
    $t;
  n[129] !== y ||
  n[130] !== c ||
  n[131] !== ge ||
  n[132] !== qt ||
  n[133] !== a ||
  n[134] !== Qt ||
  n[135] !== h ||
  n[136] !== S ||
  n[137] !== Lt ||
  n[138] !== Ft ||
  n[139] !== ve ||
  n[140] !== Q ||
  n[141] !== we ||
  n[142] !== w ||
  n[143] !== le ||
  n[144] !== pe ||
  n[145] !== Ce
    ? (($t = function () {
        return (0, R.jsxs)(`div`, {
          "data-request-input-activity-root": !0,
          className: m(
            `group/thread-scroll-layout has-[[data-composer-expand-toggle]]:[container-type:size]`,
            w === `compact` ? `relative flex min-h-0 flex-1 flex-col` : `relative h-full flex-1`,
          ),
          children: [
            (0, R.jsxs)(`div`, {
              ref: nt,
              "aria-label": y
                ? we.formatMessage({
                    id: `threadScrollLayout.conversationLabel`,
                    defaultMessage: `Conversation`,
                    description: `Accessible name of the scrollable conversation transcript`,
                  })
                : void 0,
              tabIndex: y ? 0 : void 0,
              "data-pip-anchor-host": le,
              ...(w === `compact` ? void 0 : ye.timelineScroll),
              className: m(
                `thread-scroll-container overflow-x-hidden overflow-y-auto overscroll-y-contain browser:overscroll-y-auto group-has-[[data-expanded-composer]]/thread-scroll-layout:overflow-y-hidden [overflow-anchor:none] [scroll-padding-bottom:var(--thread-scroll-padding-bottom,0px)] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset`,
                w === `compact`
                  ? `flex min-h-0 flex-1`
                  : `h-full electron:[scrollbar-gutter:stable_both-edges] [&:has([data-thread-scroll-footer='true']:focus-within)]:[scroll-padding-bottom:0px] flex`,
                `flex-col`,
                w === "default" &&
                  `pt-(--thread-content-top-inset) [--thread-sticky-header-top:calc(var(--spacing)*8)] browser:[--thread-sticky-header-top:var(--thread-content-top-inset,0px)]`,
                w === `compact` && (Q ? Ie.compactScrollMask : Ie.compactHeaderScrollFade),
                ve && `hide-scrollbar`,
              ),
              onKeyDown: y ? Lt : void 0,
              onWheel: y ? Ft : void 0,
              role: y ? `region` : `presentation`,
              children: [
                (0, R.jsxs)(d.div, {
                  style: qt,
                  className: `[container-type:inline-size] flex min-h-full shrink-0 flex-col justify-start overflow-x-clip [container-name:thread-content]`,
                  children: [
                    w === "default" ? (0, R.jsx)(Ee, { contentX: a }) : null,
                    (0, R.jsx)(`div`, {
                      "data-mcp-app-portal-target": `true`,
                      ref: be,
                      "data-thread-user-message-navigation-content": !0,
                      className: m(
                        `relative flex flex-1 shrink-0 flex-col`,
                        Ie.transcriptContent,
                        w === `compact`
                          ? void 0
                          : [
                              Ce === `full` ? `w-full px-toolbar` : _e,
                              `pb-8 has-[[data-compact-status-slot-clearance]]:pb-0`,
                            ],
                      ),
                      children: c,
                    }),
                    pe
                      ? (0, R.jsx)(`div`, {
                          className: `z-20 mt-auto grid`,
                          children: (0, R.jsx)(`div`, {
                            className: `sticky bottom-0 min-w-0 self-end`,
                            children: pe,
                          }),
                        })
                      : null,
                    Q
                      ? (0, R.jsx)(`div`, {
                          "aria-hidden": !0,
                          className: m(
                            `pointer-events-none sticky bottom-0 z-10 mt-auto w-full shrink-0`,
                            w === `compact`
                              ? `h-(--thread-scroll-padding-bottom)`
                              : `h-[calc(var(--thread-scroll-padding-bottom)-var(--spacing)*4)]`,
                          ),
                          children:
                            w !== `compact` && S !== `home` && (ge || h != null)
                              ? (0, R.jsx)(ie, { part: `fade` })
                              : null,
                        })
                      : null,
                  ],
                }),
                w === `compact` ? null : Qt,
              ],
            }),
            w === `compact` ? Qt : null,
          ],
        });
      }),
      (n[129] = y),
      (n[130] = c),
      (n[131] = ge),
      (n[132] = qt),
      (n[133] = a),
      (n[134] = Qt),
      (n[135] = h),
      (n[136] = S),
      (n[137] = Lt),
      (n[138] = Ft),
      (n[139] = ve),
      (n[140] = Q),
      (n[141] = we),
      (n[142] = w),
      (n[143] = le),
      (n[144] = pe),
      (n[145] = Ce),
      (n[146] = $t))
    : ($t = n[146]);
  let en = $t,
    $;
  n[147] !== u || n[148] !== h || n[149] !== en || n[150] !== v || n[151] !== Z
    ? (($ =
        v == null
          ? en()
          : v({ content: en(), footer: u ? (0, R.jsxs)(R.Fragment, { children: [Z, h, u] }) : null })),
      (n[147] = u),
      (n[148] = h),
      (n[149] = en),
      (n[150] = v),
      (n[151] = Z),
      (n[152] = $))
    : ($ = n[152]);
  let tn;
  return (
    n[153] !== Ut || n[154] !== $
      ? ((tn = (0, R.jsx)(Se, { value: Ut, children: $ })), (n[153] = Ut), (n[154] = $), (n[155] = tn))
      : (tn = n[155]),
    tn
  );
}
function Re() {
  return 0;
}
function ze() {
  return 0;
}
function Be() {
  return 0;
}
function Ve() {
  return new j();
}
function He(e, t) {
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
function Ue(e) {
  return b(e) <= 24;
}
function We(e, t) {
  return de(e) <= (t ? Math.max(e.clientHeight, qe) : qe);
}
var Ge, L, R, Ke, qe, Je, Ye;
function Xe() {
  return (Xe = e(() => {
    ((Ge = ne()),
      u(),
      h(),
      te(),
      (L = _()),
      ee(),
      me(),
      A(),
      r(),
      xe(),
      i(),
      f(),
      le(),
      w(),
      M(),
      Me(),
      Le(),
      (R = re()),
      (Ke = 260),
      (qe = 64),
      (Je = 8),
      (Ye = 1e3));
  }))();
}
export { Xe as n, I as t };
//# sourceMappingURL=thread-scroll-layout-96ebbe17c836.js.map
