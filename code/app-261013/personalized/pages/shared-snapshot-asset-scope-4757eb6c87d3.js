import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, QSt as r, wot as i } from "./app-shared-bbfeca5e5737.js";
import { TNr as a, kNr as o } from "./app-initial-5851df3f6cb1.js";
import { o as s } from "./shared-snapshot-asset-reference-33214426cc96.js";
async function c(e, t) {
  let n = await o(),
    r = { ...t.headers };
  return fetch(s(e), {
    ...t,
    headers:
      n == null
        ? r
        : {
            Authorization: `Bearer ${n.accessToken}`,
            ...(n.accountId == null ? {} : { "ChatGPT-Account-Id": n.accountId }),
            ...r,
          },
  });
}
function l() {
  return (l = e(() => {
    a();
  }))();
}
var u;
function d() {
  return (d = e(() => {
    (n(), i(), (u = r(`SharedSnapshotAssetScope`, { parent: t })));
  }))();
}
export { l as i, d as n, c as r, u as t };
//# sourceMappingURL=shared-snapshot-asset-scope-4757eb6c87d3.js.map
