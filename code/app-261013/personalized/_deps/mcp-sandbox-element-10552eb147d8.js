import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { rst as t, tft as n } from "./app-shared-bbfeca5e5737.js";
function r(e, t, r = n(t)) {
  let i = document.createElement(e);
  if (i instanceof HTMLIFrameElement)
    (i.setAttribute(`sandbox`, `allow-scripts allow-same-origin`),
      i.setAttribute(`referrerpolicy`, `no-referrer`));
  else {
    let e = document.createElement(`style`);
    ((e.textContent = `iframe { border-radius: inherit; }`), i.shadowRoot?.append(e));
  }
  return (i.setAttribute(`partition`, r), i);
}
function i() {
  return (i = e(() => {
    t();
  }))();
}
export { i as n, r as t };
//# sourceMappingURL=mcp-sandbox-element-10552eb147d8.js.map
