import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  DCt as n,
  Qst as r,
  RFt as i,
  ZSt as a,
  ast as o,
  ist as s,
  zFt as c,
} from "./app-shared-2feb3d4c6fcc.js";
async function l(e) {
  if (typeof e.initialUpdate == `string`) return e.initialUpdate;
  if (s?.pageCreationIntents?.readInitialUpdate == null)
    throw Error(`native_page_creation_storage_unavailable`);
  return s.pageCreationIntents.readInitialUpdate({
    accountId: e.accountId,
    userId: e.userId,
    localPageId: e.localPageId,
  });
}
async function u(e) {
  if (s?.pageCreationIntents == null) throw Error(`native_page_creation_storage_unavailable`);
  await s.pageCreationIntents.update({ kind: `save`, entry: e });
}
async function d(e, t) {
  if (s?.pageCreationIntents == null) throw Error(`native_page_creation_storage_unavailable`);
  await s.pageCreationIntents.update({
    kind: `progress`,
    accountId: e.accountId,
    userId: e.userId,
    localPageId: e.localPageId,
    progress: t,
  });
}
async function f(e, t, n) {
  if (s?.pageCreationIntents == null) throw Error(`native_page_creation_storage_unavailable`);
  await s.pageCreationIntents.update({
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
      s?.pageCreationIntents != null &&
      (await s.pageCreationIntents.update({
        kind: `forget`,
        accountId: e.accountId,
        userId: e.userId,
        localPageId: e.localPageId,
      }),
      !0)
    );
  } catch (e) {
    return (
      c.warning(`Could not remove completed Page creation intent`, { safe: {}, sensitive: { error: e } }),
      !1
    );
  }
}
var m;
function h() {
  return (h = e(() => {
    (a(),
      o(),
      t(),
      i(),
      (m = n(
        r,
        () => null,
        ({ set: e }) => {
          let t = s?.pageCreationIntents;
          if (t == null) {
            e([]);
            return;
          }
          let n = !0,
            r = t.subscribe((t) => {
              n && e(t);
            });
          return (
            Promise.resolve(r).catch(() => {
              n && e(null);
            }),
            () => {
              ((n = !1), r[Symbol.dispose]());
            }
          );
        },
      )));
  }))();
}
export { l as a, m as i, p as n, u as o, h as r, d as s, f as t };
//# sourceMappingURL=creation-intents-51ddf095b952.js.map
