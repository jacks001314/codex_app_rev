import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IDt as t, JDt as n, jDt as r, vzt as i, xMt as a, yAt as o } from "./app-shared-bbfeca5e5737.js";
import { IV as s, LV as c, Mlt as l, Nlt as u } from "./app-initial-5851df3f6cb1.js";
var d, f;
function p() {
  return (p = e(() => {
    ((d = a()),
      (f = (e) =>
        (0, d.jsx)(`svg`, {
          width: `1em`,
          height: `1em`,
          viewBox: `0 0 24 24`,
          fill: `currentColor`,
          ...e,
          children: (0, d.jsx)(`path`, {
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M5.83071 5.83077C6.33839 5.32309 7.16151 5.32309 7.66919 5.83077L12 10.1615L16.3307 5.83077C16.8384 5.32309 17.6615 5.32309 18.1692 5.83077C18.6769 6.33845 18.6769 7.16157 18.1692 7.66925L13.8384 12L18.1692 16.3308C18.6769 16.8385 18.6769 17.6616 18.1692 18.1693C17.6615 18.6769 16.8384 18.6769 16.3307 18.1693L12 13.8385L7.66919 18.1693C7.16151 18.6769 6.33839 18.6769 5.83071 18.1693C5.32303 17.6616 5.32303 16.8385 5.83071 16.3308L10.1615 12L5.83071 7.66925C5.32303 7.16157 5.32303 6.33845 5.83071 5.83077Z`,
            fill: `currentColor`,
          }),
        })));
  }))();
}
function m(e) {
  let n = (0, _.c)(33),
    {
      open: r,
      title: i,
      reasonCode: a,
      message: s,
      closeLabel: l,
      onClose: d,
      retry: p,
      testId: m,
      portalClassName: h,
      isDarkMode: g,
    } = e,
    y;
  n[0] === d
    ? (y = n[1])
    : ((y = (e) => {
        e || d();
      }),
      (n[0] = d),
      (n[1] = y));
  let b = g ? `dark` : `light`,
    x;
  n[2] !== a || n[3] !== i
    ? ((x =
        a === `invalid_code`
          ? (0, v.jsx)(t, { id: `checkout.offers.invalidTitle`, defaultMessage: `Promo Invalid` })
          : a === `code_already_redeemed`
            ? (0, v.jsx)(t, { id: `checkout.offers.alreadyUsedTitle`, defaultMessage: `Promo Already Used` })
            : i),
      (n[2] = a),
      (n[3] = i),
      (n[4] = x))
    : (x = n[4]);
  let S;
  n[5] === x
    ? (S = n[6])
    : ((S = (0, v.jsx)(c.Title, { className: u.offerNoticeTitle, children: x })), (n[5] = x), (n[6] = S));
  let C;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, v.jsx)(f, { "aria-hidden": !0 })), (n[7] = C))
    : (C = n[7]);
  let w;
  n[8] === l
    ? (w = n[9])
    : ((w = (0, v.jsx)(c.Close, {
        children: (0, v.jsx)(o, {
          color: `secondary`,
          variant: `ghost`,
          size: `lg`,
          uniform: !0,
          type: `button`,
          "aria-label": l,
          children: C,
        }),
      })),
      (n[8] = l),
      (n[9] = w));
  let T;
  n[10] !== S || n[11] !== w
    ? ((T = (0, v.jsxs)(c.Header, { children: [S, w] })), (n[10] = S), (n[11] = w), (n[12] = T))
    : (T = n[12]);
  let E;
  n[13] === s
    ? (E = n[14])
    : ((E = (0, v.jsx)(c.Body, { children: (0, v.jsx)(c.Description, { children: s }) })),
      (n[13] = s),
      (n[14] = E));
  let D;
  n[15] === p
    ? (D = n[16])
    : ((D =
        p == null
          ? null
          : (0, v.jsx)(o, {
              color: `primary`,
              size: `xl`,
              type: `button`,
              onClick: p.onClick,
              children: p.label,
            })),
      (n[15] = p),
      (n[16] = D));
  let O;
  n[17] === l
    ? (O = n[18])
    : ((O = (0, v.jsx)(c.Close, {
        children: (0, v.jsx)(o, { color: `secondary`, size: `xl`, type: `button`, children: l }),
      })),
      (n[17] = l),
      (n[18] = O));
  let k;
  n[19] !== O || n[20] !== D
    ? ((k = (0, v.jsxs)(c.Footer, { children: [D, O] })), (n[19] = O), (n[20] = D), (n[21] = k))
    : (k = n[21]);
  let A;
  n[22] !== h || n[23] !== k || n[24] !== b || n[25] !== T || n[26] !== E || n[27] !== m
    ? ((A = (0, v.jsxs)(c.Content, {
        className: `${u.root} ${u.offerNotice}`,
        "data-checkout-theme": b,
        "data-testid": m,
        portalClassName: h,
        backdrop: `dim`,
        children: [T, E, k],
      })),
      (n[22] = h),
      (n[23] = k),
      (n[24] = b),
      (n[25] = T),
      (n[26] = E),
      (n[27] = m),
      (n[28] = A))
    : (A = n[28]);
  let j;
  return (
    n[29] !== r || n[30] !== y || n[31] !== A
      ? ((j = (0, v.jsx)(c, { open: r, onOpenChange: y, children: A })),
        (n[29] = r),
        (n[30] = y),
        (n[31] = A),
        (n[32] = j))
      : (j = n[32]),
    j
  );
}
function h(e) {
  let n = (0, _.c)(27),
    {
      planType: r,
      renewalDateFormatted: i,
      fullPriceResumeDateFormatted: a,
      formattedDiscountedCost: o,
      billingInterval: s,
      currencySign: c,
      planCost: l,
      currentPlanType: d,
    } = e,
    f;
  n[0] !== d || n[1] !== r || n[2] !== i
    ? ((f = (0, v.jsx)(`p`, {
        className: `text-(--text-primary)`,
        children:
          d == null
            ? (0, v.jsx)(t, {
                id: `planRenewalModal.currentSubscriptionPromo`,
                defaultMessage: `After the billing cycle for your current plan ends on {renewalDateFormatted}, your promotional subscription will go into effect.`,
                values: { renewalDateFormatted: i },
              })
            : (0, v.jsx)(t, {
                id: `planDowngradeModal.currentSubscription.numberedTiers`,
                defaultMessage: `Your {currentPlanType, select, free {Free} go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {ChatGPT}} subscription will stay active until {renewalDateFormatted}, when it will change to {planType, select, free {Free} go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {ChatGPT}}.`,
                values: { currentPlanType: d, renewalDateFormatted: i, planType: r },
              }),
      })),
      (n[0] = d),
      (n[1] = r),
      (n[2] = i),
      (n[3] = f))
    : (f = n[3]);
  let p;
  n[4] === r
    ? (p = n[5])
    : ((p = (0, v.jsx)(`span`, {
        children: (0, v.jsx)(t, {
          id: `planRenewalModal.newPlan.numberedTiers`,
          defaultMessage: `{planType, select, free {ChatGPT Free} go {ChatGPT Go} plus {ChatGPT Plus} prolite {ChatGPT Pro 100} pro {ChatGPT Pro 200} promax {ChatGPT Pro 500} other {ChatGPT}}`,
          values: { planType: r },
        }),
      })),
      (n[4] = r),
      (n[5] = p));
  let m;
  n[6] === o
    ? (m = n[7])
    : ((m = (0, v.jsx)(`span`, {
        className: `text-right`,
        children: (0, v.jsx)(t, {
          id: `planRenewalModal.newPlanCostAfterPromo`,
          defaultMessage: `{promotionalCost} w/ promo`,
          values: { promotionalCost: o },
        }),
      })),
      (n[6] = o),
      (n[7] = m));
  let h;
  n[8] !== p || n[9] !== m
    ? ((h = (0, v.jsxs)(`div`, {
        className: `flex justify-between gap-4 text-[15px] text-(--text-primary)`,
        children: [p, m],
      })),
      (n[8] = p),
      (n[9] = m),
      (n[10] = h))
    : (h = n[10]);
  let g;
  n[11] !== d || n[12] !== a
    ? ((g = (0, v.jsx)(`span`, {
        children:
          d == null
            ? (0, v.jsx)(t, {
                id: `planRenewalModal.billingStartAfterPromo`,
                defaultMessage: `Billing will start on {fullPriceResumeDateFormatted}`,
                values: { fullPriceResumeDateFormatted: a },
              })
            : (0, v.jsx)(t, {
                id: `planDowngradeModal.billingResumeAfterPromo`,
                defaultMessage: `Billing will resume on {fullPriceResumeDateFormatted}`,
                values: { fullPriceResumeDateFormatted: a },
              }),
      })),
      (n[11] = d),
      (n[12] = a),
      (n[13] = g))
    : (g = n[13]);
  let y;
  n[14] !== s || n[15] !== c || n[16] !== l
    ? ((y = (0, v.jsx)(`span`, {
        className: `text-right`,
        children:
          s === `month`
            ? (0, v.jsx)(t, {
                id: `planDowngradeModal.newPlanCostAfterPromoMonth`,
                defaultMessage: `{currencySign}{planCost}/month after`,
                values: { currencySign: c, planCost: l },
              })
            : (0, v.jsx)(t, {
                id: `planDowngradeModal.newPlanCostAfterPromoYear`,
                defaultMessage: `{currencySign}{planCost}/year after`,
                values: { currencySign: c, planCost: l },
              }),
      })),
      (n[14] = s),
      (n[15] = c),
      (n[16] = l),
      (n[17] = y))
    : (y = n[17]);
  let b;
  n[18] !== g || n[19] !== y
    ? ((b = (0, v.jsxs)(`div`, {
        className: `flex items-center justify-between gap-4 text-xs text-(--text-secondary)`,
        children: [g, y],
      })),
      (n[18] = g),
      (n[19] = y),
      (n[20] = b))
    : (b = n[20]);
  let x;
  n[21] !== h || n[22] !== b
    ? ((x = (0, v.jsxs)(`div`, {
        className: `mt-4 flex flex-col gap-1 rounded-2xl border border-(--border-default) bg-(--main-surface-secondary) p-4`,
        children: [h, b],
      })),
      (n[21] = h),
      (n[22] = b),
      (n[23] = x))
    : (x = n[23]);
  let S;
  return (
    n[24] !== f || n[25] !== x
      ? ((S = (0, v.jsxs)(`div`, { className: u.planChangeDetails, children: [f, x] })),
        (n[24] = f),
        (n[25] = x),
        (n[26] = S))
      : (S = n[26]),
    S
  );
}
function g(e) {
  let n = (0, _.c)(25),
    {
      currentPlanType: r,
      planType: i,
      renewalDateFormatted: a,
      currencyCode: o,
      currencySign: s,
      planCost: c,
      useTreatmentContentStyle: l,
    } = e,
    d = l !== void 0 && l,
    f = d
      ? `text-token-text-primary text-base leading-[26px] tracking-[-0.32px]`
      : `text-token-text-secondary`,
    p;
  n[0] !== r || n[1] !== i || n[2] !== a
    ? ((p =
        a == null
          ? (0, v.jsx)(t, {
              id: `planDowngradeModal.currentSubscriptionWithoutDate.numberedTiers`,
              defaultMessage: `Your {currentPlanType, select, free {Free} go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {ChatGPT}} subscription will change to {planType, select, free {Free} go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {ChatGPT}} at the end of your current billing period.`,
              values: { currentPlanType: r, planType: i },
            })
          : (0, v.jsx)(t, {
              id: `planDowngradeModal.currentSubscription.numberedTiers`,
              defaultMessage: `Your {currentPlanType, select, free {Free} go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {ChatGPT}} subscription will stay active until {renewalDateFormatted}, when it will change to {planType, select, free {Free} go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {ChatGPT}}.`,
              values: { currentPlanType: r, planType: i, renewalDateFormatted: a },
            })),
      (n[0] = r),
      (n[1] = i),
      (n[2] = a),
      (n[3] = p))
    : (p = n[3]);
  let m;
  n[4] !== f || n[5] !== p
    ? ((m = (0, v.jsx)(`p`, { className: f, children: p })), (n[4] = f), (n[5] = p), (n[6] = m))
    : (m = n[6]);
  let h = `flex flex-col gap-1 rounded-2xl border border-(--border-default) bg-(--main-surface-secondary) p-4 ${d ? `mt-5` : `mt-4`}`,
    g;
  n[7] === i
    ? (g = n[8])
    : ((g = (0, v.jsx)(`span`, {
        className: `font-semibold`,
        children: (0, v.jsx)(t, {
          id: `planDowngradeModal.newPlan.numberedTiers`,
          defaultMessage: `{planType, select, free {ChatGPT Free} go {ChatGPT Go} plus {ChatGPT Plus} prolite {ChatGPT Pro 100} pro {ChatGPT Pro 200} promax {ChatGPT Pro 500} other {ChatGPT}}`,
          values: { planType: i },
        }),
      })),
      (n[7] = i),
      (n[8] = g));
  let y;
  n[9] !== o || n[10] !== s || n[11] !== c
    ? ((y =
        c == null
          ? null
          : (0, v.jsx)(`span`, {
              className: `text-token-text-secondary`,
              children: (0, v.jsx)(t, {
                id: `planDowngradeModal.newPlanCost`,
                defaultMessage: `{currencyCode} {currencySign}{planCost}/month`,
                values: { currencyCode: o, currencySign: s, planCost: c },
              }),
            })),
      (n[9] = o),
      (n[10] = s),
      (n[11] = c),
      (n[12] = y))
    : (y = n[12]);
  let b;
  n[13] !== g || n[14] !== y
    ? ((b = (0, v.jsxs)(`div`, { className: `flex justify-between`, children: [g, y] })),
      (n[13] = g),
      (n[14] = y),
      (n[15] = b))
    : (b = n[15]);
  let x;
  n[16] === a
    ? (x = n[17])
    : ((x = (0, v.jsx)(`div`, {
        className: `text-token-text-secondary`,
        children:
          a == null
            ? (0, v.jsx)(t, {
                id: `settings.usage.pricingPlanPage.proLiteDowngrade.billingStartWithoutDate`,
                defaultMessage: `Billing will start at the end of your current billing period`,
              })
            : (0, v.jsx)(t, {
                id: `planDowngradeModal.billingStart`,
                defaultMessage: `Billing will start on {renewalDateFormatted}`,
                values: { renewalDateFormatted: a },
              }),
      })),
      (n[16] = a),
      (n[17] = x));
  let S;
  n[18] !== h || n[19] !== b || n[20] !== x
    ? ((S = (0, v.jsxs)(`div`, { className: h, children: [b, x] })),
      (n[18] = h),
      (n[19] = b),
      (n[20] = x),
      (n[21] = S))
    : (S = n[21]);
  let C;
  return (
    n[22] !== S || n[23] !== m
      ? ((C = (0, v.jsxs)(`div`, { className: u.planChangeDetails, children: [m, S] })),
        (n[22] = S),
        (n[23] = m),
        (n[24] = C))
      : (C = n[24]),
    C
  );
}
var _, v;
function y() {
  return (y = e(() => {
    ((_ = i()), p(), n(), s(), r(), l(), (v = a()));
  }))();
}
export { f as a, y as i, h as n, p as o, g as r, m as t };
//# sourceMappingURL=offer-notice-fc65ad117350.js.map
