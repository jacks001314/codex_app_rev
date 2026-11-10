import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { _Mr as t, gMr as n, hMr as r } from "./app-initial-ad16eaadf81f.js";
function i() {
  return {
    enabled: !0,
    blocks: [{ id: `study-hours-always-on`, days: [...r], start_time: `00:00`, end_time: `23:59` }],
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
    n();
  }))();
}
export { i as n, o as r, a as t };
//# sourceMappingURL=legacy-study-hours-schedule-680e5861bb81.js.map
