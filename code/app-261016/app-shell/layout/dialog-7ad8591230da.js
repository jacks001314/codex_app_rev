import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  BA as i,
  BO as a,
  FBt as o,
  HA as s,
  HFt as c,
  HO as l,
  IO as u,
  JO as d,
  KO as f,
  LNt as p,
  LO as m,
  Mst as h,
  Ost as g,
  PBt as _,
  PNt as v,
  Pit as y,
  Qst as b,
  RO as x,
  SLt as S,
  TY as C,
  VA as ee,
  Vrt as te,
  WO as ne,
  XOt as w,
  Y3 as re,
  YOt as T,
  Z3 as E,
  ZSt as D,
  e6 as O,
  ew as k,
  jit as A,
  jst as j,
  kRt as M,
  okt as ie,
  qO as N,
  qrt as ae,
  sw as P,
  tkt as F,
  uw as oe,
  vst as I,
  xY as L,
  yst as se,
  zO as R,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Ajt as z,
  CMr as B,
  CRn as ce,
  GLn as le,
  HFt as ue,
  Njt as de,
  Ojt as V,
  TBt as fe,
  Tjr as pe,
  VFt as H,
  Xzr as U,
  bRn as me,
  iRr as W,
  imr as G,
  qLn as he,
  rmr as ge,
  sRr as _e,
  tLr as ve,
  wBt as ye,
  xMr as K,
  xjr as q,
  yMr as be,
  zjt as xe,
} from "./app-initial-ad16eaadf81f.js";
import { a as Se, i as Ce, m as we, r as Te } from "./chatgpt_subscription-521a9ceb1ea2.js";
import { t as Ee } from "./assert-never-a6e685100dc6.js";
import { i as De, n as Oe } from "./queries-ea9f18d3fc31.js";
import { n as ke, t as Ae } from "./format-amount-ee20e9ffab40.js";
import { n as je, r as Me } from "./queries-95931bb8c995.js";
import { n as Ne, t as Pe } from "./query-error-2df1f6b7fd60.js";
import { t as Fe } from "./pricing-config-8656df60ca94.js";
import { t as Ie } from "./subscription-pricing-e06aacd9b52d.js";
import { n as Le } from "./queries-fc828e9ef3ca.js";
import { t as Re } from "./billing-pricing-be9f39772a6a.js";
import { n as ze, r as Be } from "./billing-state-a90fb678096b.js";
import { r as Ve, t as He } from "./state-a5d26f473b64.js";
import { n as Ue, t as We } from "./downgrade-dialog-dd6743b4c43f.js";
function Ge(e) {
  if (
    e?.status !== `ready` ||
    !Array.isArray(e.available_windows) ||
    !e.available_windows.includes(7) ||
    !qe(e.total_feature_uses_7d) ||
    !Array.isArray(e.features)
  )
    return [];
  let t = Xe.map((t, n) => ({ kind: `feature`, ...t, count: Je(e.features, t), canonicalIndex: n })).sort(
    (e, t) =>
      Number(e.freeAccess === `limited`) - Number(t.freeAccess === `limited`) ||
      t.count - e.count ||
      e.canonicalIndex - t.canonicalIndex,
  );
  if (!t.some((e) => qe(e.count))) return [];
  let n = e.standard_free_limit_exceeded_action_count_7d;
  return [
    ...(Ke(n) && n > 1
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
    .slice(0, Ye)
    .map((e) =>
      e.kind === `standard_free_limit_exceeded_actions` ? e : { kind: e.kind, key: e.key, count: e.count },
    );
}
function Ke(e) {
  return typeof e == `number` && Number.isSafeInteger(e) && e >= 0;
}
function qe(e) {
  return Ke(e) && e > 0;
}
function Je(e, t) {
  return (
    e.filter((e) => e.feature === t.key && e.free_access === t.freeAccess).find((e) => qe(e.uses_7d))
      ?.uses_7d ?? 0
  );
}
var Ye, Xe;
function Ze() {
  return (Ze = e(() => {
    ((Ye = 4),
      (Xe = [
        { key: `advanced_reasoning`, freeAccess: `limited` },
        { key: `agent`, freeAccess: `unavailable` },
        { key: `image_generation`, freeAccess: `limited` },
        { key: `file_uploads`, freeAccess: `limited` },
        { key: `deep_research`, freeAccess: `limited` },
        { key: `data_analysis`, freeAccess: `limited` },
      ]));
  }))();
}
var J, Qe, $e;
function et() {
  return (et = e(() => {
    (w(),
      (J = T({
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
      (Qe = {
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
      ($e = T({
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
function tt(e) {
  let n = (0, rt.c)(6),
    { items: r } = e,
    i;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, it.jsx)(R, {
        children: (0, it.jsx)(`p`, {
          className: `text-secondary`,
          children: (0, it.jsx)(F, { ...$e.subtitle }),
        }),
      })),
      (n[0] = i))
    : (i = n[0]);
  let o;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, it.jsx)(P, {
        label: (0, it.jsx)(F, { ...$e.sectionTitle }),
        control: (0, it.jsx)(F, { ...$e.timePeriod }),
      })),
      (n[1] = o))
    : (o = n[1]);
  let s;
  n[2] === r ? (s = n[3]) : ((s = r.map(nt)), (n[2] = r), (n[3] = s));
  let c;
  return (
    n[4] === s
      ? (c = n[5])
      : ((c = (0, it.jsxs)(it.Fragment, {
          children: [
            i,
            (0, it.jsx)(R, { children: (0, it.jsxs)(a, { children: [o, (0, it.jsx)(t, { children: s })] }) }),
          ],
        })),
        (n[4] = s),
        (n[5] = c)),
    c
  );
}
function nt(e) {
  let t = $e.freeLimitCount;
  return (
    e.kind === `feature` && (t = e.count > 0 ? Qe[e.key].counted : Qe[e.key].generic),
    (0, it.jsx)(P, { label: (0, it.jsx)(F, { ...t, values: { count: e.count } }), control: null }, e.key)
  );
}
var rt, it;
function at() {
  return (at = e(() => {
    ((rt = _()), w(), l(), oe(), k(), et(), (it = p()));
  }))();
}
function ot(e) {
  let t = (0, ct.c)(19),
    { title: n, children: r, busy: i, onClose: a, onShown: o, onSubmit: s } = e,
    c = i !== void 0 && i,
    l = (0, lt.useRef)(!1),
    d = !c,
    f;
  t[0] === o
    ? (f = t[1])
    : ((f = {
        onOpenAutoFocus: () => {
          l.current || ((l.current = !0), o?.());
        },
      }),
      (t[0] = o),
      (t[1] = f));
  let p;
  t[2] !== c || t[3] !== a
    ? ((p = (e) => {
        !e && !c && a();
      }),
      (t[2] = c),
      (t[3] = a),
      (t[4] = p))
    : (p = t[4]);
  let m;
  t[5] !== c || t[6] !== s
    ? ((m = (e) => {
        (e.preventDefault(), c || s?.());
      }),
      (t[5] = c),
      (t[6] = s),
      (t[7] = m))
    : (m = t[7]);
  let h;
  t[8] === n
    ? (h = t[9])
    : ((h = (0, ut.jsx)(R, {
        children: (0, ut.jsx)(x, {
          titleClassName: `break-words pe-8`,
          title: (0, ut.jsx)(N, { children: n }),
        }),
      })),
      (t[8] = n),
      (t[9] = h));
  let g;
  t[10] !== r || t[11] !== m || t[12] !== h
    ? ((g = (0, ut.jsxs)(u, { as: `form`, className: `select-none`, onSubmit: m, children: [h, r] })),
      (t[10] = r),
      (t[11] = m),
      (t[12] = h),
      (t[13] = g))
    : (g = t[13]);
  let _;
  return (
    t[14] !== d || t[15] !== f || t[16] !== p || t[17] !== g
      ? ((_ = (0, ut.jsx)(ne, {
          open: !0,
          showDialogClose: d,
          contentProps: f,
          onOpenChange: p,
          children: g,
        })),
        (t[14] = d),
        (t[15] = f),
        (t[16] = p),
        (t[17] = g),
        (t[18] = _))
      : (_ = t[18]),
    _
  );
}
function st() {
  let e = (0, ct.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, ut.jsx)(`p`, {
          role: `status`,
          children: (0, ut.jsx)(F, {
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
var ct, lt, ut;
function dt() {
  return (dt = e(() => {
    ((ct = _()), (lt = o()), w(), d(), l(), (ut = p()));
  }))();
}
function ft(e) {
  let t = (0, pt.c)(6),
    { result: n } = e;
  if (n === `success`) return null;
  if (n === `pending`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, mt.jsx)(`p`, {
            role: `status`,
            children: (0, mt.jsx)(F, {
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
        ? ((e = (0, mt.jsx)(`p`, {
            role: `alert`,
            children: (0, mt.jsx)(F, {
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
        : ((e = (0, mt.jsx)(`p`, {
            role: `alert`,
            children: (0, mt.jsx)(F, {
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
  return (t[4] === n ? (r = t[5]) : ((r = Ee(n)), (t[4] = n), (t[5] = r)), r);
}
var pt, mt;
function ht() {
  return (ht = e(() => {
    ((pt = _()), w(), (mt = p()));
  }))();
}
function gt(e, t, n) {
  let r = xt(e);
  if (
    e.entitlement.is_active_subscription_gratis ||
    e.entitlement.discount?.promo_campaign_id === `students-2026-four-month-free`
  )
    return { page: `confirm`, skipPromotion: !0 };
  if (vt(e)) return { page: `go_trial` };
  if (r === `pro` && n.checkGate(`2238071649`)) return { page: `pro_offer` };
  if (r === `plus` && n.checkGate(`3600660324`)) {
    let r = Dt.safeParse(n.getLayer(`3550013596`).get(`variant`, `disabled`));
    if (r.success) {
      let i = _t(e, t, n),
        a = { variant: r.data, offer: i.page === `plus_offer` || i.page === `go_offer` ? i.page : null };
      return a.offer == null
        ? { page: `confirm`, skipPromotion: !1, flow: a }
        : a.variant === `refresh_with_loss` || a.variant === `refresh_with_personalized_loss`
          ? { page: `retention_loss`, flow: a }
          : { page: a.offer, flow: a };
    }
  }
  return _t(e, t, n);
}
function _t(e, t, n) {
  return xt(e) === `plus` && n.getLayer(`2090377145`).get(`show_plus_offer_else_go`, !1)
    ? { page: Ct(t) ? `plus_offer` : `go_offer` }
    : { page: `confirm`, skipPromotion: !1 };
}
function vt(e, t = Date.now()) {
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
function yt(e) {
  let t = e.entitlement.discount;
  return e.entitlement.is_active_subscription_gratis ||
    (t?.cancellation_policy === `immediate` && !t.discount_start_in_num_periods) ||
    vt(e)
    ? `immediate`
    : e.entitlement.is_delinquent === !0
      ? `unconfirmed`
      : `term_end`;
}
function bt(e) {
  let t = xt(e);
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
function xt(e) {
  let t = St(e.entitlement.subscription_plan),
    n = e.eligible_offers?.offers?.some((t) => St(t.id) === e.account.plan_type);
  return t != null && n === !0 ? t : e.account.plan_type;
}
function St(e) {
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
function Ct(e) {
  return (
    e != null &&
    `percentage` in e.discount &&
    e.discount.percentage === 100 &&
    (e.duration?.num_periods ?? 1) === 1
  );
}
function wt(e, t, n = Date.now()) {
  try {
    let r = Number(t.getItem(Ot + e));
    return !Number.isFinite(r) || r <= 0
      ? (t.removeItem(Ot + e), `none`)
      : n - r >= kt
        ? `expired`
        : `active`;
  } catch {
    return `unavailable`;
  }
}
function Tt(e, t, n = Date.now()) {
  try {
    return (t.setItem(Ot + e, String(n)), !0);
  } catch {
    return !1;
  }
}
function Et(e, t) {
  t.removeItem(Ot + e);
}
var Dt, Ot, kt;
function At() {
  return (At = e(() => {
    (c(),
      (Dt = S([`control`, `refresh`, `refresh_with_loss`, `refresh_with_personalized_loss`])),
      (Ot = `go-origin-plus-trial-return-request:`),
      (kt = 3e5));
  }))();
}
function jt(e) {
  return g({
    queryKey: [`consumer-billing`, e, `cancellation-promotion`],
    queryFn: async ({ signal: t }) => {
      let n = await W.safeGet(`/promotions/cp`, { parameters: { query: { account_id: e } }, signal: t });
      return n.metadata?.duration?.period === `month` ? n.metadata : null;
    },
    staleTime: 0,
    retry: !1,
  });
}
function Mt(e, t, n) {
  return g({
    queryKey: [`consumer-billing`, e, `cancellation-pricing`, t],
    queryFn: async ({ signal: e }) => {
      let r = await Fe({
          currency: t ?? void 0,
          isPricingEnabled: (e) => n.getLayer(`3768341700`).get(e, !1),
          signal: e,
        }),
        i = Ie.safeParse(r);
      return i.success && (t == null || i.data.currency_config.symbol_code.toUpperCase() === t.toUpperCase())
        ? i.data
        : null;
    },
    staleTime: 0,
    retry: !1,
  });
}
function Nt(e, t) {
  return g({
    queryKey: [`consumer-billing`, e, `cancellation-promotion-preview`, t.campaign_id],
    queryFn: ({ signal: n }) =>
      W.safeGet(`/subscriptions/update/preview`, {
        parameters: { query: { account_id: e, updated_promo_id: t.campaign_id } },
        signal: n,
      }),
    staleTime: 0,
    retry: !1,
  });
}
function Pt(e) {
  return g({
    queryKey: [`consumer-billing`, e, `premium-usage-summary`, `v2`],
    queryFn: ({ signal: e }) => W.safeGet(`/premium-usage/summary/v2`, { signal: e }),
    staleTime: 0,
    retry: !1,
    refetchOnMount: `always`,
  });
}
async function Ft(e, t) {
  try {
    let n = await W.safePost(`/subscriptions/update`, {
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
        await V({ accountId: e, expectedPaymentIntentId: r, pendingUpdateInvoiceId: i });
      } catch {
        return `cleanup_failed`;
      }
    return n.status;
  } catch (e) {
    let t = Rt.safeParse(e);
    if (e instanceof A)
      try {
        t = Rt.safeParse(JSON.parse(e.message));
      } catch {
        return `unknown`;
      }
    return t.success ? (t.data.detail?.error_type ?? `unknown`) : `unknown`;
  }
}
async function It(e, t) {
  let n = e.queryClient,
    r = Oe(e, t);
  await n.cancelQueries({ queryKey: r.queryKey, exact: !0 });
  let i = (await n.fetchQuery(r)).accounts[t];
  return i?.account.account_id === t ? i : void 0;
}
async function Lt({ scope: e, accountId: t, account: n, returnToGo: r, storage: i, onRequestError: a }) {
  let o = vt(n),
    s = n.entitlement.is_active_subscription_gratis === !0;
  if (r) {
    if (!o || i == null) return `storage_unavailable`;
    let n = wt(t, i);
    if (n === `unavailable`) return `storage_unavailable`;
    if (n !== `none`)
      try {
        let r = await It(e, t);
        return r == null
          ? `reload`
          : r.account.plan_type === `go`
            ? `returned_to_go`
            : n === `expired`
              ? (Et(t, i), vt(r) ? `return_ready` : `state_changed`)
              : `return_pending`;
      } catch {
        return `reload`;
      }
    if (!Tt(t, i)) return `storage_unavailable`;
  }
  try {
    if (
      (await W.safePost(`/subscriptions/cancel`, {
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
    let n = await It(e, t);
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
            : vt(n)
              ? `failed`
              : `state_changed`;
  } catch {
    return `reload`;
  }
}
var Rt;
function zt() {
  return (zt = e(() => {
    (c(),
      De(),
      z(),
      _e(),
      y(),
      Re(),
      Le(),
      At(),
      (Rt = M({
        detail: M({ error_type: S([`card_declined`, `delinquent_subscription`]).optional() }).optional(),
      })));
  }))();
}
function Bt(e) {
  let t = (0, Gt.c)(166),
    {
      account: n,
      accountId: r,
      promotion: i,
      confirmationPresentation: a,
      busy: o,
      disabled: s,
      claimError: c,
      cancellationError: l,
      onCancel: u,
      onClaim: d,
      onBack: f,
      onClose: p,
      onShown: g,
    } = e,
    _ = a === void 0 ? `standard` : a,
    v = ie(),
    { client: y } = pe(),
    b;
  t[0] === r ? (b = t[1]) : ((b = de(r)), (t[0] = r), (t[1] = b));
  let { data: x } = h(b),
    S;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((S = { enabled: !0 }), (t[2] = S)) : (S = t[2]);
  let { data: C, isPending: ee, isError: te } = xe(S),
    ne;
  t[3] !== n.entitlement.billing_currency || t[4] !== r || t[5] !== y
    ? ((ne = Mt(r, n.entitlement.billing_currency, y)),
      (t[3] = n.entitlement.billing_currency),
      (t[4] = r),
      (t[5] = y),
      (t[6] = ne))
    : (ne = t[6]);
  let w = i != null && `percentage` in i.discount && i.discount.percentage !== 100,
    T;
  t[7] !== ne || t[8] !== w
    ? ((T = { ...ne, enabled: w, staleTime: 0 }), (t[7] = ne), (t[8] = w), (t[9] = T))
    : (T = t[9]);
  let { data: E } = h(T),
    D;
  t[10] === n ? (D = t[11]) : ((D = yt(n)), (t[10] = n), (t[11] = D));
  let O = D,
    k;
  t[12] === n ? (k = t[13]) : ((k = vt(n)), (t[12] = n), (t[13] = k));
  let A = k,
    j = n.entitlement.discount,
    M;
  t[14] !== n || t[15] !== _ || t[16] !== j || t[17] !== i || t[18] !== O
    ? ((M = _ === `by_the_numbers` && xt(n) === `plus` && i == null && j == null && O === `term_end`),
      (t[14] = n),
      (t[15] = _),
      (t[16] = j),
      (t[17] = i),
      (t[18] = O),
      (t[19] = M))
    : (M = t[19]);
  let N = M,
    ae;
  t[20] === r ? (ae = t[21]) : ((ae = Pt(r)), (t[20] = r), (t[21] = ae));
  let P;
  t[22] !== N || t[23] !== ae
    ? ((P = { ...ae, enabled: N, staleTime: 0 }), (t[22] = N), (t[23] = ae), (t[24] = P))
    : (P = t[24]);
  let { data: oe, isSuccess: I, isFetchedAfterMount: L, isFetching: se } = h(P),
    z;
  t[25] !== N || t[26] !== L || t[27] !== se || t[28] !== I || t[29] !== oe
    ? ((z = N && I && L && !se ? Ge(oe) : []),
      (t[25] = N),
      (t[26] = L),
      (t[27] = se),
      (t[28] = I),
      (t[29] = oe),
      (t[30] = z))
    : (z = t[30]);
  let B = z,
    [ce, le] = (0, Kt.useState)(null);
  ce != null && ce.accountId !== r && le(null);
  let ue = ce?.accountId === r ? ce.items : null,
    V = _ === `by_the_numbers` && (ue == null ? B.length > 0 : ue.length > 0),
    H = ue ?? B,
    U = (O === `term_end` ? n.entitlement.renews_at : null) ?? n.entitlement.expires_at ?? x?.active_until,
    me;
  t[31] !== U || t[32] !== v
    ? ((me =
        U != null && Number.isFinite(Date.parse(U))
          ? v.formatDate(U, { year: `numeric`, month: `short`, day: `numeric` })
          : null),
      (t[31] = U),
      (t[32] = v),
      (t[33] = me))
    : (me = t[33]);
  let W = me,
    G = j?.discount_expires_at,
    he;
  t[34] !== j || t[35] !== U || t[36] !== W || t[37] !== v || t[38] !== G
    ? ((he =
        j != null &&
        (j.discount_start_in_num_periods == null || j.discount_start_in_num_periods === 0) &&
        U != null &&
        W != null &&
        G != null &&
        Number.isFinite(Date.parse(G)) &&
        Date.parse(G) > Date.parse(U)
          ? v.formatDate(G, { year: `numeric`, month: `short`, day: `numeric` })
          : null),
      (t[34] = j),
      (t[35] = U),
      (t[36] = W),
      (t[37] = v),
      (t[38] = G),
      (t[39] = he))
    : (he = t[39]);
  let ge = he,
    _e;
  t[40] !== U || t[41] !== G || t[42] !== ge
    ? ((_e =
        ge != null && G != null && U != null ? Math.round((Date.parse(G) - Date.parse(U)) / 864e5) : null),
      (t[40] = U),
      (t[41] = G),
      (t[42] = ge),
      (t[43] = _e))
    : (_e = t[43]);
  let ve = _e,
    ye;
  t[44] === n ? (ye = t[45]) : ((ye = bt(n)), (t[44] = n), (t[45] = ye));
  let K = ye,
    q = i?.duration?.num_periods ?? 1,
    be = i != null && `percentage` in i.discount && i.discount.percentage === 100,
    Se;
  t[46] !== y || t[47] !== v
    ? ((Se = (y.getContext().user?.country ?? new Intl.Locale(v.locale).region)?.trim().toUpperCase()),
      (t[46] = y),
      (t[47] = v),
      (t[48] = Se))
    : (Se = t[48]);
  let Ce = Se,
    we = !o && !s && !ee,
    Te;
  if (i != null) {
    let e;
    (t[49] !== K || t[50] !== i
      ? ((e = (0, Y.jsx)(Wt, { promotion: i, planName: K })), (t[49] = K), (t[50] = i), (t[51] = e))
      : (e = t[51]),
      (Te = e));
  } else if (A) {
    let e;
    (t[52] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(F, {
          id: `cancelSubscriptionModal.plusFreeForGoOffer.title`,
          defaultMessage: `Cancel Plus and return to Free?`,
          description: `Confirms immediately ending a Go-origin Plus trial and returning to Free instead of restoring Go`,
        })),
        (t[52] = e))
      : (e = t[52]),
      (Te = e));
  } else if (j != null && O === `immediate`) {
    let e;
    (t[53] === K
      ? (e = t[54])
      : ((e = (0, Y.jsx)(F, {
          id: `cancelSubscriptionModal.hasDiscount.titleImmediate`,
          defaultMessage: `End {planName} access immediately?`,
          description: `Cancellation heading for a discounted subscription whose cancellation ends access immediately`,
          values: { planName: K },
        })),
        (t[53] = K),
        (t[54] = e)),
      (Te = e));
  } else if (j != null && O === `term_end` && W != null) {
    let e;
    (t[55] !== W || t[56] !== K
      ? ((e = (0, Y.jsx)(F, {
          id: `cancelSubscriptionModal.hasDiscount.title`,
          defaultMessage: `End {planName} access on {expirationDate}?`,
          description: `Cancellation heading for a discounted subscription; expirationDate is its actual localized access end date`,
          values: { planName: K, expirationDate: W },
        })),
        (t[55] = W),
        (t[56] = K),
        (t[57] = e))
      : (e = t[57]),
      (Te = e));
  } else {
    let e;
    (t[58] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(F, {
          id: `cancelSubscriptionModal.title`,
          defaultMessage: `Subscription Cancellation`,
          description: `Title for the consumer subscription cancellation confirmation`,
        })),
        (t[58] = e))
      : (e = t[58]),
      (Te = e));
  }
  let Ee, De;
  t[59] !== n || t[60] !== E?.currency_config
    ? ((Ee = xt(n)),
      (De = fe(Ee) ? E?.currency_config[Ee]?.month?.amount : void 0),
      (t[59] = n),
      (t[60] = E?.currency_config),
      (t[61] = Ee),
      (t[62] = De))
    : ((Ee = t[61]), (De = t[62]));
  let Oe = De,
    ke;
  t[63] !== v || t[64] !== q || t[65] !== Oe || t[66] !== E || t[67] !== i
    ? ((ke =
        Oe != null && i != null && `percentage` in i.discount && E != null
          ? v.formatNumber(Math.max(0, Oe * q * (1 - i.discount.percentage / 100)), {
              style: `currency`,
              currency: E.currency_config.symbol_code,
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            })
          : null),
      (t[63] = v),
      (t[64] = q),
      (t[65] = Oe),
      (t[66] = E),
      (t[67] = i),
      (t[68] = ke))
    : (ke = t[68]);
  let Ae = ke,
    je;
  t[69] !== n || t[70] !== W || t[71] !== ge || t[72] !== ve
    ? ((je = (0, Y.jsx)(Ut, { account: n, expirationDate: W, promoEndDate: ge, remainingDays: ve })),
      (t[69] = n),
      (t[70] = W),
      (t[71] = ge),
      (t[72] = ve),
      (t[73] = je))
    : (je = t[73]);
  let Me = je;
  if (i != null && ((Me = i.summary), Ae != null)) {
    if (Ee === `pro` || Ee === `promax`) {
      let e;
      (t[74] !== Ae || t[75] !== q
        ? ((e = (0, Y.jsx)(F, {
            id: `cancelSubscriptionModal.percentOffSummary`,
            defaultMessage: `We’d love for you to stay — how about {formattedDiscountedCost} for {numPeriods, plural, one {one month} other {{numPeriods} months}} on us? You'll keep maximizing your productivity with the most advanced Pro models, unlimited messages, and maximum memory.`,
            description: `Explains the total discounted Pro price and benefits of accepting a cancellation retention promotion`,
            values: { formattedDiscountedCost: Ae, numPeriods: q },
          })),
          (t[74] = Ae),
          (t[75] = q),
          (t[76] = e))
        : (e = t[76]),
        (Me = e));
    } else {
      let e;
      (t[77] !== Ae || t[78] !== q
        ? ((e = (0, Y.jsx)(F, {
            id: `cancelSubscriptionModal.percentOffPlusSummary`,
            defaultMessage: `We’d love for you to stay — how about {formattedDiscountedCost} for {numPeriods, plural, one {one month} other {{numPeriods} months}} on us? You'll keep the full experience - advanced models for complex problems, extended limits, and more memory to pick up right where you left off`,
            description: `Explains the total discounted Plus price and benefits of accepting a cancellation retention promotion`,
            values: { formattedDiscountedCost: Ae, numPeriods: q },
          })),
          (t[77] = Ae),
          (t[78] = q),
          (t[79] = e))
        : (e = t[79]),
        (Me = e));
    }
  }
  let Ne;
  if (O === `unconfirmed`) {
    let e;
    (t[80] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(F, {
          id: `settings.consumerBilling.cancellation.offerTermsPaymentUnconfirmed`,
          defaultMessage: `If you'd rather cancel now, you'll keep access for any time you've already paid for. If your current period is unpaid, access may end immediately.`,
          description: `Cancellation consequence alongside a retention offer when the payment status may be outdated; paid access is preserved but unpaid access may end immediately`,
        })),
        (t[80] = e))
      : (e = t[80]),
      (Ne = e));
  } else if (O === `immediate`) {
    let e;
    (t[81] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(F, {
          id: `cancelSubscriptionModal.promo.canceledSubscriptionBottomImmediate`,
          defaultMessage: `If you'd rather cancel now, your access to advanced features will end immediately`,
          description: `Cancellation consequence shown alongside a retention offer when access ends immediately`,
        })),
        (t[81] = e))
      : (e = t[81]),
      (Ne = e));
  } else if (W != null) {
    let e;
    (t[82] === W
      ? (e = t[83])
      : ((e = (0, Y.jsx)(F, {
          id: `cancelSubscriptionModal.promo.canceledSubscriptionBottom`,
          defaultMessage: `If you'd rather cancel now, your access to advanced features will end on {expirationDate}`,
          description: `Cancellation consequence alongside a retention offer; expirationDate is the actual localized access end date`,
          values: { expirationDate: W },
        })),
        (t[82] = W),
        (t[83] = e)),
      (Ne = e));
  } else {
    let e;
    (t[84] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(F, {
          id: `settings.consumerBilling.cancellation.offerTermsWithoutDate`,
          defaultMessage: `If you'd rather cancel now, your access to advanced features will end at the end of your current billing period`,
          description: `Cancellation consequence alongside a retention offer when the account did not provide an exact access end date`,
        })),
        (t[84] = e))
      : (e = t[84]),
      (Ne = e));
  }
  let Pe;
  t[85] !== V || t[86] !== Te
    ? ((Pe = V ? (0, Y.jsx)(F, { ...$e.title }) : Te), (t[85] = V), (t[86] = Te), (t[87] = Pe))
    : (Pe = t[87]);
  let Fe;
  t[88] !== r || t[89] !== we || t[90] !== u || t[91] !== H || t[92] !== V
    ? ((Fe = () => {
        we && (le((e) => (e?.accountId === r ? e : { accountId: r, items: V ? H : [] })), u());
      }),
      (t[88] = r),
      (t[89] = we),
      (t[90] = u),
      (t[91] = H),
      (t[92] = V),
      (t[93] = Fe))
    : (Fe = t[93]);
  let Ie;
  t[94] !== H || t[95] !== V
    ? ((Ie = V ? (0, Y.jsx)(tt, { items: H }) : null), (t[94] = H), (t[95] = V), (t[96] = Ie))
    : (Ie = t[96]);
  let Le;
  t[97] === Me
    ? (Le = t[98])
    : ((Le = (0, Y.jsx)(R, { children: (0, Y.jsx)(`p`, { className: `text-secondary`, children: Me }) })),
      (t[97] = Me),
      (t[98] = Le));
  let Re;
  t[99] !== Ne || t[100] !== i
    ? ((Re =
        i == null
          ? null
          : (0, Y.jsx)(R, { children: (0, Y.jsx)(`p`, { className: `text-secondary`, children: Ne }) })),
      (t[99] = Ne),
      (t[100] = i),
      (t[101] = Re))
    : (Re = t[101]);
  let ze;
  t[102] !== C?.isEnabled || t[103] !== te
    ? ((ze =
        C?.isEnabled === !0 || te
          ? (0, Y.jsx)(R, {
              children: (0, Y.jsx)(`p`, {
                className: `text-secondary`,
                children: (0, Y.jsx)(F, {
                  id: `chatgpt.subscription.cancellation.modal.body.auto_reload_notice`,
                  defaultMessage: `Auto-reload of credits will also be turned off when your subscription ends`,
                  description: `Warns that canceling a consumer subscription also turns off automatic credit reload when access ends; shown when reload is enabled or its state could not be checked`,
                }),
              }),
            })
          : null),
      (t[102] = C?.isEnabled),
      (t[103] = te),
      (t[104] = ze))
    : (ze = t[104]);
  let Be;
  t[105] !== Ce || t[106] !== O
    ? ((Be =
        Ce === `KR`
          ? (0, Y.jsx)(R, {
              children: (0, Y.jsx)(`p`, {
                className: `text-secondary`,
                children:
                  O === `term_end`
                    ? (0, Y.jsx)(F, {
                        id: `cancelSubscriptionModal.koreanTermEndRefundDisclosure`,
                        defaultMessage: `You may also request a refund subject to our <refundPolicyLink>Refund Policy</refundPolicyLink>, in which case the cancellation of your subscription will take effect immediately`,
                        description: `Refund policy disclosure for a Korean subscriber whose ordinary cancellation would take effect at term end; a refund instead ends access immediately`,
                        values: { refundPolicyLink: Vt },
                      })
                    : (0, Y.jsx)(F, {
                        id: `cancelSubscriptionModal.koreanImmediateRefundDisclosure`,
                        defaultMessage: `You may also request a refund subject to our <refundPolicyLink>Refund Policy</refundPolicyLink>`,
                        description: `Refund policy disclosure for a Korean subscriber whose cancellation takes effect immediately or whose payment status is unconfirmed; the linked policy opens externally`,
                        values: { refundPolicyLink: Ht },
                      }),
              }),
            })
          : null),
      (t[105] = Ce),
      (t[106] = O),
      (t[107] = Be))
    : (Be = t[107]);
  let Ve;
  t[108] === c
    ? (Ve = t[109])
    : ((Ve = c == null ? null : (0, Y.jsx)(R, { children: (0, Y.jsx)(ft, { result: c }) })),
      (t[108] = c),
      (t[109] = Ve));
  let He;
  t[110] === l
    ? (He = t[111])
    : ((He = l == null ? null : (0, Y.jsx)(R, { children: l })), (t[110] = l), (t[111] = He));
  let Ue = i == null && !V ? `dangerSolid` : `danger`,
    We = !we,
    Ke;
  t[112] === V
    ? (Ke = t[113])
    : ((Ke = V && (0, Y.jsx)(F, { ...$e.confirmAndCancel })), (t[112] = V), (t[113] = Ke));
  let qe;
  t[114] !== V || t[115] !== A
    ? ((qe =
        !V &&
        A &&
        (0, Y.jsx)(F, {
          id: `cancelSubscriptionModal.plusFreeForGoOffer.cancelPlus`,
          defaultMessage: `Cancel Plus`,
          description: `Immediately ends the Go-origin Plus trial and returns the user to Free`,
        })),
      (t[114] = V),
      (t[115] = A),
      (t[116] = qe))
    : (qe = t[116]);
  let Je;
  t[117] !== V || t[118] !== A
    ? ((Je =
        !V &&
        !A &&
        (0, Y.jsx)(F, {
          id: `cancelSubscriptionModal.cancel`,
          defaultMessage: `Cancel subscription`,
          description: `Confirms cancellation of the current consumer subscription`,
        })),
      (t[117] = V),
      (t[118] = A),
      (t[119] = Je))
    : (Je = t[119]);
  let Ye;
  t[120] !== o || t[121] !== Ue || t[122] !== We || t[123] !== Ke || t[124] !== qe || t[125] !== Je
    ? ((Ye = (0, Y.jsxs)(re, {
        color: Ue,
        disabled: We,
        loading: o,
        type: `submit`,
        children: [Ke, qe, Je],
      })),
      (t[120] = o),
      (t[121] = Ue),
      (t[122] = We),
      (t[123] = Ke),
      (t[124] = qe),
      (t[125] = Je),
      (t[126] = Ye))
    : (Ye = t[126]);
  let Xe;
  t[127] !== o || t[128] !== s || t[129] !== p || t[130] !== V
    ? ((Xe =
        V &&
        (0, Y.jsx)(re, {
          disabled: o || s,
          type: `button`,
          onClick: p,
          children: (0, Y.jsx)(F, { ...$e.keepPlus }),
        })),
      (t[127] = o),
      (t[128] = s),
      (t[129] = p),
      (t[130] = V),
      (t[131] = Xe))
    : (Xe = t[131]);
  let Ze;
  t[132] !== o || t[133] !== s || t[134] !== f || t[135] !== i || t[136] !== V
    ? ((Ze =
        !V &&
        i == null &&
        (0, Y.jsx)(re, {
          color: `secondary`,
          disabled: o || s,
          type: `button`,
          onClick: f,
          children: (0, Y.jsx)(F, {
            id: `cancelSubscriptionModal.goBack`,
            defaultMessage: `Go back`,
            description: `Returns from cancellation confirmation without canceling the subscription`,
          }),
        })),
      (t[132] = o),
      (t[133] = s),
      (t[134] = f),
      (t[135] = i),
      (t[136] = V),
      (t[137] = Ze))
    : (Ze = t[137]);
  let J;
  t[138] !== o ||
  t[139] !== c ||
  t[140] !== s ||
  t[141] !== be ||
  t[142] !== d ||
  t[143] !== K ||
  t[144] !== i ||
  t[145] !== V
    ? ((J =
        !V &&
        i != null &&
        (0, Y.jsx)(re, {
          disabled: o || s || c != null,
          type: `button`,
          onClick: d,
          children:
            be && !i.is_immediately_invoiced
              ? (0, Y.jsx)(F, {
                  id: `cancelSubscriptionModal.keepPlanForFreeButton`,
                  defaultMessage: `Keep {planName} for free`,
                  description: `Accepts a scheduled free retention promotion on the current plan`,
                  values: { planName: K },
                })
              : (0, Y.jsx)(F, {
                  id: `cancelSubscriptionModal.getOfferButton`,
                  defaultMessage: `Get offer`,
                  description: `Opens or accepts the current cancellation retention promotion`,
                }),
        })),
      (t[138] = o),
      (t[139] = c),
      (t[140] = s),
      (t[141] = be),
      (t[142] = d),
      (t[143] = K),
      (t[144] = i),
      (t[145] = V),
      (t[146] = J))
    : (J = t[146]);
  let Qe;
  t[147] !== Ye || t[148] !== Xe || t[149] !== Ze || t[150] !== J
    ? ((Qe = (0, Y.jsx)(R, {
        children: (0, Y.jsxs)(m, { className: `flex-wrap`, children: [Ye, Xe, Ze, J] }),
      })),
      (t[147] = Ye),
      (t[148] = Xe),
      (t[149] = Ze),
      (t[150] = J),
      (t[151] = Qe))
    : (Qe = t[151]);
  let et;
  return (
    t[152] !== o ||
    t[153] !== p ||
    t[154] !== g ||
    t[155] !== Pe ||
    t[156] !== Fe ||
    t[157] !== Ie ||
    t[158] !== Le ||
    t[159] !== Re ||
    t[160] !== ze ||
    t[161] !== Be ||
    t[162] !== Ve ||
    t[163] !== He ||
    t[164] !== Qe
      ? ((et = (0, Y.jsxs)(ot, {
          title: Pe,
          busy: o,
          onClose: p,
          onShown: g,
          onSubmit: Fe,
          children: [Ie, Le, Re, ze, Be, Ve, He, Qe],
        })),
        (t[152] = o),
        (t[153] = p),
        (t[154] = g),
        (t[155] = Pe),
        (t[156] = Fe),
        (t[157] = Ie),
        (t[158] = Le),
        (t[159] = Re),
        (t[160] = ze),
        (t[161] = Be),
        (t[162] = Ve),
        (t[163] = He),
        (t[164] = Qe),
        (t[165] = et))
      : (et = t[165]),
    et
  );
}
function Vt(e) {
  return (0, Y.jsx)(le, {
    href: qt,
    initiator: `open_in_browser_bridge`,
    openTarget: `external-browser`,
    children: e,
  });
}
function Ht(e) {
  return (0, Y.jsx)(le, {
    href: qt,
    initiator: `open_in_browser_bridge`,
    openTarget: `external-browser`,
    children: e,
  });
}
function Ut(e) {
  let t = (0, Gt.c)(26),
    { account: n, expirationDate: r, promoEndDate: i, remainingDays: a } = e,
    o;
  t[0] === n ? (o = t[1]) : ((o = bt(n)), (t[0] = n), (t[1] = o));
  let s = o,
    c = yt(n);
  if (vt(n)) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(F, {
            id: `cancelSubscriptionModal.plusFreeForGoOffer.body`,
            defaultMessage: `Canceling Plus will end your trial immediately and return you to Free`,
            description: `Explains the immediate consequence of declining Go and canceling a Go-origin Plus trial`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (c === `unconfirmed`) {
    let e;
    return (
      t[3] !== n.entitlement.discount || t[4] !== s
        ? ((e =
            n.entitlement.discount == null
              ? (0, Y.jsx)(F, {
                  id: `settings.consumerBilling.cancellation.termsPaymentUnconfirmed`,
                  defaultMessage: `If you cancel now, you'll keep {planName} access for any time you've already paid for. If your current period is unpaid, access may end immediately.`,
                  description: `Cancellation terms when the payment status may be outdated; paid access is preserved but unpaid access may end immediately`,
                  values: { planName: s },
                })
              : (0, Y.jsx)(F, {
                  id: `settings.consumerBilling.cancellation.discountedTermsPaymentUnconfirmed`,
                  defaultMessage: `If you cancel now, you'll keep {planName} access for any time you've already paid for. If your current period is unpaid, access may end immediately. Any discounts applied will be removed, and can't be used again.`,
                  description: `Cancellation terms for a discounted subscription whose payment status may be outdated; paid time is preserved, unpaid access may end immediately, and discounts cannot be reused`,
                  values: { planName: s },
                })),
          (t[3] = n.entitlement.discount),
          (t[4] = s),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  if (n.entitlement.discount != null) {
    if (
      c === `term_end` &&
      r != null &&
      n.account.plan_type === `plus` &&
      n.entitlement.discount.promo_campaign_id === `students-2026-four-month-free`
    ) {
      let e;
      return (
        t[6] === r
          ? (e = t[7])
          : ((e = (0, Y.jsx)(F, {
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
    if (c === `immediate`) {
      let e;
      return (
        t[8] === s
          ? (e = t[9])
          : ((e = (0, Y.jsx)(F, {
              id: `cancelSubscriptionModal.hasDiscount.canceledSubscriptionImmediate`,
              defaultMessage: `If you cancel your subscription now, your {planName} access will end immediately. Any discounts applied will be removed, and can't be used again.`,
              description: `Warns that canceling an immediately ending discounted plan removes access and the reusable discount`,
              values: { planName: s },
            })),
            (t[8] = s),
            (t[9] = e)),
        e
      );
    }
    if (r != null) {
      if (i != null && i !== r && a != null && a >= 1) {
        let e =
            n.entitlement.discount.discount_type === `percentage` && n.entitlement.discount.amount === 100
              ? `free`
              : `discounted`,
          o;
        return (
          t[10] !== r || t[11] !== s || t[12] !== i || t[13] !== a || t[14] !== e
            ? ((o = (0, Y.jsx)(F, {
                id: `cancelSubscriptionModal.hasDiscount.canceledSubscriptionWithLostDays`,
                defaultMessage: `You currently have a promotion for {promotionType, select, free {free} other {discounted}} {planName} access until {promoEndDate}. Canceling now will remove this promotion and end your access on {expirationDate}. You’ll lose about {remainingDays, plural, one {# day} other {# days}} of {promotionType, select, free {free} other {discounted}} access. This promotion can’t be used again.`,
                description: `Plain-text body in the subscription cancellation confirmation modal. Tell an end-user they have an active promotion and clearly warn that canceling forfeits the time after their earlier access end. {promotionType} is 'free' only for a 100-percent discount; otherwise use the 'other' branch for discounted access. {planName} is a ChatGPT plan name such as Plus or Pro and must not be translated. {promoEndDate} is the nonempty localized original promotion end; {expirationDate} is the nonempty localized earlier access end after cancellation. {remainingDays} is a positive integer: the elapsed time between those end timestamps rounded to the nearest day, not the time from today. Retain the approximate meaning of 'about' and use locale-appropriate plural forms.`,
                values: {
                  planName: s,
                  expirationDate: r,
                  promoEndDate: i,
                  remainingDays: a,
                  promotionType: e,
                },
              })),
              (t[10] = r),
              (t[11] = s),
              (t[12] = i),
              (t[13] = a),
              (t[14] = e),
              (t[15] = o))
            : (o = t[15]),
          o
        );
      }
      let e;
      return (
        t[16] !== r || t[17] !== s
          ? ((e = (0, Y.jsx)(F, {
              id: `cancelSubscriptionModal.hasDiscount.canceledSubscription`,
              defaultMessage: `If you cancel your subscription now, your {planName} access will end on {expirationDate}. Any discounts applied will be removed, and can't be used again.`,
              description: `Warns that canceling a discounted plan ends access on expirationDate and removes discounts permanently`,
              values: { planName: s, expirationDate: r },
            })),
            (t[16] = r),
            (t[17] = s),
            (t[18] = e))
          : (e = t[18]),
        e
      );
    }
    let e;
    return (
      t[19] === s
        ? (e = t[20])
        : ((e = (0, Y.jsx)(F, {
            id: `settings.consumerBilling.cancellation.discountedTermsWithoutDate`,
            defaultMessage: `Your {planName} access will end at the end of your current billing period. Any discounts applied will be removed, and can't be used again.`,
            description: `Discounted cancellation terms when the account has not supplied an exact access end date`,
            values: { planName: s },
          })),
          (t[19] = s),
          (t[20] = e)),
      e
    );
  }
  if (c === `immediate`) {
    let e;
    return (
      t[21] === s
        ? (e = t[22])
        : ((e = (0, Y.jsx)(F, {
            id: `cancelSubscriptionModal.canceledSubscriptionImmediate`,
            defaultMessage: `If you cancel your subscription now, your {planName} access will end immediately`,
            description: `Cancellation terms when access ends immediately`,
            values: { planName: s },
          })),
          (t[21] = s),
          (t[22] = e)),
      e
    );
  }
  let l;
  return (
    t[23] !== r || t[24] !== s
      ? ((l =
          r == null
            ? (0, Y.jsx)(F, {
                id: `settings.consumerBilling.cancellation.termsWithoutDate`,
                defaultMessage: `Your {planName} subscription will be canceled but will remain active until the end of your current billing period`,
                description: `Cancellation terms when the account has not supplied an exact access end date`,
                values: { planName: s },
              })
            : (0, Y.jsx)(F, {
                id: `cancelSubscriptionModal.canceledSubscription`,
                defaultMessage: `Your {planName} subscription will be canceled but will remain active until the end of your billing period on {expirationDate}`,
                description: `Cancellation terms for an ordinary subscription; expirationDate is the actual localized end of access`,
                values: { planName: s, expirationDate: r },
              })),
        (t[23] = r),
        (t[24] = s),
        (t[25] = l))
      : (l = t[25]),
    l
  );
}
function Wt(e) {
  let t = (0, Gt.c)(15),
    { promotion: n, planName: r } = e,
    i = ie(),
    a = n.duration?.num_periods ?? 1;
  if (`percentage` in n.discount) {
    let e;
    return (
      t[0] !== a || t[1] !== r || t[2] !== n.discount.percentage
        ? ((e =
            n.discount.percentage === 100
              ? (0, Y.jsx)(F, {
                  id: `cancelSubscriptionModal.freeTitle`,
                  defaultMessage: `Get {numPeriods, plural, one {one month} other {{numPeriods} months}} of {planName}, free`,
                  description: `Title of a free-month cancellation retention promotion`,
                  values: { planName: r, numPeriods: a },
                })
              : (0, Y.jsx)(F, {
                  id: `cancelSubscriptionModal.percentageOffTitle`,
                  defaultMessage: `Get {percentage}% off {planName} for {numPeriods, plural, one {one month} other {{numPeriods} months}}`,
                  description: `Title of a percentage-off cancellation retention promotion`,
                  values: { planName: r, numPeriods: a, percentage: n.discount.percentage },
                })),
          (t[0] = a),
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
    let o;
    return (
      t[8] !== a || t[9] !== r || t[10] !== e
        ? ((o = (0, Y.jsx)(F, {
            id: `settings.consumerBilling.cancellation.valueOffTitle`,
            defaultMessage: `Get {valueOff} off {planName} for {numPeriods, plural, one {one month} other {{numPeriods} months}}`,
            description: `Title of a fixed-value retention discount; valueOff is the actual localized discount with currency`,
            values: { planName: r, numPeriods: a, valueOff: e },
          })),
          (t[8] = a),
          (t[9] = r),
          (t[10] = e),
          (t[11] = o))
        : (o = t[11]),
      o
    );
  }
  let o;
  return (
    t[12] !== r || t[13] !== n.title
      ? ((o =
          n.title == null
            ? (0, Y.jsx)(F, {
                id: `settings.consumerBilling.cancellation.promotionTitle`,
                defaultMessage: `Keep {planName} with this offer`,
                description: `Title of a cancellation retention promotion whose metadata supplies no localized title`,
                values: { planName: r },
              })
            : (0, Y.jsx)(Y.Fragment, { children: n.title })),
        (t[12] = r),
        (t[13] = n.title),
        (t[14] = o))
      : (o = t[14]),
    o
  );
}
var Gt, Kt, Y, qt;
function Jt() {
  return (Jt = e(() => {
    ((Gt = _()),
      j(),
      (Kt = o()),
      w(),
      E(),
      l(),
      he(),
      ye(),
      z(),
      q(),
      Le(),
      Ze(),
      at(),
      dt(),
      et(),
      ht(),
      zt(),
      At(),
      (Y = p()),
      (qt = `https://help.openai.com/articles/7232895-how-do-i-request-a-refund-for-my-chatgpt-subscription`));
  }))();
}
function X(e, t, n) {
  if (t === `chatgpt_cancel_subscription_modal_cancel_failed`) {
    K(e, Te, {
      actionType: Ce.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_CANCELLATION_FAILED,
      legacyStatsigEventName: t,
    });
    return;
  }
  e.get(B).logEventWithStatsig?.(t, n);
}
function Yt() {
  return (Yt = e(() => {
    (we(), be());
  }))();
}
function Xt(e) {
  let t = (0, Qt.c)(18),
    { account: n, onBack: r, onClose: i, onContinue: a, onShown: o } = e,
    s = yt(n),
    c = J.thingsYouLoseBody;
  s === `immediate`
    ? (c = J.thingsYouLoseBodyImmediate)
    : s === `unconfirmed` && (c = J.thingsYouLoseBodyPaymentUnconfirmed);
  let l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = [
        J.thingsYouLoseExtendedLimits,
        J.thingsYouLoseVoiceMode,
        J.thingsYouLoseModelAccess,
        J.thingsYouLoseCustomGpts,
      ]),
      (t[0] = l))
    : (l = t[0]);
  let u = l,
    d;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Z.jsx)(F, { ...J.thingsYouLoseTitle })), (t[1] = d))
    : (d = t[1]);
  let f;
  t[2] === c
    ? (f = t[3])
    : ((f = (0, Z.jsx)(R, {
        children: (0, Z.jsx)(`p`, {
          className: `leading-relaxed text-default`,
          children: (0, Z.jsx)(F, { ...c }),
        }),
      })),
      (t[2] = c),
      (t[3] = f));
  let p;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Z.jsx)(`p`, {
        className: `font-semibold`,
        children: (0, Z.jsx)(F, { ...J.thingsYouLoseCardTitle }),
      })),
      (t[4] = p))
    : (p = t[4]);
  let h;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(R, {
        spacing: `large`,
        children: (0, Z.jsxs)(`div`, {
          className: `flex flex-col gap-4 rounded-xl bg-secondary-soft p-4 text-sm text-default`,
          children: [p, (0, Z.jsx)(`ul`, { className: `flex flex-col gap-4`, children: u.map(Zt) })],
        }),
      })),
      (t[5] = h))
    : (h = t[5]);
  let g;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Z.jsx)(F, { ...J.backButtonLabel })), (t[6] = g))
    : (g = t[6]);
  let _;
  t[7] === r
    ? (_ = t[8])
    : ((_ = (0, Z.jsx)(re, { color: `secondary`, type: `button`, onClick: r, children: g })),
      (t[7] = r),
      (t[8] = _));
  let v;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Z.jsx)(re, { type: `submit`, children: (0, Z.jsx)(F, { ...J.continueButtonLabel }) })),
      (t[9] = v))
    : (v = t[9]);
  let y;
  t[10] === _
    ? (y = t[11])
    : ((y = (0, Z.jsx)(R, { children: (0, Z.jsxs)(m, { children: [_, v] }) })), (t[10] = _), (t[11] = y));
  let b;
  return (
    t[12] !== i || t[13] !== a || t[14] !== o || t[15] !== f || t[16] !== y
      ? ((b = (0, Z.jsxs)(ot, { title: d, onClose: i, onShown: o, onSubmit: a, children: [f, h, y] })),
        (t[12] = i),
        (t[13] = a),
        (t[14] = o),
        (t[15] = f),
        (t[16] = y),
        (t[17] = b))
      : (b = t[17]),
    b
  );
}
function Zt(e) {
  return (0, Z.jsxs)(
    `li`,
    {
      className: `flex items-start gap-4`,
      children: [
        (0, Z.jsx)(L, { className: `text-danger` }),
        (0, Z.jsx)(`span`, { className: `min-w-0 flex-1`, children: (0, Z.jsx)(F, { ...e }) }),
      ],
    },
    e.id,
  );
}
var Qt, Z;
function $t() {
  return ($t = e(() => {
    ((Qt = _()), w(), E(), l(), C(), dt(), et(), At(), (Z = p()));
  }))();
}
function en(e) {
  let t = (0, tn.c)(26),
    { designVariant: n, plan: r } = e,
    i = (0, nn.useId)(),
    [a, o] = (0, nn.useState)(!1);
  if (r === `plus`) {
    let e = a ? on : cn,
      n;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = () => o(!0)), (t[0] = n)) : (n = t[0]);
    let r;
    return (
      t[1] === e
        ? (r = t[2])
        : ((r = (0, rn.jsx)(`img`, { className: `size-full object-cover`, alt: ``, src: e, onError: n })),
          (t[1] = e),
          (t[2] = r)),
      r
    );
  }
  if (n === `premium_refresh` && !a) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, rn.jsx)(`img`, {
            className: `size-full object-cover`,
            alt: ``,
            src: sn,
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
    ? ((c = (0, rn.jsx)(`stop`, {
        offset: `24.327%`,
        stopColor: `var(--color-surface-elevated-secondary)`,
        stopOpacity: `0`,
      })),
      (l = (0, rn.jsx)(`stop`, { offset: `47.029%`, stopColor: `var(--color-surface-elevated-secondary)` })),
      (t[4] = c),
      (t[5] = l))
    : ((c = t[4]), (l = t[5]));
  let u;
  t[6] === s
    ? (u = t[7])
    : ((u = (0, rn.jsxs)(`linearGradient`, {
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
    ? ((f = (0, rn.jsx)(`feDropShadow`, { dx: `0`, dy: `1`, stdDeviation: `1`, floodOpacity: `0.04` })),
      (p = (0, rn.jsx)(`feDropShadow`, { dx: `0`, dy: `6`, stdDeviation: `5`, floodOpacity: `0.08` })),
      (t[8] = f),
      (t[9] = p))
    : ((f = t[8]), (p = t[9]));
  let m;
  t[10] === d
    ? (m = t[11])
    : ((m = (0, rn.jsxs)(`filter`, {
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
    ? ((h = (0, rn.jsxs)(`defs`, { children: [u, m] })), (t[12] = u), (t[13] = m), (t[14] = h))
    : (h = t[14]);
  let g;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, rn.jsx)(`image`, {
        href: an,
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
    : ((v = (0, rn.jsx)(`path`, { d: `M0 0h480v214H0z`, fill: _ })), (t[16] = _), (t[17] = v));
  let y = `url(#${i}-shadow)`,
    b,
    x;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, rn.jsx)(`path`, {
        d: `M9.52591 2.56122C10.8927 1.19464 13.1083 1.19464 14.4751 2.56122L21.44 9.52607C22.8059 10.8929 22.8063 13.1087 21.44 14.4753L14.4751 21.4401C13.1086 22.8065 10.8927 22.806 9.52591 21.4401L2.56106 14.4753C1.19448 13.1085 1.1945 10.8929 2.56106 9.52607L9.52591 2.56122Z`,
        fill: `#FFFFFF`,
      })),
      (x = (0, rn.jsx)(`path`, {
        d: `M9.50051 8.9997C9.2881 8.99948 9.10903 9.15887 9.0845 9.36982C8.93245 10.6881 8.18796 11.4326 6.86966 11.5847C6.6587 11.6092 6.49932 11.7883 6.49954 12.0007C6.49987 12.213 6.65963 12.3917 6.87063 12.4157C8.17022 12.5629 8.96632 13.2996 9.08352 14.6188C9.1027 14.8348 9.28375 14.9999 9.50051 14.9997C9.71719 14.9993 9.89784 14.8338 9.91653 14.6179C10.0291 13.3173 10.8171 12.5293 12.1177 12.4167C12.3336 12.398 12.4992 12.2174 12.4995 12.0007C12.4998 11.7839 12.3346 11.6029 12.1187 11.5837C10.7994 11.4665 10.0628 10.6704 9.91555 9.37079C9.89153 9.1598 9.71287 9.00004 9.50051 8.9997Z`,
        fill: `#EFC8D8`,
      })),
      (t[18] = b),
      (t[19] = x))
    : ((b = t[18]), (x = t[19]));
  let S;
  t[20] === y
    ? (S = t[21])
    : ((S = (0, rn.jsxs)(`svg`, {
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
      ? ((C = (0, rn.jsxs)(`svg`, {
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
var tn, nn, rn, an, on, sn, cn;
function ln() {
  return (ln = e(() => {
    ((tn = _()),
      (nn = o()),
      (rn = p()),
      (an = `https://cdn.oaistatic.com/assets/cancel-retention-go-bg-j8bbnivz.webp`),
      (on = `https://cdn.oaistatic.com/assets/cancel-retention-plus-bg-fv5ezepr.webp`),
      (sn = `https://cdn.openai.com/chatgpt/clients/cancellation-retention/go-downgrade-purple-9c85e5b5.webp`),
      (cn = `https://cdn.openai.com/chatgpt/clients/cancellation-retention/plus-offer-blue-c4e15ada.webp`));
  }))();
}
function un(e) {
  let t = (0, dn.c)(90),
    {
      accountId: n,
      account: r,
      kind: i,
      designVariant: a,
      busy: o,
      disabled: s,
      error: c,
      cancellationError: l,
      onAccept: u,
      onDecline: d,
      onClose: p,
      onShown: g,
    } = e,
    _ = a === void 0 ? `legacy` : a,
    v = ie(),
    y = (0, fn.useRef)(!1),
    { client: b } = pe(),
    x;
  t[0] !== r.entitlement.billing_currency || t[1] !== n || t[2] !== b
    ? ((x = Mt(n, r.entitlement.billing_currency, b)),
      (t[0] = r.entitlement.billing_currency),
      (t[1] = n),
      (t[2] = b),
      (t[3] = x))
    : (x = t[3]);
  let S = i !== `plus_offer`,
    C;
  t[4] !== x || t[5] !== S
    ? ((C = { ...x, enabled: S, staleTime: 0 }), (t[4] = x), (t[5] = S), (t[6] = C))
    : (C = t[6]);
  let { data: ee, isPending: te } = h(C),
    ne = ee?.currency_config,
    w = ne?.[i === `pro_offer` ? `prolite` : `go`]?.month?.amount,
    T;
  t[7] !== w || t[8] !== ne || t[9] !== v
    ? ((T =
        w != null && ne != null
          ? v.formatNumber(w, {
              style: `currency`,
              currency: ne.symbol_code,
              maximumFractionDigits: 2,
              minimumFractionDigits: 0,
            })
          : null),
      (t[7] = w),
      (t[8] = ne),
      (t[9] = v),
      (t[10] = T))
    : (T = t[10]);
  let E = T,
    D = _ === `premium_refresh` && (i === `plus_offer` || i === `go_offer`),
    O = o || (s && c !== `delinquent_subscription`),
    k,
    A,
    j;
  bb0: switch (i) {
    case `plus_offer`: {
      let e;
      (t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(F, {
            id: `cancelSubscriptionPlusOfferModal.title`,
            defaultMessage: `Keep your Plus benefits — free for 1 month`,
            description: `Headline introducing the one-month free Plus retention offer when a subscriber starts cancellation`,
          })),
          (t[11] = e))
        : (e = t[11]),
        (k = e));
      let n;
      (t[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, Q.jsx)(F, {
            id: `cancelSubscriptionPlusOfferModal.body`,
            defaultMessage: `We’d love for you to keep extended access to advanced models, increased file uploads, and more personalization — so we’re making it all free for the next 30 days`,
            description: `Explains the one-month Plus retention offer shown during subscription cancellation`,
          })),
          (t[12] = n))
        : (n = t[12]),
        (A = n));
      let r;
      (t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Q.jsx)(F, {
            id: `cancelSubscriptionPlusOfferModal.claimOfferButtonLabel`,
            defaultMessage: `Claim offer`,
            description: `Accepts the one-month free Plus retention offer or opens its immediate payment confirmation`,
          })),
          (t[13] = r))
        : (r = t[13]),
        (j = r));
      break bb0;
    }
    case `go_trial`: {
      let e;
      (t[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(F, {
            id: `cancelSubscriptionGoUpsellModal.goTrialReturnTitle`,
            defaultMessage: `Switch back to ChatGPT Go?`,
            description: `Offers a user on a Go-origin Plus trial an immediate return to Go`,
          })),
          (t[14] = e))
        : (e = t[14]),
        (k = e));
      let n;
      (t[15] === E
        ? (n = t[16])
        : ((n =
            E == null
              ? (0, Q.jsx)(F, {
                  id: `cancelSubscriptionGoUpsellModal.goTrialReturnBodyFallback`,
                  defaultMessage: `Keep expanded messages and image creation with less powerful intelligence`,
                  description: `Describes returning to Go when its localized monthly price is unavailable`,
                })
              : (0, Q.jsx)(F, {
                  id: `cancelSubscriptionGoUpsellModal.goTrialReturnBody`,
                  defaultMessage: `Keep expanded messages and image creation with less powerful intelligence for just {monthlyPrice}/month`,
                  description: `Describes returning immediately to Go; monthlyPrice is the actual localized monthly Go price`,
                  values: { monthlyPrice: E },
                })),
          (t[15] = E),
          (t[16] = n)),
        (A = n));
      let r;
      (t[17] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Q.jsx)(F, {
            id: `cancelSubscriptionGoUpsellModal.continueWithGoButtonLabel`,
            defaultMessage: `Continue with Go`,
            description: `Ends the Go-origin Plus trial immediately and restores the user's Go subscription`,
          })),
          (t[17] = r))
        : (r = t[17]),
        (j = r));
      break bb0;
    }
    case `go_offer`: {
      let e;
      (t[18] === E
        ? (e = t[19])
        : ((e =
            E == null
              ? (0, Q.jsx)(F, {
                  id: `cancelSubscriptionGoUpsellModal.titleFallback`,
                  defaultMessage: `Switch to ChatGPT Go?`,
                  description: `Offers a Go downgrade during cancellation when its monthly price is unavailable`,
                })
              : (0, Q.jsx)(F, {
                  id: `cancelSubscriptionGoUpsellModal.title`,
                  defaultMessage: `Switch to ChatGPT Go for only {monthlyPrice}?`,
                  description: `Offers a lower-cost Go plan during cancellation; monthlyPrice is the actual localized monthly Go price`,
                  values: { monthlyPrice: E },
                })),
          (t[18] = E),
          (t[19] = e)),
        (k = e));
      let n;
      (t[20] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, Q.jsx)(F, {
            id: `cancelSubscriptionGoUpsellModal.body`,
            defaultMessage: `Keep expanded messages and image creation with less powerful intelligence at a lower monthly price`,
            description: `Describes the Go plan offered as an alternative to canceling Plus`,
          })),
          (t[20] = n))
        : (n = t[20]),
        (A = n));
      let r;
      (t[21] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Q.jsx)(F, {
            id: `cancelSubscriptionGoUpsellModal.switchToGoButtonLabel`,
            defaultMessage: `Try ChatGPT Go`,
            description: `Opens the normal subscription plan-change confirmation for a Plus-to-Go downgrade`,
          })),
          (t[21] = r))
        : (r = t[21]),
        (j = r));
      break bb0;
    }
    case `pro_offer`: {
      let e;
      (t[22] === E
        ? (e = t[23])
        : ((e =
            E == null
              ? (0, Q.jsx)(F, {
                  id: `settings.consumerBilling.cancellation.proOfferPriceUnavailable`,
                  defaultMessage: `Keep Pro at a lower price?`,
                  description: `Fallback heading for a Pro subscriber offered the lower Pro tier when its current price is unavailable`,
                })
              : (0, Q.jsx)(F, {
                  id: `cancelSubscriptionProLiteDowngradeModal.title`,
                  defaultMessage: `Keep Pro for {price}/month?`,
                  description: `Offers a Pro subscriber the lower Pro tier before cancellation; price is the actual localized monthly price`,
                  values: { price: E },
                })),
          (t[22] = E),
          (t[23] = e)),
        (k = e));
      let n;
      (t[24] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, Q.jsx)(F, {
            id: `cancelSubscriptionProLiteDowngradeModal.description`,
            defaultMessage: `Keep all your Pro features with reduced usage limits for a lower price`,
            description: `Describes the lower Pro tier offered during cancellation`,
          })),
          (t[24] = n))
        : (n = t[24]),
        (A = n));
      let r;
      (t[25] === E
        ? (r = t[26])
        : ((r =
            E == null
              ? (0, Q.jsx)(F, {
                  id: `settings.consumerBilling.cancellation.reviewProOffer`,
                  defaultMessage: `Review plan change`,
                  description: `Opens the actual Pro downgrade preview when the interception card could not display its price`,
                })
              : (0, Q.jsx)(F, {
                  id: `cancelSubscriptionProLiteDowngradeModal.downgradeButtonLabel`,
                  defaultMessage: `Switch to {price}`,
                  description: `Opens the Pro downgrade confirmation; price is the actual localized monthly price of the lower tier`,
                  values: { price: E },
                })),
          (t[25] = E),
          (t[26] = r)),
        (j = r));
    }
  }
  if (i === `go_offer` || i === `go_trial` || D) {
    let e;
    t[27] === A
      ? (e = t[28])
      : ((e = (0, Q.jsx)(f, {
          className: `text-base leading-normal tracking-normal text-codex-description`,
          children: A,
        })),
        (t[27] = A),
        (t[28] = e));
    let n;
    t[29] === c
      ? (n = t[30])
      : ((n = c == null ? null : (0, Q.jsx)(ft, { result: c })), (t[29] = c), (t[30] = n));
    let r;
    t[31] !== l || t[32] !== e || t[33] !== n
      ? ((r = (0, Q.jsxs)(Q.Fragment, { children: [e, n, l] })),
        (t[31] = l),
        (t[32] = e),
        (t[33] = n),
        (t[34] = r))
      : (r = t[34]);
    let a = i === `plus_offer` ? `plus` : `go`,
      m;
    t[35] !== _ || t[36] !== a
      ? ((m = (0, Q.jsx)(en, { plan: a, designVariant: _ })), (t[35] = _), (t[36] = a), (t[37] = m))
      : (m = t[37]);
    let h = o ? `primary` : void 0,
      v;
    t[38] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((v = (0, Q.jsx)(F, {
          id: `cancelSubscriptionRetentionModal.noThanks`,
          defaultMessage: `No thanks`,
          description: `Continues cancellation without accepting the retention offer`,
        })),
        (t[38] = v))
      : (v = t[38]);
    let b;
    t[39] !== o || t[40] !== p
      ? ((b = () => {
          o || p();
        }),
        (t[39] = o),
        (t[40] = p),
        (t[41] = b))
      : (b = t[41]);
    let x;
    t[42] === g
      ? (x = t[43])
      : ((x = () => {
          y.current || ((y.current = !0), g());
        }),
        (t[42] = g),
        (t[43] = x));
    let S;
    return (
      t[44] !== j ||
      t[45] !== O ||
      t[46] !== s ||
      t[47] !== u ||
      t[48] !== d ||
      t[49] !== m ||
      t[50] !== h ||
      t[51] !== b ||
      t[52] !== x ||
      t[53] !== r ||
      t[54] !== k
        ? ((S = (0, Q.jsx)(H, {
            asForm: !0,
            theme: `light`,
            title: k,
            hasDescription: !0,
            body: r,
            media: m,
            closeButtonTone: `dark`,
            pendingAction: h,
            primaryActionDisabled: s,
            secondaryActionDisabled: O,
            primaryActionLabel: j,
            dismissLabel: v,
            onPrimaryAction: u,
            onSecondaryAction: d,
            onDismiss: b,
            onOpenAutoFocus: x,
          })),
          (t[44] = j),
          (t[45] = O),
          (t[46] = s),
          (t[47] = u),
          (t[48] = d),
          (t[49] = m),
          (t[50] = h),
          (t[51] = b),
          (t[52] = x),
          (t[53] = r),
          (t[54] = k),
          (t[55] = S))
        : (S = t[55]),
      S
    );
  }
  let M;
  t[56] !== s || t[57] !== u
    ? ((M = () => {
        s || u();
      }),
      (t[56] = s),
      (t[57] = u),
      (t[58] = M))
    : (M = t[58]);
  let N;
  t[59] === A
    ? (N = t[60])
    : ((N = (0, Q.jsx)(R, { children: (0, Q.jsx)(`p`, { className: `text-secondary`, children: A }) })),
      (t[59] = A),
      (t[60] = N));
  let ae;
  t[61] !== i || t[62] !== te
    ? ((ae = i === `pro_offer` && te ? (0, Q.jsx)(R, { children: (0, Q.jsx)(st, {}) }) : null),
      (t[61] = i),
      (t[62] = te),
      (t[63] = ae))
    : (ae = t[63]);
  let P;
  t[64] === c
    ? (P = t[65])
    : ((P = c == null ? null : (0, Q.jsx)(R, { children: (0, Q.jsx)(ft, { result: c }) })),
      (t[64] = c),
      (t[65] = P));
  let oe;
  t[66] === l
    ? (oe = t[67])
    : ((oe = l == null ? null : (0, Q.jsx)(R, { children: l })), (t[66] = l), (t[67] = oe));
  let I;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Q.jsx)(F, {
        id: `cancelSubscriptionRetentionModal.noThanks`,
        defaultMessage: `No thanks`,
        description: `Continues cancellation without accepting the retention offer`,
      })),
      (t[68] = I))
    : (I = t[68]);
  let L;
  t[69] !== O || t[70] !== d
    ? ((L = (0, Q.jsx)(re, { color: `secondary`, disabled: O, type: `button`, onClick: d, children: I })),
      (t[69] = O),
      (t[70] = d),
      (t[71] = L))
    : (L = t[71]);
  let se;
  t[72] !== j || t[73] !== o || t[74] !== s
    ? ((se = (0, Q.jsx)(re, { disabled: s, loading: o, type: `submit`, children: j })),
      (t[72] = j),
      (t[73] = o),
      (t[74] = s),
      (t[75] = se))
    : (se = t[75]);
  let z;
  t[76] !== L || t[77] !== se
    ? ((z = (0, Q.jsx)(R, { children: (0, Q.jsxs)(m, { children: [L, se] }) })),
      (t[76] = L),
      (t[77] = se),
      (t[78] = z))
    : (z = t[78]);
  let B;
  return (
    t[79] !== o ||
    t[80] !== p ||
    t[81] !== g ||
    t[82] !== oe ||
    t[83] !== z ||
    t[84] !== M ||
    t[85] !== N ||
    t[86] !== ae ||
    t[87] !== P ||
    t[88] !== k
      ? ((B = (0, Q.jsxs)(ot, {
          title: k,
          busy: o,
          onClose: p,
          onShown: g,
          onSubmit: M,
          children: [N, ae, P, oe, z],
        })),
        (t[79] = o),
        (t[80] = p),
        (t[81] = g),
        (t[82] = oe),
        (t[83] = z),
        (t[84] = M),
        (t[85] = N),
        (t[86] = ae),
        (t[87] = P),
        (t[88] = k),
        (t[89] = B))
      : (B = t[89]),
    B
  );
}
var dn, fn, Q;
function pn() {
  return (pn = e(() => {
    ((dn = _()), j(), (fn = o()), w(), ue(), E(), d(), l(), q(), dt(), ln(), ht(), zt(), (Q = p()));
  }))();
}
function mn() {
  return (mn = e(() => {
    (_(), O(), p());
  }))();
}
function hn() {
  return (hn = e(() => {
    (v(), mn(), p());
  }))();
}
function gn(e) {
  let r = (0, _n.c)(114),
    { account: i, accountId: a, promotion: o, onBack: s, onClose: c } = e,
    l = n(b),
    u = ie(),
    { client: d } = pe(),
    f = (0, vn.useRef)(!1),
    p;
  r[0] !== a || r[1] !== o ? ((p = Nt(a, o)), (r[0] = a), (r[1] = o), (r[2] = p)) : (p = r[2]);
  let { data: g, isPending: _, isFetching: v, isError: y, refetch: x } = h(p),
    S;
  r[3] !== i.entitlement.billing_currency || r[4] !== a || r[5] !== d
    ? ((S = Mt(a, i.entitlement.billing_currency, d)),
      (r[3] = i.entitlement.billing_currency),
      (r[4] = a),
      (r[5] = d),
      (r[6] = S))
    : (S = r[6]);
  let { data: C, isPending: ee, isError: te, refetch: ne } = h(S),
    w;
  r[7] !== a || r[8] !== o || r[9] !== l
    ? ((w = {
        mutationFn: async () => {
          let e = await Ft(a, o);
          return (await Me(l, a), e);
        },
        retry: !1,
      }),
      (r[7] = a),
      (r[8] = o),
      (r[9] = l),
      (r[10] = w))
    : (w = r[10]);
  let { mutate: T, data: E, isPending: D, isError: O } = se(w),
    k = i.account.plan_type,
    A;
  r[11] !== k || r[12] !== C?.currency_config
    ? ((A = fe(k) ? C?.currency_config[k]?.month?.amount : void 0),
      (r[11] = k),
      (r[12] = C?.currency_config),
      (r[13] = A))
    : (A = r[13]);
  let j = A,
    M;
  r[14] !== j || r[15] !== g || r[16] !== C
    ? ((M =
        C != null &&
        j != null &&
        g != null &&
        g.currency.toUpperCase() === C.currency_config.symbol_code.toUpperCase()),
      (r[14] = j),
      (r[15] = g),
      (r[16] = C),
      (r[17] = M))
    : (M = r[17]);
  let N = M,
    oe = N && !_ && !ee && !v && !y && !te,
    I = O ? `unknown` : E,
    L = o.duration?.num_periods ?? 1,
    z = g?.default_payment_method,
    B,
    ce,
    le,
    ue,
    de,
    V,
    H,
    U,
    me,
    W;
  if (
    r[18] !== N ||
    r[19] !== u ||
    r[20] !== D ||
    r[21] !== T ||
    r[22] !== L ||
    r[23] !== c ||
    r[24] !== I ||
    r[25] !== z ||
    r[26] !== k ||
    r[27] !== j ||
    r[28] !== g ||
    r[29] !== y ||
    r[30] !== _ ||
    r[31] !== C ||
    r[32] !== te ||
    r[33] !== ee ||
    r[34] !== o.campaign_id ||
    r[35] !== o.discount ||
    r[36] !== o.summary ||
    r[37] !== oe ||
    r[38] !== x ||
    r[39] !== ne ||
    r[40] !== l
  ) {
    let e = z?.card_brand?.trim(),
      n;
    r[51] === z?.card_last4
      ? (n = r[52])
      : ((n = z?.card_last4?.trim()), (r[51] = z?.card_last4), (r[52] = n));
    let i = n;
    ce = oe && !D && I == null;
    let a;
    r[53] !== ce || r[54] !== u || r[55] !== T || r[56] !== c || r[57] !== o.campaign_id || r[58] !== l
      ? ((a = () => {
          ce &&
            !f.current &&
            ((f.current = !0),
            X(l, `chatgpt_claim_subscription_cancellation_promotion_modal_pay_now_button_clicked`),
            T(void 0, {
              onSuccess: (e) => {
                if (e !== `success`) {
                  e !== `pending` &&
                    X(l, `chatgpt_claim_subscription_cancellation_promotion_error`, {
                      promo_id: o.campaign_id,
                      ...(e === `card_declined` ? { error_type: `card_declined` } : {}),
                    });
                  return;
                }
                (X(l, `chatgpt_claim_subscription_cancellation_promotion_success`, {
                  promo_id: o.campaign_id,
                }),
                  l
                    .get(ae)
                    .success(
                      u.formatMessage({
                        id: `cancelPromoClaimModal.successfullyClaimedPromotion`,
                        defaultMessage: `You've successfully claimed your promotion`,
                        description: `Notification after the server confirms an immediately invoiced cancellation promotion`,
                      }),
                    ),
                  c());
              },
            }));
        }),
        (r[53] = ce),
        (r[54] = u),
        (r[55] = T),
        (r[56] = c),
        (r[57] = o.campaign_id),
        (r[58] = l),
        (r[59] = a))
      : (a = r[59]);
    let s = a,
      d = y || te || (!_ && !ee && !N),
      p = o.summary;
    if (`percentage` in o.discount) {
      let e;
      (r[60] !== L || r[61] !== o.discount.percentage
        ? ((e = (0, $.jsx)(F, {
            id: `cancelPromoClaimModal.percentageDiscountInfo`,
            defaultMessage: `{discountPercentage}% off for {numPeriods, plural, one {1 month} other {{numPeriods} months}}`,
            description: `Percentage discount and duration in the retention offer invoice preview`,
            values: { discountPercentage: o.discount.percentage, numPeriods: L },
          })),
          (r[60] = L),
          (r[61] = o.discount.percentage),
          (r[62] = e))
        : (e = r[62]),
        (p = e));
    } else if (`value` in o.discount) {
      let e;
      r[63] !== u || r[64] !== o.discount.currency_code || r[65] !== o.discount.value
        ? ((e = u.formatNumber(o.discount.value, {
            style: `currency`,
            currency: o.discount.currency_code,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          })),
          (r[63] = u),
          (r[64] = o.discount.currency_code),
          (r[65] = o.discount.value),
          (r[66] = e))
        : (e = r[66]);
      let t;
      (r[67] !== L || r[68] !== e
        ? ((t = (0, $.jsx)(F, {
            id: `cancelPromoClaimModal.valueDiscountInfo`,
            defaultMessage: `{valueOff} off for {numPeriods, plural, one {1 month} other {{numPeriods} months}}`,
            description: `Fixed discount and duration in the retention offer invoice preview; valueOff is localized with currency`,
            values: { valueOff: e, numPeriods: L },
          })),
          (r[67] = L),
          (r[68] = e),
          (r[69] = t))
        : (t = r[69]),
        (p = t));
    }
    ((B = ot),
      r[70] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((H = (0, $.jsx)(F, {
            id: `cancelPromoClaimModal.title`,
            defaultMessage: `Confirm changes`,
            description: `Title for modal claiming a subscription cancellation promotion`,
          })),
          (r[70] = H))
        : (H = r[70]),
      (U = D),
      r[71] !== c || r[72] !== l
        ? ((me = () => {
            (X(l, `chatgpt_claim_subscription_cancellation_promotion_modal_close`), c());
          }),
          (r[71] = c),
          (r[72] = l),
          (r[73] = me))
        : (me = r[73]),
      r[74] === l
        ? (W = r[75])
        : ((W = () => {
            X(l, `chatgpt_claim_subscription_cancellation_promotion_modal_shown`);
          }),
          (r[74] = l),
          (r[75] = W)),
      (le = s),
      r[76] !== d || r[77] !== x || r[78] !== ne
        ? ((ue = d
            ? (0, $.jsx)(R, {
                children: (0, $.jsx)(Pe, {
                  onRetry: () => {
                    (x(), ne());
                  },
                }),
              })
            : null),
          (r[76] = d),
          (r[77] = x),
          (r[78] = ne),
          (r[79] = ue))
        : (ue = r[79]),
      r[80] !== d || r[81] !== j || r[82] !== g || r[83] !== C
        ? ((de =
            !d && (g == null || C == null || j == null)
              ? (0, $.jsx)(R, { children: (0, $.jsx)(st, {}) })
              : null),
          (r[80] = d),
          (r[81] = j),
          (r[82] = g),
          (r[83] = C),
          (r[84] = de))
        : (de = r[84]),
      (V =
        !d && g != null && C != null && j != null
          ? (0, $.jsx)($.Fragment, {
              children: (0, $.jsx)(R, {
                children: (0, $.jsxs)(t, {
                  children: [
                    (0, $.jsx)(P, {
                      label: (0, $.jsx)(F, {
                        id: `cancelPromoClaimModal.subscription.numberedTiers`,
                        defaultMessage: `ChatGPT {planType, select, go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {Pro}} for {numPeriods, plural, one {1 month} other {{numPeriods} months}}`,
                        description: `Subscription plan and number of months covered by an immediately invoiced retention offer. planType is the stored plan identifier; Pro tier names are Pro 100, Pro 200, and Pro 500. numPeriods is the number of months. The numbers in Pro plan names are fixed SKU names, not localized prices.`,
                        values: { planType: k, numPeriods: L },
                      }),
                      description: (0, $.jsx)(F, {
                        id: `settings.consumerBilling.cancellation.promotionBillingCycle`,
                        defaultMessage: `One-time payment, then {planCost}/month after {numPeriods, plural, one {1 month} other {{numPeriods} months}}`,
                        description: `Ongoing billing terms for an immediately invoiced retention offer; planCost includes the actual billing currency`,
                        values: {
                          planCost: u.formatNumber(j, {
                            style: `currency`,
                            currency: C.currency_config.symbol_code,
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2,
                          }),
                          numPeriods: L,
                        },
                      }),
                      control: Ae(u, g.positive_line_item_total_excluding_tax, g.currency),
                    }),
                    g.negative_line_item_total === 0
                      ? null
                      : (0, $.jsx)(P, {
                          label: (0, $.jsx)(F, {
                            id: `cancelPromoClaimModal.adjustment`,
                            defaultMessage: `Adjustment`,
                            description: `Prorated credit line in the retention offer invoice preview`,
                          }),
                          description: (0, $.jsx)(F, {
                            id: `cancelPromoClaimModal.proratedCreditInfo.currentSubscription`,
                            defaultMessage: `Prorated credit for the remainder of your current subscription`,
                            description: `Explains the credit for unused time on the current subscription in a retention offer invoice preview. No placeholders.`,
                          }),
                          control: Ae(u, -Math.abs(g.negative_line_item_total), g.currency),
                        }),
                    g.discount_amount === 0
                      ? null
                      : (0, $.jsx)(P, {
                          label: (0, $.jsx)(F, {
                            id: `cancelPromoClaimModal.discount`,
                            defaultMessage: `Discount`,
                            description: `Discount line in the retention offer invoice preview`,
                          }),
                          description: p,
                          control: Ae(u, -Math.abs(g.discount_amount), g.currency),
                        }),
                    g.amount_due.tax_amount > 0
                      ? (0, $.jsxs)($.Fragment, {
                          children: [
                            (0, $.jsx)(P, {
                              label: (0, $.jsx)(F, {
                                id: `settings.consumerBilling.cancellation.promotionSubtotal`,
                                defaultMessage: `Subtotal`,
                                description: `Actual subtotal due before tax in the retention invoice preview`,
                              }),
                              control: Ae(u, g.amount_due.amount_excluding_tax, g.currency),
                            }),
                            (0, $.jsx)(P, {
                              label: (0, $.jsx)(F, {
                                id: `settings.consumerBilling.cancellation.promotionTax`,
                                defaultMessage: `Tax {taxPercent}%`,
                                description: `Tax rate on the retention offer; taxPercent is the rounded rate calculated from actual tax and subtotal`,
                                values: {
                                  taxPercent:
                                    g.amount_due.amount_excluding_tax > 0
                                      ? Math.round(
                                          (g.amount_due.tax_amount / g.amount_due.amount_excluding_tax) * 100,
                                        )
                                      : 0,
                                },
                              }),
                              control: Ae(u, g.amount_due.tax_amount, g.currency),
                            }),
                          ],
                        })
                      : null,
                    (0, $.jsx)(P, {
                      label: (0, $.jsx)(F, {
                        id: `settings.consumerBilling.cancellation.promotionDueToday`,
                        defaultMessage: `Total due today`,
                        description: `Actual amount due now, including any credits and tax, in a retention invoice preview`,
                      }),
                      control: Ae(u, g.amount_due.amount, g.currency),
                    }),
                    z == null
                      ? null
                      : (0, $.jsx)(P, {
                          label: (0, $.jsx)(F, {
                            id: `settings.consumerBilling.cancellation.promotionPaymentMethod`,
                            defaultMessage: `Payment method`,
                            description: `Saved payment method that will be used for the retention offer`,
                          }),
                          control:
                            e && i
                              ? (0, $.jsx)(F, {
                                  id: `settings.consumerBilling.cancellation.promotionCard`,
                                  defaultMessage: `{brand} ending in {last4}`,
                                  description: `Saved card used for a retention offer; brand is the actual card brand and last4 are only the final four digits`,
                                  values: { brand: e.toUpperCase(), last4: i },
                                })
                              : e || i,
                        }),
                  ],
                }),
              }),
            })
          : null),
      (r[18] = N),
      (r[19] = u),
      (r[20] = D),
      (r[21] = T),
      (r[22] = L),
      (r[23] = c),
      (r[24] = I),
      (r[25] = z),
      (r[26] = k),
      (r[27] = j),
      (r[28] = g),
      (r[29] = y),
      (r[30] = _),
      (r[31] = C),
      (r[32] = te),
      (r[33] = ee),
      (r[34] = o.campaign_id),
      (r[35] = o.discount),
      (r[36] = o.summary),
      (r[37] = oe),
      (r[38] = x),
      (r[39] = ne),
      (r[40] = l),
      (r[41] = B),
      (r[42] = ce),
      (r[43] = le),
      (r[44] = ue),
      (r[45] = de),
      (r[46] = V),
      (r[47] = H),
      (r[48] = U),
      (r[49] = me),
      (r[50] = W));
  } else
    ((B = r[41]),
      (ce = r[42]),
      (le = r[43]),
      (ue = r[44]),
      (de = r[45]),
      (V = r[46]),
      (H = r[47]),
      (U = r[48]),
      (me = r[49]),
      (W = r[50]));
  let G;
  r[85] === I
    ? (G = r[86])
    : ((G = I == null ? null : (0, $.jsx)(R, { children: (0, $.jsx)(ft, { result: I }) })),
      (r[85] = I),
      (r[86] = G));
  let he = D || (I != null && I !== `delinquent_subscription`),
    ge;
  r[87] !== s || r[88] !== I || r[89] !== l
    ? ((ge = () => {
        (X(l, `chatgpt_claim_subscription_cancellation_promotion_modal_back_button_clicked`), s(I));
      }),
      (r[87] = s),
      (r[88] = I),
      (r[89] = l),
      (r[90] = ge))
    : (ge = r[90]);
  let _e;
  r[91] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, $.jsx)(F, {
        id: `cancelPromoClaimModal.cancel`,
        defaultMessage: `Cancel`,
        description: `Returns from the retention offer invoice preview without claiming the offer`,
      })),
      (r[91] = _e))
    : (_e = r[91]);
  let ve;
  r[92] !== he || r[93] !== ge
    ? ((ve = (0, $.jsx)(re, { color: `secondary`, disabled: he, type: `button`, onClick: ge, children: _e })),
      (r[92] = he),
      (r[93] = ge),
      (r[94] = ve))
    : (ve = r[94]);
  let ye = !ce,
    K;
  r[95] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, $.jsx)(F, {
        id: `cancelPromoClaimModal.payNow`,
        defaultMessage: `Pay now`,
        description: `Applies the immediately invoiced retention offer after review of the actual payment amount`,
      })),
      (r[95] = K))
    : (K = r[95]);
  let q;
  r[96] !== D || r[97] !== ye
    ? ((q = (0, $.jsx)(re, { disabled: ye, loading: D, type: `submit`, children: K })),
      (r[96] = D),
      (r[97] = ye),
      (r[98] = q))
    : (q = r[98]);
  let be;
  r[99] !== ve || r[100] !== q
    ? ((be = (0, $.jsx)(R, { children: (0, $.jsxs)(m, { children: [ve, q] }) })),
      (r[99] = ve),
      (r[100] = q),
      (r[101] = be))
    : (be = r[101]);
  let xe;
  return (
    r[102] !== B ||
    r[103] !== le ||
    r[104] !== ue ||
    r[105] !== de ||
    r[106] !== V ||
    r[107] !== G ||
    r[108] !== be ||
    r[109] !== H ||
    r[110] !== U ||
    r[111] !== me ||
    r[112] !== W
      ? ((xe = (0, $.jsxs)(B, {
          title: H,
          busy: U,
          onClose: me,
          onShown: W,
          onSubmit: le,
          children: [ue, de, V, G, be],
        })),
        (r[102] = B),
        (r[103] = le),
        (r[104] = ue),
        (r[105] = de),
        (r[106] = V),
        (r[107] = G),
        (r[108] = be),
        (r[109] = H),
        (r[110] = U),
        (r[111] = me),
        (r[112] = W),
        (r[113] = xe))
      : (xe = r[113]),
    xe
  );
}
var _n, vn, $;
function yn() {
  return (yn = e(() => {
    ((_n = _()),
      I(),
      j(),
      D(),
      (vn = o()),
      w(),
      E(),
      l(),
      te(),
      ye(),
      r(),
      oe(),
      k(),
      q(),
      ke(),
      je(),
      Ne(),
      Yt(),
      dt(),
      ht(),
      zt(),
      ($ = p()));
  }))();
}
function bn(e) {
  let t = (0, Sn.c)(22),
    { account: n, accountId: r, onClose: i } = e,
    a = G(),
    o;
  t[0] !== n || t[1] !== r || t[2] !== a.accountId || t[3] !== a.authMethod
    ? ((o =
        a.authMethod === `chatgpt` &&
        a.accountId === r &&
        n.account.account_id === r &&
        n.account.structure === `personal` &&
        n.entitlement.has_active_subscription === !0 &&
        (!n.entitlement.is_active_subscription_gratis || He(n)) &&
        ze(n) == null),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a.accountId),
      (t[3] = a.authMethod),
      (t[4] = o))
    : (o = t[4]);
  let s = o,
    c;
  t[5] !== n || t[6] !== s
    ? ((c =
        s &&
        !n.entitlement.is_active_subscription_gratis &&
        n.entitlement.is_eligible_for_cp === !0 &&
        n.entitlement.discount?.promo_campaign_id !== `students-2026-four-month-free` &&
        !vt(n)),
      (t[5] = n),
      (t[6] = s),
      (t[7] = c))
    : (c = t[7]);
  let l = c,
    u;
  t[8] === r ? (u = t[9]) : ((u = jt(r)), (t[8] = r), (t[9] = u));
  let d;
  t[10] !== l || t[11] !== u
    ? ((d = { ...u, enabled: l, staleTime: 0 }), (t[10] = l), (t[11] = u), (t[12] = d))
    : (d = t[12]);
  let { data: f, isPending: p } = h(d);
  if (!s || (l && p)) {
    let e;
    t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, wn.jsx)(F, {
          id: `cancelSubscriptionModal.title`,
          defaultMessage: `Subscription Cancellation`,
          description: `Title for the consumer subscription cancellation confirmation`,
        })),
        (t[13] = e))
      : (e = t[13]);
    let n;
    t[14] === s
      ? (n = t[15])
      : ((n = (0, wn.jsx)(R, {
          children: s
            ? (0, wn.jsx)(st, {})
            : (0, wn.jsx)(`p`, {
                role: `alert`,
                children: (0, wn.jsx)(F, {
                  id: `settings.consumerBilling.cancellation.unavailable`,
                  defaultMessage: `This subscription can no longer be canceled here. Review your subscription in Billing.`,
                  description: `Shown when the account or subscription no longer matches the web-managed consumer cancellation entry`,
                }),
              }),
        })),
        (t[14] = s),
        (t[15] = n));
    let r;
    return (
      t[16] !== i || t[17] !== n
        ? ((r = (0, wn.jsx)(ot, { title: e, onClose: i, children: n })),
          (t[16] = i),
          (t[17] = n),
          (t[18] = r))
        : (r = t[18]),
      r
    );
  }
  let m = l ? (f ?? null) : null,
    g;
  return (
    t[19] !== e || t[20] !== m
      ? ((g = (0, wn.jsx)(xn, { ...e, promotion: m })), (t[19] = e), (t[20] = m), (t[21] = g))
      : (g = t[21]),
    g
  );
}
function xn(e) {
  let t = (0, Sn.c)(115),
    { accountId: r, account: i, promotion: a, onClose: o } = e,
    c = n(b),
    l = ie(),
    u = G(),
    { client: d } = pe(),
    f;
  t[0] !== i || t[1] !== d || t[2] !== a
    ? ((f = () => ({ step: gt(i, a, d), previous: [] })), (t[0] = i), (t[1] = d), (t[2] = a), (t[3] = f))
    : (f = t[3]);
  let [p, m] = (0, Cn.useState)(f),
    h = (0, Cn.useRef)(!1),
    g = (0, Cn.useRef)(void 0),
    _ = (0, Cn.useRef)(void 0),
    v,
    y;
  (t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = () => () => {
        (g.current?.close(), _.current?.());
      }),
      (y = []),
      (t[4] = v),
      (t[5] = y))
    : ((v = t[4]), (y = t[5])),
    (0, Cn.useEffect)(v, y));
  let { step: x, previous: S } = p,
    C;
  t[6] !== r || t[7] !== c
    ? ((C = {
        mutationFn: async (e) => {
          let t = await Ft(r, e);
          return (await Me(c, r), t);
        },
        retry: !1,
      }),
      (t[6] = r),
      (t[7] = c),
      (t[8] = C))
    : (C = t[8]);
  let { mutate: te, data: ne, isPending: w, isError: re } = se(C),
    T;
  t[9] !== i || t[10] !== r || t[11] !== c
    ? ((T = {
        mutationFn: async (e) => {
          let { returnToGo: t, storage: n, logAttempt: a } = e;
          try {
            let e = await Lt({
              scope: c,
              accountId: r,
              account: i,
              returnToGo: t,
              storage: n,
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
      (t[10] = r),
      (t[11] = c),
      (t[12] = T))
    : (T = t[12]);
  let { mutate: E, data: D, isPending: O, reset: k } = se(T),
    j = re ? `unknown` : ne,
    M = w || O,
    N = j != null,
    P = N && j !== `delinquent_subscription`,
    oe;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (e, t) => {
        let n = t === void 0 || t;
        m((t) => {
          let { step: r, previous: i } = t;
          return { step: e, previous: n ? [...i, r] : [] };
        });
      }),
      (t[13] = oe))
    : (oe = t[13]);
  let I = oe,
    L,
    R;
  t[14] !== M || t[15] !== P || t[16] !== o || t[17] !== S || t[18] !== c || t[19] !== x.page
    ? ((L = () => {
        if (M || P) return;
        let e = S.at(-1);
        if (e == null) {
          R();
          return;
        }
        m({ step: e, previous: S.slice(0, -1) });
      }),
      (R = () => {
        if (!M) {
          bb111: switch (x.page) {
            case `confirm`:
              X(c, `chatgpt_cancel_subscription_modal_dismissed`);
              break bb111;
            case `plus_offer`:
              X(c, `chatgpt_cancel_subscription_plus_offer_modal_dismissed`);
              break bb111;
            case `go_offer`:
            case `go_trial`:
              X(c, `chatgpt_cancel_subscription_go_upsell_modal_dismissed`);
              break bb111;
          }
          o();
        }
      }),
      (t[14] = M),
      (t[15] = P),
      (t[16] = o),
      (t[17] = S),
      (t[18] = c),
      (t[19] = x.page),
      (t[20] = L),
      (t[21] = R))
    : ((L = t[20]), (R = t[21]));
  let z;
  t[22] !== a || t[23] !== c || t[24] !== x.page || t[25] !== x.skipPromotion
    ? ((z = () => {
        bb126: switch (x.page) {
          case `confirm`:
            (X(c, `chatgpt_cancel_subscription_modal_shown`),
              !x.skipPromotion &&
                a != null &&
                X(c, `chatgpt_cancel_subscription_modal_with_cancellation_promo_shown`, {
                  promo_id: a.campaign_id,
                }));
            break bb126;
          case `plus_offer`:
            X(c, `chatgpt_cancel_subscription_plus_offer_modal_shown`);
            break bb126;
          case `go_offer`:
          case `go_trial`:
            X(c, `chatgpt_cancel_subscription_go_upsell_modal_shown`);
            break bb126;
        }
      }),
      (t[22] = a),
      (t[23] = c),
      (t[24] = x.page),
      (t[25] = x.skipPromotion),
      (t[26] = z))
    : (z = t[26]);
  let B = z,
    le;
  t[27] !== M ||
  t[28] !== te ||
  t[29] !== N ||
  t[30] !== l ||
  t[31] !== o ||
  t[32] !== a ||
  t[33] !== c ||
  t[34] !== x
    ? ((le = () => {
        if (!(M || N || h.current)) {
          if (a == null) {
            I({ page: `confirm`, skipPromotion: !0, flow: `flow` in x ? x.flow : void 0 }, !1);
            return;
          }
          if (a.is_immediately_invoiced) {
            (x.page === `confirm` &&
              X(c, `chatgpt_cancel_subscription_modal_claim_offer_offer_button_clicked`),
              x.page === `plus_offer` && x.flow == null
                ? m({
                    step: { page: `claim`, promotion: a },
                    previous: [{ page: `confirm`, skipPromotion: !1 }],
                  })
                : I({ page: `claim`, promotion: a }));
            return;
          }
          ((h.current = !0),
            te(a, {
              onSuccess: (e) => {
                if (e !== `success`) {
                  e !== `pending` &&
                    X(c, `chatgpt_claim_subscription_cancellation_promotion_error`, {
                      promo_id: a.campaign_id,
                    });
                  return;
                }
                X(c, `chatgpt_claim_subscription_cancellation_promotion_success`, {
                  promo_id: a.campaign_id,
                });
                let t = `percentage` in a.discount && a.discount.percentage === 100;
                (c
                  .get(ae)
                  .success(
                    t
                      ? l.formatMessage({
                          id: `cancelSubscriptionModal.successfullyUpdatedSubscriptionWithFreePromo`,
                          defaultMessage: `Your subscription has been updated and will auto-renew for free during your next billing cycle`,
                          description: `Success notification after a scheduled free retention promotion is applied`,
                        })
                      : l.formatMessage({
                          id: `cancelSubscriptionModal.successfullyUpdatedSubscriptionWithScheduledDiscountPromo`,
                          defaultMessage: `Your subscription has been updated and will auto-renew at the discounted rate during your next billing cycle`,
                          description: `Success notification after a scheduled discounted retention promotion is applied`,
                        }),
                  ),
                  o());
              },
              onSettled: () => {
                h.current = !1;
              },
            }));
        }
      }),
      (t[27] = M),
      (t[28] = te),
      (t[29] = N),
      (t[30] = l),
      (t[31] = o),
      (t[32] = a),
      (t[33] = c),
      (t[34] = x),
      (t[35] = le))
    : (le = t[35]);
  let ue = le,
    de;
  t[36] !== i ||
  t[37] !== r ||
  t[38] !== u ||
  t[39] !== M ||
  t[40] !== E ||
  t[41] !== P ||
  t[42] !== d ||
  t[43] !== l ||
  t[44] !== o ||
  t[45] !== c
    ? ((de = (e) => {
        if (M || P || h.current) return;
        let t = i.last_active_subscription.subscription_id ?? i.entitlement.subscription_id;
        if (t == null) return;
        e || X(c, `chatgpt_cancel_subscription_modal_confirmation_button_clicked`);
        let n;
        if (e)
          try {
            n = window.sessionStorage;
          } catch {}
        let a = performance.now(),
          f = !e && d.checkGate(`3376055906`),
          p = f && !s() && !ee() && d.checkGate(`1348177552`),
          m,
          v = (e, t, n) => {
            try {
              ((m ??= crypto.randomUUID()),
                K(c, Se, {
                  attemptId: m,
                  stage: e,
                  outcome: t,
                  surveyEnabled: f,
                  preopenEnabled: p,
                  elapsedMs: Math.round(performance.now() - a),
                  httpStatus:
                    n instanceof A && n.errorKind !== `network` ? (n.responseStatus ?? void 0) : void 0,
                }));
            } catch {}
          };
        v(`cancellation`, `started`);
        let y = f && !0;
        ((g.current = void 0),
          (_.current = f ? () => v(`survey`, `dialog_abandoned`) : void 0),
          (h.current = !0),
          E(
            { returnToGo: e, storage: n, logAttempt: v },
            {
              onSuccess: (n) => {
                if (
                  ((_.current = void 0),
                  (n === `canceled` || n === `deactivated`) && (f || v(`survey`, `not_eligible`)),
                  n === `reload` || (e && n === `failed`))
                ) {
                  window.location.reload();
                  return;
                }
                if (n === `state_changed`) {
                  (o(), Me(c, r));
                  return;
                }
                if (n === `returned_to_go`) {
                  (c
                    .get(ae)
                    .info(
                      l.formatMessage({
                        id: `cancelSubscriptionGoUpsellModal.returnToGoSuccess`,
                        defaultMessage: `You returned to Go`,
                        description: `Notification after an authoritative account read confirms the Go-origin Plus trial ended and Go was restored`,
                      }),
                    ),
                    o());
                  return;
                }
                if (n !== `canceled` && n !== `deactivated`) {
                  n === `failed` && X(c, `chatgpt_cancel_subscription_modal_cancel_failed`);
                  return;
                }
                if (
                  (X(c, `chatgpt_cancel_subscription_modal_cancel_success`),
                  c
                    .get(ae)
                    .info(
                      n === `deactivated`
                        ? l.formatMessage({
                            id: `cancelSubscriptionModal.cancelPlusTrialSuccess`,
                            defaultMessage: `Your Plus trial has ended. You are now on Free.`,
                            description: `Notification after an authoritative account read confirms immediate deactivation of a Go-origin Plus trial`,
                          })
                        : l.formatMessage({
                            id: `settings.consumerBilling.cancellation.succeeded`,
                            defaultMessage: `Your subscription has been canceled`,
                            description: `Notification after the backend confirms cancellation of a consumer subscription`,
                          }),
                    ),
                  Me(c, r),
                  y)
                ) {
                  let e = new URL(`https://openai.qualtrics.com/jfe/form/SV_eW3mdeRdMrpnPLw`);
                  (e.searchParams.set(`subscription_id`, t),
                    i.account.plan_type != null && e.searchParams.set(`plan_type`, i.account.plan_type),
                    u.userId != null && e.searchParams.set(`oai_user`, u.userId));
                  let n = Math.round(performance.now() - a),
                    r;
                  ((r = ce({
                    href: e.toString(),
                    disposition: `new-tab`,
                    initiator: `open_in_browser_bridge`,
                    openTarget: `external-browser`,
                  })),
                    v(`survey`, r ? `native_dispatch_accepted` : `dispatch_failed`),
                    r &&
                      X(c, `chatgpt_subscription_cancellation_survey_shown`, {
                        cancel_to_window_open_ms: n,
                      }));
                }
                o();
              },
              onError: () => void 0,
              onSettled: () => {
                ((g.current = void 0), (_.current = void 0), (h.current = !1));
              },
            },
          ));
      }),
      (t[36] = i),
      (t[37] = r),
      (t[38] = u),
      (t[39] = M),
      (t[40] = E),
      (t[41] = P),
      (t[42] = d),
      (t[43] = l),
      (t[44] = o),
      (t[45] = c),
      (t[46] = de))
    : (de = t[46]);
  let V = de,
    fe;
  t[47] === D
    ? (fe = t[48])
    : ((fe =
        D != null && ![`canceled`, `deactivated`, `returned_to_go`].includes(D)
          ? (0, wn.jsx)(`p`, {
              role: `alert`,
              children: (0, wn.jsx)(F, {
                id: `settings.consumerBilling.cancellation.requestFailed`,
                defaultMessage: `{kind, select, return_pending {Your earlier request may still be processing. Reload Billing to check your subscription before trying again.} storage_unavailable {We couldn't safely record your request in this browser. Enable browser storage before returning to Go.} return_ready {Your subscription is unchanged. You can try returning to Go again.} other {We couldn't cancel your subscription. Please try again.}}`,
                description: `Failure or reconciliation status in cancellation. A pending Go-trial request must not be resent; unavailable browser storage prevents sending it.`,
                values: { kind: D },
              }),
            })
          : null),
      (t[47] = D),
      (t[48] = fe));
  let H = fe,
    me =
      x.page === `confirm` && x.flow?.offer != null && x.flow.variant === `refresh_with_personalized_loss`
        ? `by_the_numbers`
        : `standard`,
    W =
      (x.page === `plus_offer` || x.page === `go_offer`) && x.flow != null && x.flow.variant !== `control`
        ? `premium_refresh`
        : `legacy`;
  switch (x.page) {
    case `retention_loss`: {
      let e;
      t[49] === x.flow
        ? (e = t[50])
        : ((e = () => {
            x.flow.offer != null && I({ page: x.flow.offer, flow: x.flow }, !1);
          }),
          (t[49] = x.flow),
          (t[50] = e));
      let n;
      return (
        t[51] !== i || t[52] !== o || t[53] !== B || t[54] !== e
          ? ((n = (0, wn.jsx)(
              Xt,
              { account: i, onShown: B, onClose: o, onBack: o, onContinue: e },
              `retention_loss`,
            )),
            (t[51] = i),
            (t[52] = o),
            (t[53] = B),
            (t[54] = e),
            (t[55] = n))
          : (n = t[55]),
        n
      );
    }
    case `confirm`: {
      let e = x.skipPromotion ? null : a,
        n =
          P || (i.last_active_subscription.subscription_id == null && i.entitlement.subscription_id == null),
        o = x.skipPromotion ? void 0 : j,
        s;
      t[56] === V ? (s = t[57]) : ((s = () => V(!1)), (t[56] = V), (t[57] = s));
      let c;
      return (
        t[58] !== ue ||
        t[59] !== i ||
        t[60] !== r ||
        t[61] !== L ||
        t[62] !== M ||
        t[63] !== H ||
        t[64] !== me ||
        t[65] !== R ||
        t[66] !== B ||
        t[67] !== e ||
        t[68] !== n ||
        t[69] !== o ||
        t[70] !== s
          ? ((c = (0, wn.jsx)(
              Bt,
              {
                account: i,
                accountId: r,
                promotion: e,
                confirmationPresentation: me,
                busy: M,
                disabled: n,
                claimError: o,
                cancellationError: H,
                onCancel: s,
                onClaim: ue,
                onBack: L,
                onClose: R,
                onShown: B,
              },
              `confirm`,
            )),
            (t[58] = ue),
            (t[59] = i),
            (t[60] = r),
            (t[61] = L),
            (t[62] = M),
            (t[63] = H),
            (t[64] = me),
            (t[65] = R),
            (t[66] = B),
            (t[67] = e),
            (t[68] = n),
            (t[69] = o),
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
      let n;
      return (
        t[74] !== i || t[75] !== r || t[76] !== o || t[77] !== x.promotion || t[78] !== e
          ? ((n = (0, wn.jsx)(
              gn,
              { account: i, accountId: r, promotion: x.promotion, onBack: e, onClose: o },
              x.promotion.campaign_id,
            )),
            (t[74] = i),
            (t[75] = r),
            (t[76] = o),
            (t[77] = x.promotion),
            (t[78] = e),
            (t[79] = n))
          : (n = t[79]),
        n
      );
    }
    case `go_change`: {
      let e;
      return (
        t[80] !== i || t[81] !== r || t[82] !== L || t[83] !== o
          ? ((e = (0, wn.jsx)(We, { account: i, accountId: r, targetPlan: U.GO, onBack: L, onClose: o })),
            (t[80] = i),
            (t[81] = r),
            (t[82] = L),
            (t[83] = o),
            (t[84] = e))
          : (e = t[84]),
        e
      );
    }
    case `pro_change`: {
      let e;
      return (
        t[85] !== i || t[86] !== r || t[87] !== L || t[88] !== o
          ? ((e = (0, wn.jsx)(We, {
              account: i,
              accountId: r,
              targetPlan: U.PROLITE,
              onBack: L,
              onClose: o,
            })),
            (t[85] = i),
            (t[86] = r),
            (t[87] = L),
            (t[88] = o),
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
      t[90] !== i || t[91] !== d || t[92] !== a || t[93] !== x.flow || t[94] !== x.page
        ? ((e = () => {
            if (x.page === `pro_offer`) I(_t(i, a, d), !1);
            else {
              let e = x.page === `plus_offer` || x.page === `go_offer` ? x.flow : void 0;
              I(
                { page: `confirm`, skipPromotion: !0, flow: e },
                x.page === `go_trial` ||
                  e?.variant === `refresh_with_loss` ||
                  e?.variant === `refresh_with_personalized_loss`,
              );
            }
          }),
          (t[90] = i),
          (t[91] = d),
          (t[92] = a),
          (t[93] = x.flow),
          (t[94] = x.page),
          (t[95] = e))
        : (e = t[95]);
      let n;
      t[96] !== ue || t[97] !== D || t[98] !== k || t[99] !== x.page || t[100] !== V
        ? ((n = () => {
            bb507: switch (x.page) {
              case `plus_offer`:
                ue();
                break bb507;
              case `go_trial`:
                (D === `return_ready` && k(), V(!0));
                break bb507;
              case `pro_offer`:
                I({ page: `pro_change` });
                break bb507;
              case `go_offer`:
                I({ page: `go_change` });
            }
          }),
          (t[96] = ue),
          (t[97] = D),
          (t[98] = k),
          (t[99] = x.page),
          (t[100] = V),
          (t[101] = n))
        : (n = t[101]);
      let o;
      return (
        t[102] !== i ||
        t[103] !== r ||
        t[104] !== M ||
        t[105] !== H ||
        t[106] !== j ||
        t[107] !== N ||
        t[108] !== R ||
        t[109] !== W ||
        t[110] !== B ||
        t[111] !== x.page ||
        t[112] !== e ||
        t[113] !== n
          ? ((o = (0, wn.jsx)(
              un,
              {
                account: i,
                accountId: r,
                kind: x.page,
                designVariant: W,
                busy: M,
                disabled: N,
                error: j,
                cancellationError: H,
                onShown: B,
                onClose: R,
                onDecline: e,
                onAccept: n,
              },
              x.page,
            )),
            (t[102] = i),
            (t[103] = r),
            (t[104] = M),
            (t[105] = H),
            (t[106] = j),
            (t[107] = N),
            (t[108] = R),
            (t[109] = W),
            (t[110] = B),
            (t[111] = x.page),
            (t[112] = e),
            (t[113] = n),
            (t[114] = o))
          : (o = t[114]),
        o
      );
    }
  }
}
var Sn, Cn, wn;
function Tn() {
  return (Tn = e(() => {
    ((Sn = _()),
      we(),
      i(),
      I(),
      j(),
      D(),
      (Cn = o()),
      w(),
      ge(),
      l(),
      me(),
      te(),
      be(),
      r(),
      q(),
      ve(),
      y(),
      Be(),
      Ue(),
      Ve(),
      je(),
      Jt(),
      Yt(),
      dt(),
      $t(),
      pn(),
      hn(),
      yn(),
      zt(),
      At(),
      (wn = p()));
  }))();
}
Tn();
export { bn as CancellationDialog };
//# sourceMappingURL=dialog-7ad8591230da.js.map
