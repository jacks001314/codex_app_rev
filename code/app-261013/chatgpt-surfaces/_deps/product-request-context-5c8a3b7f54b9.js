import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as n,
  EPt as r,
  HNt as i,
  Pxt as a,
  RLt as o,
  nSt as s,
  pIt as c,
  pLt as l,
  wot as u,
} from "./app-shared-bbfeca5e5737.js";
import { kZn as d, yjn as f } from "./app-initial-5851df3f6cb1.js";
function p(e, t, n) {
  return m(e.get(d, t.conversationId), t, n);
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
    ((h = t(i(), 1)),
      a(),
      r(),
      f(),
      u(),
      (g = l({
        rewritten_queries: c(o()).transform((e) => e.filter((e) => typeof e == `string` && e !== ``)),
      })),
      (_ = s(n, ({ context: e, product: t }, { get: n }) => m(n(d, e.conversationId), e, t), {
        isEqual: h.default,
      })));
  }))();
}
export { v as n, _ as r, p as t };
//# sourceMappingURL=product-request-context-5c8a3b7f54b9.js.map
