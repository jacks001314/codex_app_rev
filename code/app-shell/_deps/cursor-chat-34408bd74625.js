import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  BGt as t,
  HGt as n,
  IGt as r,
  LGt as i,
  RGt as a,
  VGt as o,
  zGt as s,
} from "./app-initial-f094ef01c64d.js";
function c(e, { assetUrl: n, dataTestId: r = `browser-agent-cursor`, glowColor: i, onArrived: a }) {
  let o = l(e, n, r, i),
    s = null,
    c = I(),
    f = null,
    p = null,
    m = null,
    h = null,
    g = null,
    _ = null,
    v = !1,
    y = !1,
    x = () => {
      m == null || p == null || g === p || ((g = p), a?.(m));
    },
    S = () => {
      s != null ||
        f == null ||
        y ||
        (s = fe((e) => {
          s = null;
          let t = f;
          if (t == null) return;
          let n = v ? q : Math.max(q, (e - c) / 1e3);
          ((v = !1), (c = e));
          let r = ee(t, n, e);
          (b(o, t), r && x(), te(t) && S());
        }));
    };
  return {
    destroy: () => {
      ((y = !0), s != null && (pe(s), (s = null)), o.layer.remove());
    },
    setState: (e) => {
      let n = e.turnKey ?? ``,
        r = e.cursor != null,
        i = ne({
          cursorX: e.cursor?.x,
          cursorY: e.cursor?.y,
          viewportHeight: e.viewportSize.height,
          viewportWidth: e.viewportSize.width,
        }),
        a = e.isVisible !== !1 && e.cursor?.visible !== !1,
        s = e.cursor?.animateMovement !== !1,
        c = a && !r;
      if (
        ((m = e.cursor?.moveSequence ?? null),
        (p = m == null ? null : `${n}:${m}`),
        (f ??= u(i, a)),
        (f.visibilitySpring.target = +!!a),
        c && h !== n && ((h = n), A(f.visibilitySpring, 1), (f.thinkStartedAt = I())),
        !r)
      ) {
        (T(f, i), b(o, f), S());
        return;
      }
      let l = e.cursor?.moveSequence != null && a && f.visibilitySpring.value <= 0.001 && _ !== n;
      f.thinkStartedAt = null;
      let ee = t(f.point, i);
      if (!s || l || ee < 0.5) {
        (l && ((_ = n), A(f.visibilitySpring, 1)),
          T(f, i),
          s ||
            ((f.stretchSpring.force = 0),
            (f.stretchSpring.value = 1),
            (f.stretchSpring.velocity = 0)),
          b(o, f),
          x(),
          S());
        return;
      }
      (d(f, i, e.viewportSize), (v = !0), b(o, f), S());
    },
  };
}
function l(e, t, n, r) {
  let i = document.createElement(`div`);
  (i.setAttribute(`aria-hidden`, `true`),
    (i.style.inset = `0`),
    (i.style.overflow = `hidden`),
    (i.style.pointerEvents = `none`),
    (i.style.position = `absolute`),
    (i.style.zIndex = `20`));
  let a = document.createElement(`div`);
  ((a.dataset.testid = n),
    (a.style.height = `${L}px`),
    (a.style.left = `0`),
    (a.style.position = `absolute`),
    (a.style.top = `0`),
    (a.style.transformOrigin = `${R}px ${R}px`),
    (a.style.willChange = `transform`),
    (a.style.width = `${L}px`));
  let o = document.createElement(`div`);
  o.style.transform = `translate3d(${V}px, ${H}px, 0)`;
  let s = document.createElement(`img`);
  return (
    (s.alt = ``),
    (s.dataset.browserAgentCursorAsset = ``),
    (s.dataset.testid = `${n}-asset`),
    (s.draggable = !1),
    (s.height = B),
    (s.src = t),
    (s.style.display = `block`),
    s.style.setProperty(W, r),
    (s.style.filter = G),
    (s.style.transform = `rotate(${U}deg) scale(1)`),
    (s.style.transformOrigin = `0 0`),
    (s.width = z),
    o.appendChild(s),
    a.appendChild(o),
    i.appendChild(a),
    e.appendChild(i),
    { cursor: a, layer: i }
  );
}
function u(e, t) {
  let n = +!!t,
    r = P(-44);
  return {
    motion: null,
    point: e,
    positionXSpring: k(e.x, e.x, Q),
    positionYSpring: k(e.y, e.y, Q),
    rotation: r,
    rotationSpring: k(r, r, $),
    scootAxisRotation: 0,
    scootAxisSpring: k(0, 0, $),
    scootRotationSpring: k(0, 0, ke),
    scootStretchSpring: k(1, 1, Ae),
    stretchSpring: k(1, 1, Ee),
    thinkStartedAt: null,
    visibilitySpring: k(n, n, De),
  };
}
function d(e, n, r) {
  e.thinkStartedAt = null;
  let o = { x: e.point.x, y: e.point.y };
  if (t(o, n) <= Se) {
    f(e, o, n);
    return;
  }
  let s = i({ bounds: r, end: n, start: o }),
    c = a(s);
  (C(e, oe(c.response), c.dampingFraction),
    (e.motion = { mode: `bezier`, path: s, progressSpring: k(0, 1, c) }));
}
function f(e, t, n) {
  let r = p(t, n);
  (C(e, Q.response, Q.dampingFraction),
    (e.positionXSpring.target = n.x),
    (e.positionYSpring.target = n.y),
    D(e.rotationSpring, P(-44)),
    D(e.scootAxisSpring, r.axisRotation),
    (e.motion = {
      axisRotation: r.axisRotation,
      end: n,
      mode: `scoot`,
      progressSpring: k(0, 1, Oe),
      rotationTarget: r.rotationTarget,
      start: t,
    }));
}
function p(e, t) {
  let n = ue({ x: t.x - e.x, y: t.y - e.y });
  return { axisRotation: m(n), rotationTarget: h(n) };
}
function m(e) {
  return t({ x: 0, y: 0 }, e) < 0.001 ? 0 : Math.atan2(e.y, e.x) * (180 / Math.PI);
}
function h(e) {
  return r(e.x * 0.75 + -e.y * 0.62, -1, 1) * Ce;
}
function ee(e, t, n) {
  let r = g(e, t, n);
  return (
    j(e.visibilitySpring, t),
    j(e.stretchSpring, t),
    j(e.scootStretchSpring, t),
    j(e.scootRotationSpring, t),
    r
  );
}
function g(e, t, n) {
  if (e.motion == null)
    return (
      (e.stretchSpring.target = 1),
      (e.scootStretchSpring.target = 1),
      (e.scootRotationSpring.target = 0),
      !1
    );
  let r = Math.max(0, t);
  return ((e.thinkStartedAt = null), e.motion.mode === `scoot` ? v(e, r, n) : _(e, r, n));
}
function _(e, t, i) {
  let a = e.motion;
  if (a?.mode !== `bezier`) return !1;
  ((e.scootStretchSpring.target = 1), (e.scootRotationSpring.target = 0), j(a.progressSpring, t));
  let o = r(a.progressSpring.value, 0, 1),
    c = n(a.path, o),
    l = s(c.tangent);
  ((e.positionXSpring.target = c.point.x),
    (e.positionYSpring.target = c.point.y),
    D(e.rotationSpring, l),
    D(e.scootAxisSpring, 0));
  let u = se(e, t);
  if (
    ((e.stretchSpring.target = ie(u.speed)),
    o >= 0.999 && Math.abs(a.progressSpring.velocity) < 0.01 && ce(e, c.point))
  ) {
    let t = n(a.path, 1),
      r = s(t.tangent);
    return (
      w(e, t.point),
      A(e.rotationSpring, r),
      (e.rotation = r),
      A(e.scootAxisSpring, 0),
      (e.scootAxisRotation = 0),
      A(e.stretchSpring, 1),
      (e.motion = null),
      (e.thinkStartedAt = i),
      !0
    );
  }
  return !1;
}
function v(e, t, n) {
  let r = e.motion;
  if (r?.mode !== `scoot`) return !1;
  (j(r.progressSpring, t),
    (e.positionXSpring.target = r.end.x),
    (e.positionYSpring.target = r.end.y),
    D(e.scootAxisSpring, r.axisRotation),
    D(e.rotationSpring, P(-44)));
  let i = le(se(e, t).point, r.start, r.end),
    a = Math.sin(Math.min(1, i) * Math.PI);
  return (
    (e.stretchSpring.target = 1),
    (e.scootStretchSpring.target = ae(i)),
    (e.scootRotationSpring.target = r.rotationTarget * a),
    i >= 0.999 && Math.abs(r.progressSpring.velocity) < 0.01 && ce(e, r.end)
      ? (w(e, r.end),
        A(e.rotationSpring, P(-44)),
        (e.rotation = e.rotationSpring.value),
        E(e),
        A(e.stretchSpring, 1),
        (e.motion = null),
        (e.thinkStartedAt = n),
        !0)
      : !1
  );
}
function te(e) {
  return (
    e.motion != null ||
    e.thinkStartedAt != null ||
    !y(e.positionXSpring) ||
    !y(e.positionYSpring) ||
    !y(e.rotationSpring) ||
    !y(e.scootAxisSpring) ||
    !y(e.scootRotationSpring) ||
    !y(e.scootStretchSpring) ||
    !y(e.stretchSpring) ||
    !y(e.visibilitySpring)
  );
}
function y(e) {
  return e.value === e.target && M(e);
}
function b(e, t) {
  let n = re(t, I());
  x(e.cursor, {
    point: t.point,
    rotation: n,
    scootAxisRotation: t.scootAxisRotation,
    scootRotation: t.scootRotationSpring.value,
    scootStretch: t.scootStretchSpring.value,
    stretch: t.stretchSpring.value,
    visibility: t.visibilitySpring.value,
  });
}
function x(e, t) {
  let n = S(t);
  ((e.style.transform = n.transform),
    (e.style.opacity = `${n.opacity}`),
    (e.style.filter = n.filter));
}
function S({
  point: e,
  rotation: t,
  scootAxisRotation: n,
  scootRotation: i,
  scootStretch: a,
  stretch: o,
  visibility: s,
}) {
  let c = r(s, 0, 1),
    l = N(me, 1, c),
    u = N(K, 0, c),
    d = r(a, Y, 1),
    f = [`translate3d(${F(e.x - R)}px, ${F(e.y - R)}px, 0)`];
  return (
    (Math.abs(O(0, n)) > 0.001 || Math.abs(d - 1) > 0.001) &&
      f.push(`rotate(${F(n)}deg)`, `scale(1, ${F(d)})`, `rotate(${F(-n)}deg)`),
    f.push(`rotate(${F(P(t + i))}deg)`, `scale(${F(o * l)}, ${F(l)})`),
    { filter: `blur(${F(u)}px)`, opacity: F(c), transform: f.join(` `) }
  );
}
function ne({ cursorX: e, cursorY: t, viewportHeight: n, viewportWidth: i }) {
  return { x: r(e ?? Math.round(i * ye), 0, i), y: r(t ?? Math.round(n * be), 0, n) };
}
function re(e, t) {
  if (e.thinkStartedAt == null) return e.rotation;
  let n = (t - e.thinkStartedAt) / 1e3 - he;
  if (n < 0) return e.rotation;
  let r = Math.min(1, n / ge),
    i = Math.sin(r * Math.PI),
    a = Math.sin((n / _e) * Math.PI * 2) * i;
  return r >= 1 ? ((e.thinkStartedAt = null), e.rotation) : e.rotation + a * ve;
}
function ie(e) {
  return r(1 - e / 5500, 0.65, 1);
}
function ae(e) {
  let t = Math.sin(r(e, 0, 1) * Math.PI);
  return N(1, N(1, Y, t), we);
}
function oe(e) {
  return r(e * 0.18, 0.035, 0.12);
}
function C(e, t, n) {
  ((e.positionXSpring.response = t),
    (e.positionYSpring.response = t),
    (e.positionXSpring.dampingFraction = n),
    (e.positionYSpring.dampingFraction = n));
}
function se(e, n) {
  let r = e.point;
  (j(e.positionXSpring, n),
    j(e.positionYSpring, n),
    j(e.rotationSpring, n),
    j(e.scootAxisSpring, n));
  let i = { x: e.positionXSpring.value, y: e.positionYSpring.value },
    a = t(r, i) / Math.max(n, 1 / 240);
  return (
    (e.point = i),
    (e.rotation = e.rotationSpring.value),
    (e.scootAxisRotation = e.scootAxisSpring.value),
    { point: i, speed: a }
  );
}
function ce(e, n) {
  return (
    t(e.point, n) <= xe &&
    Math.abs(e.positionXSpring.velocity) <= J &&
    Math.abs(e.positionYSpring.velocity) <= J
  );
}
function w(e, t) {
  ((e.point = t), A(e.positionXSpring, t.x), A(e.positionYSpring, t.y));
}
function T(e, t) {
  ((e.motion = null),
    w(e, t),
    A(e.rotationSpring, P(-44)),
    (e.rotation = e.rotationSpring.value),
    E(e),
    A(e.stretchSpring, 1));
}
function E(e) {
  (A(e.scootAxisSpring, 0),
    A(e.scootRotationSpring, 0),
    A(e.scootStretchSpring, 1),
    (e.scootAxisRotation = 0));
}
function le(e, t, n) {
  let i = { x: n.x - t.x, y: n.y - t.y },
    a = i.x * i.x + i.y * i.y;
  return a < 0.001 ? 1 : r(((e.x - t.x) * i.x + (e.y - t.y) * i.y) / a, 0, 1);
}
function D(e, t) {
  e.target = e.value + O(e.value, t);
}
function O(e, t) {
  let n = t - e;
  for (; n > 180;) n -= 360;
  for (; n < -180;) n += 360;
  return n;
}
function ue(e) {
  let t = Math.sqrt(e.x * e.x + e.y * e.y);
  return t < 0.001 ? { x: 1, y: 0 } : { x: e.x / t, y: e.y / t };
}
function k(e, t, n) {
  return {
    dampingFraction: n.dampingFraction,
    force: 0,
    response: n.response,
    simulationTime: 0,
    scriptTime: 0,
    target: t,
    value: e,
    velocity: 0,
  };
}
function A(e, t) {
  ((e.force = 0),
    (e.simulationTime = 0),
    (e.scriptTime = 0),
    (e.target = t),
    (e.value = t),
    (e.velocity = 0));
}
function j(e, t) {
  let n = Math.max(0.001, e.response),
    r = 1 / (2 * X ** 2),
    i = Math.min((Math.PI * 2) ** 2 / n ** 2, r),
    a = Math.sqrt(i) * 2 * e.dampingFraction;
  for (
    e.scriptTime += Math.max(0, t),
      e.scriptTime - e.simulationTime > Te && (e.simulationTime = e.scriptTime - q);
    e.simulationTime < e.scriptTime;
  )
    (de(e, i, a), (e.simulationTime += X));
  M(e) && (e.value = e.target);
}
function de(e, t, n) {
  let r = X / 2,
    i = e.velocity + e.force * r;
  ((e.value += i * X),
    (e.force = i * -n + (e.target - e.value) * t),
    (e.velocity = i + e.force * r));
}
function M(e) {
  if (Math.max(e.velocity * e.velocity, e.force * e.force) > Z * Z) return !1;
  let t = e.target * 0.01,
    n = e.target - e.value;
  return t === 0 || n * n <= t * t;
}
function N(e, t, n) {
  return e + (t - e) * n;
}
function P(e) {
  let t = e % 360;
  return t < 0 ? t + 360 : t;
}
function F(e) {
  return Math.round(e * 1e3) / 1e3;
}
function I() {
  return typeof performance > `u` ? Date.now() : performance.now();
}
function fe(e) {
  return typeof window < `u` && window.requestAnimationFrame != null
    ? window.requestAnimationFrame(e)
    : typeof window < `u`
      ? window.setTimeout(() => e(I()), q * 1e3)
      : (e(I()), 0);
}
function pe(e) {
  if (typeof window < `u` && window.cancelAnimationFrame != null) {
    window.cancelAnimationFrame(e);
    return;
  }
  typeof window < `u` && window.clearTimeout(e);
}
var L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  me,
  he,
  ge,
  _e,
  ve,
  ye,
  be,
  q,
  xe,
  J,
  Se,
  Ce,
  we,
  Y,
  X,
  Te,
  Z,
  Ee,
  De,
  Oe,
  Q,
  $,
  ke,
  Ae,
  je = e(() => {
    (o(),
      (L = 24),
      (R = L / 2),
      (z = 23),
      (B = 24),
      (V = 12),
      (H = -2.5),
      (U = 44),
      (W = `--browser-agent-cursor-glow-color`),
      (G = `drop-shadow(0 0 6px color-mix(in srgb, var(${W}) 90%, transparent)) drop-shadow(0 0 15px color-mix(in srgb, var(${W}) 48%, transparent))`),
      (K = 5),
      (me = 0.4),
      (he = 0),
      (ge = 1.41),
      (_e = 0.66),
      (ve = 12.5),
      (ye = 0.58),
      (be = 0.55),
      (q = 1 / 60),
      (xe = 0.85),
      (J = 12),
      (Se = 196),
      (Ce = 70),
      (we = 0.15),
      (Y = 0),
      (X = 1 / 240),
      (Te = 1),
      (Z = 0.001 * 60),
      (Ee = { dampingFraction: 0.85, response: 0.2 }),
      (De = { dampingFraction: 0.86, response: 0.42 }),
      (Oe = { dampingFraction: 0.94, response: 0.19 }),
      (Q = { dampingFraction: 0.9, response: 0.19 }),
      ($ = { dampingFraction: 0.9, response: 0.12 }),
      (ke = { dampingFraction: 0.82, response: 0.055 }),
      (Ae = { dampingFraction: 0.86, response: 0.12 }));
  }),
  Me = e(() => {
    je();
  }),
  Ne,
  Pe = e(() => {
    Ne = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAwCAYAAABuZUjcAAAG+klEQVR4Ae1ZW2xUVRS982qnj+lzSh9UrLWosVFq+TAkRmpi0URJSBogqRggavyF1Cj6Q0P94A+iURJDQrH6Q2OxIF/EEE0a0hqBEBKRQihSIYHQxwzTTtuZua51e/Z4GeZxh85MP2AnJ/d1HuvsvfY++5yraU/kiTzeYtN1PVq6u7vtvPK9fNOWSZzxXhIQhFfjecuWLfa7d+/a+vr6GvB+bPPmzXpzc7O+WHWxLu+15RTRLG7tbW1tzps3b64OhUKDeD+pK8Hzb4FA4MNr166tZh2pLxaRCedaqD4Ccfl8vo/MgOOJTOLcuXNVaCOTiFIpJ3RSgxigL168+EIq0DEyOT8///29e/fa165d6wKdHCwm8FKyAtpG0zc0NLjn5uZ+EETXr1/X8d7gNL7pu3btMt4lkkgkMsZJTE1NvclJoJ2DljA5d2aBs2M4XZ7X6/Vg8CkBsmnTJgN0bGlpadF7e3tTTgJK6IE/PIc2hiW0RatmzAI21an75MmTa8yDxwMdW2gRTmJyMjG7Yp1aJhFDpfQmw8bsDLdFe/bsaTIPSHpYAS9lx44d+vHjx/VkIpMYGhpagTbGJOJQKfUkVANXdXV1Ea7V6PSsDIIO0wIuhRPmJM6cOZNsDpOgUp84tab8wWQFTU/mF6JxAi8uLl5x9erVfdIzB34U4LGTSNepJSppyTSvKjjq6+sLcPVu27btAZ5LVMlEserUpJKyQuJoxA+cYVNTUz4eywsKCp7CAjS8VLqkKqmcemZm5hNGOpP2HwIe5XlFRUVJYWFh3YULFz6LEhEdZwO4ZsGpYZlXCV5bDKPxtU6e19XVFYLnVZ2dnS3hcHg6G3TRUviDmUagzLeKwk7ReuwMCC4CbYedTucCZj8Bb/9VPmIh0nIhY2Nj2s6dO6PPbrf7nWAw6ATfJRONKzblEJ6ioqIaLEbvmelSVlaWM62LIOb/g3flTEVUEvcwZ8j1xsbGCG7DmF0YTnEWHu7jN4DWEBG0XAgsH70HXX0ej8cBSyQPixJdALSM0eXWrVu9MvtMxPRUhb5k5jjo2g/gXvoevjsSAtcWA76zqqqqGNfqU6dOdWaTLuyPYA8cOPBQbGdw2L9//2uoV4niVsATat7QOj25pKSkAs7xDJblcemMK+BSwcpKSgsmS8xGRkY+p9VpfXI8ocZFlBPkl5eXl6JhPfj11VLpkkir8QTL/h+HDh3qyM/Pf5ZWR/GooGFLCVxli8XMXXp6etrMHadLlyNHjiQFisjhu3Hjxi9QSveGDRteR5tmgobSVoq2VRqcHLiunJQNFF0apqenR2SgdFIAajqeTExM/Hnp0qXvjh49+rHL5WpF3ZdRXkRpwnhP41pD0HRKpcQoaHsi4Az0PIKorKwMOxwOhsYFRJfT8n39+vWaVdm+fXv03u/3j0Kr+9rb299AavFBa2vr1/j+u91u9wGsH1WmsX748/Ly/NiJBUCZYG1t7QIXRkuD6WqTK5sL0oUpgFljVlMAM6cHBwe7AOol0OB5xd9VzIvYP0JeJX2K0YyBQVJbLU52mEzjHJQLQQR0odYXBgYGJqGxEaljXiQSCdoaReTw4cND0G4A5T4ila+0tNQPTd+HlgOwbgARJghLB9etWze/cePG8LFjx6jpiOCxJPr/xxXGBhrXuvPnz38q2rOSMTLjE6GPKC3XULPctHCho2Zj96D6Uk8DVAekSyFXr46OjlfSyRjN27bLly9/iXcroWUj7xCw+oNnL5kR0ToH4oAIT6vu3LkzIGAOHjyYFLhZED3eZbqs9rVGTNazeVzHmE5zki5wpFqrGaM5DHLlZUgVbVuKyRmQ6AaDng8AjVboYl50YKWfuJjgfQmKsZtZCo/tFuvpCFE6NxiIKiEk9Qu3b9/+WT7u3bs3biNz1Lly5crp2dnZEG7DmqJQWpHiUUTx0NA6Yyw3GOaMkRJ7aMSdvFm2bt26Bu+9sgXTckATAW84qRqYdGnADvwvAcZFhmeMcghkXnR4WiAZnjpFsGrpjADnxa5228wYV544ceJ93YLAudtgpWpay1KGlwXw0RQApYpOOjo6+k0iwMz4hoeHv2DCxEQNbWitnESTWDFOu6h1mh33dVgJV+/evfttOOsgHPdvgoXz/guq/NjV1fUW6jSh1KB4SBPZ7GYCSNptoHUHokQessV8RJoChMZCKDgP535OpKc2FS1CeJ7DdRZznEEJgv8hrKThTEQTp5a+GGcv0O4CH+Cg3K2EwXkXKMH+qFEdWmfomwPgeayWc9hBhWCFcNZDYAqxmXZIbjodkybFYy+vkp5qixtcmVDGuP3IHcmqBw0avwrBXzv4bWMZHx+XJT/Mhau/v5/P1jYCuRLd9NcZjw7572n657lsf5/TlZyA/Q9N3TljZhaAsAAAAABJRU5ErkJggg==`;
  });
export { c as a, je as i, Pe as n, Me as r, Ne as t };
//# sourceMappingURL=cursor-chat-34408bd74625.js.map
