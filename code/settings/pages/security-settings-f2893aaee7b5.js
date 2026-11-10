import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $G as n,
  A3t as r,
  AMt as i,
  Amn as a,
  BS as o,
  CW as s,
  Cpn as c,
  D3t as l,
  DC as u,
  Dht as d,
  Eht as f,
  F3t as p,
  GC as m,
  Gu as h,
  Hu as g,
  IKt as _,
  IXt as v,
  JG as y,
  JS as b,
  JXt as x,
  Jrt as S,
  KG as C,
  KXt as w,
  Ku as T,
  LSt as E,
  MMt as D,
  MSt as O,
  N3t as k,
  NSt as A,
  Nlt as j,
  O3t as M,
  OC as N,
  Opn as P,
  PSt as F,
  QG as I,
  QXt as L,
  Qu as R,
  RKt as ee,
  RSt as te,
  S3t as ne,
  Spn as z,
  TC as B,
  TJt as V,
  TW as re,
  Trn as H,
  VS as ie,
  Vu as ae,
  XS as oe,
  Xdt as se,
  Xrt as ce,
  Xu as U,
  Xxt as le,
  Yrt as ue,
  ZG as de,
  ZXt as fe,
  Zrt as pe,
  Zu as W,
  _H as me,
  _rn as he,
  a3t as ge,
  aYt as _e,
  ax as ve,
  d3t as ye,
  dbt as be,
  di as xe,
  drn as Se,
  eSt as Ce,
  eit as we,
  fi as Te,
  gH as Ee,
  gMt as De,
  glt as Oe,
  hMt as ke,
  hmn as Ae,
  iit as je,
  iq as Me,
  jG as Ne,
  jMt as Pe,
  kC as Fe,
  kG as Ie,
  kMt as Le,
  kht as Re,
  kmn as ze,
  krn as Be,
  li as Ve,
  nZt as He,
  nit as Ue,
  o3t as We,
  oYt as Ge,
  ox as Ke,
  pbt as qe,
  qu as Je,
  rit as Ye,
  rq as Xe,
  rrn as Ze,
  s3t as Qe,
  sYt as $e,
  sut as et,
  tit as tt,
  uSt as nt,
  ubt as rt,
  ui as it,
  wJt as at,
  wrn as ot,
  xrn as st,
  ySt as ct,
} from "./app-initial-f094ef01c64d.js";
import {
  Bl as lt,
  Ml as ut,
  Nl as dt,
  hi as ft,
  mi as pt,
  nv as mt,
  tv as ht,
  zl as gt,
} from "./app-primary-4c40d73a1074.js";
import { n as _t, t as vt } from "./tabs-efdcd8aaf082.js";
import { t as yt } from "./browser-2cc7a64d9f80.js";
import { n as bt, r as xt, t as St } from "./linked-app-logo-d20801ff95ab.js";
import { a as Ct, r as wt } from "./session-c33967fa604f.js";
import { i as Tt, t as Et } from "./settings-route-state-24ba1ff4c511.js";
function Dt(e) {
  let t = { "ChatGPT-Account-ID": e };
  return {
    addPassword: {
      queryKey: [`chatgpt-security`, e, `add-password-eligibility`],
      queryFn: ({ signal: e }) =>
        G.safeGet(`/accounts/add_password/eligibility`, { additionalHeaders: t, signal: e }),
      staleTime: at.ONE_MINUTE,
      retry: !1,
    },
    changePassword: {
      queryKey: [`chatgpt-security`, e, `change-password-eligibility`],
      queryFn: ({ signal: e }) =>
        G.safeGet(`/accounts/change_password/eligibility`, { additionalHeaders: t, signal: e }),
      staleTime: at.ONE_MINUTE,
      retry: !1,
    },
    mfa: {
      queryKey: [`chatgpt-security`, e, `mfa`],
      queryFn: ({ signal: e }) =>
        G.safeGet(`/accounts/mfa_info`, { additionalHeaders: t, signal: e }),
      staleTime: at.ONE_MINUTE,
      retry: !1,
    },
    sessions: {
      queryKey: [`chatgpt-security`, e, `sessions`],
      queryFn: ({ signal: e }) =>
        G.safeGet(`/accounts/sessions`, { additionalHeaders: t, signal: e }),
      staleTime: at.ONE_MINUTE,
      retry: !1,
    },
    linkedApps: {
      queryKey: [`chatgpt-security`, e, `linked-apps`],
      queryFn: ({ signal: e }) =>
        G.safeGet(`/client_applications`, { additionalHeaders: t, signal: e }),
      staleTime: at.ONE_MINUTE,
      retry: !1,
    },
    cyber: {
      queryKey: [`chatgpt-security`, e, `cyber`],
      queryFn: ({ signal: e }) =>
        G.safeGet(`/cyber_verification/status`, { additionalHeaders: t, signal: e }),
      staleTime: at.ONE_MINUTE,
      retry: !1,
    },
    protection: {
      queryKey: [`chatgpt-security`, e, `protection`],
      queryFn: ({ signal: e }) =>
        G.safeGet(`/accounts/security_settings/info`, { additionalHeaders: t, signal: e }),
      staleTime: at.ONE_MINUTE,
      refetchOnWindowFocus: `always`,
      retry: !1,
    },
    workspace: {
      queryKey: [`chatgpt-security`, e, `workspace`],
      queryFn: ({ signal: n }) =>
        G.safeGet(`/accounts/{account_id}/settings`, {
          additionalHeaders: t,
          signal: n,
          parameters: { path: { account_id: e } },
        }),
      staleTime: at.ONE_MINUTE,
      retry: !1,
    },
  };
}
var G,
  Ot = e(() => {
    (nt(), V(), ee(), (G = new _({ getAdditionalHeaders: le })));
  });
function kt(e) {
  let t = (0, At.c)(13),
    { accountId: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = Dt(n)), (t[0] = n), (t[1] = r));
  let { data: i } = ne(r.cyber),
    a;
  t[2] === n ? (a = t[3]) : ((a = Dt(n)), (t[2] = n), (t[3] = a));
  let { data: o, isSuccess: s } = ne(a.protection),
    l = o?.advanced_protection_mode_enabled === !0,
    u = s && (o.aas_eligible || l),
    d = i?.tac1_enabled === !0;
  if (!u && !d) return null;
  let f;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, jt.jsx)(W.Header, {
        title: (0, jt.jsx)(c, {
          id: `settings.chatGpt.security.advancedSecurity`,
          defaultMessage: `Advanced security`,
          description: `Section heading above additional account-security programs in Security and login settings.`,
        }),
      })),
      (t[4] = f))
    : (f = t[4]);
  let p;
  t[5] !== l || t[6] !== u
    ? ((p = u
        ? (0, jt.jsx)(Je, {
            label: (0, jt.jsx)(c, {
              id: `settings.chatGpt.security.advancedProtection.title`,
              defaultMessage: `Advanced account security`,
              description: `Title of the Advanced account security row in Security and login settings, where eligible users can enroll and enrolled users can manage their protections in ChatGPT. Translate the feature name.`,
            }),
            description: l
              ? (0, jt.jsx)(c, {
                  id: `settings.chatGpt.security.advancedProtection.enabled`,
                  defaultMessage: `Advanced account security is enabled`,
                  description: `Status description in the Advanced account security row in Security and login settings, confirming that the user's account protections are already enabled.`,
                })
              : (0, jt.jsx)(c, {
                  id: `settings.chatGpt.security.advancedProtection.description`,
                  defaultMessage: `Use stronger sign-in protections and additional safeguards to help prevent unauthorized access to your account`,
                  description: `Description of Advanced account security in Security and login settings for users who are eligible but have not enrolled. The adjacent link opens ChatGPT to explain the protections and complete enrollment.`,
                }),
            control: (0, jt.jsx)(Ie, {
              initiator: `open_in_browser_bridge`,
              href: new URL(
                l ? `/#settings/Security/advanced-protection` : `/advanced-account-security`,
                E().auth.provider === `openai-dev`
                  ? `https://chatgpt-staging.com`
                  : `https://chatgpt.com`,
              ).toString(),
              children: l
                ? (0, jt.jsx)(c, {
                    id: `settings.chatGpt.security.advancedProtection.manage`,
                    defaultMessage: `Manage in ChatGPT`,
                    description: `Link in the Advanced account security row in Security and login settings for an already enrolled user. It opens the existing ChatGPT settings page to manage protections. Keep this action label short.`,
                  })
                : (0, jt.jsx)(c, {
                    id: `settings.chatGpt.security.advancedProtection.enroll`,
                    defaultMessage: `Enroll in ChatGPT`,
                    description: `Link in the Advanced account security row in Security and login settings for an eligible user who has not enrolled. It opens the existing ChatGPT landing page to learn about the protections and begin enrollment. Keep this action label short.`,
                  }),
            }),
          })
        : null),
      (t[5] = l),
      (t[6] = u),
      (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] === d
    ? (m = t[9])
    : ((m = d
        ? (0, jt.jsx)(Je, {
            label: (0, jt.jsx)(Ie, {
              initiator: `open_in_browser_bridge`,
              href: `https://chatgpt.com/cyber`,
              children: (0, jt.jsx)(c, {
                id: `settings.chatGpt.security.cyber.title`,
                defaultMessage: `Trusted Access for Cyber`,
                description: `Link to the cybersecurity model eligibility program from Security and login settings. This is the formal program name.`,
              }),
            }),
            description: (0, jt.jsx)(c, {
              id: `settings.chatGpt.security.cyber.description`,
              defaultMessage: `Check your eligibility to use our most capable models for cybersecurity work`,
              description: `Supporting text for the Trusted Access for Cyber program link in Security and login settings.`,
            }),
            control: null,
          })
        : null),
      (t[8] = d),
      (t[9] = m));
  let h;
  return (
    t[10] !== p || t[11] !== m
      ? ((h = (0, jt.jsxs)(W, {
          className: `select-none`,
          children: [
            f,
            (0, jt.jsx)(W.Content, { children: (0, jt.jsxs)(ae, { children: [p, m] }) }),
          ],
        })),
        (t[10] = p),
        (t[11] = m),
        (t[12] = h))
      : (h = t[12]),
    h
  );
}
var At,
  jt,
  Mt = e(() => {
    ((At = ze()), Qe(), z(), te(), Ne(), R(), U(), g(), Ot(), (jt = Ae()));
  }),
  Nt = e(() => {
    ut();
  });
