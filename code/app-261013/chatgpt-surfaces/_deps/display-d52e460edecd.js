import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  Cot as n,
  Ixt as r,
  Pxt as i,
  jDt as a,
  nSt as o,
  vzt as s,
  wot as c,
  xMt as l,
  yMt as u,
  yzt as d,
  zxt as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  BYn as p,
  HUn as m,
  SZn as h,
  UUn as g,
  VYn as _,
  bZn as v,
  fZn as y,
  kZn as b,
  pZn as x,
  yjn as S,
} from "./app-initial-5851df3f6cb1.js";
import { n as C, r as w } from "./thread-scroll-controller-context-value-f766898c7055.js";
import { n as T, t as E } from "./thread-history-loading-bc09ef1d62df.js";
import { n as D, r as O } from "./controller-5717fd004098.js";
function k(e) {
  let t = (0, j.c)(18),
    { conversationId: i } = e,
    a = r(n),
    o = f(x, i),
    s = f(m, o ?? i),
    c = w(),
    l = (0, M.useRef)(null),
    u;
  t[0] !== a || t[1] !== o
    ? ((u = () => {
        o != null && O(a, o, N.flushSync);
      }),
      (t[0] = a),
      (t[1] = o),
      (t[2] = u))
    : (u = t[2]);
  let d = u,
    p;
  t[3] !== i || t[4] !== d || t[5] !== a || t[6] !== o
    ? ((p = () => {
        a.get(m, o ?? i)?.hasError || d();
      }),
      (t[3] = i),
      (t[4] = d),
      (t[5] = a),
      (t[6] = o),
      (t[7] = p))
    : (p = t[7]);
  let h = (0, M.useEffectEvent)(p),
    g;
  t[8] !== c || t[9] !== h
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
      (t[8] = c),
      (t[9] = h),
      (t[10] = g))
    : (g = t[10]);
  let _ = s?.cursor,
    v = s?.hasError,
    y;
  if (
    (t[11] !== c || t[12] !== o || t[13] !== _ || t[14] !== v
      ? ((y = [c, o, _, v]), (t[11] = c), (t[12] = o), (t[13] = _), (t[14] = v), (t[15] = y))
      : (y = t[15]),
    (0, M.useEffect)(g, y),
    s == null || s.complete || s.cursor == null)
  )
    return null;
  let b = s.hasError ? d : null,
    S;
  return (
    t[16] === b ? (S = t[17]) : ((S = (0, P.jsx)(E, { ref: l, onRetry: b })), (t[16] = b), (t[17] = S)),
    S
  );
}
function A(e) {
  return e.isIntersecting;
}
var j, M, N, P;
function F() {
  return (F = e(() => {
    ((j = s()), i(), (M = d()), (N = u()), c(), T(), C(), S(), D(), g(), (P = l()));
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
    (i(),
      a(),
      c(),
      S(),
      p(),
      (R = o(n, (e, { get: t }) => {
        let n = t(_, e);
        if (n == null) return null;
        let r = t(b, e);
        return r == null
          ? null
          : I({
              ...n,
              conversation: {
                mapping: r,
                current_node: t(h, e),
                conversation_origin: t(v, e),
                context_truncation_continuation: t(y, e)?.metadata,
              },
            });
      })),
      (z = t({
        readOnlyPlaceholder: {
          id: `sectionedConversation.readOnlyPlaceholder`,
          defaultMessage: `This section is read-only`,
          description: `Placeholder in the disabled message composer while reviewing an earlier section of a guided conversation. Users can return to the current section to send messages.`,
        },
      })));
  }))();
}
export { k as a, z as i, B as n, F as o, R as r, L as t };
//# sourceMappingURL=display-d52e460edecd.js.map
