import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  IDt as r,
  VDt as i,
  _O as a,
  cO as o,
  fO as s,
  jDt as c,
  kDt as l,
  lO as u,
  mO as d,
  oO as f,
  sMt as p,
  sO as m,
  t3 as h,
  vO as g,
  vzt as _,
  xMt as v,
  yzt as y,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ymr as b,
  dcr as x,
  ehr as S,
  fur as C,
  pur as w,
  xPn as T,
  yPn as E,
} from "./app-initial-5851df3f6cb1.js";
import { n as D, t as O } from "./report-dialog-bb6e098cc574.js";
import { t as k } from "./merchant-5871a20420c8.js";
function A(e, t) {
  let n = e.formatMessage(t.label);
  return {
    id: t.id,
    cta: n,
    details_placeholder: t.subcategories == null ? e.formatMessage(N) : null,
    sub_reasons: t.subcategories?.map((t) => A(e, t)),
  };
}
function j(e) {
  return M.map((t) => A(e, t));
}
var M, N;
function P() {
  return (P = e(() => {
    (c(),
      (M = [
        {
          id: `scam_or_fraud`,
          label: l({
            id: `report.seller.category.scamOrFraud`,
            defaultMessage: `Scam, fraud, or suspicious activity`,
            description: `Top-level seller report category for scam or fraud concerns`,
          }),
          subcategories: [
            {
              id: `unauthorized_charges`,
              label: l({
                id: `report.seller.subcategory.unauthorizedCharges`,
                defaultMessage: `Unauthorized charges`,
                description: `Seller report subcategory for unauthorized charges`,
              }),
            },
            {
              id: `pay_outside_platform`,
              label: l({
                id: `report.seller.subcategory.payOutsidePlatform`,
                defaultMessage: `Asked to pay outside the platform`,
                description: `Seller report subcategory for being asked to pay outside the platform`,
              }),
            },
            {
              id: `pretending_brand_or_seller`,
              label: l({
                id: `report.seller.subcategory.pretendingBrandOrSeller`,
                defaultMessage: `Pretending to be a real brand or seller`,
                description: `Seller report subcategory for impersonating a real brand or seller`,
              }),
            },
            {
              id: `suspicious_pricing_or_branding`,
              label: l({
                id: `report.seller.subcategory.suspiciousPricingOrBranding`,
                defaultMessage: `Suspicious pricing or branding`,
                description: `Seller report subcategory for suspicious pricing or branding`,
              }),
            },
            {
              id: `scam_other`,
              label: l({
                id: `report.seller.subcategory.scamOther`,
                defaultMessage: `Something else`,
                description: `Catch-all seller report subcategory for other scam or fraud concerns`,
              }),
            },
          ],
        },
        {
          id: `order_or_service_problem`,
          label: l({
            id: `report.seller.category.orderOrServiceProblem`,
            defaultMessage: `Problem with an order or service`,
            description: `Top-level seller report category for order or service problems`,
          }),
          subcategories: [
            {
              id: `item_not_received`,
              label: l({
                id: `report.seller.subcategory.itemNotReceived`,
                defaultMessage: `Item never received or very delayed`,
                description: `Seller report subcategory for an item never received or very delayed`,
              }),
            },
            {
              id: `wrong_item_received`,
              label: l({
                id: `report.seller.subcategory.wrongItemReceived`,
                defaultMessage: `Wrong item received`,
                description: `Seller report subcategory for receiving the wrong item`,
              }),
            },
            {
              id: `refund_delayed`,
              label: l({
                id: `report.seller.subcategory.refundDelayed`,
                defaultMessage: `Refund delayed or no refund`,
                description: `Seller report subcategory for delayed or missing refunds`,
              }),
            },
            {
              id: `poor_customer_support`,
              label: l({
                id: `report.seller.subcategory.poorCustomerSupport`,
                defaultMessage: `Poor customer support`,
                description: `Seller report subcategory for poor customer support`,
              }),
            },
            {
              id: `order_other`,
              label: l({
                id: `report.seller.subcategory.orderOther`,
                defaultMessage: `Something else`,
                description: `Catch-all seller report subcategory for other order or service problems`,
              }),
            },
          ],
        },
        {
          id: `illegal_or_unsafe_products`,
          label: l({
            id: `report.seller.category.illegalOrUnsafeProducts`,
            defaultMessage: `Seller is offering illegal or unsafe products`,
            description: `Top-level seller report category for illegal or unsafe product concerns`,
          }),
          subcategories: [
            {
              id: `prohibited_or_illegal_products`,
              label: l({
                id: `report.seller.subcategory.prohibitedOrIllegalProducts`,
                defaultMessage: `Selling prohibited or illegal products`,
                description: `Seller report subcategory for selling prohibited or illegal products`,
              }),
            },
            {
              id: `counterfeit_products`,
              label: l({
                id: `report.seller.subcategory.counterfeitProducts`,
                defaultMessage: `Selling counterfeit products`,
                description: `Seller report subcategory for selling counterfeit products`,
              }),
            },
            {
              id: `product_caused_harm`,
              label: l({
                id: `report.seller.subcategory.productCausedHarm`,
                defaultMessage: `Product caused physical harm`,
                description: `Seller report subcategory for products that caused physical harm`,
              }),
            },
            {
              id: `missing_safety_warnings`,
              label: l({
                id: `report.seller.subcategory.missingSafetyWarnings`,
                defaultMessage: `Missing required safety warnings or disclosures`,
                description: `Seller report subcategory for missing safety warnings or disclosures`,
              }),
            },
            {
              id: `unsafe_other`,
              label: l({
                id: `report.seller.subcategory.unsafeOther`,
                defaultMessage: `Something else`,
                description: `Catch-all seller report subcategory for other illegal or unsafe product concerns`,
              }),
            },
          ],
        },
        {
          id: `seller_other`,
          label: l({
            id: `report.seller.category.other`,
            defaultMessage: `Something else`,
            description: `Top-level catch-all seller report category for other concerns`,
          }),
        },
      ]),
      (N = l({
        id: `report.seller.detailsPlaceholder`,
        defaultMessage: `Please provide more details`,
        description: `Placeholder text for seller report additional details`,
      })));
  }))();
}
function ee(e) {
  return (0, I.default)(
    (e.offers ?? []).flatMap((e) => {
      let t = k(e),
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
    I = t(p(), 1);
  }))();
}
function R(e) {
  let t = (0, H.c)(76),
    { product: s, onClose: c } = e,
    l = i(),
    p = w(),
    [h, g] = (0, W.useState)(`issue`),
    [_, v] = (0, W.useState)(null),
    [y, x] = (0, W.useState)(null),
    S,
    C,
    T,
    D,
    k,
    A,
    M,
    N,
    P,
    F,
    I,
    L,
    R,
    K,
    q;
  if (t[0] !== p || t[1] !== l || t[2] !== _ || t[3] !== c || t[4] !== s || t[5] !== y || t[6] !== h) {
    q = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = ee(s),
        n;
      (t[22] === y ? (n = t[23]) : ((n = (e) => e.key === y), (t[22] = y), (t[23] = n)), (A = e.find(n)));
      let i;
      (t[24] === h
        ? (i = t[25])
        : ((i = () => g(h === `seller-report` ? `seller` : `issue`)), (t[24] = h), (t[25] = i)),
        (k = i),
        (D = h === `product-report` || h === `seller-report`));
      let m = h === `seller-report` ? (A?.name ?? ``) : s.title,
        w = D
          ? (0, G.jsx)(r, {
              id: `shopping.report.entityTitle`,
              defaultMessage: `Report {name}`,
              description: `Shopping report dialog title; name is a product or seller name, truncated if long`,
              values: { name: m.length <= 30 ? m : `${m.slice(0, 27)}…` },
            })
          : (0, G.jsx)(r, {
              id: `shopping.report.title`,
              defaultMessage: `Report`,
              description: `Title of the dialog for choosing whether to report a shopping product or seller`,
            }),
        E;
      t[26] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((E = (0, G.jsx)(r, {
            id: `shopping.report.successBody`,
            defaultMessage: `Our team will review the content to determine if it violates our policies. <learn>Learn how reports are handled</learn>`,
            description: `Confirmation after submitting a shopping report, with a link explaining content moderation`,
            values: { learn: V },
          })),
          (t[26] = E))
        : (E = t[26]);
      let H = E;
      if (D && (p.authMethod === `chatgpt` || p.authMethod === `chatgptAuthTokens`)) {
        if (h === `product-report`) {
          let e;
          t[27] === l.locale
            ? (e = t[28])
            : ((e = [`shopping-product-report-reasons`, l.locale]), (t[27] = l.locale), (t[28] = e));
          let n;
          t[29] !== s.id || t[30] !== s.offers || t[31] !== s.title || t[32] !== s.url
            ? ((n = async (e) => {
                let { reason: t, details: n } = e,
                  r = (0, U.default)(s.offers?.flatMap(z) ?? []);
                await b.safePost(`/report_flow/report`, {
                  requestBody: {
                    entity_id: s.id ?? ``,
                    entity_type: `commerce_product`,
                    product_area: `commerce`,
                    reason: n ? { id: t.id, details: n } : { id: t.id },
                    additional_fields_values: {
                      entity_name: s.title,
                      entity_url: s.url ?? ``,
                      ...(r.length ? { offer_urls: JSON.stringify(r) } : {}),
                    },
                  },
                });
              }),
              (t[29] = s.id),
              (t[30] = s.offers),
              (t[31] = s.title),
              (t[32] = s.url),
              (t[33] = n))
            : (n = t[33]);
          let r;
          (t[34] !== k || t[35] !== c || t[36] !== e || t[37] !== n || t[38] !== w
            ? ((r = (0, G.jsx)(
                O,
                {
                  onBack: k,
                  onClose: c,
                  title: w,
                  successBody: H,
                  queryKey: e,
                  loadReasons: B,
                  submitReport: n,
                },
                `product`,
              )),
              (t[34] = k),
              (t[35] = c),
              (t[36] = e),
              (t[37] = n),
              (t[38] = w),
              (t[39] = r))
            : (r = t[39]),
            (q = r));
          break bb0;
        }
        if (A != null) {
          let e;
          t[40] === l.locale
            ? (e = t[41])
            : ((e = [`shopping-seller-report-reasons`, l.locale]), (t[40] = l.locale), (t[41] = e));
          let n;
          (t[42] === l
            ? (n = t[43])
            : ((n = async () => ({
                reasons: j(l),
                header: l.formatMessage({
                  id: `shopping.report.seller.header`,
                  defaultMessage: `Please tell us why you are reporting`,
                  description: `Prompt above the list of reasons for reporting a shopping seller`,
                }),
              })),
              (t[42] = l),
              (t[43] = n)),
            (q = (0, G.jsx)(
              O,
              {
                onBack: k,
                onClose: c,
                title: w,
                successBody: H,
                queryKey: e,
                loadReasons: n,
                submitReport: async (e) => {
                  let { details: t, path: n } = e,
                    r = { entity_name: A.name, entity_url: A.url };
                  (A.shopId && (r.shop_id = A.shopId),
                    n[0] &&
                      ((r.seller_report_reason_category_id = n[0].id),
                      (r.seller_report_reason_category_label = n[0].cta)),
                    n[1] &&
                      ((r.seller_report_reason_subcategory_id = n[1].id),
                      (r.seller_report_reason_subcategory_label = n[1].cta)),
                    await b.safePost(`/report_flow/report`, {
                      requestBody: {
                        entity_id: A.url,
                        entity_type: `commerce_seller`,
                        product_area: `commerce`,
                        reason: t ? { id: `other`, details: t } : { id: `other` },
                        additional_fields_values: r,
                      },
                    }));
                },
              },
              A.key,
            )));
          break bb0;
        }
      }
      ((T = d),
        (L = !0),
        t[44] === c
          ? (R = t[45])
          : ((R = (e) => {
              e || c();
            }),
            (t[44] = c),
            (t[45] = R)),
        (K = `wide`),
        (C = f),
        (N = `form`),
        (P = `gap-4`),
        (F = (e) => {
          (e.preventDefault(),
            h === `issue` && _ != null && g(_ === `product` ? `product-report` : `seller`),
            h === `seller` && A != null && g(`seller-report`));
        }),
        t[46] === w
          ? (I = t[47])
          : ((I = (0, G.jsx)(u, {
              children: (0, G.jsx)(o, { title: (0, G.jsx)(a, { children: w }), titleSize: `dialog` }),
            })),
            (t[46] = w),
            (t[47] = I)),
        (S = u),
        (M = D
          ? (0, G.jsx)(`p`, {
              children: (0, G.jsx)(r, {
                id: `shopping.report.externalInstruction`,
                defaultMessage: `Please use this form to report the issue`,
                description: `Instruction for a signed-out user reporting a shopping product or seller`,
              }),
            })
          : (0, G.jsx)(`div`, {
              className: `flex flex-col gap-3 text-sm select-none`,
              children:
                h === `issue`
                  ? (0, G.jsxs)(G.Fragment, {
                      children: [
                        (0, G.jsxs)(`label`, {
                          className: `flex cursor-interaction items-center gap-2`,
                          children: [
                            (0, G.jsx)(`input`, {
                              className: `size-4 shrink-0 appearance-auto accent-current`,
                              type: `radio`,
                              name: `issue`,
                              checked: _ === `product`,
                              onChange: () => v(`product`),
                            }),
                            (0, G.jsx)(r, {
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
                              checked: _ === `seller`,
                              disabled: e.length === 0,
                              onChange: () => v(`seller`),
                            }),
                            (0, G.jsx)(r, {
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
                          children: (0, G.jsx)(r, {
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
                                  checked: e.key === y,
                                  onChange: () => x(e.key),
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
    ((t[0] = p),
      (t[1] = l),
      (t[2] = _),
      (t[3] = c),
      (t[4] = s),
      (t[5] = y),
      (t[6] = h),
      (t[7] = S),
      (t[8] = C),
      (t[9] = T),
      (t[10] = D),
      (t[11] = k),
      (t[12] = A),
      (t[13] = M),
      (t[14] = N),
      (t[15] = P),
      (t[16] = F),
      (t[17] = I),
      (t[18] = L),
      (t[19] = R),
      (t[20] = K),
      (t[21] = q));
  } else
    ((S = t[7]),
      (C = t[8]),
      (T = t[9]),
      (D = t[10]),
      (k = t[11]),
      (A = t[12]),
      (M = t[13]),
      (N = t[14]),
      (P = t[15]),
      (F = t[16]),
      (I = t[17]),
      (L = t[18]),
      (R = t[19]),
      (K = t[20]),
      (q = t[21]));
  if (q !== Symbol.for(`react.early_return_sentinel`)) return q;
  let J;
  t[48] !== S || t[49] !== M
    ? ((J = (0, G.jsx)(S, { children: M })), (t[48] = S), (t[49] = M), (t[50] = J))
    : (J = t[50]);
  let Y;
  t[51] !== k || t[52] !== h
    ? ((Y =
        h === `issue`
          ? null
          : (0, G.jsx)(n, {
              type: `button`,
              color: `secondary`,
              onClick: k,
              children: (0, G.jsx)(r, {
                id: `shopping.report.back`,
                defaultMessage: `Back`,
                description: `Return to the previous step in shopping reporting`,
              }),
            })),
      (t[51] = k),
      (t[52] = h),
      (t[53] = Y))
    : (Y = t[53]);
  let X;
  t[54] !== D || t[55] !== _ || t[56] !== A || t[57] !== h
    ? ((X = D
        ? (0, G.jsx)(E, {
            initiator: `open_in_browser_bridge`,
            href: `https://openai.com/form/report-content`,
            openTarget: `external-browser`,
            children: (0, G.jsx)(r, {
              id: `shopping.report.externalForm`,
              defaultMessage: `Go to Form`,
              description: `Open the external content reporting form for a signed-out shopping user`,
            }),
          })
        : (0, G.jsx)(n, {
            type: `submit`,
            color: `primary`,
            disabled: h === `issue` ? _ == null : A == null,
            children: (0, G.jsx)(r, {
              id: `shopping.report.next`,
              defaultMessage: `Next`,
              description: `Continue to the next step in shopping reporting`,
            }),
          })),
      (t[54] = D),
      (t[55] = _),
      (t[56] = A),
      (t[57] = h),
      (t[58] = X))
    : (X = t[58]);
  let Z;
  t[59] !== Y || t[60] !== X
    ? ((Z = (0, G.jsx)(u, { children: (0, G.jsxs)(m, { expandSingleButton: !1, children: [Y, X] }) })),
      (t[59] = Y),
      (t[60] = X),
      (t[61] = Z))
    : (Z = t[61]);
  let Q;
  t[62] !== C || t[63] !== J || t[64] !== Z || t[65] !== N || t[66] !== P || t[67] !== F || t[68] !== I
    ? ((Q = (0, G.jsxs)(C, { as: N, className: P, onSubmit: F, children: [I, J, Z] })),
      (t[62] = C),
      (t[63] = J),
      (t[64] = Z),
      (t[65] = N),
      (t[66] = P),
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
  return b.safeGet(`/report_flow/reasons/{entity_type}`, {
    parameters: { path: { entity_type: `commerce_product` } },
  });
}
function V(e) {
  return (0, G.jsx)(E, {
    initiator: `open_in_browser_bridge`,
    href: `https://openai.com/transparency-and-content-moderation/`,
    openTarget: `external-browser`,
    children: e,
  });
}
var H, U, W, G;
function K() {
  return (K = e(() => {
    ((H = _()), (U = t(x(), 1)), (W = y()), c(), C(), S(), h(), g(), s(), T(), D(), P(), L(), (G = v()));
  }))();
}
K();
export { R as ProductReportDialog };
//# sourceMappingURL=dialog-440abe265398.js.map
