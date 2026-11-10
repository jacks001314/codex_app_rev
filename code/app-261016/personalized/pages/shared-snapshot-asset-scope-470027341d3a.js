import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, ZSt as r, _wt as i } from "./app-shared-2feb3d4c6fcc.js";
import { czr as a, nzr as o } from "./app-initial-ad16eaadf81f.js";
import { o as s } from "./shared-snapshot-asset-reference-33214426cc96.js";
async function c(e, t) {
  let n = await a(),
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
    o();
  }))();
}
var u;
function d() {
  return (d = e(() => {
    (r(), t(), (u = i(`SharedSnapshotAssetScope`, { parent: n })));
  }))();
}
export { l as i, d as n, c as r, u as t };
//# sourceMappingURL=shared-snapshot-asset-scope-470027341d3a.js.map
