import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $gt as r,
  $st as i,
  AH as a,
  AS as o,
  ATt as s,
  CCt as c,
  CTt as l,
  DB as u,
  DCt as d,
  E$ as f,
  EOt as p,
  ETt as m,
  FBt as h,
  FNt as g,
  FTt as _,
  Ggt as v,
  Gp as y,
  HTt as b,
  ITt as x,
  JOt as S,
  Jb as C,
  Jgt as w,
  Jj as T,
  Jp as E,
  KOt as D,
  Kp as O,
  LNt as k,
  Lk as A,
  MNt as j,
  MTt as M,
  NNt as N,
  NQ as P,
  Nwt as F,
  OB as I,
  OOt as L,
  PBt as R,
  PQ as z,
  Qgt as ee,
  Qst as B,
  RFt as V,
  RV as H,
  SY as U,
  T$ as te,
  TOt as ne,
  TTt as W,
  TY as G,
  UTt as K,
  VTt as re,
  Vrt as ie,
  WK as ae,
  WTt as q,
  XO as oe,
  XOt as J,
  Y3 as se,
  YO as ce,
  YOt as le,
  Yb as ue,
  Yj as de,
  Z3 as fe,
  ZSt as Y,
  Zgt as pe,
  ast as me,
  bb as he,
  cx as ge,
  dM as _e,
  dY as ve,
  dkt as ye,
  e_t as be,
  g3 as xe,
  h3 as Se,
  hit as Ce,
  iCt as we,
  iFt as Te,
  iit as Ee,
  ist as De,
  jS as Oe,
  jTt as ke,
  jwt as Ae,
  kCt as je,
  kTt as Me,
  lit as X,
  mV as Ne,
  nB as Pe,
  nCt as Fe,
  nJ as Ie,
  oit as Le,
  okt as Re,
  ox as Z,
  qgt as ze,
  qp as Be,
  qrt as Ve,
  rB as He,
  r_t as Ue,
  sM as We,
  sct as Ge,
  tkt as Ke,
  wTt as qe,
  xb as Je,
  zFt as Ye,
  zk as Xe,
  zlt as Ze,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $7n as Qe,
  $P as $e,
  $R as et,
  $X as tt,
  A3t as nt,
  BX as rt,
  CCn as it,
  Df as at,
  Dm as ot,
  E3t as st,
  Ef as ct,
  Em as lt,
  FCt as ut,
  FLn as dt,
  Fm as ft,
  GR as Q,
  Gu as pt,
  HR as mt,
  Hu as ht,
  Im as gt,
  JR as _t,
  KBr as vt,
  KR as yt,
  Lm as bt,
  Mt as xt,
  Nn as St,
  Nt as Ct,
  Nvr as wt,
  Of as Tt,
  Og as Et,
  PCt as Dt,
  PLn as Ot,
  Pn as kt,
  QP as At,
  QR as jt,
  Rm as Mt,
  S9 as Nt,
  Sf as Pt,
  T3t as Ft,
  UR as It,
  Uu as Lt,
  WR as Rt,
  WX as zt,
  Wu as Bt,
  XLt as Vt,
  XR as Ht,
  Xu as Ut,
  YLt as Wt,
  YR as Gt,
  ZR as Kt,
  Zu as qt,
  _Dt as Jt,
  _d as Yt,
  _tn as Xt,
  ah as Zt,
  bd as Qt,
  ctr as $t,
  dd as en,
  dq as tn,
  e9n as nn,
  eer as rn,
  ez as an,
  fbr as on,
  fq as sn,
  gd as cn,
  ih as ln,
  iz as un,
  kg as dn,
  mDr as fn,
  njr as pn,
  nz as mn,
  otr as hn,
  pDr as gn,
  pbr as _n,
  pd as vn,
  qR as yn,
  rz as bn,
  tjr as xn,
  tz as Sn,
  vDt as Cn,
  vd as wn,
  vtn as Tn,
  wCn as En,
  wh as Dn,
  x9 as On,
  xln as kn,
  yd as An,
  zX as jn,
  zm as Mn,
} from "./app-initial-ad16eaadf81f.js";
import { i as Nn, t as Pn } from "./transcript-state-6eb190d3a30e.js";
import { c as Fn, l as In } from "./aeon-appearance-colors-b50b0bb628b3.js";
import { i as Ln, n as Rn, r as zn, t as Bn } from "./toggle-composer-context-menu-46f7adeb17d4.js";
import { a as Vn, c as Hn, d as Un, f as Wn, i as Gn, u as Kn } from "./avatar-mascot-button-e7fcb276ea86.js";
import { n as qn, t as Jn } from "./mini-orbit-artwork-a5d57e0132e9.js";
import { n as Yn, t as Xn } from "./sound-on-4a5084b084e9.js";
import { n as Zn, t as Qn } from "./realtime-voice-handoff-target-fcb4db9f6024.js";
import { n as $n, t as er } from "./observed-message-performance-marker-f5abdfaa796b.js";
var tr, nr, rr;
function ir() {
  return (ir = e(() => {
    (Y(),
      It(),
      i(),
      (tr = je(B, () => null, {
        onMount: (e, t) =>
          t.watch(({ get: t }) => {
            let n = t(yn),
              r = t(Gt),
              i = t(_t);
            e((e) => {
              if (!r || e?.accountId !== n) return null;
              if (i == null) return e;
              let t = i.find(({ id: t }) => t === e.agent.id);
              return t == null ? null : { ...e, agent: t };
            });
          }),
      })),
      (nr = c(B, ({ get: e }) => {
        let t = e(tr);
        return e(Gt) && t?.accountId === e(yn) ? t.agent : null;
      })),
      (rr = c(B, ({ get: e }) => e(nr) != null)));
  }))();
}
function ar(e) {
  e.set(sr, (e) => e + 1);
}
var or, sr, cr, lr, ur, dr;
function fr() {
  return (fr = e(() => {
    ((or = t(Te(), 1)),
      Y(),
      $e(),
      It(),
      i(),
      tn(),
      mn(),
      Pn(),
      ir(),
      (sr = je(B, 0)),
      (cr = d(
        B,
        () => null,
        ({ get: e, scope: t, set: n }) => {
          let r = e(yn);
          if ((n(null), !e(Gt))) return;
          let i = new Map(),
            a = null,
            o = null,
            s,
            c;
          function l(e) {
            let t = a?.kind === `onboarding` && e?.kind !== `onboarding`;
            ((a = e), n(e), t && an(r));
          }
          function u() {
            (clearTimeout(c), (c = setTimeout(() => l(null), 1e4)));
          }
          let d = t.watch(({ get: e }) => {
            let t = e(At) && !e(Nn) && e(nr) == null,
              n = e(Rt),
              r = e(_t),
              d = e(Ht),
              f = e(sr),
              p = s != null && f !== s;
            s = f;
            let m = null,
              h = !1;
            for (let t of r ?? []) {
              let { data: r } = e(sn, t.conversationId);
              if (r == null) {
                i.delete(t.id);
                continue;
              }
              let o =
                  r.latestMessage == null
                    ? null
                    : {
                        id: JSON.stringify([r.roomId, r.latestMessage.id]),
                        text: r.latestMessage.text || r.latestMessage.preview || null,
                        message: r.latestMessage,
                      },
                s = i.get(t.id),
                c = s?.roomId === r.roomId,
                l =
                  c &&
                  r.latestMessage != null &&
                  s.id !== r.latestMessage.id &&
                  (s.createdAt == null || wt(r.latestMessage.createdAt, s.createdAt) >= 0),
                u = r.hasUnread,
                f = n?.id === t.id,
                p = l && (u || f),
                g = !f && s?.hasUnread === !0 && !u,
                _ = !c || l ? r.latestMessage : s;
              (i.set(t.id, {
                roomId: r.roomId,
                id: _?.id ?? null,
                createdAt: _?.createdAt ?? null,
                hasUnread: u,
              }),
                !((n != null && !f) || d.includes(t.id)) &&
                  o != null &&
                  (p || (!g && !h && a?.agent.id === t.id && a.id === o.id)) &&
                  ((m = { kind: `message`, agent: t, ...o }), (h ||= p)));
            }
            if (r != null) for (let e of i.keys()) r.some((t) => t.id === e) || i.delete(e);
            let g = e(Q);
            (g == null
              ? (o = null)
              : t &&
                (g.mode === `temporary` || n?.id === g.agent.id) &&
                (o !== g.agent.id || a?.kind === `onboarding`) &&
                ((h = o !== g.agent.id),
                (o = g.agent.id),
                (m = { kind: `onboarding`, agent: g.agent, id: `orbit-onboarding`, onboarding: g })),
              !t || m == null ? (clearTimeout(c), l(null)) : (l(m), (h || p) && u()));
          });
          return () => {
            (d(), clearTimeout(c), a?.kind === `onboarding` && an(r));
          };
        },
        { isEqual: or.default },
      )),
      (lr = c(B, ({ get: e }) => {
        let t = e(Rt);
        return e(At) &&
          t != null &&
          !e(Ht).includes(t.id) &&
          !e(Nn) &&
          e(nr) == null &&
          e(sn, t.conversationId).data?.isTyping
          ? t
          : null;
      })),
      (ur = c(B, ({ get: e }) => e(cr) != null || e(lr) != null)),
      (dr = c(B, ({ get: e }) => {
        let t = e(cr);
        return t?.kind === `onboarding` && t.onboarding.mode === `temporary`;
      })));
  }))();
}
var pr, mr, hr;
function gr() {
  return (gr = e(() => {
    ((pr = `_Root_78xu1_2`), (mr = `_Quote_78xu1_2`), (hr = { Root: pr, Quote: mr }));
  }))();
}
function _r(e) {
  let t = (0, vr.c)(16),
    { reply: n, onRemove: r } = e,
    i = Re(),
    a;
  t[0] === n.text ? (a = t[1]) : ((a = fn(n.text)), (t[0] = n.text), (t[1] = a));
  let o = a,
    s,
    c,
    l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = j(`flex min-w-0 items-center gap-1 rounded-xl px-2 py-1.5 text-size-chat-sm leading-4`, hr.Root)),
      (c = (0, yr.jsx)(u, { asset: Se })),
      (l = j(`min-w-0 flex-1 truncate select-text`, hr.Quote)),
      (t[2] = s),
      (t[3] = c),
      (t[4] = l))
    : ((s = t[2]), (c = t[3]), (l = t[4]));
  let d;
  t[5] === i
    ? (d = t[6])
    : ((d = i.formatMessage({
        id: `avatarOverlay.transcript.quotedMessage`,
        defaultMessage: `Replying to message`,
        description: `Accessible label for the quoted original message in an orb reply`,
      })),
      (t[5] = i),
      (t[6] = d));
  let f;
  t[7] !== d || t[8] !== o
    ? ((f = (0, yr.jsx)(`blockquote`, { className: l, "aria-label": d, title: o, children: o })),
      (t[7] = d),
      (t[8] = o),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] !== i || t[11] !== r
    ? ((p =
        r == null
          ? null
          : (0, yr.jsx)(se, {
              "aria-label": i.formatMessage({
                id: `avatarOverlay.transcript.removeReply`,
                defaultMessage: `Remove reply`,
                description: `Remove the quoted message from the orb composer without clearing the draft`,
              }),
              color: `ghostSecondary`,
              size: `iconCircleSm`,
              onClick: r,
              children: (0, yr.jsx)(U, {}),
            })),
      (t[10] = i),
      (t[11] = r),
      (t[12] = p))
    : (p = t[12]);
  let m;
  return (
    t[13] !== f || t[14] !== p
      ? ((m = (0, yr.jsxs)(`div`, { className: s, children: [c, f, p] })),
        (t[13] = f),
        (t[14] = p),
        (t[15] = m))
      : (m = t[15]),
    m
  );
}
var vr, yr;
function br() {
  return (br = e(() => {
    ((vr = R()), xe(), N(), gn(), J(), fe(), I(), G(), gr(), (yr = k()));
  }))();
}
var xr, Sr;
function Cr() {
  return (Cr = e(() => {
    ((xr = `_dot_lkvm0_1`), (Sr = { dot: xr, "typing-bounce": `_typing-bounce_lkvm0_31` }));
  }))();
}
function wr(e) {
  let t = (0, Er.c)(13),
    { agent: n } = e,
    r = Re(),
    i;
  t[0] === n.artwork ? (i = t[1]) : ((i = On(n.artwork)), (t[0] = n.artwork), (t[1] = i));
  let a;
  t[2] === i ? (a = t[3]) : ((a = { color: i }), (t[2] = i), (t[3] = a));
  let o;
  if (t[4] !== n.name || t[5] !== r) {
    let e = n.name,
      i;
    (t[7] === n.name ? (i = t[8]) : ((i = En(n.name)), (t[7] = n.name), (t[8] = i)),
      (o = r.formatMessage(
        {
          id: `mini.orbitNotification.typing.dot`,
          defaultMessage: `{hasName, select, true {{name}} other {Your dot}} is typing`,
          description: `Accessible label for the typing indicator above the dot avatar in Mini. Use its custom name when present; dot is an untranslated product name.`,
        },
        { name: e, hasName: !i },
      )),
      (t[4] = n.name),
      (t[5] = r),
      (t[6] = o));
  } else o = t[6];
  let s;
  t[9] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = [0, 1, 2].map(Tr)), (t[9] = s)) : (s = t[9]);
  let c;
  return (
    t[10] !== a || t[11] !== o
      ? ((c = (0, Dr.jsx)(`div`, {
          className: `flex items-center justify-center gap-0.5 text-default`,
          "data-avatar-overlay-foreground": !0,
          style: a,
          role: `status`,
          "aria-label": o,
          children: s,
        })),
        (t[10] = a),
        (t[11] = o),
        (t[12] = c))
      : (c = t[12]),
    c
  );
}
function Tr(e) {
  return (0, Dr.jsx)(`span`, { className: Sr.dot, "aria-hidden": !0 }, e);
}
var Er, Dr;
function Or() {
  return (Or = e(() => {
    ((Er = R()), J(), Nt(), it(), Cr(), (Dr = k()));
  }))();
}
function kr(e, t = !1) {
  if (t) return { type: `spring`, visualDuration: 0.44, bounce: 0.22 };
  let n = Hn.filter,
    r = e ? 0.9 : 1.25;
  return { type: n.type, damping: n.damping / r, mass: n.mass, stiffness: n.stiffness / r ** 2 };
}
function Ar() {
  return (Ar = e(() => {
    Wn();
  }))();
}
function jr(e) {
  let t = (0, Mr.c)(23),
    { ref: n, className: r, children: i, placement: a, origin: o, animatesFromBar: s } = e,
    c = (0, Nr.useRef)(null),
    u = m(),
    d = q(),
    f;
  t[0] !== s || t[1] !== d || t[2] !== o?.current || t[3] !== a || t[4] !== u
    ? ((f = () => {
        let e = c.current,
          t = o?.current;
        if (e == null || a !== `header` || !s || !d || u) return;
        e.style.visibility = `hidden`;
        let n,
          r = () => {
            let r = t?.bar,
              i = e.getBoundingClientRect();
            if (r != null && i.width > 0 && i.height > 0) {
              let t = i.width / e.offsetWidth,
                a = `translate(${(r.left - window.screenX - i.left) / t}px, ${(r.top - window.screenY - i.top) / t}px) scale(${r.width / i.width}, ${r.height / i.height})`;
              ((e.style.transformOrigin = `top left`),
                (e.style.transform = a),
                (n = l(e, { transform: [a, `translate(0px, 0px) scale(1, 1)`] }, kr(!0, !0))));
            }
            e.style.removeProperty(`visibility`);
          };
        return (
          p.postRender(r),
          () => {
            if (t != null) {
              let n = e.getBoundingClientRect();
              t.header = {
                left: n.left + window.screenX,
                top: n.top + window.screenY,
                width: n.width,
                height: n.height,
              };
            }
            (ne(r), n?.stop());
          }
        );
      }),
      (t[0] = s),
      (t[1] = d),
      (t[2] = o?.current),
      (t[3] = a),
      (t[4] = u),
      (t[5] = f))
    : (f = t[5]);
  let h;
  (t[6] !== s || t[7] !== d || t[8] !== o || t[9] !== a || t[10] !== u
    ? ((h = [s, d, o, a, u]), (t[6] = s), (t[7] = d), (t[8] = o), (t[9] = a), (t[10] = u), (t[11] = h))
    : (h = t[11]),
    (0, Nr.useLayoutEffect)(f, h));
  let g;
  t[12] !== s || t[13] !== n || t[14] !== o || t[15] !== a
    ? ((g = de(n, (e) => {
        if (((c.current = e), e != null && a === `bar` && s && o != null))
          return () => {
            let t = e.getBoundingClientRect();
            o.current.bar = {
              left: t.left + window.screenX,
              top: t.top + window.screenY,
              width: t.width,
              height: t.height,
            };
          };
      })),
      (t[12] = s),
      (t[13] = n),
      (t[14] = o),
      (t[15] = a),
      (t[16] = g))
    : (g = t[16]);
  let _;
  t[17] === r ? (_ = t[18]) : ((_ = j(`inline-flex`, r)), (t[17] = r), (t[18] = _));
  let v;
  return (
    t[19] !== i || t[20] !== g || t[21] !== _
      ? ((v = (0, Pr.jsx)(`span`, { ref: g, className: _, children: i })),
        (t[19] = i),
        (t[20] = g),
        (t[21] = _),
        (t[22] = v))
      : (v = t[22]),
    v
  );
}
var Mr, Nr, Pr;
function Fr() {
  return (Fr = e(() => {
    ((Mr = R()), N(), qe(), L(), K(), W(), (Nr = h()), T(), Ar(), (Pr = k()));
  }))();
}
function Ir(e) {
  let t = (0, Rr.c)(29),
    { ref: r, compact: i, iconStyle: a, isSelected: o, onActivate: s } = e,
    c = n(B),
    l = Re(),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = { name: `orbit` }), (t[0] = u)) : (u = t[0]);
  let d = Fe(xn, u),
    f = we(Rt),
    p = we(nr),
    m = p ?? f,
    h = we(jt),
    g;
  t[1] !== m || t[2] !== h?.locator
    ? ((g = h?.locator ?? (m == null ? null : { conversationId: m.conversationId, hostId: m.hostId })),
      (t[1] = m),
      (t[2] = h?.locator),
      (t[3] = g))
    : (g = t[3]);
  let _ = g,
    v = h?.phase ?? `inactive`,
    y = h?.microphoneMuted ?? !1,
    [b, x] = (0, zr.useOptimistic)(y),
    S = Fe(jn, _),
    C;
  t[4] !== h || t[5] !== l || t[6] !== _ || t[7] !== c
    ? ((C = async (e) => {
        if (_ != null)
          try {
            (e.type === `set-microphone-muted` && x(e.muted), await rt(c, _, e, h?.claimId));
          } catch {
            c.get(Ve).danger(
              l.formatMessage({
                id: `restricted.orbit.voiceCall.controlFailed`,
                defaultMessage: `Couldn’t update the call. Please try again`,
                description: `Error when a dot call control fails`,
              }),
              { errorAnalytics: { toastId: `restricted.orbit.voiceCall.controlFailed` } },
            );
          }
      }),
      (t[4] = h),
      (t[5] = l),
      (t[6] = _),
      (t[7] = c),
      (t[8] = C))
    : (C = t[8]);
  let w = C;
  if (!d.isCapable) return null;
  let T;
  t[9] !== w || t[10] !== _ || t[11] !== s || t[12] !== v || t[13] !== c || t[14] !== p
    ? ((T = () => {
        (Ye.debug(`Mini Dot call control activated`, {
          safe: { phase: v, fromTemporaryTranscript: p != null },
        }),
          s(),
          v === `inactive` && _ != null ? tt(c, _) : (0, zr.startTransition)(() => w({ type: `stop` })));
      }),
      (t[9] = w),
      (t[10] = _),
      (t[11] = s),
      (t[12] = v),
      (t[13] = c),
      (t[14] = p),
      (t[15] = T))
    : (T = t[15]);
  let E;
  t[16] !== w || t[17] !== b
    ? ((E = () => (0, zr.startTransition)(() => w({ type: `set-microphone-muted`, muted: !b }))),
      (t[16] = w),
      (t[17] = b),
      (t[18] = E))
    : (E = t[18]);
  let D;
  return (
    t[19] !== i ||
    t[20] !== a ||
    t[21] !== o ||
    t[22] !== S ||
    t[23] !== b ||
    t[24] !== v ||
    t[25] !== r ||
    t[26] !== T ||
    t[27] !== E
      ? ((D = (0, Br.jsx)(Lr, {
          ref: r,
          compact: i,
          iconStyle: a,
          isSelected: o,
          isStartAvailable: S,
          phase: v,
          microphoneMuted: b,
          onClick: T,
          onToggleMicrophoneMute: E,
        })),
        (t[19] = i),
        (t[20] = a),
        (t[21] = o),
        (t[22] = S),
        (t[23] = b),
        (t[24] = v),
        (t[25] = r),
        (t[26] = T),
        (t[27] = E),
        (t[28] = D))
      : (D = t[28]),
    D
  );
}
function Lr(e) {
  let t = (0, Rr.c)(44),
    {
      ref: n,
      compact: r,
      iconStyle: i,
      isSelected: a,
      isStartAvailable: o,
      phase: s,
      microphoneMuted: c,
      onClick: l,
      onToggleMicrophoneMute: d,
    } = e,
    p = r !== void 0 && r,
    m = a !== void 0 && a,
    h = Re(),
    g = (0, zr.useId)(),
    _ = s !== `inactive`,
    v = p ? z : Oe,
    y = p ? O : E,
    b;
  t[0] !== _ || t[1] !== h
    ? ((b = _
        ? h.formatMessage({
            id: `restricted.orbit.voiceCall.hangUp`,
            defaultMessage: `Hang up`,
            description: `End the dot voice call`,
          })
        : h.formatMessage({
            id: `restricted.orbit.voiceCall.start`,
            defaultMessage: `Start call`,
            description: `Start a voice call with this dot`,
          })),
      (t[0] = _),
      (t[1] = h),
      (t[2] = b))
    : (b = t[2]);
  let S = b,
    C;
  t[3] !== h || t[4] !== c
    ? ((C = c
        ? h.formatMessage({
            id: `restricted.orbit.voiceCall.unmuteMic`,
            defaultMessage: `Unmute microphone`,
            description: `Enable the microphone in the dot call`,
          })
        : h.formatMessage({
            id: `restricted.orbit.voiceCall.muteMic`,
            defaultMessage: `Mute microphone`,
            description: `Mute the microphone in the dot call`,
          })),
      (t[3] = h),
      (t[4] = c),
      (t[5] = C))
    : (C = t[5]);
  let w = C,
    T;
  if (s === `starting`) {
    let e;
    (t[6] === h
      ? (e = t[7])
      : ((e = h.formatMessage({
          id: `restricted.orbit.voiceCall.calling`,
          defaultMessage: `Calling…`,
          description: `Status while connecting a dot voice call`,
        })),
        (t[6] = h),
        (t[7] = e)),
      (T = e));
  }
  let D;
  t[8] !== p || t[9] !== s || t[10] !== T || t[11] !== g
    ? ((D =
        s === `starting` &&
        (0, Br.jsx)(`span`, {
          id: g,
          className: p
            ? `sr-only`
            : `pointer-events-none absolute inset-x-10 truncate text-center text-sm text-secondary`,
          children: T,
        })),
      (t[8] = p),
      (t[9] = s),
      (t[10] = T),
      (t[11] = g),
      (t[12] = D))
    : (D = t[12]);
  let k;
  t[13] !== p || t[14] !== _ || t[15] !== w || t[16] !== c || t[17] !== d
    ? ((k =
        _ &&
        !p &&
        (0, Br.jsxs)(Br.Fragment, {
          children: [
            (0, Br.jsx)(Pe, {
              tooltipContent: w,
              children: (0, Br.jsx)(`button`, {
                className: `flex h-full w-10 shrink-0 cursor-interaction items-center justify-center text-default focus-visible:outline-none`,
                "aria-label": w,
                "aria-pressed": c,
                "data-quick-chat-control": !0,
                type: `button`,
                onClick: d,
                children: (0, Br.jsx)(u, { asset: c ? Je : f }),
              }),
            }),
            (0, Br.jsx)(`span`, {
              "aria-hidden": `true`,
              className: `pointer-events-none absolute inset-y-2 left-10 w-px bg-border`,
              "data-quick-chat-divider": `voice`,
            }),
          ],
        })),
      (t[13] = p),
      (t[14] = _),
      (t[15] = w),
      (t[16] = c),
      (t[17] = d),
      (t[18] = k))
    : (k = t[18]);
  let A = T ?? S,
    M = s === `starting` && !p ? `ms-auto w-10 shrink-0` : `min-w-0 flex-1`,
    N;
  t[19] === M
    ? (N = t[20])
    : ((N = j(`flex h-full cursor-interaction items-center justify-center rounded-full text-default`, M)),
      (t[19] = M),
      (t[20] = N));
  let P = T == null ? void 0 : g,
    F = _ || m,
    I = _ ? `` : `surface`,
    L = !_ && !o,
    R = _ ? y : v,
    ee = _ ? `text-danger` : void 0,
    B;
  t[21] !== R || t[22] !== ee
    ? ((B = (0, Br.jsx)(u, { asset: R, className: ee })), (t[21] = R), (t[22] = ee), (t[23] = B))
    : (B = t[23]);
  let V;
  t[24] !== i || t[25] !== B
    ? ((V = (0, Br.jsx)(x.span, {
        className: `flex shrink-0 items-center justify-center`,
        style: i,
        children: B,
      })),
      (t[24] = i),
      (t[25] = B),
      (t[26] = V))
    : (V = t[26]);
  let H;
  t[27] !== S ||
  t[28] !== l ||
  t[29] !== n ||
  t[30] !== P ||
  t[31] !== F ||
  t[32] !== I ||
  t[33] !== L ||
  t[34] !== V ||
  t[35] !== N
    ? ((H = (0, Br.jsx)(`button`, {
        ref: n,
        className: N,
        "aria-label": S,
        "aria-describedby": P,
        "aria-pressed": F,
        "data-quick-chat-control": I,
        disabled: L,
        type: `button`,
        onClick: l,
        children: V,
      })),
      (t[27] = S),
      (t[28] = l),
      (t[29] = n),
      (t[30] = P),
      (t[31] = F),
      (t[32] = I),
      (t[33] = L),
      (t[34] = V),
      (t[35] = N),
      (t[36] = H))
    : (H = t[36]);
  let U;
  t[37] !== H || t[38] !== A
    ? ((U = (0, Br.jsx)(Pe, { tooltipContent: A, children: H })), (t[37] = H), (t[38] = A), (t[39] = U))
    : (U = t[39]);
  let te;
  return (
    t[40] !== U || t[41] !== D || t[42] !== k
      ? ((te = (0, Br.jsxs)(`div`, {
          className: `relative flex size-full items-center rounded-full select-none`,
          children: [D, k, U],
        })),
        (t[40] = U),
        (t[41] = D),
        (t[42] = k),
        (t[43] = te))
      : (te = t[43]),
    te
  );
}
var Rr, zr, Br;
function Vr() {
  return (Vr = e(() => {
    ((Rr = R()),
      te(),
      he(),
      o(),
      P(),
      Be(),
      y(),
      N(),
      _(),
      Y(),
      (zr = h()),
      J(),
      pn(),
      It(),
      I(),
      ie(),
      He(),
      ir(),
      i(),
      V(),
      Kt(),
      zt(),
      (Br = k()));
  }))();
}
function Hr() {
  let e = (0, Gr.c)(4),
    t = Ce(Ze.petSize),
    n;
  e[0] === t ? (n = e[1]) : ((n = t === Kr ? null : Wr(t)), (e[0] = t), (e[1] = n));
  let r;
  return (e[2] === n ? (r = e[3]) : ((r = { mascotWidthPx: n }), (e[2] = n), (e[3] = r)), r);
}
function Ur(e) {
  if (e != null) return { [Jr]: `${Wr(e)}px` };
}
function Wr(e) {
  return Number.isFinite(e) ? Math.round(Math.min(224, Math.max(80, e))) : Kr;
}
var Gr, Kr, qr, Jr;
function Yr() {
  return (Yr = e(() => {
    ((Gr = R()), Ge(), Le(), (Kr = Ze.petSize.default), (qr = 192 / 208), (Jr = `--codex-pet-width`));
  }))();
}
function Xr(e, t) {
  let n = e.get(yn);
  if (!e.get(Gt) || n == null) return !1;
  let r = e.get(yt);
  if ((t === `orbit` && r?.accountId === n) || (t === `pet` && r == null))
    return e.get(tr) != null && (e.set(tr, null), !0);
  if (t === `orbit`) {
    let t = e.get(_t)?.[0];
    if (r != null || t == null) return !1;
    let i = Ee(e.get, Ze.petVisible);
    (e.set(un, { accountId: n, agentId: t.id, petVisibleBeforeOrbit: i }),
      e.set(yt, { accountId: n, agent: t, petVisibleBeforeOrbit: i }),
      X(e, Ze.petVisible, !1));
  } else {
    if (r == null || r.accountId !== n) return !1;
    (e.set(un, { accountId: n, agentId: null, petVisibleBeforeOrbit: r.petVisibleBeforeOrbit }),
      e.set(yt, null),
      X(e, Ze.petVisible, r.petVisibleBeforeOrbit));
  }
  return (e.set(tr, null), Ye.debug(`Mini mode preference changed`, { safe: { mode: t } }), !0);
}
function Zr(e, t) {
  return t.defaultPrevented ||
    t.isComposing ||
    t.repeat ||
    t.altKey ||
    t.shiftKey ||
    (t.ctrlKey && t.metaKey) ||
    !Xe(t)
    ? !1
    : t.code === `Digit0` || t.code === `Numpad0` || t.key === `0`
      ? Xr(e, `pet`)
      : (t.code === `Digit1` || t.code === `Numpad1` || t.key === `1`) && Xr(e, `orbit`);
}
function Qr() {
  return (Qr = e(() => {
    (Ge(), It(), A(), Le(), V(), bn(), ir());
  }))();
}
function $r(e) {
  return e.compactControlWidth * 2 + e.compactControlGap;
}
function ei({ mascot: e, petControlsAppearance: t, quickChatBar: n, showsNotificationBadge: r }) {
  if (n != null) return { left: n.left + n.width / 2, top: n.top + n.height + di };
  let i = oi({
    controlGap: t.hoverControlGap,
    controlSize: t.hoverControlSize,
    mascot: e,
    offsetX: t.hoverOffsetX,
    offsetY: t.hoverOffsetY,
    showsNotificationBadge: r,
    surfaceId: `voice-controls`,
  });
  return { left: e.left + e.width / 2 + i.x, top: e.top + i.y + t.hoverControlSize + di };
}
function ti({
  belowAnchorTop: e,
  mascotTop: t,
  occupiedBounds: n,
  pillHeight: r,
  visibleViewportBottom: i,
  visibleViewportTop: a,
}) {
  let o = n == null ? e : n.top + n.height + di;
  return o + r > i ? Math.max(a + ui, (n?.top ?? t) - r - di) : o;
}
function ni({ mascot: e, orbScale: t = 1 }) {
  return { left: e.left + e.width / 2, top: e.top + (e.height * (1 + t)) / 2 - si - ci };
}
function ri({ mascot: e, visibleBounds: t }) {
  return ai({ centerX: e.left + e.width / 2, visibleBounds: t });
}
function ii({ anchor: e, visibleBounds: t }) {
  return ai({ centerX: e.left, visibleBounds: t });
}
function ai({ centerX: e, visibleBounds: t }) {
  return Math.max(0, 2 * Math.min(e - t.left - 16, t.left + t.width - e - 16));
}
function oi({
  controlGap: e = ci,
  controlSize: t = si,
  layout: n = `arc`,
  mascot: r,
  offsetX: i = 0,
  offsetY: a = 0,
  showsNotificationBadge: o,
  surfaceId: s,
}) {
  let c = o ? 4 : 3,
    l;
  switch (s) {
    case `voice-microphone`:
      l = 0;
      break;
    case `voice-controls`:
      l = 1;
      break;
    case `mascot-badge`:
      l = 2;
      break;
    case `voice-output`:
      l = c - 1;
  }
  if (n === `row`) {
    let n = Math.max(0, t + e);
    return { x: Math.round((l - (c - 1) / 2) * n + i), y: Math.round(r.height + a) };
  }
  let u = t / 2,
    d = r.width / 2 + li + u,
    f = 2 * Math.asin((t + e) / (2 * d)),
    p = (l - (c - 1) / 2) * f;
  return { x: Math.round(Math.sin(p) * d + i), y: Math.round(r.height / 2 + Math.cos(p) * d - u + a) };
}
var si, ci, li, ui, di;
function fi() {
  return (fi = e(() => {
    (Ge(), (si = 24), (ci = 8), (li = 0), (ui = 8), (di = 8));
  }))();
}
function pi(e) {
  let t = e.dom.closest(`[data-avatar-overlay-content-frame="true"]`);
  if (t == null) return null;
  let n = t.getBoundingClientRect(),
    r = e.coordsAtPos(e.state.selection.head),
    i = t.offsetWidth === 0 ? 1 : n.width / t.offsetWidth,
    a = t.offsetHeight === 0 ? 1 : n.height / t.offsetHeight;
  return { x: (r.left - n.left) / i, y: ((r.top + r.bottom) / 2 - n.top) / a };
}
function mi(e, t) {
  let n = e.closest(`[data-avatar-overlay-content-frame="true"]`);
  if (n == null) return null;
  let r = e.getBoundingClientRect(),
    i = n.getBoundingClientRect(),
    a = window.getComputedStyle(e),
    o = document.createElement(`div`);
  Object.assign(o.style, {
    border: a.border,
    boxSizing: a.boxSizing,
    direction: a.direction,
    font: a.font,
    left: `0`,
    letterSpacing: a.letterSpacing,
    overflowWrap: a.overflowWrap,
    padding: a.padding,
    position: `fixed`,
    tabSize: a.tabSize,
    textAlign: a.textAlign,
    textIndent: a.textIndent,
    textTransform: a.textTransform,
    top: `0`,
    visibility: `hidden`,
    whiteSpace: e instanceof HTMLInputElement ? `pre` : a.whiteSpace,
    width: a.width,
    wordBreak: a.wordBreak,
  });
  let s = t ?? (e.selectionDirection === `backward` ? e.selectionStart : e.selectionEnd);
  o.textContent = e.value.slice(0, s ?? e.value.length);
  let c = document.createElement(`span`);
  ((c.textContent = `​`), o.append(c), document.body.append(o));
  let l = o.getBoundingClientRect(),
    u = c.getBoundingClientRect();
  o.remove();
  let d = e.offsetWidth === 0 ? 1 : r.width / e.offsetWidth;
  return {
    x: (r.left - i.left + u.left - l.left) / d - e.scrollLeft,
    y: (r.top - i.top + u.top - l.top + u.height / 2) / d - e.scrollTop,
  };
}
function hi(e) {
  return [e.value, e.selectionStart, e.selectionEnd, e.selectionDirection, e.scrollLeft, e.scrollTop].join(
    `\0`,
  );
}
function gi() {
  return (gi = e(() => {}))();
}
var _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di;
function Oi() {
  return (Oi = e(() => {
    ((_i = `_barMaterial_1bein_2`),
      (vi = `_controls_1bein_2 _controls_pbuwb_1`),
      (yi = `_quickChatCompactFirstDivider_1bein_2`),
      (bi = `_quickChatCompactSecondDivider_1bein_2`),
      (xi = `_activityBadgeContainer_1bein_2`),
      (Si = `_activityBell_1bein_2`),
      (Ci = `_orb_1bein_2`),
      (wi = `_editor_1bein_2`),
      (Ti = `_editorInput_1bein_2`),
      (Ei = `_dictationWaveform_1bein_2`),
      (Di = {
        barMaterial: _i,
        controls: vi,
        quickChatCompactFirstDivider: yi,
        quickChatCompactSecondDivider: bi,
        activityBadgeContainer: xi,
        activityBell: Si,
        orb: Ci,
        editor: wi,
        editorInput: Ti,
        dictationWaveform: Ei,
      }));
  }))();
}
function ki(e, t, n = !1, r = 124) {
  let i = pe(e, n),
    a = e.quickChat?.workArea ?? e.visibleBounds,
    o = 48 + r + (t ? 48 : 0),
    s = 48 + r / 2;
  return {
    ...i,
    left: Math.max(a.left + 16, Math.min(a.left + a.width - o - 16, e.mascot.left + e.mascot.width / 2 - s)),
    width: o,
  };
}
function Ai() {
  return (Ai = e(() => {
    Ge();
  }))();
}
function ji(e, t, n) {
  let r = 40 * n,
    i = t / 40;
  return Math.round((i + (1 - i) * e) * r) / r;
}
function Mi(e) {
  return {
    left: e.bar.left + e.target.composerLeft,
    top: e.bar.top + e.target.composerTop,
    width: e.target.composerWidth,
    height: e.target.composerHeight,
  };
}
function Ni({
  draft: e,
  compositionDeferral: t = null,
  editorExtraHeight: n = 0,
  hasNotifications: i,
  hasAppshots: a = !1,
  hasReply: o = !1,
  replyHeight: s = 0,
  hasPetAccessory: c = !1,
  hasSelectedOrb: l = !1,
  hasMessageNotification: u = !1,
  isEditorActive: d = !1,
  isExpanded: f,
  isVoiceActive: p = !1,
  layout: m,
  stashAppearance: h = w,
  ...g
}) {
  let _ = g.hasUnreadOrbit === !0,
    y = g.isOrbitMode === !0,
    b = g.isOrbitAvatarInHeader === !0,
    x = g.isOrbitCallStarting === !0,
    S = y && p,
    C = y ? 40 * (x ? 4 : 2) : 124,
    T = f ? `expanded` : `collapsed`;
  (p && ((y && !f) || (!d && !e.length && !a && !o))
    ? (T = `voice`)
    : f && (e.length > 0 || a || o || (d && t == null)) && !p && (T = `composing`),
    m.quickChat?.stashedEdge != null && (T = `stashed`));
  let E = T === `stashed`,
    D = y && (T === `expanded` || T === `composing`),
    O = m.quickChat?.workArea ?? m.visibleBounds,
    k = pe(m, c),
    A = Math.min(220, Math.max(0, O.width - 32)) / 2,
    j = y && u && !_ && !b && (!D || O.width >= k.width + A - 16 + 32 + (i && T === `expanded` ? Ii : 0)),
    M = 40;
  (E ? (M = Math.min(h.tabHeight, O.height)) : a && T !== `collapsed` && T !== `voice` && (M = Fi),
    !E && T !== `collapsed` && T !== `voice` && (M += n + (o ? s : 0)));
  let N = {
      ...k,
      width: Math.min(k.width, O.width - 32 - (D && i && T === `expanded` && !b ? Ii : 0)),
      left: m.mascot.left + (m.mascot.width - v) / 2,
    },
    P = k.left + (k.width - N.width) / 2 - N.left,
    F = E ? h.tabWidth : be(i),
    I = ee(m, F, c).left - N.left;
  (!c && m.quickChat == null && (I = m.mascot.left + (m.mascot.width - F) / 2 - N.left),
    E && (I += ((F - 26) / 2) * (m.quickChat?.stashedEdge === `left` ? 1 : -1)),
    (T === `composing` || (T === `expanded` && (!y || b))) &&
      (P = (0, Pi.default)(
        I + (F - N.width) / 2,
        O.left + 16 - N.left,
        O.left + O.width - 16 - N.left - N.width,
      )));
  let L = E ? 12 : 20,
    R = E ? L : 0,
    z = l && m.quickChat?.hasOrbPicker ? 40 : 0,
    B = N.width - Ii * (1 + +!!i) - (S ? C - 40 : 0),
    V = T === `collapsed` || E || (T === `expanded` && t === `submission` && !y),
    H = T === `composing`,
    U = T === `voice`,
    te = U || S ? C : 40,
    ne = 1;
  E && (ne = 0);
  let W = V ? I + F - N.width : P,
    G = E ? I + F / 2 - 20 : B + 8 + (H ? P - Ii : W),
    K = B - z,
    re = P + z;
  V
    ? ((re = I), (K = F), E || (G = r(I, 1)))
    : H
      ? ((re = P + z), (K = N.width - z))
      : U && ((re = ki(m, i, c, C).left - N.left), (K = 40), (G = re + Ii));
  let ie = G;
  i && !E && (ie = U ? G + C + 8 : V ? r(I, 2) : G + (H ? 0 : te + 8));
  let ae = y && i;
  if (
    (ae &&
      !E &&
      ((ie = re - (H || T === `expanded` ? z : 0)), (re += Ii), (G += Ii), V ? (K -= 40) : H && (K -= Ii)),
    !E && (ae || D || j))
  ) {
    let e = ae ? ie : re - z,
      t = H ? re + K : Math.max(re + K, G + te),
      n = re + (D ? 16 - z : 20),
      r = (0, Pi.default)(
        0,
        Math.max(O.left + 16 - N.left - e, j ? O.left + 16 + A - N.left - n : -1 / 0),
        Math.min(O.left + O.width - 16 - N.left - t, j ? O.left + O.width - 16 - A - N.left - n : 1 / 0),
      );
    ((ie += r), (re += r), (G += r));
  }
  let q = N.top + 20 >= O.top + O.height / 2,
    oe = 0;
  E
    ? (oe = (0, Pi.default)((40 - M) / 2, O.top - N.top, O.top + O.height - N.top - M))
    : M > 40 && (oe = (0, Pi.default)(q ? 40 - M : 0, O.top - N.top, O.top + O.height - N.top - M));
  let J = (ae ? Ii : 0) + (!V && !U ? z : 0);
  if (_ && !E) {
    let e = Math.max(re + K, H ? 0 : G + te, !H && i ? ie + 40 : 0),
      t = (0, Pi.default)(0, O.left + 16 + Ii + J - (N.left + re), O.left + O.width - 16 - N.left - e);
    ((re += t), (G += t), (ie += t));
  }
  if (u && !E) {
    let e = !y && (c || m.placement.startsWith(`bottom`));
    oe = (0, Pi.default)(oe, O.top - N.top + (e ? 0 : 61), O.top + O.height - N.top - M - (e ? 61 : 0));
  }
  return (
    b &&
      (T === `expanded` || H) &&
      ((re = (0, Pi.default)(P, O.left + 16 - N.left, O.left + O.width - 16 - N.left - N.width)),
      (K = N.width)),
    {
      bar: N,
      state: T,
      hasDetachedActivity: ae,
      notificationLeadingControlsWidth: J,
      growsUp: q,
      target: {
        composerLeft: re - (m.quickChat?.stashedEdge === `left` ? R : 0),
        composerWidth: K + R,
        composerHeight: M,
        composerTop: oe,
        composerRadius: L,
        composerEdgeBleed: R,
        stashProgress: +!!E,
        voiceLeft: G,
        voiceWidth: te,
        badgeLeft: ie,
        orbScale: ne,
        compactProgress: +!!V,
        inputOpacity: V || U ? 0 : 1,
        orbIconOpacity: +!H,
        orbIconBlurRadius: H ? ze.contentHiddenBlurRadiusPx : 0,
      },
    }
  );
}
var Pi, Fi, Ii;
function Li() {
  return (Li = e(() => {
    ((Pi = t(ye(), 1)), Ge(), Ai(), (Fi = 116), (Ii = 48));
  }))();
}
var Ri, zi;
function Bi() {
  return (Bi = e(() => {
    ((Ri = `_badge_81rb7_1`), (zi = { badge: Ri }));
  }))();
}
function Vi(e) {
  let t = (0, Hi.c)(4),
    { children: n, nativeTint: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = j(
        `pointer-events-none absolute top-1/2 -right-0.75 -mt-px flex h-3 min-w-3 -translate-y-full items-center justify-center rounded-full px-0.75 text-[8px] leading-none font-medium whitespace-nowrap text-white tabular-nums`,
        Gn.nativeTint,
        zi.badge,
      )),
      (t[0] = i))
    : (i = t[0]);
  let a;
  return (
    t[1] !== n || t[2] !== r
      ? ((a = (0, Ui.jsx)(`span`, {
          "aria-hidden": `true`,
          className: i,
          "data-avatar-overlay-native-tint": r,
          "data-mini-notification-badge": !0,
          children: n,
        })),
        (t[1] = n),
        (t[2] = r),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
var Hi, Ui;
function Wi() {
  return (Wi = e(() => {
    ((Hi = R()), N(), Vn(), Bi(), (Ui = k()));
  }))();
}
function Gi(e) {
  let t = (0, Ki.c)(10),
    { artworkSize: n } = e,
    r = n === void 0 ? 20 : n,
    i = we(Rt),
    a = we(nr) ?? i;
  if (a == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, qi.jsx)(Ie, {})), (t[0] = e)) : (e = t[0]),
      e
    );
  }
  let o;
  t[1] !== a.artwork || t[2] !== r
    ? ((o = (0, qi.jsx)(Jn, { artwork: a.artwork, size: r })), (t[1] = a.artwork), (t[2] = r), (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] !== a.hasUnread || t[5] !== a.unreadMessageCount
    ? ((s =
        a.hasUnread && a.unreadMessageCount !== 0
          ? (0, qi.jsx)(Vi, {
              children:
                a.unreadMessageCount != null &&
                (a.unreadMessageCount > 99
                  ? (0, qi.jsx)(Ke, {
                      id: `sidebarDestination.unreadOverflowNumber`,
                      defaultMessage: `99+`,
                      description: `Compact unread message count when there are more than 99 messages`,
                    })
                  : (0, qi.jsx)(D, { value: a.unreadMessageCount })),
            })
          : null),
      (t[4] = a.hasUnread),
      (t[5] = a.unreadMessageCount),
      (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== o || t[8] !== s
      ? ((c = (0, qi.jsxs)(`span`, { className: `relative inline-flex`, children: [o, s] })),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
var Ki, qi;
function Ji() {
  return (Ji = e(() => {
    ((Ki = R()), Y(), J(), It(), Wi(), G(), ir(), qn(), (qi = k()));
  }))();
}
var Yi, Xi, Zi;
function Qi() {
  return (Qi = e(() => {
    ((Yi = `_detached_yb2ae_1`), (Xi = `_caption_yb2ae_8`), (Zi = { detached: Yi, caption: Xi }));
  }))();
}
function $i(e) {
  let t = (0, ta.c)(21),
    {
      bar: r,
      anchor: i,
      placement: a,
      leadingControlsWidth: o,
      previewLayout: s,
      workArea: c,
      onOpen: l,
    } = e,
    u = n(B),
    d = we(cr),
    f = we(rr),
    p = we(lr),
    m = d?.kind === `onboarding` ? d.onboarding : null,
    h = d?.kind === `message` ? d : null,
    g = m == null && p != null,
    _ = m?.agent ?? p ?? d?.agent,
    v = Re();
  if (f) return null;
  let y = null;
  if (m != null) {
    let e;
    (t[0] !== v || t[1] !== m ? ((e = Sn(m, v)), (t[0] = v), (t[1] = m), (t[2] = e)) : (e = t[2]), (y = e));
  } else if (!g) {
    let e;
    (t[3] !== v || t[4] !== h?.text
      ? ((e =
          h?.text ??
          v.formatMessage({
            id: `mini.orbitNotification.attachment`,
            defaultMessage: `Sent an attachment`,
            description: `Mini notification preview for a dot message containing only an attachment`,
          })),
        (t[3] = v),
        (t[4] = h?.text),
        (t[5] = e))
      : (e = t[5]),
      (y = e));
  }
  let b;
  t[6] !== _ ||
  t[7] !== i ||
  t[8] !== r ||
  t[9] !== g ||
  t[10] !== o ||
  t[11] !== h?.message ||
  t[12] !== l ||
  t[13] !== a ||
  t[14] !== s ||
  t[15] !== u ||
  t[16] !== y ||
  t[17] !== c
    ? ((b =
        _ != null &&
        (0, ra.jsx)(ea, {
          agent: _,
          bar: r,
          anchor: i,
          placement: g ? `above` : a,
          leadingControlsWidth: o,
          isTyping: g,
          previewLayout: s,
          workArea: c,
          message: h?.message,
          text: y,
          onPointerEnter: () => ar(u),
          onOpen: () => {
            let e = u.get(yn);
            e != null && (u.get(Rt)?.id !== _.id && u.set(tr, { accountId: e, agent: _ }), l());
          },
        })),
      (t[6] = _),
      (t[7] = i),
      (t[8] = r),
      (t[9] = g),
      (t[10] = o),
      (t[11] = h?.message),
      (t[12] = l),
      (t[13] = a),
      (t[14] = s),
      (t[15] = u),
      (t[16] = y),
      (t[17] = c),
      (t[18] = b))
    : (b = t[18]);
  let x;
  return (t[19] === b ? (x = t[20]) : ((x = (0, ra.jsx)(re, { children: b })), (t[19] = b), (t[20] = x)), x);
}
function ea(e) {
  let t = (0, ta.c)(46),
    {
      agent: n,
      bar: r,
      anchor: i,
      placement: a,
      leadingControlsWidth: o,
      previewLayout: s,
      workArea: c,
      message: l,
      text: u,
      isTyping: d,
      onOpen: f,
      onPointerEnter: p,
    } = e,
    h = o === void 0 ? 0 : o,
    g = d !== void 0 && d,
    _ = Re(),
    v;
  if (t[0] !== n.name || t[1] !== _) {
    let e = n.name,
      r;
    (t[3] === n.name ? (r = t[4]) : ((r = En(n.name)), (t[3] = n.name), (t[4] = r)),
      (v = _.formatMessage(
        {
          id: `mini.orbitNotification.open.dot`,
          defaultMessage: `Open {hasName, select, true {{name}} other {your dot}} in Mini`,
          description: `Accessible label for the dot avatar in a Mini notification. Use the custom name when present; dot is the untranslated term for the user's agent.`,
        },
        { name: e, hasName: !r },
      )),
      (t[0] = n.name),
      (t[1] = _),
      (t[2] = v));
  } else v = t[2];
  let y = v,
    b = q(),
    S = m(),
    [C, w] = (0, na.useState)(!1);
  if (C) return null;
  let T;
  t[5] === f
    ? (T = t[6])
    : ((T = () => {
        (w(!0), f());
      }),
      (t[5] = f),
      (t[6] = T));
  let E = T,
    D;
  t[7] === S ? (D = t[8]) : ((D = S ? { duration: 0 } : Kn), (t[7] = S), (t[8] = D));
  let O = D,
    k = Math.min(g ? 39 : 220, Math.max(0, c.width - 32)),
    A = i === `standalone` ? 32 : 40,
    M = `calc((var(--quick-chat-composer-left) - ${i === `bar` ? 0 : A + 8 + (i === `detached` ? h : 0)}) * 1px)`,
    N = `calc(${M} + ${i === `standalone` ? 0 : (A - 20) / 2}px)`,
    P = `calc(${M} + ${(A - k) / 2}px)`;
  i === `detached` && (P = g ? N : M);
  let F = `clamp(${c.left + 16 - r.left}px, ${P}, ${c.left + c.width - 16 - r.left - k}px)`,
    I = g || a === `below` ? `bottom` : `top`,
    L;
  t[9] !== A || t[10] !== g || t[11] !== a
    ? ((L = a === `below` ? 4 : -4),
      g && (L = -((40 + A) / 2 + 4)),
      (t[9] = A),
      (t[10] = g),
      (t[11] = a),
      (t[12] = L))
    : (L = t[12]);
  let R = `calc((${I === `bottom` ? `var(--quick-chat-composer-top) + var(--quick-chat-composer-height)` : `var(--quick-chat-composer-top)`} + ${L}) * 1px)`,
    z = i === `detached` ? `clamp(16px, calc(${N} - ${F} + 16px), calc(100% - 23px))` : `${(k - 10) / 2}px`,
    ee;
  t[13] !== F || t[14] !== R || t[15] !== z || t[16] !== k
    ? ((ee = { left: F, top: R, width: k, "--avatar-overlay-caption-tail-left": z }),
      (t[13] = F),
      (t[14] = R),
      (t[15] = z),
      (t[16] = k),
      (t[17] = ee))
    : (ee = t[17]);
  let B = ee,
    V;
  t[18] !== n.artwork ||
  t[19] !== i ||
  t[20] !== M ||
  t[21] !== E ||
  t[22] !== b ||
  t[23] !== p ||
  t[24] !== y ||
  t[25] !== O
    ? ((V =
        i === `detached` &&
        (0, ra.jsx)(x.div, {
          className: j(`absolute z-30 no-drag`, Zi.detached),
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: O,
          "aria-hidden": !b || void 0,
          inert: !b,
          style: {
            left: M,
            top: `calc((var(--quick-chat-composer-top) + var(--quick-chat-composer-height) - 40) * 1px)`,
          },
          children: (0, ra.jsx)(Pt, {
            nativeSurfaceId: `orbit-message-avatar`,
            variant: `quick-chat-orb`,
            children: (0, ra.jsx)(`button`, {
              className: `flex size-full cursor-interaction items-center justify-center rounded-full text-default select-none`,
              type: `button`,
              "data-avatar-overlay-foreground": !0,
              "data-avatar-overlay-hit-region": `orbit-message-avatar`,
              "data-quick-chat-control": `surface`,
              "aria-label": y,
              onClick: E,
              onFocus: p,
              children: (0, ra.jsx)(Jn, { artwork: n.artwork, size: 20 }),
            }),
          }),
        })),
      (t[18] = n.artwork),
      (t[19] = i),
      (t[20] = M),
      (t[21] = E),
      (t[22] = b),
      (t[23] = p),
      (t[24] = y),
      (t[25] = O),
      (t[26] = V))
    : (V = t[26]);
  let H;
  t[27] !== n ||
  t[28] !== i ||
  t[29] !== I ||
  t[30] !== L ||
  t[31] !== B ||
  t[32] !== E ||
  t[33] !== b ||
  t[34] !== g ||
  t[35] !== l ||
  t[36] !== p ||
  t[37] !== y ||
  t[38] !== a ||
  t[39] !== s ||
  t[40] !== u ||
  t[41] !== O
    ? ((H =
        (u != null || g) &&
        (0, ra.jsxs)(x.div, {
          ref: (e) => {
            if (e == null || s == null) return;
            let t = () => {
              let t = e.offsetHeight,
                n = L - (a === `above` ? t : 0);
              s.set({ edge: I, top: n, bottom: n + t });
            };
            t();
            let n = Xt({ axis: `height`, target: e, onChange: t });
            return () => {
              (n?.(), s.set(null));
            };
          },
          className: j(
            `absolute z-30 no-drag`,
            a === `above` && `-translate-y-full`,
            Zi.detached,
            Zi.caption,
          ),
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: O,
          "aria-hidden": !b || void 0,
          inert: !b,
          style: B,
          "data-avatar-overlay-caption-connector-direction": a === `below` ? `up` : `down`,
          "data-avatar-overlay-hit-region": `orbit-message-preview`,
          onPointerEnter: p,
          children: [
            (0, ra.jsx)(`button`, {
              className: `w-full cursor-interaction text-start select-none`,
              "aria-label": g ? y : void 0,
              type: `button`,
              onClick: E,
              onFocus: p,
              children: (0, ra.jsx)(Pt, {
                "data-avatar-overlay-caption-typing": g || void 0,
                variant: `speech-caption`,
                children: g
                  ? (0, ra.jsx)(wr, { agent: n })
                  : (0, ra.jsxs)(ra.Fragment, {
                      children: [
                        (0, ra.jsx)(`span`, {
                          className: `line-clamp-2 text-size-chat-sm leading-4 break-words whitespace-pre-wrap text-default`,
                          "data-avatar-overlay-foreground": !0,
                          role: `status`,
                          children: fn(u ?? ``),
                        }),
                        b && l != null
                          ? (0, ra.jsx)(er, { roomId: l.roomId, messageId: l.id, bodyText: l.text })
                          : null,
                      ],
                    }),
              }),
            }),
            (0, ra.jsx)(Pt, {
              "aria-hidden": `true`,
              "data-avatar-overlay-caption-connector-direction": a === `below` ? `up` : `down`,
              "data-avatar-overlay-chromium-overflow": `true`,
              "data-avatar-overlay-caption-pointed-part": i === `detached` ? void 0 : `base`,
              nativeSurfaceId: `orbit-message-connector`,
              variant: `speech-caption-connector`,
            }),
            i !== `detached` &&
              (0, ra.jsx)(Pt, {
                "aria-hidden": `true`,
                "data-avatar-overlay-caption-connector-direction": a === `below` ? `up` : `down`,
                "data-avatar-overlay-caption-pointed-part": `tip`,
                "data-avatar-overlay-chromium-overflow": `true`,
                nativeSurfaceId: `orbit-message-connector-tip`,
                variant: `speech-caption-connector`,
              }),
          ],
        })),
      (t[27] = n),
      (t[28] = i),
      (t[29] = I),
      (t[30] = L),
      (t[31] = B),
      (t[32] = E),
      (t[33] = b),
      (t[34] = g),
      (t[35] = l),
      (t[36] = p),
      (t[37] = y),
      (t[38] = a),
      (t[39] = s),
      (t[40] = u),
      (t[41] = O),
      (t[42] = H))
    : (H = t[42]);
  let U;
  return (
    t[43] !== H || t[44] !== V
      ? ((U = (0, ra.jsxs)(ra.Fragment, { children: [V, H] })), (t[43] = H), (t[44] = V), (t[45] = U))
      : (U = t[45]),
    U
  );
}
var ta, na, ra;
function ia() {
  return (ia = e(() => {
    ((ta = R()),
      N(),
      b(),
      _(),
      K(),
      W(),
      Y(),
      Ge(),
      gn(),
      (na = h()),
      J(),
      Wn(),
      ct(),
      Ai(),
      It(),
      qn(),
      i(),
      Tn(),
      it(),
      $n(),
      mn(),
      fr(),
      ir(),
      Or(),
      Qi(),
      (ra = k()));
  }))();
}
var aa;
function oa() {
  return (oa = e(() => {
    (J(),
      (aa = S({
        id: `avatarOverlay.quickChatBar.messageOrb.dot`,
        defaultMessage: `Message {hasName, select, true {{name}} other {your dot}}`,
        description: `Placeholder in Mini's input when messaging the selected dot. Use its custom name when present; dot is an untranslated product name.`,
      })));
  }))();
}
function sa(e) {
  let t = (0, ca.c)(50),
    { ref: r, editor: i, hasText: a, actionContainer: o, isSending: s, onRequestFocus: c, sendButton: l } = e,
    u = n(B),
    d = Re(),
    f = pt(),
    p = (0, la.useRef)(!1),
    m;
  t[0] !== i || t[1] !== c
    ? ((m = (e) => {
        p.current && !i.view.isDestroyed && (i.insertDictationText(e), c(), i.focus());
      }),
      (t[0] = i),
      (t[1] = c),
      (t[2] = m))
    : (m = t[2]);
  let h = m,
    g = f === !0 && !s,
    _;
  t[3] === i ? (_ = t[4]) : ((_ = () => i.getText()), (t[3] = i), (t[4] = _));
  let v, y, b;
  t[5] !== d || t[6] !== u
    ? ((v = (e) => {
        u.get(Ve).danger(ht(d, `start`, e).message, { errorAnalytics: { toastId: `miniDictation.start` } });
      }),
      (y = (e) => {
        u.get(Ve).danger(ht(d, `transcription`, e).message, {
          errorAnalytics: { toastId: `miniDictation.transcription` },
        });
      }),
      (b = () => {
        u.get(Ve).danger(ht(d, `start`, TypeError()).message, {
          errorAnalytics: { toastId: `miniDictation.unsupported` },
        });
      }),
      (t[5] = d),
      (t[6] = u),
      (t[7] = v),
      (t[8] = y),
      (t[9] = b))
    : ((v = t[7]), (y = t[8]), (b = t[9]));
  let x;
  t[10] !== h || t[11] !== g || t[12] !== _ || t[13] !== v || t[14] !== y || t[15] !== b
    ? ((x = {
        productSurface: `work`,
        waveformVariant: `composer`,
        enabled: g,
        getSurroundingText: _,
        onTranscriptInsert: h,
        onTranscriptSend: h,
        onStartError: v,
        onTranscribeError: y,
        onUnsupported: b,
      }),
      (t[10] = h),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y),
      (t[15] = b),
      (t[16] = x))
    : (x = t[16]);
  let {
      abortDictation: S,
      canRetryDictation: C,
      getIsDictationStarting: w,
      isDictating: T,
      isDictationStarting: E,
      isMicrophoneBusy: D,
      isTranscribing: O,
      retryDictation: k,
      startDictation: A,
      stopDictation: j,
      waveformCanvasRef: M,
    } = qt(x),
    N = E || T || O,
    P;
  (t[17] !== S || t[18] !== N || t[19] !== w || t[20] !== j
    ? ((P = () => ({
        finish: () => (!N && !w() ? !1 : (j(`insert`), !0)),
        cancel: () => (!N && !w() ? !1 : (S(), !0)),
      })),
      (t[17] = S),
      (t[18] = N),
      (t[19] = w),
      (t[20] = j),
      (t[21] = P))
    : (P = t[21]),
    (0, la.useImperativeHandle)(r, P));
  let F, I;
  (t[22] === S
    ? ((F = t[23]), (I = t[24]))
    : ((I = () => (
        (p.current = !0),
        () => {
          ((p.current = !1), S());
        }
      )),
      (F = [S]),
      (t[22] = S),
      (t[23] = F),
      (t[24] = I)),
    (0, la.useLayoutEffect)(I, F));
  let L;
  t[25] !== T || t[26] !== M
    ? ((L = T
        ? (0, da.jsx)(`div`, {
            className: Di.dictationWaveform,
            children: (0, da.jsx)(`canvas`, {
              ref: M,
              className: `h-5 w-full text-default`,
              "aria-hidden": `true`,
            }),
          })
        : null),
      (t[25] = T),
      (t[26] = M),
      (t[27] = L))
    : (L = t[27]);
  let R;
  t[28] !== N ||
  t[29] !== C ||
  t[30] !== i ||
  t[31] !== a ||
  t[32] !== T ||
  t[33] !== E ||
  t[34] !== D ||
  t[35] !== s ||
  t[36] !== O ||
  t[37] !== c ||
  t[38] !== k ||
  t[39] !== l ||
  t[40] !== A ||
  t[41] !== j ||
  t[42] !== f
    ? ((R =
        a && !N && !C
          ? l
          : (0, da.jsx)(en, {
              color: `secondary`,
              radius: `full`,
              size: `compact`,
              isVisible: f !== !1,
              isStarting: E,
              isDictating: T,
              isTranscribing: O,
              canRetryDictation: C,
              disabled: f !== !0 || s || D,
              retryDictation: k,
              startDictation: async (e) => {
                (c(), i.focus(), await A(e));
              },
              stopDictation: j,
            })),
      (t[28] = N),
      (t[29] = C),
      (t[30] = i),
      (t[31] = a),
      (t[32] = T),
      (t[33] = E),
      (t[34] = D),
      (t[35] = s),
      (t[36] = O),
      (t[37] = c),
      (t[38] = k),
      (t[39] = l),
      (t[40] = A),
      (t[41] = j),
      (t[42] = f),
      (t[43] = R))
    : (R = t[43]);
  let z;
  t[44] !== o || t[45] !== R
    ? ((z = (0, ua.createPortal)(R, o)), (t[44] = o), (t[45] = R), (t[46] = z))
    : (z = t[46]);
  let ee;
  return (
    t[47] !== L || t[48] !== z
      ? ((ee = (0, da.jsxs)(da.Fragment, { children: [L, z] })), (t[47] = L), (t[48] = z), (t[49] = ee))
      : (ee = t[49]),
    ee
  );
}
var ca, la, ua, da;
function fa() {
  return (fa = e(() => {
    ((ca = R()), Y(), (la = h()), (ua = g()), J(), vn(), Ut(), Bt(), ie(), i(), Lt(), Oi(), (da = k()));
  }))();
}
var pa, ma;
function ha() {
  return (ha = e(() => {
    ((pa = `_panel_x6cay_1`), (ma = { panel: pa }));
  }))();
}
function ga(e) {
  let t = (0, va.c)(9),
    { children: n, isActive: r, placement: i } = e,
    a = i === void 0 ? `top` : i,
    o = Cn(),
    s;
  t[0] === o.view.dom ? (s = t[1]) : ((s = o.view.dom.closest(`form`)), (t[0] = o.view.dom), (t[1] = s));
  let c = s,
    l;
  t[2] !== n || t[3] !== c || t[4] !== r || t[5] !== a
    ? ((l = r
        ? (0, ba.jsx)(
            C,
            {
              elementAnchor: { element: c, inlineBounds: c },
              gap: 12,
              constrainHeightToViewport: !0,
              isActive: !0,
              placement: a,
              zIndexClassName: `z-50`,
              children: (0, ba.jsx)(_a, { children: n }),
            },
            `suggestions`,
          )
        : null),
      (t[2] = n),
      (t[3] = c),
      (t[4] = r),
      (t[5] = a),
      (t[6] = l))
    : (l = t[6]);
  let u;
  return (t[7] === l ? (u = t[8]) : ((u = (0, ba.jsx)(re, { children: l })), (t[7] = l), (t[8] = u)), u);
}
function _a(e) {
  let t = (0, va.c)(16),
    { children: n } = e,
    r = Cn(),
    i;
  t[0] === r.view.state
    ? (i = t[1])
    : ((i = () => Z.getState(r.view.state)?.trigger === `+`), (t[0] = r.view.state), (t[1] = i));
  let [a] = (0, ya.useState)(i),
    o = q(),
    s = m(),
    c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = { opacity: 1 }), (t[2] = c)) : (c = t[2]);
  let l;
  t[3] === a ? (l = t[4]) : ((l = a ? { opacity: 0 } : void 0), (t[3] = a), (t[4] = l));
  let u = !o || void 0,
    d;
  t[5] === a ? (d = t[6]) : ((d = a ? { opacity: 0 } : !1), (t[5] = a), (t[6] = d));
  let f;
  t[7] !== a || t[8] !== s
    ? ((f = !a || s ? { duration: 0 } : We), (t[7] = a), (t[8] = s), (t[9] = f))
    : (f = t[9]);
  let p;
  return (
    t[10] !== n || t[11] !== l || t[12] !== u || t[13] !== d || t[14] !== f
      ? ((p = (0, ba.jsx)(x.div, {
          className: ma.panel,
          animate: c,
          "data-avatar-overlay-context-menu": !0,
          "data-composer-overlay-floating-ui": !0,
          exit: l,
          inert: u,
          initial: d,
          transition: f,
          children: n,
        })),
        (t[10] = n),
        (t[11] = l),
        (t[12] = u),
        (t[13] = d),
        (t[14] = f),
        (t[15] = p))
      : (p = t[15]),
    p
  );
}
var va, ya, ba;
function xa() {
  return (xa = e(() => {
    ((va = R()), b(), _(), K(), W(), Ge(), (ya = h()), ue(), ge(), Jt(), _e(), ha(), (ba = k()));
  }))();
}
function Sa(e) {
  let t = (0, Da.c)(189),
    {
      ref: r,
      autoFocus: i,
      focusRequested: a,
      composerController: o,
      getAttachmentActions: s,
      canStartVoice: c,
      draft: l,
      hidden: u,
      isExpanded: d,
      isSending: f,
      showsActions: p,
      menuContainer: m,
      menuPlacement: h,
      opacity: g,
      threadTarget: _,
      onCaretPointChange: v,
      onDraftChange: y,
      onExtraHeightChange: b,
      onRequestFocus: S,
      onSubmit: C,
      onVoiceSelectionChange: w,
    } = e,
    T = n(B),
    E = Re(),
    D = we(Rt),
    O = we(nr) ?? D,
    k = O != null,
    A = Fe(_n, O?.conversationId ?? null),
    M;
  t[0] !== A || t[1] !== O
    ? ((M = O == null ? null : Fn(A ?? `cyan`)), (t[0] = A), (t[1] = O), (t[2] = M))
    : (M = t[2]);
  let N = M,
    P = N?.background,
    F = N?.foreground,
    I;
  t[3] !== P || t[4] !== F
    ? ((I = { "--color-background-composer-primary": P, "--color-text-composer-primary": F }),
      (t[3] = P),
      (t[4] = F),
      (t[5] = I))
    : (I = t[5]);
  let L = I,
    R = (0, Oa.useRef)(null),
    [z, ee] = (0, Oa.useState)(null),
    V = (0, Oa.useRef)(null),
    H = (0, Oa.useRef)(!1),
    U = (0, Oa.useRef)(null),
    te;
  t[6] === o ? (te = t[7]) : ((te = o.getPersistedText()), (t[6] = o), (t[7] = te));
  let ne = (0, Oa.useRef)(te),
    W;
  t[8] === o.view ? (W = t[9]) : ((W = () => o.view.hasFocus()), (t[8] = o.view), (t[9] = W));
  let [G] = (0, Oa.useState)(W),
    K = An(o),
    re = bt(o),
    ie = _?.conversationId ?? null,
    q = _?.hostId ?? `local`,
    oe;
  t[10] !== ie || t[11] !== q
    ? ((oe = ie == null ? null : { hostId: q, threadId: ie }), (t[10] = ie), (t[11] = q), (t[12] = oe))
    : (oe = t[12]);
  let J = oe,
    ce = Fe(hn, J)?.cwd ?? null,
    le = ce === `~` ? null : ce,
    ue = Fe($t, J),
    de;
  t[13] !== le || t[14] !== q
    ? ((de = { hostId: q, cwd: le }), (t[13] = le), (t[14] = q), (t[15] = de))
    : (de = t[15]);
  let fe = Vt(de),
    Y = ue?.model ?? fe.model,
    pe;
  t[16] === le ? (pe = t[17]) : ((pe = le == null ? [] : [le]), (t[16] = le), (t[17] = pe));
  let me = pe,
    he;
  t[18] !== o || t[19] !== C
    ? ((he = () => {
        R.current?.finish() || C(o.getPersistedText());
      }),
      (t[18] = o),
      (t[19] = C),
      (t[20] = he))
    : (he = t[20]);
  let ge = he,
    _e;
  t[21] !== o || t[22] !== S
    ? ((_e = () => {
        H.current &&= (S(), o.focus(), !1);
      }),
      (t[21] = o),
      (t[22] = S),
      (t[23] = _e))
    : (_e = t[23]);
  let ve = _e,
    ye;
  t[24] !== ve || t[25] !== s || t[26] !== E || t[27] !== T
    ? ((ye = async () => {
        let e = De.avatarOverlay;
        if (!(e == null || H.current)) {
          H.current = !0;
          try {
            let t = await e.pickFiles();
            H.current &&
              t.length > 0 &&
              (await s?.().addPickedFiles(t, { imagesOnly: !1, loadImageDataUrls: Ct }));
          } catch {
            T.get(Ve).danger(
              E.formatMessage({
                id: `avatarOverlay.quickChatBar.filePickerError`,
                defaultMessage: `Unable to open file picker`,
                description: `Error when Mini cannot open the native file picker`,
              }),
              { errorAnalytics: { toastId: `avatarOverlay.quickChatBar.filePickerError` } },
            );
          }
          ve();
        }
      }),
      (t[24] = ve),
      (t[25] = s),
      (t[26] = E),
      (t[27] = T),
      (t[28] = ye))
    : (ye = t[28]);
  let be = ye,
    xe,
    Se;
  (t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = () => () => {
        H.current = !1;
      }),
      (Se = []),
      (t[29] = xe),
      (t[30] = Se))
    : ((xe = t[29]), (Se = t[30])),
    (0, Oa.useEffect)(xe, Se));
  let Ce;
  t[31] === s
    ? (Ce = t[32])
    : ((Ce = (e) => {
        s?.().addImages(e, `paste`);
      }),
      (t[31] = s),
      (t[32] = Ce));
  let Te = (0, Oa.useEffectEvent)(Ce),
    Ee;
  t[33] === s
    ? (Ee = t[34])
    : ((Ee = (e, t) => {
        s?.().addFileMentionsFromFiles(e, t);
      }),
      (t[33] = s),
      (t[34] = Ee));
  let Oe = (0, Oa.useEffectEvent)(Ee),
    ke;
  t[35] !== o || t[36] !== Oe || t[37] !== Te
    ? ((ke = () => (
        o.addPastedImagesHandler(Te),
        o.addPastedFilesHandler(Oe),
        () => {
          (o.removePastedImagesHandler(Te), o.removePastedFilesHandler(Oe));
        }
      )),
      (t[35] = o),
      (t[36] = Oe),
      (t[37] = Te),
      (t[38] = ke))
    : (ke = t[38]);
  let je;
  (t[39] === o ? (je = t[40]) : ((je = [o]), (t[39] = o), (t[40] = je)), (0, Oa.useEffect)(ke, je));
  let Me;
  t[41] !== o.view || t[42] !== v
    ? ((Me = () => {
        if (v == null || !o.view.hasFocus() || !document.hasFocus()) return;
        let e = pi(o.view),
          t = `${e?.x}\u0000${e?.y}`;
        U.current !== t && ((U.current = t), v(e));
      }),
      (t[41] = o.view),
      (t[42] = v),
      (t[43] = Me))
    : (Me = t[43]);
  let X = Me,
    Pe;
  t[44] === v
    ? (Pe = t[45])
    : ((Pe = () => {
        ((U.current = null), v?.(null));
      }),
      (t[44] = v),
      (t[45] = Pe));
  let Ie = Pe,
    Le;
  (t[46] !== o || t[47] !== ge || t[48] !== X
    ? ((Le = () => ({
        focus: () => o.focus(),
        blur: () => o.view.dom.blur(),
        submit: ge,
        isFilePickerOpen: () => H.current,
        prepareEscape: () => {
          if (R.current?.cancel() || Z.getState(o.view.state)?.active === !0) return !1;
          let e = o.getPersistedText();
          return (e.length > 0 && e.trim().length === 0 && o.setPromptText(``), !0);
        },
        updateCaretPoint: X,
      })),
      (t[46] = o),
      (t[47] = ge),
      (t[48] = X),
      (t[49] = Le))
    : (Le = t[49]),
    (0, Oa.useImperativeHandle)(r, Le));
  let ze;
  t[50] !== o || t[51] !== y || t[52] !== X
    ? ((ze = (e) => {
        if (e) {
          let e = o.getPersistedText();
          e !== ne.current && ((ne.current = e), y?.(e));
        }
        X();
      }),
      (t[50] = o),
      (t[51] = y),
      (t[52] = X),
      (t[53] = ze))
    : (ze = t[53]);
  let Be = (0, Oa.useEffectEvent)(ze),
    He;
  t[54] !== o.view || t[55] !== d
    ? ((He = () => {
        (o.view.dom.setAttribute(`tabindex`, d ? `0` : `-1`), d || Mn(o.view));
      }),
      (t[54] = o.view),
      (t[55] = d),
      (t[56] = He))
    : (He = t[56]);
  let Ue;
  (t[57] !== o || t[58] !== d ? ((Ue = [o, d]), (t[57] = o), (t[58] = d), (t[59] = Ue)) : (Ue = t[59]),
    (0, Oa.useEffect)(He, Ue));
  let We;
  t[60] !== o.view.dom || t[61] !== b
    ? ((We = () =>
        Xt({
          axis: `height`,
          target: V.current,
          onChange: (e) => {
            let { height: t } = e,
              n = Number.parseFloat(window.getComputedStyle(o.view.dom).lineHeight);
            b(Math.max(0, t - n));
          },
        })),
      (t[60] = o.view.dom),
      (t[61] = b),
      (t[62] = We))
    : (We = t[62]);
  let Ge;
  (t[63] !== o || t[64] !== b ? ((Ge = [o, b]), (t[63] = o), (t[64] = b), (t[65] = Ge)) : (Ge = t[65]),
    (0, Oa.useEffect)(We, Ge));
  let Ke;
  t[66] !== o.view || t[67] !== Be
    ? ((Ke = () => kn(o.view, Be)), (t[66] = o.view), (t[67] = Be), (t[68] = Ke))
    : (Ke = t[68]);
  let qe;
  (t[69] === o ? (qe = t[70]) : ((qe = [o]), (t[69] = o), (t[70] = qe)), (0, Oa.useEffect)(Ke, qe));
  let Je, Ye;
  (t[71] !== o || t[72] !== l
    ? ((Je = () => {
        l !== ne.current && ((ne.current = l), o.setPromptText(l));
      }),
      (Ye = [l, o]),
      (t[71] = o),
      (t[72] = l),
      (t[73] = Je),
      (t[74] = Ye))
    : ((Je = t[73]), (Ye = t[74])),
    (0, Oa.useEffect)(Je, Ye));
  let Xe = (0, Oa.useEffectEvent)(Ie),
    Ze = (0, Oa.useEffectEvent)(X),
    $e;
  t[75] !== Xe || t[76] !== Ze
    ? (($e = () => (
        window.addEventListener(`blur`, Xe),
        window.addEventListener(`focus`, Ze),
        () => {
          (window.removeEventListener(`blur`, Xe), window.removeEventListener(`focus`, Ze), Xe());
        }
      )),
      (t[75] = Xe),
      (t[76] = Ze),
      (t[77] = $e))
    : ($e = t[77]);
  let et;
  (t[78] === Symbol.for(`react.memo_cache_sentinel`) ? ((et = []), (t[78] = et)) : (et = t[78]),
    (0, Oa.useEffect)($e, et));
  let tt;
  t[79] === E
    ? (tt = t[80])
    : ((tt = E.formatMessage({
        id: `avatarOverlay.quickChatBar.send`,
        defaultMessage: `Send message`,
        description: `Button sending the draft in Mini Quick Chat`,
      })),
      (t[79] = E),
      (t[80] = tt));
  let nt = N == null ? `accent` : `composerPrimary`,
    rt;
  t[81] !== l || t[82] !== f
    ? ((rt = f || l.trim().length === 0), (t[81] = l), (t[82] = f), (t[83] = rt))
    : (rt = t[83]);
  let it = N == null && `text-white`,
    at;
  t[84] === it ? (at = t[85]) : ((at = j(it)), (t[84] = it), (t[85] = at));
  let ot;
  t[86] === at ? (ot = t[87]) : ((ot = (0, Aa.jsx)(Ne, { className: at })), (t[86] = at), (t[87] = ot));
  let st;
  t[88] !== ge || t[89] !== tt || t[90] !== nt || t[91] !== rt || t[92] !== ot
    ? ((st = (0, Aa.jsx)(se, {
        "aria-label": tt,
        color: nt,
        disabled: rt,
        radius: `full`,
        size: `compact`,
        uniform: !0,
        tabIndex: -1,
        onClick: ge,
        children: ot,
      })),
      (t[88] = ge),
      (t[89] = tt),
      (t[90] = nt),
      (t[91] = rt),
      (t[92] = ot),
      (t[93] = st))
    : (st = t[93]);
  let ct = st,
    ut = K.ui?.active === !0,
    dt;
  t[94] !== o || t[95] !== q || t[96] !== me || t[97] !== ut
    ? ((dt = (0, Aa.jsx)(lt, {
        composerController: o,
        hostId: q,
        includePluginCatalog: !1,
        roots: me,
        shouldLoadPlugins: ut,
      })),
      (t[94] = o),
      (t[95] = q),
      (t[96] = me),
      (t[97] = ut),
      (t[98] = dt))
    : (dt = t[98]);
  let ft;
  t[99] !== s ||
  t[100] !== q ||
  t[101] !== d ||
  t[102] !== k ||
  t[103] !== K ||
  t[104] !== m ||
  t[105] !== h ||
  t[106] !== be ||
  t[107] !== O ||
  t[108] !== me ||
  t[109] !== Y ||
  t[110] !== re
    ? ((ft =
        m == null || !d
          ? null
          : (0, ka.createPortal)(
              (0, Aa.jsxs)(`div`, {
                className: `contents`,
                onPointerDown: Ea,
                children: [
                  O == null
                    ? null
                    : (0, Aa.jsx)(ga, {
                        isActive: K.ui?.active === !0,
                        placement: h,
                        children:
                          K.ui?.active &&
                          (0, Aa.jsx)(zn, {
                            appshotThreadTarget: O,
                            attachButton: s == null ? null : { onClick: () => void be() },
                            fixedSectionHeaders: !0,
                            mentions: K,
                            placement: h,
                            pluginHostId: O.hostId,
                          }),
                      }),
                  (0, Aa.jsx)(St, {
                    ContextualSuggestionOverlay: ga,
                    contextualSuggestionUi: K.ui,
                    contextualSuggestions: k
                      ? void 0
                      : {
                          fixedSectionHeaders: !0,
                          hostId: q,
                          selectedModel: Y,
                          fileSearchRootPaths: me,
                          skillRoots: me,
                          onAddContext: K.addMention,
                          onRequestClose: K.closeAutocomplete,
                          onUpdateSelectedMention: K.setSelectedMention,
                        },
                    skillSuggestions: { autocomplete: re, roots: me, hostId: q, selectedModel: Y },
                    placement: h,
                  }),
                ],
              }),
              m,
            )),
      (t[99] = s),
      (t[100] = q),
      (t[101] = d),
      (t[102] = k),
      (t[103] = K),
      (t[104] = m),
      (t[105] = h),
      (t[106] = be),
      (t[107] = O),
      (t[108] = me),
      (t[109] = Y),
      (t[110] = re),
      (t[111] = ft))
    : (ft = t[111]);
  let Q;
  t[112] !== o ||
  t[113] !== s ||
  t[114] !== u ||
  t[115] !== E ||
  t[116] !== k ||
  t[117] !== K.ui?.active ||
  t[118] !== g ||
  t[119] !== T ||
  t[120] !== p
    ? ((Q =
        p && !u
          ? (0, Aa.jsx)(x.div, {
              className: `shrink-0 self-end`,
              style: { opacity: g },
              onPointerDown: Ta,
              children: (0, Aa.jsx)(se, {
                className: `enabled:active:hover:opacity-80`,
                "aria-label": E.formatMessage({
                  id: `avatarOverlay.quickChatBar.addContext`,
                  defaultMessage: `Add context`,
                  description: `Button opening the mention menu in Mini Quick Chat`,
                }),
                "aria-expanded": K.ui?.active === !0,
                color: `secondary`,
                radius: `full`,
                size: `compact`,
                uniform: !0,
                tabIndex: -1,
                onClick: () => {
                  k ? Rn(T, o, s != null) : o.toggleContextSuggestions();
                },
                children: (0, Aa.jsx)(ae, {}),
              }),
            })
          : null),
      (t[112] = o),
      (t[113] = s),
      (t[114] = u),
      (t[115] = E),
      (t[116] = k),
      (t[117] = K.ui?.active),
      (t[118] = g),
      (t[119] = T),
      (t[120] = p),
      (t[121] = Q))
    : (Q = t[121]);
  let pt = !d && `pointer-events-none`,
    mt = u && `invisible`,
    ht;
  t[122] !== pt || t[123] !== mt
    ? ((ht = j(`min-w-0 cursor-text font-medium`, Di.editor, pt, mt)),
      (t[122] = pt),
      (t[123] = mt),
      (t[124] = ht))
    : (ht = t[124]);
  let gt;
  t[125] === g ? (gt = t[126]) : ((gt = { opacity: g }), (t[125] = g), (t[126] = gt));
  let _t;
  t[127] !== w || t[128] !== X
    ? ((_t = () => {
        (w(!1), X());
      }),
      (t[127] = w),
      (t[128] = X),
      (t[129] = _t))
    : (_t = t[129]);
  let vt;
  t[130] !== c || t[131] !== o || t[132] !== w
    ? ((vt = (e) => {
        e.defaultPrevented ||
          e.nativeEvent.isComposing ||
          (e.key === `ArrowRight` && o.getPersistedText().length === 0 && c
            ? (e.preventDefault(), w(!0))
            : e.key === `ArrowLeft` && w(!1));
      }),
      (t[130] = c),
      (t[131] = o),
      (t[132] = w),
      (t[133] = vt))
    : (vt = t[133]);
  let yt;
  t[134] !== o.view || t[135] !== d || t[136] !== K || t[137] !== S
    ? ((yt = (e) => {
        if (e.button !== 0) return;
        K.ui?.activation === `synthetic` && K.closeAutocomplete();
        let t = o.view,
          n = Ae.atEnd(t.state.doc),
          r = t.coordsAtPos(n.head);
        if (
          !(window.getComputedStyle(t.dom).direction === `rtl` ? e.clientX < r.left : e.clientX > r.right) ||
          e.clientY < r.top ||
          e.clientY > r.bottom
        ) {
          (d && t.hasFocus() && !document.hasFocus() && S(), e.stopPropagation());
          return;
        }
        t.dispatch(t.state.tr.setSelection(n));
      }),
      (t[134] = o.view),
      (t[135] = d),
      (t[136] = K),
      (t[137] = S),
      (t[138] = yt))
    : (yt = t[138]);
  let xt;
  t[139] !== z ||
  t[140] !== o ||
  t[141] !== l ||
  t[142] !== u ||
  t[143] !== f ||
  t[144] !== S ||
  t[145] !== O ||
  t[146] !== ct ||
  t[147] !== p
    ? ((xt =
        O != null && p && !u && z != null
          ? (0, Aa.jsx)(
              sa,
              {
                ref: R,
                actionContainer: z,
                editor: o,
                hasText: l.trim().length > 0,
                isSending: f,
                onRequestFocus: S,
                sendButton: ct,
              },
              `${O.hostId}:${O.conversationId}`,
            )
          : null),
      (t[139] = z),
      (t[140] = o),
      (t[141] = l),
      (t[142] = u),
      (t[143] = f),
      (t[144] = S),
      (t[145] = O),
      (t[146] = ct),
      (t[147] = p),
      (t[148] = xt))
    : (xt = t[148]);
  let wt = !i || !(G || a),
    Tt;
  t[149] !== E || t[150] !== O
    ? ((Tt =
        O == null
          ? E.formatMessage({
              id: `avatarOverlay.quickChatBar.startNewChat`,
              defaultMessage: `Start new chat`,
              description: `Placeholder and accessible label for the floating Quick Chat bar, shown alone or below a pet`,
            })
          : E.formatMessage(aa, { name: O.name, hasName: !En(O.name) })),
      (t[149] = E),
      (t[150] = O),
      (t[151] = Tt))
    : (Tt = t[151]);
  let Et;
  t[152] !== K.handleMentionEvent || t[153] !== re.handleMentionEvent
    ? ((Et = (e) => Qt(e, { onAtMention: K.handleMentionEvent, onSkillMention: re.handleMentionEvent })),
      (t[152] = K.handleMentionEvent),
      (t[153] = re.handleMentionEvent),
      (t[154] = Et))
    : (Et = t[154]);
  let Dt;
  t[155] !== w || t[156] !== X
    ? ((Dt = () => {
        (w(!1), X());
      }),
      (t[155] = w),
      (t[156] = X),
      (t[157] = Dt))
    : (Dt = t[157]);
  let Ot;
  t[158] !== o || t[159] !== ge || t[160] !== wt || t[161] !== Tt || t[162] !== Et || t[163] !== Dt
    ? ((Ot = (0, Aa.jsx)(Zt, {
        className: Di.editorInput,
        composerController: o,
        disableAutoFocus: wt,
        minHeight: `0`,
        placeholder: Tt,
        onSuggestionHandler: Et,
        onSubmit: ge,
        onUserInput: Dt,
      })),
      (t[158] = o),
      (t[159] = ge),
      (t[160] = wt),
      (t[161] = Tt),
      (t[162] = Et),
      (t[163] = Dt),
      (t[164] = Ot))
    : (Ot = t[164]);
  let kt;
  t[165] !== Ie ||
  t[166] !== ht ||
  t[167] !== gt ||
  t[168] !== _t ||
  t[169] !== vt ||
  t[170] !== yt ||
  t[171] !== xt ||
  t[172] !== Ot ||
  t[173] !== X
    ? ((kt = (0, Aa.jsxs)(x.div, {
        ref: V,
        className: ht,
        role: `presentation`,
        style: gt,
        onBlur: Ie,
        onFocus: _t,
        onKeyDown: vt,
        onContextMenu: wa,
        onPointerDown: yt,
        onScrollCapture: X,
        onKeyUp: X,
        onPointerUp: X,
        children: [xt, Ot],
      })),
      (t[165] = Ie),
      (t[166] = ht),
      (t[167] = gt),
      (t[168] = _t),
      (t[169] = vt),
      (t[170] = yt),
      (t[171] = xt),
      (t[172] = Ot),
      (t[173] = X),
      (t[174] = kt))
    : (kt = t[174]);
  let At;
  t[175] !== u || t[176] !== k || t[177] !== g || t[178] !== ct || t[179] !== p || t[180] !== L
    ? ((At =
        p && !u
          ? (0, Aa.jsx)(x.div, {
              className: `shrink-0 self-end`,
              ref: ee,
              "data-quick-chat-composer-action": `true`,
              style: { ...L, opacity: g },
              onPointerDown: Ca,
              children: k ? null : ct,
            })
          : null),
      (t[175] = u),
      (t[176] = k),
      (t[177] = g),
      (t[178] = ct),
      (t[179] = p),
      (t[180] = L),
      (t[181] = At))
    : (At = t[181]);
  let jt;
  return (
    t[182] !== o || t[183] !== dt || t[184] !== ft || t[185] !== Q || t[186] !== kt || t[187] !== At
      ? ((jt = (0, Aa.jsxs)(Qe.Provider, { value: o, children: [dt, ft, Q, kt, At] })),
        (t[182] = o),
        (t[183] = dt),
        (t[184] = ft),
        (t[185] = Q),
        (t[186] = kt),
        (t[187] = At),
        (t[188] = jt))
      : (jt = t[188]),
    jt
  );
}
function Ca(e) {
  (e.preventDefault(), e.stopPropagation());
}
function wa(e) {
  return e.stopPropagation();
}
function Ta(e) {
  (e.preventDefault(), e.stopPropagation());
}
function Ea(e) {
  return e.stopPropagation();
}
var Da, Oa, ka, Aa;
function ja() {
  return (ja = e(() => {
    ((Da = R()),
      N(),
      _(),
      Y(),
      F(),
      Ge(),
      (Oa = h()),
      (ka = g()),
      J(),
      rn(),
      kt(),
      xt(),
      ot(),
      nn(),
      ge(),
      Mt(),
      wn(),
      gt(),
      fe(),
      G(),
      ie(),
      Wt(),
      In(),
      on(),
      it(),
      Ln(),
      Bn(),
      oa(),
      ir(),
      ft(),
      me(),
      i(),
      vt(),
      Tn(),
      It(),
      fa(),
      xa(),
      Oi(),
      (Aa = k()));
  }))();
}
var Ma, Na;
function Pa() {
  return (Pa = e(() => {
    (h(),
      (Ma = k()),
      (Na = (e) =>
        (0, Ma.jsxs)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, Ma.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M1.96202 1.96191C2.16693 1.757 2.49915 1.75722 2.7042 1.96191L14.0372 13.2949C14.2422 13.4999 14.2422 13.8321 14.0372 14.0371C13.8322 14.242 13.5 14.2421 13.295 14.0371L11.2687 12.0107C10.473 12.5542 9.53649 12.9058 8.52549 12.999V14.583C8.52549 14.873 8.29005 15.1084 8.0001 15.1084C7.71021 15.1083 7.47471 14.8729 7.47471 14.583V13.002C5.24362 12.8085 3.37268 11.3583 2.56749 9.36328C2.4592 9.09447 2.58971 8.78814 2.8585 8.67969C3.1273 8.57146 3.43365 8.70194 3.54209 8.9707C4.25385 10.7338 5.97585 11.9755 7.98448 11.9756C8.91193 11.9755 9.77644 11.7096 10.5099 11.252L9.31846 10.0605C8.916 10.2434 8.4697 10.3476 8.0001 10.3477C6.23774 10.3475 4.80801 8.91859 4.80772 7.15625V5.5498L1.96202 2.7041C1.75736 2.49909 1.75722 2.16684 1.96202 1.96191ZM5.8585 7.15625C5.85879 8.33869 6.81764 9.29765 8.0001 9.29785C8.17114 9.29783 8.3372 9.27609 8.4962 9.23828L5.8585 6.60059V7.15625Z`,
              fill: `currentColor`,
            }),
            (0, Ma.jsx)(`path`, {
              d: `M12.4581 8.97266C12.5655 8.70333 12.8714 8.57229 13.1407 8.67969C13.4097 8.78725 13.5409 9.09221 13.4337 9.36133C13.3999 9.44596 13.3635 9.5297 13.3243 9.61133C13.1988 9.87248 12.8844 9.98277 12.6231 9.85742C12.3622 9.73197 12.2521 9.41839 12.3771 9.15723C12.4059 9.09706 12.4332 9.03504 12.4581 8.97266Z`,
              fill: `currentColor`,
            }),
            (0, Ma.jsx)(`path`, {
              d: `M8.00108 0.974609C9.76343 0.975025 11.1925 2.40454 11.1925 4.16699V6.14355C11.1922 6.43318 10.9567 6.6678 10.6671 6.66797C10.3774 6.66786 10.1429 6.43322 10.1427 6.14355V4.16699C10.1427 2.98444 9.18354 2.02581 8.00108 2.02539C7.54882 2.02539 7.13186 2.17328 6.79795 2.4209C6.56514 2.59334 6.23627 2.54417 6.06358 2.31152C5.89106 2.07866 5.94016 1.74983 6.17295 1.57715C6.68184 1.19983 7.31639 0.974609 8.00108 0.974609Z`,
              fill: `currentColor`,
            }),
          ],
        })));
  }))();
}
var Fa, Ia;
function La() {
  return (La = e(() => {
    (h(),
      (Fa = k()),
      (Ia = (e) =>
        (0, Fa.jsx)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, Fa.jsx)(`path`, {
            d: `M11.3493 11.5281V12.063C11.3493 13.1798 10.0585 13.8018 9.18511 13.1058L7.23518 11.5521C7.05811 11.411 6.83841 11.3342 6.61201 11.3342H5.49994C4.67151 11.3342 3.99994 10.6626 3.99994 9.83422V6.55767C3.99994 5.9113 4.17933 5.32893 4.64255 4.98367M7.69879 4.08067L9.19314 2.87858C10.0513 2.25762 11.3493 2.61663 11.3493 4.20164V7.68849M2.4375 2.43744L13.6875 13.6874`,
            stroke: `currentColor`,
            strokeWidth: 1.05,
            strokeLinecap: `round`,
          }),
        })));
  }))();
}
function Ra(e) {
  let t = (0, Ha.c)(30),
    { reduceMotion: n } = e,
    r = (0, Ua.useId)(),
    i = (0, Ua.useId)(),
    [a, o] = (0, Ua.useState)(!1),
    s = n ? 0.15 : Ya,
    c = !n && `pulsing-dot`,
    l;
  t[0] === c ? (l = t[1]) : ((l = j(`flex size-10 items-center justify-center`, c)), (t[0] = c), (t[1] = l));
  let u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = { animationDelay: `${Ya}s` }), (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] !== s || t[4] !== n
    ? ((d = n
        ? null
        : (0, Wa.jsx)(`animate`, {
            attributeName: `stdDeviation`,
            calcMode: `linear`,
            dur: `${s}s`,
            fill: `freeze`,
            keyTimes: Xa.join(`;`),
            values: Xa.map(za).join(`;`),
          })),
      (t[3] = s),
      (t[4] = n),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] === d
    ? (f = t[7])
    : ((f = (0, Wa.jsx)(`feGaussianBlur`, { in: `SourceGraphic`, result: `blur`, children: d })),
      (t[6] = d),
      (t[7] = f));
  let p;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Wa.jsx)(`feColorMatrix`, {
        in: `blur`,
        type: `matrix`,
        values: `1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 24 -10`,
      })),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] !== r || t[10] !== f
    ? ((m = (0, Wa.jsx)(`defs`, {
        children: (0, Wa.jsxs)(`filter`, {
          id: r,
          colorInterpolationFilters: `sRGB`,
          height: `200%`,
          width: `200%`,
          x: `-50%`,
          y: `-50%`,
          children: [f, p],
        }),
      })),
      (t[9] = r),
      (t[10] = f),
      (t[11] = m))
    : (m = t[11]);
  let h = a ? void 0 : `url(#${r})`,
    g;
  t[12] !== s || t[13] !== a
    ? ((g = Za.map((e, t) => {
        let n = Math.abs(t - (Za.length - 1) / 2),
          r = t === Math.floor(Za.length / 2),
          i = 0.14 - n * 0.014,
          c = 0.2 + n * 0.018,
          l = 0.26 + n * 0.018,
          u = Ja + e.x + e.width / 2,
          d = Ja + e.y + e.height / 2,
          f = Xa.map((t) => Ba(e.width, Ka, Va(c, 1, t))),
          p = Xa.map((t) => Ba(e.height, Ka, Va(l, 1, t))),
          m = Xa.map((e, t) => {
            let n = Va(i, 0.72, e);
            return Ba(u, qa, n) - f[t] / 2;
          }),
          h = Xa.map((e, t) => Ba(d, qa, e) - p[t] / 2);
        return (0, Wa.jsx)(
          x.rect,
          {
            animate: { height: p, rx: f.map((e, t) => Math.min(e, p[t]) / 2), width: f, x: m, y: h },
            display: a && !r ? `none` : void 0,
            initial: { height: e.height, rx: e.width / 2, width: e.width, x: Ja + e.x, y: Ja + e.y },
            onAnimationComplete: r
              ? () => {
                  o(!0);
                }
              : void 0,
            transition: { duration: s, ease: `linear`, times: Xa },
          },
          e.x,
        );
      })),
      (t[12] = s),
      (t[13] = a),
      (t[14] = g))
    : (g = t[14]);
  let _;
  t[15] !== h || t[16] !== g
    ? ((_ = (0, Wa.jsx)(`g`, { fill: `white`, filter: h, children: g })),
      (t[15] = h),
      (t[16] = g),
      (t[17] = _))
    : (_ = t[17]);
  let v;
  t[18] !== i || t[19] !== _
    ? ((v = (0, Wa.jsx)(`mask`, {
        id: i,
        height: `40`,
        maskUnits: `userSpaceOnUse`,
        width: `40`,
        x: `0`,
        y: `0`,
        children: _,
      })),
      (t[18] = i),
      (t[19] = _),
      (t[20] = v))
    : (v = t[20]);
  let y = `url(#${i})`,
    b;
  t[21] === y
    ? (b = t[22])
    : ((b = (0, Wa.jsx)(`rect`, { fill: `currentColor`, height: `40`, mask: y, width: `40` })),
      (t[21] = y),
      (t[22] = b));
  let S;
  t[23] !== v || t[24] !== b || t[25] !== m
    ? ((S = (0, Wa.jsxs)(`svg`, {
        "aria-hidden": `true`,
        className: `size-10`,
        viewBox: `0 0 40 40`,
        children: [m, v, b],
      })),
      (t[23] = v),
      (t[24] = b),
      (t[25] = m),
      (t[26] = S))
    : (S = t[26]);
  let C;
  return (
    t[27] !== S || t[28] !== l
      ? ((C = (0, Wa.jsx)(`span`, { className: l, style: u, children: S })),
        (t[27] = S),
        (t[28] = l),
        (t[29] = C))
      : (C = t[29]),
    C
  );
}
function za(e) {
  return Math.sin(e * Math.PI) * 6 * Ga;
}
function Ba(e, t, n) {
  return e + (t - e) * n;
}
function Va(e, t, n) {
  let r = Math.min(Math.max((n - e) / (t - e), 0), 1);
  return r * r * (3 - 2 * r);
}
var Ha, Ua, Wa, Ga, Ka, qa, Ja, Ya, Xa, Za;
function Qa() {
  return (Qa = e(() => {
    ((Ha = R()),
      N(),
      _(),
      (Ua = h()),
      (Wa = k()),
      (Ga = 40 / 112),
      (Ka = 30 * Ga),
      (qa = 20),
      (Ja = 12),
      (Ya = 0.36),
      (Xa = Array.from({ length: 21 }, (e, t) => t / 20)),
      (Za = [
        { height: 5.16699, width: 1.5, x: 2.25, y: 5.41675 },
        { height: 12.16695, width: 1.5, x: 5.69434, y: 1.91675 },
        { height: 8.16694, width: 1.5, x: 9.13867, y: 3.74976 },
        { height: 4.16695, width: 1.5, x: 12.584, y: 5.91675 },
      ]));
  }))();
}
function $a(e) {
  let t = (0, eo.c)(74),
    {
      audioControlOpacity: n,
      audioControlWidth: r,
      reduceMotion: i,
      showsAudioControls: a,
      voice: o,
      onReturnToVoiceControls: s,
    } = e,
    c = Re(),
    l = !a || void 0,
    u;
  t[0] !== c || t[1] !== o.microphoneMuted
    ? ((u = c.formatMessage(o.microphoneMuted ? no.unmuteMicrophone : no.muteMicrophone)),
      (t[0] = c),
      (t[1] = o.microphoneMuted),
      (t[2] = u))
    : (u = t[2]);
  let d = o.phase !== `active`,
    f = !a,
    p;
  t[3] !== n || t[4] !== r
    ? ((p = { opacity: n, width: r }), (t[3] = n), (t[4] = r), (t[5] = p))
    : (p = t[5]);
  let m;
  t[6] === o.microphoneMuted
    ? (m = t[7])
    : ((m = o.microphoneMuted
        ? (0, to.jsx)(Na, { className: `icon-sm shrink-0` })
        : (0, to.jsx)(cn, { className: `icon-sm shrink-0` })),
      (t[6] = o.microphoneMuted),
      (t[7] = m));
  let h;
  t[8] !== l ||
  t[9] !== u ||
  t[10] !== d ||
  t[11] !== f ||
  t[12] !== p ||
  t[13] !== m ||
  t[14] !== o.microphoneMuted ||
  t[15] !== o.onToggleMicrophoneMute
    ? ((h = (0, to.jsx)(x.button, {
        "aria-hidden": l,
        "aria-label": u,
        "aria-pressed": o.microphoneMuted,
        className: `flex h-full shrink-0 cursor-interaction items-center justify-center overflow-hidden text-default focus-visible:outline-none`,
        "data-quick-chat-control": !0,
        disabled: d,
        inert: f,
        initial: !1,
        style: p,
        type: `button`,
        onClick: o.onToggleMicrophoneMute,
        children: m,
      })),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m),
      (t[14] = o.microphoneMuted),
      (t[15] = o.onToggleMicrophoneMute),
      (t[16] = h))
    : (h = t[16]);
  let g;
  t[17] !== r || t[18] !== a
    ? ((g = a
        ? (0, to.jsx)(x.span, {
            "aria-hidden": `true`,
            className: `pointer-events-none absolute inset-y-2 w-px bg-border`,
            "data-quick-chat-divider": `voice`,
            style: { left: r },
          })
        : null),
      (t[17] = r),
      (t[18] = a),
      (t[19] = g))
    : (g = t[19]);
  let _;
  t[20] !== c || t[21] !== a
    ? ((_ = a
        ? c.formatMessage(no.stop)
        : c.formatMessage({
            id: `avatarOverlay.quickChatBar.returnToVoiceControls`,
            defaultMessage: `Return to voice controls`,
            description: `Mini button to return to ongoing voice controls`,
          })),
      (t[20] = c),
      (t[21] = a),
      (t[22] = _))
    : (_ = t[22]);
  let v = a ? `` : `surface`,
    y = a ? o.onStop : s,
    b;
  t[23] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = { scale: 1 }), (t[23] = b)) : (b = t[23]);
  let S;
  t[24] === i ? (S = t[25]) : ((S = !i && { scale: Ka / 28 }), (t[24] = i), (t[25] = S));
  let C;
  t[26] === i ? (C = t[27]) : ((C = i ? { duration: 0 } : Hn.filter), (t[26] = i), (t[27] = C));
  let w;
  t[28] !== o.activity || t[29] !== o.phase || t[30] !== o.presentationAnchorRef
    ? ((w = (0, to.jsx)(Dt, {
        glowEnabled: !1,
        placement: `center`,
        presentationAnchorRef: o.presentationAnchorRef,
        phase: o.phase,
        voiceActivity: o.activity,
      })),
      (t[28] = o.activity),
      (t[29] = o.phase),
      (t[30] = o.presentationAnchorRef),
      (t[31] = w))
    : (w = t[31]);
  let T;
  t[32] !== w || t[33] !== o.handoff || t[34] !== o.usesPresentationFadeTransition
    ? ((T = (0, to.jsx)(Qn, {
        className: `pointer-events-none relative size-full overflow-hidden rounded-full group-hover:opacity-70`,
        handoff: o.handoff,
        surface: `global-overlay`,
        usesFadeTransition: o.usesPresentationFadeTransition,
        children: w,
      })),
      (t[32] = w),
      (t[33] = o.handoff),
      (t[34] = o.usesPresentationFadeTransition),
      (t[35] = T))
    : (T = t[35]);
  let E;
  t[36] === a
    ? (E = t[37])
    : ((E = a
        ? (0, to.jsx)(ce, {
            className: `icon-sm pointer-events-none absolute inset-0 m-auto opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100`,
          })
        : null),
      (t[36] = a),
      (t[37] = E));
  let D;
  t[38] !== S || t[39] !== C || t[40] !== T || t[41] !== E
    ? ((D = (0, to.jsxs)(x.span, {
        animate: b,
        className: `relative size-7 shrink-0`,
        initial: S,
        transition: C,
        children: [T, E],
      })),
      (t[38] = S),
      (t[39] = C),
      (t[40] = T),
      (t[41] = E),
      (t[42] = D))
    : (D = t[42]);
  let O;
  t[43] !== v || t[44] !== y || t[45] !== D || t[46] !== _
    ? ((O = (0, to.jsx)(`button`, {
        "aria-label": _,
        className: `group relative flex h-full min-w-0 flex-1 cursor-interaction items-center justify-center text-secondary focus-visible:outline-none`,
        "data-quick-chat-control": v,
        "data-quick-chat-return-to-voice": !0,
        type: `button`,
        onClick: y,
        children: D,
      })),
      (t[43] = v),
      (t[44] = y),
      (t[45] = D),
      (t[46] = _),
      (t[47] = O))
    : (O = t[47]);
  let k;
  t[48] !== r || t[49] !== a
    ? ((k = a
        ? (0, to.jsx)(x.span, {
            "aria-hidden": `true`,
            className: `pointer-events-none absolute inset-y-2 w-px bg-border`,
            "data-quick-chat-divider": `voice`,
            style: { right: r },
          })
        : null),
      (t[48] = r),
      (t[49] = a),
      (t[50] = k))
    : (k = t[50]);
  let A = !a || void 0,
    j;
  t[51] !== c || t[52] !== o.muted
    ? ((j = c.formatMessage(o.muted ? no.unmuteOutput : no.muteOutput)),
      (t[51] = c),
      (t[52] = o.muted),
      (t[53] = j))
    : (j = t[53]);
  let M = o.phase !== `active`,
    N = !a,
    P;
  t[54] !== n || t[55] !== r
    ? ((P = { opacity: n, width: r }), (t[54] = n), (t[55] = r), (t[56] = P))
    : (P = t[56]);
  let F;
  t[57] === o.muted
    ? (F = t[58])
    : ((F = o.muted
        ? (0, to.jsx)(Ia, { className: `icon-sm shrink-0` })
        : (0, to.jsx)(Xn, { className: `icon-sm shrink-0` })),
      (t[57] = o.muted),
      (t[58] = F));
  let I;
  t[59] !== A ||
  t[60] !== j ||
  t[61] !== M ||
  t[62] !== N ||
  t[63] !== P ||
  t[64] !== F ||
  t[65] !== o.muted ||
  t[66] !== o.onToggleMute
    ? ((I = (0, to.jsx)(x.button, {
        "aria-hidden": A,
        "aria-label": j,
        "aria-pressed": o.muted,
        className: `flex h-full shrink-0 cursor-interaction items-center justify-center overflow-hidden text-default focus-visible:outline-none`,
        "data-quick-chat-control": !0,
        disabled: M,
        inert: N,
        initial: !1,
        style: P,
        type: `button`,
        onClick: o.onToggleMute,
        children: F,
      })),
      (t[59] = A),
      (t[60] = j),
      (t[61] = M),
      (t[62] = N),
      (t[63] = P),
      (t[64] = F),
      (t[65] = o.muted),
      (t[66] = o.onToggleMute),
      (t[67] = I))
    : (I = t[67]);
  let L;
  return (
    t[68] !== O || t[69] !== k || t[70] !== I || t[71] !== h || t[72] !== g
      ? ((L = (0, to.jsxs)(`div`, {
          className: `relative flex size-full items-center rounded-full select-none`,
          children: [h, g, O, k, I],
        })),
        (t[68] = O),
        (t[69] = k),
        (t[70] = I),
        (t[71] = h),
        (t[72] = g),
        (t[73] = L))
      : (L = t[73]),
    L
  );
}
var eo, to, no;
function ro() {
  return (ro = e(() => {
    ((eo = R()),
      _(),
      J(),
      Wn(),
      Pa(),
      Yt(),
      La(),
      Yn(),
      oe(),
      ut(),
      Zn(),
      Qa(),
      (to = k()),
      (no = le({
        stop: {
          id: `avatarOverlay.stopRealtimeVoice`,
          defaultMessage: `Stop voice chat`,
          description: `Accessible label and tooltip for stopping realtime voice from the floating avatar`,
        },
        muteMicrophone: {
          id: `avatarOverlay.muteMicrophone`,
          defaultMessage: `Mute microphone`,
          description: `Accessible label and tooltip for muting microphone input from the floating avatar`,
        },
        unmuteMicrophone: {
          id: `avatarOverlay.unmuteMicrophone`,
          defaultMessage: `Unmute microphone`,
          description: `Accessible label and tooltip for unmuting microphone input from the floating avatar`,
        },
        muteOutput: {
          id: `avatarOverlay.muteOutput`,
          defaultMessage: `Mute voice chat`,
          description: `Accessible label and tooltip for showing realtime voice output as captions from the floating avatar`,
        },
        unmuteOutput: {
          id: `avatarOverlay.unmuteOutput`,
          defaultMessage: `Unmute voice chat`,
          description: `Accessible label and tooltip for resuming realtime voice audio output from the floating avatar`,
        },
      })));
  }))();
}
function io(e) {
  let t = (0, ao.c)(19),
    n,
    r,
    i,
    a,
    o,
    s;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (s = t[6]))
    : (({ origin: a, avatarRef: r, avatarOrigin: n, morphFromName: i, ref: s, ...o } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s));
  let c = (0, oo.useRef)(null),
    u = m(),
    d,
    f;
  (t[7] !== n || t[8] !== r || t[9] !== i || t[10] !== a || t[11] !== u
    ? ((d = () => {
        let e = c.current;
        if (e == null || !i || u) return;
        e.style.visibility = `hidden`;
        let t,
          o = r.current,
          s = () => {
            (e.style.removeProperty(`visibility`),
              e.style.removeProperty(`overflow`),
              o?.style.removeProperty(`transform`),
              o?.style.removeProperty(`transform-origin`),
              e.style.removeProperty(`width`),
              e.style.removeProperty(`height`),
              e.style.removeProperty(`transform`));
          },
          d = () => {
            let r = a?.current,
              i = n?.current.header,
              c = e.getBoundingClientRect();
            if ((r != null || i != null) && c.width > 0 && c.height > 0) {
              (a != null && (a.current = null), n != null && (n.current.header = null));
              let u = e.currentCSSZoom || 1,
                d = window.screenX,
                f = window.screenY,
                p = (t) => {
                  r == null ||
                    r.width <= 0 ||
                    r.height <= 0 ||
                    ((e.style.width = `${(r.width + (c.width - r.width) * t) / u}px`),
                    (e.style.height = `${(r.height + (c.height - r.height) * t) / u}px`),
                    (e.style.transform = `translate(${((r.left - d - c.left) / u) * (1 - t)}px, ${((r.top - f - c.top) / u) * (1 - t)}px)`));
                };
              p(0);
              let m = o?.getBoundingClientRect(),
                h = (t) => {
                  if ((p(t), o != null && i != null && m != null && m.width > 0 && m.height > 0)) {
                    let n = 1 - t;
                    ((e.style.overflow = `visible`),
                      (o.style.transformOrigin = `top left`),
                      (o.style.transform = `translate(${((i.left - d - m.left) / u) * n}px, ${((i.top - f - m.top) / u) * n}px) scale(${1 + (i.width / m.width - 1) * n}, ${1 + (i.height / m.height - 1) * n})`));
                  }
                };
              (h(0), (t = l(0, 1, { ...kr(!1, !0), onUpdate: h, onComplete: s })));
            }
            e.style.removeProperty(`visibility`);
          };
        return (
          p.postRender(d),
          () => {
            (ne(d), t?.stop(), s());
          }
        );
      }),
      (f = [n, r, i, a, u]),
      (t[7] = n),
      (t[8] = r),
      (t[9] = i),
      (t[10] = a),
      (t[11] = u),
      (t[12] = d),
      (t[13] = f))
    : ((d = t[12]), (f = t[13])),
    (0, oo.useLayoutEffect)(d, f));
  let h;
  t[14] === s ? (h = t[15]) : ((h = de(s, c)), (t[14] = s), (t[15] = h));
  let g;
  return (
    t[16] !== o || t[17] !== h
      ? ((g = (0, so.jsx)(Pt, { ...o, ref: h })), (t[16] = o), (t[17] = h), (t[18] = g))
      : (g = t[18]),
    g
  );
}
var ao, oo, so;
function co() {
  return (co = e(() => {
    ((ao = R()), qe(), L(), W(), (oo = h()), T(), ct(), Ar(), (so = k()));
  }))();
}
function lo(e) {
  let t = Ni(e),
    n = e.layout.quickChat?.workArea ?? e.layout.visibleBounds,
    r = uo({ barTop: t.bar.top, composerHeight: t.target.composerHeight, workArea: n }),
    i = t.bar.left + t.target.composerLeft;
  if (r.expandsFromTop) {
    let r = Ni({
        ...e,
        draft: ``,
        editorExtraHeight: 0,
        hasAppshots: !1,
        hasReply: !1,
        replyHeight: 0,
        isEditorActive: !1,
        isExpanded: !1,
        isVoiceActive: !1,
      }),
      a = r.bar.left + r.target.composerLeft + r.target.composerWidth / 2;
    i = (0, fo.default)(
      a - t.target.composerWidth / 2,
      n.left + 16,
      n.left + n.width - t.target.composerWidth - 16,
    );
  }
  return { ...r, composerLeft: i };
}
function uo({ barTop: e, composerHeight: t, workArea: n }) {
  let r = Math.max(0, Math.min(Math.max(n.height / 2, 300), n.height - 40 - 32 - 20)),
    i = n.top + 16,
    a = e - i < r + 20,
    o = (0, fo.default)(e, i + 20, n.top + n.height - 16 - 40),
    s = a ? r : Math.min(r, Math.max(0, o - i - 20)),
    c = a ? Math.max(i, Math.min(e, n.top + n.height - 16 - r - 20 - 40)) : o - s - 20;
  return { height: s, top: c, composerTop: c + s + 20 - Math.max(0, t - 40), expandsFromTop: a };
}
var fo;
function po() {
  return (po = e(() => {
    ((fo = t(ye(), 1)), Ge(), Li());
  }))();
}
function mo(e) {
  let t = (0, yo.c)(247),
    n,
    r,
    i,
    a,
    o,
    c,
    u,
    d,
    f,
    p,
    m,
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (c = t[6]),
      (u = t[7]),
      (d = t[8]),
      (f = t[9]),
      (p = t[10]),
      (m = t[11]),
      (h = t[12]),
      (g = t[13]),
      (_ = t[14]),
      (v = t[15]),
      (y = t[16]),
      (b = t[17]),
      (x = t[18]),
      (S = t[19]))
    : (({
        animatesPresentation: r,
        appshotCaptureResponse: i,
        usesAppshotHandoff: S,
        hasPresentedAppshot: c,
        isMinimized: u,
        isTranscriptComposer: d,
        presentation: h,
        compact: o,
        mascot: f,
        petControlsAppearance: p,
        stashAppearance: b,
        stashEdge: x,
        activityBadgeDigits: n,
        prefersReducedMotion: m,
        presentedComposerHeight: _,
        presentedComposerTop: v,
        presentedExpansion: y,
        children: a,
        ...g
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = c),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p),
      (t[11] = m),
      (t[12] = h),
      (t[13] = g),
      (t[14] = _),
      (t[15] = v),
      (t[16] = y),
      (t[17] = b),
      (t[18] = x),
      (t[19] = S));
  let C = g.isOrbitTranscript === !0,
    { left: w, top: T, width: E } = h.bar,
    D = f.left + f.width / 2,
    O = w - D,
    k = T - f.top,
    A;
  t[20] !== O || t[21] !== k ? ((A = { x: O, y: k }), (t[20] = O), (t[21] = k), (t[22] = A)) : (A = t[22]);
  let j = A,
    N = M(j.x),
    P = M(j.y),
    { target: F } = h,
    I = h.state === `composing`,
    L = h.state === `voice`,
    R = h.state === `expanded` || I,
    z = $r(p) / o.width,
    ee = M(+!u),
    B = y ?? ee,
    V;
  t[23] !== z || t[24] !== B
    ? ((V = () => z + (1 - z) * B.get()), (t[23] = z), (t[24] = B), (t[25] = V))
    : (V = t[25]);
  let H = s(V),
    U;
  t[26] !== p.compactControlHeight || t[27] !== B
    ? ((U = () => ji(B.get(), p.compactControlHeight, window.devicePixelRatio)),
      (t[26] = p.compactControlHeight),
      (t[27] = B),
      (t[28] = U))
    : (U = t[28]);
  let te = s(U),
    ne = M(+!u),
    W;
  t[29] !== C || t[30] !== R ? ((W = kr(R, C)), (t[29] = C), (t[30] = R), (t[31] = W)) : (W = t[31]);
  let G = W,
    K = i?.transitionSpringDampingFraction,
    re = i?.transitionSpringResponse,
    ie;
  t[32] !== K || t[33] !== re
    ? ((ie = Et({ transitionSpringDampingFraction: K, transitionSpringResponse: re })),
      (t[32] = K),
      (t[33] = re),
      (t[34] = ie))
    : (ie = t[34]);
  let ae = ie,
    q = S ? ae : G,
    oe = M(F.composerLeft + F.composerWidth / 2),
    J = M(F.composerWidth),
    se;
  t[35] !== oe || t[36] !== J
    ? ((se = () => oe.get() - J.get() / 2), (t[35] = oe), (t[36] = J), (t[37] = se))
    : (se = t[37]);
  let ce = s(se),
    le = M(F.composerHeight),
    ue = _ ?? le,
    de = M(F.composerTop),
    fe = v ?? de,
    Y = M(F.stashProgress),
    pe;
  t[38] !== ue || t[39] !== fe || t[40] !== Y
    ? ((pe = function () {
        return (fe.get() + ue.get() - 40) * (1 - Y.get());
      }),
      (t[38] = ue),
      (t[39] = fe),
      (t[40] = Y),
      (t[41] = pe))
    : (pe = t[41]);
  let me = s(pe),
    he = M(F.composerRadius),
    ge = M(F.composerEdgeBleed),
    _e = s(Y, vo),
    ve = s(Y, _o),
    ye = M(F.voiceLeft),
    be = M(F.voiceWidth),
    xe;
  t[42] === be
    ? (xe = t[43])
    : ((xe = () => Math.max(0, ((be.get() - 40) * wo) / 84)), (t[42] = be), (t[43] = xe));
  let Se = s(xe),
    Ce;
  t[44] === Se
    ? (Ce = t[45])
    : ((Ce = () => (0, bo.default)((Se.get() / wo - 0.5) * 2, 0, 1)), (t[44] = Se), (t[45] = Ce));
  let we = s(Ce),
    Te = M(F.badgeLeft),
    Ee = h.hasDetachedActivity && h.state !== `stashed`,
    De = M(+!Ee),
    Oe = M(+!Ee),
    ke = M(F.orbScale),
    Ae = M(u ? 0 : F.compactProgress),
    je;
  t[46] !== ce || t[47] !== J || t[48] !== Y || t[49] !== ye || t[50] !== b.glassSpacing
    ? ((je = function () {
        let e = ye.get() - ce.get() - J.get(),
          t = Math.min(ze.compactGlassSpacing, Math.max(0, ze.hoverControlGap - e)),
          n = (0, bo.default)(Y.get(), 0, 1);
        return t + (b.glassSpacing - t) * n;
      }),
      (t[46] = ce),
      (t[47] = J),
      (t[48] = Y),
      (t[49] = ye),
      (t[50] = b.glassSpacing),
      (t[51] = je))
    : (je = t[51]);
  let Me = je,
    X;
  t[52] !== Me || t[53] !== Te || t[54] !== ce || t[55] !== J || t[56] !== ye || t[57] !== be
    ? ((X = function (e) {
        let t = { voice: ye, badge: Te }[e].get(),
          n = e === `voice` ? be.get() : 40,
          r = Math.min(ce.get() + J.get(), t + n) - Math.max(ce.get(), t),
          i = Me(),
          a = (0, bo.default)((r + i) / (n + i), 0, 1),
          o = (0, bo.default)((a - So) / 0.5700000000000001, 0, 1);
        return 40 + -20 * (o * o * (3 - 2 * o)) ** Co;
      }),
      (t[52] = Me),
      (t[53] = Te),
      (t[54] = ce),
      (t[55] = J),
      (t[56] = ye),
      (t[57] = be),
      (t[58] = X))
    : (X = t[58]);
  let Ne = X,
    Pe;
  t[59] === Ne ? (Pe = t[60]) : ((Pe = () => Ne(`voice`)), (t[59] = Ne), (t[60] = Pe));
  let Fe = s(Pe),
    Ie;
  t[61] === Ne ? (Ie = t[62]) : ((Ie = () => Ne(`badge`)), (t[61] = Ne), (t[62] = Ie));
  let Le = s(Ie),
    Re = M(F.inputOpacity),
    Z = M(F.orbIconOpacity),
    Be = M(F.orbIconBlurRadius),
    Ve = s(Be, Un),
    He;
  t[63] !== h.hasDetachedActivity || t[64] !== Te || t[65] !== ye || t[66] !== be || t[67] !== L
    ? ((He = () =>
        L || h.hasDetachedActivity
          ? 1
          : (0, bo.default)((Te.get() - ye.get() - be.get() + 40) / 20 - 1, 0, 1)),
      (t[63] = h.hasDetachedActivity),
      (t[64] = Te),
      (t[65] = ye),
      (t[66] = be),
      (t[67] = L),
      (t[68] = He))
    : (He = t[68]);
  let We = s(He),
    Ge;
  t[69] !== h.hasDetachedActivity || t[70] !== We || t[71] !== _e || t[72] !== Z
    ? ((Ge = () => (h.hasDetachedActivity ? 1 : Z.get()) * _e.get() * We.get()),
      (t[69] = h.hasDetachedActivity),
      (t[70] = We),
      (t[71] = _e),
      (t[72] = Z),
      (t[73] = Ge))
    : (Ge = t[73]);
  let Ke = s(Ge),
    qe = s(ue, go),
    Je = s(J, ho),
    Ye;
  t[74] !== We || t[75] !== Ae
    ? ((Ye = () => Ae.get() * We.get()), (t[74] = We), (t[75] = Ae), (t[76] = Ye))
    : (Ye = t[76]);
  let Xe = s(Ye),
    Ze;
  t[77] === We ? (Ze = t[78]) : ((Ze = () => (We.get() === 1 ? `auto` : `none`)), (t[77] = We), (t[78] = Ze));
  let Qe = s(Ze),
    $e = s(Me),
    et = +!u,
    tt = u ? 0 : F.compactProgress,
    nt;
  t[79] !== et ||
  t[80] !== tt ||
  t[81] !== F.badgeLeft ||
  t[82] !== F.composerHeight ||
  t[83] !== F.composerRadius ||
  t[84] !== F.composerTop ||
  t[85] !== F.composerWidth ||
  t[86] !== F.voiceLeft ||
  t[87] !== F.voiceWidth
    ? ((nt = {
        "--quick-chat-controls-opacity": et,
        "--quick-chat-composer-width": F.composerWidth,
        "--quick-chat-composer-height": F.composerHeight,
        "--quick-chat-composer-top": F.composerTop,
        "--quick-chat-composer-radius": F.composerRadius,
        "--quick-chat-voice-left": F.voiceLeft,
        "--quick-chat-voice-width": F.voiceWidth,
        "--quick-chat-badge-left": F.badgeLeft,
        "--quick-chat-compact-progress": tt,
      }),
      (t[79] = et),
      (t[80] = tt),
      (t[81] = F.badgeLeft),
      (t[82] = F.composerHeight),
      (t[83] = F.composerRadius),
      (t[84] = F.composerTop),
      (t[85] = F.composerWidth),
      (t[86] = F.voiceLeft),
      (t[87] = F.voiceWidth),
      (t[88] = nt))
    : (nt = t[88]);
  let rt = nt,
    it;
  t[89] !== Te ||
  t[90] !== Ae ||
  t[91] !== ue ||
  t[92] !== he ||
  t[93] !== fe ||
  t[94] !== J ||
  t[95] !== ne ||
  t[96] !== ye ||
  t[97] !== be
    ? ((it = {
        "--quick-chat-controls-opacity": ne,
        "--quick-chat-composer-width": J,
        "--quick-chat-composer-height": ue,
        "--quick-chat-composer-top": fe,
        "--quick-chat-composer-radius": he,
        "--quick-chat-voice-left": ye,
        "--quick-chat-voice-width": be,
        "--quick-chat-badge-left": Te,
        "--quick-chat-compact-progress": Ae,
      }),
      (t[89] = Te),
      (t[90] = Ae),
      (t[91] = ue),
      (t[92] = he),
      (t[93] = fe),
      (t[94] = J),
      (t[95] = ne),
      (t[96] = ye),
      (t[97] = be),
      (t[98] = it))
    : (it = t[98]);
  let at = it,
    ot = +!u,
    st;
  t[99] !== B || t[100] !== ot ? ((st = [B, ot]), (t[99] = B), (t[100] = ot), (t[101] = st)) : (st = t[101]);
  let ct = F.composerLeft + F.composerWidth / 2,
    lt;
  t[102] !== oe || t[103] !== ct
    ? ((lt = [oe, ct]), (t[102] = oe), (t[103] = ct), (t[104] = lt))
    : (lt = t[104]);
  let ut;
  t[105] !== ge || t[106] !== F.composerEdgeBleed
    ? ((ut = [ge, F.composerEdgeBleed]), (t[105] = ge), (t[106] = F.composerEdgeBleed), (t[107] = ut))
    : (ut = t[107]);
  let dt;
  t[108] !== Y || t[109] !== F.stashProgress
    ? ((dt = [Y, F.stashProgress]), (t[108] = Y), (t[109] = F.stashProgress), (t[110] = dt))
    : (dt = t[110]);
  let ft;
  t[111] !== ke || t[112] !== F.orbScale
    ? ((ft = [ke, F.orbScale]), (t[111] = ke), (t[112] = F.orbScale), (t[113] = ft))
    : (ft = t[113]);
  let Q;
  t[114] !== q || t[115] !== R
    ? ((Q = R ? q : { duration: 0 }), (t[114] = q), (t[115] = R), (t[116] = Q))
    : (Q = t[116]);
  let pt;
  t[117] !== Re || t[118] !== Q || t[119] !== F.inputOpacity
    ? ((pt = [Re, F.inputOpacity, Q]), (t[117] = Re), (t[118] = Q), (t[119] = F.inputOpacity), (t[120] = pt))
    : (pt = t[120]);
  let mt;
  t[121] !== I || t[122] !== q
    ? ((mt = I ? { duration: 0 } : q), (t[121] = I), (t[122] = q), (t[123] = mt))
    : (mt = t[123]);
  let ht;
  t[124] !== Z || t[125] !== mt || t[126] !== F.orbIconOpacity
    ? ((ht = [Z, F.orbIconOpacity, mt]),
      (t[124] = Z),
      (t[125] = mt),
      (t[126] = F.orbIconOpacity),
      (t[127] = ht))
    : (ht = t[127]);
  let gt;
  t[128] !== I || t[129] !== q
    ? ((gt = I ? { duration: 0 } : q), (t[128] = I), (t[129] = q), (t[130] = gt))
    : (gt = t[130]);
  let _t;
  t[131] !== Be || t[132] !== gt || t[133] !== F.orbIconBlurRadius
    ? ((_t = [Be, F.orbIconBlurRadius, gt]),
      (t[131] = Be),
      (t[132] = gt),
      (t[133] = F.orbIconBlurRadius),
      (t[134] = _t))
    : (_t = t[134]);
  let vt;
  t[135] !== st ||
  t[136] !== lt ||
  t[137] !== ut ||
  t[138] !== dt ||
  t[139] !== ft ||
  t[140] !== pt ||
  t[141] !== ht ||
  t[142] !== _t
    ? ((vt = [st, lt, ut, dt, ft, pt, ht, _t]),
      (t[135] = st),
      (t[136] = lt),
      (t[137] = ut),
      (t[138] = dt),
      (t[139] = ft),
      (t[140] = pt),
      (t[141] = ht),
      (t[142] = _t),
      (t[143] = vt))
    : (vt = t[143]);
  let yt = vt,
    bt;
  t[144] === Symbol.for(`react.memo_cache_sentinel`) ? ((bt = new Map()), (t[144] = bt)) : (bt = t[144]);
  let xt = (0, xo.useRef)(bt),
    St;
  t[145] !== yt ||
  t[146] !== j.x ||
  t[147] !== j.y ||
  t[148] !== at ||
  t[149] !== rt ||
  t[150] !== N ||
  t[151] !== P
    ? ((St = (e) => {
        for (let [t, n] of yt) {
          if (e) t.jump(n);
          else if (!xt.current.has(t)) t.set(n);
          else continue;
          xt.current.set(t, n);
        }
        if (e) {
          (N.jump(j.x), P.jump(j.y));
          for (let [e, t] of Object.entries(rt)) at[e].jump(t);
        }
      }),
      (t[145] = yt),
      (t[146] = j.x),
      (t[147] = j.y),
      (t[148] = at),
      (t[149] = rt),
      (t[150] = N),
      (t[151] = P),
      (t[152] = St))
    : (St = t[152]);
  let Ct = (0, xo.useEffectEvent)(St),
    wt = (0, xo.useRef)(d),
    Tt;
  t[153] !== r || t[154] !== d || t[155] !== m || t[156] !== Ct
    ? ((Tt = () => {
        (Ct(!r || m || wt.current !== d), (wt.current = d));
      }),
      (t[153] = r),
      (t[154] = d),
      (t[155] = m),
      (t[156] = Ct),
      (t[157] = Tt))
    : (Tt = t[157]);
  let Dt;
  (t[158] !== r ||
  t[159] !== u ||
  t[160] !== d ||
  t[161] !== j.x ||
  t[162] !== j.y ||
  t[163] !== m ||
  t[164] !== B ||
  t[165] !== F
    ? ((Dt = [r, u, d, j.x, j.y, m, B, F]),
      (t[158] = r),
      (t[159] = u),
      (t[160] = d),
      (t[161] = j.x),
      (t[162] = j.y),
      (t[163] = m),
      (t[164] = B),
      (t[165] = F),
      (t[166] = Dt))
    : (Dt = t[166]),
    (0, xo.useLayoutEffect)(Tt, Dt));
  let Ot;
  t[167] !== r || t[168] !== yt || t[169] !== m || t[170] !== q
    ? ((Ot = () => {
        for (let [e, t, n] of yt)
          xt.current.get(e) !== t && (xt.current.set(e, t), l(e, t, m || !r ? { duration: 0 } : (n ?? q)));
      }),
      (t[167] = r),
      (t[168] = yt),
      (t[169] = m),
      (t[170] = q),
      (t[171] = Ot))
    : (Ot = t[171]);
  let kt = (0, xo.useEffectEvent)(Ot),
    At;
  t[172] === kt
    ? (At = t[173])
    : ((At = () => {
        kt();
      }),
      (t[172] = kt),
      (t[173] = At));
  let jt;
  (t[174] !== u || t[175] !== F ? ((jt = [u, F]), (t[174] = u), (t[175] = F), (t[176] = jt)) : (jt = t[176]),
    (0, xo.useEffect)(At, jt));
  let Mt, Nt;
  (t[177] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Mt = () => {
        let e = xt.current;
        return () => {
          for (let t of e.keys()) t.stop();
          e.clear();
        };
      }),
      (Nt = []),
      (t[177] = Mt),
      (t[178] = Nt))
    : ((Mt = t[177]), (Nt = t[178])),
    (0, xo.useEffect)(Mt, Nt));
  let Pt, Ft;
  (t[179] !== h.hasDetachedActivity || t[180] !== Te || t[181] !== F.badgeLeft
    ? ((Pt = () => {
        h.hasDetachedActivity && Te.jump(F.badgeLeft);
      }),
      (Ft = [h.hasDetachedActivity, Te, F.badgeLeft]),
      (t[179] = h.hasDetachedActivity),
      (t[180] = Te),
      (t[181] = F.badgeLeft),
      (t[182] = Pt),
      (t[183] = Ft))
    : ((Pt = t[182]), (Ft = t[183])),
    (0, xo.useLayoutEffect)(Pt, Ft));
  let It;
  t[184] !== r || t[185] !== m || t[186] !== Oe || t[187] !== De || t[188] !== q || t[189] !== Ee
    ? ((It = () => {
        if (!Ee) {
          (De.jump(1), Oe.jump(1));
          return;
        }
        (De.jump(0), Oe.jump(0));
        let e = m || !r ? { duration: 0 } : q,
          t = l(De, 1, e),
          n = l(Oe, 1, e);
        return () => {
          (t.stop(), n.stop());
        };
      }),
      (t[184] = r),
      (t[185] = m),
      (t[186] = Oe),
      (t[187] = De),
      (t[188] = q),
      (t[189] = Ee),
      (t[190] = It))
    : (It = t[190]);
  let Lt = (0, xo.useEffectEvent)(It),
    Rt;
  t[191] === Lt ? (Rt = t[192]) : ((Rt = () => Lt()), (t[191] = Lt), (t[192] = Rt));
  let zt;
  (t[193] !== r || t[194] !== m || t[195] !== Ee
    ? ((zt = [r, m, Ee]), (t[193] = r), (t[194] = m), (t[195] = Ee), (t[196] = zt))
    : (zt = t[196]),
    (0, xo.useLayoutEffect)(Rt, zt));
  let Bt = (o.left + o.width / 2 - w) / E,
    Vt;
  if (
    t[197] !== n ||
    t[198] !== r ||
    t[199] !== ae ||
    t[200] !== a ||
    t[201] !== c ||
    t[202] !== f.top ||
    t[203] !== G ||
    t[204] !== D ||
    t[205] !== j ||
    t[206] !== m ||
    t[207] !== h.hasDetachedActivity ||
    t[208] !== at ||
    t[209] !== rt ||
    t[210] !== we ||
    t[211] !== Se ||
    t[212] !== Le ||
    t[213] !== Xe ||
    t[214] !== Oe ||
    t[215] !== Ke ||
    t[216] !== Te ||
    t[217] !== De ||
    t[218] !== Qe ||
    t[219] !== Ae ||
    t[220] !== ge ||
    t[221] !== ue ||
    t[222] !== ce ||
    t[223] !== fe ||
    t[224] !== J ||
    t[225] !== me ||
    t[226] !== _e ||
    t[227] !== $e ||
    t[228] !== Re ||
    t[229] !== Je ||
    t[230] !== Ve ||
    t[231] !== Z ||
    t[232] !== ke ||
    t[233] !== ve ||
    t[234] !== H ||
    t[235] !== te ||
    t[236] !== qe ||
    t[237] !== Fe ||
    t[238] !== ye ||
    t[239] !== be ||
    t[240] !== N ||
    t[241] !== P ||
    t[242] !== q ||
    t[243] !== x ||
    t[244] !== Bt ||
    t[245] !== E
  ) {
    let e = {
      left: D,
      top: f.top,
      x: N,
      y: P,
      width: E,
      originX: Bt,
      originY: 0,
      scaleX: H,
      scaleY: te,
      "--quick-chat-activity-badge-digits": n,
      "--quick-chat-glass-spacing": $e,
      "--quick-chat-composer-left": ce,
      "--quick-chat-compact-control-step": 40,
      "--quick-chat-compact-control-size": 40,
      "--quick-chat-voice-background-size": Fe,
      "--quick-chat-badge-background-size": Le,
      "--quick-chat-compact-divider-padding": 10,
      "--quick-chat-compact-edge-padding": 10,
      "--quick-chat-compact-icon-size": 20,
      ...at,
    };
    ((Vt = a({
      group: {
        animate: { ...rt, ...j },
        style: e,
        transition:
          m || !r
            ? { duration: 0 }
            : {
                default: q,
                y: { damping: Ue.damping, mass: Ue.mass, stiffness: Ue.stiffness, type: `spring` },
                "--quick-chat-composer-height": c ? ae : G,
                "--quick-chat-composer-top": c ? ae : G,
                "--quick-chat-badge-left": h.hasDetachedActivity ? { duration: 0 } : q,
              },
      },
      stashedAttentionStyle: { left: ce, top: fe, x: x === `left` ? Je : `calc(-100% - ${To}px)`, y: qe },
      presentedComposerLeft: ce,
      presentedComposerWidth: J,
      presentedComposerHeight: ue,
      presentedComposerTop: fe,
      presentedComposerEdgeBleed: ge,
      presentedControlsTop: me,
      presentedForegroundOpacity: _e,
      presentedRestoreOpacity: ve,
      presentedVoiceLeft: ye,
      presentedVoiceWidth: be,
      presentedAudioControlWidth: Se,
      presentedAudioControlOpacity: we,
      presentedBadgeLeft: Te,
      presentedBadgeOpacity: De,
      presentedBadgeEntranceScale: Oe,
      presentedOrbScale: ke,
      presentedCompactProgress: Ae,
      presentedInputOpacity: Re,
      presentedOrbIconOpacity: Z,
      presentedBadgeIconOpacity: Ke,
      presentedBadgeDividerOpacity: Xe,
      presentedOrbIconFilter: Ve,
      presentedBadgePointerEvents: Qe,
    })),
      (t[197] = n),
      (t[198] = r),
      (t[199] = ae),
      (t[200] = a),
      (t[201] = c),
      (t[202] = f.top),
      (t[203] = G),
      (t[204] = D),
      (t[205] = j),
      (t[206] = m),
      (t[207] = h.hasDetachedActivity),
      (t[208] = at),
      (t[209] = rt),
      (t[210] = we),
      (t[211] = Se),
      (t[212] = Le),
      (t[213] = Xe),
      (t[214] = Oe),
      (t[215] = Ke),
      (t[216] = Te),
      (t[217] = De),
      (t[218] = Qe),
      (t[219] = Ae),
      (t[220] = ge),
      (t[221] = ue),
      (t[222] = ce),
      (t[223] = fe),
      (t[224] = J),
      (t[225] = me),
      (t[226] = _e),
      (t[227] = $e),
      (t[228] = Re),
      (t[229] = Je),
      (t[230] = Ve),
      (t[231] = Z),
      (t[232] = ke),
      (t[233] = ve),
      (t[234] = H),
      (t[235] = te),
      (t[236] = qe),
      (t[237] = Fe),
      (t[238] = ye),
      (t[239] = be),
      (t[240] = N),
      (t[241] = P),
      (t[242] = q),
      (t[243] = x),
      (t[244] = Bt),
      (t[245] = E),
      (t[246] = Vt));
  } else Vt = t[246];
  return Vt;
}
function ho(e) {
  return e + To;
}
function go(e) {
  return (e - Eo) / 2;
}
function _o(e) {
  return (0, bo.default)(e * 2 - 1, 0, 1);
}
function vo(e) {
  return (0, bo.default)(1 - e * 2, 0, 1);
}
var yo, bo, xo, So, Co, wo, To, Eo;
function Do() {
  return (Do = e(() => {
    ((yo = R()),
      qe(),
      ke(),
      Me(),
      (bo = t(ye(), 1)),
      Ge(),
      (xo = h()),
      Wn(),
      dn(),
      fi(),
      Ai(),
      Li(),
      Ar(),
      (So = 0.43),
      (Co = 4),
      (wo = 38),
      (To = 22),
      (Eo = 54));
  }))();
}
function Oo(e) {
  let t = (0, Lo.c)(257),
    r,
    i,
    o,
    c,
    l,
    u,
    d,
    f,
    h,
    g,
    _,
    v,
    y,
    b,
    S,
    C,
    T,
    E,
    D,
    O,
    k,
    A,
    M,
    N,
    P,
    F,
    I,
    L,
    R,
    z,
    V,
    U,
    te,
    ne,
    W,
    G,
    K,
    ie,
    ae,
    q,
    oe,
    J,
    se,
    ce,
    le,
    ue,
    de,
    fe,
    Y,
    pe,
    me,
    he,
    ge,
    _e,
    ye,
    xe,
    Se,
    Ce,
    Te;
  t[0] === e
    ? ((r = t[1]),
      (i = t[2]),
      (o = t[3]),
      (c = t[4]),
      (l = t[5]),
      (u = t[6]),
      (d = t[7]),
      (f = t[8]),
      (h = t[9]),
      (g = t[10]),
      (_ = t[11]),
      (v = t[12]),
      (y = t[13]),
      (b = t[14]),
      (S = t[15]),
      (C = t[16]),
      (T = t[17]),
      (E = t[18]),
      (D = t[19]),
      (O = t[20]),
      (k = t[21]),
      (A = t[22]),
      (M = t[23]),
      (N = t[24]),
      (P = t[25]),
      (F = t[26]),
      (I = t[27]),
      (L = t[28]),
      (R = t[29]),
      (z = t[30]),
      (V = t[31]),
      (U = t[32]),
      (te = t[33]),
      (ne = t[34]),
      (W = t[35]),
      (G = t[36]),
      (K = t[37]),
      (ie = t[38]),
      (ae = t[39]),
      (q = t[40]),
      (oe = t[41]),
      (J = t[42]),
      (se = t[43]),
      (ce = t[44]),
      (le = t[45]),
      (ue = t[46]),
      (de = t[47]),
      (fe = t[48]),
      (Y = t[49]),
      (pe = t[50]),
      (me = t[51]),
      (he = t[52]),
      (ge = t[53]),
      (_e = t[54]),
      (ye = t[55]),
      (xe = t[56]),
      (Se = t[57]),
      (Ce = t[58]),
      (Te = t[59]))
    : (({
        animatesPresentation: se,
        appshotCaptureResponse: r,
        appshotCaptureStartsCollapsed: fe,
        appshots: i,
        getAttachmentActions: g,
        fileAttachments: h,
        areActivityPillsVisible: o,
        areControlsVisible: Y,
        canStash: pe,
        canStartVoice: c,
        children: l,
        composerReplacement: u,
        draft: d,
        editorRef: f,
        replyTo: K,
        onRemoveReply: L,
        compositionDeferral: me,
        hasNotifications: _,
        isExpanded: he,
        onMenuAnchorChange: P,
        isAppshotCapturePending: ge,
        isSending: _e,
        isEditorActive: ye,
        focusRequested: ce,
        isMinimized: le,
        transcriptComposerProgress: Ce,
        transcriptAvatarOrigin: xe,
        transcriptBarOrigin: Se,
        transcriptNameOrigin: Te,
        isVoiceSelected: v,
        layout: y,
        notificationBadge: b,
        petAccessory: W,
        stashedAttentionPill: J,
        stashAppearance: ue,
        realtimeVoiceSurface: G,
        threadTarget: de,
        onCaretPointChange: S,
        onDragPointerCancel: T,
        onDragPointerDown: E,
        onDragPointerMove: D,
        onDragPointerUp: O,
        onDraftChange: C,
        onEditorExtraHeightChange: k,
        onReplyHeightChange: R,
        onFocusChange: A,
        onGeometryAnimationFrame: M,
        onLostDragPointerCapture: N,
        onOpen: F,
        onRemoveAppshots: I,
        onStartVoice: z,
        onSubmit: V,
        onToggleActivity: U,
        onVoiceSelectionChange: te,
        presentedComposerHeight: ae,
        orbitPreviewLayout: ne,
        presentedComposerTop: q,
        presentedExpansion: oe,
        ...ie
      } = e),
      (t[0] = e),
      (t[1] = r),
      (t[2] = i),
      (t[3] = o),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u),
      (t[7] = d),
      (t[8] = f),
      (t[9] = h),
      (t[10] = g),
      (t[11] = _),
      (t[12] = v),
      (t[13] = y),
      (t[14] = b),
      (t[15] = S),
      (t[16] = C),
      (t[17] = T),
      (t[18] = E),
      (t[19] = D),
      (t[20] = O),
      (t[21] = k),
      (t[22] = A),
      (t[23] = M),
      (t[24] = N),
      (t[25] = P),
      (t[26] = F),
      (t[27] = I),
      (t[28] = L),
      (t[29] = R),
      (t[30] = z),
      (t[31] = V),
      (t[32] = U),
      (t[33] = te),
      (t[34] = ne),
      (t[35] = W),
      (t[36] = G),
      (t[37] = K),
      (t[38] = ie),
      (t[39] = ae),
      (t[40] = q),
      (t[41] = oe),
      (t[42] = J),
      (t[43] = se),
      (t[44] = ce),
      (t[45] = le),
      (t[46] = ue),
      (t[47] = de),
      (t[48] = fe),
      (t[49] = Y),
      (t[50] = pe),
      (t[51] = me),
      (t[52] = he),
      (t[53] = ge),
      (t[54] = _e),
      (t[55] = ye),
      (t[56] = xe),
      (t[57] = Se),
      (t[58] = Ce),
      (t[59] = Te));
  let Ee = se === void 0 || se,
    Oe = fe !== void 0 && fe,
    ke = Y === void 0 || Y,
    Ae = pe !== void 0 && pe,
    je = me === void 0 ? null : me,
    Me = he === void 0 || he,
    X = ge !== void 0 && ge,
    Ne = _e !== void 0 && _e,
    Pe = ye !== void 0 && ye,
    Fe = ce !== void 0 && ce,
    Le = le !== void 0 && le,
    Z = ue === void 0 ? w : ue,
    Be = de === void 0 ? null : de,
    Ve = n(B),
    He = ie.isOrbitMode === !0,
    Ue = ie.isOrbitAvatarInHeader === !0,
    We = ie.morphsOrbitTranscriptDown === !0,
    Ge = Re(),
    Ke = Ue && We,
    qe;
  t[60] === Ce ? (qe = t[61]) : ((qe = () => Ce?.get() ?? 1), (t[60] = Ce), (t[61] = qe));
  let Je = s(qe),
    Ye;
  t[62] === Je ? (Ye = t[63]) : ((Ye = (e) => Je.on(`change`, e)), (t[62] = Je), (t[63] = Ye));
  let Xe = Ye,
    Ze;
  t[64] === Je ? (Ze = t[65]) : ((Ze = () => Je.get() <= 0), (t[64] = Je), (t[65] = Ze));
  let Qe = Ze,
    $e = (0, Ro.useSyncExternalStore)(Xe, Qe, Qe),
    tt = we(mt),
    nt = we(rr),
    rt = tt && !nt,
    it = we(ur) && ke && !Le,
    ot = we(dr),
    ct = it && (!He || ot),
    lt = (0, Ro.useRef)(null),
    ut = (0, Ro.useRef)(null),
    dt = (0, Ro.useRef)(null),
    ft = (0, Ro.useRef)(null),
    Q = f ?? ft,
    pt;
  t[66] === d
    ? (pt = t[67])
    : ((pt = () => {
        let e = Dn(d, {
          defaultTextKind: `prompt`,
          enableCodeBlocks: !1,
          enableRichText: !1,
          enableSelectedTextLinks: !1,
          enableSkillMentions: !0,
          enableSlashCommands: !1,
          enterBehavior: `enter`,
        });
        return ((e.view.dom.dataset.avatarOverlayCompositionAutofocus = `true`), e);
      }),
      (t[66] = d),
      (t[67] = pt));
  let [ht] = (0, Ro.useState)(pt),
    gt;
  (t[68] === ht
    ? (gt = t[69])
    : ((gt = () => {
        ht.view.isDestroyed || ht.destroy();
      }),
      (t[68] = ht),
      (t[69] = gt)),
    ln(gt, ht));
  let [_t, vt] = (0, Ro.useState)(0),
    yt = K != null,
    [bt, xt] = (0, Ro.useState)(null),
    [St, Ct] = (0, Ro.useState)(0),
    wt = (0, Ro.useRef)(null),
    Tt;
  t[70] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Tt = { distance: 0, startedAt: 0, lastAt: 0, triggered: !1 }), (t[70] = Tt))
    : (Tt = t[70]);
  let Et = (0, Ro.useRef)(Tt),
    kt = (0, Ro.useRef)(!1),
    At = (0, Ro.useRef)(!1),
    jt = (0, Ro.useRef)(!1),
    Mt = m(),
    Nt = He,
    It = we(et),
    Lt = !Nt && G?.phase === `starting`,
    Rt = Nt ? It !== `inactive` : G != null && G.phase !== `inactive`,
    zt = !!i?.length || X || h != null,
    Bt = r !== void 0,
    Vt = !!i?.length || h != null || (X && Bt),
    Ht = Oe && X && !Bt && !Vt && d.length === 0 && !yt,
    Ut = It === `starting`,
    Wt = W != null,
    Gt = Me && !Ht,
    Kt = Rt && !Lt,
    qt,
    Jt,
    Yt,
    Zt,
    Qt;
  if (
    t[71] !== je ||
    t[72] !== d ||
    t[73] !== St ||
    t[74] !== ct ||
    t[75] !== it ||
    t[76] !== _ ||
    t[77] !== Vt ||
    t[78] !== yt ||
    t[79] !== rt ||
    t[80] !== zt ||
    t[81] !== Pe ||
    t[82] !== Ue ||
    t[83] !== He ||
    t[84] !== y ||
    t[85] !== _t ||
    t[86] !== Z ||
    t[87] !== Ut ||
    t[88] !== Wt ||
    t[89] !== Gt ||
    t[90] !== Kt
  ) {
    let e = {
      isOrbitMode: He,
      isOrbitAvatarInHeader: Ue,
      hasUnreadOrbit: ct,
      isOrbitCallStarting: Ut,
      draft: d,
      compositionDeferral: je,
      hasSelectedOrb: rt,
      hasMessageNotification: it,
      editorExtraHeight: St,
      hasReply: yt,
      replyHeight: _t,
      hasAppshots: Vt,
      hasPetAccessory: Wt,
      hasNotifications: _,
      isEditorActive: Pe,
      isExpanded: Gt,
      isVoiceActive: Kt,
      layout: y,
      stashAppearance: Z,
    };
    Zt = Ni(e);
    let n = zt && !Vt ? { ...e, hasAppshots: !0, isExpanded: !0, isOrbitAvatarInHeader: He && rt } : e,
      r = Ni(n);
    if (
      (({ left: Yt } = Zt.bar), ({ target: Qt, hasDetachedActivity: Jt } = Zt), (qt = Mi(r)), He && rt && zt)
    ) {
      let e = lo(n);
      ((qt.left = e.composerLeft), (qt.top = e.composerTop));
    }
    ((t[71] = je),
      (t[72] = d),
      (t[73] = St),
      (t[74] = ct),
      (t[75] = it),
      (t[76] = _),
      (t[77] = Vt),
      (t[78] = yt),
      (t[79] = rt),
      (t[80] = zt),
      (t[81] = Pe),
      (t[82] = Ue),
      (t[83] = He),
      (t[84] = y),
      (t[85] = _t),
      (t[86] = Z),
      (t[87] = Ut),
      (t[88] = Wt),
      (t[89] = Gt),
      (t[90] = Kt),
      (t[91] = qt),
      (t[92] = Jt),
      (t[93] = Yt),
      (t[94] = Zt),
      (t[95] = Qt));
  } else ((qt = t[91]), (Jt = t[92]), (Yt = t[93]), (Zt = t[94]), (Qt = t[95]));
  let $t;
  t[96] !== _ || t[97] !== y || t[98] !== W
    ? (($t = ee(y, be(_), W != null)), (t[96] = _), (t[97] = y), (t[98] = W), (t[99] = $t))
    : ($t = t[99]);
  let en = $t,
    tn = G?.petControlsAppearance ?? ze,
    nn = Le ? b?.nativeTint : void 0,
    rn = Zt.state === `stashed`,
    an = u != null && !rn,
    on =
      y.quickChat?.stashedEdge ??
      y.quickChat?.nearestStashEdge ??
      (y.placement.endsWith(`start`) ? `left` : `right`),
    sn =
      y.visibleBounds.left - Yt + (on === `left` ? -Z.width - Z.offsetX : y.visibleBounds.width + Z.offsetX),
    cn = Qt.composerTop + (Qt.composerHeight - Z.height) / 2 + Z.offsetY,
    un;
  t[100] !== Z.height || t[101] !== Z.width || t[102] !== sn || t[103] !== cn
    ? ((un = { left: sn, top: cn, width: Z.width, height: Z.height }),
      (t[100] = Z.height),
      (t[101] = Z.width),
      (t[102] = sn),
      (t[103] = cn),
      (t[104] = un))
    : (un = t[104]);
  let dn = un,
    fn = d.length > 0,
    pn = Zt.state === `composing`,
    mn = rt && (pn || Zt.state === `expanded`),
    hn;
  t[105] !== ot || t[106] !== He || t[107] !== mn
    ? ((hn = `detached`),
      He && !ot && (hn = mn ? `standalone` : `bar`),
      (t[105] = ot),
      (t[106] = He),
      (t[107] = mn),
      (t[108] = hn))
    : (hn = t[108]);
  let gn = Zt.state === `voice`,
    _n = Zt.state === `expanded` || pn,
    vn = _n && (pn || Pe),
    yn = Ne && !fn && !_n,
    bn;
  t[109] !== Q.current || t[110] !== A || t[111] !== te
    ? ((bn = () => {
        ((kt.current = !1), te?.(!1), Q.current?.blur(), A?.(null));
      }),
      (t[109] = Q.current),
      (t[110] = A),
      (t[111] = te),
      (t[112] = bn))
    : (bn = t[112]);
  let xn = bn,
    Sn;
  t[113] !== xn || t[114] !== z
    ? ((Sn = () => {
        (xn(), z?.());
      }),
      (t[113] = xn),
      (t[114] = z),
      (t[115] = Sn))
    : (Sn = t[115]);
  let Cn = Sn,
    wn;
  t[116] !== v || t[117] !== V || t[118] !== K
    ? ((wn = (e) => {
        let t = e.trim().length > 0;
        if ((v || kt.current) && !t) {
          lt.current?.click();
          return;
        }
        if (!t) return;
        let n = ut.current,
          r = n?.getBoundingClientRect();
        if (n == null || r == null || r.width <= 0 || r.height <= 0) {
          V?.(e, void 0, K ?? void 0);
          return;
        }
        let i = n.querySelector(`[contenteditable="true"]`),
          a = i?.getBoundingClientRect();
        V?.(
          e,
          {
            left: window.screenX + r.left,
            top: window.screenY + r.top,
            width: r.width,
            height: r.height,
            zoom: r.width / n.offsetWidth,
            textOffsetX: a == null ? void 0 : a.left - r.left,
            textOffsetY: a == null ? void 0 : a.top - r.top,
            textFontWeight: i == null ? void 0 : Number(getComputedStyle(i).fontWeight),
            appshots: Array.from(n.querySelectorAll(`[data-avatar-overlay-quick-chat-appshot] img`), (e) => {
              let t = e.getBoundingClientRect();
              return {
                src: e.currentSrc,
                className: e.className,
                left: t.left - r.left,
                top: t.top - r.top,
                width: t.width,
                height: t.height,
              };
            }),
          },
          K ?? void 0,
        );
      }),
      (t[116] = v),
      (t[117] = V),
      (t[118] = K),
      (t[119] = wn))
    : (wn = t[119]);
  let Tn = wn,
    En;
  t[120] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((En = () => {
        jt.current = !1;
        let e = document.activeElement;
        e instanceof HTMLButtonElement && wt.current?.contains(e) && e.blur();
      }),
      (t[120] = En))
    : (En = t[120]);
  let On = (0, Ro.useEffectEvent)(En),
    kn;
  t[121] === On
    ? (kn = t[122])
    : ((kn = () => (
        window.addEventListener(`blur`, On),
        () => {
          (window.removeEventListener(`blur`, On), On());
        }
      )),
      (t[121] = On),
      (t[122] = kn));
  let An;
  (t[123] === Symbol.for(`react.memo_cache_sentinel`) ? ((An = []), (t[123] = An)) : (An = t[123]),
    (0, Ro.useEffect)(kn, An));
  let jn;
  t[124] !== Ae ||
  t[125] !== rn ||
  t[126] !== y.quickChat?.nearestStashEdge ||
  t[127] !== A ||
  t[128] !== W ||
  t[129] !== on
    ? ((jn = (e) => {
        let t =
          e.target instanceof Element
            ? e.target.closest(`[data-composer-attachments-scroll-container]`)
            : null;
        if (t != null && t.scrollWidth > t.clientWidth) return;
        let n = De.avatarOverlay;
        if (
          n == null ||
          !Ae ||
          W != null ||
          e.ctrlKey ||
          e.deltaMode !== WheelEvent.DOM_DELTA_PIXEL ||
          Math.abs(e.deltaX) < Math.abs(e.deltaY) * 2 ||
          e.deltaX === 0
        )
          return;
        e.preventDefault();
        let r = performance.now(),
          i = Et.current;
        if (
          ((r - i.lastAt > 180 ||
            (!i.triggered && (r - i.startedAt > 220 || Math.sign(i.distance) !== Math.sign(e.deltaX)))) &&
            ((i = { distance: 0, startedAt: r, lastAt: r, triggered: !1 }), (Et.current = i)),
          (i.lastAt = r),
          (i.distance += e.deltaX),
          !i.triggered && Math.abs(i.distance) >= 80)
        ) {
          i.triggered = !0;
          let e = i.distance > 0 ? `left` : `right`;
          if (rn) {
            e !== on && n.setQuickChatStashed(null);
            return;
          }
          let t = y.quickChat?.nearestStashEdge;
          if (t != null && e !== t) return;
          (A?.(null, !0), n.setQuickChatStashed(e));
        }
      }),
      (t[124] = Ae),
      (t[125] = rn),
      (t[126] = y.quickChat?.nearestStashEdge),
      (t[127] = A),
      (t[128] = W),
      (t[129] = on),
      (t[130] = jn))
    : (jn = t[130]);
  let Mn = (0, Ro.useEffectEvent)(jn),
    Nn;
  t[131] === Mn
    ? (Nn = t[132])
    : ((Nn = () => {
        let e = wt.current;
        if (e != null)
          return (e.addEventListener(`wheel`, Mn, { passive: !1 }), () => e.removeEventListener(`wheel`, Mn));
      }),
      (t[131] = Mn),
      (t[132] = Nn));
  let Pn;
  (t[133] === Symbol.for(`react.memo_cache_sentinel`) ? ((Pn = []), (t[133] = Pn)) : (Pn = t[133]),
    (0, Ro.useEffect)(Nn, Pn));
  let Fn = He && rt,
    In;
  t[134] === Fn ? (In = t[135]) : ((In = { isOrbitTranscript: Fn }), (t[134] = Fn), (t[135] = In));
  let Ln = Oe && X && Bt,
    Rn = typeof b?.content == `number` ? String(b.content).length : 1,
    zn = !!Mt,
    Bn;
  t[136] !== qt.left ||
  t[137] !== qt.top ||
  t[138] !== i ||
  t[139] !== o ||
  t[140] !== ke ||
  t[141] !== c ||
  t[142] !== l ||
  t[143] !== xn ||
  t[144] !== en ||
  t[145] !== ht ||
  t[146] !== u ||
  t[147] !== je ||
  t[148] !== d ||
  t[149] !== St ||
  t[150] !== Q ||
  t[151] !== Ke ||
  t[152] !== h ||
  t[153] !== Fe ||
  t[154] !== g ||
  t[155] !== Jt ||
  t[156] !== ct ||
  t[157] !== fn ||
  t[158] !== it ||
  t[159] !== _ ||
  t[160] !== yt ||
  t[161] !== rt ||
  t[162] !== zt ||
  t[163] !== yn ||
  t[164] !== Ge ||
  t[165] !== X ||
  t[166] !== pn ||
  t[167] !== Pe ||
  t[168] !== Me ||
  t[169] !== Le ||
  t[170] !== Ue ||
  t[171] !== He ||
  t[172] !== Ne ||
  t[173] !== rn ||
  t[174] !== $e ||
  t[175] !== Rt ||
  t[176] !== v ||
  t[177] !== Lt ||
  t[178] !== y ||
  t[179] !== bt ||
  t[180] !== nn ||
  t[181] !== We ||
  t[182] !== hn ||
  t[183] !== b ||
  t[184] !== S ||
  t[185] !== C ||
  t[186] !== T ||
  t[187] !== E ||
  t[188] !== D ||
  t[189] !== O ||
  t[190] !== k ||
  t[191] !== A ||
  t[192] !== M ||
  t[193] !== N ||
  t[194] !== P ||
  t[195] !== F ||
  t[196] !== I ||
  t[197] !== L ||
  t[198] !== R ||
  t[199] !== U ||
  t[200] !== te ||
  t[201] !== It ||
  t[202] !== ne ||
  t[203] !== W ||
  t[204] !== Mt ||
  t[205] !== Zt.bar ||
  t[206] !== Zt.growsUp ||
  t[207] !== Zt.notificationLeadingControlsWidth ||
  t[208] !== Zt.state ||
  t[209] !== G ||
  t[210] !== _t ||
  t[211] !== K ||
  t[212] !== Ve ||
  t[213] !== gn ||
  t[214] !== vn ||
  t[215] !== an ||
  t[216] !== _n ||
  t[217] !== mn ||
  t[218] !== Cn ||
  t[219] !== Z ||
  t[220] !== on ||
  t[221] !== dn ||
  t[222] !== J ||
  t[223] !== Tn ||
  t[224] !== Qt.badgeLeft ||
  t[225] !== Qt.compactProgress ||
  t[226] !== Qt.composerHeight ||
  t[227] !== Qt.composerLeft ||
  t[228] !== Qt.composerTop ||
  t[229] !== Qt.composerWidth ||
  t[230] !== Be ||
  t[231] !== xe ||
  t[232] !== Se ||
  t[233] !== Je ||
  t[234] !== Te ||
  t[235] !== Nt
    ? ((Bn = (e) => {
        let {
            group: t,
            stashedAttentionStyle: n,
            presentedComposerLeft: r,
            presentedComposerWidth: s,
            presentedComposerHeight: f,
            presentedComposerTop: m,
            presentedComposerEdgeBleed: w,
            presentedControlsTop: z,
            presentedForegroundOpacity: ee,
            presentedRestoreOpacity: B,
            presentedVoiceLeft: V,
            presentedVoiceWidth: ie,
            presentedAudioControlWidth: ae,
            presentedAudioControlOpacity: q,
            presentedBadgeLeft: oe,
            presentedBadgeOpacity: se,
            presentedBadgeEntranceScale: ce,
            presentedOrbScale: le,
            presentedCompactProgress: ue,
            presentedInputOpacity: de,
            presentedOrbIconOpacity: fe,
            presentedBadgeIconOpacity: Y,
            presentedBadgeDividerOpacity: pe,
            presentedOrbIconFilter: me,
            presentedBadgePointerEvents: he,
          } = e,
          ge = (e) => {
            if (h == null && e.length === i?.length && !X) {
              let { target: e } = Ni({
                isOrbitMode: He,
                hasUnreadOrbit: ct,
                isOrbitCallStarting: It === `starting`,
                draft: d,
                compositionDeferral: je,
                hasSelectedOrb: rt,
                hasMessageNotification: it,
                editorExtraHeight: St,
                hasReply: yt,
                replyHeight: _t,
                hasNotifications: _,
                hasPetAccessory: W != null,
                isEditorActive: Pe,
                isExpanded: Me,
                isVoiceActive: Rt && !Lt,
                layout: y,
                stashAppearance: Z,
              });
              (f.jump(e.composerHeight), m.jump(e.composerTop));
            }
            I?.(e);
          };
        return (0, $.jsxs)($.Fragment, {
          children: [
            W,
            W != null && ke
              ? (0, $.jsx)(`div`, {
                  "aria-hidden": `true`,
                  className: `pointer-events-none absolute`,
                  "data-avatar-overlay-proximity-region": `quick-chat`,
                  style: en,
                })
              : null,
            (0, $.jsxs)(x.div, {
              ref: (e) => {
                ((wt.current = e), P?.(e));
              },
              ...t,
              className: j(
                `absolute z-20 h-10`,
                Di.controls,
                !Jt && !Ke && Di.barMaterial,
                !ke && `invisible`,
              ),
              "aria-hidden": Le || !ke || void 0,
              inert: Le || !ke,
              "data-quick-chat-presentation": Le ? `minimized` : Zt.state,
              "data-quick-chat-glass-group": `true`,
              "data-quick-chat-typing": pn || void 0,
              initial: !1,
              role: `group`,
              onBlurCapture: (e) => {
                let t = jt.current;
                ((jt.current = !1),
                  !(
                    Q.current?.isFilePickerOpen() ||
                    (e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)) ||
                    (e.relatedTarget instanceof Element &&
                      e.relatedTarget.closest(`[data-avatar-overlay-orbit-transcript]`) != null) ||
                    (e.relatedTarget == null && t)
                  ) && (A?.(null, At.current), (At.current = !1), (kt.current = !1), te?.(!1)));
              },
              onFocusCapture: (e) => {
                !rn &&
                  _n &&
                  !e.target.hasAttribute(`data-quick-chat-return-to-voice`) &&
                  A?.(
                    e.target instanceof HTMLElement &&
                      (e.target.dataset.avatarOverlayCompositionAutofocus === `true` ||
                        e.target.closest(`[data-quick-chat-composer-action]`) != null)
                      ? `editor`
                      : `controls`,
                  );
              },
              onKeyDownCapture: (e) => {
                if (e.target instanceof Node && ut.current?.contains(e.target) && Zr(Ve, e.nativeEvent)) {
                  (e.preventDefault(), e.stopPropagation());
                  return;
                }
                if (
                  ((jt.current = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey),
                  !(
                    e.key !== `Escape` ||
                    e.defaultPrevented ||
                    e.nativeEvent.isComposing ||
                    Q.current?.prepareEscape() === !1
                  ))
                ) {
                  if ((e.preventDefault(), yt && L != null)) {
                    (L(), Q.current?.focus());
                    return;
                  }
                  (d.trim().length === 0 && !X && i?.length && I != null && ge(i),
                    (At.current = !0),
                    e.target instanceof HTMLElement && e.target.blur());
                }
              },
              onKeyUpCapture: () => {
                jt.current = !1;
              },
              onPointerDownCapture: () => {
                jt.current = !1;
              },
              onKeyDown: (e) => {
                if (
                  !e.defaultPrevented &&
                  (e.key === `ArrowLeft` || e.key === `ArrowRight`) &&
                  e.target instanceof HTMLButtonElement &&
                  e.target.hasAttribute(`data-quick-chat-control`)
                ) {
                  let t = Array.from(
                      e.currentTarget.querySelectorAll(
                        `[data-avatar-overlay-composition-autofocus], button[data-quick-chat-control]`,
                      ),
                    )
                      .filter(Fo)
                      .sort(Po),
                    n = t[t.indexOf(e.target) + (e.key === `ArrowRight` ? 1 : -1)];
                  if (n != null) {
                    e.preventDefault();
                    let t = _n && n === lt.current;
                    ((kt.current = t),
                      te?.(t),
                      n.dataset.avatarOverlayCompositionAutofocus === `true`
                        ? Q.current?.focus()
                        : n.focus());
                  }
                }
              },
              onUpdate: () => {
                (M?.(), p.postRender(() => Q.current?.updateCaretPoint()));
              },
              children: [
                (0, $.jsxs)(`div`, {
                  className: j(`absolute inset-0`, Jt && Di.barMaterial),
                  children: [
                    (0, $.jsx)(Pt, {
                      "aria-hidden": `true`,
                      className: `pointer-events-none absolute`,
                      hidden: !rn,
                      nativeSurfaceId: `quick-chat-stash-extension`,
                      style: dn,
                      variant: `quick-chat-stash-extension`,
                    }),
                    rn && J != null
                      ? (0, $.jsx)(x.div, { className: `absolute z-30`, style: n, children: J })
                      : null,
                    y.quickChat?.hasOrbPicker && mn && !Ue && !Le && ke
                      ? (0, $.jsx)(x.div, {
                          className: `absolute top-0 z-10 flex h-10 w-8 items-center justify-center`,
                          "data-avatar-overlay-hit-region": `selected-orb`,
                          style: {
                            left: `calc(var(--quick-chat-composer-left) * 1px - 40px)`,
                            top: z,
                            scale: le,
                            opacity: ee,
                          },
                          onLostPointerCapture: N,
                          onPointerCancel: T,
                          onPointerDown: E,
                          onPointerMove: D,
                          onPointerUp: O,
                          children: (0, $.jsx)(`button`, {
                            "aria-label": Ge.formatMessage({
                              id: `avatarOverlay.quickChat.closeTranscript`,
                              defaultMessage: `Close transcript`,
                              description: `Accessible label for the selected dot button that collapses Mini and closes its conversation transcript`,
                            }),
                            className: `flex size-full cursor-interaction items-center justify-center select-none focus-visible:outline-none`,
                            type: `button`,
                            onClick: () => {
                              (Q.current?.blur(), A?.(null, !0));
                            },
                            children: (0, $.jsx)(Gi, { artworkSize: 32 }),
                          }),
                        })
                      : null,
                    (0, $.jsxs)(
                      x.form,
                      {
                        ref: (e) => (
                          (ut.current = e),
                          () => {
                            if (!Ke && Se != null) {
                              let t = e
                                ?.querySelector(`[data-avatar-overlay-native-surface-id="composer"]`)
                                ?.getBoundingClientRect();
                              t != null &&
                                (Se.current = {
                                  left: t.left + window.screenX,
                                  top: t.top + window.screenY,
                                  width: t.width,
                                  height: t.height,
                                });
                            }
                            ((ut.current = null), De.avatarOverlay?.setQuickChatComposerFocused(!1));
                          }
                        ),
                        className: `absolute top-0 left-0 min-w-0 cursor-grab active:cursor-grabbing`,
                        "aria-hidden": $e || void 0,
                        inert: $e,
                        style: { left: Ke ? Qt.composerLeft : r, top: m, width: Ke ? Qt.composerWidth : s },
                        onDragOverCapture: (e) => {
                          g != null && Ft(e.dataTransfer) && e.preventDefault();
                        },
                        onDropCapture: (e) => {
                          if (g == null) return;
                          let { imageFiles: t, otherFiles: n } = st(e.dataTransfer);
                          if (t.length === 0 && n.length === 0) return;
                          (e.preventDefault(), e.stopPropagation());
                          let r = g(),
                            i = t.length === 0 || r.addImages(t, `drop`);
                          n.length > 0 && i && r.addFileMentionsFromFiles(n, e.dataTransfer);
                        },
                        onLostPointerCapture: N,
                        onFocusCapture: No,
                        onBlurCapture: Mo,
                        onPointerCancel: T,
                        onPointerDown: E,
                        onPointerMove: D,
                        onPointerUp: O,
                        onSubmit: (e) => {
                          (e.preventDefault(), !an && Q.current?.submit());
                        },
                        children: [
                          (0, $.jsx)(`div`, {
                            ref: xt,
                            className: `contents no-drag`,
                            onPointerDown: jo,
                            children: (0, $.jsx)(`div`, {
                              className: `absolute bottom-full left-0 w-full`,
                              "data-above-composer-portal": !0,
                            }),
                          }),
                          (0, $.jsxs)(Bo, {
                            avatarRef: dt,
                            avatarOrigin: xe,
                            origin: Te,
                            morphFromName: We && !Ke,
                            className: j(`relative w-full overflow-clip`, Gn.nativeTint),
                            "data-avatar-overlay-native-tint": nn,
                            "data-avatar-overlay-quick-chat-target-left": qt.left,
                            "data-avatar-overlay-quick-chat-target-top": qt.top,
                            "data-avatar-overlay-quick-chat-actions": vn || void 0,
                            "data-avatar-overlay-quick-chat-icon-only": gn || void 0,
                            "data-avatar-overlay-quick-chat-replacement": an || void 0,
                            "data-avatar-overlay-quick-chat-collapsed": Zt.state === `collapsed` || void 0,
                            "data-avatar-overlay-hit-region": `notification-composer`,
                            nativeSurfaceId: `composer`,
                            style: { opacity: Je },
                            variant: rn ? `quick-chat-stash` : `quick-chat`,
                            children: [
                              an
                                ? (0, $.jsx)(Io, {
                                    onExternalExtraHeightChange: k,
                                    onExtraHeightChange: Ct,
                                    children: u,
                                  })
                                : null,
                              (0, $.jsxs)(x.div, {
                                "aria-hidden": rn || void 0,
                                hidden: an,
                                className: j(
                                  `flex min-w-0 flex-1`,
                                  rn ? `items-center` : `h-full flex-col items-stretch`,
                                ),
                                "data-avatar-overlay-foreground": !0,
                                inert: rn,
                                style: {
                                  opacity: ee,
                                  visibility: Ne && !fn && !zt && !yt ? `hidden` : void 0,
                                },
                                children: [
                                  (0, $.jsx)(re, {
                                    custom: Ne,
                                    initial: !1,
                                    children: zt
                                      ? (0, $.jsxs)(
                                          x.div,
                                          {
                                            "data-composer-attachments-scroll-container": !0,
                                            animate: { opacity: 1 },
                                            className: j(
                                              `hide-scrollbar absolute top-0 right-0 left-0 box-content flex h-18 min-w-0 items-start gap-2 overflow-x-auto overflow-y-hidden`,
                                              at.QuickChatAttachmentRow,
                                              !_n && `invisible`,
                                            ),
                                            exit: `exit`,
                                            hidden: !_n && !X,
                                            initial: !1,
                                            variants: {
                                              exit: (e) => ({
                                                opacity: 0,
                                                pointerEvents: `none`,
                                                transition: e || Mt ? { duration: 0 } : Kn,
                                              }),
                                            },
                                            transition: Mt ? { duration: 0 } : Kn,
                                            children: [
                                              h,
                                              i?.map((e) => {
                                                let t = e.transitionSnapshotDataUrl?.length
                                                    ? e.transitionSnapshotDataUrl
                                                    : null,
                                                  n = t ?? e.imageDataUrl ?? e.imagePath;
                                                return (0, $.jsxs)(
                                                  `span`,
                                                  {
                                                    className: `group/appshot relative h-18 w-24 shrink-0`,
                                                    "data-avatar-overlay-quick-chat-appshot": !0,
                                                    children: [
                                                      n == null
                                                        ? null
                                                        : (0, $.jsx)(`img`, {
                                                            alt: e.appName,
                                                            className: j(
                                                              `size-full object-contain`,
                                                              t == null &&
                                                                `composer-attachment-surface rounded-lg border border-strong`,
                                                            ),
                                                            draggable: !1,
                                                            src: n,
                                                          }),
                                                      I && !X
                                                        ? (0, $.jsx)(Ot, {
                                                            className: `pointer-events-none top-1 right-1 opacity-0 group-hover/appshot:pointer-events-auto group-hover/appshot:opacity-100 focus-visible:pointer-events-auto focus-visible:opacity-100`,
                                                            ariaLabel: Ge.formatMessage(
                                                              {
                                                                id: `appshotAttachment.removeAriaLabel`,
                                                                defaultMessage: `Remove {title}`,
                                                                description: `Aria label for the remove appshot attachment button`,
                                                              },
                                                              { title: e.appName },
                                                            ),
                                                            onRemove: () => ge([e]),
                                                          })
                                                        : null,
                                                    ],
                                                  },
                                                  `${e.bundleIdentifier}-${e.imageName ?? n}`,
                                                );
                                              }),
                                              X
                                                ? (0, $.jsx)(`span`, {
                                                    "aria-hidden": `true`,
                                                    className: `pointer-events-none invisible h-18 w-24 shrink-0 rounded-lg`,
                                                    "data-avatar-overlay-quick-chat-appshot-destination": !0,
                                                  })
                                                : null,
                                            ],
                                          },
                                          `appshots`,
                                        )
                                      : null,
                                  }),
                                  K == null
                                    ? null
                                    : (0, $.jsx)(`div`, {
                                        className: `relative mt-auto w-full shrink-0 overflow-hidden`,
                                        style: {
                                          height: `max(0px, calc(var(--quick-chat-composer-height) * 1px - ${Qt.composerHeight - _t}px))`,
                                        },
                                        hidden: !_n,
                                        onPointerDown: Ao,
                                        children: (0, $.jsx)(`div`, {
                                          ref: (e) => {
                                            if (e != null)
                                              return Xt({
                                                axis: `height`,
                                                target: e,
                                                onChange: (e) => {
                                                  let { height: t } = e;
                                                  (vt(t), R?.(t));
                                                },
                                              });
                                          },
                                          className: `absolute inset-x-0 bottom-0 min-w-0 pb-2`,
                                          children: (0, $.jsx)(_r, {
                                            reply: K,
                                            onRemove:
                                              L == null
                                                ? void 0
                                                : () => {
                                                    (L(), Q.current?.focus());
                                                  },
                                          }),
                                        }),
                                      }),
                                  (0, $.jsxs)(`div`, {
                                    className: j(
                                      `relative flex w-full min-w-0 items-center`,
                                      !rn && pn && `mt-auto min-h-6 shrink-0`,
                                      !rn &&
                                        !vn &&
                                        (zt
                                          ? `mt-auto mb-1 min-h-5 shrink-0 translate-y-px`
                                          : `my-auto min-h-5 shrink-0`),
                                      gn ? `justify-center` : `gap-2`,
                                    ),
                                    children: [
                                      !_n || Qt.compactProgress === 1
                                        ? (0, $.jsx)(`button`, {
                                            "aria-label": Ge.formatMessage(zo.startNewChat),
                                            className: `flex shrink-0 cursor-interaction items-center justify-center text-default`,
                                            "data-quick-chat-control": gn ? `surface` : ``,
                                            type: `button`,
                                            onClick: () => {
                                              (F?.(), A?.(`editor`), Q.current?.focus());
                                            },
                                            children: (0, $.jsx)(jr, {
                                              ref: dt,
                                              className: yn ? `invisible` : void 0,
                                              origin: xe,
                                              placement: `bar`,
                                              animatesFromBar: We,
                                              children: y.quickChat?.hasOrbPicker
                                                ? (0, $.jsx)(Gi, {})
                                                : (0, $.jsx)(Ie, {}),
                                            }),
                                          })
                                        : null,
                                      (0, $.jsx)(x.span, {
                                        "aria-hidden": `true`,
                                        className: j(
                                          `pointer-events-none absolute h-5 w-px bg-border`,
                                          Di.quickChatCompactFirstDivider,
                                        ),
                                        "data-quick-chat-divider": `compact`,
                                        style: { opacity: ue, visibility: yn ? `hidden` : void 0 },
                                      }),
                                      _ && !Jt
                                        ? (0, $.jsx)(x.span, {
                                            "aria-hidden": `true`,
                                            className: j(
                                              `pointer-events-none absolute h-5 w-px bg-border`,
                                              Di.quickChatCompactSecondDivider,
                                            ),
                                            "data-quick-chat-divider": `badge`,
                                            style: { opacity: pe, visibility: yn ? `hidden` : void 0 },
                                          })
                                        : null,
                                      (0, $.jsx)(Sa, {
                                        ref: Q,
                                        autoFocus: Pe && !$e,
                                        focusRequested: Fe,
                                        composerController: ht,
                                        getAttachmentActions: g,
                                        canStartVoice: c,
                                        draft: d,
                                        hidden: yn || an,
                                        isExpanded: _n,
                                        isSending: Ne,
                                        showsActions: vn,
                                        menuContainer: bt,
                                        menuPlacement: Zt.growsUp ? `top` : `bottom`,
                                        opacity: de,
                                        threadTarget: Be,
                                        onCaretPointChange: S,
                                        onDraftChange: C,
                                        onExtraHeightChange: (e) => {
                                          an || (Ct(e), k?.(e));
                                        },
                                        onRequestFocus: () => A?.(`editor`),
                                        onSubmit: Tn,
                                        onVoiceSelectionChange: (e) => {
                                          ((kt.current = e), te?.(e), e && lt.current?.focus());
                                        },
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(x.button, {
                                "aria-label": Ge.formatMessage(zo.restore),
                                "aria-hidden": !rn || void 0,
                                className: `focus-visible:ring-primary-outline absolute inset-0 flex size-full cursor-interaction items-center justify-center text-default select-none focus-visible:ring-2 focus-visible:outline-none`,
                                "data-avatar-overlay-foreground": !0,
                                "data-avatar-overlay-hit-region": `quick-chat-stash`,
                                inert: !rn,
                                style: {
                                  opacity: B,
                                  paddingLeft: on === `left` ? w : 0,
                                  paddingRight: on === `right` ? w : 0,
                                },
                                type: `button`,
                                onClick: ko,
                                children: [
                                  Lt ? (0, $.jsx)(Ra, { reduceMotion: !!Mt }) : null,
                                  Rt && !Lt && G != null
                                    ? (0, $.jsx)(`span`, {
                                        className: `pointer-events-none relative size-5 shrink-0 overflow-hidden rounded-full`,
                                        children: (0, $.jsx)(Dt, {
                                          glowEnabled: !1,
                                          placement: `center`,
                                          phase: G.phase,
                                          voiceActivity: G.activity,
                                        }),
                                      })
                                    : null,
                                  Rt
                                    ? null
                                    : (0, $.jsx)(a, {
                                        className: on === `left` ? `-rotate-90` : `rotate-90`,
                                      }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      Ke ? `transcript-composer` : `bar-composer`,
                    ),
                    (0, $.jsx)(x.div, {
                      animate: { opacity: +!Ue },
                      initial: !1,
                      transition: We && !Ue && !Mt ? kr(!1, !0) : { duration: 0 },
                      "aria-hidden": pn || rn || Ue || void 0,
                      className: j(`absolute top-0`, Di.orb, Ue && `invisible`),
                      inert: pn || rn || Ue,
                      style: { left: V, top: z, scale: le, width: ie },
                      onLostPointerCapture: N,
                      onPointerCancel: T,
                      onPointerDown: E,
                      onPointerMove: D,
                      onPointerUp: O,
                      children: (0, $.jsx)(Pt, {
                        className: Gn.nativeTint,
                        "data-avatar-overlay-quick-chat-resizable-background":
                          (!gn && !(Nt && It !== `inactive`) && !rn) || void 0,
                        "data-avatar-overlay-hit-region": `realtime-voice`,
                        "data-avatar-overlay-native-tint": nn,
                        nativeSurfaceId: `voice-controls`,
                        variant: `quick-chat-voice`,
                        children: (0, $.jsxs)(x.div, {
                          className: `size-full`,
                          "data-avatar-overlay-foreground": !0,
                          style: { opacity: ee },
                          children: [
                            He &&
                              (0, $.jsx)(Ir, {
                                ref: lt,
                                iconStyle: { filter: me, opacity: fe },
                                isSelected: v,
                                onActivate: xn,
                              }),
                            !Nt &&
                              (Rt && !Lt && G != null
                                ? (0, $.jsx)($a, {
                                    audioControlOpacity: q,
                                    audioControlWidth: ae,
                                    reduceMotion: !!Mt,
                                    showsAudioControls: gn,
                                    voice: G,
                                    onReturnToVoiceControls: () => {
                                      (C?.(``),
                                        I?.(i ?? [], `voice-return`),
                                        L?.(),
                                        Q.current?.blur(),
                                        A?.(null));
                                    },
                                  })
                                : (0, $.jsx)(`button`, {
                                    ref: lt,
                                    "aria-label": Ge.formatMessage(Lt ? zo.stopVoice : zo.startVoice),
                                    "aria-busy": Lt || void 0,
                                    "aria-pressed": v,
                                    className: `flex size-full cursor-interaction items-center justify-center rounded-full text-default`,
                                    "data-quick-chat-control": `surface`,
                                    disabled: Lt ? G?.onStop == null : !c,
                                    type: `button`,
                                    onClick: () => {
                                      if (Lt) {
                                        G?.onStop?.();
                                        return;
                                      }
                                      Cn();
                                    },
                                    children: (0, $.jsx)(x.span, {
                                      className: `flex items-center justify-center`,
                                      style: { filter: me, opacity: fe },
                                      children: Lt
                                        ? (0, $.jsx)(Ra, { reduceMotion: !!Mt })
                                        : (0, $.jsx)(ve, {}),
                                    }),
                                  })),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                _
                  ? (0, $.jsx)(x.div, {
                      "aria-hidden": (!Jt && pn) || rn || void 0,
                      className: j(`absolute top-0`, Jt ? Di.barMaterial : Di.orb),
                      inert: (!Jt && pn) || rn,
                      style: {
                        left: Jt ? Qt.badgeLeft : oe,
                        top: Jt && !rn ? Qt.composerTop + Qt.composerHeight - 40 : z,
                        opacity: Jt ? se : void 0,
                        pointerEvents: he,
                        scale: Jt && !rn ? ce : le,
                      },
                      onLostPointerCapture: N,
                      onPointerCancel: T,
                      onPointerDown: E,
                      onPointerMove: D,
                      onPointerUp: O,
                      children: (0, $.jsx)(Pt, {
                        className: Gn.nativeTint,
                        "data-avatar-overlay-quick-chat-resizable-background": (!Jt && !gn && !rn) || void 0,
                        "data-avatar-overlay-hit-region": `mascot-badge`,
                        "data-avatar-overlay-native-tint": pn ? void 0 : nn,
                        nativeSurfaceId: `mascot-badge`,
                        variant: `quick-chat-orb`,
                        children: (0, $.jsx)(`button`, {
                          "aria-label":
                            b?.ariaLabel ?? Ge.formatMessage(o ? zo.hideActivity : zo.showActivity),
                          className: `flex size-full cursor-interaction items-center justify-center rounded-full text-default select-none`,
                          "data-avatar-overlay-foreground": !0,
                          "data-quick-chat-control": `surface`,
                          type: `button`,
                          onClick: b?.onClick ?? U,
                          children: (0, $.jsx)(x.span, {
                            "aria-hidden": `true`,
                            className: j(
                              `relative flex items-center justify-center text-[8px] font-medium tabular-nums`,
                              Di.activityBadgeContainer,
                            ),
                            style: { filter: Jt ? void 0 : me, opacity: Y },
                            children:
                              o && !Jt
                                ? (0, $.jsx)(a, {
                                    className: y.placement.startsWith(`top`)
                                      ? `translate-y-px rotate-180`
                                      : `-translate-y-px`,
                                  })
                                : (0, $.jsxs)($.Fragment, {
                                    children: [
                                      (0, $.jsx)(H, { className: j(`text-default`, Di.activityBell) }),
                                      b != null && !b.isIconOnly
                                        ? (0, $.jsx)(Vi, { nativeTint: b.nativeTint, children: b.content })
                                        : null,
                                    ],
                                  }),
                          }),
                        }),
                      }),
                    })
                  : null,
                ke && !Le && !rn
                  ? (0, $.jsx)($i, {
                      onOpen: () => {
                        (te?.(!1), F?.(), A?.(`editor`), Q.current?.focus());
                      },
                      bar: Zt.bar,
                      previewLayout: ne,
                      anchor: hn,
                      leadingControlsWidth: Zt.notificationLeadingControlsWidth,
                      placement: !He && (W != null || y.placement.startsWith(`bottom`)) ? `below` : `above`,
                      workArea: y.quickChat?.workArea ?? y.visibleBounds,
                    })
                  : null,
                (0, $.jsx)(`div`, { className: rn ? `invisible` : void 0, inert: rn, children: l }),
              ],
            }),
          ],
        });
      }),
      (t[136] = qt.left),
      (t[137] = qt.top),
      (t[138] = i),
      (t[139] = o),
      (t[140] = ke),
      (t[141] = c),
      (t[142] = l),
      (t[143] = xn),
      (t[144] = en),
      (t[145] = ht),
      (t[146] = u),
      (t[147] = je),
      (t[148] = d),
      (t[149] = St),
      (t[150] = Q),
      (t[151] = Ke),
      (t[152] = h),
      (t[153] = Fe),
      (t[154] = g),
      (t[155] = Jt),
      (t[156] = ct),
      (t[157] = fn),
      (t[158] = it),
      (t[159] = _),
      (t[160] = yt),
      (t[161] = rt),
      (t[162] = zt),
      (t[163] = yn),
      (t[164] = Ge),
      (t[165] = X),
      (t[166] = pn),
      (t[167] = Pe),
      (t[168] = Me),
      (t[169] = Le),
      (t[170] = Ue),
      (t[171] = He),
      (t[172] = Ne),
      (t[173] = rn),
      (t[174] = $e),
      (t[175] = Rt),
      (t[176] = v),
      (t[177] = Lt),
      (t[178] = y),
      (t[179] = bt),
      (t[180] = nn),
      (t[181] = We),
      (t[182] = hn),
      (t[183] = b),
      (t[184] = S),
      (t[185] = C),
      (t[186] = T),
      (t[187] = E),
      (t[188] = D),
      (t[189] = O),
      (t[190] = k),
      (t[191] = A),
      (t[192] = M),
      (t[193] = N),
      (t[194] = P),
      (t[195] = F),
      (t[196] = I),
      (t[197] = L),
      (t[198] = R),
      (t[199] = U),
      (t[200] = te),
      (t[201] = It),
      (t[202] = ne),
      (t[203] = W),
      (t[204] = Mt),
      (t[205] = Zt.bar),
      (t[206] = Zt.growsUp),
      (t[207] = Zt.notificationLeadingControlsWidth),
      (t[208] = Zt.state),
      (t[209] = G),
      (t[210] = _t),
      (t[211] = K),
      (t[212] = Ve),
      (t[213] = gn),
      (t[214] = vn),
      (t[215] = an),
      (t[216] = _n),
      (t[217] = mn),
      (t[218] = Cn),
      (t[219] = Z),
      (t[220] = on),
      (t[221] = dn),
      (t[222] = J),
      (t[223] = Tn),
      (t[224] = Qt.badgeLeft),
      (t[225] = Qt.compactProgress),
      (t[226] = Qt.composerHeight),
      (t[227] = Qt.composerLeft),
      (t[228] = Qt.composerTop),
      (t[229] = Qt.composerWidth),
      (t[230] = Be),
      (t[231] = xe),
      (t[232] = Se),
      (t[233] = Je),
      (t[234] = Te),
      (t[235] = Nt),
      (t[236] = Bn))
    : (Bn = t[236]);
  let Vn;
  return (
    t[237] !== Ee ||
    t[238] !== r ||
    t[239] !== en ||
    t[240] !== Ke ||
    t[241] !== Vt ||
    t[242] !== Le ||
    t[243] !== y.mascot ||
    t[244] !== tn ||
    t[245] !== Zt ||
    t[246] !== ae ||
    t[247] !== q ||
    t[248] !== oe ||
    t[249] !== Z ||
    t[250] !== on ||
    t[251] !== In ||
    t[252] !== Ln ||
    t[253] !== Rn ||
    t[254] !== zn ||
    t[255] !== Bn
      ? ((Vn = (0, $.jsx)(mo, {
          isTranscriptComposer: Ke,
          ...In,
          animatesPresentation: Ee,
          appshotCaptureResponse: r,
          usesAppshotHandoff: Ln,
          hasPresentedAppshot: Vt,
          isMinimized: Le,
          presentation: Zt,
          compact: en,
          mascot: y.mascot,
          petControlsAppearance: tn,
          stashAppearance: Z,
          stashEdge: on,
          activityBadgeDigits: Rn,
          prefersReducedMotion: zn,
          presentedComposerHeight: ae,
          presentedComposerTop: q,
          presentedExpansion: oe,
          children: Bn,
        })),
        (t[237] = Ee),
        (t[238] = r),
        (t[239] = en),
        (t[240] = Ke),
        (t[241] = Vt),
        (t[242] = Le),
        (t[243] = y.mascot),
        (t[244] = tn),
        (t[245] = Zt),
        (t[246] = ae),
        (t[247] = q),
        (t[248] = oe),
        (t[249] = Z),
        (t[250] = on),
        (t[251] = In),
        (t[252] = Ln),
        (t[253] = Rn),
        (t[254] = zn),
        (t[255] = Bn),
        (t[256] = Vn))
      : (Vn = t[256]),
    Vn
  );
}
function ko() {
  De.avatarOverlay?.setQuickChatStashed(null);
}
function Ao(e) {
  return e.stopPropagation();
}
function jo(e) {
  return e.stopPropagation();
}
function Mo(e) {
  (e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)) ||
    De.avatarOverlay?.setQuickChatComposerFocused(!1);
}
function No(e) {
  De.avatarOverlay?.setQuickChatComposerFocused(
    e.target instanceof Node && e.currentTarget.contains(e.target),
  );
}
function Po(e, t) {
  return e.getBoundingClientRect().left - t.getBoundingClientRect().left;
}
function Fo(e) {
  return !e.matches(`:disabled`) && e.tabIndex >= 0 && e.closest(`[inert]`) == null;
}
function Io(e) {
  let t = (0, Lo.c)(6),
    { children: n, onExternalExtraHeightChange: r, onExtraHeightChange: i } = e,
    a = (0, Ro.useRef)(null),
    o,
    s;
  (t[0] !== r || t[1] !== i
    ? ((o = () => {
        let e = Xt({
          axis: `height`,
          target: a.current,
          onChange: (e) => {
            let { height: t } = e,
              n = Math.max(0, t - 40);
            (i(n), r?.(n));
          },
        });
        return () => {
          (e?.(), i(0), r?.(0));
        };
      }),
      (s = [r, i]),
      (t[0] = r),
      (t[1] = i),
      (t[2] = o),
      (t[3] = s))
    : ((o = t[2]), (s = t[3])),
    (0, Ro.useLayoutEffect)(o, s));
  let c;
  return (
    t[4] === n
      ? (c = t[5])
      : ((c = (0, $.jsx)(`div`, {
          ref: a,
          className: `w-full no-drag`,
          "data-avatar-overlay-foreground": !0,
          "data-avatar-overlay-hit-region": `notification-composer`,
          children: n,
        })),
        (t[4] = n),
        (t[5] = c)),
    c
  );
}
var Lo, Ro, $, zo, Bo;
function Vo() {
  return (Vo = e(() => {
    ((Lo = R()),
      N(),
      b(),
      L(),
      _(),
      W(),
      Me(),
      Y(),
      Ge(),
      (Ro = h()),
      J(),
      Wn(),
      dt(),
      nt(),
      G(),
      Ji(),
      Qr(),
      ia(),
      fr(),
      ir(),
      Vr(),
      Kt(),
      ft(),
      ut(),
      me(),
      i(),
      Tn(),
      ct(),
      ja(),
      ro(),
      Ai(),
      It(),
      Fr(),
      co(),
      po(),
      br(),
      Li(),
      Do(),
      Wi(),
      Ar(),
      Qa(),
      Vn(),
      Tt(),
      Oi(),
      ($ = k()),
      (zo = le({
        restore: {
          id: `avatarOverlay.quickChatBar.restore`,
          defaultMessage: `Restore Quick Chat`,
          description: `Accessible label for the screen-edge tab that brings a stashed floating Quick Chat back onscreen`,
        },
        startNewChat: {
          id: `avatarOverlay.quickChatBar.startNewChat`,
          defaultMessage: `Start new chat`,
          description: `Placeholder and accessible label for the floating Quick Chat bar, shown alone or below a pet`,
        },
        startVoice: {
          id: `avatarOverlay.quickChatBar.startVoice`,
          defaultMessage: `Start voice chat`,
          description: `Accessible label for the voice control in the floating Quick Chat bar`,
        },
        stopVoice: {
          id: `avatarOverlay.stopRealtimeVoice`,
          defaultMessage: `Stop voice chat`,
          description: `Accessible label and tooltip for stopping realtime voice from the floating avatar`,
        },
        hideActivity: {
          id: `avatarOverlay.quickChatBar.hideActivity`,
          defaultMessage: `Hide activity`,
          description: `Accessible label for hiding activity beside the floating quick-chat bar`,
        },
        showActivity: {
          id: `avatarOverlay.quickChatBar.showActivity`,
          defaultMessage: `Show activity`,
          description: `Accessible label for showing activity beside the floating quick-chat bar`,
        },
      })),
      (Bo = x.create(io)));
  }))();
}
export {
  Hr as A,
  br as B,
  fi as C,
  qr as D,
  Kr as E,
  kr as F,
  tr as G,
  fr as H,
  Ar as I,
  nr as K,
  wr as L,
  Vr as M,
  jr as N,
  Ur as O,
  Fr as P,
  Or as R,
  ri as S,
  Xr as T,
  rr as U,
  ur as V,
  ir as W,
  oi as _,
  po as a,
  ti as b,
  Li as c,
  Di as d,
  Oi as f,
  $r as g,
  gi as h,
  uo as i,
  Ir as j,
  Yr as k,
  ki as l,
  hi as m,
  Vo as n,
  Ni as o,
  mi as p,
  lo as r,
  ji as s,
  Oo as t,
  Ai as u,
  ei as v,
  Qr as w,
  ni as x,
  ii as y,
  _r as z,
};
//# sourceMappingURL=controls-5f9dd12a86e3.js.map
