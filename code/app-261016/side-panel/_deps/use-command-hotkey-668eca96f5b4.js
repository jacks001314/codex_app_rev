import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { PBt as t, ZSt as n, nCt as r } from "./app-shared-2feb3d4c6fcc.js";
import { DTn as i, _Tn as a, wTn as o, xTn as s } from "./app-initial-ad16eaadf81f.js";
function c(e) {
  let t = (0, l.c)(8),
    {
      commandId: n,
      enabled: o,
      onKeyDown: s,
      onKeyUp: c,
      capture: u,
      ignoreWithin: d,
      keyboardEventTarget: f,
    } = e,
    p = o === void 0 || o,
    m = r(a, n),
    h = m ?? ``,
    g = p && m != null,
    _;
  (t[0] !== u || t[1] !== d || t[2] !== f || t[3] !== s || t[4] !== c || t[5] !== h || t[6] !== g
    ? ((_ = {
        accelerator: h,
        enabled: g,
        onKeyDown: s,
        onKeyUp: c,
        capture: u,
        ignoreWithin: d,
        keyboardEventTarget: f,
      }),
      (t[0] = u),
      (t[1] = d),
      (t[2] = f),
      (t[3] = s),
      (t[4] = c),
      (t[5] = h),
      (t[6] = g),
      (t[7] = _))
    : (_ = t[7]),
    i(_));
}
var l;
function u() {
  return (u = e(() => {
    ((l = t()), n(), o(), s());
  }))();
}
export { c as n, u as t };
//# sourceMappingURL=use-command-hotkey-668eca96f5b4.js.map
