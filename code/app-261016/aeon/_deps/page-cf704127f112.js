import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n } from "./app-shared-2feb3d4c6fcc.js";
import "./app-initial-ad16eaadf81f.js";
import { n as r, t as i } from "./native-room-e0379260d6ee.js";
import { n as a, t as o } from "./task-detail-a38afe27903c.js";
function s(e) {
  let t = (0, c.c)(11),
    { conversationId: n, tboId: r, taskId: a, roomId: s } = e,
    u;
  t[0] !== a || t[1] !== r
    ? ((u = (0, l.jsx)(o, { tboId: r, taskId: a })), (t[0] = a), (t[1] = r), (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] !== n || t[4] !== s || t[5] !== a || t[6] !== r
    ? ((d = (0, l.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children: (0, l.jsx)(i, {
          conversationId: n,
          roomId: s,
          orbitId: r,
          taskId: a,
          isOrbit: !0,
          active: !0,
        }),
      })),
      (t[3] = n),
      (t[4] = s),
      (t[5] = a),
      (t[6] = r),
      (t[7] = d))
    : (d = t[7]);
  let f;
  return (
    t[8] !== u || t[9] !== d
      ? ((f = (0, l.jsxs)(`div`, { className: `flex h-full min-h-0 flex-col`, children: [u, d] })),
        (t[8] = u),
        (t[9] = d),
        (t[10] = f))
      : (f = t[10]),
    f
  );
}
var c, l;
function u() {
  return (u = e(() => {
    ((c = n()), r(), a(), (l = t()));
  }))();
}
u();
export { s as OrbitTaskThreadPage };
//# sourceMappingURL=page-cf704127f112.js.map
