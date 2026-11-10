const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-cffe9350c5f8.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./data-export-reauth.browser-8f8a52fbc27a.js",
      "./session-594d75fbcc25.js",
      "./logout-engine-3e5ca2b0809a.js",
      "./datadog-rum.browser-33db5871e35e.js",
      "./esm-8e4e46801569.js",
      "./datadogProfiler-4df79f82be1b.js",
      "./replayStats-8eb2b3f5a1de.js",
      "./route-d301b07bc046.js",
      "./availability-82a31f22db06.js",
      "./holdout-4d46c4ee3793.js",
      "./state-23139beafd87.js",
      "./settings-efd7d88712fc.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  B4 as n,
  BV as r,
  Cot as i,
  Ext as a,
  GE as o,
  IDt as s,
  Iot as c,
  Ixt as l,
  JC as u,
  Lot as d,
  MO as f,
  Mz as p,
  Nxt as m,
  Nz as h,
  Pxt as g,
  Rv as _,
  TJ as v,
  VDt as ee,
  Vxt as y,
  WE as b,
  Xot as x,
  Yot as S,
  _O as C,
  _xt as w,
  cO as te,
  fO as T,
  fPt as E,
  frt as D,
  gO as ne,
  hot as O,
  hrt as k,
  iw as A,
  jDt as j,
  jO as M,
  lO as re,
  lot as N,
  mO as ie,
  nst as ae,
  oO as oe,
  pPt as se,
  qC as ce,
  rst as P,
  sO as le,
  spt as ue,
  t3 as F,
  tst as de,
  tw as I,
  vO as L,
  vzt as R,
  wot as z,
  xMt as B,
  yzt as V,
  z4 as fe,
  zv as H,
  zxt as pe,
} from "./app-shared-bbfeca5e5737.js";
import {
  AMn as me,
  AMr as U,
  Der as he,
  Ek as ge,
  Fin as _e,
  G4n as ve,
  GMr as ye,
  Gan as be,
  Hin as xe,
  J4n as Se,
  JPn as Ce,
  KK as we,
  LDr as Te,
  NDr as Ee,
  OPr as W,
  Oer as De,
  TNr as Oe,
  Tk as ke,
  VR as Ae,
  WK as je,
  WMr as Me,
  XMr as Ne,
  XPn as Pe,
  XZn as Fe,
  YMr as G,
  Ymr as Ie,
  _F as Le,
  aOr as Re,
  con as ze,
  dMr as Be,
  eDr as Ve,
  eF as He,
  ehr as K,
  fMr as Ue,
  fur as We,
  hF as Ge,
  jDr as Ke,
  jMn as qe,
  jMr as Je,
  kPr as Ye,
  nDr as Xe,
  pOr as Ze,
  pur as Qe,
  son as q,
  tF as $e,
  tNr as et,
  tOr as tt,
  tPr as nt,
  wer as rt,
  xPn as it,
  yPn as at,
  yjn as ot,
  zOr as st,
  zR as ct,
} from "./app-initial-5851df3f6cb1.js";
import {
  $_ as lt,
  G_ as ut,
  K_ as dt,
  Q_ as ft,
  W_ as pt,
  Z_ as mt,
  q_ as ht,
} from "./app-primary-fe8a450b3b04.js";
import { n as gt, t as _t } from "./permission-state-4aa70d104061.js";
import { n as vt, t as yt } from "./permission-denied-dialog-c5cfd310fd6f.js";
import { n as bt, t as xt } from "./availability-82a31f22db06.js";
import { n as St, o as Ct, t as wt } from "./chatgpt-user-granular-consent-d4ea3e160b4c.js";
import { n as Tt, t as Et } from "./training-eligibility-query-95ed6976127a.js";
import { n as Dt, t as Ot } from "./complete-add.browser-7fce96e2170f.js";
import { n as kt } from "./dialog-a817897deff3.js";
import { r as At, t as jt } from "./dialog-7ca11e3d5620.js";
async function Mt() {
  return (
    await E(
      async () => {
        let { ClaudeImportDialog: e } = await import(`./dialog-cffe9350c5f8.js`);
        return { ClaudeImportDialog: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5]),
      import.meta.url,
    )
  ).ClaudeImportDialog;
}
function Nt() {
  return (Nt = e(() => {
    se();
  }))();
}
function Pt(e) {
  let n = (0, It.c)(58),
    { open: r, onOpenChange: a } = e,
    o = l(i),
    c = ee(),
    u = Qe(),
    f = ae(),
    p = (0, J.useRef)(null),
    m = (0, J.useRef)(null),
    h = (0, J.useRef)(null),
    g = (0, J.useRef)(null),
    [_, v] = (0, J.useState)(null),
    y,
    b;
  (n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = () => () => {
        p.current = null;
      }),
      (b = []),
      (n[0] = y),
      (n[1] = b))
    : ((y = n[0]), (b = n[1])),
    (0, J.useEffect)(y, b));
  let x;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = async function (e) {
        return p.current === e;
      }),
      (n[2] = x))
    : (x = n[2]);
  let S = x,
    w;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (e) =>
        Ft(
          e,
          () => S(e),
          () => p.current === e,
        )),
      (n[3] = w))
    : (w = n[3]);
  let T;
  n[4] !== c || n[5] !== a || n[6] !== o
    ? ((T = async (e, t) => {
        e !== `cancelled` &&
          (await S(t)) &&
          e !== `reauthenticating` &&
          ((p.current = null),
          a(!1),
          o
            .get(O)
            .success(
              c.formatMessage({
                id: `settings.chatGpt.dataControls.export.success`,
                defaultMessage: `Data export requested. You’ll receive an email when it’s ready.`,
                description: `Success toast after an end user requests a ChatGPT account data export from Data controls. The export is delivered later by email.`,
              }),
            ));
      }),
      (n[4] = c),
      (n[5] = a),
      (n[6] = o),
      (n[7] = T))
    : (T = n[7]);
  let E;
  n[8] !== c || n[9] !== o
    ? ((E = async (e, t) => {
        (await S(t)) &&
          (e instanceof k && e.errorCode,
          (p.current = null),
          e instanceof k && e.status === 409
            ? o
                .get(O)
                .danger(
                  c.formatMessage({
                    id: `settings.chatGpt.dataControls.export.conflictError`,
                    defaultMessage: `Your existing export is still being processed. You’ll receive an email when it’s ready.`,
                    description: `Warning shown when an end user requests another ChatGPT account data export while an earlier export is still processing.`,
                  }),
                  { errorAnalytics: { toastId: `settings.chatGpt.dataControls.export.conflictError` } },
                )
            : e instanceof k &&
                (e.status === 401 ||
                  e.errorCode === `reauth_required` ||
                  e.errorCode === `phone_verification_required`)
              ? o
                  .get(O)
                  .danger(
                    c.formatMessage({
                      id: `settings.chatGpt.dataControls.export.reauthError`,
                      defaultMessage: `Please sign in again, then retry your data export.`,
                      description: `Error toast shown when ChatGPT requires an end user to reauthenticate before requesting an account data export.`,
                    }),
                    { errorAnalytics: { toastId: `settings.chatGpt.dataControls.export.reauthError` } },
                  )
              : e instanceof k && e.errorCode === `email_required`
                ? o
                    .get(O)
                    .danger(
                      c.formatMessage({
                        id: `settings.chatGpt.dataControls.export.emailError`,
                        defaultMessage: `Add and verify an email address in ChatGPT before requesting an export.`,
                        description: `Error toast shown when a phone-only ChatGPT account must add and verify an email address before requesting an account data export.`,
                      }),
                      { errorAnalytics: { toastId: `settings.chatGpt.dataControls.export.emailError` } },
                    )
                : o
                    .get(O)
                    .danger(
                      c.formatMessage({
                        id: `settings.chatGpt.dataControls.export.error`,
                        defaultMessage: `Couldn’t request your data export. Please try again later.`,
                        description: `Error toast shown when a ChatGPT account data export request fails for an unspecified reason.`,
                      }),
                      { errorAnalytics: { toastId: `settings.chatGpt.dataControls.export.error` } },
                    ));
      }),
      (n[8] = c),
      (n[9] = o),
      (n[10] = E))
    : (E = n[10]);
  let D;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (e, t, n) => {
        m.current === n && (m.current = null);
      }),
      (n[11] = D))
    : (D = n[11]);
  let A;
  n[12] !== T || n[13] !== E
    ? ((A = { mutationFn: w, onSuccess: T, onError: E, onSettled: D }), (n[12] = T), (n[13] = E), (n[14] = A))
    : (A = n[14]);
  let j = d(A),
    M = j.isPending || j.data === `reauthenticating`,
    N;
  n[15] === j
    ? (N = n[16])
    : ((N = function (e) {
        p.current === e && m.current == null && ((m.current = e), j.mutate(e));
      }),
      (n[15] = j),
      (n[16] = N));
  let se = N,
    ce;
  n[17] === a
    ? (ce = n[18])
    : ((ce = function () {
        ((p.current = null), v(null), a(!1));
      }),
      (n[17] = a),
      (n[18] = ce));
  let P = ce,
    ue;
  n[19] !== P || n[20] !== _ || n[21] !== c || n[22] !== f || n[23] !== o || n[24] !== se
    ? ((ue = async function (e) {
        let t = _;
        if (t == null || p.current !== t || h.current === t) return;
        h.current = t;
        let n = !1;
        try {
          (await S(t)) &&
            (n = await Ot({ accountId: t.accountId, email: e, queryClient: f, userId: t.userId }));
        } catch {}
        if (!(await S(t))) {
          p.current === t && P();
          return;
        }
        if ((v(null), !n)) {
          ((p.current = null),
            o
              .get(O)
              .danger(
                c.formatMessage({
                  id: `settings.chatGpt.dataControls.export.emailRefreshError`,
                  defaultMessage: `Email verified. Sign in again, then retry your data export.`,
                  description: `Error after an end user verifies an email for ChatGPT data export but their browser account session cannot be refreshed.`,
                }),
                { errorAnalytics: { toastId: `settings.chatGpt.dataControls.export.emailRefreshError` } },
              ));
          return;
        }
        ((g.current = t), se(t));
      }),
      (n[19] = P),
      (n[20] = _),
      (n[21] = c),
      (n[22] = f),
      (n[23] = o),
      (n[24] = se),
      (n[25] = ue))
    : (ue = n[25]);
  let F = ue,
    de = r && _ == null,
    I;
  n[26] !== P || n[27] !== M
    ? ((I = (e) => {
        !e && !M && P();
      }),
      (n[26] = P),
      (n[27] = M),
      (n[28] = I))
    : (I = n[28]);
  let L;
  n[29] !== u || n[30] !== M || n[31] !== se
    ? ((L = (e) => {
        if ((e.preventDefault(), !M && m.current == null && u.userId != null && u.accountId != null)) {
          let e = { userId: u.userId, accountId: u.accountId };
          ((p.current = e), se(e));
        }
      }),
      (n[29] = u),
      (n[30] = M),
      (n[31] = se),
      (n[32] = L))
    : (L = n[32]);
  let R;
  n[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Y.jsx)(te, {
        title: (0, Y.jsx)(C, {
          children: (0, Y.jsx)(s, {
            id: `settings.chatGpt.dataControls.export.dialog.title`,
            defaultMessage: `Request data export?`,
            description: `Title of the confirmation dialog shown before an end user requests an export of their ChatGPT account data.`,
          }),
        }),
      })),
      (n[33] = R))
    : (R = n[33]);
  let z;
  n[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Y.jsx)(re, {
        children: (0, Y.jsx)(ne, {
          asChild: !0,
          children: (0, Y.jsxs)(`ul`, {
            className: `flex list-disc flex-col gap-1 ps-5 text-sm text-secondary`,
            children: [
              (0, Y.jsx)(`li`, {
                children: (0, Y.jsx)(s, {
                  id: `settings.chatGpt.dataControls.export.dialog.contents`,
                  defaultMessage: `Your account details and chats will be included.`,
                  description: `First item in the ChatGPT data export confirmation dialog. It explains what the account export contains.`,
                }),
              }),
              (0, Y.jsx)(`li`, {
                children: (0, Y.jsx)(s, {
                  id: `settings.chatGpt.dataControls.export.dialog.delivery`,
                  defaultMessage: `We’ll email a download link to your registered address.`,
                  description: `Second item in the ChatGPT data export confirmation dialog. It explains that the account export is delivered by email.`,
                }),
              }),
              (0, Y.jsx)(`li`, {
                children: (0, Y.jsx)(s, {
                  id: `settings.chatGpt.dataControls.export.dialog.expiration`,
                  defaultMessage: `The download link expires after 24 hours.`,
                  description: `Third item in the ChatGPT data export confirmation dialog. It tells an end user how long the emailed download link remains valid.`,
                }),
              }),
              (0, Y.jsx)(`li`, {
                children: (0, Y.jsx)(s, {
                  id: `settings.chatGpt.dataControls.export.dialog.processing`,
                  defaultMessage: `Processing may take some time.`,
                  description: `Final item in the ChatGPT data export confirmation dialog. It warns an end user that preparing the account export is asynchronous.`,
                }),
              }),
            ],
          }),
        }),
      })),
      (n[34] = z))
    : (z = n[34]);
  let B;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Y.jsx)(s, { id: `common.cancel`, defaultMessage: `Cancel`, description: `Cancel button` })),
      (n[35] = B))
    : (B = n[35]);
  let V;
  n[36] !== P || n[37] !== M
    ? ((V = (0, Y.jsx)(t, { color: `secondary`, disabled: M, type: `button`, onClick: P, children: B })),
      (n[36] = P),
      (n[37] = M),
      (n[38] = V))
    : (V = n[38]);
  let fe;
  n[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, Y.jsx)(s, {
        id: `settings.chatGpt.dataControls.export.dialog.confirm`,
        defaultMessage: `Confirm export`,
        description: `Primary button in the ChatGPT data export confirmation dialog. It submits the end user’s account export request.`,
      })),
      (n[39] = fe))
    : (fe = n[39]);
  let H;
  n[40] === M
    ? (H = n[41])
    : ((H = (0, Y.jsx)(t, { loading: M, type: `submit`, children: fe })), (n[40] = M), (n[41] = H));
  let pe;
  n[42] !== V || n[43] !== H
    ? ((pe = (0, Y.jsx)(re, { children: (0, Y.jsxs)(le, { children: [V, H] }) })),
      (n[42] = V),
      (n[43] = H),
      (n[44] = pe))
    : (pe = n[44]);
  let me;
  n[45] !== L || n[46] !== pe
    ? ((me = (0, Y.jsxs)(oe, { as: `form`, onSubmit: L, children: [R, z, pe] })),
      (n[45] = L),
      (n[46] = pe),
      (n[47] = me))
    : (me = n[47]);
  let U;
  n[48] !== de || n[49] !== I || n[50] !== me
    ? ((U = (0, Y.jsx)(ie, { open: de, onOpenChange: I, children: me })),
      (n[48] = de),
      (n[49] = I),
      (n[50] = me),
      (n[51] = U))
    : (U = n[51]);
  let he;
  n[52] !== F || n[53] !== _ ? ((he = null), (n[52] = F), (n[53] = _), (n[54] = he)) : (he = n[54]);
  let ge;
  return (
    n[55] !== U || n[56] !== he
      ? ((ge = (0, Y.jsxs)(Y.Fragment, { children: [U, he] })), (n[55] = U), (n[56] = he), (n[57] = ge))
      : (ge = n[57]),
    ge
  );
}
async function Ft(e, t, n) {
  try {
    let n = await je(`chatgpt_account_data_export`);
    return (await t())
      ? (await Ie.safePost(`/accounts/data_export`, { additionalHeaders: n, expectedIdentity: e }),
        `requested`)
      : `cancelled`;
  } catch (e) {
    throw e;
  }
}
var It, J, Y;
function Lt() {
  return (Lt = e(() => {
    ((It = R()),
      c(),
      de(),
      g(),
      (J = V()),
      j(),
      Oe(),
      We(),
      we(),
      K(),
      F(),
      L(),
      T(),
      it(),
      N(),
      z(),
      D(),
      Dt(),
      kt(),
      (Y = B()));
  }))();
}
function Rt(e) {
  let n = (0, zt.c)(28),
    { onBack: r } = e,
    a = l(i),
    o = ee(),
    c = Xe(`500337272`),
    { data: u, isError: f, isFetching: m, isLoading: h, refetch: g } = y(wt),
    v;
  n[0] !== c || n[1] !== a
    ? ((v = async (e) => {
        let { key: t, value: n } = e,
          r = a.get(Ze);
        a.get(Ne);
        let i = a.query.snapshot(wt),
          o =
            c && typeof navigator < `u` && Reflect.get(navigator, `globalPrivacyControl`) === !0
              ? { analytics: !1, marketing: !1, personalization: !1 }
              : { [t]: n };
        (await Ie.safePost(`/user_granular_consent`, {
          requestBody: { granular_consent: o },
          additionalHeaders: r == null ? void 0 : { "ChatGPT-Account-ID": r, [ue]: r },
        }),
          await i.cancel(),
          i.setData((e) => (e == null ? e : { ...e, ...o })));
      }),
      (n[0] = c),
      (n[1] = a),
      (n[2] = v))
    : (v = n[2]);
  let b;
  n[3] !== o || n[4] !== a
    ? ((b = () => {
        a.get(O).danger(
          o.formatMessage({
            id: `settings.chatGpt.marketingPrivacy.updateError`,
            defaultMessage: `Couldn’t update marketing privacy settings`,
            description: `Error toast shown when an end user cannot update a ChatGPT marketing privacy preference.`,
          }),
          { errorAnalytics: { toastId: `settings.chatGpt.marketingPrivacy.updateError` } },
        );
      }),
      (n[3] = o),
      (n[4] = a),
      (n[5] = b))
    : (b = n[5]);
  let x;
  n[6] !== v || n[7] !== b
    ? ((x = { mutationFn: v, onError: b }), (n[6] = v), (n[7] = b), (n[8] = x))
    : (x = n[8]);
  let S = d(x),
    C = !(u?.isConsentRequired ?? !0),
    w;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, X.jsx)(s, {
        id: `settings.chatGpt.marketingPrivacy.title`,
        defaultMessage: `Marketing privacy`,
        description: `Title of the ChatGPT Marketing privacy subpage inside Data controls.`,
      })),
      (n[9] = w))
    : (w = n[9]);
  let te, T;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, X.jsx)(p, { className: `rtl:rotate-180`, asset: _ })),
      (T = (0, X.jsx)(s, {
        id: `settings.chatGpt.marketingPrivacy.back`,
        defaultMessage: `Back`,
        description: `Button returning an end user from ChatGPT Marketing privacy to the main Data controls page.`,
      })),
      (n[10] = te),
      (n[11] = T))
    : ((te = n[10]), (T = n[11]));
  let E;
  n[12] === r
    ? (E = n[13])
    : ((E = (0, X.jsxs)(t, { color: `ghostActive`, size: `toolbar`, onClick: r, children: [te, T] })),
      (n[12] = r),
      (n[13] = E));
  let D = h || void 0,
    ne;
  n[14] !== u || n[15] !== C || n[16] !== o || n[17] !== f || n[18] !== m || n[19] !== g || n[20] !== S
    ? ((ne = f
        ? (0, X.jsx)(I, {
            label: (0, X.jsx)(s, {
              id: `settings.chatGpt.marketingPrivacy.loadError`,
              defaultMessage: `Couldn’t load marketing privacy settings`,
              description: `Error shown on the ChatGPT Marketing privacy settings subpage when the end user's current consent choices cannot be loaded. Concise settings-row text with no placeholders.`,
            }),
            control: (0, X.jsx)(t, {
              color: `secondary`,
              loading: m,
              size: `toolbar`,
              onClick: () => void g(),
              children: (0, X.jsx)(s, {
                id: `common.retry`,
                defaultMessage: `Retry`,
                description: `Button to retry an operation after an error`,
              }),
            }),
          })
        : (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(I, {
                label: (0, X.jsx)(s, {
                  id: `settings.chatGpt.marketingPrivacy.measurement.label`,
                  defaultMessage: `Marketing measurement`,
                  description: `Label for the ChatGPT Marketing privacy toggle controlling cookies used to measure marketing campaign effectiveness.`,
                }),
                description: (0, X.jsx)(s, {
                  id: `settings.chatGpt.marketingPrivacy.measurement.description`,
                  defaultMessage: `These cookies help us measure the effectiveness of our marketing campaigns.`,
                  description: `Supporting text for the Marketing measurement toggle on the ChatGPT Marketing privacy settings subpage.`,
                }),
                control: (0, X.jsx)(M, {
                  ariaLabel: o.formatMessage({
                    id: `settings.chatGpt.marketingPrivacy.measurement.ariaLabel`,
                    defaultMessage: `Allow marketing measurement`,
                    description: `Accessible label for the ChatGPT Marketing measurement privacy toggle.`,
                  }),
                  checked: u?.marketing ?? C,
                  disabled: u == null || S.isPending,
                  onChange: (e) => S.mutate({ key: `marketing`, value: e }),
                }),
              }),
              (0, X.jsx)(I, {
                label: (0, X.jsx)(s, {
                  id: `settings.chatGpt.marketingPrivacy.personalization.label`,
                  defaultMessage: `Personalized marketing`,
                  description: `Label for the ChatGPT Marketing privacy toggle controlling personalization of OpenAI marketing on third-party platforms.`,
                }),
                description: (0, X.jsx)(s, {
                  id: `settings.chatGpt.marketingPrivacy.personalization.description`,
                  defaultMessage: `This helps us personalize and measure OpenAI’s own marketing on third-party platforms.`,
                  description: `Supporting text for the Personalized marketing toggle on the ChatGPT Marketing privacy settings subpage.`,
                }),
                control: (0, X.jsx)(M, {
                  ariaLabel: o.formatMessage({
                    id: `settings.chatGpt.marketingPrivacy.personalization.ariaLabel`,
                    defaultMessage: `Allow personalized marketing`,
                    description: `Accessible label for the ChatGPT Personalized marketing privacy toggle.`,
                  }),
                  checked: u?.personalization ?? C,
                  disabled: u == null || S.isPending,
                  onChange: (e) => S.mutate({ key: `personalization`, value: e }),
                }),
              }),
            ],
          })),
      (n[14] = u),
      (n[15] = C),
      (n[16] = o),
      (n[17] = f),
      (n[18] = m),
      (n[19] = g),
      (n[20] = S),
      (n[21] = ne))
    : (ne = n[21]);
  let k;
  n[22] !== D || n[23] !== ne
    ? ((k = (0, X.jsx)(ke, {
        children: (0, X.jsx)(ke.Content, { children: (0, X.jsx)(ce, { "aria-busy": D, children: ne }) }),
      })),
      (n[22] = D),
      (n[23] = ne),
      (n[24] = k))
    : (k = n[24]);
  let A;
  return (
    n[25] !== k || n[26] !== E
      ? ((A = (0, X.jsx)(Ge, { title: w, backSlot: E, children: k })), (n[25] = k), (n[26] = E), (n[27] = A))
      : (A = n[27]),
    A
  );
}
var zt, X;
function Bt() {
  return (Bt = e(() => {
    ((zt = R()),
      H(),
      c(),
      g(),
      P(),
      j(),
      et(),
      K(),
      St(),
      Ee(),
      Ct(),
      F(),
      h(),
      N(),
      f(),
      z(),
      Le(),
      ge(),
      A(),
      u(),
      Ve(),
      W(),
      (X = B()));
  }))();
}
function Vt() {
  let e = (0, Wt.c)(5),
    t = y(ht),
    { data: n } = y(Ke),
    r = y(gt);
  if (!t) return null;
  let i = r ?? null,
    a = n?.preciseLocationAllowed,
    o = n?.amphoraLocks?.precise_location_allowed,
    s = n?.preciseLocationRestrictedReason,
    c;
  return (
    e[0] !== i || e[1] !== a || e[2] !== o || e[3] !== s
      ? ((c = (0, Z.jsx)(Ht, { permission: i, allowed: a, locked: o, restrictedReason: s })),
        (e[0] = i),
        (e[1] = a),
        (e[2] = o),
        (e[3] = s),
        (e[4] = c))
      : (c = e[4]),
    c
  );
}
function Ht(e) {
  let n = (0, Wt.c)(30),
    { permission: a, allowed: o, locked: c, restrictedReason: u } = e,
    d = l(i),
    f = ee(),
    [p, m] = (0, Gt.useState)(!1),
    h = o === !1 && (c === !0 || !!u),
    g = o === !0 && a === `granted`,
    _ = h ? qt : Kt,
    v;
  n[0] === _
    ? (v = n[1])
    : ((v = (e) =>
        (0, Z.jsx)(at, {
          href: _,
          initiator: `external_link`,
          appearance: `secondary`,
          openTarget: `external-browser`,
          children: e,
        })),
      (n[0] = _),
      (n[1] = v));
  let y = v,
    b;
  if (h) {
    let e;
    (n[2] !== y || n[3] !== u
      ? ((e = u
          ? (0, Z.jsx)(s, {
              id: `settings.chatGpt.dataControls.location.restrictedReason`,
              defaultMessage: `{reason} <link>Learn more</link>`,
              description: `Server-provided parental-control restriction reason followed by a link to the parental-controls location FAQ`,
              values: { reason: u, link: y },
            })
          : (0, Z.jsx)(s, {
              id: `settings.chatGpt.dataControls.location.restricted`,
              defaultMessage: `Restricted by parental controls. ChatGPT won't use your device's location. <link>Learn more</link>`,
              description: `Explains that parental controls block device location, with a link to the parental-controls FAQ`,
              values: { link: y },
            })),
        (n[2] = y),
        (n[3] = u),
        (n[4] = e))
      : (e = n[4]),
      (b = e));
  } else if (g) {
    let e;
    (n[5] === y
      ? (e = n[6])
      : ((e = (0, Z.jsx)(s, {
          id: `settings.chatGpt.dataControls.location.granted`,
          defaultMessage: `Allow ChatGPT to use your device's precise location when providing information. <link>Learn more</link>`,
          description: `Location setting description when browser permission is granted, with a link to location help`,
          values: { link: y },
        })),
        (n[5] = y),
        (n[6] = e)),
      (b = e));
  } else {
    let e;
    (n[7] === y
      ? (e = n[8])
      : ((e = (0, Z.jsx)(s, {
          id: `settings.chatGpt.dataControls.location.promptOrDenied`,
          defaultMessage: `When enabled, your location helps ChatGPT provide more relevant information, like local recommendations, news, and weather. <link>Learn more</link>`,
          description: `Location setting description when browser permission is undecided or denied, with a link to location help`,
          values: { link: y },
        })),
        (n[7] = y),
        (n[8] = e)),
      (b = e));
  }
  let x;
  n[9] === g
    ? (x = n[10])
    : ((x = g
        ? (0, Z.jsx)(s, {
            id: `settings.chatGpt.dataControls.location.on`,
            defaultMessage: `On`,
            description: `Status of device location when browser access is granted`,
          })
        : (0, Z.jsx)(s, {
            id: `settings.chatGpt.dataControls.location.off`,
            defaultMessage: `Off`,
            description: `Status of device location when browser access is denied or parental controls restrict it`,
          })),
      (n[9] = g),
      (n[10] = x));
  let S = x,
    C;
  n[11] !== o || n[12] !== f || n[13] !== d
    ? ((C = async function (e) {
        let t = d.get(Ze),
          n = d.get(Ne),
          r = d.get(G),
          i = d.query.snapshot(Ke),
          a = () => d.get(Ze) === t && d.get(Ne) === n && d.get(G) === r;
        try {
          let n = !e;
          if (e && o === !1) {
            let e = await i.fetch();
            if (
              !a() ||
              !d.get(ht) ||
              e.preciseLocationAllowed == null ||
              e.amphoraLocks?.precise_location_allowed === !0 ||
              e.preciseLocationRestrictedReason
            )
              return;
            n = e.preciseLocationAllowed === !1;
          }
          (n &&
            (await Ie.safePatch(`/settings/account_user_setting`, {
              expectedIdentity: t != null && r != null ? { accountId: t, userId: r } : void 0,
              additionalHeaders: t == null ? void 0 : { "ChatGPT-Account-ID": t, [ue]: t },
              parameters: { query: { feature: `precise_location_allowed`, value: e } },
            }),
            e || (await i.cancel(), i.setData(Ut), a() && tt()),
            await i.invalidate()),
            e &&
              a() &&
              (await ut(
                d,
                ft.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_SETTINGS,
                mt.CHATGPT_LOCATION_PERMISSION_INTERACTION_STATUS_ROW,
              )));
        } catch {
          a() &&
            d
              .get(O)
              .danger(
                f.formatMessage({
                  id: `settings.chatGpt.dataControls.updateError`,
                  defaultMessage: `Could not update data controls`,
                  description: `Error toast when ChatGPT data controls cannot be updated`,
                }),
                { errorAnalytics: { toastId: `settings.chatGpt.dataControls.updateError` } },
              );
        }
      }),
      (n[11] = o),
      (n[12] = f),
      (n[13] = d),
      (n[14] = C))
    : (C = n[14]);
  let w = C,
    te;
  n[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, Z.jsx)(s, {
        id: `settings.chatGpt.dataControls.location`,
        defaultMessage: `Location`,
        description: `Label for precise location data control`,
      })),
      (n[15] = te))
    : (te = n[15]);
  let T;
  n[16] !== o ||
  n[17] !== g ||
  n[18] !== _ ||
  n[19] !== c ||
  n[20] !== p ||
  n[21] !== a ||
  n[22] !== h ||
  n[23] !== d ||
  n[24] !== S ||
  n[25] !== w
    ? ((T = (e) => {
        let { "aria-describedby": n } = e;
        return h || g || (o === !0 && a === `denied`)
          ? (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsxs)(t, {
                  "aria-describedby": n,
                  color: `ghost`,
                  size: `toolbar`,
                  onClick: (e) => {
                    !h && a === `denied`
                      ? Se(d, yt)
                      : Pe({ event: e, href: _, initiator: `external_link`, openTarget: `external-browser` });
                  },
                  children: [S, (0, Z.jsx)(r, {})],
                }),
                g &&
                  (0, Z.jsx)(t, {
                    "aria-describedby": n,
                    color: `secondary`,
                    size: `toolbar`,
                    disabled: c === !0 || p,
                    loading: p,
                    onClick: () => {
                      (m(!0), w(!1).finally(() => m(!1)));
                    },
                    children: (0, Z.jsx)(s, {
                      id: `settings.chatGpt.dataControls.location.turnOff`,
                      defaultMessage: `Turn off`,
                      description: `Button in ChatGPT Location settings that stops sharing precise device location for this account, without changing browser permission. Paired with Turn on.`,
                    }),
                  }),
              ],
            })
          : (0, Z.jsx)(t, {
              "aria-describedby": n,
              color: `secondary`,
              size: `toolbar`,
              disabled: o == null || p,
              loading: p,
              onClick: () => {
                (m(!0), w(!0).finally(() => m(!1)));
              },
              children: (0, Z.jsx)(s, {
                id: `chatgptConversations.preciseLocation.turnOn`,
                defaultMessage: `Turn on`,
                description: `Button requesting permission to use precise location for local ChatGPT answers`,
              }),
            });
      }),
      (n[16] = o),
      (n[17] = g),
      (n[18] = _),
      (n[19] = c),
      (n[20] = p),
      (n[21] = a),
      (n[22] = h),
      (n[23] = d),
      (n[24] = S),
      (n[25] = w),
      (n[26] = T))
    : (T = n[26]);
  let E;
  return (
    n[27] !== b || n[28] !== T
      ? ((E = (0, Z.jsx)(I, { label: te, description: b, control: T })),
        (n[27] = b),
        (n[28] = T),
        (n[29] = E))
      : (E = n[29]),
    E
  );
}
function Ut(e) {
  return e == null ? e : { ...e, preciseLocationAllowed: !1 };
}
var Wt, Gt, Z, Kt, qt;
function Jt() {
  return (Jt = e(() => {
    ((Wt = R()),
      lt(),
      g(),
      P(),
      (Gt = V()),
      j(),
      et(),
      K(),
      Ee(),
      dt(),
      vt(),
      _t(),
      pt(),
      F(),
      it(),
      Ce(),
      v(),
      ve(),
      N(),
      Re(),
      z(),
      A(),
      (Z = B()),
      (Kt = `https://help.openai.com/en/articles/9237897-chatgpt-search#location`),
      (qt = `https://help.openai.com/en/articles/12315553-parental-controls-on-chatgpt-faq#location`));
  }))();
}
function Yt() {
  let e = (0, Xt.c)(17),
    t = ee(),
    { data: n, isError: r, refetch: i } = y(Ke),
    { mutate: a, isPending: o, error: c } = y(Te),
    l;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Zt.jsx)(s, {
        id: `settings.chatGpt.dataControls.networkAccess`,
        defaultMessage: `Work network access`,
        description: `Label for ChatGPT Work network access`,
      })),
      (e[0] = l))
    : (l = e[0]);
  let u = n?.enableFloraNetworkAccess === !0,
    d = n == null || r || o || n.amphoraLocks?.enable_flora_network_access === !0,
    f;
  e[1] === a ? (f = e[2]) : ((f = (e) => a(e)), (e[1] = a), (e[2] = f));
  let p;
  e[3] === t
    ? (p = e[4])
    : ((p = t.formatMessage({
        id: `settings.chatGpt.dataControls.networkAccess.ariaLabel`,
        defaultMessage: `Allow Work network access`,
        description: `Accessible label for ChatGPT Work network access`,
      })),
      (e[3] = t),
      (e[4] = p));
  let m;
  e[5] !== u || e[6] !== d || e[7] !== f || e[8] !== p
    ? ((m = (0, Zt.jsx)(I, {
        label: l,
        control: (0, Zt.jsx)(M, { checked: u, disabled: d, onChange: f, ariaLabel: p }),
      })),
      (e[5] = u),
      (e[6] = d),
      (e[7] = f),
      (e[8] = p),
      (e[9] = m))
    : (m = e[9]);
  let h;
  e[10] !== c || e[11] !== r || e[12] !== i
    ? ((h =
        r || c != null
          ? (0, Zt.jsx)(b, {
              type: `error`,
              role: `alert`,
              content: (0, Zt.jsx)(s, {
                id: `settings.chatGpt.networkAccess.error`,
                defaultMessage: `Could not load or save Work network access. Reload and try again`,
                description: `Error when reading or saving the account's Work network preference`,
              }),
              primaryCtaText: (0, Zt.jsx)(s, {
                id: `settings.chatGpt.networkAccess.reload`,
                defaultMessage: `Reload`,
                description: `Reload the saved Work network preference after an error`,
              }),
              onPrimaryCtaClick: () => {
                i();
              },
            })
          : null),
      (e[10] = c),
      (e[11] = r),
      (e[12] = i),
      (e[13] = h))
    : (h = e[13]);
  let g;
  return (
    e[14] !== m || e[15] !== h
      ? ((g = (0, Zt.jsxs)(Zt.Fragment, { children: [m, h] })), (e[14] = m), (e[15] = h), (e[16] = g))
      : (g = e[16]),
    g
  );
}
var Xt, Zt;
function Qt() {
  return (Qt = e(() => {
    ((Xt = R()), g(), j(), Ee(), o(), f(), A(), (Zt = B()));
  }))();
}
function $t(e) {
  let n = (0, en.c)(37),
    { accountId: r, userId: a, open: o, onOpenChange: c, triggerContent: u } = e,
    f = l(i),
    p = ee(),
    m;
  n[0] !== r || n[1] !== a
    ? ((m = {
        mutationFn: () =>
          Ie.safePost(`/flora/workspace/reset`, {
            expectedIdentity: { accountId: r, userId: a },
            additionalHeaders: { "ChatGPT-Account-ID": r, [ue]: r },
            retry: !1,
          }),
        retry: !1,
      }),
      (n[0] = r),
      (n[1] = a),
      (n[2] = m))
    : (m = n[2]);
  let { mutate: h, isPending: g } = d(m),
    _;
  n[3] !== g || n[4] !== c
    ? ((_ = (e) => {
        g || c(e);
      }),
      (n[3] = g),
      (n[4] = c),
      (n[5] = _))
    : (_ = n[5]);
  let v = !g,
    y;
  n[6] !== p || n[7] !== g || n[8] !== h || n[9] !== c || n[10] !== f
    ? ((y = (e) => {
        (e.preventDefault(),
          !g &&
            h(void 0, {
              onSuccess: () => {
                (c(!1),
                  f
                    .get(O)
                    .success(
                      p.formatMessage({
                        id: `chatgpt.settings.data_controls.work_reset.toast.success`,
                        defaultMessage: `Work reset`,
                        description: `Success toast after resetting the user's cloud Work environment`,
                      }),
                    ));
              },
              onError: (e) => {
                f.get(O).danger(
                  p.formatMessage({
                    id: `chatgpt.settings.data_controls.work_reset.toast.error`,
                    defaultMessage: `Failed to reset Work`,
                    description: `Error toast when resetting the user's cloud Work environment fails; the user can retry from the open confirmation dialog`,
                  }),
                  {
                    description: e.message,
                    errorAnalytics: { toastId: `chatgpt.settings.data_controls.work_reset.toast.error` },
                  },
                );
              },
            }));
      }),
      (n[6] = p),
      (n[7] = g),
      (n[8] = h),
      (n[9] = c),
      (n[10] = f),
      (n[11] = y))
    : (y = n[11]);
  let b;
  n[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(C, {
        children: (0, Q.jsx)(s, {
          id: `chatgpt.settings.data_controls.work_reset.modal.title`,
          defaultMessage: `Reset ChatGPT Work?`,
          description: `Title of the confirmation dialog before resetting the user's cloud Work environment`,
        }),
      })),
      (n[12] = b))
    : (b = n[12]);
  let x;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Q.jsx)(re, {
        children: (0, Q.jsx)(te, {
          title: b,
          subtitle: (0, Q.jsx)(ne, {
            children: (0, Q.jsx)(s, {
              id: `chatgpt.settings.data_controls.work_reset.modal.description`,
              defaultMessage: `This will delete files and other local data in your current work environment. Files saved to your Library will remain. A fresh environment will be created the next time you start working.`,
              description: `Body text in the Reset ChatGPT Work confirmation dialog in Settings > Data controls. "Work environment" means the remote environment used for code and shell commands. "Library" is the ChatGPT product feature where durable files are saved and must not be translated. Clearly distinguish deletable environment-local files from Library files that are preserved. No placeholders or rich text.`,
            }),
          }),
        }),
      })),
      (n[13] = x))
    : (x = n[13]);
  let S;
  n[14] === c ? (S = n[15]) : ((S = () => c(!1)), (n[14] = c), (n[15] = S));
  let w;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Q.jsx)(s, {
        id: `chatgpt.settings.data_controls.work_reset.modal.button.cancel`,
        defaultMessage: `Cancel`,
        description: `Closes the Work reset confirmation without changing the environment`,
      })),
      (n[16] = w))
    : (w = n[16]);
  let T;
  n[17] !== g || n[18] !== S
    ? ((T = (0, Q.jsx)(t, { color: `secondary`, disabled: g, type: `button`, onClick: S, children: w })),
      (n[17] = g),
      (n[18] = S),
      (n[19] = T))
    : (T = n[19]);
  let E;
  n[20] === g
    ? (E = n[21])
    : ((E = g
        ? (0, Q.jsx)(s, {
            id: `chatgpt.settings.data_controls.work_reset.modal.button.pending`,
            defaultMessage: `Resetting…`,
            description: `Button label while the cloud Work environment reset is in progress`,
          })
        : (0, Q.jsx)(s, {
            id: `chatgpt.settings.data_controls.work_reset.modal.button.confirm`,
            defaultMessage: `Reset`,
            description: `Confirms deletion of the current cloud Work environment's files and local data`,
          })),
      (n[20] = g),
      (n[21] = E));
  let D;
  n[22] !== g || n[23] !== E
    ? ((D = (0, Q.jsx)(t, { color: `danger`, loading: g, type: `submit`, children: E })),
      (n[22] = g),
      (n[23] = E),
      (n[24] = D))
    : (D = n[24]);
  let k;
  n[25] !== D || n[26] !== T
    ? ((k = (0, Q.jsx)(re, { children: (0, Q.jsxs)(le, { children: [T, D] }) })),
      (n[25] = D),
      (n[26] = T),
      (n[27] = k))
    : (k = n[27]);
  let A;
  n[28] !== k || n[29] !== y
    ? ((A = (0, Q.jsxs)(oe, { as: `form`, className: `select-none`, onSubmit: y, children: [x, k] })),
      (n[28] = k),
      (n[29] = y),
      (n[30] = A))
    : (A = n[30]);
  let j;
  return (
    n[31] !== o || n[32] !== A || n[33] !== _ || n[34] !== v || n[35] !== u
      ? ((j = (0, Q.jsx)(ie, {
          open: o,
          triggerContent: u,
          onOpenChange: _,
          showDialogClose: v,
          size: `compact`,
          children: A,
        })),
        (n[31] = o),
        (n[32] = A),
        (n[33] = _),
        (n[34] = v),
        (n[35] = u),
        (n[36] = j))
      : (j = n[36]),
    j
  );
}
var en, Q;
function tn() {
  return (tn = e(() => {
    ((en = R()), c(), g(), P(), j(), K(), F(), L(), T(), N(), z(), (Q = B()));
  }))();
}
function nn() {
  let e = (0, an.c)(6),
    t = pe(Ye, `1625797156`),
    n = y(Me),
    r = y(ye),
    i = y(G),
    a = n.status === `loaded` && n.structure === `workspace`,
    o = t && a,
    s;
  e[0] === o ? (s = e[1]) : ((s = { enabled: o }), (e[0] = o), (e[1] = s));
  let { data: c } = pe(nt, r, s);
  if (
    !t ||
    r == null ||
    i == null ||
    n.status !== `loaded` ||
    (n.structure !== `personal` && (!a || c?.features?.includes(`flora`) !== !0))
  )
    return null;
  let l = `${i}:${r}`,
    u;
  return (
    e[2] !== r || e[3] !== l || e[4] !== i
      ? ((u = (0, sn.jsx)(rn, { accountId: r, userId: i }, l)),
        (e[2] = r),
        (e[3] = l),
        (e[4] = i),
        (e[5] = u))
      : (u = e[5]),
    u
  );
}
function rn(e) {
  let n = (0, an.c)(5),
    { accountId: r, userId: i } = e,
    [a, o] = (0, on.useState)(!1),
    c;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, sn.jsx)(s, {
        id: `chatgpt.settings.data_controls.work_reset.row.label`,
        defaultMessage: `Reset ChatGPT Work`,
        description: `Label for the Data controls setting that resets the user's cloud Work environment`,
      })),
      (n[0] = c))
    : (c = n[0]);
  let l;
  return (
    n[1] !== r || n[2] !== a || n[3] !== i
      ? ((l = (0, sn.jsx)(I, {
          className: `select-none`,
          label: c,
          control: (e) =>
            (0, sn.jsx)($t, {
              accountId: r,
              userId: i,
              open: a,
              onOpenChange: o,
              triggerContent: (0, sn.jsx)(t, {
                ...e,
                color: `danger`,
                size: `toolbar`,
                children: (0, sn.jsx)(s, {
                  id: `chatgpt.settings.data_controls.work_reset.row.button.label`,
                  defaultMessage: `Reset`,
                  description: `Button opening the confirmation to reset the user's cloud Work environment`,
                }),
              }),
            }),
        })),
        (n[1] = r),
        (n[2] = a),
        (n[3] = i),
        (n[4] = l))
      : (l = n[4]),
    l
  );
}
var an, on, sn;
function cn() {
  return (cn = e(() => {
    ((an = R()), g(), (on = V()), j(), et(), st(), F(), A(), W(), tn(), (sn = B()));
  }))();
}
function ln() {
  let e = (0, fn.c)(150),
    n = l(i),
    r = ee(),
    { userId: o, accountId: c } = Qe(),
    { data: u } = y(Ke),
    { data: f } = xe(),
    p = f?.structure === `workspace`,
    h = y(xt),
    g = y(Ze),
    _;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = { preview: !1 }), (e[0] = _)) : (_ = e[0]);
  let { data: v, isError: b } = xe(void 0, _),
    S = v?.structure === `workspace`,
    w = ae(),
    T;
  e[1] !== v || e[2] !== g || e[3] !== o
    ? ((T = Et({ account: v, userId: o, settingsAccountId: g })),
      (e[1] = v),
      (e[2] = g),
      (e[3] = o),
      (e[4] = T))
    : (T = e[4]);
  let E = T,
    { data: D, isError: k, isFetching: A, refetch: j } = x(E),
    re = S && D?.data_usage_for_training === `disallowed`,
    N;
  e[5] === p ? (N = e[6]) : ((N = { enabled: p }), (e[5] = p), (e[6] = N));
  let { data: se } = pe(nt, f?.id ?? null, N),
    P;
  e[7] !== f || e[8] !== p || e[9] !== se?.features
    ? ((P =
        f != null &&
        f.plan_type !== `quorum` &&
        (!p || se?.features?.includes(`workspace_share_links`) === !0)),
      (e[7] = f),
      (e[8] = p),
      (e[9] = se?.features),
      (e[10] = P))
    : (P = e[10]);
  let ue = P,
    F;
  e[11] === v
    ? (F = e[12])
    : ((F = v?.structure === `workspace` && Je(v.plan_type)), (e[11] = v), (e[12] = F));
  let de = F,
    L = de && v?.id === c,
    R;
  e[13] === L ? (R = e[14]) : ((R = { enabled: L }), (e[13] = L), (e[14] = R));
  let { data: z, isError: B } = pe(Be, v?.id ?? ``, R),
    V;
  e[15] !== de || e[16] !== B || e[17] !== z?.permissions
    ? ((V = de && !B && z?.permissions?.includes(`chatgpt.workspace.feature.data-export.access`) === !0),
      (e[15] = de),
      (e[16] = B),
      (e[17] = z?.permissions),
      (e[18] = V))
    : (V = e[18]);
  let fe = V,
    H = o != null && c != null && !b && v?.id === c && (v.structure !== `workspace` || fe),
    U = v == null ? null : `${o}:${c}:${v.id}`,
    ge = v?.id,
    _e;
  e[19] !== c || e[20] !== ge || e[21] !== o
    ? ((_e = [`chatgpt-data-export-reauth`, o, c, ge]), (e[19] = c), (e[20] = ge), (e[21] = o), (e[22] = _e))
    : (_e = e[22]);
  let ve = _e,
    Se;
  e[23] !== v?.id || e[24] !== o
    ? ((Se = (e) => {
        let { signal: t } = e;
        return dn(o, v?.id, t);
      }),
      (e[23] = v?.id),
      (e[24] = o),
      (e[25] = Se))
    : (Se = e[25]);
  let Ce;
  e[26] !== ve || e[27] !== Se || e[28] !== !1
    ? ((Ce = {
        queryKey: ve,
        queryFn: Se,
        enabled: !1,
        staleTime: 1 / 0,
        gcTime: 0,
        retry: !1,
        refetchOnWindowFocus: !1,
      }),
      (e[26] = ve),
      (e[27] = Se),
      (e[28] = !1),
      (e[29] = Ce))
    : (Ce = e[29]);
  let { data: we } = x(Ce),
    Te = Xe(`3157804138`),
    Ee = Xe(`1850361504`);
  (Xe(`500944450`), (0, pn.useState)(!1));
  let [W, De] = m(),
    Oe = a(),
    Ae = W.get(`view`),
    [je, Me] = (0, pn.useState)(null),
    [Ne, Pe] = (0, pn.useState)(!1),
    [G, Le] = (0, pn.useState)(null),
    Re;
  e[30] !== w || e[31] !== n
    ? ((Re = async (e) => {
        let t = n.get(ye);
        (await Ie.safePatch(`/conversations`, {
          requestBody: e === `archive` ? { is_archived: !0 } : { is_visible: !1 },
        }),
          he(n, t),
          n.get(ye) === t && n.set(Fe, []),
          ze(n),
          w.invalidateQueries({ queryKey: [be] }),
          await me({ includePersisted: !0 }).catch(un));
      }),
      (e[30] = w),
      (e[31] = n),
      (e[32] = Re))
    : (Re = e[32]);
  let Ve;
  e[33] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ve = () => Le(null)), (e[33] = Ve)) : (Ve = e[33]);
  let K = d({ mutationFn: Re, onSuccess: Ve, onError: () => Ue() });
  function Ue() {
    n.get(O).danger(
      r.formatMessage({
        id: `settings.chatGpt.dataControls.updateError`,
        defaultMessage: `Could not update data controls`,
        description: `Error toast when ChatGPT data controls cannot be updated`,
      }),
      { errorAnalytics: { toastId: `settings.chatGpt.dataControls.updateError` } },
    );
  }
  let We;
  e[34] !== v || e[35] !== S || e[36] !== w || e[37] !== n || e[38] !== g || e[39] !== Ue || e[40] !== E
    ? ((We = async function (e, t) {
        e === `precise_location_allowed` && !t && tt();
        let r = n.query.snapshot(Ke),
          i = r.getData();
        if (
          e === `training_allowed` &&
          (i == null ||
            i.amphoraLocks?.training_allowed === !0 ||
            v == null ||
            v.id !== g ||
            n.get(Ze) !== g ||
            (S &&
              (w.getQueryState(E.queryKey)?.status === `error` ||
                w.getQueryData(E.queryKey)?.data_usage_for_training !== `permitted`)))
        )
          return;
        let a = n.get(Ze);
        try {
          (await Ie.safePatch(`/settings/account_user_setting`, {
            additionalHeaders: a == null ? void 0 : { "ChatGPT-Account-ID": a },
            parameters: { query: { feature: e, value: t } },
          }),
            e === `precise_location_allowed` && !t && tt(),
            e === `training_allowed` && r.setData((e) => (e == null ? e : { ...e, trainingAllowed: t })),
            await r.invalidate());
        } catch {
          n.get(Ze) === a && Ue();
        }
      }),
      (e[34] = v),
      (e[35] = S),
      (e[36] = w),
      (e[37] = n),
      (e[38] = g),
      (e[39] = Ue),
      (e[40] = E),
      (e[41] = We))
    : (We = e[41]);
  let qe = We,
    Ye;
  e[42] !== W || e[43] !== De
    ? ((Ye = function (e) {
        let t = new URLSearchParams(W);
        (e == null ? t.delete(`view`) : t.set(`view`, e), De(t));
      }),
      (e[42] = W),
      (e[43] = De),
      (e[44] = Ye))
    : (Ye = e[44]);
  let q = Ye;
  if (h && [`ads`, `ads-history`, `ads-topics`].includes(Ae ?? ``)) {
    let t;
    return (
      e[45] !== W || e[46] !== De
        ? ((t = (0, $.jsx)(mn, {
            onBack: () => {
              let e = new URLSearchParams(W);
              (e.delete(`view`), e.delete(`adsView`), De(e));
            },
          })),
          (e[45] = W),
          (e[46] = De),
          (e[47] = t))
        : (t = e[47]),
      t
    );
  }
  if (Ae === `marketing-privacy` && Te) {
    let t;
    return (
      e[48] === q ? (t = e[49]) : ((t = (0, $.jsx)(Rt, { onBack: () => q(null) })), (e[48] = q), (e[49] = t)),
      t
    );
  }
  if (Ae === `information-sharing` && Ee) {
    let t;
    return (
      e[50] === q ? (t = e[51]) : ((t = (0, $.jsx)(hn, { onBack: () => q(null) })), (e[50] = q), (e[51] = t)),
      t
    );
  }
  let $e;
  e[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($e = (0, $.jsx)(He, { showChatGptDataControlsLabel: !0, slug: `data-controls` })), (e[52] = $e))
    : ($e = e[52]);
  let et;
  e[53] !== ue || e[54] !== f || e[55] !== r || e[56] !== Ne
    ? ((et = ue
        ? (0, $.jsx)(I, {
            label: (0, $.jsx)(s, {
              id: `settings.chatGpt.dataControls.sharedLinks`,
              defaultMessage: `Shared links`,
              description: `Label for managing shared ChatGPT links from Data controls`,
            }),
            control: (0, $.jsx)(jt, {
              accountId: f.id,
              open: Ne,
              onOpenChange: Pe,
              triggerContent: (0, $.jsx)(t, {
                "aria-label": r.formatMessage({
                  id: `settings.chatGpt.dataControls.manageSharedLinks`,
                  defaultMessage: `Manage shared links`,
                  description: `Accessible label for the button that opens ChatGPT Shared links management from Data controls`,
                }),
                color: `secondary`,
                size: `toolbar`,
                children: (0, $.jsx)(s, {
                  id: `settings.chatGpt.dataControls.manage`,
                  defaultMessage: `Manage`,
                  description: `Button to manage ChatGPT data`,
                }),
              }),
            }),
          })
        : null),
      (e[53] = ue),
      (e[54] = f),
      (e[55] = r),
      (e[56] = Ne),
      (e[57] = et))
    : (et = e[57]);
  let rt;
  e[58] !== k || e[59] !== A || e[60] !== S || e[61] !== j
    ? ((rt =
        S && k
          ? (0, $.jsx)(I, {
              label: (0, $.jsx)(`span`, {
                role: `alert`,
                children: (0, $.jsx)(s, {
                  id: `settings.chatGpt.dataControls.training.loadError`,
                  defaultMessage: `Couldn’t load model improvement settings`,
                  description: `Error in ChatGPT Data controls when workspace training eligibility cannot be loaded. A nearby Retry button reloads eligibility; no privacy preference is changed.`,
                }),
              }),
              control: (0, $.jsx)(t, {
                color: `secondary`,
                size: `toolbar`,
                loading: A,
                onClick: () => void j(),
                children: (0, $.jsx)(s, {
                  id: `common.retry`,
                  defaultMessage: `Retry`,
                  description: `Button to retry an operation after an error`,
                }),
              }),
            })
          : null),
      (e[58] = k),
      (e[59] = A),
      (e[60] = S),
      (e[61] = j),
      (e[62] = rt))
    : (rt = e[62]);
  let it;
  e[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((it = (0, $.jsx)(s, {
        id: `settings.chatGpt.dataControls.training`,
        defaultMessage: `Improve the model for everyone`,
        description: `Label for ChatGPT model training data control`,
      })),
      (e[63] = it))
    : (it = e[63]);
  let at;
  e[64] === re
    ? (at = e[65])
    : ((at = re
        ? (0, $.jsx)(s, {
            id: `settings.chatGpt.dataControls.training.unavailableDescription`,
            defaultMessage: `By default, OpenAI does not use data from this workspace to train or improve its models. This plan does not offer an option to opt in to model training.`,
            description: `Explains why the ChatGPT model-improvement switch is off and disabled for a workspace: data from the workspace is not used for training by default, and the workspace plan does not offer a model-training opt-in`,
          })
        : (0, $.jsx)(s, {
            id: `settings.chatGpt.dataControls.training.description`,
            defaultMessage: `Control whether your chats are used for model training`,
            description: `Explains that the ChatGPT model-improvement switch controls whether the person's chats can be used to train models`,
          })),
      (e[64] = re),
      (e[65] = at));
  let ot;
  e[66] !== v ||
  e[67] !== r ||
  e[68] !== k ||
  e[69] !== S ||
  e[70] !== re ||
  e[71] !== g ||
  e[72] !== D?.data_usage_for_training ||
  e[73] !== qe ||
  e[74] !== u
    ? ((ot = (e) => {
        let { "aria-describedby": t } = e;
        return (0, $.jsx)(M, {
          "aria-describedby": t,
          checked: !re && u?.trainingAllowed === !0,
          disabled:
            u == null ||
            u.amphoraLocks?.training_allowed === !0 ||
            v == null ||
            v.id !== g ||
            (S && (k || D?.data_usage_for_training !== `permitted`)),
          onChange: (e) => void qe(`training_allowed`, e),
          ariaLabel: r.formatMessage({
            id: `settings.chatGpt.dataControls.training.ariaLabel`,
            defaultMessage: `Allow chats to improve the model`,
            description: `Accessible label for ChatGPT model training data control`,
          }),
        });
      }),
      (e[66] = v),
      (e[67] = r),
      (e[68] = k),
      (e[69] = S),
      (e[70] = re),
      (e[71] = g),
      (e[72] = D?.data_usage_for_training),
      (e[73] = qe),
      (e[74] = u),
      (e[75] = ot))
    : (ot = e[75]);
  let st;
  e[76] !== at || e[77] !== ot
    ? ((st = (0, $.jsx)(I, { label: it, description: at, control: ot })),
      (e[76] = at),
      (e[77] = ot),
      (e[78] = st))
    : (st = e[78]);
  let ct, lt, ut;
  e[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ct = (0, $.jsx)(Vt, {})),
      (lt = (0, $.jsx)(Yt, {})),
      (ut = (0, $.jsx)(nn, {})),
      (e[79] = ct),
      (e[80] = lt),
      (e[81] = ut))
    : ((ct = e[79]), (lt = e[80]), (ut = e[81]));
  let dt;
  e[82] !== Ee || e[83] !== q
    ? ((dt = Ee
        ? (0, $.jsx)(I, {
            label: (0, $.jsx)(s, {
              id: `settings.informationSharing.rowTitle`,
              defaultMessage: `Information shared with apps`,
              description: `Label for the gated Data Controls settings row that opens the page where a ChatGPT user can review and revoke app-specific permission to automatically fill contact information.`,
            }),
            control: (e) =>
              (0, $.jsx)(t, {
                ...e,
                color: `secondary`,
                size: `toolbar`,
                onClick: () => q(`information-sharing`),
                children: (0, $.jsx)(s, {
                  id: `settings.chatGpt.dataControls.manage`,
                  defaultMessage: `Manage`,
                  description: `Button to manage ChatGPT data`,
                }),
              }),
          })
        : null),
      (e[82] = Ee),
      (e[83] = q),
      (e[84] = dt))
    : (dt = e[84]);
  let ft;
  e[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = (0, $.jsx)(s, {
        id: `settings.chatGpt.dataControls.archivedChats`,
        defaultMessage: `Archived chats`,
        description: `Label for archived ChatGPT chats`,
      })),
      (e[85] = ft))
    : (ft = e[85]);
  let pt;
  e[86] === Oe
    ? (pt = e[87])
    : ((pt = () => void Oe(`/settings/archived-chats`)), (e[86] = Oe), (e[87] = pt));
  let mt;
  e[88] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mt = (0, $.jsx)(s, {
        id: `settings.chatGpt.dataControls.manage`,
        defaultMessage: `Manage`,
        description: `Button to manage ChatGPT data`,
      })),
      (e[88] = mt))
    : (mt = e[88]);
  let ht;
  e[89] === pt
    ? (ht = e[90])
    : ((ht = (0, $.jsx)(I, {
        label: ft,
        control: (0, $.jsx)(t, { color: `secondary`, size: `toolbar`, onClick: pt, children: mt }),
      })),
      (e[89] = pt),
      (e[90] = ht));
  let gt;
  e[91] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((gt = (0, $.jsx)(s, {
        id: `settings.chatGpt.dataControls.archiveAll`,
        defaultMessage: `Archive all chats`,
        description: `Label for archiving all ChatGPT chats`,
      })),
      (e[91] = gt))
    : (gt = e[91]);
  let _t;
  e[92] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_t = (0, $.jsx)(I, {
        label: gt,
        control: (0, $.jsx)(t, {
          color: `secondary`,
          size: `toolbar`,
          onClick: () => Le(`archive`),
          children: (0, $.jsx)(s, {
            id: `settings.chatGpt.dataControls.archive`,
            defaultMessage: `Archive all`,
            description: `Button to archive all ChatGPT chats`,
          }),
        }),
      })),
      (e[92] = _t))
    : (_t = e[92]);
  let vt;
  e[93] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((vt = (0, $.jsx)(s, {
        id: `settings.chatGpt.dataControls.deleteAll`,
        defaultMessage: `Delete all chats`,
        description: `Label for deleting all ChatGPT chats`,
      })),
      (e[93] = vt))
    : (vt = e[93]);
  let yt;
  e[94] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((yt = (0, $.jsx)(I, {
        label: vt,
        control: (0, $.jsx)(t, {
          color: `danger`,
          size: `toolbar`,
          onClick: () => Le(`delete`),
          children: (0, $.jsx)(s, {
            id: `settings.chatGpt.dataControls.delete`,
            defaultMessage: `Delete all`,
            description: `Button to delete all ChatGPT chats`,
          }),
        }),
      })),
      (e[94] = yt))
    : (yt = e[94]);
  let bt;
  e[95] !== H || e[96] !== U || e[97] !== r
    ? ((bt = H
        ? (0, $.jsx)(I, {
            label: (0, $.jsx)(s, {
              id: `settings.chatGpt.dataControls.export.label`,
              defaultMessage: `Export data`,
              description: `Label for requesting an export of an end user’s ChatGPT account data from Data controls.`,
            }),
            control: (0, $.jsx)(t, {
              "aria-label": r.formatMessage({
                id: `settings.chatGpt.dataControls.export.ariaLabel`,
                defaultMessage: `Export ChatGPT account data`,
                description: `Accessible label for the button that opens the ChatGPT account data export confirmation dialog from Data controls.`,
              }),
              color: `secondary`,
              size: `toolbar`,
              onClick: () => Me(U),
              children: (0, $.jsx)(s, {
                id: `settings.chatGpt.dataControls.export.button`,
                defaultMessage: `Export`,
                description: `Button opening the ChatGPT account data export confirmation dialog from Data controls.`,
              }),
            }),
          })
        : null),
      (e[95] = H),
      (e[96] = U),
      (e[97] = r),
      (e[98] = bt))
    : (bt = e[98]);
  let St;
  e[99] !== W || e[100] !== De || e[101] !== h
    ? ((St = h
        ? (0, $.jsx)(I, {
            label: (0, $.jsx)(s, {
              id: `settings.ads.settings.title`,
              defaultMessage: `Ads controls`,
              description: `Heading at the top of the advertising control settings view`,
            }),
            control: (e) =>
              (0, $.jsx)(t, {
                ...e,
                color: `secondary`,
                size: `toolbar`,
                onClick: () => {
                  let e = new URLSearchParams(W);
                  (e.set(`view`, `ads`), e.delete(`adsView`), De(e));
                },
                children: (0, $.jsx)(s, {
                  id: `settings.chatGpt.dataControls.manage`,
                  defaultMessage: `Manage`,
                  description: `Button to manage ChatGPT data`,
                }),
              }),
          })
        : null),
      (e[99] = W),
      (e[100] = De),
      (e[101] = h),
      (e[102] = St))
    : (St = e[102]);
  let Ct;
  e[103] !== r || e[104] !== Te || e[105] !== q
    ? ((Ct = Te
        ? (0, $.jsx)(I, {
            label: (0, $.jsx)(s, {
              id: `settings.chatGpt.marketingPrivacy.title`,
              defaultMessage: `Marketing privacy`,
              description: `Title of the ChatGPT Marketing privacy subpage inside Data controls.`,
            }),
            control: (0, $.jsx)(t, {
              "aria-label": r.formatMessage({
                id: `settings.chatGpt.marketingPrivacy.open.ariaLabel`,
                defaultMessage: `Open marketing privacy settings`,
                description: `Accessible label for the button that opens the ChatGPT Marketing privacy subpage from Data controls.`,
              }),
              color: `secondary`,
              size: `toolbar`,
              onClick: () => q(`marketing-privacy`),
              children: (0, $.jsx)(s, {
                id: `settings.chatGpt.dataControls.manage`,
                defaultMessage: `Manage`,
                description: `Button to manage ChatGPT data`,
              }),
            }),
          })
        : null),
      (e[103] = r),
      (e[104] = Te),
      (e[105] = q),
      (e[106] = Ct))
    : (Ct = e[106]);
  let wt;
  e[107] !== et ||
  e[108] !== rt ||
  e[109] !== st ||
  e[110] !== dt ||
  e[111] !== ht ||
  e[112] !== bt ||
  e[113] !== St ||
  e[114] !== Ct
    ? ((wt = (0, $.jsx)(ke, {
        children: (0, $.jsx)(ke.Content, {
          children: (0, $.jsxs)(ce, {
            children: [et, rt, st, ct, lt, ut, dt, null, ht, _t, yt, bt, St, null, Ct],
          }),
        }),
      })),
      (e[107] = et),
      (e[108] = rt),
      (e[109] = st),
      (e[110] = dt),
      (e[111] = ht),
      (e[112] = bt),
      (e[113] = St),
      (e[114] = Ct),
      (e[115] = wt))
    : (wt = e[115]);
  let Tt;
  e[116] !== H || e[117] !== U || e[118] !== je || e[119] !== ve || e[120] !== we || e[121] !== n.queryClient
    ? ((Tt =
        H && (je === U || we === !0)
          ? (0, $.jsx)(
              Pt,
              {
                open: !0,
                onOpenChange: (e) => {
                  (Me(e ? U : (e) => (e === U ? null : e)), e || n.queryClient.setQueryData(ve, !1));
                },
              },
              U,
            )
          : null),
      (e[116] = H),
      (e[117] = U),
      (e[118] = je),
      (e[119] = ve),
      (e[120] = we),
      (e[121] = n.queryClient),
      (e[122] = Tt))
    : (Tt = e[122]);
  let Dt = G != null,
    Ot;
  e[123] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ot = (e) => {
        e || Le(null);
      }),
      (e[123] = Ot))
    : (Ot = e[123]);
  let kt;
  e[124] !== G || e[125] !== K
    ? ((kt = (e) => {
        (e.preventDefault(), G != null && K.mutate(G));
      }),
      (e[124] = G),
      (e[125] = K),
      (e[126] = kt))
    : (kt = e[126]);
  let At;
  e[127] === G
    ? (At = e[128])
    : ((At = (0, $.jsx)(te, {
        title: (0, $.jsx)(C, {
          children:
            G === `delete`
              ? (0, $.jsx)(s, {
                  id: `settings.chatGpt.dataControls.deleteConfirmTitle`,
                  defaultMessage: `Delete all chats?`,
                  description: `Title for confirming deletion of every ChatGPT chat`,
                })
              : (0, $.jsx)(s, {
                  id: `settings.chatGpt.dataControls.archiveConfirmTitle`,
                  defaultMessage: `Archive all chats?`,
                  description: `Title for confirming archival of every ChatGPT chat`,
                }),
        }),
      })),
      (e[127] = G),
      (e[128] = At));
  let Mt;
  e[129] === G
    ? (Mt = e[130])
    : ((Mt = (0, $.jsx)(ne, {
        asChild: !0,
        children: (0, $.jsx)(`p`, {
          className: `text-sm text-secondary`,
          children:
            G === `delete`
              ? (0, $.jsx)(s, {
                  id: `settings.chatGpt.dataControls.deleteConfirmDescription`,
                  defaultMessage: `This action cannot be undone.`,
                  description: `Warning before deleting every ChatGPT chat`,
                })
              : (0, $.jsx)(s, {
                  id: `settings.chatGpt.dataControls.archiveConfirmDescription`,
                  defaultMessage: `You can manage archived chats from Data controls.`,
                  description: `Explanation before archiving every ChatGPT chat`,
                }),
        }),
      })),
      (e[129] = G),
      (e[130] = Mt));
  let Nt;
  e[131] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Nt = (0, $.jsx)(t, {
        color: `secondary`,
        type: `button`,
        onClick: () => Le(null),
        children: (0, $.jsx)(s, {
          id: `common.cancel`,
          defaultMessage: `Cancel`,
          description: `Cancel button`,
        }),
      })),
      (e[131] = Nt))
    : (Nt = e[131]);
  let Ft = G === `delete` ? `danger` : `primary`,
    It;
  e[132] === G
    ? (It = e[133])
    : ((It =
        G === `delete`
          ? (0, $.jsx)(s, {
              id: `settings.chatGpt.dataControls.delete`,
              defaultMessage: `Delete all`,
              description: `Button to delete all ChatGPT chats`,
            })
          : (0, $.jsx)(s, {
              id: `settings.chatGpt.dataControls.archive`,
              defaultMessage: `Archive all`,
              description: `Button to archive all ChatGPT chats`,
            })),
      (e[132] = G),
      (e[133] = It));
  let J;
  e[134] !== K.isPending || e[135] !== Ft || e[136] !== It
    ? ((J = (0, $.jsxs)(le, {
        children: [Nt, (0, $.jsx)(t, { color: Ft, loading: K.isPending, type: `submit`, children: It })],
      })),
      (e[134] = K.isPending),
      (e[135] = Ft),
      (e[136] = It),
      (e[137] = J))
    : (J = e[137]);
  let Y;
  e[138] !== kt || e[139] !== At || e[140] !== Mt || e[141] !== J
    ? ((Y = (0, $.jsxs)(oe, { as: `form`, onSubmit: kt, children: [At, Mt, J] })),
      (e[138] = kt),
      (e[139] = At),
      (e[140] = Mt),
      (e[141] = J),
      (e[142] = Y))
    : (Y = e[142]);
  let Lt;
  e[143] !== Dt || e[144] !== Y
    ? ((Lt = (0, $.jsx)(ie, { open: Dt, onOpenChange: Ot, children: Y })),
      (e[143] = Dt),
      (e[144] = Y),
      (e[145] = Lt))
    : (Lt = e[145]);
  let zt;
  return (
    e[146] !== wt || e[147] !== Tt || e[148] !== Lt
      ? ((zt = (0, $.jsxs)(Ge, { title: $e, children: [wt, null, Tt, Lt] })),
        (e[146] = wt),
        (e[147] = Tt),
        (e[148] = Lt),
        (e[149] = zt))
      : (zt = e[149]),
    zt
  );
}
function un() {}
async function dn(e, t, n) {
  if (e == null || t == null) return !1;
  let { consumeDataExportReauthentication: r } = await E(
    async () => {
      let { consumeDataExportReauthentication: e } = await import(
        `./data-export-reauth.browser-8f8a52fbc27a.js`
      );
      return { consumeDataExportReauthentication: e };
    },
    __vite__mapDeps([6, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12]),
    import.meta.url,
  );
  return r({ userId: e, accountId: t, signal: n });
}
var fn, pn, $, mn, hn;
function gn() {
  return (gn = e(() => {
    ((fn = R()),
      Nt(),
      ct(),
      c(),
      S(),
      de(),
      g(),
      (pn = V()),
      j(),
      w(),
      De(),
      rt(),
      Ue(),
      We(),
      st(),
      K(),
      ot(),
      Ee(),
      qe(),
      q(),
      _e(),
      F(),
      L(),
      T(),
      fe(),
      N(),
      f(),
      Re(),
      z(),
      Le(),
      ge(),
      A(),
      $e(),
      u(),
      Tt(),
      Ve(),
      U(),
      bt(),
      Lt(),
      Bt(),
      Jt(),
      At(),
      Qt(),
      cn(),
      ($ = B()),
      se(),
      (mn = n(
        async () =>
          (
            await E(
              async () => {
                let { AdsControlsSettings: e } = await import(`./route-d301b07bc046.js`);
                return { AdsControlsSettings: e };
              },
              __vite__mapDeps([13, 1, 2, 3, 4, 5, 14, 15, 16]),
              import.meta.url,
            )
          ).AdsControlsSettings,
      )),
      (hn = n(
        async () =>
          (
            await E(
              async () => {
                let { InformationSharingSettings: e } = await import(`./settings-efd7d88712fc.js`);
                return { InformationSharingSettings: e };
              },
              __vite__mapDeps([17, 1, 2, 3, 4, 5]),
              import.meta.url,
            )
          ).InformationSharingSettings,
      )),
      n(Ae),
      n(Mt));
  }))();
}
gn();
export { ln as ChatGptDataControlsSettings };
//# sourceMappingURL=data-controls-settings-d9bc0b2ecbfc.js.map
