import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as t,
  CPt as n,
  EPt as r,
  JIt as i,
  LLt as a,
  RLt as o,
  SPt as s,
  TLt as c,
  _It as l,
  fLt as u,
  gIt as d,
  iO as f,
  oIt as p,
  pIt as m,
  pLt as h,
  rO as g,
  xLt as _,
} from "./app-shared-bbfeca5e5737.js";
import { JPn as v, ZPn as y } from "./app-initial-5851df3f6cb1.js";
import { n as b, r as x, t as S } from "./image-source-8c1ece444f2a.js";
function C(e) {
  let t = w.safeParse(e);
  if (!t.success) return null;
  let n = t.data.videos.findIndex((e) => e.provider_video_id === t.data.video_id);
  return n === -1
    ? null
    : {
        videos: t.data.videos.map((e) => ({
          provider: e.provider,
          videoId: e.provider_video_id,
          title: typeof e.title == `string` && e.title.trim() ? e.title : void 0,
        })),
        selectedIndex: n,
      };
}
var w;
function T() {
  return (T = e(() => {
    (r(),
      (w = h({
        video_id: c(),
        videos: m(
          h({
            provider: t(`youtube`),
            provider_video_id: c().regex(/^[A-Za-z0-9_-]{11}$/),
            title: o().optional(),
          }),
        )
          .min(1)
          .max(8),
      })));
  }))();
}
async function E(
  e,
  {
    share: t,
    logEvent: r,
    onMailtoClick: i,
    requestUserInput: a,
    sourceMessageId: o,
    logWidgetEvent: s,
    issueNewTurn: c,
    logOnboardingActionClick: l,
    runQuizServerAction: u,
    runServerAction: d,
    regenerateResponse: f,
    requestLocationPermission: p,
    launchEcosystemWidget: m,
    openUrl: h,
    openEntityDetail: g,
    openShopImageSidebar: _,
    openFileCitation: v,
    openFileNavListItem: y,
    openCodingCitation: b,
    openImageLightbox: x,
    openVideoLightbox: S,
    saveFinanceCategories: w,
    startVoiceMode: T,
  } = {},
) {
  let E = typeof e.payload?.action == `string` ? e.payload.action : e.type;
  switch (E) {
    case `share`:
      if (t == null) break;
      t();
      return;
    case `request_user_input`:
      a?.(e.payload);
      return;
    case `start_voice_mode`:
      await T?.(e.payload ?? {});
      return;
    case `interactive_poll_vote`:
      if (d == null) break;
      await d(e);
      return;
    case `learning_quiz_answer`:
    case `learning_quiz_restart`:
      if (u == null) throw Error(`DIL quiz actions are not supported in this context`);
      await u({ actionType: E, payload: e.payload ?? {} });
      return;
    case `ledger_category_review_save`:
    case `ledger_transaction_category_save`:
      if (w == null) break;
      await w(e);
      return;
    case `copy`:
      await D(e.payload);
      return;
    case `email.mailto`:
      A(e.payload, i);
      return;
    case `open_image_generation_composer`:
    case `issue_new_turn`: {
      if (c == null) throw Error(`DIL follow-up prompts are not supported in Codex`);
      let t = V.safeParse(e.payload);
      if (!t.success) return;
      s?.(e.payload, `issue_new_turn`);
      let n = H.safeParse(e.payload);
      if (n.success) {
        let e = n.data.event_data;
        l?.({
          renderer: e.renderer,
          level: e.level,
          useCase: e.use_case,
          actionId: e.action_id,
          source: e.source,
        });
      }
      let {
        action: r,
        append_to_current_leaf: i,
        attach_source_message_id: a,
        message_metadata: u,
        query: d,
        ...f
      } = t.data;
      await c({
        appendToCurrentLeaf: i,
        messageMetadata: a && o != null ? { ...u, source_message_id: o } : u,
        query: d,
        widgetState: Object.keys(f).length === 0 ? void 0 : f,
      });
      return;
    }
    case `log_event`:
      (j(e.payload, r), s?.(e.payload, `log_event`));
      return;
    case `launch_ecosystem_widget`:
      if (m == null) break;
      await m(e.payload ?? {});
      return;
    case `open_shop_image_sidebar`:
      await _?.(e.payload ?? {});
      return;
    case `open_entity_detail`: {
      if (g == null) break;
      let t = W.safeParse(e.payload);
      if (!t.success) return;
      await g({
        category: t.data.category ?? `ask_sidebar`,
        clientParams: t.data.clientParams,
        entityId: t.data.entityId ?? t.data.entity_id,
        extraParams: t.data.extraParams,
        query: t.data.query,
      });
      return;
    }
    case `open_file_navlist_item`:
      await y?.(e.payload ?? {});
      return;
    case `open_coding_citation`:
      b?.(e.payload ?? {});
      return;
    case `open_file_citation`: {
      if (v == null) break;
      let t = G.safeParse(e.payload);
      if (!t.success) return;
      (j(e.payload, r), await v({ fileId: t.data.file_id, fileName: t.data.file_name }));
      return;
    }
    case `open_image_lightbox`:
      k(e.payload, x);
      return;
    case `open_video_lightbox`: {
      let t = C(e.payload);
      if (t == null) return;
      S == null ? O({ url: `https://www.youtube.com/watch?v=${t.videos[t.selectedIndex].videoId}` }) : S(t);
      return;
    }
    case `open_url`:
      O(e.payload, h);
      return;
    case `request_location_permission`: {
      if (p == null) break;
      let t = U.safeParse(e.payload),
        r = t.success ? t.data.issue_new_turn_query_on_success : void 0;
      if (!(await p())) return;
      r != null && c != null
        ? c({ query: r }).catch(() => {
            n.warning(`Inline DIL follow-up turn after location permission failed`);
          })
        : (r ??
          f?.().catch(() => {
            n.warning(`Inline DIL regeneration after location permission failed`);
          }));
      return;
    }
  }
  n.info(`Inline DIL source action unsupported`, {
    safe: { actionType: E, isKnownChatGPTDILAction: F.has(E) },
  });
}
async function D(e) {
  let t = I.safeParse(e);
  if (!t.success) return;
  let { value: n } = t.data;
  n != null && (await g(n.toString()));
}
function O(e, t) {
  let n = L.safeParse(e);
  if (!n.success) return;
  let r = M(n.data.url);
  if (r != null) {
    if (t != null) {
      t(r.toString());
      return;
    }
    y({ href: r.toString(), initiator: `markdown_link_click` });
  }
}
function k(e, t) {
  let n = R.safeParse(e);
  if (!n.success) return;
  let r = n.data.images[n.data.selected_index];
  if (r != null) {
    if (t != null) {
      t(
        {
          images: n.data.images.map((e) => {
            let t = S(e);
            return {
              attribution: e.attribution ?? null,
              destinationUrl: t == null ? null : (M(t)?.toString() ?? null),
              fallbackSrc: e.thumbnail_url?.replace(/^http:\/\//, `https://`) ?? null,
              originalSrc: e.original_content_url,
              isProxied: e.is_proxied_image,
              saveTarget: e.save_target,
              src: (e.is_proxied_image && e.url != null
                ? (M(e.url)?.toString() ?? e.content_url)
                : e.content_url
              ).replace(/^http:\/\//, `https://`),
              title: e.title ?? null,
            };
          }),
          selectedIndex: n.data.selected_index,
        },
        n.data,
      );
      return;
    }
    O({ url: r.url ?? r.content_url });
  }
}
function A(e, t) {
  let n = N(e ?? {});
  if (n == null) return;
  let r = new URLSearchParams();
  (n.subject && r.set(`subject`, n.subject), n.body && r.set(`body`, n.body));
  let i = r.toString();
  (t?.(),
    y({
      href: `mailto:${n.to ?? ``}${i ? `?${i}` : ``}`,
      initiator: `open_in_browser_bridge`,
      openTarget: `external-browser`,
    }));
}
function j(e, t) {
  let r = B.safeParse(e);
  (r.success &&
    r.data.event_name != null &&
    t?.({ eventName: r.data.event_name, eventData: r.data.event_data }),
    n.info(`Inline DIL source log_event action received`, {
      safe: { eventName: r.success ? r.data.event_name : void 0 },
    }));
}
function M(e) {
  let t;
  try {
    t = new URL(e, window.location.origin);
  } catch {
    return null;
  }
  return t.protocol !== `http:` && t.protocol !== `https:` ? null : t;
}
function N(e) {
  let t = z.safeParse(e);
  if (!t.success) return null;
  let n = t.data,
    r = n[`email.to`] ?? n.email?.to,
    i = n[`email.subject`] ?? n.email?.subject,
    a = n[`email.body`] ?? n.email?.body;
  return !r && !i && !a ? null : { body: a, subject: i, to: r };
}
var P, F, I, L, R, z, B, V, H, U, W, G;
function K() {
  return (K = e(() => {
    (r(),
      v(),
      f(),
      s(),
      x(),
      T(),
      (P = [
        `client_action`,
        `copy`,
        `email.mailto`,
        `issue_new_turn`,
        `log_event`,
        `learning_quiz_answer`,
        `learning_quiz_restart`,
        `ledger_category_review_save`,
        `ledger_transaction_category_save`,
        `open_entity_detail`,
        `open_image_lightbox`,
        `open_video_lightbox`,
        `open_url`,
      ]),
      (F = new Set([
        `add_to_calendar`,
        `card.open`,
        `card.save`,
        `card.share`,
        `card.thumbs_down`,
        `card.thumbs_up`,
        `close_hermes_sidebar`,
        `copy_node`,
        `launch_ecosystem_widget`,
        `ledger_category_review_save`,
        `ledger_set_sensitive_values_hidden`,
        `ledger_transaction_category_save`,
        `mattress_ledger_open_account_link`,
        `mattress_onboarding_card_click`,
        `open_entity_detail`,
        `open_file_citation`,
        `open_hermes_sidebar`,
        `open_product_detail`,
        `request_link_to_connector`,
        `share`,
      ])),
      (I = h({ value: a([c(), u(), l(), d()]).optional() }).loose()),
      (L = h({ url: c().min(1) }).loose()),
      (R = h({
        images: m(
          b
            .extend({
              content_url: c().trim().min(1),
              original_content_url: c()
                .trim()
                .min(1)
                .optional()
                .catch(void 0),
              thumbnail_url: c().trim().min(1).nullable().optional().catch(null),
              title: c().trim().min(1).nullable().optional().catch(null),
              save_target: p([`image`, `entity`])
                .nullish()
                .catch(void 0),
            })
            .loose(),
        ),
        selected_index: u().int().nonnegative(),
      }).loose()),
      (z = h({
        "email.body": c().optional(),
        "email.subject": c().optional(),
        "email.to": c().optional(),
        email: h({ body: c().optional(), subject: c().optional(), to: c().optional() }).optional(),
      }).loose()),
      (B = h({
        event_name: c().optional(),
        event_data: _(c(), o())
          .optional()
          .catch(void 0),
      }).loose()),
      (V = h({
        action: c()
          .optional()
          .catch(void 0),
        append_to_current_leaf: t(!0)
          .optional()
          .catch(void 0),
        attach_source_message_id: t(!0)
          .optional()
          .catch(void 0),
        message_metadata: _(c(), i())
          .optional()
          .catch(void 0),
        query: c().trim().min(1),
      }).catchall(i())),
      (H = h({
        event_name: t(`chatgpt_conversational_onboarding_action_clicked`),
        statsig_event_name: t(`chatgpt_conversational_onboarding_action_clicked`),
        event_data: h({
          renderer: p([`dil`, `followup_a`, `inline_followup_a`]),
          level: t(`l1`),
          use_case: t(`create_an_image`),
          action_id: t(`interactive.create_an_image`),
          source: t(`conversational_onboarding_interactive_image`),
        }),
      })),
      (U = h({
        issue_new_turn_query_on_success: c()
          .trim()
          .min(1)
          .optional()
          .catch(void 0),
      }).loose()),
      (W = h({
        category: c()
          .trim()
          .min(1)
          .optional()
          .catch(void 0),
        clientParams: h({
          entitySidebarPresentation: h({
            titlePlacement: p([`chrome`, `content`])
              .optional()
              .catch(void 0),
            titleSuffix: h({
              text: c().trim().min(1),
              tone: p([`success`, `caution`, `warning`, `danger`, `secondary`, `default`]).optional(),
              isSensitive: l(),
            })
              .optional()
              .catch(void 0),
            leadingBarBorder: p([`visible`, `hidden`])
              .optional()
              .catch(void 0),
            contentOwnedHorizontalInset: u()
              .nonnegative()
              .optional()
              .catch(void 0),
          })
            .optional()
            .catch(void 0),
        })
          .optional()
          .catch(void 0),
        entityId: c()
          .min(1)
          .optional()
          .catch(void 0),
        entity_id: c()
          .min(1)
          .optional()
          .catch(void 0),
        extraParams: _(c(), o())
          .optional()
          .catch(void 0),
        query: c().trim().min(1),
      })),
      (G = h({ file_id: c().trim().min(1), file_name: c().trim().min(1) })));
  }))();
}
export { E as i, K as n, B as r, P as t };
//# sourceMappingURL=inline-dil-actions-3191c4674347.js.map
