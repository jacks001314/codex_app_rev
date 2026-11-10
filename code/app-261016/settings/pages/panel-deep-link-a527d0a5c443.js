import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pbt as t, pSt as n, sct as r } from "./app-shared-2feb3d4c6fcc.js";
import { lc as i, uc as a } from "./app-initial-ad16eaadf81f.js";
function o(e, r) {
  let i = n(e);
  if (i == null) return null;
  if (i.destination === `review`) {
    let t = a(e);
    return t == null
      ? {
          kind: `error`,
          message: `Invalid PR review link. Provide a PR URL, file path, and positive line number.`,
        }
      : { kind: `pullRequestReview`, target: t };
  }
  if (i.destination === `threads`) {
    let e = t(i.url);
    if (e?.openReview === !0)
      return e.conversationId === r
        ? { kind: `threadReview`, target: e }
        : {
            kind: `error`,
            message: `Review link names a different task. Set threadId to that task to open its review panel.`,
          };
  }
  return {
    kind: `error`,
    message: `This Codex deep link is not supported by panel opens. Use a PR review link or a task link with view=review; use app navigation for other destinations.`,
  };
}
function s() {
  return (s = e(() => {
    (r(), i());
  }))();
}
export { o as n, s as t };
//# sourceMappingURL=panel-deep-link-a527d0a5c443.js.map
