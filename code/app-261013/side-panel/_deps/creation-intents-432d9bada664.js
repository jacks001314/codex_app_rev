import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CPt as t,
  Cot as n,
  Kat as r,
  Pxt as i,
  SPt as a,
  qat as o,
  uSt as s,
  wot as c,
} from "./app-shared-bbfeca5e5737.js";
async function l(e) {
  if (typeof e.initialUpdate == `string`) return e.initialUpdate;
  if (r?.pageCreationIntents?.readInitialUpdate == null)
    throw Error(`native_page_creation_storage_unavailable`);
  return r.pageCreationIntents.readInitialUpdate({
    accountId: e.accountId,
    userId: e.userId,
    localPageId: e.localPageId,
  });
}
async function u(e) {
  if (r?.pageCreationIntents == null) throw Error(`native_page_creation_storage_unavailable`);
  await r.pageCreationIntents.update({ kind: `save`, entry: e });
}
async function d(e, t) {
  if (r?.pageCreationIntents == null) throw Error(`native_page_creation_storage_unavailable`);
  await r.pageCreationIntents.update({
    kind: `progress`,
    accountId: e.accountId,
    userId: e.userId,
    localPageId: e.localPageId,
    progress: t,
  });
}
async function f(e, t, n) {
  if (r?.pageCreationIntents == null) throw Error(`native_page_creation_storage_unavailable`);
  await r.pageCreationIntents.update({
    kind: t,
    accountId: e.accountId,
    userId: e.userId,
    localPageId: e.localPageId,
    updateIds: n,
  });
}
async function p(e) {
  try {
    return (
      r?.pageCreationIntents != null &&
      (await r.pageCreationIntents.update({
        kind: `forget`,
        accountId: e.accountId,
        userId: e.userId,
        localPageId: e.localPageId,
      }),
      !0)
    );
  } catch (e) {
    return (
      t.warning(`Could not remove completed Page creation intent`, { safe: {}, sensitive: { error: e } }),
      !1
    );
  }
}
var m;
function h() {
  return (h = e(() => {
    (i(),
      o(),
      c(),
      a(),
      (m = s(
        n,
        () => null,
        ({ set: e }) => {
          let t = r?.pageCreationIntents;
          if (t == null) {
            e([]);
            return;
          }
          let n = !0,
            i = t.subscribe((t) => {
              n && e(t);
            });
          return (
            Promise.resolve(i).catch(() => {
              n && e(null);
            }),
            () => {
              ((n = !1), i[Symbol.dispose]());
            }
          );
        },
      )));
  }))();
}
export { l as a, m as i, p as n, u as o, h as r, d as s, f as t };
//# sourceMappingURL=creation-intents-432d9bada664.js.map
