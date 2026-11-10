import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { JDr as t, KDr as n, qDr as r } from "./app-initial-5851df3f6cb1.js";
function i() {
  return {
    enabled: !0,
    blocks: [{ id: `study-hours-always-on`, days: [...n], start_time: `00:00`, end_time: `23:59` }],
  };
}
function a(e, n) {
  switch (n.type) {
    case `set_enabled`:
      return t(e, n);
    case `add_block`:
      return t({ ...e, enabled: !0 }, n);
    case `update_block`:
      return {
        ...e,
        enabled: !0,
        blocks: [
          { ...t(i(), n).blocks[0], id: `web-study-hours-${globalThis.crypto.randomUUID()}` },
          ...e.blocks,
        ],
      };
    case `remove_block`:
      return e;
  }
}
function o() {
  return (o = e(() => {
    r();
  }))();
}
export { i as n, o as r, a as t };
//# sourceMappingURL=legacy-study-hours-schedule-493102f58ae0.js.map
