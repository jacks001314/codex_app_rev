export const __rspack_esm_ids = [904323]
export const __webpack_modules__ = {
  yzhe(e, t, a) {
    var i = a("ABep"),
      r = a("QosV"),
      s = a("irkb"),
      n = a("T0Rc"),
      o = a("xSOA"),
      d = a("zTeN"),
      l = a("DBCl"),
      c = a("zd8w"),
      u = a("Wf1j"),
      m = a("oyxz"),
      g = a("ASxG"),
      p = a("Ghh3"),
      f = a("Sm6l"),
      h = a("djbx"),
      x = a("JNtf"),
      y = a("mUDD"),
      b = a("bVeK"),
      v = a("evwP"),
      w = a("RNul"),
      j = a("zLIa"),
      k = a("SGsN"),
      A = a("JAPD"),
      S = a("OWtl"),
      N = a("RxZZ"),
      _ = a("AWNZ"),
      M = a("ZEx5"),
      C = a("eShZ")
    let z = g.number().int().min(1).max(100).catch(50)
    a.d(
      t,
      {},
      {
        DictionaryDialog: function (e) {
          let t,
            a,
            g,
            D,
            E,
            W,
            I,
            L,
            R,
            O,
            V,
            F,
            T,
            Z,
            $,
            P,
            B,
            G,
            q,
            H,
            Q,
            U,
            K,
            Y,
            J,
            X = (0, r.c)(94),
            { accountId: ee, userId: et, onClose: ea } = e,
            ei = (0, d.gh)(S.u),
            er = (0, u.A)(),
            es = (0, s.jE)(),
            en = (0, N.iK)(l.Szl.dictationDictionary),
            [eo, ed] = (0, c.useState)(""),
            [el, ec] = (0, c.useState)(null),
            [eu, em] = (0, c.useState)(""),
            [eg, ep] = (0, c.useState)(null),
            ef = (0, c.useRef)(null)
          ;(X[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = () => () => ef.current?.abort()), (a = []), (X[0] = t), (X[1] = a))
            : ((t = X[0]), (a = X[1])),
            (0, c.useEffect)(t, a),
            X[2] !== ee || X[3] !== et
              ? ((g = ["dictation-custom-dictionary", ee, et]), (X[2] = ee), (X[3] = et), (X[4] = g))
              : (g = X[4]))
          let eh = g
          X[5] !== ee ? ((D = { "ChatGPT-Account-ID": ee, [l.zBc]: ee }), (X[5] = ee), (X[6] = D)) : (D = X[6])
          let ex = D
          ;(X[7] !== ex
            ? ((E = async (e) => {
                let { signal: t } = e,
                  a = await p.Request.safeGet("/dictation/custom_dictionary", {
                    additionalHeaders: ex,
                    signal: t,
                    expectedErrorStatuses: [404],
                  })
                return { ...a, max_entry_utf16_units: z.parse(a.max_entry_utf16_units) }
              }),
              (X[7] = ex),
              (X[8] = E))
            : (E = X[8]),
            X[9] !== eh || X[10] !== E
              ? ((W = { queryKey: eh, queryFn: E, staleTime: 5e3, refetchOnWindowFocus: "always", retry: !1 }),
                (X[9] = eh),
                (X[10] = E),
                (X[11] = W))
              : (W = X[11]))
          let { data: ey, isPending: eb, isError: ev, isFetching: ew, refetch: ej } = (0, n.I)(W)
          ;(X[12] !== ee || X[13] !== ex || X[14] !== es || X[15] !== ei || X[16] !== et
            ? ((I = async (e) => {
                "add" === e.type && ec(null)
                let t = new AbortController()
                ef.current = t
                let a = t.signal
                if ("delete" === e.type)
                  await p.Request.safeDelete("/dictation/custom_dictionary/words/{word_id}", {
                    parameters: { path: { word_id: e.id } },
                    additionalHeaders: ex,
                    signal: a,
                    expectedErrorStatuses: [404],
                  })
                else if ("add" === e.type)
                  await (0, A._)({
                    queryClient: es,
                    accountId: ee,
                    userId: et,
                    text: e.text,
                    signal: a,
                    surface: "settings",
                    onSuccess: () => ed(""),
                  })
                else {
                  for (let t of e.words) {
                    a.throwIfAborted()
                    try {
                      await p.Request.safePost("/dictation/custom_dictionary/words", {
                        requestBody: { text: t },
                        additionalHeaders: ex,
                        signal: a,
                        expectedErrorStatuses: [400, 404, 409, 422],
                      })
                    } catch (e) {
                      if (!(e instanceof C.fk && 409 === e.status && "account_changed" !== e.errorCode)) throw e
                    }
                  }
                  a.throwIfAborted()
                  let t = await (0, N.LA)(l.Szl.dictationDictionary)
                  ;(a.throwIfAborted(),
                    null != t &&
                      (await (0, N.gc)(
                        ei,
                        l.Szl.dictationDictionary,
                        t.filter((t) => !e.words.includes(t)),
                        { optimistic: !1 },
                      )),
                    ep(null))
                }
              }),
              (X[12] = ee),
              (X[13] = ex),
              (X[14] = es),
              (X[15] = ei),
              (X[16] = et),
              (X[17] = I))
            : (I = X[17]),
            X[18] !== es || X[19] !== eh
              ? ((L = async (e, t, a) => {
                  ;(await es.invalidateQueries({ queryKey: eh }, { cancelRefetch: "add" !== a.type || null != t }),
                    (ef.current = null))
                }),
                (X[18] = es),
                (X[19] = eh),
                (X[20] = L))
              : (L = X[20]),
            X[21] !== er || X[22] !== ei
              ? ((R = (e, t) => {
                  let a
                  if (!("AbortError" === e.name || ef.current?.signal.aborted)) {
                    if (
                      ((a =
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
                      return void ec(a)
                    ei.get(k.Id).danger(a, { errorAnalytics: { toastId: "settings.voice.dictionary.saveError" } })
                  }
                }),
                (X[21] = er),
                (X[22] = ei),
                (X[23] = R))
              : (R = X[23]),
            X[24] !== I || X[25] !== L || X[26] !== R
              ? ((O = { mutationFn: I, onSettled: L, onError: R }), (X[24] = I), (X[25] = L), (X[26] = R), (X[27] = O))
              : (O = X[27]))
          let { mutate: ek, isPending: eA, variables: eS } = (0, o.n)(O),
            eN = null != ey && ey.words.length >= ey.max_words,
            e_ = eb || ev || eA
          if (
            X[28] !== eN ||
            X[29] !== ey ||
            X[30] !== e_ ||
            X[31] !== el ||
            X[32] !== eg ||
            X[33] !== er ||
            X[34] !== ev ||
            X[35] !== ew ||
            X[36] !== eb ||
            X[37] !== eA ||
            X[38] !== en ||
            X[39] !== ek ||
            X[40] !== eo ||
            X[41] !== ea ||
            X[42] !== ej ||
            X[43] !== eu ||
            X[44] !== eS
          ) {
            let e,
              t,
              a,
              r = ey?.words.filter((e) => e.text.toLocaleLowerCase().includes(eu.trim().toLocaleLowerCase()))
            ;((F = x.lG),
              (q = !0),
              X[57] !== ea
                ? ((H = (e) => {
                    e || ea()
                  }),
                  (X[57] = ea),
                  (X[58] = H))
                : (H = X[58]),
              (Q = "wide"),
              X[59] === Symbol.for("react.memo_cache_sentinel")
                ? ((U = { "aria-describedby": void 0 }), (X[59] = U))
                : (U = X[59]),
              (V = y.R4),
              (T = "form"),
              (Z = "viewport"),
              ($ = "select-none"),
              X[60] !== eN || X[61] !== e_ || X[62] !== eg || X[63] !== ek || X[64] !== eo
                ? ((P = (e) => {
                    ;(e.preventDefault(),
                      !e_ &&
                        (null != eg
                          ? eg.length > 0 && ek({ type: "import", words: eg })
                          : "" === eo || eN || ek({ type: "add", text: eo })))
                  }),
                  (X[60] = eN),
                  (X[61] = e_),
                  (X[62] = eg),
                  (X[63] = ek),
                  (X[64] = eo),
                  (X[65] = P))
                : (P = X[65]),
              X[66] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(y.c7, {
                    title: (0, i.jsx)(x.L3, {
                      children: (0, i.jsx)(m.A, {
                        id: "speechSettings.content.customDictionary.page.title",
                        defaultMessage: "Voice dictionary",
                        description:
                          "Title for the voice dictionary settings where users manage words to recognize in their speech",
                      }),
                    }),
                  })),
                  (X[66] = e))
                : (e = X[66]),
              X[67] !== ey
                ? ((t =
                    null != ey
                      ? (0, i.jsx)("p", {
                          id: "dictionary-limits",
                          className: "text-sm text-secondary",
                          children: (0, i.jsx)(m.A, {
                            id: "settings.voice.dictionary.limits",
                            defaultMessage:
                              "Dictionary capacity: {maxWords, number}. Each word can contain up to {maxLength, plural, one {# character} other {# characters}} after text normalization. Some characters, including emoji, count as two or more",
                            description:
                              "Voice dictionary limits: maxWords is the maximum number of entries, maxLength is the maximum UTF-16 length after Unicode and whitespace normalization; emoji can consume multiple units",
                            values: { maxWords: ey.max_words, maxLength: ey.max_entry_utf16_units },
                          }),
                        })
                      : null),
                  (X[67] = ey),
                  (X[68] = t))
                : (t = X[68]),
              X[69] !== eN
                ? ((a = eN
                    ? (0, i.jsx)("p", {
                        role: "status",
                        className: "text-sm text-secondary",
                        children: (0, i.jsx)(m.A, {
                          id: "settings.voice.dictionary.atCapacity",
                          defaultMessage:
                            "Your dictionary is full. Your saved words are kept. Remove words to make room for new ones",
                          description:
                            "Voice dictionary notice when saved entry count reaches or exceeds the current server limit; existing entries are not removed automatically",
                        }),
                      })
                    : null),
                  (X[69] = eN),
                  (X[70] = a))
                : (a = X[70]),
              X[71] !== t || X[72] !== a
                ? ((B = (0, i.jsxs)(y.OO, { className: "gap-3", children: [e, t, a] })),
                  (X[71] = t),
                  (X[72] = a),
                  (X[73] = B))
                : (B = X[73]),
              (G =
                null != eg
                  ? (0, i.jsxs)(y.OO, {
                      className: "gap-3",
                      children: [
                        (0, i.jsx)("p", {
                          className: "text-sm text-secondary",
                          children: (0, i.jsx)(m.A, {
                            id: "settings.voice.dictionary.importDescription",
                            defaultMessage:
                              "Import these words from this device into your current account and workspace. Saved words will be available on your other devices",
                            description:
                              "Explains the destination and cross-device availability before importing local dictation vocabulary into the cloud dictionary",
                          }),
                        }),
                        (0, i.jsx)(M.t, {
                          children: [...new Set(en)].map((e) =>
                            (0, i.jsx)(
                              _.ic,
                              {
                                label: (0, i.jsx)("span", { className: "break-words select-text", children: e }),
                                control: (0, i.jsx)("div", {
                                  className: "relative",
                                  children: (0, i.jsx)(h.S, {
                                    "aria-label": e,
                                    checked: eg.includes(e),
                                    disabled: eA,
                                    onCheckedChange: (t) => ep(t ? [...eg, e] : eg.filter((t) => t !== e)),
                                  }),
                                }),
                              },
                              e,
                            ),
                          ),
                        }),
                      ],
                    })
                  : (0, i.jsxs)(y.OO, {
                      className: "gap-3",
                      children: [
                        ev
                          ? (0, i.jsxs)(v.W, {
                              children: [
                                (0, i.jsx)(m.A, {
                                  id: "speechSettings.content.customDictionary.loadError",
                                  defaultMessage: "We couldn’t load your saved words",
                                  description: "Error when Voice dictionary settings cannot load saved words",
                                }),
                                (0, i.jsx)(f.$, {
                                  type: "button",
                                  color: "secondary",
                                  loading: ew,
                                  onClick: () => void ej(),
                                  children: (0, i.jsx)(m.A, {
                                    id: "speechSettings.content.customDictionary.button.retry",
                                    defaultMessage: "Retry",
                                    description: "Button for retrying a failed custom dictionary load",
                                  }),
                                }),
                              ],
                            })
                          : null,
                        (0, i.jsx)("label", {
                          className: "text-sm font-medium",
                          htmlFor: "dictionary-new-word",
                          children: (0, i.jsx)(m.A, {
                            id: "speechSettings.content.customDictionary.addWord.heading",
                            defaultMessage: "Add word",
                            description: "Heading above the input for adding a speech recognition word or short phrase",
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, i.jsx)(j.pd, {
                              id: "dictionary-new-word",
                              autoFocus: !0,
                              name: "dictation-custom-dictionary-new-word",
                              value: eo,
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
                            (0, i.jsx)(f.$, {
                              type: "submit",
                              disabled: e_ || eN || "" === eo,
                              loading: eA && eS?.type === "add",
                              children: (0, i.jsx)(m.A, {
                                id: "speechSettings.content.customDictionary.button.add",
                                defaultMessage: "Add",
                                description: "Button for adding a word to the voice dictionary",
                              }),
                            }),
                          ],
                        }),
                        null != el
                          ? (0, i.jsx)("p", {
                              id: "dictionary-entry-error",
                              role: "alert",
                              className: "text-sm text-secondary",
                              children: el,
                            })
                          : null,
                        (0, i.jsx)(_.ic, {
                          label: (0, i.jsx)(m.A, {
                            id: "speechSettings.content.customDictionary.savedWords.heading",
                            defaultMessage: "Words",
                            description: "Heading above saved voice dictionary entries",
                          }),
                          control:
                            null == ey
                              ? null
                              : (0, i.jsx)(m.A, {
                                  id: "speechSettings.content.customDictionary.wordCount",
                                  defaultMessage: "{wordCount}/{maxWords}",
                                  description: "Saved voice dictionary entry count and maximum, for example 3/200",
                                  values: { wordCount: ey.words.length, maxWords: ey.max_words },
                                }),
                        }),
                        (0, i.jsx)(j.pd, {
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
                          ? (0, i.jsx)(v.W, {
                              children: (0, i.jsx)(m.A, {
                                id: "settings.voice.dictionary.loading",
                                defaultMessage: "Loading words…",
                                description: "Status while saved voice dictionary words load",
                              }),
                            })
                          : null,
                        eb || ev || null == r
                          ? null
                          : (0, i.jsx)(M.t, {
                              children:
                                0 === r.length
                                  ? (0, i.jsx)(v.W, {
                                      layout: "settings-row",
                                      children: eu.trim()
                                        ? (0, i.jsx)(m.A, {
                                            id: "speechSettings.content.customDictionary.emptySearch",
                                            defaultMessage: "No matching words",
                                            description:
                                              "Empty state when no saved voice dictionary words match the search",
                                          })
                                        : (0, i.jsx)(m.A, {
                                            id: "speechSettings.content.customDictionary.empty",
                                            defaultMessage: "No words yet",
                                            description:
                                              "Empty state before any voice dictionary words have been added",
                                          }),
                                    })
                                  : r.map((e) =>
                                      (0, i.jsx)(
                                        _.ic,
                                        {
                                          size: "compact",
                                          label: (0, i.jsx)("span", {
                                            className: "break-words select-text",
                                            children: e.text,
                                          }),
                                          control: (0, i.jsx)(f.$, {
                                            type: "button",
                                            color: "ghost",
                                            size: "icon",
                                            disabled: eA,
                                            "aria-label": er.formatMessage(
                                              {
                                                id: "speechSettings.content.customDictionary.button.remove.ariaLabel",
                                                defaultMessage: "Remove {word}",
                                                description:
                                                  "Accessible label for deleting a saved voice dictionary word",
                                              },
                                              { word: e.text },
                                            ),
                                            onClick: () => ek({ type: "delete", id: e.id }),
                                            children:
                                              eA && eS?.type === "delete" && eS.id === e.id
                                                ? (0, i.jsx)(w.y, { className: "icon-xs" })
                                                : (0, i.jsx)(b.cSG, {}),
                                          }),
                                        },
                                        e.id,
                                      ),
                                    ),
                            }),
                        null != en && en.length > 0
                          ? (0, i.jsx)(f.$, {
                              type: "button",
                              color: "secondary",
                              disabled: e_,
                              onClick: () => ep([...new Set(en)]),
                              children: (0, i.jsx)(m.A, {
                                id: "settings.voice.dictionary.reviewImport",
                                defaultMessage: "Import words from this device…",
                                description:
                                  "Button to preview existing local dictionary words before importing them into the current account and workspace",
                              }),
                            })
                          : null,
                      ],
                    })),
              (X[28] = eN),
              (X[29] = ey),
              (X[30] = e_),
              (X[31] = el),
              (X[32] = eg),
              (X[33] = er),
              (X[34] = ev),
              (X[35] = ew),
              (X[36] = eb),
              (X[37] = eA),
              (X[38] = en),
              (X[39] = ek),
              (X[40] = eo),
              (X[41] = ea),
              (X[42] = ej),
              (X[43] = eu),
              (X[44] = eS),
              (X[45] = V),
              (X[46] = F),
              (X[47] = T),
              (X[48] = Z),
              (X[49] = $),
              (X[50] = P),
              (X[51] = B),
              (X[52] = G),
              (X[53] = q),
              (X[54] = H),
              (X[55] = Q),
              (X[56] = U))
          } else
            ((V = X[45]),
              (F = X[46]),
              (T = X[47]),
              (Z = X[48]),
              ($ = X[49]),
              (P = X[50]),
              (B = X[51]),
              (G = X[52]),
              (q = X[53]),
              (H = X[54]),
              (Q = X[55]),
              (U = X[56]))
          return (
            X[74] !== e_ || X[75] !== eg || X[76] !== eA
              ? ((K =
                  null != eg
                    ? (0, i.jsx)(y.OO, {
                        className: "gap-3",
                        children: (0, i.jsxs)(y.Es, {
                          children: [
                            (0, i.jsx)(f.$, {
                              type: "button",
                              color: "secondary",
                              disabled: eA,
                              onClick: () => ep(null),
                              children: (0, i.jsx)(m.A, {
                                id: "settings.voice.dictionary.cancelImport",
                                defaultMessage: "Cancel",
                                description: "Cancel the local vocabulary import preview without changing saved words",
                              }),
                            }),
                            (0, i.jsx)(f.$, {
                              type: "submit",
                              loading: eA,
                              disabled: e_ || 0 === eg.length,
                              children: (0, i.jsx)(m.A, {
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
                (X[74] = e_),
                (X[75] = eg),
                (X[76] = eA),
                (X[77] = K))
              : (K = X[77]),
            X[78] !== V ||
            X[79] !== T ||
            X[80] !== Z ||
            X[81] !== $ ||
            X[82] !== P ||
            X[83] !== B ||
            X[84] !== G ||
            X[85] !== K
              ? ((Y = (0, i.jsxs)(V, { as: T, size: Z, className: $, onSubmit: P, children: [B, G, K] })),
                (X[78] = V),
                (X[79] = T),
                (X[80] = Z),
                (X[81] = $),
                (X[82] = P),
                (X[83] = B),
                (X[84] = G),
                (X[85] = K),
                (X[86] = Y))
              : (Y = X[86]),
            X[87] !== F || X[88] !== q || X[89] !== H || X[90] !== Q || X[91] !== U || X[92] !== Y
              ? ((J = (0, i.jsx)(F, { open: q, onOpenChange: H, size: Q, contentProps: U, children: Y })),
                (X[87] = F),
                (X[88] = q),
                (X[89] = H),
                (X[90] = Q),
                (X[91] = U),
                (X[92] = Y),
                (X[93] = J))
              : (J = X[93]),
            J
          )
        },
      },
    )
  },
  bZug(e, t, a) {
    a.d(
      t,
      {},
      {
        r: "flex flex-col [&>*:not(:last-child)]:relative [&>*:not(:last-child)]:after:pointer-events-none [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:inset-x-4 [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-px [&>*:not(:last-child)]:after:bg-border [&>*:not(:last-child)]:after:content-['']",
        s: "flex flex-col [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border",
      },
    )
  },
  AWNZ(e, t, a) {
    var i = a("ABep"),
      r = a("QosV"),
      s = a("on57"),
      n = a("zd8w"),
      o = a("HZfM"),
      d = a("bVeK")
    function l(e) {
      return e.preventDefault()
    }
    function c(e) {
      let t,
        a,
        n,
        o,
        d,
        l,
        c,
        u = (0, r.c)(24),
        {
          label: m,
          labelId: g,
          labelSizing: p,
          labelWeight: f,
          description: h,
          descriptionId: x,
          icon: y,
          variant: b,
          verticalAlignment: v,
        } = e,
        w = "start" === v ? "items-start" : "items-center",
        j = "grow" === (void 0 === p ? "grow" : p) && "flex-1"
      ;(u[0] !== w || u[1] !== j
        ? ((t = (0, s.A)("flex min-w-0 gap-3", w, j)), (u[0] = w), (u[1] = j), (u[2] = t))
        : (t = u[2]),
        u[3] !== y
          ? ((a = null != y ? (0, i.jsx)("span", { className: "flex shrink-0", children: y }) : null),
            (u[3] = y),
            (u[4] = a))
          : (a = u[4]))
      let k = "featured" === b && "text-base",
        A = "recommendation" === b && "text-[13px] leading-[18.571429px]",
        S = "featured" !== b && "recommendation" !== b && "text-sm",
        N = "nested" !== b && "medium" === (void 0 === f ? "medium" : f) && "font-medium"
      return (
        u[5] !== N || u[6] !== k || u[7] !== A || u[8] !== S
          ? ((n = (0, s.A)(
              "min-w-0 break-words text-default group-data-[density=compact]/settings:leading-4.5",
              k,
              A,
              S,
              N,
            )),
            (u[5] = N),
            (u[6] = k),
            (u[7] = A),
            (u[8] = S),
            (u[9] = n))
          : (n = u[9]),
        u[10] !== m || u[11] !== g || u[12] !== n
          ? ((o = (0, i.jsx)("div", { id: g, className: n, children: m })),
            (u[10] = m),
            (u[11] = g),
            (u[12] = n),
            (u[13] = o))
          : (o = u[13]),
        u[14] !== h || u[15] !== x
          ? ((d = h
              ? (0, i.jsx)("div", {
                  id: x,
                  className: "min-w-0 text-xs leading-4 text-wrap break-words text-secondary",
                  children: h,
                })
              : null),
            (u[14] = h),
            (u[15] = x),
            (u[16] = d))
          : (d = u[16]),
        u[17] !== o || u[18] !== d
          ? ((l = (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [o, d] })),
            (u[17] = o),
            (u[18] = d),
            (u[19] = l))
          : (l = u[19]),
        u[20] !== l || u[21] !== t || u[22] !== a
          ? ((c = (0, i.jsxs)("div", { className: t, children: [a, l] })),
            (u[20] = l),
            (u[21] = t),
            (u[22] = a),
            (u[23] = c))
          : (c = u[23]),
        c
      )
    }
    a.d(
      t,
      {},
      {
        $5: function (e) {
          let t,
            a,
            n,
            o,
            d,
            l,
            c = (0, r.c)(18),
            { children: u, compactLabelInset: m, label: g, valueAlignment: p, variant: f } = e,
            h = void 0 === m || m,
            x = void 0 === p ? "start" : p,
            y = void 0 === f ? "default" : f,
            b =
              "compact" === y
                ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-default electron:opacity-75"
                : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          return (
            c[0] !== b ? ((t = (0, s.A)("grid items-center", b)), (c[0] = b), (c[1] = t)) : (t = c[1]),
            c[2] !== h || c[3] !== y
              ? ((a = (0, s.A)(
                  "min-w-0",
                  "compact" === y
                    ? (0, s.A)("flex items-center pe-2 text-start", h && "ps-1")
                    : "text-sm text-secondary",
                )),
                (c[2] = h),
                (c[3] = y),
                (c[4] = a))
              : (a = c[4]),
            c[5] !== g || c[6] !== a
              ? ((n = (0, i.jsx)("div", { className: a, children: g })), (c[5] = g), (c[6] = a), (c[7] = n))
              : (n = c[7]),
            c[8] !== x || c[9] !== y
              ? ((o = (0, s.A)(
                  "min-w-0",
                  "compact" === y
                    ? "flex items-center justify-end justify-self-stretch overflow-hidden"
                    : (0, s.A)("break-words whitespace-normal text-sm text-default", "end" === x && "text-end"),
                )),
                (c[8] = x),
                (c[9] = y),
                (c[10] = o))
              : (o = c[10]),
            c[11] !== u || c[12] !== o
              ? ((d = (0, i.jsx)("div", { className: o, children: u })), (c[11] = u), (c[12] = o), (c[13] = d))
              : (d = c[13]),
            c[14] !== t || c[15] !== n || c[16] !== d
              ? ((l = (0, i.jsxs)("div", { className: t, children: [n, d] })),
                (c[14] = t),
                (c[15] = n),
                (c[16] = d),
                (c[17] = l))
              : (l = c[17]),
            l
          )
        },
        ic: function (e) {
          let t,
            a,
            o,
            d,
            l = (0, r.c)(35),
            {
              label: u,
              labelSizing: m,
              labelWeight: g,
              layout: p,
              description: f,
              control: h,
              controlSizing: x,
              icon: y,
              className: b,
              id: v,
              inset: w,
              size: j,
              variant: k,
              verticalAlignment: A,
            } = e,
            S = void 0 === m ? "grow" : m,
            N = void 0 === g ? "medium" : g,
            _ = void 0 === p ? "default" : p,
            M = void 0 === x ? "minimum" : x,
            C = void 0 === w || w,
            z = void 0 === j ? "default" : j,
            D = void 0 === k ? "default" : k,
            E = void 0 === A ? "center" : A,
            W = (0, n.useId)(),
            I = null != u || null != f || null != y,
            L = "function" == typeof h,
            R = L && null != u ? `${W}-label` : void 0,
            O = L && f ? `${W}-description` : void 0,
            V = C && ("split" !== _ || "default" !== D) && "px-4",
            F = C && "nested" === D && "group-data-[density=form]/settings:px-5",
            T =
              "stacked" === D &&
              "flex flex-col items-stretch gap-1 py-3 group-data-[density=compact]/settings:gap-0.5 group-data-[density=compact]/settings:py-2.5 group-data-[density=compact]/settings:first:pt-3.5 group-data-[density=compact]/settings:last:pb-4",
            Z =
              "nested" === D &&
              "flex min-h-10 justify-between gap-3 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch group-data-[density=form]/settings:min-h-12 sm:group-data-[density=form]/settings:py-0",
            $ = "stacked" !== D && ("start" === E ? "items-start" : "items-center"),
            P = "split" === _ && "default" === D && "grid grid-cols-1 gap-2 px-0 py-4 sm:grid-cols-3"
          return (
            l[0] !== b ||
            l[1] !== _ ||
            l[2] !== z ||
            l[3] !== F ||
            l[4] !== T ||
            l[5] !== Z ||
            l[6] !== $ ||
            l[7] !== P ||
            l[8] !== V ||
            l[9] !== D
              ? ((t = (0, s.A)(
                  "@container/settings-row",
                  V,
                  F,
                  T,
                  Z,
                  $,
                  P,
                  "default" === _ &&
                    ("default" === D || "featured" === D || "recommendation" === D) &&
                    (0, s.A)(
                      "flex justify-between",
                      "featured" === D && (0, s.A)("gap-6", "compact" === z ? "min-h-11 py-2" : "py-4"),
                      "featured" !== D && ("compact" === z ? "gap-4 py-2" : "gap-6 py-3"),
                    ),
                  "recommendation" === D && "dark:bg-secondary-ghost-hover",
                  b,
                )),
                (l[0] = b),
                (l[1] = _),
                (l[2] = z),
                (l[3] = F),
                (l[4] = T),
                (l[5] = Z),
                (l[6] = $),
                (l[7] = P),
                (l[8] = V),
                (l[9] = D),
                (l[10] = t))
              : (t = l[10]),
            l[11] !== f ||
            l[12] !== O ||
            l[13] !== I ||
            l[14] !== y ||
            l[15] !== u ||
            l[16] !== R ||
            l[17] !== S ||
            l[18] !== N ||
            l[19] !== D ||
            l[20] !== E
              ? ((a = I
                  ? (0, i.jsx)(c, {
                      label: u,
                      labelId: R,
                      labelSizing: S,
                      labelWeight: N,
                      description: f,
                      descriptionId: O,
                      icon: y,
                      variant: D,
                      verticalAlignment: E,
                    })
                  : null),
                (l[11] = f),
                (l[12] = O),
                (l[13] = I),
                (l[14] = y),
                (l[15] = u),
                (l[16] = R),
                (l[17] = S),
                (l[18] = N),
                (l[19] = D),
                (l[20] = E),
                (l[21] = a))
              : (a = l[21]),
            l[22] !== h || l[23] !== M || l[24] !== O || l[25] !== L || l[26] !== R || l[27] !== _ || l[28] !== D
              ? ((o =
                  null != h && !1 !== h
                    ? (0, i.jsx)("div", {
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
                        children: L ? h({ "aria-labelledby": R, "aria-describedby": O }) : h,
                      })
                    : null),
                (l[22] = h),
                (l[23] = M),
                (l[24] = O),
                (l[25] = L),
                (l[26] = R),
                (l[27] = _),
                (l[28] = D),
                (l[29] = o))
              : (o = l[29]),
            l[30] !== v || l[31] !== t || l[32] !== a || l[33] !== o
              ? ((d = (0, i.jsxs)("div", { id: v, className: t, children: [a, o] })),
                (l[30] = v),
                (l[31] = t),
                (l[32] = a),
                (l[33] = o),
                (l[34] = d))
              : (d = l[34]),
            d
          )
        },
        jj: function (e) {
          let t,
            a = (0, r.c)(2),
            { children: s } = e
          return (
            a[0] !== s
              ? ((t = (0, i.jsx)("span", { className: "text-xs text-secondary", children: s })), (a[0] = s), (a[1] = t))
              : (t = a[1]),
            t
          )
        },
        kG: function (e) {
          let t,
            a,
            n,
            d,
            u,
            m,
            g,
            p,
            f,
            h,
            x,
            y,
            b,
            v,
            w,
            j,
            k,
            A,
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
                ariaControls: a,
                ariaExpanded: n,
                ariaLabel: d,
                className: u,
                description: m,
                disabled: g,
                edgeRounding: y,
                icon: p,
                label: h,
                size: b,
                trailing: w,
                variant: v,
                ...f
              } = e),
              (z[0] = e),
              (z[1] = t),
              (z[2] = a),
              (z[3] = n),
              (z[4] = d),
              (z[5] = u),
              (z[6] = m),
              (z[7] = g),
              (z[8] = p),
              (z[9] = f),
              (z[10] = h),
              (z[11] = x),
              (z[12] = y),
              (z[13] = b),
              (z[14] = v),
              (z[15] = w))
            : ((t = z[1]),
              (a = z[2]),
              (n = z[3]),
              (d = z[4]),
              (u = z[5]),
              (m = z[6]),
              (g = z[7]),
              (p = z[8]),
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
            I = "before-trailing" === (void 0 === x ? "end" : x) && !g && null != t && null != w,
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
          let R = j
          ;(z[22] !== m || z[23] !== p || z[24] !== h || z[25] !== W
            ? ((k =
                "empty" === W
                  ? (0, i.jsxs)(i.Fragment, { children: [p, h] })
                  : (0, i.jsx)(c, { label: h, description: m, icon: p, variant: W, verticalAlignment: "center" })),
              (z[22] = m),
              (z[23] = p),
              (z[24] = h),
              (z[25] = W),
              (z[26] = k))
            : (k = z[26]),
            z[27] !== w
              ? ((A =
                  null != w
                    ? (0, i.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: w })
                    : null),
                (z[27] = w),
                (z[28] = A))
              : (A = z[28]),
            z[29] !== k || z[30] !== A
              ? ((S = (0, i.jsxs)(i.Fragment, { children: [k, A] })), (z[29] = k), (z[30] = A), (z[31] = S))
              : (S = z[31]))
          let O = S,
            V = I ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            F = "row" === D && "first:rounded-t-2xl last:rounded-b-2xl",
            T = "recommendation" === W && "dark:bg-secondary-ghost-hover",
            Z = !g && "hover:bg-secondary-ghost-hover focus-within:bg-secondary-ghost-hover",
            $ =
              !g &&
              "recommendation" === W &&
              "dark:hover:bg-background-secondary-soft-alpha dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            z[32] !== V || z[33] !== F || z[34] !== T || z[35] !== Z || z[36] !== $
              ? ((N = (0, s.A)("group w-full items-center", V, F, T, Z, $)),
                (z[32] = V),
                (z[33] = F),
                (z[34] = T),
                (z[35] = Z),
                (z[36] = $),
                (z[37] = N))
              : (N = z[37]),
            z[38] !== a || z[39] !== n || z[40] !== d || z[41] !== O || z[42] !== g || z[43] !== f || z[44] !== R
              ? ((_ =
                  null != f.to
                    ? (0, i.jsx)(o.N_, {
                        ...f,
                        className: R,
                        "aria-controls": a,
                        "aria-expanded": n,
                        "aria-label": d,
                        "aria-disabled": g || void 0,
                        tabIndex: g ? -1 : void 0,
                        onClick: g ? l : f.onClick,
                        children: O,
                      })
                    : (0, i.jsx)("button", {
                        ...f,
                        className: R,
                        "aria-controls": a,
                        "aria-expanded": n,
                        "aria-label": d,
                        disabled: g,
                        type: "button",
                        children: O,
                      })),
                (z[38] = a),
                (z[39] = n),
                (z[40] = d),
                (z[41] = O),
                (z[42] = g),
                (z[43] = f),
                (z[44] = R),
                (z[45] = _))
              : (_ = z[45]),
            z[46] !== t || z[47] !== g || z[48] !== I
              ? ((M =
                  g || null == t
                    ? null
                    : (0, i.jsx)("div", {
                        className: (0, s.A)(
                          "flex shrink-0 items-center gap-1",
                          I ? "relative col-start-2 row-start-1" : "pe-4",
                        ),
                        children: t,
                      })),
                (z[46] = t),
                (z[47] = g),
                (z[48] = I),
                (z[49] = M))
              : (M = z[49]),
            z[50] !== N || z[51] !== _ || z[52] !== M
              ? ((C = (0, i.jsxs)("div", { className: N, children: [_, M] })),
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
            a = (0, r.c)(2),
            { children: s } = e
          return (
            a[0] !== s
              ? ((t = (0, i.jsx)("span", { className: "text-tertiary", children: s })), (a[0] = s), (a[1] = t))
              : (t = a[1]),
            t
          )
        },
        lu: function (e) {
          let t,
            a,
            n,
            o,
            l,
            c,
            u,
            m,
            g,
            p,
            f = (0, r.c)(43),
            {
              id: h,
              ariaLabel: x,
              autoFocus: y,
              checked: b,
              description: v,
              highlightSelected: w,
              indicator: j,
              label: k,
              name: A,
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
                    "gap-3 px-4 py-3 hover:bg-secondary-ghost-hover",
                    null != v ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === D && b && C && "radio" === z && "bg-background-neutral-soft-alpha",
                "form" === D && "items-center gap-4 px-4 py-4 hover:bg-secondary-ghost-hover",
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
              ? ((a = (0, i.jsx)("label", {
                  className: "absolute inset-0 cursor-interaction",
                  "aria-label": x,
                  htmlFor: h,
                })),
                (f[6] = x),
                (f[7] = h),
                (f[8] = a))
              : (a = f[8]),
            f[9] !== z || f[10] !== D
              ? ((n = (0, s.A)(
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
                (f[11] = n))
              : (n = f[11]))
          let E = null != v ? `${h}-description` : void 0
          ;(f[12] !== x ||
          f[13] !== y ||
          f[14] !== b ||
          f[15] !== h ||
          f[16] !== A ||
          f[17] !== S ||
          f[18] !== N ||
          f[19] !== n ||
          f[20] !== E ||
          f[21] !== _
            ? ((o = (0, i.jsx)("input", {
                id: h,
                className: n,
                "aria-label": x,
                "aria-describedby": E,
                autoFocus: y,
                type: "radio",
                name: A,
                value: _,
                checked: b,
                onChange: S,
                onClick: N,
              })),
              (f[12] = x),
              (f[13] = y),
              (f[14] = b),
              (f[15] = h),
              (f[16] = A),
              (f[17] = S),
              (f[18] = N),
              (f[19] = n),
              (f[20] = E),
              (f[21] = _),
              (f[22] = o))
            : (o = f[22]),
            f[23] !== b || f[24] !== z
              ? ((l = "checkmark" === z ? (0, i.jsx)(d.ALZ, { className: (0, s.A)(!b && "invisible") }) : null),
                (f[23] = b),
                (f[24] = z),
                (f[25] = l))
              : (l = f[25]))
          let W = "default" === D ? "text-sm font-medium" : "text-base"
          return (
            f[26] !== W ? ((c = (0, s.A)("text-default", W)), (f[26] = W), (f[27] = c)) : (c = f[27]),
            f[28] !== k || f[29] !== c
              ? ((u = (0, i.jsx)("span", { className: c, children: k })), (f[28] = k), (f[29] = c), (f[30] = u))
              : (u = f[30]),
            f[31] !== v || f[32] !== h
              ? ((m =
                  null != v
                    ? (0, i.jsx)("span", {
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
              ? ((g = (0, i.jsxs)("span", {
                  className: "pointer-events-none relative flex min-w-0 flex-col gap-0.5",
                  children: [u, m],
                })),
                (f[34] = u),
                (f[35] = m),
                (f[36] = g))
              : (g = f[36]),
            f[37] !== g || f[38] !== t || f[39] !== a || f[40] !== o || f[41] !== l
              ? ((p = (0, i.jsxs)("div", { className: t, children: [a, o, l, g] })),
                (f[37] = g),
                (f[38] = t),
                (f[39] = a),
                (f[40] = o),
                (f[41] = l),
                (f[42] = p))
              : (p = f[42]),
            p
          )
        },
      },
    )
  },
  ZEx5(e, t, a) {
    a.d(t, { t: () => o })
    var i = a("ABep"),
      r = a("QosV"),
      s = a("on57"),
      n = a("bZug")
    function o(e) {
      let t,
        a,
        o,
        d = (0, r.c)(23),
        { children: l, className: c, contentOverflow: u, dividers: m, variant: g, decoration: p } = e,
        f = void 0 === g ? "default" : g,
        h = "flat" === f || "rows" === f ? n.s : n.r,
        x = void 0 === m || m ? h : "flex flex-col",
        y = "recommendation" === f && "rounded-[20px]",
        b = "recommendation" !== f && "flat" !== f && "rows" !== f && "outlinedLarge" !== f && "rounded-2xl",
        v = "outlinedLarge" === f && "rounded-[30px] border border-default bg-transparent",
        w = "daybreak" === p && "daybreak-VsXdEH",
        j = "visible" === (void 0 === u ? "hidden" : u) ? "overflow-visible" : "overflow-hidden",
        k =
          "default" === f &&
          "border border-default group-data-[density=compact]/settings:border-0 group-data-[density=compact]/settings:ring-1 group-data-[density=compact]/settings:ring-inset group-data-[density=compact]/settings:ring-border",
        A = "metered" === f && "ring-1 ring-inset ring-border-subtle",
        S = "secondary" === f && "bg-surface-secondary/92",
        N = "muted" === f && "bg-(--color-background-neutral-soft-alpha)/50 dark:bg-background-neutral-soft-alpha",
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
        d[1] !== k ||
        d[2] !== A ||
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
          ? ((t = (0, s.A)(x, y, b, v, w, j, k, A, S, N, _, M, C, z, D, c)),
            (d[0] = c),
            (d[1] = k),
            (d[2] = A),
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
          ? ((a =
              "default" === f || "metered" === f
                ? { backgroundColor: "var(--color-background-panel, var(--color-background-neutral-soft-alpha))" }
                : void 0),
            (d[17] = f),
            (d[18] = a))
          : (a = d[18]),
        d[19] !== l || d[20] !== t || d[21] !== a
          ? ((o = (0, i.jsx)("div", { className: t, style: a, children: l })),
            (d[19] = l),
            (d[20] = t),
            (d[21] = a),
            (d[22] = o))
          : (o = d[22]),
        o
      )
    }
  },
}
//# sourceMappingURL=904323.912e5ace55.js.map
