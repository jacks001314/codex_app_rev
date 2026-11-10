import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Ixt as n,
  Pxt as r,
  SB as i,
  TJ as a,
  VDt as o,
  cz as s,
  jDt as c,
  sz as l,
  t3 as u,
  vzt as d,
  xMt as f,
  zxt as p,
} from "./app-shared-bbfeca5e5737.js";
import { Cwr as m, DSt as h, gwr as g, uSt as _, wSt as v } from "./app-initial-5851df3f6cb1.js";
function y(e) {
  let r = (0, b.c)(13),
    { disabled: a, mcpAppId: s } = e,
    c = n(g),
    u = o();
  if (!p(v, s).availableDisplayModes?.includes(`fullscreen`)) return null;
  let d;
  r[0] === u
    ? (d = r[1])
    : ((d = u.formatMessage({
        id: `codex.mcpTool.openAppInTab`,
        defaultMessage: `Open app in tab`,
        description: `Opens an MCP app in a tab from its tool call row`,
      })),
      (r[0] = u),
      (r[1] = d));
  let f = d,
    m;
  r[2] !== s || r[3] !== c
    ? ((m = () => h(c, s, `fullscreen`)), (r[2] = s), (r[3] = c), (r[4] = m))
    : (m = r[4]);
  let _;
  r[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = (0, x.jsx)(i, {})), (r[5] = _)) : (_ = r[5]);
  let y;
  r[6] !== a || r[7] !== f || r[8] !== m
    ? ((y = (0, x.jsx)(t, {
        className: `relative`,
        "aria-label": f,
        color: `ghost`,
        disabled: a,
        size: `icon`,
        onClick: m,
        children: _,
      })),
      (r[6] = a),
      (r[7] = f),
      (r[8] = m),
      (r[9] = y))
    : (y = r[9]);
  let S;
  return (
    r[10] !== f || r[11] !== y
      ? ((S = (0, x.jsx)(l, { tooltipContent: f, children: y })), (r[10] = f), (r[11] = y), (r[12] = S))
      : (S = r[12]),
    S
  );
}
var b, x;
function S() {
  return (S = e(() => {
    ((b = d()), r(), c(), u(), a(), s(), _(), m(), (x = f()));
  }))();
}
export { S as n, y as t };
//# sourceMappingURL=open-button-966628744c22.js.map
