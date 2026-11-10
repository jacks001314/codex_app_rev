import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IDt as t, VDt as n, jDt as r, vzt as i, xMt as a } from "./app-shared-bbfeca5e5737.js";
import { BGn as o, HGn as s, UXn as c, VGn as l, WGn as u, iZn as d } from "./app-initial-5851df3f6cb1.js";
import { n as f, t as p } from "./card-803aeae302cb.js";
import { n as m, r as h } from "./linked-reference-91f472d65bce.js";
function g(e) {
  let r = (0, _.c)(13),
    { reference: i } = e,
    a = n(),
    d;
  if (r[0] !== a || r[1] !== i) {
    let e = u(i.stock),
      n = u(e?.asset),
      f = u(e?.price),
      h = l(i.ticker) ?? l(n?.ticker),
      g = l(n?.name),
      _ = s(f?.price),
      y = s(f?.change),
      b = s(f?.change_percent),
      x = c(i),
      S =
        g == null && h == null
          ? a.formatMessage({
              id: `chatgpt.contentReferences.stock.title`,
              defaultMessage: `Stock`,
              description: `Fallback title for a stock content reference card`,
            })
          : [g, h == null ? null : `(${h})`].filter(Boolean).join(` `),
      C = _ == null ? null : a.formatNumber(_, { maximumFractionDigits: 2, minimumFractionDigits: 2 }),
      w =
        y == null
          ? null
          : a.formatNumber(y, { signDisplay: `always`, maximumFractionDigits: 2, minimumFractionDigits: 2 }),
      T =
        b == null
          ? null
          : a.formatNumber(b, {
              style: `percent`,
              signDisplay: `always`,
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
      E;
    r[3] === C
      ? (E = r[4])
      : ((E = C == null ? null : (0, v.jsx)(`div`, { className: `text-2xl font-semibold`, children: C })),
        (r[3] = C),
        (r[4] = E));
    let D;
    r[5] !== y || r[6] !== b || r[7] !== w || r[8] !== T
      ? ((D =
          y == null && b == null
            ? null
            : (0, v.jsx)(`div`, {
                className: (y ?? b ?? 0) < 0 ? `text-red-500` : `text-green-600 dark:text-green-400`,
                children: (0, v.jsx)(t, {
                  id: `chatgpt.contentReferences.stock.priceChange`,
                  defaultMessage: `{change}{hasBoth, select, yes { } other {}}{hasPercent, select, yes {({percent})} other {}}`,
                  description: `Stock price change. {change} is a locale-formatted signed price difference, or empty. {percent} is a locale-formatted signed percentage. hasBoth is yes when both are present; hasPercent is yes when a percentage is present. Translate the complete numeric display and its punctuation.`,
                  values: {
                    change: w ?? ``,
                    percent: T ?? ``,
                    hasBoth: y != null && b != null ? `yes` : `no`,
                    hasPercent: b == null ? `no` : `yes`,
                  },
                }),
              })),
        (r[5] = y),
        (r[6] = b),
        (r[7] = w),
        (r[8] = T),
        (r[9] = D))
      : (D = r[9]);
    let O;
    (r[10] !== E || r[11] !== D
      ? ((O = (0, v.jsxs)(`div`, {
          className: `flex flex-wrap items-baseline gap-x-3 gap-y-1`,
          children: [E, D],
        })),
        (r[10] = E),
        (r[11] = D),
        (r[12] = O))
      : (O = r[12]),
      (d = (0, v.jsxs)(p, {
        title: S,
        children: [
          O,
          x == null
            ? null
            : (0, v.jsx)(`div`, { className: `mt-2`, children: (0, v.jsx)(m, { href: x, children: o(x) }) }),
        ],
      })),
      (r[0] = a),
      (r[1] = i),
      (r[2] = d));
  } else d = r[2];
  return d;
}
var _, v;
function y() {
  return (y = e(() => {
    ((_ = i()), d(), r(), f(), h(), (v = a()));
  }))();
}
y();
export { g as ChatGptStockReference };
//# sourceMappingURL=stock-44f58cf058cf.js.map
