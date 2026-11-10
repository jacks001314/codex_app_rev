import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as t,
  CJt as n,
  Cpn as r,
  ERt as i,
  GL as a,
  IXt as o,
  LC as s,
  M6t as c,
  N3t as l,
  N6t as u,
  O3t as d,
  ORt as f,
  RC as p,
  SJt as m,
  Spn as h,
  TRt as g,
  WL as _,
  XXt as v,
  hmn as y,
  iR as b,
  kMt as x,
  kmn as S,
  rR as C,
  zXt as w,
} from "./app-initial-f094ef01c64d.js";
import { i as T, t as E } from "./workspace-agent-detail-query-ee964e0a64ba.js";
function D(e) {
  let t = (0, j.c)(5),
    { useLegacyRoute: n } = e,
    r = n !== void 0 && n,
    { agentId: i } = v();
  if (i == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, M.jsx)(w, { to: `/`, replace: !0 })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (r) {
    let e;
    return (
      t[1] === i ? (e = t[2]) : ((e = (0, M.jsx)(k, { agentId: i })), (t[1] = i), (t[2] = e)), e
    );
  }
  let a;
  return (
    t[3] === i ? (a = t[4]) : ((a = (0, M.jsx)(O, { agentId: i })), (t[3] = i), (t[4] = a)), a
  );
}
function O(e) {
  let t = (0, j.c)(13),
    { agentId: n } = e,
    { data: r, error: a, isError: o, isPending: c, refetch: u } = l(T, n);
  if (c) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, M.jsx)(C, { debugName: `WorkspaceAgentDetail`, fillParent: !0 })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (o || r == null) {
    let e;
    t[1] === u
      ? (e = t[2])
      : ((e = () => {
          u();
        }),
        (t[1] = u),
        (t[2] = e));
    let n;
    return (
      t[3] !== a || t[4] !== e
        ? ((n = (0, M.jsx)(A, { error: a, onRetry: e })), (t[3] = a), (t[4] = e), (t[5] = n))
        : (n = t[5]),
      n
    );
  }
  let { agent: d, latest_published_version: f } = r;
  if (f == null) {
    let e;
    t[6] === d.id ? (e = t[7]) : ((e = i(d.id)), (t[6] = d.id), (t[7] = e));
    let n;
    return (
      t[8] === e
        ? (n = t[9])
        : ((n = (0, M.jsx)(w, { to: e, replace: !0 })), (t[8] = e), (t[9] = n)),
      n
    );
  }
  let p;
  return (
    t[10] !== d.id || t[11] !== f
      ? ((p = (0, M.jsx)(s, { routeProjectId: null, workspaceAgent: f }, d.id)),
        (t[10] = d.id),
        (t[11] = f),
        (t[12] = p))
      : (p = t[12]),
    p
  );
}
function k(e) {
  let t = (0, j.c)(7),
    { agentId: n } = e,
    i,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, M.jsx)(r, {
        id: `workspaceAgents.legacyRoute.title`,
        defaultMessage: `Open this agent in ChatGPT`,
        description: `Title shown when a Workspace Agent deep link must open in the existing ChatGPT web experience`,
      })),
      (a = (0, M.jsx)(r, {
        id: `workspaceAgents.legacyRoute.description`,
        defaultMessage: `Workspace Agents isn't available in Codex yet`,
        description: `Description shown when the native Codex Workspace Agents experience is unavailable`,
      })),
      (t[0] = i),
      (t[1] = a))
    : ((i = t[0]), (a = t[1]));
  let o;
  t[2] === n
    ? (o = t[3])
    : ((o = (e) => {
        u({ event: e, href: g(n), initiator: `open_in_browser_bridge` });
      }),
      (t[2] = n),
      (t[3] = o));
  let s;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, M.jsx)(r, {
        id: `workspaceAgents.legacyRoute.open`,
        defaultMessage: `Open in ChatGPT`,
        description: `Button that opens a Workspace Agent in the existing ChatGPT web experience`,
      })),
      (t[4] = s))
    : (s = t[4]);
  let c;
  return (
    t[5] === o
      ? (c = t[6])
      : ((c = (0, M.jsx)(_, {
          layout: `page`,
          title: i,
          description: a,
          actions: (0, M.jsx)(x, { color: `primary`, size: `medium`, onClick: o, children: s }),
        })),
        (t[5] = o),
        (t[6] = c)),
    c
  );
}
function A(e) {
  let t = (0, j.c)(14),
    { error: n, onRetry: i } = e,
    a = n instanceof m ? n.status : null,
    o = a === 404,
    s = a === 401 || a === 403,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, M.jsx)(r, {
        id: `workspaceAgents.detail.error.title`,
        defaultMessage: `Unable to load agent`,
        description: `Title shown when a Workspace Agent cannot be loaded because of a temporary error`,
      })),
      (t[0] = c))
    : (c = t[0]);
  let l = c;
  if (o) {
    let e;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, M.jsx)(r, {
          id: `workspaceAgents.detail.notFound.title`,
          defaultMessage: `Agent not found`,
          description: `Title shown when a Workspace Agent deep link points to an agent that does not exist`,
        })),
        (t[1] = e))
      : (e = t[1]),
      (l = e));
  } else if (s) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, M.jsx)(r, {
          id: `workspaceAgents.detail.forbidden.title`,
          defaultMessage: `You don't have access to this agent`,
          description: `Title shown when the user cannot access a Workspace Agent from a deep link`,
        })),
        (t[2] = e))
      : (e = t[2]),
      (l = e));
  }
  let u;
  t[3] !== s || t[4] !== o
    ? ((u =
        o || s
          ? void 0
          : (0, M.jsx)(r, {
              id: `workspaceAgents.detail.error.description`,
              defaultMessage: `Check your connection and try again`,
              description: `Description shown when a Workspace Agent cannot be loaded because of a temporary error`,
            })),
      (t[3] = s),
      (t[4] = o),
      (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] !== s || t[7] !== o || t[8] !== i
    ? ((d =
        o || s
          ? void 0
          : (0, M.jsx)(x, {
              color: `outline`,
              size: `medium`,
              onClick: i,
              children: (0, M.jsx)(r, {
                id: `workspaceAgents.detail.error.retry`,
                defaultMessage: `Retry`,
                description: `Button label that retries loading a Workspace Agent`,
              }),
            })),
      (t[6] = s),
      (t[7] = o),
      (t[8] = i),
      (t[9] = d))
    : (d = t[9]);
  let f;
  return (
    t[10] !== u || t[11] !== d || t[12] !== l
      ? ((f = (0, M.jsx)(_, { layout: `page`, title: l, description: u, actions: d })),
        (t[10] = u),
        (t[11] = d),
        (t[12] = l),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
var j, M;
e(() => {
  ((j = S()), d(), h(), o(), t(), c(), a(), b(), p(), n(), f(), E(), (M = y()));
})();
export { D as WorkspaceAgentDetailPage };
//# sourceMappingURL=workspace-agent-detail-page-3d0ae7dbd6e0.js.map
