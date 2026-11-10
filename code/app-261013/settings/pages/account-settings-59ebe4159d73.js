const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-d667d665b45d.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./dialog-a817897deff3.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./email-133e9bdb45ab.js",
      "./errors-ee8d30885a95.js",
      "./dialog-2bdf85149f6f.js",
      "./username-dialog-4d83358ae975.js",
      "./src-c65a930b3c0e.js",
      "./dialog-bd1854abad10.js",
      "./pin-analytics-417acc826387.js",
      "./site-preview-b226ffd1d9b7.js",
      "./telemetry-754c57f9b0cd.js",
      "./src-693e88997826.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $It as n,
  ADt as r,
  Ait as i,
  B4 as a,
  BLt as o,
  Cot as s,
  Cxt as c,
  DIt as l,
  EPt as u,
  Ext as d,
  Fat as f,
  IDt as p,
  Iot as m,
  Ixt as ee,
  JC as h,
  Lot as g,
  Mz as _,
  NV as v,
  Nxt as y,
  Nz as b,
  Pat as te,
  Pxt as x,
  QC as S,
  Rot as C,
  SV as w,
  TDt as T,
  TJ as E,
  TLt as D,
  Trt as O,
  VDt as ne,
  Xot as re,
  Yot as k,
  _It as A,
  _O as ie,
  _xt as j,
  cO as ae,
  cf as M,
  e3 as N,
  fLt as P,
  fO as F,
  fPt as oe,
  frt as se,
  gO as ce,
  hot as le,
  hrt as ue,
  iw as I,
  ixt as L,
  jDt as R,
  jit as z,
  lO as de,
  lot as B,
  mO as fe,
  nst as pe,
  oO as me,
  pLt as V,
  pPt as he,
  qC as ge,
  sO as _e,
  sf as ve,
  t3 as H,
  tst as U,
  tw as ye,
  vO as W,
  vzt as G,
  wot as K,
  wxt as be,
  xMt as q,
  xrt as xe,
  yzt as J,
  z4 as Se,
  zU as Ce,
  zot as we,
  zxt as Te,
} from "./app-shared-bbfeca5e5737.js";
import {
  A0 as Ee,
  A8t as De,
  ANr as Oe,
  CGt as ke,
  CN as Ae,
  CPt as je,
  DPn as Me,
  Ek as Ne,
  Fin as Pe,
  Hin as Fe,
  IPt as Ie,
  JPn as Le,
  MRt as Re,
  NNr as ze,
  NRt as Be,
  O0 as Ve,
  OGt as He,
  OPn as Ue,
  SN as We,
  SYn as Ge,
  TNr as Ke,
  TPn as qe,
  Tk as Je,
  XDr as Ye,
  XK as Xe,
  XNr as Ze,
  XPn as Qe,
  YK as $e,
  Ymr as et,
  ZK as tt,
  ZNr as nt,
  ZPn as rt,
  _F as it,
  _Nr as at,
  eDr as ot,
  eF as st,
  eOr as ct,
  ehr as lt,
  fur as ut,
  hF as dt,
  hp as ft,
  hur as pt,
  hut as mt,
  iPr as ht,
  j8t as gt,
  kNr as _t,
  kPn as vt,
  mp as yt,
  nDr as bt,
  pur as xt,
  put as St,
  sPr as Ct,
  tF as wt,
  xPn as Tt,
  yPn as Et,
  yYn as Dt,
} from "./app-initial-5851df3f6cb1.js";
import { n as Ot, r as kt, t as At } from "./session-594d75fbcc25.js";
import { n as jt, t as Mt } from "./settings-loading-row-bf72bf2df25d.js";
import { n as Nt, t as Pt } from "./settings-row-disclosure-81330dc4d2f4.js";
import { n as Ft, r as It } from "./recommendation-telemetry-aea6128a1440.js";
import { n as Lt, r as Rt, t as zt, u as Bt } from "./settings-route-state-b6ca0f4e071e.js";
import { f as Vt, n as Ht, t as Ut } from "./chatgpt_account-5e25797795e9.js";
import { r as Wt, t as Gt } from "./age-settings-5123a71e7f48.js";
import { i as Kt, n as qt, r as Jt, t as Yt } from "./complete-add.browser-7fce96e2170f.js";
import { n as Xt, t as Zt } from "./errors-ee8d30885a95.js";
async function Qt() {
  try {
    let e = await tt($e),
      t = await e.token($t),
      n = await e.timing?.();
    return { [Dt.sentinelToken]: t, [Dt.timing]: n ?? en };
  } catch {
    try {
      let e = window.SentinelSDK?.requirementsToken?.($t);
      return typeof e != `string` || !e
        ? {}
        : { [Dt.sentinelToken]: JSON.stringify({ e: `k9d4s6v3b2`, c: e }), [Dt.timing]: en };
    } catch {
      return {};
    }
  }
}
var $t, en;
function tn() {
  return (tn = e(() => {
    (Ge(), Xe(), ($t = `chatgpt_account_deactivate`), (en = `[1,null]`));
  }))();
}
function nn(e) {
  let n = (0, sn.c)(79),
    { accessToken: r, contactPoint: i, contactPointKind: a, onClose: o, onDeleted: c, onRefreshLogin: l } = e,
    u = ee(s),
    d = ne(),
    f = (0, cn.useRef)(!0),
    m = (0, cn.useRef)(null),
    [h, _] = (0, cn.useState)(``),
    [v, y] = (0, cn.useState)(``),
    [b, te] = (0, cn.useState)(!1),
    [x, S] = (0, cn.useState)(!1),
    C,
    w;
  (n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => (
        (f.current = !0),
        () => {
          ((f.current = !1), m.current?.abort());
        }
      )),
      (w = []),
      (n[0] = C),
      (n[1] = w))
    : ((C = n[0]), (w = n[1])),
    (0, cn.useLayoutEffect)(C, w));
  let T;
  n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((T = { enabled: !0 }), (n[2] = T)) : (T = n[2]);
  let { data: E, isLoading: D } = Ie(T),
    O;
  n[3] === E ? (O = n[4]) : ((O = ke(E)), (n[3] = E), (n[4] = O));
  let re = O,
    k;
  n[5] === d
    ? (k = n[6])
    : ((k = d.formatMessage({
        id: `settings.chatGpt.account.deletion.confirmation.keyword`,
        defaultMessage: `DELETE`,
        description: `Exact confirmation keyword in the ChatGPT account-deletion dialog. The user must type this uppercase word before the destructive action becomes available. Short keyword with no placeholders.`,
      })),
      (n[5] = d),
      (n[6] = k));
  let A = k,
    j;
  n[7] !== r || n[8] !== b
    ? ((j = !b && r != null && an(r)), (n[7] = r), (n[8] = b), (n[9] = j))
    : (j = n[9]);
  let M = j,
    N;
  n[10] !== i || n[11] !== h || n[12] !== v || n[13] !== A || n[14] !== D || n[15] !== M
    ? ((N = M && !D && v.trim() === A && (i == null || h.toLowerCase() === i.toLowerCase())),
      (n[10] = i),
      (n[11] = h),
      (n[12] = v),
      (n[13] = A),
      (n[14] = D),
      (n[15] = M),
      (n[16] = N))
    : (N = n[16]);
  let P = N,
    F;
  n[17] === o
    ? (F = n[18])
    : ((F = () => {
        ((f.current = !1), m.current?.abort(), o());
      }),
      (n[17] = o),
      (n[18] = F));
  let oe = F,
    se;
  n[19] !== d || n[20] !== l || n[21] !== u
    ? ((se = async () => {
        if (!f.current) return;
        m.current?.abort();
        let e = new AbortController();
        ((m.current = e), S(!0));
        try {
          if (await l(e.signal)) return;
        } catch {}
        f.current &&
          !e.signal.aborted &&
          m.current === e &&
          ((m.current = null),
          S(!1),
          u
            .get(le)
            .warning(
              d.formatMessage({
                id: `settings.chatGpt.account.deletion.toast.error.refresh_login`,
                defaultMessage: `Couldn't refresh your login. Please try again`,
                description: `Warning toast when a user tries to refresh their login from the ChatGPT account-deletion dialog but reauthentication could not start. The account was not deleted, and the user can retry the Refresh login button. Two concise sentences with no placeholders.`,
              }),
            ));
      }),
      (n[19] = d),
      (n[20] = l),
      (n[21] = u),
      (n[22] = se))
    : (se = n[22]);
  let I = se,
    L;
  n[23] !== c || n[24] !== u
    ? ((L = async () => {
        (u.get(ct).logProductEvent(Ht, { action: Ut.CHATGPT_ACCOUNT_ACTION_DEACTIVATION_REQUESTED }),
          await et.safePost(`/accounts/deactivate`, { additionalHeaders: await Qt() }),
          await c());
      }),
      (n[23] = c),
      (n[24] = u),
      (n[25] = L))
    : (L = n[25]);
  let R;
  n[26] !== d || n[27] !== I || n[28] !== u
    ? ((R = async (e) => {
        if (f.current) {
          if (
            e instanceof ue &&
            ((e.status === 401 && e.errorCode === `reauth_required`) ||
              (e.status === 403 &&
                e.diagnosticError instanceof xe &&
                e.diagnosticError.detail === `Stale login not recent enough for deactivation`))
          ) {
            (te(!0), _(``), y(``), await I());
            return;
          }
          u.get(le).warning(on(e, d));
        }
      }),
      (n[26] = d),
      (n[27] = I),
      (n[28] = u),
      (n[29] = R))
    : (R = n[29]);
  let z;
  n[30] !== L || n[31] !== R
    ? ((z = { mutationFn: L, onError: R }), (n[30] = L), (n[31] = R), (n[32] = z))
    : (z = n[32]);
  let de = g(z),
    B;
  n[33] === oe ? (B = n[34]) : ((B = (e) => !e && oe()), (n[33] = oe), (n[34] = B));
  let pe;
  n[35] !== r || n[36] !== P || n[37] !== de
    ? ((pe = (e) => {
        if ((e.preventDefault(), P && !de.isPending)) {
          if (r == null || !an(r)) {
            te(!0);
            return;
          }
          de.mutate();
        }
      }),
      (n[35] = r),
      (n[36] = P),
      (n[37] = de),
      (n[38] = pe))
    : (pe = n[38]);
  let V;
  n[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Y.jsx)(ae, {
        title: (0, Y.jsx)(ie, {
          children: (0, Y.jsx)(p, {
            id: `settings.chatGpt.account.deletion.confirmation.title`,
            defaultMessage: `Delete account—are you sure?`,
            description: `Title of the final confirmation dialog opened from ChatGPT Account settings before a personal account is permanently deleted. Urgent destructive-action heading with no placeholders.`,
          }),
        }),
      })),
      (n[39] = V))
    : (V = n[39]);
  let he, ge, ve, H;
  n[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, Y.jsx)(`li`, {
        children: (0, Y.jsx)(p, {
          id: `settings.chatGpt.account.deletion.confirmation.warning.permanent`,
          defaultMessage: `Deleting your account is permanent and cannot be undone`,
          description: `Warning in the ChatGPT account-deletion confirmation dialog. It tells a personal-account user that deletion is irreversible. One concise list item with no placeholders.`,
        }),
      })),
      (ge = (0, Y.jsx)(`li`, {
        children: (0, Y.jsx)(p, {
          id: `settings.chatGpt.account.deletion.confirmation.warning.services`,
          defaultMessage: `You will lose access to OpenAI services, including ChatGPT and the API`,
          description: `Warning in the ChatGPT account-deletion confirmation dialog. It tells a personal-account user that deleting the account ends access across OpenAI services, not only the current app. One concise list item with no placeholders.`,
        }),
      })),
      (ve = (0, Y.jsx)(`li`, {
        children: (0, Y.jsx)(p, {
          id: `settings.chatGpt.account.deletion.confirmation.warning.reuse`,
          defaultMessage: `You cannot create a new account using the same email address`,
          description: `Warning in the ChatGPT account-deletion confirmation dialog. It tells a personal-account user that the same email address cannot be reused for a new account. One concise list item with no placeholders.`,
        }),
      })),
      (H = (0, Y.jsx)(`li`, {
        children: (0, Y.jsx)(p, {
          id: `settings.chatGpt.account.deletion.confirmation.warning.retention`,
          defaultMessage: `Your data will be deleted within 30 days, except for limited data we may keep longer where required or permitted by law`,
          description: `Warning in the ChatGPT account-deletion confirmation dialog. It explains the normal data-deletion period and the narrow legal-retention exception. One concise list item with no placeholders.`,
        }),
      })),
      (n[40] = he),
      (n[41] = ge),
      (n[42] = ve),
      (n[43] = H))
    : ((he = n[40]), (ge = n[41]), (ve = n[42]), (H = n[43]));
  let U;
  n[44] === re
    ? (U = n[45])
    : ((U =
        re === `ios`
          ? (0, Y.jsx)(`li`, {
              children: (0, Y.jsx)(p, {
                id: `settings.chatGpt.account.deletion.confirmation.warning.subscription.ios`,
                defaultMessage: `You will need to cancel your in-app purchase subscription in the Apple App Store. We cannot cancel your subscription for you.`,
                description: `Warning in the ChatGPT account-deletion confirmation dialog for a user whose active subscription was purchased through an Apple app. It explains that deleting the account does not cancel App Store billing and that the user must cancel the subscription separately. Two concise sentences with no placeholders.`,
              }),
            })
          : null),
      (n[44] = re),
      (n[45] = U));
  let ye;
  n[46] === re
    ? (ye = n[47])
    : ((ye =
        re === `android`
          ? (0, Y.jsx)(`li`, {
              children: (0, Y.jsx)(p, {
                id: `settings.chatGpt.account.deletion.confirmation.warning.subscription.android`,
                defaultMessage: `You will need to cancel your in-app purchase subscription in the Google Play Store. We cannot cancel your subscription for you.`,
                description: `Warning in the ChatGPT account-deletion confirmation dialog for a user whose active subscription was purchased through the Google Play Store. It explains that deleting the account does not cancel Google Play billing and that the user must cancel the subscription separately. Two concise sentences with no placeholders.`,
              }),
            })
          : null),
      (n[46] = re),
      (n[47] = ye));
  let W;
  n[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, Y.jsx)(`li`, {
        children: (0, Y.jsx)(p, {
          id: `settings.chatGpt.account.deletion.confirmation.help`,
          defaultMessage: `Read our <article>help center article</article> for more information`,
          description: `Help link in the ChatGPT account-deletion confirmation dialog. The article tag wraps the linked words that open OpenAI's account-deletion help article in the system browser. One concise sentence.`,
          values: { article: rn },
        }),
      })),
      (n[48] = W))
    : (W = n[48]);
  let G;
  n[49] !== U || n[50] !== ye
    ? ((G = (0, Y.jsx)(ce, {
        asChild: !0,
        children: (0, Y.jsxs)(`ul`, {
          className: `flex list-disc flex-col gap-1 ps-5 text-sm text-secondary select-text`,
          children: [he, ge, ve, H, U, ye, W],
        }),
      })),
      (n[49] = U),
      (n[50] = ye),
      (n[51] = G))
    : (G = n[51]);
  let K;
  n[52] !== i || n[53] !== h || n[54] !== a || n[55] !== v || n[56] !== A || n[57] !== M
    ? ((K = M
        ? (0, Y.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [
              i == null
                ? null
                : (0, Y.jsxs)(`label`, {
                    className: `flex flex-col gap-1 text-sm font-medium`,
                    children: [
                      a === `email`
                        ? (0, Y.jsx)(p, {
                            id: `settings.chatGpt.account.deletion.confirmation.contact.email.label`,
                            defaultMessage: `Please type your account email`,
                            description: `Label above the email confirmation field in the ChatGPT account-deletion dialog. The user must enter the current personal account's email address. Short form label with no placeholders.`,
                          })
                        : (0, Y.jsx)(p, {
                            id: `settings.chatGpt.account.deletion.confirmation.contact.phone.label`,
                            defaultMessage: `Please type your account phone number`,
                            description: `Label above the phone-number confirmation field in the ChatGPT account-deletion dialog. It appears for a personal account without an email address, and the user must enter the current account's phone number. Short form label with no placeholders.`,
                          }),
                      (0, Y.jsx)(qe, {
                        autoComplete: `off`,
                        name: `account-contact-point`,
                        placeholder: i,
                        value: h,
                        onChange: (e) => _(e.currentTarget.value),
                      }),
                    ],
                  }),
              (0, Y.jsxs)(`label`, {
                className: `flex flex-col gap-1 text-sm font-medium`,
                children: [
                  (0, Y.jsx)(p, {
                    id: `settings.chatGpt.account.deletion.confirmation.keyword.label`,
                    defaultMessage: `To proceed, type "{keyword}" below`,
                    description: `Label above the keyword confirmation field in the ChatGPT account-deletion dialog. Placeholder {keyword} is the localized uppercase confirmation keyword the user must type exactly. Short form label.`,
                    values: { keyword: A },
                  }),
                  (0, Y.jsx)(qe, {
                    autoComplete: `off`,
                    name: `delete-confirmation`,
                    value: v,
                    onChange: (e) => y(e.currentTarget.value),
                  }),
                ],
              }),
            ],
          })
        : (0, Y.jsx)(`p`, {
            className: `text-sm text-secondary`,
            children: (0, Y.jsx)(p, {
              id: `settings.chatGpt.account.deletion.confirmation.login_expired.description`,
              defaultMessage: `You may only delete your account if you logged in within the last 10 minutes. Refresh your login, then return here to continue`,
              description: `Body text in the ChatGPT account-deletion confirmation dialog when the user's login is older than 10 minutes. It explains why confirmation fields are hidden and tells the user to authenticate again. Urgent but reassuring text with no placeholders.`,
            }),
          })),
      (n[52] = i),
      (n[53] = h),
      (n[54] = a),
      (n[55] = v),
      (n[56] = A),
      (n[57] = M),
      (n[58] = K))
    : (K = n[58]);
  let be;
  n[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, Y.jsx)(p, {
        id: `settings.chatGpt.account.deletion.confirmation.button.cancel`,
        defaultMessage: `Cancel`,
        description: `Secondary button in the ChatGPT account-deletion confirmation dialog. It closes the dialog without changing or deleting the account. Short button label with no placeholders.`,
      })),
      (n[59] = be))
    : (be = n[59]);
  let q;
  n[60] === oe
    ? (q = n[61])
    : ((q = (0, Y.jsx)(t, { color: `secondary`, type: `button`, onClick: oe, children: be })),
      (n[60] = oe),
      (n[61] = q));
  let J;
  n[62] !== P || n[63] !== de || n[64] !== M || n[65] !== I || n[66] !== x
    ? ((J = M
        ? (0, Y.jsx)(t, {
            color: P ? `danger` : `secondary`,
            disabled: !P || de.isPending,
            loading: de.isPending,
            type: `submit`,
            children: P
              ? (0, Y.jsx)(p, {
                  id: `settings.chatGpt.account.deletion.confirmation.button.confirm`,
                  defaultMessage: `Permanently delete my account`,
                  description: `Final destructive button in the ChatGPT account-deletion confirmation dialog. It becomes available only after the user enters the required account identifier and confirmation keyword. Concise button label with no placeholders.`,
                })
              : (0, Y.jsx)(p, {
                  id: `settings.chatGpt.account.deletion.confirmation.button.locked`,
                  defaultMessage: `Locked`,
                  description: `Disabled final-action button in the ChatGPT account-deletion confirmation dialog. It indicates that the required account identifier and confirmation keyword have not yet been entered correctly. Very short button label with no placeholders.`,
                }),
          })
        : (0, Y.jsx)(t, {
            color: `primary`,
            disabled: x,
            loading: x,
            type: `button`,
            onClick: () => {
              I();
            },
            children: (0, Y.jsx)(p, {
              id: `settings.chatGpt.account.deletion.confirmation.button.refresh_login`,
              defaultMessage: `Refresh login`,
              description: `Primary button in the ChatGPT account-deletion confirmation dialog when the current login is older than 10 minutes. In a browser it starts a fresh authentication challenge; in a native app it signs the user out so they can sign in again before deleting the account. Short button label with no placeholders.`,
            }),
          })),
      (n[62] = P),
      (n[63] = de),
      (n[64] = M),
      (n[65] = I),
      (n[66] = x),
      (n[67] = J))
    : (J = n[67]);
  let Se;
  n[68] !== q || n[69] !== J
    ? ((Se = (0, Y.jsxs)(_e, { children: [q, J] })), (n[68] = q), (n[69] = J), (n[70] = Se))
    : (Se = n[70]);
  let Ce;
  n[71] !== pe || n[72] !== G || n[73] !== K || n[74] !== Se
    ? ((Ce = (0, Y.jsxs)(me, { as: `form`, onSubmit: pe, children: [V, G, K, Se] })),
      (n[71] = pe),
      (n[72] = G),
      (n[73] = K),
      (n[74] = Se),
      (n[75] = Ce))
    : (Ce = n[75]);
  let we;
  return (
    n[76] !== B || n[77] !== Ce
      ? ((we = (0, Y.jsx)(fe, { open: !0, onOpenChange: B, children: Ce })),
        (n[76] = B),
        (n[77] = Ce),
        (n[78] = we))
      : (we = n[78]),
    we
  );
}
function rn(e) {
  return (0, Y.jsx)(
    Et,
    {
      appearance: `secondary`,
      href: `https://help.openai.com/en/articles/6378407-how-to-delete-your-account`,
      initiator: `open_in_browser_bridge`,
      openTarget: `external-browser`,
      children: e,
    },
    `article`,
  );
}
function an(e, t = Date.now()) {
  let n = ze(e)?.issuedAt;
  return n == null || t - n * 1e3 < ln;
}
function on(e, t) {
  if (e instanceof ue && e.status === 403 && e.errorCode === dn)
    return t.formatMessage({
      id: `settings.chatGpt.account.deletion.toast.error.scim_managed`,
      defaultMessage: `Your account is managed by your organization. Contact your IT team to delete it`,
      description: `Warning toast after a SCIM-managed user tries to delete their ChatGPT account. It explains that organization-managed accounts must be deleted with help from the user's IT team. Concise error with no placeholders.`,
    });
  if (e instanceof ue && e.status === 403 && e.errorCode === un) {
    try {
      let n = fn.safeParse(JSON.parse(e.message)),
        r = n.success ? n.data.detail?.workspace_name : void 0;
      if (r != null)
        return t.formatMessage(
          {
            id: `settings.chatGpt.account.deletion.toast.error.business_owner.with_workspace_name`,
            defaultMessage: `To delete your account, add another owner to your ChatGPT Business workspace "{workspaceName}"`,
            description: `Warning toast after the only owner of a billed ChatGPT Business workspace tries to delete their personal account. Placeholder {workspaceName} is the display name of the first workspace preventing account deletion. Concise error that identifies the blocking workspace.`,
          },
          { workspaceName: r },
        );
    } catch {}
    return t.formatMessage({
      id: `settings.chatGpt.account.deletion.toast.error.business_owner`,
      defaultMessage: `To delete your account, add another owner to your ChatGPT Business workspace`,
      description: `Warning toast after the only owner of a billed ChatGPT Business workspace tries to delete their personal account. It tells the user to assign another workspace owner first. Concise error with no placeholders.`,
    });
  }
  return t.formatMessage({
    id: `settings.chatGpt.account.deletion.toast.error.generic`,
    defaultMessage: `Failed to delete account. Please try again later`,
    description: `Generic warning toast when the ChatGPT account-deletion request fails for an unrecognized reason. It tells the personal-account user that no deletion was completed and they can retry later. Concise error with no placeholders.`,
  });
}
var sn, cn, Y, ln, un, dn, fn;
function pn() {
  return (pn = e(() => {
    ((sn = G()),
      Vt(),
      m(),
      x(),
      (cn = J()),
      R(),
      u(),
      Ke(),
      tn(),
      lt(),
      O(),
      H(),
      W(),
      F(),
      Tt(),
      Me(),
      B(),
      He(),
      je(),
      Ye(),
      K(),
      se(),
      (Y = q()),
      (ln = 6e5),
      (un = `business_workspace_owner_account_deletion_forbidden`),
      (dn = `scim_managed_account_deletion_forbidden`),
      (fn = V({ detail: V({ workspace_name: D().min(1).optional() }).optional() })));
  }))();
}
async function mn({ userId: e, accountId: t, signal: n }) {
  try {
    let r = await _t();
    if (n.aborted) return !1;
    let i = new URL(window.location.href),
      a = i.searchParams.get(_n);
    if (
      (a != null && (i.searchParams.delete(_n), window.history.replaceState(window.history.state, ``, i)),
      r?.userId == null || r.accountId == null)
    )
      return (hn(), !1);
    let o = window.sessionStorage.getItem(gn);
    if (o == null) return !1;
    window.sessionStorage.removeItem(gn);
    let s = yn.parse(JSON.parse(o)),
      c = Date.now() - s.requestedAtMs;
    if (
      s.userId !== e ||
      s.accountId !== t ||
      s.returnNonce !== a ||
      r.userId !== e ||
      r.accountId !== t ||
      c < 0 ||
      c > 6e5
    )
      return !1;
    let l = bn.parse(nt(r.accessToken)),
      u = s.requestedAtMs - vn;
    return l.pwd_auth_time < 0xe8d4a51000 ? l.pwd_auth_time >= Math.floor(u / 1e3) : l.pwd_auth_time >= u;
  } catch {
    return (hn(), !1);
  }
}
function hn() {
  try {
    window.sessionStorage.removeItem(gn);
  } catch {}
}
var gn, _n, vn, yn, bn;
function xn() {
  return (xn = e(() => {
    (Ze(),
      u(),
      Ke(),
      At(),
      (gn = `codex.browser.pendingAccountDeletion`),
      (_n = `account_deletion_reauth`),
      (vn = 6e4),
      (yn = V({ userId: D(), accountId: D(), requestedAtMs: P(), returnNonce: o() })),
      (bn = V({ pwd_auth_time: P() })));
  }))();
}
function Sn(e) {
  if (e.trim() === ``) return null;
  let t = URL.parse(e, `https://chatgpt.com`);
  return t?.protocol === `https:` || t?.protocol === `http:` ? t.href : null;
}
function Cn() {
  let e = (0, En.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Dn.jsx)(Mt, {
          children: (0, Dn.jsx)(p, {
            id: `chatgpt.settings.account_status.loading`,
            defaultMessage: `Loading account actions…`,
            description: `Loading-state text while account-level policy actions are fetched for the signed-in user`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function wn(e) {
  let n = (0, En.c)(6),
    { isFetching: r, onRetry: i } = e,
    a,
    o;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Dn.jsx)(`span`, {
        role: `alert`,
        children: (0, Dn.jsx)(p, {
          id: `chatgpt.settings.account_status.unavailable`,
          defaultMessage: `Account actions are temporarily unavailable`,
          description: `Error heading when account-level policy actions could not be loaded; does not imply the account has no restrictions`,
        }),
      })),
      (o = (0, Dn.jsx)(p, {
        id: `chatgpt.settings.account_status.unavailable.description`,
        defaultMessage: `We couldn't load your account actions. Try again.`,
        description: `Supporting text asking the signed-in user to retry loading account-level policy actions`,
      })),
      (n[0] = a),
      (n[1] = o))
    : ((a = n[0]), (o = n[1]));
  let s;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Dn.jsx)(p, {
        id: `chatgpt.settings.account_status.unavailable.retry`,
        defaultMessage: `Try again`,
        description: `Retry loading account-level policy actions after a request failure`,
      })),
      (n[2] = s))
    : (s = n[2]);
  let c;
  return (
    n[3] !== r || n[4] !== i
      ? ((c = (0, Dn.jsx)(ye, {
          label: a,
          description: o,
          control: (0, Dn.jsx)(t, {
            color: `secondary`,
            size: `toolbar`,
            loading: r,
            onClick: i,
            children: s,
          }),
        })),
        (n[3] = r),
        (n[4] = i),
        (n[5] = c))
      : (c = n[5]),
    c
  );
}
function Tn() {
  let e = (0, En.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Dn.jsx)(`p`, {
          role: `alert`,
          className: `text-xs text-danger`,
          children: (0, Dn.jsx)(p, {
            id: `chatgpt.settings.account_status.action.appeal.unavailable`,
            defaultMessage: `We couldn't open the appeal form. Try again.`,
            description: `Inline error when a fresh appeal link could not be created. Does not change the warning status.`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var En, Dn;
function On() {
  return (On = e(() => {
    ((En = G()), R(), H(), jt(), I(), (Dn = q()));
  }))();
}
function kn(e) {
  let t = (0, Fn.c)(2),
    { standing: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r =
          n === `warning`
            ? (0, X.jsx)(Re, {
                variant: `warning`,
                children: (0, X.jsx)(p, {
                  id: `chatgpt.settings.account_status.standing.warning.label`,
                  defaultMessage: `Warning recorded`,
                  description: `Compact account-standing label when an account warning is recorded.`,
                }),
              })
            : (0, X.jsx)(Re, {
                variant: `neutral`,
                children: (0, X.jsx)(p, {
                  id: `chatgpt.settings.account_status.standing.no_visible_actions.label`,
                  defaultMessage: `No account actions`,
                  description: `Compact account-standing label when no user-visible policy actions are available. Does not promise every product is available.`,
                }),
              })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function An(e) {
  let t = (0, Fn.c)(13),
    { status: n, onAppeal: r, appealPendingActionId: i, appealErrorActionId: a } = e,
    o;
  t[0] === n.standing
    ? (o = t[1])
    : ((o = (0, X.jsx)(`div`, {
        role: `status`,
        className: `flex items-start gap-2 text-sm`,
        children:
          n.standing === `warning`
            ? (0, X.jsxs)(X.Fragment, {
                children: [
                  (0, X.jsx)(w, { className: `text-green` }),
                  (0, X.jsx)(`p`, {
                    children: (0, X.jsx)(p, {
                      id: `chatgpt.settings.account_status.standing.warning.description`,
                      defaultMessage: `This warning does not restrict your access. Review it below and follow the linked policy guidance.`,
                      description: `Explains that a warning itself does not restrict access and asks the user to review its policy guidance.`,
                    }),
                  }),
                ],
              })
            : (0, X.jsxs)(X.Fragment, {
                children: [
                  (0, X.jsx)(Ce, { className: `text-secondary` }),
                  (0, X.jsx)(`p`, {
                    children: (0, X.jsx)(p, {
                      id: `chatgpt.settings.account_status.standing.no_visible_actions.description`,
                      defaultMessage: `No account-level policy actions are available to show`,
                      description: `No user-visible account policy actions were returned. This makes no broader claim about product access.`,
                    }),
                  }),
                ],
              }),
      })),
      (t[0] = n.standing),
      (t[1] = o));
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsx)(`h3`, {
        className: `text-sm font-medium`,
        children: (0, X.jsx)(p, {
          id: `chatgpt.settings.account_status.actions.heading`,
          defaultMessage: `Account actions`,
          description: `Heading above the chronological list of account policy actions.`,
        }),
      })),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] !== a || t[4] !== i || t[5] !== r || t[6] !== n.actions
    ? ((c =
        n.actions.length === 0
          ? (0, X.jsx)(yt, {
              layout: `settings-row`,
              children: (0, X.jsx)(p, {
                id: `chatgpt.settings.account_status.actions.empty`,
                defaultMessage: `No account actions to show`,
                description: `Empty state for the account's user-visible policy actions. This makes no broader claim about product access.`,
              }),
            })
          : n.actions.map((e) =>
              (0, X.jsx)(
                jn,
                { action: e, onAppeal: r, isAppealPending: i === e.id, hasAppealError: a === e.id },
                e.id,
              ),
            )),
      (t[3] = a),
      (t[4] = i),
      (t[5] = r),
      (t[6] = n.actions),
      (t[7] = c))
    : (c = t[7]);
  let l;
  t[8] === c
    ? (l = t[9])
    : ((l = (0, X.jsxs)(`section`, { className: `flex flex-col gap-3`, children: [s, c] })),
      (t[8] = c),
      (t[9] = l));
  let u;
  return (
    t[10] !== o || t[11] !== l
      ? ((u = (0, X.jsxs)(`div`, { className: `flex flex-col gap-6 text-default`, children: [o, l] })),
        (t[10] = o),
        (t[11] = l),
        (t[12] = u))
      : (u = t[12]),
    u
  );
}
function jn(e) {
  let n = (0, Fn.c)(66),
    { action: r, onAppeal: i, isAppealPending: a, hasAppealError: o } = e,
    s,
    c,
    l,
    u,
    d,
    f,
    m,
    ee;
  if (
    n[0] !== r.appeal ||
    n[1] !== r.decidedAt ||
    n[2] !== r.id ||
    n[3] !== r.nextSteps ||
    n[4] !== r.policy ||
    n[5] !== r.policyUrl ||
    n[6] !== r.relatedContent ||
    n[7] !== o ||
    n[8] !== a ||
    n[9] !== i
  ) {
    let e = r.nextSteps?.flatMap(Nn),
      h;
    (n[18] === r.policyUrl ? (h = n[19]) : ((h = Sn(r.policyUrl)), (n[18] = r.policyUrl), (n[19] = h)),
      (c = h));
    let g = r.appeal?.status === `available` && i != null,
      _ = r.appeal?.status === `granted`;
    ((s = ge), (l = `flex flex-col gap-4 p-4 text-sm`));
    let v;
    n[20] === r.decidedAt
      ? (v = n[21])
      : ((v = (0, X.jsx)(T, { value: r.decidedAt, day: `numeric`, month: `short`, year: `numeric` })),
        (n[20] = r.decidedAt),
        (n[21] = v));
    let y;
    n[22] !== r.decidedAt || n[23] !== v
      ? ((y = (0, X.jsx)(`time`, {
          className: `text-xs text-secondary`,
          dateTime: r.decidedAt,
          children: v,
        })),
        (n[22] = r.decidedAt),
        (n[23] = v),
        (n[24] = y))
      : (y = n[24]);
    let b;
    n[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((b = (0, X.jsx)(`h4`, {
          className: `font-medium`,
          children: (0, X.jsx)(p, {
            id: `chatgpt.settings.account_status.action.kind.warning`,
            defaultMessage: `Warning`,
            description: `Type of the recorded account policy action.`,
          }),
        })),
        (n[25] = b))
      : (b = n[25]);
    let te;
    n[26] === y
      ? (te = n[27])
      : ((te = (0, X.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [y, b] })),
        (n[26] = y),
        (n[27] = te));
    let x;
    (n[28] === _
      ? (x = n[29])
      : ((x = _
          ? (0, X.jsx)(Re, {
              variant: `success`,
              children: (0, X.jsx)(p, {
                id: `chatgpt.settings.account_status.action.status.reversed`,
                defaultMessage: `Reversed`,
                description: `Status of a warning reversed after an appeal was granted.`,
              }),
            })
          : (0, X.jsx)(Re, {
              variant: `warning`,
              children: (0, X.jsx)(p, {
                id: `chatgpt.settings.account_status.action.status.recorded`,
                defaultMessage: `Recorded`,
                description: `Status of a recorded account warning.`,
              }),
            })),
        (n[28] = _),
        (n[29] = x)),
      n[30] !== te || n[31] !== x
        ? ((u = (0, X.jsxs)(`div`, {
            className: `flex flex-wrap items-start justify-between gap-3`,
            children: [te, x],
          })),
          (n[30] = te),
          (n[31] = x),
          (n[32] = u))
        : (u = n[32]));
    let S;
    n[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((S = (0, X.jsx)(`dt`, {
          className: `text-xs text-secondary`,
          children: (0, X.jsx)(p, {
            id: `chatgpt.settings.account_status.action.policy.label`,
            defaultMessage: `Policy violated`,
            description: `Label for the public policy associated with an account warning.`,
          }),
        })),
        (n[33] = S))
      : (S = n[33]);
    let C;
    n[34] === r.policy
      ? (C = n[35])
      : ((C = (0, X.jsx)(`dd`, { children: (0, X.jsx)(Pn, { policy: r.policy }) })),
        (n[34] = r.policy),
        (n[35] = C));
    let w;
    n[36] === r.relatedContent
      ? (w = n[37])
      : ((w =
          r.relatedContent?.type === `chatgpt_conversation`
            ? (0, X.jsxs)(X.Fragment, {
                children: [
                  (0, X.jsx)(`dt`, {
                    className: `text-xs text-secondary`,
                    children: (0, X.jsx)(p, {
                      id: `chatgpt.settings.account_status.action.related_content.label`,
                      defaultMessage: `Related content`,
                      description: `Label for user content associated with the warning.`,
                    }),
                  }),
                  (0, X.jsx)(`dd`, {
                    children: (0, X.jsx)(L, {
                      to: `/c/${encodeURIComponent(r.relatedContent.conversationId)}`,
                      className: `underline`,
                      children: (0, X.jsx)(p, {
                        id: `chatgpt.settings.account_status.action.related_content.chatgpt_conversation`,
                        defaultMessage: `ChatGPT conversation`,
                        description: `Link to the conversation associated with an account warning.`,
                      }),
                    }),
                  }),
                ],
              })
            : null),
        (n[36] = r.relatedContent),
        (n[37] = w));
    let E;
    (n[38] !== r.appeal || n[39] !== g
      ? ((E =
          r.appeal != null && !g
            ? (0, X.jsxs)(X.Fragment, {
                children: [
                  (0, X.jsx)(`dt`, {
                    className: `text-xs text-secondary`,
                    children: (0, X.jsx)(p, {
                      id: `chatgpt.settings.account_status.action.appeal.label`,
                      defaultMessage: `Appeal`,
                      description: `Label for an account warning's appeal state.`,
                    }),
                  }),
                  (0, X.jsx)(`dd`, {
                    children: (0, X.jsx)(p, {
                      id: `settings.chatGpt.accountStatus.appealStatus`,
                      defaultMessage: `{status, select, available {Available} pending {Pending} granted {Granted} denied {Denied} closed {Closed} other {}}`,
                      description: `Status of an account warning appeal: available to submit, awaiting a decision, granted, denied, or closed.`,
                      values: { status: r.appeal.status },
                    }),
                  }),
                ],
              })
            : null),
        (n[38] = r.appeal),
        (n[39] = g),
        (n[40] = E))
      : (E = n[40]),
      n[41] !== C || n[42] !== w || n[43] !== E
        ? ((d = (0, X.jsxs)(`dl`, { className: `flex flex-col gap-1`, children: [S, C, w, E] })),
          (n[41] = C),
          (n[42] = w),
          (n[43] = E),
          (n[44] = d))
        : (d = n[44]),
      n[45] === r.policy
        ? (f = n[46])
        : ((f = (0, X.jsx)(`p`, {
            className: `text-secondary`,
            children:
              r.policy === `cyber_abuse`
                ? (0, X.jsx)(p, {
                    id: `chatgpt.settings.account_status.action.summary.cyber_abuse`,
                    defaultMessage: `We identified activity that is not permitted under our policies for cyber abuse`,
                    description: `Public summary of a cyber-abuse warning, excluding internal detector details.`,
                  })
                : (0, X.jsx)(p, {
                    id: `chatgpt.settings.account_status.action.summary.usage_policies`,
                    defaultMessage: `We identified activity that is not permitted under our Usage Policies`,
                    description: `Public summary of an account warning with no specific cyber-abuse mapping.`,
                  }),
          })),
          (n[45] = r.policy),
          (n[46] = f)),
      n[47] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((m = (0, X.jsx)(`p`, {
            className: `font-medium`,
            children: (0, X.jsx)(p, {
              id: `chatgpt.settings.account_status.action.impact.warning`,
              defaultMessage: `This warning does not restrict your access`,
              description: `Explains that the warning action itself does not restrict account access.`,
            }),
          })),
          (n[47] = m))
        : (m = n[47]),
      (ee =
        g || (e?.length ?? 0) > 0
          ? (0, X.jsxs)(`section`, {
              className: `flex flex-col gap-3`,
              children: [
                (0, X.jsx)(`h5`, {
                  className: `font-medium`,
                  children: (0, X.jsx)(p, {
                    id: `chatgpt.settings.account_status.action.next_steps.heading`,
                    defaultMessage: `Next steps`,
                    description: `Heading above optional actions and follow-up links for an account warning.`,
                  }),
                }),
                g
                  ? (0, X.jsxs)(`div`, {
                      className: `flex flex-col items-start gap-1`,
                      children: [
                        (0, X.jsx)(t, {
                          color: `secondary`,
                          size: `toolbar`,
                          loading: a,
                          disabled: a,
                          onClick: () => i(r.id),
                          children: (0, X.jsx)(p, {
                            id: `chatgpt.settings.account_status.action.appeal.open`,
                            defaultMessage: `Appeal`,
                            description: `Opens a fresh case-bound appeal form for this account warning.`,
                          }),
                        }),
                        (0, X.jsx)(`p`, {
                          className: `text-xs text-secondary`,
                          children: (0, X.jsx)(p, {
                            id: `chatgpt.settings.account_status.action.appeal.description`,
                            defaultMessage: `Ask us to review this warning`,
                            description: `Explains the purpose of the Appeal button.`,
                          }),
                        }),
                        o ? (0, X.jsx)(Tn, {}) : null,
                      ],
                    })
                  : null,
                e?.map(Mn),
              ],
            })
          : null),
      (n[0] = r.appeal),
      (n[1] = r.decidedAt),
      (n[2] = r.id),
      (n[3] = r.nextSteps),
      (n[4] = r.policy),
      (n[5] = r.policyUrl),
      (n[6] = r.relatedContent),
      (n[7] = o),
      (n[8] = a),
      (n[9] = i),
      (n[10] = s),
      (n[11] = c),
      (n[12] = l),
      (n[13] = u),
      (n[14] = d),
      (n[15] = f),
      (n[16] = m),
      (n[17] = ee));
  } else
    ((s = n[10]), (c = n[11]), (l = n[12]), (u = n[13]), (d = n[14]), (f = n[15]), (m = n[16]), (ee = n[17]));
  let h;
  n[48] === c
    ? (h = n[49])
    : ((h =
        c == null
          ? null
          : (0, X.jsxs)(N, {
              color: `ghostSecondary`,
              href: c,
              target: `_blank`,
              rel: `noopener noreferrer`,
              onClick: (e) =>
                Qe({ event: e, href: c, initiator: `open_in_browser_bridge`, disposition: `new-tab` }),
              children: [
                (0, X.jsx)(p, {
                  id: `chatgpt.settings.account_status.action.policy_link.label`,
                  defaultMessage: `View policy`,
                  description: `Opens the public policy for an account warning.`,
                }),
                (0, X.jsx)(Ue, { href: c }),
              ],
            })),
      (n[48] = c),
      (n[49] = h));
  let g;
  n[50] === r.id
    ? (g = n[51])
    : ((g = (0, X.jsx)(`span`, {
        className: `text-xs break-all text-secondary`,
        children: (0, X.jsx)(p, {
          id: `chatgpt.settings.account_status.action.reference.label`,
          defaultMessage: `Reference {referenceId}`,
          description: `Public moderation-action reference. Reproduce referenceId exactly; it may be long.`,
          values: { referenceId: r.id },
        }),
      })),
      (n[50] = r.id),
      (n[51] = g));
  let _;
  n[52] !== h || n[53] !== g
    ? ((_ = (0, X.jsxs)(`div`, {
        className: `flex flex-wrap items-center justify-between gap-3`,
        children: [h, g],
      })),
      (n[52] = h),
      (n[53] = g),
      (n[54] = _))
    : (_ = n[54]);
  let v;
  n[55] !== l || n[56] !== u || n[57] !== d || n[58] !== f || n[59] !== m || n[60] !== ee || n[61] !== _
    ? ((v = (0, X.jsxs)(`article`, { className: l, children: [u, d, f, m, ee, _] })),
      (n[55] = l),
      (n[56] = u),
      (n[57] = d),
      (n[58] = f),
      (n[59] = m),
      (n[60] = ee),
      (n[61] = _),
      (n[62] = v))
    : (v = n[62]);
  let y;
  return (
    n[63] !== s || n[64] !== v
      ? ((y = (0, X.jsx)(s, { children: v })), (n[63] = s), (n[64] = v), (n[65] = y))
      : (y = n[65]),
    y
  );
}
function Mn(e) {
  let t = e.href;
  return (0, X.jsxs)(
    `div`,
    {
      className: `flex flex-col items-start gap-1`,
      children: [
        (0, X.jsxs)(N, {
          color: `secondary`,
          size: `toolbar`,
          href: t,
          target: e.openInNewTab ? `_blank` : void 0,
          rel: e.openInNewTab ? `noopener noreferrer` : void 0,
          onClick: (n) =>
            Qe({
              event: n,
              href: t,
              initiator: `open_in_browser_bridge`,
              disposition: e.openInNewTab ? `new-tab` : `current-tab`,
            }),
          children: [e.label, e.openInNewTab ? (0, X.jsx)(Ue, { href: t }) : null],
        }),
        (0, X.jsx)(`p`, { className: `text-xs text-secondary`, children: e.description }),
      ],
    },
    e.id,
  );
}
function Nn(e) {
  let t = Sn(e.href);
  return e.kind === `link` && t != null ? [{ ...e, href: t }] : [];
}
function Pn(e) {
  let t = (0, Fn.c)(3),
    { policy: n } = e;
  if (n === `cyber_abuse`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(p, {
            id: `chatgpt.settings.account_status.action.policy.cyber_abuse`,
            defaultMessage: `Cyber abuse`,
            description: `Public policy label for an account warning safely mapped to cyber abuse.`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n === `prohibited_biological_use`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(p, {
            id: `chatgpt.settings.account_status.action.policy.prohibited_biological_use`,
            defaultMessage: `Prohibited Biological Use`,
            description: `Public policy label for a warning safely mapped to suspicious high-risk dual-use biological activity.`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let r;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, X.jsx)(p, {
          id: `chatgpt.settings.account_status.action.policy.usage_policies`,
          defaultMessage: `Usage policies`,
          description: `Generic public policy label for an account warning, including unknown policy mappings.`,
        })),
        (t[2] = r))
      : (r = t[2]),
    r
  );
}
var Fn, X;
function In() {
  return (In = e(() => {
    ((Fn = G()), R(), j(), Be(), H(), Le(), vt(), E(), ft(), h(), On(), (X = q()));
  }))();
}
function Ln() {
  let e = (0, Bn.c)(4),
    t = bt(`2438148931`),
    n = bt(`3042818307`),
    { accountId: r, userId: i } = xt();
  if (!t || !n || r == null || i == null) return null;
  let a = `${r}:${i}`,
    o;
  return (
    e[0] !== r || e[1] !== a || e[2] !== i
      ? ((o = (0, Z.jsx)(Rn, { accountId: r, userId: i }, a)), (e[0] = r), (e[1] = a), (e[2] = i), (e[3] = o))
      : (o = e[3]),
    o
  );
}
function Rn(e) {
  let t = (0, Bn.c)(52),
    { accountId: n, userId: r } = e,
    i = ne(),
    a = (0, Vn.useId)(),
    [o, s] = y(),
    c;
  t[0] === o ? (c = t[1]) : ((c = o.get(`view`)), (t[0] = o), (t[1] = c));
  let l = c === `account-status`,
    u;
  t[2] !== n || t[3] !== i.locale || t[4] !== r
    ? ((u = [`chatgpt-account-policy-status`, n, r, i.locale]),
      (t[2] = n),
      (t[3] = i.locale),
      (t[4] = r),
      (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] !== n || t[7] !== r
    ? ((d = (e) => {
        let { signal: t } = e;
        return et.safeGet(`/accounts/policy_status`, {
          signal: t,
          additionalHeaders: { "ChatGPT-Account-ID": n },
          expectedIdentity: { accountId: n, userId: r },
        });
      }),
      (t[6] = n),
      (t[7] = r),
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] !== l || t[10] !== u || t[11] !== d
    ? ((f = { queryKey: u, queryFn: d, enabled: l, staleTime: te.ONE_MINUTE }),
      (t[9] = l),
      (t[10] = u),
      (t[11] = d),
      (t[12] = f))
    : (f = t[12]);
  let { data: m, isPending: ee, isError: h, isFetching: b, refetch: x } = re(f),
    C;
  t[13] !== n || t[14] !== r
    ? ((C = {
        mutationFn: async (e) => {
          let { url: t } = await et.safePost(`/accounts/policy_status/{moderation_action_id}/appeal_link`, {
              parameters: { path: { moderation_action_id: e } },
              additionalHeaders: { "ChatGPT-Account-ID": n },
              expectedIdentity: { accountId: n, userId: r },
            }),
            i = Sn(t);
          if (i == null) throw Error(`Invalid account-status appeal URL`);
          return i;
        },
      }),
      (t[13] = n),
      (t[14] = r),
      (t[15] = C))
    : (C = t[15]);
  let w = g(C),
    T;
  if (ee) {
    let e;
    (t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(Cn, {})), (t[16] = e))
      : (e = t[16]),
      (T = e));
  } else if (h) {
    let e;
    t[17] === x ? (e = t[18]) : ((e = () => void x()), (t[17] = x), (t[18] = e));
    let n;
    (t[19] !== b || t[20] !== e
      ? ((n = (0, Z.jsx)(wn, { isFetching: b, onRetry: e })), (t[19] = b), (t[20] = e), (t[21] = n))
      : (n = t[21]),
      (T = n));
  } else {
    let e = w.isPending ? w.variables : null,
      n = w.isError ? w.variables : null,
      r;
    t[22] === w ? (r = t[23]) : ((r = (e) => w.mutate(e, { onSuccess: zn })), (t[22] = w), (t[23] = r));
    let i;
    (t[24] !== m || t[25] !== e || t[26] !== n || t[27] !== r
      ? ((i = (0, Z.jsx)(ye, {
          variant: `stacked`,
          label: null,
          control: (0, Z.jsx)(An, {
            status: m,
            appealPendingActionId: e,
            appealErrorActionId: n,
            onAppeal: r,
          }),
        })),
        (t[24] = m),
        (t[25] = e),
        (t[26] = n),
        (t[27] = r),
        (t[28] = i))
      : (i = t[28]),
      (T = i));
  }
  let E, D;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Z.jsx)(p, {
        id: `chatgpt.settings.account_status.title`,
        defaultMessage: `Account status`,
        description: `Heading for account-level policy actions and access restrictions in Account settings`,
      })),
      (D = (0, Z.jsx)(p, {
        id: `chatgpt.settings.account_status.description`,
        defaultMessage: `Review your account actions and appeal options`,
        description: `Description of the Account status section, which shows account-level policy warnings and their available appeal options`,
      })),
      (t[29] = E),
      (t[30] = D))
    : ((E = t[29]), (D = t[30]));
  let O;
  t[31] !== h || t[32] !== m
    ? ((O = m != null && !h ? (0, Z.jsx)(kn, { standing: m.standing }) : null),
      (t[31] = h),
      (t[32] = m),
      (t[33] = O))
    : (O = t[33]);
  let k;
  t[34] === l
    ? (k = t[35])
    : ((k = l ? (0, Z.jsx)(_, { asset: ve }) : (0, Z.jsx)(v, {})), (t[34] = l), (t[35] = k));
  let A;
  t[36] !== O || t[37] !== k
    ? ((A = (0, Z.jsxs)(Z.Fragment, { children: [O, k] })), (t[36] = O), (t[37] = k), (t[38] = A))
    : (A = t[38]);
  let ie;
  t[39] !== l || t[40] !== s
    ? ((ie = () => {
        s((e) => {
          let t = new URLSearchParams(e);
          return (l ? t.delete(`view`) : t.set(`view`, `account-status`), t);
        });
      }),
      (t[39] = l),
      (t[40] = s),
      (t[41] = ie))
    : (ie = t[41]);
  let j;
  t[42] !== a || t[43] !== l || t[44] !== A || t[45] !== ie
    ? ((j = (0, Z.jsx)(S, {
        ariaExpanded: l,
        ariaControls: a,
        label: E,
        description: D,
        trailing: A,
        onClick: ie,
      })),
      (t[42] = a),
      (t[43] = l),
      (t[44] = A),
      (t[45] = ie),
      (t[46] = j))
    : (j = t[46]);
  let ae;
  return (
    t[47] !== a || t[48] !== l || t[49] !== T || t[50] !== j
      ? ((ae = (0, Z.jsx)(Je, {
          children: (0, Z.jsx)(Je.Content, {
            children: (0, Z.jsx)(ge, {
              children: (0, Z.jsx)(Pt, { contentId: a, expanded: l, content: T, children: j }),
            }),
          }),
        })),
        (t[47] = a),
        (t[48] = l),
        (t[49] = T),
        (t[50] = j),
        (t[51] = ae))
      : (ae = t[51]),
    ae
  );
}
function zn(e) {
  rt({ href: e, initiator: `open_in_browser_bridge`, disposition: `current-tab` });
}
var Bn, Vn, Z;
function Hn() {
  return (Hn = e(() => {
    ((Bn = G()),
      M(),
      m(),
      k(),
      (Vn = J()),
      R(),
      j(),
      ut(),
      lt(),
      Le(),
      b(),
      E(),
      Ne(),
      I(),
      Nt(),
      h(),
      ot(),
      f(),
      In(),
      On(),
      (Z = q()));
  }))();
}
async function Un(e) {
  try {
    let t = await _t();
    if (t?.userId !== e.userId || t.accountId !== e.accountId) return `failed`;
    let n = Kn(t.accessToken);
    return n != null && Date.now() - n < 3e5 ? `authenticated` : (await Wn(e)) ? `redirected` : `failed`;
  } catch {
    return `failed`;
  }
}
async function Wn({ userId: e, accountId: t, intent: n, returnPath: r, loginHint: a }) {
  qn();
  try {
    let o = await _t();
    if (o?.userId !== e || o.accountId !== t) return !1;
    let s = Date.now(),
      c = await Ot(new URL(r, window.location.origin).toString(), {
        ...i().auth.reauthenticationParams,
        ...(a == null ? {} : { login_hint: a }),
      });
    return c.ok
      ? (window.sessionStorage.setItem(
          Jn,
          JSON.stringify({ userId: e, accountId: t, requestedAtMs: s, intent: n }),
        ),
        window.location.assign(c.url),
        !0)
      : !1;
  } catch {
    return (qn(), !1);
  }
}
async function Gn({ userId: e, accountId: t, signal: n }) {
  try {
    let r = await _t();
    if (n.aborted || r?.userId == null || r.accountId == null) return null;
    let i = window.sessionStorage.getItem(Jn);
    if (i == null) return null;
    window.sessionStorage.removeItem(Jn);
    let a = Xn.parse(JSON.parse(i)),
      o = Date.now() - a.requestedAtMs;
    if (a.userId !== e || a.accountId !== t || r.userId !== e || r.accountId !== t || o < 0 || o > 6e5)
      return null;
    let s = Kn(r.accessToken);
    return s != null && s >= a.requestedAtMs ? a.intent : null;
  } catch {
    return null;
  }
}
function Kn(e) {
  try {
    return Zn.parse(nt(e)).pwd_auth_time;
  } catch {
    return null;
  }
}
function qn() {
  try {
    window.sessionStorage.removeItem(Jn);
  } catch {}
}
var Jn, Yn, Xn, Zn;
function Qn() {
  return (Qn = e(() => {
    (Ze(),
      u(),
      Ke(),
      z(),
      At(),
      (Jn = `codex.browser.pendingEmailChange`),
      (Yn = l(`step`, [
        V({ step: n(`edit`), socialUser: A() }),
        V({ step: n(`otp`), email: D().min(1), socialUser: A() }),
      ])),
      (Xn = V({ userId: D(), accountId: D(), requestedAtMs: P(), intent: Yn })),
      (Zn = V({ pwd_auth_time: P() })));
  }))();
}
function $n() {
  let e = (0, tr.c)(104),
    n = ee(s),
    r = xt(),
    i;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = null), (e[0] = i)) : (i = e[0]);
  let a = i,
    o = ne(),
    l = d(),
    u = be(),
    f = c(`/settings/account`),
    m = pt(),
    h = pe(),
    _;
  e[1] !== r.accountId || e[2] !== r.userId
    ? ((_ = { userId: r.userId, accountId: r.accountId }),
      (e[1] = r.accountId),
      (e[2] = r.userId),
      (e[3] = _))
    : (_ = e[3]);
  let { data: v } = Te(Ve, _),
    y;
  e[4] !== r.accountId || e[5] !== r.userId
    ? ((y = [`change-email-eligibility`, r.userId, r.accountId]),
      (e[4] = r.accountId),
      (e[5] = r.userId),
      (e[6] = y))
    : (y = e[6]);
  let b = y,
    te = v != null,
    x;
  e[7] !== b || e[8] !== te
    ? ((x = { queryKey: b, queryFn: er, enabled: te, staleTime: 3e5 }), (e[7] = b), (e[8] = te), (e[9] = x))
    : (x = e[9]);
  let { data: S } = re(x),
    C;
  e[10] !== r.accountId || e[11] !== r.userId
    ? ((C = [`chatgpt-email-reauth`, r.userId, r.accountId]),
      (e[10] = r.accountId),
      (e[11] = r.userId),
      (e[12] = C))
    : (C = e[12]);
  let w = C,
    T;
  e[13] !== r.accountId || e[14] !== r.userId
    ? ((T = async (e) => {
        let { signal: t } = e;
        if (r.userId == null || r.accountId == null || a == null) return null;
        let n = await Gn({ userId: r.userId, accountId: r.accountId, signal: t });
        if (n == null) return null;
        if (n.step === `edit`) return { operation: `change`, socialUser: n.socialUser };
        try {
          return (
            await et.safePost(`/accounts/change_email/begin`, {
              requestBody: { email: n.email, auth0_client_id: a, remove_social_subs: n.socialUser },
              signal: t,
            }),
            { operation: `change`, socialUser: n.socialUser, initialEmail: n.email, initialStep: `otp` }
          );
        } catch (e) {
          let t = e;
          return {
            operation: `change`,
            socialUser: n.socialUser,
            initialEmail: n.email,
            initialError: Zt(t, `begin`, n.email),
          };
        }
      }),
      (e[13] = r.accountId),
      (e[14] = r.userId),
      (e[15] = T))
    : (T = e[15]);
  let E = r.userId != null && r.accountId != null && a != null,
    D;
  e[16] !== w || e[17] !== T || e[18] !== E
    ? ((D = {
        queryKey: w,
        queryFn: T,
        enabled: E,
        staleTime: 1 / 0,
        gcTime: 0,
        retry: !1,
        refetchOnWindowFocus: !1,
      }),
      (e[16] = w),
      (e[17] = T),
      (e[18] = E),
      (e[19] = D))
    : (D = e[19]);
  let { data: O } = re(D),
    [k, A] = (0, nr.useState)(null),
    [j, M] = (0, nr.useState)(!1),
    N;
  e[20] !== r.accountId || e[21] !== r.userId || e[22] !== u.state
    ? ((N = Rt(u.state, `securityAddEmailIntent`, r.accountId, r.userId)),
      (e[20] = r.accountId),
      (e[21] = r.userId),
      (e[22] = u.state),
      (e[23] = N))
    : (N = e[23]);
  let P = N,
    F = v?.email ?? r.email,
    oe;
  e[24] !== r.accountId || e[25] !== r.userId || e[26] !== u.state
    ? ((oe =
        r.accountId && r.userId && Lt(u.state, r.accountId, r.userId)
          ? { accountId: r.accountId, userId: r.userId }
          : void 0),
      (e[24] = r.accountId),
      (e[25] = r.userId),
      (e[26] = u.state),
      (e[27] = oe))
    : (oe = e[27]);
  let se = oe,
    ue = !!se && !!v && !F && S?.eligible === !0,
    I;
  e[28] !== ue || e[29] !== k || e[30] !== S || e[31] !== O
    ? ((I =
        k ?? O ?? (ue ? { operation: `add`, socialUser: S.eligibility_type === `social_password` } : null)),
      (e[28] = ue),
      (e[29] = k),
      (e[30] = S),
      (e[31] = O),
      (e[32] = I))
    : (I = e[32]);
  let L = I,
    R;
  e[33] === o
    ? (R = e[34])
    : ((R = o.formatMessage({
        id: `settings.chatGpt.email.reauthError`,
        defaultMessage: `Could not verify your identity. Please try again`,
        description: `Error when starting password reauthentication for an account email change fails`,
      })),
      (e[33] = o),
      (e[34] = R));
  let z = R,
    B;
  e[35] !== f ||
  e[36] !== r.accountId ||
  e[37] !== r.userId ||
  e[38] !== z ||
  e[39] !== v?.email ||
  e[40] !== v?.phone_number
    ? ((B = function (e) {
        if (r.userId == null || r.accountId == null) throw Error(z);
        return {
          userId: r.userId,
          accountId: r.accountId,
          intent: e,
          returnPath: f,
          loginHint: v?.email ?? v?.phone_number ?? void 0,
        };
      }),
      (e[35] = f),
      (e[36] = r.accountId),
      (e[37] = r.userId),
      (e[38] = z),
      (e[39] = v?.email),
      (e[40] = v?.phone_number),
      (e[41] = B))
    : (B = e[41]);
  let V = B,
    he;
  e[42] !== z || e[43] !== V
    ? ((he = async function (e) {
        let t = await Un(V(e));
        if (t === `failed`) throw Error(z);
        return t === `redirected`;
      }),
      (e[42] = z),
      (e[43] = V),
      (e[44] = he))
    : (he = e[44]);
  let ge = he,
    ve;
  e[45] !== S || e[46] !== F || e[47] !== ge || e[48] !== v
    ? ((ve = async () => {
        if (S?.eligible !== !0 || v == null) return;
        let e = F ? `change` : `add`;
        if (e === `change` && S.eligibility_type === `social`) {
          M(!0);
          return;
        }
        let t = S.eligibility_type === `social_password`;
        (e === `change` && (await ge({ step: `edit`, socialUser: t }))) || A({ operation: e, socialUser: t });
      }),
      (e[45] = S),
      (e[46] = F),
      (e[47] = ge),
      (e[48] = v),
      (e[49] = ve))
    : (ve = e[49]);
  let H;
  e[50] !== z || e[51] !== n
    ? ((H = () => n.get(le).danger(z, { errorAnalytics: { toastId: `settings.chatGpt.email.reauthError` } })),
      (e[50] = z),
      (e[51] = n),
      (e[52] = H))
    : (H = e[52]);
  let U;
  e[53] !== ve || e[54] !== H
    ? ((U = { mutationFn: ve, onError: H }), (e[53] = ve), (e[54] = H), (e[55] = U))
    : (U = e[55]);
  let W = g(U),
    G;
  e[56] !== r.accountId ||
  e[57] !== r.userId ||
  e[58] !== u.hash ||
  e[59] !== u.pathname ||
  e[60] !== u.search ||
  e[61] !== u.state ||
  e[62] !== l ||
  e[63] !== h ||
  e[64] !== w
    ? ((G = function () {
        (A(null),
          h.setQueryData(w, null),
          Lt(u.state, r.accountId, r.userId) &&
            l({ pathname: u.pathname, search: u.search, hash: u.hash }, { replace: !0, state: zt(u.state) }));
      }),
      (e[56] = r.accountId),
      (e[57] = r.userId),
      (e[58] = u.hash),
      (e[59] = u.pathname),
      (e[60] = u.search),
      (e[61] = u.state),
      (e[62] = l),
      (e[63] = h),
      (e[64] = w),
      (e[65] = G))
    : (G = e[65]);
  let K = G,
    q;
  e[66] !== L?.operation ||
  e[67] !== r.accountId ||
  e[68] !== r.userId ||
  e[69] !== K ||
  e[70] !== o ||
  e[71] !== h ||
  e[72] !== z ||
  e[73] !== P ||
  e[74] !== n ||
  e[75] !== m
    ? ((q = async function (e) {
        let t = o.formatMessage({
          id: `settings.chatGpt.email.verified`,
          defaultMessage: `Email confirmed`,
          description: `Success notification after verifying a new account email address`,
        });
        if (L?.operation === `add`) {
          if (!(await Yt({ accountId: r.accountId, email: e, queryClient: h, userId: r.userId })))
            throw Error(z);
          (K(), n.get(le).success(t), Ft(n, P));
          return;
        }
        (n.get(le).success(t), Kt(e));
        let i = await kt(() => We(m), void 0, {
          reason: `add_email_otp_verification`,
          source: `settings.add-email-otp-modal`,
        });
        if (i.ok) {
          window.location.replace(i.url);
          return;
        }
        window.location.replace(at(`logout`).toString());
      }),
      (e[66] = L?.operation),
      (e[67] = r.accountId),
      (e[68] = r.userId),
      (e[69] = K),
      (e[70] = o),
      (e[71] = h),
      (e[72] = z),
      (e[73] = P),
      (e[74] = n),
      (e[75] = m),
      (e[76] = q))
    : (q = e[76]);
  let xe = q,
    J;
  e[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, Q.jsx)(p, { ...rr.label })), (e[77] = J))
    : (J = e[77]);
  let Se;
  e[78] === F
    ? (Se = e[79])
    : ((Se = F ? (0, Q.jsx)(`span`, { className: `select-text`, children: F }) : void 0),
      (e[78] = F),
      (e[79] = Se));
  let Ce;
  e[80] !== S?.eligible || e[81] !== F || e[82] !== o || e[83] !== W
    ? ((Ce =
        S?.eligible === !0
          ? (0, Q.jsx)(t, {
              "aria-label": F
                ? o.formatMessage(rr.changeAction, { email: F })
                : o.formatMessage(rr.addAction),
              color: `secondary`,
              size: `toolbar`,
              loading: W.isPending,
              disabled: W.isPending,
              onClick: (e) => {
                a == null
                  ? Qe({
                      event: e,
                      href: `https://chatgpt.com/#settings/Account`,
                      initiator: `open_in_browser_bridge`,
                      openTarget: `external-browser`,
                    })
                  : W.mutate();
              },
              children: F ? (0, Q.jsx)(p, { ...rr.change }) : (0, Q.jsx)(p, { ...rr.add }),
            })
          : null),
      (e[80] = S?.eligible),
      (e[81] = F),
      (e[82] = o),
      (e[83] = W),
      (e[84] = Ce))
    : (Ce = e[84]);
  let we;
  e[85] !== Se || e[86] !== Ce
    ? ((we = (0, Q.jsx)(ye, { label: J, description: Se, control: Ce })),
      (e[85] = Se),
      (e[86] = Ce),
      (e[87] = we))
    : (we = e[87]);
  let Ee;
  e[88] !== L ||
  e[89] !== ue ||
  e[90] !== K ||
  e[91] !== xe ||
  e[92] !== ge ||
  e[93] !== z ||
  e[94] !== V ||
  e[95] !== se
    ? ((Ee =
        L != null && a != null
          ? (0, Q.jsx)(ir, {
              ...L,
              auth0ClientId: a,
              expectedIdentity: ue ? se : void 0,
              onClose: K,
              onSuccess: xe,
              ensureRecentLoginOrReauth: (e) => ge({ step: `otp`, email: e, socialUser: L.socialUser }),
              startChangeEmailReauth: async (e) => {
                if (!(await Wn(V({ step: `otp`, email: e, socialUser: L.socialUser })))) throw Error(z);
              },
            })
          : null),
      (e[88] = L),
      (e[89] = ue),
      (e[90] = K),
      (e[91] = xe),
      (e[92] = ge),
      (e[93] = z),
      (e[94] = V),
      (e[95] = se),
      (e[96] = Ee))
    : (Ee = e[96]);
  let De;
  e[97] !== l || e[98] !== j
    ? ((De = j
        ? (0, Q.jsx)(fe, {
            open: !0,
            onOpenChange: (e) => !e && M(!1),
            children: (0, Q.jsxs)(me, {
              children: [
                (0, Q.jsx)(de, {
                  children: (0, Q.jsx)(ae, {
                    title: (0, Q.jsx)(ie, {
                      className: `select-none`,
                      children: (0, Q.jsx)(p, {
                        id: `settings.chatGpt.email.passwordRequired`,
                        defaultMessage: `Add a password first`,
                        description: `Title shown when a social-login user needs a password before changing email`,
                      }),
                    }),
                  }),
                }),
                (0, Q.jsx)(de, {
                  spacing: `large`,
                  children: (0, Q.jsx)(ce, {
                    children: (0, Q.jsx)(p, {
                      id: `settings.chatGpt.email.passwordRequiredDescription`,
                      defaultMessage: `Your account was created with Google, Microsoft, or Apple. To change your email, first add a password in Settings → Security → Password → Add`,
                      description: `Explains where a social-login user can add the password required to change their account email`,
                    }),
                  }),
                }),
                (0, Q.jsx)(de, {
                  spacing: `large`,
                  children: (0, Q.jsxs)(_e, {
                    children: [
                      (0, Q.jsx)(t, {
                        color: `secondary`,
                        onClick: () => M(!1),
                        children: (0, Q.jsx)(p, {
                          id: `settings.chatGpt.email.notNow`,
                          defaultMessage: `Not now`,
                          description: `Dismiss the password prerequisite dialog without changing email`,
                        }),
                      }),
                      (0, Q.jsx)(t, {
                        color: `primary`,
                        onClick: () => {
                          (M(!1), l(`/settings/security`));
                        },
                        children: (0, Q.jsx)(p, {
                          id: `settings.chatGpt.email.goToSecurity`,
                          defaultMessage: `Go to Security`,
                          description: `Open security settings to add the password required for changing email`,
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        : null),
      (e[97] = l),
      (e[98] = j),
      (e[99] = De))
    : (De = e[99]);
  let Oe;
  return (
    e[100] !== we || e[101] !== Ee || e[102] !== De
      ? ((Oe = (0, Q.jsxs)(Q.Fragment, { children: [we, Ee, De] })),
        (e[100] = we),
        (e[101] = Ee),
        (e[102] = De),
        (e[103] = Oe))
      : (Oe = e[103]),
    Oe
  );
}
function er(e) {
  let { signal: t } = e;
  return et.safeGet(`/accounts/change_email/eligibility`, { signal: t });
}
var tr, nr, Q, rr, ir;
function ar() {
  return (ar = e(() => {
    ((tr = G()),
      m(),
      k(),
      U(),
      x(),
      (nr = J()),
      R(),
      j(),
      Ke(),
      Ae(),
      ut(),
      Ee(),
      lt(),
      H(),
      W(),
      F(),
      Le(),
      Se(),
      B(),
      K(),
      Bt(),
      I(),
      At(),
      It(),
      qt(),
      Xt(),
      Qn(),
      Jt(),
      (Q = q()),
      he(),
      (rr = r({
        label: {
          id: `settings.chatGpt.account.email`,
          defaultMessage: `Email`,
          description: `Label for ChatGPT account email`,
        },
        changeAction: {
          id: `settings.chatGpt.email.changeAction`,
          defaultMessage: `Change email: {email}`,
          description: `Accessible name for the Account setting button that changes the current email address. Email is the full current address.`,
        },
        addAction: {
          id: `settings.chatGpt.email.addAction`,
          defaultMessage: `Add email`,
          description: `Accessible name for the Account setting button that adds an email address to a phone-only account.`,
        },
        change: {
          id: `settings.chatGpt.email.change`,
          defaultMessage: `Change`,
          description: `Button in Account settings that starts changing the current email address`,
        },
        add: {
          id: `settings.chatGpt.email.add`,
          defaultMessage: `Add`,
          description: `Button to add an email address to an account without one`,
        },
      })),
      (ir = a(
        async () =>
          (
            await oe(
              async () => {
                let { EmailDialog: e } = await import(`./dialog-d667d665b45d.js`);
                return { EmailDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
              import.meta.url,
            )
          ).EmailDialog,
      )));
  }))();
}
function or(e) {
  let t = (0, sr.c)(32),
    { accountId: n, userId: r } = e,
    [i, a] = (0, cr.useState)(!1),
    o;
  t[0] !== n || t[1] !== r
    ? ((o = { mutationKey: [`chatgpt-account-username`, n, r] }), (t[0] = n), (t[1] = r), (t[2] = o))
    : (o = t[2]);
  let s = we(o) > 0,
    c;
  t[3] !== n || t[4] !== r
    ? ((c = [`chatgpt-account-username`, n, r]), (t[3] = n), (t[4] = r), (t[5] = c))
    : (c = t[5]);
  let l = n != null && r != null,
    u;
  t[6] === n
    ? (u = t[7])
    : ((u = async (e) => {
        let { signal: t } = e,
          { profile: r } = await ht.safeGet(`/wham/profiles/me`, {
            signal: t,
            additionalHeaders: n == null ? void 0 : { "ChatGPT-Account-ID": n },
            expectedErrorStatuses: [403, 404],
          });
        return r.username?.trim() || null;
      }),
      (t[6] = n),
      (t[7] = u));
  let d;
  t[8] !== c || t[9] !== l || t[10] !== u
    ? ((d = { queryKey: c, enabled: l, staleTime: te.ONE_MINUTE, retry: !1, queryFn: u }),
      (t[8] = c),
      (t[9] = l),
      (t[10] = u),
      (t[11] = d))
    : (d = t[11]);
  let { data: f, isPending: m, isError: ee, refetch: h } = re(d),
    g = null;
  if (ee) {
    let e;
    (t[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, lr.jsx)(p, {
          id: `settings.chatGpt.account.username.retry`,
          defaultMessage: `Retry`,
          description: `Action on the Username row in ChatGPT Account settings after loading the current handle fails. Reloads the handle so the user can edit it. Short button label.`,
        })),
        (t[12] = e))
      : (e = t[12]),
      (g = e));
  } else if (f) {
    let e;
    (t[13] === f
      ? (e = t[14])
      : ((e = (0, lr.jsx)(p, {
          id: `settings.chatGpt.account.usernameValue`,
          defaultMessage: `@{username}`,
          description: `Displayed ChatGPT username`,
          values: { username: f },
        })),
        (t[13] = f),
        (t[14] = e)),
      (g = e));
  } else if (!m) {
    let e;
    (t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, lr.jsx)(p, {
          id: `settings.chatGpt.account.username.add`,
          defaultMessage: `Add`,
          description: `Action on the Username row in ChatGPT Account settings when the user has no public handle. Opens the editor to choose one. Short button label.`,
        })),
        (t[15] = e))
      : (e = t[15]),
      (g = e));
  }
  let _ = m || s,
    v;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, lr.jsx)(p, {
        id: `settings.chatGpt.account.username`,
        defaultMessage: `Username`,
        description: `Label for ChatGPT username`,
      })),
      (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] !== ee || t[18] !== h
    ? ((y = () => {
        ee ? h() : a(!0);
      }),
      (t[17] = ee),
      (t[18] = h),
      (t[19] = y))
    : (y = t[19]);
  let b;
  t[20] !== _ || t[21] !== y || t[22] !== g
    ? ((b = (0, lr.jsx)(S, { disabled: _, label: v, trailing: g, onClick: y })),
      (t[20] = _),
      (t[21] = y),
      (t[22] = g),
      (t[23] = b))
    : (b = t[23]);
  let x;
  t[24] !== n || t[25] !== i || t[26] !== r || t[27] !== f
    ? ((x =
        i &&
        n != null &&
        r != null &&
        (0, lr.jsx)(ur, { accountId: n, userId: r, initialUsername: f ?? null, onClose: () => a(!1) })),
      (t[24] = n),
      (t[25] = i),
      (t[26] = r),
      (t[27] = f),
      (t[28] = x))
    : (x = t[28]);
  let C;
  return (
    t[29] !== x || t[30] !== b
      ? ((C = (0, lr.jsxs)(lr.Fragment, { children: [b, x] })), (t[29] = x), (t[30] = b), (t[31] = C))
      : (C = t[31]),
    C
  );
}
var sr, cr, lr, ur;
function dr() {
  return (dr = e(() => {
    ((sr = G()),
      C(),
      k(),
      (cr = J()),
      R(),
      Se(),
      I(),
      f(),
      Ct(),
      (lr = q()),
      he(),
      (ur = a(() =>
        oe(
          () => import(`./dialog-2bdf85149f6f.js`).then((e) => e.UsernameDialog),
          __vite__mapDeps([9, 2, 1, 3, 5, 6, 10, 11, 12, 13, 14, 15, 16]),
          import.meta.url,
        ),
      )));
  }))();
}
function fr() {
  let e = (0, hr.c)(77),
    n = ee(s),
    r = ne(),
    i = c(`/settings/account`),
    a = xt(),
    o = pt(),
    l = pe(),
    { data: u } = Fe(),
    d;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = { queryKey: [`browser-chatgpt-auth`], queryFn: _t, enabled: !1, staleTime: te.ONE_MINUTE }),
      (e[0] = d))
    : (d = e[0]);
  let { data: f, isLoading: m } = re(d),
    h;
  e[1] !== a.accountId || e[2] !== a.userId
    ? ((h = { accountId: a.accountId, userId: a.userId }),
      (e[1] = a.accountId),
      (e[2] = a.userId),
      (e[3] = h))
    : (h = e[3]);
  let { data: _ } = Te(Ve, h),
    v;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = { queryKey: [`chatgpt-user-profile`], queryFn: mr, staleTime: te.ONE_MINUTE }), (e[4] = v))
    : (v = e[4]);
  let { data: y } = re(v),
    [b, x] = (0, gr.useState)(null),
    [S, C] = (0, gr.useState)(null),
    [w, T] = (0, gr.useState)(!1),
    E,
    D;
  e[5] !== a.accountId || e[6] !== a.userId
    ? ((E = [`chatgpt-account-deletion-reauth`, a.userId, a.accountId]),
      (D = async (e) => {
        let { signal: t } = e;
        return a.userId == null || a.accountId == null
          ? !1
          : mn({ userId: a.userId, accountId: a.accountId, signal: t });
      }),
      (e[5] = a.accountId),
      (e[6] = a.userId),
      (e[7] = E),
      (e[8] = D))
    : ((E = e[7]), (D = e[8]));
  let O;
  e[9] !== E || e[10] !== D || e[11] !== !1
    ? ((O = { queryKey: E, queryFn: D, enabled: !1, staleTime: 1 / 0, gcTime: 0 }),
      (e[9] = E),
      (e[10] = D),
      (e[11] = !1),
      (e[12] = O))
    : (O = e[12]);
  let { data: k } = re(O),
    A;
  e[13] === l
    ? (A = e[14])
    : ((A = async (e, t) => {
        (await l.invalidateQueries({ queryKey: [`chatgpt-current-user`] }), x((e) => (e === t ? null : e)));
      }),
      (e[13] = l),
      (e[14] = A));
  let ie = g({ mutationFn: pr, onSuccess: A, onError: () => j() });
  function j() {
    n.get(le).danger(
      r.formatMessage({
        id: `settings.chatGpt.account.updateError`,
        defaultMessage: `Could not update account settings`,
        description: `Error toast when ChatGPT account settings cannot be updated`,
      }),
      { errorAnalytics: { toastId: `settings.chatGpt.account.updateError` } },
    );
  }
  let ae;
  e[15] === o
    ? (ae = e[16])
    : ((ae = async function () {
        let e = await kt(() => We(o));
        if (e.ok) {
          window.location.replace(e.url);
          return;
        }
        (Oe(), await We(o), window.location.replace(at(`login`).toString()));
      }),
      (e[15] = o),
      (e[16] = ae));
  let M = ae,
    N = b ?? _?.name ?? ``,
    P = _?.email ?? a.email,
    F;
  e[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsx)(st, { slug: `account` })), (e[17] = F))
    : (F = e[17]);
  let oe;
  e[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (0, $.jsx)(Je.Header, {
        title: (0, $.jsx)(p, {
          id: `settings.chatGpt.account.account`,
          defaultMessage: `Account`,
          description: `Heading for ChatGPT account settings`,
        }),
      })),
      (e[18] = oe))
    : (oe = e[18]);
  let se;
  e[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, $.jsx)(p, {
        id: `settings.chatGpt.account.status`,
        defaultMessage: `Status`,
        description: `Label for ChatGPT account plan status`,
      })),
      (e[19] = se))
    : (se = e[19]);
  let ce = a.planAtLogin ?? ``,
    ue;
  e[20] === ce
    ? (ue = e[21])
    : ((ue = (0, $.jsx)(ye, {
        label: se,
        control: (0, $.jsx)(`span`, { className: `text-sm text-secondary`, children: ce }),
      })),
      (e[20] = ce),
      (e[21] = ue));
  let I;
  e[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(p, {
        id: `settings.chatGpt.account.name`,
        defaultMessage: `Name`,
        description: `Label for ChatGPT account name`,
      })),
      (e[22] = I))
    : (I = e[22]);
  let L = _ == null,
    R;
  e[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (e) => x(e.currentTarget.value)), (e[23] = R))
    : (R = e[23]);
  let z;
  e[24] !== N || e[25] !== L
    ? ((z = (0, $.jsx)(qe, { disabled: L, value: N, onChange: R })), (e[24] = N), (e[25] = L), (e[26] = z))
    : (z = e[26]);
  let de = _ == null || b == null || ie.isPending,
    B;
  e[27] !== N || e[28] !== ie
    ? ((B = () => ie.mutate(N)), (e[27] = N), (e[28] = ie), (e[29] = B))
    : (B = e[29]);
  let fe;
  e[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, $.jsx)(p, {
        id: `settings.chatGpt.account.save`,
        defaultMessage: `Save`,
        description: `Button to save ChatGPT account details`,
      })),
      (e[30] = fe))
    : (fe = e[30]);
  let me;
  e[31] !== ie.isPending || e[32] !== de || e[33] !== B
    ? ((me = (0, $.jsx)(t, {
        color: `secondary`,
        disabled: de,
        loading: ie.isPending,
        size: `toolbar`,
        onClick: B,
        children: fe,
      })),
      (e[31] = ie.isPending),
      (e[32] = de),
      (e[33] = B),
      (e[34] = me))
    : (me = e[34]);
  let V;
  e[35] !== z || e[36] !== me
    ? ((V = (0, $.jsx)(ye, {
        label: I,
        control: (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [z, me] }),
      })),
      (e[35] = z),
      (e[36] = me),
      (e[37] = V))
    : (V = e[37]);
  let he = `${a.accountId}:${a.userId}`,
    _e;
  e[38] !== a.accountId || e[39] !== a.userId || e[40] !== he
    ? ((_e = (0, $.jsx)(or, { accountId: a.accountId, userId: a.userId }, he)),
      (e[38] = a.accountId),
      (e[39] = a.userId),
      (e[40] = he),
      (e[41] = _e))
    : (_e = e[41]);
  let ve = `${a.userId}:${a.accountId}`,
    H;
  e[42] === ve ? (H = e[43]) : ((H = (0, $.jsx)($n, {}, ve)), (e[42] = ve), (e[43] = H));
  let U;
  e[44] === Symbol.for(`react.memo_cache_sentinel`) ? ((U = (0, $.jsx)(Gt, {})), (e[44] = U)) : (U = e[44]);
  let W;
  e[45] !== ue || e[46] !== V || e[47] !== _e || e[48] !== H
    ? ((W = (0, $.jsxs)(Je, {
        children: [
          oe,
          (0, $.jsx)(Je.Content, { children: (0, $.jsxs)(ge, { children: [ue, V, _e, H, U] }) }),
        ],
      })),
      (e[45] = ue),
      (e[46] = V),
      (e[47] = _e),
      (e[48] = H),
      (e[49] = W))
    : (W = e[49]);
  let G;
  e[50] === Symbol.for(`react.memo_cache_sentinel`) ? ((G = (0, $.jsx)(Ln, {})), (e[50] = G)) : (G = e[50]);
  let K;
  e[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, $.jsx)(De, { name: `chatgpt.cme`, children: (0, $.jsx)(_r, {}) })), (e[51] = K))
    : (K = e[51]);
  let be;
  e[52] === y
    ? (be = e[53])
    : ((be = y?.viewer_access.can_edit
        ? (0, $.jsxs)(Je, {
            children: [
              (0, $.jsx)(Je.Header, {
                title: (0, $.jsx)(p, {
                  id: `settings.chatGpt.account.builderProfile`,
                  defaultMessage: `GPT builder profile`,
                  description: `Heading for the ChatGPT GPT builder profile`,
                }),
              }),
              (0, $.jsx)(Je.Content, {
                children: (0, $.jsx)(ge, {
                  children: (0, $.jsx)(ye, {
                    label: y.profile_details.display_name ?? y.profile_details.username ?? ``,
                    description: y.profile_details.username ?? void 0,
                    control: null,
                  }),
                }),
              }),
            ],
          })
        : null),
      (e[52] = y),
      (e[53] = be));
  let q;
  e[54] !== a.accountId || e[55] !== a.userId || e[56] !== u?.structure || e[57] !== m || e[58] !== _
    ? ((q =
        u?.structure === `personal`
          ? (0, $.jsx)(Je, {
              children: (0, $.jsx)(Je.Content, {
                children: (0, $.jsx)(ge, {
                  children: (0, $.jsx)(ye, {
                    label: (0, $.jsx)(p, {
                      id: `settings.chatGpt.account.deletion.row.label`,
                      defaultMessage: `Delete account`,
                      description: `Label of the destructive account-deletion row at the bottom of ChatGPT Account settings. It is shown only for personal accounts. Short settings-row label with no placeholders.`,
                    }),
                    control: (0, $.jsx)(t, {
                      color: `danger`,
                      disabled: m || _ == null || a.userId == null || a.accountId == null,
                      size: `toolbar`,
                      onClick: () => C(`${a.userId}:${a.accountId}`),
                      children: (0, $.jsx)(p, {
                        id: `settings.chatGpt.account.deletion.row.button`,
                        defaultMessage: `Delete`,
                        description: `Destructive button at the bottom of ChatGPT Account settings. It opens the final confirmation dialog for permanently deleting a personal account. Very short button label with no placeholders.`,
                      }),
                    }),
                  }),
                }),
              }),
            })
          : null),
      (e[54] = a.accountId),
      (e[55] = a.userId),
      (e[56] = u?.structure),
      (e[57] = m),
      (e[58] = _),
      (e[59] = q))
    : (q = e[59]);
  let xe;
  e[60] !== P ||
  e[61] !== i ||
  e[62] !== a.accountId ||
  e[63] !== a.userId ||
  e[64] !== f?.accessToken ||
  e[65] !== u?.structure ||
  e[66] !== S ||
  e[67] !== w ||
  e[68] !== M ||
  e[69] !== k ||
  e[70] !== _
    ? ((xe =
        a.userId != null &&
        a.accountId != null &&
        u?.structure === `personal` &&
        _ != null &&
        (S === `${a.userId}:${a.accountId}` || (k === !0 && !w))
          ? (0, $.jsx)(
              nn,
              {
                accessToken: f?.accessToken ?? null,
                contactPoint: P ?? _?.phone_number ?? null,
                contactPointKind: P == null ? `phone` : `email`,
                onClose: () => {
                  (C(null), T(!0));
                },
                onDeleted: M,
                onRefreshLogin: async (e) =>
                  !e.aborted &&
                  (rt({
                    href: `https://chatgpt.com/#settings/Account`,
                    initiator: `open_in_browser_bridge`,
                    openTarget: `external-browser`,
                  }),
                  C(null),
                  !0),
              },
              `${a.userId}:${a.accountId}`,
            )
          : null),
      (e[60] = P),
      (e[61] = i),
      (e[62] = a.accountId),
      (e[63] = a.userId),
      (e[64] = f?.accessToken),
      (e[65] = u?.structure),
      (e[66] = S),
      (e[67] = w),
      (e[68] = M),
      (e[69] = k),
      (e[70] = _),
      (e[71] = xe))
    : (xe = e[71]);
  let J;
  return (
    e[72] !== W || e[73] !== be || e[74] !== q || e[75] !== xe
      ? ((J = (0, $.jsxs)(dt, { title: F, children: [W, G, K, be, q, xe] })),
        (e[72] = W),
        (e[73] = be),
        (e[74] = q),
        (e[75] = xe),
        (e[76] = J))
      : (J = e[76]),
    J
  );
}
function pr(e) {
  return et.safePatch(`/accounts/users/name`, { requestBody: { name: e } });
}
function mr() {
  return et.safeGet(`/profiles/me`);
}
var hr, gr, $, _r;
function vr() {
  return (vr = e(() => {
    ((hr = G()),
      St(),
      m(),
      k(),
      U(),
      x(),
      (gr = J()),
      R(),
      j(),
      gt(),
      Ke(),
      Ae(),
      ut(),
      Ee(),
      lt(),
      Pe(),
      H(),
      Le(),
      Se(),
      Me(),
      B(),
      K(),
      it(),
      Ne(),
      I(),
      wt(),
      h(),
      At(),
      f(),
      pn(),
      xn(),
      Hn(),
      Wt(),
      ar(),
      dr(),
      ($ = q()),
      (_r = a(mt)));
  }))();
}
vr();
export { fr as ChatGptAccountSettings };
//# sourceMappingURL=account-settings-59ebe4159d73.js.map
