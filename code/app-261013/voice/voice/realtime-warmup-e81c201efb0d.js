import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  GI as t,
  KI as n,
  Nsn as r,
  _4 as i,
  aor as a,
  cor as o,
  f4 as s,
  hln as c,
  mln as l,
  xsn as u,
  zsn as d,
} from "./app-initial-5851df3f6cb1.js";
async function f(e, n, i, a) {
  if (i() || c(n)) return;
  let l = e.get(d, n) ?? (await e.query.getOrFetch(r, n)).metadata;
  if (!i() && l.access.can_read && l.deleted_at == null && o(l) === `page`)
    return s({ scope: e, pageId: n, requestedScope: t(l.access, `content`), speculative: !0, onPromote: a });
}
function p() {
  return (p = e(() => {
    (l(), a(), n(), i(), u());
  }))();
}
p();
export { f as acquirePageHoverRealtime };
//# sourceMappingURL=realtime-warmup-e81c201efb0d.js.map
