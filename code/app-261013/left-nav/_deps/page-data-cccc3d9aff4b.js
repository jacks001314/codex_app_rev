import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as n, Pxt as r, nSt as i, oSt as a, sMt as o, wot as s } from "./app-shared-bbfeca5e5737.js";
import {
  Dor as c,
  Ear as l,
  Gcn as u,
  Hcn as d,
  Hsn as f,
  Jar as p,
  Kcn as m,
  Kd as h,
  Ucn as g,
  XMr as _,
  Zsn as v,
  ccn as y,
  ehn as b,
  hln as x,
  mln as S,
  ocn as C,
  ohn as w,
  qcn as T,
  qd as E,
  rcn as D,
  rhn as O,
  tNr as k,
  wsn as A,
  xsn as j,
} from "./app-initial-5851df3f6cb1.js";
import { r as M, t as N } from "./space-1fd481862d3e.js";
var P, F, I, L;
function R() {
  return (R = e(() => {
    ((P = t(o(), 1)),
      r(),
      k(),
      s(),
      u(),
      d(),
      N(),
      S(),
      l(),
      b(),
      h(),
      y(),
      j(),
      (F = a(n, ({ get: e }) => {
        let t = e(f),
          n = e(D).data;
        if (t == null || n == null) {
          let n = e(v)?.items.filter(
            (e) =>
              x(e.page_id) &&
              e.parent == null &&
              e.drive_scope !== `space` &&
              e.access.can_read &&
              e.deleted_at == null,
          );
          if (!n?.length) return;
          t = C(n, []);
        }
        let r = new Map(n?.items.map((e) => [e.id, e])),
          i = new Set(e(M).map((e) => e.id)),
          a = new Set(t.allLoosePages.map((e) => e.page_id));
        return [...t.pagesById.values()]
          .filter((e) => !i.has(e.page_id))
          .map((e) => ({
            page: e,
            personal: a.has(e.page_id),
            parentSpace: [...(t.spaceIdsByPageId.get(e.page_id) ?? [])]
              .map((e) => r.get(e))
              .find((e) => e != null),
          }))
          .sort((e, t) => Date.parse(t.page.updated_at) - Date.parse(e.page.updated_at));
      })),
      (I = a(n, ({ get: e }) => {
        let t = new Set(e(D).data?.items.map((e) => e.root_page_id));
        return e(F)?.filter(({ page: e }) => !t.has(e.page_id));
      })),
      (L = i(n, (e, { get: t }) => {
        let n = t(F);
        if (!t(g).incremental_discovery) return n;
        let r = t(E, e).data,
          i = t(D).data;
        if (i == null || (n == null && r == null)) return;
        let a = t(p),
          o = (0, P.default)(
            [...w(r ?? [], n?.map(({ page: e }) => e) ?? []), ...(n?.map(({ page: e }) => e) ?? [])],
            `page_id`,
          ).map((e) => {
            let n = t(A, e.page_id);
            return n != null && (!n.access.can_read || n.deleted_at != null || O(n, e)) ? n : e;
          }),
          s = C(
            T({ items: o }, t(m, { accountId: t(c), userId: t(_) })).items.filter(
              (e) => e.access.can_read && e.deleted_at == null && (a || e.site_project_id == null),
            ),
            i.items,
          ),
          l = new Set(s.allLoosePages.map((e) => e.page_id));
        return [...s.pagesById.values()]
          .map((e) => ({
            page: e,
            personal: l.has(e.page_id),
            parentSpace: i.items.find((t) => s.spaceIdsByPageId.get(e.page_id)?.has(t.id)),
          }))
          .sort((e, t) => Date.parse(t.page.updated_at) - Date.parse(e.page.updated_at));
      })));
  }))();
}
export { R as i, I as n, F as r, L as t };
//# sourceMappingURL=page-data-cccc3d9aff4b.js.map
