import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { _Mt as n, dOt as r, gMt as i, uOt as a, xMt as o, yzt as s } from "./app-shared-bbfeca5e5737.js";
var c, l, u, d, f, p;
function m() {
  return (m = e(() => {
    ((c = `_RadioGroup_f0hja_2`),
      (l = `_RadioLabel_f0hja_2`),
      (u = `_RadioIndicatorWrapper_f0hja_2`),
      (d = `_RadioItem_f0hja_2`),
      (f = `_RadioIndicator_f0hja_2`),
      (p = {
        RadioGroup: c,
        RadioLabel: l,
        RadioIndicatorWrapper: u,
        RadioItem: d,
        RadioIndicator: f,
        "fade-in": `_fade-in_f0hja_2`,
        "scale-in": `_scale-in_f0hja_2`,
      }));
  }))();
}
var h, g, _, v, y, b;
function x() {
  return (x = e(() => {
    (n(),
      r(),
      (h = t(s(), 1)),
      m(),
      (g = o()),
      (_ = (0, h.createContext)(null)),
      (v = () => {
        let e = (0, h.use)(_);
        if (!e) throw Error(`RadioGroup components must be wrapped in <RadioGroup />`);
        return e;
      }),
      (y = ({
        onChange: e,
        children: t,
        className: n,
        direction: r = `row`,
        disabled: o = !1,
        __isWidget: s,
        ...c
      }) => {
        let l = (0, h.useMemo)(() => ({ disabled: o, direction: r }), [o, r]);
        return (0, g.jsx)(_, {
          value: l,
          children: (0, g.jsx)(a.Root, {
            className: i(p.RadioGroup, n),
            "data-direction": r,
            "data-w-component": s ? `radio-group` : void 0,
            onValueChange: e,
            disabled: o,
            ...c,
            children: t,
          }),
        });
      }),
      (b = ({
        value: e,
        disabled: t = !1,
        id: n,
        required: r,
        children: o,
        className: s,
        block: c = !1,
        ...l
      }) => {
        let { disabled: u } = v(),
          d = u || t,
          f = (0, h.useId)(),
          m = n ?? `${e}-${f}`;
        return (0, g.jsx)(`div`, {
          className: `flex`,
          ...l,
          children: (0, g.jsxs)(`label`, {
            htmlFor: m,
            className: i(p.RadioLabel, s),
            "data-disabled": d ? `` : void 0,
            "data-block": c ? `` : void 0,
            onMouseDown: (e) => {
              !e.defaultPrevented && e.detail > 1 && e.preventDefault();
            },
            children: [
              (0, g.jsx)(`div`, {
                className: p.RadioIndicatorWrapper,
                children: (0, g.jsx)(a.Item, {
                  id: m,
                  value: e,
                  disabled: d,
                  required: r,
                  className: p.RadioItem,
                  children: (0, g.jsx)(a.Indicator, { className: p.RadioIndicator }),
                }),
              }),
              o,
            ],
          }),
        });
      }),
      (y.Item = b));
  }))();
}
function S() {
  return (S = e(() => {
    x();
  }))();
}
export { y as n, x as r, S as t };
//# sourceMappingURL=radio-group-11cefafc81df.js.map
