const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./chatgpt-request-fa6ed23073b0.js",
      "./app-initial-5851df3f6cb1.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-e7c27dd40beb.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as t,
  Ait as n,
  BLt as r,
  EPt as i,
  Jrt as a,
  TLt as o,
  eLt as s,
  fPt as c,
  jit as l,
  pIt as u,
  pLt as d,
  pPt as f,
  pRt as p,
} from "./app-shared-bbfeca5e5737.js";
import {
  AMn as m,
  ANr as h,
  AP as g,
  DN as _,
  EN as ee,
  FP as v,
  GP as y,
  IP as b,
  JN as x,
  LNr as S,
  MP as te,
  NP as C,
  OP as ne,
  RP as w,
  S2n as re,
  TNr as ie,
  WP as ae,
  YN as T,
  _Nr as oe,
  jMn as se,
  kP as E,
  x2n as ce,
} from "./app-initial-5851df3f6cb1.js";
import { r as D } from "./datadog-rum.browser-33db5871e35e.js";
function O() {
  return {
    has_web_push_capabilities:
      typeof navigator < `u` &&
      `serviceWorker` in navigator &&
      typeof Notification < `u` &&
      typeof PushManager < `u`,
    web_push_notification_permission: typeof Notification > `u` ? `unsupported` : Notification.permission,
  };
}
async function k() {
  return O().has_web_push_capabilities
    ? ((await (await navigator.serviceWorker.getRegistration(j))?.pushManager.getSubscription()) ?? null)
    : null;
}
async function A() {
  M?.abort();
  try {
    let e = await k();
    if (e == null) return;
    let t = e.toJSON().keys?.auth;
    (t != null &&
      (await c(
        async () => {
          let { Request: e } = await import(`./chatgpt-request-fa6ed23073b0.js`);
          return { Request: e };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5]),
        import.meta.url,
      )
        .then(({ Request: e }) =>
          e.safeDelete(`/notifications/subscription/deregister`, {
            requestBody: { platform: `web`, token: t },
            signal: AbortSignal.timeout(5e3),
          }),
        )
        .catch(() => {})),
      await e.unsubscribe());
  } catch {}
}
var j, M;
function N() {
  return (N = e(() => {
    (f(), (j = `/service-worker/events.js`), (M = null));
  }))();
}
function le({ reason: e, source: t }) {
  let n = null;
  try {
    n = new URL(document.referrer);
  } catch {}
  let r = {
    capturedAt: new Date().toISOString(),
    correlationId: crypto.randomUUID(),
    originHost: `<redacted>`,
    originPath: I(new URL(window.location.href)),
    reason: e.slice(0, 96),
    referrerHost: n == null ? null : `<redacted>`,
    referrerPath: n == null ? null : I(n),
    source: t.slice(0, 128),
  };
  try {
    (0, L.setCookie)(`oai-logout-debug-context`, JSON.stringify(r), {
      maxAge: R,
      path: `/`,
      sameSite: `lax`,
    });
  } catch {}
  return (
    r.capturedAt,
    r.correlationId,
    r.originHost,
    r.originPath,
    r.reason,
    r.referrerHost,
    r.referrerPath,
    r.source,
    {
      logout_correlation_id: r.correlationId,
      logout_reason: r.reason,
      logout_source: r.source,
      logout_origin_host: r.originHost,
    }
  );
}
function ue() {
  try {
    let e = (0, L.getCookie)(`oai-logout-debug-context`);
    if (typeof e != `string`) return null;
    let t = z.safeParse(JSON.parse(e));
    if (!t.success) return null;
    let n = t.data,
      r = Date.now() - Date.parse(n.capturedAt);
    return r < 0 || r >= R * 1e3
      ? null
      : {
          logout_correlation_id: n.correlationId,
          logout_reason: n.reason,
          logout_source: n.source,
          logout_origin_host: n.originHost,
        };
  } catch {
    return null;
  }
}
function P() {
  try {
    let e = (0, L.getCookie)(`oai-logout-debug-context`);
    return typeof e == `string` ? e : null;
  } catch {
    return null;
  }
}
function F(e) {
  try {
    let t = (0, L.getCookie)(`oai-logout-debug-context`);
    if ((typeof t == `string` ? t : null) !== e) return;
    (0, L.deleteCookie)(`oai-logout-debug-context`, { path: `/` });
  } catch {}
}
function I(e) {
  return `/<redacted>${e.search ? `?<redacted>` : ``}${e.hash ? `#<redacted>` : ``}`;
}
var L, R, z;
function B() {
  return (B = e(() => {
    ((L = a()),
      i(),
      D(),
      (R = 300),
      (z = d({
        capturedAt: p(),
        correlationId: r(),
        originHost: t(`<redacted>`),
        reason: t(`add_email_otp_verification`),
        source: t(`settings.add-email-otp-modal`),
      })));
  }))();
}
async function V(e, t, r, i, a, o) {
  let s = null;
  try {
    o == null ? window.location.pathname === oe(`logout`).pathname && (s = ue()) : (s = le(o));
  } catch {}
  let c = P(),
    l = () => {
      F(c);
    },
    u = b(t) ? (a ?? null) : null,
    d = (e = !1) => {
      if (!b(t)) return !0;
      let n = te(u) != null;
      return (n || (e ? E(u) : g(u)), n);
    },
    f = (e = !1) => !r?.aborted && d(e),
    p = async (e) => (i == null ? e : !f(!0) || !(await i(e.url)) ? { ok: !1 } : e);
  return f()
    ? (await A(),
      S(async () => {
        if (!f(!0)) return { ok: !1 };
        let i = t ?? window.location.origin,
          a = t == null ? H() : [],
          o = a.length > 0 ? await fe() : null;
        if (!f(!0) || (u != null && !(await pe(u, r))) || !f(!0)) return { ok: !1 };
        let c = await y(`signout`, i, void 0, r, b(t) ? () => d(!0) : void 0);
        if (!c.ok) return c;
        if (
          (u != null && de(u.storedSessionToken),
          !f(!0) || (await Promise.all([m({ includePersisted: !0 }).catch(() => {}), ce(), ee()]), !f(!0)))
        )
          return { ok: !1 };
        if (t == null) {
          for (let e of a) {
            if (r?.aborted) return { ok: !1 };
            if (e.sessionToken === o) continue;
            if (!(await U(e, r))) return { ok: !1 };
            let t = await y(`signout`, i, void 0, r);
            if (!t.ok) return t;
            c = t;
          }
          window.localStorage.removeItem(q);
        }
        if (
          ((0, W.deleteCookie)(`_account_residency_region`),
          (0, W.deleteCookie)(`_account_routing_override`),
          (0, W.deleteCookie)(`_account_is_fedramp`),
          h(),
          await e(),
          !f(!0))
        )
          return { ok: !1 };
        x();
        let { federatedLogoutUrl: g } = n().auth;
        if (g == null) return (b(t) && w(u, `ready`), f(!0) ? (l(), p(c)) : { ok: !1 });
        let _ = new URL(g);
        _.searchParams.has(`returnTo`) || _.searchParams.set(`returnTo`, window.location.origin);
        for (let [e, t] of Object.entries(s ?? {})) _.searchParams.set(e, t);
        return (b(t) && w(u, `awaiting_root`), f(!0) ? (l(), p({ ok: !0, url: _.toString() })) : { ok: !1 });
      }))
    : { ok: !1 };
}
function H() {
  try {
    let e = window.localStorage.getItem(q);
    if (e == null) return [];
    let t = K.safeParse(JSON.parse(e));
    return t.success ? t.data : [];
  } catch {
    return [];
  }
}
function de(e) {
  let t = H(),
    n = t.filter((t) => t.sessionToken !== e);
  if (n.length !== t.length)
    try {
      window.localStorage.setItem(q, JSON.stringify(n));
    } catch {}
}
async function fe() {
  try {
    let e = await fetch(J, { cache: `no-store`, credentials: `include`, headers: { [Z]: J, [Q]: J } });
    if (!e.ok) return null;
    let t = G.safeParse(await e.json());
    return t.success ? t.data.sessionToken : null;
  } catch {
    return null;
  }
}
async function U(e, t, n, r = e.sessionToken) {
  try {
    let n = await fetch(Y, {
      method: `POST`,
      credentials: `include`,
      signal: t,
      headers: { "Content-Type": `application/json`, [X]: e.sessionToken, [Z]: Y, [Q]: Y },
      body: JSON.stringify({ workspaceAccountId: e.workspaces?.[0]?.workspaceAccountId }),
    });
    if (t?.aborted) return !1;
    if (n.ok) return !0;
  } catch {
    if (t?.aborted) return !1;
  }
  if (t?.aborted) return !1;
  if (n != null && !v(n)) return (E(n), !1);
  try {
    let e = H(),
      t = e.filter((e) => e.sessionToken !== r);
    t.length !== e.length && window.localStorage.setItem(q, JSON.stringify(t));
  } catch {
    window.localStorage.removeItem(q);
  } finally {
    n == null ? ne() : E(n);
  }
  return !1;
}
async function pe(e, t) {
  return U(
    e.selectedWorkspaceAccountId == null
      ? { sessionToken: e.selectedSessionToken }
      : {
          sessionToken: e.selectedSessionToken,
          workspaces: [{ workspaceAccountId: e.selectedWorkspaceAccountId }],
        },
    t,
    e,
    e.storedSessionToken,
  );
}
async function me(e, t, n) {
  if (e?.aborted) return;
  let r = H()[0] != null;
  if (!r && n == null) return;
  let i = () => (t == null || v(t) ? !1 : (E(t), !0)),
    a = null,
    o = async () => {
      let r = H()[0] ?? null;
      return (
        (a = r),
        r == null && e?.aborted
          ? (t != null && E(t), !1)
          : i() || (r != null && (!(await U(r, e, t)) || e?.aborted || i()))
            ? !1
            : ((await n?.()) ?? !0)
      );
    };
  if (!((r && t == null ? await o() : await S(o)) || e?.aborted))
    throw Error(
      a == null
        ? `Failed to resume the add-account logout handoff`
        : `Failed to resume the remaining saved account session`,
    );
}
var W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((W = a()),
      i(),
      ie(),
      se(),
      N(),
      l(),
      re(),
      _(),
      C(),
      ae(),
      B(),
      T(),
      (G = s({ sessionToken: o().min(1) })),
      (K = u(
        s({ sessionToken: o().min(1), workspaces: u(s({ workspaceAccountId: o().min(1) })).optional() }),
      )),
      (q = `oai/apps/accountSwitchSessions`),
      (J = `/api/auth/session`),
      (Y = `/account-switch/switch`),
      (X = `OAI-Account-Switch-Session-Token`),
      (Z = `X-OpenAI-Target-Path`),
      (Q = `X-OpenAI-Target-Route`));
  }))();
}
export { N as a, A as i, me as n, V as r, $ as t };
//# sourceMappingURL=logout-engine-3e5ca2b0809a.js.map
