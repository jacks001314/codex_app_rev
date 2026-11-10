import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  An as n,
  Blt as r,
  CK as i,
  Dn as a,
  FBt as o,
  FZ as s,
  Fb as c,
  Gv as l,
  Hv as u,
  IZ as d,
  JJ as f,
  KH as p,
  LNt as m,
  MNt as h,
  NNt as g,
  NZ as _,
  On as v,
  PBt as y,
  PZ as b,
  Pb as x,
  SB as S,
  TE as C,
  TY as w,
  Uv as T,
  Vlt as E,
  Wv as D,
  XOt as O,
  XS as k,
  Y3 as ee,
  YJ as A,
  YOt as j,
  Z3 as M,
  ZSt as N,
  _D as P,
  aU as te,
  ck as F,
  fD as ne,
  gD as re,
  hit as I,
  iCt as L,
  jH as R,
  kU as ie,
  kn as z,
  mD as ae,
  nB as oe,
  nCt as B,
  oit as V,
  okt as H,
  qH as U,
  rB as se,
  rk as ce,
  tkt as W,
  wB as le,
  wE as ue,
  wK as de,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  D5n as fe,
  Dan as pe,
  Ean as me,
  FL as he,
  LL as ge,
  MN as _e,
  MOr as ve,
  Man as ye,
  Nan as be,
  Olr as xe,
  P5n as Se,
  Uan as Ce,
  Wan as we,
  XZ as Te,
  YZ as Ee,
  dDn as De,
  d_t as Oe,
  dtn as ke,
  f_t as Ae,
  ftn as je,
  jN as Me,
  j_t as Ne,
  jan as Pe,
  mlr as Fe,
  uDn as Ie,
  van as Le,
  wL as Re,
  xL as ze,
  yan as Be,
  zOr as Ve,
} from "./app-initial-ad16eaadf81f.js";
import { a as He, t as Ue } from "./surface-experience-c26605784604.js";
import { n as We, t as Ge } from "./editor.module-9d0afa74ff72.js";
import {
  i as Ke,
  l as qe,
  n as Je,
  r as Ye,
  t as Xe,
  u as Ze,
} from "./filename-menu-actions-39e6b8a922f7.js";
function Qe(e) {
  let t = (0, $e.c)(19),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ attachmentCount: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = H(),
    a = n != null && n > 0,
    o = r[`aria-expanded`] === !0 || r[`aria-expanded`] === `true`,
    s;
  t[3] !== n || t[4] !== a
    ? ((s = a
        ? (0, G.jsx)(W, {
            id: `codex.pages.automations.scheduleCount`,
            defaultMessage: `{count, plural, one {# schedule} other {# schedules}}`,
            description: `Tooltip showing how many automations are attached to a Page`,
            values: { count: n },
          })
        : (0, G.jsx)(W, {
            id: `codex.pages.automations.scheduleUpdates`,
            defaultMessage: `Schedule updates to this page`,
            description: `Tooltip for starting to schedule updates to a Page`,
          })),
      (t[3] = n),
      (t[4] = a),
      (t[5] = s))
    : (s = t[5]);
  let c;
  t[6] === i
    ? (c = t[7])
    : ((c = i.formatMessage({
        id: `codex.pages.automations.button`,
        defaultMessage: `Page automations`,
        description: `Open the automations attached to this Page or start setting one up`,
      })),
      (t[6] = i),
      (t[7] = c));
  let l = a ? `text-blue` : void 0,
    u;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = { 16: p, 20: U }), (t[8] = u)) : (u = t[8]);
  let d;
  t[9] === l ? (d = t[10]) : ((d = (0, G.jsx)(S, { className: l, icon: u })), (t[9] = l), (t[10] = d));
  let f;
  t[11] !== r || t[12] !== c || t[13] !== d
    ? ((f = (0, G.jsx)(C, { ...r, uniform: !0, "aria-label": c, children: d })),
      (t[11] = r),
      (t[12] = c),
      (t[13] = d),
      (t[14] = f))
    : (f = t[14]);
  let m;
  return (
    t[15] !== o || t[16] !== s || t[17] !== f
      ? ((m = (0, G.jsx)(oe, { side: `bottom`, triggerPopupOpen: o, tooltipContent: s, children: f })),
        (t[15] = o),
        (t[16] = s),
        (t[17] = f),
        (t[18] = m))
      : (m = t[18]),
    m
  );
}
var $e, G;
function et() {
  return (et = e(() => {
    (($e = y()), O(), w(), le(), se(), k(), (G = m()));
  }))();
}
var tt;
function nt() {
  return (nt = e(() => {
    tt = `` + new URL(`space-recovery-2a4b61a0b3c3.png`, import.meta.url).href;
  }))();
}
function rt(e) {
  let t = (0, K.c)(28),
    n = H(),
    [r, i] = (0, q.useState)(null),
    a = e.kind ?? `load`,
    o;
  t[0] !== e.experience || t[1] !== a
    ? ((o = (0, J.jsx)(Ue, { tracker: e.experience, kind: a })),
      (t[0] = e.experience),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s = e.kind === `sync`,
    c = e.documentType ?? `page`,
    l;
  t[3] === c
    ? (l = t[4])
    : ((l = (0, J.jsx)(W, {
        id: `codex.space.page.connectionFailed.byDocumentType`,
        values: { documentType: c },
        defaultMessage: `{documentType, select, granola_presentation {We’re having trouble loading this slide} granola_workbook {We’re having trouble loading this sheet} other {We’re having trouble loading this page}}`,
        description: `Heading when a Page connection fails or its initial content has not loaded after a timeout. documentType selects slide, sheet, or page for the current document.`,
      })),
      (t[3] = c),
      (t[4] = l));
  let u;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, J.jsx)(`p`, {
        className: `text-base text-secondary`,
        children: (0, J.jsx)(W, {
          id: `codex.space.page.connectionHelp`,
          defaultMessage: `Check your connection and try again`,
          description: `Recovery guidance for a failed or stalled Page connection`,
        }),
      })),
      (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] === e
    ? (d = t[7])
    : ((d =
        e.actions ??
        (0, J.jsx)(ee, {
          size: `large`,
          onClick: () => {
            let t = e.experience?.startRetry();
            (e.onRetry(), t?.requestCompleted());
          },
          children: (0, J.jsx)(W, {
            id: `codex.space.page.connectionTryAgain`,
            defaultMessage: `Try again`,
            description: `Retry a failed or stalled Page connection`,
          }),
        })),
      (t[6] = e),
      (t[7] = d));
  let f;
  t[8] !== e.errorCode || t[9] !== e.pageId || t[10] !== e.session
    ? ((f = (t) => {
        let n = e.session?.getConnectionEndpoint() ?? null;
        i(
          t.currentTarget.open
            ? JSON.stringify(
                {
                  protocol: n == null ? `unknown` : `WebSocket`,
                  endpoint: n,
                  page_id: e.pageId,
                  captured_at: new Date().toISOString(),
                  error_code: e.session?.getSnapshot().errorCode ?? e.errorCode ?? `page_connection_failed`,
                },
                null,
                2,
              )
            : null,
        );
      }),
      (t[8] = e.errorCode),
      (t[9] = e.pageId),
      (t[10] = e.session),
      (t[11] = f))
    : (f = t[11]);
  let p;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, J.jsxs)(`summary`, {
        className: `mx-auto flex w-fit cursor-interaction items-center gap-1 text-xs font-medium text-tertiary select-none`,
        children: [
          (0, J.jsx)(W, {
            id: `codex.space.page.connectionItDetails`,
            defaultMessage: `Details for IT`,
            description: `Expand inline connection diagnostics that the user can copy and share with their IT team`,
          }),
          (0, J.jsx)(R, { className: `-rotate-90 group-open:rotate-0` }),
        ],
      })),
      (t[12] = p))
    : (p = t[12]);
  let m;
  t[13] !== r || t[14] !== n || t[15] !== e.documentType
    ? ((m =
        r != null &&
        (0, J.jsxs)(`div`, {
          className: `mt-4 flex min-w-0 flex-col gap-3`,
          role: `region`,
          "aria-label": n.formatMessage(
            {
              id: `codex.space.page.connectionDiagnostics.byDocumentType`,
              defaultMessage: `{documentType, select, granola_presentation {Slide connection diagnostics} granola_workbook {Sheet connection diagnostics} other {Page connection diagnostics}}`,
              description: `Label for selectable connection details including the WebSocket endpoint without credentials, identifiers, capture time and error code. documentType selects slide, sheet, or page for the current document.`,
            },
            { documentType: e.documentType ?? `page` },
          ),
          children: [
            (0, J.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: (0, J.jsx)(W, {
                id: `codex.space.page.connectionItGuidance`,
                defaultMessage: `If this keeps happening, your IT team may need to check your network settings. Share these details with them.`,
                description: `Guidance inside expandable Page connection diagnostics; a network configuration issue is possible but has not been confirmed`,
              }),
            }),
            (0, J.jsx)(x, {
              content: r,
              language: `json`,
              shouldWrapCode: !0,
              title: (0, J.jsx)(W, {
                id: `codex.space.page.connectionDetailsTitle`,
                defaultMessage: `Connection details`,
                description: `Title of the copyable Page connection diagnostics`,
              }),
              copyButtonText: n.formatMessage({
                id: `codex.space.page.connectionCopyDetails`,
                defaultMessage: `Copy details`,
                description: `Copy Page connection diagnostics for sharing with an IT team`,
              }),
            }),
          ],
        })),
      (t[13] = r),
      (t[14] = n),
      (t[15] = e.documentType),
      (t[16] = m))
    : (m = t[16]);
  let h;
  t[17] !== f || t[18] !== m
    ? ((h = (0, J.jsxs)(`details`, {
        className: `group w-full max-w-md text-start`,
        onToggle: f,
        children: [p, m],
      })),
      (t[17] = f),
      (t[18] = m),
      (t[19] = h))
    : (h = t[19]);
  let g;
  t[20] !== h || t[21] !== s || t[22] !== l || t[23] !== d
    ? ((g = (0, J.jsx)(Ie, {
        compact: s,
        embedded: !0,
        illustration: tt,
        title: l,
        description: u,
        actions: d,
        details: h,
      })),
      (t[20] = h),
      (t[21] = s),
      (t[22] = l),
      (t[23] = d),
      (t[24] = g))
    : (g = t[24]);
  let _;
  return (
    t[25] !== o || t[26] !== g
      ? ((_ = (0, J.jsxs)(J.Fragment, { children: [o, g] })), (t[25] = o), (t[26] = g), (t[27] = _))
      : (_ = t[27]),
    _
  );
}
function it(e) {
  let t = (0, K.c)(20),
    n,
    r,
    i,
    a,
    o;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]))
    : (({ children: n, loading: a, failed: o, onRetry: i, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o));
  let s = a === void 0 || a,
    c = o !== void 0 && o,
    l = Se(Me),
    [u, d] = (0, q.useState)(Date.now),
    [f, p] = (0, q.useState)(!1),
    m,
    h;
  (t[6] !== c || t[7] !== s || t[8] !== u
    ? ((m = () => {
        if (!s || c) return;
        let e,
          t = () => {
            clearTimeout(e);
            let n = u + at - Date.now();
            n <= 0 ? p(!0) : (e = setTimeout(t, n));
          };
        return (
          t(),
          document.addEventListener(`visibilitychange`, t),
          document.addEventListener(`resume`, t),
          window.addEventListener(`pageshow`, t),
          () => {
            (clearTimeout(e),
              document.removeEventListener(`visibilitychange`, t),
              document.removeEventListener(`resume`, t),
              window.removeEventListener(`pageshow`, t));
          }
        );
      }),
      (h = [s, c, u]),
      (t[6] = c),
      (t[7] = s),
      (t[8] = u),
      (t[9] = m),
      (t[10] = h))
    : ((m = t[9]), (h = t[10])),
    (0, q.useEffect)(m, h));
  let g;
  return (
    t[11] !== n ||
    t[12] !== c ||
    t[13] !== r ||
    t[14] !== s ||
    t[15] !== i ||
    t[16] !== e.errorCode ||
    t[17] !== l ||
    t[18] !== f
      ? ((g =
          s && (c || f) && !l
            ? (0, J.jsx)(`div`, {
                className: `flex min-h-0 flex-1 items-center justify-center p-4`,
                children: (0, J.jsx)(rt, {
                  ...r,
                  errorCode: e.errorCode ?? (c ? `page_load_failed` : `page_load_timeout`),
                  onRetry: () => {
                    (p(!1), d(Date.now()), i == null ? window.location.reload() : i());
                  },
                }),
              })
            : (0, J.jsx)(J.Fragment, { children: n })),
        (t[11] = n),
        (t[12] = c),
        (t[13] = r),
        (t[14] = s),
        (t[15] = i),
        (t[16] = e.errorCode),
        (t[17] = l),
        (t[18] = f),
        (t[19] = g))
      : (g = t[19]),
    g
  );
}
var K, q, J, at;
function ot() {
  return (ot = e(() => {
    ((K = y()), (q = o()), O(), He(), M(), c(), w(), fe(), De(), _e(), nt(), (J = m()), (at = 3e4));
  }))();
}
function st(e, t, n) {
  if (t === `"` || t === `'`) {
    let n = e.length === 0 || /[\s{[(<'"‘“]/.test(e.slice(-1));
    return { shortcut: t, glyph: (t === `"` ? `“”` : `‘’`)[+!n], from: e.length, continuation: !1 };
  }
  if (t.length !== 1 || !`.=>-`.includes(t)) return;
  let r = t === `>` && ((n === `<-` && e.endsWith(`←`)) || (n === `<=` && e.endsWith(`≤`))),
    i = (r ? n : e.slice(-2)) + t,
    a = ut.find(([e]) => i.endsWith(e));
  return a == null
    ? void 0
    : { shortcut: a[0], glyph: a[1], from: e.length - (r ? 1 : a[0].length - 1), continuation: r };
}
function ct(e, t, n, r) {
  if (lt(e, n) || (e.includes(`](`) && e.lastIndexOf(`](`) > e.lastIndexOf(`)`))) return !0;
  if (t !== `"`) {
    let n = e + t;
    if (/https?:\/\/|www\./i.test(n)) {
      let e = /(?:^|[\s"“”])([^\s"“”]*)$/.exec(n)?.[1];
      if (e != null && /https?:\/\/|www\./i.test(e)) return !0;
    }
  }
  if (!e.includes("`")) return !1;
  let i = r?.parent.type.schema.marks.code,
    a = e;
  if (r != null && i != null) {
    let t = [],
      n = 0;
    (r.parent.nodesBetween(0, e.length, (r, a) => {
      if (i.isInSet(r.marks) == null) return;
      let o = Math.min(e.length, a + r.nodeSize);
      return (t.push(e.slice(n, a), e.slice(a, o).replace(/`/g, ` `)), (n = o), !1);
    }),
      n > 0 && (a = t.join(``) + e.slice(n)));
  }
  let o;
  for (let e of a.matchAll(/`+/g)) o === e[0] ? (o = void 0) : o == null && !lt(a, e.index) && (o = e[0]);
  return o != null;
}
function lt(e, t) {
  let n = t;
  for (; n > 0 && e[n - 1] === `\\`;) --n;
  return (t - n) % 2 == 1;
}
var ut;
function dt() {
  return (dt = e(() => {
    ut = [
      [`<->`, `↔`],
      [`<=>`, `⇔`],
      [`<-`, `←`],
      [`->`, `→`],
      [`=>`, `⇒`],
      [`<=`, `≤`],
      [`>=`, `≥`],
      [`!=`, `≠`],
      [`+/-`, `±`],
      [`--`, `—`],
      [`...`, `…`],
    ];
  }))();
}
function ft(e) {
  let t = (0, mt.c)(24),
    n = H(),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = r()), (t[0] = i)) : (i = t[0]);
  let a = I(i.smartPunctuationEnabled),
    o = (0, ht.useRef)(void 0),
    s = (0, ht.useRef)(!1),
    c;
  t[1] === n
    ? (c = t[2])
    : ((c = n.formatMessage({
        id: `codex.space.page.titleLabel`,
        defaultMessage: `Page title`,
        description: `Accessible label for the editable title input above a Page document in the Space`,
      })),
      (t[1] = n),
      (t[2] = c));
  let l;
  t[3] === n ? (l = t[4]) : ((l = n.formatMessage(Be.untitled)), (t[3] = n), (t[4] = l));
  let u;
  t[5] === e.onPaste
    ? (u = t[6])
    : ((u = (t) => {
        ((o.current = void 0), pt(t, e.onPaste, s));
      }),
      (t[5] = e.onPaste),
      (t[6] = u));
  let d, f;
  t[7] === e
    ? ((d = t[8]), (f = t[9]))
    : ((d = (t) => {
        e.onKeyDown?.(t);
        let n = t.currentTarget,
          r = o.current;
        t.key === `Backspace` &&
          !t.defaultPrevented &&
          !t.nativeEvent.isComposing &&
          !t.altKey &&
          !t.ctrlKey &&
          !t.metaKey &&
          !t.shiftKey &&
          !n.disabled &&
          !n.readOnly &&
          r != null &&
          n.value === r.value &&
          n.selectionStart === r.caret &&
          n.selectionEnd === r.caret &&
          n.ownerDocument.execCommand(`undo`) &&
          t.preventDefault();
      }),
      (f = (t) => {
        let n = t.currentTarget,
          r = o.current;
        (r != null &&
          (n.value !== r.value || n.selectionStart !== r.caret || n.selectionEnd !== r.caret) &&
          (o.current = void 0),
          e.onSelect?.(t));
      }),
      (t[7] = e),
      (t[8] = d),
      (t[9] = f));
  let p;
  t[10] !== e || t[11] !== a
    ? ((p = (t) => {
        e.onInput?.(t);
        let n = t.currentTarget,
          r = t.nativeEvent,
          i = o.current;
        if (r instanceof InputEvent && i != null) {
          if (
            r.inputType === `historyUndo` &&
            n.value === i.value.slice(0, i.caret - 1) + i.shortcut + i.value.slice(i.caret)
          ) {
            n.setSelectionRange(n.selectionEnd, n.selectionEnd);
            return;
          }
          if (r.inputType === `historyRedo` && n.value === i.value) return;
        }
        if (
          ((o.current = void 0),
          s.current ||
            !a ||
            n.disabled ||
            n.readOnly ||
            !(r instanceof InputEvent) ||
            r.isComposing ||
            r.inputType !== `insertText` ||
            r.data?.length !== 1 ||
            !`"'.=>-`.includes(r.data) ||
            n.selectionStart !== n.selectionEnd)
        )
          return;
        let c = r.data,
          l = n.value,
          u = n.selectionStart,
          d = l.slice(0, u - c.length),
          f = st(d, c, i?.caret === u - 1 && i.value === d + l.slice(u) ? i.shortcut : void 0);
        f == null ||
          ct(d, c, f.from) ||
          queueMicrotask(() => {
            if (!(
              n.ownerDocument.activeElement !== n ||
              n.disabled ||
              n.readOnly ||
              n.value !== l ||
              n.selectionStart !== u ||
              n.selectionEnd !== u
            )) {
              if ((n.setSelectionRange(f.from, u), f.continuation)) {
                if (
                  !n.ownerDocument.execCommand(`insertText`, !1, f.shortcut) ||
                  n.value !== l.slice(0, f.from) + f.shortcut + l.slice(u)
                )
                  return;
                n.setSelectionRange(f.from, f.from + f.shortcut.length);
              }
              n.ownerDocument.execCommand(`insertText`, !1, f.glyph) &&
                (o.current = { value: n.value, caret: n.selectionStart, shortcut: f.shortcut });
            }
          });
      }),
      (t[10] = e),
      (t[11] = a),
      (t[12] = p))
    : (p = t[12]);
  let m;
  t[13] === e
    ? (m = t[14])
    : ((m = (t) => {
        ((o.current = void 0), e.onBlur?.(t));
      }),
      (t[13] = e),
      (t[14] = m));
  let h;
  return (
    t[15] !== e ||
    t[16] !== c ||
    t[17] !== l ||
    t[18] !== u ||
    t[19] !== d ||
    t[20] !== f ||
    t[21] !== p ||
    t[22] !== m
      ? ((h = (0, gt.jsx)(`textarea`, {
          ...e,
          className: `${Ge.PageTitle} relative block field-sizing-content w-full min-w-0 resize-none overflow-hidden border-none bg-transparent font-semibold break-words text-default outline-none`,
          "aria-label": c,
          "aria-multiline": !1,
          placeholder: l,
          rows: 1,
          onPaste: u,
          onKeyDown: d,
          onSelect: f,
          onInput: p,
          onBlur: m,
        })),
        (t[15] = e),
        (t[16] = c),
        (t[17] = l),
        (t[18] = u),
        (t[19] = d),
        (t[20] = f),
        (t[21] = p),
        (t[22] = m),
        (t[23] = h))
      : (h = t[23]),
    h
  );
}
function pt(e, t, n) {
  n.current = !0;
  try {
    t?.(e);
  } finally {
    n.current = !1;
  }
}
var mt, ht, gt;
function _t() {
  return (_t = e(() => {
    ((mt = y()), E(), (ht = o()), O(), Le(), V(), dt(), We(), (gt = m()));
  }))();
}
function vt() {
  return (vt = e(() => {}))();
}
function yt(e) {
  let t = (0, bt.c)(12),
    { children: n, emoji: r, findContextId: i } = e,
    a = L(Ae),
    o = L(Oe),
    s;
  if (t[0] !== o?.id || t[1] !== r || t[2] !== i || t[3] !== a?.contextId || t[4] !== a?.matches) {
    let e =
      a?.contextId === i
        ? a?.matches.filter((e) => {
            let { location: t } = e;
            return t.domain === `page` && t.target === `title` && t.from < r.length && t.to > 0;
          })
        : void 0;
    ((s =
      e?.find((e) => {
        let { id: t } = e;
        return t === o?.id;
      }) ?? e?.[0]),
      (t[0] = o?.id),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a?.contextId),
      (t[4] = a?.matches),
      (t[5] = s));
  } else s = t[5];
  let c = s;
  if (c?.location.domain !== `page`) {
    let e;
    return (
      t[6] === n ? (e = t[7]) : ((e = (0, Y.jsx)(Y.Fragment, { children: n })), (t[6] = n), (t[7] = e)),
      e
    );
  }
  let l = o?.id === c.id ? `` : void 0,
    u;
  return (
    t[8] !== n || t[9] !== c.location.from || t[10] !== l
      ? ((u = (0, Y.jsx)(`mark`, {
          className: `inline-flex rounded-2xs text-inherit`,
          "data-active": l,
          "data-page-find-match": !0,
          "data-page-find-title-match": c.location.from,
          children: n,
        })),
        (t[8] = n),
        (t[9] = c.location.from),
        (t[10] = l),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
var bt, Y;
function xt() {
  return (xt = e(() => {
    ((bt = y()), N(), Ne(), (Y = m()));
  }))();
}
function St(e) {
  let t = (0, Tt.c)(79),
    n = H(),
    [r, i] = (0, Et.useState)(!1),
    a = ye(),
    o = be(a),
    { symbol: s, disabled: c, space: l, spaceTheme: u } = e,
    d = s != null && s.kind !== `none`,
    f = e.hideWhenEmpty && !d,
    p = s?.kind === `icon` ? s.color : u,
    m;
  t[0] !== p || t[1] !== o ? ((m = Ce(p, o)), (t[0] = p), (t[1] = o), (t[2] = m)) : (m = t[2]);
  let g = m;
  if (((c || f) && r && i(!1), f)) return null;
  let _;
  t[3] === n
    ? (_ = t[4])
    : ((_ = n.formatMessage({
        id: `codex.space.page.symbol.change`,
        defaultMessage: `Change icon`,
        description: `Accessible label and tooltip for the shared Page and Space symbol picker beside the title`,
      })),
      (t[3] = n),
      (t[4] = _));
  let v = _,
    y;
  t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = (0, X.jsx)(ie, {})), (t[5] = y)) : (y = t[5]);
  let b = y;
  if (s?.kind === `emoji`) {
    let e = l && `justify-center`,
      n;
    t[6] === e ? (n = t[7]) : ((n = h(`flex size-full items-center`, e)), (t[6] = e), (t[7] = n));
    let r;
    t[8] === s.value
      ? (r = t[9])
      : ((r = (0, X.jsx)(Ee, { emoji: s.value, size: `large` })), (t[8] = s.value), (t[9] = r));
    let i;
    (t[10] !== n || t[11] !== r
      ? ((i = (0, X.jsx)(`span`, { className: n, children: r })), (t[10] = n), (t[11] = r), (t[12] = i))
      : (i = t[12]),
      (b = i));
  } else if (d) {
    let e = l && `justify-center`,
      n;
    t[13] === e ? (n = t[14]) : ((n = h(`flex size-full items-center`, e)), (t[13] = e), (t[14] = n));
    let r = s?.kind === `icon` ? s.color : u,
      i;
    t[15] === l ? (i = t[16]) : ((i = l ? (0, X.jsx)(te, {}) : (0, X.jsx)(ie, {})), (t[15] = l), (t[16] = i));
    let a = s?.kind === `icon` ? s.value : null,
      o;
    t[17] !== r || t[18] !== i || t[19] !== a
      ? ((o = (0, X.jsx)(me, { className: `size-8`, color: r, defaultIcon: i, icon: a })),
        (t[17] = r),
        (t[18] = i),
        (t[19] = a),
        (t[20] = o))
      : (o = t[20]);
    let c;
    (t[21] !== n || t[22] !== o
      ? ((c = (0, X.jsx)(`span`, { className: n, children: o })), (t[21] = n), (t[22] = o), (t[23] = c))
      : (c = t[23]),
      (b = c));
  }
  if (e.legacyEmoji != null) {
    let n;
    (t[24] !== b || t[25] !== e.findContextId || t[26] !== e.legacyEmoji
      ? ((n = (0, X.jsx)(yt, { emoji: e.legacyEmoji, findContextId: e.findContextId, children: b })),
        (t[24] = b),
        (t[25] = e.findContextId),
        (t[26] = e.legacyEmoji),
        (t[27] = n))
      : (n = t[27]),
      (b = n));
  }
  let x = d ? `ghostMuted` : `ghost`;
  l && d && (x = g == null ? `secondary` : `tinted`);
  let S = d
      ? `self-start`
      : `absolute end-0 top-1/2 -translate-y-1/2 opacity-0 group-focus-within/page-title:opacity-100 group-hover/page-title:opacity-100 data-[state=open]:opacity-100 pointer-coarse:opacity-100`,
    C = d ? void 0 : `small`,
    w = d ? `iconLarge` : `compact`,
    T = !d,
    E;
  t[28] !== g || t[29] !== d || t[30] !== l
    ? ((E = l && d ? { color: g ?? void 0 } : void 0), (t[28] = g), (t[29] = d), (t[30] = l), (t[31] = E))
    : (E = t[31]);
  let D;
  t[32] !== x ||
  t[33] !== c ||
  t[34] !== b ||
  t[35] !== v ||
  t[36] !== S ||
  t[37] !== C ||
  t[38] !== w ||
  t[39] !== T ||
  t[40] !== E
    ? ((D = (0, X.jsx)(ee, {
        className: S,
        "aria-label": v,
        color: x,
        disabled: c,
        onClick: wt,
        radius: C,
        size: w,
        uniform: T,
        style: E,
        type: `button`,
        children: b,
      })),
      (t[32] = x),
      (t[33] = c),
      (t[34] = b),
      (t[35] = v),
      (t[36] = S),
      (t[37] = C),
      (t[38] = w),
      (t[39] = T),
      (t[40] = E),
      (t[41] = D))
    : (D = t[41]);
  let O = D;
  if (c) {
    if (!d) return null;
    let e;
    return (
      t[42] !== O || t[43] !== b || t[44] !== l
        ? ((e = l
            ? O
            : (0, X.jsx)(`span`, {
                className: `flex size-16 items-center justify-center border border-transparent`,
                children: b,
              })),
          (t[42] = O),
          (t[43] = b),
          (t[44] = l),
          (t[45] = e))
        : (e = t[45]),
      e
    );
  }
  let k;
  t[46] === d
    ? (k = t[47])
    : ((k = d ? `self-start` : h(Ge.PageTitle, `absolute top-0 end-full pe-2 font-semibold`)),
      (t[46] = d),
      (t[47] = k));
  let A = d ? `flex` : `relative inline-block h-[1cap] align-baseline`,
    j;
  t[48] === O ? (j = t[49]) : ((j = (0, X.jsx)(re, { asChild: !0, children: O })), (t[48] = O), (t[49] = j));
  let M;
  t[50] !== v || t[51] !== r || t[52] !== j
    ? ((M = (0, X.jsx)(oe, { tooltipContent: v, disableHoverOpen: r, children: j })),
      (t[50] = v),
      (t[51] = r),
      (t[52] = j),
      (t[53] = M))
    : (M = t[53]);
  let N;
  t[54] !== A || t[55] !== M
    ? ((N = (0, X.jsx)(`span`, { className: A, children: M })), (t[54] = A), (t[55] = M), (t[56] = N))
    : (N = t[56]);
  let P;
  t[57] !== k || t[58] !== N
    ? ((P = (0, X.jsx)(`div`, { className: k, children: N })), (t[57] = k), (t[58] = N), (t[59] = P))
    : (P = t[59]);
  let F = l && d ? 6 : void 0,
    I;
  t[60] === e
    ? (I = t[61])
    : ((I =
        e.onClose == null
          ? void 0
          : (t) => {
              (t.preventDefault(), e.onClose?.());
            }),
      (t[60] = e),
      (t[61] = I));
  let L = !l || s?.kind === `emoji` ? `emoji` : `icon`,
    R,
    z;
  t[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = () => i(!1)), (z = () => i(!1)), (t[62] = R), (t[63] = z))
    : ((R = t[62]), (z = t[63]));
  let B;
  t[64] !== c || t[65] !== e.onChange || t[66] !== s || t[67] !== L || t[68] !== u
    ? ((B = (0, X.jsx)(ke, {
        disabled: c,
        value: s,
        defaultColor: u,
        defaultKind: L,
        onChange: e.onChange,
        onSelect: R,
        onClear: z,
      })),
      (t[64] = c),
      (t[65] = e.onChange),
      (t[66] = s),
      (t[67] = L),
      (t[68] = u),
      (t[69] = B))
    : (B = t[69]);
  let V;
  t[70] !== v || t[71] !== F || t[72] !== I || t[73] !== B
    ? ((V = (0, X.jsx)(ae, {
        className: `z-50 outline-hidden`,
        "aria-label": v,
        align: `center`,
        sideOffset: F,
        onCloseAutoFocus: I,
        onClick: Ct,
        unstyled: !0,
        children: B,
      })),
      (t[70] = v),
      (t[71] = F),
      (t[72] = I),
      (t[73] = B),
      (t[74] = V))
    : (V = t[74]);
  let U;
  return (
    t[75] !== r || t[76] !== P || t[77] !== V
      ? ((U = (0, X.jsxs)(ne, { modal: !0, open: r, onOpenChange: i, children: [P, V] })),
        (t[75] = r),
        (t[76] = P),
        (t[77] = V),
        (t[78] = U))
      : (U = t[78]),
    U
  );
}
function Ct(e) {
  return e.stopPropagation();
}
function wt(e) {
  return e.stopPropagation();
}
var Tt, Et, X;
function Dt() {
  return (Dt = e(() => {
    ((Tt = y()),
      g(),
      (Et = o()),
      O(),
      M(),
      w(),
      P(),
      se(),
      we(),
      pe(),
      je(),
      Te(),
      Pe(),
      xt(),
      We(),
      (X = m()));
  }))();
}
function Ot(e) {
  let t = (0, kt.c)(12),
    n,
    r;
  t[0] === e ? ((n = t[1]), (r = t[2])) : (({ action: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = H(),
    a;
  t[3] !== n || t[4] !== i ? ((a = i.formatMessage(Mt[n])), (t[3] = n), (t[4] = i), (t[5] = a)) : (a = t[5]);
  let o = jt[n],
    s;
  t[6] === o ? (s = t[7]) : ((s = (0, At.jsx)(S, { icon: o })), (t[6] = o), (t[7] = s));
  let c;
  return (
    t[8] !== r || t[9] !== a || t[10] !== s
      ? ((c = (0, At.jsx)(Ye, { ...r, appearance: `viewer`, label: a, children: s })),
        (t[8] = r),
        (t[9] = a),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
var kt, At, jt, Mt;
function Nt() {
  return (Nt = e(() => {
    ((kt = y()),
      z(),
      a(),
      D(),
      u(),
      s(),
      _(),
      O(),
      w(),
      le(),
      Ke(),
      (At = m()),
      (jt = {
        generate: { assets: { 16: n, 20: v } },
        image: { 16: i, 20: de },
        visualize: { assets: { 16: d, 20: b } },
        insert: { assets: { 16: l, 20: T } },
      }),
      (Mt = j({
        generate: {
          id: `codex.space.page.header.generate`,
          defaultMessage: `Generate`,
          description: `Open a prompt to generate content in the Page`,
        },
        image: {
          id: `codex.space.page.header.image`,
          defaultMessage: `Image`,
          description: `Insert an image block into the Page`,
        },
        visualize: {
          id: `codex.space.page.header.visualize`,
          defaultMessage: `Visualize`,
          description: `Open a prompt to create a visualization in the Page`,
        },
        insert: {
          id: `codex.space.page.header.insert`,
          defaultMessage: `Insert`,
          description: `Label for the Page toolbar menu that inserts a block after the current block`,
        },
      })));
  }))();
}
function Pt(e) {
  let t = (0, It.c)(12),
    { children: n, documentReady: r, fallbackTitle: i, pageId: a, session: o } = e,
    s = B(Re, a),
    c;
  t[0] !== r || t[1] !== i || t[2] !== s || t[3] !== o.document || t[4] !== o.streamKind
    ? ((c = () => (o.streamKind === `scratch` ? s : r ? o.document.getText(`title`).toJSON() : (i ?? s))),
      (t[0] = r),
      (t[1] = i),
      (t[2] = s),
      (t[3] = o.document),
      (t[4] = o.streamKind),
      (t[5] = c))
    : (c = t[5]);
  let l = c,
    u;
  t[6] !== i || t[7] !== s ? ((u = () => i ?? s), (t[6] = i), (t[7] = s), (t[8] = u)) : (u = t[8]);
  let d = (0, Lt.useSyncExternalStore)(o.subscribe, l, u),
    f;
  return (t[9] !== n || t[10] !== d ? ((f = n(d)), (t[9] = n), (t[10] = d), (t[11] = f)) : (f = t[11]), f);
}
function Ft(e) {
  let n = (0, It.c)(6),
    { enabled: r, pageId: i, title: a } = e,
    o = t(ve),
    s,
    c;
  return (
    n[0] !== r || n[1] !== i || n[2] !== o || n[3] !== a
      ? ((s = () => {
          r && a != null && ge(o, i, a.trim() || i);
        }),
        (c = [r, i, o, a]),
        (n[0] = r),
        (n[1] = i),
        (n[2] = o),
        (n[3] = a),
        (n[4] = s),
        (n[5] = c))
      : ((s = n[4]), (c = n[5])),
    (0, Lt.useEffect)(s, c),
    null
  );
}
var It, Lt;
function Z() {
  return (Z = e(() => {
    ((It = y()), N(), (Lt = o()), he(), Ve(), ze());
  }))();
}
function Rt(e) {
  let t = (0, Q.c)(13),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ documentReady: n, fallbackTitle: r, session: a, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o;
  t[5] === i ? (o = t[6]) : ((o = (e) => (0, $.jsx)(zt, { ...i, title: e })), (t[5] = i), (t[6] = o));
  let s;
  return (
    t[7] !== n || t[8] !== r || t[9] !== i.pageId || t[10] !== a || t[11] !== o
      ? ((s = (0, $.jsx)(Pt, {
          documentReady: n,
          fallbackTitle: r,
          pageId: i.pageId,
          session: a,
          children: o,
        })),
        (t[7] = n),
        (t[8] = r),
        (t[9] = i.pageId),
        (t[10] = a),
        (t[11] = o),
        (t[12] = s))
      : (s = t[12]),
    s
  );
}
function zt(e) {
  let t = (0, Q.c)(14),
    { menu: n, files: r, triggerRef: i, ...a } = e,
    o = H(),
    s = L(xe),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(S, { icon: { 16: f, 20: A } })), (t[0] = c))
    : (c = t[0]);
  let l = c,
    u,
    d,
    p,
    m;
  if (t[1] !== r || t[2] !== n) {
    let e = n?.items.findIndex(Bt) ?? -1;
    ((u = n != null && (0, $.jsx)(Xe, { menu: n, items: e < 0 ? n.items : n.items.slice(0, e) })),
      t[7] === r ? (d = t[8]) : ((d = r != null && (0, $.jsx)(ce.Separator, {})), (t[7] = r), (t[8] = d)),
      (p = r),
      (m = n != null && e >= 0 && (0, $.jsx)(Xe, { menu: n, items: n.items.slice(e) })),
      (t[1] = r),
      (t[2] = n),
      (t[3] = u),
      (t[4] = d),
      (t[5] = p),
      (t[6] = m));
  } else ((u = t[3]), (d = t[4]), (p = t[5]), (m = t[6]));
  let h;
  t[9] !== u || t[10] !== d || t[11] !== p || t[12] !== m
    ? ((h = (0, $.jsxs)($.Fragment, { children: [u, d, p, m] })),
      (t[9] = u),
      (t[10] = d),
      (t[11] = p),
      (t[12] = m),
      (t[13] = h))
    : (h = t[13]);
  let g = h;
  return s
    ? (0, $.jsx)(qe, {
        ...a,
        menu: {
          open: n?.open,
          onOpenChange: n?.onOpenChange,
          onCloseAutoFocus: n?.onCloseAutoFocus,
          triggerRef: i,
          icon: l,
          actions: g,
        },
      })
    : (0, $.jsx)(ue, {
        title: a.title?.trim() || o.formatMessage(Be.untitled),
        icon: l,
        open: n?.open,
        onOpenChange: n?.onOpenChange,
        onCloseAutoFocus: n?.onCloseAutoFocus,
        triggerRef: i,
        children: g,
      });
}
function Bt(e) {
  return e.id === `page-delete-separator` || e.id === `space-delete-separator`;
}
var Q, $;
function Vt() {
  return (Vt = e(() => {
    ((Q = y()), N(), O(), F(), w(), le(), Fe(), Le(), k(), Z(), Ze(), Je(), ($ = m()));
  }))();
}
export {
  rt as _,
  Ft as a,
  Qe as b,
  Nt as c,
  vt as d,
  ft as f,
  ct as g,
  dt as h,
  Pt as i,
  St as l,
  st as m,
  Rt as n,
  Z as o,
  _t as p,
  Vt as r,
  Ot as s,
  zt as t,
  Dt as u,
  it as v,
  et as x,
  ot as y,
};
//# sourceMappingURL=title-menu-b54babdcf17c.js.map
