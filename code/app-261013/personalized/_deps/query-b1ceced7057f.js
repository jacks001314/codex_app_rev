import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as n,
  Fat as r,
  HNt as i,
  Iat as a,
  Lat as o,
  Pat as s,
  Pxt as c,
  Zxt as l,
  _Nt as u,
  wot as d,
} from "./app-shared-bbfeca5e5737.js";
import {
  BPr as f,
  GMr as p,
  VPr as m,
  YMr as h,
  Ymr as g,
  cct as ee,
  ehr as _,
  fct as v,
  lct as y,
  tNr as b,
  uct as x,
} from "./app-initial-5851df3f6cb1.js";
import { r as S, t as te } from "./apps-query-410f7e452f43.js";
function ne(e) {
  let t = e.trim();
  return t.match(/(?:^|\/)([CDG][A-Z0-9]{8,})(?:[/?#]|$)/i)?.[1]?.toUpperCase() ?? t;
}
function re(e, t = !1) {
  let n = e
    .normalize(`NFKD`)
    .replaceAll(/[\u0300-\u036f]/g, ``)
    .replaceAll(/@/g, ``)
    .trim()
    .toLowerCase()
    .replaceAll(/['’]/g, ``);
  return t
    ? n
        .replaceAll(/[^a-z0-9]+/g, `-`)
        .replaceAll(/-+/g, `-`)
        .replaceAll(/^-+|-+$/g, ``) || `agent`
    : n.replaceAll(/[^a-z0-9_-]+/g, ``);
}
function C(e) {
  let t = e.slack_trigger.params,
    n = typeof t?.channel_id == `string` ? t.channel_id.trim().toUpperCase() : ``;
  return { id: n, name: (typeof t?.channel_name == `string` ? t.channel_name.trim() : ``) || n };
}
function w(e) {
  if (e.is_private == null) throw Error(`Slack join response is missing its channel visibility`);
  return e.is_private ? `private` : `public`;
}
function ie(e, t, n) {
  let r = e ?? [],
    i = t.channel_id.trim().toUpperCase(),
    a = w(t),
    o = t.channel_name?.trim(),
    s = r.find((e) => e.pending_deletion !== !0 && C(e).id === i);
  return s == null
    ? [
        ...r,
        {
          deployment_id: crypto.randomUUID(),
          pending_deletion: !1,
          slack_trigger: {
            type: `CONNECTOR`,
            connector_id: T,
            link: { id: n },
            webhook_name: `mention`,
            enabled: !0,
            required_actions: [
              `send_message`,
              `add_reaction`,
              `remove_reaction`,
              `get_thread`,
              `get_file`,
              `send_file`,
            ],
            params: {
              channel_id: i,
              ...(o ? { channel_name: o } : {}),
              channel_visibility: a,
              thread_followup_mode: `all_replies`,
            },
          },
        },
      ]
    : s.slack_trigger.enabled === !1
      ? r.map((e) =>
          e === s
            ? {
                ...e,
                slack_trigger: {
                  ...e.slack_trigger,
                  enabled: !0,
                  link: { id: n },
                  params: { ...e.slack_trigger.params, channel_name: o || null, channel_visibility: a },
                },
              }
            : e,
        )
      : r;
}
function ae({ deployment: e, canManage: t, userId: n, creatorId: r, triggers: i }) {
  return t
    ? (n != null && r === n) ||
        (i != null &&
          !i.some(
            ({ trigger: t }) =>
              t.type === `SCHEDULE` &&
              t.channel_binding?.type === `slack` &&
              t.channel_binding.link_id === e.slack_trigger.link.id &&
              t.channel_binding.channel_id === C(e).id,
          ))
    : !1;
}
var T;
function E() {
  return (E = e(() => {
    T = `connector_OdO9DCSRc2wYX4lGC3Ko7jbg5f7QpNum`;
  }))();
}
function D(e, t, n) {
  let r = e.latest_published_version,
    i = [];
  ((t.name.trim() !== (r?.name.trim() ?? ``) ||
    t.tagline.trim() !== (r?.tagline.trim() ?? ``) ||
    t.description !== (r?.description ?? ``)) &&
    i.push({ type: `profile`, change: `modified` }),
    (!(0, L.default)(j(t.modelSpec), j(r?.model_spec)) ||
      !(0, L.default)(
        (0, R.default)(t.tools, `connectors`),
        (0, R.default)(r?.config?.tools ?? {}, `connectors`),
      )) &&
      i.push({ type: `settings`, change: `modified` }),
    t.instructions !== (r?.config?.prompt ?? ``) && i.push({ type: `instructions`, change: `modified` }),
    (t.icon.name !== (r?.icon.name ?? `suitcase`) || t.icon.color !== (r?.icon.color ?? `purple`)) &&
      i.push({ type: `icon`, change: `modified`, icon: t.icon }),
    (n?.files || (e.draft_version.config?.file_tree_id ?? null) !== (r?.config?.file_tree_id ?? null)) &&
      i.push({ type: `files`, change: `modified` }));
  let a = (r?.starter_prompts ?? []).map(M),
    o = t.starterPrompts.map(M);
  if (!(0, L.default)(a, o)) {
    let e = Math.min(a.length, o.length),
      t = o.findIndex((t, n) => n < e && !(0, L.default)(t, a[n])),
      n = t >= 0 ? o[t] : (o[e] ?? a[e]),
      r = `modified`;
    (t < 0 && a.length !== o.length && (r = a.length < o.length ? `added` : `removed`),
      i.push({ type: `starters`, change: r, iconName: n?.icon ?? void 0 }));
  }
  let s = t.apiDeployments?.filter((e) => !e.pending_deletion),
    c = r?.config?.deployments?.api?.filter((e) => !e.pending_deletion),
    l = r?.config?.deployments?.slack?.filter((e) => !e.pending_deletion),
    u = t.slackDeployments?.filter((e) => !e.pending_deletion),
    d = k(
      l,
      u,
      (e) => e.deployment_id,
      (e, t) => (0, L.default)(I(e), I(t)),
    );
  for (let { id: e, before: t, after: n, change: r } of d) {
    let a = n ?? t;
    a != null && i.push({ type: `slack`, change: r, id: e, label: C(a).name });
  }
  for (let { id: e, change: t } of k(
    c,
    s,
    (e) => e.deployment_id,
    (e, t) => (0, L.default)(e.api_trigger, t.api_trigger),
  ))
    i.push({ type: `api`, change: t, id: e });
  let f = r?.config?.persistent_folder === `per_user`,
    p = t.persistentFolder === `per_user`;
  f !== p && i.push({ type: `memory`, change: p ? `added` : `removed` });
  let m = k(r?.config?.tools.connectors, t.tools.connectors ?? [], P, (e, t) => (0, L.default)(F(e), F(t)));
  for (let { id: e, before: t, after: n, change: r } of m.sort((e, t) => O(e.id, t.id))) {
    let a = n ?? t;
    a != null &&
      i.push({
        type: `connector`,
        change: r,
        id: e,
        label: a.server_label?.trim() || e,
        connectorId: te(a) ?? void 0,
      });
  }
  let h = k(
    r?.config?.skills,
    t.skills,
    (e) => e.id,
    (e, t) => !n?.skillIds.has(t.id) && (0, L.default)(N(e), N(t)),
  );
  for (let { id: e, before: t, after: n, change: r } of h.sort((e, t) => O(e.id, t.id))) {
    let a = n ?? t;
    a != null &&
      i.push({ type: `skill`, change: r, id: e, label: a.name.trim() || e, iconName: a.icon?.name });
  }
  return i;
}
function O(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function k(e, t, n, r) {
  let i = new Map(e?.map((e) => [n(e), e])),
    a = new Map(t?.map((e) => [n(e), e]));
  return [...new Set([...i.keys(), ...a.keys()])].flatMap((e) => {
    let t = i.get(e),
      n = a.get(e),
      o = A(t, n, r);
    return o == null ? [] : [{ id: e, before: t, after: n, change: o }];
  });
}
function A(e, t, n) {
  return e == null ? (t == null ? null : `added`) : t == null ? `removed` : n(e, t) ? null : `modified`;
}
function j(e) {
  return { name: e?.name, reasoning_effort: e?.reasoning_effort };
}
function M(e) {
  return {
    ...e,
    title: e.title.trim(),
    prompt: e.prompt.trim(),
    short_description: e.short_description?.trim() ?? ``,
  };
}
function N(e) {
  return {
    name: e.name.trim(),
    description: e.description.trim(),
    icon: e.icon ?? null,
    fileTreeId: `file_tree_id` in e ? (e.file_tree_id ?? ``) : ``,
    sharedSkillId: `chatgpt_skill_id` in e ? e.chatgpt_skill_id : ``,
  };
}
function P(e) {
  return e.connector_identifier.type === `CONNECTOR_ID`
    ? e.connector_identifier.connector_id
    : e.connector_identifier.server_url;
}
function F(e) {
  let t = e.auth,
    n = e.user_approvals,
    r =
      typeof n == `object` && n?.always?.tool_names != null
        ? [...new Set(n.always.tool_names)].sort()
        : void 0,
    i =
      typeof n == `object` && n?.never?.tool_names != null ? [...new Set(n.never.tool_names)].sort() : void 0,
    a = e.actions_constraints_configuration?.rules ?? [],
    o = `end_user_connection`,
    s;
  t.type === `LINK` &&
    ((s = t.link.id),
    (o = `oauth`),
    t.link.auth_type === `API_KEY`
      ? (o = `api_key`)
      : t.link.auth_type === `NONE` && ((o = `none`), (s = void 0)));
  let c = `always`;
  return (
    n === `always` || n === `never`
      ? (c = n)
      : (r != null || i != null) &&
        (c = {
          always: r == null ? void 0 : { tool_names: r },
          never: i == null ? void 0 : { tool_names: i },
        }),
    {
      authType: t.type === `LINK` && t.link.auth_type === `NONE` ? `NONE` : t.type,
      connectionType: o,
      linkId: s,
      actions: [...new Set(e.allowed_tools)].sort(),
      approvals: c,
      privacy: e.apps_privacy_control ?? null,
      rules:
        a.length === 0
          ? null
          : a.map((e) => ({
              id: e.id,
              name: e.name,
              constraints: (e.constraints ?? []).map((e) => ({
                action_name: e.action_name,
                parameter: e.parameter,
                constraint: e.constraint ?? {},
              })),
            })),
    }
  );
}
function I(e) {
  let t = (0, R.default)(e, `schedule_triggers`, `materialized_trigger_id`, `pending_deletion`),
    n = e.slack_trigger,
    r = n.params,
    i = r?.channel_visibility,
    a = typeof r?.channel_name == `string` && r.channel_name.trim().length > 0 ? `public` : `private`;
  return (
    (i === `private` || i === `public`) && (a = i),
    {
      ...t,
      slack_trigger: {
        ...n,
        enabled: n.enabled !== !1,
        instructions: n.instructions ?? ``,
        link: { id: n.link.id },
        params: {
          ...r,
          channel_name: C(e).name,
          channel_visibility: a,
          only_initial_message: r?.only_initial_message === !0,
          thread_followup_mode: r?.thread_followup_mode === `all_replies` ? `all_replies` : `mentions`,
        },
        required_actions: [...new Set(n.required_actions ?? [])].sort(),
      },
    }
  );
}
var L, R;
function z() {
  return (z = e(() => {
    ((L = t(i(), 1)), (R = t(u(), 1)), S(), E());
  }))();
}
function B() {
  return {
    name: ``,
    tagline: ``,
    description: ``,
    instructions: ``,
    skills: [],
    modelSpec: null,
    tools: { connectors: [] },
    icon: { name: `bloop`, color: `blue` },
    persistentFolder: void 0,
    starterPrompts: [],
    apiDeployments: void 0,
    slackDeployments: void 0,
  };
}
function V(e) {
  return {
    name: e.draft_version.name,
    tagline: e.draft_version.tagline,
    description: e.draft_version.description,
    instructions: e.draft_version.config?.prompt ?? ``,
    skills: e.draft_version.config?.skills ?? [],
    modelSpec: e.draft_version.model_spec,
    tools: e.draft_version.config?.tools ?? { connectors: [] },
    icon: e.draft_version.icon,
    persistentFolder: e.draft_version.config?.persistent_folder,
    starterPrompts: e.draft_version.starter_prompts,
    apiDeployments: e.draft_version.config?.deployments?.api,
    slackDeployments: e.draft_version.config?.deployments?.slack,
  };
}
async function H(e, t, n, r) {
  let i = K(e),
    a = () => {
      (n?.throwIfAborted(), q(e, i));
    };
  if ((a(), e.get(x) !== !0)) throw Error(`You do not have permission to build agents`);
  let o = { ...U(t), category: `general`, template_name: r },
    s = await g.safePost(`/hermes/agent`, {
      requestBody: o,
      expectedIdentity: i,
      signal: n,
      assertRequestCurrent: a,
    });
  return (a(), G(e, i, s.id, `create`, n));
}
async function oe(e, t, n, r, i = {}) {
  let a = K(e),
    o = () => {
      (i.signal?.throwIfAborted(), q(e, a));
    };
  o();
  let s = t.agent.id,
    c = await W(s, i.signal, a);
  if ((o(), r && e.get(x) !== !0)) throw Error(`You do not have permission to publish agents`);
  let l = t.draft_revision ?? null,
    u = c.draft_revision ?? null;
  if (l !== u) throw new Y(l, u);
  if (
    e.get(y) !== !0 ||
    (c.agent.viewer_capability !== `hermes_write` && c.agent.viewer_capability !== `hermes_admin`)
  )
    throw Error(`You do not have permission to edit this agent`);
  if (
    (!(0, J.default)(n.slackDeployments, t.draft_version.config?.deployments?.slack) ||
      !(0, J.default)(n.apiDeployments, t.draft_version.config?.deployments?.api)) &&
    (c.agent.viewer_capability !== `hermes_admin` || e.get(v) !== !0)
  )
    throw Error(`You do not have permission to add agent channels`);
  if (
    c.agent.viewer_capability !== `hermes_admin` &&
    !(0, J.default)(
      n.skills.filter((e) => `chatgpt_skill_id` in e),
      (t.draft_version.config?.skills ?? []).filter((e) => `chatgpt_skill_id` in e),
    )
  )
    throw Error(`You do not have permission to manage shared agent skills`);
  let d = se(c, n, i.fileTreeId);
  return (
    r
      ? await g.safePost(`/hermes/agent/{agent_id}/save_publish`, {
          parameters: { path: { agent_id: s } },
          expectedIdentity: a,
          assertRequestCurrent: o,
          signal: i.signal,
          requestBody: { ...d, publish_type: `changes`, changes_count: D(c, n).length },
        })
      : await g.safePost(`/hermes/agent/{agent_id}/save`, {
          parameters: { path: { agent_id: s } },
          expectedIdentity: a,
          assertRequestCurrent: o,
          signal: i.signal,
          requestBody: d,
        }),
    G(e, a, s, r ? `publish` : `save`, i.signal)
  );
}
function se(e, t, n = null) {
  let r = e.draft_version,
    i = r.config;
  return {
    ...U(t),
    category: r.category,
    deployments:
      t.slackDeployments == null && t.apiDeployments == null
        ? i?.deployments
        : {
            ...i?.deployments,
            slack: t.slackDeployments ?? i?.deployments?.slack,
            api: t.apiDeployments ?? i?.deployments?.api,
          },
    file_tree_id: n,
    expected_draft_revision: e.draft_revision ?? null,
  };
}
function U(e) {
  return {
    model_spec: e.modelSpec,
    name: e.name,
    prompt: e.instructions,
    skills: e.skills.map((e) =>
      `chatgpt_skill_id` in e
        ? { ...e, type: `chatgpt_skill_ref` }
        : { id: e.id, type: `uploaded_skill`, icon: e.icon, file_tree_id: e.file_tree_id },
    ),
    description: e.description,
    tools: e.tools,
    icon: e.icon,
    tagline: e.tagline,
    starter_prompts: e.starterPrompts,
    ...(e.persistentFolder == null ? {} : { persistent_folder: e.persistentFolder }),
  };
}
function W(e, t, n) {
  return g.safeGet(`/hermes/agent/{agent_id}/builder-view`, {
    parameters: { path: { agent_id: e } },
    signal: t,
    expectedIdentity: n,
  });
}
async function G(e, t, n, r, i) {
  try {
    (await ce(e, t.accountId, n), i?.throwIfAborted(), q(e, t));
    let r = await W(n, i, t);
    return (q(e, t), i?.throwIfAborted(), e.query.setData(Z, n, r), r);
  } catch {
    return { agentId: n, operation: r };
  }
}
async function ce(e, t, n) {
  let r = [`workspace-agent`, `builder`, t, n];
  (await e.queryClient.cancelQueries({ queryKey: r, exact: !0 }),
    e.queryClient.invalidateQueries({ queryKey: r, refetchType: `none` }),
    a(r));
  for (let r of [
    [`workspace-agents`, t],
    [`workspace-agents`, `directory`, t],
    [`workspace-agent-pins`, t],
    [`workspace-agent`, `detail`, t, n],
    [`workspace-agent`, `published-versions`, t, n],
  ])
    m(e.queryClient, r);
}
function K(e) {
  let t = e.get(p),
    n = e.get(h);
  if (t == null || n == null) throw new X();
  return { accountId: t, userId: n };
}
function q(e, t) {
  if (e.get(p) !== t.accountId || e.get(h) !== t.userId) throw new X();
}
var J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((J = t(i(), 1)),
      c(),
      b(),
      _(),
      o(),
      f(),
      d(),
      r(),
      ee(),
      z(),
      (Y = class extends Error {
        expectedRevision;
        actualRevision;
        code = `workspace_agent_draft_conflict`;
        constructor(e, t) {
          (super(`This agent draft changed after it was loaded`),
            (this.expectedRevision = e),
            (this.actualRevision = t),
            (this.name = `WorkspaceAgentDraftConflictError`));
        }
      }),
      (X = class extends Error {
        code = `workspace_agent_account_changed`;
        constructor() {
          (super(`The active account changed during this agent request`),
            (this.name = `WorkspaceAgentAccountChangedError`));
        }
      }),
      (Z = l(n, (e, { get: t }) => {
        let n = t(p);
        return {
          enabled: n != null && t(y) === !0,
          queryKey: [`workspace-agent`, `builder`, n, e],
          queryFn: ({ signal: t }) => W(e, t),
          retry: !1,
          staleTime: s.ONE_MINUTE,
        };
      })),
      (Q = l(n, (e, { get: t }) => ({
        enabled: t(y) === !0,
        queryKey: [`workspace-agent`, `available-models`, e],
        queryFn: ({ signal: e }) => g.safeGet(`/hermes/models`, { signal: e }),
        retry: !1,
        staleTime: s.ONE_MINUTE,
      }))));
  }))();
}
export {
  w as _,
  $ as a,
  Q as c,
  z as d,
  T as f,
  C as g,
  ne as h,
  V as i,
  Z as l,
  ae as m,
  H as n,
  G as o,
  ie as p,
  B as r,
  oe as s,
  Y as t,
  D as u,
  re as v,
  E as y,
};
//# sourceMappingURL=query-b1ceced7057f.js.map
