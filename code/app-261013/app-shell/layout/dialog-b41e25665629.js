import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  Cot as r,
  EPt as i,
  IDt as a,
  Iot as o,
  Ixt as s,
  JC as c,
  Kot as l,
  Lot as u,
  Pxt as d,
  TJ as f,
  VDt as p,
  Xot as m,
  Yot as h,
  _O as g,
  cO as _,
  fO as v,
  gO as y,
  hot as b,
  hrt as x,
  i3 as S,
  iw as C,
  jDt as w,
  lO as T,
  lot as ee,
  mO as E,
  oIt as te,
  oO as ne,
  pLt as re,
  qC as ie,
  sO as ae,
  t3 as D,
  tw as O,
  uO as k,
  vMt as A,
  vO as j,
  vrt as M,
  vzt as N,
  wot as P,
  xJ as F,
  xMt as I,
  yzt as L,
} from "./app-shared-bbfeca5e5737.js";
import {
  AMr as R,
  CPt as z,
  EPt as B,
  FRt as V,
  JPn as H,
  MPt as oe,
  OGt as se,
  PRt as ce,
  QDr as le,
  XDr as ue,
  ZPn as U,
  eDr as W,
  eOr as G,
  fur as de,
  hPr as K,
  iDr as fe,
  iPr as pe,
  kGt as me,
  pur as he,
  sPr as ge,
  xPn as _e,
  xPt as ve,
  yPn as ye,
} from "./app-initial-5851df3f6cb1.js";
import { a as q, i as be, m as xe, r as Se } from "./chatgpt_subscription-521a9ceb1ea2.js";
import { t as Ce } from "./assert-never-a6e685100dc6.js";
import { i as we, n as Te } from "./queries-9a7ecb201f4e.js";
import { n as Ee, t as De } from "./format-amount-e8f6a81b6cbb.js";
import { n as Oe, r as ke } from "./queries-a0c4a0375be0.js";
import { n as Ae, t as je } from "./query-error-f06ec25b6ac2.js";
import { n as Me, t as Ne } from "./billing-pricing-e48f68285f93.js";
import { i as Pe, t as Fe } from "./queries-fdefe92e9bc4.js";
import { n as Ie, r as Le } from "./billing-state-dcaaf3e0b18a.js";
import { r as Re, t as ze } from "./state-b330b8944c3d.js";
import { n as Be, t as Ve } from "./downgrade-dialog-1eb3ab965bf0.js";
function He(e) {
  if (
    e?.status !== `ready` ||
    !Array.isArray(e.available_windows) ||
    !e.available_windows.includes(7) ||
    !We(e.total_feature_uses_7d) ||
    !Array.isArray(e.features)
  )
    return [];
  let t = qe
    .map((t, n) => ({ kind: `feature`, ...t, count: Ge(e.features, t), canonicalIndex: n }))
    .sort(
      (e, t) =>
        Number(e.freeAccess === `limited`) - Number(t.freeAccess === `limited`) ||
        t.count - e.count ||
        e.canonicalIndex - t.canonicalIndex,
    );
  if (!t.some((e) => We(e.count))) return [];
  let n = e.standard_free_limit_exceeded_action_count_7d;
  return [
    ...(Ue(n) && n > 1
      ? [
          {
            kind: `standard_free_limit_exceeded_actions`,
            key: `standard-free-limit-exceeded-actions`,
            count: n,
          },
        ]
      : []),
    ...t,
  ]
    .slice(0, Ke)
    .map((e) =>
      e.kind === `standard_free_limit_exceeded_actions` ? e : { kind: e.kind, key: e.key, count: e.count },
    );
}
function Ue(e) {
  return typeof e == `number` && Number.isSafeInteger(e) && e >= 0;
}
function We(e) {
  return Ue(e) && e > 0;
}
function Ge(e, t) {
  return (
    e.filter((e) => e.feature === t.key && e.free_access === t.freeAccess).find((e) => We(e.uses_7d))
      ?.uses_7d ?? 0
  );
}
var Ke, qe;
function Je() {
  return (Je = e(() => {
    ((Ke = 4),
      (qe = [
        { key: `advanced_reasoning`, freeAccess: `limited` },
        { key: `agent`, freeAccess: `unavailable` },
        { key: `image_generation`, freeAccess: `limited` },
        { key: `file_uploads`, freeAccess: `limited` },
        { key: `deep_research`, freeAccess: `limited` },
        { key: `data_analysis`, freeAccess: `limited` },
      ]));
  }))();
}
var J, Ye, Xe;
function Ze() {
  return (Ze = e(() => {
    (w(),
      (J = n({
        thingsYouLoseTitle: {
          id: `cancelSubscriptionThingsYouLoseModal.title`,
          defaultMessage: `Are you sure?`,
          description: `Title for the Plus cancellation things-you-lose modal shown in the downgrade experiment.`,
        },
        thingsYouLoseBody: {
          id: `cancelSubscriptionThingsYouLoseModal.body`,
          defaultMessage: `If you cancel, your plan will stay active until the end of this billing cycle. After that, you'll continue on the Free plan.`,
          description: `Body text explaining what happens after canceling Plus in the things-you-lose modal.`,
        },
        thingsYouLoseBodyImmediate: {
          id: `cancelSubscriptionThingsYouLoseModal.body.immediate`,
          defaultMessage: `If you cancel, your Plus plan will end immediately and you'll continue on the Free plan`,
          description: `Body of the generic benefits-loss dialog shown when a Plus subscriber starts canceling on the web, before a retention offer. This version is for active discounts or Go-origin Plus trials whose cancellation policy ends Plus immediately. Explain the timing neutrally; cancellation still requires the final confirmation after the retention offer. Plus and Free are ChatGPT plan names. Plain text, no placeholders.`,
        },
        thingsYouLoseBodyPaymentUnconfirmed: {
          id: `cancelSubscriptionThingsYouLoseModal.body.paymentUnconfirmed`,
          defaultMessage: `If you cancel, you'll keep Plus access for any time you've already paid for. If your current period is unpaid, access may end immediately. After your access ends, you'll continue on the Free plan.`,
          description: `Body of the benefits-loss dialog shown when a Plus subscriber starts canceling and the payment status may be outdated. Explain that paid access is preserved, an unpaid current period may end immediately, and Free starts only after Plus access ends. Cancellation still requires final confirmation. Plus and Free are ChatGPT plan names. Plain text with no placeholders.`,
        },
        thingsYouLoseCardTitle: {
          id: `cancelSubscriptionThingsYouLoseModal.cardTitle`,
          defaultMessage: `You'll no longer have:`,
          description: `Heading for the list of Plus benefits the user loses after canceling.`,
        },
        thingsYouLoseExtendedLimits: {
          id: `cancelSubscriptionThingsYouLoseModal.loss.extendedLimits`,
          defaultMessage: `Advanced models and image creation with Thinking`,
          description: `Benefit loss bullet in the Plus things-you-lose modal.`,
        },
        thingsYouLoseVoiceMode: {
          id: `cancelSubscriptionThingsYouLoseModal.loss.voiceMode`,
          defaultMessage: `Extended limits on messages, files, images, and data analysis`,
          description: `Benefit loss bullet in the Plus things-you-lose modal.`,
        },
        thingsYouLoseModelAccess: {
          id: `cancelSubscriptionThingsYouLoseModal.loss.modelAccess`,
          defaultMessage: `Advanced voice mode`,
          description: `Benefit loss bullet in the Plus things-you-lose modal.`,
        },
        thingsYouLoseCustomGpts: {
          id: `cancelSubscriptionThingsYouLoseModal.loss.customGpts`,
          defaultMessage: `Extended memory across chats`,
          description: `Benefit loss bullet in the Plus things-you-lose modal.`,
        },
        thingsYouLoseGenericAdvancedReasoning: {
          id: `cancelSubscriptionThingsYouLoseModal.genericLoss.advancedReasoning`,
          defaultMessage: `Reasoning models with lower limits on Free`,
          description: `Generic reasoning-model bullet in the redesigned final Plus cancellation confirmation, shown when the selected canonical feature has a zero, missing, or invalid seven-day count and only alongside at least one positive personalized seven-day row. It states the entitlement change without implying the user used reasoning models. Compact list-item copy with no markup.`,
        },
        thingsYouLoseGenericAgent: {
          id: `cancelSubscriptionThingsYouLoseModal.genericLoss.agent`,
          defaultMessage: `Agent mode won’t be available on Free`,
          description: `Generic agent-mode bullet in the redesigned final Plus cancellation confirmation, shown when the selected canonical feature has a zero, missing, or invalid seven-day count and only alongside at least one positive personalized seven-day row. It states the entitlement change without implying the user used agent mode. Compact list-item copy with no markup.`,
        },
        thingsYouLoseGenericImageGeneration: {
          id: `cancelSubscriptionThingsYouLoseModal.genericLoss.imageGeneration`,
          defaultMessage: `Image generation with lower limits on Free`,
          description: `Generic image-generation bullet in the redesigned final Plus cancellation confirmation, shown when the selected canonical feature has a zero, missing, or invalid seven-day count and only alongside at least one positive personalized seven-day row. It states the entitlement change without implying the user used image generation. Compact list-item copy with no markup.`,
        },
        thingsYouLoseGenericFileUploads: {
          id: `cancelSubscriptionThingsYouLoseModal.genericLoss.fileUploads`,
          defaultMessage: `File uploads with lower limits on Free`,
          description: `Generic file-upload bullet in the redesigned final Plus cancellation confirmation, shown when the selected canonical feature has a zero, missing, or invalid seven-day count and only alongside at least one positive personalized seven-day row. It states the entitlement change without implying the user uploaded files. Compact list-item copy with no markup.`,
        },
        thingsYouLoseGenericDeepResearch: {
          id: `cancelSubscriptionThingsYouLoseModal.genericLoss.deepResearch`,
          defaultMessage: `Deep research with lower limits on Free`,
          description: `Generic deep-research bullet in the redesigned final Plus cancellation confirmation, shown when the selected canonical feature has a zero, missing, or invalid seven-day count and only alongside at least one positive personalized seven-day row. It states the entitlement change without implying the user used deep research. Compact list-item copy with no markup.`,
        },
        thingsYouLoseGenericDataAnalysis: {
          id: `cancelSubscriptionThingsYouLoseModal.genericLoss.dataAnalysis`,
          defaultMessage: `Data analysis with lower limits on Free`,
          description: `Generic data-analysis bullet in the redesigned final Plus cancellation confirmation, shown when the selected canonical feature has a zero, missing, or invalid seven-day count and only alongside at least one positive personalized seven-day row. It states the entitlement change without implying the user used data analysis. Compact list-item copy with no markup.`,
        },
        thingsYouLosePersonalizedAdvancedReasoning: {
          id: `cancelSubscriptionThingsYouLoseModal.personalizedLoss.advancedReasoning`,
          defaultMessage: `You used reasoning models {count, plural, one {once} other {# times}} in the past 7 days; Free includes lower limits`,
          description: `One of four rows in the redesigned final Plus cancellation confirmation, shown only when a fresh summary reports a positive server-counted reasoning-model use total from the past 7 days. The tone should be factual, not alarming; Free still includes reasoning models with lower limits, so do not imply total loss of access or a historical-plan counterfactual. Placeholder {count} is a positive integer count of actual uses; ICU renders once for 1 and # times otherwise. Compact list-item copy with no markup.`,
        },
        thingsYouLosePersonalizedAgent: {
          id: `cancelSubscriptionThingsYouLoseModal.personalizedLoss.agent`,
          defaultMessage: `You used agent mode {count, plural, one {once} other {# times}} in the past 7 days; it won’t be available on Free`,
          description: `One of four rows in the redesigned final Plus cancellation confirmation, shown only when a fresh summary reports a positive server-counted agent-mode use total from the past 7 days and the backend marks the feature unavailable on Free. The tone should be factual, not alarming. Placeholder {count} is a positive integer count of actual uses; ICU renders once for 1 and # times otherwise. Compact list-item copy with no markup.`,
        },
        thingsYouLosePersonalizedImageGeneration: {
          id: `cancelSubscriptionThingsYouLoseModal.personalizedLoss.imageGeneration`,
          defaultMessage: `You used image generation {count, plural, one {once} other {# times}} in the past 7 days; Free includes lower limits`,
          description: `One of four rows in the redesigned final Plus cancellation confirmation, shown only when a fresh summary reports a positive server-counted image-generation use total from the past 7 days. The tone should be factual, not alarming; Free still includes image generation with lower limits, so do not imply total loss of access or a historical-plan counterfactual. Placeholder {count} is a positive integer count of actual uses; ICU renders once for 1 and # times otherwise. Compact list-item copy with no markup.`,
        },
        thingsYouLosePersonalizedFileUploads: {
          id: `cancelSubscriptionThingsYouLoseModal.personalizedLoss.fileUploads`,
          defaultMessage: `You used file uploads {count, plural, one {once} other {# times}} in the past 7 days; Free includes lower limits`,
          description: `One of four rows in the redesigned final Plus cancellation confirmation, shown only when a fresh summary reports a positive server-counted file-upload use total from the past 7 days. The tone should be factual, not alarming; Free still includes file uploads with lower limits, so do not imply total loss of access or a historical-plan counterfactual. Placeholder {count} is a positive integer count of actual uses; ICU renders once for 1 and # times otherwise. Compact list-item copy with no markup.`,
        },
        thingsYouLosePersonalizedDeepResearch: {
          id: `cancelSubscriptionThingsYouLoseModal.personalizedLoss.deepResearch`,
          defaultMessage: `You used deep research {count, plural, one {once} other {# times}} in the past 7 days; Free includes lower limits`,
          description: `One of four rows in the redesigned final Plus cancellation confirmation, shown only when a fresh summary reports a positive server-counted deep-research use total from the past 7 days. The tone should be factual, not alarming; Free still includes deep research with lower limits, so do not imply total loss of access or a historical-plan counterfactual. Placeholder {count} is a positive integer count of actual uses; ICU renders once for 1 and # times otherwise. Compact list-item copy with no markup.`,
        },
        thingsYouLosePersonalizedDataAnalysis: {
          id: `cancelSubscriptionThingsYouLoseModal.personalizedLoss.dataAnalysis`,
          defaultMessage: `You used data analysis {count, plural, one {once} other {# times}} in the past 7 days; Free includes lower limits`,
          description: `One of four rows in the redesigned final Plus cancellation confirmation, shown only when a fresh summary reports a positive server-counted data-analysis use total from the past 7 days. The tone should be factual, not alarming; Free still includes data analysis with lower limits, so do not imply total loss of access or a historical-plan counterfactual. Placeholder {count} is a positive integer count of actual uses; ICU renders once for 1 and # times otherwise. Compact list-item copy with no markup.`,
        },
        continueButtonLabel: {
          id: `cancelSubscriptionThingsYouLoseModal.continueButtonLabel`,
          defaultMessage: `Continue`,
          description: `Primary button in the things-you-lose modal that continues to retention options.`,
        },
        backButtonLabel: {
          id: `cancelSubscriptionDowngradeSurveyDestinationModal.backButtonLabel`,
          defaultMessage: `Back`,
          description: `Button label to return from a destination modal to the survey modal.`,
        },
      })),
      (Ye = {
        advanced_reasoning: {
          generic: J.thingsYouLoseGenericAdvancedReasoning,
          counted: J.thingsYouLosePersonalizedAdvancedReasoning,
        },
        agent: { generic: J.thingsYouLoseGenericAgent, counted: J.thingsYouLosePersonalizedAgent },
        image_generation: {
          generic: J.thingsYouLoseGenericImageGeneration,
          counted: J.thingsYouLosePersonalizedImageGeneration,
        },
        file_uploads: {
          generic: J.thingsYouLoseGenericFileUploads,
          counted: J.thingsYouLosePersonalizedFileUploads,
        },
        deep_research: {
          generic: J.thingsYouLoseGenericDeepResearch,
          counted: J.thingsYouLosePersonalizedDeepResearch,
        },
        data_analysis: {
          generic: J.thingsYouLoseGenericDataAnalysis,
          counted: J.thingsYouLosePersonalizedDataAnalysis,
        },
      }),
      (Xe = n({
        title: {
          id: `cancelSubscriptionByTheNumbersModal.title`,
          defaultMessage: `You did more with Plus`,
          description: `Centered heading in the redesigned final cancellation confirmation for a Plus subscriber with truthful seven-day usage rows. Short sentence with no placeholders.`,
        },
        subtitle: {
          id: `cancelSubscriptionByTheNumbersModal.subtitle`,
          defaultMessage: `More conversations, more images, fewer limits`,
          description: `Centered supporting line below the redesigned final Plus cancellation heading. It summarizes paid value without claiming specific user counts; short sentence with no placeholders.`,
        },
        sectionTitle: {
          id: `cancelSubscriptionByTheNumbersModal.sectionTitle`,
          defaultMessage: `By the numbers`,
          description: `Short 18px heading above truthful server-counted seven-day usage rows in the redesigned final Plus cancellation confirmation. No punctuation or placeholders.`,
        },
        timePeriod: {
          id: `cancelSubscriptionByTheNumbersModal.timePeriod`,
          defaultMessage: `Last 7 days`,
          description: `Compact visible time-window label beside the By the numbers heading. It makes clear every row uses the last seven days; no placeholders.`,
        },
        freeLimitCount: {
          id: `cancelSubscriptionByTheNumbersModal.freeLimitCount`,
          defaultMessage: `You would have exceeded standard Free limits at least {count, plural, one {# time} other {# times}} in the past 7 days`,
          description: `Optional first row in the redesigned final Plus cancellation confirmation, shown only when the server reports more than one action above the pinned standard-Free threshold during the past seven days and at least one positive feature row remains. At least is intentional: the dedicated server counter is a conservative lower bound, not an exact all-feature counterfactual or total feature usage. Placeholder {count} is a safe integer greater than one; ICU renders times. Compact list-item copy with no markup.`,
        },
        confirmAndCancel: {
          id: `cancelSubscriptionByTheNumbersModal.confirmAndCancel`,
          defaultMessage: `Confirm and cancel`,
          description: `Secondary destructive action in the redesigned final Plus cancellation confirmation. It confirms the existing cancellation action; short button label with no placeholders.`,
        },
        keepPlus: {
          id: `cancelSubscriptionByTheNumbersModal.keepPlus`,
          defaultMessage: `Keep Plus`,
          description: `Primary action in the redesigned final Plus cancellation confirmation. It dismisses cancellation and keeps the current plan; short button label with no placeholders.`,
        },
      })));
  }))();
}
function Qe(e) {
  let t = (0, et.c)(6),
    { items: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, tt.jsx)(T, {
        children: (0, tt.jsx)(`p`, {
          className: `text-secondary`,
          children: (0, tt.jsx)(a, { ...Xe.subtitle }),
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, tt.jsx)(O, {
        label: (0, tt.jsx)(a, { ...Xe.sectionTitle }),
        control: (0, tt.jsx)(a, { ...Xe.timePeriod }),
      })),
      (t[1] = i))
    : (i = t[1]);
  let o;
  t[2] === n ? (o = t[3]) : ((o = n.map($e)), (t[2] = n), (t[3] = o));
  let s;
  return (
    t[4] === o
      ? (s = t[5])
      : ((s = (0, tt.jsxs)(tt.Fragment, {
          children: [
            r,
            (0, tt.jsx)(T, {
              children: (0, tt.jsxs)(k, { children: [i, (0, tt.jsx)(ie, { children: o })] }),
            }),
          ],
        })),
        (t[4] = o),
        (t[5] = s)),
    s
  );
}
function $e(e) {
  let t = Xe.freeLimitCount;
  return (
    e.kind === `feature` && (t = e.count > 0 ? Ye[e.key].counted : Ye[e.key].generic),
    (0, tt.jsx)(O, { label: (0, tt.jsx)(a, { ...t, values: { count: e.count } }), control: null }, e.key)
  );
}
var et, tt;
function nt() {
  return (nt = e(() => {
    ((et = N()), w(), v(), C(), c(), Ze(), (tt = I()));
  }))();
}
function rt(e) {
  let t = (0, at.c)(19),
    { title: n, children: r, busy: i, onClose: a, onShown: o, onSubmit: s } = e,
    c = i !== void 0 && i,
    l = (0, ot.useRef)(!1),
    u = !c,
    d;
  t[0] === o
    ? (d = t[1])
    : ((d = {
        onOpenAutoFocus: () => {
          l.current || ((l.current = !0), o?.());
        },
      }),
      (t[0] = o),
      (t[1] = d));
  let f;
  t[2] !== c || t[3] !== a
    ? ((f = (e) => {
        !e && !c && a();
      }),
      (t[2] = c),
      (t[3] = a),
      (t[4] = f))
    : (f = t[4]);
  let p;
  t[5] !== c || t[6] !== s
    ? ((p = (e) => {
        (e.preventDefault(), c || s?.());
      }),
      (t[5] = c),
      (t[6] = s),
      (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] === n
    ? (m = t[9])
    : ((m = (0, st.jsx)(T, {
        children: (0, st.jsx)(_, {
          titleClassName: `break-words pe-8`,
          title: (0, st.jsx)(g, { children: n }),
        }),
      })),
      (t[8] = n),
      (t[9] = m));
  let h;
  t[10] !== r || t[11] !== p || t[12] !== m
    ? ((h = (0, st.jsxs)(ne, { as: `form`, className: `select-none`, onSubmit: p, children: [m, r] })),
      (t[10] = r),
      (t[11] = p),
      (t[12] = m),
      (t[13] = h))
    : (h = t[13]);
  let v;
  return (
    t[14] !== u || t[15] !== d || t[16] !== f || t[17] !== h
      ? ((v = (0, st.jsx)(E, {
          open: !0,
          showDialogClose: u,
          contentProps: d,
          onOpenChange: f,
          children: h,
        })),
        (t[14] = u),
        (t[15] = d),
        (t[16] = f),
        (t[17] = h),
        (t[18] = v))
      : (v = t[18]),
    v
  );
}
function it() {
  let e = (0, at.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, st.jsx)(`p`, {
          role: `status`,
          children: (0, st.jsx)(a, {
            id: `settings.consumerBilling.cancellation.loading`,
            defaultMessage: `Checking your subscription…`,
            description: `Loading status while the cancellation flow retrieves current billing details or available retention offers`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var at, ot, st;
function ct() {
  return (ct = e(() => {
    ((at = N()), (ot = L()), w(), j(), v(), (st = I()));
  }))();
}
function lt(e) {
  let t = (0, ut.c)(6),
    { result: n } = e;
  if (n === `success`) return null;
  if (n === `pending`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, dt.jsx)(`p`, {
            role: `status`,
            children: (0, dt.jsx)(a, {
              id: `settings.consumerBilling.cancellation.promotionPending`,
              defaultMessage: `Your payment is processing. Review your subscription in Billing before trying again.`,
              description: `An offer claim was accepted for processing but has not yet completed; another submission is disabled`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n === `delinquent_subscription`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, dt.jsx)(`p`, {
            role: `alert`,
            children: (0, dt.jsx)(a, {
              id: `cancelSubscriptionPlusOfferModal.delinquentSubscription`,
              defaultMessage: `This offer can't be applied while your subscription has an unpaid balance. Review your billing details in Settings.`,
              description: `Persistent error in the subscription cancellation offer dialog after a subscriber tries to claim a retention discount and the server rejects it because their subscription has an unpaid balance. Calmly directs the subscriber to review billing in Settings without promising that payment will make the offer available. Plain text with no placeholders.`,
            }),
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (
    n === `requires_action` ||
    n === `setup_required` ||
    n === `payment_method_failed` ||
    n === `cleanup_failed` ||
    n === `card_declined` ||
    n === `unknown`
  ) {
    let e;
    return (
      t[2] === n
        ? (e = t[3])
        : ((e = (0, dt.jsx)(`p`, {
            role: `alert`,
            children: (0, dt.jsx)(a, {
              id: `settings.consumerBilling.cancellation.promotionUnresolved`,
              defaultMessage: `{kind, select, card_declined {Payment error. Your card may be invalid or authentication may be needed.} cleanup_failed {We couldn't confirm that the pending payment update was cleared. Review your subscription in Billing before trying again.} requires_action {This offer needs payment verification, which isn't supported in this dialog. Review your subscription in Billing before trying again.} setup_required {This offer needs a payment method update that isn't supported in this dialog. Review your subscription in Billing before trying again.} payment_method_failed {Your payment method couldn't complete this offer. Review your payment method in Billing before trying again.} other {We couldn't confirm whether this offer was applied. Review your subscription in Billing before trying again.}}`,
              description: `An unresolved retention offer cannot be resubmitted. kind distinguishes a declined card, correlated cleanup failure, unsupported verification/setup, a failed payment method, and an uncertain request outcome.`,
              values: { kind: n },
            }),
          })),
          (t[2] = n),
          (t[3] = e)),
      e
    );
  }
  let r;
  return (t[4] === n ? (r = t[5]) : ((r = Ce(n)), (t[4] = n), (t[5] = r)), r);
}
var ut, dt;
function ft() {
  return (ft = e(() => {
    ((ut = N()), w(), (dt = I()));
  }))();
}
function pt(e, t, n) {
  let r = vt(e);
  if (
    e.entitlement.is_active_subscription_gratis ||
    e.entitlement.discount?.promo_campaign_id === `students-2026-four-month-free`
  )
    return { page: `confirm`, skipPromotion: !0 };
  if (ht(e)) return { page: `go_trial` };
  if (r === `pro` && n.checkGate(`2238071649`)) return { page: `pro_offer` };
  if (r === `plus` && n.checkGate(`3600660324`)) {
    let r = wt.safeParse(n.getLayer(`3550013596`).get(`variant`, `disabled`));
    if (r.success) {
      let i = mt(e, t, n),
        a = { variant: r.data, offer: i.page === `plus_offer` || i.page === `go_offer` ? i.page : null };
      return a.offer == null
        ? { page: `confirm`, skipPromotion: !1, flow: a }
        : a.variant === `refresh_with_loss` || a.variant === `refresh_with_personalized_loss`
          ? { page: `retention_loss`, flow: a }
          : { page: a.offer, flow: a };
    }
  }
  return mt(e, t, n);
}
function mt(e, t, n) {
  return vt(e) === `plus` && n.getLayer(`2090377145`).get(`show_plus_offer_else_go`, !1)
    ? { page: bt(t) ? `plus_offer` : `go_offer` }
    : { page: `confirm`, skipPromotion: !1 };
}
function ht(e, t = Date.now()) {
  let n = e.entitlement,
    r = n.trial;
  return (
    e.account.plan_type === `plus` &&
    n.subscription_plan === `chatgptplusplan` &&
    n.billing_period === `monthly` &&
    e.last_active_subscription.will_renew === !0 &&
    r?.is_trialing === !0 &&
    r.promo_campaign_id === `plus-1-month-free-for-go` &&
    r.trial_ends_at != null &&
    Date.parse(r.trial_ends_at) >= t
  );
}
function gt(e) {
  let t = e.entitlement.discount;
  return e.entitlement.is_active_subscription_gratis ||
    (t?.cancellation_policy === `immediate` && !t.discount_start_in_num_periods) ||
    ht(e)
    ? `immediate`
    : e.entitlement.is_delinquent === !0
      ? `unconfirmed`
      : `term_end`;
}
function _t(e) {
  let t = vt(e);
  return t === `prolite`
    ? `Pro 100`
    : t === `pro`
      ? `Pro 200`
      : t === `promax`
        ? `Pro 500`
        : t === `go`
          ? `Go`
          : t === `plus`
            ? `Plus`
            : `ChatGPT`;
}
function vt(e) {
  let t = yt(e.entitlement.subscription_plan),
    n = e.eligible_offers?.offers?.some((t) => yt(t.id) === e.account.plan_type);
  return t != null && n === !0 ? t : e.account.plan_type;
}
function yt(e) {
  if (e != null)
    switch (e) {
      case `chatgptgoplan`:
        return `go`;
      case `chatgptplusplan`:
        return `plus`;
      case `chatgptprolite`:
        return `prolite`;
      case `chatgptpro`:
        return `pro`;
      case `chatgptpromax`:
        return `promax`;
      default:
        return;
    }
}
function bt(e) {
  return (
    e != null &&
    `percentage` in e.discount &&
    e.discount.percentage === 100 &&
    (e.duration?.num_periods ?? 1) === 1
  );
}
function xt(e, t, n = Date.now()) {
  try {
    let r = Number(t.getItem(Tt + e));
    return !Number.isFinite(r) || r <= 0
      ? (t.removeItem(Tt + e), `none`)
      : n - r >= Et
        ? `expired`
        : `active`;
  } catch {
    return `unavailable`;
  }
}
function St(e, t, n = Date.now()) {
  try {
    return (t.setItem(Tt + e, String(n)), !0);
  } catch {
    return !1;
  }
}
function Ct(e, t) {
  t.removeItem(Tt + e);
}
var wt, Tt, Et;
function Dt() {
  return (Dt = e(() => {
    (i(),
      (wt = te([`control`, `refresh`, `refresh_with_loss`, `refresh_with_personalized_loss`])),
      (Tt = `go-origin-plus-trial-return-request:`),
      (Et = 3e5));
  }))();
}
function Ot(e) {
  return l({
    queryKey: [`consumer-billing`, e, `cancellation-promotion`],
    queryFn: async ({ signal: t }) => {
      let n = await pe.safeGet(`/promotions/cp`, { parameters: { query: { account_id: e } }, signal: t });
      return n.metadata?.duration?.period === `month` ? n.metadata : null;
    },
    staleTime: 0,
    retry: !1,
  });
}
function kt(e, t, n) {
  return l({
    queryKey: [`consumer-billing`, e, `cancellation-pricing`, t],
    queryFn: async ({ signal: e }) => {
      let r = await Ne({
          currency: t ?? void 0,
          isPricingEnabled: (e) => n.getLayer(`3768341700`).get(e, !1),
          signal: e,
        }),
        i = Fe.safeParse(r);
      return i.success && (t == null || i.data.currency_config.symbol_code.toUpperCase() === t.toUpperCase())
        ? i.data
        : null;
    },
    staleTime: 0,
    retry: !1,
  });
}
function At(e, t) {
  return l({
    queryKey: [`consumer-billing`, e, `cancellation-promotion-preview`, t.campaign_id],
    queryFn: ({ signal: n }) =>
      pe.safeGet(`/subscriptions/update/preview`, {
        parameters: { query: { account_id: e, updated_promo_id: t.campaign_id } },
        signal: n,
      }),
    staleTime: 0,
    retry: !1,
  });
}
function jt(e) {
  return l({
    queryKey: [`consumer-billing`, e, `premium-usage-summary`, `v2`],
    queryFn: ({ signal: e }) => pe.safeGet(`/premium-usage/summary/v2`, { signal: e }),
    staleTime: 0,
    retry: !1,
    refetchOnMount: `always`,
  });
}
async function Mt(e, t) {
  try {
    let n = await pe.safePost(`/subscriptions/update`, {
      requestBody: { account_id: e, updated_promo_id: t.campaign_id },
    });
    if (n.status == null) return `success`;
    let r, i;
    if (
      (n.status === `requires_action`
        ? ((r = n.payment_intent.id), (i = n.pending_update_invoice_id ?? void 0))
        : n.status === `payment_method_failed` &&
          ((r = n.pending_update_payment_intent_id ?? void 0), (i = n.pending_update_invoice_id ?? void 0)),
      r != null)
    )
      try {
        await ve({ accountId: e, expectedPaymentIntentId: r, pendingUpdateInvoiceId: i });
      } catch {
        return `cleanup_failed`;
      }
    return n.status;
  } catch (e) {
    let t = Ft.safeParse(e);
    if (e instanceof x)
      try {
        t = Ft.safeParse(JSON.parse(e.message));
      } catch {
        return `unknown`;
      }
    return t.success ? (t.data.detail?.error_type ?? `unknown`) : `unknown`;
  }
}
async function Nt(e, t) {
  let n = e.queryClient,
    r = Te(e, t);
  await n.cancelQueries({ queryKey: r.queryKey, exact: !0 });
  let i = (await n.fetchQuery(r)).accounts[t];
  return i?.account.account_id === t ? i : void 0;
}
async function Pt({ scope: e, accountId: t, account: n, returnToGo: r, storage: i, onRequestError: a }) {
  let o = ht(n),
    s = n.entitlement.is_active_subscription_gratis === !0;
  if (r) {
    if (!o || i == null) return `storage_unavailable`;
    let n = xt(t, i);
    if (n === `unavailable`) return `storage_unavailable`;
    if (n !== `none`)
      try {
        let r = await Nt(e, t);
        return r == null
          ? `reload`
          : r.account.plan_type === `go`
            ? `returned_to_go`
            : n === `expired`
              ? (Ct(t, i), ht(r) ? `return_ready` : `state_changed`)
              : `return_pending`;
      } catch {
        return `reload`;
      }
    if (!St(t, i)) return `storage_unavailable`;
  }
  try {
    if (
      (await pe.safePost(`/subscriptions/cancel`, {
        requestBody: { account_id: t, cancellation_outcome: o && !r ? `deactivate` : void 0 },
      }),
      !o && !s)
    )
      return `canceled`;
  } catch (e) {
    try {
      a?.(e);
    } catch {}
    if (!o && !s) return `failed`;
  }
  try {
    let n = await Nt(e, t);
    return n == null
      ? `reload`
      : r && n.account.plan_type === `go`
        ? `returned_to_go`
        : !r && n.account.plan_type === `free`
          ? o
            ? `deactivated`
            : `canceled`
          : s
            ? n.entitlement.is_active_subscription_gratis
              ? `failed`
              : `state_changed`
            : ht(n)
              ? `failed`
              : `state_changed`;
  } catch {
    return `reload`;
  }
}
var Ft;
function It() {
  return (It = e(() => {
    (i(),
      we(),
      z(),
      ge(),
      M(),
      Me(),
      Pe(),
      Dt(),
      (Ft = re({
        detail: re({ error_type: te([`card_declined`, `delinquent_subscription`]).optional() }).optional(),
      })));
  }))();
}
function Lt(e) {
  let n = (0, Ht.c)(166),
    {
      account: r,
      accountId: i,
      promotion: o,
      confirmationPresentation: s,
      busy: c,
      disabled: l,
      claimError: u,
      cancellationError: d,
      onCancel: f,
      onClaim: h,
      onBack: g,
      onClose: _,
      onShown: v,
    } = e,
    y = s === void 0 ? `standard` : s,
    b = p(),
    { client: x } = fe(),
    S;
  n[0] === i ? (S = n[1]) : ((S = B(i)), (n[0] = i), (n[1] = S));
  let { data: C } = m(S),
    w;
  n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((w = { enabled: !0 }), (n[2] = w)) : (w = n[2]);
  let { data: ee, isPending: E, isError: te } = oe(w),
    ne;
  n[3] !== r.entitlement.billing_currency || n[4] !== i || n[5] !== x
    ? ((ne = kt(i, r.entitlement.billing_currency, x)),
      (n[3] = r.entitlement.billing_currency),
      (n[4] = i),
      (n[5] = x),
      (n[6] = ne))
    : (ne = n[6]);
  let re = o != null && `percentage` in o.discount && o.discount.percentage !== 100,
    ie;
  n[7] !== ne || n[8] !== re
    ? ((ie = { ...ne, enabled: re, staleTime: 0 }), (n[7] = ne), (n[8] = re), (n[9] = ie))
    : (ie = n[9]);
  let { data: D } = m(ie),
    O;
  n[10] === r ? (O = n[11]) : ((O = gt(r)), (n[10] = r), (n[11] = O));
  let k = O,
    A;
  n[12] === r ? (A = n[13]) : ((A = ht(r)), (n[12] = r), (n[13] = A));
  let j = A,
    M = r.entitlement.discount,
    N;
  n[14] !== r || n[15] !== y || n[16] !== M || n[17] !== o || n[18] !== k
    ? ((N = y === `by_the_numbers` && vt(r) === `plus` && o == null && M == null && k === `term_end`),
      (n[14] = r),
      (n[15] = y),
      (n[16] = M),
      (n[17] = o),
      (n[18] = k),
      (n[19] = N))
    : (N = n[19]);
  let P = N,
    F;
  n[20] === i ? (F = n[21]) : ((F = jt(i)), (n[20] = i), (n[21] = F));
  let I;
  n[22] !== P || n[23] !== F
    ? ((I = { ...F, enabled: P, staleTime: 0 }), (n[22] = P), (n[23] = F), (n[24] = I))
    : (I = n[24]);
  let { data: L, isSuccess: R, isFetchedAfterMount: z, isFetching: V } = m(I),
    H;
  n[25] !== P || n[26] !== z || n[27] !== V || n[28] !== R || n[29] !== L
    ? ((H = P && R && z && !V ? He(L) : []),
      (n[25] = P),
      (n[26] = z),
      (n[27] = V),
      (n[28] = R),
      (n[29] = L),
      (n[30] = H))
    : (H = n[30]);
  let se = H,
    [ce, le] = (0, Ut.useState)(null);
  ce != null && ce.accountId !== i && le(null);
  let ue = ce?.accountId === i ? ce.items : null,
    U = y === `by_the_numbers` && (ue == null ? se.length > 0 : ue.length > 0),
    W = ue ?? se,
    G = (k === `term_end` ? r.entitlement.renews_at : null) ?? r.entitlement.expires_at ?? C?.active_until,
    de;
  n[31] !== G || n[32] !== b
    ? ((de =
        G != null && Number.isFinite(Date.parse(G))
          ? b.formatDate(G, { year: `numeric`, month: `short`, day: `numeric` })
          : null),
      (n[31] = G),
      (n[32] = b),
      (n[33] = de))
    : (de = n[33]);
  let K = de,
    pe = M?.discount_expires_at,
    he;
  n[34] !== M || n[35] !== G || n[36] !== K || n[37] !== b || n[38] !== pe
    ? ((he =
        M != null &&
        (M.discount_start_in_num_periods == null || M.discount_start_in_num_periods === 0) &&
        G != null &&
        K != null &&
        pe != null &&
        Number.isFinite(Date.parse(pe)) &&
        Date.parse(pe) > Date.parse(G)
          ? b.formatDate(pe, { year: `numeric`, month: `short`, day: `numeric` })
          : null),
      (n[34] = M),
      (n[35] = G),
      (n[36] = K),
      (n[37] = b),
      (n[38] = pe),
      (n[39] = he))
    : (he = n[39]);
  let ge = he,
    _e;
  n[40] !== G || n[41] !== pe || n[42] !== ge
    ? ((_e =
        ge != null && pe != null && G != null ? Math.round((Date.parse(pe) - Date.parse(G)) / 864e5) : null),
      (n[40] = G),
      (n[41] = pe),
      (n[42] = ge),
      (n[43] = _e))
    : (_e = n[43]);
  let ve = _e,
    ye;
  n[44] === r ? (ye = n[45]) : ((ye = _t(r)), (n[44] = r), (n[45] = ye));
  let q = ye,
    be = o?.duration?.num_periods ?? 1,
    xe = o != null && `percentage` in o.discount && o.discount.percentage === 100,
    Se;
  n[46] !== x || n[47] !== b
    ? ((Se = (x.getContext().user?.country ?? new Intl.Locale(b.locale).region)?.trim().toUpperCase()),
      (n[46] = x),
      (n[47] = b),
      (n[48] = Se))
    : (Se = n[48]);
  let Ce = Se,
    we = !c && !l && !E,
    Te;
  if (o != null) {
    let e;
    (n[49] !== q || n[50] !== o
      ? ((e = (0, Y.jsx)(Vt, { promotion: o, planName: q })), (n[49] = q), (n[50] = o), (n[51] = e))
      : (e = n[51]),
      (Te = e));
  } else if (j) {
    let e;
    (n[52] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(a, {
          id: `cancelSubscriptionModal.plusFreeForGoOffer.title`,
          defaultMessage: `Cancel Plus and return to Free?`,
          description: `Confirms immediately ending a Go-origin Plus trial and returning to Free instead of restoring Go`,
        })),
        (n[52] = e))
      : (e = n[52]),
      (Te = e));
  } else if (M != null && k === `immediate`) {
    let e;
    (n[53] === q
      ? (e = n[54])
      : ((e = (0, Y.jsx)(a, {
          id: `cancelSubscriptionModal.hasDiscount.titleImmediate`,
          defaultMessage: `End {planName} access immediately?`,
          description: `Cancellation heading for a discounted subscription whose cancellation ends access immediately`,
          values: { planName: q },
        })),
        (n[53] = q),
        (n[54] = e)),
      (Te = e));
  } else if (M != null && k === `term_end` && K != null) {
    let e;
    (n[55] !== K || n[56] !== q
      ? ((e = (0, Y.jsx)(a, {
          id: `cancelSubscriptionModal.hasDiscount.title`,
          defaultMessage: `End {planName} access on {expirationDate}?`,
          description: `Cancellation heading for a discounted subscription; expirationDate is its actual localized access end date`,
          values: { planName: q, expirationDate: K },
        })),
        (n[55] = K),
        (n[56] = q),
        (n[57] = e))
      : (e = n[57]),
      (Te = e));
  } else {
    let e;
    (n[58] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(a, {
          id: `cancelSubscriptionModal.title`,
          defaultMessage: `Subscription Cancellation`,
          description: `Title for the consumer subscription cancellation confirmation`,
        })),
        (n[58] = e))
      : (e = n[58]),
      (Te = e));
  }
  let Ee, De;
  n[59] !== r || n[60] !== D?.currency_config
    ? ((Ee = vt(r)),
      (De = me(Ee) ? D?.currency_config[Ee]?.month?.amount : void 0),
      (n[59] = r),
      (n[60] = D?.currency_config),
      (n[61] = Ee),
      (n[62] = De))
    : ((Ee = n[61]), (De = n[62]));
  let Oe = De,
    ke;
  n[63] !== b || n[64] !== be || n[65] !== Oe || n[66] !== D || n[67] !== o
    ? ((ke =
        Oe != null && o != null && `percentage` in o.discount && D != null
          ? b.formatNumber(Math.max(0, Oe * be * (1 - o.discount.percentage / 100)), {
              style: `currency`,
              currency: D.currency_config.symbol_code,
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            })
          : null),
      (n[63] = b),
      (n[64] = be),
      (n[65] = Oe),
      (n[66] = D),
      (n[67] = o),
      (n[68] = ke))
    : (ke = n[68]);
  let Ae = ke,
    je;
  n[69] !== r || n[70] !== K || n[71] !== ge || n[72] !== ve
    ? ((je = (0, Y.jsx)(Bt, { account: r, expirationDate: K, promoEndDate: ge, remainingDays: ve })),
      (n[69] = r),
      (n[70] = K),
      (n[71] = ge),
      (n[72] = ve),
      (n[73] = je))
    : (je = n[73]);
  let Me = je;
  if (o != null && ((Me = o.summary), Ae != null)) {
    if (Ee === `pro` || Ee === `promax`) {
      let e;
      (n[74] !== Ae || n[75] !== be
        ? ((e = (0, Y.jsx)(a, {
            id: `cancelSubscriptionModal.percentOffSummary`,
            defaultMessage: `We’d love for you to stay — how about {formattedDiscountedCost} for {numPeriods, plural, one {one month} other {{numPeriods} months}} on us? You'll keep maximizing your productivity with the most advanced Pro models, unlimited messages, and maximum memory.`,
            description: `Explains the total discounted Pro price and benefits of accepting a cancellation retention promotion`,
            values: { formattedDiscountedCost: Ae, numPeriods: be },
          })),
          (n[74] = Ae),
          (n[75] = be),
          (n[76] = e))
        : (e = n[76]),
        (Me = e));
    } else {
      let e;
      (n[77] !== Ae || n[78] !== be
        ? ((e = (0, Y.jsx)(a, {
            id: `cancelSubscriptionModal.percentOffPlusSummary`,
            defaultMessage: `We’d love for you to stay — how about {formattedDiscountedCost} for {numPeriods, plural, one {one month} other {{numPeriods} months}} on us? You'll keep the full experience - advanced models for complex problems, extended limits, and more memory to pick up right where you left off`,
            description: `Explains the total discounted Plus price and benefits of accepting a cancellation retention promotion`,
            values: { formattedDiscountedCost: Ae, numPeriods: be },
          })),
          (n[77] = Ae),
          (n[78] = be),
          (n[79] = e))
        : (e = n[79]),
        (Me = e));
    }
  }
  let Ne;
  if (k === `unconfirmed`) {
    let e;
    (n[80] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(a, {
          id: `settings.consumerBilling.cancellation.offerTermsPaymentUnconfirmed`,
          defaultMessage: `If you'd rather cancel now, you'll keep access for any time you've already paid for. If your current period is unpaid, access may end immediately.`,
          description: `Cancellation consequence alongside a retention offer when the payment status may be outdated; paid access is preserved but unpaid access may end immediately`,
        })),
        (n[80] = e))
      : (e = n[80]),
      (Ne = e));
  } else if (k === `immediate`) {
    let e;
    (n[81] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(a, {
          id: `cancelSubscriptionModal.promo.canceledSubscriptionBottomImmediate`,
          defaultMessage: `If you'd rather cancel now, your access to advanced features will end immediately`,
          description: `Cancellation consequence shown alongside a retention offer when access ends immediately`,
        })),
        (n[81] = e))
      : (e = n[81]),
      (Ne = e));
  } else if (K != null) {
    let e;
    (n[82] === K
      ? (e = n[83])
      : ((e = (0, Y.jsx)(a, {
          id: `cancelSubscriptionModal.promo.canceledSubscriptionBottom`,
          defaultMessage: `If you'd rather cancel now, your access to advanced features will end on {expirationDate}`,
          description: `Cancellation consequence alongside a retention offer; expirationDate is the actual localized access end date`,
          values: { expirationDate: K },
        })),
        (n[82] = K),
        (n[83] = e)),
      (Ne = e));
  } else {
    let e;
    (n[84] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(a, {
          id: `settings.consumerBilling.cancellation.offerTermsWithoutDate`,
          defaultMessage: `If you'd rather cancel now, your access to advanced features will end at the end of your current billing period`,
          description: `Cancellation consequence alongside a retention offer when the account did not provide an exact access end date`,
        })),
        (n[84] = e))
      : (e = n[84]),
      (Ne = e));
  }
  let Pe;
  n[85] !== U || n[86] !== Te
    ? ((Pe = U ? (0, Y.jsx)(a, { ...Xe.title }) : Te), (n[85] = U), (n[86] = Te), (n[87] = Pe))
    : (Pe = n[87]);
  let Fe;
  n[88] !== i || n[89] !== we || n[90] !== f || n[91] !== W || n[92] !== U
    ? ((Fe = () => {
        we && (le((e) => (e?.accountId === i ? e : { accountId: i, items: U ? W : [] })), f());
      }),
      (n[88] = i),
      (n[89] = we),
      (n[90] = f),
      (n[91] = W),
      (n[92] = U),
      (n[93] = Fe))
    : (Fe = n[93]);
  let Ie;
  n[94] !== W || n[95] !== U
    ? ((Ie = U ? (0, Y.jsx)(Qe, { items: W }) : null), (n[94] = W), (n[95] = U), (n[96] = Ie))
    : (Ie = n[96]);
  let Le;
  n[97] === Me
    ? (Le = n[98])
    : ((Le = (0, Y.jsx)(T, { children: (0, Y.jsx)(`p`, { className: `text-secondary`, children: Me }) })),
      (n[97] = Me),
      (n[98] = Le));
  let Re;
  n[99] !== Ne || n[100] !== o
    ? ((Re =
        o == null
          ? null
          : (0, Y.jsx)(T, { children: (0, Y.jsx)(`p`, { className: `text-secondary`, children: Ne }) })),
      (n[99] = Ne),
      (n[100] = o),
      (n[101] = Re))
    : (Re = n[101]);
  let ze;
  n[102] !== ee?.isEnabled || n[103] !== te
    ? ((ze =
        ee?.isEnabled === !0 || te
          ? (0, Y.jsx)(T, {
              children: (0, Y.jsx)(`p`, {
                className: `text-secondary`,
                children: (0, Y.jsx)(a, {
                  id: `chatgpt.subscription.cancellation.modal.body.auto_reload_notice`,
                  defaultMessage: `Auto-reload of credits will also be turned off when your subscription ends`,
                  description: `Warns that canceling a consumer subscription also turns off automatic credit reload when access ends; shown when reload is enabled or its state could not be checked`,
                }),
              }),
            })
          : null),
      (n[102] = ee?.isEnabled),
      (n[103] = te),
      (n[104] = ze))
    : (ze = n[104]);
  let Be;
  n[105] !== Ce || n[106] !== k
    ? ((Be =
        Ce === `KR`
          ? (0, Y.jsx)(T, {
              children: (0, Y.jsx)(`p`, {
                className: `text-secondary`,
                children:
                  k === `term_end`
                    ? (0, Y.jsx)(a, {
                        id: `cancelSubscriptionModal.koreanTermEndRefundDisclosure`,
                        defaultMessage: `You may also request a refund subject to our <refundPolicyLink>Refund Policy</refundPolicyLink>, in which case the cancellation of your subscription will take effect immediately`,
                        description: `Refund policy disclosure for a Korean subscriber whose ordinary cancellation would take effect at term end; a refund instead ends access immediately`,
                        values: { refundPolicyLink: Rt },
                      })
                    : (0, Y.jsx)(a, {
                        id: `cancelSubscriptionModal.koreanImmediateRefundDisclosure`,
                        defaultMessage: `You may also request a refund subject to our <refundPolicyLink>Refund Policy</refundPolicyLink>`,
                        description: `Refund policy disclosure for a Korean subscriber whose cancellation takes effect immediately or whose payment status is unconfirmed; the linked policy opens externally`,
                        values: { refundPolicyLink: zt },
                      }),
              }),
            })
          : null),
      (n[105] = Ce),
      (n[106] = k),
      (n[107] = Be))
    : (Be = n[107]);
  let Ve;
  n[108] === u
    ? (Ve = n[109])
    : ((Ve = u == null ? null : (0, Y.jsx)(T, { children: (0, Y.jsx)(lt, { result: u }) })),
      (n[108] = u),
      (n[109] = Ve));
  let Ue;
  n[110] === d
    ? (Ue = n[111])
    : ((Ue = d == null ? null : (0, Y.jsx)(T, { children: d })), (n[110] = d), (n[111] = Ue));
  let We = o == null && !U ? `dangerSolid` : `danger`,
    Ge = !we,
    Ke;
  n[112] === U
    ? (Ke = n[113])
    : ((Ke = U && (0, Y.jsx)(a, { ...Xe.confirmAndCancel })), (n[112] = U), (n[113] = Ke));
  let qe;
  n[114] !== U || n[115] !== j
    ? ((qe =
        !U &&
        j &&
        (0, Y.jsx)(a, {
          id: `cancelSubscriptionModal.plusFreeForGoOffer.cancelPlus`,
          defaultMessage: `Cancel Plus`,
          description: `Immediately ends the Go-origin Plus trial and returns the user to Free`,
        })),
      (n[114] = U),
      (n[115] = j),
      (n[116] = qe))
    : (qe = n[116]);
  let Je;
  n[117] !== U || n[118] !== j
    ? ((Je =
        !U &&
        !j &&
        (0, Y.jsx)(a, {
          id: `cancelSubscriptionModal.cancel`,
          defaultMessage: `Cancel subscription`,
          description: `Confirms cancellation of the current consumer subscription`,
        })),
      (n[117] = U),
      (n[118] = j),
      (n[119] = Je))
    : (Je = n[119]);
  let J;
  n[120] !== c || n[121] !== We || n[122] !== Ge || n[123] !== Ke || n[124] !== qe || n[125] !== Je
    ? ((J = (0, Y.jsxs)(t, { color: We, disabled: Ge, loading: c, type: `submit`, children: [Ke, qe, Je] })),
      (n[120] = c),
      (n[121] = We),
      (n[122] = Ge),
      (n[123] = Ke),
      (n[124] = qe),
      (n[125] = Je),
      (n[126] = J))
    : (J = n[126]);
  let Ye;
  n[127] !== c || n[128] !== l || n[129] !== _ || n[130] !== U
    ? ((Ye =
        U &&
        (0, Y.jsx)(t, {
          disabled: c || l,
          type: `button`,
          onClick: _,
          children: (0, Y.jsx)(a, { ...Xe.keepPlus }),
        })),
      (n[127] = c),
      (n[128] = l),
      (n[129] = _),
      (n[130] = U),
      (n[131] = Ye))
    : (Ye = n[131]);
  let Ze;
  n[132] !== c || n[133] !== l || n[134] !== g || n[135] !== o || n[136] !== U
    ? ((Ze =
        !U &&
        o == null &&
        (0, Y.jsx)(t, {
          color: `secondary`,
          disabled: c || l,
          type: `button`,
          onClick: g,
          children: (0, Y.jsx)(a, {
            id: `cancelSubscriptionModal.goBack`,
            defaultMessage: `Go back`,
            description: `Returns from cancellation confirmation without canceling the subscription`,
          }),
        })),
      (n[132] = c),
      (n[133] = l),
      (n[134] = g),
      (n[135] = o),
      (n[136] = U),
      (n[137] = Ze))
    : (Ze = n[137]);
  let $e;
  n[138] !== c ||
  n[139] !== u ||
  n[140] !== l ||
  n[141] !== xe ||
  n[142] !== h ||
  n[143] !== q ||
  n[144] !== o ||
  n[145] !== U
    ? (($e =
        !U &&
        o != null &&
        (0, Y.jsx)(t, {
          disabled: c || l || u != null,
          type: `button`,
          onClick: h,
          children:
            xe && !o.is_immediately_invoiced
              ? (0, Y.jsx)(a, {
                  id: `cancelSubscriptionModal.keepPlanForFreeButton`,
                  defaultMessage: `Keep {planName} for free`,
                  description: `Accepts a scheduled free retention promotion on the current plan`,
                  values: { planName: q },
                })
              : (0, Y.jsx)(a, {
                  id: `cancelSubscriptionModal.getOfferButton`,
                  defaultMessage: `Get offer`,
                  description: `Opens or accepts the current cancellation retention promotion`,
                }),
        })),
      (n[138] = c),
      (n[139] = u),
      (n[140] = l),
      (n[141] = xe),
      (n[142] = h),
      (n[143] = q),
      (n[144] = o),
      (n[145] = U),
      (n[146] = $e))
    : ($e = n[146]);
  let et;
  n[147] !== J || n[148] !== Ye || n[149] !== Ze || n[150] !== $e
    ? ((et = (0, Y.jsx)(T, {
        children: (0, Y.jsxs)(ae, { className: `flex-wrap`, children: [J, Ye, Ze, $e] }),
      })),
      (n[147] = J),
      (n[148] = Ye),
      (n[149] = Ze),
      (n[150] = $e),
      (n[151] = et))
    : (et = n[151]);
  let tt;
  return (
    n[152] !== c ||
    n[153] !== _ ||
    n[154] !== v ||
    n[155] !== Pe ||
    n[156] !== Fe ||
    n[157] !== Ie ||
    n[158] !== Le ||
    n[159] !== Re ||
    n[160] !== ze ||
    n[161] !== Be ||
    n[162] !== Ve ||
    n[163] !== Ue ||
    n[164] !== et
      ? ((tt = (0, Y.jsxs)(rt, {
          title: Pe,
          busy: c,
          onClose: _,
          onShown: v,
          onSubmit: Fe,
          children: [Ie, Le, Re, ze, Be, Ve, Ue, et],
        })),
        (n[152] = c),
        (n[153] = _),
        (n[154] = v),
        (n[155] = Pe),
        (n[156] = Fe),
        (n[157] = Ie),
        (n[158] = Le),
        (n[159] = Re),
        (n[160] = ze),
        (n[161] = Be),
        (n[162] = Ve),
        (n[163] = Ue),
        (n[164] = et),
        (n[165] = tt))
      : (tt = n[165]),
    tt
  );
}
function Rt(e) {
  return (0, Y.jsx)(ye, {
    href: Wt,
    initiator: `open_in_browser_bridge`,
    openTarget: `external-browser`,
    children: e,
  });
}
function zt(e) {
  return (0, Y.jsx)(ye, {
    href: Wt,
    initiator: `open_in_browser_bridge`,
    openTarget: `external-browser`,
    children: e,
  });
}
function Bt(e) {
  let t = (0, Ht.c)(26),
    { account: n, expirationDate: r, promoEndDate: i, remainingDays: o } = e,
    s;
  t[0] === n ? (s = t[1]) : ((s = _t(n)), (t[0] = n), (t[1] = s));
  let c = s,
    l = gt(n);
  if (ht(n)) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(a, {
            id: `cancelSubscriptionModal.plusFreeForGoOffer.body`,
            defaultMessage: `Canceling Plus will end your trial immediately and return you to Free`,
            description: `Explains the immediate consequence of declining Go and canceling a Go-origin Plus trial`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (l === `unconfirmed`) {
    let e;
    return (
      t[3] !== n.entitlement.discount || t[4] !== c
        ? ((e =
            n.entitlement.discount == null
              ? (0, Y.jsx)(a, {
                  id: `settings.consumerBilling.cancellation.termsPaymentUnconfirmed`,
                  defaultMessage: `If you cancel now, you'll keep {planName} access for any time you've already paid for. If your current period is unpaid, access may end immediately.`,
                  description: `Cancellation terms when the payment status may be outdated; paid access is preserved but unpaid access may end immediately`,
                  values: { planName: c },
                })
              : (0, Y.jsx)(a, {
                  id: `settings.consumerBilling.cancellation.discountedTermsPaymentUnconfirmed`,
                  defaultMessage: `If you cancel now, you'll keep {planName} access for any time you've already paid for. If your current period is unpaid, access may end immediately. Any discounts applied will be removed, and can't be used again.`,
                  description: `Cancellation terms for a discounted subscription whose payment status may be outdated; paid time is preserved, unpaid access may end immediately, and discounts cannot be reused`,
                  values: { planName: c },
                })),
          (t[3] = n.entitlement.discount),
          (t[4] = c),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  if (n.entitlement.discount != null) {
    if (
      l === `term_end` &&
      r != null &&
      n.account.plan_type === `plus` &&
      n.entitlement.discount.promo_campaign_id === `students-2026-four-month-free`
    ) {
      let e;
      return (
        t[6] === r
          ? (e = t[7])
          : ((e = (0, Y.jsx)(a, {
              id: `chatgpt.students.back_to_school_2026.cancellation.confirmation.body`,
              defaultMessage: `If you cancel your free student offer, your Plus access will end on {expirationDate}. Any discounts applied will be removed, and can’t be used again.`,
              description: `Cancellation terms for the 2026 four-month-free Plus student offer; expirationDate is the actual localized access end date`,
              values: { expirationDate: r },
            })),
            (t[6] = r),
            (t[7] = e)),
        e
      );
    }
    if (l === `immediate`) {
      let e;
      return (
        t[8] === c
          ? (e = t[9])
          : ((e = (0, Y.jsx)(a, {
              id: `cancelSubscriptionModal.hasDiscount.canceledSubscriptionImmediate`,
              defaultMessage: `If you cancel your subscription now, your {planName} access will end immediately. Any discounts applied will be removed, and can't be used again.`,
              description: `Warns that canceling an immediately ending discounted plan removes access and the reusable discount`,
              values: { planName: c },
            })),
            (t[8] = c),
            (t[9] = e)),
        e
      );
    }
    if (r != null) {
      if (i != null && i !== r && o != null && o >= 1) {
        let e =
            n.entitlement.discount.discount_type === `percentage` && n.entitlement.discount.amount === 100
              ? `free`
              : `discounted`,
          s;
        return (
          t[10] !== r || t[11] !== c || t[12] !== i || t[13] !== o || t[14] !== e
            ? ((s = (0, Y.jsx)(a, {
                id: `cancelSubscriptionModal.hasDiscount.canceledSubscriptionWithLostDays`,
                defaultMessage: `You currently have a promotion for {promotionType, select, free {free} other {discounted}} {planName} access until {promoEndDate}. Canceling now will remove this promotion and end your access on {expirationDate}. You’ll lose about {remainingDays, plural, one {# day} other {# days}} of {promotionType, select, free {free} other {discounted}} access. This promotion can’t be used again.`,
                description: `Plain-text body in the subscription cancellation confirmation modal. Tell an end-user they have an active promotion and clearly warn that canceling forfeits the time after their earlier access end. {promotionType} is 'free' only for a 100-percent discount; otherwise use the 'other' branch for discounted access. {planName} is a ChatGPT plan name such as Plus or Pro and must not be translated. {promoEndDate} is the nonempty localized original promotion end; {expirationDate} is the nonempty localized earlier access end after cancellation. {remainingDays} is a positive integer: the elapsed time between those end timestamps rounded to the nearest day, not the time from today. Retain the approximate meaning of 'about' and use locale-appropriate plural forms.`,
                values: {
                  planName: c,
                  expirationDate: r,
                  promoEndDate: i,
                  remainingDays: o,
                  promotionType: e,
                },
              })),
              (t[10] = r),
              (t[11] = c),
              (t[12] = i),
              (t[13] = o),
              (t[14] = e),
              (t[15] = s))
            : (s = t[15]),
          s
        );
      }
      let e;
      return (
        t[16] !== r || t[17] !== c
          ? ((e = (0, Y.jsx)(a, {
              id: `cancelSubscriptionModal.hasDiscount.canceledSubscription`,
              defaultMessage: `If you cancel your subscription now, your {planName} access will end on {expirationDate}. Any discounts applied will be removed, and can't be used again.`,
              description: `Warns that canceling a discounted plan ends access on expirationDate and removes discounts permanently`,
              values: { planName: c, expirationDate: r },
            })),
            (t[16] = r),
            (t[17] = c),
            (t[18] = e))
          : (e = t[18]),
        e
      );
    }
    let e;
    return (
      t[19] === c
        ? (e = t[20])
        : ((e = (0, Y.jsx)(a, {
            id: `settings.consumerBilling.cancellation.discountedTermsWithoutDate`,
            defaultMessage: `Your {planName} access will end at the end of your current billing period. Any discounts applied will be removed, and can't be used again.`,
            description: `Discounted cancellation terms when the account has not supplied an exact access end date`,
            values: { planName: c },
          })),
          (t[19] = c),
          (t[20] = e)),
      e
    );
  }
  if (l === `immediate`) {
    let e;
    return (
      t[21] === c
        ? (e = t[22])
        : ((e = (0, Y.jsx)(a, {
            id: `cancelSubscriptionModal.canceledSubscriptionImmediate`,
            defaultMessage: `If you cancel your subscription now, your {planName} access will end immediately`,
            description: `Cancellation terms when access ends immediately`,
            values: { planName: c },
          })),
          (t[21] = c),
          (t[22] = e)),
      e
    );
  }
  let u;
  return (
    t[23] !== r || t[24] !== c
      ? ((u =
          r == null
            ? (0, Y.jsx)(a, {
                id: `settings.consumerBilling.cancellation.termsWithoutDate`,
                defaultMessage: `Your {planName} subscription will be canceled but will remain active until the end of your current billing period`,
                description: `Cancellation terms when the account has not supplied an exact access end date`,
                values: { planName: c },
              })
            : (0, Y.jsx)(a, {
                id: `cancelSubscriptionModal.canceledSubscription`,
                defaultMessage: `Your {planName} subscription will be canceled but will remain active until the end of your billing period on {expirationDate}`,
                description: `Cancellation terms for an ordinary subscription; expirationDate is the actual localized end of access`,
                values: { planName: c, expirationDate: r },
              })),
        (t[23] = r),
        (t[24] = c),
        (t[25] = u))
      : (u = t[25]),
    u
  );
}
function Vt(e) {
  let t = (0, Ht.c)(15),
    { promotion: n, planName: r } = e,
    i = p(),
    o = n.duration?.num_periods ?? 1;
  if (`percentage` in n.discount) {
    let e;
    return (
      t[0] !== o || t[1] !== r || t[2] !== n.discount.percentage
        ? ((e =
            n.discount.percentage === 100
              ? (0, Y.jsx)(a, {
                  id: `cancelSubscriptionModal.freeTitle`,
                  defaultMessage: `Get {numPeriods, plural, one {one month} other {{numPeriods} months}} of {planName}, free`,
                  description: `Title of a free-month cancellation retention promotion`,
                  values: { planName: r, numPeriods: o },
                })
              : (0, Y.jsx)(a, {
                  id: `cancelSubscriptionModal.percentageOffTitle`,
                  defaultMessage: `Get {percentage}% off {planName} for {numPeriods, plural, one {one month} other {{numPeriods} months}}`,
                  description: `Title of a percentage-off cancellation retention promotion`,
                  values: { planName: r, numPeriods: o, percentage: n.discount.percentage },
                })),
          (t[0] = o),
          (t[1] = r),
          (t[2] = n.discount.percentage),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  if (`value` in n.discount) {
    let e;
    t[4] !== i || t[5] !== n.discount.currency_code || t[6] !== n.discount.value
      ? ((e = i.formatNumber(n.discount.value, {
          style: `currency`,
          currency: n.discount.currency_code,
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        })),
        (t[4] = i),
        (t[5] = n.discount.currency_code),
        (t[6] = n.discount.value),
        (t[7] = e))
      : (e = t[7]);
    let s;
    return (
      t[8] !== o || t[9] !== r || t[10] !== e
        ? ((s = (0, Y.jsx)(a, {
            id: `settings.consumerBilling.cancellation.valueOffTitle`,
            defaultMessage: `Get {valueOff} off {planName} for {numPeriods, plural, one {one month} other {{numPeriods} months}}`,
            description: `Title of a fixed-value retention discount; valueOff is the actual localized discount with currency`,
            values: { planName: r, numPeriods: o, valueOff: e },
          })),
          (t[8] = o),
          (t[9] = r),
          (t[10] = e),
          (t[11] = s))
        : (s = t[11]),
      s
    );
  }
  let s;
  return (
    t[12] !== r || t[13] !== n.title
      ? ((s =
          n.title == null
            ? (0, Y.jsx)(a, {
                id: `settings.consumerBilling.cancellation.promotionTitle`,
                defaultMessage: `Keep {planName} with this offer`,
                description: `Title of a cancellation retention promotion whose metadata supplies no localized title`,
                values: { planName: r },
              })
            : (0, Y.jsx)(Y.Fragment, { children: n.title })),
        (t[12] = r),
        (t[13] = n.title),
        (t[14] = s))
      : (s = t[14]),
    s
  );
}
var Ht, Ut, Y, Wt;
function Gt() {
  return (Gt = e(() => {
    ((Ht = N()),
      h(),
      (Ut = L()),
      w(),
      D(),
      v(),
      _e(),
      se(),
      z(),
      W(),
      Pe(),
      Je(),
      nt(),
      ct(),
      Ze(),
      ft(),
      It(),
      Dt(),
      (Y = I()),
      (Wt = `https://help.openai.com/articles/7232895-how-do-i-request-a-refund-for-my-chatgpt-subscription`));
  }))();
}
function X(e, t, n) {
  if (t === `chatgpt_cancel_subscription_modal_cancel_failed`) {
    le(e, Se, {
      actionType: be.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_CANCELLATION_FAILED,
      legacyStatsigEventName: t,
    });
    return;
  }
  e.get(G).logEventWithStatsig?.(t, n);
}
function Kt() {
  return (Kt = e(() => {
    (xe(), ue());
  }))();
}
function qt(e) {
  let n = (0, Yt.c)(18),
    { account: r, onBack: i, onClose: o, onContinue: s, onShown: c } = e,
    l = gt(r),
    u = J.thingsYouLoseBody;
  l === `immediate`
    ? (u = J.thingsYouLoseBodyImmediate)
    : l === `unconfirmed` && (u = J.thingsYouLoseBodyPaymentUnconfirmed);
  let d;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = [
        J.thingsYouLoseExtendedLimits,
        J.thingsYouLoseVoiceMode,
        J.thingsYouLoseModelAccess,
        J.thingsYouLoseCustomGpts,
      ]),
      (n[0] = d))
    : (d = n[0]);
  let f = d,
    p;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Z.jsx)(a, { ...J.thingsYouLoseTitle })), (n[1] = p))
    : (p = n[1]);
  let m;
  n[2] === u
    ? (m = n[3])
    : ((m = (0, Z.jsx)(T, {
        children: (0, Z.jsx)(`p`, {
          className: `leading-relaxed text-default`,
          children: (0, Z.jsx)(a, { ...u }),
        }),
      })),
      (n[2] = u),
      (n[3] = m));
  let h;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(`p`, {
        className: `font-semibold`,
        children: (0, Z.jsx)(a, { ...J.thingsYouLoseCardTitle }),
      })),
      (n[4] = h))
    : (h = n[4]);
  let g;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Z.jsx)(T, {
        spacing: `large`,
        children: (0, Z.jsxs)(`div`, {
          className: `flex flex-col gap-4 rounded-xl bg-secondary-soft p-4 text-sm text-default`,
          children: [h, (0, Z.jsx)(`ul`, { className: `flex flex-col gap-4`, children: f.map(Jt) })],
        }),
      })),
      (n[5] = g))
    : (g = n[5]);
  let _;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Z.jsx)(a, { ...J.backButtonLabel })), (n[6] = _))
    : (_ = n[6]);
  let v;
  n[7] === i
    ? (v = n[8])
    : ((v = (0, Z.jsx)(t, { color: `secondary`, type: `button`, onClick: i, children: _ })),
      (n[7] = i),
      (n[8] = v));
  let y;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Z.jsx)(t, { type: `submit`, children: (0, Z.jsx)(a, { ...J.continueButtonLabel }) })),
      (n[9] = y))
    : (y = n[9]);
  let b;
  n[10] === v
    ? (b = n[11])
    : ((b = (0, Z.jsx)(T, { children: (0, Z.jsxs)(ae, { children: [v, y] }) })), (n[10] = v), (n[11] = b));
  let x;
  return (
    n[12] !== o || n[13] !== s || n[14] !== c || n[15] !== m || n[16] !== b
      ? ((x = (0, Z.jsxs)(rt, { title: p, onClose: o, onShown: c, onSubmit: s, children: [m, g, b] })),
        (n[12] = o),
        (n[13] = s),
        (n[14] = c),
        (n[15] = m),
        (n[16] = b),
        (n[17] = x))
      : (x = n[17]),
    x
  );
}
function Jt(e) {
  return (0, Z.jsxs)(
    `li`,
    {
      className: `flex items-start gap-4`,
      children: [
        (0, Z.jsx)(F, { className: `text-danger` }),
        (0, Z.jsx)(`span`, { className: `min-w-0 flex-1`, children: (0, Z.jsx)(a, { ...e }) }),
      ],
    },
    e.id,
  );
}
var Yt, Z;
function Xt() {
  return (Xt = e(() => {
    ((Yt = N()), w(), D(), v(), f(), ct(), Ze(), Dt(), (Z = I()));
  }))();
}
function Zt(e) {
  let t = (0, Qt.c)(26),
    { designVariant: n, plan: r } = e,
    i = (0, $t.useId)(),
    [a, o] = (0, $t.useState)(!1);
  if (r === `plus`) {
    let e = a ? nn : an,
      n;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = () => o(!0)), (t[0] = n)) : (n = t[0]);
    let r;
    return (
      t[1] === e
        ? (r = t[2])
        : ((r = (0, en.jsx)(`img`, { className: `size-full object-cover`, alt: ``, src: e, onError: n })),
          (t[1] = e),
          (t[2] = r)),
      r
    );
  }
  if (n === `premium_refresh` && !a) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, en.jsx)(`img`, {
            className: `size-full object-cover`,
            alt: ``,
            src: rn,
            onError: () => o(!0),
          })),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let s = `${i}-fade`,
    c,
    l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, en.jsx)(`stop`, {
        offset: `24.327%`,
        stopColor: `var(--color-surface-elevated-secondary)`,
        stopOpacity: `0`,
      })),
      (l = (0, en.jsx)(`stop`, { offset: `47.029%`, stopColor: `var(--color-surface-elevated-secondary)` })),
      (t[4] = c),
      (t[5] = l))
    : ((c = t[4]), (l = t[5]));
  let u;
  t[6] === s
    ? (u = t[7])
    : ((u = (0, en.jsxs)(`linearGradient`, {
        id: s,
        x1: `0`,
        y1: `0`,
        x2: `0`,
        y2: `429`,
        gradientUnits: `userSpaceOnUse`,
        children: [c, l],
      })),
      (t[6] = s),
      (t[7] = u));
  let d = `${i}-shadow`,
    f,
    p;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, en.jsx)(`feDropShadow`, { dx: `0`, dy: `1`, stdDeviation: `1`, floodOpacity: `0.04` })),
      (p = (0, en.jsx)(`feDropShadow`, { dx: `0`, dy: `6`, stdDeviation: `5`, floodOpacity: `0.08` })),
      (t[8] = f),
      (t[9] = p))
    : ((f = t[8]), (p = t[9]));
  let m;
  t[10] === d
    ? (m = t[11])
    : ((m = (0, en.jsxs)(`filter`, {
        id: d,
        x: `-50%`,
        y: `-50%`,
        width: `200%`,
        height: `200%`,
        children: [f, p],
      })),
      (t[10] = d),
      (t[11] = m));
  let h;
  t[12] !== u || t[13] !== m
    ? ((h = (0, en.jsxs)(`defs`, { children: [u, m] })), (t[12] = u), (t[13] = m), (t[14] = h))
    : (h = t[14]);
  let g;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, en.jsx)(`image`, {
        href: tn,
        x: `-30.384`,
        y: `-164.779`,
        width: `960.192`,
        height: `455.555`,
        preserveAspectRatio: `xMidYMid slice`,
      })),
      (t[15] = g))
    : (g = t[15]);
  let _ = `url(#${i}-fade)`,
    v;
  t[16] === _
    ? (v = t[17])
    : ((v = (0, en.jsx)(`path`, { d: `M0 0h480v214H0z`, fill: _ })), (t[16] = _), (t[17] = v));
  let y = `url(#${i}-shadow)`,
    b,
    x;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, en.jsx)(`path`, {
        d: `M9.52591 2.56122C10.8927 1.19464 13.1083 1.19464 14.4751 2.56122L21.44 9.52607C22.8059 10.8929 22.8063 13.1087 21.44 14.4753L14.4751 21.4401C13.1086 22.8065 10.8927 22.806 9.52591 21.4401L2.56106 14.4753C1.19448 13.1085 1.1945 10.8929 2.56106 9.52607L9.52591 2.56122Z`,
        fill: `#FFFFFF`,
      })),
      (x = (0, en.jsx)(`path`, {
        d: `M9.50051 8.9997C9.2881 8.99948 9.10903 9.15887 9.0845 9.36982C8.93245 10.6881 8.18796 11.4326 6.86966 11.5847C6.6587 11.6092 6.49932 11.7883 6.49954 12.0007C6.49987 12.213 6.65963 12.3917 6.87063 12.4157C8.17022 12.5629 8.96632 13.2996 9.08352 14.6188C9.1027 14.8348 9.28375 14.9999 9.50051 14.9997C9.71719 14.9993 9.89784 14.8338 9.91653 14.6179C10.0291 13.3173 10.8171 12.5293 12.1177 12.4167C12.3336 12.398 12.4992 12.2174 12.4995 12.0007C12.4998 11.7839 12.3346 11.6029 12.1187 11.5837C10.7994 11.4665 10.0628 10.6704 9.91555 9.37079C9.89153 9.1598 9.71287 9.00004 9.50051 8.9997Z`,
        fill: `#EFC8D8`,
      })),
      (t[18] = b),
      (t[19] = x))
    : ((b = t[18]), (x = t[19]));
  let S;
  t[20] === y
    ? (S = t[21])
    : ((S = (0, en.jsxs)(`svg`, {
        x: `200`,
        y: `78`,
        width: `80`,
        height: `80`,
        viewBox: `1.194 1.194 21.612 21.612`,
        overflow: `visible`,
        filter: y,
        children: [b, x],
      })),
      (t[20] = y),
      (t[21] = S));
  let C;
  return (
    t[22] !== v || t[23] !== S || t[24] !== h
      ? ((C = (0, en.jsxs)(`svg`, {
          className: `size-full`,
          viewBox: `0 0 480 214`,
          preserveAspectRatio: `xMidYMid slice`,
          overflow: `hidden`,
          "aria-hidden": !0,
          children: [h, g, v, S],
        })),
        (t[22] = v),
        (t[23] = S),
        (t[24] = h),
        (t[25] = C))
      : (C = t[25]),
    C
  );
}
var Qt, $t, en, tn, nn, rn, an;
function on() {
  return (on = e(() => {
    ((Qt = N()),
      ($t = L()),
      (en = I()),
      (tn = `https://cdn.oaistatic.com/assets/cancel-retention-go-bg-j8bbnivz.webp`),
      (nn = `https://cdn.oaistatic.com/assets/cancel-retention-plus-bg-fv5ezepr.webp`),
      (rn = `https://cdn.openai.com/chatgpt/clients/cancellation-retention/go-downgrade-purple-9c85e5b5.webp`),
      (an = `https://cdn.openai.com/chatgpt/clients/cancellation-retention/plus-offer-blue-c4e15ada.webp`));
  }))();
}
function sn(e) {
  let n = (0, cn.c)(90),
    {
      accountId: r,
      account: i,
      kind: o,
      designVariant: s,
      busy: c,
      disabled: l,
      error: u,
      cancellationError: d,
      onAccept: f,
      onDecline: h,
      onClose: g,
      onShown: _,
    } = e,
    v = s === void 0 ? `legacy` : s,
    b = p(),
    x = (0, ln.useRef)(!1),
    { client: S } = fe(),
    C;
  n[0] !== i.entitlement.billing_currency || n[1] !== r || n[2] !== S
    ? ((C = kt(r, i.entitlement.billing_currency, S)),
      (n[0] = i.entitlement.billing_currency),
      (n[1] = r),
      (n[2] = S),
      (n[3] = C))
    : (C = n[3]);
  let w = o !== `plus_offer`,
    ee;
  n[4] !== C || n[5] !== w
    ? ((ee = { ...C, enabled: w, staleTime: 0 }), (n[4] = C), (n[5] = w), (n[6] = ee))
    : (ee = n[6]);
  let { data: E, isPending: te } = m(ee),
    ne = E?.currency_config,
    re = ne?.[o === `pro_offer` ? `prolite` : `go`]?.month?.amount,
    ie;
  n[7] !== re || n[8] !== ne || n[9] !== b
    ? ((ie =
        re != null && ne != null
          ? b.formatNumber(re, {
              style: `currency`,
              currency: ne.symbol_code,
              maximumFractionDigits: 2,
              minimumFractionDigits: 0,
            })
          : null),
      (n[7] = re),
      (n[8] = ne),
      (n[9] = b),
      (n[10] = ie))
    : (ie = n[10]);
  let D = ie,
    O = v === `premium_refresh` && (o === `plus_offer` || o === `go_offer`),
    k = c || (l && u !== `delinquent_subscription`),
    A,
    j,
    M;
  bb0: switch (o) {
    case `plus_offer`: {
      let e;
      (n[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(a, {
            id: `cancelSubscriptionPlusOfferModal.title`,
            defaultMessage: `Keep your Plus benefits — free for 1 month`,
            description: `Headline introducing the one-month free Plus retention offer when a subscriber starts cancellation`,
          })),
          (n[11] = e))
        : (e = n[11]),
        (A = e));
      let t;
      (n[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Q.jsx)(a, {
            id: `cancelSubscriptionPlusOfferModal.body`,
            defaultMessage: `We’d love for you to keep extended access to advanced models, increased file uploads, and more personalization — so we’re making it all free for the next 30 days`,
            description: `Explains the one-month Plus retention offer shown during subscription cancellation`,
          })),
          (n[12] = t))
        : (t = n[12]),
        (j = t));
      let r;
      (n[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Q.jsx)(a, {
            id: `cancelSubscriptionPlusOfferModal.claimOfferButtonLabel`,
            defaultMessage: `Claim offer`,
            description: `Accepts the one-month free Plus retention offer or opens its immediate payment confirmation`,
          })),
          (n[13] = r))
        : (r = n[13]),
        (M = r));
      break bb0;
    }
    case `go_trial`: {
      let e;
      (n[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(a, {
            id: `cancelSubscriptionGoUpsellModal.goTrialReturnTitle`,
            defaultMessage: `Switch back to ChatGPT Go?`,
            description: `Offers a user on a Go-origin Plus trial an immediate return to Go`,
          })),
          (n[14] = e))
        : (e = n[14]),
        (A = e));
      let t;
      (n[15] === D
        ? (t = n[16])
        : ((t =
            D == null
              ? (0, Q.jsx)(a, {
                  id: `cancelSubscriptionGoUpsellModal.goTrialReturnBodyFallback`,
                  defaultMessage: `Keep expanded messages and image creation with less powerful intelligence`,
                  description: `Describes returning to Go when its localized monthly price is unavailable`,
                })
              : (0, Q.jsx)(a, {
                  id: `cancelSubscriptionGoUpsellModal.goTrialReturnBody`,
                  defaultMessage: `Keep expanded messages and image creation with less powerful intelligence for just {monthlyPrice}/month`,
                  description: `Describes returning immediately to Go; monthlyPrice is the actual localized monthly Go price`,
                  values: { monthlyPrice: D },
                })),
          (n[15] = D),
          (n[16] = t)),
        (j = t));
      let r;
      (n[17] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Q.jsx)(a, {
            id: `cancelSubscriptionGoUpsellModal.continueWithGoButtonLabel`,
            defaultMessage: `Continue with Go`,
            description: `Ends the Go-origin Plus trial immediately and restores the user's Go subscription`,
          })),
          (n[17] = r))
        : (r = n[17]),
        (M = r));
      break bb0;
    }
    case `go_offer`: {
      let e;
      (n[18] === D
        ? (e = n[19])
        : ((e =
            D == null
              ? (0, Q.jsx)(a, {
                  id: `cancelSubscriptionGoUpsellModal.titleFallback`,
                  defaultMessage: `Switch to ChatGPT Go?`,
                  description: `Offers a Go downgrade during cancellation when its monthly price is unavailable`,
                })
              : (0, Q.jsx)(a, {
                  id: `cancelSubscriptionGoUpsellModal.title`,
                  defaultMessage: `Switch to ChatGPT Go for only {monthlyPrice}?`,
                  description: `Offers a lower-cost Go plan during cancellation; monthlyPrice is the actual localized monthly Go price`,
                  values: { monthlyPrice: D },
                })),
          (n[18] = D),
          (n[19] = e)),
        (A = e));
      let t;
      (n[20] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Q.jsx)(a, {
            id: `cancelSubscriptionGoUpsellModal.body`,
            defaultMessage: `Keep expanded messages and image creation with less powerful intelligence at a lower monthly price`,
            description: `Describes the Go plan offered as an alternative to canceling Plus`,
          })),
          (n[20] = t))
        : (t = n[20]),
        (j = t));
      let r;
      (n[21] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Q.jsx)(a, {
            id: `cancelSubscriptionGoUpsellModal.switchToGoButtonLabel`,
            defaultMessage: `Try ChatGPT Go`,
            description: `Opens the normal subscription plan-change confirmation for a Plus-to-Go downgrade`,
          })),
          (n[21] = r))
        : (r = n[21]),
        (M = r));
      break bb0;
    }
    case `pro_offer`: {
      let e;
      (n[22] === D
        ? (e = n[23])
        : ((e =
            D == null
              ? (0, Q.jsx)(a, {
                  id: `settings.consumerBilling.cancellation.proOfferPriceUnavailable`,
                  defaultMessage: `Keep Pro at a lower price?`,
                  description: `Fallback heading for a Pro subscriber offered the lower Pro tier when its current price is unavailable`,
                })
              : (0, Q.jsx)(a, {
                  id: `cancelSubscriptionProLiteDowngradeModal.title`,
                  defaultMessage: `Keep Pro for {price}/month?`,
                  description: `Offers a Pro subscriber the lower Pro tier before cancellation; price is the actual localized monthly price`,
                  values: { price: D },
                })),
          (n[22] = D),
          (n[23] = e)),
        (A = e));
      let t;
      (n[24] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Q.jsx)(a, {
            id: `cancelSubscriptionProLiteDowngradeModal.description`,
            defaultMessage: `Keep all your Pro features with reduced usage limits for a lower price`,
            description: `Describes the lower Pro tier offered during cancellation`,
          })),
          (n[24] = t))
        : (t = n[24]),
        (j = t));
      let r;
      (n[25] === D
        ? (r = n[26])
        : ((r =
            D == null
              ? (0, Q.jsx)(a, {
                  id: `settings.consumerBilling.cancellation.reviewProOffer`,
                  defaultMessage: `Review plan change`,
                  description: `Opens the actual Pro downgrade preview when the interception card could not display its price`,
                })
              : (0, Q.jsx)(a, {
                  id: `cancelSubscriptionProLiteDowngradeModal.downgradeButtonLabel`,
                  defaultMessage: `Switch to {price}`,
                  description: `Opens the Pro downgrade confirmation; price is the actual localized monthly price of the lower tier`,
                  values: { price: D },
                })),
          (n[25] = D),
          (n[26] = r)),
        (M = r));
    }
  }
  if (o === `go_offer` || o === `go_trial` || O) {
    let e;
    n[27] === j
      ? (e = n[28])
      : ((e = (0, Q.jsx)(y, {
          className: `text-base leading-normal tracking-normal text-codex-description`,
          children: j,
        })),
        (n[27] = j),
        (n[28] = e));
    let t;
    n[29] === u
      ? (t = n[30])
      : ((t = u == null ? null : (0, Q.jsx)(lt, { result: u })), (n[29] = u), (n[30] = t));
    let r;
    n[31] !== d || n[32] !== e || n[33] !== t
      ? ((r = (0, Q.jsxs)(Q.Fragment, { children: [e, t, d] })),
        (n[31] = d),
        (n[32] = e),
        (n[33] = t),
        (n[34] = r))
      : (r = n[34]);
    let i = o === `plus_offer` ? `plus` : `go`,
      s;
    n[35] !== v || n[36] !== i
      ? ((s = (0, Q.jsx)(Zt, { plan: i, designVariant: v })), (n[35] = v), (n[36] = i), (n[37] = s))
      : (s = n[37]);
    let p = c ? `primary` : void 0,
      m;
    n[38] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((m = (0, Q.jsx)(a, {
          id: `cancelSubscriptionRetentionModal.noThanks`,
          defaultMessage: `No thanks`,
          description: `Continues cancellation without accepting the retention offer`,
        })),
        (n[38] = m))
      : (m = n[38]);
    let b;
    n[39] !== c || n[40] !== g
      ? ((b = () => {
          c || g();
        }),
        (n[39] = c),
        (n[40] = g),
        (n[41] = b))
      : (b = n[41]);
    let S;
    n[42] === _
      ? (S = n[43])
      : ((S = () => {
          x.current || ((x.current = !0), _());
        }),
        (n[42] = _),
        (n[43] = S));
    let C;
    return (
      n[44] !== M ||
      n[45] !== k ||
      n[46] !== l ||
      n[47] !== f ||
      n[48] !== h ||
      n[49] !== s ||
      n[50] !== p ||
      n[51] !== b ||
      n[52] !== S ||
      n[53] !== r ||
      n[54] !== A
        ? ((C = (0, Q.jsx)(ce, {
            asForm: !0,
            theme: `light`,
            title: A,
            hasDescription: !0,
            body: r,
            media: s,
            closeButtonTone: `dark`,
            pendingAction: p,
            primaryActionDisabled: l,
            secondaryActionDisabled: k,
            primaryActionLabel: M,
            dismissLabel: m,
            onPrimaryAction: f,
            onSecondaryAction: h,
            onDismiss: b,
            onOpenAutoFocus: S,
          })),
          (n[44] = M),
          (n[45] = k),
          (n[46] = l),
          (n[47] = f),
          (n[48] = h),
          (n[49] = s),
          (n[50] = p),
          (n[51] = b),
          (n[52] = S),
          (n[53] = r),
          (n[54] = A),
          (n[55] = C))
        : (C = n[55]),
      C
    );
  }
  let N;
  n[56] !== l || n[57] !== f
    ? ((N = () => {
        l || f();
      }),
      (n[56] = l),
      (n[57] = f),
      (n[58] = N))
    : (N = n[58]);
  let P;
  n[59] === j
    ? (P = n[60])
    : ((P = (0, Q.jsx)(T, { children: (0, Q.jsx)(`p`, { className: `text-secondary`, children: j }) })),
      (n[59] = j),
      (n[60] = P));
  let F;
  n[61] !== o || n[62] !== te
    ? ((F = o === `pro_offer` && te ? (0, Q.jsx)(T, { children: (0, Q.jsx)(it, {}) }) : null),
      (n[61] = o),
      (n[62] = te),
      (n[63] = F))
    : (F = n[63]);
  let I;
  n[64] === u
    ? (I = n[65])
    : ((I = u == null ? null : (0, Q.jsx)(T, { children: (0, Q.jsx)(lt, { result: u }) })),
      (n[64] = u),
      (n[65] = I));
  let L;
  n[66] === d
    ? (L = n[67])
    : ((L = d == null ? null : (0, Q.jsx)(T, { children: d })), (n[66] = d), (n[67] = L));
  let R;
  n[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Q.jsx)(a, {
        id: `cancelSubscriptionRetentionModal.noThanks`,
        defaultMessage: `No thanks`,
        description: `Continues cancellation without accepting the retention offer`,
      })),
      (n[68] = R))
    : (R = n[68]);
  let z;
  n[69] !== k || n[70] !== h
    ? ((z = (0, Q.jsx)(t, { color: `secondary`, disabled: k, type: `button`, onClick: h, children: R })),
      (n[69] = k),
      (n[70] = h),
      (n[71] = z))
    : (z = n[71]);
  let B;
  n[72] !== M || n[73] !== c || n[74] !== l
    ? ((B = (0, Q.jsx)(t, { disabled: l, loading: c, type: `submit`, children: M })),
      (n[72] = M),
      (n[73] = c),
      (n[74] = l),
      (n[75] = B))
    : (B = n[75]);
  let V;
  n[76] !== z || n[77] !== B
    ? ((V = (0, Q.jsx)(T, { children: (0, Q.jsxs)(ae, { children: [z, B] }) })),
      (n[76] = z),
      (n[77] = B),
      (n[78] = V))
    : (V = n[78]);
  let H;
  return (
    n[79] !== c ||
    n[80] !== g ||
    n[81] !== _ ||
    n[82] !== L ||
    n[83] !== V ||
    n[84] !== N ||
    n[85] !== P ||
    n[86] !== F ||
    n[87] !== I ||
    n[88] !== A
      ? ((H = (0, Q.jsxs)(rt, {
          title: A,
          busy: c,
          onClose: g,
          onShown: _,
          onSubmit: N,
          children: [P, F, I, L, V],
        })),
        (n[79] = c),
        (n[80] = g),
        (n[81] = _),
        (n[82] = L),
        (n[83] = V),
        (n[84] = N),
        (n[85] = P),
        (n[86] = F),
        (n[87] = I),
        (n[88] = A),
        (n[89] = H))
      : (H = n[89]),
    H
  );
}
var cn, ln, Q;
function un() {
  return (un = e(() => {
    ((cn = N()), h(), (ln = L()), w(), V(), D(), j(), v(), W(), ct(), on(), ft(), It(), (Q = I()));
  }))();
}
function dn() {
  return (dn = e(() => {
    (N(), S(), I());
  }))();
}
function fn() {
  return (fn = e(() => {
    (A(), dn(), I());
  }))();
}
function pn(e) {
  let n = (0, mn.c)(114),
    { account: i, accountId: o, promotion: c, onBack: l, onClose: d } = e,
    f = s(r),
    h = p(),
    { client: g } = fe(),
    _ = (0, hn.useRef)(!1),
    v;
  n[0] !== o || n[1] !== c ? ((v = At(o, c)), (n[0] = o), (n[1] = c), (n[2] = v)) : (v = n[2]);
  let { data: y, isPending: x, isFetching: S, isError: C, refetch: w } = m(v),
    ee;
  n[3] !== i.entitlement.billing_currency || n[4] !== o || n[5] !== g
    ? ((ee = kt(o, i.entitlement.billing_currency, g)),
      (n[3] = i.entitlement.billing_currency),
      (n[4] = o),
      (n[5] = g),
      (n[6] = ee))
    : (ee = n[6]);
  let { data: E, isPending: te, isError: ne, refetch: re } = m(ee),
    D;
  n[7] !== o || n[8] !== c || n[9] !== f
    ? ((D = {
        mutationFn: async () => {
          let e = await Mt(o, c);
          return (await ke(f, o), e);
        },
        retry: !1,
      }),
      (n[7] = o),
      (n[8] = c),
      (n[9] = f),
      (n[10] = D))
    : (D = n[10]);
  let { mutate: k, data: A, isPending: j, isError: M } = u(D),
    N = i.account.plan_type,
    P;
  n[11] !== N || n[12] !== E?.currency_config
    ? ((P = me(N) ? E?.currency_config[N]?.month?.amount : void 0),
      (n[11] = N),
      (n[12] = E?.currency_config),
      (n[13] = P))
    : (P = n[13]);
  let F = P,
    I;
  n[14] !== F || n[15] !== y || n[16] !== E
    ? ((I =
        E != null &&
        F != null &&
        y != null &&
        y.currency.toUpperCase() === E.currency_config.symbol_code.toUpperCase()),
      (n[14] = F),
      (n[15] = y),
      (n[16] = E),
      (n[17] = I))
    : (I = n[17]);
  let L = I,
    R = L && !x && !te && !S && !C && !ne,
    z = M ? `unknown` : A,
    B = c.duration?.num_periods ?? 1,
    V = y?.default_payment_method,
    H,
    oe,
    se,
    ce,
    le,
    ue,
    U,
    W,
    G,
    de;
  if (
    n[18] !== L ||
    n[19] !== h ||
    n[20] !== j ||
    n[21] !== k ||
    n[22] !== B ||
    n[23] !== d ||
    n[24] !== z ||
    n[25] !== V ||
    n[26] !== N ||
    n[27] !== F ||
    n[28] !== y ||
    n[29] !== C ||
    n[30] !== x ||
    n[31] !== E ||
    n[32] !== ne ||
    n[33] !== te ||
    n[34] !== c.campaign_id ||
    n[35] !== c.discount ||
    n[36] !== c.summary ||
    n[37] !== R ||
    n[38] !== w ||
    n[39] !== re ||
    n[40] !== f
  ) {
    let e = V?.card_brand?.trim(),
      t;
    n[51] === V?.card_last4
      ? (t = n[52])
      : ((t = V?.card_last4?.trim()), (n[51] = V?.card_last4), (n[52] = t));
    let r = t;
    oe = R && !j && z == null;
    let i;
    n[53] !== oe || n[54] !== h || n[55] !== k || n[56] !== d || n[57] !== c.campaign_id || n[58] !== f
      ? ((i = () => {
          oe &&
            !_.current &&
            ((_.current = !0),
            X(f, `chatgpt_claim_subscription_cancellation_promotion_modal_pay_now_button_clicked`),
            k(void 0, {
              onSuccess: (e) => {
                if (e !== `success`) {
                  e !== `pending` &&
                    X(f, `chatgpt_claim_subscription_cancellation_promotion_error`, {
                      promo_id: c.campaign_id,
                      ...(e === `card_declined` ? { error_type: `card_declined` } : {}),
                    });
                  return;
                }
                (X(f, `chatgpt_claim_subscription_cancellation_promotion_success`, {
                  promo_id: c.campaign_id,
                }),
                  f
                    .get(b)
                    .success(
                      h.formatMessage({
                        id: `cancelPromoClaimModal.successfullyClaimedPromotion`,
                        defaultMessage: `You've successfully claimed your promotion`,
                        description: `Notification after the server confirms an immediately invoiced cancellation promotion`,
                      }),
                    ),
                  d());
              },
            }));
        }),
        (n[53] = oe),
        (n[54] = h),
        (n[55] = k),
        (n[56] = d),
        (n[57] = c.campaign_id),
        (n[58] = f),
        (n[59] = i))
      : (i = n[59]);
    let o = i,
      s = C || ne || (!x && !te && !L),
      l = c.summary;
    if (`percentage` in c.discount) {
      let e;
      (n[60] !== B || n[61] !== c.discount.percentage
        ? ((e = (0, $.jsx)(a, {
            id: `cancelPromoClaimModal.percentageDiscountInfo`,
            defaultMessage: `{discountPercentage}% off for {numPeriods, plural, one {1 month} other {{numPeriods} months}}`,
            description: `Percentage discount and duration in the retention offer invoice preview`,
            values: { discountPercentage: c.discount.percentage, numPeriods: B },
          })),
          (n[60] = B),
          (n[61] = c.discount.percentage),
          (n[62] = e))
        : (e = n[62]),
        (l = e));
    } else if (`value` in c.discount) {
      let e;
      n[63] !== h || n[64] !== c.discount.currency_code || n[65] !== c.discount.value
        ? ((e = h.formatNumber(c.discount.value, {
            style: `currency`,
            currency: c.discount.currency_code,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          })),
          (n[63] = h),
          (n[64] = c.discount.currency_code),
          (n[65] = c.discount.value),
          (n[66] = e))
        : (e = n[66]);
      let t;
      (n[67] !== B || n[68] !== e
        ? ((t = (0, $.jsx)(a, {
            id: `cancelPromoClaimModal.valueDiscountInfo`,
            defaultMessage: `{valueOff} off for {numPeriods, plural, one {1 month} other {{numPeriods} months}}`,
            description: `Fixed discount and duration in the retention offer invoice preview; valueOff is localized with currency`,
            values: { valueOff: e, numPeriods: B },
          })),
          (n[67] = B),
          (n[68] = e),
          (n[69] = t))
        : (t = n[69]),
        (l = t));
    }
    ((H = rt),
      n[70] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((U = (0, $.jsx)(a, {
            id: `cancelPromoClaimModal.title`,
            defaultMessage: `Confirm changes`,
            description: `Title for modal claiming a subscription cancellation promotion`,
          })),
          (n[70] = U))
        : (U = n[70]),
      (W = j),
      n[71] !== d || n[72] !== f
        ? ((G = () => {
            (X(f, `chatgpt_claim_subscription_cancellation_promotion_modal_close`), d());
          }),
          (n[71] = d),
          (n[72] = f),
          (n[73] = G))
        : (G = n[73]),
      n[74] === f
        ? (de = n[75])
        : ((de = () => {
            X(f, `chatgpt_claim_subscription_cancellation_promotion_modal_shown`);
          }),
          (n[74] = f),
          (n[75] = de)),
      (se = o),
      n[76] !== s || n[77] !== w || n[78] !== re
        ? ((ce = s
            ? (0, $.jsx)(T, {
                children: (0, $.jsx)(je, {
                  onRetry: () => {
                    (w(), re());
                  },
                }),
              })
            : null),
          (n[76] = s),
          (n[77] = w),
          (n[78] = re),
          (n[79] = ce))
        : (ce = n[79]),
      n[80] !== s || n[81] !== F || n[82] !== y || n[83] !== E
        ? ((le =
            !s && (y == null || E == null || F == null)
              ? (0, $.jsx)(T, { children: (0, $.jsx)(it, {}) })
              : null),
          (n[80] = s),
          (n[81] = F),
          (n[82] = y),
          (n[83] = E),
          (n[84] = le))
        : (le = n[84]),
      (ue =
        !s && y != null && E != null && F != null
          ? (0, $.jsx)($.Fragment, {
              children: (0, $.jsx)(T, {
                children: (0, $.jsxs)(ie, {
                  children: [
                    (0, $.jsx)(O, {
                      label: (0, $.jsx)(a, {
                        id: `cancelPromoClaimModal.subscription.numberedTiers`,
                        defaultMessage: `ChatGPT {planType, select, go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {Pro}} for {numPeriods, plural, one {1 month} other {{numPeriods} months}}`,
                        description: `Subscription plan and number of months covered by an immediately invoiced retention offer. planType is the stored plan identifier; Pro tier names are Pro 100, Pro 200, and Pro 500. numPeriods is the number of months. The numbers in Pro plan names are fixed SKU names, not localized prices.`,
                        values: { planType: N, numPeriods: B },
                      }),
                      description: (0, $.jsx)(a, {
                        id: `settings.consumerBilling.cancellation.promotionBillingCycle`,
                        defaultMessage: `One-time payment, then {planCost}/month after {numPeriods, plural, one {1 month} other {{numPeriods} months}}`,
                        description: `Ongoing billing terms for an immediately invoiced retention offer; planCost includes the actual billing currency`,
                        values: {
                          planCost: h.formatNumber(F, {
                            style: `currency`,
                            currency: E.currency_config.symbol_code,
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2,
                          }),
                          numPeriods: B,
                        },
                      }),
                      control: De(h, y.positive_line_item_total_excluding_tax, y.currency),
                    }),
                    y.negative_line_item_total === 0
                      ? null
                      : (0, $.jsx)(O, {
                          label: (0, $.jsx)(a, {
                            id: `cancelPromoClaimModal.adjustment`,
                            defaultMessage: `Adjustment`,
                            description: `Prorated credit line in the retention offer invoice preview`,
                          }),
                          description: (0, $.jsx)(a, {
                            id: `cancelPromoClaimModal.proratedCreditInfo.currentSubscription`,
                            defaultMessage: `Prorated credit for the remainder of your current subscription`,
                            description: `Explains the credit for unused time on the current subscription in a retention offer invoice preview. No placeholders.`,
                          }),
                          control: De(h, -Math.abs(y.negative_line_item_total), y.currency),
                        }),
                    y.discount_amount === 0
                      ? null
                      : (0, $.jsx)(O, {
                          label: (0, $.jsx)(a, {
                            id: `cancelPromoClaimModal.discount`,
                            defaultMessage: `Discount`,
                            description: `Discount line in the retention offer invoice preview`,
                          }),
                          description: l,
                          control: De(h, -Math.abs(y.discount_amount), y.currency),
                        }),
                    y.amount_due.tax_amount > 0
                      ? (0, $.jsxs)($.Fragment, {
                          children: [
                            (0, $.jsx)(O, {
                              label: (0, $.jsx)(a, {
                                id: `settings.consumerBilling.cancellation.promotionSubtotal`,
                                defaultMessage: `Subtotal`,
                                description: `Actual subtotal due before tax in the retention invoice preview`,
                              }),
                              control: De(h, y.amount_due.amount_excluding_tax, y.currency),
                            }),
                            (0, $.jsx)(O, {
                              label: (0, $.jsx)(a, {
                                id: `settings.consumerBilling.cancellation.promotionTax`,
                                defaultMessage: `Tax {taxPercent}%`,
                                description: `Tax rate on the retention offer; taxPercent is the rounded rate calculated from actual tax and subtotal`,
                                values: {
                                  taxPercent:
                                    y.amount_due.amount_excluding_tax > 0
                                      ? Math.round(
                                          (y.amount_due.tax_amount / y.amount_due.amount_excluding_tax) * 100,
                                        )
                                      : 0,
                                },
                              }),
                              control: De(h, y.amount_due.tax_amount, y.currency),
                            }),
                          ],
                        })
                      : null,
                    (0, $.jsx)(O, {
                      label: (0, $.jsx)(a, {
                        id: `settings.consumerBilling.cancellation.promotionDueToday`,
                        defaultMessage: `Total due today`,
                        description: `Actual amount due now, including any credits and tax, in a retention invoice preview`,
                      }),
                      control: De(h, y.amount_due.amount, y.currency),
                    }),
                    V == null
                      ? null
                      : (0, $.jsx)(O, {
                          label: (0, $.jsx)(a, {
                            id: `settings.consumerBilling.cancellation.promotionPaymentMethod`,
                            defaultMessage: `Payment method`,
                            description: `Saved payment method that will be used for the retention offer`,
                          }),
                          control:
                            e && r
                              ? (0, $.jsx)(a, {
                                  id: `settings.consumerBilling.cancellation.promotionCard`,
                                  defaultMessage: `{brand} ending in {last4}`,
                                  description: `Saved card used for a retention offer; brand is the actual card brand and last4 are only the final four digits`,
                                  values: { brand: e.toUpperCase(), last4: r },
                                })
                              : e || r,
                        }),
                  ],
                }),
              }),
            })
          : null),
      (n[18] = L),
      (n[19] = h),
      (n[20] = j),
      (n[21] = k),
      (n[22] = B),
      (n[23] = d),
      (n[24] = z),
      (n[25] = V),
      (n[26] = N),
      (n[27] = F),
      (n[28] = y),
      (n[29] = C),
      (n[30] = x),
      (n[31] = E),
      (n[32] = ne),
      (n[33] = te),
      (n[34] = c.campaign_id),
      (n[35] = c.discount),
      (n[36] = c.summary),
      (n[37] = R),
      (n[38] = w),
      (n[39] = re),
      (n[40] = f),
      (n[41] = H),
      (n[42] = oe),
      (n[43] = se),
      (n[44] = ce),
      (n[45] = le),
      (n[46] = ue),
      (n[47] = U),
      (n[48] = W),
      (n[49] = G),
      (n[50] = de));
  } else
    ((H = n[41]),
      (oe = n[42]),
      (se = n[43]),
      (ce = n[44]),
      (le = n[45]),
      (ue = n[46]),
      (U = n[47]),
      (W = n[48]),
      (G = n[49]),
      (de = n[50]));
  let K;
  n[85] === z
    ? (K = n[86])
    : ((K = z == null ? null : (0, $.jsx)(T, { children: (0, $.jsx)(lt, { result: z }) })),
      (n[85] = z),
      (n[86] = K));
  let pe = j || (z != null && z !== `delinquent_subscription`),
    he;
  n[87] !== l || n[88] !== z || n[89] !== f
    ? ((he = () => {
        (X(f, `chatgpt_claim_subscription_cancellation_promotion_modal_back_button_clicked`), l(z));
      }),
      (n[87] = l),
      (n[88] = z),
      (n[89] = f),
      (n[90] = he))
    : (he = n[90]);
  let ge;
  n[91] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = (0, $.jsx)(a, {
        id: `cancelPromoClaimModal.cancel`,
        defaultMessage: `Cancel`,
        description: `Returns from the retention offer invoice preview without claiming the offer`,
      })),
      (n[91] = ge))
    : (ge = n[91]);
  let _e;
  n[92] !== pe || n[93] !== he
    ? ((_e = (0, $.jsx)(t, { color: `secondary`, disabled: pe, type: `button`, onClick: he, children: ge })),
      (n[92] = pe),
      (n[93] = he),
      (n[94] = _e))
    : (_e = n[94]);
  let ve = !oe,
    ye;
  n[95] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, $.jsx)(a, {
        id: `cancelPromoClaimModal.payNow`,
        defaultMessage: `Pay now`,
        description: `Applies the immediately invoiced retention offer after review of the actual payment amount`,
      })),
      (n[95] = ye))
    : (ye = n[95]);
  let q;
  n[96] !== j || n[97] !== ve
    ? ((q = (0, $.jsx)(t, { disabled: ve, loading: j, type: `submit`, children: ye })),
      (n[96] = j),
      (n[97] = ve),
      (n[98] = q))
    : (q = n[98]);
  let be;
  n[99] !== _e || n[100] !== q
    ? ((be = (0, $.jsx)(T, { children: (0, $.jsxs)(ae, { children: [_e, q] }) })),
      (n[99] = _e),
      (n[100] = q),
      (n[101] = be))
    : (be = n[101]);
  let xe;
  return (
    n[102] !== H ||
    n[103] !== se ||
    n[104] !== ce ||
    n[105] !== le ||
    n[106] !== ue ||
    n[107] !== K ||
    n[108] !== be ||
    n[109] !== U ||
    n[110] !== W ||
    n[111] !== G ||
    n[112] !== de
      ? ((xe = (0, $.jsxs)(H, {
          title: U,
          busy: W,
          onClose: G,
          onShown: de,
          onSubmit: se,
          children: [ce, le, ue, K, be],
        })),
        (n[102] = H),
        (n[103] = se),
        (n[104] = ce),
        (n[105] = le),
        (n[106] = ue),
        (n[107] = K),
        (n[108] = be),
        (n[109] = U),
        (n[110] = W),
        (n[111] = G),
        (n[112] = de),
        (n[113] = xe))
      : (xe = n[113]),
    xe
  );
}
var mn, hn, $;
function gn() {
  return (gn = e(() => {
    ((mn = N()),
      o(),
      h(),
      d(),
      (hn = L()),
      w(),
      D(),
      v(),
      ee(),
      se(),
      P(),
      C(),
      c(),
      W(),
      Ee(),
      Oe(),
      Ae(),
      Kt(),
      ct(),
      ft(),
      It(),
      ($ = I()));
  }))();
}
function _n(e) {
  let t = (0, yn.c)(22),
    { account: n, accountId: r, onClose: i } = e,
    o = he(),
    s;
  t[0] !== n || t[1] !== r || t[2] !== o.accountId || t[3] !== o.authMethod
    ? ((s =
        o.authMethod === `chatgpt` &&
        o.accountId === r &&
        n.account.account_id === r &&
        n.account.structure === `personal` &&
        n.entitlement.has_active_subscription === !0 &&
        (!n.entitlement.is_active_subscription_gratis || ze(n)) &&
        Ie(n) == null),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o.accountId),
      (t[3] = o.authMethod),
      (t[4] = s))
    : (s = t[4]);
  let c = s,
    l;
  t[5] !== n || t[6] !== c
    ? ((l =
        c &&
        !n.entitlement.is_active_subscription_gratis &&
        n.entitlement.is_eligible_for_cp === !0 &&
        n.entitlement.discount?.promo_campaign_id !== `students-2026-four-month-free` &&
        !ht(n)),
      (t[5] = n),
      (t[6] = c),
      (t[7] = l))
    : (l = t[7]);
  let u = l,
    d;
  t[8] === r ? (d = t[9]) : ((d = Ot(r)), (t[8] = r), (t[9] = d));
  let f;
  t[10] !== u || t[11] !== d
    ? ((f = { ...d, enabled: u, staleTime: 0 }), (t[10] = u), (t[11] = d), (t[12] = f))
    : (f = t[12]);
  let { data: p, isPending: h } = m(f);
  if (!c || (u && h)) {
    let e;
    t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, xn.jsx)(a, {
          id: `cancelSubscriptionModal.title`,
          defaultMessage: `Subscription Cancellation`,
          description: `Title for the consumer subscription cancellation confirmation`,
        })),
        (t[13] = e))
      : (e = t[13]);
    let n;
    t[14] === c
      ? (n = t[15])
      : ((n = (0, xn.jsx)(T, {
          children: c
            ? (0, xn.jsx)(it, {})
            : (0, xn.jsx)(`p`, {
                role: `alert`,
                children: (0, xn.jsx)(a, {
                  id: `settings.consumerBilling.cancellation.unavailable`,
                  defaultMessage: `This subscription can no longer be canceled here. Review your subscription in Billing.`,
                  description: `Shown when the account or subscription no longer matches the web-managed consumer cancellation entry`,
                }),
              }),
        })),
        (t[14] = c),
        (t[15] = n));
    let r;
    return (
      t[16] !== i || t[17] !== n
        ? ((r = (0, xn.jsx)(rt, { title: e, onClose: i, children: n })),
          (t[16] = i),
          (t[17] = n),
          (t[18] = r))
        : (r = t[18]),
      r
    );
  }
  let g = u ? (p ?? null) : null,
    _;
  return (
    t[19] !== e || t[20] !== g
      ? ((_ = (0, xn.jsx)(vn, { ...e, promotion: g })), (t[19] = e), (t[20] = g), (t[21] = _))
      : (_ = t[21]),
    _
  );
}
function vn(e) {
  let t = (0, yn.c)(115),
    { accountId: n, account: i, promotion: o, onClose: c } = e,
    l = s(r),
    d = p(),
    f = he(),
    { client: m } = fe(),
    h;
  t[0] !== i || t[1] !== m || t[2] !== o
    ? ((h = () => ({ step: pt(i, o, m), previous: [] })), (t[0] = i), (t[1] = m), (t[2] = o), (t[3] = h))
    : (h = t[3]);
  let [g, _] = (0, bn.useState)(h),
    v = (0, bn.useRef)(!1),
    y = (0, bn.useRef)(void 0),
    S = (0, bn.useRef)(void 0),
    C,
    w;
  (t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => () => {
        (y.current?.close(), S.current?.());
      }),
      (w = []),
      (t[4] = C),
      (t[5] = w))
    : ((C = t[4]), (w = t[5])),
    (0, bn.useEffect)(C, w));
  let { step: T, previous: ee } = g,
    E;
  t[6] !== n || t[7] !== l
    ? ((E = {
        mutationFn: async (e) => {
          let t = await Mt(n, e);
          return (await ke(l, n), t);
        },
        retry: !1,
      }),
      (t[6] = n),
      (t[7] = l),
      (t[8] = E))
    : (E = t[8]);
  let { mutate: te, data: ne, isPending: re, isError: ie } = u(E),
    ae;
  t[9] !== i || t[10] !== n || t[11] !== l
    ? ((ae = {
        mutationFn: async (e) => {
          let { returnToGo: t, storage: r, logAttempt: a } = e;
          try {
            let e = await Pt({
              scope: l,
              accountId: n,
              account: i,
              returnToGo: t,
              storage: r,
              onRequestError: (e) => a(`request`, `failed`, e),
            });
            return (
              e === `canceled` || e === `deactivated`
                ? a(`cancellation`, `succeeded`)
                : e === `state_changed`
                  ? a(`cancellation`, `state_unconfirmed`)
                  : a(`cancellation`, e),
              e
            );
          } catch (e) {
            let t = e;
            throw (a(`cancellation`, `unexpected_error`, t), t);
          }
        },
        retry: !1,
      }),
      (t[9] = i),
      (t[10] = n),
      (t[11] = l),
      (t[12] = ae))
    : (ae = t[12]);
  let { mutate: D, data: O, isPending: k, reset: A } = u(ae),
    j = ie ? `unknown` : ne,
    M = re || k,
    N = j != null,
    P = N && j !== `delinquent_subscription`,
    F;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (e, t) => {
        let n = t === void 0 || t;
        _((t) => {
          let { step: r, previous: i } = t;
          return { step: e, previous: n ? [...i, r] : [] };
        });
      }),
      (t[13] = F))
    : (F = t[13]);
  let I = F,
    L,
    R;
  t[14] !== M || t[15] !== P || t[16] !== c || t[17] !== ee || t[18] !== l || t[19] !== T.page
    ? ((L = () => {
        if (M || P) return;
        let e = ee.at(-1);
        if (e == null) {
          R();
          return;
        }
        _({ step: e, previous: ee.slice(0, -1) });
      }),
      (R = () => {
        if (!M) {
          bb111: switch (T.page) {
            case `confirm`:
              X(l, `chatgpt_cancel_subscription_modal_dismissed`);
              break bb111;
            case `plus_offer`:
              X(l, `chatgpt_cancel_subscription_plus_offer_modal_dismissed`);
              break bb111;
            case `go_offer`:
            case `go_trial`:
              X(l, `chatgpt_cancel_subscription_go_upsell_modal_dismissed`);
              break bb111;
          }
          c();
        }
      }),
      (t[14] = M),
      (t[15] = P),
      (t[16] = c),
      (t[17] = ee),
      (t[18] = l),
      (t[19] = T.page),
      (t[20] = L),
      (t[21] = R))
    : ((L = t[20]), (R = t[21]));
  let z;
  t[22] !== o || t[23] !== l || t[24] !== T.page || t[25] !== T.skipPromotion
    ? ((z = () => {
        bb126: switch (T.page) {
          case `confirm`:
            (X(l, `chatgpt_cancel_subscription_modal_shown`),
              !T.skipPromotion &&
                o != null &&
                X(l, `chatgpt_cancel_subscription_modal_with_cancellation_promo_shown`, {
                  promo_id: o.campaign_id,
                }));
            break bb126;
          case `plus_offer`:
            X(l, `chatgpt_cancel_subscription_plus_offer_modal_shown`);
            break bb126;
          case `go_offer`:
          case `go_trial`:
            X(l, `chatgpt_cancel_subscription_go_upsell_modal_shown`);
            break bb126;
        }
      }),
      (t[22] = o),
      (t[23] = l),
      (t[24] = T.page),
      (t[25] = T.skipPromotion),
      (t[26] = z))
    : (z = t[26]);
  let B = z,
    V;
  t[27] !== M ||
  t[28] !== te ||
  t[29] !== N ||
  t[30] !== d ||
  t[31] !== c ||
  t[32] !== o ||
  t[33] !== l ||
  t[34] !== T
    ? ((V = () => {
        if (!(M || N || v.current)) {
          if (o == null) {
            I({ page: `confirm`, skipPromotion: !0, flow: `flow` in T ? T.flow : void 0 }, !1);
            return;
          }
          if (o.is_immediately_invoiced) {
            (T.page === `confirm` &&
              X(l, `chatgpt_cancel_subscription_modal_claim_offer_offer_button_clicked`),
              T.page === `plus_offer` && T.flow == null
                ? _({
                    step: { page: `claim`, promotion: o },
                    previous: [{ page: `confirm`, skipPromotion: !1 }],
                  })
                : I({ page: `claim`, promotion: o }));
            return;
          }
          ((v.current = !0),
            te(o, {
              onSuccess: (e) => {
                if (e !== `success`) {
                  e !== `pending` &&
                    X(l, `chatgpt_claim_subscription_cancellation_promotion_error`, {
                      promo_id: o.campaign_id,
                    });
                  return;
                }
                X(l, `chatgpt_claim_subscription_cancellation_promotion_success`, {
                  promo_id: o.campaign_id,
                });
                let t = `percentage` in o.discount && o.discount.percentage === 100;
                (l
                  .get(b)
                  .success(
                    t
                      ? d.formatMessage({
                          id: `cancelSubscriptionModal.successfullyUpdatedSubscriptionWithFreePromo`,
                          defaultMessage: `Your subscription has been updated and will auto-renew for free during your next billing cycle`,
                          description: `Success notification after a scheduled free retention promotion is applied`,
                        })
                      : d.formatMessage({
                          id: `cancelSubscriptionModal.successfullyUpdatedSubscriptionWithScheduledDiscountPromo`,
                          defaultMessage: `Your subscription has been updated and will auto-renew at the discounted rate during your next billing cycle`,
                          description: `Success notification after a scheduled discounted retention promotion is applied`,
                        }),
                  ),
                  c());
              },
              onSettled: () => {
                v.current = !1;
              },
            }));
        }
      }),
      (t[27] = M),
      (t[28] = te),
      (t[29] = N),
      (t[30] = d),
      (t[31] = c),
      (t[32] = o),
      (t[33] = l),
      (t[34] = T),
      (t[35] = V))
    : (V = t[35]);
  let H = V,
    oe;
  t[36] !== i ||
  t[37] !== n ||
  t[38] !== f ||
  t[39] !== M ||
  t[40] !== D ||
  t[41] !== P ||
  t[42] !== m ||
  t[43] !== d ||
  t[44] !== c ||
  t[45] !== l
    ? ((oe = (e) => {
        if (M || P || v.current) return;
        let t = i.last_active_subscription.subscription_id ?? i.entitlement.subscription_id;
        if (t == null) return;
        e || X(l, `chatgpt_cancel_subscription_modal_confirmation_button_clicked`);
        let r;
        if (e)
          try {
            r = window.sessionStorage;
          } catch {}
        let a = performance.now(),
          o = !e && m.checkGate(`3376055906`),
          s = o && m.checkGate(`1348177552`),
          u,
          p = (e, t, n) => {
            try {
              ((u ??= crypto.randomUUID()),
                le(l, q, {
                  attemptId: u,
                  stage: e,
                  outcome: t,
                  surveyEnabled: o,
                  preopenEnabled: s,
                  elapsedMs: Math.round(performance.now() - a),
                  httpStatus:
                    n instanceof x && n.errorKind !== `network` ? (n.responseStatus ?? void 0) : void 0,
                }));
            } catch {}
          };
        p(`cancellation`, `started`);
        let h = o && !0;
        ((y.current = void 0),
          (S.current = o ? () => p(`survey`, `dialog_abandoned`) : void 0),
          (v.current = !0),
          D(
            { returnToGo: e, storage: r, logAttempt: p },
            {
              onSuccess: (r) => {
                if (
                  ((S.current = void 0),
                  (r === `canceled` || r === `deactivated`) && (o || p(`survey`, `not_eligible`)),
                  r === `reload` || (e && r === `failed`))
                ) {
                  window.location.reload();
                  return;
                }
                if (r === `state_changed`) {
                  (c(), ke(l, n));
                  return;
                }
                if (r === `returned_to_go`) {
                  (l
                    .get(b)
                    .info(
                      d.formatMessage({
                        id: `cancelSubscriptionGoUpsellModal.returnToGoSuccess`,
                        defaultMessage: `You returned to Go`,
                        description: `Notification after an authoritative account read confirms the Go-origin Plus trial ended and Go was restored`,
                      }),
                    ),
                    c());
                  return;
                }
                if (r !== `canceled` && r !== `deactivated`) {
                  r === `failed` && X(l, `chatgpt_cancel_subscription_modal_cancel_failed`);
                  return;
                }
                if (
                  (X(l, `chatgpt_cancel_subscription_modal_cancel_success`),
                  l
                    .get(b)
                    .info(
                      r === `deactivated`
                        ? d.formatMessage({
                            id: `cancelSubscriptionModal.cancelPlusTrialSuccess`,
                            defaultMessage: `Your Plus trial has ended. You are now on Free.`,
                            description: `Notification after an authoritative account read confirms immediate deactivation of a Go-origin Plus trial`,
                          })
                        : d.formatMessage({
                            id: `settings.consumerBilling.cancellation.succeeded`,
                            defaultMessage: `Your subscription has been canceled`,
                            description: `Notification after the backend confirms cancellation of a consumer subscription`,
                          }),
                    ),
                  ke(l, n),
                  h)
                ) {
                  let e = new URL(`https://openai.qualtrics.com/jfe/form/SV_eW3mdeRdMrpnPLw`);
                  (e.searchParams.set(`subscription_id`, t),
                    i.account.plan_type != null && e.searchParams.set(`plan_type`, i.account.plan_type),
                    f.userId != null && e.searchParams.set(`oai_user`, f.userId));
                  let n = Math.round(performance.now() - a),
                    r;
                  ((r = U({
                    href: e.toString(),
                    disposition: `new-tab`,
                    initiator: `open_in_browser_bridge`,
                    openTarget: `external-browser`,
                  })),
                    p(`survey`, r ? `native_dispatch_accepted` : `dispatch_failed`),
                    r &&
                      X(l, `chatgpt_subscription_cancellation_survey_shown`, {
                        cancel_to_window_open_ms: n,
                      }));
                }
                c();
              },
              onError: () => void 0,
              onSettled: () => {
                ((y.current = void 0), (S.current = void 0), (v.current = !1));
              },
            },
          ));
      }),
      (t[36] = i),
      (t[37] = n),
      (t[38] = f),
      (t[39] = M),
      (t[40] = D),
      (t[41] = P),
      (t[42] = m),
      (t[43] = d),
      (t[44] = c),
      (t[45] = l),
      (t[46] = oe))
    : (oe = t[46]);
  let se = oe,
    ce;
  t[47] === O
    ? (ce = t[48])
    : ((ce =
        O != null && ![`canceled`, `deactivated`, `returned_to_go`].includes(O)
          ? (0, xn.jsx)(`p`, {
              role: `alert`,
              children: (0, xn.jsx)(a, {
                id: `settings.consumerBilling.cancellation.requestFailed`,
                defaultMessage: `{kind, select, return_pending {Your earlier request may still be processing. Reload Billing to check your subscription before trying again.} storage_unavailable {We couldn't safely record your request in this browser. Enable browser storage before returning to Go.} return_ready {Your subscription is unchanged. You can try returning to Go again.} other {We couldn't cancel your subscription. Please try again.}}`,
                description: `Failure or reconciliation status in cancellation. A pending Go-trial request must not be resent; unavailable browser storage prevents sending it.`,
                values: { kind: O },
              }),
            })
          : null),
      (t[47] = O),
      (t[48] = ce));
  let ue = ce,
    W =
      T.page === `confirm` && T.flow?.offer != null && T.flow.variant === `refresh_with_personalized_loss`
        ? `by_the_numbers`
        : `standard`,
    G =
      (T.page === `plus_offer` || T.page === `go_offer`) && T.flow != null && T.flow.variant !== `control`
        ? `premium_refresh`
        : `legacy`;
  switch (T.page) {
    case `retention_loss`: {
      let e;
      t[49] === T.flow
        ? (e = t[50])
        : ((e = () => {
            T.flow.offer != null && I({ page: T.flow.offer, flow: T.flow }, !1);
          }),
          (t[49] = T.flow),
          (t[50] = e));
      let n;
      return (
        t[51] !== i || t[52] !== c || t[53] !== B || t[54] !== e
          ? ((n = (0, xn.jsx)(
              qt,
              { account: i, onShown: B, onClose: c, onBack: c, onContinue: e },
              `retention_loss`,
            )),
            (t[51] = i),
            (t[52] = c),
            (t[53] = B),
            (t[54] = e),
            (t[55] = n))
          : (n = t[55]),
        n
      );
    }
    case `confirm`: {
      let e = T.skipPromotion ? null : o,
        r =
          P || (i.last_active_subscription.subscription_id == null && i.entitlement.subscription_id == null),
        a = T.skipPromotion ? void 0 : j,
        s;
      t[56] === se ? (s = t[57]) : ((s = () => se(!1)), (t[56] = se), (t[57] = s));
      let c;
      return (
        t[58] !== H ||
        t[59] !== i ||
        t[60] !== n ||
        t[61] !== L ||
        t[62] !== M ||
        t[63] !== ue ||
        t[64] !== W ||
        t[65] !== R ||
        t[66] !== B ||
        t[67] !== e ||
        t[68] !== r ||
        t[69] !== a ||
        t[70] !== s
          ? ((c = (0, xn.jsx)(
              Lt,
              {
                account: i,
                accountId: n,
                promotion: e,
                confirmationPresentation: W,
                busy: M,
                disabled: r,
                claimError: a,
                cancellationError: ue,
                onCancel: s,
                onClaim: H,
                onBack: L,
                onClose: R,
                onShown: B,
              },
              `confirm`,
            )),
            (t[58] = H),
            (t[59] = i),
            (t[60] = n),
            (t[61] = L),
            (t[62] = M),
            (t[63] = ue),
            (t[64] = W),
            (t[65] = R),
            (t[66] = B),
            (t[67] = e),
            (t[68] = r),
            (t[69] = a),
            (t[70] = s),
            (t[71] = c))
          : (c = t[71]),
        c
      );
    }
    case `claim`: {
      let e;
      t[72] === L
        ? (e = t[73])
        : ((e = (e) => {
            e === `delinquent_subscription` ? I({ page: `confirm`, skipPromotion: !0 }, !1) : L();
          }),
          (t[72] = L),
          (t[73] = e));
      let r;
      return (
        t[74] !== i || t[75] !== n || t[76] !== c || t[77] !== T.promotion || t[78] !== e
          ? ((r = (0, xn.jsx)(
              pn,
              { account: i, accountId: n, promotion: T.promotion, onBack: e, onClose: c },
              T.promotion.campaign_id,
            )),
            (t[74] = i),
            (t[75] = n),
            (t[76] = c),
            (t[77] = T.promotion),
            (t[78] = e),
            (t[79] = r))
          : (r = t[79]),
        r
      );
    }
    case `go_change`: {
      let e;
      return (
        t[80] !== i || t[81] !== n || t[82] !== L || t[83] !== c
          ? ((e = (0, xn.jsx)(Ve, { account: i, accountId: n, targetPlan: K.GO, onBack: L, onClose: c })),
            (t[80] = i),
            (t[81] = n),
            (t[82] = L),
            (t[83] = c),
            (t[84] = e))
          : (e = t[84]),
        e
      );
    }
    case `pro_change`: {
      let e;
      return (
        t[85] !== i || t[86] !== n || t[87] !== L || t[88] !== c
          ? ((e = (0, xn.jsx)(Ve, {
              account: i,
              accountId: n,
              targetPlan: K.PROLITE,
              onBack: L,
              onClose: c,
            })),
            (t[85] = i),
            (t[86] = n),
            (t[87] = L),
            (t[88] = c),
            (t[89] = e))
          : (e = t[89]),
        e
      );
    }
    case `go_offer`:
    case `go_trial`:
    case `plus_offer`:
    case `pro_offer`: {
      let e;
      t[90] !== i || t[91] !== m || t[92] !== o || t[93] !== T.flow || t[94] !== T.page
        ? ((e = () => {
            if (T.page === `pro_offer`) I(mt(i, o, m), !1);
            else {
              let e = T.page === `plus_offer` || T.page === `go_offer` ? T.flow : void 0;
              I(
                { page: `confirm`, skipPromotion: !0, flow: e },
                T.page === `go_trial` ||
                  e?.variant === `refresh_with_loss` ||
                  e?.variant === `refresh_with_personalized_loss`,
              );
            }
          }),
          (t[90] = i),
          (t[91] = m),
          (t[92] = o),
          (t[93] = T.flow),
          (t[94] = T.page),
          (t[95] = e))
        : (e = t[95]);
      let r;
      t[96] !== H || t[97] !== O || t[98] !== A || t[99] !== T.page || t[100] !== se
        ? ((r = () => {
            bb499: switch (T.page) {
              case `plus_offer`:
                H();
                break bb499;
              case `go_trial`:
                (O === `return_ready` && A(), se(!0));
                break bb499;
              case `pro_offer`:
                I({ page: `pro_change` });
                break bb499;
              case `go_offer`:
                I({ page: `go_change` });
            }
          }),
          (t[96] = H),
          (t[97] = O),
          (t[98] = A),
          (t[99] = T.page),
          (t[100] = se),
          (t[101] = r))
        : (r = t[101]);
      let a;
      return (
        t[102] !== i ||
        t[103] !== n ||
        t[104] !== M ||
        t[105] !== ue ||
        t[106] !== j ||
        t[107] !== N ||
        t[108] !== R ||
        t[109] !== G ||
        t[110] !== B ||
        t[111] !== T.page ||
        t[112] !== e ||
        t[113] !== r
          ? ((a = (0, xn.jsx)(
              sn,
              {
                account: i,
                accountId: n,
                kind: T.page,
                designVariant: G,
                busy: M,
                disabled: N,
                error: j,
                cancellationError: ue,
                onShown: B,
                onClose: R,
                onDecline: e,
                onAccept: r,
              },
              T.page,
            )),
            (t[102] = i),
            (t[103] = n),
            (t[104] = M),
            (t[105] = ue),
            (t[106] = j),
            (t[107] = N),
            (t[108] = R),
            (t[109] = G),
            (t[110] = B),
            (t[111] = T.page),
            (t[112] = e),
            (t[113] = r),
            (t[114] = a))
          : (a = t[114]),
        a
      );
    }
  }
}
var yn, bn, xn;
function Sn() {
  return (Sn = e(() => {
    ((yn = N()),
      xe(),
      o(),
      h(),
      d(),
      (bn = L()),
      w(),
      de(),
      v(),
      H(),
      ee(),
      ue(),
      P(),
      W(),
      R(),
      M(),
      Le(),
      Be(),
      Re(),
      Oe(),
      Gt(),
      Kt(),
      ct(),
      Xt(),
      un(),
      fn(),
      gn(),
      It(),
      Dt(),
      (xn = I()));
  }))();
}
Sn();
export { _n as CancellationDialog };
//# sourceMappingURL=dialog-b41e25665629.js.map
