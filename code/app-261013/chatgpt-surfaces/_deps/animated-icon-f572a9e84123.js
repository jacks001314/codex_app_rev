const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./animated-icon-svg-118783d1401f.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./index.es-234488e57e8f.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./lottie_light-6d958e55eef3.js",
      "./hello-32885a5730fb.js",
      "./loader-b7cf9a60c18f.js",
      "./memory-footnote-icon-aabfb86bd7e0.js",
      "./sidebar-finances-icon-60f11149b77a.js",
      "./sidebar-images-icon-515d5207fd58.js",
      "./sidebar-library-icon-a6e81a086025.js",
      "./sidebar-more-icon-d710071877e6.js",
      "./sidebar-new-chat-icon-cbd5d32d0c8e.js",
      "./sidebar-plugins-icon-8d185e42c466.js",
      "./sidebar-projects-icon-55225a1c26e6.js",
      "./sidebar-search-icon-dee5b5ecb91c.js",
      "./sidebar-tasks-icon-a5050e1add74.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as n,
  JR as r,
  YR as i,
  _Mt as a,
  fPt as o,
  gMt as s,
  pPt as c,
  uvt as l,
  vzt as u,
  xMt as d,
  yzt as f,
  z4 as p,
} from "./app-shared-bbfeca5e5737.js";
import { Cit as m, Etn as h, Ttn as g, ag as _, sg as v, wit as y } from "./app-initial-5851df3f6cb1.js";
import { g as b, h as x } from "./app-primary-fe8a450b3b04.js";
function S(e) {
  let t = getComputedStyle(e).color;
  if (!t) return null;
  let n = _(t);
  return n == null ? null : Array.from(n, (e) => e / 255);
}
function C(e, t) {
  let n = (0, D.default)(e);
  if (!t) return n;
  let r = (e) => {
      ((e.ty === `fl` || e.ty === `st`) && e?.c?.k && (e.c.k = t), Array.isArray(e.it) && e.it.forEach(r));
    },
    i = (e) => {
      (e.ty === 4 && Array.isArray(e.shapes) && e.shapes.forEach(r),
        Array.isArray(e.layers) && e.layers.forEach(i));
    };
  return (i(n), Array.isArray(n.assets) && n.assets.forEach(i), n);
}
function w(e) {
  let t = (0, E.c)(19),
    {
      className: n,
      animation: r,
      animated: a,
      loop: o,
      FallbackIcon: c,
      fallbackIcon: l,
      onComplete: u,
      onReady: d,
    } = e,
    f = a === void 0 || a,
    p = o !== void 0 && o,
    h = (0, O.useRef)(null),
    [_, v] = (0, O.useState)(),
    y = i(),
    b = A[r],
    C,
    w;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => {
        let e = h.current;
        if (!e) return;
        let t,
          n = () => {
            let n = S(e),
              r = n?.join(`,`) ?? null;
            t !== r &&
              ((t = r),
              (0, O.startTransition)(() => {
                v(n);
              }));
          };
        n();
        let r = new MutationObserver(n),
          i = { attributes: !0, attributeFilter: [`class`, `style`] };
        return (
          r.observe(document.documentElement, i),
          r.observe(e, i),
          () => {
            r.disconnect();
          }
        );
      }),
      (w = []),
      (t[0] = C),
      (t[1] = w))
    : ((C = t[0]), (w = t[1])),
    (0, O.useEffect)(C, w));
  let T = c ?? g;
  c == null && r === `automation` ? (T = m) : c == null && r === `hello` && (T = x);
  let D;
  t[2] !== T || t[3] !== l
    ? ((D = l ?? (0, k.jsx)(T, { className: `h-full w-full` })), (t[2] = T), (t[3] = l), (t[4] = D))
    : (D = t[4]);
  let j = D,
    M;
  t[5] === n
    ? (M = t[6])
    : ((M = s(`h-full w-full`, n, `flex items-center justify-center`)), (t[5] = n), (t[6] = M));
  let N;
  t[7] !== b ||
  t[8] !== f ||
  t[9] !== _ ||
  t[10] !== j ||
  t[11] !== p ||
  t[12] !== u ||
  t[13] !== d ||
  t[14] !== y
    ? ((N =
        y || !f || b == null || _ === void 0
          ? j
          : (0, k.jsx)(b, { color: _, fallback: j, loop: p, onComplete: u, onReady: d })),
      (t[7] = b),
      (t[8] = f),
      (t[9] = _),
      (t[10] = j),
      (t[11] = p),
      (t[12] = u),
      (t[13] = d),
      (t[14] = y),
      (t[15] = N))
    : (N = t[15]);
  let P;
  return (
    t[16] !== M || t[17] !== N
      ? ((P = (0, k.jsx)(`div`, { ref: h, className: M, children: N })),
        (t[16] = M),
        (t[17] = N),
        (t[18] = P))
      : (P = t[18]),
    P
  );
}
function T(e) {
  return n(
    async () => {
      let [{ default: t }, { SvgLottie: n }] = await Promise.all([
        e(),
        o(
          () => import(`./animated-icon-svg-118783d1401f.js`),
          __vite__mapDeps([0, 1, 2, 3, 4, 5]),
          import.meta.url,
        ),
      ]);
      return function ({ color: e, loop: r, onComplete: i, onReady: a }) {
        let o = (0, O.useMemo)(() => C(t, e), [e]);
        return (0, k.jsx)(n, {
          animationData: o,
          autoplay: !0,
          className: `pointer-events-none h-full w-full contain-[paint_style_layout_inline-size]`,
          loop: r,
          onComplete: i,
          onDOMLoaded: a,
        });
      };
    },
    { errorFallback: ({ fallback: e }) => e },
  );
}
var E, D, O, k, A;
function j() {
  return (j = e(() => {
    ((E = u()),
      a(),
      (D = t(l(), 1)),
      (O = f()),
      p(),
      r(),
      y(),
      h(),
      b(),
      v(),
      (k = d()),
      c(),
      (A = {
        automation: null,
        hello: T(() => o(() => import(`./hello-32885a5730fb.js`), __vite__mapDeps([6, 1]), import.meta.url)),
        loader: T(() =>
          o(() => import(`./loader-b7cf9a60c18f.js`), __vite__mapDeps([7, 1]), import.meta.url),
        ),
        memory: T(() =>
          o(() => import(`./memory-footnote-icon-aabfb86bd7e0.js`), __vite__mapDeps([8, 1]), import.meta.url),
        ),
        "sidebar-finances": T(() =>
          o(
            () => import(`./sidebar-finances-icon-60f11149b77a.js`),
            __vite__mapDeps([9, 1]),
            import.meta.url,
          ),
        ),
        "sidebar-images": T(() =>
          o(() => import(`./sidebar-images-icon-515d5207fd58.js`), __vite__mapDeps([10, 1]), import.meta.url),
        ),
        "sidebar-library": T(() =>
          o(
            () => import(`./sidebar-library-icon-a6e81a086025.js`),
            __vite__mapDeps([11, 1]),
            import.meta.url,
          ),
        ),
        "sidebar-more": T(() =>
          o(() => import(`./sidebar-more-icon-d710071877e6.js`), __vite__mapDeps([12, 1]), import.meta.url),
        ),
        "sidebar-new-chat": T(() =>
          o(
            () => import(`./sidebar-new-chat-icon-cbd5d32d0c8e.js`),
            __vite__mapDeps([13, 1]),
            import.meta.url,
          ),
        ),
        "sidebar-plugins": T(() =>
          o(
            () => import(`./sidebar-plugins-icon-8d185e42c466.js`),
            __vite__mapDeps([14, 1]),
            import.meta.url,
          ),
        ),
        "sidebar-projects": T(() =>
          o(
            () => import(`./sidebar-projects-icon-55225a1c26e6.js`),
            __vite__mapDeps([15, 1]),
            import.meta.url,
          ),
        ),
        "sidebar-search": T(() =>
          o(() => import(`./sidebar-search-icon-dee5b5ecb91c.js`), __vite__mapDeps([16, 1]), import.meta.url),
        ),
        "sidebar-tasks": T(() =>
          o(() => import(`./sidebar-tasks-icon-a5050e1add74.js`), __vite__mapDeps([17, 1]), import.meta.url),
        ),
      }));
  }))();
}
export { j as n, w as t };
//# sourceMappingURL=animated-icon-f572a9e84123.js.map
