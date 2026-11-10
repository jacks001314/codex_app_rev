import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  IDt as n,
  Pxt as r,
  VDt as i,
  Vxt as a,
  _Mt as o,
  gMt as s,
  ij as c,
  jDt as l,
  rj as ee,
  vzt as te,
  xMt as u,
} from "./app-shared-bbfeca5e5737.js";
import { Yot as d, dAn as f, fAn as p, rst as m } from "./app-initial-5851df3f6cb1.js";
import { r as h, t as g } from "./codex-micro-joystick-feedback-d7847516931e.js";
import { n as _, t as ne } from "./check-lg-79c31d3b1d03.js";
import { n as v, t as re } from "./codex-micro-analog-action-title-56f79effef85.js";
function y() {
  let e = (0, x.c)(4),
    t = a(g),
    n = a(d),
    { skills: r } = p(),
    i;
  return (
    e[0] !== t || e[1] !== n || e[2] !== r
      ? ((i = (0, S.jsx)(b, { feedback: t, isMappingEditorOpen: n, skills: r })),
        (e[0] = t),
        (e[1] = n),
        (e[2] = r),
        (e[3] = i))
      : (i = e[3]),
    i
  );
}
function b(e) {
  let t = (0, x.c)(72),
    { feedback: r, isMappingEditorOpen: a, skills: o } = e,
    c = i(),
    l = r.visible && !a,
    te = r.event.angle * Math.PI * 2,
    u = Math.min(r.event.distance, 1) * 13,
    d = r.status === `game-gesture`,
    f = d ? (r.gameActivationProgress ?? 0) : Math.min(r.event.distance / 0.5, 1),
    p;
  t[0] !== r.action || t[1] !== c || t[2] !== d || t[3] !== o
    ? ((p = d
        ? (0, S.jsx)(n, { ...C.miniGameTitle })
        : r.action == null
          ? (0, S.jsx)(n, {
              id: `codexMicro.joystickFeedback.unassignedTitle`,
              defaultMessage: `Unassigned`,
              description: `Action title shown for an unassigned Codex Micro joystick direction`,
            })
          : re(r.action, o, c)),
      (t[0] = r.action),
      (t[1] = c),
      (t[2] = d),
      (t[3] = o),
      (t[4] = p))
    : (p = t[4]);
  let m = p,
    h = C[r.status];
  r.status === `tracking` && r.action == null && (h = C.unassignedTracking);
  let g = r.status === `triggered`,
    _ = r.status === `unavailable`,
    v = g || d,
    y = !l,
    b = l ? `translate-y-0 opacity-100` : `-translate-y-1 opacity-0`,
    w;
  t[5] === b
    ? (w = t[6])
    : ((w = s(
        `pointer-events-none absolute top-14 left-1/2 z-[55] w-[min(19rem,calc(100%_-_2rem))] -translate-x-1/2 transition-[opacity,transform] duration-basic ease-out motion-reduce:translate-y-0 motion-reduce:transition-opacity`,
        b,
      )),
      (t[5] = b),
      (t[6] = w));
  let oe = r.status,
    T = v && `border-text-info/35 shadow-[0_10px_30px_rgba(30,88,190,0.18)]`,
    E = _ && `border-text-warning/35`,
    D = !v && !_ && `border-default`,
    O;
  t[7] !== T || t[8] !== E || t[9] !== D
    ? ((O = s(
        `flex items-center gap-3 rounded-2xl border bg-surface-elevated-secondary p-2.5 shadow-xl transition-[border-color,box-shadow] duration-basic ease-out`,
        T,
        E,
        D,
      )),
      (t[7] = T),
      (t[8] = E),
      (t[9] = D),
      (t[10] = O))
    : (O = t[10]);
  let k = v
      ? `border-text-info/45 shadow-[inset_0_0_0_1px_rgba(141,181,255,0.12),0_0_14px_rgba(91,141,235,0.18)]`
      : `border-default`,
    A;
  t[11] === k
    ? (A = t[12])
    : ((A = s(
        `relative size-14 shrink-0 overflow-hidden rounded-full border shadow-inner transition-[border-color,box-shadow] duration-basic ease-out`,
        k,
      )),
      (t[11] = k),
      (t[12] = A));
  let j, M, N;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, S.jsx)(`div`, {
        className: `absolute inset-[1.15rem] rounded-full border border-border/70`,
      })),
      (M = (0, S.jsx)(`div`, {
        className: `absolute top-1/2 right-2 left-2 h-px -translate-y-1/2 bg-border/45`,
      })),
      (N = (0, S.jsx)(`div`, {
        className: `absolute top-2 bottom-2 left-1/2 w-px -translate-x-1/2 bg-border/45`,
      })),
      (t[13] = j),
      (t[14] = M),
      (t[15] = N))
    : ((j = t[13]), (M = t[14]), (N = t[15]));
  let se = v && `bg-text-info shadow-[0_0_9px_rgba(91,141,235,0.72)]`,
    ce = _ && `bg-text-warning`,
    le = !v && !_ && `bg-primary-solid`,
    P;
  t[16] !== se || t[17] !== ce || t[18] !== le
    ? ((P = s(
        `absolute inset-0 m-auto size-2.5 rounded-full shadow-sm transition-[background-color,box-shadow,transform] duration-75 ease-out motion-reduce:transition-none`,
        se,
        ce,
        le,
      )),
      (t[16] = se),
      (t[17] = ce),
      (t[18] = le),
      (t[19] = P))
    : (P = t[19]);
  let F = `translate(${Math.cos(te) * u}px, ${Math.sin(te) * u}px)`,
    I;
  t[20] === F ? (I = t[21]) : ((I = { transform: F }), (t[20] = F), (t[21] = I));
  let L;
  t[22] !== P || t[23] !== I
    ? ((L = (0, S.jsx)(`div`, { className: P, style: I })), (t[22] = P), (t[23] = I), (t[24] = L))
    : (L = t[24]);
  let R;
  t[25] !== A || t[26] !== L
    ? ((R = (0, S.jsxs)(`div`, { className: A, children: [j, M, N, L] })),
      (t[25] = A),
      (t[26] = L),
      (t[27] = R))
    : (R = t[27]);
  let z;
  t[28] !== r.direction || t[29] !== d
    ? ((z = (0, S.jsx)(`div`, {
        className: `flex items-center gap-1.5 text-[11px] font-medium text-tertiary`,
        children: d
          ? (0, S.jsx)(n, { ...C.gameGesture })
          : (0, S.jsxs)(S.Fragment, {
              children: [
                (0, S.jsx)(ee, { className: s(`size-3 shrink-0`, ie[r.direction]) }),
                (0, S.jsx)(`span`, { children: (0, S.jsx)(n, { ...C[r.direction] }) }),
              ],
            }),
      })),
      (t[28] = r.direction),
      (t[29] = d),
      (t[30] = z))
    : (z = t[30]);
  let B;
  t[31] === m
    ? (B = t[32])
    : ((B = (0, S.jsx)(`div`, {
        className: `line-clamp-2 text-sm leading-4 font-medium text-default`,
        children: m,
      })),
      (t[31] = m),
      (t[32] = B));
  let V = ae[r.status],
    H;
  t[33] === V
    ? (H = t[34])
    : ((H = s(`flex min-h-4 items-center gap-1.5 text-xs`, V)), (t[33] = V), (t[34] = H));
  let U;
  t[35] === g
    ? (U = t[36])
    : ((U = g
        ? (0, S.jsx)(ne, { className: `size-3 shrink-0` })
        : (0, S.jsx)(`span`, { className: `size-1.5 shrink-0 rounded-full bg-current opacity-70` })),
      (t[35] = g),
      (t[36] = U));
  let W;
  t[37] !== c || t[38] !== d || t[39] !== f
    ? ((W = d ? { progress: c.formatNumber(f, { style: `percent` }) } : void 0),
      (t[37] = c),
      (t[38] = d),
      (t[39] = f),
      (t[40] = W))
    : (W = t[40]);
  let G;
  t[41] !== h || t[42] !== W
    ? ((G = (0, S.jsx)(n, { ...h, values: W })), (t[41] = h), (t[42] = W), (t[43] = G))
    : (G = t[43]);
  let K;
  t[44] !== H || t[45] !== U || t[46] !== G
    ? ((K = (0, S.jsxs)(`div`, {
        "aria-atomic": `true`,
        "aria-live": `polite`,
        className: H,
        children: [U, G],
      })),
      (t[44] = H),
      (t[45] = U),
      (t[46] = G),
      (t[47] = K))
    : (K = t[47]);
  let q = v && `bg-text-info`,
    ue = _ && `bg-text-warning`,
    de = !v && !_ && `bg-text-tertiary/55`,
    J;
  t[48] !== q || t[49] !== ue || t[50] !== de
    ? ((J = s(
        `h-full origin-left rounded-full transition-[background-color,transform] duration-75 ease-out motion-reduce:transition-none`,
        q,
        ue,
        de,
      )),
      (t[48] = q),
      (t[49] = ue),
      (t[50] = de),
      (t[51] = J))
    : (J = t[51]);
  let fe = `scaleX(${f})`,
    Y;
  t[52] === fe ? (Y = t[53]) : ((Y = { transform: fe }), (t[52] = fe), (t[53] = Y));
  let X;
  t[54] !== J || t[55] !== Y
    ? ((X = (0, S.jsx)(`div`, {
        className: `h-0.5 overflow-hidden rounded-full`,
        children: (0, S.jsx)(`div`, { className: J, style: Y }),
      })),
      (t[54] = J),
      (t[55] = Y),
      (t[56] = X))
    : (X = t[56]);
  let Z;
  t[57] !== z || t[58] !== B || t[59] !== K || t[60] !== X
    ? ((Z = (0, S.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col gap-1.5`,
        children: [z, B, K, X],
      })),
      (t[57] = z),
      (t[58] = B),
      (t[59] = K),
      (t[60] = X),
      (t[61] = Z))
    : (Z = t[61]);
  let Q;
  t[62] !== R || t[63] !== Z || t[64] !== O
    ? ((Q = (0, S.jsxs)(`div`, { className: O, children: [R, Z] })),
      (t[62] = R),
      (t[63] = Z),
      (t[64] = O),
      (t[65] = Q))
    : (Q = t[65]);
  let $;
  return (
    t[66] !== r.status || t[67] !== y || t[68] !== Q || t[69] !== w || t[70] !== l
      ? (($ = (0, S.jsx)(`div`, {
          "aria-hidden": y,
          className: w,
          "data-status": oe,
          "data-visible": l,
          children: Q,
        })),
        (t[66] = r.status),
        (t[67] = y),
        (t[68] = Q),
        (t[69] = w),
        (t[70] = l),
        (t[71] = $))
      : ($ = t[71]),
    $
  );
}
var x, S, ie, ae, C;
function w() {
  return (w = e(() => {
    ((x = te()),
      o(),
      r(),
      l(),
      m(),
      c(),
      _(),
      f(),
      v(),
      h(),
      (S = u()),
      (ie = { up: ``, right: `rotate-90`, down: `rotate-180`, left: `-rotate-90` }),
      (ae = {
        "game-gesture": `text-info`,
        tracking: `text-secondary`,
        triggered: `text-info`,
        unassigned: `text-secondary`,
        unavailable: `text-warning`,
      }),
      (C = t({
        miniGameTitle: {
          id: `codexMicro.joystickFeedback.miniGameTitle`,
          defaultMessage: `Mini-game`,
          description: `Title shown while the Codex Micro mini-game activation gesture is in progress`,
        },
        gameGesture: {
          id: `codexMicro.joystickFeedback.gameGesture`,
          defaultMessage: `Secret game`,
          description: `Category label shown while the Codex Micro mini-game activation gesture is in progress`,
        },
        "game-gesture": {
          id: `codexMicro.joystickFeedback.gameGestureProgress`,
          defaultMessage: `Keep circling · {progress}`,
          description: `Progress shown while circling the Codex Micro joystick to activate a mini-game`,
        },
        up: {
          id: `codexMicro.joystickFeedback.up`,
          defaultMessage: `Up`,
          description: `Up direction in the Codex Micro joystick feedback HUD`,
        },
        right: {
          id: `codexMicro.joystickFeedback.right`,
          defaultMessage: `Right`,
          description: `Right direction in the Codex Micro joystick feedback HUD`,
        },
        down: {
          id: `codexMicro.joystickFeedback.down`,
          defaultMessage: `Down`,
          description: `Down direction in the Codex Micro joystick feedback HUD`,
        },
        left: {
          id: `codexMicro.joystickFeedback.left`,
          defaultMessage: `Left`,
          description: `Left direction in the Codex Micro joystick feedback HUD`,
        },
        tracking: {
          id: `codexMicro.joystickFeedback.tracking`,
          defaultMessage: `Move farther to trigger`,
          description: `Feedback shown while moving the Codex Micro joystick toward an assigned action`,
        },
        triggered: {
          id: `codexMicro.joystickFeedback.triggered`,
          defaultMessage: `Triggered`,
          description: `Feedback shown when a Codex Micro joystick action has been dispatched`,
        },
        unassigned: {
          id: `codexMicro.joystickFeedback.unassigned`,
          defaultMessage: `Direction reached`,
          description: `Feedback shown when the Codex Micro joystick reaches an unassigned direction`,
        },
        unavailable: {
          id: `codexMicro.joystickFeedback.unavailable`,
          defaultMessage: `Shortcut unavailable`,
          description: `Feedback shown when a Codex Micro joystick action cannot be dispatched`,
        },
        unassignedTracking: {
          id: `codexMicro.joystickFeedback.unassignedTracking`,
          defaultMessage: `No shortcut configured`,
          description: `Feedback shown while moving the Codex Micro joystick toward an unassigned direction`,
        },
      })));
  }))();
}
w();
export { y as CodexMicroJoystickHud };
//# sourceMappingURL=codex-micro-joystick-hud-8a89b8451b25.js.map
