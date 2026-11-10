export const __rspack_esm_ids = [904323]
export const __webpack_modules__ = {
  yzhe(e, t, i) {
    var a = i("ABep"),
      r = i("QosV"),
      s = i("irkb"),
      o = i("T0Rc"),
      n = i("xSOA"),
      d = i("zTeN"),
      l = i("DBCl"),
      c = i("zd8w"),
      u = i("Wf1j"),
      m = i("oyxz"),
      p = i("ASxG"),
      g = i("Ghh3"),
      f = i("ygO2"),
      h = i("Xpvt"),
      x = i("JNtf"),
      y = i("mUDD"),
      b = i("GO7r"),
      v = i("evwP"),
      w = i("RNul"),
      j = i("zLIa"),
      A = i("SGsN"),
      k = i("JAPD"),
      S = i("OWtl"),
      N = i("RxZZ"),
      _ = i("AWNZ"),
      M = i("ZEx5"),
      C = i("eShZ")
    let z = p.number().int().min(1).max(100).catch(50)
    i.d(
      t,
      {},
      {
        DictionaryDialog: function (e) {
          let t,
            i,
            p,
            D,
            E,
            W,
            I,
            L,
            O,
            R,
            F,
            G,
            T,
            V,
            Z,
            $,
            P,
            B,
            q,
            H,
            Q,
            U,
            Y,
            J,
            X,
            K = (0, r.c)(94),
            { accountId: ee, userId: et, onClose: ei } = e,
            ea = (0, d.gh)(S.u),
            er = (0, u.A)(),
            es = (0, s.jE)(),
            eo = (0, N.iK)(l.Szl.dictationDictionary),
            [en, ed] = (0, c.useState)(""),
            [el, ec] = (0, c.useState)(null),
            [eu, em] = (0, c.useState)(""),
            [ep, eg] = (0, c.useState)(null),
            ef = (0, c.useRef)(null)
          ;(K[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = () => () => ef.current?.abort()), (i = []), (K[0] = t), (K[1] = i))
            : ((t = K[0]), (i = K[1])),
            (0, c.useEffect)(t, i),
            K[2] !== ee || K[3] !== et
              ? ((p = ["dictation-custom-dictionary", ee, et]), (K[2] = ee), (K[3] = et), (K[4] = p))
              : (p = K[4]))
          let eh = p
          K[5] !== ee ? ((D = { "ChatGPT-Account-ID": ee, [l.zBc]: ee }), (K[5] = ee), (K[6] = D)) : (D = K[6])
          let ex = D
          ;(K[7] !== ex
            ? ((E = async (e) => {
                let { signal: t } = e,
                  i = await g.Request.safeGet("/dictation/custom_dictionary", {
                    additionalHeaders: ex,
                    signal: t,
                    expectedErrorStatuses: [404],
                  })
                return { ...i, max_entry_utf16_units: z.parse(i.max_entry_utf16_units) }
              }),
              (K[7] = ex),
              (K[8] = E))
            : (E = K[8]),
            K[9] !== eh || K[10] !== E
              ? ((W = { queryKey: eh, queryFn: E, staleTime: 5e3, refetchOnWindowFocus: "always", retry: !1 }),
                (K[9] = eh),
                (K[10] = E),
                (K[11] = W))
              : (W = K[11]))
          let { data: ey, isPending: eb, isError: ev, isFetching: ew, refetch: ej } = (0, o.I)(W)
          ;(K[12] !== ee || K[13] !== ex || K[14] !== es || K[15] !== ea || K[16] !== et
            ? ((I = async (e) => {
                "add" === e.type && ec(null)
                let t = new AbortController()
                ef.current = t
                let i = t.signal
                if ("delete" === e.type)
                  await g.Request.safeDelete("/dictation/custom_dictionary/words/{word_id}", {
                    parameters: { path: { word_id: e.id } },
                    additionalHeaders: ex,
                    signal: i,
                    expectedErrorStatuses: [404],
                  })
                else if ("add" === e.type)
                  await (0, k._)({
                    queryClient: es,
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
                      await g.Request.safePost("/dictation/custom_dictionary/words", {
                        requestBody: { text: t },
                        additionalHeaders: ex,
                        signal: i,
                        expectedErrorStatuses: [400, 404, 409, 422],
                      })
                    } catch (e) {
                      if (!(e instanceof C.fk && 409 === e.status && "account_changed" !== e.errorCode)) throw e
                    }
                  }
                  i.throwIfAborted()
                  let t = await (0, N.LA)(l.Szl.dictationDictionary)
                  ;(i.throwIfAborted(),
                    null != t &&
                      (await (0, N.gc)(
                        ea,
                        l.Szl.dictationDictionary,
                        t.filter((t) => !e.words.includes(t)),
                        { optimistic: !1 },
                      )),
                    eg(null))
                }
              }),
              (K[12] = ee),
              (K[13] = ex),
              (K[14] = es),
              (K[15] = ea),
              (K[16] = et),
              (K[17] = I))
            : (I = K[17]),
            K[18] !== es || K[19] !== eh
              ? ((L = async (e, t, i) => {
                  ;(await es.invalidateQueries({ queryKey: eh }, { cancelRefetch: "add" !== i.type || null != t }),
                    (ef.current = null))
                }),
                (K[18] = es),
                (K[19] = eh),
                (K[20] = L))
              : (L = K[20]),
            K[21] !== er || K[22] !== ea
              ? ((O = (e, t) => {
                  let i
                  if (!("AbortError" === e.name || ef.current?.signal.aborted)) {
                    if (
                      ((i =
                        e instanceof C.fk && "account_changed" !== e.errorCode && 409 === e.status
                          ? er.formatMessage({
                              id: "settings.voice.dictionary.duplicateError",
                              defaultMessage: "This word is already in your dictionary",
                              description:
                                "Voice dictionary error when a normalized, case-insensitive equivalent entry is already saved",
                            })
                          : e instanceof C.fk && 422 === e.status
                            ? er.formatMessage({
                                id: "settings.voice.dictionary.capacityError",
                                defaultMessage:
                                  "Your dictionary is full. Remove a saved word before adding more. Words from this device are kept for retry",
                                description:
                                  "Voice dictionary capacity error, including imports that may have partially succeeded; local words are retained",
                              })
                            : e instanceof C.fk && 400 === e.status && "dictionary_entry_too_long" === e.errorCode
                              ? er.formatMessage({
                                  id: "settings.voice.dictionary.serverTooLong",
                                  defaultMessage:
                                    "This word is too long after text normalization. Shorten it to the current limit shown above",
                                  description:
                                    "Server validation error for a dictionary entry exceeding the normalized UTF-16 length limit",
                                })
                              : e instanceof C.fk && 400 === e.status
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
                      return void ec(i)
                    ea.get(A.Id).danger(i, { errorAnalytics: { toastId: "settings.voice.dictionary.saveError" } })
                  }
                }),
                (K[21] = er),
                (K[22] = ea),
                (K[23] = O))
              : (O = K[23]),
            K[24] !== I || K[25] !== L || K[26] !== O
              ? ((R = { mutationFn: I, onSettled: L, onError: O }), (K[24] = I), (K[25] = L), (K[26] = O), (K[27] = R))
              : (R = K[27]))
          let { mutate: eA, isPending: ek, variables: eS } = (0, n.n)(R),
            eN = null != ey && ey.words.length >= ey.max_words,
            e_ = eb || ev || ek
          if (
            K[28] !== eN ||
            K[29] !== ey ||
            K[30] !== e_ ||
            K[31] !== el ||
            K[32] !== ep ||
            K[33] !== er ||
            K[34] !== ev ||
            K[35] !== ew ||
            K[36] !== eb ||
            K[37] !== ek ||
            K[38] !== eo ||
            K[39] !== eA ||
            K[40] !== en ||
            K[41] !== ei ||
            K[42] !== ej ||
            K[43] !== eu ||
            K[44] !== eS
          ) {
            let e,
              t,
              i,
              r = ey?.words.filter((e) => e.text.toLocaleLowerCase().includes(eu.trim().toLocaleLowerCase()))
            ;((G = x.lG),
              (q = !0),
              K[57] !== ei
                ? ((H = (e) => {
                    e || ei()
                  }),
                  (K[57] = ei),
                  (K[58] = H))
                : (H = K[58]),
              (Q = "wide"),
              K[59] === Symbol.for("react.memo_cache_sentinel")
                ? ((U = { "aria-describedby": void 0 }), (K[59] = U))
                : (U = K[59]),
              (F = y.R4),
              (T = "form"),
              (V = "viewport"),
              (Z = "select-none"),
              K[60] !== eN || K[61] !== e_ || K[62] !== ep || K[63] !== eA || K[64] !== en
                ? (($ = (e) => {
                    ;(e.preventDefault(),
                      !e_ &&
                        (null != ep
                          ? ep.length > 0 && eA({ type: "import", words: ep })
                          : "" === en || eN || eA({ type: "add", text: en })))
                  }),
                  (K[60] = eN),
                  (K[61] = e_),
                  (K[62] = ep),
                  (K[63] = eA),
                  (K[64] = en),
                  (K[65] = $))
                : ($ = K[65]),
              K[66] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(y.c7, {
                    title: (0, a.jsx)(x.L3, {
                      children: (0, a.jsx)(m.A, {
                        id: "speechSettings.content.customDictionary.page.title",
                        defaultMessage: "Voice dictionary",
                        description:
                          "Title for the voice dictionary settings where users manage words to recognize in their speech",
                      }),
                    }),
                  })),
                  (K[66] = e))
                : (e = K[66]),
              K[67] !== ey
                ? ((t =
                    null != ey
                      ? (0, a.jsx)("p", {
                          id: "dictionary-limits",
                          className: "text-sm text-secondary",
                          children: (0, a.jsx)(m.A, {
                            id: "settings.voice.dictionary.limits",
                            defaultMessage:
                              "Dictionary capacity: {maxWords, number}. Each word can contain up to {maxLength, plural, one {# character} other {# characters}} after text normalization. Some characters, including emoji, count as two or more",
                            description:
                              "Voice dictionary limits: maxWords is the maximum number of entries, maxLength is the maximum UTF-16 length after Unicode and whitespace normalization; emoji can consume multiple units",
                            values: { maxWords: ey.max_words, maxLength: ey.max_entry_utf16_units },
                          }),
                        })
                      : null),
                  (K[67] = ey),
                  (K[68] = t))
                : (t = K[68]),
              K[69] !== eN
                ? ((i = eN
                    ? (0, a.jsx)("p", {
                        role: "status",
                        className: "text-sm text-secondary",
                        children: (0, a.jsx)(m.A, {
                          id: "settings.voice.dictionary.atCapacity",
                          defaultMessage:
                            "Your dictionary is full. Your saved words are kept. Remove words to make room for new ones",
                          description:
                            "Voice dictionary notice when saved entry count reaches or exceeds the current server limit; existing entries are not removed automatically",
                        }),
                      })
                    : null),
                  (K[69] = eN),
                  (K[70] = i))
                : (i = K[70]),
              K[71] !== t || K[72] !== i
                ? ((P = (0, a.jsxs)(y.OO, { className: "gap-3", children: [e, t, i] })),
                  (K[71] = t),
                  (K[72] = i),
                  (K[73] = P))
                : (P = K[73]),
              (B =
                null != ep
                  ? (0, a.jsxs)(y.OO, {
                      className: "gap-3",
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-sm text-secondary",
                          children: (0, a.jsx)(m.A, {
                            id: "settings.voice.dictionary.importDescription",
                            defaultMessage:
                              "Import these words from this device into your current account and workspace. Saved words will be available on your other devices",
                            description:
                              "Explains the destination and cross-device availability before importing local dictation vocabulary into the cloud dictionary",
                          }),
                        }),
                        (0, a.jsx)(M.t, {
                          children: [...new Set(eo)].map((e) =>
                            (0, a.jsx)(
                              _.ic,
                              {
                                label: (0, a.jsx)("span", { className: "break-words select-text", children: e }),
                                control: (0, a.jsx)("div", {
                                  className: "relative",
                                  children: (0, a.jsx)(h.S, {
                                    "aria-label": e,
                                    checked: ep.includes(e),
                                    disabled: ek,
                                    onCheckedChange: (t) => eg(t ? [...ep, e] : ep.filter((t) => t !== e)),
                                  }),
                                }),
                              },
                              e,
                            ),
                          ),
                        }),
                      ],
                    })
                  : (0, a.jsxs)(y.OO, {
                      className: "gap-3",
                      children: [
                        ev
                          ? (0, a.jsxs)(v.W, {
                              children: [
                                (0, a.jsx)(m.A, {
                                  id: "speechSettings.content.customDictionary.loadError",
                                  defaultMessage: "We couldn’t load your saved words",
                                  description: "Error when Voice dictionary settings cannot load saved words",
                                }),
                                (0, a.jsx)(f.$, {
                                  type: "button",
                                  color: "secondary",
                                  loading: ew,
                                  onClick: () => void ej(),
                                  children: (0, a.jsx)(m.A, {
                                    id: "speechSettings.content.customDictionary.button.retry",
                                    defaultMessage: "Retry",
                                    description: "Button for retrying a failed custom dictionary load",
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
                            description: "Heading above the input for adding a speech recognition word or short phrase",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, a.jsx)(j.pd, {
                              id: "dictionary-new-word",
                              autoFocus: !0,
                              name: "dictation-custom-dictionary-new-word",
                              value: en,
                              "aria-describedby": "dictionary-limits dictionary-entry-error",
                              "aria-invalid": null != el,
                              disabled: e_ || eN,
                              onChange: (e) => {
                                ;(ed(e.target.value), ec(null))
                              },
                              placeholder: er.formatMessage({
                                id: "speechSettings.content.customDictionary.input.add.placeholder",
                                defaultMessage: "Word ChatGPT should recognize when spoken",
                                description: "Placeholder for a word or short phrase to recognize during dictation",
                              }),
                            }),
                            (0, a.jsx)(f.$, {
                              type: "submit",
                              disabled: e_ || eN || "" === en,
                              loading: ek && eS?.type === "add",
                              children: (0, a.jsx)(m.A, {
                                id: "speechSettings.content.customDictionary.button.add",
                                defaultMessage: "Add",
                                description: "Button for adding a word to the voice dictionary",
                              }),
                            }),
                          ],
                        }),
                        null != el
                          ? (0, a.jsx)("p", {
                              id: "dictionary-entry-error",
                              role: "alert",
                              className: "text-sm text-secondary",
                              children: el,
                            })
                          : null,
                        (0, a.jsx)(_.ic, {
                          label: (0, a.jsx)(m.A, {
                            id: "speechSettings.content.customDictionary.savedWords.heading",
                            defaultMessage: "Words",
                            description: "Heading above saved voice dictionary entries",
                          }),
                          control:
                            null == ey
                              ? null
                              : (0, a.jsx)(m.A, {
                                  id: "speechSettings.content.customDictionary.wordCount",
                                  defaultMessage: "{wordCount}/{maxWords}",
                                  description: "Saved voice dictionary entry count and maximum, for example 3/200",
                                  values: { wordCount: ey.words.length, maxWords: ey.max_words },
                                }),
                        }),
                        (0, a.jsx)(j.pd, {
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
                          onChange: (e) => em(e.target.value),
                          disabled: eb || ev,
                        }),
                        eb
                          ? (0, a.jsx)(v.W, {
                              children: (0, a.jsx)(m.A, {
                                id: "settings.voice.dictionary.loading",
                                defaultMessage: "Loading words…",
                                description: "Status while saved voice dictionary words load",
                              }),
                            })
                          : null,
                        eb || ev || null == r
                          ? null
                          : (0, a.jsx)(M.t, {
                              children:
                                0 === r.length
                                  ? (0, a.jsx)(v.W, {
                                      layout: "settings-row",
                                      children: eu.trim()
                                        ? (0, a.jsx)(m.A, {
                                            id: "speechSettings.content.customDictionary.emptySearch",
                                            defaultMessage: "No matching words",
                                            description:
                                              "Empty state when no saved voice dictionary words match the search",
                                          })
                                        : (0, a.jsx)(m.A, {
                                            id: "speechSettings.content.customDictionary.empty",
                                            defaultMessage: "No words yet",
                                            description:
                                              "Empty state before any voice dictionary words have been added",
                                          }),
                                    })
                                  : r.map((e) =>
                                      (0, a.jsx)(
                                        _.ic,
                                        {
                                          size: "compact",
                                          label: (0, a.jsx)("span", {
                                            className: "break-words select-text",
                                            children: e.text,
                                          }),
                                          control: (0, a.jsx)(f.$, {
                                            type: "button",
                                            color: "ghost",
                                            size: "icon",
                                            disabled: ek,
                                            "aria-label": er.formatMessage(
                                              {
                                                id: "speechSettings.content.customDictionary.button.remove.ariaLabel",
                                                defaultMessage: "Remove {word}",
                                                description:
                                                  "Accessible label for deleting a saved voice dictionary word",
                                              },
                                              { word: e.text },
                                            ),
                                            onClick: () => eA({ type: "delete", id: e.id }),
                                            children:
                                              ek && eS?.type === "delete" && eS.id === e.id
                                                ? (0, a.jsx)(w.y, { className: "icon-xs" })
                                                : (0, a.jsx)(b.cSG, {}),
                                          }),
                                        },
                                        e.id,
                                      ),
                                    ),
                            }),
                        null != eo && eo.length > 0
                          ? (0, a.jsx)(f.$, {
                              type: "button",
                              color: "secondary",
                              disabled: e_,
                              onClick: () => eg([...new Set(eo)]),
                              children: (0, a.jsx)(m.A, {
                                id: "settings.voice.dictionary.reviewImport",
                                defaultMessage: "Import words from this device…",
                                description:
                                  "Button to preview existing local dictionary words before importing them into the current account and workspace",
                              }),
                            })
                          : null,
                      ],
                    })),
              (K[28] = eN),
              (K[29] = ey),
              (K[30] = e_),
              (K[31] = el),
              (K[32] = ep),
              (K[33] = er),
              (K[34] = ev),
              (K[35] = ew),
              (K[36] = eb),
              (K[37] = ek),
              (K[38] = eo),
              (K[39] = eA),
              (K[40] = en),
              (K[41] = ei),
              (K[42] = ej),
              (K[43] = eu),
              (K[44] = eS),
              (K[45] = F),
              (K[46] = G),
              (K[47] = T),
              (K[48] = V),
              (K[49] = Z),
              (K[50] = $),
              (K[51] = P),
              (K[52] = B),
              (K[53] = q),
              (K[54] = H),
              (K[55] = Q),
              (K[56] = U))
          } else
            ((F = K[45]),
              (G = K[46]),
              (T = K[47]),
              (V = K[48]),
              (Z = K[49]),
              ($ = K[50]),
              (P = K[51]),
              (B = K[52]),
              (q = K[53]),
              (H = K[54]),
              (Q = K[55]),
              (U = K[56]))
          return (
            K[74] !== e_ || K[75] !== ep || K[76] !== ek
              ? ((Y =
                  null != ep
                    ? (0, a.jsx)(y.OO, {
                        className: "gap-3",
                        children: (0, a.jsxs)(y.Es, {
                          children: [
                            (0, a.jsx)(f.$, {
                              type: "button",
                              color: "secondary",
                              disabled: ek,
                              onClick: () => eg(null),
                              children: (0, a.jsx)(m.A, {
                                id: "settings.voice.dictionary.cancelImport",
                                defaultMessage: "Cancel",
                                description: "Cancel the local vocabulary import preview without changing saved words",
                              }),
                            }),
                            (0, a.jsx)(f.$, {
                              type: "submit",
                              loading: ek,
                              disabled: e_ || 0 === ep.length,
                              children: (0, a.jsx)(m.A, {
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
                (K[74] = e_),
                (K[75] = ep),
                (K[76] = ek),
                (K[77] = Y))
              : (Y = K[77]),
            K[78] !== F ||
            K[79] !== T ||
            K[80] !== V ||
            K[81] !== Z ||
            K[82] !== $ ||
            K[83] !== P ||
            K[84] !== B ||
            K[85] !== Y
              ? ((J = (0, a.jsxs)(F, { as: T, size: V, className: Z, onSubmit: $, children: [P, B, Y] })),
                (K[78] = F),
                (K[79] = T),
                (K[80] = V),
                (K[81] = Z),
                (K[82] = $),
                (K[83] = P),
                (K[84] = B),
                (K[85] = Y),
                (K[86] = J))
              : (J = K[86]),
            K[87] !== G || K[88] !== q || K[89] !== H || K[90] !== Q || K[91] !== U || K[92] !== J
              ? ((X = (0, a.jsx)(G, { open: q, onOpenChange: H, size: Q, contentProps: U, children: J })),
                (K[87] = G),
                (K[88] = q),
                (K[89] = H),
                (K[90] = Q),
                (K[91] = U),
                (K[92] = J),
                (K[93] = X))
              : (X = K[93]),
            X
          )
        },
      },
    )
  },
  bZug(e, t, i) {
    i.d(
      t,
      {},
      {
        r: "flex flex-col [&>*:not(:last-child)]:relative [&>*:not(:last-child)]:after:pointer-events-none [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:inset-x-4 [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-px [&>*:not(:last-child)]:after:bg-border [&>*:not(:last-child)]:after:content-['']",
        s: "flex flex-col [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border",
      },
    )
  },
  AWNZ(e, t, i) {
    var a = i("ABep"),
      r = i("QosV"),
      s = i("on57"),
      o = i("zd8w"),
      n = i("HZfM"),
      d = i("GO7r")
    function l(e) {
      return e.preventDefault()
    }
    function c(e) {
      let t,
        i,
        o,
        n,
        d,
        l,
        c,
        u = (0, r.c)(24),
        {
          label: m,
          labelId: p,
          labelSizing: g,
          labelWeight: f,
          description: h,
          descriptionId: x,
          icon: y,
          variant: b,
          verticalAlignment: v,
        } = e,
        w = "start" === v ? "items-start" : "items-center",
        j = "grow" === (void 0 === g ? "grow" : g) && "flex-1"
      ;(u[0] !== w || u[1] !== j
        ? ((t = (0, s.A)("flex min-w-0 gap-3", w, j)), (u[0] = w), (u[1] = j), (u[2] = t))
        : (t = u[2]),
        u[3] !== y
          ? ((i = null != y ? (0, a.jsx)("span", { className: "flex shrink-0", children: y }) : null),
            (u[3] = y),
            (u[4] = i))
          : (i = u[4]))
      let A = "featured" === b && "text-base",
        k = "recommendation" === b && "text-[13px] leading-[18.571429px]",
        S = "featured" !== b && "recommendation" !== b && "text-sm",
        N = "nested" !== b && "medium" === (void 0 === f ? "medium" : f) && "font-medium"
      return (
        u[5] !== N || u[6] !== A || u[7] !== k || u[8] !== S
          ? ((o = (0, s.A)(
              "min-w-0 break-words text-default group-data-[density=compact]/settings:leading-4.5",
              A,
              k,
              S,
              N,
            )),
            (u[5] = N),
            (u[6] = A),
            (u[7] = k),
            (u[8] = S),
            (u[9] = o))
          : (o = u[9]),
        u[10] !== m || u[11] !== p || u[12] !== o
          ? ((n = (0, a.jsx)("div", { id: p, className: o, children: m })),
            (u[10] = m),
            (u[11] = p),
            (u[12] = o),
            (u[13] = n))
          : (n = u[13]),
        u[14] !== h || u[15] !== x
          ? ((d = h
              ? (0, a.jsx)("div", {
                  id: x,
                  className: "min-w-0 text-xs leading-4 text-wrap break-words text-secondary",
                  children: h,
                })
              : null),
            (u[14] = h),
            (u[15] = x),
            (u[16] = d))
          : (d = u[16]),
        u[17] !== n || u[18] !== d
          ? ((l = (0, a.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [n, d] })),
            (u[17] = n),
            (u[18] = d),
            (u[19] = l))
          : (l = u[19]),
        u[20] !== l || u[21] !== t || u[22] !== i
          ? ((c = (0, a.jsxs)("div", { className: t, children: [i, l] })),
            (u[20] = l),
            (u[21] = t),
            (u[22] = i),
            (u[23] = c))
          : (c = u[23]),
        c
      )
    }
    i.d(
      t,
      {},
      {
        $5: function (e) {
          let t,
            i,
            o,
            n,
            d,
            l,
            c = (0, r.c)(18),
            { children: u, compactLabelInset: m, label: p, valueAlignment: g, variant: f } = e,
            h = void 0 === m || m,
            x = void 0 === g ? "start" : g,
            y = void 0 === f ? "default" : f,
            b =
              "compact" === y
                ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-default electron:opacity-75"
                : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          return (
            c[0] !== b ? ((t = (0, s.A)("grid items-center", b)), (c[0] = b), (c[1] = t)) : (t = c[1]),
            c[2] !== h || c[3] !== y
              ? ((i = (0, s.A)(
                  "min-w-0",
                  "compact" === y
                    ? (0, s.A)("flex items-center pe-2 text-start", h && "ps-1")
                    : "text-sm text-secondary",
                )),
                (c[2] = h),
                (c[3] = y),
                (c[4] = i))
              : (i = c[4]),
            c[5] !== p || c[6] !== i
              ? ((o = (0, a.jsx)("div", { className: i, children: p })), (c[5] = p), (c[6] = i), (c[7] = o))
              : (o = c[7]),
            c[8] !== x || c[9] !== y
              ? ((n = (0, s.A)(
                  "min-w-0",
                  "compact" === y
                    ? "flex items-center justify-end justify-self-stretch overflow-hidden"
                    : (0, s.A)("break-words whitespace-normal text-sm text-default", "end" === x && "text-end"),
                )),
                (c[8] = x),
                (c[9] = y),
                (c[10] = n))
              : (n = c[10]),
            c[11] !== u || c[12] !== n
              ? ((d = (0, a.jsx)("div", { className: n, children: u })), (c[11] = u), (c[12] = n), (c[13] = d))
              : (d = c[13]),
            c[14] !== t || c[15] !== o || c[16] !== d
              ? ((l = (0, a.jsxs)("div", { className: t, children: [o, d] })),
                (c[14] = t),
                (c[15] = o),
                (c[16] = d),
                (c[17] = l))
              : (l = c[17]),
            l
          )
        },
        ic: function (e) {
          let t,
            i,
            n,
            d,
            l = (0, r.c)(35),
            {
              label: u,
              labelSizing: m,
              labelWeight: p,
              layout: g,
              description: f,
              control: h,
              controlSizing: x,
              icon: y,
              className: b,
              id: v,
              inset: w,
              size: j,
              variant: A,
              verticalAlignment: k,
            } = e,
            S = void 0 === m ? "grow" : m,
            N = void 0 === p ? "medium" : p,
            _ = void 0 === g ? "default" : g,
            M = void 0 === x ? "minimum" : x,
            C = void 0 === w || w,
            z = void 0 === j ? "default" : j,
            D = void 0 === A ? "default" : A,
            E = void 0 === k ? "center" : k,
            W = (0, o.useId)(),
            I = null != u || null != f || null != y,
            L = "function" == typeof h,
            O = L && null != u ? `${W}-label` : void 0,
            R = L && f ? `${W}-description` : void 0,
            F = C && ("split" !== _ || "default" !== D) && "px-4",
            G = C && "nested" === D && "group-data-[density=form]/settings:px-5",
            T =
              "stacked" === D &&
              "flex flex-col items-stretch gap-1 py-3 group-data-[density=compact]/settings:gap-0.5 group-data-[density=compact]/settings:py-2.5 group-data-[density=compact]/settings:first:pt-3.5 group-data-[density=compact]/settings:last:pb-4",
            V =
              "nested" === D &&
              "flex min-h-10 justify-between gap-3 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch group-data-[density=form]/settings:min-h-12 sm:group-data-[density=form]/settings:py-0",
            Z = "stacked" !== D && ("start" === E ? "items-start" : "items-center"),
            $ = "split" === _ && "default" === D && "grid grid-cols-1 gap-2 px-0 py-4 sm:grid-cols-3"
          return (
            l[0] !== b ||
            l[1] !== _ ||
            l[2] !== z ||
            l[3] !== G ||
            l[4] !== T ||
            l[5] !== V ||
            l[6] !== Z ||
            l[7] !== $ ||
            l[8] !== F ||
            l[9] !== D
              ? ((t = (0, s.A)(
                  "@container/settings-row",
                  F,
                  G,
                  T,
                  V,
                  Z,
                  $,
                  "default" === _ &&
                    ("default" === D || "featured" === D || "recommendation" === D) &&
                    (0, s.A)(
                      "flex justify-between",
                      "featured" === D && (0, s.A)("gap-6", "compact" === z ? "min-h-11 py-2" : "py-4"),
                      "featured" !== D && ("compact" === z ? "gap-4 py-2" : "gap-6 py-3"),
                    ),
                  "recommendation" === D && "dark:bg-primary-ghost-hover",
                  b,
                )),
                (l[0] = b),
                (l[1] = _),
                (l[2] = z),
                (l[3] = G),
                (l[4] = T),
                (l[5] = V),
                (l[6] = Z),
                (l[7] = $),
                (l[8] = F),
                (l[9] = D),
                (l[10] = t))
              : (t = l[10]),
            l[11] !== f ||
            l[12] !== R ||
            l[13] !== I ||
            l[14] !== y ||
            l[15] !== u ||
            l[16] !== O ||
            l[17] !== S ||
            l[18] !== N ||
            l[19] !== D ||
            l[20] !== E
              ? ((i = I
                  ? (0, a.jsx)(c, {
                      label: u,
                      labelId: O,
                      labelSizing: S,
                      labelWeight: N,
                      description: f,
                      descriptionId: R,
                      icon: y,
                      variant: D,
                      verticalAlignment: E,
                    })
                  : null),
                (l[11] = f),
                (l[12] = R),
                (l[13] = I),
                (l[14] = y),
                (l[15] = u),
                (l[16] = O),
                (l[17] = S),
                (l[18] = N),
                (l[19] = D),
                (l[20] = E),
                (l[21] = i))
              : (i = l[21]),
            l[22] !== h || l[23] !== M || l[24] !== R || l[25] !== L || l[26] !== O || l[27] !== _ || l[28] !== D
              ? ((n =
                  null != h && !1 !== h
                    ? (0, a.jsx)("div", {
                        className: (0, s.A)(
                          "stacked" === D && "w-full",
                          "nested" === D && "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch",
                          "split" === _ &&
                            "default" === D &&
                            (0, s.A)(
                              "flex min-w-0 max-w-full items-center justify-end gap-2",
                              "sm:col-span-2",
                              "grow" === M && "w-full",
                            ),
                          "default" === _ &&
                            ("default" === D || "featured" === D || "recommendation" === D) &&
                            (0, s.A)(
                              "flex max-w-full items-center justify-end gap-2",
                              "grow" === M ? "min-w-0 flex-1" : "shrink-0",
                              "minimum" === M && "min-w-[min(--spacing(40),40cqw)] empty:min-w-0",
                            ),
                        ),
                        children: L ? h({ "aria-labelledby": O, "aria-describedby": R }) : h,
                      })
                    : null),
                (l[22] = h),
                (l[23] = M),
                (l[24] = R),
                (l[25] = L),
                (l[26] = O),
                (l[27] = _),
                (l[28] = D),
                (l[29] = n))
              : (n = l[29]),
            l[30] !== v || l[31] !== t || l[32] !== i || l[33] !== n
              ? ((d = (0, a.jsxs)("div", { id: v, className: t, children: [i, n] })),
                (l[30] = v),
                (l[31] = t),
                (l[32] = i),
                (l[33] = n),
                (l[34] = d))
              : (d = l[34]),
            d
          )
        },
        jj: function (e) {
          let t,
            i = (0, r.c)(2),
            { children: s } = e
          return (
            i[0] !== s
              ? ((t = (0, a.jsx)("span", { className: "text-xs text-secondary", children: s })), (i[0] = s), (i[1] = t))
              : (t = i[1]),
            t
          )
        },
        kG: function (e) {
          let t,
            i,
            o,
            d,
            u,
            m,
            p,
            g,
            f,
            h,
            x,
            y,
            b,
            v,
            w,
            j,
            A,
            k,
            S,
            N,
            _,
            M,
            C,
            z = (0, r.c)(54)
          z[0] !== e
            ? (({
                actions: t,
                actionsPlacement: x,
                ariaControls: i,
                ariaExpanded: o,
                ariaLabel: d,
                className: u,
                description: m,
                disabled: p,
                edgeRounding: y,
                icon: g,
                label: h,
                size: b,
                trailing: w,
                variant: v,
                ...f
              } = e),
              (z[0] = e),
              (z[1] = t),
              (z[2] = i),
              (z[3] = o),
              (z[4] = d),
              (z[5] = u),
              (z[6] = m),
              (z[7] = p),
              (z[8] = g),
              (z[9] = f),
              (z[10] = h),
              (z[11] = x),
              (z[12] = y),
              (z[13] = b),
              (z[14] = v),
              (z[15] = w))
            : ((t = z[1]),
              (i = z[2]),
              (o = z[3]),
              (d = z[4]),
              (u = z[5]),
              (m = z[6]),
              (p = z[7]),
              (g = z[8]),
              (f = z[9]),
              (h = z[10]),
              (x = z[11]),
              (y = z[12]),
              (b = z[13]),
              (v = z[14]),
              (w = z[15]))
          let D = void 0 === y ? "row" : y,
            E = void 0 === b ? "default" : b,
            W = void 0 === v ? "default" : v,
            I = "before-trailing" === (void 0 === x ? "end" : x) && !p && null != t && null != w,
            L = I ? "col-span-full row-start-1 grid grid-cols-subgrid" : "flex"
          z[16] !== u || z[17] !== I || z[18] !== E || z[19] !== L || z[20] !== W
            ? ((j = (0, s.A)(
                "min-w-0 flex-1 cursor-interaction items-center rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-default disabled:opacity-60",
                L,
                "empty" === W
                  ? "flex-col justify-center gap-4 px-6 py-10 text-center text-base text-tertiary select-none"
                  : (0, s.A)(
                      "px-4 text-start",
                      "nested" === W && "min-h-10 py-0.5",
                      "nested" !== W && ("large" === E ? "py-4" : "py-3"),
                      I && "gap-2",
                      !I && ("nested" === W ? "gap-3" : "gap-6"),
                    ),
                u,
              )),
              (z[16] = u),
              (z[17] = I),
              (z[18] = E),
              (z[19] = L),
              (z[20] = W),
              (z[21] = j))
            : (j = z[21])
          let O = j
          ;(z[22] !== m || z[23] !== g || z[24] !== h || z[25] !== W
            ? ((A =
                "empty" === W
                  ? (0, a.jsxs)(a.Fragment, { children: [g, h] })
                  : (0, a.jsx)(c, { label: h, description: m, icon: g, variant: W, verticalAlignment: "center" })),
              (z[22] = m),
              (z[23] = g),
              (z[24] = h),
              (z[25] = W),
              (z[26] = A))
            : (A = z[26]),
            z[27] !== w
              ? ((k =
                  null != w
                    ? (0, a.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: w })
                    : null),
                (z[27] = w),
                (z[28] = k))
              : (k = z[28]),
            z[29] !== A || z[30] !== k
              ? ((S = (0, a.jsxs)(a.Fragment, { children: [A, k] })), (z[29] = A), (z[30] = k), (z[31] = S))
              : (S = z[31]))
          let R = S,
            F = I ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            G = "row" === D && "first:rounded-t-2xl last:rounded-b-2xl",
            T = "recommendation" === W && "dark:bg-primary-ghost-hover",
            V = !p && "hover:bg-primary-ghost-hover focus-within:bg-primary-ghost-hover",
            Z =
              !p &&
              "recommendation" === W &&
              "dark:hover:bg-background-secondary-soft-alpha dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            z[32] !== F || z[33] !== G || z[34] !== T || z[35] !== V || z[36] !== Z
              ? ((N = (0, s.A)("group w-full items-center", F, G, T, V, Z)),
                (z[32] = F),
                (z[33] = G),
                (z[34] = T),
                (z[35] = V),
                (z[36] = Z),
                (z[37] = N))
              : (N = z[37]),
            z[38] !== i || z[39] !== o || z[40] !== d || z[41] !== R || z[42] !== p || z[43] !== f || z[44] !== O
              ? ((_ =
                  null != f.to
                    ? (0, a.jsx)(n.N_, {
                        ...f,
                        className: O,
                        "aria-controls": i,
                        "aria-expanded": o,
                        "aria-label": d,
                        "aria-disabled": p || void 0,
                        tabIndex: p ? -1 : void 0,
                        onClick: p ? l : f.onClick,
                        children: R,
                      })
                    : (0, a.jsx)("button", {
                        ...f,
                        className: O,
                        "aria-controls": i,
                        "aria-expanded": o,
                        "aria-label": d,
                        disabled: p,
                        type: "button",
                        children: R,
                      })),
                (z[38] = i),
                (z[39] = o),
                (z[40] = d),
                (z[41] = R),
                (z[42] = p),
                (z[43] = f),
                (z[44] = O),
                (z[45] = _))
              : (_ = z[45]),
            z[46] !== t || z[47] !== p || z[48] !== I
              ? ((M =
                  p || null == t
                    ? null
                    : (0, a.jsx)("div", {
                        className: (0, s.A)(
                          "flex shrink-0 items-center gap-1",
                          I ? "relative col-start-2 row-start-1" : "pe-4",
                        ),
                        children: t,
                      })),
                (z[46] = t),
                (z[47] = p),
                (z[48] = I),
                (z[49] = M))
              : (M = z[49]),
            z[50] !== N || z[51] !== _ || z[52] !== M
              ? ((C = (0, a.jsxs)("div", { className: N, children: [_, M] })),
                (z[50] = N),
                (z[51] = _),
                (z[52] = M),
                (z[53] = C))
              : (C = z[53]),
            C
          )
        },
        kf: function (e) {
          let t,
            i = (0, r.c)(2),
            { children: s } = e
          return (
            i[0] !== s
              ? ((t = (0, a.jsx)("span", { className: "text-tertiary", children: s })), (i[0] = s), (i[1] = t))
              : (t = i[1]),
            t
          )
        },
        lu: function (e) {
          let t,
            i,
            o,
            n,
            l,
            c,
            u,
            m,
            p,
            g,
            f = (0, r.c)(43),
            {
              id: h,
              ariaLabel: x,
              autoFocus: y,
              checked: b,
              description: v,
              highlightSelected: w,
              indicator: j,
              label: A,
              name: k,
              onChange: S,
              onClick: N,
              value: _,
              variant: M,
            } = e,
            C = void 0 === w || w,
            z = void 0 === j ? "radio" : j,
            D = void 0 === M ? "default" : M
          ;(f[0] !== b || f[1] !== v || f[2] !== C || f[3] !== z || f[4] !== D
            ? ((t = (0, s.A)(
                "relative flex has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-ring",
                "default" === D &&
                  (0, s.A)(
                    "gap-3 px-4 py-3 hover:bg-primary-ghost-hover",
                    null != v ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === D && b && C && "radio" === z && "bg-primary-soft-alpha",
                "form" === D && "items-center gap-4 px-4 py-4 hover:bg-primary-ghost-hover",
                "inline" === D && "items-center gap-2",
                "checkmark" === z && "after:ms-7",
              )),
              (f[0] = b),
              (f[1] = v),
              (f[2] = C),
              (f[3] = z),
              (f[4] = D),
              (f[5] = t))
            : (t = f[5]),
            f[6] !== x || f[7] !== h
              ? ((i = (0, a.jsx)("label", {
                  className: "absolute inset-0 cursor-interaction",
                  "aria-label": x,
                  htmlFor: h,
                })),
                (f[6] = x),
                (f[7] = h),
                (f[8] = i))
              : (i = f[8]),
            f[9] !== z || f[10] !== D
              ? ((o = (0, s.A)(
                  "z-10 cursor-interaction",
                  "checkmark" === z
                    ? "absolute inset-0 size-full opacity-0"
                    : (0, s.A)(
                        "relative shrink-0 appearance-auto accent-current",
                        "default" === D ? "mt-1 size-4" : "size-5",
                      ),
                )),
                (f[9] = z),
                (f[10] = D),
                (f[11] = o))
              : (o = f[11]))
          let E = null != v ? `${h}-description` : void 0
          ;(f[12] !== x ||
          f[13] !== y ||
          f[14] !== b ||
          f[15] !== h ||
          f[16] !== k ||
          f[17] !== S ||
          f[18] !== N ||
          f[19] !== o ||
          f[20] !== E ||
          f[21] !== _
            ? ((n = (0, a.jsx)("input", {
                id: h,
                className: o,
                "aria-label": x,
                "aria-describedby": E,
                autoFocus: y,
                type: "radio",
                name: k,
                value: _,
                checked: b,
                onChange: S,
                onClick: N,
              })),
              (f[12] = x),
              (f[13] = y),
              (f[14] = b),
              (f[15] = h),
              (f[16] = k),
              (f[17] = S),
              (f[18] = N),
              (f[19] = o),
              (f[20] = E),
              (f[21] = _),
              (f[22] = n))
            : (n = f[22]),
            f[23] !== b || f[24] !== z
              ? ((l = "checkmark" === z ? (0, a.jsx)(d.ALZ, { className: (0, s.A)(!b && "invisible") }) : null),
                (f[23] = b),
                (f[24] = z),
                (f[25] = l))
              : (l = f[25]))
          let W = "default" === D ? "text-sm font-medium" : "text-base"
          return (
            f[26] !== W ? ((c = (0, s.A)("text-default", W)), (f[26] = W), (f[27] = c)) : (c = f[27]),
            f[28] !== A || f[29] !== c
              ? ((u = (0, a.jsx)("span", { className: c, children: A })), (f[28] = A), (f[29] = c), (f[30] = u))
              : (u = f[30]),
            f[31] !== v || f[32] !== h
              ? ((m =
                  null != v
                    ? (0, a.jsx)("span", {
                        id: `${h}-description`,
                        className: "text-sm leading-5 text-secondary",
                        children: v,
                      })
                    : null),
                (f[31] = v),
                (f[32] = h),
                (f[33] = m))
              : (m = f[33]),
            f[34] !== u || f[35] !== m
              ? ((p = (0, a.jsxs)("span", {
                  className: "pointer-events-none relative flex min-w-0 flex-col gap-0.5",
                  children: [u, m],
                })),
                (f[34] = u),
                (f[35] = m),
                (f[36] = p))
              : (p = f[36]),
            f[37] !== p || f[38] !== t || f[39] !== i || f[40] !== n || f[41] !== l
              ? ((g = (0, a.jsxs)("div", { className: t, children: [i, n, l, p] })),
                (f[37] = p),
                (f[38] = t),
                (f[39] = i),
                (f[40] = n),
                (f[41] = l),
                (f[42] = g))
              : (g = f[42]),
            g
          )
        },
      },
    )
  },
  ZEx5(e, t, i) {
    i.d(t, { t: () => n })
    var a = i("ABep"),
      r = i("QosV"),
      s = i("on57"),
      o = i("bZug")
    function n(e) {
      let t,
        i,
        n,
        d = (0, r.c)(23),
        { children: l, className: c, contentOverflow: u, dividers: m, variant: p, decoration: g } = e,
        f = void 0 === p ? "default" : p,
        h = "flat" === f || "rows" === f ? o.s : o.r,
        x = void 0 === m || m ? h : "flex flex-col",
        y = "recommendation" === f && "rounded-[20px]",
        b = "recommendation" !== f && "flat" !== f && "rows" !== f && "outlinedLarge" !== f && "rounded-2xl",
        v = "outlinedLarge" === f && "rounded-[30px] border border-default bg-transparent",
        w = "daybreak" === g && "daybreak-VsXdEH",
        j = "visible" === (void 0 === u ? "hidden" : u) ? "overflow-visible" : "overflow-hidden",
        A =
          "default" === f &&
          "border border-default group-data-[density=compact]/settings:border-0 group-data-[density=compact]/settings:ring-1 group-data-[density=compact]/settings:ring-inset group-data-[density=compact]/settings:ring-border",
        k = "metered" === f && "ring-1 ring-inset ring-border-subtle",
        S = "secondary" === f && "bg-surface-secondary/92",
        N = "muted" === f && "bg-(--color-background-primary-soft-alpha)/50 dark:bg-primary-soft-alpha",
        _ =
          "form" === f &&
          "border border-subtle bg-surface dark:bg-surface-secondary/92 group-data-[density=form]/settings:border-default group-data-[density=form]/settings:bg-transparent dark:group-data-[density=form]/settings:bg-transparent group-data-[density=form]/settings:[&>*:not(:last-child)]:after:inset-x-5 group-data-[density=form]/settings:[&>*:not(:last-child)]:after:h-px group-data-[density=form]/settings:[&>*:not(:last-child)]:after:bg-border-subtle",
        M = "outlined" === f && "border border-subtle bg-transparent",
        C =
          "flat" === f &&
          "relative bg-transparent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border after:content-['']",
        z = "input" === f && "border border-primary-outline bg-primary-soft",
        D = "recommendation" === f && "border border-default bg-secondary-soft dark:bg-transparent"
      return (
        d[0] !== c ||
        d[1] !== A ||
        d[2] !== k ||
        d[3] !== S ||
        d[4] !== N ||
        d[5] !== _ ||
        d[6] !== M ||
        d[7] !== C ||
        d[8] !== z ||
        d[9] !== D ||
        d[10] !== x ||
        d[11] !== y ||
        d[12] !== b ||
        d[13] !== v ||
        d[14] !== w ||
        d[15] !== j
          ? ((t = (0, s.A)(x, y, b, v, w, j, A, k, S, N, _, M, C, z, D, c)),
            (d[0] = c),
            (d[1] = A),
            (d[2] = k),
            (d[3] = S),
            (d[4] = N),
            (d[5] = _),
            (d[6] = M),
            (d[7] = C),
            (d[8] = z),
            (d[9] = D),
            (d[10] = x),
            (d[11] = y),
            (d[12] = b),
            (d[13] = v),
            (d[14] = w),
            (d[15] = j),
            (d[16] = t))
          : (t = d[16]),
        d[17] !== f
          ? ((i =
              "default" === f || "metered" === f
                ? { backgroundColor: "var(--color-background-panel, var(--color-background-primary-soft-alpha))" }
                : void 0),
            (d[17] = f),
            (d[18] = i))
          : (i = d[18]),
        d[19] !== l || d[20] !== t || d[21] !== i
          ? ((n = (0, a.jsx)("div", { className: t, style: i, children: l })),
            (d[19] = l),
            (d[20] = t),
            (d[21] = i),
            (d[22] = n))
          : (n = d[22]),
        n
      )
    }
  },
}
//# sourceMappingURL=904323.c376207ffd.js.map
