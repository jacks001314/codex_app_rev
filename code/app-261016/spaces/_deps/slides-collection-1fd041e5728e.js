import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { CCt as t, ZSt as n } from "./app-shared-2feb3d4c6fcc.js";
import {
  Hlr as r,
  Nmt as i,
  Ulr as a,
  Xfn as o,
  Xmt as s,
  nHt as c,
  tHt as l,
} from "./app-initial-ad16eaadf81f.js";
var u, d;
function f() {
  return (f = e(() => {
    (n(),
      i(),
      r(),
      c(),
      (u = [
        { provider: `google_drive`, href: l },
        { provider: `box`, href: `/space/d/external-box%3Aroot?tab=recent` },
        { provider: `dropbox`, href: `/space/d/external-dropbox%3Aroot?tab=recent` },
        { provider: `sharepoint`, href: `/space/d/external-sharepoint%3Aroot?tab=all` },
        { provider: `onedrive`, href: `/space/d/external-onedrive%3Aroot?tab=all` },
      ]),
      (d = t(o, ({ get: e }) => {
        if (e(a)) return u.filter(({ provider: t }) => e(s, t));
      })));
  }))();
}
function p(e) {
  return e.basePath === `/space` && e.directoryId == null && !e.deleted && e.slidesCollection != null;
}
var m;
function h() {
  return (h = e(() => {
    m = `/space?view=slides`;
  }))();
}
export { d as a, f as i, h as n, p as r, m as t };
//# sourceMappingURL=slides-collection-1fd041e5728e.js.map
