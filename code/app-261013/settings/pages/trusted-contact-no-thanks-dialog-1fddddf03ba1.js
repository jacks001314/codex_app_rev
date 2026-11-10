import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  HT as r,
  IDt as i,
  Ixt as a,
  Pxt as o,
  VDt as s,
  VT as c,
  Vxt as l,
  _O as ee,
  fO as u,
  hot as te,
  jDt as d,
  lO as f,
  lot as p,
  mO as m,
  oO as h,
  rst as g,
  sO as ne,
  spt as re,
  t3 as _,
  vO as v,
  vzt as y,
  wot as b,
  xMt as x,
  yzt as S,
} from "./app-shared-bbfeca5e5737.js";
import { Gg as C, Kg as w, NDr as T, Ymr as E, ehr as D, jDr as O } from "./app-initial-5851df3f6cb1.js";
function k(e) {
  let t = (0, M.c)(2),
    n = l(C);
  if (!e.open || n.status !== `allowed`) return null;
  let r;
  return (t[0] === e ? (r = t[1]) : ((r = (0, P.jsx)(A, { ...e })), (t[0] = e), (t[1] = r)), r);
}
function A(e) {
  let r = (0, M.c)(49),
    { open: o, onClose: u, onDone: d, onOpenSettings: p, dismissOnDoneWithoutOptOut: g } = e,
    _ = g !== void 0 && g,
    v = a(n),
    y = s(),
    b = (0, N.useId)(),
    [x, S] = (0, N.useState)(!1),
    [w, T] = (0, N.useState)(!1),
    D = l(C),
    [k] = (0, N.useState)(D),
    A;
  r[0] !== k.accountId || r[1] !== k.status || r[2] !== k.userId || r[3] !== v
    ? ((A = function () {
        let e = v.get(C);
        return (
          k.status === `allowed` &&
          e.status === `allowed` &&
          k.userId === e.userId &&
          k.accountId === e.accountId
        );
      }),
      (r[0] = k.accountId),
      (r[1] = k.status),
      (r[2] = k.userId),
      (r[3] = v),
      (r[4] = A))
    : (A = r[4]);
  let F = A,
    I;
  r[5] === u
    ? (I = r[6])
    : ((I = function () {
        (S(!1), u());
      }),
      (r[5] = u),
      (r[6] = I));
  let L = I,
    R;
  r[7] !== L ||
  r[8] !== _ ||
  r[9] !== x ||
  r[10] !== y ||
  r[11] !== F ||
  r[12] !== d ||
  r[13] !== k ||
  r[14] !== w ||
  r[15] !== v
    ? ((R = async function () {
        if (w || !F()) return;
        if (!x) {
          _ ? d() : L();
          return;
        }
        if (k.status !== `allowed`) return;
        let { accountId: e } = k,
          t = v.query.snapshot(O);
        T(!0);
        try {
          if ((await t.cancel(), !F())) {
            T(!1);
            return;
          }
          let n = e == null ? void 0 : { "ChatGPT-Account-ID": e, [re]: e };
          if (
            (await E.safePatch(`/settings/account_user_setting`, {
              additionalHeaders: n,
              parameters: { query: { feature: `trusted_contacts_opted_out_at`, value: !0 } },
            }),
            !F())
          ) {
            (t.invalidate(), T(!1));
            return;
          }
          (t.setData(j), t.invalidate(), S(!1), d());
        } catch {
          if (!F()) {
            T(!1);
            return;
          }
          v.get(te).danger(
            y.formatMessage({
              id: `codex.chatgpt.trustedContactDisclaimer.optOutError`,
              defaultMessage: `Could not update trusted contact settings`,
              description: `Error toast shown when saving the Don't ask me again choice for trusted-contact prompts fails. The confirmation remains open so the user can retry.`,
            }),
            { errorAnalytics: { toastId: `codex.chatgpt.trustedContactDisclaimer.optOutError` } },
          );
        }
        T(!1);
      }),
      (r[7] = L),
      (r[8] = _),
      (r[9] = x),
      (r[10] = y),
      (r[11] = F),
      (r[12] = d),
      (r[13] = k),
      (r[14] = w),
      (r[15] = v),
      (r[16] = R))
    : (R = r[16]);
  let z = R,
    B =
      o &&
      k.status === `allowed` &&
      D.status === `allowed` &&
      D.userId === k.userId &&
      D.accountId === k.accountId,
    V;
  r[17] === L
    ? (V = r[18])
    : ((V = (e) => {
        e || L();
      }),
      (r[17] = L),
      (r[18] = V));
  let H;
  r[19] === z
    ? (H = r[20])
    : ((H = (e) => {
        (e.preventDefault(), z());
      }),
      (r[19] = z),
      (r[20] = H));
  let U;
  r[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, P.jsx)(ee, {
        children: (0, P.jsx)(i, {
          id: `message.trustedContactNoThanksModal.title`,
          defaultMessage: `Thanks for letting us know`,
          description: `Title of the modal shown after a user declines the trusted-contact disclaimer.`,
        }),
      })),
      (r[21] = U))
    : (U = r[21]);
  let W;
  r[22] !== L || r[23] !== p
    ? ((W = (0, P.jsx)(`p`, {
        children: (0, P.jsx)(i, {
          id: `message.trustedContactNoThanksModal.body`,
          defaultMessage: `If you change your mind, you can add a trusted contact from your <settingsLink>settings</settingsLink>.`,
          description: `Body copy in the decline modal. The settingsLink opens Trusted contact settings.`,
          values: {
            settingsLink: (e) =>
              (0, P.jsx)(`button`, {
                className: `cursor-interaction underline`,
                type: `button`,
                onClick: () => {
                  (L(), p());
                },
                children: e,
              }),
          },
        }),
      })),
      (r[22] = L),
      (r[23] = p),
      (r[24] = W))
    : (W = r[24]);
  let G;
  r[25] !== b || r[26] !== x || r[27] !== w
    ? ((G = (0, P.jsx)(c, { id: b, checked: x, disabled: w, onCheckedChange: S })),
      (r[25] = b),
      (r[26] = x),
      (r[27] = w),
      (r[28] = G))
    : (G = r[28]);
  let K;
  r[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, P.jsx)(i, {
        id: `message.trustedContactNoThanksModal.checkboxLabel`,
        defaultMessage: `Don't ask me again`,
        description: `Checkbox label in the trusted-contact decline modal. When checked, future trusted-contact prompts are disabled.`,
      })),
      (r[29] = K))
    : (K = r[29]);
  let q;
  r[30] === b
    ? (q = r[31])
    : ((q = (0, P.jsx)(`label`, { className: `select-none`, htmlFor: b, children: K })),
      (r[30] = b),
      (r[31] = q));
  let J;
  r[32] !== G || r[33] !== q
    ? ((J = (0, P.jsxs)(`div`, { className: `relative flex items-center gap-3`, children: [G, q] })),
      (r[32] = G),
      (r[33] = q),
      (r[34] = J))
    : (J = r[34]);
  let Y;
  r[35] !== J || r[36] !== W
    ? ((Y = (0, P.jsxs)(f, { children: [U, W, J] })), (r[35] = J), (r[36] = W), (r[37] = Y))
    : (Y = r[37]);
  let X;
  r[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, P.jsx)(i, {
        id: `message.trustedContactNoThanksModal.done`,
        defaultMessage: `Done`,
        description: `Primary action button in the trusted-contact decline modal. Confirms the dismissal flow.`,
      })),
      (r[38] = X))
    : (X = r[38]);
  let Z;
  r[39] === w
    ? (Z = r[40])
    : ((Z = (0, P.jsx)(f, {
        children: (0, P.jsx)(ne, {
          children: (0, P.jsx)(t, { type: `submit`, radius: `full`, loading: w, children: X }),
        }),
      })),
      (r[39] = w),
      (r[40] = Z));
  let Q;
  r[41] !== Y || r[42] !== Z || r[43] !== H
    ? ((Q = (0, P.jsxs)(h, { as: `form`, onSubmit: H, children: [Y, Z] })),
      (r[41] = Y),
      (r[42] = Z),
      (r[43] = H),
      (r[44] = Q))
    : (Q = r[44]);
  let $;
  return (
    r[45] !== Q || r[46] !== B || r[47] !== V
      ? (($ = (0, P.jsx)(m, { open: B, size: `wide`, onOpenChange: V, children: Q })),
        (r[45] = Q),
        (r[46] = B),
        (r[47] = V),
        (r[48] = $))
      : ($ = r[48]),
    $
  );
}
function j(e) {
  return e == null ? e : { ...e, trustedContactsOptedOutAt: !0 };
}
var M, N, P;
function F() {
  return (F = e(() => {
    ((M = y()), o(), g(), (N = S()), d(), D(), T(), _(), r(), v(), u(), p(), b(), w(), (P = x()));
  }))();
}
export { F as n, k as t };
//# sourceMappingURL=trusted-contact-no-thanks-dialog-1fddddf03ba1.js.map
