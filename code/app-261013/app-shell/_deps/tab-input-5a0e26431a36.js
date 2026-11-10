import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ixt as t,
  Pxt as n,
  bz as r,
  vzt as i,
  xMt as a,
  xz as o,
  yzt as s,
} from "./app-shared-bbfeca5e5737.js";
import { Cwr as c, gwr as l } from "./app-initial-5851df3f6cb1.js";
import { n as u, t as d } from "./input-753eb7078f1c.js";
function f(e) {
  let n = (0, p.c)(27),
    r,
    i,
    a,
    s,
    c;
  n[0] === e
    ? ((r = n[1]), (i = n[2]), (a = n[3]), (s = n[4]), (c = n[5]))
    : (({ conversationId: r, providers: s, sources: c, onNavigate: i, ...a } = e),
      (n[0] = e),
      (n[1] = r),
      (n[2] = i),
      (n[3] = a),
      (n[4] = s),
      (n[5] = c));
  let u = t(l),
    f;
  n[6] !== r || n[7] !== a.addressValue || n[8] !== a.id || n[9] !== a.panelTarget
    ? ((f = () => ({ id: a.id, conversationId: r, panelTarget: a.panelTarget, value: a.addressValue })),
      (n[6] = r),
      (n[7] = a.addressValue),
      (n[8] = a.id),
      (n[9] = a.panelTarget),
      (n[10] = f))
    : (f = n[10]);
  let g = o(f),
    _ = o(i),
    v;
  n[11] !== g || n[12] !== _ || n[13] !== s || n[14] !== u
    ? ((v = () => s.map((e) => e(u, { getContext: g, onNavigate: _ }))),
      (n[11] = g),
      (n[12] = _),
      (n[13] = s),
      (n[14] = u),
      (n[15] = v))
    : (v = n[15]);
  let [y] = (0, m.useState)(v),
    b;
  n[16] === c ? (b = n[17]) : ((b = c ?? []), (n[16] = c), (n[17] = b));
  let x;
  n[18] !== y || n[19] !== b ? ((x = [...b, ...y]), (n[18] = y), (n[19] = b), (n[20] = x)) : (x = n[20]);
  let S;
  n[21] === i ? (S = n[22]) : ((S = (e) => i(e, !1)), (n[21] = i), (n[22] = S));
  let C;
  return (
    n[23] !== a || n[24] !== x || n[25] !== S
      ? ((C = (0, h.jsx)(d, { ...a, sources: x, onCommitAddress: S })),
        (n[23] = a),
        (n[24] = x),
        (n[25] = S),
        (n[26] = C))
      : (C = n[26]),
    C
  );
}
var p, m, h;
function g() {
  return (g = e(() => {
    ((p = i()), n(), (m = s()), c(), r(), u(), (h = a()));
  }))();
}
export { g as n, f as t };
//# sourceMappingURL=tab-input-5a0e26431a36.js.map
