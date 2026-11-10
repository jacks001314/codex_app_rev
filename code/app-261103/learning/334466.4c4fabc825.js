export const __rspack_esm_ids = [334466]
export const __webpack_modules__ = {
  pUA3(e, a, n) {
    n.d(a, { Caption: () => P, Controls: () => R, Visualization: () => C })
    var t = n("ABep"),
      o = n("Qgfj"),
      i = n("Wf1j"),
      r = n("KwmQ"),
      l = n("pNxJ"),
      s = n("pXKw"),
      g = n("C2BX"),
      c = n("LP6J"),
      m = n("sCEh")
    let d = { defaultValue: 0.7, min: 0, max: 1.5, step: 0.1 },
      y = (e, a = d.defaultValue) => {
        let n = "contractionary" === e ? "contractionary" : "expansionary",
          t = "expansionary" === n ? 1 : -1,
          o = "number" == typeof a && Number.isFinite(a) ? Math.min(d.max, Math.max(d.min, a)) : d.defaultValue,
          i = 0 === o ? 0 : 2 * t * o,
          r = 5 + i / 2
        return {
          policyType: n,
          direction: t,
          moneySupplyX: 5 + 1.6 * t * o,
          interestRate: 5 - 1.6 * t * o,
          investmentX: 5 + 1.6 * t * o,
          aggregateDemandShift: i,
          outputX: r,
          priceLevel: r,
        }
      },
      u = (0, o.YK)({
        moneyMarket: { id: "learningBlock.monetaryPolicy.moneyMarket", defaultMessage: "Money market" },
        adAs: { id: "learningBlock.monetaryPolicy.adAs", defaultMessage: "{demand}–{supply}" },
        interestRate: { id: "learningBlock.monetaryPolicy.interestRate", defaultMessage: "Interest rate" },
        moneyAxis: { id: "learningBlock.monetaryPolicy.moneyAxis", defaultMessage: "Money" },
        priceLevel: { id: "learningBlock.monetaryPolicy.priceLevel", defaultMessage: "Price level" },
        moneyStep: { id: "learningBlock.monetaryPolicy.chain.money", defaultMessage: "Money" },
        rateStep: { id: "learningBlock.monetaryPolicy.chain.rate", defaultMessage: "Rate" },
        investmentStep: { id: "learningBlock.monetaryPolicy.chain.investment", defaultMessage: "Investment" },
        expansionary: { id: "learningBlock.monetaryPolicy.expansionary", defaultMessage: "Expansionary" },
        contractionary: { id: "learningBlock.monetaryPolicy.contractionary", defaultMessage: "Contractionary" },
        policyType: { id: "learningBlock.monetaryPolicy.policyType", defaultMessage: "Policy type" },
        expansionaryCaption: {
          id: "learningBlock.monetaryPolicy.expansionaryCaption",
          defaultMessage:
            "More money lowers the interest rate to {rate}, raises investment, and shifts {notation} right",
        },
        contractionaryCaption: {
          id: "learningBlock.monetaryPolicy.contractionaryCaption",
          defaultMessage:
            "Less money raises the interest rate to {rate}, lowers investment, and shifts {notation} left",
        },
        noPolicyCaption: {
          id: "learningBlock.monetaryPolicy.noPolicyCaption",
          defaultMessage:
            "No policy change: the interest rate stays at {rate}, and investment and {notation} remain unchanged",
        },
        chainAria: {
          id: "learningBlock.monetaryPolicy.chainAria",
          defaultMessage:
            "Monetary-policy transmission chain: {policy} policy changes money supply, interest rate, investment, aggregate demand, real GDP, and the price level.",
        },
        noPolicyChainAria: {
          id: "learningBlock.monetaryPolicy.noPolicyChainAria",
          defaultMessage:
            "Monetary-policy transmission chain with no policy change: money supply, interest rate, investment, aggregate demand, real GDP, and the price level remain unchanged.",
        },
        screenReaderControl: {
          id: "learningBlock.monetaryPolicy.screenReaderControl",
          defaultMessage: "Choose a policy stance to reverse the direction of every link in the transmission chain.",
        },
      }),
      p = { mode: "bounds", bounds: { xMin: 0, xMax: 10, yMin: 0, yMax: 10 }, equalScale: !1, paddingUnits: 0 },
      f = "var(--text-tertiary)",
      M = "var(--learning-block-color-primary)",
      v = "var(--learning-block-color-companion)",
      x = "var(--icon-accent)",
      k = (e, a, n) => ({ x: e, y: a, variant: n ? void 0 : "reference", appearance: { fill: n ? x : f } }),
      h = ({ label: e, direction: a }) =>
        (0, t.jsxs)("span", {
          className: "whitespace-nowrap",
          children: [e, " ", (0, t.jsx)("span", { style: { color: x }, children: a > 0 ? "↑" : a < 0 ? "↓" : "—" })],
        }),
      C = ({ values: e, presentationMode: a }) => {
        let n = (0, i.A)(),
          o = y(e.policy_type, e.policy_strength),
          r = "thumbnail" === a,
          l = o.direction > 0,
          s = 0 === o.aggregateDemandShift ? 0 : o.direction,
          c = 0 === s ? 0 : 1 === s ? -1 : 1,
          d = n.formatMessage(l ? u.expansionary : u.contractionary),
          C = 0 === s ? n.formatMessage(u.noPolicyChainAria) : n.formatMessage(u.chainAria, { policy: d }),
          P = o.interestRate,
          R = [
            {
              kind: "line-segment",
              from: { x: 1.2, y: 8.8 },
              to: { x: 8.8, y: 1.2 },
              label: (0, g.t6)(n, "moneyDemand"),
              stroke: M,
            },
            { kind: "line-segment", variant: "reference", from: { x: 5, y: 1 }, to: { x: 5, y: 9 }, stroke: v },
            {
              kind: "line-segment",
              from: { x: o.moneySupplyX, y: 1 },
              to: { x: o.moneySupplyX, y: 9 },
              label: (0, g.t6)(n, "moneySupply"),
              stroke: v,
            },
            { kind: "line-segment", variant: "reference-guide", from: { x: 0, y: 5 }, to: { x: 5, y: 5 } },
            {
              kind: "line-segment",
              variant: "guide",
              from: { x: 0, y: P },
              to: { x: o.moneySupplyX, y: P },
              stroke: x,
            },
          ],
          B = [
            { kind: "line-segment", variant: "reference", from: { x: 1.2, y: 8.8 }, to: { x: 8.8, y: 1.2 }, stroke: M },
            {
              kind: "line-segment",
              from: { x: 1.2, y: 8.8 + o.aggregateDemandShift },
              to: { x: 8.8, y: 1.2 + o.aggregateDemandShift },
              label: (0, g.t6)(n, "aggregateDemand"),
              stroke: M,
            },
            {
              kind: "line-segment",
              from: { x: 1.2, y: 1.2 },
              to: { x: 8.8, y: 8.8 },
              label: (0, g.t6)(n, "shortRunAggregateSupply"),
              stroke: v,
            },
            {
              kind: "line-segment",
              variant: "secondary",
              from: { x: 5, y: 1 },
              to: { x: 5, y: 9 },
              label: (0, g.t6)(n, "longRunAggregateSupply"),
              stroke: f,
            },
            {
              kind: "line-segment",
              variant: "guide",
              from: { x: 0, y: o.priceLevel },
              to: { x: o.outputX, y: o.priceLevel },
              stroke: x,
            },
            {
              kind: "line-segment",
              variant: "guide",
              from: { x: o.outputX, y: 0 },
              to: { x: o.outputX, y: o.priceLevel },
              stroke: x,
            },
          ]
        return r
          ? (0, t.jsx)(m.W0, {
              presentationMode: a,
              viewport: p,
              series: R.filter((e) => e.label),
              points: [k(o.moneySupplyX, P, !0)],
              ariaLabel: C,
            })
          : (0, t.jsx)(m.i6, {
              ariaLabel: C,
              legend: [
                {
                  label: n.formatMessage(
                    {
                      id: "learningBlock.monetaryPolicy.legend.demand",
                      defaultMessage: "Demand ({moneyDemand} / {aggregateDemand})",
                    },
                    { moneyDemand: g.Ml.moneyDemand, aggregateDemand: g.Ml.aggregateDemand },
                  ),
                  stroke: M,
                },
                {
                  label: n.formatMessage(
                    {
                      id: "learningBlock.monetaryPolicy.legend.supply",
                      defaultMessage: "Supply ({moneySupply} / {shortRunSupply})",
                    },
                    { moneySupply: g.Ml.moneySupply, shortRunSupply: g.Ml.shortRunAggregateSupply },
                  ),
                  stroke: v,
                },
                { label: (0, g.t6)(n, "longRunAggregateSupply"), stroke: f },
              ],
              panels: [
                {
                  title: n.formatMessage(u.moneyMarket),
                  visualization: (0, t.jsx)(m.W0, {
                    presentationMode: a,
                    ariaLabel: n.formatMessage(u.moneyMarket),
                    viewport: p,
                    series: R,
                    points: [k(5, 5, !1), k(o.moneySupplyX, P, !0)],
                    xAxisLabel: n.formatMessage(u.moneyAxis),
                    yAxisLabel: n.formatMessage(u.interestRate),
                    showCoordinateTooltip: !1,
                  }),
                },
                {
                  title: n.formatMessage(u.adAs, { demand: g.Ml.aggregateDemand, supply: g.Ml.aggregateSupply }),
                  visualization: (0, t.jsx)(m.W0, {
                    presentationMode: a,
                    ariaLabel: n.formatMessage(u.adAs, { demand: g.Ml.aggregateDemand, supply: g.Ml.aggregateSupply }),
                    viewport: p,
                    series: B,
                    points: [k(5, 5, !1), k(o.outputX, o.priceLevel, !0)],
                    xAxisLabel: (0, g.Qr)(n),
                    yAxisLabel: n.formatMessage(u.priceLevel),
                    showCoordinateTooltip: !1,
                  }),
                },
              ],
              footer: (0, t.jsxs)("div", {
                className:
                  "text-token-text-secondary flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs font-semibold",
                "aria-hidden": "true",
                children: [
                  (0, t.jsx)(h, { label: n.formatMessage(u.moneyStep), direction: s }),
                  (0, t.jsx)("span", { children: "→" }),
                  (0, t.jsx)(h, { label: n.formatMessage(u.rateStep), direction: c }),
                  (0, t.jsx)("span", { children: "→" }),
                  (0, t.jsx)(h, { label: n.formatMessage(u.investmentStep), direction: s }),
                  (0, t.jsx)("span", { children: "→" }),
                  (0, t.jsx)(h, { label: g.Ml.aggregateDemand, direction: s }),
                ],
              }),
              presentationMode: a,
            })
      },
      P = ({ values: e }) => {
        let a = (0, i.A)(),
          n = y(e.policy_type, e.policy_strength)
        return (0, t.jsx)(r.Vq, {
          children: (0, t.jsx)(r.OZ, {
            content: a.formatMessage(
              0 === n.aggregateDemandShift
                ? u.noPolicyCaption
                : n.direction > 0
                  ? u.expansionaryCaption
                  : u.contractionaryCaption,
              { rate: a.formatNumber(n.interestRate, { maximumFractionDigits: 1 }), notation: g.Ml.aggregateDemand },
            ),
          }),
        })
      },
      R = ({ values: e, setValues: a }) => {
        let n = (0, i.A)(),
          o = y(e.policy_type, e.policy_strength).policyType,
          g = (0, c.Z7)(n),
          m = (0, s.xT)([
            { value: 0, label: n.formatMessage(u.expansionary), ariaLabel: n.formatMessage(u.expansionary) },
            { value: 1, label: n.formatMessage(u.contractionary), ariaLabel: n.formatMessage(u.contractionary) },
          ])
        return (0, t.jsx)(r.Ur, {
          screenReaderContent: n.formatMessage(u.screenReaderControl),
          children: (0, t.jsx)(l.J, {
            inputs: [
              {
                min: 0,
                max: 1,
                step: 1,
                value: +("expansionary" !== o),
                options: m,
                showValueInput: !1,
                variable: n.formatMessage(u.policyType),
                ariaLabel: n.formatMessage(u.policyType),
                ariaValueText: n.formatMessage("expansionary" === o ? u.expansionary : u.contractionary),
                onChange: (e) =>
                  a(
                    (a) => ({ ...a, policy_type: 1 === e ? "contractionary" : "expansionary" }),
                    "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE",
                  ),
              },
              {
                variable: n.formatMessage({
                  id: "learningBlock.monetaryPolicy.policyStrength",
                  defaultMessage: "Policy strength",
                }),
                min: d.min,
                max: d.max,
                step: d.step,
                value: e.policy_strength ?? d.defaultValue,
                ...g,
                onChange: (e) => a((a) => ({ ...a, policy_strength: e }), "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE"),
              },
            ],
          }),
        })
      }
  },
  C2BX(e, a, n) {
    var t = n("Qgfj")
    let o = {
        aggregateDemand: "AD",
        aggregateSupply: "AS",
        averageFixedCost: "AFC",
        averageRevenue: "AR",
        averageTotalCost: "ATC",
        averageVariableCost: "AVC",
        demand: "D",
        deadweightLoss: "DWL",
        efficientBenchmarkQuantity: "Qe",
        efficientQuantity: "Q*",
        equilibriumPrice: "P*",
        foreignExchange: "FX",
        grossDomesticProduct: "GDP",
        longRunAggregateSupply: "LRAS",
        longRunAverageTotalCost: "LRATC",
        longRunPhillipsCurve: "LRPC",
        marginalBenefit: "MB",
        marginalCost: "MC",
        marginalExternalBenefit: "MEB",
        marginalFactorCost: "MFC",
        marginalPrivateBenefit: "MPB",
        marginalPrivateCost: "MPC",
        marginalPropensityToConsume: "MPC",
        marginalRevenue: "MR",
        marginalRevenueProduct: "MRP",
        marginalSocialBenefit: "MSB",
        marginalSocialCost: "MSC",
        marketQuantity: "Qm",
        monopolyPrice: "Pm",
        moneyDemand: "MD",
        moneySupply: "MS",
        optimalQuantity: "Q*",
        price: "P",
        priceLevel: "PL",
        productionPossibilitiesCurve: "PPC",
        quantity: "Q",
        quantityDemanded: "Qd",
        quantitySupplied: "Qs",
        shortRunAggregateSupply: "SRAS",
        shortRunPhillipsCurve: "SRPC",
        totalRevenue: "TR",
        wage: "W",
      },
      i = (0, t.YK)({
        aggregateDemand: {
          id: "learningBlock.economics.notation.legend.aggregateDemand",
          defaultMessage: "Demand ({notation})",
        },
        shortRunAggregateSupply: {
          id: "learningBlock.economics.notation.legend.shortRunAggregateSupply",
          defaultMessage: "Short-run supply ({notation})",
        },
        longRunAggregateSupply: {
          id: "learningBlock.economics.notation.legend.longRunAggregateSupply",
          defaultMessage: "Long-run supply ({notation})",
        },
        shortRunPhillipsCurve: {
          id: "learningBlock.economics.notation.legend.shortRunPhillipsCurve",
          defaultMessage: "Short-run curve ({notation})",
        },
        longRunPhillipsCurve: {
          id: "learningBlock.economics.notation.legend.longRunPhillipsCurve",
          defaultMessage: "Long-run curve ({notation})",
        },
        moneyDemand: {
          id: "learningBlock.economics.notation.legend.moneyDemand",
          defaultMessage: "Money demand ({notation})",
        },
        moneySupply: {
          id: "learningBlock.economics.notation.legend.moneySupply",
          defaultMessage: "Money supply ({notation})",
        },
        marginalBenefit: {
          id: "learningBlock.economics.notation.legend.marginalBenefit",
          defaultMessage: "Benefit ({notation})",
        },
        marginalCost: {
          id: "learningBlock.economics.notation.legend.marginalCost",
          defaultMessage: "Cost ({notation})",
        },
        marginalPrivateBenefit: {
          id: "learningBlock.economics.notation.legend.marginalPrivateBenefit",
          defaultMessage: "Private benefit ({notation})",
        },
        marginalSocialBenefit: {
          id: "learningBlock.economics.notation.legend.marginalSocialBenefit",
          defaultMessage: "Social benefit ({notation})",
        },
        marginalPrivateCost: {
          id: "learningBlock.economics.notation.legend.marginalPrivateCost",
          defaultMessage: "Private cost ({notation})",
        },
        marginalSocialCost: {
          id: "learningBlock.economics.notation.legend.marginalSocialCost",
          defaultMessage: "Social cost ({notation})",
        },
        marginalRevenue: {
          id: "learningBlock.economics.notation.legend.marginalRevenue",
          defaultMessage: "Marginal revenue ({notation})",
        },
        averageRevenue: {
          id: "learningBlock.economics.notation.legend.averageRevenue",
          defaultMessage: "Average revenue ({notation})",
        },
        averageTotalCost: {
          id: "learningBlock.economics.notation.legend.averageTotalCost",
          defaultMessage: "Average total ({notation})",
        },
        averageVariableCost: {
          id: "learningBlock.economics.notation.legend.averageVariableCost",
          defaultMessage: "Average variable ({notation})",
        },
        averageFixedCost: {
          id: "learningBlock.economics.notation.legend.averageFixedCost",
          defaultMessage: "Average fixed ({notation})",
        },
        longRunAverageTotalCost: {
          id: "learningBlock.economics.notation.legend.longRunAverageTotalCost",
          defaultMessage: "Long-run average ({notation})",
        },
        marginalRevenueProduct: {
          id: "learningBlock.economics.notation.legend.marginalRevenueProduct",
          defaultMessage: "Revenue product ({notation})",
        },
        marginalFactorCost: {
          id: "learningBlock.economics.notation.legend.marginalFactorCost",
          defaultMessage: "Factor cost ({notation})",
        },
      })
    n.d(
      a,
      {},
      {
        BP: (e) =>
          e.formatMessage(
            {
              id: "learningBlock.economics.notation.legend.priceAndMarginalRevenue",
              defaultMessage: "Price / revenue ({price} = {marginalRevenue})",
            },
            { price: o.price, marginalRevenue: o.marginalRevenue },
          ),
        I5: (e) =>
          e.formatMessage(
            { id: "learningBlock.economics.notation.axis.price", defaultMessage: "Price ({notation})" },
            { notation: o.price },
          ),
        Ml: o,
        Qr: (e) =>
          e.formatMessage(
            { id: "learningBlock.economics.notation.axis.realGrossDomesticProduct", defaultMessage: "Real {notation}" },
            { notation: o.grossDomesticProduct },
          ),
        eM: (e) =>
          e.formatMessage(
            {
              id: "learningBlock.economics.notation.legend.firmDemandAndRevenue",
              defaultMessage: "Firm demand ({demand} = {averageRevenue} = {marginalRevenue})",
            },
            { demand: o.demand, averageRevenue: o.averageRevenue, marginalRevenue: o.marginalRevenue },
          ),
        kS: (e) =>
          e.formatMessage(
            {
              id: "learningBlock.economics.notation.legend.priceAndRevenue",
              defaultMessage: "Price / revenue ({price} = {marginalRevenue} = {averageRevenue})",
            },
            { price: o.price, marginalRevenue: o.marginalRevenue, averageRevenue: o.averageRevenue },
          ),
        ls: (e) =>
          e.formatMessage(
            { id: "learningBlock.economics.notation.axis.priceAndCost", defaultMessage: "Price ({notation}), cost" },
            { notation: o.price },
          ),
        od: (e) =>
          e.formatMessage(
            { id: "learningBlock.economics.notation.axis.quantity", defaultMessage: "Quantity ({notation})" },
            { notation: o.quantity },
          ),
        rb: (e) =>
          e.formatMessage(
            {
              id: "learningBlock.economics.notation.legend.demandAndMarginalRevenue",
              defaultMessage: "Demand / revenue ({demand} = {marginalRevenue})",
            },
            { demand: o.demand, marginalRevenue: o.marginalRevenue },
          ),
        t6: (e, a) => e.formatMessage(i[a], { notation: o[a] }),
      },
    )
  },
}
//# sourceMappingURL=334466.4c4fabc825.js.map
