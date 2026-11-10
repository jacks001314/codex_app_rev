import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Pxt as n,
  VDt as r,
  jDt as i,
  vzt as a,
  xMt as o,
  zxt as s,
} from "./app-shared-bbfeca5e5737.js";
import {
  D7n as c,
  E5n as l,
  E7n as u,
  EXt as d,
  Fjr as f,
  N$ as p,
  Pjr as m,
  bTn as h,
  j$ as g,
  jkt as _,
  mYr as v,
  pSr as y,
  pYr as b,
  ubr as x,
  v8n as S,
  yTn as C,
} from "./app-initial-5851df3f6cb1.js";
import { Bl as w, Ul as T, Vl as E, Wl as D } from "./app-primary-fe8a450b3b04.js";
import { s as O, t as k } from "./local-conversation-thread-6999d2419a30.js";
import { n as A, r as j, t as M } from "./subagent-panel-e2d31e8d7515.js";
import { n as N, t as P } from "./task-elapsed-time-7f16d6c6738b.js";
function F(e) {
  let t = (0, G.c)(37),
    {
      hostId: n,
      isLoading: r,
      parentConversationId: i,
      renderSlots: a,
      requestedConversationId: o,
      requestedDisplayName: c,
      onSelect: l,
    } = e,
    u = _(),
    d;
  t[0] !== n || t[1] !== u || t[2] !== i
    ? ((d = u ? { conversationId: i, hostId: n } : null), (t[0] = n), (t[1] = u), (t[2] = i), (t[3] = d))
    : (d = t[3]);
  let f = s(w, d);
  if (o != null) {
    let e;
    if (t[4] !== f || t[5] !== o) {
      let n;
      (t[7] === o
        ? (n = t[8])
        : ((n = (e) => {
            let { conversationId: t } = e;
            return t === o;
          }),
          (t[7] = o),
          (t[8] = n)),
        (e = f.find(n)),
        (t[4] = f),
        (t[5] = o),
        (t[6] = e));
    } else e = t[6];
    let i = e,
      s = i?.displayName ?? c ?? ``,
      u;
    t[9] === l ? (u = t[10]) : ((u = () => l(null, null)), (t[9] = l), (t[10] = u));
    let d;
    t[11] !== s || t[12] !== n || t[13] !== o || t[14] !== u
      ? ((d = (0, K.jsx)(B, { conversationId: o, displayName: s, hostId: n, onBack: u })),
        (t[11] = s),
        (t[12] = n),
        (t[13] = o),
        (t[14] = u),
        (t[15] = d))
      : (d = t[15]);
    let p;
    if (
      t[16] !== n ||
      t[17] !== r ||
      t[18] !== l ||
      t[19] !== a ||
      t[20] !== o ||
      t[21] !== i?.canInteract ||
      t[22] !== d
    ) {
      let e;
      (t[24] !== n || t[25] !== r || t[26] !== l || t[27] !== o || t[28] !== i?.canInteract
        ? ((e = r
            ? (0, K.jsx)(`div`, {
                className: `relative h-full min-h-0`,
                children: (0, K.jsx)(C, { fillParent: !0, debugName: `Subagent transcript` }),
              })
            : (0, K.jsx)(k, {
                canInteract: i?.canInteract === !0,
                conversationId: o,
                hostId: n,
                onClose: () => l(null, null),
                onOpenBackgroundAgent: (e) => l(e.conversationId, e.displayName),
              })),
          (t[24] = n),
          (t[25] = r),
          (t[26] = l),
          (t[27] = o),
          (t[28] = i?.canInteract),
          (t[29] = e))
        : (e = t[29]),
        (p = a({ headerRows: [{ id: `subagent-detail`, content: d }], content: e })),
        (t[16] = n),
        (t[17] = r),
        (t[18] = l),
        (t[19] = a),
        (t[20] = o),
        (t[21] = i?.canInteract),
        (t[22] = d),
        (t[23] = p));
    } else p = t[23];
    return p;
  }
  let p;
  if (t[30] !== f || t[31] !== l || t[32] !== a) {
    let e;
    (t[34] !== f || t[35] !== l
      ? ((e = (0, K.jsx)(I, { subagents: f, onSelect: l })), (t[34] = f), (t[35] = l), (t[36] = e))
      : (e = t[36]),
      (p = a({ headerRows: [], content: e })),
      (t[30] = f),
      (t[31] = l),
      (t[32] = a),
      (t[33] = p));
  } else p = t[33];
  return p;
}
function I(e) {
  let n = (0, G.c)(26),
    { subagents: r, onSelect: i } = e,
    a,
    o,
    s,
    c,
    l,
    u,
    d;
  if (n[0] !== r) {
    let e = D(r);
    s = new Map(e.map(z));
    let i = e.filter(R);
    ((o = e.filter(L)), (a = A));
    let f;
    (n[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, K.jsx)(t, {
          id: `localConversation.subagentsPanel.noActive`,
          defaultMessage: `No active subagents`,
          description: `Empty state for the active subagents section`,
        })),
        (n[8] = f))
      : (f = n[8]),
      (d = {
        emptyState: f,
        id: `active`,
        items: i.map(V),
        title: (0, K.jsx)(t, {
          id: `localConversation.subagentsPanel.active`,
          defaultMessage: `Active · {count}`,
          description: `Heading and count for active subagents in the subagents side panel`,
          values: { count: i.length },
        }),
        titleTrailing: (0, K.jsx)(H, { subagents: i }),
        visibleItemLimit: 4,
      }),
      (c = `mt-6`),
      (l = `done`),
      (u = o.map(V)),
      (n[0] = r),
      (n[1] = a),
      (n[2] = o),
      (n[3] = s),
      (n[4] = c),
      (n[5] = l),
      (n[6] = u),
      (n[7] = d));
  } else ((a = n[1]), (o = n[2]), (s = n[3]), (c = n[4]), (l = n[5]), (u = n[6]), (d = n[7]));
  let f;
  n[9] === o.length
    ? (f = n[10])
    : ((f = (0, K.jsx)(t, {
        id: `localConversation.subagentsPanel.done`,
        defaultMessage: `Done · {count}`,
        description: `Heading and count for completed subagents in the subagents side panel`,
        values: { count: o.length },
      })),
      (n[9] = o.length),
      (n[10] = f));
  let p;
  n[11] !== c || n[12] !== l || n[13] !== u || n[14] !== f
    ? ((p = { className: c, id: l, items: u, title: f, visibleItemLimit: 10 }),
      (n[11] = c),
      (n[12] = l),
      (n[13] = u),
      (n[14] = f),
      (n[15] = p))
    : (p = n[15]);
  let m;
  n[16] !== d || n[17] !== p ? ((m = [d, p]), (n[16] = d), (n[17] = p), (n[18] = m)) : (m = n[18]);
  let h;
  n[19] !== i || n[20] !== s
    ? ((h = (e) => {
        let t = s.get(e);
        t != null && i(t.conversationId, t.displayName);
      }),
      (n[19] = i),
      (n[20] = s),
      (n[21] = h))
    : (h = n[21]);
  let g;
  return (
    n[22] !== a || n[23] !== m || n[24] !== h
      ? ((g = (0, K.jsx)(a, { sections: m, onSelect: h })),
        (n[22] = a),
        (n[23] = m),
        (n[24] = h),
        (n[25] = g))
      : (g = n[25]),
    g
  );
}
function L(e) {
  let { status: t } = e;
  return t === `done`;
}
function R(e) {
  let { status: t } = e;
  return t !== `done`;
}
function z(e) {
  return [e.conversationId, e];
}
function B(e) {
  let n = (0, G.c)(16),
    { conversationId: i, displayName: a, hostId: o, onBack: c } = e,
    u = r(),
    p;
  n[0] !== i || n[1] !== o
    ? ((p = { hostId: o, threadId: i }), (n[0] = i), (n[1] = o), (n[2] = p))
    : (p = n[2]);
  let m = s(l, p),
    h = null;
  if (m?.model) {
    let e;
    n[3] === m.model ? (e = n[4]) : ((e = d(m.model)), (n[3] = m.model), (n[4] = e));
    let r = e,
      i;
    (n[5] !== r || n[6] !== m.reasoningEffort
      ? ((i = f(m.reasoningEffort)
          ? (0, K.jsx)(t, {
              id: `localConversation.subagentsPanel.modelAndReasoningEffort`,
              defaultMessage: `{model} · {reasoning, select, none {None} minimal {Minimal} low {Light} medium {Medium} high {High} xhigh {Extra High} max {Max} ultra {Ultra} persistent {Persistent} other {Medium}}`,
              description: `Model and reasoning effort shown in a selected subagent's details header. The model is a product name such as GPT-5.4. The reasoning value describes how much computational effort that subagent used.`,
              values: { reasoning: m.reasoningEffort, model: r },
            })
          : r),
        (n[5] = r),
        (n[6] = m.reasoningEffort),
        (n[7] = i))
      : (i = n[7]),
      (h = i));
  }
  let g;
  n[8] === u
    ? (g = n[9])
    : ((g = u.formatMessage({
        id: `localConversation.subagentsPanel.back`,
        defaultMessage: `Back to subagents`,
        description: `Accessible label for returning from a subagent transcript to the subagent list`,
      })),
      (n[8] = u),
      (n[9] = g));
  let _;
  return (
    n[10] !== i || n[11] !== a || n[12] !== h || n[13] !== c || n[14] !== g
      ? ((_ = (0, K.jsx)(M, { backAriaLabel: g, label: a, seed: i, trailing: h, onBack: c })),
        (n[10] = i),
        (n[11] = a),
        (n[12] = h),
        (n[13] = c),
        (n[14] = g),
        (n[15] = _))
      : (_ = n[15]),
    _
  );
}
function V(e) {
  let n = e.objective == null ? null : y(c(b(e.objective)), 60);
  return {
    avatarSeed: e.conversationId,
    id: e.conversationId,
    label: e.displayName,
    preview:
      n ??
      e.statusSummary ??
      (e.status === `done`
        ? null
        : (0, K.jsx)(t, {
            id: `localConversation.subagentsPanel.working`,
            defaultMessage: `Working`,
            description: `Fallback preview shown when an active subagent has no objective or response yet`,
          })),
    previewLineCount: 1,
    trailing: (0, K.jsx)(W, { subagent: e }),
  };
}
function H(e) {
  let n = (0, G.c)(4),
    { subagents: r } = e,
    i;
  n[0] === r ? (i = n[1]) : ((i = r.filter(U)), (n[0] = r), (n[1] = i));
  let a = i.length;
  if (a === 0) return null;
  let o;
  return (
    n[2] === a
      ? (o = n[3])
      : ((o = (0, K.jsx)(`span`, {
          className: `flex min-w-0 shrink items-center gap-1.5 truncate text-xs tabular-nums`,
          children: (0, K.jsx)(t, {
            id: `localConversation.subagentsPanel.summary.waiting`,
            defaultMessage: `{count, plural, one {# waiting} other {# waiting}}`,
            description: `Count of currently waiting subagents in the overview header`,
            values: { count: a },
          }),
        })),
        (n[2] = a),
        (n[3] = o)),
    o
  );
}
function U(e) {
  let { status: t } = e;
  return t === `waiting`;
}
function W(e) {
  let n = (0, G.c)(14),
    { subagent: r } = e,
    i = r.lastAssistantMessageAtMs ?? r.recencyAtMs ?? null,
    a;
  n[0] !== i || n[1] !== r.status
    ? ((a = r.status !== `done` || i == null ? null : new Date(i).toISOString()),
      (n[0] = i),
      (n[1] = r.status),
      (n[2] = a))
    : (a = n[2]);
  let o = a,
    s;
  n[3] === r.status
    ? (s = n[4])
    : ((s =
        r.status === `waiting`
          ? (0, K.jsx)(t, {
              id: `localConversation.subagentsPanel.status.waiting`,
              defaultMessage: `Waiting`,
              description: `Status label for a subagent awaiting work in the overview`,
            })
          : null),
      (n[3] = r.status),
      (n[4] = s));
  let c;
  n[5] !== r.startedAtMs || n[6] !== r.status
    ? ((c =
        r.status === `done` || r.startedAtMs == null ? null : (0, K.jsx)(P, { startedAtMs: r.startedAtMs })),
      (n[5] = r.startedAtMs),
      (n[6] = r.status),
      (n[7] = c))
    : (c = n[7]);
  let l;
  n[8] === o
    ? (l = n[9])
    : ((l =
        o == null
          ? null
          : (0, K.jsx)(`time`, {
              dateTime: o,
              children: (0, K.jsx)(g, { dateString: o, format: `relative` }),
            })),
      (n[8] = o),
      (n[9] = l));
  let u;
  return (
    n[10] !== s || n[11] !== c || n[12] !== l
      ? ((u = (0, K.jsxs)(`span`, { className: `flex items-center gap-3`, children: [s, c, l] })),
        (n[10] = s),
        (n[11] = c),
        (n[12] = l),
        (n[13] = u))
      : (u = n[13]),
    u
  );
}
var G, K;
function q() {
  return (q = e(() => {
    ((G = a()), x(), n(), m(), v(), i(), S(), p(), h(), u(), T(), E(), j(), N(), O(), (K = o()));
  }))();
}
q();
export { F as LocalConversationSubagentsPanelTab };
//# sourceMappingURL=local-conversation-subagents-panel-tab-f7116bdb2e6f.js.map
