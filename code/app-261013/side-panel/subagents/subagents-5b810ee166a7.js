import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CPt as n,
  IDt as r,
  Pxt as i,
  SJ as a,
  SPt as o,
  TJ as s,
  _K as c,
  cG as l,
  i3 as u,
  jDt as d,
  r3 as f,
  rSt as p,
  tMt as m,
  vzt as h,
  xMt as g,
  zxt as _,
} from "./app-shared-bbfeca5e5737.js";
import { XPr as v, YPr as y, _z as b, cyn as x, gz as S, lyn as C } from "./app-initial-5851df3f6cb1.js";
import { n as w, t as T } from "./subagent-row-3ffa8b6ba655.js";
import { n as E, t as D } from "./registered-c7157f91a970.js";
function O(e) {
  let t = (0, M.c)(10),
    { parentConversationId: n, hostId: r, requestedConversationId: i, requestedDisplayName: a, title: o } = e,
    s = i == null ? n : null,
    c;
  t[0] !== r || t[1] !== s
    ? ((c = { parentConversationId: s, hostId: r }), (t[0] = r), (t[1] = s), (t[2] = c))
    : (c = t[2]);
  let l = _(I, c);
  if (i != null) {
    let e = a ?? o,
      n;
    return (
      t[3] !== r || t[4] !== i || t[5] !== e
        ? ((n = (0, P.jsx)(D, { conversationId: i, hostId: r, title: e })),
          (t[3] = r),
          (t[4] = i),
          (t[5] = e),
          (t[6] = n))
        : (n = t[6]),
      n
    );
  }
  let u;
  return (
    t[7] !== l || t[8] !== o
      ? ((u = l == null ? null : (0, P.jsx)(k, { title: o, agents: l })), (t[7] = l), (t[8] = o), (t[9] = u))
      : (u = t[9]),
    u
  );
}
function k(e) {
  let t = (0, M.c)(9),
    { agents: n, title: i } = e;
  if (n.length === 0) return null;
  let a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = (0, P.jsx)(c, {})), (t[0] = a)) : (a = t[0]);
  let o;
  t[1] === n.length
    ? (o = t[2])
    : ((o = (0, P.jsx)(r, {
        id: `tabThumbnail.subagents.loadedCount`,
        defaultMessage: `{count, plural, one {# loaded agent} other {# loaded agents}}`,
        description: `Number of subagents already loaded in memory, which may be less than the total`,
        values: { count: n.length },
      })),
      (t[1] = n.length),
      (t[2] = o));
  let s;
  t[3] === n ? (s = t[4]) : ((s = (0, N.default)(n, j).slice(0, 4).map(A)), (t[3] = n), (t[4] = s));
  let l;
  return (
    t[5] !== o || t[6] !== s || t[7] !== i
      ? ((l = (0, P.jsx)(S, { icon: a, title: i, subtitle: o, sections: s })),
        (t[5] = o),
        (t[6] = s),
        (t[7] = i),
        (t[8] = l))
      : (l = t[8]),
    l
  );
}
function A(e) {
  return {
    kind: `block`,
    content: (0, P.jsx)(T, {
      avatarSeed: e.id,
      name: e.name || e.agentNickname || e.preview,
      status: (0, P.jsxs)(P.Fragment, {
        children: [
          F[e.status.type],
          (0, P.jsx)(`span`, {
            className: `sr-only`,
            children: (0, P.jsx)(r, {
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
function j(e) {
  return e.status.type !== `active`;
}
var M, N, P, F, I;
function L() {
  return (L = e(() => {
    ((M = h()),
      (N = t(m(), 1)),
      i(),
      d(),
      v(),
      b(),
      C(),
      s(),
      u(),
      w(),
      o(),
      E(),
      (P = g()),
      (F = {
        active: (0, P.jsx)(f, { className: `icon-xs text-info`, as: `span` }),
        idle: (0, P.jsx)(l, {}),
        systemError: (0, P.jsx)(a, { className: `text-danger` }),
        notLoaded: null,
      }),
      (I = p(
        x,
        (e) => null,
        ({ parentConversationId: e, hostId: t }, { scope: r, set: i }) => {
          if (e == null) return;
          let a = !0,
            o = y(r, t).getSubagentDescendantSnapshot(e);
          return (
            o.then(
              ({ descendantThreads: e }) => {
                a && i(e);
              },
              (e) => {
                n.debug(`Failed to load subagent preview`, { safe: {}, sensitive: { error: e } });
              },
            ),
            () => {
              ((a = !1), o[Symbol.dispose]());
            }
          );
        },
      )));
  }))();
}
L();
export { O as RegisteredSubagentsThumbnail };
//# sourceMappingURL=subagents-5b810ee166a7.js.map
