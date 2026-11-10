import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { _Mt as t, gMt as n, vzt as r, xMt as i } from "./app-shared-bbfeca5e5737.js";
function a(e) {
  let t = (0, o.c)(8),
    r,
    i;
  t[0] === e ? ((r = t[1]), (i = t[2])) : (({ className: r, ...i } = e), (t[0] = e), (t[1] = r), (t[2] = i));
  let a;
  t[3] === r
    ? (a = t[4])
    : ((a = n(`flex h-full min-w-0 items-center gap-1 px-2 text-codex-description`, r)),
      (t[3] = r),
      (t[4] = a));
  let c;
  return (
    t[5] !== i || t[6] !== a
      ? ((c = (0, s.jsx)(`div`, { className: a, ...i })), (t[5] = i), (t[6] = a), (t[7] = c))
      : (c = t[7]),
    c
  );
}
var o, s;
function c() {
  return (c = e(() => {
    ((o = r()), t(), (s = i()));
  }))();
}
export { c as n, a as t };
//# sourceMappingURL=toolbar-row-2c9fc5d31463.js.map
