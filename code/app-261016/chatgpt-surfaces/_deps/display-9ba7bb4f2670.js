import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  FNt as i,
  LNt as a,
  PBt as o,
  Qst as s,
  XOt as c,
  YOt as l,
  ZSt as u,
  nCt as d,
  yCt as f,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B1n as p,
  VPn as m,
  Y1n as h,
  a$n as g,
  aqn as _,
  n0n as v,
  o$n as y,
  oqn as b,
  q1n as x,
  z1n as S,
} from "./app-initial-ad16eaadf81f.js";
import { cv as C, lv as w } from "./app-primary-3e00728c2a4c.js";
import { n as T, t as E } from "./thread-history-loading-6c9b27f848bd.js";
import { n as D, r as O } from "./controller-9c3c81f9854c.js";
function k(e) {
  let n = (0, j.c)(18),
    { conversationId: r } = e,
    i = t(s),
    a = d(p, r),
    o = d(_, a ?? r),
    c = w(),
    l = (0, M.useRef)(null),
    u;
  n[0] !== i || n[1] !== a
    ? ((u = () => {
        a != null && O(i, a, N.flushSync);
      }),
      (n[0] = i),
      (n[1] = a),
      (n[2] = u))
    : (u = n[2]);
  let f = u,
    m;
  n[3] !== r || n[4] !== f || n[5] !== i || n[6] !== a
    ? ((m = () => {
        i.get(_, a ?? r)?.hasError || f();
      }),
      (n[3] = r),
      (n[4] = f),
      (n[5] = i),
      (n[6] = a),
      (n[7] = m))
    : (m = n[7]);
  let h = (0, M.useEffectEvent)(m),
    g;
  n[8] !== c || n[9] !== h
    ? ((g = () => {
        let e = l.current,
          t = c.getScrollElement();
        if (e == null || t == null) return;
        let n = new IntersectionObserver(
          (e) => {
            e.some(A) && h();
          },
          { root: t, rootMargin: `80px 0px 0px 0px` },
        );
        return (n.observe(e), () => n.disconnect());
      }),
      (n[8] = c),
      (n[9] = h),
      (n[10] = g))
    : (g = n[10]);
  let v = o?.cursor,
    y = o?.hasError,
    b;
  if (
    (n[11] !== c || n[12] !== a || n[13] !== v || n[14] !== y
      ? ((b = [c, a, v, y]), (n[11] = c), (n[12] = a), (n[13] = v), (n[14] = y), (n[15] = b))
      : (b = n[15]),
    (0, M.useEffect)(g, b),
    o == null || o.complete || o.cursor == null)
  )
    return null;
  let x = o.hasError ? f : null,
    S;
  return (
    n[16] === x ? (S = n[17]) : ((S = (0, P.jsx)(E, { ref: l, onRetry: x })), (n[16] = x), (n[17] = S)),
    S
  );
}
function A(e) {
  return e.isIntersecting;
}
var j, M, N, P;
function F() {
  return (F = e(() => {
    ((j = o()), u(), (M = r()), (N = i()), n(), T(), C(), m(), D(), b(), (P = a()));
  }))();
}
function I({ conversation: e, view: t, selectedSectionId: n, entryMessageIds: r, entry: i }) {
  let a = t.definition.sections,
    o = a.findIndex((e) => e.id === n),
    s = a[o],
    c = [],
    l = new Set(),
    u = e.current_node ?? null;
  for (; u != null && !l.has(u);) (c.push(u), l.add(u), (u = e.mapping[u]?.parent ?? null));
  c.reverse();
  let d = new Map(c.map((e, t) => [e, t])),
    f = (e) => {
      if (e == null) return;
      let t = [e.start_message_id, ...(r[e.id] ?? [])].flatMap((e) => {
        let t = e == null ? void 0 : d.get(e);
        return t == null ? [] : [t];
      });
      return t.length === 0 ? void 0 : Math.min(...t);
    },
    p = a[o + 1],
    m = f(s),
    h = f(p),
    g = (s?.start_message_id != null && m == null) || (p?.start_message_id != null && h == null),
    _ = i?.status === `sending` && (i.sectionId === s?.id || i.sectionId === p?.id),
    v = m == null || g ? [] : c.slice(m, h ?? c.length),
    y = Object.fromEntries(v.map((t) => [t, e.mapping[t]]));
  return {
    conversation: { ...e, current_node: v.at(-1) ?? null, mapping: y },
    needsOlderMessages: g && !_,
    isReviewing: n !== t.current_section_id && i?.sectionId !== n,
    needsEntry: s?.start_message_id == null,
    isEntering: i?.status === `sending`,
  };
}
function L(e) {
  return e.map((e) => ({
    ...e,
    errorMessage: null,
    isMostRecentTurn: !1,
    isReadOnly: !0,
    onEditUserMessage: void 0,
    onFork: void 0,
    onRegenerateResponse: void 0,
    paragen: null,
    pendingSubmissionAttachments: void 0,
    safetyReview: null,
    showPendingLoadingMessage: !1,
    showRequestUserInputStatus: !1,
  }));
}
var R, z;
function B() {
  return (B = e(() => {
    (u(),
      c(),
      n(),
      m(),
      g(),
      (R = f(s, (e, { get: t }) => {
        let n = t(y, e);
        if (n == null) return null;
        let r = t(v, e);
        return r == null
          ? null
          : I({
              ...n,
              conversation: {
                mapping: r,
                current_node: t(h, e),
                conversation_origin: t(x, e),
                context_truncation_continuation: t(S, e)?.metadata,
              },
            });
      })),
      (z = l({
        readOnlyPlaceholder: {
          id: `sectionedConversation.readOnlyPlaceholder`,
          defaultMessage: `This section is read-only`,
          description: `Placeholder in the disabled message composer while reviewing an earlier section of a guided conversation. Users can return to the current section to send messages.`,
        },
      })));
  }))();
}
export { k as a, z as i, B as n, F as o, R as r, L as t };
//# sourceMappingURL=display-9ba7bb4f2670.js.map
