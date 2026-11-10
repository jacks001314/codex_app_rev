import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AO as t,
  Cot as n,
  Hxt as r,
  IDt as i,
  Ixt as a,
  Ort as o,
  Pxt as s,
  TO as c,
  Trt as l,
  USt as u,
  Vxt as d,
  Yxt as f,
  a2 as p,
  aSt as m,
  cl as h,
  hot as g,
  hrt as _,
  i3 as v,
  jDt as ee,
  lot as te,
  nSt as ne,
  o2 as re,
  r3 as ie,
  rSt as ae,
  sl as oe,
  uSt as se,
  vrt as ce,
  vzt as y,
  wot as b,
  wrt as x,
  xMt as S,
  xrt as le,
  zSt as ue,
  zxt as C,
} from "./app-shared-bbfeca5e5737.js";
import {
  $cn as w,
  $ln as de,
  BZn as fe,
  EZn as pe,
  GMr as me,
  GOr as he,
  Gb as ge,
  Hln as _e,
  Hx as ve,
  Jx as T,
  Kb as E,
  Kx as D,
  NDr as O,
  OPr as k,
  QDr as A,
  QMr as j,
  Qcn as M,
  Rpt as N,
  TIn as P,
  WZn as F,
  XDr as ye,
  XMr as be,
  Xcn as xe,
  Ymr as I,
  Yx as Se,
  Zcn as L,
  _$n as Ce,
  aIr as we,
  b9t as Te,
  ehr as Ee,
  g$n as De,
  jDr as Oe,
  jPr as ke,
  kPr as R,
  lIr as Ae,
  oIr as z,
  pZn as B,
  qOr as je,
  qx as Me,
  tNr as V,
  tln as H,
  uIr as Ne,
  wIn as Pe,
  wpt as U,
  x9t as Fe,
  yjn as Ie,
} from "./app-initial-5851df3f6cb1.js";
function W(e, t, n, r) {
  n != null &&
    e.queryClient.setQueryData(n, (e) =>
      e == null
        ? r == null
          ? void 0
          : { pages: [{ items: [r], cursor: null }], pageParams: [null] }
        : {
            ...e,
            pages: e.pages.map((e, n) => ({
              ...e,
              items: [
                ...(n === 0 && r != null ? [r] : []),
                ...e.items.filter((e) => e.message_id !== t.messageId),
              ],
            })),
          },
    );
}
async function Le(e, t) {
  let { bookmark: n, unresolved: r } = e.get(Y, t);
  if (r || e.get(J, t) || n?.favorite_id.startsWith(`pending:`)) return;
  let i = e.get(B, t.conversationId);
  if (i == null) return;
  let a = e.get(j),
    s = () => {
      let t = e.get(j);
      return (
        t.userId === a.userId &&
        t.authenticatedAccountId === a.authenticatedAccountId &&
        t.accountUserId === a.accountUserId
      );
    };
  if (a.authenticatedAccountId !== e.value.accountId || a.userId !== e.value.userId) return;
  let c = e.get(K, t.conversationId) == null ? void 0 : e.query.getOptions(q, t.conversationId).queryKey,
    l;
  try {
    l = crypto.randomUUID();
  } catch {}
  let u = {
      entityKind: `assistant_response`,
      surface: `assistant_response_menu`,
      source: `conversation`,
      action: n == null ? `save` : `unsave`,
      operationId: l,
    },
    d = (t, n) => {
      if (l != null && s())
        try {
          A(e, Me, { ...u, eventType: t, result: n });
        } catch {
          l = void 0;
        }
    };
  (d(
    n == null
      ? T.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_CLICKED
      : T.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_UNSAVE_CLICKED,
  ),
    e.set(J, t, !0));
  let f = `pending:${i}:${t.messageId}`,
    p = {
      pendingResponseFavorite: !0,
      node: {
        id: f,
        kind: `file`,
        name: `${e.get(F, t.conversationId) ?? e.get(z).formatMessage({ id: `chatgpt.conversation.responseFavorite.pendingTitle`, defaultMessage: `Saved response`, description: `Title for a response being saved to Favorites when its conversation has no title` })}.md`,
        parent_directory_id: null,
        library_artifact_type: `chat_message_snapshot`,
        library_file_category: `text`,
        mime_type: `text/markdown`,
        origination_thread_id: i,
        origination_message_id: t.messageId,
        file_upload_time: new Date().toISOString(),
      },
    },
    m = (t) => {
      e.set(w, (e) => {
        if (e[f] !== p) return e;
        let n = { ...e };
        return (t == null ? delete n[f] : (n[f] = t), n);
      });
    },
    h,
    v;
  try {
    if (
      (n == null
        ? (e.set(w, (e) => ({ ...e, [f]: p })),
          (h = D(e, {
            isFavorited: !0,
            onView: () => {
              Ne(e, Te(`/library?tab=favorites`, `banner`));
            },
          })))
        : (e.set(E, n.target_ref.library_file_id, !0),
          (v = n.target_ref.library_file_id),
          e.set(N, n.target_ref.library_file_id, !0),
          (h = D(e, { isFavorited: !1 }))),
      c != null && (await e.queryClient.cancelQueries({ queryKey: c })),
      !s())
    ) {
      (m(void 0), h?.close());
      return;
    }
    W(
      e,
      t,
      c,
      n == null
        ? {
            favorite_id: f,
            target_ref: { type: `library_file`, library_file_id: f },
            created_at: new Date().toISOString(),
            message_id: t.messageId,
          }
        : null,
    );
    let r, o;
    if (n != null)
      ((r = n.target_ref.library_file_id),
        await I.safeDelete(`/files/library/files/{library_file_id}`, {
          parameters: { path: { library_file_id: r }, query: { soft_delete: !1 } },
        }),
        await L(e, [r]),
        await P(e.queryClient, r),
        e.queryClient.invalidateQueries({ queryKey: [`4231797315`] }),
        (o = { favoriteId: null, isFavorited: !1 }),
        d(T.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_UNSAVE_SUCCESS, `success`));
    else {
      let n = await I.safePost(`/files/library/saved-chat-messages`, {
        requestBody: { conversation_id: i, message_id: t.messageId },
      });
      ((r = n.file.id),
        (o = { favoriteId: n.favorite_id ?? null, isFavorited: n.favorite_id != null }),
        m(
          n.favorite_id == null || !s()
            ? void 0
            : {
                ...de(n.file),
                favorite: {
                  favorite_id: n.favorite_id,
                  target_ref: { type: `library_file`, library_file_id: r },
                  created_at: n.favorited_at ?? new Date().toISOString(),
                  availability: `available`,
                  retryable: !1,
                  item: n.file,
                },
              },
        ),
        n.favorite_id != null &&
          c != null &&
          W(e, t, c, {
            favorite_id: n.favorite_id,
            target_ref: { type: `library_file`, library_file_id: r },
            created_at: n.favorited_at ?? new Date().toISOString(),
            message_id: t.messageId,
          }),
        d(
          n.favorite_id == null
            ? T.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_ERROR
            : T.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS,
          n.favorite_id == null ? `error` : `success`,
        ),
        n.favorite_id != null &&
          n.favorite_id.trim().length > 0 &&
          r.trim().length > 0 &&
          a.userId != null &&
          a.authenticatedAccountId != null &&
          e.get(j).accountUserId === a.accountUserId &&
          I.safePost(`/unified_user_signals`, {
            additionalHeaders: { "ChatGPT-Account-ID": a.authenticatedAccountId },
            expectedIdentity: { accountId: a.authenticatedAccountId, userId: a.userId },
            requestBody: {
              signal_type: `message_bookmark`,
              product_surface: `CHAT`,
              signal_metadata: {},
              user_metadata: {},
              signal_detail: {
                common_metadata: { conversation_id: i, message_id: t.messageId },
                message_bookmark: { favorite_id: n.favorite_id, library_file_id: r },
              },
            },
          }).catch((t) => {
            if (!(t instanceof Error && t.name === `AbortError`))
              try {
                e.get(De).log({
                  message: `Failed to submit message bookmark signal`,
                  status: `error`,
                  context: {},
                });
              } catch {}
          }));
    }
    if (
      ((n != null || (o.isFavorited && c != null)) &&
        e.queryClient.setQueriesData(
          { queryKey: [`library-favorites-status`, e.value.accountId, e.value.userId] },
          (e) => (e == null ? e : { ...e, [r]: o }),
        ),
      !s())
    ) {
      h?.close();
      return;
    }
    (e.queryClient.invalidateQueries({ queryKey: [`library-api`, e.value.accountId], refetchType: `all` }),
      e.queryClient.invalidateQueries({ queryKey: [`chatgpt-composer-library-files`, e.value.accountId] }),
      c != null && e.queryClient.invalidateQueries({ queryKey: c }));
  } catch (r) {
    (m(void 0), h?.close());
    let i = r instanceof _ ? r.diagnosticError : r;
    if ((W(e, t, c, n), !s())) return;
    (d(
      n == null
        ? T.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_ERROR
        : T.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_UNSAVE_ERROR,
      `error`,
    ),
      e
        .get(g)
        .danger(
          n == null
            ? e
                .get(z)
                .formatMessage({
                  id: `chatgpt.conversation.turn_actions.favorite.toast.add.error`,
                  defaultMessage: `Couldn't add response to favorites`,
                  description: `Error when saving an assistant response to Favorites fails; the user can retry`,
                })
            : e
                .get(z)
                .formatMessage({
                  id: `chatgpt.conversation.turn_actions.favorite.toast.remove.error`,
                  defaultMessage: `Couldn't remove response from favorites`,
                  description: `Error when removing a saved response fails; the response stays saved and the user can retry`,
                }),
          {
            errorAnalytics: {
              toastId: `responseFavorites.toggleResponseFavorite.failed`,
              apiErrorCode: i instanceof le ? o.parse(i.code) : void 0,
              userFacingError: x(i instanceof Error ? i : void 0),
            },
          },
        ));
  } finally {
    (n != null && e.set(N, n.target_ref.library_file_id, !1), v != null && e.set(E, v, !1), e.set(J, t, !1));
  }
}
var G, K, q, J, Y;
function X() {
  return (X = e(() => {
    (Se(),
      ue(),
      s(),
      Ce(),
      Ae(),
      V(),
      l(),
      te(),
      we(),
      ge(),
      xe(),
      _e(),
      U(),
      M(),
      ve(),
      Fe(),
      ye(),
      b(),
      k(),
      he(),
      ce(),
      Pe(),
      Ee(),
      Ie(),
      O(),
      (G = se(
        n,
        () => !1,
        ({ get: e, set: t }) => {
          let n = e(ke),
            r = () => {
              t(n?.getExperiment(`3333071866`, { disableExposureLog: !0 }).get(`enabled`, !1) === !0);
            };
          return (
            r(),
            n?.on(`values_updated`, r),
            () => {
              n?.off(`values_updated`, r);
            }
          );
        },
      )),
      (K = ne(n, (e, { get: t }) => {
        let n = t(j),
          r = t(B, e),
          i = t(fe, e);
        if (
          n.accountUserId == null ||
          r == null ||
          t(pe, e) ||
          i?.kind === `conversation` ||
          (i?.kind === `project` && i.ownerUserId != null && i.ownerUserId !== n.accountUserId) ||
          n.authMethod !== `chatgpt` ||
          !n.hasChatGptToken
        )
          return;
        let a = t(R, `224248639`),
          o = t(je, { layer: `3017902351`, parameter: `web_file_library_enabled` });
        if (
          (a || o) &&
          t(Oe).data?.fileLibraryEnabledForRegistrationCountry !== !1 &&
          t(R, `494797613`) &&
          t(G)
        )
          return { accountUserId: n.accountUserId, conversationId: r };
      })),
      (q = f(H, (e, { get: t, scope: n }) => {
        let r = t(K, e);
        return {
          queryKey: [
            `response-favorites`,
            n.value.accountId,
            r?.accountUserId ?? null,
            r?.conversationId ?? null,
          ],
          enabled: r != null,
          initialPageParam: null,
          queryFn:
            r == null
              ? u
              : ({ pageParam: e }) =>
                  I.safeGet(`/files/library/favorites/conversations/{conversation_id}`, {
                    parameters: {
                      path: { conversation_id: r.conversationId },
                      query: { cursor: e ?? void 0, limit: 20 },
                    },
                  }),
          getNextPageParam: (e) => e.cursor ?? void 0,
          staleTime: 0,
        };
      })),
      (J = m(H, (e) => !1)),
      (Y = ae(
        H,
        (e) => ({ bookmark: null, unresolved: !0 }),
        (e, { scope: t, set: n }) =>
          t.watch(({ get: t }) => {
            let r = t(q, e.conversationId),
              i = r.data?.pages.flatMap((e) => e.items).find((t) => t.message_id === e.messageId) ?? null,
              a = i != null && t(E, i.target_ref.library_file_id),
              o = i != null && t(N, i.target_ref.library_file_id);
            (n({
              bookmark: o ? null : i,
              unresolved:
                a || o || (i == null && (r.isLoading || r.isError || r.hasNextPage || r.isFetchingNextPage)),
            }),
              i == null &&
                r.hasNextPage &&
                !r.isFetchingNextPage &&
                !r.isFetchNextPageError &&
                r.fetchNextPage());
          }),
      )));
  }))();
}
function Re(e) {
  let t = (0, Z.c)(8),
    n = d(me),
    i = d(be);
  if (n == null || i == null) return null;
  let a;
  t[0] !== n || t[1] !== i
    ? ((a = { accountId: n, userId: i }), (t[0] = n), (t[1] = i), (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === e ? (o = t[4]) : ((o = (0, Q.jsx)(ze, { ...e })), (t[3] = e), (t[4] = o));
  let s;
  return (
    t[5] !== a || t[6] !== o
      ? ((s = (0, Q.jsx)(r, { scope: H, value: a, children: o })), (t[5] = a), (t[6] = o), (t[7] = s))
      : (s = t[7]),
    s
  );
}
function ze(e) {
  let t = (0, Z.c)(16),
    n = a(H),
    { bookmark: r, unresolved: o } = C(Y, e),
    s = C(J, e),
    l = r == null ? p : oe,
    u;
  t[0] !== r?.favorite_id || t[1] !== s || t[2] !== o
    ? ((u = o || s || r?.favorite_id.startsWith(`pending:`)),
      (t[0] = r?.favorite_id),
      (t[1] = s),
      (t[2] = o),
      (t[3] = u))
    : (u = t[3]);
  let d = s ? ie : void 0,
    f = s ? void 0 : l,
    m;
  t[4] !== e || t[5] !== n
    ? ((m = () => {
        Le(n, e);
      }),
      (t[4] = e),
      (t[5] = n),
      (t[6] = m))
    : (m = t[6]);
  let h;
  t[7] === r
    ? (h = t[8])
    : ((h =
        r == null
          ? (0, Q.jsx)(i, {
              id: `chatgpt.conversation.turn_actions.favorite.menu_item.add.label`,
              defaultMessage: `Add to Favorites`,
              description: `Menu action saving an immutable assistant response in Library Favorites`,
            })
          : (0, Q.jsx)(i, {
              id: `chatgpt.conversation.turn_actions.favorite.menu_item.remove.label`,
              defaultMessage: `Remove from Favorites`,
              description: `Menu action removing a saved response from Favorites and Library without moving it to Recently Deleted; the original chat remains unchanged`,
            })),
      (t[7] = r),
      (t[8] = h));
  let g;
  return (
    t[9] !== s || t[10] !== u || t[11] !== d || t[12] !== f || t[13] !== m || t[14] !== h
      ? ((g = (0, Q.jsx)(c.Item, {
          "aria-busy": s,
          disabled: u,
          LeftIcon: d,
          leftIconAsset: f,
          onSelect: m,
          children: h,
        })),
        (t[9] = s),
        (t[10] = u),
        (t[11] = d),
        (t[12] = f),
        (t[13] = m),
        (t[14] = h),
        (t[15] = g))
      : (g = t[15]),
    g
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = y()), re(), h(), s(), ee(), V(), t(), v(), U(), X(), (Q = S()));
  }))();
}
$();
export { Re as ResponseFavoriteAction };
//# sourceMappingURL=action-3f2e84b7873e.js.map
