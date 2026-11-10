import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  CO as r,
  Cot as i,
  Fat as a,
  GE as o,
  IDt as s,
  Ixt as c,
  JC as l,
  MO as u,
  Pat as d,
  Pxt as f,
  TO as ee,
  VDt as te,
  Vxt as p,
  WE as m,
  Zxt as h,
  _O as g,
  bx as _,
  cO as ne,
  cz as v,
  fO as y,
  gO as b,
  iO as x,
  iw as S,
  jDt as C,
  jO as re,
  lO as ie,
  mO as ae,
  oO as oe,
  qC as se,
  qxt as w,
  rO as ce,
  sO as le,
  sz as ue,
  t3 as T,
  tw as E,
  vO as D,
  vzt as de,
  wot as O,
  xMt as k,
  yx as A,
  yzt as j,
  zxt as M,
} from "./app-shared-bbfeca5e5737.js";
import {
  AMr as N,
  Awr as fe,
  BPr as P,
  DV as pe,
  EPr as me,
  EV as F,
  Fin as he,
  Fwr as I,
  GMr as ge,
  Hin as _e,
  QMr as L,
  VPr as R,
  Ymr as z,
  cct as B,
  dMr as ve,
  dct as ye,
  ehr as V,
  fMr as be,
  fV as xe,
  fct as Se,
  pV as Ce,
  qMr as H,
  tNr as U,
  xkr as we,
  zkr as Te,
} from "./app-initial-5851df3f6cb1.js";
import { a as Ee, i as De, r as Oe } from "./use-workspace-users-9ff632adf20a.js";
import { n as ke, t as Ae } from "./workspace-team-recipient-suggestions-f88127cfec32.js";
import { n as je, t as W } from "./dialog-shell-9b9990063b15.js";
import { n as Me, t as Ne } from "./permission-dropdown-ca77aa1add04.js";
import { n as Pe, t as Fe } from "./detail-section-state-e7774e5ba7f3.js";
import {
  _ as G,
  a as K,
  b as Ie,
  i as Le,
  l as q,
  n as J,
  p as Re,
  t as ze,
} from "./builder-analytics-f0ccbf8827ee.js";
import { n as Be, t as Ve } from "./read-error-29adc71a8032.js";
import { a as Y, l as He } from "./query-b1ceced7057f.js";
var Ue, We;
function X() {
  return (X = e(() => {
    (f(),
      U(),
      V(),
      P(),
      O(),
      a(),
      N(),
      B(),
      (Ue = h(i, (e, { get: t }) => {
        let n = t(ge),
          r = t(H),
          i = t(L).authenticatedUserId;
        return {
          queryKey: [`workspace-agent`, `sharing`, n, r, e],
          enabled: n != null && r != null && i != null && t(Se) === !0,
          queryFn: async ({ signal: t }) => {
            if (n == null || i == null) throw Error(`Missing authenticated account`);
            return z.safeGet(`/hermes/agent/{agent_id}/permissions`, {
              parameters: { path: { agent_id: e } },
              signal: t,
              expectedIdentity: { accountId: n, userId: i },
            });
          },
          staleTime: d.ONE_MINUTE,
          retry: !1,
        };
      })),
      (We = w(
        i,
        (e, { scope: t }) => ({
          scope: { id: `workspace-agent-sharing:` + e },
          mutationKey: [`workspace-agent`, `sharing`, e],
          mutationFn: async ({ accountId: n, accountUserId: r, update: i }) => {
            let a = t.get(L).authenticatedUserId,
              o = () => {
                if (
                  a == null ||
                  t.get(L).authenticatedUserId !== a ||
                  t.get(ge) !== n ||
                  t.get(H) !== r ||
                  t.get(Se) !== !0 ||
                  (i.workspace?.store_visible && t.get(ye) !== !0)
                )
                  throw Error(`Agent sharing identity changed`);
              };
            if ((o(), a == null)) throw Error(`Missing authenticated user`);
            let s = await z.safeGet(`/hermes/agent/{agent_id}/builder-view`, {
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
              let r = await z.safeGet(`/hermes/agent/{agent_id}/permissions`, {
                parameters: { path: { agent_id: e } },
                expectedIdentity: { accountId: n, userId: a },
                assertRequestCurrent: o,
              });
              if ((o(), i.groups != null && !me(t.get(L).plan))) throw Error(`Group sharing is unavailable`);
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
              let r = await z.safePost(`/hermes/agent/{agent_id}/permissions`, {
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
                R(t.queryClient, r);
            }
          },
        }),
        { autoDispose: !0 },
      )));
  }))();
}
function Ge(e) {
  let n = (0, Xe.c)(95),
    { accountId: r, accountUserId: a, agentId: o, portalContainer: l } = e,
    u = c(i),
    d = te(),
    f = p(L),
    ee = p(Se),
    { data: h } = _e(),
    { data: _ } = M(ve, r),
    { data: v } = M(He, o),
    { data: y } = M(Ue, o),
    { mutate: x, isPending: S } = M(We, o),
    [C, re] = (0, Ze.useState)(``),
    se;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((se = []), (n[0] = se)) : (se = n[0]);
  let [w, ce] = (0, Ze.useState)(se),
    [ue, T] = (0, Ze.useState)(`hermes_read_config`),
    [E, D] = (0, Ze.useState)(null),
    [de, O] = (0, Ze.useState)(!1),
    k = v?.agent.viewer_capability === `hermes_admin`,
    A =
      ee === !0 &&
      !S &&
      f.authenticatedAccountId === r &&
      f.accountUserId === a &&
      v?.agent.latest_published_version_id != null &&
      (k || v.agent.viewer_capability === `hermes_write`),
    j;
  n[1] === f.plan ? (j = n[2]) : ((j = me(f.plan)), (n[1] = f.plan), (n[2] = j));
  let N = j,
    fe;
  n[3] !== h || n[4] !== r || n[5] !== A || n[6] !== N || n[7] !== _?.permissions
    ? ((fe =
        A &&
        h?.id === r &&
        (h.account_user_role === `account-owner` ||
          h.account_user_role === `account-admin` ||
          !N ||
          _?.permissions?.includes(`chatgpt.workspace.member.role.view`) === !0)),
      (n[3] = h),
      (n[4] = r),
      (n[5] = A),
      (n[6] = N),
      (n[7] = _?.permissions),
      (n[8] = fe))
    : (fe = n[8]);
  let P = fe,
    { data: pe, isFetching: he, isError: I, refetch: ge } = Ee(P ? C : ``),
    { data: R, isFetching: z, isError: B, refetch: ye } = De(P && N ? C : ``),
    { data: V, isLoading: be, isError: Ce } = M(ke, r, { enabled: P && N }) ?? {},
    H = d.formatMessage({
      id: `workspaceAgents.sharing.person`,
      defaultMessage: `Workspace member`,
      description: `Fallback name for a person with access to an agent`,
    }),
    U = d.formatMessage({
      id: `workspaceAgents.sharing.group`,
      defaultMessage: `Workspace group`,
      description: `Fallback name for a group with access to an agent`,
    }),
    we = [
      ...Object.entries(y?.users ?? {})
        .filter((e) => {
          let [t] = e;
          return t !== v?.agent.creator_id;
        })
        .map((e) => {
          let [t, n] = e;
          return {
            id: `users:` + t,
            targetId: t,
            kind: `users`,
            label: n.name?.trim() || n.email?.trim() || H,
            secondaryLabel: n.email ?? void 0,
            capability: n.capability,
          };
        }),
      ...(N
        ? Object.entries(y?.groups ?? {}).map((e) => {
            let [t, n] = e;
            return {
              id: `groups:` + t,
              targetId: t,
              kind: `groups`,
              label: n.name?.trim() || U,
              secondaryLabel: U,
              capability: n.capability,
            };
          })
        : []),
    ].filter(Je),
    Oe = new Set([`users:` + a, `users:` + v?.agent.creator_id, ...we.map(qe), ...w.map(Ke)]),
    Ae = [
      ...(I
        ? []
        : (pe?.map((e) => ({
            id: `users:` + e.account_user_id,
            colorKey: e.account_user_id,
            targetId: e.account_user_id,
            kind: `users`,
            label: e.name?.trim() || e.email?.trim() || H,
            secondaryLabel: e.email ?? void 0,
          })) ?? [])),
      ...(N && !B
        ? (R?.map((e) => ({
            id: `groups:` + e.id,
            targetId: e.id,
            kind: `groups`,
            label: e.name || U,
            secondaryLabel: U,
          })) ?? [])
        : []),
      ...(P && N && !Ce
        ? (V ?? [])
            .filter(
              (e) =>
                (B || !R?.some((t) => t.id === e.id)) &&
                e.name.toLocaleLowerCase().includes(C.trim().toLocaleLowerCase()),
            )
            .map((e) => ({
              id: `groups:` + e.id,
              targetId: e.id,
              kind: `groups`,
              label: e.name || U,
              secondaryLabel: U,
            }))
        : []),
    ].filter((e) => !Oe.has(e.id)),
    je;
  n[9] !== r || n[10] !== a || n[11] !== A || n[12] !== x || n[13] !== k || n[14] !== E
    ? ((je = (e, t, n) => {
        if (!A || (!k && t === `hermes_write`)) return;
        let i = {};
        for (let n of e) {
          let e = i[n.kind] ?? {};
          ((i[n.kind] = e), (e[n.targetId] = t));
        }
        x(
          { accountId: r, accountUserId: a, update: i },
          {
            onSuccess: n,
            onError: () => {
              E != null && O(!0);
            },
          },
        );
      }),
      (n[9] = r),
      (n[10] = a),
      (n[11] = A),
      (n[12] = x),
      (n[13] = k),
      (n[14] = E),
      (n[15] = je))
    : (je = n[15]);
  let W = je,
    Me = I || (N && (B || Ce)),
    Pe = he || (N && (z || be)),
    Fe;
  n[16] !== ue || n[17] !== W || n[18] !== k || n[19] !== w
    ? ((Fe = (e) => {
        (e.preventDefault(),
          w.length > 0 &&
            W(w, k ? ue : `hermes_read_config`, () => {
              (ce([]), re(``));
            }));
      }),
      (n[16] = ue),
      (n[17] = W),
      (n[18] = k),
      (n[19] = w),
      (n[20] = Fe))
    : (Fe = n[20]);
  let G;
  n[21] === d
    ? (G = n[22])
    : ((G = d.formatMessage({
        id: `workspaceAgents.sharing.inviteSearch`,
        defaultMessage: `Search people and groups`,
        description: `Accessible label for finding people or groups to invite to an agent`,
      })),
      (n[21] = d),
      (n[22] = G));
  let K;
  n[23] === d
    ? (K = n[24])
    : ((K = d.formatMessage({
        id: `workspaceAgents.sharing.invitePlaceholder`,
        defaultMessage: `Add people or groups`,
        description: `Placeholder in the agent invitation search field`,
      })),
      (n[23] = d),
      (n[24] = K));
  let Ie = !P,
    Le = Pe && Ae.length === 0 ? void 0 : Ae,
    q;
  n[25] !== d || n[26] !== Pe
    ? ((q = Pe
        ? d.formatMessage({
            id: `workspaceAgents.sharing.searching`,
            defaultMessage: `Searching…`,
            description: `Status while finding people and groups in a workspace`,
          })
        : void 0),
      (n[25] = d),
      (n[26] = Pe),
      (n[27] = q))
    : (q = n[27]);
  let J;
  n[28] === Me
    ? (J = n[29])
    : ((J = Me
        ? null
        : (0, Z.jsx)(s, {
            id: `workspaceAgents.sharing.noMatches`,
            defaultMessage: `No matches`,
            description: `Shown when no people or groups match the agent invitation search`,
          })),
      (n[28] = Me),
      (n[29] = J));
  let Re;
  n[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Re = (e) => {
        (ce((t) => [...t, e]), re(``));
      }),
      (n[30] = Re))
    : (Re = n[30]);
  let ze;
  n[31] === d
    ? (ze = n[32])
    : ((ze = (e) =>
        d.formatMessage(
          {
            id: `workspaceAgents.sharing.removeInvitee`,
            defaultMessage: `Remove {name}`,
            description: `Accessible label for removing a selected person or group from an unsent agent invitation`,
          },
          { name: e.label },
        )),
      (n[31] = d),
      (n[32] = ze));
  let Be;
  n[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = (e) => ce((t) => t.filter((t) => t.id !== e.id))), (n[33] = Be))
    : (Be = n[33]);
  let Ve;
  n[34] !== l ||
  n[35] !== C ||
  n[36] !== w ||
  n[37] !== K ||
  n[38] !== Ie ||
  n[39] !== Le ||
  n[40] !== q ||
  n[41] !== J ||
  n[42] !== ze ||
  n[43] !== G
    ? ((Ve = (0, Z.jsx)(xe, {
        portalContainer: l,
        ariaLabel: G,
        placeholder: K,
        disabled: Ie,
        query: C,
        selectedOptions: w,
        options: Le,
        loadingLabel: q,
        emptyMessage: J,
        onQueryChange: re,
        onSelectOption: Re,
        getRemoveLabel: ze,
        onRemoveOption: Be,
      })),
      (n[34] = l),
      (n[35] = C),
      (n[36] = w),
      (n[37] = K),
      (n[38] = Ie),
      (n[39] = Le),
      (n[40] = q),
      (n[41] = J),
      (n[42] = ze),
      (n[43] = G),
      (n[44] = Ve))
    : (Ve = n[44]);
  let Y;
  n[45] !== P || n[46] !== S
    ? ((Y =
        !P && !S
          ? (0, Z.jsx)(m, {
              type: `normal`,
              content: (0, Z.jsx)(s, {
                id: `workspaceAgents.sharing.searchUnavailable`,
                defaultMessage: `Your workspace permissions don’t allow searching for people or groups`,
                description: `Explains why the agent invitation picker is unavailable`,
              }),
            })
          : null),
      (n[45] = P),
      (n[46] = S),
      (n[47] = Y))
    : (Y = n[47]);
  let X;
  n[48] !== r ||
  n[49] !== N ||
  n[50] !== B ||
  n[51] !== ye ||
  n[52] !== ge ||
  n[53] !== u ||
  n[54] !== Me ||
  n[55] !== Ce ||
  n[56] !== I
    ? ((X = Me
        ? (0, Z.jsx)(m, {
            type: `error`,
            content: (0, Z.jsx)(s, {
              id: `workspaceAgents.sharing.searchFailed`,
              defaultMessage: `Couldn’t load all search results`,
              description: `Error when one or more sharing recipient lookups fail; successful results remain available`,
            }),
            primaryCtaText: (0, Z.jsx)(s, {
              id: `workspaceAgents.sharing.retry`,
              defaultMessage: `Try again`,
              description: `Button that retries searching for people or groups`,
            }),
            onPrimaryCtaClick: () => {
              (I && ge(), N && (B && ye(), Ce && u.query.invalidate(Te, r)));
            },
          })
        : null),
      (n[48] = r),
      (n[49] = N),
      (n[50] = B),
      (n[51] = ye),
      (n[52] = ge),
      (n[53] = u),
      (n[54] = Me),
      (n[55] = Ce),
      (n[56] = I),
      (n[57] = X))
    : (X = n[57]);
  let Ge;
  n[58] !== ue || n[59] !== A || n[60] !== S || n[61] !== k || n[62] !== w.length
    ? ((Ge =
        w.length > 0
          ? (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-between gap-3`,
              children: [
                (0, Z.jsx)(Ne, {
                  value: k ? ue : `hermes_read_config`,
                  disabled: !A || !k,
                  options: [{ value: `hermes_read_config` }, { value: `hermes_write` }],
                  renderLabel: Ye,
                  onChange: T,
                }),
                (0, Z.jsx)(t, {
                  type: `submit`,
                  disabled: !A,
                  loading: S,
                  children: (0, Z.jsx)(s, {
                    id: `workspaceAgents.sharing.invite`,
                    defaultMessage: `Invite`,
                    description: `Button that grants the selected people and groups access to an agent`,
                  }),
                }),
              ],
            })
          : null),
      (n[58] = ue),
      (n[59] = A),
      (n[60] = S),
      (n[61] = k),
      (n[62] = w.length),
      (n[63] = Ge))
    : (Ge = n[63]);
  let Qe;
  n[64] !== Ve || n[65] !== Y || n[66] !== X || n[67] !== Ge || n[68] !== Fe
    ? ((Qe = (0, Z.jsx)(ie, {
        children: (0, Z.jsxs)(`form`, {
          onSubmit: Fe,
          className: `flex flex-col gap-3`,
          children: [Ve, Y, X, Ge],
        }),
      })),
      (n[64] = Ve),
      (n[65] = Y),
      (n[66] = X),
      (n[67] = Ge),
      (n[68] = Fe),
      (n[69] = Qe))
    : (Qe = n[69]);
  let $e = v?.agent.creator_id,
    Q;
  n[70] !== v?.agent.creator_name || n[71] !== H
    ? ((Q = v?.agent.creator_name?.trim() || H), (n[70] = v?.agent.creator_name), (n[71] = H), (n[72] = Q))
    : (Q = n[72]);
  let et;
  n[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((et = (0, Z.jsx)(s, {
        id: `workspaceAgents.sharing.owner`,
        defaultMessage: `Owner`,
        description: `Role label for the owner of an agent`,
      })),
      (n[73] = et))
    : (et = n[73]);
  let tt;
  n[74] !== $e || n[75] !== Q
    ? ((tt = (0, Z.jsx)(F, { colorKey: $e, size: `compact`, label: Q, trailingContent: et })),
      (n[74] = $e),
      (n[75] = Q),
      (n[76] = tt))
    : (tt = n[76]);
  let $;
  n[77] !== A || n[78] !== W || n[79] !== we || n[80] !== k
    ? (($ = we.map((e) =>
        (0, Z.jsx)(
          F,
          {
            colorKey: e.kind === `users` ? e.targetId : void 0,
            size: `compact`,
            label: e.label,
            secondaryLabel: e.secondaryLabel,
            trailingContent: (0, Z.jsx)(Ne, {
              value: e.capability,
              disabled: !A || (!k && e.capability === `hermes_write`),
              options: [{ value: `hermes_read_config` }, { value: `hermes_write`, disabled: !k }],
              renderLabel: Ye,
              onChange: (t) => {
                (t === `hermes_read_config` || t === `hermes_write`) && W([e], t);
              },
              removeLabel: (0, Z.jsx)(s, {
                id: `workspaceAgents.sharing.remove`,
                defaultMessage: `Remove access`,
                description: `Action that removes a person or group's explicit access to an agent`,
              }),
              onRemoveAccess: () => {
                (D(e), O(!1));
              },
            }),
          },
          e.id,
        ),
      )),
      (n[77] = A),
      (n[78] = W),
      (n[79] = we),
      (n[80] = k),
      (n[81] = $))
    : ($ = n[81]);
  let nt;
  n[82] !== tt || n[83] !== $
    ? ((nt = (0, Z.jsxs)(ie, { className: `flex flex-col gap-3`, children: [tt, $] })),
      (n[82] = tt),
      (n[83] = $),
      (n[84] = nt))
    : (nt = n[84]);
  let rt;
  n[85] !== A || n[86] !== W || n[87] !== S || n[88] !== E || n[89] !== de
    ? ((rt =
        E == null
          ? null
          : (0, Z.jsx)(ae, {
              open: !0,
              size: `compact`,
              onOpenChange: (e) => {
                !e && !S && D(null);
              },
              children: (0, Z.jsxs)(oe, {
                as: `form`,
                onSubmit: (e) => {
                  (e.preventDefault(), W([E], null, () => D(null)));
                },
                children: [
                  (0, Z.jsx)(ne, {
                    title: (0, Z.jsx)(g, {
                      children: (0, Z.jsx)(s, {
                        id: `workspaceAgents.sharing.removeTitle`,
                        defaultMessage: `Remove access?`,
                        description: `Title asking to confirm removing explicit agent access`,
                      }),
                    }),
                    subtitle: (0, Z.jsx)(b, {
                      children: (0, Z.jsx)(s, {
                        id: `workspaceAgents.sharing.removeDescription`,
                        defaultMessage: `Remove direct access for {name}? They may still have access through the workspace or a group`,
                        description: `Confirmation before removing an agent permission. name is the person or group name. Other grants may still provide access.`,
                        values: { name: E.label },
                      }),
                    }),
                  }),
                  de
                    ? (0, Z.jsx)(m, {
                        type: `error`,
                        content: (0, Z.jsx)(s, {
                          id: `workspaceAgents.sharing.removeFailed`,
                          defaultMessage: `Couldn’t remove access. Try again`,
                          description: `Error shown when removing agent access fails`,
                        }),
                      })
                    : null,
                  (0, Z.jsxs)(le, {
                    children: [
                      (0, Z.jsx)(t, {
                        type: `button`,
                        color: `secondary`,
                        disabled: S,
                        onClick: () => D(null),
                        children: (0, Z.jsx)(s, {
                          id: `workspaceAgents.sharing.cancel`,
                          defaultMessage: `Cancel`,
                          description: `Button that cancels removal of agent access`,
                        }),
                      }),
                      (0, Z.jsx)(t, {
                        type: `submit`,
                        color: `danger`,
                        disabled: !A,
                        loading: S,
                        children: (0, Z.jsx)(s, {
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
      (n[85] = A),
      (n[86] = W),
      (n[87] = S),
      (n[88] = E),
      (n[89] = de),
      (n[90] = rt))
    : (rt = n[90]);
  let it;
  return (
    n[91] !== Qe || n[92] !== nt || n[93] !== rt
      ? ((it = (0, Z.jsxs)(Z.Fragment, { children: [Qe, nt, rt] })),
        (n[91] = Qe),
        (n[92] = nt),
        (n[93] = rt),
        (n[94] = it))
      : (it = n[94]),
    it
  );
}
function Ke(e) {
  return e.id;
}
function qe(e) {
  return e.id;
}
function Je(e) {
  return e.capability === `hermes_read_config` || e.capability === `hermes_write`;
}
function Ye(e) {
  return e === `hermes_write`
    ? (0, Z.jsx)(s, {
        id: `workspaceAgents.sharing.canEdit`,
        defaultMessage: `Can edit`,
        description: `Agent permission allowing a person or group to edit it`,
      })
    : (0, Z.jsx)(s, {
        id: `workspaceAgents.sharing.canChat`,
        defaultMessage: `Can chat`,
        description: `Agent permission allowing a person or group to chat with it`,
      });
}
var Xe, Ze, Z;
function Qe() {
  return (Qe = e(() => {
    ((Xe = de()),
      f(),
      (Ze = j()),
      C(),
      Ae(),
      U(),
      be(),
      he(),
      o(),
      T(),
      D(),
      y(),
      Oe(),
      O(),
      Ce(),
      Me(),
      pe(),
      we(),
      N(),
      B(),
      Y(),
      X(),
      (Z = k()));
  }))();
}
function $e(e) {
  let n = (0, et.c)(96),
    { accountId: a, accountUserId: o, agentId: l, onClose: u } = e,
    d = c(i),
    f = te(),
    [h, g] = (0, tt.useState)(null),
    _ = p(ge),
    ne = p(H),
    v = p(Se),
    y = p(ye),
    { data: b, error: x } = M(He, l),
    { data: S, error: C, isFetching: ae } = M(Ue, l),
    { mutate: oe, isPending: w, isError: le } = M(We, l),
    T = a === _ && o === ne,
    D =
      T &&
      v === !0 &&
      x == null &&
      b?.agent.viewer_capability === `hermes_admin` &&
      b.agent.latest_published_version_id != null,
    de = S?.workspace,
    O = de?.capability != null,
    k = de?.store_visible === !0,
    j;
  n[0] !== a ||
  n[1] !== o ||
  n[2] !== l ||
  n[3] !== D ||
  n[4] !== w ||
  n[5] !== O ||
  n[6] !== k ||
  n[7] !== oe ||
  n[8] !== d
    ? ((j = (e, t) => {
        let n = t !== void 0 && t;
        if (!D || w || (e === O && n === k)) return;
        let r = e
          ? K.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SHARE_ENABLE
          : K.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SHARE_DISABLE;
        e === O && (r = K.CHATGPT_AGENT_BUILDER_ACTION_TYPE_DIRECTORY_LISTING_TOGGLE);
        let i = performance.now(),
          s = {
            actionType: r,
            actionInstanceId: crypto.randomUUID(),
            agentId: l,
            page: q.CHATGPT_AGENT_BUILDER_PAGE_EDITOR_INSTRUCTIONS,
            source: G.CHATGPT_AGENT_BUILDER_SOURCE_SHARE_MODAL,
            isPublished: !0,
            isReadonly: !1,
            isPreviewVersion: !1,
            share: { previousVisibility: Q(O, k), visibility: Q(e, n) },
          };
        (J(d, { ...s, actionResult: Le.CHATGPT_AGENT_BUILDER_ACTION_RESULT_STARTED }),
          oe(
            {
              accountId: a,
              accountUserId: o,
              update: {
                workspace: { workspace_id: a, capability: e ? `hermes_read_config` : null, store_visible: n },
              },
            },
            {
              onSettled: (e, t) => {
                d.get(ge) === a &&
                  d.get(H) === o &&
                  J(d, {
                    ...s,
                    actionResult:
                      t == null
                        ? Le.CHATGPT_AGENT_BUILDER_ACTION_RESULT_SUCCEEDED
                        : Le.CHATGPT_AGENT_BUILDER_ACTION_RESULT_FAILED,
                    request: { durationMs: performance.now() - i },
                  });
              },
            },
          ));
      }),
      (n[0] = a),
      (n[1] = o),
      (n[2] = l),
      (n[3] = D),
      (n[4] = w),
      (n[5] = O),
      (n[6] = k),
      (n[7] = oe),
      (n[8] = d),
      (n[9] = j))
    : (j = n[9]);
  let N = j,
    P;
  if (!T || v === !1) {
    let e;
    (n[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(m, {
          type: `warning`,
          content: (0, $.jsx)(s, {
            id: `workspaceAgents.sharing.unavailable`,
            defaultMessage: `Sharing is unavailable for this account. Close this dialog and reopen the agent`,
            description: `Shown when the account changes or no longer has permission to share a Workspace Agent`,
          }),
        })),
        (n[10] = e))
      : (e = n[10]),
      (P = e));
  } else if (C != null || x != null) {
    let e;
    n[11] !== l || n[12] !== d.query
      ? ((e = () => {
          (d.query.invalidate(Ue, l), d.query.invalidate(He, l));
        }),
        (n[11] = l),
        (n[12] = d.query),
        (n[13] = e))
      : (e = n[13]);
    let t;
    (n[14] !== ae || n[15] !== e
      ? ((t = (0, $.jsx)(Ve, { loading: ae, onRetry: e })), (n[14] = ae), (n[15] = e), (n[16] = t))
      : (t = n[16]),
      (P = t));
  } else if (S == null || b == null) {
    let e;
    (n[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(Fe, {
          children: (0, $.jsx)(s, {
            id: `workspaceAgents.sharing.loading`,
            defaultMessage: `Loading access…`,
            description: `Status while loading a Workspace Agent's sharing settings`,
          }),
        })),
        (n[17] = e))
      : (e = n[17]),
      (P = e));
  } else {
    let e;
    n[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(s, {
          id: `workspaceAgents.sharing.generalAccess`,
          defaultMessage: `General access`,
          description: `Label for the setting controlling workspace-wide access to an agent`,
        })),
        (n[18] = e))
      : (e = n[18]);
    let i = !D || w,
      a;
    n[19] === O
      ? (a = n[20])
      : ((a = O
          ? (0, $.jsx)(s, {
              id: `workspaceAgents.sharing.workspaceLink`,
              defaultMessage: `Anyone in the workspace with the link`,
              description: `Access option allowing members of the owning workspace to use an agent through its link`,
            })
          : (0, $.jsx)(s, {
              id: `workspaceAgents.sharing.invited`,
              defaultMessage: `Only those invited`,
              description: `Access option limiting an agent to its owner and people or groups with explicit access`,
            })),
        (n[19] = O),
        (n[20] = a));
    let o;
    n[21] !== i || n[22] !== a
      ? ((o = (0, $.jsx)(t, { color: `ghostSecondary`, disabled: i, children: a })),
        (n[21] = i),
        (n[22] = a),
        (n[23] = o))
      : (o = n[23]);
    let c = !D || w,
      l;
    n[24] === N ? (l = n[25]) : ((l = () => N(!1)), (n[24] = N), (n[25] = l));
    let u;
    n[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, $.jsx)(s, {
          id: `workspaceAgents.sharing.invited`,
          defaultMessage: `Only those invited`,
          description: `Access option limiting an agent to its owner and people or groups with explicit access`,
        })),
        (n[26] = u))
      : (u = n[26]);
    let d;
    n[27] !== c || n[28] !== l
      ? ((d = (0, $.jsx)(ee.Item, { disabled: c, onSelect: l, children: u })),
        (n[27] = c),
        (n[28] = l),
        (n[29] = d))
      : (d = n[29]);
    let te = !D || w,
      p;
    n[30] !== k || n[31] !== N ? ((p = () => N(!0, k)), (n[30] = k), (n[31] = N), (n[32] = p)) : (p = n[32]);
    let m;
    n[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((m = (0, $.jsx)(s, {
          id: `workspaceAgents.sharing.workspaceLink`,
          defaultMessage: `Anyone in the workspace with the link`,
          description: `Access option allowing members of the owning workspace to use an agent through its link`,
        })),
        (n[33] = m))
      : (m = n[33]);
    let h;
    n[34] !== te || n[35] !== p
      ? ((h = (0, $.jsx)(ee.Item, { disabled: te, onSelect: p, children: m })),
        (n[34] = te),
        (n[35] = p),
        (n[36] = h))
      : (h = n[36]);
    let g;
    n[37] !== h || n[38] !== o || n[39] !== d
      ? ((g = (0, $.jsx)(E, {
          variant: `stacked`,
          label: e,
          control: (0, $.jsxs)(r, { align: `end`, triggerButton: o, children: [d, h] }),
        })),
        (n[37] = h),
        (n[38] = o),
        (n[39] = d),
        (n[40] = g))
      : (g = n[40]);
    let _;
    n[41] !== D || n[42] !== y || n[43] !== f || n[44] !== w || n[45] !== O || n[46] !== k || n[47] !== N
      ? ((_ = O
          ? (0, $.jsx)(E, {
              label: (0, $.jsx)(s, {
                id: `workspaceAgents.sharing.directory`,
                defaultMessage: `List in workspace directory`,
                description: `Setting that makes an agent discoverable in the workspace agent directory`,
              }),
              description: (0, $.jsx)(s, {
                id: `workspaceAgents.sharing.directoryDescription`,
                defaultMessage: `Help people in your workspace find this agent`,
                description: `Description of listing a shared agent in the workspace directory`,
              }),
              control: (0, $.jsx)(ue, {
                disabled: k || y === !0,
                tooltipContent: (0, $.jsx)(s, {
                  id: `workspaceAgents.sharing.directoryPermissionRequired`,
                  defaultMessage: `You don’t have permission to list agents in the workspace directory`,
                  description: `Explains why directory listing is unavailable when the workspace does not grant publishing permission`,
                }),
                children: (0, $.jsx)(re, {
                  checked: k,
                  disabled: !D || w || (!k && y !== !0),
                  onChange: (e) => N(!0, e),
                  ariaLabel: f.formatMessage({
                    id: `workspaceAgents.sharing.directory`,
                    defaultMessage: `List in workspace directory`,
                    description: `Setting that makes an agent discoverable in the workspace agent directory`,
                  }),
                }),
              }),
            })
          : null),
        (n[41] = D),
        (n[42] = y),
        (n[43] = f),
        (n[44] = w),
        (n[45] = O),
        (n[46] = k),
        (n[47] = N),
        (n[48] = _))
      : (_ = n[48]);
    let ne;
    (n[49] !== g || n[50] !== _
      ? ((ne = (0, $.jsxs)(se, { children: [g, _] })), (n[49] = g), (n[50] = _), (n[51] = ne))
      : (ne = n[51]),
      (P = ne));
  }
  let pe, me;
  n[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, $.jsx)(s, {
        id: `workspaceAgents.sharing.title`,
        defaultMessage: `Share agent`,
        description: `Title of the dialog for managing access to a Workspace Agent`,
      })),
      (me = (0, $.jsx)(s, {
        id: `workspaceAgents.sharing.description`,
        defaultMessage: `Access changes apply immediately to the published agent`,
        description: `Explains that sharing changes take effect without publishing unsaved agent edits`,
      })),
      (n[52] = pe),
      (n[53] = me))
    : ((pe = n[52]), (me = n[53]));
  let F;
  n[54] === f
    ? (F = n[55])
    : ((F = f.formatMessage({
        id: `workspaceAgents.sharing.copyLink`,
        defaultMessage: `Copy link`,
        description: `Button that copies the link to a published Workspace Agent`,
      })),
      (n[54] = f),
      (n[55] = F));
  let he = !T || b?.agent.latest_published_version_id == null,
    I;
  n[56] !== l || n[57] !== b?.agent.viewer_capability || n[58] !== O || n[59] !== k || n[60] !== d
    ? ((I = () => (
        J(d, {
          agentId: l,
          actionType: K.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SHARE_LINK_COPY,
          source: G.CHATGPT_AGENT_BUILDER_SOURCE_SHARE_MODAL,
          page: q.CHATGPT_AGENT_BUILDER_PAGE_EDITOR_INSTRUCTIONS,
          isPublished: !0,
          isReadonly:
            b?.agent.viewer_capability !== `hermes_admin` && b?.agent.viewer_capability !== `hermes_write`,
          isPreviewVersion: !1,
          share: { visibility: Q(O, k) },
        }),
        ce(fe(l))
      )),
      (n[56] = l),
      (n[57] = b?.agent.viewer_capability),
      (n[58] = O),
      (n[59] = k),
      (n[60] = d),
      (n[61] = I))
    : (I = n[61]);
  let _e;
  n[62] !== F || n[63] !== he || n[64] !== I
    ? ((_e = (0, $.jsx)(A, { buttonText: F, isDisabled: he, onCopy: I })),
      (n[62] = F),
      (n[63] = he),
      (n[64] = I),
      (n[65] = _e))
    : (_e = n[65]);
  let L;
  n[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, $.jsx)(s, {
        id: `workspaceAgents.sharing.done`,
        defaultMessage: `Done`,
        description: `Button that closes a Workspace Agent's sharing settings`,
      })),
      (n[66] = L))
    : (L = n[66]);
  let R;
  n[67] !== w || n[68] !== u
    ? ((R = (0, $.jsx)(t, { color: `secondary`, disabled: w, onClick: u, children: L })),
      (n[67] = w),
      (n[68] = u),
      (n[69] = R))
    : (R = n[69]);
  let z;
  n[70] !== _e || n[71] !== R
    ? ((z = (0, $.jsxs)($.Fragment, { children: [_e, R] })), (n[70] = _e), (n[71] = R), (n[72] = z))
    : (z = n[72]);
  let B;
  n[73] === P ? (B = n[74]) : ((B = (0, $.jsx)(ie, { children: P })), (n[73] = P), (n[74] = B));
  let ve;
  n[75] !== a ||
  n[76] !== o ||
  n[77] !== l ||
  n[78] !== b ||
  n[79] !== x ||
  n[80] !== v ||
  n[81] !== C ||
  n[82] !== S ||
  n[83] !== h ||
  n[84] !== T
    ? ((ve =
        T && v === !0 && S != null && C == null && b != null && x == null
          ? (0, $.jsx)(Ge, { accountId: a, accountUserId: o, agentId: l, portalContainer: h })
          : null),
      (n[75] = a),
      (n[76] = o),
      (n[77] = l),
      (n[78] = b),
      (n[79] = x),
      (n[80] = v),
      (n[81] = C),
      (n[82] = S),
      (n[83] = h),
      (n[84] = T),
      (n[85] = ve))
    : (ve = n[85]);
  let V;
  n[86] !== le || n[87] !== T
    ? ((V =
        le && T
          ? (0, $.jsx)(ie, {
              children: (0, $.jsx)(m, {
                type: `error`,
                content: (0, $.jsx)(s, {
                  id: `workspaceAgents.sharing.saveFailed`,
                  defaultMessage: `Couldn’t update access. Check the current settings and try again`,
                  description: `Error when saving an agent's access settings fails`,
                }),
              }),
            })
          : null),
      (n[86] = le),
      (n[87] = T),
      (n[88] = V))
    : (V = n[88]);
  let be;
  return (
    n[89] !== w || n[90] !== u || n[91] !== z || n[92] !== B || n[93] !== ve || n[94] !== V
      ? ((be = (0, $.jsxs)(W, {
          onClose: u,
          isDismissalDisabled: w,
          onPortalContainerChange: g,
          title: pe,
          subtitle: me,
          footer: z,
          children: [B, ve, V],
        })),
        (n[89] = w),
        (n[90] = u),
        (n[91] = z),
        (n[92] = B),
        (n[93] = ve),
        (n[94] = V),
        (n[95] = be))
      : (be = n[95]),
    be
  );
}
function Q(e, t) {
  return t
    ? Re.CHATGPT_AGENT_BUILDER_SHARE_VISIBILITY_DIRECTORY
    : e
      ? Re.CHATGPT_AGENT_BUILDER_SHARE_VISIBILITY_WORKSPACE
      : Re.CHATGPT_AGENT_BUILDER_SHARE_VISIBILITY_PRIVATE;
}
var et, tt, $;
function nt() {
  return (nt = e(() => {
    ((et = de()),
      Ie(),
      f(),
      (tt = j()),
      C(),
      U(),
      o(),
      T(),
      _(),
      Pe(),
      y(),
      n(),
      u(),
      v(),
      O(),
      S(),
      l(),
      je(),
      x(),
      B(),
      ze(),
      Y(),
      Be(),
      I(),
      Qe(),
      X(),
      ($ = k()));
  }))();
}
nt();
export { $e as WorkspaceAgentSharingDialog };
//# sourceMappingURL=dialog-9ae4b0577fa0.js.map
