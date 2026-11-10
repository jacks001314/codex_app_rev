import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { C9 as t, D9 as n, O9 as r, P9 as i, Rrt as a, S9 as o, k9 as s } from "./app-shared-2feb3d4c6fcc.js";
import { xMr as c, yMr as l } from "./app-initial-ad16eaadf81f.js";
var u, d, f;
function p() {
  return (p = e(() => {
    ((u = { $type: `protobuf_analytics_events.v1.CodexOnboardingEntrypointLoginSucceeded` }),
      (d = { $type: `protobuf_analytics_events.v1.CodexOnboardingEntrypointStarted` }),
      (f = { $type: `protobuf_analytics_events.v1.CodexOnboardingEntrypointCompleted` }));
  }))();
}
function m(e) {
  return e == null ? {} : { onboardingEntrypoint: S[e] };
}
function h(e, t) {
  c(e, u, { onboardingEntrypoint: S[t] });
}
function g(e, t) {
  (c(e, o, { ...m(t) }), t != null && c(e, d, { onboardingEntrypoint: S[t] }));
}
function _(e, t, n) {
  c(e, s, { step: t, ...m(n) });
}
function v(e, t, r) {
  c(e, n, { step: t, ...m(r) });
}
function y(e, t, n) {
  c(e, r, { step: t, ...m(n) });
}
function b(e, t, n) {
  c(e, i, { phase: t, action: n });
}
function x(e, t) {
  c(e, f, { onboardingEntrypoint: S[t] });
}
var S;
function C() {
  return (C = e(() => {
    (a(), p(), l(), (S = { life_sciences: t.CODEX_ONBOARDING_ENTRYPOINT_LIFE_SCIENCES }));
  }))();
}
export { h as a, _ as c, x as i, b as l, C as n, v as o, g as r, y as s, m as t };
//# sourceMappingURL=onboarding-analytics-d36746a40455.js.map
