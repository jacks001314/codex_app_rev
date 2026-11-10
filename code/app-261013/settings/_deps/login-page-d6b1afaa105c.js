const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./host-d877e6db5f86.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./chatgpt-user-granular-consent-d4ea3e160b4c.js",
      "./host-2fbd8af1f95b.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  Ait as r,
  B4 as i,
  Bz as a,
  Cot as ee,
  Cxt as te,
  EPt as o,
  IDt as s,
  Ixt as ne,
  NH as c,
  Pxt as l,
  Rnt as re,
  TJ as u,
  TLt as d,
  VDt as ie,
  X9 as ae,
  Z9 as oe,
  _xt as f,
  fPt as p,
  iz as m,
  jDt as se,
  jit as ce,
  pLt as h,
  pPt as g,
  rz as _,
  t3 as le,
  vxt as ue,
  vzt as v,
  wG as y,
  wot as de,
  wxt as fe,
  xMt as pe,
  yzt as me,
  z4 as b,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Er as he,
  DPn as ge,
  EM as _e,
  FM as x,
  NM as ve,
  PM as ye,
  QDr as be,
  TM as S,
  TPn as xe,
  UP as Se,
  XDr as C,
  aDr as Ce,
  eDr as w,
  eOr as we,
  fur as Te,
  jM as Ee,
  nR as T,
  pur as De,
  zM as E,
} from "./app-initial-5851df3f6cb1.js";
import { Fc as D, Sp as O, xp as Oe } from "./app-primary-fe8a450b3b04.js";
import { n as ke, t as k } from "./session-594d75fbcc25.js";
import { n as A, t as Ae } from "./page-layout-eef0bfb60741.js";
import { a as je, n as Me, r as Ne } from "./login-analytics-dac554e24c20.js";
import { n as j, t as Pe } from "./google-logo-78f7c5d82eb0.js";
import { n as Fe, t as M } from "./auth-session-cookie-304428495d8f.js";
import { n as N } from "./login-handoff-page-63212c6bdcee.js";
function P(e) {
  return m() ? (0, F.jsx)(I, { ...e }) : null;
}
var F, I;
function L() {
  return (L = e(() => {
    (b(),
      _(),
      (F = pe()),
      g(),
      (I = i(
        async () =>
          (
            await p(
              async () => {
                let { CookieConsentHost: e } = await import(`./host-d877e6db5f86.js`);
                return { CookieConsentHost: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
              import.meta.url,
            )
          ).CookieConsentHost,
      )));
  }))();
}
function Ie(e, t, n) {
  let r = e.get(`ext-web-mobile-direct-phone-login`) === `true` && e.get(`usernameKind`) === `phone_number`,
    i =
      e.get(`ext-web-mobile-login-continuation`) === `true` &&
      e.get(`mweb_fallback`) === `1` &&
      [`ext-web-mobile-login-continuation`, `mweb_fallback`, `auth_session_logging_id`, `ext-oai-did`].every(
        (t) => e.getAll(t).length === 1,
      );
  if (!r && !i) return;
  let a = R.safeParse({ authSessionLoggingId: t, deviceId: n }).data;
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
var R;
function z() {
  return (z = e(() => {
    (o(),
      (R = h({
        authSessionLoggingId: d().regex(
          /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
        ),
        deviceId: d().min(1),
      })));
  }))();
}
function Le(e, t) {
  let n = e.getDynamicConfig(`489084288`).get(`options`, V),
    r = he(e, `3233347819`).get(`should_hide_microsoft_sso`, !1);
  return V.flatMap((i) => {
    let a = e.getDynamicConfig(B[i]);
    return !n.includes(i) ||
      !a.get(`enabled`, !0) ||
      (i === `microsoft` && r && new URLSearchParams(t).get(`microsoft_sso`) !== `1`)
      ? []
      : [{ method: i, disabled: a.get(`tempDisabled`, !1) }];
  }).sort((e, t) => n.indexOf(e.method) - n.indexOf(t.method));
}
var B, V;
function H() {
  return (H = e(() => {
    (w(),
      (B = {
        google: `1341269548`,
        apple: `730493191`,
        microsoft: `111706139`,
        email: `734083401`,
        phone_number: `1165494509`,
      }),
      (V = [`google`, `apple`, `microsoft`, `email`, `phone_number`]));
  }))();
}
function U(e) {
  let n = (0, Ve.c)(64),
    {
      initialAuthSessionLoggingId: i,
      presentation: a,
      description: o,
      callbackPath: c,
      screenHint: l,
      title: re,
      initialEmail: u,
      authorizationParams: d,
      optionalSsoConnection: f,
      showHomeLink: p,
    } = e,
    m = ne(ee),
    { authMethod: se, isLoading: ce } = De(),
    h = ie(),
    g = fe(),
    _ = new URLSearchParams(g.search),
    le = Ce(),
    v = Le(le, g.search),
    y = a !== `dialog` && ue(`/auth/login`, g.pathname) != null ? r() : void 0,
    de = y == null ? void 0 : Ie(_, y.authSessionLoggingId, y.statsigContext.deviceId),
    [pe, me] = (0, W.useState)(de?.usernameKind ?? `email`),
    [b, ge] = (0, W.useState)(!1),
    x = (0, W.useRef)(null),
    [S, Se] = (0, W.useState)(_.has(`error`)),
    [C] = (0, W.useState)(() => i ?? de?.authSessionLoggingId ?? crypto.randomUUID()),
    w = (0, W.useRef)(!1),
    Te = v.filter(ze),
    T =
      Te.find((e) => {
        let { method: t } = e;
        return t === pe;
      }) ?? Te[0],
    E = T?.method === `phone_number`,
    D = Be(c == null ? _.get(`next`) : null, c ?? _.get(`callbackUrl`), c == null ? g.hash : ``),
    O = new URL(D),
    Oe = /^\/refer\/[^/]+\/?$/.test(O.pathname),
    k = Me(O),
    A = k != null && !_.has(`sso`) && he(le, `3233347819`).get(`show_selected_plan_intent`, !1),
    Ne = te(`/u/:username`),
    j = !ce && se == null && a !== `dialog` && ue(Ne, O.pathname) != null,
    Pe = (0, W.useRef)(null),
    M;
  n[0] !== j || n[1] !== g.key || n[2] !== m
    ? ((M = () => {
        j &&
          document.visibilityState === `visible` &&
          Pe.current !== g.key &&
          ((Pe.current = g.key),
          be(m, ae, { action: oe.CODEX_PROFILE_SIGNED_OUT_ACTION_TYPE_LOGIN_PROMPT_SHOWN }));
      }),
      (n[0] = j),
      (n[1] = g.key),
      (n[2] = m),
      (n[3] = M))
    : (M = n[3]);
  let N = (0, W.useEffectEvent)(M),
    P;
  n[4] === N
    ? (P = n[5])
    : ((P = () => {
        N();
        let e = () => N();
        return (
          document.addEventListener(`visibilitychange`, e),
          () => document.removeEventListener(`visibilitychange`, e)
        );
      }),
      (n[4] = N),
      (n[5] = P));
  let F;
  (n[6] !== j || n[7] !== g.key ? ((F = [j, g.key]), (n[6] = j), (n[7] = g.key), (n[8] = F)) : (F = n[8]),
    (0, W.useEffect)(P, F));
  let I, L;
  (n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = () => {
        let e = (e) => {
            e.persisted && ((x.current = null), ge(!1));
          },
          t = () => {
            x.current?.abort();
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
      (n[9] = I),
      (n[10] = L))
    : ((I = n[9]), (L = n[10])),
    (0, W.useEffect)(I, L));
  let R;
  n[11] !== j || n[12] !== m
    ? ((R = () => {
        j && be(m, ae, { action: oe.CODEX_PROFILE_SIGNED_OUT_ACTION_TYPE_LOGIN_CLICKED });
      }),
      (n[11] = j),
      (n[12] = m),
      (n[13] = R))
    : (R = n[13]);
  let z = R,
    B;
  n[14] !== C || n[15] !== d || n[16] !== D || n[17] !== j || n[18] !== m || n[19] !== l
    ? ((B = async (e) => {
        if (x.current != null) return;
        let t = new AbortController();
        ((x.current = t), ge(!0), Se(!1));
        let n;
        (e.method === `email` && (n = Ee.ACCESS_FLOW_FIELD_EMAIL),
          e.method === `phone_number` && (n = Ee.ACCESS_FLOW_FIELD_PHONE),
          be(m, ye, {
            authSessionLoggingId: C,
            actionType: We[e.method],
            page: ve.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_PAGE,
            field: n,
          }));
        try {
          await m.get(we).flush(1e3).catch(Re);
          let n;
          n =
            `username` in e
              ? { login_hint: e.username }
              : e.method === `sso`
                ? {
                    connection: e.connection,
                    connection_provider:
                      e.connection.startsWith(`conn_`) || e.connection.startsWith(`oaisaml_`) ? `2` : `1`,
                  }
                : { connection: e.method === `password` ? `password` : He[e.method] };
          let r = await ke(
            D,
            { ...d, auth_session_logging_id: C, ...(l == null ? {} : { screen_hint: l }), ...n },
            t.signal,
          );
          if (t.signal.aborted) return;
          if (r.ok) {
            (_e(j ? C : null), window.location.assign(r.url));
            return;
          }
        } catch {}
        t.signal.aborted || ((x.current = null), Se(!0), ge(!1));
      }),
      (n[14] = C),
      (n[15] = d),
      (n[16] = D),
      (n[17] = j),
      (n[18] = m),
      (n[19] = l),
      (n[20] = B))
    : (B = n[20]);
  let V = B,
    H;
  if (Oe) {
    let e;
    (n[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, G.jsx)(s, {
          id: `browser.auth.login.referralTitle`,
          defaultMessage: `Accept this referral`,
          description: `Heading on the ChatGPT sign-in page when the user is accepting a referral link`,
        })),
        (n[21] = e))
      : (e = n[21]),
      (H = e));
  } else if (A && k === `go`) {
    let e;
    (n[22] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, G.jsx)(s, {
          id: `browser.auth.login.selectedPlanTitle.go`,
          defaultMessage: `Sign in to continue with Go`,
          description: `Full heading on the ChatGPT browser sign-in page for a signed-out user who selected ChatGPT Go before signing in. Related headings name Plus and Pro.`,
        })),
        (n[22] = e))
      : (e = n[22]),
      (H = e));
  } else if (A && k === `plus`) {
    let e;
    (n[23] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, G.jsx)(s, {
          id: `browser.auth.login.selectedPlanTitle.plus`,
          defaultMessage: `Sign in to continue with Plus`,
          description: `Full heading on the ChatGPT browser sign-in page for a signed-out user who selected ChatGPT Plus before signing in. Related headings name Go and Pro.`,
        })),
        (n[23] = e))
      : (e = n[23]),
      (H = e));
  } else if (A && (k === `pro` || k === `pro5x`)) {
    let e;
    (n[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, G.jsx)(s, {
          id: `browser.auth.login.selectedPlanTitle.pro`,
          defaultMessage: `Sign in to continue with Pro`,
          description: `Full heading on the ChatGPT browser sign-in page for a signed-out user who selected ChatGPT Pro or the Pro 5x purchase option before signing in. The visible plan name is Pro. Related headings name Go and Plus.`,
        })),
        (n[24] = e))
      : (e = n[24]),
      (H = e));
  } else {
    let e;
    (n[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, G.jsx)(s, {
          id: `browser.auth.login.title`,
          defaultMessage: `Log in or sign up`,
          description: `Heading on the ChatGPT browser login page where users choose a sign-in method or create an account`,
        })),
        (n[25] = e))
      : (e = n[25]),
      (H = e));
  }
  let U = Ae,
    K = re ?? H,
    q;
  n[26] !== C || n[27] !== m || n[28] !== k
    ? ((q = (e) => {
        e == null || w.current || (Fe(C), (w.current = !0), je(m, C, k ?? void 0));
      }),
      (n[26] = C),
      (n[27] = m),
      (n[28] = k),
      (n[29] = q))
    : (q = n[29]);
  let J;
  n[30] === S
    ? (J = n[31])
    : ((J = S
        ? (0, G.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-danger`,
            children: (0, G.jsx)(s, {
              id: `browser.auth.login.failed`,
              defaultMessage: `We couldn’t sign you in. Please try again`,
              description: `Inline error on the ChatGPT browser login page after an authentication request fails; the user can retry with any available method`,
            }),
          })
        : null),
      (n[30] = S),
      (n[31] = J));
  let Y;
  n[32] !== f || n[33] !== b || n[34] !== V
    ? ((Y =
        f == null
          ? null
          : (0, G.jsx)(t, {
              type: `button`,
              color: `primary`,
              size: `auth`,
              disabled: b,
              onClick: () => {
                V({ method: `sso`, connection: f });
              },
              children: (0, G.jsx)(s, {
                id: `AcceptInvitePage.sso.button.company`,
                defaultMessage: `Continue with company SSO`,
                description: `Primary button on the workspace invitation login-method picker for an invited end user. Opens their company's single sign-on provider. Other buttons offer password and social login when company SSO is optional. Keep the label short.`,
              }),
            })),
      (n[32] = f),
      (n[33] = b),
      (n[34] = V),
      (n[35] = Y))
    : (Y = n[35]);
  let Ke =
      v.some((e) => {
        let { method: t } = e;
        return t !== T?.method;
      }) || f != null
        ? (0, G.jsx)(`div`, {
            className: `flex flex-col gap-3`,
            children: v
              .filter((e) => {
                let { method: t } = e;
                return f == null ? t !== T?.method : t !== `phone_number`;
              })
              .map((e) => {
                let { method: n, disabled: r } = e;
                return (0, G.jsxs)(
                  t,
                  {
                    type: `button`,
                    color: `outlineSurface`,
                    size: `auth`,
                    disabled: b || r,
                    onClick: () => {
                      f != null && n === `email`
                        ? V({ method: `password` })
                        : n === `email` || n === `phone_number`
                          ? me(n)
                          : (z(), V({ method: n }));
                    },
                    children: [
                      Ue[n],
                      f != null && n === `email`
                        ? (0, G.jsx)(s, {
                            id: `AcceptInvitePage.sso.button.password`,
                            defaultMessage: `Continue with password`,
                            description: `Button on the workspace invitation login-method picker for an invited end user when company single sign-on is optional. Selects password login or signup directly, instead of displaying another SSO picker. Other buttons offer company SSO and social login. Keep the label short.`,
                          })
                        : (0, G.jsx)(s, { ...Ge[n] }),
                    ],
                  },
                  n,
                );
              }),
          })
        : null,
    X;
  n[36] !== f || n[37] !== v || n[38] !== T
    ? ((X =
        f == null && T != null && v.length > 1
          ? (0, G.jsxs)(`div`, {
              className: `flex items-center gap-6 py-1 text-xs text-secondary`,
              children: [
                (0, G.jsx)(`div`, { className: `h-px flex-1 bg-border` }),
                (0, G.jsx)(s, {
                  id: `browser.auth.login.or`,
                  defaultMessage: `OR`,
                  description: `Short separator between provider sign-in buttons and the email or phone input on the browser login page; use uppercase where applicable`,
                }),
                (0, G.jsx)(`div`, { className: `h-px flex-1 bg-border` }),
              ],
            })
          : null),
      (n[36] = f),
      (n[37] = v),
      (n[38] = T),
      (n[39] = X))
    : (X = n[39]);
  let Z;
  n[40] !== u ||
  n[41] !== h ||
  n[42] !== E ||
  n[43] !== f ||
  n[44] !== b ||
  n[45] !== z ||
  n[46] !== V ||
  n[47] !== T
    ? ((Z =
        f != null || T == null
          ? null
          : (0, G.jsxs)(`form`, {
              className: `flex w-full flex-col gap-5`,
              onSubmit: (e) => {
                e.preventDefault();
                let t = new FormData(e.currentTarget).get(`username`);
                typeof t == `string` &&
                  V({
                    method: E ? `phone_number` : `email`,
                    username: E ? t.replace(/[\s()-]/g, ``) : t.trim(),
                  });
              },
              children: [
                (0, G.jsxs)(`label`, {
                  children: [
                    (0, G.jsx)(`span`, {
                      className: `sr-only`,
                      children: E
                        ? (0, G.jsx)(s, {
                            id: `browser.auth.login.phoneLabel`,
                            defaultMessage: `Phone number`,
                            description: `Label for the phone number input on the ChatGPT browser login page`,
                          })
                        : (0, G.jsx)(s, {
                            id: `browser.auth.login.emailLabel`,
                            defaultMessage: `Email address`,
                            description: `Label for the email input on the ChatGPT browser login page`,
                          }),
                    }),
                    (0, G.jsx)(
                      xe,
                      {
                        variant: `auth`,
                        name: `username`,
                        type: E ? `tel` : `email`,
                        autoComplete: E ? `tel` : `email`,
                        defaultValue: E ? void 0 : u,
                        required: !0,
                        disabled: b || T.disabled,
                        placeholder: E
                          ? h.formatMessage({
                              id: `browser.auth.login.phonePlaceholder`,
                              defaultMessage: `+1 555 123 4567`,
                              description: `Example international phone number, including country code, for the phone input on the ChatGPT browser login page`,
                            })
                          : h.formatMessage({
                              id: `browser.auth.login.emailPlaceholder`,
                              defaultMessage: `Email address`,
                              description: `Placeholder in the email address input on the browser login page`,
                            }),
                      },
                      T.method,
                    ),
                  ],
                }),
                (0, G.jsx)(t, {
                  type: `submit`,
                  color: `primary`,
                  size: `auth`,
                  disabled: b || T.disabled,
                  onClick: z,
                  children: b
                    ? (0, G.jsx)(s, {
                        id: `browser.auth.login.pending`,
                        defaultMessage: `Connecting…`,
                        description: `Label while the ChatGPT browser login page waits for the selected authentication provider`,
                      })
                    : (0, G.jsx)(s, {
                        id: `browser.auth.login.continue`,
                        defaultMessage: `Continue`,
                        description: `Submit button beneath the email or phone input on the ChatGPT browser login page`,
                      }),
                }),
              ],
            })),
      (n[40] = u),
      (n[41] = h),
      (n[42] = E),
      (n[43] = f),
      (n[44] = b),
      (n[45] = z),
      (n[46] = V),
      (n[47] = T),
      (n[48] = Z))
    : (Z = n[48]);
  let Q;
  n[49] !== b || n[50] !== q || n[51] !== J || n[52] !== Y || n[53] !== Ke || n[54] !== X || n[55] !== Z
    ? ((Q = (0, G.jsxs)(`div`, {
        ref: q,
        className: `flex w-full flex-col gap-5`,
        "aria-busy": b,
        children: [J, Y, Ke, X, Z],
      })),
      (n[49] = b),
      (n[50] = q),
      (n[51] = J),
      (n[52] = Y),
      (n[53] = Ke),
      (n[54] = X),
      (n[55] = Z),
      (n[56] = Q))
    : (Q = n[56]);
  let $;
  return (
    n[57] !== U || n[58] !== o || n[59] !== a || n[60] !== p || n[61] !== Q || n[62] !== K
      ? (($ = (0, G.jsx)(U, { showHomeLink: p, presentation: a, description: o, title: K, children: Q })),
        (n[57] = U),
        (n[58] = o),
        (n[59] = a),
        (n[60] = p),
        (n[61] = Q),
        (n[62] = K),
        (n[63] = $))
      : ($ = n[63]),
    $
  );
}
function Re() {}
function ze(e) {
  let { method: t } = e;
  return t === `email` || t === `phone_number`;
}
function Be(e, t, n) {
  let r = Se(e, t);
  return n && !r.includes(`#`) ? `${r}${n}` : r;
}
var Ve, W, G, He, Ue, We, Ge;
function K() {
  return (K = e(() => {
    ((Ve = v()),
      E(),
      re(),
      l(),
      (W = me()),
      se(),
      f(),
      T(),
      Te(),
      ce(),
      L(),
      le(),
      u(),
      ge(),
      j(),
      O(),
      D(),
      C(),
      de(),
      w(),
      _(),
      M(),
      z(),
      Ne(),
      N(),
      H(),
      A(),
      S(),
      k(),
      (G = pe()),
      (He = { google: `google-oauth2`, microsoft: `windowslive`, apple: `apple` }),
      (Ue = {
        google: (0, G.jsx)(Pe, { "aria-hidden": `true`, className: `size-5 shrink-0` }),
        apple: (0, G.jsx)(a, {}),
        microsoft: (0, G.jsx)(Oe, { "aria-hidden": `true`, className: `size-5 shrink-0` }),
        phone_number: (0, G.jsx)(y, {}),
        email: (0, G.jsx)(c, {}),
      }),
      (We = {
        google: x.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_GOOGLE,
        apple: x.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_APPLE,
        microsoft: x.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_MICROSOFT,
        email: x.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE,
        phone_number: x.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE,
        password: x.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_PASSWORD,
        sso: x.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_SSO,
      }),
      (Ge = n({
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
export { L as i, K as n, P as r, U as t };
//# sourceMappingURL=login-page-d6b1afaa105c.js.map
