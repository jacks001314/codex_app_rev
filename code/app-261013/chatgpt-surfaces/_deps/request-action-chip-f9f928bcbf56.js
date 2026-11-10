import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $4 as t, Oat as n, kat as r, t3 as i, vzt as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
import { bf as s, wf as c } from "./app-initial-5851df3f6cb1.js";
function l(e) {
  let n = (0, u.c)(11),
    i,
    a,
    o;
  n[0] === e
    ? ((i = n[1]), (a = n[2]), (o = n[3]))
    : (({ surfaceRef: o, radius: a, ...i } = e), (n[0] = e), (n[1] = i), (n[2] = a), (n[3] = o));
  let c;
  n[4] !== i || n[5] !== a
    ? ((c = (0, d.jsx)(t, { ...i, radius: a })), (n[4] = i), (n[5] = a), (n[6] = c))
    : (c = n[6]);
  let l = c,
    f;
  return (
    n[7] !== l || n[8] !== a || n[9] !== o
      ? ((f = r()
          ? (0, d.jsx)(s, {
              ref: o,
              variant: `transcript-chip`,
              style:
                a === `messageBubble`
                  ? { borderRadius: `var(--message-bubble-radius,var(--radius-full))` }
                  : void 0,
              children: l,
            })
          : l),
        (n[7] = l),
        (n[8] = a),
        (n[9] = o),
        (n[10] = f))
      : (f = n[10]),
    f
  );
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = a()), c(), n(), i(), (d = o()));
  }))();
}
export { f as n, l as t };
//# sourceMappingURL=request-action-chip-f9f928bcbf56.js.map
