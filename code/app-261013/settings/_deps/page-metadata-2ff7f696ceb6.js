import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Nsn as t, ucn as n, xsn as r } from "./app-initial-5851df3f6cb1.js";
function i(e, r) {
  let i = e.query.getOptions(t, r),
    a = e.queryClient.getQueryState(i.queryKey),
    o = e.query.getData(t, r)?.metadata;
  if (
    a?.status === `success` &&
    !a.isInvalidated &&
    o?.page_id === r &&
    n(o) &&
    o.access.can_read &&
    o.deleted_at == null
  )
    return o;
}
async function a(e, n) {
  return i(e, n) ?? (await e.queryClient.fetchQuery({ ...e.query.getOptions(t, n), staleTime: 0 })).metadata;
}
function o() {
  return (o = e(() => {
    r();
  }))();
}
export { i as n, o as r, a as t };
//# sourceMappingURL=page-metadata-2ff7f696ceb6.js.map
