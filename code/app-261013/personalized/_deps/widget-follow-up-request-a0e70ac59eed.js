import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { EPt as t, TLt as n, pLt as r } from "./app-shared-bbfeca5e5737.js";
import { Gfr as i, Jfr as a, qfr as o } from "./app-initial-5851df3f6cb1.js";
function s(e) {
  let t = u.safeParse(e);
  if (!t.success) throw Object.assign(Error(`Invalid follow-up message`), { code: l });
  return t.data;
}
function c(e) {
  let { context: t, prompt: n } = e;
  return t == null ? n : `${n}\n\nCurrent widget context (JSON):\n${o(t)}`;
}
var l, u;
function d() {
  return (d = e(() => {
    (i(),
      t(),
      (l = -32602),
      (u = r({
        context: a.optional(),
        prompt: n().trim().min(1),
        title: n().trim().min(1).max(250).optional(),
      }).strip()));
  }))();
}
export { d as n, s as r, c as t };
//# sourceMappingURL=widget-follow-up-request-a0e70ac59eed.js.map
