export const __rspack_esm_ids = [590108]
export const __webpack_modules__ = {
  G1h3(e, r, t) {
    t.d(r, { W: () => A, D: () => I })
    var a = t("ozm1")
    let i = { $type: "protobuf_analytics_events.v1.ChatgptLearningFlashcardsUiEvent" }
    var n = t("yGJW")
    let d = {
        grid_opened: "CHATGPT_LEARNING_FLASHCARDS_UI_ACTION_GRID_OPENED",
        card_viewed: "CHATGPT_LEARNING_FLASHCARDS_UI_ACTION_CARD_VIEWED",
        filter_changed: "CHATGPT_LEARNING_FLASHCARDS_UI_ACTION_FILTER_CHANGED",
        add_card_clicked: "CHATGPT_LEARNING_FLASHCARDS_UI_ACTION_ADD_CARD_CLICKED",
        editor_opened: "CHATGPT_LEARNING_FLASHCARDS_UI_ACTION_EDITOR_OPENED",
        editor_cancelled: "CHATGPT_LEARNING_FLASHCARDS_UI_ACTION_EDITOR_CANCELLED",
        edit_save_attempt: "CHATGPT_LEARNING_FLASHCARDS_UI_ACTION_EDIT_SAVE_ATTEMPT",
        edit_save_result: "CHATGPT_LEARNING_FLASHCARDS_UI_ACTION_EDIT_SAVE_RESULT",
      },
      s = {
        library_grid: "CHATGPT_LEARNING_FLASHCARDS_UI_SURFACE_LIBRARY_GRID",
        library_editor: "CHATGPT_LEARNING_FLASHCARDS_UI_SURFACE_LIBRARY_EDITOR",
        chat_grid: "CHATGPT_LEARNING_FLASHCARDS_UI_SURFACE_CHAT_GRID",
        chat_editor: "CHATGPT_LEARNING_FLASHCARDS_UI_SURFACE_CHAT_EDITOR",
      },
      l = {
        full: "CHATGPT_LEARNING_FLASHCARDS_UI_PASS_KIND_FULL",
        subset: "CHATGPT_LEARNING_FLASHCARDS_UI_PASS_KIND_SUBSET",
        missed: "CHATGPT_LEARNING_FLASHCARDS_UI_PASS_KIND_MISSED",
      },
      c = {
        all: "CHATGPT_LEARNING_FLASHCARDS_UI_FILTER_ALL",
        reviewed: "CHATGPT_LEARNING_FLASHCARDS_UI_FILTER_REVIEWED",
        missed: "CHATGPT_LEARNING_FLASHCARDS_UI_FILTER_MISSED",
      },
      _ = {
        add: "CHATGPT_LEARNING_FLASHCARDS_UI_CHANGE_TYPE_ADD",
        edit: "CHATGPT_LEARNING_FLASHCARDS_UI_CHANGE_TYPE_EDIT",
      },
      o = {
        changed: "CHATGPT_LEARNING_FLASHCARDS_UI_OUTCOME_CHANGED",
        unchanged: "CHATGPT_LEARNING_FLASHCARDS_UI_OUTCOME_UNCHANGED",
        failed: "CHATGPT_LEARNING_FLASHCARDS_UI_OUTCOME_FAILED",
        invalid: "CHATGPT_LEARNING_FLASHCARDS_UI_OUTCOME_INVALID",
      },
      u = {
        empty: "CHATGPT_LEARNING_FLASHCARDS_UI_FAILURE_REASON_EMPTY",
        length: "CHATGPT_LEARNING_FLASHCARDS_UI_FAILURE_REASON_LENGTH",
        unavailable: "CHATGPT_LEARNING_FLASHCARDS_UI_FAILURE_REASON_UNAVAILABLE",
        conflict: "CHATGPT_LEARNING_FLASHCARDS_UI_FAILURE_REASON_CONFLICT",
        request: "CHATGPT_LEARNING_FLASHCARDS_UI_FAILURE_REASON_REQUEST",
      }
    function A(e, r, t, A) {
      try {
        ;(0, n.yy)(e, i, {
          action: d[r],
          surface: s[t.surface],
          libraryFileId: t.libraryFileId,
          deckInstanceId: t.deckInstanceId,
          cardInstanceId: "card_id" in A ? t.cardInstanceId : void 0,
          reviewPassId: t.reviewPassId,
          passKind: null == t.passKind ? void 0 : l[t.passKind],
          conversationId: t.conversationId,
          sourceMessageId: t.sourceMessageId,
          cardId: "card_id" in A ? A.card_id : void 0,
          cardPosition: "card_position" in A ? (0, a.At)(A.card_position) : void 0,
          cardCount: "card_count" in A ? (0, a.At)(A.card_count) : void 0,
          filter: "filter" in A ? c[A.filter] : void 0,
          previousFilter: "previous_filter" in A ? c[A.previous_filter] : void 0,
          editId: "edit_id" in A ? A.edit_id : void 0,
          changeType: "change_type" in A ? _[A.change_type] : void 0,
          outcome: "outcome" in A ? o[A.outcome] : void 0,
          acknowledged: "acknowledged" in A ? A.acknowledged : void 0,
          failureReason: "failure_reason" in A && null != A.failure_reason ? u[A.failure_reason] : void 0,
          currentVersionNumber: "current_version_number" in A ? (0, a.N3)(A.current_version_number) : void 0,
        })
      } catch {}
    }
    function I(e, r) {
      if ("u" < typeof IntersectionObserver) return () => {}
      let t = !0,
        a = new IntersectionObserver(
          (e) => {
            if (t && "visible" === document.visibilityState)
              for (let t of e) t.isIntersecting && t.intersectionRatio >= 0.5 && r(t.target)
          },
          { threshold: 0.5 },
        ),
        i = () => {
          ;(a.disconnect(), "visible" === document.visibilityState && e.forEach((e) => a.observe(e)))
        }
      return (
        document.addEventListener("visibilitychange", i),
        i(),
        () => {
          ;((t = !1), document.removeEventListener("visibilitychange", i), a.disconnect())
        }
      )
    }
  },
  caUZ(e, r, t) {
    var a = t("DBCl"),
      i = t("ASxG"),
      n = t("Ghh3"),
      d = t("J0RG"),
      s = t("zHp1"),
      l = t("kb2Z"),
      c = t("DvOl")
    let _ = i
        .string()
        .min(1)
        .refine((e) => !(0, c.G)(e)),
      o = i
        .object({
          schema_version: i.literal(1),
          artifact_type: i.literal("flashcards"),
          title: i.string().min(1).max(120),
          cards: i
            .array(i.object({ id: i.string().min(1).max(128), front: _, back: _ }))
            .min(1)
            .max(100),
        })
        .refine(({ cards: e }) => new Set(e.map(({ id: e }) => e)).size === e.length)
    async function u(e, r, t, i) {
      if (null != i) {
        let e = await (0, d.f)(i, r)
        return { artifact: o.parse(JSON.parse(await e.text())) }
      }
      let l = { [a.zBc]: t },
        { content_url: c } = await n.Request.safeGet("/files/library/files/{library_file_id}/content_url", {
          parameters: { path: { library_file_id: e } },
          additionalHeaders: l,
          expectedErrorStatuses: [403, 404],
          signal: r,
        }),
        _ = await (0, s.jE)({ downloadUrl: c }, r)
      return { artifact: o.parse(JSON.parse(await _.text())) }
    }
    t.d(
      r,
      {},
      {
        B: async function (e, r) {
          let t = await (0, l.M)(e, void 0, r)
          if (t.readOnly) throw Error("Flashcard editing is unavailable")
          let i = t.version
          if (null == i) {
            let t = await n.Request.safeGet("/files/library/files/{library_file_id}/versions", {
              parameters: { path: { library_file_id: e }, query: { limit: 1 } },
              additionalHeaders: { [a.zBc]: r },
            })
            if (null == (i = t.items.find((e) => e.is_current)?.version_number ?? null))
              throw Error("Flashcard editing is unavailable")
          }
          let { artifact: d } = await u(e, void 0, r)
          return { artifact: d, version: i }
        },
        g: u,
      },
    )
  },
  kb2Z(e, r, t) {
    var a = t("DBCl"),
      i = t("Ghh3"),
      n = t("eShZ")
    t.d(
      r,
      {},
      {
        M: async function (e, r, t) {
          r?.throwIfAborted()
          let d = { path: { library_file_id: e } },
            s = { [a.zBc]: t },
            l = !1,
            c = await i.Request.safeGet("/files/library/files/{library_file_id}", {
              parameters: d,
              additionalHeaders: s,
              signal: r,
              expectedErrorStatuses: [403, 404],
            }).catch((e) => {
              if (!(e instanceof n.fk) || 404 !== e.status) throw e
              return (
                r?.throwIfAborted(),
                (l = !0),
                i.Request.safeGet("/files/library/files/{library_file_id}/node", {
                  parameters: d,
                  additionalHeaders: s,
                  signal: r,
                  expectedErrorStatuses: [403, 404],
                })
              )
            })
          if (
            c.trashed_at ||
            ("flashcards" !== c.library_artifact_type &&
              !(l && "owned" === c.access_kind && null == c.library_artifact_type))
          )
            throw Error("Flashcard deck is unavailable")
          let _ = null == c.access_kind ? l : "owned" !== c.access_kind
          return { version: "current_version_number" in c ? (c.current_version_number ?? null) : null, readOnly: _ }
        },
      },
    )
  },
  PyZ7(e, r, t) {
    var a = t("D7Ms"),
      i = t("WFY2"),
      n = t("lPQj")
    t.d(
      r,
      {},
      {
        observeFlashcardSourceCards: function (e, r) {
          let t,
            d = ["library-flashcards", r.accountId, r.userId, r.libraryFileId],
            s = (0, a.EN)(d),
            l = ["library-flashcards-access", r.accountId, r.userId, r.libraryFileId],
            c = (0, a.EN)(l),
            _ = e.queryClient.getQueryCache(),
            o = e.get(n.P, { accountId: r.accountId, userId: r.userId, libraryFileId: r.libraryFileId }),
            u = (e) => {
              r.isCurrent() && r.applyCards(e)
            }
          return _.subscribe((a) => {
            if (
              (a.query.queryHash !== s && a.query.queryHash !== c) ||
              "updated" !== a.type ||
              "success" !== a.action.type ||
              !0 === a.action.manual ||
              _.get(a.query.queryHash) !== a.query ||
              !r.isCurrent()
            )
              return
            let n = e.queryClient.getQueryData(d),
              A = e.queryClient.getQueryData(l)
            if (null == n || A?.readOnly !== !1 || n.artifact === t) return
            t = n.artifact
            let I = r.getSourceCards()
            if (null == I) return
            let f = n.artifact.cards
            I.length !== f.length || I.some((e, r) => e.id !== f[r]?.id)
              ? r.runSync().catch((e) => {
                  i.v.warning("Flashcard source refresh failed", { safe: {}, sensitive: { error: e } })
                })
              : o.publishCards(e, n.artifact, u)
          })
        },
      },
    )
  },
  lPQj(e, r, t) {
    var a = t("zTeN"),
      i = t("DBCl"),
      n = t("SPnB"),
      d = t("Ghh3"),
      s = t("SGsN"),
      l = t("svjy"),
      c = t("OWtl"),
      _ = t("eShZ"),
      o = t("G1h3"),
      u = t("caUZ")
    function A(e, r) {
      return r.delete
        ? { ...e, cards: e.cards.filter(({ id: e }) => e !== r.card.id) }
        : {
            ...e,
            cards: e.cards.some(({ id: e }) => e === r.card.id)
              ? e.cards.map((e) => (e.id === r.card.id ? r.card : e))
              : [...e.cards, r.card],
          }
    }
    let I = (0, a.T1)(c.u, (e, { signal: r }) => {
      let t,
        i = r([]),
        d = r([]),
        c = Promise.resolve(),
        I = new Set(),
        E = ["library-flashcards", e.accountId, e.userId, e.libraryFileId],
        y = (r) =>
          r.get(n.chatGptAuthenticatedAccountId$) === e.accountId && r.get(n.chatGptAuthenticatedUserId$) === e.userId,
        R = (e, r) => {
          e.set(d, (e) => e.filter((e) => e.card.id !== r))
        },
        S = (e, r, t) => {
          if (!y(e)) return
          null != t && I.add(t)
          let a = e.get(i),
            n = a.reduce(A, r).cards
          for (let e of I) e(n)
          0 === a.length && I.clear()
        }
      return {
        pending$: i,
        failed$: d,
        clearFailure: R,
        publishCards: S,
        enqueue: (r, n, T, h, N, v, L) => {
          if (!y(r)) return
          ;(0, a.Y)(r, () => {
            ;(R(r, T.card.id), r.set(i, (e) => [...e, T]))
          })
          let G = r.queryClient.getQueryData(E) ?? t ?? n
          ;(S(r, G.artifact, v),
            (c = c
              .catch(() => {})
              .then(async () => {
                let a = !1,
                  c = !1,
                  R = { edit_id: T.id, card_id: T.card.id, change_type: null == T.previousCard ? "add" : "edit" }
                try {
                  let i
                  if (!y(r)) return
                  let n = await (0, u.B)(e.libraryFileId, e.accountId)
                  if (!y(r) || (await r.queryClient.cancelQueries({ queryKey: E, exact: !0 }, { revert: !1 }), !y(r)))
                    return
                  if (((t = { artifact: n.artifact }), r.queryClient.setQueryData(E, t), !C(T, n.artifact)))
                    throw ((a = !0), Error("This flashcard changed while it was being edited"))
                  let d = n.version,
                    s = A(n.artifact, T)
                  try {
                    i = await f(e.libraryFileId, s, d, e.accountId)
                  } catch (l) {
                    if (!(l instanceof _.fk) || 409 !== l.status || !y(r)) throw l
                    if (
                      ((n = await (0, u.B)(e.libraryFileId, e.accountId)),
                      !y(r) || (await r.queryClient.cancelQueries({ queryKey: E, exact: !0 }, { revert: !1 }), !y(r)))
                    )
                      return
                    if (((t = { artifact: n.artifact }), r.queryClient.setQueryData(E, t), (a = !C(T, n.artifact))))
                      throw l
                    ;((d = n.version), (s = A(n.artifact, T)), (i = await f(e.libraryFileId, s, d, e.accountId)))
                  }
                  if (
                    !y(r) ||
                    ((c = !0),
                    T.delete ||
                      (0, o.W)(r, "edit_save_result", h, {
                        ...R,
                        outcome: i.current_version_number > d ? "changed" : "unchanged",
                        acknowledged: !0,
                        current_version_number: i.current_version_number,
                      }),
                    await r.queryClient.cancelQueries({ queryKey: E, exact: !0 }, { revert: !1 }),
                    !y(r))
                  )
                    return
                  ;((t = { artifact: s }),
                    r.queryClient.setQueryData(E, t),
                    r.queryClient.invalidateQueries({ queryKey: ["library-api", e.accountId] }),
                    await N?.())
                } catch {
                  if (c || !y(r)) return
                  ;(T.delete ||
                    (0, o.W)(r, "edit_save_result", h, {
                      ...R,
                      outcome: "failed",
                      acknowledged: !1,
                      failure_reason: a ? "conflict" : "request",
                    }),
                    r.set(d, (e) => [...e.filter((e) => e.card.id !== T.card.id), T]))
                  let e = r.get(l.g),
                    t = r
                      .get(s.Id)
                      .danger(
                        e.formatMessage({
                          id: "libraryNext.flashcards.saveFailedToast",
                          defaultMessage: "Your flashcard changes weren’t saved",
                          description:
                            "Persistent error toast after a saved flashcard edit fails. The user's draft has been retained, even if the editor has already closed.",
                        }),
                        {
                          errorAnalytics: { toastId: "libraryNext.flashcards.saveFailedToast" },
                          duration: 0,
                          hasCloseButton: !0,
                          primaryAction: L
                            ? {
                                label: e.formatMessage({
                                  id: "libraryNext.flashcards.recoverDraft",
                                  defaultMessage: "Recover draft",
                                  description:
                                    "Button in a flashcard save-error toast that reopens the editor with the user's unsaved front and back text.",
                                }),
                                onClick: () => {
                                  ;(y(r) && r.get(d).some((e) => e.id === T.id) && L(), t.close())
                                },
                              }
                            : void 0,
                        },
                      )
                } finally {
                  if ((r.set(i, (e) => e.filter((e) => e.id !== T.id)), y(r))) {
                    let e = r.queryClient.getQueryData(E) ?? t ?? n
                    S(r, e.artifact, v)
                  }
                  ;(0 === r.get(i).length && I.clear(),
                    y(r) || c || r.set(d, (e) => [...e.filter((e) => e.card.id !== T.card.id), T]))
                }
              })))
        },
      }
    })
    function f(e, r, t, a) {
      return d.Request.safePatch("/learning/flashcards/{library_file_id}", {
        additionalHeaders: { "x-openai-use-sheep": "1", [i.zBc]: a },
        parameters: { path: { library_file_id: e } },
        requestBody: { artifact: r, expected_current_version: t },
        expectedErrorStatuses: [403, 404, 409, 422],
      })
    }
    function C(e, r) {
      let t = r.cards.find(({ id: r }) => r === e.card.id)
      return (e.delete && (null == t || r.cards.length <= 1)) || null == e.previousCard
        ? null == t
        : null != t && t.front === e.previousCard.front && t.back === e.previousCard.back
    }
    t.d(r, {}, { P: I, f: A })
  },
  DvOl(e, r, t) {
    t.d(
      r,
      {},
      {
        G: function (e) {
          let r = 0
          for (let t of e) if ((r += 1) > 400) return !0
          return !1
        },
      },
    )
  },
}
//# sourceMappingURL=590108.ec478ff22c.js.map
