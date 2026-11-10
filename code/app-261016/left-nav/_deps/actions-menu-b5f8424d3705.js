import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, XS as r, wE as i } from "./app-shared-2feb3d4c6fcc.js";
import { lx as a, ux as o } from "./app-initial-ad16eaadf81f.js";
import { n as s, t as c } from "./menu-items-83f6bf1513b1.js";
import { n as l, t as u } from "./file-actions-menu-6e870edcf7c5.js";
function d(e) {
  let t = (0, f.c)(11),
    { entry: n, libraryFileId: r, menuItems: o, navigationDisabled: s, onClose: l, title: d } = e,
    m = s !== void 0 && s,
    h;
  t[0] !== r || t[1] !== d
    ? ((h =
        r == null
          ? void 0
          : { identity: { type: `library`, libraryFileId: r }, mimeType: `text/markdown`, name: d }),
      (t[0] = r),
      (t[1] = d),
      (t[2] = h))
    : (h = t[2]);
  let g = h,
    _;
  return (
    t[3] !== n || t[4] !== g || t[5] !== r || t[6] !== o || t[7] !== m || t[8] !== l || t[9] !== d
      ? ((_ =
          n == null
            ? (0, p.jsx)(i, {
                title: d,
                mimeType: `text/markdown`,
                libraryBreadcrumb: r == null ? null : (0, p.jsx)(a, { libraryFileId: r, onNavigate: l }),
                children: (0, p.jsx)(c, {
                  fileInfoSource: g,
                  libraryFileId: r,
                  onOpenLibrary: l,
                  children: o,
                }),
              })
            : (0, p.jsx)(u, {
                entry: n,
                mimeType: `text/markdown`,
                navigationDisabled: m,
                onOpenLibrary: l,
                children: o,
              })),
        (t[3] = n),
        (t[4] = g),
        (t[5] = r),
        (t[6] = o),
        (t[7] = m),
        (t[8] = l),
        (t[9] = d),
        (t[10] = _))
      : (_ = t[10]),
    _
  );
}
var f, p;
function m() {
  return (m = e(() => {
    ((f = n()), s(), l(), o(), r(), (p = t()));
  }))();
}
export { m as n, d as t };
//# sourceMappingURL=actions-menu-b5f8424d3705.js.map
