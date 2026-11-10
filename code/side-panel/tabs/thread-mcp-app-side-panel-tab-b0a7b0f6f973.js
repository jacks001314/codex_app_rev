import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import { hmn as t, kmn as n } from "./app-initial-f094ef01c64d.js";
function r(e) {
  let t = (0, i.c)(2),
    { onPanelElementChange: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, a.jsx)(`div`, {
          className: `relative h-full min-h-0`,
          children: (0, a.jsx)(`div`, {
            ref: n,
            "data-mcp-app-side-panel-frame-container": `true`,
            className: `h-full min-h-0 w-full`,
          }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var i, a;
e(() => {
  ((i = n()), (a = t()));
})();
export { r as McpAppThreadSidePanelTab };
//# sourceMappingURL=thread-mcp-app-side-panel-tab-b0a7b0f6f973.js.map
