import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  HM as i,
  LNt as a,
  MFt as o,
  NFt as s,
  NSt as c,
  PBt as l,
  Qst as u,
  TM as d,
  USt as f,
  VSt as p,
  Vrt as m,
  XOt as h,
  ZSt as g,
  ast as _,
  dut as v,
  gB as y,
  hB as b,
  hit as x,
  iCt as ee,
  iit as S,
  ist as te,
  jFt as C,
  kCt as w,
  oit as ne,
  qrt as re,
  sct as ie,
  tkt as T,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CRn as ae,
  Cct as oe,
  Cqt as se,
  Dqt as ce,
  Gm as le,
  Inr as E,
  Iwn as ue,
  Jkr as de,
  LFt as fe,
  LIr as D,
  Lnr as pe,
  NIr as O,
  NNn as k,
  PNn as me,
  Pwn as he,
  RFt as ge,
  S4n as A,
  SSn as _e,
  Wkr as ve,
  Wm as j,
  XLr as ye,
  act as be,
  bRn as M,
  bct as xe,
  cGt as Se,
  e4n as N,
  fct as Ce,
  fir as P,
  h4n as F,
  hct as I,
  hkr as L,
  ict as we,
  lct as R,
  lkr as Te,
  n4n as Ee,
  njr as z,
  nkr as De,
  oct as Oe,
  p4n as B,
  pct as ke,
  pir as Ae,
  sGt as je,
  sct as Me,
  tjr as V,
  vct as Ne,
  w4n as H,
  xSn as Pe,
  xct as U,
  yct as Fe,
} from "./app-initial-ad16eaadf81f.js";
import { Nc as Ie, Pc as Le, am as Re, om as W } from "./app-primary-3e00728c2a4c.js";
import { i as G, n as K, r as ze } from "./codex-micro-commands-a9ca1690e672.js";
import { a as q, i as Be, o as J, t as Ve } from "./codex-micro-layout-83367ba34281.js";
import { i as Y, n as He, o as Ue, s as We } from "./codex-micro-onboarding-animation-4b177d111076.js";
import {
  a as Ge,
  d as Ke,
  f as qe,
  i as Je,
  l as Ye,
  o as Xe,
  p as Ze,
  r as Qe,
  s as $e,
  t as et,
  u as tt,
} from "./codex-micro-slot-signals-ea1e3fa588b5.js";
import { a as nt, i as rt, n as it, o as at, r as ot } from "./codex-micro-joystick-feedback-da1cb053593c.js";
import {
  a as st,
  c as ct,
  i as lt,
  n as ut,
  o as dt,
  r as ft,
  s as pt,
  t as mt,
  u as ht,
} from "./codex-micro-mini-games-c3590553f66e.js";
function gt() {
  let e = (0, _t.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, vt.jsx)(T, {
          id: `codexMicro.command.unavailable`,
          defaultMessage: `This action isn't available here`,
          description: `Toast shown when a Codex Micro keycap command cannot run in the current context`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var _t, vt;
function yt() {
  return (yt = e(() => {
    ((_t = l()), h(), (vt = a()));
  }))();
}
function bt(e) {
  let n = (0, xt.c)(13),
    { enabled: r, isCodexMicroSettings: i } = e,
    a = t(u),
    o = (0, St.useRef)(null),
    s = (0, St.useRef)(!1),
    c;
  n[0] !== i || n[1] !== a
    ? ((c = (e) => {
        let t = Ee(
          e === `short-press` ? `realtimeVoice.toggleMicrophoneMute` : `realtimeVoice.endCall`,
          `codex_micro_hid`,
        );
        (!t && e === `short-press` && (t = Ee(`composer.startVoiceMode`, `codex_micro_hid`)),
          !(t || e === `long-press` || i) &&
            a
              .get(re)
              .warning((0, Ct.jsx)(gt, {}), {
                duration: 3,
                hasCloseButton: !1,
                id: `codex-micro-command-unavailable`,
              }));
      }),
      (n[0] = i),
      (n[1] = a),
      (n[2] = c))
    : (c = n[2]);
  let l = y(c),
    d;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = () => {
        (o.current != null && (globalThis.clearTimeout(o.current), (o.current = null)), (s.current = !1));
      }),
      (n[3] = d))
    : (d = n[3]);
  let f = y(d),
    p;
  n[4] !== l || n[5] !== r
    ? ((p = (e) => {
        if (r) {
          if (e === `release`) {
            if (s.current) {
              s.current = !1;
              return;
            }
            if (o.current == null) return;
            (globalThis.clearTimeout(o.current), (o.current = null), l(`short-press`));
            return;
          }
          o.current != null ||
            s.current ||
            (o.current = globalThis.setTimeout(() => {
              ((o.current = null), (s.current = !0), l(`long-press`));
            }, wt));
        }
      }),
      (n[4] = l),
      (n[5] = r),
      (n[6] = p))
    : (p = n[6]);
  let m = y(p),
    h,
    g;
  (n[7] !== f || n[8] !== r
    ? ((h = () => (r || f(), f)), (g = [f, r]), (n[7] = f), (n[8] = r), (n[9] = h), (n[10] = g))
    : ((h = n[9]), (g = n[10])),
    (0, St.useEffect)(h, g));
  let _;
  return (n[11] === m ? (_ = n[12]) : ((_ = { handleGesture: m }), (n[11] = m), (n[12] = _)), _);
}
var xt, St, Ct, wt;
function Tt() {
  return (Tt = e(() => {
    ((xt = l()), g(), (St = r()), yt(), N(), m(), n(), b(), (Ct = a()), (wt = 500));
  }))();
}
function Et(e, t, n) {
  if (e.key === `ENC_CW` || e.key === `ENC_CC`) return null;
  if (e.key.startsWith(`ENC`))
    return e.act === 1 ? { type: `encoder-press` } : e.act === 0 ? { type: `encoder-release` } : null;
  let r;
  if (n != null && !(`threadKey` in n))
    switch (n.type) {
      case `command`: {
        let t = K(n.commandId);
        return e.act === 1 && t != null ? { type: `command`, command: t.id } : null;
      }
      case `skill`:
        return e.act === 1 ? n : null;
      case `keycap`:
        r = q({ keycapId: n.keycapId });
    }
  else {
    let n = !t.separateMicrophoneKeys && (e.key === `ACT10` || e.key === `ACT11`) ? `ACT10_ACT11` : Ve(e.key);
    if (n == null || (!t.separateMicrophoneKeys && e.key === `ACT11`)) return null;
    r = q(t.slots[n]);
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
function Dt(e) {
  return e.act === 2 ? (e.key === `ENC_CW` ? `ArrowUp` : e.key === `ENC_CC` ? `ArrowDown` : null) : null;
}
function Ot(e, t) {
  return e.encoderMode === `custom` ? jt(e.encoder[t]) : null;
}
function kt(e, t, n) {
  switch (e.type) {
    case `idle`:
      return t === `press`
        ? { state: { type: `pressed`, pressedAt: n }, action: `start`, timeoutAt: null }
        : { state: e, action: null, timeoutAt: null };
    case `pressed`: {
      if (t !== `release`) return { state: e, action: null, timeoutAt: null };
      let r = e.pressedAt + Mt;
      return n >= r
        ? { state: X, action: `stop`, timeoutAt: null }
        : { state: { type: `waiting-for-second-press`, deadline: r }, action: null, timeoutAt: r };
    }
    case `waiting-for-second-press`:
      return n >= e.deadline
        ? { state: X, action: `stop`, timeoutAt: null }
        : t === `press`
          ? { state: { type: `latched` }, action: null, timeoutAt: null }
          : { state: e, action: null, timeoutAt: e.deadline };
    case `latched`: {
      if (t !== `press`) return { state: e, action: null, timeoutAt: null };
      let r = n + Mt;
      return { state: { type: `suppressing-presses`, deadline: r }, action: `stop`, timeoutAt: r };
    }
    case `suppressing-presses`:
      return n < e.deadline
        ? { state: e, action: null, timeoutAt: e.deadline }
        : t === `press`
          ? { state: { type: `pressed`, pressedAt: n }, action: `start`, timeoutAt: null }
          : { state: X, action: null, timeoutAt: null };
  }
}
function At(e, t, n, r) {
  let i = Fe(e);
  return { action: !r && i != null && i !== t ? jt(n[i]) : null, activeDirection: i };
}
function jt(e) {
  if (e == null || e.type === `skill`) return e;
  let t = K(e.commandId);
  return t == null ? null : { type: `command`, command: t.id };
}
var Mt, X;
function Nt() {
  return (Nt = e(() => {
    (G(), J(), xe(), (Mt = 350), (X = { type: `idle` }));
  }))();
}
function Pt(e) {
  return e.map(({ id: e }) => ({
    id: e,
    threadKey: null,
    title: null,
    selected: !1,
    status: e === 0 ? `error` : `off`,
  }));
}
function Ft(e) {
  return e.matches(Gt) ? e : e.querySelector(Gt);
}
function It(e) {
  return e.getClientRects().length > 0 && !e.matches(`:disabled`) && e.closest(Kt) == null;
}
var Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt;
function Yt() {
  return (Yt = e(() => {
    (g(),
      n(),
      (Lt = 2e3),
      (Rt = `reasoning`),
      (zt = `[data-codex-composer-root]`),
      (Bt = `[data-composer-navigation-target]`),
      (Vt = `data-composer-navigation-highlight`),
      (Ht = `data-composer-navigation-selected`),
      (Ut = `data-composer-navigation-open`),
      (Wt = `[aria-expanded="true"], [data-state="open"]`),
      (Gt = [`button`, `a[href]`, `input`, `select`, `textarea`, `[tabindex]:not([tabindex='-1'])`].join(
        `, `,
      )),
      (Kt = [`[aria-disabled='true']`, `[data-disabled]`, `[hidden]`, `[aria-hidden='true']`, `[inert]`].join(
        `, `,
      )),
      (qt = w(u, null)),
      (Jt = class {
        onInteractionStateChange;
        hasOpenNavigationSurface;
        activeComposerKey = null;
        selectedTargetId = Rt;
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
            Array.from(e.querySelectorAll(Bt)).flatMap((t) => {
              if (t.closest(zt) !== e) return [];
              let n = t.dataset.composerNavigationTarget,
                r = Ft(t);
              return n != null && r != null && It(r) ? [{ control: r, id: n }] : [];
            })
          );
        }
        setActiveComposer(e) {
          e !== this.activeComposerKey &&
            ((this.activeComposerKey = e), (this.selectedTargetId = Rt), this.dispose());
        }
        getSelectedTarget(e) {
          let t =
            e.find(({ id: e }) => e === this.selectedTargetId) ??
            e.find(({ id: e }) => e === Rt) ??
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
            this.selectedTarget?.removeAttribute(Ut),
            this.selectedTarget?.removeAttribute(Ht),
            (this.selectedTarget = e),
            e?.setAttribute(Ht, ``),
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
                      e.removeAttribute(Ut),
                      e.removeAttribute(Ht),
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
              this.selectedTargetObserver.observe(e.closest(zt) ?? document.body, {
                childList: !0,
                subtree: !0,
              })));
        }
        showHighlight(e) {
          (this.removeHighlight(),
            (this.highlightedTarget = e),
            e.dataset.composerNavigationTarget !== Rt &&
              e.scrollIntoView({ block: `nearest`, inline: `nearest` }),
            e.setAttribute(Vt, ``),
            this.startOpenSurfaceTracking(),
            this.selectedTargetOpen || this.setInteractionState(`selected`),
            (this.highlightTimeout = globalThis.setTimeout(() => {
              (e.removeAttribute(Vt),
                this.highlightedTarget === e &&
                  ((this.highlightedTarget = null),
                  (this.highlightTimeout = null),
                  this.selectedTargetOpen ||
                    (this.stopOpenSurfaceTracking(), this.setInteractionState(null))));
            }, Lt)));
        }
        removeHighlight() {
          (this.highlightTimeout != null &&
            (globalThis.clearTimeout(this.highlightTimeout), (this.highlightTimeout = null)),
            this.highlightedTarget?.removeAttribute(Vt),
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
          let t = e.matches(Wt) || this.hasOpenNavigationSurface();
          (e.toggleAttribute(Ut, t),
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
function Xt() {
  let e = (0, Sn.c)(1),
    t = te.codexMicro;
  if (t == null) return null;
  let n;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Cn.jsx)(Zt, { codexMicro: t })), (e[0] = n))
      : (n = e[0]),
    n
  );
}
function Zt(e) {
  let n = (0, Sn.c)(15),
    { codexMicro: r } = e,
    i = t(u),
    { status: a } = ee(R),
    o = (0, $.useRef)(!1),
    c = (0, $.useRef)(!1),
    l = (0, $.useRef)(null),
    d = (0, $.useRef)(!1),
    f,
    p;
  (n[0] === i
    ? ((f = n[1]), (p = n[2]))
    : ((f = (e) => {
        let { cause: t, state: n } = e;
        ((o.current = !0), t === `device-lifecycle` && (l.current = { value: i.get(U) }), $t(i, n));
      }),
      (p = [i]),
      (n[0] = i),
      (n[1] = f),
      (n[2] = p)),
    s(`codex-micro-device-state-changed`, f, p));
  let m, h;
  (n[3] === i
    ? ((m = n[4]), (h = n[5]))
    : ((m = (e) => {
        let { isOwner: t } = e;
        ((c.current = !0), i.set(Ce, t));
      }),
      (h = [i]),
      (n[3] = i),
      (n[4] = m),
      (n[5] = h)),
    s(`codex-micro-window-ownership-changed`, m, h));
  let g, _;
  (n[6] === i
    ? ((g = n[7]), (_ = n[8]))
    : ((g = (e) => {
        let { state: t, transition: n, transport: r } = e,
          a = l.current,
          o = a == null ? i.get(U) : a.value;
        ((l.current = null), We(i, t, n, r, o));
      }),
      (_ = [i]),
      (n[6] = i),
      (n[7] = g),
      (n[8] = _)),
    s(`codex-micro-device-lifecycle`, g, _));
  let y, b;
  (n[9] !== r || n[10] !== i
    ? ((y = () => {
        let e = !0;
        (r.getState().then((t) => {
          e && !o.current && $t(i, t);
        }),
          r.ownsPrimaryWindow().then((t) => {
            e && !c.current && i.set(Ce, t);
          }));
        let t = null,
          n = null,
          a = null,
          s = !1,
          l = () => {
            if (!e) {
              ((a = null), (s = !1));
              return;
            }
            let t = a;
            if (((a = null), t == null)) {
              s = !1;
              return;
            }
            r.updateLighting(t).then(l, l);
          },
          u = i.watch((e) => {
            let { get: i } = e;
            if (!i(Ce)) {
              ((t = null), (n = null), (a = null));
              return;
            }
            let o = i(et),
              c = o.slots.map(Qt),
              u = S(i, v.agentSource) === `custom` ? (i(tt) ?? Xe) : null,
              d = o.slots.map((e) => {
                let { id: t } = e,
                  n = Ke(t),
                  r = n == null ? null : u?.[n];
                return r == null || !(`type` in r)
                  ? `thread`
                  : r.type === `command` && ze(r.commandId) != null
                    ? `recent-thread`
                    : `action`;
              }),
              f = S(i, v.singleTapAgentKeys),
              p = JSON.stringify({ agentThreadKeys: c, agentKeyKinds: d, singleTapAgentKeys: f });
            p !== t && ((t = p), r.updateAgentThreadKeys(c, d, f));
            let m = i(He),
              h = st(i(ut)),
              g = i(qt),
              _ = o;
            m == null
              ? h == null
                ? g != null &&
                  (_ = {
                    ...o,
                    preserveSelectionLighting: !0,
                    slots: g === `open` ? Pt(o.slots) : o.slots,
                    snakingAmbientStatus: g === `open` ? `unread` : `working`,
                  })
                : (_ = {
                    brightness: o.brightness,
                    inactivityTimeoutMs: o.inactivityTimeoutMs,
                    preserveSelectionLighting: !0,
                    slots: h,
                    snakingAmbientStatus: `error`,
                    suspendDeviceStatusRefresh: !0,
                    voiceState: `idle`,
                  })
              : (_ = { ...o, slots: m });
            let y = Je(_);
            y !== n && ((n = y), (a = _), s || ((s = !0), l()));
          }),
          d = L((e, t) => {
            let { clientThreadId: n, conversationId: r } = t;
            Ye(i, n, r);
          });
        return () => {
          ((e = !1), (a = null), u(), d());
        };
      }),
      (b = [r, i]),
      (n[9] = r),
      (n[10] = i),
      (n[11] = y),
      (n[12] = b))
    : ((y = n[11]), (b = n[12])),
    (0, $.useEffect)(y, b));
  let x;
  return (
    n[13] === a
      ? (x = n[14])
      : ((x = a === `connected` ? (0, Cn.jsx)(tn, { miniGameRearmRequiredRef: d }) : null),
        (n[13] = a),
        (n[14] = x)),
    x
  );
}
function Qt(e) {
  return e.threadKey;
}
function $t(e, t) {
  (Ne(e, t), (t.status === `detected` || t.status === `connected`) && Le(e, t.model));
}
function en(e, t, n) {
  return (t === `manageTasks` &&
    !e.get(V, { name: `automations.local` }).isCapable &&
    !e.get(V, { name: `automations.cloud` }).isCapable) ||
    (K(t)?.requiredAccess != null && !e.get(O))
    ? !1
    : Ee(t, n);
}
function tn(e) {
  let n = (0, Sn.c)(75),
    { miniGameRearmRequiredRef: r } = e,
    i = t(u),
    a = p(),
    c;
  n[0] === a.pathname
    ? (c = n[1])
    : ((c = a.pathname.startsWith(`/settings/codex-micro`)), (n[0] = a.pathname), (n[1] = c));
  let l = c,
    m = f(),
    h = Se(),
    g = ce(),
    _ = x(v.agentSource),
    y = x(v.layout),
    b = ee(Ce),
    te = ee(tt),
    C;
  n[2] === y ? (C = n[3]) : ((C = Be(y)), (n[2] = y), (n[3] = C));
  let w = C,
    ne = ge(),
    ie = ee(pe),
    T = (ne || ie) && w.voiceButtonMode === `realtime` ? `realtime` : `push-to-talk`,
    oe = b && T === `realtime`,
    se;
  n[4] !== l || n[5] !== oe
    ? ((se = { enabled: oe, isCodexMicroSettings: l }), (n[4] = l), (n[5] = oe), (n[6] = se))
    : (se = n[6]);
  let { handleGesture: E } = bt(se),
    ue;
  n[7] !== _ ||
  n[8] !== te ||
  n[9] !== w.analogStick ||
  n[10] !== w.encoder ||
  n[11] !== w.encoderMode ||
  n[12] !== w.slots
    ? ((ue =
        Object.values(w.slots).some(cn) ||
        Object.values(w.analogStick).some(sn) ||
        (w.encoderMode === `custom` && Object.values(w.encoder).some(on)) ||
        (_ === `custom` && Object.values(te ?? Xe).some(an))),
      (n[7] = _),
      (n[8] = te),
      (n[9] = w.analogStick),
      (n[10] = w.encoder),
      (n[11] = w.encoderMode),
      (n[12] = w.slots),
      (n[13] = ue))
    : (ue = n[13]);
  let de = ue,
    fe;
  n[14] === de ? (fe = n[15]) : ((fe = { enabled: de }), (n[14] = de), (n[15] = fe));
  let { skills: D } = me(void 0, void 0, fe),
    O = (0, $.useRef)(null),
    k = (0, $.useRef)(ct),
    A;
  n[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((A = new Set()), (n[16] = A)) : (A = n[16]);
  let ve = (0, $.useRef)(A),
    j = (0, $.useRef)(X),
    M = (0, $.useRef)(null),
    xe = (0, $.useRef)(T),
    N = (0, $.useRef)(null),
    P = (0, $.useRef)(null),
    F = (0, $.useRef)(null),
    I = (0, $.useRef)(!1),
    L = (0, $.useRef)(null),
    R = (0, $.useRef)(null),
    Te;
  n[17] === i
    ? (Te = n[18])
    : ((Te = function () {
        return ((R.current ??= new Jt((e) => i.set(qt, e), rn)), R.current);
      }),
      (n[17] = i),
      (n[18] = Te));
  let z = Te,
    B;
  n[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = function () {
        L.current != null && (globalThis.clearTimeout(L.current), (L.current = null));
      }),
      (n[19] = B))
    : (B = n[19]);
  let je = B,
    V;
  n[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = function () {
        (je(),
          (L.current = globalThis.setTimeout(() => {
            L.current = null;
            let e = mn();
            e != null && hn(e) && Z(`Escape`, e);
          }, En)));
      }),
      (n[20] = V))
    : (V = n[20]);
  let Ne = V,
    H;
  n[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = function (e) {
        let t = globalThis.performance.now(),
          n = kt(j.current, e, t);
        ((j.current = n.state),
          M.current != null && (globalThis.clearTimeout(M.current), (M.current = null)),
          ln(n.action));
        let r = n.timeoutAt;
        r != null &&
          (M.current = globalThis.setTimeout(
            () => {
              M.current = null;
              let e = kt(j.current, `timeout`, r);
              ((j.current = e.state), ln(e.action));
            },
            Math.max(0, r - t),
          ));
      }),
      (n[21] = H))
    : (H = n[21]);
  let Pe = H,
    U;
  n[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = function () {
        for (let e of ve.current) globalThis.clearTimeout(e);
        ve.current.clear();
      }),
      (n[22] = U))
    : (U = n[22]);
  let Fe = U,
    Ie;
  n[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = function (e, t, n) {
        if (!t) return e() ? `triggered` : `unavailable`;
        let r = globalThis.setTimeout(() => {
          (ve.current.delete(r), n(e() ? `triggered` : `unavailable`));
        }, Tn);
        return (ve.current.add(r), null);
      }),
      (n[23] = Ie))
    : (Ie = n[23]);
  let Le = Ie,
    Re;
  n[24] === D
    ? (Re = n[25])
    : ((Re = function (e) {
        let t = ye(),
          n = D.find((n) => n.enabled && n.name === e.skillName && n.path === e.skillPath && le(n, t));
        return (
          n != null && (o.dispatchHostMessage({ type: `codex-micro-insert-skill-mention`, skill: d(n) }), !0)
        );
      }),
      (n[24] = D),
      (n[25] = Re));
  let W = Re,
    G;
  n[26] !== W || n[27] !== l || n[28] !== i
    ? ((G = function (e) {
        if (xn() != null) return;
        let t = Ot(Be(S(i.get, v.layout)), e);
        if (t?.type === `skill`) {
          W(t);
          return;
        }
        t?.type === `command` &&
          !en(i, t.command, `codex_micro_encoder`) &&
          !l &&
          i
            .get(re)
            .warning((0, Cn.jsx)(gt, {}), {
              duration: 3,
              hasCloseButton: !1,
              id: `codex-micro-command-unavailable`,
            });
      }),
      (n[26] = W),
      (n[27] = l),
      (n[28] = i),
      (n[29] = G))
    : (G = n[29]);
  let K = G,
    q;
  n[30] === i
    ? (q = n[31])
    : ((q = function (e, t) {
        (P.current != null && globalThis.clearTimeout(P.current),
          at(i, e, t),
          (P.current = globalThis.setTimeout(() => {
            ((P.current = null), it(i));
          }, 600)));
      }),
      (n[30] = i),
      (n[31] = q));
  let J = q,
    Ve;
  n[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ve = () => {
        (M.current != null && (globalThis.clearTimeout(M.current), (M.current = null)),
          j.current.type !== `idle` && j.current.type !== `suppressing-presses` && ln(`stop`),
          (j.current = X));
      }),
      (n[32] = Ve))
    : (Ve = n[32]);
  let Y = (0, $.useEffectEvent)(Ve),
    He;
  n[33] !== Y || n[34] !== T
    ? ((He = () => {
        xe.current !== T && ((xe.current = T), Y());
      }),
      (n[33] = Y),
      (n[34] = T),
      (n[35] = He))
    : (He = n[35]);
  let Ue;
  (n[36] === T ? (Ue = n[37]) : ((Ue = [T]), (n[36] = T), (n[37] = Ue)), (0, $.useEffect)(He, Ue));
  let We;
  n[38] !== Y || n[39] !== i
    ? ((We = () => {
        let e = () => {
            (N.current != null && (globalThis.clearTimeout(N.current), (N.current = null)),
              P.current != null && (globalThis.clearTimeout(P.current), (P.current = null)),
              F.current != null && (globalThis.clearTimeout(F.current), (F.current = null)),
              (I.current = !1),
              je(),
              R.current?.dispose(),
              (R.current = null),
              i.set(qt, null),
              Fe(),
              Y(),
              (O.current = null),
              (k.current = ct),
              i.set(ke, nn),
              rt(i));
          },
          t = i.watch((t) => {
            let { get: n } = t;
            n(Ce) || e();
          });
        return () => {
          (t(), e());
        };
      }),
      (n[38] = Y),
      (n[39] = i),
      (n[40] = We))
    : (We = n[40]);
  let Ge;
  (n[41] === i ? (Ge = n[42]) : ((Ge = [i]), (n[41] = i), (n[42] = Ge)), (0, $.useEffect)(We, Ge));
  let qe;
  n[43] !== z ||
  n[44] !== E ||
  n[45] !== W ||
  n[46] !== l ||
  n[47] !== w ||
  n[48] !== m ||
  n[49] !== h ||
  n[50] !== K ||
  n[51] !== i ||
  n[52] !== g ||
  n[53] !== T
    ? ((qe = (e) => {
        let { event: t } = e;
        we(i, t);
        let n = t.slot == null ? null : Ke(t.slot),
          r = n != null && S(i.get, v.agentSource) === `custom` ? (i.get(tt) ?? Xe)[n] : null,
          a = r != null && !(`threadKey` in r),
          s = i.get(ut);
        if (ht(s, t)) return;
        if (t.act === 1 && kn.test(t.key) && !a) {
          let e = pn();
          if (e != null) {
            t.key === An &&
              Z(
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
          (N.current != null && globalThis.clearTimeout(N.current),
          (N.current = globalThis.setTimeout(() => {
            (Oe(i), (N.current = null));
          }, 180)));
        let c = Dt(t);
        if (c != null) {
          if (w.encoderMode === `custom`) {
            K(t.key === `ENC_CW` ? `right` : `left`);
            return;
          }
          if (w.encoderMode === `reasoning`) {
            if (xn() != null) return;
            let e = he();
            if (e == null || z().getActivationTarget(e.root, e.composerId, `reasoning`) == null) return;
            (Ee(
              c === `ArrowUp` ? `composer.decreaseReasoningEffort` : `composer.increaseReasoningEffort`,
              `codex_micro_encoder`,
            ),
              mn() != null && Ne());
            return;
          }
          if (w.encoderMode === `conversation-scroll`) {
            fn(c);
            return;
          }
          let e = pn();
          if (e != null) {
            Z(c, e);
            return;
          }
          if (xn() != null) return;
          let n = yn();
          if (n != null) {
            un(c, n);
            return;
          }
          let r = he();
          r != null && z().move(r.root, c === `ArrowDown` ? `next` : `previous`, r.composerId);
          return;
        }
        let u = Et(t, w, r);
        if (u?.type === `encoder-press`) {
          if (F.current != null || I.current) return;
          F.current = globalThis.setTimeout(() => {
            if (
              ((F.current = null),
              (I.current = !0),
              R.current?.clearHighlight(),
              Be(S(i.get, v.layout)).encoderMode === `custom`)
            ) {
              K(`longPress`);
              return;
            }
            m(`/settings/codex-micro`);
          }, Dn);
          return;
        }
        if (u?.type === `encoder-release`) {
          if (I.current) {
            I.current = !1;
            return;
          }
          if (F.current == null) return;
          if ((globalThis.clearTimeout(F.current), (F.current = null), w.encoderMode === `custom`)) {
            K(`click`);
            return;
          }
          if (w.encoderMode === `conversation-scroll`) {
            fn(`bottom`);
            return;
          }
          let e = pn();
          if (e != null) {
            let t = mn();
            if (w.encoderMode === `reasoning` && t != null && hn(t)) {
              let e = _n(t);
              if (e != null) {
                (je(), e.focus(), Z(`Enter`, e));
                return;
              }
            }
            let n =
              w.encoderMode === `reasoning` &&
              t != null &&
              gn(t) &&
              e !== t &&
              e.matches(`[role="menu"][data-state="open"]`);
            (Z(`Enter`, e),
              n &&
                globalThis.queueMicrotask(() => {
                  e.isConnected && Z(`ArrowLeft`, e);
                }),
              w.encoderMode === `reasoning` && t != null && gn(t) && Ne());
            return;
          }
          let t = xn();
          if (t != null) {
            Z(`Enter`, t);
            return;
          }
          let n = yn();
          if (n != null) {
            un(`Enter`, n);
            return;
          }
          let r = he(),
            i =
              r == null
                ? null
                : (z().getActivationTarget(
                    r.root,
                    r.composerId,
                    w.encoderMode === `reasoning` ? `reasoning` : void 0,
                  ) ?? null);
          if (i != null) {
            (w.encoderMode !== `reasoning` && i.focus(),
              i.dataset.composerNavigationTarget === `add-context` ? i.click() : Z(`Enter`, i),
              w.encoderMode === `reasoning` && Ne());
            return;
          }
          Z(`Enter`);
          return;
        }
        if (u?.type === `command` && !(r != null && `commandId` in r && ze(r.commandId) != null)) {
          !en(i, u.command, `codex_micro_hid`) &&
            !l &&
            i
              .get(re)
              .warning((0, Cn.jsx)(gt, {}), {
                duration: 3,
                hasCloseButton: !1,
                id: `codex-micro-command-unavailable`,
              });
          return;
        }
        if (u?.type === `external-url`) {
          ae({ href: u.url, initiator: `open_in_browser_bridge` });
          return;
        }
        if (u?.type === `composer-text`) {
          o.dispatchHostMessage({ type: `codex-micro-insert-composer-text`, text: u.text });
          return;
        }
        if (u?.type === `skill`) {
          W(u);
          return;
        }
        if (u?.type === `push-to-talk-press` || u?.type === `push-to-talk-release`) {
          let e = u.type === `push-to-talk-press` ? `press` : `release`;
          T === `realtime` ? E(e) : Pe(e);
          return;
        }
        if (t.act !== 1 || t.slot == null) return;
        let d = Ae(t.threadKey);
        if (d == null) {
          t.threadKey == null &&
            S(i.get, v.agentSource) === `custom` &&
            n != null &&
            r == null &&
            $e(i, n, i.get(De, On)) &&
            g();
          return;
        }
        (t.slot != null && Ze(i, t.slot, d.key), _e(i, d.key, h, m));
      }),
      (n[43] = z),
      (n[44] = E),
      (n[45] = W),
      (n[46] = l),
      (n[47] = w),
      (n[48] = m),
      (n[49] = h),
      (n[50] = K),
      (n[51] = i),
      (n[52] = g),
      (n[53] = T),
      (n[54] = qe))
    : (qe = n[54]);
  let Je;
  (n[55] !== E ||
  n[56] !== l ||
  n[57] !== w ||
  n[58] !== m ||
  n[59] !== h ||
  n[60] !== i ||
  n[61] !== D ||
  n[62] !== g ||
  n[63] !== T
    ? ((Je = [E, l, w, m, h, i, D, g, T]),
      (n[55] = E),
      (n[56] = l),
      (n[57] = w),
      (n[58] = m),
      (n[59] = h),
      (n[60] = i),
      (n[61] = D),
      (n[62] = g),
      (n[63] = T),
      (n[64] = Je))
    : (Je = n[64]),
    s(`codex-micro-hid-event`, qe, Je));
  let Ye;
  n[65] !== W || n[66] !== w.analogStick || n[67] !== r || n[68] !== i || n[69] !== J
    ? ((Ye = (e) => {
        let { event: t } = e;
        be(i, t);
        let n = O.current,
          a = i.get(Me),
          o = ft();
        if (i.get(ut) != null) {
          ((r.current = !0), (k.current = ct), (O.current = null));
          return;
        }
        if (r.current) {
          ((O.current = null), t.distance <= 0.1 && (r.current = !1));
          return;
        }
        if (o != null && !a) {
          let e = lt(k.current, t, globalThis.performance.now());
          if (((k.current = e.state), e.activated)) {
            (Fe(),
              (r.current = !0),
              (O.current = null),
              mt(i),
              i.set(ut, { composerId: o, game: dt() }),
              J(t, 1));
            return;
          }
          if (e.captured) {
            (Fe(), (O.current = null), J(t, e.progress));
            return;
          }
        } else k.current = ct;
        let s = At(t, n, w.analogStick, a);
        O.current = s.activeDirection;
        let c = function (e) {
            (P.current != null && (globalThis.clearTimeout(P.current), (P.current = null)),
              nt(i, {
                activeDirection: s.activeDirection,
                enabled: !a,
                event: t,
                executionStatus: e,
                mapping: w.analogStick,
                previousActiveDirection: n,
              }).visible &&
                (P.current = globalThis.setTimeout(() => {
                  ((P.current = null), (O.current = null), it(i));
                }, 600)));
          },
          l = !1,
          u = null;
        if (s.action?.type === `command`) {
          let e = s.action.command;
          ((u = Le(() => en(i, e, `codex_micro_joystick`), o != null, c)), (l = u == null));
        } else if (s.action?.type === `skill`) {
          let e = s.action;
          ((u = Le(() => W(e), o != null, c)), (l = u == null));
        }
        l || c(u);
      }),
      (n[65] = W),
      (n[66] = w.analogStick),
      (n[67] = r),
      (n[68] = i),
      (n[69] = J),
      (n[70] = Ye))
    : (Ye = n[70]);
  let Qe;
  return (
    n[71] !== w.analogStick || n[72] !== i || n[73] !== D
      ? ((Qe = [w.analogStick, i, D]), (n[71] = w.analogStick), (n[72] = i), (n[73] = D), (n[74] = Qe))
      : (Qe = n[74]),
    s(`codex-micro-joystick-event`, Ye, Qe),
    null
  );
}
function nn(e) {
  return { ...e, joystick: { angle: 0, distance: 0 }, knobPulse: null, pressedKeys: [] };
}
function rn() {
  return pn() != null;
}
function an(e) {
  return e != null && `type` in e && e.type === `skill`;
}
function on(e) {
  return e?.type === `skill`;
}
function sn(e) {
  return e?.type === `skill`;
}
function cn(e) {
  return e.action?.type === `skill`;
}
function ln(e) {
  e != null &&
    o.dispatchHostMessage({
      type: e === `start` ? `codex-micro-push-to-talk-start` : `codex-micro-push-to-talk-stop`,
    });
}
function Z(e, t = window) {
  let n = document.activeElement;
  (n != null && (!(t instanceof Element) || t.contains(n)) ? n : t).dispatchEvent(
    new KeyboardEvent(`keydown`, { bubbles: !0, cancelable: !0, code: Re, key: e }),
  );
}
function un(e, t) {
  if (t.hasAttribute(`data-codex-composer-request-navigation`)) {
    Z(e, t);
    return;
  }
  t.hasAttribute(`data-codex-approval-surface`) && dn(e, t);
}
function dn(e, t) {
  let n = bn(t);
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
function fn(e) {
  if (xn() != null) return;
  let t = Q(`[data-app-shell-right-panel-full-width="true"]`) != null,
    n;
  if (
    ((n = t
      ? Array.from(
          Q(`[data-app-shell-focus-area="right-panel"]`)?.querySelectorAll(
            `${A.reviewScroll}, .cm-scroller, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll`,
          ) ?? [],
        ).find((e) => e.scrollHeight > e.clientHeight)
      : (he()?.root.closest(A.timelineScroll) ?? Q(A.timelineScroll))),
    n == null)
  )
    return;
  if (e === `bottom`) {
    t ? (n.scrollTop = n.scrollHeight) : F(n, { type: `edge`, edge: `bottom` });
    return;
  }
  let r = e === `ArrowUp` ? -160 : wn;
  (n.dispatchEvent(new WheelEvent(`wheel`, { bubbles: !0, deltaY: r })),
    t ? (n.scrollTop += r) : F(n, { type: `pixels`, y: r }));
}
function pn() {
  let e = document.activeElement?.closest(Fn);
  return e != null && e.closest(Nn) == null ? e : Q(Fn);
}
function mn() {
  return (
    Array.from(document.querySelectorAll(`[role="menu"][data-state="open"]`)).find(
      (e) => e.closest(Nn) == null && e.querySelector(`[data-model-picker-view]`) != null,
    ) ?? null
  );
}
function hn(e) {
  return e.querySelector(`[data-model-picker-view="simple"]`) != null;
}
function gn(e) {
  return e.querySelector(`[data-model-picker-view="advanced"]`) != null;
}
function _n(e) {
  let t = e.querySelector(Mn);
  return t == null || t.dataset.interactive === `false` || vn(t) ? null : t;
}
function vn(e) {
  return e.closest(Pn) != null;
}
function yn() {
  return Q(Ln);
}
function bn(e) {
  return Array.from(e.querySelectorAll(Rn)).filter(
    (e) => e.closest(`[hidden],[aria-hidden='true'],[inert],${Nn}`) == null,
  );
}
function xn() {
  return Q(In);
}
function Q(e) {
  return document.querySelector(`:is(${e}):not(${Nn} *)`);
}
var Sn, $, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn;
function zn() {
  return (zn = e(() => {
    ((Sn = l()),
      g(),
      ie(),
      ($ = r()),
      c(),
      H(),
      B(),
      z(),
      D(),
      N(),
      W(),
      ue(),
      i(),
      j(),
      M(),
      m(),
      de(),
      se(),
      C(),
      E(),
      Tt(),
      fe(),
      _(),
      n(),
      Te(),
      ne(),
      P(),
      Pe(),
      k(),
      je(),
      Nt(),
      Ue(),
      yt(),
      G(),
      qe(),
      oe(),
      Yt(),
      ot(),
      J(),
      pt(),
      Ge(),
      Y(),
      Ie(),
      I(),
      Qe(),
      (Cn = a()),
      (wn = 160),
      (Tn = 220),
      (En = 1500),
      (Dn = 500),
      (On = ve({ entrypoint: `home` })),
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
export { Xt as CodexMicroBridge };
//# sourceMappingURL=codex-micro-bridge-4273ff6c6a75.js.map
