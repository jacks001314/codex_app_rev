import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $nt as r,
  ADt as i,
  Aht as a,
  CPt as o,
  CQ as s,
  Cot as c,
  Cwt as l,
  DDt as u,
  Fct as d,
  HB as f,
  Hht as p,
  Hnt as m,
  IDt as h,
  Iht as g,
  Ixt as _,
  KDt as v,
  Kat as y,
  Ky as b,
  Lht as x,
  MZ as S,
  Mb as C,
  Mht as w,
  Mz as T,
  Nht as E,
  Nz as D,
  PV as O,
  Pb as k,
  Pxt as A,
  Rht as j,
  SJ as M,
  SPt as N,
  Sj as P,
  Swt as F,
  TJ as I,
  Twt as L,
  VDt as ee,
  Vxt as R,
  Wnt as z,
  _Mt as B,
  _p as V,
  _wt as H,
  aj as te,
  ak as ne,
  awt as re,
  b4 as ie,
  bO as ae,
  bb as oe,
  cz as U,
  dJ as se,
  dwt as W,
  fCt as G,
  fSt as K,
  fwt as q,
  gMt as J,
  gp as ce,
  gwt as le,
  hot as ue,
  hp as de,
  iwt as fe,
  jDt as pe,
  jZ as me,
  kDt as he,
  lDt as ge,
  lot as _e,
  mCt as ve,
  nS as ye,
  nq as be,
  oDt as xe,
  oSt as Y,
  oj as Se,
  owt as Ce,
  pwt as X,
  qG as we,
  qat as Te,
  qnt as Ee,
  qy as De,
  rst as Z,
  sDt as Oe,
  sk as ke,
  swt as Ae,
  sz as je,
  t3 as Me,
  tS as Ne,
  uSt as Q,
  uwt as Pe,
  vB as Fe,
  vj as Ie,
  vp as Le,
  vzt as Re,
  wQ as ze,
  wot as Be,
  wwt as Ve,
  xMt as He,
  xb as Ue,
  y4 as We,
  yMt as Ge,
  yO as Ke,
  yzt as qe,
  zht as Je,
  zxt as Ye,
} from "./app-shared-bbfeca5e5737.js";
import {
  $5 as Xe,
  Bu as Ze,
  Dn as Qe,
  Dt as $e,
  E5n as et,
  Ef as tt,
  Et as nt,
  FAt as rt,
  HG as it,
  Hu as at,
  JEt as ot,
  Ju as st,
  Jxt as ct,
  Omr as lt,
  On as ut,
  PAt as dt,
  Q5 as ft,
  QSr as pt,
  Rm as mt,
  SY as ht,
  Tf as gt,
  UG as _t,
  Uu as vt,
  Uxt as yt,
  Vu as bt,
  Wxt as xt,
  X7t as St,
  XBt as Ct,
  Yu as wt,
  Z7t as Tt,
  ZBt as Et,
  ZSr as Dt,
  _6n as Ot,
  _R as kt,
  _Y as At,
  _d as jt,
  _m as Mt,
  aR as Nt,
  bR as Pt,
  bf as Ft,
  cPn as It,
  cR as Lt,
  cg as Rt,
  dR as zt,
  dd as Bt,
  fR as Vt,
  fbn as Ht,
  g6n as Ut,
  gP as Wt,
  gR as Gt,
  gd as Kt,
  gm as qt,
  hP as Jt,
  hR as Yt,
  hd as Xt,
  hm as Zt,
  ih as Qt,
  jY as $t,
  kan as en,
  lPn as tn,
  lR as nn,
  ld as rn,
  lg as an,
  mR as on,
  md as sn,
  oFr as cn,
  oR as ln,
  om as un,
  pR as dn,
  pbn as fn,
  qEt as pn,
  sR as mn,
  sm as hn,
  uR as gn,
  v8n as _n,
  vR as vn,
  vY as yn,
  vd as bn,
  vgr as xn,
  vm as Sn,
  w5n as Cn,
  wf as wn,
  xR as Tn,
  yR as En,
  ygr as Dn,
  ym as On,
  zm as kn,
} from "./app-initial-5851df3f6cb1.js";
import { i as An, t as jn } from "./transcript-state-74a83ada226d.js";
import { c as Mn, l as Nn } from "./aeon-appearance-colors-5805c61f5268.js";
import { i as Pn, n as Fn, r as In, t as Ln } from "./toggle-composer-context-menu-e889997360d6.js";
import { a as Rn, c as zn, d as Bn, f as Vn, i as Hn, u as Un } from "./avatar-mascot-button-8eddbeaf6243.js";
import { n as Wn, t as Gn } from "./mini-orbit-artwork-caa11886b698.js";
import { n as Kn, t as qn } from "./sound-on-2c226d70676f.js";
import { n as Jn, t as Yn } from "./realtime-voice-handoff-target-73419874d4e3.js";
import { n as Xn, t as Zn } from "./observed-message-performance-marker-47108f484504.js";
var Qn, $n, er;
function tr() {
  return (tr = e(() => {
    (A(),
      ln(),
      Be(),
      (Qn = K(c, () => null, {
        onMount: (e, t) =>
          t.watch(({ get: t }) => {
            let n = t(gn),
              r = t(Vt),
              i = t(zt);
            e((e) => {
              if (!r || e?.accountId !== n) return null;
              if (i == null) return e;
              let t = i.find(({ id: t }) => t === e.agent.id);
              return t == null ? null : { ...e, agent: t };
            });
          }),
      })),
      ($n = Y(c, ({ get: e }) => {
        let t = e(Qn);
        return e(Vt) && t?.accountId === e(gn) ? t.agent : null;
      })),
      (er = Y(c, ({ get: e }) => e($n) != null)));
  }))();
}
function nr(e) {
  e.set(rr, (e) => e + 1);
}
var rr, ir, ar, or, sr;
function cr() {
  return (cr = e(() => {
    (A(),
      Wt(),
      ln(),
      Be(),
      it(),
      En(),
      jn(),
      tr(),
      (rr = K(c, 0)),
      (ir = Q(
        c,
        () => null,
        ({ get: e, scope: t, set: n }) => {
          let r = e(gn);
          if ((n(null), !e(Vt))) return;
          let i = new Map(),
            a = null,
            o = null,
            s,
            c;
          function l(e) {
            let t = a?.kind === `onboarding` && e?.kind !== `onboarding`;
            ((a = e), n(e), t && kt(r));
          }
          function u() {
            (clearTimeout(c), (c = setTimeout(() => l(null), 1e4)));
          }
          let d = t.watch(({ get: e }) => {
            let t = e(Jt) && !e(An) && e($n) == null,
              n = e(mn),
              r = e(zt),
              d = e(dn),
              f = e(rr),
              p = s != null && f !== s;
            s = f;
            let m = null,
              h = !1;
            for (let t of r ?? []) {
              let { data: r } = e(_t, t.conversationId);
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
                  (s.createdAt == null || lt(r.latestMessage.createdAt, s.createdAt) >= 0),
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
            let g = e(Lt);
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
            (d(), clearTimeout(c), a?.kind === `onboarding` && kt(r));
          };
        },
      )),
      (ar = Y(c, ({ get: e }) => {
        let t = e(mn);
        return e(Jt) &&
          t != null &&
          !e(dn).includes(t.id) &&
          !e(An) &&
          e($n) == null &&
          e(_t, t.conversationId).data?.isTyping
          ? t
          : null;
      })),
      (or = Y(c, ({ get: e }) => e(ir) != null || e(ar) != null)),
      (sr = Y(c, ({ get: e }) => {
        let t = e(ir);
        return t?.kind === `onboarding` && t.onboarding.mode === `temporary`;
      })));
  }))();
}
var lr, ur, dr;
function fr() {
  return (fr = e(() => {
    ((lr = `_Root_78xu1_2`), (ur = `_Quote_78xu1_2`), (dr = { Root: lr, Quote: ur }));
  }))();
}
function pr(e) {
  let t = (0, mr.c)(16),
    { reply: r, onRemove: i } = e,
    a = ee(),
    o;
  t[0] === r.text ? (o = t[1]) : ((o = pt(r.text)), (t[0] = r.text), (t[1] = o));
  let s = o,
    c,
    l,
    u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = J(`flex min-w-0 items-center gap-1 rounded-xl px-2 py-1.5 text-size-chat-sm leading-4`, dr.Root)),
      (l = (0, hr.jsx)(T, { asset: We })),
      (u = J(`min-w-0 flex-1 truncate select-text`, dr.Quote)),
      (t[2] = c),
      (t[3] = l),
      (t[4] = u))
    : ((c = t[2]), (l = t[3]), (u = t[4]));
  let d;
  t[5] === a
    ? (d = t[6])
    : ((d = a.formatMessage({
        id: `avatarOverlay.transcript.quotedMessage`,
        defaultMessage: `Replying to message`,
        description: `Accessible label for the quoted original message in an orb reply`,
      })),
      (t[5] = a),
      (t[6] = d));
  let f;
  t[7] !== d || t[8] !== s
    ? ((f = (0, hr.jsx)(`blockquote`, { className: u, "aria-label": d, title: s, children: s })),
      (t[7] = d),
      (t[8] = s),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] !== a || t[11] !== i
    ? ((p =
        i == null
          ? null
          : (0, hr.jsx)(n, {
              "aria-label": a.formatMessage({
                id: `avatarOverlay.transcript.removeReply`,
                defaultMessage: `Remove reply`,
                description: `Remove the quoted message from the orb composer without clearing the draft`,
              }),
              color: `ghostSecondary`,
              size: `iconCircleSm`,
              onClick: i,
              children: (0, hr.jsx)(M, {}),
            })),
      (t[10] = a),
      (t[11] = i),
      (t[12] = p))
    : (p = t[12]);
  let m;
  return (
    t[13] !== f || t[14] !== p
      ? ((m = (0, hr.jsxs)(`div`, { className: c, children: [l, f, p] })),
        (t[13] = f),
        (t[14] = p),
        (t[15] = m))
      : (m = t[15]),
    m
  );
}
var mr, hr;
function gr() {
  return (gr = e(() => {
    ((mr = Re()), ie(), B(), Dt(), pe(), Me(), D(), I(), fr(), (hr = He()));
  }))();
}
var _r, vr;
function yr() {
  return (yr = e(() => {
    ((_r = `_dot_lkvm0_1`), (vr = { dot: _r, "typing-bounce": `_typing-bounce_lkvm0_31` }));
  }))();
}
function br(e) {
  let t = (0, Sr.c)(13),
    { agent: n } = e,
    r = ee(),
    i;
  t[0] === n.artwork ? (i = t[1]) : ((i = ft(n.artwork)), (t[0] = n.artwork), (t[1] = i));
  let a;
  t[2] === i ? (a = t[3]) : ((a = { color: i }), (t[2] = i), (t[3] = a));
  let o;
  if (t[4] !== n.name || t[5] !== r) {
    let e = n.name,
      i;
    (t[7] === n.name ? (i = t[8]) : ((i = fn(n.name)), (t[7] = n.name), (t[8] = i)),
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
  t[9] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = [0, 1, 2].map(xr)), (t[9] = s)) : (s = t[9]);
  let c;
  return (
    t[10] !== a || t[11] !== o
      ? ((c = (0, Cr.jsx)(`div`, {
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
function xr(e) {
  return (0, Cr.jsx)(`span`, { className: vr.dot, "aria-hidden": !0 }, e);
}
var Sr, Cr;
function wr() {
  return (wr = e(() => {
    ((Sr = Re()), pe(), Xe(), Ht(), yr(), (Cr = He()));
  }))();
}
function Tr(e, t = !1) {
  if (t) return { type: `spring`, visualDuration: 0.44, bounce: 0.22 };
  let n = zn.filter,
    r = e ? 0.9 : 1.25;
  return { type: n.type, damping: n.damping / r, mass: n.mass, stiffness: n.stiffness / r ** 2 };
}
function Er() {
  return (Er = e(() => {
    Vn();
  }))();
}
function Dr(e) {
  let t = (0, Or.c)(23),
    { ref: n, className: r, children: i, placement: a, origin: o, animatesFromBar: s } = e,
    c = (0, kr.useRef)(null),
    l = Ae(),
    u = L(),
    d;
  t[0] !== s || t[1] !== u || t[2] !== o?.current || t[3] !== a || t[4] !== l
    ? ((d = () => {
        let e = c.current,
          t = o?.current;
        if (e == null || a !== `header` || !s || !u || l) return;
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
                (n = fe(e, { transform: [a, `translate(0px, 0px) scale(1, 1)`] }, Tr(!0, !0))));
            }
            e.style.removeProperty(`visibility`);
          };
        return (
          Oe.postRender(r),
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
            (xe(r), n?.stop());
          }
        );
      }),
      (t[0] = s),
      (t[1] = u),
      (t[2] = o?.current),
      (t[3] = a),
      (t[4] = l),
      (t[5] = d))
    : (d = t[5]);
  let f;
  (t[6] !== s || t[7] !== u || t[8] !== o || t[9] !== a || t[10] !== l
    ? ((f = [s, u, o, a, l]), (t[6] = s), (t[7] = u), (t[8] = o), (t[9] = a), (t[10] = l), (t[11] = f))
    : (f = t[11]),
    (0, kr.useLayoutEffect)(d, f));
  let p;
  t[12] !== s || t[13] !== n || t[14] !== o || t[15] !== a
    ? ((p = Se(n, (e) => {
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
      (t[16] = p))
    : (p = t[16]);
  let m;
  t[17] === r ? (m = t[18]) : ((m = J(`inline-flex`, r)), (t[17] = r), (t[18] = m));
  let h;
  return (
    t[19] !== i || t[20] !== p || t[21] !== m
      ? ((h = (0, Ar.jsx)(`span`, { ref: p, className: m, children: i })),
        (t[19] = i),
        (t[20] = p),
        (t[21] = m),
        (t[22] = h))
      : (h = t[22]),
    h
  );
}
var Or, kr, Ar;
function jr() {
  return (jr = e(() => {
    ((Or = Re()), B(), re(), ge(), Ve(), Ce(), (kr = qe()), te(), Er(), (Ar = He()));
  }))();
}
function Mr(e) {
  let t = (0, Pr.c)(28),
    { ref: n, compact: r, iconStyle: i, isSelected: a, onActivate: s } = e,
    l = _(c),
    u = ee(),
    d = R(mn),
    f = R($n),
    p = f ?? d,
    m = R(Yt),
    h;
  t[0] !== p || t[1] !== m?.locator
    ? ((h = m?.locator ?? (p == null ? null : { conversationId: p.conversationId, hostId: p.hostId })),
      (t[0] = p),
      (t[1] = m?.locator),
      (t[2] = h))
    : (h = t[2]);
  let g = h,
    v = m?.phase ?? `inactive`,
    y = m?.microphoneMuted ?? !1,
    [b, x] = (0, Fr.useOptimistic)(y),
    S = Ye(At, g),
    C;
  t[3] !== m || t[4] !== u || t[5] !== g || t[6] !== l
    ? ((C = async (e) => {
        if (g != null)
          try {
            (e.type === `set-microphone-muted` && x(e.muted), await yn(l, g, e, m?.claimId));
          } catch {
            l.get(ue).danger(
              u.formatMessage({
                id: `restricted.orbit.voiceCall.controlFailed`,
                defaultMessage: `Couldn’t update the call. Please try again`,
                description: `Error when a dot call control fails`,
              }),
              { errorAnalytics: { toastId: `restricted.orbit.voiceCall.controlFailed` } },
            );
          }
      }),
      (t[3] = m),
      (t[4] = u),
      (t[5] = g),
      (t[6] = l),
      (t[7] = C))
    : (C = t[7]);
  let w = C,
    T;
  t[8] !== w || t[9] !== g || t[10] !== s || t[11] !== v || t[12] !== l || t[13] !== f
    ? ((T = () => {
        (o.debug(`Mini Dot call control activated`, {
          safe: { phase: v, fromTemporaryTranscript: f != null },
        }),
          s(),
          v === `inactive` && g != null ? $t(l, g) : (0, Fr.startTransition)(() => w({ type: `stop` })));
      }),
      (t[8] = w),
      (t[9] = g),
      (t[10] = s),
      (t[11] = v),
      (t[12] = l),
      (t[13] = f),
      (t[14] = T))
    : (T = t[14]);
  let E;
  t[15] !== w || t[16] !== b
    ? ((E = () => (0, Fr.startTransition)(() => w({ type: `set-microphone-muted`, muted: !b }))),
      (t[15] = w),
      (t[16] = b),
      (t[17] = E))
    : (E = t[17]);
  let D;
  return (
    t[18] !== r ||
    t[19] !== i ||
    t[20] !== a ||
    t[21] !== S ||
    t[22] !== b ||
    t[23] !== v ||
    t[24] !== n ||
    t[25] !== T ||
    t[26] !== E
      ? ((D = (0, Ir.jsx)(Nr, {
          ref: n,
          compact: r,
          iconStyle: i,
          isSelected: a,
          isStartAvailable: S,
          phase: v,
          microphoneMuted: b,
          onClick: T,
          onToggleMicrophoneMute: E,
        })),
        (t[18] = r),
        (t[19] = i),
        (t[20] = a),
        (t[21] = S),
        (t[22] = b),
        (t[23] = v),
        (t[24] = n),
        (t[25] = T),
        (t[26] = E),
        (t[27] = D))
      : (D = t[27]),
    D
  );
}
function Nr(e) {
  let t = (0, Pr.c)(44),
    {
      ref: n,
      compact: r,
      iconStyle: i,
      isSelected: a,
      isStartAvailable: o,
      phase: s,
      microphoneMuted: c,
      onClick: l,
      onToggleMicrophoneMute: u,
    } = e,
    d = r !== void 0 && r,
    f = a !== void 0 && a,
    p = ee(),
    m = (0, Fr.useId)(),
    h = s !== `inactive`,
    g = d ? S : ye,
    _ = d ? ce : Le,
    v;
  t[0] !== h || t[1] !== p
    ? ((v = h
        ? p.formatMessage({
            id: `restricted.orbit.voiceCall.hangUp`,
            defaultMessage: `Hang up`,
            description: `End the dot voice call`,
          })
        : p.formatMessage({
            id: `restricted.orbit.voiceCall.start`,
            defaultMessage: `Start call`,
            description: `Start a voice call with this dot`,
          })),
      (t[0] = h),
      (t[1] = p),
      (t[2] = v))
    : (v = t[2]);
  let y = v,
    b;
  t[3] !== p || t[4] !== c
    ? ((b = c
        ? p.formatMessage({
            id: `restricted.orbit.voiceCall.unmuteMic`,
            defaultMessage: `Unmute microphone`,
            description: `Enable the microphone in the dot call`,
          })
        : p.formatMessage({
            id: `restricted.orbit.voiceCall.muteMic`,
            defaultMessage: `Mute microphone`,
            description: `Mute the microphone in the dot call`,
          })),
      (t[3] = p),
      (t[4] = c),
      (t[5] = b))
    : (b = t[5]);
  let x = b,
    C;
  if (s === `starting`) {
    let e;
    (t[6] === p
      ? (e = t[7])
      : ((e = p.formatMessage({
          id: `restricted.orbit.voiceCall.calling`,
          defaultMessage: `Calling…`,
          description: `Status while connecting a dot voice call`,
        })),
        (t[6] = p),
        (t[7] = e)),
      (C = e));
  }
  let w;
  t[8] !== d || t[9] !== s || t[10] !== C || t[11] !== m
    ? ((w =
        s === `starting` &&
        (0, Ir.jsx)(`span`, {
          id: m,
          className: d
            ? `sr-only`
            : `pointer-events-none absolute inset-x-10 truncate text-center text-sm text-secondary`,
          children: C,
        })),
      (t[8] = d),
      (t[9] = s),
      (t[10] = C),
      (t[11] = m),
      (t[12] = w))
    : (w = t[12]);
  let E;
  t[13] !== d || t[14] !== h || t[15] !== x || t[16] !== c || t[17] !== u
    ? ((E =
        h &&
        !d &&
        (0, Ir.jsxs)(Ir.Fragment, {
          children: [
            (0, Ir.jsx)(je, {
              tooltipContent: x,
              children: (0, Ir.jsx)(`button`, {
                className: `flex h-full w-10 shrink-0 cursor-interaction items-center justify-center text-default focus-visible:outline-none`,
                "aria-label": x,
                "aria-pressed": c,
                "data-quick-chat-control": !0,
                type: `button`,
                onClick: u,
                children: (0, Ir.jsx)(T, { asset: c ? De : ze }),
              }),
            }),
            (0, Ir.jsx)(`span`, {
              "aria-hidden": `true`,
              className: `pointer-events-none absolute inset-y-2 left-10 w-px bg-border`,
              "data-quick-chat-divider": `voice`,
            }),
          ],
        })),
      (t[13] = d),
      (t[14] = h),
      (t[15] = x),
      (t[16] = c),
      (t[17] = u),
      (t[18] = E))
    : (E = t[18]);
  let D = C ?? y,
    O = s === `starting` && !d ? `ms-auto w-10 shrink-0` : `min-w-0 flex-1`,
    k;
  t[19] === O
    ? (k = t[20])
    : ((k = J(`flex h-full cursor-interaction items-center justify-center rounded-full text-default`, O)),
      (t[19] = O),
      (t[20] = k));
  let A = C == null ? void 0 : m,
    j = h || f,
    M = h ? `` : `surface`,
    N = !h && !o,
    P = h ? _ : g,
    F = h ? `text-danger` : void 0,
    I;
  t[21] !== P || t[22] !== F
    ? ((I = (0, Ir.jsx)(T, { asset: P, className: F })), (t[21] = P), (t[22] = F), (t[23] = I))
    : (I = t[23]);
  let L;
  t[24] !== i || t[25] !== I
    ? ((L = (0, Ir.jsx)(H.span, {
        className: `flex shrink-0 items-center justify-center`,
        style: i,
        children: I,
      })),
      (t[24] = i),
      (t[25] = I),
      (t[26] = L))
    : (L = t[26]);
  let R;
  t[27] !== y ||
  t[28] !== l ||
  t[29] !== n ||
  t[30] !== A ||
  t[31] !== j ||
  t[32] !== M ||
  t[33] !== N ||
  t[34] !== L ||
  t[35] !== k
    ? ((R = (0, Ir.jsx)(`button`, {
        ref: n,
        className: k,
        "aria-label": y,
        "aria-describedby": A,
        "aria-pressed": j,
        "data-quick-chat-control": M,
        disabled: N,
        type: `button`,
        onClick: l,
        children: L,
      })),
      (t[27] = y),
      (t[28] = l),
      (t[29] = n),
      (t[30] = A),
      (t[31] = j),
      (t[32] = M),
      (t[33] = N),
      (t[34] = L),
      (t[35] = k),
      (t[36] = R))
    : (R = t[36]);
  let z;
  t[37] !== R || t[38] !== D
    ? ((z = (0, Ir.jsx)(je, { tooltipContent: D, children: R })), (t[37] = R), (t[38] = D), (t[39] = z))
    : (z = t[39]);
  let B;
  return (
    t[40] !== z || t[41] !== w || t[42] !== E
      ? ((B = (0, Ir.jsxs)(`div`, {
          className: `relative flex size-full items-center rounded-full select-none`,
          children: [w, E, z],
        })),
        (t[40] = z),
        (t[41] = w),
        (t[42] = E),
        (t[43] = B))
      : (B = t[43]),
    B
  );
}
var Pr, Fr, Ir;
function Lr() {
  return (Lr = e(() => {
    ((Pr = Re()),
      s(),
      b(),
      Ne(),
      me(),
      V(),
      de(),
      B(),
      le(),
      A(),
      (Fr = qe()),
      pe(),
      ln(),
      D(),
      _e(),
      U(),
      tr(),
      Be(),
      N(),
      on(),
      ht(),
      (Ir = He()));
  }))();
}
function Rr() {
  let e = (0, Vr.c)(4),
    t = r(d.petSize),
    n;
  e[0] === t ? (n = e[1]) : ((n = t === Hr ? null : Br(t)), (e[0] = t), (e[1] = n));
  let i;
  return (e[2] === n ? (i = e[3]) : ((i = { mascotWidthPx: n }), (e[2] = n), (e[3] = i)), i);
}
function zr(e) {
  if (e != null) return { [Wr]: `${Br(e)}px` };
}
function Br(e) {
  return Number.isFinite(e) ? Math.round(Math.min(224, Math.max(80, e))) : Hr;
}
var Vr, Hr, Ur, Wr;
function Gr() {
  return (Gr = e(() => {
    ((Vr = Re()), Z(), z(), (Hr = d.petSize.default), (Ur = 192 / 208), (Wr = `--codex-pet-width`));
  }))();
}
function Kr(e, t) {
  let n = e.get(gn);
  if (!e.get(Vt) || n == null) return !1;
  let r = e.get(nn);
  if ((t === `orbit` && r?.accountId === n) || (t === `pet` && r == null))
    return e.get(Qn) != null && (e.set(Qn, null), !0);
  if (t === `orbit`) {
    let t = e.get(zt)?.[0];
    if (r != null || t == null) return !1;
    let i = m(e.get, d.petVisible);
    (e.set(Tn, { accountId: n, agentId: t.id, petVisibleBeforeOrbit: i }),
      e.set(nn, { accountId: n, agent: t, petVisibleBeforeOrbit: i }),
      Ee(e, d.petVisible, !1));
  } else {
    if (r == null || r.accountId !== n) return !1;
    (e.set(Tn, { accountId: n, agentId: null, petVisibleBeforeOrbit: r.petVisibleBeforeOrbit }),
      e.set(nn, null),
      Ee(e, d.petVisible, r.petVisibleBeforeOrbit));
  }
  return (e.set(Qn, null), o.debug(`Mini mode preference changed`, { safe: { mode: t } }), !0);
}
function qr(e, t) {
  return t.defaultPrevented ||
    t.isComposing ||
    t.repeat ||
    t.altKey ||
    t.shiftKey ||
    (t.ctrlKey && t.metaKey) ||
    !ke(t)
    ? !1
    : t.code === `Digit0` || t.code === `Numpad0` || t.key === `0`
      ? Kr(e, `pet`)
      : (t.code === `Digit1` || t.code === `Numpad1` || t.key === `1`) && Kr(e, `orbit`);
}
function Jr() {
  return (Jr = e(() => {
    (Z(), ln(), ne(), z(), N(), Pt(), tr());
  }))();
}
function Yr(e) {
  return e.compactControlWidth * 2 + e.compactControlGap;
}
function Xr({ mascot: e, petControlsAppearance: t, quickChatBar: n, showsNotificationBadge: r }) {
  if (n != null) return { left: n.left + n.width / 2, top: n.top + n.height + si };
  let i = ni({
    controlGap: t.hoverControlGap,
    controlSize: t.hoverControlSize,
    mascot: e,
    offsetX: t.hoverOffsetX,
    offsetY: t.hoverOffsetY,
    showsNotificationBadge: r,
    surfaceId: `voice-controls`,
  });
  return { left: e.left + e.width / 2 + i.x, top: e.top + i.y + t.hoverControlSize + si };
}
function Zr({
  belowAnchorTop: e,
  mascotTop: t,
  occupiedBounds: n,
  pillHeight: r,
  visibleViewportBottom: i,
  visibleViewportTop: a,
}) {
  let o = n == null ? e : n.top + n.height + si;
  return o + r > i ? Math.max(a + oi, (n?.top ?? t) - r - si) : o;
}
function Qr({ mascot: e, orbScale: t = 1 }) {
  return { left: e.left + e.width / 2, top: e.top + (e.height * (1 + t)) / 2 - ri - ii };
}
function $r({ mascot: e, visibleBounds: t }) {
  return ti({ centerX: e.left + e.width / 2, visibleBounds: t });
}
function ei({ anchor: e, visibleBounds: t }) {
  return ti({ centerX: e.left, visibleBounds: t });
}
function ti({ centerX: e, visibleBounds: t }) {
  return Math.max(0, 2 * Math.min(e - t.left - 16, t.left + t.width - e - 16));
}
function ni({
  controlGap: e = ii,
  controlSize: t = ri,
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
    d = r.width / 2 + ai + u,
    f = 2 * Math.asin((t + e) / (2 * d)),
    p = (l - (c - 1) / 2) * f;
  return { x: Math.round(Math.sin(p) * d + i), y: Math.round(r.height / 2 + Math.cos(p) * d - u + a) };
}
var ri, ii, ai, oi, si;
function ci() {
  return (ci = e(() => {
    (Z(), (ri = 24), (ii = 8), (ai = 0), (oi = 8), (si = 8));
  }))();
}
function li(e) {
  let t = e.dom.closest(`[data-avatar-overlay-content-frame="true"]`);
  if (t == null) return null;
  let n = t.getBoundingClientRect(),
    r = e.coordsAtPos(e.state.selection.head),
    i = t.offsetWidth === 0 ? 1 : n.width / t.offsetWidth,
    a = t.offsetHeight === 0 ? 1 : n.height / t.offsetHeight;
  return { x: (r.left - n.left) / i, y: ((r.top + r.bottom) / 2 - n.top) / a };
}
function ui(e, t) {
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
function di(e) {
  return [e.value, e.selectionStart, e.selectionEnd, e.selectionDirection, e.scrollLeft, e.scrollTop].join(
    `\0`,
  );
}
function fi() {
  return (fi = e(() => {}))();
}
var pi, mi, hi, gi, _i, vi, yi, bi, xi, Si, Ci;
function wi() {
  return (wi = e(() => {
    ((pi = `_barMaterial_1bein_2`),
      (mi = `_controls_1bein_2 _controls_pbuwb_1`),
      (hi = `_quickChatCompactFirstDivider_1bein_2`),
      (gi = `_quickChatCompactSecondDivider_1bein_2`),
      (_i = `_activityBadgeContainer_1bein_2`),
      (vi = `_activityBell_1bein_2`),
      (yi = `_orb_1bein_2`),
      (bi = `_editor_1bein_2`),
      (xi = `_editorInput_1bein_2`),
      (Si = `_dictationWaveform_1bein_2`),
      (Ci = {
        barMaterial: pi,
        controls: mi,
        quickChatCompactFirstDivider: hi,
        quickChatCompactSecondDivider: gi,
        activityBadgeContainer: _i,
        activityBell: vi,
        orb: yi,
        editor: bi,
        editorInput: xi,
        dictationWaveform: Si,
      }));
  }))();
}
function Ti(e, t, n = !1, r = 124) {
  let i = g(e, n),
    a = e.quickChat?.workArea ?? e.visibleBounds,
    o = 48 + r + (t ? 48 : 0),
    s = 48 + r / 2;
  return {
    ...i,
    left: Math.max(a.left + 16, Math.min(a.left + a.width - o - 16, e.mascot.left + e.mascot.width / 2 - s)),
    width: o,
  };
}
function Ei() {
  return (Ei = e(() => {
    Z();
  }))();
}
function Di(e, t, n) {
  let r = 40 * n,
    i = t / 40;
  return Math.round((i + (1 - i) * e) * r) / r;
}
function Oi(e) {
  return {
    left: e.bar.left + e.target.composerLeft,
    top: e.bar.top + e.target.composerTop,
    width: e.target.composerWidth,
    height: e.target.composerHeight,
  };
}
function ki({
  draft: e,
  compositionDeferral: t = null,
  editorExtraHeight: n = 0,
  hasNotifications: r,
  hasAppshots: i = !1,
  hasReply: o = !1,
  replyHeight: s = 0,
  hasPetAccessory: c = !1,
  hasSelectedOrb: l = !1,
  hasMessageNotification: u = !1,
  isEditorActive: d = !1,
  isExpanded: f,
  isVoiceActive: p = !1,
  layout: m,
  stashAppearance: h = E,
  ..._
}) {
  let v = _.hasUnreadOrbit === !0,
    y = _.isOrbitMode === !0,
    b = _.isOrbitAvatarInHeader === !0,
    S = _.isOrbitCallStarting === !0,
    C = y && p,
    T = y ? 40 * (S ? 4 : 2) : 124,
    D = f ? `expanded` : `collapsed`;
  (p && ((y && !f) || (!d && !e.length && !i && !o))
    ? (D = `voice`)
    : f && (e.length > 0 || i || o || (d && t == null)) && !p && (D = `composing`),
    m.quickChat?.stashedEdge != null && (D = `stashed`));
  let O = D === `stashed`,
    k = y && (D === `expanded` || D === `composing`),
    A = m.quickChat?.workArea ?? m.visibleBounds,
    M = g(m, c),
    N = Math.min(220, Math.max(0, A.width - 32)) / 2,
    P = y && u && !v && !b && (!k || A.width >= M.width + N - 16 + 32 + (r && D === `expanded` ? Mi : 0)),
    F = 40;
  (O ? (F = Math.min(h.tabHeight, A.height)) : i && D !== `collapsed` && D !== `voice` && (F = ji),
    !O && D !== `collapsed` && D !== `voice` && (F += n + (o ? s : 0)));
  let I = {
      ...M,
      width: Math.min(M.width, A.width - 32 - (k && r && D === `expanded` && !b ? Mi : 0)),
      left: m.mascot.left + (m.mascot.width - a) / 2,
    },
    L = M.left + (M.width - I.width) / 2 - I.left,
    ee = O ? h.tabWidth : Je(r),
    R = x(m, ee, c).left - I.left;
  (!c && m.quickChat == null && (R = m.mascot.left + (m.mascot.width - ee) / 2 - I.left),
    O && (R += ((ee - 26) / 2) * (m.quickChat?.stashedEdge === `left` ? 1 : -1)),
    (D === `composing` || (D === `expanded` && (!y || b))) &&
      (L = (0, Ai.default)(
        R + (ee - I.width) / 2,
        A.left + 16 - I.left,
        A.left + A.width - 16 - I.left - I.width,
      )));
  let z = O ? 12 : 20,
    B = O ? z : 0,
    V = l && m.quickChat?.hasOrbPicker ? 40 : 0,
    H = I.width - Mi * (1 + +!!r) - (C ? T - 40 : 0),
    te = D === `collapsed` || O || (D === `expanded` && t === `submission` && !y),
    ne = D === `composing`,
    re = D === `voice`,
    ie = re || C ? T : 40,
    ae = 1;
  O && (ae = 0);
  let oe = te ? R + ee - I.width : L,
    U = O ? R + ee / 2 - 20 : H + 8 + (ne ? L - Mi : oe),
    se = H - V,
    W = L + V;
  te
    ? ((W = R), (se = ee), O || (U = j(R, 1)))
    : ne
      ? ((W = L + V), (se = I.width - V))
      : re && ((W = Ti(m, r, c, T).left - I.left), (se = 40), (U = W + Mi));
  let G = U;
  r && !O && (G = re ? U + T + 8 : te ? j(R, 2) : U + (ne ? 0 : ie + 8));
  let K = y && r;
  if (
    (K &&
      !O &&
      ((G = W - (ne || D === `expanded` ? V : 0)), (W += Mi), (U += Mi), te ? (se -= 40) : ne && (se -= Mi)),
    !O && (K || k || P))
  ) {
    let e = K ? G : W - V,
      t = ne ? W + se : Math.max(W + se, U + ie),
      n = W + (k ? 16 - V : 20),
      r = (0, Ai.default)(
        0,
        Math.max(A.left + 16 - I.left - e, P ? A.left + 16 + N - I.left - n : -1 / 0),
        Math.min(A.left + A.width - 16 - I.left - t, P ? A.left + A.width - 16 - N - I.left - n : 1 / 0),
      );
    ((G += r), (W += r), (U += r));
  }
  let q = I.top + 20 >= A.top + A.height / 2,
    J = 0;
  O
    ? (J = (0, Ai.default)((40 - F) / 2, A.top - I.top, A.top + A.height - I.top - F))
    : F > 40 && (J = (0, Ai.default)(q ? 40 - F : 0, A.top - I.top, A.top + A.height - I.top - F));
  let ce = (K ? Mi : 0) + (!te && !re ? V : 0);
  if (v && !O) {
    let e = Math.max(W + se, ne ? 0 : U + ie, !ne && r ? G + 40 : 0),
      t = (0, Ai.default)(0, A.left + 16 + Mi + ce - (I.left + W), A.left + A.width - 16 - I.left - e);
    ((W += t), (U += t), (G += t));
  }
  if (u && !O) {
    let e = !y && (c || m.placement.startsWith(`bottom`));
    J = (0, Ai.default)(J, A.top - I.top + (e ? 0 : 61), A.top + A.height - I.top - F - (e ? 61 : 0));
  }
  return (
    b &&
      (D === `expanded` || ne) &&
      ((W = (0, Ai.default)(L, A.left + 16 - I.left, A.left + A.width - 16 - I.left - I.width)),
      (se = I.width)),
    {
      bar: I,
      state: D,
      hasDetachedActivity: K,
      notificationLeadingControlsWidth: ce,
      growsUp: q,
      target: {
        composerLeft: W - (m.quickChat?.stashedEdge === `left` ? B : 0),
        composerWidth: se + B,
        composerHeight: F,
        composerTop: J,
        composerRadius: z,
        composerEdgeBleed: B,
        stashProgress: +!!O,
        voiceLeft: U,
        voiceWidth: ie,
        badgeLeft: G,
        orbScale: ae,
        compactProgress: +!!te,
        inputOpacity: te || re ? 0 : 1,
        orbIconOpacity: +!ne,
        orbIconBlurRadius: ne ? w.contentHiddenBlurRadiusPx : 0,
      },
    }
  );
}
var Ai, ji, Mi;
function Ni() {
  return (Ni = e(() => {
    ((Ai = t(v(), 1)), Z(), Ei(), (ji = 116), (Mi = 48));
  }))();
}
var Pi, Fi;
function Ii() {
  return (Ii = e(() => {
    ((Pi = `_badge_81rb7_1`), (Fi = { badge: Pi }));
  }))();
}
function Li(e) {
  let t = (0, Ri.c)(4),
    { children: n, nativeTint: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = J(
        `pointer-events-none absolute top-1/2 -right-0.75 -mt-px flex h-3 min-w-3 -translate-y-full items-center justify-center rounded-full px-0.75 text-[8px] leading-none font-medium whitespace-nowrap text-white tabular-nums`,
        Hn.nativeTint,
        Fi.badge,
      )),
      (t[0] = i))
    : (i = t[0]);
  let a;
  return (
    t[1] !== n || t[2] !== r
      ? ((a = (0, zi.jsx)(`span`, {
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
var Ri, zi;
function Bi() {
  return (Bi = e(() => {
    ((Ri = Re()), B(), Rn(), Ii(), (zi = He()));
  }))();
}
function Vi(e) {
  let t = (0, Hi.c)(10),
    { artworkSize: n } = e,
    r = n === void 0 ? 20 : n,
    i = R(mn),
    a = R($n) ?? i;
  if (a == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Ui.jsx)(be, {})), (t[0] = e)) : (e = t[0]),
      e
    );
  }
  let o;
  t[1] !== a.artwork || t[2] !== r
    ? ((o = (0, Ui.jsx)(Gn, { artwork: a.artwork, size: r })), (t[1] = a.artwork), (t[2] = r), (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] !== a.hasUnread || t[5] !== a.unreadMessageCount
    ? ((s =
        a.hasUnread && a.unreadMessageCount !== 0
          ? (0, Ui.jsx)(Li, {
              children:
                a.unreadMessageCount != null &&
                (a.unreadMessageCount > 99
                  ? (0, Ui.jsx)(h, {
                      id: `sidebarDestination.unreadOverflowNumber`,
                      defaultMessage: `99+`,
                      description: `Compact unread message count when there are more than 99 messages`,
                    })
                  : (0, Ui.jsx)(u, { value: a.unreadMessageCount })),
            })
          : null),
      (t[4] = a.hasUnread),
      (t[5] = a.unreadMessageCount),
      (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== o || t[8] !== s
      ? ((c = (0, Ui.jsxs)(`span`, { className: `relative inline-flex`, children: [o, s] })),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
var Hi, Ui;
function Wi() {
  return (Wi = e(() => {
    ((Hi = Re()), A(), pe(), ln(), Bi(), I(), tr(), Wn(), (Ui = He()));
  }))();
}
var Gi, Ki, qi;
function Ji() {
  return (Ji = e(() => {
    ((Gi = `_detached_yb2ae_1`), (Ki = `_caption_yb2ae_8`), (qi = { detached: Gi, caption: Ki }));
  }))();
}
function Yi(e) {
  let t = (0, Zi.c)(21),
    {
      bar: n,
      anchor: r,
      placement: i,
      leadingControlsWidth: a,
      previewLayout: o,
      workArea: s,
      onOpen: l,
    } = e,
    u = _(c),
    d = R(ir),
    f = R(er),
    p = R(ar),
    m = d?.kind === `onboarding` ? d.onboarding : null,
    h = d?.kind === `message` ? d : null,
    g = m == null && p != null,
    v = m?.agent ?? p ?? d?.agent,
    y = ee();
  if (f) return null;
  let b = null;
  if (m != null) {
    let e;
    (t[0] !== y || t[1] !== m ? ((e = vn(m, y)), (t[0] = y), (t[1] = m), (t[2] = e)) : (e = t[2]), (b = e));
  } else if (!g) {
    let e;
    (t[3] !== y || t[4] !== h?.text
      ? ((e =
          h?.text ??
          y.formatMessage({
            id: `mini.orbitNotification.attachment`,
            defaultMessage: `Sent an attachment`,
            description: `Mini notification preview for a dot message containing only an attachment`,
          })),
        (t[3] = y),
        (t[4] = h?.text),
        (t[5] = e))
      : (e = t[5]),
      (b = e));
  }
  let x;
  t[6] !== v ||
  t[7] !== r ||
  t[8] !== n ||
  t[9] !== g ||
  t[10] !== a ||
  t[11] !== h?.message ||
  t[12] !== l ||
  t[13] !== i ||
  t[14] !== o ||
  t[15] !== u ||
  t[16] !== b ||
  t[17] !== s
    ? ((x =
        v != null &&
        (0, $i.jsx)(Xi, {
          agent: v,
          bar: n,
          anchor: r,
          placement: g ? `above` : i,
          leadingControlsWidth: a,
          isTyping: g,
          previewLayout: o,
          workArea: s,
          message: h?.message,
          text: b,
          onPointerEnter: () => nr(u),
          onOpen: () => {
            let e = u.get(gn);
            e != null && (u.get(mn)?.id !== v.id && u.set(Qn, { accountId: e, agent: v }), l());
          },
        })),
      (t[6] = v),
      (t[7] = r),
      (t[8] = n),
      (t[9] = g),
      (t[10] = a),
      (t[11] = h?.message),
      (t[12] = l),
      (t[13] = i),
      (t[14] = o),
      (t[15] = u),
      (t[16] = b),
      (t[17] = s),
      (t[18] = x))
    : (x = t[18]);
  let S;
  return (t[19] === x ? (S = t[20]) : ((S = (0, $i.jsx)(F, { children: x })), (t[19] = x), (t[20] = S)), S);
}
function Xi(e) {
  let t = (0, Zi.c)(46),
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
    m = o === void 0 ? 0 : o,
    h = d !== void 0 && d,
    g = ee(),
    _;
  if (t[0] !== n.name || t[1] !== g) {
    let e = n.name,
      r;
    (t[3] === n.name ? (r = t[4]) : ((r = fn(n.name)), (t[3] = n.name), (t[4] = r)),
      (_ = g.formatMessage(
        {
          id: `mini.orbitNotification.open.dot`,
          defaultMessage: `Open {hasName, select, true {{name}} other {your dot}} in Mini`,
          description: `Accessible label for the dot avatar in a Mini notification. Use the custom name when present; dot is the untranslated term for the user's agent.`,
        },
        { name: e, hasName: !r },
      )),
      (t[0] = n.name),
      (t[1] = g),
      (t[2] = _));
  } else _ = t[2];
  let v = _,
    y = L(),
    b = Ae(),
    [x, S] = (0, Qi.useState)(!1);
  if (x) return null;
  let C;
  t[5] === f
    ? (C = t[6])
    : ((C = () => {
        (S(!0), f());
      }),
      (t[5] = f),
      (t[6] = C));
  let w = C,
    T;
  t[7] === b ? (T = t[8]) : ((T = b ? { duration: 0 } : Un), (t[7] = b), (t[8] = T));
  let E = T,
    D = Math.min(h ? 39 : 220, Math.max(0, c.width - 32)),
    O = i === `standalone` ? 32 : 40,
    k = `calc((var(--quick-chat-composer-left) - ${i === `bar` ? 0 : O + 8 + (i === `detached` ? m : 0)}) * 1px)`,
    A = `calc(${k} + ${i === `standalone` ? 0 : (O - 20) / 2}px)`,
    j = `calc(${k} + ${(O - D) / 2}px)`;
  i === `detached` && (j = h ? A : k);
  let M = `clamp(${c.left + 16 - r.left}px, ${j}, ${c.left + c.width - 16 - r.left - D}px)`,
    N = h || a === `below` ? `bottom` : `top`,
    P;
  t[9] !== O || t[10] !== h || t[11] !== a
    ? ((P = a === `below` ? 4 : -4),
      h && (P = -((40 + O) / 2 + 4)),
      (t[9] = O),
      (t[10] = h),
      (t[11] = a),
      (t[12] = P))
    : (P = t[12]);
  let F = `calc((${N === `bottom` ? `var(--quick-chat-composer-top) + var(--quick-chat-composer-height)` : `var(--quick-chat-composer-top)`} + ${P}) * 1px)`,
    I = i === `detached` ? `clamp(16px, calc(${A} - ${M} + 16px), calc(100% - 23px))` : `${(D - 10) / 2}px`,
    R;
  t[13] !== M || t[14] !== F || t[15] !== I || t[16] !== D
    ? ((R = { left: M, top: F, width: D, "--avatar-overlay-caption-tail-left": I }),
      (t[13] = M),
      (t[14] = F),
      (t[15] = I),
      (t[16] = D),
      (t[17] = R))
    : (R = t[17]);
  let z = R,
    B;
  t[18] !== n.artwork ||
  t[19] !== i ||
  t[20] !== k ||
  t[21] !== w ||
  t[22] !== y ||
  t[23] !== p ||
  t[24] !== v ||
  t[25] !== E
    ? ((B =
        i === `detached` &&
        (0, $i.jsx)(H.div, {
          className: J(`absolute z-30 no-drag`, qi.detached),
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: E,
          "aria-hidden": !y || void 0,
          inert: !y,
          style: {
            left: k,
            top: `calc((var(--quick-chat-composer-top) + var(--quick-chat-composer-height) - 40) * 1px)`,
          },
          children: (0, $i.jsx)(Ft, {
            nativeSurfaceId: `orbit-message-avatar`,
            variant: `quick-chat-orb`,
            children: (0, $i.jsx)(`button`, {
              className: `flex size-full cursor-interaction items-center justify-center rounded-full text-default select-none`,
              type: `button`,
              "data-avatar-overlay-foreground": !0,
              "data-avatar-overlay-hit-region": `orbit-message-avatar`,
              "data-quick-chat-control": `surface`,
              "aria-label": v,
              onClick: w,
              onFocus: p,
              children: (0, $i.jsx)(Gn, { artwork: n.artwork, size: 20 }),
            }),
          }),
        })),
      (t[18] = n.artwork),
      (t[19] = i),
      (t[20] = k),
      (t[21] = w),
      (t[22] = y),
      (t[23] = p),
      (t[24] = v),
      (t[25] = E),
      (t[26] = B))
    : (B = t[26]);
  let V;
  t[27] !== n ||
  t[28] !== i ||
  t[29] !== N ||
  t[30] !== P ||
  t[31] !== z ||
  t[32] !== w ||
  t[33] !== y ||
  t[34] !== h ||
  t[35] !== l ||
  t[36] !== p ||
  t[37] !== v ||
  t[38] !== a ||
  t[39] !== s ||
  t[40] !== u ||
  t[41] !== E
    ? ((V =
        (u != null || h) &&
        (0, $i.jsxs)(H.div, {
          ref: (e) => {
            if (e == null || s == null) return;
            let t = () => {
              let t = e.offsetHeight,
                n = P - (a === `above` ? t : 0);
              s.set({ edge: N, top: n, bottom: n + t });
            };
            t();
            let n = St({ axis: `height`, target: e, onChange: t });
            return () => {
              (n?.(), s.set(null));
            };
          },
          className: J(
            `absolute z-30 no-drag`,
            a === `above` && `-translate-y-full`,
            qi.detached,
            qi.caption,
          ),
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: E,
          "aria-hidden": !y || void 0,
          inert: !y,
          style: z,
          "data-avatar-overlay-caption-connector-direction": a === `below` ? `up` : `down`,
          "data-avatar-overlay-hit-region": `orbit-message-preview`,
          onPointerEnter: p,
          children: [
            (0, $i.jsx)(`button`, {
              className: `w-full cursor-interaction text-start select-none`,
              "aria-label": h ? v : void 0,
              type: `button`,
              onClick: w,
              onFocus: p,
              children: (0, $i.jsx)(Ft, {
                "data-avatar-overlay-caption-typing": h || void 0,
                variant: `speech-caption`,
                children: h
                  ? (0, $i.jsx)(br, { agent: n })
                  : (0, $i.jsxs)($i.Fragment, {
                      children: [
                        (0, $i.jsx)(`span`, {
                          className: `line-clamp-2 text-size-chat-sm leading-4 break-words whitespace-pre-wrap text-default`,
                          "data-avatar-overlay-foreground": !0,
                          role: `status`,
                          children: pt(u ?? ``),
                        }),
                        y && l != null
                          ? (0, $i.jsx)(Zn, { roomId: l.roomId, messageId: l.id, bodyText: l.text })
                          : null,
                      ],
                    }),
              }),
            }),
            (0, $i.jsx)(Ft, {
              "aria-hidden": `true`,
              "data-avatar-overlay-caption-connector-direction": a === `below` ? `up` : `down`,
              "data-avatar-overlay-chromium-overflow": `true`,
              "data-avatar-overlay-caption-pointed-part": i === `detached` ? void 0 : `base`,
              nativeSurfaceId: `orbit-message-connector`,
              variant: `speech-caption-connector`,
            }),
            i !== `detached` &&
              (0, $i.jsx)(Ft, {
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
      (t[29] = N),
      (t[30] = P),
      (t[31] = z),
      (t[32] = w),
      (t[33] = y),
      (t[34] = h),
      (t[35] = l),
      (t[36] = p),
      (t[37] = v),
      (t[38] = a),
      (t[39] = s),
      (t[40] = u),
      (t[41] = E),
      (t[42] = V))
    : (V = t[42]);
  let te;
  return (
    t[43] !== V || t[44] !== B
      ? ((te = (0, $i.jsxs)($i.Fragment, { children: [B, V] })), (t[43] = V), (t[44] = B), (t[45] = te))
      : (te = t[45]),
    te
  );
}
var Zi, Qi, $i;
function ea() {
  return (ea = e(() => {
    ((Zi = Re()),
      B(),
      l(),
      le(),
      Ve(),
      Ce(),
      A(),
      Z(),
      Dt(),
      (Qi = qe()),
      pe(),
      Vn(),
      wn(),
      Ei(),
      ln(),
      Wn(),
      Be(),
      Tt(),
      Ht(),
      Xn(),
      En(),
      cr(),
      tr(),
      wr(),
      Ji(),
      ($i = He()));
  }))();
}
var ta;
function na() {
  return (na = e(() => {
    (pe(),
      (ta = he({
        id: `avatarOverlay.quickChatBar.messageOrb.dot`,
        defaultMessage: `Message {hasName, select, true {{name}} other {your dot}}`,
        description: `Placeholder in Mini's input when messaging the selected dot. Use its custom name when present; dot is an untranslated product name.`,
      })));
  }))();
}
function ra(e) {
  let t = (0, ia.c)(50),
    { ref: n, editor: r, hasText: i, actionContainer: a, isSending: o, onRequestFocus: s, sendButton: l } = e,
    u = _(c),
    d = ee(),
    f = vt(),
    p = (0, aa.useRef)(!1),
    m;
  t[0] !== r || t[1] !== s
    ? ((m = (e) => {
        p.current && !r.view.isDestroyed && (r.insertDictationText(e), s(), r.focus());
      }),
      (t[0] = r),
      (t[1] = s),
      (t[2] = m))
    : (m = t[2]);
  let h = m,
    g = f === !0 && !o,
    v;
  t[3] === r ? (v = t[4]) : ((v = () => r.getText()), (t[3] = r), (t[4] = v));
  let y, b, x;
  t[5] !== d || t[6] !== u
    ? ((y = (e) => {
        u.get(ue).danger(Ze(d, `start`, e).message, { errorAnalytics: { toastId: `miniDictation.start` } });
      }),
      (b = (e) => {
        u.get(ue).danger(Ze(d, `transcription`, e).message, {
          errorAnalytics: { toastId: `miniDictation.transcription` },
        });
      }),
      (x = () => {
        u.get(ue).danger(Ze(d, `start`, TypeError()).message, {
          errorAnalytics: { toastId: `miniDictation.unsupported` },
        });
      }),
      (t[5] = d),
      (t[6] = u),
      (t[7] = y),
      (t[8] = b),
      (t[9] = x))
    : ((y = t[7]), (b = t[8]), (x = t[9]));
  let S;
  t[10] !== h || t[11] !== g || t[12] !== v || t[13] !== y || t[14] !== b || t[15] !== x
    ? ((S = {
        productSurface: `work`,
        waveformVariant: `composer`,
        enabled: g,
        getSurroundingText: v,
        onTranscriptInsert: h,
        onTranscriptSend: h,
        onStartError: y,
        onTranscribeError: b,
        onUnsupported: x,
      }),
      (t[10] = h),
      (t[11] = g),
      (t[12] = v),
      (t[13] = y),
      (t[14] = b),
      (t[15] = x),
      (t[16] = S))
    : (S = t[16]);
  let {
      abortDictation: C,
      canRetryDictation: w,
      getIsDictationStarting: T,
      isDictating: E,
      isDictationStarting: D,
      isMicrophoneBusy: O,
      isTranscribing: k,
      retryDictation: A,
      startDictation: j,
      stopDictation: M,
      waveformCanvasRef: N,
    } = wt(S),
    P = D || E || k,
    F;
  (t[17] !== C || t[18] !== P || t[19] !== T || t[20] !== M
    ? ((F = () => ({
        finish: () => (!P && !T() ? !1 : (M(`insert`), !0)),
        cancel: () => (!P && !T() ? !1 : (C(), !0)),
      })),
      (t[17] = C),
      (t[18] = P),
      (t[19] = T),
      (t[20] = M),
      (t[21] = F))
    : (F = t[21]),
    (0, aa.useImperativeHandle)(n, F));
  let I, L;
  (t[22] === C
    ? ((I = t[23]), (L = t[24]))
    : ((L = () => (
        (p.current = !0),
        () => {
          ((p.current = !1), C());
        }
      )),
      (I = [C]),
      (t[22] = C),
      (t[23] = I),
      (t[24] = L)),
    (0, aa.useLayoutEffect)(L, I));
  let R;
  t[25] !== E || t[26] !== N
    ? ((R = E
        ? (0, sa.jsx)(`div`, {
            className: Ci.dictationWaveform,
            children: (0, sa.jsx)(`canvas`, {
              ref: N,
              className: `h-5 w-full text-default`,
              "aria-hidden": `true`,
            }),
          })
        : null),
      (t[25] = E),
      (t[26] = N),
      (t[27] = R))
    : (R = t[27]);
  let z;
  t[28] !== P ||
  t[29] !== w ||
  t[30] !== r ||
  t[31] !== i ||
  t[32] !== E ||
  t[33] !== D ||
  t[34] !== O ||
  t[35] !== o ||
  t[36] !== k ||
  t[37] !== s ||
  t[38] !== A ||
  t[39] !== l ||
  t[40] !== j ||
  t[41] !== M ||
  t[42] !== f
    ? ((z =
        i && !P && !w
          ? l
          : (0, sa.jsx)(rn, {
              color: `secondary`,
              radius: `full`,
              size: `compact`,
              isVisible: f !== !1,
              isStarting: D,
              isDictating: E,
              isTranscribing: k,
              canRetryDictation: w,
              disabled: f !== !0 || o || O,
              retryDictation: A,
              startDictation: async (e) => {
                (s(), r.focus(), await j(e));
              },
              stopDictation: M,
            })),
      (t[28] = P),
      (t[29] = w),
      (t[30] = r),
      (t[31] = i),
      (t[32] = E),
      (t[33] = D),
      (t[34] = O),
      (t[35] = o),
      (t[36] = k),
      (t[37] = s),
      (t[38] = A),
      (t[39] = l),
      (t[40] = j),
      (t[41] = M),
      (t[42] = f),
      (t[43] = z))
    : (z = t[43]);
  let B;
  t[44] !== a || t[45] !== z
    ? ((B = (0, oa.createPortal)(z, a)), (t[44] = a), (t[45] = z), (t[46] = B))
    : (B = t[46]);
  let V;
  return (
    t[47] !== R || t[48] !== B
      ? ((V = (0, sa.jsxs)(sa.Fragment, { children: [R, B] })), (t[47] = R), (t[48] = B), (t[49] = V))
      : (V = t[49]),
    V
  );
}
var ia, aa, oa, sa;
function ca() {
  return (ca = e(() => {
    ((ia = Re()), A(), (aa = qe()), (oa = Ge()), pe(), Bt(), st(), at(), _e(), Be(), bt(), wi(), (sa = He()));
  }))();
}
var la, ua;
function da() {
  return (da = e(() => {
    ((la = `_panel_x6cay_1`), (ua = { panel: la }));
  }))();
}
function fa(e) {
  let t = (0, ma.c)(9),
    { children: n, isActive: r, placement: i } = e,
    a = i === void 0 ? `top` : i,
    o = rt(),
    s;
  t[0] === o.view.dom ? (s = t[1]) : ((s = o.view.dom.closest(`form`)), (t[0] = o.view.dom), (t[1] = s));
  let c = s,
    l;
  t[2] !== n || t[3] !== c || t[4] !== r || t[5] !== a
    ? ((l = r
        ? (0, ga.jsx)(
            oe,
            {
              elementAnchor: { element: c, inlineBounds: c },
              gap: 12,
              constrainHeightToViewport: !0,
              isActive: !0,
              placement: a,
              zIndexClassName: `z-50`,
              children: (0, ga.jsx)(pa, { children: n }),
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
  return (t[7] === l ? (u = t[8]) : ((u = (0, ga.jsx)(F, { children: l })), (t[7] = l), (t[8] = u)), u);
}
function pa(e) {
  let t = (0, ma.c)(16),
    { children: n } = e,
    r = rt(),
    i;
  t[0] === r.view.state
    ? (i = t[1])
    : ((i = () => C.getState(r.view.state)?.trigger === `+`), (t[0] = r.view.state), (t[1] = i));
  let [a] = (0, ha.useState)(i),
    o = L(),
    s = Ae(),
    c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = { opacity: 1 }), (t[2] = c)) : (c = t[2]);
  let l;
  t[3] === a ? (l = t[4]) : ((l = a ? { opacity: 0 } : void 0), (t[3] = a), (t[4] = l));
  let u = !o || void 0,
    d;
  t[5] === a ? (d = t[6]) : ((d = a ? { opacity: 0 } : !1), (t[5] = a), (t[6] = d));
  let f;
  t[7] !== a || t[8] !== s
    ? ((f = !a || s ? { duration: 0 } : Ie), (t[7] = a), (t[8] = s), (t[9] = f))
    : (f = t[9]);
  let p;
  return (
    t[10] !== n || t[11] !== l || t[12] !== u || t[13] !== d || t[14] !== f
      ? ((p = (0, ga.jsx)(H.div, {
          className: ua.panel,
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
var ma, ha, ga;
function _a() {
  return (_a = e(() => {
    ((ma = Re()), l(), le(), Ve(), Ce(), Z(), (ha = qe()), Ue(), k(), dt(), P(), da(), (ga = He()));
  }))();
}
function va(e) {
  let t = (0, Ca.c)(189),
    {
      ref: r,
      autoFocus: i,
      focusRequested: a,
      composerController: o,
      getAttachmentActions: s,
      canStartVoice: l,
      draft: u,
      hidden: d,
      isExpanded: f,
      isSending: p,
      showsActions: m,
      menuContainer: h,
      menuPlacement: g,
      opacity: v,
      threadTarget: b,
      onCaretPointChange: x,
      onDraftChange: S,
      onExtraHeightChange: w,
      onRequestFocus: T,
      onSubmit: E,
      onVoiceSelectionChange: D,
    } = e,
    O = _(c),
    k = ee(),
    A = R(mn),
    j = R($n) ?? A,
    M = j != null,
    N = Ye(Dn, j?.conversationId ?? null),
    P;
  t[0] !== N || t[1] !== j
    ? ((P = j == null ? null : Mn(N ?? `cyan`)), (t[0] = N), (t[1] = j), (t[2] = P))
    : (P = t[2]);
  let F = P,
    I = F?.background,
    L = F?.foreground,
    z;
  t[3] !== I || t[4] !== L
    ? ((z = { "--color-background-composer-primary": I, "--color-text-composer-primary": L }),
      (t[3] = I),
      (t[4] = L),
      (t[5] = z))
    : (z = t[5]);
  let B = z,
    V = (0, wa.useRef)(null),
    [te, ne] = (0, wa.useState)(null),
    re = (0, wa.useRef)(null),
    ie = (0, wa.useRef)(!1),
    ae = (0, wa.useRef)(null),
    oe;
  t[6] === o ? (oe = t[7]) : ((oe = o.getPersistedText()), (t[6] = o), (t[7] = oe));
  let U = (0, wa.useRef)(oe),
    se;
  t[8] === o.view ? (se = t[9]) : ((se = () => o.view.hasFocus()), (t[8] = o.view), (t[9] = se));
  let [W] = (0, wa.useState)(se),
    K = jt(o),
    q = Mt(o),
    ce = b?.conversationId ?? null,
    le = b?.hostId ?? `local`,
    de;
  t[10] !== ce || t[11] !== le
    ? ((de = ce == null ? null : { hostId: le, threadId: ce }), (t[10] = ce), (t[11] = le), (t[12] = de))
    : (de = t[12]);
  let fe = de,
    pe = Ye(Cn, fe)?.cwd ?? null,
    me = pe === `~` ? null : pe,
    he = Ye(et, fe),
    ge;
  t[13] !== me || t[14] !== le
    ? ((ge = { hostId: le, cwd: me }), (t[13] = me), (t[14] = le), (t[15] = ge))
    : (ge = t[15]);
  let _e = Et(ge),
    ve = he?.model ?? _e.model,
    ye;
  t[16] === me ? (ye = t[17]) : ((ye = me == null ? [] : [me]), (t[16] = me), (t[17] = ye));
  let be = ye,
    xe;
  t[18] !== o || t[19] !== E
    ? ((xe = () => {
        V.current?.finish() || E(o.getPersistedText());
      }),
      (t[18] = o),
      (t[19] = E),
      (t[20] = xe))
    : (xe = t[20]);
  let Y = xe,
    Se;
  t[21] !== o || t[22] !== T
    ? ((Se = () => {
        ie.current &&= (T(), o.focus(), !1);
      }),
      (t[21] = o),
      (t[22] = T),
      (t[23] = Se))
    : (Se = t[23]);
  let Ce = Se,
    X;
  t[24] !== Ce || t[25] !== s || t[26] !== k || t[27] !== O
    ? ((X = async () => {
        let e = y.avatarOverlay;
        if (!(e == null || ie.current)) {
          ie.current = !0;
          try {
            let t = await e.pickFiles();
            ie.current &&
              t.length > 0 &&
              (await s?.().addPickedFiles(t, { imagesOnly: !1, loadImageDataUrls: $e }));
          } catch {
            O.get(ue).danger(
              k.formatMessage({
                id: `avatarOverlay.quickChatBar.filePickerError`,
                defaultMessage: `Unable to open file picker`,
                description: `Error when Mini cannot open the native file picker`,
              }),
              { errorAnalytics: { toastId: `avatarOverlay.quickChatBar.filePickerError` } },
            );
          }
          Ce();
        }
      }),
      (t[24] = Ce),
      (t[25] = s),
      (t[26] = k),
      (t[27] = O),
      (t[28] = X))
    : (X = t[28]);
  let Te = X,
    Ee,
    De;
  (t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = () => () => {
        ie.current = !1;
      }),
      (De = []),
      (t[29] = Ee),
      (t[30] = De))
    : ((Ee = t[29]), (De = t[30])),
    (0, wa.useEffect)(Ee, De));
  let Z;
  t[31] === s
    ? (Z = t[32])
    : ((Z = (e) => {
        s?.().addImages(e, `paste`);
      }),
      (t[31] = s),
      (t[32] = Z));
  let Oe = (0, wa.useEffectEvent)(Z),
    ke;
  t[33] === s
    ? (ke = t[34])
    : ((ke = (e, t) => {
        s?.().addFileMentionsFromFiles(e, t);
      }),
      (t[33] = s),
      (t[34] = ke));
  let Ae = (0, wa.useEffectEvent)(ke),
    je;
  t[35] !== o || t[36] !== Ae || t[37] !== Oe
    ? ((je = () => (
        o.addPastedImagesHandler(Oe),
        o.addPastedFilesHandler(Ae),
        () => {
          (o.removePastedImagesHandler(Oe), o.removePastedFilesHandler(Ae));
        }
      )),
      (t[35] = o),
      (t[36] = Ae),
      (t[37] = Oe),
      (t[38] = je))
    : (je = t[38]);
  let Me;
  (t[39] === o ? (Me = t[40]) : ((Me = [o]), (t[39] = o), (t[40] = Me)), (0, wa.useEffect)(je, Me));
  let Ne;
  t[41] !== o.view || t[42] !== x
    ? ((Ne = () => {
        if (x == null || !o.view.hasFocus() || !document.hasFocus()) return;
        let e = li(o.view),
          t = `${e?.x}\u0000${e?.y}`;
        ae.current !== t && ((ae.current = t), x(e));
      }),
      (t[41] = o.view),
      (t[42] = x),
      (t[43] = Ne))
    : (Ne = t[43]);
  let Q = Ne,
    Pe;
  t[44] === x
    ? (Pe = t[45])
    : ((Pe = () => {
        ((ae.current = null), x?.(null));
      }),
      (t[44] = x),
      (t[45] = Pe));
  let Ie = Pe,
    Le;
  (t[46] !== o || t[47] !== Y || t[48] !== Q
    ? ((Le = () => ({
        focus: () => o.focus(),
        blur: () => o.view.dom.blur(),
        submit: Y,
        isFilePickerOpen: () => ie.current,
        prepareEscape: () => {
          if (V.current?.cancel() || C.getState(o.view.state)?.active === !0) return !1;
          let e = o.getPersistedText();
          return (e.length > 0 && e.trim().length === 0 && o.setPromptText(``), !0);
        },
        updateCaretPoint: Q,
      })),
      (t[46] = o),
      (t[47] = Y),
      (t[48] = Q),
      (t[49] = Le))
    : (Le = t[49]),
    (0, wa.useImperativeHandle)(r, Le));
  let Re;
  t[50] !== o || t[51] !== S || t[52] !== Q
    ? ((Re = (e) => {
        if (e) {
          let e = o.getPersistedText();
          e !== U.current && ((U.current = e), S?.(e));
        }
        Q();
      }),
      (t[50] = o),
      (t[51] = S),
      (t[52] = Q),
      (t[53] = Re))
    : (Re = t[53]);
  let ze = (0, wa.useEffectEvent)(Re),
    Be;
  t[54] !== o.view || t[55] !== f
    ? ((Be = () => {
        (o.view.dom.setAttribute(`tabindex`, f ? `0` : `-1`), f || On(o.view));
      }),
      (t[54] = o.view),
      (t[55] = f),
      (t[56] = Be))
    : (Be = t[56]);
  let Ve;
  (t[57] !== o || t[58] !== f ? ((Ve = [o, f]), (t[57] = o), (t[58] = f), (t[59] = Ve)) : (Ve = t[59]),
    (0, wa.useEffect)(Be, Ve));
  let He;
  t[60] !== o.view.dom || t[61] !== w
    ? ((He = () =>
        St({
          axis: `height`,
          target: re.current,
          onChange: (e) => {
            let { height: t } = e,
              n = Number.parseFloat(window.getComputedStyle(o.view.dom).lineHeight);
            w(Math.max(0, t - n));
          },
        })),
      (t[60] = o.view.dom),
      (t[61] = w),
      (t[62] = He))
    : (He = t[62]);
  let Ue;
  (t[63] !== o || t[64] !== w ? ((Ue = [o, w]), (t[63] = o), (t[64] = w), (t[65] = Ue)) : (Ue = t[65]),
    (0, wa.useEffect)(He, Ue));
  let We;
  t[66] !== o.view || t[67] !== ze
    ? ((We = () => en(o.view, ze)), (t[66] = o.view), (t[67] = ze), (t[68] = We))
    : (We = t[68]);
  let Ge;
  (t[69] === o ? (Ge = t[70]) : ((Ge = [o]), (t[69] = o), (t[70] = Ge)), (0, wa.useEffect)(We, Ge));
  let Ke, qe;
  (t[71] !== o || t[72] !== u
    ? ((Ke = () => {
        u !== U.current && ((U.current = u), o.setPromptText(u));
      }),
      (qe = [u, o]),
      (t[71] = o),
      (t[72] = u),
      (t[73] = Ke),
      (t[74] = qe))
    : ((Ke = t[73]), (qe = t[74])),
    (0, wa.useEffect)(Ke, qe));
  let Je = (0, wa.useEffectEvent)(Ie),
    Xe = (0, wa.useEffectEvent)(Q),
    Ze;
  t[75] !== Je || t[76] !== Xe
    ? ((Ze = () => (
        window.addEventListener(`blur`, Je),
        window.addEventListener(`focus`, Xe),
        () => {
          (window.removeEventListener(`blur`, Je), window.removeEventListener(`focus`, Xe), Je());
        }
      )),
      (t[75] = Je),
      (t[76] = Xe),
      (t[77] = Ze))
    : (Ze = t[77]);
  let tt;
  (t[78] === Symbol.for(`react.memo_cache_sentinel`) ? ((tt = []), (t[78] = tt)) : (tt = t[78]),
    (0, wa.useEffect)(Ze, tt));
  let nt;
  t[79] === k
    ? (nt = t[80])
    : ((nt = k.formatMessage({
        id: `avatarOverlay.quickChatBar.send`,
        defaultMessage: `Send message`,
        description: `Button sending the draft in Mini Quick Chat`,
      })),
      (t[79] = k),
      (t[80] = nt));
  let rt = F == null ? `accent` : `composerPrimary`,
    it;
  t[81] !== u || t[82] !== p
    ? ((it = p || u.trim().length === 0), (t[81] = u), (t[82] = p), (t[83] = it))
    : (it = t[83]);
  let at = F == null && `text-white`,
    ot;
  t[84] === at ? (ot = t[85]) : ((ot = J(at)), (t[84] = at), (t[85] = ot));
  let st;
  t[86] === ot ? (st = t[87]) : ((st = (0, Ea.jsx)(Fe, { className: ot })), (t[86] = ot), (t[87] = st));
  let ct;
  t[88] !== Y || t[89] !== nt || t[90] !== rt || t[91] !== it || t[92] !== st
    ? ((ct = (0, Ea.jsx)(n, {
        "aria-label": nt,
        color: rt,
        disabled: it,
        radius: `full`,
        size: `compact`,
        uniform: !0,
        tabIndex: -1,
        onClick: Y,
        children: st,
      })),
      (t[88] = Y),
      (t[89] = nt),
      (t[90] = rt),
      (t[91] = it),
      (t[92] = st),
      (t[93] = ct))
    : (ct = t[93]);
  let lt = ct,
    ut = K.ui?.active === !0,
    dt;
  t[94] !== o || t[95] !== le || t[96] !== be || t[97] !== ut
    ? ((dt = (0, Ea.jsx)(un, {
        composerController: o,
        hostId: le,
        includePluginCatalog: !1,
        roots: be,
        shouldLoadPlugins: ut,
      })),
      (t[94] = o),
      (t[95] = le),
      (t[96] = be),
      (t[97] = ut),
      (t[98] = dt))
    : (dt = t[98]);
  let ft;
  t[99] !== s ||
  t[100] !== le ||
  t[101] !== f ||
  t[102] !== M ||
  t[103] !== K ||
  t[104] !== h ||
  t[105] !== g ||
  t[106] !== Te ||
  t[107] !== j ||
  t[108] !== be ||
  t[109] !== ve ||
  t[110] !== q
    ? ((ft =
        h == null || !f
          ? null
          : (0, Ta.createPortal)(
              (0, Ea.jsxs)(`div`, {
                className: `contents`,
                onPointerDown: Sa,
                children: [
                  j == null
                    ? null
                    : (0, Ea.jsx)(fa, {
                        isActive: K.ui?.active === !0,
                        placement: g,
                        children:
                          K.ui?.active &&
                          (0, Ea.jsx)(In, {
                            appshotThreadTarget: j,
                            attachButton: s == null ? null : { onClick: () => void Te() },
                            fixedSectionHeaders: !0,
                            mentions: K,
                            placement: g,
                            pluginHostId: j.hostId,
                          }),
                      }),
                  (0, Ea.jsx)(Qe, {
                    ContextualSuggestionOverlay: fa,
                    contextualSuggestionUi: K.ui,
                    contextualSuggestions: M
                      ? void 0
                      : {
                          fixedSectionHeaders: !0,
                          hostId: le,
                          selectedModel: ve,
                          fileSearchRootPaths: be,
                          skillRoots: be,
                          onAddContext: K.addMention,
                          onRequestClose: K.closeAutocomplete,
                          onUpdateSelectedMention: K.setSelectedMention,
                        },
                    skillSuggestions: { autocomplete: q, roots: be, hostId: le, selectedModel: ve },
                    placement: g,
                  }),
                ],
              }),
              h,
            )),
      (t[99] = s),
      (t[100] = le),
      (t[101] = f),
      (t[102] = M),
      (t[103] = K),
      (t[104] = h),
      (t[105] = g),
      (t[106] = Te),
      (t[107] = j),
      (t[108] = be),
      (t[109] = ve),
      (t[110] = q),
      (t[111] = ft))
    : (ft = t[111]);
  let pt;
  t[112] !== o ||
  t[113] !== s ||
  t[114] !== d ||
  t[115] !== k ||
  t[116] !== M ||
  t[117] !== K.ui?.active ||
  t[118] !== v ||
  t[119] !== O ||
  t[120] !== m
    ? ((pt =
        m && !d
          ? (0, Ea.jsx)(H.div, {
              className: `shrink-0 self-end`,
              style: { opacity: v },
              onPointerDown: xa,
              children: (0, Ea.jsx)(n, {
                className: `enabled:active:hover:opacity-80`,
                "aria-label": k.formatMessage({
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
                  M ? Fn(O, o, s != null) : o.toggleContextSuggestions();
                },
                children: (0, Ea.jsx)(we, {}),
              }),
            })
          : null),
      (t[112] = o),
      (t[113] = s),
      (t[114] = d),
      (t[115] = k),
      (t[116] = M),
      (t[117] = K.ui?.active),
      (t[118] = v),
      (t[119] = O),
      (t[120] = m),
      (t[121] = pt))
    : (pt = t[121]);
  let mt = !f && `pointer-events-none`,
    ht = d && `invisible`,
    gt;
  t[122] !== mt || t[123] !== ht
    ? ((gt = J(`min-w-0 cursor-text font-medium`, Ci.editor, mt, ht)),
      (t[122] = mt),
      (t[123] = ht),
      (t[124] = gt))
    : (gt = t[124]);
  let _t;
  t[125] === v ? (_t = t[126]) : ((_t = { opacity: v }), (t[125] = v), (t[126] = _t));
  let vt;
  t[127] !== D || t[128] !== Q
    ? ((vt = () => {
        (D(!1), Q());
      }),
      (t[127] = D),
      (t[128] = Q),
      (t[129] = vt))
    : (vt = t[129]);
  let yt;
  t[130] !== l || t[131] !== o || t[132] !== D
    ? ((yt = (e) => {
        e.defaultPrevented ||
          e.nativeEvent.isComposing ||
          (e.key === `ArrowRight` && o.getPersistedText().length === 0 && l
            ? (e.preventDefault(), D(!0))
            : e.key === `ArrowLeft` && D(!1));
      }),
      (t[130] = l),
      (t[131] = o),
      (t[132] = D),
      (t[133] = yt))
    : (yt = t[133]);
  let bt;
  t[134] !== o.view || t[135] !== f || t[136] !== K || t[137] !== T
    ? ((bt = (e) => {
        if (e.button !== 0) return;
        K.ui?.activation === `synthetic` && K.closeAutocomplete();
        let t = o.view,
          n = G.atEnd(t.state.doc),
          r = t.coordsAtPos(n.head);
        if (
          !(window.getComputedStyle(t.dom).direction === `rtl` ? e.clientX < r.left : e.clientX > r.right) ||
          e.clientY < r.top ||
          e.clientY > r.bottom
        ) {
          (f && t.hasFocus() && !document.hasFocus() && T(), e.stopPropagation());
          return;
        }
        t.dispatch(t.state.tr.setSelection(n));
      }),
      (t[134] = o.view),
      (t[135] = f),
      (t[136] = K),
      (t[137] = T),
      (t[138] = bt))
    : (bt = t[138]);
  let xt;
  t[139] !== te ||
  t[140] !== o ||
  t[141] !== u ||
  t[142] !== d ||
  t[143] !== p ||
  t[144] !== T ||
  t[145] !== j ||
  t[146] !== lt ||
  t[147] !== m
    ? ((xt =
        j != null && m && !d && te != null
          ? (0, Ea.jsx)(
              ra,
              {
                ref: V,
                actionContainer: te,
                editor: o,
                hasText: u.trim().length > 0,
                isSending: p,
                onRequestFocus: T,
                sendButton: lt,
              },
              `${j.hostId}:${j.conversationId}`,
            )
          : null),
      (t[139] = te),
      (t[140] = o),
      (t[141] = u),
      (t[142] = d),
      (t[143] = p),
      (t[144] = T),
      (t[145] = j),
      (t[146] = lt),
      (t[147] = m),
      (t[148] = xt))
    : (xt = t[148]);
  let Ct = !i || !(W || a),
    wt;
  t[149] !== k || t[150] !== j
    ? ((wt =
        j == null
          ? k.formatMessage({
              id: `avatarOverlay.quickChatBar.startNewChat`,
              defaultMessage: `Start new chat`,
              description: `Placeholder and accessible label for the floating Quick Chat bar, shown alone or below a pet`,
            })
          : k.formatMessage(ta, { name: j.name, hasName: !fn(j.name) })),
      (t[149] = k),
      (t[150] = j),
      (t[151] = wt))
    : (wt = t[151]);
  let Tt;
  t[152] !== K.handleMentionEvent || t[153] !== q.handleMentionEvent
    ? ((Tt = (e) => bn(e, { onAtMention: K.handleMentionEvent, onSkillMention: q.handleMentionEvent })),
      (t[152] = K.handleMentionEvent),
      (t[153] = q.handleMentionEvent),
      (t[154] = Tt))
    : (Tt = t[154]);
  let Dt;
  t[155] !== D || t[156] !== Q
    ? ((Dt = () => {
        (D(!1), Q());
      }),
      (t[155] = D),
      (t[156] = Q),
      (t[157] = Dt))
    : (Dt = t[157]);
  let Ot;
  t[158] !== o || t[159] !== Y || t[160] !== Ct || t[161] !== wt || t[162] !== Tt || t[163] !== Dt
    ? ((Ot = (0, Ea.jsx)(kn, {
        className: Ci.editorInput,
        composerController: o,
        disableAutoFocus: Ct,
        minHeight: `0`,
        placeholder: wt,
        onSuggestionHandler: Tt,
        onSubmit: Y,
        onUserInput: Dt,
      })),
      (t[158] = o),
      (t[159] = Y),
      (t[160] = Ct),
      (t[161] = wt),
      (t[162] = Tt),
      (t[163] = Dt),
      (t[164] = Ot))
    : (Ot = t[164]);
  let kt;
  t[165] !== Ie ||
  t[166] !== gt ||
  t[167] !== _t ||
  t[168] !== vt ||
  t[169] !== yt ||
  t[170] !== bt ||
  t[171] !== xt ||
  t[172] !== Ot ||
  t[173] !== Q
    ? ((kt = (0, Ea.jsxs)(H.div, {
        ref: re,
        className: gt,
        role: `presentation`,
        style: _t,
        onBlur: Ie,
        onFocus: vt,
        onKeyDown: yt,
        onContextMenu: ba,
        onPointerDown: bt,
        onScrollCapture: Q,
        onKeyUp: Q,
        onPointerUp: Q,
        children: [xt, Ot],
      })),
      (t[165] = Ie),
      (t[166] = gt),
      (t[167] = _t),
      (t[168] = vt),
      (t[169] = yt),
      (t[170] = bt),
      (t[171] = xt),
      (t[172] = Ot),
      (t[173] = Q),
      (t[174] = kt))
    : (kt = t[174]);
  let At;
  t[175] !== d || t[176] !== M || t[177] !== v || t[178] !== lt || t[179] !== m || t[180] !== B
    ? ((At =
        m && !d
          ? (0, Ea.jsx)(H.div, {
              className: `shrink-0 self-end`,
              ref: ne,
              "data-quick-chat-composer-action": `true`,
              style: { ...B, opacity: v },
              onPointerDown: ya,
              children: M ? null : lt,
            })
          : null),
      (t[175] = d),
      (t[176] = M),
      (t[177] = v),
      (t[178] = lt),
      (t[179] = m),
      (t[180] = B),
      (t[181] = At))
    : (At = t[181]);
  let Nt;
  return (
    t[182] !== o || t[183] !== dt || t[184] !== ft || t[185] !== pt || t[186] !== kt || t[187] !== At
      ? ((Nt = (0, Ea.jsxs)(Ut.Provider, { value: o, children: [dt, ft, pt, kt, At] })),
        (t[182] = o),
        (t[183] = dt),
        (t[184] = ft),
        (t[185] = pt),
        (t[186] = kt),
        (t[187] = At),
        (t[188] = Nt))
      : (Nt = t[188]),
    Nt
  );
}
function ya(e) {
  (e.preventDefault(), e.stopPropagation());
}
function ba(e) {
  return e.stopPropagation();
}
function xa(e) {
  (e.preventDefault(), e.stopPropagation());
}
function Sa(e) {
  return e.stopPropagation();
}
var Ca, wa, Ta, Ea;
function Da() {
  return (Da = e(() => {
    ((Ca = Re()),
      B(),
      le(),
      A(),
      ve(),
      Z(),
      (wa = qe()),
      (Ta = Ge()),
      pe(),
      _n(),
      ut(),
      nt(),
      hn(),
      Ot(),
      k(),
      Sn(),
      Kt(),
      qt(),
      Me(),
      I(),
      _e(),
      Ct(),
      Nn(),
      xn(),
      Ht(),
      Pn(),
      Ln(),
      na(),
      tr(),
      Zt(),
      Te(),
      Be(),
      cn(),
      Tt(),
      ln(),
      ca(),
      _a(),
      wi(),
      (Ea = He()));
  }))();
}
var Oa, ka;
function Aa() {
  return (Aa = e(() => {
    (qe(),
      (Oa = He()),
      (ka = (e) =>
        (0, Oa.jsxs)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, Oa.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M1.96202 1.96191C2.16693 1.757 2.49915 1.75722 2.7042 1.96191L14.0372 13.2949C14.2422 13.4999 14.2422 13.8321 14.0372 14.0371C13.8322 14.242 13.5 14.2421 13.295 14.0371L11.2687 12.0107C10.473 12.5542 9.53649 12.9058 8.52549 12.999V14.583C8.52549 14.873 8.29005 15.1084 8.0001 15.1084C7.71021 15.1083 7.47471 14.8729 7.47471 14.583V13.002C5.24362 12.8085 3.37268 11.3583 2.56749 9.36328C2.4592 9.09447 2.58971 8.78814 2.8585 8.67969C3.1273 8.57146 3.43365 8.70194 3.54209 8.9707C4.25385 10.7338 5.97585 11.9755 7.98448 11.9756C8.91193 11.9755 9.77644 11.7096 10.5099 11.252L9.31846 10.0605C8.916 10.2434 8.4697 10.3476 8.0001 10.3477C6.23774 10.3475 4.80801 8.91859 4.80772 7.15625V5.5498L1.96202 2.7041C1.75736 2.49909 1.75722 2.16684 1.96202 1.96191ZM5.8585 7.15625C5.85879 8.33869 6.81764 9.29765 8.0001 9.29785C8.17114 9.29783 8.3372 9.27609 8.4962 9.23828L5.8585 6.60059V7.15625Z`,
              fill: `currentColor`,
            }),
            (0, Oa.jsx)(`path`, {
              d: `M12.4581 8.97266C12.5655 8.70333 12.8714 8.57229 13.1407 8.67969C13.4097 8.78725 13.5409 9.09221 13.4337 9.36133C13.3999 9.44596 13.3635 9.5297 13.3243 9.61133C13.1988 9.87248 12.8844 9.98277 12.6231 9.85742C12.3622 9.73197 12.2521 9.41839 12.3771 9.15723C12.4059 9.09706 12.4332 9.03504 12.4581 8.97266Z`,
              fill: `currentColor`,
            }),
            (0, Oa.jsx)(`path`, {
              d: `M8.00108 0.974609C9.76343 0.975025 11.1925 2.40454 11.1925 4.16699V6.14355C11.1922 6.43318 10.9567 6.6678 10.6671 6.66797C10.3774 6.66786 10.1429 6.43322 10.1427 6.14355V4.16699C10.1427 2.98444 9.18354 2.02581 8.00108 2.02539C7.54882 2.02539 7.13186 2.17328 6.79795 2.4209C6.56514 2.59334 6.23627 2.54417 6.06358 2.31152C5.89106 2.07866 5.94016 1.74983 6.17295 1.57715C6.68184 1.19983 7.31639 0.974609 8.00108 0.974609Z`,
              fill: `currentColor`,
            }),
          ],
        })));
  }))();
}
var ja, Ma;
function Na() {
  return (Na = e(() => {
    (qe(),
      (ja = He()),
      (Ma = (e) =>
        (0, ja.jsx)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, ja.jsx)(`path`, {
            d: `M11.3493 11.5281V12.063C11.3493 13.1798 10.0585 13.8018 9.18511 13.1058L7.23518 11.5521C7.05811 11.411 6.83841 11.3342 6.61201 11.3342H5.49994C4.67151 11.3342 3.99994 10.6626 3.99994 9.83422V6.55767C3.99994 5.9113 4.17933 5.32893 4.64255 4.98367M7.69879 4.08067L9.19314 2.87858C10.0513 2.25762 11.3493 2.61663 11.3493 4.20164V7.68849M2.4375 2.43744L13.6875 13.6874`,
            stroke: `currentColor`,
            strokeWidth: 1.05,
            strokeLinecap: `round`,
          }),
        })));
  }))();
}
function Pa(e) {
  let t = (0, Ra.c)(30),
    { reduceMotion: n } = e,
    r = (0, za.useId)(),
    i = (0, za.useId)(),
    [a, o] = (0, za.useState)(!1),
    s = n ? 0.15 : Ga,
    c = !n && `pulsing-dot`,
    l;
  t[0] === c ? (l = t[1]) : ((l = J(`flex size-10 items-center justify-center`, c)), (t[0] = c), (t[1] = l));
  let u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = { animationDelay: `${Ga}s` }), (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] !== s || t[4] !== n
    ? ((d = n
        ? null
        : (0, Ba.jsx)(`animate`, {
            attributeName: `stdDeviation`,
            calcMode: `linear`,
            dur: `${s}s`,
            fill: `freeze`,
            keyTimes: Ka.join(`;`),
            values: Ka.map(Fa).join(`;`),
          })),
      (t[3] = s),
      (t[4] = n),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] === d
    ? (f = t[7])
    : ((f = (0, Ba.jsx)(`feGaussianBlur`, { in: `SourceGraphic`, result: `blur`, children: d })),
      (t[6] = d),
      (t[7] = f));
  let p;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Ba.jsx)(`feColorMatrix`, {
        in: `blur`,
        type: `matrix`,
        values: `1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 24 -10`,
      })),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] !== r || t[10] !== f
    ? ((m = (0, Ba.jsx)(`defs`, {
        children: (0, Ba.jsxs)(`filter`, {
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
    ? ((g = qa.map((e, t) => {
        let n = Math.abs(t - (qa.length - 1) / 2),
          r = t === Math.floor(qa.length / 2),
          i = 0.14 - n * 0.014,
          c = 0.2 + n * 0.018,
          l = 0.26 + n * 0.018,
          u = Wa + e.x + e.width / 2,
          d = Wa + e.y + e.height / 2,
          f = Ka.map((t) => Ia(e.width, Ha, La(c, 1, t))),
          p = Ka.map((t) => Ia(e.height, Ha, La(l, 1, t))),
          m = Ka.map((e, t) => {
            let n = La(i, 0.72, e);
            return Ia(u, Ua, n) - f[t] / 2;
          }),
          h = Ka.map((e, t) => Ia(d, Ua, e) - p[t] / 2);
        return (0, Ba.jsx)(
          H.rect,
          {
            animate: { height: p, rx: f.map((e, t) => Math.min(e, p[t]) / 2), width: f, x: m, y: h },
            display: a && !r ? `none` : void 0,
            initial: { height: e.height, rx: e.width / 2, width: e.width, x: Wa + e.x, y: Wa + e.y },
            onAnimationComplete: r
              ? () => {
                  o(!0);
                }
              : void 0,
            transition: { duration: s, ease: `linear`, times: Ka },
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
    ? ((_ = (0, Ba.jsx)(`g`, { fill: `white`, filter: h, children: g })),
      (t[15] = h),
      (t[16] = g),
      (t[17] = _))
    : (_ = t[17]);
  let v;
  t[18] !== i || t[19] !== _
    ? ((v = (0, Ba.jsx)(`mask`, {
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
    : ((b = (0, Ba.jsx)(`rect`, { fill: `currentColor`, height: `40`, mask: y, width: `40` })),
      (t[21] = y),
      (t[22] = b));
  let x;
  t[23] !== v || t[24] !== b || t[25] !== m
    ? ((x = (0, Ba.jsxs)(`svg`, {
        "aria-hidden": `true`,
        className: `size-10`,
        viewBox: `0 0 40 40`,
        children: [m, v, b],
      })),
      (t[23] = v),
      (t[24] = b),
      (t[25] = m),
      (t[26] = x))
    : (x = t[26]);
  let S;
  return (
    t[27] !== x || t[28] !== l
      ? ((S = (0, Ba.jsx)(`span`, { className: l, style: u, children: x })),
        (t[27] = x),
        (t[28] = l),
        (t[29] = S))
      : (S = t[29]),
    S
  );
}
function Fa(e) {
  return Math.sin(e * Math.PI) * 6 * Va;
}
function Ia(e, t, n) {
  return e + (t - e) * n;
}
function La(e, t, n) {
  let r = Math.min(Math.max((n - e) / (t - e), 0), 1);
  return r * r * (3 - 2 * r);
}
var Ra, za, Ba, Va, Ha, Ua, Wa, Ga, Ka, qa;
function Ja() {
  return (Ja = e(() => {
    ((Ra = Re()),
      B(),
      le(),
      (za = qe()),
      (Ba = He()),
      (Va = 40 / 112),
      (Ha = 30 * Va),
      (Ua = 20),
      (Wa = 12),
      (Ga = 0.36),
      (Ka = Array.from({ length: 21 }, (e, t) => t / 20)),
      (qa = [
        { height: 5.16699, width: 1.5, x: 2.25, y: 5.41675 },
        { height: 12.16695, width: 1.5, x: 5.69434, y: 1.91675 },
        { height: 8.16694, width: 1.5, x: 9.13867, y: 3.74976 },
        { height: 4.16695, width: 1.5, x: 12.584, y: 5.91675 },
      ]));
  }))();
}
function Ya(e) {
  let t = (0, Xa.c)(74),
    {
      audioControlOpacity: n,
      audioControlWidth: r,
      reduceMotion: i,
      showsAudioControls: a,
      voice: o,
      onReturnToVoiceControls: s,
    } = e,
    c = ee(),
    l = !a || void 0,
    u;
  t[0] !== c || t[1] !== o.microphoneMuted
    ? ((u = c.formatMessage(o.microphoneMuted ? Qa.unmuteMicrophone : Qa.muteMicrophone)),
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
        ? (0, Za.jsx)(ka, { className: `icon-sm shrink-0` })
        : (0, Za.jsx)(sn, { className: `icon-sm shrink-0` })),
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
    ? ((h = (0, Za.jsx)(H.button, {
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
        ? (0, Za.jsx)(H.span, {
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
        ? c.formatMessage(Qa.stop)
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
  let x;
  t[24] === i ? (x = t[25]) : ((x = !i && { scale: Ha / 28 }), (t[24] = i), (t[25] = x));
  let S;
  t[26] === i ? (S = t[27]) : ((S = i ? { duration: 0 } : zn.filter), (t[26] = i), (t[27] = S));
  let C;
  t[28] !== o.activity || t[29] !== o.phase || t[30] !== o.presentationAnchorRef
    ? ((C = (0, Za.jsx)(pn, {
        glowEnabled: !1,
        placement: `center`,
        presentationAnchorRef: o.presentationAnchorRef,
        phase: o.phase,
        voiceActivity: o.activity,
      })),
      (t[28] = o.activity),
      (t[29] = o.phase),
      (t[30] = o.presentationAnchorRef),
      (t[31] = C))
    : (C = t[31]);
  let w;
  t[32] !== C || t[33] !== o.handoff || t[34] !== o.usesPresentationFadeTransition
    ? ((w = (0, Za.jsx)(Yn, {
        className: `pointer-events-none relative size-full overflow-hidden rounded-full group-hover:opacity-70`,
        handoff: o.handoff,
        surface: `global-overlay`,
        usesFadeTransition: o.usesPresentationFadeTransition,
        children: C,
      })),
      (t[32] = C),
      (t[33] = o.handoff),
      (t[34] = o.usesPresentationFadeTransition),
      (t[35] = w))
    : (w = t[35]);
  let T;
  t[36] === a
    ? (T = t[37])
    : ((T = a
        ? (0, Za.jsx)(Ke, {
            className: `icon-sm pointer-events-none absolute inset-0 m-auto opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100`,
          })
        : null),
      (t[36] = a),
      (t[37] = T));
  let E;
  t[38] !== x || t[39] !== S || t[40] !== w || t[41] !== T
    ? ((E = (0, Za.jsxs)(H.span, {
        animate: b,
        className: `relative size-7 shrink-0`,
        initial: x,
        transition: S,
        children: [w, T],
      })),
      (t[38] = x),
      (t[39] = S),
      (t[40] = w),
      (t[41] = T),
      (t[42] = E))
    : (E = t[42]);
  let D;
  t[43] !== v || t[44] !== y || t[45] !== E || t[46] !== _
    ? ((D = (0, Za.jsx)(`button`, {
        "aria-label": _,
        className: `group relative flex h-full min-w-0 flex-1 cursor-interaction items-center justify-center text-secondary focus-visible:outline-none`,
        "data-quick-chat-control": v,
        "data-quick-chat-return-to-voice": !0,
        type: `button`,
        onClick: y,
        children: E,
      })),
      (t[43] = v),
      (t[44] = y),
      (t[45] = E),
      (t[46] = _),
      (t[47] = D))
    : (D = t[47]);
  let O;
  t[48] !== r || t[49] !== a
    ? ((O = a
        ? (0, Za.jsx)(H.span, {
            "aria-hidden": `true`,
            className: `pointer-events-none absolute inset-y-2 w-px bg-border`,
            "data-quick-chat-divider": `voice`,
            style: { right: r },
          })
        : null),
      (t[48] = r),
      (t[49] = a),
      (t[50] = O))
    : (O = t[50]);
  let k = !a || void 0,
    A;
  t[51] !== c || t[52] !== o.muted
    ? ((A = c.formatMessage(o.muted ? Qa.unmuteOutput : Qa.muteOutput)),
      (t[51] = c),
      (t[52] = o.muted),
      (t[53] = A))
    : (A = t[53]);
  let j = o.phase !== `active`,
    M = !a,
    N;
  t[54] !== n || t[55] !== r
    ? ((N = { opacity: n, width: r }), (t[54] = n), (t[55] = r), (t[56] = N))
    : (N = t[56]);
  let P;
  t[57] === o.muted
    ? (P = t[58])
    : ((P = o.muted
        ? (0, Za.jsx)(Ma, { className: `icon-sm shrink-0` })
        : (0, Za.jsx)(qn, { className: `icon-sm shrink-0` })),
      (t[57] = o.muted),
      (t[58] = P));
  let F;
  t[59] !== k ||
  t[60] !== A ||
  t[61] !== j ||
  t[62] !== M ||
  t[63] !== N ||
  t[64] !== P ||
  t[65] !== o.muted ||
  t[66] !== o.onToggleMute
    ? ((F = (0, Za.jsx)(H.button, {
        "aria-hidden": k,
        "aria-label": A,
        "aria-pressed": o.muted,
        className: `flex h-full shrink-0 cursor-interaction items-center justify-center overflow-hidden text-default focus-visible:outline-none`,
        "data-quick-chat-control": !0,
        disabled: j,
        inert: M,
        initial: !1,
        style: N,
        type: `button`,
        onClick: o.onToggleMute,
        children: P,
      })),
      (t[59] = k),
      (t[60] = A),
      (t[61] = j),
      (t[62] = M),
      (t[63] = N),
      (t[64] = P),
      (t[65] = o.muted),
      (t[66] = o.onToggleMute),
      (t[67] = F))
    : (F = t[67]);
  let I;
  return (
    t[68] !== D || t[69] !== O || t[70] !== F || t[71] !== h || t[72] !== g
      ? ((I = (0, Za.jsxs)(`div`, {
          className: `relative flex size-full items-center rounded-full select-none`,
          children: [h, g, D, O, F],
        })),
        (t[68] = D),
        (t[69] = O),
        (t[70] = F),
        (t[71] = h),
        (t[72] = g),
        (t[73] = I))
      : (I = t[73]),
    I
  );
}
var Xa, Za, Qa;
function $a() {
  return ($a = e(() => {
    ((Xa = Re()),
      le(),
      pe(),
      Vn(),
      Aa(),
      Xt(),
      Na(),
      Kn(),
      ae(),
      ot(),
      Jn(),
      Ja(),
      (Za = He()),
      (Qa = i({
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
function eo(e) {
  let t = (0, to.c)(19),
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
  let c = (0, no.useRef)(null),
    l = Ae(),
    u,
    d;
  (t[7] !== n || t[8] !== r || t[9] !== i || t[10] !== a || t[11] !== l
    ? ((u = () => {
        let e = c.current;
        if (e == null || !i || l) return;
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
          u = () => {
            let r = a?.current,
              i = n?.current.header,
              c = e.getBoundingClientRect();
            if ((r != null || i != null) && c.width > 0 && c.height > 0) {
              (a != null && (a.current = null), n != null && (n.current.header = null));
              let l = e.currentCSSZoom || 1,
                u = window.screenX,
                d = window.screenY,
                f = (t) => {
                  r == null ||
                    r.width <= 0 ||
                    r.height <= 0 ||
                    ((e.style.width = `${(r.width + (c.width - r.width) * t) / l}px`),
                    (e.style.height = `${(r.height + (c.height - r.height) * t) / l}px`),
                    (e.style.transform = `translate(${((r.left - u - c.left) / l) * (1 - t)}px, ${((r.top - d - c.top) / l) * (1 - t)}px)`));
                };
              f(0);
              let p = o?.getBoundingClientRect(),
                m = (t) => {
                  if ((f(t), o != null && i != null && p != null && p.width > 0 && p.height > 0)) {
                    let n = 1 - t;
                    ((e.style.overflow = `visible`),
                      (o.style.transformOrigin = `top left`),
                      (o.style.transform = `translate(${((i.left - u - p.left) / l) * n}px, ${((i.top - d - p.top) / l) * n}px) scale(${1 + (i.width / p.width - 1) * n}, ${1 + (i.height / p.height - 1) * n})`));
                  }
                };
              (m(0), (t = fe(0, 1, { ...Tr(!1, !0), onUpdate: m, onComplete: s })));
            }
            e.style.removeProperty(`visibility`);
          };
        return (
          Oe.postRender(u),
          () => {
            (xe(u), t?.stop(), s());
          }
        );
      }),
      (d = [n, r, i, a, l]),
      (t[7] = n),
      (t[8] = r),
      (t[9] = i),
      (t[10] = a),
      (t[11] = l),
      (t[12] = u),
      (t[13] = d))
    : ((u = t[12]), (d = t[13])),
    (0, no.useLayoutEffect)(u, d));
  let f;
  t[14] === s ? (f = t[15]) : ((f = Se(s, c)), (t[14] = s), (t[15] = f));
  let p;
  return (
    t[16] !== o || t[17] !== f
      ? ((p = (0, ro.jsx)(Ft, { ...o, ref: f })), (t[16] = o), (t[17] = f), (t[18] = p))
      : (p = t[18]),
    p
  );
}
var to, no, ro;
function io() {
  return (io = e(() => {
    ((to = Re()), re(), ge(), Ce(), (no = qe()), te(), wn(), Er(), (ro = He()));
  }))();
}
function ao(e) {
  let t = ki(e),
    n = e.layout.quickChat?.workArea ?? e.layout.visibleBounds,
    r = oo({ barTop: t.bar.top, composerHeight: t.target.composerHeight, workArea: n }),
    i = t.bar.left + t.target.composerLeft;
  if (r.expandsFromTop) {
    let r = ki({
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
    i = (0, so.default)(
      a - t.target.composerWidth / 2,
      n.left + 16,
      n.left + n.width - t.target.composerWidth - 16,
    );
  }
  return { ...r, composerLeft: i };
}
function oo({ barTop: e, composerHeight: t, workArea: n }) {
  let r = Math.max(0, Math.min(Math.max(n.height / 2, 300), n.height - 40 - 32 - 20)),
    i = n.top + 16,
    a = e - i < r + 20,
    o = (0, so.default)(e, i + 20, n.top + n.height - 16 - 40),
    s = a ? r : Math.min(r, Math.max(0, o - i - 20)),
    c = a ? Math.max(i, Math.min(e, n.top + n.height - 16 - r - 20 - 40)) : o - s - 20;
  return { height: s, top: c, composerTop: c + s + 20 - Math.max(0, t - 40), expandsFromTop: a };
}
var so;
function co() {
  return (co = e(() => {
    ((so = t(v(), 1)), Z(), Ni());
  }))();
}
function lo(e) {
  let t = (0, ho.c)(247),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    m,
    h,
    g,
    _,
    v,
    y,
    b,
    x;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]),
      (d = t[10]),
      (f = t[11]),
      (m = t[12]),
      (h = t[13]),
      (g = t[14]),
      (_ = t[15]),
      (v = t[16]),
      (y = t[17]),
      (b = t[18]),
      (x = t[19]))
    : (({
        animatesPresentation: r,
        appshotCaptureResponse: i,
        usesAppshotHandoff: x,
        hasPresentedAppshot: s,
        isMinimized: c,
        isTranscriptComposer: l,
        presentation: m,
        compact: o,
        mascot: u,
        petControlsAppearance: d,
        stashAppearance: y,
        stashEdge: b,
        activityBadgeDigits: n,
        prefersReducedMotion: f,
        presentedComposerHeight: g,
        presentedComposerTop: _,
        presentedExpansion: v,
        children: a,
        ...h
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = m),
      (t[13] = h),
      (t[14] = g),
      (t[15] = _),
      (t[16] = v),
      (t[17] = y),
      (t[18] = b),
      (t[19] = x));
  let S = h.isOrbitTranscript === !0,
    { left: C, top: T, width: E } = m.bar,
    D = u.left + u.width / 2,
    O = C - D,
    k = T - u.top,
    A;
  t[20] !== O || t[21] !== k ? ((A = { x: O, y: k }), (t[20] = O), (t[21] = k), (t[22] = A)) : (A = t[22]);
  let j = A,
    M = X(j.x),
    N = X(j.y),
    { target: P } = m,
    F = m.state === `composing`,
    I = m.state === `voice`,
    L = m.state === `expanded` || F,
    ee = Yr(d) / o.width,
    R = X(+!c),
    z = v ?? R,
    B;
  t[23] !== ee || t[24] !== z
    ? ((B = () => ee + (1 - ee) * z.get()), (t[23] = ee), (t[24] = z), (t[25] = B))
    : (B = t[25]);
  let V = W(B),
    H;
  t[26] !== d.compactControlHeight || t[27] !== z
    ? ((H = () => Di(z.get(), d.compactControlHeight, window.devicePixelRatio)),
      (t[26] = d.compactControlHeight),
      (t[27] = z),
      (t[28] = H))
    : (H = t[28]);
  let te = W(H),
    ne = X(+!c),
    re;
  t[29] !== S || t[30] !== L ? ((re = Tr(L, S)), (t[29] = S), (t[30] = L), (t[31] = re)) : (re = t[31]);
  let ie = re,
    ae = i?.transitionSpringDampingFraction,
    oe = i?.transitionSpringResponse,
    U;
  t[32] !== ae || t[33] !== oe
    ? ((U = Rt({ transitionSpringDampingFraction: ae, transitionSpringResponse: oe })),
      (t[32] = ae),
      (t[33] = oe),
      (t[34] = U))
    : (U = t[34]);
  let se = U,
    G = x ? se : ie,
    K = X(P.composerLeft + P.composerWidth / 2),
    q = X(P.composerWidth),
    J;
  t[35] !== K || t[36] !== q
    ? ((J = () => K.get() - q.get() / 2), (t[35] = K), (t[36] = q), (t[37] = J))
    : (J = t[37]);
  let ce = W(J),
    le = X(P.composerHeight),
    ue = g ?? le,
    de = X(P.composerTop),
    pe = _ ?? de,
    me = X(P.stashProgress),
    he;
  t[38] !== ue || t[39] !== pe || t[40] !== me
    ? ((he = function () {
        return (pe.get() + ue.get() - 40) * (1 - me.get());
      }),
      (t[38] = ue),
      (t[39] = pe),
      (t[40] = me),
      (t[41] = he))
    : (he = t[41]);
  let ge = W(he),
    _e = X(P.composerRadius),
    ve = X(P.composerEdgeBleed),
    ye = W(me, mo),
    be = W(me, po),
    xe = X(P.voiceLeft),
    Y = X(P.voiceWidth),
    Se;
  t[42] === Y
    ? (Se = t[43])
    : ((Se = () => Math.max(0, ((Y.get() - 40) * bo) / 84)), (t[42] = Y), (t[43] = Se));
  let Ce = W(Se),
    we;
  t[44] === Ce
    ? (we = t[45])
    : ((we = () => (0, go.default)((Ce.get() / bo - 0.5) * 2, 0, 1)), (t[44] = Ce), (t[45] = we));
  let Te = W(we),
    Ee = X(P.badgeLeft),
    De = m.hasDetachedActivity && m.state !== `stashed`,
    Z = X(+!De),
    Oe = X(+!De),
    ke = X(P.orbScale),
    Ae = X(c ? 0 : P.compactProgress),
    je;
  t[46] !== ce || t[47] !== q || t[48] !== me || t[49] !== xe || t[50] !== y.glassSpacing
    ? ((je = function () {
        let e = xe.get() - ce.get() - q.get(),
          t = Math.min(w.compactGlassSpacing, Math.max(0, w.hoverControlGap - e)),
          n = (0, go.default)(me.get(), 0, 1);
        return t + (y.glassSpacing - t) * n;
      }),
      (t[46] = ce),
      (t[47] = q),
      (t[48] = me),
      (t[49] = xe),
      (t[50] = y.glassSpacing),
      (t[51] = je))
    : (je = t[51]);
  let Me = je,
    Ne;
  t[52] !== Me || t[53] !== Ee || t[54] !== ce || t[55] !== q || t[56] !== xe || t[57] !== Y
    ? ((Ne = function (e) {
        let t = { voice: xe, badge: Ee }[e].get(),
          n = e === `voice` ? Y.get() : 40,
          r = Math.min(ce.get() + q.get(), t + n) - Math.max(ce.get(), t),
          i = Me(),
          a = (0, go.default)((r + i) / (n + i), 0, 1),
          o = (0, go.default)((a - vo) / 0.5700000000000001, 0, 1);
        return 40 + -20 * (o * o * (3 - 2 * o)) ** yo;
      }),
      (t[52] = Me),
      (t[53] = Ee),
      (t[54] = ce),
      (t[55] = q),
      (t[56] = xe),
      (t[57] = Y),
      (t[58] = Ne))
    : (Ne = t[58]);
  let Q = Ne,
    Pe;
  t[59] === Q ? (Pe = t[60]) : ((Pe = () => Q(`voice`)), (t[59] = Q), (t[60] = Pe));
  let Fe = W(Pe),
    Ie;
  t[61] === Q ? (Ie = t[62]) : ((Ie = () => Q(`badge`)), (t[61] = Q), (t[62] = Ie));
  let Le = W(Ie),
    Re = X(P.inputOpacity),
    ze = X(P.orbIconOpacity),
    Be = X(P.orbIconBlurRadius),
    Ve = W(Be, Bn),
    He;
  t[63] !== m.hasDetachedActivity || t[64] !== Ee || t[65] !== xe || t[66] !== Y || t[67] !== I
    ? ((He = () =>
        I || m.hasDetachedActivity
          ? 1
          : (0, go.default)((Ee.get() - xe.get() - Y.get() + 40) / 20 - 1, 0, 1)),
      (t[63] = m.hasDetachedActivity),
      (t[64] = Ee),
      (t[65] = xe),
      (t[66] = Y),
      (t[67] = I),
      (t[68] = He))
    : (He = t[68]);
  let Ue = W(He),
    We;
  t[69] !== m.hasDetachedActivity || t[70] !== Ue || t[71] !== ye || t[72] !== ze
    ? ((We = () => (m.hasDetachedActivity ? 1 : ze.get()) * ye.get() * Ue.get()),
      (t[69] = m.hasDetachedActivity),
      (t[70] = Ue),
      (t[71] = ye),
      (t[72] = ze),
      (t[73] = We))
    : (We = t[73]);
  let Ge = W(We),
    Ke = W(ue, fo),
    qe = W(q, uo),
    Je;
  t[74] !== Ue || t[75] !== Ae
    ? ((Je = () => Ae.get() * Ue.get()), (t[74] = Ue), (t[75] = Ae), (t[76] = Je))
    : (Je = t[76]);
  let Ye = W(Je),
    Xe;
  t[77] === Ue ? (Xe = t[78]) : ((Xe = () => (Ue.get() === 1 ? `auto` : `none`)), (t[77] = Ue), (t[78] = Xe));
  let Ze = W(Xe),
    Qe = W(Me),
    $e = +!c,
    et = c ? 0 : P.compactProgress,
    tt;
  t[79] !== $e ||
  t[80] !== et ||
  t[81] !== P.badgeLeft ||
  t[82] !== P.composerHeight ||
  t[83] !== P.composerRadius ||
  t[84] !== P.composerTop ||
  t[85] !== P.composerWidth ||
  t[86] !== P.voiceLeft ||
  t[87] !== P.voiceWidth
    ? ((tt = {
        "--quick-chat-controls-opacity": $e,
        "--quick-chat-composer-width": P.composerWidth,
        "--quick-chat-composer-height": P.composerHeight,
        "--quick-chat-composer-top": P.composerTop,
        "--quick-chat-composer-radius": P.composerRadius,
        "--quick-chat-voice-left": P.voiceLeft,
        "--quick-chat-voice-width": P.voiceWidth,
        "--quick-chat-badge-left": P.badgeLeft,
        "--quick-chat-compact-progress": et,
      }),
      (t[79] = $e),
      (t[80] = et),
      (t[81] = P.badgeLeft),
      (t[82] = P.composerHeight),
      (t[83] = P.composerRadius),
      (t[84] = P.composerTop),
      (t[85] = P.composerWidth),
      (t[86] = P.voiceLeft),
      (t[87] = P.voiceWidth),
      (t[88] = tt))
    : (tt = t[88]);
  let nt = tt,
    rt;
  t[89] !== Ee ||
  t[90] !== Ae ||
  t[91] !== ue ||
  t[92] !== _e ||
  t[93] !== pe ||
  t[94] !== q ||
  t[95] !== ne ||
  t[96] !== xe ||
  t[97] !== Y
    ? ((rt = {
        "--quick-chat-controls-opacity": ne,
        "--quick-chat-composer-width": q,
        "--quick-chat-composer-height": ue,
        "--quick-chat-composer-top": pe,
        "--quick-chat-composer-radius": _e,
        "--quick-chat-voice-left": xe,
        "--quick-chat-voice-width": Y,
        "--quick-chat-badge-left": Ee,
        "--quick-chat-compact-progress": Ae,
      }),
      (t[89] = Ee),
      (t[90] = Ae),
      (t[91] = ue),
      (t[92] = _e),
      (t[93] = pe),
      (t[94] = q),
      (t[95] = ne),
      (t[96] = xe),
      (t[97] = Y),
      (t[98] = rt))
    : (rt = t[98]);
  let it = rt,
    at = +!c,
    ot;
  t[99] !== z || t[100] !== at ? ((ot = [z, at]), (t[99] = z), (t[100] = at), (t[101] = ot)) : (ot = t[101]);
  let st = P.composerLeft + P.composerWidth / 2,
    ct;
  t[102] !== K || t[103] !== st
    ? ((ct = [K, st]), (t[102] = K), (t[103] = st), (t[104] = ct))
    : (ct = t[104]);
  let lt;
  t[105] !== ve || t[106] !== P.composerEdgeBleed
    ? ((lt = [ve, P.composerEdgeBleed]), (t[105] = ve), (t[106] = P.composerEdgeBleed), (t[107] = lt))
    : (lt = t[107]);
  let ut;
  t[108] !== me || t[109] !== P.stashProgress
    ? ((ut = [me, P.stashProgress]), (t[108] = me), (t[109] = P.stashProgress), (t[110] = ut))
    : (ut = t[110]);
  let dt;
  t[111] !== ke || t[112] !== P.orbScale
    ? ((dt = [ke, P.orbScale]), (t[111] = ke), (t[112] = P.orbScale), (t[113] = dt))
    : (dt = t[113]);
  let ft;
  t[114] !== G || t[115] !== L
    ? ((ft = L ? G : { duration: 0 }), (t[114] = G), (t[115] = L), (t[116] = ft))
    : (ft = t[116]);
  let pt;
  t[117] !== Re || t[118] !== ft || t[119] !== P.inputOpacity
    ? ((pt = [Re, P.inputOpacity, ft]),
      (t[117] = Re),
      (t[118] = ft),
      (t[119] = P.inputOpacity),
      (t[120] = pt))
    : (pt = t[120]);
  let mt;
  t[121] !== F || t[122] !== G
    ? ((mt = F ? { duration: 0 } : G), (t[121] = F), (t[122] = G), (t[123] = mt))
    : (mt = t[123]);
  let ht;
  t[124] !== ze || t[125] !== mt || t[126] !== P.orbIconOpacity
    ? ((ht = [ze, P.orbIconOpacity, mt]),
      (t[124] = ze),
      (t[125] = mt),
      (t[126] = P.orbIconOpacity),
      (t[127] = ht))
    : (ht = t[127]);
  let gt;
  t[128] !== F || t[129] !== G
    ? ((gt = F ? { duration: 0 } : G), (t[128] = F), (t[129] = G), (t[130] = gt))
    : (gt = t[130]);
  let _t;
  t[131] !== Be || t[132] !== gt || t[133] !== P.orbIconBlurRadius
    ? ((_t = [Be, P.orbIconBlurRadius, gt]),
      (t[131] = Be),
      (t[132] = gt),
      (t[133] = P.orbIconBlurRadius),
      (t[134] = _t))
    : (_t = t[134]);
  let vt;
  t[135] !== ot ||
  t[136] !== ct ||
  t[137] !== lt ||
  t[138] !== ut ||
  t[139] !== dt ||
  t[140] !== pt ||
  t[141] !== ht ||
  t[142] !== _t
    ? ((vt = [ot, ct, lt, ut, dt, pt, ht, _t]),
      (t[135] = ot),
      (t[136] = ct),
      (t[137] = lt),
      (t[138] = ut),
      (t[139] = dt),
      (t[140] = pt),
      (t[141] = ht),
      (t[142] = _t),
      (t[143] = vt))
    : (vt = t[143]);
  let yt = vt,
    bt;
  t[144] === Symbol.for(`react.memo_cache_sentinel`) ? ((bt = new Map()), (t[144] = bt)) : (bt = t[144]);
  let xt = (0, _o.useRef)(bt),
    St;
  t[145] !== yt ||
  t[146] !== j.x ||
  t[147] !== j.y ||
  t[148] !== it ||
  t[149] !== nt ||
  t[150] !== M ||
  t[151] !== N
    ? ((St = (e) => {
        for (let [t, n] of yt) {
          if (e) t.jump(n);
          else if (!xt.current.has(t)) t.set(n);
          else continue;
          xt.current.set(t, n);
        }
        if (e) {
          (M.jump(j.x), N.jump(j.y));
          for (let [e, t] of Object.entries(nt)) it[e].jump(t);
        }
      }),
      (t[145] = yt),
      (t[146] = j.x),
      (t[147] = j.y),
      (t[148] = it),
      (t[149] = nt),
      (t[150] = M),
      (t[151] = N),
      (t[152] = St))
    : (St = t[152]);
  let Ct = (0, _o.useEffectEvent)(St),
    wt = (0, _o.useRef)(l),
    Tt;
  t[153] !== r || t[154] !== l || t[155] !== f || t[156] !== Ct
    ? ((Tt = () => {
        (Ct(!r || f || wt.current !== l), (wt.current = l));
      }),
      (t[153] = r),
      (t[154] = l),
      (t[155] = f),
      (t[156] = Ct),
      (t[157] = Tt))
    : (Tt = t[157]);
  let Et;
  (t[158] !== r ||
  t[159] !== c ||
  t[160] !== l ||
  t[161] !== j.x ||
  t[162] !== j.y ||
  t[163] !== f ||
  t[164] !== z ||
  t[165] !== P
    ? ((Et = [r, c, l, j.x, j.y, f, z, P]),
      (t[158] = r),
      (t[159] = c),
      (t[160] = l),
      (t[161] = j.x),
      (t[162] = j.y),
      (t[163] = f),
      (t[164] = z),
      (t[165] = P),
      (t[166] = Et))
    : (Et = t[166]),
    (0, _o.useLayoutEffect)(Tt, Et));
  let Dt;
  t[167] !== r || t[168] !== yt || t[169] !== f || t[170] !== G
    ? ((Dt = () => {
        for (let [e, t, n] of yt)
          xt.current.get(e) !== t && (xt.current.set(e, t), fe(e, t, f || !r ? { duration: 0 } : (n ?? G)));
      }),
      (t[167] = r),
      (t[168] = yt),
      (t[169] = f),
      (t[170] = G),
      (t[171] = Dt))
    : (Dt = t[171]);
  let Ot = (0, _o.useEffectEvent)(Dt),
    kt;
  t[172] === Ot
    ? (kt = t[173])
    : ((kt = () => {
        Ot();
      }),
      (t[172] = Ot),
      (t[173] = kt));
  let At;
  (t[174] !== c || t[175] !== P ? ((At = [c, P]), (t[174] = c), (t[175] = P), (t[176] = At)) : (At = t[176]),
    (0, _o.useEffect)(kt, At));
  let jt, Mt;
  (t[177] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((jt = () => {
        let e = xt.current;
        return () => {
          for (let t of e.keys()) t.stop();
          e.clear();
        };
      }),
      (Mt = []),
      (t[177] = jt),
      (t[178] = Mt))
    : ((jt = t[177]), (Mt = t[178])),
    (0, _o.useEffect)(jt, Mt));
  let Nt, Pt;
  (t[179] !== m.hasDetachedActivity || t[180] !== Ee || t[181] !== P.badgeLeft
    ? ((Nt = () => {
        m.hasDetachedActivity && Ee.jump(P.badgeLeft);
      }),
      (Pt = [m.hasDetachedActivity, Ee, P.badgeLeft]),
      (t[179] = m.hasDetachedActivity),
      (t[180] = Ee),
      (t[181] = P.badgeLeft),
      (t[182] = Nt),
      (t[183] = Pt))
    : ((Nt = t[182]), (Pt = t[183])),
    (0, _o.useLayoutEffect)(Nt, Pt));
  let Ft;
  t[184] !== r || t[185] !== f || t[186] !== Oe || t[187] !== Z || t[188] !== G || t[189] !== De
    ? ((Ft = () => {
        if (!De) {
          (Z.jump(1), Oe.jump(1));
          return;
        }
        (Z.jump(0), Oe.jump(0));
        let e = f || !r ? { duration: 0 } : G,
          t = fe(Z, 1, e),
          n = fe(Oe, 1, e);
        return () => {
          (t.stop(), n.stop());
        };
      }),
      (t[184] = r),
      (t[185] = f),
      (t[186] = Oe),
      (t[187] = Z),
      (t[188] = G),
      (t[189] = De),
      (t[190] = Ft))
    : (Ft = t[190]);
  let It = (0, _o.useEffectEvent)(Ft),
    Lt;
  t[191] === It ? (Lt = t[192]) : ((Lt = () => It()), (t[191] = It), (t[192] = Lt));
  let zt;
  (t[193] !== r || t[194] !== f || t[195] !== De
    ? ((zt = [r, f, De]), (t[193] = r), (t[194] = f), (t[195] = De), (t[196] = zt))
    : (zt = t[196]),
    (0, _o.useLayoutEffect)(Lt, zt));
  let Bt = (o.left + o.width / 2 - C) / E,
    Vt;
  if (
    t[197] !== n ||
    t[198] !== r ||
    t[199] !== se ||
    t[200] !== a ||
    t[201] !== s ||
    t[202] !== u.top ||
    t[203] !== ie ||
    t[204] !== D ||
    t[205] !== j ||
    t[206] !== f ||
    t[207] !== m.hasDetachedActivity ||
    t[208] !== it ||
    t[209] !== nt ||
    t[210] !== Te ||
    t[211] !== Ce ||
    t[212] !== Le ||
    t[213] !== Ye ||
    t[214] !== Oe ||
    t[215] !== Ge ||
    t[216] !== Ee ||
    t[217] !== Z ||
    t[218] !== Ze ||
    t[219] !== Ae ||
    t[220] !== ve ||
    t[221] !== ue ||
    t[222] !== ce ||
    t[223] !== pe ||
    t[224] !== q ||
    t[225] !== ge ||
    t[226] !== ye ||
    t[227] !== Qe ||
    t[228] !== Re ||
    t[229] !== qe ||
    t[230] !== Ve ||
    t[231] !== ze ||
    t[232] !== ke ||
    t[233] !== be ||
    t[234] !== V ||
    t[235] !== te ||
    t[236] !== Ke ||
    t[237] !== Fe ||
    t[238] !== xe ||
    t[239] !== Y ||
    t[240] !== M ||
    t[241] !== N ||
    t[242] !== G ||
    t[243] !== b ||
    t[244] !== Bt ||
    t[245] !== E
  ) {
    let e = {
      left: D,
      top: u.top,
      x: M,
      y: N,
      width: E,
      originX: Bt,
      originY: 0,
      scaleX: V,
      scaleY: te,
      "--quick-chat-activity-badge-digits": n,
      "--quick-chat-glass-spacing": Qe,
      "--quick-chat-composer-left": ce,
      "--quick-chat-compact-control-step": 40,
      "--quick-chat-compact-control-size": 40,
      "--quick-chat-voice-background-size": Fe,
      "--quick-chat-badge-background-size": Le,
      "--quick-chat-compact-divider-padding": 10,
      "--quick-chat-compact-edge-padding": 10,
      "--quick-chat-compact-icon-size": 20,
      ...it,
    };
    ((Vt = a({
      group: {
        animate: { ...nt, ...j },
        style: e,
        transition:
          f || !r
            ? { duration: 0 }
            : {
                default: G,
                y: { damping: p.damping, mass: p.mass, stiffness: p.stiffness, type: `spring` },
                "--quick-chat-composer-height": s ? se : ie,
                "--quick-chat-composer-top": s ? se : ie,
                "--quick-chat-badge-left": m.hasDetachedActivity ? { duration: 0 } : G,
              },
      },
      stashedAttentionStyle: { left: ce, top: pe, x: b === `left` ? qe : `calc(-100% - ${xo}px)`, y: Ke },
      presentedComposerLeft: ce,
      presentedComposerWidth: q,
      presentedComposerHeight: ue,
      presentedComposerTop: pe,
      presentedComposerEdgeBleed: ve,
      presentedControlsTop: ge,
      presentedForegroundOpacity: ye,
      presentedRestoreOpacity: be,
      presentedVoiceLeft: xe,
      presentedVoiceWidth: Y,
      presentedAudioControlWidth: Ce,
      presentedAudioControlOpacity: Te,
      presentedBadgeLeft: Ee,
      presentedBadgeOpacity: Z,
      presentedBadgeEntranceScale: Oe,
      presentedOrbScale: ke,
      presentedCompactProgress: Ae,
      presentedInputOpacity: Re,
      presentedOrbIconOpacity: ze,
      presentedBadgeIconOpacity: Ge,
      presentedBadgeDividerOpacity: Ye,
      presentedOrbIconFilter: Ve,
      presentedBadgePointerEvents: Ze,
    })),
      (t[197] = n),
      (t[198] = r),
      (t[199] = se),
      (t[200] = a),
      (t[201] = s),
      (t[202] = u.top),
      (t[203] = ie),
      (t[204] = D),
      (t[205] = j),
      (t[206] = f),
      (t[207] = m.hasDetachedActivity),
      (t[208] = it),
      (t[209] = nt),
      (t[210] = Te),
      (t[211] = Ce),
      (t[212] = Le),
      (t[213] = Ye),
      (t[214] = Oe),
      (t[215] = Ge),
      (t[216] = Ee),
      (t[217] = Z),
      (t[218] = Ze),
      (t[219] = Ae),
      (t[220] = ve),
      (t[221] = ue),
      (t[222] = ce),
      (t[223] = pe),
      (t[224] = q),
      (t[225] = ge),
      (t[226] = ye),
      (t[227] = Qe),
      (t[228] = Re),
      (t[229] = qe),
      (t[230] = Ve),
      (t[231] = ze),
      (t[232] = ke),
      (t[233] = be),
      (t[234] = V),
      (t[235] = te),
      (t[236] = Ke),
      (t[237] = Fe),
      (t[238] = xe),
      (t[239] = Y),
      (t[240] = M),
      (t[241] = N),
      (t[242] = G),
      (t[243] = b),
      (t[244] = Bt),
      (t[245] = E),
      (t[246] = Vt));
  } else Vt = t[246];
  return Vt;
}
function uo(e) {
  return e + xo;
}
function fo(e) {
  return (e - So) / 2;
}
function po(e) {
  return (0, go.default)(e * 2 - 1, 0, 1);
}
function mo(e) {
  return (0, go.default)(1 - e * 2, 0, 1);
}
var ho, go, _o, vo, yo, bo, xo, So;
function Co() {
  return (Co = e(() => {
    ((ho = Re()),
      re(),
      q(),
      Pe(),
      (go = t(v(), 1)),
      Z(),
      (_o = qe()),
      Vn(),
      an(),
      ci(),
      Ei(),
      Ni(),
      Er(),
      (vo = 0.43),
      (yo = 4),
      (bo = 38),
      (xo = 22),
      (So = 54));
  }))();
}
function wo(e) {
  let t = (0, No.c)(257),
    n,
    r,
    i,
    a,
    o,
    s,
    l,
    u,
    d,
    p,
    m,
    h,
    g,
    v,
    b,
    S,
    C,
    T,
    D,
    k,
    A,
    j,
    M,
    N,
    P,
    I,
    L,
    z,
    B,
    V,
    te,
    ne,
    re,
    ie,
    ae,
    oe,
    U,
    G,
    K,
    q,
    ce,
    le,
    ue,
    de,
    fe,
    pe,
    me,
    he,
    ge,
    _e,
    ve,
    ye,
    xe,
    Y,
    Se,
    Ce,
    X,
    we,
    Te;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (l = t[7]),
      (u = t[8]),
      (d = t[9]),
      (p = t[10]),
      (m = t[11]),
      (h = t[12]),
      (g = t[13]),
      (v = t[14]),
      (b = t[15]),
      (S = t[16]),
      (C = t[17]),
      (T = t[18]),
      (D = t[19]),
      (k = t[20]),
      (A = t[21]),
      (j = t[22]),
      (M = t[23]),
      (N = t[24]),
      (P = t[25]),
      (I = t[26]),
      (L = t[27]),
      (z = t[28]),
      (B = t[29]),
      (V = t[30]),
      (te = t[31]),
      (ne = t[32]),
      (re = t[33]),
      (ie = t[34]),
      (ae = t[35]),
      (oe = t[36]),
      (U = t[37]),
      (G = t[38]),
      (K = t[39]),
      (q = t[40]),
      (ce = t[41]),
      (le = t[42]),
      (ue = t[43]),
      (de = t[44]),
      (fe = t[45]),
      (pe = t[46]),
      (me = t[47]),
      (he = t[48]),
      (ge = t[49]),
      (_e = t[50]),
      (ve = t[51]),
      (ye = t[52]),
      (xe = t[53]),
      (Y = t[54]),
      (Se = t[55]),
      (Ce = t[56]),
      (X = t[57]),
      (we = t[58]),
      (Te = t[59]))
    : (({
        animatesPresentation: ue,
        appshotCaptureResponse: n,
        appshotCaptureStartsCollapsed: he,
        appshots: r,
        getAttachmentActions: p,
        fileAttachments: d,
        areActivityPillsVisible: i,
        areControlsVisible: ge,
        canStash: _e,
        canStartVoice: a,
        children: o,
        composerReplacement: s,
        draft: l,
        editorRef: u,
        replyTo: U,
        onRemoveReply: z,
        compositionDeferral: ve,
        hasNotifications: m,
        isExpanded: ye,
        onMenuAnchorChange: P,
        isAppshotCapturePending: xe,
        isSending: Y,
        isEditorActive: Se,
        focusRequested: de,
        isMinimized: fe,
        transcriptComposerProgress: we,
        transcriptAvatarOrigin: Ce,
        transcriptBarOrigin: X,
        transcriptNameOrigin: Te,
        isVoiceSelected: h,
        layout: g,
        notificationBadge: v,
        petAccessory: ae,
        stashedAttentionPill: le,
        stashAppearance: pe,
        realtimeVoiceSurface: oe,
        threadTarget: me,
        onCaretPointChange: b,
        onDragPointerCancel: C,
        onDragPointerDown: T,
        onDragPointerMove: D,
        onDragPointerUp: k,
        onDraftChange: S,
        onEditorExtraHeightChange: A,
        onReplyHeightChange: B,
        onFocusChange: j,
        onGeometryAnimationFrame: M,
        onLostDragPointerCapture: N,
        onOpen: I,
        onRemoveAppshots: L,
        onStartVoice: V,
        onSubmit: te,
        onToggleActivity: ne,
        onVoiceSelectionChange: re,
        presentedComposerHeight: K,
        orbitPreviewLayout: ie,
        presentedComposerTop: q,
        presentedExpansion: ce,
        ...G
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d),
      (t[10] = p),
      (t[11] = m),
      (t[12] = h),
      (t[13] = g),
      (t[14] = v),
      (t[15] = b),
      (t[16] = S),
      (t[17] = C),
      (t[18] = T),
      (t[19] = D),
      (t[20] = k),
      (t[21] = A),
      (t[22] = j),
      (t[23] = M),
      (t[24] = N),
      (t[25] = P),
      (t[26] = I),
      (t[27] = L),
      (t[28] = z),
      (t[29] = B),
      (t[30] = V),
      (t[31] = te),
      (t[32] = ne),
      (t[33] = re),
      (t[34] = ie),
      (t[35] = ae),
      (t[36] = oe),
      (t[37] = U),
      (t[38] = G),
      (t[39] = K),
      (t[40] = q),
      (t[41] = ce),
      (t[42] = le),
      (t[43] = ue),
      (t[44] = de),
      (t[45] = fe),
      (t[46] = pe),
      (t[47] = me),
      (t[48] = he),
      (t[49] = ge),
      (t[50] = _e),
      (t[51] = ve),
      (t[52] = ye),
      (t[53] = xe),
      (t[54] = Y),
      (t[55] = Se),
      (t[56] = Ce),
      (t[57] = X),
      (t[58] = we),
      (t[59] = Te));
  let Ee = ue === void 0 || ue,
    De = he !== void 0 && he,
    Z = ge === void 0 || ge,
    ke = _e !== void 0 && _e,
    je = ve === void 0 ? null : ve,
    Me = ye === void 0 || ye,
    Ne = xe !== void 0 && xe,
    Q = Y !== void 0 && Y,
    Pe = Se !== void 0 && Se,
    Fe = de !== void 0 && de,
    Ie = fe !== void 0 && fe,
    Le = pe === void 0 ? E : pe,
    Re = me === void 0 ? null : me,
    ze = _(c),
    Be = G.isOrbitMode === !0,
    Ve = G.isOrbitAvatarInHeader === !0,
    He = G.morphsOrbitTranscriptDown === !0,
    Ue = ee(),
    We = Ve && He,
    Ge;
  t[60] === we ? (Ge = t[61]) : ((Ge = () => we?.get() ?? 1), (t[60] = we), (t[61] = Ge));
  let Ke = W(Ge),
    qe;
  t[62] === Ke ? (qe = t[63]) : ((qe = (e) => Ke.on(`change`, e)), (t[62] = Ke), (t[63] = qe));
  let Ye = qe,
    Xe;
  t[64] === Ke ? (Xe = t[65]) : ((Xe = () => Ke.get() <= 0), (t[64] = Ke), (t[65] = Xe));
  let Ze = Xe,
    Qe = (0, Po.useSyncExternalStore)(Ye, Ze, Ze),
    $e = R(Nt),
    et = R(er),
    tt = $e && !et,
    nt = R(or) && Z && !Ie,
    rt = R(sr),
    it = nt && (!Be || rt),
    at = (0, Po.useRef)(null),
    ot = (0, Po.useRef)(null),
    st = (0, Po.useRef)(null),
    ct = (0, Po.useRef)(null),
    lt = u ?? ct,
    ut;
  t[66] === l
    ? (ut = t[67])
    : ((ut = () => {
        let e = Qt(l, {
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
      (t[66] = l),
      (t[67] = ut));
  let [dt] = (0, Po.useState)(ut),
    ft;
  (t[68] === dt
    ? (ft = t[69])
    : ((ft = () => {
        dt.view.isDestroyed || dt.destroy();
      }),
      (t[68] = dt),
      (t[69] = ft)),
    mt(ft, dt));
  let [pt, ht] = (0, Po.useState)(0),
    _t = U != null,
    [vt, bt] = (0, Po.useState)(null),
    [Ct, wt] = (0, Po.useState)(0),
    Tt = (0, Po.useRef)(null),
    Et;
  t[70] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Et = { distance: 0, startedAt: 0, lastAt: 0, triggered: !1 }), (t[70] = Et))
    : (Et = t[70]);
  let Dt = (0, Po.useRef)(Et),
    Ot = (0, Po.useRef)(!1),
    kt = (0, Po.useRef)(!1),
    At = (0, Po.useRef)(!1),
    jt = Ae(),
    Mt = Be,
    Pt = R(Gt),
    Lt = !Mt && oe?.phase === `starting`,
    Rt = Mt ? Pt !== `inactive` : oe != null && oe.phase !== `inactive`,
    zt = !!r?.length || Ne || d != null,
    Bt = n !== void 0,
    Vt = !!r?.length || d != null || (Ne && Bt),
    Ht = De && Ne && !Bt && !Vt && l.length === 0 && !_t,
    Ut = Pt === `starting`,
    Wt = ae != null,
    Kt = Me && !Ht,
    qt = Rt && !Lt,
    Jt,
    Yt,
    Xt,
    Zt,
    $t;
  if (
    t[71] !== je ||
    t[72] !== l ||
    t[73] !== Ct ||
    t[74] !== it ||
    t[75] !== nt ||
    t[76] !== m ||
    t[77] !== Vt ||
    t[78] !== _t ||
    t[79] !== tt ||
    t[80] !== zt ||
    t[81] !== Pe ||
    t[82] !== Ve ||
    t[83] !== Be ||
    t[84] !== g ||
    t[85] !== pt ||
    t[86] !== Le ||
    t[87] !== Ut ||
    t[88] !== Wt ||
    t[89] !== Kt ||
    t[90] !== qt
  ) {
    let e = {
      isOrbitMode: Be,
      isOrbitAvatarInHeader: Ve,
      hasUnreadOrbit: it,
      isOrbitCallStarting: Ut,
      draft: l,
      compositionDeferral: je,
      hasSelectedOrb: tt,
      hasMessageNotification: nt,
      editorExtraHeight: Ct,
      hasReply: _t,
      replyHeight: pt,
      hasAppshots: Vt,
      hasPetAccessory: Wt,
      hasNotifications: m,
      isEditorActive: Pe,
      isExpanded: Kt,
      isVoiceActive: qt,
      layout: g,
      stashAppearance: Le,
    };
    Zt = ki(e);
    let n = zt && !Vt ? { ...e, hasAppshots: !0, isExpanded: !0, isOrbitAvatarInHeader: Be && tt } : e,
      r = ki(n);
    if (
      (({ left: Xt } = Zt.bar), ({ target: $t, hasDetachedActivity: Yt } = Zt), (Jt = Oi(r)), Be && tt && zt)
    ) {
      let e = ao(n);
      ((Jt.left = e.composerLeft), (Jt.top = e.composerTop));
    }
    ((t[71] = je),
      (t[72] = l),
      (t[73] = Ct),
      (t[74] = it),
      (t[75] = nt),
      (t[76] = m),
      (t[77] = Vt),
      (t[78] = _t),
      (t[79] = tt),
      (t[80] = zt),
      (t[81] = Pe),
      (t[82] = Ve),
      (t[83] = Be),
      (t[84] = g),
      (t[85] = pt),
      (t[86] = Le),
      (t[87] = Ut),
      (t[88] = Wt),
      (t[89] = Kt),
      (t[90] = qt),
      (t[91] = Jt),
      (t[92] = Yt),
      (t[93] = Xt),
      (t[94] = Zt),
      (t[95] = $t));
  } else ((Jt = t[91]), (Yt = t[92]), (Xt = t[93]), (Zt = t[94]), ($t = t[95]));
  let en;
  t[96] !== m || t[97] !== g || t[98] !== ae
    ? ((en = x(g, Je(m), ae != null)), (t[96] = m), (t[97] = g), (t[98] = ae), (t[99] = en))
    : (en = t[99]);
  let tn = en,
    nn = oe?.petControlsAppearance ?? w,
    rn = Ie ? v?.nativeTint : void 0,
    an = Zt.state === `stashed`,
    on = s != null && !an,
    sn =
      g.quickChat?.stashedEdge ??
      g.quickChat?.nearestStashEdge ??
      (g.placement.endsWith(`start`) ? `left` : `right`),
    cn =
      g.visibleBounds.left -
      Xt +
      (sn === `left` ? -Le.width - Le.offsetX : g.visibleBounds.width + Le.offsetX),
    ln = $t.composerTop + ($t.composerHeight - Le.height) / 2 + Le.offsetY,
    un;
  t[100] !== Le.height || t[101] !== Le.width || t[102] !== cn || t[103] !== ln
    ? ((un = { left: cn, top: ln, width: Le.width, height: Le.height }),
      (t[100] = Le.height),
      (t[101] = Le.width),
      (t[102] = cn),
      (t[103] = ln),
      (t[104] = un))
    : (un = t[104]);
  let dn = un,
    fn = l.length > 0,
    mn = Zt.state === `composing`,
    hn = tt && (mn || Zt.state === `expanded`),
    gn;
  t[105] !== rt || t[106] !== Be || t[107] !== hn
    ? ((gn = `detached`),
      Be && !rt && (gn = hn ? `standalone` : `bar`),
      (t[105] = rt),
      (t[106] = Be),
      (t[107] = hn),
      (t[108] = gn))
    : (gn = t[108]);
  let _n = Zt.state === `voice`,
    vn = Zt.state === `expanded` || mn,
    yn = vn && (mn || Pe),
    bn = Q && !fn && !vn,
    xn;
  t[109] !== lt.current || t[110] !== j || t[111] !== re
    ? ((xn = () => {
        ((Ot.current = !1), re?.(!1), lt.current?.blur(), j?.(null));
      }),
      (t[109] = lt.current),
      (t[110] = j),
      (t[111] = re),
      (t[112] = xn))
    : (xn = t[112]);
  let Sn = xn,
    Cn;
  t[113] !== Sn || t[114] !== V
    ? ((Cn = () => {
        (Sn(), V?.());
      }),
      (t[113] = Sn),
      (t[114] = V),
      (t[115] = Cn))
    : (Cn = t[115]);
  let wn = Cn,
    Tn;
  t[116] !== h || t[117] !== te || t[118] !== U
    ? ((Tn = (e) => {
        let t = e.trim().length > 0;
        if ((h || Ot.current) && !t) {
          at.current?.click();
          return;
        }
        if (!t) return;
        let n = ot.current,
          r = n?.getBoundingClientRect();
        if (n == null || r == null || r.width <= 0 || r.height <= 0) {
          te?.(e, void 0, U ?? void 0);
          return;
        }
        let i = n.querySelector(`[contenteditable="true"]`),
          a = i?.getBoundingClientRect();
        te?.(
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
          U ?? void 0,
        );
      }),
      (t[116] = h),
      (t[117] = te),
      (t[118] = U),
      (t[119] = Tn))
    : (Tn = t[119]);
  let En = Tn,
    Dn;
  t[120] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Dn = () => {
        At.current = !1;
        let e = document.activeElement;
        e instanceof HTMLButtonElement && Tt.current?.contains(e) && e.blur();
      }),
      (t[120] = Dn))
    : (Dn = t[120]);
  let On = (0, Po.useEffectEvent)(Dn),
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
    (0, Po.useEffect)(kn, An));
  let jn;
  t[124] !== ke ||
  t[125] !== an ||
  t[126] !== g.quickChat?.nearestStashEdge ||
  t[127] !== j ||
  t[128] !== ae ||
  t[129] !== sn
    ? ((jn = (e) => {
        let t =
          e.target instanceof Element
            ? e.target.closest(`[data-composer-attachments-scroll-container]`)
            : null;
        if (t != null && t.scrollWidth > t.clientWidth) return;
        let n = y.avatarOverlay;
        if (
          n == null ||
          !ke ||
          ae != null ||
          e.ctrlKey ||
          e.deltaMode !== WheelEvent.DOM_DELTA_PIXEL ||
          Math.abs(e.deltaX) < Math.abs(e.deltaY) * 2 ||
          e.deltaX === 0
        )
          return;
        e.preventDefault();
        let r = performance.now(),
          i = Dt.current;
        if (
          ((r - i.lastAt > 180 ||
            (!i.triggered && (r - i.startedAt > 220 || Math.sign(i.distance) !== Math.sign(e.deltaX)))) &&
            ((i = { distance: 0, startedAt: r, lastAt: r, triggered: !1 }), (Dt.current = i)),
          (i.lastAt = r),
          (i.distance += e.deltaX),
          !i.triggered && Math.abs(i.distance) >= 80)
        ) {
          i.triggered = !0;
          let e = i.distance > 0 ? `left` : `right`;
          if (an) {
            e !== sn && n.setQuickChatStashed(null);
            return;
          }
          let t = g.quickChat?.nearestStashEdge;
          if (t != null && e !== t) return;
          (j?.(null, !0), n.setQuickChatStashed(e));
        }
      }),
      (t[124] = ke),
      (t[125] = an),
      (t[126] = g.quickChat?.nearestStashEdge),
      (t[127] = j),
      (t[128] = ae),
      (t[129] = sn),
      (t[130] = jn))
    : (jn = t[130]);
  let Mn = (0, Po.useEffectEvent)(jn),
    Nn;
  t[131] === Mn
    ? (Nn = t[132])
    : ((Nn = () => {
        let e = Tt.current;
        if (e != null)
          return (e.addEventListener(`wheel`, Mn, { passive: !1 }), () => e.removeEventListener(`wheel`, Mn));
      }),
      (t[131] = Mn),
      (t[132] = Nn));
  let Pn;
  (t[133] === Symbol.for(`react.memo_cache_sentinel`) ? ((Pn = []), (t[133] = Pn)) : (Pn = t[133]),
    (0, Po.useEffect)(Nn, Pn));
  let Fn = Be && tt,
    In;
  t[134] === Fn ? (In = t[135]) : ((In = { isOrbitTranscript: Fn }), (t[134] = Fn), (t[135] = In));
  let Ln = De && Ne && Bt,
    Rn = typeof v?.content == `number` ? String(v.content).length : 1,
    zn = !!jt,
    Bn;
  t[136] !== Jt.left ||
  t[137] !== Jt.top ||
  t[138] !== r ||
  t[139] !== i ||
  t[140] !== Z ||
  t[141] !== a ||
  t[142] !== o ||
  t[143] !== Sn ||
  t[144] !== tn ||
  t[145] !== dt ||
  t[146] !== s ||
  t[147] !== je ||
  t[148] !== l ||
  t[149] !== Ct ||
  t[150] !== lt ||
  t[151] !== We ||
  t[152] !== d ||
  t[153] !== Fe ||
  t[154] !== p ||
  t[155] !== Yt ||
  t[156] !== it ||
  t[157] !== fn ||
  t[158] !== nt ||
  t[159] !== m ||
  t[160] !== _t ||
  t[161] !== tt ||
  t[162] !== zt ||
  t[163] !== bn ||
  t[164] !== Ue ||
  t[165] !== Ne ||
  t[166] !== mn ||
  t[167] !== Pe ||
  t[168] !== Me ||
  t[169] !== Ie ||
  t[170] !== Ve ||
  t[171] !== Be ||
  t[172] !== Q ||
  t[173] !== an ||
  t[174] !== Qe ||
  t[175] !== Rt ||
  t[176] !== h ||
  t[177] !== Lt ||
  t[178] !== g ||
  t[179] !== vt ||
  t[180] !== rn ||
  t[181] !== He ||
  t[182] !== gn ||
  t[183] !== v ||
  t[184] !== b ||
  t[185] !== S ||
  t[186] !== C ||
  t[187] !== T ||
  t[188] !== D ||
  t[189] !== k ||
  t[190] !== A ||
  t[191] !== j ||
  t[192] !== M ||
  t[193] !== N ||
  t[194] !== P ||
  t[195] !== I ||
  t[196] !== L ||
  t[197] !== z ||
  t[198] !== B ||
  t[199] !== ne ||
  t[200] !== re ||
  t[201] !== Pt ||
  t[202] !== ie ||
  t[203] !== ae ||
  t[204] !== jt ||
  t[205] !== Zt.bar ||
  t[206] !== Zt.growsUp ||
  t[207] !== Zt.notificationLeadingControlsWidth ||
  t[208] !== Zt.state ||
  t[209] !== oe ||
  t[210] !== pt ||
  t[211] !== U ||
  t[212] !== ze ||
  t[213] !== _n ||
  t[214] !== yn ||
  t[215] !== on ||
  t[216] !== vn ||
  t[217] !== hn ||
  t[218] !== wn ||
  t[219] !== Le ||
  t[220] !== sn ||
  t[221] !== dn ||
  t[222] !== le ||
  t[223] !== En ||
  t[224] !== $t.badgeLeft ||
  t[225] !== $t.compactProgress ||
  t[226] !== $t.composerHeight ||
  t[227] !== $t.composerLeft ||
  t[228] !== $t.composerTop ||
  t[229] !== $t.composerWidth ||
  t[230] !== Re ||
  t[231] !== Ce ||
  t[232] !== X ||
  t[233] !== Ke ||
  t[234] !== Te ||
  t[235] !== Mt
    ? ((Bn = (e) => {
        let {
            group: t,
            stashedAttentionStyle: n,
            presentedComposerLeft: c,
            presentedComposerWidth: u,
            presentedComposerHeight: _,
            presentedComposerTop: x,
            presentedComposerEdgeBleed: w,
            presentedControlsTop: E,
            presentedForegroundOpacity: ee,
            presentedRestoreOpacity: R,
            presentedVoiceLeft: V,
            presentedVoiceWidth: te,
            presentedAudioControlWidth: W,
            presentedAudioControlOpacity: G,
            presentedBadgeLeft: K,
            presentedBadgeOpacity: q,
            presentedBadgeEntranceScale: ce,
            presentedOrbScale: ue,
            presentedCompactProgress: de,
            presentedInputOpacity: fe,
            presentedOrbIconOpacity: pe,
            presentedBadgeIconOpacity: me,
            presentedBadgeDividerOpacity: he,
            presentedOrbIconFilter: ge,
            presentedBadgePointerEvents: _e,
          } = e,
          ve = (e) => {
            if (d == null && e.length === r?.length && !Ne) {
              let { target: e } = ki({
                isOrbitMode: Be,
                hasUnreadOrbit: it,
                isOrbitCallStarting: Pt === `starting`,
                draft: l,
                compositionDeferral: je,
                hasSelectedOrb: tt,
                hasMessageNotification: nt,
                editorExtraHeight: Ct,
                hasReply: _t,
                replyHeight: pt,
                hasNotifications: m,
                hasPetAccessory: ae != null,
                isEditorActive: Pe,
                isExpanded: Me,
                isVoiceActive: Rt && !Lt,
                layout: g,
                stashAppearance: Le,
              });
              (_.jump(e.composerHeight), x.jump(e.composerTop));
            }
            L?.(e);
          };
        return (0, $.jsxs)($.Fragment, {
          children: [
            ae,
            ae != null && Z
              ? (0, $.jsx)(`div`, {
                  "aria-hidden": `true`,
                  className: `pointer-events-none absolute`,
                  "data-avatar-overlay-proximity-region": `quick-chat`,
                  style: tn,
                })
              : null,
            (0, $.jsxs)(H.div, {
              ref: (e) => {
                ((Tt.current = e), P?.(e));
              },
              ...t,
              className: J(
                `absolute z-20 h-10`,
                Ci.controls,
                !Yt && !We && Ci.barMaterial,
                !Z && `invisible`,
              ),
              "aria-hidden": Ie || !Z || void 0,
              inert: Ie || !Z,
              "data-quick-chat-presentation": Ie ? `minimized` : Zt.state,
              "data-quick-chat-glass-group": `true`,
              "data-quick-chat-typing": mn || void 0,
              initial: !1,
              role: `group`,
              onBlurCapture: (e) => {
                let t = At.current;
                ((At.current = !1),
                  !(
                    lt.current?.isFilePickerOpen() ||
                    (e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)) ||
                    (e.relatedTarget instanceof Element &&
                      e.relatedTarget.closest(`[data-avatar-overlay-orbit-transcript]`) != null) ||
                    (e.relatedTarget == null && t)
                  ) && (j?.(null, kt.current), (kt.current = !1), (Ot.current = !1), re?.(!1)));
              },
              onFocusCapture: (e) => {
                !an &&
                  vn &&
                  !e.target.hasAttribute(`data-quick-chat-return-to-voice`) &&
                  j?.(
                    e.target instanceof HTMLElement &&
                      (e.target.dataset.avatarOverlayCompositionAutofocus === `true` ||
                        e.target.closest(`[data-quick-chat-composer-action]`) != null)
                      ? `editor`
                      : `controls`,
                  );
              },
              onKeyDownCapture: (e) => {
                if (e.target instanceof Node && ot.current?.contains(e.target) && qr(ze, e.nativeEvent)) {
                  (e.preventDefault(), e.stopPropagation());
                  return;
                }
                if (
                  ((At.current = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey),
                  !(
                    e.key !== `Escape` ||
                    e.defaultPrevented ||
                    e.nativeEvent.isComposing ||
                    lt.current?.prepareEscape() === !1
                  ))
                ) {
                  if ((e.preventDefault(), _t && z != null)) {
                    (z(), lt.current?.focus());
                    return;
                  }
                  (l.trim().length === 0 && !Ne && r?.length && L != null && ve(r),
                    (kt.current = !0),
                    e.target instanceof HTMLElement && e.target.blur());
                }
              },
              onKeyUpCapture: () => {
                At.current = !1;
              },
              onPointerDownCapture: () => {
                At.current = !1;
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
                      .filter(jo)
                      .sort(Ao),
                    n = t[t.indexOf(e.target) + (e.key === `ArrowRight` ? 1 : -1)];
                  if (n != null) {
                    e.preventDefault();
                    let t = vn && n === at.current;
                    ((Ot.current = t),
                      re?.(t),
                      n.dataset.avatarOverlayCompositionAutofocus === `true`
                        ? lt.current?.focus()
                        : n.focus());
                  }
                }
              },
              onUpdate: () => {
                (M?.(), Oe.postRender(() => lt.current?.updateCaretPoint()));
              },
              children: [
                (0, $.jsxs)(`div`, {
                  className: J(`absolute inset-0`, Yt && Ci.barMaterial),
                  children: [
                    (0, $.jsx)(Ft, {
                      "aria-hidden": `true`,
                      className: `pointer-events-none absolute`,
                      hidden: !an,
                      nativeSurfaceId: `quick-chat-stash-extension`,
                      style: dn,
                      variant: `quick-chat-stash-extension`,
                    }),
                    an && le != null
                      ? (0, $.jsx)(H.div, { className: `absolute z-30`, style: n, children: le })
                      : null,
                    g.quickChat?.hasOrbPicker && hn && !Ve && !Ie && Z
                      ? (0, $.jsx)(H.div, {
                          className: `absolute top-0 z-10 flex h-10 w-8 items-center justify-center`,
                          "data-avatar-overlay-hit-region": `selected-orb`,
                          style: {
                            left: `calc(var(--quick-chat-composer-left) * 1px - 40px)`,
                            top: E,
                            scale: ue,
                            opacity: ee,
                          },
                          onLostPointerCapture: N,
                          onPointerCancel: C,
                          onPointerDown: T,
                          onPointerMove: D,
                          onPointerUp: k,
                          children: (0, $.jsx)(`button`, {
                            "aria-label": Ue.formatMessage({
                              id: `avatarOverlay.quickChat.closeTranscript`,
                              defaultMessage: `Close transcript`,
                              description: `Accessible label for the selected dot button that collapses Mini and closes its conversation transcript`,
                            }),
                            className: `flex size-full cursor-interaction items-center justify-center select-none focus-visible:outline-none`,
                            type: `button`,
                            onClick: () => {
                              (lt.current?.blur(), j?.(null, !0));
                            },
                            children: (0, $.jsx)(Vi, { artworkSize: 32 }),
                          }),
                        })
                      : null,
                    (0, $.jsxs)(
                      H.form,
                      {
                        ref: (e) => (
                          (ot.current = e),
                          () => {
                            if (!We && X != null) {
                              let t = e
                                ?.querySelector(`[data-avatar-overlay-native-surface-id="composer"]`)
                                ?.getBoundingClientRect();
                              t != null &&
                                (X.current = {
                                  left: t.left + window.screenX,
                                  top: t.top + window.screenY,
                                  width: t.width,
                                  height: t.height,
                                });
                            }
                            ((ot.current = null), y.avatarOverlay?.setQuickChatComposerFocused(!1));
                          }
                        ),
                        className: `absolute top-0 left-0 min-w-0 cursor-grab active:cursor-grabbing`,
                        "aria-hidden": Qe || void 0,
                        inert: Qe,
                        style: { left: We ? $t.composerLeft : c, top: x, width: We ? $t.composerWidth : u },
                        onDragOverCapture: (e) => {
                          p != null && yt(e.dataTransfer) && e.preventDefault();
                        },
                        onDropCapture: (e) => {
                          if (p == null) return;
                          let { imageFiles: t, otherFiles: n } = xt(e.dataTransfer);
                          if (t.length === 0 && n.length === 0) return;
                          (e.preventDefault(), e.stopPropagation());
                          let r = p(),
                            i = t.length === 0 || r.addImages(t, `drop`);
                          n.length > 0 && i && r.addFileMentionsFromFiles(n, e.dataTransfer);
                        },
                        onLostPointerCapture: N,
                        onFocusCapture: ko,
                        onBlurCapture: Oo,
                        onPointerCancel: C,
                        onPointerDown: T,
                        onPointerMove: D,
                        onPointerUp: k,
                        onSubmit: (e) => {
                          (e.preventDefault(), !on && lt.current?.submit());
                        },
                        children: [
                          (0, $.jsx)(`div`, {
                            ref: bt,
                            className: `contents no-drag`,
                            onPointerDown: Do,
                            children: (0, $.jsx)(`div`, {
                              className: `absolute bottom-full left-0 w-full`,
                              "data-above-composer-portal": !0,
                            }),
                          }),
                          (0, $.jsxs)(Io, {
                            avatarRef: st,
                            avatarOrigin: Ce,
                            origin: Te,
                            morphFromName: He && !We,
                            className: J(`relative w-full overflow-clip`, Hn.nativeTint),
                            "data-avatar-overlay-native-tint": rn,
                            "data-avatar-overlay-quick-chat-target-left": Jt.left,
                            "data-avatar-overlay-quick-chat-target-top": Jt.top,
                            "data-avatar-overlay-quick-chat-actions": yn || void 0,
                            "data-avatar-overlay-quick-chat-icon-only": _n || void 0,
                            "data-avatar-overlay-quick-chat-replacement": on || void 0,
                            "data-avatar-overlay-quick-chat-collapsed": Zt.state === `collapsed` || void 0,
                            "data-avatar-overlay-hit-region": `notification-composer`,
                            nativeSurfaceId: `composer`,
                            style: { opacity: Ke },
                            variant: an ? `quick-chat-stash` : `quick-chat`,
                            children: [
                              on
                                ? (0, $.jsx)(Mo, {
                                    onExternalExtraHeightChange: A,
                                    onExtraHeightChange: wt,
                                    children: s,
                                  })
                                : null,
                              (0, $.jsxs)(H.div, {
                                "aria-hidden": an || void 0,
                                hidden: on,
                                className: J(
                                  `flex min-w-0 flex-1`,
                                  an ? `items-center` : `h-full flex-col items-stretch`,
                                ),
                                "data-avatar-overlay-foreground": !0,
                                inert: an,
                                style: {
                                  opacity: ee,
                                  visibility: Q && !fn && !zt && !_t ? `hidden` : void 0,
                                },
                                children: [
                                  (0, $.jsx)(F, {
                                    custom: Q,
                                    initial: !1,
                                    children: zt
                                      ? (0, $.jsxs)(
                                          H.div,
                                          {
                                            "data-composer-attachments-scroll-container": !0,
                                            animate: { opacity: 1 },
                                            className: J(
                                              `hide-scrollbar absolute top-0 right-0 left-0 box-content flex h-18 min-w-0 items-start gap-2 overflow-x-auto overflow-y-hidden`,
                                              gt.QuickChatAttachmentRow,
                                              !vn && `invisible`,
                                            ),
                                            exit: `exit`,
                                            hidden: !vn && !Ne,
                                            initial: !1,
                                            variants: {
                                              exit: (e) => ({
                                                opacity: 0,
                                                pointerEvents: `none`,
                                                transition: e || jt ? { duration: 0 } : Un,
                                              }),
                                            },
                                            transition: jt ? { duration: 0 } : Un,
                                            children: [
                                              d,
                                              r?.map((e) => {
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
                                                            className: J(
                                                              `size-full object-contain`,
                                                              t == null &&
                                                                `composer-attachment-surface rounded-lg border border-strong`,
                                                            ),
                                                            draggable: !1,
                                                            src: n,
                                                          }),
                                                      L && !Ne
                                                        ? (0, $.jsx)(It, {
                                                            className: `pointer-events-none top-1 right-1 opacity-0 group-hover/appshot:pointer-events-auto group-hover/appshot:opacity-100 focus-visible:pointer-events-auto focus-visible:opacity-100`,
                                                            ariaLabel: Ue.formatMessage(
                                                              {
                                                                id: `appshotAttachment.removeAriaLabel`,
                                                                defaultMessage: `Remove {title}`,
                                                                description: `Aria label for the remove appshot attachment button`,
                                                              },
                                                              { title: e.appName },
                                                            ),
                                                            onRemove: () => ve([e]),
                                                          })
                                                        : null,
                                                    ],
                                                  },
                                                  `${e.bundleIdentifier}-${e.imageName ?? n}`,
                                                );
                                              }),
                                              Ne
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
                                  U == null
                                    ? null
                                    : (0, $.jsx)(`div`, {
                                        className: `relative mt-auto w-full shrink-0 overflow-hidden`,
                                        style: {
                                          height: `max(0px, calc(var(--quick-chat-composer-height) * 1px - ${$t.composerHeight - pt}px))`,
                                        },
                                        hidden: !vn,
                                        onPointerDown: Eo,
                                        children: (0, $.jsx)(`div`, {
                                          ref: (e) => {
                                            if (e != null)
                                              return St({
                                                axis: `height`,
                                                target: e,
                                                onChange: (e) => {
                                                  let { height: t } = e;
                                                  (ht(t), B?.(t));
                                                },
                                              });
                                          },
                                          className: `absolute inset-x-0 bottom-0 min-w-0 pb-2`,
                                          children: (0, $.jsx)(pr, {
                                            reply: U,
                                            onRemove:
                                              z == null
                                                ? void 0
                                                : () => {
                                                    (z(), lt.current?.focus());
                                                  },
                                          }),
                                        }),
                                      }),
                                  (0, $.jsxs)(`div`, {
                                    className: J(
                                      `relative flex w-full min-w-0 items-center`,
                                      !an && mn && `mt-auto min-h-6 shrink-0`,
                                      !an &&
                                        !yn &&
                                        (zt
                                          ? `mt-auto mb-1 min-h-5 shrink-0 translate-y-px`
                                          : `my-auto min-h-5 shrink-0`),
                                      _n ? `justify-center` : `gap-2`,
                                    ),
                                    children: [
                                      !vn || $t.compactProgress === 1
                                        ? (0, $.jsx)(`button`, {
                                            "aria-label": Ue.formatMessage(Fo.startNewChat),
                                            className: `flex shrink-0 cursor-interaction items-center justify-center text-default`,
                                            "data-quick-chat-control": _n ? `surface` : ``,
                                            type: `button`,
                                            onClick: () => {
                                              (I?.(), j?.(`editor`), lt.current?.focus());
                                            },
                                            children: (0, $.jsx)(Dr, {
                                              ref: st,
                                              className: bn ? `invisible` : void 0,
                                              origin: Ce,
                                              placement: `bar`,
                                              animatesFromBar: He,
                                              children: g.quickChat?.hasOrbPicker
                                                ? (0, $.jsx)(Vi, {})
                                                : (0, $.jsx)(be, {}),
                                            }),
                                          })
                                        : null,
                                      (0, $.jsx)(H.span, {
                                        "aria-hidden": `true`,
                                        className: J(
                                          `pointer-events-none absolute h-5 w-px bg-border`,
                                          Ci.quickChatCompactFirstDivider,
                                        ),
                                        "data-quick-chat-divider": `compact`,
                                        style: { opacity: de, visibility: bn ? `hidden` : void 0 },
                                      }),
                                      m && !Yt
                                        ? (0, $.jsx)(H.span, {
                                            "aria-hidden": `true`,
                                            className: J(
                                              `pointer-events-none absolute h-5 w-px bg-border`,
                                              Ci.quickChatCompactSecondDivider,
                                            ),
                                            "data-quick-chat-divider": `badge`,
                                            style: { opacity: he, visibility: bn ? `hidden` : void 0 },
                                          })
                                        : null,
                                      (0, $.jsx)(va, {
                                        ref: lt,
                                        autoFocus: Pe && !Qe,
                                        focusRequested: Fe,
                                        composerController: dt,
                                        getAttachmentActions: p,
                                        canStartVoice: a,
                                        draft: l,
                                        hidden: bn || on,
                                        isExpanded: vn,
                                        isSending: Q,
                                        showsActions: yn,
                                        menuContainer: vt,
                                        menuPlacement: Zt.growsUp ? `top` : `bottom`,
                                        opacity: fe,
                                        threadTarget: Re,
                                        onCaretPointChange: b,
                                        onDraftChange: S,
                                        onExtraHeightChange: (e) => {
                                          on || (wt(e), A?.(e));
                                        },
                                        onRequestFocus: () => j?.(`editor`),
                                        onSubmit: En,
                                        onVoiceSelectionChange: (e) => {
                                          ((Ot.current = e), re?.(e), e && at.current?.focus());
                                        },
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(H.button, {
                                "aria-label": Ue.formatMessage(Fo.restore),
                                "aria-hidden": !an || void 0,
                                className: `focus-visible:ring-primary-outline absolute inset-0 flex size-full cursor-interaction items-center justify-center text-default select-none focus-visible:ring-2 focus-visible:outline-none`,
                                "data-avatar-overlay-foreground": !0,
                                "data-avatar-overlay-hit-region": `quick-chat-stash`,
                                inert: !an,
                                style: {
                                  opacity: R,
                                  paddingLeft: sn === `left` ? w : 0,
                                  paddingRight: sn === `right` ? w : 0,
                                },
                                type: `button`,
                                onClick: To,
                                children: [
                                  Lt ? (0, $.jsx)(Pa, { reduceMotion: !!jt }) : null,
                                  Rt && !Lt && oe != null
                                    ? (0, $.jsx)(`span`, {
                                        className: `pointer-events-none relative size-5 shrink-0 overflow-hidden rounded-full`,
                                        children: (0, $.jsx)(pn, {
                                          glowEnabled: !1,
                                          placement: `center`,
                                          phase: oe.phase,
                                          voiceActivity: oe.activity,
                                        }),
                                      })
                                    : null,
                                  Rt
                                    ? null
                                    : (0, $.jsx)(O, {
                                        className: sn === `left` ? `-rotate-90` : `rotate-90`,
                                      }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      We ? `transcript-composer` : `bar-composer`,
                    ),
                    (0, $.jsx)(H.div, {
                      animate: { opacity: +!Ve },
                      initial: !1,
                      transition: He && !Ve && !jt ? Tr(!1, !0) : { duration: 0 },
                      "aria-hidden": mn || an || Ve || void 0,
                      className: J(`absolute top-0`, Ci.orb, Ve && `invisible`),
                      inert: mn || an || Ve,
                      style: { left: V, top: E, scale: ue, width: te },
                      onLostPointerCapture: N,
                      onPointerCancel: C,
                      onPointerDown: T,
                      onPointerMove: D,
                      onPointerUp: k,
                      children: (0, $.jsx)(Ft, {
                        className: Hn.nativeTint,
                        "data-avatar-overlay-quick-chat-resizable-background":
                          (!_n && !(Mt && Pt !== `inactive`) && !an) || void 0,
                        "data-avatar-overlay-hit-region": `realtime-voice`,
                        "data-avatar-overlay-native-tint": rn,
                        nativeSurfaceId: `voice-controls`,
                        variant: `quick-chat-voice`,
                        children: (0, $.jsxs)(H.div, {
                          className: `size-full`,
                          "data-avatar-overlay-foreground": !0,
                          style: { opacity: ee },
                          children: [
                            Be &&
                              (0, $.jsx)(Mr, {
                                ref: at,
                                iconStyle: { filter: ge, opacity: pe },
                                isSelected: h,
                                onActivate: Sn,
                              }),
                            !Mt &&
                              (Rt && !Lt && oe != null
                                ? (0, $.jsx)(Ya, {
                                    audioControlOpacity: G,
                                    audioControlWidth: W,
                                    reduceMotion: !!jt,
                                    showsAudioControls: _n,
                                    voice: oe,
                                    onReturnToVoiceControls: () => {
                                      (S?.(``),
                                        L?.(r ?? [], `voice-return`),
                                        z?.(),
                                        lt.current?.blur(),
                                        j?.(null));
                                    },
                                  })
                                : (0, $.jsx)(`button`, {
                                    ref: at,
                                    "aria-label": Ue.formatMessage(Lt ? Fo.stopVoice : Fo.startVoice),
                                    "aria-busy": Lt || void 0,
                                    "aria-pressed": h,
                                    className: `flex size-full cursor-interaction items-center justify-center rounded-full text-default`,
                                    "data-quick-chat-control": `surface`,
                                    disabled: Lt ? oe?.onStop == null : !a,
                                    type: `button`,
                                    onClick: () => {
                                      if (Lt) {
                                        oe?.onStop?.();
                                        return;
                                      }
                                      wn();
                                    },
                                    children: (0, $.jsx)(H.span, {
                                      className: `flex items-center justify-center`,
                                      style: { filter: ge, opacity: pe },
                                      children: Lt
                                        ? (0, $.jsx)(Pa, { reduceMotion: !!jt })
                                        : (0, $.jsx)(se, {}),
                                    }),
                                  })),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                m
                  ? (0, $.jsx)(H.div, {
                      "aria-hidden": (!Yt && mn) || an || void 0,
                      className: J(`absolute top-0`, Yt ? Ci.barMaterial : Ci.orb),
                      inert: (!Yt && mn) || an,
                      style: {
                        left: Yt ? $t.badgeLeft : K,
                        top: Yt && !an ? $t.composerTop + $t.composerHeight - 40 : E,
                        opacity: Yt ? q : void 0,
                        pointerEvents: _e,
                        scale: Yt && !an ? ce : ue,
                      },
                      onLostPointerCapture: N,
                      onPointerCancel: C,
                      onPointerDown: T,
                      onPointerMove: D,
                      onPointerUp: k,
                      children: (0, $.jsx)(Ft, {
                        className: Hn.nativeTint,
                        "data-avatar-overlay-quick-chat-resizable-background": (!Yt && !_n && !an) || void 0,
                        "data-avatar-overlay-hit-region": `mascot-badge`,
                        "data-avatar-overlay-native-tint": mn ? void 0 : rn,
                        nativeSurfaceId: `mascot-badge`,
                        variant: `quick-chat-orb`,
                        children: (0, $.jsx)(`button`, {
                          "aria-label":
                            v?.ariaLabel ?? Ue.formatMessage(i ? Fo.hideActivity : Fo.showActivity),
                          className: `flex size-full cursor-interaction items-center justify-center rounded-full text-default select-none`,
                          "data-avatar-overlay-foreground": !0,
                          "data-quick-chat-control": `surface`,
                          type: `button`,
                          onClick: v?.onClick ?? ne,
                          children: (0, $.jsx)(H.span, {
                            "aria-hidden": `true`,
                            className: J(
                              `relative flex items-center justify-center text-[8px] font-medium tabular-nums`,
                              Ci.activityBadgeContainer,
                            ),
                            style: { filter: Yt ? void 0 : ge, opacity: me },
                            children:
                              i && !Yt
                                ? (0, $.jsx)(O, {
                                    className: g.placement.startsWith(`top`)
                                      ? `translate-y-px rotate-180`
                                      : `-translate-y-px`,
                                  })
                                : (0, $.jsxs)($.Fragment, {
                                    children: [
                                      (0, $.jsx)(f, { className: J(`text-default`, Ci.activityBell) }),
                                      v != null && !v.isIconOnly
                                        ? (0, $.jsx)(Li, { nativeTint: v.nativeTint, children: v.content })
                                        : null,
                                    ],
                                  }),
                          }),
                        }),
                      }),
                    })
                  : null,
                Z && !Ie && !an
                  ? (0, $.jsx)(Yi, {
                      onOpen: () => {
                        (re?.(!1), I?.(), j?.(`editor`), lt.current?.focus());
                      },
                      bar: Zt.bar,
                      previewLayout: ie,
                      anchor: gn,
                      leadingControlsWidth: Zt.notificationLeadingControlsWidth,
                      placement: !Be && (ae != null || g.placement.startsWith(`bottom`)) ? `below` : `above`,
                      workArea: g.quickChat?.workArea ?? g.visibleBounds,
                    })
                  : null,
                (0, $.jsx)(`div`, { className: an ? `invisible` : void 0, inert: an, children: o }),
              ],
            }),
          ],
        });
      }),
      (t[136] = Jt.left),
      (t[137] = Jt.top),
      (t[138] = r),
      (t[139] = i),
      (t[140] = Z),
      (t[141] = a),
      (t[142] = o),
      (t[143] = Sn),
      (t[144] = tn),
      (t[145] = dt),
      (t[146] = s),
      (t[147] = je),
      (t[148] = l),
      (t[149] = Ct),
      (t[150] = lt),
      (t[151] = We),
      (t[152] = d),
      (t[153] = Fe),
      (t[154] = p),
      (t[155] = Yt),
      (t[156] = it),
      (t[157] = fn),
      (t[158] = nt),
      (t[159] = m),
      (t[160] = _t),
      (t[161] = tt),
      (t[162] = zt),
      (t[163] = bn),
      (t[164] = Ue),
      (t[165] = Ne),
      (t[166] = mn),
      (t[167] = Pe),
      (t[168] = Me),
      (t[169] = Ie),
      (t[170] = Ve),
      (t[171] = Be),
      (t[172] = Q),
      (t[173] = an),
      (t[174] = Qe),
      (t[175] = Rt),
      (t[176] = h),
      (t[177] = Lt),
      (t[178] = g),
      (t[179] = vt),
      (t[180] = rn),
      (t[181] = He),
      (t[182] = gn),
      (t[183] = v),
      (t[184] = b),
      (t[185] = S),
      (t[186] = C),
      (t[187] = T),
      (t[188] = D),
      (t[189] = k),
      (t[190] = A),
      (t[191] = j),
      (t[192] = M),
      (t[193] = N),
      (t[194] = P),
      (t[195] = I),
      (t[196] = L),
      (t[197] = z),
      (t[198] = B),
      (t[199] = ne),
      (t[200] = re),
      (t[201] = Pt),
      (t[202] = ie),
      (t[203] = ae),
      (t[204] = jt),
      (t[205] = Zt.bar),
      (t[206] = Zt.growsUp),
      (t[207] = Zt.notificationLeadingControlsWidth),
      (t[208] = Zt.state),
      (t[209] = oe),
      (t[210] = pt),
      (t[211] = U),
      (t[212] = ze),
      (t[213] = _n),
      (t[214] = yn),
      (t[215] = on),
      (t[216] = vn),
      (t[217] = hn),
      (t[218] = wn),
      (t[219] = Le),
      (t[220] = sn),
      (t[221] = dn),
      (t[222] = le),
      (t[223] = En),
      (t[224] = $t.badgeLeft),
      (t[225] = $t.compactProgress),
      (t[226] = $t.composerHeight),
      (t[227] = $t.composerLeft),
      (t[228] = $t.composerTop),
      (t[229] = $t.composerWidth),
      (t[230] = Re),
      (t[231] = Ce),
      (t[232] = X),
      (t[233] = Ke),
      (t[234] = Te),
      (t[235] = Mt),
      (t[236] = Bn))
    : (Bn = t[236]);
  let Vn;
  return (
    t[237] !== Ee ||
    t[238] !== n ||
    t[239] !== tn ||
    t[240] !== We ||
    t[241] !== Vt ||
    t[242] !== Ie ||
    t[243] !== g.mascot ||
    t[244] !== nn ||
    t[245] !== Zt ||
    t[246] !== K ||
    t[247] !== q ||
    t[248] !== ce ||
    t[249] !== Le ||
    t[250] !== sn ||
    t[251] !== In ||
    t[252] !== Ln ||
    t[253] !== Rn ||
    t[254] !== zn ||
    t[255] !== Bn
      ? ((Vn = (0, $.jsx)(lo, {
          isTranscriptComposer: We,
          ...In,
          animatesPresentation: Ee,
          appshotCaptureResponse: n,
          usesAppshotHandoff: Ln,
          hasPresentedAppshot: Vt,
          isMinimized: Ie,
          presentation: Zt,
          compact: tn,
          mascot: g.mascot,
          petControlsAppearance: nn,
          stashAppearance: Le,
          stashEdge: sn,
          activityBadgeDigits: Rn,
          prefersReducedMotion: zn,
          presentedComposerHeight: K,
          presentedComposerTop: q,
          presentedExpansion: ce,
          children: Bn,
        })),
        (t[237] = Ee),
        (t[238] = n),
        (t[239] = tn),
        (t[240] = We),
        (t[241] = Vt),
        (t[242] = Ie),
        (t[243] = g.mascot),
        (t[244] = nn),
        (t[245] = Zt),
        (t[246] = K),
        (t[247] = q),
        (t[248] = ce),
        (t[249] = Le),
        (t[250] = sn),
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
function To() {
  y.avatarOverlay?.setQuickChatStashed(null);
}
function Eo(e) {
  return e.stopPropagation();
}
function Do(e) {
  return e.stopPropagation();
}
function Oo(e) {
  (e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)) ||
    y.avatarOverlay?.setQuickChatComposerFocused(!1);
}
function ko(e) {
  y.avatarOverlay?.setQuickChatComposerFocused(
    e.target instanceof Node && e.currentTarget.contains(e.target),
  );
}
function Ao(e, t) {
  return e.getBoundingClientRect().left - t.getBoundingClientRect().left;
}
function jo(e) {
  return !e.matches(`:disabled`) && e.tabIndex >= 0 && e.closest(`[inert]`) == null;
}
function Mo(e) {
  let t = (0, No.c)(6),
    { children: n, onExternalExtraHeightChange: r, onExtraHeightChange: i } = e,
    a = (0, Po.useRef)(null),
    o,
    s;
  (t[0] !== r || t[1] !== i
    ? ((o = () => {
        let e = St({
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
    (0, Po.useLayoutEffect)(o, s));
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
var No, Po, $, Fo, Io;
function Lo() {
  return (Lo = e(() => {
    ((No = Re()),
      B(),
      l(),
      ge(),
      le(),
      Ce(),
      Pe(),
      A(),
      Z(),
      (Po = qe()),
      pe(),
      Vn(),
      tn(),
      ct(),
      I(),
      Wi(),
      Jr(),
      ea(),
      cr(),
      tr(),
      Lr(),
      on(),
      Zt(),
      ot(),
      Te(),
      Be(),
      Tt(),
      wn(),
      Da(),
      $a(),
      Ei(),
      ln(),
      jr(),
      io(),
      co(),
      gr(),
      Ni(),
      Co(),
      Bi(),
      Er(),
      Ja(),
      Rn(),
      tt(),
      wi(),
      ($ = He()),
      (Fo = i({
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
      (Io = H.create(eo)));
  }))();
}
export {
  Rr as A,
  gr as B,
  ci as C,
  Ur as D,
  Hr as E,
  Tr as F,
  Qn as G,
  cr as H,
  Er as I,
  $n as K,
  br as L,
  Lr as M,
  Dr as N,
  zr as O,
  jr as P,
  wr as R,
  $r as S,
  Kr as T,
  er as U,
  or as V,
  tr as W,
  ni as _,
  co as a,
  Zr as b,
  Ni as c,
  Ci as d,
  wi as f,
  Yr as g,
  fi as h,
  oo as i,
  Mr as j,
  Gr as k,
  Ti as l,
  di as m,
  Lo as n,
  ki as o,
  ui as p,
  ao as r,
  Di as s,
  wo as t,
  Ei as u,
  Xr as v,
  Jr as w,
  Qr as x,
  ei as y,
  pr as z,
};
//# sourceMappingURL=controls-a9a41029c5b0.js.map
