import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { lDt as t, oDt as n, sDt as r } from "./app-shared-bbfeca5e5737.js";
function i({ update: e, motionValues: t }) {
  let i = () => {
      r.postRender(e);
    },
    a = t.map((e) => e?.on(`change`, i));
  return {
    scheduleUpdate: i,
    disconnect() {
      for (let e of a) e?.();
      n(e);
    },
  };
}
function a() {
  return (a = e(() => {
    t();
  }))();
}
export { i as n, a as t };
//# sourceMappingURL=observe-layout-motion-cdda8b68cb96.js.map
