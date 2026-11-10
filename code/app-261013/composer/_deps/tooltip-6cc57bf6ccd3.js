import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { _Mt as t, cz as n, gMt as r, sz as i, vzt as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
var s, c;
function l() {
  return (l = e(() => {
    ((s = `_promptPreview_1nf7m_2`), (c = { promptPreview: s }));
  }))();
}
function u(e) {
  let t = (0, d.c)(24),
    n,
    a,
    o,
    s,
    l,
    u,
    p,
    m,
    h,
    g;
  if (t[0] !== e) {
    g = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let { variant: t, compact: c, ...d } = e;
      o = d;
      let _ = t === void 0 ? `promptPreview` : t;
      if (((a = c !== void 0 && c), _ === `rich`)) {
        g = (0, f.jsx)(i, { ...o, variant: `rich` });
        break bb0;
      }
      ((n = i),
        (s = o),
        (l = `unstyled`),
        (u = o.sideOffset ?? 14),
        (p = !0),
        (m = r(
          `relative overflow-hidden rounded-3xl border-[0.5px] border-strong bg-surface text-default shadow-card`,
          o.tooltipClassName,
        )),
        (h = r(`overflow-hidden`, a ? `px-3 py-2` : `p-5`, o.tooltipBodyClassName)));
    }
    ((t[0] = e),
      (t[1] = n),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = l),
      (t[6] = u),
      (t[7] = p),
      (t[8] = m),
      (t[9] = h),
      (t[10] = g));
  } else
    ((n = t[1]),
      (a = t[2]),
      (o = t[3]),
      (s = t[4]),
      (l = t[5]),
      (u = t[6]),
      (p = t[7]),
      (m = t[8]),
      (h = t[9]),
      (g = t[10]));
  if (g !== Symbol.for(`react.early_return_sentinel`)) return g;
  let _ =
      o.tooltipMaxWidth ??
      `min(calc(var(--spacing) * 108), var(--radix-tooltip-content-available-width), calc(100vw - var(--spacing) * 8))`,
    v;
  t[11] !== a || t[12] !== o.tooltipContent
    ? ((v =
        o.tooltipContent == null
          ? null
          : (0, f.jsx)(`div`, {
              className: a ? `w-max max-w-full text-sm leading-5 font-normal` : r(c.promptPreview, `w-108`),
              children: o.tooltipContent,
            })),
      (t[11] = a),
      (t[12] = o.tooltipContent),
      (t[13] = v))
    : (v = t[13]);
  let y;
  return (
    t[14] !== n ||
    t[15] !== s ||
    t[16] !== l ||
    t[17] !== u ||
    t[18] !== p ||
    t[19] !== m ||
    t[20] !== h ||
    t[21] !== _ ||
    t[22] !== v
      ? ((y = (0, f.jsx)(n, {
          ...s,
          variant: l,
          sideOffset: u,
          scaleAvailableSizeWithZoom: p,
          tooltipClassName: m,
          tooltipBodyClassName: h,
          tooltipMaxWidth: _,
          tooltipContent: v,
        })),
        (t[14] = n),
        (t[15] = s),
        (t[16] = l),
        (t[17] = u),
        (t[18] = p),
        (t[19] = m),
        (t[20] = h),
        (t[21] = _),
        (t[22] = v),
        (t[23] = y))
      : (y = t[23]),
    y
  );
}
var d, f;
function p() {
  return (p = e(() => {
    ((d = a()), t(), n(), l(), (f = o()));
  }))();
}
export { p as n, u as t };
//# sourceMappingURL=tooltip-6cc57bf6ccd3.js.map
