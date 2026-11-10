import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, vzt as n, zxt as r } from "./app-shared-bbfeca5e5737.js";
import { CWt as i, bWt as a, cSn as o, fSn as s } from "./app-initial-5851df3f6cb1.js";
function c(e) {
  let t = (0, l.c)(8),
    {
      commandId: n,
      enabled: a,
      onKeyDown: s,
      onKeyUp: c,
      capture: u,
      ignoreWithin: d,
      keyboardEventTarget: f,
    } = e,
    p = a === void 0 || a,
    m = r(o, n),
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
    ((l = n()), t(), a(), s());
  }))();
}
export { c as n, u as t };
//# sourceMappingURL=use-command-hotkey-19878d4b0f49.js.map
