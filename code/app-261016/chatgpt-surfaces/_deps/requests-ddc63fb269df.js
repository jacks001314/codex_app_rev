import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { ast as t, ist as n, tit as r } from "./app-shared-2feb3d4c6fcc.js";
function i(e) {
  return [...s, JSON.stringify(e)];
}
function a(e) {
  return [...c, JSON.stringify(e)];
}
async function o(e, t) {
  let i = n?.ambientSuggestions;
  i != null && (await r(i.refresh(e), t));
}
var s, c;
function l() {
  return (l = e(() => {
    (t(), (s = [`vscode`, `ambient-suggestions`]), (c = [`vscode`, `ambient-suggestions-refresh`]));
  }))();
}
export { l as a, a as i, c as n, o, i as r, s as t };
//# sourceMappingURL=requests-ddc63fb269df.js.map
