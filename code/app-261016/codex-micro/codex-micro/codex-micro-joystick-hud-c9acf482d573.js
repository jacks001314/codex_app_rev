import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Kj as t,
  LNt as n,
  MNt as r,
  NNt as i,
  PBt as ee,
  XOt as a,
  YOt as o,
  ZSt as s,
  iCt as c,
  okt as te,
  qj as ne,
  tkt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import { NNn as u, PNn as d, hct as f, sct as p } from "./app-initial-ad16eaadf81f.js";
import { r as m, t as h } from "./codex-micro-joystick-feedback-da1cb053593c.js";
import { n as g, t as re } from "./check-lg-7ec586510091.js";
import { n as _, t as ie } from "./codex-micro-analog-action-title-57a5e999b668.js";
function v() {
  let e = (0, b.c)(4),
    t = c(h),
    n = c(p),
    { skills: r } = d(),
    i;
  return (
    e[0] !== t || e[1] !== n || e[2] !== r
      ? ((i = (0, x.jsx)(y, { feedback: t, isMappingEditorOpen: n, skills: r })),
        (e[0] = t),
        (e[1] = n),
        (e[2] = r),
        (e[3] = i))
      : (i = e[3]),
    i
  );
}
function y(e) {
  let n = (0, b.c)(72),
    { feedback: i, isMappingEditorOpen: ee, skills: a } = e,
    o = te(),
    s = i.visible && !ee,
    c = i.event.angle * Math.PI * 2,
    ne = Math.min(i.event.distance, 1) * 13,
    u = i.status === `game-gesture`,
    d = u ? (i.gameActivationProgress ?? 0) : Math.min(i.event.distance / 0.5, 1),
    f;
  n[0] !== i.action || n[1] !== o || n[2] !== u || n[3] !== a
    ? ((f = u
        ? (0, x.jsx)(l, { ...S.miniGameTitle })
        : i.action == null
          ? (0, x.jsx)(l, {
              id: `codexMicro.joystickFeedback.unassignedTitle`,
              defaultMessage: `Unassigned`,
              description: `Action title shown for an unassigned Codex Micro joystick direction`,
            })
          : ie(i.action, a, o)),
      (n[0] = i.action),
      (n[1] = o),
      (n[2] = u),
      (n[3] = a),
      (n[4] = f))
    : (f = n[4]);
  let p = f,
    m = S[i.status];
  i.status === `tracking` && i.action == null && (m = S.unassignedTracking);
  let h = i.status === `triggered`,
    g = i.status === `unavailable`,
    _ = h || u,
    v = !s,
    y = s ? `translate-y-0 opacity-100` : `-translate-y-1 opacity-0`,
    C;
  n[5] === y
    ? (C = n[6])
    : ((C = r(
        `pointer-events-none absolute top-14 left-1/2 z-[55] w-[min(19rem,calc(100%_-_2rem))] -translate-x-1/2 transition-[opacity,transform] duration-basic ease-out motion-reduce:translate-y-0 motion-reduce:transition-opacity`,
        y,
      )),
      (n[5] = y),
      (n[6] = C));
  let se = i.status,
    ce = _ && `border-text-info/35 shadow-[0_10px_30px_rgba(30,88,190,0.18)]`,
    le = g && `border-text-warning/35`,
    ue = !_ && !g && `border-default`,
    w;
  n[7] !== ce || n[8] !== le || n[9] !== ue
    ? ((w = r(
        `flex items-center gap-3 rounded-2xl border bg-surface-elevated-secondary p-2.5 shadow-xl transition-[border-color,box-shadow] duration-basic ease-out`,
        ce,
        le,
        ue,
      )),
      (n[7] = ce),
      (n[8] = le),
      (n[9] = ue),
      (n[10] = w))
    : (w = n[10]);
  let T = _
      ? `border-text-info/45 shadow-[inset_0_0_0_1px_rgba(141,181,255,0.12),0_0_14px_rgba(91,141,235,0.18)]`
      : `border-default`,
    E;
  n[11] === T
    ? (E = n[12])
    : ((E = r(
        `relative size-14 shrink-0 overflow-hidden rounded-full border shadow-inner transition-[border-color,box-shadow] duration-basic ease-out`,
        T,
      )),
      (n[11] = T),
      (n[12] = E));
  let D, O, k;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, x.jsx)(`div`, {
        className: `absolute inset-[1.15rem] rounded-full border border-border/70`,
      })),
      (O = (0, x.jsx)(`div`, {
        className: `absolute top-1/2 right-2 left-2 h-px -translate-y-1/2 bg-border/45`,
      })),
      (k = (0, x.jsx)(`div`, {
        className: `absolute top-2 bottom-2 left-1/2 w-px -translate-x-1/2 bg-border/45`,
      })),
      (n[13] = D),
      (n[14] = O),
      (n[15] = k))
    : ((D = n[13]), (O = n[14]), (k = n[15]));
  let A = _ && `bg-text-info shadow-[0_0_9px_rgba(91,141,235,0.72)]`,
    j = g && `bg-text-warning`,
    M = !_ && !g && `bg-primary-solid`,
    N;
  n[16] !== A || n[17] !== j || n[18] !== M
    ? ((N = r(
        `absolute inset-0 m-auto size-2.5 rounded-full shadow-sm transition-[background-color,box-shadow,transform] duration-75 ease-out motion-reduce:transition-none`,
        A,
        j,
        M,
      )),
      (n[16] = A),
      (n[17] = j),
      (n[18] = M),
      (n[19] = N))
    : (N = n[19]);
  let P = `translate(${Math.cos(c) * ne}px, ${Math.sin(c) * ne}px)`,
    F;
  n[20] === P ? (F = n[21]) : ((F = { transform: P }), (n[20] = P), (n[21] = F));
  let I;
  n[22] !== N || n[23] !== F
    ? ((I = (0, x.jsx)(`div`, { className: N, style: F })), (n[22] = N), (n[23] = F), (n[24] = I))
    : (I = n[24]);
  let L;
  n[25] !== E || n[26] !== I
    ? ((L = (0, x.jsxs)(`div`, { className: E, children: [D, O, k, I] })),
      (n[25] = E),
      (n[26] = I),
      (n[27] = L))
    : (L = n[27]);
  let R;
  n[28] !== i.direction || n[29] !== u
    ? ((R = (0, x.jsx)(`div`, {
        className: `flex items-center gap-1.5 text-[11px] font-medium text-tertiary`,
        children: u
          ? (0, x.jsx)(l, { ...S.gameGesture })
          : (0, x.jsxs)(x.Fragment, {
              children: [
                (0, x.jsx)(t, { className: r(`size-3 shrink-0`, ae[i.direction]) }),
                (0, x.jsx)(`span`, { children: (0, x.jsx)(l, { ...S[i.direction] }) }),
              ],
            }),
      })),
      (n[28] = i.direction),
      (n[29] = u),
      (n[30] = R))
    : (R = n[30]);
  let z;
  n[31] === p
    ? (z = n[32])
    : ((z = (0, x.jsx)(`div`, {
        className: `line-clamp-2 text-sm leading-4 font-medium text-default`,
        children: p,
      })),
      (n[31] = p),
      (n[32] = z));
  let B = oe[i.status],
    V;
  n[33] === B
    ? (V = n[34])
    : ((V = r(`flex min-h-4 items-center gap-1.5 text-xs`, B)), (n[33] = B), (n[34] = V));
  let H;
  n[35] === h
    ? (H = n[36])
    : ((H = h
        ? (0, x.jsx)(re, { className: `size-3 shrink-0` })
        : (0, x.jsx)(`span`, { className: `size-1.5 shrink-0 rounded-full bg-current opacity-70` })),
      (n[35] = h),
      (n[36] = H));
  let U;
  n[37] !== o || n[38] !== u || n[39] !== d
    ? ((U = u ? { progress: o.formatNumber(d, { style: `percent` }) } : void 0),
      (n[37] = o),
      (n[38] = u),
      (n[39] = d),
      (n[40] = U))
    : (U = n[40]);
  let W;
  n[41] !== m || n[42] !== U
    ? ((W = (0, x.jsx)(l, { ...m, values: U })), (n[41] = m), (n[42] = U), (n[43] = W))
    : (W = n[43]);
  let G;
  n[44] !== V || n[45] !== H || n[46] !== W
    ? ((G = (0, x.jsxs)(`div`, {
        "aria-atomic": `true`,
        "aria-live": `polite`,
        className: V,
        children: [H, W],
      })),
      (n[44] = V),
      (n[45] = H),
      (n[46] = W),
      (n[47] = G))
    : (G = n[47]);
  let K = _ && `bg-text-info`,
    q = g && `bg-text-warning`,
    de = !_ && !g && `bg-text-tertiary/55`,
    J;
  n[48] !== K || n[49] !== q || n[50] !== de
    ? ((J = r(
        `h-full origin-left rounded-full transition-[background-color,transform] duration-75 ease-out motion-reduce:transition-none`,
        K,
        q,
        de,
      )),
      (n[48] = K),
      (n[49] = q),
      (n[50] = de),
      (n[51] = J))
    : (J = n[51]);
  let fe = `scaleX(${d})`,
    Y;
  n[52] === fe ? (Y = n[53]) : ((Y = { transform: fe }), (n[52] = fe), (n[53] = Y));
  let X;
  n[54] !== J || n[55] !== Y
    ? ((X = (0, x.jsx)(`div`, {
        className: `h-0.5 overflow-hidden rounded-full`,
        children: (0, x.jsx)(`div`, { className: J, style: Y }),
      })),
      (n[54] = J),
      (n[55] = Y),
      (n[56] = X))
    : (X = n[56]);
  let Z;
  n[57] !== R || n[58] !== z || n[59] !== G || n[60] !== X
    ? ((Z = (0, x.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col gap-1.5`,
        children: [R, z, G, X],
      })),
      (n[57] = R),
      (n[58] = z),
      (n[59] = G),
      (n[60] = X),
      (n[61] = Z))
    : (Z = n[61]);
  let Q;
  n[62] !== L || n[63] !== Z || n[64] !== w
    ? ((Q = (0, x.jsxs)(`div`, { className: w, children: [L, Z] })),
      (n[62] = L),
      (n[63] = Z),
      (n[64] = w),
      (n[65] = Q))
    : (Q = n[65]);
  let $;
  return (
    n[66] !== i.status || n[67] !== v || n[68] !== Q || n[69] !== C || n[70] !== s
      ? (($ = (0, x.jsx)(`div`, {
          "aria-hidden": v,
          className: C,
          "data-status": se,
          "data-visible": s,
          children: Q,
        })),
        (n[66] = i.status),
        (n[67] = v),
        (n[68] = Q),
        (n[69] = C),
        (n[70] = s),
        (n[71] = $))
      : ($ = n[71]),
    $
  );
}
var b, x, ae, oe, S;
function C() {
  return (C = e(() => {
    ((b = ee()),
      i(),
      s(),
      a(),
      f(),
      ne(),
      g(),
      u(),
      _(),
      m(),
      (x = n()),
      (ae = { up: ``, right: `rotate-90`, down: `rotate-180`, left: `-rotate-90` }),
      (oe = {
        "game-gesture": `text-info`,
        tracking: `text-secondary`,
        triggered: `text-info`,
        unassigned: `text-secondary`,
        unavailable: `text-warning`,
      }),
      (S = o({
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
C();
export { v as CodexMicroJoystickHud };
//# sourceMappingURL=codex-micro-joystick-hud-c9acf482d573.js.map
