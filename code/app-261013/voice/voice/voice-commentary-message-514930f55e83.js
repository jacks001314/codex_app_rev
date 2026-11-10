import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  Cwt as r,
  IDt as i,
  Ixt as a,
  JR as o,
  Pxt as s,
  Swt as c,
  Vxt as l,
  YR as u,
  _Mt as d,
  _wt as ee,
  gMt as f,
  gwt as p,
  iot as m,
  jDt as h,
  t3 as g,
  vzt as _,
  wot as v,
  xMt as y,
  yzt as b,
  zxt as x,
} from "./app-shared-bbfeca5e5737.js";
import {
  QDr as te,
  XDr as S,
  ajn as C,
  bOn as ne,
  dWn as w,
  ejn as T,
  kZn as E,
  oFr as D,
  tjn as O,
  uWn as k,
  wOn as A,
  yjn as j,
} from "./app-initial-5851df3f6cb1.js";
import { Ji as M, Xi as N, Yi as P, Zn as re, or as F } from "./app-primary-fe8a450b3b04.js";
import { i as I, r as L, t as R } from "./realtime-voice-motion-1152410890e5.js";
import { i as z, n as B, r as V, t as H } from "./content-30b2ce888a28.js";
function U() {
  let e = (0, X.c)(13),
    t = l(N),
    n;
  e[0] === t ? (n = e[1]) : ((n = M(t)), (e[0] = t), (e[1] = n));
  let r = n,
    i = C(W),
    a = r != null && (r.content.type !== `memory-saved` || i != null) ? `h-10` : `h-0`,
    o;
  e[2] === a
    ? (o = e[3])
    : ((o = f(`relative flex min-w-0 items-center justify-center gap-2`, a)), (e[2] = a), (e[3] = o));
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
  let c;
  e[6] !== i || e[7] !== r?.content
    ? ((c =
        i == null
          ? null
          : (0, Q.jsx)(`div`, {
              className: f(
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
      (e[8] = c))
    : (c = e[8]);
  let u;
  return (
    e[9] !== o || e[10] !== s || e[11] !== c
      ? ((u = (0, Q.jsxs)(`div`, {
          className: o,
          "aria-atomic": `true`,
          "aria-live": `polite`,
          "data-testid": `voice-commentary-message`,
          role: `status`,
          children: [s, c],
        })),
        (e[9] = o),
        (e[10] = s),
        (e[11] = c),
        (e[12] = u))
      : (u = e[12]),
    u
  );
}
function W(e) {
  return e.server.memoryUpdate;
}
function G(e) {
  let r = (0, X.c)(29),
    { message: o } = e,
    s = a(n),
    l = u(),
    d = C(q),
    f = x(d == null || ne, d ?? ``),
    p = o.content.type === `cot-v5-progress` ? o.content.progress : null,
    [h, g] = (0, Z.useState)(-1),
    _ = p?.texts.length ?? 0,
    v = Math.max(-1, Math.min(h, _ - 1));
  h !== v && g(v);
  let y, b;
  (r[0] !== h || r[1] !== _
    ? ((y = () => {
        if (h >= _ - 1) return;
        let e = setTimeout(() => g(K), 1500);
        return () => clearTimeout(e);
      }),
      (b = [h, _]),
      (r[0] = h),
      (r[1] = _),
      (r[2] = y),
      (r[3] = b))
    : ((y = r[2]), (b = r[3])),
    (0, Z.useEffect)(y, b));
  let S = o.content.type === `legacy-text` ? o.content.text : null;
  p != null && (S = p.texts[v] ?? p.texts[0] ?? null);
  let w = p != null && v < 0 ? `thinking` : S,
    E,
    D,
    O;
  r[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = { opacity: 0 }), (D = { opacity: 1 }), (O = { opacity: 0 }), (r[4] = E), (r[5] = D), (r[6] = O))
    : ((E = r[4]), (D = r[5]), (O = r[6]));
  let k = l ? L : R,
    A;
  r[7] !== h || r[8] !== p || r[9] !== f
    ? ((A =
        p != null && h >= 0
          ? (0, Q.jsx)(V, { hostId: m, shouldBlockExternalEgress: f, toolIcons: p.toolIcons })
          : null),
      (r[7] = h),
      (r[8] = p),
      (r[9] = f),
      (r[10] = A))
    : (A = r[10]);
  let j;
  r[11] !== o.spawnId || r[12] !== p || r[13] !== s
    ? ((j = () => {
        let e = T(s).getState();
        e.voiceSessionId != null &&
          te(s, re, {
            voiceSessionId: e.voiceSessionId,
            conversationId: e.earlyServerThreadId ?? e.conversationId ?? void 0,
            messageId: p == null ? String(o.spawnId) : `${o.spawnId}:${p.id}`,
          });
      }),
      (r[11] = o.spawnId),
      (r[12] = p),
      (r[13] = s),
      (r[14] = j))
    : (j = r[14]);
  let M;
  r[15] !== h || r[16] !== p || r[17] !== S
    ? ((M =
        p != null && h < 0
          ? (0, Q.jsx)(i, {
              id: `realtimeVoice.codexStatus.thinking`,
              defaultMessage: `Thinking`,
              description: `Status shown while voice is thinking`,
            })
          : S),
      (r[15] = h),
      (r[16] = p),
      (r[17] = S),
      (r[18] = M))
    : (M = r[18]);
  let N;
  r[19] === M
    ? (N = r[20])
    : ((N = (0, Q.jsx)(`span`, {
        className: `loading-shimmer-pure-text line-clamp-2 min-w-0 text-center break-words select-none`,
        children: M,
      })),
      (r[19] = M),
      (r[20] = N));
  let P;
  r[21] !== N || r[22] !== j
    ? ((P = (0, Q.jsx)(t, { color: `ghostTertiary`, size: `inline`, onClick: j, children: N })),
      (r[21] = N),
      (r[22] = j),
      (r[23] = P))
    : (P = r[23]);
  let F;
  return (
    r[24] !== P || r[25] !== w || r[26] !== k || r[27] !== A
      ? ((F = (0, Q.jsx)(c, {
          initial: !1,
          mode: `wait`,
          children: (0, Q.jsxs)(
            ee.div,
            {
              className: `flex min-w-0 items-center justify-center gap-2`,
              initial: E,
              animate: D,
              exit: O,
              transition: k,
              children: [A, P],
            },
            w,
          ),
        })),
        (r[24] = P),
        (r[25] = w),
        (r[26] = k),
        (r[27] = A),
        (r[28] = F))
      : (F = r[28]),
    F
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
    i = C(Y),
    a = x(E, i),
    o = a?.[n]?.message,
    s = a?.[r]?.message ?? void 0,
    c;
  t[0] !== o || t[1] !== s
    ? ((c = o == null ? null : k(o, s, !1)), (t[0] = o), (t[1] = s), (t[2] = c))
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
    ((X = _()),
      F(),
      d(),
      r(),
      p(),
      s(),
      (Z = b()),
      h(),
      z(),
      j(),
      A(),
      B(),
      w(),
      g(),
      o(),
      S(),
      I(),
      v(),
      D(),
      P(),
      O(),
      (Q = y()));
  }))();
}
$();
export { U as VoiceCommentaryMessage };
//# sourceMappingURL=voice-commentary-message-514930f55e83.js.map
