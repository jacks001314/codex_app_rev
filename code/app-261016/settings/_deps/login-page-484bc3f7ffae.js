const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./host-116728684ff0.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./chatgpt-user-granular-consent-5fff80d4df26.js",
      "./host-2fbd8af1f95b.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  $z as r,
  AU as i,
  BSt as a,
  F3 as o,
  FB as s,
  FBt as c,
  HFt as l,
  I3 as u,
  LNt as d,
  Mst as f,
  NSt as p,
  OFt as m,
  PBt as h,
  PSt as g,
  Qst as _,
  Qz as v,
  Rrt as ee,
  SLt as y,
  TY as b,
  VRt as x,
  VSt as te,
  XOt as S,
  Xat as ne,
  Xet as re,
  Y3 as ie,
  YOt as ae,
  Yat as oe,
  Z3 as se,
  ZSt as ce,
  Zet as le,
  jst as C,
  kFt as ue,
  kLt as w,
  kRt as T,
  okt as de,
  tkt as E,
  xK as fe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as D,
  Bzr as pe,
  CMr as me,
  Cjr as he,
  EF as ge,
  Ejr as _e,
  FN as O,
  Hzr as ve,
  LN as ye,
  PN as be,
  RN as k,
  Uzr as xe,
  Wzr as A,
  Yzr as Se,
  ZLn as Ce,
  bjr as we,
  hN as Te,
  imr as Ee,
  mN as De,
  oon as j,
  rmr as Oe,
  son as ke,
  xMr as Ae,
  xjr as M,
  yMr as je,
  zN as Me,
  zR as N,
} from "./app-initial-ad16eaadf81f.js";
import { Fp as P, Hc as F, Pp as I } from "./app-primary-3e00728c2a4c.js";
import { n as Ne, r as Pe } from "./session-7c09e4681e00.js";
import { n as L, t as Fe } from "./page-layout-a1c073d5d2ad.js";
import { i as Ie } from "./login-handoff-page-6234f5fbd63b.js";
import { n as R, t as z } from "./google-logo-79cb9d2ee553.js";
function B(e) {
  return r() ? (0, Le.jsx)(Re, { ...e }) : null;
}
var Le, Re;
function V() {
  return (V = e(() => {
    (o(),
      v(),
      (Le = d()),
      ue(),
      (Re = u(
        async () =>
          (
            await m(
              async () => {
                let { CookieConsentHost: e } = await import(`./host-116728684ff0.js`);
                return { CookieConsentHost: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
              import.meta.url,
            )
          ).CookieConsentHost,
      )));
  }))();
}
function ze(e, t, n) {
  let r = e.get(`ext-web-mobile-direct-phone-login`) === `true` && e.get(`usernameKind`) === `phone_number`,
    i =
      e.get(`ext-web-mobile-login-continuation`) === `true` &&
      e.get(`mweb_fallback`) === `1` &&
      [`ext-web-mobile-login-continuation`, `mweb_fallback`, `auth_session_logging_id`, `ext-oai-did`].every(
        (t) => e.getAll(t).length === 1,
      );
  if (!r && !i) return;
  let a = H.safeParse({ authSessionLoggingId: t, deviceId: n }).data;
  if (
    a != null &&
    e.get(`auth_session_logging_id`) === a.authSessionLoggingId &&
    e.get(`ext-oai-did`) === a.deviceId
  )
    return {
      authSessionLoggingId: a.authSessionLoggingId,
      usernameKind: e.get(`usernameKind`) === `phone_number` ? `phone_number` : `email`,
    };
}
var H;
function Be() {
  return (Be = e(() => {
    (l(),
      (H = T({
        authSessionLoggingId: x().regex(
          /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
        ),
        deviceId: x().min(1),
      })));
  }))();
}
function Ve(e, t) {
  let n = e.getDynamicConfig(`489084288`).get(`options`, W),
    r = we(e, `3233347819`).get(`should_hide_microsoft_sso`, !1);
  return W.flatMap((i) => {
    let a = e.getDynamicConfig(U[i]);
    return !n.includes(i) ||
      !a.get(`enabled`, !0) ||
      (i === `microsoft` && r && new URLSearchParams(t).get(`microsoft_sso`) !== `1`)
      ? []
      : [{ method: i, disabled: a.get(`tempDisabled`, !1) }];
  }).sort((e, t) => n.indexOf(e.method) - n.indexOf(t.method));
}
var U, W;
function G() {
  return (G = e(() => {
    (M(),
      (U = {
        google: `1341269548`,
        apple: `730493191`,
        microsoft: `111706139`,
        email: `734083401`,
        phone_number: `1165494509`,
      }),
      (W = [`google`, `apple`, `microsoft`, `email`, `phone_number`]));
  }))();
}
var K;
function q() {
  return (q = e(() => {
    (l(),
      (K = T({
        unified_sessions: w(
          T({
            name: x().nullable(),
            username: T({ value: x().min(1), kind: y([`email`, `phone_number`]) }),
            avatar_url: x().nullable(),
          }),
        ),
      })));
  }))();
}
function J() {
  return (J = e(() => {
    q();
  }))();
}
function He(e) {
  let t = (0, X.c)(7),
    { eligible: n, pending: i, onSelect: a, children: o } = e,
    s = he(n ? `3173316624` : !1),
    c = r(),
    [l, u] = (0, Ue.useState)(!1);
  if (!s || !c || l) {
    let e;
    return (
      t[0] === o ? (e = t[1]) : ((e = (0, Z.jsx)(Z.Fragment, { children: o })), (t[0] = o), (t[1] = e)),
      e
    );
  }
  let d;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = () => u(!0)), (t[2] = d)) : (d = t[2]);
  let f;
  return (
    t[3] !== o || t[4] !== a || t[5] !== i
      ? ((f = (0, Z.jsx)(Y, { pending: i, onSelect: a, onUseAnotherAccount: d, children: o })),
        (t[3] = o),
        (t[4] = a),
        (t[5] = i),
        (t[6] = f))
      : (f = t[6]),
    f
  );
}
function Y(e) {
  let t = (0, X.c)(23),
    { pending: n, onSelect: r, onUseAnotherAccount: i, children: a } = e,
    o = (0, Ue.useId)(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = oe()), (t[0] = s)) : (s = t[0]);
  let { provider: c } = s.auth,
    l;
  t[1] === o ? (l = t[2]) : ((l = [`browser-remembered-accounts`, c, o]), (t[1] = o), (t[2] = l));
  let u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = async (e) => {
        let { signal: t } = e;
        try {
          let e = await fetch(`/api/auth/account-picker?${new URLSearchParams({ auth_provider: c })}`, {
            credentials: `same-origin`,
            cache: `no-store`,
            redirect: `error`,
            signal: AbortSignal.any([t, AbortSignal.timeout(1e4)]),
          });
          if (!e.ok) return null;
          let n = K.safeParse(await e.json());
          return n.success ? n.data : null;
        } catch {
          return null;
        }
      }),
      (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] === l
    ? (d = t[5])
    : ((d = {
        queryKey: l,
        queryFn: u,
        staleTime: 0,
        gcTime: 0,
        retry: !1,
        refetchOnMount: `always`,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (t[4] = l),
      (t[5] = d));
  let { data: p, isPending: m } = f(d);
  if (!m && p == null) {
    let e;
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(`p`, {
          role: `status`,
          className: `text-sm text-secondary`,
          children: (0, Z.jsx)(E, {
            id: `browser.auth.login.rememberedAccounts.error`,
            defaultMessage: `We couldn’t load your remembered accounts. You can still log in below`,
            description: `Status on the ChatGPT browser login page or dialog when remembered accounts cannot be loaded. The normal email, phone and provider login controls remain available below.`,
          }),
        })),
        (t[6] = e))
      : (e = t[6]);
    let n;
    return (
      t[7] === a ? (n = t[8]) : ((n = (0, Z.jsxs)(Z.Fragment, { children: [e, a] })), (t[7] = a), (t[8] = n)),
      n
    );
  }
  if (p?.unified_sessions.length === 0) {
    let e;
    return (
      t[9] === a ? (e = t[10]) : ((e = (0, Z.jsx)(Z.Fragment, { children: a })), (t[9] = a), (t[10] = e)),
      e
    );
  }
  let h;
  t[11] !== p?.unified_sessions || t[12] !== m || t[13] !== r || t[14] !== n
    ? ((h = m
        ? (0, Z.jsx)(`p`, {
            role: `status`,
            className: `text-sm text-secondary`,
            children: (0, Z.jsx)(E, {
              id: `browser.auth.login.rememberedAccounts.loading`,
              defaultMessage: `Loading remembered accounts…`,
              description: `Status shown while the ChatGPT browser login page or dialog loads accounts previously used in this browser. The user can choose Use another account without waiting.`,
            }),
          })
        : (0, Z.jsx)(`div`, {
            className: `flex flex-col gap-3`,
            children: p?.unified_sessions.map((e) =>
              (0, Z.jsxs)(
                ie,
                {
                  type: `button`,
                  color: `outlineSurface`,
                  size: `auth`,
                  disabled: n,
                  onClick: () => r(e.username.value),
                  children: [
                    (0, Z.jsx)(j, {
                      alt: ``,
                      colorKey: e.username.value,
                      name: e.name ?? e.username.value,
                      size: `md`,
                      src: e.avatar_url,
                      referrerPolicy: `no-referrer`,
                    }),
                    (0, Z.jsxs)(`span`, {
                      className: `min-w-0 flex-1 text-start`,
                      children: [
                        e.name
                          ? (0, Z.jsx)(`span`, {
                              className: `block truncate text-base font-medium`,
                              children: e.name,
                            })
                          : null,
                        (0, Z.jsx)(`span`, {
                          className: `block truncate text-sm text-secondary`,
                          children: e.username.value,
                        }),
                      ],
                    }),
                  ],
                },
                e.username.value,
              ),
            ),
          })),
      (t[11] = p?.unified_sessions),
      (t[12] = m),
      (t[13] = r),
      (t[14] = n),
      (t[15] = h))
    : (h = t[15]);
  let g;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Z.jsx)(E, {
        id: `browser.auth.login.rememberedAccounts.useAnotherAccount`,
        defaultMessage: `Use another account`,
        description: `Button in the ChatGPT browser login page or dialog that replaces remembered account choices with the normal email, phone and provider login controls. Available while accounts are loading as well.`,
      })),
      (t[16] = g))
    : (g = t[16]);
  let _;
  t[17] !== i || t[18] !== n
    ? ((_ = (0, Z.jsx)(ie, {
        type: `button`,
        color: `outlineSurface`,
        size: `auth`,
        disabled: n,
        onClick: i,
        children: g,
      })),
      (t[17] = i),
      (t[18] = n),
      (t[19] = _))
    : (_ = t[19]);
  let v;
  return (
    t[20] !== h || t[21] !== _
      ? ((v = (0, Z.jsxs)(`div`, { className: `flex w-full flex-col gap-5 select-none`, children: [h, _] })),
        (t[20] = h),
        (t[21] = _),
        (t[22] = v))
      : (v = t[22]),
    v
  );
}
var X, Ue, Z;
function We() {
  return (We = e(() => {
    ((X = h()), C(), J(), (Ue = c()), S(), ne(), ke(), se(), M(), v(), (Z = d()));
  }))();
}
function Ge(e) {
  let n = (0, Ye.c)(62),
    {
      initialAuthSessionLoggingId: r,
      presentation: i,
      description: o,
      callbackPath: s,
      screenHint: c,
      title: l,
      initialEmail: u,
      authorizationParams: d,
      optionalSsoConnection: f,
      showHomeLink: p,
    } = e,
    m = t(_),
    { authMethod: h, isLoading: v } = Ee(),
    ee = de(),
    y = te(),
    b = new URLSearchParams(y.search),
    x = _e(),
    S = Ve(x, y.search),
    ne = i !== `dialog` && g(`/auth/login`, y.pathname) != null ? oe() : void 0,
    ae = ne == null ? void 0 : ze(b, ne.authSessionLoggingId, ne.statsigContext.deviceId),
    [se, ce] = (0, Q.useState)(ae?.usernameKind ?? `email`),
    [C, ue] = (0, Q.useState)(!1),
    w = (0, Q.useRef)(null),
    [T, fe] = (0, Q.useState)(b.has(`error`)),
    [D] = (0, Q.useState)(() => r ?? ae?.authSessionLoggingId ?? crypto.randomUUID()),
    he = (0, Q.useRef)(!1),
    ge = S.filter(qe),
    O =
      ge.find((e) => {
        let { method: t } = e;
        return t === se;
      }) ?? ge[0],
    k = O?.method === `phone_number`,
    A = Je(s == null ? b.get(`next`) : null, s ?? b.get(`callbackUrl`), s == null ? y.hash : ``),
    Se = new URL(A),
    De = /^\/refer\/[^/]+\/?$/.test(Se.pathname),
    j = be(Se),
    Oe = j != null && !b.has(`sso`) && we(x, `3233347819`).get(`show_selected_plan_intent`, !1),
    ke = a(`/u/:username`),
    M = !v && h == null && i !== `dialog` && g(ke, Se.pathname) != null,
    je = (0, Q.useRef)(null),
    N;
  n[0] !== M || n[1] !== y.key || n[2] !== m
    ? ((N = () => {
        M &&
          document.visibilityState === `visible` &&
          je.current !== y.key &&
          ((je.current = y.key),
          Ae(m, re, { action: le.CODEX_PROFILE_SIGNED_OUT_ACTION_TYPE_LOGIN_PROMPT_SHOWN }));
      }),
      (n[0] = M),
      (n[1] = y.key),
      (n[2] = m),
      (n[3] = N))
    : (N = n[3]);
  let P = (0, Q.useEffectEvent)(N),
    F;
  n[4] === P
    ? (F = n[5])
    : ((F = () => {
        P();
        let e = () => P();
        return (
          document.addEventListener(`visibilitychange`, e),
          () => document.removeEventListener(`visibilitychange`, e)
        );
      }),
      (n[4] = P),
      (n[5] = F));
  let I;
  (n[6] !== M || n[7] !== y.key ? ((I = [M, y.key]), (n[6] = M), (n[7] = y.key), (n[8] = I)) : (I = n[8]),
    (0, Q.useEffect)(F, I));
  let Ne, L;
  (n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ne = () => {
        let e = (e) => {
            e.persisted && ((w.current = null), ue(!1));
          },
          t = () => {
            w.current?.abort();
          };
        return (
          window.addEventListener(`pageshow`, e),
          window.addEventListener(`pagehide`, t),
          () => {
            (window.removeEventListener(`pageshow`, e), window.removeEventListener(`pagehide`, t), t());
          }
        );
      }),
      (L = []),
      (n[9] = Ne),
      (n[10] = L))
    : ((Ne = n[9]), (L = n[10])),
    (0, Q.useEffect)(Ne, L));
  let Ie;
  n[11] !== M || n[12] !== m
    ? ((Ie = () => {
        M && Ae(m, re, { action: le.CODEX_PROFILE_SIGNED_OUT_ACTION_TYPE_LOGIN_CLICKED });
      }),
      (n[11] = M),
      (n[12] = m),
      (n[13] = Ie))
    : (Ie = n[13]);
  let R = Ie,
    z = async (e) => {
      if (w.current != null) return;
      let t = new AbortController();
      ((w.current = t), ue(!0), fe(!1));
      let n;
      (e.method === `email` && (n = pe.ACCESS_FLOW_FIELD_EMAIL),
        e.method === `phone_number` && (n = pe.ACCESS_FLOW_FIELD_PHONE),
        e.method !== `remembered_account` &&
          Ae(m, xe, {
            authSessionLoggingId: D,
            actionType: Qe[e.method],
            page: ve.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_PAGE,
            field: n,
          }));
      try {
        await m.get(me).flush(1e3).catch(Ke);
        let n;
        n =
          e.method === `remembered_account`
            ? { login_hint: e.loginHint, screen_hint: `login_or_signup` }
            : `username` in e
              ? { login_hint: e.username }
              : e.method === `sso`
                ? {
                    connection: e.connection,
                    connection_provider:
                      e.connection.startsWith(`conn_`) || e.connection.startsWith(`oaisaml_`) ? `2` : `1`,
                  }
                : { connection: e.method === `password` ? `password` : Xe[e.method] };
        let r = await Pe(
          A,
          { ...d, auth_session_logging_id: D, ...(c == null ? {} : { screen_hint: c }), ...n },
          t.signal,
        );
        if (t.signal.aborted) return;
        if (r.ok) {
          (Te(M ? D : null), window.location.assign(r.url));
          return;
        }
      } catch {}
      t.signal.aborted || ((w.current = null), fe(!0), ue(!1));
    },
    B;
  if (De) {
    let e;
    (n[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(E, {
          id: `browser.auth.login.referralTitle`,
          defaultMessage: `Accept this referral`,
          description: `Heading on the ChatGPT sign-in page when the user is accepting a referral link`,
        })),
        (n[14] = e))
      : (e = n[14]),
      (B = e));
  } else if (Oe && j === `go`) {
    let e;
    (n[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(E, {
          id: `browser.auth.login.selectedPlanTitle.go`,
          defaultMessage: `Sign in to continue with Go`,
          description: `Full heading on the ChatGPT browser sign-in page for a signed-out user who selected ChatGPT Go before signing in. Related headings name Plus and Pro.`,
        })),
        (n[15] = e))
      : (e = n[15]),
      (B = e));
  } else if (Oe && j === `plus`) {
    let e;
    (n[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(E, {
          id: `browser.auth.login.selectedPlanTitle.plus`,
          defaultMessage: `Sign in to continue with Plus`,
          description: `Full heading on the ChatGPT browser sign-in page for a signed-out user who selected ChatGPT Plus before signing in. Related headings name Go and Pro.`,
        })),
        (n[16] = e))
      : (e = n[16]),
      (B = e));
  } else if (Oe && (j === `pro` || j === `pro5x`)) {
    let e;
    (n[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(E, {
          id: `browser.auth.login.selectedPlanTitle.pro`,
          defaultMessage: `Sign in to continue with Pro`,
          description: `Full heading on the ChatGPT browser sign-in page for a signed-out user who selected ChatGPT Pro or the Pro 5x purchase option before signing in. The visible plan name is Pro. Related headings name Go and Plus.`,
        })),
        (n[17] = e))
      : (e = n[17]),
      (B = e));
  } else {
    let e;
    (n[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(E, {
          id: `browser.auth.login.title`,
          defaultMessage: `Log in or sign up`,
          description: `Heading on the ChatGPT browser login page where users choose a sign-in method or create an account`,
        })),
        (n[18] = e))
      : (e = n[18]),
      (B = e));
  }
  let Le = Fe,
    Re = l ?? B,
    V = (e) => {
      e == null || he.current || (Me(D), (he.current = !0), ye(m, D, j ?? void 0));
    },
    H;
  n[19] === T
    ? (H = n[20])
    : ((H = T
        ? (0, $.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-danger`,
            children: (0, $.jsx)(E, {
              id: `browser.auth.login.failed`,
              defaultMessage: `We couldn’t sign you in. Please try again`,
              description: `Inline error on the ChatGPT browser login page after an authentication request fails; the user can retry with any available method`,
            }),
          })
        : null),
      (n[19] = T),
      (n[20] = H));
  let Be = He,
    U;
  n[21] !== R || n[22] !== z
    ? ((U = (e) => {
        (R(), z({ method: `remembered_account`, loginHint: e }));
      }),
      (n[21] = R),
      (n[22] = z),
      (n[23] = U))
    : (U = n[23]);
  let W;
  n[24] !== f || n[25] !== C || n[26] !== z
    ? ((W =
        f == null
          ? null
          : (0, $.jsx)(ie, {
              type: `button`,
              color: `primary`,
              size: `auth`,
              disabled: C,
              onClick: () => {
                z({ method: `sso`, connection: f });
              },
              children: (0, $.jsx)(E, {
                id: `AcceptInvitePage.sso.button.company`,
                defaultMessage: `Continue with company SSO`,
                description: `Primary button on the workspace invitation login-method picker for an invited end user. Opens their company's single sign-on provider. Other buttons offer password and social login when company SSO is optional. Keep the label short.`,
              }),
            })),
      (n[24] = f),
      (n[25] = C),
      (n[26] = z),
      (n[27] = W))
    : (W = n[27]);
  let G =
      S.some((e) => {
        let { method: t } = e;
        return t !== O?.method;
      }) || f != null
        ? (0, $.jsx)(`div`, {
            className: `flex flex-col gap-3`,
            children: S.filter((e) => {
              let { method: t } = e;
              return f == null ? t !== O?.method : t !== `phone_number`;
            }).map((e) => {
              let { method: t, disabled: n } = e;
              return (0, $.jsxs)(
                ie,
                {
                  type: `button`,
                  color: `outlineSurface`,
                  size: `auth`,
                  disabled: C || n,
                  onClick: () => {
                    f != null && t === `email`
                      ? z({ method: `password` })
                      : t === `email` || t === `phone_number`
                        ? ce(t)
                        : (R(), z({ method: t }));
                  },
                  children: [
                    Ze[t],
                    f != null && t === `email`
                      ? (0, $.jsx)(E, {
                          id: `AcceptInvitePage.sso.button.password`,
                          defaultMessage: `Continue with password`,
                          description: `Button on the workspace invitation login-method picker for an invited end user when company single sign-on is optional. Selects password login or signup directly, instead of displaying another SSO picker. Other buttons offer company SSO and social login. Keep the label short.`,
                        })
                      : (0, $.jsx)(E, { ...$e[t] }),
                  ],
                },
                t,
              );
            }),
          })
        : null,
    K;
  n[28] !== f || n[29] !== S || n[30] !== O
    ? ((K =
        f == null && O != null && S.length > 1
          ? (0, $.jsxs)(`div`, {
              className: `flex items-center gap-6 py-1 text-xs text-secondary`,
              children: [
                (0, $.jsx)(`div`, { className: `h-px flex-1 bg-border` }),
                (0, $.jsx)(E, {
                  id: `browser.auth.login.or`,
                  defaultMessage: `OR`,
                  description: `Short separator between provider sign-in buttons and the email or phone input on the browser login page; use uppercase where applicable`,
                }),
                (0, $.jsx)(`div`, { className: `h-px flex-1 bg-border` }),
              ],
            })
          : null),
      (n[28] = f),
      (n[29] = S),
      (n[30] = O),
      (n[31] = K))
    : (K = n[31]);
  let q;
  n[32] !== u ||
  n[33] !== ee ||
  n[34] !== k ||
  n[35] !== f ||
  n[36] !== C ||
  n[37] !== R ||
  n[38] !== z ||
  n[39] !== O
    ? ((q =
        f != null || O == null
          ? null
          : (0, $.jsxs)(`form`, {
              className: `flex w-full flex-col gap-5`,
              onSubmit: (e) => {
                e.preventDefault();
                let t = new FormData(e.currentTarget).get(`username`);
                typeof t == `string` &&
                  z({
                    method: k ? `phone_number` : `email`,
                    username: k ? t.replace(/[\s()-]/g, ``) : t.trim(),
                  });
              },
              children: [
                (0, $.jsxs)(`label`, {
                  children: [
                    (0, $.jsx)(`span`, {
                      className: `sr-only`,
                      children: k
                        ? (0, $.jsx)(E, {
                            id: `browser.auth.login.phoneLabel`,
                            defaultMessage: `Phone number`,
                            description: `Label for the phone number input on the ChatGPT browser login page`,
                          })
                        : (0, $.jsx)(E, {
                            id: `browser.auth.login.emailLabel`,
                            defaultMessage: `Email address`,
                            description: `Label for the email input on the ChatGPT browser login page`,
                          }),
                    }),
                    (0, $.jsx)(
                      Ce,
                      {
                        variant: `auth`,
                        name: `username`,
                        type: k ? `tel` : `email`,
                        autoComplete: k ? `tel` : `email`,
                        defaultValue: k ? void 0 : u,
                        required: !0,
                        disabled: C || O.disabled,
                        placeholder: k
                          ? ee.formatMessage({
                              id: `browser.auth.login.phonePlaceholder`,
                              defaultMessage: `+1 555 123 4567`,
                              description: `Example international phone number, including country code, for the phone input on the ChatGPT browser login page`,
                            })
                          : ee.formatMessage({
                              id: `browser.auth.login.emailPlaceholder`,
                              defaultMessage: `Email address`,
                              description: `Placeholder in the email address input on the browser login page`,
                            }),
                      },
                      O.method,
                    ),
                  ],
                }),
                (0, $.jsx)(ie, {
                  type: `submit`,
                  color: `primary`,
                  size: `auth`,
                  disabled: C || O.disabled,
                  onClick: R,
                  children: C
                    ? (0, $.jsx)(E, {
                        id: `browser.auth.login.pending`,
                        defaultMessage: `Connecting…`,
                        description: `Label while the ChatGPT browser login page waits for the selected authentication provider`,
                      })
                    : (0, $.jsx)(E, {
                        id: `browser.auth.login.continue`,
                        defaultMessage: `Continue`,
                        description: `Submit button beneath the email or phone input on the ChatGPT browser login page`,
                      }),
                }),
              ],
            })),
      (n[32] = u),
      (n[33] = ee),
      (n[34] = k),
      (n[35] = f),
      (n[36] = C),
      (n[37] = R),
      (n[38] = z),
      (n[39] = O),
      (n[40] = q))
    : (q = n[40]);
  let J;
  n[41] !== Be ||
  n[42] !== C ||
  n[43] !== !1 ||
  n[44] !== U ||
  n[45] !== W ||
  n[46] !== G ||
  n[47] !== K ||
  n[48] !== q
    ? ((J = (0, $.jsxs)(Be, { eligible: !1, pending: C, onSelect: U, children: [W, G, K, q] })),
      (n[41] = Be),
      (n[42] = C),
      (n[43] = !1),
      (n[44] = U),
      (n[45] = W),
      (n[46] = G),
      (n[47] = K),
      (n[48] = q),
      (n[49] = J))
    : (J = n[49]);
  let Y;
  n[50] !== C || n[51] !== H || n[52] !== J || n[53] !== V
    ? ((Y = (0, $.jsxs)(`div`, {
        ref: V,
        className: `flex w-full flex-col gap-5`,
        "aria-busy": C,
        children: [H, J],
      })),
      (n[50] = C),
      (n[51] = H),
      (n[52] = J),
      (n[53] = V),
      (n[54] = Y))
    : (Y = n[54]);
  let X;
  return (
    n[55] !== Le || n[56] !== o || n[57] !== i || n[58] !== p || n[59] !== Y || n[60] !== Re
      ? ((X = (0, $.jsx)(Le, { showHomeLink: p, presentation: i, description: o, title: Re, children: Y })),
        (n[55] = Le),
        (n[56] = o),
        (n[57] = i),
        (n[58] = p),
        (n[59] = Y),
        (n[60] = Re),
        (n[61] = X))
      : (X = n[61]),
    X
  );
}
function Ke() {}
function qe(e) {
  let { method: t } = e;
  return t === `email` || t === `phone_number`;
}
function Je(e, t, n) {
  let r = ge(e, t);
  return n && !r.includes(`#`) ? `${r}${n}` : r;
}
var Ye, Q, $, Xe, Ze, Qe, $e;
function et() {
  return (et = e(() => {
    ((Ye = h()),
      Se(),
      ee(),
      ce(),
      (Q = c()),
      S(),
      p(),
      N(),
      Oe(),
      ne(),
      V(),
      se(),
      b(),
      D(),
      R(),
      P(),
      F(),
      je(),
      n(),
      M(),
      v(),
      k(),
      Be(),
      O(),
      Ie(),
      G(),
      L(),
      De(),
      We(),
      Ne(),
      ($ = d()),
      (Xe = { google: `google-oauth2`, microsoft: `windowslive`, apple: `apple` }),
      (Ze = {
        google: (0, $.jsx)(z, { "aria-hidden": `true`, className: `size-5 shrink-0` }),
        apple: (0, $.jsx)(s, {}),
        microsoft: (0, $.jsx)(I, { "aria-hidden": `true`, className: `size-5 shrink-0` }),
        phone_number: (0, $.jsx)(fe, {}),
        email: (0, $.jsx)(i, {}),
      }),
      (Qe = {
        google: A.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_GOOGLE,
        apple: A.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_APPLE,
        microsoft: A.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_MICROSOFT,
        email: A.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE,
        phone_number: A.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE,
        password: A.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_PASSWORD,
        sso: A.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_SSO,
      }),
      ($e = ae({
        google: {
          id: `browser.auth.login.google`,
          defaultMessage: `Continue with Google`,
          description: `Button on the ChatGPT browser login page that starts Google sign-in`,
        },
        apple: {
          id: `browser.auth.login.apple`,
          defaultMessage: `Continue with Apple`,
          description: `Button on the ChatGPT browser login page that starts Apple sign-in`,
        },
        microsoft: {
          id: `browser.auth.login.microsoft`,
          defaultMessage: `Continue with Microsoft`,
          description: `Button on the ChatGPT browser login page that starts Microsoft sign-in`,
        },
        email: {
          id: `browser.auth.login.continueWithEmail`,
          defaultMessage: `Continue with email`,
          description: `Button switching the browser login form from phone number entry to email address entry`,
        },
        phone_number: {
          id: `browser.auth.login.continueWithPhone`,
          defaultMessage: `Continue with phone`,
          description: `Button switching the browser login form from email address entry to phone number entry`,
        },
      })));
  }))();
}
export { V as i, et as n, B as r, Ge as t };
//# sourceMappingURL=login-page-484bc3f7ffae.js.map
