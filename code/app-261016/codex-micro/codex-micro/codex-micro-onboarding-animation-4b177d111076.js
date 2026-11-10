import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, CCt as n, Qst as r, ZSt as i, kCt as a } from "./app-shared-2feb3d4c6fcc.js";
import {
  _M as o,
  fM as s,
  gM as c,
  hM as l,
  mM as u,
  pM as d,
  vM as f,
  xMr as p,
  yM as m,
  yMr as h,
} from "./app-initial-ad16eaadf81f.js";
function g(e, t, n, r, i) {
  (i === !1 &&
    (t.status === `detected` || t.status === `connected`) &&
    v(e, u.CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_FIRST_DETECTED, r),
    n != null && v(e, y(n), r));
}
function _(e, { flowId: t, inputMonitoringPermissionState: n, screen: r, step: i }) {
  p(e, c, { flowId: t, inputMonitoringPermissionState: C(n), screen: S(r), stepType: x(i) });
}
function v(e, t, n) {
  p(e, d, { connectionTransport: b(n), stepType: t });
}
function y(e) {
  switch (e) {
    case `connected`:
      return u.CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_CONNECTED;
    case `connection-failed`:
      return u.CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_CONNECTION_FAILED;
    case `connection-lost`:
      return u.CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_CONNECTION_LOST;
    case `reconnected`:
      return u.CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_RECONNECTED;
  }
}
function b(e) {
  switch (e) {
    case `bluetooth`:
      return s.CODEX_MICRO_CONNECTION_TRANSPORT_BLUETOOTH;
    case `usb`:
      return s.CODEX_MICRO_CONNECTION_TRANSPORT_USB;
    case `unknown`:
    case null:
      return s.CODEX_MICRO_CONNECTION_TRANSPORT_UNSPECIFIED;
  }
}
function x(e) {
  switch (e) {
    case `flow-completed`:
      return o.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_FLOW_COMPLETED;
    case `flow-dismissed`:
      return o.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_FLOW_DISMISSED;
    case `input-monitoring-permission-granted`:
      return o.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_INPUT_MONITORING_PERMISSION_GRANTED;
    case `input-monitoring-settings-opened`:
      return o.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_INPUT_MONITORING_SETTINGS_OPENED;
    case `screen-continued`:
      return o.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_SCREEN_CONTINUED;
    case `screen-shown`:
      return o.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_SCREEN_SHOWN;
    case `settings-opened`:
      return o.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_SETTINGS_OPENED;
  }
}
function S(e) {
  switch (e) {
    case `welcome`:
      return f.CODEX_MICRO_ONBOARDING_SCREEN_WELCOME;
    case `agent-keys`:
      return f.CODEX_MICRO_ONBOARDING_SCREEN_AGENT_KEYS;
    case `command-keys`:
      return f.CODEX_MICRO_ONBOARDING_SCREEN_COMMAND_KEYS;
  }
}
function C(e) {
  switch (e) {
    case `granted`:
      return l.CODEX_MICRO_INPUT_MONITORING_PERMISSION_STATE_GRANTED;
    case `denied`:
      return l.CODEX_MICRO_INPUT_MONITORING_PERMISSION_STATE_DENIED;
    case `unavailable`:
      return l.CODEX_MICRO_INPUT_MONITORING_PERMISSION_STATE_UNAVAILABLE;
    case `not-applicable`:
      return l.CODEX_MICRO_INPUT_MONITORING_PERMISSION_STATE_NOT_APPLICABLE;
  }
}
function w() {
  return (w = e(() => {
    (m(), h());
  }))();
}
function T(e, t) {
  let n = globalThis.performance.now();
  e.set(I, t ? -1 : 0);
  let r = t
    ? null
    : globalThis.setInterval(() => {
        e.set(I, globalThis.performance.now() - n);
      }, k);
  return () => {
    (r != null && globalThis.clearInterval(r), e.set(I, null));
  };
}
function E(e) {
  let t = e === -1,
    n = t ? 0 : e;
  return {
    actionKeycapIds: F.map((e, r) => D(e, n, t ? 0 : (r + 1) * M)),
    agentSlots: P.map((e, r) => ({
      id: r,
      threadKey: null,
      title: null,
      status: D(e, n, t ? 0 : r * j),
      selected: !1,
    })),
  };
}
function D(e, t, n) {
  return e[O((t + n) % A)];
}
function O(e) {
  return e < N[0] ? 0 : e < N[1] ? 1 : e < N[2] ? 2 : 0;
}
var k, A, j, M, N, P, F, I, L, R;
function z() {
  return (z = e(() => {
    (i(),
      t(),
      (k = 100),
      (A = 12e3),
      (j = 800),
      (M = 700),
      (N = [
        [0.25, 0.33],
        [0.58, 0.66],
        [0.92, 1],
      ].map(([e, t]) => Math.round(((e + t) / 2) * A))),
      (P = [
        [`working`, `awaiting-approval`, `error`],
        [`unread`, `working`, `idle`],
        [`awaiting-approval`, `idle`, `working`],
        [`idle`, `error`, `unread`],
        [`working`, `unread`, `awaiting-response`],
        [`awaiting-response`, `working`, `idle`],
      ]),
      (F = [
        [`FAST`, `PLAY`, `BUG`],
        [`APPR`, `SPLIT`, `SETUP`],
        [`REJ`, `NEW`, `CODEX`],
        [`SPLIT`, `BUG`, `FAST`],
        [`MIC`, `NEW`, `PLAY`],
        [`CODEX`, `APPR`, `SETUP`],
      ]),
      (I = a(r, null)),
      (L = n(r, ({ get: e }) => {
        let t = e(I);
        return t == null ? null : E(t);
      })),
      (R = n(r, ({ get: e }) => e(L)?.agentSlots ?? null)));
  }))();
}
export { T as a, _ as c, z as i, R as n, w as o, E as r, g as s, L as t };
//# sourceMappingURL=codex-micro-onboarding-animation-4b177d111076.js.map
