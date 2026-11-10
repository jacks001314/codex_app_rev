import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { XT as t } from "./app-shared-2feb3d4c6fcc.js";
function n(e) {
  return () => {
    if (e.isConnected && typeof e.moveBefore == `function`)
      for (let n of e.querySelectorAll(`:scope > [data-mcp-app-frame]`))
        ((n.style.display = `none`), t().moveBefore(n, null));
  };
}
function r() {
  return (r = e(() => {}))();
}
export { n, r as t };
//# sourceMappingURL=frame-container-4ff95dd0a333.js.map
