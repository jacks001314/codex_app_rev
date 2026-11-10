import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  FBt as n,
  JO as r,
  JOt as i,
  LNt as a,
  MNt as ee,
  NNt as o,
  PBt as s,
  Vrt as c,
  WO as l,
  XOt as u,
  Y3 as d,
  YOt as f,
  Z3 as p,
  ZSt as m,
  iCt as te,
  nCt as ne,
  okt as re,
  qO as ie,
  qrt as h,
  tkt as g,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Fn as _,
  $Ln as v,
  A5n as y,
  Cjr as ae,
  D5n as b,
  GLn as x,
  MOr as oe,
  MT as se,
  Mk as ce,
  QFn as S,
  QLn as C,
  T5n as le,
  dBr as ue,
  jT as w,
  jk as de,
  lBr as T,
  qLn as fe,
  xjr as E,
  zOr as D,
} from "./app-initial-ad16eaadf81f.js";
import { C as O, S as k, b as A, x as pe, y as j } from "./chatgpt-markdown-view-49d8cc54ac3e.js";
import { n as M, r as N } from "./response-rating-control-3c54c7d6d3ee.js";
import { n as P, t as F } from "./codex-thread-report-dialog-339dc56a4231.js";
var me;
function I() {
  return (I = e(() => {
    (u(),
      (me = [
        {
          id: `shouldnt_have_created`,
          label: i({
            id: `ImageGenFeedback.ShouldNotHaveCreated`,
            defaultMessage: `Shouldn't have created an image`,
            description: `Reason in the generated-image feedback form indicating that ChatGPT should not have created an image`,
          }),
        },
        {
          id: `dont_like_style`,
          label: i({
            id: `ImageGenFeedback.DontLikeStyle`,
            defaultMessage: `Don't like the style`,
            description: `Reason in the generated-image feedback form indicating that the user dislikes the visual style of the image`,
          }),
        },
        {
          id: `didnt_fully_follow_instructions`,
          label: i({
            id: `ImageGenFeedback.DidntFollowInstructions`,
            defaultMessage: `Didn't fully follow instructions`,
            description: `Reason in the generated-image feedback form indicating that the image did not fully follow the user's instructions`,
          }),
        },
        {
          id: `low_quality_or_distorted`,
          label: i({
            id: `ImageGenFeedback.LowQualityOrDistorted`,
            defaultMessage: `Low quality or distorted`,
            description: `Reason in the generated-image feedback form indicating poor image quality or visible distortion`,
          }),
        },
        {
          id: `odd_cropping`,
          label: i({
            id: `ImageGenFeedback.OddCropping`,
            defaultMessage: `Odd cropping`,
            description: `Reason in the generated-image feedback form indicating that the image is cropped in an unexpected or unhelpful way`,
          }),
        },
        {
          id: `inaccurate_editing`,
          label: i({
            id: `ImageGenFeedback.InaccurateEditing`,
            defaultMessage: `Inaccurate editing`,
            description: `Reason in the generated-image feedback form indicating that requested image edits were inaccurate`,
          }),
        },
        {
          id: `inaccurate_text_rendering`,
          label: i({
            id: `ImageGenFeedback.InaccurateTextRendering`,
            defaultMessage: `Inaccurate text rendering`,
            description: `Reason in the generated-image feedback form indicating that text within the image was rendered incorrectly`,
          }),
        },
        {
          id: `biased`,
          label: i({
            id: `ImageGenFeedback.Biased`,
            defaultMessage: `Biased`,
            description: `Reason in the generated-image feedback form indicating that the image contains bias`,
          }),
        },
        {
          id: `other`,
          label: i({
            id: `ImageGenFeedback.Other`,
            defaultMessage: `Other`,
            description: `Reason in the generated-image feedback form for feedback that does not fit another category`,
          }),
        },
      ]));
  }))();
}
function L(e) {
  let t = (0, be.c)(96),
    {
      hasModelWrittenDil: n,
      hideFreeformInput: r,
      initialDetails: i,
      initialSelectedTags: a,
      isBusiness: o,
      onClose: s,
      onReport: c,
      onSubmit: u,
      variant: f,
    } = e,
    p = n !== void 0 && n,
    m = r !== void 0 && r,
    h;
  t[0] === a ? (h = t[1]) : ((h = a === void 0 ? [] : a), (t[0] = a), (t[1] = h));
  let _ = h,
    v = f === void 0 ? `response` : f,
    y = re(),
    b = se(),
    x = te(pe),
    oe = ae(v === `image` && `298652888`),
    ce = ne(v === `image` ? ue : null, `298652888`),
    [S, le] = (0, xe.useState)(i),
    [w, de] = (0, xe.useState)(_),
    [T, fe] = (0, xe.useState)(!1),
    E,
    D,
    O,
    k,
    A,
    j,
    M,
    N,
    P,
    F,
    I,
    L,
    B,
    V,
    H,
    U;
  if (
    t[2] !== S ||
    t[3] !== p ||
    t[4] !== m ||
    t[5] !== oe ||
    t[6] !== y ||
    t[7] !== b ||
    t[8] !== T ||
    t[9] !== s ||
    t[10] !== c ||
    t[11] !== u ||
    t[12] !== ce ||
    t[13] !== w ||
    t[14] !== x ||
    t[15] !== v
  ) {
    let e = p ? [{ id: `visual-quality`, label: z.visual }, ...Se] : Se;
    (v === `image` &&
      (e = [
        ...me.slice(0, -1),
        ...(ce && !oe ? [{ id: `safety-or-legal-concern`, label: z.safety }] : []),
        ...me.slice(-1),
      ]),
      (O = v === `response` && m));
    let n = O ? void 0 : S,
      r;
    (t[32] !== w || t[33] !== n || t[34] !== x || t[35] !== v
      ? ((r = (v === `image` || x) && (w.length > 0 || !!n?.trim())),
        (t[32] = w),
        (t[33] = n),
        (t[34] = x),
        (t[35] = v),
        (t[36] = r))
      : (r = t[36]),
      (D = r));
    let i;
    t[37] !== S || t[38] !== c || t[39] !== v
      ? ((i = (e) => {
          (de((t) => (v === `response` ? [e] : t.includes(e) ? t.filter((t) => t !== e) : [...t, e])),
            e === `safety-or-legal-concern` && c(S));
        }),
        (t[37] = S),
        (t[38] = c),
        (t[39] = v),
        (t[40] = i))
      : (i = t[40]);
    let a = i,
      o = async () => {
        if (D && !T) {
          if (w.includes(`safety-or-legal-concern`)) {
            c(S);
            return;
          }
          (fe(!0),
            (await u({ details: n, tags: w, tagChoices: e.map(ye) }).finally(() => {
              fe(!1);
            })) &&
              b() &&
              s());
        }
      };
    ((E = l),
      (N = !0),
      t[41] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((P = { "aria-describedby": void 0 }), (t[41] = P))
        : (P = t[41]),
      t[42] === s
        ? (F = t[43])
        : ((F = (e) => {
            e || s();
          }),
          (t[42] = s),
          (t[43] = F)),
      (I = `feedback`),
      (L = `chatgpt`),
      (A = `flex max-h-dvh flex-col`),
      (j = (e) => {
        (e.preventDefault(), o());
      }),
      t[44] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((M = (0, R.jsx)(ie, {
            className: `shrink-0 p-4 pe-14 text-lg font-normal select-none`,
            children: (0, R.jsx)(g, {
              id: `feedbackFormDialog.title`,
              defaultMessage: `Share feedback`,
              description: `Title for feedback dialog`,
            }),
          })),
          (t[44] = M))
        : (M = t[44]),
      (k = `min-h-0 overflow-y-auto p-4 pt-1`),
      (B = v === `image` ? `group` : `radiogroup`),
      t[45] === y
        ? (V = t[46])
        : ((V = y.formatMessage({
            id: `feedbackFormDialog.optionsLabel`,
            defaultMessage: `Feedback options`,
            description: `Accessible label for feedback options`,
          })),
          (t[45] = y),
          (t[46] = V)),
      (H = `flex flex-wrap gap-3 select-none`));
    let d;
    (t[47] !== a || t[48] !== w || t[49] !== v
      ? ((d = (e) =>
          (0, R.jsx)(
            `button`,
            {
              type: `button`,
              role: v === `response` ? `radio` : void 0,
              "aria-checked": v === `response` ? w.includes(e.id) : void 0,
              "aria-pressed": v === `image` ? w.includes(e.id) : void 0,
              className: ee(
                `cursor-interaction inline-flex items-center justify-center gap-2 rounded-full border border-default px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`,
                w.includes(e.id)
                  ? `bg-primary-solid text-primary-solid`
                  : `text-default hover:bg-surface-secondary`,
              ),
              onClick: () => a(e.id),
              children: (0, R.jsx)(g, { ...e.label }),
            },
            e.id,
          )),
        (t[47] = a),
        (t[48] = w),
        (t[49] = v),
        (t[50] = d))
      : (d = t[50]),
      (U = e.map(d)),
      (t[2] = S),
      (t[3] = p),
      (t[4] = m),
      (t[5] = oe),
      (t[6] = y),
      (t[7] = b),
      (t[8] = T),
      (t[9] = s),
      (t[10] = c),
      (t[11] = u),
      (t[12] = ce),
      (t[13] = w),
      (t[14] = x),
      (t[15] = v),
      (t[16] = E),
      (t[17] = D),
      (t[18] = O),
      (t[19] = k),
      (t[20] = A),
      (t[21] = j),
      (t[22] = M),
      (t[23] = N),
      (t[24] = P),
      (t[25] = F),
      (t[26] = I),
      (t[27] = L),
      (t[28] = B),
      (t[29] = V),
      (t[30] = H),
      (t[31] = U));
  } else
    ((E = t[16]),
      (D = t[17]),
      (O = t[18]),
      (k = t[19]),
      (A = t[20]),
      (j = t[21]),
      (M = t[22]),
      (N = t[23]),
      (P = t[24]),
      (F = t[25]),
      (I = t[26]),
      (L = t[27]),
      (B = t[28]),
      (V = t[29]),
      (H = t[30]),
      (U = t[31]));
  let W;
  t[51] !== B || t[52] !== V || t[53] !== H || t[54] !== U
    ? ((W = (0, R.jsx)(`div`, { role: B, "aria-label": V, className: H, children: U })),
      (t[51] = B),
      (t[52] = V),
      (t[53] = H),
      (t[54] = U),
      (t[55] = W))
    : (W = t[55]);
  let G;
  t[56] !== S || t[57] !== O || t[58] !== y
    ? ((G = O
        ? null
        : (0, R.jsx)(`div`, {
            className: `mt-6`,
            children: (0, R.jsx)(C, {
              variant: `feedback`,
              name: `feedback`,
              autoComplete: `off`,
              "aria-label": y.formatMessage({
                id: `chatgpt.feedback.additionalFeedback`,
                defaultMessage: `Additional feedback`,
                description: `Accessible label for the optional text field in the ChatGPT response feedback dialog`,
              }),
              placeholder: y.formatMessage({
                id: `feedbackFormDialog.detailsPlaceholder.optional`,
                defaultMessage: `Share details (optional)`,
                description: `Placeholder for an optional freeform feedback details field`,
              }),
              value: S ?? ``,
              onChange: (e) => le(e.target.value),
              onKeyDown: ve,
            }),
          })),
      (t[56] = S),
      (t[57] = O),
      (t[58] = y),
      (t[59] = G))
    : (G = t[59]);
  let K;
  t[60] === Symbol.for(`react.memo_cache_sentinel`) ? ((K = !1), (t[60] = K)) : (K = t[60]);
  let q;
  t[61] === o
    ? (q = t[62])
    : ((q =
        o &&
        (0, R.jsx)(g, {
          id: `chatgpt.feedback.workspaceDisclosure`,
          defaultMessage: `Your feedback can be used to improve ChatGPT. <link>Learn more</link>`,
          description: `Disclosure below the feedback form for a ChatGPT business workspace; the link explains how feedback data is used`,
          values: { link: _e },
        })),
      (t[61] = o),
      (t[62] = q));
  let J;
  t[63] !== o || t[64] !== v
    ? ((J =
        !o &&
        v === `image` &&
        (0, R.jsx)(g, {
          id: `chatgpt.feedback.imageConsumerDisclosure`,
          defaultMessage: `Submitting feedback will include this full conversation to help improve ChatGPT, even if 'Improve the model for everyone' is turned off. <link>Learn more</link>`,
          description: `Disclosure below the generated-image feedback form for a personal ChatGPT account explaining that submitting feedback includes the full conversation even when model training is disabled; the link explains data use`,
          values: { link: ge },
        })),
      (t[63] = o),
      (t[64] = v),
      (t[65] = J))
    : (J = t[65]);
  let Y;
  t[66] !== o || t[67] !== v
    ? ((Y =
        !o &&
        v === `response` &&
        (0, R.jsx)(g, {
          id: `chatgpt.feedback.consumerDisclosure`,
          defaultMessage: `Your conversation will be included with your feedback to help improve ChatGPT. <link>Learn more</link>`,
          description: `Disclosure below the consumer ChatGPT feedback form explaining that the conversation accompanies submitted feedback; the link explains data use`,
          values: { link: he },
        })),
      (t[66] = o),
      (t[67] = v),
      (t[68] = Y))
    : (Y = t[68]);
  let X;
  t[69] !== q || t[70] !== J || t[71] !== Y
    ? ((X = (0, R.jsxs)(`div`, {
        className: `mt-4 rounded-lg bg-surface-secondary p-3 text-xs text-secondary`,
        children: [K, q, J, Y],
      })),
      (t[69] = q),
      (t[70] = J),
      (t[71] = Y),
      (t[72] = X))
    : (X = t[72]);
  let Ce = !D,
    we;
  t[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = (0, R.jsx)(g, {
        id: `feedbackFormDialog.submit`,
        defaultMessage: `Submit`,
        description: `Label for the button that submits feedback`,
      })),
      (t[73] = we))
    : (we = t[73]);
  let Z;
  t[74] !== T || t[75] !== Ce
    ? ((Z = (0, R.jsx)(`div`, {
        className: `mt-5 flex justify-end sm:mt-4`,
        children: (0, R.jsx)(d, {
          color: `primary`,
          size: `dialog`,
          type: `submit`,
          disabled: Ce,
          loading: T,
          children: we,
        }),
      })),
      (t[74] = T),
      (t[75] = Ce),
      (t[76] = Z))
    : (Z = t[76]);
  let Q;
  t[77] !== k || t[78] !== W || t[79] !== G || t[80] !== X || t[81] !== Z
    ? ((Q = (0, R.jsxs)(`div`, { className: k, children: [W, G, X, Z] })),
      (t[77] = k),
      (t[78] = W),
      (t[79] = G),
      (t[80] = X),
      (t[81] = Z),
      (t[82] = Q))
    : (Q = t[82]);
  let $;
  t[83] !== A || t[84] !== j || t[85] !== M || t[86] !== Q
    ? (($ = (0, R.jsxs)(`form`, { className: A, onSubmit: j, children: [M, Q] })),
      (t[83] = A),
      (t[84] = j),
      (t[85] = M),
      (t[86] = Q),
      (t[87] = $))
    : ($ = t[87]);
  let Te;
  return (
    t[88] !== E || t[89] !== N || t[90] !== P || t[91] !== F || t[92] !== I || t[93] !== L || t[94] !== $
      ? ((Te = (0, R.jsx)(E, {
          open: N,
          contentProps: P,
          onOpenChange: F,
          size: I,
          variant: L,
          children: $,
        })),
        (t[88] = E),
        (t[89] = N),
        (t[90] = P),
        (t[91] = F),
        (t[92] = I),
        (t[93] = L),
        (t[94] = $),
        (t[95] = Te))
      : (Te = t[95]),
    Te
  );
}
function he(e) {
  return (0, R.jsx)(
    x,
    {
      appearance: `secondary`,
      initiator: `open_in_browser_bridge`,
      href: `https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance`,
      openTarget: `external-browser`,
      children: e,
    },
    `learn-more`,
  );
}
function ge(e) {
  return (0, R.jsx)(
    x,
    {
      appearance: `secondary`,
      initiator: `open_in_browser_bridge`,
      href: `https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance`,
      openTarget: `external-browser`,
      children: e,
    },
    `learn-more`,
  );
}
function _e(e) {
  return (0, R.jsx)(
    x,
    {
      appearance: `secondary`,
      initiator: `open_in_browser_bridge`,
      href: `https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance`,
      openTarget: `external-browser`,
      children: e,
    },
    `learn-more`,
  );
}
function ve(e) {
  e.key !== `Enter` ||
    e.shiftKey ||
    e.metaKey ||
    e.ctrlKey ||
    e.altKey ||
    e.nativeEvent.isComposing ||
    (e.preventDefault(), e.currentTarget.form?.requestSubmit());
}
function ye(e) {
  let { id: t } = e;
  return t;
}
var be, xe, R, z, Se;
function B() {
  return (B = e(() => {
    ((be = s()),
      o(),
      m(),
      (xe = n()),
      u(),
      p(),
      r(),
      fe(),
      v(),
      E(),
      T(),
      w(),
      I(),
      j(),
      (R = a()),
      (z = f({
        visual: {
          id: `chatgpt.feedback.visual`,
          defaultMessage: `Visual is unhelpful or broken`,
          description: `Reason in the ChatGPT response feedback dialog for a model-generated interactive visual that is not useful, fails to render, or cannot be used`,
        },
        incorrect: {
          id: `chatgpt.feedback.incorrect`,
          defaultMessage: `Incorrect or incomplete`,
          description: `Reason for negative feedback on a ChatGPT response that contains mistakes or omits important information`,
        },
        request: {
          id: `chatgpt.feedback.request`,
          defaultMessage: `Not what I asked for`,
          description: `Reason for negative feedback on a ChatGPT response that misunderstood the user's request`,
        },
        slow: {
          id: `chatgpt.feedback.slow`,
          defaultMessage: `Slow or buggy`,
          description: `Reason for negative feedback on a slow or broken ChatGPT response`,
        },
        style: {
          id: `chatgpt.feedback.style`,
          defaultMessage: `Style or tone`,
          description: `Reason for negative feedback on the writing style or tone of a ChatGPT response`,
        },
        safety: {
          id: `chatgpt.feedback.safety`,
          defaultMessage: `Safety or legal concern`,
          description: `Feedback option that opens the safety and legal report flow for a ChatGPT response`,
        },
        other: {
          id: `chatgpt.feedback.other`,
          defaultMessage: `Other`,
          description: `Reason for negative feedback on a ChatGPT response when no other category applies`,
        },
      })),
      (Se = [
        { id: `incorrect-or-incomplete`, label: z.incorrect },
        { id: `not-what-i-asked-for`, label: z.request },
        { id: `slow-or-buggy`, label: z.slow },
        { id: `style-or-tone`, label: z.style },
        { id: `safety-or-legal-concern`, label: z.safety },
        { id: `other`, label: z.other },
      ]));
  }))();
}
function V(e) {
  let n = (0, U.c)(18),
    {
      conversationId: r,
      disabled: i,
      messageId: a,
      hasModelWrittenDil: ee,
      isAnimated: o,
      variant: s,
      onRatingSelected: c,
      renderControl: l,
    } = e,
    u = i !== void 0 && i,
    d = t(oe),
    f = re(),
    p = se(),
    m = te(ce),
    ie = te(pe),
    g = te(A),
    _ = ne(k, a),
    [v, b] = (0, W.useState)(!1),
    x = ae(`2221440816`);
  if (!m || g == null || !ie) {
    let e;
    return (n[0] === l ? (e = n[1]) : ((e = l?.(null) ?? null), (n[0] = l), (n[1] = e)), e);
  }
  let C;
  if (
    n[2] !== r ||
    n[3] !== u ||
    n[4] !== ee ||
    n[5] !== x ||
    n[6] !== f ||
    n[7] !== o ||
    n[8] !== g ||
    n[9] !== p ||
    n[10] !== a ||
    n[11] !== c ||
    n[12] !== v ||
    n[13] !== _ ||
    n[14] !== l ||
    n[15] !== d ||
    n[16] !== s
  ) {
    let e = (t, n) => {
        y(d, L, {
          hasModelWrittenDil: ee,
          hideFreeformInput: g && x,
          initialDetails: t,
          initialSelectedTags: n == null ? void 0 : [n],
          isBusiness: g,
          onReport: (t) => {
            (le(d, L),
              y(d, F, {
                chatGptMessageId: a,
                reportEntityType: `conversation`,
                reportReasonsEntityType: `message`,
                threadId: r,
                onBackToFeedback: () => e(t, `safety-or-legal-concern`),
              }));
          },
          onSubmit: async (e) => {
            let { details: t, tags: n, tagChoices: i } = e;
            try {
              return (
                await d
                  .get(S)
                  .submitMessageFeedback(g, {
                    conversation_id: r,
                    message_id: a,
                    rating: `thumbsDown`,
                    render_state: d.get(O, a),
                    text: t,
                    tags: n,
                    tag_choices: i,
                  }),
                d.get(h).success(f.formatMessage(K.thanks)),
                !0
              );
            } catch {
              return (
                d
                  .get(h)
                  .danger(f.formatMessage(K.error), {
                    errorAnalytics: {
                      toastId: `message_feedback_failed`,
                      operation: `submit_message_feedback`,
                      errorCategory: `message`,
                      conversationId: r,
                      retryable: !0,
                    },
                  }),
                !1
              );
            }
          },
        });
      },
      t = async (t) => {
        if (!(u || v)) {
          (b(!0), t != null && c?.(t));
          try {
            let n = d.get(S),
              i = { conversation_id: r, message_id: a };
            (t == null
              ? await n.clearMessageFeedback(g, i)
              : await n.submitMessageFeedback(g, { ...i, rating: t, render_state: d.get(O, a) }),
              d.set(k, a, t),
              t === `thumbsDown` && p() && e());
          } catch {
            d.get(h).danger(f.formatMessage(K.error), {
              errorAnalytics: {
                toastId: `message_feedback_failed`,
                operation: t == null ? `clear_message_feedback` : `submit_message_feedback`,
                errorCategory: `message`,
                conversationId: r,
                retryable: !0,
              },
            });
          }
          b(!1);
        }
      },
      i = {
        variant: s,
        isAnimated: o,
        disabled: u || v,
        rating: _,
        onRate: (e) => void t(_ === e ? null : e),
        shouldRestoreFocus: H,
      };
    ((C = l == null ? (0, G.jsx)(M, { ...i }) : l(i, (e) => void t(e))),
      (n[2] = r),
      (n[3] = u),
      (n[4] = ee),
      (n[5] = x),
      (n[6] = f),
      (n[7] = o),
      (n[8] = g),
      (n[9] = p),
      (n[10] = a),
      (n[11] = c),
      (n[12] = v),
      (n[13] = _),
      (n[14] = l),
      (n[15] = d),
      (n[16] = s),
      (n[17] = C));
  } else C = n[17];
  return C;
}
function H(e) {
  return e !== `thumbsDown`;
}
var U, W, G, K;
function q() {
  return (q = e(() => {
    ((U = s()),
      m(),
      (W = n()),
      u(),
      b(),
      c(),
      de(),
      N(),
      P(),
      D(),
      E(),
      w(),
      _(),
      B(),
      j(),
      (G = a()),
      (K = f({
        error: {
          id: `chatgpt.feedback.error`,
          defaultMessage: `Couldn’t submit feedback`,
          description: `Error toast when a ChatGPT response or conversation rating cannot be saved`,
        },
        thanks: {
          id: `chatgpt.feedback.thanks`,
          defaultMessage: `Thanks for your feedback`,
          description: `Confirmation after saving feedback about a ChatGPT response`,
        },
      })));
  }))();
}
export { B as i, q as n, L as r, V as t };
//# sourceMappingURL=message-rating-3e44aeb8f79f.js.map
