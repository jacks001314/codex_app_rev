import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $W as n,
  $st as r,
  DK as i,
  FBt as a,
  LNt as o,
  NO as s,
  PBt as c,
  PO as l,
  Qst as u,
  TY as d,
  Ty as f,
  Vrt as p,
  XOt as m,
  ZSt as h,
  ck as g,
  nCt as _,
  okt as v,
  qrt as y,
  rk as b,
  sY as x,
  tk as S,
  tkt as C,
  wy as w,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  KOr as T,
  ZOr as E,
  cH as D,
  n2 as O,
  r2 as k,
  sH as A,
  t2 as j,
} from "./app-initial-ad16eaadf81f.js";
import { i as M, t as N } from "./workspace-agent-detail-query-e90126e3ca29.js";
import { a as P, i as F, o as I, r as L, t as R } from "./duplicate-agent-ea1c901d5b25.js";
function z(e) {
  let r = (0, V.c)(34),
    { agent: a, isPublished: o, onDeleted: c, onPinError: l } = e,
    d = t(u),
    f = v(),
    p = _(k, a.id),
    [m, h] = (0, H.useState)(!1),
    [g, x] = (0, H.useState)(null),
    [E, A] = (0, H.useState)(!1),
    j;
  r[0] === f
    ? (j = r[1])
    : ((j = f.formatMessage({
        id: `workspaceAgents.index.moreActions`,
        defaultMessage: `More actions`,
        description: `Accessible label for an agent row action menu`,
      })),
      (r[0] = f),
      (r[1] = j));
  let M;
  r[2] === j ? (M = r[3]) : ((M = (0, U.jsx)(w, { label: j })), (r[2] = j), (r[3] = M));
  let N;
  r[4] !== a.icon ||
  r[5] !== a.id ||
  r[6] !== a.name ||
  r[7] !== f ||
  r[8] !== p ||
  r[9] !== o ||
  r[10] !== l ||
  r[11] !== E ||
  r[12] !== d
    ? ((N = o
        ? (0, U.jsxs)(U.Fragment, {
            children: [
              (0, U.jsx)(b.Item, {
                LeftIcon: n,
                onSelect: () => {
                  s(T(a.id)).then((e) => {
                    e && D(d);
                  });
                },
                children: (0, U.jsx)(C, {
                  id: `workspaceAgents.index.copyLink`,
                  defaultMessage: `Copy link`,
                  description: `Action that copies an agent link`,
                }),
              }),
              (0, U.jsx)(b.Item, {
                disabled: p == null || E,
                LeftIcon: i,
                onSelect: () => {
                  p == null ||
                    E ||
                    (l?.(!1),
                    A(!0),
                    O(d, { id: a.id, name: a.name, icon: a.icon }, !p)
                      .catch(() => {
                        l == null
                          ? d
                              .get(y)
                              .danger(
                                f.formatMessage({
                                  id: `workspaceAgents.index.pinFailed`,
                                  defaultMessage: `Couldn’t update agent pin`,
                                  description: `Error message when an agent pin cannot be updated`,
                                }),
                                { errorAnalytics: { toastId: `workspaceAgents.index.pinFailed` } },
                              )
                          : l(!0);
                      })
                      .finally(() => A(!1)));
                },
                children: p
                  ? (0, U.jsx)(C, {
                      id: `workspaceAgents.index.unpin`,
                      defaultMessage: `Unpin from sidebar`,
                      description: `Action that removes an agent from the sidebar`,
                    })
                  : (0, U.jsx)(C, {
                      id: `workspaceAgents.index.pin`,
                      defaultMessage: `Pin to sidebar`,
                      description: `Action that pins an agent to the sidebar`,
                    }),
              }),
            ],
          })
        : null),
      (r[4] = a.icon),
      (r[5] = a.id),
      (r[6] = a.name),
      (r[7] = f),
      (r[8] = p),
      (r[9] = o),
      (r[10] = l),
      (r[11] = E),
      (r[12] = d),
      (r[13] = N))
    : (N = r[13]);
  let F;
  r[14] !== a.id || r[15] !== m
    ? ((F = m
        ? (0, U.jsxs)(U.Fragment, {
            children: [
              (0, U.jsx)(L, { agentId: a.id, onSelect: () => x(`duplicate`) }),
              (0, U.jsx)(B, { agentId: a.id, onSelect: () => x(`delete`) }),
            ],
          })
        : null),
      (r[14] = a.id),
      (r[15] = m),
      (r[16] = F))
    : (F = r[16]);
  let I;
  r[17] !== m || r[18] !== M || r[19] !== N || r[20] !== F
    ? ((I = (0, U.jsxs)(S, {
        align: `end`,
        contentWidth: `xs`,
        open: m,
        onOpenChange: h,
        triggerButton: M,
        children: [N, F],
      })),
      (r[17] = m),
      (r[18] = M),
      (r[19] = N),
      (r[20] = F),
      (r[21] = I))
    : (I = r[21]);
  let z;
  r[22] !== a.id || r[23] !== g || r[24] !== c
    ? ((z = g === `delete` ? (0, U.jsx)(P, { agentId: a.id, onClose: () => x(null), onDeleted: c }) : null),
      (r[22] = a.id),
      (r[23] = g),
      (r[24] = c),
      (r[25] = z))
    : (z = r[25]);
  let W;
  r[26] !== a.id || r[27] !== a.name || r[28] !== g
    ? ((W =
        g === `duplicate`
          ? (0, U.jsx)(R, { agentId: a.id, agentName: a.name, onClose: () => x(null) })
          : null),
      (r[26] = a.id),
      (r[27] = a.name),
      (r[28] = g),
      (r[29] = W))
    : (W = r[29]);
  let G;
  return (
    r[30] !== I || r[31] !== z || r[32] !== W
      ? ((G = (0, U.jsxs)(U.Fragment, { children: [I, z, W] })),
        (r[30] = I),
        (r[31] = z),
        (r[32] = W),
        (r[33] = G))
      : (G = r[33]),
    G
  );
}
function B(e) {
  let t = (0, V.c)(4),
    { agentId: n, onSelect: r } = e,
    { data: i, error: a } = _(M, n),
    o;
  return (
    t[0] !== i?.agent || t[1] !== a || t[2] !== r
      ? ((o =
          a == null && i?.agent.viewer_capability === `hermes_admin`
            ? (0, U.jsx)(b.Item, {
                LeftIcon: x,
                tone: `danger`,
                onSelect: r,
                children: (0, U.jsx)(C, {
                  id: `workspaceAgents.management.delete`,
                  defaultMessage: `Delete`,
                  description: `Button that permanently deletes a Workspace Agent`,
                }),
              })
            : null),
        (t[0] = i?.agent),
        (t[1] = a),
        (t[2] = r),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
var V, H, U;
function W() {
  return (W = e(() => {
    ((V = c()), h(), (H = a()), m(), g(), d(), f(), p(), r(), A(), l(), I(), F(), E(), N(), j(), (U = o()));
  }))();
}
export { W as n, z as t };
//# sourceMappingURL=agent-menu-6ade040b4377.js.map
