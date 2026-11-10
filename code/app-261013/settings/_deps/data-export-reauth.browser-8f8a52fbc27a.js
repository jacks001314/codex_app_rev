import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { EPt as t, TLt as n, fLt as r, pLt as i } from "./app-shared-bbfeca5e5737.js";
import { TNr as a, XNr as o, ZNr as s, kNr as c } from "./app-initial-5851df3f6cb1.js";
import { t as l } from "./session-594d75fbcc25.js";
async function u({ userId: e, accountId: t, signal: n }) {
  try {
    let r = window.sessionStorage.getItem(d);
    if (r == null) return !1;
    let i = await c();
    if (n.aborted || i?.userId == null || i.accountId == null) return !1;
    window.sessionStorage.removeItem(d);
    let a = f.parse(JSON.parse(r)),
      o = Date.now() - a.requestedAtMs;
    return a.userId !== e || a.accountId !== t || i.userId !== e || i.accountId !== t || o < 0 || o > 6e5
      ? !1
      : p.parse(s(i.accessToken)).pwd_auth_time >= a.requestedAtMs;
  } catch {
    return !1;
  }
}
var d, f, p;
function m() {
  return (m = e(() => {
    (o(),
      t(),
      a(),
      l(),
      (d = `codex.browser.pendingDataExport`),
      (f = i({ userId: n(), accountId: n(), requestedAtMs: r() })),
      (p = i({ pwd_auth_time: r() })));
  }))();
}
m();
export { u as consumeDataExportReauthentication };
//# sourceMappingURL=data-export-reauth.browser-8f8a52fbc27a.js.map
