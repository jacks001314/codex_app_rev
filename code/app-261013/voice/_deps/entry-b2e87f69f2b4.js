const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./wingman-voice-nux-be897a3dd4cf.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./timing-signals-908971eb73de.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { fPt as t, pPt as n } from "./app-shared-bbfeca5e5737.js";
async function r() {
  return (
    await t(
      async () => {
        let { WingmanVoiceNux: e } = await import(`./wingman-voice-nux-be897a3dd4cf.js`).then(
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
//# sourceMappingURL=entry-b2e87f69f2b4.js.map
