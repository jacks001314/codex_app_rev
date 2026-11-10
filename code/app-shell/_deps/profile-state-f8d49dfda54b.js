import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  O3t as n,
  Vnn as r,
  a3t as i,
  f6t as a,
  hz as o,
  mz as s,
  o3t as c,
} from "./app-initial-f094ef01c64d.js";
function l() {
  return (
    h ??
    ((g = !1),
    (h = f().catch(() => {
      ((h = null), (g = !0), d(null));
    })),
    h)
  );
}
function u() {
  g && l();
}
function d(e) {
  if (!(0, p.default)(m, e)) {
    m = e;
    for (let t of _) t(e);
  }
}
async function f() {
  let e = s?.browserHost;
  if (e == null) return;
  let t = null,
    n = !1,
    r = () => {
      ((n = !0), t?.[Symbol.dispose](), (t = null), window.removeEventListener(`pagehide`, r));
    };
  window.addEventListener(`pagehide`, r, { once: !0 });
  try {
    ((t = await e.subscribeExtensionProfile((e) => {
      n || d(e);
    })),
      n && r());
  } catch (e) {
    throw (r(), e);
  }
}
var p,
  m,
  h,
  g,
  _,
  v,
  y = e(() => {
    ((p = t(r(), 1)),
      n(),
      o(),
      c(),
      (m = null),
      (h = null),
      (g = !1),
      (_ = new Set()),
      (v = a(
        i,
        () => m,
        ({ set: e }) => (
          _.add(e),
          () => {
            _.delete(e);
          }
        ),
      )));
  });
export { u as a, d as i, y as n, l as r, v as t };
//# sourceMappingURL=profile-state-f8d49dfda54b.js.map
