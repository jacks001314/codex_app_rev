import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { Akt as n, FBt as r, LNt as i, MNt as a, NNt as o, kkt as s } from "./app-shared-2feb3d4c6fcc.js";
var c, l, u, d, f, p;
function m() {
  return (m = e(() => {
    ((c = `_RadioGroup_j7dmj_2`),
      (l = `_RadioLabel_j7dmj_2`),
      (u = `_RadioIndicatorWrapper_j7dmj_2`),
      (d = `_RadioItem_j7dmj_2`),
      (f = `_RadioIndicator_j7dmj_2`),
      (p = {
        RadioGroup: c,
        RadioLabel: l,
        RadioIndicatorWrapper: u,
        RadioItem: d,
        RadioIndicator: f,
        "fade-in": `_fade-in_j7dmj_2`,
        "scale-in": `_scale-in_j7dmj_2`,
      }));
  }))();
}
var h, g, _, v, y, b;
function x() {
  return (x = e(() => {
    (o(),
      n(),
      (h = t(r(), 1)),
      m(),
      (g = i()),
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
        disabled: i = !1,
        __isWidget: o,
        ...c
      }) => {
        let l = (0, h.useMemo)(() => ({ disabled: i, direction: r }), [i, r]);
        return (0, g.jsx)(_, {
          value: l,
          children: (0, g.jsx)(s.Root, {
            className: a(p.RadioGroup, n),
            "data-direction": r,
            "data-w-component": o ? `radio-group` : void 0,
            onValueChange: e,
            disabled: i,
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
        children: i,
        className: o,
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
            className: a(p.RadioLabel, o),
            "data-disabled": d ? `` : void 0,
            "data-block": c ? `` : void 0,
            onMouseDown: (e) => {
              !e.defaultPrevented && e.detail > 1 && e.preventDefault();
            },
            children: [
              (0, g.jsx)(`div`, {
                className: p.RadioIndicatorWrapper,
                children: (0, g.jsx)(s.Item, {
                  id: m,
                  value: e,
                  disabled: d,
                  required: r,
                  className: p.RadioItem,
                  children: (0, g.jsx)(s.Indicator, { className: p.RadioIndicator }),
                }),
              }),
              i,
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
//# sourceMappingURL=radio-group-8a1b881bed8e.js.map
