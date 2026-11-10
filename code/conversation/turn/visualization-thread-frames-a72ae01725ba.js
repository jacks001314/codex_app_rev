import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  Amn as r,
  B6t as i,
  F3t as a,
  HTt as o,
  Jr as s,
  KL as c,
  Kr as l,
  N3t as u,
  O3t as d,
  Xr as f,
  Yr as p,
  Zr as m,
  _7t as h,
  _wt as g,
  a3t as _,
  hmn as v,
  kmn as y,
  o3t as b,
  pmn as x,
  qL as S,
  qr as C,
  rTt as w,
  snn as T,
  vwt as E,
  x7t as D,
} from "./app-initial-f094ef01c64d.js";
import { CC as O, SC as k, _C as A, vC as j } from "./app-primary-4c40d73a1074.js";
function M(e) {
  let t = (0, R.c)(11),
    { activeThreadId: r } = e,
    i = n(_),
    c = a(f),
    l,
    u;
  (t[0] !== r || t[1] !== i
    ? ((l = () => {
        s(i, `main`, r);
      }),
      (u = [r, i]),
      (t[0] = r),
      (t[1] = i),
      (t[2] = l),
      (t[3] = u))
    : ((l = t[2]), (u = t[3])),
    (0, z.useLayoutEffect)(l, u));
  let d, h;
  (t[4] === i
    ? ((d = t[5]), (h = t[6]))
    : ((d = () =>
        i.watch((e) => {
          let { get: t } = e,
            n = new Set();
          for (let e of t(f)) {
            let r = t(p, e);
            if (r == null || r.anchor != null || t(m, e)) continue;
            let i = t(o, T(r.threadId));
            (i === `needs_resume` || i == null) && n.add(r.threadId);
          }
          for (let e of n) C(i, e);
        })),
      (h = [i]),
      (t[4] = i),
      (t[5] = d),
      (t[6] = h)),
    (0, z.useLayoutEffect)(d, h));
  let g;
  t[7] === c ? (g = t[8]) : ((g = c.map(N)), (t[7] = c), (t[8] = g));
  let v;
  return (
    t[9] === g
      ? (v = t[10])
      : ((v = (0, V.jsx)(V.Fragment, { children: g })), (t[9] = g), (t[10] = v)),
    v
  );
}
function N(e) {
  return (0, V.jsx)(P, { frameId: e }, e);
}
function P(e) {
  let t = (0, R.c)(2),
    { frameId: n } = e,
    r = u(p, n);
  if (r == null) return null;
  let i;
  return (t[0] === r ? (i = t[1]) : ((i = (0, V.jsx)(F, { frame: r })), (t[0] = r), (t[1] = i)), i);
}
function F(e) {
  let t = (0, R.c)(20),
    { frame: n } = e,
    r = u(m, n.sandboxId),
    i;
  t[0] === n.sandboxId
    ? (i = t[1])
    : ((i = L.bind(null, n.sandboxId)), (t[0] = n.sandboxId), (t[1] = i));
  let [a] = (0, z.useState)(i),
    o,
    s;
  (t[2] !== n.anchor || t[3] !== a
    ? ((o = () => {
        let e = n.anchor;
        if (e == null) {
          a.remove();
          return;
        }
        return (
          a.parentElement !== e && e.appendChild(a),
          () => {
            a.parentElement === e && a.remove();
          }
        );
      }),
      (s = [n.anchor, a]),
      (t[2] = n.anchor),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s))
    : ((o = t[4]), (s = t[5])),
    (0, z.useLayoutEffect)(o, s));
  let l;
  t[6] !== n.fragment || t[7] !== n.sandboxId || t[8] !== n.variant
    ? ((l =
        n.variant === `live` && n.fragment != null
          ? `${n.sandboxId}-${g(n.fragment)}`
          : `${n.sandboxId}-${n.fragment == null ? `unavailable` : `loaded`}`),
      (t[6] = n.fragment),
      (t[7] = n.sandboxId),
      (t[8] = n.variant),
      (t[9] = l))
    : (l = t[9]);
  let d = r && n.isActive && n.anchor != null,
    f;
  t[10] !== n || t[11] !== l || t[12] !== d
    ? ((f = (0, V.jsx)(A, { ...n, isActive: d, scheme: h }, l)),
      (t[10] = n),
      (t[11] = l),
      (t[12] = d),
      (t[13] = f))
    : (f = t[13]);
  let p;
  t[14] !== n.fragment || t[15] !== f
    ? ((p = (0, V.jsx)(c, {
        fallback: I,
        name: `VisualizationSandbox`,
        resetKey: n.fragment,
        children: f,
      })),
      (t[14] = n.fragment),
      (t[15] = f),
      (t[16] = p))
    : (p = t[16]);
  let _;
  return (
    t[17] !== a || t[18] !== p
      ? ((_ = (0, B.createPortal)(p, a)), (t[17] = a), (t[18] = p), (t[19] = _))
      : (_ = t[19]),
    _
  );
}
function I(e) {
  return (0, V.jsx)(k, { onRetry: () => e.resetError() });
}
function L(e) {
  let t = document.createElement(`div`);
  return ((t.className = `flow-root`), (t.dataset.visualizationThreadFrame = e), t);
}
var R, z, B, V;
e(() => {
  ((R = y()),
    d(),
    i(),
    D(),
    (z = t(r(), 1)),
    (B = t(x(), 1)),
    w(),
    S(),
    O(),
    b(),
    E(),
    j(),
    l(),
    (V = v()));
})();
export { M as VisualizationThreadFrames };
//# sourceMappingURL=visualization-thread-frames-a72ae01725ba.js.map
