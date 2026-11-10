import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, XOt as r, okt as i, tkt as a } from "./app-shared-2feb3d4c6fcc.js";
import { C1n as o, c1n as s, dYn as c, lYn as l, pYn as u, uYn as d } from "./app-initial-ad16eaadf81f.js";
import { n as f, t as p } from "./card-d542d2f559db.js";
import { n as m, r as h } from "./linked-reference-1865fe901f10.js";
function g(e) {
  let t = (0, _.c)(13),
    { reference: n } = e,
    r = i(),
    o;
  if (t[0] !== r || t[1] !== n) {
    let e = u(n.stock),
      i = u(e?.asset),
      f = u(e?.price),
      h = d(n.ticker) ?? d(i?.ticker),
      g = d(i?.name),
      _ = c(f?.price),
      y = c(f?.change),
      b = c(f?.change_percent),
      x = s(n),
      S =
        g == null && h == null
          ? r.formatMessage({
              id: `chatgpt.contentReferences.stock.title`,
              defaultMessage: `Stock`,
              description: `Fallback title for a stock content reference card`,
            })
          : [g, h == null ? null : `(${h})`].filter(Boolean).join(` `),
      C = _ == null ? null : r.formatNumber(_, { maximumFractionDigits: 2, minimumFractionDigits: 2 }),
      w =
        y == null
          ? null
          : r.formatNumber(y, { signDisplay: `always`, maximumFractionDigits: 2, minimumFractionDigits: 2 }),
      T =
        b == null
          ? null
          : r.formatNumber(b, {
              style: `percent`,
              signDisplay: `always`,
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
      E;
    t[3] === C
      ? (E = t[4])
      : ((E = C == null ? null : (0, v.jsx)(`div`, { className: `text-2xl font-semibold`, children: C })),
        (t[3] = C),
        (t[4] = E));
    let D;
    t[5] !== y || t[6] !== b || t[7] !== w || t[8] !== T
      ? ((D =
          y == null && b == null
            ? null
            : (0, v.jsx)(`div`, {
                className: (y ?? b ?? 0) < 0 ? `text-red-500` : `text-green-600 dark:text-green-400`,
                children: (0, v.jsx)(a, {
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
        (t[5] = y),
        (t[6] = b),
        (t[7] = w),
        (t[8] = T),
        (t[9] = D))
      : (D = t[9]);
    let O;
    (t[10] !== E || t[11] !== D
      ? ((O = (0, v.jsxs)(`div`, {
          className: `flex flex-wrap items-baseline gap-x-3 gap-y-1`,
          children: [E, D],
        })),
        (t[10] = E),
        (t[11] = D),
        (t[12] = O))
      : (O = t[12]),
      (o = (0, v.jsxs)(p, {
        title: S,
        children: [
          O,
          x == null
            ? null
            : (0, v.jsx)(`div`, { className: `mt-2`, children: (0, v.jsx)(m, { href: x, children: l(x) }) }),
        ],
      })),
      (t[0] = r),
      (t[1] = n),
      (t[2] = o));
  } else o = t[2];
  return o;
}
var _, v;
function y() {
  return (y = e(() => {
    ((_ = n()), o(), r(), f(), h(), (v = t()));
  }))();
}
y();
export { g as ChatGptStockReference };
//# sourceMappingURL=stock-e75fc8a23893.js.map
