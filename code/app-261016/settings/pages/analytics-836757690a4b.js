import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Qit as t } from "./app-shared-2feb3d4c6fcc.js";
import { Ydr as n, cM as r, sM as i, xMr as a, yMr as o } from "./app-initial-ad16eaadf81f.js";
function s(e, { failure: n, ...r }) {
  a(e, i, {
    ...r,
    failedAttemptCount: r.failedAttemptCount == null ? void 0 : t(r.failedAttemptCount),
    failureReason: n?.failureReason,
    navigationPhase: n?.navigationPhase,
    navigationErrorCode: n?.navigationErrorCode == null ? void 0 : t(n.navigationErrorCode),
  });
}
function c() {
  return (c = e(() => {
    (n(), r(), o());
  }))();
}
export { s as n, c as t };
//# sourceMappingURL=analytics-836757690a4b.js.map
