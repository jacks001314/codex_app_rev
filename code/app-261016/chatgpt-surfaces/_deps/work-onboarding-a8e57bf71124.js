import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, SCt as r, TCt as i, ZSt as a, kCt as o } from "./app-shared-2feb3d4c6fcc.js";
import { Rzn as s, xMr as c, yMr as l, zzn as u } from "./app-initial-ad16eaadf81f.js";
import { O as d, o as f } from "./chatgpt_tpp-f471c7c8ab7d.js";
function p(e, t, n) {
  let r = { identity: t, conversationId: n };
  e.get(_, r) ||
    (e.set(_, r, !0),
    e.get(s).count(`default`, `tpp_onboarding_entered`, { entry: `initial`, experience: `welcome` }));
}
function m(e, t) {
  let n = e.get(h);
  (e.set(h, null), n?.accountId === t.accountId && n.userId === t.userId && c(e, f, { source: `toggle` }));
}
var h, g, _, v;
function y() {
  return (y = e(() => {
    (d(),
      a(),
      u(),
      l(),
      t(),
      (h = o(n, () => null)),
      (g = r(n, (e) => void 0)),
      (_ = r(n, (e) => !1)),
      (v = i(n, (e, { signal: t }) =>
        e == null ? null : { sourceAttributionId: crypto.randomUUID(), engaged$: t(!1) },
      )));
  }))();
}
export { v as a, g as i, p as n, h as o, m as r, y as t };
//# sourceMappingURL=work-onboarding-a8e57bf71124.js.map
