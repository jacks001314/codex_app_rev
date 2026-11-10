import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  _Mt as t,
  _wt as n,
  gMt as r,
  gwt as i,
  vzt as a,
  xMt as o,
  yzt as s,
} from "./app-shared-bbfeca5e5737.js";
function c(e) {
  let t = (0, l.c)(23),
    { ariaLabel: i, className: a, options: o, selectedId: s, animateSelection: c, size: f, onSelect: p } = e,
    m = c === void 0 || c,
    h = f === void 0 ? `default` : f,
    g = (0, u.useId)(),
    _ =
      h === `compact`
        ? `inline-grid gap-0.5 rounded-[10px] bg-surface-secondary/92 p-0.5`
        : `bg-text/10 inline-grid gap-1 rounded-2xl p-1`,
    v;
  t[0] !== a || t[1] !== _ ? ((v = r(_, a)), (t[0] = a), (t[1] = _), (t[2] = v)) : (v = t[2]);
  let y = `repeat(${o.length}, minmax(0, 1fr))`,
    b;
  t[3] === y ? (b = t[4]) : ((b = { gridTemplateColumns: y }), (t[3] = y), (t[4] = b));
  let x;
  if (t[5] !== m || t[6] !== g || t[7] !== p || t[8] !== o || t[9] !== s || t[10] !== h) {
    let e;
    (t[12] !== m || t[13] !== g || t[14] !== p || t[15] !== s || t[16] !== h
      ? ((e = (e) => {
          let t = e.id === s;
          return (0, d.jsxs)(
            `button`,
            {
              className: r(
                `cursor-interaction relative isolate min-w-0 transition-transform duration-basic active:scale-[0.98]`,
                h === `compact`
                  ? `flex h-6 items-center justify-center rounded-lg px-2 py-0 text-xs leading-4 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`
                  : `rounded-xl px-3 py-1.5 text-sm font-medium`,
                t ? (h === `compact` && `text-default`) || `text-black` : `text-secondary`,
              ),
              type: `button`,
              "aria-label": e.ariaLabel,
              "aria-pressed": t,
              onClick: () => {
                p(e.id);
              },
              children: [
                t
                  ? (0, d.jsx)(n.span, {
                      layoutId: m ? g : void 0,
                      className:
                        h === `compact`
                          ? `absolute inset-0 -z-10 rounded-lg bg-surface shadow-sm`
                          : `absolute inset-0 -z-10 rounded-xl bg-white shadow-sm`,
                      transition: { type: `spring`, duration: 0.28, bounce: 0 },
                    })
                  : null,
                e.label,
              ],
            },
            e.id,
          );
        }),
        (t[12] = m),
        (t[13] = g),
        (t[14] = p),
        (t[15] = s),
        (t[16] = h),
        (t[17] = e))
      : (e = t[17]),
      (x = o.map(e)),
      (t[5] = m),
      (t[6] = g),
      (t[7] = p),
      (t[8] = o),
      (t[9] = s),
      (t[10] = h),
      (t[11] = x));
  } else x = t[11];
  let S;
  return (
    t[18] !== i || t[19] !== v || t[20] !== b || t[21] !== x
      ? ((S = (0, d.jsx)(`div`, { className: v, role: `group`, "aria-label": i, style: b, children: x })),
        (t[18] = i),
        (t[19] = v),
        (t[20] = b),
        (t[21] = x),
        (t[22] = S))
      : (S = t[22]),
    S
  );
}
var l, u, d;
function f() {
  return (f = e(() => {
    ((l = a()), t(), i(), (u = s()), (d = o()));
  }))();
}
export { f as n, c as t };
//# sourceMappingURL=animated-segmented-toggle-f154c6e9835b.js.map
