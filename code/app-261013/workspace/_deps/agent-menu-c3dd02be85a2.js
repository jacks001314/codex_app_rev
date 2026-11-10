import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $v as t,
  AG as n,
  AO as r,
  CO as i,
  Cot as a,
  IDt as o,
  Ixt as s,
  Pxt as c,
  Qv as l,
  TJ as u,
  TO as d,
  VDt as f,
  hot as p,
  iO as m,
  jDt as h,
  lot as g,
  rO as _,
  rW as v,
  sJ as y,
  vzt as b,
  wot as x,
  xMt as S,
  yzt as C,
  zxt as w,
} from "./app-shared-bbfeca5e5737.js";
import {
  Awr as T,
  Fwr as E,
  I1 as D,
  L1 as O,
  R1 as k,
  dH as A,
  uH as j,
} from "./app-initial-5851df3f6cb1.js";
import { i as M, t as N } from "./workspace-agent-detail-query-c8301c5fcc0a.js";
import { a as P, i as F, o as I, r as L, t as R } from "./duplicate-agent-7155ddee3afa.js";
function z(e) {
  let t = (0, V.c)(34),
    { agent: r, isPublished: c, onDeleted: u, onPinError: m } = e,
    h = s(a),
    g = f(),
    y = w(k, r.id),
    [b, x] = (0, H.useState)(!1),
    [S, C] = (0, H.useState)(null),
    [E, D] = (0, H.useState)(!1),
    j;
  t[0] === g
    ? (j = t[1])
    : ((j = g.formatMessage({
        id: `workspaceAgents.index.moreActions`,
        defaultMessage: `More actions`,
        description: `Accessible label for an agent row action menu`,
      })),
      (t[0] = g),
      (t[1] = j));
  let M;
  t[2] === j ? (M = t[3]) : ((M = (0, U.jsx)(l, { label: j })), (t[2] = j), (t[3] = M));
  let N;
  t[4] !== r.icon ||
  t[5] !== r.id ||
  t[6] !== r.name ||
  t[7] !== g ||
  t[8] !== y ||
  t[9] !== c ||
  t[10] !== m ||
  t[11] !== E ||
  t[12] !== h
    ? ((N = c
        ? (0, U.jsxs)(U.Fragment, {
            children: [
              (0, U.jsx)(d.Item, {
                LeftIcon: v,
                onSelect: () => {
                  _(T(r.id)).then((e) => {
                    e && A(h);
                  });
                },
                children: (0, U.jsx)(o, {
                  id: `workspaceAgents.index.copyLink`,
                  defaultMessage: `Copy link`,
                  description: `Action that copies an agent link`,
                }),
              }),
              (0, U.jsx)(d.Item, {
                disabled: y == null || E,
                LeftIcon: n,
                onSelect: () => {
                  y == null ||
                    E ||
                    (m?.(!1),
                    D(!0),
                    O(h, { id: r.id, name: r.name, icon: r.icon }, !y)
                      .catch(() => {
                        m == null
                          ? h
                              .get(p)
                              .danger(
                                g.formatMessage({
                                  id: `workspaceAgents.index.pinFailed`,
                                  defaultMessage: `Couldn’t update agent pin`,
                                  description: `Error message when an agent pin cannot be updated`,
                                }),
                                { errorAnalytics: { toastId: `workspaceAgents.index.pinFailed` } },
                              )
                          : m(!0);
                      })
                      .finally(() => D(!1)));
                },
                children: y
                  ? (0, U.jsx)(o, {
                      id: `workspaceAgents.index.unpin`,
                      defaultMessage: `Unpin from sidebar`,
                      description: `Action that removes an agent from the sidebar`,
                    })
                  : (0, U.jsx)(o, {
                      id: `workspaceAgents.index.pin`,
                      defaultMessage: `Pin to sidebar`,
                      description: `Action that pins an agent to the sidebar`,
                    }),
              }),
            ],
          })
        : null),
      (t[4] = r.icon),
      (t[5] = r.id),
      (t[6] = r.name),
      (t[7] = g),
      (t[8] = y),
      (t[9] = c),
      (t[10] = m),
      (t[11] = E),
      (t[12] = h),
      (t[13] = N))
    : (N = t[13]);
  let F;
  t[14] !== r.id || t[15] !== b
    ? ((F = b
        ? (0, U.jsxs)(U.Fragment, {
            children: [
              (0, U.jsx)(L, { agentId: r.id, onSelect: () => C(`duplicate`) }),
              (0, U.jsx)(B, { agentId: r.id, onSelect: () => C(`delete`) }),
            ],
          })
        : null),
      (t[14] = r.id),
      (t[15] = b),
      (t[16] = F))
    : (F = t[16]);
  let I;
  t[17] !== b || t[18] !== M || t[19] !== N || t[20] !== F
    ? ((I = (0, U.jsxs)(i, {
        align: `end`,
        contentWidth: `xs`,
        open: b,
        onOpenChange: x,
        triggerButton: M,
        children: [N, F],
      })),
      (t[17] = b),
      (t[18] = M),
      (t[19] = N),
      (t[20] = F),
      (t[21] = I))
    : (I = t[21]);
  let z;
  t[22] !== r.id || t[23] !== S || t[24] !== u
    ? ((z = S === `delete` ? (0, U.jsx)(P, { agentId: r.id, onClose: () => C(null), onDeleted: u }) : null),
      (t[22] = r.id),
      (t[23] = S),
      (t[24] = u),
      (t[25] = z))
    : (z = t[25]);
  let W;
  t[26] !== r.id || t[27] !== r.name || t[28] !== S
    ? ((W =
        S === `duplicate`
          ? (0, U.jsx)(R, { agentId: r.id, agentName: r.name, onClose: () => C(null) })
          : null),
      (t[26] = r.id),
      (t[27] = r.name),
      (t[28] = S),
      (t[29] = W))
    : (W = t[29]);
  let G;
  return (
    t[30] !== I || t[31] !== z || t[32] !== W
      ? ((G = (0, U.jsxs)(U.Fragment, { children: [I, z, W] })),
        (t[30] = I),
        (t[31] = z),
        (t[32] = W),
        (t[33] = G))
      : (G = t[33]),
    G
  );
}
function B(e) {
  let t = (0, V.c)(4),
    { agentId: n, onSelect: r } = e,
    { data: i, error: a } = w(M, n),
    s;
  return (
    t[0] !== i?.agent || t[1] !== a || t[2] !== r
      ? ((s =
          a == null && i?.agent.viewer_capability === `hermes_admin`
            ? (0, U.jsx)(d.Item, {
                LeftIcon: y,
                tone: `danger`,
                onSelect: r,
                children: (0, U.jsx)(o, {
                  id: `workspaceAgents.management.delete`,
                  defaultMessage: `Delete`,
                  description: `Button that permanently deletes a Workspace Agent`,
                }),
              })
            : null),
        (t[0] = i?.agent),
        (t[1] = a),
        (t[2] = r),
        (t[3] = s))
      : (s = t[3]),
    s
  );
}
var V, H, U;
function W() {
  return (W = e(() => {
    ((V = b()), c(), (H = C()), h(), r(), u(), t(), g(), x(), j(), m(), I(), F(), E(), N(), D(), (U = S()));
  }))();
}
export { W as n, z as t };
//# sourceMappingURL=agent-menu-c3dd02be85a2.js.map
