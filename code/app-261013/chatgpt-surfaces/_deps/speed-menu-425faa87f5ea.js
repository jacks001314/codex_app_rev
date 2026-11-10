import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AO as t,
  CO as n,
  DV as r,
  IDt as i,
  Pxt as a,
  Rxt as o,
  TJ as s,
  TO as c,
  VDt as l,
  Vxt as u,
  jDt as d,
  vzt as f,
  xMt as p,
} from "./app-shared-bbfeca5e5737.js";
import { lJn as m, oJn as h } from "./app-initial-5851df3f6cb1.js";
import { a as g, o as _, r as v, s as y } from "./inline-playback-e4c8461b14e2.js";
function b(e) {
  let t = (0, C.c)(11),
    { speed: a, disabled: o, triggerButton: s, showLabel: l, onSpeedChange: u } = e,
    d = l !== void 0 && l,
    f = d ? `start` : void 0,
    p;
  t[0] === d
    ? (p = t[1])
    : ((p = d
        ? (0, w.jsx)(c.SectionLabel, {
            children: (0, w.jsx)(i, {
              id: `gifEditor.speedMenuLabel`,
              defaultMessage: `GIF speed`,
              description: `Heading for the menu that changes the playback speed of a generated animated GIF`,
            }),
          })
        : null),
      (t[0] = d),
      (t[1] = p));
  let m;
  t[2] !== o || t[3] !== u || t[4] !== a
    ? ((m = h.map((e) =>
        (0, w.jsx)(
          c.Item,
          {
            role: `menuitemradio`,
            "aria-checked": a === e,
            disabled: o,
            RightIcon: a === e ? r : void 0,
            onSelect: () => u(e),
            children: (0, w.jsx)(i, {
              id: `gifEditor.speedValue`,
              defaultMessage: `{speed}×`,
              description: `GIF playback speed multiplier, such as 0.5× or 2×`,
              values: { speed: e },
            }),
          },
          e,
        ),
      )),
      (t[2] = o),
      (t[3] = u),
      (t[4] = a),
      (t[5] = m))
    : (m = t[5]);
  let g;
  return (
    t[6] !== f || t[7] !== p || t[8] !== m || t[9] !== s
      ? ((g = (0, w.jsxs)(n, { side: `top`, align: f, triggerButton: s, children: [p, m] })),
        (t[6] = f),
        (t[7] = p),
        (t[8] = m),
        (t[9] = s),
        (t[10] = g))
      : (g = t[10]),
    g
  );
}
function x(e) {
  let t = (0, C.c)(18),
    { image: n, imageAssetResolver: r } = e,
    a = l(),
    s;
  t[0] !== n || t[1] !== r
    ? ((s = { image: n, imageAssetResolver: r }), (t[0] = n), (t[1] = r), (t[2] = s))
    : (s = t[2]);
  let c = o(v, s),
    { preview: d, busy: f } = u(c.state$),
    p = d?.speed ?? n.gifPlayback?.speed ?? 1,
    m;
  t[3] === c ? (m = t[4]) : ((m = (e) => void c.changeSpeed(e)), (t[3] = c), (t[4] = m));
  let h;
  t[5] === a
    ? (h = t[6])
    : ((h = a.formatMessage({
        id: `gifEditor.speed`,
        defaultMessage: `Playback speed`,
        description: `Open the GIF playback speed menu`,
      })),
      (t[5] = a),
      (t[6] = h));
  let g;
  t[7] === p
    ? (g = t[8])
    : ((g = (0, w.jsx)(i, {
        id: `gifEditor.speedValue`,
        defaultMessage: `{speed}×`,
        description: `GIF playback speed multiplier, such as 0.5× or 2×`,
        values: { speed: p },
      })),
      (t[7] = p),
      (t[8] = g));
  let y;
  t[9] !== f || t[10] !== h || t[11] !== g
    ? ((y = (0, w.jsx)(_, {
        appearance: `blurred`,
        "aria-label": h,
        "aria-busy": f,
        disabled: f,
        onClick: S,
        children: g,
      })),
      (t[9] = f),
      (t[10] = h),
      (t[11] = g),
      (t[12] = y))
    : (y = t[12]);
  let x;
  return (
    t[13] !== f || t[14] !== p || t[15] !== m || t[16] !== y
      ? ((x = (0, w.jsx)(b, { speed: p, disabled: f, showLabel: !0, onSpeedChange: m, triggerButton: y })),
        (t[13] = f),
        (t[14] = p),
        (t[15] = m),
        (t[16] = y),
        (t[17] = x))
      : (x = t[17]),
    x
  );
}
function S(e) {
  return e.stopPropagation();
}
var C, w;
function T() {
  return (T = e(() => {
    ((C = f()), a(), m(), d(), t(), s(), y(), g(), (w = p()));
  }))();
}
export { x as n, T as r, b as t };
//# sourceMappingURL=speed-menu-425faa87f5ea.js.map
