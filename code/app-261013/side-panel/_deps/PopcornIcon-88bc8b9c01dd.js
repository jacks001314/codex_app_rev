import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  cTt as t,
  dTt as n,
  lTt as r,
  oTt as i,
  sTt as a,
  uTt as o,
  xMt as s,
  yzt as c,
} from "./app-shared-bbfeca5e5737.js";
function l(e) {
  i(e, `icon`);
  let r = n(e),
    s = { ...t(e), ...(a(e.canvas) ? { overflow: `visible` } : {}) };
  return function ({
    "aria-hidden": t,
    "aria-label": n,
    "aria-labelledby": i,
    focusable: a = `false`,
    role: c,
    style: l,
    ...f
  }) {
    let p = (0, u.useId)(),
      m = (0, u.useMemo)(() => ({ __html: o(r, `${e.name}-${p}`) }), [p]),
      h = !!(n || i);
    return (0, d.jsx)(`svg`, {
      ...f,
      "aria-hidden": t ?? (!h || void 0),
      "aria-label": n,
      "aria-labelledby": i,
      "data-icon-p3": e.paint.kind === `multicolor` ? e.name : void 0,
      focusable: a,
      height: e.canvas.height,
      role: c ?? (h ? `img` : void 0),
      style: { ...s, ...l },
      viewBox: e.canvas.viewBox,
      width: e.canvas.width,
      xmlns: `http://www.w3.org/2000/svg`,
      dangerouslySetInnerHTML: m,
    });
  };
}
var u, d;
function f() {
  return (f = e(() => {
    (r(), (u = c()), (d = s()));
  }))();
}
export { f as n, l as t };
//# sourceMappingURL=PopcornIcon-88bc8b9c01dd.js.map
