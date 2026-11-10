import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CH as t,
  LNt as n,
  PBt as r,
  TY as i,
  XOt as a,
  ZSt as o,
  ck as s,
  iCt as c,
  okt as l,
  rk as u,
  tCt as d,
  tk as f,
  tkt as p,
} from "./app-shared-2feb3d4c6fcc.js";
import { IZn as m, NZn as h } from "./app-initial-ad16eaadf81f.js";
import { a as g, o as _, r as v, s as y } from "./inline-playback-3c9452efb9d4.js";
function b(e) {
  let n = (0, C.c)(12),
    { speed: r, disabled: i, triggerButton: a, showLabel: o, onSpeedChange: s } = e,
    c = o !== void 0 && o,
    d = l(),
    m = c ? `start` : void 0,
    g;
  n[0] === c
    ? (g = n[1])
    : ((g = c
        ? (0, w.jsx)(u.SectionLabel, {
            children: (0, w.jsx)(p, {
              id: `gifEditor.speedMenuLabel`,
              defaultMessage: `GIF speed`,
              description: `Heading for the menu that changes the playback speed of a generated animated GIF`,
            }),
          })
        : null),
      (n[0] = c),
      (n[1] = g));
  let _;
  n[2] !== i || n[3] !== d || n[4] !== s || n[5] !== r
    ? ((_ = h.map((e) =>
        (0, w.jsx)(
          u.Item,
          {
            role: `menuitemradio`,
            "aria-checked": r === e,
            disabled: i,
            RightIcon: r === e ? t : void 0,
            onSelect: () => s(e),
            children: (0, w.jsx)(p, {
              id: `gifEditor.speedValue`,
              defaultMessage: `{speed}×`,
              description: `GIF playback speed multiplier, such as 0.5× or 2×`,
              values: { speed: d.formatNumber(e) },
            }),
          },
          e,
        ),
      )),
      (n[2] = i),
      (n[3] = d),
      (n[4] = s),
      (n[5] = r),
      (n[6] = _))
    : (_ = n[6]);
  let v;
  return (
    n[7] !== m || n[8] !== g || n[9] !== _ || n[10] !== a
      ? ((v = (0, w.jsxs)(f, { side: `top`, align: m, triggerButton: a, children: [g, _] })),
        (n[7] = m),
        (n[8] = g),
        (n[9] = _),
        (n[10] = a),
        (n[11] = v))
      : (v = n[11]),
    v
  );
}
function x(e) {
  let t = (0, C.c)(21),
    { image: n, imageAssetResolver: r } = e,
    i = l(),
    a;
  t[0] !== n || t[1] !== r
    ? ((a = { image: n, imageAssetResolver: r }), (t[0] = n), (t[1] = r), (t[2] = a))
    : (a = t[2]);
  let o = d(v, a),
    { preview: s, busy: u } = c(o.state$),
    f = s?.speed ?? n.gifPlayback?.speed ?? 1,
    m;
  t[3] === o ? (m = t[4]) : ((m = (e) => void o.changeSpeed(e)), (t[3] = o), (t[4] = m));
  let h;
  t[5] === i
    ? (h = t[6])
    : ((h = i.formatMessage({
        id: `gifEditor.speed`,
        defaultMessage: `Playback speed`,
        description: `Open the GIF playback speed menu`,
      })),
      (t[5] = i),
      (t[6] = h));
  let g;
  t[7] !== i || t[8] !== f ? ((g = i.formatNumber(f)), (t[7] = i), (t[8] = f), (t[9] = g)) : (g = t[9]);
  let y;
  t[10] === g
    ? (y = t[11])
    : ((y = (0, w.jsx)(p, {
        id: `gifEditor.speedValue`,
        defaultMessage: `{speed}×`,
        description: `GIF playback speed multiplier, such as 0.5× or 2×`,
        values: { speed: g },
      })),
      (t[10] = g),
      (t[11] = y));
  let x;
  t[12] !== u || t[13] !== h || t[14] !== y
    ? ((x = (0, w.jsx)(_, {
        appearance: `blurred`,
        "aria-label": h,
        "aria-busy": u,
        disabled: u,
        onClick: S,
        children: y,
      })),
      (t[12] = u),
      (t[13] = h),
      (t[14] = y),
      (t[15] = x))
    : (x = t[15]);
  let T;
  return (
    t[16] !== u || t[17] !== f || t[18] !== m || t[19] !== x
      ? ((T = (0, w.jsx)(b, { speed: f, disabled: u, showLabel: !0, onSpeedChange: m, triggerButton: x })),
        (t[16] = u),
        (t[17] = f),
        (t[18] = m),
        (t[19] = x),
        (t[20] = T))
      : (T = t[20]),
    T
  );
}
function S(e) {
  return e.stopPropagation();
}
var C, w;
function T() {
  return (T = e(() => {
    ((C = r()), o(), m(), a(), s(), i(), y(), g(), (w = n()));
  }))();
}
export { x as n, T as r, b as t };
//# sourceMappingURL=speed-menu-251c2bcc175f.js.map
