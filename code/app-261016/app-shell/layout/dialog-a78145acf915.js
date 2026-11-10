import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  Bst as i,
  FBt as a,
  HO as o,
  IO as s,
  JO as c,
  Jx as l,
  KO as ee,
  LNt as u,
  LO as d,
  NO as te,
  PBt as f,
  PO as p,
  Qst as m,
  RO as h,
  WO as ne,
  XOt as g,
  Y3 as re,
  Yx as _,
  Z3 as v,
  ZSt as y,
  ck as b,
  ew as ie,
  iCt as ae,
  lk as oe,
  mCt as x,
  nB as se,
  nCt as S,
  okt as ce,
  qO as le,
  rB as C,
  rk as ue,
  sw as w,
  tk as de,
  tkt as T,
  uCt as E,
  uk as fe,
  uw as D,
  vD as pe,
  yD as O,
  zO as me,
  zst as k,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  GH as A,
  GNr as j,
  IIr as he,
  KH as M,
  KOr as N,
  LIr as P,
  SBr as ge,
  VRr as F,
  ZOr as I,
  _lt as _e,
  aU as ve,
  glt as ye,
  iRr as L,
  jcn as be,
  lPr as xe,
  oU as R,
  plt as z,
  sBr as Se,
  tLr as Ce,
  tyr as we,
  vLr as Te,
  wLr as B,
  wcn as Ee,
  xBr as De,
  zRr as V,
} from "./app-initial-ad16eaadf81f.js";
import { a as Oe, i as ke, r as Ae } from "./use-workspace-users-2d1e66aa1ddc.js";
import { n as je, t as Me } from "./workspace-team-recipient-suggestions-ab23121c2709.js";
import { n as Ne, t as H } from "./dialog-shell-76e32318bc2b.js";
import { n as Pe, t as Fe } from "./permission-dropdown-27d1e7a127e6.js";
import { n as Ie, t as Le } from "./detail-section-state-45be9ee036ee.js";
import {
  _ as U,
  a as W,
  b as Re,
  i as ze,
  l as G,
  n as K,
  p as Be,
  t as Ve,
} from "./builder-analytics-f4d73421cfb8.js";
import { n as He, t as Ue } from "./read-error-b0681ff43794.js";
import { a as q, l as We } from "./query-28e51b942d45.js";
var Ge, Ke;
function J() {
  return (J = e(() => {
    (y(),
      B(),
      we(),
      De(),
      r(),
      i(),
      Ce(),
      z(),
      (Ge = x(m, (e, { get: t }) => {
        let n = t(V),
          r = t(Te),
          i = t(F).authenticatedUserId;
        return {
          queryKey: [`workspace-agent`, `sharing`, n, r, e],
          enabled: n != null && r != null && i != null && t(_e) === !0,
          queryFn: async ({ signal: t }) => {
            if (n == null || i == null) throw Error(`Missing authenticated account`);
            return L.safeGet(`/hermes/agent/{agent_id}/permissions`, {
              parameters: { path: { agent_id: e } },
              signal: t,
              expectedIdentity: { accountId: n, userId: i },
            });
          },
          staleTime: k.ONE_MINUTE,
          retry: !1,
        };
      })),
      (Ke = E(
        m,
        (e, { scope: t }) => ({
          scope: { id: `workspace-agent-sharing:` + e },
          mutationKey: [`workspace-agent`, `sharing`, e],
          mutationFn: async ({ accountId: n, accountUserId: r, update: i }) => {
            let a = t.get(F).authenticatedUserId,
              o = () => {
                if (
                  a == null ||
                  t.get(F).authenticatedUserId !== a ||
                  t.get(V) !== n ||
                  t.get(Te) !== r ||
                  t.get(_e) !== !0 ||
                  (i.workspace?.store_visible && t.get(ye) !== !0)
                )
                  throw Error(`Agent sharing identity changed`);
              };
            if ((o(), a == null)) throw Error(`Missing authenticated user`);
            let s = await L.safeGet(`/hermes/agent/{agent_id}/builder-view`, {
              parameters: { path: { agent_id: e } },
              expectedIdentity: { accountId: n, userId: a },
              assertRequestCurrent: o,
            });
            o();
            let c = s.agent.viewer_capability === `hermes_admin`;
            if (
              (!c && s.agent.viewer_capability !== `hermes_write`) ||
              s.agent.latest_published_version_id == null
            )
              throw Error(`Agent sharing is unavailable`);
            if (`workspace` in i && (i.workspace == null || !c || i.workspace.workspace_id !== n))
              throw Error(`Workspace sharing is unavailable`);
            if (i.users != null || i.groups != null) {
              let r = await L.safeGet(`/hermes/agent/{agent_id}/permissions`, {
                parameters: { path: { agent_id: e } },
                expectedIdentity: { accountId: n, userId: a },
                assertRequestCurrent: o,
              });
              if ((o(), i.groups != null && !Se(t.get(F).plan))) throw Error(`Group sharing is unavailable`);
              for (let e of [`users`, `groups`])
                for (let [t, n] of Object.entries(i[e] ?? {}))
                  if (
                    (e === `users` && t === s.agent.creator_id) ||
                    (n != null && n !== `hermes_read_config` && n !== `hermes_write`) ||
                    r[e][t]?.capability === `hermes_admin` ||
                    (!c && (n === `hermes_write` || r[e][t]?.capability === `hermes_write`))
                  )
                    throw Error(`Agent access change is unavailable`);
            }
            let l = [`workspace-agent`, `sharing`, n, r, e];
            (await t.queryClient.cancelQueries({ queryKey: l, exact: !0 }), o());
            try {
              let r = await L.safePost(`/hermes/agent/{agent_id}/permissions`, {
                parameters: { path: { agent_id: e } },
                requestBody: i,
                expectedIdentity: { accountId: n, userId: a },
                assertRequestCurrent: o,
              });
              return (o(), t.queryClient.setQueryData(l, r), r);
            } finally {
              for (let r of [
                l,
                [`workspace-agents`, n],
                [`workspace-agents`, `directory`, n],
                [`workspace-agent`, `detail`, n, e],
                [`workspace-agent`, `builder`, n, e],
              ])
                ge(t.queryClient, r);
            }
          },
        }),
        { autoDispose: !0 },
      )));
  }))();
}
function qe(e) {
  let t = (0, Qe.c)(95),
    { accountId: r, accountUserId: i, agentId: a, portalContainer: o } = e,
    c = n(m),
    l = ce(),
    u = ae(F),
    te = ae(_e),
    { data: f } = be(),
    { data: p } = S(he, r),
    { data: g } = S(We, a),
    { data: _ } = S(Ge, a),
    { mutate: v, isPending: y } = S(Ke, a),
    [b, ie] = (0, $e.useState)(``),
    oe;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((oe = []), (t[0] = oe)) : (oe = t[0]);
  let [x, se] = (0, $e.useState)(oe),
    [C, ue] = (0, $e.useState)(`hermes_read_config`),
    [w, de] = (0, $e.useState)(null),
    [E, fe] = (0, $e.useState)(!1),
    D = g?.agent.viewer_capability === `hermes_admin`,
    O =
      te === !0 &&
      !y &&
      u.authenticatedAccountId === r &&
      u.accountUserId === i &&
      g?.agent.latest_published_version_id != null &&
      (D || g.agent.viewer_capability === `hermes_write`),
    k;
  t[1] === u.plan ? (k = t[2]) : ((k = Se(u.plan)), (t[1] = u.plan), (t[2] = k));
  let j = k,
    M;
  t[3] !== f || t[4] !== r || t[5] !== O || t[6] !== j || t[7] !== p?.permissions
    ? ((M =
        O &&
        f?.id === r &&
        (f.account_user_role === `account-owner` ||
          f.account_user_role === `account-admin` ||
          !j ||
          p?.permissions?.includes(`chatgpt.workspace.member.role.view`) === !0)),
      (t[3] = f),
      (t[4] = r),
      (t[5] = O),
      (t[6] = j),
      (t[7] = p?.permissions),
      (t[8] = M))
    : (M = t[8]);
  let N = M,
    { data: P, isFetching: ge, isError: I, refetch: ye } = Oe(N ? b : ``),
    { data: L, isFetching: R, isError: z, refetch: Ce } = ke(N && j ? b : ``),
    { data: we, isLoading: Te, isError: B } = S(je, r, { enabled: N && j }) ?? {},
    Ee = l.formatMessage({
      id: `workspaceAgents.sharing.person`,
      defaultMessage: `Workspace member`,
      description: `Fallback name for a person with access to an agent`,
    }),
    De = l.formatMessage({
      id: `workspaceAgents.sharing.group`,
      defaultMessage: `Workspace group`,
      description: `Fallback name for a group with access to an agent`,
    }),
    V = [
      ...Object.entries(_?.users ?? {})
        .filter((e) => {
          let [t] = e;
          return t !== g?.agent.creator_id;
        })
        .map((e) => {
          let [t, n] = e;
          return {
            id: `users:` + t,
            targetId: t,
            kind: `users`,
            label: n.name?.trim() || n.email?.trim() || Ee,
            secondaryLabel: n.email ?? void 0,
            capability: n.capability,
          };
        }),
      ...(j
        ? Object.entries(_?.groups ?? {}).map((e) => {
            let [t, n] = e;
            return {
              id: `groups:` + t,
              targetId: t,
              kind: `groups`,
              label: n.name?.trim() || De,
              secondaryLabel: De,
              capability: n.capability,
            };
          })
        : []),
    ].filter(Xe),
    Ae = new Set([`users:` + i, `users:` + g?.agent.creator_id, ...V.map(Ye), ...x.map(Je)]),
    Me = [
      ...(I
        ? []
        : (P?.map((e) => ({
            id: `users:` + e.account_user_id,
            colorKey: e.account_user_id,
            targetId: e.account_user_id,
            kind: `users`,
            label: e.name?.trim() || e.email?.trim() || Ee,
            secondaryLabel: e.email ?? void 0,
          })) ?? [])),
      ...(j && !z
        ? (L?.map((e) => ({
            id: `groups:` + e.id,
            targetId: e.id,
            kind: `groups`,
            label: e.name || De,
            secondaryLabel: De,
          })) ?? [])
        : []),
      ...(N && j && !B
        ? (we ?? [])
            .filter(
              (e) =>
                (z || !L?.some((t) => t.id === e.id)) &&
                e.name.toLocaleLowerCase().includes(b.trim().toLocaleLowerCase()),
            )
            .map((e) => ({
              id: `groups:` + e.id,
              targetId: e.id,
              kind: `groups`,
              label: e.name || De,
              secondaryLabel: De,
            }))
        : []),
    ].filter((e) => !Ae.has(e.id)),
    Ne;
  t[9] !== r || t[10] !== i || t[11] !== O || t[12] !== v || t[13] !== D || t[14] !== w
    ? ((Ne = (e, t, n) => {
        if (!O || (!D && t === `hermes_write`)) return;
        let a = {};
        for (let n of e) {
          let e = a[n.kind] ?? {};
          ((a[n.kind] = e), (e[n.targetId] = t));
        }
        v(
          { accountId: r, accountUserId: i, update: a },
          {
            onSuccess: n,
            onError: () => {
              w != null && fe(!0);
            },
          },
        );
      }),
      (t[9] = r),
      (t[10] = i),
      (t[11] = O),
      (t[12] = v),
      (t[13] = D),
      (t[14] = w),
      (t[15] = Ne))
    : (Ne = t[15]);
  let H = Ne,
    Pe = I || (j && (z || B)),
    Ie = ge || (j && (R || Te)),
    Le;
  t[16] !== C || t[17] !== H || t[18] !== D || t[19] !== x
    ? ((Le = (e) => {
        (e.preventDefault(),
          x.length > 0 &&
            H(x, D ? C : `hermes_read_config`, () => {
              (se([]), ie(``));
            }));
      }),
      (t[16] = C),
      (t[17] = H),
      (t[18] = D),
      (t[19] = x),
      (t[20] = Le))
    : (Le = t[20]);
  let U;
  t[21] === l
    ? (U = t[22])
    : ((U = l.formatMessage({
        id: `workspaceAgents.sharing.inviteSearch`,
        defaultMessage: `Search people and groups`,
        description: `Accessible label for finding people or groups to invite to an agent`,
      })),
      (t[21] = l),
      (t[22] = U));
  let W;
  t[23] === l
    ? (W = t[24])
    : ((W = l.formatMessage({
        id: `workspaceAgents.sharing.invitePlaceholder`,
        defaultMessage: `Add people or groups`,
        description: `Placeholder in the agent invitation search field`,
      })),
      (t[23] = l),
      (t[24] = W));
  let Re = !N,
    ze = Ie && Me.length === 0 ? void 0 : Me,
    G;
  t[25] !== l || t[26] !== Ie
    ? ((G = Ie
        ? l.formatMessage({
            id: `workspaceAgents.sharing.searching`,
            defaultMessage: `Searching…`,
            description: `Status while finding people and groups in a workspace`,
          })
        : void 0),
      (t[25] = l),
      (t[26] = Ie),
      (t[27] = G))
    : (G = t[27]);
  let K;
  t[28] === Pe
    ? (K = t[29])
    : ((K = Pe
        ? null
        : (0, Y.jsx)(T, {
            id: `workspaceAgents.sharing.noMatches`,
            defaultMessage: `No matches`,
            description: `Shown when no people or groups match the agent invitation search`,
          })),
      (t[28] = Pe),
      (t[29] = K));
  let Be;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = (e) => {
        (se((t) => [...t, e]), ie(``));
      }),
      (t[30] = Be))
    : (Be = t[30]);
  let Ve;
  t[31] === l
    ? (Ve = t[32])
    : ((Ve = (e) =>
        l.formatMessage(
          {
            id: `workspaceAgents.sharing.removeInvitee`,
            defaultMessage: `Remove {name}`,
            description: `Accessible label for removing a selected person or group from an unsent agent invitation`,
          },
          { name: e.label },
        )),
      (t[31] = l),
      (t[32] = Ve));
  let He;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = (e) => se((t) => t.filter((t) => t.id !== e.id))), (t[33] = He))
    : (He = t[33]);
  let Ue;
  t[34] !== o ||
  t[35] !== b ||
  t[36] !== x ||
  t[37] !== W ||
  t[38] !== Re ||
  t[39] !== ze ||
  t[40] !== G ||
  t[41] !== K ||
  t[42] !== Ve ||
  t[43] !== U
    ? ((Ue = (0, Y.jsx)(A, {
        portalContainer: o,
        ariaLabel: U,
        placeholder: W,
        disabled: Re,
        query: b,
        selectedOptions: x,
        options: ze,
        loadingLabel: G,
        emptyMessage: K,
        onQueryChange: ie,
        onSelectOption: Be,
        getRemoveLabel: Ve,
        onRemoveOption: He,
      })),
      (t[34] = o),
      (t[35] = b),
      (t[36] = x),
      (t[37] = W),
      (t[38] = Re),
      (t[39] = ze),
      (t[40] = G),
      (t[41] = K),
      (t[42] = Ve),
      (t[43] = U),
      (t[44] = Ue))
    : (Ue = t[44]);
  let q;
  t[45] !== N || t[46] !== y
    ? ((q =
        !N && !y
          ? (0, Y.jsx)(pe, {
              type: `normal`,
              content: (0, Y.jsx)(T, {
                id: `workspaceAgents.sharing.searchUnavailable`,
                defaultMessage: `Your workspace permissions don’t allow searching for people or groups`,
                description: `Explains why the agent invitation picker is unavailable`,
              }),
            })
          : null),
      (t[45] = N),
      (t[46] = y),
      (t[47] = q))
    : (q = t[47]);
  let J;
  t[48] !== r ||
  t[49] !== j ||
  t[50] !== z ||
  t[51] !== Ce ||
  t[52] !== ye ||
  t[53] !== c ||
  t[54] !== Pe ||
  t[55] !== B ||
  t[56] !== I
    ? ((J = Pe
        ? (0, Y.jsx)(pe, {
            type: `error`,
            content: (0, Y.jsx)(T, {
              id: `workspaceAgents.sharing.searchFailed`,
              defaultMessage: `Couldn’t load all search results`,
              description: `Error when one or more sharing recipient lookups fail; successful results remain available`,
            }),
            primaryCtaText: (0, Y.jsx)(T, {
              id: `workspaceAgents.sharing.retry`,
              defaultMessage: `Try again`,
              description: `Button that retries searching for people or groups`,
            }),
            onPrimaryCtaClick: () => {
              (I && ye(), j && (z && Ce(), B && c.query.invalidate(xe, r)));
            },
          })
        : null),
      (t[48] = r),
      (t[49] = j),
      (t[50] = z),
      (t[51] = Ce),
      (t[52] = ye),
      (t[53] = c),
      (t[54] = Pe),
      (t[55] = B),
      (t[56] = I),
      (t[57] = J))
    : (J = t[57]);
  let qe;
  t[58] !== C || t[59] !== O || t[60] !== y || t[61] !== D || t[62] !== x.length
    ? ((qe =
        x.length > 0
          ? (0, Y.jsxs)(`div`, {
              className: `flex items-center justify-between gap-3`,
              children: [
                (0, Y.jsx)(Fe, {
                  value: D ? C : `hermes_read_config`,
                  disabled: !O || !D,
                  options: [{ value: `hermes_read_config` }, { value: `hermes_write` }],
                  renderLabel: Ze,
                  onChange: ue,
                }),
                (0, Y.jsx)(re, {
                  type: `submit`,
                  disabled: !O,
                  loading: y,
                  children: (0, Y.jsx)(T, {
                    id: `workspaceAgents.sharing.invite`,
                    defaultMessage: `Invite`,
                    description: `Button that grants the selected people and groups access to an agent`,
                  }),
                }),
              ],
            })
          : null),
      (t[58] = C),
      (t[59] = O),
      (t[60] = y),
      (t[61] = D),
      (t[62] = x.length),
      (t[63] = qe))
    : (qe = t[63]);
  let X;
  t[64] !== Ue || t[65] !== q || t[66] !== J || t[67] !== qe || t[68] !== Le
    ? ((X = (0, Y.jsx)(me, {
        children: (0, Y.jsxs)(`form`, {
          onSubmit: Le,
          className: `flex flex-col gap-3`,
          children: [Ue, q, J, qe],
        }),
      })),
      (t[64] = Ue),
      (t[65] = q),
      (t[66] = J),
      (t[67] = qe),
      (t[68] = Le),
      (t[69] = X))
    : (X = t[69]);
  let et = g?.agent.creator_id,
    Z;
  t[70] !== g?.agent.creator_name || t[71] !== Ee
    ? ((Z = g?.agent.creator_name?.trim() || Ee), (t[70] = g?.agent.creator_name), (t[71] = Ee), (t[72] = Z))
    : (Z = t[72]);
  let tt;
  t[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((tt = (0, Y.jsx)(T, {
        id: `workspaceAgents.sharing.owner`,
        defaultMessage: `Owner`,
        description: `Role label for the owner of an agent`,
      })),
      (t[73] = tt))
    : (tt = t[73]);
  let Q;
  t[74] !== et || t[75] !== Z
    ? ((Q = (0, Y.jsx)(ve, { colorKey: et, size: `compact`, label: Z, trailingContent: tt })),
      (t[74] = et),
      (t[75] = Z),
      (t[76] = Q))
    : (Q = t[76]);
  let $;
  t[77] !== O || t[78] !== H || t[79] !== V || t[80] !== D
    ? (($ = V.map((e) =>
        (0, Y.jsx)(
          ve,
          {
            colorKey: e.kind === `users` ? e.targetId : void 0,
            size: `compact`,
            label: e.label,
            secondaryLabel: e.secondaryLabel,
            trailingContent: (0, Y.jsx)(Fe, {
              value: e.capability,
              disabled: !O || (!D && e.capability === `hermes_write`),
              options: [{ value: `hermes_read_config` }, { value: `hermes_write`, disabled: !D }],
              renderLabel: Ze,
              onChange: (t) => {
                (t === `hermes_read_config` || t === `hermes_write`) && H([e], t);
              },
              removeLabel: (0, Y.jsx)(T, {
                id: `workspaceAgents.sharing.remove`,
                defaultMessage: `Remove access`,
                description: `Action that removes a person or group's explicit access to an agent`,
              }),
              onRemoveAccess: () => {
                (de(e), fe(!1));
              },
            }),
          },
          e.id,
        ),
      )),
      (t[77] = O),
      (t[78] = H),
      (t[79] = V),
      (t[80] = D),
      (t[81] = $))
    : ($ = t[81]);
  let nt;
  t[82] !== Q || t[83] !== $
    ? ((nt = (0, Y.jsxs)(me, { className: `flex flex-col gap-3`, children: [Q, $] })),
      (t[82] = Q),
      (t[83] = $),
      (t[84] = nt))
    : (nt = t[84]);
  let rt;
  t[85] !== O || t[86] !== H || t[87] !== y || t[88] !== w || t[89] !== E
    ? ((rt =
        w == null
          ? null
          : (0, Y.jsx)(ne, {
              open: !0,
              size: `compact`,
              onOpenChange: (e) => {
                !e && !y && de(null);
              },
              children: (0, Y.jsxs)(s, {
                as: `form`,
                onSubmit: (e) => {
                  (e.preventDefault(), H([w], null, () => de(null)));
                },
                children: [
                  (0, Y.jsx)(h, {
                    title: (0, Y.jsx)(le, {
                      children: (0, Y.jsx)(T, {
                        id: `workspaceAgents.sharing.removeTitle`,
                        defaultMessage: `Remove access?`,
                        description: `Title asking to confirm removing explicit agent access`,
                      }),
                    }),
                    subtitle: (0, Y.jsx)(ee, {
                      children: (0, Y.jsx)(T, {
                        id: `workspaceAgents.sharing.removeDescription`,
                        defaultMessage: `Remove direct access for {name}? They may still have access through the workspace or a group`,
                        description: `Confirmation before removing an agent permission. name is the person or group name. Other grants may still provide access.`,
                        values: { name: w.label },
                      }),
                    }),
                  }),
                  E
                    ? (0, Y.jsx)(pe, {
                        type: `error`,
                        content: (0, Y.jsx)(T, {
                          id: `workspaceAgents.sharing.removeFailed`,
                          defaultMessage: `Couldn’t remove access. Try again`,
                          description: `Error shown when removing agent access fails`,
                        }),
                      })
                    : null,
                  (0, Y.jsxs)(d, {
                    children: [
                      (0, Y.jsx)(re, {
                        type: `button`,
                        color: `secondary`,
                        disabled: y,
                        onClick: () => de(null),
                        children: (0, Y.jsx)(T, {
                          id: `workspaceAgents.sharing.cancel`,
                          defaultMessage: `Cancel`,
                          description: `Button that cancels removal of agent access`,
                        }),
                      }),
                      (0, Y.jsx)(re, {
                        type: `submit`,
                        color: `danger`,
                        disabled: !O,
                        loading: y,
                        children: (0, Y.jsx)(T, {
                          id: `workspaceAgents.sharing.remove`,
                          defaultMessage: `Remove access`,
                          description: `Action that removes a person or group's explicit access to an agent`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })),
      (t[85] = O),
      (t[86] = H),
      (t[87] = y),
      (t[88] = w),
      (t[89] = E),
      (t[90] = rt))
    : (rt = t[90]);
  let it;
  return (
    t[91] !== X || t[92] !== nt || t[93] !== rt
      ? ((it = (0, Y.jsxs)(Y.Fragment, { children: [X, nt, rt] })),
        (t[91] = X),
        (t[92] = nt),
        (t[93] = rt),
        (t[94] = it))
      : (it = t[94]),
    it
  );
}
function Je(e) {
  return e.id;
}
function Ye(e) {
  return e.id;
}
function Xe(e) {
  return e.capability === `hermes_read_config` || e.capability === `hermes_write`;
}
function Ze(e) {
  return e === `hermes_write`
    ? (0, Y.jsx)(T, {
        id: `workspaceAgents.sharing.canEdit`,
        defaultMessage: `Can edit`,
        description: `Agent permission allowing a person or group to edit it`,
      })
    : (0, Y.jsx)(T, {
        id: `workspaceAgents.sharing.canChat`,
        defaultMessage: `Can chat`,
        description: `Agent permission allowing a person or group to chat with it`,
      });
}
var Qe, $e, Y;
function X() {
  return (X = e(() => {
    ((Qe = f()),
      y(),
      ($e = a()),
      g(),
      Me(),
      B(),
      P(),
      Ee(),
      O(),
      v(),
      c(),
      o(),
      Ae(),
      r(),
      M(),
      Pe(),
      R(),
      j(),
      Ce(),
      z(),
      q(),
      J(),
      (Y = u()));
  }))();
}
function et(e) {
  let r = (0, tt.c)(96),
    { accountId: i, accountUserId: a, agentId: o, onClose: s } = e,
    c = n(m),
    ee = ce(),
    [u, d] = (0, Q.useState)(null),
    f = ae(V),
    p = ae(Te),
    h = ae(_e),
    ne = ae(ye),
    { data: g, error: _ } = S(We, o),
    { data: v, error: y, isFetching: b } = S(Ge, o),
    { mutate: ie, isPending: x, isError: le } = S(Ke, o),
    C = i === f && a === p,
    E =
      C &&
      h === !0 &&
      _ == null &&
      g?.agent.viewer_capability === `hermes_admin` &&
      g.agent.latest_published_version_id != null,
    fe = v?.workspace,
    D = fe?.capability != null,
    O = fe?.store_visible === !0,
    k;
  r[0] !== i ||
  r[1] !== a ||
  r[2] !== o ||
  r[3] !== E ||
  r[4] !== x ||
  r[5] !== D ||
  r[6] !== O ||
  r[7] !== ie ||
  r[8] !== c
    ? ((k = (e, t) => {
        let n = t !== void 0 && t;
        if (!E || x || (e === D && n === O)) return;
        let r = e
          ? W.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SHARE_ENABLE
          : W.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SHARE_DISABLE;
        e === D && (r = W.CHATGPT_AGENT_BUILDER_ACTION_TYPE_DIRECTORY_LISTING_TOGGLE);
        let s = performance.now(),
          l = {
            actionType: r,
            actionInstanceId: crypto.randomUUID(),
            agentId: o,
            page: G.CHATGPT_AGENT_BUILDER_PAGE_EDITOR_INSTRUCTIONS,
            source: U.CHATGPT_AGENT_BUILDER_SOURCE_SHARE_MODAL,
            isPublished: !0,
            isReadonly: !1,
            isPreviewVersion: !1,
            share: { previousVisibility: Z(D, O), visibility: Z(e, n) },
          };
        (K(c, { ...l, actionResult: ze.CHATGPT_AGENT_BUILDER_ACTION_RESULT_STARTED }),
          ie(
            {
              accountId: i,
              accountUserId: a,
              update: {
                workspace: { workspace_id: i, capability: e ? `hermes_read_config` : null, store_visible: n },
              },
            },
            {
              onSettled: (e, t) => {
                c.get(V) === i &&
                  c.get(Te) === a &&
                  K(c, {
                    ...l,
                    actionResult:
                      t == null
                        ? ze.CHATGPT_AGENT_BUILDER_ACTION_RESULT_SUCCEEDED
                        : ze.CHATGPT_AGENT_BUILDER_ACTION_RESULT_FAILED,
                    request: { durationMs: performance.now() - s },
                  });
              },
            },
          ));
      }),
      (r[0] = i),
      (r[1] = a),
      (r[2] = o),
      (r[3] = E),
      (r[4] = x),
      (r[5] = D),
      (r[6] = O),
      (r[7] = ie),
      (r[8] = c),
      (r[9] = k))
    : (k = r[9]);
  let A = k,
    j;
  if (!C || h === !1) {
    let e;
    (r[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(pe, {
          type: `warning`,
          content: (0, $.jsx)(T, {
            id: `workspaceAgents.sharing.unavailable`,
            defaultMessage: `Sharing is unavailable for this account. Close this dialog and reopen the agent`,
            description: `Shown when the account changes or no longer has permission to share a Workspace Agent`,
          }),
        })),
        (r[10] = e))
      : (e = r[10]),
      (j = e));
  } else if (y != null || _ != null) {
    let e;
    r[11] !== o || r[12] !== c.query
      ? ((e = () => {
          (c.query.invalidate(Ge, o), c.query.invalidate(We, o));
        }),
        (r[11] = o),
        (r[12] = c.query),
        (r[13] = e))
      : (e = r[13]);
    let t;
    (r[14] !== b || r[15] !== e
      ? ((t = (0, $.jsx)(Ue, { loading: b, onRetry: e })), (r[14] = b), (r[15] = e), (r[16] = t))
      : (t = r[16]),
      (j = t));
  } else if (v == null || g == null) {
    let e;
    (r[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(Le, {
          children: (0, $.jsx)(T, {
            id: `workspaceAgents.sharing.loading`,
            defaultMessage: `Loading access…`,
            description: `Status while loading a Workspace Agent's sharing settings`,
          }),
        })),
        (r[17] = e))
      : (e = r[17]),
      (j = e));
  } else {
    let e;
    r[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(T, {
          id: `workspaceAgents.sharing.generalAccess`,
          defaultMessage: `General access`,
          description: `Label for the setting controlling workspace-wide access to an agent`,
        })),
        (r[18] = e))
      : (e = r[18]);
    let n = !E || x,
      i;
    r[19] === D
      ? (i = r[20])
      : ((i = D
          ? (0, $.jsx)(T, {
              id: `workspaceAgents.sharing.workspaceLink`,
              defaultMessage: `Anyone in the workspace with the link`,
              description: `Access option allowing members of the owning workspace to use an agent through its link`,
            })
          : (0, $.jsx)(T, {
              id: `workspaceAgents.sharing.invited`,
              defaultMessage: `Only those invited`,
              description: `Access option limiting an agent to its owner and people or groups with explicit access`,
            })),
        (r[19] = D),
        (r[20] = i));
    let a;
    r[21] !== n || r[22] !== i
      ? ((a = (0, $.jsx)(re, { color: `ghostSecondary`, disabled: n, children: i })),
        (r[21] = n),
        (r[22] = i),
        (r[23] = a))
      : (a = r[23]);
    let o = !E || x,
      s;
    r[24] === A ? (s = r[25]) : ((s = () => A(!1)), (r[24] = A), (r[25] = s));
    let c;
    r[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, $.jsx)(T, {
          id: `workspaceAgents.sharing.invited`,
          defaultMessage: `Only those invited`,
          description: `Access option limiting an agent to its owner and people or groups with explicit access`,
        })),
        (r[26] = c))
      : (c = r[26]);
    let l;
    r[27] !== o || r[28] !== s
      ? ((l = (0, $.jsx)(ue.Item, { disabled: o, onSelect: s, children: c })),
        (r[27] = o),
        (r[28] = s),
        (r[29] = l))
      : (l = r[29]);
    let u = !E || x,
      d;
    r[30] !== O || r[31] !== A ? ((d = () => A(!0, O)), (r[30] = O), (r[31] = A), (r[32] = d)) : (d = r[32]);
    let te;
    r[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((te = (0, $.jsx)(T, {
          id: `workspaceAgents.sharing.workspaceLink`,
          defaultMessage: `Anyone in the workspace with the link`,
          description: `Access option allowing members of the owning workspace to use an agent through its link`,
        })),
        (r[33] = te))
      : (te = r[33]);
    let f;
    r[34] !== u || r[35] !== d
      ? ((f = (0, $.jsx)(ue.Item, { disabled: u, onSelect: d, children: te })),
        (r[34] = u),
        (r[35] = d),
        (r[36] = f))
      : (f = r[36]);
    let p;
    r[37] !== f || r[38] !== a || r[39] !== l
      ? ((p = (0, $.jsx)(w, {
          variant: `stacked`,
          label: e,
          control: (0, $.jsxs)(de, { align: `end`, triggerButton: a, children: [l, f] }),
        })),
        (r[37] = f),
        (r[38] = a),
        (r[39] = l),
        (r[40] = p))
      : (p = r[40]);
    let m;
    r[41] !== E || r[42] !== ne || r[43] !== ee || r[44] !== x || r[45] !== D || r[46] !== O || r[47] !== A
      ? ((m = D
          ? (0, $.jsx)(w, {
              label: (0, $.jsx)(T, {
                id: `workspaceAgents.sharing.directory`,
                defaultMessage: `List in workspace directory`,
                description: `Setting that makes an agent discoverable in the workspace agent directory`,
              }),
              description: (0, $.jsx)(T, {
                id: `workspaceAgents.sharing.directoryDescription`,
                defaultMessage: `Help people in your workspace find this agent`,
                description: `Description of listing a shared agent in the workspace directory`,
              }),
              control: (0, $.jsx)(se, {
                disabled: O || ne === !0,
                tooltipContent: (0, $.jsx)(T, {
                  id: `workspaceAgents.sharing.directoryPermissionRequired`,
                  defaultMessage: `You don’t have permission to list agents in the workspace directory`,
                  description: `Explains why directory listing is unavailable when the workspace does not grant publishing permission`,
                }),
                children: (0, $.jsx)(oe, {
                  checked: O,
                  disabled: !E || x || (!O && ne !== !0),
                  onChange: (e) => A(!0, e),
                  ariaLabel: ee.formatMessage({
                    id: `workspaceAgents.sharing.directory`,
                    defaultMessage: `List in workspace directory`,
                    description: `Setting that makes an agent discoverable in the workspace agent directory`,
                  }),
                }),
              }),
            })
          : null),
        (r[41] = E),
        (r[42] = ne),
        (r[43] = ee),
        (r[44] = x),
        (r[45] = D),
        (r[46] = O),
        (r[47] = A),
        (r[48] = m))
      : (m = r[48]);
    let h;
    (r[49] !== p || r[50] !== m
      ? ((h = (0, $.jsxs)(t, { children: [p, m] })), (r[49] = p), (r[50] = m), (r[51] = h))
      : (h = r[51]),
      (j = h));
  }
  let he, M;
  r[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, $.jsx)(T, {
        id: `workspaceAgents.sharing.title`,
        defaultMessage: `Share agent`,
        description: `Title of the dialog for managing access to a Workspace Agent`,
      })),
      (M = (0, $.jsx)(T, {
        id: `workspaceAgents.sharing.description`,
        defaultMessage: `Access changes apply immediately to the published agent`,
        description: `Explains that sharing changes take effect without publishing unsaved agent edits`,
      })),
      (r[52] = he),
      (r[53] = M))
    : ((he = r[52]), (M = r[53]));
  let P;
  r[54] === ee
    ? (P = r[55])
    : ((P = ee.formatMessage({
        id: `workspaceAgents.sharing.copyLink`,
        defaultMessage: `Copy link`,
        description: `Button that copies the link to a published Workspace Agent`,
      })),
      (r[54] = ee),
      (r[55] = P));
  let ge = !C || g?.agent.latest_published_version_id == null,
    F;
  r[56] !== o || r[57] !== g?.agent.viewer_capability || r[58] !== D || r[59] !== O || r[60] !== c
    ? ((F = () => (
        K(c, {
          agentId: o,
          actionType: W.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SHARE_LINK_COPY,
          source: U.CHATGPT_AGENT_BUILDER_SOURCE_SHARE_MODAL,
          page: G.CHATGPT_AGENT_BUILDER_PAGE_EDITOR_INSTRUCTIONS,
          isPublished: !0,
          isReadonly:
            g?.agent.viewer_capability !== `hermes_admin` && g?.agent.viewer_capability !== `hermes_write`,
          isPreviewVersion: !1,
          share: { visibility: Z(D, O) },
        }),
        te(N(o))
      )),
      (r[56] = o),
      (r[57] = g?.agent.viewer_capability),
      (r[58] = D),
      (r[59] = O),
      (r[60] = c),
      (r[61] = F))
    : (F = r[61]);
  let I;
  r[62] !== P || r[63] !== ge || r[64] !== F
    ? ((I = (0, $.jsx)(l, { buttonText: P, isDisabled: ge, onCopy: F })),
      (r[62] = P),
      (r[63] = ge),
      (r[64] = F),
      (r[65] = I))
    : (I = r[65]);
  let ve;
  r[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, $.jsx)(T, {
        id: `workspaceAgents.sharing.done`,
        defaultMessage: `Done`,
        description: `Button that closes a Workspace Agent's sharing settings`,
      })),
      (r[66] = ve))
    : (ve = r[66]);
  let L;
  r[67] !== x || r[68] !== s
    ? ((L = (0, $.jsx)(re, { color: `secondary`, disabled: x, onClick: s, children: ve })),
      (r[67] = x),
      (r[68] = s),
      (r[69] = L))
    : (L = r[69]);
  let be;
  r[70] !== I || r[71] !== L
    ? ((be = (0, $.jsxs)($.Fragment, { children: [I, L] })), (r[70] = I), (r[71] = L), (r[72] = be))
    : (be = r[72]);
  let xe;
  r[73] === j ? (xe = r[74]) : ((xe = (0, $.jsx)(me, { children: j })), (r[73] = j), (r[74] = xe));
  let R;
  r[75] !== i ||
  r[76] !== a ||
  r[77] !== o ||
  r[78] !== g ||
  r[79] !== _ ||
  r[80] !== h ||
  r[81] !== y ||
  r[82] !== v ||
  r[83] !== u ||
  r[84] !== C
    ? ((R =
        C && h === !0 && v != null && y == null && g != null && _ == null
          ? (0, $.jsx)(qe, { accountId: i, accountUserId: a, agentId: o, portalContainer: u })
          : null),
      (r[75] = i),
      (r[76] = a),
      (r[77] = o),
      (r[78] = g),
      (r[79] = _),
      (r[80] = h),
      (r[81] = y),
      (r[82] = v),
      (r[83] = u),
      (r[84] = C),
      (r[85] = R))
    : (R = r[85]);
  let z;
  r[86] !== le || r[87] !== C
    ? ((z =
        le && C
          ? (0, $.jsx)(me, {
              children: (0, $.jsx)(pe, {
                type: `error`,
                content: (0, $.jsx)(T, {
                  id: `workspaceAgents.sharing.saveFailed`,
                  defaultMessage: `Couldn’t update access. Check the current settings and try again`,
                  description: `Error when saving an agent's access settings fails`,
                }),
              }),
            })
          : null),
      (r[86] = le),
      (r[87] = C),
      (r[88] = z))
    : (z = r[88]);
  let Se;
  return (
    r[89] !== x || r[90] !== s || r[91] !== be || r[92] !== xe || r[93] !== R || r[94] !== z
      ? ((Se = (0, $.jsxs)(H, {
          onClose: s,
          isDismissalDisabled: x,
          onPortalContainerChange: d,
          title: he,
          subtitle: M,
          footer: be,
          children: [xe, R, z],
        })),
        (r[89] = x),
        (r[90] = s),
        (r[91] = be),
        (r[92] = xe),
        (r[93] = R),
        (r[94] = z),
        (r[95] = Se))
      : (Se = r[95]),
    Se
  );
}
function Z(e, t) {
  return t
    ? Be.CHATGPT_AGENT_BUILDER_SHARE_VISIBILITY_DIRECTORY
    : e
      ? Be.CHATGPT_AGENT_BUILDER_SHARE_VISIBILITY_WORKSPACE
      : Be.CHATGPT_AGENT_BUILDER_SHARE_VISIBILITY_PRIVATE;
}
var tt, Q, $;
function nt() {
  return (nt = e(() => {
    ((tt = f()),
      Re(),
      y(),
      (Q = a()),
      g(),
      B(),
      O(),
      v(),
      _(),
      Ie(),
      o(),
      b(),
      fe(),
      C(),
      r(),
      D(),
      ie(),
      Ne(),
      p(),
      z(),
      Ve(),
      q(),
      He(),
      I(),
      X(),
      J(),
      ($ = u()));
  }))();
}
nt();
export { et as WorkspaceAgentSharingDialog };
//# sourceMappingURL=dialog-a78145acf915.js.map
