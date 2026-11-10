import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, oSt as r, wot as i } from "./app-shared-bbfeca5e5737.js";
import {
  $Mr as a,
  GMr as o,
  LMr as s,
  MPr as c,
  NPr as l,
  OPr as u,
  kPr as d,
  tNr as f,
  zMr as p,
} from "./app-initial-5851df3f6cb1.js";
var m, h;
function g() {
  return (g = e(() => {
    (n(),
      p(),
      f(),
      i(),
      (m = r(t, ({ get: e }) => {
        let t = e(o);
        if (t != null && e(a) === `allowed`) return e(s, t).data?.accounts[t]?.features;
      })),
      (h = r(t, ({ get: e }) => {
        let t = e(a);
        return t === `loading` || (t === `allowed` && e(s, e(o)).isPending);
      })));
  }))();
}
var _, v, y, b;
function x() {
  return (x = e(() => {
    (n(),
      f(),
      i(),
      u(),
      g(),
      (_ = r(t, ({ get: e }) =>
        e(a) === `denied` ? !1 : e(l) || e(c, `3813052382`) ? !0 : e(d, `3813052382`) ? e(h) : !1,
      )),
      (v = r(t, ({ get: e }) => e(y) && e(d, `3813052382`))),
      (y = r(t, ({ get: e }) => e(m)?.includes(`library_shared_content_available`) === !0)),
      (b = r(t, ({ get: e }) => !e(h) && !e(y))));
  }))();
}
export { b as a, y as i, v as n, _ as r, x as t };
//# sourceMappingURL=library-multiplayer-access-d2184d962fe8.js.map
