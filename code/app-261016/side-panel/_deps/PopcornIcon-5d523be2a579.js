import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AEt as t,
  DEt as n,
  EEt as r,
  FBt as i,
  LNt as a,
  OEt as o,
  TEt as s,
  kEt as c,
} from "./app-shared-2feb3d4c6fcc.js";
function l(e) {
  s(e, `icon`);
  let i = t(e),
    a = { ...n(e), ...(r(e.canvas) ? { overflow: `visible` } : {}) };
  return function ({
    "aria-hidden": t,
    "aria-label": n,
    "aria-labelledby": r,
    focusable: o = `false`,
    role: s,
    style: l,
    ...f
  }) {
    let p = (0, u.useId)(),
      m = (0, u.useMemo)(() => ({ __html: c(i, `${e.name}-${p}`) }), [p]),
      h = !!(n || r);
    return (0, d.jsx)(`svg`, {
      ...f,
      "aria-hidden": t ?? (!h || void 0),
      "aria-label": n,
      "aria-labelledby": r,
      "data-icon-p3": e.paint.kind === `multicolor` ? e.name : void 0,
      focusable: o,
      height: e.canvas.height,
      role: s ?? (h ? `img` : void 0),
      style: { ...a, ...l },
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
    (o(), (u = i()), (d = a()));
  }))();
}
export { f as n, l as t };
//# sourceMappingURL=PopcornIcon-5d523be2a579.js.map
