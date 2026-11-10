import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { irt as t, qft as n, rrt as r, rst as i, srt as a } from "./app-shared-bbfeca5e5737.js";
import { BPr as o, Uur as s, VPr as c, idr as l } from "./app-initial-5851df3f6cb1.js";
import { a as u, n as d } from "./new-chat-page-suggestions-eligibility-15ea6f3b5a27.js";
async function f({ hostId: e, queryClient: i, refreshAppsList: a }) {
  let o = i.getQueriesData({ queryKey: [`apps`, `list`, e] }),
    l = o.some(([, e]) => e != null) ? o.flatMap(([, e]) => e ?? []) : void 0,
    [u] = await Promise.all([a(), c(i, s)]);
  return p({ previousApps: l, nextApps: u })
    ? (await c(i, d(e)),
      await Promise.all(
        h.map((t) =>
          r(`ambient-suggestions-refresh`, {
            params: { domain: t, hostId: e, projectRoot: n(`~`), mode: `first-plugin-connect` },
          }),
        ),
      ),
      await Promise.all([
        i.invalidateQueries({ queryKey: t(`ambient-suggestions`) }),
        i.invalidateQueries({ queryKey: t(`ambient-suggestions-refresh`) }),
      ]),
      u)
    : u;
}
function p({ previousApps: e, nextApps: t }) {
  return e != null && !e.some(m) && t.some(m);
}
function m(e) {
  return e.isAccessible && e.isEnabled;
}
var h;
function g() {
  return (g = e(() => {
    (i(), u(), o(), a(), l(), (h = [null, `science`]));
  }))();
}
export { f as n, g as t };
//# sourceMappingURL=first-app-connect-ambient-suggestions-97c2f684e2f1.js.map
