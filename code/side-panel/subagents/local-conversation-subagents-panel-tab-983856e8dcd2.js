import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Amn as n,
  CU as r,
  Cpn as i,
  Cst as a,
  IO as o,
  LO as s,
  N3t as c,
  O3t as l,
  Opn as u,
  SU as d,
  Spn as f,
  TU as p,
  X0t as m,
  _2t as h,
  af as g,
  hmn as _,
  iR as v,
  kmn as y,
  rR as b,
  rf as x,
  t0t as S,
  v2t as C,
  wU as w,
  wst as T,
} from "./app-initial-f094ef01c64d.js";
import {
  At as E,
  Dt as D,
  Et as O,
  kt as k,
  mS as A,
  pS as j,
} from "./app-primary-4c40d73a1074.js";
import { n as M, r as N, t as P } from "./subagent-panel-c34ade213c60.js";
import { a as F, t as I } from "./local-conversation-thread-a2bcd054c9d2.js";
function L(e) {
  let t = (0, q.c)(31),
    {
      hostId: n,
      isLoading: r,
      parentConversationId: i,
      requestedConversationId: a,
      requestedDisplayName: o,
      onSelect: s,
    } = e,
    l = A(),
    u;
  t[0] !== n || t[1] !== l || t[2] !== i
    ? ((u = l ? { conversationId: i, hostId: n } : null),
      (t[0] = n),
      (t[1] = l),
      (t[2] = i),
      (t[3] = u))
    : (u = t[3]);
  let d = c(O, u);
  if (a != null) {
    let e;
    if (t[4] !== d || t[5] !== a) {
      let n;
      (t[7] === a
        ? (n = t[8])
        : ((n = (e) => {
            let { conversationId: t } = e;
            return t === a;
          }),
          (t[7] = a),
          (t[8] = n)),
        (e = d.find(n)),
        (t[4] = d),
        (t[5] = a),
        (t[6] = e));
    } else e = t[6];
    let i = e,
      c = i?.displayName ?? o ?? ``,
      l;
    t[9] === s ? (l = t[10]) : ((l = () => s(null, null)), (t[9] = s), (t[10] = l));
    let u;
    t[11] !== c || t[12] !== a || t[13] !== l
      ? ((u = (0, Y.jsx)(H, { conversationId: a, displayName: c, onBack: l })),
        (t[11] = c),
        (t[12] = a),
        (t[13] = l),
        (t[14] = u))
      : (u = t[14]);
    let f = u;
    if (r) {
      let e;
      t[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(`div`, {
            className: `relative min-h-0 flex-1`,
            children: (0, Y.jsx)(b, { fillParent: !0, debugName: `Subagent transcript` }),
          })),
          (t[15] = e))
        : (e = t[15]);
      let n;
      return (
        t[16] === f
          ? (n = t[17])
          : ((n = (0, Y.jsxs)(`div`, { className: `flex h-full flex-col`, children: [f, e] })),
            (t[16] = f),
            (t[17] = n)),
        n
      );
    }
    let p = i?.canInteract === !0,
      m,
      h;
    t[18] === s
      ? ((m = t[19]), (h = t[20]))
      : ((m = () => s(null, null)),
        (h = (e) => s(e.conversationId, e.displayName)),
        (t[18] = s),
        (t[19] = m),
        (t[20] = h));
    let g;
    return (
      t[21] !== f || t[22] !== n || t[23] !== a || t[24] !== p || t[25] !== m || t[26] !== h
        ? ((g = (0, Y.jsx)(I, {
            canInteract: p,
            conversationId: a,
            header: f,
            hostId: n,
            onClose: m,
            onOpenBackgroundAgent: h,
          })),
          (t[21] = f),
          (t[22] = n),
          (t[23] = a),
          (t[24] = p),
          (t[25] = m),
          (t[26] = h),
          (t[27] = g))
        : (g = t[27]),
      g
    );
  }
  let f;
  return (
    t[28] !== d || t[29] !== s
      ? ((f = (0, Y.jsx)(R, { subagents: d, onSelect: s })), (t[28] = d), (t[29] = s), (t[30] = f))
      : (f = t[30]),
    f
  );
}
function R(e) {
  let t = (0, q.c)(26),
    { subagents: n, onSelect: r } = e,
    a,
    o,
    s,
    c,
    l,
    u,
    d;
  if (t[0] !== n) {
    let e = E(n);
    s = new Map(e.map(V));
    let r = e.filter(B);
    ((o = e.filter(z)), (a = M));
    let f;
    (t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, Y.jsx)(i, {
          id: `localConversation.subagentsPanel.noActive`,
          defaultMessage: `No active subagents`,
          description: `Empty state for the active subagents section`,
        })),
        (t[8] = f))
      : (f = t[8]),
      (d = {
        emptyState: f,
        id: `active`,
        items: r.map(U),
        title: (0, Y.jsx)(i, {
          id: `localConversation.subagentsPanel.active`,
          defaultMessage: `Active · {count}`,
          description: `Heading and count for active subagents in the subagents side panel`,
          values: { count: r.length },
        }),
        titleTrailing: (0, Y.jsx)(W, { subagents: r }),
        visibleItemLimit: 4,
      }),
      (c = `mt-6`),
      (l = `done`),
      (u = o.map(U)),
      (t[0] = n),
      (t[1] = a),
      (t[2] = o),
      (t[3] = s),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u),
      (t[7] = d));
  } else ((a = t[1]), (o = t[2]), (s = t[3]), (c = t[4]), (l = t[5]), (u = t[6]), (d = t[7]));
  let f;
  t[9] === o.length
    ? (f = t[10])
    : ((f = (0, Y.jsx)(i, {
        id: `localConversation.subagentsPanel.done`,
        defaultMessage: `Done · {count}`,
        description: `Heading and count for completed subagents in the subagents side panel`,
        values: { count: o.length },
      })),
      (t[9] = o.length),
      (t[10] = f));
  let p;
  t[11] !== c || t[12] !== l || t[13] !== u || t[14] !== f
    ? ((p = { className: c, id: l, items: u, title: f, visibleItemLimit: 10 }),
      (t[11] = c),
      (t[12] = l),
      (t[13] = u),
      (t[14] = f),
      (t[15] = p))
    : (p = t[15]);
  let m;
  t[16] !== d || t[17] !== p ? ((m = [d, p]), (t[16] = d), (t[17] = p), (t[18] = m)) : (m = t[18]);
  let h;
  t[19] !== r || t[20] !== s
    ? ((h = (e) => {
        let t = s.get(e);
        t != null && r(t.conversationId, t.displayName);
      }),
      (t[19] = r),
      (t[20] = s),
      (t[21] = h))
    : (h = t[21]);
  let g;
  return (
    t[22] !== a || t[23] !== m || t[24] !== h
      ? ((g = (0, Y.jsx)(a, { sections: m, onSelect: h })),
        (t[22] = a),
        (t[23] = m),
        (t[24] = h),
        (t[25] = g))
      : (g = t[25]),
    g
  );
}
function z(e) {
  let { status: t } = e;
  return t === `done`;
}
function B(e) {
  let { status: t } = e;
  return t !== `done`;
}
function V(e) {
  return [e.conversationId, e];
}
function H(e) {
  let t = (0, q.c)(7),
    { conversationId: n, displayName: r, onBack: i } = e,
    a = u(),
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = a.formatMessage({
        id: `localConversation.subagentsPanel.back`,
        defaultMessage: `Back to subagents`,
        description: `Accessible label for returning from a subagent transcript to the subagent list`,
      })),
      (t[0] = a),
      (t[1] = o));
  let s;
  return (
    t[2] !== n || t[3] !== r || t[4] !== i || t[5] !== o
      ? ((s = (0, Y.jsx)(P, { backAriaLabel: o, label: r, seed: n, onBack: i })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = i),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function U(e) {
  let t = e.objective == null ? null : m(T(h(e.objective)), 60);
  return {
    avatarSeed: e.conversationId,
    id: e.conversationId,
    label: e.displayName,
    preview:
      t ??
      e.statusSummary ??
      (e.status === `done`
        ? null
        : (0, Y.jsx)(i, {
            id: `localConversation.subagentsPanel.working`,
            defaultMessage: `Working`,
            description: `Fallback preview shown when an active subagent has no objective or response yet`,
          })),
    previewLineCount: 1,
    trailing: (0, Y.jsx)(K, { subagent: e }),
  };
}
function W(e) {
  let t = (0, q.c)(4),
    { subagents: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = n.filter(G)), (t[0] = n), (t[1] = r));
  let a = r.length;
  if (a === 0) return null;
  let o;
  return (
    t[2] === a
      ? (o = t[3])
      : ((o = (0, Y.jsx)(`span`, {
          className: `flex min-w-0 shrink items-center gap-1.5 truncate text-xs tabular-nums`,
          children: (0, Y.jsx)(i, {
            id: `localConversation.subagentsPanel.summary.waiting`,
            defaultMessage: `{count, plural, one {# waiting} other {# waiting}}`,
            description: `Count of currently waiting subagents in the overview header`,
            values: { count: a },
          }),
        })),
        (t[2] = a),
        (t[3] = o)),
    o
  );
}
function G(e) {
  let { status: t } = e;
  return t === `waiting`;
}
function K(e) {
  let t = (0, q.c)(16),
    { subagent: n } = e,
    a = s(),
    o;
  t[0] === a ? (o = t[1]) : ((o = a.getTime()), (t[0] = a), (t[1] = o));
  let [c, l] = (0, J.useState)(o),
    u;
  (t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = () => {
        l(Date.now());
      }),
      (t[2] = u))
    : (u = t[2]),
    r(u, n.status === `done` ? null : 1e3));
  let d = n.lastAssistantMessageAtMs ?? n.recencyAtMs ?? null,
    f = n.status === `done` || n.startedAtMs == null ? null : Math.max(c - n.startedAtMs, 0),
    p;
  t[3] !== d || t[4] !== n.status
    ? ((p = n.status !== `done` || d == null ? null : new Date(d).toISOString()),
      (t[3] = d),
      (t[4] = n.status),
      (t[5] = p))
    : (p = t[5]);
  let m = p,
    h;
  t[6] === n.status
    ? (h = t[7])
    : ((h =
        n.status === `waiting`
          ? (0, Y.jsx)(i, {
              id: `localConversation.subagentsPanel.status.waiting`,
              defaultMessage: `Waiting`,
              description: `Status label for a subagent awaiting work in the overview`,
            })
          : null),
      (t[6] = n.status),
      (t[7] = h));
  let g;
  t[8] === f
    ? (g = t[9])
    : ((g = f == null ? null : (0, Y.jsx)(`span`, { children: w(f) })), (t[8] = f), (t[9] = g));
  let _;
  t[10] === m
    ? (_ = t[11])
    : ((_ =
        m == null
          ? null
          : (0, Y.jsx)(`time`, {
              dateTime: m,
              children: (0, Y.jsx)(i, {
                id: `localConversation.subagentsPanel.status.completedAgo`,
                defaultMessage: `{time} ago`,
                description: `Relative completion time for a finished subagent in the overview`,
                values: { time: (0, Y.jsx)(x, { dateString: m }, `completed-at`) },
              }),
            })),
      (t[10] = m),
      (t[11] = _));
  let v;
  return (
    t[12] !== h || t[13] !== g || t[14] !== _
      ? ((v = (0, Y.jsxs)(`span`, { className: `flex items-center gap-3`, children: [h, g, _] })),
        (t[12] = h),
        (t[13] = g),
        (t[14] = _),
        (t[15] = v))
      : (v = t[15]),
    v
  );
}
var q, J, Y;
e(() => {
  ((q = y()),
    S(),
    l(),
    C(),
    (J = t(n(), 1)),
    f(),
    g(),
    o(),
    j(),
    v(),
    p(),
    a(),
    k(),
    D(),
    N(),
    d(),
    F(),
    (Y = _()));
})();
export { L as LocalConversationSubagentsPanelTab };
//# sourceMappingURL=local-conversation-subagents-panel-tab-983856e8dcd2.js.map
