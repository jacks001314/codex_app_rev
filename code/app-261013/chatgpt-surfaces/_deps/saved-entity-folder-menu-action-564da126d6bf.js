import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Ixt as n,
  Pxt as r,
  hot as i,
  jDt as a,
  lot as o,
  vzt as s,
  xMt as c,
  yzt as l,
  zxt as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  C6t as d,
  Dpt as f,
  G6t as p,
  GMr as m,
  Jx as h,
  QDr as g,
  Qb as _,
  XDr as v,
  XMr as y,
  Xb as b,
  Yb as x,
  Yx as S,
  Zb as C,
  _Yn as w,
  e$n as T,
  ox as E,
  pZn as D,
  qx as O,
  t$n as k,
  tNr as A,
  tln as j,
  vYn as M,
  w6t as N,
  wpt as P,
  yjn as F,
} from "./app-initial-5851df3f6cb1.js";
import { n as I, t as ee } from "./favorite-folder-menu-2542785c765c.js";
import { n as L, r as R, t as z } from "./data-aef902a404f0.js";
function B(e, t, n, r, i, a) {
  let o, s;
  a === `save`
    ? ((o = _.CHATGPT_ENTITY_AFFORDANCE_SAVE_BUTTON),
      (s = N.CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_CLICKED))
    : a === `unsave`
      ? ((o = _.CHATGPT_ENTITY_AFFORDANCE_UNSAVE_BUTTON),
        (s = N.CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_CLICKED))
      : ((o = _.CHATGPT_ENTITY_AFFORDANCE_SAVED_ENTITY_TOAST_ACTION),
        (s = N.CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_TOAST_ACTION_CLICKED));
  let c = n === `client-created-root` ? void 0 : (n ?? void 0),
    l = b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_FULLSCREEN_MAP;
  (a === `toast_action`
    ? (l = b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SAVE_TOAST)
    : (i === `entity_sidebar` || i === `product_sidebar`) &&
      (l = b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR),
    (i === `product_card` || i === `image_tile`) &&
      a !== `toast_action` &&
      (l = b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE),
    g(e, C, {
      actionType: x.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
      surfaceLocation: l,
      entityAffordance: o,
      entityId: t.saved_target.identity?.key,
      entityCategory: U(t),
      messageId: c,
      assistantMessageId: c,
      conversationId: r ?? void 0,
      contentReferenceType: `entity`,
    }),
    V(e, t, {
      eventType: s,
      action: a === `toast_action` ? void 0 : a,
      surface: a === `toast_action` ? `save_toast` : i,
    }));
}
function V(e, t, n) {
  g(e, d, { ...n, entityKind: U(t) });
}
function H(e, t, n, r, i) {
  let a = { operationId: crypto.randomUUID(), entityKind: U(t), surface: n, source: r, action: i };
  return (
    g(e, O, {
      ...a,
      eventType:
        i === `save`
          ? h.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_CLICKED
          : h.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_UNSAVE_CLICKED,
    }),
    (t) => {
      let n;
      ((n =
        i === `save`
          ? t === `success`
            ? h.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS
            : h.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_ERROR
          : t === `success`
            ? h.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_UNSAVE_SUCCESS
            : h.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_UNSAVE_ERROR),
        g(e, O, { ...a, eventType: n, result: t }));
    }
  );
}
function U(e) {
  return e.saved_target.sidebar_params.category === `product_rationale_and_reviews`
    ? `product`
    : `local_business`;
}
function W() {
  return (W = e(() => {
    (E(), S(), p(), v());
  }))();
}
function G(e) {
  let t = (0, J.c)(6),
    n;
  t[0] !== e.request.saved_target.identity || t[1] !== e.request.saved_target.sidebar_params
    ? ((n = JSON.stringify(e.request.saved_target.identity ?? e.request.saved_target.sidebar_params)),
      (t[0] = e.request.saved_target.identity),
      (t[1] = e.request.saved_target.sidebar_params),
      (t[2] = n))
    : (n = t[2]);
  let r = n,
    i;
  return (
    t[3] !== r || t[4] !== e
      ? ((i =
          e.conversationId == null
            ? (0, X.jsx)(q, { ...e, sourceConversationId: null }, r)
            : (0, X.jsx)(K, { ...e, conversationId: e.conversationId }, r)),
        (t[3] = r),
        (t[4] = e),
        (t[5] = i))
      : (i = t[5]),
    i
  );
}
function K(e) {
  let t = (0, J.c)(9),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ conversationId: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = u(D, n),
    a;
  t[3] !== n || t[4] !== i ? ((a = i ?? (k(n) ? null : n)), (t[3] = n), (t[4] = i), (t[5] = a)) : (a = t[5]);
  let o;
  return (
    t[6] !== r || t[7] !== a
      ? ((o = (0, X.jsx)(q, { ...r, sourceConversationId: a })), (t[6] = r), (t[7] = a), (t[8] = o))
      : (o = t[8]),
    o
  );
}
function q(e) {
  let r = (0, J.c)(53),
    {
      sourceConversationId: a,
      messageId: o,
      request: s,
      surface: c,
      onOpenLibrary: l,
      appearance: d,
      className: p,
    } = e,
    h = n(j),
    { data: g, isPending: _, isError: v } = u(R, s.saved_target),
    b = (g?.saved_targets.length ?? 0) > 0,
    x = g?.saved_entities?.[0]?.library_file_id,
    [S, C] = (0, Y.useState)(),
    T = S === void 0 ? (g?.saved_entities?.[0]?.library_directory_id ?? null) : S,
    [E, D] = (0, Y.useState)(!1),
    O = (0, Y.useRef)(null),
    k = (0, Y.useRef)(!1),
    A = (0, Y.useRef)(null);
  if (v || (!b && o != null && a == null)) return null;
  let M;
  r[0] === h
    ? (M = r[1])
    : ((M = () => h.get(m) === h.value.accountId && h.get(y) === h.value.userId), (r[0] = h), (r[1] = M));
  let P = M,
    F;
  r[2] !== h.queryClient || r[3] !== h.value.accountId
    ? ((F = () => {
        (h.queryClient.invalidateQueries({ queryKey: [`library-api`, h.value.accountId] }),
          h.queryClient.invalidateQueries({ queryKey: [`library-favorites-status`, h.value.accountId] }));
      }),
      (r[2] = h.queryClient),
      (r[3] = h.value.accountId),
      (r[4] = F))
    : (F = r[4]);
  let I = F,
    z;
  r[5] !== P || r[6] !== h || r[7] !== c
    ? ((z = () => {
        P() &&
          h
            .get(i)
            .danger(
              (0, X.jsx)(t, {
                id: `chatgpt.savedEntity.saveFailed`,
                defaultMessage: `Could not update bookmark`,
                description: `Error shown when saving or removing an item from Favorites fails`,
              }),
              {
                errorAnalytics: {
                  toastId:
                    c === `map_card` || c === `entity_sidebar`
                      ? `chatgpt.immersiveMap.saveFailed`
                      : `chatgpt.savedEntity.saveFailed`,
                },
              },
            );
      }),
      (r[5] = P),
      (r[6] = h),
      (r[7] = c),
      (r[8] = z))
    : (z = r[8]);
  let U = z,
    W;
  r[9] !== I || r[10] !== P || r[11] !== o || r[12] !== s || r[13] !== h || r[14] !== a || r[15] !== c
    ? ((W = (e) => {
        if (O.current != null)
          return ((O.current.claimedByFolder = O.current.claimedByFolder || e), O.current);
        let t = w();
        B(h, s, o, a, c, `save`);
        let n = e ? void 0 : H(h, s, c, a == null ? `library` : `conversation`, `save`),
          r = h
            .get(L)
            .safePost(`/chat/frontend/v1/saved-entities`, {
              requestBody: {
                ...s,
                origin: a != null && o != null ? { conversation_id: a, message_id: o } : s.origin,
              },
            })
            .then(async (e) =>
              !P() || (await h.query.cancel(R, s.saved_target), !P())
                ? e
                : (h.query.setData(R, s.saved_target, {
                    saved_targets: [e.saved_target],
                    saved_entities: [e],
                  }),
                  I(),
                  n?.(`success`),
                  V(h, s, {
                    eventType: N.CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS,
                    surface: c,
                    action: `save`,
                    result: `success`,
                    mutationDurationMs: Math.max(0, w() - t),
                  }),
                  e),
            )
            .catch((e) => {
              throw P()
                ? (n?.(`error`),
                  V(h, s, {
                    eventType: N.CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_ERROR,
                    surface: c,
                    action: `save`,
                    result: `error`,
                    mutationDurationMs: Math.max(0, w() - t),
                  }),
                  e)
                : e;
            })
            .finally(() => {
              O.current?.promise === r && (O.current = null);
            }),
          i = { claimedByFolder: e, promise: r, startedAtMs: t };
        return ((O.current = i), i);
      }),
      (r[9] = I),
      (r[10] = P),
      (r[11] = o),
      (r[12] = s),
      (r[13] = h),
      (r[14] = a),
      (r[15] = c),
      (r[16] = W))
    : (W = r[16]);
  let G = W,
    K;
  r[17] !== _ ||
  r[18] !== U ||
  r[19] !== I ||
  r[20] !== P ||
  r[21] !== o ||
  r[22] !== l ||
  r[23] !== s ||
  r[24] !== b ||
  r[25] !== h ||
  r[26] !== a ||
  r[27] !== G ||
  r[28] !== c
    ? ((K = () => {
        if (!P() || _ || k.current || O.current != null) return;
        if (!b) {
          let e = G(!1);
          e.promise.then(
            () => {
              P() &&
                !e.claimedByFolder &&
                (V(h, s, {
                  eventType: N.CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SUCCESS_TOAST_RENDERED,
                  surface: `save_toast`,
                  action: `save`,
                  clickToSuccessToastMs: Math.max(0, w() - e.startedAtMs),
                }),
                A.current?.close(),
                (A.current = h
                  .get(i)
                  .success(
                    (0, X.jsx)(t, {
                      id: `chatgpt.savedEntity.saved`,
                      defaultMessage: `Added to Favorites`,
                      description: `Success message after saving the selected item to Favorites`,
                    }),
                    {
                      id: `saved-entities-save-success`,
                      variant: `successNeutral`,
                      hasCloseButton: !1,
                      primaryAction: {
                        label: (0, X.jsx)(t, {
                          id: `chatgpt.savedEntity.viewSavedPlace`,
                          defaultMessage: `View`,
                          description: `Action opening Library from the confirmation that an item was saved to Favorites`,
                        }),
                        onClick: () => {
                          P() &&
                            (B(h, s, o, a, c, `toast_action`),
                            A.current?.close(),
                            (A.current = null),
                            l(null));
                        },
                      },
                    },
                  )));
            },
            () => {
              e.claimedByFolder || U();
            },
          );
          return;
        }
        let e = w();
        B(h, s, o, a, c, `unsave`);
        let n = H(h, s, c, a == null ? `library` : `conversation`, `unsave`);
        ((k.current = !0),
          D(!0),
          h
            .get(L)
            .safePost(`/chat/frontend/v1/saved-entities/remove`, {
              requestBody: { saved_target: s.saved_target },
            })
            .then(async () => {
              P() &&
                (await h.query.cancel(R, s.saved_target),
                P() &&
                  (h.query.setData(R, s.saved_target, { saved_targets: [], saved_entities: [] }),
                  n(`success`),
                  V(h, s, {
                    eventType: N.CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_SUCCESS,
                    surface: c,
                    action: `unsave`,
                    result: `success`,
                    mutationDurationMs: Math.max(0, w() - e),
                  }),
                  I(),
                  A.current?.close(),
                  (A.current = h
                    .get(i)
                    .success(
                      (0, X.jsx)(t, {
                        id: `chatgpt.savedEntity.removed`,
                        defaultMessage: `Removed from Favorites`,
                        description: `Success message after removing the selected item from Favorites and Library folders`,
                      }),
                      { variant: `successNeutral`, hasCloseButton: !1 },
                    ))));
            })
            .catch(() => {
              P() &&
                (n(`error`),
                V(h, s, {
                  eventType: N.CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_ERROR,
                  surface: c,
                  action: `unsave`,
                  result: `error`,
                  mutationDurationMs: Math.max(0, w() - e),
                }),
                U());
            })
            .finally(() => {
              ((k.current = !1), D(!1));
            }));
      }),
      (r[17] = _),
      (r[18] = U),
      (r[19] = I),
      (r[20] = P),
      (r[21] = o),
      (r[22] = l),
      (r[23] = s),
      (r[24] = b),
      (r[25] = h),
      (r[26] = a),
      (r[27] = G),
      (r[28] = c),
      (r[29] = K))
    : (K = r[29]);
  let q = K,
    Z;
  r[30] !== U ||
  r[31] !== I ||
  r[32] !== P ||
  r[33] !== x ||
  r[34] !== o ||
  r[35] !== l ||
  r[36] !== s ||
  r[37] !== b ||
  r[38] !== h ||
  r[39] !== T ||
  r[40] !== a ||
  r[41] !== G ||
  r[42] !== c
    ? ((Z = async (e, n) => {
        if (!P() || k.current) return;
        ((k.current = !0), D(!0));
        let r = T === e.id ? null : e.id;
        C(r);
        let u = O.current ?? (!b || x == null ? G(!0) : null);
        (u != null && (u.claimedByFolder = !0),
          await Promise.resolve(u?.promise ?? null)
            .then(async (u) => {
              if (!P()) return;
              let d = u?.library_file_id ?? x;
              if (d == null) throw Error(`Saved entity response did not include a Library file ID`);
              (await h
                .get(f)
                .safePatch(`/files/library/files/{library_file_id}/move`, {
                  parameters: { path: { library_file_id: d } },
                  requestBody: { directory_id: r },
                }),
                await h.query.cancel(R, s.saved_target),
                P() &&
                  (h.query.setData(R, s.saved_target, (e) =>
                    e == null
                      ? e
                      : {
                          ...e,
                          saved_entities: e.saved_entities?.map((e) =>
                            e.library_file_id === d ? { ...e, library_directory_id: r } : e,
                          ),
                        },
                  ),
                  I(),
                  h.query.invalidate(R, s.saved_target),
                  A.current?.close(),
                  (A.current = null),
                  r != null &&
                    (A.current = h
                      .get(i)
                      .success(
                        (0, X.jsx)(t, {
                          id: `chatgpt.savedEntity.addedToFolder`,
                          defaultMessage: `{created, select, yes {Created} other {Added to}} {folder}`,
                          description: `Success message after placing a saved item in a Library folder; folder is the user's folder name`,
                          values: { created: n ? `yes` : `no`, folder: e.name },
                        }),
                        {
                          variant: `successNeutral`,
                          hasCloseButton: !1,
                          primaryAction: {
                            label: (0, X.jsx)(t, {
                              id: `chatgpt.savedEntity.viewPlaceFolder`,
                              defaultMessage: `View`,
                              description: `Action opening the Library folder from the confirmation that a saved item was added to it`,
                            }),
                            onClick: () => {
                              P() &&
                                (B(h, s, o, a, c, `toast_action`),
                                A.current?.close(),
                                (A.current = null),
                                l(r));
                            },
                          },
                        },
                      ))));
            }, U)
            .catch(() => {
              P() &&
                h
                  .get(i)
                  .danger(
                    (0, X.jsx)(t, {
                      id: `chatgpt.savedEntity.folderFailed`,
                      defaultMessage: `Could not update folder`,
                      description: `Error after adding an item to a Library folder fails; the item may still be saved in Favorites`,
                    }),
                    {
                      errorAnalytics: {
                        toastId:
                          c === `map_card` || c === `entity_sidebar`
                            ? `chatgpt.immersiveMap.folderFailed`
                            : `chatgpt.savedEntity.folderFailed`,
                      },
                    },
                  );
            })
            .finally(() => {
              ((k.current = !1), D(!1), C(void 0));
            }));
      }),
      (r[30] = U),
      (r[31] = I),
      (r[32] = P),
      (r[33] = x),
      (r[34] = o),
      (r[35] = l),
      (r[36] = s),
      (r[37] = b),
      (r[38] = h),
      (r[39] = T),
      (r[40] = a),
      (r[41] = G),
      (r[42] = c),
      (r[43] = Z))
    : (Z = r[43]);
  let Q = Z,
    $;
  return (
    r[44] !== d ||
    r[45] !== E ||
    r[46] !== _ ||
    r[47] !== p ||
    r[48] !== b ||
    r[49] !== Q ||
    r[50] !== T ||
    r[51] !== q
      ? (($ = (0, X.jsx)(ee, {
          className: p,
          appearance: d,
          isSaved: b,
          isBusy: E,
          isCheckingStatus: _,
          selectedFolderId: T,
          onToggleFavorite: q,
          onSelectFolder: Q,
        })),
        (r[44] = d),
        (r[45] = E),
        (r[46] = _),
        (r[47] = p),
        (r[48] = b),
        (r[49] = Q),
        (r[50] = T),
        (r[51] = q),
        (r[52] = $))
      : ($ = r[52]),
    $
  );
}
var J, Y, X;
function Z() {
  return (Z = e(() => {
    ((J = s()), p(), r(), (Y = l()), a(), A(), o(), I(), P(), M(), T(), F(), W(), z(), (X = c()));
  }))();
}
export { Z as n, G as t };
//# sourceMappingURL=saved-entity-folder-menu-action-564da126d6bf.js.map
