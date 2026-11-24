export const __rspack_esm_ids = [505057]
export const __webpack_modules__ = {
  Bi1i(e, n, i) {
    var a = i("ABep"),
      o = i("Qgfj"),
      t = i("Wf1j"),
      l = i("oyxz"),
      r = i("KwmQ"),
      s = i("pXKw"),
      g = i("pNxJ"),
      d = i("C2BX"),
      c = i("LP6J"),
      u = i("sCEh"),
      m = i("Ww7F")
    let p = "color-mix(in srgb, var(--learning-block-color-primary) 92%, var(--text-primary))",
      f = "color-mix(in srgb, var(--learning-block-color-companion) 84%, var(--text-primary))",
      y = "var(--text-secondary)",
      v = "var(--text-tertiary)",
      M = (0, o.YK)({
        ceiling: { id: "learningBlock.priceCeilingsAndFloors.ceiling", defaultMessage: "Price ceiling" },
        floor: { id: "learningBlock.priceCeilingsAndFloors.floor", defaultMessage: "Price floor" },
        demand: { id: "learningBlock.priceCeilingsAndFloors.demand", defaultMessage: "Demand" },
        supply: { id: "learningBlock.priceCeilingsAndFloors.supply", defaultMessage: "Supply" },
        shortage: { id: "learningBlock.priceCeilingsAndFloors.shortage", defaultMessage: "Shortage" },
        surplus: { id: "learningBlock.priceCeilingsAndFloors.surplus", defaultMessage: "Surplus" },
        bindingCeilingCaption: {
          id: "learningBlock.priceCeilingsAndFloors.bindingCeilingCaption",
          defaultMessage:
            "Binding ceiling: quantity demanded ({demandNotation}) {quantityDemanded} > quantity supplied ({supplyNotation}) {quantitySupplied}, so shortage = {gap}.",
        },
        bindingFloorCaption: {
          id: "learningBlock.priceCeilingsAndFloors.bindingFloorCaption",
          defaultMessage:
            "Binding floor: quantity supplied ({supplyNotation}) {quantitySupplied} > quantity demanded ({demandNotation}) {quantityDemanded}, so surplus = {gap}.",
        },
        nonbindingCeilingCaption: {
          id: "learningBlock.priceCeilingsAndFloors.nonbindingCeilingCaption",
          defaultMessage: "Nonbinding ceiling: the market stays at equilibrium.",
        },
        nonbindingFloorCaption: {
          id: "learningBlock.priceCeilingsAndFloors.nonbindingFloorCaption",
          defaultMessage: "Nonbinding floor: the market stays at equilibrium.",
        },
      }),
      C = (e, n) => e.formatNumber(n, { maximumFractionDigits: 0, useGrouping: !1 })
    i.d(
      n,
      {},
      {
        PriceCeilingsAndFloorsCaption: ({ values: e }) => {
          let n = (0, t.A)(),
            i = (0, m.Bm)(e),
            o = i.isBinding
              ? "shortage" === i.outcome
                ? M.bindingCeilingCaption
                : M.bindingFloorCaption
              : "ceiling" === i.policyType
                ? M.nonbindingCeilingCaption
                : M.nonbindingFloorCaption
          return (0, a.jsx)(r.Vq, {
            children: (0, a.jsx)(r.OZ, {
              children: (0, a.jsx)(l.A, {
                ...o,
                values: {
                  quantityDemanded: C(n, i.quantityDemanded),
                  quantitySupplied: C(n, i.quantitySupplied),
                  gap: C(n, i.gap),
                  demandNotation: d.Ml.quantityDemanded,
                  supplyNotation: d.Ml.quantitySupplied,
                },
              }),
            }),
          })
        },
        PriceCeilingsAndFloorsControls: ({ values: e, setValues: n }) => {
          let i = (0, t.A)(),
            o = (0, m.NC)(e),
            d = (0, c.Z7)(i),
            u = (0, s.xT)([
              { value: 0, label: i.formatMessage(M.ceiling) },
              { value: 1, label: i.formatMessage(M.floor) },
            ])
          return (0, a.jsx)(r.Ur, {
            screenReaderContent: (0, a.jsx)(l.A, {
              id: "learningBlock.priceCeilingsAndFloors.controlsDescription",
              defaultMessage:
                "Choose a price ceiling or floor and move the controlled price. The graph shows whether the policy binds and whether it creates a shortage or surplus.",
            }),
            children: (0, a.jsx)(g.J, {
              inputs: [
                {
                  variable: i.formatMessage({
                    id: "learningBlock.priceCeilingsAndFloors.policyControl",
                    defaultMessage: "Policy",
                  }),
                  min: 0,
                  max: 1,
                  step: 1,
                  value: +("ceiling" !== o.policyType),
                  options: u,
                  sliderStyle: "stepped",
                  showValueInput: !1,
                  onChange: (e) => {
                    n({ ...o, policyType: 0 === e ? "ceiling" : "floor" }, "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE")
                  },
                },
                {
                  variable: i.formatMessage({
                    id: "learningBlock.priceCeilingsAndFloors.controlledPrice",
                    defaultMessage: "Controlled price",
                  }),
                  min: m.PO.min,
                  max: m.PO.max,
                  step: m.PO.step,
                  value: o.controlledPrice,
                  ...d,
                  onChange: (e) => {
                    n({ ...o, controlledPrice: e }, "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE")
                  },
                },
              ],
            }),
          })
        },
        PriceCeilingsAndFloorsVisualization: ({ values: e, presentationMode: n }) => {
          let i = (0, t.A)(),
            o = (0, m.Bm)(e),
            l = i.formatMessage("ceiling" === o.policyType ? M.ceiling : M.floor),
            r = "shortage" === o.outcome ? i.formatMessage(M.shortage) : i.formatMessage(M.surplus),
            s = [
              { x: 50, y: 50, variant: o.isBinding ? "reference" : void 0, appearance: { fill: v } },
              ...(o.isBinding
                ? [
                    { x: o.quantityDemanded, y: o.controlledPrice, appearance: { fill: p } },
                    { x: o.quantitySupplied, y: o.controlledPrice, appearance: { fill: f } },
                  ]
                : []),
            ],
            g = Math.min(o.quantityDemanded, o.quantitySupplied),
            d = Math.max(o.quantityDemanded, o.quantitySupplied),
            c = [
              {
                from: { x: 50, y: 0 },
                to: { x: 50, y: 50 },
                kind: "guide",
                variant: o.isBinding ? "reference" : void 0,
                stroke: v,
              },
              {
                from: { x: 0, y: 50 },
                to: { x: 50, y: 50 },
                kind: "guide",
                variant: o.isBinding ? "reference" : void 0,
                stroke: v,
              },
              ...(o.isBinding
                ? [
                    {
                      from: { x: o.quantityDemanded, y: 0 },
                      to: { x: o.quantityDemanded, y: o.controlledPrice },
                      kind: "guide",
                      stroke: p,
                    },
                    {
                      from: { x: o.quantitySupplied, y: 0 },
                      to: { x: o.quantitySupplied, y: o.controlledPrice },
                      kind: "guide",
                      stroke: f,
                    },
                    {
                      from: { x: g, y: o.controlledPrice },
                      to: { x: d, y: o.controlledPrice },
                      kind: "measurement",
                      stroke: "var(--red-500)",
                    },
                  ]
                : []),
            ],
            B = i.formatMessage(
              {
                id: "learningBlock.priceCeilingsAndFloors.visualizationDescription",
                defaultMessage:
                  "Supply and demand graph with a {policy} at price {price}. The policy is {binding}. Quantity demanded is {quantityDemanded}, quantity supplied is {quantitySupplied}, and the outcome is {outcome}.",
              },
              {
                policy: l,
                price: C(i, o.controlledPrice),
                binding: o.isBinding
                  ? i.formatMessage({ id: "learningBlock.priceCeilingsAndFloors.binding", defaultMessage: "binding" })
                  : i.formatMessage({
                      id: "learningBlock.priceCeilingsAndFloors.nonbinding",
                      defaultMessage: "nonbinding",
                    }),
                quantityDemanded: C(i, o.quantityDemanded),
                quantitySupplied: C(i, o.quantitySupplied),
                outcome: o.isBinding
                  ? r
                  : i.formatMessage({
                      id: "learningBlock.priceCeilingsAndFloors.equilibriumOutcome",
                      defaultMessage: "equilibrium",
                    }),
              },
            )
          return (0, a.jsx)(u.W0, {
            presentationMode: n,
            viewport: {
              mode: "bounds",
              bounds: { xMin: 0, xMax: 105, yMin: 0, yMax: 105 },
              equalScale: !1,
              paddingUnits: 0,
              refreshOnDataChange: !1,
            },
            series: [
              {
                id: "demand",
                kind: "line-segment",
                from: { x: 10, y: 90 },
                to: { x: 90, y: 10 },
                label: i.formatMessage(M.demand),
                stroke: p,
              },
              {
                id: "supply",
                kind: "line-segment",
                from: { x: 10, y: 10 },
                to: { x: 90, y: 90 },
                label: i.formatMessage(M.supply),
                stroke: f,
              },
              {
                id: "price-control",
                kind: "line-segment",
                from: { x: 0, y: o.controlledPrice },
                to: { x: 100, y: o.controlledPrice },
                label: l,
                variant: "baseline",
                stroke: y,
              },
            ],
            legend: [
              { label: i.formatMessage(M.demand), stroke: p },
              { label: i.formatMessage(M.supply), stroke: f },
              { label: i.formatMessage(M.ceiling), stroke: y, variant: "baseline", active: "ceiling" === o.policyType },
              { label: i.formatMessage(M.floor), stroke: y, variant: "baseline", active: "floor" === o.policyType },
            ],
            segments: c,
            points: s,
            xAxisLabel: i.formatMessage({
              id: "learningBlock.priceCeilingsAndFloors.quantityAxis",
              defaultMessage: "Quantity",
            }),
            yAxisLabel: i.formatMessage({
              id: "learningBlock.priceCeilingsAndFloors.priceAxis",
              defaultMessage: "Price",
            }),
            formatCoordinateValue: (e) => C(i, e),
            ariaLabel: B,
          })
        },
      },
    )
  },
  C2BX(e, n, i) {
    var a = i("Qgfj")
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
      t = (0, a.YK)({
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
      n,
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
        t6: (e, n) => e.formatMessage(t[n], { notation: o[n] }),
      },
    )
  },
}
//# sourceMappingURL=505057.329eff4f96.js.map
