import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  AO as r,
  CO as i,
  Cot as a,
  GE as o,
  IDt as s,
  Ixt as c,
  JC as l,
  Pxt as u,
  TO as d,
  Vxt as f,
  WE as ee,
  _O as te,
  cO as ne,
  fO as p,
  gO as re,
  iw as m,
  jDt as h,
  lO as ie,
  mO as g,
  oO as ae,
  qC as oe,
  sO as se,
  t3 as _,
  tw as v,
  vO as y,
  vzt as b,
  wot as x,
  xMt as S,
  yzt as C,
  zxt as w,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as T,
  EPn as E,
  OPr as D,
  QMr as O,
  QP as k,
  cct as A,
  fct as j,
  kPr as M,
  tF as ce,
  tNr as N,
} from "./app-initial-5851df3f6cb1.js";
import { a as le, b as ue, g as de, l as fe, s as pe } from "./builder-analytics-f0ccbf8827ee.js";
import { a as me, g as he, l as P, m as F, y as I } from "./query-b1ceced7057f.js";
import { n as L, r as R } from "./query-89ce93dd0b9b.js";
import { n as z, t as B } from "./slack-channel-analytics-fa07bf345ea8.js";
function V(e) {
  let n = (0, _e.c)(106),
    { deployment: r, canEdit: i, showReplyReview: a, notice: o, onClose: c, onSave: l, onInteraction: u } = e,
    d = (0, ve.useId)(),
    [f, ee] = (0, ve.useState)(r.slack_trigger),
    p,
    m,
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    D,
    O,
    k;
  if (n[0] !== i || n[1] !== r || n[2] !== l || n[3] !== f) {
    let e = he(r);
    ((v = i && !!f.link.id),
      (b = f.webhook_name === `mention` ? `mention` : `message`),
      (k = f.params?.thread_followup_mode === `all_replies` ? `all_replies` : `mentions`),
      (y = f.params?.review_replies_before_posting === !0 ? `review` : `immediate`),
      (_ = ae),
      (T = `form`),
      (D = `viewport`),
      n[20] !== v || n[21] !== r || n[22] !== l || n[23] !== f
        ? ((O = (e) => {
            (e.preventDefault(), e.stopPropagation(), v && l({ ...r, slack_trigger: f }));
          }),
          (n[20] = v),
          (n[21] = r),
          (n[22] = l),
          (n[23] = f),
          (n[24] = O))
        : (O = n[24]),
      (g = ie),
      (h = ne),
      (m = te),
      (p = s),
      (S = `workspaceAgents.builder.slack.editTitle`),
      (C = `Configure {channelName}`),
      (w = `Title of the settings dialog for a Slack channel connected to a Workspace Agent. channelName is the channel name including its leading # symbol.`),
      (x = e.name.startsWith(`#`) ? e.name : `#${e.name}`),
      (n[0] = i),
      (n[1] = r),
      (n[2] = l),
      (n[3] = f),
      (n[4] = p),
      (n[5] = m),
      (n[6] = h),
      (n[7] = g),
      (n[8] = _),
      (n[9] = v),
      (n[10] = y),
      (n[11] = b),
      (n[12] = x),
      (n[13] = S),
      (n[14] = C),
      (n[15] = w),
      (n[16] = T),
      (n[17] = D),
      (n[18] = O),
      (n[19] = k));
  } else
    ((p = n[4]),
      (m = n[5]),
      (h = n[6]),
      (g = n[7]),
      (_ = n[8]),
      (v = n[9]),
      (y = n[10]),
      (b = n[11]),
      (x = n[12]),
      (S = n[13]),
      (C = n[14]),
      (w = n[15]),
      (T = n[16]),
      (D = n[17]),
      (O = n[18]),
      (k = n[19]));
  let A;
  n[25] === x ? (A = n[26]) : ((A = { channelName: x }), (n[25] = x), (n[26] = A));
  let j;
  n[27] !== p || n[28] !== S || n[29] !== C || n[30] !== w || n[31] !== A
    ? ((j = (0, U.jsx)(p, { id: S, defaultMessage: C, description: w, values: A })),
      (n[27] = p),
      (n[28] = S),
      (n[29] = C),
      (n[30] = w),
      (n[31] = A),
      (n[32] = j))
    : (j = n[32]);
  let M;
  n[33] !== m || n[34] !== j
    ? ((M = (0, U.jsx)(m, { children: j })), (n[33] = m), (n[34] = j), (n[35] = M))
    : (M = n[35]);
  let ce;
  n[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = (0, U.jsx)(re, {
        children: (0, U.jsx)(s, {
          id: `workspaceAgents.builder.slack.settingsDraftNotice`,
          defaultMessage: `Save and publish the agent draft to make channel changes live`,
          description: `Explains that applying Slack channel settings updates the agent draft, which must then be saved and published.`,
        }),
      })),
      (n[36] = ce))
    : (ce = n[36]);
  let N;
  n[37] !== h || n[38] !== M
    ? ((N = (0, U.jsx)(h, { title: M, subtitle: ce })), (n[37] = h), (n[38] = M), (n[39] = N))
    : (N = n[39]);
  let ue = !i,
    fe;
  n[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, U.jsx)(s, {
        id: `workspaceAgents.builder.slack.responsePrompt`,
        defaultMessage: `When should your agent respond?`,
        description: `Label for choosing when a Workspace Agent responds to top-level messages in a Slack channel.`,
      })),
      (n[40] = fe))
    : (fe = n[40]);
  let me;
  n[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = { message: W.relevantMessages, mention: W.mentions }), (n[41] = me))
    : (me = n[41]);
  let P;
  n[42] !== i || n[43] !== r.deployment_id || n[44] !== u || n[45] !== b || n[46] !== f
    ? ((P = (e) => {
        if (!i || e === b || (e !== `message` && e !== `mention`)) return;
        let t = { ...f.params };
        (e === `message` ? (t.only_initial_message = !0) : delete t.only_initial_message,
          ee({ ...f, webhook_name: e, params: t }),
          u?.({
            actionType: le.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_RESPONSE_MODE_CHANGE,
            slack: {
              slackDeploymentId: r.deployment_id,
              responseMode:
                e === `message`
                  ? de.CHATGPT_AGENT_BUILDER_SLACK_RESPONSE_MODE_ALL_MESSAGES
                  : de.CHATGPT_AGENT_BUILDER_SLACK_RESPONSE_MODE_MENTIONS,
            },
          }));
      }),
      (n[42] = i),
      (n[43] = r.deployment_id),
      (n[44] = u),
      (n[45] = b),
      (n[46] = f),
      (n[47] = P))
    : (P = n[47]);
  let F;
  n[48] !== b || n[49] !== ue || n[50] !== P
    ? ((F = (0, U.jsx)(ge, { disabled: ue, label: fe, value: b, options: me, onChange: P })),
      (n[48] = b),
      (n[49] = ue),
      (n[50] = P),
      (n[51] = F))
    : (F = n[51]);
  let I = !i,
    L;
  n[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, U.jsx)(s, {
        id: `workspaceAgents.builder.slack.followupPrompt`,
        defaultMessage: `When should your agent follow up in threads?`,
        description: `Label for choosing when a Workspace Agent replies to later messages in a Slack thread.`,
      })),
      (n[52] = L))
    : (L = n[52]);
  let R;
  n[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = { all_replies: W.relevantReplies, mentions: W.mentionedReplies }), (n[53] = R))
    : (R = n[53]);
  let z;
  n[54] !== i || n[55] !== f
    ? ((z = (e) => {
        i &&
          (e === `all_replies` || e === `mentions`) &&
          ee({ ...f, params: { ...f.params, thread_followup_mode: e } });
      }),
      (n[54] = i),
      (n[55] = f),
      (n[56] = z))
    : (z = n[56]);
  let B;
  n[57] !== I || n[58] !== z || n[59] !== k
    ? ((B = (0, U.jsx)(ge, { disabled: I, label: L, value: k, options: R, onChange: z })),
      (n[57] = I),
      (n[58] = z),
      (n[59] = k),
      (n[60] = B))
    : (B = n[60]);
  let V;
  n[61] !== i || n[62] !== y || n[63] !== a || n[64] !== f
    ? ((V = a
        ? (0, U.jsx)(ge, {
            disabled: !i,
            label: (0, U.jsx)(s, {
              id: `workspaceAgents.builder.slack.reviewPrompt`,
              defaultMessage: `Should agent replies be reviewed before posting?`,
              description: `Label for choosing whether the person who triggered a Workspace Agent in Slack reviews its reply before it is posted.`,
            }),
            value: y,
            options: { immediate: W.immediateReplies, review: W.reviewReplies },
            onChange: (e) => {
              if (i && (e === `review` || e === `immediate`)) {
                let t = { ...f.params };
                (e === `review`
                  ? (t.review_replies_before_posting = !0)
                  : delete t.review_replies_before_posting,
                  ee({ ...f, params: t }));
              }
            },
          })
        : null),
      (n[61] = i),
      (n[62] = y),
      (n[63] = a),
      (n[64] = f),
      (n[65] = V))
    : (V = n[65]);
  let H;
  n[66] !== F || n[67] !== B || n[68] !== V
    ? ((H = (0, U.jsxs)(oe, { children: [F, B, V] })), (n[66] = F), (n[67] = B), (n[68] = V), (n[69] = H))
    : (H = n[69]);
  let G;
  n[70] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, U.jsx)(s, {
        id: `workspaceAgents.builder.slack.instructions`,
        defaultMessage: `Channel instructions`,
        description: `Label for instructions that apply only when a Workspace Agent runs in this Slack channel.`,
      })),
      (n[70] = G))
    : (G = n[70]);
  let K;
  n[71] === d
    ? (K = n[72])
    : ((K = (0, U.jsx)(`label`, { htmlFor: d, className: `text-sm font-medium select-none`, children: G })),
      (n[71] = d),
      (n[72] = K));
  let ye = !i,
    q = f.instructions ?? ``,
    J;
  n[73] !== i || n[74] !== r.deployment_id || n[75] !== u || n[76] !== f
    ? ((J = (e) => {
        i &&
          (ee({ ...f, instructions: e.target.value }),
          u?.({
            actionType: le.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_CHANNEL_INSTRUCTIONS_EDIT,
            slack: { slackDeploymentId: r.deployment_id },
            editor: { field: pe.CHATGPT_AGENT_BUILDER_EDITABLE_FIELD_SLACK_CHANNEL_INSTRUCTIONS },
          }));
      }),
      (n[73] = i),
      (n[74] = r.deployment_id),
      (n[75] = u),
      (n[76] = f),
      (n[77] = J))
    : (J = n[77]);
  let Y;
  n[78] !== d || n[79] !== ye || n[80] !== q || n[81] !== J
    ? ((Y = (0, U.jsx)(E, {
        id: d,
        name: `slackChannelInstructions`,
        rows: 6,
        disabled: ye,
        value: q,
        onChange: J,
      })),
      (n[78] = d),
      (n[79] = ye),
      (n[80] = q),
      (n[81] = J),
      (n[82] = Y))
    : (Y = n[82]);
  let X;
  n[83] !== g || n[84] !== o || n[85] !== N || n[86] !== H || n[87] !== K || n[88] !== Y
    ? ((X = (0, U.jsxs)(g, { children: [N, o, H, K, Y] })),
      (n[83] = g),
      (n[84] = o),
      (n[85] = N),
      (n[86] = H),
      (n[87] = K),
      (n[88] = Y),
      (n[89] = X))
    : (X = n[89]);
  let be;
  n[90] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, U.jsx)(s, {
        id: `workspaceAgents.builder.slack.cancelSettings`,
        defaultMessage: `Cancel`,
        description: `Button that closes Slack channel settings and discards changes made in the dialog.`,
      })),
      (n[90] = be))
    : (be = n[90]);
  let Z;
  n[91] === c
    ? (Z = n[92])
    : ((Z = (0, U.jsx)(t, { color: `secondary`, type: `button`, onClick: c, children: be })),
      (n[91] = c),
      (n[92] = Z));
  let xe = !v,
    Se;
  n[93] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (0, U.jsx)(s, {
        id: `workspaceAgents.builder.slack.applySettings`,
        defaultMessage: `Apply to draft`,
        description: `Button that copies the edited Slack channel settings to the agent draft. The agent must still be saved and published.`,
      })),
      (n[93] = Se))
    : (Se = n[93]);
  let Q;
  n[94] === xe
    ? (Q = n[95])
    : ((Q = (0, U.jsx)(t, { color: `primary`, type: `submit`, disabled: xe, children: Se })),
      (n[94] = xe),
      (n[95] = Q));
  let $;
  n[96] !== Z || n[97] !== Q
    ? (($ = (0, U.jsxs)(se, { children: [Z, Q] })), (n[96] = Z), (n[97] = Q), (n[98] = $))
    : ($ = n[98]);
  let Ce;
  return (
    n[99] !== _ || n[100] !== X || n[101] !== $ || n[102] !== T || n[103] !== D || n[104] !== O
      ? ((Ce = (0, U.jsxs)(_, { as: T, size: D, onSubmit: O, children: [X, $] })),
        (n[99] = _),
        (n[100] = X),
        (n[101] = $),
        (n[102] = T),
        (n[103] = D),
        (n[104] = O),
        (n[105] = Ce))
      : (Ce = n[105]),
    Ce
  );
}
function ge(e) {
  let t = (0, _e.c)(8),
    { disabled: n, label: r, value: a, options: o, onChange: c } = e,
    l;
  t[0] !== n || t[1] !== c || t[2] !== o || t[3] !== a
    ? ((l = (e) =>
        (0, U.jsx)(i, {
          align: `end`,
          contentWidth: `menuWide`,
          disabled: n,
          triggerButton: (0, U.jsx)(k, { ...e, disabled: n, children: (0, U.jsx)(s, { ...o[a] }) }),
          children: (0, U.jsx)(d.RadioGroup, {
            value: a,
            onValueChange: c,
            children: Object.entries(o).map(H),
          }),
        })),
      (t[0] = n),
      (t[1] = c),
      (t[2] = o),
      (t[3] = a),
      (t[4] = l))
    : (l = t[4]);
  let u;
  return (
    t[5] !== r || t[6] !== l
      ? ((u = (0, U.jsx)(v, { variant: `stacked`, label: r, control: l })),
        (t[5] = r),
        (t[6] = l),
        (t[7] = u))
      : (u = t[7]),
    u
  );
}
function H(e) {
  let [t, n] = e;
  return (0, U.jsx)(d.RadioItem, { value: t, children: (0, U.jsx)(s, { ...n }) }, t);
}
var _e, ve, U, W;
function G() {
  return (G = e(() => {
    ((_e = b()),
      ue(),
      (ve = C()),
      h(),
      _(),
      y(),
      p(),
      r(),
      T(),
      m(),
      ce(),
      l(),
      I(),
      (U = S()),
      (W = n({
        relevantMessages: {
          id: `workspaceAgents.builder.slack.relevantMessages`,
          defaultMessage: `To relevant messages in the channel`,
          description: `Option allowing a Workspace Agent to respond to relevant top-level Slack messages without an explicit mention.`,
        },
        mentions: {
          id: `workspaceAgents.builder.slack.mentions`,
          defaultMessage: `Only when @mentioned`,
          description: `Option requiring a direct mention before a Workspace Agent responds to a top-level Slack message. Keep the @ symbol.`,
        },
        relevantReplies: {
          id: `workspaceAgents.builder.slack.relevantReplies`,
          defaultMessage: `To relevant replies`,
          description: `Option allowing a Workspace Agent to follow up on relevant later messages in a Slack thread without another mention.`,
        },
        mentionedReplies: {
          id: `workspaceAgents.builder.slack.mentionedReplies`,
          defaultMessage: `Only to replies with an @mention`,
          description: `Option requiring later messages in a Slack thread to mention the Workspace Agent before it replies. Keep the @ symbol.`,
        },
        immediateReplies: {
          id: `workspaceAgents.builder.slack.immediateReplies`,
          defaultMessage: `Post replies immediately`,
          description: `Option allowing a Workspace Agent to post a Slack reply without waiting for human review.`,
        },
        reviewReplies: {
          id: `workspaceAgents.builder.slack.reviewReplies`,
          defaultMessage: `Review replies before posting`,
          description: `Option asking the Slack user who triggered a Workspace Agent to review its reply before it is posted.`,
        },
      })));
  }))();
}
function K(e) {
  let n = (0, ye.c)(35),
    { agentId: r, isPublished: i, canManage: o, deployment: l, onClose: u, onSave: d } = e,
    te = c(a),
    ne = f(O).accountUserId,
    p = f(j),
    { data: re, error: m, refetch: h } = w(P, r),
    { data: ie, error: ae, refetch: oe } = w(L, r),
    se = w(M, `hermes-slack-ephemeral-messages`),
    _ = o && p === !0 && re?.agent.viewer_capability === `hermes_admin`,
    v = re?.agent.creator_id,
    y;
  n[0] !== l || n[1] !== _ || n[2] !== v || n[3] !== ie || n[4] !== ne
    ? ((y = F({ deployment: l, canManage: _, userId: ne, creatorId: v, triggers: ie })),
      (n[0] = l),
      (n[1] = _),
      (n[2] = v),
      (n[3] = ie),
      (n[4] = ne),
      (n[5] = y))
    : (y = n[5]);
  let b = y,
    x;
  if (!b) {
    if (ae != null || m != null) {
      let e;
      n[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(s, {
            id: `workspaceAgents.builder.slack.settingsLoadError`,
            defaultMessage: `Couldn’t check channel permissions`,
            description: `Error shown when the agent or schedules needed to check whether a user can edit a Slack channel could not load.`,
          })),
          (n[6] = e))
        : (e = n[6]);
      let r;
      n[7] !== oe || n[8] !== h
        ? ((r = () => {
            (h(), oe());
          }),
          (n[7] = oe),
          (n[8] = h),
          (n[9] = r))
        : (r = n[9]);
      let i;
      n[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((i = (0, q.jsx)(s, {
            id: `workspaceAgents.builder.slack.retrySettings`,
            defaultMessage: `Retry`,
            description: `Button to retry loading the permissions needed to edit a Slack channel.`,
          })),
          (n[10] = i))
        : (i = n[10]);
      let a;
      (n[11] === r
        ? (a = n[12])
        : ((a = (0, q.jsxs)(q.Fragment, {
            children: [e, (0, q.jsx)(t, { color: `secondary`, type: `button`, onClick: r, children: i })],
          })),
          (n[11] = r),
          (n[12] = a)),
        (x = a));
    } else if (p == null || re == null || ie == null) {
      let e;
      (n[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(s, {
            id: `workspaceAgents.builder.slack.settingsLoading`,
            defaultMessage: `Checking channel permissions…`,
            description: `Status shown while the agent and automation data needed to edit a Slack channel is loading.`,
          })),
          (n[13] = e))
        : (e = n[13]),
        (x = e));
    } else {
      let e;
      (n[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(s, {
            id: `workspaceAgents.builder.slack.settingsUnavailable`,
            defaultMessage: `Channel settings are available to owners with sharing permission. Channels with automations can only be changed by the agent’s creator.`,
            description: `Explains why Slack channel settings are read-only when the viewer cannot manage the channel. The creator is the person who originally created the agent.`,
          })),
          (n[14] = e))
        : (e = n[14]),
        (x = e));
    }
  }
  let S;
  n[15] === u
    ? (S = n[16])
    : ((S = (e) => {
        e || u();
      }),
      (n[15] = u),
      (n[16] = S));
  let C;
  n[17] !== r || n[18] !== b || n[19] !== i || n[20] !== te
    ? ((C = (e) => z(te, r, i, { ...e, isReadonly: !b, page: fe.CHATGPT_AGENT_BUILDER_PAGE_CHANNEL_SLACK })),
      (n[17] = r),
      (n[18] = b),
      (n[19] = i),
      (n[20] = te),
      (n[21] = C))
    : (C = n[21]);
  let T;
  n[22] === x
    ? (T = n[23])
    : ((T = x == null ? void 0 : (0, q.jsx)(ee, { type: `warning`, content: x })), (n[22] = x), (n[23] = T));
  let E;
  n[24] !== b || n[25] !== l || n[26] !== u || n[27] !== d || n[28] !== se || n[29] !== C || n[30] !== T
    ? ((E = (0, q.jsx)(V, {
        deployment: l,
        canEdit: b,
        showReplyReview: se,
        onClose: u,
        onSave: d,
        onInteraction: C,
        notice: T,
      })),
      (n[24] = b),
      (n[25] = l),
      (n[26] = u),
      (n[27] = d),
      (n[28] = se),
      (n[29] = C),
      (n[30] = T),
      (n[31] = E))
    : (E = n[31]);
  let D;
  return (
    n[32] !== S || n[33] !== E
      ? ((D = (0, q.jsx)(g, { open: !0, onOpenChange: S, children: E })),
        (n[32] = S),
        (n[33] = E),
        (n[34] = D))
      : (D = n[34]),
    D
  );
}
var ye, q;
function J() {
  return (J = e(() => {
    ((ye = b()), ue(), u(), h(), N(), o(), _(), y(), x(), D(), A(), R(), me(), I(), B(), G(), (q = S()));
  }))();
}
J();
export { K as WorkspaceAgentSlackChannelSettingsDialog };
//# sourceMappingURL=slack-channel-settings-dialog-b68d469548d5.js.map
