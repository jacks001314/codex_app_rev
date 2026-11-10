const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./voice-personalization-dialog-9e43697efa16.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./voice-configuration-manager-eab950a76e87.js",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./command-state-7dc5a32fb56e.js",
      "./preferences-d95b6577e820.js",
      "./browser-voice-mode-redirect-e7bf658d6b8f.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { fPt as t, pPt as n } from "./app-shared-bbfeca5e5737.js";
async function r() {
  return (
    await t(
      async () => {
        let { VoicePersonalizationDialog: e } = await import(
          `./voice-personalization-dialog-9e43697efa16.js`
        );
        return { VoicePersonalizationDialog: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
      import.meta.url,
    )
  ).VoicePersonalizationDialog;
}
function i() {
  return (i = e(() => {
    n();
  }))();
}
i();
export { r as loadVoicePersonalizationDialog };
//# sourceMappingURL=personalization-entry-c6d379c547c0.js.map
