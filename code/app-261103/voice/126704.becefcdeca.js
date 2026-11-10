export const __rspack_esm_ids = [126704]
export const __webpack_modules__ = {
  ZhWf(e, t, i) {
    var o,
      r =
        (((o = {}).CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_UNSPECIFIED =
          "CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_UNSPECIFIED"),
        (o.CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_HOVER = "CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_HOVER"),
        (o.CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_STOP = "CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_STOP"),
        (o.CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_SEND = "CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_SEND"),
        (o.UNRECOGNIZED = "UNRECOGNIZED"),
        o)
    i.d(
      t,
      {},
      {
        BE: { $type: "protobuf_analytics_events.v1.ChatgptVoiceDictationInteraction" },
        Fv: { $type: "protobuf_analytics_events.v1.ChatgptVoiceDictationErrorObserved" },
        p1: r,
      },
    )
  },
  JAPD(e, t, i) {
    var o = i("DBCl"),
      r = i("Ghh3"),
      a = i("Mq0M"),
      s = i("eShZ")
    function n(e, t, i, o) {
      let r = "unknown"
      null != i && (r = i <= 1 ? String(i) : i <= 5 ? "2-5" : i <= 20 ? "6-20" : "21-200")
      let n = { surface: e, word_count_bucket: r }
      ;(o instanceof s.fk
        ? ((n.error_type = "request_error"), (n.error_name = "RequestError"), (n.http_status = o.status))
        : void 0 !== o &&
          ((n.error_type = o instanceof Error ? "error" : typeof o),
          (n.error_name = o instanceof Error ? o.name : void 0)),
        (0, a.wb)(`dictation.custom_dictionary.word.add.${t}`, n))
    }
    i.d(
      t,
      {},
      {
        _: async function ({
          queryClient: e,
          accountId: t,
          userId: i,
          text: a,
          signal: s,
          surface: d,
          onSuccess: c,
          onError: l,
        }) {
          let u = ["dictation-custom-dictionary", t, i],
            _ = e.getQueryData(u)?.words.length
          n(d, "attempt", _)
          try {
            ;(await r.Request.safePost("/dictation/custom_dictionary/words", {
              requestBody: { text: a },
              additionalHeaders: { "ChatGPT-Account-ID": t, [o.zBc]: t },
              signal: s,
              expectedErrorStatuses: [400, 404, 409, 422],
            }),
              n(d, "success", null == _ ? void 0 : _ + 1),
              s.throwIfAborted(),
              e.invalidateQueries({ queryKey: u }),
              c?.())
          } catch (e) {
            if ((s.aborted || n(d, "error", _, e), null != l)) l(e)
            else throw e
          }
        },
      },
    )
  },
  yzhe(e, t, i) {
    var o = i("ABep"),
      r = i("QosV"),
      a = i("irkb"),
      s = i("T0Rc"),
      n = i("xSOA"),
      d = i("zTeN"),
      c = i("DBCl"),
      l = i("zd8w"),
      u = i("Wf1j"),
      _ = i("oyxz"),
      m = i("ASxG"),
      h = i("Ghh3"),
      p = i("ygO2"),
      y = i("Xpvt"),
      g = i("JNtf"),
      f = i("mUDD"),
      v = i("GO7r"),
      w = i("evwP"),
      T = i("RNul"),
      x = i("zLIa"),
      C = i("SGsN"),
      I = i("JAPD"),
      A = i("OWtl"),
      E = i("RxZZ"),
      N = i("AWNZ"),
      O = i("ZEx5"),
      b = i("eShZ")
    let S = m.number().int().min(1).max(100).catch(50)
    i.d(
      t,
      {},
      {
        DictionaryDialog: function (e) {
          let t,
            i,
            m,
            D,
            j,
            R,
            k,
            P,
            M,
            G,
            H,
            z,
            V,
            W,
            q,
            F,
            U,
            L,
            B,
            Z,
            $,
            K,
            X,
            J,
            Q,
            Y = (0, r.c)(94),
            { accountId: ee, userId: et, onClose: ei } = e,
            eo = (0, d.gh)(A.u),
            er = (0, u.A)(),
            ea = (0, a.jE)(),
            es = (0, E.iK)(c.Szl.dictationDictionary),
            [en, ed] = (0, l.useState)(""),
            [ec, el] = (0, l.useState)(null),
            [eu, e_] = (0, l.useState)(""),
            [em, eh] = (0, l.useState)(null),
            ep = (0, l.useRef)(null)
          ;(Y[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = () => () => ep.current?.abort()), (i = []), (Y[0] = t), (Y[1] = i))
            : ((t = Y[0]), (i = Y[1])),
            (0, l.useEffect)(t, i),
            Y[2] !== ee || Y[3] !== et
              ? ((m = ["dictation-custom-dictionary", ee, et]), (Y[2] = ee), (Y[3] = et), (Y[4] = m))
              : (m = Y[4]))
          let ey = m
          Y[5] !== ee ? ((D = { "ChatGPT-Account-ID": ee, [c.zBc]: ee }), (Y[5] = ee), (Y[6] = D)) : (D = Y[6])
          let eg = D
          ;(Y[7] !== eg
            ? ((j = async (e) => {
                let { signal: t } = e,
                  i = await h.Request.safeGet("/dictation/custom_dictionary", {
                    additionalHeaders: eg,
                    signal: t,
                    expectedErrorStatuses: [404],
                  })
                return { ...i, max_entry_utf16_units: S.parse(i.max_entry_utf16_units) }
              }),
              (Y[7] = eg),
              (Y[8] = j))
            : (j = Y[8]),
            Y[9] !== ey || Y[10] !== j
              ? ((R = { queryKey: ey, queryFn: j, staleTime: 5e3, refetchOnWindowFocus: "always", retry: !1 }),
                (Y[9] = ey),
                (Y[10] = j),
                (Y[11] = R))
              : (R = Y[11]))
          let { data: ef, isPending: ev, isError: ew, isFetching: eT, refetch: ex } = (0, s.I)(R)
          ;(Y[12] !== ee || Y[13] !== eg || Y[14] !== ea || Y[15] !== eo || Y[16] !== et
            ? ((k = async (e) => {
                "add" === e.type && el(null)
                let t = new AbortController()
                ep.current = t
                let i = t.signal
                if ("delete" === e.type)
                  await h.Request.safeDelete("/dictation/custom_dictionary/words/{word_id}", {
                    parameters: { path: { word_id: e.id } },
                    additionalHeaders: eg,
                    signal: i,
                    expectedErrorStatuses: [404],
                  })
                else if ("add" === e.type)
                  await (0, I._)({
                    queryClient: ea,
                    accountId: ee,
                    userId: et,
                    text: e.text,
                    signal: i,
                    surface: "settings",
                    onSuccess: () => ed(""),
                  })
                else {
                  for (let t of e.words) {
                    i.throwIfAborted()
                    try {
                      await h.Request.safePost("/dictation/custom_dictionary/words", {
                        requestBody: { text: t },
                        additionalHeaders: eg,
                        signal: i,
                        expectedErrorStatuses: [400, 404, 409, 422],
                      })
                    } catch (e) {
                      if (!(e instanceof b.fk && 409 === e.status && "account_changed" !== e.errorCode)) throw e
                    }
                  }
                  i.throwIfAborted()
                  let t = await (0, E.LA)(c.Szl.dictationDictionary)
                  ;(i.throwIfAborted(),
                    null != t &&
                      (await (0, E.gc)(
                        eo,
                        c.Szl.dictationDictionary,
                        t.filter((t) => !e.words.includes(t)),
                        { optimistic: !1 },
                      )),
                    eh(null))
                }
              }),
              (Y[12] = ee),
              (Y[13] = eg),
              (Y[14] = ea),
              (Y[15] = eo),
              (Y[16] = et),
              (Y[17] = k))
            : (k = Y[17]),
            Y[18] !== ea || Y[19] !== ey
              ? ((P = async (e, t, i) => {
                  ;(await ea.invalidateQueries({ queryKey: ey }, { cancelRefetch: "add" !== i.type || null != t }),
                    (ep.current = null))
                }),
                (Y[18] = ea),
                (Y[19] = ey),
                (Y[20] = P))
              : (P = Y[20]),
            Y[21] !== er || Y[22] !== eo
              ? ((M = (e, t) => {
                  let i
                  if (!("AbortError" === e.name || ep.current?.signal.aborted)) {
                    if (
                      ((i =
                        e instanceof b.fk && "account_changed" !== e.errorCode && 409 === e.status
                          ? er.formatMessage({
                              id: "settings.voice.dictionary.duplicateError",
                              defaultMessage: "This word is already in your dictionary",
                              description:
                                "Voice dictionary error when a normalized, case-insensitive equivalent entry is already saved",
                            })
                          : e instanceof b.fk && 422 === e.status
                            ? er.formatMessage({
                                id: "settings.voice.dictionary.capacityError",
                                defaultMessage:
                                  "Your dictionary is full. Remove a saved word before adding more. Words from this device are kept for retry",
                                description:
                                  "Voice dictionary capacity error, including imports that may have partially succeeded; local words are retained",
                              })
                            : e instanceof b.fk && 400 === e.status && "dictionary_entry_too_long" === e.errorCode
                              ? er.formatMessage({
                                  id: "settings.voice.dictionary.serverTooLong",
                                  defaultMessage:
                                    "This word is too long after text normalization. Shorten it to the current limit shown above",
                                  description:
                                    "Server validation error for a dictionary entry exceeding the normalized UTF-16 length limit",
                                })
                              : e instanceof b.fk && 400 === e.status
                                ? er.formatMessage({
                                    id: "settings.voice.dictionary.invalidEntryError",
                                    defaultMessage:
                                      "Check the word’s length and remove any line breaks or attachments.",
                                    description:
                                      "Voice dictionary validation error after adding or partially importing entries; refers to the limits shown in the dialog",
                                  })
                                : er.formatMessage({
                                    id: "settings.voice.dictionary.saveError",
                                    defaultMessage: "Couldn’t save dictionary changes. Check the words and try again",
                                    description:
                                      "Error toast after adding, deleting, or importing vocabulary fails; unsaved input and local words are retained for retry",
                                  })),
                      "add" === t.type)
                    )
                      return void el(i)
                    eo.get(C.Id).danger(i, { errorAnalytics: { toastId: "settings.voice.dictionary.saveError" } })
                  }
                }),
                (Y[21] = er),
                (Y[22] = eo),
                (Y[23] = M))
              : (M = Y[23]),
            Y[24] !== k || Y[25] !== P || Y[26] !== M
              ? ((G = { mutationFn: k, onSettled: P, onError: M }), (Y[24] = k), (Y[25] = P), (Y[26] = M), (Y[27] = G))
              : (G = Y[27]))
          let { mutate: eC, isPending: eI, variables: eA } = (0, n.n)(G),
            eE = null != ef && ef.words.length >= ef.max_words,
            eN = ev || ew || eI
          if (
            Y[28] !== eE ||
            Y[29] !== ef ||
            Y[30] !== eN ||
            Y[31] !== ec ||
            Y[32] !== em ||
            Y[33] !== er ||
            Y[34] !== ew ||
            Y[35] !== eT ||
            Y[36] !== ev ||
            Y[37] !== eI ||
            Y[38] !== es ||
            Y[39] !== eC ||
            Y[40] !== en ||
            Y[41] !== ei ||
            Y[42] !== ex ||
            Y[43] !== eu ||
            Y[44] !== eA
          ) {
            let e,
              t,
              i,
              r = ef?.words.filter((e) => e.text.toLocaleLowerCase().includes(eu.trim().toLocaleLowerCase()))
            ;((z = g.lG),
              (B = !0),
              Y[57] !== ei
                ? ((Z = (e) => {
                    e || ei()
                  }),
                  (Y[57] = ei),
                  (Y[58] = Z))
                : (Z = Y[58]),
              ($ = "wide"),
              Y[59] === Symbol.for("react.memo_cache_sentinel")
                ? ((K = { "aria-describedby": void 0 }), (Y[59] = K))
                : (K = Y[59]),
              (H = f.R4),
              (V = "form"),
              (W = "viewport"),
              (q = "select-none"),
              Y[60] !== eE || Y[61] !== eN || Y[62] !== em || Y[63] !== eC || Y[64] !== en
                ? ((F = (e) => {
                    ;(e.preventDefault(),
                      !eN &&
                        (null != em
                          ? em.length > 0 && eC({ type: "import", words: em })
                          : "" === en || eE || eC({ type: "add", text: en })))
                  }),
                  (Y[60] = eE),
                  (Y[61] = eN),
                  (Y[62] = em),
                  (Y[63] = eC),
                  (Y[64] = en),
                  (Y[65] = F))
                : (F = Y[65]),
              Y[66] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, o.jsx)(f.c7, {
                    title: (0, o.jsx)(g.L3, {
                      children: (0, o.jsx)(_.A, {
                        id: "speechSettings.content.customDictionary.page.title",
                        defaultMessage: "Voice dictionary",
                        description:
                          "Title for the voice dictionary settings where users manage words to recognize in their speech",
                      }),
                    }),
                  })),
                  (Y[66] = e))
                : (e = Y[66]),
              Y[67] !== ef
                ? ((t =
                    null != ef
                      ? (0, o.jsx)("p", {
                          id: "dictionary-limits",
                          className: "text-sm text-secondary",
                          children: (0, o.jsx)(_.A, {
                            id: "settings.voice.dictionary.limits",
                            defaultMessage:
                              "Dictionary capacity: {maxWords, number}. Each word can contain up to {maxLength, plural, one {# character} other {# characters}} after text normalization. Some characters, including emoji, count as two or more",
                            description:
                              "Voice dictionary limits: maxWords is the maximum number of entries, maxLength is the maximum UTF-16 length after Unicode and whitespace normalization; emoji can consume multiple units",
                            values: { maxWords: ef.max_words, maxLength: ef.max_entry_utf16_units },
                          }),
                        })
                      : null),
                  (Y[67] = ef),
                  (Y[68] = t))
                : (t = Y[68]),
              Y[69] !== eE
                ? ((i = eE
                    ? (0, o.jsx)("p", {
                        role: "status",
                        className: "text-sm text-secondary",
                        children: (0, o.jsx)(_.A, {
                          id: "settings.voice.dictionary.atCapacity",
                          defaultMessage:
                            "Your dictionary is full. Your saved words are kept. Remove words to make room for new ones",
                          description:
                            "Voice dictionary notice when saved entry count reaches or exceeds the current server limit; existing entries are not removed automatically",
                        }),
                      })
                    : null),
                  (Y[69] = eE),
                  (Y[70] = i))
                : (i = Y[70]),
              Y[71] !== t || Y[72] !== i
                ? ((U = (0, o.jsxs)(f.OO, { className: "gap-3", children: [e, t, i] })),
                  (Y[71] = t),
                  (Y[72] = i),
                  (Y[73] = U))
                : (U = Y[73]),
              (L =
                null != em
                  ? (0, o.jsxs)(f.OO, {
                      className: "gap-3",
                      children: [
                        (0, o.jsx)("p", {
                          className: "text-sm text-secondary",
                          children: (0, o.jsx)(_.A, {
                            id: "settings.voice.dictionary.importDescription",
                            defaultMessage:
                              "Import these words from this device into your current account and workspace. Saved words will be available on your other devices",
                            description:
                              "Explains the destination and cross-device availability before importing local dictation vocabulary into the cloud dictionary",
                          }),
                        }),
                        (0, o.jsx)(O.t, {
                          children: [...new Set(es)].map((e) =>
                            (0, o.jsx)(
                              N.ic,
                              {
                                label: (0, o.jsx)("span", { className: "break-words select-text", children: e }),
                                control: (0, o.jsx)("div", {
                                  className: "relative",
                                  children: (0, o.jsx)(y.S, {
                                    "aria-label": e,
                                    checked: em.includes(e),
                                    disabled: eI,
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
                  : (0, o.jsxs)(f.OO, {
                      className: "gap-3",
                      children: [
                        ew
                          ? (0, o.jsxs)(w.W, {
                              children: [
                                (0, o.jsx)(_.A, {
                                  id: "speechSettings.content.customDictionary.loadError",
                                  defaultMessage: "We couldn’t load your saved words",
                                  description: "Error when Voice dictionary settings cannot load saved words",
                                }),
                                (0, o.jsx)(p.$, {
                                  type: "button",
                                  color: "secondary",
                                  loading: eT,
                                  onClick: () => void ex(),
                                  children: (0, o.jsx)(_.A, {
                                    id: "speechSettings.content.customDictionary.button.retry",
                                    defaultMessage: "Retry",
                                    description: "Button for retrying a failed custom dictionary load",
                                  }),
                                }),
                              ],
                            })
                          : null,
                        (0, o.jsx)("label", {
                          className: "text-sm font-medium",
                          htmlFor: "dictionary-new-word",
                          children: (0, o.jsx)(_.A, {
                            id: "speechSettings.content.customDictionary.addWord.heading",
                            defaultMessage: "Add word",
                            description: "Heading above the input for adding a speech recognition word or short phrase",
                          }),
                        }),
                        (0, o.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, o.jsx)(x.pd, {
                              id: "dictionary-new-word",
                              autoFocus: !0,
                              name: "dictation-custom-dictionary-new-word",
                              value: en,
                              "aria-describedby": "dictionary-limits dictionary-entry-error",
                              "aria-invalid": null != ec,
                              disabled: eN || eE,
                              onChange: (e) => {
                                ;(ed(e.target.value), el(null))
                              },
                              placeholder: er.formatMessage({
                                id: "speechSettings.content.customDictionary.input.add.placeholder",
                                defaultMessage: "Word ChatGPT should recognize when spoken",
                                description: "Placeholder for a word or short phrase to recognize during dictation",
                              }),
                            }),
                            (0, o.jsx)(p.$, {
                              type: "submit",
                              disabled: eN || eE || "" === en,
                              loading: eI && eA?.type === "add",
                              children: (0, o.jsx)(_.A, {
                                id: "speechSettings.content.customDictionary.button.add",
                                defaultMessage: "Add",
                                description: "Button for adding a word to the voice dictionary",
                              }),
                            }),
                          ],
                        }),
                        null != ec
                          ? (0, o.jsx)("p", {
                              id: "dictionary-entry-error",
                              role: "alert",
                              className: "text-sm text-secondary",
                              children: ec,
                            })
                          : null,
                        (0, o.jsx)(N.ic, {
                          label: (0, o.jsx)(_.A, {
                            id: "speechSettings.content.customDictionary.savedWords.heading",
                            defaultMessage: "Words",
                            description: "Heading above saved voice dictionary entries",
                          }),
                          control:
                            null == ef
                              ? null
                              : (0, o.jsx)(_.A, {
                                  id: "speechSettings.content.customDictionary.wordCount",
                                  defaultMessage: "{wordCount}/{maxWords}",
                                  description: "Saved voice dictionary entry count and maximum, for example 3/200",
                                  values: { wordCount: ef.words.length, maxWords: ef.max_words },
                                }),
                        }),
                        (0, o.jsx)(x.pd, {
                          "aria-label": er.formatMessage({
                            id: "speechSettings.content.customDictionary.input.search.ariaLabel",
                            defaultMessage: "Search words",
                            description: "Accessible label for searching saved speech recognition words",
                          }),
                          name: "dictation-custom-dictionary-search",
                          placeholder: er.formatMessage({
                            id: "speechSettings.content.customDictionary.input.search.placeholder",
                            defaultMessage: "Search",
                            description: "Placeholder for searching saved voice dictionary words",
                          }),
                          value: eu,
                          onChange: (e) => e_(e.target.value),
                          disabled: ev || ew,
                        }),
                        ev
                          ? (0, o.jsx)(w.W, {
                              children: (0, o.jsx)(_.A, {
                                id: "settings.voice.dictionary.loading",
                                defaultMessage: "Loading words…",
                                description: "Status while saved voice dictionary words load",
                              }),
                            })
                          : null,
                        ev || ew || null == r
                          ? null
                          : (0, o.jsx)(O.t, {
                              children:
                                0 === r.length
                                  ? (0, o.jsx)(w.W, {
                                      layout: "settings-row",
                                      children: eu.trim()
                                        ? (0, o.jsx)(_.A, {
                                            id: "speechSettings.content.customDictionary.emptySearch",
                                            defaultMessage: "No matching words",
                                            description:
                                              "Empty state when no saved voice dictionary words match the search",
                                          })
                                        : (0, o.jsx)(_.A, {
                                            id: "speechSettings.content.customDictionary.empty",
                                            defaultMessage: "No words yet",
                                            description:
                                              "Empty state before any voice dictionary words have been added",
                                          }),
                                    })
                                  : r.map((e) =>
                                      (0, o.jsx)(
                                        N.ic,
                                        {
                                          size: "compact",
                                          label: (0, o.jsx)("span", {
                                            className: "break-words select-text",
                                            children: e.text,
                                          }),
                                          control: (0, o.jsx)(p.$, {
                                            type: "button",
                                            color: "ghost",
                                            size: "icon",
                                            disabled: eI,
                                            "aria-label": er.formatMessage(
                                              {
                                                id: "speechSettings.content.customDictionary.button.remove.ariaLabel",
                                                defaultMessage: "Remove {word}",
                                                description:
                                                  "Accessible label for deleting a saved voice dictionary word",
                                              },
                                              { word: e.text },
                                            ),
                                            onClick: () => eC({ type: "delete", id: e.id }),
                                            children:
                                              eI && eA?.type === "delete" && eA.id === e.id
                                                ? (0, o.jsx)(T.y, { className: "icon-xs" })
                                                : (0, o.jsx)(v.cSG, {}),
                                          }),
                                        },
                                        e.id,
                                      ),
                                    ),
                            }),
                        null != es && es.length > 0
                          ? (0, o.jsx)(p.$, {
                              type: "button",
                              color: "secondary",
                              disabled: eN,
                              onClick: () => eh([...new Set(es)]),
                              children: (0, o.jsx)(_.A, {
                                id: "settings.voice.dictionary.reviewImport",
                                defaultMessage: "Import words from this device…",
                                description:
                                  "Button to preview existing local dictionary words before importing them into the current account and workspace",
                              }),
                            })
                          : null,
                      ],
                    })),
              (Y[28] = eE),
              (Y[29] = ef),
              (Y[30] = eN),
              (Y[31] = ec),
              (Y[32] = em),
              (Y[33] = er),
              (Y[34] = ew),
              (Y[35] = eT),
              (Y[36] = ev),
              (Y[37] = eI),
              (Y[38] = es),
              (Y[39] = eC),
              (Y[40] = en),
              (Y[41] = ei),
              (Y[42] = ex),
              (Y[43] = eu),
              (Y[44] = eA),
              (Y[45] = H),
              (Y[46] = z),
              (Y[47] = V),
              (Y[48] = W),
              (Y[49] = q),
              (Y[50] = F),
              (Y[51] = U),
              (Y[52] = L),
              (Y[53] = B),
              (Y[54] = Z),
              (Y[55] = $),
              (Y[56] = K))
          } else
            ((H = Y[45]),
              (z = Y[46]),
              (V = Y[47]),
              (W = Y[48]),
              (q = Y[49]),
              (F = Y[50]),
              (U = Y[51]),
              (L = Y[52]),
              (B = Y[53]),
              (Z = Y[54]),
              ($ = Y[55]),
              (K = Y[56]))
          return (
            Y[74] !== eN || Y[75] !== em || Y[76] !== eI
              ? ((X =
                  null != em
                    ? (0, o.jsx)(f.OO, {
                        className: "gap-3",
                        children: (0, o.jsxs)(f.Es, {
                          children: [
                            (0, o.jsx)(p.$, {
                              type: "button",
                              color: "secondary",
                              disabled: eI,
                              onClick: () => eh(null),
                              children: (0, o.jsx)(_.A, {
                                id: "settings.voice.dictionary.cancelImport",
                                defaultMessage: "Cancel",
                                description: "Cancel the local vocabulary import preview without changing saved words",
                              }),
                            }),
                            (0, o.jsx)(p.$, {
                              type: "submit",
                              loading: eI,
                              disabled: eN || 0 === em.length,
                              children: (0, o.jsx)(_.A, {
                                id: "settings.voice.dictionary.confirmImport",
                                defaultMessage: "Import words",
                                description:
                                  "Confirm importing the selected local words into the current account and workspace",
                              }),
                            }),
                          ],
                        }),
                      })
                    : null),
                (Y[74] = eN),
                (Y[75] = em),
                (Y[76] = eI),
                (Y[77] = X))
              : (X = Y[77]),
            Y[78] !== H ||
            Y[79] !== V ||
            Y[80] !== W ||
            Y[81] !== q ||
            Y[82] !== F ||
            Y[83] !== U ||
            Y[84] !== L ||
            Y[85] !== X
              ? ((J = (0, o.jsxs)(H, { as: V, size: W, className: q, onSubmit: F, children: [U, L, X] })),
                (Y[78] = H),
                (Y[79] = V),
                (Y[80] = W),
                (Y[81] = q),
                (Y[82] = F),
                (Y[83] = U),
                (Y[84] = L),
                (Y[85] = X),
                (Y[86] = J))
              : (J = Y[86]),
            Y[87] !== z || Y[88] !== B || Y[89] !== Z || Y[90] !== $ || Y[91] !== K || Y[92] !== J
              ? ((Q = (0, o.jsx)(z, { open: B, onOpenChange: Z, size: $, contentProps: K, children: J })),
                (Y[87] = z),
                (Y[88] = B),
                (Y[89] = Z),
                (Y[90] = $),
                (Y[91] = K),
                (Y[92] = J),
                (Y[93] = Q))
              : (Q = Y[93]),
            Q
          )
        },
      },
    )
  },
  Mq0M(e, t, i) {
    var o = i("mBJV"),
      r = i("lSdY"),
      a = i("ZhWf"),
      s = i("GDNt"),
      n = i("R9Ov")
    let d = "CHATGPT_DICTATION_PRODUCT_CHATGPT"
    i.d(
      t,
      {},
      {
        SE: function (e, t, i) {
          e.logProductEvent(a.Fv, {
            dictationSessionId: t,
            product: d,
            productExperience:
              null == i
                ? void 0
                : { chat: r.b.CHATGPT_PRODUCT_EXPERIENCE_CHAT, work: r.b.CHATGPT_PRODUCT_EXPERIENCE_WORK }[i],
          })
        },
        hV: function (e, t, i = "CHATGPT_DICTATION_RECORDING_SOURCE_MICROPHONE") {
          e.logProductEvent(o.wrl, {
            dictationSessionId: t.dictationSessionId,
            attemptId: t.attemptId,
            isRetry: t.isRetry,
            product: d,
            recordingSource: i,
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
          e.logProductEvent(a.BE, {
            product: d,
            action: {
              hover: "CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_HOVER",
              stop: "CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_STOP",
              send: "CHATGPT_VOICE_DICTATION_INTERACTION_ACTION_SEND",
            }[t],
          })
        },
        mk: function (e, t) {
          ;(e instanceof s.fk && "network" !== e.errorKind) || (0, n.S)(e)
        },
        wb: function (e, t = {}) {},
      },
    )
  },
  R9Ov(e, t, i) {
    var o = i("w5lF"),
      r = i("eShZ")
    let a =
        "Something went wrong. If this issue persists please contact us through our help center at help.openai.com.",
      s = "Audio too short",
      n = new Set([
        "ERR_TIMED_OUT",
        "ETIMEDOUT",
        "transcription_failed",
        "audio_too_short",
        "network_error",
        "not_json_response",
        "engine_overloaded",
        "file_above_max_size",
        "model_overloaded",
        "overloaded",
        "rate_limit_exceeded",
        "server_overloaded",
        "internal_server_error",
        "input_too_large",
        "model_not_found",
        "invalid_api_key",
        "insufficient_quota",
        "invalid_value",
        "unsupported_value",
        "invalid_parameter",
        "invalid_type",
        "invalid_json",
        "invalid_multipart_form_data",
        "missing_required_parameter",
        "missing_file_name",
        "unsupported_file_mimetype",
        "unsupported_content_type",
        "unknown",
        "request_account_access",
        "all_accounts_blocked",
        "unexpected_sso_login",
        "sso_mismatch",
        "require_sso_login",
        "trigger_account_transfer",
        "deactivated_workspace",
        "iran_web_rollout_blocked",
        "chatgpt_ip_workspace_restricted",
        "sa_server_service_me_error_status",
        "violence_auth_freeze",
        "expired_session_key",
        "token_expired",
        "token_invalidated",
        "token_revoked",
        "invalid_account_id_header",
      ])
    function d(e) {
      if (null != e)
        return /^(?:req|fake)_[0-9a-fA-F]{32}(?:\.[A-Za-z0-9]{6,8})?$/.test(e) ||
          /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(e) ||
          /^[0-9a-fA-F]{32}$/.test(e)
          ? e
          : void 0
    }
    i.d(
      t,
      {},
      {
        S: function (e) {
          var t
          if (!(e instanceof r.fk)) return Error(a)
          let i = e.diagnosticError instanceof o.rX ? e.diagnosticError : void 0,
            c = e.errorCode ?? i?.code,
            l = 400 === e.status && ("audio_too_short" === c || (i?.message ?? e.message) === s),
            u = l ? s : a,
            _ = "network" === e.errorKind ? "network_error" : "transcription_failed"
          return (
            l ? (_ = "audio_too_short") : null != c && n.has(c) && (_ = c),
            new r.fk(
              u,
              e.status,
              _,
              e.responseStatus,
              e.errorKind,
              e.retryAtMs,
              new o.rX(
                "/transcribe",
                e.status,
                { detail: { code: _, message: u } },
                d(i?.requestId),
                Error(u),
                null != (t = i?.cfRequestId) && /^[0-9a-fA-F]{16}(?:-[A-Za-z]{3})?$/.test(t) ? t : void 0,
                d(i?.xOaiRequestId),
              ),
            )
          )
        },
        e: d,
      },
    )
  },
}
//# sourceMappingURL=126704.becefcdeca.js.map
