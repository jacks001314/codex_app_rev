import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  LNt as n,
  PBt as r,
  Y3 as i,
  Z3 as a,
  nB as o,
  rB as s,
} from "./app-shared-2feb3d4c6fcc.js";
function c(e) {
  let t = (0, l.c)(25),
    n,
    r,
    a,
    s;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (a = t[3]), (s = t[4]))
    : (({ id: r, tooltipContent: s, size: a, ...n } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a),
      (t[4] = s));
  let c = a === void 0 ? `compact` : a,
    f = (0, u.useId)(),
    p = r ?? f,
    m = (0, u.useId)(),
    [h, g] = (0, u.useState)(null),
    _ = n.disabled || n.loading,
    v = _ && s != null,
    y = s ?? ``,
    b = s != null && void 0,
    x = h ?? void 0,
    S = _ ? g : void 0,
    C = v ? m : void 0,
    w = v || void 0,
    T = v ? p : void 0,
    E = v ? `group` : void 0,
    D = v ? 0 : void 0,
    O = _ ? void 0 : g,
    k = _ || s == null ? void 0 : m,
    A;
  t[5] !== p || t[6] !== n || t[7] !== c || t[8] !== O || t[9] !== k
    ? ((A = (0, d.jsx)(i, { id: p, ref: O, "aria-describedby": k, size: c, ...n })),
      (t[5] = p),
      (t[6] = n),
      (t[7] = c),
      (t[8] = O),
      (t[9] = k),
      (t[10] = A))
    : (A = t[10]);
  let j;
  t[11] !== D || t[12] !== A || t[13] !== S || t[14] !== C || t[15] !== w || t[16] !== T || t[17] !== E
    ? ((j = (0, d.jsx)(`span`, {
        ref: S,
        className: `inline-flex max-w-full min-w-0 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
        "aria-describedby": C,
        "aria-disabled": w,
        "aria-labelledby": T,
        role: E,
        tabIndex: D,
        children: A,
      })),
      (t[11] = D),
      (t[12] = A),
      (t[13] = S),
      (t[14] = C),
      (t[15] = w),
      (t[16] = T),
      (t[17] = E),
      (t[18] = j))
    : (j = t[18]);
  let M;
  return (
    t[19] !== j || t[20] !== y || t[21] !== b || t[22] !== x || t[23] !== m
      ? ((M = (0, d.jsx)(o, {
          color: `inverse`,
          tooltipContent: y,
          open: b,
          tooltipId: m,
          triggerElement: x,
          children: j,
        })),
        (t[19] = j),
        (t[20] = y),
        (t[21] = b),
        (t[22] = x),
        (t[23] = m),
        (t[24] = M))
      : (M = t[24]),
    M
  );
}
var l, u, d;
function f() {
  return (f = e(() => {
    ((l = r()), (u = t()), a(), s(), (d = n()));
  }))();
}
export { f as n, c as t };
//# sourceMappingURL=action-button-b7d90e9023c0.js.map
