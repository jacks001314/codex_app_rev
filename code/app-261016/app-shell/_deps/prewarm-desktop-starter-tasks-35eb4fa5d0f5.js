import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { bLr as t, iRr as n, tyr as r, wLr as i, zRr as a } from "./app-initial-ad16eaadf81f.js";
async function o(e) {
  let r = e.get(a),
    i = e.get(t);
  if (r != null && i != null)
    try {
      await n.safePost(`/onboarding/recommendations`, {
        expectedIdentity: { accountId: r, userId: i },
        additionalHeaders: { "x-openai-use-sheep": `1` },
        requestBody: { provider_id: `codex-starter-tasks`, role: null, mail_provider: null },
        keepalive: !0,
        signal: AbortSignal.timeout(1e4),
        expectedErrorStatuses: [404, 503],
      });
    } catch {}
}
function s() {
  return (s = e(() => {
    (i(), r());
  }))();
}
export { o as n, s as t };
//# sourceMappingURL=prewarm-desktop-starter-tasks-35eb4fa5d0f5.js.map
