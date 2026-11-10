import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as n,
  KH as r,
  LNt as i,
  PBt as a,
  SCt as o,
  SY as s,
  TY as c,
  XOt as l,
  ZSt as u,
  _Nt as d,
  e6 as f,
  mq as p,
  nCt as m,
  okt as h,
  tkt as g,
  vH as _,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B1n as v,
  VPn as y,
  _B as b,
  cGn as x,
  fJn as S,
  hJn as C,
  m0n as w,
  mDr as T,
  mJn as E,
  mSn as D,
  pDr as O,
  pSn as k,
  uGn as A,
  vB as j,
  x0n as M,
} from "./app-initial-ad16eaadf81f.js";
import { n as N, t as P } from "./chatgpt-subagent-final-response-query-9861b2118a73.js";
import { n as F, t as I } from "./conversation-d1c3cb59a3b4.js";
import { n as L, t as R } from "./subagent-row-9c9f21e64c05.js";
function z(e) {
  let t = (0, U.c)(13),
    { conversationId: n, selectedThreadId: r, title: i } = e,
    a = h(),
    o;
  t[0] !== n || t[1] !== r
    ? ((o = { conversationId: n, selectedThreadId: r }), (t[0] = n), (t[1] = r), (t[2] = o))
    : (o = t[2]);
  let s = m(q, o);
  if (s.subagents == null) return null;
  if (r != null) {
    let e;
    t[3] !== a || t[4] !== s.selectedDisplayName
      ? ((e =
          s.selectedDisplayName ??
          a.formatMessage({
            id: `chatgptConversations.subagents.nameFallback`,
            defaultMessage: `Subagent`,
            description: `Short fallback name shown in Work subagent activity chips and side panel rows when the backend did not provide a display name.`,
          })),
        (t[3] = a),
        (t[4] = s.selectedDisplayName),
        (t[5] = e))
      : (e = t[5]);
    let n;
    return (
      t[6] !== s.responseExcerpt || t[7] !== s.statusState || t[8] !== e
        ? ((n = (0, G.jsx)(I, { title: e, responseExcerpt: s.responseExcerpt, statusState: s.statusState })),
          (t[6] = s.responseExcerpt),
          (t[7] = s.statusState),
          (t[8] = e),
          (t[9] = n))
        : (n = t[9]),
      n
    );
  }
  let c;
  return (
    t[10] !== s.subagents || t[11] !== i
      ? ((c = (0, G.jsx)(B, { title: i, subagents: s.subagents })),
        (t[10] = s.subagents),
        (t[11] = i),
        (t[12] = c))
      : (c = t[12]),
    c
  );
}
function B(e) {
  let t = (0, U.c)(6),
    { subagents: n, title: r } = e;
  if (n.length === 0) return null;
  let i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = (0, G.jsx)(p, {})), (t[0] = i)) : (i = t[0]);
  let a;
  t[1] === n ? (a = t[2]) : ((a = (0, W.default)(n, H).slice(0, 4).map(V)), (t[1] = n), (t[2] = a));
  let o;
  return (
    t[3] !== a || t[4] !== r
      ? ((o = (0, G.jsx)(b, { icon: i, subtitle: null, title: r, sections: a })),
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
        (0, G.jsx)(g, {
          id: `chatgptConversations.subagents.nameFallback`,
          defaultMessage: `Subagent`,
          description: `Short fallback name shown in Work subagent activity chips and side panel rows when the backend did not provide a display name.`,
        }),
      status: (0, G.jsxs)(G.Fragment, {
        children: [
          K[e.status],
          (0, G.jsx)(`span`, {
            className: `sr-only`,
            children: (0, G.jsx)(g, {
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
  return !C(e.status);
}
var U, W, G, K, q;
function J() {
  return (J = e(() => {
    ((U = a()),
      (W = t(d(), 1)),
      u(),
      O(),
      l(),
      F(),
      j(),
      D(),
      c(),
      f(),
      L(),
      A(),
      N(),
      y(),
      E(),
      (G = i()),
      (K = {
        waiting: (0, G.jsx)(r, { className: `text-warning` }),
        working: (0, G.jsx)(n, { className: `icon-xs text-info`, as: `span` }),
        done: (0, G.jsx)(_, { className: `text-success` }),
        failed: (0, G.jsx)(s, { className: `text-danger` }),
      }),
      (q = o(k, ({ conversationId: e, selectedThreadId: t }, { scope: n }) => {
        let r = n.get(x, e),
          i = M(n.get(w, e)),
          a = r == null ? null : S(r, { isTurnLive: i }),
          o = a?.subagents.find((e) => e.threadId === t),
          s =
            o?.status === `done`
              ? n.query.getData(P, {
                  activationId: a?.activationIdByThreadId.get(o.threadId) ?? `initial:${o.threadId}`,
                  conversationId: n.get(v, e),
                  isTurnLive: i,
                  threadId: o.threadId,
                })
              : null,
          c = o != null && C(o.status),
          l = { type: c ? `loading` : `idle` };
        o?.status === `failed` && (l.type = `error`);
        let u = s ?? o?.statusMessage ?? (c ? o.prompt : null);
        return {
          subagents: a?.subagents ?? null,
          selectedDisplayName: o?.displayName ?? null,
          responseExcerpt: u == null ? null : T(u.slice(0, 1e3)),
          statusState: l,
        };
      })));
  }))();
}
J();
export { z as RegisteredChatGptSubagentsThumbnail };
//# sourceMappingURL=subagents-558f34316cff.js.map
