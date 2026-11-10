import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CNt as n,
  FBt as r,
  HO as i,
  IO as a,
  JO as o,
  JOt as s,
  LNt as c,
  LO as l,
  PBt as u,
  RO as d,
  WO as ee,
  XOt as f,
  Y3 as p,
  Z3 as m,
  okt as h,
  qO as g,
  tkt as _,
  zO as v,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  GLn as y,
  efr as b,
  iRr as x,
  imr as S,
  qLn as C,
  rmr as w,
  tyr as T,
} from "./app-initial-ad16eaadf81f.js";
import { n as E, t as D } from "./report-dialog-a40f359edbd2.js";
import { t as O } from "./merchant-5871a20420c8.js";
function k(e, t) {
  let n = e.formatMessage(t.label);
  return {
    id: t.id,
    cta: n,
    details_placeholder: t.subcategories == null ? e.formatMessage(M) : null,
    sub_reasons: t.subcategories?.map((t) => k(e, t)),
  };
}
function A(e) {
  return j.map((t) => k(e, t));
}
var j, M;
function N() {
  return (N = e(() => {
    (f(),
      (j = [
        {
          id: `scam_or_fraud`,
          label: s({
            id: `report.seller.category.scamOrFraud`,
            defaultMessage: `Scam, fraud, or suspicious activity`,
            description: `Top-level seller report category for scam or fraud concerns`,
          }),
          subcategories: [
            {
              id: `unauthorized_charges`,
              label: s({
                id: `report.seller.subcategory.unauthorizedCharges`,
                defaultMessage: `Unauthorized charges`,
                description: `Seller report subcategory for unauthorized charges`,
              }),
            },
            {
              id: `pay_outside_platform`,
              label: s({
                id: `report.seller.subcategory.payOutsidePlatform`,
                defaultMessage: `Asked to pay outside the platform`,
                description: `Seller report subcategory for being asked to pay outside the platform`,
              }),
            },
            {
              id: `pretending_brand_or_seller`,
              label: s({
                id: `report.seller.subcategory.pretendingBrandOrSeller`,
                defaultMessage: `Pretending to be a real brand or seller`,
                description: `Seller report subcategory for impersonating a real brand or seller`,
              }),
            },
            {
              id: `suspicious_pricing_or_branding`,
              label: s({
                id: `report.seller.subcategory.suspiciousPricingOrBranding`,
                defaultMessage: `Suspicious pricing or branding`,
                description: `Seller report subcategory for suspicious pricing or branding`,
              }),
            },
            {
              id: `scam_other`,
              label: s({
                id: `report.seller.subcategory.scamOther`,
                defaultMessage: `Something else`,
                description: `Catch-all seller report subcategory for other scam or fraud concerns`,
              }),
            },
          ],
        },
        {
          id: `order_or_service_problem`,
          label: s({
            id: `report.seller.category.orderOrServiceProblem`,
            defaultMessage: `Problem with an order or service`,
            description: `Top-level seller report category for order or service problems`,
          }),
          subcategories: [
            {
              id: `item_not_received`,
              label: s({
                id: `report.seller.subcategory.itemNotReceived`,
                defaultMessage: `Item never received or very delayed`,
                description: `Seller report subcategory for an item never received or very delayed`,
              }),
            },
            {
              id: `wrong_item_received`,
              label: s({
                id: `report.seller.subcategory.wrongItemReceived`,
                defaultMessage: `Wrong item received`,
                description: `Seller report subcategory for receiving the wrong item`,
              }),
            },
            {
              id: `refund_delayed`,
              label: s({
                id: `report.seller.subcategory.refundDelayed`,
                defaultMessage: `Refund delayed or no refund`,
                description: `Seller report subcategory for delayed or missing refunds`,
              }),
            },
            {
              id: `poor_customer_support`,
              label: s({
                id: `report.seller.subcategory.poorCustomerSupport`,
                defaultMessage: `Poor customer support`,
                description: `Seller report subcategory for poor customer support`,
              }),
            },
            {
              id: `order_other`,
              label: s({
                id: `report.seller.subcategory.orderOther`,
                defaultMessage: `Something else`,
                description: `Catch-all seller report subcategory for other order or service problems`,
              }),
            },
          ],
        },
        {
          id: `illegal_or_unsafe_products`,
          label: s({
            id: `report.seller.category.illegalOrUnsafeProducts`,
            defaultMessage: `Seller is offering illegal or unsafe products`,
            description: `Top-level seller report category for illegal or unsafe product concerns`,
          }),
          subcategories: [
            {
              id: `prohibited_or_illegal_products`,
              label: s({
                id: `report.seller.subcategory.prohibitedOrIllegalProducts`,
                defaultMessage: `Selling prohibited or illegal products`,
                description: `Seller report subcategory for selling prohibited or illegal products`,
              }),
            },
            {
              id: `counterfeit_products`,
              label: s({
                id: `report.seller.subcategory.counterfeitProducts`,
                defaultMessage: `Selling counterfeit products`,
                description: `Seller report subcategory for selling counterfeit products`,
              }),
            },
            {
              id: `product_caused_harm`,
              label: s({
                id: `report.seller.subcategory.productCausedHarm`,
                defaultMessage: `Product caused physical harm`,
                description: `Seller report subcategory for products that caused physical harm`,
              }),
            },
            {
              id: `missing_safety_warnings`,
              label: s({
                id: `report.seller.subcategory.missingSafetyWarnings`,
                defaultMessage: `Missing required safety warnings or disclosures`,
                description: `Seller report subcategory for missing safety warnings or disclosures`,
              }),
            },
            {
              id: `unsafe_other`,
              label: s({
                id: `report.seller.subcategory.unsafeOther`,
                defaultMessage: `Something else`,
                description: `Catch-all seller report subcategory for other illegal or unsafe product concerns`,
              }),
            },
          ],
        },
        {
          id: `seller_other`,
          label: s({
            id: `report.seller.category.other`,
            defaultMessage: `Something else`,
            description: `Top-level catch-all seller report category for other concerns`,
          }),
        },
      ]),
      (M = s({
        id: `report.seller.detailsPlaceholder`,
        defaultMessage: `Please provide more details`,
        description: `Placeholder text for seller report additional details`,
      })));
  }))();
}
function P(e) {
  return (0, I.default)(
    (e.offers ?? []).flatMap((e) => {
      let t = O(e),
        n = e.url?.trim();
      if (!t || !n) return [];
      let r = e.shop_id?.trim() || void 0;
      return [{ name: t, url: n, shopId: r, key: F(t, n, r) }];
    }),
    `key`,
  );
}
function F(e, t, n) {
  let r = e.trim().toLowerCase();
  try {
    let e;
    try {
      e = new URL(t);
    } catch {
      if (t.startsWith(`//`)) return `raw:${t}:${r}`;
      e = new URL(`https://${t}`);
    }
    let i = e.host.toLowerCase();
    return i ? (n ? `${i}:${n}:${r}` : `${i}:${r}`) : `raw:${t}:${r}`;
  } catch {
    return `raw:${t}:${r}`;
  }
}
var I;
function L() {
  return (L = e(() => {
    I = t(n(), 1);
  }))();
}
function R(e) {
  let t = (0, H.c)(76),
    { product: n, onClose: r } = e,
    i = h(),
    o = S(),
    [s, c] = (0, W.useState)(`issue`),
    [u, f] = (0, W.useState)(null),
    [m, b] = (0, W.useState)(null),
    C,
    w,
    T,
    E,
    O,
    k,
    j,
    M,
    N,
    F,
    I,
    L,
    R,
    K,
    q;
  if (t[0] !== o || t[1] !== i || t[2] !== u || t[3] !== r || t[4] !== n || t[5] !== m || t[6] !== s) {
    q = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = P(n),
        l;
      (t[22] === m ? (l = t[23]) : ((l = (e) => e.key === m), (t[22] = m), (t[23] = l)), (k = e.find(l)));
      let p;
      (t[24] === s
        ? (p = t[25])
        : ((p = () => c(s === `seller-report` ? `seller` : `issue`)), (t[24] = s), (t[25] = p)),
        (O = p),
        (E = s === `product-report` || s === `seller-report`));
      let h = s === `seller-report` ? (k?.name ?? ``) : n.title,
        y = E
          ? (0, G.jsx)(_, {
              id: `shopping.report.entityTitle`,
              defaultMessage: `Report {name}`,
              description: `Shopping report dialog title; name is a product or seller name, truncated if long`,
              values: { name: h.length <= 30 ? h : `${h.slice(0, 27)}…` },
            })
          : (0, G.jsx)(_, {
              id: `shopping.report.title`,
              defaultMessage: `Report`,
              description: `Title of the dialog for choosing whether to report a shopping product or seller`,
            }),
        S;
      t[26] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((S = (0, G.jsx)(_, {
            id: `shopping.report.successBody`,
            defaultMessage: `Our team will review the content to determine if it violates our policies. <learn>Learn how reports are handled</learn>`,
            description: `Confirmation after submitting a shopping report, with a link explaining content moderation`,
            values: { learn: V },
          })),
          (t[26] = S))
        : (S = t[26]);
      let H = S;
      if (E && (o.authMethod === `chatgpt` || o.authMethod === `chatgptAuthTokens`)) {
        if (s === `product-report`) {
          let e;
          t[27] === i.locale
            ? (e = t[28])
            : ((e = [`shopping-product-report-reasons`, i.locale]), (t[27] = i.locale), (t[28] = e));
          let a;
          t[29] !== n.id || t[30] !== n.offers || t[31] !== n.title || t[32] !== n.url
            ? ((a = async (e) => {
                let { reason: t, details: r } = e,
                  i = (0, U.default)(n.offers?.flatMap(z) ?? []);
                await x.safePost(`/report_flow/report`, {
                  requestBody: {
                    entity_id: n.id ?? ``,
                    entity_type: `commerce_product`,
                    product_area: `commerce`,
                    reason: r ? { id: t.id, details: r } : { id: t.id },
                    additional_fields_values: {
                      entity_name: n.title,
                      entity_url: n.url ?? ``,
                      ...(i.length ? { offer_urls: JSON.stringify(i) } : {}),
                    },
                  },
                });
              }),
              (t[29] = n.id),
              (t[30] = n.offers),
              (t[31] = n.title),
              (t[32] = n.url),
              (t[33] = a))
            : (a = t[33]);
          let o;
          (t[34] !== O || t[35] !== r || t[36] !== e || t[37] !== a || t[38] !== y
            ? ((o = (0, G.jsx)(
                D,
                {
                  onBack: O,
                  onClose: r,
                  title: y,
                  successBody: H,
                  queryKey: e,
                  loadReasons: B,
                  submitReport: a,
                },
                `product`,
              )),
              (t[34] = O),
              (t[35] = r),
              (t[36] = e),
              (t[37] = a),
              (t[38] = y),
              (t[39] = o))
            : (o = t[39]),
            (q = o));
          break bb0;
        }
        if (k != null) {
          let e;
          t[40] === i.locale
            ? (e = t[41])
            : ((e = [`shopping-seller-report-reasons`, i.locale]), (t[40] = i.locale), (t[41] = e));
          let n;
          (t[42] === i
            ? (n = t[43])
            : ((n = async () => ({
                reasons: A(i),
                header: i.formatMessage({
                  id: `shopping.report.seller.header`,
                  defaultMessage: `Please tell us why you are reporting`,
                  description: `Prompt above the list of reasons for reporting a shopping seller`,
                }),
              })),
              (t[42] = i),
              (t[43] = n)),
            (q = (0, G.jsx)(
              D,
              {
                onBack: O,
                onClose: r,
                title: y,
                successBody: H,
                queryKey: e,
                loadReasons: n,
                submitReport: async (e) => {
                  let { details: t, path: n } = e,
                    r = { entity_name: k.name, entity_url: k.url };
                  (k.shopId && (r.shop_id = k.shopId),
                    n[0] &&
                      ((r.seller_report_reason_category_id = n[0].id),
                      (r.seller_report_reason_category_label = n[0].cta)),
                    n[1] &&
                      ((r.seller_report_reason_subcategory_id = n[1].id),
                      (r.seller_report_reason_subcategory_label = n[1].cta)),
                    await x.safePost(`/report_flow/report`, {
                      requestBody: {
                        entity_id: k.url,
                        entity_type: `commerce_seller`,
                        product_area: `commerce`,
                        reason: t ? { id: `other`, details: t } : { id: `other` },
                        additional_fields_values: r,
                      },
                    }));
                },
              },
              k.key,
            )));
          break bb0;
        }
      }
      ((T = ee),
        (L = !0),
        t[44] === r
          ? (R = t[45])
          : ((R = (e) => {
              e || r();
            }),
            (t[44] = r),
            (t[45] = R)),
        (K = `wide`),
        (w = a),
        (M = `form`),
        (N = `gap-4`),
        (F = (e) => {
          (e.preventDefault(),
            s === `issue` && u != null && c(u === `product` ? `product-report` : `seller`),
            s === `seller` && k != null && c(`seller-report`));
        }),
        t[46] === y
          ? (I = t[47])
          : ((I = (0, G.jsx)(v, {
              children: (0, G.jsx)(d, { title: (0, G.jsx)(g, { children: y }), titleSize: `dialog` }),
            })),
            (t[46] = y),
            (t[47] = I)),
        (C = v),
        (j = E
          ? (0, G.jsx)(`p`, {
              children: (0, G.jsx)(_, {
                id: `shopping.report.externalInstruction`,
                defaultMessage: `Please use this form to report the issue`,
                description: `Instruction for a signed-out user reporting a shopping product or seller`,
              }),
            })
          : (0, G.jsx)(`div`, {
              className: `flex flex-col gap-3 text-sm select-none`,
              children:
                s === `issue`
                  ? (0, G.jsxs)(G.Fragment, {
                      children: [
                        (0, G.jsxs)(`label`, {
                          className: `flex cursor-interaction items-center gap-2`,
                          children: [
                            (0, G.jsx)(`input`, {
                              className: `size-4 shrink-0 appearance-auto accent-current`,
                              type: `radio`,
                              name: `issue`,
                              checked: u === `product`,
                              onChange: () => f(`product`),
                            }),
                            (0, G.jsx)(_, {
                              id: `shopping.report.productIssue`,
                              defaultMessage: `Issue with product`,
                              description: `Option to report the product itself in the shopping reporting dialog`,
                            }),
                          ],
                        }),
                        (0, G.jsxs)(`label`, {
                          className: `flex cursor-interaction items-center gap-2 has-disabled:cursor-default has-disabled:opacity-50`,
                          children: [
                            (0, G.jsx)(`input`, {
                              className: `size-4 shrink-0 appearance-auto accent-current`,
                              type: `radio`,
                              name: `issue`,
                              checked: u === `seller`,
                              disabled: e.length === 0,
                              onChange: () => f(`seller`),
                            }),
                            (0, G.jsx)(_, {
                              id: `shopping.report.sellerIssue`,
                              defaultMessage: `Issue with seller`,
                              description: `Option to report a merchant offering a shopping product`,
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, G.jsxs)(G.Fragment, {
                      children: [
                        (0, G.jsx)(`p`, {
                          children: (0, G.jsx)(_, {
                            id: `shopping.report.selectSeller`,
                            defaultMessage: `Which seller are you reporting?`,
                            description: `Prompt for choosing a merchant to report from a shopping product's offers`,
                          }),
                        }),
                        e.map((e) =>
                          (0, G.jsxs)(
                            `label`,
                            {
                              className: `flex cursor-interaction items-center gap-2`,
                              children: [
                                (0, G.jsx)(`input`, {
                                  className: `size-4 shrink-0 appearance-auto accent-current`,
                                  type: `radio`,
                                  name: `seller`,
                                  checked: e.key === m,
                                  onChange: () => b(e.key),
                                }),
                                e.name,
                              ],
                            },
                            e.key,
                          ),
                        ),
                      ],
                    }),
            })));
    }
    ((t[0] = o),
      (t[1] = i),
      (t[2] = u),
      (t[3] = r),
      (t[4] = n),
      (t[5] = m),
      (t[6] = s),
      (t[7] = C),
      (t[8] = w),
      (t[9] = T),
      (t[10] = E),
      (t[11] = O),
      (t[12] = k),
      (t[13] = j),
      (t[14] = M),
      (t[15] = N),
      (t[16] = F),
      (t[17] = I),
      (t[18] = L),
      (t[19] = R),
      (t[20] = K),
      (t[21] = q));
  } else
    ((C = t[7]),
      (w = t[8]),
      (T = t[9]),
      (E = t[10]),
      (O = t[11]),
      (k = t[12]),
      (j = t[13]),
      (M = t[14]),
      (N = t[15]),
      (F = t[16]),
      (I = t[17]),
      (L = t[18]),
      (R = t[19]),
      (K = t[20]),
      (q = t[21]));
  if (q !== Symbol.for(`react.early_return_sentinel`)) return q;
  let J;
  t[48] !== C || t[49] !== j
    ? ((J = (0, G.jsx)(C, { children: j })), (t[48] = C), (t[49] = j), (t[50] = J))
    : (J = t[50]);
  let Y;
  t[51] !== O || t[52] !== s
    ? ((Y =
        s === `issue`
          ? null
          : (0, G.jsx)(p, {
              type: `button`,
              color: `secondary`,
              onClick: O,
              children: (0, G.jsx)(_, {
                id: `shopping.report.back`,
                defaultMessage: `Back`,
                description: `Return to the previous step in shopping reporting`,
              }),
            })),
      (t[51] = O),
      (t[52] = s),
      (t[53] = Y))
    : (Y = t[53]);
  let X;
  t[54] !== E || t[55] !== u || t[56] !== k || t[57] !== s
    ? ((X = E
        ? (0, G.jsx)(y, {
            initiator: `open_in_browser_bridge`,
            href: `https://openai.com/form/report-content`,
            openTarget: `external-browser`,
            children: (0, G.jsx)(_, {
              id: `shopping.report.externalForm`,
              defaultMessage: `Go to Form`,
              description: `Open the external content reporting form for a signed-out shopping user`,
            }),
          })
        : (0, G.jsx)(p, {
            type: `submit`,
            color: `primary`,
            disabled: s === `issue` ? u == null : k == null,
            children: (0, G.jsx)(_, {
              id: `shopping.report.next`,
              defaultMessage: `Next`,
              description: `Continue to the next step in shopping reporting`,
            }),
          })),
      (t[54] = E),
      (t[55] = u),
      (t[56] = k),
      (t[57] = s),
      (t[58] = X))
    : (X = t[58]);
  let Z;
  t[59] !== Y || t[60] !== X
    ? ((Z = (0, G.jsx)(v, { children: (0, G.jsxs)(l, { expandSingleButton: !1, children: [Y, X] }) })),
      (t[59] = Y),
      (t[60] = X),
      (t[61] = Z))
    : (Z = t[61]);
  let Q;
  t[62] !== w || t[63] !== J || t[64] !== Z || t[65] !== M || t[66] !== N || t[67] !== F || t[68] !== I
    ? ((Q = (0, G.jsxs)(w, { as: M, className: N, onSubmit: F, children: [I, J, Z] })),
      (t[62] = w),
      (t[63] = J),
      (t[64] = Z),
      (t[65] = M),
      (t[66] = N),
      (t[67] = F),
      (t[68] = I),
      (t[69] = Q))
    : (Q = t[69]);
  let $;
  return (
    t[70] !== T || t[71] !== Q || t[72] !== L || t[73] !== R || t[74] !== K
      ? (($ = (0, G.jsx)(T, { open: L, onOpenChange: R, size: K, children: Q })),
        (t[70] = T),
        (t[71] = Q),
        (t[72] = L),
        (t[73] = R),
        (t[74] = K),
        (t[75] = $))
      : ($ = t[75]),
    $
  );
}
function z(e) {
  return e.url?.trim() ? [e.url.trim()] : [];
}
function B() {
  return x.safeGet(`/report_flow/reasons/{entity_type}`, {
    parameters: { path: { entity_type: `commerce_product` } },
  });
}
function V(e) {
  return (0, G.jsx)(y, {
    initiator: `open_in_browser_bridge`,
    href: `https://openai.com/transparency-and-content-moderation/`,
    openTarget: `external-browser`,
    children: e,
  });
}
var H, U, W, G;
function K() {
  return (K = e(() => {
    ((H = u()), (U = t(b(), 1)), (W = r()), f(), w(), T(), m(), o(), i(), C(), E(), N(), L(), (G = c()));
  }))();
}
K();
export { R as ProductReportDialog };
//# sourceMappingURL=dialog-abd81b63bd4c.js.map
