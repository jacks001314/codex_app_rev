import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  FTt as i,
  HTt as a,
  ITt as o,
  LNt as s,
  MNt as c,
  NNt as l,
  PBt as u,
  Qst as d,
  Uz as f,
  VTt as ee,
  Wz as te,
  XOt as p,
  Y3 as m,
  Yst as ne,
  Z3 as h,
  ZSt as g,
  iCt as _,
  nCt as v,
  tkt as y,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CPn as b,
  DPn as x,
  KBr as S,
  Nqn as C,
  Pqn as w,
  SPn as T,
  Ujn as E,
  VPn as D,
  n0n as O,
  qjn as k,
  xMr as re,
  yMr as A,
} from "./app-initial-ad16eaadf81f.js";
import { $i as j, Qi as M, Zi as N, hr as P, or as F } from "./app-primary-3e00728c2a4c.js";
import { i as I, r as L, t as R } from "./realtime-voice-motion-1152410890e5.js";
import { i as z, n as B, r as V, t as H } from "./content-8d3108c5dbfc.js";
function U() {
  let e = (0, X.c)(13),
    t = _(j),
    n;
  e[0] === t ? (n = e[1]) : ((n = N(t)), (e[0] = t), (e[1] = n));
  let r = n,
    i = x(W),
    a = r != null && (r.content.type !== `memory-saved` || i != null) ? `h-10` : `h-0`,
    o;
  e[2] === a
    ? (o = e[3])
    : ((o = c(`relative flex min-w-0 items-center justify-center gap-2`, a)), (e[2] = a), (e[3] = o));
  let s;
  e[4] === r
    ? (s = e[5])
    : ((s =
        r != null && r.content.type !== `memory-saved`
          ? (0, Q.jsx)(
              G,
              { message: r },
              `${r.spawnId}:${r.content.type === `cot-v5-progress` ? r.content.progress.id : `text`}`,
            )
          : null),
      (e[4] = r),
      (e[5] = s));
  let l;
  e[6] !== i || e[7] !== r?.content
    ? ((l =
        i == null
          ? null
          : (0, Q.jsx)(`div`, {
              className: c(
                `absolute inset-0 flex items-center justify-center gap-2`,
                r?.content.type !== `memory-saved` && `pointer-events-none opacity-0`,
              ),
              inert: r?.content.type !== `memory-saved`,
              children: (0, Q.jsx)(J, {
                memoryCallMessageId: i.memory_call_message_id,
                memoryResultMessageId: i.memory_result_message_id,
              }),
            })),
      (e[6] = i),
      (e[7] = r?.content),
      (e[8] = l))
    : (l = e[8]);
  let u;
  return (
    e[9] !== o || e[10] !== s || e[11] !== l
      ? ((u = (0, Q.jsxs)(`div`, {
          className: o,
          "aria-atomic": `true`,
          "aria-live": `polite`,
          "data-testid": `voice-commentary-message`,
          role: `status`,
          children: [s, l],
        })),
        (e[9] = o),
        (e[10] = s),
        (e[11] = l),
        (e[12] = u))
      : (u = e[12]),
    u
  );
}
function W(e) {
  return e.server.memoryUpdate;
}
function G(e) {
  let n = (0, X.c)(29),
    { message: r } = e,
    i = t(d),
    a = te(),
    s = x(q),
    c = v(s == null || E, s ?? ``),
    l = r.content.type === `cot-v5-progress` ? r.content.progress : null,
    [u, f] = (0, Z.useState)(-1),
    p = l?.texts.length ?? 0,
    h = Math.max(-1, Math.min(u, p - 1));
  u !== h && f(h);
  let g, _;
  (n[0] !== u || n[1] !== p
    ? ((g = () => {
        if (u >= p - 1) return;
        let e = setTimeout(() => f(K), 1500);
        return () => clearTimeout(e);
      }),
      (_ = [u, p]),
      (n[0] = u),
      (n[1] = p),
      (n[2] = g),
      (n[3] = _))
    : ((g = n[2]), (_ = n[3])),
    (0, Z.useEffect)(g, _));
  let b = r.content.type === `legacy-text` ? r.content.text : null;
  l != null && (b = l.texts[h] ?? l.texts[0] ?? null);
  let S = l != null && h < 0 ? `thinking` : b,
    C,
    w,
    D;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = { opacity: 0 }), (w = { opacity: 1 }), (D = { opacity: 0 }), (n[4] = C), (n[5] = w), (n[6] = D))
    : ((C = n[4]), (w = n[5]), (D = n[6]));
  let O = a ? L : R,
    k;
  n[7] !== u || n[8] !== l || n[9] !== c
    ? ((k =
        l != null && u >= 0
          ? (0, Q.jsx)(V, { hostId: ne, shouldBlockExternalEgress: c, toolIcons: l.toolIcons })
          : null),
      (n[7] = u),
      (n[8] = l),
      (n[9] = c),
      (n[10] = k))
    : (k = n[10]);
  let A;
  n[11] !== r.spawnId || n[12] !== l || n[13] !== i
    ? ((A = () => {
        let e = T(i).getState();
        e.voiceSessionId != null &&
          re(i, F, {
            voiceSessionId: e.voiceSessionId,
            conversationId: e.earlyServerThreadId ?? e.conversationId ?? void 0,
            messageId: l == null ? String(r.spawnId) : `${r.spawnId}:${l.id}`,
          });
      }),
      (n[11] = r.spawnId),
      (n[12] = l),
      (n[13] = i),
      (n[14] = A))
    : (A = n[14]);
  let j;
  n[15] !== u || n[16] !== l || n[17] !== b
    ? ((j =
        l != null && u < 0
          ? (0, Q.jsx)(y, {
              id: `realtimeVoice.codexStatus.thinking`,
              defaultMessage: `Thinking`,
              description: `Status shown while voice is thinking`,
            })
          : b),
      (n[15] = u),
      (n[16] = l),
      (n[17] = b),
      (n[18] = j))
    : (j = n[18]);
  let M;
  n[19] === j
    ? (M = n[20])
    : ((M = (0, Q.jsx)(`span`, {
        className: `loading-shimmer-pure-text line-clamp-2 min-w-0 text-center break-words select-none`,
        children: j,
      })),
      (n[19] = j),
      (n[20] = M));
  let N;
  n[21] !== M || n[22] !== A
    ? ((N = (0, Q.jsx)(m, { color: `ghostTertiary`, size: `inline`, onClick: A, children: M })),
      (n[21] = M),
      (n[22] = A),
      (n[23] = N))
    : (N = n[23]);
  let P;
  return (
    n[24] !== N || n[25] !== S || n[26] !== O || n[27] !== k
      ? ((P = (0, Q.jsx)(ee, {
          initial: !1,
          mode: `wait`,
          children: (0, Q.jsxs)(
            o.div,
            {
              className: `flex min-w-0 items-center justify-center gap-2`,
              initial: C,
              animate: w,
              exit: D,
              transition: O,
              children: [k, N],
            },
            S,
          ),
        })),
        (n[24] = N),
        (n[25] = S),
        (n[26] = O),
        (n[27] = k),
        (n[28] = P))
      : (P = n[28]),
    P
  );
}
function K(e) {
  return e + 1;
}
function q(e) {
  return e.conversationId;
}
function J(e) {
  let t = (0, X.c)(5),
    { memoryCallMessageId: n, memoryResultMessageId: r } = e,
    i = x(Y),
    a = v(O, i),
    o = a?.[n]?.message,
    s = a?.[r]?.message ?? void 0,
    c;
  t[0] !== o || t[1] !== s
    ? ((c = o == null ? null : C(o, s, !1)), (t[0] = o), (t[1] = s), (t[2] = c))
    : (c = t[2]);
  let l = c,
    u;
  return (
    t[3] === l
      ? (u = t[4])
      : ((u = l == null ? null : (0, Q.jsx)(H, { isParagen: !1, item: l })), (t[3] = l), (t[4] = u)),
    u
  );
}
function Y(e) {
  return e.conversationId;
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = u()),
      P(),
      l(),
      a(),
      i(),
      g(),
      (Z = r()),
      p(),
      z(),
      D(),
      k(),
      B(),
      w(),
      h(),
      f(),
      A(),
      I(),
      n(),
      S(),
      M(),
      b(),
      (Q = s()));
  }))();
}
$();
export { U as VoiceCommentaryMessage };
//# sourceMappingURL=voice-commentary-message-2f96cb298f06.js.map
