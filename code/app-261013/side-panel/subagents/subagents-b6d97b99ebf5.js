import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as n,
  Pxt as r,
  SJ as i,
  SV as a,
  TJ as o,
  VDt as s,
  XV as c,
  _K as l,
  aSt as u,
  i3 as d,
  jDt as f,
  r3 as p,
  tMt as m,
  vzt as h,
  xMt as g,
  zxt as _,
} from "./app-shared-bbfeca5e5737.js";
import {
  GVn as v,
  GWn as y,
  JZn as b,
  KWn as x,
  QSr as S,
  UWn as C,
  VZn as w,
  ZSr as T,
  _z as E,
  cyn as D,
  gz as O,
  lyn as k,
  pZn as A,
  qVn as j,
  yjn as M,
} from "./app-initial-5851df3f6cb1.js";
import { n as N, t as P } from "./chatgpt-subagent-final-response-query-a09eb28a8adf.js";
import { n as F, t as I } from "./conversation-a27aae5d4454.js";
import { n as L, t as R } from "./subagent-row-3ffa8b6ba655.js";
function z(e) {
  let t = (0, U.c)(13),
    { conversationId: n, selectedThreadId: r, title: i } = e,
    a = s(),
    o;
  t[0] !== n || t[1] !== r
    ? ((o = { conversationId: n, selectedThreadId: r }), (t[0] = n), (t[1] = r), (t[2] = o))
    : (o = t[2]);
  let c = _(q, o);
  if (c.subagents == null) return null;
  if (r != null) {
    let e;
    t[3] !== a || t[4] !== c.selectedDisplayName
      ? ((e =
          c.selectedDisplayName ??
          a.formatMessage({
            id: `chatgptConversations.subagents.nameFallback`,
            defaultMessage: `Subagent`,
            description: `Short fallback name shown in Work subagent activity chips and side panel rows when the backend did not provide a display name.`,
          })),
        (t[3] = a),
        (t[4] = c.selectedDisplayName),
        (t[5] = e))
      : (e = t[5]);
    let n;
    return (
      t[6] !== c.responseExcerpt || t[7] !== c.statusState || t[8] !== e
        ? ((n = (0, G.jsx)(I, { title: e, responseExcerpt: c.responseExcerpt, statusState: c.statusState })),
          (t[6] = c.responseExcerpt),
          (t[7] = c.statusState),
          (t[8] = e),
          (t[9] = n))
        : (n = t[9]),
      n
    );
  }
  let l;
  return (
    t[10] !== c.subagents || t[11] !== i
      ? ((l = (0, G.jsx)(B, { title: i, subagents: c.subagents })),
        (t[10] = c.subagents),
        (t[11] = i),
        (t[12] = l))
      : (l = t[12]),
    l
  );
}
function B(e) {
  let t = (0, U.c)(6),
    { subagents: n, title: r } = e;
  if (n.length === 0) return null;
  let i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = (0, G.jsx)(l, {})), (t[0] = i)) : (i = t[0]);
  let a;
  t[1] === n ? (a = t[2]) : ((a = (0, W.default)(n, H).slice(0, 4).map(V)), (t[1] = n), (t[2] = a));
  let o;
  return (
    t[3] !== a || t[4] !== r
      ? ((o = (0, G.jsx)(O, { icon: i, subtitle: null, title: r, sections: a })),
        (t[3] = a),
        (t[4] = r),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function V(e) {
  return {
    kind: `block`,
    content: (0, G.jsx)(R, {
      avatarSeed: e.threadId,
      name:
        e.displayName ??
        (0, G.jsx)(n, {
          id: `chatgptConversations.subagents.nameFallback`,
          defaultMessage: `Subagent`,
          description: `Short fallback name shown in Work subagent activity chips and side panel rows when the backend did not provide a display name.`,
        }),
      status: (0, G.jsxs)(G.Fragment, {
        children: [
          K[e.status],
          (0, G.jsx)(`span`, {
            className: `sr-only`,
            children: (0, G.jsx)(n, {
              id: `tabThumbnail.chatGptSubagents.status`,
              defaultMessage: `{status, select, waiting {Waiting} working {Working} done {Done} other {Failed}}`,
              description: `Known status of a Work subagent in a tab thumbnail`,
              values: { status: e.status },
            }),
          }),
        ],
      }),
    }),
  };
}
function H(e) {
  return !x(e.status);
}
var U, W, G, K, q;
function J() {
  return (J = e(() => {
    ((U = h()),
      (W = t(m(), 1)),
      r(),
      T(),
      f(),
      F(),
      E(),
      k(),
      o(),
      d(),
      L(),
      j(),
      N(),
      M(),
      y(),
      (G = g()),
      (K = {
        waiting: (0, G.jsx)(c, { className: `text-warning` }),
        working: (0, G.jsx)(p, { className: `icon-xs text-info`, as: `span` }),
        done: (0, G.jsx)(a, { className: `text-success` }),
        failed: (0, G.jsx)(i, { className: `text-danger` }),
      }),
      (q = u(D, ({ conversationId: e, selectedThreadId: t }, { scope: n }) => {
        let r = n.get(v, e),
          i = b(n.get(w, e)),
          a = r == null ? null : C(r, { isTurnLive: i }),
          o = a?.subagents.find((e) => e.threadId === t),
          s =
            o?.status === `done`
              ? n.query.getData(P, {
                  activationId: a?.activationIdByThreadId.get(o.threadId) ?? `initial:${o.threadId}`,
                  conversationId: n.get(A, e),
                  isTurnLive: i,
                  threadId: o.threadId,
                })
              : null,
          c = o != null && x(o.status),
          l = { type: c ? `loading` : `idle` };
        o?.status === `failed` && (l.type = `error`);
        let u = s ?? o?.statusMessage ?? (c ? o.prompt : null);
        return {
          subagents: a?.subagents ?? null,
          selectedDisplayName: o?.displayName ?? null,
          responseExcerpt: u == null ? null : S(u.slice(0, 1e3)),
          statusState: l,
        };
      })));
  }))();
}
J();
export { z as RegisteredChatGptSubagentsThumbnail };
//# sourceMappingURL=subagents-b6d97b99ebf5.js.map
