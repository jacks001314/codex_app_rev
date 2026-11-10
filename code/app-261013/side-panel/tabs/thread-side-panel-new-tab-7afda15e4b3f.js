import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $R as r,
  AH as i,
  AO as a,
  CO as o,
  CPt as s,
  IDt as c,
  Ixt as l,
  Iz as u,
  JR as d,
  Jyt as f,
  Kat as p,
  Lz as m,
  ND as h,
  NV as g,
  PD as _,
  Pxt as v,
  QR as y,
  Rnt as b,
  Rq as x,
  SPt as S,
  Sj as C,
  TC as w,
  TJ as T,
  TO as E,
  VDt as D,
  Vxt as O,
  YR as k,
  _Mt as A,
  _wt as j,
  ast as M,
  b7 as N,
  bz as P,
  cz as F,
  dk as I,
  gMt as L,
  gwt as R,
  hEt as z,
  iq as B,
  jDt as V,
  mEt as H,
  qat as U,
  rst as ee,
  sj as W,
  sz as te,
  t3 as ne,
  uk as re,
  vzt as G,
  xMt as K,
  xz as ie,
  yzt as ae,
  zxt as oe,
} from "./app-shared-bbfeca5e5737.js";
import {
  $F as se,
  Awn as ce,
  C$n as le,
  C2n as ue,
  Cwr as de,
  E$n as fe,
  FF as pe,
  Hnt as me,
  I3n as he,
  J5t as ge,
  Jwn as _e,
  Jxn as ve,
  K5t as ye,
  LWt as be,
  O$n as xe,
  Otr as Se,
  PF as Ce,
  QCr as we,
  QDr as Te,
  QF as Ee,
  RCr as De,
  RWt as Oe,
  Rnt as ke,
  Txn as Ae,
  Uwn as je,
  Wwn as Me,
  XDr as Ne,
  XSt as Pe,
  Xwn as Fe,
  Ytr as Ie,
  b3n as Le,
  cI as Re,
  ci as ze,
  dxn as Be,
  eI as Ve,
  fSn as He,
  gWt as Ue,
  gwr as We,
  iur as Ge,
  jwn as Ke,
  kCr as qe,
  ktr as Je,
  lDn as Ye,
  lSn as Xe,
  ltt as Ze,
  lxn as Qe,
  ott as $e,
  oxn as et,
  pWt as tt,
  qtr as nt,
  qxn as rt,
  rur as it,
  sI as at,
  si as ot,
  stt as st,
  tDn as ct,
  tI as lt,
  v3n as ut,
  w$n as dt,
  yxn as ft,
} from "./app-initial-5851df3f6cb1.js";
import { l as pt, o as mt, r as ht } from "./layout-eabb971533f7.js";
import { n as gt, t as _t } from "./local-conversation-summary-panel-image-preview-25ab40ac8cea.js";
function vt(e, t, n) {
  let r = Qe(t.target);
  if (!r.isCurrentTabInstance(e, t.tab)) return !1;
  let i = t.tab.tabId;
  if (
    t.tab.tabType.kind !== `workspace-new-tab` &&
    (t.tab.tabType.kind !== `browser` ||
      t.conversationId == null ||
      !be.canReplaceNewTab(t.conversationId, f(i)))
  )
    return !1;
  switch (n.kind) {
    case `action`:
      return (Te(e, N, { actionKind: `launch-action` }), n.action.onSelect(i), !0);
    case `chat`:
      return (e.get(Fe) || e.get(we)) && !e.get(Me) && !(e.get(we) && t.target === `right`)
        ? !1
        : (Te(e, N, { actionKind: `switch-tab` }),
          Ue(e, e.get(ve).chat),
          r.closeTab(e, i, { recordCloseUndo: !1 }),
          ft(),
          !0);
    case `tab`: {
      let { tab: t, target: a } = n;
      return (
        e.get(Qe(a).tabById$, t.tabId)?.dndId === t.dndId &&
        (Te(e, N, { actionKind: `switch-tab` }),
        et(e, a, t.tabId, { restoreFocus: !0 }),
        r.closeTab(e, i, { recordCloseUndo: !1 }),
        !0)
      );
    }
  }
}
function yt() {
  return (yt = e(() => {
    (b(), ee(), De(), Oe(), w(), Ae(), Ne(), Be(), tt(), je(), _e(), rt(), Pe());
  }))();
}
var bt, xt, St;
function Ct() {
  return (Ct = e(() => {
    ((bt = `_list_3enou_1`), (xt = `_row_3enou_18`), (St = { list: bt, row: xt }));
  }))();
}
function wt(e) {
  let t = (0, Et.c)(52),
    { artifacts: r, onOpen: i, replaceTabId: a } = e,
    o = D(),
    s = k(),
    l = (0, q.useRef)(null),
    [u, d] = (0, q.useState)(!1),
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = { top: !0, bottom: !0 }), (t[0] = f)) : (f = t[0]);
  let [p, m] = (0, q.useState)(f),
    h;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = () => {
        let e = l.current;
        if (e == null) return;
        let t = e.scrollTop < 1,
          n = e.scrollTop + e.clientHeight >= e.scrollHeight - 1;
        m((e) => (e.top === t && e.bottom === n ? e : { top: t, bottom: n }));
      }),
      (t[1] = h))
    : (h = t[1]);
  let _ = ie(h),
    v;
  t[2] === _
    ? (v = t[3])
    : ((v = () => {
        let e = l.current,
          t = e?.closest(`[data-new-tab-scroll-root]`);
        if (e == null || t == null) return;
        let n = () => {
            let n = e.firstElementChild;
            if (!(n instanceof HTMLElement) || n.offsetHeight === 0) return;
            let r = n.offsetHeight,
              i = t.getBoundingClientRect(),
              a = t.offsetHeight > 0 ? i.height / t.offsetHeight : 1,
              o = (e.getBoundingClientRect().top - i.top) / (a || 1) + t.scrollTop,
              s = parseFloat(getComputedStyle(t).paddingBottom) || 0,
              c = Math.max(2, Math.floor((t.clientHeight - o - s - r / 2) / r));
            ((e.style.maxHeight = `${Math.min(6, c + 0.5) * r}px`),
              e.style.setProperty(`--recent-row-height`, `${r}px`),
              _());
          },
          r = new ResizeObserver(n);
        return (
          r.observe(t),
          t.firstElementChild != null && r.observe(t.firstElementChild),
          r.observe(e),
          n(),
          () => r.disconnect()
        );
      }),
      (t[2] = _),
      (t[3] = v));
  let y;
  (t[4] !== r.length || t[5] !== _
    ? ((y = [r.length, _]), (t[4] = r.length), (t[5] = _), (t[6] = y))
    : (y = t[6]),
    (0, q.useEffect)(v, y));
  let b;
  t[7] === s
    ? (b = t[8])
    : ((b = (e) => {
        d(!0);
        let t = l.current,
          n = t?.firstElementChild;
        if (t == null || !(n instanceof HTMLElement)) return;
        let r = n.offsetHeight || t.clientHeight,
          i = Math.max(1, Math.floor((t.clientHeight - r / 2) / r));
        t.scrollBy({ top: e * i * r, behavior: s ? `instant` : `smooth` });
      }),
      (t[7] = s),
      (t[8] = b));
  let x = b,
    S;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, J.jsx)(`h3`, {
        className: `text-sm font-medium text-default`,
        children: (0, J.jsx)(c, {
          id: `threadWorkspace.newTab.recentWork.heading`,
          defaultMessage: `Recents`,
          description: `Heading for recent work on New Tab`,
        }),
      })),
      (t[9] = S))
    : (S = t[9]);
  let C = p.top,
    w;
  t[10] === o
    ? (w = t[11])
    : ((w = o.formatMessage({
        id: `threadWorkspace.newTab.recents.up`,
        defaultMessage: `Scroll recents up`,
        description: `Scroll recent work upward by whole rows`,
      })),
      (t[10] = o),
      (t[11] = w));
  let T;
  t[12] === x ? (T = t[13]) : ((T = () => x(-1)), (t[12] = x), (t[13] = T));
  let E;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, J.jsx)(g, { className: `rotate-180` })), (t[14] = E))
    : (E = t[14]);
  let O;
  t[15] !== p.top || t[16] !== w || t[17] !== T
    ? ((O = (0, J.jsx)(n, {
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        disabled: C,
        "aria-label": w,
        onClick: T,
        children: E,
      })),
      (t[15] = p.top),
      (t[16] = w),
      (t[17] = T),
      (t[18] = O))
    : (O = t[18]);
  let A = p.bottom,
    j;
  t[19] === o
    ? (j = t[20])
    : ((j = o.formatMessage({
        id: `threadWorkspace.newTab.recents.down`,
        defaultMessage: `Scroll recents down`,
        description: `Scroll recent work downward by whole rows`,
      })),
      (t[19] = o),
      (t[20] = j));
  let M;
  t[21] === x ? (M = t[22]) : ((M = () => x(1)), (t[21] = x), (t[22] = M));
  let N;
  t[23] === Symbol.for(`react.memo_cache_sentinel`) ? ((N = (0, J.jsx)(g, {})), (t[23] = N)) : (N = t[23]);
  let P;
  t[24] !== p.bottom || t[25] !== j || t[26] !== M
    ? ((P = (0, J.jsx)(n, {
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        disabled: A,
        "aria-label": j,
        onClick: M,
        children: N,
      })),
      (t[24] = p.bottom),
      (t[25] = j),
      (t[26] = M),
      (t[27] = P))
    : (P = t[27]);
  let F;
  t[28] !== O || t[29] !== P
    ? ((F = (0, J.jsxs)(`div`, {
        className: `flex items-center justify-between gap-2`,
        children: [S, (0, J.jsxs)(`div`, { className: `flex items-center gap-1`, children: [O, P] })],
      })),
      (t[28] = O),
      (t[29] = P),
      (t[30] = F))
    : (F = t[30]);
  let I;
  t[31] === o
    ? (I = t[32])
    : ((I = o.formatMessage({
        id: `threadWorkspace.newTab.recents.list`,
        defaultMessage: `Recent work`,
        description: `Scrollable list of recent work`,
      })),
      (t[31] = o),
      (t[32] = I));
  let L = p.bottom,
    R,
    z,
    B;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = () => d(!0)), (z = () => d(!0)), (B = () => d(!0)), (t[33] = R), (t[34] = z), (t[35] = B))
    : ((R = t[33]), (z = t[34]), (B = t[35]));
  let V;
  if (t[36] !== r || t[37] !== i || t[38] !== a) {
    let e;
    (t[40] !== i || t[41] !== a
      ? ((e = (e) => (0, J.jsx)(Tt, { artifact: e, onOpen: i, replaceTabId: a }, Ee(e))),
        (t[40] = i),
        (t[41] = a),
        (t[42] = e))
      : (e = t[42]),
      (V = r.map(e)),
      (t[36] = r),
      (t[37] = i),
      (t[38] = a),
      (t[39] = V));
  } else V = t[39];
  let H;
  t[43] !== p.bottom || t[44] !== u || t[45] !== I || t[46] !== V || t[47] !== _
    ? ((H = (0, J.jsx)(`ul`, {
        ref: l,
        "aria-label": I,
        "data-at-bottom": L,
        "data-interacted": u,
        onWheel: R,
        onTouchStart: z,
        onKeyDown: B,
        className: St.list,
        onScroll: _,
        children: V,
      })),
      (t[43] = p.bottom),
      (t[44] = u),
      (t[45] = I),
      (t[46] = V),
      (t[47] = _),
      (t[48] = H))
    : (H = t[48]);
  let U;
  return (
    t[49] !== F || t[50] !== H
      ? ((U = (0, J.jsxs)(`section`, { className: `flex min-w-0 flex-col gap-3`, children: [F, H] })),
        (t[49] = F),
        (t[50] = H),
        (t[51] = U))
      : (U = t[51]),
    U
  );
}
function Tt(e) {
  let t = (0, Et.c)(43),
    { artifact: n, onOpen: r, replaceTabId: i } = e,
    a = l(We),
    o = D(),
    s = O(Ye),
    u = O(Ge),
    d;
  t[0] !== s || t[1] !== u
    ? ((d =
        p.libraryFiles != null && s.kind === `local`
          ? (e) => (u === `windows` && !M(e) ? null : _t(e))
          : void 0),
      (t[0] = s),
      (t[1] = u),
      (t[2] = d))
    : (d = t[2]);
  let f = d,
    m,
    h;
  t[3] === n
    ? ((m = t[4]), (h = t[5]))
    : ((m = se(n)),
      (h = (n.type === `file` || n.type === `generated-image`) && Se(m)),
      (t[3] = n),
      (t[4] = m),
      (t[5] = h));
  let g = h,
    _,
    v;
  t[6] === n
    ? ((_ = t[7]), (v = t[8]))
    : ((v = Ve(n)),
      (_ =
        n.type === `appgen-app` || n.type === `website`
          ? `website`
          : n.type === `google-drive`
            ? n.resourceKind
            : n.type === `external-resource`
              ? (nt(n.resource.mimeType) ?? Ie(n.resource.url) ?? re(v, n.resource.mimeType ?? void 0))
              : re(v)),
      (t[6] = n),
      (t[7] = _),
      (t[8] = v));
  let { producedAtMs: y } = n,
    b = y != null && Number.isFinite(y) ? new Date(y) : null,
    x = ge(),
    S = b?.toDateString() === x.toDateString(),
    C = St,
    w = te,
    T;
  t[9] !== n || t[10] !== f || t[11] !== s || t[12] !== m || t[13] !== r || t[14] !== i || t[15] !== a
    ? ((T = (e) => {
        Te(a, N, { actionKind: `artifact` });
        let t = n.type === `file` || n.type === `generated-image` ? n.path : null,
          o = t == null ? null : f?.(t);
        (t != null &&
          o != null &&
          ze(
            a,
            { alt: m, attachmentSrc: t, downloadSrc: o, referrerPolicy: `no-referrer`, src: o, title: m },
            { replaceTabId: i, durableIdentity: ke(s.id, t) },
          )) ||
          r(n, e, i);
      }),
      (t[9] = n),
      (t[10] = f),
      (t[11] = s),
      (t[12] = m),
      (t[13] = r),
      (t[14] = i),
      (t[15] = a),
      (t[16] = T))
    : (T = t[16]);
  let E;
  t[17] !== n || t[18] !== f
    ? ((E = (0, J.jsx)(`span`, {
        className: `flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-surface-elevated text-secondary`,
        children: (0, J.jsx)(Ce, {
          artifact: n,
          getImagePreviewSrc: f,
          iconClassName: `icon-xs`,
          imageClassName: `size-7 object-contain`,
        }),
      })),
      (t[17] = n),
      (t[18] = f),
      (t[19] = E))
    : (E = t[19]);
  let k;
  t[20] !== m || t[21] !== g
    ? ((k = g
        ? (0, J.jsx)(c, {
            id: `threadWorkspace.newTab.artifact.generatedImage`,
            defaultMessage: `Generated image`,
            description: `Generic label for a generated image in New Tab recent work`,
          })
        : m),
      (t[20] = m),
      (t[21] = g),
      (t[22] = k))
    : (k = t[22]);
  let A;
  t[23] === k
    ? (A = t[24])
    : ((A = (0, J.jsx)(mt, { "data-tooltip-overflow-target": !0, viewMode: `list`, children: k })),
      (t[23] = k),
      (t[24] = A));
  let j;
  t[25] === _
    ? (j = t[26])
    : ((j = (0, J.jsx)(ht, {
        className: `truncate`,
        children: (0, J.jsx)(c, {
          id: `threadWorkspace.newTab.artifact.fileType`,
          defaultMessage: `{fileType, select, artifactDocument {Document} document {Document} image {Image} pdf {PDF} presentation {Presentation} spreadsheet {Spreadsheet} website {Website} other {File}}`,
          description: `File type label for recent work on New Tab`,
          values: { fileType: _ },
        }),
      })),
      (t[25] = _),
      (t[26] = j));
  let P;
  t[27] !== A || t[28] !== j
    ? ((P = (0, J.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [A, j] })),
      (t[27] = A),
      (t[28] = j),
      (t[29] = P))
    : (P = t[29]);
  let F =
      b == null
        ? null
        : (0, J.jsx)(`time`, {
            className: `shrink-0 text-xs whitespace-nowrap text-secondary tabular-nums`,
            dateTime: b.toISOString(),
            title: o.formatDate(b, { dateStyle: `full`, timeStyle: `long` }),
            children: S
              ? o.formatTime(b, { hour: `numeric`, minute: `2-digit` })
              : o.formatDate(b, {
                  month: `short`,
                  day: `numeric`,
                  year: b.getFullYear() === x.getFullYear() ? void 0 : `numeric`,
                }),
          }),
    I;
  t[30] !== m || t[31] !== P || t[32] !== F || t[33] !== T || t[34] !== E
    ? ((I = (0, J.jsxs)(`button`, {
        "aria-label": m,
        className: `flex min-h-14 w-full min-w-0 cursor-interaction items-center gap-3 rounded-xl px-3 py-2 text-start text-default focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
        type: `button`,
        onClick: T,
        children: [E, P, F],
      })),
      (t[30] = m),
      (t[31] = P),
      (t[32] = F),
      (t[33] = T),
      (t[34] = E),
      (t[35] = I))
    : (I = t[35]);
  let L;
  t[36] !== w || t[37] !== I || t[38] !== v
    ? ((L = (0, J.jsx)(w, { tooltipContent: v, openWhen: `trigger-overflows`, children: I })),
      (t[36] = w),
      (t[37] = I),
      (t[38] = v),
      (t[39] = L))
    : (L = t[39]);
  let R;
  return (
    t[40] !== L || t[41] !== C.row
      ? ((R = (0, J.jsx)(`li`, { className: C.row, children: L })), (t[40] = L), (t[41] = C.row), (t[42] = R))
      : (R = t[42]),
    R
  );
}
var Et, q, J;
function Dt() {
  return (Dt = e(() => {
    ((Et = G()),
      b(),
      v(),
      ee(),
      (q = ae()),
      V(),
      ne(),
      T(),
      F(),
      ye(),
      I(),
      d(),
      it(),
      ot(),
      me(),
      pt(),
      Ne(),
      U(),
      de(),
      ct(),
      lt(),
      pe(),
      Je(),
      gt(),
      P(),
      Ct(),
      (J = K()));
  }))();
}
function Ot(e) {
  let t = (0, kt.c)(26),
    n,
    r,
    i,
    a,
    o,
    s,
    c;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (s = t[6]), (c = t[7]))
    : (({
        className: r,
        children: n,
        icon: i,
        keyboardShortcut: a,
        trailingContent: c,
        trailingAction: s,
        ...o
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c));
  let l;
  t[8] === r
    ? (l = t[9])
    : ((l = L(
        `cursor-interaction flex min-h-10 w-full min-w-0 flex-1 items-center gap-2 rounded-md px-2.5 py-2 text-start select-none`,
        `focus-visible:outline focus-visible:outline-2`,
        r,
      )),
      (t[8] = r),
      (t[9] = l));
  let d;
  t[10] === i
    ? (d = t[11])
    : ((d = (0, Y.jsx)(`span`, {
        className: `flex shrink-0 items-center justify-center text-secondary`,
        children: i,
      })),
      (t[10] = i),
      (t[11] = d));
  let f;
  t[12] === n
    ? (f = t[13])
    : ((f = (0, Y.jsx)(`span`, {
        className: `min-w-0 flex-1 truncate text-sm font-normal text-default`,
        "data-tooltip-overflow-target": !0,
        children: n,
      })),
      (t[12] = n),
      (t[13] = f));
  let p;
  t[14] === a
    ? (p = t[15])
    : ((p = a
        ? (0, Y.jsx)(`span`, {
            className: `ms-auto shrink-0 ps-2 text-secondary`,
            children: (0, Y.jsx)(u, { keysLabel: a }),
          })
        : null),
      (t[14] = a),
      (t[15] = p));
  let m;
  t[16] !== o || t[17] !== l || t[18] !== d || t[19] !== f || t[20] !== p || t[21] !== c
    ? ((m = (0, Y.jsxs)(`button`, { type: `button`, className: l, ...o, children: [d, f, p, c] })),
      (t[16] = o),
      (t[17] = l),
      (t[18] = d),
      (t[19] = f),
      (t[20] = p),
      (t[21] = c),
      (t[22] = m))
    : (m = t[22]);
  let h;
  return (
    t[23] !== m || t[24] !== s
      ? ((h = (0, Y.jsxs)(`div`, {
          className: `flex w-full min-w-0 items-center rounded-md bg-primary-soft-alpha hover:bg-primary-ghost-hover has-[[data-state=open]]:bg-primary-ghost-hover`,
          children: [m, s],
        })),
        (t[23] = m),
        (t[24] = s),
        (t[25] = h))
      : (h = t[25]),
    h
  );
}
var kt, Y;
function At() {
  return (At = e(() => {
    ((kt = G()), A(), m(), (Y = K()));
  }))();
}
function jt(e) {
  let t = (0, Lt.c)(11),
    { actions: n, onActionSelect: r, onChatSelect: i, onToggleBottomPanel: a } = e,
    s = (0, zt.useRef)(null),
    l = (e) => {
      if (e.deferSelectionUntilDropdownClose === !0) {
        s.current = e;
        return;
      }
      r(e);
    },
    u = n.filter(Pt),
    [d, f] = (0, Rt.default)(u, Nt),
    [p, m] = (0, Rt.default)(f, Mt),
    h = [...p, ...m],
    _ = i == null ? 6 : 5,
    v = f.length > _ || d.length > 0 ? _ - 1 : _,
    y = h.slice(0, v),
    b = h.slice(v);
  if (n.length === 0 && i == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(`div`, {
            className: `rounded-lg border border-default p-3 text-sm text-secondary`,
            children: (0, X.jsx)(c, {
              id: `thread.sidePanel.newTab.empty`,
              defaultMessage: `No tabs are available for this chat`,
              description: `Empty message on the side panel New tab page when the current chat has no available side panel tab actions.`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (u.length === 0 && i == null) return null;
  let S;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, X.jsx)(`h3`, {
        className: `text-sm font-medium text-default`,
        children: (0, X.jsx)(c, {
          id: `threadWorkspace.newTab.tools.heading`,
          defaultMessage: `Tools`,
          description: `Heading for tools that open a tab on the unified New Tab page`,
        }),
      })),
      (t[1] = S))
    : (S = t[1]);
  let C;
  t[2] === i
    ? (C = t[3])
    : ((C =
        i == null
          ? null
          : (0, X.jsx)(Ot, {
              icon: (0, X.jsx)(x, {}),
              onClick: i,
              children: (0, X.jsx)(c, {
                id: `threadWorkspace.newTab.chat`,
                defaultMessage: `Chat`,
                description: `Selects the current workspace's Chat, including its unsent draft, from the New tab page`,
              }),
            })),
      (t[2] = i),
      (t[3] = C));
  let w = y.map((e) =>
      (0, X.jsx)(
        te,
        {
          cloneCustomTrigger: !0,
          tooltipContent: e.title,
          openWhen: `trigger-overflows`,
          children: (0, X.jsx)(Ot, {
            "aria-label": e.title,
            icon: e.icon,
            keyboardShortcut: e.keyboardShortcut,
            onClick: () => r(e),
            trailingAction:
              e.id === `terminal` ? (0, X.jsx)(Ft, { action: e, onToggleBottomPanel: a }) : null,
            children: e.title,
          }),
        },
        e.id,
      ),
    ),
    T =
      b.length > 0 || d.length > 0
        ? (0, X.jsxs)(o, {
            align: `end`,
            onCloseAutoFocus: (e) => {
              let t = s.current;
              t != null && ((s.current = null), e.preventDefault(), r(t));
            },
            triggerButton: (0, X.jsx)(Ot, {
              icon: (0, X.jsx)(B, {}),
              trailingContent: (0, X.jsx)(g, {}),
              children: (0, X.jsx)(c, {
                id: `threadWorkspace.newTab.moreTools`,
                defaultMessage: `More tools…`,
                description: `Button that opens the menu of additional tools and plugin actions on the unified New Tab page`,
              }),
            }),
            children: [
              b.length > 0
                ? (0, X.jsxs)(X.Fragment, {
                    children: [
                      (0, X.jsx)(E.SectionLabel, {
                        children: (0, X.jsx)(c, {
                          id: `threadWorkspace.newTab.moreTools.heading`,
                          defaultMessage: `More tools`,
                          description: `Heading for additional built-in tools in the unified New Tab menu`,
                        }),
                      }),
                      b.map((e) =>
                        (0, X.jsxs)(
                          E.Item,
                          {
                            keyboardShortcut: e.keyboardShortcut,
                            onSelect: () => l(e),
                            children: [(0, X.jsx)(E.ItemIcon, { size: `xs`, children: e.icon }), e.title],
                          },
                          e.id,
                        ),
                      ),
                    ],
                  })
                : null,
              b.length > 0 && d.length > 0 ? (0, X.jsx)(E.Separator, {}) : null,
              d.length > 0
                ? (0, X.jsx)(E.SectionLabel, {
                    children: (0, X.jsx)(c, {
                      id: `threadWorkspace.newTab.plugins.heading`,
                      defaultMessage: `Plugins and MCPs`,
                      description: `Heading for tools provided by plugins or standalone Model Context Protocol (MCP) servers that can be opened from the unified New Tab page`,
                    }),
                  })
                : null,
              d.map((e) =>
                (0, X.jsxs)(
                  E.Item,
                  {
                    keyboardShortcut: e.keyboardShortcut,
                    onSelect: () => l(e),
                    children: [(0, X.jsx)(E.ItemIcon, { size: `xs`, children: e.icon }), e.title],
                  },
                  e.id,
                ),
              ),
            ],
          })
        : null,
    D;
  t[4] !== C || t[5] !== w || t[6] !== T
    ? ((D = (0, X.jsxs)(`div`, {
        className: `grid grid-cols-1 gap-x-4 gap-y-1 @md:grid-cols-2`,
        children: [C, w, T],
      })),
      (t[4] = C),
      (t[5] = w),
      (t[6] = T),
      (t[7] = D))
    : (D = t[7]);
  let O;
  return (
    t[8] !== S || t[9] !== D
      ? ((O = (0, X.jsxs)(`section`, { className: `flex flex-col gap-4`, children: [S, D] })),
        (t[8] = S),
        (t[9] = D),
        (t[10] = O))
      : (O = t[10]),
    O
  );
}
function Mt(e) {
  return !!e.keyboardShortcut;
}
function Nt(e) {
  return e.isMcpProvided;
}
function Pt(e) {
  return e.showInNewTabTools !== !1;
}
function Ft(e) {
  let t = (0, Lt.c)(11),
    { action: r, onToggleBottomPanel: a } = e,
    s = D(),
    c = O(ut),
    l = O(Le);
  if (!c || l) return null;
  let u;
  t[0] === s
    ? (u = t[1])
    : ((u = s.formatMessage({
        id: `threadWorkspace.newTab.terminal.options`,
        defaultMessage: `Terminal options`,
        description: `Accessible label for the menu next to the Terminal button on the unified New Tab page`,
      })),
      (t[0] = s),
      (t[1] = u));
  let d;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = (0, X.jsx)(i, {})), (t[2] = d)) : (d = t[2]);
  let f;
  t[3] === u
    ? (f = t[4])
    : ((f = (0, X.jsx)(n, { "aria-label": u, color: `ghost`, size: `toolbar`, uniform: !0, children: d })),
      (t[3] = u),
      (t[4] = f));
  let p;
  t[5] !== r || t[6] !== a
    ? ((p = (0, X.jsx)(It, { action: r, onToggleBottomPanel: a })), (t[5] = r), (t[6] = a), (t[7] = p))
    : (p = t[7]);
  let m;
  return (
    t[8] !== f || t[9] !== p
      ? ((m = (0, X.jsx)(`div`, {
          className: `shrink-0 pe-2.5`,
          children: (0, X.jsx)(o, { align: `end`, triggerButton: f, children: p }),
        })),
        (t[8] = f),
        (t[9] = p),
        (t[10] = m))
      : (m = t[10]),
    m
  );
}
function It(e) {
  let t = (0, Lt.c)(7),
    { action: n, onToggleBottomPanel: r } = e,
    i = oe(Xe, `toggleBottomPanel`),
    a;
  t[0] === n.icon
    ? (a = t[1])
    : ((a = (0, X.jsx)(E.ItemIcon, { size: `xs`, children: n.icon })), (t[0] = n.icon), (t[1] = a));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsx)(c, {
        id: `threadWorkspace.newTab.terminal.openBottom`,
        defaultMessage: `Open bottom terminal`,
        description: `Action in the New Tab Terminal menu that opens the bottom panel`,
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  return (
    t[3] !== r || t[4] !== i || t[5] !== a
      ? ((s = (0, X.jsxs)(E.Item, { keyboardShortcut: i, onSelect: r, children: [a, o] })),
        (t[3] = r),
        (t[4] = i),
        (t[5] = a),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
var Lt, Rt, zt, X;
function Bt() {
  return (Bt = e(() => {
    ((Lt = G()), (Rt = t(ue(), 1)), v(), (zt = ae()), V(), he(), He(), ne(), a(), T(), F(), At(), (X = K()));
  }))();
}
function Vt(e) {
  let t = (0, Ht.c)(14),
    {
      actions: n,
      children: r,
      onActionSelect: i,
      onChatSelect: a,
      onToggleBottomPanel: o,
      onOpenArtifact: s,
      outputArtifacts: c,
      replaceTabId: l,
    } = e,
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = {
        paddingBottom: `max(calc(var(--spacing) * 8), ${$e})`,
        scrollPaddingBottom: $e,
        paddingTop: `max(calc(var(--spacing) * 8), ${st})`,
        scrollPaddingTop: st,
      }),
      (t[0] = u))
    : (u = t[0]);
  let d;
  t[1] !== n || t[2] !== i || t[3] !== a || t[4] !== o
    ? ((d = (0, Z.jsx)(jt, { actions: n, onActionSelect: i, onChatSelect: a, onToggleBottomPanel: o })),
      (t[1] = n),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] !== s || t[7] !== c || t[8] !== l
    ? ((f = c != null && c.length > 0 ? (0, Z.jsx)(wt, { artifacts: c, onOpen: s, replaceTabId: l }) : null),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = f))
    : (f = t[9]);
  let p;
  return (
    t[10] !== r || t[11] !== d || t[12] !== f
      ? ((p = (0, Z.jsx)(`div`, {
          "data-new-tab-scroll-root": !0,
          className: `@container flex h-full min-h-0 flex-col overflow-x-hidden overflow-y-auto bg-surface-canvas px-panel py-8 select-none`,
          style: u,
          children: (0, Z.jsxs)(`div`, {
            className: `mx-auto flex w-full max-w-3xl flex-col gap-10`,
            children: [d, r, f],
          }),
        })),
        (t[10] = r),
        (t[11] = d),
        (t[12] = f),
        (t[13] = p))
      : (p = t[13]),
    p
  );
}
var Ht, Z;
function Ut() {
  return (Ut = e(() => {
    ((Ht = G()), Ze(), Dt(), Bt(), (Z = K()));
  }))();
}
function Wt(e) {
  let t = (0, Gt.c)(13),
    { children: n, replaceTabId: r, target: i } = e,
    a = l(We),
    o;
  t[0] !== a || t[1] !== i
    ? ((o = (e) => {
        a.get(qe) &&
          ce(a, e.dataTransfer, i) != null &&
          (e.preventDefault(), e.stopPropagation(), (e.dataTransfer.dropEffect = `copy`));
      }),
      (t[0] = a),
      (t[1] = i),
      (t[2] = o))
    : (o = t[2]);
  let c = o,
    u;
  t[3] !== r || t[4] !== a || t[5] !== i
    ? ((u = async (e) => {
        if (!a.get(qe)) return;
        let t = ce(a, e.dataTransfer, i);
        if (t != null) {
          (e.preventDefault(), e.stopPropagation());
          try {
            await t.open(a, e.dataTransfer, { replaceTabId: r, target: i });
          } catch (e) {
            let t = e;
            s.error(`Error opening dropped content`, { safe: {}, sensitive: { error: t } });
          }
        }
      }),
      (t[3] = r),
      (t[4] = a),
      (t[5] = i),
      (t[6] = u))
    : (u = t[6]);
  let d = u,
    f;
  t[7] === d ? (f = t[8]) : ((f = (e) => void d(e)), (t[7] = d), (t[8] = f));
  let p;
  return (
    t[9] !== n || t[10] !== c || t[11] !== f
      ? ((p = (0, Kt.jsx)(`div`, { className: `contents`, onDragOver: c, onDrop: f, children: n })),
        (t[9] = n),
        (t[10] = c),
        (t[11] = f),
        (t[12] = p))
      : (p = t[12]),
    p
  );
}
var Gt, Kt;
function qt() {
  return (qt = e(() => {
    ((Gt = G()), v(), De(), Ke(), de(), S(), (Kt = K()));
  }))();
}
function Jt(e) {
  let t = (0, Q.c)(31),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let {
      children: r,
      onClose: i,
      isCommandActive: a,
      onActionSelect: o,
      onChatSelect: s,
      replaceTabId: c,
      surface: l,
      target: u,
    } = n,
    d = l === void 0 ? `panel-launcher` : l,
    f = u === void 0 ? `right` : u,
    p;
  t[2] === o ? (p = t[3]) : ((p = o ?? Zt), (t[2] = o), (t[3] = p));
  let m = p,
    h = d === `new-tab`,
    g;
  t[4] !== i || t[5] !== d || t[6] !== h || t[7] !== f
    ? ((g = { loadArtifactSuggestions: h, onClose: i, surface: d, target: f }),
      (t[4] = i),
      (t[5] = d),
      (t[6] = h),
      (t[7] = f),
      (t[8] = g))
    : (g = t[8]);
  let { actions: _, isLoadingExtensions: v, onOpenArtifact: y, outputArtifacts: b } = Re(g),
    x;
  t[9] === _ ? (x = t[10]) : ((x = _.find(Xt)), (t[9] = _), (t[10] = x));
  let S = x,
    C;
  t[11] !== S || t[12] !== m
    ? ((C = () => {
        S != null && m(S);
      }),
      (t[11] = S),
      (t[12] = m),
      (t[13] = C))
    : (C = t[13]);
  let w = S != null,
    T;
  (t[14] !== a || t[15] !== w
    ? ((T = { enabled: w, isActive: a }), (t[14] = a), (t[15] = w), (t[16] = T))
    : (T = t[16]),
    dt(`openSideChat`, C, T));
  let E;
  t[17] !== _ ||
  t[18] !== r ||
  t[19] !== v ||
  t[20] !== s ||
  t[21] !== y ||
  t[22] !== b ||
  t[23] !== c ||
  t[24] !== m ||
  t[25] !== d
    ? ((E =
        d === `new-tab`
          ? (0, $.jsx)(Vt, {
              actions: _,
              onActionSelect: m,
              onChatSelect: s,
              onToggleBottomPanel: Yt,
              onOpenArtifact: y,
              outputArtifacts: b,
              replaceTabId: c,
              children: r,
            })
          : (0, $.jsx)(Qt, {
              actions: _,
              isLoadingExtensions: v,
              onActionSelect: m,
              onOpenArtifact: y,
              outputArtifacts: b,
            })),
      (t[17] = _),
      (t[18] = r),
      (t[19] = v),
      (t[20] = s),
      (t[21] = y),
      (t[22] = b),
      (t[23] = c),
      (t[24] = m),
      (t[25] = d),
      (t[26] = E))
    : (E = t[26]);
  let D;
  return (
    t[27] !== c || t[28] !== E || t[29] !== f
      ? ((D = (0, $.jsx)(Wt, { replaceTabId: c, target: f, children: E })),
        (t[27] = c),
        (t[28] = E),
        (t[29] = f),
        (t[30] = D))
      : (D = t[30]),
    D
  );
}
function Yt() {
  xe(`toggleBottomPanel`, `new-tab`);
}
function Xt(e) {
  return e.id === `side-chat`;
}
function Zt(e) {
  return e.onSelect();
}
function Qt(e) {
  let t = (0, Q.c)(24),
    { actions: n, isLoadingExtensions: i, onActionSelect: a, onOpenArtifact: o, outputArtifacts: s } = e,
    l = s != null && s.length > 0 ? s : null,
    u = O(r),
    [d, f] = (0, nn.useState)(null),
    [p, m] = (0, nn.useState)(!1),
    [h, g] = _(),
    v = u ? void 0 : `open`,
    y = u ? void 0 : rn,
    b = p && `shadow-sm`,
    x;
  t[0] === b
    ? (x = t[1])
    : ((x = L(`sticky top-0 z-10 flex flex-col gap-6 bg-surface`, b)), (t[0] = b), (t[1] = x));
  let S;
  t[2] !== n || t[3] !== i || t[4] !== a || t[5] !== u
    ? ((S =
        n.length > 0
          ? (0, $.jsx)(j.ul, {
              className: `mx-auto flex w-full max-w-xl flex-col gap-1 px-panel`,
              variants: u ? void 0 : an,
              children: n.map((e) =>
                (0, $.jsx)(
                  j.li,
                  {
                    className: `w-full`,
                    variants: u ? void 0 : on,
                    children: (0, $.jsx)(Ot, {
                      icon: e.icon,
                      keyboardShortcut: e.keyboardShortcut,
                      onClick: () => a(e),
                      children: e.title,
                    }),
                  },
                  e.id,
                ),
              ),
            })
          : (0, $.jsx)(`div`, {
              className: `mx-auto w-full max-w-xl rounded-lg border border-default p-3 text-sm text-secondary`,
              children: i
                ? (0, $.jsx)(c, {
                    id: `thread.sidePanel.newTab.loading`,
                    defaultMessage: `Loading tabs…`,
                    description: `Status while discovering extension-provided tabs in the side panel launcher`,
                  })
                : (0, $.jsx)(c, {
                    id: `thread.sidePanel.newTab.empty`,
                    defaultMessage: `No tabs are available for this chat`,
                    description: `Empty message on the side panel New tab page when the current chat has no available side panel tab actions.`,
                  }),
            })),
      (t[2] = n),
      (t[3] = i),
      (t[4] = a),
      (t[5] = u),
      (t[6] = S))
    : (S = t[6]);
  let C;
  t[7] === l
    ? (C = t[8])
    : ((C =
        l == null
          ? null
          : (0, $.jsx)(`div`, {
              className: `mx-auto w-full max-w-xl px-panel pb-1`,
              children: (0, $.jsx)(`h3`, {
                className: `ps-2.5 text-sm font-normal text-secondary`,
                children: (0, $.jsx)(c, {
                  id: `thread.sidePanel.newTab.suggested.heading`,
                  defaultMessage: `Suggested`,
                  description: `Heading for suggested artifacts shown on the side panel New tab page`,
                }),
              }),
            })),
      (t[7] = l),
      (t[8] = C));
  let w;
  t[9] !== h || t[10] !== x || t[11] !== S || t[12] !== C
    ? ((w = (0, $.jsxs)(`div`, { ref: h, className: x, children: [S, C] })),
      (t[9] = h),
      (t[10] = x),
      (t[11] = S),
      (t[12] = C),
      (t[13] = w))
    : (w = t[13]);
  let T;
  t[14] !== g || t[15] !== o || t[16] !== d || t[17] !== l
    ? ((T =
        l == null
          ? null
          : (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)($t, { headerHeight: g.height, root: d, onCoveredChange: m }),
                (0, $.jsx)(en, { artifacts: l, onOpen: o }),
              ],
            })),
      (t[14] = g),
      (t[15] = o),
      (t[16] = d),
      (t[17] = l),
      (t[18] = T))
    : (T = t[18]);
  let E;
  return (
    t[19] !== v || t[20] !== y || t[21] !== w || t[22] !== T
      ? ((E = (0, $.jsx)(`div`, {
          ref: f,
          className: `flex h-full min-h-0 flex-col overflow-x-hidden overflow-y-auto bg-surface p-2 select-none`,
          children: (0, $.jsxs)(j.div, {
            animate: v,
            className: `flex w-full flex-1 flex-col justify-center`,
            initial: !1,
            variants: y,
            children: [w, T],
          }),
        })),
        (t[19] = v),
        (t[20] = y),
        (t[21] = w),
        (t[22] = T),
        (t[23] = E))
      : (E = t[23]),
    E
  );
}
function $t(e) {
  let t = (0, Q.c)(7),
    { headerHeight: n, root: r, onCoveredChange: i } = e,
    a = n == null ? `0px` : `-${Math.ceil(n)}px 0px 0px 0px`,
    o;
  t[0] !== i || t[1] !== r || t[2] !== a
    ? ((o = (e) => {
        if (e == null || r == null) return;
        if (typeof IntersectionObserver > `u`) {
          i(!1);
          return;
        }
        let t = new IntersectionObserver(
          (e) => {
            let t = e[0];
            t != null && i(!t.isIntersecting);
          },
          { root: r, rootMargin: a },
        );
        return (
          t.observe(e),
          () => {
            t.disconnect();
          }
        );
      }),
      (t[0] = i),
      (t[1] = r),
      (t[2] = a),
      (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] !== a || t[5] !== o
      ? ((s = (0, $.jsx)(`div`, { "aria-hidden": !0, className: `h-px`, ref: o }, a)),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function en(e) {
  let t = (0, Q.c)(9),
    { artifacts: n, onOpen: r } = e,
    [i, a] = (0, nn.useState)(null),
    o;
  if (t[0] !== i || t[1] !== n || t[2] !== r) {
    let e;
    (t[4] !== i || t[5] !== r
      ? ((e = (e, t) =>
          (0, $.jsx)(
            tn,
            {
              hideDivider: i === t || i === t + 1,
              artifact: e,
              onOpen: r,
              onActiveChange: (e) => a(e ? t : null),
            },
            Ee(e),
          )),
        (t[4] = i),
        (t[5] = r),
        (t[6] = e))
      : (e = t[6]),
      (o = n.map(e)),
      (t[0] = i),
      (t[1] = n),
      (t[2] = r),
      (t[3] = o));
  } else o = t[3];
  let s;
  return (
    t[7] === o
      ? (s = t[8])
      : ((s = (0, $.jsx)(`ul`, { className: `mx-auto flex w-full max-w-xl flex-col px-panel`, children: o })),
        (t[7] = o),
        (t[8] = s)),
    s
  );
}
function tn(e) {
  let t = (0, Q.c)(33),
    { artifact: n, hideDivider: r, onActiveChange: i, onOpen: a } = e,
    o = r && `after:hidden`,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = L(
        `relative flex w-full after:absolute after:inset-x-3 after:bottom-0 after:h-px after:bg-border-subtle after:content-[''] last:after:hidden`,
        o,
      )),
      (t[0] = o),
      (t[1] = s));
  let c;
  t[2] === n ? (c = t[3]) : ((c = Ve(n)), (t[2] = n), (t[3] = c));
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = L(
        `cursor-interaction relative min-h-10 w-full rounded-md px-2.5 py-2 text-start`,
        `hover:bg-primary-ghost-hover`,
        `focus-visible:outline focus-visible:outline-2`,
      )),
      (t[4] = l))
    : (l = t[4]);
  let u, d, f, p;
  t[5] === i
    ? ((u = t[6]), (d = t[7]), (f = t[8]), (p = t[9]))
    : ((u = () => i(!1)),
      (d = () => i(!0)),
      (f = () => i(!0)),
      (p = () => i(!1)),
      (t[5] = i),
      (t[6] = u),
      (t[7] = d),
      (t[8] = f),
      (t[9] = p));
  let m;
  t[10] !== n || t[11] !== a ? ((m = (e) => a(n, e)), (t[10] = n), (t[11] = a), (t[12] = m)) : (m = t[12]);
  let h;
  t[13] === n
    ? (h = t[14])
    : ((h = (0, $.jsx)(`span`, {
        className: `icon-xs flex shrink-0 items-center justify-center text-secondary`,
        children: (0, $.jsx)(Ce, {
          artifact: n,
          iconClassName: `icon-xs`,
          imageClassName: `size-full rounded`,
        }),
      })),
      (t[13] = n),
      (t[14] = h));
  let g;
  t[15] === n ? (g = t[16]) : ((g = se(n)), (t[15] = n), (t[16] = g));
  let _;
  t[17] === g
    ? (_ = t[18])
    : ((_ = (0, $.jsx)(`span`, {
        className: `min-w-0 flex-1 truncate text-sm font-normal text-default`,
        children: g,
      })),
      (t[17] = g),
      (t[18] = _));
  let v;
  t[19] !== h || t[20] !== _
    ? ((v = (0, $.jsxs)(`span`, { className: `flex min-w-0 items-center gap-2`, children: [h, _] })),
      (t[19] = h),
      (t[20] = _),
      (t[21] = v))
    : (v = t[21]);
  let y;
  t[22] !== v || t[23] !== c || t[24] !== u || t[25] !== d || t[26] !== f || t[27] !== p || t[28] !== m
    ? ((y = (0, $.jsx)(`button`, {
        type: `button`,
        title: c,
        className: l,
        onBlur: u,
        onFocus: d,
        onMouseEnter: f,
        onMouseLeave: p,
        onClick: m,
        children: v,
      })),
      (t[22] = v),
      (t[23] = c),
      (t[24] = u),
      (t[25] = d),
      (t[26] = f),
      (t[27] = p),
      (t[28] = m),
      (t[29] = y))
    : (y = t[29]);
  let b;
  return (
    t[30] !== y || t[31] !== s
      ? ((b = (0, $.jsx)(`li`, { className: s, children: y })), (t[30] = y), (t[31] = s), (t[32] = b))
      : (b = t[32]),
    b
  );
}
var Q, nn, $, rn, an, on;
function sn() {
  return (sn = e(() => {
    ((Q = G()),
      A(),
      R(),
      H(),
      v(),
      (nn = ae()),
      V(),
      fe(),
      le(),
      h(),
      y(),
      Ut(),
      qt(),
      C(),
      lt(),
      pe(),
      at(),
      At(),
      ($ = K()),
      (rn = {
        closed: { opacity: 0, y: -8, transition: { duration: 0.06, ease: W.ease, when: `afterChildren` } },
        open: { opacity: 1, y: 0, transition: { duration: 0.09, ease: W.ease, when: `beforeChildren` } },
      }),
      (an = {
        closed: { transition: { delayChildren: z(0.008, { from: `last` }) } },
        open: { transition: { delayChildren: z(0.016, { startDelay: 0.012 }) } },
      }),
      (on = {
        closed: { opacity: 0, y: -6, transition: { duration: 0.045, ease: W.ease } },
        open: { opacity: 1, y: 0, transition: { duration: 0.075, ease: W.ease } },
      }));
  }))();
}
export { yt as i, sn as n, vt as r, Jt as t };
//# sourceMappingURL=thread-side-panel-new-tab-7afda15e4b3f.js.map
