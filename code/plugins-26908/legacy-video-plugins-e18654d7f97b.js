const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index.umd-285c026558c1.js", "./rolldown-runtime-c05d78c594d1.js"]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import { n, t as r } from "./preload-helper-e33cd0d9c41a.js";
import { Eon as i, Oon as a, jon as o } from "./app-initial-bcc2ff475eb6.js";
function s(e) {
  return i(this, void 0, void 0, function () {
    var n;
    return a(this, function (i) {
      switch (i.label) {
        case 0:
          return [
            4,
            r(
              () => import(`./index.umd-285c026558c1.js`).then((e) => t(e.default)),
              __vite__mapDeps([0, 1]),
              import.meta.url,
            ),
          ];
        case 1:
          return ((n = i.sent()), (e._plugins = n), [2]);
      }
    });
  });
}
e(() => {
  (o(), n());
})();
export { s as loadLegacyVideoPlugins };
//# sourceMappingURL=legacy-video-plugins-e18654d7f97b.js.map
