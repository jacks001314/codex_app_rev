import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as n, CCt as r, CNt as i, Qst as a, ZSt as o, yCt as s } from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as c,
  Gdn as l,
  Hfn as u,
  Idn as d,
  Ifn as f,
  Ilr as p,
  Jd as m,
  Lfn as h,
  S_n as g,
  T_n as _,
  Vfn as v,
  Yd as y,
  Zdn as b,
  efn as x,
  gur as S,
  hdn as C,
  lpn as w,
  mlr as T,
  nfn as E,
  upn as D,
  vdn as O,
  wLr as k,
  y_n as A,
  zfn as j,
} from "./app-initial-ad16eaadf81f.js";
import { r as M, t as N } from "./space-e4040a2fa18d.js";
var P, F, I, L;
function R() {
  return (R = e(() => {
    ((P = t(i(), 1)),
      o(),
      k(),
      n(),
      j(),
      f(),
      N(),
      w(),
      T(),
      A(),
      m(),
      E(),
      C(),
      (F = r(a, ({ get: e }) => {
        let t = e(d),
          n = e(b).data;
        if (t == null || n == null) {
          let n = e(l)?.items.filter(
            (e) =>
              D(e.page_id) &&
              e.parent == null &&
              e.drive_scope !== `space` &&
              e.access.can_read &&
              e.deleted_at == null,
          );
          if (!n?.length) return;
          t = x(n, []);
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
      (I = r(a, ({ get: e }) => {
        let t = new Set(e(b).data?.items.map((e) => e.root_page_id));
        return e(F)?.filter(({ page: e }) => !t.has(e.page_id));
      })),
      (L = s(a, (e, { get: t }) => {
        let n = t(F);
        if (!t(h).incremental_discovery) return n;
        let r = t(y, e).data,
          i = t(b).data;
        if (i == null || (n == null && r == null)) return;
        let a = t(p),
          o = (0, P.default)(
            [..._(r ?? [], n?.map(({ page: e }) => e) ?? []), ...(n?.map(({ page: e }) => e) ?? [])],
            `page_id`,
          ).map((e) => {
            let n = t(O, e.page_id);
            return n != null && (!n.access.can_read || n.deleted_at != null || g(n, e)) ? n : e;
          }),
          s = x(
            u({ items: o }, t(v, { accountId: t(S), userId: t(c) })).items.filter(
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
//# sourceMappingURL=page-data-e900d9e89edf.js.map
