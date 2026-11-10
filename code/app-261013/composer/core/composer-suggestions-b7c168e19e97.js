import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  Pxt as r,
  VDt as i,
  Vxt as a,
  Xot as o,
  Yot as s,
  jDt as c,
  t3 as l,
  vzt as u,
  xMt as d,
} from "./app-shared-bbfeca5e5737.js";
import { GMr as f, XMr as p, tNr as m } from "./app-initial-5851df3f6cb1.js";
import { n as h, t as g } from "./home-suggestion-staggered-item-85bcd6ed2372.js";
import { n as _, r as v, t as y } from "./queries-d88f39aa01b3.js";
function b(e) {
  let t = (0, w.c)(33),
    r = a(f),
    s = a(p),
    c;
  t[0] !== r || t[1] !== e || t[2] !== s
    ? ((c = _({ ...e, accountId: r, userId: s })), (t[0] = r), (t[1] = e), (t[2] = s), (t[3] = c))
    : (c = t[3]);
  let { data: l, isError: u, isFetchedAfterMount: d } = o(c),
    m;
  t[4] !== r || t[5] !== e || t[6] !== s
    ? ((m = y({ ...e, accountId: r, userId: s })), (t[4] = r), (t[5] = e), (t[6] = s), (t[7] = m))
    : (m = t[7]);
  let { data: h, isError: g } = o(m),
    v = e.disabled || l == null || u || (e.previewVersion?.is_current === !0 && !d),
    b = e.previewVersion?.is_current === !1 || (e.readOnly ?? (g || h?.readOnly !== !1)),
    S = i(),
    C;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, T.jsx)(n, {
        id: `recall.flashcards.composer.suggestion.review.label`,
        defaultMessage: `Review your flashcards`,
        description: `Short suggestion button above the composer when a learner opens a flashcard deck in ChatGPT Library. Selecting it sends a request to practice the cards in that deck. Keep the label concise; the other suggestions start a quiz or generate more cards.`,
      })),
      (t[8] = C))
    : (C = t[8]);
  let E;
  t[9] !== S || t[10] !== e
    ? ((E = () =>
        e.onSelectPrompt(
          S.formatMessage({
            id: `recall.flashcards.composer.suggestion.review.prompt`,
            defaultMessage: `Help me review the flashcards in this deck.`,
            description: `Message sent to ChatGPT when a learner selects Review your flashcards above the composer in the Library flashcard viewer. The open deck is attached to the request. Ask to practice the existing flashcards; this is a complete user message with no placeholders.`,
          }),
        )),
      (t[9] = S),
      (t[10] = e),
      (t[11] = E))
    : (E = t[11]);
  let D;
  t[12] !== v || t[13] !== E
    ? ((D = { id: `flashcards-review`, label: C, disabled: v, onClick: E }),
      (t[12] = v),
      (t[13] = E),
      (t[14] = D))
    : (D = t[14]);
  let O;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, T.jsx)(n, {
        id: `recall.flashcards.composer.suggestion.quiz.label`,
        defaultMessage: `Practice with a quiz`,
        description: `Short suggestion button above the composer in the Library flashcard viewer. Selecting it starts a quiz in chat based on the open deck. The other suggestions review flashcards or generate more cards.`,
      })),
      (t[15] = O))
    : (O = t[15]);
  let k;
  t[16] !== S || t[17] !== e
    ? ((k = () =>
        e.onSelectPrompt(
          S.formatMessage({
            id: `recall.flashcards.composer.suggestion.quiz.prompt`,
            defaultMessage: `Create a practice quiz based on the flashcards in this deck.`,
            description: `Complete message sent to ChatGPT when a learner selects Practice with a quiz in the Library flashcard viewer. The open deck is attached. Ask for a quiz on its content without changing the deck; there are no placeholders.`,
          }),
        )),
      (t[16] = S),
      (t[17] = e),
      (t[18] = k))
    : (k = t[18]);
  let A;
  t[19] !== v || t[20] !== k
    ? ((A = { id: `flashcards-quiz`, label: O, disabled: v, onClick: k }),
      (t[19] = v),
      (t[20] = k),
      (t[21] = A))
    : (A = t[21]);
  let j;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, T.jsx)(n, {
        id: `recall.flashcards.composer.suggestion.generate_more.label`,
        defaultMessage: `Generate more flashcards`,
        description: `Short suggestion button above the composer when a learner opens a flashcard deck in ChatGPT Library. Selecting it sends a request to generate and add cards to that deck. Keep the label concise; the other suggestions review existing cards or start a quiz.`,
      })),
      (t[22] = j))
    : (j = t[22]);
  let M = v || b,
    N;
  t[23] !== S || t[24] !== e
    ? ((N = () =>
        e.onSelectPrompt(
          S.formatMessage({
            id: `recall.flashcards.composer.suggestion.generate_more.prompt`,
            defaultMessage: `Generate more flashcards and add them to this deck.`,
            description: `Message sent to ChatGPT when a learner selects Generate more flashcards above the composer in the Library flashcard viewer. The open deck is attached to the request. Ask to expand that existing deck; this is a complete user message with no placeholders.`,
          }),
        )),
      (t[23] = S),
      (t[24] = e),
      (t[25] = N))
    : (N = t[25]);
  let P;
  t[26] !== N || t[27] !== M
    ? ((P = { id: `flashcards-generate-more`, label: j, disabled: M, onClick: N }),
      (t[26] = N),
      (t[27] = M),
      (t[28] = P))
    : (P = t[28]);
  let F;
  return (
    t[29] !== P || t[30] !== D || t[31] !== A
      ? ((F = (0, T.jsx)(`div`, {
          className: `-my-2 hide-scrollbar flex min-w-0 items-center gap-2 overflow-x-auto overflow-y-hidden overscroll-x-none py-2 select-none sm:flex-wrap sm:justify-center sm:overflow-visible`,
          children: [D, A, P].map(x),
        })),
        (t[29] = P),
        (t[30] = D),
        (t[31] = A),
        (t[32] = F))
      : (F = t[32]),
    F
  );
}
function x(e, n) {
  return (0, T.jsx)(
    g,
    {
      className: `max-w-full min-w-0 shrink-0`,
      index: n,
      variant: `list`,
      children: (0, T.jsx)(t, {
        className: `max-w-full`,
        allowShrink: !0,
        color: `outlineGhost`,
        size: `conversationFollowup`,
        disabled: e.disabled,
        onClick: e.onClick,
        onFocus: C,
        onMouseDown: S,
        children: (0, T.jsx)(`span`, { className: `truncate`, children: e.label }),
      }),
    },
    e.id,
  );
}
function S(e) {
  return e.preventDefault();
}
function C(e) {
  return e.currentTarget.scrollIntoView({ block: `nearest`, inline: `nearest` });
}
var w, T;
function E() {
  return (E = e(() => {
    ((w = u()), s(), r(), c(), h(), m(), l(), v(), (T = d()));
  }))();
}
E();
export { b as FlashcardsComposerSuggestions };
//# sourceMappingURL=composer-suggestions-b7c168e19e97.js.map
