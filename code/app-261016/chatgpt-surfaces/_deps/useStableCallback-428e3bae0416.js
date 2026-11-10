import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { FBt as t } from "./app-shared-2feb3d4c6fcc.js";
function n(e) {
  let t = (0, r.useRef)(e);
  return ((t.current = e), (0, r.useCallback)((...e) => t.current(...e), []));
}
var r;
function i() {
  return (i = e(() => {
    r = t();
  }))();
}
export { n, i as t };
//# sourceMappingURL=useStableCallback-428e3bae0416.js.map
