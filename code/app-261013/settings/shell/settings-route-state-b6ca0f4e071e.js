import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $It as t, EPt as n, TLt as r, pLt as i } from "./app-shared-bbfeca5e5737.js";
import { i as a, r as o } from "./recommendation-telemetry-aea6128a1440.js";
function s(e) {
  let t = g.safeParse(e);
  return t.success && t.data.passkeyEnrollmentCompleted === !0;
}
function c(e) {
  let t = g.safeParse(e);
  return t.success && t.data.pepperOnboardingPersonalization === !0
    ? (t.data.pepperOnboardingAccountId ?? null)
    : null;
}
function l(e) {
  let t = g.safeParse(e);
  return t.success && t.data.returnToPreviousHistoryEntry === !0;
}
function u(e) {
  let t = g.safeParse(e);
  return t.success && t.data.securitySubviewHasParent === !0;
}
function d(e, t, n) {
  let r = g.safeParse(e);
  return (
    r.success && r.data.securityAddEmailIntent?.accountId === t && r.data.securityAddEmailIntent.userId === n
  );
}
function f(e, t, n) {
  let r = g.safeParse(e);
  return (
    r.success &&
    r.data.securitySessionReviewIntent?.accountId === t &&
    r.data.securitySessionReviewIntent.userId === n
  );
}
function p(e) {
  let t = g.safeParse(e);
  if (!t.success || !t.data.securityAddEmailIntent) return e;
  let n = { ...t.data };
  return (delete n.securityAddEmailIntent, n);
}
function m(e, t, n, r) {
  let i = g.safeParse(e),
    a = i.success ? i.data[t] : void 0;
  return a?.accountId === n && a.userId === r ? a.recommendationAttempt : void 0;
}
function h(e) {
  let t = g.safeParse(e);
  return !t.success || !Object.hasOwn(t.data, `workspaceRoot`)
    ? { hasValue: !1, workspaceRoot: null }
    : { hasValue: !0, workspaceRoot: t.data.workspaceRoot ?? null };
}
var g;
function _() {
  return (_ = e(() => {
    (n(),
      o(),
      (g = i({
        passkeyEnrollmentCompleted: t(!0).optional(),
        pepperOnboardingPersonalization: t(!0).optional(),
        pepperOnboardingAccountId: r().optional(),
        returnToPreviousHistoryEntry: t(!0).optional(),
        securitySubviewHasParent: t(!0).optional(),
        securitySessionReviewIntent: i({
          accountId: r(),
          userId: r(),
          recommendationAttempt: a.optional().catch(void 0),
        }).optional(),
        securityAddEmailIntent: i({
          accountId: r(),
          userId: r(),
          recommendationAttempt: a.optional().catch(void 0),
        }).optional(),
        workspaceRoot: r().min(1).nullable().optional(),
      }).loose()));
  }))();
}
export { u as a, l as c, f as i, h as l, d as n, s as o, m as r, c as s, p as t, _ as u };
//# sourceMappingURL=settings-route-state-b6ca0f4e071e.js.map
