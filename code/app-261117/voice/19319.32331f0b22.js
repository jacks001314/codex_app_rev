export const __rspack_esm_ids = [19319]
export const __webpack_modules__ = {
  ZirI(e, t, a) {
    a.d(t, { DictionaryDialog: () => I })
    var s = a("ABep"),
      n = a("QosV"),
      i = a("irkb"),
      r = a("T0Rc"),
      o = a("xSOA"),
      d = a("qmMi"),
      l = a("DBCl"),
      c = a("zd8w"),
      u = a("Wf1j"),
      g = a("oyxz"),
      m = a("Sm6l"),
      p = a("Sezd"),
      f = a("JNtf"),
      x = a("mUDD"),
      h = a("bVeK"),
      y = a("evwP"),
      b = a("RNul"),
      v = a("zLIa"),
      w = a("SGsN"),
      j = a("JAPD"),
      A = a("OWtl"),
      k = a("RxZZ"),
      _ = a("AWNZ"),
      S = a("ZEx5"),
      N = a("eShZ"),
      M = a("S2r0"),
      C = a("ASxG"),
      D = a("Kwur")
    let z = C.aig().int().min(1).max(100).catch(50)
    function E(e) {
      return { "ChatGPT-Account-ID": e, [l.zBc]: e }
    }
    function I(e) {
      let t,
        a,
        C,
        I,
        W,
        L,
        F,
        R,
        O,
        Z,
        $,
        q,
        G,
        P,
        T,
        V,
        B,
        K,
        H,
        Q,
        Y,
        J,
        U = (0, n.c)(86),
        { accountId: X, userId: ee, onClose: et } = e,
        ea = (0, d.gh)(A.u),
        es = (0, u.A)(),
        en = (0, i.jE)(),
        ei = (0, k.iK)(l.Szl.dictationDictionary),
        [er, eo] = (0, c.useState)(""),
        [ed, el] = (0, c.useState)(null),
        [ec, eu] = (0, c.useState)(""),
        [eg, em] = (0, c.useState)(null),
        ep = (0, c.useRef)(null)
      ;(U[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => ep.current?.abort()), (a = []), (U[0] = t), (U[1] = a))
        : ((t = U[0]), (a = U[1])),
        (0, c.useEffect)(t, a),
        U[2] !== X || U[3] !== ee
          ? ((C = (function ({ accountId: e, userId: t }) {
              return (0, M.j)({
                queryKey: ["dictation-custom-dictionary", e, t],
                queryFn: async ({ signal: t }) => {
                  let a = await D.Request.safeGet("/dictation/custom_dictionary", {
                    additionalHeaders: E(e),
                    signal: t,
                    expectedErrorStatuses: [404],
                  })
                  return { ...a, max_entry_utf16_units: z.parse(a.max_entry_utf16_units) }
                },
                staleTime: 5e3,
                refetchOnWindowFocus: "always",
                retry: !1,
              })
            })({ accountId: X, userId: ee })),
            (U[2] = X),
            (U[3] = ee),
            (U[4] = C))
          : (C = U[4]))
      let ef = C,
        ex = ef.queryKey,
        { data: eh, isPending: ey, isError: eb, isFetching: ev, refetch: ew } = (0, r.I)(ef)
      ;(U[5] !== X || U[6] !== en || U[7] !== ea || U[8] !== ee
        ? ((I = async (e) => {
            "add" === e.type && el(null)
            let t = new AbortController()
            ep.current = t
            let a = t.signal
            "delete" === e.type
              ? await (async function (e, t, a) {
                  await D.Request.safeDelete("/dictation/custom_dictionary/words/{word_id}", {
                    parameters: { path: { word_id: t } },
                    additionalHeaders: E(e),
                    signal: a,
                    expectedErrorStatuses: [404],
                  })
                })(X, e.id, a)
              : "add" === e.type
                ? await (0, j._)({
                    queryClient: en,
                    accountId: X,
                    userId: ee,
                    text: e.text,
                    signal: a,
                    surface: "settings",
                    onSuccess: () => eo(""),
                  })
                : (await (async function (e, t, a, s) {
                    for (let e of a) {
                      s.throwIfAborted()
                      try {
                        await D.Request.safePost("/dictation/custom_dictionary/words", {
                          requestBody: { text: e },
                          additionalHeaders: E(t),
                          signal: s,
                          expectedErrorStatuses: [400, 404, 409, 422],
                        })
                      } catch (e) {
                        if (!(e instanceof N.FetchError) || 409 !== e.status || "account_changed" === e.errorCode)
                          throw e
                      }
                    }
                    s.throwIfAborted()
                    let n = await (0, k.LA)(l.Szl.dictationDictionary)
                    ;(s.throwIfAborted(),
                      null != n &&
                        (await (0, k.gc)(
                          e,
                          l.Szl.dictationDictionary,
                          n.filter((e) => !a.includes(e)),
                          { optimistic: !1 },
                        )))
                  })(ea, X, e.words, a),
                  em(null))
          }),
          (U[5] = X),
          (U[6] = en),
          (U[7] = ea),
          (U[8] = ee),
          (U[9] = I))
        : (I = U[9]),
        U[10] !== en || U[11] !== ex
          ? ((W = async (e, t, a) => {
              ;(await en.invalidateQueries({ queryKey: ex }, { cancelRefetch: "add" !== a.type || null != t }),
                (ep.current = null))
            }),
            (U[10] = en),
            (U[11] = ex),
            (U[12] = W))
          : (W = U[12]),
        U[13] !== es || U[14] !== ea
          ? ((L = (e, t) => {
              let a
              if (!("AbortError" === e.name || ep.current?.signal.aborted)) {
                if (
                  ((a =
                    e instanceof N.FetchError && "account_changed" !== e.errorCode && 409 === e.status
                      ? es.formatMessage({
                          id: "settings.voice.dictionary.duplicateError",
                          defaultMessage: "This word is already in your dictionary",
                        })
                      : e instanceof N.FetchError && 422 === e.status
                        ? es.formatMessage({
                            id: "settings.voice.dictionary.capacityError",
                            defaultMessage:
                              "Your dictionary is full. Remove a saved word before adding more. Words from this device are kept for retry",
                          })
                        : e instanceof N.FetchError && 400 === e.status && "dictionary_entry_too_long" === e.errorCode
                          ? es.formatMessage({
                              id: "settings.voice.dictionary.serverTooLong",
                              defaultMessage:
                                "This word is too long after text normalization. Shorten it to the current limit shown above",
                            })
                          : e instanceof N.FetchError && 400 === e.status
                            ? es.formatMessage({
                                id: "settings.voice.dictionary.invalidEntryError",
                                defaultMessage:
                                  "Check the word\u2019s length and remove any line breaks or attachments.",
                              })
                            : es.formatMessage({
                                id: "settings.voice.dictionary.saveError",
                                defaultMessage: "Couldn\u2019t save dictionary changes. Check the words and try again",
                              })),
                  "add" === t.type)
                )
                  return void el(a)
                ea.get(w.Id).danger(a, { errorAnalytics: { toastId: "settings.voice.dictionary.saveError" } })
              }
            }),
            (U[13] = es),
            (U[14] = ea),
            (U[15] = L))
          : (L = U[15]),
        U[16] !== I || U[17] !== W || U[18] !== L
          ? ((F = { mutationFn: I, onSettled: W, onError: L }), (U[16] = I), (U[17] = W), (U[18] = L), (U[19] = F))
          : (F = U[19]))
      let { mutate: ej, isPending: eA, variables: ek } = (0, o.n)(F),
        e_ = null != eh && eh.words.length >= eh.max_words,
        eS = ey || eb || eA
      if (
        U[20] !== e_ ||
        U[21] !== eh ||
        U[22] !== eS ||
        U[23] !== ed ||
        U[24] !== eg ||
        U[25] !== es ||
        U[26] !== eb ||
        U[27] !== ev ||
        U[28] !== ey ||
        U[29] !== eA ||
        U[30] !== ei ||
        U[31] !== ej ||
        U[32] !== er ||
        U[33] !== et ||
        U[34] !== ew ||
        U[35] !== ec ||
        U[36] !== ek
      ) {
        let e,
          t,
          a,
          n = eh?.words.filter((e) => e.text.toLocaleLowerCase().includes(ec.trim().toLocaleLowerCase()))
        ;((O = f.lG),
          (P = !0),
          U[49] !== et
            ? ((T = (e) => {
                e || et()
              }),
              (U[49] = et),
              (U[50] = T))
            : (T = U[50]),
          (V = "wide"),
          U[51] === Symbol.for("react.memo_cache_sentinel")
            ? ((B = { "aria-describedby": void 0 }), (U[51] = B))
            : (B = U[51]),
          (R = x.R4),
          (K = "form"),
          (H = "viewport"),
          (Z = "select-none"),
          U[52] !== e_ || U[53] !== eS || U[54] !== eg || U[55] !== ej || U[56] !== er
            ? (($ = (e) => {
                ;(e.preventDefault(),
                  !eS &&
                    (null != eg
                      ? eg.length > 0 && ej({ type: "import", words: eg })
                      : "" === er || e_ || ej({ type: "add", text: er })))
              }),
              (U[52] = e_),
              (U[53] = eS),
              (U[54] = eg),
              (U[55] = ej),
              (U[56] = er),
              (U[57] = $))
            : ($ = U[57]),
          U[58] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(x.c7, {
                title: (0, s.jsx)(f.L3, {
                  children: (0, s.jsx)(g.A, {
                    id: "speechSettings.content.customDictionary.page.title",
                    defaultMessage: "Voice dictionary",
                  }),
                }),
              })),
              (U[58] = e))
            : (e = U[58]),
          U[59] !== eh
            ? ((t =
                null != eh
                  ? (0, s.jsx)("p", {
                      id: "dictionary-limits",
                      className: "text-sm text-secondary",
                      children: (0, s.jsx)(g.A, {
                        id: "settings.voice.dictionary.limits",
                        defaultMessage:
                          "Dictionary capacity: {maxWords, number}. Each word can contain up to {maxLength, plural, one {# character} other {# characters}} after text normalization. Some characters, including emoji, count as two or more",
                        values: { maxWords: eh.max_words, maxLength: eh.max_entry_utf16_units },
                      }),
                    })
                  : null),
              (U[59] = eh),
              (U[60] = t))
            : (t = U[60]),
          U[61] !== e_
            ? ((a = e_
                ? (0, s.jsx)("p", {
                    role: "status",
                    className: "text-sm text-secondary",
                    children: (0, s.jsx)(g.A, {
                      id: "settings.voice.dictionary.atCapacity",
                      defaultMessage:
                        "Your dictionary is full. Your saved words are kept. Remove words to make room for new ones",
                    }),
                  })
                : null),
              (U[61] = e_),
              (U[62] = a))
            : (a = U[62]),
          U[63] !== t || U[64] !== a
            ? ((q = (0, s.jsxs)(x.OO, { className: "gap-3", children: [e, t, a] })),
              (U[63] = t),
              (U[64] = a),
              (U[65] = q))
            : (q = U[65]),
          (G =
            null != eg
              ? (0, s.jsxs)(x.OO, {
                  className: "gap-3",
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-sm text-secondary",
                      children: (0, s.jsx)(g.A, {
                        id: "settings.voice.dictionary.importDescription",
                        defaultMessage:
                          "Import these words from this device into your current account and workspace. Saved words will be available on your other devices",
                      }),
                    }),
                    (0, s.jsx)(S.t, {
                      children: [...new Set(ei)].map((e) =>
                        (0, s.jsx)(
                          _.ic,
                          {
                            label: (0, s.jsx)("span", { className: "break-words select-text", children: e }),
                            control: (0, s.jsx)("div", {
                              className: "relative",
                              children: (0, s.jsx)(p.S, {
                                "aria-label": e,
                                checked: eg.includes(e),
                                disabled: eA,
                                onCheckedChange: (t) => em(t ? [...eg, e] : eg.filter((t) => t !== e)),
                              }),
                            }),
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                })
              : (0, s.jsxs)(x.OO, {
                  className: "gap-3",
                  children: [
                    eb
                      ? (0, s.jsxs)(y.W, {
                          children: [
                            (0, s.jsx)(g.A, {
                              id: "speechSettings.content.customDictionary.loadError",
                              defaultMessage: "We couldn\u2019t load your saved words",
                            }),
                            (0, s.jsx)(m.$, {
                              type: "button",
                              color: "secondary",
                              loading: ev,
                              onClick: () => void ew(),
                              children: (0, s.jsx)(g.A, {
                                id: "speechSettings.content.customDictionary.button.retry",
                                defaultMessage: "Retry",
                              }),
                            }),
                          ],
                        })
                      : null,
                    (0, s.jsx)("label", {
                      className: "text-sm font-medium",
                      htmlFor: "dictionary-new-word",
                      children: (0, s.jsx)(g.A, {
                        id: "speechSettings.content.customDictionary.addWord.heading",
                        defaultMessage: "Add word",
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, s.jsx)(v.pd, {
                          id: "dictionary-new-word",
                          autoFocus: !0,
                          name: "dictation-custom-dictionary-new-word",
                          value: er,
                          "aria-describedby": "dictionary-limits dictionary-entry-error",
                          "aria-invalid": null != ed,
                          disabled: eS || e_,
                          onChange: (e) => {
                            ;(eo(e.target.value), el(null))
                          },
                          placeholder: es.formatMessage({
                            id: "speechSettings.content.customDictionary.input.add.placeholder",
                            defaultMessage: "Word ChatGPT should recognize when spoken",
                          }),
                        }),
                        (0, s.jsx)(m.$, {
                          type: "submit",
                          disabled: eS || e_ || "" === er,
                          loading: eA && ek?.type === "add",
                          children: (0, s.jsx)(g.A, {
                            id: "speechSettings.content.customDictionary.button.add",
                            defaultMessage: "Add",
                          }),
                        }),
                      ],
                    }),
                    null != ed
                      ? (0, s.jsx)("p", {
                          id: "dictionary-entry-error",
                          role: "alert",
                          className: "text-sm text-secondary",
                          children: ed,
                        })
                      : null,
                    (0, s.jsx)(_.ic, {
                      label: (0, s.jsx)(g.A, {
                        id: "speechSettings.content.customDictionary.savedWords.heading",
                        defaultMessage: "Words",
                      }),
                      control:
                        null == eh
                          ? null
                          : (0, s.jsx)(g.A, {
                              id: "speechSettings.content.customDictionary.wordCount",
                              defaultMessage: "{wordCount}/{maxWords}",
                              values: { wordCount: eh.words.length, maxWords: eh.max_words },
                            }),
                    }),
                    (0, s.jsx)(v.pd, {
                      "aria-label": es.formatMessage({
                        id: "speechSettings.content.customDictionary.input.search.ariaLabel",
                        defaultMessage: "Search words",
                      }),
                      name: "dictation-custom-dictionary-search",
                      placeholder: es.formatMessage({
                        id: "speechSettings.content.customDictionary.input.search.placeholder",
                        defaultMessage: "Search",
                      }),
                      value: ec,
                      onChange: (e) => eu(e.target.value),
                      disabled: ey || eb,
                    }),
                    ey
                      ? (0, s.jsx)(y.W, {
                          children: (0, s.jsx)(g.A, {
                            id: "settings.voice.dictionary.loading",
                            defaultMessage: "Loading words\u2026",
                          }),
                        })
                      : null,
                    ey || eb || null == n
                      ? null
                      : (0, s.jsx)(S.t, {
                          children:
                            0 === n.length
                              ? (0, s.jsx)(y.W, {
                                  layout: "settings-row",
                                  children: ec.trim()
                                    ? (0, s.jsx)(g.A, {
                                        id: "speechSettings.content.customDictionary.emptySearch",
                                        defaultMessage: "No matching words",
                                      })
                                    : (0, s.jsx)(g.A, {
                                        id: "speechSettings.content.customDictionary.empty",
                                        defaultMessage: "No words yet",
                                      }),
                                })
                              : n.map((e) =>
                                  (0, s.jsx)(
                                    _.ic,
                                    {
                                      size: "compact",
                                      label: (0, s.jsx)("span", {
                                        className: "break-words select-text",
                                        children: e.text,
                                      }),
                                      control: (0, s.jsx)(m.$, {
                                        type: "button",
                                        color: "ghost",
                                        size: "icon",
                                        disabled: eA,
                                        "aria-label": es.formatMessage(
                                          {
                                            id: "speechSettings.content.customDictionary.button.remove.ariaLabel",
                                            defaultMessage: "Remove {word}",
                                          },
                                          { word: e.text },
                                        ),
                                        onClick: () => ej({ type: "delete", id: e.id }),
                                        children:
                                          eA && ek?.type === "delete" && ek.id === e.id
                                            ? (0, s.jsx)(b.y, { className: "icon-xs" })
                                            : (0, s.jsx)(h.cSG, {}),
                                      }),
                                    },
                                    e.id,
                                  ),
                                ),
                        }),
                    null != ei && ei.length > 0
                      ? (0, s.jsx)(m.$, {
                          type: "button",
                          color: "secondary",
                          disabled: eS,
                          onClick: () => em([...new Set(ei)]),
                          children: (0, s.jsx)(g.A, {
                            id: "settings.voice.dictionary.reviewImport",
                            defaultMessage: "Import words from this device\u2026",
                          }),
                        })
                      : null,
                  ],
                })),
          (U[20] = e_),
          (U[21] = eh),
          (U[22] = eS),
          (U[23] = ed),
          (U[24] = eg),
          (U[25] = es),
          (U[26] = eb),
          (U[27] = ev),
          (U[28] = ey),
          (U[29] = eA),
          (U[30] = ei),
          (U[31] = ej),
          (U[32] = er),
          (U[33] = et),
          (U[34] = ew),
          (U[35] = ec),
          (U[36] = ek),
          (U[37] = R),
          (U[38] = O),
          (U[39] = Z),
          (U[40] = $),
          (U[41] = q),
          (U[42] = G),
          (U[43] = P),
          (U[44] = T),
          (U[45] = V),
          (U[46] = B),
          (U[47] = K),
          (U[48] = H))
      } else
        ((R = U[37]),
          (O = U[38]),
          (Z = U[39]),
          ($ = U[40]),
          (q = U[41]),
          (G = U[42]),
          (P = U[43]),
          (T = U[44]),
          (V = U[45]),
          (B = U[46]),
          (K = U[47]),
          (H = U[48]))
      return (
        U[66] !== eS || U[67] !== eg || U[68] !== eA
          ? ((Q =
              null != eg
                ? (0, s.jsx)(x.OO, {
                    className: "gap-3",
                    children: (0, s.jsxs)(x.Es, {
                      children: [
                        (0, s.jsx)(m.$, {
                          type: "button",
                          color: "secondary",
                          disabled: eA,
                          onClick: () => em(null),
                          children: (0, s.jsx)(g.A, {
                            id: "settings.voice.dictionary.cancelImport",
                            defaultMessage: "Cancel",
                          }),
                        }),
                        (0, s.jsx)(m.$, {
                          type: "submit",
                          loading: eA,
                          disabled: eS || 0 === eg.length,
                          children: (0, s.jsx)(g.A, {
                            id: "settings.voice.dictionary.confirmImport",
                            defaultMessage: "Import words",
                          }),
                        }),
                      ],
                    }),
                  })
                : null),
            (U[66] = eS),
            (U[67] = eg),
            (U[68] = eA),
            (U[69] = Q))
          : (Q = U[69]),
        U[70] !== R ||
        U[71] !== Z ||
        U[72] !== $ ||
        U[73] !== q ||
        U[74] !== G ||
        U[75] !== Q ||
        U[76] !== K ||
        U[77] !== H
          ? ((Y = (0, s.jsxs)(R, { as: K, size: H, className: Z, onSubmit: $, children: [q, G, Q] })),
            (U[70] = R),
            (U[71] = Z),
            (U[72] = $),
            (U[73] = q),
            (U[74] = G),
            (U[75] = Q),
            (U[76] = K),
            (U[77] = H),
            (U[78] = Y))
          : (Y = U[78]),
        U[79] !== O || U[80] !== P || U[81] !== T || U[82] !== V || U[83] !== B || U[84] !== Y
          ? ((J = (0, s.jsx)(O, { open: P, onOpenChange: T, size: V, contentProps: B, children: Y })),
            (U[79] = O),
            (U[80] = P),
            (U[81] = T),
            (U[82] = V),
            (U[83] = B),
            (U[84] = Y),
            (U[85] = J))
          : (J = U[85]),
        J
      )
    }
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
    var s = a("ABep"),
      n = a("QosV"),
      i = a("on57"),
      r = a("zd8w"),
      o = a("Ywss"),
      d = a("bVeK")
    function l(e) {
      return e.preventDefault()
    }
    function c(e) {
      let t,
        a,
        r,
        o,
        d,
        l,
        c,
        u,
        g = (0, n.c)(29),
        {
          label: m,
          labelId: p,
          labelSizing: f,
          description: x,
          descriptionId: h,
          icon: y,
          labelWeight: b,
          variant: v,
          verticalAlignment: w,
        } = e,
        j = "start" === w ? "items-start" : "items-center",
        A = "grow" === (void 0 === f ? "grow" : f) && "flex-1"
      ;(g[0] !== j || g[1] !== A
        ? ((t = (0, i.A)("flex min-w-0 gap-3", j, A)), (g[0] = j), (g[1] = A), (g[2] = t))
        : (t = g[2]),
        g[3] !== y
          ? ((a = null != y ? (0, s.jsx)("span", { className: "flex shrink-0", children: y }) : null),
            (g[3] = y),
            (g[4] = a))
          : (a = g[4]))
      let k = x && "recommendation" !== v && "[[data-settings-panel]_&]:gap-1 [[data-settings-panel]_&]:py-0.5",
        _ = "featured" === v && "text-base [[data-settings-standard-rows]_&]:text-sm",
        S = "recommendation" === v && "text-[13px] leading-[18.571429px]",
        N = "featured" !== v && "recommendation" !== v && "text-sm"
      g[5] !== k || g[6] !== _ || g[7] !== S || g[8] !== N
        ? ((r = (0, i.A)(
            "flex min-w-0 flex-1 flex-col gap-0.5 group-data-[density=compact]/settings:leading-4.5",
            k,
            _,
            S,
            N,
          )),
          (g[5] = k),
          (g[6] = _),
          (g[7] = S),
          (g[8] = N),
          (g[9] = r))
        : (r = g[9])
      let M = ("medium" === b || (null == b && "nested" !== v)) && "font-medium",
        C = null == b && "nested" === v && x && "[[data-settings-panel]_&]:font-medium"
      return (
        g[10] !== M || g[11] !== C
          ? ((o = (0, i.A)("min-w-0 break-words text-default", M, C)), (g[10] = M), (g[11] = C), (g[12] = o))
          : (o = g[12]),
        g[13] !== m || g[14] !== p || g[15] !== o
          ? ((d = (0, s.jsx)("div", { id: p, className: o, children: m })),
            (g[13] = m),
            (g[14] = p),
            (g[15] = o),
            (g[16] = d))
          : (d = g[16]),
        g[17] !== x || g[18] !== h || g[19] !== v
          ? ((l = x
              ? (0, s.jsx)("div", {
                  id: h,
                  className: (0, i.A)(
                    "min-w-0 text-xs leading-4 text-wrap break-words text-secondary",
                    "recommendation" !== v &&
                      "[[data-settings-panel]_&]:[font-size:inherit] [[data-settings-panel]_&]:[line-height:inherit] [[data-settings-panel]_&]:font-normal",
                  ),
                  children: x,
                })
              : null),
            (g[17] = x),
            (g[18] = h),
            (g[19] = v),
            (g[20] = l))
          : (l = g[20]),
        g[21] !== r || g[22] !== d || g[23] !== l
          ? ((c = (0, s.jsxs)("div", { className: r, children: [d, l] })),
            (g[21] = r),
            (g[22] = d),
            (g[23] = l),
            (g[24] = c))
          : (c = g[24]),
        g[25] !== c || g[26] !== t || g[27] !== a
          ? ((u = (0, s.jsxs)("div", { className: t, children: [a, c] })),
            (g[25] = c),
            (g[26] = t),
            (g[27] = a),
            (g[28] = u))
          : (u = g[28]),
        u
      )
    }
    a.d(
      t,
      {},
      {
        $5: function (e) {
          let t,
            a,
            r,
            o,
            d,
            l,
            c = (0, n.c)(18),
            { children: u, compactLabelInset: g, label: m, valueAlignment: p, variant: f } = e,
            x = void 0 === g || g,
            h = void 0 === p ? "start" : p,
            y = void 0 === f ? "default" : f,
            b =
              "compact" === y
                ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-default electron:opacity-75"
                : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          return (
            c[0] !== b ? ((t = (0, i.A)("grid items-center", b)), (c[0] = b), (c[1] = t)) : (t = c[1]),
            c[2] !== x || c[3] !== y
              ? ((a = (0, i.A)(
                  "min-w-0",
                  "compact" === y
                    ? (0, i.A)("flex items-center pe-2 text-start", x && "ps-1")
                    : "text-sm text-secondary",
                )),
                (c[2] = x),
                (c[3] = y),
                (c[4] = a))
              : (a = c[4]),
            c[5] !== m || c[6] !== a
              ? ((r = (0, s.jsx)("div", { className: a, children: m })), (c[5] = m), (c[6] = a), (c[7] = r))
              : (r = c[7]),
            c[8] !== h || c[9] !== y
              ? ((o = (0, i.A)(
                  "min-w-0",
                  "compact" === y
                    ? "flex items-center justify-end justify-self-stretch overflow-hidden"
                    : (0, i.A)("break-words whitespace-normal text-sm text-default", "end" === h && "text-end"),
                )),
                (c[8] = h),
                (c[9] = y),
                (c[10] = o))
              : (o = c[10]),
            c[11] !== u || c[12] !== o
              ? ((d = (0, s.jsx)("div", { className: o, children: u })), (c[11] = u), (c[12] = o), (c[13] = d))
              : (d = c[13]),
            c[14] !== t || c[15] !== r || c[16] !== d
              ? ((l = (0, s.jsxs)("div", { className: t, children: [r, d] })),
                (c[14] = t),
                (c[15] = r),
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
            l = (0, n.c)(37),
            {
              label: u,
              labelSizing: g,
              labelWeight: m,
              layout: p,
              description: f,
              control: x,
              controlSizing: h,
              icon: y,
              className: b,
              id: v,
              inset: w,
              size: j,
              searchAnchor: A,
              variant: k,
              verticalAlignment: _,
            } = e,
            S = void 0 === g ? "grow" : g,
            N = void 0 === p ? "default" : p,
            M = void 0 === h ? "minimum" : h,
            C = void 0 === w || w,
            D = void 0 === j ? "default" : j,
            z = void 0 === k ? "default" : k,
            E = void 0 === _ ? "center" : _,
            I = (0, r.useId)(),
            W = null != u || null != f || null != y,
            L = "function" == typeof x,
            F = L && null != u ? `${I}-label` : void 0,
            R = L && f ? `${I}-description` : void 0,
            O = A ?? v,
            Z = null == A ? void 0 : -1,
            $ = C && ("split" !== N || "default" !== z) && "px-[var(--settings-row-padding-inline,--spacing(4))]",
            q =
              C &&
              "nested" === z &&
              "group-data-[density=form]/settings:px-[var(--settings-row-padding-inline,--spacing(5))]",
            G =
              "stacked" === z &&
              "flex flex-col items-stretch gap-1 py-3 group-data-[density=compact]/settings:gap-0.5 group-data-[density=compact]/settings:py-2.5 group-data-[density=compact]/settings:first:pt-3.5 group-data-[density=compact]/settings:last:pb-4",
            P =
              "nested" === z &&
              "flex min-h-10 justify-between gap-3 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch group-data-[density=form]/settings:min-h-12 sm:group-data-[density=form]/settings:py-0",
            T = "stacked" !== z && ("start" === E ? "items-start" : "items-center"),
            V = "split" === N && "default" === z && "grid grid-cols-1 gap-2 px-0 py-4 sm:grid-cols-3"
          return (
            l[0] !== b ||
            l[1] !== N ||
            l[2] !== D ||
            l[3] !== $ ||
            l[4] !== q ||
            l[5] !== G ||
            l[6] !== P ||
            l[7] !== T ||
            l[8] !== V ||
            l[9] !== z
              ? ((t = (0, i.A)(
                  "@container/settings-row",
                  $,
                  q,
                  G,
                  P,
                  T,
                  V,
                  "default" === N &&
                    ("default" === z || "featured" === z || "recommendation" === z) &&
                    (0, i.A)(
                      "flex justify-between",
                      "featured" === z &&
                        (0, i.A)(
                          "gap-6",
                          "compact" === D
                            ? "min-h-11 py-2 [[data-settings-standard-rows]_&]:min-h-0 [[data-settings-standard-rows]_&]:gap-4"
                            : "py-4 [[data-settings-standard-rows]_&]:py-3",
                        ),
                      "featured" !== z && ("compact" === D ? "gap-4 py-2" : "gap-6 py-3"),
                    ),
                  "recommendation" === z && "dark:bg-secondary-ghost-hover",
                  b,
                )),
                (l[0] = b),
                (l[1] = N),
                (l[2] = D),
                (l[3] = $),
                (l[4] = q),
                (l[5] = G),
                (l[6] = P),
                (l[7] = T),
                (l[8] = V),
                (l[9] = z),
                (l[10] = t))
              : (t = l[10]),
            l[11] !== f ||
            l[12] !== R ||
            l[13] !== W ||
            l[14] !== y ||
            l[15] !== u ||
            l[16] !== F ||
            l[17] !== S ||
            l[18] !== m ||
            l[19] !== z ||
            l[20] !== E
              ? ((a = W
                  ? (0, s.jsx)(c, {
                      label: u,
                      labelId: F,
                      labelSizing: S,
                      labelWeight: m,
                      description: f,
                      descriptionId: R,
                      icon: y,
                      variant: z,
                      verticalAlignment: E,
                    })
                  : null),
                (l[11] = f),
                (l[12] = R),
                (l[13] = W),
                (l[14] = y),
                (l[15] = u),
                (l[16] = F),
                (l[17] = S),
                (l[18] = m),
                (l[19] = z),
                (l[20] = E),
                (l[21] = a))
              : (a = l[21]),
            l[22] !== x || l[23] !== M || l[24] !== R || l[25] !== L || l[26] !== F || l[27] !== N || l[28] !== z
              ? ((o =
                  null != x && !1 !== x
                    ? (0, s.jsx)("div", {
                        className: (0, i.A)(
                          "stacked" === z && "w-full",
                          "nested" === z && "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch",
                          "split" === N &&
                            "default" === z &&
                            (0, i.A)(
                              "flex min-w-0 max-w-full items-center justify-end gap-2",
                              "sm:col-span-2",
                              "grow" === M && "w-full",
                            ),
                          "default" === N &&
                            ("default" === z || "featured" === z || "recommendation" === z) &&
                            (0, i.A)(
                              "flex max-w-full items-center justify-end gap-2",
                              "grow" === M ? "min-w-0 flex-1" : "shrink-0",
                              "minimum" === M && "min-w-[min(--spacing(40),40cqw)] empty:min-w-0",
                            ),
                        ),
                        children: L ? x({ "aria-labelledby": F, "aria-describedby": R }) : x,
                      })
                    : null),
                (l[22] = x),
                (l[23] = M),
                (l[24] = R),
                (l[25] = L),
                (l[26] = F),
                (l[27] = N),
                (l[28] = z),
                (l[29] = o))
              : (o = l[29]),
            l[30] !== A || l[31] !== t || l[32] !== a || l[33] !== o || l[34] !== O || l[35] !== Z
              ? ((d = (0, s.jsxs)("div", {
                  id: O,
                  "data-settings-search-entry": A,
                  tabIndex: Z,
                  className: t,
                  children: [a, o],
                })),
                (l[30] = A),
                (l[31] = t),
                (l[32] = a),
                (l[33] = o),
                (l[34] = O),
                (l[35] = Z),
                (l[36] = d))
              : (d = l[36]),
            d
          )
        },
        jj: function (e) {
          let t,
            a = (0, n.c)(2),
            { children: i } = e
          return (
            a[0] !== i
              ? ((t = (0, s.jsx)("span", { className: "text-xs text-secondary", children: i })), (a[0] = i), (a[1] = t))
              : (t = a[1]),
            t
          )
        },
        kG: function (e) {
          let t,
            a,
            r,
            d,
            u,
            g,
            m,
            p,
            f,
            x,
            h,
            y,
            b,
            v,
            w,
            j,
            A,
            k,
            _,
            S,
            N,
            M,
            C,
            D,
            z,
            E,
            I = (0, n.c)(64)
          I[0] !== e
            ? (({
                actions: t,
                actionsPlacement: y,
                ariaControls: a,
                ariaExpanded: r,
                ariaLabel: d,
                className: u,
                description: g,
                disabled: m,
                edgeRounding: b,
                highlightOnFocus: v,
                icon: p,
                label: x,
                searchAnchor: h,
                size: w,
                trailing: k,
                variant: j,
                wrapActions: A,
                ...f
              } = e),
              (I[0] = e),
              (I[1] = t),
              (I[2] = a),
              (I[3] = r),
              (I[4] = d),
              (I[5] = u),
              (I[6] = g),
              (I[7] = m),
              (I[8] = p),
              (I[9] = f),
              (I[10] = x),
              (I[11] = h),
              (I[12] = y),
              (I[13] = b),
              (I[14] = v),
              (I[15] = w),
              (I[16] = j),
              (I[17] = A),
              (I[18] = k))
            : ((t = I[1]),
              (a = I[2]),
              (r = I[3]),
              (d = I[4]),
              (u = I[5]),
              (g = I[6]),
              (m = I[7]),
              (p = I[8]),
              (f = I[9]),
              (x = I[10]),
              (h = I[11]),
              (y = I[12]),
              (b = I[13]),
              (v = I[14]),
              (w = I[15]),
              (j = I[16]),
              (A = I[17]),
              (k = I[18]))
          let W = void 0 === b ? "row" : b,
            L = void 0 === v || v,
            F = void 0 === w ? "default" : w,
            R = void 0 === j ? "default" : j,
            O = "before-trailing" === (void 0 === y ? "end" : y) && !m && null != t && null != k,
            Z = void 0 !== A && A && !m && null != t && !O,
            $ = Z && "basis-64",
            q = O ? "col-span-full row-start-1 grid grid-cols-subgrid" : "flex"
          I[19] !== u || I[20] !== O || I[21] !== F || I[22] !== $ || I[23] !== q || I[24] !== R
            ? ((_ = (0, i.A)(
                "min-w-0 flex-1 cursor-interaction items-center rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-default disabled:opacity-60",
                $,
                q,
                "empty" === R
                  ? "flex-col justify-center gap-4 px-6 py-10 text-center text-base text-tertiary select-none"
                  : (0, i.A)(
                      "px-[var(--settings-row-padding-inline,--spacing(4))] text-start",
                      "nested" === R && "min-h-10 py-0.5",
                      "nested" !== R && ("large" === F ? "py-4" : "py-3"),
                      O && "gap-2",
                      !O && ("nested" === R ? "gap-3" : "gap-6"),
                    ),
                u,
              )),
              (I[19] = u),
              (I[20] = O),
              (I[21] = F),
              (I[22] = $),
              (I[23] = q),
              (I[24] = R),
              (I[25] = _))
            : (_ = I[25])
          let G = _
          ;(I[26] !== g || I[27] !== p || I[28] !== x || I[29] !== R
            ? ((S =
                "empty" === R
                  ? (0, s.jsxs)(s.Fragment, { children: [p, x] })
                  : (0, s.jsx)(c, { label: x, description: g, icon: p, variant: R, verticalAlignment: "center" })),
              (I[26] = g),
              (I[27] = p),
              (I[28] = x),
              (I[29] = R),
              (I[30] = S))
            : (S = I[30]),
            I[31] !== k
              ? ((N =
                  null != k
                    ? (0, s.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: k })
                    : null),
                (I[31] = k),
                (I[32] = N))
              : (N = I[32]),
            I[33] !== S || I[34] !== N
              ? ((M = (0, s.jsxs)(s.Fragment, { children: [S, N] })), (I[33] = S), (I[34] = N), (I[35] = M))
              : (M = I[35]))
          let P = M,
            T = null == h ? void 0 : -1,
            V = O ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            B = Z && "flex-wrap",
            K = "row" === W && "first:rounded-t-2xl last:rounded-b-2xl",
            H = "recommendation" === R && "dark:bg-secondary-ghost-hover",
            Q = !m && "hover:bg-secondary-ghost-hover",
            Y = !m && L && "focus-within:bg-secondary-ghost-hover",
            J = !m && "recommendation" === R && "dark:hover:bg-background-secondary-soft-alpha",
            U = !m && L && "recommendation" === R && "dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            I[36] !== V ||
            I[37] !== B ||
            I[38] !== K ||
            I[39] !== H ||
            I[40] !== Q ||
            I[41] !== Y ||
            I[42] !== J ||
            I[43] !== U
              ? ((C = (0, i.A)("group w-full items-center", V, B, K, H, Q, Y, J, U)),
                (I[36] = V),
                (I[37] = B),
                (I[38] = K),
                (I[39] = H),
                (I[40] = Q),
                (I[41] = Y),
                (I[42] = J),
                (I[43] = U),
                (I[44] = C))
              : (C = I[44]),
            I[45] !== a || I[46] !== r || I[47] !== d || I[48] !== P || I[49] !== m || I[50] !== f || I[51] !== G
              ? ((D =
                  null != f.to
                    ? (0, s.jsx)(o.N_, {
                        ...f,
                        className: G,
                        "aria-controls": a,
                        "aria-expanded": r,
                        "aria-label": d,
                        "aria-disabled": m || void 0,
                        tabIndex: m ? -1 : void 0,
                        onClick: m ? l : f.onClick,
                        children: P,
                      })
                    : (0, s.jsx)("button", {
                        ...f,
                        className: G,
                        "aria-controls": a,
                        "aria-expanded": r,
                        "aria-label": d,
                        disabled: m,
                        type: "button",
                        children: P,
                      })),
                (I[45] = a),
                (I[46] = r),
                (I[47] = d),
                (I[48] = P),
                (I[49] = m),
                (I[50] = f),
                (I[51] = G),
                (I[52] = D))
              : (D = I[52]),
            I[53] !== t || I[54] !== Z || I[55] !== m || I[56] !== O
              ? ((z =
                  m || null == t
                    ? null
                    : (0, s.jsx)("div", {
                        className: (0, i.A)(
                          "flex shrink-0 items-center gap-1",
                          Z && "ms-auto max-w-full py-2",
                          O
                            ? "relative col-start-2 row-start-1"
                            : "pe-[var(--settings-row-padding-inline,--spacing(4))]",
                        ),
                        children: t,
                      })),
                (I[53] = t),
                (I[54] = Z),
                (I[55] = m),
                (I[56] = O),
                (I[57] = z))
              : (z = I[57]),
            I[58] !== h || I[59] !== T || I[60] !== C || I[61] !== D || I[62] !== z
              ? ((E = (0, s.jsxs)("div", {
                  id: h,
                  "data-settings-search-entry": h,
                  tabIndex: T,
                  className: C,
                  children: [D, z],
                })),
                (I[58] = h),
                (I[59] = T),
                (I[60] = C),
                (I[61] = D),
                (I[62] = z),
                (I[63] = E))
              : (E = I[63]),
            E
          )
        },
        kf: function (e) {
          let t,
            a = (0, n.c)(2),
            { children: i } = e
          return (
            a[0] !== i
              ? ((t = (0, s.jsx)("span", { className: "text-tertiary", children: i })), (a[0] = i), (a[1] = t))
              : (t = a[1]),
            t
          )
        },
        lu: function (e) {
          let t,
            a,
            r,
            o,
            l,
            c,
            u,
            g,
            m,
            p,
            f = (0, n.c)(43),
            {
              id: x,
              ariaLabel: h,
              autoFocus: y,
              checked: b,
              description: v,
              highlightSelected: w,
              indicator: j,
              label: A,
              name: k,
              onChange: _,
              onClick: S,
              value: N,
              variant: M,
            } = e,
            C = void 0 === w || w,
            D = void 0 === j ? "radio" : j,
            z = void 0 === M ? "default" : M
          ;(f[0] !== b || f[1] !== v || f[2] !== C || f[3] !== D || f[4] !== z
            ? ((t = (0, i.A)(
                "relative flex has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-ring",
                "default" === z &&
                  (0, i.A)(
                    "gap-3 px-[var(--settings-row-padding-inline,--spacing(4))] py-3 hover:bg-secondary-ghost-hover",
                    null != v ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === z && b && C && "radio" === D && "bg-background-neutral-soft-alpha",
                "form" === z && "items-center gap-4 px-4 py-4 hover:bg-secondary-ghost-hover",
                "inline" === z && "items-center gap-2",
                "checkmark" === D && "after:ms-7",
              )),
              (f[0] = b),
              (f[1] = v),
              (f[2] = C),
              (f[3] = D),
              (f[4] = z),
              (f[5] = t))
            : (t = f[5]),
            f[6] !== h || f[7] !== x
              ? ((a = (0, s.jsx)("label", {
                  className: "absolute inset-0 cursor-interaction",
                  "aria-label": h,
                  htmlFor: x,
                })),
                (f[6] = h),
                (f[7] = x),
                (f[8] = a))
              : (a = f[8]),
            f[9] !== D || f[10] !== z
              ? ((r = (0, i.A)(
                  "z-10 cursor-interaction",
                  "checkmark" === D
                    ? "absolute inset-0 size-full opacity-0"
                    : (0, i.A)(
                        "relative shrink-0 appearance-auto accent-current",
                        "default" === z ? "mt-1 size-4" : "size-5",
                      ),
                )),
                (f[9] = D),
                (f[10] = z),
                (f[11] = r))
              : (r = f[11]))
          let E = null != v ? `${x}-description` : void 0
          ;(f[12] !== h ||
          f[13] !== y ||
          f[14] !== b ||
          f[15] !== x ||
          f[16] !== k ||
          f[17] !== _ ||
          f[18] !== S ||
          f[19] !== r ||
          f[20] !== E ||
          f[21] !== N
            ? ((o = (0, s.jsx)("input", {
                id: x,
                className: r,
                "aria-label": h,
                "aria-describedby": E,
                autoFocus: y,
                type: "radio",
                name: k,
                value: N,
                checked: b,
                onChange: _,
                onClick: S,
              })),
              (f[12] = h),
              (f[13] = y),
              (f[14] = b),
              (f[15] = x),
              (f[16] = k),
              (f[17] = _),
              (f[18] = S),
              (f[19] = r),
              (f[20] = E),
              (f[21] = N),
              (f[22] = o))
            : (o = f[22]),
            f[23] !== b || f[24] !== D
              ? ((l = "checkmark" === D ? (0, s.jsx)(d.ALZ, { className: (0, i.A)(!b && "invisible") }) : null),
                (f[23] = b),
                (f[24] = D),
                (f[25] = l))
              : (l = f[25]))
          let I = "default" === z ? "text-sm font-medium" : "text-base"
          return (
            f[26] !== I ? ((c = (0, i.A)("text-default", I)), (f[26] = I), (f[27] = c)) : (c = f[27]),
            f[28] !== A || f[29] !== c
              ? ((u = (0, s.jsx)("span", { className: c, children: A })), (f[28] = A), (f[29] = c), (f[30] = u))
              : (u = f[30]),
            f[31] !== v || f[32] !== x
              ? ((g =
                  null != v
                    ? (0, s.jsx)("span", {
                        id: `${x}-description`,
                        className: "text-sm leading-5 text-secondary",
                        children: v,
                      })
                    : null),
                (f[31] = v),
                (f[32] = x),
                (f[33] = g))
              : (g = f[33]),
            f[34] !== u || f[35] !== g
              ? ((m = (0, s.jsxs)("span", {
                  className: "pointer-events-none relative flex min-w-0 flex-col gap-0.5",
                  children: [u, g],
                })),
                (f[34] = u),
                (f[35] = g),
                (f[36] = m))
              : (m = f[36]),
            f[37] !== m || f[38] !== t || f[39] !== a || f[40] !== o || f[41] !== l
              ? ((p = (0, s.jsxs)("div", { className: t, children: [a, o, l, m] })),
                (f[37] = m),
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
    var s = a("ABep"),
      n = a("QosV"),
      i = a("on57"),
      r = a("bZug")
    function o(e) {
      let t,
        a,
        o,
        d = (0, n.c)(19),
        { children: l, className: c, contentOverflow: u, dividers: g, variant: m, decoration: p } = e,
        f = void 0 === g || g,
        x = void 0 === m ? "default" : m,
        h = "default" === x || "boxed" === x,
        y = "flat" === x || "rows" === x ? r.s : r.r,
        b = f ? y : "flex flex-col",
        v = "recommendation" === x && "rounded-[20px]",
        w = "recommendation" !== x && "flat" !== x && "rows" !== x && "outlinedLarge" !== x && "rounded-2xl",
        j = "outlinedLarge" === x && "rounded-[30px] border border-default bg-transparent",
        A = "daybreak" === p && "daybreak-VsXdEH",
        k = "visible" === u ? "overflow-visible" : "overflow-hidden",
        _ =
          h &&
          "border border-default [--settings-surface-background:initial] group-data-[density=compact]/settings:border-0 group-data-[density=compact]/settings:ring-1 group-data-[density=compact]/settings:ring-inset group-data-[density=compact]/settings:ring-border"
      return (
        d[0] !== c ||
        d[1] !== u ||
        d[2] !== f ||
        d[3] !== b ||
        d[4] !== v ||
        d[5] !== w ||
        d[6] !== j ||
        d[7] !== A ||
        d[8] !== k ||
        d[9] !== _ ||
        d[10] !== x
          ? ((t = (0, i.A)(
              b,
              "[--settings-row-padding-inline:initial]",
              v,
              w,
              j,
              A,
              k,
              _,
              "default" === x && [
                "[[data-settings-panel]_&]:rounded-none [[data-settings-panel]_&]:border-0 [[data-settings-panel]_&]:ring-0 [[data-settings-panel]_&]:[--settings-row-padding-inline:0px] [[data-settings-panel]_&]:[--settings-surface-background:transparent]",
                null == u && "[[data-settings-panel]_&]:overflow-visible",
                f && "[[data-settings-panel]_&>*:not(:last-child)]:after:inset-x-0",
              ],
              "metered" === x && "ring-1 ring-inset ring-border-subtle",
              "secondary" === x && "bg-surface-secondary/92",
              "muted" === x && "bg-(--color-background-neutral-soft-alpha)/50 dark:bg-background-neutral-soft-alpha",
              "form" === x &&
                "border border-subtle bg-surface dark:bg-surface-secondary/92 group-data-[density=form]/settings:border-default group-data-[density=form]/settings:bg-transparent dark:group-data-[density=form]/settings:bg-transparent group-data-[density=form]/settings:[&>*:not(:last-child)]:after:inset-x-5 group-data-[density=form]/settings:[&>*:not(:last-child)]:after:h-px group-data-[density=form]/settings:[&>*:not(:last-child)]:after:bg-border-subtle",
              "outlined" === x && "border border-subtle bg-transparent",
              "flat" === x &&
                "relative bg-transparent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border after:content-['']",
              "input" === x && "border border-primary-outline bg-primary-soft",
              "recommendation" === x && "border border-default bg-secondary-soft dark:bg-transparent",
              c,
            )),
            (d[0] = c),
            (d[1] = u),
            (d[2] = f),
            (d[3] = b),
            (d[4] = v),
            (d[5] = w),
            (d[6] = j),
            (d[7] = A),
            (d[8] = k),
            (d[9] = _),
            (d[10] = x),
            (d[11] = t))
          : (t = d[11]),
        d[12] !== h || d[13] !== x
          ? ((a =
              h || "metered" === x
                ? {
                    backgroundColor: h
                      ? "var(--settings-surface-background, var(--color-background-panel, var(--color-background-neutral-soft-alpha)))"
                      : "var(--color-background-panel, var(--color-background-neutral-soft-alpha))",
                  }
                : void 0),
            (d[12] = h),
            (d[13] = x),
            (d[14] = a))
          : (a = d[14]),
        d[15] !== l || d[16] !== t || d[17] !== a
          ? ((o = (0, s.jsx)("div", { className: t, style: a, children: l })),
            (d[15] = l),
            (d[16] = t),
            (d[17] = a),
            (d[18] = o))
          : (o = d[18]),
        o
      )
    }
  },
}
//# sourceMappingURL=19319.32331f0b22.js.map
