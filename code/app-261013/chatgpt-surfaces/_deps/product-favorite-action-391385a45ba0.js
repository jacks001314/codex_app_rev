const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./favorite-action-a9eba4c9ccf8.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./saved-entity-folder-menu-action-564da126d6bf.js",
      "./favorite-folder-menu-2542785c765c.js",
      "./favorite-folders-6a0ba920b2d1.js",
      "./data-aef902a404f0.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  Pxt as n,
  Vxt as r,
  fPt as i,
  pPt as a,
  vzt as o,
  xMt as s,
  z4 as c,
  zxt as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  GMr as u,
  Imt as d,
  Lmt as f,
  XMr as p,
  eDr as m,
  nc as h,
  rc as g,
  tDr as _,
  tNr as v,
} from "./app-initial-5851df3f6cb1.js";
import { n as y, r as b } from "./product-request-context-5c8a3b7f54b9.js";
async function x() {
  return (
    await i(
      async () => {
        let { ProductFavoriteAction: e } = await import(`./favorite-action-a9eba4c9ccf8.js`);
        return { ProductFavoriteAction: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
      import.meta.url,
    )
  ).ProductFavoriteAction;
}
function S() {
  return (S = e(() => {
    a();
  }))();
}
function C(e, t) {
  let n = e.id?.trim(),
    r = e.title.trim();
  return !n || !r || e.url == null || e.query == null || e.provider == null
    ? null
    : {
        saved_target: {
          identity: { namespace: `product`, key: n },
          sidebar_params: {
            name: r,
            category: `product_rationale_and_reviews`,
            multi_message_mode: !0,
            extra_params: {
              product_lookup_key: e.product_lookup_key ?? void 0,
              rewritten_queries: t?.length ? t : void 0,
              saved_product_shell: { id: n, url: e.url, query: e.query, provider: e.provider },
            },
          },
        },
        display_data: { name: r, image_url: e.image_urls?.[0] ?? null },
      };
}
function w() {
  return (w = e(() => {}))();
}
function T(e) {
  let t = (0, D.c)(8),
    n = g(),
    i = r(f),
    a = r(u),
    o = r(p),
    s = _(`2347841422`);
  if (
    !i ||
    a == null ||
    o == null ||
    n == null ||
    n.shouldBlockExternalEgress ||
    !s.get(`enabled_entity_categories`, []).includes(`product_rationale_and_reviews`)
  )
    return null;
  let c = e.reference == null ? -1 : n.contentReferences.indexOf(e.reference),
    l = n.contentReferenceMessageIds?.[c] ?? n.messageId,
    d;
  t[0] !== n || t[1] !== l ? ((d = { ...n, messageId: l }), (t[0] = n), (t[1] = l), (t[2] = d)) : (d = t[2]);
  let m;
  return (
    t[3] !== a || t[4] !== e || t[5] !== d || t[6] !== o
      ? ((m = (0, O.jsx)(E, { ...e, accountId: a, userId: o, context: d })),
        (t[3] = a),
        (t[4] = e),
        (t[5] = d),
        (t[6] = o),
        (t[7] = m))
      : (m = t[7]),
    m
  );
}
function E(e) {
  let t = (0, D.c)(16),
    {
      className: n,
      accountId: r,
      userId: i,
      context: a,
      product: o,
      loadedProduct: s,
      savedRequest: c,
      surface: u,
    } = e,
    d;
  t[0] !== a || t[1] !== o
    ? ((d = { context: a, product: o }), (t[0] = a), (t[1] = o), (t[2] = d))
    : (d = t[2]);
  let { isSourceCatalog: f, rewrittenQueries: p } = l(b, d),
    m;
  t[3] !== s || t[4] !== o || t[5] !== p || t[6] !== c
    ? ((m = c ?? C(o, p) ?? (s == null ? null : C(s, p))),
      (t[3] = s),
      (t[4] = o),
      (t[5] = p),
      (t[6] = c),
      (t[7] = m))
    : (m = t[7]);
  let h = m;
  if (f || h == null) return null;
  let g = c == null ? a.conversationId : void 0,
    _ = c == null ? a.messageId : void 0,
    v;
  return (
    t[8] !== r || t[9] !== n || t[10] !== h || t[11] !== u || t[12] !== g || t[13] !== _ || t[14] !== i
      ? ((v = (0, O.jsx)(k, {
          className: n,
          accountId: r,
          userId: i,
          conversationId: g,
          messageId: _,
          request: h,
          surface: u,
        })),
        (t[8] = r),
        (t[9] = n),
        (t[10] = h),
        (t[11] = u),
        (t[12] = g),
        (t[13] = _),
        (t[14] = i),
        (t[15] = v))
      : (v = t[15]),
    v
  );
}
var D, O, k;
function A() {
  return (A = e(() => {
    ((D = o()), S(), n(), v(), c(), d(), m(), h(), y(), (O = s()), (k = t(x)));
  }))();
}
export { w as i, A as n, C as r, T as t };
//# sourceMappingURL=product-favorite-action-391385a45ba0.js.map
