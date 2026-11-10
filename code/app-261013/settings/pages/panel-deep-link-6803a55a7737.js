import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Zbt as t, rst as n, vyt as r } from "./app-shared-bbfeca5e5737.js";
import { ac as i, ic as a } from "./app-initial-5851df3f6cb1.js";
function o(e, n) {
  let a = t(e);
  if (a == null) return null;
  if (a.destination === `review`) {
    let t = i(e);
    return t == null
      ? {
          kind: `error`,
          message: `Invalid PR review link. Provide a PR URL, file path, and positive line number.`,
        }
      : { kind: `pullRequestReview`, target: t };
  }
  if (a.destination === `threads`) {
    let e = r(a.url);
    if (e?.openReview === !0)
      return e.conversationId === n
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
    (n(), a());
  }))();
}
export { o as n, s as t };
//# sourceMappingURL=panel-deep-link-6803a55a7737.js.map
