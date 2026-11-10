import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { hrt as t, vrt as n } from "./app-shared-bbfeca5e5737.js";
import {
  Dor as r,
  Nsn as i,
  eor as a,
  qsn as o,
  tor as s,
  vot as c,
  xsn as l,
  yot as u,
} from "./app-initial-5851df3f6cb1.js";
async function d(e, n, a, c, l, d) {
  if (!l()) return;
  let f = e.get(r);
  if (f == null) return;
  let p, m;
  if (c.space_id != null)
    try {
      let t = await e.queryClient.fetchQuery({ ...e.query.getOptions(o, c.space_id), staleTime: 0 });
      if (t.root_page_id == null) throw Error(`space_unavailable`);
      p = t.root_page_id;
    } catch (e) {
      if (!(e instanceof t) || ![403, 404, 410].includes(e.status)) throw e;
      m = e;
    }
  if (p == null) {
    if (!l()) return;
    let t = await e.queryClient.fetchQuery({ ...e.query.getOptions(i, c.page_id), staleTime: 0 });
    if (t.metadata.page_id !== c.page_id || !t.metadata.access.can_read || t.metadata.deleted_at != null)
      throw m ?? Error(`page_unavailable`);
    if (l()) {
      if (d != null) {
        d(c.page_id);
        return;
      }
      let t = { spaceSidebarAccountId: f, sidebarArea: e.get(s) ? `space` : void 0 };
      n(`/space/${c.page_id}`, { state: t });
    }
    return;
  }
  if (l()) {
    if (d != null) {
      d(c.page_id);
      return;
    }
    u(e, n, a, f, p, c.page_id);
  }
}
function f() {
  return (f = e(() => {
    (a(), n(), c(), l());
  }))();
}
export { d as n, f as t };
//# sourceMappingURL=global-search-navigation-39a42b5754ca.js.map
