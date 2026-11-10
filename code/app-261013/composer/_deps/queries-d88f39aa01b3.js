import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Kot as t, USt as n, zSt as r } from "./app-shared-bbfeca5e5737.js";
import { n as i, o as a, s as o, t as s } from "./data-e702d913cf8e.js";
function c({ accountId: e, userId: r, libraryFileId: a, previewVersion: o }) {
  let s = o?.is_current === !1 ? o : void 0;
  return t({
    queryKey: [`library-flashcards`, e, r, a, ...(s == null ? [] : [s.version_number])],
    queryFn: e == null || r == null ? n : ({ signal: t }) => i(a, t, e, s),
    staleTime: 0,
    gcTime: 3e5,
    refetchOnWindowFocus: !1,
  });
}
function l({ accountId: e, userId: r, libraryFileId: i, readOnly: a, previewVersion: s }) {
  return t({
    enabled: s?.is_current !== !1,
    queryKey: [`library-flashcards-access`, e, r, i],
    queryFn:
      e == null || r == null
        ? n
        : ({ signal: t }) => (a == null ? o(i, t, e) : Promise.resolve({ readOnly: a, version: null })),
    staleTime: 0,
    gcTime: 3e5,
    refetchOnWindowFocus: !1,
  });
}
function u() {
  return (u = e(() => {
    (r(), s(), a());
  }))();
}
export { c as n, u as r, l as t };
//# sourceMappingURL=queries-d88f39aa01b3.js.map
