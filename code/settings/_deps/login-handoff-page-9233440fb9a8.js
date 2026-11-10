import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  Amn as r,
  Fy as i,
  IXt as a,
  Iy as o,
  KXt as s,
  LSt as c,
  O3t as l,
  QXt as u,
  RSt as d,
  S3t as f,
  a3t as p,
  ai as m,
  eZt as h,
  fi as g,
  hmn as _,
  ii as v,
  kmn as y,
  nZt as b,
  o3t as x,
  oi as S,
  s3t as C,
  si as w,
  tqt as T,
} from "./app-initial-f094ef01c64d.js";
import { n as E, t as D } from "./auth-handoff-page-a4e04c720f3f.js";
import { a as O, n as k, r as A } from "./session-c33967fa604f.js";
function j(e, t) {
  (h(e, v, {
    authSessionLoggingId: t,
    actionType: m.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
    entryPoint: S.ACCESS_FLOW_ENTRY_POINT_AUTH_LOGIN_PAGE,
    entryTrigger: w.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
    cta: `auto-triggerred`,
  }),
    i.count(`default`, `business.auth_entrypoint_opened`, {
      action: `page_loaded`,
      entry_point: `auth_login_page`,
      entry_trigger: `automatic`,
      surface: `core_web`,
    }));
}
var M = e(() => {
  (g(), o(), u());
});
function N(e) {
  let t = (0, F.c)(22),
    { flow: r } = e,
    i = n(p),
    a = s(),
    o = (0, L.useRef)(null),
    l;
  t[0] === r
    ? (l = t[1])
    : ((l = () => {
        let e = (0, I.getCookie)(`oai-asli`);
        return r === `login` && typeof e == `string` && e !== `` ? e : crypto.randomUUID();
      }),
      (t[0] = r),
      (t[1] = l));
  let [u] = (0, L.useState)(l),
    d;
  t[2] !== r || t[3] !== a.hash || t[4] !== a.search
    ? ((d = [`browser-login-handoff`, r, a.search, a.hash]),
      (t[2] = r),
      (t[3] = a.hash),
      (t[4] = a.search),
      (t[5] = d))
    : (d = t[5]);
  let m;
  t[6] !== u || t[7] !== r || t[8] !== a.hash || t[9] !== a.key || t[10] !== a.search || t[11] !== i
    ? ((m = async (e) => {
        let { signal: t } = e,
          n = new URLSearchParams(a.search),
          s = n.get(`connection`),
          l = { auth_session_logging_id: u };
        if ((s && (l.connection = s), r === `sso`))
          s && (l.connection_provider = s.startsWith(`conn_`) ? `2` : `1`);
        else {
          (0, I.getCookie)(`oai-asli`) !== u &&
            (0, I.setCookie)(`oai-asli`, u, { path: `/`, sameSite: `lax` });
          let e = n.get(`login_hint`);
          e && (l.login_hint = e);
          let t = n.get(`screen_hint`);
          ((l.screen_hint = t === `signup` || t === `login_or_signup` ? t : `login`),
            n.get(`ext-web-mobile-direct-social-login`) === `true` &&
              [`apple`, `google-oauth2`, `windowslive`].includes(s ?? ``) &&
              (l[`ext-web-mobile-direct-social-login`] = `true`));
        }
        let d = new URL(
          r === `sso` ? k(n.get(`next`)) : k(null, n.get(`callback_path`), `auth-server`),
        );
        if ((r === `sso` && a.hash && (d.hash = a.hash), r === `sso` && o.current !== a.key)) {
          ((o.current = a.key), j(i, u));
          let { ip: e } = c().statsigContext,
            t = d.pathname.split(`/`).filter(Boolean),
            n = t[1] ?? `none`,
            r =
              t.length === 2 && t[0] === `purchase` && [`go`, `plus`, `pro`, `pro5x`].includes(n)
                ? n
                : `none`,
            s = i.get(b);
          (s.logEventWithStatsig?.(`chatgpt_auth_login_page_load`, {
            ...(e == null ? {} : { cfConnectingIp: e }),
            selected_plan_type: r,
          }),
            await s.flush(1e3).catch(P));
        }
        return O(d.toString(), l, t, r);
      }),
      (t[6] = u),
      (t[7] = r),
      (t[8] = a.hash),
      (t[9] = a.key),
      (t[10] = a.search),
      (t[11] = i),
      (t[12] = m))
    : (m = t[12]);
  let h;
  t[13] !== d || t[14] !== m
    ? ((h = {
        queryKey: d,
        queryFn: m,
        staleTime: 1 / 0,
        gcTime: 0,
        retry: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (t[13] = d),
      (t[14] = m),
      (t[15] = h))
    : (h = t[15]);
  let { data: g, isError: _, isFetching: v, refetch: y } = f(h),
    x = v || (g == null && !_),
    S;
  t[16] === y
    ? (S = t[17])
    : ((S = () => {
        y({ cancelRefetch: !1 });
      }),
      (t[16] = y),
      (t[17] = S));
  let C;
  return (
    t[18] !== g || t[19] !== x || t[20] !== S
      ? ((C = (0, R.jsx)(D, { result: g, pending: x, onRetry: S })),
        (t[18] = g),
        (t[19] = x),
        (t[20] = S),
        (t[21] = C))
      : (C = t[21]),
    C
  );
}
function P() {}
var F,
  I,
  L,
  R,
  z = e(() => {
    ((F = y()), C(), (I = T()), l(), (L = t(r(), 1)), a(), d(), u(), x(), E(), M(), A(), (R = _()));
  });
export { z as n, M as r, N as t };
//# sourceMappingURL=login-handoff-page-9233440fb9a8.js.map
