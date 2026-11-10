import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  HFt as t,
  LRt as n,
  ORt as r,
  Qit as i,
  SLt as a,
  VRt as o,
  ezt as s,
  hRt as c,
  kRt as l,
  nat as u,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Ax as d,
  Mx as f,
  O2n as p,
  Sx as m,
  jx as h,
  k2n as g,
  xMr as _,
  xx as v,
  yMr as y,
} from "./app-initial-ad16eaadf81f.js";
import { g as b, m as x, p as S } from "./chatgpt-markdown-view-49d8cc54ac3e.js";
import { n as ee, s as C, t as w } from "./chatgpt_conversational_onboarding-f7deb0d60fff.js";
import { c as T, n as te } from "./chatgpt_learning_flashcards-ea6e2bbcd2f6.js";
import { n as ne, t as E } from "./analytics-1dcfaf476861.js";
async function D(e) {
  let t = e.ownerDocument,
    n = t.createElement(`div`),
    r = e.closest(O)?.querySelectorAll(`.recharts-legend-wrapper > * > *`);
  for (let e of r ?? []) {
    let r = t.createElement(`p`),
      i = e.firstElementChild;
    if (i instanceof HTMLElement && i.style.backgroundColor) {
      let e = t.createElement(`span`);
      ((e.style.color = getComputedStyle(i).backgroundColor), (e.textContent = `■ `), r.append(e));
    }
    (r.append(t.createTextNode(e.textContent ?? ``)), n.append(r));
  }
  let i = await re(e);
  return `${i == null ? `` : `<img alt="Chart" src="${i}">`}${n.innerHTML}`;
}
async function re(e) {
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
var O;
function k() {
  return (k = e(() => {
    O = `[data-w-component="chart"], [data-d-component="chart"], [data-w-component="pie-chart"], [data-d-component="pie-chart"]`;
  }))();
}
var A, j, M, N, P, F, I;
function L() {
  return (L = e(() => {
    ((A = (function (e) {
      return (
        (e.CHATGPT_DIL_WIDGET_WORK_TASK_ARM_UNSPECIFIED = `CHATGPT_DIL_WIDGET_WORK_TASK_ARM_UNSPECIFIED`),
        (e.CHATGPT_DIL_WIDGET_WORK_TASK_ARM_DEFAULT = `CHATGPT_DIL_WIDGET_WORK_TASK_ARM_DEFAULT`),
        (e.CHATGPT_DIL_WIDGET_WORK_TASK_ARM_STATIC = `CHATGPT_DIL_WIDGET_WORK_TASK_ARM_STATIC`),
        (e.CHATGPT_DIL_WIDGET_WORK_TASK_ARM_OTHER = `CHATGPT_DIL_WIDGET_WORK_TASK_ARM_OTHER`),
        (e.UNRECOGNIZED = `UNRECOGNIZED`),
        e
      );
    })({})),
      (j = (function (e) {
        return (
          (e.CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_UNSPECIFIED = `CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_UNSPECIFIED`),
          (e.CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_ACTION_SHOWN = `CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_ACTION_SHOWN`),
          (e.CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_ACTION_CLICKED = `CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_ACTION_CLICKED`),
          (e.CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_TAB_CLICKED = `CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_TAB_CLICKED`),
          (e.UNRECOGNIZED = `UNRECOGNIZED`),
          e
        );
      })({})),
      (M = { $type: `protobuf_analytics_events.v1.ChatgptDilWidgetAction` }),
      (N = { $type: `protobuf_analytics_events.v1.ChatgptDilWidgetWorkTaskAction` }),
      (P = { $type: `protobuf_analytics_events.v1.ChatgptDilWidgetOnboardingInteraction` }),
      (F = { $type: `protobuf_analytics_events.v1.ChatgptDilWidgetReservationTimePillsShown` }),
      (I = { $type: `protobuf_analytics_events.v1.ChatgptDilWidgetCareProviderDayClicked` }));
  }))();
}
var R, z;
function B() {
  return (B = e(() => {
    ((R = { $type: `protobuf_analytics_events.v1.WorkOnboardingTaskImpression` }),
      (z = { $type: `protobuf_analytics_events.v1.WorkOnboardingTaskSelected` }));
  }))();
}
function V(
  e,
  { conversationId: t, feedbackReasons: n, messageId: r, widgetActionTarget: i, widgetAffordance: a },
) {
  try {
    _(e, d, {
      actionType: v.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
      assistantMessageId: r,
      contentReferenceType: `dil`,
      conversationId: t,
      feedbackReasons: n != null && n.length > 0 ? n : void 0,
      isGenui: !0,
      messageId: r,
      surfaceLocation: m.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
      widgetActionTarget: i,
      widgetAffordance: a,
      widgetType: `model_dil_feedback`,
    });
  } catch {}
}
function H(
  e,
  {
    actionType: t,
    payload: r,
    sourceMessageId: a,
    turnContext: c,
    widgetActionAlreadyLogged: l,
    widgetName: u,
  },
) {
  if (r?.event_name === `ChatgptConversationFollowupSuggestionInteraction`)
    return (
      ne(e, {
        eventName: r.event_name,
        eventData: n(o(), s()).safeParse(r.event_data).data,
        widgetName: u,
        conversationId: c?.conversationId,
        messageId: a ?? c?.messageId,
      }),
      !0
    );
  let f = Q.safeParse(r?.event_name);
  if (
    !f.success ||
    (t === `issue_new_turn` && f.data !== `chatgpt_widget_action` && r?.statsig_event_name !== f.data)
  )
    return !1;
  let p = Z[f.data].parse(r?.event_data),
    y =
      u === `onboarding_starter_tasks` && f.data === `chatgpt_widget_action`
        ? q.safeParse(r?.event_data).data
        : void 0,
    b = f.data === `chatgpt_widget_action` ? (y ?? J.parse(p)) : void 0;
  if (b != null) {
    let e = b.widget_action_target;
    (U.safeParse(b.widget_affordance).data === h.CHATGPT_WIDGET_AFFORDANCE_VALUE_INPUT ||
      (e !== `flashcards_generation` &&
        e !== `unit` &&
        e !== `focus_mode` &&
        e !== `learning_mode_submit` &&
        e !== `plus_onboarding_welcome` &&
        e !== `plus_onboarding_task` &&
        e !== `plus_onboarding_feature` &&
        e !== `plus_onboarding_benefit` &&
        e !== `onboarding_task`)) &&
      (b.widget_action_value = void 0);
  }
  let S = t === `log_event` ? a : void 0;
  try {
    switch (f.data) {
      case `chatgpt_widget_action`:
        if (y != null) {
          let t = A.CHATGPT_DIL_WIDGET_WORK_TASK_ARM_OTHER;
          (y.arm === "default"
            ? (t = A.CHATGPT_DIL_WIDGET_WORK_TASK_ARM_DEFAULT)
            : y.arm === `static` && (t = A.CHATGPT_DIL_WIDGET_WORK_TASK_ARM_STATIC),
            _(e, N, {
              flowId: y.flow_id,
              experienceId: y.experience_id,
              arm: t,
              stateId: y.state_id,
              taskId: y.task_id,
              category: y.category,
              action: y.action,
              turnMessageId: S,
            }));
        } else
          _(e, M, {
            widgetName: b?.widget_name,
            widgetAffordance: b?.widget_affordance,
            surfaceLocation: b?.surface_location,
            widgetActionTarget: b?.widget_action_target,
            widgetActionValue: b?.widget_action_value,
            contentReferenceType: b?.content_reference_type,
            turnMessageId: S,
          });
        break;
      case `reservation_time_pills_widget_shown`:
        _(e, F, { turnMessageId: S });
        break;
      case `care_provider_day_clicked`:
        _(e, I, { turnMessageId: S });
        break;
      case `chatgpt_learning_flashcards_card_flipped`: {
        let t = Z.chatgpt_learning_flashcards_card_flipped.parse(p);
        _(e, te, {
          cardCount: i(t.card_count),
          cardNumber: i(t.card_number),
          source: `dil_widget`,
          turnMessageId: S,
        });
        break;
      }
      case `chatgpt_conversational_onboarding_action_shown`:
      case `chatgpt_conversational_onboarding_action_clicked`:
      case `chatgpt_conversational_onboarding_tab_clicked`: {
        let t = X.parse(p),
          n = {
            chatgpt_conversational_onboarding_action_shown:
              j.CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_ACTION_SHOWN,
            chatgpt_conversational_onboarding_action_clicked:
              j.CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_ACTION_CLICKED,
            chatgpt_conversational_onboarding_tab_clicked:
              j.CHATGPT_DIL_WIDGET_ONBOARDING_INTERACTION_TYPE_TAB_CLICKED,
          };
        _(e, P, {
          interactionType: n[f.data],
          renderer: t.renderer,
          level: t.level,
          useCase: t.use_case,
          actionId: t.action_id,
          source: t.source,
          tabId: t.tab_id,
          previousTabId: t.previous_tab_id,
          turnMessageId: S,
        });
        break;
      }
    }
  } catch {}
  if (
    y != null &&
    r?.statsig_event_name ===
      (t === `log_event` ? `work_onboarding_task_impression` : `work_onboarding_task_selected`)
  ) {
    let n = {
      widgetName: y.widget_name,
      widgetAffordance: y.widget_affordance,
      widgetActionTarget: y.widget_action_target,
      widgetActionValue: y.widget_action_value,
      surfaceLocation: y.surface_location,
      contentReferenceType: y.content_reference_type,
      flowId: y.flow_id,
      experienceId: y.experience_id,
      arm: y.arm,
      stateId: y.state_id,
      taskId: y.task_id,
      category: y.category,
      section: y.section,
    };
    try {
      t === `log_event` ? _(e, R, { ...n, turnMessageId: a }) : _(e, z, { ...n, action: y.action });
    } catch {}
  }
  if (
    (f.data === `chatgpt_conversational_onboarding_action_clicked` ||
      f.data === `chatgpt_conversational_onboarding_action_shown`) &&
    r?.statsig_event_name === f.data
  ) {
    let n = x.safeParse(p);
    if (!n.success) return !0;
    try {
      _(e, f.data === `chatgpt_conversational_onboarding_action_clicked` ? w : ee, {
        renderer: n.data.renderer,
        level: n.data.level,
        useCase: n.data.use_case,
        actionId: n.data.action_id,
        source: n.data.source,
        messageId: t === `log_event` ? a : void 0,
      });
    } catch {}
  }
  if (b == null || l) return !0;
  let C = U.safeParse(b.widget_affordance),
    T = C.success ? b : void 0;
  try {
    _(e, d, {
      actionType: v.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
      surfaceLocation:
        W.safeParse(T?.surface_location).data ?? m.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
      widgetName: G.safeParse(u).data,
      widgetAffordance: C.data ?? h.CHATGPT_WIDGET_AFFORDANCE_UNSPECIFIED,
      widgetActionTarget: T?.widget_action_target,
      widgetActionValue: T?.widget_action_value,
      messageId: a,
      assistantMessageId: a,
      conversationId: c != null && !g(c.conversationId) ? c.conversationId : void 0,
      contentReferenceType: T?.content_reference_type ?? `dil`,
    });
  } catch {}
  return !0;
}
var U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (C(),
      L(),
      f(),
      T(),
      B(),
      u(),
      t(),
      y(),
      p(),
      b(),
      S(),
      E(),
      (U = o()
        .trim()
        .toUpperCase()
        .transform((e) => e.replace(/^(?:CHATGPT_WIDGET_AFFORDANCE_)?/, `CHATGPT_WIDGET_AFFORDANCE_`))
        .pipe(a(h).exclude([`UNRECOGNIZED`]))),
      (W = o()
        .trim()
        .toUpperCase()
        .transform((e) =>
          e.replace(/^(?:CHATGPT_ENGAGEMENT_SURFACE_LOCATION_)?/, `CHATGPT_ENGAGEMENT_SURFACE_LOCATION_`),
        )
        .pipe(a(m).exclude([`UNRECOGNIZED`]))),
      (G = a([
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
      (K = o()
        .regex(/^server-\d+-(apps|automation|artifact|browser|skill|website|email|messaging|other)$/)
        .or(
          a([
            `build-and-deploy-website`,
            `learn-email-style`,
            `make-work-repeatable`,
            `make-personalized-presentation`,
          ]),
        )),
      (q = l({
        widget_name: c(`onboarding_starter_tasks`),
        widget_affordance: c(`OPTION`),
        widget_action_target: c(`onboarding_task`),
        widget_action_value: K,
        surface_location: c(`RESPONSE`),
        content_reference_type: c(`dil`),
        flow_id: a([`work_setup`, `work_showcase`]),
        experience_id: a([`work_setup_enterprise`, `work_showcase_default`]),
        arm: o(),
        state_id: a([`tasks`, `showcase`]),
        task_id: K,
        category: a([
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
        section: c(`quick_tasks`),
        action: c(`submit_prompt`).optional(),
      })),
      (J = l({
        widget_name: G.optional().catch(void 0),
        widget_affordance: o()
          .refine((e) => U.safeParse(e).success)
          .optional()
          .catch(void 0),
        surface_location: o()
          .refine((e) => W.safeParse(e).success)
          .optional()
          .catch(void 0),
        widget_action_target: a([
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
        widget_action_value: a([
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
        content_reference_type: a([
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
      (Y = a([
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
      (X = l({
        renderer: x.shape.renderer.optional().catch(void 0),
        level: x.shape.level.optional().catch(void 0),
        use_case: x.shape.use_case.optional().catch(void 0),
        action_id: x.shape.action_id.optional().catch(void 0),
        source: x.shape.source.optional().catch(void 0),
        tab_id: Y.optional().catch(void 0),
        previous_tab_id: Y.optional().catch(void 0),
      }).catch({})),
      (Z = {
        chatgpt_widget_action: J,
        reservation_time_pills_widget_shown: l({
          widget_name: c(`reservation_time_pills`)
            .optional()
            .catch(void 0),
        }).catch({}),
        chatgpt_learning_flashcards_card_flipped: l({
          card_count: r()
            .int()
            .nonnegative()
            .optional()
            .catch(void 0),
          card_number: r()
            .int()
            .positive()
            .optional()
            .catch(void 0),
        }).catch({}),
        care_provider_day_clicked: l({
          widget_name: c(`care_provider_results_widget`)
            .optional()
            .catch(void 0),
        }).catch({}),
        chatgpt_conversational_onboarding_tab_clicked: X,
        chatgpt_conversational_onboarding_action_clicked: X,
        chatgpt_conversational_onboarding_action_shown: X,
      }),
      (Q = l(Z).keyof()));
  }))();
}
export { D as a, O as i, H as n, k as o, V as r, $ as t };
//# sourceMappingURL=widget-analytics-e32671eb3615.js.map
