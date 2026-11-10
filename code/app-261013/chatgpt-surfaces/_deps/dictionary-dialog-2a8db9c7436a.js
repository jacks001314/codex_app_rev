import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $nt as n,
  Cot as r,
  EPt as i,
  Gct as a,
  Gnt as ee,
  HT as o,
  IDt as s,
  Iot as c,
  Ixt as te,
  JC as l,
  Lot as ne,
  Pxt as u,
  TJ as d,
  VDt as re,
  VT as ie,
  Wnt as f,
  Xot as ae,
  Yot as p,
  _O as oe,
  cO as se,
  fLt as m,
  fO as ce,
  hot as le,
  hrt as h,
  i3 as g,
  iw as ue,
  jDt as _,
  lO as de,
  lot as fe,
  mO as pe,
  nst as me,
  oO as he,
  qC as ge,
  qnt as _e,
  r3 as ve,
  rst as v,
  sJ as ye,
  sO as be,
  spt as xe,
  t3 as Se,
  tst as y,
  tw as Ce,
  vO as b,
  vrt as x,
  vzt as S,
  wot as C,
  xMt as we,
  yzt as w,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as T,
  Jm as Te,
  TPn as Ee,
  Ym as De,
  Ymr as Oe,
  ehr as E,
  hp as D,
  mp as ke,
} from "./app-initial-5851df3f6cb1.js";
function O(e) {
  let i = (0, Ae.c)(94),
    { accountId: o, userId: c, onClose: l } = e,
    u = te(r),
    d = re(),
    f = me(),
    p = n(a.dictationDictionary),
    [m, ce] = (0, k.useState)(``),
    [g, ue] = (0, k.useState)(null),
    [_, fe] = (0, k.useState)(``),
    [v, Se] = (0, k.useState)(null),
    y = (0, k.useRef)(null),
    b,
    x;
  (i[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = () => () => y.current?.abort()), (x = []), (i[0] = b), (i[1] = x))
    : ((b = i[0]), (x = i[1])),
    (0, k.useEffect)(b, x));
  let S;
  i[2] !== o || i[3] !== c
    ? ((S = [`dictation-custom-dictionary`, o, c]), (i[2] = o), (i[3] = c), (i[4] = S))
    : (S = i[4]);
  let C = S,
    we;
  i[5] === o ? (we = i[6]) : ((we = { "ChatGPT-Account-ID": o, [xe]: o }), (i[5] = o), (i[6] = we));
  let w = we,
    T;
  i[7] === w
    ? (T = i[8])
    : ((T = async (e) => {
        let { signal: t } = e,
          n = await Oe.safeGet(`/dictation/custom_dictionary`, {
            additionalHeaders: w,
            signal: t,
            expectedErrorStatuses: [404],
          });
        return { ...n, max_entry_utf16_units: je.parse(n.max_entry_utf16_units) };
      }),
      (i[7] = w),
      (i[8] = T));
  let Te;
  i[9] !== C || i[10] !== T
    ? ((Te = { queryKey: C, queryFn: T, staleTime: 5e3, refetchOnWindowFocus: `always`, retry: !1 }),
      (i[9] = C),
      (i[10] = T),
      (i[11] = Te))
    : (Te = i[11]);
  let { data: E, isPending: D, isError: O, isFetching: j, refetch: Me } = ae(Te),
    M;
  i[12] !== o || i[13] !== w || i[14] !== f || i[15] !== u || i[16] !== c
    ? ((M = async (e) => {
        e.type === `add` && ue(null);
        let t = new AbortController();
        y.current = t;
        let n = t.signal;
        if (e.type === `delete`)
          await Oe.safeDelete(`/dictation/custom_dictionary/words/{word_id}`, {
            parameters: { path: { word_id: e.id } },
            additionalHeaders: w,
            signal: n,
            expectedErrorStatuses: [404],
          });
        else if (e.type === `add`)
          await De({
            queryClient: f,
            accountId: o,
            userId: c,
            text: e.text,
            signal: n,
            surface: `settings`,
            onSuccess: () => ce(``),
          });
        else {
          for (let t of e.words) {
            n.throwIfAborted();
            try {
              await Oe.safePost(`/dictation/custom_dictionary/words`, {
                requestBody: { text: t },
                additionalHeaders: w,
                signal: n,
                expectedErrorStatuses: [400, 404, 409, 422],
              });
            } catch (e) {
              let t = e;
              if (!(t instanceof h && t.status === 409 && t.errorCode !== `account_changed`)) throw t;
            }
          }
          n.throwIfAborted();
          let t = await ee(a.dictationDictionary);
          (n.throwIfAborted(),
            t != null &&
              (await _e(
                u,
                a.dictationDictionary,
                t.filter((t) => !e.words.includes(t)),
                { optimistic: !1 },
              )),
            Se(null));
        }
      }),
      (i[12] = o),
      (i[13] = w),
      (i[14] = f),
      (i[15] = u),
      (i[16] = c),
      (i[17] = M))
    : (M = i[17]);
  let N;
  i[18] !== f || i[19] !== C
    ? ((N = async (e, t, n) => {
        (await f.invalidateQueries({ queryKey: C }, { cancelRefetch: n.type !== `add` || t != null }),
          (y.current = null));
      }),
      (i[18] = f),
      (i[19] = C),
      (i[20] = N))
    : (N = i[20]);
  let P;
  i[21] !== d || i[22] !== u
    ? ((P = (e, t) => {
        if (e.name === `AbortError` || y.current?.signal.aborted) return;
        let n;
        if (
          ((n =
            e instanceof h && e.errorCode !== `account_changed` && e.status === 409
              ? d.formatMessage({
                  id: `settings.voice.dictionary.duplicateError`,
                  defaultMessage: `This word is already in your dictionary`,
                  description: `Voice dictionary error when a normalized, case-insensitive equivalent entry is already saved`,
                })
              : e instanceof h && e.status === 422
                ? d.formatMessage({
                    id: `settings.voice.dictionary.capacityError`,
                    defaultMessage: `Your dictionary is full. Remove a saved word before adding more. Words from this device are kept for retry`,
                    description: `Voice dictionary capacity error, including imports that may have partially succeeded; local words are retained`,
                  })
                : e instanceof h && e.status === 400 && e.errorCode === `dictionary_entry_too_long`
                  ? d.formatMessage({
                      id: `settings.voice.dictionary.serverTooLong`,
                      defaultMessage: `This word is too long after text normalization. Shorten it to the current limit shown above`,
                      description: `Server validation error for a dictionary entry exceeding the normalized UTF-16 length limit`,
                    })
                  : e instanceof h && e.status === 400
                    ? d.formatMessage({
                        id: `settings.voice.dictionary.invalidEntryError`,
                        defaultMessage: `Check the word’s length and remove any line breaks or attachments.`,
                        description: `Voice dictionary validation error after adding or partially importing entries; refers to the limits shown in the dialog`,
                      })
                    : d.formatMessage({
                        id: `settings.voice.dictionary.saveError`,
                        defaultMessage: `Couldn’t save dictionary changes. Check the words and try again`,
                        description: `Error toast after adding, deleting, or importing vocabulary fails; unsaved input and local words are retained for retry`,
                      })),
          t.type === `add`)
        ) {
          ue(n);
          return;
        }
        u.get(le).danger(n, { errorAnalytics: { toastId: `settings.voice.dictionary.saveError` } });
      }),
      (i[21] = d),
      (i[22] = u),
      (i[23] = P))
    : (P = i[23]);
  let Ne;
  i[24] !== M || i[25] !== N || i[26] !== P
    ? ((Ne = { mutationFn: M, onSettled: N, onError: P }),
      (i[24] = M),
      (i[25] = N),
      (i[26] = P),
      (i[27] = Ne))
    : (Ne = i[27]);
  let { mutate: F, isPending: I, variables: L } = ne(Ne),
    R = E != null && E.words.length >= E.max_words,
    z = D || O || I,
    B,
    V,
    H,
    U,
    W,
    G,
    K,
    q,
    J,
    Y,
    X,
    Z;
  if (
    i[28] !== R ||
    i[29] !== E ||
    i[30] !== z ||
    i[31] !== g ||
    i[32] !== v ||
    i[33] !== d ||
    i[34] !== O ||
    i[35] !== j ||
    i[36] !== D ||
    i[37] !== I ||
    i[38] !== p ||
    i[39] !== F ||
    i[40] !== m ||
    i[41] !== l ||
    i[42] !== Me ||
    i[43] !== _ ||
    i[44] !== L
  ) {
    let e = E?.words.filter((e) => e.text.toLocaleLowerCase().includes(_.trim().toLocaleLowerCase()));
    ((V = pe),
      (J = !0),
      i[57] === l
        ? (Y = i[58])
        : ((Y = (e) => {
            e || l();
          }),
          (i[57] = l),
          (i[58] = Y)),
      (X = `wide`),
      i[59] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((Z = { "aria-describedby": void 0 }), (i[59] = Z))
        : (Z = i[59]),
      (B = he),
      (H = `form`),
      (U = `viewport`),
      (W = `select-none`),
      i[60] !== R || i[61] !== z || i[62] !== v || i[63] !== F || i[64] !== m
        ? ((G = (e) => {
            (e.preventDefault(),
              !z &&
                (v == null
                  ? m !== `` && !R && F({ type: `add`, text: m })
                  : v.length > 0 && F({ type: `import`, words: v })));
          }),
          (i[60] = R),
          (i[61] = z),
          (i[62] = v),
          (i[63] = F),
          (i[64] = m),
          (i[65] = G))
        : (G = i[65]));
    let n;
    i[66] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, A.jsx)(se, {
          title: (0, A.jsx)(oe, {
            children: (0, A.jsx)(s, {
              id: `speechSettings.content.customDictionary.page.title`,
              defaultMessage: `Voice dictionary`,
              description: `Title for the voice dictionary settings where users manage words to recognize in their speech`,
            }),
          }),
        })),
        (i[66] = n))
      : (n = i[66]);
    let r;
    i[67] === E
      ? (r = i[68])
      : ((r =
          E == null
            ? null
            : (0, A.jsx)(`p`, {
                id: `dictionary-limits`,
                className: `text-sm text-secondary`,
                children: (0, A.jsx)(s, {
                  id: `settings.voice.dictionary.limits`,
                  defaultMessage: `Dictionary capacity: {maxWords, number}. Each word can contain up to {maxLength, plural, one {# character} other {# characters}} after text normalization. Some characters, including emoji, count as two or more`,
                  description: `Voice dictionary limits: maxWords is the maximum number of entries, maxLength is the maximum UTF-16 length after Unicode and whitespace normalization; emoji can consume multiple units`,
                  values: { maxWords: E.max_words, maxLength: E.max_entry_utf16_units },
                }),
              })),
        (i[67] = E),
        (i[68] = r));
    let a;
    (i[69] === R
      ? (a = i[70])
      : ((a = R
          ? (0, A.jsx)(`p`, {
              role: `status`,
              className: `text-sm text-secondary`,
              children: (0, A.jsx)(s, {
                id: `settings.voice.dictionary.atCapacity`,
                defaultMessage: `Your dictionary is full. Your saved words are kept. Remove words to make room for new ones`,
                description: `Voice dictionary notice when saved entry count reaches or exceeds the current server limit; existing entries are not removed automatically`,
              }),
            })
          : null),
        (i[69] = R),
        (i[70] = a)),
      i[71] !== r || i[72] !== a
        ? ((K = (0, A.jsxs)(de, { className: `gap-3`, children: [n, r, a] })),
          (i[71] = r),
          (i[72] = a),
          (i[73] = K))
        : (K = i[73]),
      (q =
        v == null
          ? (0, A.jsxs)(de, {
              className: `gap-3`,
              children: [
                O
                  ? (0, A.jsxs)(ke, {
                      children: [
                        (0, A.jsx)(s, {
                          id: `speechSettings.content.customDictionary.loadError`,
                          defaultMessage: `We couldn’t load your saved words`,
                          description: `Error when Voice dictionary settings cannot load saved words`,
                        }),
                        (0, A.jsx)(t, {
                          type: `button`,
                          color: `secondary`,
                          loading: j,
                          onClick: () => void Me(),
                          children: (0, A.jsx)(s, {
                            id: `speechSettings.content.customDictionary.button.retry`,
                            defaultMessage: `Retry`,
                            description: `Button for retrying a failed custom dictionary load`,
                          }),
                        }),
                      ],
                    })
                  : null,
                (0, A.jsx)(`label`, {
                  className: `text-sm font-medium`,
                  htmlFor: `dictionary-new-word`,
                  children: (0, A.jsx)(s, {
                    id: `speechSettings.content.customDictionary.addWord.heading`,
                    defaultMessage: `Add word`,
                    description: `Heading above the input for adding a speech recognition word or short phrase`,
                  }),
                }),
                (0, A.jsxs)(`div`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, A.jsx)(Ee, {
                      id: `dictionary-new-word`,
                      autoFocus: !0,
                      name: `dictation-custom-dictionary-new-word`,
                      value: m,
                      "aria-describedby": `dictionary-limits dictionary-entry-error`,
                      "aria-invalid": g != null,
                      disabled: z || R,
                      onChange: (e) => {
                        (ce(e.target.value), ue(null));
                      },
                      placeholder: d.formatMessage({
                        id: `speechSettings.content.customDictionary.input.add.placeholder`,
                        defaultMessage: `Word ChatGPT should recognize when spoken`,
                        description: `Placeholder for a word or short phrase to recognize during dictation`,
                      }),
                    }),
                    (0, A.jsx)(t, {
                      type: `submit`,
                      disabled: z || R || m === ``,
                      loading: I && L?.type === `add`,
                      children: (0, A.jsx)(s, {
                        id: `speechSettings.content.customDictionary.button.add`,
                        defaultMessage: `Add`,
                        description: `Button for adding a word to the voice dictionary`,
                      }),
                    }),
                  ],
                }),
                g == null
                  ? null
                  : (0, A.jsx)(`p`, {
                      id: `dictionary-entry-error`,
                      role: `alert`,
                      className: `text-sm text-secondary`,
                      children: g,
                    }),
                (0, A.jsx)(Ce, {
                  label: (0, A.jsx)(s, {
                    id: `speechSettings.content.customDictionary.savedWords.heading`,
                    defaultMessage: `Words`,
                    description: `Heading above saved voice dictionary entries`,
                  }),
                  control:
                    E == null
                      ? null
                      : (0, A.jsx)(s, {
                          id: `speechSettings.content.customDictionary.wordCount`,
                          defaultMessage: `{wordCount}/{maxWords}`,
                          description: `Saved voice dictionary entry count and maximum, for example 3/200`,
                          values: { wordCount: E.words.length, maxWords: E.max_words },
                        }),
                }),
                (0, A.jsx)(Ee, {
                  "aria-label": d.formatMessage({
                    id: `speechSettings.content.customDictionary.input.search.ariaLabel`,
                    defaultMessage: `Search words`,
                    description: `Accessible label for searching saved speech recognition words`,
                  }),
                  name: `dictation-custom-dictionary-search`,
                  placeholder: d.formatMessage({
                    id: `speechSettings.content.customDictionary.input.search.placeholder`,
                    defaultMessage: `Search`,
                    description: `Placeholder for searching saved voice dictionary words`,
                  }),
                  value: _,
                  onChange: (e) => fe(e.target.value),
                  disabled: D || O,
                }),
                D
                  ? (0, A.jsx)(ke, {
                      children: (0, A.jsx)(s, {
                        id: `settings.voice.dictionary.loading`,
                        defaultMessage: `Loading words…`,
                        description: `Status while saved voice dictionary words load`,
                      }),
                    })
                  : null,
                !D && !O && e != null
                  ? (0, A.jsx)(ge, {
                      children:
                        e.length === 0
                          ? (0, A.jsx)(ke, {
                              layout: `settings-row`,
                              children: _.trim()
                                ? (0, A.jsx)(s, {
                                    id: `speechSettings.content.customDictionary.emptySearch`,
                                    defaultMessage: `No matching words`,
                                    description: `Empty state when no saved voice dictionary words match the search`,
                                  })
                                : (0, A.jsx)(s, {
                                    id: `speechSettings.content.customDictionary.empty`,
                                    defaultMessage: `No words yet`,
                                    description: `Empty state before any voice dictionary words have been added`,
                                  }),
                            })
                          : e.map((e) =>
                              (0, A.jsx)(
                                Ce,
                                {
                                  size: `compact`,
                                  label: (0, A.jsx)(`span`, {
                                    className: `break-words select-text`,
                                    children: e.text,
                                  }),
                                  control: (0, A.jsx)(t, {
                                    type: `button`,
                                    color: `ghost`,
                                    size: `icon`,
                                    disabled: I,
                                    "aria-label": d.formatMessage(
                                      {
                                        id: `speechSettings.content.customDictionary.button.remove.ariaLabel`,
                                        defaultMessage: `Remove {word}`,
                                        description: `Accessible label for deleting a saved voice dictionary word`,
                                      },
                                      { word: e.text },
                                    ),
                                    onClick: () => F({ type: `delete`, id: e.id }),
                                    children:
                                      I && L?.type === `delete` && L.id === e.id
                                        ? (0, A.jsx)(ve, { className: `icon-xs` })
                                        : (0, A.jsx)(ye, {}),
                                  }),
                                },
                                e.id,
                              ),
                            ),
                    })
                  : null,
                p != null && p.length > 0
                  ? (0, A.jsx)(t, {
                      type: `button`,
                      color: `secondary`,
                      disabled: z,
                      onClick: () => Se([...new Set(p)]),
                      children: (0, A.jsx)(s, {
                        id: `settings.voice.dictionary.reviewImport`,
                        defaultMessage: `Import words from this device…`,
                        description: `Button to preview existing local dictionary words before importing them into the current account and workspace`,
                      }),
                    })
                  : null,
              ],
            })
          : (0, A.jsxs)(de, {
              className: `gap-3`,
              children: [
                (0, A.jsx)(`p`, {
                  className: `text-sm text-secondary`,
                  children: (0, A.jsx)(s, {
                    id: `settings.voice.dictionary.importDescription`,
                    defaultMessage: `Import these words from this device into your current account and workspace. Saved words will be available on your other devices`,
                    description: `Explains the destination and cross-device availability before importing local dictation vocabulary into the cloud dictionary`,
                  }),
                }),
                (0, A.jsx)(ge, {
                  children: [...new Set(p)].map((e) =>
                    (0, A.jsx)(
                      Ce,
                      {
                        label: (0, A.jsx)(`span`, { className: `break-words select-text`, children: e }),
                        control: (0, A.jsx)(`div`, {
                          className: `relative`,
                          children: (0, A.jsx)(ie, {
                            "aria-label": e,
                            checked: v.includes(e),
                            disabled: I,
                            onCheckedChange: (t) => Se(t ? [...v, e] : v.filter((t) => t !== e)),
                          }),
                        }),
                      },
                      e,
                    ),
                  ),
                }),
              ],
            })),
      (i[28] = R),
      (i[29] = E),
      (i[30] = z),
      (i[31] = g),
      (i[32] = v),
      (i[33] = d),
      (i[34] = O),
      (i[35] = j),
      (i[36] = D),
      (i[37] = I),
      (i[38] = p),
      (i[39] = F),
      (i[40] = m),
      (i[41] = l),
      (i[42] = Me),
      (i[43] = _),
      (i[44] = L),
      (i[45] = B),
      (i[46] = V),
      (i[47] = H),
      (i[48] = U),
      (i[49] = W),
      (i[50] = G),
      (i[51] = K),
      (i[52] = q),
      (i[53] = J),
      (i[54] = Y),
      (i[55] = X),
      (i[56] = Z));
  } else
    ((B = i[45]),
      (V = i[46]),
      (H = i[47]),
      (U = i[48]),
      (W = i[49]),
      (G = i[50]),
      (K = i[51]),
      (q = i[52]),
      (J = i[53]),
      (Y = i[54]),
      (X = i[55]),
      (Z = i[56]));
  let Q;
  i[74] !== z || i[75] !== v || i[76] !== I
    ? ((Q =
        v == null
          ? null
          : (0, A.jsx)(de, {
              className: `gap-3`,
              children: (0, A.jsxs)(be, {
                children: [
                  (0, A.jsx)(t, {
                    type: `button`,
                    color: `secondary`,
                    disabled: I,
                    onClick: () => Se(null),
                    children: (0, A.jsx)(s, {
                      id: `settings.voice.dictionary.cancelImport`,
                      defaultMessage: `Cancel`,
                      description: `Cancel the local vocabulary import preview without changing saved words`,
                    }),
                  }),
                  (0, A.jsx)(t, {
                    type: `submit`,
                    loading: I,
                    disabled: z || v.length === 0,
                    children: (0, A.jsx)(s, {
                      id: `settings.voice.dictionary.confirmImport`,
                      defaultMessage: `Import words`,
                      description: `Confirm importing the selected local words into the current account and workspace`,
                    }),
                  }),
                ],
              }),
            })),
      (i[74] = z),
      (i[75] = v),
      (i[76] = I),
      (i[77] = Q))
    : (Q = i[77]);
  let $;
  i[78] !== B ||
  i[79] !== H ||
  i[80] !== U ||
  i[81] !== W ||
  i[82] !== G ||
  i[83] !== K ||
  i[84] !== q ||
  i[85] !== Q
    ? (($ = (0, A.jsxs)(B, { as: H, size: U, className: W, onSubmit: G, children: [K, q, Q] })),
      (i[78] = B),
      (i[79] = H),
      (i[80] = U),
      (i[81] = W),
      (i[82] = G),
      (i[83] = K),
      (i[84] = q),
      (i[85] = Q),
      (i[86] = $))
    : ($ = i[86]);
  let Pe;
  return (
    i[87] !== V || i[88] !== J || i[89] !== Y || i[90] !== X || i[91] !== Z || i[92] !== $
      ? ((Pe = (0, A.jsx)(V, { open: J, onOpenChange: Y, size: X, contentProps: Z, children: $ })),
        (i[87] = V),
        (i[88] = J),
        (i[89] = Y),
        (i[90] = X),
        (i[91] = Z),
        (i[92] = $),
        (i[93] = Pe))
      : (Pe = i[93]),
    Pe
  );
}
var Ae, k, A, je;
function j() {
  return (j = e(() => {
    ((Ae = S()),
      c(),
      p(),
      y(),
      u(),
      v(),
      (k = w()),
      _(),
      i(),
      E(),
      Se(),
      o(),
      b(),
      ce(),
      d(),
      D(),
      g(),
      T(),
      fe(),
      Te(),
      C(),
      f(),
      ue(),
      l(),
      x(),
      (A = we()),
      (je = m().int().min(1).max(100).catch(50)));
  }))();
}
j();
export { O as DictionaryDialog };
//# sourceMappingURL=dictionary-dialog-2a8db9c7436a.js.map
