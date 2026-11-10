import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $xt as t, Pxt as n } from "./app-shared-bbfeca5e5737.js";
import { Ymr as r, ehr as i, tln as a, wpt as o } from "./app-initial-5851df3f6cb1.js";
async function s(e, t, n) {
  (await r.safePatch(`/files/library/files/{library_file_id}/move`, {
    additionalHeaders: { "ChatGPT-Account-ID": e.value.accountId },
    parameters: { path: { library_file_id: t } },
    requestBody: { directory_id: n },
  }),
    await e.queryClient.invalidateQueries({ queryKey: [`library-api`, e.value.accountId, e.value.userId] }));
}
var c;
function l() {
  return (l = e(() => {
    (n(),
      i(),
      o(),
      (c = t(a, ({ scope: e }) => ({
        queryKey: [`library-api`, e.value.accountId, e.value.userId, `favorite-folders`],
        staleTime: 3e4,
        queryFn: async ({ signal: t }) =>
          (
            await r.safeGet(`/files/library/nodes`, {
              additionalHeaders: { "ChatGPT-Account-ID": e.value.accountId },
              parameters: {
                query: {
                  parent_directory_id: null,
                  cursor: null,
                  include_files: !1,
                  hydrate_folder_thumbnails: !0,
                },
              },
              signal: t,
            })
          ).items
            .filter(
              (e) =>
                e.kind === `directory` &&
                e.is_root !== !0 &&
                e.direct_share_id == null &&
                e.shared_by == null &&
                e.access_kind !== `shared` &&
                e.access_kind !== `mounted` &&
                !e.id.startsWith(`library:`) &&
                !e.id.startsWith(`external-`) &&
                e.name.trim().length > 0,
            )
            .sort((e, t) => e.name.localeCompare(t.name)),
      }))));
  }))();
}
export { l as n, s as r, c as t };
//# sourceMappingURL=favorite-folders-6a0ba920b2d1.js.map
