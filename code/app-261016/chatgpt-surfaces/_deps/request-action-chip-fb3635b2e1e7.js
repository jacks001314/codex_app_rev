import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Hst as t, LNt as n, PBt as r, Vst as i, Y3 as a, Z3 as o } from "./app-shared-2feb3d4c6fcc.js";
import { Ef as s, Sf as c } from "./app-initial-ad16eaadf81f.js";
function l(e) {
  let n = (0, u.c)(11),
    r,
    i,
    o;
  n[0] === e
    ? ((r = n[1]), (i = n[2]), (o = n[3]))
    : (({ surfaceRef: o, radius: i, ...r } = e), (n[0] = e), (n[1] = r), (n[2] = i), (n[3] = o));
  let s;
  n[4] !== r || n[5] !== i
    ? ((s = (0, d.jsx)(a, { ...r, radius: i })), (n[4] = r), (n[5] = i), (n[6] = s))
    : (s = n[6]);
  let l = s,
    f;
  return (
    n[7] !== l || n[8] !== i || n[9] !== o
      ? ((f = t()
          ? (0, d.jsx)(c, {
              ref: o,
              variant: `transcript-chip`,
              style:
                i === `messageBubble`
                  ? { borderRadius: `var(--message-bubble-radius,var(--radius-full))` }
                  : void 0,
              children: l,
            })
          : l),
        (n[7] = l),
        (n[8] = i),
        (n[9] = o),
        (n[10] = f))
      : (f = n[10]),
    f
  );
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = r()), s(), i(), o(), (d = n()));
  }))();
}
export { f as n, l as t };
//# sourceMappingURL=request-action-chip-fb3635b2e1e7.js.map
