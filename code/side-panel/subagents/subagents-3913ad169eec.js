import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Cpn as n,
  Jdt as r,
  MMt as i,
  Mwt as a,
  N3t as o,
  O3t as s,
  Out as c,
  Spn as l,
  Xdt as u,
  aL as d,
  cL as f,
  fdt as p,
  hmn as m,
  jMt as h,
  kmn as g,
  oL as _,
  rTt as v,
  rxt as y,
  s6t as b,
  sL as x,
} from "./app-initial-f094ef01c64d.js";
import { n as S, t as C } from "./subagent-row-6fc9576ba695.js";
import { n as w, t as T } from "./registered-bbcd5ae2017a.js";
function E(e) {
  let t = (0, A.c)(10),
    {
      parentConversationId: n,
      hostId: r,
      requestedConversationId: i,
      requestedDisplayName: a,
      title: s,
    } = e,
    c = i == null ? n : null,
    l;
  t[0] !== r || t[1] !== c
    ? ((l = { parentConversationId: c, hostId: r }), (t[0] = r), (t[1] = c), (t[2] = l))
    : (l = t[2]);
  let u = o(P, l);
  if (i != null) {
    let e = a ?? s,
      n;
    return (
      t[3] !== r || t[4] !== i || t[5] !== e
        ? ((n = (0, M.jsx)(T, { conversationId: i, hostId: r, title: e })),
          (t[3] = r),
          (t[4] = i),
          (t[5] = e),
          (t[6] = n))
        : (n = t[6]),
      n
    );
  }
  let d;
  return (
    t[7] !== u || t[8] !== s
      ? ((d = u == null ? null : (0, M.jsx)(D, { title: s, agents: u })),
        (t[7] = u),
        (t[8] = s),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}
function D(e) {
  let t = (0, A.c)(9),
    { agents: r, title: i } = e;
  if (r.length === 0) return null;
  let a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, M.jsx)(p, {})), (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === r.length
    ? (o = t[2])
    : ((o = (0, M.jsx)(n, {
        id: `tabThumbnail.subagents.loadedCount`,
        defaultMessage: `{count, plural, one {# loaded agent} other {# loaded agents}}`,
        description: `Number of subagents already loaded in memory, which may be less than the total`,
        values: { count: r.length },
      })),
      (t[1] = r.length),
      (t[2] = o));
  let s;
  t[3] === r ? (s = t[4]) : ((s = (0, j.default)(r, k).slice(0, 3).map(O)), (t[3] = r), (t[4] = s));
  let c;
  return (
    t[5] !== o || t[6] !== s || t[7] !== i
      ? ((c = (0, M.jsx)(x, { icon: a, title: i, subtitle: o, sections: s })),
        (t[5] = o),
        (t[6] = s),
        (t[7] = i),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
function O(e) {
  return {
    kind: `block`,
    content: (0, M.jsx)(C, {
      avatarSeed: e.id,
      name: e.name || e.agentNickname || e.preview,
      status: (0, M.jsxs)(M.Fragment, {
        children: [
          N[e.status.type],
          (0, M.jsx)(`span`, {
            className: `sr-only`,
            children: (0, M.jsx)(n, {
              id: `tabThumbnail.subagents.runtimeStatus`,
              defaultMessage: `{status, select, active {Working} idle {Idle} systemError {Failed} other {}}`,
              description: `Known runtime status of a cached subagent in a thumbnail`,
              values: { status: e.status.type },
            }),
          }),
        ],
      }),
    }),
  };
}
function k(e) {
  return e.status.type !== `active`;
}
var A, j, M, N, P;
e(() => {
  ((A = g()),
    (j = t(y(), 1)),
    s(),
    l(),
    v(),
    f(),
    _(),
    u(),
    i(),
    S(),
    w(),
    (M = m()),
    (N = {
      active: (0, M.jsx)(h, { className: `icon-xs text-info`, as: `span` }),
      idle: (0, M.jsx)(c, {}),
      systemError: (0, M.jsx)(r, { className: `text-danger` }),
      notLoaded: null,
    }),
    (P = b(d, ({ parentConversationId: e, hostId: t }, { scope: n }) =>
      e == null ? null : (n.get(a, t)?.getSubagentDescendantSnapshot(e).descendantThreads ?? null),
    )));
})();
export { E as RegisteredSubagentsThumbnail };
//# sourceMappingURL=subagents-3913ad169eec.js.map
