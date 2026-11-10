import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  BE as r,
  Cot as ee,
  EPt as i,
  HE as a,
  HT as o,
  IDt as s,
  Iot as c,
  Irt as l,
  Ixt as te,
  Lot as u,
  NV as d,
  Pxt as f,
  RE as p,
  TJ as m,
  TLt as h,
  UE as g,
  VDt as ne,
  VE as _,
  VT as v,
  Xot as y,
  Yot as b,
  aB as x,
  bx as S,
  hot as C,
  i3 as w,
  iO as T,
  jDt as E,
  lot as D,
  pIt as O,
  r3 as re,
  rO as ie,
  t3 as k,
  vzt as A,
  wot as j,
  xMt as M,
  yx as ae,
  yzt as N,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as P,
  EPn as oe,
  QDr as F,
  XDr as I,
  Ymr as se,
  co as L,
  eDr as R,
  ean as z,
  ehr as B,
  lo as V,
  ocr as ce,
  tDr as H,
  tan as le,
} from "./app-initial-5851df3f6cb1.js";
import {
  Bn as ue,
  Fl as U,
  Hn as de,
  Hs as W,
  Nl as fe,
  Pl as G,
  Vs as pe,
  zn as me,
} from "./app-primary-fe8a450b3b04.js";
import { n as he, t as ge } from "./chatgpt-audio-playback-button-5a67b98c95c7.js";
import {
  a as _e,
  c as ve,
  d as ye,
  f as be,
  g as xe,
  h as Se,
  i as Ce,
  l as we,
  m as Te,
  o as Ee,
  p as De,
  r as Oe,
  s as ke,
  t as Ae,
  u as je,
} from "./translation-analytics-8ece88c0dd11.js";
import { r as Me, t as Ne } from "./quick-chat-writing-block-adapter-ead8ce970e15.js";
function Pe(e) {
  let n = (0, Fe.c)(56),
    {
      disabled: i,
      turnContext: o,
      sourceMessageId: c,
      sourceLanguage: l,
      targetLanguage: d,
      sourceTextLength: f,
    } = e,
    m = te(ee),
    h = ne(),
    g = (0, K.useId)(),
    [y, b] = (0, K.useState)(!1),
    [x, S] = (0, K.useState)(``),
    w;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((w = []), (n[0] = w)) : (w = n[0]);
  let [T, E] = (0, K.useState)(w),
    D;
  n[1] !== x || n[2] !== T || n[3] !== l || n[4] !== c || n[5] !== f || n[6] !== d || n[7] !== o
    ? ((D = () =>
        se.safePost(`/conversation/message/translation-blocks/feedback`, {
          requestBody: {
            message_id: c ?? o.messageId ?? `unknown`,
            conversation_id: o.browserConversationId ?? o.conversationId,
            metadata: {
              source_language: l,
              target_language: d,
              source_text_length: f,
              version: `trigger_v5`,
            },
            feedback: x.trim(),
            checked_reasons: T.length > 0 ? T : void 0,
          },
        })),
      (n[1] = x),
      (n[2] = T),
      (n[3] = l),
      (n[4] = c),
      (n[5] = f),
      (n[6] = d),
      (n[7] = o),
      (n[8] = D))
    : (D = n[8]);
  let O, re;
  n[9] !== h || n[10] !== m
    ? ((O = () => {
        (b(!1),
          S(``),
          E([]),
          m
            .get(C)
            .success(
              h.formatMessage({
                id: `chatgpt.translationBlock.feedback.success`,
                defaultMessage: `Your feedback has been submitted`,
                description: `Toast when feedback for the onboarding translation succeeds.`,
              }),
            ));
      }),
      (re = () => {
        m.get(C).danger(
          h.formatMessage({
            id: `chatgpt.translationBlock.feedback.error`,
            defaultMessage: `Couldn't submit feedback. Please try again`,
            description: `Toast when feedback for the onboarding translation fails. The form remains available to retry.`,
          }),
          { errorAnalytics: { toastId: `chatgpt.translationBlock.feedback.error` } },
        );
      }),
      (n[9] = h),
      (n[10] = m),
      (n[11] = O),
      (n[12] = re))
    : ((O = n[11]), (re = n[12]));
  let ie;
  n[13] !== D || n[14] !== O || n[15] !== re
    ? ((ie = { mutationFn: D, onSuccess: O, onError: re }),
      (n[13] = D),
      (n[14] = O),
      (n[15] = re),
      (n[16] = ie))
    : (ie = n[16]);
  let { mutate: k, isPending: A } = u(ie);
  i && y && b(!1);
  let j;
  n[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, q.jsx)(s, {
        id: `chatgpt.translationBlock.feedback.open`,
        defaultMessage: `Give feedback`,
        description: `Button beneath the onboarding translation to report whether the displayed translation is useful or correct.`,
      })),
      (n[17] = j))
    : (j = n[17]);
  let M;
  n[18] === i
    ? (M = n[19])
    : ((M = (0, q.jsx)(a, {
        asChild: !0,
        children: (0, q.jsx)(t, { color: `ghostTertiary`, disabled: i, children: j }),
      })),
      (n[18] = i),
      (n[19] = M));
  let ae;
  n[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, q.jsx)(_, {
        children: (0, q.jsx)(s, {
          id: `chatgpt.translationBlock.feedback.title`,
          defaultMessage: `Help improve translations in ChatGPT`,
          description: `Title for the feedback form about the translation displayed in an onboarding example.`,
        }),
      })),
      (n[20] = ae))
    : (ae = n[20]);
  let N;
  n[21] !== i || n[22] !== x || n[23] !== A || n[24] !== k
    ? ((N = (e) => {
        (e.preventDefault(), !i && x.trim() !== `` && !A && k());
      }),
      (n[21] = i),
      (n[22] = x),
      (n[23] = A),
      (n[24] = k),
      (n[25] = N))
    : (N = n[25]);
  let P;
  n[26] === T
    ? (P = n[27])
    : ((P = Le.map((e) => {
        let t = T.includes(e);
        return (0, q.jsxs)(
          `label`,
          {
            className: `flex cursor-interaction items-center justify-between gap-3 text-sm`,
            children: [
              (0, q.jsx)(s, { ...Ie[e] }),
              (0, q.jsx)(`div`, {
                className: `relative`,
                children: (0, q.jsx)(v, {
                  checked: t,
                  onCheckedChange: (t) => {
                    E((n) => (t ? [...n, e] : n.filter((t) => t !== e)));
                  },
                }),
              }),
            ],
          },
          e,
        );
      })),
      (n[26] = T),
      (n[27] = P));
  let F;
  n[28] === P
    ? (F = n[29])
    : ((F = (0, q.jsx)(`fieldset`, { className: `flex flex-col gap-3`, children: P })),
      (n[28] = P),
      (n[29] = F));
  let I;
  n[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, q.jsx)(s, {
        id: `chatgpt.translationBlock.feedback.additional`,
        defaultMessage: `Additional feedback`,
        description: `Accessible label for text feedback about the translation in an onboarding example.`,
      })),
      (n[30] = I))
    : (I = n[30]);
  let L;
  n[31] === g
    ? (L = n[32])
    : ((L = (0, q.jsx)(`label`, { className: `sr-only`, htmlFor: g, children: I })),
      (n[31] = g),
      (n[32] = L));
  let R;
  n[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (e) => S(e.currentTarget.value)), (n[33] = R))
    : (R = n[33]);
  let z;
  n[34] === h
    ? (z = n[35])
    : ((z = h.formatMessage({
        id: `chatgpt.translationBlock.feedback.placeholder`,
        defaultMessage: `What would you like us to know?`,
        description: `Placeholder asking for feedback about the displayed onboarding translation.`,
      })),
      (n[34] = h),
      (n[35] = z));
  let B;
  n[36] !== x || n[37] !== z || n[38] !== g
    ? ((B = (0, q.jsx)(oe, {
        id: g,
        maxLength: 1600,
        onChange: R,
        placeholder: z,
        rows: 3,
        value: x,
        variant: `feedback`,
      })),
      (n[36] = x),
      (n[37] = z),
      (n[38] = g),
      (n[39] = B))
    : (B = n[39]);
  let V;
  n[40] === x ? (V = n[41]) : ((V = x.trim()), (n[40] = x), (n[41] = V));
  let ce = V === ``,
    H;
  n[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, q.jsx)(s, {
        id: `chatgpt.translationBlock.feedback.submit`,
        defaultMessage: `Send feedback`,
        description: `Submit the translation feedback form for an onboarding example.`,
      })),
      (n[42] = H))
    : (H = n[42]);
  let le;
  n[43] !== A || n[44] !== ce
    ? ((le = (0, q.jsx)(t, {
        color: `primary`,
        disabled: ce,
        loading: A,
        size: `dialog`,
        type: `submit`,
        children: H,
      })),
      (n[43] = A),
      (n[44] = ce),
      (n[45] = le))
    : (le = n[45]);
  let ue;
  n[46] !== F || n[47] !== L || n[48] !== B || n[49] !== le || n[50] !== N
    ? ((ue = (0, q.jsx)(r, {
        align: `end`,
        side: `bottom`,
        size: `large`,
        children: (0, q.jsxs)(`div`, {
          className: `flex flex-col p-3`,
          children: [
            ae,
            (0, q.jsxs)(`form`, {
              className: `mt-3 flex flex-col gap-3 border-t border-subtle pt-3`,
              onSubmit: N,
              children: [F, L, B, le],
            }),
          ],
        }),
      })),
      (n[46] = F),
      (n[47] = L),
      (n[48] = B),
      (n[49] = le),
      (n[50] = N),
      (n[51] = ue))
    : (ue = n[51]);
  let U;
  return (
    n[52] !== y || n[53] !== ue || n[54] !== M
      ? ((U = (0, q.jsxs)(p, { open: y, onOpenChange: b, children: [M, ue] })),
        (n[52] = y),
        (n[53] = ue),
        (n[54] = M),
        (n[55] = U))
      : (U = n[55]),
    U
  );
}
var Fe, K, q, Ie, Le;
function J() {
  return (J = e(() => {
    ((Fe = A()),
      c(),
      f(),
      (K = N()),
      E(),
      B(),
      k(),
      o(),
      g(),
      P(),
      D(),
      j(),
      (q = M()),
      (Ie = n({
        helpful: {
          id: `chatgpt.translation.feedback.helpful`,
          defaultMessage: `A. This translation is helpful`,
          description: `Reason in a translation-card feedback form; preserve the A. option prefix.`,
        },
        data_is_incorrect: {
          id: `chatgpt.translation.feedback.incorrect`,
          defaultMessage: `B. This translation looks incorrect`,
          description: `Reason in a translation-card feedback form; preserve the B. option prefix.`,
        },
        not_relevant_to_question: {
          id: `chatgpt.translation.feedback.notUseful`,
          defaultMessage: `C. I prefer not to see this translation`,
          description: `Reason in a translation-card feedback form; preserve the C. option prefix.`,
        },
      })),
      (Le = [`helpful`, `data_is_incorrect`, `not_relevant_to_question`]));
  }))();
}
function Re(e) {
  let n = (0, He.c)(210),
    { translation: r, sourceMessageId: i, turnContext: a } = e,
    o = te(ee),
    c = ne(),
    { isStreaming: u } = a,
    d = (0, Y.useId)(),
    f = (0, Y.useRef)(0),
    p = (0, Y.useRef)(0),
    m = (0, Y.useRef)(!1),
    h = (0, Y.useRef)(`source_text_edit`),
    [g, _] = (0, Y.useState)(null),
    [v, b] = (0, Y.useState)(null),
    [S, C] = (0, Y.useState)(null),
    [w, T] = (0, Y.useState)(null),
    E;
  n[0] !== g || n[1] !== r.source_language
    ? ((E = g ?? Ae(r.source_language, `auto`)), (n[0] = g), (n[1] = r.source_language), (n[2] = E))
    : (E = n[2]);
  let D = E,
    O;
  n[3] !== v || n[4] !== r.target_language
    ? ((O = v ?? Ae(r.target_language, `en`)), (n[3] = v), (n[4] = r.target_language), (n[5] = O))
    : (O = n[5]);
  let k = O,
    A;
  n[6] !== S || n[7] !== r.source_text
    ? ((A = S ?? r.source_text.trim()), (n[6] = S), (n[7] = r.source_text), (n[8] = A))
    : (A = n[8]);
  let j = A,
    M = le(j, 500),
    N;
  n[9] === r.translated_text
    ? (N = n[10])
    : ((N = r.translated_text.trim()), (n[9] = r.translated_text), (n[10] = N));
  let P = N,
    I;
  n[11] !== D ||
  n[12] !== j ||
  n[13] !== k ||
  n[14] !== r.source_language ||
  n[15] !== r.source_text ||
  n[16] !== r.target_language
    ? ((I =
        D === Ae(r.source_language, `auto`) &&
        k === Ae(r.target_language, `en`) &&
        j.trim() === r.source_text.trim()),
      (n[11] = D),
      (n[12] = j),
      (n[13] = k),
      (n[14] = r.source_language),
      (n[15] = r.source_text),
      (n[16] = r.target_language),
      (n[17] = I))
    : (I = n[17]);
  let L = I,
    R;
  n[18] === j ? (R = n[19]) : ((R = j.trim()), (n[18] = j), (n[19] = R));
  let z = R.length > 0,
    B;
  n[20] !== j || n[21] !== L
    ? ((B = !L && Array.from(j.trim()).length > Ue), (n[20] = j), (n[21] = L), (n[22] = B))
    : (B = n[22]);
  let V = B,
    ce = i ?? a.messageId,
    H;
  n[23] === j ? (H = n[24]) : ((H = l(j.trim().length) ?? l(0)), (n[23] = j), (n[24] = H));
  let U;
  n[25] !== D || n[26] !== ce || n[27] !== H || n[28] !== k
    ? ((U = {
        messageId: ce,
        experimentVersion: `trigger_v5`,
        sourceLanguage: D,
        destinationLanguage: k,
        sourceTextLength: H,
      }),
      (n[25] = D),
      (n[26] = ce),
      (n[27] = H),
      (n[28] = k),
      (n[29] = U))
    : (U = n[29]);
  let W = U,
    fe;
  n[30] !== u || n[31] !== r.source_text || n[32] !== a.trackShownImpressions
    ? ((fe = !u && r.source_text.trim().length > 0 && a.trackShownImpressions !== !1),
      (n[30] = u),
      (n[31] = r.source_text),
      (n[32] = a.trackShownImpressions),
      (n[33] = fe))
    : (fe = n[33]);
  let G = fe,
    pe;
  n[34] !== W || n[35] !== o
    ? ((pe = () => {
        m.current || ((m.current = !0), F(o, De, W));
      }),
      (n[34] = W),
      (n[35] = o),
      (n[36] = pe))
    : (pe = n[36]);
  let me = (0, Y.useEffectEvent)(pe),
    he;
  n[37] !== me || n[38] !== G
    ? ((he = () => {
        G && me();
      }),
      (n[37] = me),
      (n[38] = G),
      (n[39] = he))
    : (he = n[39]);
  let xe;
  (n[40] === G ? (xe = n[41]) : ((xe = [G]), (n[40] = G), (n[41] = xe)), (0, Y.useEffect)(he, xe));
  let Ce;
  n[42] === j ? (Ce = n[43]) : ((Ce = j.trim()), (n[42] = j), (n[43] = Ce));
  let Oe;
  n[44] !== d || n[45] !== u || n[46] !== D || n[47] !== Ce || n[48] !== k
    ? ((Oe = [`conversational-onboarding-writing-translation`, d, D, k, Ce, u]),
      (n[44] = d),
      (n[45] = u),
      (n[46] = D),
      (n[47] = Ce),
      (n[48] = k),
      (n[49] = Oe))
    : (Oe = n[49]);
  let Me = !u && z && !V && j === M && !L,
    Ne;
  n[50] !== W || n[51] !== o || n[52] !== D || n[53] !== j || n[54] !== k || n[55] !== r.source_text
    ? ((Ne = async (e) => {
        let { signal: t } = e;
        ((f.current += 1),
          F(o, Te, {
            ...W,
            requestCount: l(f.current),
            sourceTextChangedFromInitial: j.trim() !== r.source_text.trim(),
            triggerReason: h.current,
          }));
        try {
          let e = await se.safePost(`/translation-block/translate`, {
            requestBody: {
              text: j.trim(),
              sourceLanguageCode: D === `auto` ? void 0 : D,
              targetLanguageCode: k,
            },
            signal: AbortSignal.any([t, AbortSignal.timeout(75e3)]),
          });
          return (
            t.aborted ||
              (T({ text: e.text, sourceLanguage: D, targetLanguage: k, sourceTextLength: j.trim().length }),
              F(o, be, W)),
            e
          );
        } catch (e) {
          let n = e;
          throw (t.aborted || F(o, ve, W), n);
        }
      }),
      (n[50] = W),
      (n[51] = o),
      (n[52] = D),
      (n[53] = j),
      (n[54] = k),
      (n[55] = r.source_text),
      (n[56] = Ne))
    : (Ne = n[56]);
  let Fe;
  n[57] !== Oe || n[58] !== Me || n[59] !== Ne
    ? ((Fe = { queryKey: Oe, enabled: Me, staleTime: 1 / 0, gcTime: 0, retry: !1, queryFn: Ne }),
      (n[57] = Oe),
      (n[58] = Me),
      (n[59] = Ne),
      (n[60] = Fe))
    : (Fe = n[60]);
  let { isFetching: K, isError: q, refetch: Ie } = y(Fe),
    Le = L ? P : (w?.text ?? P),
    J = z ? Le : ``,
    Re = `translation:${d}:${k}:${J}`,
    Be,
    Ve;
  (n[61] !== Re || n[62] !== o
    ? ((Be = () => () => ue(o, Re)), (Ve = [o, Re]), (n[61] = Re), (n[62] = o), (n[63] = Be), (n[64] = Ve))
    : ((Be = n[63]), (Ve = n[64])),
    (0, Y.useEffect)(Be, Ve));
  let Ge = K || D === `auto` || D === k,
    Ke;
  n[65] === c
    ? (Ke = n[66])
    : ((Ke = c.formatMessage({
        id: `chatgpt.translationBlock.sourceLanguage`,
        defaultMessage: `Source language`,
        description: `Accessible name of the language picker for the input to the ChatGPT translation block.`,
      })),
      (n[65] = c),
      (n[66] = Ke));
  let qe;
  n[67] !== W || n[68] !== o || n[69] !== D
    ? ((qe = (e) => {
        e !== D &&
          (F(o, Ee, { ...W, fromLanguage: D, toLanguage: e }), (h.current = `source_language_change`), _(e));
      }),
      (n[67] = W),
      (n[68] = o),
      (n[69] = D),
      (n[70] = qe))
    : (qe = n[70]);
  let Z;
  n[71] !== K || n[72] !== D || n[73] !== Ke || n[74] !== qe
    ? ((Z = (0, X.jsx)(ze, { label: Ke, value: D, allowAuto: !0, disabled: K, onChange: qe })),
      (n[71] = K),
      (n[72] = D),
      (n[73] = Ke),
      (n[74] = qe),
      (n[75] = Z))
    : (Z = n[75]);
  let Q;
  n[76] === c
    ? (Q = n[77])
    : ((Q = c.formatMessage({
        id: `chatgpt.translationBlock.swap`,
        defaultMessage: `Swap languages`,
        description: `Accessible name for the button that swaps the source and translated languages and translates in the other direction.`,
      })),
      (n[76] = c),
      (n[77] = Q));
  let $;
  n[78] !== J || n[79] !== W || n[80] !== o || n[81] !== D || n[82] !== j || n[83] !== k
    ? (($ = () => {
        (F(o, Se, W), (h.current = `swap_language`));
        let e = J.trim() ? J : j;
        (_(k),
          b(D),
          C(e),
          T({ text: ``, sourceLanguage: k, targetLanguage: D, sourceTextLength: e.trim().length }));
      }),
      (n[78] = J),
      (n[79] = W),
      (n[80] = o),
      (n[81] = D),
      (n[82] = j),
      (n[83] = k),
      (n[84] = $))
    : ($ = n[84]);
  let Je;
  n[85] === Symbol.for(`react.memo_cache_sentinel`) ? ((Je = (0, X.jsx)(x, {})), (n[85] = Je)) : (Je = n[85]);
  let Ye;
  n[86] !== Ge || n[87] !== Q || n[88] !== $
    ? ((Ye = (0, X.jsx)(t, {
        className: `justify-self-center`,
        "aria-label": Q,
        color: `secondary`,
        disabled: Ge,
        radius: `full`,
        size: `inputControl`,
        uniform: !0,
        onClick: $,
        children: Je,
      })),
      (n[86] = Ge),
      (n[87] = Q),
      (n[88] = $),
      (n[89] = Ye))
    : (Ye = n[89]);
  let Xe;
  n[90] === c
    ? (Xe = n[91])
    : ((Xe = c.formatMessage({
        id: `chatgpt.translationBlock.targetLanguage`,
        defaultMessage: `Target language`,
        description: `Accessible name of the picker for the translated output language in the ChatGPT translation block.`,
      })),
      (n[90] = c),
      (n[91] = Xe));
  let Ze;
  n[92] !== W || n[93] !== o || n[94] !== k
    ? ((Ze = (e) => {
        e !== k &&
          (F(o, _e, { ...W, fromLanguage: k, toLanguage: e }),
          (h.current = `destination_language_change`),
          b(e));
      }),
      (n[92] = W),
      (n[93] = o),
      (n[94] = k),
      (n[95] = Ze))
    : (Ze = n[95]);
  let Qe;
  n[96] !== K || n[97] !== Xe || n[98] !== Ze || n[99] !== k
    ? ((Qe = (0, X.jsx)(ze, { label: Xe, value: k, disabled: K, onChange: Ze })),
      (n[96] = K),
      (n[97] = Xe),
      (n[98] = Ze),
      (n[99] = k),
      (n[100] = Qe))
    : (Qe = n[100]);
  let $e;
  n[101] !== Z || n[102] !== Ye || n[103] !== Qe
    ? (($e = (0, X.jsxs)(`div`, {
        className: `grid grid-cols-1 items-center gap-3 select-none md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]`,
        children: [Z, Ye, Qe],
      })),
      (n[101] = Z),
      (n[102] = Ye),
      (n[103] = Qe),
      (n[104] = $e))
    : ($e = n[104]);
  let et;
  n[105] === c
    ? (et = n[106])
    : ((et = c.formatMessage({
        id: `chatgpt.translationBlock.sourceText`,
        defaultMessage: `Text to translate`,
        description: `Accessible name and placeholder of the editable source text in a ChatGPT translation block.`,
      })),
      (n[105] = c),
      (n[106] = et));
  let tt;
  n[107] === c
    ? (tt = n[108])
    : ((tt = c.formatMessage({
        id: `chatgpt.translationBlock.sourcePlaceholder`,
        defaultMessage: `Enter text`,
        description: `Placeholder in an empty ChatGPT translation block source text field.`,
      })),
      (n[107] = c),
      (n[108] = tt));
  let nt = We.has(D.split(`-`, 1)[0]) ? `rtl` : `auto`,
    rt;
  n[109] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((rt = (e) => {
        ((h.current = `source_text_edit`), C(e.target.value));
      }),
      (n[109] = rt))
    : (rt = n[109]);
  let it;
  n[110] !== j || n[111] !== et || n[112] !== tt || n[113] !== nt
    ? ((it = (0, X.jsx)(oe, {
        "aria-label": et,
        placeholder: tt,
        dir: nt,
        value: j,
        variant: `comparison`,
        onChange: rt,
      })),
      (n[110] = j),
      (n[111] = et),
      (n[112] = tt),
      (n[113] = nt),
      (n[114] = it))
    : (it = n[114]);
  let at;
  n[115] === c
    ? (at = n[116])
    : ((at = c.formatMessage({
        id: `chatgpt.translationBlock.result`,
        defaultMessage: `Translation`,
        description: `Accessible name of the read-only translated result in the ChatGPT translation block.`,
      })),
      (n[115] = c),
      (n[116] = at));
  let ot = We.has(k.split(`-`, 1)[0]) ? `rtl` : `auto`,
    st;
  n[117] !== c || n[118] !== K
    ? ((st = K
        ? (0, X.jsx)(`span`, {
            role: `status`,
            "aria-label": c.formatMessage({
              id: `chatgpt.translationBlock.translating`,
              defaultMessage: `Translating`,
              description: `Accessible status while an edited onboarding translation is loading; the previous output may still be visible.`,
            }),
            children: (0, X.jsx)(re, { as: `span` }),
          })
        : null),
      (n[117] = c),
      (n[118] = K),
      (n[119] = st))
    : (st = n[119]);
  let ct;
  n[120] !== J || n[121] !== K || n[122] !== at || n[123] !== ot || n[124] !== st
    ? ((ct = (0, X.jsxs)(`div`, {
        className: `flex-1 text-base leading-7 break-words whitespace-pre-wrap`,
        "aria-busy": K,
        "aria-label": at,
        "aria-live": `polite`,
        "aria-readonly": `true`,
        dir: ot,
        role: `textbox`,
        children: [J, st],
      })),
      (n[120] = J),
      (n[121] = K),
      (n[122] = at),
      (n[123] = ot),
      (n[124] = st),
      (n[125] = ct))
    : (ct = n[125]);
  let lt;
  n[126] === V
    ? (lt = n[127])
    : ((lt = V
        ? (0, X.jsx)(`div`, {
            role: `alert`,
            className: `flex items-center gap-2 text-sm text-secondary`,
            children: (0, X.jsx)(s, {
              id: `chatgpt.translationBlock.sourceTooLong`,
              defaultMessage: `Shorten the text to {limit, number} characters or fewer to translate`,
              description: `Shown when an edited translation block exceeds the translation limit. The user can edit the text to continue.`,
              values: { limit: Ue },
            }),
          })
        : null),
      (n[126] = V),
      (n[127] = lt));
  let ut;
  n[128] !== q || n[129] !== Ie || n[130] !== V
    ? ((ut =
        !V && q
          ? (0, X.jsxs)(`div`, {
              role: `alert`,
              className: `flex items-center gap-2 text-sm text-secondary`,
              children: [
                (0, X.jsx)(s, {
                  id: `chatgpt.translationBlock.failed`,
                  defaultMessage: `Couldn't translate this text`,
                  description: `Inline error when a ChatGPT translation block fails to load the new translation. The previous translation remains visible.`,
                }),
                (0, X.jsx)(t, {
                  color: `ghost`,
                  size: `compact`,
                  onClick: () => void Ie(),
                  children: (0, X.jsx)(s, {
                    id: `chatgpt.translationBlock.retry`,
                    defaultMessage: `Try again`,
                    description: `Button that retries the failed translation request in a ChatGPT translation block.`,
                  }),
                }),
              ],
            })
          : null),
      (n[128] = q),
      (n[129] = Ie),
      (n[130] = V),
      (n[131] = ut))
    : (ut = n[131]);
  let dt;
  n[132] === c
    ? (dt = n[133])
    : ((dt = c.formatMessage({
        id: `chatgpt.contentReferences.translation.copy.ariaLabel`,
        defaultMessage: `Copy translation`,
        description: `Accessible label for the icon button in a ChatGPT conversation translation card that copies the translated result to the clipboard.`,
      })),
      (n[132] = c),
      (n[133] = dt));
  let ft = !J,
    pt;
  n[134] !== J || n[135] !== W || n[136] !== o
    ? ((pt = (e) => (F(o, ke, W), ie(J.trim(), e))), (n[134] = J), (n[135] = W), (n[136] = o), (n[137] = pt))
    : (pt = n[137]);
  let mt;
  n[138] !== dt || n[139] !== ft || n[140] !== pt
    ? ((mt = (0, X.jsx)(ae, { ariaLabel: dt, iconOnly: !0, isDisabled: ft, onCopy: pt })),
      (n[138] = dt),
      (n[139] = ft),
      (n[140] = pt),
      (n[141] = mt))
    : (mt = n[141]);
  let ht = !J,
    gt,
    _t,
    vt;
  n[142] !== W || n[143] !== o
    ? ((gt = () => {
        ((p.current += 1), F(o, ye, { ...W, repeatCount: l(p.current) }));
      }),
      (_t = (e) => {
        e === `playing` && F(o, je, W);
      }),
      (vt = () => {
        F(o, we, W);
      }),
      (n[142] = W),
      (n[143] = o),
      (n[144] = gt),
      (n[145] = _t),
      (n[146] = vt))
    : ((gt = n[144]), (_t = n[145]), (vt = n[146]));
  let yt;
  n[147] === c
    ? (yt = n[148])
    : ((yt = c.formatMessage({
        id: `codex.chatgpt.contentReferences.translation.audio.error`,
        defaultMessage: `Unable to play translation audio`,
        description: `Error toast shown in Codex when the read-aloud action on a ChatGPT translation card cannot synthesize or play audio for the translated text.`,
      })),
      (n[147] = c),
      (n[148] = yt));
  let bt;
  n[149] !== J || n[150] !== c
    ? ((bt = c.formatMessage(
        {
          id: `codex.chatgpt.contentReferences.translation.audio.loading.ariaLabel`,
          defaultMessage: `Loading audio for {displayText}`,
          description: `Accessible label for the read-aloud button in a ChatGPT translation card shown inside Codex while translated text audio is loading. Placeholder {displayText} is the exact translated text visible in the card and may contain any language or script.`,
        },
        { displayText: J },
      )),
      (n[149] = J),
      (n[150] = c),
      (n[151] = bt))
    : (bt = n[151]);
  let xt;
  n[152] !== J || n[153] !== c
    ? ((xt = c.formatMessage(
        {
          id: `codex.chatgpt.contentReferences.translation.audio.play.ariaLabel`,
          defaultMessage: `Play audio for {displayText}`,
          description: `Accessible label for the read-aloud button in a ChatGPT translation card shown inside Codex. Activating it plays synthesized speech for the translated text. Placeholder {displayText} is the exact translated text visible in the card and may contain any language or script.`,
        },
        { displayText: J },
      )),
      (n[152] = J),
      (n[153] = c),
      (n[154] = xt))
    : (xt = n[154]);
  let St;
  n[155] !== J || n[156] !== c
    ? ((St = c.formatMessage(
        {
          id: `codex.chatgpt.contentReferences.translation.audio.stop.ariaLabel`,
          defaultMessage: `Stop audio for {displayText}`,
          description: `Accessible label for the stop button in a ChatGPT translation card shown inside Codex while translated text audio is playing. Placeholder {displayText} is the exact translated text visible in the card and may contain any language or script.`,
        },
        { displayText: J },
      )),
      (n[155] = J),
      (n[156] = c),
      (n[157] = St))
    : (St = n[157]);
  let Ct;
  n[158] !== bt || n[159] !== xt || n[160] !== St
    ? ((Ct = { loading: bt, play: xt, stop: St }), (n[158] = bt), (n[159] = xt), (n[160] = St), (n[161] = Ct))
    : (Ct = n[161]);
  let wt;
  n[162] !== J || n[163] !== k
    ? ((wt = (e) => de({ pronunciation_language: k, source: `translation`, text: J }, { signal: e })),
      (n[162] = J),
      (n[163] = k),
      (n[164] = wt))
    : (wt = n[164]);
  let Tt;
  n[165] !== Re ||
  n[166] !== ht ||
  n[167] !== gt ||
  n[168] !== _t ||
  n[169] !== vt ||
  n[170] !== yt ||
  n[171] !== Ct ||
  n[172] !== wt
    ? ((Tt = (0, X.jsx)(ge, {
        disabled: ht,
        onTogglePlayback: gt,
        onStatusChange: _t,
        onError: vt,
        errorMessage: yt,
        labels: Ct,
        playbackId: Re,
        synthesizeAudio: wt,
      })),
      (n[165] = Re),
      (n[166] = ht),
      (n[167] = gt),
      (n[168] = _t),
      (n[169] = vt),
      (n[170] = yt),
      (n[171] = Ct),
      (n[172] = wt),
      (n[173] = Tt))
    : (Tt = n[173]);
  let Et;
  n[174] !== mt || n[175] !== Tt
    ? ((Et = (0, X.jsxs)(`div`, {
        className: `absolute inset-x-4 bottom-4 flex items-center gap-2 select-none`,
        children: [mt, Tt],
      })),
      (n[174] = mt),
      (n[175] = Tt),
      (n[176] = Et))
    : (Et = n[176]);
  let Dt;
  n[177] !== ct || n[178] !== lt || n[179] !== ut || n[180] !== Et
    ? ((Dt = (0, X.jsxs)(`div`, {
        className: `relative flex min-h-45 min-w-0 flex-col rounded-3xl bg-secondary-soft px-6 pt-3 pb-16 text-default`,
        children: [ct, lt, ut, Et],
      })),
      (n[177] = ct),
      (n[178] = lt),
      (n[179] = ut),
      (n[180] = Et),
      (n[181] = Dt))
    : (Dt = n[181]);
  let Ot;
  n[182] !== it || n[183] !== Dt
    ? ((Ot = (0, X.jsxs)(`div`, { className: `grid grid-cols-1 gap-4 md:grid-cols-2`, children: [it, Dt] })),
      (n[182] = it),
      (n[183] = Dt),
      (n[184] = Ot))
    : (Ot = n[184]);
  let kt;
  n[185] !== $e || n[186] !== Ot
    ? ((kt = (0, X.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [$e, Ot] })),
      (n[185] = $e),
      (n[186] = Ot),
      (n[187] = kt))
    : (kt = n[187]);
  let At = !J,
    jt;
  n[188] !== w || n[189] !== r.source_language || n[190] !== L
    ? ((jt = !L && w ? w.sourceLanguage : Ae(r.source_language, `auto`)),
      (n[188] = w),
      (n[189] = r.source_language),
      (n[190] = L),
      (n[191] = jt))
    : (jt = n[191]);
  let Mt;
  n[192] !== w || n[193] !== r.target_language || n[194] !== L
    ? ((Mt = !L && w ? w.targetLanguage : Ae(r.target_language, `en`)),
      (n[192] = w),
      (n[193] = r.target_language),
      (n[194] = L),
      (n[195] = Mt))
    : (Mt = n[195]);
  let Nt;
  n[196] !== w || n[197] !== r.source_text || n[198] !== L
    ? ((Nt = !L && w ? w.sourceTextLength : r.source_text.trim().length),
      (n[196] = w),
      (n[197] = r.source_text),
      (n[198] = L),
      (n[199] = Nt))
    : (Nt = n[199]);
  let Pt;
  n[200] !== i || n[201] !== At || n[202] !== jt || n[203] !== Mt || n[204] !== Nt || n[205] !== a
    ? ((Pt = (0, X.jsx)(`div`, {
        className: `mt-1 flex justify-end`,
        children: (0, X.jsx)(Pe, {
          disabled: At,
          turnContext: a,
          sourceMessageId: i,
          sourceLanguage: jt,
          targetLanguage: Mt,
          sourceTextLength: Nt,
        }),
      })),
      (n[200] = i),
      (n[201] = At),
      (n[202] = jt),
      (n[203] = Mt),
      (n[204] = Nt),
      (n[205] = a),
      (n[206] = Pt))
    : (Pt = n[206]);
  let Ft;
  return (
    n[207] !== kt || n[208] !== Pt
      ? ((Ft = (0, X.jsxs)(`div`, {
          className: `not-prose my-3 w-full max-w-3xl min-w-0`,
          children: [kt, Pt],
        })),
        (n[207] = kt),
        (n[208] = Pt),
        (n[209] = Ft))
      : (Ft = n[209]),
    Ft
  );
}
function ze(e) {
  let n = (0, He.c)(30),
    { label: r, value: ee, allowAuto: i, disabled: a, onChange: o } = e,
    s = i !== void 0 && i,
    c = ne(),
    [l, te] = (0, Y.useState)(!1),
    [u, f] = (0, Y.useState)(``),
    { value: p } = H(`2360155027`);
  a && l && (te(!1), f(``));
  let m, g;
  if (n[0] !== s || n[1] !== c || n[2] !== p.target_language_codes || n[3] !== u || n[4] !== ee) {
    let e = new Intl.DisplayNames([c.locale], { type: `language` }),
      t = c.formatMessage({
        id: `chatgpt.contentReferences.translation.sourceLanguage.auto.label`,
        defaultMessage: `Detect language`,
        description: `Short source-language label in a translation card shown inside a ChatGPT conversation when the source language was detected automatically.`,
      });
    ((m = [
      ...new Set([
        ...(s ? [`auto`] : []),
        ...O(h().catch(``)).catch(Ce).parse(p.target_language_codes).map(Ve).filter(Be),
        `en`,
        ee,
      ]),
    ].map((n) => {
      let r;
      try {
        r =
          n === `auto`
            ? t
            : n === `hv`
              ? c.formatMessage({
                  id: `chatgpt.translationBlock.language.highValyrian`,
                  defaultMessage: `High Valyrian`,
                  description: `Name of the fictional High Valyrian language in the ChatGPT translation language picker.`,
                })
              : (e.of(n) ?? n);
      } catch {
        r = n;
      }
      return { code: n, name: r };
    })),
      (g = m.filter(
        (e) =>
          e.name.toLocaleLowerCase(c.locale).includes(u.trim().toLocaleLowerCase(c.locale)) ||
          e.code.toLowerCase().includes(u.trim().toLowerCase()),
      )),
      (n[0] = s),
      (n[1] = c),
      (n[2] = p.target_language_codes),
      (n[3] = u),
      (n[4] = ee),
      (n[5] = m),
      (n[6] = g));
  } else ((m = n[5]), (g = n[6]));
  let _ = g,
    v;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (e) => {
        (te(e), e || f(``));
      }),
      (n[7] = v))
    : (v = n[7]);
  let y = m.find((e) => e.code === ee)?.name,
    b;
  n[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = (0, X.jsx)(d, {})), (n[8] = b)) : (b = n[8]);
  let x;
  n[9] !== a || n[10] !== r || n[11] !== y
    ? ((x = (0, X.jsxs)(t, {
        className: `w-full justify-between`,
        "aria-label": r,
        color: `outlineSurface`,
        disabled: a,
        radius: `full`,
        size: `inputControl`,
        children: [y, b],
      })),
      (n[9] = a),
      (n[10] = r),
      (n[11] = y),
      (n[12] = x))
    : (x = n[12]);
  let S;
  n[13] === c
    ? (S = n[14])
    : ((S = c.formatMessage({
        id: `chatgpt.translationBlock.searchLanguage`,
        defaultMessage: `Search languages`,
        description: `Search input in the source or target language picker in a ChatGPT translation block.`,
      })),
      (n[13] = c),
      (n[14] = S));
  let C;
  n[15] !== u || n[16] !== S
    ? ((C = (0, X.jsx)(G.Input, { placeholder: S, value: u, onValueChange: f })),
      (n[15] = u),
      (n[16] = S),
      (n[17] = C))
    : (C = n[17]);
  let w;
  n[18] !== o || n[19] !== _
    ? ((w = (0, X.jsx)(G.List, {
        children: _.map((e) =>
          (0, X.jsx)(
            G.Item,
            {
              value: e.code,
              onSelect: () => {
                (o(e.code), te(!1), f(``));
              },
              children: e.name,
            },
            e.code,
          ),
        ),
      })),
      (n[18] = o),
      (n[19] = _),
      (n[20] = w))
    : (w = n[20]);
  let T;
  n[21] !== r || n[22] !== C || n[23] !== w
    ? ((T = (0, X.jsxs)(G.Root, { label: r, children: [C, w] })),
      (n[21] = r),
      (n[22] = C),
      (n[23] = w),
      (n[24] = T))
    : (T = n[24]);
  let E;
  return (
    n[25] !== a || n[26] !== l || n[27] !== T || n[28] !== x
      ? ((E = (0, X.jsx)(fe, {
          contentWidth: `menu`,
          disabled: a,
          open: l,
          onOpenChange: v,
          triggerButton: x,
          children: T,
        })),
        (n[25] = a),
        (n[26] = l),
        (n[27] = T),
        (n[28] = x),
        (n[29] = E))
      : (E = n[29]),
    E
  );
}
function Be(e) {
  return e !== ``;
}
function Ve(e) {
  return Ae(e, ``);
}
var He, Y, X, Ue, We;
function Ge() {
  return (Ge = e(() => {
    ((He = A()),
      ce(),
      xe(),
      b(),
      f(),
      (Y = N()),
      E(),
      i(),
      he(),
      me(),
      B(),
      k(),
      U(),
      S(),
      m(),
      w(),
      P(),
      I(),
      j(),
      R(),
      T(),
      z(),
      Oe(),
      J(),
      (X = M()),
      (Ue = 8e3),
      (We = new Set([`ar`, `fa`, `he`, `ur`])));
  }))();
}
function Ke(e) {
  let t = (0, qe.c)(39),
    { state: n, sourceMessageId: r, turnContext: i } = e,
    a = te(ee),
    [o, c] = (0, Z.useState)(n.tab),
    l = (0, Z.useId)(),
    u;
  t[0] === o
    ? (u = t[1])
    : ((u =
        $.find((e) => {
          let { key: t } = e;
          return t === o;
        }) ?? $[0]),
      (t[0] = o),
      (t[1] = u));
  let d = u,
    f = `${l}-${d.key}`,
    p = o === `professional_email`,
    m = p ? n.email : n.message,
    h = n.ask_me_label,
    g;
  t[2] !== a || t[3] !== o || t[4] !== r || t[5] !== i
    ? ((g = (e) => {
        try {
          F(a, pe, {
            eventName: `chatgpt_conversational_onboarding_tab_clicked`,
            eventData: JSON.stringify({
              renderer: `dil`,
              level: `l2`,
              use_case: `write`,
              source: `conversational_onboarding_interactive_write`,
              tab_id: e,
              previous_tab_id: o,
              turn_message_id: r ?? i.messageId,
            }),
          });
        } catch {}
      }),
      (t[2] = a),
      (t[3] = o),
      (t[4] = r),
      (t[5] = i),
      (t[6] = g))
    : (g = t[6]);
  let ne;
  t[7] !== n || t[8] !== l
    ? ((ne = $.map((e) => {
        let { key: t, label: r } = e;
        return { key: t, name: n[r], panelId: `${l}-${t}` };
      })),
      (t[7] = n),
      (t[8] = l),
      (t[9] = ne))
    : (ne = t[9]);
  let _;
  t[10] !== o || t[11] !== n.ask_me_label || t[12] !== g || t[13] !== ne
    ? ((_ = (0, Q.jsx)(L, {
        className: `flex-wrap`,
        ariaLabel: h,
        onSelect: c,
        onTabClick: g,
        selectedKey: o,
        tabs: ne,
        variant: `choice`,
      })),
      (t[10] = o),
      (t[11] = n.ask_me_label),
      (t[12] = g),
      (t[13] = ne),
      (t[14] = _))
    : (_ = t[14]);
  let v = `${f}-tab`,
    y;
  t[15] === n.ask_me_label
    ? (y = t[16])
    : ((y = (0, Q.jsx)(`div`, { className: `text-sm font-medium text-secondary`, children: n.ask_me_label })),
      (t[15] = n.ask_me_label),
      (t[16] = y));
  let b = n[d.question],
    x;
  t[17] === b
    ? (x = t[18])
    : ((x = (0, Q.jsx)(`div`, {
        className: `text-lg font-semibold text-default`,
        children: (0, Q.jsx)(s, {
          id: `chatgptConversations.onboardingWriting.quotedQuestion`,
          defaultMessage: `"{question}"`,
          description: `Example question shown below the selected Translation, Email, or Message tab during ChatGPT conversational onboarding. The question placeholder is the complete example question, already localized by the server. Preserve the placeholder unchanged and adapt only the surrounding quotation marks and spacing to the locale.`,
          values: { question: b },
        }),
      })),
      (t[17] = b),
      (t[18] = x));
  let S;
  t[19] !== y || t[20] !== x
    ? ((S = (0, Q.jsxs)(`div`, { className: `flex w-full flex-col`, children: [y, x] })),
      (t[19] = y),
      (t[20] = x),
      (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Q.jsx)(`div`, { className: `w-full border-t border-subtle`, "aria-hidden": `true` })),
      (t[22] = C))
    : (C = t[22]);
  let w;
  t[23] !== m ||
  t[24] !== p ||
  t[25] !== o ||
  t[26] !== r ||
  t[27] !== n.email ||
  t[28] !== n.translation ||
  t[29] !== i
    ? ((w =
        o === `translation`
          ? (0, Q.jsx)(Re, { translation: n.translation, sourceMessageId: r, turnContext: i })
          : (0, Q.jsx)(
              Ne,
              {
                id: m.id,
                directive: {
                  id: m.id,
                  bodyContent: m.content,
                  content: m.content,
                  emailMetadata: {
                    bcc: void 0,
                    cc: void 0,
                    recipient: void 0,
                    subject: p ? n.email.subject : void 0,
                  },
                  metadata: void 0,
                  title: void 0,
                  toneSections: null,
                  variant: p ? `email` : `chat_message`,
                },
                index: +!p,
                isLastNodeInMessage: !0,
                sourceMessageId: r,
                turnContext: i,
              },
              o,
            )),
      (t[23] = m),
      (t[24] = p),
      (t[25] = o),
      (t[26] = r),
      (t[27] = n.email),
      (t[28] = n.translation),
      (t[29] = i),
      (t[30] = w))
    : (w = t[30]);
  let T;
  t[31] !== f || t[32] !== S || t[33] !== w || t[34] !== v
    ? ((T = (0, Q.jsxs)(`div`, {
        id: f,
        className: `flex w-full flex-col gap-3 py-4`,
        role: `tabpanel`,
        "aria-labelledby": v,
        children: [S, C, w],
      })),
      (t[31] = f),
      (t[32] = S),
      (t[33] = w),
      (t[34] = v),
      (t[35] = T))
    : (T = t[35]);
  let E;
  return (
    t[36] !== T || t[37] !== _
      ? ((E = (0, Q.jsxs)(`div`, {
          className: `not-prose mt-4 flex w-full min-w-0 flex-col pb-3`,
          children: [_, T],
        })),
        (t[36] = T),
        (t[37] = _),
        (t[38] = E))
      : (E = t[38]),
    E
  );
}
var qe, Z, Q, $;
function Je() {
  return (Je = e(() => {
    ((qe = A()),
      W(),
      f(),
      (Z = N()),
      E(),
      V(),
      I(),
      j(),
      Me(),
      Ge(),
      (Q = M()),
      ($ = [
        { key: `translation`, label: `translation_tab_label`, question: `translation_question` },
        { key: `professional_email`, label: `email_tab_label`, question: `email_question` },
        { key: `birthday_message`, label: `message_tab_label`, question: `message_question` },
      ]));
  }))();
}
Je();
export { Ke as ConversationalOnboardingWriting };
//# sourceMappingURL=renderer-e236823c428d.js.map
