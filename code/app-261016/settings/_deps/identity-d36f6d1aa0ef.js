import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { YRr as t, nzr as n, szr as r } from "./app-initial-ad16eaadf81f.js";
function i(e) {
  if (!a(e)) throw Error(`The active owner onboarding identity changed`);
}
function a(e) {
  let n = t();
  return !r() && n?.userId === e.userId && n.accountId === e.workspaceId;
}
function o() {
  return (o = e(() => {
    n();
  }))();
}
export { o as n, a as r, i as t };
//# sourceMappingURL=identity-d36f6d1aa0ef.js.map
