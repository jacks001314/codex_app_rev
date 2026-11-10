import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { HFt as t, ORt as n, VRt as r, kRt as i } from "./app-shared-2feb3d4c6fcc.js";
import { Rzr as a, czr as o, nzr as s, zzr as c } from "./app-initial-ad16eaadf81f.js";
import { n as l } from "./session-7c09e4681e00.js";
async function u({ userId: e, accountId: t, signal: n }) {
  try {
    let r = window.sessionStorage.getItem(d);
    if (r == null) return !1;
    let i = await o();
    if (n.aborted || i?.userId == null || i.accountId == null) return !1;
    window.sessionStorage.removeItem(d);
    let a = f.parse(JSON.parse(r)),
      s = Date.now() - a.requestedAtMs;
    return a.userId !== e || a.accountId !== t || i.userId !== e || i.accountId !== t || s < 0 || s > 6e5
      ? !1
      : p.parse(c(i.accessToken)).pwd_auth_time >= a.requestedAtMs;
  } catch {
    return !1;
  }
}
var d, f, p;
function m() {
  return (m = e(() => {
    (a(),
      t(),
      s(),
      l(),
      (d = `codex.browser.pendingDataExport`),
      (f = i({ userId: r(), accountId: r(), requestedAtMs: n() })),
      (p = i({ pwd_auth_time: n() })));
  }))();
}
m();
export { u as consumeDataExportReauthentication };
//# sourceMappingURL=data-export-reauth.browser-b602a3ab4da9.js.map
