const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./code-block-execution-a4b806a09ae1.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./connect-code-execution-sandbox-7f3a8edf720b.js",
      "./code-execution-account-policy-dfe8d762999e.js",
      "./ansi-block-9295b35baa81.js",
      "./ansi-block-cecb2c03ae9a.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { fPt as t, pPt as n } from "./app-shared-bbfeca5e5737.js";
async function r() {
  return (
    await t(
      async () => {
        let { CodeBlockExecution: e } = await import(`./code-block-execution-a4b806a09ae1.js`);
        return { CodeBlockExecution: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
      import.meta.url,
    )
  ).CodeBlockExecution;
}
function i() {
  return (i = e(() => {
    n();
  }))();
}
i();
export { r as loadCodeBlockExecution };
//# sourceMappingURL=entry-e75df665957c.js.map
