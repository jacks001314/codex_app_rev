import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { EOt as t, OOt as n, TOt as r } from "./app-shared-2feb3d4c6fcc.js";
function i({ update: e, motionValues: n }) {
  let i = () => {
      t.postRender(e);
    },
    a = n.map((e) => e?.on(`change`, i));
  return {
    scheduleUpdate: i,
    disconnect() {
      for (let e of a) e?.();
      r(e);
    },
  };
}
function a() {
  return (a = e(() => {
    n();
  }))();
}
export { i as n, a as t };
//# sourceMappingURL=observe-layout-motion-3c80574e2b68.js.map
