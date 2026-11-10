import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Fz as t,
  JR as n,
  Pz as r,
  VDt as i,
  YR as a,
  _Mt as o,
  a3 as s,
  gMt as c,
  jDt as l,
  o3 as u,
  vzt as d,
  xMt as f,
  yzt as p,
} from "./app-shared-bbfeca5e5737.js";
var m, h, g;
function _() {
  return (_ = e(() => {
    ((m = `_dots_sybo7_1`),
      (h = `_reducedMotion_sybo7_18`),
      (g = { dots: m, "dot-field-opacity": `_dot-field-opacity_sybo7_30`, reducedMotion: h }));
  }))();
}
function v(e) {
  let t = (0, E.c)(13),
    { ariaLabel: n, background: r, isAnimating: a, presentation: o } = e,
    s = r === void 0 ? `surface` : r,
    l = a === void 0 || a,
    u = o === void 0 ? `default` : o,
    d = i(),
    f = u;
  f === `single` ? (f = `playground`) : f === `fill` && (f = `default`);
  let p;
  t[0] !== n || t[1] !== d
    ? ((p =
        n ??
        d.formatMessage({
          id: `codex.chatGptConversation.imageGeneration.loadingLabel`,
          defaultMessage: `Generating image...`,
          description: `Aria label for the image generation loading placeholder`,
        })),
      (t[0] = n),
      (t[1] = d),
      (t[2] = p))
    : (p = t[2]);
  let m = s === `surface` && `dark:bg-primary-ghost-hover bg-primary-soft-active`,
    h;
  t[3] !== u || t[4] !== m
    ? ((h = c(
        `dark:text-white/70 overflow-clip text-secondary`,
        m,
        u === `fill`
          ? `absolute inset-0 size-full`
          : [
              `relative aspect-square`,
              u === `thumbnail` ? `rounded-lg` : `rounded-2xl`,
              u === `single` ? `size-[min(100cqw,100cqh)]` : `w-full max-w-[400px]`,
            ],
      )),
      (t[3] = u),
      (t[4] = m),
      (t[5] = h))
    : (h = t[5]);
  let g;
  t[6] !== f || t[7] !== l
    ? ((g = (0, O.jsx)(y, { isAnimating: l, presentation: f })), (t[6] = f), (t[7] = l), (t[8] = g))
    : (g = t[8]);
  let _;
  return (
    t[9] !== p || t[10] !== h || t[11] !== g
      ? ((_ = (0, O.jsx)(`div`, { "aria-busy": !0, "aria-label": p, className: h, children: g })),
        (t[9] = p),
        (t[10] = h),
        (t[11] = g),
        (t[12] = _))
      : (_ = t[12]),
    _
  );
}
function y(e) {
  let n = (0, E.c)(11),
    { isAnimating: r, presentation: i } = e,
    o = a(),
    s = t(),
    l = (0, D.useRef)(null),
    d = (0, D.useRef)(null),
    f,
    p;
  (n[0] !== r || n[1] !== s || n[2] !== i || n[3] !== o
    ? ((f = () => {
        if (!r) return;
        let e = l.current,
          t = d.current,
          n = t?.getContext(`2d`);
        if (e == null || t == null || n == null) return;
        let a = Math.PI * 2,
          c = getComputedStyle(e).color || (s ? `white` : `black`),
          f = (e, t) => e + (o ? 0.5 : Math.random()) * (t - e),
          p = (e) => e * R * f(1, 1.35),
          m = {
            durations: {
              offsetX1: p(z.offsetX1),
              offsetY1: p(z.offsetY1),
              offsetX2: p(z.offsetX2),
              offsetY2: p(z.offsetY2),
              fieldSize1: p(z.fieldSize1),
              fieldSize2: p(z.fieldSize2),
            },
            phases: {
              offsetX1: f(0, 1),
              offsetY1: f(0, 1),
              offsetX2: f(0, 1),
              offsetY2: f(0, 1),
              fieldSize1: f(0, 1),
              fieldSize2: f(0, 1),
            },
            bounds: {
              x1Start: f(0.1, 0.32),
              x1End: f(0.68, 0.9),
              y1Start: f(0.1, 0.32),
              y1End: f(0.68, 0.9),
              x2Start: f(0.68, 0.9),
              x2End: f(0.1, 0.32),
              y2Start: f(0.68, 0.9),
              y2End: f(0.1, 0.32),
            },
            fieldSizeRange: {
              firstStart: f(0.42, 0.52),
              firstEnd: f(0.62, 0.75),
              secondStart: f(0.5, 0.62),
              secondEnd: f(0.74, 0.9),
            },
          },
          h = null,
          g = 0,
          _ = null,
          v = !0,
          y = null,
          E = !1,
          D = () => {
            let n = e.getBoundingClientRect(),
              r = Math.max(0, Math.floor(n.width)),
              a = Math.max(0, Math.floor(n.height));
            if (r === 0 || a === 0) {
              ((_ = null), (v = !1));
              return;
            }
            let o = Math.max(1, window.devicePixelRatio || 1),
              s = Math.floor(r * o),
              c = Math.floor(a * o);
            (t.width !== s || t.height !== c) && ((t.width = s), (t.height = c));
            let l = i === "default" ? Math.max(1, k / o) : M[i].spacing,
              u = Math.max(1, Math.floor(r / l)),
              d = Math.max(1, Math.floor(a / l)),
              f = (r - (u - 1) * l) * 0.5,
              p = (a - (d - 1) * l) * 0.5,
              m = new Float32Array(u),
              h = new Float32Array(d),
              g = new Float32Array(u),
              y = new Float32Array(d);
            for (let e = 0; e < u; e += 1) ((m[e] = f + e * l), (g[e] = u === 1 ? 0.5 : e / (u - 1)));
            for (let e = 0; e < d; e += 1) ((h[e] = p + e * l), (y[e] = d === 1 ? 0.5 : e / (d - 1)));
            ((_ = {
              width: r,
              height: a,
              dpr: o,
              spacing: l,
              xPositions: m,
              yPositions: h,
              xNormals: g,
              yNormals: y,
            }),
              (v = !1));
          },
          O = (e) => {
            if (!o && g !== 0 && e - g < 33.333333333333336) {
              h = requestAnimationFrame(O);
              return;
            }
            if (((g = e), (y ??= e), (v || _ == null) && D(), _ == null)) {
              h = null;
              return;
            }
            let t = o ? 0 : e - y,
              r = (e, n) => S(t / e + n),
              s = T(m.bounds.x1Start, m.bounds.x1End, w(r(m.durations.offsetX1, m.phases.offsetX1))),
              l = T(m.bounds.y1Start, m.bounds.y1End, C(r(m.durations.offsetY1, m.phases.offsetY1))),
              u = T(m.bounds.x2Start, m.bounds.x2End, w(r(m.durations.offsetX2, m.phases.offsetX2))),
              d = T(m.bounds.y2Start, m.bounds.y2End, C(r(m.durations.offsetY2, m.phases.offsetY2))),
              f =
                P *
                T(
                  m.fieldSizeRange.firstStart,
                  m.fieldSizeRange.firstEnd,
                  C(r(m.durations.fieldSize1, m.phases.fieldSize1)),
                ),
              p =
                P *
                T(
                  m.fieldSizeRange.secondStart,
                  m.fieldSizeRange.secondEnd,
                  C(r(m.durations.fieldSize2, m.phases.fieldSize2)),
                );
            (n.save(),
              n.setTransform(_.dpr, 0, 0, _.dpr, 0, 0),
              n.clearRect(0, 0, _.width, _.height),
              (n.fillStyle = c));
            let E = i === "default" ? Math.max(j, _.spacing * 0.5 * A) : M[i].radius;
            for (let e = 0; e < _.yPositions.length; e += 1) {
              let t = _.yPositions[e],
                r = _.yNormals[e];
              for (let e = 0; e < _.xPositions.length; e += 1) {
                let i = _.xPositions[e],
                  o = _.xNormals[e],
                  c =
                    b(
                      (1 - x(0, f, Math.hypot(o - s, r - l))) * F +
                        (1 - x(0, p, Math.hypot(o - u, r - d))) * I,
                    ) ** +L;
                c <= N ||
                  ((n.globalAlpha = c), n.beginPath(), n.moveTo(i + E, t), n.arc(i, t, E, 0, a), n.fill());
              }
            }
            (n.restore(), (h = o ? null : requestAnimationFrame(O)));
          },
          B = new ResizeObserver(() => {
            ((v = !0), E && h == null && (h = requestAnimationFrame(O)));
          });
        B.observe(e);
        let V = u(e, (e) => {
          ((E = e),
            E ? (h ??= requestAnimationFrame(O)) : h != null && (cancelAnimationFrame(h), (h = null)));
        });
        return () => {
          (V?.(), h != null && cancelAnimationFrame(h), B.disconnect());
        };
      }),
      (p = [r, s, i, o]),
      (n[0] = r),
      (n[1] = s),
      (n[2] = i),
      (n[3] = o),
      (n[4] = f),
      (n[5] = p))
    : ((f = n[4]), (p = n[5])),
    (0, D.useEffect)(f, p));
  let m = (!r || o) && g.reducedMotion,
    h;
  n[6] === m ? (h = n[7]) : ((h = c(g.dots, m)), (n[6] = m), (n[7] = h));
  let _;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, O.jsx)(`canvas`, { ref: d, "aria-hidden": !0, className: `block h-full w-full` })),
      (n[8] = _))
    : (_ = n[8]);
  let v;
  return (
    n[9] === h
      ? (v = n[10])
      : ((v = (0, O.jsx)(`div`, { ref: l, className: h, children: _ })), (n[9] = h), (n[10] = v)),
    v
  );
}
function b(e) {
  return Math.min(1, Math.max(0, e));
}
function x(e, t, n) {
  let r = b((n - e) / (t - e));
  return r * r * (3 - 2 * r);
}
function S(e) {
  let t = e % 1;
  return t <= 0.5 ? t * 2 : 2 - t * 2;
}
function C(e) {
  return e * e * (3 - 2 * e);
}
function w(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2;
}
function T(e, t, n) {
  return e + (t - e) * n;
}
var E, D, O, k, A, j, M, N, P, F, I, L, R, z;
function B() {
  return (B = e(() => {
    ((E = d()),
      o(),
      (D = p()),
      l(),
      s(),
      n(),
      r(),
      _(),
      (O = f()),
      (k = 12),
      (A = 0.16),
      (j = 0.55),
      (M = { playground: { spacing: 14, radius: 1.5 }, thumbnail: { spacing: 6, radius: 0.75 } }),
      (N = 0.03),
      (P = 0.78),
      (F = 1.2),
      (I = 0.82),
      (L = 1.18),
      (R = 1.2),
      (z = {
        offsetX1: 4500,
        offsetY1: 6330,
        offsetX2: 5600,
        offsetY2: 5750,
        fieldSize1: 3600,
        fieldSize2: 2400,
      }));
  }))();
}
export { B as n, v as t };
//# sourceMappingURL=image-loading-state-af1ec7ad2f7e.js.map