async function Pt(e) {
  if (e == null) return;
  let t = `unsupported`,
    n = {};
  if (
    typeof PublicKeyCredential < `u` &&
    typeof PublicKeyCredential.signalAllAcceptedCredentials == `function`
  ) {
    n.accepted_credential_count = e.all_accepted_credential_ids.length;
    try {
      (await PublicKeyCredential.signalAllAcceptedCredentials({
        rpId: e.rp_id,
        userId: e.user_id_base64url,
        allAcceptedCredentialIds: e.all_accepted_credential_ids,
      }),
        (t = `success`));
    } catch (e) {
      ((t = `failure`), (n.error_name = e instanceof Error ? e.name : `UnknownError`));
    }
  }
  try {
    (await null)?.addBrowserDatadogRumAction(`passkey_credential_manager_sync_${t}`, n);
  } catch {}
}
var Ft = e(() => {
  m();
});
function It(e) {
  let t = (0, zt.c)(8),
    { title: n, subtitle: r, onBack: i, children: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, K.jsx)(c, {
        id: `settings.chatGpt.security.back`,
        defaultMessage: `Back`,
        description: `Button in a Security and login settings subpage that returns to its parent page without changing account settings.`,
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === i
    ? (s = t[2])
    : ((s = (0, K.jsx)(Le, { color: `ghost`, size: `toolbar`, onClick: i, children: o })),
      (t[1] = i),
      (t[2] = s));
  let l;
  return (
    t[3] !== a || t[4] !== r || t[5] !== s || t[6] !== n
      ? ((l = (0, K.jsx)(b, { title: n, subtitle: r, backSlot: s, children: a })),
        (t[3] = a),
        (t[4] = r),
        (t[5] = s),
        (t[6] = n),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
function Lt(e) {
  let t = (0, zt.c)(3),
    { isError: n, onRetry: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = n
          ? (0, K.jsxs)(`div`, {
              role: `alert`,
              className: `flex flex-col items-start gap-3 text-sm text-secondary`,
              children: [
                (0, K.jsx)(c, {
                  id: `settings.chatGpt.security.loadError`,
                  defaultMessage: `Couldn’t load security settings. Please try again`,
                  description: `Error on a ChatGPT Security and login settings page when its account data request fails. The retry button reloads this data.`,
                }),
                (0, K.jsx)(Le, {
                  color: `secondary`,
                  size: `toolbar`,
                  onClick: r,
                  children: (0, K.jsx)(c, {
                    id: `settings.chatGpt.security.retry`,
                    defaultMessage: `Retry`,
                    description: `Button beside an error in ChatGPT Security and login settings that retries loading account data.`,
                  }),
                }),
              ],
            })
          : (0, K.jsxs)(`div`, {
              role: `status`,
              className: `flex items-center gap-2 text-sm text-secondary`,
              children: [
                (0, K.jsx)(Pe, {}),
                (0, K.jsx)(c, {
                  id: `settings.chatGpt.security.loading`,
                  defaultMessage: `Loading security settings…`,
                  description: `Loading status while a ChatGPT Security and login settings page fetches account data.`,
                }),
              ],
            })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function Rt(e) {
  let t = (0, zt.c)(40),
    {
      title: n,
      children: r,
      confirmLabel: i,
      onConfirm: a,
      onClose: o,
      isPending: s,
      isError: l,
      informational: u,
    } = e,
    d = l !== void 0 && l,
    f = u !== void 0 && u,
    p;
  t[0] === r
    ? (p = t[1])
    : ((p = r == null ? { "aria-describedby": void 0 } : void 0), (t[0] = r), (t[1] = p));
  let m;
  t[2] !== s || t[3] !== o
    ? ((m = (e) => {
        !e && !s && o();
      }),
      (t[2] = s),
      (t[3] = o),
      (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] !== s || t[6] !== a
    ? ((h = (e) => {
        (e.preventDefault(), s || a());
      }),
      (t[5] = s),
      (t[6] = a),
      (t[7] = h))
    : (h = t[7]);
  let g;
  t[8] === n
    ? (g = t[9])
    : ((g = (0, K.jsx)(Ye, { className: `select-none`, children: n })), (t[8] = n), (t[9] = g));
  let _;
  t[10] === r
    ? (_ = t[11])
    : ((_ =
        r == null
          ? null
          : (0, K.jsx)(Ue, { asChild: !0, children: (0, K.jsx)(`div`, { children: r }) })),
      (t[10] = r),
      (t[11] = _));
  let v;
  t[12] !== g || t[13] !== _
    ? ((v = (0, K.jsx)(ce, {
        title: g,
        subtitle: _,
        subtitleSize: `sm`,
        subtitleTone: `secondary`,
      })),
      (t[12] = g),
      (t[13] = _),
      (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] === d
    ? (y = t[16])
    : ((y = d
        ? (0, K.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-danger`,
            children: (0, K.jsx)(c, {
              id: `settings.chatGpt.security.actionFailed`,
              defaultMessage: `Couldn’t complete this action. Please try again`,
              description: `Inline error after a confirmed account security action fails. The dialog stays open so the user can retry or cancel.`,
            }),
          })
        : null),
      (t[15] = d),
      (t[16] = y));
  let b;
  t[17] !== v || t[18] !== y
    ? ((b = (0, K.jsxs)(pe, { children: [v, y] })), (t[17] = v), (t[18] = y), (t[19] = b))
    : (b = t[19]);
  let x = !f,
    C;
  t[20] !== f || t[21] !== s || t[22] !== o
    ? ((C = f
        ? null
        : (0, K.jsx)(Le, {
            type: `button`,
            color: `secondary`,
            disabled: s,
            onClick: o,
            children: (0, K.jsx)(c, {
              id: `settings.chatGpt.security.cancel`,
              defaultMessage: `Cancel`,
              description: `Dismisses an account security confirmation without changing authentication, devices, or app access.`,
            }),
          })),
      (t[20] = f),
      (t[21] = s),
      (t[22] = o),
      (t[23] = C))
    : (C = t[23]);
  let w = f ? `primary` : `danger`,
    T;
  t[24] !== i || t[25] !== s || t[26] !== w
    ? ((T = (0, K.jsx)(Le, { type: `submit`, color: w, loading: s, disabled: s, children: i })),
      (t[24] = i),
      (t[25] = s),
      (t[26] = w),
      (t[27] = T))
    : (T = t[27]);
  let E;
  t[28] !== x || t[29] !== C || t[30] !== T
    ? ((E = (0, K.jsx)(pe, {
        children: (0, K.jsxs)(ue, { expandSingleButton: x, children: [C, T] }),
      })),
      (t[28] = x),
      (t[29] = C),
      (t[30] = T),
      (t[31] = E))
    : (E = t[31]);
  let D;
  t[32] !== b || t[33] !== E || t[34] !== h
    ? ((D = (0, K.jsxs)(S, { as: `form`, onSubmit: h, children: [b, E] })),
      (t[32] = b),
      (t[33] = E),
      (t[34] = h),
      (t[35] = D))
    : (D = t[35]);
  let O;
  return (
    t[36] !== D || t[37] !== p || t[38] !== m
      ? ((O = (0, K.jsx)(tt, { open: !0, contentProps: p, onOpenChange: m, children: D })),
        (t[36] = D),
        (t[37] = p),
        (t[38] = m),
        (t[39] = O))
      : (O = t[39]),
    O
  );
}
var zt,
  K,
  Bt = e(() => {
    ((zt = ze()), z(), i(), je(), we(), D(), oe(), (K = Ae()));
  });
function Vt(e) {
  let t = (0, Wt.c)(121),
    { accountId: n, factor: r, email: i, onClose: a } = e,
    o = P(),
    u = l(),
    [d, f] = (0, Kt.useState)(``),
    [p, m] = (0, Kt.useState)(``),
    [h, g] = (0, Kt.useState)(!1),
    [_, v] = (0, Kt.useState)(null),
    y = Ge(`3685705952`),
    b = dt(p),
    x = b?.country,
    C;
  x != null && y.get(`whatsapp`, []).includes(x)
    ? (C = `whatsapp`)
    : x != null && y.get(`sms`, []).includes(x) && (C = `sms`);
  let w, T;
  t[0] === n
    ? ((w = t[1]), (T = t[2]))
    : ((w = [`chatgpt-security`, n, `totp-enrollment`]),
      (T = (e) => {
        let { signal: t } = e;
        return G.safePost(`/accounts/mfa/enroll`, {
          additionalHeaders: { "ChatGPT-Account-ID": n },
          requestBody: { factor_type: `totp` },
          signal: t,
        });
      }),
      (t[0] = n),
      (t[1] = w),
      (t[2] = T));
  let E = r === `totp`,
    D;
  t[3] !== w || t[4] !== T || t[5] !== E
    ? ((D = {
        queryKey: w,
        queryFn: T,
        enabled: E,
        retry: !1,
        staleTime: 1 / 0,
        gcTime: 0,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (t[3] = w),
      (t[4] = T),
      (t[5] = E),
      (t[6] = D))
    : (D = t[6]);
  let { data: O, isError: k, refetch: A } = ne(D),
    j;
  t[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((j = (e) => v(e)), (t[7] = j)) : (j = t[7]);
  let M = ye({
      mutationFn: async () => {
        if (!b?.isValid() || C == null) return null;
        let e = await G.safePost(`/accounts/mfa/enroll`, {
          additionalHeaders: { "ChatGPT-Account-ID": n },
          requestBody: {
            factor_type: `sms`,
            phone_number: b.number,
            phone_verification_channel: C,
          },
        });
        return qt.parse(e);
      },
      onSuccess: j,
    }),
    N;
  t[8] !== n || t[9] !== _
    ? ((N = async () => {
        _ != null &&
          (await G.safePost(`/accounts/mfa/user/sms/resend_otp_for_enrollment`, {
            additionalHeaders: { "ChatGPT-Account-ID": n },
            requestBody: { session_id: _.session_id, factor_id: _.factor.id },
          }));
      }),
      (t[8] = n),
      (t[9] = _),
      (t[10] = N))
    : (N = t[10]);
  let F;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = () => f(``)), (t[11] = F))
    : (F = t[11]);
  let I;
  t[12] === N ? (I = t[13]) : ((I = { mutationFn: N, onSuccess: F }), (t[12] = N), (t[13] = I));
  let L = ye(I),
    R;
  t[14] !== n || t[15] !== d || t[16] !== r || t[17] !== _?.session_id || t[18] !== O?.session_id
    ? ((R = async () => {
        if (r === `push_auth`) {
          await G.safePost(`/accounts/mfa/enroll`, {
            additionalHeaders: { "ChatGPT-Account-ID": n },
            requestBody: { factor_type: r },
          });
          return;
        }
        let e = r === `totp` ? O?.session_id : _?.session_id;
        if (e == null || !/^\d{6}$/.test(d.trim())) return !1;
        if (
          !(
            await G.safePost(`/accounts/mfa/user/activate_enrollment`, {
              additionalHeaders: { "ChatGPT-Account-ID": n },
              requestBody: { factor_type: r, session_id: e, code: d.trim() },
            })
          ).success
        )
          throw Error(`MFA activation was not completed`);
      }),
      (t[14] = n),
      (t[15] = d),
      (t[16] = r),
      (t[17] = _?.session_id),
      (t[18] = O?.session_id),
      (t[19] = R))
    : (R = t[19]);
  let ee;
  t[20] !== n || t[21] !== a || t[22] !== u
    ? ((ee = async (e) => {
        e !== !1 && (await u.invalidateQueries({ queryKey: Dt(n).mfa.queryKey }), a());
      }),
      (t[20] = n),
      (t[21] = a),
      (t[22] = u),
      (t[23] = ee))
    : (ee = t[23]);
  let te;
  t[24] !== ee || t[25] !== R
    ? ((te = { mutationFn: R, onSuccess: ee }), (t[24] = ee), (t[25] = R), (t[26] = te))
    : (te = t[26]);
  let z = ye(te),
    B = M.isPending || z.isPending || L.isPending,
    V = r === `sms` && _ == null,
    re = tt,
    H;
  t[27] !== a || t[28] !== B
    ? ((H = (e) => {
        !e && !B && a();
      }),
      (t[27] = a),
      (t[28] = B),
      (t[29] = H))
    : (H = t[29]);
  let ie = S,
    ae;
  t[30] !== z || t[31] !== V || t[32] !== B || t[33] !== M
    ? ((ae = (e) => {
        (e.preventDefault(), !B && (V ? M.mutate() : z.mutate()));
      }),
      (t[30] = z),
      (t[31] = V),
      (t[32] = B),
      (t[33] = M),
      (t[34] = ae))
    : (ae = t[34]);
  let oe;
  t[35] !== r || t[36] !== V
    ? ((oe =
        r === `sms` && !V
          ? (0, q.jsx)(c, {
              id: `settings.chatGpt.security.mfa.smsCodeTitle`,
              defaultMessage: `Enter the code`,
              description: `Title of the text-message MFA verification dialog after a code has been sent to the user's phone.`,
            })
          : Jt[r]),
      (t[35] = r),
      (t[36] = V),
      (t[37] = oe))
    : (oe = t[37]);
  let se;
  t[38] === oe
    ? (se = t[39])
    : ((se = (0, q.jsx)(ce, { title: (0, q.jsx)(Ye, { children: oe }) })),
      (t[38] = oe),
      (t[39] = se));
  let U;
  t[40] === r
    ? (U = t[41])
    : ((U =
        r === `totp`
          ? (0, q.jsx)(Ue, {
              className: `text-sm text-secondary`,
              children: (0, q.jsx)(c, {
                id: `settings.chatGpt.security.mfa.scanInstructions`,
                defaultMessage: `Scan the QR code using your authenticator app, then enter the 6-digit code from the app`,
                description: `Instructions in authenticator setup. The user scans the displayed QR code and types a one-time six-digit code to activate MFA.`,
              }),
            })
          : null),
      (t[40] = r),
      (t[41] = U));
  let le;
  t[42] !== r || t[43] !== k || t[44] !== A || t[45] !== O
    ? ((le =
        r === `totp` && O?.secret == null
          ? (0, q.jsx)(Lt, { isError: k || O != null, onRetry: () => void A() })
          : null),
      (t[42] = r),
      (t[43] = k),
      (t[44] = A),
      (t[45] = O),
      (t[46] = le))
    : (le = t[46]);
  let de;
  t[47] !== i || t[48] !== r || t[49] !== h || t[50] !== O
    ? ((de =
        r === `totp` && O?.secret != null
          ? (0, q.jsxs)(q.Fragment, {
              children: [
                h
                  ? (0, q.jsx)(`code`, { className: `break-all select-text`, children: O.secret })
                  : (0, q.jsx)(Ut, { secret: O.secret, email: i }),
                (0, q.jsx)(Le, {
                  type: `button`,
                  color: `ghost`,
                  size: `toolbar`,
                  onClick: () => g(!h),
                  children: h
                    ? (0, q.jsx)(c, {
                        id: `settings.chatGpt.security.mfa.showQr`,
                        defaultMessage: `Show QR code`,
                        description: `Switches authenticator setup from the text secret back to the scannable QR code.`,
                      })
                    : (0, q.jsx)(c, {
                        id: `settings.chatGpt.security.mfa.showSecret`,
                        defaultMessage: `Can’t scan? Enter the code manually`,
                        description: `Shows the authenticator setup secret as selectable text when the user cannot scan its QR code.`,
                      }),
                }),
              ],
            })
          : null),
      (t[47] = i),
      (t[48] = r),
      (t[49] = h),
      (t[50] = O),
      (t[51] = de))
    : (de = t[51]);
  let fe;
  t[52] !== o || t[53] !== V || t[54] !== B || t[55] !== p
    ? ((fe = V
        ? (0, q.jsxs)(`label`, {
            className: `flex flex-col gap-2 text-sm`,
            children: [
              (0, q.jsx)(c, {
                id: `settings.chatGpt.security.mfa.phoneLabel`,
                defaultMessage: `Phone number`,
                description: `Label for the phone number, including international country code, used to set up text-message MFA.`,
              }),
              (0, q.jsx)(s, {
                name: `phone-number`,
                type: `tel`,
                autoComplete: `tel`,
                required: !0,
                autoFocus: !0,
                value: p,
                onChange: (e) => m(e.target.value),
                placeholder: o.formatMessage({
                  id: `settings.chatGpt.security.mfa.phonePlaceholder`,
                  defaultMessage: `+1 555 123 4567`,
                  description: `Example international phone number for the text-message MFA input. Keep a leading plus and country code; this is an example, not a real number.`,
                }),
                disabled: B,
              }),
            ],
          })
        : null),
      (t[52] = o),
      (t[53] = V),
      (t[54] = B),
      (t[55] = p),
      (t[56] = fe))
    : (fe = t[56]);
  let W;
  t[57] === r
    ? (W = t[58])
    : ((W =
        r === `push_auth`
          ? (0, q.jsx)(Ue, {
              className: `text-sm text-secondary`,
              children: (0, q.jsx)(c, {
                id: `settings.chatGpt.security.mfa.pushDescription`,
                defaultMessage: `Approve log-ins with a push sent to your trusted device`,
                description: `Explanation of push-notification MFA in Security and login settings.`,
              }),
            })
          : null),
      (t[57] = r),
      (t[58] = W));
  let me;
  t[59] === V
    ? (me = t[60])
    : ((me = V
        ? (0, q.jsx)(Ue, {
            className: `text-sm text-secondary`,
            children: (0, q.jsx)(c, {
              id: `settings.chatGpt.security.mfa.smsDescription`,
              defaultMessage: `Get 6-digit verification codes by SMS or WhatsApp based on your country code`,
              description: `Description of text-message MFA setup explaining the delivery channel depends on the phone country code.`,
            }),
          })
        : null),
      (t[59] = V),
      (t[60] = me));
  let he;
  t[61] !== d || t[62] !== r || t[63] !== V || t[64] !== B
    ? ((he =
        !V && r !== `push_auth`
          ? (0, q.jsxs)(`label`, {
              className: `flex flex-col gap-2 text-sm`,
              children: [
                (0, q.jsx)(c, {
                  id: `settings.chatGpt.security.mfa.code`,
                  defaultMessage: `6-digit code`,
                  description: `Label for the one-time verification code used to activate an MFA factor.`,
                }),
                (0, q.jsx)(s, {
                  name: `verification-code`,
                  inputMode: `numeric`,
                  autoComplete: `one-time-code`,
                  pattern: `[0-9]{6}`,
                  maxLength: 6,
                  required: !0,
                  value: d,
                  onChange: (e) => f(e.target.value),
                  disabled: B,
                }),
              ],
            })
          : null),
      (t[61] = d),
      (t[62] = r),
      (t[63] = V),
      (t[64] = B),
      (t[65] = he))
    : (he = t[65]);
  let ge;
  t[66] !== z ||
  t[67] !== r ||
  t[68] !== B ||
  t[69] !== p ||
  t[70] !== L ||
  t[71] !== M ||
  t[72] !== _
    ? ((ge =
        r === `sms` && _ != null
          ? (0, q.jsxs)(q.Fragment, {
              children: [
                (0, q.jsx)(Ue, {
                  className: `text-sm text-secondary`,
                  children: (0, q.jsx)(c, {
                    id: `settings.chatGpt.security.mfa.smsSent`,
                    defaultMessage: `Enter the 6-digit code we just sent to {phoneNumber}`,
                    description: `Text-message MFA verification instructions. PhoneNumber is the international phone number the user entered, shown for confirmation.`,
                    values: { phoneNumber: p },
                  }),
                }),
                (0, q.jsxs)(`div`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, q.jsx)(Le, {
                      type: `button`,
                      color: `secondary`,
                      size: `toolbar`,
                      disabled: B,
                      onClick: () => {
                        (z.reset(), L.mutate());
                      },
                      children: (0, q.jsx)(c, {
                        id: `settings.chatGpt.security.mfa.resend`,
                        defaultMessage: `Resend code`,
                        description: `Requests another one-time code for the current text-message MFA enrollment challenge.`,
                      }),
                    }),
                    (0, q.jsx)(Le, {
                      type: `button`,
                      color: `ghost`,
                      size: `toolbar`,
                      disabled: B,
                      onClick: () => {
                        (v(null), f(``), z.reset(), M.reset(), L.reset());
                      },
                      children: (0, q.jsx)(c, {
                        id: `settings.chatGpt.security.mfa.editPhone`,
                        defaultMessage: `Change phone number`,
                        description: `Returns to phone entry during text-message MFA enrollment without activating the pending authentication factor.`,
                      }),
                    }),
                  ],
                }),
                L.isSuccess
                  ? (0, q.jsx)(`p`, {
                      role: `status`,
                      className: `text-sm text-secondary`,
                      children: (0, q.jsx)(c, {
                        id: `settings.chatGpt.security.mfa.resent`,
                        defaultMessage: `We resent a code to your phone`,
                        description: `Success status after requesting another text-message MFA enrollment code.`,
                      }),
                    })
                  : null,
              ],
            })
          : null),
      (t[66] = z),
      (t[67] = r),
      (t[68] = B),
      (t[69] = p),
      (t[70] = L),
      (t[71] = M),
      (t[72] = _),
      (t[73] = ge))
    : (ge = t[73]);
  let _e =
      V && b?.isValid() && C == null
        ? (0, q.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-secondary`,
            children: (0, q.jsx)(c, {
              id: `settings.chatGpt.security.mfa.unsupportedRegion`,
              defaultMessage: `Text message verification isn’t available for this country code`,
              description: `Explains why a valid phone number cannot be submitted for MFA when its country is not enabled for SMS or WhatsApp verification.`,
            }),
          })
        : null,
    ve;
  t[74] !== z || t[75] !== L || t[76] !== M.isError
    ? ((ve =
        M.isError || z.isError || L.isError
          ? (0, q.jsx)(`p`, {
              role: `alert`,
              className: `text-sm text-danger`,
              children: (0, q.jsx)(c, {
                id: `settings.chatGpt.security.mfa.verifyError`,
                defaultMessage: `Couldn’t complete setup. Check your details and try again`,
                description: `Inline error after requesting or verifying an MFA setup code fails. Setup remains open for correction or cancellation.`,
              }),
            })
          : null),
      (t[74] = z),
      (t[75] = L),
      (t[76] = M.isError),
      (t[77] = ve))
    : (ve = t[77]);
  let be;
  t[78] !== se ||
  t[79] !== U ||
  t[80] !== le ||
  t[81] !== de ||
  t[82] !== fe ||
  t[83] !== W ||
  t[84] !== me ||
  t[85] !== he ||
  t[86] !== ge ||
  t[87] !== _e ||
  t[88] !== ve
    ? ((be = (0, q.jsxs)(pe, { children: [se, U, le, de, fe, W, me, he, ge, _e, ve] })),
      (t[78] = se),
      (t[79] = U),
      (t[80] = le),
      (t[81] = de),
      (t[82] = fe),
      (t[83] = W),
      (t[84] = me),
      (t[85] = he),
      (t[86] = ge),
      (t[87] = _e),
      (t[88] = ve),
      (t[89] = be))
    : (be = t[89]);
  let xe = ue,
    Se;
  t[90] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (0, q.jsx)(c, {
        id: `settings.chatGpt.security.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismisses an account security confirmation without changing authentication, devices, or app access.`,
      })),
      (t[90] = Se))
    : (Se = t[90]);
  let Ce;
  t[91] !== a || t[92] !== B
    ? ((Ce = (0, q.jsx)(Le, {
        type: `button`,
        color: `secondary`,
        onClick: a,
        disabled: B,
        children: Se,
      })),
      (t[91] = a),
      (t[92] = B),
      (t[93] = Ce))
    : (Ce = t[93]);
  let we = Le,
    Te =
      B ||
      (V && (!b?.isValid() || C == null)) ||
      (r === `totp` && O?.secret == null) ||
      (!V && r !== `push_auth` && !/^\d{6}$/.test(d)),
    Ee;
  t[94] === V
    ? (Ee = t[95])
    : ((Ee = V
        ? (0, q.jsx)(c, {
            id: `settings.chatGpt.security.mfa.sendCode`,
            defaultMessage: `Send code`,
            description: `Requests a verification code at the phone number entered for text-message MFA enrollment.`,
          })
        : null),
      (t[94] = V),
      (t[95] = Ee));
  let De;
  t[96] === r
    ? (De = t[97])
    : ((De =
        r === `push_auth`
          ? (0, q.jsx)(c, {
              id: `settings.chatGpt.security.mfa.enable`,
              defaultMessage: `Enable`,
              description: `Confirms enabling trusted-device push notifications as an MFA factor.`,
            })
          : null),
      (t[96] = r),
      (t[97] = De));
  let Oe;
  t[98] !== r || t[99] !== V
    ? ((Oe =
        !V && r !== `push_auth`
          ? (0, q.jsx)(c, {
              id: `settings.chatGpt.security.mfa.verify`,
              defaultMessage: `Verify`,
              description: `Submits the six-digit code to activate the selected MFA factor.`,
            })
          : null),
      (t[98] = r),
      (t[99] = V),
      (t[100] = Oe))
    : (Oe = t[100]);
  let ke;
  t[101] !== we || t[102] !== B || t[103] !== Te || t[104] !== Ee || t[105] !== De || t[106] !== Oe
    ? ((ke = (0, q.jsxs)(we, {
        type: `submit`,
        color: `primary`,
        loading: B,
        disabled: Te,
        children: [Ee, De, Oe],
      })),
      (t[101] = we),
      (t[102] = B),
      (t[103] = Te),
      (t[104] = Ee),
      (t[105] = De),
      (t[106] = Oe),
      (t[107] = ke))
    : (ke = t[107]);
  let Ae;
  t[108] !== xe || t[109] !== Ce || t[110] !== ke
    ? ((Ae = (0, q.jsxs)(xe, { children: [Ce, ke] })),
      (t[108] = xe),
      (t[109] = Ce),
      (t[110] = ke),
      (t[111] = Ae))
    : (Ae = t[111]);
  let je;
  t[112] !== ie || t[113] !== ae || t[114] !== be || t[115] !== Ae
    ? ((je = (0, q.jsxs)(ie, { as: `form`, onSubmit: ae, children: [be, Ae] })),
      (t[112] = ie),
      (t[113] = ae),
      (t[114] = be),
      (t[115] = Ae),
      (t[116] = je))
    : (je = t[116]);
  let Me;
  return (
    t[117] !== re || t[118] !== H || t[119] !== je
      ? ((Me = (0, q.jsx)(re, { open: !0, onOpenChange: H, children: je })),
        (t[117] = re),
        (t[118] = H),
        (t[119] = je),
        (t[120] = Me))
      : (Me = t[120]),
    Me
  );
}
function Ht(e) {
  let t = (0, Wt.c)(20),
    { accountId: n, action: r, onClose: i } = e,
    a = l(),
    o;
  t[0] !== n || t[1] !== r
    ? ((o = () =>
        G.safePost(`/accounts/mfa/user/disable_in_house`, {
          additionalHeaders: { "ChatGPT-Account-ID": n },
          requestBody: { factor_id: r.factorId },
        })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] !== n || t[4] !== i || t[5] !== a
    ? ((s = async (e) => {
        (Pt(e.passkey_credential_manager_sync),
          await a.invalidateQueries({ queryKey: Dt(n).mfa.queryKey }),
          i());
      }),
      (t[3] = n),
      (t[4] = i),
      (t[5] = a),
      (t[6] = s))
    : (s = t[6]);
  let u;
  t[7] !== o || t[8] !== s
    ? ((u = { mutationFn: o, onSuccess: s }), (t[7] = o), (t[8] = s), (t[9] = u))
    : (u = t[9]);
  let d = ye(u),
    f,
    p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, q.jsx)(c, {
        id: `settings.chatGpt.security.mfa.removeTitle`,
        defaultMessage: `Remove authentication method?`,
        description: `Confirmation title before removing the selected authenticator, phone number, push factor or passkey from the account.`,
      })),
      (p = (0, q.jsx)(c, {
        id: `settings.chatGpt.security.mfa.remove`,
        defaultMessage: `Remove`,
        description: `Destructive confirmation button removing the selected authentication factor from the account.`,
      })),
      (t[10] = f),
      (t[11] = p))
    : ((f = t[10]), (p = t[11]));
  let m;
  t[12] === d ? (m = t[13]) : ((m = () => d.mutate()), (t[12] = d), (t[13] = m));
  let h;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, q.jsx)(c, {
        id: `settings.chatGpt.security.mfa.removeDescription`,
        defaultMessage: `You won’t be able to use this method to sign in to your account anymore`,
        description: `Warning in the MFA removal confirmation explaining that the selected factor will no longer be usable to sign in.`,
      })),
      (t[14] = h))
    : (h = t[14]);
  let g;
  return (
    t[15] !== i || t[16] !== d.isError || t[17] !== d.isPending || t[18] !== m
      ? ((g = (0, q.jsx)(Rt, {
          title: f,
          confirmLabel: p,
          onConfirm: m,
          onClose: i,
          isPending: d.isPending,
          isError: d.isError,
          children: h,
        })),
        (t[15] = i),
        (t[16] = d.isError),
        (t[17] = d.isPending),
        (t[18] = m),
        (t[19] = g))
      : (g = t[19]),
    g
  );
}
function Ut(e) {
  let t = (0, Wt.c)(20),
    { secret: n, email: r } = e,
    i = P(),
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = new URLSearchParams({ secret: n, issuer: `OpenAI` })), (t[0] = n), (t[1] = a));
  let o = `otpauth://totp/${encodeURIComponent(`OpenAI:${r}`)}?${a}`,
    s,
    c,
    l;
  t[2] === o
    ? ((s = t[3]), (c = t[4]), (l = t[5]))
    : (({ modules: s } = (0, Gt.create)(o, { errorCorrectionLevel: `M` })),
      (c = s.size + 8),
      (l = Array.from(s.data)),
      (t[2] = o),
      (t[3] = s),
      (t[4] = c),
      (t[5] = l));
  let u;
  t[6] !== s || t[7] !== l
    ? ((u = l.flatMap((e, t) =>
        e ? [`M${(t % s.size) + 4},${Math.floor(t / s.size) + 4}h1v1h-1z`] : [],
      )),
      (t[6] = s),
      (t[7] = l),
      (t[8] = u))
    : (u = t[8]);
  let d = u.join(``),
    f = `0 0 ${c} ${c}`,
    p;
  t[9] === i
    ? (p = t[10])
    : ((p = i.formatMessage({
        id: `settings.chatGpt.security.mfa.qrLabel`,
        defaultMessage: `QR code for authenticator app setup`,
        description: `Accessible image label for the QR code containing the secret used to connect an authenticator app.`,
      })),
      (t[9] = i),
      (t[10] = p));
  let m;
  t[11] === c
    ? (m = t[12])
    : ((m = (0, q.jsx)(`rect`, { width: c, height: c, fill: `white` })), (t[11] = c), (t[12] = m));
  let h;
  t[13] === d
    ? (h = t[14])
    : ((h = (0, q.jsx)(`path`, { d, fill: `black` })), (t[13] = d), (t[14] = h));
  let g;
  return (
    t[15] !== f || t[16] !== p || t[17] !== m || t[18] !== h
      ? ((g = (0, q.jsxs)(`svg`, {
          className: `size-48 self-center`,
          viewBox: f,
          role: `img`,
          "aria-label": p,
          children: [m, h],
        })),
        (t[15] = f),
        (t[16] = p),
        (t[17] = m),
        (t[18] = h),
        (t[19] = g))
      : (g = t[19]),
    g
  );
}
var Wt,
  Gt,
  Kt,
  q,
  qt,
  Jt,
  Yt = e(() => {
    ((Wt = ze()),
      Qe(),
      Nt(),
      (Gt = yt()),
      (Kt = t(a(), 1)),
      z(),
      Ze(),
      i(),
      je(),
      we(),
      re(),
      _e(),
      Ot(),
      Ft(),
      Bt(),
      (q = Ae()),
      (qt = H({ session_id: Be().min(1), factor: H({ id: Be().min(1) }) })),
      (Jt = {
        totp: (0, q.jsx)(c, {
          id: `settings.chatGpt.security.mfa.totpTitle`,
          defaultMessage: `Connect your authenticator app`,
          description: `Title of the authenticator app setup dialog in Security and login settings.`,
        }),
        sms: (0, q.jsx)(c, {
          id: `settings.chatGpt.security.mfa.smsTitle`,
          defaultMessage: `Add your phone number`,
          description: `Title of the text-message MFA setup dialog in Security and login settings.`,
        }),
        push_auth: (0, q.jsx)(c, {
          id: `settings.chatGpt.security.mfa.pushTitle`,
          defaultMessage: `Enable push notifications`,
          description: `Title of the confirmation to use trusted-device push notifications for multi-factor authentication.`,
        }),
      }));
  });
function Xt(e) {
  let t = (0, en.c)(53),
    { accountId: n, pending: r, onAction: i, onOpenPasskeys: a } = e,
    o;
  t[0] === n ? (o = t[1]) : ((o = Dt(n)), (t[0] = n), (t[1] = o));
  let { data: s, isError: l, refetch: u } = ne(o.mfa),
    d;
  t[2] === n ? (d = t[3]) : ((d = Dt(n)), (t[2] = n), (t[3] = d));
  let { data: f } = ne(d.protection),
    p = f == null || f.advanced_protection_mode_enabled;
  if (s == null || l) {
    let e;
    t[4] === u ? (e = t[5]) : ((e = () => void u()), (t[4] = u), (t[5] = e));
    let n;
    return (
      t[6] !== l || t[7] !== e
        ? ((n = (0, J.jsx)(Lt, { isError: l, onRetry: e })), (t[6] = l), (t[7] = e), (t[8] = n))
        : (n = t[8]),
      n
    );
  }
  let m = s.factors.totp.length > 0,
    g = s.factors.totp[0]?.id,
    _,
    v;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, J.jsx)(c, {
        id: `settings.chatGpt.security.authenticator`,
        defaultMessage: `Authenticator app`,
        description: `Label for authenticator-app multi-factor authentication in Security and login settings.`,
      })),
      (v = (0, J.jsx)(c, {
        id: `settings.chatGpt.security.mfa.authenticatorDescription`,
        defaultMessage: `Use one-time codes from an authenticator app`,
        description: `Description of authenticator-app multi-factor authentication in Security and login settings.`,
      })),
      (t[9] = _),
      (t[10] = v))
    : ((_ = t[9]), (v = t[10]));
  let y;
  t[11] !== m || t[12] !== g
    ? ((y = { factor: `totp`, enabled: m, id: g, label: _, description: v }),
      (t[11] = m),
      (t[12] = g),
      (t[13] = y))
    : (y = t[13]);
  let b;
  t[14] !== s.factors.push_auth || t[15] !== s.show_push_auth
    ? ((b = s.show_push_auth
        ? [
            {
              factor: `push_auth`,
              enabled: s.factors.push_auth != null,
              id: s.factors.push_auth?.id,
              label: (0, J.jsx)(c, {
                id: `settings.chatGpt.security.mfa.push`,
                defaultMessage: `Push notifications`,
                description: `Label for trusted-device push-notification multi-factor authentication in Security and login settings.`,
              }),
              description: (0, J.jsx)(c, {
                id: `settings.chatGpt.security.mfa.pushDescription`,
                defaultMessage: `Approve log-ins with a push sent to your trusted device`,
                description: `Explanation of push-notification MFA in Security and login settings.`,
              }),
            },
          ]
        : []),
      (t[14] = s.factors.push_auth),
      (t[15] = s.show_push_auth),
      (t[16] = b))
    : (b = t[16]);
  let x;
  t[17] !== s.factors.sms || t[18] !== s.show_sms
    ? ((x = s.show_sms
        ? [
            {
              factor: `sms`,
              enabled: s.factors.sms.length > 0,
              id: s.factors.sms[0]?.id,
              label: (0, J.jsx)(c, {
                id: `settings.chatGpt.security.mfa.sms`,
                defaultMessage: `Text message`,
                description: `Label for SMS or WhatsApp multi-factor authentication in Security and login settings.`,
              }),
              description: (0, J.jsx)(c, {
                id: `settings.chatGpt.security.mfa.smsDescription`,
                defaultMessage: `Get 6-digit verification codes by SMS or WhatsApp based on your country code`,
                description: `Description of text-message MFA setup explaining the delivery channel depends on the phone country code.`,
              }),
            },
          ]
        : []),
      (t[17] = s.factors.sms),
      (t[18] = s.show_sms),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== y || t[21] !== b || t[22] !== x
    ? ((S = [y, ...b, ...x]), (t[20] = y), (t[21] = b), (t[22] = x), (t[23] = S))
    : (S = t[23]);
  let C = S,
    w;
  t[24] === C ? (w = t[25]) : ((w = C.filter(Zt)), (t[24] = C), (t[25] = w));
  let T = w.length + +(s.factors.passkeys.length > 0),
    E;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, J.jsx)(c, {
        id: `settings.chatGpt.security.passkeys.title`,
        defaultMessage: `Security keys & passkeys`,
        description: `Clickable row opening security key and passkey management in Security and login settings.`,
      })),
      (t[26] = E))
    : (E = t[26]);
  let D;
  t[27] === s.factors.passkeys.length
    ? (D = t[28])
    : ((D =
        s.factors.passkeys.length === 0
          ? (0, J.jsx)(c, {
              id: `settings.chatGpt.security.passkeys.description`,
              defaultMessage: `Use hardware security keys or passkeys to sign in. These phishing-resistant methods provide stronger protection than passwords.`,
              description: `Description beneath the Security keys and passkeys row when the user has not added one.`,
            })
          : void 0),
      (t[27] = s.factors.passkeys.length),
      (t[28] = D));
  let O;
  t[29] === s.factors.passkeys.length
    ? (O = t[30])
    : ((O =
        s.factors.passkeys.length === 0
          ? (0, J.jsx)(c, {
              id: `settings.chatGpt.security.passkeys.add`,
              defaultMessage: `Add`,
              description: `Trailing label on the passkeys settings row when no security keys or passkeys have been added.`,
            })
          : s.factors.passkeys.length),
      (t[29] = s.factors.passkeys.length),
      (t[30] = O));
  let k;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, J.jsx)(Oe, {})), (t[31] = k))
    : (k = t[31]);
  let A;
  t[32] === O
    ? (A = t[33])
    : ((A = (0, J.jsxs)(J.Fragment, { children: [O, k] })), (t[32] = O), (t[33] = A));
  let j;
  t[34] !== a || t[35] !== D || t[36] !== A
    ? ((j = (0, J.jsx)(ae, {
        children: (0, J.jsx)(h, {
          edgeRounding: `surface`,
          label: E,
          description: D,
          onClick: a,
          trailing: A,
        }),
      })),
      (t[34] = a),
      (t[35] = D),
      (t[36] = A),
      (t[37] = j))
    : (j = t[37]);
  let M;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, J.jsx)(W.Header, {
        title: (0, J.jsx)(c, {
          id: `settings.chatGpt.security.mfa.title`,
          defaultMessage: `Multi-factor authentication (MFA)`,
          description: `Heading above authentication-method toggles in Security and login settings.`,
        }),
      })),
      (t[38] = M))
    : (M = t[38]);
  let N;
  t[39] !== p || t[40] !== T
    ? ((N =
        T === 1 && !p
          ? (0, J.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: (0, J.jsx)(c, {
                id: `settings.chatGpt.security.mfa.addAnother`,
                defaultMessage: `Add another method to prevent lockouts`,
                description: `Tip shown in Security and login settings when the account has only one type of MFA method enabled.`,
              }),
            })
          : null),
      (t[39] = p),
      (t[40] = T),
      (t[41] = N))
    : (N = t[41]);
  let P;
  t[42] !== p || t[43] !== C || t[44] !== i || t[45] !== r
    ? ((P = (0, J.jsx)(ae, {
        children: C.map((e) => {
          let { factor: t, enabled: n, id: a, label: o, description: s } = e;
          return (0, J.jsx)(
            Je,
            {
              label: o,
              description: s,
              control: (e) =>
                (0, J.jsx)(I, {
                  ...e,
                  checked: n,
                  disabled: p || r,
                  onChange: (e) => {
                    e
                      ? i({ action: `enable`, factor: t })
                      : a != null && i({ action: `disable`, factor: t, factorId: a });
                  },
                }),
            },
            t,
          );
        }),
      })),
      (t[42] = p),
      (t[43] = C),
      (t[44] = i),
      (t[45] = r),
      (t[46] = P))
    : (P = t[46]);
  let F;
  t[47] !== N || t[48] !== P
    ? ((F = (0, J.jsxs)(W, { children: [M, (0, J.jsxs)(W.Content, { children: [N, P] })] })),
      (t[47] = N),
      (t[48] = P),
      (t[49] = F))
    : (F = t[49]);
  let L;
  return (
    t[50] !== j || t[51] !== F
      ? ((L = (0, J.jsxs)(J.Fragment, { children: [j, F] })), (t[50] = j), (t[51] = F), (t[52] = L))
      : (L = t[52]),
    L
  );
}
function Zt(e) {
  let { enabled: t } = e;
  return t;
}
function Qt(e) {
  let t = (0, en.c)(11),
    { accountId: n, action: r, onClose: i } = e,
    a = be(),
    o;
  t[0] === n ? (o = t[1]) : ((o = Dt(n)), (t[0] = n), (t[1] = o));
  let { data: s } = ne(o.mfa);
  if (r.action === `disable`) {
    let e = s?.factors.passkeys;
    if (
      (r.factor === `push_auth`
        ? (e = s?.factors.push_auth == null ? void 0 : [s.factors.push_auth])
        : r.factor !== `passkey` && (e = s?.factors[r.factor]),
      !e?.some((e) => {
        let { id: t } = e;
        return t === r.factorId;
      }))
    )
      return null;
    let a;
    return (
      t[2] !== n || t[3] !== r || t[4] !== i
        ? ((a = (0, J.jsx)(Ht, { accountId: n, action: r, onClose: i })),
          (t[2] = n),
          (t[3] = r),
          (t[4] = i),
          (t[5] = a))
        : (a = t[5]),
      a
    );
  }
  let c;
  return (
    t[6] !== n || t[7] !== r.factor || t[8] !== a || t[9] !== i
      ? ((c =
          r.factor === `passkey`
            ? (0, J.jsx)($t, { accountId: n })
            : (0, J.jsx)(Vt, { accountId: n, factor: r.factor, email: a.email ?? ``, onClose: i })),
        (t[6] = n),
        (t[7] = r.factor),
        (t[8] = a),
        (t[9] = i),
        (t[10] = c))
      : (c = t[10]),
    c
  );
}
function $t(e) {
  let t = (0, en.c)(10),
    { accountId: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = {
        queryKey: [`chatgpt-security`, n, `passkey-enrollment-token`],
        queryFn: (e) => {
          let { signal: t } = e;
          return G.safePost(`/accounts/mfa/user/request_mfa_token_in_house`, {
            additionalHeaders: { "ChatGPT-Account-ID": n },
            signal: t,
          });
        },
        staleTime: 1 / 0,
        gcTime: 0,
        retry: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (t[0] = n),
      (t[1] = r));
  let { data: i, isError: a, refetch: o } = ne(r),
    s = i?.state_token,
    c,
    l;
  (t[2] === s
    ? ((c = t[3]), (l = t[4]))
    : ((c = () => {
        if (s == null) return;
        let e = new URL(`/passkey-enroll`, E().auth.loginWebUrl);
        (e.searchParams.set(`origin_app_name`, `ChatGPT`),
          e.searchParams.set(`mfa_token`, s),
          window.location.assign(e.toString()));
      }),
      (l = [s]),
      (t[2] = s),
      (t[3] = c),
      (t[4] = l)),
    (0, tn.useEffect)(c, l));
  let u;
  t[5] === o ? (u = t[6]) : ((u = () => void o()), (t[5] = o), (t[6] = u));
  let d;
  return (
    t[7] !== a || t[8] !== u
      ? ((d = (0, J.jsx)(Lt, { isError: a, onRetry: u })), (t[7] = a), (t[8] = u), (t[9] = d))
      : (d = t[9]),
    d
  );
}
var en,
  tn,
  J,
  nn = e(() => {
    ((en = ze()),
      Qe(),
      (tn = t(a(), 1)),
      z(),
      rt(),
      te(),
      se(),
      n(),
      R(),
      U(),
      g(),
      Ot(),
      Yt(),
      Bt(),
      (J = Ae()));
  });
function rn(e) {
  let t = (0, sn.c)(41),
    { accountId: n } = e,
    i = r(ge),
    a = P(),
    [o, s] = (0, cn.useState)(!1),
    { data: l } = Me(),
    u;
  t[0] !== n || t[1] !== l?.accounts
    ? ((u = l?.accounts?.find((e) => {
        let { id: t } = e;
        return t === n;
      })),
      (t[0] = n),
      (t[1] = l?.accounts),
      (t[2] = u))
    : (u = t[2]);
  let f = u,
    { data: m } = p(d),
    h = Ge(`2562735250`),
    g;
  t[3] === h ? (g = t[4]) : ((g = h.get(`enabled`, !1)), (t[3] = h), (t[4] = g));
  let _ = g,
    v = $e(`1627064618`),
    y = $e(`2042715633`),
    b;
  t[5] === n ? (b = t[6]) : ((b = Dt(n)), (t[5] = n), (t[6] = b));
  let x = v && f?.structure === `workspace`,
    S;
  t[7] !== b.workspace || t[8] !== x
    ? ((S = { ...b.workspace, enabled: x, staleTime: at.ONE_MINUTE }),
      (t[7] = b.workspace),
      (t[8] = x),
      (t[9] = S))
    : (S = t[9]);
  let { data: C } = ne(S),
    w;
  t[10] !== f?.account_user_role || t[11] !== y || t[12] !== v || t[13] !== C?.permissions
    ? ((w =
        y ||
        !v ||
        f?.account_user_role === `account-owner` ||
        f?.account_user_role === `account-admin` ||
        C?.permissions?.includes(`chatgpt.workspace.connector.dev_mode`) === !0),
      (t[10] = f?.account_user_role),
      (t[11] = y),
      (t[12] = v),
      (t[13] = C?.permissions),
      (t[14] = w))
    : (w = t[14]);
  let T = w,
    E;
  t[15] !== n || t[16] !== i
    ? ((E = async (e) => {
        let { feature: t, value: r } = e;
        (await ct({ accountId: n, feature: t, value: r }), await i.query.snapshot(d).invalidate());
      }),
      (t[15] = n),
      (t[16] = i),
      (t[17] = E))
    : (E = t[17]);
  let D;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = () => s(!1)), (t[18] = D))
    : (D = t[18]);
  let O;
  t[19] === E ? (O = t[20]) : ((O = { mutationFn: E, onSuccess: D }), (t[19] = E), (t[20] = O));
  let k = ye(O),
    A;
  t[21] !== T || t[22] !== a || t[23] !== m || t[24] !== k || t[25] !== _
    ? ((A = _
        ? (0, Y.jsxs)(W, {
            children: [
              (0, Y.jsx)(W.Header, {
                title: (0, Y.jsx)(c, {
                  id: `settings.chatGpt.security.developerMode`,
                  defaultMessage: `Developer mode`,
                  description: `Section and control label for advanced developer-mode security settings.`,
                }),
              }),
              (0, Y.jsx)(W.Content, {
                children: (0, Y.jsxs)(ae, {
                  children: [
                    (0, Y.jsx)(Je, {
                      id: `developer-mode`,
                      label: (0, Y.jsxs)(`span`, {
                        className: `flex flex-wrap items-center gap-2`,
                        children: [
                          (0, Y.jsx)(c, {
                            id: `settings.chatGpt.security.developerMode`,
                            defaultMessage: `Developer mode`,
                            description: `Section and control label for advanced developer-mode security settings.`,
                          }),
                          (0, Y.jsx)(Ie, {
                            initiator: `open_in_browser_bridge`,
                            href: `https://help.openai.com/en/articles/20001062`,
                            children: (0, Y.jsx)(Ee, {
                              variant: `outline`,
                              children: (0, Y.jsx)(c, {
                                id: `settings.chatGpt.security.elevatedRisk`,
                                defaultMessage: `Elevated risk`,
                                description: `Warning link beside Developer mode in Security and login settings, explaining risks of unverified connectors.`,
                              }),
                            }),
                          }),
                        ],
                      }),
                      description: (0, Y.jsxs)(Y.Fragment, {
                        children: [
                          (0, Y.jsx)(c, {
                            id: `settings.chatGpt.security.developerMode.description`,
                            defaultMessage: `Allows you to add unverified connectors that could modify or erase data permanently. Use at your own risk. <link>Learn more</link>`,
                            description: `Developer-mode warning in Security and login settings. The link opens the official explanation of connector risks and safety.`,
                            values: { link: on },
                          }),
                          T
                            ? null
                            : (0, Y.jsx)(`p`, {
                                children: (0, Y.jsx)(c, {
                                  id: `settings.chatGpt.security.developerMode.adminDisabled`,
                                  defaultMessage: `Your admin has not enabled developer mode`,
                                  description: `Explains that workspace policy prevents enabling developer mode in Security and login settings.`,
                                }),
                              }),
                        ],
                      }),
                      control: (e) =>
                        (0, Y.jsx)(I, {
                          ...e,
                          ariaLabel: a.formatMessage({
                            id: `settings.chatGpt.security.developerMode`,
                            defaultMessage: `Developer mode`,
                            description: `Section and control label for advanced developer-mode security settings.`,
                          }),
                          checked: T && m?.developerMode === !0,
                          disabled: m == null || !T || k.isPending,
                          onChange: (e) => {
                            e && m?.lockdownModeEnabled
                              ? s(!0)
                              : k.mutate({ feature: `developer_mode`, value: e });
                          },
                        }),
                    }),
                    (0, Y.jsx)(Je, {
                      label: (0, Y.jsx)(c, {
                        id: `settings.chatGpt.security.enforceCsp.title`,
                        defaultMessage: `Enforce CSP in developer mode`,
                        description: `Label for Content Security Policy enforcement for developer-mode apps in Security and login settings. Keep CSP as the acronym.`,
                      }),
                      description: (0, Y.jsx)(c, {
                        id: `settings.chatGpt.security.enforceCsp.description`,
                        defaultMessage: `When enabled, dev mode apps without a declared CSP get the same restricted default CSP they would in production instead of unrestricted network access. <link>Learn more</link>`,
                        description: `Description of developer-mode Content Security Policy enforcement, with a link to its official documentation.`,
                        values: { link: an },
                      }),
                      control: (e) =>
                        (0, Y.jsx)(I, {
                          ...e,
                          checked: m?.connectorEnforceCspInDevMode === !0,
                          disabled: !m?.developerMode || !T || k.isPending,
                          onChange: (e) =>
                            k.mutate({ feature: `connector_enforce_csp_in_dev_mode`, value: e }),
                        }),
                    }),
                  ],
                }),
              }),
            ],
          })
        : null),
      (t[21] = T),
      (t[22] = a),
      (t[23] = m),
      (t[24] = k),
      (t[25] = _),
      (t[26] = A))
    : (A = t[26]);
  let j;
  t[27] !== f?.structure || t[28] !== m || t[29] !== k
    ? ((j =
        f?.structure === `personal`
          ? (0, Y.jsx)(ae, {
              children: (0, Y.jsx)(Je, {
                label: (0, Y.jsx)(c, {
                  id: `settings.chatGpt.security.deviceCode.label`,
                  defaultMessage: `Enable device code authorization for Codex`,
                  description: `Personal-account setting enabling device-code sign-in for Codex in remote or headless environments. This is separate from connected-app management.`,
                }),
                description: (0, Y.jsx)(c, {
                  id: `settings.chatGpt.security.deviceCode.description`,
                  defaultMessage: `Use device code sign-in for headless or remote environments where the normal browser flow isn’t available. Exercise caution in enabling, as device codes can be phished. Never share a device code.`,
                  description: `Security warning beneath the personal-account device-code authorization toggle for Codex.`,
                }),
                control: (e) =>
                  (0, Y.jsx)(I, {
                    ...e,
                    checked: m?.enableDeviceCodeAuth === !0,
                    disabled: m == null || k.isPending,
                    onChange: (e) => k.mutate({ feature: `enable_device_code_auth`, value: e }),
                  }),
              }),
            })
          : null),
      (t[27] = f?.structure),
      (t[28] = m),
      (t[29] = k),
      (t[30] = j))
    : (j = t[30]);
  let M;
  t[31] === k.isError
    ? (M = t[32])
    : ((M = k.isError
        ? (0, Y.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-danger`,
            children: (0, Y.jsx)(c, {
              id: `settings.chatGpt.security.updateError`,
              defaultMessage: `Could not update security settings`,
              description: `Error shown when updating security settings fails. No successful change is claimed.`,
            }),
          })
        : null),
      (t[31] = k.isError),
      (t[32] = M));
  let N;
  t[33] !== o || t[34] !== k
    ? ((N = o
        ? (0, Y.jsx)(Rt, {
            title: (0, Y.jsx)(c, {
              id: `settings.chatGpt.security.developerMode.confirmTitle`,
              defaultMessage: `Turn on developer mode?`,
              description: `Confirmation title when enabling developer mode would disable the account's existing lockdown mode.`,
            }),
            confirmLabel: (0, Y.jsx)(c, {
              id: `settings.chatGpt.security.developerMode.confirm`,
              defaultMessage: `Turn on developer mode`,
              description: `Confirms enabling developer mode and disabling lockdown mode.`,
            }),
            onConfirm: () => k.mutate({ feature: `developer_mode`, value: !0 }),
            onClose: () => s(!1),
            isPending: k.isPending,
            isError: k.isError,
            children: (0, Y.jsx)(c, {
              id: `settings.chatGpt.security.developerMode.confirmDescription`,
              defaultMessage: `Developer mode allows unverified connectors. Turning on developer mode will turn off lockdown mode.`,
              description: `Warning before enabling developer mode on an account with lockdown mode enabled, explaining the security tradeoff.`,
            }),
          })
        : null),
      (t[33] = o),
      (t[34] = k),
      (t[35] = N))
    : (N = t[35]);
  let F;
  return (
    t[36] !== A || t[37] !== j || t[38] !== M || t[39] !== N
      ? ((F = (0, Y.jsxs)(Y.Fragment, { children: [A, j, M, N] })),
        (t[36] = A),
        (t[37] = j),
        (t[38] = M),
        (t[39] = N),
        (t[40] = F))
      : (F = t[40]),
    F
  );
}
function an(e) {
  return (0, Y.jsx)(
    Ie,
    {
      initiator: `open_in_browser_bridge`,
      href: `https://developers.openai.com/apps-sdk/build/mcp-server#content-security-policy-csp`,
      children: e,
    },
    `learn-more`,
  );
}
function on(e) {
  return (0, Y.jsx)(
    Ie,
    {
      initiator: `open_in_browser_bridge`,
      href: `https://platform.openai.com/docs/mcp#risks-and-safety`,
      children: e,
    },
    `learn-more`,
  );
}
var sn,
  cn,
  Y,
  ln = e(() => {
    ((sn = ze()),
      Qe(),
      M(),
      (cn = t(a(), 1)),
      z(),
      nt(),
      Re(),
      Xe(),
      me(),
      Ne(),
      n(),
      We(),
      R(),
      U(),
      g(),
      _e(),
      V(),
      Ot(),
      Bt(),
      (Y = Ae()));
  });
