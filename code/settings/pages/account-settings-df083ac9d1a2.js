const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./persona-77b058e71ca5.js", "./rolldown-runtime-c05d78c594d1.js"]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $xt as n,
  A3t as r,
  AMt as i,
  Amn as a,
  BS as o,
  CW as s,
  Cpn as c,
  D3t as ee,
  Dc as l,
  Dht as u,
  Eht as d,
  F3t as f,
  FSt as p,
  Gxt as te,
  Hu as m,
  JS as ne,
  Jrt as h,
  MSt as g,
  N3t as re,
  NSt as _,
  O3t as ie,
  Opn as ae,
  PSt as oe,
  QXt as v,
  Qu as y,
  Rc as se,
  S3t as ce,
  SJt as b,
  Spn as x,
  TJt as S,
  TW as C,
  Trn as w,
  Uxt as T,
  VS as E,
  Vu as le,
  Wxt as D,
  XS as O,
  Xrt as ue,
  Xu as k,
  Yrt as A,
  Zu as j,
  _mn as M,
  a3t as de,
  aG as fe,
  aYt as N,
  ax as P,
  d3t as pe,
  dbt as F,
  eit as I,
  gmn as L,
  hmn as R,
  iit as z,
  jG as B,
  jSt as V,
  jXt as me,
  kG as H,
  kMt as U,
  kXt as W,
  kht as G,
  kmn as K,
  krn as he,
  lG as ge,
  nZt as _e,
  nit as ve,
  o3t as q,
  ox as J,
  pbt as ye,
  qu as be,
  rit as Y,
  rq as X,
  rrn as xe,
  s3t as Se,
  sG as Ce,
  sSt as we,
  sYt as Te,
  tit as Ee,
  uG as De,
  uSt as Oe,
  ubt as ke,
  uq as Ae,
  wJt as je,
  xJt as Me,
  xSt as Ne,
  xpn as Pe,
  ySt as Fe,
} from "./app-initial-f094ef01c64d.js";
import { G_ as Ie, Mw as Le, Y_ as Re, jw as ze } from "./app-primary-4c40d73a1074.js";
import { o as Be, r as Ve } from "./session-c33967fa604f.js";
function He(e) {
  let t = (0, Ke.c)(69),
    {
      accessToken: n,
      contactPoint: i,
      contactPointKind: a,
      onClose: o,
      onDeleted: ee,
      onRefreshLogin: l,
    } = e,
    u = r(de),
    d = ae(),
    [f, p] = (0, qe.useState)(``),
    [m, ne] = (0, qe.useState)(``),
    [g, re] = (0, qe.useState)(!1),
    _;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = { enabled: !0 }), (t[0] = _))
    : (_ = t[0]);
  let { data: ie, isLoading: oe } = se(_),
    v;
  t[1] === ie ? (v = t[2]) : ((v = Ie(ie)), (t[1] = ie), (t[2] = v));
  let y = v,
    ce;
  t[3] === d
    ? (ce = t[4])
    : ((ce = d.formatMessage({
        id: `settings.chatGpt.account.deletion.confirmation.keyword`,
        defaultMessage: `DELETE`,
        description: `Exact confirmation keyword in the ChatGPT account-deletion dialog. The user must type this uppercase word before the destructive action becomes available. Short keyword with no placeholders.`,
      })),
      (t[3] = d),
      (t[4] = ce));
  let b = ce,
    x;
  t[5] !== n || t[6] !== g
    ? ((x = !g && n != null && We(n)), (t[5] = n), (t[6] = g), (t[7] = x))
    : (x = t[7]);
  let S = x,
    C;
  t[8] !== i || t[9] !== f || t[10] !== m || t[11] !== b || t[12] !== oe || t[13] !== S
    ? ((C = S && !oe && m.trim() === b && (i == null || f.toLowerCase() === i.toLowerCase())),
      (t[8] = i),
      (t[9] = f),
      (t[10] = m),
      (t[11] = b),
      (t[12] = oe),
      (t[13] = S),
      (t[14] = C))
    : (C = t[14]);
  let w = C,
    T;
  t[15] !== ee || t[16] !== u
    ? ((T = async () => {
        (u.get(_e).logEventWithStatsig?.(`chatgpt_account_deactivated`), await te(), await ee());
      }),
      (t[15] = ee),
      (t[16] = u),
      (t[17] = T))
    : (T = t[17]);
  let E;
  t[18] !== d || t[19] !== u
    ? ((E = (e) => {
        u.get(me).warning(Ge(e, d));
      }),
      (t[18] = d),
      (t[19] = u),
      (t[20] = E))
    : (E = t[20]);
  let le;
  t[21] !== T || t[22] !== E
    ? ((le = { mutationFn: T, onError: E }), (t[21] = T), (t[22] = E), (t[23] = le))
    : (le = t[23]);
  let D = pe(le),
    O;
  t[24] === o ? (O = t[25]) : ((O = (e) => !e && o()), (t[24] = o), (t[25] = O));
  let k;
  t[26] !== n || t[27] !== w || t[28] !== D
    ? ((k = (e) => {
        if ((e.preventDefault(), !(!w || D.isPending))) {
          if (n == null || !We(n)) {
            re(!0);
            return;
          }
          D.mutate();
        }
      }),
      (t[26] = n),
      (t[27] = w),
      (t[28] = D),
      (t[29] = k))
    : (k = t[29]);
  let j;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Z.jsx)(ue, {
        title: (0, Z.jsx)(Y, {
          children: (0, Z.jsx)(c, {
            id: `settings.chatGpt.account.deletion.confirmation.title`,
            defaultMessage: `Delete account—are you sure?`,
            description: `Title of the final confirmation dialog opened from ChatGPT Account settings before a personal account is permanently deleted. Urgent destructive-action heading with no placeholders.`,
          }),
        }),
      })),
      (t[30] = j))
    : (j = t[30]);
  let M, fe, N, P;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Z.jsx)(`li`, {
        children: (0, Z.jsx)(c, {
          id: `settings.chatGpt.account.deletion.confirmation.warning.permanent`,
          defaultMessage: `Deleting your account is permanent and cannot be undone`,
          description: `Warning in the ChatGPT account-deletion confirmation dialog. It tells a personal-account user that deletion is irreversible. One concise list item with no placeholders.`,
        }),
      })),
      (fe = (0, Z.jsx)(`li`, {
        children: (0, Z.jsx)(c, {
          id: `settings.chatGpt.account.deletion.confirmation.warning.services`,
          defaultMessage: `You will lose access to OpenAI services, including ChatGPT and the API`,
          description: `Warning in the ChatGPT account-deletion confirmation dialog. It tells a personal-account user that deleting the account ends access across OpenAI services, not only the current app. One concise list item with no placeholders.`,
        }),
      })),
      (N = (0, Z.jsx)(`li`, {
        children: (0, Z.jsx)(c, {
          id: `settings.chatGpt.account.deletion.confirmation.warning.reuse`,
          defaultMessage: `You cannot create a new account using the same email address`,
          description: `Warning in the ChatGPT account-deletion confirmation dialog. It tells a personal-account user that the same email address cannot be reused for a new account. One concise list item with no placeholders.`,
        }),
      })),
      (P = (0, Z.jsx)(`li`, {
        children: (0, Z.jsx)(c, {
          id: `settings.chatGpt.account.deletion.confirmation.warning.retention`,
          defaultMessage: `Your data will be deleted within 30 days, except for limited data we may keep longer where required or permitted by law`,
          description: `Warning in the ChatGPT account-deletion confirmation dialog. It explains the normal data-deletion period and the narrow legal-retention exception. One concise list item with no placeholders.`,
        }),
      })),
      (t[31] = M),
      (t[32] = fe),
      (t[33] = N),
      (t[34] = P))
    : ((M = t[31]), (fe = t[32]), (N = t[33]), (P = t[34]));
  let F;
  t[35] === y
    ? (F = t[36])
    : ((F =
        y === `ios`
          ? (0, Z.jsx)(`li`, {
              children: (0, Z.jsx)(c, {
                id: `settings.chatGpt.account.deletion.confirmation.warning.subscription.ios`,
                defaultMessage: `You will need to cancel your in-app purchase subscription in the Apple App Store. We cannot cancel your subscription for you.`,
                description: `Warning in the ChatGPT account-deletion confirmation dialog for a user whose active subscription was purchased through an Apple app. It explains that deleting the account does not cancel App Store billing and that the user must cancel the subscription separately. Two concise sentences with no placeholders.`,
              }),
            })
          : null),
      (t[35] = y),
      (t[36] = F));
  let I;
  t[37] === y
    ? (I = t[38])
    : ((I =
        y === `android`
          ? (0, Z.jsx)(`li`, {
              children: (0, Z.jsx)(c, {
                id: `settings.chatGpt.account.deletion.confirmation.warning.subscription.android`,
                defaultMessage: `You will need to cancel your in-app purchase subscription in the Google Play Store. We cannot cancel your subscription for you.`,
                description: `Warning in the ChatGPT account-deletion confirmation dialog for a user whose active subscription was purchased through the Google Play Store. It explains that deleting the account does not cancel Google Play billing and that the user must cancel the subscription separately. Two concise sentences with no placeholders.`,
              }),
            })
          : null),
      (t[37] = y),
      (t[38] = I));
  let L;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Z.jsx)(`li`, {
        children: (0, Z.jsx)(c, {
          id: `settings.chatGpt.account.deletion.confirmation.help`,
          defaultMessage: `Read our <article>help center article</article> for more information`,
          description: `Help link in the ChatGPT account-deletion confirmation dialog. The article tag wraps the linked words that open OpenAI's account-deletion help article in the system browser. One concise sentence.`,
          values: { article: Ue },
        }),
      })),
      (t[39] = L))
    : (L = t[39]);
  let R;
  t[40] !== F || t[41] !== I
    ? ((R = (0, Z.jsx)(ve, {
        asChild: !0,
        children: (0, Z.jsxs)(`ul`, {
          className: `flex list-disc flex-col gap-1 ps-5 text-sm text-secondary select-text`,
          children: [M, fe, N, P, F, I, L],
        }),
      })),
      (t[40] = F),
      (t[41] = I),
      (t[42] = R))
    : (R = t[42]);
  let z;
  t[43] !== i || t[44] !== f || t[45] !== a || t[46] !== m || t[47] !== b || t[48] !== S
    ? ((z = S
        ? (0, Z.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [
              i == null
                ? null
                : (0, Z.jsxs)(`label`, {
                    className: `flex flex-col gap-1 text-sm font-medium`,
                    children: [
                      a === `email`
                        ? (0, Z.jsx)(c, {
                            id: `settings.chatGpt.account.deletion.confirmation.contact.email.label`,
                            defaultMessage: `Please type your account email`,
                            description: `Label above the email confirmation field in the ChatGPT account-deletion dialog. The user must enter the current personal account's email address. Short form label with no placeholders.`,
                          })
                        : (0, Z.jsx)(c, {
                            id: `settings.chatGpt.account.deletion.confirmation.contact.phone.label`,
                            defaultMessage: `Please type your account phone number`,
                            description: `Label above the phone-number confirmation field in the ChatGPT account-deletion dialog. It appears for a personal account without an email address, and the user must enter the current account's phone number. Short form label with no placeholders.`,
                          }),
                      (0, Z.jsx)(s, {
                        autoComplete: `off`,
                        name: `account-contact-point`,
                        placeholder: i,
                        value: f,
                        onChange: (e) => p(e.currentTarget.value),
                      }),
                    ],
                  }),
              (0, Z.jsxs)(`label`, {
                className: `flex flex-col gap-1 text-sm font-medium`,
                children: [
                  (0, Z.jsx)(c, {
                    id: `settings.chatGpt.account.deletion.confirmation.keyword.label`,
                    defaultMessage: `To proceed, type "{keyword}" below`,
                    description: `Label above the keyword confirmation field in the ChatGPT account-deletion dialog. Placeholder {keyword} is the localized uppercase confirmation keyword the user must type exactly. Short form label.`,
                    values: { keyword: b },
                  }),
                  (0, Z.jsx)(s, {
                    autoComplete: `off`,
                    name: `delete-confirmation`,
                    value: m,
                    onChange: (e) => ne(e.currentTarget.value),
                  }),
                ],
              }),
            ],
          })
        : (0, Z.jsx)(`p`, {
            className: `text-sm text-secondary`,
            children: (0, Z.jsx)(c, {
              id: `settings.chatGpt.account.deletion.confirmation.login_expired.description`,
              defaultMessage: `You may only delete your account if you logged in within the last 10 minutes. Refresh your login, then return here to continue`,
              description: `Body text in the ChatGPT account-deletion confirmation dialog when the user's login is older than 10 minutes. It explains why confirmation fields are hidden and tells the user to authenticate again. Urgent but reassuring text with no placeholders.`,
            }),
          })),
      (t[43] = i),
      (t[44] = f),
      (t[45] = a),
      (t[46] = m),
      (t[47] = b),
      (t[48] = S),
      (t[49] = z))
    : (z = t[49]);
  let B;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Z.jsx)(c, {
        id: `settings.chatGpt.account.deletion.confirmation.button.cancel`,
        defaultMessage: `Cancel`,
        description: `Secondary button in the ChatGPT account-deletion confirmation dialog. It closes the dialog without changing or deleting the account. Short button label with no placeholders.`,
      })),
      (t[50] = B))
    : (B = t[50]);
  let V;
  t[51] === o
    ? (V = t[52])
    : ((V = (0, Z.jsx)(U, { color: `secondary`, type: `button`, onClick: o, children: B })),
      (t[51] = o),
      (t[52] = V));
  let H;
  t[53] !== w || t[54] !== D || t[55] !== S || t[56] !== l
    ? ((H = S
        ? (0, Z.jsx)(U, {
            color: w ? `danger` : `secondary`,
            disabled: !w || D.isPending,
            loading: D.isPending,
            type: `submit`,
            children: w
              ? (0, Z.jsx)(c, {
                  id: `settings.chatGpt.account.deletion.confirmation.button.confirm`,
                  defaultMessage: `Permanently delete my account`,
                  description: `Final destructive button in the ChatGPT account-deletion confirmation dialog. It becomes available only after the user enters the required account identifier and confirmation keyword. Concise button label with no placeholders.`,
                })
              : (0, Z.jsx)(c, {
                  id: `settings.chatGpt.account.deletion.confirmation.button.locked`,
                  defaultMessage: `Locked`,
                  description: `Disabled final-action button in the ChatGPT account-deletion confirmation dialog. It indicates that the required account identifier and confirmation keyword have not yet been entered correctly. Very short button label with no placeholders.`,
                }),
          })
        : (0, Z.jsx)(U, {
            color: `primary`,
            type: `button`,
            onClick: l,
            children: (0, Z.jsx)(c, {
              id: `settings.chatGpt.account.deletion.confirmation.button.refresh_login`,
              defaultMessage: `Refresh login`,
              description: `Primary button in the ChatGPT account-deletion confirmation dialog when the current login is older than 10 minutes. It starts sign-out so the user can authenticate again before returning to delete the account. Short button label with no placeholders.`,
            }),
          })),
      (t[53] = w),
      (t[54] = D),
      (t[55] = S),
      (t[56] = l),
      (t[57] = H))
    : (H = t[57]);
  let W;
  t[58] !== V || t[59] !== H
    ? ((W = (0, Z.jsxs)(A, { children: [V, H] })), (t[58] = V), (t[59] = H), (t[60] = W))
    : (W = t[60]);
  let G;
  t[61] !== k || t[62] !== R || t[63] !== z || t[64] !== W
    ? ((G = (0, Z.jsxs)(h, { as: `form`, onSubmit: k, children: [j, R, z, W] })),
      (t[61] = k),
      (t[62] = R),
      (t[63] = z),
      (t[64] = W),
      (t[65] = G))
    : (G = t[65]);
  let K;
  return (
    t[66] !== G || t[67] !== O
      ? ((K = (0, Z.jsx)(Ee, { open: !0, onOpenChange: O, children: G })),
        (t[66] = G),
        (t[67] = O),
        (t[68] = K))
      : (K = t[68]),
    K
  );
}
function Ue(e) {
  return (0, Z.jsx)(
    H,
    {
      href: `https://help.openai.com/en/articles/6378407-how-to-delete-your-account`,
      initiator: `open_in_browser_bridge`,
      openTarget: `external-browser`,
      children: e,
    },
    `article`,
  );
}
function We(e, t = Date.now()) {
  let n = p(e)?.issuedAt;
  return n == null || t - n * 1e3 < Je;
}
function Ge(e, t) {
  if (e instanceof b && e.status === 403 && e.errorCode === Xe)
    return t.formatMessage({
      id: `settings.chatGpt.account.deletion.toast.error.scim_managed`,
      defaultMessage: `Your account is managed by your organization. Contact your IT team to delete it`,
      description: `Warning toast after a SCIM-managed user tries to delete their ChatGPT account. It explains that organization-managed accounts must be deleted with help from the user's IT team. Concise error with no placeholders.`,
    });
  if (e instanceof b && e.status === 403 && e.errorCode === Ye) {
    try {
      let n = Ze.safeParse(JSON.parse(e.message)),
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
var Ke,
  qe,
  Z,
  Je,
  Ye,
  Xe,
  Ze,
  Qe = e(() => {
    ((Ke = K()),
      Se(),
      ie(),
      (qe = t(a(), 1)),
      x(),
      xe(),
      g(),
      Oe(),
      i(),
      z(),
      I(),
      B(),
      C(),
      W(),
      Re(),
      l(),
      v(),
      q(),
      Me(),
      (Z = R()),
      (Je = 600 * 1e3),
      (Ye = `business_workspace_owner_account_deletion_forbidden`),
      (Xe = `scim_managed_account_deletion_forbidden`),
      (Ze = w({ detail: w({ workspace_name: he().min(1).optional() }).optional() })));
  });
function $e(e, t = new Date()) {
  let n = /^(\d{2})\s*\/\s*(\d{2})\s*\/\s*(\d{4})$/.exec(e);
  if (!n) return null;
  let [, r, i, a] = n,
    o = `${a}-${r}-${i}`,
    s = new Date(`${o}T00:00:00.000Z`);
  if (
    Number.isNaN(s.getTime()) ||
    s.getUTCFullYear() !== Number(a) ||
    s.getUTCMonth() + 1 !== Number(r) ||
    s.getUTCDate() !== Number(i) ||
    s > t
  )
    return null;
  let c = t.getUTCFullYear() - s.getUTCFullYear();
  return (
    (t.getUTCMonth() < s.getUTCMonth() ||
      (t.getUTCMonth() === s.getUTCMonth() && t.getUTCDate() < s.getUTCDate())) &&
      --c,
    c >= 0 && c < 150 ? o : null
  );
}
function et(e) {
  let t = e.replace(/\D/g, ``).slice(0, 8);
  return /^\s*\d{4}[-/]\d{2}[-/]\d{2}\s*$/.test(e)
    ? `${t.slice(4, 6)} / ${t.slice(6, 8)} / ${t.slice(0, 4)}`
    : [t.slice(0, 2), t.slice(2, 4), t.slice(4, 8)].filter((e) => e.length > 0).join(` / `);
}
function tt(e) {
  let [t, n, r] = e.split(`-`);
  return `${n}/${r}/${t}`;
}
var nt = e(() => {});
function rt({ accountId: e, onComplete: n, onCancel: r, onError: i }) {
  let a = !1,
    o = null,
    s = () => {
      ((a = !0), o?.destroy(), (o = null));
    };
  return (
    Promise.all([
      L(
        () => import(`./persona-77b058e71ca5.js`).then((e) => t(e.default, 1)),
        __vite__mapDeps([0, 1]),
        import.meta.url,
      ),
      D(e),
    ])
      .then(([{ default: e }, t]) => {
        a ||
          (o = new e.Client({
            inquiryId: t.id,
            onReady: () => {
              a || o?.open();
            },
            onComplete: () => {
              a || (s(), n());
            },
            onCancel: () => {
              a || (s(), r());
            },
            onError: () => {
              a || (s(), i());
            },
          }));
      })
      .catch(() => {
        a || (s(), i());
      }),
    s
  );
}
var it = e(() => {
  (Oe(), M());
});
function at() {
  let e = (0, lt.c)(3),
    t = f(d),
    n = Te(`2444205802`),
    r = Te(`408981619`);
  if ((!n && !r) || t == null) return null;
  let i;
  return (
    e[0] !== t || e[1] !== n
      ? ((i = (0, Q.jsx)(ot, { fullSetting: n }, t)), (e[0] = t), (e[1] = n), (e[2] = i))
      : (i = e[2]),
    i
  );
}
function ot(e) {
  let t = (0, lt.c)(87),
    { fullSetting: i } = e,
    a = r(de),
    o = ae(),
    l = ee(),
    p = f(d),
    { data: te, isError: m } = f(u),
    ne;
  t[0] === p ? (ne = t[1]) : ((ne = [`chatgpt-age-status`, p]), (t[0] = p), (t[1] = ne));
  let h = ne,
    g;
  t[2] === p ? (g = t[3]) : ((g = () => n(p)), (t[2] = p), (t[3] = g));
  let re;
  t[4] !== h || t[5] !== g
    ? ((re = { queryKey: h, queryFn: g, staleTime: je.ONE_MINUTE }),
      (t[4] = h),
      (t[5] = g),
      (t[6] = re))
    : (re = t[6]);
  let { data: _, isError: ie } = ce(re),
    [oe, v] = (0, ut.useState)(!1),
    [y, se] = (0, ut.useState)(``),
    [b, x] = (0, ut.useState)(`idle`),
    S = (0, ut.useRef)(null),
    C = (0, ut.useId)(),
    w = (0, ut.useId)(),
    E = te?.birthday,
    le;
  t[7] === y ? (le = t[8]) : ((le = $e(y)), (t[7] = y), (t[8] = le));
  let D = le,
    O;
  t[9] !== y || t[10] !== D
    ? ((O = y.replace(/\D/g, ``).length === 8 && D == null), (t[9] = y), (t[10] = D), (t[11] = O))
    : (O = t[11]);
  let ue = O,
    k = _?.has_verified_age_or_dob === !0,
    A = (!k && _?.is_adult === !1) || _?.show_age_verification_setting === !0,
    j =
      (!k && _?.is_adult === !1 && _.is_u18_model_policy_enabled === !0) ||
      _?.show_age_verification_setting === !0,
    M,
    N;
  (t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = () => () => S.current?.()), (N = []), (t[12] = M), (t[13] = N))
    : ((M = t[12]), (N = t[13])),
    (0, ut.useEffect)(M, N));
  let P;
  t[14] !== p || t[15] !== h || t[16] !== l || t[17] !== a
    ? ((P = async (e) => {
        let t = a.query.snapshot(u);
        (await Fe({ accountId: p ?? void 0, feature: `birthday`, value: e }),
          t.setData((t) => (t == null ? t : { ...t, birthday: e })),
          l.invalidateQueries({ queryKey: h }));
      }),
      (t[14] = p),
      (t[15] = h),
      (t[16] = l),
      (t[17] = a),
      (t[18] = P))
    : (P = t[18]);
  let F, I;
  t[19] !== o || t[20] !== a
    ? ((I = () => {
        (v(!1),
          a.get(me).success(
            o.formatMessage({
              id: `settings.chatGpt.birthday.updated`,
              defaultMessage: `You updated your date of birth`,
              description: `Success toast after a new birthday was saved to the ChatGPT account`,
            }),
          ));
      }),
      (F = () =>
        a.get(me).danger(
          o.formatMessage({
            id: `settings.chatGpt.birthday.updateError`,
            defaultMessage: `Could not update your date of birth`,
            description: `Error toast after a new birthday could not be saved; the form stays open to retry`,
          }),
        )),
      (t[19] = o),
      (t[20] = a),
      (t[21] = F),
      (t[22] = I))
    : ((F = t[21]), (I = t[22]));
  let L;
  t[23] !== F || t[24] !== P || t[25] !== I
    ? ((L = { mutationFn: P, onSuccess: I, onError: F }),
      (t[23] = F),
      (t[24] = P),
      (t[25] = I),
      (t[26] = L))
    : (L = t[26]);
  let R = pe(L),
    z;
  t[27] !== p || t[28] !== h || t[29] !== l || t[30] !== a
    ? ((z = async () => {
        let e = a.query.snapshot(u);
        await T(p).finally(() =>
          Promise.all([
            e.invalidate(void 0, { throwOnError: !0 }),
            l.invalidateQueries({ queryKey: h }, { throwOnError: !0 }),
          ]),
        );
      }),
      (t[27] = p),
      (t[28] = h),
      (t[29] = l),
      (t[30] = a),
      (t[31] = z))
    : (z = t[31]);
  let B;
  t[32] !== o || t[33] !== a
    ? ((B = () =>
        a.get(me).danger(
          o.formatMessage({
            id: `settings.chatGpt.birthday.refreshError`,
            defaultMessage: `Age verification finished, but we couldn't refresh your settings. Please try refreshing again.`,
            description: `Error toast when Persona completed but clearing the age status cache or reloading settings failed; verification remains pending and a Retry refresh button is available`,
          }),
        )),
      (t[32] = o),
      (t[33] = a),
      (t[34] = B))
    : (B = t[34]);
  let V;
  t[35] !== z || t[36] !== B
    ? ((V = { mutationFn: z, onError: B }), (t[35] = z), (t[36] = B), (t[37] = V))
    : (V = t[37]);
  let H = pe(V),
    W;
  t[38] !== p || t[39] !== o || t[40] !== H || t[41] !== a
    ? ((W = function () {
        S.current != null ||
          p == null ||
          (v(!1),
          x(`active`),
          (S.current = rt({
            accountId: p,
            onComplete: () => {
              ((S.current = null), x(`pending`), H.mutate());
            },
            onCancel: () => {
              ((S.current = null), x(`idle`));
            },
            onError: () => {
              ((S.current = null),
                x(`idle`),
                a.get(me).danger(
                  o.formatMessage({
                    id: `settings.chatGpt.birthday.verificationError`,
                    defaultMessage: `Could not start age verification. Please try again.`,
                    description: `Error toast when the Persona inquiry or verification client fails; the user can retry Verify age`,
                  }),
                ));
            },
          })));
      }),
      (t[38] = p),
      (t[39] = o),
      (t[40] = H),
      (t[41] = a),
      (t[42] = W))
    : (W = t[42]);
  let G = W;
  if (!i && !j) return null;
  if (b === `pending`) {
    let e, n;
    t[43] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(c, { ...dt.birthday })),
        (n = (0, Q.jsx)(c, {
          id: `settings.chatGpt.birthday.pendingDescription`,
          defaultMessage: `Your age is verified and will update soon`,
          description: `Explanation of the pending date of birth status after Persona completes, while the update propagates`,
        })),
        (t[43] = e),
        (t[44] = n))
      : ((e = t[43]), (n = t[44]));
    let r;
    t[45] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(`span`, {
          role: `status`,
          children: (0, Q.jsx)(c, {
            id: `settings.chatGpt.birthday.pending`,
            defaultMessage: `Pending`,
            description: `Read-only date of birth status after Persona completes, while the verified age update propagates`,
          }),
        })),
        (t[45] = r))
      : (r = t[45]);
    let i;
    t[46] === H
      ? (i = t[47])
      : ((i = H.isError
          ? (0, Q.jsx)(U, {
              color: `secondary`,
              size: `toolbar`,
              onClick: () => H.mutate(),
              children: (0, Q.jsx)(c, {
                id: `settings.chatGpt.birthday.retryRefresh`,
                defaultMessage: `Retry refresh`,
                description: `Button beside Pending when refreshing ChatGPT's age status failed after Persona completed; retries the refresh without starting another verification`,
              }),
            })
          : null),
        (t[46] = H),
        (t[47] = i));
    let a;
    return (
      t[48] === i
        ? (a = t[49])
        : ((a = (0, Q.jsx)(be, {
            label: e,
            description: n,
            control: (0, Q.jsxs)(Q.Fragment, { children: [r, i] }),
          })),
          (t[48] = i),
          (t[49] = a)),
      a
    );
  }
  if (m || ie) {
    let e;
    t[50] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(c, { ...dt.birthday })), (t[50] = e))
      : (e = t[50]);
    let n;
    t[51] !== h || t[52] !== l || t[53] !== a.query
      ? ((n = () => {
          Promise.all([a.query.snapshot(u).invalidate(), l.invalidateQueries({ queryKey: h })]);
        }),
        (t[51] = h),
        (t[52] = l),
        (t[53] = a.query),
        (t[54] = n))
      : (n = t[54]);
    let r;
    t[55] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(c, {
          id: `settings.chatGpt.birthday.retry`,
          defaultMessage: `Retry loading`,
          description: `Button in the ChatGPT date of birth setting after settings or age status failed to load; retries both reads`,
        })),
        (t[55] = r))
      : (r = t[55]);
    let i;
    return (
      t[56] === n
        ? (i = t[57])
        : ((i = (0, Q.jsx)(be, {
            label: e,
            control: (0, Q.jsx)(U, {
              color: `secondary`,
              size: `toolbar`,
              onClick: n,
              children: r,
            }),
          })),
          (t[56] = n),
          (t[57] = i)),
      i
    );
  }
  if (te == null || _ == null) return null;
  let K = b === `active`,
    he = b === `active`,
    _e;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, Q.jsx)(c, { ...dt.verify })), (t[58] = _e))
    : (_e = t[58]);
  let ve;
  t[59] !== K || t[60] !== he || t[61] !== G
    ? ((ve = (0, Q.jsx)(U, {
        color: `secondary`,
        size: `toolbar`,
        disabled: K,
        loading: he,
        onClick: G,
        children: _e,
      })),
      (t[59] = K),
      (t[60] = he),
      (t[61] = G),
      (t[62] = ve))
    : (ve = t[62]);
  let q = ve;
  if (A) {
    let e;
    t[63] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(c, {
          id: `settings.chatGpt.birthday.ageVerification`,
          defaultMessage: `Age verification`,
          description: `Account settings label for users who need age verification to access age-appropriate ChatGPT settings`,
        })),
        (t[63] = e))
      : (e = t[63]);
    let n;
    t[64] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(c, {
          id: `settings.chatGpt.birthday.verificationDescription`,
          defaultMessage: `To help keep ChatGPT appropriate for everyone, some settings require age verification. <learnMore>Learn more</learnMore>`,
          description: `Explanation beside Verify age in ChatGPT account settings; learnMore links to the age verification help article`,
          values: { learnMore: ct },
        })),
        (t[64] = n))
      : (n = t[64]);
    let r;
    return (
      t[65] === q
        ? (r = t[66])
        : ((r = (0, Q.jsx)(be, { label: e, description: n, control: q })),
          (t[65] = q),
          (t[66] = r)),
      r
    );
  }
  let J;
  t[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, Q.jsx)(c, { ...dt.birthday })), (t[67] = J))
    : (J = t[67]);
  let ye = _.is_adult === !1 ? `yes` : `no`,
    Y;
  t[68] === ye
    ? (Y = t[69])
    : ((Y = (0, Q.jsx)(c, {
        id: `settings.chatGpt.birthday.description`,
        defaultMessage: `This helps us personalize your experience and {under18, select, yes {provide age-appropriate settings} other {provide the right settings}}, in line with our <privacy>Privacy Policy</privacy>`,
        description: `Explanation below the ChatGPT date of birth setting; under18 is yes for minors and no otherwise, and privacy links to OpenAI's Privacy Policy`,
        values: { under18: ye, privacy: st },
      })),
      (t[68] = ye),
      (t[69] = Y));
  let X;
  t[70] !== E ||
  t[71] !== w ||
  t[72] !== y ||
  t[73] !== C ||
  t[74] !== o ||
  t[75] !== ue ||
  t[76] !== D ||
  t[77] !== A ||
  t[78] !== oe ||
  t[79] !== R ||
  t[80] !== b ||
  t[81] !== k ||
  t[82] !== q
    ? ((X = k
        ? (0, Q.jsxs)(`span`, {
            className: `flex items-center gap-2 text-sm text-secondary`,
            children: [
              E ? (0, Q.jsx)(`span`, { children: tt(E) }) : null,
              (0, Q.jsx)(c, {
                id: `settings.chatGpt.birthday.verified`,
                defaultMessage: `Age verified`,
                description: `Read-only label next to a verified date of birth in ChatGPT account settings`,
              }),
            ],
          })
        : (0, Q.jsxs)(fe, {
            open: oe,
            onOpenChange: (e) => {
              R.isPending || (v(e), se(``));
            },
            children: [
              (0, Q.jsx)(ge, {
                asChild: !0,
                children: (0, Q.jsx)(U, {
                  color: `secondary`,
                  size: `toolbar`,
                  disabled: b === `active`,
                  loading: R.isPending || b === `active`,
                  children: E
                    ? tt(E)
                    : (0, Q.jsx)(c, {
                        id: `settings.chatGpt.birthday.add`,
                        defaultMessage: `Add`,
                        description: `Button to add a missing date of birth in ChatGPT account settings`,
                      }),
                }),
              }),
              (0, Q.jsx)(Ce, {
                align: `end`,
                children: E
                  ? (0, Q.jsxs)(`div`, {
                      className: `flex flex-col gap-4 select-none`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex flex-col gap-2`,
                          children: [
                            (0, Q.jsx)(`p`, {
                              className: `font-medium`,
                              children: (0, Q.jsx)(c, {
                                id: `settings.chatGpt.birthday.verifyTitle`,
                                defaultMessage: `Verify your age`,
                                description: `Heading in the date of birth popover when editing a saved birthday requires age verification`,
                              }),
                            }),
                            (0, Q.jsx)(`p`, {
                              className: `text-sm text-secondary`,
                              children: (0, Q.jsx)(c, {
                                id: `settings.chatGpt.birthday.verifyDescription`,
                                defaultMessage: `To make changes, we need to verify your age`,
                                description: `Explanation in the date of birth popover; saved birthdays cannot be directly replaced and require Persona verification`,
                              }),
                            }),
                          ],
                        }),
                        q,
                      ],
                    })
                  : (0, Q.jsxs)(`form`, {
                      className: `flex flex-col gap-4`,
                      onSubmit: (e) => {
                        e.preventDefault();
                        let t = $e(y);
                        t == null || E || k || A || R.isPending || R.mutate(t);
                      },
                      children: [
                        (0, Q.jsx)(`label`, {
                          htmlFor: C,
                          className: `select-none`,
                          children: (0, Q.jsx)(c, { ...dt.birthday }),
                        }),
                        (0, Q.jsx)(s, {
                          id: C,
                          autoFocus: !0,
                          name: `birthday`,
                          autoComplete: `bday`,
                          inputMode: `numeric`,
                          maxLength: 14,
                          placeholder: o.formatMessage({
                            id: `settings.chatGpt.birthday.placeholder`,
                            defaultMessage: `MM / DD / YYYY`,
                            description: `Date of birth input placeholder; input uses two-digit month, two-digit day, and four-digit year in that order`,
                          }),
                          value: y,
                          disabled: R.isPending,
                          "aria-invalid": ue,
                          "aria-describedby": ue ? w : void 0,
                          onChange: (e) => se(et(e.currentTarget.value)),
                        }),
                        ue
                          ? (0, Q.jsx)(`p`, {
                              id: w,
                              role: `alert`,
                              className: `text-sm text-danger`,
                              children: (0, Q.jsx)(c, {
                                id: `settings.chatGpt.birthday.invalid`,
                                defaultMessage: `Invalid birthdate`,
                                description: `Error below a new birthday input for impossible dates, future dates, or an age of 150 years or more`,
                              }),
                            })
                          : null,
                        (0, Q.jsxs)(`div`, {
                          className: `flex justify-end gap-2`,
                          children: [
                            (0, Q.jsx)(U, {
                              type: `button`,
                              color: `secondary`,
                              size: `toolbar`,
                              disabled: R.isPending,
                              onClick: () => v(!1),
                              children: (0, Q.jsx)(c, {
                                id: `settings.chatGpt.birthday.cancel`,
                                defaultMessage: `Cancel`,
                                description: `Button to discard a new birthday draft without saving it`,
                              }),
                            }),
                            (0, Q.jsx)(U, {
                              type: `submit`,
                              color: `primary`,
                              size: `toolbar`,
                              disabled: D == null || R.isPending,
                              loading: R.isPending,
                              children: (0, Q.jsx)(c, {
                                id: `settings.chatGpt.birthday.confirm`,
                                defaultMessage: `Confirm`,
                                description: `Button to submit a valid new date of birth in ChatGPT account settings`,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
              }),
            ],
          })),
      (t[70] = E),
      (t[71] = w),
      (t[72] = y),
      (t[73] = C),
      (t[74] = o),
      (t[75] = ue),
      (t[76] = D),
      (t[77] = A),
      (t[78] = oe),
      (t[79] = R),
      (t[80] = b),
      (t[81] = k),
      (t[82] = q),
      (t[83] = X))
    : (X = t[83]);
  let xe;
  return (
    t[84] !== Y || t[85] !== X
      ? ((xe = (0, Q.jsx)(be, { label: J, description: Y, control: X })),
        (t[84] = Y),
        (t[85] = X),
        (t[86] = xe))
      : (xe = t[86]),
    xe
  );
}
function st(e) {
  return (0, Q.jsx)(
    H,
    {
      initiator: `open_in_browser_bridge`,
      href: `https://openai.com/policies/privacy-policy/`,
      children: e,
    },
    `privacy`,
  );
}
function ct(e) {
  return (0, Q.jsx)(
    H,
    {
      initiator: `open_in_browser_bridge`,
      href: `https://help.openai.com/en/articles/12652064-age-verification`,
      children: e,
    },
    `learn-more`,
  );
}
var lt,
  ut,
  Q,
  dt,
  ft = e(() => {
    ((lt = K()),
      Se(),
      ie(),
      (ut = t(a(), 1)),
      x(),
      Oe(),
      G(),
      i(),
      B(),
      De(),
      C(),
      W(),
      q(),
      k(),
      N(),
      S(),
      nt(),
      it(),
      (Q = R()),
      (dt = Pe({
        birthday: {
          id: `settings.chatGpt.account.birthday`,
          defaultMessage: `Date of birth`,
          description: `Label for ChatGPT account date of birth`,
        },
        verify: {
          id: `settings.chatGpt.birthday.verify`,
          defaultMessage: `Verify age`,
          description: `Button in ChatGPT account settings to start Persona age verification`,
        },
      })));
  });
function pt() {
  let e = (0, ht.c)(61),
    t = r(de),
    n = ae(),
    i = F(),
    a = ye(),
    l = ee(),
    { data: u } = Ae(),
    d;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = { queryKey: [`browser-chatgpt-auth`], queryFn: _, staleTime: je.ONE_MINUTE }),
      (e[0] = d))
    : (d = e[0]);
  let { data: f, isLoading: p } = ce(d),
    te;
  e[1] !== i.accountId || e[2] !== i.userId
    ? ((te = { accountId: i.accountId, userId: i.userId }),
      (e[1] = i.accountId),
      (e[2] = i.userId),
      (e[3] = te))
    : (te = e[3]);
  let { data: m } = re(ze, te),
    h;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = { queryKey: [`chatgpt-user-profile`], queryFn: we, staleTime: je.ONE_MINUTE }),
      (e[4] = h))
    : (h = e[4]);
  let { data: g } = ce(h),
    [ie, v] = (0, gt.useState)(null),
    [y, se] = (0, gt.useState)(!1),
    b;
  e[5] === l
    ? (b = e[6])
    : ((b = async () => {
        (v(null), await l.invalidateQueries({ queryKey: [`chatgpt-current-user`] }));
      }),
      (e[5] = l),
      (e[6] = b));
  let x = pe({ mutationFn: Ne, onSuccess: b, onError: () => S() });
  function S() {
    t.get(me).danger(
      n.formatMessage({
        id: `settings.chatGpt.account.updateError`,
        defaultMessage: `Could not update account settings`,
        description: `Error toast when ChatGPT account settings cannot be updated`,
      }),
    );
  }
  let C;
  e[7] === a
    ? (C = e[8])
    : ((C = async function () {
        let e = await Be(() => P(a));
        if (e.ok) {
          window.location.replace(e.url);
          return;
        }
        (oe(), P(a), window.location.replace(V(`login`).toString()));
      }),
      (e[7] = a),
      (e[8] = C));
  let w = C,
    T = ie ?? m?.name ?? ``,
    E = m?.email ?? i.email,
    D;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, $.jsx)(o, { slug: `account` })), (e[9] = D))
    : (D = e[9]);
  let O;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, $.jsx)(j.Header, {
        title: (0, $.jsx)(c, {
          id: `settings.chatGpt.account.account`,
          defaultMessage: `Account`,
          description: `Heading for ChatGPT account settings`,
        }),
      })),
      (e[10] = O))
    : (O = e[10]);
  let ue;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, $.jsx)(c, {
        id: `settings.chatGpt.account.status`,
        defaultMessage: `Status`,
        description: `Label for ChatGPT account plan status`,
      })),
      (e[11] = ue))
    : (ue = e[11]);
  let k = i.planAtLogin ?? ``,
    A;
  e[12] === k
    ? (A = e[13])
    : ((A = (0, $.jsx)(be, {
        label: ue,
        control: (0, $.jsx)(`span`, { className: `text-sm text-secondary`, children: k }),
      })),
      (e[12] = k),
      (e[13] = A));
  let M;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsx)(c, {
        id: `settings.chatGpt.account.name`,
        defaultMessage: `Name`,
        description: `Label for ChatGPT account name`,
      })),
      (e[14] = M))
    : (M = e[14]);
  let fe = m == null,
    N;
  e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (e) => v(e.currentTarget.value)), (e[15] = N))
    : (N = e[15]);
  let I;
  e[16] !== T || e[17] !== fe
    ? ((I = (0, $.jsx)(s, { disabled: fe, value: T, onChange: N })),
      (e[16] = T),
      (e[17] = fe),
      (e[18] = I))
    : (I = e[18]);
  let L = m == null || ie == null || x.isPending,
    R;
  e[19] !== T || e[20] !== x
    ? ((R = () => x.mutate(T)), (e[19] = T), (e[20] = x), (e[21] = R))
    : (R = e[21]);
  let z;
  e[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, $.jsx)(c, {
        id: `settings.chatGpt.account.save`,
        defaultMessage: `Save`,
        description: `Button to save ChatGPT account details`,
      })),
      (e[22] = z))
    : (z = e[22]);
  let B;
  e[23] !== x.isPending || e[24] !== L || e[25] !== R
    ? ((B = (0, $.jsx)(U, {
        color: `secondary`,
        disabled: L,
        loading: x.isPending,
        size: `toolbar`,
        onClick: R,
        children: z,
      })),
      (e[23] = x.isPending),
      (e[24] = L),
      (e[25] = R),
      (e[26] = B))
    : (B = e[26]);
  let H;
  e[27] !== I || e[28] !== B
    ? ((H = (0, $.jsx)(be, {
        label: M,
        control: (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [I, B] }),
      })),
      (e[27] = I),
      (e[28] = B),
      (e[29] = H))
    : (H = e[29]);
  let W;
  e[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, $.jsx)(c, {
        id: `settings.chatGpt.account.username`,
        defaultMessage: `Username`,
        description: `Label for ChatGPT username`,
      })),
      (e[30] = W))
    : (W = e[30]);
  let G;
  e[31] === g
    ? (G = e[32])
    : ((G = g?.profile_details.username
        ? (0, $.jsx)(c, {
            id: `settings.chatGpt.account.usernameValue`,
            defaultMessage: `@{username}`,
            description: `Displayed ChatGPT username`,
            values: { username: g.profile_details.username },
          })
        : ``),
      (e[31] = g),
      (e[32] = G));
  let K;
  e[33] === G
    ? (K = e[34])
    : ((K = (0, $.jsx)(be, {
        label: W,
        control: (0, $.jsx)(`span`, { className: `text-sm text-secondary`, children: G }),
      })),
      (e[33] = G),
      (e[34] = K));
  let he;
  e[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, $.jsx)(c, {
        id: `settings.chatGpt.account.email`,
        defaultMessage: `Email`,
        description: `Label for ChatGPT account email`,
      })),
      (e[35] = he))
    : (he = e[35]);
  let ge = m?.email ?? i.email ?? ``,
    _e;
  e[36] === ge
    ? (_e = e[37])
    : ((_e = (0, $.jsx)(be, {
        label: he,
        control: (0, $.jsx)(`span`, { className: `text-sm text-secondary`, children: ge }),
      })),
      (e[36] = ge),
      (e[37] = _e));
  let ve;
  e[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, $.jsx)(at, {})), (e[38] = ve))
    : (ve = e[38]);
  let q;
  e[39] !== H || e[40] !== K || e[41] !== _e || e[42] !== A
    ? ((q = (0, $.jsxs)(j, {
        children: [
          O,
          (0, $.jsx)(j.Content, { children: (0, $.jsxs)(le, { children: [A, H, K, _e, ve] }) }),
        ],
      })),
      (e[39] = H),
      (e[40] = K),
      (e[41] = _e),
      (e[42] = A),
      (e[43] = q))
    : (q = e[43]);
  let J;
  e[44] === g
    ? (J = e[45])
    : ((J = g?.viewer_access.can_edit
        ? (0, $.jsxs)(j, {
            children: [
              (0, $.jsx)(j.Header, {
                title: (0, $.jsx)(c, {
                  id: `settings.chatGpt.account.builderProfile`,
                  defaultMessage: `GPT builder profile`,
                  description: `Heading for the ChatGPT GPT builder profile`,
                }),
              }),
              (0, $.jsx)(j.Content, {
                children: (0, $.jsx)(le, {
                  children: (0, $.jsx)(be, {
                    label: g.profile_details.display_name ?? g.profile_details.username ?? ``,
                    description: g.profile_details.username ?? void 0,
                    control: null,
                  }),
                }),
              }),
            ],
          })
        : null),
      (e[44] = g),
      (e[45] = J));
  let Y;
  e[46] !== u?.structure || e[47] !== p || e[48] !== m
    ? ((Y =
        u?.structure === `personal`
          ? (0, $.jsx)(j, {
              children: (0, $.jsx)(j.Content, {
                children: (0, $.jsx)(le, {
                  children: (0, $.jsx)(be, {
                    label: (0, $.jsx)(c, {
                      id: `settings.chatGpt.account.deletion.row.label`,
                      defaultMessage: `Delete account`,
                      description: `Label of the destructive account-deletion row at the bottom of ChatGPT Account settings. It is shown only for personal accounts. Short settings-row label with no placeholders.`,
                    }),
                    control: (0, $.jsx)(U, {
                      color: `danger`,
                      disabled: p || m == null,
                      size: `toolbar`,
                      onClick: () => se(!0),
                      children: (0, $.jsx)(c, {
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
      (e[46] = u?.structure),
      (e[47] = p),
      (e[48] = m),
      (e[49] = Y))
    : (Y = e[49]);
  let X;
  e[50] !== E || e[51] !== f?.accessToken || e[52] !== w || e[53] !== y || e[54] !== m?.phone_number
    ? ((X = y
        ? (0, $.jsx)(He, {
            accessToken: f?.accessToken ?? null,
            contactPoint: E ?? m?.phone_number ?? null,
            contactPointKind: E == null ? `phone` : `email`,
            onClose: () => se(!1),
            onDeleted: w,
            onRefreshLogin: mt,
          })
        : null),
      (e[50] = E),
      (e[51] = f?.accessToken),
      (e[52] = w),
      (e[53] = y),
      (e[54] = m?.phone_number),
      (e[55] = X))
    : (X = e[55]);
  let xe;
  return (
    e[56] !== q || e[57] !== J || e[58] !== Y || e[59] !== X
      ? ((xe = (0, $.jsxs)(ne, { title: D, children: [q, J, Y, X] })),
        (e[56] = q),
        (e[57] = J),
        (e[58] = Y),
        (e[59] = X),
        (e[60] = xe))
      : (xe = e[60]),
    xe
  );
}
function mt() {
  window.location.assign(V(`logout`).toString());
}
var ht, gt, $;
e(() => {
  ((ht = K()),
    Se(),
    ie(),
    (gt = t(a(), 1)),
    x(),
    g(),
    J(),
    ke(),
    Le(),
    Oe(),
    X(),
    i(),
    C(),
    W(),
    q(),
    O(),
    y(),
    k(),
    E(),
    m(),
    Ve(),
    S(),
    Qe(),
    ft(),
    ($ = R()));
})();
export { pt as ChatGptAccountSettings };
//# sourceMappingURL=account-settings-df083ac9d1a2.js.map
