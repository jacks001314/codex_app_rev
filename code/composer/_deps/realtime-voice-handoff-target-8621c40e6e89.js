import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Amn as n,
  Da as r,
  Ea as i,
  OL as a,
  Oa as o,
  Ta as s,
  _zt as c,
  hmn as l,
  kL as u,
  kmn as d,
  yzt as f,
} from "./app-initial-f094ef01c64d.js";
function p(e) {
  let t = (0, g.c)(13),
    {
      children: n,
      className: r,
      handoff: i,
      presentationAnchorRef: a,
      style: o,
      surface: s,
      usesFadeTransition: c,
    } = e,
    l = c !== void 0 && c,
    d = f(),
    p = u(),
    h = (0, _.useRef)(null),
    y = (0, _.useRef)(null),
    b;
  t[0] !== i || t[1] !== a || t[2] !== p || t[3] !== s || t[4] !== l || t[5] !== d
    ? ((b = (e) => {
        if ((a?.(e), h.current?.cancel(), (h.current = null), i == null)) {
          y.current = null;
          return;
        }
        e == null ||
          y.current === i.sequence ||
          ((y.current = i.sequence), (h.current = m(e, i, s, l, d, p)));
      }),
      (t[0] = i),
      (t[1] = a),
      (t[2] = p),
      (t[3] = s),
      (t[4] = l),
      (t[5] = d),
      (t[6] = b))
    : (b = t[6]);
  let x = b,
    S;
  return (
    t[7] !== n || t[8] !== r || t[9] !== o || t[10] !== s || t[11] !== x
      ? ((S = (0, v.jsx)(`div`, {
          ref: x,
          className: r,
          "data-realtime-voice-handoff-target": s,
          style: o,
          children: n,
        })),
        (t[7] = n),
        (t[8] = r),
        (t[9] = o),
        (t[10] = s),
        (t[11] = x),
        (t[12] = S))
      : (S = t[12]),
    S
  );
}
function m(e, t, n, a, o, c) {
  if (typeof e.animate != `function` || c) return null;
  if (a)
    return e.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 200,
      easing: y,
      fill: `backwards`,
    });
  if (n === `global-overlay` && t.from === `main-thread`)
    return e.animate([{ opacity: 0.96 }, { opacity: 1 }], {
      duration: 90,
      easing: y,
      fill: `backwards`,
    });
  let l = r(e.getBoundingClientRect(), { screenX: window.screenX, screenY: window.screenY }),
    u = t.origin == null ? h(t.from) : s(t.origin, l, o, n === `main-thread` ? 300 : 180);
  if (n === `main-thread` && Math.hypot(u.x, u.y) < 4)
    return e.animate(
      [
        { filter: `blur(1.5px)`, opacity: 0.96 },
        { filter: `blur(0px)`, opacity: 1 },
      ],
      { duration: 120, easing: y, fill: `backwards` },
    );
  let d = n === `main-thread` ? 0.86 : 0.82;
  t.origin != null &&
    l.width !== 0 &&
    (d = Math.min(1.12, Math.max(0.82, t.origin.width / l.width)));
  let f = t.velocity == null ? { x: 0, y: 0 } : i(t.velocity, o, n === `main-thread` ? 56 : 48),
    p = Math.min(3, Math.max(-3, u.x / 40)),
    m = { x: u.x * 0.3 + f.x, y: u.y * 0.3 + f.y };
  return e.animate(
    [
      {
        opacity: n === `main-thread` ? 0.88 : 0.82,
        transform: `translate3d(${u.x}px, ${u.y}px, 0) scale(${d}) rotate(${p}deg)`,
      },
      {
        opacity: 1,
        transform: `translate3d(${m.x}px, ${m.y}px, 0) scale(1.045) rotate(${p * -0.35}deg)`,
        offset: 0.46,
      },
      {
        opacity: 1,
        transform: `translate3d(${m.y * -0.045}px, ${m.x * 0.045 - 2}px, 0) scale(1.018) rotate(0deg)`,
        offset: 0.8,
      },
      { opacity: 1, transform: `translate3d(0, 0, 0) scale(1) rotate(0deg)` },
    ],
    {
      delay: n === `global-overlay` ? 24 : 0,
      duration: n === `main-thread` ? 300 : 280,
      easing: y,
      fill: `backwards`,
    },
  );
}
function h(e) {
  switch (e) {
    case `global-overlay`:
      return { x: 0, y: -28 };
    case `main-thread`:
      return { x: 0, y: 18 };
  }
}
var g,
  _,
  v,
  y,
  b = e(() => {
    ((g = d()), (_ = t(n(), 1)), c(), a(), o(), (v = l()), (y = `cubic-bezier(0.22, 1, 0.36, 1)`));
  });
export { b as n, p as t };
//# sourceMappingURL=realtime-voice-handoff-target-8621c40e6e89.js.map
