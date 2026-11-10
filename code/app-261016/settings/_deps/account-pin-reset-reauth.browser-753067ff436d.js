import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  HFt as t,
  ORt as n,
  VRt as r,
  Xat as i,
  Yat as a,
  kRt as o,
  nzt as s,
} from "./app-shared-2feb3d4c6fcc.js";
import { Rzr as c, czr as l, nzr as u, zzr as d } from "./app-initial-ad16eaadf81f.js";
import { n as f, r as p } from "./session-7c09e4681e00.js";
import { t as m } from "./return-url-fc251a8ad74f.js";
import { n as h, r as g, t as _ } from "./account-pin-reset-reauth-state-1be23e019f3f.js";
async function v({ accountId: e, userId: t, challenge: n, isCurrent: r }) {
  let i = null;
  try {
    if ((window.sessionStorage.removeItem(h), !e || !t || !n)) return !1;
    let o = await l();
    if (o?.userId !== t || o.accountId !== e || (r != null && !r())) return !1;
    let s = crypto.randomUUID(),
      c = Date.now(),
      u = m();
    (u.searchParams.set(`view`, `account-pin`), u.searchParams.set(g, s));
    let d = await p(u.toString(), { ...a().auth.reauthenticationParams, force_challenge: `true` });
    if (!d.ok || (r != null && !r())) return !1;
    let f = JSON.stringify({ accountId: e, userId: t, challenge: n, state: s, requestedAtMs: c });
    return (window.sessionStorage.setItem(h, f), (i = f), window.location.assign(d.url), !0);
  } catch {
    try {
      i != null &&
        window.sessionStorage.getItem(`codex.browser.pendingAccountPinReset`) === i &&
        window.sessionStorage.removeItem(h);
    } catch {}
    return !1;
  }
}
async function y({ accountId: e, userId: t, state: n }) {
  try {
    let r = window.sessionStorage.getItem(h);
    if (r == null) return null;
    window.sessionStorage.removeItem(h);
    let i = b.parse(JSON.parse(r)),
      a = Date.now() - i.requestedAtMs;
    if (i.state !== n || i.userId !== t || i.accountId !== e || a < 0 || a > S) return null;
    let o = await l();
    return o?.userId !== t || o.accountId !== e ? null : (x.parse(d(o.accessToken)), i.challenge);
  } catch {
    return null;
  }
}
var b, x, S;
function C() {
  return (C = e(() => {
    (c(),
      t(),
      u(),
      i(),
      f(),
      _(),
      (b = o({
        userId: r().min(1),
        accountId: r().min(1),
        challenge: r().min(1),
        state: s(),
        requestedAtMs: n().int().nonnegative(),
      })),
      (x = o({ pwd_auth_time: n() })),
      (S = 6e5));
  }))();
}
C();
export { v as beginAccountPinResetReauth, y as consumeAccountPinResetReauth };
//# sourceMappingURL=account-pin-reset-reauth.browser-753067ff436d.js.map
