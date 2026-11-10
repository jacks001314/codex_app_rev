import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $C as n,
  HO as r,
  IO as i,
  JO as a,
  LNt as o,
  LO as ee,
  Mst as te,
  OT as ne,
  PBt as s,
  RO as re,
  WO as ie,
  XOt as c,
  Y3 as l,
  Z3 as u,
  ZSt as d,
  ck as f,
  e6 as p,
  ew as m,
  iCt as h,
  jst as g,
  kT as _,
  qO as ae,
  rk as oe,
  sw as v,
  tk as se,
  tkt as y,
  uw as b,
  zO as ce,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  FF as le,
  RF as x,
  bLr as ue,
  cA as S,
  sA as C,
  wLr as w,
  zRr as de,
} from "./app-initial-ad16eaadf81f.js";
import { n as T, t as fe } from "./read-error-b0681ff43794.js";
import { i as E, t as pe } from "./workspace-agent-apps-b1c524ac4449.js";
function D(e, t, n) {
  let r;
  return (
    (r =
      n === `always_ask`
        ? `always`
        : n === `full_access`
          ? `never`
          : {
              always: {
                tool_names: t
                  .filter((t) => e.allowed_tools.includes(t.name) && !t.isReadOnly && t.isConsequential)
                  .map((e) => e.name),
              },
              never: { tool_names: [] },
            }),
    { ...e, apps_privacy_control: n, user_approvals: r }
  );
}
function me(e, t, n, r) {
  let i = r ? [...new Set([...e.allowed_tools, n])] : e.allowed_tools.filter((e) => e !== n),
    a = {
      ...e,
      allowed_tools: i,
      auth: e.auth.type === `LINK_PLACEHOLDER` ? { ...e.auth, actions: i } : e.auth,
    };
  return e.apps_privacy_control == null
    ? typeof e.user_approvals == `object` && e.user_approvals != null
      ? {
          ...a,
          user_approvals: {
            always: {
              tool_names: [
                ...new Set([
                  ...(e.user_approvals.always?.tool_names ?? []).filter((e) => i.includes(e)),
                  ...(r ? [n] : []),
                ]),
              ],
            },
            never: {
              tool_names: (e.user_approvals.never?.tool_names ?? []).filter((e) => i.includes(e) && e !== n),
            },
          },
        }
      : a
    : D(a, t, e.apps_privacy_control);
}
function O(e) {
  let r = (0, k.c)(70),
    {
      app: a,
      tool: o,
      disabled: s,
      canManageSharedConnections: c,
      requiresSharedConnection: u,
      onChange: d,
      onConnect: f,
      onClose: p,
    } = e,
    m = h(de),
    g = h(ue),
    _ = m ?? `signed-out`,
    b;
  r[0] !== a.id || r[1] !== _ || r[2] !== g
    ? ((b = pe(_, g, a.id)), (r[0] = a.id), (r[1] = _), (r[2] = g), (r[3] = b))
    : (b = r[3]);
  let { data: x, error: S, refetch: w } = te(b),
    T;
  r[4] !== o.apps_privacy_control || r[5] !== o.user_approvals
    ? ((T = o.apps_privacy_control ?? `custom`),
      o.apps_privacy_control ??
        (o.user_approvals === `never` || o.user_approvals == null
          ? (T = `full_access`)
          : o.user_approvals === `always` && (T = `always_ask`)),
      (r[4] = o.apps_privacy_control),
      (r[5] = o.user_approvals),
      (r[6] = T))
    : (T = r[6]);
  let E;
  r[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = [`always_ask`, `ask_before_writes`, `review_important_actions`, `full_access`]), (r[7] = E))
    : (E = r[7]);
  let O = E,
    j = s || a.disabledByAdmin || x == null || S != null,
    M;
  r[8] === p
    ? (M = r[9])
    : ((M = (e) => {
        e || p();
      }),
      (r[8] = p),
      (r[9] = M));
  let N;
  r[10] === p
    ? (N = r[11])
    : ((N = (e) => {
        (e.preventDefault(), p());
      }),
      (r[10] = p),
      (r[11] = N));
  let P;
  r[12] === a.name
    ? (P = r[13])
    : ((P = (0, A.jsx)(re, { title: (0, A.jsx)(ae, { children: a.name }) })), (r[12] = a.name), (r[13] = P));
  let F;
  r[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, A.jsx)(C.Header, {
        title: (0, A.jsx)(y, {
          id: `workspaceAgents.appSettings.connection`,
          defaultMessage: `Connection`,
          description: `Heading for an agent app's personal or shared account settings`,
        }),
      })),
      (r[14] = F))
    : (F = r[14]);
  let I;
  r[15] === o.auth.type
    ? (I = r[16])
    : ((I =
        o.auth.type === `LINK`
          ? (0, A.jsx)(y, {
              id: `workspaceAgents.appSettings.shared`,
              defaultMessage: `Shared account`,
              description: `Label for an app account used by everyone who can use the agent`,
            })
          : (0, A.jsx)(y, {
              id: `workspaceAgents.appSettings.personal`,
              defaultMessage: `Each person uses their own account`,
              description: `Label for an app where each person authorizes their own account when using the agent`,
            })),
      (r[15] = o.auth.type),
      (r[16] = I));
  let L = o.auth.type === `LINK` ? o.auth.link.account_label : null,
    R;
  r[17] !== c || r[18] !== j || r[19] !== f
    ? ((R = c
        ? (0, A.jsx)(l, {
            type: `button`,
            color: `outline`,
            size: `toolbar`,
            disabled: j,
            onClick: f,
            children: (0, A.jsx)(y, {
              id: `workspaceAgents.appSettings.chooseAccount`,
              defaultMessage: `Choose shared account`,
              description: `Button that opens explicit selection and consent for an agent's shared app account`,
            }),
          })
        : null),
      (r[17] = c),
      (r[18] = j),
      (r[19] = f),
      (r[20] = R))
    : (R = r[20]);
  let z;
  r[21] !== R || r[22] !== I || r[23] !== L
    ? ((z = (0, A.jsx)(v, { label: I, description: L, control: R })),
      (r[21] = R),
      (r[22] = I),
      (r[23] = L),
      (r[24] = z))
    : (z = r[24]);
  let B;
  r[25] !== a.id || r[26] !== c || r[27] !== j || r[28] !== d || r[29] !== u || r[30] !== o.auth.type
    ? ((B =
        o.auth.type === `LINK` && c && !u
          ? (0, A.jsx)(v, {
              label: (0, A.jsx)(y, {
                id: `workspaceAgents.appSettings.usePersonal`,
                defaultMessage: `Use personal accounts`,
                description: `Option to require each person to use their own account for an agent app`,
              }),
              control: (0, A.jsx)(l, {
                type: `button`,
                color: `ghostSecondary`,
                size: `toolbar`,
                disabled: j,
                onClick: () =>
                  d((e) => ({
                    ...e,
                    auth: {
                      type: `LINK_PLACEHOLDER`,
                      connector_id: a.id,
                      actions: e.allowed_tools,
                      id: `link_placeholder_${a.id}`,
                    },
                  })),
                children: (0, A.jsx)(y, {
                  id: `workspaceAgents.appSettings.switch`,
                  defaultMessage: `Switch`,
                  description: `Button confirming the change from a shared app account to personal accounts`,
                }),
              }),
            })
          : null),
      (r[25] = a.id),
      (r[26] = c),
      (r[27] = j),
      (r[28] = d),
      (r[29] = u),
      (r[30] = o.auth.type),
      (r[31] = B))
    : (B = r[31]);
  let V;
  r[32] !== z || r[33] !== B
    ? ((V = (0, A.jsxs)(C, { children: [F, (0, A.jsxs)(n, { children: [z, B] })] })),
      (r[32] = z),
      (r[33] = B),
      (r[34] = V))
    : (V = r[34]);
  let H;
  r[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, A.jsx)(C.Header, {
        title: (0, A.jsx)(y, {
          id: `workspaceAgents.appSettings.permissions`,
          defaultMessage: `Actions and approvals`,
          description: `Heading for the actions an agent can use and the approval policy for them`,
        }),
      })),
      (r[35] = H))
    : (H = r[35]);
  let U, W;
  r[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, A.jsx)(y, {
        id: `workspaceAgents.appSettings.approval`,
        defaultMessage: `Approval policy`,
        description: `Label for choosing when an agent must request approval for app actions`,
      })),
      (W = (0, A.jsx)(y, {
        id: `workspaceAgents.appSettings.workspacePolicy`,
        defaultMessage: `Your workspace may require stricter approvals`,
        description: `Explains that workspace policy can require more approvals than the policy chosen for an agent app`,
      })),
      (r[36] = U),
      (r[37] = W))
    : ((U = r[36]), (W = r[37]));
  let G;
  r[38] !== x || r[39] !== j || r[40] !== d || r[41] !== T
    ? ((G = (0, A.jsx)(v, {
        label: U,
        description: W,
        control: (e) =>
          (0, A.jsx)(se, {
            align: `end`,
            contentWidth: `menuWide`,
            disabled: j,
            triggerButton: (0, A.jsx)(le, { ...e, disabled: j, children: (0, A.jsx)(_e, { policy: T }) }),
            children: (0, A.jsx)(oe.RadioGroup, {
              value: T,
              onValueChange: (e) => {
                let t = O.find((t) => t === e);
                t != null && x != null && d((e) => D(e, x, t));
              },
              children: O.map(ge),
            }),
          }),
      })),
      (r[38] = x),
      (r[39] = j),
      (r[40] = d),
      (r[41] = T),
      (r[42] = G))
    : (G = r[42]);
  let K;
  r[43] !== x || r[44] !== S
    ? ((K = x == null && S == null ? (0, A.jsx)(t, {}) : null), (r[43] = x), (r[44] = S), (r[45] = K))
    : (K = r[45]);
  let q;
  r[46] !== S || r[47] !== w
    ? ((q = S == null ? null : (0, A.jsx)(fe, { onRetry: () => void w() })),
      (r[46] = S),
      (r[47] = w),
      (r[48] = q))
    : (q = r[48]);
  let J;
  r[49] !== x || r[50] !== j || r[51] !== d || r[52] !== o.allowed_tools
    ? ((J = x
        ?.filter(he)
        .map((e) =>
          (0, A.jsx)(
            v,
            {
              label: e.title ?? e.name,
              description: e.description,
              control: (t) =>
                (0, A.jsx)(`div`, {
                  className: `relative`,
                  children: (0, A.jsx)(ne, {
                    ...t,
                    checked: o.allowed_tools.includes(e.name),
                    disabled: j || !e.isEnabled,
                    onCheckedChange: (t) => d((n) => me(n, x, e.name, t)),
                  }),
                }),
            },
            e.name,
          ),
        )),
      (r[49] = x),
      (r[50] = j),
      (r[51] = d),
      (r[52] = o.allowed_tools),
      (r[53] = J))
    : (J = r[53]);
  let Y;
  r[54] !== G || r[55] !== K || r[56] !== q || r[57] !== J
    ? ((Y = (0, A.jsxs)(C, { children: [H, (0, A.jsxs)(n, { children: [G, K, q, J] })] })),
      (r[54] = G),
      (r[55] = K),
      (r[56] = q),
      (r[57] = J),
      (r[58] = Y))
    : (Y = r[58]);
  let X;
  r[59] !== V || r[60] !== Y
    ? ((X = (0, A.jsxs)(ce, { children: [V, Y] })), (r[59] = V), (r[60] = Y), (r[61] = X))
    : (X = r[61]);
  let Z;
  r[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (0, A.jsx)(ee, {
        children: (0, A.jsx)(l, {
          type: `submit`,
          color: `primary`,
          children: (0, A.jsx)(y, {
            id: `workspaceAgents.appSettings.done`,
            defaultMessage: `Done`,
            description: `Button closing agent app settings; changes remain in the draft until saved`,
          }),
        }),
      })),
      (r[62] = Z))
    : (Z = r[62]);
  let Q;
  r[63] !== X || r[64] !== N || r[65] !== P
    ? ((Q = (0, A.jsxs)(i, { as: `form`, size: `viewport`, onSubmit: N, children: [P, X, Z] })),
      (r[63] = X),
      (r[64] = N),
      (r[65] = P),
      (r[66] = Q))
    : (Q = r[66]);
  let $;
  return (
    r[67] !== Q || r[68] !== M
      ? (($ = (0, A.jsx)(ie, { open: !0, size: `wide`, onOpenChange: M, children: Q })),
        (r[67] = Q),
        (r[68] = M),
        (r[69] = $))
      : ($ = r[69]),
    $
  );
}
function he(e) {
  return !e.isPrivate;
}
function ge(e) {
  return (0, A.jsx)(oe.RadioItem, { value: e, children: (0, A.jsx)(_e, { policy: e }) }, e);
}
function _e(e) {
  let t = (0, k.c)(5),
    { policy: n } = e;
  switch (n) {
    case `always_ask`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, A.jsx)(y, {
              id: `workspaceAgents.appSettings.always`,
              defaultMessage: `Always ask`,
              description: `Approval policy requiring confirmation before every agent app action`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `ask_before_writes`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, A.jsx)(y, {
              id: `workspaceAgents.appSettings.writes`,
              defaultMessage: `Ask before changes`,
              description: `Approval policy requiring confirmation before agent app actions that change data`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `review_important_actions`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, A.jsx)(y, {
              id: `workspaceAgents.appSettings.important`,
              defaultMessage: `Review important actions`,
              description: `Approval policy using the workspace's review of consequential agent app actions`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `full_access`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, A.jsx)(y, {
              id: `workspaceAgents.appSettings.full`,
              defaultMessage: `Full access`,
              description: `Approval policy allowing agent app actions without confirmation, subject to workspace policy`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `custom`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, A.jsx)(y, {
              id: `workspaceAgents.appSettings.custom`,
              defaultMessage: `Custom approvals`,
              description: `Label for an existing per-action approval policy that is preserved until a new policy is selected`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
  }
}
var k, A;
function j() {
  return (j = e(() => {
    ((k = s()), g(), d(), c(), E(), w(), u(), _(), a(), r(), f(), p(), S(), b(), x(), m(), T(), (A = o()));
  }))();
}
j();
export { O as WorkspaceAgentAppSettings };
//# sourceMappingURL=app-settings-c82159a48275.js.map
