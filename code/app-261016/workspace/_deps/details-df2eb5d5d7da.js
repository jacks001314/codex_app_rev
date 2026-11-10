import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $C as n,
  $St as r,
  $st as i,
  FBt as a,
  HO as o,
  IO as s,
  JO as c,
  KO as l,
  LNt as u,
  LO as ee,
  NSt as d,
  OT as te,
  PBt as f,
  Qst as ne,
  RO as re,
  USt as ie,
  VSt as ae,
  WO as oe,
  XOt as p,
  Y3 as m,
  Z3 as h,
  ZSt as g,
  e6 as _,
  ew as v,
  kT as y,
  nCt as b,
  qO as se,
  sw as x,
  tkt as S,
  uw as C,
  vD as ce,
  yD as w,
  zO as le,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  MT as ue,
  YOr as de,
  ZOr as T,
  jT as E,
  n2 as fe,
  r2 as pe,
  t2 as D,
  xMr as O,
  yMr as k,
} from "./app-initial-ad16eaadf81f.js";
import { i as me, t as A } from "./workspace-agent-detail-query-e90126e3ca29.js";
import { n as j, t as he } from "./workspace-agent-icon-cf51c4c0930d.js";
import { i as M, n as N, r as ge, t as _e } from "./chatgpt_agent_directory-1e577bbd474c.js";
import { n as P, t as ve } from "./personal-apps-2ee58ab9049d.js";
function F(e) {
  let i = (0, I.c)(96),
    { agentId: a, onClose: o } = e,
    c = r(ne),
    u = ie(),
    d = ae(),
    f = ue(),
    p = (0, L.useId)(),
    { data: h, isPending: g, isError: _, refetch: v } = b(me, a),
    y = b(pe, a),
    [x, C] = (0, L.useState)(!1),
    [w, T] = (0, L.useState)(!1),
    [E, D] = (0, L.useState)(!1),
    k,
    A,
    j,
    M,
    P,
    F;
  if (
    i[0] !== a ||
    i[1] !== h ||
    i[2] !== E ||
    i[3] !== _ ||
    i[4] !== f ||
    i[5] !== g ||
    i[6] !== y ||
    i[7] !== d.pathname ||
    i[8] !== d.search ||
    i[9] !== u ||
    i[10] !== w ||
    i[11] !== x ||
    i[12] !== p ||
    i[13] !== v ||
    i[14] !== c
  ) {
    ((P = new URLSearchParams(d.search)), (F = P.has(`setup`)), (k = h?.latest_published_version));
    let e;
    (i[21] !== k?.name || i[22] !== a
      ? ((e = k?.name.trim() || a), (i[21] = k?.name), (i[22] = a), (i[23] = e))
      : (e = i[23]),
      (j = e));
    let r;
    if (
      (i[24] !== k ||
      i[25] !== a ||
      i[26] !== _ ||
      i[27] !== f ||
      i[28] !== y ||
      i[29] !== j ||
      i[30] !== u ||
      i[31] !== w ||
      i[32] !== x ||
      i[33] !== c
        ? ((r = () => {
            k == null ||
              _ ||
              w ||
              (T(!0),
              D(!1),
              O(c, _e, {
                actionType:
                  x && !y
                    ? N.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_ADD_AGENT_CLICK
                    : N.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_VIEW_AGENT_CLICK,
                surface: ge.CHATGPT_AGENT_DIRECTORY_SURFACE_TEAM_DIRECTORY_MODAL,
                agentId: a,
                isPinned: y === !0,
              }),
              (x && !y ? fe(c, { id: a, name: j, icon: k.icon }, !0) : Promise.resolve())
                .then(() => {
                  f() && u(de(a));
                })
                .catch(() => {
                  f() && D(!0);
                })
                .finally(() => {
                  f() && T(!1);
                }));
          }),
          (i[24] = k),
          (i[25] = a),
          (i[26] = _),
          (i[27] = f),
          (i[28] = y),
          (i[29] = j),
          (i[30] = u),
          (i[31] = w),
          (i[32] = x),
          (i[33] = c),
          (i[34] = r))
        : (r = i[34]),
      (M = r),
      g)
    ) {
      let e;
      (i[35] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, R.jsx)(t, {})), (i[35] = e))
        : (e = i[35]),
        (A = e));
    } else if (_ || k == null) {
      let e;
      i[36] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, R.jsx)(S, {
            id: `workspaceAgents.discovery.unavailable`,
            defaultMessage: `This agent is unavailable`,
            description: `Error when an agent selected from the directory cannot be accessed`,
          })),
          (i[36] = e))
        : (e = i[36]);
      let t;
      i[37] === v ? (t = i[38]) : ((t = () => void v()), (i[37] = v), (i[38] = t));
      let n;
      i[39] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, R.jsx)(S, {
            id: `workspaceAgents.discovery.retry`,
            defaultMessage: `Retry`,
            description: `Button that reloads details for an agent selected from the directory`,
          })),
          (i[39] = n))
        : (n = i[39]);
      let r;
      (i[40] === t
        ? (r = i[41])
        : ((r = (0, R.jsx)(ce, {
            type: `error`,
            content: e,
            customCtas: (0, R.jsx)(m, { color: `secondary`, onClick: t, children: n }),
          })),
          (i[40] = t),
          (i[41] = r)),
        (A = r));
    } else {
      let e;
      i[42] === k.icon
        ? (e = i[43])
        : ((e = (0, R.jsx)(he, { icon: k.icon, size: 48 })), (i[42] = k.icon), (i[43] = e));
      let t;
      i[44] === h
        ? (t = i[45])
        : ((t = h?.agent.creator_name
            ? (0, R.jsx)(`p`, {
                className: `text-sm text-secondary`,
                children: (0, R.jsx)(S, {
                  id: `workspaceAgents.discovery.by`,
                  defaultMessage: `By {creatorName}`,
                  description: `Creator attribution on an agent directory card`,
                  values: { creatorName: h.agent.creator_name },
                }),
              })
            : null),
          (i[44] = h),
          (i[45] = t));
      let r = F
          ? (0, R.jsx)(ve, { agentId: a, returnTo: `${d.pathname}?${P.toString()}` })
          : (0, R.jsxs)(R.Fragment, {
              children: [
                (0, R.jsx)(n, { children: k.starter_prompts.slice(0, 3).map(ye) }),
                (0, R.jsx)(m, {
                  color: `secondary`,
                  onClick: () => {
                    (O(c, _e, {
                      actionType: N.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_SETUP_CLICK,
                      surface: ge.CHATGPT_AGENT_DIRECTORY_SURFACE_TEAM_DIRECTORY_MODAL,
                      agentId: a,
                      isPinned: y === !0,
                    }),
                      P.set(`setup`, `1`),
                      u({ pathname: d.pathname, search: P.toString() }));
                  },
                  children: (0, R.jsx)(S, {
                    id: `workspaceAgents.discovery.setup`,
                    defaultMessage: `Set up apps`,
                    description: `Button that checks personal app connections before opening an agent from the directory`,
                  }),
                }),
              ],
            }),
        o;
      i[46] !== y || i[47] !== w || i[48] !== x || i[49] !== p
        ? ((o = y
            ? null
            : (0, R.jsxs)(`div`, {
                className: `relative flex items-center gap-2`,
                children: [
                  (0, R.jsx)(te, { id: p, checked: x, disabled: w, onCheckedChange: C }),
                  (0, R.jsx)(`label`, {
                    htmlFor: p,
                    className: `text-sm text-default`,
                    children: (0, R.jsx)(S, {
                      id: `workspaceAgents.discovery.pin`,
                      defaultMessage: `Pin agent to sidebar`,
                      description: `Checkbox that pins an agent when it is opened from the directory`,
                    }),
                  }),
                ],
              })),
          (i[46] = y),
          (i[47] = w),
          (i[48] = x),
          (i[49] = p),
          (i[50] = o))
        : (o = i[50]);
      let s;
      i[51] === E
        ? (s = i[52])
        : ((s = E
            ? (0, R.jsx)(ce, {
                type: `error`,
                content: (0, R.jsx)(S, {
                  id: `workspaceAgents.discovery.pinError`,
                  defaultMessage: `Unable to pin this agent. Try again`,
                  description: `Error when an agent could not be pinned before opening it from the directory`,
                }),
              })
            : null),
          (i[51] = E),
          (i[52] = s));
      let l;
      (i[53] !== e || i[54] !== t || i[55] !== r || i[56] !== o || i[57] !== s
        ? ((l = (0, R.jsxs)(R.Fragment, { children: [e, t, r, o, s] })),
          (i[53] = e),
          (i[54] = t),
          (i[55] = r),
          (i[56] = o),
          (i[57] = s),
          (i[58] = l))
        : (l = i[58]),
        (A = l));
    }
    ((i[0] = a),
      (i[1] = h),
      (i[2] = E),
      (i[3] = _),
      (i[4] = f),
      (i[5] = g),
      (i[6] = y),
      (i[7] = d.pathname),
      (i[8] = d.search),
      (i[9] = u),
      (i[10] = w),
      (i[11] = x),
      (i[12] = p),
      (i[13] = v),
      (i[14] = c),
      (i[15] = k),
      (i[16] = A),
      (i[17] = j),
      (i[18] = M),
      (i[19] = P),
      (i[20] = F));
  } else ((k = i[15]), (A = i[16]), (j = i[17]), (M = i[18]), (P = i[19]), (F = i[20]));
  let z;
  i[59] !== o || i[60] !== w
    ? ((z = (e) => {
        !e && !w && o();
      }),
      (i[59] = o),
      (i[60] = w),
      (i[61] = z))
    : (z = i[61]);
  let B;
  i[62] === M
    ? (B = i[63])
    : ((B = (e) => {
        (e.preventDefault(), e.target === e.currentTarget && M());
      }),
      (i[62] = M),
      (i[63] = B));
  let V;
  i[64] !== k || i[65] !== j
    ? ((V =
        k == null
          ? (0, R.jsx)(S, {
              id: `workspaceAgents.discovery.details`,
              defaultMessage: `Agent details`,
              description: `Title while loading details for an agent selected from the directory`,
            })
          : j),
      (i[64] = k),
      (i[65] = j),
      (i[66] = V))
    : (V = i[66]);
  let H;
  i[67] === V ? (H = i[68]) : ((H = (0, R.jsx)(se, { children: V })), (i[67] = V), (i[68] = H));
  let U = k?.description || k?.tagline,
    W;
  i[69] === U ? (W = i[70]) : ((W = (0, R.jsx)(l, { children: U })), (i[69] = U), (i[70] = W));
  let G;
  i[71] !== H || i[72] !== W
    ? ((G = (0, R.jsx)(re, { title: H, subtitle: W })), (i[71] = H), (i[72] = W), (i[73] = G))
    : (G = i[73]);
  let K;
  i[74] === A ? (K = i[75]) : ((K = (0, R.jsx)(le, { children: A })), (i[74] = A), (i[75] = K));
  let q;
  i[76] !== d.pathname || i[77] !== u || i[78] !== P || i[79] !== F
    ? ((q = F
        ? (0, R.jsx)(m, {
            color: `secondary`,
            onClick: () => {
              (P.delete(`setup`), u({ pathname: d.pathname, search: P.toString() }, { replace: !0 }));
            },
            children: (0, R.jsx)(S, {
              id: `workspaceAgents.discovery.back`,
              defaultMessage: `Back`,
              description: `Button that returns from required app setup to agent details`,
            }),
          })
        : null),
      (i[76] = d.pathname),
      (i[77] = u),
      (i[78] = P),
      (i[79] = F),
      (i[80] = q))
    : (q = i[80]);
  let J = k == null || _ || w,
    Y;
  i[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, R.jsx)(S, {
        id: `workspaceAgents.discovery.open`,
        defaultMessage: `Open agent`,
        description: `Button that opens the selected agent after optional app setup and pinning`,
      })),
      (i[81] = Y))
    : (Y = i[81]);
  let X;
  i[82] !== w || i[83] !== J
    ? ((X = (0, R.jsx)(m, { color: `primary`, disabled: J, loading: w, type: `submit`, children: Y })),
      (i[82] = w),
      (i[83] = J),
      (i[84] = X))
    : (X = i[84]);
  let Z;
  i[85] !== X || i[86] !== q
    ? ((Z = (0, R.jsxs)(ee, { children: [q, X] })), (i[85] = X), (i[86] = q), (i[87] = Z))
    : (Z = i[87]);
  let Q;
  i[88] !== Z || i[89] !== B || i[90] !== G || i[91] !== K
    ? ((Q = (0, R.jsxs)(s, { as: `form`, size: `scrollable`, onSubmit: B, children: [G, K, Z] })),
      (i[88] = Z),
      (i[89] = B),
      (i[90] = G),
      (i[91] = K),
      (i[92] = Q))
    : (Q = i[92]);
  let $;
  return (
    i[93] !== z || i[94] !== Q
      ? (($ = (0, R.jsx)(oe, { open: !0, size: `medium`, onOpenChange: z, children: Q })),
        (i[93] = z),
        (i[94] = Q),
        (i[95] = $))
      : ($ = i[95]),
    $
  );
}
function ye(e, t) {
  return (0, R.jsx)(
    x,
    { label: e.title, description: e.short_description, control: null },
    `${e.title}:${t}`,
  );
}
var I, L, R;
function z() {
  return (z = e(() => {
    ((I = f()),
      M(),
      g(),
      (L = a()),
      p(),
      d(),
      w(),
      h(),
      y(),
      c(),
      o(),
      _(),
      k(),
      i(),
      C(),
      v(),
      E(),
      P(),
      T(),
      A(),
      j(),
      D(),
      (R = u()));
  }))();
}
z();
export { F as WorkspaceAgentDirectoryDetails };
//# sourceMappingURL=details-df2eb5d5d7da.js.map
