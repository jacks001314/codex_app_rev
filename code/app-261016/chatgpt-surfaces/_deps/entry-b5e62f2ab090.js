const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./code-block-execution-8a33bf18d490.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./connect-code-execution-sandbox-881358e76b8a.js",
      "./code-execution-account-policy-8682cbed64b4.js",
      "./ansi-block-196721f759d8.js",
      "./ansi-block-cecb2c03ae9a.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { OFt as t, kFt as n } from "./app-shared-2feb3d4c6fcc.js";
async function r() {
  return (
    await t(
      async () => {
        let { CodeBlockExecution: e } = await import(`./code-block-execution-8a33bf18d490.js`);
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
//# sourceMappingURL=entry-b5e62f2ab090.js.map
