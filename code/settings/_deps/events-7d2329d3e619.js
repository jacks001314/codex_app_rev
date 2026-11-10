import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import { $Xt as t, Trn as n, krn as r, nZt as i, rrn as a } from "./app-initial-f094ef01c64d.js";
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
var c,
  l,
  u = e(() => {
    (a(),
      t(),
      (c = r().regex(/^[a-z][a-z0-9_]{0,127}$/)),
      (l = n({
        detail: n({ error_type: c.optional().catch(void 0), reason: c.optional().catch(void 0) }),
      })));
  });
export { s as n, o as r, u as t };
//# sourceMappingURL=events-7d2329d3e619.js.map
