import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  CY as i,
  DB as a,
  FBt as o,
  JO as s,
  Jx as c,
  LNt as l,
  MNt as u,
  Mst as d,
  NNt as f,
  NO as p,
  Na as m,
  OB as h,
  PBt as g,
  PO as _,
  Pa as v,
  Qst as y,
  Smt as b,
  TY as x,
  WO as S,
  XOt as ee,
  Y3 as te,
  Yx as C,
  Z3 as w,
  ZSt as T,
  cJ as E,
  cY as D,
  e6 as O,
  iCt as ne,
  jst as k,
  nB as A,
  okt as re,
  qO as j,
  rB as M,
  sct as N,
  tCt as ie,
  tkt as P,
  wH as ae,
} from "./app-shared-2feb3d4c6fcc.js";
import { BRr as oe, iRr as se, tyr as F, wLr as ce, zRr as le } from "./app-initial-ad16eaadf81f.js";
import { a as ue, i as I } from "./data-456ff8b7b618.js";
import { n as de, r as fe, t as L } from "./queries-f51d0da805fb.js";
import { n as R, r as pe, t as z } from "./analytics-e3d6fe450d6b.js";
import { i as B, n as me, r as he, t as ge } from "./grid-e2ad61bb5ece.js";
import { n as _e, r as ve, t as ye } from "./persistence-94404ca765fd.js";
function be(e) {
  let t = (0, xe.c)(24),
    { card: n, canDelete: r, canSave: i, onDelete: a, onCancel: o } = e,
    s = re(),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = u(he.EditorActions, `flex w-full items-center justify-between gap-3 select-none`)), (t[0] = l))
    : (l = t[0]);
  let d;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = { copy: (0, V.jsx)(E, {}), copied: (0, V.jsx)(ae, {}) }), (t[1] = d))
    : (d = t[1]);
  let f;
  t[2] !== n.back || t[3] !== n.front
    ? ((f = (0, V.jsx)(c, {
        className: `pointer-events-auto`,
        iconOnly: !0,
        icons: d,
        onCopy: (e) => p(`${n.front}; ${n.back}`, e),
      })),
      (t[2] = n.back),
      (t[3] = n.front),
      (t[4] = f))
    : (f = t[4]);
  let m;
  t[5] !== r || t[6] !== s || t[7] !== a
    ? ((m =
        a &&
        (0, V.jsx)(A, {
          tooltipContent: r
            ? (0, V.jsx)(P, {
                id: `libraryNext.flashcards.delete`,
                defaultMessage: `Delete card`,
                description: `Action that deletes the current flashcard from its saved deck.`,
              })
            : (0, V.jsx)(P, {
                id: `libraryNext.flashcards.keepOneCard`,
                defaultMessage: `Keep at least one card in the deck`,
                description: `Tooltip explaining why the final flashcard in a saved deck cannot be deleted.`,
              }),
          children: (0, V.jsx)(te, {
            className: `pointer-events-auto`,
            color: `ghost`,
            size: `icon`,
            type: `button`,
            disabled: !r,
            "aria-label": s.formatMessage({
              id: `libraryNext.flashcards.delete`,
              defaultMessage: `Delete card`,
              description: `Action that deletes the current flashcard from its saved deck.`,
            }),
            onClick: a,
            children: (0, V.jsx)(D, {}),
          }),
        })),
      (t[5] = r),
      (t[6] = s),
      (t[7] = a),
      (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] !== f || t[10] !== m
    ? ((h = (0, V.jsxs)(`div`, { className: `flex items-center gap-2`, children: [f, m] })),
      (t[9] = f),
      (t[10] = m),
      (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, V.jsx)(P, {
        id: `libraryNext.flashcards.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that closes the flashcard editor without saving the current changes.`,
      })),
      (t[12] = g))
    : (g = t[12]);
  let _;
  t[13] === o
    ? (_ = t[14])
    : ((_ = (0, V.jsx)(te, {
        className: `pointer-events-auto`,
        color: `outline`,
        radius: `full`,
        size: `dialog`,
        type: `button`,
        onClick: o,
        children: g,
      })),
      (t[13] = o),
      (t[14] = _));
  let v = !i,
    y;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, V.jsx)(P, {
        id: `libraryNext.flashcards.save`,
        defaultMessage: `Save`,
        description: `Button in the saved flashcard editor that saves text edits or an added card to Library.`,
      })),
      (t[15] = y))
    : (y = t[15]);
  let b;
  t[16] === v
    ? (b = t[17])
    : ((b = (0, V.jsx)(te, {
        className: `pointer-events-auto`,
        radius: `full`,
        size: `dialog`,
        type: `submit`,
        disabled: v,
        children: y,
      })),
      (t[16] = v),
      (t[17] = b));
  let x;
  t[18] !== b || t[19] !== _
    ? ((x = (0, V.jsxs)(`div`, { className: `flex items-center gap-2`, children: [_, b] })),
      (t[18] = b),
      (t[19] = _),
      (t[20] = x))
    : (x = t[20]);
  let S;
  return (
    t[21] !== x || t[22] !== h
      ? ((S = (0, V.jsxs)(`div`, { className: l, children: [h, x] })), (t[21] = x), (t[22] = h), (t[23] = S))
      : (S = t[23]),
    S
  );
}
var xe, V;
function H() {
  return (H = e(() => {
    ((xe = g()), f(), ee(), w(), C(), x(), M(), _(), B(), (V = l()));
  }))();
}
function Se(e) {
  let t = (0, U.c)(13),
    { label: n, name: r, value: i, autoFocus: a, errorId: o, onChange: s } = e,
    c = (0, W.useRef)(null),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = () => {
        let e = c.current,
          t = e?.parentElement;
        if (!e || !t) return;
        let n = () => {
          if (!e.clientWidth) return;
          let n = getComputedStyle(t),
            r = t.clientHeight - parseFloat(n.paddingTop) - parseFloat(n.paddingBottom);
          if (r <= 0) return;
          ((e.style.fontSize = ``), (e.style.lineHeight = ``), (e.style.height = `${r}px`));
          let i = getComputedStyle(e),
            a = parseFloat(i.fontSize),
            o = parseFloat(i.lineHeight) / a,
            s = 0,
            c = a,
            l = () => e.scrollHeight <= e.clientHeight && e.scrollWidth <= e.clientWidth;
          if (!l()) {
            for (; c - s > 0.1;) {
              let t = (s + c) / 2;
              ((e.style.fontSize = `${t}px`), (e.style.lineHeight = `${t * o}px`), l() ? (s = t) : (c = t));
            }
            ((e.style.fontSize = `${s}px`), (e.style.lineHeight = `${s * o}px`));
          }
          ((e.style.height = `0px`),
            (e.style.height = `${Math.min(e.scrollHeight, r)}px`),
            (e.scrollTop = 0),
            (e.scrollLeft = 0));
        };
        n();
        let r = new ResizeObserver(n);
        return (
          r.observe(t),
          document.fonts?.addEventListener(`loadingdone`, n),
          () => {
            (r.disconnect(), document.fonts?.removeEventListener(`loadingdone`, n));
          }
        );
      }),
      (t[0] = l))
    : (l = t[0]);
  let u;
  (t[1] === i ? (u = t[2]) : ((u = [i]), (t[1] = i), (t[2] = u)), (0, W.useLayoutEffect)(l, u));
  let d = o != null || void 0,
    f;
  t[3] === s ? (f = t[4]) : ((f = (e) => s(e.target.value)), (t[3] = s), (t[4] = f));
  let p;
  return (
    t[5] !== a || t[6] !== o || t[7] !== n || t[8] !== r || t[9] !== d || t[10] !== f || t[11] !== i
      ? ((p = (0, G.jsx)(`label`, {
          className: `${he.EditorCard} pointer-events-auto flex min-h-0 w-full items-center justify-center overflow-hidden rounded-3xl border border-primary-outline bg-surface px-5 py-5 shadow-card sm:px-6 sm:py-8 dark:bg-surface-secondary`,
          children: (0, G.jsx)(`textarea`, {
            ref: c,
            className: `min-h-0 w-full resize-none appearance-none overflow-hidden border-0 bg-transparent p-0 text-center text-2xl leading-8 text-default shadow-none ring-0 outline-none placeholder:text-tertiary focus:border-0 focus:ring-0 focus:outline-none focus-visible:outline-none sm:text-3xl sm:leading-10`,
            "aria-label": n,
            "aria-describedby": o,
            "aria-invalid": d,
            name: r,
            autoFocus: a,
            value: i,
            placeholder: n,
            required: !0,
            onChange: f,
          }),
        })),
        (t[5] = a),
        (t[6] = o),
        (t[7] = n),
        (t[8] = r),
        (t[9] = d),
        (t[10] = f),
        (t[11] = i),
        (t[12] = p))
      : (p = t[12]),
    p
  );
}
var U, W, G;
function Ce() {
  return (Ce = e(() => {
    ((U = g()), (W = o()), B(), (G = l()));
  }))();
}
function we(e) {
  let t = (0, Ae.c)(14),
    n = ne(le),
    r = ne(oe),
    i;
  t[0] !== n || t[1] !== r
    ? ((i = { accountId: n, userId: r }), (t[0] = n), (t[1] = r), (t[2] = i))
    : (i = t[2]);
  let [a] = (0, q.useState)(i);
  if (n == null || r == null) return null;
  let o;
  t[3] !== n || t[4] !== e.libraryFileId || t[5] !== e.previewVersion?.version_number || t[6] !== r
    ? ((o = JSON.stringify([n, r, e.libraryFileId, e.previewVersion?.version_number])),
      (t[3] = n),
      (t[4] = e.libraryFileId),
      (t[5] = e.previewVersion?.version_number),
      (t[6] = r),
      (t[7] = o))
    : (o = t[7]);
  let s = a.accountId === n && a.userId === r ? e.initialCard : void 0,
    c;
  return (
    t[8] !== n || t[9] !== e || t[10] !== o || t[11] !== s || t[12] !== r
      ? ((c = (0, J.jsx)(Te, { ...e, initialCard: s, accountId: n, userId: r }, o)),
        (t[8] = n),
        (t[9] = e),
        (t[10] = o),
        (t[11] = s),
        (t[12] = r),
        (t[13] = c))
      : (c = t[13]),
    c
  );
}
function Te(e) {
  let n = (0, Ae.c)(46),
    {
      libraryFileId: r,
      previewVersion: o,
      initialCardId: s,
      initialCard: c,
      analyticsContext: l,
      readOnly: u,
      onSaved: f,
      onCardsChanged: p,
      onEditorClose: h,
      onViewerClose: g,
      onRecoverDraft: _,
      accountId: v,
      userId: y,
    } = e,
    b = re(),
    x = o?.is_current === !1 ? o : void 0,
    S;
  n[0] !== v || n[1] !== r || n[2] !== o || n[3] !== y
    ? ((S = de({ accountId: v, userId: y, libraryFileId: r, previewVersion: o })),
      (n[0] = v),
      (n[1] = r),
      (n[2] = o),
      (n[3] = y),
      (n[4] = S))
    : (S = n[4]);
  let { data: ee, isError: C, isFetchedAfterMount: w, refetch: T } = d(S),
    E = o?.is_current === !0 && (!w || C) ? void 0 : ee,
    D;
  n[5] !== v || n[6] !== r || n[7] !== o || n[8] !== u || n[9] !== y
    ? ((D = L({ accountId: v, userId: y, libraryFileId: r, readOnly: u, previewVersion: o })),
      (n[5] = v),
      (n[6] = r),
      (n[7] = o),
      (n[8] = u),
      (n[9] = y),
      (n[10] = D))
    : (D = n[10]);
  let { data: O, isError: ne } = d(D),
    k = x == null ? (u ?? (ne ? !0 : O?.readOnly)) : !0,
    A;
  if (E || c) {
    let e;
    n[11] === T ? (e = n[12]) : ((e = () => void T()), (n[11] = T), (n[12] = e));
    let t;
    (n[13] !== v ||
    n[14] !== l ||
    n[15] !== E ||
    n[16] !== c ||
    n[17] !== s ||
    n[18] !== C ||
    n[19] !== k ||
    n[20] !== r ||
    n[21] !== p ||
    n[22] !== h ||
    n[23] !== _ ||
    n[24] !== f ||
    n[25] !== e ||
    n[26] !== y
      ? ((t = (0, J.jsx)(K, {
          snapshot: E,
          libraryFileId: r,
          initialCardId: s,
          seededCard: c,
          analyticsContext: l,
          readOnly: k,
          accountId: v,
          userId: y,
          onSaved: f,
          onCardsChanged: p,
          onEditorClose: h,
          onRecoverDraft: _,
          loadFailed: C,
          onRetryLoad: e,
        })),
        (n[13] = v),
        (n[14] = l),
        (n[15] = E),
        (n[16] = c),
        (n[17] = s),
        (n[18] = C),
        (n[19] = k),
        (n[20] = r),
        (n[21] = p),
        (n[22] = h),
        (n[23] = _),
        (n[24] = f),
        (n[25] = e),
        (n[26] = y),
        (n[27] = t))
      : (t = n[27]),
      (A = t));
  } else if (C) {
    let e;
    n[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(P, {
          id: `libraryNext.flashcards.loadError`,
          defaultMessage: `This flashcard deck couldn’t be loaded`,
          description: `Error in the saved flashcard preview when the current Library deck is unavailable or invalid.`,
        })),
        (n[28] = e))
      : (e = n[28]);
    let t;
    n[29] === T ? (t = n[30]) : ((t = () => void T()), (n[29] = T), (n[30] = t));
    let r;
    n[31] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, J.jsx)(P, {
          id: `libraryNext.flashcards.retry`,
          defaultMessage: `Retry`,
          description: `Button in the saved flashcard preview that retries loading the current Library deck.`,
        })),
        (n[31] = r))
      : (r = n[31]);
    let i;
    (n[32] === t
      ? (i = n[33])
      : ((i = (0, J.jsxs)(`div`, {
          className: `flex flex-col gap-4 p-6`,
          role: `alert`,
          children: [e, (0, J.jsx)(te, { onClick: t, children: r })],
        })),
        (n[32] = t),
        (n[33] = i)),
      (A = i));
  } else {
    let e;
    (n[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(`div`, {
          className: `flex min-h-0 flex-1 items-center justify-center`,
          children: (0, J.jsx)(t, {}),
        })),
        (n[34] = e))
      : (e = n[34]),
      (A = e));
  }
  let j;
  n[35] !== E || n[36] !== c || n[37] !== s || n[38] !== b || n[39] !== k || n[40] !== h || n[41] !== g
    ? ((j =
        g &&
        (!h ||
          k === !0 ||
          (!c &&
            (!E ||
              !E.artifact.cards.some((e) => {
                let { id: t } = e;
                return t === s;
              })))) &&
        (0, J.jsxs)(`header`, {
          className: `sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b border-subtle bg-surface px-2 select-none md:px-4`,
          children: [
            (0, J.jsx)(`button`, {
              type: `button`,
              className: `flex size-9 cursor-interaction items-center justify-center rounded-lg text-default hover:bg-primary-ghost-hover focus-visible:outline focus-visible:outline-ring pointer-coarse:size-10`,
              "aria-label": b.formatMessage({
                id: `libraryNext.flashcards.closeFullscreen`,
                defaultMessage: `Close fullscreen view`,
                description: `Accessible label for the close button in the full-screen saved flashcard viewer header.`,
              }),
              onClick: g,
              children: (0, J.jsx)(i, {}),
            }),
            (0, J.jsx)(a, { asset: m, className: `shrink-0` }),
            (0, J.jsx)(`span`, {
              className: `truncate text-base font-medium text-default`,
              children:
                E?.artifact.title ??
                (0, J.jsx)(P, {
                  id: `libraryNext.flashcards.dialogTitle`,
                  defaultMessage: `Flashcards`,
                  description: `Accessible dialog title for viewing and editing a saved flashcard deck opened from a conversation.`,
                }),
            }),
          ],
        })),
      (n[35] = E),
      (n[36] = c),
      (n[37] = s),
      (n[38] = b),
      (n[39] = k),
      (n[40] = h),
      (n[41] = g),
      (n[42] = j))
    : (j = n[42]);
  let M;
  return (
    n[43] !== A || n[44] !== j
      ? ((M = (0, J.jsxs)(`div`, { className: `flex h-full min-h-0 flex-col`, children: [j, A] })),
        (n[43] = A),
        (n[44] = j),
        (n[45] = M))
      : (M = n[45]),
    M
  );
}
function K(e) {
  let t = (0, Ae.c)(158),
    {
      snapshot: r,
      libraryFileId: i,
      initialCardId: a,
      seededCard: o,
      analyticsContext: s,
      readOnly: c,
      accountId: l,
      userId: u,
      onSaved: f,
      onCardsChanged: p,
      onEditorClose: m,
      onRecoverDraft: h,
      loadFailed: g,
      onRetryLoad: _,
    } = e,
    v = n(y),
    [x, ee] = (0, q.useState)(null),
    C = (0, q.useRef)(null),
    w = (0, q.useId)(),
    T;
  t[0] !== l || t[1] !== i || t[2] !== u
    ? ((T = { accountId: l, userId: u, libraryFileId: i }), (t[0] = l), (t[1] = i), (t[2] = u), (t[3] = T))
    : (T = t[3]);
  let E = ie(_e, T),
    D = ne(E.pending$),
    O = ne(E.failed$),
    k;
  t[4] !== D || t[5] !== c || t[6] !== r
    ? ((k = r && (c === !1 ? D.reduce(ye, r.artifact) : r.artifact)),
      (t[4] = D),
      (t[5] = c),
      (t[6] = r),
      (t[7] = k))
    : (k = t[7]);
  let A = k,
    M;
  t[8] !== A?.cards || t[9] !== a || t[10] !== o
    ? ((M =
        o ??
        A?.cards.find((e) => {
          let { id: t } = e;
          return t === a;
        })),
      (t[8] = A?.cards),
      (t[9] = a),
      (t[10] = o),
      (t[11] = M))
    : (M = t[11]);
  let N = M,
    ae;
  t[12] === O ? (ae = t[13]) : ((ae = O.at(-1)), (t[12] = O), (t[13] = ae));
  let F = ae,
    ce;
  t[14] !== O || t[15] !== a || t[16] !== F
    ? ((ce = a == null ? F : O.find((e) => e.card.id === a)),
      (t[14] = O),
      (t[15] = a),
      (t[16] = F),
      (t[17] = ce))
    : (ce = t[17]);
  let I = ce,
    de = re(),
    fe;
  t[18] !== N || t[19] !== I
    ? ((fe = () =>
        I ? { card: I.card, previousCard: I.previousCard } : N ? { card: N, previousCard: N } : null),
      (t[18] = N),
      (t[19] = I),
      (t[20] = fe))
    : (fe = t[20]);
  let [L, z] = (0, q.useState)(fe),
    [B, me] = (0, q.useState)(`all`),
    ve;
  t[21] === Symbol.for(`react.memo_cache_sentinel`) ? ((ve = []), (t[21] = ve)) : (ve = t[21]);
  let [xe, V] = (0, q.useState)(ve),
    [H, U] = (0, q.useState)(!!I && c === !1),
    [W, G] = (0, q.useState)(!1),
    [Ce, we] = (0, q.useState)(I?.id ?? null),
    Te;
  t[22] === L
    ? (Te = t[23])
    : ((Te = L != null && (ue(L.card.front.trim()) || ue(L.card.back.trim()))), (t[22] = L), (t[23] = Te));
  let K = Te,
    je;
  t[24] !== A?.cards || t[25] !== L || t[26] !== r
    ? ((je =
        r != null &&
        L?.previousCard != null &&
        !A?.cards.some((e) => {
          let { id: t } = e;
          return t === L.card.id;
        })),
      (t[24] = A?.cards),
      (t[25] = L),
      (t[26] = r),
      (t[27] = je))
    : (je = t[27]);
  let Y = je;
  F &&
    F.id !== Ce &&
    !L &&
    c === !1 &&
    (m == null || F.card.id === a) &&
    (we(F.id), z({ card: F.card, previousCard: F.previousCard }), U(!0), G(!1));
  let Me = s?.surface === `chat_grid` || s?.surface === `chat_editor` ? `chat_grid` : `library_grid`,
    Ne;
  t[28] !== s || t[29] !== i || t[30] !== Me
    ? ((Ne = { ...s, libraryFileId: i, surface: Me }), (t[28] = s), (t[29] = i), (t[30] = Me), (t[31] = Ne))
    : (Ne = t[31]);
  let X = Ne,
    Pe = X.surface === `chat_grid` ? `chat_editor` : `library_editor`,
    Fe;
  t[32] !== X || t[33] !== Pe
    ? ((Fe = { ...X, surface: Pe }), (t[32] = X), (t[33] = Pe), (t[34] = Fe))
    : (Fe = t[34]);
  let Z = Fe,
    Ie;
  t[35] !== l || t[36] !== i || t[37] !== u
    ? ((Ie = [`learning-flashcards-progress`, l, u, i]), (t[35] = l), (t[36] = i), (t[37] = u), (t[38] = Ie))
    : (Ie = t[38]);
  let Le;
  t[39] !== l || t[40] !== i
    ? ((Le = (e) => {
        let { signal: t } = e;
        return se.safeGet(`/learning/flashcards/{library_file_id}/progress`, {
          additionalHeaders: { "x-openai-use-sheep": `1`, [b]: l },
          parameters: { path: { library_file_id: i } },
          signal: t,
        });
      }),
      (t[39] = l),
      (t[40] = i),
      (t[41] = Le))
    : (Le = t[41]);
  let Re = c === !1 && m == null,
    ze;
  t[42] !== Ie || t[43] !== Le || t[44] !== Re
    ? ((ze = { queryKey: Ie, queryFn: Le, enabled: Re, staleTime: 0 }),
      (t[42] = Ie),
      (t[43] = Le),
      (t[44] = Re),
      (t[45] = ze))
    : (ze = t[45]);
  let { data: Be, isError: Ve } = d(ze),
    He;
  t[46] !== l || t[47] !== v || t[48] !== u
    ? ((He = () => v.get(le) === l && v.get(oe) === u), (t[46] = l), (t[47] = v), (t[48] = u), (t[49] = He))
    : (He = t[49]);
  let Ue = He,
    We = c === !1 && !Y && L?.previousCard != null && A != null && A.cards.length > 1,
    Ge;
  t[50] !== We ||
  t[51] !== L ||
  t[52] !== Z ||
  t[53] !== E ||
  t[54] !== Ue ||
  t[55] !== p ||
  t[56] !== m ||
  t[57] !== h ||
  t[58] !== f ||
  t[59] !== v ||
  t[60] !== r ||
  t[61] !== x
    ? ((Ge = () => {
        We &&
          L?.previousCard &&
          r &&
          Ue() &&
          ((C.current =
            Array.from(Xe.current?.querySelectorAll(`button`) ?? []).find(
              (e) => e.closest(`[data-flashcard-id]`)?.getAttribute(`data-flashcard-id`) !== L.card.id,
            ) ??
            x?.querySelector(`button[aria-pressed="true"]`) ??
            null),
          E.enqueue(
            v,
            r,
            { id: crypto.randomUUID(), card: L.card, previousCard: L.previousCard, delete: !0 },
            Z,
            f,
            p,
            h,
          ),
          z(null),
          U(!1),
          G(!0),
          m?.());
      }),
      (t[50] = We),
      (t[51] = L),
      (t[52] = Z),
      (t[53] = E),
      (t[54] = Ue),
      (t[55] = p),
      (t[56] = m),
      (t[57] = h),
      (t[58] = f),
      (t[59] = v),
      (t[60] = r),
      (t[61] = x),
      (t[62] = Ge))
    : (Ge = t[62]);
  let Ke = Ge,
    qe;
  t[63] !== L ||
  t[64] !== Y ||
  t[65] !== K ||
  t[66] !== Z ||
  t[67] !== E ||
  t[68] !== Ue ||
  t[69] !== p ||
  t[70] !== m ||
  t[71] !== h ||
  t[72] !== f ||
  t[73] !== c ||
  t[74] !== v ||
  t[75] !== r
    ? ((qe = () => {
        if (!L || !r || c !== !1 || Y || !Ue()) return;
        let e = { id: crypto.randomUUID(), ...L },
          t = { edit_id: e.id, card_id: L.card.id, change_type: L.previousCard == null ? `add` : `edit` };
        if ((R(v, `edit_save_attempt`, Z, t), !L.card.front.trim() || !L.card.back.trim())) {
          R(v, `edit_save_result`, Z, {
            ...t,
            outcome: `invalid`,
            acknowledged: !1,
            failure_reason: `empty`,
          });
          return;
        }
        if (K) {
          (R(v, `edit_save_result`, Z, {
            ...t,
            outcome: `invalid`,
            acknowledged: !1,
            failure_reason: `length`,
          }),
            U(!0));
          return;
        }
        if (L.previousCard?.front === L.card.front && L.previousCard.back === L.card.back) {
          (R(v, `edit_save_result`, Z, { ...t, outcome: `unchanged`, acknowledged: !1 }),
            E.clearFailure(v, L.card.id),
            z(null),
            U(!1),
            m?.());
          return;
        }
        (E.enqueue(
          v,
          r,
          { ...e, card: { ...L.card, front: L.card.front.trim(), back: L.card.back.trim() } },
          Z,
          f,
          p,
          h,
        ),
          z(null),
          U(!1),
          G(!0),
          m?.());
      }),
      (t[63] = L),
      (t[64] = Y),
      (t[65] = K),
      (t[66] = Z),
      (t[67] = E),
      (t[68] = Ue),
      (t[69] = p),
      (t[70] = m),
      (t[71] = h),
      (t[72] = f),
      (t[73] = c),
      (t[74] = v),
      (t[75] = r),
      (t[76] = qe))
    : (qe = t[76]);
  let Je = qe,
    Ye;
  t[77] !== A?.cards || t[78] !== B || t[79] !== Be?.card_progress
    ? ((Ye = A?.cards.filter(
        (e) =>
          B === `all` ||
          Be?.card_progress[e.id]?.reviews.at(-1)?.outcome === (B === `reviewed` ? `known` : B),
      )),
      (t[77] = A?.cards),
      (t[78] = B),
      (t[79] = Be?.card_progress),
      (t[80] = Ye))
    : (Ye = t[80]);
  let Q = Ye,
    Xe = (0, q.useRef)(null),
    Ze = (0, q.useRef)(null),
    Qe;
  t[81] === Symbol.for(`react.memo_cache_sentinel`) ? ((Qe = new Set()), (t[81] = Qe)) : (Qe = t[81]);
  let $e = (0, q.useRef)(Qe),
    et = (0, q.useRef)(!1),
    tt;
  t[82] !== B || t[83] !== X || t[84] !== v || t[85] !== Q
    ? ((tt = (e) => {
        if (!Q) return;
        et.current || ((et.current = !0), R(v, `grid_opened`, X, { card_count: Q.length, filter: B }));
        let t = Q.findIndex((t) => t.id === e.getAttribute(`data-flashcard-id`)),
          n = Q[t];
        n &&
          !$e.current.has(n.id) &&
          ($e.current.add(n.id),
          R(v, `card_viewed`, X, {
            card_id: n.id,
            card_position: t + 1,
            card_count: Q.length,
            card_face: `front`,
            filter: B,
          }));
      }),
      (t[82] = B),
      (t[83] = X),
      (t[84] = v),
      (t[85] = Q),
      (t[86] = tt))
    : (tt = t[86]);
  let nt = (0, q.useEffectEvent)(tt),
    $ = c === !0 ? void 0 : L?.card.id,
    rt;
  t[87] !== $ || t[88] !== nt
    ? ((rt = () => {
        let e = Xe.current;
        if (e && $ == null) return pe([e, ...e.querySelectorAll(`[data-flashcard-id]`)], nt);
      }),
      (t[87] = $),
      (t[88] = nt),
      (t[89] = rt))
    : (rt = t[89]);
  let it;
  (t[90] !== $ || t[91] !== Q ? ((it = [$, Q]), (t[90] = $), (t[91] = Q), (t[92] = it)) : (it = t[92]),
    (0, q.useEffect)(rt, it));
  let at;
  t[93] !== L || t[94] !== Z || t[95] !== v
    ? ((at = () => {
        L &&
          R(v, `editor_opened`, Z, {
            card_id: L.card.id,
            change_type: L.previousCard == null ? `add` : `edit`,
          });
      }),
      (t[93] = L),
      (t[94] = Z),
      (t[95] = v),
      (t[96] = at))
    : (at = t[96]);
  let ot = (0, q.useEffectEvent)(at),
    st;
  t[97] !== $ || t[98] !== ot
    ? ((st = () => {
        let e = Ze.current;
        if (!e || $ == null) return;
        let t = !1;
        return pe([e], () => {
          t || ((t = !0), ot());
        });
      }),
      (t[97] = $),
      (t[98] = ot),
      (t[99] = st))
    : (st = t[99]);
  let ct;
  (t[100] !== $ || t[101] !== x ? ((ct = [$, x]), (t[100] = $), (t[101] = x), (t[102] = ct)) : (ct = t[102]),
    (0, q.useEffect)(st, ct));
  let lt;
  t[103] !== L || t[104] !== Z || t[105] !== E || t[106] !== m || t[107] !== v
    ? ((lt = () => {
        L &&
          (R(v, `editor_cancelled`, Z, {
            card_id: L.card.id,
            change_type: L.previousCard == null ? `add` : `edit`,
          }),
          E.clearFailure(v, L.card.id),
          z(null),
          U(!1),
          m?.());
      }),
      (t[103] = L),
      (t[104] = Z),
      (t[105] = E),
      (t[106] = m),
      (t[107] = v),
      (t[108] = lt))
    : (lt = t[108]);
  let ut = lt,
    dt = `relative flex min-h-0 flex-1 flex-col overflow-hidden ${m == null ? `bg-surface-card` : `bg-transparent`}`,
    ft;
  t[109] !== L || t[110] !== N || t[111] !== a || t[112] !== r
    ? ((ft =
        r &&
        a &&
        !N &&
        !L &&
        (0, J.jsx)(`p`, {
          role: `status`,
          children: (0, J.jsx)(P, {
            id: `libraryNext.flashcards.missingCard`,
            defaultMessage: `This card is no longer in the deck`,
            description: `Notice in the saved flashcard preview when an inline Edit action refers to a card removed from the current saved deck. The remaining deck can still be viewed.`,
          }),
        })),
      (t[109] = L),
      (t[110] = N),
      (t[111] = a),
      (t[112] = r),
      (t[113] = ft))
    : (ft = t[113]);
  let pt;
  t[114] === c
    ? (pt = t[115])
    : ((pt =
        c === !0 &&
        (0, J.jsx)(`p`, {
          className: `text-secondary select-none`,
          children: (0, J.jsx)(P, {
            id: `libraryNext.flashcards.readOnly`,
            defaultMessage: `View only`,
            description: `Short notice in a saved flashcard preview when editing is unavailable, including historical versions.`,
          }),
        })),
      (t[114] = c),
      (t[115] = pt));
  let mt;
  t[116] === Ve
    ? (mt = t[117])
    : ((mt =
        Ve &&
        (0, J.jsx)(`p`, {
          role: `status`,
          children: (0, J.jsx)(P, {
            id: `libraryNext.flashcards.progressError`,
            defaultMessage: `Review progress couldn’t be loaded`,
            description: `Notice in a saved flashcard preview when private review history is unavailable. The deck content remains visible.`,
          }),
        })),
      (t[116] = Ve),
      (t[117] = mt));
  let ht;
  t[118] !== H || t[119] !== D || t[120] !== W
    ? ((ht =
        W &&
        D.length === 0 &&
        !H &&
        (0, J.jsx)(`p`, {
          className: `sr-only`,
          role: `status`,
          children: (0, J.jsx)(P, {
            id: `libraryNext.flashcards.saved`,
            defaultMessage: `Changes saved`,
            description: `Confirmation in the saved flashcard editor after the server accepts the new Library version.`,
          }),
        })),
      (t[118] = H),
      (t[119] = D),
      (t[120] = W),
      (t[121] = ht))
    : (ht = t[121]);
  let gt;
  t[122] !== A?.title ||
  t[123] !== We ||
  t[124] !== ut ||
  t[125] !== Ke ||
  t[126] !== L ||
  t[127] !== Y ||
  t[128] !== K ||
  t[129] !== w ||
  t[130] !== H ||
  t[131] !== de ||
  t[132] !== g ||
  t[133] !== _ ||
  t[134] !== Je ||
  t[135] !== c ||
  t[136] !== r ||
  t[137] !== x
    ? ((gt =
        L &&
        c !== !0 &&
        x &&
        (0, J.jsxs)(S, {
          open: !0,
          modal: !1,
          unstyledContent: !0,
          portalContainer: x,
          contentClassName: `@container/flashcard-editor flex h-full w-full items-center justify-center overflow-hidden bg-surface/70 backdrop-blur-sm`,
          showDialogClose: !1,
          onOpenChange: (e) => {
            e || ut();
          },
          contentProps: {
            onInteractOutside: ke,
            onEscapeKeyDown: Oe,
            onCloseAutoFocus: (e) => {
              (e.preventDefault(),
                C.current?.isConnected
                  ? C.current.focus()
                  : (
                      Xe.current?.querySelector(`button`) ?? x?.querySelector(`button[aria-pressed="true"]`)
                    )?.focus());
            },
          },
          children: [
            (0, J.jsx)(j, {
              className: `sr-only`,
              children:
                A?.title ??
                (0, J.jsx)(P, {
                  id: `libraryNext.flashcards.dialogTitle`,
                  defaultMessage: `Flashcards`,
                  description: `Accessible dialog title for viewing and editing a saved flashcard deck opened from a conversation.`,
                }),
            }),
            (0, J.jsx)(`button`, {
              className: `absolute inset-0 cursor-default`,
              "aria-label": de.formatMessage({
                id: `libraryNext.flashcards.editor.close`,
                defaultMessage: `Close editor`,
                description: `Accessible label for the backdrop behind the two editable card faces. Clicking it cancels the current flashcard edit and returns to the saved deck or conversation without saving.`,
              }),
              tabIndex: -1,
              onClick: ut,
            }),
            (0, J.jsxs)(`form`, {
              ref: Ze,
              noValidate: !0,
              className: `${he.EditorContents} pointer-events-none relative z-10 my-auto flex max-h-full w-full flex-col items-center gap-4 px-4 py-6 sm:gap-6 sm:px-0`,
              onKeyDown: De,
              onSubmit: (e) => {
                (e.preventDefault(), Je());
              },
              children: [
                (0, J.jsxs)(`div`, {
                  className: `${he.EditorFields} grid min-h-0 w-full justify-items-center gap-4 sm:gap-6`,
                  children: [
                    (0, J.jsx)(Se, {
                      name: `front`,
                      autoFocus: !0,
                      label: de.formatMessage({
                        id: `libraryNext.flashcards.front`,
                        defaultMessage: `Front`,
                        description: `Label for the editable question or prompt side of a saved flashcard.`,
                      }),
                      value: L.card.front,
                      errorId: H ? w : void 0,
                      onChange: (e) => z({ ...L, card: { ...L.card, front: e } }),
                    }),
                    (0, J.jsx)(Se, {
                      name: `back`,
                      label: de.formatMessage({
                        id: `libraryNext.flashcards.back`,
                        defaultMessage: `Back`,
                        description: `Label for the editable answer side of a saved flashcard.`,
                      }),
                      value: L.card.back,
                      errorId: H ? w : void 0,
                      onChange: (e) => z({ ...L, card: { ...L.card, back: e } }),
                    }),
                  ],
                }),
                Y &&
                  (0, J.jsx)(`p`, {
                    className: `pointer-events-auto`,
                    role: `alert`,
                    children: (0, J.jsx)(P, {
                      id: `libraryNext.flashcards.missingCard`,
                      defaultMessage: `This card is no longer in the deck`,
                      description: `Notice in the saved flashcard preview when an inline Edit action refers to a card removed from the current saved deck. The remaining deck can still be viewed.`,
                    }),
                  }),
                H &&
                  (0, J.jsx)(`div`, {
                    id: w,
                    className: `pointer-events-auto flex flex-col gap-2`,
                    role: `alert`,
                    children: K
                      ? (0, J.jsx)(P, {
                          id: `libraryNext.flashcards.editorSideLengthError`,
                          defaultMessage: `Use {limit, number} characters or fewer on each side`,
                          description: `Validation error when the front or back of a flashcard exceeds the editor's character limit. Existing card text remains intact so the user can shorten it before saving.`,
                          values: { limit: 400 },
                        })
                      : (0, J.jsx)(P, {
                          id: `libraryNext.flashcards.saveError`,
                          defaultMessage: `Changes weren’t saved. The deck may have changed or editing may be unavailable. Your draft is still here.`,
                          description: `Error in the saved flashcard editor after a rejected write, conflict, or network failure. Draft text is retained so the user can copy it before reloading.`,
                        }),
                  }),
                g &&
                  (0, J.jsxs)(`div`, {
                    className: `pointer-events-auto flex flex-col gap-2`,
                    role: `alert`,
                    children: [
                      (0, J.jsx)(P, {
                        id: `libraryNext.flashcards.loadError`,
                        defaultMessage: `This flashcard deck couldn’t be loaded`,
                        description: `Error in the saved flashcard preview when the current Library deck is unavailable or invalid.`,
                      }),
                      (0, J.jsx)(te, {
                        type: `button`,
                        onClick: _,
                        children: (0, J.jsx)(P, {
                          id: `libraryNext.flashcards.retry`,
                          defaultMessage: `Retry`,
                          description: `Button in the saved flashcard preview that retries loading the current Library deck.`,
                        }),
                      }),
                    ],
                  }),
                (0, J.jsx)(be, {
                  card: L.card,
                  canDelete: We,
                  onDelete: L.previousCard ? Ke : void 0,
                  onCancel: ut,
                  canSave: r != null && c === !1 && !Y && !!L.card.front.trim() && !!L.card.back.trim(),
                }),
              ],
            }),
          ],
        })),
      (t[122] = A?.title),
      (t[123] = We),
      (t[124] = ut),
      (t[125] = Ke),
      (t[126] = L),
      (t[127] = Y),
      (t[128] = K),
      (t[129] = w),
      (t[130] = H),
      (t[131] = de),
      (t[132] = g),
      (t[133] = _),
      (t[134] = Je),
      (t[135] = c),
      (t[136] = r),
      (t[137] = x),
      (t[138] = gt))
    : (gt = t[138]);
  let _t;
  t[139] !== A ||
  t[140] !== L ||
  t[141] !== B ||
  t[142] !== X ||
  t[143] !== m ||
  t[144] !== xe ||
  t[145] !== Be?.card_progress ||
  t[146] !== c ||
  t[147] !== v ||
  t[148] !== Q
    ? ((_t =
        m == null &&
        A &&
        Q &&
        (0, J.jsxs)(`div`, {
          inert: L != null && c !== !0,
          "aria-hidden": (L != null && c !== !0) || void 0,
          className: `flex min-h-0 flex-1 flex-col`,
          children: [
            c === !1 &&
              (0, J.jsx)(`div`, {
                className: `flex h-14 shrink-0 items-center justify-between gap-1 px-2 select-none sm:px-4`,
                children: (0, J.jsx)(`div`, {
                  className: `flex min-w-0 gap-0 text-sm sm:gap-1`,
                  children: [
                    {
                      key: `all`,
                      name: (0, J.jsx)(P, {
                        id: `libraryNext.flashcards.filter.all`,
                        defaultMessage: `All`,
                        description: `Filter tab showing every card in a saved flashcard deck, including cards not yet reviewed.`,
                      }),
                    },
                    {
                      key: `reviewed`,
                      name: (0, J.jsx)(P, {
                        id: `libraryNext.flashcards.filter.known`,
                        defaultMessage: `Know`,
                        description: `Filter tab showing saved flashcards the learner marked as known in their latest review.`,
                      }),
                    },
                    {
                      key: `missed`,
                      name: (0, J.jsx)(P, {
                        id: `libraryNext.flashcards.filter.missed`,
                        defaultMessage: `Don’t know`,
                        description: `Filter tab showing saved flashcards the learner marked as missed in their latest review.`,
                      }),
                    },
                  ].map((e) => {
                    let { key: t, name: n } = e;
                    return (0, J.jsx)(
                      `button`,
                      {
                        type: `button`,
                        "aria-pressed": B === t,
                        className: `shrink-0 cursor-interaction rounded-full px-2 py-2 sm:px-3 ${B === t ? `bg-surface-tertiary text-default` : `text-secondary`}`,
                        onClick: () => {
                          t !== B &&
                            (R(v, `filter_changed`, X, { filter: t, previous_filter: B }),
                            V(Q.map(Ee)),
                            me(t));
                        },
                        children: n,
                      },
                      t,
                    );
                  }),
                }),
              }),
            (0, J.jsxs)(`div`, {
              className: `@container/flashcards min-h-0 flex-1 overflow-auto px-3 pt-3 pb-[calc(1.5rem+env(safe-area-inset-bottom))] sm:px-4 sm:pb-24`,
              children: [
                Q.length === 0 &&
                  B !== `all` &&
                  (0, J.jsx)(`p`, {
                    className: `px-3 py-10 text-center text-sm font-light text-tertiary select-none`,
                    role: `status`,
                    children:
                      B === `reviewed`
                        ? (0, J.jsx)(P, {
                            id: `libraryNext.flashcards.filter.emptyKnown`,
                            defaultMessage: `Review more cards to see which ones you know`,
                            description: `Empty state in the Know tab of a saved flashcard deck when the learner has not marked any cards as known.`,
                          })
                        : (0, J.jsx)(P, {
                            id: `libraryNext.flashcards.filter.emptyMissed`,
                            defaultMessage: `No cards missed yet`,
                            description: `Empty state in the Don't know tab of a saved flashcard deck when the learner has not marked any cards as missed.`,
                          }),
                  }),
                (0, J.jsx)(ge, {
                  gridRef: Xe,
                  previousVisibleCardIds: xe,
                  cards: Q.map((e) => ({ ...e, outcome: Be?.card_progress[e.id]?.reviews.at(-1)?.outcome })),
                  canAdd: c === !1 && B === `all` && A.cards.length < 100,
                  readOnly: c !== !1,
                  onEdit: (e, t) => {
                    ((C.current = t), G(!1), z({ card: e, previousCard: e }));
                  },
                  onAdd: () => {
                    ((C.current =
                      document.activeElement instanceof HTMLButtonElement ? document.activeElement : null),
                      G(!1));
                    let e = { id: crypto.randomUUID(), front: ``, back: `` };
                    (R(v, `add_card_clicked`, X, { card_id: e.id, card_count: A.cards.length }),
                      z({ card: e, previousCard: void 0 }));
                  },
                }),
              ],
            }),
          ],
        })),
      (t[139] = A),
      (t[140] = L),
      (t[141] = B),
      (t[142] = X),
      (t[143] = m),
      (t[144] = xe),
      (t[145] = Be?.card_progress),
      (t[146] = c),
      (t[147] = v),
      (t[148] = Q),
      (t[149] = _t))
    : (_t = t[149]);
  let vt;
  return (
    t[150] !== dt ||
    t[151] !== ft ||
    t[152] !== pt ||
    t[153] !== mt ||
    t[154] !== ht ||
    t[155] !== gt ||
    t[156] !== _t
      ? ((vt = (0, J.jsxs)(`div`, { ref: ee, className: dt, children: [ft, pt, mt, ht, gt, _t] })),
        (t[150] = dt),
        (t[151] = ft),
        (t[152] = pt),
        (t[153] = mt),
        (t[154] = ht),
        (t[155] = gt),
        (t[156] = _t),
        (t[157] = vt))
      : (vt = t[157]),
    vt
  );
}
function Ee(e) {
  let { id: t } = e;
  return t;
}
function De(e) {
  e.key === `Enter` && (e.metaKey || e.ctrlKey) && (e.preventDefault(), e.currentTarget.requestSubmit());
}
function Oe(e) {
  return e.stopPropagation();
}
function ke(e) {
  return e.preventDefault();
}
var Ae, q, J;
function je() {
  return (je = e(() => {
    ((Ae = g()),
      v(),
      k(),
      T(),
      N(),
      (q = o()),
      ee(),
      ce(),
      F(),
      w(),
      s(),
      h(),
      x(),
      O(),
      r(),
      z(),
      H(),
      Ce(),
      me(),
      ve(),
      fe(),
      I(),
      B(),
      (J = l()));
  }))();
}
export { je as n, we as t };
//# sourceMappingURL=preview-cfbe5fcbf83b.js.map
