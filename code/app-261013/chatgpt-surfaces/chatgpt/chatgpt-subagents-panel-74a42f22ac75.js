import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Pxt as n,
  VDt as r,
  _Mt as i,
  gMt as a,
  jDt as o,
  vzt as s,
  xMt as c,
  zxt as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  GVn as u,
  GWn as d,
  JZn as f,
  KWn as p,
  UWn as m,
  VZn as h,
  bOn as g,
  pZn as _,
  qVn as v,
  wOn as y,
  yjn as b,
} from "./app-initial-5851df3f6cb1.js";
import { n as x, t as S } from "./chatgpt-markdown-view-10e560aa371d.js";
import { n as C, r as w, t as T } from "./subagent-panel-e2d31e8d7515.js";
import { n as E, t as D } from "./chatgpt-subagent-final-response-query-a09eb28a8adf.js";
function O(e) {
  let n = (0, L.c)(26),
    { conversationId: i, onSelect: a, renderSlots: o, selectedThreadId: s } = e,
    c = r(),
    d = l(u, i),
    p = l(h, i),
    v = l(_, i),
    y = l(g, i),
    b;
  n[0] === p ? (b = n[1]) : ((b = f(p)), (n[0] = p), (n[1] = b));
  let x = b,
    S;
  n[2] !== x || n[3] !== d
    ? ((S = d == null ? null : m(d, { isTurnLive: x })), (n[2] = x), (n[3] = d), (n[4] = S))
    : (S = n[4]);
  let C = S,
    w = C?.subagents ?? z,
    E;
  if (
    n[5] !== C?.activationIdByThreadId ||
    n[6] !== c ||
    n[7] !== x ||
    n[8] !== a ||
    n[9] !== o ||
    n[10] !== s ||
    n[11] !== v ||
    n[12] !== y ||
    n[13] !== w
  ) {
    E = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e =
        s == null
          ? null
          : (w.find((e) => {
              let { threadId: t } = e;
              return t === s;
            }) ?? null);
      if (s != null) {
        let r;
        n[15] === c
          ? (r = n[16])
          : ((r = c.formatMessage({
              id: `chatgptConversations.subagents.panel.back`,
              defaultMessage: `Back to subagents`,
              description: `Accessible label for a button in the Work subagents right side panel that returns from one agent's detail view to the agent list.`,
            })),
            (n[15] = c),
            (n[16] = r));
        let i;
        (n[17] === a ? (i = n[18]) : ((i = () => a(null)), (n[17] = a), (n[18] = i)),
          (E = o({
            headerRows: [
              {
                id: `subagent-detail`,
                content: (0, R.jsx)(T, {
                  backAriaLabel: r,
                  label:
                    e?.displayName ??
                    (0, R.jsx)(t, {
                      id: `chatgptConversations.subagents.nameFallback`,
                      defaultMessage: `Subagent`,
                      description: `Short fallback name shown in Work subagent activity chips and side panel rows when the backend did not provide a display name.`,
                    }),
                  seed: s,
                  onBack: i,
                }),
              },
            ],
            content:
              e?.status === `done`
                ? (0, R.jsx)(k, {
                    activationId: C?.activationIdByThreadId.get(e.threadId) ?? `initial:${e.threadId}`,
                    conversationId: v,
                    isTurnLive: x,
                    shouldBlockExternalEgress: y,
                    subagent: e,
                  })
                : (0, R.jsx)(P, {
                    conversationId: v,
                    finalResponse: e?.statusMessage ?? null,
                    finalResponseStatus: e?.status === `failed` ? `unavailable` : null,
                    shouldBlockExternalEgress: y,
                    subagent: e,
                  }),
          })));
        break bb0;
      }
    }
    ((n[5] = C?.activationIdByThreadId),
      (n[6] = c),
      (n[7] = x),
      (n[8] = a),
      (n[9] = o),
      (n[10] = s),
      (n[11] = v),
      (n[12] = y),
      (n[13] = w),
      (n[14] = E));
  } else E = n[14];
  if (E !== Symbol.for(`react.early_return_sentinel`)) return E;
  let D;
  if (n[19] !== a || n[20] !== o || n[21] !== w) {
    let e;
    (n[23] !== a || n[24] !== w
      ? ((e = (0, R.jsx)(A, { subagents: w, onSelect: a })), (n[23] = a), (n[24] = w), (n[25] = e))
      : (e = n[25]),
      (D = o({ headerRows: [], content: e })),
      (n[19] = a),
      (n[20] = o),
      (n[21] = w),
      (n[22] = D));
  } else D = n[22];
  return D;
}
function k(e) {
  let t = (0, L.c)(11),
    { activationId: n, conversationId: r, isTurnLive: i, shouldBlockExternalEgress: a, subagent: o } = e,
    s;
  t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== o.threadId
    ? ((s = { activationId: n, conversationId: r, isTurnLive: i, threadId: o.threadId }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = o.threadId),
      (t[4] = s))
    : (s = t[4]);
  let c = l(D, s),
    u = c.data ?? o.statusMessage,
    d = c.data != null || o.statusMessage != null ? null : c.isError ? `unavailable` : `loading`,
    f;
  return (
    t[5] !== r || t[6] !== a || t[7] !== o || t[8] !== u || t[9] !== d
      ? ((f = (0, R.jsx)(P, {
          conversationId: r,
          finalResponse: u,
          finalResponseStatus: d,
          shouldBlockExternalEgress: a,
          subagent: o,
        })),
        (t[5] = r),
        (t[6] = a),
        (t[7] = o),
        (t[8] = u),
        (t[9] = d),
        (t[10] = f))
      : (f = t[10]),
    f
  );
}
function A(e) {
  let n = (0, L.c)(25),
    { subagents: r, onSelect: i } = e,
    a,
    o,
    s,
    c,
    l,
    u;
  if (n[0] !== r) {
    let e = r.filter(M);
    ((o = r.filter(j)), (a = C));
    let i;
    n[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, R.jsx)(t, {
          id: `chatgptConversations.subagents.panel.noActive`,
          defaultMessage: `No active subagents`,
          description: `Empty-state text in the Active section of the Work subagents right side panel when no delegated agents are currently working.`,
        })),
        (n[7] = i))
      : (i = n[7]);
    let d = e.map(N),
      f;
    (n[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, R.jsx)(t, {
          id: `chatgptConversations.subagents.panel.active`,
          defaultMessage: `Active`,
          description: `Short section heading in the Work subagents right side panel for delegated agents that are waiting or working. The sibling section is Done.`,
        })),
        (n[8] = f))
      : (f = n[8]),
      n[9] === d
        ? (u = n[10])
        : ((u = { emptyState: i, id: `active`, items: d, title: f, visibleItemLimit: 4 }),
          (n[9] = d),
          (n[10] = u)),
      (s = `mt-6`),
      (c = `done`),
      (l = o.map(N)),
      (n[0] = r),
      (n[1] = a),
      (n[2] = o),
      (n[3] = s),
      (n[4] = c),
      (n[5] = l),
      (n[6] = u));
  } else ((a = n[1]), (o = n[2]), (s = n[3]), (c = n[4]), (l = n[5]), (u = n[6]));
  let d;
  n[11] === o.length
    ? (d = n[12])
    : ((d = (0, R.jsx)(t, {
        id: `chatgptConversations.subagents.panel.done`,
        defaultMessage: `Done · {count}`,
        description: `Short section heading in the Work subagents right side panel for completed or failed delegated agents. The count placeholder is the number of agents in this section. The sibling section is Active.`,
        values: { count: o.length },
      })),
      (n[11] = o.length),
      (n[12] = d));
  let f;
  n[13] !== s || n[14] !== c || n[15] !== l || n[16] !== d
    ? ((f = { className: s, id: c, items: l, title: d, visibleItemLimit: 10 }),
      (n[13] = s),
      (n[14] = c),
      (n[15] = l),
      (n[16] = d),
      (n[17] = f))
    : (f = n[17]);
  let p;
  n[18] !== u || n[19] !== f ? ((p = [u, f]), (n[18] = u), (n[19] = f), (n[20] = p)) : (p = n[20]);
  let m;
  return (
    n[21] !== a || n[22] !== i || n[23] !== p
      ? ((m = (0, R.jsx)(a, { sections: p, onSelect: i })),
        (n[21] = a),
        (n[22] = i),
        (n[23] = p),
        (n[24] = m))
      : (m = n[24]),
    m
  );
}
function j(e) {
  let { status: t } = e;
  return !p(t);
}
function M(e) {
  let { status: t } = e;
  return p(t);
}
function N(e) {
  let n = e.statusMessage ?? (p(e.status) ? e.prompt : null);
  return {
    avatarSeed: e.threadId,
    id: e.threadId,
    label:
      e.displayName ??
      (0, R.jsx)(t, {
        id: `chatgptConversations.subagents.nameFallback`,
        defaultMessage: `Subagent`,
        description: `Short fallback name shown in Work subagent activity chips and side panel rows when the backend did not provide a display name.`,
      }),
    preview:
      n ??
      (p(e.status)
        ? null
        : e.status === `done`
          ? (0, R.jsx)(t, {
              id: `chatgptConversations.subagents.panel.preview.finished`,
              defaultMessage: `Finished`,
              description: `Short fallback preview in the Work subagents side panel when a completed agent's final response is still loading or unavailable.`,
            })
          : (0, R.jsx)(t, {
              id: `chatgptConversations.subagents.panel.preview.stopped`,
              defaultMessage: `Stopped`,
              description: `Short fallback preview in the Work subagents side panel when a failed agent did not provide a final response.`,
            })),
    previewLineCount: 2,
    trailing: (0, R.jsx)(`span`, {
      className: a(e.status === `failed` && `text-chart-red`),
      children: (0, R.jsx)(I, { status: e.status }),
    }),
  };
}
function P(e) {
  let n = (0, L.c)(6),
    {
      conversationId: r,
      finalResponse: i,
      finalResponseStatus: o,
      shouldBlockExternalEgress: s,
      subagent: c,
    } = e,
    l;
  return (
    n[0] !== r || n[1] !== i || n[2] !== o || n[3] !== s || n[4] !== c
      ? ((l = (0, R.jsx)(`div`, {
          className: `h-full min-h-0 overflow-y-auto px-4 py-5`,
          children:
            c == null
              ? (0, R.jsx)(`div`, {
                  className: `text-sm text-secondary`,
                  children: (0, R.jsx)(t, {
                    id: `chatgptConversations.subagents.panel.unavailable`,
                    defaultMessage: `This subagent is no longer available on the current branch.`,
                    description: `Body text in the Work subagents right side panel when the selected delegated agent is absent after the user switches conversation branches.`,
                  }),
                })
              : (0, R.jsxs)(R.Fragment, {
                  children: [
                    (0, R.jsx)(F, {
                      title: (0, R.jsx)(t, {
                        id: `chatgptConversations.subagents.panel.status`,
                        defaultMessage: `Status`,
                        description: `Short section heading in a Work subagent detail view above the agent's current Waiting, Working, Done, or Failed status.`,
                      }),
                      children: (0, R.jsx)(`span`, {
                        className: a(c.status === `failed` && `text-chart-red`),
                        children: (0, R.jsx)(I, { status: c.status }),
                      }),
                    }),
                    c.prompt == null
                      ? null
                      : (0, R.jsx)(F, {
                          title: (0, R.jsx)(t, {
                            id: `chatgptConversations.subagents.panel.delegatedTask`,
                            defaultMessage: `Delegated task`,
                            description: `Section heading in a Work subagent detail view above the prompt that the parent task delegated to this agent.`,
                          }),
                          children: (0, R.jsx)(`p`, { className: `whitespace-pre-wrap`, children: c.prompt }),
                        }),
                    i == null
                      ? null
                      : (0, R.jsx)(F, {
                          title: (0, R.jsx)(t, {
                            id: `chatgptConversations.subagents.panel.response`,
                            defaultMessage: `Final response`,
                            description: `Section heading in a Work subagent detail view above the agent's completed response to its delegated task.`,
                          }),
                          children: (0, R.jsx)(S, {
                            className: `[&>*:last-child]:mb-0 [&>ol:first-child]:mt-0 [&>ul:first-child]:mt-0`,
                            conversationId: r,
                            externalResourcePolicy: s ? `restricted` : `allow`,
                            isStreaming: !1,
                            textStyle: { kind: `assistant-message` },
                            children: i,
                          }),
                        }),
                    o == null
                      ? null
                      : (0, R.jsx)(F, {
                          title: (0, R.jsx)(t, {
                            id: `chatgptConversations.subagents.panel.response`,
                            defaultMessage: `Final response`,
                            description: `Section heading in a Work subagent detail view above the agent's completed response to its delegated task.`,
                          }),
                          children: (0, R.jsx)(`span`, {
                            className: `text-secondary`,
                            children:
                              o === `loading`
                                ? (0, R.jsx)(t, {
                                    id: `chatgptConversations.subagents.panel.response.loading`,
                                    defaultMessage: `Loading the final response…`,
                                    description: `Loading message in a Work subagent detail view while the completed child task's final response is being retrieved.`,
                                  })
                                : (0, R.jsx)(t, {
                                    id: `chatgptConversations.subagents.panel.response.unavailable`,
                                    defaultMessage: `No final response is available.`,
                                    description: `Fallback message in a Work subagent detail view when a stopped child task did not provide a final response or retrieval failed.`,
                                  }),
                          }),
                        }),
                  ],
                }),
        })),
        (n[0] = r),
        (n[1] = i),
        (n[2] = o),
        (n[3] = s),
        (n[4] = c),
        (n[5] = l))
      : (l = n[5]),
    l
  );
}
function F(e) {
  let t = (0, L.c)(7),
    { children: n, title: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, R.jsx)(`h2`, { className: `mb-2 text-sm font-medium text-tertiary`, children: r })),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a = (0, R.jsx)(`div`, { className: `text-sm leading-6 text-default`, children: n })),
      (t[2] = n),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, R.jsxs)(`section`, { className: `mb-6 last:mb-0`, children: [i, a] })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function I(e) {
  let n = (0, L.c)(4),
    { status: r } = e;
  switch (r) {
    case `waiting`: {
      let e;
      return (
        n[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, R.jsx)(t, {
              id: `chatgptConversations.subagents.status.waiting`,
              defaultMessage: `Waiting`,
              description: `Short status label in the Work subagents right side panel for a delegated agent waiting to start. Sibling statuses are Working, Done, and Failed.`,
            })),
            (n[0] = e))
          : (e = n[0]),
        e
      );
    }
    case `working`: {
      let e;
      return (
        n[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, R.jsx)(t, {
              id: `chatgptConversations.subagents.status.working`,
              defaultMessage: `Working`,
              description: `Short status label in the Work subagents right side panel for a delegated agent currently working. Sibling statuses are Waiting, Done, and Failed.`,
            })),
            (n[1] = e))
          : (e = n[1]),
        e
      );
    }
    case `done`: {
      let e;
      return (
        n[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, R.jsx)(t, {
              id: `chatgptConversations.subagents.status.done`,
              defaultMessage: `Done`,
              description: `Short status label in the Work subagents right side panel for a delegated agent that stopped normally, was interrupted, or shut down. Sibling statuses are Waiting, Working, and Failed.`,
            })),
            (n[2] = e))
          : (e = n[2]),
        e
      );
    }
    case `failed`: {
      let e;
      return (
        n[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, R.jsx)(t, {
              id: `chatgptConversations.subagents.status.failed`,
              defaultMessage: `Failed`,
              description: `Short status label in the Work subagents right side panel for a delegated agent that ended with an error. Sibling statuses are Waiting, Working, and Done.`,
            })),
            (n[3] = e))
          : (e = n[3]),
        e
      );
    }
  }
}
var L, R, z;
function B() {
  return (B = e(() => {
    ((L = s()), i(), n(), o(), w(), v(), x(), E(), b(), y(), d(), (R = c()), (z = []));
  }))();
}
B();
export { O as ChatGptSubagentsPanelTab };
//# sourceMappingURL=chatgpt-subagents-panel-74a42f22ac75.js.map
