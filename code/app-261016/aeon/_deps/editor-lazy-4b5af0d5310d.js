const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./editor-8b0fd8516465.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./editor-placeholder-ad514bb91e1c.js",
      "./appearance-picker-button-906f8686708c.js",
      "./card-carousel-scroll-edf238b6bc28.js",
      "./use-avatar-options-38297e1d0f5d.js",
      "./save-character-fbc662fd1cd0.js",
      "./pet-avatar-png-d40c2ea351db.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { F3 as t, I3 as n, LNt as r, OFt as i, kFt as a } from "./app-shared-2feb3d4c6fcc.js";
import { d9 as o, f9 as s, u9 as c } from "./app-initial-ad16eaadf81f.js";
import { n as l, t as u } from "./editor-placeholder-ad514bb91e1c.js";
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
    (t(),
      l(),
      c(),
      (p = r()),
      a(),
      (m = !1),
      (h = n(
        () =>
          i(
            () => import(`./editor-8b0fd8516465.js`).then((e) => e.CharacterEditor),
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
//# sourceMappingURL=editor-lazy-4b5af0d5310d.js.map
