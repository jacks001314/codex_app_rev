const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./site-details-28ff9bd6e665.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./appgen-site-detail-layout-8ded3439c229.js",
      "./appgen-disabled-tooltip-72287f1924e6.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  F3 as t,
  I3 as n,
  LNt as r,
  NSt as i,
  OFt as a,
  PBt as o,
  USt as s,
  VSt as c,
  kFt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import { n as u, r as d, t as f } from "./layout-ffe585164d8d.js";
function p(e) {
  let t = (0, m.c)(6),
    { children: n, href: r, onNavigate: i } = e,
    a = c(),
    o = s(),
    l;
  if (t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== o || t[4] !== i) {
    let e = new URL(r ?? a.pathname + a.search, `https://chatgpt.com`),
      s = (t, n) => {
        let r = t === `/sites/library` ? `/sites` : t,
          s = new URLSearchParams(e.search);
        s.get(`view`) === `sites` && s.delete(`view`);
        let c = `/space${r}${s.size > 0 ? `?${s}` : ``}`;
        i == null ? o(c, { state: a.state, ...n }) : i(c, n);
      };
    ((l = n(
      s,
      e.pathname.startsWith(`/space/sites/`) && e.pathname !== `/space/sites/`
        ? (0, h.jsx)(g, { path: e.pathname.slice(6), onNavigate: s })
        : null,
    )),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = o),
      (t[4] = i),
      (t[5] = l));
  } else l = t[5];
  return l;
}
var m, h, g;
function _() {
  return (_ = e(() => {
    ((m = o()),
      i(),
      t(),
      d(),
      (h = r()),
      l(),
      (g = n(
        async () =>
          (
            await a(
              async () => {
                let { SpaceSiteDetails: e } = await import(`./site-details-28ff9bd6e665.js`);
                return { SpaceSiteDetails: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
              import.meta.url,
            )
          ).SpaceSiteDetails,
        { fallback: (0, h.jsx)(u, {}), errorFallback: (0, h.jsx)(f, {}) },
      )));
  }))();
}
export { _ as n, p as t };
//# sourceMappingURL=sites-view-c3d0db2e1c25.js.map
