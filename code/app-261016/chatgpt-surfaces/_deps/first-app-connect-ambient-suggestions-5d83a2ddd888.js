import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { cmt as t, sct as n } from "./app-shared-2feb3d4c6fcc.js";
import { Pmr as r, SBr as i, Xmr as a, xBr as o } from "./app-initial-ad16eaadf81f.js";
import { a as s, n as c, o as l, t as u } from "./requests-ddc63fb269df.js";
import { a as d, n as f } from "./new-chat-page-suggestions-eligibility-9196b189e944.js";
async function p({ hostId: e, queryClient: n, refreshAppsList: a }) {
  let o = n.getQueriesData({ queryKey: [`apps`, `list`, e] }),
    s = o.some(([, e]) => e != null) ? o.flatMap(([, e]) => e ?? []) : void 0,
    [d] = await Promise.all([a(), i(n, r)]);
  return m({ previousApps: s, nextApps: d })
    ? (await i(n, f(e)),
      await Promise.all(
        g.map((n) => l({ domain: n, hostId: e, projectRoot: t(`~`), mode: `first-plugin-connect` })),
      ),
      await Promise.all([n.invalidateQueries({ queryKey: u }), n.invalidateQueries({ queryKey: c })]),
      d)
    : d;
}
function m({ previousApps: e, nextApps: t }) {
  return e != null && !e.some(h) && t.some(h);
}
function h(e) {
  return e.isAccessible && e.isEnabled;
}
var g;
function _() {
  return (_ = e(() => {
    (n(), d(), s(), o(), a(), (g = [null, `science`]));
  }))();
}
export { p as n, _ as t };
//# sourceMappingURL=first-app-connect-ambient-suggestions-5d83a2ddd888.js.map
