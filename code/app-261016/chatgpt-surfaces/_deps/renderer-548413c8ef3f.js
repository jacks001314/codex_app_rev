import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  FBt as i,
  HFt as a,
  Jx as o,
  LNt as s,
  Mst as c,
  NO as l,
  OT as u,
  PBt as d,
  PO as f,
  Qit as p,
  Qst as m,
  TY as h,
  VRt as g,
  Vrt as _,
  XOt as v,
  Y3 as y,
  YOt as b,
  Yx as x,
  Z3 as S,
  ZSt as C,
  _D as w,
  e6 as T,
  eV as E,
  fD as D,
  gD as O,
  hD as ee,
  jst as k,
  kH as A,
  kLt as j,
  kT as M,
  mD as te,
  okt as ne,
  qrt as N,
  tkt as P,
  vst as re,
  yst as ie,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as F,
  Hcn as I,
  QLn as ae,
  Sjr as L,
  Ucn as oe,
  Ydr as R,
  do as z,
  iRr as se,
  tyr as B,
  uo as V,
  xMr as H,
  xjr as ce,
  yMr as U,
} from "./app-initial-ad16eaadf81f.js";
import {
  $s as W,
  Gl as G,
  Jn as le,
  Kl as ue,
  Qs as de,
  Wl as fe,
  Yn as pe,
  Zn as me,
} from "./app-primary-3e00728c2a4c.js";
import { n as he, t as ge } from "./chatgpt-audio-playback-button-85cac1e0f7ea.js";
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
} from "./translation-analytics-6fad1fc783bf.js";
import { r as Me, t as Ne } from "./quick-chat-writing-block-adapter-5b8731f75f65.js";
function Pe(e) {
  let t = (0, Fe.c)(56),
    {
      disabled: r,
      turnContext: i,
      sourceMessageId: a,
      sourceLanguage: o,
      targetLanguage: s,
      sourceTextLength: c,
    } = e,
    l = n(m),
    d = ne(),
    f = (0, K.useId)(),
    [p, h] = (0, K.useState)(!1),
    [g, _] = (0, K.useState)(``),
    v;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((v = []), (t[0] = v)) : (v = t[0]);
  let [b, x] = (0, K.useState)(v),
    S;
  t[1] !== g || t[2] !== b || t[3] !== o || t[4] !== a || t[5] !== c || t[6] !== s || t[7] !== i
    ? ((S = () =>
        se.safePost(`/conversation/message/translation-blocks/feedback`, {
          requestBody: {
            message_id: a ?? i.messageId ?? `unknown`,
            conversation_id: i.browserConversationId ?? i.conversationId,
            metadata: {
              source_language: o,
              target_language: s,
              source_text_length: c,
              version: `trigger_v5`,
            },
            feedback: g.trim(),
            checked_reasons: b.length > 0 ? b : void 0,
          },
        })),
      (t[1] = g),
      (t[2] = b),
      (t[3] = o),
      (t[4] = a),
      (t[5] = c),
      (t[6] = s),
      (t[7] = i),
      (t[8] = S))
    : (S = t[8]);
  let C, w;
  t[9] !== d || t[10] !== l
    ? ((C = () => {
        (h(!1),
          _(``),
          x([]),
          l
            .get(N)
            .success(
              d.formatMessage({
                id: `chatgpt.translationBlock.feedback.success`,
                defaultMessage: `Your feedback has been submitted`,
                description: `Toast when feedback for the onboarding translation succeeds.`,
              }),
            ));
      }),
      (w = () => {
        l.get(N).danger(
          d.formatMessage({
            id: `chatgpt.translationBlock.feedback.error`,
            defaultMessage: `Couldn't submit feedback. Please try again`,
            description: `Toast when feedback for the onboarding translation fails. The form remains available to retry.`,
          }),
          { errorAnalytics: { toastId: `chatgpt.translationBlock.feedback.error` } },
        );
      }),
      (t[9] = d),
      (t[10] = l),
      (t[11] = C),
      (t[12] = w))
    : ((C = t[11]), (w = t[12]));
  let T;
  t[13] !== S || t[14] !== C || t[15] !== w
    ? ((T = { mutationFn: S, onSuccess: C, onError: w }), (t[13] = S), (t[14] = C), (t[15] = w), (t[16] = T))
    : (T = t[16]);
  let { mutate: E, isPending: k } = ie(T);
  r && p && h(!1);
  let A;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, q.jsx)(P, {
        id: `chatgpt.translationBlock.feedback.open`,
        defaultMessage: `Give feedback`,
        description: `Button beneath the onboarding translation to report whether the displayed translation is useful or correct.`,
      })),
      (t[17] = A))
    : (A = t[17]);
  let j;
  t[18] === r
    ? (j = t[19])
    : ((j = (0, q.jsx)(O, {
        asChild: !0,
        children: (0, q.jsx)(y, { color: `ghostTertiary`, disabled: r, children: A }),
      })),
      (t[18] = r),
      (t[19] = j));
  let M;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, q.jsx)(ee, {
        children: (0, q.jsx)(P, {
          id: `chatgpt.translationBlock.feedback.title`,
          defaultMessage: `Help improve translations in ChatGPT`,
          description: `Title for the feedback form about the translation displayed in an onboarding example.`,
        }),
      })),
      (t[20] = M))
    : (M = t[20]);
  let re;
  t[21] !== r || t[22] !== g || t[23] !== k || t[24] !== E
    ? ((re = (e) => {
        (e.preventDefault(), !r && g.trim() !== `` && !k && E());
      }),
      (t[21] = r),
      (t[22] = g),
      (t[23] = k),
      (t[24] = E),
      (t[25] = re))
    : (re = t[25]);
  let F;
  t[26] === b
    ? (F = t[27])
    : ((F = Le.map((e) => {
        let t = b.includes(e);
        return (0, q.jsxs)(
          `label`,
          {
            className: `flex cursor-interaction items-center justify-between gap-3 text-sm`,
            children: [
              (0, q.jsx)(P, { ...Ie[e] }),
              (0, q.jsx)(`div`, {
                className: `relative`,
                children: (0, q.jsx)(u, {
                  checked: t,
                  onCheckedChange: (t) => {
                    x((n) => (t ? [...n, e] : n.filter((t) => t !== e)));
                  },
                }),
              }),
            ],
          },
          e,
        );
      })),
      (t[26] = b),
      (t[27] = F));
  let I;
  t[28] === F
    ? (I = t[29])
    : ((I = (0, q.jsx)(`fieldset`, { className: `flex flex-col gap-3`, children: F })),
      (t[28] = F),
      (t[29] = I));
  let L;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, q.jsx)(P, {
        id: `chatgpt.translationBlock.feedback.additional`,
        defaultMessage: `Additional feedback`,
        description: `Accessible label for text feedback about the translation in an onboarding example.`,
      })),
      (t[30] = L))
    : (L = t[30]);
  let oe;
  t[31] === f
    ? (oe = t[32])
    : ((oe = (0, q.jsx)(`label`, { className: `sr-only`, htmlFor: f, children: L })),
      (t[31] = f),
      (t[32] = oe));
  let R;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (e) => _(e.currentTarget.value)), (t[33] = R))
    : (R = t[33]);
  let z;
  t[34] === d
    ? (z = t[35])
    : ((z = d.formatMessage({
        id: `chatgpt.translationBlock.feedback.placeholder`,
        defaultMessage: `What would you like us to know?`,
        description: `Placeholder asking for feedback about the displayed onboarding translation.`,
      })),
      (t[34] = d),
      (t[35] = z));
  let B;
  t[36] !== g || t[37] !== z || t[38] !== f
    ? ((B = (0, q.jsx)(ae, {
        id: f,
        maxLength: 1600,
        onChange: R,
        placeholder: z,
        rows: 3,
        value: g,
        variant: `feedback`,
      })),
      (t[36] = g),
      (t[37] = z),
      (t[38] = f),
      (t[39] = B))
    : (B = t[39]);
  let V;
  t[40] === g ? (V = t[41]) : ((V = g.trim()), (t[40] = g), (t[41] = V));
  let H = V === ``,
    ce;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = (0, q.jsx)(P, {
        id: `chatgpt.translationBlock.feedback.submit`,
        defaultMessage: `Send feedback`,
        description: `Submit the translation feedback form for an onboarding example.`,
      })),
      (t[42] = ce))
    : (ce = t[42]);
  let U;
  t[43] !== k || t[44] !== H
    ? ((U = (0, q.jsx)(y, {
        color: `primary`,
        disabled: H,
        loading: k,
        size: `dialog`,
        type: `submit`,
        children: ce,
      })),
      (t[43] = k),
      (t[44] = H),
      (t[45] = U))
    : (U = t[45]);
  let W;
  t[46] !== I || t[47] !== oe || t[48] !== B || t[49] !== U || t[50] !== re
    ? ((W = (0, q.jsx)(te, {
        align: `end`,
        side: `bottom`,
        size: `large`,
        children: (0, q.jsxs)(`div`, {
          className: `flex flex-col p-3`,
          children: [
            M,
            (0, q.jsxs)(`form`, {
              className: `mt-3 flex flex-col gap-3 border-t border-subtle pt-3`,
              onSubmit: re,
              children: [I, oe, B, U],
            }),
          ],
        }),
      })),
      (t[46] = I),
      (t[47] = oe),
      (t[48] = B),
      (t[49] = U),
      (t[50] = re),
      (t[51] = W))
    : (W = t[51]);
  let G;
  return (
    t[52] !== p || t[53] !== W || t[54] !== j
      ? ((G = (0, q.jsxs)(D, { open: p, onOpenChange: h, children: [j, W] })),
        (t[52] = p),
        (t[53] = W),
        (t[54] = j),
        (t[55] = G))
      : (G = t[55]),
    G
  );
}
var Fe, K, q, Ie, Le;
function J() {
  return (J = e(() => {
    ((Fe = d()),
      re(),
      C(),
      (K = i()),
      v(),
      B(),
      S(),
      M(),
      w(),
      F(),
      _(),
      r(),
      (q = s()),
      (Ie = b({
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
  let r = (0, He.c)(210),
    { translation: i, sourceMessageId: a, turnContext: s } = e,
    u = n(m),
    d = ne(),
    { isStreaming: f } = s,
    h = (0, Y.useId)(),
    g = (0, Y.useRef)(0),
    _ = (0, Y.useRef)(0),
    v = (0, Y.useRef)(!1),
    b = (0, Y.useRef)(`source_text_edit`),
    [x, S] = (0, Y.useState)(null),
    [C, w] = (0, Y.useState)(null),
    [T, D] = (0, Y.useState)(null),
    [O, ee] = (0, Y.useState)(null),
    k;
  r[0] !== x || r[1] !== i.source_language
    ? ((k = x ?? Ae(i.source_language, `auto`)), (r[0] = x), (r[1] = i.source_language), (r[2] = k))
    : (k = r[2]);
  let A = k,
    j;
  r[3] !== C || r[4] !== i.target_language
    ? ((j = C ?? Ae(i.target_language, `en`)), (r[3] = C), (r[4] = i.target_language), (r[5] = j))
    : (j = r[5]);
  let M = j,
    te;
  r[6] !== T || r[7] !== i.source_text
    ? ((te = T ?? i.source_text.trim()), (r[6] = T), (r[7] = i.source_text), (r[8] = te))
    : (te = r[8]);
  let N = te,
    re = oe(N, 500),
    ie;
  r[9] === i.translated_text
    ? (ie = r[10])
    : ((ie = i.translated_text.trim()), (r[9] = i.translated_text), (r[10] = ie));
  let F = ie,
    I;
  r[11] !== A ||
  r[12] !== N ||
  r[13] !== M ||
  r[14] !== i.source_language ||
  r[15] !== i.source_text ||
  r[16] !== i.target_language
    ? ((I =
        A === Ae(i.source_language, `auto`) &&
        M === Ae(i.target_language, `en`) &&
        N.trim() === i.source_text.trim()),
      (r[11] = A),
      (r[12] = N),
      (r[13] = M),
      (r[14] = i.source_language),
      (r[15] = i.source_text),
      (r[16] = i.target_language),
      (r[17] = I))
    : (I = r[17]);
  let L = I,
    R;
  r[18] === N ? (R = r[19]) : ((R = N.trim()), (r[18] = N), (r[19] = R));
  let z = R.length > 0,
    B;
  r[20] !== N || r[21] !== L
    ? ((B = !L && Array.from(N.trim()).length > Ue), (r[20] = N), (r[21] = L), (r[22] = B))
    : (B = r[22]);
  let V = B,
    ce = a ?? s.messageId,
    U;
  r[23] === N ? (U = r[24]) : ((U = p(N.trim().length) ?? p(0)), (r[23] = N), (r[24] = U));
  let W;
  r[25] !== A || r[26] !== ce || r[27] !== U || r[28] !== M
    ? ((W = {
        messageId: ce,
        experimentVersion: `trigger_v5`,
        sourceLanguage: A,
        destinationLanguage: M,
        sourceTextLength: U,
      }),
      (r[25] = A),
      (r[26] = ce),
      (r[27] = U),
      (r[28] = M),
      (r[29] = W))
    : (W = r[29]);
  let G = W,
    le;
  r[30] !== f || r[31] !== i.source_text || r[32] !== s.trackShownImpressions
    ? ((le = !f && i.source_text.trim().length > 0 && s.trackShownImpressions !== !1),
      (r[30] = f),
      (r[31] = i.source_text),
      (r[32] = s.trackShownImpressions),
      (r[33] = le))
    : (le = r[33]);
  let ue = le,
    de;
  r[34] !== G || r[35] !== u
    ? ((de = () => {
        v.current || ((v.current = !0), H(u, De, G));
      }),
      (r[34] = G),
      (r[35] = u),
      (r[36] = de))
    : (de = r[36]);
  let fe = (0, Y.useEffectEvent)(de),
    he;
  r[37] !== fe || r[38] !== ue
    ? ((he = () => {
        ue && fe();
      }),
      (r[37] = fe),
      (r[38] = ue),
      (r[39] = he))
    : (he = r[39]);
  let xe;
  (r[40] === ue ? (xe = r[41]) : ((xe = [ue]), (r[40] = ue), (r[41] = xe)), (0, Y.useEffect)(he, xe));
  let Ce;
  r[42] === N ? (Ce = r[43]) : ((Ce = N.trim()), (r[42] = N), (r[43] = Ce));
  let Oe;
  r[44] !== h || r[45] !== f || r[46] !== A || r[47] !== Ce || r[48] !== M
    ? ((Oe = [`conversational-onboarding-writing-translation`, h, A, M, Ce, f]),
      (r[44] = h),
      (r[45] = f),
      (r[46] = A),
      (r[47] = Ce),
      (r[48] = M),
      (r[49] = Oe))
    : (Oe = r[49]);
  let Me = !f && z && !V && N === re && !L,
    Ne;
  r[50] !== G || r[51] !== u || r[52] !== A || r[53] !== N || r[54] !== M || r[55] !== i.source_text
    ? ((Ne = async (e) => {
        let { signal: t } = e;
        ((g.current += 1),
          H(u, Te, {
            ...G,
            requestCount: p(g.current),
            sourceTextChangedFromInitial: N.trim() !== i.source_text.trim(),
            triggerReason: b.current,
          }));
        try {
          let e = await se.safePost(`/translation-block/translate`, {
            requestBody: {
              text: N.trim(),
              sourceLanguageCode: A === `auto` ? void 0 : A,
              targetLanguageCode: M,
            },
            signal: AbortSignal.any([t, AbortSignal.timeout(75e3)]),
          });
          return (
            t.aborted ||
              (ee({ text: e.text, sourceLanguage: A, targetLanguage: M, sourceTextLength: N.trim().length }),
              H(u, be, G)),
            e
          );
        } catch (e) {
          let n = e;
          throw (t.aborted || H(u, ve, G), n);
        }
      }),
      (r[50] = G),
      (r[51] = u),
      (r[52] = A),
      (r[53] = N),
      (r[54] = M),
      (r[55] = i.source_text),
      (r[56] = Ne))
    : (Ne = r[56]);
  let Fe;
  r[57] !== Oe || r[58] !== Me || r[59] !== Ne
    ? ((Fe = { queryKey: Oe, enabled: Me, staleTime: 1 / 0, gcTime: 0, retry: !1, queryFn: Ne }),
      (r[57] = Oe),
      (r[58] = Me),
      (r[59] = Ne),
      (r[60] = Fe))
    : (Fe = r[60]);
  let { isFetching: K, isError: q, refetch: Ie } = c(Fe),
    Le = L ? F : (O?.text ?? F),
    J = z ? Le : ``,
    Re = `translation:${h}:${M}:${J}`,
    Be,
    Ve;
  (r[61] !== Re || r[62] !== u
    ? ((Be = () => () => pe(u, Re)), (Ve = [u, Re]), (r[61] = Re), (r[62] = u), (r[63] = Be), (r[64] = Ve))
    : ((Be = r[63]), (Ve = r[64])),
    (0, Y.useEffect)(Be, Ve));
  let Ge = K || A === `auto` || A === M,
    Ke;
  r[65] === d
    ? (Ke = r[66])
    : ((Ke = d.formatMessage({
        id: `chatgpt.translationBlock.sourceLanguage`,
        defaultMessage: `Source language`,
        description: `Accessible name of the language picker for the input to the ChatGPT translation block.`,
      })),
      (r[65] = d),
      (r[66] = Ke));
  let qe;
  r[67] !== G || r[68] !== u || r[69] !== A
    ? ((qe = (e) => {
        e !== A &&
          (H(u, Ee, { ...G, fromLanguage: A, toLanguage: e }), (b.current = `source_language_change`), S(e));
      }),
      (r[67] = G),
      (r[68] = u),
      (r[69] = A),
      (r[70] = qe))
    : (qe = r[70]);
  let Z;
  r[71] !== K || r[72] !== A || r[73] !== Ke || r[74] !== qe
    ? ((Z = (0, X.jsx)(ze, { label: Ke, value: A, allowAuto: !0, disabled: K, onChange: qe })),
      (r[71] = K),
      (r[72] = A),
      (r[73] = Ke),
      (r[74] = qe),
      (r[75] = Z))
    : (Z = r[75]);
  let Q;
  r[76] === d
    ? (Q = r[77])
    : ((Q = d.formatMessage({
        id: `chatgpt.translationBlock.swap`,
        defaultMessage: `Swap languages`,
        description: `Accessible name for the button that swaps the source and translated languages and translates in the other direction.`,
      })),
      (r[76] = d),
      (r[77] = Q));
  let $;
  r[78] !== J || r[79] !== G || r[80] !== u || r[81] !== A || r[82] !== N || r[83] !== M
    ? (($ = () => {
        (H(u, Se, G), (b.current = `swap_language`));
        let e = J.trim() ? J : N;
        (S(M),
          w(A),
          D(e),
          ee({ text: ``, sourceLanguage: M, targetLanguage: A, sourceTextLength: e.trim().length }));
      }),
      (r[78] = J),
      (r[79] = G),
      (r[80] = u),
      (r[81] = A),
      (r[82] = N),
      (r[83] = M),
      (r[84] = $))
    : ($ = r[84]);
  let Je;
  r[85] === Symbol.for(`react.memo_cache_sentinel`) ? ((Je = (0, X.jsx)(E, {})), (r[85] = Je)) : (Je = r[85]);
  let Ye;
  r[86] !== Ge || r[87] !== Q || r[88] !== $
    ? ((Ye = (0, X.jsx)(y, {
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
      (r[86] = Ge),
      (r[87] = Q),
      (r[88] = $),
      (r[89] = Ye))
    : (Ye = r[89]);
  let Xe;
  r[90] === d
    ? (Xe = r[91])
    : ((Xe = d.formatMessage({
        id: `chatgpt.translationBlock.targetLanguage`,
        defaultMessage: `Target language`,
        description: `Accessible name of the picker for the translated output language in the ChatGPT translation block.`,
      })),
      (r[90] = d),
      (r[91] = Xe));
  let Ze;
  r[92] !== G || r[93] !== u || r[94] !== M
    ? ((Ze = (e) => {
        e !== M &&
          (H(u, _e, { ...G, fromLanguage: M, toLanguage: e }),
          (b.current = `destination_language_change`),
          w(e));
      }),
      (r[92] = G),
      (r[93] = u),
      (r[94] = M),
      (r[95] = Ze))
    : (Ze = r[95]);
  let Qe;
  r[96] !== K || r[97] !== Xe || r[98] !== Ze || r[99] !== M
    ? ((Qe = (0, X.jsx)(ze, { label: Xe, value: M, disabled: K, onChange: Ze })),
      (r[96] = K),
      (r[97] = Xe),
      (r[98] = Ze),
      (r[99] = M),
      (r[100] = Qe))
    : (Qe = r[100]);
  let $e;
  r[101] !== Z || r[102] !== Ye || r[103] !== Qe
    ? (($e = (0, X.jsxs)(`div`, {
        className: `grid grid-cols-1 items-center gap-3 select-none md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]`,
        children: [Z, Ye, Qe],
      })),
      (r[101] = Z),
      (r[102] = Ye),
      (r[103] = Qe),
      (r[104] = $e))
    : ($e = r[104]);
  let et;
  r[105] === d
    ? (et = r[106])
    : ((et = d.formatMessage({
        id: `chatgpt.translationBlock.sourceText`,
        defaultMessage: `Text to translate`,
        description: `Accessible name and placeholder of the editable source text in a ChatGPT translation block.`,
      })),
      (r[105] = d),
      (r[106] = et));
  let tt;
  r[107] === d
    ? (tt = r[108])
    : ((tt = d.formatMessage({
        id: `chatgpt.translationBlock.sourcePlaceholder`,
        defaultMessage: `Enter text`,
        description: `Placeholder in an empty ChatGPT translation block source text field.`,
      })),
      (r[107] = d),
      (r[108] = tt));
  let nt = We.has(A.split(`-`, 1)[0]) ? `rtl` : `auto`,
    rt;
  r[109] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((rt = (e) => {
        ((b.current = `source_text_edit`), D(e.target.value));
      }),
      (r[109] = rt))
    : (rt = r[109]);
  let it;
  r[110] !== N || r[111] !== et || r[112] !== tt || r[113] !== nt
    ? ((it = (0, X.jsx)(ae, {
        "aria-label": et,
        placeholder: tt,
        dir: nt,
        value: N,
        variant: `comparison`,
        onChange: rt,
      })),
      (r[110] = N),
      (r[111] = et),
      (r[112] = tt),
      (r[113] = nt),
      (r[114] = it))
    : (it = r[114]);
  let at;
  r[115] === d
    ? (at = r[116])
    : ((at = d.formatMessage({
        id: `chatgpt.translationBlock.result`,
        defaultMessage: `Translation`,
        description: `Accessible name of the read-only translated result in the ChatGPT translation block.`,
      })),
      (r[115] = d),
      (r[116] = at));
  let ot = We.has(M.split(`-`, 1)[0]) ? `rtl` : `auto`,
    st;
  r[117] !== d || r[118] !== K
    ? ((st = K
        ? (0, X.jsx)(`span`, {
            role: `status`,
            "aria-label": d.formatMessage({
              id: `chatgpt.translationBlock.translating`,
              defaultMessage: `Translating`,
              description: `Accessible status while an edited onboarding translation is loading; the previous output may still be visible.`,
            }),
            children: (0, X.jsx)(t, { as: `span` }),
          })
        : null),
      (r[117] = d),
      (r[118] = K),
      (r[119] = st))
    : (st = r[119]);
  let ct;
  r[120] !== J || r[121] !== K || r[122] !== at || r[123] !== ot || r[124] !== st
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
      (r[120] = J),
      (r[121] = K),
      (r[122] = at),
      (r[123] = ot),
      (r[124] = st),
      (r[125] = ct))
    : (ct = r[125]);
  let lt;
  r[126] === V
    ? (lt = r[127])
    : ((lt = V
        ? (0, X.jsx)(`div`, {
            role: `alert`,
            className: `flex items-center gap-2 text-sm text-secondary`,
            children: (0, X.jsx)(P, {
              id: `chatgpt.translationBlock.sourceTooLong`,
              defaultMessage: `Shorten the text to {limit, number} characters or fewer to translate`,
              description: `Shown when an edited translation block exceeds the translation limit. The user can edit the text to continue.`,
              values: { limit: Ue },
            }),
          })
        : null),
      (r[126] = V),
      (r[127] = lt));
  let ut;
  r[128] !== q || r[129] !== Ie || r[130] !== V
    ? ((ut =
        !V && q
          ? (0, X.jsxs)(`div`, {
              role: `alert`,
              className: `flex items-center gap-2 text-sm text-secondary`,
              children: [
                (0, X.jsx)(P, {
                  id: `chatgpt.translationBlock.failed`,
                  defaultMessage: `Couldn't translate this text`,
                  description: `Inline error when a ChatGPT translation block fails to load the new translation. The previous translation remains visible.`,
                }),
                (0, X.jsx)(y, {
                  color: `ghost`,
                  size: `compact`,
                  onClick: () => void Ie(),
                  children: (0, X.jsx)(P, {
                    id: `chatgpt.translationBlock.retry`,
                    defaultMessage: `Try again`,
                    description: `Button that retries the failed translation request in a ChatGPT translation block.`,
                  }),
                }),
              ],
            })
          : null),
      (r[128] = q),
      (r[129] = Ie),
      (r[130] = V),
      (r[131] = ut))
    : (ut = r[131]);
  let dt;
  r[132] === d
    ? (dt = r[133])
    : ((dt = d.formatMessage({
        id: `chatgpt.contentReferences.translation.copy.ariaLabel`,
        defaultMessage: `Copy translation`,
        description: `Accessible label for the icon button in a ChatGPT conversation translation card that copies the translated result to the clipboard.`,
      })),
      (r[132] = d),
      (r[133] = dt));
  let ft = !J,
    pt;
  r[134] !== J || r[135] !== G || r[136] !== u
    ? ((pt = (e) => (H(u, ke, G), l(J.trim(), e))), (r[134] = J), (r[135] = G), (r[136] = u), (r[137] = pt))
    : (pt = r[137]);
  let mt;
  r[138] !== dt || r[139] !== ft || r[140] !== pt
    ? ((mt = (0, X.jsx)(o, { ariaLabel: dt, iconOnly: !0, isDisabled: ft, onCopy: pt })),
      (r[138] = dt),
      (r[139] = ft),
      (r[140] = pt),
      (r[141] = mt))
    : (mt = r[141]);
  let ht = !J,
    gt,
    _t,
    vt;
  r[142] !== G || r[143] !== u
    ? ((gt = () => {
        ((_.current += 1), H(u, ye, { ...G, repeatCount: p(_.current) }));
      }),
      (_t = (e) => {
        e === `playing` && H(u, je, G);
      }),
      (vt = () => {
        H(u, we, G);
      }),
      (r[142] = G),
      (r[143] = u),
      (r[144] = gt),
      (r[145] = _t),
      (r[146] = vt))
    : ((gt = r[144]), (_t = r[145]), (vt = r[146]));
  let yt;
  r[147] === d
    ? (yt = r[148])
    : ((yt = d.formatMessage({
        id: `codex.chatgpt.contentReferences.translation.audio.error`,
        defaultMessage: `Unable to play translation audio`,
        description: `Error toast shown in Codex when the read-aloud action on a ChatGPT translation card cannot synthesize or play audio for the translated text.`,
      })),
      (r[147] = d),
      (r[148] = yt));
  let bt;
  r[149] !== J || r[150] !== d
    ? ((bt = d.formatMessage(
        {
          id: `codex.chatgpt.contentReferences.translation.audio.loading.ariaLabel`,
          defaultMessage: `Loading audio for {displayText}`,
          description: `Accessible label for the read-aloud button in a ChatGPT translation card shown inside Codex while translated text audio is loading. Placeholder {displayText} is the exact translated text visible in the card and may contain any language or script.`,
        },
        { displayText: J },
      )),
      (r[149] = J),
      (r[150] = d),
      (r[151] = bt))
    : (bt = r[151]);
  let xt;
  r[152] !== J || r[153] !== d
    ? ((xt = d.formatMessage(
        {
          id: `codex.chatgpt.contentReferences.translation.audio.play.ariaLabel`,
          defaultMessage: `Play audio for {displayText}`,
          description: `Accessible label for the read-aloud button in a ChatGPT translation card shown inside Codex. Activating it plays synthesized speech for the translated text. Placeholder {displayText} is the exact translated text visible in the card and may contain any language or script.`,
        },
        { displayText: J },
      )),
      (r[152] = J),
      (r[153] = d),
      (r[154] = xt))
    : (xt = r[154]);
  let St;
  r[155] !== J || r[156] !== d
    ? ((St = d.formatMessage(
        {
          id: `codex.chatgpt.contentReferences.translation.audio.stop.ariaLabel`,
          defaultMessage: `Stop audio for {displayText}`,
          description: `Accessible label for the stop button in a ChatGPT translation card shown inside Codex while translated text audio is playing. Placeholder {displayText} is the exact translated text visible in the card and may contain any language or script.`,
        },
        { displayText: J },
      )),
      (r[155] = J),
      (r[156] = d),
      (r[157] = St))
    : (St = r[157]);
  let Ct;
  r[158] !== bt || r[159] !== xt || r[160] !== St
    ? ((Ct = { loading: bt, play: xt, stop: St }), (r[158] = bt), (r[159] = xt), (r[160] = St), (r[161] = Ct))
    : (Ct = r[161]);
  let wt;
  r[162] !== J || r[163] !== M
    ? ((wt = (e) => me({ pronunciation_language: M, source: `translation`, text: J }, { signal: e })),
      (r[162] = J),
      (r[163] = M),
      (r[164] = wt))
    : (wt = r[164]);
  let Tt;
  r[165] !== Re ||
  r[166] !== ht ||
  r[167] !== gt ||
  r[168] !== _t ||
  r[169] !== vt ||
  r[170] !== yt ||
  r[171] !== Ct ||
  r[172] !== wt
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
      (r[165] = Re),
      (r[166] = ht),
      (r[167] = gt),
      (r[168] = _t),
      (r[169] = vt),
      (r[170] = yt),
      (r[171] = Ct),
      (r[172] = wt),
      (r[173] = Tt))
    : (Tt = r[173]);
  let Et;
  r[174] !== mt || r[175] !== Tt
    ? ((Et = (0, X.jsxs)(`div`, {
        className: `absolute inset-x-4 bottom-4 flex items-center gap-2 select-none`,
        children: [mt, Tt],
      })),
      (r[174] = mt),
      (r[175] = Tt),
      (r[176] = Et))
    : (Et = r[176]);
  let Dt;
  r[177] !== ct || r[178] !== lt || r[179] !== ut || r[180] !== Et
    ? ((Dt = (0, X.jsxs)(`div`, {
        className: `relative flex min-h-45 min-w-0 flex-col rounded-3xl bg-secondary-soft px-6 pt-3 pb-16 text-default`,
        children: [ct, lt, ut, Et],
      })),
      (r[177] = ct),
      (r[178] = lt),
      (r[179] = ut),
      (r[180] = Et),
      (r[181] = Dt))
    : (Dt = r[181]);
  let Ot;
  r[182] !== it || r[183] !== Dt
    ? ((Ot = (0, X.jsxs)(`div`, { className: `grid grid-cols-1 gap-4 md:grid-cols-2`, children: [it, Dt] })),
      (r[182] = it),
      (r[183] = Dt),
      (r[184] = Ot))
    : (Ot = r[184]);
  let kt;
  r[185] !== $e || r[186] !== Ot
    ? ((kt = (0, X.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [$e, Ot] })),
      (r[185] = $e),
      (r[186] = Ot),
      (r[187] = kt))
    : (kt = r[187]);
  let At = !J,
    jt;
  r[188] !== O || r[189] !== i.source_language || r[190] !== L
    ? ((jt = !L && O ? O.sourceLanguage : Ae(i.source_language, `auto`)),
      (r[188] = O),
      (r[189] = i.source_language),
      (r[190] = L),
      (r[191] = jt))
    : (jt = r[191]);
  let Mt;
  r[192] !== O || r[193] !== i.target_language || r[194] !== L
    ? ((Mt = !L && O ? O.targetLanguage : Ae(i.target_language, `en`)),
      (r[192] = O),
      (r[193] = i.target_language),
      (r[194] = L),
      (r[195] = Mt))
    : (Mt = r[195]);
  let Nt;
  r[196] !== O || r[197] !== i.source_text || r[198] !== L
    ? ((Nt = !L && O ? O.sourceTextLength : i.source_text.trim().length),
      (r[196] = O),
      (r[197] = i.source_text),
      (r[198] = L),
      (r[199] = Nt))
    : (Nt = r[199]);
  let Pt;
  r[200] !== a || r[201] !== At || r[202] !== jt || r[203] !== Mt || r[204] !== Nt || r[205] !== s
    ? ((Pt = (0, X.jsx)(`div`, {
        className: `mt-1 flex justify-end`,
        children: (0, X.jsx)(Pe, {
          disabled: At,
          turnContext: s,
          sourceMessageId: a,
          sourceLanguage: jt,
          targetLanguage: Mt,
          sourceTextLength: Nt,
        }),
      })),
      (r[200] = a),
      (r[201] = At),
      (r[202] = jt),
      (r[203] = Mt),
      (r[204] = Nt),
      (r[205] = s),
      (r[206] = Pt))
    : (Pt = r[206]);
  let Ft;
  return (
    r[207] !== kt || r[208] !== Pt
      ? ((Ft = (0, X.jsxs)(`div`, {
          className: `not-prose my-3 w-full max-w-3xl min-w-0`,
          children: [kt, Pt],
        })),
        (r[207] = kt),
        (r[208] = Pt),
        (r[209] = Ft))
      : (Ft = r[209]),
    Ft
  );
}
function ze(e) {
  let t = (0, He.c)(30),
    { label: n, value: r, allowAuto: i, disabled: a, onChange: o } = e,
    s = i !== void 0 && i,
    c = ne(),
    [l, u] = (0, Y.useState)(!1),
    [d, f] = (0, Y.useState)(``),
    { value: p } = L(`2360155027`);
  a && l && (u(!1), f(``));
  let m, h;
  if (t[0] !== s || t[1] !== c || t[2] !== p.target_language_codes || t[3] !== d || t[4] !== r) {
    let e = new Intl.DisplayNames([c.locale], { type: `language` }),
      n = c.formatMessage({
        id: `chatgpt.contentReferences.translation.sourceLanguage.auto.label`,
        defaultMessage: `Detect language`,
        description: `Short source-language label in a translation card shown inside a ChatGPT conversation when the source language was detected automatically.`,
      });
    ((m = [
      ...new Set([
        ...(s ? [`auto`] : []),
        ...j(g().catch(``)).catch(Ce).parse(p.target_language_codes).map(Ve).filter(Be),
        `en`,
        r,
      ]),
    ].map((t) => {
      let r;
      try {
        r =
          t === `auto`
            ? n
            : t === `hv`
              ? c.formatMessage({
                  id: `chatgpt.translationBlock.language.highValyrian`,
                  defaultMessage: `High Valyrian`,
                  description: `Name of the fictional High Valyrian language in the ChatGPT translation language picker.`,
                })
              : (e.of(t) ?? t);
      } catch {
        r = t;
      }
      return { code: t, name: r };
    })),
      (h = m.filter(
        (e) =>
          e.name.toLocaleLowerCase(c.locale).includes(d.trim().toLocaleLowerCase(c.locale)) ||
          e.code.toLowerCase().includes(d.trim().toLowerCase()),
      )),
      (t[0] = s),
      (t[1] = c),
      (t[2] = p.target_language_codes),
      (t[3] = d),
      (t[4] = r),
      (t[5] = m),
      (t[6] = h));
  } else ((m = t[5]), (h = t[6]));
  let _ = h,
    v;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (e) => {
        (u(e), e || f(``));
      }),
      (t[7] = v))
    : (v = t[7]);
  let b = m.find((e) => e.code === r)?.name,
    x;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((x = (0, X.jsx)(A, {})), (t[8] = x)) : (x = t[8]);
  let S;
  t[9] !== a || t[10] !== n || t[11] !== b
    ? ((S = (0, X.jsxs)(y, {
        className: `w-full justify-between`,
        "aria-label": n,
        color: `outlineSurface`,
        disabled: a,
        radius: `full`,
        size: `inputControl`,
        children: [b, x],
      })),
      (t[9] = a),
      (t[10] = n),
      (t[11] = b),
      (t[12] = S))
    : (S = t[12]);
  let C;
  t[13] === c
    ? (C = t[14])
    : ((C = c.formatMessage({
        id: `chatgpt.translationBlock.searchLanguage`,
        defaultMessage: `Search languages`,
        description: `Search input in the source or target language picker in a ChatGPT translation block.`,
      })),
      (t[13] = c),
      (t[14] = C));
  let w;
  t[15] !== d || t[16] !== C
    ? ((w = (0, X.jsx)(G.Input, { placeholder: C, value: d, onValueChange: f })),
      (t[15] = d),
      (t[16] = C),
      (t[17] = w))
    : (w = t[17]);
  let T;
  t[18] !== o || t[19] !== _
    ? ((T = (0, X.jsx)(G.List, {
        children: _.map((e) =>
          (0, X.jsx)(
            G.Item,
            {
              value: e.code,
              onSelect: () => {
                (o(e.code), u(!1), f(``));
              },
              children: e.name,
            },
            e.code,
          ),
        ),
      })),
      (t[18] = o),
      (t[19] = _),
      (t[20] = T))
    : (T = t[20]);
  let E;
  t[21] !== n || t[22] !== w || t[23] !== T
    ? ((E = (0, X.jsxs)(G.Root, { label: n, children: [w, T] })),
      (t[21] = n),
      (t[22] = w),
      (t[23] = T),
      (t[24] = E))
    : (E = t[24]);
  let D;
  return (
    t[25] !== a || t[26] !== l || t[27] !== E || t[28] !== S
      ? ((D = (0, X.jsx)(fe, {
          contentWidth: `menu`,
          disabled: a,
          open: l,
          onOpenChange: v,
          triggerButton: S,
          children: E,
        })),
        (t[25] = a),
        (t[26] = l),
        (t[27] = E),
        (t[28] = S),
        (t[29] = D))
      : (D = t[29]),
    D
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
    ((He = d()),
      R(),
      xe(),
      k(),
      C(),
      (Y = i()),
      v(),
      a(),
      he(),
      le(),
      B(),
      S(),
      ue(),
      x(),
      h(),
      T(),
      F(),
      U(),
      r(),
      ce(),
      f(),
      I(),
      Oe(),
      J(),
      (X = s()),
      (Ue = 8e3),
      (We = new Set([`ar`, `fa`, `he`, `ur`])));
  }))();
}
function Ke(e) {
  let t = (0, qe.c)(39),
    { state: r, sourceMessageId: i, turnContext: a } = e,
    o = n(m),
    [s, c] = (0, Z.useState)(r.tab),
    l = (0, Z.useId)(),
    u;
  t[0] === s
    ? (u = t[1])
    : ((u =
        $.find((e) => {
          let { key: t } = e;
          return t === s;
        }) ?? $[0]),
      (t[0] = s),
      (t[1] = u));
  let d = u,
    f = `${l}-${d.key}`,
    p = s === `professional_email`,
    h = p ? r.email : r.message,
    g = r.ask_me_label,
    _;
  t[2] !== o || t[3] !== s || t[4] !== i || t[5] !== a
    ? ((_ = (e) => {
        try {
          H(o, de, {
            eventName: `chatgpt_conversational_onboarding_tab_clicked`,
            eventData: JSON.stringify({
              renderer: `dil`,
              level: `l2`,
              use_case: `write`,
              source: `conversational_onboarding_interactive_write`,
              tab_id: e,
              previous_tab_id: s,
              turn_message_id: i ?? a.messageId,
            }),
          });
        } catch {}
      }),
      (t[2] = o),
      (t[3] = s),
      (t[4] = i),
      (t[5] = a),
      (t[6] = _))
    : (_ = t[6]);
  let v;
  t[7] !== r || t[8] !== l
    ? ((v = $.map((e) => {
        let { key: t, label: n } = e;
        return { key: t, name: r[n], panelId: `${l}-${t}` };
      })),
      (t[7] = r),
      (t[8] = l),
      (t[9] = v))
    : (v = t[9]);
  let y;
  t[10] !== s || t[11] !== r.ask_me_label || t[12] !== _ || t[13] !== v
    ? ((y = (0, Q.jsx)(V, {
        className: `flex-wrap`,
        ariaLabel: g,
        onSelect: c,
        onTabClick: _,
        selectedKey: s,
        tabs: v,
        variant: `choice`,
      })),
      (t[10] = s),
      (t[11] = r.ask_me_label),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y))
    : (y = t[14]);
  let b = `${f}-tab`,
    x;
  t[15] === r.ask_me_label
    ? (x = t[16])
    : ((x = (0, Q.jsx)(`div`, { className: `text-sm font-medium text-secondary`, children: r.ask_me_label })),
      (t[15] = r.ask_me_label),
      (t[16] = x));
  let S = r[d.question],
    C;
  t[17] === S
    ? (C = t[18])
    : ((C = (0, Q.jsx)(`div`, {
        className: `text-lg font-semibold text-default`,
        children: (0, Q.jsx)(P, {
          id: `chatgptConversations.onboardingWriting.quotedQuestion`,
          defaultMessage: `"{question}"`,
          description: `Example question shown below the selected Translation, Email, or Message tab during ChatGPT conversational onboarding. The question placeholder is the complete example question, already localized by the server. Preserve the placeholder unchanged and adapt only the surrounding quotation marks and spacing to the locale.`,
          values: { question: S },
        }),
      })),
      (t[17] = S),
      (t[18] = C));
  let w;
  t[19] !== x || t[20] !== C
    ? ((w = (0, Q.jsxs)(`div`, { className: `flex w-full flex-col`, children: [x, C] })),
      (t[19] = x),
      (t[20] = C),
      (t[21] = w))
    : (w = t[21]);
  let T;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Q.jsx)(`div`, { className: `w-full border-t border-subtle`, "aria-hidden": `true` })),
      (t[22] = T))
    : (T = t[22]);
  let E;
  t[23] !== h ||
  t[24] !== p ||
  t[25] !== s ||
  t[26] !== i ||
  t[27] !== r.email ||
  t[28] !== r.translation ||
  t[29] !== a
    ? ((E =
        s === `translation`
          ? (0, Q.jsx)(Re, { translation: r.translation, sourceMessageId: i, turnContext: a })
          : (0, Q.jsx)(
              Ne,
              {
                id: h.id,
                directive: {
                  id: h.id,
                  bodyContent: h.content,
                  content: h.content,
                  emailMetadata: {
                    bcc: void 0,
                    cc: void 0,
                    recipient: void 0,
                    subject: p ? r.email.subject : void 0,
                  },
                  metadata: void 0,
                  title: void 0,
                  toneSections: null,
                  variant: p ? `email` : `chat_message`,
                },
                index: +!p,
                isLastNodeInMessage: !0,
                sourceMessageId: i,
                turnContext: a,
              },
              s,
            )),
      (t[23] = h),
      (t[24] = p),
      (t[25] = s),
      (t[26] = i),
      (t[27] = r.email),
      (t[28] = r.translation),
      (t[29] = a),
      (t[30] = E))
    : (E = t[30]);
  let D;
  t[31] !== f || t[32] !== w || t[33] !== E || t[34] !== b
    ? ((D = (0, Q.jsxs)(`div`, {
        id: f,
        className: `flex w-full flex-col gap-3 py-4`,
        role: `tabpanel`,
        "aria-labelledby": b,
        children: [w, T, E],
      })),
      (t[31] = f),
      (t[32] = w),
      (t[33] = E),
      (t[34] = b),
      (t[35] = D))
    : (D = t[35]);
  let O;
  return (
    t[36] !== D || t[37] !== y
      ? ((O = (0, Q.jsxs)(`div`, {
          className: `not-prose mt-4 flex w-full min-w-0 flex-col pb-3`,
          children: [y, D],
        })),
        (t[36] = D),
        (t[37] = y),
        (t[38] = O))
      : (O = t[38]),
    O
  );
}
var qe, Z, Q, $;
function Je() {
  return (Je = e(() => {
    ((qe = d()),
      W(),
      C(),
      (Z = i()),
      v(),
      z(),
      U(),
      r(),
      Me(),
      Ge(),
      (Q = s()),
      ($ = [
        { key: `translation`, label: `translation_tab_label`, question: `translation_question` },
        { key: `professional_email`, label: `email_tab_label`, question: `email_question` },
        { key: `birthday_message`, label: `message_tab_label`, question: `message_question` },
      ]));
  }))();
}
Je();
export { Ke as ConversationalOnboardingWriting };
//# sourceMappingURL=renderer-548413c8ef3f.js.map
