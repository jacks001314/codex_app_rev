import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { _Mt as t, cz as n, gMt as r, sz as i, vzt as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
function s(e) {
  let t = (0, c.c)(16),
    {
      ariaLabel: n,
      borderClassName: a,
      children: o,
      disabled: s,
      muted: u,
      onClick: d,
      renderTooltip: f,
      tooltip: p,
    } = e,
    m = a === void 0 ? `border-transparent` : a,
    h = u !== void 0 && u,
    g;
  t[0] !== n || t[1] !== m || t[2] !== o || t[3] !== s || t[4] !== d || t[5] !== p
    ? ((g =
        d == null
          ? (0, l.jsx)(`span`, {
              "aria-label": n ?? p,
              className: r(`relative inline-flex rounded-full border p-px`, m),
              children: o,
            })
          : (0, l.jsx)(`button`, {
              "aria-label": n ?? p,
              className: r(`relative inline-flex cursor-interaction rounded-full border p-px`, m),
              disabled: s,
              type: `button`,
              onClick: d,
              children: o,
            })),
      (t[0] = n),
      (t[1] = m),
      (t[2] = o),
      (t[3] = s),
      (t[4] = d),
      (t[5] = p),
      (t[6] = g))
    : (g = t[6]);
  let _ = g,
    v = h ? `opacity-40` : `opacity-100`,
    y;
  t[7] === v
    ? (y = t[8])
    : ((y = r(`inline-flex transition-opacity duration-basic motion-reduce:transition-none`, v)),
      (t[7] = v),
      (t[8] = y));
  let b;
  t[9] !== f || t[10] !== p || t[11] !== _
    ? ((b = f?.(_) ?? (0, l.jsx)(i, { tooltipContent: p, children: _ })),
      (t[9] = f),
      (t[10] = p),
      (t[11] = _),
      (t[12] = b))
    : (b = t[12]);
  let x;
  return (
    t[13] !== y || t[14] !== b
      ? ((x = (0, l.jsx)(`span`, {
          className: `inline-flex rounded-full bg-surface`,
          children: (0, l.jsx)(`span`, { className: y, children: b }),
        })),
        (t[13] = y),
        (t[14] = b),
        (t[15] = x))
      : (x = t[15]),
    x
  );
}
var c, l;
function u() {
  return (u = e(() => {
    ((c = a()), t(), n(), (l = o()));
  }))();
}
export { u as n, s as t };
//# sourceMappingURL=collaborator-avatar-cfdc8d7a57ac.js.map
