import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, fSt as r, oSt as i, wot as a } from "./app-shared-bbfeca5e5737.js";
import {
  Aj as o,
  Dj as s,
  Ej as c,
  Mj as l,
  Nj as u,
  Oj as d,
  QDr as f,
  XDr as p,
  jj as m,
  kj as h,
} from "./app-initial-5851df3f6cb1.js";
function g(e, t, n, r, i) {
  (i === !1 &&
    (t.status === `detected` || t.status === `connected`) &&
    v(e, d.CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_FIRST_DETECTED, r),
    n != null && v(e, y(n), r));
}
function _(e, { flowId: t, inputMonitoringPermissionState: n, screen: r, step: i }) {
  f(e, o, { flowId: t, inputMonitoringPermissionState: C(n), screen: S(r), stepType: x(i) });
}
function v(e, t, n) {
  f(e, s, { connectionTransport: b(n), stepType: t });
}
function y(e) {
  switch (e) {
    case `connected`:
      return d.CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_CONNECTED;
    case `connection-failed`:
      return d.CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_CONNECTION_FAILED;
    case `connection-lost`:
      return d.CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_CONNECTION_LOST;
    case `reconnected`:
      return d.CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_RECONNECTED;
  }
}
function b(e) {
  switch (e) {
    case `bluetooth`:
      return c.CODEX_MICRO_CONNECTION_TRANSPORT_BLUETOOTH;
    case `usb`:
      return c.CODEX_MICRO_CONNECTION_TRANSPORT_USB;
    case `unknown`:
    case null:
      return c.CODEX_MICRO_CONNECTION_TRANSPORT_UNSPECIFIED;
  }
}
function x(e) {
  switch (e) {
    case `flow-completed`:
      return m.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_FLOW_COMPLETED;
    case `flow-dismissed`:
      return m.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_FLOW_DISMISSED;
    case `input-monitoring-permission-granted`:
      return m.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_INPUT_MONITORING_PERMISSION_GRANTED;
    case `input-monitoring-settings-opened`:
      return m.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_INPUT_MONITORING_SETTINGS_OPENED;
    case `screen-continued`:
      return m.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_SCREEN_CONTINUED;
    case `screen-shown`:
      return m.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_SCREEN_SHOWN;
    case `settings-opened`:
      return m.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_SETTINGS_OPENED;
  }
}
function S(e) {
  switch (e) {
    case `welcome`:
      return l.CODEX_MICRO_ONBOARDING_SCREEN_WELCOME;
    case `agent-keys`:
      return l.CODEX_MICRO_ONBOARDING_SCREEN_AGENT_KEYS;
    case `command-keys`:
      return l.CODEX_MICRO_ONBOARDING_SCREEN_COMMAND_KEYS;
  }
}
function C(e) {
  switch (e) {
    case `granted`:
      return h.CODEX_MICRO_INPUT_MONITORING_PERMISSION_STATE_GRANTED;
    case `denied`:
      return h.CODEX_MICRO_INPUT_MONITORING_PERMISSION_STATE_DENIED;
    case `unavailable`:
      return h.CODEX_MICRO_INPUT_MONITORING_PERMISSION_STATE_UNAVAILABLE;
    case `not-applicable`:
      return h.CODEX_MICRO_INPUT_MONITORING_PERMISSION_STATE_NOT_APPLICABLE;
  }
}
function w() {
  return (w = e(() => {
    (u(), p());
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
    (n(),
      a(),
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
      (I = r(t, null)),
      (L = i(t, ({ get: e }) => {
        let t = e(I);
        return t == null ? null : E(t);
      })),
      (R = i(t, ({ get: e }) => e(L)?.agentSlots ?? null)));
  }))();
}
export { T as a, _ as c, z as i, R as n, w as o, E as r, g as s, L as t };
//# sourceMappingURL=codex-micro-onboarding-animation-de406f73de5b.js.map
