import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { GMr as t, YMr as n, Ymr as r, ehr as i, tNr as a } from "./app-initial-5851df3f6cb1.js";
async function o(e) {
  let i = e.get(t),
    a = e.get(n);
  if (i != null && a != null)
    try {
      await r.safePost(`/onboarding/recommendations`, {
        expectedIdentity: { accountId: i, userId: a },
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
    (a(), i());
  }))();
}
export { o as n, s as t };
//# sourceMappingURL=prewarm-desktop-starter-tasks-e5e8990b2874.js.map
