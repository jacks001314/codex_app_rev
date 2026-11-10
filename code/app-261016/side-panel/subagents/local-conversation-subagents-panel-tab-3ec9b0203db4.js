import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  LNt as t,
  PBt as n,
  XOt as r,
  ZSt as i,
  nCt as a,
  okt as o,
  tkt as s,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  HOn as c,
  IJt as l,
  NEr as u,
  UOn as d,
  c1r as f,
  cnr as p,
  ctr as m,
  eer as h,
  iIr as g,
  l1r as _,
  lnr as v,
  mEt as y,
  mwr as b,
  rIr as x,
  x0 as S,
  y0 as C,
} from "./app-initial-ad16eaadf81f.js";
import { Ql as w, Zl as T, eu as E, tu as D } from "./app-primary-3e00728c2a4c.js";
import { s as O, t as k } from "./local-conversation-thread-632d930bbfe2.js";
import { n as A, r as j, t as M } from "./subagent-panel-d0b73809f634.js";
import { n as N, t as P } from "./task-elapsed-time-3b84ad5051f0.js";
function F(e) {
  let t = (0, G.c)(37),
    {
      hostId: n,
      isLoading: r,
      parentConversationId: i,
      renderSlots: o,
      requestedConversationId: s,
      requestedDisplayName: l,
      onSelect: u,
    } = e,
    d = y(),
    f;
  t[0] !== n || t[1] !== d || t[2] !== i
    ? ((f = d ? { conversationId: i, hostId: n } : null), (t[0] = n), (t[1] = d), (t[2] = i), (t[3] = f))
    : (f = t[3]);
  let p = a(T, f);
  if (s != null) {
    let e;
    if (t[4] !== p || t[5] !== s) {
      let n;
      (t[7] === s
        ? (n = t[8])
        : ((n = (e) => {
            let { conversationId: t } = e;
            return t === s;
          }),
          (t[7] = s),
          (t[8] = n)),
        (e = p.find(n)),
        (t[4] = p),
        (t[5] = s),
        (t[6] = e));
    } else e = t[6];
    let i = e,
      a = i?.displayName ?? l ?? ``,
      d;
    t[9] === u ? (d = t[10]) : ((d = () => u(null, null)), (t[9] = u), (t[10] = d));
    let f;
    t[11] !== a || t[12] !== n || t[13] !== s || t[14] !== d
      ? ((f = (0, K.jsx)(B, { conversationId: s, displayName: a, hostId: n, onBack: d })),
        (t[11] = a),
        (t[12] = n),
        (t[13] = s),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]);
    let m;
    if (
      t[16] !== n ||
      t[17] !== r ||
      t[18] !== u ||
      t[19] !== o ||
      t[20] !== s ||
      t[21] !== i?.canInteract ||
      t[22] !== f
    ) {
      let e;
      (t[24] !== n || t[25] !== r || t[26] !== u || t[27] !== s || t[28] !== i?.canInteract
        ? ((e = r
            ? (0, K.jsx)(`div`, {
                className: `relative h-full min-h-0`,
                children: (0, K.jsx)(c, { fillParent: !0, debugName: `Subagent transcript` }),
              })
            : (0, K.jsx)(k, {
                canInteract: i?.canInteract === !0,
                conversationId: s,
                hostId: n,
                onClose: () => u(null, null),
                onOpenBackgroundAgent: (e) => u(e.conversationId, e.displayName),
              })),
          (t[24] = n),
          (t[25] = r),
          (t[26] = u),
          (t[27] = s),
          (t[28] = i?.canInteract),
          (t[29] = e))
        : (e = t[29]),
        (m = o({ headerRows: [{ id: `subagent-detail`, content: f }], content: e })),
        (t[16] = n),
        (t[17] = r),
        (t[18] = u),
        (t[19] = o),
        (t[20] = s),
        (t[21] = i?.canInteract),
        (t[22] = f),
        (t[23] = m));
    } else m = t[23];
    return m;
  }
  let m;
  if (t[30] !== p || t[31] !== u || t[32] !== o) {
    let e;
    (t[34] !== p || t[35] !== u
      ? ((e = (0, K.jsx)(I, { subagents: p, onSelect: u })), (t[34] = p), (t[35] = u), (t[36] = e))
      : (e = t[36]),
      (m = o({ headerRows: [], content: e })),
      (t[30] = p),
      (t[31] = u),
      (t[32] = o),
      (t[33] = m));
  } else m = t[33];
  return m;
}
function I(e) {
  let t = (0, G.c)(26),
    { subagents: n, onSelect: r } = e,
    i,
    a,
    o,
    c,
    l,
    u,
    d;
  if (t[0] !== n) {
    let e = D(n);
    o = new Map(e.map(z));
    let r = e.filter(R);
    ((a = e.filter(L)), (i = A));
    let f;
    (t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, K.jsx)(s, {
          id: `localConversation.subagentsPanel.noActive`,
          defaultMessage: `No active subagents`,
          description: `Empty state for the active subagents section`,
        })),
        (t[8] = f))
      : (f = t[8]),
      (d = {
        emptyState: f,
        id: `active`,
        items: r.map(V),
        title: (0, K.jsx)(s, {
          id: `localConversation.subagentsPanel.active`,
          defaultMessage: `Active · {count}`,
          description: `Heading and count for active subagents in the subagents side panel`,
          values: { count: r.length },
        }),
        titleTrailing: (0, K.jsx)(H, { subagents: r }),
        visibleItemLimit: 4,
      }),
      (c = `mt-6`),
      (l = `done`),
      (u = a.map(V)),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u),
      (t[7] = d));
  } else ((i = t[1]), (a = t[2]), (o = t[3]), (c = t[4]), (l = t[5]), (u = t[6]), (d = t[7]));
  let f;
  t[9] === a.length
    ? (f = t[10])
    : ((f = (0, K.jsx)(s, {
        id: `localConversation.subagentsPanel.done`,
        defaultMessage: `Done · {count}`,
        description: `Heading and count for completed subagents in the subagents side panel`,
        values: { count: a.length },
      })),
      (t[9] = a.length),
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
  t[19] !== r || t[20] !== o
    ? ((h = (e) => {
        let t = o.get(e);
        t != null && r(t.conversationId, t.displayName);
      }),
      (t[19] = r),
      (t[20] = o),
      (t[21] = h))
    : (h = t[21]);
  let g;
  return (
    t[22] !== i || t[23] !== m || t[24] !== h
      ? ((g = (0, K.jsx)(i, { sections: m, onSelect: h })),
        (t[22] = i),
        (t[23] = m),
        (t[24] = h),
        (t[25] = g))
      : (g = t[25]),
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
  let t = (0, G.c)(16),
    { conversationId: n, displayName: r, hostId: i, onBack: c } = e,
    u = o(),
    d;
  t[0] !== n || t[1] !== i
    ? ((d = { hostId: i, threadId: n }), (t[0] = n), (t[1] = i), (t[2] = d))
    : (d = t[2]);
  let f = a(m, d),
    p = null;
  if (f?.model) {
    let e;
    t[3] === f.model ? (e = t[4]) : ((e = l(f.model)), (t[3] = f.model), (t[4] = e));
    let n = e,
      r;
    (t[5] !== n || t[6] !== f.reasoningEffort
      ? ((r = g(f.reasoningEffort)
          ? (0, K.jsx)(s, {
              id: `localConversation.subagentsPanel.modelAndReasoningEffort`,
              defaultMessage: `{model} · {reasoning, select, none {None} minimal {Minimal} low {Light} medium {Medium} high {High} xhigh {Extra High} max {Max} ultra {Ultra} persistent {Persistent} other {Medium}}`,
              description: `Model and reasoning effort shown in a selected subagent's details header. The model is a product name such as GPT-5.4. The reasoning value describes how much computational effort that subagent used.`,
              values: { reasoning: f.reasoningEffort, model: n },
            })
          : n),
        (t[5] = n),
        (t[6] = f.reasoningEffort),
        (t[7] = r))
      : (r = t[7]),
      (p = r));
  }
  let h;
  t[8] === u
    ? (h = t[9])
    : ((h = u.formatMessage({
        id: `localConversation.subagentsPanel.back`,
        defaultMessage: `Back to subagents`,
        description: `Accessible label for returning from a subagent transcript to the subagent list`,
      })),
      (t[8] = u),
      (t[9] = h));
  let _;
  return (
    t[10] !== n || t[11] !== r || t[12] !== p || t[13] !== c || t[14] !== h
      ? ((_ = (0, K.jsx)(M, { backAriaLabel: h, label: r, seed: n, trailing: p, onBack: c })),
        (t[10] = n),
        (t[11] = r),
        (t[12] = p),
        (t[13] = c),
        (t[14] = h),
        (t[15] = _))
      : (_ = t[15]),
    _
  );
}
function V(e) {
  let t = e.objective == null ? null : u(v(f(e.objective)), 60);
  return {
    avatarSeed: e.conversationId,
    id: e.conversationId,
    label: e.displayName,
    preview:
      t ??
      e.statusSummary ??
      (e.status === `done`
        ? null
        : (0, K.jsx)(s, {
            id: `localConversation.subagentsPanel.working`,
            defaultMessage: `Working`,
            description: `Fallback preview shown when an active subagent has no objective or response yet`,
          })),
    previewLineCount: 1,
    trailing: (0, K.jsx)(W, { subagent: e }),
  };
}
function H(e) {
  let t = (0, G.c)(4),
    { subagents: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = n.filter(U)), (t[0] = n), (t[1] = r));
  let i = r.length;
  if (i === 0) return null;
  let a;
  return (
    t[2] === i
      ? (a = t[3])
      : ((a = (0, K.jsx)(`span`, {
          className: `flex min-w-0 shrink items-center gap-1.5 truncate text-xs tabular-nums`,
          children: (0, K.jsx)(s, {
            id: `localConversation.subagentsPanel.summary.waiting`,
            defaultMessage: `{count, plural, one {# waiting} other {# waiting}}`,
            description: `Count of currently waiting subagents in the overview header`,
            values: { count: i },
          }),
        })),
        (t[2] = i),
        (t[3] = a)),
    a
  );
}
function U(e) {
  let { status: t } = e;
  return t === `waiting`;
}
function W(e) {
  let t = (0, G.c)(14),
    { subagent: n } = e,
    r = n.lastAssistantMessageAtMs ?? n.recencyAtMs ?? null,
    i;
  t[0] !== r || t[1] !== n.status
    ? ((i = n.status !== `done` || r == null ? null : new Date(r).toISOString()),
      (t[0] = r),
      (t[1] = n.status),
      (t[2] = i))
    : (i = t[2]);
  let a = i,
    o;
  t[3] === n.status
    ? (o = t[4])
    : ((o =
        n.status === `waiting`
          ? (0, K.jsx)(s, {
              id: `localConversation.subagentsPanel.status.waiting`,
              defaultMessage: `Waiting`,
              description: `Status label for a subagent awaiting work in the overview`,
            })
          : null),
      (t[3] = n.status),
      (t[4] = o));
  let c;
  t[5] !== n.startedAtMs || t[6] !== n.status
    ? ((c =
        n.status === `done` || n.startedAtMs == null ? null : (0, K.jsx)(P, { startedAtMs: n.startedAtMs })),
      (t[5] = n.startedAtMs),
      (t[6] = n.status),
      (t[7] = c))
    : (c = t[7]);
  let l;
  t[8] === a
    ? (l = t[9])
    : ((l =
        a == null
          ? null
          : (0, K.jsx)(`time`, {
              dateTime: a,
              children: (0, K.jsx)(C, { dateString: a, format: `relative` }),
            })),
      (t[8] = a),
      (t[9] = l));
  let u;
  return (
    t[10] !== o || t[11] !== c || t[12] !== l
      ? ((u = (0, K.jsxs)(`span`, { className: `flex items-center gap-3`, children: [o, c, l] })),
        (t[10] = o),
        (t[11] = c),
        (t[12] = l),
        (t[13] = u))
      : (u = t[13]),
    u
  );
}
var G, K;
function q() {
  return (q = e(() => {
    ((G = n()), b(), i(), x(), _(), r(), h(), S(), d(), p(), E(), w(), j(), N(), O(), (K = t()));
  }))();
}
q();
export { F as LocalConversationSubagentsPanelTab };
//# sourceMappingURL=local-conversation-subagents-panel-tab-3ec9b0203db4.js.map
