import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, XOt as r, okt as i, tkt as a } from "./app-shared-2feb3d4c6fcc.js";
import { Vut as o } from "./app-initial-ad16eaadf81f.js";
import { X as s, Z as c, g as l, i as u, r as d, t as f } from "./tax-e50b6a7c0765.js";
import { C as p, S as m, b as h, w as g } from "./pricing-promotions-5aab26ebeddd.js";
function _(e) {
  return [
    { label: v.featureIncludedProducts, icon: e.chats, categories: [`advanced_intelligence`, `codex`] },
    { label: v.featureAccessAcrossDevices, icon: e.globe, categories: [`codex`] },
    { label: v.featureConnectedTools, icon: e.workWithApps, categories: [`apps_integrations`] },
    { label: v.featureSecureWorkspace, icon: e.shieldLockThin, categories: [`workspace_admin`] },
    { label: v.featureCentralizedBilling, icon: e.invoice, categories: [`workspace_admin`] },
    {
      label: v.featureUsageControls,
      icon: e.currencyDollar,
      categories: [`workspace_admin`, `usage_messages`],
    },
    { label: v.featureNoTrainingByDefault, icon: e.desktopBadge, categories: [`workspace_admin`] },
    {
      label: v.featureWorkspaceAgents,
      icon: e.brainPro,
      categories: [`agents_research`, `apps_integrations`],
    },
    { label: v.featureMixSeatTypes, icon: e.group, categories: [`workspace_admin`] },
  ];
}
var v;
function y() {
  return (y = e(() => {
    v = o({
      featureListHeading: {
        id: `pricing.businessPremium.features.heading`,
        defaultMessage: `Designed for workspaces:`,
      },
      publicDescription: {
        id: `pricing.businessPremium.public.description.flexibleSeats`,
        defaultMessage: `A secure workspace with company context and flexible seat types for any budget.`,
      },
      priceFirstDescription: {
        id: `pricing.businessPremium.description.priceFirst`,
        defaultMessage: `A secure workspace with company context`,
      },
      standardSeatDescription: {
        id: `pricing.businessPremium.seat.standard.description.everydayWork`,
        defaultMessage: `Best for everyday work`,
      },
      premiumSeatDescription: {
        id: `teamColumn.seatPricing.premium.description.cadenceToggle`,
        defaultMessage: `5x more usage than standard, no 5-hour limit`,
      },
      featureIncludedProducts: {
        id: `pricing.businessPremium.feature.includedProducts`,
        defaultMessage: `All ChatGPT, ChatGPT Work, and Codex features`,
      },
      featureAccessAcrossDevices: {
        id: `pricing.businessPremium.feature.deviceAccess`,
        defaultMessage: `Access across desktop, web, and mobile`,
      },
      featureConnectedTools: {
        id: `pricing.businessPremium.feature.connectedTools.workspaceIntegrations`,
        defaultMessage: `Connect to Google Workspace, Slack, GitHub, Microsoft 365, and more`,
      },
      featureWorkspaceAgents: {
        id: `pricing.businessPremium.feature.workspaceAgents.customizedWorkflows`,
        defaultMessage: `Workspace agents for customized workflows`,
      },
      featureSecureWorkspace: {
        id: `pricing.businessPremium.feature.workspaceSecurity.ssoMfa`,
        defaultMessage: `Secure workspace with SAML, SSO, and MFA`,
      },
      featureCentralizedBilling: {
        id: `pricing.businessPremium.feature.billing.centralizedAdministration`,
        defaultMessage: `Centralized billing and administration`,
      },
      featureUsageControls: {
        id: `pricing.businessPremium.feature.usage.analyticsAndSpendControls`,
        defaultMessage: `Usage analytics and spend controls`,
      },
      featureNoTrainingByDefault: {
        id: `pricing.businessPremium.feature.dataPrivacy.noTrainingByDefault`,
        defaultMessage: `No training on your business data by default`,
      },
      featureMixSeatTypes: {
        id: `pricing.businessPremium.feature.seatTypes.mixAndMatch`,
        defaultMessage: `Mix and match seat types`,
      },
    });
  }))();
}
var b;
function x() {
  return (x = e(() => {
    b = o({
      billingCadenceToggleLabel: {
        id: `teamColumn.seatPricing.billingCadence.label`,
        defaultMessage: `Business billing frequency`,
      },
      businessChatGptAndCodexPriceFrequency: {
        id: `teamColumn.businessChatGptAndCodexPriceFrequency`,
        defaultMessage: `/ user / month`,
      },
      premiumSeatPricingDisclaimer: {
        id: `teamColumn.seatPricing.teamSizeDisclaimer`,
        defaultMessage: `For teams of 2–200 employees. Unlimited subject to abuse guardrails. <link>Learn more</link>`,
      },
      standardSeatLabel: { id: `teamColumn.seatPricing.standard.label`, defaultMessage: `Standard seat` },
      standardSeatDescription: {
        id: `teamColumn.seatPricing.standard.description`,
        defaultMessage: `Workspace controls and enhanced security`,
      },
      premiumSeatLabel: { id: `teamColumn.seatPricing.premium.label`, defaultMessage: `Premium seat` },
      premiumSeatDescription: {
        id: `teamColumn.seatPricing.premium.description.additionalUsage`,
        defaultMessage: `More usage than standard seats`,
      },
      seatPricePerMonth: {
        id: `teamColumn.seatPricing.monthlyPrice.fullPeriod`,
        defaultMessage: `{price}<period> / month</period>`,
      },
    });
  }))();
}
function S(e) {
  let t = (0, w.c)(10),
    { seats: n, showBillingCadence: r, taxDisplay: i } = e,
    a = `flex w-full flex-col ${r ? `gap-7` : i === `per-seat` ? `gap-0` : i === `shared` ? `gap-4` : `gap-7`}`,
    o = r ? `` : void 0,
    s = r ? i : void 0,
    c;
  if (t[0] !== n || t[1] !== r) {
    let e;
    (t[3] === r
      ? (e = t[4])
      : ((e = (e) =>
          (0, T.jsxs)(
            `div`,
            {
              className: `flex flex-col ${r ? `gap-3` : `gap-1`}`,
              children: [
                (0, T.jsxs)(`div`, {
                  className: `flex items-baseline justify-between gap-3 text-lg leading-6 font-semibold text-(--text-primary) ${r ? `flex-wrap gap-y-1` : ``}`,
                  children: [
                    (0, T.jsx)(`span`, { className: `min-w-0`, children: e.label }),
                    (0, T.jsxs)(`span`, {
                      className: `shrink-0 whitespace-nowrap ${r ? `ms-auto` : ``}`,
                      children: [
                        e.originalPrice == null
                          ? null
                          : (0, T.jsx)(`s`, {
                              "aria-hidden": `true`,
                              className: `me-2 font-normal text-(--text-tertiary)`,
                              children: e.originalPrice,
                            }),
                        e.price,
                      ],
                    }),
                  ],
                }),
                e.promotionDuration == null
                  ? null
                  : (0, T.jsx)(`p`, {
                      className: `text-xs text-(--text-secondary)`,
                      children: e.promotionDuration,
                    }),
                e.taxInformation == null
                  ? null
                  : (0, T.jsx)(`p`, {
                      className: `text-xs text-(--text-secondary)`,
                      children: e.taxInformation,
                    }),
                (0, T.jsx)(`p`, {
                  className: `text-base leading-[21px] font-normal text-(--text-secondary)`,
                  children: e.description,
                }),
              ],
            },
            e.id,
          )),
        (t[3] = r),
        (t[4] = e)),
      (c = n.map(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = c));
  } else c = t[2];
  let l;
  return (
    t[5] !== a || t[6] !== o || t[7] !== s || t[8] !== c
      ? ((l = (0, T.jsx)(`div`, {
          className: a,
          "data-testid": `business-premium-seat-pricing`,
          "data-business-pricing-cadence": o,
          "data-business-pricing-tax": s,
          children: c,
        })),
        (t[5] = a),
        (t[6] = o),
        (t[7] = s),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
function C(e) {
  let t = (0, w.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, T.jsx)(`span`, { className: `font-normal text-(--text-secondary)`, children: n })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var w, T;
function E() {
  return (E = e(() => {
    ((w = n()), (T = t()));
  }))();
}
function D(e) {
  let t = (0, O.c)(7),
    { headline: n, summary: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, k.jsx)(`p`, {
        className: `min-h-8 text-[28px] leading-[34px] font-medium tracking-[-1px] text-(--text-primary)`,
        "data-testid": `pricing-column-headline`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = r
        ? (0, k.jsx)(`p`, {
            className: `min-h-[52px] text-base leading-[26px] font-light tracking-[-0.32px] text-(--text-secondary)`,
            "data-testid": `pricing-column-redesign-summary`,
            children: r,
          })
        : null),
      (t[2] = r),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, k.jsxs)(`div`, { className: `mt-6 flex flex-col gap-3`, children: [i, a] })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
var O, k;
function A() {
  return (A = e(() => {
    ((O = n()), (k = t()));
  }))();
}
function ee(e) {
  let t = (0, N.c)(102),
    {
      plan: n,
      redesigned: r,
      compact: i,
      comparisonSpacing: a,
      type: o,
      price: s,
      actions: c,
      actionsBeforePrice: l,
      secondaryAction: u,
      features: d,
      footer: f,
    } = e,
    p = r !== void 0 && r,
    m = i !== void 0 && i,
    h = a !== void 0 && a,
    g = l !== void 0 && l,
    _ = o === `standard` ? `bg-(--main-surface-primary) dark:bg-transparent` : ``,
    v = p && (m ? `mt-6! min-h-10` : `mt-3! min-h-[85px]`),
    y;
  t[0] !== s.className || t[1] !== v
    ? ((y = [`pricing-column-price-block flex items-end`, v, s.className].filter(Boolean)),
      (t[0] = s.className),
      (t[1] = v),
      (t[2] = y))
    : (y = t[2]);
  let b = y.join(` `),
    x = p ? `mb-2` : `mb-2.5`,
    S = m && `[&_button]:min-h-11`,
    C;
  t[3] !== x || t[4] !== S
    ? ((C = [`w-full`, x, S].filter(Boolean)), (t[3] = x), (t[4] = S), (t[5] = C))
    : (C = t[5]);
  let w = C.join(` `),
    T;
  t[6] !== c || t[7] !== w
    ? ((T = (0, P.jsx)(`div`, { className: w, children: c })), (t[6] = c), (t[7] = w), (t[8] = T))
    : (T = t[8]);
  let E = T,
    O = !p && (h ? `md:min-h-[12rem]` : `md:min-h-[10rem]`),
    k;
  t[9] !== _ || t[10] !== O
    ? ((k = [`relative flex flex-col pricing-column-top-half mt-0`, _, O].filter(Boolean)),
      (t[9] = _),
      (t[10] = O),
      (t[11] = k))
    : (k = t[11]);
  let A = k.join(` `),
    ee = n.lookupType,
    j = `${n.id}-pricing-modal-column-top-half`,
    M = p && `gap-0!`,
    te = s.prefix && `pricing-column-has-price-prefix`,
    ne;
  t[12] !== M || t[13] !== te
    ? ((ne = [`pricing-column-top-stack flex flex-col gap-5 rounded-2xl`, M, te].filter(Boolean)),
      (t[12] = M),
      (t[13] = te),
      (t[14] = ne))
    : (ne = t[14]);
  let re = ne.join(` `),
    ie = s.prefix ? `` : void 0,
    ae = p && `h-8 min-h-8`,
    F;
  t[15] === ae
    ? (F = t[16])
    : ((F = [`pricing-column-label-row relative flex items-start justify-between gap-2`, ae].filter(Boolean)),
      (t[15] = ae),
      (t[16] = F));
  let oe = F.join(` `),
    se = n.headingId,
    I = p ? `pricing-column-plan-name` : void 0,
    ce = p ? `font-oai text-lg leading-8 font-semibold tracking-[-0.18px]` : `text-[28px] font-medium`,
    le;
  t[17] === ce
    ? (le = t[18])
    : ((le = [`pricing-column-plan-heading flex min-w-0 grow items-start justify-between gap-2`, ce]),
      (t[17] = ce),
      (t[18] = le));
  let ue = le.join(` `),
    L;
  t[19] === n.name
    ? (L = t[20])
    : ((L = (0, P.jsx)(`span`, {
        className: `flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1`,
        children: n.name,
      })),
      (t[19] = n.name),
      (t[20] = L));
  let R;
  t[21] !== n.badge || t[22] !== n.headingId || t[23] !== I || t[24] !== ue || t[25] !== L
    ? ((R = (0, P.jsxs)(`h3`, {
        id: se,
        "data-pricing-column-plan-heading": ``,
        "data-testid": I,
        className: ue,
        children: [L, n.badge],
      })),
      (t[21] = n.badge),
      (t[22] = n.headingId),
      (t[23] = I),
      (t[24] = ue),
      (t[25] = L),
      (t[26] = R))
    : (R = t[26]);
  let z;
  t[27] !== n.id || t[28] !== s.override || t[29] !== s.prefix || t[30] !== p
    ? ((z =
        !p && !s.override && s.prefix
          ? (0, P.jsx)(`p`, {
              className: `pricing-column-price-prefix absolute top-full mt-2 w-full text-start text-xs text-(--text-secondary)`,
              "data-testid": `${n.id}-pricing-column-price-prefix`,
              children: s.prefix,
            })
          : null),
      (t[27] = n.id),
      (t[28] = s.override),
      (t[29] = s.prefix),
      (t[30] = p),
      (t[31] = z))
    : (z = t[31]);
  let B;
  t[32] !== n.accessory || t[33] !== oe || t[34] !== R || t[35] !== z
    ? ((B = (0, P.jsxs)(`div`, { className: oe, children: [R, n.accessory, z] })),
      (t[32] = n.accessory),
      (t[33] = oe),
      (t[34] = R),
      (t[35] = z),
      (t[36] = B))
    : (B = t[36]);
  let V;
  t[37] !== n.headline || t[38] !== n.summary || t[39] !== p
    ? ((V = p && n.headline ? (0, P.jsx)(D, { headline: n.headline, summary: n.summary }) : null),
      (t[37] = n.headline),
      (t[38] = n.summary),
      (t[39] = p),
      (t[40] = V))
    : (V = t[40]);
  let H;
  t[41] !== E || t[42] !== g
    ? ((H = g ? (0, P.jsx)(`div`, { className: `mt-6`, children: E }) : null),
      (t[41] = E),
      (t[42] = g),
      (t[43] = H))
    : (H = t[43]);
  let U;
  t[44] !== n.id || t[45] !== s.loading || t[46] !== s.override || t[47] !== b
    ? ((U = s.override
        ? (0, P.jsx)(`div`, {
            className: b,
            hidden: !!s.loading,
            "data-testid": `${n.id}-pricing-column-payments-override`,
            children: (0, P.jsx)(`span`, {
              className: `inline-flex items-center gap-1.5 text-3xl text-(--text-primary)`,
              children: s.override,
            }),
          })
        : null),
      (t[44] = n.id),
      (t[45] = s.loading),
      (t[46] = s.override),
      (t[47] = b),
      (t[48] = U))
    : (U = t[48]);
  let W;
  t[49] !== n.id || t[50] !== s.loading || t[51] !== s.loadingClassName
    ? ((W = s.loading
        ? (0, P.jsx)(`div`, {
            className: s.loadingClassName,
            "data-testid": `${n.id}-pricing-column-cost-skeleton`,
            children: s.loading,
          })
        : null),
      (t[49] = n.id),
      (t[50] = s.loading),
      (t[51] = s.loadingClassName),
      (t[52] = W))
    : (W = t[52]);
  let G;
  t[53] !== n.id || t[54] !== s.content || t[55] !== s.loading || t[56] !== s.override || t[57] !== b
    ? ((G = s.override
        ? null
        : (0, P.jsx)(`div`, {
            className: `${b} relative gap-1.5`,
            hidden: !!s.loading,
            "data-testid": `${n.id}-pricing-column-cost`,
            children: s.content,
          })),
      (t[53] = n.id),
      (t[54] = s.content),
      (t[55] = s.loading),
      (t[56] = s.override),
      (t[57] = b),
      (t[58] = G))
    : (G = t[58]);
  let K;
  t[59] !== re ||
  t[60] !== ie ||
  t[61] !== B ||
  t[62] !== V ||
  t[63] !== H ||
  t[64] !== U ||
  t[65] !== W ||
  t[66] !== G
    ? ((K = (0, P.jsxs)(`div`, {
        className: re,
        "data-pricing-column-has-price-prefix": ie,
        "data-pricing-column-top-stack": ``,
        children: [B, V, H, U, W, G],
      })),
      (t[59] = re),
      (t[60] = ie),
      (t[61] = B),
      (t[62] = V),
      (t[63] = H),
      (t[64] = U),
      (t[65] = W),
      (t[66] = G),
      (t[67] = K))
    : (K = t[67]);
  let q;
  t[68] !== n.id || t[69] !== s.override || t[70] !== s.subtitle
    ? ((q =
        !s.override && s.subtitle
          ? (0, P.jsx)(`p`, {
              className: `mt-6 mb-3 text-sm text-(--text-tertiary)`,
              "data-testid": `${n.id}-pricing-column-cost-subtitle`,
              children: s.subtitle,
            })
          : null),
      (t[68] = n.id),
      (t[69] = s.override),
      (t[70] = s.subtitle),
      (t[71] = q))
    : (q = t[71]);
  let J;
  t[72] !== n.id || t[73] !== n.summary || t[74] !== n.summaryClassName || t[75] !== p
    ? ((J =
        n.summary && !p
          ? (0, P.jsx)(`p`, {
              className: [`text-(--text-primary) mt-4 text-base font-medium`, n.summaryClassName]
                .filter(Boolean)
                .join(` `),
              "data-testid": `${n.id}-pricing-column-cost-summary`,
              children: n.summary,
            })
          : null),
      (t[72] = n.id),
      (t[73] = n.summary),
      (t[74] = n.summaryClassName),
      (t[75] = p),
      (t[76] = J))
    : (J = t[76]);
  let Y;
  t[77] !== n.lookupType || t[78] !== A || t[79] !== j || t[80] !== K || t[81] !== q || t[82] !== J
    ? ((Y = (0, P.jsxs)(`div`, {
        className: A,
        "data-pricing-plan-type": ee,
        "data-testid": j,
        children: [K, q, J],
      })),
      (t[77] = n.lookupType),
      (t[78] = A),
      (t[79] = j),
      (t[80] = K),
      (t[81] = q),
      (t[82] = J),
      (t[83] = Y))
    : (Y = t[83]);
  let X = g ? null : E,
    Z;
  t[84] !== u || t[85] !== _
    ? ((Z = u ? (0, P.jsx)(`div`, { className: `relative flex flex-col ${_} -mt-2`, children: u }) : null),
      (t[84] = u),
      (t[85] = _),
      (t[86] = Z))
    : (Z = t[86]);
  let de = p && `grow-0!`,
    fe;
  t[87] === de
    ? (fe = t[88])
    : ((fe = [`flex flex-col grow gap-2`, de].filter(Boolean)), (t[87] = de), (t[88] = fe));
  let pe = fe.join(` `),
    Q;
  t[89] !== d || t[90] !== pe
    ? ((Q = (0, P.jsx)(`div`, { className: pe, "data-pricing-column-feature-list": ``, children: d })),
      (t[89] = d),
      (t[90] = pe),
      (t[91] = Q))
    : (Q = t[91]);
  let me = p ? `pricing-column-redesign-disclaimer-footer` : void 0,
    he = p
      ? `mt-auto flex w-full flex-col justify-end leading-4 font-normal tracking-[-0.1px] text-[#767676] dark:text-[#A5A5A5] [&_a]:font-medium [&_a]:tracking-normal [&_a]:text-(--text-secondary) [&_a]:underline!`
      : void 0,
    $;
  t[92] !== f || t[93] !== me || t[94] !== he
    ? (($ = (0, P.jsx)(`div`, { "data-testid": me, className: he, children: f })),
      (t[92] = f),
      (t[93] = me),
      (t[94] = he),
      (t[95] = $))
    : ($ = t[95]);
  let ge;
  return (
    t[96] !== Y || t[97] !== X || t[98] !== Z || t[99] !== Q || t[100] !== $
      ? ((ge = (0, P.jsxs)(P.Fragment, { children: [Y, X, Z, Q, $] })),
        (t[96] = Y),
        (t[97] = X),
        (t[98] = Z),
        (t[99] = Q),
        (t[100] = $),
        (t[101] = ge))
      : (ge = t[101]),
    ge
  );
}
function j(e) {
  let t = (0, N.c)(6),
    { children: n, className: r, hasIcon: i } = e,
    a = i !== void 0 && i && `flex`,
    o;
  t[0] !== r || t[1] !== a
    ? ((o = [
        `ms-1 rounded-4xl px-2 pt-1.5 pb-1.25 text-[11px] font-semibold leading-[16px]`,
        `bg-[color:var(--accent-blue)]/[.09] text-(--interactive-label-accent-accessible) dark:bg-[color:var(--accent-blue)]/20`,
        a,
        r,
      ].filter(Boolean)),
      (t[0] = r),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s = o.join(` `),
    c;
  return (
    t[3] !== n || t[4] !== s
      ? ((c = (0, P.jsx)(`span`, { className: s, "data-testid": `pricing-column-badge`, children: n })),
        (t[3] = n),
        (t[4] = s),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
function M(e) {
  let t = (0, N.c)(16),
    { metadata: n, clockIcon: r } = e,
    o = i();
  if (m(n)) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, P.jsx)(a, { ...g.limitedTime })), (t[0] = e))
      : (e = t[0]);
    let n;
    return (
      t[1] === r
        ? (n = t[2])
        : ((n = (0, P.jsx)(j, {
            hasIcon: !0,
            children: (0, P.jsxs)(`span`, { className: `inline-flex items-center gap-1`, children: [r, e] }),
          })),
          (t[1] = r),
          (t[2] = n)),
      n
    );
  }
  if ((n.schedule?.start_after_num_periods ?? 0) > 0) return null;
  if (n.promotion_type_label) {
    let e;
    return (
      t[3] === n.promotion_type_label
        ? (e = t[4])
        : ((e = (0, P.jsx)(j, { children: n.promotion_type_label })),
          (t[3] = n.promotion_type_label),
          (t[4] = e)),
      e
    );
  }
  if (n.duration) {
    if (`percentage` in n.discount) {
      let e;
      t[5] === n.discount.percentage
        ? (e = t[6])
        : ((e = Math.round(n.discount.percentage)), (t[5] = n.discount.percentage), (t[6] = e));
      let r;
      return (
        t[7] === e
          ? (r = t[8])
          : ((r = (0, P.jsx)(j, {
              children: (0, P.jsx)(a, { ...g.percentageDiscount, values: { discount_percentage: e } }),
            })),
            (t[7] = e),
            (t[8] = r)),
        r
      );
    }
    if (`value` in n.discount) {
      let e;
      t[9] !== o || t[10] !== n.discount.currency_code || t[11] !== n.discount.value
        ? ((e = o.formatNumber(n.discount.value, {
            style: `currency`,
            currency: n.discount.currency_code,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          })),
          (t[9] = o),
          (t[10] = n.discount.currency_code),
          (t[11] = n.discount.value),
          (t[12] = e))
        : (e = t[12]);
      let r;
      return (
        t[13] === e
          ? (r = t[14])
          : ((r = (0, P.jsx)(j, {
              children: (0, P.jsx)(a, { ...g.flatDiscount, values: { discounted_cost: e } }),
            })),
            (t[13] = e),
            (t[14] = r)),
        r
      );
    }
  }
  let s;
  return (
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, P.jsx)(j, { children: (0, P.jsx)(a, { ...g.promo }) })), (t[15] = s))
      : (s = t[15]),
    s
  );
}
var N, P;
function te() {
  return (te = e(() => {
    ((N = n()), r(), p(), h(), A(), (P = t()));
  }))();
}
function ne({
  showUnifiedPlusBusinessProCards: e,
  shouldReserveProlitePricePrefixSpace: t,
  showPremiumSeatPricing: n,
  hasInCardBusinessPromotion: r,
  pricingCardRedesign: i,
  hasPromotion: a,
  showGoOnUnifiedPricing: o,
  isGoEnabled: s,
}) {
  let c = e ? `md:[&_.pricing-column-top-half]:min-h-[12rem]` : void 0,
    l =
      [
        c,
        t &&
          `[&_[data-testid$='-pricing-column-cost']]:mt-3 [&_[data-testid$='-pricing-column-cost-skeleton']]:mt-3`,
        n &&
          `[&_[data-testid$='-pricing-column-cost']]:items-center [&_[data-testid$='-pricing-column-cost-summary']]:min-h-12`,
        n &&
          (r
            ? `[&_[data-testid$='-pricing-column-cost']]:min-h-[140px]`
            : `[&_[data-testid$='-pricing-column-cost']]:min-h-[180px] [&_[data-testid$='-pricing-column-cost-summary']]:mt-2`),
        n && (i || a) && `min-[52rem]:[&_[data-testid$='-pricing-column-cost-summary']]:min-h-18`,
        n &&
          o &&
          s &&
          (r
            ? `min-[90rem]:[&_[data-testid$='-pricing-column-cost']]:min-h-[180px]`
            : `min-[90rem]:[&_[data-testid$='-pricing-column-cost']]:min-h-[248px] min-[110rem]:[&_[data-testid$='-pricing-column-cost']]:min-h-[192px]`),
      ]
        .filter(Boolean)
        .join(` `) || void 0;
  return {
    columnClassName: l,
    freeColumnClassName:
      [l, n && `[&_.pricing-column-price-frequency]:translate-y-3`].filter(Boolean).join(` `) || void 0,
    unifiedClassName: c,
  };
}
function re(e) {
  let t = (0, ae.c)(30),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]),
      (d = t[10]),
      (f = t[11]),
      (p = t[12]))
    : (({
        children: n,
        className: r,
        type: p,
        wide: a,
        useStandardHighlightSurface: o,
        useRateLimitBlueTreatment: s,
        pricingCardRedesign: c,
        showCardOutline: l,
        showNewDesign: u,
        useNewGradient: d,
        useRedesignHighlightBorder: f,
        ...i
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p));
  let m = a !== void 0 && a,
    h = o !== void 0 && o,
    g = s !== void 0 && s,
    _ = c !== void 0 && c,
    v = l !== void 0 && l,
    y = u !== void 0 && u,
    b = d !== void 0 && d,
    x = f !== void 0 && f,
    S =
      p === `highlight` && h
        ? `bg-(--main-surface-primary) dark:bg-(--bg-primary)`
        : p === `highlight` && b
          ? `bg-[linear-gradient(180deg,_#FFFFFF_0%,_#EEF6FF_100%)] dark:bg-[linear-gradient(180deg,_#212121_0%,_#274B72_100%)]`
          : g
            ? `bg-[linear-gradient(206.72deg,_#E8F4FF_2.34%,_#FFFFFF_92.37%)] dark:bg-[linear-gradient(206.72deg,_#274B72_2.34%,_#212121_92.37%)]`
            : `bg-[linear-gradient(206.72deg,_#EEEFFF_2.34%,_#FFFFFF_92.37%)] dark:bg-[linear-gradient(206.72deg,_#30305F_2.34%,_#212121_92.37%)]`,
    C = p === `promo` && `border-(--border-light)`,
    w;
  t[13] !== C || t[14] !== S
    ? ((w = [`md:mt-0 md:mb-0`, S, C].filter(Boolean)), (t[13] = C), (t[14] = S), (t[15] = w))
    : (w = t[15]);
  let T = w.join(` `),
    E = oe[p],
    D = m ? `md:max-w-117` : `md:max-w-96`,
    O = p !== `standard` && T,
    k = _
      ? `justify-start gap-6 rounded-3xl px-[23px]! pt-[23px]! pb-[25px]! [box-shadow:0_4px_8px_rgba(0,0,0,0.05)] md:rounded-3xl!`
      : `justify-center gap-4 rounded-xl px-6 py-6.5 md:rounded-2xl!`,
    A = _ && `md:mt-0! md:mb-0! md:rounded-3xl!`,
    ee =
      v &&
      (y && p === `highlight` && x
        ? `border-[1.5px]!`
        : p === `highlight`
          ? `md:border! border!`
          : `md:border!`),
    j = v && (x ? `border-[color:var(--accent-blue,var(--color-blue))]/50!` : `border-(--border-default)!`),
    M;
  t[16] !== r ||
  t[17] !== E ||
  t[18] !== D ||
  t[19] !== O ||
  t[20] !== k ||
  t[21] !== A ||
  t[22] !== ee ||
  t[23] !== j
    ? ((M = [
        E,
        D,
        O,
        `relative z-10 flex h-full w-full flex-1 flex-col text-sm transition-colors duration-200 ease-out`,
        k,
        A,
        ee,
        j,
        r,
      ].filter(Boolean)),
      (t[16] = r),
      (t[17] = E),
      (t[18] = D),
      (t[19] = O),
      (t[20] = k),
      (t[21] = A),
      (t[22] = ee),
      (t[23] = j),
      (t[24] = M))
    : (M = t[24]);
  let N = M.join(` `),
    P;
  return (
    t[25] !== n || t[26] !== i || t[27] !== N || t[28] !== p
      ? ((P = (0, F.jsx)(`div`, {
          ...i,
          "data-pricing-column-content": ``,
          "data-pricing-column-treatment": p,
          className: N,
          children: n,
        })),
        (t[25] = n),
        (t[26] = i),
        (t[27] = N),
        (t[28] = p),
        (t[29] = P))
      : (P = t[29]),
    P
  );
}
function ie(e) {
  let t = (0, ae.c)(12),
    { children: n, planId: r, redesigned: i, highlighted: a, wide: o, responsive: s, hasBanner: c } = e,
    l = r === `free` || r === `free_workspace`,
    u = `${r}-pricing-modal-column-wrapper`,
    d = i && `flex`,
    f = c && `mt-9 md:mt-0`,
    p = o ? `md:max-w-117` : `md:max-w-96`,
    m = s && `justify-self-center`,
    h = s && a && `order-first min-[52rem]:order-2 min-[90rem]:order-none`,
    g = s && !a && l && `min-[52rem]:order-1 min-[90rem]:order-none`,
    _ = s && !a && !l && `min-[52rem]:order-3 min-[90rem]:order-none`,
    v;
  t[0] !== d || t[1] !== f || t[2] !== p || t[3] !== m || t[4] !== h || t[5] !== g || t[6] !== _
    ? ((v = [`relative w-full min-w-0 flex-1`, d, f, p, m, h, g, _].filter(Boolean)),
      (t[0] = d),
      (t[1] = f),
      (t[2] = p),
      (t[3] = m),
      (t[4] = h),
      (t[5] = g),
      (t[6] = _),
      (t[7] = v))
    : (v = t[7]);
  let y = v.join(` `),
    b;
  return (
    t[8] !== n || t[9] !== u || t[10] !== y
      ? ((b = (0, F.jsx)(`div`, { "data-testid": u, className: y, children: n })),
        (t[8] = n),
        (t[9] = u),
        (t[10] = y),
        (t[11] = b))
      : (b = t[11]),
    b
  );
}
var ae, F, oe;
function se() {
  return (se = e(() => {
    ((ae = n()),
      (F = t()),
      (oe = {
        standard: `border-s border-e border-t border-b border-(--border-default) dark:bg-(--bg-primary) md:min-h-[30rem] md:rounded-none md:border-e-0 md:pb-6 md:first:rounded-ss-xl md:first:rounded-es-xl md:last:rounded-se-xl md:last:rounded-ee-xl md:last:border-e`,
        promo: `shadow-lg md:min-h-[30rem] md:border-e-1 md:border-b-1 md:border-t-1 md:border-s-1 md:pb-6`,
        highlight: `md:-mt-4 md:-mb-4 md:min-h-[20rem] md:pb-6 md:first:rounded-ss-xl md:first:rounded-es-xl md:last:rounded-se-xl md:last:rounded-ee-xl`,
      }));
  }))();
}
var I;
function ce() {
  return (ce = e(() => {
    I = o({
      currencyWithDuration: {
        id: `PricingModalColumn.currencyWithDuration`,
        defaultMessage: `{currency} {duration}`,
      },
      frequency: { id: `frequency`, defaultMessage: `month` },
      frequencyWithTaxInformation: {
        id: `frequencyWithTaxInformation`,
        defaultMessage: `month (including {tax_type})`,
      },
      frequencyWithTaxInformationIncludingAmount: {
        id: `frequencyWithTaxInformationIncludingAmount`,
        defaultMessage: `month (includes {vat_amount} of {tax_type})`,
      },
      frequencyTaxInformationSuffix: {
        id: `PricingModalColumn.frequencyTaxInformationSuffix`,
        defaultMessage: `(including {tax_type})`,
      },
      frequencyTaxInformationIncludingAmountSuffix: {
        id: `PricingModalColumn.frequencyTaxInformationIncludingAmountSuffix`,
        defaultMessage: `(includes {vat_amount} of {tax_type})`,
      },
      subscriptionFrequencyTaxInformation: {
        id: `PricingModalColumn.subscriptionFrequencyTaxInformation`,
        defaultMessage: `month ({tax_behavior, select, inclusive {inclusive of} exclusive {exclusive of} other {exclusive of} } {tax_type, select, gst {GST} vat {VAT} jct {JCT} other {tax} })`,
      },
      subscriptionFrequencyTaxInformationWithAmount: {
        id: `PricingModalColumn.subscriptionFrequencyTaxInformationWithAmount`,
        defaultMessage: `month ({tax_behavior, select, inclusive {includes} exclusive {plus} other {plus} } {tax_amount} of {tax_type, select, gst {GST} vat {VAT} jct {JCT} other {tax} })`,
      },
      subscriptionFrequencyTaxInformationSuffix: {
        id: `PricingModalColumn.subscriptionFrequencyTaxInformationSuffix`,
        defaultMessage: `({tax_behavior, select, inclusive {inclusive of} exclusive {exclusive of} other {exclusive of} } {tax_type, select, gst {GST} vat {VAT} jct {JCT} other {tax} })`,
      },
      subscriptionFrequencyTaxInformationWithAmountSuffix: {
        id: `PricingModalColumn.subscriptionFrequencyTaxInformationWithAmountSuffix`,
        defaultMessage: `({tax_behavior, select, inclusive {includes} exclusive {plus} other {plus} } {tax_amount} of {tax_type, select, gst {GST} vat {VAT} jct {JCT} other {tax} })`,
      },
    });
  }))();
}
function le(e) {
  let t = (0, B.c)(18),
    { className: n, title: r, subtitle: i, closeButton: a, compact: o } = e,
    s = o !== void 0 && o,
    c = s ? `pt-6 pb-4 md:pt-8 md:pb-5` : `py-4 md:pt-[4.5rem] md:pb-6`,
    l;
  t[0] !== n || t[1] !== c
    ? ((l = [`relative grid grid-cols-[1fr_auto_1fr] px-6`, c, n].filter(Boolean)),
      (t[0] = n),
      (t[1] = c),
      (t[2] = l))
    : (l = t[2]);
  let u = l.join(` `),
    d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, V.jsx)(`div`, { className: `flex items-center md:items-start` })), (t[3] = d))
    : (d = t[3]);
  let f = s
      ? `text-2xl leading-8 font-semibold text-(--text-primary)`
      : `text-[28px] leading-[34px] font-normal`,
    p;
  t[4] !== f || t[5] !== r
    ? ((p = (0, V.jsx)(`h2`, { className: f, children: r })), (t[4] = f), (t[5] = r), (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] === i
    ? (m = t[8])
    : ((m = i ? (0, V.jsx)(`div`, { className: `mt-3 mb-1 text-(--text-secondary)`, children: i }) : null),
      (t[7] = i),
      (t[8] = m));
  let h;
  t[9] !== p || t[10] !== m
    ? ((h = (0, V.jsxs)(`div`, {
        className: `my-1 flex flex-col items-center justify-center md:mt-0 md:mb-0`,
        children: [p, m],
      })),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] === a
    ? (g = t[13])
    : ((g = (0, V.jsx)(`div`, { className: `flex items-center justify-end md:items-start`, children: a })),
      (t[12] = a),
      (t[13] = g));
  let _;
  return (
    t[14] !== g || t[15] !== u || t[16] !== h
      ? ((_ = (0, V.jsxs)(`div`, { className: u, children: [d, h, g] })),
        (t[14] = g),
        (t[15] = u),
        (t[16] = h),
        (t[17] = _))
      : (_ = t[17]),
    _
  );
}
function ue(e) {
  let t = (0, B.c)(36),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]),
      (d = t[10]),
      (f = t[11]),
      (p = t[12]),
      (m = t[13]))
    : (({
        children: n,
        className: r,
        columnCount: i,
        redesigned: l,
        newDesign: u,
        hasPromotion: d,
        currentPlan: a,
        hasNoPaymentTrial: f,
        offsetForBanner: p,
        expanded: o,
        compact: m,
        style: c,
        ...s
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m));
  let h = l !== void 0 && l,
    g = u !== void 0 && u,
    _ = d !== void 0 && d,
    v = f !== void 0 && f,
    y = p !== void 0 && p,
    b = m !== void 0 && m,
    x;
  t[14] !== i || t[15] !== c
    ? ((x = { "--pricing-modal-column-count": i, ...c }), (t[14] = i), (t[15] = c), (t[16] = x))
    : (x = t[16]);
  let S = x,
    C = !b && `grid justify-center gap-6 px-4`,
    w = !b && (o ? `grid-cols-[minmax(0,29.25rem)]` : `grid-cols-[minmax(0,24rem)]`),
    T =
      !b &&
      i > 1 &&
      (o
        ? `min-[52rem]:grid-cols-[repeat(2,minmax(0,29.25rem))]`
        : `min-[52rem]:grid-cols-[repeat(2,minmax(0,24rem))]`),
    E =
      !b &&
      i > 2 &&
      (o
        ? `min-[90rem]:grid-cols-[repeat(var(--pricing-modal-column-count),minmax(0,29.25rem))]`
        : `min-[90rem]:grid-cols-[repeat(var(--pricing-modal-column-count),minmax(0,24rem))]`),
    D;
  t[17] !== r ||
  t[18] !== i ||
  t[19] !== b ||
  t[20] !== a ||
  t[21] !== v ||
  t[22] !== _ ||
  t[23] !== g ||
  t[24] !== y ||
  t[25] !== h ||
  t[26] !== T ||
  t[27] !== E ||
  t[28] !== C ||
  t[29] !== w
    ? ((D = [
        C,
        w,
        T,
        E,
        !b &&
          h &&
          !_ && [
            g
              ? `has-[[data-business-pricing-cadence]]:[&_.pricing-column-price-block]:mt-4!`
              : `has-[[data-business-pricing-cadence]]:[&_.pricing-column-price-block]:mt-1!`,
            `has-[[data-business-pricing-cadence]:not([data-business-pricing-tax])]:[&_.pricing-column-price-block]:min-h-[160px]!`,
            `has-[[data-business-pricing-tax=shared]]:[&_.pricing-column-price-block]:min-h-[188px]! has-[[data-business-pricing-tax=per-seat]]:[&_.pricing-column-price-block]:min-h-[220px]!`,
            `[&_[data-business-pricing-cadence]]:gap-6!`,
            i > 3 &&
              `min-[90rem]:has-[[data-business-pricing-cadence]:not([data-business-pricing-tax])]:[&_.pricing-column-price-block]:min-h-[228px]! min-[110rem]:has-[[data-business-pricing-cadence]:not([data-business-pricing-tax])]:[&_.pricing-column-price-block]:min-h-[172px]! min-[90rem]:max-[110rem]:has-[[data-business-pricing-tax=shared]]:[&_.pricing-column-price-block]:min-h-[252px]! min-[90rem]:max-[110rem]:has-[[data-business-pricing-tax=per-seat]]:[&_.pricing-column-price-block]:min-h-[284px]!`,
          ],
        `has-[[data-business-pricing-tax=shared]]:[&_.pricing-column-price-block]:min-h-[208px] has-[[data-business-pricing-tax=per-seat]]:[&_.pricing-column-price-block]:min-h-[240px]`,
        i > 3 && [
          `min-[90rem]:max-[110rem]:has-[[data-business-pricing-cadence]]:[&_.pricing-column-label-row]:min-h-20`,
          `min-[90rem]:max-[110rem]:has-[[data-business-pricing-tax=shared]]:[&_.pricing-column-price-block]:min-h-[272px] min-[90rem]:max-[110rem]:has-[[data-business-pricing-tax=per-seat]]:[&_.pricing-column-price-block]:min-h-[304px]`,
        ],
        !b && [
          i === 2 && `min-[52rem]:[&>[data-testid$='-pricing-modal-column-wrapper']]:order-none`,
          i > 2 &&
            !v &&
            a === `plus` &&
            `min-[52rem]:[&>[data-testid=plus-pricing-modal-column-wrapper]]:order-1 min-[90rem]:[&>[data-testid=plus-pricing-modal-column-wrapper]]:order-none`,
          i > 2 &&
            !v &&
            a === `prolite` &&
            `min-[52rem]:[&>[data-testid=go-pricing-modal-column-wrapper]]:order-1 min-[90rem]:[&>[data-testid=go-pricing-modal-column-wrapper]]:order-none`,
        ],
        y && `md:mt-[72px]`,
        r,
      ]
        .flat(2)
        .filter(Boolean)
        .join(` `)),
      (t[17] = r),
      (t[18] = i),
      (t[19] = b),
      (t[20] = a),
      (t[21] = v),
      (t[22] = _),
      (t[23] = g),
      (t[24] = y),
      (t[25] = h),
      (t[26] = T),
      (t[27] = E),
      (t[28] = C),
      (t[29] = w),
      (t[30] = D))
    : (D = t[30]);
  let O;
  return (
    t[31] !== n || t[32] !== S || t[33] !== s || t[34] !== D
      ? ((O = (0, V.jsx)(`div`, { ...s, className: D, style: S, children: n })),
        (t[31] = n),
        (t[32] = S),
        (t[33] = s),
        (t[34] = D),
        (t[35] = O))
      : (O = t[35]),
    O
  );
}
function L(e) {
  let t = (0, B.c)(17),
    n,
    r,
    i,
    a,
    o;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]))
    : (({ enterprise: i, legal: a, countrySelector: r, className: n, ...o } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o));
  let s;
  t[6] === n
    ? (s = t[7])
    : ((s = [
        `relative z-10 flex flex-col items-center sm:grid sm:grid-cols-[1fr_auto_1fr] bg-(--bg-elevated-secondary)`,
        n,
      ].filter(Boolean)),
      (t[6] = n),
      (t[7] = s));
  let c = s.join(` `),
    l;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = (0, V.jsx)(`div`, {})), (t[8] = l)) : (l = t[8]);
  let u;
  t[9] !== i || t[10] !== a
    ? ((u = (0, V.jsxs)(`div`, {
        className: `flex h-[136px] flex-col items-center justify-start gap-2 text-sm text-(--text-secondary) md:mt-10 md:mb-8 md:h-auto`,
        children: [i, a],
      })),
      (t[9] = i),
      (t[10] = a),
      (t[11] = u))
    : (u = t[11]);
  let d;
  return (
    t[12] !== r || t[13] !== o || t[14] !== c || t[15] !== u
      ? ((d = (0, V.jsxs)(`div`, {
          ...o,
          "data-testid": `pricing-modal-footer`,
          className: c,
          children: [l, u, r],
        })),
        (t[12] = r),
        (t[13] = o),
        (t[14] = c),
        (t[15] = u),
        (t[16] = d))
      : (d = t[16]),
    d
  );
}
function R(e) {
  let t = (0, B.c)(7),
    { children: n, compact: r, redesigned: i, newDesign: a } = e,
    o =
      r !== void 0 && r
        ? `mb-2 md:mb-3`
        : i !== void 0 && i && !(a !== void 0 && a)
          ? `mb-3 md:mb-10`
          : `mb-3 md:mb-6`,
    s;
  t[0] === o ? (s = t[1]) : ((s = [`flex justify-center`, o]), (t[0] = o), (t[1] = s));
  let c = s.join(` `),
    l;
  t[2] === n
    ? (l = t[3])
    : ((l = (0, V.jsx)(`div`, { className: `w-[fit-content]`, children: n })), (t[2] = n), (t[3] = l));
  let u;
  return (
    t[4] !== c || t[5] !== l
      ? ((u = (0, V.jsx)(`div`, { className: c, "data-see-all-plans-toggle": ``, children: l })),
        (t[4] = c),
        (t[5] = l),
        (t[6] = u))
      : (u = t[6]),
    u
  );
}
function z(e) {
  let t = (0, B.c)(4),
    { renderLink: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((r = (0, V.jsx)(l, {})), (t[0] = r)) : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, V.jsx)(a, { ...c.needMoreCapabilities })), (t[1] = i))
    : (i = t[1]);
  let o;
  return (
    t[2] === n
      ? (o = t[3])
      : ((o = (0, V.jsxs)(V.Fragment, {
          children: [
            r,
            (0, V.jsxs)(`div`, {
              className: `flex flex-col items-center justify-center`,
              children: [
                i,
                (0, V.jsx)(`div`, {
                  children: (0, V.jsx)(a, { ...c.seeChatGptEnterprise, values: { link: n } }),
                }),
              ],
            }),
          ],
        })),
        (t[2] = n),
        (t[3] = o)),
    o
  );
}
var B, V;
function H() {
  return (H = e(() => {
    ((B = n()), r(), u(), s(), (V = t()));
  }))();
}
var U, W;
function G() {
  return (G = e(() => {
    ((U = `_surface_10k57_1`), (W = { surface: U }));
  }))();
}
function K(e) {
  let t = (0, Y.c)(22),
    {
      header: n,
      banners: r,
      introduction: i,
      audienceSelector: a,
      afterPlans: o,
      beforeFooter: s,
      children: c,
      contentProps: l,
      grid: u,
      footer: d,
      redesigned: f,
      newDesign: p,
      compact: m,
    } = e,
    h;
  t[0] !== a || t[1] !== m || t[2] !== p || t[3] !== f
    ? ((h = a == null ? null : (0, X.jsx)(R, { compact: m, redesigned: f, newDesign: p, children: a })),
      (t[0] = a),
      (t[1] = m),
      (t[2] = p),
      (t[3] = f),
      (t[4] = h))
    : (h = t[4]);
  let g;
  t[5] !== c || t[6] !== u
    ? ((g = (0, X.jsx)(ue, { ...u, children: c })), (t[5] = c), (t[6] = u), (t[7] = g))
    : (g = t[7]);
  let _;
  t[8] !== o || t[9] !== r || t[10] !== l || t[11] !== n || t[12] !== i || t[13] !== h || t[14] !== g
    ? ((_ = (0, X.jsxs)(`div`, { ...l, children: [r, n, i, h, g, o] })),
      (t[8] = o),
      (t[9] = r),
      (t[10] = l),
      (t[11] = n),
      (t[12] = i),
      (t[13] = h),
      (t[14] = g),
      (t[15] = _))
    : (_ = t[15]);
  let v;
  t[16] === d ? (v = t[17]) : ((v = d == null ? null : (0, X.jsx)(L, { ...d })), (t[16] = d), (t[17] = v));
  let y;
  return (
    t[18] !== s || t[19] !== _ || t[20] !== v
      ? ((y = (0, X.jsxs)(q, { className: `contents`, children: [_, s, v] })),
        (t[18] = s),
        (t[19] = _),
        (t[20] = v),
        (t[21] = y))
      : (y = t[21]),
    y
  );
}
function q(e) {
  let t = (0, Y.c)(6),
    { as: n, className: r, children: i } = e,
    a = n === void 0 ? `div` : n,
    o;
  t[0] === r ? (o = t[1]) : ((o = [W.surface, r].filter(Boolean)), (t[0] = r), (t[1] = o));
  let s = o.join(` `),
    c;
  return (
    t[2] !== a || t[3] !== i || t[4] !== s
      ? ((c = (0, X.jsx)(a, { className: s, children: i })), (t[2] = a), (t[3] = i), (t[4] = s), (t[5] = c))
      : (c = t[5]),
    c
  );
}
function J(e) {
  let t = (0, Y.c)(3),
    { onClick: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, X.jsx)(a, { ...c.seeAllPlans })), (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, X.jsx)(`button`, {
          type: `button`,
          className: `text-base leading-[26px] text-token-text-primary underline underline-offset-2 [text-decoration-skip-ink:none]`,
          onClick: n,
          children: r,
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
var Y, X;
function Z() {
  return (Z = e(() => {
    ((Y = n()), r(), s(), H(), G(), (X = t()));
  }))();
}
function de(e) {
  let t = (0, pe.c)(22),
    { amount: n, currency: r, screenReaderText: i, strikethrough: a, redesigned: o, compact: s } = e,
    c = a !== void 0 && a,
    l = o !== void 0 && o,
    u = s !== void 0 && s,
    d = u ? `pricing-column-new-design-cost` : void 0,
    f = u ? `items-start gap-0.5` : l && `items-start`,
    p = c ? `text-(--text-tertiary)` : `text-(--text-primary)`,
    m;
  t[0] !== f || t[1] !== p
    ? ((m = [`flex`, f, p].filter(Boolean)), (t[0] = f), (t[1] = p), (t[2] = m))
    : (m = t[2]);
  let h = m.join(` `),
    g;
  t[3] === i
    ? (g = t[4])
    : ((g = (0, Q.jsx)(`span`, { className: `sr-only`, children: i })), (t[3] = i), (t[4] = g));
  let _ = u ? `pricing-column-new-design-currency` : void 0,
    v = u
      ? `text-base leading-[26px] font-normal tracking-[-0.32px]`
      : l
        ? `text-[56px] leading-none font-normal tracking-[-0.6px]`
        : `text-xl text-gray-500 text-secondary`,
    y;
  t[5] !== r || t[6] !== _ || t[7] !== v
    ? ((y = (0, Q.jsx)(`span`, { "aria-hidden": `true`, "data-testid": _, className: v, children: r })),
      (t[5] = r),
      (t[6] = _),
      (t[7] = v),
      (t[8] = y))
    : (y = t[8]);
  let b = u ? `pricing-column-new-design-amount` : void 0,
    x = u
      ? `text-[40px] leading-[40px] font-normal tracking-[-0.6px]`
      : l
        ? `text-[56px] leading-none font-normal tracking-[-0.6px]`
        : `text-5xl font-medium`,
    S = c && `line-through`,
    C;
  t[9] !== x || t[10] !== S
    ? ((C = [x, S].filter(Boolean)), (t[9] = x), (t[10] = S), (t[11] = C))
    : (C = t[11]);
  let w = C.join(` `),
    T;
  t[12] !== n || t[13] !== b || t[14] !== w
    ? ((T = (0, Q.jsx)(`span`, { "aria-hidden": `true`, "data-testid": b, className: w, children: n })),
      (t[12] = n),
      (t[13] = b),
      (t[14] = w),
      (t[15] = T))
    : (T = t[15]);
  let E;
  return (
    t[16] !== y || t[17] !== T || t[18] !== d || t[19] !== h || t[20] !== g
      ? ((E = (0, Q.jsxs)(`div`, { "data-testid": d, className: h, children: [g, y, T] })),
        (t[16] = y),
        (t[17] = T),
        (t[18] = d),
        (t[19] = h),
        (t[20] = g),
        (t[21] = E))
      : (E = t[21]),
    E
  );
}
function fe(e) {
  let t = (0, pe.c)(12),
    { redesigned: n, hidden: r, children: i, discountExpiration: a } = e,
    o = n !== void 0 && n,
    s = r !== void 0 && r,
    c = `pricing-column-price-frequency mt-auto mb-0.5 flex h-full flex-col items-start ${o ? `justify-end pb-0.5` : ``}`,
    l = `w-full text-(--text-secondary) ${o ? `text-base leading-[26px] font-normal tracking-[-0.32px]` : `text-[11px]`}`,
    u;
  t[0] !== i || t[1] !== l
    ? ((u = (0, Q.jsx)(`p`, { className: l, children: i })), (t[0] = i), (t[1] = l), (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] === a
    ? (d = t[4])
    : ((d = (0, Q.jsx)(`p`, { className: `text-xs text-(--text-secondary)`, children: a })),
      (t[3] = a),
      (t[4] = d));
  let f;
  t[5] !== c || t[6] !== u || t[7] !== d
    ? ((f = (0, Q.jsxs)(`div`, { className: c, children: [u, d] })),
      (t[5] = c),
      (t[6] = u),
      (t[7] = d),
      (t[8] = f))
    : (f = t[8]);
  let p;
  return (
    t[9] !== s || t[10] !== f
      ? ((p = (0, Q.jsx)(`div`, { className: `flex items-baseline gap-1.5`, hidden: s, children: f })),
        (t[9] = s),
        (t[10] = f),
        (t[11] = p))
      : (p = t[11]),
    p
  );
}
var pe, Q;
function me() {
  return (me = e(() => {
    ((pe = n()), (Q = t()));
  }))();
}
function he({ config: e, price: t, amount: n }) {
  if (
    n == null ||
    n <= 0 ||
    t?.amount == null ||
    (t.tax !== `inclusive` && t.tax !== `exclusive`) ||
    !e?.symbol_code ||
    !e.tax_type
  )
    return null;
  let r = t.tax === `inclusive` ? e.vat_display?.inclusive_tax_display : e.vat_display?.exclusive_tax_display;
  if (r !== `tax_name_only` && r !== `with_amount`) return null;
  let i = r === `with_amount` && e.tax_percent == null ? `tax_name_only` : r,
    a = null;
  return (
    i === `with_amount` &&
      e.tax_percent != null &&
      (a = f({
        amount: n,
        taxPercent: e.tax_percent,
        inclusive: t.tax === `inclusive`,
        roundToPrecision: e.minor_unit_exponent ?? void 0,
      })),
    {
      message:
        i === `with_amount`
          ? I.subscriptionFrequencyTaxInformationWithAmountSuffix
          : I.subscriptionFrequencyTaxInformationSuffix,
      taxType: e.tax_type,
      taxBehavior: t.tax,
      taxAmount: a,
      currency: e.symbol_code,
      displayOption: i,
    }
  );
}
function $() {
  return ($ = e(() => {
    (d(), ce());
  }))();
}
function ge(e) {
  let t = (0, _e.c)(16),
    n = i(),
    r,
    o,
    s,
    c,
    l,
    u;
  if (t[0] !== n || t[1] !== e) {
    u = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let t = he(e);
      if (t == null) {
        u = null;
        break bb0;
      }
      ((r = a),
        (l = t.message),
        (o = t.taxType),
        (s = t.taxBehavior),
        (c =
          t.taxAmount == null
            ? void 0
            : n.formatNumber(t.taxAmount, {
                style: `currency`,
                currency: t.currency,
                currencyDisplay: `narrowSymbol`,
                trailingZeroDisplay: `stripIfInteger`,
              })));
    }
    ((t[0] = n), (t[1] = e), (t[2] = r), (t[3] = o), (t[4] = s), (t[5] = c), (t[6] = l), (t[7] = u));
  } else ((r = t[2]), (o = t[3]), (s = t[4]), (c = t[5]), (l = t[6]), (u = t[7]));
  if (u !== Symbol.for(`react.early_return_sentinel`)) return u;
  let d;
  t[8] !== o || t[9] !== s || t[10] !== c
    ? ((d = { tax_type: o, tax_behavior: s, tax_amount: c }),
      (t[8] = o),
      (t[9] = s),
      (t[10] = c),
      (t[11] = d))
    : (d = t[11]);
  let f;
  return (
    t[12] !== r || t[13] !== l || t[14] !== d
      ? ((f = (0, ve.jsx)(r, { ...l, values: d })), (t[12] = r), (t[13] = l), (t[14] = d), (t[15] = f))
      : (f = t[15]),
    f
  );
}
var _e, ve;
function ye() {
  return (ye = e(() => {
    ((_e = n()), r(), $(), (ve = t()));
  }))();
}
export {
  y as A,
  S as C,
  x as D,
  b as E,
  v as O,
  te as S,
  E as T,
  ne as _,
  me as a,
  ee as b,
  J as c,
  le as d,
  H as f,
  ie as g,
  re as h,
  fe as i,
  _ as k,
  Z as l,
  I as m,
  ye as n,
  K as o,
  ce as p,
  de as r,
  q as s,
  ge as t,
  z as u,
  se as v,
  C as w,
  M as x,
  j as y,
};
//# sourceMappingURL=tax-information-2fee61dff4f7.js.map
