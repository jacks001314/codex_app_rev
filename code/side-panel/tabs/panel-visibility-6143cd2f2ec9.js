import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Ft as t,
  ALt as n,
  AO as r,
  BX as i,
  DO as a,
  JPt as o,
  KX as s,
  OO as c,
  QFt as l,
  QPt as u,
  QX as d,
  SFt as f,
  TFt as p,
  VLt as m,
  VX as h,
  WX as g,
  YFt as _,
  ZFt as v,
  _Z as y,
  cLt as b,
  iLt as x,
  lLt as S,
  pZ as C,
  qPt as w,
  qX as T,
  vLt as E,
  xFt as D,
} from "./app-initial-f094ef01c64d.js";
import { i as O, n as k, r as A } from "./open-tab-72525c02e449.js";
function j(e, { browserTabId: r, initiator: l, open: u, source: f }) {
  let m = _(e),
    g = m != null && r != null ? k(r) : void 0,
    C = m != null && g != null ? h(e, g) : null,
    T = e.get(D.activeTab$),
    E = e.get(p.activeTab$),
    A =
      m != null && g == null
        ? a(e.get(n), { bottom: T, right: E }, { bottom: e.get(x), right: e.get(b) && e.get(S) })
        : null,
    j = C?.target ?? A ?? (m != null && g == null ? c(e.get(n), { bottom: T, right: E }) : null),
    N = j === `bottom` ? e.get(x) && t(T) : e.get(b) && e.get(S) && t(E);
  if (u === !1 || (u == null && N)) {
    (o(e, j ?? `right`), m != null && d(m, g));
    return;
  }
  if (j === `bottom`) {
    let t = C?.browserTabId ?? v(T),
      n = C?.tab.tabId ?? T?.tabId;
    if (t == null || n == null) return;
    (!N && m != null && y(m, t, { initiator: l, source: f }), w(e, `bottom`, n));
    return;
  }
  let P = e.get(p.tabs$),
    F = M(P, g),
    I = m == null ? null : s.getBrowserUseActiveBrowserTabId(m),
    L = null;
  if (
    (m != null &&
      (L = F == null ? k(g ?? I ?? void 0) : v(P.find((e) => e.tabId === F) ?? { tabId: F })),
    F == null)
  ) {
    let t = O(e, { browserTabId: L ?? void 0 }),
      n = m == null ? L : (i(e, m) ?? L);
    t && m != null && n != null && !N && y(m, n, { initiator: l, source: f });
    return;
  }
  (m != null && L != null && !N && y(m, L, { initiator: l, source: f }), w(e, `right`, F));
}
function M(e, n) {
  if (n != null) return e.some((e) => e.tabId === n) ? n : null;
  for (let n = e.length - 1; n >= 0; --n) if (t(e[n])) return e[n]?.tabId ?? null;
  return null;
}
var N = e(() => {
  (m(), f(), E(), T(), C(), u(), A(), g(), l(), r());
});
export { j as n, N as t };
//# sourceMappingURL=panel-visibility-6143cd2f2ec9.js.map
