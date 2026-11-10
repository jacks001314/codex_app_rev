const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-3edb343af31a.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./data-export-reauth.browser-b602a3ab4da9.js",
      "./session-7c09e4681e00.js",
      "./logout-engine-8fde8f64413f.js",
      "./datadog-rum.browser-219d0f1d0fbd.js",
      "./esm-b96d2f3fb76a.js",
      "./datadogProfiler-ae8ea0e10132.js",
      "./replayStats-8eb2b3f5a1de.js",
      "./route-be55cff7d5f6.js",
      "./availability-575290109b23.js",
      "./holdout-67689f31b275.js",
      "./state-d192cfa657f1.js",
      "./settings-3173d0c87027.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  CCt as i,
  DB as a,
  F3 as o,
  FBt as s,
  HO as c,
  I3 as l,
  IH as u,
  IO as d,
  JO as f,
  KO as p,
  LNt as m,
  LO as h,
  Lst as g,
  Mst as _,
  NSt as v,
  OB as y,
  OFt as b,
  Oit as x,
  PBt as S,
  Qst as ee,
  RO as C,
  Rst as w,
  Smt as T,
  TY as E,
  USt as D,
  Vrt as O,
  WO as te,
  XOt as k,
  XSt as A,
  Y3 as j,
  Z3 as M,
  ZSt as N,
  dy as ne,
  ew as P,
  iCt as F,
  jit as re,
  jst as ie,
  kFt as ae,
  lk as oe,
  nCt as se,
  okt as ce,
  qO as le,
  qrt as ue,
  sct as de,
  sw as I,
  tkt as L,
  uk as R,
  uw as z,
  uy as fe,
  vD as B,
  vst as V,
  yD as H,
  yst as pe,
  zO as me,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A5n as he,
  BRr as U,
  Brr as ge,
  C0n as _e,
  Cjr as ve,
  D5n as ye,
  GLn as be,
  Hz as xe,
  IIr as Se,
  IMr as Ce,
  Irr as we,
  Iz as Te,
  LF as Ee,
  LIr as De,
  OMr as Oe,
  QF as ke,
  RF as Ae,
  SRn as je,
  VPn as Me,
  Wln as Ne,
  _Nr as Pe,
  bLr as Fe,
  bRn as Ie,
  cA as W,
  eI as G,
  eIn as Le,
  eMr as Re,
  gLr as ze,
  hJ as Be,
  hNr as Ve,
  iRr as He,
  imr as Ue,
  jcn as We,
  lBr as Ge,
  lNr as Ke,
  nLr as qe,
  nMr as Je,
  nzr as K,
  oMr as Ye,
  oun as Xe,
  pJ as Ze,
  qLn as Qe,
  rmr as $e,
  sA as et,
  sun as tt,
  tIn as nt,
  tLr as rt,
  tRr as it,
  tyr as at,
  uBr as q,
  wLr as ot,
  wMr as st,
  wcn as ct,
  xjr as lt,
  zRr as ut,
  zrr as dt,
} from "./app-initial-ad16eaadf81f.js";
import { bv as ft, hv as pt, mv as mt, xv as ht, yv as gt } from "./app-primary-3e00728c2a4c.js";
import { n as _t, t as vt } from "./permission-state-ff8643bb7d10.js";
import { n as yt, t as bt } from "./permission-denied-dialog-af58d0145e0f.js";
import { n as xt, t as St } from "./availability-575290109b23.js";
import {
  c as Ct,
  g as wt,
  h as Tt,
  n as Et,
  o as Dt,
  t as Ot,
} from "./chatgpt-user-granular-consent-5fff80d4df26.js";
import { n as kt, t as At } from "./training-eligibility-query-658a1454e4ac.js";
import { n as jt, t as Mt } from "./complete-add.browser-7d1c30be85a5.js";
import { n as Nt } from "./dialog-81ccbbb0d0f0.js";
import { r as Pt, t as Ft } from "./dialog-5cdea715fc49.js";
async function It() {
  return (
    await b(
      async () => {
        let { ClaudeImportDialog: e } = await import(`./dialog-3edb343af31a.js`);
        return { ClaudeImportDialog: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5]),
      import.meta.url,
    )
  ).ClaudeImportDialog;
}
function Lt() {
  return (Lt = e(() => {
    ae();
  }))();
}
function Rt(e) {
  let t = (0, Bt.c)(58),
    { open: r, onOpenChange: i } = e,
    a = n(ee),
    o = ce(),
    s = Ue(),
    c = w(),
    l = (0, J.useRef)(null),
    u = (0, J.useRef)(null),
    f = (0, J.useRef)(null),
    m = (0, J.useRef)(null),
    [g, _] = (0, J.useState)(null),
    v,
    y;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = () => () => {
        l.current = null;
      }),
      (y = []),
      (t[0] = v),
      (t[1] = y))
    : ((v = t[0]), (y = t[1])),
    (0, J.useEffect)(v, y));
  let b;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = async function (e) {
        return l.current === e;
      }),
      (t[2] = b))
    : (b = t[2]);
  let x = b,
    S;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (e) =>
        zt(
          e,
          () => x(e),
          () => l.current === e,
        )),
      (t[3] = S))
    : (S = t[3]);
  let T;
  t[4] !== o || t[5] !== i || t[6] !== a
    ? ((T = async (e, t) => {
        e !== `cancelled` &&
          (await x(t)) &&
          e !== `reauthenticating` &&
          ((l.current = null),
          i(!1),
          a
            .get(ue)
            .success(
              o.formatMessage({
                id: `settings.chatGpt.dataControls.export.success`,
                defaultMessage: `Data export requested. You’ll receive an email when it’s ready.`,
                description: `Success toast after an end user requests a ChatGPT account data export from Data controls. The export is delivered later by email.`,
              }),
            ));
      }),
      (t[4] = o),
      (t[5] = i),
      (t[6] = a),
      (t[7] = T))
    : (T = t[7]);
  let E;
  t[8] !== o || t[9] !== a
    ? ((E = async (e, t) => {
        (await x(t)) &&
          (e instanceof re && e.errorCode,
          (l.current = null),
          e instanceof re && e.status === 409
            ? a
                .get(ue)
                .danger(
                  o.formatMessage({
                    id: `settings.chatGpt.dataControls.export.conflictError`,
                    defaultMessage: `Your existing export is still being processed. You’ll receive an email when it’s ready.`,
                    description: `Warning shown when an end user requests another ChatGPT account data export while an earlier export is still processing.`,
                  }),
                  { errorAnalytics: { toastId: `settings.chatGpt.dataControls.export.conflictError` } },
                )
            : e instanceof re &&
                (e.status === 401 ||
                  e.errorCode === `reauth_required` ||
                  e.errorCode === `phone_verification_required`)
              ? a
                  .get(ue)
                  .danger(
                    o.formatMessage({
                      id: `settings.chatGpt.dataControls.export.reauthError`,
                      defaultMessage: `Please sign in again, then retry your data export.`,
                      description: `Error toast shown when ChatGPT requires an end user to reauthenticate before requesting an account data export.`,
                    }),
                    { errorAnalytics: { toastId: `settings.chatGpt.dataControls.export.reauthError` } },
                  )
              : e instanceof re && e.errorCode === `email_required`
                ? a
                    .get(ue)
                    .danger(
                      o.formatMessage({
                        id: `settings.chatGpt.dataControls.export.emailError`,
                        defaultMessage: `Add and verify an email address in ChatGPT before requesting an export.`,
                        description: `Error toast shown when a phone-only ChatGPT account must add and verify an email address before requesting an account data export.`,
                      }),
                      { errorAnalytics: { toastId: `settings.chatGpt.dataControls.export.emailError` } },
                    )
                : a
                    .get(ue)
                    .danger(
                      o.formatMessage({
                        id: `settings.chatGpt.dataControls.export.error`,
                        defaultMessage: `Couldn’t request your data export. Please try again later.`,
                        description: `Error toast shown when a ChatGPT account data export request fails for an unspecified reason.`,
                      }),
                      { errorAnalytics: { toastId: `settings.chatGpt.dataControls.export.error` } },
                    ));
      }),
      (t[8] = o),
      (t[9] = a),
      (t[10] = E))
    : (E = t[10]);
  let D;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (e, t, n) => {
        u.current === n && (u.current = null);
      }),
      (t[11] = D))
    : (D = t[11]);
  let O;
  t[12] !== T || t[13] !== E
    ? ((O = { mutationFn: S, onSuccess: T, onError: E, onSettled: D }), (t[12] = T), (t[13] = E), (t[14] = O))
    : (O = t[14]);
  let k = pe(O),
    A = k.isPending || k.data === `reauthenticating`,
    M;
  t[15] === k
    ? (M = t[16])
    : ((M = function (e) {
        l.current === e && u.current == null && ((u.current = e), k.mutate(e));
      }),
      (t[15] = k),
      (t[16] = M));
  let N = M,
    ne;
  t[17] === i
    ? (ne = t[18])
    : ((ne = function () {
        ((l.current = null), _(null), i(!1));
      }),
      (t[17] = i),
      (t[18] = ne));
  let P = ne,
    F;
  t[19] !== P || t[20] !== g || t[21] !== o || t[22] !== c || t[23] !== a || t[24] !== N
    ? ((F = async function (e) {
        let t = g;
        if (t == null || l.current !== t || f.current === t) return;
        f.current = t;
        let n = !1;
        try {
          (await x(t)) &&
            (n = await Mt({ accountId: t.accountId, email: e, queryClient: c, userId: t.userId }));
        } catch {}
        if (!(await x(t))) {
          l.current === t && P();
          return;
        }
        if ((_(null), !n)) {
          ((l.current = null),
            a
              .get(ue)
              .danger(
                o.formatMessage({
                  id: `settings.chatGpt.dataControls.export.emailRefreshError`,
                  defaultMessage: `Email verified. Sign in again, then retry your data export.`,
                  description: `Error after an end user verifies an email for ChatGPT data export but their browser account session cannot be refreshed.`,
                }),
                { errorAnalytics: { toastId: `settings.chatGpt.dataControls.export.emailRefreshError` } },
              ));
          return;
        }
        ((m.current = t), N(t));
      }),
      (t[19] = P),
      (t[20] = g),
      (t[21] = o),
      (t[22] = c),
      (t[23] = a),
      (t[24] = N),
      (t[25] = F))
    : (F = t[25]);
  let ie = F,
    ae = r && g == null,
    oe;
  t[26] !== P || t[27] !== A
    ? ((oe = (e) => {
        !e && !A && P();
      }),
      (t[26] = P),
      (t[27] = A),
      (t[28] = oe))
    : (oe = t[28]);
  let se;
  t[29] !== s || t[30] !== A || t[31] !== N
    ? ((se = (e) => {
        if ((e.preventDefault(), !A && u.current == null && s.userId != null && s.accountId != null)) {
          let e = { userId: s.userId, accountId: s.accountId };
          ((l.current = e), N(e));
        }
      }),
      (t[29] = s),
      (t[30] = A),
      (t[31] = N),
      (t[32] = se))
    : (se = t[32]);
  let de;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, Y.jsx)(C, {
        title: (0, Y.jsx)(le, {
          children: (0, Y.jsx)(L, {
            id: `settings.chatGpt.dataControls.export.dialog.title`,
            defaultMessage: `Request data export?`,
            description: `Title of the confirmation dialog shown before an end user requests an export of their ChatGPT account data.`,
          }),
        }),
      })),
      (t[33] = de))
    : (de = t[33]);
  let I;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Y.jsx)(me, {
        children: (0, Y.jsx)(p, {
          asChild: !0,
          children: (0, Y.jsxs)(`ul`, {
            className: `flex list-disc flex-col gap-1 ps-5 text-sm text-secondary`,
            children: [
              (0, Y.jsx)(`li`, {
                children: (0, Y.jsx)(L, {
                  id: `settings.chatGpt.dataControls.export.dialog.contents`,
                  defaultMessage: `Your account details and chats will be included.`,
                  description: `First item in the ChatGPT data export confirmation dialog. It explains what the account export contains.`,
                }),
              }),
              (0, Y.jsx)(`li`, {
                children: (0, Y.jsx)(L, {
                  id: `settings.chatGpt.dataControls.export.dialog.delivery`,
                  defaultMessage: `We’ll email a download link to your registered address.`,
                  description: `Second item in the ChatGPT data export confirmation dialog. It explains that the account export is delivered by email.`,
                }),
              }),
              (0, Y.jsx)(`li`, {
                children: (0, Y.jsx)(L, {
                  id: `settings.chatGpt.dataControls.export.dialog.expiration`,
                  defaultMessage: `The download link expires after 24 hours.`,
                  description: `Third item in the ChatGPT data export confirmation dialog. It tells an end user how long the emailed download link remains valid.`,
                }),
              }),
              (0, Y.jsx)(`li`, {
                children: (0, Y.jsx)(L, {
                  id: `settings.chatGpt.dataControls.export.dialog.processing`,
                  defaultMessage: `Processing may take some time.`,
                  description: `Final item in the ChatGPT data export confirmation dialog. It warns an end user that preparing the account export is asynchronous.`,
                }),
              }),
            ],
          }),
        }),
      })),
      (t[34] = I))
    : (I = t[34]);
  let R;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Y.jsx)(L, { id: `common.cancel`, defaultMessage: `Cancel`, description: `Cancel button` })),
      (t[35] = R))
    : (R = t[35]);
  let z;
  t[36] !== P || t[37] !== A
    ? ((z = (0, Y.jsx)(j, { color: `secondary`, disabled: A, type: `button`, onClick: P, children: R })),
      (t[36] = P),
      (t[37] = A),
      (t[38] = z))
    : (z = t[38]);
  let fe;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, Y.jsx)(L, {
        id: `settings.chatGpt.dataControls.export.dialog.confirm`,
        defaultMessage: `Confirm export`,
        description: `Primary button in the ChatGPT data export confirmation dialog. It submits the end user’s account export request.`,
      })),
      (t[39] = fe))
    : (fe = t[39]);
  let B;
  t[40] === A
    ? (B = t[41])
    : ((B = (0, Y.jsx)(j, { loading: A, type: `submit`, children: fe })), (t[40] = A), (t[41] = B));
  let V;
  t[42] !== z || t[43] !== B
    ? ((V = (0, Y.jsx)(me, { children: (0, Y.jsxs)(h, { children: [z, B] }) })),
      (t[42] = z),
      (t[43] = B),
      (t[44] = V))
    : (V = t[44]);
  let H;
  t[45] !== se || t[46] !== V
    ? ((H = (0, Y.jsxs)(d, { as: `form`, onSubmit: se, children: [de, I, V] })),
      (t[45] = se),
      (t[46] = V),
      (t[47] = H))
    : (H = t[47]);
  let he;
  t[48] !== ae || t[49] !== oe || t[50] !== H
    ? ((he = (0, Y.jsx)(te, { open: ae, onOpenChange: oe, children: H })),
      (t[48] = ae),
      (t[49] = oe),
      (t[50] = H),
      (t[51] = he))
    : (he = t[51]);
  let U;
  t[52] !== ie || t[53] !== g ? ((U = null), (t[52] = ie), (t[53] = g), (t[54] = U)) : (U = t[54]);
  let ge;
  return (
    t[55] !== he || t[56] !== U
      ? ((ge = (0, Y.jsxs)(Y.Fragment, { children: [he, U] })), (t[55] = he), (t[56] = U), (t[57] = ge))
      : (ge = t[57]),
    ge
  );
}
async function zt(e, t, n) {
  try {
    let n = await Ze(`chatgpt_account_data_export`);
    return (await t())
      ? (await He.safePost(`/accounts/data_export`, { additionalHeaders: n, expectedIdentity: e }),
        `requested`)
      : `cancelled`;
  } catch (e) {
    throw e;
  }
}
var Bt, J, Y;
function Vt() {
  return (Vt = e(() => {
    ((Bt = S()),
      V(),
      g(),
      N(),
      (J = s()),
      k(),
      K(),
      $e(),
      Be(),
      at(),
      M(),
      f(),
      c(),
      Qe(),
      O(),
      r(),
      x(),
      jt(),
      Nt(),
      (Y = m()));
  }))();
}
function Ht(e) {
  let r = (0, Ut.c)(28),
    { onBack: i } = e,
    o = n(ee),
    s = ce(),
    c = ve(`500337272`),
    { data: l, isError: u, isFetching: d, isLoading: f, refetch: p } = F(Ot),
    m;
  r[0] !== c || r[1] !== o
    ? ((m = async (e) => {
        let { key: t, value: n } = e,
          r = o.get(Ce),
          i = o.get(U);
        if (r == null || i == null) return;
        let a = o.query.snapshot(Ot),
          s = Ct(c) ? { analytics: !1, marketing: !1, personalization: !1 } : { [t]: n },
          l = Tt(o, s, !0),
          u = !0,
          d = o.watch((e) => {
            let { get: t } = e;
            (r !== t(Ce) || i !== t(U)) && (u = !1);
          }),
          f = () => {
            if (!u) return !1;
            let e = l.getCurrentUpdate();
            if (Object.keys(e).length === 0) return !1;
            let t = Ct(c);
            return (
              a.setData((n) =>
                n == null
                  ? n
                  : {
                      ...n,
                      ...(t ? { analytics: !1, marketing: !1, personalization: !1 } : e),
                      isConsentRequired: t || n.isConsentRequired,
                    },
              ),
              !0
            );
          };
        return a
          .cancel()
          .then(async () => {
            if (!f()) return;
            let e = async () => {
              (await a.cancel(), f());
            };
            return He.safePost(`/user_granular_consent`, {
              requestBody: { granular_consent: s },
              additionalHeaders: { "ChatGPT-Account-ID": r, [T]: r },
              expectedIdentity: { userId: i, accountId: r },
            }).then(e, async (t) => {
              throw (await e(), t);
            });
          })
          .finally(() => {
            (d(), l.finish());
          });
      }),
      (r[0] = c),
      (r[1] = o),
      (r[2] = m))
    : (m = r[2]);
  let h;
  r[3] !== s || r[4] !== o
    ? ((h = () => {
        o.get(ue).danger(
          s.formatMessage({
            id: `settings.chatGpt.marketingPrivacy.updateError`,
            defaultMessage: `Couldn’t update marketing privacy settings`,
            description: `Error toast shown when an end user cannot update a ChatGPT marketing privacy preference.`,
          }),
          { errorAnalytics: { toastId: `settings.chatGpt.marketingPrivacy.updateError` } },
        );
      }),
      (r[3] = s),
      (r[4] = o),
      (r[5] = h))
    : (h = r[5]);
  let g;
  r[6] !== m || r[7] !== h
    ? ((g = { mutationFn: m, onError: h }), (r[6] = m), (r[7] = h), (r[8] = g))
    : (g = r[8]);
  let _ = pe(g),
    v = !(l?.isConsentRequired ?? !0),
    y;
  r[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, X.jsx)(L, {
        id: `settings.chatGpt.marketingPrivacy.title`,
        defaultMessage: `Marketing privacy`,
        description: `Title of the ChatGPT Marketing privacy subpage inside Data controls.`,
      })),
      (r[9] = y))
    : (y = r[9]);
  let b, x;
  r[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, X.jsx)(a, { className: `rtl:rotate-180`, asset: fe })),
      (x = (0, X.jsx)(L, {
        id: `settings.chatGpt.marketingPrivacy.back`,
        defaultMessage: `Back`,
        description: `Button returning an end user from ChatGPT Marketing privacy to the main Data controls page.`,
      })),
      (r[10] = b),
      (r[11] = x))
    : ((b = r[10]), (x = r[11]));
  let S;
  r[12] === i
    ? (S = r[13])
    : ((S = (0, X.jsxs)(j, { color: `ghostActive`, size: `toolbar`, onClick: i, children: [b, x] })),
      (r[12] = i),
      (r[13] = S));
  let C = f || void 0,
    w;
  r[14] !== l || r[15] !== v || r[16] !== s || r[17] !== u || r[18] !== d || r[19] !== p || r[20] !== _
    ? ((w = u
        ? (0, X.jsx)(I, {
            label: (0, X.jsx)(L, {
              id: `settings.chatGpt.marketingPrivacy.loadError`,
              defaultMessage: `Couldn’t load marketing privacy settings`,
              description: `Error shown on the ChatGPT Marketing privacy settings subpage when the end user's current consent choices cannot be loaded. Concise settings-row text with no placeholders.`,
            }),
            control: (0, X.jsx)(j, {
              color: `secondary`,
              loading: d,
              size: `toolbar`,
              onClick: () => void p(),
              children: (0, X.jsx)(L, {
                id: `common.retry`,
                defaultMessage: `Retry`,
                description: `Button to retry an operation after an error`,
              }),
            }),
          })
        : (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(I, {
                label: (0, X.jsx)(L, {
                  id: `settings.chatGpt.marketingPrivacy.measurement.label`,
                  defaultMessage: `Marketing measurement`,
                  description: `Label for the ChatGPT Marketing privacy toggle controlling cookies used to measure marketing campaign effectiveness.`,
                }),
                description: (0, X.jsx)(L, {
                  id: `settings.chatGpt.marketingPrivacy.measurement.description`,
                  defaultMessage: `These cookies help us measure the effectiveness of our marketing campaigns.`,
                  description: `Supporting text for the Marketing measurement toggle on the ChatGPT Marketing privacy settings subpage.`,
                }),
                control: (0, X.jsx)(oe, {
                  ariaLabel: s.formatMessage({
                    id: `settings.chatGpt.marketingPrivacy.measurement.ariaLabel`,
                    defaultMessage: `Allow marketing measurement`,
                    description: `Accessible label for the ChatGPT Marketing measurement privacy toggle.`,
                  }),
                  checked: l?.marketing ?? v,
                  disabled: l == null || _.isPending,
                  onChange: (e) => _.mutate({ key: `marketing`, value: e }),
                }),
              }),
              (0, X.jsx)(I, {
                label: (0, X.jsx)(L, {
                  id: `settings.chatGpt.marketingPrivacy.personalization.label`,
                  defaultMessage: `Personalized marketing`,
                  description: `Label for the ChatGPT Marketing privacy toggle controlling personalization of OpenAI marketing on third-party platforms.`,
                }),
                description: (0, X.jsx)(L, {
                  id: `settings.chatGpt.marketingPrivacy.personalization.description`,
                  defaultMessage: `This helps us personalize and measure OpenAI’s own marketing on third-party platforms.`,
                  description: `Supporting text for the Personalized marketing toggle on the ChatGPT Marketing privacy settings subpage.`,
                }),
                control: (0, X.jsx)(oe, {
                  ariaLabel: s.formatMessage({
                    id: `settings.chatGpt.marketingPrivacy.personalization.ariaLabel`,
                    defaultMessage: `Allow personalized marketing`,
                    description: `Accessible label for the ChatGPT Personalized marketing privacy toggle.`,
                  }),
                  checked: l?.personalization ?? v,
                  disabled: l == null || _.isPending,
                  onChange: (e) => _.mutate({ key: `personalization`, value: e }),
                }),
              }),
            ],
          })),
      (r[14] = l),
      (r[15] = v),
      (r[16] = s),
      (r[17] = u),
      (r[18] = d),
      (r[19] = p),
      (r[20] = _),
      (r[21] = w))
    : (w = r[21]);
  let E;
  r[22] !== C || r[23] !== w
    ? ((E = (0, X.jsx)(et, {
        children: (0, X.jsx)(et.Content, { children: (0, X.jsx)(t, { "aria-busy": C, children: w }) }),
      })),
      (r[22] = C),
      (r[23] = w),
      (r[24] = E))
    : (E = r[24]);
  let D;
  return (
    r[25] !== E || r[26] !== S
      ? ((D = (0, X.jsx)(ke, { title: y, backSlot: S, children: E })), (r[25] = E), (r[26] = S), (r[27] = D))
      : (D = r[27]),
    D
  );
}
var Ut, X;
function Wt() {
  return (Wt = e(() => {
    ((Ut = S()),
      ne(),
      V(),
      N(),
      de(),
      k(),
      ot(),
      at(),
      Et(),
      Je(),
      wt(),
      Dt(),
      M(),
      y(),
      O(),
      R(),
      r(),
      G(),
      W(),
      z(),
      P(),
      lt(),
      Ge(),
      (X = m()));
  }))();
}
var Gt;
function Kt() {
  return (Kt = e(() => {
    (N(),
      Oe(),
      r(),
      Ge(),
      Ve(),
      (Gt = i(
        ee,
        ({ get: e }) =>
          !e(Pe, { layer: `4107938382`, parameter: `disable_precise_location` }) &&
          (e(q, `1957563541`) || e(Pe, { layer: `4107938382`, parameter: `enable_precise_location` })),
      )));
  }))();
}
function qt() {
  let e = (0, Xt.c)(5),
    t = F(Gt),
    { data: n } = F(Re),
    r = F(_t);
  if (!t) return null;
  let i = r ?? null,
    a = n?.preciseLocationAllowed,
    o = n?.amphoraLocks?.precise_location_allowed,
    s = n?.preciseLocationRestrictedReason,
    c;
  return (
    e[0] !== i || e[1] !== a || e[2] !== o || e[3] !== s
      ? ((c = (0, Z.jsx)(Jt, { permission: i, allowed: a, locked: o, restrictedReason: s })),
        (e[0] = i),
        (e[1] = a),
        (e[2] = o),
        (e[3] = s),
        (e[4] = c))
      : (c = e[4]),
    c
  );
}
function Jt(e) {
  let t = (0, Xt.c)(30),
    { permission: r, allowed: i, locked: a, restrictedReason: o } = e,
    s = n(ee),
    c = ce(),
    [l, d] = (0, Zt.useState)(!1),
    f = i === !1 && (a === !0 || !!o),
    p = i === !0 && r === `granted`,
    m = f ? $t : Qt,
    h;
  t[0] === m
    ? (h = t[1])
    : ((h = (e) =>
        (0, Z.jsx)(be, {
          href: m,
          initiator: `external_link`,
          appearance: `secondary`,
          openTarget: `external-browser`,
          children: e,
        })),
      (t[0] = m),
      (t[1] = h));
  let g = h,
    _;
  if (f) {
    let e;
    (t[2] !== g || t[3] !== o
      ? ((e = o
          ? (0, Z.jsx)(L, {
              id: `settings.chatGpt.dataControls.location.restrictedReason`,
              defaultMessage: `{reason} <link>Learn more</link>`,
              description: `Server-provided parental-control restriction reason followed by a link to the parental-controls location FAQ`,
              values: { reason: o, link: g },
            })
          : (0, Z.jsx)(L, {
              id: `settings.chatGpt.dataControls.location.restricted`,
              defaultMessage: `Restricted by parental controls. ChatGPT won't use your device's location. <link>Learn more</link>`,
              description: `Explains that parental controls block device location, with a link to the parental-controls FAQ`,
              values: { link: g },
            })),
        (t[2] = g),
        (t[3] = o),
        (t[4] = e))
      : (e = t[4]),
      (_ = e));
  } else if (p) {
    let e;
    (t[5] === g
      ? (e = t[6])
      : ((e = (0, Z.jsx)(L, {
          id: `settings.chatGpt.dataControls.location.granted`,
          defaultMessage: `Allow ChatGPT to use your device's precise location when providing information. <link>Learn more</link>`,
          description: `Location setting description when browser permission is granted, with a link to location help`,
          values: { link: g },
        })),
        (t[5] = g),
        (t[6] = e)),
      (_ = e));
  } else {
    let e;
    (t[7] === g
      ? (e = t[8])
      : ((e = (0, Z.jsx)(L, {
          id: `settings.chatGpt.dataControls.location.promptOrDenied`,
          defaultMessage: `When enabled, your location helps ChatGPT provide more relevant information, like local recommendations, news, and weather. <link>Learn more</link>`,
          description: `Location setting description when browser permission is undecided or denied, with a link to location help`,
          values: { link: g },
        })),
        (t[7] = g),
        (t[8] = e)),
      (_ = e));
  }
  let v;
  t[9] === p
    ? (v = t[10])
    : ((v = p
        ? (0, Z.jsx)(L, {
            id: `settings.chatGpt.dataControls.location.on`,
            defaultMessage: `On`,
            description: `Status of device location when browser access is granted`,
          })
        : (0, Z.jsx)(L, {
            id: `settings.chatGpt.dataControls.location.off`,
            defaultMessage: `Off`,
            description: `Status of device location when browser access is denied or parental controls restrict it`,
          })),
      (t[9] = p),
      (t[10] = v));
  let y = v,
    b;
  t[11] !== i || t[12] !== c || t[13] !== s
    ? ((b = async function (e) {
        let t = s.get(Ce),
          n = s.get(U),
          r = s.get(Fe),
          a = s.query.snapshot(Re),
          o = () => s.get(Ce) === t && s.get(U) === n && s.get(Fe) === r;
        try {
          let n = !e;
          if (e && i === !1) {
            let e = await a.fetch();
            if (
              !o() ||
              !s.get(Gt) ||
              e.preciseLocationAllowed == null ||
              e.amphoraLocks?.precise_location_allowed === !0 ||
              e.preciseLocationRestrictedReason
            )
              return;
            n = e.preciseLocationAllowed === !1;
          }
          (n &&
            (await He.safePatch(`/settings/account_user_setting`, {
              expectedIdentity: t != null && r != null ? { accountId: t, userId: r } : void 0,
              additionalHeaders: t == null ? void 0 : { "ChatGPT-Account-ID": t, [T]: t },
              parameters: { query: { feature: `precise_location_allowed`, value: e } },
            }),
            e || (await a.cancel(), a.setData(Yt), o() && st()),
            await a.invalidate()),
            e &&
              o() &&
              (await pt(
                s,
                ft.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_SETTINGS,
                gt.CHATGPT_LOCATION_PERMISSION_INTERACTION_STATUS_ROW,
              )));
        } catch {
          o() &&
            s
              .get(ue)
              .danger(
                c.formatMessage({
                  id: `settings.chatGpt.dataControls.updateError`,
                  defaultMessage: `Could not update data controls`,
                  description: `Error toast when ChatGPT data controls cannot be updated`,
                }),
                { errorAnalytics: { toastId: `settings.chatGpt.dataControls.updateError` } },
              );
        }
      }),
      (t[11] = i),
      (t[12] = c),
      (t[13] = s),
      (t[14] = b))
    : (b = t[14]);
  let x = b,
    S;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Z.jsx)(L, {
        id: `settings.chatGpt.dataControls.location`,
        defaultMessage: `Location`,
        description: `Label for precise location data control`,
      })),
      (t[15] = S))
    : (S = t[15]);
  let C;
  t[16] !== i ||
  t[17] !== p ||
  t[18] !== m ||
  t[19] !== a ||
  t[20] !== l ||
  t[21] !== r ||
  t[22] !== f ||
  t[23] !== s ||
  t[24] !== y ||
  t[25] !== x
    ? ((C = (e) => {
        let { "aria-describedby": t } = e;
        return f || p || (i === !0 && r === `denied`)
          ? (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsxs)(j, {
                  "aria-describedby": t,
                  color: `ghost`,
                  size: `toolbar`,
                  onClick: (e) => {
                    !f && r === `denied`
                      ? he(s, bt)
                      : je({ event: e, href: m, initiator: `external_link`, openTarget: `external-browser` });
                  },
                  children: [y, (0, Z.jsx)(u, {})],
                }),
                p &&
                  (0, Z.jsx)(j, {
                    "aria-describedby": t,
                    color: `secondary`,
                    size: `toolbar`,
                    disabled: a === !0 || l,
                    loading: l,
                    onClick: () => {
                      (d(!0), x(!1).finally(() => d(!1)));
                    },
                    children: (0, Z.jsx)(L, {
                      id: `settings.chatGpt.dataControls.location.turnOff`,
                      defaultMessage: `Turn off`,
                      description: `Button in ChatGPT Location settings that stops sharing precise device location for this account, without changing browser permission. Paired with Turn on.`,
                    }),
                  }),
              ],
            })
          : (0, Z.jsx)(j, {
              "aria-describedby": t,
              color: `secondary`,
              size: `toolbar`,
              disabled: i == null || l,
              loading: l,
              onClick: () => {
                (d(!0), x(!0).finally(() => d(!1)));
              },
              children: (0, Z.jsx)(L, {
                id: `chatgptConversations.preciseLocation.turnOn`,
                defaultMessage: `Turn on`,
                description: `Button requesting permission to use precise location for local ChatGPT answers`,
              }),
            });
      }),
      (t[16] = i),
      (t[17] = p),
      (t[18] = m),
      (t[19] = a),
      (t[20] = l),
      (t[21] = r),
      (t[22] = f),
      (t[23] = s),
      (t[24] = y),
      (t[25] = x),
      (t[26] = C))
    : (C = t[26]);
  let w;
  return (
    t[27] !== _ || t[28] !== C
      ? ((w = (0, Z.jsx)(I, { label: S, description: _, control: C })), (t[27] = _), (t[28] = C), (t[29] = w))
      : (w = t[29]),
    w
  );
}
function Yt(e) {
  return e == null ? e : { ...e, preciseLocationAllowed: !1 };
}
var Xt, Zt, Z, Qt, $t;
function en() {
  return (en = e(() => {
    ((Xt = S()),
      ht(),
      N(),
      de(),
      (Zt = s()),
      k(),
      ot(),
      at(),
      Je(),
      Kt(),
      yt(),
      vt(),
      mt(),
      M(),
      Qe(),
      Ie(),
      E(),
      ye(),
      O(),
      Oe(),
      r(),
      z(),
      (Z = m()),
      (Qt = `https://help.openai.com/en/articles/9237897-chatgpt-search#location`),
      ($t = `https://help.openai.com/en/articles/12315553-parental-controls-on-chatgpt-faq#location`));
  }))();
}
function tn() {
  let e = (0, nn.c)(17),
    t = ce(),
    { data: n, isError: r, refetch: i } = F(Re),
    { mutate: a, isPending: o, error: s } = F(Ye),
    c;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, rn.jsx)(L, {
        id: `settings.chatGpt.dataControls.networkAccess`,
        defaultMessage: `Work network access`,
        description: `Label for ChatGPT Work network access`,
      })),
      (e[0] = c))
    : (c = e[0]);
  let l = n?.enableFloraNetworkAccess === !0,
    u = n == null || r || o || n.amphoraLocks?.enable_flora_network_access === !0,
    d;
  e[1] === a ? (d = e[2]) : ((d = (e) => a(e)), (e[1] = a), (e[2] = d));
  let f;
  e[3] === t
    ? (f = e[4])
    : ((f = t.formatMessage({
        id: `settings.chatGpt.dataControls.networkAccess.ariaLabel`,
        defaultMessage: `Allow Work network access`,
        description: `Accessible label for ChatGPT Work network access`,
      })),
      (e[3] = t),
      (e[4] = f));
  let p;
  e[5] !== l || e[6] !== u || e[7] !== d || e[8] !== f
    ? ((p = (0, rn.jsx)(I, {
        label: c,
        control: (0, rn.jsx)(oe, { checked: l, disabled: u, onChange: d, ariaLabel: f }),
      })),
      (e[5] = l),
      (e[6] = u),
      (e[7] = d),
      (e[8] = f),
      (e[9] = p))
    : (p = e[9]);
  let m;
  e[10] !== s || e[11] !== r || e[12] !== i
    ? ((m =
        r || s != null
          ? (0, rn.jsx)(B, {
              type: `error`,
              role: `alert`,
              content: (0, rn.jsx)(L, {
                id: `settings.chatGpt.networkAccess.error`,
                defaultMessage: `Could not load or save Work network access. Reload and try again`,
                description: `Error when reading or saving the account's Work network preference`,
              }),
              primaryCtaText: (0, rn.jsx)(L, {
                id: `settings.chatGpt.networkAccess.reload`,
                defaultMessage: `Reload`,
                description: `Reload the saved Work network preference after an error`,
              }),
              onPrimaryCtaClick: () => {
                i();
              },
            })
          : null),
      (e[10] = s),
      (e[11] = r),
      (e[12] = i),
      (e[13] = m))
    : (m = e[13]);
  let h;
  return (
    e[14] !== p || e[15] !== m
      ? ((h = (0, rn.jsxs)(rn.Fragment, { children: [p, m] })), (e[14] = p), (e[15] = m), (e[16] = h))
      : (h = e[16]),
    h
  );
}
var nn, rn;
function an() {
  return (an = e(() => {
    ((nn = S()), N(), k(), Je(), H(), R(), z(), (rn = m()));
  }))();
}
function on(e) {
  let t = (0, sn.c)(37),
    { accountId: r, userId: i, open: a, onOpenChange: o, triggerContent: s } = e,
    c = n(ee),
    l = ce(),
    u;
  t[0] !== r || t[1] !== i
    ? ((u = {
        mutationFn: () =>
          He.safePost(`/flora/workspace/reset`, {
            expectedIdentity: { accountId: r, userId: i },
            additionalHeaders: { "ChatGPT-Account-ID": r, [T]: r },
            retry: !1,
          }),
        retry: !1,
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = u))
    : (u = t[2]);
  let { mutate: f, isPending: m } = pe(u),
    g;
  t[3] !== m || t[4] !== o
    ? ((g = (e) => {
        m || o(e);
      }),
      (t[3] = m),
      (t[4] = o),
      (t[5] = g))
    : (g = t[5]);
  let _ = !m,
    v;
  t[6] !== l || t[7] !== m || t[8] !== f || t[9] !== o || t[10] !== c
    ? ((v = (e) => {
        (e.preventDefault(),
          !m &&
            f(void 0, {
              onSuccess: () => {
                (o(!1),
                  c
                    .get(ue)
                    .success(
                      l.formatMessage({
                        id: `chatgpt.settings.data_controls.work_reset.toast.success`,
                        defaultMessage: `Work reset`,
                        description: `Success toast after resetting the user's cloud Work environment`,
                      }),
                    ));
              },
              onError: (e) => {
                c.get(ue).danger(
                  l.formatMessage({
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
      (t[6] = l),
      (t[7] = m),
      (t[8] = f),
      (t[9] = o),
      (t[10] = c),
      (t[11] = v))
    : (v = t[11]);
  let y;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsx)(le, {
        children: (0, Q.jsx)(L, {
          id: `chatgpt.settings.data_controls.work_reset.modal.title`,
          defaultMessage: `Reset ChatGPT Work?`,
          description: `Title of the confirmation dialog before resetting the user's cloud Work environment`,
        }),
      })),
      (t[12] = y))
    : (y = t[12]);
  let b;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(me, {
        children: (0, Q.jsx)(C, {
          title: y,
          subtitle: (0, Q.jsx)(p, {
            children: (0, Q.jsx)(L, {
              id: `chatgpt.settings.data_controls.work_reset.modal.description`,
              defaultMessage: `This will delete files and other local data in your current work environment. Files saved to your Library will remain. A fresh environment will be created the next time you start working.`,
              description: `Body text in the Reset ChatGPT Work confirmation dialog in Settings > Data controls. "Work environment" means the remote environment used for code and shell commands. "Library" is the ChatGPT product feature where durable files are saved and must not be translated. Clearly distinguish deletable environment-local files from Library files that are preserved. No placeholders or rich text.`,
            }),
          }),
        }),
      })),
      (t[13] = b))
    : (b = t[13]);
  let x;
  t[14] === o ? (x = t[15]) : ((x = () => o(!1)), (t[14] = o), (t[15] = x));
  let S;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsx)(L, {
        id: `chatgpt.settings.data_controls.work_reset.modal.button.cancel`,
        defaultMessage: `Cancel`,
        description: `Closes the Work reset confirmation without changing the environment`,
      })),
      (t[16] = S))
    : (S = t[16]);
  let w;
  t[17] !== m || t[18] !== x
    ? ((w = (0, Q.jsx)(j, { color: `secondary`, disabled: m, type: `button`, onClick: x, children: S })),
      (t[17] = m),
      (t[18] = x),
      (t[19] = w))
    : (w = t[19]);
  let E;
  t[20] === m
    ? (E = t[21])
    : ((E = m
        ? (0, Q.jsx)(L, {
            id: `chatgpt.settings.data_controls.work_reset.modal.button.pending`,
            defaultMessage: `Resetting…`,
            description: `Button label while the cloud Work environment reset is in progress`,
          })
        : (0, Q.jsx)(L, {
            id: `chatgpt.settings.data_controls.work_reset.modal.button.confirm`,
            defaultMessage: `Reset`,
            description: `Confirms deletion of the current cloud Work environment's files and local data`,
          })),
      (t[20] = m),
      (t[21] = E));
  let D;
  t[22] !== m || t[23] !== E
    ? ((D = (0, Q.jsx)(j, { color: `danger`, loading: m, type: `submit`, children: E })),
      (t[22] = m),
      (t[23] = E),
      (t[24] = D))
    : (D = t[24]);
  let O;
  t[25] !== D || t[26] !== w
    ? ((O = (0, Q.jsx)(me, { children: (0, Q.jsxs)(h, { children: [w, D] }) })),
      (t[25] = D),
      (t[26] = w),
      (t[27] = O))
    : (O = t[27]);
  let k;
  t[28] !== O || t[29] !== v
    ? ((k = (0, Q.jsxs)(d, { as: `form`, className: `select-none`, onSubmit: v, children: [b, O] })),
      (t[28] = O),
      (t[29] = v),
      (t[30] = k))
    : (k = t[30]);
  let A;
  return (
    t[31] !== a || t[32] !== k || t[33] !== g || t[34] !== _ || t[35] !== s
      ? ((A = (0, Q.jsx)(te, {
          open: a,
          triggerContent: s,
          onOpenChange: g,
          showDialogClose: _,
          size: `compact`,
          children: k,
        })),
        (t[31] = a),
        (t[32] = k),
        (t[33] = g),
        (t[34] = _),
        (t[35] = s),
        (t[36] = A))
      : (A = t[36]),
    A
  );
}
var sn, Q;
function cn() {
  return (cn = e(() => {
    ((sn = S()), V(), N(), de(), k(), at(), M(), f(), c(), O(), r(), (Q = m()));
  }))();
}
function ln() {
  let e = (0, dn.c)(6),
    t = se(q, `1625797156`),
    n = F(ze),
    r = F(ut),
    i = F(Fe),
    a = n.status === `loaded` && n.structure === `workspace`,
    o = t && a,
    s;
  e[0] === o ? (s = e[1]) : ((s = { enabled: o }), (e[0] = o), (e[1] = s));
  let { data: c } = se(it, r, s);
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
      ? ((u = (0, pn.jsx)(un, { accountId: r, userId: i }, l)),
        (e[2] = r),
        (e[3] = l),
        (e[4] = i),
        (e[5] = u))
      : (u = e[5]),
    u
  );
}
function un(e) {
  let t = (0, dn.c)(5),
    { accountId: n, userId: r } = e,
    [i, a] = (0, fn.useState)(!1),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, pn.jsx)(L, {
        id: `chatgpt.settings.data_controls.work_reset.row.label`,
        defaultMessage: `Reset ChatGPT Work`,
        description: `Label for the Data controls setting that resets the user's cloud Work environment`,
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  return (
    t[1] !== n || t[2] !== i || t[3] !== r
      ? ((s = (0, pn.jsx)(I, {
          className: `select-none`,
          label: o,
          control: (e) =>
            (0, pn.jsx)(on, {
              accountId: n,
              userId: r,
              open: i,
              onOpenChange: a,
              triggerContent: (0, pn.jsx)(j, {
                ...e,
                color: `danger`,
                size: `toolbar`,
                children: (0, pn.jsx)(L, {
                  id: `chatgpt.settings.data_controls.work_reset.row.button.label`,
                  defaultMessage: `Reset`,
                  description: `Button opening the confirmation to reset the user's cloud Work environment`,
                }),
              }),
            }),
        })),
        (t[1] = n),
        (t[2] = i),
        (t[3] = r),
        (t[4] = s))
      : (s = t[4]),
    s
  );
}
var dn, fn, pn;
function mn() {
  return (mn = e(() => {
    ((dn = S()), N(), (fn = s()), k(), ot(), Ke(), M(), z(), Ge(), cn(), (pn = m()));
  }))();
}
function hn() {
  let e = (0, xn.c)(161),
    r = n(ee),
    i = ce(),
    { userId: a, accountId: o } = Ue(),
    { data: s } = F(Re),
    { data: c } = We(),
    l = c?.structure === `workspace`,
    u = F(St),
    f = F(Ce),
    m;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = { preview: !1 }), (e[0] = m)) : (m = e[0]);
  let { data: g, isError: v } = We(void 0, m),
    y = g?.structure === `workspace`,
    b = ve(`2502526155`),
    x;
  e[1] !== o || e[2] !== a
    ? ((x = [`training-disclosure-verified-access`, o, a]), (e[1] = o), (e[2] = a), (e[3] = x))
    : (x = e[3]);
  let S = b && a != null && o != null && g?.id === o,
    T;
  e[4] !== o || e[5] !== a
    ? ((T = (e) => {
        let { signal: t } = e;
        return He.safeGet(`/accounts/verified_access`, {
          signal: t,
          additionalHeaders: o == null ? void 0 : { "ChatGPT-Account-ID": o },
          expectedIdentity: o == null || a == null ? void 0 : { accountId: o, userId: a },
        });
      }),
      (e[4] = o),
      (e[5] = a),
      (e[6] = T))
    : (T = e[6]);
  let E;
  e[7] !== x || e[8] !== S || e[9] !== T
    ? ((E = { queryKey: x, enabled: S, queryFn: T, staleTime: 6e4 }),
      (e[7] = x),
      (e[8] = S),
      (e[9] = T),
      (e[10] = E))
    : (E = e[10]);
  let { data: O, isSuccess: k } = _(E),
    M = b && g?.id === o && k && O.programs.some(yn),
    N = w(),
    ne;
  e[11] !== g || e[12] !== f || e[13] !== a
    ? ((ne = At({ account: g, userId: a, settingsAccountId: f })),
      (e[11] = g),
      (e[12] = f),
      (e[13] = a),
      (e[14] = ne))
    : (ne = e[14]);
  let P = ne,
    { data: re, isError: ie, isFetching: ae, refetch: de } = _(P),
    R = y && re?.data_usage_for_training === `disallowed`,
    z;
  e[15] === l ? (z = e[16]) : ((z = { enabled: l }), (e[15] = l), (e[16] = z));
  let { data: fe } = se(it, c?.id ?? null, z),
    B;
  e[17] !== c || e[18] !== l || e[19] !== fe?.features
    ? ((B =
        c != null &&
        c.plan_type !== `quorum` &&
        (!l || fe?.features?.includes(`workspace_share_links`) === !0)),
      (e[17] = c),
      (e[18] = l),
      (e[19] = fe?.features),
      (e[20] = B))
    : (B = e[20]);
  let V = B,
    H;
  e[21] === g
    ? (H = e[22])
    : ((H = g?.structure === `workspace` && qe(g.plan_type)), (e[21] = g), (e[22] = H));
  let me = H,
    he = me && g?.id === o,
    U;
  e[23] === he ? (U = e[24]) : ((U = { enabled: he }), (e[23] = he), (e[24] = U));
  let { data: ge, isError: ye } = se(Se, g?.id ?? ``, U),
    be;
  e[25] !== me || e[26] !== ye || e[27] !== ge?.permissions
    ? ((be = me && !ye && ge?.permissions?.includes(`chatgpt.workspace.feature.data-export.access`) === !0),
      (e[25] = me),
      (e[26] = ye),
      (e[27] = ge?.permissions),
      (e[28] = be))
    : (be = e[28]);
  let xe = be,
    we = a != null && o != null && !v && g?.id === o && (g.structure !== `workspace` || xe),
    Te = g == null ? null : `${a}:${o}:${g.id}`,
    De = g?.id,
    Oe;
  e[29] !== o || e[30] !== De || e[31] !== a
    ? ((Oe = [`chatgpt-data-export-reauth`, a, o, De]), (e[29] = o), (e[30] = De), (e[31] = a), (e[32] = Oe))
    : (Oe = e[32]);
  let Ae = Oe,
    je;
  e[33] !== g?.id || e[34] !== a
    ? ((je = (e) => {
        let { signal: t } = e;
        return bn(a, g?.id, t);
      }),
      (e[33] = g?.id),
      (e[34] = a),
      (e[35] = je))
    : (je = e[35]);
  let Me;
  e[36] !== Ae || e[37] !== je || e[38] !== !1
    ? ((Me = {
        queryKey: Ae,
        queryFn: je,
        enabled: !1,
        staleTime: 1 / 0,
        gcTime: 0,
        retry: !1,
        refetchOnWindowFocus: !1,
      }),
      (e[36] = Ae),
      (e[37] = je),
      (e[38] = !1),
      (e[39] = Me))
    : (Me = e[39]);
  let { data: Pe } = _(Me),
    Fe = ve(`3157804138`),
    Ie = ve(`1850361504`);
  (ve(`500944450`), (0, Sn.useState)(!1));
  let [W, G] = A(),
    ze = D(),
    Be = W.get(`view`),
    [Ve, Ge] = (0, Sn.useState)(null),
    [Ke, Je] = (0, Sn.useState)(!1),
    [K, Ye] = (0, Sn.useState)(null),
    Xe;
  e[40] !== N || e[41] !== r
    ? ((Xe = async (e) => {
        let t = r.get(ut);
        (await He.safePatch(`/conversations`, {
          requestBody: e === `archive` ? { is_archived: !0 } : { is_visible: !1 },
        }),
          dt(r, t),
          r.get(ut) === t && r.set(_e, []),
          tt(r),
          N.invalidateQueries({ queryKey: [Ne] }),
          await Le({ includePersisted: !0 }).catch(vn));
      }),
      (e[40] = N),
      (e[41] = r),
      (e[42] = Xe))
    : (Xe = e[42]);
  let Ze;
  e[43] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ze = () => Ye(null)), (e[43] = Ze)) : (Ze = e[43]);
  let Qe = pe({ mutationFn: Xe, onSuccess: Ze, onError: () => $e() });
  function $e() {
    r.get(ue).danger(
      i.formatMessage({
        id: `settings.chatGpt.dataControls.updateError`,
        defaultMessage: `Could not update data controls`,
        description: `Error toast when ChatGPT data controls cannot be updated`,
      }),
      { errorAnalytics: { toastId: `settings.chatGpt.dataControls.updateError` } },
    );
  }
  let nt;
  e[44] !== g || e[45] !== y || e[46] !== N || e[47] !== r || e[48] !== f || e[49] !== $e || e[50] !== P
    ? ((nt = async function (e, t) {
        e === `precise_location_allowed` && !t && st();
        let n = r.query.snapshot(Re),
          i = n.getData();
        if (
          e === `training_allowed` &&
          (i == null ||
            i.amphoraLocks?.training_allowed === !0 ||
            g == null ||
            g.id !== f ||
            r.get(Ce) !== f ||
            (y &&
              (N.getQueryState(P.queryKey)?.status === `error` ||
                N.getQueryData(P.queryKey)?.data_usage_for_training !== `permitted`)))
        )
          return;
        let a = r.get(Ce);
        try {
          (await He.safePatch(`/settings/account_user_setting`, {
            additionalHeaders: a == null ? void 0 : { "ChatGPT-Account-ID": a },
            parameters: { query: { feature: e, value: t } },
          }),
            e === `precise_location_allowed` && !t && st(),
            e === `training_allowed` && n.setData((e) => (e == null ? e : { ...e, trainingAllowed: t })),
            await n.invalidate());
        } catch {
          r.get(Ce) === a && $e();
        }
      }),
      (e[44] = g),
      (e[45] = y),
      (e[46] = N),
      (e[47] = r),
      (e[48] = f),
      (e[49] = $e),
      (e[50] = P),
      (e[51] = nt))
    : (nt = e[51]);
  let rt = nt,
    at;
  e[52] !== W || e[53] !== G
    ? ((at = function (e) {
        let t = new URLSearchParams(W);
        (e == null ? t.delete(`view`) : t.set(`view`, e), G(t));
      }),
      (e[52] = W),
      (e[53] = G),
      (e[54] = at))
    : (at = e[54]);
  let q = at;
  if (u && [`ads`, `ads-history`, `ads-topics`].includes(Be ?? ``)) {
    let t;
    return (
      e[55] !== W || e[56] !== G
        ? ((t = (0, $.jsx)(Cn, {
            onBack: () => {
              let e = new URLSearchParams(W);
              (e.delete(`view`), e.delete(`adsView`), G(e));
            },
          })),
          (e[55] = W),
          (e[56] = G),
          (e[57] = t))
        : (t = e[57]),
      t
    );
  }
  if (Be === `marketing-privacy` && Fe) {
    let t;
    return (
      e[58] === q ? (t = e[59]) : ((t = (0, $.jsx)(Ht, { onBack: () => q(null) })), (e[58] = q), (e[59] = t)),
      t
    );
  }
  if (Be === `information-sharing` && Ie) {
    let t;
    return (
      e[60] === q ? (t = e[61]) : ((t = (0, $.jsx)(wn, { onBack: () => q(null) })), (e[60] = q), (e[61] = t)),
      t
    );
  }
  let ot;
  if (M) {
    let t;
    (e[62] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(L, {
          id: `settings.chatGpt.dataControls.training.trustedAccess.description`,
          defaultMessage: `Allow your content to be used to improve our models for you and other users. We take steps to protect your privacy. <strong>Eligible Trusted Access content may be used for safety training.</strong> <link>Learn more</link>`,
          description: `Description under Improve the model for everyone in ChatGPT Data controls on web and desktop, shown only to users with active Trusted Access. Explains content use and privacy, including a safety-training disclosure that also applies when the general model-improvement switch is off or disabled. Trusted Access is the program name. The strong tag emphasizes the complete safety-training sentence; link opens the Data Controls FAQ. Multi-sentence body copy.`,
          values: { strong: _n, link: gn },
        })),
        (e[62] = t))
      : (t = e[62]),
      (ot = t));
  } else if (R) {
    let t;
    (e[63] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(L, {
          id: `settings.chatGpt.dataControls.training.unavailableDescription`,
          defaultMessage: `By default, OpenAI does not use data from this workspace to train or improve its models. This plan does not offer an option to opt in to model training.`,
          description: `Explains why the ChatGPT model-improvement switch is off and disabled for a workspace: data from the workspace is not used for training by default, and the workspace plan does not offer a model-training opt-in`,
        })),
        (e[63] = t))
      : (t = e[63]),
      (ot = t));
  } else {
    let t;
    (e[64] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(L, {
          id: `settings.chatGpt.dataControls.training.description`,
          defaultMessage: `Control whether your chats are used for model training`,
          description: `Explains that the ChatGPT model-improvement switch controls whether the person's chats can be used to train models`,
        })),
        (e[64] = t))
      : (t = e[64]),
      (ot = t));
  }
  let ct;
  e[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ct = (0, $.jsx)(Ee, { showChatGptDataControlsLabel: !0, slug: `data-controls` })), (e[65] = ct))
    : (ct = e[65]);
  let lt;
  e[66] !== V || e[67] !== c || e[68] !== i || e[69] !== Ke
    ? ((lt = V
        ? (0, $.jsx)(I, {
            label: (0, $.jsx)(L, {
              id: `settings.chatGpt.dataControls.sharedLinks`,
              defaultMessage: `Shared links`,
              description: `Label for managing shared ChatGPT links from Data controls`,
            }),
            control: (0, $.jsx)(Ft, {
              accountId: c.id,
              open: Ke,
              onOpenChange: Je,
              triggerContent: (0, $.jsx)(j, {
                "aria-label": i.formatMessage({
                  id: `settings.chatGpt.dataControls.manageSharedLinks`,
                  defaultMessage: `Manage shared links`,
                  description: `Accessible label for the button that opens ChatGPT Shared links management from Data controls`,
                }),
                color: `secondary`,
                size: `toolbar`,
                children: (0, $.jsx)(L, {
                  id: `settings.chatGpt.dataControls.manage`,
                  defaultMessage: `Manage`,
                  description: `Button to manage ChatGPT data`,
                }),
              }),
            }),
          })
        : null),
      (e[66] = V),
      (e[67] = c),
      (e[68] = i),
      (e[69] = Ke),
      (e[70] = lt))
    : (lt = e[70]);
  let ft;
  e[71] !== ie || e[72] !== ae || e[73] !== y || e[74] !== de
    ? ((ft =
        y && ie
          ? (0, $.jsx)(I, {
              label: (0, $.jsx)(`span`, {
                role: `alert`,
                children: (0, $.jsx)(L, {
                  id: `settings.chatGpt.dataControls.training.loadError`,
                  defaultMessage: `Couldn’t load model improvement settings`,
                  description: `Error in ChatGPT Data controls when workspace training eligibility cannot be loaded. A nearby Retry button reloads eligibility; no privacy preference is changed.`,
                }),
              }),
              control: (0, $.jsx)(j, {
                color: `secondary`,
                size: `toolbar`,
                loading: ae,
                onClick: () => void de(),
                children: (0, $.jsx)(L, {
                  id: `common.retry`,
                  defaultMessage: `Retry`,
                  description: `Button to retry an operation after an error`,
                }),
              }),
            })
          : null),
      (e[71] = ie),
      (e[72] = ae),
      (e[73] = y),
      (e[74] = de),
      (e[75] = ft))
    : (ft = e[75]);
  let pt;
  e[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pt = (0, $.jsx)(L, {
        id: `settings.chatGpt.dataControls.training`,
        defaultMessage: `Improve the model for everyone`,
        description: `Label for ChatGPT model training data control`,
      })),
      (e[76] = pt))
    : (pt = e[76]);
  let mt;
  e[77] !== g ||
  e[78] !== i ||
  e[79] !== ie ||
  e[80] !== y ||
  e[81] !== R ||
  e[82] !== f ||
  e[83] !== re?.data_usage_for_training ||
  e[84] !== rt ||
  e[85] !== s
    ? ((mt = (e) => {
        let { "aria-describedby": t } = e;
        return (0, $.jsx)(oe, {
          "aria-describedby": t,
          checked: !R && s?.trainingAllowed === !0,
          disabled:
            s == null ||
            s.amphoraLocks?.training_allowed === !0 ||
            g == null ||
            g.id !== f ||
            (y && (ie || re?.data_usage_for_training !== `permitted`)),
          onChange: (e) => void rt(`training_allowed`, e),
          ariaLabel: i.formatMessage({
            id: `settings.chatGpt.dataControls.training.ariaLabel`,
            defaultMessage: `Allow chats to improve the model`,
            description: `Accessible label for ChatGPT model training data control`,
          }),
        });
      }),
      (e[77] = g),
      (e[78] = i),
      (e[79] = ie),
      (e[80] = y),
      (e[81] = R),
      (e[82] = f),
      (e[83] = re?.data_usage_for_training),
      (e[84] = rt),
      (e[85] = s),
      (e[86] = mt))
    : (mt = e[86]);
  let ht;
  e[87] !== mt || e[88] !== ot
    ? ((ht = (0, $.jsx)(I, { label: pt, description: ot, control: mt })),
      (e[87] = mt),
      (e[88] = ot),
      (e[89] = ht))
    : (ht = e[89]);
  let gt, _t, vt;
  e[90] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((gt = (0, $.jsx)(qt, {})),
      (_t = (0, $.jsx)(tn, {})),
      (vt = (0, $.jsx)(ln, {})),
      (e[90] = gt),
      (e[91] = _t),
      (e[92] = vt))
    : ((gt = e[90]), (_t = e[91]), (vt = e[92]));
  let yt;
  e[93] !== Ie || e[94] !== q
    ? ((yt = Ie
        ? (0, $.jsx)(I, {
            label: (0, $.jsx)(L, {
              id: `settings.informationSharing.rowTitle`,
              defaultMessage: `Information shared with apps`,
              description: `Label for the gated Data Controls settings row that opens the page where a ChatGPT user can review and revoke app-specific permission to automatically fill contact information.`,
            }),
            control: (e) =>
              (0, $.jsx)(j, {
                ...e,
                color: `secondary`,
                size: `toolbar`,
                onClick: () => q(`information-sharing`),
                children: (0, $.jsx)(L, {
                  id: `settings.chatGpt.dataControls.manage`,
                  defaultMessage: `Manage`,
                  description: `Button to manage ChatGPT data`,
                }),
              }),
          })
        : null),
      (e[93] = Ie),
      (e[94] = q),
      (e[95] = yt))
    : (yt = e[95]);
  let bt;
  e[96] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((bt = (0, $.jsx)(L, {
        id: `settings.chatGpt.dataControls.archivedChats`,
        defaultMessage: `Archived chats`,
        description: `Label for archived ChatGPT chats`,
      })),
      (e[96] = bt))
    : (bt = e[96]);
  let xt;
  e[97] === ze
    ? (xt = e[98])
    : ((xt = () => void ze(`/settings/archived-chats`)), (e[97] = ze), (e[98] = xt));
  let Ct;
  e[99] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ct = (0, $.jsx)(L, {
        id: `settings.chatGpt.dataControls.manage`,
        defaultMessage: `Manage`,
        description: `Button to manage ChatGPT data`,
      })),
      (e[99] = Ct))
    : (Ct = e[99]);
  let wt;
  e[100] === xt
    ? (wt = e[101])
    : ((wt = (0, $.jsx)(I, {
        label: bt,
        control: (0, $.jsx)(j, { color: `secondary`, size: `toolbar`, onClick: xt, children: Ct }),
      })),
      (e[100] = xt),
      (e[101] = wt));
  let Tt;
  e[102] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Tt = (0, $.jsx)(L, {
        id: `settings.chatGpt.dataControls.archiveAll`,
        defaultMessage: `Archive all chats`,
        description: `Label for archiving all ChatGPT chats`,
      })),
      (e[102] = Tt))
    : (Tt = e[102]);
  let Et;
  e[103] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Et = (0, $.jsx)(I, {
        label: Tt,
        control: (0, $.jsx)(j, {
          color: `secondary`,
          size: `toolbar`,
          onClick: () => Ye(`archive`),
          children: (0, $.jsx)(L, {
            id: `settings.chatGpt.dataControls.archive`,
            defaultMessage: `Archive all`,
            description: `Button to archive all ChatGPT chats`,
          }),
        }),
      })),
      (e[103] = Et))
    : (Et = e[103]);
  let Dt;
  e[104] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Dt = (0, $.jsx)(L, {
        id: `settings.chatGpt.dataControls.deleteAll`,
        defaultMessage: `Delete all chats`,
        description: `Label for deleting all ChatGPT chats`,
      })),
      (e[104] = Dt))
    : (Dt = e[104]);
  let Ot;
  e[105] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ot = (0, $.jsx)(I, {
        label: Dt,
        control: (0, $.jsx)(j, {
          color: `danger`,
          size: `toolbar`,
          onClick: () => Ye(`delete`),
          children: (0, $.jsx)(L, {
            id: `settings.chatGpt.dataControls.delete`,
            defaultMessage: `Delete all`,
            description: `Button to delete all ChatGPT chats`,
          }),
        }),
      })),
      (e[105] = Ot))
    : (Ot = e[105]);
  let kt;
  e[106] !== we || e[107] !== Te || e[108] !== i
    ? ((kt = we
        ? (0, $.jsx)(I, {
            label: (0, $.jsx)(L, {
              id: `settings.chatGpt.dataControls.export.label`,
              defaultMessage: `Export data`,
              description: `Label for requesting an export of an end user’s ChatGPT account data from Data controls.`,
            }),
            control: (0, $.jsx)(j, {
              "aria-label": i.formatMessage({
                id: `settings.chatGpt.dataControls.export.ariaLabel`,
                defaultMessage: `Export ChatGPT account data`,
                description: `Accessible label for the button that opens the ChatGPT account data export confirmation dialog from Data controls.`,
              }),
              color: `secondary`,
              size: `toolbar`,
              onClick: () => Ge(Te),
              children: (0, $.jsx)(L, {
                id: `settings.chatGpt.dataControls.export.button`,
                defaultMessage: `Export`,
                description: `Button opening the ChatGPT account data export confirmation dialog from Data controls.`,
              }),
            }),
          })
        : null),
      (e[106] = we),
      (e[107] = Te),
      (e[108] = i),
      (e[109] = kt))
    : (kt = e[109]);
  let jt;
  e[110] !== W || e[111] !== G || e[112] !== u
    ? ((jt = u
        ? (0, $.jsx)(I, {
            label: (0, $.jsx)(L, {
              id: `settings.ads.settings.title`,
              defaultMessage: `Ads controls`,
              description: `Heading at the top of the advertising control settings view`,
            }),
            control: (e) =>
              (0, $.jsx)(j, {
                ...e,
                color: `secondary`,
                size: `toolbar`,
                onClick: () => {
                  let e = new URLSearchParams(W);
                  (e.set(`view`, `ads`), e.delete(`adsView`), G(e));
                },
                children: (0, $.jsx)(L, {
                  id: `settings.chatGpt.dataControls.manage`,
                  defaultMessage: `Manage`,
                  description: `Button to manage ChatGPT data`,
                }),
              }),
          })
        : null),
      (e[110] = W),
      (e[111] = G),
      (e[112] = u),
      (e[113] = jt))
    : (jt = e[113]);
  let Mt;
  e[114] !== i || e[115] !== Fe || e[116] !== q
    ? ((Mt = Fe
        ? (0, $.jsx)(I, {
            label: (0, $.jsx)(L, {
              id: `settings.chatGpt.marketingPrivacy.title`,
              defaultMessage: `Marketing privacy`,
              description: `Title of the ChatGPT Marketing privacy subpage inside Data controls.`,
            }),
            control: (0, $.jsx)(j, {
              "aria-label": i.formatMessage({
                id: `settings.chatGpt.marketingPrivacy.open.ariaLabel`,
                defaultMessage: `Open marketing privacy settings`,
                description: `Accessible label for the button that opens the ChatGPT Marketing privacy subpage from Data controls.`,
              }),
              color: `secondary`,
              size: `toolbar`,
              onClick: () => q(`marketing-privacy`),
              children: (0, $.jsx)(L, {
                id: `settings.chatGpt.dataControls.manage`,
                defaultMessage: `Manage`,
                description: `Button to manage ChatGPT data`,
              }),
            }),
          })
        : null),
      (e[114] = i),
      (e[115] = Fe),
      (e[116] = q),
      (e[117] = Mt))
    : (Mt = e[117]);
  let Nt;
  e[118] !== lt ||
  e[119] !== ft ||
  e[120] !== ht ||
  e[121] !== yt ||
  e[122] !== wt ||
  e[123] !== kt ||
  e[124] !== jt ||
  e[125] !== Mt
    ? ((Nt = (0, $.jsx)(et, {
        children: (0, $.jsx)(et.Content, {
          children: (0, $.jsxs)(t, {
            children: [lt, ft, ht, gt, _t, vt, yt, null, wt, Et, Ot, kt, jt, null, Mt],
          }),
        }),
      })),
      (e[118] = lt),
      (e[119] = ft),
      (e[120] = ht),
      (e[121] = yt),
      (e[122] = wt),
      (e[123] = kt),
      (e[124] = jt),
      (e[125] = Mt),
      (e[126] = Nt))
    : (Nt = e[126]);
  let Pt;
  e[127] !== we ||
  e[128] !== Te ||
  e[129] !== Ve ||
  e[130] !== Ae ||
  e[131] !== Pe ||
  e[132] !== r.queryClient
    ? ((Pt =
        we && (Ve === Te || Pe === !0)
          ? (0, $.jsx)(
              Rt,
              {
                open: !0,
                onOpenChange: (e) => {
                  (Ge(e ? Te : (e) => (e === Te ? null : e)), e || r.queryClient.setQueryData(Ae, !1));
                },
              },
              Te,
            )
          : null),
      (e[127] = we),
      (e[128] = Te),
      (e[129] = Ve),
      (e[130] = Ae),
      (e[131] = Pe),
      (e[132] = r.queryClient),
      (e[133] = Pt))
    : (Pt = e[133]);
  let It = K != null,
    Lt;
  e[134] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Lt = (e) => {
        e || Ye(null);
      }),
      (e[134] = Lt))
    : (Lt = e[134]);
  let zt;
  e[135] !== K || e[136] !== Qe
    ? ((zt = (e) => {
        (e.preventDefault(), K != null && Qe.mutate(K));
      }),
      (e[135] = K),
      (e[136] = Qe),
      (e[137] = zt))
    : (zt = e[137]);
  let Bt;
  e[138] === K
    ? (Bt = e[139])
    : ((Bt = (0, $.jsx)(C, {
        title: (0, $.jsx)(le, {
          children:
            K === `delete`
              ? (0, $.jsx)(L, {
                  id: `settings.chatGpt.dataControls.deleteConfirmTitle`,
                  defaultMessage: `Delete all chats?`,
                  description: `Title for confirming deletion of every ChatGPT chat`,
                })
              : (0, $.jsx)(L, {
                  id: `settings.chatGpt.dataControls.archiveConfirmTitle`,
                  defaultMessage: `Archive all chats?`,
                  description: `Title for confirming archival of every ChatGPT chat`,
                }),
        }),
      })),
      (e[138] = K),
      (e[139] = Bt));
  let J;
  e[140] === K
    ? (J = e[141])
    : ((J = (0, $.jsx)(p, {
        asChild: !0,
        children: (0, $.jsx)(`p`, {
          className: `text-sm text-secondary`,
          children:
            K === `delete`
              ? (0, $.jsx)(L, {
                  id: `settings.chatGpt.dataControls.deleteConfirmDescription`,
                  defaultMessage: `This action cannot be undone.`,
                  description: `Warning before deleting every ChatGPT chat`,
                })
              : (0, $.jsx)(L, {
                  id: `settings.chatGpt.dataControls.archiveConfirmDescription`,
                  defaultMessage: `You can manage archived chats from Data controls.`,
                  description: `Explanation before archiving every ChatGPT chat`,
                }),
        }),
      })),
      (e[140] = K),
      (e[141] = J));
  let Y;
  e[142] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, $.jsx)(j, {
        color: `secondary`,
        type: `button`,
        onClick: () => Ye(null),
        children: (0, $.jsx)(L, {
          id: `common.cancel`,
          defaultMessage: `Cancel`,
          description: `Cancel button`,
        }),
      })),
      (e[142] = Y))
    : (Y = e[142]);
  let Vt = K === `delete` ? `danger` : `primary`,
    Ut;
  e[143] === K
    ? (Ut = e[144])
    : ((Ut =
        K === `delete`
          ? (0, $.jsx)(L, {
              id: `settings.chatGpt.dataControls.delete`,
              defaultMessage: `Delete all`,
              description: `Button to delete all ChatGPT chats`,
            })
          : (0, $.jsx)(L, {
              id: `settings.chatGpt.dataControls.archive`,
              defaultMessage: `Archive all`,
              description: `Button to archive all ChatGPT chats`,
            })),
      (e[143] = K),
      (e[144] = Ut));
  let X;
  e[145] !== Qe.isPending || e[146] !== Vt || e[147] !== Ut
    ? ((X = (0, $.jsxs)(h, {
        children: [Y, (0, $.jsx)(j, { color: Vt, loading: Qe.isPending, type: `submit`, children: Ut })],
      })),
      (e[145] = Qe.isPending),
      (e[146] = Vt),
      (e[147] = Ut),
      (e[148] = X))
    : (X = e[148]);
  let Wt;
  e[149] !== zt || e[150] !== Bt || e[151] !== J || e[152] !== X
    ? ((Wt = (0, $.jsxs)(d, { as: `form`, onSubmit: zt, children: [Bt, J, X] })),
      (e[149] = zt),
      (e[150] = Bt),
      (e[151] = J),
      (e[152] = X),
      (e[153] = Wt))
    : (Wt = e[153]);
  let Gt;
  e[154] !== It || e[155] !== Wt
    ? ((Gt = (0, $.jsx)(te, { open: It, onOpenChange: Lt, children: Wt })),
      (e[154] = It),
      (e[155] = Wt),
      (e[156] = Gt))
    : (Gt = e[156]);
  let Kt;
  return (
    e[157] !== Nt || e[158] !== Pt || e[159] !== Gt
      ? ((Kt = (0, $.jsxs)(ke, { title: ct, children: [Nt, null, Pt, Gt] })),
        (e[157] = Nt),
        (e[158] = Pt),
        (e[159] = Gt),
        (e[160] = Kt))
      : (Kt = e[160]),
    Kt
  );
}
function gn(e) {
  return (0, $.jsx)(be, {
    href: `https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt`,
    initiator: `external_link`,
    underline: `always`,
    children: e,
  });
}
function _n(e) {
  return (0, $.jsx)(`strong`, { children: e });
}
function vn() {}
function yn(e) {
  return e.state === `active` && e.grants.length > 0;
}
async function bn(e, t, n) {
  if (e == null || t == null) return !1;
  let { consumeDataExportReauthentication: r } = await b(
    async () => {
      let { consumeDataExportReauthentication: e } = await import(
        `./data-export-reauth.browser-b602a3ab4da9.js`
      );
      return { consumeDataExportReauthentication: e };
    },
    __vite__mapDeps([6, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12]),
    import.meta.url,
  );
  return r({ userId: e, accountId: t, signal: n });
}
var xn, Sn, $, Cn, wn;
function Tn() {
  return (Tn = e(() => {
    ((xn = S()),
      Lt(),
      Te(),
      V(),
      ie(),
      g(),
      N(),
      (Sn = s()),
      k(),
      v(),
      ge(),
      we(),
      De(),
      $e(),
      Ke(),
      at(),
      Me(),
      Je(),
      nt(),
      Xe(),
      ct(),
      M(),
      f(),
      c(),
      Qe(),
      o(),
      O(),
      R(),
      Oe(),
      r(),
      G(),
      W(),
      z(),
      Ae(),
      P(),
      kt(),
      lt(),
      rt(),
      xt(),
      Vt(),
      Wt(),
      en(),
      Pt(),
      an(),
      mn(),
      ($ = m()),
      ae(),
      (Cn = l(
        async () =>
          (
            await b(
              async () => {
                let { AdsControlsSettings: e } = await import(`./route-be55cff7d5f6.js`);
                return { AdsControlsSettings: e };
              },
              __vite__mapDeps([13, 1, 2, 3, 4, 5, 14, 15, 16]),
              import.meta.url,
            )
          ).AdsControlsSettings,
      )),
      (wn = l(
        async () =>
          (
            await b(
              async () => {
                let { InformationSharingSettings: e } = await import(`./settings-3173d0c87027.js`);
                return { InformationSharingSettings: e };
              },
              __vite__mapDeps([17, 1, 2, 3, 4, 5]),
              import.meta.url,
            )
          ).InformationSharingSettings,
      )),
      l(xe),
      l(It));
  }))();
}
Tn();
export { hn as ChatGptDataControlsSettings };
//# sourceMappingURL=data-controls-settings-26aa31145e9f.js.map
