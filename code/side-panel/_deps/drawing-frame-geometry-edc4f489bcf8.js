import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
function t(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function n(e, t, n) {
  let r = Math.max(e.k, 2 ** -52);
  return { x: (t - e.x) / r, y: (n - e.y) / r };
}
function r(e, t, n) {
  return { x: t * e.k + e.x, y: n * e.k + e.y };
}
function i(e, r, i, a, o, s) {
  let c = n(e, r, i),
    l = t(a, o, s);
  return { k: l, x: r - c.x * l, y: i - c.y * l };
}
function a(e, t, n) {
  let r = Math.max(0, n.width),
    i = Math.max(0, n.height),
    a = Math.max(0, t.width),
    o = Math.max(0, t.height),
    s = Math.min(0, a - r * e.k),
    c = Math.min(0, o - i * e.k);
  return { ...e, x: Math.min(0, Math.max(s, e.x)), y: Math.min(0, Math.max(c, e.y)) };
}
function o(e) {
  return { left: -e.x, top: -e.y };
}
function s(e) {
  let t = Math.max(e.k, 2 ** -52);
  return { left: -e.x / t, top: -e.y / t };
}
function c(e) {
  let t = e.values(),
    n = t.next().value,
    r = t.next().value;
  if (!n || !r) return null;
  let i = r.x - n.x,
    a = r.y - n.y;
  return {
    centerX: (n.x + r.x) / 2,
    centerY: (n.y + r.y) / 2,
    distance: Math.max(l, Math.hypot(i, a)),
  };
}
var l,
  u = e(() => {
    l = 1;
  });
function d(e) {
  let t = Math.max(e, 1e-4),
    n = m / t;
  return {
    visibleSize: n,
    halfVisibleSize: n / 2,
    hitRadius: Math.max(4, h / t),
    rotationBand: Math.max(6, g / t),
    rotationHandleDistance: Math.max(14, _ / t),
  };
}
function f(e) {
  return e ? (e === `nw` || e === `se` ? `nwse-resize` : `nesw-resize`) : null;
}
function p() {
  return v;
}
var m,
  h,
  g,
  _,
  v,
  y = e(() => {
    ((m = 6),
      (h = 12),
      (g = 18),
      (_ = 28),
      (v = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%232563eb' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16.75 7.25A6.75 6.75 0 1 0 18.5 12'/%3E%3Cpath d='M15.5 3.75h4.75V8.5'/%3E%3Cpath d='M16.25 4.5 20.25 8.5'/%3E%3C/g%3E%3C/svg%3E") 12 12, grab`));
  });
function b(e) {
  let t = (Number.isFinite(e ?? NaN) ? Number(e) : 0) % 360;
  return (t >= 180 && (t -= 360), t < -180 && (t += 360), t);
}
function x(e) {
  return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
}
function S(e) {
  let t = x(e),
    n = e.width / 2,
    r = e.height / 2,
    i = (b(e.rotation) * Math.PI) / 180,
    a = Math.cos(i),
    o = Math.sin(i),
    s = (e, n) => ({ x: t.x + e * a - n * o, y: t.y + e * o + n * a });
  return { nw: s(-n, -r), ne: s(n, -r), sw: s(-n, r), se: s(n, r) };
}
function C(e, t) {
  let n = x(e),
    r = (b(e.rotation) * Math.PI) / 180,
    i = Math.cos(r),
    a = Math.sin(r),
    { rotationHandleDistance: o } = d(t),
    s = -e.height / 2 - o;
  return { x: n.x + 0 * i - s * a, y: n.y + 0 * a + s * i };
}
function w(e, t) {
  let n = x(e),
    r = (-b(e.rotation) * Math.PI) / 180,
    i = Math.cos(r),
    a = Math.sin(r),
    o = t.x - n.x,
    s = t.y - n.y;
  return { x: o * i - s * a, y: o * a + s * i };
}
function T(e, t) {
  let n = w(e, t);
  return Math.abs(n.x) <= e.width / 2 && Math.abs(n.y) <= e.height / 2;
}
function E(e, t) {
  return Object.values(S(t)).every(
    (t) => t.x >= e.left && t.x <= e.left + e.width && t.y >= e.top && t.y <= e.top + e.height,
  );
}
function D(e, t, n) {
  let { hitRadius: r } = d(n),
    i = S(e);
  for (let [e, n] of Object.entries(i))
    if (Math.abs(t.x - n.x) <= r && Math.abs(t.y - n.y) <= r) return e;
  return null;
}
function O(e, t, n) {
  if (D(e, t, n) || T(e, t)) return !1;
  let r = w(e, t),
    { rotationBand: i } = d(n);
  return Math.abs(r.x) <= e.width / 2 + i && Math.abs(r.y) <= e.height / 2 + i;
}
var k = e(() => {
  y();
});
export {
  i as S,
  t as _,
  k as a,
  n as b,
  D as c,
  f as d,
  p as f,
  a as g,
  o as h,
  C as i,
  O as l,
  s as m,
  x as n,
  b as o,
  y as p,
  S as r,
  T as s,
  E as t,
  d as u,
  c as v,
  r as x,
  u as y,
};
//# sourceMappingURL=drawing-frame-geometry-edc4f489bcf8.js.map
