import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $C as n,
  $St as r,
  $st as i,
  FBt as a,
  HFt as o,
  HO as s,
  IO as ee,
  JO as c,
  LNt as l,
  LO as te,
  Lst as u,
  Mst as ne,
  ORt as d,
  OT as re,
  PBt as f,
  Pit as ie,
  Qst as ae,
  RO as oe,
  Rst as se,
  Smt as ce,
  TY as p,
  Vrt as le,
  WO as ue,
  XOt as m,
  Y3 as h,
  Ylt as de,
  Z3 as fe,
  ZSt as g,
  e6 as _,
  ew as pe,
  hit as me,
  jit as v,
  jst as y,
  kT as b,
  lit as he,
  oit as ge,
  okt as _e,
  qO as ve,
  qrt as ye,
  sY as be,
  sct as x,
  sit as xe,
  sw as Se,
  tkt as S,
  uw as Ce,
  vst as C,
  yst as we,
  zO as Te,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as w,
  ZLn as Ee,
  _p as T,
  gp as De,
  hh as Oe,
  iRr as ke,
  mh as E,
  tyr as D,
} from "./app-initial-ad16eaadf81f.js";
function O(e) {
  let i = (0, Ae.c)(94),
    { accountId: a, userId: o, onClose: s } = e,
    c = r(ae),
    l = _e(),
    u = se(),
    d = me(de.dictationDictionary),
    [f, ie] = (0, k.useState)(``),
    [p, le] = (0, k.useState)(null),
    [m, fe] = (0, k.useState)(``),
    [g, _] = (0, k.useState)(null),
    pe = (0, k.useRef)(null),
    y,
    b;
  (i[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = () => () => pe.current?.abort()), (b = []), (i[0] = y), (i[1] = b))
    : ((y = i[0]), (b = i[1])),
    (0, k.useEffect)(y, b));
  let ge;
  i[2] !== a || i[3] !== o
    ? ((ge = [`dictation-custom-dictionary`, a, o]), (i[2] = a), (i[3] = o), (i[4] = ge))
    : (ge = i[4]);
  let x = ge,
    Ce;
  i[5] === a ? (Ce = i[6]) : ((Ce = { "ChatGPT-Account-ID": a, [ce]: a }), (i[5] = a), (i[6] = Ce));
  let C = Ce,
    w;
  i[7] === C
    ? (w = i[8])
    : ((w = async (e) => {
        let { signal: t } = e,
          n = await ke.safeGet(`/dictation/custom_dictionary`, {
            additionalHeaders: C,
            signal: t,
            expectedErrorStatuses: [404],
          });
        return { ...n, max_entry_utf16_units: je.parse(n.max_entry_utf16_units) };
      }),
      (i[7] = C),
      (i[8] = w));
  let T;
  i[9] !== x || i[10] !== w
    ? ((T = { queryKey: x, queryFn: w, staleTime: 5e3, refetchOnWindowFocus: `always`, retry: !1 }),
      (i[9] = x),
      (i[10] = w),
      (i[11] = T))
    : (T = i[11]);
  let { data: E, isPending: D, isError: O, isFetching: j, refetch: Me } = ne(T),
    M;
  i[12] !== a || i[13] !== C || i[14] !== u || i[15] !== c || i[16] !== o
    ? ((M = async (e) => {
        e.type === `add` && le(null);
        let t = new AbortController();
        pe.current = t;
        let n = t.signal;
        if (e.type === `delete`)
          await ke.safeDelete(`/dictation/custom_dictionary/words/{word_id}`, {
            parameters: { path: { word_id: e.id } },
            additionalHeaders: C,
            signal: n,
            expectedErrorStatuses: [404],
          });
        else if (e.type === `add`)
          await Oe({
            queryClient: u,
            accountId: a,
            userId: o,
            text: e.text,
            signal: n,
            surface: `settings`,
            onSuccess: () => ie(``),
          });
        else {
          for (let t of e.words) {
            n.throwIfAborted();
            try {
              await ke.safePost(`/dictation/custom_dictionary/words`, {
                requestBody: { text: t },
                additionalHeaders: C,
                signal: n,
                expectedErrorStatuses: [400, 404, 409, 422],
              });
            } catch (e) {
              let t = e;
              if (!(t instanceof v && t.status === 409 && t.errorCode !== `account_changed`)) throw t;
            }
          }
          n.throwIfAborted();
          let t = await xe(de.dictationDictionary);
          (n.throwIfAborted(),
            t != null &&
              (await he(
                c,
                de.dictationDictionary,
                t.filter((t) => !e.words.includes(t)),
                { optimistic: !1 },
              )),
            _(null));
        }
      }),
      (i[12] = a),
      (i[13] = C),
      (i[14] = u),
      (i[15] = c),
      (i[16] = o),
      (i[17] = M))
    : (M = i[17]);
  let N;
  i[18] !== u || i[19] !== x
    ? ((N = async (e, t, n) => {
        (await u.invalidateQueries({ queryKey: x }, { cancelRefetch: n.type !== `add` || t != null }),
          (pe.current = null));
      }),
      (i[18] = u),
      (i[19] = x),
      (i[20] = N))
    : (N = i[20]);
  let P;
  i[21] !== l || i[22] !== c
    ? ((P = (e, t) => {
        if (e.name === `AbortError` || pe.current?.signal.aborted) return;
        let n;
        if (
          ((n =
            e instanceof v && e.errorCode !== `account_changed` && e.status === 409
              ? l.formatMessage({
                  id: `settings.voice.dictionary.duplicateError`,
                  defaultMessage: `This word is already in your dictionary`,
                  description: `Voice dictionary error when a normalized, case-insensitive equivalent entry is already saved`,
                })
              : e instanceof v && e.status === 422
                ? l.formatMessage({
                    id: `settings.voice.dictionary.capacityError`,
                    defaultMessage: `Your dictionary is full. Remove a saved word before adding more. Words from this device are kept for retry`,
                    description: `Voice dictionary capacity error, including imports that may have partially succeeded; local words are retained`,
                  })
                : e instanceof v && e.status === 400 && e.errorCode === `dictionary_entry_too_long`
                  ? l.formatMessage({
                      id: `settings.voice.dictionary.serverTooLong`,
                      defaultMessage: `This word is too long after text normalization. Shorten it to the current limit shown above`,
                      description: `Server validation error for a dictionary entry exceeding the normalized UTF-16 length limit`,
                    })
                  : e instanceof v && e.status === 400
                    ? l.formatMessage({
                        id: `settings.voice.dictionary.invalidEntryError`,
                        defaultMessage: `Check the word’s length and remove any line breaks or attachments.`,
                        description: `Voice dictionary validation error after adding or partially importing entries; refers to the limits shown in the dialog`,
                      })
                    : l.formatMessage({
                        id: `settings.voice.dictionary.saveError`,
                        defaultMessage: `Couldn’t save dictionary changes. Check the words and try again`,
                        description: `Error toast after adding, deleting, or importing vocabulary fails; unsaved input and local words are retained for retry`,
                      })),
          t.type === `add`)
        ) {
          le(n);
          return;
        }
        c.get(ye).danger(n, { errorAnalytics: { toastId: `settings.voice.dictionary.saveError` } });
      }),
      (i[21] = l),
      (i[22] = c),
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
  let { mutate: F, isPending: I, variables: L } = we(Ne),
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
    i[31] !== p ||
    i[32] !== g ||
    i[33] !== l ||
    i[34] !== O ||
    i[35] !== j ||
    i[36] !== D ||
    i[37] !== I ||
    i[38] !== d ||
    i[39] !== F ||
    i[40] !== f ||
    i[41] !== s ||
    i[42] !== Me ||
    i[43] !== m ||
    i[44] !== L
  ) {
    let e = E?.words.filter((e) => e.text.toLocaleLowerCase().includes(m.trim().toLocaleLowerCase()));
    ((V = ue),
      (J = !0),
      i[57] === s
        ? (Y = i[58])
        : ((Y = (e) => {
            e || s();
          }),
          (i[57] = s),
          (i[58] = Y)),
      (X = `wide`),
      i[59] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((Z = { "aria-describedby": void 0 }), (i[59] = Z))
        : (Z = i[59]),
      (B = ee),
      (H = `form`),
      (U = `viewport`),
      (W = `select-none`),
      i[60] !== R || i[61] !== z || i[62] !== g || i[63] !== F || i[64] !== f
        ? ((G = (e) => {
            (e.preventDefault(),
              !z &&
                (g == null
                  ? f !== `` && !R && F({ type: `add`, text: f })
                  : g.length > 0 && F({ type: `import`, words: g })));
          }),
          (i[60] = R),
          (i[61] = z),
          (i[62] = g),
          (i[63] = F),
          (i[64] = f),
          (i[65] = G))
        : (G = i[65]));
    let r;
    i[66] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, A.jsx)(oe, {
          title: (0, A.jsx)(ve, {
            children: (0, A.jsx)(S, {
              id: `speechSettings.content.customDictionary.page.title`,
              defaultMessage: `Voice dictionary`,
              description: `Title for the voice dictionary settings where users manage words to recognize in their speech`,
            }),
          }),
        })),
        (i[66] = r))
      : (r = i[66]);
    let a;
    i[67] === E
      ? (a = i[68])
      : ((a =
          E == null
            ? null
            : (0, A.jsx)(`p`, {
                id: `dictionary-limits`,
                className: `text-sm text-secondary`,
                children: (0, A.jsx)(S, {
                  id: `settings.voice.dictionary.limits`,
                  defaultMessage: `Dictionary capacity: {maxWords, number}. Each word can contain up to {maxLength, plural, one {# character} other {# characters}} after text normalization. Some characters, including emoji, count as two or more`,
                  description: `Voice dictionary limits: maxWords is the maximum number of entries, maxLength is the maximum UTF-16 length after Unicode and whitespace normalization; emoji can consume multiple units`,
                  values: { maxWords: E.max_words, maxLength: E.max_entry_utf16_units },
                }),
              })),
        (i[67] = E),
        (i[68] = a));
    let o;
    (i[69] === R
      ? (o = i[70])
      : ((o = R
          ? (0, A.jsx)(`p`, {
              role: `status`,
              className: `text-sm text-secondary`,
              children: (0, A.jsx)(S, {
                id: `settings.voice.dictionary.atCapacity`,
                defaultMessage: `Your dictionary is full. Your saved words are kept. Remove words to make room for new ones`,
                description: `Voice dictionary notice when saved entry count reaches or exceeds the current server limit; existing entries are not removed automatically`,
              }),
            })
          : null),
        (i[69] = R),
        (i[70] = o)),
      i[71] !== a || i[72] !== o
        ? ((K = (0, A.jsxs)(Te, { className: `gap-3`, children: [r, a, o] })),
          (i[71] = a),
          (i[72] = o),
          (i[73] = K))
        : (K = i[73]),
      (q =
        g == null
          ? (0, A.jsxs)(Te, {
              className: `gap-3`,
              children: [
                O
                  ? (0, A.jsxs)(De, {
                      children: [
                        (0, A.jsx)(S, {
                          id: `speechSettings.content.customDictionary.loadError`,
                          defaultMessage: `We couldn’t load your saved words`,
                          description: `Error when Voice dictionary settings cannot load saved words`,
                        }),
                        (0, A.jsx)(h, {
                          type: `button`,
                          color: `secondary`,
                          loading: j,
                          onClick: () => void Me(),
                          children: (0, A.jsx)(S, {
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
                  children: (0, A.jsx)(S, {
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
                      value: f,
                      "aria-describedby": `dictionary-limits dictionary-entry-error`,
                      "aria-invalid": p != null,
                      disabled: z || R,
                      onChange: (e) => {
                        (ie(e.target.value), le(null));
                      },
                      placeholder: l.formatMessage({
                        id: `speechSettings.content.customDictionary.input.add.placeholder`,
                        defaultMessage: `Word ChatGPT should recognize when spoken`,
                        description: `Placeholder for a word or short phrase to recognize during dictation`,
                      }),
                    }),
                    (0, A.jsx)(h, {
                      type: `submit`,
                      disabled: z || R || f === ``,
                      loading: I && L?.type === `add`,
                      children: (0, A.jsx)(S, {
                        id: `speechSettings.content.customDictionary.button.add`,
                        defaultMessage: `Add`,
                        description: `Button for adding a word to the voice dictionary`,
                      }),
                    }),
                  ],
                }),
                p == null
                  ? null
                  : (0, A.jsx)(`p`, {
                      id: `dictionary-entry-error`,
                      role: `alert`,
                      className: `text-sm text-secondary`,
                      children: p,
                    }),
                (0, A.jsx)(Se, {
                  label: (0, A.jsx)(S, {
                    id: `speechSettings.content.customDictionary.savedWords.heading`,
                    defaultMessage: `Words`,
                    description: `Heading above saved voice dictionary entries`,
                  }),
                  control:
                    E == null
                      ? null
                      : (0, A.jsx)(S, {
                          id: `speechSettings.content.customDictionary.wordCount`,
                          defaultMessage: `{wordCount}/{maxWords}`,
                          description: `Saved voice dictionary entry count and maximum, for example 3/200`,
                          values: { wordCount: E.words.length, maxWords: E.max_words },
                        }),
                }),
                (0, A.jsx)(Ee, {
                  "aria-label": l.formatMessage({
                    id: `speechSettings.content.customDictionary.input.search.ariaLabel`,
                    defaultMessage: `Search words`,
                    description: `Accessible label for searching saved speech recognition words`,
                  }),
                  name: `dictation-custom-dictionary-search`,
                  placeholder: l.formatMessage({
                    id: `speechSettings.content.customDictionary.input.search.placeholder`,
                    defaultMessage: `Search`,
                    description: `Placeholder for searching saved voice dictionary words`,
                  }),
                  value: m,
                  onChange: (e) => fe(e.target.value),
                  disabled: D || O,
                }),
                D
                  ? (0, A.jsx)(De, {
                      children: (0, A.jsx)(S, {
                        id: `settings.voice.dictionary.loading`,
                        defaultMessage: `Loading words…`,
                        description: `Status while saved voice dictionary words load`,
                      }),
                    })
                  : null,
                !D && !O && e != null
                  ? (0, A.jsx)(n, {
                      children:
                        e.length === 0
                          ? (0, A.jsx)(De, {
                              layout: `settings-row`,
                              children: m.trim()
                                ? (0, A.jsx)(S, {
                                    id: `speechSettings.content.customDictionary.emptySearch`,
                                    defaultMessage: `No matching words`,
                                    description: `Empty state when no saved voice dictionary words match the search`,
                                  })
                                : (0, A.jsx)(S, {
                                    id: `speechSettings.content.customDictionary.empty`,
                                    defaultMessage: `No words yet`,
                                    description: `Empty state before any voice dictionary words have been added`,
                                  }),
                            })
                          : e.map((e) =>
                              (0, A.jsx)(
                                Se,
                                {
                                  size: `compact`,
                                  label: (0, A.jsx)(`span`, {
                                    className: `break-words select-text`,
                                    children: e.text,
                                  }),
                                  control: (0, A.jsx)(h, {
                                    type: `button`,
                                    color: `ghost`,
                                    size: `icon`,
                                    disabled: I,
                                    "aria-label": l.formatMessage(
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
                                        ? (0, A.jsx)(t, { className: `icon-xs` })
                                        : (0, A.jsx)(be, {}),
                                  }),
                                },
                                e.id,
                              ),
                            ),
                    })
                  : null,
                d != null && d.length > 0
                  ? (0, A.jsx)(h, {
                      type: `button`,
                      color: `secondary`,
                      disabled: z,
                      onClick: () => _([...new Set(d)]),
                      children: (0, A.jsx)(S, {
                        id: `settings.voice.dictionary.reviewImport`,
                        defaultMessage: `Import words from this device…`,
                        description: `Button to preview existing local dictionary words before importing them into the current account and workspace`,
                      }),
                    })
                  : null,
              ],
            })
          : (0, A.jsxs)(Te, {
              className: `gap-3`,
              children: [
                (0, A.jsx)(`p`, {
                  className: `text-sm text-secondary`,
                  children: (0, A.jsx)(S, {
                    id: `settings.voice.dictionary.importDescription`,
                    defaultMessage: `Import these words from this device into your current account and workspace. Saved words will be available on your other devices`,
                    description: `Explains the destination and cross-device availability before importing local dictation vocabulary into the cloud dictionary`,
                  }),
                }),
                (0, A.jsx)(n, {
                  children: [...new Set(d)].map((e) =>
                    (0, A.jsx)(
                      Se,
                      {
                        label: (0, A.jsx)(`span`, { className: `break-words select-text`, children: e }),
                        control: (0, A.jsx)(`div`, {
                          className: `relative`,
                          children: (0, A.jsx)(re, {
                            "aria-label": e,
                            checked: g.includes(e),
                            disabled: I,
                            onCheckedChange: (t) => _(t ? [...g, e] : g.filter((t) => t !== e)),
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
      (i[31] = p),
      (i[32] = g),
      (i[33] = l),
      (i[34] = O),
      (i[35] = j),
      (i[36] = D),
      (i[37] = I),
      (i[38] = d),
      (i[39] = F),
      (i[40] = f),
      (i[41] = s),
      (i[42] = Me),
      (i[43] = m),
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
  i[74] !== z || i[75] !== g || i[76] !== I
    ? ((Q =
        g == null
          ? null
          : (0, A.jsx)(Te, {
              className: `gap-3`,
              children: (0, A.jsxs)(te, {
                children: [
                  (0, A.jsx)(h, {
                    type: `button`,
                    color: `secondary`,
                    disabled: I,
                    onClick: () => _(null),
                    children: (0, A.jsx)(S, {
                      id: `settings.voice.dictionary.cancelImport`,
                      defaultMessage: `Cancel`,
                      description: `Cancel the local vocabulary import preview without changing saved words`,
                    }),
                  }),
                  (0, A.jsx)(h, {
                    type: `submit`,
                    loading: I,
                    disabled: z || g.length === 0,
                    children: (0, A.jsx)(S, {
                      id: `settings.voice.dictionary.confirmImport`,
                      defaultMessage: `Import words`,
                      description: `Confirm importing the selected local words into the current account and workspace`,
                    }),
                  }),
                ],
              }),
            })),
      (i[74] = z),
      (i[75] = g),
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
    ((Ae = f()),
      C(),
      y(),
      u(),
      g(),
      x(),
      (k = a()),
      m(),
      o(),
      D(),
      fe(),
      b(),
      c(),
      s(),
      p(),
      T(),
      _(),
      w(),
      le(),
      E(),
      i(),
      ge(),
      Ce(),
      pe(),
      ie(),
      (A = l()),
      (je = d().int().min(1).max(100).catch(50)));
  }))();
}
j();
export { O as DictionaryDialog };
//# sourceMappingURL=dictionary-dialog-ac4d376402a6.js.map
