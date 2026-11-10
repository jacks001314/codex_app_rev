import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as t,
  Brt as n,
  EPt as r,
  Irt as i,
  RLt as a,
  TLt as o,
  fLt as s,
  oIt as c,
  pLt as l,
  xLt as ee,
} from "./app-shared-bbfeca5e5737.js";
import {
  QDr as u,
  XDr as d,
  Xb as f,
  Yb as p,
  ax as m,
  e$n as h,
  ix as g,
  ox as _,
  t$n as te,
} from "./app-initial-5851df3f6cb1.js";
import { g as v, m as y, p as b } from "./chatgpt-markdown-view-10e560aa371d.js";
import { n as ne, s as x, t as re } from "./chatgpt_conversational_onboarding-f7deb0d60fff.js";
import { n as ie, t as S } from "./analytics-ec75dbdcd499.js";
async function ae(e) {
  let t = e.ownerDocument,
    n = t.createElement(`div`),
    r = e.closest(C)?.querySelectorAll(`.recharts-legend-wrapper > * > *`);
  for (let e of r ?? []) {
    let r = t.createElement(`p`),
      i = e.firstElementChild;
    if (i instanceof HTMLElement && i.style.backgroundColor) {
      let e = t.createElement(`span`);
      ((e.style.color = getComputedStyle(i).backgroundColor), (e.textContent = `■ `), r.append(e));
    }
    (r.append(t.createTextNode(e.textContent ?? ``)), n.append(r));
  }
  let i = await oe(e);
  return `${i == null ? `` : `<img alt="Chart" src="${i}">`}${n.innerHTML}`;
}
async function oe(e) {
  let t = new DOMParser().parseFromString(e.outerHTML, `image/svg+xml`).documentElement;
  t.setAttribute(`xmlns`, `http://www.w3.org/2000/svg`);
  let n = [e, ...e.querySelectorAll(`*`)],
    r = [t, ...t.querySelectorAll(`*`)];
  n.forEach((e, t) => {
    let n = getComputedStyle(e);
    for (let e of [`fill`, `stroke`]) r[t].getAttribute(e)?.includes(`var(`) && r[t].setAttribute(e, n[e]);
  });
  let i = new Image(),
    a = new Promise((e) => {
      ((i.onload = () => e(!0)), (i.onerror = () => e(!1)));
    });
  if (
    ((i.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(t))}`),
    !(await a))
  )
    return null;
  let o = e.getBoundingClientRect(),
    s = document.createElement(`canvas`);
  ((s.width = Math.max(1, Math.round(o.width || i.naturalWidth))),
    (s.height = Math.max(1, Math.round(o.height || i.naturalHeight))));
  let c = s.getContext(`2d`);
  if (c == null) return null;
  ((c.fillStyle = `white`), c.fillRect(0, 0, s.width, s.height));
  try {
    return (c.drawImage(i, 0, 0, s.width, s.height), s.toDataURL(`image/png`));
  } catch {
    return null;
  }
}
var C;
function w() {
  return (w = e(() => {
    C = `[data-w-component="chart"], [data-d-component="chart"], [data-w-component="pie-chart"], [data-d-component="pie-chart"]`;
  }))();
}
var T, E, D, O, k, A, j;
function M() {
  return (M = e(() => {
    ((T = (function (e) {
      return (
        (e.CHATGPT_DIL_WIDGET_WORK_TASK_ARM_UNSPECIFIED = `CHATGPT_DIL_WIDGET_WORK_TASK_ARM_UNSPECIFIED`),
        (e.CHATGPT_DIL_WIDGET_WORK_TASK_ARM_DEFAULT = `CHATGPT_DIL_WIDGET_WORK_TASK_ARM_DEFAULT`),
        (e.CHATGPT_DIL_WIDGET_WORK_TASK_ARM_STATIC = `CHATGPT_DIL_WIDGET_WORK_TASK_ARM_STATIC`),
        (e.CHATGPT_DIL_WIDGET_WORK_TASK_ARM_OTHER = `CHATGPT_DIL_WIDGET_WORK_TASK_ARM_OTHER`),
        (e.UNRECOGNIZED = `UNRECOGNIZED`),
        e
      );
    })({})),
      (E = (function (e) {
        return (
          (e.CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_UNSPECIFIED = `CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_UNSPECIFIED`),
          (e.CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_ACTION_SHOWN = `CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_ACTION_SHOWN`),
          (e.CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_ACTION_CLICKED = `CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_ACTION_CLICKED`),
          (e.CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_TAB_CLICKED = `CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_TAB_CLICKED`),
          (e.UNRECOGNIZED = `UNRECOGNIZED`),
          e
        );
      })({})),
      (D = { $type: `protobuf_analytics_events.v1.ChatgptDilWidgetAction` }),
      (O = { $type: `protobuf_analytics_events.v1.ChatgptDilWidgetWorkTaskAction` }),
      (k = { $type: `protobuf_analytics_events.v1.ChatgptDilWidgetOnboardingInteraction` }),
      (A = { $type: `protobuf_analytics_events.v1.ChatgptDilWidgetReservationTimePillsShown` }),
      (j = { $type: `protobuf_analytics_events.v1.ChatgptDilWidgetCareProviderDayClicked` }));
  }))();
}
var N, P, F, I, L, R, z;
function B() {
  return (B = e(() => {
    ((N = { $type: `protobuf_analytics_events.v1.ChatgptLearningFlashcardsCardFlipped` }),
      (P = { $type: `protobuf_analytics_events.v1.ChatgptLearningFlashcardsViewStarted` }),
      (F = { $type: `protobuf_analytics_events.v1.ChatgptLearningFlashcardsPresented` }),
      (I = { $type: `protobuf_analytics_events.v1.ChatgptLearningFlashcardsErrorPresented` }),
      (L = { $type: `protobuf_analytics_events.v1.ChatgptLearningFlashcardsCardViewed` }),
      (R = { $type: `protobuf_analytics_events.v1.ChatgptLearningFlashcardsAudioPlayRequested` }),
      (z = { $type: `protobuf_analytics_events.v1.ChatgptLearningFlashcardsMenuTriggerClicked` }));
  }))();
}
var V, H;
function U() {
  return (U = e(() => {
    ((V = { $type: `protobuf_analytics_events.v1.WorkOnboardingTaskImpression` }),
      (H = { $type: `protobuf_analytics_events.v1.WorkOnboardingTaskSelected` }));
  }))();
}
function se(
  e,
  { conversationId: t, feedbackReasons: n, messageId: r, widgetActionTarget: i, widgetAffordance: a },
) {
  try {
    u(e, g, {
      actionType: p.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
      assistantMessageId: r,
      contentReferenceType: `dil`,
      conversationId: t,
      feedbackReasons: n != null && n.length > 0 ? n : void 0,
      isGenui: !0,
      messageId: r,
      surfaceLocation: f.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
      widgetActionTarget: i,
      widgetAffordance: a,
      widgetType: `model_dil_feedback`,
    });
  } catch {}
}
function ce(
  e,
  {
    actionType: t,
    payload: n,
    sourceMessageId: r,
    turnContext: s,
    widgetActionAlreadyLogged: c,
    widgetName: l,
  },
) {
  if (n?.event_name === `ChatgptConversationFollowupSuggestionInteraction`)
    return (
      ie(e, {
        eventName: n.event_name,
        eventData: ee(o(), a()).safeParse(n.event_data).data,
        widgetName: l,
        conversationId: s?.conversationId,
        messageId: r ?? s?.messageId,
      }),
      !0
    );
  let d = $.safeParse(n?.event_name);
  if (
    !d.success ||
    (t === `issue_new_turn` && d.data !== `chatgpt_widget_action` && n?.statsig_event_name !== d.data)
  )
    return !1;
  let h = Q[d.data].parse(n?.event_data),
    _ =
      l === `onboarding_starter_tasks` && d.data === `chatgpt_widget_action`
        ? J.safeParse(n?.event_data).data
        : void 0,
    v = d.data === `chatgpt_widget_action` ? (_ ?? Y.parse(h)) : void 0;
  if (v != null) {
    let e = v.widget_action_target;
    (W.safeParse(v.widget_affordance).data === m.CHATGPT_WIDGET_AFFORDANCE_VALUE_INPUT ||
      (e !== `flashcards_generation` &&
        e !== `unit` &&
        e !== `focus_mode` &&
        e !== `learning_mode_submit` &&
        e !== `plus_onboarding_welcome` &&
        e !== `plus_onboarding_task` &&
        e !== `plus_onboarding_feature` &&
        e !== `plus_onboarding_benefit` &&
        e !== `onboarding_task`)) &&
      (v.widget_action_value = void 0);
  }
  let b = t === `log_event` ? r : void 0;
  try {
    switch (d.data) {
      case `chatgpt_widget_action`:
        if (_ != null) {
          let t = T.CHATGPT_DIL_WIDGET_WORK_TASK_ARM_OTHER;
          (_.arm === "default"
            ? (t = T.CHATGPT_DIL_WIDGET_WORK_TASK_ARM_DEFAULT)
            : _.arm === `static` && (t = T.CHATGPT_DIL_WIDGET_WORK_TASK_ARM_STATIC),
            u(e, O, {
              flowId: _.flow_id,
              experienceId: _.experience_id,
              arm: t,
              stateId: _.state_id,
              taskId: _.task_id,
              category: _.category,
              action: _.action,
              turnMessageId: b,
            }));
        } else
          u(e, D, {
            widgetName: v?.widget_name,
            widgetAffordance: v?.widget_affordance,
            surfaceLocation: v?.surface_location,
            widgetActionTarget: v?.widget_action_target,
            widgetActionValue: v?.widget_action_value,
            contentReferenceType: v?.content_reference_type,
            turnMessageId: b,
          });
        break;
      case `reservation_time_pills_widget_shown`:
        u(e, A, { turnMessageId: b });
        break;
      case `care_provider_day_clicked`:
        u(e, j, { turnMessageId: b });
        break;
      case `chatgpt_learning_flashcards_card_flipped`: {
        let t = Q.chatgpt_learning_flashcards_card_flipped.parse(h);
        u(e, N, {
          cardCount: i(t.card_count),
          cardNumber: i(t.card_number),
          source: `dil_widget`,
          turnMessageId: b,
        });
        break;
      }
      case `chatgpt_conversational_onboarding_action_shown`:
      case `chatgpt_conversational_onboarding_action_clicked`:
      case `chatgpt_conversational_onboarding_tab_clicked`: {
        let t = Z.parse(h),
          n = {
            chatgpt_conversational_onboarding_action_shown:
              E.CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_ACTION_SHOWN,
            chatgpt_conversational_onboarding_action_clicked:
              E.CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_ACTION_CLICKED,
            chatgpt_conversational_onboarding_tab_clicked:
              E.CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_TAB_CLICKED,
          };
        u(e, k, {
          interactionType: n[d.data],
          renderer: t.renderer,
          level: t.level,
          useCase: t.use_case,
          actionId: t.action_id,
          source: t.source,
          tabId: t.tab_id,
          previousTabId: t.previous_tab_id,
          turnMessageId: b,
        });
        break;
      }
    }
  } catch {}
  if (
    _ != null &&
    n?.statsig_event_name ===
      (t === `log_event` ? `work_onboarding_task_impression` : `work_onboarding_task_selected`)
  ) {
    let n = {
      widgetName: _.widget_name,
      widgetAffordance: _.widget_affordance,
      widgetActionTarget: _.widget_action_target,
      widgetActionValue: _.widget_action_value,
      surfaceLocation: _.surface_location,
      contentReferenceType: _.content_reference_type,
      flowId: _.flow_id,
      experienceId: _.experience_id,
      arm: _.arm,
      stateId: _.state_id,
      taskId: _.task_id,
      category: _.category,
      section: _.section,
    };
    try {
      t === `log_event` ? u(e, V, { ...n, turnMessageId: r }) : u(e, H, { ...n, action: _.action });
    } catch {}
  }
  if (
    (d.data === `chatgpt_conversational_onboarding_action_clicked` ||
      d.data === `chatgpt_conversational_onboarding_action_shown`) &&
    n?.statsig_event_name === d.data
  ) {
    let n = y.safeParse(h);
    if (!n.success) return !0;
    try {
      u(e, d.data === `chatgpt_conversational_onboarding_action_clicked` ? re : ne, {
        renderer: n.data.renderer,
        level: n.data.level,
        useCase: n.data.use_case,
        actionId: n.data.action_id,
        source: n.data.source,
        messageId: t === `log_event` ? r : void 0,
      });
    } catch {}
  }
  if (v == null || c) return !0;
  let x = W.safeParse(v.widget_affordance),
    S = x.success ? v : void 0;
  try {
    u(e, g, {
      actionType: p.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
      surfaceLocation:
        G.safeParse(S?.surface_location).data ?? f.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
      widgetName: K.safeParse(l).data,
      widgetAffordance: x.data ?? m.CHATGPT_WIDGET_AFFORDANCE_UNSPECIFIED,
      widgetActionTarget: S?.widget_action_target,
      widgetActionValue: S?.widget_action_value,
      messageId: r,
      assistantMessageId: r,
      conversationId: s != null && !te(s.conversationId) ? s.conversationId : void 0,
      contentReferenceType: S?.content_reference_type ?? `dil`,
    });
  } catch {}
  return !0;
}
var W, G, K, q, J, Y, X, Z, Q, $;
function le() {
  return (le = e(() => {
    (x(),
      M(),
      _(),
      B(),
      U(),
      n(),
      r(),
      d(),
      h(),
      v(),
      b(),
      S(),
      (W = o()
        .trim()
        .toUpperCase()
        .transform((e) => e.replace(/^(?:CHATGPT_WIDGET_AFFORDANCE_)?/, `CHATGPT_WIDGET_AFFORDANCE_`))
        .pipe(c(m).exclude([`UNRECOGNIZED`]))),
      (G = o()
        .trim()
        .toUpperCase()
        .transform((e) =>
          e.replace(/^(?:CHATGPT_ENGAGEMENT_SURFACE_LOCATION_)?/, `CHATGPT_ENGAGEMENT_SURFACE_LOCATION_`),
        )
        .pipe(c(f).exclude([`UNRECOGNIZED`]))),
      (K = c([
        `homework_helper_v2`,
        `weather_widget`,
        `weather_widget_with_source`,
        `reservation_time_pills`,
        `care_provider_results_widget`,
        `learning_flashcards`,
        `calculator`,
        `currency_converter`,
        `stock`,
        `ledger_net_worth`,
        `onboarding_selection_card`,
        `onboarding_feature_card`,
        `onboarding_starter_tasks`,
      ])),
      (q = o()
        .regex(/^server-\d+-(apps|automation|artifact|browser|skill|website|email|messaging|other)$/)
        .or(
          c([
            `build-and-deploy-website`,
            `learn-email-style`,
            `make-work-repeatable`,
            `make-personalized-presentation`,
          ]),
        )),
      (J = l({
        widget_name: t(`onboarding_starter_tasks`),
        widget_affordance: t(`OPTION`),
        widget_action_target: t(`onboarding_task`),
        widget_action_value: q,
        surface_location: t(`RESPONSE`),
        content_reference_type: t(`dil`),
        flow_id: c([`work_setup`, `work_showcase`]),
        experience_id: c([`work_setup_enterprise`, `work_showcase_default`]),
        arm: o(),
        state_id: c([`tasks`, `showcase`]),
        task_id: q,
        category: c([
          `apps`,
          `automation`,
          `artifact`,
          `browser`,
          `skill`,
          `website`,
          `email`,
          `messaging`,
          `other`,
        ]),
        section: t(`quick_tasks`),
        action: t(`submit_prompt`).optional(),
      })),
      (Y = l({
        widget_name: K.optional().catch(void 0),
        widget_affordance: o()
          .refine((e) => W.safeParse(e).success)
          .optional()
          .catch(void 0),
        surface_location: o()
          .refine((e) => G.safeParse(e).success)
          .optional()
          .catch(void 0),
        widget_action_target: c([
          `follow_up`,
          `flashcards_generation`,
          `more_flashcards`,
          `controls_panel`,
          `scientific_controls`,
          `unit`,
          `focus_mode`,
          `focus_date`,
          `from_amount`,
          `to_amount`,
          `timeframe`,
          `net_worth_interval`,
          `learning_mode_submit`,
          `booking_appointment`,
          `automation_suggestion`,
          `plus_onboarding_welcome`,
          `plus_onboarding_task`,
          `plus_onboarding_feature`,
          `plus_onboarding_benefit`,
        ])
          .optional()
          .catch(void 0),
        widget_action_value: c([
          `retry`,
          `F`,
          `C`,
          `temp`,
          `precip`,
          `guided`,
          `show_answer`,
          `quiz_me`,
          `voice`,
          `personalized_tasks`,
          `explore_features`,
          `work`,
          `images`,
          `file_uploads`,
          `intelligence`,
          `personalization`,
          `projects`,
          `tasks`,
          `finance`,
        ])
          .optional()
          .catch(void 0),
        content_reference_type: c([
          `dil`,
          `forecast`,
          `stock`,
          `calculator`,
          `currency_converter`,
          `ledger_net_worth`,
          `learning_flashcards`,
          `homework_helper_v2`,
          `care_provider_results`,
          `suggest_automation`,
          `onboarding_selection_card`,
        ])
          .optional()
          .catch(void 0),
      }).catch({})),
      (X = c([
        `translation`,
        `professional_email`,
        `birthday_message`,
        `weather`,
        `stock`,
        `news`,
        `visual`,
        `quiz`,
        `math_graph`,
        `step_by_step`,
        `recipe`,
        `quick_fix`,
      ])),
      (Z = l({
        renderer: y.shape.renderer.optional().catch(void 0),
        level: y.shape.level.optional().catch(void 0),
        use_case: y.shape.use_case.optional().catch(void 0),
        action_id: y.shape.action_id.optional().catch(void 0),
        source: y.shape.source.optional().catch(void 0),
        tab_id: X.optional().catch(void 0),
        previous_tab_id: X.optional().catch(void 0),
      }).catch({})),
      (Q = {
        chatgpt_widget_action: Y,
        reservation_time_pills_widget_shown: l({
          widget_name: t(`reservation_time_pills`)
            .optional()
            .catch(void 0),
        }).catch({}),
        chatgpt_learning_flashcards_card_flipped: l({
          card_count: s()
            .int()
            .nonnegative()
            .optional()
            .catch(void 0),
          card_number: s()
            .int()
            .positive()
            .optional()
            .catch(void 0),
        }).catch({}),
        care_provider_day_clicked: l({
          widget_name: t(`care_provider_results_widget`)
            .optional()
            .catch(void 0),
        }).catch({}),
        chatgpt_conversational_onboarding_tab_clicked: Z,
        chatgpt_conversational_onboarding_action_clicked: Z,
        chatgpt_conversational_onboarding_action_shown: Z,
      }),
      ($ = l(Q).keyof()));
  }))();
}
export {
  N as a,
  z as c,
  B as d,
  C as f,
  R as i,
  F as l,
  w as m,
  ce as n,
  L as o,
  ae as p,
  se as r,
  I as s,
  le as t,
  P as u,
};
//# sourceMappingURL=widget-analytics-6388d725478d.js.map
