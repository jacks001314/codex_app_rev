import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Sj as t,
  _wt as n,
  gwt as r,
  sj as i,
  vzt as a,
  xMt as o,
  yzt as s,
} from "./app-shared-bbfeca5e5737.js";
import { Yk as c, qk as l } from "./app-initial-5851df3f6cb1.js";
import { Gm as u, Wm as d } from "./app-primary-fe8a450b3b04.js";
import { n as f, t as p } from "./use-measured-element-height-8385c1491b39.js";
import { n as m, t as h } from "./timeline-activity-body-20adff28ef8e.js";
function g(e) {
  let t = (0, _.c)(25),
    { defaultExpanded: r, indentContent: a, icon: o, onExpand: s, summary: c, status: u, children: p } = e,
    m = r !== void 0 && r,
    g = a === void 0 || a,
    [b, x] = (0, v.useState)(!1),
    [S, C] = (0, v.useState)(m),
    { elementHeightPx: w, elementRef: T } = f(),
    E = u === `running`,
    D = p != null,
    O = D && (E ? !b : S),
    k;
  t[0] !== b || t[1] !== S || t[2] !== O || t[3] !== E || t[4] !== s
    ? ((k = () => {
        (O || s?.(), E ? x(!b) : C(!S));
      }),
      (t[0] = b),
      (t[1] = S),
      (t[2] = O),
      (t[3] = E),
      (t[4] = s),
      (t[5] = k))
    : (k = t[5]);
  let A = k,
    j;
  t[6] !== E || t[7] !== c
    ? ((j = (0, y.jsx)(l, {
        active: E,
        className: `min-w-0 truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default`,
        children: c,
      })),
      (t[6] = E),
      (t[7] = c),
      (t[8] = j))
    : (j = t[8]);
  let M = j,
    N;
  t[9] !== A || t[10] !== D || t[11] !== O
    ? ((N = D ? { expanded: O, onToggle: A } : void 0), (t[9] = A), (t[10] = D), (t[11] = O), (t[12] = N))
    : (N = t[12]);
  let P = N,
    F;
  t[13] !== p || t[14] !== w || t[15] !== T || t[16] !== g || t[17] !== D || t[18] !== O
    ? ((F = D
        ? (0, y.jsx)(n.div, {
            initial: !1,
            animate: { height: O ? w : 0, opacity: +!!O },
            "aria-hidden": !O,
            inert: !O,
            className: O ? `overflow-visible` : `overflow-hidden`,
            style: { pointerEvents: O ? `auto` : `none` },
            transition: i,
            children: (0, y.jsx)(h, { ref: T, indent: g, children: p }),
          })
        : null),
      (t[13] = p),
      (t[14] = w),
      (t[15] = T),
      (t[16] = g),
      (t[17] = D),
      (t[18] = O),
      (t[19] = F))
    : (F = t[19]);
  let I = F,
    L;
  return (
    t[20] !== I || t[21] !== P || t[22] !== o || t[23] !== M
      ? ((L = (0, y.jsx)(d, { body: I, disclosure: P, icon: o, summary: M })),
        (t[20] = I),
        (t[21] = P),
        (t[22] = o),
        (t[23] = M),
        (t[24] = L))
      : (L = t[24]),
    L
  );
}
var _, v, y;
function b() {
  return (b = e(() => {
    ((_ = a()), r(), (v = s()), t(), p(), u(), c(), m(), (y = o()));
  }))();
}
function x(e) {
  return (
    e.result?.type === `error` &&
    e.result.error === `MCP tool call requires approval, but approval policy is never`
  );
}
function S() {
  return (S = e(() => {}))();
}
export { b as i, x as n, g as r, S as t };
//# sourceMappingURL=mcp-tool-call-approval-2041ceff5519.js.map
