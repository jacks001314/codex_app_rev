import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { AMr as t, hPr as n } from "./app-initial-5851df3f6cb1.js";
function r(e) {
  switch (e) {
    case n.GO:
      return `chatgptgoplan`;
    case n.PLUS:
      return `chatgptplusplan`;
    case n.PROLITE:
      return `chatgptprolite`;
    case n.PRO:
      return `chatgptpro`;
    case n.PROMAX:
      return `chatgptpromax`;
  }
}
function i(e) {
  switch (e) {
    case `chatgptgoplan`:
      return n.GO;
    case `chatgptplusplan`:
      return n.PLUS;
    case `chatgptprolite`:
      return n.PROLITE;
    case `chatgptpro`:
      return n.PRO;
    case `chatgptpromax`:
      return n.PROMAX;
  }
}
function a() {
  return (a = e(() => {
    t();
  }))();
}
export { i as n, a as r, r as t };
//# sourceMappingURL=subscription-update-plan-7dcf54a45cb8.js.map
