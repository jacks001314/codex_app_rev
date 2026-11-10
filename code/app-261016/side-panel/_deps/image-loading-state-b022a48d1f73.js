import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AB as t,
  FBt as n,
  LNt as r,
  MNt as i,
  NNt as a,
  PBt as o,
  Uz as s,
  Wz as c,
  XOt as l,
  kB as u,
  n6 as d,
  okt as f,
  t6 as p,
} from "./app-shared-2feb3d4c6fcc.js";
var m, h, g, _;
function v() {
  return (v = e(() => {
    ((m = `_dots_1w079_1`),
      (h = `_reducedMotion_1w079_18`),
      (g = `_overImage_1w079_22`),
      (_ = { dots: m, "dot-field-opacity": `_dot-field-opacity_1w079_35`, reducedMotion: h, overImage: g }));
  }))();
}
function y(e) {
  let t = (0, D.c)(18),
    { ariaLabel: n, background: r, isAnimating: a, presentation: o, previewSrc: s } = e,
    c = r === void 0 ? `surface` : r,
    l = a === void 0 || a,
    u = o === void 0 ? `default` : o,
    d = f(),
    p = u;
  p === `single` ? (p = `playground`) : p === `fill` && (p = `default`);
  let m;
  t[0] !== n || t[1] !== d
    ? ((m =
        n ??
        d.formatMessage({
          id: `codex.chatGptConversation.imageGeneration.loadingLabel`,
          defaultMessage: `Generating image...`,
          description: `Aria label for the image generation loading placeholder`,
        })),
      (t[0] = n),
      (t[1] = d),
      (t[2] = m))
    : (m = t[2]);
  let h = s == null ? `dark:text-white/70 text-secondary` : `bg-surface-secondary text-media-foreground`,
    g =
      s == null &&
      c === `surface` &&
      (u === `single` ? `bg-surface-secondary` : `dark:bg-primary-ghost-hover bg-primary-soft-active`),
    _;
  t[3] !== u || t[4] !== h || t[5] !== g
    ? ((_ = i(
        `overflow-clip`,
        h,
        g,
        u === `fill`
          ? `absolute inset-0 size-full`
          : [
              `relative aspect-square`,
              u === `thumbnail` ? `rounded-lg` : `rounded-2xl`,
              u === `single` ? `size-[min(100cqw,100cqh)]` : `w-full max-w-[400px]`,
            ],
      )),
      (t[3] = u),
      (t[4] = h),
      (t[5] = g),
      (t[6] = _))
    : (_ = t[6]);
  let v;
  t[7] === s
    ? (v = t[8])
    : ((v =
        s == null
          ? null
          : (0, k.jsx)(`img`, {
              alt: ``,
              className: `pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover opacity-70 blur-3xl`,
              src: s,
              referrerPolicy: `no-referrer`,
            })),
      (t[7] = s),
      (t[8] = v));
  let y = s != null,
    x;
  t[9] !== p || t[10] !== l || t[11] !== y
    ? ((x = (0, k.jsx)(b, { isAnimating: l, overImage: y, presentation: p })),
      (t[9] = p),
      (t[10] = l),
      (t[11] = y),
      (t[12] = x))
    : (x = t[12]);
  let S;
  return (
    t[13] !== x || t[14] !== m || t[15] !== _ || t[16] !== v
      ? ((S = (0, k.jsxs)(`div`, { "aria-busy": !0, "aria-label": m, className: _, children: [v, x] })),
        (t[13] = x),
        (t[14] = m),
        (t[15] = _),
        (t[16] = v),
        (t[17] = S))
      : (S = t[17]),
    S
  );
}
function b(e) {
  let n = (0, D.c)(17),
    { isAnimating: r, overImage: a, presentation: o } = e,
    s = c(),
    l = t(),
    u = (0, O.useRef)(null),
    f = (0, O.useRef)(null),
    p;
  n[0] !== r || n[1] !== l || n[2] !== o || n[3] !== s
    ? ((p = () => {
        if (!r) return;
        let e = u.current,
          t = f.current,
          n = t?.getContext(`2d`);
        if (e == null || t == null || n == null) return;
        let i = Math.PI * 2,
          a = getComputedStyle(e).color || (l ? `white` : `black`),
          c = (e, t) => e + (s ? 0.5 : Math.random()) * (t - e),
          p = (e) => e * z * c(1, 1.35),
          m = {
            durations: {
              offsetX1: p(B.offsetX1),
              offsetY1: p(B.offsetY1),
              offsetX2: p(B.offsetX2),
              offsetY2: p(B.offsetY2),
              fieldSize1: p(B.fieldSize1),
              fieldSize2: p(B.fieldSize2),
            },
            phases: {
              offsetX1: c(0, 1),
              offsetY1: c(0, 1),
              offsetX2: c(0, 1),
              offsetY2: c(0, 1),
              fieldSize1: c(0, 1),
              fieldSize2: c(0, 1),
            },
            bounds: {
              x1Start: c(0.1, 0.32),
              x1End: c(0.68, 0.9),
              y1Start: c(0.1, 0.32),
              y1End: c(0.68, 0.9),
              x2Start: c(0.68, 0.9),
              x2End: c(0.1, 0.32),
              y2Start: c(0.68, 0.9),
              y2End: c(0.1, 0.32),
            },
            fieldSizeRange: {
              firstStart: c(0.42, 0.52),
              firstEnd: c(0.62, 0.75),
              secondStart: c(0.5, 0.62),
              secondEnd: c(0.74, 0.9),
            },
          },
          h = null,
          g = 0,
          _ = null,
          v = !0,
          y = null,
          b = !1,
          D = () => {
            let n = e.getBoundingClientRect(),
              r = Math.max(0, Math.floor(n.width)),
              i = Math.max(0, Math.floor(n.height));
            if (r === 0 || i === 0) {
              ((_ = null), (v = !1));
              return;
            }
            let a = Math.max(1, window.devicePixelRatio || 1),
              s = Math.floor(r * a),
              c = Math.floor(i * a);
            (t.width !== s || t.height !== c) && ((t.width = s), (t.height = c));
            let l = o === "default" ? Math.max(1, A / a) : N[o].spacing,
              u = Math.max(1, Math.floor(r / l)),
              d = Math.max(1, Math.floor(i / l)),
              f = (r - (u - 1) * l) * 0.5,
              p = (i - (d - 1) * l) * 0.5,
              m = new Float32Array(u),
              h = new Float32Array(d),
              g = new Float32Array(u),
              y = new Float32Array(d);
            for (let e = 0; e < u; e += 1) ((m[e] = f + e * l), (g[e] = u === 1 ? 0.5 : e / (u - 1)));
            for (let e = 0; e < d; e += 1) ((h[e] = p + e * l), (y[e] = d === 1 ? 0.5 : e / (d - 1)));
            ((_ = {
              width: r,
              height: i,
              dpr: a,
              spacing: l,
              xPositions: m,
              yPositions: h,
              xNormals: g,
              yNormals: y,
            }),
              (v = !1));
          },
          O = (e) => {
            if (!s && g !== 0 && e - g < 33.333333333333336) {
              h = requestAnimationFrame(O);
              return;
            }
            if (((g = e), (y ??= e), (v || _ == null) && D(), _ == null)) {
              h = null;
              return;
            }
            let t = s ? 0 : e - y,
              r = (e, n) => C(t / e + n),
              c = E(m.bounds.x1Start, m.bounds.x1End, T(r(m.durations.offsetX1, m.phases.offsetX1))),
              l = E(m.bounds.y1Start, m.bounds.y1End, w(r(m.durations.offsetY1, m.phases.offsetY1))),
              u = E(m.bounds.x2Start, m.bounds.x2End, T(r(m.durations.offsetX2, m.phases.offsetX2))),
              d = E(m.bounds.y2Start, m.bounds.y2End, w(r(m.durations.offsetY2, m.phases.offsetY2))),
              f =
                F *
                E(
                  m.fieldSizeRange.firstStart,
                  m.fieldSizeRange.firstEnd,
                  w(r(m.durations.fieldSize1, m.phases.fieldSize1)),
                ),
              p =
                F *
                E(
                  m.fieldSizeRange.secondStart,
                  m.fieldSizeRange.secondEnd,
                  w(r(m.durations.fieldSize2, m.phases.fieldSize2)),
                );
            (n.save(),
              n.setTransform(_.dpr, 0, 0, _.dpr, 0, 0),
              n.clearRect(0, 0, _.width, _.height),
              (n.fillStyle = a));
            let b = o === "default" ? Math.max(M, _.spacing * 0.5 * j) : N[o].radius;
            for (let e = 0; e < _.yPositions.length; e += 1) {
              let t = _.yPositions[e],
                r = _.yNormals[e];
              for (let e = 0; e < _.xPositions.length; e += 1) {
                let a = _.xPositions[e],
                  o = _.xNormals[e],
                  s =
                    x(
                      (1 - S(0, f, Math.hypot(o - c, r - l))) * I +
                        (1 - S(0, p, Math.hypot(o - u, r - d))) * L,
                    ) ** +R;
                s <= P ||
                  ((n.globalAlpha = s), n.beginPath(), n.moveTo(a + b, t), n.arc(a, t, b, 0, i), n.fill());
              }
            }
            (n.restore(), (h = s ? null : requestAnimationFrame(O)));
          },
          k = new ResizeObserver(() => {
            ((v = !0), b && h == null && (h = requestAnimationFrame(O)));
          });
        k.observe(e);
        let V = d(e, (e) => {
          ((b = e),
            b ? (h ??= requestAnimationFrame(O)) : h != null && (cancelAnimationFrame(h), (h = null)));
        });
        return () => {
          (V?.(), h != null && cancelAnimationFrame(h), k.disconnect());
        };
      }),
      (n[0] = r),
      (n[1] = l),
      (n[2] = o),
      (n[3] = s),
      (n[4] = p))
    : (p = n[4]);
  let m;
  (n[5] !== r || n[6] !== l || n[7] !== a || n[8] !== o || n[9] !== s
    ? ((m = [r, l, a, o, s]), (n[5] = r), (n[6] = l), (n[7] = a), (n[8] = o), (n[9] = s), (n[10] = m))
    : (m = n[10]),
    (0, O.useEffect)(p, m));
  let h = a && _.overImage,
    g = (!r || s) && _.reducedMotion,
    v;
  n[11] !== h || n[12] !== g ? ((v = i(_.dots, h, g)), (n[11] = h), (n[12] = g), (n[13] = v)) : (v = n[13]);
  let y;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, k.jsx)(`canvas`, { ref: f, "aria-hidden": !0, className: `block h-full w-full` })),
      (n[14] = y))
    : (y = n[14]);
  let b;
  return (
    n[15] === v
      ? (b = n[16])
      : ((b = (0, k.jsx)(`div`, { ref: u, className: v, children: y })), (n[15] = v), (n[16] = b)),
    b
  );
}
function x(e) {
  return Math.min(1, Math.max(0, e));
}
function S(e, t, n) {
  let r = x((n - e) / (t - e));
  return r * r * (3 - 2 * r);
}
function C(e) {
  let t = e % 1;
  return t <= 0.5 ? t * 2 : 2 - t * 2;
}
function w(e) {
  return e * e * (3 - 2 * e);
}
function T(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2;
}
function E(e, t, n) {
  return e + (t - e) * n;
}
var D, O, k, A, j, M, N, P, F, I, L, R, z, B;
function V() {
  return (V = e(() => {
    ((D = o()),
      a(),
      (O = n()),
      l(),
      p(),
      s(),
      u(),
      v(),
      (k = r()),
      (A = 12),
      (j = 0.16),
      (M = 0.55),
      (N = { playground: { spacing: 14, radius: 1.5 }, thumbnail: { spacing: 6, radius: 0.75 } }),
      (P = 0.03),
      (F = 0.78),
      (I = 1.2),
      (L = 0.82),
      (R = 1.18),
      (z = 1.2),
      (B = {
        offsetX1: 4500,
        offsetY1: 6330,
        offsetX2: 5600,
        offsetY2: 5750,
        fieldSize1: 3600,
        fieldSize2: 2400,
      }));
  }))();
}
export { V as n, y as t };
//# sourceMappingURL=image-loading-state-b022a48d1f73.js.map
