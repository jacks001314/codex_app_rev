import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $F as n,
  $St as r,
  $st as i,
  Cwt as a,
  Dwt as o,
  FBt as s,
  Kj as c,
  LNt as l,
  MNt as u,
  NNt as d,
  Nwt as f,
  Owt as p,
  PBt as m,
  Qst as h,
  TY as g,
  Vrt as _,
  WAt as v,
  XF as y,
  XOt as b,
  Y3 as x,
  Z3 as S,
  ZSt as C,
  aTt as w,
  bwt as T,
  e6 as E,
  eTt as D,
  gB as O,
  hB as k,
  jwt as A,
  kwt as j,
  oTt as M,
  okt as ee,
  pK as N,
  qj as P,
  qrt as F,
  xwt as I,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  AWn as L,
  B5 as R,
  B8 as z,
  C5 as te,
  D5 as B,
  DWn as ne,
  E5 as V,
  F5 as H,
  F8 as U,
  G7n as W,
  H5 as G,
  I5 as re,
  IWn as K,
  L5 as q,
  M8 as ie,
  N8 as ae,
  O5 as oe,
  OWn as se,
  P5 as ce,
  P8 as le,
  R5 as J,
  S5 as ue,
  T5 as de,
  TWn as fe,
  U5 as pe,
  V5 as Y,
  W5 as me,
  W7n as he,
  iRr as ge,
  kWn as _e,
  tyr as ve,
  w5 as ye,
  x5 as be,
  xMr as xe,
  yMr as Se,
  z5 as Ce,
  z8 as we,
} from "./app-initial-ad16eaadf81f.js";
import { n as Te, t as Ee } from "./writing-block-theme-61c0ed2a12ed.js";
import {
  _ as De,
  f as Oe,
  g as ke,
  h as Ae,
  m as je,
  p as Me,
  y as Ne,
} from "./writing-block-floating-slash-menu-0e90008f8679.js";
import { i as Pe, n as Fe } from "./writing-block-editor-dbbb9cb704f0.js";
import { d as Ie, r as Le } from "./types-b46e00871847.js";
function Re() {
  return new DOMException(`Request canceled`, `AbortError`);
}
function ze(e) {
  let t = null;
  return {
    cancel() {
      (t?.abort(Re()), (t = null));
    },
    async execute(n) {
      t?.abort(Re());
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
function Be(e, t) {
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
async function Ve({
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
    l = ie({ view: e, pmu: t, range: n });
  } catch {
    throw Error(`Unable to serialize the current selection for magic edit.`);
  }
  let u = ae(e, n),
    d = We(e.dom, u),
    f = Ge(l.fullMarkdown, l.startIndex, l.endIndex),
    p = z(l.fullMarkdown, l.startIndex, l.endIndex),
    m = t.serialize(e.state.doc),
    h = await Ke(l.fullMarkdown);
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
function He({ view: e, pmu: t, prompt: n, input: r, conversationId: i }) {
  let { anchorPos: a, caretPos: o, triggerPos: s } = r,
    c = { from: Math.min(s, a, o), to: Math.max(a, o) },
    l = t.serialize(e.state.doc),
    u = le(e.state.doc, t, Je, c.from, 1),
    d = le(e.state.doc, t, Ye, c.to, -1);
  return {
    conversation_id: i,
    full_block_body_markdown: l,
    start_index: u,
    end_index: d,
    marked_block_body_markdown: z(l, u, d),
    instruction: n,
    num_variations: 1,
    mode: `generate`,
  };
}
function Ue(e, t) {
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
function We(e, t) {
  return {
    startPath: Ue(e, t.startContainer),
    startOffset: t.startOffset,
    endPath: Ue(e, t.endContainer),
    endOffset: t.endOffset,
  };
}
function Ge(e, t, n, r = 120) {
  let i = Math.max(0, t - r),
    a = Math.min(e.length, n + r);
  return { leading: e.slice(i, t), selection: e.slice(t, n), trailing: e.slice(n, a) };
}
async function Ke(e) {
  let t = new TextEncoder().encode(e),
    n = await crypto.subtle.digest(`SHA-256`, t);
  return Array.from(new Uint8Array(n))
    .map((e) => e.toString(16).padStart(2, `0`))
    .join(``);
}
var qe, Je, Ye;
function Xe() {
  return (Xe = e(() => {
    (U(),
      we(),
      (qe = (function (e) {
        return (
          (e.TOOLBAR = `toolbar`),
          (e.FULLSCREEN_COMPOSER = `fullscreen-composer`),
          (e.HEADER_COMPOSER = `header-composer`),
          e
        );
      })({})),
      (Je = `⟦MAGICSTART⟧`),
      (Ye = `⟦MAGICEND⟧`));
  }))();
}
function Ze(e, t) {
  let n = Math.max(0, Math.min(e.from, t));
  return { from: n, to: Math.max(n, Math.min(e.to, t)) };
}
function Qe(e) {
  return e instanceof DOMException && e.name === `AbortError`;
}
function $e() {
  return crypto.randomUUID();
}
function et({
  view: e,
  pmu: t,
  sessionStore: n,
  previewEngine: r,
  executeRequest: i,
  conversationId: a,
  messageId: o,
  mode: s = `edit`,
  optimistic: c = !1,
  onSessionStarted: l,
  onPrepared: u,
  onSubmitted: d,
  onError: f,
  isAbortError: p = Qe,
  createMagicEditId: m = $e,
}) {
  "use no forget";
  let h = (0, X.useRef)(null),
    g = (0, X.useRef)(null),
    _ = (0, X.useRef)(null),
    v = (0, X.useRef)(0),
    y = (0, X.useRef)(i);
  y.current = i;
  let b = (0, X.useRef)(void 0),
    x = (b.current ??= ze((e, t) => y.current(e, t))),
    [S, C] = (0, X.useState)(!1),
    [T, E] = (0, X.useState)(null),
    D = (0, X.useCallback)(
      (e) => {
        e && n.update(e, { lifecycle: `resolved` });
      },
      [n],
    ),
    O = (0, X.useCallback)(
      async (t, r, i) => {
        let a = await x.execute(t);
        return i !== v.current || !e || e.isDestroyed || !h.current?.document.eq(e.state.doc)
          ? (D(r), null)
          : a.choices.length === 0
            ? (D(r), f?.({ kind: `invalid-suggestion`, magicEditId: r }), null)
            : (n.update(r, { replacements: a.choices, modelSlug: a.model_slug, status: `ready` }),
              { replacements: a.choices, magicEditId: r });
      },
      [f, x, D, n, e],
    ),
    k = (0, X.useCallback)(() => {
      (v.current++,
        x.cancel(),
        D(_.current),
        (_.current = null),
        (g.current = null),
        (h.current = null),
        C(!1),
        E(null));
    }, [x, D]);
  (0, X.useEffect)(() => k, [k, a, o, e]);
  let A = (0, X.useCallback)(
      async ({
        instruction: r,
        numVariations: i = 1,
        mode: c = s,
        personalizationEnabled: y,
        range: b,
        submissionSource: S,
      }) => {
        if (!e || e.isDestroyed) return null;
        if (!b) return (f?.({ kind: `no-selection` }), null);
        let w = ++v.current;
        (x.cancel(), D(_.current), (h.current = null), (g.current = null));
        let T = e.state.doc,
          k = Be(e, b);
        (C(!0), E(S));
        let A = null;
        try {
          ((A = m()),
            (_.current = A),
            n.update(A, { lifecycle: `request_in_flight`, status: `pending` }),
            l?.(A));
          let s = await Ve({
            view: e,
            pmu: t,
            range: k,
            instruction: r,
            numVariations: i,
            conversationId: a,
            messageId: o,
            mode: c,
            personalizationEnabled: y,
          });
          if (w !== v.current || e.isDestroyed || !e.state.doc.eq(T)) return (D(A), null);
          let { payload: f, snapshot: p } = s;
          return (
            n.update(A, {
              domAnchor: p.domAnchor,
              textAnchor: p.textAnchor,
              baseBlockVersion: p.baseBlockVersion,
              freeformFeedback: r,
              fullBlockBodyMarkdown: p.fullMarkdown,
              startIndex: p.startIndex,
              endIndex: p.endIndex,
              segmentDiffs: [],
              acceptedSegmentIndices: [],
            }),
            (h.current = { magicEditId: A, snapshot: p, document: T }),
            (g.current = f),
            u?.(s),
            w === v.current
              ? (d?.({ conversationId: a, magicEditId: A, submissionSource: S }), await O(f, A, w))
              : (D(A), null)
          );
        } catch (t) {
          return (
            D(A),
            w === v.current &&
              !e.isDestroyed &&
              !p(t) &&
              f?.({ kind: `request-failed`, error: t, magicEditId: A ?? void 0 }),
            null
          );
        } finally {
          w === v.current && (C(!1), E(null));
        }
      },
      [a, m, O, p, o, s, f, u, l, d, t, x, D, n, e],
    ),
    j = (0, X.useCallback)(async () => {
      let t = g.current,
        r = _.current;
      if (!t || !r || !e || e.isDestroyed || !h.current?.document.eq(e.state.doc)) return null;
      let i = ++v.current;
      (C(!0), n.update(r, { lifecycle: `request_in_flight`, status: `pending` }), l?.(r));
      try {
        return await O(t, r, i);
      } catch (t) {
        return (
          D(r),
          i === v.current &&
            !e.isDestroyed &&
            !p(t) &&
            f?.({ kind: `request-failed`, error: t, magicEditId: r }),
          null
        );
      } finally {
        i === v.current && C(!1);
      }
    }, [O, p, f, l, D, n, e]),
    M = (0, X.useCallback)(
      ({ magicEditId: n, replacement: r, range: i }) => {
        if (!e || e.isDestroyed) return (D(n), null);
        let a = h.current;
        if (!a || a.magicEditId !== n || !a.document.eq(e.state.doc) || !i) return (D(n), null);
        let { snapshot: o } = a,
          s;
        try {
          s = t.parse(r ?? ``);
        } catch (e) {
          return (f?.({ kind: `invalid-suggestion`, error: e, magicEditId: n }), D(n), null);
        }
        let c;
        try {
          let t = Ze(o.blockRange, e.state.doc.content.size);
          c = e.state.doc.replace(t.from, t.to, new w(s.content, 0, 0));
        } catch (e) {
          return (f?.({ kind: `invalid-suggestion`, error: e, magicEditId: n }), D(n), null);
        }
        return { magicEditId: n, normalizedRange: Be(e, i), suggestionDoc: c, view: e };
      },
      [f, t, D, e],
    );
  return {
    isLoading: S,
    submitMagicEdit: A,
    cancelMagicEdit: k,
    validateMagicEditResult: (0, X.useCallback)((e) => M(e) != null, [M]),
    applyMagicEditResult: (0, X.useCallback)(
      (e) => {
        let n = M(e);
        if (n == null) return !1;
        let i = r[c ? `applyOptimisticMagicEditDocumentDiff` : `applyMagicEditDocumentDiff`]({
          view: n.view,
          pmu: t,
          selection: n.normalizedRange,
          magicEditId: n.magicEditId,
          replacementDoc: n.suggestionDoc,
        });
        return (i ? (h.current = null) : D(n.magicEditId), i);
      },
      [c, t, M, r, D],
    ),
    isSelectionInsideMagicEdit: (0, X.useCallback)(
      () => (e && !e.isDestroyed ? r.isSelectionInsideMagicEdit(e) : !1),
      [r, e],
    ),
    retry: j,
    magicEditSubmissionSource: T,
  };
}
var X;
function tt() {
  return (tt = e(() => {
    (M(), (X = s()), Xe());
  }))();
}
function nt(e) {
  return e instanceof DOMException && e.name === `AbortError`;
}
function rt() {
  return crypto.randomUUID();
}
function it(e) {
  let t = e.choices;
  if (!Array.isArray(t)) return ``;
  let n = t[0];
  return typeof n == `string`
    ? n
    : typeof n == `object` && n && `text` in n && typeof n.text == `string`
      ? n.text
      : ``;
}
function at({
  view: e,
  pmu: t,
  executeRequest: n,
  conversationId: r,
  captureInput: i,
  optimisticPreviewEngine: a,
  onSessionStarted: o,
  onError: s,
  isAbortError: c = nt,
  createSuggestionId: l = rt,
}) {
  "use no forget";
  let u = (0, ot.useRef)(0),
    d = (0, ot.useRef)(null),
    f = i != null,
    p = (0, ot.useRef)(n);
  p.current = n;
  let m = (0, ot.useRef)(void 0),
    h = (m.current ??= ze((e, t) => p.current(e, t))),
    [g, _] = (0, ot.useState)(!1),
    v = (0, ot.useCallback)(() => {
      (u.current++,
        h.cancel(),
        d.current?.dispose(),
        (d.current = null),
        e && !e.isDestroyed && f && B(e, null),
        _(!1));
    }, [h, f, e]);
  return (
    (0, ot.useEffect)(() => v, [v, i, r, e]),
    {
      isLoading: g,
      submitGenerate: (0, ot.useCallback)(
        async (n) => {
          if (!e || e.isDestroyed || !e.editable || !t) return !1;
          let p = n.trim();
          if (p === ``) return !1;
          let m = oe.getState(e.state);
          if (!m?.input) return !1;
          let g = ++u.current;
          (h.cancel(), d.current?.dispose(), (d.current = null), _(!1));
          let v = e.state.doc,
            y;
          try {
            y = He({ view: e, pmu: t, prompt: p, input: m.input, conversationId: r });
          } catch (e) {
            return (s?.({ kind: `prepare-request`, error: e }), !1);
          }
          let b = null;
          try {
            if (i) {
              if (((b = i(e, m.input)), !b)) return !1;
              d.current = b;
            }
            (f && B(e, g), _(!0));
            let n = await h.execute(y);
            if (g !== u.current || e.isDestroyed || !e.editable || (!b && !e.state.doc.eq(v))) return !1;
            let r = oe.getState(e.state)?.pendingRequestId;
            if (f && r !== g) return !1;
            let c = b ? b.resolve() : oe.getState(e.state)?.input;
            if (b && !c) return !1;
            let p = l(),
              x = it(n),
              S = !1;
            if (a && c) {
              let n = ue({ state: e.state, pmu: t, text: x, input: c });
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
            } else a || (S = de({ view: e, pmu: t, suggestionId: p, text: x, input: c }));
            return S ? !0 : (s?.({ kind: `insert-failed` }), !1);
          } catch (e) {
            return (g === u.current && !c(e) && s?.({ kind: `request-failed`, error: e }), !1);
          } finally {
            (b?.dispose(),
              d.current === b && (d.current = null),
              g === u.current && (f && !e.isDestroyed && B(e, null), _(!1)));
          }
        },
        [r, i, l, c, s, o, a, t, h, f, e],
      ),
      cancelGenerate: v,
    }
  );
}
var ot;
function st() {
  return (st = e(() => {
    ((ot = s()), Xe(), ye());
  }))();
}
function ct(e, t) {
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
function lt(e, t) {
  "use forget";
  let n = (0, dt.c)(8),
    r;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((r = []), (n[0] = r)) : (r = n[0]);
  let [i, a] = (0, ft.useState)(r),
    o;
  n[1] !== e || n[2] !== t
    ? ((o = () => {
        let n = e.current;
        if (!n) {
          a(pt);
          return;
        }
        let r = n.querySelectorAll(
            t
              ? `[data-me-role='sugg'], [data-generate-suggestion]`
              : `[data-me-role='orig'], [data-me-role='sugg'], [data-generate-suggestion]`,
          ),
          i = Array.from(r).map(ut);
        a((e) => (ct(e, i) ? e : i));
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
    mt(c, l),
    i
  );
}
function ut(e) {
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
var dt, ft, pt, mt;
function ht() {
  return (ht = e(() => {
    ((dt = m()), (ft = s()), (pt = []), (mt = typeof window > `u` ? ft.useEffect : ft.useLayoutEffect));
  }))();
}
function gt(e) {
  return e === `open` ? `closing` : e;
}
function _t(e) {
  return e === `closing` ? `collapsed` : e;
}
function vt() {}
function yt(e) {
  return e.preventDefault();
}
var bt, xt, Z, St, Ct, wt, Tt;
function Et() {
  return (Et = e(() => {
    ((bt = m()),
      d(),
      (xt = s()),
      Ee(),
      (Z = l()),
      (St = `291px`),
      (Ct = `72px`),
      (wt = 250),
      (Tt = (e) => {
        "use forget";
        let t = (0, bt.c)(94),
          {
            classNames: n,
            controls: r,
            labels: i,
            renderEditIcon: a,
            renderSubmitIcon: o,
            renderSubmittingControl: s,
            onEditButtonClick: c,
            showCollapsedEditLabel: l,
            submitButtonClassName: d,
            trailingContent: f,
          } = e,
          p = l === void 0 || l,
          m = a,
          h = o,
          g = s,
          [_, v] = (0, xt.useState)(``),
          [y, b] = (0, xt.useState)(!1),
          x = (0, xt.useRef)(null),
          S = (0, xt.useRef)(0),
          C = (0, xt.useRef)(!1),
          w = (0, xt.useRef)(null),
          [T, E] = (0, xt.useState)(r.isComposerOpen ? `open` : `collapsed`),
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
          (0, xt.useEffect)(k, A));
        let j, M;
        (t[5] === r.isComposerOpen
          ? ((j = t[6]), (M = t[7]))
          : ((j = () => {
              if (r.isComposerOpen) {
                (O(), E(`open`));
                return;
              }
              E(gt);
            }),
            (M = [O, r.isComposerOpen]),
            (t[5] = r.isComposerOpen),
            (t[6] = j),
            (t[7] = M)),
          (0, xt.useEffect)(j, M));
        let ee, N;
        (t[8] === T
          ? ((ee = t[9]), (N = t[10]))
          : ((ee = () => {
              if (T === `closing`)
                return (
                  O(),
                  (w.current = window.setTimeout(() => {
                    ((w.current = null), E(_t));
                  }, wt)),
                  O
                );
            }),
            (N = [O, T]),
            (t[8] = T),
            (t[9] = ee),
            (t[10] = N)),
          (0, xt.useEffect)(ee, N));
        let P = r.isInteractionDisabled || r.isHeaderInteractionDisabled === !0,
          F;
        t[11] !== r || t[12] !== y
          ? ((F = (e) => {
              (!e && y && ((S.current += 1), b(!1), r.onSubmittingChange?.(!1), r.onCancelComposerSubmit()),
                r.onComposerOpenChange(e));
            }),
            (t[11] = r),
            (t[12] = y),
            (t[13] = F))
          : (F = t[13]);
        let I = F,
          L;
        t[14] !== r || t[15] !== _ || t[16] !== P || t[17] !== y
          ? ((L = () => {
              let e = _.trim();
              if (!e || P || y) return;
              let t = (S.current += 1);
              (b(!0),
                r.onSubmittingChange?.(!0),
                r
                  .onSubmitComposerInstruction(e)
                  .then((e) => {
                    t === S.current && e && (v(``), r.onComposerOpenChange(!1, { cancelRequest: !1 }));
                  })
                  .catch(vt)
                  .finally(() => {
                    t === S.current && (b(!1), r.onSubmittingChange?.(!1));
                  }));
            }),
            (t[14] = r),
            (t[15] = _),
            (t[16] = P),
            (t[17] = y),
            (t[18] = L))
          : (L = t[18]);
        let R = L,
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
        t[22] !== I || t[23] !== R
          ? ((B = (e) => {
              if (e.key === `Enter` && !e.shiftKey && !e.nativeEvent.isComposing) {
                (e.preventDefault(), R());
                return;
              }
              e.key === `Escape` && (e.preventDefault(), I(!1));
            }),
            (t[22] = I),
            (t[23] = R),
            (t[24] = B))
          : (B = t[24]);
        let ne = B,
          V = T === `open`,
          H = T !== `collapsed`,
          U = r.isComposerOpen && V,
          W = r.isComposerOpen || H,
          G;
        t[25] !== V || t[26] !== T
          ? ((G = V
              ? { insetInlineStart: 0, width: `100%`, maxWidth: `100%`, visibility: `visible` }
              : {
                  insetInlineStart: 0,
                  width: Ct,
                  maxWidth: `100%`,
                  visibility: T === `collapsed` ? `hidden` : `visible`,
                }),
            (t[25] = V),
            (t[26] = T),
            (t[27] = G))
          : (G = t[27]);
        let re = G,
          K;
        t[28] === H
          ? (K = t[29])
          : ((K = H ? { width: St, maxWidth: `50%` } : void 0), (t[28] = H), (t[29] = K));
        let q = K,
          ie = i.editButton,
          ae = H ? -1 : void 0,
          oe;
        t[30] !== I || t[31] !== c
          ? ((oe = () => {
              (c?.(), I(!0));
            }),
            (t[30] = I),
            (t[31] = c),
            (t[32] = oe))
          : (oe = t[32]);
        let se = n?.editButton,
          ce = p ? `pe-3 text-start` : `size-9 justify-center`,
          le;
        t[33] !== se || t[34] !== ce
          ? ((le = u(
              `box-border flex h-9 items-center rounded-[24px] border [border-color:var(--oai-wb-divider)] [background-color:var(--oai-wb-surface-primary)] [color:var(--oai-wb-text-primary)] transition-colors select-none enabled:hover:[background-color:var(--oai-wb-surface-secondary)] disabled:cursor-default disabled:opacity-40`,
              se,
              ce,
            )),
            (t[33] = se),
            (t[34] = ce),
            (t[35] = le))
          : (le = t[35]);
        let J;
        t[36] !== i.editButton || t[37] !== p
          ? ((J =
              p &&
              (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(`span`, { className: `h-9 w-8 shrink-0`, "aria-hidden": `true` }),
                  (0, Z.jsx)(`span`, {
                    "data-testid": `writing-block-header-magic-edit-collapsed-label`,
                    className: `block shrink-0 whitespace-nowrap text-sm font-medium [color:var(--oai-wb-text-primary)]`,
                    children: i.editButton,
                  }),
                ],
              })),
            (t[36] = i.editButton),
            (t[37] = p),
            (t[38] = J))
          : (J = t[38]);
        let ue;
        t[39] !== P || t[40] !== i.editButton || t[41] !== ae || t[42] !== oe || t[43] !== le || t[44] !== J
          ? ((ue = (0, Z.jsx)(`button`, {
              type: `button`,
              "aria-label": ie,
              disabled: P,
              tabIndex: ae,
              onClick: oe,
              onMouseDown: yt,
              "data-testid": `writing-block-header-magic-edit-button`,
              className: le,
              children: J,
            })),
            (t[39] = P),
            (t[40] = i.editButton),
            (t[41] = ae),
            (t[42] = oe),
            (t[43] = le),
            (t[44] = J),
            (t[45] = ue))
          : (ue = t[45]);
        let de = ue,
          fe;
        t[46] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((fe = { insetInlineStart: 0 }), (t[46] = fe))
          : (fe = t[46]);
        let pe = P && `opacity-40`,
          Y;
        t[47] === pe
          ? (Y = t[48])
          : ((Y = u(`size-5 shrink-0 grow-0`, `[color:var(--oai-wb-text-primary)]`, pe)),
            (t[47] = pe),
            (t[48] = Y));
        let me;
        t[49] !== m || t[50] !== Y
          ? ((me = (0, Z.jsx)(`div`, {
              "data-testid": `writing-block-header-magic-edit-leading-icon-slot`,
              className: `pointer-events-none absolute inset-y-0 z-3 flex items-center`,
              style: fe,
              children: (0, Z.jsx)(`span`, {
                className: `flex size-9 shrink-0 items-center justify-center rounded-[43px]`,
                children: (0, Z.jsx)(m, { className: Y }),
              }),
            })),
            (t[49] = m),
            (t[50] = Y),
            (t[51] = me))
          : (me = t[51]);
        let he = V ? `pointer-events-none opacity-0` : `opacity-100`,
          ge;
        t[52] === he
          ? (ge = t[53])
          : ((ge = u(
              `relative z-2 flex shrink-0 items-center gap-0.5 overflow-visible transition-opacity duration-200 ease-out`,
              he,
            )),
            (t[52] = he),
            (t[53] = ge));
        let _e;
        t[54] !== de || t[55] !== H || t[56] !== ge
          ? ((_e = (0, Z.jsx)(`div`, {
              "data-testid": `writing-block-header-magic-edit-controls`,
              className: ge,
              "aria-hidden": H,
              children: de,
            })),
            (t[54] = de),
            (t[55] = H),
            (t[56] = ge),
            (t[57] = _e))
          : (_e = t[57]);
        let ve = n?.composer,
          ye = V ? `shadow-[0_4px_16px_rgba(0,0,0,0.05)]` : `pointer-events-none shadow-none`,
          be;
        t[58] !== ve || t[59] !== ye
          ? ((be = u(
              `absolute top-1/2 z-1 flex h-9 min-w-0 shrink-0 -translate-y-1/2 items-center overflow-hidden rounded-full border [border-color:var(--oai-wb-divider)] [background-color:var(--oai-wb-surface-primary)] transition-[width,background-color,border-color,box-shadow,opacity] duration-200 ease-out`,
              ve,
              ye,
            )),
            (t[58] = ve),
            (t[59] = ye),
            (t[60] = be))
          : (be = t[60]);
        let xe;
        t[61] === r.isComposerOpen
          ? (xe = t[62])
          : ((xe = (e) => {
              e.currentTarget !== e.target ||
                e.propertyName !== `width` ||
                r.isComposerOpen ||
                (O(), E(`collapsed`));
            }),
            (t[61] = r.isComposerOpen),
            (t[62] = xe));
        let Se;
        t[63] !== h ||
        t[64] !== g ||
        t[65] !== te ||
        t[66] !== ne ||
        t[67] !== R ||
        t[68] !== _ ||
        t[69] !== U ||
        t[70] !== H ||
        t[71] !== P ||
        t[72] !== y ||
        t[73] !== i.composerPlaceholder ||
        t[74] !== i.submitButton ||
        t[75] !== d
          ? ((Se =
              H &&
              (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(`div`, { className: `h-9 w-8 shrink-0`, "aria-hidden": `true` }),
                  (0, Z.jsxs)(`form`, {
                    "data-testid": `writing-block-header-magic-edit-composer-form`,
                    className: u(
                      `relative flex min-w-0 grow items-center pe-2 transition-[opacity,transform] duration-150 ease-out`,
                      U ? `translate-x-0 opacity-100` : `pointer-events-none translate-x-0 opacity-0`,
                    ),
                    onSubmit: (e) => {
                      (e.preventDefault(), R());
                    },
                    "aria-hidden": !U,
                    children: [
                      (0, Z.jsx)(`input`, {
                        ref: x,
                        type: `text`,
                        value: _,
                        onChange: (e) => v(e.target.value),
                        onKeyDown: ne,
                        placeholder: i.composerPlaceholder,
                        disabled: !U,
                        readOnly: P || y,
                        tabIndex: U ? 0 : -1,
                        className: u(
                          `min-w-0 grow border-none bg-transparent px-0 py-0 text-sm font-medium [color:var(--oai-wb-text-primary)] outline-none placeholder:[color:var(--oai-wb-text-tertiary)] focus:border-transparent focus:ring-0 focus:outline-none`,
                          y ? `opacity-50` : `opacity-100`,
                        ),
                      }),
                      (0, Z.jsx)(`div`, {
                        "data-testid": `writing-block-header-magic-edit-submit-slot`,
                        className: `ms-2 flex size-5 shrink-0 items-center justify-center overflow-visible rounded-full`,
                        children: y
                          ? (0, Z.jsx)(g, { size: 20, onCancel: te })
                          : (0, Z.jsx)(`button`, {
                              type: `submit`,
                              "aria-label": i.submitButton,
                              disabled: !U || _.trim().length === 0 || P,
                              tabIndex: U ? 0 : -1,
                              className: u(d, `size-5 transition-colors hover:opacity-70`),
                              children: (0, Z.jsx)(h, { className: `size-4 shrink-0 grow-0` }),
                            }),
                      }),
                    ],
                  }),
                ],
              })),
            (t[63] = h),
            (t[64] = g),
            (t[65] = te),
            (t[66] = ne),
            (t[67] = R),
            (t[68] = _),
            (t[69] = U),
            (t[70] = H),
            (t[71] = P),
            (t[72] = y),
            (t[73] = i.composerPlaceholder),
            (t[74] = i.submitButton),
            (t[75] = d),
            (t[76] = Se))
          : (Se = t[76]);
        let Ce;
        t[77] !== re || t[78] !== T || t[79] !== be || t[80] !== xe || t[81] !== Se
          ? ((Ce = (0, Z.jsx)(`div`, {
              "data-testid": `writing-block-header-magic-edit-composer`,
              "data-state": T,
              className: be,
              style: re,
              onTransitionEnd: xe,
              children: Se,
            })),
            (t[77] = re),
            (t[78] = T),
            (t[79] = be),
            (t[80] = xe),
            (t[81] = Se),
            (t[82] = Ce))
          : (Ce = t[82]);
        let we;
        t[83] !== q || t[84] !== me || t[85] !== _e || t[86] !== Ce
          ? ((we = (0, Z.jsxs)(`div`, {
              "data-testid": `writing-block-header-magic-edit-entrypoint`,
              "data-header-magic-edit-entrypoint-version": `v1`,
              className: `z-2 relative flex min-w-0 items-center self-start shrink-0`,
              style: q,
              children: [me, _e, Ce],
            })),
            (t[83] = q),
            (t[84] = me),
            (t[85] = _e),
            (t[86] = Ce),
            (t[87] = we))
          : (we = t[87]);
        let Ee;
        t[88] !== W || t[89] !== f
          ? ((Ee =
              f &&
              (0, Z.jsx)(`div`, {
                "aria-hidden": W,
                className: u(`min-w-0 flex-1`, W && `hidden`),
                "data-testid": `writing-block-header-magic-edit-trailing-content`,
                children: f,
              })),
            (t[88] = W),
            (t[89] = f),
            (t[90] = Ee))
          : (Ee = t[90]);
        let De;
        return (
          t[91] !== we || t[92] !== Ee
            ? ((De = (0, Z.jsxs)(`div`, {
                className: `flex min-w-0 grow items-center gap-1 self-start px-2`,
                "data-testid": `writing-block-header-magic-edit-layout`,
                style: Te,
                children: [we, Ee],
              })),
              (t[91] = we),
              (t[92] = Ee),
              (t[93] = De))
            : (De = t[93]),
          De
        );
      }));
  }))();
}
function Dt(e) {
  "use forget";
  let t = (0, Ot.c)(50),
    {
      value: n,
      onChange: r,
      onSubmit: i,
      onCancel: a,
      isLoading: o,
      anchorPos: s,
      editorView: c,
      editorRootRef: l,
      labels: d,
      className: f,
      renderInput: p,
      renderPresentation: m,
    } = e,
    h = (0, kt.useRef)(null),
    g = (0, kt.useRef)(null),
    _;
  t[0] === l
    ? (_ = t[1])
    : ((_ = (e, t, n) => v(l.current ?? e, t, n, { ancestorResize: !0, ancestorScroll: !0 })),
      (t[0] = l),
      (t[1] = _));
  let y = _,
    b;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = [ke(8), je({ fallbackPlacements: [`top-start`] }), De({ padding: 8 })]), (t[2] = b))
    : (b = t[2]);
  let x;
  t[3] === y
    ? (x = t[4])
    : ((x = { placement: `bottom-start`, middleware: b, whileElementsMounted: y }), (t[3] = y), (t[4] = x));
  let { refs: S, floatingStyles: C, update: w, x: T, y: E } = Ne(x),
    D = T !== 0 && E !== 0,
    O,
    k;
  (t[5] === D
    ? ((O = t[6]), (k = t[7]))
    : ((O = () => {
        D && g.current?.focus();
      }),
      (k = [D]),
      (t[5] = D),
      (t[6] = O),
      (t[7] = k)),
    (0, kt.useEffect)(O, k));
  let A = S.setReference,
    j = S.setFloating,
    M,
    ee;
  (t[8] !== s || t[9] !== l || t[10] !== c || t[11] !== A || t[12] !== w
    ? ((M = () => {
        if (!c || s == null) {
          A(null);
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
          A(e),
          w(),
          () => {
            A(null);
          }
        );
      }),
      (ee = [s, l, c, A, w]),
      (t[8] = s),
      (t[9] = l),
      (t[10] = c),
      (t[11] = A),
      (t[12] = w),
      (t[13] = M),
      (t[14] = ee))
    : ((M = t[13]), (ee = t[14])),
    (0, kt.useEffect)(M, ee));
  let N, P;
  (t[15] === a
    ? ((N = t[16]), (P = t[17]))
    : ((N = () => {
        let e = (e) => {
            let t = h.current;
            t && ((e.target instanceof Node && t.contains(e.target)) || a());
          },
          t = (e) => {
            let t = h.current;
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
      (P = [a]),
      (t[15] = a),
      (t[16] = N),
      (t[17] = P)),
    (0, kt.useEffect)(N, P));
  let F;
  t[18] === j
    ? (F = t[19])
    : ((F = (e) => {
        ((h.current = e), j(e));
      }),
      (t[18] = j),
      (t[19] = F));
  let I;
  t[20] === f ? (I = t[21]) : ((I = u(`absolute`, f)), (t[20] = f), (t[21] = I));
  let L;
  t[22] === C ? (L = t[23]) : ((L = { ...C, width: `max-content`, minWidth: jt }), (t[22] = C), (t[23] = L));
  let R = d.placeholder,
    z = d.submit,
    te = d.cancel,
    B;
  t[24] === a
    ? (B = t[25])
    : ((B = (e) => {
        e.key === `Escape` && (e.preventDefault(), a());
      }),
      (t[24] = a),
      (t[25] = B));
  let ne;
  t[26] === n ? (ne = t[27]) : ((ne = n.trim()), (t[26] = n), (t[27] = ne));
  let V = ne === ``,
    H;
  t[28] !== o ||
  t[29] !== d.cancel ||
  t[30] !== d.placeholder ||
  t[31] !== d.submit ||
  t[32] !== a ||
  t[33] !== r ||
  t[34] !== i ||
  t[35] !== p ||
  t[36] !== B ||
  t[37] !== V ||
  t[38] !== n
    ? ((H = p({
        inputRef: g,
        value: n,
        onChange: r,
        placeholder: R,
        onSubmit: i,
        onCancel: a,
        isLoading: o,
        submitAriaLabel: z,
        cancelAriaLabel: te,
        disabled: o,
        selectAllOnFocus: !1,
        onKeyDownCapture: B,
        isSubmitDisabled: V,
        inputClassName: `w-full`,
      })),
      (t[28] = o),
      (t[29] = d.cancel),
      (t[30] = d.placeholder),
      (t[31] = d.submit),
      (t[32] = a),
      (t[33] = r),
      (t[34] = i),
      (t[35] = p),
      (t[36] = B),
      (t[37] = V),
      (t[38] = n),
      (t[39] = H))
    : (H = t[39]);
  let U;
  t[40] === H
    ? (U = t[41])
    : ((U = (0, At.jsx)(`div`, { className: `flex min-w-0 flex-1`, children: H })), (t[40] = H), (t[41] = U));
  let W;
  t[42] !== m || t[43] !== U ? ((W = m(U)), (t[42] = m), (t[43] = U), (t[44] = W)) : (W = t[44]);
  let G;
  return (
    t[45] !== F || t[46] !== I || t[47] !== L || t[48] !== W
      ? ((G = (0, At.jsx)(`div`, { ref: F, className: I, style: L, children: W })),
        (t[45] = F),
        (t[46] = I),
        (t[47] = L),
        (t[48] = W),
        (t[49] = G))
      : (G = t[49]),
    G
  );
}
var Ot, kt, At, jt;
function Mt() {
  return (Mt = e(() => {
    ((Ot = m()), Ae(), d(), (kt = s()), (At = l()), (jt = `calc(300px + 1rem)`));
  }))();
}
function Nt(e) {
  if (e.isComposing || e.keyCode === 229 || e.key !== `Enter`) return !1;
  let t = typeof navigator < `u` && /Mac|iPhone|iPad|iPod/.test(navigator.platform),
    n = t ? e.metaKey : e.ctrlKey,
    r = t ? e.ctrlKey || e.altKey || e.shiftKey : e.metaKey || e.altKey || e.shiftKey;
  return n && !r;
}
function Pt(e) {
  "use forget";
  let t = (0, It.c)(60),
    {
      editorRootRef: n,
      activeEntryId: r,
      onAccept: i,
      onReject: a,
      focusEditor: o,
      fullscreenMode: s,
      suggestionsOnly: c,
      labels: l,
      classNames: d,
      toolbarComponents: f,
      isAcceptShortcut: p,
      placement: m,
    } = e,
    h = p === void 0 ? Nt : p,
    g = m === void 0 ? `selection` : m,
    _ = (0, Lt.useRef)(null),
    v = (0, Lt.useRef)(null),
    y = lt(n, c),
    b = y[0],
    x = y[y.length - 1],
    S = y.filter(Ft).length > 1,
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
    (0, Lt.useEffect)(w, T));
  let E, D;
  (t[6] !== r || t[7] !== n || t[8] !== h || t[9] !== i
    ? ((E = () => {
        if (!r) return;
        let e = n.current?.ownerDocument ?? document,
          t = (e) => {
            h(e) && (e.preventDefault(), i());
          };
        return (e.addEventListener(`keydown`, t, !0), () => e.removeEventListener(`keydown`, t, !0));
      }),
      (D = [r, n, h, i]),
      (t[6] = r),
      (t[7] = n),
      (t[8] = h),
      (t[9] = i),
      (t[10] = E),
      (t[11] = D))
    : ((E = t[10]), (D = t[11])),
    (0, Lt.useEffect)(E, D));
  let O = S ? l.acceptAll : l.accept,
    k = f?.Root ?? `div`,
    A = f?.Button ?? `button`,
    j = d?.toolbar,
    M;
  t[12] === j
    ? (M = t[13])
    : ((M = u(
        `m-0 flex h-9 w-fit min-w-0 shrink items-center overflow-hidden rounded-xl px-1 py-1 [background-color:var(--oai-wb-surface-primary)] shadow-[0_8px_12px_0_rgba(0,0,0,0.16),0_0_1px_0_rgba(0,0,0,0.60)] dark:bg-[#353535] dark:shadow-[0_8px_16px_0_rgba(0,0,0,0.40),inset_0_0_1px_0_rgba(255,255,255,0.25),0_0_1px_0_rgba(0,0,0,0.60)]`,
        j,
      )),
      (t[12] = j),
      (t[13] = M));
  let ee = d?.rejectButton,
    N;
  t[14] === ee
    ? (N = t[15])
    : ((N = u(
        `flex h-full items-center gap-2 rounded-lg px-2 hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent dark:hover:bg-black/20`,
        ee,
      )),
      (t[14] = ee),
      (t[15] = N));
  let P = d?.rejectLabel,
    F;
  t[16] === P
    ? (F = t[17])
    : ((F = u(`truncate text-sm font-semibold [color:var(--oai-wb-text-primary)]`, P)),
      (t[16] = P),
      (t[17] = F));
  let I;
  t[18] !== l.reject || t[19] !== F
    ? ((I = (0, Q.jsx)(`span`, { className: F, children: l.reject })),
      (t[18] = l.reject),
      (t[19] = F),
      (t[20] = I))
    : (I = t[20]);
  let L;
  t[21] !== A || t[22] !== a || t[23] !== N || t[24] !== I
    ? ((L = (0, Q.jsx)(A, { type: `button`, onClick: a, className: N, children: I })),
      (t[21] = A),
      (t[22] = a),
      (t[23] = N),
      (t[24] = I),
      (t[25] = L))
    : (L = t[25]);
  let R = d?.acceptButton,
    z;
  t[26] === R
    ? (z = t[27])
    : ((z = u(
        `ms-1 flex h-full items-center gap-1 rounded-lg px-2 [background-color:var(--oai-wb-accent)]`,
        R,
      )),
      (t[26] = R),
      (t[27] = z));
  let te;
  t[28] === O
    ? (te = t[29])
    : ((te = (0, Q.jsx)(`span`, { className: `truncate text-sm font-semibold text-white`, children: O })),
      (t[28] = O),
      (t[29] = te));
  let B;
  t[30] !== A || t[31] !== O || t[32] !== i || t[33] !== z || t[34] !== te
    ? ((B = (0, Q.jsx)(A, { type: `button`, onClick: i, "aria-label": O, className: z, children: te })),
      (t[30] = A),
      (t[31] = O),
      (t[32] = i),
      (t[33] = z),
      (t[34] = te),
      (t[35] = B))
    : (B = t[35]);
  let ne;
  t[36] !== k || t[37] !== L || t[38] !== B || t[39] !== M
    ? ((ne = (0, Q.jsxs)(k, {
        role: `toolbar`,
        "data-orientation": `horizontal`,
        className: M,
        children: [L, B],
      })),
      (t[36] = k),
      (t[37] = L),
      (t[38] = B),
      (t[39] = M),
      (t[40] = ne))
    : (ne = t[40]);
  let V = ne;
  if (!C) return null;
  if (g === `header`) {
    let e;
    t[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = { ...Te, left: Rt, top: Rt }), (t[41] = e))
      : (e = t[41]);
    let n;
    return (
      t[42] === V
        ? (n = t[43])
        : ((n = (0, Q.jsx)(`div`, {
            ref: _,
            className: `absolute z-3`,
            "data-testid": `writing-block-header-magic-edit-actions`,
            style: e,
            children: V,
          })),
          (t[42] = V),
          (t[43] = n)),
      n
    );
  }
  let H;
  t[44] === V
    ? (H = t[45])
    : ((H = (0, Q.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `pointer-events-none invisible fixed start-0 top-0 h-0 overflow-clip`,
        children: (0, Q.jsx)(`div`, { ref: v, children: V }),
      })),
      (t[44] = V),
      (t[45] = H));
  let U = b.top - 41,
    W = x.bottom - b.top + 41 + 48,
    G;
  t[46] !== U || t[47] !== W
    ? ((G = { ...Te, top: U, height: W }), (t[46] = U), (t[47] = W), (t[48] = G))
    : (G = t[48]);
  let re = s ? `top-2` : `@w-xl/main:top-2 top-[calc(var(--header-height,48px)+8px)]`,
    K;
  t[49] === re ? (K = t[50]) : ((K = u(`pointer-events-auto sticky`, re)), (t[49] = re), (t[50] = K));
  let q;
  t[51] !== K || t[52] !== V
    ? ((q = (0, Q.jsx)(`div`, { className: K, children: V })), (t[51] = K), (t[52] = V), (t[53] = q))
    : (q = t[53]);
  let ie;
  t[54] !== G || t[55] !== q
    ? ((ie = (0, Q.jsx)(`div`, {
        ref: _,
        style: G,
        className: `pointer-events-none absolute start-1/2 z-1 -translate-x-1/2`,
        children: q,
      })),
      (t[54] = G),
      (t[55] = q),
      (t[56] = ie))
    : (ie = t[56]);
  let ae;
  return (
    t[57] !== H || t[58] !== ie
      ? ((ae = (0, Q.jsxs)(Q.Fragment, { children: [H, ie] })), (t[57] = H), (t[58] = ie), (t[59] = ae))
      : (ae = t[59]),
    ae
  );
}
function Ft(e) {
  return e.role === `sugg`;
}
var It, Lt, Q, Rt;
function zt() {
  return (zt = e(() => {
    ((It = m()), d(), (Lt = s()), ht(), Ee(), (Q = l()), (Rt = 14));
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
    i = (e) => t.state.schema.nodeFromJSON(Me(t.state.doc)).eq(e),
    a = r.snapshot();
  if (a.document == null || !i(t.state.schema.nodeFromJSON(a.document.ast))) return null;
  let { anchor: o, error: s } = r.createAnchor({
    baseRevision: a.revision,
    point: { position: n.caretPos, affinity: Le.FORWARD },
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
    (Ie(), Oe());
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
  return t == null || t.length === 0 ? null : D.fromArray(t.map((t) => e.nodeFromJSON(t)));
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
    r = rn(e.attrs?.[Ce]);
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
      let a = e.attrs?.[R];
      if (!a) return !1;
      let o = r(e.attrs?.[G]),
        s = n.get(a);
      s || ((s = new Map()), n.set(a, s));
      let c = s.get(o);
      c || ((c = {}), s.set(o, c));
      let l = { pos: i, nodeSize: e.nodeSize },
        u = {
          position: l,
          highlight: sn(on(e, i), l),
          selectionStartOffset: an(e.attrs?.[pe]),
          selectionEndOffset: an(e.attrs?.[Y]),
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
  let r = e.topNodeType.createAndFill({}, D.from(n));
  return r ? t.serialize(r) : ``;
}
function un(e, t, n) {
  if (!n || n.size === 0) return ``;
  let r = e.topNodeType.createAndFill({}, n);
  return r ? t.serialize(r) : ``;
}
function dn(e, t, n, r) {
  try {
    return le(e, t, `⟦MAGICSEG⟧`, n, r);
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
  let i = [0];
  for (let e of t) {
    let t = i[i.length - 1];
    i.push(t + e.textLength);
  }
  return e.map((e, a) => {
    let o = t.slice(e.origStart, e.origEnd),
      s = n.slice(e.suggStart, e.suggEnd),
      c,
      l;
    if (o.length > 0) ((c = o[0].from), (l = o[o.length - 1].to));
    else {
      let n = e.origStart < t.length ? t[e.origStart].from : t.length > 0 ? t[t.length - 1].to : r;
      ((c = n), (l = n));
    }
    let u = o.length > 0 ? D.fromArray(o.map((e) => e.node)) : null,
      d = s.length > 0 ? D.fromArray(s.map((e) => e.node)) : null,
      f = s.map((e) => ({ from: e.from, to: e.to }));
    return {
      from: c,
      to: l,
      originalFragment: u,
      suggestedFragment: d,
      suggestedNodeRanges: f,
      index: a,
      originalHighlight: null,
      suggestedHighlight: null,
      selectionStartOffset: i[e.origStart] ?? 0,
      selectionEndOffset: i[e.origEnd] ?? 0,
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
    t && o.push(T.inline(t.from, t.to, { class: a })),
    r?.blockRanges.forEach((e) => {
      o.push(T.node(e.from, e.to, { "data-me-role": `sugg`, "data-magic-edit-committed-preview": `true` }));
    }),
    r?.highlightRanges.forEach((e) => {
      o.push(T.inline(e.from, e.to, { nodeName: `span`, "data-me-change": `delta` }));
    }),
    i?.blockRanges.forEach((e) => {
      o.push(
        T.node(e.from, e.to, {
          "data-me-role": `sugg`,
          "data-me-id": i.magicEditId,
          "data-magic-edit-optimistic-preview": `true`,
        }),
      );
    }),
    i?.highlightRanges.forEach((e) => {
      o.push(T.inline(e.from, e.to, { nodeName: `span`, "data-me-change": `delta` }));
    }),
    i?.deletionAnchors.forEach((e) => {
      o.push(
        T.widget(
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
            T.inline(e.originalHighlight.from, e.originalHighlight.to, {
              nodeName: `span`,
              "data-me-change": `delta`,
            }),
          ),
          e.suggestedHighlight &&
            o.push(
              T.inline(e.suggestedHighlight.from, e.suggestedHighlight.to, {
                nodeName: `span`,
                "data-me-change": `delta`,
              }),
            ));
      });
    }),
    o.length === 0 ? I.empty : I.create(e, o)
  );
}
function yn(e) {
  return new o({
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
        return e.pluginKey.getState(t)?.decorations ?? I.empty;
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
function wn({ state: e, pmu: t, replacementDoc: n, selection: r }) {
  let i = Ut(r.from, 0, e.doc.content.size),
    a = Ut(r.to, i, e.doc.content.size),
    o = e.doc.slice(0, e.doc.content.size),
    s = new w(n.content, 0, 0),
    c = pn(o, 0, t, e.schema),
    l = mn(s, 0, t, e.schema),
    u = gn(hn(c, l), c, l, 0);
  if (u.length === 0) return null;
  let d = [],
    f = [];
  return {
    selectionStart: i,
    blockSegments: u.map((n) => {
      let { originalHighlight: r, suggestedHighlight: o } = _n({
          segmentStart: n.from,
          originalSize: n.originalFragment?.size ?? 0,
          suggestedSize: n.suggestedFragment?.size ?? 0,
          selectionStart: i,
          selectionEnd: a,
        }),
        s = un(e.schema, t, n.originalFragment ?? D.empty),
        c = un(e.schema, t, n.suggestedFragment ?? D.empty);
      return (
        d.push({
          segmentIndex: n.index,
          startIndex: dn(e.doc, t, n.from, 1),
          endIndex: dn(e.doc, t, n.to, -1),
          originalMarkdown: s,
          suggestedMarkdown: c,
        }),
        f.push({
          index: n.index,
          fromOffset: n.from,
          toOffset: n.to,
          originalNodeJsons: Wt(n.originalFragment),
          suggestedNodeJsons: Wt(n.suggestedFragment),
          originalSelectionFrom: r?.from ?? null,
          suggestedSelectionFrom: o?.from ?? null,
        }),
        { ...n, originalHighlight: r, suggestedHighlight: o }
      );
    }),
    segmentDiffs: d,
    sessionSegments: f,
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
function En(e, { view: t, pmu: n, magicEditId: r, replacementDoc: i, selection: a }) {
  let { state: o } = t,
    s = nn(o.schema);
  if (!s) return !1;
  let c = wn({ state: o, pmu: n, replacementDoc: i, selection: a });
  if (!c) return !1;
  let l = o.tr,
    u = null,
    d = null;
  if (
    (c.blockSegments.forEach((e) => {
      let t = e.originalFragment?.size,
        n = e.suggestedFragment?.size,
        i = l.mapping.map(e.from, -1),
        a = t ? l.mapping.map(e.to, 1) : i,
        o = d != null && !t ? Math.max(i, d) : i,
        c = t ? a : o,
        f = e.suggestedFragment?.size ?? 0,
        p = [];
      if (t) {
        let t = s.originalType.create(
          {
            [R]: r,
            [G]: e.index,
            [J]: e.originalHighlight ? Math.floor(e.originalHighlight.from) : null,
            [Ce]: e.originalHighlight ? Math.floor(e.originalHighlight.to) : null,
            [pe]: e.selectionStartOffset,
            [Y]: e.selectionEndOffset,
          },
          e.originalFragment,
        );
        p.push(t);
      }
      if (n) {
        let t = s.suggestedType.create(
          {
            [R]: r,
            [G]: e.index,
            [J]: e.suggestedHighlight ? Math.floor(e.suggestedHighlight.from) : null,
            [Ce]: e.suggestedHighlight ? Math.floor(e.suggestedHighlight.to) : null,
            [pe]: e.selectionStartOffset,
            [Y]: e.selectionEndOffset,
          },
          e.suggestedFragment,
        );
        p.push(t);
      }
      if (p.length === 0) return;
      let m = new w(D.fromArray(p), 0, 0);
      if (
        ((l = l.replaceRange(o, c, m)),
        (d = o + p.reduce((e, t) => e + t.nodeSize, 0)),
        u == null && n && f > 0)
      ) {
        let e = o + (t ? p[0].nodeSize : 0);
        u = Math.min(l.doc.content.size, e + 1);
      }
    }),
    l.setMeta(`addToHistory`, !1),
    l.setMeta(ce, !0),
    l.setMeta(e.pluginKey, { setPinnedRange: null }),
    u != null)
  ) {
    let e = j.findFrom(l.doc.resolve(u), 1, !0) ?? j.near(l.doc.resolve(u), 1);
    l.setSelection(e);
  } else {
    let e = Ut(c.selectionStart, 0, l.doc.content.size),
      t = j.findFrom(l.doc.resolve(e), -1, !0) ?? j.near(l.doc.resolve(e), -1);
    l.setSelection(t);
  }
  return (
    l.scrollIntoView(),
    t.dispatch(l),
    e.sessionStore.update(r, {
      segmentDiffs: c.segmentDiffs,
      acceptedSegmentIndices: [],
      originalDocumentContent: o.doc.content,
      sessionSegments: c.sessionSegments,
      previewModel: bn(
        r,
        c.blockSegments.map((e) => e.index),
      ),
      lifecycle: `preview_staged`,
      status: `ready`,
    }),
    !0
  );
}
function Dn(e, { view: t, pmu: n, magicEditId: r, replacementDoc: i, selection: a }) {
  let { state: o } = t,
    s = wn({ state: o, pmu: n, replacementDoc: i, selection: a });
  if (!s) return !1;
  let c = o.tr.replaceRange(0, o.doc.content.size, new w(i.content, 0, 0));
  ((c = y(c)),
    c.setMeta(Vn, !0),
    c.setMeta(Hn, `magic_edit`),
    c.setMeta(e.pluginKey, {
      setPinnedRange: null,
      setCommittedPreview: Tn(s.blockSegments, i.content.size),
    }));
  let l = s.blockSegments.find((e) => e.suggestedNodeRanges.length > 0)?.suggestedNodeRanges[0],
    u = Ut(l ? l.from + 1 : s.selectionStart, 0, c.doc.content.size),
    d = j.findFrom(c.doc.resolve(u), 1, !0) ?? j.near(c.doc.resolve(u), 1);
  return (
    c.setSelection(d),
    c.scrollIntoView(),
    t.dispatch(c),
    e.sessionStore.update(r, {
      segmentDiffs: s.segmentDiffs,
      acceptedSegmentIndices: s.blockSegments.map((e) => e.index),
      originalDocumentContent: null,
      sessionSegments: s.sessionSegments,
      previewModel: null,
      lifecycle: `resolved`,
      status: `ready`,
    }),
    !0
  );
}
function On(e, { view: t, pmu: n, magicEditId: r, replacementDoc: i, selection: a, highlightRanges: o }) {
  let { state: s } = t,
    c = wn({ state: s, pmu: n, replacementDoc: i, selection: a });
  if (!c) return !1;
  let l = s.tr;
  try {
    for (let e of c.blockSegments) {
      let t = l.mapping.map(e.from, 1),
        n = e.from === e.to ? t : l.mapping.map(e.to, -1);
      l.replace(t, n, new w(e.suggestedFragment ?? D.empty, 0, 0));
    }
  } catch {
    return !1;
  }
  if (n.serialize(l.doc) !== n.serialize(i)) return !1;
  let u = s.schema.marks.startend;
  u != null && l.removeMark(0, l.doc.content.size, u);
  let d = Tn(c.blockSegments, l.doc.content.size),
    f = [];
  for (let e of d.blockRanges) {
    let t = l.doc.nodeAt(e.from);
    if (!t || t.nodeSize !== e.to - e.from) return !1;
    f.push({ ...e, node: t });
  }
  let p = c.blockSegments.map((e) => {
      let t = e.suggestedNodeRanges[0],
        n = e.suggestedNodeRanges.at(-1),
        r = t?.from ?? l.mapping.map(e.from, 1),
        i = n?.to ?? r;
      return {
        from: r,
        to: i,
        originalFragment: e.originalFragment ?? D.empty,
        suggestedFragment: l.doc.slice(r, i).content,
      };
    }),
    m = {
      magicEditId: r,
      blockRanges: f,
      highlightRanges: o ?? d.highlightRanges,
      originalSegments: p,
      deletionAnchors: p.filter((e) => e.suggestedFragment.size === 0).map((e) => e.from),
    };
  ((l = y(l)),
    l.setMeta(Vn, !0),
    l.setMeta(Hn, `magic_edit`),
    l.setMeta(e.pluginKey, { setPinnedRange: null, setOptimisticPreview: m }));
  let h = f[0],
    g = Ut(h ? h.from + 1 : l.mapping.map(c.selectionStart, 1), 0, l.doc.content.size);
  return (
    l.setSelection(j.findFrom(l.doc.resolve(g), 1, !0) ?? j.near(l.doc.resolve(g), 1)),
    l.scrollIntoView(),
    t.dispatch(l),
    !t.state.doc.eq(l.doc) || e.pluginKey.getState(t.state)?.optimisticPreview?.magicEditId !== r
      ? !1
      : (e.sessionStore.update(r, {
          segmentDiffs: c.segmentDiffs,
          acceptedSegmentIndices: [],
          originalDocumentContent: null,
          sessionSegments: c.sessionSegments,
          previewModel: bn(
            r,
            c.blockSegments.map((e) => e.index),
          ),
          lifecycle: `optimistic_preview`,
          status: `ready`,
        }),
        !0)
  );
}
function kn(e, t, n, r) {
  let i = e.pluginKey.getState(t.state)?.optimisticPreview;
  if (i?.magicEditId !== n) return !1;
  let a = t.state.tr;
  if (r === `keep`) {
    try {
      for (let e of [...i.originalSegments].reverse()) {
        if (!a.doc.slice(e.from, e.to).content.eq(e.suggestedFragment)) return !1;
        a.replace(e.from, e.to, new w(e.originalFragment, 0, 0));
      }
    } catch {
      return !1;
    }
    ((a = y(a)), a.setMeta(Vn, !0), a.setMeta(Hn, `magic_edit`), a.scrollIntoView());
  } else (a.setMeta(`addToHistory`, !1), a.setMeta(ce, !0));
  return (
    a.setMeta(e.pluginKey, { setOptimisticPreview: null }),
    t.dispatch(a),
    e.pluginKey.getState(t.state)?.optimisticPreview?.magicEditId !== n &&
      (e.sessionStore.update(n, {
        acceptedSegmentIndices: r === `use` ? i.originalSegments.map((e, t) => t) : [],
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
    n.setMeta(ce, !0),
    n.setMeta(e.pluginKey, { setCommittedPreview: null }),
    t.dispatch(n),
    !0
  );
}
function jn(e, t, n, r) {
  let i = [...n].sort((e, t) => e.fromOffset - t.fromOffset),
    a = [],
    o = 0;
  for (let n of i) {
    n.fromOffset > o &&
      t.cut(o, n.fromOffset).forEach((e) => {
        a.push(e);
      });
    let i = r.has(n.index) ? Gt(e, n.suggestedNodeJsons) : Gt(e, n.originalNodeJsons);
    (i != null &&
      i.size > 0 &&
      i.forEach((e) => {
        a.push(e);
      }),
      (o = n.toOffset));
  }
  return (
    o < t.size &&
      t.cut(o, t.size).forEach((e) => {
        a.push(e);
      }),
    D.fromArray(a)
  );
}
function Mn({ context: e, state: t, magicEditId: n }) {
  let { originalDocumentContent: r, sessionSegments: i } = e.sessionStore.read(n);
  if (!r) return null;
  let a = t.tr.replaceRange(0, t.doc.content.size, new w(r, 0, 0));
  (a.setMeta(`addToHistory`, !1), a.setMeta(ce, !0), a.setMeta(e.pluginKey, { setPinnedRange: null }));
  let o = i.length > 0 ? [...i].sort((e, t) => e.fromOffset - t.fromOffset)[0] : null,
    s = Ut((o?.fromOffset ?? 0) + (o?.originalSelectionFrom ?? 0), 0, a.doc.content.size),
    c = j.findFrom(a.doc.resolve(s), -1, !0) ?? j.near(a.doc.resolve(s), -1);
  return (a.setSelection(c), a.scrollIntoView(), a);
}
function Nn({ context: e, state: t, magicEditId: n, acceptedSegmentIndices: r }) {
  let { originalDocumentContent: i, sessionSegments: a } = e.sessionStore.read(n);
  if (!i || a.length === 0) return null;
  let o = new Set(r),
    s = jn(t.schema, i, a, o),
    c = t.tr.replaceRange(0, t.doc.content.size, new w(s, 0, 0));
  ((c = y(c)),
    c.setMeta(Vn, !0),
    c.setMeta(Hn, `magic_edit`),
    c.setMeta(e.pluginKey, { setPinnedRange: null, removeEntryId: n }));
  let l = a.find((e) => o.has(e.index)),
    u = Ut((l?.fromOffset ?? 0) + (l?.suggestedSelectionFrom ?? 0), 0, c.doc.content.size),
    d = j.findFrom(c.doc.resolve(u), -1, !0) ?? j.near(c.doc.resolve(u), -1);
  return (c.setSelection(d), c.scrollIntoView(), c);
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
function Ln(e, t, n, r, i) {
  let a = e.pluginKey.getState(t.state),
    o = e.sessionStore.read(n);
  if (!a) return !1;
  let s = a.entries.get(n);
  if (!s) return !1;
  let c = s.segments.find((e) => e.index === r);
  if (!c) return !1;
  let l =
      i === `use`
        ? Array.from(new Set([...o.acceptedSegmentIndices, r])).sort((e, t) => e - t)
        : o.acceptedSegmentIndices,
    u = s.segments.filter((e) => e.index !== r).map((e) => e.index);
  if (u.length === 0) return (Fn(e, t, n, l), !0);
  let d = t.state.doc,
    f = c.original ? d.nodeAt(c.original.pos) : null,
    p = c.suggested ? d.nodeAt(c.suggested.pos) : null;
  if (!f && !p) return !1;
  let m = Math.min(c.original?.pos ?? c.suggested?.pos ?? 0, c.suggested?.pos ?? c.original?.pos ?? 0),
    h = Math.max(
      c.original?.pos == null ? m : c.original.pos + (f?.nodeSize ?? 0),
      c.suggested?.pos == null ? m : c.suggested.pos + (p?.nodeSize ?? 0),
    ),
    g = t.state.tr,
    _ = g.mapping.map(m, -1),
    v = g.mapping.map(h, 1),
    y = (i === `keep` ? f : p)?.content ?? D.empty;
  g = g.replaceRange(_, v, new w(y, 0, 0));
  let b = { setPinnedRange: null };
  (s.segments.length === 1 && (b.removeEntryId = n),
    g.setMeta(e.pluginKey, b),
    g.setMeta(`addToHistory`, !1),
    g.setMeta(ce, !0),
    i === `use` && e.sessionStore.update(n, { acceptedSegmentIndices: l }));
  let x = Math.min(g.doc.content.size, _),
    S = j.findFrom(g.doc.resolve(x), -1, !0) ?? j.near(g.doc.resolve(x), -1);
  return (
    g.setSelection(S),
    g.scrollIntoView(),
    t.dispatch(g),
    e.sessionStore.update(n, { previewModel: bn(n, u) }),
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
  let n = new p(`writingBlockMagicEdit`),
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
    (n(),
      me(),
      H(),
      U(),
      M(),
      f(),
      a(),
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
  isEditable: a,
  messageId: o,
  multiplayerSession: s,
  onTaskCheckboxToggled: c,
  onWriteLikeMeResult: l,
  serverConversationId: u,
  showMagicEditAction: d,
  variant: f,
  writingBlockId: p,
  writingBlockIndex: m,
}) {
  "use no forget";
  let g = ee(),
    _ = r(h),
    v = (0, Zn.useRef)(null),
    y = (0, Zn.useRef)(null),
    b = (0, Zn.useRef)(0),
    S = (0, Zn.useRef)(null),
    [C, w] = (0, Zn.useState)(``),
    [T, E] = (0, Zn.useState)(!1),
    [D, k] = (0, Zn.useState)(!1),
    [A, M] = (0, Zn.useState)(null),
    [N] = (0, Zn.useState)(Ht),
    [P] = (0, Zn.useState)(() => Bn({ sessionStore: N })),
    I = a && n,
    R = re({ isMultiplayerImageSupportEnabled: s != null, isMultiplayerImageIdentityEnabled: s != null }),
    z = O((e, t, n) => l?.(e, t, n) ?? !1),
    B = O(() => {
      _.get(F).danger(
        g.formatMessage({
          id: `chatgptConversations.writingBlock.aiRequestError`,
          defaultMessage: `ChatGPT couldn't update this writing block`,
          description: `Error toast shown when an AI generate or edit request fails for a ChatGPT writing block in Codex Apps.`,
        }),
        { errorAnalytics: { toastId: `chatgptConversations.writingBlock.aiRequestError` } },
      );
    }),
    H = O((e, t) =>
      ge.safePost(`/conversation/message/writing-blocks/magic-edit`, { requestBody: e, signal: t.signal }),
    ),
    U = O(() => {
      w(``);
    }),
    W = O((e) =>
      Fe({
        ...e,
        enableGenerate: n,
        getTransactionFollowup: P.buildMagicEditResolveFollowupTransaction,
        leadingPlugins: [...(e.leadingPlugins ?? []), P.createWritingBlockMagicEditPlugin()],
        onGeneratePromptReset: U,
        onTaskCheckboxToggled: c,
      }),
    ),
    G = O((e, t) => (s == null ? null : Bt(s, e, t))),
    {
      cancelGenerate: K,
      isLoading: q,
      submitGenerate: ie,
    } = at({
      captureInput: s == null ? void 0 : G,
      conversationId: u,
      executeRequest: H,
      onError: B,
      onSessionStarted: M,
      optimisticPreviewEngine: s == null ? void 0 : P,
      pmu: R,
      view: I ? e : null,
    }),
    ae = et({
      conversationId: u,
      executeRequest: H,
      messageId: o,
      onError: ({ error: e, kind: t, magicEditId: n }) => {
        (M(null),
          B(),
          t === `request-failed` &&
            u != null &&
            xe(_, se, {
              conversationId: u,
              errorName: e instanceof Error ? e.name : `UnknownError`,
              magicEditId: n,
              messageId: o,
              writingBlockId: p,
              writingBlockIndex: m == null ? void 0 : String(m),
            }));
      },
      onSessionStarted: M,
      onSubmitted: ({ magicEditId: e, submissionSource: t }) => {
        u != null &&
          xe(_, L, {
            conversationId: u,
            magicEditId: e,
            messageId: o,
            submissionSource: t,
            writingBlockId: p,
            writingBlockIndex: m == null ? void 0 : String(m),
          });
      },
      pmu: R,
      previewEngine: P,
      sessionStore: N,
      view: I ? e : null,
    }),
    { isLoading: ce, submitMagicEdit: le } = ae,
    J = O(() => {
      (ae.cancelMagicEdit(), b.current++, S.current?.abort(), (S.current = null), k(!1), M(null));
    }),
    ue = O(() => {
      (q && K(), (ce || D) && J());
    }),
    de = (t) => {
      if (!ae.applyMagicEditResult(t)) return (M((e) => (e === t.magicEditId ? null : e)), !1);
      if (e == null || e.isDestroyed) return !1;
      let n = P.getMagicEditPluginState(e)?.entries.get(t.magicEditId);
      return (
        n != null &&
          n.segments.length > 0 &&
          n.segments.every((e) => e.suggested == null) &&
          (P.applyMagicEditEntry(e, t.magicEditId, `use`), M(null)),
        !0
      );
    };
  (0, Zn.useEffect)(
    () => () => {
      (K(), J());
    },
    [K, J, e, o, u, p],
  );
  let pe = i?.input ?? null,
    Y = i?.suggestion?.id ?? null,
    me =
      A == null || (s != null && P.getMagicEditPluginState(e)?.optimisticPreview?.magicEditId !== A)
        ? null
        : N.read(A).previewModel,
    ve = D || (s == null && A != null && N.read(A).lifecycle !== `resolved`),
    ye = q || ce || pe != null || Y != null || me != null || ve,
    Se = T || ye,
    Ce = () => {
      e != null && !e.isDestroyed && e.focus();
    },
    we = (t, n) => {
      if (t) {
        if (!I || ye || e == null || e.isDestroyed) return;
        let t = qn(e.state);
        if (t == null || (e.dispatch(e.state.tr.setSelection(t)), !P.pinMagicEditSelection(e))) return;
        ((y.current = e),
          e.dom.focus({ preventScroll: !0 }),
          u != null && xe(_, fe, { conversationId: u, messageId: o, variant: f, writingBlockId: p }),
          E(!0));
        return;
      }
      E(!1);
      let r = y.current;
      if (((y.current = null), r != null && !r.isDestroyed)) {
        P.unpinMagicEditSelection(r);
        let { state: e } = r;
        (r.dispatch(e.tr.setSelection(j.near(e.doc.resolve(e.selection.head)))),
          r.dom.ownerDocument.getSelection()?.removeAllRanges());
      }
      n?.cancelRequest !== !1 && J();
    },
    Te = async (t) => {
      if (!I || ye || e == null || e.isDestroyed) return !1;
      let n = { from: 0, to: e.state.doc.content.size },
        r = await le({ instruction: t, mode: `full-edit`, range: n, submissionSource: qe.HEADER_COMPOSER });
      return r != null && de({ magicEditId: r.magicEditId, range: n, replacement: r.replacements[0] ?? `` });
    },
    Ee = async () => {
      (await ie(C)) && w(``);
    },
    De = async (t, n) => {
      if (!I || ye || e == null || e.isDestroyed) return !1;
      let r = P.getPinnedRange(e) ?? n,
        i = await le({ instruction: t, range: r, submissionSource: qe.TOOLBAR });
      return i != null && de({ magicEditId: i.magicEditId, range: r, replacement: i.replacements[0] ?? `` });
    },
    Oe = async (t, n) => {
      if (
        !I ||
        ye ||
        e == null ||
        e.isDestroyed ||
        S.current != null ||
        (n != null && (u == null || o == null)) ||
        l == null
      )
        return !1;
      let r = ++b.current,
        i = new AbortController(),
        a = crypto.randomUUID();
      S.current = i;
      let s = e.state.doc;
      return (
        k(!0),
        Promise.resolve()
          .then(async () => {
            if (r !== b.current || i.signal.aborted) return !1;
            if (u == null || o == null) {
              let e = { from: 0, to: s.content.size },
                n = await le({
                  instruction: `Rewrite this using my writing style.`,
                  mode: `full-edit`,
                  personalizationEnabled: !0,
                  range: e,
                  submissionSource: qe.HEADER_COMPOSER,
                });
              if (r !== b.current) return !1;
              let i = n?.replacements[0];
              return n == null ||
                i == null ||
                !ae.validateMagicEditResult({ magicEditId: n.magicEditId, range: e, replacement: i })
                ? !1
                : (J(), z(t, i));
            }
            let c = R.serialize(s);
            xe(_, L, {
              conversationId: u,
              magicEditId: a,
              messageId: o,
              submissionSource: qe.HEADER_COMPOSER,
              writingBlockId: p,
              writingBlockIndex: m == null ? void 0 : String(m),
            });
            let l = await ge.safePost(`/conversation/message/writing-blocks/magic-edit`, {
              requestBody: {
                conversation_id: u,
                message_id: o,
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
            if (r !== b.current || e.isDestroyed || !e.state.doc.eq(s)) return !1;
            let d = l.choices[0];
            return d?.trim()
              ? z(
                  t,
                  d,
                  n?.primaryOption == null ? n : { ...n, primaryOption: { ...n.primaryOption, content: c } },
                )
              : (B(), !1);
          })
          .catch(
            (e) => (
              i.signal.aborted ||
                (B(),
                xe(_, se, {
                  conversationId: u,
                  errorName: e instanceof Error ? e.name : `UnknownError`,
                  magicEditId: a,
                  messageId: o,
                  writingBlockId: p,
                  writingBlockIndex: m == null ? void 0 : String(m),
                })),
              !1
            ),
          )
          .finally(() => {
            r === b.current && ((S.current = null), k(!1));
          })
      );
    },
    ke = () => {
      if ((K(), w(``), e == null || e.isDestroyed)) return;
      let t = oe.getState(e.state)?.input?.triggerPos;
      if ((te(e), t != null)) {
        let { state: n } = e,
          r = n.doc.resolve(Math.max(0, Math.min(t, n.doc.content.size)));
        e.dispatch(n.tr.setSelection(j.findFrom(r, 1, !0) ?? j.near(r, 1)));
      }
      e.focus();
    },
    Ae = O(() => {
      (K(),
        J(),
        w(``),
        E(!1),
        (y.current = null),
        M(null),
        !(e == null || e.isDestroyed) &&
          (A != null &&
            (s == null ? P.applyMagicEditEntry(e, A, `keep`) : P.resolveOptimisticMagicEdit(e, A, `use`)),
          Y != null && V(e, Y),
          pe != null && te(e),
          P.unpinMagicEditSelection(e)));
    }),
    je = () => {
      e == null || e.isDestroyed || Y == null || (be(e, Y), e.focus());
    },
    Me = () => {
      e == null || e.isDestroyed || Y == null || (V(e, Y), e.focus());
    },
    Ne = (t) => {
      e == null ||
        e.isDestroyed ||
        A == null ||
        (u != null &&
          xe(_, t === `use` ? ne : _e, {
            conversationId: u,
            decisionSource: `toolbar`,
            magicEditId: A,
            messageId: o,
            writingBlockId: p,
            writingBlockIndex: m == null ? void 0 : String(m),
          }),
        s == null ? P.applyMagicEditEntry(e, A, t) : P.resolveOptimisticMagicEdit(e, A, t),
        M(null),
        e.focus());
    },
    Pe = g.formatMessage({
      id: `chatgptConversations.writingBlock.aiAccept`,
      defaultMessage: `Accept`,
      description: `Accessible label for accepting an AI writing block edit in Codex Apps.`,
    }),
    Ie = g.formatMessage({
      id: `chatgptConversations.writingBlock.aiUndo`,
      defaultMessage: `Undo`,
      description: `Short button label below an AI edit or generation preview in a Codex Apps writing block. It discards the suggested changes and restores the previous text; it is separate from the editor's general undo history control.`,
    }),
    Le = {
      accept: Pe,
      acceptAll: g.formatMessage({
        id: `chatgptConversations.writingBlock.aiAcceptAll`,
        defaultMessage: `Accept all`,
        description: `Button label for accepting all segments of an AI writing block edit in Codex Apps.`,
      }),
      reject: Ie,
    };
  return {
    cancelPendingAiRequests: ue,
    createEditor: W,
    editorOverlays: (0, $.jsxs)($.Fragment, {
      children: [
        pe != null && e != null
          ? (0, $.jsx)(Dt, {
              anchorPos: pe.anchorPos,
              editorRootRef: v,
              editorView: e,
              isLoading: q,
              labels: {
                cancel: g.formatMessage({
                  id: `chatgptConversations.writingBlock.generate.cancel`,
                  defaultMessage: `Cancel`,
                  description: `Accessible label for canceling an AI writing block generation request in Codex Apps.`,
                }),
                placeholder: g.formatMessage({
                  id: `chatgptConversations.writingBlock.generate.placeholder`,
                  defaultMessage: `Tell ChatGPT what to write`,
                  description: `Placeholder for the AI generation prompt in a ChatGPT writing block in Codex Apps.`,
                }),
                submit: g.formatMessage({
                  id: `chatgptConversations.writingBlock.generate.submit`,
                  defaultMessage: `Generate`,
                  description: `Accessible label for submitting an AI writing block generation request in Codex Apps.`,
                }),
              },
              onCancel: ke,
              onChange: w,
              onSubmit: () => void Ee(),
              renderInput: Jn,
              renderPresentation: (e) =>
                (0, $.jsx)(`div`, {
                  className: `m-0 flex h-9 w-fit min-w-0 shrink items-center overflow-hidden rounded-xl [background-color:var(--oai-wb-surface-primary)] px-1 py-1 [box-shadow:var(--oai-wb-shadow-lg)]`,
                  children: e,
                }),
              value: C,
            })
          : null,
        me == null
          ? Y == null
            ? null
            : (0, $.jsx)(Pt, {
                activeEntryId: Y,
                editorRootRef: v,
                focusEditor: Ce,
                fullscreenMode: !1,
                labels: Le,
                onAccept: je,
                onReject: Me,
                suggestionsOnly: !0,
              })
          : (0, $.jsx)(Pt, {
              activeEntryId: A,
              editorRootRef: v,
              focusEditor: Ce,
              fullscreenMode: !1,
              labels: Le,
              onAccept: () => Ne(`use`),
              onReject: () => Ne(`keep`),
              suggestionsOnly: !0,
            }),
      ],
    }),
    editorRootRef: v,
    hasPendingAiEdits: q || ce || Y != null || ve || D,
    onEditSelection: I ? De : void 0,
    onEditorKeyDownCapture: (e) => {
      T && e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), we(!1));
    },
    onEditorPointerDownCapture: () => {
      T && we(!1);
    },
    headerMagicEditAction: d
      ? (0, $.jsx)(Tt, {
          controls: {
            isComposerOpen: T,
            isInteractionDisabled: !I || ye,
            onCancelComposerSubmit: J,
            onComposerOpenChange: we,
            onSubmitComposerInstruction: Te,
          },
          labels: {
            composerPlaceholder: g.formatMessage({
              id: `chatgptConversations.writingBlock.magicEdit.placeholder`,
              defaultMessage: `Ask for changes`,
              description: `Placeholder for the full-document AI edit composer in a ChatGPT writing block in Codex Apps.`,
            }),
            editButton: g.formatMessage({
              id: `chatgptConversations.writingBlock.magicEdit.button`,
              defaultMessage: `Edit`,
              description: `Visible label for opening AI editing in a ChatGPT writing block in Codex Apps.`,
            }),
            submitButton: g.formatMessage({
              id: `chatgptConversations.writingBlock.magicEdit.submit`,
              defaultMessage: `Submit edits`,
              description: `Accessible label for submitting a full-document AI edit in a ChatGPT writing block in Codex Apps.`,
            }),
          },
          renderEditIcon: Yn,
          renderSubmitIcon: Xn,
          renderSubmittingControl: ({ onCancel: e, size: n }) =>
            (0, $.jsxs)(x, {
              color: `ghost`,
              size: `icon`,
              uniform: !0,
              "aria-label": g.formatMessage({
                id: `chatgptConversations.writingBlock.magicEdit.cancel`,
                defaultMessage: `Cancel`,
                description: `Accessible label for canceling a full-document AI edit request in a ChatGPT writing block in Codex Apps.`,
              }),
              className: `relative`,
              onClick: e,
              style: { height: n, width: n },
              children: [
                (0, $.jsx)(t, { className: `size-5` }),
                (0, $.jsx)(he, { className: `absolute size-2` }),
              ],
            }),
          submitButtonClassName: `text-default`,
        })
      : null,
    isEditorInteractionDisabled: ve,
    isGenerateInputOpen: pe != null,
    isHeaderComposerOpen: T,
    isHeaderInteractionDisabled: ye,
    isHistoryInteractionDisabled: Se,
    isWriteLikeMeSubmitting: D,
    magicEdit: { ...ae, applyMagicEditResult: de, cancelMagicEdit: J },
    onWriteLikeMeAction: I && l != null ? Oe : void 0,
    previewEngine: P,
    resetAiTools: Ae,
    resetGeneratePrompt: U,
    submitHeaderMagicEdit: Te,
  };
}
function qn(e) {
  let { doc: t } = e,
    n = j.findFrom(t.resolve(0), 1, !0),
    r = j.findFrom(t.resolve(t.content.size), -1, !0);
  if (n == null || r == null) return null;
  let i = Math.min(n.from, r.to),
    a = Math.max(n.from, r.to);
  return i === a ? null : A.create(t, a, i);
}
function Jn({
  cancelAriaLabel: e,
  disabled: t,
  inputClassName: n,
  inputRef: r,
  isLoading: i,
  isSubmitDisabled: a,
  onCancel: o,
  onChange: s,
  onKeyDownCapture: l,
  onSubmit: d,
  placeholder: f,
  submitAriaLabel: p,
  value: m,
}) {
  return (0, $.jsxs)(`div`, {
    className: `relative min-w-[300px] flex-1`,
    children: [
      (0, $.jsx)(`input`, {
        ref: r,
        "aria-label": f,
        className: u(
          n,
          `mx-0 min-w-[300px] bg-transparent py-2 ps-2.5 pe-9 text-sm text-default outline-none placeholder:text-tertiary`,
        ),
        disabled: t,
        onChange: (e) => s(e.target.value),
        onKeyDownCapture: (e) => {
          (l(e),
            !(e.defaultPrevented || e.key !== `Enter` || e.nativeEvent.isComposing) &&
              (e.preventDefault(), e.stopPropagation(), !i && !a && d(e)));
        },
        placeholder: f,
        value: m,
      }),
      (0, $.jsx)(`div`, {
        className: `absolute end-1.5 top-1/2 flex -translate-y-1/2 items-center justify-center`,
        children: (0, $.jsx)(x, {
          "aria-label": i ? e : p,
          className: `shrink-0 rounded-full`,
          color: `accent`,
          size: `iconMd`,
          uniform: !0,
          disabled: !i && a,
          onClick: i ? o : d,
          children: i ? (0, $.jsx)(he, { className: `icon-xs` }) : (0, $.jsx)(c, { className: `icon-xs` }),
        }),
      }),
    ],
  });
}
function Yn({ className: e }) {
  return (0, $.jsx)(N, { className: e.replace(`size-5`, ``) });
}
function Xn({ className: e }) {
  return (0, $.jsx)(c, { className: e });
}
var Zn, $;
function Qn() {
  return (Qn = e(() => {
    (K(),
      ye(),
      q(),
      Xe(),
      Gn(),
      Vt(),
      st(),
      tt(),
      Mt(),
      Et(),
      zt(),
      d(),
      C(),
      f(),
      (Zn = s()),
      b(),
      ve(),
      S(),
      g(),
      E(),
      _(),
      P(),
      W(),
      Se(),
      i(),
      k(),
      Pe(),
      ($ = l()));
  }))();
}
export { qe as a, Vt as i, Kn as n, Xe as o, Bt as r, Qn as t };
//# sourceMappingURL=chatgpt-writing-block-ai-tools-548b856a3cd1.js.map
