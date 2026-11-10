import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ait as t,
  BLt as n,
  EPt as r,
  TLt as i,
  fLt as a,
  jit as o,
  pLt as s,
} from "./app-shared-bbfeca5e5737.js";
import { TNr as c, XNr as l, ZNr as u, kNr as d } from "./app-initial-5851df3f6cb1.js";
import { n as f, t as p } from "./session-594d75fbcc25.js";
import { t as m } from "./return-url-fc251a8ad74f.js";
import { n as h, r as g, t as _ } from "./account-pin-reset-reauth-state-1be23e019f3f.js";
async function v({ accountId: e, userId: n, challenge: r, isCurrent: i }) {
  let a = null;
  try {
    if ((window.sessionStorage.removeItem(h), !e || !n || !r)) return !1;
    let o = await d();
    if (o?.userId !== n || o.accountId !== e || (i != null && !i())) return !1;
    let s = crypto.randomUUID(),
      c = Date.now(),
      l = m();
    (l.searchParams.set(`view`, `account-pin`), l.searchParams.set(g, s));
    let u = await f(l.toString(), { ...t().auth.reauthenticationParams, force_challenge: `true` });
    if (!u.ok || (i != null && !i())) return !1;
    let p = JSON.stringify({ accountId: e, userId: n, challenge: r, state: s, requestedAtMs: c });
    return (window.sessionStorage.setItem(h, p), (a = p), window.location.assign(u.url), !0);
  } catch {
    try {
      a != null &&
        window.sessionStorage.getItem(`codex.browser.pendingAccountPinReset`) === a &&
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
    let o = await d();
    return o?.userId !== t || o.accountId !== e ? null : (x.parse(u(o.accessToken)), i.challenge);
  } catch {
    return null;
  }
}
var b, x, S;
function C() {
  return (C = e(() => {
    (l(),
      r(),
      c(),
      o(),
      p(),
      _(),
      (b = s({
        userId: i().min(1),
        accountId: i().min(1),
        challenge: i().min(1),
        state: n(),
        requestedAtMs: a().int().nonnegative(),
      })),
      (x = s({ pwd_auth_time: a() })),
      (S = 6e5));
  }))();
}
C();
export { v as beginAccountPinResetReauth, y as consumeAccountPinResetReauth };
//# sourceMappingURL=account-pin-reset-reauth.browser-9a08685aecde.js.map
