import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Pxt as r,
  vzt as i,
  wot as a,
  xMt as o,
  yzt as s,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cyn as c,
  FAn as l,
  Fin as u,
  Gin as d,
  Han as f,
  Oyn as p,
  Q9n as m,
  SAn as h,
  Van as g,
  Yjn as _,
  Z9n as v,
  Zer as y,
  bZn as b,
  etr as x,
  nSn as S,
  pZn as C,
  rSn as w,
  wyn as T,
  yjn as E,
} from "./app-initial-5851df3f6cb1.js";
import { Rr as D, zr as O } from "./app-primary-fe8a450b3b04.js";
function k(e) {
  let r = (0, A.c)(5),
    { conversationId: i } = e,
    a = n(t),
    { mutate: o } = d(),
    s,
    c;
  return (
    r[0] !== i || r[1] !== o || r[2] !== a
      ? ((s = () => {
          let e = !1,
            t = a.watch((t) => {
              let { get: n } = t;
              if (n(S) !== !0) {
                e = !1;
                return;
              }
              if (e) return;
              let r = n(C, i);
              if (r == null) return;
              if (n(b, i) === `tpp`) {
                e = !0;
                return;
              }
              let { data: o } = n(h, r);
              o != null &&
                ((e = !0),
                f(a, r).catch(() => {
                  e = !1;
                }));
            }),
            n = a.watch((e) => {
              let { get: t } = e,
                n = t(S) === !0;
              if ((_(a, i, n), !n)) return;
              let r = t(C, i);
              if (r == null || t(T, r) !== !0) return;
              let s = y(r);
              (m(a, s, a.get(p, s)), o(r));
            });
          return () => {
            (t(), n(), _(a, i, !1));
          };
        }),
        (c = [i, o, a]),
        (r[0] = i),
        (r[1] = o),
        (r[2] = a),
        (r[3] = s),
        (r[4] = c))
      : ((s = r[3]), (c = r[4])),
    (0, j.useEffect)(s, c),
    null
  );
}
var A, j;
function M() {
  return (M = e(() => {
    ((A = i()), r(), (j = s()), w(), u(), a(), v(), c(), x(), l(), g(), E());
  }))();
}
function N(e) {
  let t = (0, F.c)(3),
    { children: n } = e,
    [r] = (0, I.useState)(P),
    i;
  return (
    t[0] !== r || t[1] !== n
      ? ((i = (0, L.jsx)(D, { value: r, children: n })), (t[0] = r), (t[1] = n), (t[2] = i))
      : (i = t[2]),
    i
  );
}
function P() {
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
var F, I, L;
function R() {
  return (R = e(() => {
    ((F = i()), (I = s()), O(), (L = o()));
  }))();
}
export { M as i, R as n, k as r, N as t };
//# sourceMappingURL=composer-provider-c4735dd21754.js.map
