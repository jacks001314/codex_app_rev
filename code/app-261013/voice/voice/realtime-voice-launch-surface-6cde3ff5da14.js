import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  IDt as r,
  Ixt as i,
  JR as a,
  Kat as o,
  Pxt as s,
  Vxt as c,
  YR as l,
  _Mt as u,
  _wt as d,
  _xt as f,
  dwt as p,
  fwt as m,
  gMt as h,
  gwt as g,
  jDt as _,
  pwt as v,
  qat as y,
  t3 as b,
  uwt as x,
  vzt as S,
  wot as C,
  wxt as w,
  xMt as T,
  yzt as E,
} from "./app-shared-bbfeca5e5737.js";
import {
  ADt as D,
  E$n as O,
  FDt as k,
  JEt as A,
  LDt as ee,
  MDt as j,
  NDt as M,
  Nw as N,
  O$n as P,
  ODt as F,
  PDt as I,
  Pw as te,
  RDt as L,
  _9n as R,
  jDt as z,
  kDt as B,
  m9n as V,
  qEt as H,
} from "./app-initial-5851df3f6cb1.js";
import { n as U, t as W } from "./use-realtime-voice-native-overlay-transition-enabled-7ccfb34c8f8f.js";
import { i as ne, n as G, r as re, t as ie } from "./realtime-voice-motion-1152410890e5.js";
import { a as K, i as ae, n as oe, r as se, t as ce } from "./realtime-voice-stage-layout-cbd1d7be3317.js";
function q(e, t, n) {
  let r = Math.max(0, e);
  if (r >= 1125) return n;
  if (r <= J) {
    let e = r / J,
      n = e ** 2 * (3 - 2 * e);
    return t + (pe - t) * n;
  }
  let i = pe / n;
  if (r <= fe) {
    let e = de / 1e3,
      a = J / 1e3,
      o = t / n,
      s = Math.max(1 - i, 1e-4),
      c = (_e * e) / s,
      l = ((6 * (o - i)) / a ** 2) * (e ** 2 / s),
      u = (-2 * me * Y * _e * e ** 2) / s,
      d = l / 2,
      f = 1 - d,
      p = c - 2 * d,
      m = u - 2 * d,
      h = p - 3 * f,
      g = (m - 6 * f - 6 * h) / 2,
      _ = h - 2 * g,
      v = f - g - _,
      y = (r - J) / de,
      b = y ** 2 * (g * y ** 3 + _ * y ** 2 + v * y + d);
    return n * (i + (1 - i) * b);
  }
  let a = (r - fe) / 1e3;
  return n * (1 + Math.exp(-0.68 * Y * a) * (_e / X) * Math.sin(X * a));
}
function le(e) {
  let t = Math.min(1, Math.max(0, (e - J) / de));
  return t ** 3 * (t * (t * 6 - 15) + 10);
}
var ue, J, de, fe, pe, me, he, Y, X, ge, _e;
function ve() {
  return (ve = e(() => {
    ((ue = 1125),
      (J = 325),
      (de = 195),
      (fe = 520),
      (pe = 12),
      (me = 0.68),
      (he = 1088 / fe),
      (Y = 2 * Math.PI * he),
      (X = Y * Math.sqrt(1 - me ** 2)),
      (ge = Math.atan(X / (me * Y)) / X),
      (_e = 0.06000000000000005 / ((Math.exp(-0.68 * Y * ge) * Math.sin(X * ge)) / X)));
  }))();
}
function ye(e) {
  let t = (0, Ce.c)(63),
    { isConnecting: n, onHandoffComplete: r, orb: i, orbDiameter: a, reduceMotion: o } = e,
    s = (0, Z.useRef)(null),
    c = (0, Z.useRef)(!1),
    l = (0, Z.useRef)(!1),
    u = v(+!n),
    f = v(50),
    m;
  t[0] !== u || t[1] !== a || t[2] !== f
    ? ((m = () => q(u.get() * ue, f.get(), a)), (t[0] = u), (t[1] = a), (t[2] = f), (t[3] = m))
    : (m = t[3]);
  let g = p(m),
    _ = p(u, xe),
    y = p(_, be),
    b;
  t[4] === a ? (b = t[5]) : ((b = (e) => e / a), (t[4] = a), (t[5] = b));
  let x = p(g, b),
    S;
  t[6] !== g || t[7] !== f ? ((S = () => g.get() / f.get()), (t[6] = g), (t[7] = f), (t[8] = S)) : (S = t[8]);
  let C = p(S),
    w;
  t[9] !== u || t[10] !== n || t[11] !== r || t[12] !== o
    ? ((w = () => {
        n || (!o && u.get() < 1) || c.current || ((c.current = !0), r?.());
      }),
      (t[9] = u),
      (t[10] = n),
      (t[11] = r),
      (t[12] = o),
      (t[13] = w))
    : (w = t[13]);
  let T = w,
    E = (0, Z.useEffectEvent)(T),
    D;
  t[14] !== E || t[15] !== n
    ? ((D = () => {
        if (n) return;
        let e = requestAnimationFrame(E);
        return () => {
          cancelAnimationFrame(e);
        };
      }),
      (t[14] = E),
      (t[15] = n),
      (t[16] = D))
    : (D = t[16]);
  let O;
  (t[17] === n ? (O = t[18]) : ((O = [n]), (t[17] = n), (t[18] = O)), (0, Z.useEffect)(D, O));
  let k;
  t[19] === a ? (k = t[20]) : ((k = { height: a, width: a }), (t[19] = a), (t[20] = k));
  let A = o ? re : G,
    ee = n && `pointer-events-none`,
    j;
  t[21] === ee ? (j = t[22]) : ((j = h(`absolute inset-0`, ee)), (t[21] = ee), (t[22] = j));
  let M;
  t[23] !== _ || t[24] !== x
    ? ((M = { opacity: _, scale: x }), (t[23] = _), (t[24] = x), (t[25] = M))
    : (M = t[25]);
  let N;
  t[26] !== i || t[27] !== j || t[28] !== M
    ? ((N = (0, Q.jsx)(d.div, { className: j, style: M, children: i })),
      (t[26] = i),
      (t[27] = j),
      (t[28] = M),
      (t[29] = N))
    : (N = t[29]);
  let P;
  t[30] !== y || t[31] !== C
    ? ((P = { opacity: y, scale: C }), (t[30] = y), (t[31] = C), (t[32] = P))
    : (P = t[32]);
  let F;
  t[33] === o ? (F = t[34]) : ((F = (0, Q.jsx)(Se, { ref: s, reduceMotion: o })), (t[33] = o), (t[34] = F));
  let I;
  t[35] !== P || t[36] !== F
    ? ((I = (0, Q.jsx)(d.div, {
        className: `pointer-events-none absolute inset-0 flex items-center justify-center`,
        style: P,
        children: F,
      })),
      (t[35] = P),
      (t[36] = F),
      (t[37] = I))
    : (I = t[37]);
  let te = +!n,
    L;
  t[38] === te ? (L = t[39]) : ((L = { opacity: te }), (t[38] = te), (t[39] = L));
  let R;
  t[40] !== n || t[41] !== f
    ? ((R = () => {
        let e = s.current;
        if (n) {
          ((l.current = !1), (c.current = !1), e != null && (e.style.animationPlayState = ``));
          return;
        }
        if (((l.current = !0), e == null)) return;
        let t = e.getBoundingClientRect().width;
        (t > 0 && f.set(t), (e.style.animationPlayState = `paused`));
      }),
      (t[40] = n),
      (t[41] = f),
      (t[42] = R))
    : (R = t[42]);
  let z;
  t[43] !== T || t[44] !== n || t[45] !== o
    ? ((z = () => {
        !n && !o && l.current && ((l.current = !1), T());
      }),
      (t[43] = T),
      (t[44] = n),
      (t[45] = o),
      (t[46] = z))
    : (z = t[46]);
  let B;
  t[47] === u ? (B = t[48]) : ((B = { opacity: u }), (t[47] = u), (t[48] = B));
  let V = o ? 0 : n ? 0.325 : ue / 1e3,
    H;
  t[49] === V ? (H = t[50]) : ((H = { duration: V, ease: `linear` }), (t[49] = V), (t[50] = H));
  let U;
  t[51] !== L || t[52] !== R || t[53] !== z || t[54] !== B || t[55] !== H
    ? ((U = (0, Q.jsx)(d.span, {
        "aria-hidden": !0,
        animate: L,
        className: `pointer-events-none absolute size-0`,
        initial: !1,
        onAnimationStart: R,
        onAnimationComplete: z,
        style: B,
        transition: H,
      })),
      (t[51] = L),
      (t[52] = R),
      (t[53] = z),
      (t[54] = B),
      (t[55] = H),
      (t[56] = U))
    : (U = t[56]);
  let W;
  return (
    t[57] !== N || t[58] !== I || t[59] !== U || t[60] !== k || t[61] !== A
      ? ((W = (0, Q.jsxs)(d.div, {
          "aria-hidden": !0,
          className: `relative flex items-center justify-center`,
          initial: !1,
          animate: k,
          transition: A,
          children: [N, I, U],
        })),
        (t[57] = N),
        (t[58] = I),
        (t[59] = U),
        (t[60] = k),
        (t[61] = A),
        (t[62] = W))
      : (W = t[62]),
    W
  );
}
function be(e) {
  return 1 - e;
}
function xe(e) {
  return le(e * ue);
}
function Se(e) {
  let t = (0, Ce.c)(5),
    { ref: n, reduceMotion: r } = e,
    i = !r && `pulsing-dot`,
    a;
  t[0] === i ? (a = t[1]) : ((a = h(`size-[50px] rounded-full bg-primary-solid`, i)), (t[0] = i), (t[1] = a));
  let o;
  return (
    t[2] !== n || t[3] !== a
      ? ((o = (0, Q.jsx)(`div`, { ref: n, className: a })), (t[2] = n), (t[3] = a), (t[4] = o))
      : (o = t[4]),
    o
  );
}
var Ce, Z, Q;
function we() {
  return (we = e(() => {
    ((Ce = S()), u(), g(), m(), x(), (Z = E()), ve(), ne(), (Q = T()));
  }))();
}
function Te(e) {
  let a = (0, ke.c)(69),
    { threadLocator: s } = e,
    u = i(n),
    f = w(),
    p = c(ee),
    m = c(R),
    h = c(te),
    g = l(),
    _ = U(),
    v =
      s == null
        ? p?.request.source === `composer_button_new_thread` &&
          k(`${f.pathname}${f.search}`, p.originPath, j(m, h))
        : I(p, s.conversationId, s.hostId);
  if (
    p == null ||
    !v ||
    (p.request.source === `composer_button_existing_thread` &&
      p.request.preferredPresentationSurface === `in-window`) ||
    ((p.request.source === `composer_button_existing_thread` || p.request.pageCompanion != null) &&
      p.phase !== `failed`)
  )
    return null;
  if (p.phase === `failed`) {
    let e = p.error === F,
      n = o.systemPermissions,
      i;
    a[0] === e
      ? (i = a[1])
      : ((i = (0, $.jsx)(`h2`, {
          className: `text-base font-medium text-default`,
          children: e
            ? (0, $.jsx)(r, {
                id: `realtimeVoice.launch.microphonePermissionDeniedTitle`,
                defaultMessage: `Microphone permission denied`,
                description: `Title shown when realtime voice chat cannot start because the operating system denied microphone permission`,
              })
            : (0, $.jsx)(r, {
                id: `realtimeVoice.launch.failedTitle`,
                defaultMessage: `Voice chat couldn’t start`,
                description: `Title shown when an optimistic realtime voice launch fails`,
              }),
        })),
        (a[0] = e),
        (a[1] = i));
    let s;
    a[2] !== p.error || a[3] !== e
      ? ((s = e
          ? (0, $.jsx)(r, {
              id: `realtimeVoice.launch.microphonePermissionDeniedDescription`,
              defaultMessage: `Allow microphone access in system settings to start a voice chat`,
              description: `Instructions shown when operating-system microphone permission must be enabled before starting realtime voice chat`,
            })
          : p.error ||
            (0, $.jsx)(r, {
              id: `realtimeVoice.launch.failedDescription`,
              defaultMessage: `Try again, or go back`,
              description: `Description shown when an optimistic realtime voice launch fails`,
            })),
        (a[2] = p.error),
        (a[3] = e),
        (a[4] = s))
      : (s = a[4]);
    let c;
    a[5] === s
      ? (c = a[6])
      : ((c = (0, $.jsx)(`p`, { className: `text-sm text-secondary`, children: s })), (a[5] = s), (a[6] = c));
    let l;
    a[7] !== i || a[8] !== c
      ? ((l = (0, $.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [i, c] })),
        (a[7] = i),
        (a[8] = c),
        (a[9] = l))
      : (l = a[9]);
    let d;
    a[10] === e
      ? (d = a[11])
      : ((d =
          e &&
          n != null &&
          (0, $.jsx)(t, {
            color: `primary`,
            onClick: () => {
              n.openMicrophoneSettings().catch(Oe);
            },
            size: `medium`,
            children: (0, $.jsx)(r, {
              id: `realtimeVoice.launch.openMicrophoneSettings`,
              defaultMessage: `Open system settings`,
              description: `Button that opens the operating-system microphone privacy settings after microphone permission blocks realtime voice chat`,
            }),
          })),
        (a[10] = e),
        (a[11] = d));
    let f = e && n != null ? `secondary` : `primary`,
      m;
    a[12] !== p.originPath ||
    a[13] !== p.request ||
    a[14] !== p.sourceComposerScope ||
    a[15] !== p.workHomePolicyAcceptance ||
    a[16] !== u
      ? ((m = () => {
          L(u, p.sourceComposerScope, p.request, p.originPath, p.workHomePolicyAcceptance).catch(De);
        }),
        (a[12] = p.originPath),
        (a[13] = p.request),
        (a[14] = p.sourceComposerScope),
        (a[15] = p.workHomePolicyAcceptance),
        (a[16] = u),
        (a[17] = m))
      : (m = a[17]);
    let h;
    a[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((h = (0, $.jsx)(r, {
          id: `realtimeVoice.launch.retry`,
          defaultMessage: `Try again`,
          description: `Button that retries a failed realtime voice launch`,
        })),
        (a[18] = h))
      : (h = a[18]);
    let g;
    a[19] !== f || a[20] !== m
      ? ((g = (0, $.jsx)(t, { color: f, onClick: m, size: `medium`, children: h })),
        (a[19] = f),
        (a[20] = m),
        (a[21] = g))
      : (g = a[21]);
    let _;
    a[22] === p.error
      ? (_ = a[23])
      : ((_ = () => {
          P(`feedback`, `realtime_voice_startup_failure`, { feedbackDetails: p.error });
        }),
        (a[22] = p.error),
        (a[23] = _));
    let v;
    a[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((v = (0, $.jsx)(r, {
          id: `realtimeVoice.launch.feedback`,
          defaultMessage: `Send feedback`,
          description: `Button that opens the feedback dialog with a failed realtime voice startup error`,
        })),
        (a[24] = v))
      : (v = a[24]);
    let y;
    a[25] === _
      ? (y = a[26])
      : ((y = (0, $.jsx)(t, { color: `secondary`, onClick: _, size: `medium`, children: v })),
        (a[25] = _),
        (a[26] = y));
    let b;
    a[27] === u
      ? (b = a[28])
      : ((b = () => {
          B(u).catch(Ee);
        }),
        (a[27] = u),
        (a[28] = b));
    let x;
    a[29] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((x = (0, $.jsx)(r, {
          id: `realtimeVoice.launch.back`,
          defaultMessage: `Back`,
          description: `Button that dismisses a failed realtime voice launch and returns to the previous surface`,
        })),
        (a[29] = x))
      : (x = a[29]);
    let S;
    a[30] === b
      ? (S = a[31])
      : ((S = (0, $.jsx)(t, { color: `secondary`, onClick: b, size: `medium`, children: x })),
        (a[30] = b),
        (a[31] = S));
    let C;
    a[32] !== y || a[33] !== S || a[34] !== d || a[35] !== g
      ? ((C = (0, $.jsxs)(`div`, {
          className: `flex flex-wrap justify-center gap-2`,
          children: [d, g, y, S],
        })),
        (a[32] = y),
        (a[33] = S),
        (a[34] = d),
        (a[35] = g),
        (a[36] = C))
      : (C = a[36]);
    let w;
    return (
      a[37] !== C || a[38] !== l
        ? ((w = (0, $.jsx)(`div`, {
            className: `absolute inset-0 z-30 flex items-center justify-center bg-surface`,
            children: (0, $.jsxs)(`div`, {
              className: `flex flex-col items-center gap-4 text-center`,
              children: [l, C],
            }),
          })),
          (a[37] = C),
          (a[38] = l),
          (a[39] = w))
        : (w = a[39]),
      w
    );
  }
  let y = m.phase === `active` && m.preferredPresentationSurface === `main-thread`,
    b = p.phase === `connected` && p.handoffComplete,
    x = _ && h?.surface === `main-thread` && h.handoff?.from === `global-overlay` ? ae : se,
    S = +!b,
    C;
  a[40] === S ? (C = a[41]) : ((C = { opacity: S }), (a[40] = S), (a[41] = C));
  let T;
  a[42] !== b || a[43] !== p.request || a[44] !== u
    ? ((T = () => {
        b && z(u, p.request);
      }),
      (a[42] = b),
      (a[43] = p.request),
      (a[44] = u),
      (a[45] = T))
    : (T = a[45]);
  let E = g ? re : ie,
    O;
  a[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, $.jsx)(`span`, {
        className: `sr-only`,
        role: `status`,
        children: (0, $.jsx)(r, {
          id: `realtimeVoice.launch.starting`,
          defaultMessage: `Starting voice chat`,
          description: `Accessible status announced while realtime voice starts`,
        }),
      })),
      (a[46] = O))
    : (O = a[46]);
  let A;
  a[47] === x ? (A = a[48]) : ((A = { transform: x }), (a[47] = x), (a[48] = A));
  let M;
  a[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = { height: 112, width: 112 }), (a[49] = M))
    : (M = a[49]);
  let N = !y,
    V;
  a[50] !== p.request || a[51] !== u
    ? ((V = () => D(u, p.request)), (a[50] = p.request), (a[51] = u), (a[52] = V))
    : (V = a[52]);
  let W = m.phase === `inactive` ? `starting` : m.phase,
    ne = m.phase === `inactive` ? `idle` : m.activity,
    G;
  a[53] !== W || a[54] !== ne
    ? ((G = (0, $.jsx)(H, {
        className: `!aspect-square !size-full`,
        glowEnabled: !1,
        phase: W,
        placement: `center`,
        voiceActivity: ne,
      })),
      (a[53] = W),
      (a[54] = ne),
      (a[55] = G))
    : (G = a[55]);
  let K;
  a[56] !== g || a[57] !== G || a[58] !== N || a[59] !== V
    ? ((K = (0, $.jsx)(`div`, {
        className: `relative flex`,
        style: M,
        children: (0, $.jsx)(ye, {
          isConnecting: N,
          onHandoffComplete: V,
          orb: G,
          orbDiameter: 112,
          reduceMotion: g,
        }),
      })),
      (a[56] = g),
      (a[57] = G),
      (a[58] = N),
      (a[59] = V),
      (a[60] = K))
    : (K = a[60]);
  let q;
  a[61] !== K || a[62] !== A
    ? ((q = (0, $.jsx)(`div`, {
        className: oe,
        children: (0, $.jsx)(`div`, { className: ce, style: A, children: K }),
      })),
      (a[61] = K),
      (a[62] = A),
      (a[63] = q))
    : (q = a[63]);
  let le;
  return (
    a[64] !== q || a[65] !== C || a[66] !== T || a[67] !== E
      ? ((le = (0, $.jsxs)(d.div, {
          animate: C,
          className: `absolute inset-0 z-30 bg-surface`,
          initial: !1,
          onAnimationComplete: T,
          transition: E,
          children: [O, q],
        })),
        (a[64] = q),
        (a[65] = C),
        (a[66] = T),
        (a[67] = E),
        (a[68] = le))
      : (le = a[68]),
    le
  );
}
function Ee() {}
function De() {}
function Oe() {}
var ke, $;
function Ae() {
  return (Ae = e(() => {
    ((ke = S()),
      g(),
      s(),
      _(),
      f(),
      O(),
      b(),
      a(),
      A(),
      y(),
      C(),
      we(),
      V(),
      M(),
      ne(),
      N(),
      K(),
      W(),
      ($ = T()));
  }))();
}
export { we as i, Ae as n, ye as r, Te as t };
//# sourceMappingURL=realtime-voice-launch-surface-6cde3ff5da14.js.map
