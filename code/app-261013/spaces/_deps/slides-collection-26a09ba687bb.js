import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, oSt as n } from "./app-shared-bbfeca5e5737.js";
import {
  Vpt as r,
  aer as i,
  eor as a,
  oer as o,
  tln as s,
  tor as c,
  wpt as l,
} from "./app-initial-5851df3f6cb1.js";
var u, d;
function f() {
  return (f = e(() => {
    (t(),
      l(),
      a(),
      o(),
      (u = [
        { provider: `google_drive`, href: i },
        { provider: `box`, href: `/space/d/external-box%3Aroot?tab=recent` },
        { provider: `dropbox`, href: `/space/d/external-dropbox%3Aroot?tab=recent` },
        { provider: `sharepoint`, href: `/space/d/external-sharepoint%3Aroot?tab=all` },
        { provider: `onedrive`, href: `/space/d/external-onedrive%3Aroot?tab=all` },
      ]),
      (d = n(s, ({ get: e }) => {
        if (e(c)) return u.filter(({ provider: t }) => e(r, t));
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
//# sourceMappingURL=slides-collection-26a09ba687bb.js.map
