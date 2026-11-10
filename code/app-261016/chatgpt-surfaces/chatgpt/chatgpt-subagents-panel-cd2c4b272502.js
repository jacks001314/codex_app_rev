import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  LNt as t,
  MNt as n,
  NNt as r,
  PBt as i,
  XOt as a,
  ZSt as o,
  nCt as s,
  okt as c,
  tkt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B1n as u,
  Ujn as d,
  VPn as f,
  cGn as p,
  fJn as m,
  hJn as h,
  m0n as g,
  mJn as _,
  qjn as v,
  uGn as y,
  x0n as b,
} from "./app-initial-ad16eaadf81f.js";
import { n as x, t as S } from "./chatgpt-markdown-view-49d8cc54ac3e.js";
import { n as C, r as w, t as T } from "./subagent-panel-d0b73809f634.js";
import { n as E, t as D } from "./chatgpt-subagent-final-response-query-9861b2118a73.js";
function O(e) {
  let t = (0, L.c)(26),
    { conversationId: n, onSelect: r, renderSlots: i, selectedThreadId: a } = e,
    o = c(),
    f = s(p, n),
    h = s(g, n),
    _ = s(u, n),
    v = s(d, n),
    y;
  t[0] === h ? (y = t[1]) : ((y = b(h)), (t[0] = h), (t[1] = y));
  let x = y,
    S;
  t[2] !== x || t[3] !== f
    ? ((S = f == null ? null : m(f, { isTurnLive: x })), (t[2] = x), (t[3] = f), (t[4] = S))
    : (S = t[4]);
  let C = S,
    w = C?.subagents ?? z,
    E;
  if (
    t[5] !== C?.activationIdByThreadId ||
    t[6] !== o ||
    t[7] !== x ||
    t[8] !== r ||
    t[9] !== i ||
    t[10] !== a ||
    t[11] !== _ ||
    t[12] !== v ||
    t[13] !== w
  ) {
    E = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e =
        a == null
          ? null
          : (w.find((e) => {
              let { threadId: t } = e;
              return t === a;
            }) ?? null);
      if (a != null) {
        let n;
        t[15] === o
          ? (n = t[16])
          : ((n = o.formatMessage({
              id: `chatgptConversations.subagents.panel.back`,
              defaultMessage: `Back to subagents`,
              description: `Accessible label for a button in the Work subagents right side panel that returns from one agent's detail view to the agent list.`,
            })),
            (t[15] = o),
            (t[16] = n));
        let s;
        (t[17] === r ? (s = t[18]) : ((s = () => r(null)), (t[17] = r), (t[18] = s)),
          (E = i({
            headerRows: [
              {
                id: `subagent-detail`,
                content: (0, R.jsx)(T, {
                  backAriaLabel: n,
                  label:
                    e?.displayName ??
                    (0, R.jsx)(l, {
                      id: `chatgptConversations.subagents.nameFallback`,
                      defaultMessage: `Subagent`,
                      description: `Short fallback name shown in Work subagent activity chips and side panel rows when the backend did not provide a display name.`,
                    }),
                  seed: a,
                  onBack: s,
                }),
              },
            ],
            content:
              e?.status === `done`
                ? (0, R.jsx)(k, {
                    activationId: C?.activationIdByThreadId.get(e.threadId) ?? `initial:${e.threadId}`,
                    conversationId: _,
                    isTurnLive: x,
                    shouldBlockExternalEgress: v,
                    subagent: e,
                  })
                : (0, R.jsx)(P, {
                    conversationId: _,
                    finalResponse: e?.statusMessage ?? null,
                    finalResponseStatus: e?.status === `failed` ? `unavailable` : null,
                    shouldBlockExternalEgress: v,
                    subagent: e,
                  }),
          })));
        break bb0;
      }
    }
    ((t[5] = C?.activationIdByThreadId),
      (t[6] = o),
      (t[7] = x),
      (t[8] = r),
      (t[9] = i),
      (t[10] = a),
      (t[11] = _),
      (t[12] = v),
      (t[13] = w),
      (t[14] = E));
  } else E = t[14];
  if (E !== Symbol.for(`react.early_return_sentinel`)) return E;
  let D;
  if (t[19] !== r || t[20] !== i || t[21] !== w) {
    let e;
    (t[23] !== r || t[24] !== w
      ? ((e = (0, R.jsx)(A, { subagents: w, onSelect: r })), (t[23] = r), (t[24] = w), (t[25] = e))
      : (e = t[25]),
      (D = i({ headerRows: [], content: e })),
      (t[19] = r),
      (t[20] = i),
      (t[21] = w),
      (t[22] = D));
  } else D = t[22];
  return D;
}
function k(e) {
  let t = (0, L.c)(11),
    { activationId: n, conversationId: r, isTurnLive: i, shouldBlockExternalEgress: a, subagent: o } = e,
    c;
  t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== o.threadId
    ? ((c = { activationId: n, conversationId: r, isTurnLive: i, threadId: o.threadId }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = o.threadId),
      (t[4] = c))
    : (c = t[4]);
  let l = s(D, c),
    u = l.data ?? o.statusMessage,
    d = l.data != null || o.statusMessage != null ? null : l.isError ? `unavailable` : `loading`,
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
  let t = (0, L.c)(25),
    { subagents: n, onSelect: r } = e,
    i,
    a,
    o,
    s,
    c,
    u;
  if (t[0] !== n) {
    let e = n.filter(M);
    ((a = n.filter(j)), (i = C));
    let r;
    t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, R.jsx)(l, {
          id: `chatgptConversations.subagents.panel.noActive`,
          defaultMessage: `No active subagents`,
          description: `Empty-state text in the Active section of the Work subagents right side panel when no delegated agents are currently working.`,
        })),
        (t[7] = r))
      : (r = t[7]);
    let d = e.map(N),
      f;
    (t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, R.jsx)(l, {
          id: `chatgptConversations.subagents.panel.active`,
          defaultMessage: `Active`,
          description: `Short section heading in the Work subagents right side panel for delegated agents that are waiting or working. The sibling section is Done.`,
        })),
        (t[8] = f))
      : (f = t[8]),
      t[9] === d
        ? (u = t[10])
        : ((u = { emptyState: r, id: `active`, items: d, title: f, visibleItemLimit: 4 }),
          (t[9] = d),
          (t[10] = u)),
      (o = `mt-6`),
      (s = `done`),
      (c = a.map(N)),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c),
      (t[6] = u));
  } else ((i = t[1]), (a = t[2]), (o = t[3]), (s = t[4]), (c = t[5]), (u = t[6]));
  let d;
  t[11] === a.length
    ? (d = t[12])
    : ((d = (0, R.jsx)(l, {
        id: `chatgptConversations.subagents.panel.done`,
        defaultMessage: `Done · {count}`,
        description: `Short section heading in the Work subagents right side panel for completed or failed delegated agents. The count placeholder is the number of agents in this section. The sibling section is Active.`,
        values: { count: a.length },
      })),
      (t[11] = a.length),
      (t[12] = d));
  let f;
  t[13] !== o || t[14] !== s || t[15] !== c || t[16] !== d
    ? ((f = { className: o, id: s, items: c, title: d, visibleItemLimit: 10 }),
      (t[13] = o),
      (t[14] = s),
      (t[15] = c),
      (t[16] = d),
      (t[17] = f))
    : (f = t[17]);
  let p;
  t[18] !== u || t[19] !== f ? ((p = [u, f]), (t[18] = u), (t[19] = f), (t[20] = p)) : (p = t[20]);
  let m;
  return (
    t[21] !== i || t[22] !== r || t[23] !== p
      ? ((m = (0, R.jsx)(i, { sections: p, onSelect: r })),
        (t[21] = i),
        (t[22] = r),
        (t[23] = p),
        (t[24] = m))
      : (m = t[24]),
    m
  );
}
function j(e) {
  let { status: t } = e;
  return !h(t);
}
function M(e) {
  let { status: t } = e;
  return h(t);
}
function N(e) {
  let t = e.statusMessage ?? (h(e.status) ? e.prompt : null);
  return {
    avatarSeed: e.threadId,
    id: e.threadId,
    label:
      e.displayName ??
      (0, R.jsx)(l, {
        id: `chatgptConversations.subagents.nameFallback`,
        defaultMessage: `Subagent`,
        description: `Short fallback name shown in Work subagent activity chips and side panel rows when the backend did not provide a display name.`,
      }),
    preview:
      t ??
      (h(e.status)
        ? null
        : e.status === `done`
          ? (0, R.jsx)(l, {
              id: `chatgptConversations.subagents.panel.preview.finished`,
              defaultMessage: `Finished`,
              description: `Short fallback preview in the Work subagents side panel when a completed agent's final response is still loading or unavailable.`,
            })
          : (0, R.jsx)(l, {
              id: `chatgptConversations.subagents.panel.preview.stopped`,
              defaultMessage: `Stopped`,
              description: `Short fallback preview in the Work subagents side panel when a failed agent did not provide a final response.`,
            })),
    previewLineCount: 2,
    trailing: (0, R.jsx)(`span`, {
      className: n(e.status === `failed` && `text-chart-red`),
      children: (0, R.jsx)(I, { status: e.status }),
    }),
  };
}
function P(e) {
  let t = (0, L.c)(6),
    {
      conversationId: r,
      finalResponse: i,
      finalResponseStatus: a,
      shouldBlockExternalEgress: o,
      subagent: s,
    } = e,
    c;
  return (
    t[0] !== r || t[1] !== i || t[2] !== a || t[3] !== o || t[4] !== s
      ? ((c = (0, R.jsx)(`div`, {
          className: `h-full min-h-0 overflow-y-auto px-4 py-5`,
          children:
            s == null
              ? (0, R.jsx)(`div`, {
                  className: `text-sm text-secondary`,
                  children: (0, R.jsx)(l, {
                    id: `chatgptConversations.subagents.panel.unavailable`,
                    defaultMessage: `This subagent is no longer available on the current branch.`,
                    description: `Body text in the Work subagents right side panel when the selected delegated agent is absent after the user switches conversation branches.`,
                  }),
                })
              : (0, R.jsxs)(R.Fragment, {
                  children: [
                    (0, R.jsx)(F, {
                      title: (0, R.jsx)(l, {
                        id: `chatgptConversations.subagents.panel.status`,
                        defaultMessage: `Status`,
                        description: `Short section heading in a Work subagent detail view above the agent's current Waiting, Working, Done, or Failed status.`,
                      }),
                      children: (0, R.jsx)(`span`, {
                        className: n(s.status === `failed` && `text-chart-red`),
                        children: (0, R.jsx)(I, { status: s.status }),
                      }),
                    }),
                    s.prompt == null
                      ? null
                      : (0, R.jsx)(F, {
                          title: (0, R.jsx)(l, {
                            id: `chatgptConversations.subagents.panel.delegatedTask`,
                            defaultMessage: `Delegated task`,
                            description: `Section heading in a Work subagent detail view above the prompt that the parent task delegated to this agent.`,
                          }),
                          children: (0, R.jsx)(`p`, { className: `whitespace-pre-wrap`, children: s.prompt }),
                        }),
                    i == null
                      ? null
                      : (0, R.jsx)(F, {
                          title: (0, R.jsx)(l, {
                            id: `chatgptConversations.subagents.panel.response`,
                            defaultMessage: `Final response`,
                            description: `Section heading in a Work subagent detail view above the agent's completed response to its delegated task.`,
                          }),
                          children: (0, R.jsx)(S, {
                            className: `[&>*:last-child]:mb-0 [&>ol:first-child]:mt-0 [&>ul:first-child]:mt-0`,
                            conversationId: r,
                            externalResourcePolicy: o ? `restricted` : `allow`,
                            isStreaming: !1,
                            textStyle: { kind: `assistant-message` },
                            children: i,
                          }),
                        }),
                    a == null
                      ? null
                      : (0, R.jsx)(F, {
                          title: (0, R.jsx)(l, {
                            id: `chatgptConversations.subagents.panel.response`,
                            defaultMessage: `Final response`,
                            description: `Section heading in a Work subagent detail view above the agent's completed response to its delegated task.`,
                          }),
                          children: (0, R.jsx)(`span`, {
                            className: `text-secondary`,
                            children:
                              a === `loading`
                                ? (0, R.jsx)(l, {
                                    id: `chatgptConversations.subagents.panel.response.loading`,
                                    defaultMessage: `Loading the final response…`,
                                    description: `Loading message in a Work subagent detail view while the completed child task's final response is being retrieved.`,
                                  })
                                : (0, R.jsx)(l, {
                                    id: `chatgptConversations.subagents.panel.response.unavailable`,
                                    defaultMessage: `No final response is available.`,
                                    description: `Fallback message in a Work subagent detail view when a stopped child task did not provide a final response or retrieval failed.`,
                                  }),
                          }),
                        }),
                  ],
                }),
        })),
        (t[0] = r),
        (t[1] = i),
        (t[2] = a),
        (t[3] = o),
        (t[4] = s),
        (t[5] = c))
      : (c = t[5]),
    c
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
  let t = (0, L.c)(4),
    { status: n } = e;
  switch (n) {
    case `waiting`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, R.jsx)(l, {
              id: `chatgptConversations.subagents.status.waiting`,
              defaultMessage: `Waiting`,
              description: `Short status label in the Work subagents right side panel for a delegated agent waiting to start. Sibling statuses are Working, Done, and Failed.`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `working`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, R.jsx)(l, {
              id: `chatgptConversations.subagents.status.working`,
              defaultMessage: `Working`,
              description: `Short status label in the Work subagents right side panel for a delegated agent currently working. Sibling statuses are Waiting, Done, and Failed.`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `done`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, R.jsx)(l, {
              id: `chatgptConversations.subagents.status.done`,
              defaultMessage: `Done`,
              description: `Short status label in the Work subagents right side panel for a delegated agent that stopped normally, was interrupted, or shut down. Sibling statuses are Waiting, Working, and Failed.`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `failed`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, R.jsx)(l, {
              id: `chatgptConversations.subagents.status.failed`,
              defaultMessage: `Failed`,
              description: `Short status label in the Work subagents right side panel for a delegated agent that ended with an error. Sibling statuses are Waiting, Working, and Done.`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
  }
}
var L, R, z;
function B() {
  return (B = e(() => {
    ((L = i()), r(), o(), a(), w(), y(), x(), E(), f(), v(), _(), (R = t()), (z = []));
  }))();
}
B();
export { O as ChatGptSubagentsPanelTab };
//# sourceMappingURL=chatgpt-subagents-panel-cd2c4b272502.js.map
