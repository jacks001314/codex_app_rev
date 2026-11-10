import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { CS as t, tE as n, vzt as r, xMt as i } from "./app-shared-bbfeca5e5737.js";
import { Lb as a, Rb as o } from "./app-initial-5851df3f6cb1.js";
import { n as s, t as c } from "./menu-items-b78a5ea99a11.js";
import { a as l, i as u } from "./library-artifact-preview-chrome-65b42e599b90.js";
function d(e) {
  let t = (0, f.c)(11),
    { entry: r, libraryFileId: i, menuItems: o, navigationDisabled: s, onClose: l, title: d } = e,
    m = s !== void 0 && s,
    h;
  t[0] !== i || t[1] !== d
    ? ((h =
        i == null
          ? void 0
          : { identity: { type: `library`, libraryFileId: i }, mimeType: `text/markdown`, name: d }),
      (t[0] = i),
      (t[1] = d),
      (t[2] = h))
    : (h = t[2]);
  let g = h,
    _;
  return (
    t[3] !== r || t[4] !== g || t[5] !== i || t[6] !== o || t[7] !== m || t[8] !== l || t[9] !== d
      ? ((_ =
          r == null
            ? (0, p.jsx)(n, {
                title: d,
                mimeType: `text/markdown`,
                libraryBreadcrumb: i == null ? null : (0, p.jsx)(a, { libraryFileId: i, onNavigate: l }),
                children: (0, p.jsx)(c, {
                  fileInfoSource: g,
                  libraryFileId: i,
                  onOpenLibrary: l,
                  children: o,
                }),
              })
            : (0, p.jsx)(u, {
                entry: r,
                mimeType: `text/markdown`,
                navigationDisabled: m,
                onOpenLibrary: l,
                children: o,
              })),
        (t[3] = r),
        (t[4] = g),
        (t[5] = i),
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
    ((f = r()), s(), l(), o(), t(), (p = i()));
  }))();
}
export { m as n, d as t };
//# sourceMappingURL=actions-menu-21f2f0dee98d.js.map
