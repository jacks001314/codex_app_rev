import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pit as t, jit as n } from "./app-shared-2feb3d4c6fcc.js";
import {
  Ast as r,
  Ddn as i,
  Hlr as a,
  Ulr as o,
  Vdn as s,
  gur as c,
  hdn as l,
  jst as u,
} from "./app-initial-ad16eaadf81f.js";
async function d(e, t, r, a, l, d) {
  if (!l()) return;
  let f = e.get(c);
  if (f == null) return;
  let p, m;
  if (a.space_id != null)
    try {
      let t = await e.queryClient.fetchQuery({ ...e.query.getOptions(s, a.space_id), staleTime: 0 });
      if (t.root_page_id == null) throw Error(`space_unavailable`);
      p = t.root_page_id;
    } catch (e) {
      if (!(e instanceof n) || ![403, 404, 410].includes(e.status)) throw e;
      m = e;
    }
  if (p == null) {
    if (!l()) return;
    let n = await e.queryClient.fetchQuery({ ...e.query.getOptions(i, a.page_id), staleTime: 0 });
    if (n.metadata.page_id !== a.page_id || !n.metadata.access.can_read || n.metadata.deleted_at != null)
      throw m ?? Error(`page_unavailable`);
    if (l()) {
      if (d != null) {
        d(a.page_id);
        return;
      }
      let n = { spaceSidebarAccountId: f, sidebarArea: e.get(o) ? `space` : void 0 };
      t(`/space/${a.page_id}`, { state: n });
    }
    return;
  }
  if (l()) {
    if (d != null) {
      d(a.page_id);
      return;
    }
    u(e, t, r, f, p, a.page_id);
  }
}
function f() {
  return (f = e(() => {
    (a(), t(), r(), l());
  }))();
}
export { d as n, f as t };
//# sourceMappingURL=global-search-navigation-99723fc7d7ee.js.map
