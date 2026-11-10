import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as n,
  LNt as r,
  PBt as i,
  RFt as a,
  SY as o,
  TY as s,
  XOt as c,
  ZSt as l,
  _Nt as u,
  aK as d,
  bCt as f,
  e6 as p,
  mq as m,
  nCt as h,
  tkt as g,
  zFt as _,
} from "./app-shared-2feb3d4c6fcc.js";
import { FBr as v, IBr as y, _B as b, mSn as x, pSn as S, vB as C } from "./app-initial-ad16eaadf81f.js";
import { n as w, t as T } from "./subagent-row-9c9f21e64c05.js";
import { n as E, t as D } from "./registered-aa9913776a42.js";
function O(e) {
  let t = (0, M.c)(10),
    { parentConversationId: n, hostId: r, requestedConversationId: i, requestedDisplayName: a, title: o } = e,
    s = i == null ? n : null,
    c;
  t[0] !== r || t[1] !== s
    ? ((c = { parentConversationId: s, hostId: r }), (t[0] = r), (t[1] = s), (t[2] = c))
    : (c = t[2]);
  let l = h(I, c);
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
    { agents: n, title: r } = e;
  if (n.length === 0) return null;
  let i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = (0, P.jsx)(m, {})), (t[0] = i)) : (i = t[0]);
  let a;
  t[1] === n.length
    ? (a = t[2])
    : ((a = (0, P.jsx)(g, {
        id: `tabThumbnail.subagents.loadedCount`,
        defaultMessage: `{count, plural, one {# loaded agent} other {# loaded agents}}`,
        description: `Number of subagents already loaded in memory, which may be less than the total`,
        values: { count: n.length },
      })),
      (t[1] = n.length),
      (t[2] = a));
  let o;
  t[3] === n ? (o = t[4]) : ((o = (0, N.default)(n, j).slice(0, 4).map(A)), (t[3] = n), (t[4] = o));
  let s;
  return (
    t[5] !== a || t[6] !== o || t[7] !== r
      ? ((s = (0, P.jsx)(b, { icon: i, title: r, subtitle: a, sections: o })),
        (t[5] = a),
        (t[6] = o),
        (t[7] = r),
        (t[8] = s))
      : (s = t[8]),
    s
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
            children: (0, P.jsx)(g, {
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
    ((M = i()),
      (N = t(u(), 1)),
      l(),
      c(),
      y(),
      C(),
      x(),
      s(),
      p(),
      w(),
      a(),
      E(),
      (P = r()),
      (F = {
        active: (0, P.jsx)(n, { className: `icon-xs text-info`, as: `span` }),
        idle: (0, P.jsx)(d, {}),
        systemError: (0, P.jsx)(o, { className: `text-danger` }),
        notLoaded: null,
      }),
      (I = f(
        S,
        (e) => null,
        ({ parentConversationId: e, hostId: t }, { scope: n, set: r }) => {
          if (e == null) return;
          let i = !0,
            a = v(n, t).getSubagentDescendantSnapshot(e);
          return (
            a.then(
              ({ descendantThreads: e }) => {
                i && r(e);
              },
              (e) => {
                _.debug(`Failed to load subagent preview`, { safe: {}, sensitive: { error: e } });
              },
            ),
            () => {
              ((i = !1), a[Symbol.dispose]());
            }
          );
        },
      )));
  }))();
}
L();
export { O as RegisteredSubagentsThumbnail };
//# sourceMappingURL=subagents-e20249af99ec.js.map
