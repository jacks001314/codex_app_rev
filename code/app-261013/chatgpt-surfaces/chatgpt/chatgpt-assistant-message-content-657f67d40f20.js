const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./analysis-dialog-d730f7211420.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./details-6df4c7ff3dc6.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  B4 as n,
  BV as r,
  Cot as i,
  IDt as a,
  Irt as o,
  Ixt as s,
  NV as c,
  PI as l,
  Pxt as u,
  TJ as d,
  VDt as f,
  Vxt as p,
  _xt as m,
  cz as h,
  fPt as g,
  jDt as _,
  jI as v,
  kxt as y,
  nk as b,
  pPt as x,
  sz as S,
  t3 as C,
  tH as w,
  tk as T,
  vzt as E,
  wot as D,
  xMt as O,
  yzt as k,
  z4 as ee,
  zxt as te,
} from "./app-shared-bbfeca5e5737.js";
import {
  $f as ne,
  Cir as A,
  Cwr as re,
  EZn as j,
  Eir as ie,
  FEr as M,
  FXn as ae,
  GLn as oe,
  HF as N,
  K as se,
  NXn as ce,
  O1t as le,
  PEr as ue,
  PXn as de,
  QDr as P,
  QJt as F,
  Sir as fe,
  UF as I,
  ULn as pe,
  Ul as me,
  VGn as L,
  Vl as he,
  Vo as R,
  XDr as z,
  Xb as ge,
  Xl as _e,
  Yb as B,
  Ymr as ve,
  Zl as V,
  _u as H,
  aMr as ye,
  bOn as be,
  bZn as xe,
  dYt as U,
  eGn as Se,
  eYt as Ce,
  ec as we,
  ehr as W,
  ep as Te,
  fMr as Ee,
  fWn as De,
  fYt as Oe,
  gu as ke,
  gwr as Ae,
  iZn as je,
  lYt as Me,
  nc as G,
  nx as Ne,
  ocr as Pe,
  ox as Fe,
  pWn as Ie,
  pZn as Le,
  q as Re,
  rc as ze,
  rx as K,
  tGn as Be,
  tYt as q,
  tx as Ve,
  wOn as He,
  xPn as Ue,
  yPn as J,
  yjn as Y,
} from "./app-initial-5851df3f6cb1.js";
import { Ms as We, Ns as X } from "./app-primary-fe8a450b3b04.js";
import { a as Ge, c as Ke, n as qe, o as Je, s as Ye, t as Xe } from "./resource-card-list-8cb37224006a.js";
import {
  O as Ze,
  a as Qe,
  k as $e,
  n as et,
  o as tt,
  t as nt,
} from "./chatgpt-markdown-view-10e560aa371d.js";
import { g as rt, h as it, i as at, n as ot, r as st, t as ct } from "./file-ef1f4b6b35dd.js";
import { n as lt, t as ut } from "./chatgpt-moderation-disclaimers-a248d0f667b8.js";
function dt(e, t, n, r, i) {
  try {
    if (t?.messageId == null || t.messageId.startsWith(`WEB:`)) return;
    pt(
      e,
      t,
      r,
      r === `click` ? n[0]?.url : void 0,
      K.CHATGPT_LINK_TYPE_SEARCH_CITATION,
      i,
      n.map((e) => o(e.number)).filter((e) => e != null),
    );
  } catch {}
}
function ft(e, t, n, r, i) {
  try {
    if (t == null || (n === `show` && t.trackShownImpressions === !1)) return;
    pt(e, t, n, r, K.CHATGPT_LINK_TYPE_SEARCH_SOURCE, i);
  } catch {}
}
function pt(e, t, n, r, i, a, o) {
  let s;
  if (n === `show` || n === `click`) {
    if (
      r == null ||
      !URL.canParse(r) ||
      ((s = new URL(r)),
      (s.protocol !== `https:` && s.protocol !== `http:`) ||
        (typeof window < `u` &&
          s.origin === window.location.origin &&
          !s.pathname.endsWith(`/bing/redirect`)))
    )
      return;
    ((s.username = ``), (s.password = ``), (s.search = ``), (s.hash = ``));
  }
  let c = t.messageId?.startsWith(`WEB:`) ? void 0 : t.messageId;
  P(e, Ve, {
    actionType: {
      click: B.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
      show: B.CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN,
      hover: B.CHATGPT_ENGAGEMENT_ACTION_TYPE_HOVERED,
      unhover: B.CHATGPT_ENGAGEMENT_ACTION_TYPE_UNHOVERED,
    }[n],
    surfaceLocation: ge.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
    linkAffordance: Ne.CHATGPT_LINK_AFFORDANCE_PILL,
    linkType: i,
    contentReferenceType: i === K.CHATGPT_LINK_TYPE_SEARCH_CITATION ? `grouped_webpages` : void 0,
    conversationId: e.get(Le, t.conversationId) ?? void 0,
    messageId: c,
    assistantMessageId: c,
    url: a ? void 0 : s?.toString(),
    citationNumbers: o,
  });
}
function mt() {
  return (mt = e(() => {
    (Pe(), Fe(), Y(), z());
  }))();
}
var ht, gt;
function _t() {
  return (_t = e(() => {
    ((ht = k()), (gt = (0, ht.createContext)(void 0)));
  }))();
}
function vt(e) {
  let t = (0, At.c)(42),
    { analyticsContext: n, sources: r } = e,
    a = s(i),
    o = f(),
    c = (0, Z.useContext)(_e) === `restricted`,
    [l, u] = (0, Z.useState)(!1),
    d = (0, Z.useRef)(!1),
    p;
  t[0] !== n || t[1] !== c || t[2] !== a || t[3] !== r
    ? ((p = (e) => {
        d.current !== e && ((d.current = e), u(e), dt(a, n, r, e ? `hover` : `unhover`, c));
      }),
      (t[0] = n),
      (t[1] = c),
      (t[2] = a),
      (t[3] = r),
      (t[4] = p))
    : (p = t[4]);
  let m = p,
    h = r[0];
  if (h == null) return null;
  let g;
  t[5] === r
    ? (g = t[6])
    : ((g = (e) => {
        if (e != null) return H(e, { text: r.flatMap(yt).join(` `), highlight: oe() ? `block` : `auto` });
      }),
      (t[5] = r),
      (t[6] = g));
  let _;
  t[7] !== o || t[8] !== h.displayLabel || t[9] !== r.length
    ? ((_ = o.formatMessage(
        {
          id: `quorum.citations.pill.label`,
          defaultMessage: `Citation: {sourceName}, {sourceCount, plural, one {# source} other {# sources}}`,
          description: `Accessible label for a clinical citation pill. The count includes all sources grouped into the pill.`,
        },
        { sourceName: h.displayLabel, sourceCount: r.length },
      )),
      (t[7] = o),
      (t[8] = h.displayLabel),
      (t[9] = r.length),
      (t[10] = _))
    : (_ = t[10]);
  let v;
  t[11] !== g || t[12] !== _
    ? ((v = {
        ref: g,
        "aria-label": _,
        className: `group inline-flex h-6 max-w-[28ch] cursor-interaction items-center justify-center gap-1.5 rounded-full border border-default bg-surface ps-1 pe-2 text-xs leading-5 font-normal text-default! no-underline! select-none hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`,
        "data-testid": `clinical-citation`,
      }),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v))
    : (v = t[13]);
  let y = v,
    b;
  t[14] === h ? (b = t[15]) : ((b = (0, Q.jsx)(Ot, { source: h })), (t[14] = h), (t[15] = b));
  let x;
  t[16] === h.displayLabel
    ? (x = t[17])
    : ((x = (0, Q.jsx)(`span`, {
        className: `max-w-[18ch] min-w-0 flex-auto truncate`,
        children: h.displayLabel,
      })),
      (t[16] = h.displayLabel),
      (t[17] = x));
  let C;
  t[18] === r.length
    ? (C = t[19])
    : ((C =
        r.length > 1 &&
        (0, Q.jsx)(`span`, {
          className: `shrink-0 text-secondary`,
          "aria-hidden": `true`,
          children: `+${r.length - 1}`,
        })),
      (t[18] = r.length),
      (t[19] = C));
  let w;
  t[20] !== b || t[21] !== x || t[22] !== C
    ? ((w = (0, Q.jsxs)(Q.Fragment, { children: [b, x, C] })),
      (t[20] = b),
      (t[21] = x),
      (t[22] = C),
      (t[23] = w))
    : (w = t[23]);
  let T = w,
    E;
  t[24] === m
    ? (E = t[25])
    : ((E = (e) => {
        e.target instanceof HTMLElement && e.target.matches(`:focus-visible`) && m(!0);
      }),
      (t[24] = m),
      (t[25] = E));
  let D;
  t[26] === r ? (D = t[27]) : ((D = (0, Q.jsx)(bt, { sources: r })), (t[26] = r), (t[27] = D));
  let O;
  t[28] !== n || t[29] !== c || t[30] !== T || t[31] !== y || t[32] !== h.url || t[33] !== a || t[34] !== r
    ? ((O = (0, Q.jsx)(`span`, {
        className: `ms-1 inline-flex max-w-full items-center align-middle font-sans select-none`,
        children:
          h.url == null
            ? (0, Q.jsx)(`button`, { ...y, type: `button`, children: T })
            : (0, Q.jsx)(J, {
                ...y,
                href: h.url,
                initiator: `markdown_link_click`,
                isBrowserEnabled: !1,
                onClick: () => dt(a, n, r, `click`, c),
                requiresConfirmation: c,
                children: T,
              }),
      })),
      (t[28] = n),
      (t[29] = c),
      (t[30] = T),
      (t[31] = y),
      (t[32] = h.url),
      (t[33] = a),
      (t[34] = r),
      (t[35] = O))
    : (O = t[35]);
  let k;
  return (
    t[36] !== m || t[37] !== l || t[38] !== D || t[39] !== O || t[40] !== E
      ? ((k = (0, Q.jsx)(S, {
          align: `start`,
          delayDuration: 150,
          interactive: !0,
          onFocus: E,
          onOpenChange: m,
          open: l,
          side: `bottom`,
          tooltipContent: D,
          tooltipMaxWidth: `min(30rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))`,
          variant: `rich`,
          children: O,
        })),
        (t[36] = m),
        (t[37] = l),
        (t[38] = D),
        (t[39] = O),
        (t[40] = E),
        (t[41] = k))
      : (k = t[41]),
    k
  );
}
function yt(e) {
  return [e.displayLabel, e.title, e.sourceName, e.authors, e.dateDisplay, e.doi, e.url, e.snippet];
}
function bt(e) {
  let t = (0, At.c)(4),
    { sources: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = [...n].sort(St).map(xt)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, Q.jsx)(`ol`, {
          className: `flex max-h-105 w-120 max-w-full flex-col gap-3 overflow-y-auto p-3 text-start text-sm font-normal`,
          children: r,
        })),
        (t[2] = r),
        (t[3] = i)),
    i
  );
}
function xt(e) {
  return (0, Q.jsx)(`li`, { children: (0, Q.jsx)(Tt, { source: e, variant: `tooltip` }) }, e.sourceKey);
}
function St(e, t) {
  return e.number - t.number;
}
function Ct(e) {
  let t = (0, At.c)(27),
    { isStreaming: n, sources: i } = e,
    o = n !== void 0 && n,
    s = f(),
    [l, u] = (0, Z.useState)(!0),
    d = (0, Z.useId)();
  if (i.length === 0) return null;
  let p = o ? `` : void 0,
    m;
  t[0] !== l || t[1] !== s || t[2] !== i.length
    ? ((m = s.formatMessage(
        {
          id: `quorum.citations.panel.toggle`,
          defaultMessage: `{expanded, select, true {Collapse} other {Expand}} {count, plural, one {# citation} other {# citations}}`,
          description: `Accessible label for expanding or collapsing the clinical citation bibliography below an answer.`,
        },
        { expanded: String(l), count: i.length },
      )),
      (t[0] = l),
      (t[1] = s),
      (t[2] = i.length),
      (t[3] = m))
    : (m = t[3]);
  let h;
  t[4] === l ? (h = t[5]) : ((h = () => u(!l)), (t[4] = l), (t[5] = h));
  let g;
  t[6] === l
    ? (g = t[7])
    : ((g = (0, Q.jsx)(`span`, {
        className: `flex size-6 shrink-0 items-center justify-center`,
        children: l ? (0, Q.jsx)(c, {}) : (0, Q.jsx)(r, {}),
      })),
      (t[6] = l),
      (t[7] = g));
  let _, v;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(`span`, {
        className: `font-semibold`,
        children: (0, Q.jsx)(a, {
          id: `quorum.citations.panel.title`,
          defaultMessage: `Citations`,
          description: `Heading for the list of clinical sources cited in an answer.`,
        }),
      })),
      (v = (0, Q.jsx)(`span`, { "aria-hidden": `true`, className: `text-secondary`, children: `·` })),
      (t[8] = _),
      (t[9] = v))
    : ((_ = t[8]), (v = t[9]));
  let y;
  t[10] === i.length
    ? (y = t[11])
    : ((y = (0, Q.jsx)(`span`, { className: `text-secondary`, children: i.length })),
      (t[10] = i.length),
      (t[11] = y));
  let b;
  t[12] !== l || t[13] !== d || t[14] !== m || t[15] !== h || t[16] !== g || t[17] !== y
    ? ((b = (0, Q.jsxs)(`button`, {
        "aria-controls": d,
        "aria-expanded": l,
        "aria-label": m,
        className: `flex w-full cursor-interaction items-center gap-1.5 rounded-lg py-1.5 text-start text-base leading-6 select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`,
        onClick: h,
        type: `button`,
        children: [g, _, v, y],
      })),
      (t[12] = l),
      (t[13] = d),
      (t[14] = m),
      (t[15] = h),
      (t[16] = g),
      (t[17] = y),
      (t[18] = b))
    : (b = t[18]);
  let x;
  t[19] !== l || t[20] !== d || t[21] !== i
    ? ((x = l && (0, Q.jsx)(`ol`, { className: `flex flex-col py-1`, id: d, children: i.map(wt) })),
      (t[19] = l),
      (t[20] = d),
      (t[21] = i),
      (t[22] = x))
    : (x = t[22]);
  let S;
  return (
    t[23] !== x || t[24] !== p || t[25] !== b
      ? ((S = (0, Q.jsxs)(`section`, {
          className: `mt-6 flex w-full min-w-0 flex-col`,
          "data-preserve-turn-viewport": p,
          children: [b, x],
        })),
        (t[23] = x),
        (t[24] = p),
        (t[25] = b),
        (t[26] = S))
      : (S = t[26]),
    S
  );
}
function wt(e) {
  return (0, Q.jsx)(
    `li`,
    {
      className: `rounded-lg py-2 hover:bg-surface-secondary`,
      children: (0, Q.jsx)(Tt, { source: e, variant: `bibliography` }),
    },
    e.sourceKey,
  );
}
function Tt(e) {
  let t = (0, At.c)(23),
    { source: n, variant: r } = e,
    i = (0, Z.useContext)(_e) === `restricted`,
    o =
      r === `bibliography`
        ? `flex h-5 w-6 shrink-0 items-center justify-center text-secondary tabular-nums`
        : `w-5 shrink-0 text-secondary tabular-nums`,
    s;
  t[0] === n.number
    ? (s = t[1])
    : ((s = (0, Q.jsx)(a, {
        id: `quorum.citations.source.number`,
        defaultMessage: `{number}.`,
        description: `Number identifying a cited source in the clinical bibliography.`,
        values: { number: n.number },
      })),
      (t[0] = n.number),
      (t[1] = s));
  let c;
  t[2] !== o || t[3] !== s
    ? ((c = (0, Q.jsx)(`span`, { className: o, children: s })), (t[2] = o), (t[3] = s), (t[4] = c))
    : (c = t[4]);
  let l = r === `bibliography` ? `flex min-w-0 flex-1 flex-col gap-1` : `flex min-w-0 flex-1 flex-col gap-2`,
    u =
      r === `bibliography`
        ? `line-clamp-2 font-semibold break-words underline decoration-dotted underline-offset-3`
        : `line-clamp-3 font-medium break-words underline decoration-dotted underline-offset-3`,
    d;
  t[5] === n.title ? (d = t[6]) : ((d = kt(n.title)), (t[5] = n.title), (t[6] = d));
  let f;
  t[7] !== u || t[8] !== d
    ? ((f = (0, Q.jsx)(`span`, { className: u, children: d })), (t[7] = u), (t[8] = d), (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === n ? (p = t[11]) : ((p = (0, Q.jsx)(Et, { source: n })), (t[10] = n), (t[11] = p));
  let m;
  t[12] !== l || t[13] !== f || t[14] !== p
    ? ((m = (0, Q.jsxs)(`span`, { className: l, children: [f, p] })),
      (t[12] = l),
      (t[13] = f),
      (t[14] = p),
      (t[15] = m))
    : (m = t[15]);
  let h;
  t[16] !== c || t[17] !== m
    ? ((h = (0, Q.jsxs)(Q.Fragment, { children: [c, m] })), (t[16] = c), (t[17] = m), (t[18] = h))
    : (h = t[18]);
  let g = h,
    _;
  return (
    t[19] !== i || t[20] !== g || t[21] !== n.url
      ? ((_ =
          n.url == null
            ? (0, Q.jsx)(`span`, {
                className: `flex min-w-0 gap-1.5 text-sm leading-5 text-default`,
                children: g,
              })
            : (0, Q.jsx)(J, {
                className: `flex min-w-0 gap-1.5 text-sm leading-5 text-default! no-underline!`,
                href: n.url,
                initiator: `markdown_link_click`,
                requiresConfirmation: i,
                children: g,
              })),
        (t[19] = i),
        (t[20] = g),
        (t[21] = n.url),
        (t[22] = _))
      : (_ = t[22]),
    _
  );
}
function Et(e) {
  let t = (0, At.c)(12),
    { source: n } = e,
    r;
  t[0] !== n.authors || t[1] !== n.dateDisplay || t[2] !== n.sourceName
    ? ((r = [n.sourceName, n.dateDisplay, n.authors].filter(Dt)),
      (t[0] = n.authors),
      (t[1] = n.dateDisplay),
      (t[2] = n.sourceName),
      (t[3] = r))
    : (r = t[3]);
  let i = r,
    a;
  t[4] === n ? (a = t[5]) : ((a = (0, Q.jsx)(Ot, { source: n })), (t[4] = n), (t[5] = a));
  let o;
  t[6] !== i || t[7] !== n.authors
    ? ((o = i.map((e, t) =>
        (0, Q.jsxs)(
          `span`,
          {
            className: `contents`,
            children: [
              t > 0 && (0, Q.jsx)(`span`, { "aria-hidden": `true`, children: `·` }),
              (0, Q.jsx)(`span`, { className: e === n.authors ? `italic` : void 0, children: e }),
            ],
          },
          t,
        ),
      )),
      (t[6] = i),
      (t[7] = n.authors),
      (t[8] = o))
    : (o = t[8]);
  let s;
  return (
    t[9] !== a || t[10] !== o
      ? ((s = (0, Q.jsxs)(`span`, {
          className: `flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5 text-sm leading-5 text-secondary`,
          children: [a, o],
        })),
        (t[9] = a),
        (t[10] = o),
        (t[11] = s))
      : (s = t[11]),
    s
  );
}
function Dt(e) {
  return e != null;
}
function Ot(e) {
  let t = (0, At.c)(5),
    { source: n } = e,
    r = (0, Z.useContext)(gt),
    i = (0, Z.useContext)(_e) === `restricted`,
    a = n.iconUrl ?? n.url,
    o;
  return (
    t[0] !== i || t[1] !== a || t[2] !== r || t[3] !== n.displayLabel
      ? ((o =
          a == null
            ? (0, Q.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-surface-secondary text-xs text-secondary`,
                children: n.displayLabel.slice(0, 1).toUpperCase(),
              })
            : (0, Q.jsx)(N, {
                className: `size-4 shrink-0 overflow-hidden rounded-full`,
                globeSize: 16,
                href: a,
                loadRemote: r ?? !i,
              })),
        (t[0] = i),
        (t[1] = a),
        (t[2] = r),
        (t[3] = n.displayLabel),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function kt(e) {
  if (typeof document > `u` || !e.includes(`<`)) return e;
  let t = document.createElement(`template`);
  t.innerHTML = e;
  let n = (e) =>
    Array.from(e, (e, t) => {
      if (e.nodeType === 3) return e.textContent;
      if (!(e instanceof Element)) return null;
      let r = n(e.childNodes),
        i = e.tagName.toLowerCase();
      return [`i`, `sup`, `sub`, `scp`].includes(i)
        ? (0, Z.createElement)(
            i === `scp` ? `span` : i,
            { key: t, className: i === `scp` ? `uppercase` : void 0 },
            r,
          )
        : r;
    });
  return n(t.content.childNodes);
}
var At, Z, Q;
function jt() {
  return (jt = e(() => {
    ((At = E()), pe(), u(), (Z = k()), _(), ke(), Ue(), I(), d(), h(), V(), mt(), D(), _t(), (Q = O()));
  }))();
}
function Mt(e) {
  let t = (0, Nt.c)(12),
    n = f(),
    r = ze(),
    i,
    a;
  t[0] !== n || t[1] !== e.attributes || t[2] !== r
    ? ((i = Ze(e.attributes, r?.contentReferences)),
      (a =
        i == null || r == null
          ? void 0
          : it(n, r.contentReferences, i.index, r.contentReferenceMessageIds, r.messageId)),
      (t[0] = n),
      (t[1] = e.attributes),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a))
    : ((i = t[3]), (a = t[4]));
  let o = a;
  if (o != null && r != null && i != null) {
    let e;
    return (
      t[5] !== i || t[6] !== o.isLeading || t[7] !== o.sources || t[8] !== r
        ? ((e = o.isLeading
            ? (0, Pt.jsx)(vt, {
                analyticsContext: {
                  conversationId: r.conversationId,
                  messageId:
                    r.contentReferenceMessageIds == null
                      ? r.messageId
                      : r.contentReferenceMessageIds[i.index],
                },
                sources: o.sources,
              })
            : null),
          (t[5] = i),
          (t[6] = o.isLeading),
          (t[7] = o.sources),
          (t[8] = r),
          (t[9] = e))
        : (e = t[9]),
      e
    );
  }
  let s;
  return (t[10] === e ? (s = t[11]) : ((s = (0, Pt.jsx)(Qe, { ...e })), (t[10] = e), (t[11] = s)), s);
}
var Nt, Pt;
function Ft() {
  return (Ft = e(() => {
    ((Nt = E()), _(), tt(), $e(), G(), jt(), rt(), (Pt = O()));
  }))();
}
function It(e, { canPreviewSandboxFiles: t = !0 } = {}) {
  let n = new Map(),
    r = new Map();
  return e.flatMap((e, i) => {
    let a = Lt(e, t),
      o = st(e);
    if (a == null || o == null) return [];
    let s = L(e.file_id) ?? L(e.id),
      c = n.get(a) ?? (s == null ? void 0 : r.get(s));
    if (c != null) return (c.contentReferenceIndexes.push(i), n.set(a, c), s != null && r.set(s, c), []);
    let l = { contentReferenceIndex: i, contentReferenceIndexes: [i], fileKey: a, fileName: o, reference: e };
    return (n.set(a, l), s != null && r.set(s, l), [l]);
  });
}
function Lt(e, t) {
  let n = st(e),
    r = L(e.matched_text),
    i = L(e.sandbox_path),
    a = L(e.cloud_doc_url),
    o = e.codex_file_citation_purpose === `output` && a != null ? v(a) : null,
    s = o?.workspaceDocument == null ? null : o.nativeFileId;
  return e.type !== `file` ||
    !le(e) ||
    n == null ||
    (s == null && !t) ||
    (s == null && i == null && !r?.includes(`sandbox:`)) ||
    e.source_type === `library_folder` ||
    (s == null && !Ie(n))
    ? null
    : ((s == null ? null : `google:${s}`) ?? L(e.library_file_id) ?? L(e.file_id) ?? L(e.id) ?? i);
}
function Rt() {
  return (Rt = e(() => {
    (l(), De(), at());
  }))();
}
function zt(e) {
  let t = (0, Ht.c)(7),
    { contentReferences: n, liveResources: r } = e,
    i = ze(),
    o;
  t[0] !== n || t[1] !== i || t[2] !== r
    ? ((o = [
        ...It(n, { canPreviewSandboxFiles: ne({ browserPreview: !0 }) }).map(Vt),
        ...(i == null
          ? []
          : (r ?? []).map((e) =>
              (0, Ut.jsx)(Ge, { conversationId: i.conversationId, hostId: i.hostId, resource: e }, fe(e)),
            )),
      ]),
      (t[0] = n),
      (t[1] = i),
      (t[2] = r),
      (t[3] = o))
    : (o = t[3]);
  let s = o;
  if (s.length === 0) return null;
  let c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Ut.jsx)(a, {
        id: `chatgpt.artifacts.end_resources.toggle.show_less.label`,
        defaultMessage: `Show less`,
        description: `Button label at the bottom of an expanded file-card list under a ChatGPT response. Clicking it collapses the list back to the first three files. This is a short, space-limited label for end users.`,
      })),
      (t[4] = c))
    : (c = t[4]);
  let l;
  return (
    t[5] === s
      ? (l = t[6])
      : ((l = (0, Ut.jsx)(`div`, {
          className: `mt-3 w-full max-w-120`,
          children: (0, Ut.jsx)(Xe, {
            showLessLabel: c,
            showMoreLabel: Bt,
            variant: `artifact-list`,
            children: s,
          }),
        })),
        (t[5] = s),
        (t[6] = l)),
    l
  );
}
function Bt(e) {
  return (0, Ut.jsx)(a, {
    id: `chatgpt.artifacts.end_resources.toggle.show_more.label`,
    defaultMessage: `{hiddenResourceCount, number} more`,
    description: `Button label at the bottom of a collapsed file-card list under a ChatGPT response. Clicking it reveals the remaining files. Placeholder {hiddenResourceCount} is the number of hidden files and is always a positive integer. This is a short, space-limited label for end users.`,
    values: { hiddenResourceCount: e },
  });
}
function Vt(e) {
  let { contentReferenceIndex: t, fileKey: n, reference: r } = e;
  return (0, Ut.jsx)(
    ct,
    { contentReferenceIndex: t, presentation: `artifact-row`, reference: r },
    `file:${n}`,
  );
}
var Ht, Ut;
function Wt() {
  return (Wt = e(() => {
    ((Ht = E()), A(), _(), Je(), qe(), Rt(), ot(), G(), Te(), (Ut = O()));
  }))();
}
var Gt, Kt;
function qt() {
  return (qt = e(() => {
    ((Gt = k()), (Kt = (0, Gt.createContext)(!0)));
  }))();
}
function Jt(e) {
  let n = (0, Yt.c)(10),
    { conversationId: r, handoff: i } = e,
    o = s(Ae),
    { sharedConversationId: c } = y(),
    l = te(Le, r);
  if (i == null || c != null || l == null) return null;
  let u;
  n[0] !== r || n[1] !== i.browserOwnerConversationId || n[2] !== i.tabId || n[3] !== o
    ? ((u = () => {
        X(o, r, { targetTabId: i.tabId, browserOwnerConversationId: i.browserOwnerConversationId });
      }),
      (n[0] = r),
      (n[1] = i.browserOwnerConversationId),
      (n[2] = i.tabId),
      (n[3] = o),
      (n[4] = u))
    : (u = n[4]);
  let d;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Xt.jsx)(se, { className: `icon-sm` })), (n[5] = d))
    : (d = n[5]);
  let f, p;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Xt.jsx)(`span`, {
        className: `flex-1 text-start`,
        children: (0, Xt.jsx)(a, {
          id: `chatgptConversations.cloudBrowser.handoff.open`,
          defaultMessage: `Open cloud browser`,
          description: `Action beneath an assistant message that securely opens the specific cloud-browser tab handed off to the user`,
        }),
      })),
      (p = (0, Xt.jsx)(T, { className: `icon-sm` })),
      (n[6] = f),
      (n[7] = p))
    : ((f = n[6]), (p = n[7]));
  let m;
  return (
    n[8] === u
      ? (m = n[9])
      : ((m = (0, Xt.jsxs)(t, {
          className: `mt-2 w-fit max-w-full self-start`,
          color: `secondary`,
          radius: `large`,
          size: `conversationPill`,
          onClick: u,
          children: [d, f, p],
        })),
        (n[8] = u),
        (n[9] = m)),
    m
  );
}
var Yt, Xt;
function Zt() {
  return (Zt = e(() => {
    ((Yt = E()), u(), _(), m(), C(), Re(), b(), re(), Y(), We(), (Xt = O()));
  }))();
}
function Qt(e, t, { conversationId: n, isTemporaryChat: r, messageId: i }) {
  if (r || !i) return;
  let a = t.ownerDocument,
    o = (r) => {
      let o = a.getSelection();
      if (
        $t.has(r) ||
        o == null ||
        o.rangeCount === 0 ||
        o.isCollapsed ||
        !t.contains(o.getRangeAt(0).startContainer) ||
        r.composedPath().some((e) => e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)
      )
        return;
      let s = o.toString().length,
        { authLoading: c, authMethod: l } = e.get(ye),
        u = e.get(Le, n);
      s === 0 ||
        c ||
        l !== `chatgpt` ||
        u == null ||
        e.get(j, n) ||
        ($t.add(r),
        ve
          .safePost(`/conversation/implicit_message_feedback`, {
            requestBody: {
              conversation_id: u,
              message_id: i,
              source: `keyboard`,
              location: `selection`,
              feedback: { feedback_type: `copy`, selected_text_length: s },
            },
          })
          .catch(() => void 0));
    };
  return (a.addEventListener(`copy`, o, !0), () => a.removeEventListener(`copy`, o, !0));
}
var $t;
function en() {
  return (en = e(() => {
    (Ee(), W(), Y(), ($t = new WeakSet()));
  }))();
}
function tn(e) {
  let n = (0, nn.c)(15),
    { items: r } = e,
    [i, a] = (0, rn.useState)(!1),
    o = (0, rn.useRef)(null),
    s = f(),
    c;
  n[0] === s
    ? (c = n[1])
    : ((c = s.formatMessage({
        id: `chatgpt.pythonExecution.viewAnalysis`,
        defaultMessage: `View analysis`,
        description: `Accessible label and tooltip for opening the read-only Python source and output behind an assistant response`,
      })),
      (n[0] = s),
      (n[1] = c));
  let l = c,
    u,
    d;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = () => a(!0)), (d = (0, an.jsx)(w, {})), (n[2] = u), (n[3] = d))
    : ((u = n[2]), (d = n[3]));
  let p;
  n[4] === l
    ? (p = n[5])
    : ((p = (0, an.jsx)(t, {
        ref: o,
        "aria-label": l,
        color: `secondary`,
        radius: `full`,
        size: `iconCircleSm`,
        onClick: u,
        children: d,
      })),
      (n[4] = l),
      (n[5] = p));
  let m;
  n[6] !== l || n[7] !== p
    ? ((m = (0, an.jsx)(S, { tooltipContent: l, children: p })), (n[6] = l), (n[7] = p), (n[8] = m))
    : (m = n[8]);
  let h;
  n[9] !== i || n[10] !== r
    ? ((h = i
        ? (0, an.jsx)(on, {
            items: r,
            onClose: () => a(!1),
            onCloseAutoFocus: (e) => {
              (e.preventDefault(), o.current?.focus());
            },
          })
        : null),
      (n[9] = i),
      (n[10] = r),
      (n[11] = h))
    : (h = n[11]);
  let g;
  return (
    n[12] !== m || n[13] !== h
      ? ((g = (0, an.jsxs)(`span`, { className: `inline-flex align-middle`, children: [m, h] })),
        (n[12] = m),
        (n[13] = h),
        (n[14] = g))
      : (g = n[14]),
    g
  );
}
var nn, rn, an, on;
function sn() {
  return (sn = e(() => {
    ((nn = E()),
      (rn = k()),
      _(),
      C(),
      d(),
      ee(),
      h(),
      (an = O()),
      x(),
      (on = n(
        async () =>
          (
            await g(
              async () => {
                let { PythonAnalysisDialog: e } = await import(`./analysis-dialog-d730f7211420.js`);
                return { PythonAnalysisDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4]),
              import.meta.url,
            )
          ).PythonAnalysisDialog,
        { propagateLoadError: !0 },
      )));
  }))();
}
function cn(e, t, n) {
  let r = e.ownerDocument,
    i = r.defaultView;
  if (!i || r.hidden || !e.checkVisibility) return (n.skipFirstPaint(), () => {});
  let a = i,
    o = !1,
    s,
    c,
    l,
    u,
    d = !1,
    f = !0,
    p = new Set(),
    m = new Set(),
    h = new Set(),
    g = new Set(),
    _ = new MutationObserver(T),
    v = new IntersectionObserver((t) => {
      for (let n of t)
        (n.target === e && (f = n.isIntersecting),
          n.isIntersecting ? (g.add(n.target), T()) : g.delete(n.target) && T());
    }),
    y = new ResizeObserver((e) => {
      e.some((e) => g.has(e.target)) && T();
    });
  function b(e) {
    h.has(e) || (h.add(e), v.observe(e), y.observe(e));
  }
  function x(e) {
    p.has(e) ||
      (p.add(e),
      _.observe(e, { subtree: !0, childList: !0, characterData: !0, attributes: !0 }),
      e.addEventListener(`animationstart`, T, !0),
      e.addEventListener(`transitionrun`, T, !0));
  }
  function S(e) {
    if (e.parentElement) return e.parentElement;
    let t = e.getRootNode();
    return t instanceof ShadowRoot ? t.host : null;
  }
  function C(e, t, n) {
    let i = Math.max(t.left, 0),
      o = Math.min(t.right, r.documentElement.clientWidth),
      s = Math.max(t.top, 0),
      c = Math.min(t.bottom, r.documentElement.clientHeight);
    for (let t = e instanceof Element ? S(e) : e.parentElement; t; t = S(t)) {
      let e = a.getComputedStyle(t),
        n = e.overflowX !== `visible`,
        r = e.overflowY !== `visible`;
      if (!n && !r) continue;
      let l = t.getBoundingClientRect(),
        u = t instanceof HTMLElement && t.offsetWidth ? l.width / t.offsetWidth : 1,
        d = t instanceof HTMLElement && t.offsetHeight ? l.height / t.offsetHeight : 1,
        f = l.left + t.clientLeft * u,
        p = l.top + t.clientTop * d;
      (n && ((i = Math.max(i, f)), (o = Math.min(o, f + t.clientWidth * u))),
        r && ((s = Math.max(s, p)), (c = Math.min(c, p + t.clientHeight * d))));
    }
    let l = o - i,
      u = c - s;
    return l > 0 && u > 0 && l >= n && u >= n;
  }
  function w(e, t = !1) {
    if (e instanceof ShadowRoot) x(e);
    else {
      if (e.matches(ln)) return;
      d ||= e.getAnimations().some((e) => e.playState === `running` || e.pending);
    }
    if (!(e instanceof Element)) {
      for (let t of e.children) {
        let e = w(t);
        if (e) return e;
      }
      return;
    }
    let n = e;
    for (; n && a.getComputedStyle(n).display === `contents`;) n = S(n);
    if (!n || !n.checkVisibility({ checkOpacity: !0 })) {
      n && !n.checkVisibility() && b(n);
      return;
    }
    if (e.shadowRoot) return w(e.shadowRoot);
    for (let t of e.children) {
      let e = w(t);
      if (e) return e;
    }
    if (
      (n !== e && a.getComputedStyle(e).visibility !== `visible`) ||
      !n.checkVisibility({ checkOpacity: !0, checkVisibilityCSS: n === e })
    )
      return;
    let i = Array.from(e.childNodes).filter((e) => e instanceof Text && !!e.data.replaceAll(`​`, ``).trim()),
      o = !e.childElementCount || i.length > 0;
    o && b(n);
    for (let e of i) {
      let t = r.createRange();
      if ((t.selectNodeContents(e), Array.from(t.getClientRects()).some((t) => C(e, t, 0)))) return e;
    }
    if (!t && o && C(e, e.getBoundingClientRect(), 10)) return e;
  }
  function T() {
    o || s !== void 0 || (s = a.requestAnimationFrame(E));
  }
  function E() {
    if (((s = void 0), n.paintReadiness() === `closed` || !e.isConnected)) return k();
    if (r.hidden) return D();
    let i = e.checkVisibility();
    if (i && !f) {
      let t = a.getComputedStyle(e);
      i = t.overflowX === `visible` || t.overflowY === `visible`;
    }
    d = !1;
    for (let t = S(e); t; t = S(t))
      (m.has(t) || (m.add(t), _.observe(t, { attributes: !0 })),
        (d = i && (d || t.getAnimations().some((e) => e.playState === `running` || e.pending))));
    if (!i) {
      (b(e), (c = void 0), (l = void 0), (u = void 0));
      return;
    }
    let o = e.querySelector(`[data-dil-message-id="${CSS.escape(t)}"]`),
      p = o && e.contains(o) ? w(o, !0) : void 0;
    if (o && p && p === c && o === l && u !== void 0) {
      (k(),
        n.recordDILFirstVisibleToken(
          o.matches(`[data-w-component="ValdiDIL"]`) || o.querySelector(`[data-w-component="ValdiDIL"]`)
            ? `valdi`
            : `frame`,
          u,
        ));
      return;
    }
    ((c = p),
      (l = o),
      (u = p ? a.performance.now() : void 0),
      (p || (d && e.checkVisibility({ checkVisibilityCSS: !0 }))) && T());
  }
  function D() {
    r.hidden && (k(), n.skipFirstPaint());
  }
  function O(t) {
    t.target instanceof Element && t.target.contains(e) && T();
  }
  function k() {
    ((o = !0), ee(), _.disconnect(), v.disconnect(), y.disconnect(), h.clear(), g.clear());
    for (let e of p)
      (e.removeEventListener(`animationstart`, T, !0), e.removeEventListener(`transitionrun`, T, !0));
    (p.clear(),
      m.clear(),
      s !== void 0 && a.cancelAnimationFrame(s),
      r.removeEventListener(`visibilitychange`, D),
      r.removeEventListener(`scroll`, T, !0),
      a.removeEventListener(`resize`, T),
      r.removeEventListener(`animationstart`, O, !0),
      r.removeEventListener(`transitionrun`, O, !0));
  }
  let ee = n.observePaintReadiness(T);
  return (
    x(e),
    v.observe(e),
    r.addEventListener(`visibilitychange`, D),
    r.addEventListener(`scroll`, T, !0),
    a.addEventListener(`resize`, T),
    r.addEventListener(`animationstart`, O, !0),
    r.addEventListener(`transitionrun`, O, !0),
    T(),
    k
  );
}
var ln;
function un() {
  return (un = e(() => {
    ln = `style, script, template, defs, symbol, [role="status"], [role="alert"], [role="progressbar"], [aria-busy="true"], [aria-hidden="true"], .sr-only, [data-d-component="loading-block"]`;
  }))();
}
function dn(e, t) {
  let n = e.ownerDocument,
    r = n.defaultView;
  if (r == null) return () => {};
  let i = !1,
    a = null,
    o = null,
    s = () => {},
    c = () => {
      ((i = !0),
        f.disconnect(),
        n.removeEventListener(`visibilitychange`, l),
        s(),
        a != null && r.cancelAnimationFrame(a),
        o != null && r.cancelAnimationFrame(o));
    },
    l = () => {
      n.hidden && (t.skipFirstPaint(), c());
    },
    u = () => {
      let n = e.querySelector(`:scope > [data-markdown-text-style="assistant-message"]`);
      if (n == null) return !1;
      if (n.querySelector(`dil-renderer`) != null) return (t.skipFirstPaint(), c(), !1);
      let r = n.textContent?.replace(/\u200B/g, ``).trim() ?? ``;
      return r.length > 0 && n.querySelector(`[role="status"]`)?.textContent?.trim() !== r;
    },
    d = () => {
      if (!i) {
        if (t.paintReadiness() === `closed`) {
          c();
          return;
        }
        if (n.hidden) {
          l();
          return;
        }
        t.paintReadiness() === `ready` &&
          a == null &&
          o == null &&
          u() &&
          (a = r.requestAnimationFrame(() => {
            ((a = null),
              (o = r.requestAnimationFrame(() => {
                ((o = null), !i && e.isConnected && !n.hidden && u() && (t.recordFirstPaint(), c()));
              })));
          }));
      }
    },
    f = new MutationObserver(d);
  return (
    f.observe(e, { characterData: !0, childList: !0, subtree: !0 }),
    n.addEventListener(`visibilitychange`, l),
    (s = t.observePaintReadiness(d)),
    d(),
    c
  );
}
function fn({ container: e, getRoots: t, isMarkdown: n, getState: r, onSample: i, onHidden: a }) {
  let o = e.ownerDocument,
    s = o.defaultView;
  if (!s || o.hidden || !e.checkVisibility) return (a(), { sample() {}, dispose() {} });
  let c = s,
    l,
    u = !1,
    d = !0,
    f,
    p = !1,
    m = n(),
    h = [c.innerWidth, c.innerHeight].join(`,`),
    g = new Map();
  function _(e) {
    g.has(e) || g.set(e, { left: e.scrollLeft, top: e.scrollTop });
  }
  function v() {
    let e = [c.innerWidth, c.innerHeight].join(`,`),
      t = h !== e;
    h = e;
    for (let [e, n] of g)
      e.isConnected &&
        (n.left !== e.scrollLeft || n.top !== e.scrollTop) &&
        ((t = !0), (n.left = e.scrollLeft), (n.top = e.scrollTop));
    return t;
  }
  for (let t = e; t; t = Sn(t)) _(t);
  let y = new WeakMap(),
    b = new Set(),
    x = new MutationObserver((e) => {
      (S(e), w());
    });
  function S(e) {
    if (e.length) {
      d = !0;
      for (let n of t()) y.get(n)?.invalidate(e);
    }
  }
  function C(e) {
    b.has(e) ||
      (b.add(e),
      x.observe(e, { subtree: !0, childList: !0, characterData: !0, attributes: !0 }),
      e.addEventListener(`transitionrun`, E, !0),
      e.addEventListener(`animationstart`, E, !0));
  }
  function w() {
    !u && l === void 0 && (l = c.requestAnimationFrame(() => T()));
  }
  function T(s = c.performance.now()) {
    if (u) return;
    if ((l !== void 0 && c.cancelAnimationFrame(l), (l = void 0), o.hidden)) {
      (O(), a());
      return;
    }
    let h = r();
    if (!e.isConnected || h === `closed`) {
      O();
      return;
    }
    S(x.takeRecords());
    let g = v();
    if (p && g) {
      (O(), a());
      return;
    }
    if (((m !== n() || g) && ((m = n()), (y = new WeakMap()), (d = !0)), d || f === void 0)) {
      let e = 2166136261,
        n = !1;
      for (let r of t()) {
        let t = y.get(r);
        t || ((t = Cn(r, m, C, _)), y.set(r, t));
        let i = t.read();
        i !== void 0 && ((n = !0), (e = Math.imul(e ^ i, 16777619)));
      }
      ((f = n ? e : void 0), (p ||= n), (d = !1));
    }
    (h === `complete` && O(), i(f, s, h === `complete`));
  }
  function E() {
    ((y = new WeakMap()), (d = !0), w());
  }
  function D() {
    o.hidden && (O(), a());
  }
  function O() {
    ((u = !0), x.disconnect(), l !== void 0 && c.cancelAnimationFrame(l));
    for (let e of b)
      (e.removeEventListener(`transitionrun`, E, !0), e.removeEventListener(`animationstart`, E, !0));
    (b.clear(), g.clear(), o.removeEventListener(`visibilitychange`, D));
  }
  return (
    C(e),
    o.addEventListener(`visibilitychange`, D),
    w(),
    {
      sample: T,
      dispose() {
        let e = !u && p && v();
        (O(), e && a());
      },
    }
  );
}
var pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn;
function Tn() {
  return (Tn = e(() => {
    ((pn = `button, input, select, textarea, [role="button"], [role="toolbar"], [role="menu"], [role="status"], [role="alert"], [role="progressbar"], [contenteditable="true"], [data-cot], script, style, template`),
      (mn = `script, style, template, defs, symbol, [role="status"], [role="alert"], [role="progressbar"], [data-cot], [data-d-component="loading-block"]`),
      (hn = `p, h1, h2, h3, h4, h5, h6, blockquote, pre, ul, ol, table, div, section, article, figure, figcaption, dl`),
      (gn = `p, h1, h2, h3, h4, h5, h6, strong, b, em, i, s, del, sub, sup, a, blockquote, pre, code, ul, ol, li, table, thead, tbody, tr, th, td`),
      (_n = `img, svg, path, circle, rect, line, polyline, polygon, canvas, video`),
      (vn =
        `src.srcset.sizes.alt.width.height.d.points.x.y.x1.y1.x2.y2.cx.cy.r.rx.ry.viewBox.preserveAspectRatio.fill.fill-opacity.stroke.stroke-width.stroke-opacity.opacity.transform`.split(
          `.`,
        )),
      (yn = (e, t) => e.left === t.left && e.top === t.top && e.right === t.right && e.bottom === t.bottom),
      (bn = (e, t) =>
        t.right > t.left &&
        t.bottom > t.top &&
        e.left < t.right &&
        e.right > t.left &&
        e.top < t.bottom &&
        e.bottom > t.top),
      (xn = (e, t) => e.left <= t.left && e.top <= t.top && e.right >= t.right && e.bottom >= t.bottom),
      (Sn = (e) => {
        if (e.parentElement) return e.parentElement;
        let t = e.getRootNode();
        return t instanceof ShadowRoot ? t.host : null;
      }),
      (Cn = (e, t, n, r) => {
        let i = (t ? pn : mn) + `, [hidden], [aria-hidden="true"], [aria-busy="true"], .sr-only`,
          a = e.ownerDocument,
          o = a.defaultView,
          s = new WeakMap();
        return {
          read: () => {
            let c = e.getBoundingClientRect(),
              l = 0,
              u = 1,
              d = !1,
              f = 0,
              p,
              m = (e) => {
                for (let t = 0; t < e.length; t += 1)
                  ((l = (Math.imul(l, 16777619) + e.charCodeAt(t)) | 0), (u = Math.imul(u, 16777619)));
              },
              h = (e) => {
                m(
                  `${Math.round(e.left - c.left)},${Math.round(e.top - c.top)},${Math.round(e.right - e.left)},${Math.round(e.bottom - e.top)}`,
                );
              },
              g = (e, t, n = o.getComputedStyle(e)) => {
                let i = n.overflowX !== `visible`,
                  a = n.overflowY !== `visible`;
                if (!i && !a) return t;
                r(e);
                let s = e.getBoundingClientRect(),
                  c = e instanceof HTMLElement && e.offsetWidth ? s.width / e.offsetWidth : 1,
                  l = e instanceof HTMLElement && e.offsetHeight ? s.height / e.offsetHeight : 1,
                  u = s.left + e.clientLeft * c,
                  d = s.top + e.clientTop * l;
                return {
                  left: i ? Math.max(t.left, u) : t.left,
                  right: i ? Math.min(t.right, u + e.clientWidth * c) : t.right,
                  top: a ? Math.max(t.top, d) : t.top,
                  bottom: a ? Math.min(t.bottom, d + e.clientHeight * l) : t.bottom,
                };
              },
              _ = a.compatMode === `BackCompat` ? a.body : a.documentElement,
              v = {
                left: 0,
                top: 0,
                right: Math.min(o.innerWidth, _.clientWidth),
                bottom: Math.min(o.innerHeight, _.clientHeight),
              };
            for (let t = Sn(e); t; t = Sn(t)) v = g(t, v);
            let y = (e, n, r) => {
                if (!e.length || e.parentElement == null) return;
                let i = (p ??= a.createRange()),
                  o,
                  s,
                  c = 0,
                  l = () => {
                    if (s === void 0) return;
                    let t = e.data.slice(s, c).replaceAll(`​`, ``).trim();
                    (t && ((d = !0), (f += 1), m(t)), (s = void 0));
                  },
                  u = (t, r) => {
                    (i.setStart(e, t), i.setEnd(e, r));
                    let a = i.getBoundingClientRect();
                    if (!bn(n, a)) return;
                    if (xn(n, a) || r - t <= 1) {
                      (c !== t && l(), (s ??= t), (c = r));
                      let e = {
                        left: Math.max(n.left, a.left),
                        right: Math.min(n.right, a.right),
                        top: Math.max(n.top, a.top),
                        bottom: Math.min(n.bottom, a.bottom),
                      };
                      o = o
                        ? {
                            left: Math.min(o.left, e.left),
                            right: Math.max(o.right, e.right),
                            top: Math.min(o.top, e.top),
                            bottom: Math.max(o.bottom, e.bottom),
                          }
                        : e;
                      return;
                    }
                    let d = t + Math.floor((r - t) / 2);
                    (u(t, d), u(d, r));
                  };
                (u(0, e.length),
                  l(),
                  o &&
                    (h(o),
                    t || (m(r.color), m(r.font), m(r.letterSpacing), m(r.textTransform), m(r.textShadow))));
              },
              b = (r, a, p = !0) => {
                if (!(r instanceof Element) || r.matches(i)) return;
                let _ = o.getComputedStyle(r);
                if (_.display === `none` || _.opacity === `0`) return;
                let v = g(r, a, _);
                if (v.right <= v.left || v.bottom <= v.top) return;
                if (p && r !== e && r.matches(hn)) {
                  let e = r.getBoundingClientRect(),
                    t = s.get(r);
                  if (!t || !yn(t.rect, e) || !yn(t.clip, v) || t.originX !== c.x || t.originY !== c.y) {
                    let n = l,
                      i = u,
                      o = d,
                      p = f;
                    ((l = 0),
                      (u = 1),
                      (d = !1),
                      (f = 0),
                      b(r, a, !1),
                      (t = {
                        rect: e,
                        clip: v,
                        originX: c.x,
                        originY: c.y,
                        hash: l,
                        multiplier: u,
                        visible: d,
                        textCount: f,
                      }),
                      s.set(r, t),
                      (l = n),
                      (u = i),
                      (d = o),
                      (f = p));
                  }
                  t.visible &&
                    ((d = !0),
                    (f += t.textCount),
                    (l = (Math.imul(l, t.multiplier) + t.hash) | 0),
                    (u = Math.imul(u, t.multiplier)));
                  return;
                }
                let x =
                    _.display === `contents`
                      ? _.visibility === `visible`
                      : r.checkVisibility({
                          opacityProperty: !0,
                          visibilityProperty: !0,
                          contentVisibilityAuto: !0,
                        }),
                  S = l,
                  C = f;
                r.shadowRoot && n(r.shadowRoot);
                for (let e of (r.shadowRoot ?? r).childNodes) e instanceof Text ? x && y(e, v, _) : b(e, v);
                if (!x) return;
                if ((!t && f !== C && _.textDecorationLine !== `none` && m(_.textDecoration), l !== S && t)) {
                  if ((r.matches(gn) && m(r.localName), r.matches(`pre code span`)))
                    (m(r.className), r instanceof HTMLElement && m(r.style.color));
                  else if (r.matches(`code span`)) for (let e of r.classList) e.startsWith(`hljs-`) && m(e);
                }
                let w =
                  !t &&
                  _.display !== `contents` &&
                  (wn(_.backgroundColor) ||
                    _.backgroundImage !== `none` ||
                    _.boxShadow !== `none` ||
                    _.opacity !== `1` ||
                    [`top`, `right`, `bottom`, `left`].some(
                      (e) =>
                        _.getPropertyValue(`border-${e}-width`) !== `0px` &&
                        wn(_.getPropertyValue(`border-${e}-color`)),
                    ));
                if (r.matches(_n) || w) {
                  let e = r.getBoundingClientRect();
                  if (bn(v, e)) {
                    if (((d = !0), r.matches(_n))) {
                      m(r.localName);
                      for (let e of vn) m(r.getAttribute(e) ?? ``);
                    }
                    (w &&
                      (m(_.background),
                      m(_.borderTop),
                      m(_.borderRight),
                      m(_.borderBottom),
                      m(_.borderLeft),
                      m(_.borderRadius),
                      m(_.boxShadow),
                      m(_.opacity)),
                      h({
                        left: Math.max(v.left, e.left),
                        right: Math.min(v.right, e.right),
                        top: Math.max(v.top, e.top),
                        bottom: Math.min(v.bottom, e.bottom),
                      }));
                  }
                }
              };
            return (b(e, v), d ? l : void 0);
          },
          invalidate: (t) => {
            for (let n of t) {
              let t = n.target instanceof Element ? n.target : n.target.parentElement;
              if (!(!t || (n.type !== `attributes` && t.closest(i)))) {
                if (n.type === `attributes`) s = new WeakMap();
                else for (; t && t !== e;) (s.delete(t), (t = Sn(t)));
              }
            }
          },
        };
      }),
      (wn = (e) => e !== `transparent` && !/^rgba\(.*,\s*0\)$/.test(e)));
  }))();
}
function En(e, t, n) {
  let r = t.talvtRenderer === `markdown`,
    i = e.closest(`[data-talvt-turn-state]`) ?? e,
    a = () =>
      r
        ? e.querySelector(`:scope > [data-markdown-text-style="assistant-message"]`)
        : e.querySelector(`[data-dil-message-id="${CSS.escape(t.messageId)}"]`),
    o = fn({
      container: i,
      isMarkdown: () => r,
      getRoots: () => {
        let e = a();
        return e ? [e] : [];
      },
      getState: () => {
        let o = a();
        if (
          !e.isConnected ||
          o?.matches(`[data-w-component="ValdiDIL"]`) ||
          o?.querySelector(`[data-w-component="ValdiDIL"]`) ||
          (!r &&
            e.querySelector(
              `[data-dil-source-message-id="${CSS.escape(t.messageId)}"] [data-dil-render-failed]`,
            )) ||
          (r && o?.querySelector(`dil-renderer`))
        )
          return (n.skipTalvt(), `closed`);
        let s = n.talvtReadiness();
        return s === `closed`
          ? `closed`
          : s === `ready` && i.dataset.talvtTurnState === `complete`
            ? `complete`
            : `waiting`;
      },
      onHidden: n.skipTalvt,
      onSample: (e, t, i) => {
        n.recordLastVisible(r ? `markdown` : `frame`, e, t, i);
      },
    }),
    s = n.observePaintReadiness(() => o.sample());
  return () => {
    (s(), o.dispose());
  };
}
function Dn() {
  return (Dn = e(() => {
    Tn();
  }))();
}
function On(e) {
  let t = (0, Pn.c)(3),
    { conversationId: n } = e,
    r = s(i),
    a;
  return (
    t[0] !== n || t[1] !== r
      ? ((a = (0, In.jsx)(`span`, {
          ref: (e) => {
            if (e != null) return q(r, n);
          },
          hidden: !0,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = a))
      : (a = t[2]),
    a
  );
}
function kn(e) {
  let t = (0, Pn.c)(5),
    { children: n, messages: r } = e;
  if (n == null || r == null || r.length === 0) return n;
  let i;
  t[0] === r ? (i = t[1]) : ((i = Array.from(new Map(r.map(jn)).values()).map(An)), (t[0] = r), (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, In.jsxs)(In.Fragment, { children: [n, i] })), (t[2] = n), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function An(e) {
  return (0, In.jsx)(Mn, { ...e }, `${e.turnSessionId}:${e.messageId}`);
}
function jn(e) {
  return [`${e.turnSessionId}:${e.messageId}`, e];
}
function Mn(e) {
  let t = (0, Pn.c)(3),
    n = s(i),
    r = (0, Fn.useRef)(null),
    a;
  return (
    t[0] !== e || t[1] !== n
      ? ((a = (0, In.jsx)(`span`, {
          ref: (t) => {
            t == null ||
              !e.completed ||
              (r.current?.turnSessionId === e.turnSessionId && r.current.messageId === e.messageId) ||
              ((r.current = { turnSessionId: e.turnSessionId, messageId: e.messageId }),
              F(n, e)?.recordRendered());
          },
          hidden: !0,
        })),
        (t[0] = e),
        (t[1] = n),
        (t[2] = a))
      : (a = t[2]),
    a
  );
}
function Nn(e) {
  let t = (0, Pn.c)(8),
    n = s(i),
    { turnSessionId: r, messageId: a, firstPaintRenderer: o, talvtRenderer: c, hasSingleSource: l } = e,
    u = (0, Fn.useRef)(null),
    d;
  return (
    t[0] !== o || t[1] !== l || t[2] !== a || t[3] !== e || t[4] !== n || t[5] !== c || t[6] !== r
      ? ((d = (0, In.jsx)(`span`, {
          ref: (t) => {
            if (t?.parentElement == null || (o == null && c == null)) return;
            let i = u.current;
            (i == null || i.scope !== n || i.turnSessionId !== r || i.messageId !== a) &&
              ((i = { scope: n, turnSessionId: r, messageId: a, observation: F(n, e) }), (u.current = i));
            let s = i.observation;
            if (s == null) return;
            if (c === `markdown` && !l) {
              (s.skipFirstPaint(), s.skipTalvt());
              return;
            }
            let d;
            o === `dil_v2`
              ? (d = cn(t.parentElement, a, s))
              : o === `markdown` && (d = dn(t.parentElement, s));
            let f = En(t.parentElement, e, s);
            return () => {
              (d?.(), f());
            };
          },
          hidden: !0,
        })),
        (t[0] = o),
        (t[1] = l),
        (t[2] = a),
        (t[3] = e),
        (t[4] = n),
        (t[5] = c),
        (t[6] = r),
        (t[7] = d))
      : (d = t[7]),
    d
  );
}
var Pn, Fn, In;
function Ln() {
  return (Ln = e(() => {
    ((Pn = E()), u(), (Fn = k()), D(), un(), Dn(), Ce(), (In = O()));
  }))();
}
function Rn(e) {
  let t = (0, Wn.c)(201),
    {
      dilPreparationId: n,
      dilPreparing: r,
      feedbackEnabled: a,
      clinicalCitationMode: o,
      item: c,
      browserConversationId: l,
      canRequestQuote: u,
      conversationId: d,
      conversationType: f,
      cwd: m,
      hostId: h,
      imageEngagementContext: g,
      isLatestActorMessage: _,
      isParagen: v,
      isPresented: y,
      isReadOnly: b,
      isTemporaryChat: x,
      shareEnabled: S,
      suppressCopyTurnToClipboardAnalytics: C,
      trackShownImpressions: w,
      preview: T,
      turnId: E,
      markdownDirectives: D,
    } = e,
    O = a !== void 0 && a,
    k = f === void 0 ? `primary` : f,
    ee = _ !== void 0 && _,
    A = v !== void 0 && v,
    re = y === void 0 || y,
    j = b !== void 0 && b,
    M = x !== void 0 && x,
    oe = S !== void 0 && S,
    N = w === void 0 || w,
    se = s(i),
    ce;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = { name: `browser.in-app` }), (t[0] = ce))
    : (ce = t[0]);
  let le = te(ue, ce).isCapable,
    P = (0, Gn.useContext)(Kt) && !c.completed,
    F = te(Le, d),
    I = te(xe, d),
    pe = p(o != null && (o === `work` ? Oe : Me)),
    me = (0, Gn.useContext)(_e),
    L = te(be, d),
    R = T != null || L || me === `restricted`,
    z = l === void 0 ? (F ?? d) : l,
    ge,
    B,
    ve,
    V,
    H,
    ye,
    U,
    Ce,
    W,
    Te,
    Ee,
    De,
    ke,
    Ae,
    je,
    G,
    Ne,
    Pe,
    Fe,
    Ie,
    Re,
    ze,
    K,
    Be,
    q,
    Ve,
    He,
    Ue,
    J,
    Y,
    We,
    X;
  if (
    t[1] !== u ||
    t[2] !== pe ||
    t[3] !== L ||
    t[4] !== d ||
    t[5] !== I ||
    t[6] !== k ||
    t[7] !== m ||
    t[8] !== n ||
    t[9] !== r ||
    t[10] !== h ||
    t[11] !== g ||
    t[12] !== le ||
    t[13] !== ee ||
    t[14] !== A ||
    t[15] !== re ||
    t[16] !== j ||
    t[17] !== P ||
    t[18] !== M ||
    t[19] !== c.browserHandoff ||
    t[20] !== c.codeBlocks ||
    t[21] !== c.completed ||
    t[22] !== c.content ||
    t[23] !== c.contentReferenceMessageIds ||
    t[24] !== c.contentReferenceMessageStatuses ||
    t[25] !== c.contentReferences ||
    t[26] !== c.copyWritingBlockMessageIds ||
    t[27] !== c.dilSpeechEligibleMessageIds ||
    t[28] !== c.dilViewState ||
    t[29] !== c.fileCitations ||
    t[30] !== c.latestMessageId ||
    t[31] !== c.messageId ||
    t[32] !== c.preciseLocationInfo ||
    t[33] !== c.preciseLocationMessageId ||
    t[34] !== c.pythonExecutions ||
    t[35] !== c.renderTelemetryMessages ||
    t[36] !== c.sourceMessageIds ||
    t[37] !== c.turnExchangeId ||
    t[38] !== c.writingBlockIndexes ||
    t[39] !== c.writingBlockMessageIds ||
    t[40] !== c.writingBlockSources ||
    t[41] !== D ||
    t[42] !== T ||
    t[43] !== z ||
    t[44] !== se ||
    t[45] !== F ||
    t[46] !== oe ||
    t[47] !== R ||
    t[48] !== C ||
    t[49] !== N ||
    t[50] !== E
  ) {
    ((V = Se(c.content, c.browserHandoff)), (H = ie(c.fileCitations ?? [], `source`).flatMap(Un)));
    let e;
    t[83] !== I || t[84] !== M || t[85] !== c.turnExchangeId || t[86] !== F || t[87] !== N
      ? ((e =
          (I === `tpp` || I === `flora`) && !M && N && F != null && c.turnExchangeId != null
            ? {
                conversationId: F,
                responseId: c.turnExchangeId,
                savedContentBackend: he.CHATGPT_CONTENT_REFERENCE_SAVED_CONTENT_BACKEND_SA_SERVER,
              }
            : void 0),
        (t[83] = I),
        (t[84] = M),
        (t[85] = c.turnExchangeId),
        (t[86] = F),
        (t[87] = N),
        (t[88] = e))
      : (e = t[88]);
    let i = e;
    ve = we.Provider;
    let a = j || T != null,
      o = T == null && !A && (u ?? !j),
      s = !c.completed,
      l = A ? void 0 : c.preciseLocationInfo,
      f = T === `share` && !L,
      p = T === `share` && !L,
      _ = T === `history` && !L;
    (t[89] !== d ||
    t[90] !== I ||
    t[91] !== k ||
    t[92] !== n ||
    t[93] !== r ||
    t[94] !== h ||
    t[95] !== g ||
    t[96] !== ee ||
    t[97] !== re ||
    t[98] !== M ||
    t[99] !== c.codeBlocks ||
    t[100] !== c.contentReferenceMessageIds ||
    t[101] !== c.contentReferenceMessageStatuses ||
    t[102] !== c.contentReferences ||
    t[103] !== c.copyWritingBlockMessageIds ||
    t[104] !== c.dilSpeechEligibleMessageIds ||
    t[105] !== c.dilViewState ||
    t[106] !== c.messageId ||
    t[107] !== c.preciseLocationMessageId ||
    t[108] !== c.renderTelemetryMessages ||
    t[109] !== c.sourceMessageIds ||
    t[110] !== c.writingBlockIndexes ||
    t[111] !== c.writingBlockMessageIds ||
    t[112] !== c.writingBlockSources ||
    t[113] !== z ||
    t[114] !== i ||
    t[115] !== oe ||
    t[116] !== R ||
    t[117] !== C ||
    t[118] !== a ||
    t[119] !== o ||
    t[120] !== s ||
    t[121] !== l ||
    t[122] !== f ||
    t[123] !== p ||
    t[124] !== _ ||
    t[125] !== N ||
    t[126] !== E
      ? ((X = {
          browserConversationId: z,
          codeBlocks: c.codeBlocks,
          conversationOrigin: I,
          conversationType: k,
          contentReferenceMessageIds: c.contentReferenceMessageIds,
          contentReferenceMessageStatuses: c.contentReferenceMessageStatuses,
          contentReferences: c.contentReferences,
          dilViewState: c.dilViewState,
          dilPreparationId: n,
          dilPreparing: r,
          renderTelemetryMessages: c.renderTelemetryMessages,
          dilSpeechEligibleMessageIds: c.dilSpeechEligibleMessageIds,
          conversationId: d,
          hostId: h,
          imageEngagementContext: g,
          isLatestActorMessage: ee,
          isPresented: re,
          isReadOnly: a,
          canRequestQuote: o,
          isStreaming: s,
          isTemporaryChat: M,
          messageId: c.messageId,
          preciseLocationInfo: l,
          preciseLocationMessageId: c.preciseLocationMessageId,
          sourceMessageIds: c.sourceMessageIds,
          savedContentResponse: i,
          shouldBlockExternalEgress: R,
          renderRestrictedWidgets: f,
          renderRestrictedImages: p,
          renderRestrictedModelResponses: _,
          shareEnabled: oe,
          suppressCopyTurnToClipboardAnalytics: C,
          trackShownImpressions: N,
          turnId: E,
          writingBlockIndexes: c.writingBlockIndexes,
          writingBlockMessageIds: c.writingBlockMessageIds,
          writingBlockSources: c.writingBlockSources,
          copyWritingBlockMessageIds: c.copyWritingBlockMessageIds,
        }),
        (t[89] = d),
        (t[90] = I),
        (t[91] = k),
        (t[92] = n),
        (t[93] = r),
        (t[94] = h),
        (t[95] = g),
        (t[96] = ee),
        (t[97] = re),
        (t[98] = M),
        (t[99] = c.codeBlocks),
        (t[100] = c.contentReferenceMessageIds),
        (t[101] = c.contentReferenceMessageStatuses),
        (t[102] = c.contentReferences),
        (t[103] = c.copyWritingBlockMessageIds),
        (t[104] = c.dilSpeechEligibleMessageIds),
        (t[105] = c.dilViewState),
        (t[106] = c.messageId),
        (t[107] = c.preciseLocationMessageId),
        (t[108] = c.renderTelemetryMessages),
        (t[109] = c.sourceMessageIds),
        (t[110] = c.writingBlockIndexes),
        (t[111] = c.writingBlockMessageIds),
        (t[112] = c.writingBlockSources),
        (t[113] = z),
        (t[114] = i),
        (t[115] = oe),
        (t[116] = R),
        (t[117] = C),
        (t[118] = a),
        (t[119] = o),
        (t[120] = s),
        (t[121] = l),
        (t[122] = f),
        (t[123] = p),
        (t[124] = _),
        (t[125] = N),
        (t[126] = E),
        (t[127] = X))
      : (X = t[127]),
      (B = _e.Provider),
      (We = R ? `restricted` : `allow`),
      t[128] !== d || t[129] !== M || t[130] !== c.latestMessageId || t[131] !== c.messageId || t[132] !== se
        ? ((q = (e) =>
            e == null
              ? void 0
              : Qt(se, e, {
                  conversationId: d,
                  isTemporaryChat: M,
                  messageId: c.latestMessageId ?? c.messageId,
                })),
          (t[128] = d),
          (t[129] = M),
          (t[130] = c.latestMessageId),
          (t[131] = c.messageId),
          (t[132] = se),
          (t[133] = q))
        : (q = t[133]),
      (Ve = `group flex min-w-0 flex-col`),
      (He = d),
      (Ue =
        !P && (c.sourceMessageIds?.length ?? 1) === 1 ? (c.sourceMessageIds?.[0] ?? c.messageId) : void 0),
      t[134] !== A || t[135] !== c.renderTelemetryMessages || t[136] !== c.sourceMessageIds
        ? ((J =
            !A &&
            c.renderTelemetryMessages?.map((e) =>
              (0, $.jsx)(
                Nn,
                {
                  ...e,
                  hasSingleSource: c.sourceMessageIds?.length === 1 && c.sourceMessageIds[0] === e.messageId,
                },
                `${e.turnSessionId}:${e.messageId}`,
              ),
            )),
          (t[134] = A),
          (t[135] = c.renderTelemetryMessages),
          (t[136] = c.sourceMessageIds),
          (t[137] = J))
        : (J = t[137]),
      t[138] === Symbol.for(`react.memo_cache_sentinel`) ? ((Y = !1), (t[138] = Y)) : (Y = t[138]),
      (ge = nt),
      (ye = `[&>*:last-child]:mb-0 [&>ol:first-child]:mt-0 [&>ul:first-child]:mt-0`));
    let v = `${d}:${c.messageId}`;
    (t[139] === v ? (U = t[140]) : ((U = { kind: `adaptive`, streamId: v }), (t[139] = v), (t[140] = U)),
      (Ce = D ?? (pe ? Kn : void 0)),
      t[141] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((W = { kind: `assistant-message` }), (t[141] = W))
        : (W = t[141]),
      (Te = z),
      (Ee = m),
      (De = h),
      (ke = E),
      (Ae = i),
      (je = !0),
      (G = 16),
      (Ne = 96),
      (Pe = P),
      (Fe = !1),
      (Ie = le),
      (Re = !0),
      (ze = !1),
      t[142] !== c.completed || t[143] !== c.pythonExecutions
        ? ((K =
            c.pythonExecutions != null && c.completed ? (0, $.jsx)(tn, { items: c.pythonExecutions }) : null),
          (t[142] = c.completed),
          (t[143] = c.pythonExecutions),
          (t[144] = K))
        : (K = t[144]),
      (Be = Ke(
        n == null ? V.content : ae(c.contentReferences.findIndex(Hn), n),
        P
          ? null
          : {
              defaultCitationPurpose: `source`,
              liveCitationKeys: H.map(fe),
              contentReferenceIndexes: It(c.contentReferences, {
                canPreviewSandboxFiles: ne({ browserPreview: !0 }),
              }).flatMap(Vn),
              inlineFileContentReferenceIndexes: c.contentReferences.flatMap(Bn),
              outputDirectiveContentReferenceIndexes: c.contentReferences.flatMap(zn),
            },
        de,
      )),
      (t[1] = u),
      (t[2] = pe),
      (t[3] = L),
      (t[4] = d),
      (t[5] = I),
      (t[6] = k),
      (t[7] = m),
      (t[8] = n),
      (t[9] = r),
      (t[10] = h),
      (t[11] = g),
      (t[12] = le),
      (t[13] = ee),
      (t[14] = A),
      (t[15] = re),
      (t[16] = j),
      (t[17] = P),
      (t[18] = M),
      (t[19] = c.browserHandoff),
      (t[20] = c.codeBlocks),
      (t[21] = c.completed),
      (t[22] = c.content),
      (t[23] = c.contentReferenceMessageIds),
      (t[24] = c.contentReferenceMessageStatuses),
      (t[25] = c.contentReferences),
      (t[26] = c.copyWritingBlockMessageIds),
      (t[27] = c.dilSpeechEligibleMessageIds),
      (t[28] = c.dilViewState),
      (t[29] = c.fileCitations),
      (t[30] = c.latestMessageId),
      (t[31] = c.messageId),
      (t[32] = c.preciseLocationInfo),
      (t[33] = c.preciseLocationMessageId),
      (t[34] = c.pythonExecutions),
      (t[35] = c.renderTelemetryMessages),
      (t[36] = c.sourceMessageIds),
      (t[37] = c.turnExchangeId),
      (t[38] = c.writingBlockIndexes),
      (t[39] = c.writingBlockMessageIds),
      (t[40] = c.writingBlockSources),
      (t[41] = D),
      (t[42] = T),
      (t[43] = z),
      (t[44] = se),
      (t[45] = F),
      (t[46] = oe),
      (t[47] = R),
      (t[48] = C),
      (t[49] = N),
      (t[50] = E),
      (t[51] = ge),
      (t[52] = B),
      (t[53] = ve),
      (t[54] = V),
      (t[55] = H),
      (t[56] = ye),
      (t[57] = U),
      (t[58] = Ce),
      (t[59] = W),
      (t[60] = Te),
      (t[61] = Ee),
      (t[62] = De),
      (t[63] = ke),
      (t[64] = Ae),
      (t[65] = je),
      (t[66] = G),
      (t[67] = Ne),
      (t[68] = Pe),
      (t[69] = Fe),
      (t[70] = Ie),
      (t[71] = Re),
      (t[72] = ze),
      (t[73] = K),
      (t[74] = Be),
      (t[75] = q),
      (t[76] = Ve),
      (t[77] = He),
      (t[78] = Ue),
      (t[79] = J),
      (t[80] = Y),
      (t[81] = We),
      (t[82] = X));
  } else
    ((ge = t[51]),
      (B = t[52]),
      (ve = t[53]),
      (V = t[54]),
      (H = t[55]),
      (ye = t[56]),
      (U = t[57]),
      (Ce = t[58]),
      (W = t[59]),
      (Te = t[60]),
      (Ee = t[61]),
      (De = t[62]),
      (ke = t[63]),
      (Ae = t[64]),
      (je = t[65]),
      (G = t[66]),
      (Ne = t[67]),
      (Pe = t[68]),
      (Fe = t[69]),
      (Ie = t[70]),
      (Re = t[71]),
      (ze = t[72]),
      (K = t[73]),
      (Be = t[74]),
      (q = t[75]),
      (Ve = t[76]),
      (He = t[77]),
      (Ue = t[78]),
      (J = t[79]),
      (Y = t[80]),
      (We = t[81]),
      (X = t[82]));
  let Ge;
  t[145] !== ge ||
  t[146] !== ye ||
  t[147] !== U ||
  t[148] !== Ce ||
  t[149] !== W ||
  t[150] !== Te ||
  t[151] !== Ee ||
  t[152] !== De ||
  t[153] !== ke ||
  t[154] !== Ae ||
  t[155] !== je ||
  t[156] !== G ||
  t[157] !== Ne ||
  t[158] !== Pe ||
  t[159] !== Fe ||
  t[160] !== Ie ||
  t[161] !== Re ||
  t[162] !== ze ||
  t[163] !== K ||
  t[164] !== Be
    ? ((Ge = (0, $.jsx)(ge, {
        className: ye,
        buffering: U,
        directives: Ce,
        textStyle: W,
        conversationId: Te,
        cwd: Ee,
        hostId: De,
        turnId: ke,
        savedContentResponse: Ae,
        allowWideBlocks: je,
        fadeSegmentDelayMs: G,
        fadeSegmentMaxDelayMs: Ne,
        isStreaming: Pe,
        forceCodeBlockWordWrap: Fe,
        isBrowserEnabled: Ie,
        openFileLinksInSidePanel: Re,
        renderCodeBlocksAsWritingBlocks: ze,
        trailingContent: K,
        children: Be,
      })),
      (t[145] = ge),
      (t[146] = ye),
      (t[147] = U),
      (t[148] = Ce),
      (t[149] = W),
      (t[150] = Te),
      (t[151] = Ee),
      (t[152] = De),
      (t[153] = ke),
      (t[154] = Ae),
      (t[155] = je),
      (t[156] = G),
      (t[157] = Ne),
      (t[158] = Pe),
      (t[159] = Fe),
      (t[160] = Ie),
      (t[161] = Re),
      (t[162] = ze),
      (t[163] = K),
      (t[164] = Be),
      (t[165] = Ge))
    : (Ge = t[165]);
  let qe;
  t[166] !== P || t[167] !== c.contentReferences || t[168] !== H
    ? ((qe = P ? null : (0, $.jsx)(zt, { contentReferences: c.contentReferences, liveResources: H })),
      (t[166] = P),
      (t[167] = c.contentReferences),
      (t[168] = H),
      (t[169] = qe))
    : (qe = t[169]);
  let Je;
  t[170] !== V || t[171] !== d || t[172] !== I || t[173] !== j || t[174] !== R
    ? ((Je = I === `tpp` && !j && !R ? (0, $.jsx)(Jt, { conversationId: d, handoff: V.handoff }) : null),
      (t[170] = V),
      (t[171] = d),
      (t[172] = I),
      (t[173] = j),
      (t[174] = R),
      (t[175] = Je))
    : (Je = t[175]);
  let Ye;
  t[176] !== O || t[177] !== h || t[178] !== c.clientMetadata || t[179] !== z || t[180] !== R
    ? ((Ye = (0, $.jsx)(ut, {
        feedbackEnabled: O,
        conversationId: z,
        hostId: h,
        moderationDisclaimers: c.clientMetadata,
        shouldBlockExternalEgress: R,
      })),
      (t[176] = O),
      (t[177] = h),
      (t[178] = c.clientMetadata),
      (t[179] = z),
      (t[180] = R),
      (t[181] = Ye))
    : (Ye = t[181]);
  let Xe;
  t[182] !== q ||
  t[183] !== Ve ||
  t[184] !== He ||
  t[185] !== Ue ||
  t[186] !== J ||
  t[187] !== Y ||
  t[188] !== Ge ||
  t[189] !== qe ||
  t[190] !== Je ||
  t[191] !== Ye
    ? ((Xe = (0, $.jsxs)(`div`, {
        ref: q,
        className: Ve,
        "data-chatgpt-selection-conversation-id": He,
        "data-chatgpt-selection-message-id": Ue,
        children: [J, Y, Ge, qe, Je, Ye],
      })),
      (t[182] = q),
      (t[183] = Ve),
      (t[184] = He),
      (t[185] = Ue),
      (t[186] = J),
      (t[187] = Y),
      (t[188] = Ge),
      (t[189] = qe),
      (t[190] = Je),
      (t[191] = Ye),
      (t[192] = Xe))
    : (Xe = t[192]);
  let Ze;
  t[193] !== B || t[194] !== We || t[195] !== Xe
    ? ((Ze = (0, $.jsx)(B, { value: We, children: Xe })),
      (t[193] = B),
      (t[194] = We),
      (t[195] = Xe),
      (t[196] = Ze))
    : (Ze = t[196]);
  let Qe;
  return (
    t[197] !== ve || t[198] !== X || t[199] !== Ze
      ? ((Qe = (0, $.jsx)(ve, { value: X, children: Ze })),
        (t[197] = ve),
        (t[198] = X),
        (t[199] = Ze),
        (t[200] = Qe))
      : (Qe = t[200]),
    Qe
  );
}
function zn(e, t) {
  return e.codex_file_citation_purpose === `output` ? [t] : [];
}
function Bn(e, t) {
  return e.type === `file` && e.codex_file_citation_authoritative === !0 ? [t] : [];
}
function Vn(e) {
  let { contentReferenceIndexes: t } = e;
  return t;
}
function Hn(e) {
  return e.model_dil_v2 != null;
}
function Un(e) {
  let { target: t } = e;
  return t.type === `artifact-session` ? [t] : [];
}
var Wn, Gn, $, Kn;
function qn() {
  return (qn = e(() => {
    ((Wn = E()),
      me(),
      u(),
      je(),
      A(),
      (Gn = k()),
      M(),
      V(),
      R(),
      Ye(),
      U(),
      Ft(),
      D(),
      Rt(),
      Wt(),
      qt(),
      et(),
      Y(),
      G(),
      Be(),
      Zt(),
      He(),
      lt(),
      en(),
      Te(),
      sn(),
      Ln(),
      ($ = O()),
      (Kn = { [ce]: Mt }));
  }))();
}
export {
  Ln as a,
  Mt as c,
  jt as d,
  gt as f,
  ft as h,
  kn as i,
  Ft as l,
  mt as m,
  qn as n,
  Kt as o,
  _t as p,
  On as r,
  qt as s,
  Rn as t,
  Ct as u,
};
//# sourceMappingURL=chatgpt-assistant-message-content-657f67d40f20.js.map
