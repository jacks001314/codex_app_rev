import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AO as t,
  Dz as n,
  IDt as r,
  TO as i,
  a2 as a,
  ax as o,
  hot as s,
  i2 as c,
  ix as l,
  jDt as u,
  kz as d,
  lot as f,
  o2 as p,
  ox as m,
  r2 as h,
  rx as g,
  vzt as _,
  xMt as v,
} from "./app-shared-bbfeca5e5737.js";
import {
  C6t as y,
  G6t as b,
  GMr as x,
  Gx as S,
  Hx as C,
  QDr as w,
  Qb as T,
  Vx as E,
  XDr as D,
  XMr as O,
  Xb as k,
  Yb as A,
  Zb as j,
  aIr as M,
  b9t as N,
  oIr as P,
  ox as F,
  tNr as I,
  w6t as L,
  x9t as R,
} from "./app-initial-5851df3f6cb1.js";
import { n as z, r as B } from "./favorite-folders-6a0ba920b2d1.js";
function V(e) {
  let t = (0, H.c)(9),
    { isFavorited: s, disabled: c, onSelect: l } = e,
    u;
  t[0] === s
    ? (u = t[1])
    : ((u = (0, U.jsx)(n, { icon: { assets: s ? { 16: o, 20: g } : { 16: a, 20: h } } })),
      (t[0] = s),
      (t[1] = u));
  let d;
  t[2] === s
    ? (d = t[3])
    : ((d = s
        ? (0, U.jsx)(r, {
            id: `library.favorites.remove`,
            defaultMessage: `Remove from Favorites`,
            description: `Action in a Library item menu or preview to remove the item from Favorites`,
          })
        : (0, U.jsx)(r, {
            id: `library.favorites.add`,
            defaultMessage: `Add to Favorites`,
            description: `Action to save a Library file as a favorite`,
          })),
      (t[2] = s),
      (t[3] = d));
  let f;
  return (
    t[4] !== c || t[5] !== l || t[6] !== u || t[7] !== d
      ? ((f = (0, U.jsx)(i.Item, { disabled: c, leftIcon: u, onSelect: l, children: d })),
        (t[4] = c),
        (t[5] = l),
        (t[6] = u),
        (t[7] = d),
        (t[8] = f))
      : (f = t[8]),
    f
  );
}
var H, U;
function W() {
  return (W = e(() => {
    ((H = _()), m(), l(), p(), c(), u(), t(), d(), (U = v()));
  }))();
}
async function G(
  e,
  {
    image: t,
    conversationId: n,
    libraryFileId: r,
    status: i,
    folder: a,
    created: o,
    onView: s,
    surface: c = `image_tile`,
  },
) {
  return K(e, {
    conversationId: n,
    messageId: t.chatGptMessageId,
    libraryFileId: r,
    status: i,
    surface: c,
    folder: a,
    created: o,
    onView: s,
    updateFavorite: async (t, n, a) =>
      (await S(e, {
        libraryFileId: r,
        favoriteId: i.favoriteId,
        isFavorited: t,
        surface: c,
        entityKind: `image`,
        source: `conversation`,
        showToast: n,
        onView: a,
      }))
        ? r
        : null,
  });
}
async function K(
  e,
  {
    conversationId: t,
    messageId: n,
    libraryFileId: r,
    status: i,
    surface: a,
    folder: o,
    created: c,
    onView: l,
    updateFavorite: u,
  },
) {
  let d = () => e.get(x) === e.value.accountId && e.get(O) === e.value.userId;
  if (!d() || i.isUnavailable) return;
  let f = e.get(P),
    p = (r) => {
      d() && (q(e, t, n, `toast_action`, a), l?.(N(r, `banner`)));
    },
    m = r,
    h = o != null || !i.isFavorited,
    g = o == null || !i.isFavorited,
    _ = h ? `save` : `unsave`,
    v = performance.now();
  if (g) {
    (q(e, t, n, _, a), (m = await u(h, o == null, l == null ? void 0 : () => p(`/library?tab=favorites`))));
    let r = m != null;
    if (!d()) return;
    let i;
    if (
      ((i = r
        ? h
          ? L.CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS
          : L.CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_SUCCESS
        : h
          ? L.CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_ERROR
          : L.CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_ERROR),
      J(e, {
        eventType: i,
        action: _,
        result: r ? `success` : `error`,
        surface: a,
        mutationDurationMs: r ? performance.now() - v : void 0,
      }),
      !r)
    )
      return;
  }
  if (d()) {
    if (o != null) {
      try {
        if (m == null) throw Error(`Image Library file ID is missing.`);
        await B(e, m, o.id);
      } catch {
        d() &&
          e
            .get(s)
            .danger(
              f.formatMessage({
                id: `library.favoriteFolder.moveFailed`,
                defaultMessage: `Could not add to folder`,
                description: `Error toast when the saved image could not be moved into the selected Library folder. The image remains in Favorites`,
              }),
              { errorAnalytics: { toastId: `library.favoriteFolder.moveFailed` } },
            );
        return;
      }
      if (!d()) return;
      (E(e),
        e
          .get(s)
          .success(
            c
              ? f.formatMessage(
                  {
                    id: `library.favoriteFolder.created`,
                    defaultMessage: `{folderName} successfully created`,
                    description: `Success toast after creating a Library folder and moving the saved image into it. folderName is the user's folder name`,
                  },
                  { folderName: o.name },
                )
              : f.formatMessage(
                  {
                    id: `library.favoriteFolder.added`,
                    defaultMessage: `Added to {folderName}`,
                    description: `Success toast after moving the saved image into a Library folder. folderName is the user's folder name`,
                  },
                  { folderName: o.name },
                ),
            {
              primaryAction: {
                label: f.formatMessage({
                  id: `library.favoriteFolder.view`,
                  defaultMessage: `View`,
                  description: `Toast action that opens the Library folder which now contains the saved image`,
                }),
                onClick: () => p(`/library/d/${encodeURIComponent(o.id)}`),
              },
            },
          ));
    }
    g &&
      h &&
      J(e, {
        eventType: L.CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SUCCESS_TOAST_RENDERED,
        surface: `save_toast`,
        action: _,
        clickToSuccessToastMs: performance.now() - v,
      });
  }
}
function q(e, t, n, r, i) {
  let a = n === `client-created-root` ? void 0 : (n ?? void 0),
    o,
    s;
  r === `save`
    ? ((o = T.CHATGPT_ENTITY_AFFORDANCE_SAVE_BUTTON),
      (s = L.CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_CLICKED))
    : r === `unsave`
      ? ((o = T.CHATGPT_ENTITY_AFFORDANCE_UNSAVE_BUTTON),
        (s = L.CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_CLICKED))
      : ((o = T.CHATGPT_ENTITY_AFFORDANCE_SAVED_ENTITY_TOAST_ACTION),
        (s = L.CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_TOAST_ACTION_CLICKED));
  let c = k.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE;
  (r === `toast_action`
    ? (c = k.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SAVE_TOAST)
    : i === `image_lightbox` && (c = k.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_FULLSCREEN_IMAGE_GALLERY),
    w(e, j, {
      actionType: A.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
      surfaceLocation: c,
      entityAffordance: o,
      entityCategory: `image`,
      conversationId: t,
      messageId: a,
      assistantMessageId: a,
      contentReferenceType: `entity`,
    }),
    J(e, {
      eventType: s,
      action: r === `toast_action` ? void 0 : r,
      surface: r === `toast_action` ? `save_toast` : i,
    }));
}
function J(e, t) {
  w(e, y, { ...t, entityKind: `image` });
}
function Y() {
  return (Y = e(() => {
    (F(), b(), I(), f(), M(), z(), C(), R(), D());
  }))();
}
export { W as a, V as i, G as n, K as r, Y as t };
//# sourceMappingURL=image-favorite-actions-308dd8bfc2aa.js.map
