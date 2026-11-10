import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  ISt as t,
  LSt as n,
  MSt as r,
  PSt as i,
  RSt as a,
  Srn as o,
  Trn as s,
  krn as c,
  mrn as l,
  rrn as u,
  tqt as d,
} from "./app-initial-f094ef01c64d.js";
var f = e(() => {});
function p(e, t, n = `same-origin`) {
  let r = new URL(`/`, window.location.origin),
    i = e ?? t,
    a = i?.split(/[?#]/, 1)[0];
  if (
    i == null ||
    a == null ||
    (e != null && !e.startsWith(`/`)) ||
    i.startsWith(`//`) ||
    /[\\\t\r\n]|%(?:5c|09|0a|0d)/i.test(a)
  )
    return r.toString();
  let o, s;
  try {
    ((o = i.startsWith(`/`) ? new URL(i, r) : new URL(i)),
      (s = decodeURIComponent(o.pathname).replace(/\/+$/, ``).toLowerCase()));
  } catch {
    return r.toString();
  }
  return (o.origin !== r.origin &&
    (n !== `auth-server` || ![`http:`, `https:`].includes(o.protocol))) ||
    o.username !== `` ||
    o.password !== `` ||
    s === `/login` ||
    [
      `login`,
      `login_with`,
      `logout`,
      `error`,
      `magic-link`,
      `ext_callback`,
      `ext_callback_refresh`,
    ].some((e) => s === `/auth/${e}`)
    ? r.toString()
    : o.toString();
}
function m(e, t, r, i = `login`) {
  let { provider: a } = n().auth;
  return S(
    `signin/${a}`,
    e,
    i === `login` ? { prompt: `login`, screen_hint: `login_or_signup`, ...t } : t,
    r,
  );
}
function h(e, r) {
  return t(async () => {
    let t = r ?? window.location.origin,
      a = r == null ? g() : [],
      o = a.length > 0 ? await _() : null,
      s = await S(`signout`, t);
    if (!s.ok) return s;
    if (r == null) {
      for (let e of a) {
        if (e.sessionToken === o) continue;
        if (!(await v(e))) return { ok: !1 };
        let n = await S(`signout`, t);
        if (!n.ok) return n;
        s = n;
      }
      window.localStorage.removeItem(k);
    }
    ((0, w.deleteCookie)(`_account_residency_region`),
      (0, w.deleteCookie)(`_account_routing_override`),
      (0, w.deleteCookie)(`_account_is_fedramp`),
      x(),
      i(),
      e());
    let { federatedLogoutUrl: c } = n().auth;
    if (c == null) return s;
    let l = new URL(c);
    return (l.searchParams.set(`returnTo`, window.location.origin), { ok: !0, url: l.toString() });
  });
}
function g() {
  try {
    let e = window.localStorage.getItem(k);
    if (e == null) return [];
    let t = O.safeParse(JSON.parse(e));
    return t.success ? t.data : [];
  } catch {
    return [];
  }
}
async function _() {
  try {
    let e = await fetch(A, {
      cache: `no-store`,
      credentials: `include`,
      headers: { [N]: A, [P]: A },
    });
    if (!e.ok) return null;
    let t = D.safeParse(await e.json());
    return t.success ? t.data.sessionToken : null;
  } catch {
    return null;
  }
}
async function v(e) {
  try {
    if (
      (
        await fetch(j, {
          method: `POST`,
          credentials: `include`,
          headers: { "Content-Type": `application/json`, [M]: e.sessionToken, [N]: j, [P]: j },
          body: JSON.stringify({ workspaceAccountId: e.workspaces?.[0]?.workspaceAccountId }),
        })
      ).ok
    )
      return !0;
  } catch {}
  try {
    let t = g(),
      n = t.filter((t) => t.sessionToken !== e.sessionToken);
    n.length !== t.length && window.localStorage.setItem(k, JSON.stringify(n));
  } catch {
    window.localStorage.removeItem(k);
  } finally {
    y();
  }
  return !1;
}
function y() {
  [
    `oai-account-switch-logout-pending-resume`,
    `oai-account-switch-logout-pending-action`,
    `oai-account-switch-logout-pending-callback-url`,
  ].forEach((e) => {
    document.cookie = e + `=; Max-Age=0; Path=/; SameSite=Lax`;
  });
}
async function b() {
  let e = g()[0];
  if (e != null && !(await v(e)))
    throw Error(`Failed to resume the remaining saved account session`);
}
function x() {
  let e = [`chatgpt.com`].find(
    (e) => window.location.hostname === e || window.location.hostname.endsWith(`.${e}`),
  );
  (0, w.deleteCookie)(`oai-wm`, {
    domain: e == null ? void 0 : `.${e}`,
    path: `/`,
    sameSite: `lax`,
    secure: window.location.protocol === `https:`,
  });
}
async function S(e, t, n, r) {
  try {
    let i = AbortSignal.timeout(15e3),
      a = r == null ? i : AbortSignal.any([r, i]),
      o = await C(a, r);
    if (o == null) return { ok: !1 };
    let s = new URL(`/api/auth/${e}`, window.location.origin);
    s.search = new URLSearchParams(n).toString();
    let c = await fetch(s, {
      method: `POST`,
      credentials: `same-origin`,
      headers: { "Content-Type": `application/x-www-form-urlencoded` },
      body: new URLSearchParams({ csrfToken: o, callbackUrl: t, json: `true` }),
      signal: a,
    });
    if (!c.ok) return { ok: !1 };
    let l = E.safeParse(await c.json());
    if (!l.success) return { ok: !1 };
    let u = new URL(l.data.url, window.location.origin);
    return ![`http:`, `https:`].includes(u.protocol) ||
      u.searchParams.has(`error`) ||
      u.searchParams.has(`csrf`)
      ? { ok: !1 }
      : { ok: !0, url: u.toString() };
  } catch {
    return { ok: !1 };
  }
}
async function C(e, t) {
  let n = `network_error`,
    r;
  try {
    let t = await fetch(`/api/auth/csrf`, {
      credentials: `same-origin`,
      cache: `no-store`,
      signal: e,
    });
    if (t.ok) {
      n = `invalid_response`;
      let e = T.safeParse(await t.json());
      if (e.success) return e.data.csrfToken;
    } else ((n = `http_status`), (r = t.status));
  } catch {}
  if (!t?.aborted)
    try {
      fetch(`/api/auth/_log`, {
        method: `POST`,
        credentials: `same-origin`,
        headers: { "Content-Type": `application/x-www-form-urlencoded` },
        keepalive: !0,
        body: new URLSearchParams({
          level: `error`,
          code: `CLIENT_FETCH_ERROR`,
          client: `true`,
          url: `/api/auth/csrf`,
          error: n,
          ...(r == null ? {} : { status: String(r) }),
        }),
      }).catch(() => {});
    } catch {}
}
var w,
  T,
  E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F = e(() => {
    ((w = d()),
      u(),
      r(),
      a(),
      f(),
      (T = s({ csrfToken: c().min(1) })),
      (E = s({ url: c().min(1) })),
      (D = o({ sessionToken: c().min(1) })),
      (O = l(
        o({
          sessionToken: c().min(1),
          workspaces: l(o({ workspaceAccountId: c().min(1) })).optional(),
        }),
      )),
      (k = `oai/apps/accountSwitchSessions`),
      (A = `/api/auth/session`),
      (j = `/account-switch/switch`),
      (M = `OAI-Account-Switch-Session-Token`),
      (N = `X-OpenAI-Target-Path`),
      (P = `X-OpenAI-Target-Route`));
  });
export { m as a, b as i, p as n, h as o, F as r, y as t };
//# sourceMappingURL=session-c33967fa604f.js.map
