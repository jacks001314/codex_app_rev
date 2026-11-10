const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./editor-92aba10f7704.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./editor-placeholder-af27987d8f40.js",
      "./appearance-picker-button-c44f9fe2eb96.js",
      "./card-carousel-scroll-956c5506fddb.js",
      "./use-avatar-options-56495836bfd6.js",
      "./save-character-1d5a6aada21e.js",
      "./pet-avatar-png-5e7c6a1d30f7.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { B4 as t, fPt as n, pPt as r, xMt as i, z4 as a } from "./app-shared-bbfeca5e5737.js";
import { H5 as o, U5 as s, V5 as c } from "./app-initial-5851df3f6cb1.js";
import { n as l, t as u } from "./editor-placeholder-af27987d8f40.js";
function d() {
  let e = s();
  if (typeof document > `u` || e == null || (h.prefetch(), m)) return;
  m = !0;
  let t = document.createElement(`iframe`),
    n = new URL(e, document.baseURI);
  (n.searchParams.set(`preload`, ``),
    (t.src = n.href),
    (t.hidden = !0),
    t.setAttribute(`sandbox`, `allow-scripts allow-same-origin`),
    (t.allow = `cross-origin-isolated`));
  let r = new AbortController(),
    i = window.setTimeout(a, 3e4);
  function a() {
    (window.clearTimeout(i), r.abort(), t.remove());
  }
  (window.addEventListener(
    `message`,
    (e) => {
      e.source === t.contentWindow &&
        e.origin === window.location.origin &&
        e.data === `orbit-character-preloaded` &&
        a();
    },
    { signal: r.signal },
  ),
    window.addEventListener(`pagehide`, a, { once: !0, signal: r.signal }),
    document.body.append(t));
}
function f() {
  (d(), o());
}
var p, m, h;
function g() {
  return (g = e(() => {
    (a(),
      l(),
      c(),
      (p = i()),
      r(),
      (m = !1),
      (h = t(
        () =>
          n(
            () => import(`./editor-92aba10f7704.js`).then((e) => e.CharacterEditor),
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
            import.meta.url,
          ),
        {
          suspendToParent: !0,
          errorFallback: ({ title: e, footer: t, onCreatePet: n }) =>
            (0, p.jsx)(u, { title: e, footer: t, onCreatePet: n, error: !0 }),
        },
      )));
  }))();
}
export { f as i, g as n, d as r, h as t };
//# sourceMappingURL=editor-lazy-b79b8e73f0c9.js.map
