import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  BWt as n,
  C3n as r,
  I3n as i,
  LWt as a,
  Mfr as o,
  Nfr as s,
  OCr as c,
  Pfr as l,
  QSt as u,
  RCr as d,
  RWt as f,
  _wt as p,
  b3n as m,
  cwn as h,
  dwn as g,
  dxn as _,
  eCt as v,
  gyt as y,
  hwn as b,
  hyt as x,
  kfr as S,
  nGt as C,
  oxn as w,
  sGt as T,
  sxn as E,
  vwt as D,
  vyt as O,
  w3n as k,
  xwt as A,
} from "./app-initial-5851df3f6cb1.js";
function j(e, { browserTabId: t, initiator: i, open: s, source: d }) {
  let f = S(e),
    g = f != null && t != null ? u(t) : void 0,
    _ = f != null && g != null ? D(e, g) : null,
    C = e.get(h.activeTab$),
    O = e.get(b.activeTab$),
    A =
      f != null && g == null
        ? x(e.get(c), { bottom: C, right: O }, { bottom: e.get(m), right: e.get(r) && e.get(k) })
        : null,
    j = _?.target ?? A ?? (f != null && g == null ? y(e.get(c), { bottom: C, right: O }) : null),
    N = j === `bottom` ? e.get(m) && l(C) : e.get(r) && e.get(k) && l(O);
  if (s === !1 || (s == null && N)) {
    (E(e, j ?? `right`), f != null && n(f, g));
    return;
  }
  if (j === `bottom`) {
    let t = _?.browserTabId ?? o(C),
      n = _?.tab.tabId ?? C?.tabId;
    if (t == null || n == null) return;
    (!N && f != null && T(f, t, { initiator: i, source: d }), w(e, `bottom`, n));
    return;
  }
  let P = e.get(b.tabs$),
    F = M(P, g),
    I = f == null ? null : a.getBrowserUseActiveBrowserTabId(f),
    L = null;
  if (
    (f != null && (L = F == null ? u(g ?? I ?? void 0) : o(P.find((e) => e.tabId === F) ?? { tabId: F })),
    F == null)
  ) {
    let t = v(e, { browserTabId: L ?? void 0 }),
      n = f == null ? L : (p(e, f) ?? L);
    t && f != null && n != null && !N && T(f, n, { initiator: i, source: d });
    return;
  }
  (f != null && L != null && !N && T(f, L, { initiator: i, source: d }), w(e, `right`, F));
}
function M(e, t) {
  if (t != null) return e.some((e) => e.tabId === t) ? t : null;
  for (let t = e.length - 1; t >= 0; --t) if (l(e[t])) return e[t]?.tabId ?? null;
  return null;
}
function N() {
  return (N = e(() => {
    (d(), g(), i(), f(), C(), _(), t(), A(), s(), O());
  }))();
}
export { j as n, N as t };
//# sourceMappingURL=panel-visibility-3acfd0824fb8.js.map