function un(e) {
  let t = (0, xn.c)(83),
    { accountId: n, onBack: r } = e,
    i = P(),
    a = l(),
    o = p(He),
    s;
  t[0] === n ? (s = t[1]) : ((s = Dt(n)), (t[0] = n), (t[1] = s));
  let u = s.linkedApps,
    { data: d, isError: f, refetch: m } = ne(u),
    [g, _] = (0, Sn.useState)(null),
    [v, y] = (0, Sn.useState)(`all`),
    [b, x] = (0, Sn.useState)(``),
    [S, C] = (0, Sn.useState)(null),
    w;
  t[2] !== d?.third_party_items || t[3] !== g
    ? ((w = d?.third_party_items?.find((e) => {
        let { id: t } = e;
        return t === g;
      })),
      (t[2] = d?.third_party_items),
      (t[3] = g),
      (t[4] = w))
    : (w = t[4]);
  let T = w,
    E;
  t[5] === n
    ? (E = t[6])
    : ((E = (e) =>
        G.safeDelete(`/client_applications/{client_id}`, {
          additionalHeaders: { "ChatGPT-Account-ID": n },
          parameters: { path: { client_id: e } },
        })),
      (t[5] = n),
      (t[6] = E));
  let D;
  t[7] !== u || t[8] !== a
    ? ((D = async () => {
        (await a.invalidateQueries({ queryKey: u.queryKey }), C(null));
      }),
      (t[7] = u),
      (t[8] = a),
      (t[9] = D))
    : (D = t[9]);
  let O;
  t[10] !== E || t[11] !== D
    ? ((O = { mutationFn: E, onSuccess: D }), (t[10] = E), (t[11] = D), (t[12] = O))
    : (O = t[12]);
  let k = ye(O),
    A;
  t[13] === d?.third_party_items
    ? (A = t[14])
    : ((A = d?.third_party_items?.filter(hn)), (t[13] = d?.third_party_items), (t[14] = A));
  let j = A,
    M;
  t[15] === d?.third_party_items
    ? (M = t[16])
    : ((M = d?.third_party_items?.filter(mn)), (t[15] = d?.third_party_items), (t[16] = M));
  let F = M,
    I;
  if (
    t[17] !== F?.length ||
    t[18] !== d ||
    t[19] !== k ||
    t[20] !== i ||
    t[21] !== f ||
    t[22] !== m ||
    t[23] !== b ||
    t[24] !== T ||
    t[25] !== v ||
    t[26] !== j?.length
  ) {
    let e = b.trim().toLocaleLowerCase(i.locale),
      n = b.trim().toLowerCase(),
      r = d?.third_party_items?.filter((t) => {
        let r = t.client_app_type === `codex_generated_site`;
        return (
          (v === `all` || (v === `sites` ? r : !r)) &&
          (t.name.toLocaleLowerCase(i.locale).includes(e) || gn(t)?.toLowerCase().includes(n))
        );
      }),
      a = d?.items.filter((t) => v === `all` && t.name.toLocaleLowerCase(i.locale).includes(e));
    if (d == null || f) {
      let e;
      t[28] === m ? (e = t[29]) : ((e = () => void m()), (t[28] = m), (t[29] = e));
      let n;
      (t[30] !== f || t[31] !== e
        ? ((n = (0, X.jsx)(Lt, { isError: f, onRetry: e })), (t[30] = f), (t[31] = e), (t[32] = n))
        : (n = t[32]),
        (I = n));
    } else if (T != null) {
      let e;
      (t[33] === T ? (e = t[34]) : ((e = (0, X.jsx)(_n, { app: T })), (t[33] = T), (t[34] = e)),
        (I = e));
    } else if (d.items.length === 0 && !d.third_party_items?.length) {
      let e;
      (t[35] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(`p`, {
            className: `text-sm text-secondary`,
            children: (0, X.jsx)(c, {
              id: `settings.chatGpt.security.linkedApps.empty`,
              defaultMessage: `You haven’t used ChatGPT to sign into any websites or apps yet. Once you do, they’ll show up here.`,
              description: `Empty state on the Sign in with ChatGPT settings subpage when no websites or apps are connected.`,
            }),
          })),
          (t[35] = e))
        : (e = t[35]),
        (I = e));
    } else {
      let e;
      t[36] === i
        ? (e = t[37])
        : ((e = i.formatMessage({
            id: `settings.chatGpt.security.linkedApps.tabs`,
            defaultMessage: `Connected apps and sites`,
            description: `Accessible name of the tabs that filter all connections, third-party apps, or ChatGPT-generated sites in Security and login settings.`,
          })),
          (t[36] = i),
          (t[37] = e));
      let n = d.items.length + (d.third_party_items?.length ?? 0),
        o;
      t[38] === n
        ? (o = t[39])
        : ((o = {
            key: `all`,
            name: (0, X.jsx)(c, {
              id: `settings.chatGpt.security.linkedApps.allWithCount`,
              defaultMessage: `All <count>{total, number}</count>`,
              description: `Tab showing all connected apps and sites in Sign in with ChatGPT settings. Total is the number of connections; the count tag styles that number.`,
              values: { total: n, count: pn },
            }),
          }),
          (t[38] = n),
          (t[39] = o));
      let s = F?.length ?? 0,
        l;
      t[40] === s
        ? (l = t[41])
        : ((l = {
            key: `apps`,
            name: (0, X.jsx)(c, {
              id: `settings.chatGpt.security.linkedApps.thirdPartyWithCount`,
              defaultMessage: `Third Party <count>{total, number}</count>`,
              description: `Tab showing connected third-party apps, excluding ChatGPT-generated sites and first-party integrations, in Sign in with ChatGPT settings. Total is the number of apps; the count tag styles that number.`,
              values: { total: s, count: fn },
            }),
          }),
          (t[40] = s),
          (t[41] = l));
      let u = j?.length ?? 0,
        f;
      t[42] === u
        ? (f = t[43])
        : ((f = {
            key: `sites`,
            name: (0, X.jsx)(c, {
              id: `settings.chatGpt.security.linkedApps.sitesWithCount`,
              defaultMessage: `Sites <count>{total, number}</count>`,
              description: `Tab showing connected ChatGPT-generated sites in Sign in with ChatGPT settings. Total is the number of sites; the count tag styles that number.`,
              values: { total: u, count: dn },
            }),
          }),
          (t[42] = u),
          (t[43] = f));
      let p;
      t[44] !== o || t[45] !== l || t[46] !== f
        ? ((p = [o, l, f]), (t[44] = o), (t[45] = l), (t[46] = f), (t[47] = p))
        : (p = t[47]);
      let m;
      t[48] !== v || t[49] !== p || t[50] !== e
        ? ((m = (0, X.jsx)(vt, {
            variant: `toolbar`,
            scrollable: !0,
            selectedKey: v,
            onSelect: y,
            ariaLabel: e,
            tabs: p,
          })),
          (t[48] = v),
          (t[49] = p),
          (t[50] = e),
          (t[51] = m))
        : (m = t[51]);
      let g;
      t[52] === i
        ? (g = t[53])
        : ((g = i.formatMessage({
            id: `settings.chatGpt.security.linkedApps.search`,
            defaultMessage: `Search apps and sites`,
            description: `Accessible label of the search field in Sign in with ChatGPT settings. Filters connections by name or website within the selected tab.`,
          })),
          (t[52] = i),
          (t[53] = g));
      let S;
      t[54] === i
        ? (S = t[55])
        : ((S = i.formatMessage({
            id: `settings.chatGpt.security.linkedApps.searchPlaceholder`,
            defaultMessage: `Search`,
            description: `Short placeholder in the search field above connected apps and sites in Sign in with ChatGPT settings.`,
          })),
          (t[54] = i),
          (t[55] = S));
      let w;
      t[56] !== b || t[57] !== g || t[58] !== S
        ? ((w = (0, X.jsx)(N, {
            id: `linked-apps-search`,
            className: `w-full sm:w-64`,
            variant: `toolbar`,
            inputRole: `searchbox`,
            label: g,
            placeholder: S,
            searchQuery: b,
            onSearchQueryChange: x,
          })),
          (t[56] = b),
          (t[57] = g),
          (t[58] = S),
          (t[59] = w))
        : (w = t[59]);
      let T;
      t[60] !== m || t[61] !== w
        ? ((T = (0, X.jsx)(B, {
            inset: !1,
            children: (0, X.jsxs)(`div`, {
              className: `flex w-full flex-wrap items-center justify-between gap-4`,
              children: [m, w],
            }),
          })),
          (t[60] = m),
          (t[61] = w),
          (t[62] = T))
        : (T = t[62]);
      let E =
          (r?.length ?? 0) + (a?.length ?? 0) === 0
            ? (0, X.jsx)(`p`, {
                role: `status`,
                className: `text-sm text-secondary`,
                children: (0, X.jsx)(c, {
                  id: `settings.chatGpt.security.linkedApps.noMatches`,
                  defaultMessage: `No apps or sites found`,
                  description: `Empty filtered list in Sign in with ChatGPT settings when no connection matches the selected tab and search. The user can change tabs or clear the search.`,
                }),
              })
            : (0, X.jsxs)(ae, {
                children: [
                  r?.map((e) => {
                    let t = gn(e);
                    return (0, X.jsx)(
                      h,
                      {
                        edgeRounding: `surface`,
                        icon: (0, X.jsx)(bt, { app: e }),
                        label: (0, X.jsx)(`span`, {
                          className: `block truncate`,
                          children: e.name,
                        }),
                        description:
                          t == null
                            ? void 0
                            : (0, X.jsx)(`span`, { className: `block truncate`, children: t }),
                        onClick: () => _(e.id),
                        trailing: (0, X.jsx)(ke, { asset: gt }),
                      },
                      e.id,
                    );
                  }),
                  a?.map((e) =>
                    (0, X.jsx)(
                      Je,
                      {
                        icon: (0, X.jsx)(St, { app: e }),
                        label: e.name,
                        description: (0, X.jsx)(bn, { type: e.type }),
                        control: (0, X.jsx)(Le, {
                          color: `danger`,
                          size: `toolbar`,
                          onClick: () => {
                            (k.reset(), C(e));
                          },
                          children: (0, X.jsx)(c, {
                            id: `settings.chatGpt.security.linkedApps.disconnect`,
                            defaultMessage: `Disconnect`,
                            description: `Button for revoking an existing first-party app connection in Sign in with ChatGPT settings.`,
                          }),
                        }),
                      },
                      e.id,
                    ),
                  ),
                ],
              }),
        D;
      (t[63] !== T || t[64] !== E
        ? ((D = (0, X.jsxs)(`div`, { className: `flex flex-col gap-6`, children: [T, E] })),
          (t[63] = T),
          (t[64] = E),
          (t[65] = D))
        : (D = t[65]),
        (I = D));
    }
    ((t[17] = F?.length),
      (t[18] = d),
      (t[19] = k),
      (t[20] = i),
      (t[21] = f),
      (t[22] = m),
      (t[23] = b),
      (t[24] = T),
      (t[25] = v),
      (t[26] = j?.length),
      (t[27] = I));
  } else I = t[27];
  let L;
  t[66] === T?.name
    ? (L = t[67])
    : ((L =
        T?.name ??
        (0, X.jsx)(c, {
          id: `settings.chatGpt.security.linkedApps.title`,
          defaultMessage: `Sign in with ChatGPT`,
          description: `Title of the Security and login subpage listing websites and apps linked through ChatGPT sign-in.`,
        })),
      (t[66] = T?.name),
      (t[67] = L));
  let R;
  t[68] !== r || t[69] !== T
    ? ((R = T == null ? r : () => _(null)), (t[68] = r), (t[69] = T), (t[70] = R))
    : (R = t[70]);
  let ee;
  t[71] === T
    ? (ee = t[72])
    : ((ee =
        T == null
          ? (0, X.jsx)(c, {
              id: `settings.chatGpt.security.linkedApps.description`,
              defaultMessage: `Review the apps and sites you’ve signed in to with ChatGPT and manage what they can access`,
              description: `Introduction to the Security and login subpage listing apps and websites the user has connected through ChatGPT.`,
            })
          : void 0),
      (t[71] = T),
      (t[72] = ee));
  let te;
  t[73] !== k || t[74] !== S || t[75] !== o
    ? ((te =
        S == null
          ? null
          : (0, X.jsx)(Rt, {
              title: (0, X.jsx)(c, {
                id: `settings.chatGpt.security.linkedApps.disconnectTitle`,
                defaultMessage: `Disconnect {name}?`,
                description: `Confirmation title before removing access for a linked first-party application. Placeholder name is the application's display name.`,
                values: { name: S.name },
              }),
              confirmLabel: (0, X.jsx)(c, {
                id: `settings.chatGpt.security.linkedApps.disconnect`,
                defaultMessage: `Disconnect`,
                description: `Button for revoking an existing first-party app connection in Sign in with ChatGPT settings.`,
              }),
              onConfirm: () => {
                (o.logEventWithStatsig?.(
                  `chatgpt_connector_settings_client_application_disconnect_button_clicked`,
                  { id: S.id, name: S.name, type: S.type },
                ),
                  k.mutate(S.id));
              },
              onClose: () => C(null),
              isPending: k.isPending,
              isError: k.isError,
              children: (0, X.jsx)(c, {
                id: `settings.chatGpt.security.linkedApps.disconnectDescription`,
                defaultMessage: `This app will no longer have access through your ChatGPT account`,
                description: `Confirmation body before the user disconnects an existing first-party app from their ChatGPT account.`,
              }),
            })),
      (t[73] = k),
      (t[74] = S),
      (t[75] = o),
      (t[76] = te))
    : (te = t[76]);
  let z;
  return (
    t[77] !== I || t[78] !== ee || t[79] !== te || t[80] !== L || t[81] !== R
      ? ((z = (0, X.jsxs)(It, { title: L, onBack: R, subtitle: ee, children: [I, te] })),
        (t[77] = I),
        (t[78] = ee),
        (t[79] = te),
        (t[80] = L),
        (t[81] = R),
        (t[82] = z))
      : (z = t[82]),
    z
  );
}
function dn(e) {
  return (0, X.jsx)(`span`, { className: `text-tertiary`, children: e });
}
function fn(e) {
  return (0, X.jsx)(`span`, { className: `text-tertiary`, children: e });
}
function pn(e) {
  return (0, X.jsx)(`span`, { className: `text-tertiary`, children: e });
}
function mn(e) {
  let { client_app_type: t } = e;
  return t !== `codex_generated_site`;
}
function hn(e) {
  let { client_app_type: t } = e;
  return t === `codex_generated_site`;
}
function gn(e) {
  let t = [
    e.client_uri,
    ...(e.client_app_type === `codex_generated_site` ? (e.callbacks ?? []) : []),
  ];
  for (let n of t)
    try {
      let t = new URL(n ?? ``);
      if (t.protocol === `https:` || t.protocol === `http:`)
        return n === e.client_uri ? t.href : `${t.origin}/`;
    } catch {}
  return null;
}
function _n(e) {
  let t = (0, xn.c)(34),
    { app: n } = e,
    r;
  t[0] === n.scopes
    ? (r = t[1])
    : ((r = new Map(n.scopes?.map(yn))), (t[0] = n.scopes), (t[1] = r));
  let i = r,
    a;
  t[2] === n ? (a = t[3]) : ((a = gn(n)), (t[2] = n), (t[3] = a));
  let o = a,
    s,
    l,
    u,
    d,
    f,
    p;
  if (t[4] !== n.description || t[5] !== n.linked_at || t[6] !== o) {
    let e = n.linked_at == null ? null : Date.parse(n.linked_at);
    ((l = W),
      t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((p = (0, X.jsx)(W.Header, {
            title: (0, X.jsx)(c, {
              id: `settings.chatGpt.security.linkedApps.details`,
              defaultMessage: `Details`,
              description: `Heading above the selected app's description, website and connection date in Sign in with ChatGPT settings.`,
            }),
          })),
          (t[13] = p))
        : (p = t[13]),
      (s = W.Content),
      t[14] === n.description
        ? (u = t[15])
        : ((u = n.description?.trim()
            ? (0, X.jsx)(`p`, { className: `text-sm text-secondary`, children: n.description })
            : null),
          (t[14] = n.description),
          (t[15] = u)),
      t[16] === o
        ? (d = t[17])
        : ((d =
            o == null
              ? null
              : (0, X.jsx)(ae, {
                  children: (0, X.jsx)(T, {
                    label: (0, X.jsx)(c, {
                      id: `settings.chatGpt.security.linkedApps.website`,
                      defaultMessage: `Website`,
                      description: `Label beside the selected connected app's website URL in Sign in with ChatGPT settings.`,
                    }),
                    children: o,
                  }),
                })),
          (t[16] = o),
          (t[17] = d)),
      (f =
        e == null || Number.isNaN(e)
          ? null
          : (0, X.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: (0, X.jsx)(c, {
                id: `settings.chatGpt.security.linkedApps.linkedAt`,
                defaultMessage: `Linked on {timestamp, date, medium} at {timestamp, time, short}`,
                description: `When the selected app was connected through ChatGPT. Timestamp is an epoch-millisecond number rendered in the viewer's locale and timezone.`,
                values: { timestamp: e },
              }),
            })),
      (t[4] = n.description),
      (t[5] = n.linked_at),
      (t[6] = o),
      (t[7] = s),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p));
  } else ((s = t[7]), (l = t[8]), (u = t[9]), (d = t[10]), (f = t[11]), (p = t[12]));
  let m;
  t[18] !== s || t[19] !== u || t[20] !== d || t[21] !== f
    ? ((m = (0, X.jsxs)(s, { children: [u, d, f] })),
      (t[18] = s),
      (t[19] = u),
      (t[20] = d),
      (t[21] = f),
      (t[22] = m))
    : (m = t[22]);
  let h;
  t[23] !== l || t[24] !== p || t[25] !== m
    ? ((h = (0, X.jsxs)(l, { children: [p, m] })),
      (t[23] = l),
      (t[24] = p),
      (t[25] = m),
      (t[26] = h))
    : (h = t[26]);
  let g;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, X.jsx)(W.Header, {
        title: (0, X.jsx)(c, {
          id: `settings.chatGpt.security.linkedApps.permissions`,
          defaultMessage: `Permissions`,
          description: `Heading above the OAuth permissions granted to the selected app or site in Sign in with ChatGPT settings.`,
        }),
      })),
      (t[27] = g))
    : (g = t[27]);
  let _;
  t[28] !== n.scopes || t[29] !== i
    ? ((_ = (0, X.jsxs)(W, {
        children: [
          g,
          (0, X.jsx)(W.Content, {
            children:
              n.scopes != null && n.scopes.length > 0
                ? (0, X.jsx)(`ul`, {
                    className: `list-disc ps-5 text-sm text-secondary`,
                    children: Array.from(i, vn),
                  })
                : (0, X.jsx)(`p`, {
                    className: `text-sm text-secondary`,
                    children: (0, X.jsx)(c, {
                      id: `settings.chatGpt.security.linkedApps.noPermissions`,
                      defaultMessage: `No permissions granted`,
                      description: `Empty permissions state for a connected app that has no recorded OAuth scopes in Sign in with ChatGPT settings.`,
                    }),
                  }),
          }),
        ],
      })),
      (t[28] = n.scopes),
      (t[29] = i),
      (t[30] = _))
    : (_ = t[30]);
  let v;
  return (
    t[31] !== _ || t[32] !== h
      ? ((v = (0, X.jsxs)(X.Fragment, { children: [h, _] })), (t[31] = _), (t[32] = h), (t[33] = v))
      : (v = t[33]),
    v
  );
}
function vn(e) {
  let [t, n] = e;
  return (0, X.jsx)(`li`, { children: typeof n == `string` ? n : (0, X.jsx)(c, { ...n }) }, t);
}
function yn(e) {
  let t = Cn.get(e);
  return [t?.id ?? `scope:${e}`, t ?? e];
}
function bn(e) {
  let t = (0, xn.c)(5),
    { type: n } = e;
  switch (n) {
    case `codex_cli`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(c, {
              id: `settings.chatGpt.security.linkedApps.codexDescription`,
              defaultMessage: `Allow Codex CLI to use models from the API`,
              description: `Description beneath the existing Codex CLI integration in Sign in with ChatGPT settings. This integration can be disconnected.`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `apple`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(c, {
              id: `settings.chatGpt.security.linkedApps.appleDescription`,
              defaultMessage: `Get personalized ChatGPT responses and Plus benefits when using Siri and Writing Tools`,
              description: `Supporting text for the Apple Intelligence connection in Sign in with ChatGPT settings, describing the benefits of the linked account.`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `kakao_talk`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(c, {
              id: `settings.chatGpt.security.linkedApps.kakaoDescription`,
              defaultMessage: `ChatGPT in KakaoTalk`,
              description: `Supporting text identifying the KakaoTalk connection in Sign in with ChatGPT settings.`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `viber`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(c, {
              id: `settings.chatGpt.security.linkedApps.viberDescription`,
              defaultMessage: `ChatGPT in Viber`,
              description: `Supporting text identifying the Viber connection in Sign in with ChatGPT settings.`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `oai_apps`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(c, {
              id: `settings.chatGpt.security.linkedApps.signedIn`,
              defaultMessage: `Signed in with ChatGPT`,
              description: `Supporting text below a connected app in Sign in with ChatGPT settings; identifies the sign-in method without claiming any specific permissions.`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
  }
}
var xn,
  Sn,
  X,
  Cn,
  wn = e(() => {
    ((xn = ze()),
      ft(),
      lt(),
      Qe(),
      M(),
      (Sn = t(a(), 1)),
      z(),
      i(),
      De(),
      Fe(),
      u(),
      _t(),
      L(),
      R(),
      U(),
      g(),
      Ot(),
      xt(),
      Bt(),
      (X = Ae()),
      (Cn = new Map(Object.entries(pt))));
  });
function Tn(e) {
  let t = (0, On.c)(26),
    { accountId: n, pending: r, onBack: i, onAction: a } = e,
    o = P(),
    s;
  t[0] === n ? (s = t[1]) : ((s = Dt(n)), (t[0] = n), (t[1] = s));
  let { data: l, isError: u, refetch: d } = ne(s.mfa),
    [f, p] = (0, kn.useState)(null),
    m,
    h,
    g,
    _,
    v;
  if (
    t[2] !== l ||
    t[3] !== o ||
    t[4] !== u ||
    t[5] !== a ||
    t[6] !== i ||
    t[7] !== r ||
    t[8] !== d
  ) {
    let e = l?.factors.passkeys.slice().sort(En);
    ((m = It),
      (h = i),
      t[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((g = (0, Z.jsx)(c, {
            id: `settings.chatGpt.security.passkeys.title`,
            defaultMessage: `Security keys & passkeys`,
            description: `Clickable row opening security key and passkey management in Security and login settings.`,
          })),
          (_ = (0, Z.jsx)(c, {
            id: `settings.chatGpt.security.passkeys.listDescription`,
            defaultMessage: `See all the active security keys and passkeys`,
            description: `Introduction to the security-key and passkey management subpage in Security and login settings.`,
          })),
          (t[14] = g),
          (t[15] = _))
        : ((g = t[14]), (_ = t[15])),
      (v =
        l == null || u
          ? (0, Z.jsx)(Lt, { isError: u, onRetry: () => void d() })
          : (0, Z.jsxs)(Z.Fragment, {
              children: [
                e?.length
                  ? (0, Z.jsx)(ae, {
                      children: e.map((e) => {
                        let t =
                            e.metadata?.factor_name?.trim() ||
                            e.metadata?.authenticator_name?.trim() ||
                            o.formatMessage({
                              id: `settings.chatGpt.security.passkeys.fallback`,
                              defaultMessage: `Passkey`,
                              description: `Fallback name for an unnamed security key or passkey in Security and login settings.`,
                            }),
                          n = e.metadata?.create_time_seconds;
                        return (0, Z.jsx)(
                          Je,
                          {
                            label: t,
                            description:
                              n == null
                                ? void 0
                                : (0, Z.jsx)(c, {
                                    id: `settings.chatGpt.security.passkeys.added`,
                                    defaultMessage: `Added: {timestamp, date, long}`,
                                    description: `Date a security key or passkey was added. Timestamp is epoch milliseconds and rendered as a localized date.`,
                                    values: { timestamp: n * 1e3 },
                                  }),
                            control: (0, Z.jsxs)(C, {
                              triggerButton: (0, Z.jsx)(Le, {
                                color: `ghost`,
                                size: `icon`,
                                disabled: r,
                                "aria-label": o.formatMessage(
                                  {
                                    id: `settings.chatGpt.security.passkeys.actions`,
                                    defaultMessage: `Actions for {name}`,
                                    description: `Accessible label for the menu to rename or remove a security key or passkey. Name is its display name.`,
                                  },
                                  { name: t },
                                ),
                                children: (0, Z.jsx)(j, {}),
                              }),
                              children: [
                                (0, Z.jsx)(y.Item, {
                                  onSelect: () => p(e),
                                  children: (0, Z.jsx)(c, {
                                    id: `settings.chatGpt.security.passkeys.rename`,
                                    defaultMessage: `Rename`,
                                    description: `Menu action for renaming a security key or passkey.`,
                                  }),
                                }),
                                (0, Z.jsx)(y.Item, {
                                  onSelect: () =>
                                    a({ action: `disable`, factor: `passkey`, factorId: e.id }),
                                  children: (0, Z.jsx)(c, {
                                    id: `settings.chatGpt.security.passkeys.delete`,
                                    defaultMessage: `Delete`,
                                    description: `Menu action starting reauthentication and confirmation before deleting a security key or passkey.`,
                                  }),
                                }),
                              ],
                            }),
                          },
                          e.id,
                        );
                      }),
                    })
                  : null,
                (0, Z.jsx)(Le, {
                  className: `self-start`,
                  color: `primary`,
                  disabled: r,
                  onClick: () => a({ action: `enable`, factor: `passkey` }),
                  children: (0, Z.jsx)(c, {
                    id: `settings.chatGpt.security.passkeys.addButton`,
                    defaultMessage: `Add a Security key or Passkey`,
                    description: `Button opening the identity provider's enrollment flow to add a hardware security key or passkey.`,
                  }),
                }),
                typeof PublicKeyCredential > `u`
                  ? (0, Z.jsx)(`p`, {
                      className: `text-sm text-secondary`,
                      children: (0, Z.jsx)(c, {
                        id: `settings.chatGpt.security.passkeys.unsupported`,
                        defaultMessage: `Your browser doesn’t support passkeys`,
                        description: `Explanation when security-key enrollment is unavailable because the browser lacks WebAuthn support.`,
                      }),
                    })
                  : null,
                (0, Z.jsxs)(W, {
                  children: [
                    (0, Z.jsx)(W.Header, {
                      title: (0, Z.jsx)(c, {
                        id: `settings.chatGpt.security.passkeys.yubikey`,
                        defaultMessage: `Get a YubiKey`,
                        description: `Heading for the hardware security key ordering option in Security and login settings. YubiKey is a product name.`,
                      }),
                    }),
                    (0, Z.jsxs)(W.Content, {
                      children: [
                        (0, Z.jsx)(`p`, {
                          className: `text-sm text-secondary`,
                          children: (0, Z.jsx)(c, {
                            id: `settings.chatGpt.security.passkeys.hardwareDescription`,
                            defaultMessage: `Hardware security keys offer the strongest protection`,
                            description: `Supporting text explaining the benefit of ordering a physical hardware security key.`,
                          }),
                        }),
                        (0, Z.jsx)(Ie, {
                          initiator: `open_in_browser_bridge`,
                          href: `https://chatgpt.com/#settings/Security/yubikey`,
                          children: (0, Z.jsx)(c, {
                            id: `settings.chatGpt.security.passkeys.order`,
                            defaultMessage: `Order a YubiKey`,
                            description: `Link opening ChatGPT's hosted hardware security-key ordering flow. YubiKey is a product name.`,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })),
      (t[2] = l),
      (t[3] = o),
      (t[4] = u),
      (t[5] = a),
      (t[6] = i),
      (t[7] = r),
      (t[8] = d),
      (t[9] = m),
      (t[10] = h),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v));
  } else ((m = t[9]), (h = t[10]), (g = t[11]), (_ = t[12]), (v = t[13]));
  let b;
  t[16] !== n || t[17] !== f
    ? ((b =
        f == null
          ? null
          : (0, Z.jsx)(Dn, { accountId: n, passkey: f, onClose: () => p(null) }, f.id)),
      (t[16] = n),
      (t[17] = f),
      (t[18] = b))
    : (b = t[18]);
  let x;
  return (
    t[19] !== m || t[20] !== h || t[21] !== g || t[22] !== _ || t[23] !== v || t[24] !== b
      ? ((x = (0, Z.jsxs)(m, { onBack: h, title: g, subtitle: _, children: [v, b] })),
        (t[19] = m),
        (t[20] = h),
        (t[21] = g),
        (t[22] = _),
        (t[23] = v),
        (t[24] = b),
        (t[25] = x))
      : (x = t[25]),
    x
  );
}
function En(e, t) {
  return (t.metadata?.create_time_seconds ?? 0) - (e.metadata?.create_time_seconds ?? 0);
}
function Dn(e) {
  let t = (0, On.c)(54),
    { accountId: n, passkey: r, onClose: i } = e,
    a = l(),
    o;
  t[0] !== r.metadata?.authenticator_name || t[1] !== r.metadata?.factor_name
    ? ((o = r.metadata?.factor_name?.trim() || r.metadata?.authenticator_name?.trim() || ``),
      (t[0] = r.metadata?.authenticator_name),
      (t[1] = r.metadata?.factor_name),
      (t[2] = o))
    : (o = t[2]);
  let u = o,
    [d, f] = (0, kn.useState)(u),
    p;
  t[3] !== n || t[4] !== d || t[5] !== r.id
    ? ((p = () =>
        G.safePost(`/accounts/mfa/user/update_factor_name`, {
          additionalHeaders: { "ChatGPT-Account-ID": n },
          requestBody: { factor_id: r.id, factor_name: d.trim() },
        })),
      (t[3] = n),
      (t[4] = d),
      (t[5] = r.id),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] !== n || t[8] !== i || t[9] !== a
    ? ((m = async () => {
        (await a.invalidateQueries({ queryKey: Dt(n).mfa.queryKey }), i());
      }),
      (t[7] = n),
      (t[8] = i),
      (t[9] = a),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] !== p || t[12] !== m
    ? ((h = { mutationFn: p, onSuccess: m }), (t[11] = p), (t[12] = m), (t[13] = h))
    : (h = t[13]);
  let g = ye(h),
    _;
  t[14] !== d || t[15] !== u || t[16] !== g.isPending
    ? ((_ = d.trim().length > 0 && d.trim() !== u && d.trim().length <= 64 && !g.isPending),
      (t[14] = d),
      (t[15] = u),
      (t[16] = g.isPending),
      (t[17] = _))
    : (_ = t[17]);
  let v = _,
    y;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = { "aria-describedby": void 0 }), (t[18] = y))
    : (y = t[18]);
  let b;
  t[19] !== i || t[20] !== g.isPending
    ? ((b = (e) => {
        !e && !g.isPending && i();
      }),
      (t[19] = i),
      (t[20] = g.isPending),
      (t[21] = b))
    : (b = t[21]);
  let x;
  t[22] !== v || t[23] !== g
    ? ((x = (e) => {
        (e.preventDefault(), v && g.mutate());
      }),
      (t[22] = v),
      (t[23] = g),
      (t[24] = x))
    : (x = t[24]);
  let C;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Z.jsx)(ce, {
        title: (0, Z.jsx)(Ye, {
          children: (0, Z.jsx)(c, {
            id: `settings.chatGpt.security.passkeys.renameTitle`,
            defaultMessage: `Rename security key`,
            description: `Dialog title for renaming an existing security key or passkey in Security and login settings.`,
          }),
        }),
      })),
      (t[25] = C))
    : (C = t[25]);
  let w;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Z.jsx)(c, {
        id: `settings.chatGpt.security.passkeys.name`,
        defaultMessage: `Name`,
        description: `Label for the custom name of a security key or passkey in the rename dialog.`,
      })),
      (t[26] = w))
    : (w = t[26]);
  let T;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (e) => f(e.target.value)), (t[27] = T))
    : (T = t[27]);
  let E;
  t[28] !== d || t[29] !== g.isPending
    ? ((E = (0, Z.jsxs)(`label`, {
        className: `flex flex-col gap-2 text-sm`,
        children: [
          w,
          (0, Z.jsx)(s, {
            name: `passkey-name`,
            autoFocus: !0,
            maxLength: 64,
            value: d,
            onChange: T,
            disabled: g.isPending,
          }),
        ],
      })),
      (t[28] = d),
      (t[29] = g.isPending),
      (t[30] = E))
    : (E = t[30]);
  let D;
  t[31] === g.isError
    ? (D = t[32])
    : ((D = g.isError
        ? (0, Z.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-danger`,
            children: (0, Z.jsx)(c, {
              id: `settings.chatGpt.security.passkeys.renameError`,
              defaultMessage: `Failed to save passkey name`,
              description: `Inline error in the rename security-key dialog. The name is retained so the user can retry.`,
            }),
          })
        : null),
      (t[31] = g.isError),
      (t[32] = D));
  let O;
  t[33] !== E || t[34] !== D
    ? ((O = (0, Z.jsxs)(pe, { children: [C, E, D] })), (t[33] = E), (t[34] = D), (t[35] = O))
    : (O = t[35]);
  let k;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Z.jsx)(c, {
        id: `settings.chatGpt.security.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismisses an account security confirmation without changing authentication, devices, or app access.`,
      })),
      (t[36] = k))
    : (k = t[36]);
  let A;
  t[37] !== i || t[38] !== g.isPending
    ? ((A = (0, Z.jsx)(Le, {
        type: `button`,
        color: `secondary`,
        onClick: i,
        disabled: g.isPending,
        children: k,
      })),
      (t[37] = i),
      (t[38] = g.isPending),
      (t[39] = A))
    : (A = t[39]);
  let j = !v,
    M;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Z.jsx)(c, {
        id: `settings.chatGpt.security.passkeys.save`,
        defaultMessage: `Save`,
        description: `Saves the new custom name of the security key or passkey.`,
      })),
      (t[40] = M))
    : (M = t[40]);
  let N;
  t[41] !== g.isPending || t[42] !== j
    ? ((N = (0, Z.jsx)(Le, {
        type: `submit`,
        color: `primary`,
        disabled: j,
        loading: g.isPending,
        children: M,
      })),
      (t[41] = g.isPending),
      (t[42] = j),
      (t[43] = N))
    : (N = t[43]);
  let P;
  t[44] !== A || t[45] !== N
    ? ((P = (0, Z.jsxs)(ue, { children: [A, N] })), (t[44] = A), (t[45] = N), (t[46] = P))
    : (P = t[46]);
  let F;
  t[47] !== O || t[48] !== P || t[49] !== x
    ? ((F = (0, Z.jsxs)(S, { as: `form`, onSubmit: x, children: [O, P] })),
      (t[47] = O),
      (t[48] = P),
      (t[49] = x),
      (t[50] = F))
    : (F = t[50]);
  let I;
  return (
    t[51] !== F || t[52] !== b
      ? ((I = (0, Z.jsx)(tt, { open: !0, contentProps: y, onOpenChange: b, children: F })),
        (t[51] = F),
        (t[52] = b),
        (t[53] = I))
      : (I = t[53]),
    I
  );
}
var On,
  kn,
  Z,
  An = e(() => {
    ((On = ze()),
      Qe(),
      (kn = t(a(), 1)),
      z(),
      i(),
      je(),
      we(),
      de(),
      Ne(),
      se(),
      re(),
      R(),
      U(),
      g(),
      Ot(),
      Bt(),
      (Z = Ae()));
  });
function jn(e) {
  return (
    e.get(`_tm`) === `passkey_created` &&
    e.get(`action`) === `enable` &&
    e.get(`factor`) === `passkey`
  );
}
var Mn = e(() => {});
function Nn(e) {
  let t = Ln.safeParse({
    action: e.get(`action`),
    factor: e.get(`factor`),
    factorId: e.get(`factor_id`),
  });
  return t.success ? (jn(e) ? { action: `complete`, factor: `passkey` } : t.data) : null;
}
function Pn(e, t, n = Date.now()) {
  try {
    let r = e.split(`.`)[1];
    if (r == null) return !1;
    let i = Rn.safeParse(JSON.parse(atob(r.replace(/-/g, `+`).replace(/_/g, `/`))));
    if (!i.success) return !1;
    let a = n - i.data.pwd_auth_time;
    return (
      a >= 0 && a < 240 * 1e3 && (!t || i.data[`https://api.openai.com/mfa`]?.required === `yes`)
    );
  } catch {
    return !1;
  }
}
async function Fn(e) {
  let t = await A();
  if (t == null) return `failed`;
  if (Pn(t.accessToken, e.action === `disable`)) return `ready`;
  let n = new URL(`/settings/security`, window.location.origin);
  (n.searchParams.set(`action`, e.action),
    n.searchParams.set(`factor`, e.factor),
    e.factor === `passkey` && n.searchParams.set(`view`, `passkeys`),
    e.action === `disable` && n.searchParams.set(`factor_id`, e.factorId));
  let r = await Ct(n.toString(), E().auth.reauthenticationParams);
  return r.ok ? { redirectUrl: r.url } : `failed`;
}
async function In(e) {
  if ((await A()) == null) return `failed`;
  let t = {
    ...E().auth.reauthenticationParams,
    [e === `add` ? `post_login_add_password` : `post_login_password_reset`]: `true`,
  };
  if (e === `add` && t[`ext-login-allow-phone`] === `true` && !t.login_hint)
    try {
      let e = H({ phone_number: Be().min(1) }).safeParse(await Ce());
      if (!e.success) return `failed`;
      t.login_hint = e.data.phone_number;
    } catch {
      return `failed`;
    }
  let n = await Ct(new URL(`/settings/security`, window.location.origin).toString(), t);
  return n.ok ? { redirectUrl: n.url } : `failed`;
}
var Ln,
  Rn,
  zn = e(() => {
    (Ze(),
      O(),
      nt(),
      te(),
      wt(),
      Mn(),
      (Ln = he(`action`, [
        H({ action: st(`enable`), factor: Se([`totp`, `sms`, `push_auth`, `passkey`]) }),
        H({
          action: st(`disable`),
          factor: Se([`totp`, `sms`, `push_auth`, `passkey`]),
          factorId: Be().min(1),
        }),
      ])),
      (Rn = H({
        pwd_auth_time: ot(),
        "https://api.openai.com/mfa": H({ required: Be() }).optional(),
      })));
  });
function Bn(e) {
  let t = (0, Vn.c)(5),
    { onClose: n } = e,
    r,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Hn.jsx)(c, {
        id: `settings.chatGpt.security.reauthError`,
        defaultMessage: `Couldn’t verify your identity`,
        description: `Title of an error dialog when starting the required identity verification for an account security change fails.`,
      })),
      (i = (0, Hn.jsx)(c, {
        id: `settings.chatGpt.security.closeError`,
        defaultMessage: `Close`,
        description: `Dismisses the security reauthentication error without changing account settings.`,
      })),
      (t[0] = r),
      (t[1] = i))
    : ((r = t[0]), (i = t[1]));
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Hn.jsx)(c, {
        id: `settings.chatGpt.security.reauthError.description`,
        defaultMessage: `Close this message and try again`,
        description: `Recovery guidance after identity verification for an account security change could not start. The user can dismiss this message and repeat the action from security settings.`,
      })),
      (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] === n
      ? (o = t[4])
      : ((o = (0, Hn.jsx)(Rt, {
          title: r,
          confirmLabel: i,
          informational: !0,
          isPending: !1,
          onConfirm: n,
          onClose: n,
          children: a,
        })),
        (t[3] = n),
        (t[4] = o)),
    o
  );
}
var Vn,
  Hn,
  Un = e(() => {
    ((Vn = ze()), z(), Bt(), (Hn = Ae()));
  });
function Wn(e) {
  let t = (0, Kn.c)(41),
    { accountId: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = Dt(n)), (t[0] = n), (t[1] = r));
  let { data: i, isSuccess: a } = ne(r.changePassword),
    o;
  t[2] === n ? (o = t[3]) : ((o = Dt(n)), (t[2] = n), (t[3] = o));
  let { data: s, isSuccess: l } = ne(o.addPassword),
    u;
  t[4] === n ? (u = t[5]) : ((u = Dt(n)), (t[4] = n), (t[5] = u));
  let { data: d, isSuccess: f } = ne(u.protection),
    p;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = { mutationFn: In }), (t[6] = p))
    : (p = t[6]);
  let m = ye(p),
    g = d?.advanced_protection_mode_enabled === !0,
    _;
  if (
    (t[7] !== s || t[8] !== l || t[9] !== i || t[10] !== a
      ? ((_ = null),
        a && i.eligible === !0 ? (_ = `change`) : a && l && s.eligible === !0 && (_ = `add`),
        (t[7] = s),
        (t[8] = l),
        (t[9] = i),
        (t[10] = a),
        (t[11] = _))
      : (_ = t[11]),
    _ == null)
  )
    return null;
  let v;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, qn.jsx)(c, {
        id: `settings.chatGpt.security.password.title`,
        defaultMessage: `Password`,
        description: `Label for the account password row in Security and login settings. The row lets eligible users add or change a password.`,
      })),
      (t[12] = v))
    : (v = t[12]);
  let y;
  t[13] === g
    ? (y = t[14])
    : ((y = g
        ? (0, qn.jsx)(c, {
            id: `settings.chatGpt.security.password.advancedProtectionDescription`,
            defaultMessage: `Password sign-in is disabled while Advanced account security is enabled`,
            description: `Explanation below the disabled Password row when Advanced account security is enabled. The user can manage this protection in the Advanced security section.`,
          })
        : void 0),
      (t[13] = g),
      (t[14] = y));
  let b = !f || g || m.isPending || (m.isSuccess && m.data !== `failed`),
    x;
  t[15] !== _ || t[16] !== m
    ? ((x = () => m.mutate(_, { onSuccess: Gn })), (t[15] = _), (t[16] = m), (t[17] = x))
    : (x = t[17]);
  let S;
  t[18] === g
    ? (S = t[19])
    : ((S = g
        ? (0, qn.jsx)(c, {
            id: `settings.chatGpt.security.password.disabled`,
            defaultMessage: `Disabled`,
            description: `Status on the Password settings row when Advanced account security disables password sign-in.`,
          })
        : null),
      (t[18] = g),
      (t[19] = S));
  let C;
  t[20] !== _ || t[21] !== g
    ? ((C =
        !g && _ === `change`
          ? (0, qn.jsx)(c, {
              id: `settings.chatGpt.security.password.change`,
              defaultMessage: `Change`,
              description: `Action on the Password settings row that starts identity verification to change an existing account password.`,
            })
          : null),
      (t[20] = _),
      (t[21] = g),
      (t[22] = C))
    : (C = t[22]);
  let w;
  t[23] !== _ || t[24] !== g
    ? ((w =
        !g && _ === `add`
          ? (0, qn.jsx)(c, {
              id: `settings.chatGpt.security.password.add`,
              defaultMessage: `Add`,
              description: `Action on the Password settings row that starts identity verification to add a password to an account that does not have one.`,
            })
          : null),
      (t[23] = _),
      (t[24] = g),
      (t[25] = w))
    : (w = t[25]);
  let T;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, qn.jsx)(Oe, {})), (t[26] = T))
    : (T = t[26]);
  let E;
  t[27] !== C || t[28] !== w || t[29] !== S
    ? ((E = (0, qn.jsxs)(qn.Fragment, { children: [S, C, w, T] })),
      (t[27] = C),
      (t[28] = w),
      (t[29] = S),
      (t[30] = E))
    : (E = t[30]);
  let D;
  t[31] !== E || t[32] !== y || t[33] !== b || t[34] !== x
    ? ((D = (0, qn.jsx)(ae, {
        children: (0, qn.jsx)(h, {
          className: `select-none`,
          edgeRounding: `surface`,
          label: v,
          description: y,
          disabled: b,
          onClick: x,
          trailing: E,
        }),
      })),
      (t[31] = E),
      (t[32] = y),
      (t[33] = b),
      (t[34] = x),
      (t[35] = D))
    : (D = t[35]);
  let O;
  t[36] === m
    ? (O = t[37])
    : ((O =
        m.isError || m.data === `failed` ? (0, qn.jsx)(Bn, { onClose: () => m.reset() }) : null),
      (t[36] = m),
      (t[37] = O));
  let k;
  return (
    t[38] !== D || t[39] !== O
      ? ((k = (0, qn.jsxs)(qn.Fragment, { children: [D, O] })),
        (t[38] = D),
        (t[39] = O),
        (t[40] = k))
      : (k = t[40]),
    k
  );
}
function Gn(e) {
  e !== `failed` && window.location.assign(e.redirectUrl);
}
var Kn,
  qn,
  Jn = e(() => {
    ((Kn = ze()), Qe(), z(), se(), U(), g(), Ot(), zn(), Un(), (qn = Ae()));
  });
