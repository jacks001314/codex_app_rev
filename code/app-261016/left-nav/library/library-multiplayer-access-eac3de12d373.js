import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, CCt as n, Qst as r, ZSt as i } from "./app-shared-2feb3d4c6fcc.js";
import {
  SLr as a,
  dLr as o,
  lBr as s,
  lLr as c,
  mBr as l,
  pBr as u,
  uBr as d,
  wLr as f,
  zRr as p,
} from "./app-initial-ad16eaadf81f.js";
var m, h;
function g() {
  return (g = e(() => {
    (i(),
      o(),
      f(),
      t(),
      (m = n(r, ({ get: e }) => {
        let t = e(p);
        if (t != null && e(a) === `allowed`) return e(c, t).data?.accounts[t]?.features;
      })),
      (h = n(r, ({ get: e }) => {
        let t = e(a);
        return t === `loading` || (t === `allowed` && e(c, e(p)).isPending);
      })));
  }))();
}
var _, v, y, b;
function x() {
  return (x = e(() => {
    (i(),
      f(),
      t(),
      s(),
      g(),
      (_ = n(r, ({ get: e }) =>
        e(a) === `denied` ? !1 : e(l) || e(u, `3813052382`) ? !0 : e(d, `3813052382`) ? e(h) : !1,
      )),
      (v = n(r, ({ get: e }) => e(y) && e(d, `3813052382`))),
      (y = n(r, ({ get: e }) => e(m)?.includes(`library_shared_content_available`) === !0)),
      (b = n(r, ({ get: e }) => !e(h) && !e(y))));
  }))();
}
export { b as a, y as i, v as n, _ as r, x as t };
//# sourceMappingURL=library-multiplayer-access-eac3de12d373.js.map
