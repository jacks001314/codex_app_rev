import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  KSt as t,
  LNt as n,
  NSt as r,
  PBt as i,
  Pit as a,
  SSt as o,
  USt as s,
  XOt as c,
  Y3 as l,
  Z3 as u,
  ZSt as d,
  iCt as f,
  jit as p,
  nCt as m,
  tkt as h,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  HOn as g,
  JOr as _,
  KOr as v,
  SRn as y,
  Tlt as b,
  UOn as x,
  VOr as S,
  XEn as C,
  YEn as w,
  ZOr as T,
  bLr as E,
  bRn as D,
  wLr as O,
  wlt as k,
  zRr as A,
} from "./app-initial-ad16eaadf81f.js";
import { r as j, t as M } from "./document-title-149d008a9f01.js";
import { i as N, t as P } from "./workspace-agent-detail-query-e90126e3ca29.js";
function F(e) {
  let n = (0, z.c)(5),
    { useLegacyRoute: r } = e,
    i = r !== void 0 && r,
    { agentId: a } = t();
  if (a == null) {
    let e;
    return (
      n[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, B.jsx)(o, { to: `/`, replace: !0 })), (n[0] = e))
        : (e = n[0]),
      e
    );
  }
  if (i) {
    let e;
    return (n[1] === a ? (e = n[2]) : ((e = (0, B.jsx)(L, { agentId: a })), (n[1] = a), (n[2] = e)), e);
  }
  let s;
  return (n[3] === a ? (s = n[4]) : ((s = (0, B.jsx)(I, { agentId: a })), (n[3] = a), (n[4] = s)), s);
}
function I(e) {
  let t = (0, z.c)(21),
    { agentId: n } = e,
    r = f(A),
    i = f(E),
    { data: a, error: s, isError: c, isPending: l, refetch: u } = m(N, n);
  if (l) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, B.jsx)(g, { debugName: `WorkspaceAgentDetail`, fillParent: !0 })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (c || a == null) {
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
      t[3] !== s || t[4] !== e
        ? ((n = (0, B.jsx)(R, { error: s, onRetry: e })), (t[3] = s), (t[4] = e), (t[5] = n))
        : (n = t[5]),
      n
    );
  }
  let { agent: d, latest_published_version: h } = a;
  if (h == null) {
    if ([`hermes_admin`, `hermes_write`, `hermes_read_config`].includes(d.viewer_capability)) {
      let e;
      t[6] === d.id ? (e = t[7]) : ((e = _(d.id)), (t[6] = d.id), (t[7] = e));
      let n;
      return (
        t[8] === e ? (n = t[9]) : ((n = (0, B.jsx)(o, { to: e, replace: !0 })), (t[8] = e), (t[9] = n)),
        n
      );
    }
    let e;
    t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = new p(`Agent not published`, 404)), (t[10] = e))
      : (e = t[10]);
    let n;
    return (
      t[11] === u
        ? (n = t[12])
        : ((n = (0, B.jsx)(R, { error: e, onRetry: () => void u() })), (t[11] = u), (t[12] = n)),
      n
    );
  }
  let v = h.name || d.id,
    y;
  t[13] === v ? (y = t[14]) : ((y = (0, B.jsx)(M, { title: v })), (t[13] = v), (t[14] = y));
  let b = `${r}:${i}:${d.id}`,
    x;
  t[15] !== h || t[16] !== b
    ? ((x = (0, B.jsx)(k, { routeProjectId: null, workspaceAgent: h }, b)),
      (t[15] = h),
      (t[16] = b),
      (t[17] = x))
    : (x = t[17]);
  let S;
  return (
    t[18] !== y || t[19] !== x
      ? ((S = (0, B.jsxs)(B.Fragment, { children: [y, x] })), (t[18] = y), (t[19] = x), (t[20] = S))
      : (S = t[20]),
    S
  );
}
function L(e) {
  let t = (0, z.c)(7),
    { agentId: n } = e,
    r,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, B.jsx)(h, {
        id: `workspaceAgents.legacyRoute.title`,
        defaultMessage: `Open this agent in ChatGPT`,
        description: `Title shown when a Workspace Agent deep link must open in the existing ChatGPT web experience`,
      })),
      (i = (0, B.jsx)(h, {
        id: `workspaceAgents.legacyRoute.description`,
        defaultMessage: `Workspace Agents isn't available in Codex yet`,
        description: `Description shown when the native Codex Workspace Agents experience is unavailable`,
      })),
      (t[0] = r),
      (t[1] = i))
    : ((r = t[0]), (i = t[1]));
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a = (e) => {
        y({ event: e, href: v(n), initiator: `open_in_browser_bridge` });
      }),
      (t[2] = n),
      (t[3] = a));
  let o;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, B.jsx)(h, {
        id: `workspaceAgents.legacyRoute.open`,
        defaultMessage: `Open in ChatGPT`,
        description: `Button that opens a Workspace Agent in the existing ChatGPT web experience`,
      })),
      (t[4] = o))
    : (o = t[4]);
  let s;
  return (
    t[5] === a
      ? (s = t[6])
      : ((s = (0, B.jsx)(w, {
          layout: `page`,
          title: r,
          description: i,
          actions: (0, B.jsx)(l, { color: `primary`, size: `medium`, onClick: a, children: o }),
        })),
        (t[5] = a),
        (t[6] = s)),
    s
  );
}
function R(e) {
  let t = (0, z.c)(15),
    { error: n, onRetry: r } = e,
    i = s(),
    a = n instanceof p ? n.status : null,
    o = a === 404,
    c = a === 401 || a === 403,
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, B.jsx)(h, {
        id: `workspaceAgents.detail.error.title`,
        defaultMessage: `Unable to load agent`,
        description: `Title shown when a Workspace Agent cannot be loaded because of a temporary error`,
      })),
      (t[0] = u))
    : (u = t[0]);
  let d = u;
  if (o) {
    let e;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, B.jsx)(h, {
          id: `workspaceAgents.detail.notFound.title`,
          defaultMessage: `Agent not found`,
          description: `Title shown when a Workspace Agent deep link points to an agent that does not exist`,
        })),
        (t[1] = e))
      : (e = t[1]),
      (d = e));
  } else if (c) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, B.jsx)(h, {
          id: `workspaceAgents.detail.forbidden.title`,
          defaultMessage: `You don't have access to this agent`,
          description: `Title shown when the user cannot access a Workspace Agent from a deep link`,
        })),
        (t[2] = e))
      : (e = t[2]),
      (d = e));
  }
  let f;
  t[3] !== c || t[4] !== o
    ? ((f =
        o || c
          ? void 0
          : (0, B.jsx)(h, {
              id: `workspaceAgents.detail.error.description`,
              defaultMessage: `Check your connection and try again`,
              description: `Description shown when a Workspace Agent cannot be loaded because of a temporary error`,
            })),
      (t[3] = c),
      (t[4] = o),
      (t[5] = f))
    : (f = t[5]);
  let m;
  t[6] !== c || t[7] !== o || t[8] !== i || t[9] !== r
    ? ((m =
        o || c
          ? (0, B.jsx)(l, {
              color: `outline`,
              size: `medium`,
              onClick: () => void i(S),
              children: (0, B.jsx)(h, {
                id: `workspaceAgents.detail.error.back`,
                defaultMessage: `Back to agents`,
                description: `Button that returns to the agent directory when an agent is missing or access is denied`,
              }),
            })
          : (0, B.jsx)(l, {
              color: `outline`,
              size: `medium`,
              onClick: r,
              children: (0, B.jsx)(h, {
                id: `workspaceAgents.detail.error.retry`,
                defaultMessage: `Retry`,
                description: `Button label that retries loading a Workspace Agent`,
              }),
            })),
      (t[6] = c),
      (t[7] = o),
      (t[8] = i),
      (t[9] = r),
      (t[10] = m))
    : (m = t[10]);
  let g;
  return (
    t[11] !== f || t[12] !== m || t[13] !== d
      ? ((g = (0, B.jsx)(w, { layout: `page`, title: d, description: f, actions: m })),
        (t[11] = f),
        (t[12] = m),
        (t[13] = d),
        (t[14] = g))
      : (g = t[14]),
    g
  );
}
var z, B;
function V() {
  return (V = e(() => {
    ((z = i()), d(), c(), r(), O(), u(), D(), C(), j(), x(), b(), a(), T(), P(), (B = n()));
  }))();
}
V();
export { F as WorkspaceAgentDetailPage };
//# sourceMappingURL=workspace-agent-detail-page-b50c20ecd500.js.map
