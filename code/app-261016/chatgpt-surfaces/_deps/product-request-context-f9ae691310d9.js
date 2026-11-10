import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as n,
  HFt as r,
  Qst as i,
  ZSt as a,
  ezt as o,
  iFt as s,
  kLt as c,
  kRt as l,
  yCt as u,
} from "./app-shared-2feb3d4c6fcc.js";
import { VPn as d, n0n as f } from "./app-initial-ad16eaadf81f.js";
function p(e, t, n) {
  return m(e.get(f, t.conversationId), t, n);
}
function m(e, t, n) {
  let r = t.messageId,
    i = new Set(),
    a,
    o = !1,
    s = !1;
  for (; r != null && !i.has(r);) {
    i.add(r);
    let t = e?.[r];
    if (t == null) break;
    let c = t.message;
    if (
      (n.cite && c?.metadata?.business_agent_context != null && (s = !0),
      !o && c?.author.role === `assistant`)
    ) {
      let e = g.safeParse(c.metadata?.shopping);
      e.success && ((o = !0), (a = e.data.rewritten_queries.length ? e.data.rewritten_queries : void 0));
    }
    if (o && (!n.cite || s)) break;
    r = t.parent;
  }
  return { rewrittenQueries: a, isSourceCatalog: s };
}
var h, g, _;
function v() {
  return (v = e(() => {
    ((h = t(s(), 1)),
      a(),
      r(),
      d(),
      n(),
      (g = l({
        rewritten_queries: c(o()).transform((e) => e.filter((e) => typeof e == `string` && e !== ``)),
      })),
      (_ = u(i, ({ context: e, product: t }, { get: n }) => m(n(f, e.conversationId), e, t), {
        isEqual: h.default,
      })));
  }))();
}
export { v as n, _ as r, p as t };
//# sourceMappingURL=product-request-context-f9ae691310d9.js.map
