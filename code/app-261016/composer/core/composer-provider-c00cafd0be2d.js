import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  LNt as i,
  PBt as a,
  Qst as o,
  ZSt as s,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B1n as c,
  Bln as l,
  Cbn as u,
  NSn as d,
  OSn as f,
  Pcn as p,
  Tbn as m,
  VPn as h,
  Vln as g,
  WNn as _,
  brr as v,
  dTn as y,
  fir as b,
  kSn as x,
  lir as S,
  q1n as C,
  rPn as w,
  uTn as T,
  wbn as E,
  wcn as D,
  yFn as O,
  yrr as k,
} from "./app-initial-ad16eaadf81f.js";
import { Xr as A, Zr as j } from "./app-primary-3e00728c2a4c.js";
function M(e) {
  let n = (0, N.c)(11),
    { conversationId: r, isTranscriptVisible: i } = e,
    a = i === void 0 || i,
    s = t(o),
    l = (0, P.useId)(),
    { mutate: f } = p(),
    m,
    h;
  (n[0] !== r || n[1] !== l || n[2] !== s
    ? ((m = () => (
        s.set(E, (e) => new Map(e).set(l, r)),
        s.get(u)?.dismissCurrent(),
        () => {
          s.set(E, (e) => {
            let t = new Map(e);
            return (t.delete(l), t);
          });
        }
      )),
      (h = [r, l, s]),
      (n[0] = r),
      (n[1] = l),
      (n[2] = s),
      (n[3] = m),
      (n[4] = h))
    : ((m = n[3]), (h = n[4])),
    (0, P.useEffect)(m, h));
  let y, b;
  return (
    n[5] !== r || n[6] !== a || n[7] !== f || n[8] !== s
      ? ((y = () => {
          if (!a) return;
          let e = !1,
            t = s.watch((t) => {
              let { get: n } = t;
              if (n(T) !== !0) {
                e = !1;
                return;
              }
              if (e) return;
              let i = n(c, r);
              if (i == null) return;
              if (n(C, r) === `tpp`) {
                e = !0;
                return;
              }
              let { data: a } = n(_, i);
              a != null &&
                ((e = !0),
                g(s, i).catch(() => {
                  e = !1;
                }));
            }),
            n = s.watch((e) => {
              let { get: t } = e,
                n = t(T) === !0;
              if ((O(s, r, n), !n)) return;
              let i = t(c, r);
              if (i == null || t(x, i) !== !0) return;
              let a = S(i);
              (v(s, a, s.get(d, a)), f(i));
            });
          return () => {
            (t(), n(), O(s, r, !1));
          };
        }),
        (b = [r, a, f, s]),
        (n[5] = r),
        (n[6] = a),
        (n[7] = f),
        (n[8] = s),
        (n[9] = y),
        (n[10] = b))
      : ((y = n[9]), (b = n[10])),
    (0, P.useEffect)(y, b),
    null
  );
}
var N, P;
function F() {
  return (F = e(() => {
    ((N = a()), s(), (P = r()), y(), D(), n(), k(), f(), b(), w(), l(), h(), m());
  }))();
}
function I(e) {
  let t = (0, R.c)(3),
    { children: n } = e,
    [r] = (0, z.useState)(L),
    i;
  return (
    t[0] !== r || t[1] !== n
      ? ((i = (0, B.jsx)(A, { value: r, children: n })), (t[0] = r), (t[1] = n), (t[2] = i))
      : (i = t[2]),
    i
  );
}
function L() {
  let e = null,
    t = new Set(),
    n = (n) => {
      e = n;
      for (let e of t) e();
    };
  return {
    getSnapshot: () => e,
    subscribe: (e) => (
      t.add(e),
      () => {
        t.delete(e);
      }
    ),
    register: (t) => (
      n(t),
      () => {
        e === t && n(null);
      }
    ),
  };
}
var R, z, B;
function V() {
  return (V = e(() => {
    ((R = a()), (z = r()), j(), (B = i()));
  }))();
}
export { F as i, V as n, M as r, I as t };
//# sourceMappingURL=composer-provider-c00cafd0be2d.js.map
