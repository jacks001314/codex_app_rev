const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./chatgpt-request-bcbfb7e6d1c6.js",
      "./app-shared-7552fc8d5d82.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-342447930c78.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  DMt as t,
  Jun as n,
  Mun as r,
  OMt as i,
  Qun as a,
  Uun as o,
  Wun as s,
  bkt as c,
  bun as l,
  cun as u,
  fkt as ee,
  ldn as d,
  lun as f,
  okt as p,
  pAt as m,
  rdn as h,
  tkt as g,
} from "./app-shared-7552fc8d5d82.js";
import {
  FO as te,
  Hjn as _,
  IO as v,
  JO as y,
  MO as b,
  NO as x,
  RO as S,
  UD as ne,
  Ujn as re,
  VO as C,
  WD as ie,
  bxn as ae,
  dO as oe,
  jO as w,
  qO as T,
  uO as se,
  yxn as ce,
  zO as E,
} from "./app-initial-3916b423772b.js";
import { r as D } from "./datadog-rum.browser-543222e1f461.js";
function O() {
  return {
    has_web_push_capabilities:
      typeof navigator < `u` &&
      `serviceWorker` in navigator &&
      typeof Notification < `u` &&
      typeof PushManager < `u`,
    web_push_notification_permission:
      typeof Notification > `u` ? `unsupported` : Notification.permission,
  };
}
async function k() {
  if ((j?.abort(), O().has_web_push_capabilities))
    try {
      let e = await (
        await navigator.serviceWorker.getRegistration(A)
      )?.pushManager.getSubscription();
      if (e == null) return;
      let t = e.toJSON().keys?.auth;
      (t != null &&
        (await u(
          async () => {
            let { Request: e } = await import(`./chatgpt-request-bcbfb7e6d1c6.js`);
            return { Request: e };
          },
          __vite__mapDeps([0, 1, 2, 3]),
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
var A, j;
function M() {
  return (M = e(() => {
    (f(), (A = `/service-worker/events.js`), (j = null));
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
    originPath: F(new URL(window.location.href)),
    reason: e.slice(0, 96),
    referrerHost: n == null ? null : `<redacted>`,
    referrerPath: n == null ? null : F(n),
    source: t.slice(0, 128),
  };
  try {
    (0, I.setCookie)(`oai-logout-debug-context`, JSON.stringify(r), {
      maxAge: L,
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
    let e = (0, I.getCookie)(`oai-logout-debug-context`);
    if (typeof e != `string`) return null;
    let t = R.safeParse(JSON.parse(e));
    if (!t.success) return null;
    let n = t.data,
      r = Date.now() - Date.parse(n.capturedAt);
    return r < 0 || r >= L * 1e3
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
function N() {
  try {
    let e = (0, I.getCookie)(`oai-logout-debug-context`);
    return typeof e == `string` ? e : null;
  } catch {
    return null;
  }
}
function P(e) {
  try {
    let t = (0, I.getCookie)(`oai-logout-debug-context`);
    if ((typeof t == `string` ? t : null) !== e) return;
    (0, I.deleteCookie)(`oai-logout-debug-context`, { path: `/` });
  } catch {}
}
function F(e) {
  return `/<redacted>${e.search ? `?<redacted>` : ``}${e.hash ? `#<redacted>` : ``}`;
}
var I, L, R;
function z() {
  return (z = e(() => {
    ((I = m()),
      l(),
      D(),
      (L = 300),
      (R = n({
        capturedAt: d(),
        correlationId: h(),
        originHost: o(`<redacted>`),
        reason: o(`add_email_otp_verification`),
        source: o(`settings.add-email-otp-modal`),
      })));
  }))();
}
async function B(e, n, r, i, a, o) {
  let s = null;
  try {
    o == null ? window.location.pathname === g(`logout`).pathname && (s = ue()) : (s = le(o));
  } catch {}
  let l = N(),
    u = () => {
      P(l);
    },
    d = E(n) ? (a ?? null) : null,
    f = (e = !1) => {
      if (!E(n)) return !0;
      let t = te(d) != null;
      return (t || (e ? b(d) : x(d)), t);
    },
    p = (e = !1) => !r?.aborted && f(e),
    m = async (e) => (i == null ? e : !p(!0) || !(await i(e.url)) ? { ok: !1 } : e);
  return p()
    ? (await k(),
      c(async () => {
        if (!p(!0)) return { ok: !1 };
        let i = n ?? window.location.origin,
          a = n == null ? V() : [],
          o = a.length > 0 ? await de() : null;
        if (!p(!0) || (d != null && !(await fe(d, r))) || !p(!0)) return { ok: !1 };
        let c = await y(`signout`, i, void 0, r, E(n) ? () => f(!0) : void 0);
        if (!c.ok) return c;
        if (
          (d != null && H(d.storedSessionToken),
          !p(!0) ||
            (await Promise.all([ce({ includePersisted: !0 }).catch(() => {}), _(), ne()]), !p(!0)))
        )
          return { ok: !1 };
        if (n == null) {
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
          ee(),
          await e(),
          !p(!0))
        )
          return { ok: !1 };
        se();
        let { federatedLogoutUrl: l } = t().auth;
        if (l == null) return (E(n) && C(d, `ready`), p(!0) ? (u(), m(c)) : { ok: !1 });
        let h = new URL(l);
        h.searchParams.has(`returnTo`) || h.searchParams.set(`returnTo`, window.location.origin);
        for (let [e, t] of Object.entries(s ?? {})) h.searchParams.set(e, t);
        return (
          E(n) && C(d, `awaiting_root`),
          p(!0) ? (u(), m({ ok: !0, url: h.toString() })) : { ok: !1 }
        );
      }))
    : { ok: !1 };
}
function V() {
  try {
    let e = window.localStorage.getItem(q);
    if (e == null) return [];
    let t = K.safeParse(JSON.parse(e));
    return t.success ? t.data : [];
  } catch {
    return [];
  }
}
function H(e) {
  let t = V(),
    n = t.filter((t) => t.sessionToken !== e);
  if (n.length !== t.length)
    try {
      window.localStorage.setItem(q, JSON.stringify(n));
    } catch {}
}
async function de() {
  try {
    let e = await fetch(J, {
      cache: `no-store`,
      credentials: `include`,
      headers: { [Z]: J, [Q]: J },
    });
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
  if (n != null && !S(n)) return (b(n), !1);
  try {
    let e = V(),
      t = e.filter((e) => e.sessionToken !== r);
    t.length !== e.length && window.localStorage.setItem(q, JSON.stringify(t));
  } catch {
    window.localStorage.removeItem(q);
  } finally {
    n == null ? w() : b(n);
  }
  return !1;
}
async function fe(e, t) {
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
async function pe(e, t, n) {
  if (e?.aborted) return;
  let r = V()[0] != null;
  if (!r && n == null) return;
  let i = () => (t == null || S(t) ? !1 : (b(t), !0)),
    a = null,
    o = async () => {
      let r = V()[0] ?? null;
      return (
        (a = r),
        r == null && e?.aborted
          ? (t != null && b(t), !1)
          : i() || (r != null && (!(await U(r, e, t)) || e?.aborted || i()))
            ? !1
            : ((await n?.()) ?? !0)
      );
    };
  if (!((r && t == null ? await o() : await c(o)) || e?.aborted))
    throw Error(
      a == null
        ? `Failed to resume the add-account logout handoff`
        : `Failed to resume the remaining saved account session`,
    );
}
var W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((W = m()),
      l(),
      p(),
      ae(),
      M(),
      i(),
      re(),
      ie(),
      v(),
      T(),
      z(),
      oe(),
      (G = s({ sessionToken: a().min(1) })),
      (K = r(
        s({
          sessionToken: a().min(1),
          workspaces: r(s({ workspaceAccountId: a().min(1) })).optional(),
        }),
      )),
      (q = `oai/apps/accountSwitchSessions`),
      (J = `/api/auth/session`),
      (Y = `/account-switch/switch`),
      (X = `OAI-Account-Switch-Session-Token`),
      (Z = `X-OpenAI-Target-Path`),
      (Q = `X-OpenAI-Target-Route`));
  }))();
}
export { M as a, k as i, pe as n, B as r, $ as t };
//# sourceMappingURL=logout-engine-f18fa83948b6.js.map
