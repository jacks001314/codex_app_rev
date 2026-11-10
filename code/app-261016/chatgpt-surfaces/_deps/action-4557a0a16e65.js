import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  Bit as i,
  DCt as a,
  LNt as o,
  Lit as s,
  PBt as c,
  Pit as l,
  Qst as u,
  SCt as d,
  Ul as f,
  Vit as p,
  Vrt as m,
  Wit as h,
  Wl as g,
  XOt as _,
  ZSt as v,
  a4 as y,
  aCt as ee,
  bCt as te,
  ck as ne,
  cwt as re,
  e6 as b,
  fCt as ie,
  iCt as x,
  iwt as ae,
  jit as S,
  nCt as C,
  o4 as oe,
  qrt as se,
  rk as ce,
  tkt as w,
  yCt as le,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $1n as ue,
  $zn as de,
  B1n as T,
  BRr as fe,
  CIr as E,
  CS as pe,
  G2n as me,
  Gfn as he,
  Hnn as ge,
  Jfn as D,
  Jpn as _e,
  Kfn as ve,
  Lpn as O,
  Mir as k,
  Nir as A,
  Nmt as j,
  Qzn as M,
  SIr as N,
  SS as P,
  VPn as F,
  VRr as I,
  Vnn as ye,
  W2n as be,
  Xfn as L,
  _0n as xe,
  _Nr as Se,
  _x as Ce,
  bS as R,
  eMr as we,
  fBr as Te,
  gS as Ee,
  hNr as De,
  iRr as z,
  lBr as Oe,
  nMr as ke,
  p0n as Ae,
  qfn as je,
  qmt as B,
  tyr as Me,
  uBr as V,
  vx as H,
  wLr as U,
  xMr as Ne,
  xS as Pe,
  yMr as Fe,
  zRr as Ie,
} from "./app-initial-ad16eaadf81f.js";
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
  let a = e.get(T, t.conversationId);
  if (a == null) return;
  let o = e.get(I),
    c = () => {
      let t = e.get(I);
      return (
        t.userId === o.userId &&
        t.authenticatedAccountId === o.authenticatedAccountId &&
        t.accountUserId === o.accountUserId
      );
    };
  if (o.authenticatedAccountId !== e.value.accountId || o.userId !== e.value.userId) return;
  let l = e.get(K, t.conversationId) == null ? void 0 : e.query.getOptions(q, t.conversationId).queryKey,
    u;
  try {
    u = crypto.randomUUID();
  } catch {}
  let d = {
      entityKind: `assistant_response`,
      surface: `assistant_response_menu`,
      source: `conversation`,
      action: n == null ? `save` : `unsave`,
      operationId: u,
    },
    f = (t, n) => {
      if (u != null && c())
        try {
          Ne(e, Pe, { ...d, eventType: t, result: n });
        } catch {
          u = void 0;
        }
    };
  (f(
    n == null
      ? P.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_CLICKED
      : P.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_UNSAVE_CLICKED,
  ),
    e.set(J, t, !0));
  let p = `pending:${a}:${t.messageId}`,
    m = {
      pendingResponseFavorite: !0,
      node: {
        id: p,
        kind: `file`,
        name: `${e.get(xe, t.conversationId) ?? e.get(E).formatMessage({ id: `chatgpt.conversation.responseFavorite.pendingTitle`, defaultMessage: `Saved response`, description: `Title for a response being saved to Favorites when its conversation has no title` })}.md`,
        parent_directory_id: null,
        library_artifact_type: `chat_message_snapshot`,
        library_file_category: `text`,
        mime_type: `text/markdown`,
        origination_thread_id: a,
        origination_message_id: t.messageId,
        file_upload_time: new Date().toISOString(),
      },
    },
    g = (t) => {
      e.set(D, (e) => {
        if (e[p] !== m) return e;
        let n = { ...e };
        return (t == null ? delete n[p] : (n[p] = t), n);
      });
    },
    _,
    v;
  try {
    if (
      (n == null
        ? (e.set(D, (e) => ({ ...e, [p]: m })),
          (_ = R(e, {
            isFavorited: !0,
            onView: () => {
              A(e, ye(`/library?tab=favorites`, `banner`));
            },
          })))
        : (e.set(H, n.target_ref.library_file_id, !0),
          (v = n.target_ref.library_file_id),
          e.set(B, n.target_ref.library_file_id, !0),
          (_ = R(e, { isFavorited: !1 }))),
      l != null && (await e.queryClient.cancelQueries({ queryKey: l })),
      !c())
    ) {
      (g(void 0), _?.close());
      return;
    }
    W(
      e,
      t,
      l,
      n == null
        ? {
            favorite_id: p,
            target_ref: { type: `library_file`, library_file_id: p },
            created_at: new Date().toISOString(),
            message_id: t.messageId,
          }
        : null,
    );
    let r, i;
    if (n != null)
      ((r = n.target_ref.library_file_id),
        await z.safeDelete(`/files/library/files/{library_file_id}`, {
          parameters: { path: { library_file_id: r }, query: { soft_delete: !1 } },
        }),
        await ve(e, [r]),
        await de(e.queryClient, r),
        e.queryClient.invalidateQueries({ queryKey: [`4231797315`] }),
        (i = { favoriteId: null, isFavorited: !1 }),
        f(P.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_UNSAVE_SUCCESS, `success`));
    else {
      let n = await z.safePost(`/files/library/saved-chat-messages`, {
        requestBody: { conversation_id: a, message_id: t.messageId },
      });
      ((r = n.file.id),
        (i = { favoriteId: n.favorite_id ?? null, isFavorited: n.favorite_id != null }),
        g(
          n.favorite_id == null || !c()
            ? void 0
            : {
                ..._e(n.file),
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
          l != null &&
          W(e, t, l, {
            favorite_id: n.favorite_id,
            target_ref: { type: `library_file`, library_file_id: r },
            created_at: n.favorited_at ?? new Date().toISOString(),
            message_id: t.messageId,
          }),
        f(
          n.favorite_id == null
            ? P.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_ERROR
            : P.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS,
          n.favorite_id == null ? `error` : `success`,
        ),
        n.favorite_id != null &&
          n.favorite_id.trim().length > 0 &&
          r.trim().length > 0 &&
          o.userId != null &&
          o.authenticatedAccountId != null &&
          e.get(I).accountUserId === o.accountUserId &&
          z
            .safePost(`/unified_user_signals`, {
              additionalHeaders: { "ChatGPT-Account-ID": o.authenticatedAccountId },
              expectedIdentity: { accountId: o.authenticatedAccountId, userId: o.userId },
              requestBody: {
                signal_type: `message_bookmark`,
                product_surface: `CHAT`,
                signal_metadata: {},
                user_metadata: {},
                signal_detail: {
                  common_metadata: { conversation_id: a, message_id: t.messageId },
                  message_bookmark: { favorite_id: n.favorite_id, library_file_id: r },
                },
              },
            })
            .catch((t) => {
              if (!(t instanceof Error && t.name === `AbortError`))
                try {
                  e.get(be).log({
                    message: `Failed to submit message bookmark signal`,
                    status: `error`,
                    context: {},
                  });
                } catch {}
            }));
    }
    if (
      ((n != null || (i.isFavorited && l != null)) &&
        e.queryClient.setQueriesData(
          { queryKey: [`library-favorites-status`, e.value.accountId, e.value.userId] },
          (e) => (e == null ? e : { ...e, [r]: i }),
        ),
      !c())
    ) {
      _?.close();
      return;
    }
    (e.queryClient.invalidateQueries({ queryKey: [`library-api`, e.value.accountId], refetchType: `all` }),
      e.queryClient.invalidateQueries({ queryKey: [`chatgpt-composer-library-files`, e.value.accountId] }),
      l != null && e.queryClient.invalidateQueries({ queryKey: l }));
  } catch (r) {
    (g(void 0), _?.close());
    let a = r instanceof S ? r.diagnosticError : r;
    if ((W(e, t, l, n), !c())) return;
    (f(
      n == null
        ? P.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_ERROR
        : P.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_UNSAVE_ERROR,
      `error`,
    ),
      e
        .get(se)
        .danger(
          n == null
            ? e
                .get(E)
                .formatMessage({
                  id: `chatgpt.conversation.turn_actions.favorite.toast.add.error`,
                  defaultMessage: `Couldn't add response to favorites`,
                  description: `Error when saving an assistant response to Favorites fails; the user can retry`,
                })
            : e
                .get(E)
                .formatMessage({
                  id: `chatgpt.conversation.turn_actions.favorite.toast.remove.error`,
                  defaultMessage: `Couldn't remove response from favorites`,
                  description: `Error when removing a saved response fails; the response stays saved and the user can retry`,
                }),
          {
            errorAnalytics: {
              toastId: `responseFavorites.toggleResponseFavorite.failed`,
              apiErrorCode: a instanceof s ? h.parse(a.code) : void 0,
              userFacingError: i(a instanceof Error ? a : void 0),
            },
          },
        ));
  } finally {
    (n != null && e.set(B, n.target_ref.library_file_id, !1), v != null && e.set(H, v, !1), e.set(J, t, !1));
  }
}
var G, K, q, J, Y;
function X() {
  return (X = e(() => {
    (pe(),
      ae(),
      v(),
      me(),
      k(),
      U(),
      p(),
      m(),
      N(),
      Ce(),
      he(),
      O(),
      j(),
      je(),
      Ee(),
      ge(),
      Fe(),
      r(),
      Oe(),
      De(),
      l(),
      M(),
      Me(),
      F(),
      ke(),
      (G = a(
        u,
        () => !1,
        ({ get: e, set: t }) => {
          let n = e(Te),
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
      (K = le(u, (e, { get: t }) => {
        let n = t(I),
          r = t(T, e),
          i = t(Ae, e);
        if (
          n.accountUserId == null ||
          r == null ||
          t(ue, e) ||
          i?.kind === `conversation` ||
          (i?.kind === `project` && i.ownerUserId != null && i.ownerUserId !== n.accountUserId) ||
          n.authMethod !== `chatgpt` ||
          !n.hasChatGptToken
        )
          return;
        let a = t(V, `224248639`),
          o = t(Se, { layer: `3017902351`, parameter: `web_file_library_enabled` });
        if (
          (a || o) &&
          t(we).data?.fileLibraryEnabledForRegistrationCountry !== !1 &&
          t(V, `494797613`) &&
          t(G)
        )
          return { accountUserId: n.accountUserId, conversationId: r };
      })),
      (q = ie(L, (e, { get: t, scope: n }) => {
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
              ? re
              : ({ pageParam: e }) =>
                  z.safeGet(`/files/library/favorites/conversations/{conversation_id}`, {
                    parameters: {
                      path: { conversation_id: r.conversationId },
                      query: { cursor: e ?? void 0, limit: 20 },
                    },
                  }),
          getNextPageParam: (e) => e.cursor ?? void 0,
          staleTime: 0,
        };
      })),
      (J = d(L, (e) => !1)),
      (Y = te(
        L,
        (e) => ({ bookmark: null, unresolved: !0 }),
        (e, { scope: t, set: n }) =>
          t.watch(({ get: t }) => {
            let r = t(q, e.conversationId),
              i = r.data?.pages.flatMap((e) => e.items).find((t) => t.message_id === e.messageId) ?? null,
              a = i != null && t(H, i.target_ref.library_file_id),
              o = i != null && t(B, i.target_ref.library_file_id);
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
    n = x(Ie),
    r = x(fe);
  if (n == null || r == null) return null;
  let i;
  t[0] !== n || t[1] !== r
    ? ((i = { accountId: n, userId: r }), (t[0] = n), (t[1] = r), (t[2] = i))
    : (i = t[2]);
  let a;
  t[3] === e ? (a = t[4]) : ((a = (0, Q.jsx)(ze, { ...e })), (t[3] = e), (t[4] = a));
  let o;
  return (
    t[5] !== i || t[6] !== a
      ? ((o = (0, Q.jsx)(ee, { scope: L, value: i, children: a })), (t[5] = i), (t[6] = a), (t[7] = o))
      : (o = t[7]),
    o
  );
}
function ze(e) {
  let r = (0, Z.c)(16),
    i = n(L),
    { bookmark: a, unresolved: o } = C(Y, e),
    s = C(J, e),
    c = a == null ? y : f,
    l;
  r[0] !== a?.favorite_id || r[1] !== s || r[2] !== o
    ? ((l = o || s || a?.favorite_id.startsWith(`pending:`)),
      (r[0] = a?.favorite_id),
      (r[1] = s),
      (r[2] = o),
      (r[3] = l))
    : (l = r[3]);
  let u = s ? t : void 0,
    d = s ? void 0 : c,
    p;
  r[4] !== e || r[5] !== i
    ? ((p = () => {
        Le(i, e);
      }),
      (r[4] = e),
      (r[5] = i),
      (r[6] = p))
    : (p = r[6]);
  let m;
  r[7] === a
    ? (m = r[8])
    : ((m =
        a == null
          ? (0, Q.jsx)(w, {
              id: `chatgpt.conversation.turn_actions.favorite.menu_item.add.label`,
              defaultMessage: `Add to Favorites`,
              description: `Menu action saving an immutable assistant response in Library Favorites`,
            })
          : (0, Q.jsx)(w, {
              id: `chatgpt.conversation.turn_actions.favorite.menu_item.remove.label`,
              defaultMessage: `Remove from Favorites`,
              description: `Menu action removing a saved response from Favorites and Library without moving it to Recently Deleted; the original chat remains unchanged`,
            })),
      (r[7] = a),
      (r[8] = m));
  let h;
  return (
    r[9] !== s || r[10] !== l || r[11] !== u || r[12] !== d || r[13] !== p || r[14] !== m
      ? ((h = (0, Q.jsx)(ce.Item, {
          "aria-busy": s,
          disabled: l,
          LeftIcon: u,
          leftIconAsset: d,
          onSelect: p,
          children: m,
        })),
        (r[9] = s),
        (r[10] = l),
        (r[11] = u),
        (r[12] = d),
        (r[13] = p),
        (r[14] = m),
        (r[15] = h))
      : (h = r[15]),
    h
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = c()), oe(), g(), v(), _(), U(), ne(), b(), j(), X(), (Q = o()));
  }))();
}
$();
export { Re as ResponseFavoriteAction };
//# sourceMappingURL=action-4557a0a16e65.js.map
