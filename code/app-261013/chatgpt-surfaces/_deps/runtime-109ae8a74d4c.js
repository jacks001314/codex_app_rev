import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  L4 as n,
  Pxt as r,
  R4 as i,
  aSt as a,
  hot as o,
  id as s,
  lot as c,
  rd as l,
  wot as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Qn as d,
  E4t as f,
  GMr as p,
  GOr as m,
  GYn as h,
  HMr as g,
  JYn as _,
  JZn as v,
  JZt as y,
  KOr as b,
  KVn as x,
  O4t as S,
  Oer as C,
  QMr as w,
  SZn as T,
  UYn as E,
  Ujn as D,
  VZn as O,
  WYn as k,
  XZt as A,
  Ymr as j,
  aIr as M,
  e$n as N,
  ehr as P,
  gZn as ee,
  kZn as F,
  oIr as I,
  pZn as L,
  qMr as R,
  qVn as z,
  qYn as B,
  tNr as V,
  yjn as H,
  zZn as U,
} from "./app-initial-5851df3f6cb1.js";
import { Hv as W, Vv as G } from "./app-primary-fe8a450b3b04.js";
async function K(e, t, n) {
  let r = e.get(b, `2023018368`)?.get(`delayed_gen_allowance`, {}),
    a = e.get(w),
    o = a.authenticatedAccountId,
    s = a.authenticatedUserId,
    c = a.accountUserId;
  if (
    r == null ||
    !(`enabled` in r) ||
    r.enabled !== !0 ||
    !(`notification_beacon_enabled` in r) ||
    r.notification_beacon_enabled !== !0 ||
    !f() ||
    e.get(g) ||
    o == null ||
    s == null ||
    c == null ||
    !W(e, o, a.userId)
  )
    return;
  try {
    if (await S()) {
      let { settings: t } = await e.queryClient.fetchQuery({
        queryKey: [`chatgpt-notification-settings`, s, o],
        queryFn: ({ signal: e }) =>
          j.safeGet(`/notifications/settings`, { expectedIdentity: { accountId: o, userId: s }, signal: e }),
        staleTime: 0,
      });
      if (
        t.find((e) => e.category === `responses`)?.options.find((e) => e.channel === `push`)?.enabled !== !1
      )
        return;
    }
  } catch {
    return;
  }
  let u = e.get(x, t)?.find((e) => e.id === n),
    d = B(u)?.state;
  if (
    (d !== `queued` && d !== `in_progress`) ||
    !f() ||
    e.get(g) ||
    !W(e, o, a.userId) ||
    e.get(w).accountUserId !== c
  )
    return;
  let p = e.get(I);
  A(
    e,
    t,
    {
      type: `beacon_ui_response`,
      beacon_id: q,
      beacon_name: `Delayed Image Generation Notification`,
      show_timing: `immediate`,
      ui_info: {
        type: `beacon_banner_info`,
        banner_design: `default`,
        banner_position: null,
        dismiss_variant: `dismiss_on_send`,
        icon_image_size: `large`,
        icon_image_url: `data:image/svg+xml;base64,${btoa(i(l, { attributes: { color: `#0d0d0d` } }))}`,
        icon_image_url_dark: `data:image/svg+xml;base64,${btoa(i(l, { attributes: { color: `#fff` } }))}`,
        informational_link: null,
        title: p.formatMessage({
          id: `chatgpt.image_gen.create_later.notification_banner.title`,
          defaultMessage: `Get notified when your image is ready.`,
          description: `Short headline in the banner above the ChatGPT composer after a signed-in web user successfully schedules an image with Generate later. It invites the user to enable browser push notifications for image completion.`,
        }),
        description: p.formatMessage({
          id: `chatgpt.image_gen.create_later.notification_banner.description`,
          defaultMessage: `We’ll let you know when image generation finishes.`,
          description: `Reassuring body text in the browser notification banner above the ChatGPT composer after a signed-in web user schedules an image with Generate later. Enabling notifications lets ChatGPT notify the user when the scheduled image is ready.`,
        }),
      },
      action_items: [
        {
          id: J,
          type: `primary`,
          text: p.formatMessage({
            id: `chatgpt.image_gen.create_later.notification_banner.button.enable`,
            defaultMessage: `Notify me`,
            description: `Short primary button label in the notification banner above the ChatGPT composer after a signed-in web user schedules an image with Generate later. Clicking it requests browser notification permission if needed, registers this browser for push notifications, and turns on Responses push notifications in ChatGPT settings.`,
          }),
          action_v2: { action_enum: `enable_web_push_and_responses_push`, account_id: o, account_user_id: c },
        },
      ],
    },
    `chat`,
  );
}
var q, J;
function Y() {
  return (Y = e(() => {
    (n(),
      s(),
      V(),
      G(),
      M(),
      m(),
      y(),
      z(),
      P(),
      _(),
      (q = `delayed_image_gen_notification`),
      (J = `delayed_image_gen_notification_enable`));
  }))();
}
function X(e, t) {
  let n = e.get(p),
    r = !0;
  return e.watch(({ get: i }) => {
    if (i(p) !== n || i(U, t) != null || i(ee, t) || v(i(O, t))) return;
    let a = i(L, t);
    if (a == null) return;
    let o = i(E, a),
      s = r;
    if (((r = !1), !s && !Object.values(o).includes(`waiting`))) return;
    let c = e.get(F, t);
    if (c != null && Object.keys(o).length !== 0) {
      k(e, a, { current_node: e.get(T, t), mapping: c });
      for (let [n, r] of Object.entries(e.get(E, a)))
        (r === `waiting` || s) && (e.set(E, a, { ...e.get(E, a), [n]: `resumed` }), Z(e, d(t), n));
    }
  });
}
async function Z(e, t, n) {
  let r = e.get(L, t);
  if (r == null || e.get(U, t) != null || e.get(Q, n) === `pending`) return;
  let i = e.get(p),
    a = e.get(R),
    s = () => {
      if (e.get(p) !== i) return null;
      let r = e.get(F, t)?.[n]?.message,
        a = B(r)?.state;
      return a === `offered` || a === `accepting` ? (r ?? null) : null;
    };
  if (s() != null) {
    e.set(Q, n, `pending`);
    try {
      let o = await j.safePost(`/image-gen/delayed/accept`, {
          requestBody: { conversation_id: r, message_id: n },
          signal: AbortSignal.timeout(3e4),
        }),
        c = s();
      (c != null && D(e, t, { ...c, metadata: { ...c.metadata, image_gen_delayed: o } }),
        e.set(Q, n, `idle`),
        e.get(p) === i && e.get(R) === a && K(e, t, n).catch(() => {}));
    } catch {
      if (s() == null) {
        e.set(Q, n, `idle`);
        return;
      }
      (e.set(Q, n, `failed`),
        e
          .get(o)
          .danger(
            e
              .get(I)
              .formatMessage({
                id: `chatgpt.image_gen.create_later.card.toast.action_failed`,
                defaultMessage: `Couldn't update the scheduled image. Please try again.`,
                description: `Error toast when scheduling or resuming a delayed image request fails or times out. Retrying safely uses the same request.`,
              }),
            { errorAnalytics: { toastId: `chatgpt.image_gen.create_later.card.toast.action_failed` } },
          ));
    }
  }
}
var Q;
function $() {
  return ($ = e(() => {
    (r(), C(), V(), c(), M(), u(), P(), N(), H(), h(), _(), Y(), (Q = a(t, (e) => `idle`)));
  }))();
}
export { X as i, Q as n, $ as r, Z as t };
//# sourceMappingURL=runtime-109ae8a74d4c.js.map
