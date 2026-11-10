import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { EPt as t, oIt as n, pLt as r } from "./app-shared-bbfeca5e5737.js";
function i(e) {
  let t = a.safeParse(e);
  return t.success ? t.data.navigationSource : void 0;
}
var a;
function o() {
  return (o = e(() => {
    (t(),
      (a = r({
        navigationSource: n([
          `scheduled_page`,
          `notification`,
          `conversation`,
          `conversation_sidebar`,
          `editor`,
        ]),
      })));
  }))();
}
export { o as n, i as t };
//# sourceMappingURL=navigation-source-616199fd6291.js.map
