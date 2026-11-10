import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  BCt as n,
  Cot as r,
  FCt as i,
  Ixt as a,
  Pxt as o,
  TJ as s,
  VCt as c,
  VDt as l,
  _Mt as u,
  bz as d,
  cCt as f,
  fCt as p,
  gG as m,
  gMt as h,
  hot as g,
  i3 as _,
  iCt as v,
  ij as y,
  jDt as b,
  lCt as x,
  lot as S,
  mCt as C,
  nCt as w,
  r3 as T,
  rj as E,
  sF as D,
  t3 as O,
  tCt as k,
  uCt as A,
  uF as j,
  vzt as M,
  wkt as N,
  wot as P,
  xMt as F,
  xz as I,
  yzt as L,
} from "./app-shared-bbfeca5e5737.js";
import {
  $6 as R,
  Q6 as ee,
  QDr as z,
  XDr as te,
  Ymr as B,
  _6 as V,
  _8 as H,
  a8 as U,
  b8 as W,
  c6n as G,
  cVn as K,
  d6 as ne,
  d8 as q,
  dVn as re,
  e8 as ie,
  ehr as ae,
  f6 as oe,
  f8 as se,
  fVn as ce,
  g6 as le,
  g8 as ue,
  h8 as J,
  i8 as de,
  l6 as fe,
  m8 as pe,
  n8 as Y,
  p8 as me,
  pVn as he,
  r8 as ge,
  s6n as _e,
  t8 as ve,
  u6 as ye,
  uVn as be,
  v8 as X,
  x8 as xe,
  y8 as Se,
  yVn as Ce,
} from "./app-initial-5851df3f6cb1.js";
import { n as we, t as Te } from "./writing-block-theme-61c0ed2a12ed.js";
import {
  _ as Ee,
  f as De,
  g as Oe,
  h as ke,
  m as Ae,
  p as je,
  y as Me,
} from "./writing-block-floating-slash-menu-1d629aa81df2.js";
import { i as Ne, n as Pe } from "./writing-block-editor-5c2b4ee54b30.js";
import { d as Fe, r as Ie } from "./types-b46e00871847.js";
function Le() {
  return new DOMException(`Request canceled`, `AbortError`);
}
function Re(e) {
  let t = null;
  return {
    cancel() {
      (t?.abort(Le()), (t = null));
    },
    async execute(n) {
      t?.abort(Le());
      let r = new AbortController();
      t = r;
      try {
        let t = await e(n, { signal: r.signal });
        return (r.signal.throwIfAborted(), t);
      } finally {
        t === r && (t = null);
      }
    },
  };
}
function ze(e, t) {
  return e.state.doc.textBetween(
    t.from,
    t.to,
    `
`,
    `
`,
  ).endsWith(`
`) && t.to > t.from
    ? { ...t, to: t.to - 1 }
    : t;
}
async function Be({
  view: e,
  pmu: t,
  range: n,
  instruction: r,
  numVariations: i,
  conversationId: a,
  messageId: o,
  mode: s,
  personalizationEnabled: c,
}) {
  let l;
  try {
    l = fe({ view: e, pmu: t, range: n });
  } catch {
    throw Error(`Unable to serialize the current selection for magic edit.`);
  }
  let u = ye(e, n),
    d = Ue(e.dom, u),
    f = We(l.fullMarkdown, l.startIndex, l.endIndex),
    p = V(l.fullMarkdown, l.startIndex, l.endIndex),
    m = t.serialize(e.state.doc),
    h = await Ge(l.fullMarkdown);
  return {
    payload: {
      conversation_id: a,
      message_id: o,
      full_block_body_markdown: m,
      start_index: l.startIndex,
      end_index: l.endIndex,
      marked_block_body_markdown: p,
      instruction: r,
      num_variations: i,
      mode: s,
      ...(c === !0 ? { personalization_enabled: !0 } : {}),
    },
    snapshot: { ...l, domAnchor: d, textAnchor: f, baseBlockVersion: h },
  };
}
function Ve({ view: e, pmu: t, prompt: n, input: r, conversationId: i }) {
  let { anchorPos: a, caretPos: o, triggerPos: s } = r,
    c = { from: Math.min(s, a, o), to: Math.max(a, o) },
    l = t.serialize(e.state.doc),
    u = ne(e.state.doc, t, qe, c.from, 1),
    d = ne(e.state.doc, t, Je, c.to, -1);
  return {
    conversation_id: i,
    full_block_body_markdown: l,
    start_index: u,
    end_index: d,
    marked_block_body_markdown: V(l, u, d),
    instruction: n,
    num_variations: 1,
    mode: `generate`,
  };
}
function He(e, t) {
  let n = [],
    r = t;
  for (; r && r !== e;) {
    let e = r.parentNode;
    if (!e) throw Error(`Unable to resolve selection for magic edit.`);
    let t = Array.prototype.indexOf.call(e.childNodes, r);
    (n.unshift(t), (r = e));
  }
  if (r !== e) throw Error(`Unable to resolve selection for magic edit.`);
  return n;
}
function Ue(e, t) {
  return {
    startPath: He(e, t.startContainer),
    startOffset: t.startOffset,
    endPath: He(e, t.endContainer),
    endOffset: t.endOffset,
  };
}
function We(e, t, n, r = 120) {
  let i = Math.max(0, t - r),
    a = Math.min(e.length, n + r);
  return { leading: e.slice(i, t), selection: e.slice(t, n), trailing: e.slice(n, a) };
}
async function Ge(e) {
  let t = new TextEncoder().encode(e),
    n = await crypto.subtle.digest(`SHA-256`, t);
  return Array.from(new Uint8Array(n))
    .map((e) => e.toString(16).padStart(2, `0`))
    .join(``);
}
var Ke, qe, Je;
function Ye() {
  return (Ye = e(() => {
    (oe(),
      le(),
      (Ke = (function (e) {
        return (
          (e.TOOLBAR = `toolbar`),
          (e.FULLSCREEN_COMPOSER = `fullscreen-composer`),
          (e.HEADER_COMPOSER = `header-composer`),
          e
        );
      })({})),
      (qe = `⟦MAGICSTART⟧`),
      (Je = `⟦MAGICEND⟧`));
  }))();
}
function Xe(e, t) {
  let n = Math.max(0, Math.min(e.from, t));
  return { from: n, to: Math.max(n, Math.min(e.to, t)) };
}
function Ze(e) {
  return e instanceof DOMException && e.name === `AbortError`;
}
function Qe() {
  return crypto.randomUUID();
}
function $e({
  view: e,
  pmu: t,
  sessionStore: r,
  previewEngine: i,
  executeRequest: a,
  conversationId: o,
  messageId: s,
  mode: c = `edit`,
  optimistic: l = !1,
  onSessionStarted: u,
  onPrepared: d,
  onSubmitted: f,
  onError: p,
  isAbortError: m = Ze,
  createMagicEditId: h = Qe,
}) {
  "use no forget";
  let g = (0, Z.useRef)(null),
    _ = (0, Z.useRef)(null),
    v = (0, Z.useRef)(null),
    y = (0, Z.useRef)(0),
    b = (0, Z.useRef)(a);
  b.current = a;
  let x = (0, Z.useRef)(void 0),
    S = (x.current ??= Re((e, t) => b.current(e, t))),
    [C, w] = (0, Z.useState)(!1),
    [T, E] = (0, Z.useState)(null),
    D = (0, Z.useCallback)(
      (e) => {
        e && r.update(e, { lifecycle: `resolved` });
      },
      [r],
    ),
    O = (0, Z.useCallback)(
      async (t, n, i) => {
        let a = await S.execute(t);
        return i !== y.current || !e || e.isDestroyed || !g.current?.document.eq(e.state.doc)
          ? (D(n), null)
          : a.choices.length === 0
            ? (D(n), p?.({ kind: `invalid-suggestion`, magicEditId: n }), null)
            : (r.update(n, { replacements: a.choices, modelSlug: a.model_slug, status: `ready` }),
              { replacements: a.choices, magicEditId: n });
      },
      [p, S, D, r, e],
    ),
    k = (0, Z.useCallback)(() => {
      (y.current++,
        S.cancel(),
        D(v.current),
        (v.current = null),
        (_.current = null),
        (g.current = null),
        w(!1),
        E(null));
    }, [S, D]);
  (0, Z.useEffect)(() => k, [k, o, s, e]);
  let A = (0, Z.useCallback)(
      async ({
        instruction: n,
        numVariations: i = 1,
        mode: a = c,
        personalizationEnabled: l,
        range: b,
        submissionSource: x,
      }) => {
        if (!e || e.isDestroyed) return null;
        if (!b) return (p?.({ kind: `no-selection` }), null);
        let C = ++y.current;
        (S.cancel(), D(v.current), (g.current = null), (_.current = null));
        let T = e.state.doc,
          k = ze(e, b);
        (w(!0), E(x));
        let A = null;
        try {
          ((A = h()),
            (v.current = A),
            r.update(A, { lifecycle: `request_in_flight`, status: `pending` }),
            u?.(A));
          let c = await Be({
            view: e,
            pmu: t,
            range: k,
            instruction: n,
            numVariations: i,
            conversationId: o,
            messageId: s,
            mode: a,
            personalizationEnabled: l,
          });
          if (C !== y.current || e.isDestroyed || !e.state.doc.eq(T)) return (D(A), null);
          let { payload: p, snapshot: m } = c;
          return (
            r.update(A, {
              domAnchor: m.domAnchor,
              textAnchor: m.textAnchor,
              baseBlockVersion: m.baseBlockVersion,
              freeformFeedback: n,
              fullBlockBodyMarkdown: m.fullMarkdown,
              startIndex: m.startIndex,
              endIndex: m.endIndex,
              segmentDiffs: [],
              acceptedSegmentIndices: [],
            }),
            (g.current = { magicEditId: A, snapshot: m, document: T }),
            (_.current = p),
            d?.(c),
            C === y.current
              ? (f?.({ conversationId: o, magicEditId: A, submissionSource: x }), await O(p, A, C))
              : (D(A), null)
          );
        } catch (t) {
          return (
            D(A),
            C === y.current &&
              !e.isDestroyed &&
              !m(t) &&
              p?.({ kind: `request-failed`, error: t, magicEditId: A ?? void 0 }),
            null
          );
        } finally {
          C === y.current && (w(!1), E(null));
        }
      },
      [o, h, O, m, s, c, p, d, u, f, t, S, D, r, e],
    ),
    j = (0, Z.useCallback)(async () => {
      let t = _.current,
        n = v.current;
      if (!t || !n || !e || e.isDestroyed || !g.current?.document.eq(e.state.doc)) return null;
      let i = ++y.current;
      (w(!0), r.update(n, { lifecycle: `request_in_flight`, status: `pending` }), u?.(n));
      try {
        return await O(t, n, i);
      } catch (t) {
        return (
          D(n),
          i === y.current &&
            !e.isDestroyed &&
            !m(t) &&
            p?.({ kind: `request-failed`, error: t, magicEditId: n }),
          null
        );
      } finally {
        i === y.current && w(!1);
      }
    }, [O, m, p, u, D, r, e]),
    M = (0, Z.useCallback)(
      ({ magicEditId: r, replacement: i, range: a }) => {
        if (!e || e.isDestroyed) return (D(r), null);
        let o = g.current;
        if (!o || o.magicEditId !== r || !o.document.eq(e.state.doc) || !a) return (D(r), null);
        let { snapshot: s } = o,
          c;
        try {
          c = t.parse(i ?? ``);
        } catch (e) {
          return (p?.({ kind: `invalid-suggestion`, error: e, magicEditId: r }), D(r), null);
        }
        let l;
        try {
          let t = Xe(s.blockRange, e.state.doc.content.size);
          l = e.state.doc.replace(t.from, t.to, new n(c.content, 0, 0));
        } catch (e) {
          return (p?.({ kind: `invalid-suggestion`, error: e, magicEditId: r }), D(r), null);
        }
        return { magicEditId: r, normalizedRange: ze(e, a), suggestionDoc: l, view: e };
      },
      [p, t, D, e],
    );
  return {
    isLoading: C,
    submitMagicEdit: A,
    cancelMagicEdit: k,
    validateMagicEditResult: (0, Z.useCallback)((e) => M(e) != null, [M]),
    applyMagicEditResult: (0, Z.useCallback)(
      (e) => {
        let n = M(e);
        if (n == null) return !1;
        let r = i[l ? `applyOptimisticMagicEditDocumentDiff` : `applyMagicEditDocumentDiff`]({
          view: n.view,
          pmu: t,
          selection: n.normalizedRange,
          magicEditId: n.magicEditId,
          replacementDoc: n.suggestionDoc,
        });
        return (r ? (g.current = null) : D(n.magicEditId), r);
      },
      [l, t, M, i, D],
    ),
    isSelectionInsideMagicEdit: (0, Z.useCallback)(
      () => (e && !e.isDestroyed ? i.isSelectionInsideMagicEdit(e) : !1),
      [i, e],
    ),
    retry: j,
    magicEditSubmissionSource: T,
  };
}
var Z;
function et() {
  return (et = e(() => {
    (c(), (Z = L()), Ye());
  }))();
}
function tt(e) {
  return e instanceof DOMException && e.name === `AbortError`;
}
function nt() {
  return crypto.randomUUID();
}
function rt(e) {
  let t = e.choices;
  if (!Array.isArray(t)) return ``;
  let n = t[0];
  return typeof n == `string`
    ? n
    : typeof n == `object` && n && `text` in n && typeof n.text == `string`
      ? n.text
      : ``;
}
function it({
  view: e,
  pmu: t,
  executeRequest: n,
  conversationId: r,
  captureInput: i,
  optimisticPreviewEngine: a,
  onSessionStarted: o,
  onError: s,
  isAbortError: c = tt,
  createSuggestionId: l = nt,
}) {
  "use no forget";
  let u = (0, at.useRef)(0),
    d = (0, at.useRef)(null),
    f = i != null,
    p = (0, at.useRef)(n);
  p.current = n;
  let m = (0, at.useRef)(void 0),
    h = (m.current ??= Re((e, t) => p.current(e, t))),
    [g, _] = (0, at.useState)(!1),
    v = (0, at.useCallback)(() => {
      (u.current++,
        h.cancel(),
        d.current?.dispose(),
        (d.current = null),
        e && !e.isDestroyed && f && de(e, null),
        _(!1));
    }, [h, f, e]);
  return (
    (0, at.useEffect)(() => v, [v, i, r, e]),
    {
      isLoading: g,
      submitGenerate: (0, at.useCallback)(
        async (n) => {
          if (!e || e.isDestroyed || !e.editable || !t) return !1;
          let p = n.trim();
          if (p === ``) return !1;
          let m = U.getState(e.state);
          if (!m?.input) return !1;
          let g = ++u.current;
          (h.cancel(), d.current?.dispose(), (d.current = null), _(!1));
          let v = e.state.doc,
            y;
          try {
            y = Ve({ view: e, pmu: t, prompt: p, input: m.input, conversationId: r });
          } catch (e) {
            return (s?.({ kind: `prepare-request`, error: e }), !1);
          }
          let b = null;
          try {
            if (i) {
              if (((b = i(e, m.input)), !b)) return !1;
              d.current = b;
            }
            (f && de(e, g), _(!0));
            let n = await h.execute(y);
            if (g !== u.current || e.isDestroyed || !e.editable || (!b && !e.state.doc.eq(v))) return !1;
            let r = U.getState(e.state)?.pendingRequestId;
            if (f && r !== g) return !1;
            let c = b ? b.resolve() : U.getState(e.state)?.input;
            if (b && !c) return !1;
            let p = l(),
              x = rt(n),
              S = !1;
            if (a && c) {
              let n = R({ state: e.state, pmu: t, text: x, input: c });
              ((S =
                n != null &&
                a.applyOptimisticMagicEditDocumentDiff({
                  view: e,
                  pmu: t,
                  magicEditId: p,
                  replacementDoc: n.transaction.doc,
                  selection: {
                    from: Math.min(c.triggerPos, c.anchorPos, c.caretPos),
                    to: Math.max(c.anchorPos, c.caretPos),
                  },
                  highlightRanges: [{ from: n.from, to: n.to }],
                })),
                S && o?.(p));
            } else a || (S = Y({ view: e, pmu: t, suggestionId: p, text: x, input: c }));
            return S ? !0 : (s?.({ kind: `insert-failed` }), !1);
          } catch (e) {
            return (g === u.current && !c(e) && s?.({ kind: `request-failed`, error: e }), !1);
          } finally {
            (b?.dispose(),
              d.current === b && (d.current = null),
              g === u.current && (f && !e.isDestroyed && de(e, null), _(!1)));
          }
        },
        [r, i, l, c, s, o, a, t, h, f, e],
      ),
      cancelGenerate: v,
    }
  );
}
var at;
function ot() {
  return (ot = e(() => {
    ((at = L()), Ye(), ve());
  }))();
}
function st(e, t) {
  return (
    e.length === t.length &&
    e.every((e, n) => {
      let r = t[n];
      return (
        r != null &&
        e.role === r.role &&
        e.entryId === r.entryId &&
        e.segmentIndex === r.segmentIndex &&
        e.top === r.top &&
        e.left === r.left &&
        e.right === r.right &&
        e.bottom === r.bottom &&
        e.width === r.width &&
        e.height === r.height
      );
    })
  );
}
function ct(e, t) {
  "use forget";
  let n = (0, ut.c)(8),
    r;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((r = []), (n[0] = r)) : (r = n[0]);
  let [i, a] = (0, dt.useState)(r),
    o;
  n[1] !== e || n[2] !== t
    ? ((o = () => {
        let n = e.current;
        if (!n) {
          a(ft);
          return;
        }
        let r = n.querySelectorAll(
            t
              ? `[data-me-role='sugg'], [data-generate-suggestion]`
              : `[data-me-role='orig'], [data-me-role='sugg'], [data-generate-suggestion]`,
          ),
          i = Array.from(r).map(lt);
        a((e) => (st(e, i) ? e : i));
      }),
      (n[1] = e),
      (n[2] = t),
      (n[3] = o))
    : (o = n[3]);
  let s = o,
    c,
    l;
  return (
    n[4] !== e || n[5] !== s
      ? ((c = () => {
          let t = e.current;
          if (!t) return;
          s();
          let n = new ResizeObserver(s);
          return (n.observe(t), () => n.disconnect());
        }),
        (l = [e, s]),
        (n[4] = e),
        (n[5] = s),
        (n[6] = c),
        (n[7] = l))
      : ((c = n[6]), (l = n[7])),
    pt(c, l),
    i
  );
}
function lt(e) {
  let { offsetTop: t, offsetLeft: n, offsetWidth: r, offsetHeight: i } = e;
  return {
    top: t,
    left: n,
    right: n + r,
    bottom: t + i,
    width: r,
    height: i,
    role: e.dataset.meRole === `orig` ? `orig` : `sugg`,
    entryId: e.dataset.meId,
    segmentIndex: e.dataset.meSegment,
  };
}
var ut, dt, ft, pt;
function mt() {
  return (mt = e(() => {
    ((ut = M()), (dt = L()), (ft = []), (pt = typeof window > `u` ? dt.useEffect : dt.useLayoutEffect));
  }))();
}
function ht(e) {
  return e === `open` ? `closing` : e;
}
function gt(e) {
  return e === `closing` ? `collapsed` : e;
}
function _t() {}
function vt(e) {
  return e.preventDefault();
}
var yt, bt, Q, xt, St, Ct, wt;
function Tt() {
  return (Tt = e(() => {
    ((yt = M()),
      u(),
      (bt = L()),
      Te(),
      (Q = F()),
      (xt = `291px`),
      (St = `72px`),
      (Ct = 250),
      (wt = (e) => {
        "use forget";
        let t = (0, yt.c)(94),
          {
            classNames: n,
            controls: r,
            labels: i,
            renderEditIcon: a,
            renderSubmitIcon: o,
            renderSubmittingControl: s,
            onEditButtonClick: c,
            showCollapsedEditLabel: l,
            submitButtonClassName: u,
            trailingContent: d,
          } = e,
          f = l === void 0 || l,
          p = a,
          m = o,
          g = s,
          [_, v] = (0, bt.useState)(``),
          [y, b] = (0, bt.useState)(!1),
          x = (0, bt.useRef)(null),
          S = (0, bt.useRef)(0),
          C = (0, bt.useRef)(!1),
          w = (0, bt.useRef)(null),
          [T, E] = (0, bt.useState)(r.isComposerOpen ? `open` : `collapsed`),
          D;
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((D = () => {
              w.current != null && (window.clearTimeout(w.current), (w.current = null));
            }),
            (t[0] = D))
          : (D = t[0]);
        let O = D,
          k,
          A;
        (t[1] !== r.isComposerOpen || t[2] !== T
          ? ((k = () => {
              if (!r.isComposerOpen) {
                C.current = !1;
                return;
              }
              if (T !== `open` || C.current) return;
              let e = requestAnimationFrame(() => {
                let e = x.current;
                e && (e.focus(), e.select(), (C.current = !0));
              });
              return () => cancelAnimationFrame(e);
            }),
            (A = [r.isComposerOpen, T]),
            (t[1] = r.isComposerOpen),
            (t[2] = T),
            (t[3] = k),
            (t[4] = A))
          : ((k = t[3]), (A = t[4])),
          (0, bt.useEffect)(k, A));
        let j, M;
        (t[5] === r.isComposerOpen
          ? ((j = t[6]), (M = t[7]))
          : ((j = () => {
              if (r.isComposerOpen) {
                (O(), E(`open`));
                return;
              }
              E(ht);
            }),
            (M = [O, r.isComposerOpen]),
            (t[5] = r.isComposerOpen),
            (t[6] = j),
            (t[7] = M)),
          (0, bt.useEffect)(j, M));
        let N, P;
        (t[8] === T
          ? ((N = t[9]), (P = t[10]))
          : ((N = () => {
              if (T === `closing`)
                return (
                  O(),
                  (w.current = window.setTimeout(() => {
                    ((w.current = null), E(gt));
                  }, Ct)),
                  O
                );
            }),
            (P = [O, T]),
            (t[8] = T),
            (t[9] = N),
            (t[10] = P)),
          (0, bt.useEffect)(N, P));
        let F = r.isInteractionDisabled || r.isHeaderInteractionDisabled === !0,
          I;
        t[11] !== r || t[12] !== y
          ? ((I = (e) => {
              (!e && y && ((S.current += 1), b(!1), r.onSubmittingChange?.(!1), r.onCancelComposerSubmit()),
                r.onComposerOpenChange(e));
            }),
            (t[11] = r),
            (t[12] = y),
            (t[13] = I))
          : (I = t[13]);
        let L = I,
          R;
        t[14] !== r || t[15] !== _ || t[16] !== F || t[17] !== y
          ? ((R = () => {
              let e = _.trim();
              if (!e || F || y) return;
              let t = (S.current += 1);
              (b(!0),
                r.onSubmittingChange?.(!0),
                r
                  .onSubmitComposerInstruction(e)
                  .then((e) => {
                    t === S.current && e && (v(``), r.onComposerOpenChange(!1, { cancelRequest: !1 }));
                  })
                  .catch(_t)
                  .finally(() => {
                    t === S.current && (b(!1), r.onSubmittingChange?.(!1));
                  }));
            }),
            (t[14] = r),
            (t[15] = _),
            (t[16] = F),
            (t[17] = y),
            (t[18] = R))
          : (R = t[18]);
        let ee = R,
          z;
        t[19] !== r || t[20] !== y
          ? ((z = () => {
              y && ((S.current += 1), b(!1), r.onSubmittingChange?.(!1), r.onCancelComposerSubmit());
            }),
            (t[19] = r),
            (t[20] = y),
            (t[21] = z))
          : (z = t[21]);
        let te = z,
          B;
        t[22] !== L || t[23] !== ee
          ? ((B = (e) => {
              if (e.key === `Enter` && !e.shiftKey && !e.nativeEvent.isComposing) {
                (e.preventDefault(), ee());
                return;
              }
              e.key === `Escape` && (e.preventDefault(), L(!1));
            }),
            (t[22] = L),
            (t[23] = ee),
            (t[24] = B))
          : (B = t[24]);
        let V = B,
          H = T === `open`,
          U = T !== `collapsed`,
          W = r.isComposerOpen && H,
          G = r.isComposerOpen || U,
          K;
        t[25] !== H || t[26] !== T
          ? ((K = H
              ? { insetInlineStart: 0, width: `100%`, maxWidth: `100%`, visibility: `visible` }
              : {
                  insetInlineStart: 0,
                  width: St,
                  maxWidth: `100%`,
                  visibility: T === `collapsed` ? `hidden` : `visible`,
                }),
            (t[25] = H),
            (t[26] = T),
            (t[27] = K))
          : (K = t[27]);
        let ne = K,
          q;
        t[28] === U
          ? (q = t[29])
          : ((q = U ? { width: xt, maxWidth: `50%` } : void 0), (t[28] = U), (t[29] = q));
        let re = q,
          ie = i.editButton,
          ae = U ? -1 : void 0,
          oe;
        t[30] !== L || t[31] !== c
          ? ((oe = () => {
              (c?.(), L(!0));
            }),
            (t[30] = L),
            (t[31] = c),
            (t[32] = oe))
          : (oe = t[32]);
        let se = n?.editButton,
          ce = f ? `pe-3 text-start` : `size-9 justify-center`,
          le;
        t[33] !== se || t[34] !== ce
          ? ((le = h(
              `box-border flex h-9 items-center rounded-[24px] border [border-color:var(--oai-wb-divider)] [background-color:var(--oai-wb-surface-primary)] [color:var(--oai-wb-text-primary)] transition-colors select-none enabled:hover:[background-color:var(--oai-wb-surface-secondary)] disabled:cursor-default disabled:opacity-40`,
              se,
              ce,
            )),
            (t[33] = se),
            (t[34] = ce),
            (t[35] = le))
          : (le = t[35]);
        let ue;
        t[36] !== i.editButton || t[37] !== f
          ? ((ue =
              f &&
              (0, Q.jsxs)(Q.Fragment, {
                children: [
                  (0, Q.jsx)(`span`, { className: `h-9 w-8 shrink-0`, "aria-hidden": `true` }),
                  (0, Q.jsx)(`span`, {
                    "data-testid": `writing-block-header-magic-edit-collapsed-label`,
                    className: `block shrink-0 whitespace-nowrap text-sm font-medium [color:var(--oai-wb-text-primary)]`,
                    children: i.editButton,
                  }),
                ],
              })),
            (t[36] = i.editButton),
            (t[37] = f),
            (t[38] = ue))
          : (ue = t[38]);
        let J;
        t[39] !== F || t[40] !== i.editButton || t[41] !== ae || t[42] !== oe || t[43] !== le || t[44] !== ue
          ? ((J = (0, Q.jsx)(`button`, {
              type: `button`,
              "aria-label": ie,
              disabled: F,
              tabIndex: ae,
              onClick: oe,
              onMouseDown: vt,
              "data-testid": `writing-block-header-magic-edit-button`,
              className: le,
              children: ue,
            })),
            (t[39] = F),
            (t[40] = i.editButton),
            (t[41] = ae),
            (t[42] = oe),
            (t[43] = le),
            (t[44] = ue),
            (t[45] = J))
          : (J = t[45]);
        let de = J,
          fe;
        t[46] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((fe = { insetInlineStart: 0 }), (t[46] = fe))
          : (fe = t[46]);
        let pe = F && `opacity-40`,
          Y;
        t[47] === pe
          ? (Y = t[48])
          : ((Y = h(`size-5 shrink-0 grow-0`, `[color:var(--oai-wb-text-primary)]`, pe)),
            (t[47] = pe),
            (t[48] = Y));
        let me;
        t[49] !== p || t[50] !== Y
          ? ((me = (0, Q.jsx)(`div`, {
              "data-testid": `writing-block-header-magic-edit-leading-icon-slot`,
              className: `pointer-events-none absolute inset-y-0 z-3 flex items-center`,
              style: fe,
              children: (0, Q.jsx)(`span`, {
                className: `flex size-9 shrink-0 items-center justify-center rounded-[43px]`,
                children: (0, Q.jsx)(p, { className: Y }),
              }),
            })),
            (t[49] = p),
            (t[50] = Y),
            (t[51] = me))
          : (me = t[51]);
        let he = H ? `pointer-events-none opacity-0` : `opacity-100`,
          ge;
        t[52] === he
          ? (ge = t[53])
          : ((ge = h(
              `relative z-2 flex shrink-0 items-center gap-0.5 overflow-visible transition-opacity duration-200 ease-out`,
              he,
            )),
            (t[52] = he),
            (t[53] = ge));
        let _e;
        t[54] !== de || t[55] !== U || t[56] !== ge
          ? ((_e = (0, Q.jsx)(`div`, {
              "data-testid": `writing-block-header-magic-edit-controls`,
              className: ge,
              "aria-hidden": U,
              children: de,
            })),
            (t[54] = de),
            (t[55] = U),
            (t[56] = ge),
            (t[57] = _e))
          : (_e = t[57]);
        let ve = n?.composer,
          ye = H ? `shadow-[0_4px_16px_rgba(0,0,0,0.05)]` : `pointer-events-none shadow-none`,
          be;
        t[58] !== ve || t[59] !== ye
          ? ((be = h(
              `absolute top-1/2 z-1 flex h-9 min-w-0 shrink-0 -translate-y-1/2 items-center overflow-hidden rounded-full border [border-color:var(--oai-wb-divider)] [background-color:var(--oai-wb-surface-primary)] transition-[width,background-color,border-color,box-shadow,opacity] duration-200 ease-out`,
              ve,
              ye,
            )),
            (t[58] = ve),
            (t[59] = ye),
            (t[60] = be))
          : (be = t[60]);
        let X;
        t[61] === r.isComposerOpen
          ? (X = t[62])
          : ((X = (e) => {
              e.currentTarget !== e.target ||
                e.propertyName !== `width` ||
                r.isComposerOpen ||
                (O(), E(`collapsed`));
            }),
            (t[61] = r.isComposerOpen),
            (t[62] = X));
        let xe;
        t[63] !== m ||
        t[64] !== g ||
        t[65] !== te ||
        t[66] !== V ||
        t[67] !== ee ||
        t[68] !== _ ||
        t[69] !== W ||
        t[70] !== U ||
        t[71] !== F ||
        t[72] !== y ||
        t[73] !== i.composerPlaceholder ||
        t[74] !== i.submitButton ||
        t[75] !== u
          ? ((xe =
              U &&
              (0, Q.jsxs)(Q.Fragment, {
                children: [
                  (0, Q.jsx)(`div`, { className: `h-9 w-8 shrink-0`, "aria-hidden": `true` }),
                  (0, Q.jsxs)(`form`, {
                    "data-testid": `writing-block-header-magic-edit-composer-form`,
                    className: h(
                      `relative flex min-w-0 grow items-center pe-2 transition-[opacity,transform] duration-150 ease-out`,
                      W ? `translate-x-0 opacity-100` : `pointer-events-none translate-x-0 opacity-0`,
                    ),
                    onSubmit: (e) => {
                      (e.preventDefault(), ee());
                    },
                    "aria-hidden": !W,
                    children: [
                      (0, Q.jsx)(`input`, {
                        ref: x,
                        type: `text`,
                        value: _,
                        onChange: (e) => v(e.target.value),
                        onKeyDown: V,
                        placeholder: i.composerPlaceholder,
                        disabled: !W,
                        readOnly: F || y,
                        tabIndex: W ? 0 : -1,
                        className: h(
                          `min-w-0 grow border-none bg-transparent px-0 py-0 text-sm font-medium [color:var(--oai-wb-text-primary)] outline-none placeholder:[color:var(--oai-wb-text-tertiary)] focus:border-transparent focus:ring-0 focus:outline-none`,
                          y ? `opacity-50` : `opacity-100`,
                        ),
                      }),
                      (0, Q.jsx)(`div`, {
                        "data-testid": `writing-block-header-magic-edit-submit-slot`,
                        className: `ms-2 flex size-5 shrink-0 items-center justify-center overflow-visible rounded-full`,
                        children: y
                          ? (0, Q.jsx)(g, { size: 20, onCancel: te })
                          : (0, Q.jsx)(`button`, {
                              type: `submit`,
                              "aria-label": i.submitButton,
                              disabled: !W || _.trim().length === 0 || F,
                              tabIndex: W ? 0 : -1,
                              className: h(u, `size-5 transition-colors hover:opacity-70`),
                              children: (0, Q.jsx)(m, { className: `size-4 shrink-0 grow-0` }),
                            }),
                      }),
                    ],
                  }),
                ],
              })),
            (t[63] = m),
            (t[64] = g),
            (t[65] = te),
            (t[66] = V),
            (t[67] = ee),
            (t[68] = _),
            (t[69] = W),
            (t[70] = U),
            (t[71] = F),
            (t[72] = y),
            (t[73] = i.composerPlaceholder),
            (t[74] = i.submitButton),
            (t[75] = u),
            (t[76] = xe))
          : (xe = t[76]);
        let Se;
        t[77] !== ne || t[78] !== T || t[79] !== be || t[80] !== X || t[81] !== xe
          ? ((Se = (0, Q.jsx)(`div`, {
              "data-testid": `writing-block-header-magic-edit-composer`,
              "data-state": T,
              className: be,
              style: ne,
              onTransitionEnd: X,
              children: xe,
            })),
            (t[77] = ne),
            (t[78] = T),
            (t[79] = be),
            (t[80] = X),
            (t[81] = xe),
            (t[82] = Se))
          : (Se = t[82]);
        let Ce;
        t[83] !== re || t[84] !== me || t[85] !== _e || t[86] !== Se
          ? ((Ce = (0, Q.jsxs)(`div`, {
              "data-testid": `writing-block-header-magic-edit-entrypoint`,
              "data-header-magic-edit-entrypoint-version": `v1`,
              className: `z-2 relative flex min-w-0 items-center self-start shrink-0`,
              style: re,
              children: [me, _e, Se],
            })),
            (t[83] = re),
            (t[84] = me),
            (t[85] = _e),
            (t[86] = Se),
            (t[87] = Ce))
          : (Ce = t[87]);
        let Te;
        t[88] !== G || t[89] !== d
          ? ((Te =
              d &&
              (0, Q.jsx)(`div`, {
                "aria-hidden": G,
                className: h(`min-w-0 flex-1`, G && `hidden`),
                "data-testid": `writing-block-header-magic-edit-trailing-content`,
                children: d,
              })),
            (t[88] = G),
            (t[89] = d),
            (t[90] = Te))
          : (Te = t[90]);
        let Ee;
        return (
          t[91] !== Ce || t[92] !== Te
            ? ((Ee = (0, Q.jsxs)(`div`, {
                className: `flex min-w-0 grow items-center gap-1 self-start px-2`,
                "data-testid": `writing-block-header-magic-edit-layout`,
                style: we,
                children: [Ce, Te],
              })),
              (t[91] = Ce),
              (t[92] = Te),
              (t[93] = Ee))
            : (Ee = t[93]),
          Ee
        );
      }));
  }))();
}
function Et(e) {
  "use forget";
  let t = (0, Dt.c)(50),
    {
      value: n,
      onChange: r,
      onSubmit: i,
      onCancel: a,
      isLoading: o,
      anchorPos: s,
      editorView: c,
      editorRootRef: l,
      labels: u,
      className: d,
      renderInput: f,
      renderPresentation: p,
    } = e,
    m = (0, Ot.useRef)(null),
    g = (0, Ot.useRef)(null),
    _;
  t[0] === l
    ? (_ = t[1])
    : ((_ = (e, t, n) => N(l.current ?? e, t, n, { ancestorResize: !0, ancestorScroll: !0 })),
      (t[0] = l),
      (t[1] = _));
  let v = _,
    y;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = [Oe(8), Ae({ fallbackPlacements: [`top-start`] }), Ee({ padding: 8 })]), (t[2] = y))
    : (y = t[2]);
  let b;
  t[3] === v
    ? (b = t[4])
    : ((b = { placement: `bottom-start`, middleware: y, whileElementsMounted: v }), (t[3] = v), (t[4] = b));
  let { refs: x, floatingStyles: S, update: C, x: w, y: T } = Me(b),
    E = w !== 0 && T !== 0,
    D,
    O;
  (t[5] === E
    ? ((D = t[6]), (O = t[7]))
    : ((D = () => {
        E && g.current?.focus();
      }),
      (O = [E]),
      (t[5] = E),
      (t[6] = D),
      (t[7] = O)),
    (0, Ot.useEffect)(D, O));
  let k = x.setReference,
    A = x.setFloating,
    j,
    M;
  (t[8] !== s || t[9] !== l || t[10] !== c || t[11] !== k || t[12] !== C
    ? ((j = () => {
        if (!c || s == null) {
          k(null);
          return;
        }
        let e = {
          contextElement: l.current ?? void 0,
          getBoundingClientRect: () => {
            try {
              let e = c.coordsAtPos(s);
              return new DOMRect(e.left, e.bottom, 0, 0);
            } catch {
              return new DOMRect();
            }
          },
        };
        return (
          k(e),
          C(),
          () => {
            k(null);
          }
        );
      }),
      (M = [s, l, c, k, C]),
      (t[8] = s),
      (t[9] = l),
      (t[10] = c),
      (t[11] = k),
      (t[12] = C),
      (t[13] = j),
      (t[14] = M))
    : ((j = t[13]), (M = t[14])),
    (0, Ot.useEffect)(j, M));
  let P, F;
  (t[15] === a
    ? ((P = t[16]), (F = t[17]))
    : ((P = () => {
        let e = (e) => {
            let t = m.current;
            t && ((e.target instanceof Node && t.contains(e.target)) || a());
          },
          t = (e) => {
            let t = m.current;
            if (!t) {
              a();
              return;
            }
            (e.target instanceof Node && t.contains(e.target)) || a();
          };
        return (
          document.addEventListener(`pointerdown`, e, !0),
          document.addEventListener(`focusin`, t, !0),
          () => {
            (document.removeEventListener(`pointerdown`, e, !0),
              document.removeEventListener(`focusin`, t, !0));
          }
        );
      }),
      (F = [a]),
      (t[15] = a),
      (t[16] = P),
      (t[17] = F)),
    (0, Ot.useEffect)(P, F));
  let I;
  t[18] === A
    ? (I = t[19])
    : ((I = (e) => {
        ((m.current = e), A(e));
      }),
      (t[18] = A),
      (t[19] = I));
  let L;
  t[20] === d ? (L = t[21]) : ((L = h(`absolute`, d)), (t[20] = d), (t[21] = L));
  let R;
  t[22] === S ? (R = t[23]) : ((R = { ...S, width: `max-content`, minWidth: At }), (t[22] = S), (t[23] = R));
  let ee = u.placeholder,
    z = u.submit,
    te = u.cancel,
    B;
  t[24] === a
    ? (B = t[25])
    : ((B = (e) => {
        e.key === `Escape` && (e.preventDefault(), a());
      }),
      (t[24] = a),
      (t[25] = B));
  let V;
  t[26] === n ? (V = t[27]) : ((V = n.trim()), (t[26] = n), (t[27] = V));
  let H = V === ``,
    U;
  t[28] !== o ||
  t[29] !== u.cancel ||
  t[30] !== u.placeholder ||
  t[31] !== u.submit ||
  t[32] !== a ||
  t[33] !== r ||
  t[34] !== i ||
  t[35] !== f ||
  t[36] !== B ||
  t[37] !== H ||
  t[38] !== n
    ? ((U = f({
        inputRef: g,
        value: n,
        onChange: r,
        placeholder: ee,
        onSubmit: i,
        onCancel: a,
        isLoading: o,
        submitAriaLabel: z,
        cancelAriaLabel: te,
        disabled: o,
        selectAllOnFocus: !1,
        onKeyDownCapture: B,
        isSubmitDisabled: H,
        inputClassName: `w-full`,
      })),
      (t[28] = o),
      (t[29] = u.cancel),
      (t[30] = u.placeholder),
      (t[31] = u.submit),
      (t[32] = a),
      (t[33] = r),
      (t[34] = i),
      (t[35] = f),
      (t[36] = B),
      (t[37] = H),
      (t[38] = n),
      (t[39] = U))
    : (U = t[39]);
  let W;
  t[40] === U
    ? (W = t[41])
    : ((W = (0, kt.jsx)(`div`, { className: `flex min-w-0 flex-1`, children: U })), (t[40] = U), (t[41] = W));
  let G;
  t[42] !== p || t[43] !== W ? ((G = p(W)), (t[42] = p), (t[43] = W), (t[44] = G)) : (G = t[44]);
  let K;
  return (
    t[45] !== I || t[46] !== L || t[47] !== R || t[48] !== G
      ? ((K = (0, kt.jsx)(`div`, { ref: I, className: L, style: R, children: G })),
        (t[45] = I),
        (t[46] = L),
        (t[47] = R),
        (t[48] = G),
        (t[49] = K))
      : (K = t[49]),
    K
  );
}
var Dt, Ot, kt, At;
function jt() {
  return (jt = e(() => {
    ((Dt = M()), ke(), u(), (Ot = L()), (kt = F()), (At = `calc(300px + 1rem)`));
  }))();
}
function Mt(e) {
  if (e.isComposing || e.keyCode === 229 || e.key !== `Enter`) return !1;
  let t = typeof navigator < `u` && /Mac|iPhone|iPad|iPod/.test(navigator.platform),
    n = t ? e.metaKey : e.ctrlKey,
    r = t ? e.ctrlKey || e.altKey || e.shiftKey : e.metaKey || e.altKey || e.shiftKey;
  return n && !r;
}
function Nt(e) {
  "use forget";
  let t = (0, Ft.c)(60),
    {
      editorRootRef: n,
      activeEntryId: r,
      onAccept: i,
      onReject: a,
      focusEditor: o,
      fullscreenMode: s,
      suggestionsOnly: c,
      labels: l,
      classNames: u,
      toolbarComponents: d,
      isAcceptShortcut: f,
      placement: p,
    } = e,
    m = f === void 0 ? Mt : f,
    g = p === void 0 ? `selection` : p,
    _ = (0, It.useRef)(null),
    v = (0, It.useRef)(null),
    y = ct(n, c),
    b = y[0],
    x = y[y.length - 1],
    S = y.filter(Pt).length > 1,
    C = r != null && b != null && x != null,
    w,
    T;
  (t[0] !== n || t[1] !== o || t[2] !== C || t[3] !== a
    ? ((w = () => {
        if (!C) return;
        let e = n.current?.ownerDocument ?? document,
          t = (e) => {
            e.key === `Escape` && (a(), o());
          };
        return (e.addEventListener(`keydown`, t), () => e.removeEventListener(`keydown`, t));
      }),
      (T = [n, o, C, a]),
      (t[0] = n),
      (t[1] = o),
      (t[2] = C),
      (t[3] = a),
      (t[4] = w),
      (t[5] = T))
    : ((w = t[4]), (T = t[5])),
    (0, It.useEffect)(w, T));
  let E, D;
  (t[6] !== r || t[7] !== n || t[8] !== m || t[9] !== i
    ? ((E = () => {
        if (!r) return;
        let e = n.current?.ownerDocument ?? document,
          t = (e) => {
            m(e) && (e.preventDefault(), i());
          };
        return (e.addEventListener(`keydown`, t, !0), () => e.removeEventListener(`keydown`, t, !0));
      }),
      (D = [r, n, m, i]),
      (t[6] = r),
      (t[7] = n),
      (t[8] = m),
      (t[9] = i),
      (t[10] = E),
      (t[11] = D))
    : ((E = t[10]), (D = t[11])),
    (0, It.useEffect)(E, D));
  let O = S ? l.acceptAll : l.accept,
    k = d?.Root ?? `div`,
    A = d?.Button ?? `button`,
    j = u?.toolbar,
    M;
  t[12] === j
    ? (M = t[13])
    : ((M = h(
        `m-0 flex h-9 w-fit min-w-0 shrink items-center overflow-hidden rounded-xl px-1 py-1 [background-color:var(--oai-wb-surface-primary)] shadow-[0_8px_12px_0_rgba(0,0,0,0.16),0_0_1px_0_rgba(0,0,0,0.60)] dark:bg-[#353535] dark:shadow-[0_8px_16px_0_rgba(0,0,0,0.40),inset_0_0_1px_0_rgba(255,255,255,0.25),0_0_1px_0_rgba(0,0,0,0.60)]`,
        j,
      )),
      (t[12] = j),
      (t[13] = M));
  let N = u?.rejectButton,
    P;
  t[14] === N
    ? (P = t[15])
    : ((P = h(
        `flex h-full items-center gap-2 rounded-lg px-2 hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent dark:hover:bg-black/20`,
        N,
      )),
      (t[14] = N),
      (t[15] = P));
  let F = u?.rejectLabel,
    I;
  t[16] === F
    ? (I = t[17])
    : ((I = h(`truncate text-sm font-semibold [color:var(--oai-wb-text-primary)]`, F)),
      (t[16] = F),
      (t[17] = I));
  let L;
  t[18] !== l.reject || t[19] !== I
    ? ((L = (0, Lt.jsx)(`span`, { className: I, children: l.reject })),
      (t[18] = l.reject),
      (t[19] = I),
      (t[20] = L))
    : (L = t[20]);
  let R;
  t[21] !== A || t[22] !== a || t[23] !== P || t[24] !== L
    ? ((R = (0, Lt.jsx)(A, { type: `button`, onClick: a, className: P, children: L })),
      (t[21] = A),
      (t[22] = a),
      (t[23] = P),
      (t[24] = L),
      (t[25] = R))
    : (R = t[25]);
  let ee = u?.acceptButton,
    z;
  t[26] === ee
    ? (z = t[27])
    : ((z = h(
        `ms-1 flex h-full items-center gap-1 rounded-lg px-2 [background-color:var(--oai-wb-accent)]`,
        ee,
      )),
      (t[26] = ee),
      (t[27] = z));
  let te;
  t[28] === O
    ? (te = t[29])
    : ((te = (0, Lt.jsx)(`span`, { className: `truncate text-sm font-semibold text-white`, children: O })),
      (t[28] = O),
      (t[29] = te));
  let B;
  t[30] !== A || t[31] !== O || t[32] !== i || t[33] !== z || t[34] !== te
    ? ((B = (0, Lt.jsx)(A, { type: `button`, onClick: i, "aria-label": O, className: z, children: te })),
      (t[30] = A),
      (t[31] = O),
      (t[32] = i),
      (t[33] = z),
      (t[34] = te),
      (t[35] = B))
    : (B = t[35]);
  let V;
  t[36] !== k || t[37] !== R || t[38] !== B || t[39] !== M
    ? ((V = (0, Lt.jsxs)(k, {
        role: `toolbar`,
        "data-orientation": `horizontal`,
        className: M,
        children: [R, B],
      })),
      (t[36] = k),
      (t[37] = R),
      (t[38] = B),
      (t[39] = M),
      (t[40] = V))
    : (V = t[40]);
  let H = V;
  if (!C) return null;
  if (g === `header`) {
    let e;
    t[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = { ...we, left: Rt, top: Rt }), (t[41] = e))
      : (e = t[41]);
    let n;
    return (
      t[42] === H
        ? (n = t[43])
        : ((n = (0, Lt.jsx)(`div`, {
            ref: _,
            className: `absolute z-3`,
            "data-testid": `writing-block-header-magic-edit-actions`,
            style: e,
            children: H,
          })),
          (t[42] = H),
          (t[43] = n)),
      n
    );
  }
  let U;
  t[44] === H
    ? (U = t[45])
    : ((U = (0, Lt.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `pointer-events-none invisible fixed start-0 top-0 h-0 overflow-clip`,
        children: (0, Lt.jsx)(`div`, { ref: v, children: H }),
      })),
      (t[44] = H),
      (t[45] = U));
  let W = b.top - 41,
    G = x.bottom - b.top + 41 + 48,
    K;
  t[46] !== W || t[47] !== G
    ? ((K = { ...we, top: W, height: G }), (t[46] = W), (t[47] = G), (t[48] = K))
    : (K = t[48]);
  let ne = s ? `top-2` : `@w-xl/main:top-2 top-[calc(var(--header-height,48px)+8px)]`,
    q;
  t[49] === ne ? (q = t[50]) : ((q = h(`pointer-events-auto sticky`, ne)), (t[49] = ne), (t[50] = q));
  let re;
  t[51] !== q || t[52] !== H
    ? ((re = (0, Lt.jsx)(`div`, { className: q, children: H })), (t[51] = q), (t[52] = H), (t[53] = re))
    : (re = t[53]);
  let ie;
  t[54] !== K || t[55] !== re
    ? ((ie = (0, Lt.jsx)(`div`, {
        ref: _,
        style: K,
        className: `pointer-events-none absolute start-1/2 z-1 -translate-x-1/2`,
        children: re,
      })),
      (t[54] = K),
      (t[55] = re),
      (t[56] = ie))
    : (ie = t[56]);
  let ae;
  return (
    t[57] !== U || t[58] !== ie
      ? ((ae = (0, Lt.jsxs)(Lt.Fragment, { children: [U, ie] })), (t[57] = U), (t[58] = ie), (t[59] = ae))
      : (ae = t[59]),
    ae
  );
}
function Pt(e) {
  return e.role === `sugg`;
}
var Ft, It, Lt, Rt;
function zt() {
  return (zt = e(() => {
    ((Ft = M()), u(), (It = L()), mt(), Te(), (Lt = F()), (Rt = 14));
  }))();
}
function Bt(e, t, n) {
  if (
    n.anchorPos !== n.caretPos ||
    n.triggerPos !== n.caretPos ||
    !e.state?.canEdit ||
    !e.state.schemaCompatible
  )
    return null;
  let r = e.editor,
    i = (e) => t.state.schema.nodeFromJSON(je(t.state.doc)).eq(e),
    a = r.snapshot();
  if (a.document == null || !i(t.state.schema.nodeFromJSON(a.document.ast))) return null;
  let { anchor: o, error: s } = r.createAnchor({
    baseRevision: a.revision,
    point: { position: n.caretPos, affinity: Ie.FORWARD },
  });
  if (s != null || o == null) return null;
  let c = () => {
      let e = r.snapshot(),
        n = r.resolveAnchor(o);
      if (n.error != null || n.point == null || n.revision.value !== e.revision.value || e.document == null)
        return null;
      let i = t.state.schema.nodeFromJSON(e.document.ast).resolve(n.point.position);
      return i.parent.isTextblock ? i : null;
    },
    l = !1,
    u = e.subscribeToEditorChanges(() => {
      c() ?? (l = !0);
    });
  return {
    resolve() {
      if (
        l ||
        t.isDestroyed ||
        !t.editable ||
        !e.state?.canEdit ||
        !e.state.schemaCompatible ||
        e.editor !== r
      )
        return null;
      let n = c();
      return n == null || !i(n.doc)
        ? null
        : { anchorPos: n.pos, caretPos: n.pos, triggerPos: n.pos, blockFrom: n.start(), blockTo: n.end() };
    },
    dispose() {
      ((l = !0), u());
    },
  };
}
function Vt() {
  return (Vt = e(() => {
    (Fe(), De());
  }))();
}
function Ht() {
  let e = new Map(),
    t = (t) => {
      let n = e.get(t);
      if (n) return n;
      let r = {
        domAnchor: null,
        textAnchor: null,
        baseBlockVersion: null,
        freeformFeedback: null,
        fullBlockBodyMarkdown: null,
        startIndex: null,
        endIndex: null,
        replacements: [],
        modelSlug: null,
        segmentDiffs: [],
        acceptedSegmentIndices: [],
        originalDocumentContent: null,
        sessionSegments: [],
        previewModel: null,
        lifecycle: `request_in_flight`,
        status: `pending`,
      };
      return (e.set(t, r), r);
    };
  return {
    read: t,
    update(n, r) {
      e.set(n, { ...t(n), ...r });
    },
  };
}
function Ut(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Wt(e) {
  if (e == null || e.size === 0) return null;
  let t = [];
  return (
    e.forEach((e) => {
      t.push(e.toJSON());
    }),
    t
  );
}
function Gt(e, t) {
  return t == null || t.length === 0 ? null : i.fromArray(t.map((t) => e.nodeFromJSON(t)));
}
function Kt(e) {
  return typeof e == `object` && !!e;
}
function qt(e) {
  return Kt(e) && typeof e.from == `number` && typeof e.to == `number`;
}
function Jt(e) {
  return (
    Kt(e) &&
    Array.isArray(e.blockRanges) &&
    e.blockRanges.every(qt) &&
    Array.isArray(e.highlightRanges) &&
    e.highlightRanges.every(qt)
  );
}
function Yt(e) {
  return (
    Kt(e) &&
    typeof e.magicEditId == `string` &&
    Array.isArray(e.deletionAnchors) &&
    e.deletionAnchors.every((e) => typeof e == `number`) &&
    Array.isArray(e.originalSegments) &&
    e.originalSegments.every(
      (e) =>
        Kt(e) &&
        typeof e.from == `number` &&
        typeof e.to == `number` &&
        Kt(e.originalFragment) &&
        typeof e.originalFragment.eq == `function` &&
        Kt(e.suggestedFragment) &&
        typeof e.suggestedFragment.eq == `function`,
    ) &&
    Jt(e) &&
    e.blockRanges.every((e) => Kt(e) && Kt(e.node) && typeof e.node.eq == `function`)
  );
}
function Xt(e) {
  if (e === void 0) return !0;
  if (!Kt(e)) return !1;
  let { setPinnedRange: t, removeEntryId: n, setCommittedPreview: r, setOptimisticPreview: i } = e,
    a = t == null || qt(t),
    o = n == null || typeof n == `string`,
    s = r == null || Jt(r),
    c = i == null || Yt(i);
  return a && o && s && c;
}
function Zt(e) {
  return Kt(e)
    ? typeof e.magicEditId == `string` &&
        Array.isArray(e.acceptedSegmentIndices) &&
        e.acceptedSegmentIndices.every((e) => typeof e == `number`)
    : !1;
}
function Qt(e) {
  let t = e.getMeta(Un);
  return Zt(t) ? t : null;
}
function $t(e, t) {
  return t ? { from: e.map(t.from, -1), to: e.map(t.to, 1) } : null;
}
function en(e, t) {
  if (!t) return null;
  let n = $t(e, t);
  return !n || n.to <= n.from ? null : n;
}
function tn(e, t) {
  if (!t || !e.docChanged) return t;
  let n = t.deletionAnchors;
  for (let t of e.mapping.maps) {
    let e = !1;
    if (
      (t.forEach((t, r, i, a) => {
        t === r && i < a && n.includes(t) && (e = !0);
      }),
      e)
    )
      return null;
    n = n.map((e) => t.map(e, 1));
  }
  let r = [];
  for (let n of t.blockRanges) {
    let t = n.from,
      i = n.to;
    for (let n of e.mapping.maps) {
      let e = !1;
      if (
        (n.forEach((n, r) => {
          (n === r ? n > t && n < i : n < i && r > t) && (e = !0);
        }),
        e)
      )
        return null;
      ((t = n.map(t, 1)), (i = n.map(i, -1)));
    }
    if (e.doc.nodeAt(t)?.eq(n.node) !== !0 || i !== t + n.node.nodeSize) return null;
    r.push({ ...n, from: t, to: i });
  }
  let i = t.originalSegments.map((t) => {
    let n = e.mapping.map(t.from, 1),
      r = t.from === t.to ? n : e.mapping.map(t.to, -1);
    return { ...t, from: n, to: r };
  });
  if (
    i.some(
      (t) =>
        t.to < t.from ||
        t.to > e.doc.content.size ||
        !e.doc.slice(t.from, t.to).content.eq(t.suggestedFragment),
    )
  )
    return null;
  let a = t.highlightRanges.flatMap((t) => {
    let n = e.mapping.map(t.from, 1),
      r = e.mapping.map(t.to, -1);
    return r > n ? [{ from: n, to: r }] : [];
  });
  return { ...t, deletionAnchors: n, originalSegments: i, blockRanges: r, highlightRanges: a };
}
function nn(e) {
  let t = e.nodes.magic_edit_original_block ?? null,
    n = e.nodes.magic_edit_suggested_block ?? null;
  return !t || !n ? null : { originalType: t, suggestedType: n };
}
function rn(e) {
  if (typeof e == `number`) return Number.isFinite(e) ? e : null;
  if (typeof e == `string` && e.trim() !== ``) {
    let t = Number(e);
    return Number.isFinite(t) ? t : null;
  }
  return null;
}
function an(e) {
  if (typeof e == `number`) return Number.isFinite(e) ? e : null;
  if (typeof e == `string` && e.trim() !== ``) {
    let t = Number(e);
    return Number.isFinite(t) ? t : null;
  }
  return null;
}
function on(e, t) {
  let n = rn(e.attrs?.[J]),
    r = rn(e.attrs?.[ue]);
  if (n == null || r == null) return null;
  let i = t + 1 + Math.max(0, n),
    a = t + 1 + Math.max(0, r);
  return a <= i ? null : { from: i, to: a };
}
function sn(e, t) {
  if (!e) return null;
  let n = t.pos + 1,
    r = t.pos + t.nodeSize - 1,
    i = Math.max(n, e.from),
    a = Math.min(r, e.to);
  return a <= i ? null : { from: i, to: a };
}
function cn(e) {
  let t = nn(e.type.schema);
  if (!t) return new Map();
  let n = new Map(),
    r = (e) => {
      if (typeof e == `number` && Number.isFinite(e)) return e;
      if (typeof e == `string` && e.trim() !== ``) {
        let t = Number(e);
        if (Number.isFinite(t)) return t;
      }
      return 0;
    };
  e.descendants((e, i) => {
    if (e.type === t.originalType || e.type === t.suggestedType) {
      let a = e.attrs?.[H];
      if (!a) return !1;
      let o = r(e.attrs?.[Se]),
        s = n.get(a);
      s || ((s = new Map()), n.set(a, s));
      let c = s.get(o);
      c || ((c = {}), s.set(o, c));
      let l = { pos: i, nodeSize: e.nodeSize },
        u = {
          position: l,
          highlight: sn(on(e, i), l),
          selectionStartOffset: an(e.attrs?.[W]),
          selectionEndOffset: an(e.attrs?.[X]),
        };
      return (e.type === t.originalType ? (c.original = u) : (c.suggested = u), !1);
    }
    return !0;
  });
  let i = new Map();
  return (
    n.forEach((e, t) => {
      let n = [];
      if (
        (e.forEach((e, t) => {
          (e.original || e.suggested) &&
            n.push({
              index: t,
              original: e.original?.position ?? null,
              suggested: e.suggested?.position ?? null,
              originalHighlight: e.original?.highlight ?? null,
              suggestedHighlight: e.suggested?.highlight ?? null,
              selectionStartOffset:
                e.original?.selectionStartOffset ?? e.suggested?.selectionStartOffset ?? 0,
              selectionEndOffset: e.original?.selectionEndOffset ?? e.suggested?.selectionEndOffset ?? 0,
            });
        }),
        n.length === 0)
      )
        return;
      n.sort((e, t) => e.index - t.index);
      let r = 1 / 0,
        a = -1 / 0;
      (n.forEach((e) => {
        (e.original &&
          ((r = Math.min(r, e.original.pos)), (a = Math.max(a, e.original.pos + e.original.nodeSize))),
          e.suggested &&
            ((r = Math.min(r, e.suggested.pos)), (a = Math.max(a, e.suggested.pos + e.suggested.nodeSize))));
      }),
        i.set(t, { id: t, from: r === 1 / 0 ? 0 : r, to: a === -1 / 0 ? 0 : a, segments: n }));
    }),
    i
  );
}
function ln(e, t, n) {
  let r = e.topNodeType.createAndFill({}, i.from(n));
  return r ? t.serialize(r) : ``;
}
function un(e, t, n) {
  if (!n || n.size === 0) return ``;
  let r = e.topNodeType.createAndFill({}, n);
  return r ? t.serialize(r) : ``;
}
function dn(e, t, n, r) {
  try {
    return ne(e, t, `⟦MAGICSEG⟧`, n, r);
  } catch {
    return -1;
  }
}
function fn(e) {
  return e && e.replace(Wn, ``);
}
function pn(e, t, n, r) {
  let i = [],
    a = t;
  for (let t = 0; t < e.content.childCount; t++) {
    let o = e.content.child(t),
      s = o.nodeSize,
      c = a,
      l = a + s,
      u = ln(r, n, o);
    (i.push({ node: o, from: c, to: l, normalizedText: fn(u), textLength: u.length }), (a = l));
  }
  return i;
}
function mn(e, t, n, r) {
  let i = [],
    a = t;
  for (let t = 0; t < e.content.childCount; t++) {
    let o = e.content.child(t),
      s = o.nodeSize,
      c = a,
      l = a + s,
      u = ln(r, n, o);
    (i.push({ node: o, from: c, to: l, normalizedText: fn(u) }), (a = l));
  }
  return i;
}
function hn(e, t) {
  let n = e.length,
    r = t.length;
  if (n === 0 && r === 0) return [];
  let i = Array.from({ length: n + 1 }, () => Array(r + 1).fill(0));
  for (let a = n - 1; a >= 0; a--)
    for (let n = r - 1; n >= 0; n--)
      e[a].normalizedText === t[n].normalizedText
        ? (i[a][n] = i[a + 1][n + 1] + 1)
        : (i[a][n] = Math.max(i[a + 1][n], i[a][n + 1]));
  let a = [],
    o = 0,
    s = 0,
    c = null,
    l = () => {
      c &&= (a.push(c), null);
    };
  for (; o < n || s < r;) {
    if (o < n && s < r && e[o].normalizedText === t[s].normalizedText) {
      (l(), o++, s++);
      continue;
    }
    (s >= r || (o < n && i[o + 1][s] >= i[o][s + 1])) && o < n
      ? ((c ||= { origStart: o, origEnd: o, suggStart: s, suggEnd: s }), (c.origEnd = o + 1), o++)
      : ((c ||= { origStart: o, origEnd: o, suggStart: s, suggEnd: s }),
        (c.suggEnd = Math.min(s + 1, r)),
        s++);
  }
  return (l(), a);
}
function gn(e, t, n, r) {
  if (e.length === 0) return [];
  let a = [0];
  for (let e of t) {
    let t = a[a.length - 1];
    a.push(t + e.textLength);
  }
  return e.map((e, o) => {
    let s = t.slice(e.origStart, e.origEnd),
      c = n.slice(e.suggStart, e.suggEnd),
      l,
      u;
    if (s.length > 0) ((l = s[0].from), (u = s[s.length - 1].to));
    else {
      let n = e.origStart < t.length ? t[e.origStart].from : t.length > 0 ? t[t.length - 1].to : r;
      ((l = n), (u = n));
    }
    let d = s.length > 0 ? i.fromArray(s.map((e) => e.node)) : null,
      f = c.length > 0 ? i.fromArray(c.map((e) => e.node)) : null,
      p = c.map((e) => ({ from: e.from, to: e.to }));
    return {
      from: l,
      to: u,
      originalFragment: d,
      suggestedFragment: f,
      suggestedNodeRanges: p,
      index: o,
      originalHighlight: null,
      suggestedHighlight: null,
      selectionStartOffset: a[e.origStart] ?? 0,
      selectionEndOffset: a[e.origEnd] ?? 0,
    };
  });
}
function _n({ segmentStart: e, originalSize: t, suggestedSize: n, selectionStart: r, selectionEnd: i }) {
  if (t <= 0) return { originalHighlight: null, suggestedHighlight: null };
  let a = e,
    o = e + t,
    s = Math.max(a, r),
    c = Math.min(o, i);
  if (c <= s) return { originalHighlight: null, suggestedHighlight: null };
  let l = { from: s - a, to: c - a };
  if (n <= 0) return { originalHighlight: l, suggestedHighlight: null };
  let u = l.to - l.from,
    d = n - t,
    f = Ut(l.from, 0, Math.max(0, n)),
    p = Ut(f + Math.max(0, u + d), f, Math.max(f, n));
  return { originalHighlight: l, suggestedHighlight: p > f ? { from: f, to: p } : null };
}
function vn(e, t, n, r, i, a) {
  let o = [];
  return (
    t && o.push(k.inline(t.from, t.to, { class: a })),
    r?.blockRanges.forEach((e) => {
      o.push(k.node(e.from, e.to, { "data-me-role": `sugg`, "data-magic-edit-committed-preview": `true` }));
    }),
    r?.highlightRanges.forEach((e) => {
      o.push(k.inline(e.from, e.to, { nodeName: `span`, "data-me-change": `delta` }));
    }),
    i?.blockRanges.forEach((e) => {
      o.push(
        k.node(e.from, e.to, {
          "data-me-role": `sugg`,
          "data-me-id": i.magicEditId,
          "data-magic-edit-optimistic-preview": `true`,
        }),
      );
    }),
    i?.highlightRanges.forEach((e) => {
      o.push(k.inline(e.from, e.to, { nodeName: `span`, "data-me-change": `delta` }));
    }),
    i?.deletionAnchors.forEach((e) => {
      o.push(
        k.widget(
          e,
          () => {
            let e = document.createElement(`span`);
            return (
              (e.dataset.meRole = `sugg`),
              (e.dataset.meId = i.magicEditId),
              (e.dataset.magicEditOptimisticAnchor = `true`),
              (e.style.cssText = `display:block;width:1px;height:0;pointer-events:none`),
              e
            );
          },
          { key: `${i.magicEditId}:deletion:${e}` },
        ),
      );
    }),
    n.forEach((e) => {
      e.segments.forEach((e) => {
        (e.originalHighlight &&
          o.push(
            k.inline(e.originalHighlight.from, e.originalHighlight.to, {
              nodeName: `span`,
              "data-me-change": `delta`,
            }),
          ),
          e.suggestedHighlight &&
            o.push(
              k.inline(e.suggestedHighlight.from, e.suggestedHighlight.to, {
                nodeName: `span`,
                "data-me-change": `delta`,
              }),
            ));
      });
    }),
    o.length === 0 ? w.empty : w.create(e, o)
  );
}
function yn(e) {
  return new f({
    key: e.pluginKey,
    state: {
      init: (t, n) => {
        let r = cn(n.doc);
        return {
          pinnedRange: null,
          entries: r,
          committedPreview: null,
          optimisticPreview: null,
          decorations: vn(n.doc, null, r, null, null, e.selectionClassName),
        };
      },
      apply(t, n, r, i) {
        let a = $t(t.mapping, n.pinnedRange),
          o = t.docChanged ? null : n.committedPreview,
          s = tn(t, n.optimisticPreview),
          c = new Map();
        n.entries.forEach((e, n) => {
          let r = new Map();
          (e.segments.forEach((e) => {
            r.set(e.index, {
              originalHighlight: en(t.mapping, e.originalHighlight),
              suggestedHighlight: en(t.mapping, e.suggestedHighlight),
            });
          }),
            c.set(n, r));
        });
        let l = t.getMeta(e.pluginKey),
          u = Xt(l) ? l : void 0;
        (u && u.setPinnedRange !== void 0 && (a = u.setPinnedRange),
          u?.removeEntryId && c.delete(u.removeEntryId),
          u && u.setCommittedPreview !== void 0 && (o = u.setCommittedPreview),
          u && u.setOptimisticPreview !== void 0 && (s = u.setOptimisticPreview));
        let d = cn(i.doc),
          f = new Map();
        d.forEach((e, t) => {
          if (u?.removeEntryId && u.removeEntryId === t) return;
          let n = c.get(t),
            r = e.segments.map((e) => {
              let t = n?.get(e.index),
                r = null;
              e.original && (r = sn(t?.originalHighlight ?? e.originalHighlight, e.original));
              let i = null;
              return (
                e.suggested && (i = sn(t?.suggestedHighlight ?? e.suggestedHighlight, e.suggested)),
                {
                  index: e.index,
                  original: e.original,
                  suggested: e.suggested,
                  originalHighlight: r,
                  suggestedHighlight: i,
                  selectionStartOffset: e.selectionStartOffset,
                  selectionEndOffset: e.selectionEndOffset,
                }
              );
            });
          f.set(t, { id: e.id, from: e.from, to: e.to, segments: r });
        });
        let p = vn(i.doc, a, f, o, s, e.selectionClassName);
        return { pinnedRange: a, entries: f, committedPreview: o, optimisticPreview: s, decorations: p };
      },
    },
    props: {
      decorations(t) {
        return e.pluginKey.getState(t)?.decorations ?? w.empty;
      },
    },
  });
}
function bn(e, t) {
  return { magicEditId: e, segmentIndices: [...t] };
}
function xn(e, t) {
  return t ? (e.pluginKey.getState(t.state) ?? null) : null;
}
function Sn(e, t) {
  let { from: n, to: r } = t.state.selection;
  if (n === r) return !1;
  let i = t.state.tr;
  return (i.setMeta(e.pluginKey, { setPinnedRange: { from: n, to: r } }), t.dispatch(i), !0);
}
function Cn(e, t) {
  let n = t.state.tr;
  (n.setMeta(e.pluginKey, { setPinnedRange: null }), t.dispatch(n));
}
function wn({ state: e, pmu: t, replacementDoc: r, selection: a }) {
  let o = Ut(a.from, 0, e.doc.content.size),
    s = Ut(a.to, o, e.doc.content.size),
    c = e.doc.slice(0, e.doc.content.size),
    l = new n(r.content, 0, 0),
    u = pn(c, 0, t, e.schema),
    d = mn(l, 0, t, e.schema),
    f = gn(hn(u, d), u, d, 0);
  if (f.length === 0) return null;
  let p = [],
    m = [];
  return {
    selectionStart: o,
    blockSegments: f.map((n) => {
      let { originalHighlight: r, suggestedHighlight: a } = _n({
          segmentStart: n.from,
          originalSize: n.originalFragment?.size ?? 0,
          suggestedSize: n.suggestedFragment?.size ?? 0,
          selectionStart: o,
          selectionEnd: s,
        }),
        c = un(e.schema, t, n.originalFragment ?? i.empty),
        l = un(e.schema, t, n.suggestedFragment ?? i.empty);
      return (
        p.push({
          segmentIndex: n.index,
          startIndex: dn(e.doc, t, n.from, 1),
          endIndex: dn(e.doc, t, n.to, -1),
          originalMarkdown: c,
          suggestedMarkdown: l,
        }),
        m.push({
          index: n.index,
          fromOffset: n.from,
          toOffset: n.to,
          originalNodeJsons: Wt(n.originalFragment),
          suggestedNodeJsons: Wt(n.suggestedFragment),
          originalSelectionFrom: r?.from ?? null,
          suggestedSelectionFrom: a?.from ?? null,
        }),
        { ...n, originalHighlight: r, suggestedHighlight: a }
      );
    }),
    segmentDiffs: p,
    sessionSegments: m,
  };
}
function Tn(e, t) {
  let n = [],
    r = [];
  return (
    e.forEach((e) => {
      if ((n.push(...e.suggestedNodeRanges), !e.suggestedHighlight || e.suggestedNodeRanges.length === 0))
        return;
      let i = e.suggestedNodeRanges[0].from,
        a = Ut(i + 1 + e.suggestedHighlight.from, 0, t),
        o = Ut(i + 1 + e.suggestedHighlight.to, a, t);
      o > a && r.push({ from: a, to: o });
    }),
    { blockRanges: n, highlightRanges: r }
  );
}
function En(e, { view: t, pmu: r, magicEditId: a, replacementDoc: o, selection: s }) {
  let { state: c } = t,
    l = nn(c.schema);
  if (!l) return !1;
  let u = wn({ state: c, pmu: r, replacementDoc: o, selection: s });
  if (!u) return !1;
  let d = c.tr,
    f = null,
    p = null;
  if (
    (u.blockSegments.forEach((e) => {
      let t = e.originalFragment?.size,
        r = e.suggestedFragment?.size,
        o = d.mapping.map(e.from, -1),
        s = t ? d.mapping.map(e.to, 1) : o,
        c = p != null && !t ? Math.max(o, p) : o,
        u = t ? s : c,
        m = e.suggestedFragment?.size ?? 0,
        h = [];
      if (t) {
        let t = l.originalType.create(
          {
            [H]: a,
            [Se]: e.index,
            [J]: e.originalHighlight ? Math.floor(e.originalHighlight.from) : null,
            [ue]: e.originalHighlight ? Math.floor(e.originalHighlight.to) : null,
            [W]: e.selectionStartOffset,
            [X]: e.selectionEndOffset,
          },
          e.originalFragment,
        );
        h.push(t);
      }
      if (r) {
        let t = l.suggestedType.create(
          {
            [H]: a,
            [Se]: e.index,
            [J]: e.suggestedHighlight ? Math.floor(e.suggestedHighlight.from) : null,
            [ue]: e.suggestedHighlight ? Math.floor(e.suggestedHighlight.to) : null,
            [W]: e.selectionStartOffset,
            [X]: e.selectionEndOffset,
          },
          e.suggestedFragment,
        );
        h.push(t);
      }
      if (h.length === 0) return;
      let g = new n(i.fromArray(h), 0, 0);
      if (
        ((d = d.replaceRange(c, u, g)),
        (p = c + h.reduce((e, t) => e + t.nodeSize, 0)),
        f == null && r && m > 0)
      ) {
        let e = c + (t ? h[0].nodeSize : 0);
        f = Math.min(d.doc.content.size, e + 1);
      }
    }),
    d.setMeta(`addToHistory`, !1),
    d.setMeta(q, !0),
    d.setMeta(e.pluginKey, { setPinnedRange: null }),
    f != null)
  ) {
    let e = A.findFrom(d.doc.resolve(f), 1, !0) ?? A.near(d.doc.resolve(f), 1);
    d.setSelection(e);
  } else {
    let e = Ut(u.selectionStart, 0, d.doc.content.size),
      t = A.findFrom(d.doc.resolve(e), -1, !0) ?? A.near(d.doc.resolve(e), -1);
    d.setSelection(t);
  }
  return (
    d.scrollIntoView(),
    t.dispatch(d),
    e.sessionStore.update(a, {
      segmentDiffs: u.segmentDiffs,
      acceptedSegmentIndices: [],
      originalDocumentContent: c.doc.content,
      sessionSegments: u.sessionSegments,
      previewModel: bn(
        a,
        u.blockSegments.map((e) => e.index),
      ),
      lifecycle: `preview_staged`,
      status: `ready`,
    }),
    !0
  );
}
function Dn(e, { view: t, pmu: r, magicEditId: i, replacementDoc: a, selection: o }) {
  let { state: s } = t,
    c = wn({ state: s, pmu: r, replacementDoc: a, selection: o });
  if (!c) return !1;
  let l = s.tr.replaceRange(0, s.doc.content.size, new n(a.content, 0, 0));
  ((l = D(l)),
    l.setMeta(Vn, !0),
    l.setMeta(Hn, `magic_edit`),
    l.setMeta(e.pluginKey, {
      setPinnedRange: null,
      setCommittedPreview: Tn(c.blockSegments, a.content.size),
    }));
  let u = c.blockSegments.find((e) => e.suggestedNodeRanges.length > 0)?.suggestedNodeRanges[0],
    d = Ut(u ? u.from + 1 : c.selectionStart, 0, l.doc.content.size),
    f = A.findFrom(l.doc.resolve(d), 1, !0) ?? A.near(l.doc.resolve(d), 1);
  return (
    l.setSelection(f),
    l.scrollIntoView(),
    t.dispatch(l),
    e.sessionStore.update(i, {
      segmentDiffs: c.segmentDiffs,
      acceptedSegmentIndices: c.blockSegments.map((e) => e.index),
      originalDocumentContent: null,
      sessionSegments: c.sessionSegments,
      previewModel: null,
      lifecycle: `resolved`,
      status: `ready`,
    }),
    !0
  );
}
function On(e, { view: t, pmu: r, magicEditId: a, replacementDoc: o, selection: s, highlightRanges: c }) {
  let { state: l } = t,
    u = wn({ state: l, pmu: r, replacementDoc: o, selection: s });
  if (!u) return !1;
  let d = l.tr;
  try {
    for (let e of u.blockSegments) {
      let t = d.mapping.map(e.from, 1),
        r = e.from === e.to ? t : d.mapping.map(e.to, -1);
      d.replace(t, r, new n(e.suggestedFragment ?? i.empty, 0, 0));
    }
  } catch {
    return !1;
  }
  if (r.serialize(d.doc) !== r.serialize(o)) return !1;
  let f = l.schema.marks.startend;
  f != null && d.removeMark(0, d.doc.content.size, f);
  let p = Tn(u.blockSegments, d.doc.content.size),
    m = [];
  for (let e of p.blockRanges) {
    let t = d.doc.nodeAt(e.from);
    if (!t || t.nodeSize !== e.to - e.from) return !1;
    m.push({ ...e, node: t });
  }
  let h = u.blockSegments.map((e) => {
      let t = e.suggestedNodeRanges[0],
        n = e.suggestedNodeRanges.at(-1),
        r = t?.from ?? d.mapping.map(e.from, 1),
        a = n?.to ?? r;
      return {
        from: r,
        to: a,
        originalFragment: e.originalFragment ?? i.empty,
        suggestedFragment: d.doc.slice(r, a).content,
      };
    }),
    g = {
      magicEditId: a,
      blockRanges: m,
      highlightRanges: c ?? p.highlightRanges,
      originalSegments: h,
      deletionAnchors: h.filter((e) => e.suggestedFragment.size === 0).map((e) => e.from),
    };
  ((d = D(d)),
    d.setMeta(Vn, !0),
    d.setMeta(Hn, `magic_edit`),
    d.setMeta(e.pluginKey, { setPinnedRange: null, setOptimisticPreview: g }));
  let _ = m[0],
    v = Ut(_ ? _.from + 1 : d.mapping.map(u.selectionStart, 1), 0, d.doc.content.size);
  return (
    d.setSelection(A.findFrom(d.doc.resolve(v), 1, !0) ?? A.near(d.doc.resolve(v), 1)),
    d.scrollIntoView(),
    t.dispatch(d),
    !t.state.doc.eq(d.doc) || e.pluginKey.getState(t.state)?.optimisticPreview?.magicEditId !== a
      ? !1
      : (e.sessionStore.update(a, {
          segmentDiffs: u.segmentDiffs,
          acceptedSegmentIndices: [],
          originalDocumentContent: null,
          sessionSegments: u.sessionSegments,
          previewModel: bn(
            a,
            u.blockSegments.map((e) => e.index),
          ),
          lifecycle: `optimistic_preview`,
          status: `ready`,
        }),
        !0)
  );
}
function kn(e, t, r, i) {
  let a = e.pluginKey.getState(t.state)?.optimisticPreview;
  if (a?.magicEditId !== r) return !1;
  let o = t.state.tr;
  if (i === `keep`) {
    try {
      for (let e of [...a.originalSegments].reverse()) {
        if (!o.doc.slice(e.from, e.to).content.eq(e.suggestedFragment)) return !1;
        o.replace(e.from, e.to, new n(e.originalFragment, 0, 0));
      }
    } catch {
      return !1;
    }
    ((o = D(o)), o.setMeta(Vn, !0), o.setMeta(Hn, `magic_edit`), o.scrollIntoView());
  } else (o.setMeta(`addToHistory`, !1), o.setMeta(q, !0));
  return (
    o.setMeta(e.pluginKey, { setOptimisticPreview: null }),
    t.dispatch(o),
    e.pluginKey.getState(t.state)?.optimisticPreview?.magicEditId !== r &&
      (e.sessionStore.update(r, {
        acceptedSegmentIndices: i === `use` ? a.originalSegments.map((e, t) => t) : [],
        originalDocumentContent: null,
        previewModel: null,
        lifecycle: `resolved`,
      }),
      !0)
  );
}
function An(e, t) {
  if (!e.pluginKey.getState(t.state)?.committedPreview) return !1;
  let n = t.state.tr;
  return (
    n.setMeta(`addToHistory`, !1),
    n.setMeta(q, !0),
    n.setMeta(e.pluginKey, { setCommittedPreview: null }),
    t.dispatch(n),
    !0
  );
}
function jn(e, t, n, r) {
  let a = [...n].sort((e, t) => e.fromOffset - t.fromOffset),
    o = [],
    s = 0;
  for (let n of a) {
    n.fromOffset > s &&
      t.cut(s, n.fromOffset).forEach((e) => {
        o.push(e);
      });
    let i = r.has(n.index) ? Gt(e, n.suggestedNodeJsons) : Gt(e, n.originalNodeJsons);
    (i != null &&
      i.size > 0 &&
      i.forEach((e) => {
        o.push(e);
      }),
      (s = n.toOffset));
  }
  return (
    s < t.size &&
      t.cut(s, t.size).forEach((e) => {
        o.push(e);
      }),
    i.fromArray(o)
  );
}
function Mn({ context: e, state: t, magicEditId: r }) {
  let { originalDocumentContent: i, sessionSegments: a } = e.sessionStore.read(r);
  if (!i) return null;
  let o = t.tr.replaceRange(0, t.doc.content.size, new n(i, 0, 0));
  (o.setMeta(`addToHistory`, !1), o.setMeta(q, !0), o.setMeta(e.pluginKey, { setPinnedRange: null }));
  let s = a.length > 0 ? [...a].sort((e, t) => e.fromOffset - t.fromOffset)[0] : null,
    c = Ut((s?.fromOffset ?? 0) + (s?.originalSelectionFrom ?? 0), 0, o.doc.content.size),
    l = A.findFrom(o.doc.resolve(c), -1, !0) ?? A.near(o.doc.resolve(c), -1);
  return (o.setSelection(l), o.scrollIntoView(), o);
}
function Nn({ context: e, state: t, magicEditId: r, acceptedSegmentIndices: i }) {
  let { originalDocumentContent: a, sessionSegments: o } = e.sessionStore.read(r);
  if (!a || o.length === 0) return null;
  let s = new Set(i),
    c = jn(t.schema, a, o, s),
    l = t.tr.replaceRange(0, t.doc.content.size, new n(c, 0, 0));
  ((l = D(l)),
    l.setMeta(Vn, !0),
    l.setMeta(Hn, `magic_edit`),
    l.setMeta(e.pluginKey, { setPinnedRange: null, removeEntryId: r }));
  let u = o.find((e) => s.has(e.index)),
    d = Ut((u?.fromOffset ?? 0) + (u?.suggestedSelectionFrom ?? 0), 0, l.doc.content.size),
    f = A.findFrom(l.doc.resolve(d), -1, !0) ?? A.near(l.doc.resolve(d), -1);
  return (l.setSelection(f), l.scrollIntoView(), l);
}
function Pn(e, t, n) {
  let r = Mn({ context: e, state: t.state, magicEditId: n });
  return r ? (t.dispatch(r), !0) : !1;
}
function Fn(e, t, n, r) {
  if (r.length === 0) Pn(e, t, n);
  else {
    let i = Mn({ context: e, state: t.state, magicEditId: n });
    i && (i.setMeta(Un, { magicEditId: n, acceptedSegmentIndices: r }), t.dispatch(i));
  }
  e.sessionStore.update(n, { previewModel: null, lifecycle: `resolved` });
}
function In(e, t, n, r) {
  let i = e.pluginKey.getState(t.state),
    a = e.sessionStore.read(n);
  if (!i) return;
  let o = i.entries.get(n);
  o &&
    Fn(
      e,
      t,
      n,
      r === `use`
        ? Array.from(new Set([...a.acceptedSegmentIndices, ...o.segments.map((e) => e.index)])).sort(
            (e, t) => e - t,
          )
        : a.acceptedSegmentIndices,
    );
}
function Ln(e, t, r, a, o) {
  let s = e.pluginKey.getState(t.state),
    c = e.sessionStore.read(r);
  if (!s) return !1;
  let l = s.entries.get(r);
  if (!l) return !1;
  let u = l.segments.find((e) => e.index === a);
  if (!u) return !1;
  let d =
      o === `use`
        ? Array.from(new Set([...c.acceptedSegmentIndices, a])).sort((e, t) => e - t)
        : c.acceptedSegmentIndices,
    f = l.segments.filter((e) => e.index !== a).map((e) => e.index);
  if (f.length === 0) return (Fn(e, t, r, d), !0);
  let p = t.state.doc,
    m = u.original ? p.nodeAt(u.original.pos) : null,
    h = u.suggested ? p.nodeAt(u.suggested.pos) : null;
  if (!m && !h) return !1;
  let g = Math.min(u.original?.pos ?? u.suggested?.pos ?? 0, u.suggested?.pos ?? u.original?.pos ?? 0),
    _ = Math.max(
      u.original?.pos == null ? g : u.original.pos + (m?.nodeSize ?? 0),
      u.suggested?.pos == null ? g : u.suggested.pos + (h?.nodeSize ?? 0),
    ),
    v = t.state.tr,
    y = v.mapping.map(g, -1),
    b = v.mapping.map(_, 1),
    x = (o === `keep` ? m : h)?.content ?? i.empty;
  v = v.replaceRange(y, b, new n(x, 0, 0));
  let S = { setPinnedRange: null };
  (l.segments.length === 1 && (S.removeEntryId = r),
    v.setMeta(e.pluginKey, S),
    v.setMeta(`addToHistory`, !1),
    v.setMeta(q, !0),
    o === `use` && e.sessionStore.update(r, { acceptedSegmentIndices: d }));
  let C = Math.min(v.doc.content.size, y),
    w = A.findFrom(v.doc.resolve(C), -1, !0) ?? A.near(v.doc.resolve(C), -1);
  return (
    v.setSelection(w),
    v.scrollIntoView(),
    t.dispatch(v),
    e.sessionStore.update(r, { previewModel: bn(r, f) }),
    !0
  );
}
function Rn(e, t) {
  let n = e.pluginKey.getState(t.state);
  if (!n) return !1;
  let { from: r, to: i } = t.state.selection;
  if (r === i) return !1;
  for (let e of n.entries.values()) if (r >= e.from && i <= e.to) return !0;
  return !1;
}
function zn(e, t) {
  return e.pluginKey.getState(t.state)?.pinnedRange ?? null;
}
function Bn({ sessionStore: e, selectionClassName: t = `magic-edit-selection` }) {
  let n = new x(`writingBlockMagicEdit`),
    r = { pluginKey: n, sessionStore: e, selectionClassName: t },
    i = (e, t, n, i) => Ln(r, e, t, n, i);
  return {
    writingBlockMagicEditPluginKey: n,
    createWritingBlockMagicEditPlugin: () => yn(r),
    getMagicEditPluginState: (e) => xn(r, e),
    pinMagicEditSelection: (e) => Sn(r, e),
    unpinMagicEditSelection: (e) => Cn(r, e),
    applyMagicEditDocumentDiff: (e) => En(r, e),
    applyOptimisticMagicEditDocumentDiff: (e) => On(r, e),
    resolveOptimisticMagicEdit: (e, t, n) => kn(r, e, t, n),
    commitMagicEditDocumentDiff: (e) => Dn(r, e),
    clearCommittedMagicEditPreviewDecorations: (e) => An(r, e),
    buildAcceptedMagicEditCommitTransaction: (e) => Nn({ context: r, ...e }),
    buildMagicEditResolveFollowupTransaction: (e, t) => {
      let n = Qt(e);
      return n == null
        ? null
        : Nn({
            context: r,
            state: t,
            magicEditId: n.magicEditId,
            acceptedSegmentIndices: n.acceptedSegmentIndices,
          });
    },
    restoreOriginalMagicEditDocument: (e, t) => Pn(r, e, t),
    applyMagicEditEntry: (e, t, n) => In(r, e, t, n),
    applyMagicEditSegmentAction: i,
    applyMagicEditSegment: i,
    isSelectionInsideMagicEdit: (e) => Rn(r, e),
    getPinnedRange: (e) => zn(r, e),
  };
}
var Vn, Hn, Un, Wn;
function Gn() {
  return (Gn = e(() => {
    (j(),
      xe(),
      se(),
      oe(),
      c(),
      C(),
      v(),
      (Vn = `writingBlockAlwaysRecordInTrajectory`),
      (Hn = `writingBlockEditSource`),
      (Un = `writingBlockMagicEditResolveFollowup`),
      (Wn = /\s+(?=\r?\n|$)/gu));
  }))();
}
function Kn({
  editorView: e,
  enableAiTools: n,
  generatePluginState: i,
  isEditable: o,
  messageId: s,
  multiplayerSession: c,
  onTaskCheckboxToggled: u,
  onWriteLikeMeResult: d,
  serverConversationId: f,
  showMagicEditAction: p,
  variant: m,
  writingBlockId: h,
  writingBlockIndex: _,
}) {
  "use no forget";
  let v = l(),
    y = a(r),
    b = (0, Zn.useRef)(null),
    x = (0, Zn.useRef)(null),
    S = (0, Zn.useRef)(0),
    C = (0, Zn.useRef)(null),
    [w, E] = (0, Zn.useState)(``),
    [D, O] = (0, Zn.useState)(!1),
    [k, j] = (0, Zn.useState)(!1),
    [M, N] = (0, Zn.useState)(null),
    [P] = (0, Zn.useState)(Ht),
    [F] = (0, Zn.useState)(() => Bn({ sessionStore: P })),
    L = o && n,
    R = me({ isMultiplayerImageSupportEnabled: c != null, isMultiplayerImageIdentityEnabled: c != null }),
    te = I((e, t, n) => d?.(e, t, n) ?? !1),
    V = I(() => {
      y.get(g).danger(
        v.formatMessage({
          id: `chatgptConversations.writingBlock.aiRequestError`,
          defaultMessage: `ChatGPT couldn't update this writing block`,
          description: `Error toast shown when an AI generate or edit request fails for a ChatGPT writing block in Codex Apps.`,
        }),
        { errorAnalytics: { toastId: `chatgptConversations.writingBlock.aiRequestError` } },
      );
    }),
    H = I((e, t) =>
      B.safePost(`/conversation/message/writing-blocks/magic-edit`, { requestBody: e, signal: t.signal }),
    ),
    W = I(() => {
      E(``);
    }),
    G = I((e) =>
      Pe({
        ...e,
        enableGenerate: n,
        getTransactionFollowup: F.buildMagicEditResolveFollowupTransaction,
        leadingPlugins: [...(e.leadingPlugins ?? []), F.createWritingBlockMagicEditPlugin()],
        onGeneratePromptReset: W,
        onTaskCheckboxToggled: u,
      }),
    ),
    ne = I((e, t) => (c == null ? null : Bt(c, e, t))),
    {
      cancelGenerate: q,
      isLoading: ae,
      submitGenerate: oe,
    } = it({
      captureInput: c == null ? void 0 : ne,
      conversationId: f,
      executeRequest: H,
      onError: V,
      onSessionStarted: N,
      optimisticPreviewEngine: c == null ? void 0 : F,
      pmu: R,
      view: L ? e : null,
    }),
    se = $e({
      conversationId: f,
      executeRequest: H,
      messageId: s,
      onError: ({ error: e, kind: t, magicEditId: n }) => {
        (N(null),
          V(),
          t === `request-failed` &&
            f != null &&
            z(y, re, {
              conversationId: f,
              errorName: e instanceof Error ? e.name : `UnknownError`,
              magicEditId: n,
              messageId: s,
              writingBlockId: h,
              writingBlockIndex: _ == null ? void 0 : String(_),
            }));
      },
      onSessionStarted: N,
      onSubmitted: ({ magicEditId: e, submissionSource: t }) => {
        f != null &&
          z(y, he, {
            conversationId: f,
            magicEditId: e,
            messageId: s,
            submissionSource: t,
            writingBlockId: h,
            writingBlockIndex: _ == null ? void 0 : String(_),
          });
      },
      pmu: R,
      previewEngine: F,
      sessionStore: P,
      view: L ? e : null,
    }),
    { isLoading: le, submitMagicEdit: ue } = se,
    J = I(() => {
      (se.cancelMagicEdit(), S.current++, C.current?.abort(), (C.current = null), j(!1), N(null));
    }),
    de = I(() => {
      (ae && q(), (le || k) && J());
    }),
    fe = (t) => {
      if (!se.applyMagicEditResult(t)) return (N((e) => (e === t.magicEditId ? null : e)), !1);
      if (e == null || e.isDestroyed) return !1;
      let n = F.getMagicEditPluginState(e)?.entries.get(t.magicEditId);
      return (
        n != null &&
          n.segments.length > 0 &&
          n.segments.every((e) => e.suggested == null) &&
          (F.applyMagicEditEntry(e, t.magicEditId, `use`), N(null)),
        !0
      );
    };
  (0, Zn.useEffect)(
    () => () => {
      (q(), J());
    },
    [q, J, e, s, f, h],
  );
  let pe = i?.input ?? null,
    Y = i?.suggestion?.id ?? null,
    ve =
      M == null || (c != null && F.getMagicEditPluginState(e)?.optimisticPreview?.magicEditId !== M)
        ? null
        : P.read(M).previewModel,
    ye = k || (c == null && M != null && P.read(M).lifecycle !== `resolved`),
    X = ae || le || pe != null || Y != null || ve != null || ye,
    xe = D || X,
    Se = () => {
      e != null && !e.isDestroyed && e.focus();
    },
    Ce = (t, n) => {
      if (t) {
        if (!L || X || e == null || e.isDestroyed) return;
        let t = qn(e.state);
        if (t == null || (e.dispatch(e.state.tr.setSelection(t)), !F.pinMagicEditSelection(e))) return;
        ((x.current = e),
          e.dom.focus({ preventScroll: !0 }),
          f != null && z(y, K, { conversationId: f, messageId: s, variant: m, writingBlockId: h }),
          O(!0));
        return;
      }
      O(!1);
      let r = x.current;
      if (((x.current = null), r != null && !r.isDestroyed)) {
        F.unpinMagicEditSelection(r);
        let { state: e } = r;
        (r.dispatch(e.tr.setSelection(A.near(e.doc.resolve(e.selection.head)))),
          r.dom.ownerDocument.getSelection()?.removeAllRanges());
      }
      n?.cancelRequest !== !1 && J();
    },
    we = async (t) => {
      if (!L || X || e == null || e.isDestroyed) return !1;
      let n = { from: 0, to: e.state.doc.content.size },
        r = await ue({ instruction: t, mode: `full-edit`, range: n, submissionSource: Ke.HEADER_COMPOSER });
      return r != null && fe({ magicEditId: r.magicEditId, range: n, replacement: r.replacements[0] ?? `` });
    },
    Te = async () => {
      (await oe(w)) && E(``);
    },
    Ee = async (t, n) => {
      if (!L || X || e == null || e.isDestroyed) return !1;
      let r = F.getPinnedRange(e) ?? n,
        i = await ue({ instruction: t, range: r, submissionSource: Ke.TOOLBAR });
      return i != null && fe({ magicEditId: i.magicEditId, range: r, replacement: i.replacements[0] ?? `` });
    },
    De = async (t, n) => {
      if (
        !L ||
        X ||
        e == null ||
        e.isDestroyed ||
        C.current != null ||
        (n != null && (f == null || s == null)) ||
        d == null
      )
        return !1;
      let r = ++S.current,
        i = new AbortController(),
        a = crypto.randomUUID();
      C.current = i;
      let o = e.state.doc;
      return (
        j(!0),
        Promise.resolve()
          .then(async () => {
            if (r !== S.current || i.signal.aborted) return !1;
            if (f == null || s == null) {
              let e = { from: 0, to: o.content.size },
                n = await ue({
                  instruction: `Rewrite this using my writing style.`,
                  mode: `full-edit`,
                  personalizationEnabled: !0,
                  range: e,
                  submissionSource: Ke.HEADER_COMPOSER,
                });
              if (r !== S.current) return !1;
              let i = n?.replacements[0];
              return n == null ||
                i == null ||
                !se.validateMagicEditResult({ magicEditId: n.magicEditId, range: e, replacement: i })
                ? !1
                : (J(), te(t, i));
            }
            let c = R.serialize(o);
            z(y, he, {
              conversationId: f,
              magicEditId: a,
              messageId: s,
              submissionSource: Ke.HEADER_COMPOSER,
              writingBlockId: h,
              writingBlockIndex: _ == null ? void 0 : String(_),
            });
            let l = await B.safePost(`/conversation/message/writing-blocks/magic-edit`, {
              requestBody: {
                conversation_id: f,
                message_id: s,
                full_block_body_markdown: c,
                start_index: 0,
                end_index: Array.from(c).length,
                instruction: `Rewrite this using my writing style.`,
                mode: `full-edit`,
                num_variations: 1,
                personalization_enabled: !0,
              },
              signal: i.signal,
            });
            if (r !== S.current || e.isDestroyed || !e.state.doc.eq(o)) return !1;
            let u = l.choices[0];
            return u?.trim()
              ? te(
                  t,
                  u,
                  n?.primaryOption == null ? n : { ...n, primaryOption: { ...n.primaryOption, content: c } },
                )
              : (V(), !1);
          })
          .catch(
            (e) => (
              i.signal.aborted ||
                (V(),
                z(y, re, {
                  conversationId: f,
                  errorName: e instanceof Error ? e.name : `UnknownError`,
                  magicEditId: a,
                  messageId: s,
                  writingBlockId: h,
                  writingBlockIndex: _ == null ? void 0 : String(_),
                })),
              !1
            ),
          )
          .finally(() => {
            r === S.current && ((C.current = null), j(!1));
          })
      );
    },
    Oe = () => {
      if ((q(), E(``), e == null || e.isDestroyed)) return;
      let t = U.getState(e.state)?.input?.triggerPos;
      if ((ie(e), t != null)) {
        let { state: n } = e,
          r = n.doc.resolve(Math.max(0, Math.min(t, n.doc.content.size)));
        e.dispatch(n.tr.setSelection(A.findFrom(r, 1, !0) ?? A.near(r, 1)));
      }
      e.focus();
    },
    ke = I(() => {
      (q(),
        J(),
        E(``),
        O(!1),
        (x.current = null),
        N(null),
        !(e == null || e.isDestroyed) &&
          (M != null &&
            (c == null ? F.applyMagicEditEntry(e, M, `keep`) : F.resolveOptimisticMagicEdit(e, M, `use`)),
          Y != null && ge(e, Y),
          pe != null && ie(e),
          F.unpinMagicEditSelection(e)));
    }),
    Ae = () => {
      e == null || e.isDestroyed || Y == null || (ee(e, Y), e.focus());
    },
    je = () => {
      e == null || e.isDestroyed || Y == null || (ge(e, Y), e.focus());
    },
    Me = (t) => {
      e == null ||
        e.isDestroyed ||
        M == null ||
        (f != null &&
          z(y, t === `use` ? be : ce, {
            conversationId: f,
            decisionSource: `toolbar`,
            magicEditId: M,
            messageId: s,
            writingBlockId: h,
            writingBlockIndex: _ == null ? void 0 : String(_),
          }),
        c == null ? F.applyMagicEditEntry(e, M, t) : F.resolveOptimisticMagicEdit(e, M, t),
        N(null),
        e.focus());
    },
    Ne = v.formatMessage({
      id: `chatgptConversations.writingBlock.aiAccept`,
      defaultMessage: `Accept`,
      description: `Accessible label for accepting an AI writing block edit in Codex Apps.`,
    }),
    Fe = v.formatMessage({
      id: `chatgptConversations.writingBlock.aiUndo`,
      defaultMessage: `Undo`,
      description: `Short button label below an AI edit or generation preview in a Codex Apps writing block. It discards the suggested changes and restores the previous text; it is separate from the editor's general undo history control.`,
    }),
    Ie = {
      accept: Ne,
      acceptAll: v.formatMessage({
        id: `chatgptConversations.writingBlock.aiAcceptAll`,
        defaultMessage: `Accept all`,
        description: `Button label for accepting all segments of an AI writing block edit in Codex Apps.`,
      }),
      reject: Fe,
    };
  return {
    cancelPendingAiRequests: de,
    createEditor: G,
    editorOverlays: (0, $.jsxs)($.Fragment, {
      children: [
        pe != null && e != null
          ? (0, $.jsx)(Et, {
              anchorPos: pe.anchorPos,
              editorRootRef: b,
              editorView: e,
              isLoading: ae,
              labels: {
                cancel: v.formatMessage({
                  id: `chatgptConversations.writingBlock.generate.cancel`,
                  defaultMessage: `Cancel`,
                  description: `Accessible label for canceling an AI writing block generation request in Codex Apps.`,
                }),
                placeholder: v.formatMessage({
                  id: `chatgptConversations.writingBlock.generate.placeholder`,
                  defaultMessage: `Tell ChatGPT what to write`,
                  description: `Placeholder for the AI generation prompt in a ChatGPT writing block in Codex Apps.`,
                }),
                submit: v.formatMessage({
                  id: `chatgptConversations.writingBlock.generate.submit`,
                  defaultMessage: `Generate`,
                  description: `Accessible label for submitting an AI writing block generation request in Codex Apps.`,
                }),
              },
              onCancel: Oe,
              onChange: E,
              onSubmit: () => void Te(),
              renderInput: Jn,
              renderPresentation: (e) =>
                (0, $.jsx)(`div`, {
                  className: `m-0 flex h-9 w-fit min-w-0 shrink items-center overflow-hidden rounded-xl [background-color:var(--oai-wb-surface-primary)] px-1 py-1 [box-shadow:var(--oai-wb-shadow-lg)]`,
                  children: e,
                }),
              value: w,
            })
          : null,
        ve == null
          ? Y == null
            ? null
            : (0, $.jsx)(Nt, {
                activeEntryId: Y,
                editorRootRef: b,
                focusEditor: Se,
                fullscreenMode: !1,
                labels: Ie,
                onAccept: Ae,
                onReject: je,
                suggestionsOnly: !0,
              })
          : (0, $.jsx)(Nt, {
              activeEntryId: M,
              editorRootRef: b,
              focusEditor: Se,
              fullscreenMode: !1,
              labels: Ie,
              onAccept: () => Me(`use`),
              onReject: () => Me(`keep`),
              suggestionsOnly: !0,
            }),
      ],
    }),
    editorRootRef: b,
    hasPendingAiEdits: ae || le || Y != null || ye || k,
    onEditSelection: L ? Ee : void 0,
    onEditorKeyDownCapture: (e) => {
      D && e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), Ce(!1));
    },
    onEditorPointerDownCapture: () => {
      D && Ce(!1);
    },
    headerMagicEditAction: p
      ? (0, $.jsx)(wt, {
          controls: {
            isComposerOpen: D,
            isInteractionDisabled: !L || X,
            onCancelComposerSubmit: J,
            onComposerOpenChange: Ce,
            onSubmitComposerInstruction: we,
          },
          labels: {
            composerPlaceholder: v.formatMessage({
              id: `chatgptConversations.writingBlock.magicEdit.placeholder`,
              defaultMessage: `Ask for changes`,
              description: `Placeholder for the full-document AI edit composer in a ChatGPT writing block in Codex Apps.`,
            }),
            editButton: v.formatMessage({
              id: `chatgptConversations.writingBlock.magicEdit.button`,
              defaultMessage: `Edit`,
              description: `Visible label for opening AI editing in a ChatGPT writing block in Codex Apps.`,
            }),
            submitButton: v.formatMessage({
              id: `chatgptConversations.writingBlock.magicEdit.submit`,
              defaultMessage: `Submit edits`,
              description: `Accessible label for submitting a full-document AI edit in a ChatGPT writing block in Codex Apps.`,
            }),
          },
          renderEditIcon: Yn,
          renderSubmitIcon: Xn,
          renderSubmittingControl: ({ onCancel: e, size: n }) =>
            (0, $.jsxs)(t, {
              color: `ghost`,
              size: `icon`,
              uniform: !0,
              "aria-label": v.formatMessage({
                id: `chatgptConversations.writingBlock.magicEdit.cancel`,
                defaultMessage: `Cancel`,
                description: `Accessible label for canceling a full-document AI edit request in a ChatGPT writing block in Codex Apps.`,
              }),
              className: `relative`,
              onClick: e,
              style: { height: n, width: n },
              children: [
                (0, $.jsx)(T, { className: `size-5` }),
                (0, $.jsx)(_e, { className: `absolute size-2` }),
              ],
            }),
          submitButtonClassName: `text-default`,
        })
      : null,
    isEditorInteractionDisabled: ye,
    isGenerateInputOpen: pe != null,
    isHeaderComposerOpen: D,
    isHeaderInteractionDisabled: X,
    isHistoryInteractionDisabled: xe,
    isWriteLikeMeSubmitting: k,
    magicEdit: { ...se, applyMagicEditResult: fe, cancelMagicEdit: J },
    onWriteLikeMeAction: L && d != null ? De : void 0,
    previewEngine: F,
    resetAiTools: ke,
    resetGeneratePrompt: W,
    submitHeaderMagicEdit: we,
  };
}
function qn(e) {
  let { doc: t } = e,
    n = A.findFrom(t.resolve(0), 1, !0),
    r = A.findFrom(t.resolve(t.content.size), -1, !0);
  if (n == null || r == null) return null;
  let i = Math.min(n.from, r.to),
    a = Math.max(n.from, r.to);
  return i === a ? null : p.create(t, a, i);
}
function Jn({
  cancelAriaLabel: e,
  disabled: n,
  inputClassName: r,
  inputRef: i,
  isLoading: a,
  isSubmitDisabled: o,
  onCancel: s,
  onChange: c,
  onKeyDownCapture: l,
  onSubmit: u,
  placeholder: d,
  submitAriaLabel: f,
  value: p,
}) {
  return (0, $.jsxs)(`div`, {
    className: `relative min-w-[300px] flex-1`,
    children: [
      (0, $.jsx)(`input`, {
        ref: i,
        "aria-label": d,
        className: h(
          r,
          `mx-0 min-w-[300px] bg-transparent py-2 ps-2.5 pe-9 text-sm text-default outline-none placeholder:text-tertiary`,
        ),
        disabled: n,
        onChange: (e) => c(e.target.value),
        onKeyDownCapture: (e) => {
          (l(e),
            !(e.defaultPrevented || e.key !== `Enter` || e.nativeEvent.isComposing) &&
              (e.preventDefault(), e.stopPropagation(), !a && !o && u(e)));
        },
        placeholder: d,
        value: p,
      }),
      (0, $.jsx)(`div`, {
        className: `absolute end-1.5 top-1/2 flex -translate-y-1/2 items-center justify-center`,
        children: (0, $.jsx)(t, {
          "aria-label": a ? e : f,
          className: `shrink-0 rounded-full`,
          color: `accent`,
          size: `iconMd`,
          uniform: !0,
          disabled: !a && o,
          onClick: a ? s : u,
          children: a ? (0, $.jsx)(_e, { className: `icon-xs` }) : (0, $.jsx)(E, { className: `icon-xs` }),
        }),
      }),
    ],
  });
}
function Yn({ className: e }) {
  return (0, $.jsx)(m, { className: e.replace(`size-5`, ``) });
}
function Xn({ className: e }) {
  return (0, $.jsx)(E, { className: e });
}
var Zn, $;
function Qn() {
  return (Qn = e(() => {
    (Ce(),
      ve(),
      pe(),
      Ye(),
      Gn(),
      Vt(),
      ot(),
      et(),
      jt(),
      Tt(),
      zt(),
      u(),
      o(),
      C(),
      (Zn = L()),
      b(),
      ae(),
      O(),
      s(),
      _(),
      S(),
      y(),
      G(),
      te(),
      P(),
      d(),
      Ne(),
      ($ = F()));
  }))();
}
export { Ke as a, Vt as i, Kn as n, Ye as o, Bt as r, Qn as t };
//# sourceMappingURL=chatgpt-writing-block-ai-tools-49a17c07b981.js.map
