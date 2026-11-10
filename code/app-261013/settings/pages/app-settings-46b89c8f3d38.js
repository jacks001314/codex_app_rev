import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  CO as r,
  HT as i,
  IDt as a,
  JC as o,
  Pxt as s,
  TO as c,
  VT as ee,
  Vxt as l,
  Xot as te,
  Yot as u,
  _O as ne,
  cO as re,
  fO as d,
  i3 as f,
  iw as p,
  jDt as m,
  lO as ie,
  mO as ae,
  oO as oe,
  qC as h,
  r3 as se,
  sO as ce,
  t3 as g,
  tw as _,
  vO as v,
  vzt as y,
  xMt as b,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ek as x,
  GMr as le,
  QP as ue,
  Tk as S,
  YMr as de,
  tF as C,
  tNr as w,
} from "./app-initial-5851df3f6cb1.js";
import { n as T, t as fe } from "./read-error-29adc71a8032.js";
import { i as E, t as pe } from "./workspace-agent-apps-6b85a870e5a0.js";
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
  let n = (0, k.c)(70),
    {
      app: i,
      tool: o,
      disabled: s,
      canManageSharedConnections: u,
      requiresSharedConnection: d,
      onChange: f,
      onConnect: p,
      onClose: m,
    } = e,
    g = l(le),
    v = l(de),
    y = g ?? `signed-out`,
    b;
  n[0] !== i.id || n[1] !== y || n[2] !== v
    ? ((b = pe(y, v, i.id)), (n[0] = i.id), (n[1] = y), (n[2] = v), (n[3] = b))
    : (b = n[3]);
  let { data: x, error: C, refetch: w } = te(b),
    T;
  n[4] !== o.apps_privacy_control || n[5] !== o.user_approvals
    ? ((T = o.apps_privacy_control ?? `custom`),
      o.apps_privacy_control ??
        (o.user_approvals === `never` || o.user_approvals == null
          ? (T = `full_access`)
          : o.user_approvals === `always` && (T = `always_ask`)),
      (n[4] = o.apps_privacy_control),
      (n[5] = o.user_approvals),
      (n[6] = T))
    : (T = n[6]);
  let E;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = [`always_ask`, `ask_before_writes`, `review_important_actions`, `full_access`]), (n[7] = E))
    : (E = n[7]);
  let O = E,
    j = s || i.disabledByAdmin || x == null || C != null,
    M;
  n[8] === m
    ? (M = n[9])
    : ((M = (e) => {
        e || m();
      }),
      (n[8] = m),
      (n[9] = M));
  let N;
  n[10] === m
    ? (N = n[11])
    : ((N = (e) => {
        (e.preventDefault(), m());
      }),
      (n[10] = m),
      (n[11] = N));
  let P;
  n[12] === i.name
    ? (P = n[13])
    : ((P = (0, A.jsx)(re, { title: (0, A.jsx)(ne, { children: i.name }) })), (n[12] = i.name), (n[13] = P));
  let F;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, A.jsx)(S.Header, {
        title: (0, A.jsx)(a, {
          id: `workspaceAgents.appSettings.connection`,
          defaultMessage: `Connection`,
          description: `Heading for an agent app's personal or shared account settings`,
        }),
      })),
      (n[14] = F))
    : (F = n[14]);
  let I;
  n[15] === o.auth.type
    ? (I = n[16])
    : ((I =
        o.auth.type === `LINK`
          ? (0, A.jsx)(a, {
              id: `workspaceAgents.appSettings.shared`,
              defaultMessage: `Shared account`,
              description: `Label for an app account used by everyone who can use the agent`,
            })
          : (0, A.jsx)(a, {
              id: `workspaceAgents.appSettings.personal`,
              defaultMessage: `Each person uses their own account`,
              description: `Label for an app where each person authorizes their own account when using the agent`,
            })),
      (n[15] = o.auth.type),
      (n[16] = I));
  let L = o.auth.type === `LINK` ? o.auth.link.account_label : null,
    R;
  n[17] !== u || n[18] !== j || n[19] !== p
    ? ((R = u
        ? (0, A.jsx)(t, {
            type: `button`,
            color: `outline`,
            size: `toolbar`,
            disabled: j,
            onClick: p,
            children: (0, A.jsx)(a, {
              id: `workspaceAgents.appSettings.chooseAccount`,
              defaultMessage: `Choose shared account`,
              description: `Button that opens explicit selection and consent for an agent's shared app account`,
            }),
          })
        : null),
      (n[17] = u),
      (n[18] = j),
      (n[19] = p),
      (n[20] = R))
    : (R = n[20]);
  let z;
  n[21] !== R || n[22] !== I || n[23] !== L
    ? ((z = (0, A.jsx)(_, { label: I, description: L, control: R })),
      (n[21] = R),
      (n[22] = I),
      (n[23] = L),
      (n[24] = z))
    : (z = n[24]);
  let B;
  n[25] !== i.id || n[26] !== u || n[27] !== j || n[28] !== f || n[29] !== d || n[30] !== o.auth.type
    ? ((B =
        o.auth.type === `LINK` && u && !d
          ? (0, A.jsx)(_, {
              label: (0, A.jsx)(a, {
                id: `workspaceAgents.appSettings.usePersonal`,
                defaultMessage: `Use personal accounts`,
                description: `Option to require each person to use their own account for an agent app`,
              }),
              control: (0, A.jsx)(t, {
                type: `button`,
                color: `ghostSecondary`,
                size: `toolbar`,
                disabled: j,
                onClick: () =>
                  f((e) => ({
                    ...e,
                    auth: {
                      type: `LINK_PLACEHOLDER`,
                      connector_id: i.id,
                      actions: e.allowed_tools,
                      id: `link_placeholder_${i.id}`,
                    },
                  })),
                children: (0, A.jsx)(a, {
                  id: `workspaceAgents.appSettings.switch`,
                  defaultMessage: `Switch`,
                  description: `Button confirming the change from a shared app account to personal accounts`,
                }),
              }),
            })
          : null),
      (n[25] = i.id),
      (n[26] = u),
      (n[27] = j),
      (n[28] = f),
      (n[29] = d),
      (n[30] = o.auth.type),
      (n[31] = B))
    : (B = n[31]);
  let V;
  n[32] !== z || n[33] !== B
    ? ((V = (0, A.jsxs)(S, { children: [F, (0, A.jsxs)(h, { children: [z, B] })] })),
      (n[32] = z),
      (n[33] = B),
      (n[34] = V))
    : (V = n[34]);
  let H;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, A.jsx)(S.Header, {
        title: (0, A.jsx)(a, {
          id: `workspaceAgents.appSettings.permissions`,
          defaultMessage: `Actions and approvals`,
          description: `Heading for the actions an agent can use and the approval policy for them`,
        }),
      })),
      (n[35] = H))
    : (H = n[35]);
  let U, W;
  n[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, A.jsx)(a, {
        id: `workspaceAgents.appSettings.approval`,
        defaultMessage: `Approval policy`,
        description: `Label for choosing when an agent must request approval for app actions`,
      })),
      (W = (0, A.jsx)(a, {
        id: `workspaceAgents.appSettings.workspacePolicy`,
        defaultMessage: `Your workspace may require stricter approvals`,
        description: `Explains that workspace policy can require more approvals than the policy chosen for an agent app`,
      })),
      (n[36] = U),
      (n[37] = W))
    : ((U = n[36]), (W = n[37]));
  let G;
  n[38] !== x || n[39] !== j || n[40] !== f || n[41] !== T
    ? ((G = (0, A.jsx)(_, {
        label: U,
        description: W,
        control: (e) =>
          (0, A.jsx)(r, {
            align: `end`,
            contentWidth: `menuWide`,
            disabled: j,
            triggerButton: (0, A.jsx)(ue, { ...e, disabled: j, children: (0, A.jsx)(_e, { policy: T }) }),
            children: (0, A.jsx)(c.RadioGroup, {
              value: T,
              onValueChange: (e) => {
                let t = O.find((t) => t === e);
                t != null && x != null && f((e) => D(e, x, t));
              },
              children: O.map(ge),
            }),
          }),
      })),
      (n[38] = x),
      (n[39] = j),
      (n[40] = f),
      (n[41] = T),
      (n[42] = G))
    : (G = n[42]);
  let K;
  n[43] !== x || n[44] !== C
    ? ((K = x == null && C == null ? (0, A.jsx)(se, {}) : null), (n[43] = x), (n[44] = C), (n[45] = K))
    : (K = n[45]);
  let q;
  n[46] !== C || n[47] !== w
    ? ((q = C == null ? null : (0, A.jsx)(fe, { onRetry: () => void w() })),
      (n[46] = C),
      (n[47] = w),
      (n[48] = q))
    : (q = n[48]);
  let J;
  n[49] !== x || n[50] !== j || n[51] !== f || n[52] !== o.allowed_tools
    ? ((J = x
        ?.filter(he)
        .map((e) =>
          (0, A.jsx)(
            _,
            {
              label: e.title ?? e.name,
              description: e.description,
              control: (t) =>
                (0, A.jsx)(`div`, {
                  className: `relative`,
                  children: (0, A.jsx)(ee, {
                    ...t,
                    checked: o.allowed_tools.includes(e.name),
                    disabled: j || !e.isEnabled,
                    onCheckedChange: (t) => f((n) => me(n, x, e.name, t)),
                  }),
                }),
            },
            e.name,
          ),
        )),
      (n[49] = x),
      (n[50] = j),
      (n[51] = f),
      (n[52] = o.allowed_tools),
      (n[53] = J))
    : (J = n[53]);
  let Y;
  n[54] !== G || n[55] !== K || n[56] !== q || n[57] !== J
    ? ((Y = (0, A.jsxs)(S, { children: [H, (0, A.jsxs)(h, { children: [G, K, q, J] })] })),
      (n[54] = G),
      (n[55] = K),
      (n[56] = q),
      (n[57] = J),
      (n[58] = Y))
    : (Y = n[58]);
  let X;
  n[59] !== V || n[60] !== Y
    ? ((X = (0, A.jsxs)(ie, { children: [V, Y] })), (n[59] = V), (n[60] = Y), (n[61] = X))
    : (X = n[61]);
  let Z;
  n[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (0, A.jsx)(ce, {
        children: (0, A.jsx)(t, {
          type: `submit`,
          color: `primary`,
          children: (0, A.jsx)(a, {
            id: `workspaceAgents.appSettings.done`,
            defaultMessage: `Done`,
            description: `Button closing agent app settings; changes remain in the draft until saved`,
          }),
        }),
      })),
      (n[62] = Z))
    : (Z = n[62]);
  let Q;
  n[63] !== X || n[64] !== N || n[65] !== P
    ? ((Q = (0, A.jsxs)(oe, { as: `form`, size: `viewport`, onSubmit: N, children: [P, X, Z] })),
      (n[63] = X),
      (n[64] = N),
      (n[65] = P),
      (n[66] = Q))
    : (Q = n[66]);
  let $;
  return (
    n[67] !== Q || n[68] !== M
      ? (($ = (0, A.jsx)(ae, { open: !0, size: `wide`, onOpenChange: M, children: Q })),
        (n[67] = Q),
        (n[68] = M),
        (n[69] = $))
      : ($ = n[69]),
    $
  );
}
function he(e) {
  return !e.isPrivate;
}
function ge(e) {
  return (0, A.jsx)(c.RadioItem, { value: e, children: (0, A.jsx)(_e, { policy: e }) }, e);
}
function _e(e) {
  let t = (0, k.c)(5),
    { policy: n } = e;
  switch (n) {
    case `always_ask`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, A.jsx)(a, {
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
          ? ((e = (0, A.jsx)(a, {
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
          ? ((e = (0, A.jsx)(a, {
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
          ? ((e = (0, A.jsx)(a, {
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
          ? ((e = (0, A.jsx)(a, {
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
    ((k = y()), u(), s(), m(), E(), w(), g(), i(), v(), d(), n(), f(), x(), p(), C(), o(), T(), (A = b()));
  }))();
}
j();
export { O as WorkspaceAgentAppSettings };
//# sourceMappingURL=app-settings-46b89c8f3d38.js.map
