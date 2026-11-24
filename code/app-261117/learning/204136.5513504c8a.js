export const __rspack_esm_ids = [204136]
export const __webpack_modules__ = {
  IWiy(e, a, i) {
    var t = i("ABep"),
      n = i("Qgfj"),
      o = i("oyxz"),
      l = i("Wf1j"),
      s = i("KwmQ"),
      r = i("pXKw"),
      c = i("pNxJ"),
      g = i("C2BX"),
      u = i("LP6J"),
      d = i("sCEh"),
      y = i("zowF")
    let m = "var(--learning-block-color-primary)",
      v = "var(--learning-block-color-companion)",
      p = "var(--text-secondary)",
      f = "var(--learning-block-color-third)",
      x = "var(--red-500)",
      M = (0, n.YK)({
        negative: { id: "learningBlock.correctivePolicy.negative", defaultMessage: "Negative externality" },
        positive: { id: "learningBlock.correctivePolicy.positive", defaultMessage: "Positive externality" },
        policySize: { id: "learningBlock.correctivePolicy.policySize", defaultMessage: "Policy size" },
        tax: { id: "learningBlock.correctivePolicy.tax", defaultMessage: "tax" },
        subsidy: { id: "learningBlock.correctivePolicy.subsidy", defaultMessage: "subsidy" },
        shortTax: {
          id: "learningBlock.correctivePolicy.caption.shortTax",
          defaultMessage: "The tax is too small, so output remains above the socially efficient quantity ({notation})",
        },
        exactTax: {
          id: "learningBlock.correctivePolicy.caption.exactTax",
          defaultMessage: "The tax closes the gap: output reaches the socially efficient quantity ({notation})",
        },
        overshootTax: {
          id: "learningBlock.correctivePolicy.caption.overshootTax",
          defaultMessage: "The tax is too large, so output falls below the socially efficient quantity ({notation})",
        },
        shortSubsidy: {
          id: "learningBlock.correctivePolicy.caption.shortSubsidy",
          defaultMessage:
            "The subsidy is too small, so output remains below the socially efficient quantity ({notation})",
        },
        exactSubsidy: {
          id: "learningBlock.correctivePolicy.caption.exactSubsidy",
          defaultMessage: "The subsidy closes the gap: output reaches the socially efficient quantity ({notation})",
        },
        overshootSubsidy: {
          id: "learningBlock.correctivePolicy.caption.overshootSubsidy",
          defaultMessage:
            "The subsidy is too large, so output rises above the socially efficient quantity ({notation})",
        },
      }),
      k = (0, r.xT)([
        { value: 0, label: "Negative externality" },
        { value: 1, label: "Positive externality" },
      ]),
      P = (e, a) => e.formatNumber(a, { maximumFractionDigits: 1, useGrouping: !1 })
    i.d(
      a,
      {},
      {
        CorrectivePolicyCaption: ({ values: e }) => {
          let a
          return (0, t.jsx)(s.Vq, {
            children: (0, t.jsx)(s.OZ, {
              content: (0, t.jsx)(o.A, {
                ...("negative" === (a = (0, y.$B)(e)).type
                  ? "exact" === a.status
                    ? M.exactTax
                    : "short" === a.status
                      ? M.shortTax
                      : M.overshootTax
                  : "exact" === a.status
                    ? M.exactSubsidy
                    : "short" === a.status
                      ? M.shortSubsidy
                      : M.overshootSubsidy),
                values: { notation: g.Ml.efficientQuantity },
              }),
            }),
          })
        },
        CorrectivePolicyControls: ({ values: e, setValues: a }) => {
          let i = (0, l.A)(),
            n = (0, y.sM)(e),
            r = (0, u.Z7)(i),
            g = k.map((e) => ({ ...e, label: i.formatMessage(0 === e.value ? M.negative : M.positive) }))
          return (0, t.jsx)(s.Ur, {
            screenReaderContent: (0, t.jsx)(o.A, {
              id: "learningBlock.correctivePolicy.controlsDescription",
              defaultMessage:
                "Choose the externality type and adjust the corrective policy size to compare market output with the social optimum.",
            }),
            children: (0, t.jsx)(c.J, {
              inputs: [
                {
                  variable: i.formatMessage({
                    id: "learningBlock.correctivePolicy.externalityType",
                    defaultMessage: "Externality",
                  }),
                  min: 0,
                  max: 1,
                  step: 1,
                  value: +("negative" !== n.externalityType),
                  options: g,
                  onChange: (e) =>
                    a(
                      (a) => ({ ...a, externalityType: 1 === e ? "positive" : "negative" }),
                      "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE",
                    ),
                },
                {
                  variable: i.formatMessage(M.policySize),
                  unit: i.formatMessage("negative" === n.externalityType ? M.tax : M.subsidy),
                  min: y.Td.min,
                  max: y.Td.max,
                  step: y.Td.step,
                  value: n.policySize,
                  ...r,
                  onChange: (e) => a((a) => ({ ...a, policySize: e }), "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE"),
                },
              ],
            }),
          })
        },
        CorrectivePolicyVisualization: ({ values: e, presentationMode: a }) => {
          let i = (0, l.A)(),
            n = (0, y.sM)(e),
            o = (0, y.$B)(n),
            s = "negative" === o.type,
            r = (0, g.t6)(i, "marginalPrivateBenefit"),
            c = (0, g.t6)(i, "marginalSocialBenefit"),
            u = (0, g.t6)(i, "marginalPrivateCost"),
            k = (0, g.t6)(i, "marginalSocialCost"),
            B = i.formatMessage(
              { id: "learningBlock.correctivePolicy.taxCurve", defaultMessage: "{notation} + tax" },
              { notation: g.Ml.marginalPrivateCost },
            ),
            C = i.formatMessage(
              { id: "learningBlock.correctivePolicy.subsidyCurve", defaultMessage: "{notation} + subsidy" },
              { notation: g.Ml.marginalPrivateBenefit },
            ),
            h = s ? B : C,
            R = s ? 82 : 64,
            b = s ? R : R + n.policySize,
            S = s ? 36 : 18,
            T = s ? 18 + n.policySize : 18,
            Q = [
              {
                kind: "line-segment",
                from: { x: 0, y: R },
                to: { x: 86, y: (0, y.j$)(86, n.externalityType) },
                label: r,
                stroke: m,
              },
              { kind: "line-segment", from: { x: 0, y: 18 }, to: { x: 86, y: (0, y.X8)(86) }, label: u, stroke: v },
              {
                kind: "line-segment",
                variant: "baseline",
                from: { x: 0, y: s ? S : 82 },
                to: { x: 86, y: s ? (0, y.zz)(86, n.externalityType) : (0, y.jo)(86, n.externalityType) },
                label: s ? k : c,
                stroke: f,
              },
              {
                kind: "line-segment",
                from: { x: 0, y: s ? T : b },
                to: { x: 86, y: s ? (0, y.X8)(86) + n.policySize : (0, y.j$)(86, n.externalityType) + n.policySize },
                label: h,
                stroke: p,
              },
            ],
            A =
              "exact" === o.status
                ? []
                : [
                    {
                      kind: "highlight",
                      points: s
                        ? [
                            { x: o.policyQuantity, y: (0, y.zz)(o.policyQuantity, n.externalityType) },
                            { x: o.policyQuantity, y: (0, y.j$)(o.policyQuantity, n.externalityType) },
                            { x: o.socialQuantity, y: o.socialValue },
                          ]
                        : [
                            { x: o.policyQuantity, y: (0, y.jo)(o.policyQuantity, n.externalityType) },
                            { x: o.policyQuantity, y: (0, y.X8)(o.policyQuantity) },
                            { x: o.socialQuantity, y: o.socialValue },
                          ],
                      fill: x,
                    },
                  ],
            D = [
              {
                from: { x: o.policyQuantity, y: 0 },
                to: { x: o.policyQuantity, y: o.policyValue },
                kind: "guide",
                stroke: p,
              },
              ...("exact" === o.status
                ? []
                : [
                    {
                      from: { x: o.socialQuantity, y: 0 },
                      to: { x: o.socialQuantity, y: o.socialValue },
                      kind: "guide",
                      stroke: "var(--text-tertiary)",
                    },
                  ]),
            ],
            z = [
              { x: o.policyQuantity, y: o.policyValue, appearance: { fill: p } },
              ...("exact" === o.status ? [] : [{ x: o.socialQuantity, y: o.socialValue, appearance: { fill: f } }]),
            ],
            _ = i.formatMessage(
              {
                id: "learningBlock.correctivePolicy.visualizationDescription",
                defaultMessage:
                  "{type} graph with policy size {policySize}. Current output is {policyQuantity}; social optimum is {socialQuantity}.",
              },
              {
                type: i.formatMessage(s ? M.negative : M.positive),
                policySize: P(i, n.policySize),
                policyQuantity: P(i, o.policyQuantity),
                socialQuantity: P(i, o.socialQuantity),
              },
            )
          return (0, t.jsx)(d.W0, {
            presentationMode: a,
            viewport: {
              mode: "bounds",
              bounds: { xMin: y.QT.quantityMin, xMax: y.QT.quantityMax, yMin: y.QT.valueMin, yMax: y.QT.valueMax },
              equalScale: !1,
              paddingUnits: 0,
            },
            series: Q,
            polygons: A,
            segments: D,
            points: z,
            legend: [
              { label: r, stroke: m },
              { label: u, stroke: v },
              { label: k, stroke: f, variant: "baseline", active: s },
              { label: c, stroke: f, variant: "baseline", active: !s },
              { label: B, stroke: p, active: s },
              { label: C, stroke: p, active: !s },
            ],
            legendAreas: [
              {
                label: i.formatMessage({
                  id: "learningBlock.correctivePolicy.legend.remainingDeadweightLoss",
                  defaultMessage: "Remaining deadweight loss",
                }),
                stroke: x,
                fill: x,
                active: "exact" !== o.status,
              },
            ],
            xAxisLabel: i.formatMessage({
              id: "learningBlock.correctivePolicy.axis.quantity",
              defaultMessage: "Quantity",
            }),
            yAxisLabel: i.formatMessage({
              id: "learningBlock.correctivePolicy.axis.value",
              defaultMessage: "Price / cost / benefit",
            }),
            ariaLabel: _,
          })
        },
      },
    )
  },
  C2BX(e, a, i) {
    var t = i("Qgfj")
    let n = {
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
      o = (0, t.YK)({
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
    i.d(
      a,
      {},
      {
        BP: (e) =>
          e.formatMessage(
            {
              id: "learningBlock.economics.notation.legend.priceAndMarginalRevenue",
              defaultMessage: "Price / revenue ({price} = {marginalRevenue})",
            },
            { price: n.price, marginalRevenue: n.marginalRevenue },
          ),
        I5: (e) =>
          e.formatMessage(
            { id: "learningBlock.economics.notation.axis.price", defaultMessage: "Price ({notation})" },
            { notation: n.price },
          ),
        Ml: n,
        Qr: (e) =>
          e.formatMessage(
            { id: "learningBlock.economics.notation.axis.realGrossDomesticProduct", defaultMessage: "Real {notation}" },
            { notation: n.grossDomesticProduct },
          ),
        eM: (e) =>
          e.formatMessage(
            {
              id: "learningBlock.economics.notation.legend.firmDemandAndRevenue",
              defaultMessage: "Firm demand ({demand} = {averageRevenue} = {marginalRevenue})",
            },
            { demand: n.demand, averageRevenue: n.averageRevenue, marginalRevenue: n.marginalRevenue },
          ),
        kS: (e) =>
          e.formatMessage(
            {
              id: "learningBlock.economics.notation.legend.priceAndRevenue",
              defaultMessage: "Price / revenue ({price} = {marginalRevenue} = {averageRevenue})",
            },
            { price: n.price, marginalRevenue: n.marginalRevenue, averageRevenue: n.averageRevenue },
          ),
        ls: (e) =>
          e.formatMessage(
            { id: "learningBlock.economics.notation.axis.priceAndCost", defaultMessage: "Price ({notation}), cost" },
            { notation: n.price },
          ),
        od: (e) =>
          e.formatMessage(
            { id: "learningBlock.economics.notation.axis.quantity", defaultMessage: "Quantity ({notation})" },
            { notation: n.quantity },
          ),
        rb: (e) =>
          e.formatMessage(
            {
              id: "learningBlock.economics.notation.legend.demandAndMarginalRevenue",
              defaultMessage: "Demand / revenue ({demand} = {marginalRevenue})",
            },
            { demand: n.demand, marginalRevenue: n.marginalRevenue },
          ),
        t6: (e, a) => e.formatMessage(o[a], { notation: n[a] }),
      },
    )
  },
}
//# sourceMappingURL=204136.5513504c8a.js.map
