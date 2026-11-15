export const __rspack_esm_ids = [925086]
export const __webpack_modules__ = {
  WVAZ(e, t, a) {
    var i = a("ABep"),
      n = a("Qgfj"),
      o = a("Wf1j"),
      r = a("oyxz"),
      s = a("KwmQ"),
      l = a("pNxJ"),
      g = a("pXKw"),
      u = a("C2BX"),
      c = a("LP6J"),
      m = a("sCEh"),
      d = a("LTdq")
    let p = "var(--learning-block-color-primary)",
      f = "var(--learning-block-color-companion)",
      y = "var(--learning-block-color-third)",
      M = "var(--learning-block-color-companion)",
      v = "var(--learning-block-color-primary)",
      k = "var(--learning-block-color-companion)",
      C = "var(--red-500)",
      P = { mode: "bounds", bounds: { xMin: 0, xMax: 8.5, yMin: 0, yMax: 10 }, paddingUnits: 0, equalScale: !1 },
      B = { ...P, bounds: { ...P.bounds, xMax: 11 } },
      x = (0, n.YK)({
        market: { id: "learningBlock.perfectCompetition.market", defaultMessage: "Market" },
        firm: { id: "learningBlock.perfectCompetition.firm", defaultMessage: "Representative firm" },
        quantity: { id: "learningBlock.perfectCompetition.quantity", defaultMessage: "Quantity" },
        price: { id: "learningBlock.perfectCompetition.price", defaultMessage: "Price" },
        priceCost: { id: "learningBlock.perfectCompetition.priceCost", defaultMessage: "Price, cost" },
        entry: { id: "learningBlock.perfectCompetition.entry", defaultMessage: "Entry" },
        exit: { id: "learningBlock.perfectCompetition.exit", defaultMessage: "Exit" },
        profit: { id: "learningBlock.perfectCompetition.profit", defaultMessage: "Profit" },
        loss: { id: "learningBlock.perfectCompetition.loss", defaultMessage: "Loss" },
        zeroProfit: { id: "learningBlock.perfectCompetition.zeroProfit", defaultMessage: "Zero profit" },
        adjustmentLabel: {
          id: "learningBlock.perfectCompetition.adjustmentLabel",
          defaultMessage: "Starting condition",
        },
        progressLabel: { id: "learningBlock.perfectCompetition.progressLabel", defaultMessage: "Adjustment" },
        profitEntryOption: { id: "learningBlock.perfectCompetition.profitEntryOption", defaultMessage: "Profit" },
        lossExitOption: { id: "learningBlock.perfectCompetition.lossExitOption", defaultMessage: "Loss" },
        demand: { id: "learningBlock.perfectCompetition.demand", defaultMessage: "Demand" },
        supply: { id: "learningBlock.perfectCompetition.supply", defaultMessage: "Supply" },
        controlsDescription: {
          id: "learningBlock.perfectCompetition.continuousControlsDescription",
          defaultMessage:
            "Choose whether firms enter after profit or exit after loss, then adjust progress toward long-run equilibrium.",
        },
        initialProfitSummary: {
          id: "learningBlock.perfectCompetition.initialProfitSummary",
          defaultMessage: "Price {price} exceeds {averageCost} {atc}: profit of {gap} per unit attracts entry",
        },
        adjustingProfitSummary: {
          id: "learningBlock.perfectCompetition.adjustingProfitSummary",
          defaultMessage: "Entry shifts supply right: price falls to {price}; profit shrinks to {gap} per unit",
        },
        longRunProfitSummary: {
          id: "learningBlock.perfectCompetition.longRunProfitSummary",
          defaultMessage:
            "Entry ends at {priceNotation} = {marginalCost} = minimum {averageCost} = {price}: zero economic profit",
        },
        initialLossSummary: {
          id: "learningBlock.perfectCompetition.initialLossSummary",
          defaultMessage: "Price {price} is below {averageCost} {atc}: loss of {gap} per unit causes exit",
        },
        adjustingLossSummary: {
          id: "learningBlock.perfectCompetition.adjustingLossSummary",
          defaultMessage: "Exit shifts supply left: price rises to {price}; loss shrinks to {gap} per unit",
        },
        longRunLossSummary: {
          id: "learningBlock.perfectCompetition.longRunLossSummary",
          defaultMessage:
            "Exit ends at {priceNotation} = {marginalCost} = minimum {averageCost} = {price}: zero economic profit",
        },
        ariaSummary: {
          id: "learningBlock.perfectCompetition.ariaSummary",
          defaultMessage: "{path}, {stage}: market price is {price}; the representative firm is at {outcome}.",
        },
        pathEntry: { id: "learningBlock.perfectCompetition.pathEntry", defaultMessage: "profit-driven entry" },
        pathExit: { id: "learningBlock.perfectCompetition.pathExit", defaultMessage: "loss-driven exit" },
        stageInitial: { id: "learningBlock.perfectCompetition.stageInitial", defaultMessage: "initial state" },
        stageAdjusting: {
          id: "learningBlock.perfectCompetition.stageAdjusting",
          defaultMessage: "adjustment underway",
        },
        stageLongRun: { id: "learningBlock.perfectCompetition.stageLongRun", defaultMessage: "long-run equilibrium" },
        outcomeProfit: { id: "learningBlock.perfectCompetition.outcomeProfit", defaultMessage: "economic profit" },
        outcomeLoss: { id: "learningBlock.perfectCompetition.outcomeLoss", defaultMessage: "economic loss" },
        outcomeZero: { id: "learningBlock.perfectCompetition.outcomeZero", defaultMessage: "zero economic profit" },
      })
    a.d(
      t,
      {},
      {
        LongRunCompetitiveEquilibriumCaption: ({ values: e }) => {
          var t, a
          let n = (0, o.A)(),
            r = (0, d.FB)(e),
            l = (e) => n.formatNumber(e, { maximumFractionDigits: 2 })
          return (0, i.jsx)(s.Vq, {
            children: (0, i.jsx)(s.OZ, {
              content: n.formatMessage(
                ((t = r.adjustment),
                (a = r.stage),
                "profit_entry" === t
                  ? "initial" === a
                    ? x.initialProfitSummary
                    : "adjusting" === a
                      ? x.adjustingProfitSummary
                      : x.longRunProfitSummary
                  : "initial" === a
                    ? x.initialLossSummary
                    : "adjusting" === a
                      ? x.adjustingLossSummary
                      : x.longRunLossSummary),
                {
                  price: l(r.currentPrice),
                  atc: l(r.atcAtOutput),
                  gap: l(Math.abs(r.economicProfitPerUnit)),
                  averageCost: u.Ml.averageTotalCost,
                  marginalCost: u.Ml.marginalCost,
                  priceNotation: u.Ml.price,
                },
              ),
            }),
          })
        },
        LongRunCompetitiveEquilibriumControls: ({ values: e, setValues: t }) => {
          let a = (0, o.A)(),
            n = (0, d.Ae)(e),
            u = (0, c.Z7)(a),
            m = (0, g.xT)([
              { value: 0, label: a.formatMessage(x.profitEntryOption) },
              { value: 1, label: a.formatMessage(x.lossExitOption) },
            ]),
            p = +("profit_entry" !== n.adjustment)
          return (0, i.jsx)(s.Ur, {
            screenReaderContent: (0, i.jsx)(r.A, { ...x.controlsDescription }),
            children: (0, i.jsx)(l.J, {
              inputs: [
                {
                  variable: a.formatMessage(x.adjustmentLabel),
                  min: 0,
                  max: 1,
                  step: 1,
                  value: p,
                  options: m,
                  showValueInput: !1,
                  ariaLabel: a.formatMessage(x.adjustmentLabel),
                  onChange: (e) =>
                    t(
                      (t) => ({
                        ...(0, d.Ae)(t),
                        adjustment: 0 === e ? "profit_entry" : "loss_exit",
                        adjustment_progress: d._S.min,
                      }),
                      "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE",
                    ),
                },
                {
                  variable: a.formatMessage(x.progressLabel),
                  variableFormat: "text",
                  unit: "%",
                  min: d._S.min,
                  max: d._S.max,
                  step: d._S.step,
                  value: n.adjustment_progress,
                  ...u,
                  ariaLabel: a.formatMessage(x.progressLabel),
                  ariaValueText: a.formatNumber(n.adjustment_progress / 100, {
                    style: "percent",
                    maximumFractionDigits: 1,
                  }),
                  onChange: (e) =>
                    t(
                      (t) => ({ ...(0, d.Ae)(t), adjustment_progress: e }),
                      "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE",
                    ),
                },
              ],
            }),
          })
        },
        LongRunCompetitiveEquilibriumVisualization: ({ values: e, presentationMode: t }) => {
          var a
          let n,
            r = (0, o.A)(),
            s = (0, d.FB)(e),
            l = "thumbnail" === t,
            g = "initial" !== s.stage,
            c = "zero" !== s.gapKind,
            R = s.isEntry ? k : C,
            b = "profit" === s.gapKind ? x.outcomeProfit : "loss" === s.gapKind ? x.outcomeLoss : x.outcomeZero,
            S = r.formatMessage(x.ariaSummary, {
              path: ((n = s.adjustment), r.formatMessage("profit_entry" === n ? x.pathEntry : x.pathExit)),
              stage: r.formatMessage(
                "initial" === (a = s.stage) ? x.stageInitial : "adjusting" === a ? x.stageAdjusting : x.stageLongRun,
              ),
              price: r.formatNumber(s.currentPrice, { maximumFractionDigits: 1, minimumFractionDigits: 1 }),
              outcome: r.formatMessage(b),
            }),
            A = [{ x: s.currentMarketQuantity, y: s.currentPrice, appearance: { fill: v } }],
            h = [
              { x: s.firmOutput, y: s.currentPrice, appearance: { fill: v } },
              ...(c ? [{ x: s.firmOutput, y: s.atcAtOutput, appearance: { fill: y } }] : []),
            ]
          return l
            ? (0, i.jsx)(m.W0, {
                presentationMode: t,
                viewport: P,
                series: [
                  {
                    kind: "line-segment",
                    from: { x: 0.8, y: (0, d.c3)(0.8) },
                    to: { x: 9.2, y: (0, d.c3)(9.2) },
                    stroke: p,
                  },
                  { kind: "line-segment", ...(0, d.rR)(s.marketCurrentSupplyShift), stroke: f },
                ],
                points: A,
                ariaLabel: S,
              })
            : (0, i.jsx)(m.i6, {
                ariaLabel: S,
                legend: [
                  { label: r.formatMessage(x.demand), stroke: p },
                  { label: r.formatMessage(x.supply), stroke: f },
                  { label: (0, u.t6)(r, "averageTotalCost"), stroke: y },
                  { label: (0, u.t6)(r, "marginalCost"), stroke: M },
                  { label: (0, u.BP)(r), stroke: v },
                  {
                    label: r.formatMessage(x.profit),
                    kind: "area",
                    stroke: k,
                    fill: k,
                    active: s.economicProfitPerUnit > 0,
                  },
                  {
                    label: r.formatMessage(x.loss),
                    kind: "area",
                    stroke: C,
                    fill: C,
                    active: s.economicProfitPerUnit < 0,
                  },
                ],
                panels: [
                  {
                    title: r.formatMessage(x.market),
                    visualization: (0, i.jsx)(m.W0, {
                      presentationMode: t,
                      ariaLabel: S,
                      viewport: P,
                      xAxisLabel: r.formatMessage(x.quantity),
                      yAxisLabel: r.formatMessage(x.price),
                      showCoordinateTooltip: !1,
                      series: [
                        {
                          id: "demand",
                          kind: "line-segment",
                          from: { x: 0.8, y: (0, d.c3)(0.8) },
                          to: { x: 9.2, y: (0, d.c3)(9.2) },
                          label: r.formatMessage(x.demand),
                          stroke: p,
                        },
                        ...(g
                          ? [
                              {
                                id: "initial-supply",
                                kind: "line-segment",
                                variant: "reference",
                                ...(0, d.rR)(s.marketInitialSupplyShift),
                                stroke: f,
                              },
                            ]
                          : []),
                        {
                          id: "current-supply",
                          kind: "line-segment",
                          ...(0, d.rR)(s.marketCurrentSupplyShift),
                          label: r.formatMessage(x.supply),
                          stroke: f,
                        },
                      ],
                      segments: [
                        {
                          from: { x: 0, y: s.currentPrice },
                          to: { x: s.currentMarketQuantity, y: s.currentPrice },
                          kind: "guide",
                          stroke: v,
                        },
                        {
                          from: { x: s.currentMarketQuantity, y: 0 },
                          to: { x: s.currentMarketQuantity, y: s.currentPrice },
                          kind: "guide",
                          stroke: v,
                        },
                      ],
                      points: A,
                    }),
                  },
                  {
                    title: r.formatMessage(x.firm),
                    visualization: (0, i.jsx)(m.W0, {
                      presentationMode: t,
                      ariaLabel: S,
                      viewport: B,
                      xAxisLabel: r.formatMessage(x.quantity),
                      yAxisLabel: (0, u.ls)(r),
                      showCoordinateTooltip: !1,
                      series: [
                        {
                          id: "atc",
                          kind: "polyline",
                          points: Array.from({ length: 25 }, (e, t) => {
                            let a = 1 + 0.32 * t
                            return { x: a, y: (0, d.Ad)(a) }
                          }),
                          label: (0, u.t6)(r, "averageTotalCost"),
                          stroke: y,
                        },
                        {
                          id: "mc",
                          kind: "polyline",
                          points: Array.from({ length: 23 }, (e, t) => {
                            let a = 1.6 + 0.32 * t
                            return { x: a, y: (0, d.Cq)(a) }
                          }),
                          label: (0, u.t6)(r, "marginalCost"),
                          stroke: M,
                        },
                        ...(g
                          ? [
                              {
                                id: "initial-price",
                                kind: "line-segment",
                                variant: "reference",
                                from: { x: 0.8, y: s.initialPrice },
                                to: { x: 9.2, y: s.initialPrice },
                                stroke: v,
                              },
                            ]
                          : []),
                        {
                          id: "current-price",
                          kind: "line-segment",
                          from: { x: 0.8, y: s.currentPrice },
                          to: { x: 9.2, y: s.currentPrice },
                          label: (0, u.BP)(r),
                          stroke: v,
                        },
                      ],
                      polygons: c
                        ? [
                            {
                              kind: "highlight",
                              points: [
                                { x: 0, y: s.atcAtOutput },
                                { x: s.firmOutput, y: s.atcAtOutput },
                                { x: s.firmOutput, y: s.currentPrice },
                                { x: 0, y: s.currentPrice },
                              ],
                              fill: R,
                            },
                          ]
                        : [],
                      segments: [
                        {
                          from: { x: s.firmOutput, y: 0 },
                          to: { x: s.firmOutput, y: s.currentPrice },
                          kind: "guide",
                          stroke: v,
                        },
                        ...(c
                          ? [
                              {
                                from: { x: 0, y: s.atcAtOutput },
                                to: { x: s.firmOutput, y: s.atcAtOutput },
                                kind: "guide",
                                stroke: y,
                              },
                              {
                                from: { x: s.firmOutput, y: s.atcAtOutput },
                                to: { x: s.firmOutput, y: s.currentPrice },
                                kind: "measurement",
                                stroke: R,
                              },
                            ]
                          : []),
                      ],
                      points: h,
                    }),
                  },
                ],
              })
        },
      },
    )
  },
  C2BX(e, t, a) {
    var i = a("Qgfj")
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
    a.d(
      t,
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
        t6: (e, t) => e.formatMessage(o[t], { notation: n[t] }),
      },
    )
  },
}
//# sourceMappingURL=925086.2d36501d33.js.map
