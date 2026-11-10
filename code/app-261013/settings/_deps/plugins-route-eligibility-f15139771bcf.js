import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, Vxt as n, _xt as r, vzt as i, wxt as a } from "./app-shared-bbfeca5e5737.js";
import {
  Jlr as o,
  Zkn as s,
  fOr as c,
  hOr as l,
  oFr as u,
  qkn as d,
  qlr as f,
} from "./app-initial-5851df3f6cb1.js";
function p() {
  let e = (0, m.c)(6),
    t = a(),
    r;
  e[0] !== t.search || e[1] !== t.state
    ? ((r = d(t.state, t.search).initialHostId ?? `local`), (e[0] = t.search), (e[1] = t.state), (e[2] = r))
    : (r = e[2]);
  let i = r;
  n(c);
  let s;
  return (
    e[3] !== i || e[4] !== !0
      ? ((s = { enabled: !0, hostId: i }), (e[3] = i), (e[4] = !0), (e[5] = s))
      : (s = e[5]),
    o(s)
  );
}
var m;
function h() {
  return (h = e(() => {
    ((m = i()), t(), r(), l(), f(), u(), s());
  }))();
}
export { p as n, h as t };
//# sourceMappingURL=plugins-route-eligibility-f15139771bcf.js.map
