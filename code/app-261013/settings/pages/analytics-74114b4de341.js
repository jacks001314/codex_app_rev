import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Irt as t } from "./app-shared-bbfeca5e5737.js";
import { QDr as n, Sj as r, XDr as i, ocr as a, xj as o } from "./app-initial-5851df3f6cb1.js";
function s(e, { failure: r, ...i }) {
  n(e, o, {
    ...i,
    failedAttemptCount: i.failedAttemptCount == null ? void 0 : t(i.failedAttemptCount),
    failureReason: r?.failureReason,
    navigationPhase: r?.navigationPhase,
    navigationErrorCode: r?.navigationErrorCode == null ? void 0 : t(r.navigationErrorCode),
  });
}
function c() {
  return (c = e(() => {
    (a(), r(), i());
  }))();
}
export { s as n, c as t };
//# sourceMappingURL=analytics-74114b4de341.js.map
