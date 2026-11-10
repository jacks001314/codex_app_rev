import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  IDt as r,
  Ixt as i,
  Pxt as a,
  VDt as ee,
  Vxt as o,
  _Mt as s,
  _O as te,
  gMt as ne,
  hot as c,
  jDt as l,
  kDt as u,
  lot as d,
  mO as f,
  t3 as p,
  vO as m,
  vzt as h,
  xMt as g,
  yzt as _,
  zxt as re,
} from "./app-shared-bbfeca5e5737.js";
import {
  APr as v,
  Cwr as y,
  DPn as b,
  EPn as ie,
  G4n as x,
  J4n as ae,
  OMn as S,
  OPr as oe,
  U4n as se,
  XO as C,
  YO as ce,
  eDr as w,
  gwr as le,
  kMn as T,
  nDr as ue,
  nT as de,
  rT as fe,
  xPn as E,
  yPn as D,
} from "./app-initial-5851df3f6cb1.js";
import { C as O, S as k, b as A, x as pe, y as j } from "./chatgpt-markdown-view-10e560aa371d.js";
import { n as M, r as N } from "./response-rating-control-b69031a6da48.js";
import { n as P, t as F } from "./codex-thread-report-dialog-d2759293ec30.js";
var me;
function I() {
  return (I = e(() => {
    (l(),
      (me = [
        {
          id: `shouldnt_have_created`,
          label: u({
            id: `ImageGenFeedback.ShouldNotHaveCreated`,
            defaultMessage: `Shouldn't have created an image`,
            description: `Reason in the generated-image feedback form indicating that ChatGPT should not have created an image`,
          }),
        },
        {
          id: `dont_like_style`,
          label: u({
            id: `ImageGenFeedback.DontLikeStyle`,
            defaultMessage: `Don't like the style`,
            description: `Reason in the generated-image feedback form indicating that the user dislikes the visual style of the image`,
          }),
        },
        {
          id: `didnt_fully_follow_instructions`,
          label: u({
            id: `ImageGenFeedback.DidntFollowInstructions`,
            defaultMessage: `Didn't fully follow instructions`,
            description: `Reason in the generated-image feedback form indicating that the image did not fully follow the user's instructions`,
          }),
        },
        {
          id: `low_quality_or_distorted`,
          label: u({
            id: `ImageGenFeedback.LowQualityOrDistorted`,
            defaultMessage: `Low quality or distorted`,
            description: `Reason in the generated-image feedback form indicating poor image quality or visible distortion`,
          }),
        },
        {
          id: `odd_cropping`,
          label: u({
            id: `ImageGenFeedback.OddCropping`,
            defaultMessage: `Odd cropping`,
            description: `Reason in the generated-image feedback form indicating that the image is cropped in an unexpected or unhelpful way`,
          }),
        },
        {
          id: `inaccurate_editing`,
          label: u({
            id: `ImageGenFeedback.InaccurateEditing`,
            defaultMessage: `Inaccurate editing`,
            description: `Reason in the generated-image feedback form indicating that requested image edits were inaccurate`,
          }),
        },
        {
          id: `inaccurate_text_rendering`,
          label: u({
            id: `ImageGenFeedback.InaccurateTextRendering`,
            defaultMessage: `Inaccurate text rendering`,
            description: `Reason in the generated-image feedback form indicating that text within the image was rendered incorrectly`,
          }),
        },
        {
          id: `biased`,
          label: u({
            id: `ImageGenFeedback.Biased`,
            defaultMessage: `Biased`,
            description: `Reason in the generated-image feedback form indicating that the image contains bias`,
          }),
        },
        {
          id: `other`,
          label: u({
            id: `ImageGenFeedback.Other`,
            defaultMessage: `Other`,
            description: `Reason in the generated-image feedback form for feedback that does not fit another category`,
          }),
        },
      ]));
  }))();
}
function L(e) {
  let n = (0, be.c)(96),
    {
      hasModelWrittenDil: i,
      hideFreeformInput: a,
      initialDetails: s,
      initialSelectedTags: c,
      isBusiness: l,
      onClose: u,
      onReport: d,
      onSubmit: p,
      variant: m,
    } = e,
    h = i !== void 0 && i,
    g = a !== void 0 && a,
    _;
  n[0] === c ? (_ = n[1]) : ((_ = c === void 0 ? [] : c), (n[0] = c), (n[1] = _));
  let y = _,
    b = m === void 0 ? `response` : m,
    x = ee(),
    ae = fe(),
    S = o(pe),
    oe = ue(b === `image` && `298652888`),
    se = re(b === `image` ? v : null, `298652888`),
    [C, ce] = (0, xe.useState)(s),
    [w, le] = (0, xe.useState)(y),
    [T, de] = (0, xe.useState)(!1),
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
    n[2] !== C ||
    n[3] !== h ||
    n[4] !== g ||
    n[5] !== oe ||
    n[6] !== x ||
    n[7] !== ae ||
    n[8] !== T ||
    n[9] !== u ||
    n[10] !== d ||
    n[11] !== p ||
    n[12] !== se ||
    n[13] !== w ||
    n[14] !== S ||
    n[15] !== b
  ) {
    let e = h ? [{ id: `visual-quality`, label: z.visual }, ...Se] : Se;
    (b === `image` &&
      (e = [
        ...me.slice(0, -1),
        ...(se && !oe ? [{ id: `safety-or-legal-concern`, label: z.safety }] : []),
        ...me.slice(-1),
      ]),
      (O = b === `response` && g));
    let t = O ? void 0 : C,
      i;
    (n[32] !== w || n[33] !== t || n[34] !== S || n[35] !== b
      ? ((i = (b === `image` || S) && (w.length > 0 || !!t?.trim())),
        (n[32] = w),
        (n[33] = t),
        (n[34] = S),
        (n[35] = b),
        (n[36] = i))
      : (i = n[36]),
      (D = i));
    let a;
    n[37] !== C || n[38] !== d || n[39] !== b
      ? ((a = (e) => {
          (le((t) => (b === `response` ? [e] : t.includes(e) ? t.filter((t) => t !== e) : [...t, e])),
            e === `safety-or-legal-concern` && d(C));
        }),
        (n[37] = C),
        (n[38] = d),
        (n[39] = b),
        (n[40] = a))
      : (a = n[40]);
    let ee = a,
      o = async () => {
        if (D && !T) {
          if (w.includes(`safety-or-legal-concern`)) {
            d(C);
            return;
          }
          (de(!0),
            (await p({ details: t, tags: w, tagChoices: e.map(ye) }).finally(() => {
              de(!1);
            })) &&
              ae() &&
              u());
        }
      };
    ((E = f),
      (N = !0),
      n[41] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((P = { "aria-describedby": void 0 }), (n[41] = P))
        : (P = n[41]),
      n[42] === u
        ? (F = n[43])
        : ((F = (e) => {
            e || u();
          }),
          (n[42] = u),
          (n[43] = F)),
      (I = `feedback`),
      (L = `chatgpt`),
      (A = `flex max-h-dvh flex-col`),
      (j = (e) => {
        (e.preventDefault(), o());
      }),
      n[44] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((M = (0, R.jsx)(te, {
            className: `shrink-0 p-4 pe-14 text-lg font-normal select-none`,
            children: (0, R.jsx)(r, {
              id: `feedbackFormDialog.title`,
              defaultMessage: `Share feedback`,
              description: `Title for feedback dialog`,
            }),
          })),
          (n[44] = M))
        : (M = n[44]),
      (k = `min-h-0 overflow-y-auto p-4 pt-1`),
      (B = b === `image` ? `group` : `radiogroup`),
      n[45] === x
        ? (V = n[46])
        : ((V = x.formatMessage({
            id: `feedbackFormDialog.optionsLabel`,
            defaultMessage: `Feedback options`,
            description: `Accessible label for feedback options`,
          })),
          (n[45] = x),
          (n[46] = V)),
      (H = `flex flex-wrap gap-3 select-none`));
    let s;
    (n[47] !== ee || n[48] !== w || n[49] !== b
      ? ((s = (e) =>
          (0, R.jsx)(
            `button`,
            {
              type: `button`,
              role: b === `response` ? `radio` : void 0,
              "aria-checked": b === `response` ? w.includes(e.id) : void 0,
              "aria-pressed": b === `image` ? w.includes(e.id) : void 0,
              className: ne(
                `cursor-interaction inline-flex items-center justify-center gap-2 rounded-full border border-default px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`,
                w.includes(e.id)
                  ? `bg-primary-solid text-primary-solid`
                  : `text-default hover:bg-surface-secondary`,
              ),
              onClick: () => ee(e.id),
              children: (0, R.jsx)(r, { ...e.label }),
            },
            e.id,
          )),
        (n[47] = ee),
        (n[48] = w),
        (n[49] = b),
        (n[50] = s))
      : (s = n[50]),
      (U = e.map(s)),
      (n[2] = C),
      (n[3] = h),
      (n[4] = g),
      (n[5] = oe),
      (n[6] = x),
      (n[7] = ae),
      (n[8] = T),
      (n[9] = u),
      (n[10] = d),
      (n[11] = p),
      (n[12] = se),
      (n[13] = w),
      (n[14] = S),
      (n[15] = b),
      (n[16] = E),
      (n[17] = D),
      (n[18] = O),
      (n[19] = k),
      (n[20] = A),
      (n[21] = j),
      (n[22] = M),
      (n[23] = N),
      (n[24] = P),
      (n[25] = F),
      (n[26] = I),
      (n[27] = L),
      (n[28] = B),
      (n[29] = V),
      (n[30] = H),
      (n[31] = U));
  } else
    ((E = n[16]),
      (D = n[17]),
      (O = n[18]),
      (k = n[19]),
      (A = n[20]),
      (j = n[21]),
      (M = n[22]),
      (N = n[23]),
      (P = n[24]),
      (F = n[25]),
      (I = n[26]),
      (L = n[27]),
      (B = n[28]),
      (V = n[29]),
      (H = n[30]),
      (U = n[31]));
  let W;
  n[51] !== B || n[52] !== V || n[53] !== H || n[54] !== U
    ? ((W = (0, R.jsx)(`div`, { role: B, "aria-label": V, className: H, children: U })),
      (n[51] = B),
      (n[52] = V),
      (n[53] = H),
      (n[54] = U),
      (n[55] = W))
    : (W = n[55]);
  let G;
  n[56] !== C || n[57] !== O || n[58] !== x
    ? ((G = O
        ? null
        : (0, R.jsx)(`div`, {
            className: `mt-6`,
            children: (0, R.jsx)(ie, {
              variant: `feedback`,
              name: `feedback`,
              autoComplete: `off`,
              "aria-label": x.formatMessage({
                id: `chatgpt.feedback.additionalFeedback`,
                defaultMessage: `Additional feedback`,
                description: `Accessible label for the optional text field in the ChatGPT response feedback dialog`,
              }),
              placeholder: x.formatMessage({
                id: `feedbackFormDialog.detailsPlaceholder.optional`,
                defaultMessage: `Share details (optional)`,
                description: `Placeholder for an optional freeform feedback details field`,
              }),
              value: C ?? ``,
              onChange: (e) => ce(e.target.value),
              onKeyDown: ve,
            }),
          })),
      (n[56] = C),
      (n[57] = O),
      (n[58] = x),
      (n[59] = G))
    : (G = n[59]);
  let K;
  n[60] === Symbol.for(`react.memo_cache_sentinel`) ? ((K = !1), (n[60] = K)) : (K = n[60]);
  let q;
  n[61] === l
    ? (q = n[62])
    : ((q =
        l &&
        (0, R.jsx)(r, {
          id: `chatgpt.feedback.workspaceDisclosure`,
          defaultMessage: `Your feedback can be used to improve ChatGPT. <link>Learn more</link>`,
          description: `Disclosure below the feedback form for a ChatGPT business workspace; the link explains how feedback data is used`,
          values: { link: _e },
        })),
      (n[61] = l),
      (n[62] = q));
  let J;
  n[63] !== l || n[64] !== b
    ? ((J =
        !l &&
        b === `image` &&
        (0, R.jsx)(r, {
          id: `chatgpt.feedback.imageConsumerDisclosure`,
          defaultMessage: `Submitting feedback will include this full conversation to help improve ChatGPT, even if 'Improve the model for everyone' is turned off. <link>Learn more</link>`,
          description: `Disclosure below the generated-image feedback form for a personal ChatGPT account explaining that submitting feedback includes the full conversation even when model training is disabled; the link explains data use`,
          values: { link: ge },
        })),
      (n[63] = l),
      (n[64] = b),
      (n[65] = J))
    : (J = n[65]);
  let Y;
  n[66] !== l || n[67] !== b
    ? ((Y =
        !l &&
        b === `response` &&
        (0, R.jsx)(r, {
          id: `chatgpt.feedback.consumerDisclosure`,
          defaultMessage: `Your conversation will be included with your feedback to help improve ChatGPT. <link>Learn more</link>`,
          description: `Disclosure below the consumer ChatGPT feedback form explaining that the conversation accompanies submitted feedback; the link explains data use`,
          values: { link: he },
        })),
      (n[66] = l),
      (n[67] = b),
      (n[68] = Y))
    : (Y = n[68]);
  let X;
  n[69] !== q || n[70] !== J || n[71] !== Y
    ? ((X = (0, R.jsxs)(`div`, {
        className: `mt-4 rounded-lg bg-surface-secondary p-3 text-xs text-secondary`,
        children: [K, q, J, Y],
      })),
      (n[69] = q),
      (n[70] = J),
      (n[71] = Y),
      (n[72] = X))
    : (X = n[72]);
  let Ce = !D,
    we;
  n[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = (0, R.jsx)(r, {
        id: `feedbackFormDialog.submit`,
        defaultMessage: `Submit`,
        description: `Label for the button that submits feedback`,
      })),
      (n[73] = we))
    : (we = n[73]);
  let Z;
  n[74] !== T || n[75] !== Ce
    ? ((Z = (0, R.jsx)(`div`, {
        className: `mt-5 flex justify-end sm:mt-4`,
        children: (0, R.jsx)(t, {
          color: `primary`,
          size: `dialog`,
          type: `submit`,
          disabled: Ce,
          loading: T,
          children: we,
        }),
      })),
      (n[74] = T),
      (n[75] = Ce),
      (n[76] = Z))
    : (Z = n[76]);
  let Q;
  n[77] !== k || n[78] !== W || n[79] !== G || n[80] !== X || n[81] !== Z
    ? ((Q = (0, R.jsxs)(`div`, { className: k, children: [W, G, X, Z] })),
      (n[77] = k),
      (n[78] = W),
      (n[79] = G),
      (n[80] = X),
      (n[81] = Z),
      (n[82] = Q))
    : (Q = n[82]);
  let $;
  n[83] !== A || n[84] !== j || n[85] !== M || n[86] !== Q
    ? (($ = (0, R.jsxs)(`form`, { className: A, onSubmit: j, children: [M, Q] })),
      (n[83] = A),
      (n[84] = j),
      (n[85] = M),
      (n[86] = Q),
      (n[87] = $))
    : ($ = n[87]);
  let Te;
  return (
    n[88] !== E || n[89] !== N || n[90] !== P || n[91] !== F || n[92] !== I || n[93] !== L || n[94] !== $
      ? ((Te = (0, R.jsx)(E, {
          open: N,
          contentProps: P,
          onOpenChange: F,
          size: I,
          variant: L,
          children: $,
        })),
        (n[88] = E),
        (n[89] = N),
        (n[90] = P),
        (n[91] = F),
        (n[92] = I),
        (n[93] = L),
        (n[94] = $),
        (n[95] = Te))
      : (Te = n[95]),
    Te
  );
}
function he(e) {
  return (0, R.jsx)(
    D,
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
    D,
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
    D,
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
    ((be = h()),
      s(),
      a(),
      (xe = _()),
      l(),
      p(),
      m(),
      E(),
      b(),
      w(),
      oe(),
      de(),
      I(),
      j(),
      (R = g()),
      (z = n({
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
  let t = (0, U.c)(18),
    {
      conversationId: n,
      disabled: r,
      messageId: a,
      hasModelWrittenDil: s,
      isAnimated: te,
      variant: ne,
      onRatingSelected: l,
      renderControl: u,
    } = e,
    d = r !== void 0 && r,
    f = i(le),
    p = ee(),
    m = fe(),
    h = o(C),
    g = o(pe),
    _ = o(A),
    v = re(k, a),
    [y, b] = (0, W.useState)(!1),
    ie = ue(`2221440816`);
  if (!h || _ == null || !g) {
    let e;
    return (t[0] === u ? (e = t[1]) : ((e = u?.(null) ?? null), (t[0] = u), (t[1] = e)), e);
  }
  let x;
  if (
    t[2] !== n ||
    t[3] !== d ||
    t[4] !== s ||
    t[5] !== ie ||
    t[6] !== p ||
    t[7] !== te ||
    t[8] !== _ ||
    t[9] !== m ||
    t[10] !== a ||
    t[11] !== l ||
    t[12] !== y ||
    t[13] !== v ||
    t[14] !== u ||
    t[15] !== f ||
    t[16] !== ne
  ) {
    let e = (t, r) => {
        ae(f, L, {
          hasModelWrittenDil: s,
          hideFreeformInput: _ && ie,
          initialDetails: t,
          initialSelectedTags: r == null ? void 0 : [r],
          isBusiness: _,
          onReport: (t) => {
            (se(f, L),
              ae(f, F, {
                chatGptMessageId: a,
                reportEntityType: `conversation`,
                reportReasonsEntityType: `message`,
                threadId: n,
                onBackToFeedback: () => e(t, `safety-or-legal-concern`),
              }));
          },
          onSubmit: async (e) => {
            let { details: t, tags: r, tagChoices: i } = e;
            try {
              return (
                await f
                  .get(S)
                  .submitMessageFeedback(_, {
                    conversation_id: n,
                    message_id: a,
                    rating: `thumbsDown`,
                    render_state: f.get(O, a),
                    text: t,
                    tags: r,
                    tag_choices: i,
                  }),
                f.get(c).success(p.formatMessage(K.thanks)),
                !0
              );
            } catch {
              return (
                f
                  .get(c)
                  .danger(p.formatMessage(K.error), {
                    errorAnalytics: {
                      toastId: `message_feedback_failed`,
                      operation: `submit_message_feedback`,
                      errorCategory: `message`,
                      conversationId: n,
                      retryable: !0,
                    },
                  }),
                !1
              );
            }
          },
        });
      },
      r = async (t) => {
        if (!(d || y)) {
          (b(!0), t != null && l?.(t));
          try {
            let r = f.get(S),
              i = { conversation_id: n, message_id: a };
            (t == null
              ? await r.clearMessageFeedback(_, i)
              : await r.submitMessageFeedback(_, { ...i, rating: t, render_state: f.get(O, a) }),
              f.set(k, a, t),
              t === `thumbsDown` && m() && e());
          } catch {
            f.get(c).danger(p.formatMessage(K.error), {
              errorAnalytics: {
                toastId: `message_feedback_failed`,
                operation: t == null ? `clear_message_feedback` : `submit_message_feedback`,
                errorCategory: `message`,
                conversationId: n,
                retryable: !0,
              },
            });
          }
          b(!1);
        }
      },
      i = {
        variant: ne,
        isAnimated: te,
        disabled: d || y,
        rating: v,
        onRate: (e) => void r(v === e ? null : e),
        shouldRestoreFocus: H,
      };
    ((x = u == null ? (0, G.jsx)(M, { ...i }) : u(i, (e) => void r(e))),
      (t[2] = n),
      (t[3] = d),
      (t[4] = s),
      (t[5] = ie),
      (t[6] = p),
      (t[7] = te),
      (t[8] = _),
      (t[9] = m),
      (t[10] = a),
      (t[11] = l),
      (t[12] = y),
      (t[13] = v),
      (t[14] = u),
      (t[15] = f),
      (t[16] = ne),
      (t[17] = x));
  } else x = t[17];
  return x;
}
function H(e) {
  return e !== `thumbsDown`;
}
var U, W, G, K;
function q() {
  return (q = e(() => {
    ((U = h()),
      a(),
      (W = _()),
      l(),
      x(),
      d(),
      ce(),
      N(),
      P(),
      y(),
      w(),
      de(),
      T(),
      B(),
      j(),
      (G = g()),
      (K = n({
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
//# sourceMappingURL=message-rating-5e26d21ca44d.js.map
