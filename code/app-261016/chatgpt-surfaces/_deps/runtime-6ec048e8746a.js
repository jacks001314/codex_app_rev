import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Md as n,
  N3 as r,
  P3 as i,
  Qst as a,
  SCt as o,
  Vrt as s,
  ZSt as c,
  jd as l,
  qrt as u,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B1n as d,
  Brr as f,
  CIr as p,
  D2n as m,
  GQt as h,
  O2n as ee,
  SIr as g,
  U1n as _,
  UQt as v,
  VPn as y,
  VRr as b,
  Y1n as x,
  _qn as S,
  c$n as C,
  f$n as w,
  f0n as T,
  gNr as E,
  hNr as D,
  iRr as O,
  l$n as k,
  lGn as A,
  m0n as j,
  mLr as M,
  n0n as N,
  p$n as P,
  pFn as F,
  tyr as I,
  u$n as L,
  uGn as R,
  vLr as z,
  wLr as B,
  x0n as V,
  yqn as H,
  zRr as U,
} from "./app-initial-ad16eaadf81f.js";
import { ly as W, uy as G } from "./app-primary-3e00728c2a4c.js";
async function K(e, t, n) {
  let r = e.get(E, `2023018368`)?.get(`delayed_gen_allowance`, {}),
    a = e.get(b),
    o = a.authenticatedAccountId,
    s = a.authenticatedUserId,
    c = a.accountUserId;
  if (
    r == null ||
    !(`enabled` in r) ||
    r.enabled !== !0 ||
    !(`notification_beacon_enabled` in r) ||
    r.notification_beacon_enabled !== !0 ||
    !S() ||
    e.get(M) ||
    o == null ||
    s == null ||
    c == null ||
    !G(e, o, a.userId)
  )
    return;
  try {
    if (await H()) {
      let { settings: t } = await e.queryClient.fetchQuery({
        queryKey: [`chatgpt-notification-settings`, s, o],
        queryFn: ({ signal: e }) =>
          O.safeGet(`/notifications/settings`, { expectedIdentity: { accountId: o, userId: s }, signal: e }),
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
  let u = e.get(A, t)?.find((e) => e.id === n),
    d = w(u)?.state;
  if (
    (d !== `queued` && d !== `in_progress`) ||
    !S() ||
    e.get(M) ||
    !G(e, o, a.userId) ||
    e.get(b).accountUserId !== c
  )
    return;
  let f = e.get(p);
  h(
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
        title: f.formatMessage({
          id: `chatgpt.image_gen.create_later.notification_banner.title`,
          defaultMessage: `Get notified when your image is ready.`,
          description: `Short headline in the banner above the ChatGPT composer after a signed-in web user successfully schedules an image with Generate later. It invites the user to enable browser push notifications for image completion.`,
        }),
        description: f.formatMessage({
          id: `chatgpt.image_gen.create_later.notification_banner.description`,
          defaultMessage: `We’ll let you know when image generation finishes.`,
          description: `Reassuring body text in the browser notification banner above the ChatGPT composer after a signed-in web user schedules an image with Generate later. Enabling notifications lets ChatGPT notify the user when the scheduled image is ready.`,
        }),
      },
      action_items: [
        {
          id: J,
          type: `primary`,
          text: f.formatMessage({
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
    (r(),
      n(),
      B(),
      W(),
      g(),
      D(),
      v(),
      R(),
      I(),
      P(),
      (q = `delayed_image_gen_notification`),
      (J = `delayed_image_gen_notification_enable`));
  }))();
}
function X(e, t) {
  let n = e.get(U),
    r = !0;
  return e.watch(({ get: i }) => {
    if (i(U) !== n || i(T, t) != null || i(_, t) || V(i(j, t))) return;
    let a = i(d, t);
    if (a == null) return;
    let o = i(C, a),
      s = r;
    if (((r = !1), !s && !Object.values(o).includes(`waiting`))) return;
    let c = e.get(N, t);
    if (c != null && Object.keys(o).length !== 0) {
      k(e, a, { current_node: e.get(x, t), mapping: c });
      for (let [n, r] of Object.entries(e.get(C, a)))
        (r === `waiting` || s) && (e.set(C, a, { ...e.get(C, a), [n]: `resumed` }), Z(e, m(t), n));
    }
  });
}
async function Z(e, t, n) {
  let r = e.get(d, t);
  if (r == null || e.get(T, t) != null || e.get(Q, n) === `pending`) return;
  let i = e.get(U),
    a = e.get(z),
    o = () => {
      if (e.get(U) !== i) return null;
      let r = e.get(N, t)?.[n]?.message,
        a = w(r)?.state;
      return a === `offered` || a === `accepting` ? (r ?? null) : null;
    };
  if (o() != null) {
    e.set(Q, n, `pending`);
    try {
      let s = await O.safePost(`/image-gen/delayed/accept`, {
          requestBody: { conversation_id: r, message_id: n },
          signal: AbortSignal.timeout(3e4),
        }),
        c = o();
      (c != null && F(e, t, { ...c, metadata: { ...c.metadata, image_gen_delayed: s } }),
        e.set(Q, n, `idle`),
        e.get(U) === i && e.get(z) === a && K(e, t, n).catch(() => {}));
    } catch {
      if (o() == null) {
        e.set(Q, n, `idle`);
        return;
      }
      (e.set(Q, n, `failed`),
        e
          .get(u)
          .danger(
            e
              .get(p)
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
    (c(), f(), B(), s(), g(), t(), I(), ee(), y(), L(), P(), Y(), (Q = o(a, (e) => `idle`)));
  }))();
}
export { X as i, Q as n, $ as r, Z as t };
//# sourceMappingURL=runtime-6ec048e8746a.js.map
