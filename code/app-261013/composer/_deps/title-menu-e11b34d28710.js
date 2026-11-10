import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $nt as n,
  ADt as r,
  AO as i,
  BE as a,
  CS as o,
  DG as s,
  Dz as c,
  EG as l,
  FV as u,
  HE as d,
  IDt as f,
  Ict as p,
  Ixt as m,
  Jq as h,
  Lct as g,
  MH as _,
  MX as v,
  NX as y,
  PX as b,
  Pxt as x,
  RE as ee,
  TJ as S,
  TO as C,
  UE as w,
  VDt as T,
  Vxt as E,
  Wnt as D,
  XV as O,
  Yq as te,
  ZV as k,
  _Mt as A,
  cz as j,
  fv as M,
  gMt as ne,
  gn as N,
  hn as P,
  hv as F,
  jDt as I,
  jX as L,
  kz as R,
  lH as re,
  mn as z,
  mv as B,
  nE as V,
  ob as H,
  pn as U,
  pv as W,
  sb as G,
  sz as ie,
  t3 as ae,
  tE as oe,
  vzt as K,
  xMt as q,
  yzt as se,
  zxt as ce,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bar as le,
  Cnn as ue,
  Cwr as de,
  Ear as fe,
  G7t as pe,
  GCn as me,
  KCn as he,
  QI as ge,
  Qtn as _e,
  RI as ve,
  Snn as ye,
  VI as be,
  W7t as xe,
  Ztn as Se,
  ann as Ce,
  bgt as we,
  dY as Te,
  dnn as Ee,
  eL as De,
  egt as Oe,
  fnn as ke,
  gwr as Ae,
  onn as je,
  tgt as Me,
  uY as Ne,
  unn as Pe,
} from "./app-initial-5851df3f6cb1.js";
import { a as Fe, t as Ie } from "./surface-experience-689b6f263218.js";
import { n as Le, t as Re } from "./editor.module-79b8a30b4fbe.js";
import {
  i as ze,
  l as Be,
  n as Ve,
  r as He,
  t as Ue,
  u as We,
} from "./filename-menu-actions-c1dd81b47dd6.js";
function Ge(e) {
  let t = (0, Ke.c)(19),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ attachmentCount: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = T(),
    a = n != null && n > 0,
    o = r[`aria-expanded`] === !0 || r[`aria-expanded`] === `true`,
    s;
  t[3] !== n || t[4] !== a
    ? ((s = a
        ? (0, J.jsx)(f, {
            id: `codex.pages.automations.scheduleCount`,
            defaultMessage: `{count, plural, one {# schedule} other {# schedules}}`,
            description: `Tooltip showing how many automations are attached to a Page`,
            values: { count: n },
          })
        : (0, J.jsx)(f, {
            id: `codex.pages.automations.scheduleUpdates`,
            defaultMessage: `Schedule updates to this page`,
            description: `Tooltip for starting to schedule updates to a Page`,
          })),
      (t[3] = n),
      (t[4] = a),
      (t[5] = s))
    : (s = t[5]);
  let l;
  t[6] === i
    ? (l = t[7])
    : ((l = i.formatMessage({
        id: `codex.pages.automations.button`,
        defaultMessage: `Page automations`,
        description: `Open the automations attached to this Page or start setting one up`,
      })),
      (t[6] = i),
      (t[7] = l));
  let u = a ? `text-blue` : void 0,
    d;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = { 16: O, 20: k }), (t[8] = d)) : (d = t[8]);
  let p;
  t[9] === u ? (p = t[10]) : ((p = (0, J.jsx)(c, { className: u, icon: d })), (t[9] = u), (t[10] = p));
  let m;
  t[11] !== r || t[12] !== l || t[13] !== p
    ? ((m = (0, J.jsx)(V, { ...r, uniform: !0, "aria-label": l, children: p })),
      (t[11] = r),
      (t[12] = l),
      (t[13] = p),
      (t[14] = m))
    : (m = t[14]);
  let h;
  return (
    t[15] !== o || t[16] !== s || t[17] !== m
      ? ((h = (0, J.jsx)(ie, { side: `bottom`, triggerPopupOpen: o, tooltipContent: s, children: m })),
        (t[15] = o),
        (t[16] = s),
        (t[17] = m),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
var Ke, J;
function qe() {
  return (qe = e(() => {
    ((Ke = K()), I(), S(), R(), j(), o(), (J = q()));
  }))();
}
var Je;
function Ye() {
  return (Ye = e(() => {
    Je = `` + new URL(`space-recovery-2a4b61a0b3c3.png`, import.meta.url).href;
  }))();
}
function Xe(e) {
  let n = (0, Qe.c)(28),
    r = T(),
    [i, a] = (0, Y.useState)(null),
    o = e.kind ?? `load`,
    s;
  n[0] !== e.experience || n[1] !== o
    ? ((s = (0, X.jsx)(Ie, { tracker: e.experience, kind: o })),
      (n[0] = e.experience),
      (n[1] = o),
      (n[2] = s))
    : (s = n[2]);
  let c = e.kind === `sync`,
    l = e.documentType ?? `page`,
    d;
  n[3] === l
    ? (d = n[4])
    : ((d = (0, X.jsx)(f, {
        id: `codex.space.page.connectionFailed.byDocumentType`,
        values: { documentType: l },
        defaultMessage: `{documentType, select, granola_presentation {We’re having trouble loading this slide} granola_workbook {We’re having trouble loading this sheet} other {We’re having trouble loading this page}}`,
        description: `Heading when a Page connection fails or its initial content has not loaded after a timeout. documentType selects slide, sheet, or page for the current document.`,
      })),
      (n[3] = l),
      (n[4] = d));
  let p;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, X.jsx)(`p`, {
        className: `text-base text-secondary`,
        children: (0, X.jsx)(f, {
          id: `codex.space.page.connectionHelp`,
          defaultMessage: `Check your connection and try again`,
          description: `Recovery guidance for a failed or stalled Page connection`,
        }),
      })),
      (n[5] = p))
    : (p = n[5]);
  let m;
  n[6] === e
    ? (m = n[7])
    : ((m =
        e.actions ??
        (0, X.jsx)(t, {
          size: `large`,
          onClick: () => {
            let t = e.experience?.startRetry();
            (e.onRetry(), t?.requestCompleted());
          },
          children: (0, X.jsx)(f, {
            id: `codex.space.page.connectionTryAgain`,
            defaultMessage: `Try again`,
            description: `Retry a failed or stalled Page connection`,
          }),
        })),
      (n[6] = e),
      (n[7] = m));
  let h;
  n[8] !== e.errorCode || n[9] !== e.pageId || n[10] !== e.session
    ? ((h = (t) => {
        let n = e.session?.getConnectionEndpoint() ?? null;
        a(
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
      (n[8] = e.errorCode),
      (n[9] = e.pageId),
      (n[10] = e.session),
      (n[11] = h))
    : (h = n[11]);
  let g;
  n[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, X.jsxs)(`summary`, {
        className: `mx-auto flex w-fit cursor-interaction items-center gap-1 text-xs font-medium text-tertiary select-none`,
        children: [
          (0, X.jsx)(f, {
            id: `codex.space.page.connectionItDetails`,
            defaultMessage: `Details for IT`,
            description: `Expand inline connection diagnostics that the user can copy and share with their IT team`,
          }),
          (0, X.jsx)(u, { className: `-rotate-90 group-open:rotate-0` }),
        ],
      })),
      (n[12] = g))
    : (g = n[12]);
  let _;
  n[13] !== i || n[14] !== r || n[15] !== e.documentType
    ? ((_ =
        i != null &&
        (0, X.jsxs)(`div`, {
          className: `mt-4 flex min-w-0 flex-col gap-3`,
          role: `region`,
          "aria-label": r.formatMessage(
            {
              id: `codex.space.page.connectionDiagnostics.byDocumentType`,
              defaultMessage: `{documentType, select, granola_presentation {Slide connection diagnostics} granola_workbook {Sheet connection diagnostics} other {Page connection diagnostics}}`,
              description: `Label for selectable connection details including the WebSocket endpoint without credentials, identifiers, capture time and error code. documentType selects slide, sheet, or page for the current document.`,
            },
            { documentType: e.documentType ?? `page` },
          ),
          children: [
            (0, X.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: (0, X.jsx)(f, {
                id: `codex.space.page.connectionItGuidance`,
                defaultMessage: `If this keeps happening, your IT team may need to check your network settings. Share these details with them.`,
                description: `Guidance inside expandable Page connection diagnostics; a network configuration issue is possible but has not been confirmed`,
              }),
            }),
            (0, X.jsx)(H, {
              content: i,
              language: `json`,
              shouldWrapCode: !0,
              title: (0, X.jsx)(f, {
                id: `codex.space.page.connectionDetailsTitle`,
                defaultMessage: `Connection details`,
                description: `Title of the copyable Page connection diagnostics`,
              }),
              copyButtonText: r.formatMessage({
                id: `codex.space.page.connectionCopyDetails`,
                defaultMessage: `Copy details`,
                description: `Copy Page connection diagnostics for sharing with an IT team`,
              }),
            }),
          ],
        })),
      (n[13] = i),
      (n[14] = r),
      (n[15] = e.documentType),
      (n[16] = _))
    : (_ = n[16]);
  let v;
  n[17] !== h || n[18] !== _
    ? ((v = (0, X.jsxs)(`details`, {
        className: `group w-full max-w-md text-start`,
        onToggle: h,
        children: [g, _],
      })),
      (n[17] = h),
      (n[18] = _),
      (n[19] = v))
    : (v = n[19]);
  let y;
  n[20] !== v || n[21] !== c || n[22] !== d || n[23] !== m
    ? ((y = (0, X.jsx)(me, {
        compact: c,
        embedded: !0,
        illustration: Je,
        title: d,
        description: p,
        actions: m,
        details: v,
      })),
      (n[20] = v),
      (n[21] = c),
      (n[22] = d),
      (n[23] = m),
      (n[24] = y))
    : (y = n[24]);
  let b;
  return (
    n[25] !== s || n[26] !== y
      ? ((b = (0, X.jsxs)(X.Fragment, { children: [s, y] })), (n[25] = s), (n[26] = y), (n[27] = b))
      : (b = n[27]),
    b
  );
}
function Ze(e) {
  let t = (0, Qe.c)(19),
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
    [l, u] = (0, Y.useState)(Date.now),
    [d, f] = (0, Y.useState)(!1),
    p,
    m;
  (t[6] !== c || t[7] !== s || t[8] !== l
    ? ((p = () => {
        if (!s || c) return;
        let e,
          t = () => {
            clearTimeout(e);
            let n = l + $e - Date.now();
            n <= 0 ? f(!0) : (e = setTimeout(t, n));
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
      (m = [s, c, l]),
      (t[6] = c),
      (t[7] = s),
      (t[8] = l),
      (t[9] = p),
      (t[10] = m))
    : ((p = t[9]), (m = t[10])),
    (0, Y.useEffect)(p, m));
  let h;
  return (
    t[11] !== n ||
    t[12] !== c ||
    t[13] !== r ||
    t[14] !== s ||
    t[15] !== i ||
    t[16] !== e.errorCode ||
    t[17] !== d
      ? ((h =
          s && (c || d)
            ? (0, X.jsx)(`div`, {
                className: `flex min-h-0 flex-1 items-center justify-center p-4`,
                children: (0, X.jsx)(Xe, {
                  ...r,
                  errorCode: e.errorCode ?? (c ? `page_load_failed` : `page_load_timeout`),
                  onRetry: () => {
                    (f(!1), u(Date.now()), i == null ? window.location.reload() : i());
                  },
                }),
              })
            : (0, X.jsx)(X.Fragment, { children: n })),
        (t[11] = n),
        (t[12] = c),
        (t[13] = r),
        (t[14] = s),
        (t[15] = i),
        (t[16] = e.errorCode),
        (t[17] = d),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
var Qe, Y, X, $e;
function et() {
  return (et = e(() => {
    ((Qe = K()), (Y = se()), I(), Fe(), ae(), G(), S(), he(), Ye(), (X = q()), ($e = 3e4));
  }))();
}
function tt(e, t, n) {
  if (t === `"` || t === `'`) {
    let n = e.length === 0 || /[\s{[(<'"‘“]/.test(e.slice(-1));
    return { shortcut: t, glyph: (t === `"` ? `“”` : `‘’`)[+!n], from: e.length, continuation: !1 };
  }
  if (t.length !== 1 || !`.=>-`.includes(t)) return;
  let r = t === `>` && ((n === `<-` && e.endsWith(`←`)) || (n === `<=` && e.endsWith(`≤`))),
    i = (r ? n : e.slice(-2)) + t,
    a = it.find(([e]) => i.endsWith(e));
  return a == null
    ? void 0
    : { shortcut: a[0], glyph: a[1], from: e.length - (r ? 1 : a[0].length - 1), continuation: r };
}
function nt(e, t, n, r) {
  if (rt(e, n) || (e.includes(`](`) && e.lastIndexOf(`](`) > e.lastIndexOf(`)`))) return !0;
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
  for (let e of a.matchAll(/`+/g)) o === e[0] ? (o = void 0) : o == null && !rt(a, e.index) && (o = e[0]);
  return o != null;
}
function rt(e, t) {
  let n = t;
  for (; n > 0 && e[n - 1] === `\\`;) --n;
  return (t - n) % 2 == 1;
}
var it;
function at() {
  return (at = e(() => {
    it = [
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
function ot(e) {
  let t = (0, ct.c)(24),
    r = T(),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = p()), (t[0] = i)) : (i = t[0]);
  let a = n(i.smartPunctuationEnabled),
    o = (0, lt.useRef)(void 0),
    s = (0, lt.useRef)(!1),
    c;
  t[1] === r
    ? (c = t[2])
    : ((c = r.formatMessage({
        id: `codex.space.page.titleLabel`,
        defaultMessage: `Page title`,
        description: `Accessible label for the editable title input above a Page document in the Space`,
      })),
      (t[1] = r),
      (t[2] = c));
  let l;
  t[3] === r ? (l = t[4]) : ((l = r.formatMessage(_e.untitled)), (t[3] = r), (t[4] = l));
  let u;
  t[5] === e.onPaste
    ? (u = t[6])
    : ((u = (t) => {
        ((o.current = void 0), st(t, e.onPaste, s));
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
  let m;
  t[10] !== e || t[11] !== a
    ? ((m = (t) => {
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
          f = tt(d, c, i?.caret === u - 1 && i.value === d + l.slice(u) ? i.shortcut : void 0);
        f == null ||
          nt(d, c, f.from) ||
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
      (t[12] = m))
    : (m = t[12]);
  let h;
  t[13] === e
    ? (h = t[14])
    : ((h = (t) => {
        ((o.current = void 0), e.onBlur?.(t));
      }),
      (t[13] = e),
      (t[14] = h));
  let g;
  return (
    t[15] !== e ||
    t[16] !== c ||
    t[17] !== l ||
    t[18] !== u ||
    t[19] !== d ||
    t[20] !== f ||
    t[21] !== m ||
    t[22] !== h
      ? ((g = (0, ut.jsx)(`textarea`, {
          ...e,
          className: `${Re.PageTitle} relative block field-sizing-content w-full min-w-0 resize-none overflow-hidden border-none bg-transparent font-semibold break-words text-default outline-none`,
          "aria-label": c,
          "aria-multiline": !1,
          placeholder: l,
          rows: 1,
          onPaste: u,
          onKeyDown: d,
          onSelect: f,
          onInput: m,
          onBlur: h,
        })),
        (t[15] = e),
        (t[16] = c),
        (t[17] = l),
        (t[18] = u),
        (t[19] = d),
        (t[20] = f),
        (t[21] = m),
        (t[22] = h),
        (t[23] = g))
      : (g = t[23]),
    g
  );
}
function st(e, t, n) {
  n.current = !0;
  try {
    t?.(e);
  } finally {
    n.current = !1;
  }
}
var ct, lt, ut;
function dt() {
  return (dt = e(() => {
    ((ct = K()), g(), (lt = se()), I(), Se(), D(), at(), Le(), (ut = q()));
  }))();
}
function ft() {
  return (ft = e(() => {}))();
}
function pt(e) {
  let t = (0, mt.c)(12),
    { children: n, emoji: r, findContextId: i } = e,
    a = E(Me),
    o = E(Oe),
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
      t[6] === n ? (e = t[7]) : ((e = (0, Z.jsx)(Z.Fragment, { children: n })), (t[6] = n), (t[7] = e)),
      e
    );
  }
  let l = o?.id === c.id ? `` : void 0,
    u;
  return (
    t[8] !== n || t[9] !== c.location.from || t[10] !== l
      ? ((u = (0, Z.jsx)(`mark`, {
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
var mt, Z;
function ht() {
  return (ht = e(() => {
    ((mt = K()), x(), we(), (Z = q()));
  }))();
}
function gt(e) {
  let n = (0, yt.c)(79),
    r = T(),
    [i, o] = (0, bt.useState)(!1),
    s = Ee(),
    c = ke(s),
    { symbol: l, disabled: u, space: f, spaceTheme: p } = e,
    m = l != null && l.kind !== `none`,
    h = e.hideWhenEmpty && !m,
    g = l?.kind === `icon` ? l.color : p,
    v;
  n[0] !== g || n[1] !== c ? ((v = ye(g, c)), (n[0] = g), (n[1] = c), (n[2] = v)) : (v = n[2]);
  let y = v;
  if (((u || h) && i && o(!1), h)) return null;
  let b;
  n[3] === r
    ? (b = n[4])
    : ((b = r.formatMessage({
        id: `codex.space.page.symbol.change`,
        defaultMessage: `Change icon`,
        description: `Accessible label and tooltip for the shared Page and Space symbol picker beside the title`,
      })),
      (n[3] = r),
      (n[4] = b));
  let x = b,
    S;
  n[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((S = (0, Q.jsx)(_, {})), (n[5] = S)) : (S = n[5]);
  let C = S;
  if (l?.kind === `emoji`) {
    let e = f && `justify-center`,
      t;
    n[6] === e ? (t = n[7]) : ((t = ne(`flex size-full items-center`, e)), (n[6] = e), (n[7] = t));
    let r;
    n[8] === l.value
      ? (r = n[9])
      : ((r = (0, Q.jsx)(Ne, { emoji: l.value, size: `large` })), (n[8] = l.value), (n[9] = r));
    let i;
    (n[10] !== t || n[11] !== r
      ? ((i = (0, Q.jsx)(`span`, { className: t, children: r })), (n[10] = t), (n[11] = r), (n[12] = i))
      : (i = n[12]),
      (C = i));
  } else if (m) {
    let e = f && `justify-center`,
      t;
    n[13] === e ? (t = n[14]) : ((t = ne(`flex size-full items-center`, e)), (n[13] = e), (n[14] = t));
    let r = l?.kind === `icon` ? l.color : p,
      i;
    n[15] === f ? (i = n[16]) : ((i = f ? (0, Q.jsx)(re, {}) : (0, Q.jsx)(_, {})), (n[15] = f), (n[16] = i));
    let a = l?.kind === `icon` ? l.value : null,
      o;
    n[17] !== r || n[18] !== i || n[19] !== a
      ? ((o = (0, Q.jsx)(Ce, { className: `size-8`, color: r, defaultIcon: i, icon: a })),
        (n[17] = r),
        (n[18] = i),
        (n[19] = a),
        (n[20] = o))
      : (o = n[20]);
    let s;
    (n[21] !== t || n[22] !== o
      ? ((s = (0, Q.jsx)(`span`, { className: t, children: o })), (n[21] = t), (n[22] = o), (n[23] = s))
      : (s = n[23]),
      (C = s));
  }
  if (e.legacyEmoji != null) {
    let t;
    (n[24] !== C || n[25] !== e.findContextId || n[26] !== e.legacyEmoji
      ? ((t = (0, Q.jsx)(pt, { emoji: e.legacyEmoji, findContextId: e.findContextId, children: C })),
        (n[24] = C),
        (n[25] = e.findContextId),
        (n[26] = e.legacyEmoji),
        (n[27] = t))
      : (t = n[27]),
      (C = t));
  }
  let w = m ? `ghostMuted` : `ghost`;
  f && m && (w = y == null ? `secondary` : `tinted`);
  let E = m
      ? `self-start`
      : `absolute end-0 top-1/2 -translate-y-1/2 opacity-0 group-focus-within/page-title:opacity-100 group-hover/page-title:opacity-100 data-[state=open]:opacity-100 pointer-coarse:opacity-100`,
    D = m ? void 0 : `small`,
    O = m ? `iconLarge` : `compact`,
    te = !m,
    k;
  n[28] !== y || n[29] !== m || n[30] !== f
    ? ((k = f && m ? { color: y ?? void 0 } : void 0), (n[28] = y), (n[29] = m), (n[30] = f), (n[31] = k))
    : (k = n[31]);
  let A;
  n[32] !== w ||
  n[33] !== u ||
  n[34] !== C ||
  n[35] !== x ||
  n[36] !== E ||
  n[37] !== D ||
  n[38] !== O ||
  n[39] !== te ||
  n[40] !== k
    ? ((A = (0, Q.jsx)(t, {
        className: E,
        "aria-label": x,
        color: w,
        disabled: u,
        onClick: vt,
        radius: D,
        size: O,
        uniform: te,
        style: k,
        type: `button`,
        children: C,
      })),
      (n[32] = w),
      (n[33] = u),
      (n[34] = C),
      (n[35] = x),
      (n[36] = E),
      (n[37] = D),
      (n[38] = O),
      (n[39] = te),
      (n[40] = k),
      (n[41] = A))
    : (A = n[41]);
  let j = A;
  if (u) {
    if (!m) return null;
    let e;
    return (
      n[42] !== j || n[43] !== C || n[44] !== f
        ? ((e = f
            ? j
            : (0, Q.jsx)(`span`, {
                className: `flex size-16 items-center justify-center border border-transparent`,
                children: C,
              })),
          (n[42] = j),
          (n[43] = C),
          (n[44] = f),
          (n[45] = e))
        : (e = n[45]),
      e
    );
  }
  let M;
  n[46] === m
    ? (M = n[47])
    : ((M = m ? `self-start` : ne(Re.PageTitle, `absolute top-0 end-full pe-2 font-semibold`)),
      (n[46] = m),
      (n[47] = M));
  let N = m ? `flex` : `relative inline-block h-[1cap] align-baseline`,
    P;
  n[48] === j ? (P = n[49]) : ((P = (0, Q.jsx)(d, { asChild: !0, children: j })), (n[48] = j), (n[49] = P));
  let F;
  n[50] !== x || n[51] !== i || n[52] !== P
    ? ((F = (0, Q.jsx)(ie, { tooltipContent: x, disableHoverOpen: i, children: P })),
      (n[50] = x),
      (n[51] = i),
      (n[52] = P),
      (n[53] = F))
    : (F = n[53]);
  let I;
  n[54] !== N || n[55] !== F
    ? ((I = (0, Q.jsx)(`span`, { className: N, children: F })), (n[54] = N), (n[55] = F), (n[56] = I))
    : (I = n[56]);
  let L;
  n[57] !== M || n[58] !== I
    ? ((L = (0, Q.jsx)(`div`, { className: M, children: I })), (n[57] = M), (n[58] = I), (n[59] = L))
    : (L = n[59]);
  let R = f && m ? 6 : void 0,
    z;
  n[60] === e
    ? (z = n[61])
    : ((z =
        e.onClose == null
          ? void 0
          : (t) => {
              (t.preventDefault(), e.onClose?.());
            }),
      (n[60] = e),
      (n[61] = z));
  let B = !f || l?.kind === `emoji` ? `emoji` : `icon`,
    V,
    H;
  n[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = () => o(!1)), (H = () => o(!1)), (n[62] = V), (n[63] = H))
    : ((V = n[62]), (H = n[63]));
  let U;
  n[64] !== u || n[65] !== e.onChange || n[66] !== l || n[67] !== B || n[68] !== p
    ? ((U = (0, Q.jsx)(xe, {
        disabled: u,
        value: l,
        defaultColor: p,
        defaultKind: B,
        onChange: e.onChange,
        onSelect: V,
        onClear: H,
      })),
      (n[64] = u),
      (n[65] = e.onChange),
      (n[66] = l),
      (n[67] = B),
      (n[68] = p),
      (n[69] = U))
    : (U = n[69]);
  let W;
  n[70] !== x || n[71] !== R || n[72] !== z || n[73] !== U
    ? ((W = (0, Q.jsx)(a, {
        className: `z-50 outline-hidden`,
        "aria-label": x,
        align: `center`,
        sideOffset: R,
        onCloseAutoFocus: z,
        onClick: _t,
        unstyled: !0,
        children: U,
      })),
      (n[70] = x),
      (n[71] = R),
      (n[72] = z),
      (n[73] = U),
      (n[74] = W))
    : (W = n[74]);
  let G;
  return (
    n[75] !== i || n[76] !== L || n[77] !== W
      ? ((G = (0, Q.jsxs)(ee, { modal: !0, open: i, onOpenChange: o, children: [L, W] })),
        (n[75] = i),
        (n[76] = L),
        (n[77] = W),
        (n[78] = G))
      : (G = n[78]),
    G
  );
}
function _t(e) {
  return e.stopPropagation();
}
function vt(e) {
  return e.stopPropagation();
}
var yt, bt, Q;
function xt() {
  return (xt = e(() => {
    ((yt = K()),
      A(),
      (bt = se()),
      I(),
      ae(),
      S(),
      w(),
      j(),
      ue(),
      je(),
      pe(),
      Te(),
      Pe(),
      ht(),
      Le(),
      (Q = q()));
  }))();
}
function St(e) {
  let t = (0, Ct.c)(12),
    n,
    r;
  t[0] === e ? ((n = t[1]), (r = t[2])) : (({ action: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = T(),
    a;
  t[3] !== n || t[4] !== i ? ((a = i.formatMessage(Et[n])), (t[3] = n), (t[4] = i), (t[5] = a)) : (a = t[5]);
  let o = Tt[n],
    s;
  t[6] === o ? (s = t[7]) : ((s = (0, wt.jsx)(c, { icon: o })), (t[6] = o), (t[7] = s));
  let l;
  return (
    t[8] !== r || t[9] !== a || t[10] !== s
      ? ((l = (0, wt.jsx)(He, { ...r, appearance: `viewer`, label: a, children: s })),
        (t[8] = r),
        (t[9] = a),
        (t[10] = s),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
var Ct, wt, Tt, Et;
function Dt() {
  return (Dt = e(() => {
    ((Ct = K()),
      P(),
      U(),
      B(),
      M(),
      y(),
      L(),
      I(),
      S(),
      R(),
      ze(),
      (wt = q()),
      (Tt = {
        generate: { assets: { 16: N, 20: z } },
        image: { 16: l, 20: s },
        visualize: { assets: { 16: b, 20: v } },
        insert: { assets: { 16: F, 20: W } },
      }),
      (Et = r({
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
function Ot(e) {
  let t = (0, At.c)(12),
    { children: n, documentReady: r, fallbackTitle: i, pageId: a, session: o } = e,
    s = ce(be, a),
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
  let d = (0, jt.useSyncExternalStore)(o.subscribe, l, u),
    f;
  return (t[9] !== n || t[10] !== d ? ((f = n(d)), (t[9] = n), (t[10] = d), (t[11] = f)) : (f = t[11]), f);
}
function kt(e) {
  let t = (0, At.c)(6),
    { enabled: n, pageId: r, title: i } = e,
    a = m(Ae),
    o,
    s;
  return (
    t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i
      ? ((o = () => {
          n && i != null && De(a, r, i.trim() || r);
        }),
        (s = [n, r, a, i]),
        (t[0] = n),
        (t[1] = r),
        (t[2] = a),
        (t[3] = i),
        (t[4] = o),
        (t[5] = s))
      : ((o = t[4]), (s = t[5])),
    (0, jt.useEffect)(o, s),
    null
  );
}
var At, jt;
function Mt() {
  return (Mt = e(() => {
    ((At = K()), x(), (jt = se()), ge(), de(), ve());
  }))();
}
function Nt(e) {
  let t = (0, It.c)(13),
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
  t[5] === i ? (o = t[6]) : ((o = (e) => (0, $.jsx)(Pt, { ...i, title: e })), (t[5] = i), (t[6] = o));
  let s;
  return (
    t[7] !== n || t[8] !== r || t[9] !== i.pageId || t[10] !== a || t[11] !== o
      ? ((s = (0, $.jsx)(Ot, {
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
function Pt(e) {
  let t = (0, It.c)(14),
    { menu: n, files: r, triggerRef: i, ...a } = e,
    o = T(),
    s = E(le),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(c, { icon: { 16: h, 20: te } })), (t[0] = l))
    : (l = t[0]);
  let u = l,
    d,
    f,
    p,
    m;
  if (t[1] !== r || t[2] !== n) {
    let e = n?.items.findIndex(Ft) ?? -1;
    ((d = n != null && (0, $.jsx)(Ue, { menu: n, items: e < 0 ? n.items : n.items.slice(0, e) })),
      t[7] === r ? (f = t[8]) : ((f = r != null && (0, $.jsx)(C.Separator, {})), (t[7] = r), (t[8] = f)),
      (p = r),
      (m = n != null && e >= 0 && (0, $.jsx)(Ue, { menu: n, items: n.items.slice(e) })),
      (t[1] = r),
      (t[2] = n),
      (t[3] = d),
      (t[4] = f),
      (t[5] = p),
      (t[6] = m));
  } else ((d = t[3]), (f = t[4]), (p = t[5]), (m = t[6]));
  let g;
  t[9] !== d || t[10] !== f || t[11] !== p || t[12] !== m
    ? ((g = (0, $.jsxs)($.Fragment, { children: [d, f, p, m] })),
      (t[9] = d),
      (t[10] = f),
      (t[11] = p),
      (t[12] = m),
      (t[13] = g))
    : (g = t[13]);
  let _ = g;
  return s
    ? (0, $.jsx)(Be, {
        ...a,
        menu: {
          open: n?.open,
          onOpenChange: n?.onOpenChange,
          onCloseAutoFocus: n?.onCloseAutoFocus,
          triggerRef: i,
          icon: u,
          actions: _,
        },
      })
    : (0, $.jsx)(oe, {
        title: a.title?.trim() || o.formatMessage(_e.untitled),
        icon: u,
        open: n?.open,
        onOpenChange: n?.onOpenChange,
        onCloseAutoFocus: n?.onCloseAutoFocus,
        triggerRef: i,
        children: _,
      });
}
function Ft(e) {
  return e.id === `page-delete-separator` || e.id === `space-delete-separator`;
}
var It, $;
function Lt() {
  return (Lt = e(() => {
    ((It = K()), x(), I(), i(), S(), R(), fe(), Se(), o(), Mt(), We(), Ve(), ($ = q()));
  }))();
}
export {
  Xe as _,
  kt as a,
  Ge as b,
  Dt as c,
  ft as d,
  ot as f,
  nt as g,
  at as h,
  Ot as i,
  gt as l,
  tt as m,
  Nt as n,
  Mt as o,
  dt as p,
  Lt as r,
  St as s,
  Pt as t,
  xt as u,
  Ze as v,
  qe as x,
  et as y,
};
//# sourceMappingURL=title-menu-e11b34d28710.js.map
