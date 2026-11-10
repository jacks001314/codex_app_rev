import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Bit as t, Hit as n, vzt as r, xMt as i, yzt as a } from "./app-shared-bbfeca5e5737.js";
import { XR as o, YR as s } from "./app-initial-5851df3f6cb1.js";
function c(e) {
  let n = (0, l.c)(11),
    { name: r, ready: i, failed: a } = e,
    o = a !== void 0 && a,
    c = (0, u.useRef)(!1),
    f = (0, u.useRef)(null),
    p;
  n[0] === r
    ? (p = n[1])
    : ((p = () => ({
        name: r,
        key: crypto.randomUUID(),
        startedAtMs: performance.timeOrigin + performance.now(),
      })),
      (n[0] = r),
      (n[1] = p));
  let [m] = (0, u.useState)(p),
    h,
    g;
  (n[2] === m
    ? ((h = n[3]), (g = n[4]))
    : ((h = () => (
        (c.current = !0),
        (f.current = f.current ?? t.start(m.name, {}, m)),
        f.current.mark(`route_entered`),
        () => {
          ((c.current = !1),
            queueMicrotask(() => {
              c.current || f.current?.abort(`navigation_away`);
            }));
        }
      )),
      (g = [m]),
      (n[2] = m),
      (n[3] = h),
      (n[4] = g)),
    (0, u.useEffect)(h, g));
  let _, v;
  (n[5] !== o || n[6] !== i
    ? ((_ = () => {
        !i && o && f.current?.fail(`load_failed`);
      }),
      (v = [i, o]),
      (n[5] = o),
      (n[6] = i),
      (n[7] = _),
      (n[8] = v))
    : ((_ = n[7]), (v = n[8])),
    (0, u.useEffect)(_, v));
  let y;
  return (
    n[9] === i
      ? (y = n[10])
      : ((y = i
          ? (0, d.jsx)(s, {
              requireVisibleAtPaint: !0,
              onPaint: () => {
                (f.current?.mark(`content_visible`), f.current?.end());
              },
            })
          : null),
        (n[9] = i),
        (n[10] = y)),
    y
  );
}
var l, u, d;
function f() {
  return (f = e(() => {
    ((l = r()), (u = a()), n(), o(), (d = i()));
  }))();
}
export { f as n, c as t };
//# sourceMappingURL=load-performance-5a661348dd89.js.map
