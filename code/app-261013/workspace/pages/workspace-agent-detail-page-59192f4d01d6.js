import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Ext as n,
  IDt as r,
  Pxt as i,
  Vxt as a,
  _xt as o,
  hrt as s,
  jDt as c,
  kxt as l,
  oxt as u,
  t3 as d,
  vrt as f,
  vzt as p,
  xMt as m,
  zxt as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  ACn as g,
  Awr as _,
  Fwr as v,
  GMr as y,
  JPn as b,
  Mwr as x,
  Twr as S,
  XPn as C,
  YMr as w,
  bTn as T,
  bct as E,
  jCn as D,
  tNr as O,
  yTn as k,
  yct as A,
} from "./app-initial-5851df3f6cb1.js";
import { r as j, t as M } from "./document-title-1619f32b59ec.js";
import { i as N, t as P } from "./workspace-agent-detail-query-c8301c5fcc0a.js";
function F(e) {
  let t = (0, z.c)(5),
    { useLegacyRoute: n } = e,
    r = n !== void 0 && n,
    { agentId: i } = l();
  if (i == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, B.jsx)(u, { to: `/`, replace: !0 })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (r) {
    let e;
    return (t[1] === i ? (e = t[2]) : ((e = (0, B.jsx)(L, { agentId: i })), (t[1] = i), (t[2] = e)), e);
  }
  let a;
  return (t[3] === i ? (a = t[4]) : ((a = (0, B.jsx)(I, { agentId: i })), (t[3] = i), (t[4] = a)), a);
}
function I(e) {
  let t = (0, z.c)(21),
    { agentId: n } = e,
    r = a(y),
    i = a(w),
    { data: o, error: c, isError: l, isPending: d, refetch: f } = h(N, n);
  if (d) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, B.jsx)(k, { debugName: `WorkspaceAgentDetail`, fillParent: !0 })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (l || o == null) {
    let e;
    t[1] === f
      ? (e = t[2])
      : ((e = () => {
          f();
        }),
        (t[1] = f),
        (t[2] = e));
    let n;
    return (
      t[3] !== c || t[4] !== e
        ? ((n = (0, B.jsx)(R, { error: c, onRetry: e })), (t[3] = c), (t[4] = e), (t[5] = n))
        : (n = t[5]),
      n
    );
  }
  let { agent: p, latest_published_version: m } = o;
  if (m == null) {
    if ([`hermes_admin`, `hermes_write`, `hermes_read_config`].includes(p.viewer_capability)) {
      let e;
      t[6] === p.id ? (e = t[7]) : ((e = x(p.id)), (t[6] = p.id), (t[7] = e));
      let n;
      return (
        t[8] === e ? (n = t[9]) : ((n = (0, B.jsx)(u, { to: e, replace: !0 })), (t[8] = e), (t[9] = n)),
        n
      );
    }
    let e;
    t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = new s(`Agent not published`, 404)), (t[10] = e))
      : (e = t[10]);
    let n;
    return (
      t[11] === f
        ? (n = t[12])
        : ((n = (0, B.jsx)(R, { error: e, onRetry: () => void f() })), (t[11] = f), (t[12] = n)),
      n
    );
  }
  let g = m.name || p.id,
    _;
  t[13] === g ? (_ = t[14]) : ((_ = (0, B.jsx)(M, { title: g })), (t[13] = g), (t[14] = _));
  let v = `${r}:${i}:${p.id}`,
    b;
  t[15] !== m || t[16] !== v
    ? ((b = (0, B.jsx)(A, { routeProjectId: null, workspaceAgent: m }, v)),
      (t[15] = m),
      (t[16] = v),
      (t[17] = b))
    : (b = t[17]);
  let S;
  return (
    t[18] !== _ || t[19] !== b
      ? ((S = (0, B.jsxs)(B.Fragment, { children: [_, b] })), (t[18] = _), (t[19] = b), (t[20] = S))
      : (S = t[20]),
    S
  );
}
function L(e) {
  let n = (0, z.c)(7),
    { agentId: i } = e,
    a,
    o;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, B.jsx)(r, {
        id: `workspaceAgents.legacyRoute.title`,
        defaultMessage: `Open this agent in ChatGPT`,
        description: `Title shown when a Workspace Agent deep link must open in the existing ChatGPT web experience`,
      })),
      (o = (0, B.jsx)(r, {
        id: `workspaceAgents.legacyRoute.description`,
        defaultMessage: `Workspace Agents isn't available in Codex yet`,
        description: `Description shown when the native Codex Workspace Agents experience is unavailable`,
      })),
      (n[0] = a),
      (n[1] = o))
    : ((a = n[0]), (o = n[1]));
  let s;
  n[2] === i
    ? (s = n[3])
    : ((s = (e) => {
        C({ event: e, href: _(i), initiator: `open_in_browser_bridge` });
      }),
      (n[2] = i),
      (n[3] = s));
  let c;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, B.jsx)(r, {
        id: `workspaceAgents.legacyRoute.open`,
        defaultMessage: `Open in ChatGPT`,
        description: `Button that opens a Workspace Agent in the existing ChatGPT web experience`,
      })),
      (n[4] = c))
    : (c = n[4]);
  let l;
  return (
    n[5] === s
      ? (l = n[6])
      : ((l = (0, B.jsx)(g, {
          layout: `page`,
          title: a,
          description: o,
          actions: (0, B.jsx)(t, { color: `primary`, size: `medium`, onClick: s, children: c }),
        })),
        (n[5] = s),
        (n[6] = l)),
    l
  );
}
function R(e) {
  let i = (0, z.c)(15),
    { error: a, onRetry: o } = e,
    c = n(),
    l = a instanceof s ? a.status : null,
    u = l === 404,
    d = l === 401 || l === 403,
    f;
  i[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, B.jsx)(r, {
        id: `workspaceAgents.detail.error.title`,
        defaultMessage: `Unable to load agent`,
        description: `Title shown when a Workspace Agent cannot be loaded because of a temporary error`,
      })),
      (i[0] = f))
    : (f = i[0]);
  let p = f;
  if (u) {
    let e;
    (i[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, B.jsx)(r, {
          id: `workspaceAgents.detail.notFound.title`,
          defaultMessage: `Agent not found`,
          description: `Title shown when a Workspace Agent deep link points to an agent that does not exist`,
        })),
        (i[1] = e))
      : (e = i[1]),
      (p = e));
  } else if (d) {
    let e;
    (i[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, B.jsx)(r, {
          id: `workspaceAgents.detail.forbidden.title`,
          defaultMessage: `You don't have access to this agent`,
          description: `Title shown when the user cannot access a Workspace Agent from a deep link`,
        })),
        (i[2] = e))
      : (e = i[2]),
      (p = e));
  }
  let m;
  i[3] !== d || i[4] !== u
    ? ((m =
        u || d
          ? void 0
          : (0, B.jsx)(r, {
              id: `workspaceAgents.detail.error.description`,
              defaultMessage: `Check your connection and try again`,
              description: `Description shown when a Workspace Agent cannot be loaded because of a temporary error`,
            })),
      (i[3] = d),
      (i[4] = u),
      (i[5] = m))
    : (m = i[5]);
  let h;
  i[6] !== d || i[7] !== u || i[8] !== c || i[9] !== o
    ? ((h =
        u || d
          ? (0, B.jsx)(t, {
              color: `outline`,
              size: `medium`,
              onClick: () => void c(S),
              children: (0, B.jsx)(r, {
                id: `workspaceAgents.detail.error.back`,
                defaultMessage: `Back to agents`,
                description: `Button that returns to the agent directory when an agent is missing or access is denied`,
              }),
            })
          : (0, B.jsx)(t, {
              color: `outline`,
              size: `medium`,
              onClick: o,
              children: (0, B.jsx)(r, {
                id: `workspaceAgents.detail.error.retry`,
                defaultMessage: `Retry`,
                description: `Button label that retries loading a Workspace Agent`,
              }),
            })),
      (i[6] = d),
      (i[7] = u),
      (i[8] = c),
      (i[9] = o),
      (i[10] = h))
    : (h = i[10]);
  let _;
  return (
    i[11] !== m || i[12] !== h || i[13] !== p
      ? ((_ = (0, B.jsx)(g, { layout: `page`, title: p, description: m, actions: h })),
        (i[11] = m),
        (i[12] = h),
        (i[13] = p),
        (i[14] = _))
      : (_ = i[14]),
    _
  );
}
var z, B;
function V() {
  return (V = e(() => {
    ((z = p()), i(), c(), o(), O(), d(), b(), D(), j(), T(), E(), f(), v(), P(), (B = m()));
  }))();
}
V();
export { F as WorkspaceAgentDetailPage };
//# sourceMappingURL=workspace-agent-detail-page-59192f4d01d6.js.map
