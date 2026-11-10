import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Jit as t,
  Kit as n,
  Rpn as r,
  hmn as i,
  iW as a,
  kmn as o,
  oW as s,
  rW as c,
  zpn as l,
} from "./app-initial-f094ef01c64d.js";
import { n as u, r as d, t as f } from "./layout-33ea0ace304f.js";
function p(e) {
  let t = (0, g.c)(15),
    { text: i, className: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { fallbackFontSizePx: c }), (t[0] = o))
    : (o = t[0]);
  let { setTextMeasurementRef: l, textMeasurement: u } = s(o),
    d;
  bb0: {
    if (u == null) {
      d = i;
      break bb0;
    }
    let e;
    (t[1] !== i || t[2] !== u.font || t[3] !== u.maxWidthPx
      ? ((e = m(i, u.font, u.maxWidthPx)),
        (t[1] = i),
        (t[2] = u.font),
        (t[3] = u.maxWidthPx),
        (t[4] = e))
      : (e = t[4]),
      (d = e));
  }
  let f = d,
    p = f === i,
    h;
  t[5] === a
    ? (h = t[6])
    : ((h = r(`block min-w-0 overflow-hidden whitespace-nowrap`, a)), (t[5] = a), (t[6] = h));
  let v;
  t[7] !== f || t[8] !== l || t[9] !== h
    ? ((v = (0, _.jsx)(`span`, { ref: l, className: h, children: f })),
      (t[7] = f),
      (t[8] = l),
      (t[9] = h),
      (t[10] = v))
    : (v = t[10]);
  let y;
  return (
    t[11] !== p || t[12] !== v || t[13] !== i
      ? ((y = (0, _.jsx)(n, { tooltipContent: i, disabled: p, children: v })),
        (t[11] = p),
        (t[12] = v),
        (t[13] = i),
        (t[14] = y))
      : (y = t[14]),
    y
  );
}
function m(e, t, n) {
  if (e.length === 0 || n <= 0 || h(e, t, n)) return e;
  let r = Array.from(e),
    i = 0,
    a = r.length - 1,
    o = v;
  for (; i <= a;) {
    let e = Math.floor((i + a) / 2),
      s = Math.ceil(e / 2),
      c = Math.floor(e / 2),
      l = `${r.slice(0, s).join(``)}${v}${r.slice(r.length - c).join(``)}`;
    h(l, t, n) ? ((o = l), (i = e + 1)) : (a = e - 1);
  }
  return o;
}
function h(e, t, n) {
  return (
    (b ??= document.createElement(`canvas`).getContext(`2d`)),
    b == null
      ? u(d(e, t, { whiteSpace: `pre-wrap` }), n, y).lineCount <= 1
      : ((b.font = t), b.measureText(e).width <= n)
  );
}
var g,
  _,
  v,
  y,
  b,
  x = e(() => {
    ((g = o()), f(), l(), t(), a(), (_ = i()), (v = `…`), (y = 1), (b = null));
  });
export { x as n, p as t };
//# sourceMappingURL=middle-truncated-text-3230b5cffad1.js.map
