export const __rspack_esm_ids = [56397]
export const __webpack_modules__ = {
  Lwd4(e, a, n) {
    var i = n("ABep"),
      t = n("Qgfj"),
      o = n("Wf1j"),
      r = n("KwmQ"),
      s = n("pNxJ"),
      l = n("C2BX"),
      d = n("sCEh"),
      g = n("pWxv")
    let c = (0, t.YK)({
        fxAxisY: {
          id: "learningBlock.fxNetExportsAd.foreignCurrencyPerDomesticCurrencyAxis",
          defaultMessage: "Foreign currency per unit of domestic currency",
        },
        fxAxisX: {
          id: "learningBlock.fxNetExportsAd.domesticCurrencyQuantityAxis",
          defaultMessage: "Quantity of domestic currency",
        },
        adAxisY: { id: "learningBlock.fxNetExportsAd.adAxisY", defaultMessage: "Price level" },
        fxPanel: { id: "learningBlock.fxNetExportsAd.fxPanel", defaultMessage: "Foreign exchange" },
        adPanel: { id: "learningBlock.fxNetExportsAd.adPanel", defaultMessage: "Aggregate demand" },
        demandLegend: { id: "learningBlock.fxNetExportsAd.legend.demand", defaultMessage: "Demand" },
        supplyLegend: { id: "learningBlock.fxNetExportsAd.legend.supply", defaultMessage: "Supply" },
        demandAndAdLegend: {
          id: "learningBlock.fxNetExportsAd.legend.demandAndAd",
          defaultMessage: "Demand ({notation})",
        },
        supplyAndSrasLegend: {
          id: "learningBlock.fxNetExportsAd.legend.supplyAndSras",
          defaultMessage: "Supply ({notation})",
        },
        domesticCurrencyValue: {
          id: "learningBlock.fxNetExportsAd.domesticCurrencyValue",
          defaultMessage: "Domestic currency value",
        },
        domesticCurrencyValueAria: {
          id: "learningBlock.fxNetExportsAd.domesticCurrencyValueAria",
          defaultMessage: "Change the domestic currency value",
        },
        strongAppreciation: {
          id: "learningBlock.fxNetExportsAd.strongDomesticCurrencyAppreciation",
          defaultMessage: "strong domestic-currency appreciation",
        },
        appreciation: {
          id: "learningBlock.fxNetExportsAd.domesticCurrencyAppreciation",
          defaultMessage: "domestic-currency appreciation",
        },
        unchanged: {
          id: "learningBlock.fxNetExportsAd.domesticCurrencyUnchanged",
          defaultMessage: "domestic currency unchanged",
        },
        depreciation: {
          id: "learningBlock.fxNetExportsAd.domesticCurrencyDepreciation",
          defaultMessage: "domestic-currency depreciation",
        },
        strongDepreciation: {
          id: "learningBlock.fxNetExportsAd.strongDomesticCurrencyDepreciation",
          defaultMessage: "strong domestic-currency depreciation",
        },
        appreciationCaption: {
          id: "learningBlock.fxNetExportsAd.domesticCurrencyAppreciationCaption",
          defaultMessage:
            "A stronger domestic currency reduces exports and increases imports, so net exports fall and aggregate demand shifts left",
        },
        depreciationCaption: {
          id: "learningBlock.fxNetExportsAd.domesticCurrencyDepreciationCaption",
          defaultMessage:
            "A weaker domestic currency increases exports and reduces imports, so net exports rise and aggregate demand shifts right",
        },
        unchangedCaption: {
          id: "learningBlock.fxNetExportsAd.domesticCurrencyUnchangedCaption",
          defaultMessage: "An unchanged domestic currency value leaves net exports and aggregate demand unchanged",
        },
        visualAriaAppreciation: {
          id: "learningBlock.fxNetExportsAd.domesticCurrencyAppreciationVisualAria",
          defaultMessage:
            "Linked foreign-exchange and aggregate-demand graphs. The domestic currency appreciates, exports fall, imports rise, net exports fall, and aggregate demand shifts left.",
        },
        visualAriaDepreciation: {
          id: "learningBlock.fxNetExportsAd.domesticCurrencyDepreciationVisualAria",
          defaultMessage:
            "Linked foreign-exchange and aggregate-demand graphs. The domestic currency depreciates, exports rise, imports fall, net exports rise, and aggregate demand shifts right.",
        },
        visualAriaUnchanged: {
          id: "learningBlock.fxNetExportsAd.domesticCurrencyUnchangedVisualAria",
          defaultMessage:
            "Linked foreign-exchange and aggregate-demand graphs. Domestic currency value, net exports, and aggregate demand remain at their reference positions.",
        },
      }),
      u = "var(--learning-block-color-primary)",
      m = "var(--learning-block-color-companion)",
      p = "var(--learning-block-accent)",
      f = { mode: "bounds", bounds: { xMin: 0, xMax: 10, yMin: 0, yMax: 10 }, paddingUnits: 0, equalScale: !1 },
      x = (e, a) => [
        ...(0 === e
          ? []
          : [
              {
                id: "fx-demand-reference",
                kind: "line-segment",
                from: { x: 2, y: 8 },
                to: { x: 8, y: 2 },
                variant: "reference",
                stroke: u,
              },
            ]),
        {
          id: "fx-demand-active",
          kind: "line-segment",
          from: { x: 2 + e, y: 8 },
          to: { x: 8 + e, y: 2 },
          label: a.demand,
          stroke: u,
        },
        { id: "fx-supply", kind: "line-segment", from: { x: 2, y: 2 }, to: { x: 8, y: 8 }, label: a.supply, stroke: m },
      ],
      v = (e) => ({ x: 5 + e / 2, y: 5 + e / 2 }),
      M = ({ x: e, y: a }) => [
        { from: { x: 0, y: a }, to: { x: e, y: a }, kind: "guide", stroke: p },
        { from: { x: e, y: 0 }, to: { x: e, y: a }, kind: "guide", stroke: p },
      ]
    n.d(
      a,
      {},
      {
        FxNetExportsAdCaption: ({ values: e }) => {
          let a = (0, o.A)(),
            n = (0, g.mV)(e),
            t =
              "appreciation" === n.direction
                ? c.appreciationCaption
                : "depreciation" === n.direction
                  ? c.depreciationCaption
                  : c.unchangedCaption
          return (0, i.jsx)(r.Vq, { children: (0, i.jsx)(r.OZ, { children: a.formatMessage(t) }) })
        },
        FxNetExportsAdControls: ({ values: e, setValues: a }) => {
          var n
          let t = (0, o.A)(),
            l = (0, g.mV)(e)
          return (0, i.jsx)(r.Ur, {
            children: (0, i.jsx)(s.J, {
              inputs: [
                {
                  min: g.zD.min,
                  max: g.zD.max,
                  step: g.zD.step,
                  value: l.domesticCurrencyValue,
                  variable: t.formatMessage(c.domesticCurrencyValue),
                  ariaLabel: t.formatMessage(c.domesticCurrencyValueAria),
                  ariaValueText:
                    (n = l.domesticCurrencyValue) <= -2
                      ? t.formatMessage(c.strongDepreciation)
                      : n < 0
                        ? t.formatMessage(c.depreciation)
                        : n >= 2
                          ? t.formatMessage(c.strongAppreciation)
                          : n > 0
                            ? t.formatMessage(c.appreciation)
                            : t.formatMessage(c.unchanged),
                  showValueInput: !1,
                  onChange: (n) => a({ ...e, currency_value: n }, "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE"),
                },
              ],
            }),
          })
        },
        FxNetExportsAdVisualization: ({ values: e, presentationMode: a }) => {
          let n,
            t = (0, o.A)(),
            r = (0, g.mV)(e),
            s = "thumbnail" === a,
            y = v(r.fxDemandShift),
            A = v(r.adShift),
            C = t.formatMessage(
              "appreciation" === r.direction
                ? c.visualAriaAppreciation
                : "depreciation" === r.direction
                  ? c.visualAriaDepreciation
                  : c.visualAriaUnchanged,
            ),
            k = [{ ...y, appearance: { fill: p } }],
            B = [{ ...A, appearance: { fill: p } }]
          return s
            ? (0, i.jsx)(d.W0, {
                viewport: f,
                series: x(r.fxDemandShift, {
                  demand: t.formatMessage(c.demandLegend),
                  supply: t.formatMessage(c.supplyLegend),
                }),
                points: k,
                presentationMode: a,
                ariaLabel: C,
              })
            : (0, i.jsx)(d.i6, {
                ariaLabel: C,
                legend: [
                  { label: t.formatMessage(c.demandAndAdLegend, { notation: l.Ml.aggregateDemand }), stroke: u },
                  {
                    label: t.formatMessage(c.supplyAndSrasLegend, { notation: l.Ml.shortRunAggregateSupply }),
                    stroke: m,
                  },
                ],
                panels: [
                  {
                    title: t.formatMessage(c.fxPanel),
                    visualization: (0, i.jsx)(d.W0, {
                      viewport: f,
                      series: x(r.fxDemandShift, {
                        demand: t.formatMessage(c.demandLegend),
                        supply: t.formatMessage(c.supplyLegend),
                      }),
                      segments: M(y),
                      points: k,
                      xAxisLabel: t.formatMessage(c.fxAxisX),
                      yAxisLabel: t.formatMessage(c.fxAxisY),
                      showCoordinateTooltip: !1,
                      presentationMode: a,
                      ariaLabel: t.formatMessage(c.fxPanel),
                    }),
                  },
                  {
                    title: t.formatMessage(c.adPanel),
                    visualization: (0, i.jsx)(d.W0, {
                      viewport: f,
                      series:
                        ((n = r.adShift),
                        [
                          ...(0 === n
                            ? []
                            : [
                                {
                                  id: "ad-reference",
                                  kind: "line-segment",
                                  from: { x: 2, y: 8 },
                                  to: { x: 8, y: 2 },
                                  variant: "reference",
                                  stroke: u,
                                },
                              ]),
                          {
                            id: "ad-active",
                            kind: "line-segment",
                            from: { x: 2 + n, y: 8 },
                            to: { x: 8 + n, y: 2 },
                            label: (0, l.t6)(t, "aggregateDemand"),
                            stroke: u,
                          },
                          {
                            id: "sras",
                            kind: "line-segment",
                            from: { x: 2, y: 2 },
                            to: { x: 8, y: 8 },
                            label: (0, l.t6)(t, "shortRunAggregateSupply"),
                            stroke: m,
                          },
                        ]),
                      segments: M(A),
                      points: B,
                      xAxisLabel: (0, l.Qr)(t),
                      yAxisLabel: t.formatMessage(c.adAxisY),
                      showCoordinateTooltip: !1,
                      presentationMode: a,
                      ariaLabel: t.formatMessage(c.adPanel),
                    }),
                  },
                ],
              })
        },
      },
    )
  },
  C2BX(e, a, n) {
    var i = n("Qgfj")
    let t = {
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
      o = (0, i.YK)({
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
            { price: t.price, marginalRevenue: t.marginalRevenue },
          ),
        I5: (e) =>
          e.formatMessage(
            { id: "learningBlock.economics.notation.axis.price", defaultMessage: "Price ({notation})" },
            { notation: t.price },
          ),
        Ml: t,
        Qr: (e) =>
          e.formatMessage(
            { id: "learningBlock.economics.notation.axis.realGrossDomesticProduct", defaultMessage: "Real {notation}" },
            { notation: t.grossDomesticProduct },
          ),
        eM: (e) =>
          e.formatMessage(
            {
              id: "learningBlock.economics.notation.legend.firmDemandAndRevenue",
              defaultMessage: "Firm demand ({demand} = {averageRevenue} = {marginalRevenue})",
            },
            { demand: t.demand, averageRevenue: t.averageRevenue, marginalRevenue: t.marginalRevenue },
          ),
        kS: (e) =>
          e.formatMessage(
            {
              id: "learningBlock.economics.notation.legend.priceAndRevenue",
              defaultMessage: "Price / revenue ({price} = {marginalRevenue} = {averageRevenue})",
            },
            { price: t.price, marginalRevenue: t.marginalRevenue, averageRevenue: t.averageRevenue },
          ),
        ls: (e) =>
          e.formatMessage(
            { id: "learningBlock.economics.notation.axis.priceAndCost", defaultMessage: "Price ({notation}), cost" },
            { notation: t.price },
          ),
        od: (e) =>
          e.formatMessage(
            { id: "learningBlock.economics.notation.axis.quantity", defaultMessage: "Quantity ({notation})" },
            { notation: t.quantity },
          ),
        rb: (e) =>
          e.formatMessage(
            {
              id: "learningBlock.economics.notation.legend.demandAndMarginalRevenue",
              defaultMessage: "Demand / revenue ({demand} = {marginalRevenue})",
            },
            { demand: t.demand, marginalRevenue: t.marginalRevenue },
          ),
        t6: (e, a) => e.formatMessage(o[a], { notation: t[a] }),
      },
    )
  },
}
//# sourceMappingURL=56397.ca7c41c91e.js.map
