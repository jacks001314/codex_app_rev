import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B3 as t,
  Ddn as n,
  F3 as r,
  Jlr as i,
  Ndn as a,
  OL as o,
  Zlr as s,
  hdn as c,
  kL as l,
  lpn as u,
  upn as d,
} from "./app-initial-ad16eaadf81f.js";
async function f(e, t, i, c) {
  if (i() || d(t)) return;
  let l = e.get(a, t) ?? (await e.query.getOrFetch(n, t)).metadata;
  if (!i() && l.access.can_read && l.deleted_at == null && s(l) === `page`)
    return r({ scope: e, pageId: t, requestedScope: o(l.access, `content`), speculative: !0, onPromote: c });
}
function p() {
  return (p = e(() => {
    (u(), i(), l(), t(), c());
  }))();
}
p();
export { f as acquirePageHoverRealtime };
//# sourceMappingURL=realtime-warmup-b9b5eeb0b674.js.map
