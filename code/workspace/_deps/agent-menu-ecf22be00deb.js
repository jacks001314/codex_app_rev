import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  Amn as r,
  Cpn as i,
  Hut as a,
  JG as o,
  KG as s,
  N3t as c,
  O3t as l,
  ORt as u,
  Opn as d,
  Spn as f,
  TRt as p,
  Vdt as m,
  Xdt as h,
  ZG as g,
  a3t as _,
  dut as v,
  hmn as y,
  jXt as b,
  kXt as x,
  kmn as S,
  m1 as C,
  o3t as w,
  p1 as T,
} from "./app-initial-f094ef01c64d.js";
import { Gw as E, Kw as D, Xm as O, Ym as k, Zm as A } from "./app-primary-4c40d73a1074.js";
import { i as j, t as M } from "./workspace-agent-detail-query-ee964e0a64ba.js";
import { a as N, i as P, o as F, r as I, t as L } from "./duplicate-agent-928696f5ef63.js";
function R(e) {
  let t = (0, B.c)(34),
    { agent: r, isPublished: l, onDeleted: u, onPinError: f } = e,
    m = n(_),
    h = d(),
    g = c(A, r.id),
    [y, x] = (0, V.useState)(!1),
    [S, C] = (0, V.useState)(null),
    [w, D] = (0, V.useState)(!1),
    k;
  t[0] === h
    ? (k = t[1])
    : ((k = h.formatMessage({
        id: `workspaceAgents.index.moreActions`,
        defaultMessage: `More actions`,
        description: `Accessible label for an agent row action menu`,
      })),
      (t[0] = h),
      (t[1] = k));
  let j;
  t[2] === k ? (j = t[3]) : ((j = (0, H.jsx)(E, { label: k })), (t[2] = k), (t[3] = j));
  let M;
  t[4] !== r.icon ||
  t[5] !== r.id ||
  t[6] !== r.name ||
  t[7] !== h ||
  t[8] !== g ||
  t[9] !== l ||
  t[10] !== f ||
  t[11] !== w ||
  t[12] !== m
    ? ((M = l
        ? (0, H.jsxs)(H.Fragment, {
            children: [
              (0, H.jsx)(o.Item, {
                LeftIcon: v,
                onSelect: () => {
                  T(p(r.id)).then((e) => {
                    e &&
                      m.get(b).success(
                        h.formatMessage({
                          id: `workspaceAgents.index.linkCopied`,
                          defaultMessage: `Copied link to clipboard`,
                          description: `Success message after an agent link is copied`,
                        }),
                      );
                  });
                },
                children: (0, H.jsx)(i, {
                  id: `workspaceAgents.index.copyLink`,
                  defaultMessage: `Copy link`,
                  description: `Action that copies an agent link`,
                }),
              }),
              (0, H.jsx)(o.Item, {
                disabled: g == null || w,
                LeftIcon: a,
                onSelect: () => {
                  g == null ||
                    w ||
                    (f?.(!1),
                    D(!0),
                    O(m, { id: r.id, name: r.name, icon: r.icon }, !g)
                      .catch(() => {
                        f == null
                          ? m.get(b).danger(
                              h.formatMessage({
                                id: `workspaceAgents.index.pinFailed`,
                                defaultMessage: `Couldn’t update agent pin`,
                                description: `Error message when an agent pin cannot be updated`,
                              }),
                            )
                          : f(!0);
                      })
                      .finally(() => D(!1)));
                },
                children: g
                  ? (0, H.jsx)(i, {
                      id: `workspaceAgents.index.unpin`,
                      defaultMessage: `Unpin from sidebar`,
                      description: `Action that removes an agent from the sidebar`,
                    })
                  : (0, H.jsx)(i, {
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
      (t[7] = h),
      (t[8] = g),
      (t[9] = l),
      (t[10] = f),
      (t[11] = w),
      (t[12] = m),
      (t[13] = M))
    : (M = t[13]);
  let P;
  t[14] !== r.id || t[15] !== y
    ? ((P = y
        ? (0, H.jsxs)(H.Fragment, {
            children: [
              (0, H.jsx)(I, { agentId: r.id, onSelect: () => C(`duplicate`) }),
              (0, H.jsx)(z, { agentId: r.id, onSelect: () => C(`delete`) }),
            ],
          })
        : null),
      (t[14] = r.id),
      (t[15] = y),
      (t[16] = P))
    : (P = t[16]);
  let F;
  t[17] !== y || t[18] !== j || t[19] !== M || t[20] !== P
    ? ((F = (0, H.jsxs)(s, {
        align: `end`,
        contentWidth: `xs`,
        open: y,
        onOpenChange: x,
        triggerButton: j,
        children: [M, P],
      })),
      (t[17] = y),
      (t[18] = j),
      (t[19] = M),
      (t[20] = P),
      (t[21] = F))
    : (F = t[21]);
  let R;
  t[22] !== r.id || t[23] !== S || t[24] !== u
    ? ((R =
        S === `delete`
          ? (0, H.jsx)(N, { agentId: r.id, onClose: () => C(null), onDeleted: u })
          : null),
      (t[22] = r.id),
      (t[23] = S),
      (t[24] = u),
      (t[25] = R))
    : (R = t[25]);
  let U;
  t[26] !== r.id || t[27] !== r.name || t[28] !== S
    ? ((U =
        S === `duplicate`
          ? (0, H.jsx)(L, { agentId: r.id, agentName: r.name, onClose: () => C(null) })
          : null),
      (t[26] = r.id),
      (t[27] = r.name),
      (t[28] = S),
      (t[29] = U))
    : (U = t[29]);
  let W;
  return (
    t[30] !== F || t[31] !== R || t[32] !== U
      ? ((W = (0, H.jsxs)(H.Fragment, { children: [F, R, U] })),
        (t[30] = F),
        (t[31] = R),
        (t[32] = U),
        (t[33] = W))
      : (W = t[33]),
    W
  );
}
function z(e) {
  let t = (0, B.c)(4),
    { agentId: n, onSelect: r } = e,
    { data: a, error: s } = c(j, n),
    l;
  return (
    t[0] !== a?.agent || t[1] !== s || t[2] !== r
      ? ((l =
          s == null && a?.agent.viewer_capability === `hermes_admin`
            ? (0, H.jsx)(o.Item, {
                LeftIcon: m,
                tone: `danger`,
                onSelect: r,
                children: (0, H.jsx)(i, {
                  id: `workspaceAgents.management.delete`,
                  defaultMessage: `Delete`,
                  description: `Button that permanently deletes a Workspace Agent`,
                }),
              })
            : null),
        (t[0] = a?.agent),
        (t[1] = s),
        (t[2] = r),
        (t[3] = l))
      : (l = t[3]),
    l
  );
}
var B,
  V,
  H,
  U = e(() => {
    ((B = S()),
      l(),
      (V = t(r(), 1)),
      f(),
      g(),
      h(),
      D(),
      x(),
      w(),
      C(),
      F(),
      P(),
      u(),
      M(),
      k(),
      (H = y()));
  });
export { U as n, R as t };
//# sourceMappingURL=agent-menu-ecf22be00deb.js.map
