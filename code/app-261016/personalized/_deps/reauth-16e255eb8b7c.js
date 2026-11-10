import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  HFt as n,
  HO as r,
  IO as i,
  JO as a,
  Jx as o,
  KO as s,
  LNt as c,
  LO as l,
  Lst as u,
  Mst as d,
  NO as f,
  NSt as p,
  ORt as m,
  PBt as h,
  PO as g,
  Pit as _,
  RO as ee,
  Rst as te,
  SLt as ne,
  ULt as re,
  VRt as v,
  WO as ie,
  XOt as y,
  XSt as ae,
  Xat as oe,
  Y3 as se,
  Yat as b,
  Yx as ce,
  Z3 as x,
  hRt as le,
  jit as S,
  jst as ue,
  kRt as C,
  nzt as de,
  okt as fe,
  qO as pe,
  tkt as w,
  vst as me,
  yst as he,
  zO as ge,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as _e,
  Ejr as ve,
  Sjr as ye,
  Uft as be,
  ZLn as xe,
  _t as Se,
  czr as T,
  iRr as Ce,
  imr as we,
  nzr as Te,
  rmr as Ee,
  tyr as De,
  vjr as Oe,
  xjr as E,
} from "./app-initial-ad16eaadf81f.js";
import { n as ke, r as D, t as O } from "./client-77d175e61121.js";
import { n as Ae, t as je } from "./phone-number-input-c1e0f7bd6044.js";
import { n as Me, t as Ne } from "./parsePhoneNumber-4ef2d042ec5d.js";
import { n as k, t as Pe } from "./phone-number-countries-7269d64e3574.js";
import { n as Fe, t as A } from "./recommendation-status-23fd960f6a26.js";
import { i as j, n as Ie, t as M } from "./shared-30e89022d7a8.js";
import { n as N, r as P } from "./session-7c09e4681e00.js";
import { n as Le, t as F } from "./return-url-fc251a8ad74f.js";
async function Re(e) {
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
function I() {
  return (I = e(() => {
    be();
  }))();
}
function L(e) {
  let t = (0, He.c)(116),
    { accountId: n, factor: r, email: a, onClose: c, onActivated: u } = e,
    p = fe(),
    [m] = ae();
  m.get(`mfa_source`);
  let h = `settings`,
    g;
  t[0] === p
    ? (g = t[1])
    : ((g = p.formatMessage({
        id: `settings.chatGpt.security.mfa.copyCode`,
        defaultMessage: `Copy code`,
        description: `Button that copies the secret setup key for manual entry in an authenticator app, not the six-digit verification code.`,
      })),
      (t[0] = p),
      (t[1] = g));
  let _ = g,
    ne = te(),
    { userId: re } = we(),
    v = ve(),
    [y, oe] = (0, Ue.useState)(``),
    [b, ce] = (0, Ue.useState)(``),
    [x, le] = (0, Ue.useState)(!1),
    [S, ue] = (0, Ue.useState)(null),
    C = ye(`3685705952`),
    de = C.get(`sms`, []),
    me = C.get(`whatsapp`, []),
    _e = Pe(de, me),
    be = Me(b),
    Se = be?.country,
    T;
  Se != null && me.includes(Se) ? (T = `whatsapp`) : Se != null && de.includes(Se) && (T = `sms`);
  let {
      data: Ce,
      isError: Te,
      refetch: Ee,
    } = d({
      queryKey: [`chatgpt-security`, n, `totp-enrollment`],
      queryFn: (e) => {
        let { signal: t } = e;
        return D.safePost(`/accounts/mfa/enroll`, {
          additionalHeaders: { "ChatGPT-Account-ID": n },
          requestBody: { factor_type: `totp`, source: h },
          signal: t,
        });
      },
      enabled: r === `totp`,
      retry: !1,
      staleTime: 1 / 0,
      gcTime: 0,
      refetchOnWindowFocus: !1,
      refetchOnReconnect: !1,
    }),
    De;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((De = (e) => ue(e)), (t[2] = De)) : (De = t[2]);
  let E = he({
      mutationFn: async () => {
        if (!be?.isValid() || T == null) return null;
        let e = await D.safePost(`/accounts/mfa/enroll`, {
          additionalHeaders: { "ChatGPT-Account-ID": n },
          requestBody: {
            factor_type: `sms`,
            phone_number: be.number,
            phone_verification_channel: T,
            source: h,
          },
        });
        return We.parse(e);
      },
      onSuccess: De,
    }),
    O;
  t[3] !== n || t[4] !== S
    ? ((O = async () => {
        S != null &&
          (await D.safePost(`/accounts/mfa/user/sms/resend_otp_for_enrollment`, {
            additionalHeaders: { "ChatGPT-Account-ID": n },
            requestBody: { session_id: S.session_id, factor_id: S.factor.id },
          }));
      }),
      (t[3] = n),
      (t[4] = S),
      (t[5] = O))
    : (O = t[5]);
  let Ae;
  t[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ae = () => oe(``)), (t[6] = Ae)) : (Ae = t[6]);
  let Ne;
  t[7] === O ? (Ne = t[8]) : ((Ne = { mutationFn: O, onSuccess: Ae }), (t[7] = O), (t[8] = Ne));
  let k = he(Ne),
    A = he({
      mutationFn: async () => {
        if (r === `push_auth`)
          await D.safePost(`/accounts/mfa/enroll`, {
            additionalHeaders: { "ChatGPT-Account-ID": n },
            requestBody: { factor_type: r, source: h },
          });
        else {
          let e = r === `totp` ? Ce?.session_id : S?.session_id;
          if (e == null || !/^\d{6}$/.test(y.trim())) return !1;
          if (
            !(
              await D.safePost(`/accounts/mfa/user/activate_enrollment`, {
                additionalHeaders: { "ChatGPT-Account-ID": n },
                requestBody: { factor_type: r, session_id: e, code: y.trim(), source: h },
              })
            ).success
          )
            throw Error(`MFA activation was not completed`);
        }
        let e = ne.invalidateQueries({ queryKey: ke(n).mfa.queryKey }),
          t = re ? ne.invalidateQueries({ queryKey: Fe(n, re).queryKey }).catch(ze) : Promise.resolve();
        return (await Promise.all([e, t]), null);
      },
    }),
    j = E.isPending || A.isPending || k.isPending,
    M = r === `sms` && S == null,
    N = Ce?.secret,
    P = null;
  if (M && E.isError) {
    let e;
    (t[9] === E.error ? (e = t[10]) : ((e = Be(E.error, `sms-send`)), (t[9] = E.error), (t[10] = e)),
      (P = e));
  } else if (r === `sms` && k.isError) {
    let e;
    (t[11] === k.error ? (e = t[12]) : ((e = Be(k.error, `sms-send`)), (t[11] = k.error), (t[12] = e)),
      (P = e));
  } else if (A.isError) {
    let e;
    e = r === `sms` ? `sms-verify` : r === `totp` ? `totp-verify` : `push-enable`;
    let n;
    (t[13] !== A.error || t[14] !== e
      ? ((n = Be(A.error, e)), (t[13] = A.error), (t[14] = e), (t[15] = n))
      : (n = t[15]),
      (P = n));
  }
  let Le = ie,
    F;
  t[16] !== c || t[17] !== j
    ? ((F = (e) => {
        !e && !j && c();
      }),
      (t[16] = c),
      (t[17] = j),
      (t[18] = F))
    : (F = t[18]);
  let Re = i,
    I;
  t[19] !== A ||
  t[20] !== M ||
  t[21] !== u ||
  t[22] !== c ||
  t[23] !== j ||
  t[24] !== k ||
  t[25] !== E ||
  t[26] !== v
    ? ((I = (e) => {
        (e.preventDefault(),
          !j &&
            (M
              ? E.mutate()
              : (k.reset(),
                A.mutate(void 0, {
                  onSuccess: (e) => {
                    if (e !== !1) {
                      if (u != null) {
                        u();
                        return;
                      }
                      if (e?.recommended_factors.includes(`sms`) && Oe(v, `618349193`)) {
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
                      c();
                    }
                  },
                }))));
      }),
      (t[19] = A),
      (t[20] = M),
      (t[21] = u),
      (t[22] = c),
      (t[23] = j),
      (t[24] = k),
      (t[25] = E),
      (t[26] = v),
      (t[27] = I))
    : (I = t[27]);
  let L;
  t[28] !== r || t[29] !== M
    ? ((L =
        r === `sms` && !M
          ? (0, B.jsx)(w, {
              id: `settings.chatGpt.security.mfa.smsCodeTitle`,
              defaultMessage: `Enter the code`,
              description: `Title of the text-message MFA verification dialog after a code has been sent to the user's phone.`,
            })
          : Ge[r]),
      (t[28] = r),
      (t[29] = M),
      (t[30] = L))
    : (L = t[30]);
  let R;
  t[31] === L
    ? (R = t[32])
    : ((R = (0, B.jsx)(ee, { title: (0, B.jsx)(pe, { children: L }) })), (t[31] = L), (t[32] = R));
  let z;
  t[33] === r
    ? (z = t[34])
    : ((z =
        r === `totp`
          ? (0, B.jsx)(s, {
              className: `text-sm text-secondary`,
              children: (0, B.jsx)(w, {
                id: `settings.chatGpt.security.mfa.scanInstructions`,
                defaultMessage: `Scan the QR code using your authenticator app, then enter the 6-digit code from the app`,
                description: `Instructions in authenticator setup. The user scans the displayed QR code and types a one-time six-digit code to activate MFA.`,
              }),
            })
          : null),
      (t[33] = r),
      (t[34] = z));
  let V;
  t[35] !== R || t[36] !== z
    ? ((V = (0, B.jsxs)(ge, { children: [R, z] })), (t[35] = R), (t[36] = z), (t[37] = V))
    : (V = t[37]);
  let H;
  t[38] !== r || t[39] !== Te || t[40] !== Ee || t[41] !== N || t[42] !== Ce
    ? ((H =
        r === `totp` && N == null
          ? (0, B.jsx)(Ie, { isError: Te || Ce != null, onRetry: () => void Ee() })
          : null),
      (t[38] = r),
      (t[39] = Te),
      (t[40] = Ee),
      (t[41] = N),
      (t[42] = Ce),
      (t[43] = H))
    : (H = t[43]);
  let U;
  t[44] !== _ || t[45] !== a || t[46] !== r || t[47] !== N || t[48] !== x
    ? ((U =
        r === `totp` && N != null
          ? (0, B.jsxs)(B.Fragment, {
              children: [
                x
                  ? (0, B.jsxs)(`div`, {
                      className: `flex flex-col items-center gap-3`,
                      children: [
                        (0, B.jsx)(`code`, { className: `break-all select-text`, children: N }),
                        (0, B.jsx)(o, { ariaLabel: _, buttonText: _, onCopy: (e) => f(N, e) }),
                      ],
                    })
                  : (0, B.jsx)(Ve, { secret: N, email: a }),
                (0, B.jsx)(se, {
                  type: `button`,
                  color: `ghost`,
                  size: `toolbar`,
                  onClick: () => le(!x),
                  children: x
                    ? (0, B.jsx)(w, {
                        id: `settings.chatGpt.security.mfa.showQr`,
                        defaultMessage: `Show QR code`,
                        description: `Switches authenticator setup from the text secret back to the scannable QR code.`,
                      })
                    : (0, B.jsx)(w, {
                        id: `settings.chatGpt.security.mfa.showSecret`,
                        defaultMessage: `Can’t scan? Enter the code manually`,
                        description: `Shows the authenticator setup secret as selectable text when the user cannot scan its QR code.`,
                      }),
                }),
              ],
            })
          : null),
      (t[44] = _),
      (t[45] = a),
      (t[46] = r),
      (t[47] = N),
      (t[48] = x),
      (t[49] = U))
    : (U = t[49]);
  let Ke = M
      ? (0, B.jsxs)(`div`, {
          className: `flex flex-col gap-2 text-sm`,
          children: [
            (0, B.jsx)(`label`, {
              htmlFor: `mfa-phone-number`,
              children: (0, B.jsx)(w, {
                id: `settings.chatGpt.security.mfa.phoneLabel`,
                defaultMessage: `Phone number`,
                description: `Label for the national phone number paired with the country selector used to set up text-message MFA.`,
              }),
            }),
            (0, B.jsx)(je, {
              id: `mfa-phone-number`,
              name: `phone-number`,
              autoComplete: `tel`,
              required: !0,
              autoFocus: !0,
              value: b,
              onChange: (e) => {
                (ce(e), E.reset());
              },
              countries: _e,
              placeholder: p.formatMessage({
                id: `settings.chatGpt.security.mfa.phonePlaceholder.national`,
                defaultMessage: `Phone number`,
                description: `Neutral placeholder for the national phone-number field in the text-message MFA setup dialog. The separate country selector supplies the international dialing code.`,
              }),
              disabled: j,
            }),
          ],
        })
      : null,
    W;
  t[50] === r
    ? (W = t[51])
    : ((W =
        r === `push_auth`
          ? (0, B.jsx)(s, {
              className: `text-sm text-secondary`,
              children: (0, B.jsx)(w, {
                id: `settings.chatGpt.security.mfa.pushDescription`,
                defaultMessage: `Approve log-ins with a push sent to your trusted device`,
                description: `Explanation of push-notification MFA in Security and login settings.`,
              }),
            })
          : null),
      (t[50] = r),
      (t[51] = W));
  let G;
  t[52] === M
    ? (G = t[53])
    : ((G = M
        ? (0, B.jsx)(s, {
            className: `text-sm text-secondary`,
            children: (0, B.jsx)(w, {
              id: `settings.chatGpt.security.mfa.smsDescription`,
              defaultMessage: `Get 6-digit verification codes by SMS or WhatsApp based on your country code`,
              description: `Description of text-message MFA setup explaining the delivery channel depends on the phone country code.`,
            }),
          })
        : null),
      (t[52] = M),
      (t[53] = G));
  let K;
  t[54] !== A || t[55] !== y || t[56] !== r || t[57] !== M || t[58] !== j || t[59] !== k
    ? ((K =
        !M && r !== `push_auth`
          ? (0, B.jsxs)(`label`, {
              className: `flex flex-col gap-2 text-sm`,
              children: [
                (0, B.jsx)(w, {
                  id: `settings.chatGpt.security.mfa.code`,
                  defaultMessage: `6-digit code`,
                  description: `Label for the one-time verification code used to activate an MFA factor.`,
                }),
                (0, B.jsx)(xe, {
                  name: `verification-code`,
                  inputMode: `numeric`,
                  autoComplete: `one-time-code`,
                  pattern: `[0-9]{6}`,
                  maxLength: 6,
                  required: !0,
                  value: y,
                  onChange: (e) => {
                    (oe(e.target.value), A.reset(), k.reset());
                  },
                  disabled: j,
                }),
              ],
            })
          : null),
      (t[54] = A),
      (t[55] = y),
      (t[56] = r),
      (t[57] = M),
      (t[58] = j),
      (t[59] = k),
      (t[60] = K))
    : (K = t[60]);
  let q;
  t[61] !== A || t[62] !== r || t[63] !== j || t[64] !== b || t[65] !== k || t[66] !== E || t[67] !== S
    ? ((q =
        r === `sms` && S != null
          ? (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(s, {
                  className: `text-sm text-secondary`,
                  children: (0, B.jsx)(w, {
                    id: `settings.chatGpt.security.mfa.smsSent`,
                    defaultMessage: `Enter the 6-digit code we just sent to {phoneNumber}`,
                    description: `Text-message MFA verification instructions. PhoneNumber is the international phone number the user entered, shown for confirmation.`,
                    values: { phoneNumber: b },
                  }),
                }),
                (0, B.jsxs)(`div`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, B.jsx)(se, {
                      type: `button`,
                      color: `secondary`,
                      size: `toolbar`,
                      disabled: j,
                      onClick: () => {
                        (A.reset(), k.mutate());
                      },
                      children: (0, B.jsx)(w, {
                        id: `settings.chatGpt.security.mfa.resend`,
                        defaultMessage: `Resend code`,
                        description: `Requests another one-time code for the current text-message MFA enrollment challenge.`,
                      }),
                    }),
                    (0, B.jsx)(se, {
                      type: `button`,
                      color: `ghost`,
                      size: `toolbar`,
                      disabled: j,
                      onClick: () => {
                        (ue(null), oe(``), A.reset(), E.reset(), k.reset());
                      },
                      children: (0, B.jsx)(w, {
                        id: `settings.chatGpt.security.mfa.editPhone`,
                        defaultMessage: `Change phone number`,
                        description: `Returns to phone entry during text-message MFA enrollment without activating the pending authentication factor.`,
                      }),
                    }),
                  ],
                }),
                k.isSuccess
                  ? (0, B.jsx)(`p`, {
                      role: `status`,
                      className: `text-sm text-secondary`,
                      children: (0, B.jsx)(w, {
                        id: `settings.chatGpt.security.mfa.resent`,
                        defaultMessage: `We resent a code to your phone`,
                        description: `Success status after requesting another text-message MFA enrollment code.`,
                      }),
                    })
                  : null,
              ],
            })
          : null),
      (t[61] = A),
      (t[62] = r),
      (t[63] = j),
      (t[64] = b),
      (t[65] = k),
      (t[66] = E),
      (t[67] = S),
      (t[68] = q))
    : (q = t[68]);
  let qe =
      M && be?.isValid() && T == null
        ? (0, B.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-secondary`,
            children: (0, B.jsx)(w, {
              id: `settings.chatGpt.security.mfa.unsupportedRegion`,
              defaultMessage: `Text message verification isn’t available for this country code`,
              description: `Explains why a valid phone number cannot be submitted for MFA when its country is not enabled for SMS or WhatsApp verification.`,
            }),
          })
        : null,
    J;
  t[69] === P
    ? (J = t[70])
    : ((J = P && (0, B.jsx)(`p`, { role: `alert`, className: `text-sm text-danger`, children: P })),
      (t[69] = P),
      (t[70] = J));
  let Y;
  t[71] !== H ||
  t[72] !== U ||
  t[73] !== Ke ||
  t[74] !== W ||
  t[75] !== G ||
  t[76] !== K ||
  t[77] !== q ||
  t[78] !== qe ||
  t[79] !== J
    ? ((Y = (0, B.jsxs)(ge, {
        className: `gap-4`,
        spacing: `large`,
        children: [H, U, Ke, W, G, K, q, qe, J],
      })),
      (t[71] = H),
      (t[72] = U),
      (t[73] = Ke),
      (t[74] = W),
      (t[75] = G),
      (t[76] = K),
      (t[77] = q),
      (t[78] = qe),
      (t[79] = J),
      (t[80] = Y))
    : (Y = t[80]);
  let Je = ge,
    Ye = l,
    X;
  t[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, B.jsx)(w, {
        id: `settings.chatGpt.security.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismisses an account security confirmation without changing authentication, devices, or app access.`,
      })),
      (t[81] = X))
    : (X = t[81]);
  let Z;
  t[82] !== c || t[83] !== j
    ? ((Z = (0, B.jsx)(se, { type: `button`, color: `secondary`, onClick: c, disabled: j, children: X })),
      (t[82] = c),
      (t[83] = j),
      (t[84] = Z))
    : (Z = t[84]);
  let Q = se,
    Xe =
      j ||
      (M && (!be?.isValid() || T == null)) ||
      (r === `totp` && N == null) ||
      (!M && r !== `push_auth` && !/^\d{6}$/.test(y)),
    $;
  t[85] === M
    ? ($ = t[86])
    : (($ = M
        ? (0, B.jsx)(w, {
            id: `settings.chatGpt.security.mfa.sendCode`,
            defaultMessage: `Send code`,
            description: `Requests a verification code at the phone number entered for text-message MFA enrollment.`,
          })
        : null),
      (t[85] = M),
      (t[86] = $));
  let Ze;
  t[87] === r
    ? (Ze = t[88])
    : ((Ze =
        r === `push_auth`
          ? (0, B.jsx)(w, {
              id: `settings.chatGpt.security.mfa.enable`,
              defaultMessage: `Enable`,
              description: `Confirms enabling trusted-device push notifications as an MFA factor.`,
            })
          : null),
      (t[87] = r),
      (t[88] = Ze));
  let Qe;
  t[89] !== r || t[90] !== M
    ? ((Qe =
        !M && r !== `push_auth`
          ? (0, B.jsx)(w, {
              id: `settings.chatGpt.security.mfa.verify`,
              defaultMessage: `Verify`,
              description: `Submits the six-digit code to activate the selected MFA factor.`,
            })
          : null),
      (t[89] = r),
      (t[90] = M),
      (t[91] = Qe))
    : (Qe = t[91]);
  let $e;
  t[92] !== Q || t[93] !== j || t[94] !== Xe || t[95] !== $ || t[96] !== Ze || t[97] !== Qe
    ? (($e = (0, B.jsxs)(Q, {
        type: `submit`,
        color: `primary`,
        loading: j,
        disabled: Xe,
        children: [$, Ze, Qe],
      })),
      (t[92] = Q),
      (t[93] = j),
      (t[94] = Xe),
      (t[95] = $),
      (t[96] = Ze),
      (t[97] = Qe),
      (t[98] = $e))
    : ($e = t[98]);
  let et;
  t[99] !== Ye || t[100] !== Z || t[101] !== $e
    ? ((et = (0, B.jsxs)(Ye, { children: [Z, $e] })),
      (t[99] = Ye),
      (t[100] = Z),
      (t[101] = $e),
      (t[102] = et))
    : (et = t[102]);
  let tt;
  t[103] !== Je || t[104] !== et
    ? ((tt = (0, B.jsx)(Je, { spacing: `large`, children: et })), (t[103] = Je), (t[104] = et), (t[105] = tt))
    : (tt = t[105]);
  let nt;
  t[106] !== Re || t[107] !== I || t[108] !== V || t[109] !== Y || t[110] !== tt
    ? ((nt = (0, B.jsxs)(Re, { as: `form`, onSubmit: I, children: [V, Y, tt] })),
      (t[106] = Re),
      (t[107] = I),
      (t[108] = V),
      (t[109] = Y),
      (t[110] = tt),
      (t[111] = nt))
    : (nt = t[111]);
  let rt;
  return (
    t[112] !== Le || t[113] !== nt || t[114] !== F
      ? ((rt = (0, B.jsx)(Le, { open: !0, onOpenChange: F, children: nt })),
        (t[112] = Le),
        (t[113] = nt),
        (t[114] = F),
        (t[115] = rt))
      : (rt = t[115]),
    rt
  );
}
function ze() {}
function Be(e, t) {
  let n = e instanceof S ? e.status : void 0;
  if (t === `sms-send` || t === `sms-verify`) {
    if (n === 409)
      return (0, B.jsx)(w, {
        id: `settings.chatGpt.security.mfa.phoneNumberInUse`,
        defaultMessage: `This phone number is already in use. Try a different number`,
        description: `SMS MFA enrollment error when the phone number is already registered. The user can choose Change phone number.`,
      });
    if (n === 429)
      return t === `sms-send`
        ? (0, B.jsx)(w, {
            id: `settings.chatGpt.security.mfa.smsSendThrottled`,
            defaultMessage: `You’ve sent too many requests. Wait before trying again`,
            description: `SMS MFA enrollment error when requesting or resending a verification code is throttled.`,
          })
        : (0, B.jsx)(w, {
            id: `settings.chatGpt.security.mfa.verifyThrottled`,
            defaultMessage: `You’ve tried too many times. Wait before trying again`,
            description: `MFA setup error when too many verification attempts have been made.`,
          });
    if (t === `sms-send`)
      return n === 403
        ? (0, B.jsx)(w, {
            id: `settings.chatGpt.security.mfa.phoneNumberNotAllowed`,
            defaultMessage: `We couldn’t send a code to this phone number. Try a different number`,
            description: `SMS MFA enrollment error when sending to the chosen phone number is disallowed. The user can edit or change the number.`,
          })
        : (0, B.jsx)(w, {
            id: `settings.chatGpt.security.mfa.smsSendError`,
            defaultMessage: `We couldn’t send a code. Try again`,
            description: `Fallback error when requesting or resending an SMS MFA setup code fails for an unknown reason.`,
          });
    if (n === 403)
      return (0, B.jsx)(w, {
        id: `settings.chatGpt.security.mfa.smsVerifyRejected`,
        defaultMessage: `We couldn’t verify that code. Check the code and try again`,
        description: `SMS MFA setup error when the entered verification code is rejected.`,
      });
  }
  return t === `totp-verify` && n === 429
    ? (0, B.jsx)(w, {
        id: `settings.chatGpt.security.mfa.verifyThrottled`,
        defaultMessage: `You’ve tried too many times. Wait before trying again`,
        description: `MFA setup error when too many verification attempts have been made.`,
      })
    : t === `sms-verify` || t === `totp-verify`
      ? (0, B.jsx)(w, {
          id: `settings.chatGpt.security.mfa.codeVerifyError`,
          defaultMessage: `We couldn’t verify the code. Try again`,
          description: `Fallback error when an SMS or authenticator app MFA setup code cannot be verified.`,
        })
      : (0, B.jsx)(w, {
          id: `settings.chatGpt.security.mfa.verifyError`,
          defaultMessage: `Couldn’t complete setup. Check your details and try again`,
          description: `Inline error after enabling push MFA fails. Setup remains open for correction or cancellation.`,
        });
}
function R(e) {
  let t = (0, He.c)(26),
    { accountId: n, action: r, passkeyName: i, onClose: a } = e,
    o = te(),
    s;
  t[0] !== n || t[1] !== r.factorId
    ? ((s = () =>
        D.safePost(`/accounts/mfa/user/disable_in_house`, {
          additionalHeaders: { "ChatGPT-Account-ID": n },
          requestBody: { factor_id: r.factorId },
        })),
      (t[0] = n),
      (t[1] = r.factorId),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] !== n || t[4] !== a || t[5] !== o
    ? ((c = async (e) => {
        (Re(e.passkey_credential_manager_sync),
          await o.invalidateQueries({ queryKey: ke(n).mfa.queryKey }),
          a());
      }),
      (t[3] = n),
      (t[4] = a),
      (t[5] = o),
      (t[6] = c))
    : (c = t[6]);
  let l;
  t[7] !== s || t[8] !== c
    ? ((l = { mutationFn: s, onSuccess: c }), (t[7] = s), (t[8] = c), (t[9] = l))
    : (l = t[9]);
  let u = he(l),
    d;
  if (r.factor === `passkey` && u.error instanceof S && u.error.status === 400) {
    if (u.error.errorCode === `advanced_account_security_minimum_passkeys_required`) {
      let e;
      (t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, B.jsx)(w, {
            id: `settings.chatGpt.security.passkeys.removeBlockedByAasMinimum`,
            defaultMessage: `Advanced Account Security requires at least two security keys or passkeys. Add another before removing this one.`,
            description: `Blocking error when removing a security key or passkey would leave fewer than two credentials required by Advanced Account Security. Tell the user to add another credential before retrying.`,
          })),
          (t[10] = e))
        : (e = t[10]),
        (d = e));
    } else if (u.error.errorCode === `advanced_account_security_non_device_bound_passkey_required`) {
      let e;
      (t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, B.jsx)(w, {
            id: `settings.chatGpt.security.passkeys.removeBlockedByAasNonDeviceBound`,
            defaultMessage: `Advanced Account Security requires at least one security key or passkey that works across devices. Add another before removing this one.`,
            description: `Blocking error when removing a security key or passkey would leave no credential that works across devices, as required by Advanced Account Security. Avoid technical terms like non-device-bound and tell the user to add another credential before retrying.`,
          })),
          (t[11] = e))
        : (e = t[11]),
        (d = e));
    }
  }
  let f;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, B.jsx)(w, {
        id: `settings.chatGpt.security.mfa.removeTitle`,
        defaultMessage: `Remove authentication method?`,
        description: `Confirmation title before removing the selected authenticator, phone number or push factor from the account.`,
      })),
      (t[12] = f))
    : (f = t[12]);
  let p = f;
  if (r.factor === `passkey`) {
    let e;
    (t[13] === i
      ? (e = t[14])
      : ((e = i
          ? (0, B.jsx)(w, {
              id: `settings.chatGpt.security.passkeys.deleteNamedTitle`,
              defaultMessage: `Delete {name}?`,
              description: `Confirmation title before deleting a passkey or security key. Name is the credential's custom display name or authenticator name, matching the passkey list.`,
              values: { name: i },
            })
          : (0, B.jsx)(w, {
              id: `settings.chatGpt.security.passkeys.deleteTitle`,
              defaultMessage: `Delete passkey?`,
              description: `Confirmation title before deleting a passkey or security key that has no display name.`,
            })),
        (t[13] = i),
        (t[14] = e)),
      (p = e));
  }
  let m;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, B.jsx)(w, {
        id: `settings.chatGpt.security.mfa.remove`,
        defaultMessage: `Remove`,
        description: `Destructive confirmation button removing the selected authentication factor from the account.`,
      })),
      (t[15] = m))
    : (m = t[15]);
  let h;
  t[16] === u ? (h = t[17]) : ((h = () => u.mutate()), (t[16] = u), (t[17] = h));
  let g;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, B.jsx)(w, {
        id: `settings.chatGpt.security.mfa.removeDescription`,
        defaultMessage: `You won’t be able to use this method to sign in to your account anymore`,
        description: `Warning in the MFA removal confirmation explaining that the selected factor will no longer be usable to sign in.`,
      })),
      (t[18] = g))
    : (g = t[18]);
  let _;
  return (
    t[19] !== d || t[20] !== a || t[21] !== u.isError || t[22] !== u.isPending || t[23] !== h || t[24] !== p
      ? ((_ = (0, B.jsx)(M, {
          title: p,
          confirmLabel: m,
          onConfirm: h,
          onClose: a,
          isPending: u.isPending,
          isError: u.isError,
          errorMessage: d,
          children: g,
        })),
        (t[19] = d),
        (t[20] = a),
        (t[21] = u.isError),
        (t[22] = u.isPending),
        (t[23] = h),
        (t[24] = p),
        (t[25] = _))
      : (_ = t[25]),
    _
  );
}
function Ve(e) {
  let t = (0, He.c)(20),
    { secret: n, email: r } = e,
    i = fe(),
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
    : (({ modules: s } = (0, z.create)(o, { errorCorrectionLevel: `M` })),
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
    : ((m = (0, B.jsx)(`rect`, { width: c, height: c, fill: `white` })), (t[11] = c), (t[12] = m));
  let h;
  t[13] === d ? (h = t[14]) : ((h = (0, B.jsx)(`path`, { d, fill: `black` })), (t[13] = d), (t[14] = h));
  let g;
  return (
    t[15] !== f || t[16] !== p || t[17] !== m || t[18] !== h
      ? ((g = (0, B.jsxs)(`svg`, {
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
var He, z, Ue, B, We, Ge;
function V() {
  return (V = e(() => {
    ((He = h()),
      me(),
      ue(),
      u(),
      Ne(),
      (z = Se()),
      (Ue = t()),
      y(),
      p(),
      n(),
      Ee(),
      x(),
      ce(),
      a(),
      r(),
      _e(),
      E(),
      g(),
      _(),
      k(),
      Ae(),
      O(),
      I(),
      A(),
      j(),
      (B = c()),
      (We = C({ session_id: v().min(1), factor: C({ id: v().min(1) }) })),
      (Ge = {
        totp: (0, B.jsx)(w, {
          id: `settings.chatGpt.security.mfa.totpTitle`,
          defaultMessage: `Connect your authenticator app`,
          description: `Title of the authenticator app setup dialog in Security and login settings.`,
        }),
        sms: (0, B.jsx)(w, {
          id: `settings.chatGpt.security.mfa.smsTitle`,
          defaultMessage: `Add your phone number`,
          description: `Title of the text-message MFA setup dialog in Security and login settings.`,
        }),
        push_auth: (0, B.jsx)(w, {
          id: `settings.chatGpt.security.mfa.pushTitle`,
          defaultMessage: `Enable push notifications`,
          description: `Title of the confirmation to use trusted-device push notifications for multi-factor authentication.`,
        }),
      }));
  }))();
}
function H(e) {
  return e.get(`_tm`) === `passkey_created` && e.get(`action`) === `enable` && e.get(`factor`) === `passkey`;
}
function U(e, t) {
  let n = Ye.safeParse({ action: e.get(`action`), factor: e.get(`factor`), factorId: e.get(`factor_id`) });
  if (!n.success) return Ke(e, t);
  if (H(e)) return { action: `complete`, factor: `passkey` };
  let r = de().safeParse(e.get(`action_attempt_id`));
  return r.success ? { ...n.data, actionAttemptId: r.data } : n.data;
}
function Ke(e, t) {
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
function W(e, t, n = Date.now()) {
  try {
    let r = e.split(`.`)[1];
    if (r == null) return !1;
    let i = X.safeParse(JSON.parse(atob(r.replace(/-/g, `+`).replace(/_/g, `/`))));
    if (!i.success) return !1;
    let a = n - i.data.pwd_auth_time;
    return a >= 0 && a < 24e4 && (!t || i.data[`https://api.openai.com/mfa`]?.required === `yes`);
  } catch {
    return !1;
  }
}
function G(e, t = Date.now()) {
  try {
    let n = e.split(`.`)[1];
    if (n == null) return !1;
    let r = X.safeParse(JSON.parse(atob(n.replace(/-/g, `+`).replace(/_/g, `/`))));
    if (!r.success) return !1;
    let i = t - (r.data.pwd_auth_time < 0xe8d4a51000 ? r.data.pwd_auth_time * 1e3 : r.data.pwd_auth_time);
    return i >= 0 && i <= Xe && r.data[`https://api.openai.com/mfa`]?.required === `yes`;
  } catch {
    return !1;
  }
}
function K(e, t) {
  return e.get(Z) === `true` && e.get(Q) === t;
}
async function q(e, t = !1) {
  let n = await T();
  if (n?.accountId !== e) return `failed`;
  if (!t && G(n.accessToken)) return `ready`;
  let r = F();
  (r.searchParams.set(`view`, `advanced-protection`),
    r.searchParams.set(Z, `true`),
    r.searchParams.set(Q, e));
  let i = await P(r.toString(), {
    ...b().auth.reauthenticationParams,
    ...(n.email == null ? {} : { login_hint: n.email }),
  });
  return i.ok ? { redirectUrl: i.url } : `failed`;
}
async function qe(e) {
  let t = await T();
  if (t?.accountId !== e) return `failed`;
  let n = F();
  n.searchParams.set(`view`, `advanced-protection`);
  let r = await P(n.toString(), {
    ...b().auth.reauthenticationParams,
    ...(t.email == null ? {} : { login_hint: t.email }),
    post_regenerate_recovery_keys: `true`,
  });
  return r.ok ? { redirectUrl: r.url } : `failed`;
}
async function J(e, t = F().href) {
  let n = await T();
  if (n == null) return `failed`;
  if (W(n.accessToken, e.action === `disable`)) return `ready`;
  if (Je(e)) return `native-handoff`;
  let r = new URL(t);
  (e.actionAttemptId === void 0
    ? r.searchParams.delete(`action_attempt_id`)
    : r.searchParams.set(`action_attempt_id`, e.actionAttemptId),
    r.searchParams.set(`action`, e.action),
    r.searchParams.set(`factor`, e.factor),
    new URLSearchParams(window.location.search).get(`mfa_source`),
    e.factor === `passkey` && r.searchParams.set(`view`, `passkeys`),
    e.action === `disable` && r.searchParams.set(`factor_id`, e.factorId));
  let i = await P(r.toString(), b().auth.reauthenticationParams);
  return i.ok ? { redirectUrl: i.url } : `failed`;
}
async function Y(e) {
  if ((await T()) == null) return `failed`;
  let t = {
    ...b().auth.reauthenticationParams,
    [e === `add` ? `post_login_add_password` : `post_login_password_reset`]: `true`,
  };
  if (e === `add` && t[`ext-login-allow-phone`] === `true` && !t.login_hint)
    try {
      let e = C({ phone_number: v().min(1) }).safeParse(await Ce.safeGet(`/me`));
      if (!e.success) return `failed`;
      t.login_hint = e.data.phone_number;
    } catch {
      return `failed`;
    }
  let n = F(),
    r = await P(n.toString(), t);
  return r.ok ? { redirectUrl: r.url } : `failed`;
}
function Je(e) {
  if (e.factor === `passkey` || typeof Le() != `string`) return !1;
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
var Ye, X, Z, Q, Xe;
function $() {
  return ($ = e(() => {
    (n(),
      Te(),
      De(),
      oe(),
      N(),
      (Ye = re(`action`, [
        C({ action: le(`enable`), factor: ne([`totp`, `sms`, `push_auth`, `passkey`]) }),
        C({
          action: le(`disable`),
          factor: ne([`totp`, `sms`, `push_auth`, `passkey`]),
          factorId: v().min(1),
        }),
      ])),
      (X = C({ pwd_auth_time: m(), "https://api.openai.com/mfa": C({ required: v() }).optional() })),
      (Z = `apm_disable_confirm`),
      (Q = `apm_account_id`),
      (Xe = 3e4));
  }))();
}
export { J as a, U as c, V as d, qe as i, L as l, $ as n, Y as o, q as r, K as s, G as t, R as u };
//# sourceMappingURL=reauth-16e255eb8b7c.js.map
