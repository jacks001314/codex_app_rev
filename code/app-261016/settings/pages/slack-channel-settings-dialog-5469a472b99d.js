import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  FBt as i,
  HO as a,
  IO as o,
  JO as s,
  KO as c,
  LNt as l,
  LO as ee,
  PBt as u,
  Qst as d,
  RO as te,
  WO as f,
  XOt as p,
  Y3 as ne,
  YOt as m,
  Z3 as h,
  ZSt as g,
  ck as _,
  ew as v,
  iCt as y,
  nCt as b,
  qO as re,
  rk as x,
  sw as S,
  tk as C,
  tkt as w,
  uw as T,
  vD as E,
  yD as D,
  zO as O,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as k,
  FF as A,
  QLn as ie,
  RF as j,
  VRr as M,
  _lt as N,
  lBr as P,
  plt as F,
  uBr as ae,
  wLr as I,
} from "./app-initial-ad16eaadf81f.js";
import { a as oe, b as se, g as ce, l as le, s as ue } from "./builder-analytics-f4d73421cfb8.js";
import { a as de, g as fe, l as L, m as R, y as pe } from "./query-28e51b942d45.js";
import { n as me, r as he } from "./query-4ad900313a0a.js";
import { n as z, t as B } from "./slack-channel-analytics-964fdbf2070d.js";
function V(e) {
  let n = (0, _e.c)(106),
    { deployment: r, canEdit: i, showReplyReview: a, notice: s, onClose: l, onSave: u, onInteraction: d } = e,
    f = (0, ve.useId)(),
    [p, m] = (0, ve.useState)(r.slack_trigger),
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    T,
    E,
    D,
    k,
    A,
    j,
    M;
  if (n[0] !== i || n[1] !== r || n[2] !== u || n[3] !== p) {
    let e = fe(r);
    ((b = i && !!p.link.id),
      (S = p.webhook_name === `mention` ? `mention` : `message`),
      (M = p.params?.thread_followup_mode === `all_replies` ? `all_replies` : `mentions`),
      (x = p.params?.review_replies_before_posting === !0 ? `review` : `immediate`),
      (y = o),
      (k = `form`),
      (A = `viewport`),
      n[20] !== b || n[21] !== r || n[22] !== u || n[23] !== p
        ? ((j = (e) => {
            (e.preventDefault(), e.stopPropagation(), b && u({ ...r, slack_trigger: p }));
          }),
          (n[20] = b),
          (n[21] = r),
          (n[22] = u),
          (n[23] = p),
          (n[24] = j))
        : (j = n[24]),
      (v = O),
      (_ = te),
      (g = re),
      (h = w),
      (T = `workspaceAgents.builder.slack.editTitle`),
      (E = `Configure {channelName}`),
      (D = `Title of the settings dialog for a Slack channel connected to a Workspace Agent. channelName is the channel name including its leading # symbol.`),
      (C = e.name.startsWith(`#`) ? e.name : `#${e.name}`),
      (n[0] = i),
      (n[1] = r),
      (n[2] = u),
      (n[3] = p),
      (n[4] = h),
      (n[5] = g),
      (n[6] = _),
      (n[7] = v),
      (n[8] = y),
      (n[9] = b),
      (n[10] = x),
      (n[11] = S),
      (n[12] = C),
      (n[13] = T),
      (n[14] = E),
      (n[15] = D),
      (n[16] = k),
      (n[17] = A),
      (n[18] = j),
      (n[19] = M));
  } else
    ((h = n[4]),
      (g = n[5]),
      (_ = n[6]),
      (v = n[7]),
      (y = n[8]),
      (b = n[9]),
      (x = n[10]),
      (S = n[11]),
      (C = n[12]),
      (T = n[13]),
      (E = n[14]),
      (D = n[15]),
      (k = n[16]),
      (A = n[17]),
      (j = n[18]),
      (M = n[19]));
  let N;
  n[25] === C ? (N = n[26]) : ((N = { channelName: C }), (n[25] = C), (n[26] = N));
  let P;
  n[27] !== h || n[28] !== T || n[29] !== E || n[30] !== D || n[31] !== N
    ? ((P = (0, U.jsx)(h, { id: T, defaultMessage: E, description: D, values: N })),
      (n[27] = h),
      (n[28] = T),
      (n[29] = E),
      (n[30] = D),
      (n[31] = N),
      (n[32] = P))
    : (P = n[32]);
  let F;
  n[33] !== g || n[34] !== P
    ? ((F = (0, U.jsx)(g, { children: P })), (n[33] = g), (n[34] = P), (n[35] = F))
    : (F = n[35]);
  let ae;
  n[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, U.jsx)(c, {
        children: (0, U.jsx)(w, {
          id: `workspaceAgents.builder.slack.settingsDraftNotice`,
          defaultMessage: `Save and publish the agent draft to make channel changes live`,
          description: `Explains that applying Slack channel settings updates the agent draft, which must then be saved and published.`,
        }),
      })),
      (n[36] = ae))
    : (ae = n[36]);
  let I;
  n[37] !== _ || n[38] !== F
    ? ((I = (0, U.jsx)(_, { title: F, subtitle: ae })), (n[37] = _), (n[38] = F), (n[39] = I))
    : (I = n[39]);
  let se = !i,
    le;
  n[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = (0, U.jsx)(w, {
        id: `workspaceAgents.builder.slack.responsePrompt`,
        defaultMessage: `When should your agent respond?`,
        description: `Label for choosing when a Workspace Agent responds to top-level messages in a Slack channel.`,
      })),
      (n[40] = le))
    : (le = n[40]);
  let de;
  n[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = { message: W.relevantMessages, mention: W.mentions }), (n[41] = de))
    : (de = n[41]);
  let L;
  n[42] !== i || n[43] !== r.deployment_id || n[44] !== d || n[45] !== S || n[46] !== p
    ? ((L = (e) => {
        if (!i || e === S || (e !== `message` && e !== `mention`)) return;
        let t = { ...p.params };
        (e === `message` ? (t.only_initial_message = !0) : delete t.only_initial_message,
          m({ ...p, webhook_name: e, params: t }),
          d?.({
            actionType: oe.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_RESPONSE_MODE_CHANGE,
            slack: {
              slackDeploymentId: r.deployment_id,
              responseMode:
                e === `message`
                  ? ce.CHATGPT_AGENT_BUILDER_SLACK_RESPONSE_MODE_ALL_MESSAGES
                  : ce.CHATGPT_AGENT_BUILDER_SLACK_RESPONSE_MODE_MENTIONS,
            },
          }));
      }),
      (n[42] = i),
      (n[43] = r.deployment_id),
      (n[44] = d),
      (n[45] = S),
      (n[46] = p),
      (n[47] = L))
    : (L = n[47]);
  let R;
  n[48] !== S || n[49] !== se || n[50] !== L
    ? ((R = (0, U.jsx)(ge, { disabled: se, label: le, value: S, options: de, onChange: L })),
      (n[48] = S),
      (n[49] = se),
      (n[50] = L),
      (n[51] = R))
    : (R = n[51]);
  let pe = !i,
    me;
  n[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, U.jsx)(w, {
        id: `workspaceAgents.builder.slack.followupPrompt`,
        defaultMessage: `When should your agent follow up in threads?`,
        description: `Label for choosing when a Workspace Agent replies to later messages in a Slack thread.`,
      })),
      (n[52] = me))
    : (me = n[52]);
  let he;
  n[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = { all_replies: W.relevantReplies, mentions: W.mentionedReplies }), (n[53] = he))
    : (he = n[53]);
  let z;
  n[54] !== i || n[55] !== p
    ? ((z = (e) => {
        i &&
          (e === `all_replies` || e === `mentions`) &&
          m({ ...p, params: { ...p.params, thread_followup_mode: e } });
      }),
      (n[54] = i),
      (n[55] = p),
      (n[56] = z))
    : (z = n[56]);
  let B;
  n[57] !== pe || n[58] !== z || n[59] !== M
    ? ((B = (0, U.jsx)(ge, { disabled: pe, label: me, value: M, options: he, onChange: z })),
      (n[57] = pe),
      (n[58] = z),
      (n[59] = M),
      (n[60] = B))
    : (B = n[60]);
  let V;
  n[61] !== i || n[62] !== x || n[63] !== a || n[64] !== p
    ? ((V = a
        ? (0, U.jsx)(ge, {
            disabled: !i,
            label: (0, U.jsx)(w, {
              id: `workspaceAgents.builder.slack.reviewPrompt`,
              defaultMessage: `Should agent replies be reviewed before posting?`,
              description: `Label for choosing whether the person who triggered a Workspace Agent in Slack reviews its reply before it is posted.`,
            }),
            value: x,
            options: { immediate: W.immediateReplies, review: W.reviewReplies },
            onChange: (e) => {
              if (i && (e === `review` || e === `immediate`)) {
                let t = { ...p.params };
                (e === `review`
                  ? (t.review_replies_before_posting = !0)
                  : delete t.review_replies_before_posting,
                  m({ ...p, params: t }));
              }
            },
          })
        : null),
      (n[61] = i),
      (n[62] = x),
      (n[63] = a),
      (n[64] = p),
      (n[65] = V))
    : (V = n[65]);
  let H;
  n[66] !== R || n[67] !== B || n[68] !== V
    ? ((H = (0, U.jsxs)(t, { children: [R, B, V] })), (n[66] = R), (n[67] = B), (n[68] = V), (n[69] = H))
    : (H = n[69]);
  let G;
  n[70] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, U.jsx)(w, {
        id: `workspaceAgents.builder.slack.instructions`,
        defaultMessage: `Channel instructions`,
        description: `Label for instructions that apply only when a Workspace Agent runs in this Slack channel.`,
      })),
      (n[70] = G))
    : (G = n[70]);
  let K;
  n[71] === f
    ? (K = n[72])
    : ((K = (0, U.jsx)(`label`, { htmlFor: f, className: `text-sm font-medium select-none`, children: G })),
      (n[71] = f),
      (n[72] = K));
  let ye = !i,
    q = p.instructions ?? ``,
    J;
  n[73] !== i || n[74] !== r.deployment_id || n[75] !== d || n[76] !== p
    ? ((J = (e) => {
        i &&
          (m({ ...p, instructions: e.target.value }),
          d?.({
            actionType: oe.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SLACK_CHANNEL_INSTRUCTIONS_EDIT,
            slack: { slackDeploymentId: r.deployment_id },
            editor: { field: ue.CHATGPT_AGENT_BUILDER_EDITABLE_FIELD_SLACK_CHANNEL_INSTRUCTIONS },
          }));
      }),
      (n[73] = i),
      (n[74] = r.deployment_id),
      (n[75] = d),
      (n[76] = p),
      (n[77] = J))
    : (J = n[77]);
  let Y;
  n[78] !== f || n[79] !== ye || n[80] !== q || n[81] !== J
    ? ((Y = (0, U.jsx)(ie, {
        id: f,
        name: `slackChannelInstructions`,
        rows: 6,
        disabled: ye,
        value: q,
        onChange: J,
      })),
      (n[78] = f),
      (n[79] = ye),
      (n[80] = q),
      (n[81] = J),
      (n[82] = Y))
    : (Y = n[82]);
  let X;
  n[83] !== v || n[84] !== s || n[85] !== I || n[86] !== H || n[87] !== K || n[88] !== Y
    ? ((X = (0, U.jsxs)(v, { children: [I, s, H, K, Y] })),
      (n[83] = v),
      (n[84] = s),
      (n[85] = I),
      (n[86] = H),
      (n[87] = K),
      (n[88] = Y),
      (n[89] = X))
    : (X = n[89]);
  let be;
  n[90] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, U.jsx)(w, {
        id: `workspaceAgents.builder.slack.cancelSettings`,
        defaultMessage: `Cancel`,
        description: `Button that closes Slack channel settings and discards changes made in the dialog.`,
      })),
      (n[90] = be))
    : (be = n[90]);
  let Z;
  n[91] === l
    ? (Z = n[92])
    : ((Z = (0, U.jsx)(ne, { color: `secondary`, type: `button`, onClick: l, children: be })),
      (n[91] = l),
      (n[92] = Z));
  let xe = !b,
    Se;
  n[93] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (0, U.jsx)(w, {
        id: `workspaceAgents.builder.slack.applySettings`,
        defaultMessage: `Apply to draft`,
        description: `Button that copies the edited Slack channel settings to the agent draft. The agent must still be saved and published.`,
      })),
      (n[93] = Se))
    : (Se = n[93]);
  let Q;
  n[94] === xe
    ? (Q = n[95])
    : ((Q = (0, U.jsx)(ne, { color: `primary`, type: `submit`, disabled: xe, children: Se })),
      (n[94] = xe),
      (n[95] = Q));
  let $;
  n[96] !== Z || n[97] !== Q
    ? (($ = (0, U.jsxs)(ee, { children: [Z, Q] })), (n[96] = Z), (n[97] = Q), (n[98] = $))
    : ($ = n[98]);
  let Ce;
  return (
    n[99] !== y || n[100] !== X || n[101] !== $ || n[102] !== k || n[103] !== A || n[104] !== j
      ? ((Ce = (0, U.jsxs)(y, { as: k, size: A, onSubmit: j, children: [X, $] })),
        (n[99] = y),
        (n[100] = X),
        (n[101] = $),
        (n[102] = k),
        (n[103] = A),
        (n[104] = j),
        (n[105] = Ce))
      : (Ce = n[105]),
    Ce
  );
}
function ge(e) {
  let t = (0, _e.c)(8),
    { disabled: n, label: r, value: i, options: a, onChange: o } = e,
    s;
  t[0] !== n || t[1] !== o || t[2] !== a || t[3] !== i
    ? ((s = (e) =>
        (0, U.jsx)(C, {
          align: `end`,
          contentWidth: `menuWide`,
          disabled: n,
          triggerButton: (0, U.jsx)(A, { ...e, disabled: n, children: (0, U.jsx)(w, { ...a[i] }) }),
          children: (0, U.jsx)(x.RadioGroup, {
            value: i,
            onValueChange: o,
            children: Object.entries(a).map(H),
          }),
        })),
      (t[0] = n),
      (t[1] = o),
      (t[2] = a),
      (t[3] = i),
      (t[4] = s))
    : (s = t[4]);
  let c;
  return (
    t[5] !== r || t[6] !== s
      ? ((c = (0, U.jsx)(S, { variant: `stacked`, label: r, control: s })),
        (t[5] = r),
        (t[6] = s),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function H(e) {
  let [t, n] = e;
  return (0, U.jsx)(x.RadioItem, { value: t, children: (0, U.jsx)(w, { ...n }) }, t);
}
var _e, ve, U, W;
function G() {
  return (G = e(() => {
    ((_e = u()),
      se(),
      (ve = i()),
      p(),
      h(),
      s(),
      a(),
      _(),
      k(),
      T(),
      j(),
      v(),
      pe(),
      (U = l()),
      (W = m({
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
  let t = (0, ye.c)(35),
    { agentId: r, isPublished: i, canManage: a, deployment: o, onClose: s, onSave: c } = e,
    l = n(d),
    ee = y(M).accountUserId,
    u = y(N),
    { data: te, error: p, refetch: m } = b(L, r),
    { data: h, error: g, refetch: _ } = b(me, r),
    v = b(ae, `hermes-slack-ephemeral-messages`),
    re = a && u === !0 && te?.agent.viewer_capability === `hermes_admin`,
    x = te?.agent.creator_id,
    S;
  t[0] !== o || t[1] !== re || t[2] !== x || t[3] !== h || t[4] !== ee
    ? ((S = R({ deployment: o, canManage: re, userId: ee, creatorId: x, triggers: h })),
      (t[0] = o),
      (t[1] = re),
      (t[2] = x),
      (t[3] = h),
      (t[4] = ee),
      (t[5] = S))
    : (S = t[5]);
  let C = S,
    T;
  if (!C) {
    if (g != null || p != null) {
      let e;
      t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(w, {
            id: `workspaceAgents.builder.slack.settingsLoadError`,
            defaultMessage: `Couldn’t check channel permissions`,
            description: `Error shown when the agent or schedules needed to check whether a user can edit a Slack channel could not load.`,
          })),
          (t[6] = e))
        : (e = t[6]);
      let n;
      t[7] !== _ || t[8] !== m
        ? ((n = () => {
            (m(), _());
          }),
          (t[7] = _),
          (t[8] = m),
          (t[9] = n))
        : (n = t[9]);
      let r;
      t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, q.jsx)(w, {
            id: `workspaceAgents.builder.slack.retrySettings`,
            defaultMessage: `Retry`,
            description: `Button to retry loading the permissions needed to edit a Slack channel.`,
          })),
          (t[10] = r))
        : (r = t[10]);
      let i;
      (t[11] === n
        ? (i = t[12])
        : ((i = (0, q.jsxs)(q.Fragment, {
            children: [e, (0, q.jsx)(ne, { color: `secondary`, type: `button`, onClick: n, children: r })],
          })),
          (t[11] = n),
          (t[12] = i)),
        (T = i));
    } else if (u == null || te == null || h == null) {
      let e;
      (t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(w, {
            id: `workspaceAgents.builder.slack.settingsLoading`,
            defaultMessage: `Checking channel permissions…`,
            description: `Status shown while the agent and automation data needed to edit a Slack channel is loading.`,
          })),
          (t[13] = e))
        : (e = t[13]),
        (T = e));
    } else {
      let e;
      (t[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(w, {
            id: `workspaceAgents.builder.slack.settingsUnavailable`,
            defaultMessage: `Channel settings are available to owners with sharing permission. Channels with automations can only be changed by the agent’s creator.`,
            description: `Explains why Slack channel settings are read-only when the viewer cannot manage the channel. The creator is the person who originally created the agent.`,
          })),
          (t[14] = e))
        : (e = t[14]),
        (T = e));
    }
  }
  let D;
  t[15] === s
    ? (D = t[16])
    : ((D = (e) => {
        e || s();
      }),
      (t[15] = s),
      (t[16] = D));
  let O;
  t[17] !== r || t[18] !== C || t[19] !== i || t[20] !== l
    ? ((O = (e) => z(l, r, i, { ...e, isReadonly: !C, page: le.CHATGPT_AGENT_BUILDER_PAGE_CHANNEL_SLACK })),
      (t[17] = r),
      (t[18] = C),
      (t[19] = i),
      (t[20] = l),
      (t[21] = O))
    : (O = t[21]);
  let k;
  t[22] === T
    ? (k = t[23])
    : ((k = T == null ? void 0 : (0, q.jsx)(E, { type: `warning`, content: T })), (t[22] = T), (t[23] = k));
  let A;
  t[24] !== C || t[25] !== o || t[26] !== s || t[27] !== c || t[28] !== v || t[29] !== O || t[30] !== k
    ? ((A = (0, q.jsx)(V, {
        deployment: o,
        canEdit: C,
        showReplyReview: v,
        onClose: s,
        onSave: c,
        onInteraction: O,
        notice: k,
      })),
      (t[24] = C),
      (t[25] = o),
      (t[26] = s),
      (t[27] = c),
      (t[28] = v),
      (t[29] = O),
      (t[30] = k),
      (t[31] = A))
    : (A = t[31]);
  let ie;
  return (
    t[32] !== D || t[33] !== A
      ? ((ie = (0, q.jsx)(f, { open: !0, onOpenChange: D, children: A })),
        (t[32] = D),
        (t[33] = A),
        (t[34] = ie))
      : (ie = t[34]),
    ie
  );
}
var ye, q;
function J() {
  return (J = e(() => {
    ((ye = u()), se(), g(), p(), I(), D(), h(), s(), r(), P(), F(), he(), de(), pe(), B(), G(), (q = l()));
  }))();
}
J();
export { K as WorkspaceAgentSlackChannelSettingsDialog };
//# sourceMappingURL=slack-channel-settings-dialog-5469a472b99d.js.map
