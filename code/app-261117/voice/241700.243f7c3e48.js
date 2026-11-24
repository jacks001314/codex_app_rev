export const __rspack_esm_ids = [241700]
export const __webpack_modules__ = {
  ZhWf(e, t, r) {
    var a,
      o =
        (((a = {}).CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_UNSPECIFIED =
          "CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_UNSPECIFIED"),
        (a.CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_HOVER = "CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_HOVER"),
        (a.CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_STOP = "CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_STOP"),
        (a.CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_SEND = "CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_SEND"),
        (a.UNRECOGNIZED = "UNRECOGNIZED"),
        a)
    r.d(
      t,
      {},
      {
        BE: { $type: "protobuf_analytics_events.v1.ChatgptVoiceDictationInteraction" },
        Fv: { $type: "protobuf_analytics_events.v1.ChatgptVoiceDictationErrorObserved" },
        p1: o,
      },
    )
  },
  JAPD(e, t, r) {
    var a = r("DBCl"),
      o = r("Kwur"),
      s = r("Mq0M"),
      i = r("eShZ")
    function n(e, t, r, a) {
      let o = "unknown"
      null != r && (o = r <= 1 ? String(r) : r <= 5 ? "2-5" : r <= 20 ? "6-20" : "21-200")
      let n = { surface: e, word_count_bucket: o }
      ;(a instanceof i.FetchError
        ? ((n.error_type = "request_error"), (n.error_name = "RequestError"), (n.http_status = a.status))
        : void 0 !== a &&
          ((n.error_type = a instanceof Error ? "error" : typeof a),
          (n.error_name = a instanceof Error ? a.name : void 0)),
        (0, s.wb)(`dictation.custom_dictionary.word.add.${t}`, n))
    }
    r.d(
      t,
      {},
      {
        _: async function ({
          queryClient: e,
          accountId: t,
          userId: r,
          text: s,
          signal: i,
          surface: c,
          onSuccess: d,
          onError: l,
        }) {
          let u = ["dictation-custom-dictionary", t, r],
            m = e.getQueryData(u)?.words.length
          n(c, "attempt", m)
          try {
            ;(await o.Request.safePost("/dictation/custom_dictionary/words", {
              requestBody: { text: s },
              additionalHeaders: { "ChatGPT-Account-ID": t, [a.zBc]: t },
              signal: i,
              expectedErrorStatuses: [400, 404, 409, 422],
            }),
              n(c, "success", null == m ? void 0 : m + 1),
              i.throwIfAborted(),
              e.invalidateQueries({ queryKey: u }),
              d?.())
          } catch (e) {
            if ((i.aborted || n(c, "error", m, e), null != l)) l(e)
            else throw e
          }
        },
      },
    )
  },
  ZirI(e, t, r) {
    r.d(t, { DictionaryDialog: () => R })
    var a = r("ABep"),
      o = r("QosV"),
      s = r("irkb"),
      i = r("T0Rc"),
      n = r("xSOA"),
      c = r("qmMi"),
      d = r("DBCl"),
      l = r("zd8w"),
      u = r("Wf1j"),
      m = r("oyxz"),
      h = r("Sm6l"),
      y = r("Sezd"),
      _ = r("JNtf"),
      T = r("mUDD"),
      g = r("bVeK"),
      p = r("evwP"),
      C = r("RNul"),
      f = r("zLIa"),
      I = r("SGsN"),
      x = r("JAPD"),
      A = r("OWtl"),
      w = r("RxZZ"),
      E = r("AWNZ"),
      N = r("ZEx5"),
      O = r("eShZ"),
      v = r("S2r0"),
      S = r("ASxG"),
      b = r("Kwur")
    let D = S.aig().int().min(1).max(100).catch(50)
    function j(e) {
      return { "ChatGPT-Account-ID": e, [d.zBc]: e }
    }
    function R(e) {
      let t,
        r,
        S,
        R,
        P,
        M,
        G,
        H,
        k,
        V,
        W,
        z,
        F,
        q,
        L,
        U,
        Z,
        B,
        $,
        K,
        J,
        Q,
        Y = (0, o.c)(86),
        { accountId: X, userId: ee, onClose: et } = e,
        er = (0, c.gh)(A.u),
        ea = (0, u.A)(),
        eo = (0, s.jE)(),
        es = (0, w.iK)(d.Szl.dictationDictionary),
        [ei, en] = (0, l.useState)(""),
        [ec, ed] = (0, l.useState)(null),
        [el, eu] = (0, l.useState)(""),
        [em, eh] = (0, l.useState)(null),
        ey = (0, l.useRef)(null)
      ;(Y[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => ey.current?.abort()), (r = []), (Y[0] = t), (Y[1] = r))
        : ((t = Y[0]), (r = Y[1])),
        (0, l.useEffect)(t, r),
        Y[2] !== X || Y[3] !== ee
          ? ((S = (function ({ accountId: e, userId: t }) {
              return (0, v.j)({
                queryKey: ["dictation-custom-dictionary", e, t],
                queryFn: async ({ signal: t }) => {
                  let r = await b.Request.safeGet("/dictation/custom_dictionary", {
                    additionalHeaders: j(e),
                    signal: t,
                    expectedErrorStatuses: [404],
                  })
                  return { ...r, max_entry_utf16_units: D.parse(r.max_entry_utf16_units) }
                },
                staleTime: 5e3,
                refetchOnWindowFocus: "always",
                retry: !1,
              })
            })({ accountId: X, userId: ee })),
            (Y[2] = X),
            (Y[3] = ee),
            (Y[4] = S))
          : (S = Y[4]))
      let e_ = S,
        eT = e_.queryKey,
        { data: eg, isPending: ep, isError: eC, isFetching: ef, refetch: eI } = (0, i.I)(e_)
      ;(Y[5] !== X || Y[6] !== eo || Y[7] !== er || Y[8] !== ee
        ? ((R = async (e) => {
            "add" === e.type && ed(null)
            let t = new AbortController()
            ey.current = t
            let r = t.signal
            "delete" === e.type
              ? await (async function (e, t, r) {
                  await b.Request.safeDelete("/dictation/custom_dictionary/words/{word_id}", {
                    parameters: { path: { word_id: t } },
                    additionalHeaders: j(e),
                    signal: r,
                    expectedErrorStatuses: [404],
                  })
                })(X, e.id, r)
              : "add" === e.type
                ? await (0, x._)({
                    queryClient: eo,
                    accountId: X,
                    userId: ee,
                    text: e.text,
                    signal: r,
                    surface: "settings",
                    onSuccess: () => en(""),
                  })
                : (await (async function (e, t, r, a) {
                    for (let e of r) {
                      a.throwIfAborted()
                      try {
                        await b.Request.safePost("/dictation/custom_dictionary/words", {
                          requestBody: { text: e },
                          additionalHeaders: j(t),
                          signal: a,
                          expectedErrorStatuses: [400, 404, 409, 422],
                        })
                      } catch (e) {
                        if (!(e instanceof O.FetchError) || 409 !== e.status || "account_changed" === e.errorCode)
                          throw e
                      }
                    }
                    a.throwIfAborted()
                    let o = await (0, w.LA)(d.Szl.dictationDictionary)
                    ;(a.throwIfAborted(),
                      null != o &&
                        (await (0, w.gc)(
                          e,
                          d.Szl.dictationDictionary,
                          o.filter((e) => !r.includes(e)),
                          { optimistic: !1 },
                        )))
                  })(er, X, e.words, r),
                  eh(null))
          }),
          (Y[5] = X),
          (Y[6] = eo),
          (Y[7] = er),
          (Y[8] = ee),
          (Y[9] = R))
        : (R = Y[9]),
        Y[10] !== eo || Y[11] !== eT
          ? ((P = async (e, t, r) => {
              ;(await eo.invalidateQueries({ queryKey: eT }, { cancelRefetch: "add" !== r.type || null != t }),
                (ey.current = null))
            }),
            (Y[10] = eo),
            (Y[11] = eT),
            (Y[12] = P))
          : (P = Y[12]),
        Y[13] !== ea || Y[14] !== er
          ? ((M = (e, t) => {
              let r
              if (!("AbortError" === e.name || ey.current?.signal.aborted)) {
                if (
                  ((r =
                    e instanceof O.FetchError && "account_changed" !== e.errorCode && 409 === e.status
                      ? ea.formatMessage({
                          id: "settings.voice.dictionary.duplicateError",
                          defaultMessage: "This word is already in your dictionary",
                        })
                      : e instanceof O.FetchError && 422 === e.status
                        ? ea.formatMessage({
                            id: "settings.voice.dictionary.capacityError",
                            defaultMessage:
                              "Your dictionary is full. Remove a saved word before adding more. Words from this device are kept for retry",
                          })
                        : e instanceof O.FetchError && 400 === e.status && "dictionary_entry_too_long" === e.errorCode
                          ? ea.formatMessage({
                              id: "settings.voice.dictionary.serverTooLong",
                              defaultMessage:
                                "This word is too long after text normalization. Shorten it to the current limit shown above",
                            })
                          : e instanceof O.FetchError && 400 === e.status
                            ? ea.formatMessage({
                                id: "settings.voice.dictionary.invalidEntryError",
                                defaultMessage:
                                  "Check the word\u2019s length and remove any line breaks or attachments.",
                              })
                            : ea.formatMessage({
                                id: "settings.voice.dictionary.saveError",
                                defaultMessage: "Couldn\u2019t save dictionary changes. Check the words and try again",
                              })),
                  "add" === t.type)
                )
                  return void ed(r)
                er.get(I.Id).danger(r, { errorAnalytics: { toastId: "settings.voice.dictionary.saveError" } })
              }
            }),
            (Y[13] = ea),
            (Y[14] = er),
            (Y[15] = M))
          : (M = Y[15]),
        Y[16] !== R || Y[17] !== P || Y[18] !== M
          ? ((G = { mutationFn: R, onSettled: P, onError: M }), (Y[16] = R), (Y[17] = P), (Y[18] = M), (Y[19] = G))
          : (G = Y[19]))
      let { mutate: ex, isPending: eA, variables: ew } = (0, n.n)(G),
        eE = null != eg && eg.words.length >= eg.max_words,
        eN = ep || eC || eA
      if (
        Y[20] !== eE ||
        Y[21] !== eg ||
        Y[22] !== eN ||
        Y[23] !== ec ||
        Y[24] !== em ||
        Y[25] !== ea ||
        Y[26] !== eC ||
        Y[27] !== ef ||
        Y[28] !== ep ||
        Y[29] !== eA ||
        Y[30] !== es ||
        Y[31] !== ex ||
        Y[32] !== ei ||
        Y[33] !== et ||
        Y[34] !== eI ||
        Y[35] !== el ||
        Y[36] !== ew
      ) {
        let e,
          t,
          r,
          o = eg?.words.filter((e) => e.text.toLocaleLowerCase().includes(el.trim().toLocaleLowerCase()))
        ;((k = _.lG),
          (q = !0),
          Y[49] !== et
            ? ((L = (e) => {
                e || et()
              }),
              (Y[49] = et),
              (Y[50] = L))
            : (L = Y[50]),
          (U = "wide"),
          Y[51] === Symbol.for("react.memo_cache_sentinel")
            ? ((Z = { "aria-describedby": void 0 }), (Y[51] = Z))
            : (Z = Y[51]),
          (H = T.R4),
          (B = "form"),
          ($ = "viewport"),
          (V = "select-none"),
          Y[52] !== eE || Y[53] !== eN || Y[54] !== em || Y[55] !== ex || Y[56] !== ei
            ? ((W = (e) => {
                ;(e.preventDefault(),
                  !eN &&
                    (null != em
                      ? em.length > 0 && ex({ type: "import", words: em })
                      : "" === ei || eE || ex({ type: "add", text: ei })))
              }),
              (Y[52] = eE),
              (Y[53] = eN),
              (Y[54] = em),
              (Y[55] = ex),
              (Y[56] = ei),
              (Y[57] = W))
            : (W = Y[57]),
          Y[58] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(T.c7, {
                title: (0, a.jsx)(_.L3, {
                  children: (0, a.jsx)(m.A, {
                    id: "speechSettings.content.customDictionary.page.title",
                    defaultMessage: "Voice dictionary",
                  }),
                }),
              })),
              (Y[58] = e))
            : (e = Y[58]),
          Y[59] !== eg
            ? ((t =
                null != eg
                  ? (0, a.jsx)("p", {
                      id: "dictionary-limits",
                      className: "text-sm text-secondary",
                      children: (0, a.jsx)(m.A, {
                        id: "settings.voice.dictionary.limits",
                        defaultMessage:
                          "Dictionary capacity: {maxWords, number}. Each word can contain up to {maxLength, plural, one {# character} other {# characters}} after text normalization. Some characters, including emoji, count as two or more",
                        values: { maxWords: eg.max_words, maxLength: eg.max_entry_utf16_units },
                      }),
                    })
                  : null),
              (Y[59] = eg),
              (Y[60] = t))
            : (t = Y[60]),
          Y[61] !== eE
            ? ((r = eE
                ? (0, a.jsx)("p", {
                    role: "status",
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(m.A, {
                      id: "settings.voice.dictionary.atCapacity",
                      defaultMessage:
                        "Your dictionary is full. Your saved words are kept. Remove words to make room for new ones",
                    }),
                  })
                : null),
              (Y[61] = eE),
              (Y[62] = r))
            : (r = Y[62]),
          Y[63] !== t || Y[64] !== r
            ? ((z = (0, a.jsxs)(T.OO, { className: "gap-3", children: [e, t, r] })),
              (Y[63] = t),
              (Y[64] = r),
              (Y[65] = z))
            : (z = Y[65]),
          (F =
            null != em
              ? (0, a.jsxs)(T.OO, {
                  className: "gap-3",
                  children: [
                    (0, a.jsx)("p", {
                      className: "text-sm text-secondary",
                      children: (0, a.jsx)(m.A, {
                        id: "settings.voice.dictionary.importDescription",
                        defaultMessage:
                          "Import these words from this device into your current account and workspace. Saved words will be available on your other devices",
                      }),
                    }),
                    (0, a.jsx)(N.t, {
                      children: [...new Set(es)].map((e) =>
                        (0, a.jsx)(
                          E.ic,
                          {
                            label: (0, a.jsx)("span", { className: "break-words select-text", children: e }),
                            control: (0, a.jsx)("div", {
                              className: "relative",
                              children: (0, a.jsx)(y.S, {
                                "aria-label": e,
                                checked: em.includes(e),
                                disabled: eA,
                                onCheckedChange: (t) => eh(t ? [...em, e] : em.filter((t) => t !== e)),
                              }),
                            }),
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                })
              : (0, a.jsxs)(T.OO, {
                  className: "gap-3",
                  children: [
                    eC
                      ? (0, a.jsxs)(p.W, {
                          children: [
                            (0, a.jsx)(m.A, {
                              id: "speechSettings.content.customDictionary.loadError",
                              defaultMessage: "We couldn\u2019t load your saved words",
                            }),
                            (0, a.jsx)(h.$, {
                              type: "button",
                              color: "secondary",
                              loading: ef,
                              onClick: () => void eI(),
                              children: (0, a.jsx)(m.A, {
                                id: "speechSettings.content.customDictionary.button.retry",
                                defaultMessage: "Retry",
                              }),
                            }),
                          ],
                        })
                      : null,
                    (0, a.jsx)("label", {
                      className: "text-sm font-medium",
                      htmlFor: "dictionary-new-word",
                      children: (0, a.jsx)(m.A, {
                        id: "speechSettings.content.customDictionary.addWord.heading",
                        defaultMessage: "Add word",
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, a.jsx)(f.pd, {
                          id: "dictionary-new-word",
                          autoFocus: !0,
                          name: "dictation-custom-dictionary-new-word",
                          value: ei,
                          "aria-describedby": "dictionary-limits dictionary-entry-error",
                          "aria-invalid": null != ec,
                          disabled: eN || eE,
                          onChange: (e) => {
                            ;(en(e.target.value), ed(null))
                          },
                          placeholder: ea.formatMessage({
                            id: "speechSettings.content.customDictionary.input.add.placeholder",
                            defaultMessage: "Word ChatGPT should recognize when spoken",
                          }),
                        }),
                        (0, a.jsx)(h.$, {
                          type: "submit",
                          disabled: eN || eE || "" === ei,
                          loading: eA && ew?.type === "add",
                          children: (0, a.jsx)(m.A, {
                            id: "speechSettings.content.customDictionary.button.add",
                            defaultMessage: "Add",
                          }),
                        }),
                      ],
                    }),
                    null != ec
                      ? (0, a.jsx)("p", {
                          id: "dictionary-entry-error",
                          role: "alert",
                          className: "text-sm text-secondary",
                          children: ec,
                        })
                      : null,
                    (0, a.jsx)(E.ic, {
                      label: (0, a.jsx)(m.A, {
                        id: "speechSettings.content.customDictionary.savedWords.heading",
                        defaultMessage: "Words",
                      }),
                      control:
                        null == eg
                          ? null
                          : (0, a.jsx)(m.A, {
                              id: "speechSettings.content.customDictionary.wordCount",
                              defaultMessage: "{wordCount}/{maxWords}",
                              values: { wordCount: eg.words.length, maxWords: eg.max_words },
                            }),
                    }),
                    (0, a.jsx)(f.pd, {
                      "aria-label": ea.formatMessage({
                        id: "speechSettings.content.customDictionary.input.search.ariaLabel",
                        defaultMessage: "Search words",
                      }),
                      name: "dictation-custom-dictionary-search",
                      placeholder: ea.formatMessage({
                        id: "speechSettings.content.customDictionary.input.search.placeholder",
                        defaultMessage: "Search",
                      }),
                      value: el,
                      onChange: (e) => eu(e.target.value),
                      disabled: ep || eC,
                    }),
                    ep
                      ? (0, a.jsx)(p.W, {
                          children: (0, a.jsx)(m.A, {
                            id: "settings.voice.dictionary.loading",
                            defaultMessage: "Loading words\u2026",
                          }),
                        })
                      : null,
                    ep || eC || null == o
                      ? null
                      : (0, a.jsx)(N.t, {
                          children:
                            0 === o.length
                              ? (0, a.jsx)(p.W, {
                                  layout: "settings-row",
                                  children: el.trim()
                                    ? (0, a.jsx)(m.A, {
                                        id: "speechSettings.content.customDictionary.emptySearch",
                                        defaultMessage: "No matching words",
                                      })
                                    : (0, a.jsx)(m.A, {
                                        id: "speechSettings.content.customDictionary.empty",
                                        defaultMessage: "No words yet",
                                      }),
                                })
                              : o.map((e) =>
                                  (0, a.jsx)(
                                    E.ic,
                                    {
                                      size: "compact",
                                      label: (0, a.jsx)("span", {
                                        className: "break-words select-text",
                                        children: e.text,
                                      }),
                                      control: (0, a.jsx)(h.$, {
                                        type: "button",
                                        color: "ghost",
                                        size: "icon",
                                        disabled: eA,
                                        "aria-label": ea.formatMessage(
                                          {
                                            id: "speechSettings.content.customDictionary.button.remove.ariaLabel",
                                            defaultMessage: "Remove {word}",
                                          },
                                          { word: e.text },
                                        ),
                                        onClick: () => ex({ type: "delete", id: e.id }),
                                        children:
                                          eA && ew?.type === "delete" && ew.id === e.id
                                            ? (0, a.jsx)(C.y, { className: "icon-xs" })
                                            : (0, a.jsx)(g.cSG, {}),
                                      }),
                                    },
                                    e.id,
                                  ),
                                ),
                        }),
                    null != es && es.length > 0
                      ? (0, a.jsx)(h.$, {
                          type: "button",
                          color: "secondary",
                          disabled: eN,
                          onClick: () => eh([...new Set(es)]),
                          children: (0, a.jsx)(m.A, {
                            id: "settings.voice.dictionary.reviewImport",
                            defaultMessage: "Import words from this device\u2026",
                          }),
                        })
                      : null,
                  ],
                })),
          (Y[20] = eE),
          (Y[21] = eg),
          (Y[22] = eN),
          (Y[23] = ec),
          (Y[24] = em),
          (Y[25] = ea),
          (Y[26] = eC),
          (Y[27] = ef),
          (Y[28] = ep),
          (Y[29] = eA),
          (Y[30] = es),
          (Y[31] = ex),
          (Y[32] = ei),
          (Y[33] = et),
          (Y[34] = eI),
          (Y[35] = el),
          (Y[36] = ew),
          (Y[37] = H),
          (Y[38] = k),
          (Y[39] = V),
          (Y[40] = W),
          (Y[41] = z),
          (Y[42] = F),
          (Y[43] = q),
          (Y[44] = L),
          (Y[45] = U),
          (Y[46] = Z),
          (Y[47] = B),
          (Y[48] = $))
      } else
        ((H = Y[37]),
          (k = Y[38]),
          (V = Y[39]),
          (W = Y[40]),
          (z = Y[41]),
          (F = Y[42]),
          (q = Y[43]),
          (L = Y[44]),
          (U = Y[45]),
          (Z = Y[46]),
          (B = Y[47]),
          ($ = Y[48]))
      return (
        Y[66] !== eN || Y[67] !== em || Y[68] !== eA
          ? ((K =
              null != em
                ? (0, a.jsx)(T.OO, {
                    className: "gap-3",
                    children: (0, a.jsxs)(T.Es, {
                      children: [
                        (0, a.jsx)(h.$, {
                          type: "button",
                          color: "secondary",
                          disabled: eA,
                          onClick: () => eh(null),
                          children: (0, a.jsx)(m.A, {
                            id: "settings.voice.dictionary.cancelImport",
                            defaultMessage: "Cancel",
                          }),
                        }),
                        (0, a.jsx)(h.$, {
                          type: "submit",
                          loading: eA,
                          disabled: eN || 0 === em.length,
                          children: (0, a.jsx)(m.A, {
                            id: "settings.voice.dictionary.confirmImport",
                            defaultMessage: "Import words",
                          }),
                        }),
                      ],
                    }),
                  })
                : null),
            (Y[66] = eN),
            (Y[67] = em),
            (Y[68] = eA),
            (Y[69] = K))
          : (K = Y[69]),
        Y[70] !== H ||
        Y[71] !== V ||
        Y[72] !== W ||
        Y[73] !== z ||
        Y[74] !== F ||
        Y[75] !== K ||
        Y[76] !== B ||
        Y[77] !== $
          ? ((J = (0, a.jsxs)(H, { as: B, size: $, className: V, onSubmit: W, children: [z, F, K] })),
            (Y[70] = H),
            (Y[71] = V),
            (Y[72] = W),
            (Y[73] = z),
            (Y[74] = F),
            (Y[75] = K),
            (Y[76] = B),
            (Y[77] = $),
            (Y[78] = J))
          : (J = Y[78]),
        Y[79] !== k || Y[80] !== q || Y[81] !== L || Y[82] !== U || Y[83] !== Z || Y[84] !== J
          ? ((Q = (0, a.jsx)(k, { open: q, onOpenChange: L, size: U, contentProps: Z, children: J })),
            (Y[79] = k),
            (Y[80] = q),
            (Y[81] = L),
            (Y[82] = U),
            (Y[83] = Z),
            (Y[84] = J),
            (Y[85] = Q))
          : (Q = Y[85]),
        Q
      )
    }
  },
  Mq0M(e, t, r) {
    var a = r("mBJV"),
      o = r("lSdY"),
      s = r("ZhWf"),
      i = r("GDNt"),
      n = r("R9Ov")
    let c = "CHATGPT_DICTATION_PRODUCT_CHATGPT"
    r.d(
      t,
      {},
      {
        SE: function (e, t, r) {
          e.logProductEvent(s.Fv, {
            dictationSessionId: t,
            product: c,
            productExperience:
              null == r
                ? void 0
                : { chat: o.b.CHATGPT_PRODUCT_EXPERIENCE_CHAT, work: o.b.CHATGPT_PRODUCT_EXPERIENCE_WORK }[r],
          })
        },
        hV: function (e, t, r = "CHATGPT_DICTATION_RECORDING_SOURCE_MICROPHONE") {
          e.logProductEvent(a.wrl, {
            dictationSessionId: t.dictationSessionId,
            attemptId: t.attemptId,
            isRetry: t.isRetry,
            product: c,
            recordingSource: r,
            startGesture:
              null == t.startGesture
                ? void 0
                : {
                    tap: "CHATGPT_DICTATION_START_GESTURE_TAP",
                    "press-and-hold": "CHATGPT_DICTATION_START_GESTURE_PRESS_AND_HOLD",
                  }[t.startGesture],
          })
        },
        ih: function (e, t) {
          e.logProductEvent(s.BE, {
            product: c,
            action: {
              hover: "CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_HOVER",
              stop: "CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_STOP",
              send: "CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_SEND",
            }[t],
          })
        },
        mk: function (e, t) {
          ;(e instanceof i.fk && "network" !== e.errorKind) || (0, n.S)(e)
        },
        wb: function (e, t = {}) {},
      },
    )
  },
}
//# sourceMappingURL=241700.243f7c3e48.js.map
