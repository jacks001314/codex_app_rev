import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, aSt as r, cSt as i, fSt as a, wot as o } from "./app-shared-bbfeca5e5737.js";
import { QDr as s, XDr as c, dIn as l, uIn as u } from "./app-initial-5851df3f6cb1.js";
import { O as d, o as f } from "./chatgpt_tpp-f471c7c8ab7d.js";
function p(e, t, n) {
  let r = { identity: t, conversationId: n };
  e.get(_, r) ||
    (e.set(_, r, !0),
    e.get(u).count(`default`, `tpp_onboarding_entered`, { entry: `initial`, experience: `welcome` }));
}
function m(e, t) {
  let n = e.get(h);
  (e.set(h, null), n?.accountId === t.accountId && n.userId === t.userId && s(e, f, { source: `toggle` }));
}
var h, g, _, v;
function y() {
  return (y = e(() => {
    (d(),
      n(),
      l(),
      c(),
      o(),
      (h = a(t, () => null)),
      (g = r(t, (e) => void 0)),
      (_ = r(t, (e) => !1)),
      (v = i(t, (e, { signal: t }) =>
        e == null ? null : { sourceAttributionId: crypto.randomUUID(), engaged$: t(!1) },
      )));
  }))();
}
export { v as a, g as i, p as n, h as o, m as r, y as t };
//# sourceMappingURL=work-onboarding-d9d619bf0210.js.map