function Yn(e) {
  let t = (0, er.c)(31),
    { accountId: n, onBack: i } = e,
    a = r(ge),
    o = l(),
    s = x(),
    u = qe(),
    d;
  t[0] === n ? (d = t[1]) : ((d = Dt(n)), (t[0] = n), (t[1] = d));
  let f = d.sessions,
    { data: p, isError: m, refetch: h } = ne(f),
    [g, _] = (0, tr.useState)(null),
    v;
  t[2] !== n || t[3] !== f || t[4] !== o || t[5] !== a
    ? ((v = async (e) => {
        if (e === `all`) {
          let e = a.get(He);
          (e.logEventWithStatsig?.(`chatgpt_auth_log_out`, {
            location: `settings_modal_log_out_all`,
          }),
            e.logProductEvent(Ve, {
              location: it.ACCESS_LOGOUT_ACTION_LOCATION_SETTINGS_MODAL_LOG_OUT_ALL,
              logoutType: xe.ACCESS_LOGOUT_TYPE_USER_INITIATED,
            }),
            await G.safePost(`/accounts/logout_all`, {
              additionalHeaders: { "ChatGPT-Account-ID": n },
            }));
        } else
          e.session_id?.trim() &&
            !e.is_current_device &&
            (await G.safePost(`/accounts/sessions/revoke`, {
              additionalHeaders: { "ChatGPT-Account-ID": n },
              requestBody: { session_id: e.session_id },
            }),
            await o.invalidateQueries({ queryKey: f.queryKey }));
      }),
      (t[2] = n),
      (t[3] = f),
      (t[4] = o),
      (t[5] = a),
      (t[6] = v))
    : (v = t[6]);
  let y;
  t[7] !== s || t[8] !== u
    ? ((y = (e, t) => {
        (_(null),
          t === `all` &&
            (F(), s(`/auth/logout`, { replace: !0, state: `complete-browser-logout` }), ve(u)));
      }),
      (t[7] = s),
      (t[8] = u),
      (t[9] = y))
    : (y = t[9]);
  let b;
  t[10] !== v || t[11] !== y
    ? ((b = { mutationFn: v, onSuccess: y }), (t[10] = v), (t[11] = y), (t[12] = b))
    : (b = t[12]);
  let S = ye(b),
    C;
  t[13] === g
    ? (C = t[14])
    : ((C = g != null && g !== `all` && !g.session_id?.trim()), (t[13] = g), (t[14] = C));
  let w = C,
    T = `session`;
  g === `all` ? (T = `all`) : w ? (T = `unavailable`) : g?.is_trusted_device && (T = `trusted`);
  let E, D;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(c, {
        id: `settings.chatGpt.security.activeSessions`,
        defaultMessage: `Active sessions`,
        description: `Title of the ChatGPT Security and login subpage where users review active device sessions.`,
      })),
      (D = (0, Q.jsx)(c, {
        id: `settings.chatGpt.security.sessions.description`,
        defaultMessage: `View all devices that have accessed your account. You can review active sessions, remove trusted devices, or use Log out all to end all sessions.`,
        description: `Introduction to Active sessions settings explaining the available account-session management actions.`,
      })),
      (t[15] = E),
      (t[16] = D))
    : ((E = t[15]), (D = t[16]));
  let O;
  t[17] !== p || t[18] !== m || t[19] !== h || t[20] !== S
    ? ((O =
        p == null || m
          ? (0, Q.jsx)(Lt, { isError: m, onRetry: () => void h() })
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(ae, {
                  children: p.devices.map((e) => {
                    let t = Array.from(new Map(e.app_sessions?.filter($n).map(Qn)).values()).join(
                        `, `,
                      ),
                      n =
                        { macos: `macOS`, ios: `iOS`, ipados: `iPadOS` }[
                          e.platform.toLowerCase()
                        ] ?? e.platform,
                      r = [
                        e.display_name.trim() || e.device_model.trim(),
                        n.toLowerCase() === `other` ? `` : n,
                      ]
                        .filter(Zn)
                        .join(` • `),
                      i = e.last_signed_in_city.trim()
                        ? [
                            e.last_signed_in_city,
                            e.last_signed_in_region_code || e.last_signed_in_country,
                          ]
                        : [e.last_signed_in_region_code, e.last_signed_in_country];
                    return (0, Q.jsx)(
                      Je,
                      {
                        icon: (0, Q.jsx)(et, {}),
                        label:
                          t ||
                          r ||
                          (0, Q.jsx)(c, {
                            id: `settings.chatGpt.security.sessions.unknownDevice`,
                            defaultMessage: `Unknown device`,
                            description: `Fallback label for a session with no device name or app name in Active sessions settings.`,
                          }),
                        description: (0, Q.jsxs)(`div`, {
                          className: `flex flex-col items-start gap-1`,
                          children: [
                            t && r ? (0, Q.jsx)(`span`, { children: r }) : null,
                            e.session_id?.trim()
                              ? (0, Q.jsxs)(Q.Fragment, {
                                  children: [
                                    (0, Q.jsx)(c, {
                                      id: `settings.chatGpt.security.sessions.lastLogin`,
                                      defaultMessage: `Last login: {timestamp, date, medium} at {timestamp, time, short}`,
                                      description: `Last login time for a device in Active sessions settings. Timestamp is epoch milliseconds and uses the viewer's locale and timezone.`,
                                      values: {
                                        timestamp: e.last_signed_in_timestamp_second * 1e3,
                                      },
                                    }),
                                    (0, Q.jsx)(`span`, { children: i.filter(Xn).join(`, `) }),
                                  ],
                                })
                              : (0, Q.jsx)(c, {
                                  id: `settings.chatGpt.security.sessions.unavailable`,
                                  defaultMessage: `Session status unavailable`,
                                  description: `Status shown when a device does not have an individually revocable session in Active sessions settings.`,
                                }),
                            e.is_current_device
                              ? (0, Q.jsx)(Ee, {
                                  children: (0, Q.jsx)(c, {
                                    id: `settings.chatGpt.security.sessions.current`,
                                    defaultMessage: `Current session`,
                                    description: `Badge identifying the device the user is currently using in Active sessions settings.`,
                                  }),
                                })
                              : null,
                            !e.is_current_device && e.is_trusted_device
                              ? (0, Q.jsx)(Ee, {
                                  children: (0, Q.jsx)(c, {
                                    id: `settings.chatGpt.security.sessions.trusted`,
                                    defaultMessage: `Trusted device`,
                                    description: `Badge identifying a trusted authentication device in Active sessions settings.`,
                                  }),
                                })
                              : null,
                          ],
                        }),
                        control: e.is_current_device
                          ? null
                          : (0, Q.jsx)(Le, {
                              color: `secondary`,
                              size: `toolbar`,
                              onClick: () => {
                                (S.reset(), _(e));
                              },
                              children: e.session_id?.trim()
                                ? (0, Q.jsx)(c, {
                                    id: `settings.chatGpt.security.sessions.logOut`,
                                    defaultMessage: `Log out`,
                                    description: `Button opening a confirmation to end one device's session in Active sessions settings.`,
                                  })
                                : (0, Q.jsx)(c, {
                                    id: `settings.chatGpt.security.sessions.info`,
                                    defaultMessage: `Info`,
                                    description: `Button explaining why a device without an available session cannot be logged out individually.`,
                                  }),
                            }),
                      },
                      e.render_id,
                    );
                  }),
                }),
                p.devices.length === 0
                  ? (0, Q.jsx)(`p`, {
                      className: `text-sm text-secondary`,
                      children: (0, Q.jsx)(c, {
                        id: `settings.chatGpt.security.sessions.empty`,
                        defaultMessage: `No active sessions`,
                        description: `Empty state after the Active sessions list loads successfully with no devices.`,
                      }),
                    })
                  : null,
                (0, Q.jsx)(Le, {
                  className: `self-start`,
                  color: `danger`,
                  size: `toolbar`,
                  onClick: () => {
                    (S.reset(), _(`all`));
                  },
                  children: (0, Q.jsx)(c, {
                    id: `settings.chatGpt.security.sessions.logOutAll`,
                    defaultMessage: `Log out all`,
                    description: `Button opening a confirmation to end all ChatGPT sessions, including the current one.`,
                  }),
                }),
              ],
            })),
      (t[17] = p),
      (t[18] = m),
      (t[19] = h),
      (t[20] = S),
      (t[21] = O))
    : (O = t[21]);
  let k;
  t[22] !== g || t[23] !== T || t[24] !== S || t[25] !== w
    ? ((k =
        g == null
          ? null
          : (0, Q.jsx)(Rt, {
              title: nr[T].title,
              confirmLabel: nr[T].confirmLabel,
              informational: w,
              onConfirm: () => (w ? _(null) : S.mutate(g)),
              onClose: () => _(null),
              isPending: S.isPending,
              isError: S.isError,
              children: nr[T].description,
            })),
      (t[22] = g),
      (t[23] = T),
      (t[24] = S),
      (t[25] = w),
      (t[26] = k))
    : (k = t[26]);
  let A;
  return (
    t[27] !== i || t[28] !== O || t[29] !== k
      ? ((A = (0, Q.jsxs)(It, { onBack: i, title: E, subtitle: D, children: [O, k] })),
        (t[27] = i),
        (t[28] = O),
        (t[29] = k),
        (t[30] = A))
      : (A = t[30]),
    A
  );
}
function Xn(e) {
  return !!e;
}
function Zn(e) {
  return !!e;
}
function Qn(e) {
  let { client_name: t } = e;
  return [t.trim().toLowerCase(), t.trim()];
}
function $n(e) {
  let { client_name: t } = e;
  return t.trim();
}
var er,
  tr,
  Q,
  nr,
  rr = e(() => {
    ((er = ze()),
      Te(),
      Qe(),
      M(),
      (tr = t(a(), 1)),
      z(),
      v(),
      O(),
      Ke(),
      rt(),
      me(),
      i(),
      se(),
      L(),
      We(),
      U(),
      g(),
      Ot(),
      Bt(),
      (Q = Ae()),
      (nr = {
        all: {
          title: (0, Q.jsx)(c, {
            id: `settings.chatGpt.security.sessions.allTitle`,
            defaultMessage: `Log out of all devices?`,
            description: `Confirmation title before ending all ChatGPT sessions including the current device.`,
          }),
          description: (0, Q.jsx)(c, {
            id: `settings.chatGpt.security.sessions.allDescription`,
            defaultMessage: `This will log you out of your account on all devices, including this one. You’ll need to log in again on any device you want to use.`,
            description: `Warning in the Log out all confirmation that access will end everywhere, including on the current device.`,
          }),
          confirmLabel: (0, Q.jsx)(c, {
            id: `settings.chatGpt.security.sessions.allConfirm`,
            defaultMessage: `Log out of all devices`,
            description: `Destructive confirmation button ending all ChatGPT device sessions including this one.`,
          }),
        },
        unavailable: {
          title: (0, Q.jsx)(c, {
            id: `settings.chatGpt.security.sessions.unavailableTitle`,
            defaultMessage: `Can’t log out`,
            description: `Dialog title for a device whose session cannot be ended individually.`,
          }),
          description: (0, Q.jsx)(c, {
            id: `settings.chatGpt.security.sessions.unavailableDescription`,
            defaultMessage: `To remove this device, go back and select “Log out all”`,
            description: `Explains that a device without a revocable session can only be removed by logging out all devices.`,
          }),
          confirmLabel: (0, Q.jsx)(c, {
            id: `settings.chatGpt.security.sessions.gotIt`,
            defaultMessage: `Got it`,
            description: `Dismisses the explanation that this device cannot be logged out individually.`,
          }),
        },
        trusted: {
          title: (0, Q.jsx)(c, {
            id: `settings.chatGpt.security.sessions.trustedTitle`,
            defaultMessage: `Log out and remove trusted device?`,
            description: `Confirmation title before ending a device session and revoking its trusted-device status.`,
          }),
          description: (0, Q.jsx)(c, {
            id: `settings.chatGpt.security.sessions.trustedDescription`,
            defaultMessage: `This will log out the device and remove it from your trusted devices. The device will no longer receive push notifications or be used to unlock your account.`,
            description: `Warning before logging out a trusted device, explaining that its authentication privileges will also be removed.`,
          }),
          confirmLabel: (0, Q.jsx)(c, {
            id: `settings.chatGpt.security.sessions.logOut`,
            defaultMessage: `Log out`,
            description: `Button opening a confirmation to end one device's session in Active sessions settings.`,
          }),
        },
        session: {
          title: (0, Q.jsx)(c, {
            id: `settings.chatGpt.security.sessions.logoutTitle`,
            defaultMessage: `Log out?`,
            description: `Confirmation title before ending one non-current ChatGPT session.`,
          }),
          description: (0, Q.jsx)(c, {
            id: `settings.chatGpt.security.sessions.logoutDescription`,
            defaultMessage: `This will immediately log out from your account. You’ll need to log in again to access your account on that device.`,
            description: `Warning before ending one device's account session, requiring that device to sign in again.`,
          }),
          confirmLabel: (0, Q.jsx)(c, {
            id: `settings.chatGpt.security.sessions.logOut`,
            defaultMessage: `Log out`,
            description: `Button opening a confirmation to end one device's session in Active sessions settings.`,
          }),
        },
      }));
  });
