import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Cpn as n,
  Jdt as r,
  MMt as i,
  Mat as a,
  N3t as o,
  Nat as s,
  O3t as c,
  Opn as l,
  Q0t as u,
  Rht as d,
  Spn as f,
  Xdt as p,
  Z0t as m,
  _gt as h,
  aL as g,
  b_t as _,
  cL as v,
  fdt as y,
  hmn as b,
  jMt as x,
  kmn as S,
  oL as C,
  ogt as w,
  rxt as T,
  s6t as E,
  sL as D,
  slt as O,
  vgt as k,
  vlt as A,
  x_t as j,
  y_t as M,
} from "./app-initial-f094ef01c64d.js";
import { n as N, t as P } from "./chatgpt-subagent-final-response-query-25bc28e7c92f.js";
import { n as F, t as I } from "./conversation-2aefcc6a5de7.js";
import { n as L, t as R } from "./subagent-row-6fc9576ba695.js";
function z(e) {
  let t = (0, U.c)(13),
    { conversationId: n, selectedThreadId: r, title: i } = e,
    a = l(),
    s;
  t[0] !== n || t[1] !== r
    ? ((s = { conversationId: n, selectedThreadId: r }), (t[0] = n), (t[1] = r), (t[2] = s))
    : (s = t[2]);
  let c = o(q, s);
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
      t[6] !== c.isResponseInProgress || t[7] !== c.responseExcerpt || t[8] !== e
        ? ((n = (0, G.jsx)(I, {
            title: e,
            responseExcerpt: c.responseExcerpt,
            isResponseInProgress: c.isResponseInProgress,
            hasUnreadResponse: !1,
          })),
          (t[6] = c.isResponseInProgress),
          (t[7] = c.responseExcerpt),
          (t[8] = e),
          (t[9] = n))
        : (n = t[9]),
      n
    );
  }
  let u;
  return (
    t[10] !== c.subagents || t[11] !== i
      ? ((u = (0, G.jsx)(B, { title: i, subagents: c.subagents })),
        (t[10] = c.subagents),
        (t[11] = i),
        (t[12] = u))
      : (u = t[12]),
    u
  );
}
function B(e) {
  let t = (0, U.c)(6),
    { subagents: n, title: r } = e;
  if (n.length === 0) return null;
  let i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, G.jsx)(y, {})), (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === n ? (a = t[2]) : ((a = (0, W.default)(n, H).slice(0, 3).map(V)), (t[1] = n), (t[2] = a));
  let o;
  return (
    t[3] !== a || t[4] !== r
      ? ((o = (0, G.jsx)(D, { icon: i, subtitle: null, title: r, sections: a })),
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
  return !j(e.status);
}
var U, W, G, K, q;
e(() => {
  ((U = S()),
    (W = t(T(), 1)),
    c(),
    m(),
    f(),
    F(),
    v(),
    C(),
    p(),
    i(),
    L(),
    s(),
    N(),
    h(),
    _(),
    (G = b()),
    (K = {
      waiting: (0, G.jsx)(A, { className: `text-warning` }),
      working: (0, G.jsx)(x, { className: `icon-xs text-info`, as: `span` }),
      done: (0, G.jsx)(O, { className: `text-success` }),
      failed: (0, G.jsx)(r, { className: `text-danger` }),
    }),
    (q = E(g, ({ conversationId: e, selectedThreadId: t }, { scope: n }) => {
      let r = n.get(a, e),
        i = k(n.get(w, e)),
        o = r == null ? null : M(r, { isTurnLive: i }),
        s = o?.subagents.find((e) => e.threadId === t),
        c =
          s?.status === `done`
            ? n.query.getData(P, {
                activationId: o?.activationIdByThreadId.get(s.threadId) ?? `initial:${s.threadId}`,
                conversationId: n.get(d, e),
                isTurnLive: i,
                threadId: s.threadId,
              })
            : null,
        l = s != null && j(s.status),
        f = c ?? s?.statusMessage ?? (l ? s.prompt : null);
      return {
        subagents: o?.subagents ?? null,
        selectedDisplayName: s?.displayName ?? null,
        responseExcerpt: f == null ? null : u(f.slice(0, 1e3)),
        isResponseInProgress: l,
      };
    })));
})();
export { z as RegisteredChatGptSubagentsThumbnail };
//# sourceMappingURL=subagents-b1be4b89518f.js.map
