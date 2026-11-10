import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Fat as n,
  Pat as r,
  Pxt as i,
  Zxt as a,
  qxt as o,
  wot as s,
} from "./app-shared-bbfeca5e5737.js";
import {
  BPr as c,
  GMr as l,
  QMr as u,
  VPr as d,
  YMr as f,
  aIr as p,
  cct as m,
  fct as h,
  iPr as g,
  lct as _,
  oIr as v,
  sPr as y,
  tNr as b,
} from "./app-initial-5851df3f6cb1.js";
import {
  _ as x,
  a as S,
  b as C,
  d as w,
  f as T,
  i as E,
  l as D,
  n as O,
  o as k,
  t as A,
} from "./builder-analytics-f0ccbf8827ee.js";
import { n as j, r as M } from "./apps-query-410f7e452f43.js";
import { a as N, l as P } from "./query-b1ceced7057f.js";
import { i as F, t as I } from "./workspace-agent-detail-query-c8301c5fcc0a.js";
import { a as L, r as R } from "./model-80ecbc793fd2.js";
function z(e, t, n, r, i = `published`) {
  let a = S.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_UPDATE;
  n == null
    ? (a = S.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_DELETE)
    : (r ?? (a = S.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_CREATE));
  let o = n?.rules[0]?.freq,
    s = T.CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_CUSTOM;
  o === `hourly`
    ? (s = T.CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_HOURLY)
    : (o === `daily` || o === `weekly`) && (s = T.CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_WEEKLY);
  let c =
    n == null
      ? { scheduleTriggerId: r }
      : {
          scheduleTriggerId: r,
          scheduleType: s,
          channelType:
            n.channel_binding?.type === `slack`
              ? k.CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_SLACK
              : k.CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_CHATGPT,
        };
  return B(e, t, { actionType: a, schedule: c }, i);
}
function B(e, t, n, r) {
  let i = Date.now(),
    a = `analytics-id-${crypto.randomUUID()}`,
    o = (o, s) => {
      V(
        e,
        t,
        {
          ...n,
          actionResult: o,
          actionInstanceId: a,
          request: s ? { durationMs: Math.max(0, Date.now() - i) } : void 0,
        },
        r,
      );
    };
  return (
    o(E.CHATGPT_AGENT_BUILDER_ACTION_RESULT_STARTED, !1),
    (e) =>
      o(
        e ? E.CHATGPT_AGENT_BUILDER_ACTION_RESULT_SUCCEEDED : E.CHATGPT_AGENT_BUILDER_ACTION_RESULT_FAILED,
        !0,
      )
  );
}
function V(e, t, n, r = `published`) {
  O(e, {
    ...n,
    agentId: t,
    page:
      r === `draft`
        ? D.CHATGPT_AGENT_BUILDER_PAGE_EDITOR_INSTRUCTIONS
        : D.CHATGPT_AGENT_BUILDER_PAGE_AGENT_DIRECTORY_DETAIL,
    source: x.CHATGPT_AGENT_BUILDER_SOURCE_SCHEDULES_MODAL,
    resourceType: n.schedule == null ? void 0 : w.CHATGPT_AGENT_BUILDER_RESOURCE_TYPE_SCHEDULE,
  });
}
function H() {
  return (H = e(() => {
    (C(), A());
  }))();
}
var U, W;
function G() {
  return (G = e(() => {
    (i(),
      b(),
      p(),
      c(),
      s(),
      n(),
      y(),
      m(),
      M(),
      N(),
      I(),
      H(),
      L(),
      (U = a(t, (e, { get: t }) => {
        let n = t(l),
          i = t(f);
        return {
          enabled: n != null && i != null && t(_) === !0,
          queryKey: [`workspace-agent`, `schedules`, n, e, i],
          queryFn: ({ signal: t }) => {
            if (n == null || i == null) throw Error(`Missing workspace identity`);
            return g.safeGet(`/hermes/agent/{agent_id}/triggers`, {
              parameters: { path: { agent_id: e }, query: { scope: `all_accessible` } },
              signal: t,
              expectedIdentity: { accountId: n, userId: i },
            });
          },
          staleTime: r.ONE_MINUTE,
          retry: !1,
        };
      })),
      (W = o(t, (e, { scope: t }) => ({
        mutationFn: async (n) => {
          let { accountUserId: r, authenticatedUserId: i } = t.get(u),
            a = () => {
              n.signal?.throwIfAborted();
              let e = t.get(u);
              if (
                e.authenticatedAccountId !== n.accountId ||
                e.accountUserId !== r ||
                e.authenticatedUserId !== i ||
                t.get(_) !== !0
              )
                throw Error(
                  t
                    .get(v)
                    .formatMessage({
                      id: `workspaceAgents.schedules.errors.accountChanged`,
                      defaultMessage: `Your account or workspace changed. Reopen the agent and try again`,
                      description: `Error when the authenticated user or workspace changes while editing a schedule`,
                    }),
                );
            };
          a();
          let o = n.versionScope ?? `published`,
            s = o === `draft` ? await t.query.getOrFetch(P, e) : await t.query.getOrFetch(F, e);
          a();
          let c = t.get(h) === !0;
          if (r == null || i == null)
            throw Error(
              t
                .get(v)
                .formatMessage({
                  id: `workspaceAgents.schedules.errors.identityMissing`,
                  defaultMessage: `Your workspace identity could not be loaded. Try again`,
                  description: `Error when the current workspace user identity is unavailable`,
                }),
            );
          if (n.resource != null) {
            let e = R({
              resource: n.resource,
              userId: r,
              agentCreatorId: s.agent.creator_id,
              canAccess: !0,
              canShare: c,
            });
            if (`delete` in n ? !e.canDelete : !e.canEdit)
              throw Error(
                t
                  .get(v)
                  .formatMessage({
                    id: `workspaceAgents.schedules.errors.permission`,
                    defaultMessage: `You do not have permission to change this automation`,
                    description: `Error when the user cannot modify an agent schedule`,
                  }),
              );
          }
          if (
            !(`delete` in n) &&
            n.trigger.channel_binding?.type === `slack` &&
            (!c || s.agent.creator_id !== r)
          )
            throw Error(
              t
                .get(v)
                .formatMessage({
                  id: `workspaceAgents.schedules.errors.slackPermission`,
                  defaultMessage: `Only the agent owner can manage Slack automations`,
                  description: `Error when a user cannot manage an agent schedule in Slack`,
                }),
            );
          if (n.resource == null) {
            if (
              o === `draft` &&
              s.agent.viewer_capability !== `hermes_admin` &&
              s.agent.viewer_capability !== `hermes_write`
            )
              throw Error(
                t
                  .get(v)
                  .formatMessage({
                    id: `workspaceAgents.schedules.errors.draftPermission`,
                    defaultMessage: `You do not have permission to configure this agent draft`,
                    description: `Error when creating an automation from an agent draft without editor access`,
                  }),
              );
            if (o === `published` && s.latest_published_version == null)
              throw Error(
                t
                  .get(v)
                  .formatMessage({
                    id: `workspaceAgents.schedules.errors.unpublished`,
                    defaultMessage: `Publish the agent before adding an automation`,
                    description: `Error when scheduling an agent that has never been published`,
                  }),
              );
            let r = await t.queryClient.fetchQuery(
              j({ accountId: n.accountId, userId: i, agentId: e, versionScope: o }),
            );
            if (
              (a(),
              r.some(
                (e) =>
                  e.auth_type === `PERSONAL` &&
                  [`missing_link`, `missing_actions`, `needs_reconnect`, `scope_upgrade_required`].includes(
                    e.link_status,
                  ),
              ))
            )
              throw Error(
                t
                  .get(v)
                  .formatMessage({
                    id: `workspaceAgents.schedules.errors.connections`,
                    defaultMessage: `Connect or reconnect this agent's apps before creating an automation`,
                    description: `Error when required personal app connections prevent schedule creation`,
                  }),
              );
          }
          a();
          let l = z(t, e, `delete` in n ? null : n.trigger, n.resource?.id, o),
            f = null;
          try {
            (`delete` in n
              ? await g.safeDelete(`/hermes/agent/{agent_id}/triggers/{trigger_id}`, {
                  assertRequestCurrent: a,
                  signal: n.signal,
                  expectedIdentity: { accountId: n.accountId, userId: i },
                  parameters: { path: { agent_id: e, trigger_id: n.resource.id } },
                })
              : (f =
                  n.resource == null
                    ? await g.safePost(`/hermes/agent/{agent_id}/triggers`, {
                        assertRequestCurrent: a,
                        signal: n.signal,
                        expectedIdentity: { accountId: n.accountId, userId: i },
                        parameters: { path: { agent_id: e } },
                        requestBody: { trigger: n.trigger },
                      })
                    : await g.safePatch(`/hermes/agent/{agent_id}/triggers/{trigger_id}`, {
                        assertRequestCurrent: a,
                        signal: n.signal,
                        expectedIdentity: { accountId: n.accountId, userId: i },
                        parameters: { path: { agent_id: e, trigger_id: n.resource.id } },
                        requestBody: { trigger: n.trigger },
                      })),
              l(!0));
          } catch (e) {
            throw (l(!1), e);
          }
          return (
            await Promise.all([
              d(t.queryClient, [`workspace-agent`, `schedules`, n.accountId, e]),
              d(t.queryClient, [`workspace-agent`, `activity`, n.accountId, e]),
            ]),
            f
          );
        },
      }))));
  }))();
}
export { V as a, H as i, U as n, B as o, G as r, W as t };
//# sourceMappingURL=query-89ce93dd0b9b.js.map
