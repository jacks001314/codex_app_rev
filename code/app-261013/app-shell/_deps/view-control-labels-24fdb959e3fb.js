import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, oSt as n } from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as r,
  FEr as i,
  Jwn as a,
  MCn as o,
  PCn as s,
  PEr as c,
  RCr as l,
  Xwn as u,
  aIr as d,
  dwn as f,
  gwr as p,
  hwn as m,
  kCr as h,
  oIr as g,
} from "./app-initial-5851df3f6cb1.js";
var _, v, y;
function b() {
  return (b = e(() => {
    (t(),
      i(),
      l(),
      f(),
      d(),
      r(),
      a(),
      o(),
      (_ = n(
        p,
        ({ get: e }) =>
          e(s) === `full` && (e(m.tabs$).length > 0 || (e(h) && e(c, { name: `browser.in-app` }).isCapable)),
      )),
      (v = n(p, ({ get: e }) => {
        let t = e(g),
          n = e(s),
          r = e(m.tabs$).length > 0;
        return e(u) && n === `split`
          ? e(y)
          : !r && n === `chat`
            ? t.formatMessage({
                id: `threadWorkspace.layout.newTab`,
                defaultMessage: `New tab`,
                description: `Creates a content tab beside Chat when there are no tabs`,
              })
            : e(_)
              ? t.formatMessage({
                  id: `threadWorkspace.layout.splitView`,
                  defaultMessage: `Enter split view`,
                  description: `Shows Chat beside the content tabs`,
                })
              : n === `chat`
                ? t.formatMessage({
                    id: `threadWorkspace.layout.showTabs`,
                    defaultMessage: `Show tabs`,
                    description: `Shows retained content tabs beside Chat in split view`,
                  })
                : t.formatMessage({
                    id: `threadWorkspace.layout.hideTabs`,
                    defaultMessage: `Hide tabs`,
                    description: `Hides the content tabs and leaves Chat visible`,
                  });
      })),
      (y = n(p, ({ get: e }) => {
        let t = e(g);
        return e(s) === `full`
          ? t.formatMessage({
              id: `threadWorkspace.layout.exitFullView`,
              defaultMessage: `Exit full view`,
              description: `Exits full view and shows Chat beside the content tabs when split view is available`,
            })
          : e(m.tabs$).length === 0
            ? t.formatMessage({
                id: `threadWorkspace.layout.newTabInFullView`,
                defaultMessage: `New tab in full view`,
                description: `Creates a content tab that fills the workspace`,
              })
            : t.formatMessage({
                id: `threadWorkspace.layout.enterFullView`,
                defaultMessage: `Enter full view`,
                description: `Expands the active content tab to fill the workspace`,
              });
      })));
  }))();
}
export { v as i, _ as n, y as r, b as t };
//# sourceMappingURL=view-control-labels-24fdb959e3fb.js.map
