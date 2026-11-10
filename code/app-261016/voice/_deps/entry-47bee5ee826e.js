const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./wingman-voice-nux-692894d6fe4a.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./timing-signals-6301d26a3c55.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { OFt as t, kFt as n } from "./app-shared-2feb3d4c6fcc.js";
async function r() {
  return (
    await t(
      async () => {
        let { WingmanVoiceNux: e } = await import(`./wingman-voice-nux-692894d6fe4a.js`).then(
          (e) => (e.t(), e.n),
        );
        return { WingmanVoiceNux: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
      import.meta.url,
    )
  ).WingmanVoiceNux;
}
function i() {
  return (i = e(() => {
    n();
  }))();
}
i();
export { r as loadWingmanVoiceNux };
//# sourceMappingURL=entry-47bee5ee826e.js.map
