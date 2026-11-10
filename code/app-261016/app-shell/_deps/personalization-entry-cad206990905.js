const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./voice-personalization-dialog-ca52fa342a56.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./voice-configuration-manager-f7e817b94a05.js",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./command-state-717db9deb198.js",
      "./preferences-c6a8f9117081.js",
      "./browser-voice-mode-redirect-956eef080c8d.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { OFt as t, kFt as n } from "./app-shared-2feb3d4c6fcc.js";
async function r() {
  return (
    await t(
      async () => {
        let { VoicePersonalizationDialog: e } = await import(
          `./voice-personalization-dialog-ca52fa342a56.js`
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
//# sourceMappingURL=personalization-entry-cad206990905.js.map
