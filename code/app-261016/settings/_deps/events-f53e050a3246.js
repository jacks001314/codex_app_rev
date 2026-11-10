import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { HFt as t, VRt as n, kRt as r } from "./app-shared-2feb3d4c6fcc.js";
import { CMr as i, bMr as a } from "./app-initial-ad16eaadf81f.js";
function o(e, t) {
  e.get(i).logEventWithStatsig?.(t.name, t.metadata);
}
function s(e, t) {
  let n = {};
  try {
    let e = l.safeParse(JSON.parse(t.message));
    if (e.success) {
      let { error_type: t, reason: r } = e.data.detail;
      n = { ...(t == null ? {} : { error_type: t }), ...(r == null ? {} : { reason: r }) };
    }
  } catch {}
  o(e, { name: `chatgpt_plan_management_modal_handle_update_error`, metadata: n });
}
var c, l;
function u() {
  return (u = e(() => {
    (t(),
      a(),
      (c = n().regex(/^[a-z][a-z0-9_]{0,127}$/)),
      (l = r({ detail: r({ error_type: c.optional().catch(void 0), reason: c.optional().catch(void 0) }) })));
  }))();
}
export { s as n, o as r, u as t };
//# sourceMappingURL=events-f53e050a3246.js.map
