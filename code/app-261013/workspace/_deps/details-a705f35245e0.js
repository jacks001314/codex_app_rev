import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  Ext as r,
  GE as i,
  HT as a,
  IDt as o,
  Ixt as s,
  JC as c,
  Pxt as l,
  VT as ee,
  WE as te,
  _O as u,
  _xt as d,
  cO as ne,
  fO as f,
  gO as re,
  i3 as p,
  iw as m,
  jDt as h,
  lO as ie,
  mO as ae,
  oO as oe,
  qC as se,
  r3 as ce,
  sO as le,
  t3 as g,
  tw as _,
  vO as v,
  vzt as y,
  wot as b,
  wxt as ue,
  xMt as x,
  yzt as S,
  zxt as C,
} from "./app-shared-bbfeca5e5737.js";
import {
  Fwr as w,
  I1 as T,
  L1 as de,
  Nwr as fe,
  QDr as E,
  R1 as pe,
  XDr as D,
  nT as O,
  rT as me,
} from "./app-initial-5851df3f6cb1.js";
import { i as he, t as k } from "./workspace-agent-detail-query-c8301c5fcc0a.js";
import { n as A, t as ge } from "./workspace-agent-icon-89bcc04ee2a2.js";
import { i as j, n as M, r as _e, t as N } from "./chatgpt_agent_directory-1e577bbd474c.js";
import { n as P, t as ve } from "./personal-apps-bcb923c96925.js";
function F(e) {
  let i = (0, I.c)(96),
    { agentId: a, onClose: c } = e,
    l = s(n),
    d = r(),
    f = ue(),
    p = me(),
    m = (0, L.useId)(),
    { data: h, isPending: g, isError: _, refetch: v } = C(he, a),
    y = C(pe, a),
    [b, x] = (0, L.useState)(!1),
    [S, w] = (0, L.useState)(!1),
    [T, D] = (0, L.useState)(!1),
    O,
    k,
    A,
    j,
    P,
    F;
  if (
    i[0] !== a ||
    i[1] !== h ||
    i[2] !== T ||
    i[3] !== _ ||
    i[4] !== p ||
    i[5] !== g ||
    i[6] !== y ||
    i[7] !== f.pathname ||
    i[8] !== f.search ||
    i[9] !== d ||
    i[10] !== S ||
    i[11] !== b ||
    i[12] !== m ||
    i[13] !== v ||
    i[14] !== l
  ) {
    ((P = new URLSearchParams(f.search)), (F = P.has(`setup`)), (O = h?.latest_published_version));
    let e;
    (i[21] !== O?.name || i[22] !== a
      ? ((e = O?.name.trim() || a), (i[21] = O?.name), (i[22] = a), (i[23] = e))
      : (e = i[23]),
      (A = e));
    let n;
    if (
      (i[24] !== O ||
      i[25] !== a ||
      i[26] !== _ ||
      i[27] !== p ||
      i[28] !== y ||
      i[29] !== A ||
      i[30] !== d ||
      i[31] !== S ||
      i[32] !== b ||
      i[33] !== l
        ? ((n = () => {
            O == null ||
              _ ||
              S ||
              (w(!0),
              D(!1),
              E(l, N, {
                actionType:
                  b && !y
                    ? M.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_ADD_AGENT_CLICK
                    : M.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_VIEW_AGENT_CLICK,
                surface: _e.CHATGPT_AGENT_DIRECTORY_SURFACE_TEAM_DIRECTORY_MODAL,
                agentId: a,
                isPinned: y === !0,
              }),
              (b && !y ? de(l, { id: a, name: A, icon: O.icon }, !0) : Promise.resolve())
                .then(() => {
                  p() && d(fe(a));
                })
                .catch(() => {
                  p() && D(!0);
                })
                .finally(() => {
                  p() && w(!1);
                }));
          }),
          (i[24] = O),
          (i[25] = a),
          (i[26] = _),
          (i[27] = p),
          (i[28] = y),
          (i[29] = A),
          (i[30] = d),
          (i[31] = S),
          (i[32] = b),
          (i[33] = l),
          (i[34] = n))
        : (n = i[34]),
      (j = n),
      g)
    ) {
      let e;
      (i[35] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, R.jsx)(ce, {})), (i[35] = e))
        : (e = i[35]),
        (k = e));
    } else if (_ || O == null) {
      let e;
      i[36] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, R.jsx)(o, {
            id: `workspaceAgents.discovery.unavailable`,
            defaultMessage: `This agent is unavailable`,
            description: `Error when an agent selected from the directory cannot be accessed`,
          })),
          (i[36] = e))
        : (e = i[36]);
      let n;
      i[37] === v ? (n = i[38]) : ((n = () => void v()), (i[37] = v), (i[38] = n));
      let r;
      i[39] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, R.jsx)(o, {
            id: `workspaceAgents.discovery.retry`,
            defaultMessage: `Retry`,
            description: `Button that reloads details for an agent selected from the directory`,
          })),
          (i[39] = r))
        : (r = i[39]);
      let a;
      (i[40] === n
        ? (a = i[41])
        : ((a = (0, R.jsx)(te, {
            type: `error`,
            content: e,
            customCtas: (0, R.jsx)(t, { color: `secondary`, onClick: n, children: r }),
          })),
          (i[40] = n),
          (i[41] = a)),
        (k = a));
    } else {
      let e;
      i[42] === O.icon
        ? (e = i[43])
        : ((e = (0, R.jsx)(ge, { icon: O.icon, size: 48 })), (i[42] = O.icon), (i[43] = e));
      let n;
      i[44] === h
        ? (n = i[45])
        : ((n = h?.agent.creator_name
            ? (0, R.jsx)(`p`, {
                className: `text-sm text-secondary`,
                children: (0, R.jsx)(o, {
                  id: `workspaceAgents.discovery.by`,
                  defaultMessage: `By {creatorName}`,
                  description: `Creator attribution on an agent directory card`,
                  values: { creatorName: h.agent.creator_name },
                }),
              })
            : null),
          (i[44] = h),
          (i[45] = n));
      let r = F
          ? (0, R.jsx)(ve, { agentId: a, returnTo: `${f.pathname}?${P.toString()}` })
          : (0, R.jsxs)(R.Fragment, {
              children: [
                (0, R.jsx)(se, { children: O.starter_prompts.slice(0, 3).map(ye) }),
                (0, R.jsx)(t, {
                  color: `secondary`,
                  onClick: () => {
                    (E(l, N, {
                      actionType: M.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_SETUP_CLICK,
                      surface: _e.CHATGPT_AGENT_DIRECTORY_SURFACE_TEAM_DIRECTORY_MODAL,
                      agentId: a,
                      isPinned: y === !0,
                    }),
                      P.set(`setup`, `1`),
                      d({ pathname: f.pathname, search: P.toString() }));
                  },
                  children: (0, R.jsx)(o, {
                    id: `workspaceAgents.discovery.setup`,
                    defaultMessage: `Set up apps`,
                    description: `Button that checks personal app connections before opening an agent from the directory`,
                  }),
                }),
              ],
            }),
        s;
      i[46] !== y || i[47] !== S || i[48] !== b || i[49] !== m
        ? ((s = y
            ? null
            : (0, R.jsxs)(`div`, {
                className: `relative flex items-center gap-2`,
                children: [
                  (0, R.jsx)(ee, { id: m, checked: b, disabled: S, onCheckedChange: x }),
                  (0, R.jsx)(`label`, {
                    htmlFor: m,
                    className: `text-sm text-default`,
                    children: (0, R.jsx)(o, {
                      id: `workspaceAgents.discovery.pin`,
                      defaultMessage: `Pin agent to sidebar`,
                      description: `Checkbox that pins an agent when it is opened from the directory`,
                    }),
                  }),
                ],
              })),
          (i[46] = y),
          (i[47] = S),
          (i[48] = b),
          (i[49] = m),
          (i[50] = s))
        : (s = i[50]);
      let c;
      i[51] === T
        ? (c = i[52])
        : ((c = T
            ? (0, R.jsx)(te, {
                type: `error`,
                content: (0, R.jsx)(o, {
                  id: `workspaceAgents.discovery.pinError`,
                  defaultMessage: `Unable to pin this agent. Try again`,
                  description: `Error when an agent could not be pinned before opening it from the directory`,
                }),
              })
            : null),
          (i[51] = T),
          (i[52] = c));
      let u;
      (i[53] !== e || i[54] !== n || i[55] !== r || i[56] !== s || i[57] !== c
        ? ((u = (0, R.jsxs)(R.Fragment, { children: [e, n, r, s, c] })),
          (i[53] = e),
          (i[54] = n),
          (i[55] = r),
          (i[56] = s),
          (i[57] = c),
          (i[58] = u))
        : (u = i[58]),
        (k = u));
    }
    ((i[0] = a),
      (i[1] = h),
      (i[2] = T),
      (i[3] = _),
      (i[4] = p),
      (i[5] = g),
      (i[6] = y),
      (i[7] = f.pathname),
      (i[8] = f.search),
      (i[9] = d),
      (i[10] = S),
      (i[11] = b),
      (i[12] = m),
      (i[13] = v),
      (i[14] = l),
      (i[15] = O),
      (i[16] = k),
      (i[17] = A),
      (i[18] = j),
      (i[19] = P),
      (i[20] = F));
  } else ((O = i[15]), (k = i[16]), (A = i[17]), (j = i[18]), (P = i[19]), (F = i[20]));
  let z;
  i[59] !== c || i[60] !== S
    ? ((z = (e) => {
        !e && !S && c();
      }),
      (i[59] = c),
      (i[60] = S),
      (i[61] = z))
    : (z = i[61]);
  let B;
  i[62] === j
    ? (B = i[63])
    : ((B = (e) => {
        (e.preventDefault(), e.target === e.currentTarget && j());
      }),
      (i[62] = j),
      (i[63] = B));
  let V;
  i[64] !== O || i[65] !== A
    ? ((V =
        O == null
          ? (0, R.jsx)(o, {
              id: `workspaceAgents.discovery.details`,
              defaultMessage: `Agent details`,
              description: `Title while loading details for an agent selected from the directory`,
            })
          : A),
      (i[64] = O),
      (i[65] = A),
      (i[66] = V))
    : (V = i[66]);
  let H;
  i[67] === V ? (H = i[68]) : ((H = (0, R.jsx)(u, { children: V })), (i[67] = V), (i[68] = H));
  let U = O?.description || O?.tagline,
    W;
  i[69] === U ? (W = i[70]) : ((W = (0, R.jsx)(re, { children: U })), (i[69] = U), (i[70] = W));
  let G;
  i[71] !== H || i[72] !== W
    ? ((G = (0, R.jsx)(ne, { title: H, subtitle: W })), (i[71] = H), (i[72] = W), (i[73] = G))
    : (G = i[73]);
  let K;
  i[74] === k ? (K = i[75]) : ((K = (0, R.jsx)(ie, { children: k })), (i[74] = k), (i[75] = K));
  let q;
  i[76] !== f.pathname || i[77] !== d || i[78] !== P || i[79] !== F
    ? ((q = F
        ? (0, R.jsx)(t, {
            color: `secondary`,
            onClick: () => {
              (P.delete(`setup`), d({ pathname: f.pathname, search: P.toString() }, { replace: !0 }));
            },
            children: (0, R.jsx)(o, {
              id: `workspaceAgents.discovery.back`,
              defaultMessage: `Back`,
              description: `Button that returns from required app setup to agent details`,
            }),
          })
        : null),
      (i[76] = f.pathname),
      (i[77] = d),
      (i[78] = P),
      (i[79] = F),
      (i[80] = q))
    : (q = i[80]);
  let J = O == null || _ || S,
    Y;
  i[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, R.jsx)(o, {
        id: `workspaceAgents.discovery.open`,
        defaultMessage: `Open agent`,
        description: `Button that opens the selected agent after optional app setup and pinning`,
      })),
      (i[81] = Y))
    : (Y = i[81]);
  let X;
  i[82] !== S || i[83] !== J
    ? ((X = (0, R.jsx)(t, { color: `primary`, disabled: J, loading: S, type: `submit`, children: Y })),
      (i[82] = S),
      (i[83] = J),
      (i[84] = X))
    : (X = i[84]);
  let Z;
  i[85] !== X || i[86] !== q
    ? ((Z = (0, R.jsxs)(le, { children: [q, X] })), (i[85] = X), (i[86] = q), (i[87] = Z))
    : (Z = i[87]);
  let Q;
  i[88] !== Z || i[89] !== B || i[90] !== G || i[91] !== K
    ? ((Q = (0, R.jsxs)(oe, { as: `form`, size: `scrollable`, onSubmit: B, children: [G, K, Z] })),
      (i[88] = Z),
      (i[89] = B),
      (i[90] = G),
      (i[91] = K),
      (i[92] = Q))
    : (Q = i[92]);
  let $;
  return (
    i[93] !== z || i[94] !== Q
      ? (($ = (0, R.jsx)(ae, { open: !0, size: `medium`, onOpenChange: z, children: Q })),
        (i[93] = z),
        (i[94] = Q),
        (i[95] = $))
      : ($ = i[95]),
    $
  );
}
function ye(e, t) {
  return (0, R.jsx)(
    _,
    { label: e.title, description: e.short_description, control: null },
    `${e.title}:${t}`,
  );
}
var I, L, R;
function z() {
  return (z = e(() => {
    ((I = y()),
      j(),
      l(),
      (L = S()),
      h(),
      d(),
      i(),
      g(),
      a(),
      v(),
      f(),
      p(),
      D(),
      b(),
      m(),
      c(),
      O(),
      P(),
      w(),
      k(),
      A(),
      T(),
      (R = x()));
  }))();
}
z();
export { F as WorkspaceAgentDirectoryDetails };
//# sourceMappingURL=details-a705f35245e0.js.map
