import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $6 as t,
  $It as n,
  CPt as r,
  EPt as i,
  Kat as a,
  LLt as o,
  Q6 as ee,
  Rnt as te,
  SPt as ne,
  TLt as s,
  Z6 as c,
  a8 as re,
  c8 as l,
  e8 as u,
  i8 as ie,
  l8 as d,
  n8 as f,
  o8 as ae,
  pLt as p,
  qat as m,
  r8 as h,
  s8 as g,
  t8 as _,
  wLt as v,
  zLt as y,
} from "./app-shared-bbfeca5e5737.js";
import { QDr as b, XD as oe, XDr as se, YD as ce } from "./app-initial-5851df3f6cb1.js";
function x(e) {
  return J.get(e.node);
}
function le(e) {
  (J.set(e.node, crypto.randomUUID()),
    L({ scope: e, action: h.CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_ACTION_STARTED }));
}
function ue(e, t) {
  L({ scope: e, action: h.CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_ACTION_COMPLETED, selectedTask: t });
}
function S(e, t) {
  L({ scope: e, action: h.CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_ACTION_SKIPPED, selectedTask: t });
}
function C(e, t) {
  L({
    scope: e,
    action: h.CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_ACTION_FAILED,
    failureKind: f.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_START_FAILED,
    selectedTask: t,
  });
}
function w(e, t) {
  U({ scope: e, accessType: G(t), action: c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_STARTED, task: t });
}
function T(e, t, n = `task`) {
  U({
    scope: e,
    accessType: G(t),
    action:
      n === `capability`
        ? c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_REQUESTED
        : c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_REQUESTED,
    task: t,
  });
}
function E(e, t, n = `task`) {
  U({
    scope: e,
    accessType: G(t),
    action:
      n === `capability`
        ? c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_COMPLETED
        : c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_COMPLETED,
    task: t,
  });
}
function D(e, t) {
  U({ scope: e, accessType: G(t), action: c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_DENIED, task: t });
}
function O(e, t) {
  R(e, t, f.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_HOST_SERVICE_UNAVAILABLE);
}
function k(e, t) {
  R(e, t, f.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_PLUGIN_UNAVAILABLE);
}
function A(e, t, n = `task`) {
  R(e, t, f.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_REQUEST_FAILED, n);
}
function j(e, t, n) {
  let i = q.get(e.node);
  (i ?? ((i = new Set()), q.set(e.node, i)),
    !i.has(t) &&
      (i.add(t),
      r.info(`Conversational onboarding plugin task hidden`, { safe: { pluginName: n, task: t } }),
      k(e, t)));
}
function M(e, t, n) {
  W({
    scope: e,
    action:
      n?.isRevert === !0
        ? u.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_REVERT_STARTED
        : u.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_STARTED,
    task: t,
  });
}
function N(e, t, n) {
  W({
    scope: e,
    action:
      n?.isRevert === !0
        ? u.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_REVERT_COMPLETED
        : u.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_COMPLETED,
    task: t,
  });
}
function P(e, t, n) {
  W({
    scope: e,
    action:
      n?.isRevert === !0
        ? u.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_REVERT_FAILED
        : u.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_FAILED,
    failureKind: f.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_UNSPECIFIED,
    task: t,
  });
}
function F(e, t, n) {
  W({
    scope: e,
    action:
      n?.isRevert === !0
        ? u.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_REVERT_FAILED
        : u.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_FAILED,
    failureKind: f.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_START_FAILED,
    task: t,
  });
}
function I(e, t) {
  W({
    scope: e,
    action: u.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_FAILED,
    failureKind: f.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_COMPLETION_MISSING,
    task: t,
  });
}
function de(e, t) {
  W({ scope: e, action: u.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_CANCELLED, task: t });
}
function L({ scope: e, action: t, failureKind: n, selectedTask: r }) {
  b(e, ie, {
    action: t,
    failureKind: n,
    sourceAttributionId: x(e),
    taskId: r ?? void 0,
    taskType: r == null ? void 0 : K(r),
  });
}
function R(e, t, n, r = `task`) {
  U({
    scope: e,
    accessType: G(t),
    action:
      r === `capability`
        ? c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_FAILED
        : c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FAILED,
    failureKind: n,
    task: t,
  });
}
function z(e, t) {
  b(e, ae, {
    action: re.CODEX_CONVERSATIONAL_ONBOARDING_ROLE_ACTION_SELECTED,
    roleType: t,
    sourceAttributionId: x(e),
  });
}
function B(e, t) {
  b(e, l, {
    action: g.CODEX_CONVERSATIONAL_ONBOARDING_TASK_ACTION_SELECTED,
    sourceAttributionId: x(e),
    taskType: K(t),
    taskId: t,
  });
}
function V(e, t) {
  b(e, l, {
    action: g.CODEX_CONVERSATIONAL_ONBOARDING_TASK_ACTION_REVERT_CLICKED,
    sourceAttributionId: x(e),
    taskType: K(t),
    taskId: t,
  });
}
function H(e, n, r, i) {
  U({
    scope: e,
    accessType:
      n === `computer-history`
        ? t.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_COMPUTER_HISTORY
        : t.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_LOCAL_FILES,
    action: {
      requested: c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_REQUESTED,
      completed: c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_COMPLETED,
      denied: c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_DENIED,
      failed: c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_FAILED,
    }[r],
    failureKind:
      r === `failed` ? (i ?? f.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_REQUEST_FAILED) : void 0,
  });
}
function U({ scope: e, accessType: t, action: n, failureKind: r, task: i }) {
  b(e, ee, {
    accessType: t,
    action: n,
    failureKind: r,
    sourceAttributionId: x(e),
    taskId: i,
    taskType: i == null ? void 0 : K(i),
  });
}
function W({ scope: e, action: t, failureKind: n, task: r }) {
  b(e, _, { action: t, failureKind: n, sourceAttributionId: x(e), taskId: r, taskType: K(r) });
}
function G(e) {
  switch (e) {
    case `computer_use`:
      return t.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_COMPUTER_USE;
    case `desktop_note`:
      return t.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_DESKTOP;
    case `csv_chart`:
    case `data_science_csv_chart`:
      return t.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_CSV_PICKER;
    case `hold_next_free_hour`:
    case `hold_next_free_hour_personalized`:
      return t.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_CALENDAR_APP;
    case `send_message_to_self`:
    case `send_message_to_self_personalized`:
      return t.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_MESSAGING_APP;
    default:
      return t.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_UNSPECIFIED;
  }
}
function K(e) {
  switch (e) {
    case `computer_use`:
      return d.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_COMPUTER_USE;
    case `desktop_note`:
      return d.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_DESKTOP_NOTE;
    case `csv_chart`:
    case `data_science_csv_chart`:
      return d.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_CSV_CHART;
    case `hold_next_free_hour`:
    case `hold_next_free_hour_personalized`:
      return d.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_HOLD_NEXT_FREE_HOUR;
    case `send_message_to_self`:
    case `send_message_to_self_personalized`:
      return d.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_SEND_MESSAGE_TO_SELF;
    default:
      return d.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_UNSPECIFIED;
  }
}
var q, J;
function Y() {
  return (Y = e(() => {
    (te(), se(), ne(), (q = new WeakMap()), (J = new WeakMap()));
  }))();
}
async function fe({ scope: e, argumentsValue: t, conversationId: n, hostId: r }) {
  let i = a.conversationalOnboarding;
  if (i == null) return null;
  let o = await i.completeTask({ argumentsValue: t, conversationId: n, hostId: r });
  return o == null
    ? null
    : (o.completion.outcome === `completed`
        ? N(e, o.selectedTask, { isRevert: o.isRevert })
        : P(e, o.selectedTask, { isRevert: o.isRevert }),
      o.completion);
}
function pe(e) {
  if (e.tool !== `complete_conversational_onboarding_task` || e.status !== `completed`) return null;
  let t;
  if (e.type === `dynamicToolCall`) {
    if (e.namespace !== `codex_app` || e.success !== !0) return null;
    t = e.contentItems?.find((e) => e.type === `inputText`)?.text;
  } else {
    if (e.server !== `codex_app` || e.error != null || e.result == null) return null;
    for (let n of e.result.content) {
      let e = Q.safeParse(n);
      if (e.success) {
        t = e.data.text;
        break;
      }
    }
  }
  if (t == null) return null;
  try {
    let e = JSON.parse(t),
      n = Z.safeParse(e);
    return n.success ? n.data.result : null;
  } catch {
    return null;
  }
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    (oe(),
      i(),
      Y(),
      m(),
      (X = v({ outcome: n(`completed`), url: y() }).transform((e) => ({ ...e, output: `` }))),
      (Z = v({ accepted: n(!0), result: o([ce, X]) })),
      (Q = p({ type: n(`text`), text: s() })));
  }))();
}
export {
  C,
  B as E,
  S,
  V as T,
  M as _,
  Y as a,
  k as b,
  A as c,
  H as d,
  ue as f,
  F as g,
  I as h,
  x as i,
  T as l,
  N as m,
  $ as n,
  E as o,
  de as p,
  pe as r,
  D as s,
  fe as t,
  w as u,
  O as v,
  le as w,
  z as x,
  j as y,
};
//# sourceMappingURL=conversational-onboarding-task-completion-dynamic-tool-8504daf4bbb9.js.map
