import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $It as n,
  Ait as r,
  BLt as i,
  DIt as a,
  EPt as o,
  IDt as s,
  Iot as c,
  Lot as l,
  Nxt as u,
  TLt as d,
  VDt as f,
  Xot as p,
  Yot as m,
  _O as h,
  _xt as g,
  bx as _,
  cO as ee,
  fLt as v,
  fO as te,
  gO as ne,
  hrt as re,
  iO as ie,
  jDt as y,
  jit as ae,
  lO as oe,
  mO as se,
  nst as ce,
  oIt as b,
  oO as le,
  pLt as x,
  rO as ue,
  sO as de,
  t3 as fe,
  tst as pe,
  vO as S,
  vrt as me,
  vzt as he,
  xMt as ge,
  yx as _e,
  yzt as ve,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as ye,
  Pdt as be,
  TNr as xe,
  TPn as Se,
  Ymr as C,
  ZEr as Ce,
  aDr as we,
  eDr as Te,
  ehr as Ee,
  fur as De,
  kNr as w,
  mt as T,
  pur as Oe,
  tDr as ke,
} from "./app-initial-5851df3f6cb1.js";
import { n as Ae, r as E, t as D } from "./client-4ded20a1a3e9.js";
import { n as je, t as Me } from "./phone-number-input-9269834fc476.js";
import { n as Ne, t as Pe } from "./parsePhoneNumber-4ef2d042ec5d.js";
import { n as O, t as Fe } from "./phone-number-countries-05d41469e563.js";
import { n as Ie, t as k } from "./recommendation-status-aa79be77981b.js";
import { i as A, n as Le, t as j } from "./shared-68e21d781554.js";
import { n as M, t as N } from "./session-594d75fbcc25.js";
import { n as Re, t as P } from "./return-url-fc251a8ad74f.js";
async function ze(e) {
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
function F() {
  return (F = e(() => {
    be();
  }))();
}
function I(e) {
  let n = (0, Ue.c)(116),
    { accountId: r, factor: i, email: a, onClose: o, onActivated: c } = e,
    d = f(),
    [m] = u();
  m.get(`mfa_source`);
  let g = `settings`,
    _;
  n[0] === d
    ? (_ = n[1])
    : ((_ = d.formatMessage({
        id: `settings.chatGpt.security.mfa.copyCode`,
        defaultMessage: `Copy code`,
        description: `Button that copies the secret setup key for manual entry in an authenticator app, not the six-digit verification code.`,
      })),
      (n[0] = d),
      (n[1] = _));
  let v = _,
    te = ce(),
    { userId: re } = Oe(),
    ie = we(),
    [y, ae] = (0, We.useState)(``),
    [b, x] = (0, We.useState)(``),
    [fe, pe] = (0, We.useState)(!1),
    [S, me] = (0, We.useState)(null),
    he = ke(`3685705952`),
    ge = he.get(`sms`, []),
    ve = he.get(`whatsapp`, []),
    ye = Fe(ge, ve),
    be = Ne(b),
    xe = be?.country,
    C;
  xe != null && ve.includes(xe) ? (C = `whatsapp`) : xe != null && ge.includes(xe) && (C = `sms`);
  let {
      data: Te,
      isError: Ee,
      refetch: De,
    } = p({
      queryKey: [`chatgpt-security`, r, `totp-enrollment`],
      queryFn: (e) => {
        let { signal: t } = e;
        return E.safePost(`/accounts/mfa/enroll`, {
          additionalHeaders: { "ChatGPT-Account-ID": r },
          requestBody: { factor_type: `totp`, source: g },
          signal: t,
        });
      },
      enabled: i === `totp`,
      retry: !1,
      staleTime: 1 / 0,
      gcTime: 0,
      refetchOnWindowFocus: !1,
      refetchOnReconnect: !1,
    }),
    w;
  n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((w = (e) => me(e)), (n[2] = w)) : (w = n[2]);
  let T = l({
      mutationFn: async () => {
        if (!be?.isValid() || C == null) return null;
        let e = await E.safePost(`/accounts/mfa/enroll`, {
          additionalHeaders: { "ChatGPT-Account-ID": r },
          requestBody: {
            factor_type: `sms`,
            phone_number: be.number,
            phone_verification_channel: C,
            source: g,
          },
        });
        return Ge.parse(e);
      },
      onSuccess: w,
    }),
    D;
  n[3] !== r || n[4] !== S
    ? ((D = async () => {
        S != null &&
          (await E.safePost(`/accounts/mfa/user/sms/resend_otp_for_enrollment`, {
            additionalHeaders: { "ChatGPT-Account-ID": r },
            requestBody: { session_id: S.session_id, factor_id: S.factor.id },
          }));
      }),
      (n[3] = r),
      (n[4] = S),
      (n[5] = D))
    : (D = n[5]);
  let je;
  n[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((je = () => ae(``)), (n[6] = je)) : (je = n[6]);
  let Pe;
  n[7] === D ? (Pe = n[8]) : ((Pe = { mutationFn: D, onSuccess: je }), (n[7] = D), (n[8] = Pe));
  let O = l(Pe),
    k = l({
      mutationFn: async () => {
        if (i === `push_auth`)
          await E.safePost(`/accounts/mfa/enroll`, {
            additionalHeaders: { "ChatGPT-Account-ID": r },
            requestBody: { factor_type: i, source: g },
          });
        else {
          let e = i === `totp` ? Te?.session_id : S?.session_id;
          if (e == null || !/^\d{6}$/.test(y.trim())) return !1;
          if (
            !(
              await E.safePost(`/accounts/mfa/user/activate_enrollment`, {
                additionalHeaders: { "ChatGPT-Account-ID": r },
                requestBody: { factor_type: i, session_id: e, code: y.trim(), source: g },
              })
            ).success
          )
            throw Error(`MFA activation was not completed`);
        }
        let e = te.invalidateQueries({ queryKey: Ae(r).mfa.queryKey }),
          t = re ? te.invalidateQueries({ queryKey: Ie(r, re).queryKey }).catch(Be) : Promise.resolve();
        return (await Promise.all([e, t]), null);
      },
    }),
    A = T.isPending || k.isPending || O.isPending,
    j = i === `sms` && S == null,
    M = Te?.secret,
    N = null;
  if (j && T.isError) {
    let e;
    (n[9] === T.error ? (e = n[10]) : ((e = Ve(T.error, `sms-send`)), (n[9] = T.error), (n[10] = e)),
      (N = e));
  } else if (i === `sms` && O.isError) {
    let e;
    (n[11] === O.error ? (e = n[12]) : ((e = Ve(O.error, `sms-send`)), (n[11] = O.error), (n[12] = e)),
      (N = e));
  } else if (k.isError) {
    let e;
    e = i === `sms` ? `sms-verify` : i === `totp` ? `totp-verify` : `push-enable`;
    let t;
    (n[13] !== k.error || n[14] !== e
      ? ((t = Ve(k.error, e)), (n[13] = k.error), (n[14] = e), (n[15] = t))
      : (t = n[15]),
      (N = t));
  }
  let Re = se,
    P;
  n[16] !== o || n[17] !== A
    ? ((P = (e) => {
        !e && !A && o();
      }),
      (n[16] = o),
      (n[17] = A),
      (n[18] = P))
    : (P = n[18]);
  let ze = le,
    F;
  n[19] !== k ||
  n[20] !== j ||
  n[21] !== c ||
  n[22] !== o ||
  n[23] !== A ||
  n[24] !== O ||
  n[25] !== T ||
  n[26] !== ie
    ? ((F = (e) => {
        (e.preventDefault(),
          !A &&
            (j
              ? T.mutate()
              : (O.reset(),
                k.mutate(void 0, {
                  onSuccess: (e) => {
                    if (e !== !1) {
                      if (c != null) {
                        c();
                        return;
                      }
                      if (e?.recommended_factors.includes(`sms`) && Ce(ie, `618349193`)) {
                        let e = new URL(window.location.href);
                        (e.searchParams.delete(`view`),
                          e.searchParams.delete(`action`),
                          e.searchParams.delete(`factor`),
                          e.searchParams.delete(`factor_id`),
                          e.searchParams.delete(`action_attempt_id`),
                          e.searchParams.set(`mfa_sms_enrollment`, `true`),
                          e.searchParams.set(`entry`, `post-totp`),
                          window.location.replace(e.toString()));
                        return;
                      }
                      o();
                    }
                  },
                }))));
      }),
      (n[19] = k),
      (n[20] = j),
      (n[21] = c),
      (n[22] = o),
      (n[23] = A),
      (n[24] = O),
      (n[25] = T),
      (n[26] = ie),
      (n[27] = F))
    : (F = n[27]);
  let I;
  n[28] !== i || n[29] !== j
    ? ((I =
        i === `sms` && !j
          ? (0, z.jsx)(s, {
              id: `settings.chatGpt.security.mfa.smsCodeTitle`,
              defaultMessage: `Enter the code`,
              description: `Title of the text-message MFA verification dialog after a code has been sent to the user's phone.`,
            })
          : Ke[i]),
      (n[28] = i),
      (n[29] = j),
      (n[30] = I))
    : (I = n[30]);
  let L;
  n[31] === I
    ? (L = n[32])
    : ((L = (0, z.jsx)(ee, { title: (0, z.jsx)(h, { children: I }) })), (n[31] = I), (n[32] = L));
  let R;
  n[33] === i
    ? (R = n[34])
    : ((R =
        i === `totp`
          ? (0, z.jsx)(ne, {
              className: `text-sm text-secondary`,
              children: (0, z.jsx)(s, {
                id: `settings.chatGpt.security.mfa.scanInstructions`,
                defaultMessage: `Scan the QR code using your authenticator app, then enter the 6-digit code from the app`,
                description: `Instructions in authenticator setup. The user scans the displayed QR code and types a one-time six-digit code to activate MFA.`,
              }),
            })
          : null),
      (n[33] = i),
      (n[34] = R));
  let B;
  n[35] !== L || n[36] !== R
    ? ((B = (0, z.jsxs)(oe, { children: [L, R] })), (n[35] = L), (n[36] = R), (n[37] = B))
    : (B = n[37]);
  let V;
  n[38] !== i || n[39] !== Ee || n[40] !== De || n[41] !== M || n[42] !== Te
    ? ((V =
        i === `totp` && M == null
          ? (0, z.jsx)(Le, { isError: Ee || Te != null, onRetry: () => void De() })
          : null),
      (n[38] = i),
      (n[39] = Ee),
      (n[40] = De),
      (n[41] = M),
      (n[42] = Te),
      (n[43] = V))
    : (V = n[43]);
  let H;
  n[44] !== v || n[45] !== a || n[46] !== i || n[47] !== M || n[48] !== fe
    ? ((H =
        i === `totp` && M != null
          ? (0, z.jsxs)(z.Fragment, {
              children: [
                fe
                  ? (0, z.jsxs)(`div`, {
                      className: `flex flex-col items-center gap-3`,
                      children: [
                        (0, z.jsx)(`code`, { className: `break-all select-text`, children: M }),
                        (0, z.jsx)(_e, { ariaLabel: v, buttonText: v, onCopy: (e) => ue(M, e) }),
                      ],
                    })
                  : (0, z.jsx)(He, { secret: M, email: a }),
                (0, z.jsx)(t, {
                  type: `button`,
                  color: `ghost`,
                  size: `toolbar`,
                  onClick: () => pe(!fe),
                  children: fe
                    ? (0, z.jsx)(s, {
                        id: `settings.chatGpt.security.mfa.showQr`,
                        defaultMessage: `Show QR code`,
                        description: `Switches authenticator setup from the text secret back to the scannable QR code.`,
                      })
                    : (0, z.jsx)(s, {
                        id: `settings.chatGpt.security.mfa.showSecret`,
                        defaultMessage: `Can’t scan? Enter the code manually`,
                        description: `Shows the authenticator setup secret as selectable text when the user cannot scan its QR code.`,
                      }),
                }),
              ],
            })
          : null),
      (n[44] = v),
      (n[45] = a),
      (n[46] = i),
      (n[47] = M),
      (n[48] = fe),
      (n[49] = H))
    : (H = n[49]);
  let qe = j
      ? (0, z.jsxs)(`div`, {
          className: `flex flex-col gap-2 text-sm`,
          children: [
            (0, z.jsx)(`label`, {
              htmlFor: `mfa-phone-number`,
              children: (0, z.jsx)(s, {
                id: `settings.chatGpt.security.mfa.phoneLabel`,
                defaultMessage: `Phone number`,
                description: `Label for the national phone number paired with the country selector used to set up text-message MFA.`,
              }),
            }),
            (0, z.jsx)(Me, {
              id: `mfa-phone-number`,
              name: `phone-number`,
              autoComplete: `tel`,
              required: !0,
              autoFocus: !0,
              value: b,
              onChange: (e) => {
                (x(e), T.reset());
              },
              countries: ye,
              placeholder: d.formatMessage({
                id: `settings.chatGpt.security.mfa.phonePlaceholder.national`,
                defaultMessage: `Phone number`,
                description: `Neutral placeholder for the national phone-number field in the text-message MFA setup dialog. The separate country selector supplies the international dialing code.`,
              }),
              disabled: A,
            }),
          ],
        })
      : null,
    U;
  n[50] === i
    ? (U = n[51])
    : ((U =
        i === `push_auth`
          ? (0, z.jsx)(ne, {
              className: `text-sm text-secondary`,
              children: (0, z.jsx)(s, {
                id: `settings.chatGpt.security.mfa.pushDescription`,
                defaultMessage: `Approve log-ins with a push sent to your trusted device`,
                description: `Explanation of push-notification MFA in Security and login settings.`,
              }),
            })
          : null),
      (n[50] = i),
      (n[51] = U));
  let W;
  n[52] === j
    ? (W = n[53])
    : ((W = j
        ? (0, z.jsx)(ne, {
            className: `text-sm text-secondary`,
            children: (0, z.jsx)(s, {
              id: `settings.chatGpt.security.mfa.smsDescription`,
              defaultMessage: `Get 6-digit verification codes by SMS or WhatsApp based on your country code`,
              description: `Description of text-message MFA setup explaining the delivery channel depends on the phone country code.`,
            }),
          })
        : null),
      (n[52] = j),
      (n[53] = W));
  let G;
  n[54] !== k || n[55] !== y || n[56] !== i || n[57] !== j || n[58] !== A || n[59] !== O
    ? ((G =
        !j && i !== `push_auth`
          ? (0, z.jsxs)(`label`, {
              className: `flex flex-col gap-2 text-sm`,
              children: [
                (0, z.jsx)(s, {
                  id: `settings.chatGpt.security.mfa.code`,
                  defaultMessage: `6-digit code`,
                  description: `Label for the one-time verification code used to activate an MFA factor.`,
                }),
                (0, z.jsx)(Se, {
                  name: `verification-code`,
                  inputMode: `numeric`,
                  autoComplete: `one-time-code`,
                  pattern: `[0-9]{6}`,
                  maxLength: 6,
                  required: !0,
                  value: y,
                  onChange: (e) => {
                    (ae(e.target.value), k.reset(), O.reset());
                  },
                  disabled: A,
                }),
              ],
            })
          : null),
      (n[54] = k),
      (n[55] = y),
      (n[56] = i),
      (n[57] = j),
      (n[58] = A),
      (n[59] = O),
      (n[60] = G))
    : (G = n[60]);
  let K;
  n[61] !== k || n[62] !== i || n[63] !== A || n[64] !== b || n[65] !== O || n[66] !== T || n[67] !== S
    ? ((K =
        i === `sms` && S != null
          ? (0, z.jsxs)(z.Fragment, {
              children: [
                (0, z.jsx)(ne, {
                  className: `text-sm text-secondary`,
                  children: (0, z.jsx)(s, {
                    id: `settings.chatGpt.security.mfa.smsSent`,
                    defaultMessage: `Enter the 6-digit code we just sent to {phoneNumber}`,
                    description: `Text-message MFA verification instructions. PhoneNumber is the international phone number the user entered, shown for confirmation.`,
                    values: { phoneNumber: b },
                  }),
                }),
                (0, z.jsxs)(`div`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, z.jsx)(t, {
                      type: `button`,
                      color: `secondary`,
                      size: `toolbar`,
                      disabled: A,
                      onClick: () => {
                        (k.reset(), O.mutate());
                      },
                      children: (0, z.jsx)(s, {
                        id: `settings.chatGpt.security.mfa.resend`,
                        defaultMessage: `Resend code`,
                        description: `Requests another one-time code for the current text-message MFA enrollment challenge.`,
                      }),
                    }),
                    (0, z.jsx)(t, {
                      type: `button`,
                      color: `ghost`,
                      size: `toolbar`,
                      disabled: A,
                      onClick: () => {
                        (me(null), ae(``), k.reset(), T.reset(), O.reset());
                      },
                      children: (0, z.jsx)(s, {
                        id: `settings.chatGpt.security.mfa.editPhone`,
                        defaultMessage: `Change phone number`,
                        description: `Returns to phone entry during text-message MFA enrollment without activating the pending authentication factor.`,
                      }),
                    }),
                  ],
                }),
                O.isSuccess
                  ? (0, z.jsx)(`p`, {
                      role: `status`,
                      className: `text-sm text-secondary`,
                      children: (0, z.jsx)(s, {
                        id: `settings.chatGpt.security.mfa.resent`,
                        defaultMessage: `We resent a code to your phone`,
                        description: `Success status after requesting another text-message MFA enrollment code.`,
                      }),
                    })
                  : null,
              ],
            })
          : null),
      (n[61] = k),
      (n[62] = i),
      (n[63] = A),
      (n[64] = b),
      (n[65] = O),
      (n[66] = T),
      (n[67] = S),
      (n[68] = K))
    : (K = n[68]);
  let Je =
      j && be?.isValid() && C == null
        ? (0, z.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-secondary`,
            children: (0, z.jsx)(s, {
              id: `settings.chatGpt.security.mfa.unsupportedRegion`,
              defaultMessage: `Text message verification isn’t available for this country code`,
              description: `Explains why a valid phone number cannot be submitted for MFA when its country is not enabled for SMS or WhatsApp verification.`,
            }),
          })
        : null,
    q;
  n[69] === N
    ? (q = n[70])
    : ((q = N && (0, z.jsx)(`p`, { role: `alert`, className: `text-sm text-danger`, children: N })),
      (n[69] = N),
      (n[70] = q));
  let J;
  n[71] !== V ||
  n[72] !== H ||
  n[73] !== qe ||
  n[74] !== U ||
  n[75] !== W ||
  n[76] !== G ||
  n[77] !== K ||
  n[78] !== Je ||
  n[79] !== q
    ? ((J = (0, z.jsxs)(oe, {
        className: `gap-4`,
        spacing: `large`,
        children: [V, H, qe, U, W, G, K, Je, q],
      })),
      (n[71] = V),
      (n[72] = H),
      (n[73] = qe),
      (n[74] = U),
      (n[75] = W),
      (n[76] = G),
      (n[77] = K),
      (n[78] = Je),
      (n[79] = q),
      (n[80] = J))
    : (J = n[80]);
  let Ye = oe,
    Xe = de,
    Y;
  n[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, z.jsx)(s, {
        id: `settings.chatGpt.security.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismisses an account security confirmation without changing authentication, devices, or app access.`,
      })),
      (n[81] = Y))
    : (Y = n[81]);
  let X;
  n[82] !== o || n[83] !== A
    ? ((X = (0, z.jsx)(t, { type: `button`, color: `secondary`, onClick: o, disabled: A, children: Y })),
      (n[82] = o),
      (n[83] = A),
      (n[84] = X))
    : (X = n[84]);
  let Z = t,
    Ze =
      A ||
      (j && (!be?.isValid() || C == null)) ||
      (i === `totp` && M == null) ||
      (!j && i !== `push_auth` && !/^\d{6}$/.test(y)),
    Q;
  n[85] === j
    ? (Q = n[86])
    : ((Q = j
        ? (0, z.jsx)(s, {
            id: `settings.chatGpt.security.mfa.sendCode`,
            defaultMessage: `Send code`,
            description: `Requests a verification code at the phone number entered for text-message MFA enrollment.`,
          })
        : null),
      (n[85] = j),
      (n[86] = Q));
  let Qe;
  n[87] === i
    ? (Qe = n[88])
    : ((Qe =
        i === `push_auth`
          ? (0, z.jsx)(s, {
              id: `settings.chatGpt.security.mfa.enable`,
              defaultMessage: `Enable`,
              description: `Confirms enabling trusted-device push notifications as an MFA factor.`,
            })
          : null),
      (n[87] = i),
      (n[88] = Qe));
  let $e;
  n[89] !== i || n[90] !== j
    ? (($e =
        !j && i !== `push_auth`
          ? (0, z.jsx)(s, {
              id: `settings.chatGpt.security.mfa.verify`,
              defaultMessage: `Verify`,
              description: `Submits the six-digit code to activate the selected MFA factor.`,
            })
          : null),
      (n[89] = i),
      (n[90] = j),
      (n[91] = $e))
    : ($e = n[91]);
  let et;
  n[92] !== Z || n[93] !== A || n[94] !== Ze || n[95] !== Q || n[96] !== Qe || n[97] !== $e
    ? ((et = (0, z.jsxs)(Z, {
        type: `submit`,
        color: `primary`,
        loading: A,
        disabled: Ze,
        children: [Q, Qe, $e],
      })),
      (n[92] = Z),
      (n[93] = A),
      (n[94] = Ze),
      (n[95] = Q),
      (n[96] = Qe),
      (n[97] = $e),
      (n[98] = et))
    : (et = n[98]);
  let tt;
  n[99] !== Xe || n[100] !== X || n[101] !== et
    ? ((tt = (0, z.jsxs)(Xe, { children: [X, et] })),
      (n[99] = Xe),
      (n[100] = X),
      (n[101] = et),
      (n[102] = tt))
    : (tt = n[102]);
  let nt;
  n[103] !== Ye || n[104] !== tt
    ? ((nt = (0, z.jsx)(Ye, { spacing: `large`, children: tt })), (n[103] = Ye), (n[104] = tt), (n[105] = nt))
    : (nt = n[105]);
  let $;
  n[106] !== ze || n[107] !== F || n[108] !== B || n[109] !== J || n[110] !== nt
    ? (($ = (0, z.jsxs)(ze, { as: `form`, onSubmit: F, children: [B, J, nt] })),
      (n[106] = ze),
      (n[107] = F),
      (n[108] = B),
      (n[109] = J),
      (n[110] = nt),
      (n[111] = $))
    : ($ = n[111]);
  let rt;
  return (
    n[112] !== Re || n[113] !== $ || n[114] !== P
      ? ((rt = (0, z.jsx)(Re, { open: !0, onOpenChange: P, children: $ })),
        (n[112] = Re),
        (n[113] = $),
        (n[114] = P),
        (n[115] = rt))
      : (rt = n[115]),
    rt
  );
}
function Be() {}
function Ve(e, t) {
  let n = e instanceof re ? e.status : void 0;
  if (t === `sms-send` || t === `sms-verify`) {
    if (n === 409)
      return (0, z.jsx)(s, {
        id: `settings.chatGpt.security.mfa.phoneNumberInUse`,
        defaultMessage: `This phone number is already in use. Try a different number`,
        description: `SMS MFA enrollment error when the phone number is already registered. The user can choose Change phone number.`,
      });
    if (n === 429)
      return t === `sms-send`
        ? (0, z.jsx)(s, {
            id: `settings.chatGpt.security.mfa.smsSendThrottled`,
            defaultMessage: `You’ve sent too many requests. Wait before trying again`,
            description: `SMS MFA enrollment error when requesting or resending a verification code is throttled.`,
          })
        : (0, z.jsx)(s, {
            id: `settings.chatGpt.security.mfa.verifyThrottled`,
            defaultMessage: `You’ve tried too many times. Wait before trying again`,
            description: `MFA setup error when too many verification attempts have been made.`,
          });
    if (t === `sms-send`)
      return n === 403
        ? (0, z.jsx)(s, {
            id: `settings.chatGpt.security.mfa.phoneNumberNotAllowed`,
            defaultMessage: `We couldn’t send a code to this phone number. Try a different number`,
            description: `SMS MFA enrollment error when sending to the chosen phone number is disallowed. The user can edit or change the number.`,
          })
        : (0, z.jsx)(s, {
            id: `settings.chatGpt.security.mfa.smsSendError`,
            defaultMessage: `We couldn’t send a code. Try again`,
            description: `Fallback error when requesting or resending an SMS MFA setup code fails for an unknown reason.`,
          });
    if (n === 403)
      return (0, z.jsx)(s, {
        id: `settings.chatGpt.security.mfa.smsVerifyRejected`,
        defaultMessage: `We couldn’t verify that code. Check the code and try again`,
        description: `SMS MFA setup error when the entered verification code is rejected.`,
      });
  }
  return t === `totp-verify` && n === 429
    ? (0, z.jsx)(s, {
        id: `settings.chatGpt.security.mfa.verifyThrottled`,
        defaultMessage: `You’ve tried too many times. Wait before trying again`,
        description: `MFA setup error when too many verification attempts have been made.`,
      })
    : t === `sms-verify` || t === `totp-verify`
      ? (0, z.jsx)(s, {
          id: `settings.chatGpt.security.mfa.codeVerifyError`,
          defaultMessage: `We couldn’t verify the code. Try again`,
          description: `Fallback error when an SMS or authenticator app MFA setup code cannot be verified.`,
        })
      : (0, z.jsx)(s, {
          id: `settings.chatGpt.security.mfa.verifyError`,
          defaultMessage: `Couldn’t complete setup. Check your details and try again`,
          description: `Inline error after enabling push MFA fails. Setup remains open for correction or cancellation.`,
        });
}
function L(e) {
  let t = (0, Ue.c)(26),
    { accountId: n, action: r, passkeyName: i, onClose: a } = e,
    o = ce(),
    c;
  t[0] !== n || t[1] !== r.factorId
    ? ((c = () =>
        E.safePost(`/accounts/mfa/user/disable_in_house`, {
          additionalHeaders: { "ChatGPT-Account-ID": n },
          requestBody: { factor_id: r.factorId },
        })),
      (t[0] = n),
      (t[1] = r.factorId),
      (t[2] = c))
    : (c = t[2]);
  let u;
  t[3] !== n || t[4] !== a || t[5] !== o
    ? ((u = async (e) => {
        (ze(e.passkey_credential_manager_sync),
          await o.invalidateQueries({ queryKey: Ae(n).mfa.queryKey }),
          a());
      }),
      (t[3] = n),
      (t[4] = a),
      (t[5] = o),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] !== c || t[8] !== u
    ? ((d = { mutationFn: c, onSuccess: u }), (t[7] = c), (t[8] = u), (t[9] = d))
    : (d = t[9]);
  let f = l(d),
    p;
  if (r.factor === `passkey` && f.error instanceof re && f.error.status === 400) {
    if (f.error.errorCode === `advanced_account_security_minimum_passkeys_required`) {
      let e;
      (t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, z.jsx)(s, {
            id: `settings.chatGpt.security.passkeys.removeBlockedByAasMinimum`,
            defaultMessage: `Advanced Account Security requires at least two security keys or passkeys. Add another before removing this one.`,
            description: `Blocking error when removing a security key or passkey would leave fewer than two credentials required by Advanced Account Security. Tell the user to add another credential before retrying.`,
          })),
          (t[10] = e))
        : (e = t[10]),
        (p = e));
    } else if (f.error.errorCode === `advanced_account_security_non_device_bound_passkey_required`) {
      let e;
      (t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, z.jsx)(s, {
            id: `settings.chatGpt.security.passkeys.removeBlockedByAasNonDeviceBound`,
            defaultMessage: `Advanced Account Security requires at least one security key or passkey that works across devices. Add another before removing this one.`,
            description: `Blocking error when removing a security key or passkey would leave no credential that works across devices, as required by Advanced Account Security. Avoid technical terms like non-device-bound and tell the user to add another credential before retrying.`,
          })),
          (t[11] = e))
        : (e = t[11]),
        (p = e));
    }
  }
  let m;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, z.jsx)(s, {
        id: `settings.chatGpt.security.mfa.removeTitle`,
        defaultMessage: `Remove authentication method?`,
        description: `Confirmation title before removing the selected authenticator, phone number or push factor from the account.`,
      })),
      (t[12] = m))
    : (m = t[12]);
  let h = m;
  if (r.factor === `passkey`) {
    let e;
    (t[13] === i
      ? (e = t[14])
      : ((e = i
          ? (0, z.jsx)(s, {
              id: `settings.chatGpt.security.passkeys.deleteNamedTitle`,
              defaultMessage: `Delete {name}?`,
              description: `Confirmation title before deleting a passkey or security key. Name is the credential's custom display name or authenticator name, matching the passkey list.`,
              values: { name: i },
            })
          : (0, z.jsx)(s, {
              id: `settings.chatGpt.security.passkeys.deleteTitle`,
              defaultMessage: `Delete passkey?`,
              description: `Confirmation title before deleting a passkey or security key that has no display name.`,
            })),
        (t[13] = i),
        (t[14] = e)),
      (h = e));
  }
  let g;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, z.jsx)(s, {
        id: `settings.chatGpt.security.mfa.remove`,
        defaultMessage: `Remove`,
        description: `Destructive confirmation button removing the selected authentication factor from the account.`,
      })),
      (t[15] = g))
    : (g = t[15]);
  let _;
  t[16] === f ? (_ = t[17]) : ((_ = () => f.mutate()), (t[16] = f), (t[17] = _));
  let ee;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, z.jsx)(s, {
        id: `settings.chatGpt.security.mfa.removeDescription`,
        defaultMessage: `You won’t be able to use this method to sign in to your account anymore`,
        description: `Warning in the MFA removal confirmation explaining that the selected factor will no longer be usable to sign in.`,
      })),
      (t[18] = ee))
    : (ee = t[18]);
  let v;
  return (
    t[19] !== p || t[20] !== a || t[21] !== f.isError || t[22] !== f.isPending || t[23] !== _ || t[24] !== h
      ? ((v = (0, z.jsx)(j, {
          title: h,
          confirmLabel: g,
          onConfirm: _,
          onClose: a,
          isPending: f.isPending,
          isError: f.isError,
          errorMessage: p,
          children: ee,
        })),
        (t[19] = p),
        (t[20] = a),
        (t[21] = f.isError),
        (t[22] = f.isPending),
        (t[23] = _),
        (t[24] = h),
        (t[25] = v))
      : (v = t[25]),
    v
  );
}
function He(e) {
  let t = (0, Ue.c)(20),
    { secret: n, email: r } = e,
    i = f(),
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
    : (({ modules: s } = (0, R.create)(o, { errorCorrectionLevel: `M` })),
      (c = s.size + 8),
      (l = Array.from(s.data)),
      (t[2] = o),
      (t[3] = s),
      (t[4] = c),
      (t[5] = l));
  let u;
  t[6] !== s || t[7] !== l
    ? ((u = l.flatMap((e, t) => (e ? [`M${(t % s.size) + 4},${Math.floor(t / s.size) + 4}h1v1h-1z`] : []))),
      (t[6] = s),
      (t[7] = l),
      (t[8] = u))
    : (u = t[8]);
  let d = u.join(``),
    p = `0 0 ${c} ${c}`,
    m;
  t[9] === i
    ? (m = t[10])
    : ((m = i.formatMessage({
        id: `settings.chatGpt.security.mfa.qrLabel`,
        defaultMessage: `QR code for authenticator app setup`,
        description: `Accessible image label for the QR code containing the secret used to connect an authenticator app.`,
      })),
      (t[9] = i),
      (t[10] = m));
  let h;
  t[11] === c
    ? (h = t[12])
    : ((h = (0, z.jsx)(`rect`, { width: c, height: c, fill: `white` })), (t[11] = c), (t[12] = h));
  let g;
  t[13] === d ? (g = t[14]) : ((g = (0, z.jsx)(`path`, { d, fill: `black` })), (t[13] = d), (t[14] = g));
  let _;
  return (
    t[15] !== p || t[16] !== m || t[17] !== h || t[18] !== g
      ? ((_ = (0, z.jsxs)(`svg`, {
          className: `size-48 self-center`,
          viewBox: p,
          role: `img`,
          "aria-label": m,
          children: [h, g],
        })),
        (t[15] = p),
        (t[16] = m),
        (t[17] = h),
        (t[18] = g),
        (t[19] = _))
      : (_ = t[19]),
    _
  );
}
var Ue, R, We, z, Ge, Ke;
function B() {
  return (B = e(() => {
    ((Ue = he()),
      c(),
      m(),
      pe(),
      Pe(),
      (R = T()),
      (We = ve()),
      y(),
      g(),
      o(),
      De(),
      fe(),
      _(),
      S(),
      te(),
      ye(),
      Te(),
      ie(),
      me(),
      O(),
      je(),
      D(),
      F(),
      k(),
      A(),
      (z = ge()),
      (Ge = x({ session_id: d().min(1), factor: x({ id: d().min(1) }) })),
      (Ke = {
        totp: (0, z.jsx)(s, {
          id: `settings.chatGpt.security.mfa.totpTitle`,
          defaultMessage: `Connect your authenticator app`,
          description: `Title of the authenticator app setup dialog in Security and login settings.`,
        }),
        sms: (0, z.jsx)(s, {
          id: `settings.chatGpt.security.mfa.smsTitle`,
          defaultMessage: `Add your phone number`,
          description: `Title of the text-message MFA setup dialog in Security and login settings.`,
        }),
        push_auth: (0, z.jsx)(s, {
          id: `settings.chatGpt.security.mfa.pushTitle`,
          defaultMessage: `Enable push notifications`,
          description: `Title of the confirmation to use trusted-device push notifications for multi-factor authentication.`,
        }),
      }));
  }))();
}
function V(e) {
  return e.get(`_tm`) === `passkey_created` && e.get(`action`) === `enable` && e.get(`factor`) === `passkey`;
}
function H(e, t) {
  let n = Xe.safeParse({ action: e.get(`action`), factor: e.get(`factor`), factorId: e.get(`factor_id`) });
  if (!n.success) return qe(e, t);
  if (V(e)) return { action: `complete`, factor: `passkey` };
  let r = i().safeParse(e.get(`action_attempt_id`));
  return r.success ? { ...n.data, actionAttemptId: r.data } : n.data;
}
function qe(e, t) {
  let n = e.get(`factor_id`);
  if (e.has(`factor`) || e.get(`action`) !== `disable` || n == null || n.length === 0 || t == null)
    return null;
  let r = [];
  (t.factors.totp.some(({ id: e }) => e === n) && r.push(`totp`),
    t.factors.sms.some(({ id: e }) => e === n) && r.push(`sms`),
    t.factors.push_auth?.id === n && r.push(`push_auth`));
  let [i, ...a] = r;
  return i == null || a.length > 0 ? null : { action: `disable`, factor: i, factorId: n };
}
function U(e, t, n = Date.now()) {
  try {
    let r = e.split(`.`)[1];
    if (r == null) return !1;
    let i = Y.safeParse(JSON.parse(atob(r.replace(/-/g, `+`).replace(/_/g, `/`))));
    if (!i.success) return !1;
    let a = n - i.data.pwd_auth_time;
    return a >= 0 && a < 24e4 && (!t || i.data[`https://api.openai.com/mfa`]?.required === `yes`);
  } catch {
    return !1;
  }
}
function W(e, t = Date.now()) {
  try {
    let n = e.split(`.`)[1];
    if (n == null) return !1;
    let r = Y.safeParse(JSON.parse(atob(n.replace(/-/g, `+`).replace(/_/g, `/`))));
    if (!r.success) return !1;
    let i = t - (r.data.pwd_auth_time < 0xe8d4a51000 ? r.data.pwd_auth_time * 1e3 : r.data.pwd_auth_time);
    return i >= 0 && i <= Ze && r.data[`https://api.openai.com/mfa`]?.required === `yes`;
  } catch {
    return !1;
  }
}
function G(e, t) {
  return e.get(X) === `true` && e.get(Z) === t;
}
async function K(e, t = !1) {
  let n = await w();
  if (n?.accountId !== e) return `failed`;
  if (!t && W(n.accessToken)) return `ready`;
  let i = P();
  (i.searchParams.set(`view`, `advanced-protection`),
    i.searchParams.set(X, `true`),
    i.searchParams.set(Z, e));
  let a = await M(i.toString(), {
    ...r().auth.reauthenticationParams,
    ...(n.email == null ? {} : { login_hint: n.email }),
  });
  return a.ok ? { redirectUrl: a.url } : `failed`;
}
async function Je(e) {
  let t = await w();
  if (t?.accountId !== e) return `failed`;
  let n = P();
  n.searchParams.set(`view`, `advanced-protection`);
  let i = await M(n.toString(), {
    ...r().auth.reauthenticationParams,
    ...(t.email == null ? {} : { login_hint: t.email }),
    post_regenerate_recovery_keys: `true`,
  });
  return i.ok ? { redirectUrl: i.url } : `failed`;
}
async function q(e, t = P().href) {
  let n = await w();
  if (n == null) return `failed`;
  if (U(n.accessToken, e.action === `disable`)) return `ready`;
  if (Ye(e)) return `native-handoff`;
  let i = new URL(t);
  (e.actionAttemptId === void 0
    ? i.searchParams.delete(`action_attempt_id`)
    : i.searchParams.set(`action_attempt_id`, e.actionAttemptId),
    i.searchParams.set(`action`, e.action),
    i.searchParams.set(`factor`, e.factor),
    new URLSearchParams(window.location.search).get(`mfa_source`),
    e.factor === `passkey` && i.searchParams.set(`view`, `passkeys`),
    e.action === `disable` && i.searchParams.set(`factor_id`, e.factorId));
  let a = await M(i.toString(), r().auth.reauthenticationParams);
  return a.ok ? { redirectUrl: a.url } : `failed`;
}
async function J(e) {
  if ((await w()) == null) return `failed`;
  let t = {
    ...r().auth.reauthenticationParams,
    [e === `add` ? `post_login_add_password` : `post_login_password_reset`]: `true`,
  };
  if (e === `add` && t[`ext-login-allow-phone`] === `true` && !t.login_hint)
    try {
      let e = x({ phone_number: d().min(1) }).safeParse(await C.safeGet(`/me`));
      if (!e.success) return `failed`;
      t.login_hint = e.data.phone_number;
    } catch {
      return `failed`;
    }
  let n = P(),
    i = await M(n.toString(), t);
  return i.ok ? { redirectUrl: i.url } : `failed`;
}
function Ye(e) {
  if (e.factor === `passkey` || typeof Re() != `string`) return !1;
  let t = window,
    n = t.SecurityNative ?? t.webkit?.messageHandlers?.securityNative;
  return n
    ? (n.postMessage(
        btoa(
          JSON.stringify({
            type: `refresh`,
            action: e.action,
            factor: e.factor,
            factorId: e.action === `disable` ? e.factorId : void 0,
          }),
        ),
      ),
      !0)
    : !1;
}
var Xe, Y, X, Z, Ze;
function Q() {
  return (Q = e(() => {
    (o(),
      xe(),
      Ee(),
      ae(),
      N(),
      (Xe = a(`action`, [
        x({ action: n(`enable`), factor: b([`totp`, `sms`, `push_auth`, `passkey`]) }),
        x({ action: n(`disable`), factor: b([`totp`, `sms`, `push_auth`, `passkey`]), factorId: d().min(1) }),
      ])),
      (Y = x({ pwd_auth_time: v(), "https://api.openai.com/mfa": x({ required: d() }).optional() })),
      (X = `apm_disable_confirm`),
      (Z = `apm_account_id`),
      (Ze = 3e4));
  }))();
}
export { q as a, H as c, B as d, Je as i, I as l, Q as n, J as o, K as r, G as s, W as t, L as u };
//# sourceMappingURL=reauth-d884ddea5c49.js.map
