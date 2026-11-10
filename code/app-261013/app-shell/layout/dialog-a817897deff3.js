import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  GE as n,
  IDt as r,
  Iot as i,
  Lot as ee,
  WE as te,
  _O as ne,
  cO as re,
  fO as a,
  frt as ie,
  gO as ae,
  hrt as oe,
  jDt as se,
  lO as ce,
  mO as le,
  oO as ue,
  sO as de,
  t3 as fe,
  vO as o,
  vzt as s,
  xMt as c,
  yzt as l,
} from "./app-shared-bbfeca5e5737.js";
import { DPn as u, TPn as pe, Ymr as me, ehr as d } from "./app-initial-5851df3f6cb1.js";
import { r as f, t as he } from "./email-133e9bdb45ab.js";
import { n as p, t as ge } from "./errors-ee8d30885a95.js";
function _e(e) {
  let n = (0, ve.c)(106),
    {
      operation: i,
      socialUser: a,
      initialEmail: ie,
      initialStep: se,
      initialError: fe,
      addEmailTitle: o,
      addEmailDescription: s,
      auth0ClientId: c,
      expectedIdentity: l,
      onClose: u,
      onSuccess: d,
      ensureRecentLoginOrReauth: f,
      startChangeEmailReauth: p,
    } = e,
    _e = ie === void 0 ? `` : ie,
    ye = se === void 0 ? `email` : se,
    [g, be] = (0, m.useState)(_e),
    [_, xe] = (0, m.useState)(ye),
    [v, Se] = (0, m.useState)(``),
    [y, b] = (0, m.useState)(fe ?? null),
    x = (0, m.useId)(),
    S;
  n[0] !== c || n[1] !== f || n[2] !== l || n[3] !== i || n[4] !== a || n[5] !== p
    ? ((S = async (e) => {
        let { email: t } = e;
        if (i === `change` && (await f(t))) return !1;
        try {
          i === `add`
            ? await me.safePost(`/accounts/add_email/begin`, {
                requestBody: { email: t, auth0_client_id: c },
                expectedIdentity: l,
              })
            : await me.safePost(`/accounts/change_email/begin`, {
                requestBody: { email: t, auth0_client_id: c, remove_social_subs: a === !0 || void 0 },
                expectedIdentity: l,
              });
        } catch (e) {
          let n = e;
          if (i === `change` && n instanceof oe && (n.status === 401 || n.errorCode === `reauth_required`))
            return (await p(t), !1);
          throw n;
        }
        return !0;
      }),
      (n[0] = c),
      (n[1] = f),
      (n[2] = l),
      (n[3] = i),
      (n[4] = a),
      (n[5] = p),
      (n[6] = S))
    : (S = n[6]);
  let Ce, C;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (e, t) => {
        e && (b(null), t.resend || (be(t.email), Se(``), xe(`otp`)));
      }),
      (C = (e, t) => {
        b(ge(e, t.resend ? `resend` : `begin`, t.email));
      }),
      (n[7] = Ce),
      (n[8] = C))
    : ((Ce = n[7]), (C = n[8]));
  let w;
  n[9] === S ? (w = n[10]) : ((w = { mutationFn: S, onSuccess: Ce, onError: C }), (n[9] = S), (n[10] = w));
  let T = ee(w),
    E;
  n[11] !== v || n[12] !== g || n[13] !== l || n[14] !== d || n[15] !== i || n[16] !== a
    ? ((E = async () => {
        (await me.safePost(i === `add` ? `/accounts/add_email/verify` : `/accounts/change_email/verify`, {
          requestBody: { email: g, code: v, remove_social_subs: (i === `change` && a === !0) || void 0 },
          expectedIdentity: l,
        }),
          await d(g));
      }),
      (n[11] = v),
      (n[12] = g),
      (n[13] = l),
      (n[14] = d),
      (n[15] = i),
      (n[16] = a),
      (n[17] = E))
    : (E = n[17]);
  let D;
  n[18] === g ? (D = n[19]) : ((D = (e) => b(ge(e, `verify`, g))), (n[18] = g), (n[19] = D));
  let O;
  n[20] !== E || n[21] !== D
    ? ((O = { mutationFn: E, onError: D }), (n[20] = E), (n[21] = D), (n[22] = O))
    : (O = n[22]);
  let k = ee(O),
    A = T.isPending || k.isPending,
    j;
  n[23] === u ? (j = n[24]) : ((j = (e) => !e && u()), (n[23] = u), (n[24] = j));
  let M;
  n[25] !== v || n[26] !== g || n[27] !== A || n[28] !== T || n[29] !== _ || n[30] !== k
    ? ((M = (e) => {
        if ((e.preventDefault(), A)) return;
        if ((b(null), _ === `otp`)) {
          /^[0-9]{6}$/.test(v) && k.mutate();
          return;
        }
        let t = g.trim();
        t === ``
          ? b(
              (0, h.jsx)(r, {
                id: `settings.chatGpt.email.error.emptyEmail`,
                defaultMessage: `Please enter a valid email address to continue`,
                description: `Error below the email entry field when it is empty.`,
              }),
            )
          : he.test(t)
            ? T.mutate({ email: t, resend: !1 })
            : b(
                (0, h.jsx)(r, {
                  id: `settings.chatGpt.email.error.invalidEmail`,
                  defaultMessage: `The email address "{email}" is not formatted correctly`,
                  description: `Error below the email entry field when the address is invalid. Email is the address the user entered.`,
                  values: { email: t },
                }),
              );
      }),
      (n[25] = v),
      (n[26] = g),
      (n[27] = A),
      (n[28] = T),
      (n[29] = _),
      (n[30] = k),
      (n[31] = M))
    : (M = n[31]);
  let N;
  n[32] === _
    ? (N = n[33])
    : ((N =
        _ === `otp`
          ? (0, h.jsx)(r, {
              id: `settings.chatGpt.email.verify.confirmEmailTitle`,
              defaultMessage: `Verify email`,
              description: `Title for the email verification-code dialog in Account settings.`,
            })
          : null),
      (n[32] = _),
      (n[33] = N));
  let P;
  n[34] !== o || n[35] !== i || n[36] !== _
    ? ((P =
        _ === `email` &&
        (i === `add`
          ? (o ??
            (0, h.jsx)(r, {
              id: `settings.chatGpt.email.add.title`,
              defaultMessage: `Add your email`,
              description: `Title for the dialog where a phone-only user adds their first email address.`,
            }))
          : (0, h.jsx)(r, {
              id: `settings.chatGpt.email.change.title`,
              defaultMessage: `Edit email`,
              description: `Title for the dialog where a user changes their account email address.`,
            }))),
      (n[34] = o),
      (n[35] = i),
      (n[36] = _),
      (n[37] = P))
    : (P = n[37]);
  let F;
  n[38] !== N || n[39] !== P
    ? ((F = (0, h.jsx)(ce, {
        children: (0, h.jsx)(re, { title: (0, h.jsxs)(ne, { className: `select-none`, children: [N, P] }) }),
      })),
      (n[38] = N),
      (n[39] = P),
      (n[40] = F))
    : (F = n[40]);
  let I;
  n[41] !== g || n[42] !== _
    ? ((I =
        _ === `otp`
          ? (0, h.jsx)(r, {
              id: `settings.chatGpt.email.verify.instruction`,
              defaultMessage: `Enter the 6-digit code we just sent to {email} to verify your email`,
              description: `Instructions for verifying an account email. Email is the destination address the user entered.`,
              values: { email: g },
            })
          : null),
      (n[41] = g),
      (n[42] = _),
      (n[43] = I))
    : (I = n[43]);
  let L;
  n[44] !== s || n[45] !== i || n[46] !== _
    ? ((L =
        _ === `email` &&
        (i === `add`
          ? (s ??
            (0, h.jsx)(r, {
              id: `settings.chatGpt.email.add.instruction`,
              defaultMessage: `Enter your email address. We’ll send a verification code to confirm it.`,
              description: `Instructions above the email input when a phone-only user adds their first email.`,
            }))
          : (0, h.jsx)(r, {
              id: `settings.chatGpt.email.change.instruction`,
              defaultMessage: `Enter your new email address. We’ll send a verification code to confirm the change.`,
              description: `Instructions above the destination email input when changing an account email.`,
            }))),
      (n[44] = s),
      (n[45] = i),
      (n[46] = _),
      (n[47] = L))
    : (L = n[47]);
  let R;
  n[48] !== I || n[49] !== L
    ? ((R = (0, h.jsxs)(ae, { className: `text-sm text-secondary select-text`, children: [I, L] })),
      (n[48] = I),
      (n[49] = L),
      (n[50] = R))
    : (R = n[50]);
  let z;
  n[51] !== i || n[52] !== _
    ? ((z =
        _ === `otp` && i === `change`
          ? (0, h.jsx)(te, {
              type: `warning`,
              content: (0, h.jsx)(r, {
                id: `settings.chatGpt.email.verify.logoutWarning`,
                defaultMessage: `Verifying this email will sign you out on all devices so we can finish updating your account. You'll need to sign back in afterward.`,
                description: `Warning before confirming an email change that verification signs the user out on all devices and requires them to sign back in.`,
              }),
            })
          : null),
      (n[51] = i),
      (n[52] = _),
      (n[53] = z))
    : (z = n[53]);
  let B;
  n[54] === _
    ? (B = n[55])
    : ((B = (0, h.jsx)(`span`, {
        className: `select-none`,
        children:
          _ === `otp`
            ? (0, h.jsx)(r, {
                id: `settings.chatGpt.email.verify.codeLabel`,
                defaultMessage: `Verification code`,
                description: `Accessible label for the six-digit email verification code input.`,
              })
            : (0, h.jsx)(r, {
                id: `settings.chatGpt.email.addressLabel`,
                defaultMessage: `Email address`,
                description: `Label for the destination account email address input.`,
              }),
      })),
      (n[54] = _),
      (n[55] = B));
  let V;
  n[56] !== v || n[57] !== g || n[58] !== y || n[59] !== x || n[60] !== A || n[61] !== _
    ? ((V =
        _ === `otp`
          ? (0, h.jsx)(
              pe,
              {
                name: `verification_code`,
                inputMode: `numeric`,
                autoComplete: `one-time-code`,
                maxLength: 6,
                autoFocus: !0,
                value: v,
                onChange: (e) => {
                  (Se(e.target.value.replace(/\D/g, ``).slice(0, 6)), b(null));
                },
                disabled: A,
                "aria-invalid": y != null,
                "aria-describedby": y == null ? void 0 : x,
              },
              `otp`,
            )
          : (0, h.jsx)(
              pe,
              {
                name: `email`,
                type: `email`,
                autoComplete: `email`,
                autoFocus: !0,
                value: g,
                onChange: (e) => {
                  (be(e.target.value), b(null));
                },
                disabled: A,
                "aria-invalid": y != null,
                "aria-describedby": y == null ? void 0 : x,
              },
              `email`,
            )),
      (n[56] = v),
      (n[57] = g),
      (n[58] = y),
      (n[59] = x),
      (n[60] = A),
      (n[61] = _),
      (n[62] = V))
    : (V = n[62]);
  let H;
  n[63] !== B || n[64] !== V
    ? ((H = (0, h.jsxs)(`label`, { className: `flex flex-col gap-2 text-sm`, children: [B, V] })),
      (n[63] = B),
      (n[64] = V),
      (n[65] = H))
    : (H = n[65]);
  let U;
  n[66] !== y || n[67] !== x
    ? ((U =
        y == null
          ? null
          : (0, h.jsx)(`div`, { id: x, role: `alert`, className: `text-sm text-danger`, children: y })),
      (n[66] = y),
      (n[67] = x),
      (n[68] = U))
    : (U = n[68]);
  let W;
  n[69] !== g || n[70] !== A || n[71] !== T || n[72] !== _
    ? ((W =
        _ === `otp`
          ? (0, h.jsxs)(`div`, {
              className: `flex items-center gap-2 text-sm select-none`,
              children: [
                (0, h.jsx)(r, {
                  id: `settings.chatGpt.email.verify.resendPrompt`,
                  defaultMessage: `Didn't get an email?`,
                  description: `Prompt beside the action to resend the email verification code.`,
                }),
                (0, h.jsx)(t, {
                  color: `ghost`,
                  size: `toolbar`,
                  type: `button`,
                  disabled: A,
                  loading: T.isPending,
                  onClick: () => T.mutate({ email: g, resend: !0 }),
                  children: (0, h.jsx)(r, {
                    id: `settings.chatGpt.email.verify.resend`,
                    defaultMessage: `Send again`,
                    description: `Button that sends another verification code to the same email address.`,
                  }),
                }),
              ],
            })
          : null),
      (n[69] = g),
      (n[70] = A),
      (n[71] = T),
      (n[72] = _),
      (n[73] = W))
    : (W = n[73]);
  let G;
  n[74] !== R || n[75] !== z || n[76] !== H || n[77] !== U || n[78] !== W
    ? ((G = (0, h.jsxs)(ce, { className: `gap-4`, spacing: `large`, children: [R, z, H, U, W] })),
      (n[74] = R),
      (n[75] = z),
      (n[76] = H),
      (n[77] = U),
      (n[78] = W),
      (n[79] = G))
    : (G = n[79]);
  let K;
  n[80] !== u || n[81] !== _
    ? ((K = () => {
        _ === `otp` ? (xe(`email`), Se(``), b(null)) : u();
      }),
      (n[80] = u),
      (n[81] = _),
      (n[82] = K))
    : (K = n[82]);
  let q;
  n[83] === _
    ? (q = n[84])
    : ((q =
        _ === `otp`
          ? (0, h.jsx)(r, {
              id: `settings.chatGpt.email.verify.back`,
              defaultMessage: `Back`,
              description: `Button that returns to email entry, keeping the previously entered address.`,
            })
          : (0, h.jsx)(r, {
              id: `settings.chatGpt.email.cancel`,
              defaultMessage: `Cancel`,
              description: `Button that closes email entry without changing the account.`,
            })),
      (n[83] = _),
      (n[84] = q));
  let J;
  n[85] !== A || n[86] !== K || n[87] !== q
    ? ((J = (0, h.jsx)(t, { color: `secondary`, type: `button`, disabled: A, onClick: K, children: q })),
      (n[85] = A),
      (n[86] = K),
      (n[87] = q),
      (n[88] = J))
    : (J = n[88]);
  let we = _ === `otp` ? k.isPending : T.isPending,
    Te = A || (_ === `otp` && v.length !== 6),
    Y;
  n[89] === _
    ? (Y = n[90])
    : ((Y =
        _ === `otp`
          ? (0, h.jsx)(r, {
              id: `settings.chatGpt.email.verify.submit`,
              defaultMessage: `Verify`,
              description: `Button that submits the six-digit email verification code.`,
            })
          : (0, h.jsx)(r, {
              id: `settings.chatGpt.email.send`,
              defaultMessage: `Send verification email`,
              description: `Button that sends a verification code to the entered account email address.`,
            })),
      (n[89] = _),
      (n[90] = Y));
  let X;
  n[91] !== we || n[92] !== Te || n[93] !== Y
    ? ((X = (0, h.jsx)(t, { type: `submit`, color: `primary`, loading: we, disabled: Te, children: Y })),
      (n[91] = we),
      (n[92] = Te),
      (n[93] = Y),
      (n[94] = X))
    : (X = n[94]);
  let Z;
  n[95] !== J || n[96] !== X
    ? ((Z = (0, h.jsx)(ce, { spacing: `large`, children: (0, h.jsxs)(de, { children: [J, X] }) })),
      (n[95] = J),
      (n[96] = X),
      (n[97] = Z))
    : (Z = n[97]);
  let Q;
  n[98] !== M || n[99] !== F || n[100] !== G || n[101] !== Z
    ? ((Q = (0, h.jsxs)(ue, { as: `form`, noValidate: !0, onSubmit: M, children: [F, G, Z] })),
      (n[98] = M),
      (n[99] = F),
      (n[100] = G),
      (n[101] = Z),
      (n[102] = Q))
    : (Q = n[102]);
  let $;
  return (
    n[103] !== j || n[104] !== Q
      ? (($ = (0, h.jsx)(le, { open: !0, onOpenChange: j, children: Q })),
        (n[103] = j),
        (n[104] = Q),
        (n[105] = $))
      : ($ = n[105]),
    $
  );
}
var ve, m, h;
function ye() {
  return (ye = e(() => {
    ((ve = s()), f(), i(), (m = l()), se(), d(), n(), fe(), o(), a(), u(), ie(), p(), (h = c()));
  }))();
}
export { ye as n, _e as t };
//# sourceMappingURL=dialog-a817897deff3.js.map
