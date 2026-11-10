import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $j as t,
  $nt as n,
  Cot as r,
  Ext as i,
  Hnt as a,
  IDt as o,
  Ij as s,
  Ixt as c,
  Kat as l,
  Pxt as u,
  Vxt as d,
  Wnt as f,
  _Pt as p,
  _xt as m,
  bz as h,
  fSt as g,
  gPt as _,
  hPt as v,
  hot as y,
  jDt as b,
  lot as x,
  qat as S,
  rst as ee,
  slt as C,
  vzt as w,
  wot as T,
  wxt as te,
  xMt as ne,
  xz as re,
  yzt as E,
} from "./app-shared-bbfeca5e5737.js";
import {
  $wr as ie,
  ARt as ae,
  BYt as oe,
  Bwr as se,
  Cxn as ce,
  E$n as D,
  FEr as O,
  IYt as le,
  J$n as k,
  JPn as A,
  Jot as ue,
  Kot as de,
  O$n as fe,
  OTr as j,
  PEr as M,
  Tm as pe,
  Txn as me,
  V$n as N,
  X$n as P,
  Yot as he,
  ZPn as ge,
  Zot as F,
  _yn as _e,
  cMr as ve,
  cst as I,
  dAn as L,
  dNr as ye,
  dst as R,
  est as be,
  etr as z,
  fAn as xe,
  fMr as B,
  gyn as V,
  h9n as Se,
  jRt as Ce,
  jTr as we,
  lst as H,
  m9n as Te,
  ost as Ee,
  qot as De,
  qwr as Oe,
  rst as ke,
  sst as Ae,
  tst as je,
  ttr as Me,
  vCt as Ne,
  wm as Pe,
  yCt as Fe,
  z$n as Ie,
} from "./app-initial-5851df3f6cb1.js";
import { Dc as Le, Ec as Re, Kp as ze, qp as U } from "./app-primary-fe8a450b3b04.js";
import { i as W, n as G, r as Be } from "./codex-micro-commands-fdc168b3622a.js";
import { a as K, i as Ve, o as q, t as He } from "./codex-micro-layout-3ae79f44ce27.js";
import { i as J, n as Ue, o as We, s as Ge } from "./codex-micro-onboarding-animation-de406f73de5b.js";
import {
  a as Ke,
  d as qe,
  f as Je,
  i as Ye,
  l as Xe,
  o as Ze,
  p as Qe,
  r as $e,
  s as et,
  t as tt,
  u as nt,
} from "./codex-micro-slot-signals-838363a53538.js";
import { a as rt, i as it, n as at, o as ot, r as st } from "./codex-micro-joystick-feedback-d7847516931e.js";
import {
  a as ct,
  c as lt,
  i as ut,
  n as dt,
  o as ft,
  r as pt,
  s as mt,
  t as ht,
  u as gt,
} from "./codex-micro-mini-games-b387bd725562.js";
function _t() {
  let e = (0, vt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, yt.jsx)(o, {
          id: `codexMicro.command.unavailable`,
          defaultMessage: `This action isn't available here`,
          description: `Toast shown when a Codex Micro keycap command cannot run in the current context`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var vt, yt;
function bt() {
  return (bt = e(() => {
    ((vt = w()), b(), (yt = ne()));
  }))();
}
function xt(e) {
  let t = (0, St.c)(13),
    { enabled: n, isCodexMicroSettings: i } = e,
    a = c(r),
    o = (0, Ct.useRef)(null),
    s = (0, Ct.useRef)(!1),
    l;
  t[0] !== i || t[1] !== a
    ? ((l = (e) => {
        let t = fe(
          e === `short-press` ? `realtimeVoice.toggleMicrophoneMute` : `realtimeVoice.endCall`,
          `codex_micro_hid`,
        );
        (!t && e === `short-press` && (t = fe(`composer.startVoiceMode`, `codex_micro_hid`)),
          !(t || e === `long-press` || i) &&
            a
              .get(y)
              .warning((0, wt.jsx)(_t, {}), {
                duration: 3,
                hasCloseButton: !1,
                id: `codex-micro-command-unavailable`,
              }));
      }),
      (t[0] = i),
      (t[1] = a),
      (t[2] = l))
    : (l = t[2]);
  let u = re(l),
    d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = () => {
        (o.current != null && (globalThis.clearTimeout(o.current), (o.current = null)), (s.current = !1));
      }),
      (t[3] = d))
    : (d = t[3]);
  let f = re(d),
    p;
  t[4] !== u || t[5] !== n
    ? ((p = (e) => {
        if (n) {
          if (e === `release`) {
            if (s.current) {
              s.current = !1;
              return;
            }
            if (o.current == null) return;
            (globalThis.clearTimeout(o.current), (o.current = null), u(`short-press`));
            return;
          }
          o.current != null ||
            s.current ||
            (o.current = globalThis.setTimeout(() => {
              ((o.current = null), (s.current = !0), u(`long-press`));
            }, Tt));
        }
      }),
      (t[4] = u),
      (t[5] = n),
      (t[6] = p))
    : (p = t[6]);
  let m = re(p),
    h,
    g;
  (t[7] !== f || t[8] !== n
    ? ((h = () => (n || f(), f)), (g = [f, n]), (t[7] = f), (t[8] = n), (t[9] = h), (t[10] = g))
    : ((h = t[9]), (g = t[10])),
    (0, Ct.useEffect)(h, g));
  let _;
  return (t[11] === m ? (_ = t[12]) : ((_ = { handleGesture: m }), (t[11] = m), (t[12] = _)), _);
}
var St, Ct, wt, Tt;
function Et() {
  return (Et = e(() => {
    ((St = w()), u(), (Ct = E()), bt(), D(), x(), T(), h(), (wt = ne()), (Tt = 500));
  }))();
}
function Dt(e, t, n) {
  if (e.key === `ENC_CW` || e.key === `ENC_CC`) return null;
  if (e.key.startsWith(`ENC`))
    return e.act === 1 ? { type: `encoder-press` } : e.act === 0 ? { type: `encoder-release` } : null;
  let r;
  if (n != null && !(`threadKey` in n))
    switch (n.type) {
      case `command`: {
        let t = G(n.commandId);
        return e.act === 1 && t != null ? { type: `command`, command: t.id } : null;
      }
      case `skill`:
        return e.act === 1 ? n : null;
      case `keycap`:
        r = K({ keycapId: n.keycapId });
    }
  else {
    let n = !t.separateMicrophoneKeys && (e.key === `ACT10` || e.key === `ACT11`) ? `ACT10_ACT11` : He(e.key);
    if (n == null || (!t.separateMicrophoneKeys && e.key === `ACT11`)) return null;
    r = K(t.slots[n]);
  }
  return r == null
    ? null
    : r.type === `push-to-talk`
      ? e.act === 1
        ? { type: `push-to-talk-press` }
        : e.act === 0
          ? { type: `push-to-talk-release` }
          : null
      : e.act === 1
        ? r
        : null;
}
function Ot(e) {
  return e.act === 2 ? (e.key === `ENC_CW` ? `ArrowUp` : e.key === `ENC_CC` ? `ArrowDown` : null) : null;
}
function kt(e, t) {
  return e.encoderMode === `custom` ? Mt(e.encoder[t]) : null;
}
function At(e, t, n) {
  switch (e.type) {
    case `idle`:
      return t === `press`
        ? { state: { type: `pressed`, pressedAt: n }, action: `start`, timeoutAt: null }
        : { state: e, action: null, timeoutAt: null };
    case `pressed`: {
      if (t !== `release`) return { state: e, action: null, timeoutAt: null };
      let r = e.pressedAt + Nt;
      return n >= r
        ? { state: Y, action: `stop`, timeoutAt: null }
        : { state: { type: `waiting-for-second-press`, deadline: r }, action: null, timeoutAt: r };
    }
    case `waiting-for-second-press`:
      return n >= e.deadline
        ? { state: Y, action: `stop`, timeoutAt: null }
        : t === `press`
          ? { state: { type: `latched` }, action: null, timeoutAt: null }
          : { state: e, action: null, timeoutAt: e.deadline };
    case `latched`: {
      if (t !== `press`) return { state: e, action: null, timeoutAt: null };
      let r = n + Nt;
      return { state: { type: `suppressing-presses`, deadline: r }, action: `stop`, timeoutAt: r };
    }
    case `suppressing-presses`:
      return n < e.deadline
        ? { state: e, action: null, timeoutAt: e.deadline }
        : t === `press`
          ? { state: { type: `pressed`, pressedAt: n }, action: `start`, timeoutAt: null }
          : { state: Y, action: null, timeoutAt: null };
  }
}
function jt(e, t, n, r) {
  let i = Ae(e);
  return { action: !r && i != null && i !== t ? Mt(n[i]) : null, activeDirection: i };
}
function Mt(e) {
  if (e == null || e.type === `skill`) return e;
  let t = G(e.commandId);
  return t == null ? null : { type: `command`, command: t.id };
}
var Nt, Y;
function Pt() {
  return (Pt = e(() => {
    (W(), q(), I(), (Nt = 350), (Y = { type: `idle` }));
  }))();
}
function Ft(e) {
  return e.map(({ id: e }) => ({
    id: e,
    threadKey: null,
    title: null,
    selected: !1,
    status: e === 0 ? `error` : `off`,
  }));
}
function It(e) {
  return e.matches(Kt) ? e : e.querySelector(Kt);
}
function Lt(e) {
  return e.getClientRects().length > 0 && !e.matches(`:disabled`) && e.closest(qt) == null;
}
var Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt;
function Xt() {
  return (Xt = e(() => {
    (u(),
      T(),
      (Rt = 2e3),
      (zt = `reasoning`),
      (Bt = `[data-codex-composer-root]`),
      (Vt = `[data-composer-navigation-target]`),
      (Ht = `data-composer-navigation-highlight`),
      (Ut = `data-composer-navigation-selected`),
      (Wt = `data-composer-navigation-open`),
      (Gt = `[aria-expanded="true"], [data-state="open"]`),
      (Kt = [`button`, `a[href]`, `input`, `select`, `textarea`, `[tabindex]:not([tabindex='-1'])`].join(
        `, `,
      )),
      (qt = [`[aria-disabled='true']`, `[data-disabled]`, `[hidden]`, `[aria-hidden='true']`, `[inert]`].join(
        `, `,
      )),
      (Jt = g(r, null)),
      (Yt = class {
        onInteractionStateChange;
        hasOpenNavigationSurface;
        activeComposerKey = null;
        selectedTargetId = zt;
        selectedTarget = null;
        highlightedTarget = null;
        interactionState = null;
        selectedTargetOpen = !1;
        selectedTargetObserver = null;
        openSurfaceObserver = null;
        highlightTimeout = null;
        constructor(e = () => {}, t = () => !1) {
          ((this.onInteractionStateChange = e), (this.hasOpenNavigationSurface = t));
        }
        move(e, t, n = null) {
          let r = this.getTargets(e, n),
            i = this.getSelectedTarget(r);
          if (i == null) return (this.clearHighlight(), null);
          let a = r[(r.indexOf(i) + (t === `next` ? 1 : -1) + r.length) % r.length] ?? null;
          return a == null
            ? null
            : ((this.selectedTargetId = a.id),
              this.setSelectedTarget(a.control),
              this.showHighlight(a.control),
              a.control);
        }
        getActivationTarget(e, t = null, n) {
          let r = this.getTargets(e, t);
          if (n != null) return (this.dispose(), r.find(({ id: e }) => e === n)?.control ?? null);
          let i = this.getSelectedTarget(r);
          return i == null
            ? (this.clearHighlight(), null)
            : ((this.selectedTargetId = i.id),
              this.setSelectedTarget(i.control),
              this.showHighlight(i.control),
              i.control);
        }
        clearHighlight() {
          (this.removeHighlight(),
            this.selectedTargetOpen || (this.stopOpenSurfaceTracking(), this.setInteractionState(null)));
        }
        dispose() {
          (this.clearHighlight(), this.setSelectedTarget(null));
        }
        getTargets(e, t) {
          return (
            this.setActiveComposer(t ?? e),
            Array.from(e.querySelectorAll(Vt)).flatMap((t) => {
              if (t.closest(Bt) !== e) return [];
              let n = t.dataset.composerNavigationTarget,
                r = It(t);
              return n != null && r != null && Lt(r) ? [{ control: r, id: n }] : [];
            })
          );
        }
        setActiveComposer(e) {
          e !== this.activeComposerKey &&
            ((this.activeComposerKey = e), (this.selectedTargetId = zt), this.dispose());
        }
        getSelectedTarget(e) {
          let t =
            e.find(({ id: e }) => e === this.selectedTargetId) ??
            e.find(({ id: e }) => e === zt) ??
            e[0] ??
            null;
          return (t != null && (this.selectedTargetId = t.id), this.setSelectedTarget(t?.control ?? null), t);
        }
        setSelectedTarget(e) {
          e !== this.selectedTarget &&
            (this.selectedTargetObserver?.disconnect(),
            (this.selectedTargetObserver = null),
            this.stopOpenSurfaceTracking(),
            this.selectedTargetOpen && ((this.selectedTargetOpen = !1), this.setInteractionState(null)),
            this.selectedTarget?.removeAttribute(Wt),
            this.selectedTarget?.removeAttribute(Ut),
            (this.selectedTarget = e),
            e?.setAttribute(Ut, ``),
            e != null &&
              (this.syncSelectedTargetOpen(),
              (this.selectedTargetObserver = new MutationObserver(() => {
                if (this.selectedTarget === e) {
                  if (!e.isConnected) {
                    (this.selectedTargetObserver?.disconnect(),
                      (this.selectedTargetObserver = null),
                      this.stopOpenSurfaceTracking(),
                      (this.selectedTargetOpen = !1),
                      this.removeHighlight(),
                      e.removeAttribute(Wt),
                      e.removeAttribute(Ut),
                      (this.selectedTarget = null),
                      this.setInteractionState(null));
                    return;
                  }
                  this.syncSelectedTargetOpen();
                }
              })),
              this.selectedTargetObserver.observe(e, {
                attributeFilter: [`aria-expanded`, `data-state`],
                attributes: !0,
              }),
              this.selectedTargetObserver.observe(e.closest(Bt) ?? document.body, {
                childList: !0,
                subtree: !0,
              })));
        }
        showHighlight(e) {
          (this.removeHighlight(),
            (this.highlightedTarget = e),
            e.dataset.composerNavigationTarget !== zt &&
              e.scrollIntoView({ block: `nearest`, inline: `nearest` }),
            e.setAttribute(Ht, ``),
            this.startOpenSurfaceTracking(),
            this.selectedTargetOpen || this.setInteractionState(`selected`),
            (this.highlightTimeout = globalThis.setTimeout(() => {
              (e.removeAttribute(Ht),
                this.highlightedTarget === e &&
                  ((this.highlightedTarget = null),
                  (this.highlightTimeout = null),
                  this.selectedTargetOpen ||
                    (this.stopOpenSurfaceTracking(), this.setInteractionState(null))));
            }, Rt)));
        }
        removeHighlight() {
          (this.highlightTimeout != null &&
            (globalThis.clearTimeout(this.highlightTimeout), (this.highlightTimeout = null)),
            this.highlightedTarget?.removeAttribute(Ht),
            (this.highlightedTarget = null));
        }
        startOpenSurfaceTracking() {
          this.openSurfaceObserver == null &&
            this.selectedTarget != null &&
            ((this.openSurfaceObserver = new MutationObserver(() => {
              this.syncSelectedTargetOpen();
            })),
            this.openSurfaceObserver.observe(document.body, {
              attributeFilter: [`aria-expanded`, `data-state`],
              attributes: !0,
              childList: !0,
              subtree: !0,
            }),
            this.syncSelectedTargetOpen());
        }
        stopOpenSurfaceTracking() {
          (this.openSurfaceObserver?.disconnect(), (this.openSurfaceObserver = null));
        }
        syncSelectedTargetOpen() {
          let e = this.selectedTarget;
          if (e == null) return;
          let t = e.matches(Gt) || this.hasOpenNavigationSurface();
          (e.toggleAttribute(Wt, t),
            t !== this.selectedTargetOpen &&
              ((this.selectedTargetOpen = t),
              this.setInteractionState(t ? `open` : this.highlightedTarget === e ? `selected` : null),
              !t && this.highlightedTarget == null && this.stopOpenSurfaceTracking()));
        }
        setInteractionState(e) {
          e !== this.interactionState && ((this.interactionState = e), this.onInteractionStateChange(e));
        }
      }));
  }))();
}
function Zt() {
  let e = (0, Sn.c)(1),
    t = l.codexMicro;
  if (t == null) return null;
  let n;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Cn.jsx)(Qt, { codexMicro: t })), (e[0] = n))
      : (n = e[0]),
    n
  );
}
function Qt(e) {
  let t = (0, Sn.c)(15),
    { codexMicro: n } = e,
    i = c(r),
    { status: o } = d(F),
    s = (0, $.useRef)(!1),
    l = (0, $.useRef)(!1),
    u = (0, $.useRef)(null),
    f = (0, $.useRef)(!1),
    m,
    h;
  (t[0] === i
    ? ((m = t[1]), (h = t[2]))
    : ((m = (e) => {
        let { cause: t, state: n } = e;
        ((s.current = !0), t === `device-lifecycle` && (u.current = { value: i.get(H) }), en(i, n));
      }),
      (h = [i]),
      (t[0] = i),
      (t[1] = m),
      (t[2] = h)),
    p(`codex-micro-device-state-changed`, m, h));
  let g, _;
  (t[3] === i
    ? ((g = t[4]), (_ = t[5]))
    : ((g = (e) => {
        let { isOwner: t } = e;
        ((l.current = !0), i.set(be, t));
      }),
      (_ = [i]),
      (t[3] = i),
      (t[4] = g),
      (t[5] = _)),
    p(`codex-micro-window-ownership-changed`, g, _));
  let v, y;
  (t[6] === i
    ? ((v = t[7]), (y = t[8]))
    : ((v = (e) => {
        let { state: t, transition: n, transport: r } = e,
          a = u.current,
          o = a == null ? i.get(H) : a.value;
        ((u.current = null), Ge(i, t, n, r, o));
      }),
      (y = [i]),
      (t[6] = i),
      (t[7] = v),
      (t[8] = y)),
    p(`codex-micro-device-lifecycle`, v, y));
  let b, x;
  (t[9] !== n || t[10] !== i
    ? ((b = () => {
        let e = !0;
        (n.getState().then((t) => {
          e && !s.current && en(i, t);
        }),
          n.ownsPrimaryWindow().then((t) => {
            e && !l.current && i.set(be, t);
          }));
        let t = null,
          r = null,
          o = null,
          c = !1,
          u = () => {
            if (!e) {
              ((o = null), (c = !1));
              return;
            }
            let t = o;
            if (((o = null), t == null)) {
              c = !1;
              return;
            }
            n.updateLighting(t).then(u, u);
          },
          d = i.watch((e) => {
            let { get: i } = e;
            if (!i(be)) {
              ((t = null), (r = null), (o = null));
              return;
            }
            let s = i(tt),
              l = s.slots.map($t),
              d = a(i, C.agentSource) === `custom` ? (i(nt) ?? Ze) : null,
              f = s.slots.map((e) => {
                let { id: t } = e,
                  n = qe(t),
                  r = n == null ? null : d?.[n];
                return r == null || !(`type` in r)
                  ? `thread`
                  : r.type === `command` && Be(r.commandId) != null
                    ? `recent-thread`
                    : `action`;
              }),
              p = a(i, C.singleTapAgentKeys),
              m = JSON.stringify({ agentThreadKeys: l, agentKeyKinds: f, singleTapAgentKeys: p });
            m !== t && ((t = m), n.updateAgentThreadKeys(l, f, p));
            let h = i(Ue),
              g = ct(i(dt)),
              _ = i(Jt),
              v = s;
            h == null
              ? g == null
                ? _ != null &&
                  (v = {
                    ...s,
                    preserveSelectionLighting: !0,
                    slots: _ === `open` ? Ft(s.slots) : s.slots,
                    snakingAmbientStatus: _ === `open` ? `unread` : `working`,
                  })
                : (v = {
                    brightness: s.brightness,
                    inactivityTimeoutMs: s.inactivityTimeoutMs,
                    preserveSelectionLighting: !0,
                    slots: g,
                    snakingAmbientStatus: `error`,
                    suspendDeviceStatusRefresh: !0,
                    voiceState: `idle`,
                  })
              : (v = { ...s, slots: h });
            let y = Ye(v);
            y !== r && ((r = y), (o = v), c || ((c = !0), u()));
          }),
          f = ie((e, t) => {
            let { clientThreadId: n, conversationId: r } = t;
            Xe(i, n, r);
          });
        return () => {
          ((e = !1), (o = null), d(), f());
        };
      }),
      (x = [n, i]),
      (t[9] = n),
      (t[10] = i),
      (t[11] = b),
      (t[12] = x))
    : ((b = t[11]), (x = t[12])),
    (0, $.useEffect)(b, x));
  let S;
  return (
    t[13] === o
      ? (S = t[14])
      : ((S = o === `connected` ? (0, Cn.jsx)(nn, { miniGameRearmRequiredRef: f }) : null),
        (t[13] = o),
        (t[14] = S)),
    S
  );
}
function $t(e) {
  return e.threadKey;
}
function en(e, t) {
  (Ee(e, t), (t.status === `detected` || t.status === `connected`) && Le(e, t.model));
}
function tn(e, t, n) {
  return (t === `manageTasks` &&
    !e.get(M, { name: `automations.local` }).isCapable &&
    !e.get(M, { name: `automations.cloud` }).isCapable) ||
    (G(t)?.requiredAccess != null && !e.get(ve))
    ? !1
    : fe(t, n);
}
function nn(e) {
  let t = (0, Sn.c)(75),
    { miniGameRearmRequiredRef: o } = e,
    l = c(r),
    u = te(),
    f;
  t[0] === u.pathname
    ? (f = t[1])
    : ((f = u.pathname.startsWith(`/settings/codex-micro`)), (t[0] = u.pathname), (t[1] = f));
  let m = f,
    h = i(),
    g = Fe(),
    v = oe(),
    b = n(C.agentSource),
    x = n(C.layout),
    S = d(be),
    ee = d(nt),
    w;
  t[2] === x ? (w = t[3]) : ((w = Ve(x)), (t[2] = x), (t[3] = w));
  let T = w,
    ne = Ce(),
    re = d(Se),
    E = (ne || re) && T.voiceButtonMode === `realtime` ? `realtime` : `push-to-talk`,
    ie = S && E === `realtime`,
    ae;
  t[4] !== m || t[5] !== ie
    ? ((ae = { enabled: ie, isCodexMicroSettings: m }), (t[4] = m), (t[5] = ie), (t[6] = ae))
    : (ae = t[6]);
  let { handleGesture: D } = xt(ae),
    O;
  t[7] !== b ||
  t[8] !== ee ||
  t[9] !== T.analogStick ||
  t[10] !== T.encoder ||
  t[11] !== T.encoderMode ||
  t[12] !== T.slots
    ? ((O =
        Object.values(T.slots).some(ln) ||
        Object.values(T.analogStick).some(cn) ||
        (T.encoderMode === `custom` && Object.values(T.encoder).some(sn)) ||
        (b === `custom` && Object.values(ee ?? Ze).some(on))),
      (t[7] = b),
      (t[8] = ee),
      (t[9] = T.analogStick),
      (t[10] = T.encoder),
      (t[11] = T.encoderMode),
      (t[12] = T.slots),
      (t[13] = O))
    : (O = t[13]);
  let le = O,
    k;
  t[14] === le ? (k = t[15]) : ((k = { enabled: le }), (t[14] = le), (t[15] = k));
  let { skills: A } = xe(void 0, void 0, k),
    j = (0, $.useRef)(null),
    M = (0, $.useRef)(lt),
    me;
  t[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((me = new Set()), (t[16] = me)) : (me = t[16]);
  let N = (0, $.useRef)(me),
    P = (0, $.useRef)(Y),
    F = (0, $.useRef)(null),
    ve = (0, $.useRef)(E),
    I = (0, $.useRef)(null),
    L = (0, $.useRef)(null),
    R = (0, $.useRef)(null),
    z = (0, $.useRef)(!1),
    B = (0, $.useRef)(null),
    V = (0, $.useRef)(null),
    we;
  t[17] === l
    ? (we = t[18])
    : ((we = function () {
        return ((V.current ??= new Yt((e) => l.set(Jt, e), an)), V.current);
      }),
      (t[17] = l),
      (t[18] = we));
  let H = we,
    Te;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = function () {
        B.current != null && (globalThis.clearTimeout(B.current), (B.current = null));
      }),
      (t[19] = Te))
    : (Te = t[19]);
  let Ee = Te,
    Oe;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = function () {
        (Ee(),
          (B.current = globalThis.setTimeout(() => {
            B.current = null;
            let e = hn();
            e != null && gn(e) && X(`Escape`, e);
          }, En)));
      }),
      (t[20] = Oe))
    : (Oe = t[20]);
  let ke = Oe,
    Ae;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = function (e) {
        let t = globalThis.performance.now(),
          n = At(P.current, e, t);
        ((P.current = n.state),
          F.current != null && (globalThis.clearTimeout(F.current), (F.current = null)),
          un(n.action));
        let r = n.timeoutAt;
        r != null &&
          (F.current = globalThis.setTimeout(
            () => {
              F.current = null;
              let e = At(P.current, `timeout`, r);
              ((P.current = e.state), un(e.action));
            },
            Math.max(0, r - t),
          ));
      }),
      (t[21] = Ae))
    : (Ae = t[21]);
  let Ne = Ae,
    Pe;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pe = function () {
        for (let e of N.current) globalThis.clearTimeout(e);
        N.current.clear();
      }),
      (t[22] = Pe))
    : (Pe = t[22]);
  let Ie = Pe,
    Le;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Le = function (e, t, n) {
        if (!t) return e() ? `triggered` : `unavailable`;
        let r = globalThis.setTimeout(() => {
          (N.current.delete(r), n(e() ? `triggered` : `unavailable`));
        }, Tn);
        return (N.current.add(r), null);
      }),
      (t[23] = Le))
    : (Le = t[23]);
  let Re = Le,
    ze;
  t[24] === A
    ? (ze = t[25])
    : ((ze = function (e) {
        let t = ye(),
          n = A.find((n) => n.enabled && n.name === e.skillName && n.path === e.skillPath && pe(n, t));
        return (
          n != null && (_.dispatchHostMessage({ type: `codex-micro-insert-skill-mention`, skill: s(n) }), !0)
        );
      }),
      (t[24] = A),
      (t[25] = ze));
  let U = ze,
    W;
  t[26] !== U || t[27] !== m || t[28] !== l
    ? ((W = function (e) {
        if (Z() != null) return;
        let t = kt(Ve(a(l.get, C.layout)), e);
        if (t?.type === `skill`) {
          U(t);
          return;
        }
        t?.type === `command` &&
          !tn(l, t.command, `codex_micro_encoder`) &&
          !m &&
          l
            .get(y)
            .warning((0, Cn.jsx)(_t, {}), {
              duration: 3,
              hasCloseButton: !1,
              id: `codex-micro-command-unavailable`,
            });
      }),
      (t[26] = U),
      (t[27] = m),
      (t[28] = l),
      (t[29] = W))
    : (W = t[29]);
  let G = W,
    K;
  t[30] === l
    ? (K = t[31])
    : ((K = function (e, t) {
        (L.current != null && globalThis.clearTimeout(L.current),
          ot(l, e, t),
          (L.current = globalThis.setTimeout(() => {
            ((L.current = null), at(l));
          }, 600)));
      }),
      (t[30] = l),
      (t[31] = K));
  let q = K,
    He;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = () => {
        (F.current != null && (globalThis.clearTimeout(F.current), (F.current = null)),
          P.current.type !== `idle` && P.current.type !== `suppressing-presses` && un(`stop`),
          (P.current = Y));
      }),
      (t[32] = He))
    : (He = t[32]);
  let J = (0, $.useEffectEvent)(He),
    Ue;
  t[33] !== J || t[34] !== E
    ? ((Ue = () => {
        ve.current !== E && ((ve.current = E), J());
      }),
      (t[33] = J),
      (t[34] = E),
      (t[35] = Ue))
    : (Ue = t[35]);
  let We;
  (t[36] === E ? (We = t[37]) : ((We = [E]), (t[36] = E), (t[37] = We)), (0, $.useEffect)(Ue, We));
  let Ge;
  t[38] !== J || t[39] !== l
    ? ((Ge = () => {
        let e = () => {
            (I.current != null && (globalThis.clearTimeout(I.current), (I.current = null)),
              L.current != null && (globalThis.clearTimeout(L.current), (L.current = null)),
              R.current != null && (globalThis.clearTimeout(R.current), (R.current = null)),
              (z.current = !1),
              Ee(),
              V.current?.dispose(),
              (V.current = null),
              l.set(Jt, null),
              Ie(),
              J(),
              (j.current = null),
              (M.current = lt),
              l.set(je, rn),
              it(l));
          },
          t = l.watch((t) => {
            let { get: n } = t;
            n(be) || e();
          });
        return () => {
          (t(), e());
        };
      }),
      (t[38] = J),
      (t[39] = l),
      (t[40] = Ge))
    : (Ge = t[40]);
  let Ke;
  (t[41] === l ? (Ke = t[42]) : ((Ke = [l]), (t[41] = l), (t[42] = Ke)), (0, $.useEffect)(Ge, Ke));
  let Je;
  t[43] !== H ||
  t[44] !== D ||
  t[45] !== U ||
  t[46] !== m ||
  t[47] !== T ||
  t[48] !== h ||
  t[49] !== g ||
  t[50] !== G ||
  t[51] !== l ||
  t[52] !== v ||
  t[53] !== E
    ? ((Je = (e) => {
        let { event: t } = e;
        de(l, t);
        let n = t.slot == null ? null : qe(t.slot),
          r = n != null && a(l.get, C.agentSource) === `custom` ? (l.get(nt) ?? Ze)[n] : null,
          i = r != null && !(`threadKey` in r),
          o = l.get(dt);
        if (gt(o, t)) return;
        if (t.act === 1 && kn.test(t.key) && !i) {
          let e = mn();
          if (e != null) {
            t.key === An &&
              X(
                `Escape`,
                (e.matches(jn)
                  ? e.closest(`[data-codex-composer-root]`)?.querySelector(`[data-codex-composer]`)
                  : null) ?? e,
              );
            return;
          }
        }
        t.act === 2 &&
          (t.key === `ENC_CW` || t.key === `ENC_CC`) &&
          (I.current != null && globalThis.clearTimeout(I.current),
          (I.current = globalThis.setTimeout(() => {
            (ue(l), (I.current = null));
          }, 180)));
        let s = Ot(t);
        if (s != null) {
          if (T.encoderMode === `custom`) {
            G(t.key === `ENC_CW` ? `right` : `left`);
            return;
          }
          if (T.encoderMode === `reasoning`) {
            if (Z() != null) return;
            let e = ce();
            if (e == null || H().getActivationTarget(e.root, e.composerId, `reasoning`) == null) return;
            (fe(
              s === `ArrowUp` ? `composer.decreaseReasoningEffort` : `composer.increaseReasoningEffort`,
              `codex_micro_encoder`,
            ),
              hn() != null && ke());
            return;
          }
          if (T.encoderMode === `conversation-scroll`) {
            pn(s);
            return;
          }
          let e = mn();
          if (e != null) {
            X(s, e);
            return;
          }
          if (Z() != null) return;
          let n = bn();
          if (n != null) {
            dn(s, n);
            return;
          }
          let r = ce();
          r != null && H().move(r.root, s === `ArrowDown` ? `next` : `previous`, r.composerId);
          return;
        }
        let c = Dt(t, T, r);
        if (c?.type === `encoder-press`) {
          if (R.current != null || z.current) return;
          R.current = globalThis.setTimeout(() => {
            if (
              ((R.current = null),
              (z.current = !0),
              V.current?.clearHighlight(),
              Ve(a(l.get, C.layout)).encoderMode === `custom`)
            ) {
              G(`longPress`);
              return;
            }
            h(`/settings/codex-micro`);
          }, Dn);
          return;
        }
        if (c?.type === `encoder-release`) {
          if (z.current) {
            z.current = !1;
            return;
          }
          if (R.current == null) return;
          if ((globalThis.clearTimeout(R.current), (R.current = null), T.encoderMode === `custom`)) {
            G(`click`);
            return;
          }
          if (T.encoderMode === `conversation-scroll`) {
            pn(`bottom`);
            return;
          }
          let e = mn();
          if (e != null) {
            let t = hn();
            if (T.encoderMode === `reasoning` && t != null && gn(t)) {
              let e = vn(t);
              if (e != null) {
                (Ee(), e.focus(), X(`Enter`, e));
                return;
              }
            }
            let n =
              T.encoderMode === `reasoning` &&
              t != null &&
              _n(t) &&
              e !== t &&
              e.matches(`[role="menu"][data-state="open"]`);
            (X(`Enter`, e),
              n &&
                globalThis.queueMicrotask(() => {
                  e.isConnected && X(`ArrowLeft`, e);
                }),
              T.encoderMode === `reasoning` && t != null && _n(t) && ke());
            return;
          }
          let t = Z();
          if (t != null) {
            X(`Enter`, t);
            return;
          }
          let n = bn();
          if (n != null) {
            dn(`Enter`, n);
            return;
          }
          let r = ce(),
            i =
              r == null
                ? null
                : (H().getActivationTarget(
                    r.root,
                    r.composerId,
                    T.encoderMode === `reasoning` ? `reasoning` : void 0,
                  ) ?? null);
          if (i != null) {
            (T.encoderMode !== `reasoning` && i.focus(),
              i.dataset.composerNavigationTarget === `add-context` ? i.click() : X(`Enter`, i),
              T.encoderMode === `reasoning` && ke());
            return;
          }
          X(`Enter`);
          return;
        }
        if (c?.type === `command` && !(r != null && `commandId` in r && Be(r.commandId) != null)) {
          !tn(l, c.command, `codex_micro_hid`) &&
            !m &&
            l
              .get(y)
              .warning((0, Cn.jsx)(_t, {}), {
                duration: 3,
                hasCloseButton: !1,
                id: `codex-micro-command-unavailable`,
              });
          return;
        }
        if (c?.type === `external-url`) {
          ge({ href: c.url, initiator: `open_in_browser_bridge` });
          return;
        }
        if (c?.type === `composer-text`) {
          _.dispatchHostMessage({ type: `codex-micro-insert-composer-text`, text: c.text });
          return;
        }
        if (c?.type === `skill`) {
          U(c);
          return;
        }
        if (c?.type === `push-to-talk-press` || c?.type === `push-to-talk-release`) {
          let e = c.type === `push-to-talk-press` ? `press` : `release`;
          E === `realtime` ? D(e) : Ne(e);
          return;
        }
        if (t.act !== 1 || t.slot == null) return;
        let u = Me(t.threadKey);
        if (u == null) {
          t.threadKey == null &&
            a(l.get, C.agentSource) === `custom` &&
            n != null &&
            r == null &&
            et(l, n, l.get(se, On)) &&
            v();
          return;
        }
        (t.slot != null && Qe(l, t.slot, u.key), _e(l, u.key, g, h));
      }),
      (t[43] = H),
      (t[44] = D),
      (t[45] = U),
      (t[46] = m),
      (t[47] = T),
      (t[48] = h),
      (t[49] = g),
      (t[50] = G),
      (t[51] = l),
      (t[52] = v),
      (t[53] = E),
      (t[54] = Je))
    : (Je = t[54]);
  let Ye;
  (t[55] !== D ||
  t[56] !== m ||
  t[57] !== T ||
  t[58] !== h ||
  t[59] !== g ||
  t[60] !== l ||
  t[61] !== A ||
  t[62] !== v ||
  t[63] !== E
    ? ((Ye = [D, m, T, h, g, l, A, v, E]),
      (t[55] = D),
      (t[56] = m),
      (t[57] = T),
      (t[58] = h),
      (t[59] = g),
      (t[60] = l),
      (t[61] = A),
      (t[62] = v),
      (t[63] = E),
      (t[64] = Ye))
    : (Ye = t[64]),
    p(`codex-micro-hid-event`, Je, Ye));
  let Xe;
  t[65] !== U || t[66] !== T.analogStick || t[67] !== o || t[68] !== l || t[69] !== q
    ? ((Xe = (e) => {
        let { event: t } = e;
        De(l, t);
        let n = j.current,
          r = l.get(he),
          i = pt();
        if (l.get(dt) != null) {
          ((o.current = !0), (M.current = lt), (j.current = null));
          return;
        }
        if (o.current) {
          ((j.current = null), t.distance <= 0.1 && (o.current = !1));
          return;
        }
        if (i != null && !r) {
          let e = ut(M.current, t, globalThis.performance.now());
          if (((M.current = e.state), e.activated)) {
            (Ie(),
              (o.current = !0),
              (j.current = null),
              ht(l),
              l.set(dt, { composerId: i, game: ft() }),
              q(t, 1));
            return;
          }
          if (e.captured) {
            (Ie(), (j.current = null), q(t, e.progress));
            return;
          }
        } else M.current = lt;
        let a = jt(t, n, T.analogStick, r);
        j.current = a.activeDirection;
        let s = function (e) {
            (L.current != null && (globalThis.clearTimeout(L.current), (L.current = null)),
              rt(l, {
                activeDirection: a.activeDirection,
                enabled: !r,
                event: t,
                executionStatus: e,
                mapping: T.analogStick,
                previousActiveDirection: n,
              }).visible &&
                (L.current = globalThis.setTimeout(() => {
                  ((L.current = null), (j.current = null), at(l));
                }, 600)));
          },
          c = !1,
          u = null;
        if (a.action?.type === `command`) {
          let e = a.action.command;
          ((u = Re(() => tn(l, e, `codex_micro_joystick`), i != null, s)), (c = u == null));
        } else if (a.action?.type === `skill`) {
          let e = a.action;
          ((u = Re(() => U(e), i != null, s)), (c = u == null));
        }
        c || s(u);
      }),
      (t[65] = U),
      (t[66] = T.analogStick),
      (t[67] = o),
      (t[68] = l),
      (t[69] = q),
      (t[70] = Xe))
    : (Xe = t[70]);
  let $e;
  return (
    t[71] !== T.analogStick || t[72] !== l || t[73] !== A
      ? (($e = [T.analogStick, l, A]), (t[71] = T.analogStick), (t[72] = l), (t[73] = A), (t[74] = $e))
      : ($e = t[74]),
    p(`codex-micro-joystick-event`, Xe, $e),
    null
  );
}
function rn(e) {
  return { ...e, joystick: { angle: 0, distance: 0 }, knobPulse: null, pressedKeys: [] };
}
function an() {
  return mn() != null;
}
function on(e) {
  return e != null && `type` in e && e.type === `skill`;
}
function sn(e) {
  return e?.type === `skill`;
}
function cn(e) {
  return e?.type === `skill`;
}
function ln(e) {
  return e.action?.type === `skill`;
}
function un(e) {
  e != null &&
    _.dispatchHostMessage({
      type: e === `start` ? `codex-micro-push-to-talk-start` : `codex-micro-push-to-talk-stop`,
    });
}
function X(e, t = window) {
  let n = document.activeElement;
  (n != null && (!(t instanceof Element) || t.contains(n)) ? n : t).dispatchEvent(
    new KeyboardEvent(`keydown`, { bubbles: !0, cancelable: !0, code: ze, key: e }),
  );
}
function dn(e, t) {
  if (t.hasAttribute(`data-codex-composer-request-navigation`)) {
    X(e, t);
    return;
  }
  t.hasAttribute(`data-codex-approval-surface`) && fn(e, t);
}
function fn(e, t) {
  let n = xn(t);
  if (n.length === 0) return;
  let r = document.activeElement,
    i = r instanceof HTMLButtonElement && t.contains(r) ? n.indexOf(r) : n.length - 1,
    a = i >= 0 ? i : n.length - 1;
  if (e === `Enter`) {
    n[a]?.click();
    return;
  }
  n[(a + (e === `ArrowDown` ? 1 : -1) + n.length) % n.length]?.focus();
}
function pn(e) {
  if (Z() != null) return;
  let t = Q(`[data-app-shell-right-panel-full-width="true"]`) != null,
    n;
  if (
    ((n = t
      ? Array.from(
          Q(`[data-app-shell-focus-area="right-panel"]`)?.querySelectorAll(
            `${k.reviewScroll}, .cm-scroller, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll`,
          ) ?? [],
        ).find((e) => e.scrollHeight > e.clientHeight)
      : (ce()?.root.closest(k.timelineScroll) ?? Q(k.timelineScroll))),
    n == null)
  )
    return;
  if (e === `bottom`) {
    t ? (n.scrollTop = n.scrollHeight) : N(n, { type: `edge`, edge: `bottom` });
    return;
  }
  let r = e === `ArrowUp` ? -160 : wn;
  (n.dispatchEvent(new WheelEvent(`wheel`, { bubbles: !0, deltaY: r })),
    t ? (n.scrollTop += r) : N(n, { type: `pixels`, y: r }));
}
function mn() {
  let e = document.activeElement?.closest(Fn);
  return e != null && e.closest(Nn) == null ? e : Q(Fn);
}
function hn() {
  return (
    Array.from(document.querySelectorAll(`[role="menu"][data-state="open"]`)).find(
      (e) => e.closest(Nn) == null && e.querySelector(`[data-model-picker-view]`) != null,
    ) ?? null
  );
}
function gn(e) {
  return e.querySelector(`[data-model-picker-view="simple"]`) != null;
}
function _n(e) {
  return e.querySelector(`[data-model-picker-view="advanced"]`) != null;
}
function vn(e) {
  let t = e.querySelector(Mn);
  return t == null || t.dataset.interactive === `false` || yn(t) ? null : t;
}
function yn(e) {
  return e.closest(Pn) != null;
}
function bn() {
  return Q(Ln);
}
function xn(e) {
  return Array.from(e.querySelectorAll(Rn)).filter(
    (e) => e.closest(`[hidden],[aria-hidden='true'],[inert],${Nn}`) == null,
  );
}
function Z() {
  return Q(In);
}
function Q(e) {
  return document.querySelector(`:is(${e}):not(${Nn} *)`);
}
var Sn, $, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn;
function zn() {
  return (zn = e(() => {
    ((Sn = w()),
      u(),
      ee(),
      ($ = E()),
      m(),
      P(),
      Ie(),
      O(),
      B(),
      D(),
      U(),
      me(),
      t(),
      Pe(),
      A(),
      x(),
      we(),
      le(),
      v(),
      Te(),
      Et(),
      ae(),
      S(),
      T(),
      Oe(),
      f(),
      z(),
      V(),
      L(),
      Ne(),
      Pt(),
      We(),
      bt(),
      W(),
      Je(),
      R(),
      Xt(),
      st(),
      q(),
      mt(),
      Ke(),
      J(),
      Re(),
      ke(),
      $e(),
      (Cn = ne()),
      (wn = 160),
      (Tn = 220),
      (En = 1500),
      (Dn = 500),
      (On = j({ entrypoint: `home` })),
      (kn = /^AG0[0-5]$/),
      (An = `AG00`),
      (jn = `[data-composer-navigation-target="add-context"][aria-expanded="true"]`),
      (Mn = `[data-model-picker-view-toggle]`),
      (Nn = `[data-app-shell-active-page="false"]`),
      (Pn = [
        `:disabled`,
        `[aria-disabled='true']`,
        `[data-disabled]`,
        `[hidden]`,
        `[aria-hidden='true']`,
        `[inert]`,
      ].join(`, `)),
      (Fn = [`[role="menu"][data-state="open"]`, `[role="listbox"][data-state="open"]`, jn].join(`, `)),
      (In = `[role="dialog"][data-state="open"]`),
      (Ln = [`[data-codex-composer-request-navigation]`, `[data-codex-approval-surface]`].join(`, `)),
      (Rn = `button:not(:disabled):not([aria-haspopup='menu'])`));
  }))();
}
zn();
export { Zt as CodexMicroBridge };
//# sourceMappingURL=codex-micro-bridge-a5aa8d621054.js.map
