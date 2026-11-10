import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { HFt as t, SLt as n, kRt as r } from "./app-shared-2feb3d4c6fcc.js";
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
//# sourceMappingURL=navigation-source-8346601e255e.js.map
