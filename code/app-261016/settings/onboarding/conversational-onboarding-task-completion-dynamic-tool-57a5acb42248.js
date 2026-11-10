import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $8 as t,
  $Rt as n,
  BRt as r,
  HFt as i,
  J8 as a,
  Q8 as ee,
  RFt as o,
  Rrt as te,
  VRt as s,
  X8 as c,
  Y8 as ne,
  Z8 as l,
  a5 as u,
  ast as re,
  e5 as d,
  hRt as f,
  i5 as p,
  ist as m,
  kRt as h,
  n5 as g,
  o5 as _,
  r5 as v,
  t5 as ie,
  tzt as ae,
  zFt as oe,
} from "./app-shared-2feb3d4c6fcc.js";
import { AO as se, kO as ce, xMr as y, yMr as le } from "./app-initial-ad16eaadf81f.js";
function b(e) {
  return J.get(e.node);
}
function ue(e) {
  (J.set(e.node, crypto.randomUUID()),
    L({ scope: e, action: d.CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_ACTION_STARTED }));
}
function x(e, t) {
  L({ scope: e, action: d.CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_ACTION_COMPLETED, selectedTask: t });
}
function S(e, t) {
  L({ scope: e, action: d.CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_ACTION_SKIPPED, selectedTask: t });
}
function C(e, n) {
  L({
    scope: e,
    action: d.CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_ACTION_FAILED,
    failureKind: t.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_START_FAILED,
    selectedTask: n,
  });
}
function w(e, t) {
  U({ scope: e, accessType: G(t), action: a.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_STARTED, task: t });
}
function T(e, t, n = `task`) {
  U({
    scope: e,
    accessType: G(t),
    action:
      n === `capability`
        ? a.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_REQUESTED
        : a.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_REQUESTED,
    task: t,
  });
}
function E(e, t, n = `task`) {
  U({
    scope: e,
    accessType: G(t),
    action:
      n === `capability`
        ? a.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_COMPLETED
        : a.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_COMPLETED,
    task: t,
  });
}
function D(e, t) {
  U({ scope: e, accessType: G(t), action: a.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_DENIED, task: t });
}
function O(e, n) {
  R(e, n, t.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_HOST_SERVICE_UNAVAILABLE);
}
function k(e, n) {
  R(e, n, t.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_PLUGIN_UNAVAILABLE);
}
function A(e, n, r = `task`) {
  R(e, n, t.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_REQUEST_FAILED, r);
}
function j(e, t, n) {
  let r = q.get(e.node);
  (r ?? ((r = new Set()), q.set(e.node, r)),
    !r.has(t) &&
      (r.add(t),
      oe.info(`Conversational onboarding plugin task hidden`, { safe: { pluginName: n, task: t } }),
      k(e, t)));
}
function M(e, t, n) {
  W({
    scope: e,
    action:
      n?.isRevert === !0
        ? l.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_REVERT_STARTED
        : l.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_STARTED,
    task: t,
  });
}
function N(e, t, n) {
  W({
    scope: e,
    action:
      n?.isRevert === !0
        ? l.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_REVERT_COMPLETED
        : l.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_COMPLETED,
    task: t,
  });
}
function P(e, n, r) {
  W({
    scope: e,
    action:
      r?.isRevert === !0
        ? l.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_REVERT_FAILED
        : l.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_FAILED,
    failureKind: t.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_UNSPECIFIED,
    task: n,
  });
}
function F(e, n, r) {
  W({
    scope: e,
    action:
      r?.isRevert === !0
        ? l.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_REVERT_FAILED
        : l.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_FAILED,
    failureKind: t.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_START_FAILED,
    task: n,
  });
}
function de(e, n) {
  W({
    scope: e,
    action: l.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_FAILED,
    failureKind: t.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_COMPLETION_MISSING,
    task: n,
  });
}
function I(e, t) {
  W({ scope: e, action: l.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_CANCELLED, task: t });
}
function L({ scope: e, action: t, failureKind: n, selectedTask: r }) {
  y(e, ie, {
    action: t,
    failureKind: n,
    sourceAttributionId: b(e),
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
        ? a.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_FAILED
        : a.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FAILED,
    failureKind: n,
    task: t,
  });
}
function z(e, t) {
  y(e, v, {
    action: g.CODEX_CONVERSATIONAL_ONBOARDING_ROLE_ACTION_SELECTED,
    roleType: t,
    sourceAttributionId: b(e),
  });
}
function B(e, t) {
  y(e, u, {
    action: p.CODEX_CONVERSATIONAL_ONBOARDING_TASK_ACTION_SELECTED,
    sourceAttributionId: b(e),
    taskType: K(t),
    taskId: t,
  });
}
function V(e, t) {
  y(e, u, {
    action: p.CODEX_CONVERSATIONAL_ONBOARDING_TASK_ACTION_REVERT_CLICKED,
    sourceAttributionId: b(e),
    taskType: K(t),
    taskId: t,
  });
}
function H(e, n, r, i) {
  U({
    scope: e,
    accessType:
      n === `computer-history`
        ? c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_COMPUTER_HISTORY
        : c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_LOCAL_FILES,
    action: {
      requested: a.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_REQUESTED,
      completed: a.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_COMPLETED,
      denied: a.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_DENIED,
      failed: a.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_FAILED,
    }[r],
    failureKind:
      r === `failed` ? (i ?? t.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_REQUEST_FAILED) : void 0,
  });
}
function U({ scope: e, accessType: t, action: n, failureKind: r, task: i }) {
  y(e, ne, {
    accessType: t,
    action: n,
    failureKind: r,
    sourceAttributionId: b(e),
    taskId: i,
    taskType: i == null ? void 0 : K(i),
  });
}
function W({ scope: e, action: t, failureKind: n, task: r }) {
  y(e, ee, { action: t, failureKind: n, sourceAttributionId: b(e), taskId: r, taskType: K(r) });
}
function G(e) {
  switch (e) {
    case `computer_use`:
      return c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_COMPUTER_USE;
    case `desktop_note`:
      return c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_DESKTOP;
    case `csv_chart`:
    case `data_science_csv_chart`:
      return c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_CSV_PICKER;
    case `hold_next_free_hour`:
    case `hold_next_free_hour_personalized`:
      return c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_CALENDAR_APP;
    case `send_message_to_self`:
    case `send_message_to_self_personalized`:
      return c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_MESSAGING_APP;
    default:
      return c.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_UNSPECIFIED;
  }
}
function K(e) {
  switch (e) {
    case `computer_use`:
      return _.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_COMPUTER_USE;
    case `desktop_note`:
      return _.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_DESKTOP_NOTE;
    case `csv_chart`:
    case `data_science_csv_chart`:
      return _.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_CSV_CHART;
    case `hold_next_free_hour`:
    case `hold_next_free_hour_personalized`:
      return _.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_HOLD_NEXT_FREE_HOUR;
    case `send_message_to_self`:
    case `send_message_to_self_personalized`:
      return _.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_SEND_MESSAGE_TO_SELF;
    default:
      return _.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_UNSPECIFIED;
  }
}
var q, J;
function Y() {
  return (Y = e(() => {
    (te(), le(), o(), (q = new WeakMap()), (J = new WeakMap()));
  }))();
}
async function fe({ scope: e, argumentsValue: t, conversationId: n, hostId: r }) {
  let i = m.conversationalOnboarding;
  if (i == null) return null;
  let a = await i.completeTask({ argumentsValue: t, conversationId: n, hostId: r });
  return a == null
    ? null
    : (a.completion.outcome === `completed`
        ? N(e, a.selectedTask, { isRevert: a.isRevert })
        : P(e, a.selectedTask, { isRevert: a.isRevert }),
      a.completion);
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
    (se(),
      i(),
      Y(),
      re(),
      (X = r({ outcome: f(`completed`), url: ae() }).transform((e) => ({ ...e, output: `` }))),
      (Z = r({ accepted: f(!0), result: n([ce, X]) })),
      (Q = h({ type: f(`text`), text: s() })));
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
  x as f,
  F as g,
  de as h,
  b as i,
  T as l,
  N as m,
  $ as n,
  E as o,
  I as p,
  pe as r,
  D as s,
  fe as t,
  w as u,
  O as v,
  ue as w,
  z as x,
  j as y,
};
//# sourceMappingURL=conversational-onboarding-task-completion-dynamic-tool-57a5acb42248.js.map