function ir() {
  let e = (0, or.c)(2),
    t = p(f),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = t == null ? (0, $.jsx)(Pe, {}) : (0, $.jsx)(ar, { accountId: t }, t)),
        (e[0] = t),
        (e[1] = n)),
    n
  );
}
function ar(e) {
  let t = (0, or.c)(87),
    { accountId: n } = e,
    r = be(),
    i = w(),
    [a, s] = fe(),
    l;
  t[0] === a ? (l = t[1]) : ((l = Nn(a)), (t[0] = a), (t[1] = l));
  let u = l,
    { data: d } = k(ht, n),
    f;
  t[2] !== n || t[3] !== i.state
    ? ((f = Dt(n)),
      (f.mfa.refetchOnMount = !Et(i.state) || `always`),
      (t[2] = n),
      (t[3] = i.state),
      (t[4] = f))
    : (f = t[4]);
  let { data: p } = ne(f.mfa),
    { data: m } = ne(f.sessions),
    g = $e(`134837947`),
    _;
  t[5] !== g || t[6] !== f.linkedApps
    ? ((_ = { ...f.linkedApps, enabled: g, staleTime: at.ONE_MINUTE }),
      (t[5] = g),
      (t[6] = f.linkedApps),
      (t[7] = _))
    : (_ = t[7]);
  let { data: v } = ne(_),
    y;
  t[8] !== d?.features || t[9] !== r.email || t[10] !== p?.mfa_enabled_v2
    ? ((y = r.email != null && (d?.features?.includes(`mfa`) === !0 || p?.mfa_enabled_v2 === !0)),
      (t[8] = d?.features),
      (t[9] = r.email),
      (t[10] = p?.mfa_enabled_v2),
      (t[11] = y))
    : (y = t[11]);
  let x = y,
    S = a.get(`view`),
    C;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = { mutationFn: Fn }), (t[12] = C))
    : (C = t[12]);
  let T = ye(C),
    E;
  t[13] !== a || t[14] !== s
    ? ((E = (e) => {
        let t = new URLSearchParams(a);
        (e == null ? t.delete(`view`) : t.set(`view`, e), s(t));
      }),
      (t[13] = a),
      (t[14] = s),
      (t[15] = E))
    : (E = t[15]);
  let D = E,
    O;
  t[16] !== a || t[17] !== T || t[18] !== s
    ? ((O = (e) => {
        T.mutate(e, {
          onSuccess: (e, t) => {
            if (typeof e == `object`) {
              window.location.assign(e.redirectUrl);
              return;
            }
            if (e !== `ready`) return;
            let n = new URLSearchParams(a);
            (n.set(`action`, t.action),
              n.set(`factor`, t.factor),
              t.action === `disable` ? n.set(`factor_id`, t.factorId) : n.delete(`factor_id`),
              s(n));
          },
        });
      }),
      (t[16] = a),
      (t[17] = T),
      (t[18] = s),
      (t[19] = O))
    : (O = t[19]);
  let A = O,
    j;
  t[20] !== a || t[21] !== s
    ? ((j = () => {
        let e = new URLSearchParams(a);
        (e.delete(`action`),
          e.delete(`factor`),
          e.delete(`factor_id`),
          e.get(`_tm`) === `passkey_created` && e.delete(`_tm`),
          s(e, { replace: !0 }));
      }),
      (t[20] = a),
      (t[21] = s),
      (t[22] = j))
    : (j = t[22]);
  let M = j,
    N;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, $.jsx)(o, { slug: `security` })), (t[23] = N))
    : (N = t[23]);
  let P;
  t[24] === n ? (P = t[25]) : ((P = (0, $.jsx)(Wn, { accountId: n })), (t[24] = n), (t[25] = P));
  let F;
  t[26] !== n || t[27] !== A || t[28] !== D || t[29] !== T.isPending || t[30] !== x
    ? ((F = x
        ? (0, $.jsx)(Xt, {
            accountId: n,
            pending: T.isPending,
            onAction: A,
            onOpenPasskeys: () => D(`passkeys`),
          })
        : null),
      (t[26] = n),
      (t[27] = A),
      (t[28] = D),
      (t[29] = T.isPending),
      (t[30] = x),
      (t[31] = F))
    : (F = t[31]);
  let I;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(W.Header, {
        title: (0, $.jsx)(c, {
          id: `settings.chatGpt.security.sessions`,
          defaultMessage: `Sessions`,
          description: `Heading above active device sessions and linked apps in Security and login settings.`,
        }),
      })),
      (t[32] = I))
    : (I = t[32]);
  let L, R;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, $.jsx)(c, {
        id: `settings.chatGpt.security.activeSessions`,
        defaultMessage: `Active sessions`,
        description: `Title of the ChatGPT Security and login subpage where users review active device sessions.`,
      })),
      (R = (0, $.jsx)(c, {
        id: `settings.chatGpt.security.sessions.description`,
        defaultMessage: `View all devices that have accessed your account. You can review active sessions, remove trusted devices, or use Log out all to end all sessions.`,
        description: `Introduction to Active sessions settings explaining the available account-session management actions.`,
      })),
      (t[33] = L),
      (t[34] = R))
    : ((L = t[33]), (R = t[34]));
  let ee;
  t[35] === D ? (ee = t[36]) : ((ee = () => D(`sessions`)), (t[35] = D), (t[36] = ee));
  let te = m?.devices.length,
    z;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, $.jsx)(Oe, {})), (t[37] = z))
    : (z = t[37]);
  let B;
  t[38] === te
    ? (B = t[39])
    : ((B = (0, $.jsxs)($.Fragment, { children: [te, z] })), (t[38] = te), (t[39] = B));
  let V;
  t[40] !== ee || t[41] !== B
    ? ((V = (0, $.jsx)(h, {
        edgeRounding: `surface`,
        label: L,
        description: R,
        onClick: ee,
        trailing: B,
      })),
      (t[40] = ee),
      (t[41] = B),
      (t[42] = V))
    : (V = t[42]);
  let re;
  t[43] !== v || t[44] !== g || t[45] !== D
    ? ((re = g
        ? (0, $.jsx)(h, {
            edgeRounding: `surface`,
            label: (0, $.jsx)(c, {
              id: `settings.chatGpt.security.linkedApps.title`,
              defaultMessage: `Sign in with ChatGPT`,
              description: `Title of the Security and login subpage listing websites and apps linked through ChatGPT sign-in.`,
            }),
            description: (0, $.jsx)(c, {
              id: `settings.chatGpt.security.linkedApps.rowDescription`,
              defaultMessage: `Sign in to websites and apps across the internet with the trusted security of ChatGPT`,
              description: `Description of the row opening websites and apps connected through Sign in with ChatGPT.`,
            }),
            onClick: () => D(`linked-apps`),
            trailing: (0, $.jsxs)($.Fragment, {
              children: [
                v == null ? null : v.items.length + (v.third_party_items?.length ?? 0),
                (0, $.jsx)(Oe, {}),
              ],
            }),
          })
        : null),
      (t[43] = v),
      (t[44] = g),
      (t[45] = D),
      (t[46] = re))
    : (re = t[46]);
  let H;
  t[47] !== V || t[48] !== re
    ? ((H = (0, $.jsxs)(W, {
        children: [I, (0, $.jsx)(W.Content, { children: (0, $.jsxs)(ae, { children: [V, re] }) })],
      })),
      (t[47] = V),
      (t[48] = re),
      (t[49] = H))
    : (H = t[49]);
  let ie, oe;
  t[50] === n
    ? ((ie = t[51]), (oe = t[52]))
    : ((ie = (0, $.jsx)(kt, { accountId: n })),
      (oe = (0, $.jsx)(rn, { accountId: n })),
      (t[50] = n),
      (t[51] = ie),
      (t[52] = oe));
  let se;
  t[53] !== F || t[54] !== H || t[55] !== ie || t[56] !== oe || t[57] !== P
    ? ((se = (0, $.jsxs)(b, { title: N, children: [P, F, H, ie, oe] })),
      (t[53] = F),
      (t[54] = H),
      (t[55] = ie),
      (t[56] = oe),
      (t[57] = P),
      (t[58] = se))
    : (se = t[58]);
  let ce = se;
  if (S === `sessions`) {
    let e;
    t[59] === D ? (e = t[60]) : ((e = () => D(null)), (t[59] = D), (t[60] = e));
    let r;
    (t[61] !== n || t[62] !== e
      ? ((r = (0, $.jsx)(Yn, { accountId: n, onBack: e })), (t[61] = n), (t[62] = e), (t[63] = r))
      : (r = t[63]),
      (ce = r));
  } else if (S === `linked-apps` && g) {
    let e;
    t[64] === D ? (e = t[65]) : ((e = () => D(null)), (t[64] = D), (t[65] = e));
    let r;
    (t[66] !== n || t[67] !== e
      ? ((r = (0, $.jsx)(un, { accountId: n, onBack: e })), (t[66] = n), (t[67] = e), (t[68] = r))
      : (r = t[68]),
      (ce = r));
  } else if (S === `passkeys` && x) {
    let e;
    t[69] === D ? (e = t[70]) : ((e = () => D(null)), (t[69] = D), (t[70] = e));
    let r;
    (t[71] !== n || t[72] !== A || t[73] !== T.isPending || t[74] !== e
      ? ((r = (0, $.jsx)(Tn, { accountId: n, pending: T.isPending, onAction: A, onBack: e })),
        (t[71] = n),
        (t[72] = A),
        (t[73] = T.isPending),
        (t[74] = e),
        (t[75] = r))
      : (r = t[75]),
      (ce = r));
  }
  let U;
  t[76] === T
    ? (U = t[77])
    : ((U = T.isError || T.data === `failed` ? (0, $.jsx)(Bn, { onClose: () => T.reset() }) : null),
      (t[76] = T),
      (t[77] = U));
  let le;
  t[78] !== n || t[79] !== u || t[80] !== M || t[81] !== x
    ? ((le =
        u != null && u.action !== `complete` && x
          ? (0, $.jsx)(Qt, { accountId: n, action: u, onClose: M })
          : null),
      (t[78] = n),
      (t[79] = u),
      (t[80] = M),
      (t[81] = x),
      (t[82] = le))
    : (le = t[82]);
  let ue;
  return (
    t[83] !== ce || t[84] !== U || t[85] !== le
      ? ((ue = (0, $.jsxs)($.Fragment, { children: [ce, U, le] })),
        (t[83] = ce),
        (t[84] = U),
        (t[85] = le),
        (t[86] = ue))
      : (ue = t[86]),
    ue
  );
}
var or, $;
e(() => {
  ((or = ze()),
    Qe(),
    M(),
    z(),
    v(),
    rt(),
    mt(),
    Re(),
    se(),
    D(),
    oe(),
    R(),
    Tt(),
    U(),
    ie(),
    g(),
    _e(),
    V(),
    Mt(),
    nn(),
    Ot(),
    ln(),
    wn(),
    An(),
    Jn(),
    zn(),
    Un(),
    rr(),
    ($ = Ae()));
})();
export { ir as ChatGptSecuritySettings };
//# sourceMappingURL=security-settings-f2893aaee7b5.js.map
