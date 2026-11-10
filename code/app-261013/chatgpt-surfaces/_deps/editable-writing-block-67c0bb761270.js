import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $v as n,
  A2 as r,
  AO as i,
  CO as a,
  CS as o,
  Ckt as s,
  Cot as c,
  Cz as l,
  GN as u,
  IDt as d,
  Irt as f,
  Ixt as p,
  JY as m,
  KN as h,
  Mz as g,
  NV as _,
  Nz as v,
  Pxt as y,
  Qv as b,
  Rxt as x,
  SY as S,
  Skt as C,
  TJ as w,
  TO as T,
  Tz as E,
  VDt as D,
  Vxt as O,
  WS as k,
  Z4 as A,
  _F as j,
  _Mt as M,
  _kt as N,
  b0 as P,
  bO as F,
  bkt as I,
  bz as L,
  cSt as R,
  cq as z,
  cz as B,
  gMt as V,
  iO as H,
  jDt as U,
  k2 as ee,
  mF as te,
  nE as ne,
  qY as re,
  rO as ie,
  sz as ae,
  t3 as oe,
  tE as se,
  uF as ce,
  vzt as W,
  wkt as le,
  wot as ue,
  xMt as G,
  xY as de,
  xkt as fe,
  xz as K,
  y0 as pe,
  yMt as me,
  yO as he,
  ykt as ge,
  yzt as q,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8 as _e,
  $xn as ve,
  Brn as ye,
  CQn as be,
  DQn as xe,
  G$t as Se,
  J6 as Ce,
  K8 as we,
  Lb as Te,
  OQn as Ee,
  Rb as De,
  SQn as Oe,
  TQn as ke,
  Urn as Ae,
  V8 as je,
  X6 as Me,
  XDr as Ne,
  Xxn as Pe,
  Y$t as Fe,
  Y6 as Ie,
  Z8 as Le,
  bQn as Re,
  e5 as ze,
  eOr as Be,
  eSn as Ve,
  hl as He,
  kQn as Ue,
  m8 as We,
  ml as J,
  ocr as Ge,
  p8 as Ke,
  vQn as qe,
  wQn as Je,
  xQn as Ye,
} from "./app-initial-5851df3f6cb1.js";
import { n as Xe, t as Ze } from "./menu-items-b78a5ea99a11.js";
import { a as Qe, i as $e, n as et, r as tt, t as nt } from "./writing-block-markdown-editor-367a32b77e05.js";
import { n as Y, t as rt } from "./writing-block-theme-61c0ed2a12ed.js";
import {
  _ as it,
  g as at,
  h as ot,
  i as st,
  m as ct,
  n as lt,
  r as ut,
  t as dt,
  v as ft,
  y as pt,
} from "./writing-block-floating-slash-menu-1d629aa81df2.js";
import { n as mt, t as ht } from "./writing-block-editor-styles-90146127a9c9.js";
import {
  _ as gt,
  a as _t,
  d as vt,
  f as yt,
  i as bt,
  l as xt,
  m as St,
  n as Ct,
  o as wt,
  p as Tt,
  r as Et,
  s as Dt,
  t as Ot,
  u as kt,
  v as At,
} from "./writing-block-editor-5c2b4ee54b30.js";
import { i as jt, n as Mt } from "./writing-block-surface-635635c06cb8.js";
import { n as Nt, t as Pt } from "./writing-block-copy-button-6291ce056717.js";
import { n as Ft, t as It } from "./inline-61a2c2e3dd06.js";
function Lt(e) {
  let t = (0, zt.c)(37),
    {
      isSubjectEditable: n,
      recipientFields: r,
      subject: i,
      subjectLabel: a,
      dividerClassName: o,
      recipientClassName: s,
      recipientStyle: c,
      subjectClassName: l,
      subjectPlaceholder: u,
      subjectStyle: d,
      onBlur: f,
      onSubjectChange: p,
    } = e,
    m;
  t[0] === p
    ? (m = t[1])
    : ((m = (e) => {
        p?.(e.target.value);
      }),
      (t[0] = p),
      (t[1] = m));
  let h = m,
    g = r != null,
    _;
  t[2] !== g || t[3] !== s || t[4] !== r || t[5] !== c
    ? ((_ = g
        ? (0, Bt.jsx)(`div`, {
            className: V(`[&>:where(:not(:first-child))]:mt-0`, s),
            style: { ...Y, ...c },
            children: r,
          })
        : null),
      (t[2] = g),
      (t[3] = s),
      (t[4] = r),
      (t[5] = c),
      (t[6] = _))
    : (_ = t[6]);
  let v = g && `mt-1`,
    y;
  t[7] !== l || t[8] !== v
    ? ((y = V(`pt-0 pb-3 leading-normal`, v, l)), (t[7] = l), (t[8] = v), (t[9] = y))
    : (y = t[9]);
  let b;
  t[10] === d ? (b = t[11]) : ((b = { ...Y, ...d }), (t[10] = d), (t[11] = b));
  let x = !n,
    S;
  t[12] !== h || t[13] !== f || t[14] !== i || t[15] !== a || t[16] !== u || t[17] !== x
    ? ((S = (0, Bt.jsx)(`textarea`, {
        "aria-label": a,
        className: `col-start-1 col-end-2 row-start-1 row-end-2 w-full min-w-0 resize-none overflow-hidden border-none bg-transparent p-0 break-words whitespace-pre-wrap placeholder:[color:var(--oai-wb-text-tertiary)] focus:border-transparent focus:ring-0 focus:outline-hidden`,
        disabled: x,
        maxLength: 240,
        name: `subject`,
        onBlur: f,
        onChange: h,
        onCopy: Rt,
        placeholder: u,
        rows: 1,
        value: i,
      })),
      (t[12] = h),
      (t[13] = f),
      (t[14] = i),
      (t[15] = a),
      (t[16] = u),
      (t[17] = x),
      (t[18] = S))
    : (S = t[18]);
  let C = `${i} `,
    w;
  t[19] === C
    ? (w = t[20])
    : ((w = (0, Bt.jsx)(`span`, {
        className: `invisible col-start-1 col-end-2 row-start-1 row-end-2 min-w-0 p-0 break-words whitespace-pre-wrap`,
        children: C,
      })),
      (t[19] = C),
      (t[20] = w));
  let T;
  t[21] !== S || t[22] !== w
    ? ((T = (0, Bt.jsxs)(`div`, { className: `grid`, children: [S, w] })),
      (t[21] = S),
      (t[22] = w),
      (t[23] = T))
    : (T = t[23]);
  let E;
  t[24] !== T || t[25] !== y || t[26] !== b
    ? ((E = (0, Bt.jsx)(`div`, { className: y, style: b, children: T })),
      (t[24] = T),
      (t[25] = y),
      (t[26] = b),
      (t[27] = E))
    : (E = t[27]);
  let D;
  t[28] === o
    ? (D = t[29])
    : ((D = V(`mx-4 my-0! border-t! [border-color:var(--oai-wb-divider)]! md:mx-5`, o)),
      (t[28] = o),
      (t[29] = D));
  let O;
  t[30] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = { ...Y }), (t[30] = O)) : (O = t[30]);
  let k;
  t[31] === D ? (k = t[32]) : ((k = (0, Bt.jsx)(`hr`, { className: D, style: O })), (t[31] = D), (t[32] = k));
  let A;
  return (
    t[33] !== E || t[34] !== k || t[35] !== _
      ? ((A = (0, Bt.jsxs)(Bt.Fragment, { children: [_, E, k] })),
        (t[33] = E),
        (t[34] = k),
        (t[35] = _),
        (t[36] = A))
      : (A = t[36]),
    A
  );
}
function Rt(e) {
  return e.stopPropagation();
}
var zt, Bt;
function Vt() {
  return (Vt = e(() => {
    ((zt = W()), M(), rt(), (Bt = G()));
  }))();
}
function Ht(e) {
  let t = (0, Xt.c)(48),
    {
      contacts: n,
      displayMode: r,
      isEditingDisabled: i,
      labels: a,
      renderRecipientRow: o,
      values: s,
      className: c,
      layout: l,
      renderSender: u,
    } = e,
    d = l === void 0 ? `standalone` : l,
    [f, p] = (0, Zt.useState)(!1),
    [m, h] = (0, Zt.useState)(!1),
    [g, _] = (0, Zt.useState)(!1),
    [v, y] = (0, Zt.useState)(!1),
    b = (0, Zt.useRef)(null),
    x = (0, Zt.useRef)(!1),
    S;
  t[0] !== r || t[1] !== f || t[2] !== s.cc
    ? ((S = r === `plain_text` ? Jt(s.cc) : f || Jt(s.cc)), (t[0] = r), (t[1] = f), (t[2] = s.cc), (t[3] = S))
    : (S = t[3]);
  let C = S,
    w;
  t[4] !== r || t[5] !== m || t[6] !== s.bcc
    ? ((w = r === `plain_text` ? Jt(s.bcc) : m || Jt(s.bcc)),
      (t[4] = r),
      (t[5] = m),
      (t[6] = s.bcc),
      (t[7] = w))
    : (w = t[7]);
  let T = w,
    E = C || T,
    D = r === `tokenized` && !g && !v,
    O,
    k;
  (t[8] === g
    ? ((O = t[9]), (k = t[10]))
    : ((O = () => {
        if (!g || !x.current) return;
        let e = b.current?.ownerDocument.defaultView;
        if (e != null)
          return Yt(e, () => {
            ((x.current = !1),
              b.current
                ?.querySelector(
                  `[data-writing-block-email-recipient-input], .react-select__input input, input`,
                )
                ?.focus());
          });
      }),
      (k = [g]),
      (t[8] = g),
      (t[9] = O),
      (t[10] = k)),
    (0, Zt.useEffect)(O, k));
  let A;
  t[11] === i
    ? (A = t[12])
    : ((A = () => {
        i || ((x.current = !0), _(!0));
      }),
      (t[11] = i),
      (t[12] = A));
  let j = A,
    M;
  t[13] !== r || t[14] !== v
    ? ((M = (e) => {
        let t = e.relatedTarget,
          n = e.currentTarget.ownerDocument,
          i = n.defaultView;
        (i != null &&
          t instanceof i.Node &&
          (e.currentTarget.contains(t) ||
            (t instanceof i.Element && t.closest(`[data-writing-block-email-recipient-popover]`) != null))) ||
          x.current ||
          Yt(i, () => {
            let e = n.activeElement;
            b.current?.contains(e) ||
              (i != null &&
                e instanceof i.Element &&
                e.closest(`[data-writing-block-email-recipient-popover]`) != null) ||
              (r === `tokenized` && !v && (p(!1), h(!1)), _(!1));
          });
      }),
      (t[13] = r),
      (t[14] = v),
      (t[15] = M))
    : (M = t[15]);
  let N = M,
    P;
  t[16] !== n || t[17] !== r || t[18] !== i || t[19] !== o || t[20] !== s
    ? ((P = (e, t, a) =>
        o({
          contacts: n[e] ?? [],
          displayMode: r,
          field: e,
          isEditingDisabled: i,
          label: t,
          trailingContent: a,
          value: s[e],
        })),
      (t[16] = n),
      (t[17] = r),
      (t[18] = i),
      (t[19] = o),
      (t[20] = s),
      (t[21] = P))
    : (P = t[21]);
  let F = P,
    I =
      d === `standalone` &&
      `mb-[calc(var(--oai-wb-spacing)*3)] border-b [border-color:var(--oai-wb-divider)]`,
    L;
  t[22] !== c || t[23] !== I
    ? ((L = V(
        `flex flex-col divide-y-[0.5px] divide-[color:var(--oai-wb-divider)] [&>:not(:last-child)]:py-[calc(var(--oai-wb-spacing)*0.5)]`,
        I,
        c,
      )),
      (t[22] = c),
      (t[23] = I),
      (t[24] = L))
    : (L = t[24]);
  let R, z;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = () => _(!0)), (z = { ...Y }), (t[25] = R), (t[26] = z))
    : ((R = t[25]), (z = t[26]));
  let B;
  t[27] !== r || t[28] !== D || t[29] !== u
    ? ((B = u?.({ displayMode: r, isCollapsed: D, onOpenChange: y })),
      (t[27] = r),
      (t[28] = D),
      (t[29] = u),
      (t[30] = B))
    : (B = t[30]);
  let H;
  t[31] !== T ||
  t[32] !== C ||
  t[33] !== n ||
  t[34] !== r ||
  t[35] !== j ||
  t[36] !== D ||
  t[37] !== i ||
  t[38] !== a ||
  t[39] !== E ||
  t[40] !== F ||
  t[41] !== s
    ? ((H = (0, X.jsx)(`div`, {
        className: `flex flex-col divide-y-[0.5px] divide-[color:var(--oai-wb-divider)] [&>*]:py-[calc(var(--oai-wb-spacing)*0.5)]`,
        children: D
          ? (0, X.jsx)(Kt, {
              isEditingDisabled: i,
              onActivate: j,
              placeholder: a.recipientsPlaceholder,
              segments: je({ ...s, contacts: n }),
            })
          : (0, X.jsxs)(X.Fragment, {
              children: [
                F(
                  `recipient`,
                  a.recipient,
                  r === `plain_text`
                    ? null
                    : (0, X.jsx)(Ut, {
                        className: `flex items-end gap-[calc(var(--oai-wb-spacing)*2)]`,
                        disabled: E || i,
                        hidden: E,
                        labels: a,
                        onBccClick: () => h(!0),
                        onCcClick: () => p(!0),
                        showBcc: !0,
                        showCc: !0,
                      }),
                ),
                C
                  ? F(
                      `cc`,
                      a.cc,
                      r === `plain_text`
                        ? null
                        : (0, X.jsx)(Ut, {
                            disabled: T || i,
                            hidden: T,
                            labels: a,
                            onBccClick: () => h(!0),
                            onCcClick: () => p(!0),
                            showBcc: !0,
                            showCc: !1,
                          }),
                    )
                  : null,
                T
                  ? F(
                      `bcc`,
                      a.bcc,
                      r === `plain_text`
                        ? null
                        : (0, X.jsx)(Ut, {
                            disabled: C || i,
                            hidden: C,
                            labels: a,
                            onBccClick: () => h(!0),
                            onCcClick: () => p(!0),
                            showBcc: !1,
                            showCc: !0,
                          }),
                    )
                  : null,
              ],
            }),
      })),
      (t[31] = T),
      (t[32] = C),
      (t[33] = n),
      (t[34] = r),
      (t[35] = j),
      (t[36] = D),
      (t[37] = i),
      (t[38] = a),
      (t[39] = E),
      (t[40] = F),
      (t[41] = s),
      (t[42] = H))
    : (H = t[42]);
  let U;
  return (
    t[43] !== N || t[44] !== L || t[45] !== B || t[46] !== H
      ? ((U = (0, X.jsxs)(`div`, {
          ref: b,
          className: L,
          onBlurCapture: N,
          onFocusCapture: R,
          style: z,
          children: [B, H],
        })),
        (t[43] = N),
        (t[44] = L),
        (t[45] = B),
        (t[46] = H),
        (t[47] = U))
      : (U = t[47]),
    U
  );
}
function Ut(e) {
  let t = (0, Xt.c)(18),
    {
      disabled: n,
      hidden: r,
      labels: i,
      onBccClick: a,
      onCcClick: o,
      showBcc: s,
      showCc: c,
      className: l,
    } = e,
    u = r ? !0 : void 0,
    d = r && `pointer-events-none invisible`,
    f;
  t[0] !== l || t[1] !== d ? ((f = V(l, d)), (t[0] = l), (t[1] = d), (t[2] = f)) : (f = t[2]);
  let p;
  t[3] !== n || t[4] !== i || t[5] !== o || t[6] !== c
    ? ((p = c
        ? (0, X.jsx)(`button`, {
            className: `disabled:cursor-default [color:var(--oai-wb-text-secondary)] hover:[color:var(--oai-wb-text-primary)] disabled:hover:[color:var(--oai-wb-text-secondary)]`,
            disabled: n,
            onClick: o,
            onPointerDown: Gt,
            onTouchEnd: (e) => {
              (e.stopPropagation(), o());
            },
            type: `button`,
            children: i.ccToggle,
          })
        : null),
      (t[3] = n),
      (t[4] = i),
      (t[5] = o),
      (t[6] = c),
      (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] !== n || t[9] !== i || t[10] !== a || t[11] !== s
    ? ((m = s
        ? (0, X.jsx)(`button`, {
            className: `disabled:cursor-default [color:var(--oai-wb-text-secondary)] hover:[color:var(--oai-wb-text-primary)] disabled:hover:[color:var(--oai-wb-text-secondary)]`,
            disabled: n,
            onClick: a,
            onPointerDown: Wt,
            onTouchEnd: (e) => {
              (e.stopPropagation(), a());
            },
            type: `button`,
            children: i.bccToggle,
          })
        : null),
      (t[8] = n),
      (t[9] = i),
      (t[10] = a),
      (t[11] = s),
      (t[12] = m))
    : (m = t[12]);
  let h;
  return (
    t[13] !== u || t[14] !== f || t[15] !== p || t[16] !== m
      ? ((h = (0, X.jsxs)(`div`, { "aria-hidden": u, className: f, children: [p, m] })),
        (t[13] = u),
        (t[14] = f),
        (t[15] = p),
        (t[16] = m),
        (t[17] = h))
      : (h = t[17]),
    h
  );
}
function Wt(e) {
  return e.preventDefault();
}
function Gt(e) {
  return e.preventDefault();
}
function Kt(e) {
  let t = (0, Xt.c)(12),
    { isEditingDisabled: n, onActivate: r, placeholder: i, segments: a } = e,
    o;
  t[0] !== i || t[1] !== a
    ? ((o =
        a.length === 0
          ? (0, X.jsx)(`span`, { className: `[color:var(--oai-wb-text-tertiary)]`, children: i })
          : a.map(qt)),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s = o;
  if (n) {
    let e;
    return (
      t[3] === s
        ? (e = t[4])
        : ((e = (0, X.jsx)(`div`, {
            className: `min-h-[calc(var(--oai-wb-spacing)*8)] w-full min-w-0 border-0 bg-transparent p-0 text-start text-base leading-[calc(var(--oai-wb-spacing)*8)] break-words [color:var(--oai-wb-text-primary)]`,
            children: s,
          })),
          (t[3] = s),
          (t[4] = e)),
      e
    );
  }
  let c;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = V(
        `min-h-[calc(var(--oai-wb-spacing)*8)] w-full min-w-0 border-0 bg-transparent p-0 text-start text-base leading-[calc(var(--oai-wb-spacing)*8)] break-words [color:var(--oai-wb-text-primary)]`,
        `cursor-text`,
      )),
      (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] === r
    ? (l = t[7])
    : ((l = (e) => {
        (e.preventDefault(), r());
      }),
      (t[6] = r),
      (t[7] = l));
  let u;
  return (
    t[8] !== s || t[9] !== r || t[10] !== l
      ? ((u = (0, X.jsx)(`button`, {
          className: c,
          onClick: r,
          onFocus: r,
          onMouseDown: l,
          type: `button`,
          children: s,
        })),
        (t[8] = s),
        (t[9] = r),
        (t[10] = l),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
function qt(e, t) {
  return (0, X.jsxs)(
    `span`,
    {
      children: [
        t > 0 ? `, ` : null,
        e.prefix,
        (0, X.jsx)(`span`, {
          className: V(
            e.isInvalid &&
              `[text-decoration-color:var(--oai-wb-danger,var(--text-status-error))] [text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:wavy] [text-decoration-thickness:1px]`,
          ),
          children: e.value,
        }),
      ],
    },
    `${e.prefix ?? ``}${e.value}-${t}`,
  );
}
function Jt(e) {
  return e.trim().length > 0;
}
function Yt(e, t) {
  if (e == null) return () => void 0;
  if (typeof e.requestAnimationFrame == `function`) {
    let n = e.requestAnimationFrame(t);
    return () => e.cancelAnimationFrame(n);
  }
  let n = e.setTimeout(t, 0);
  return () => e.clearTimeout(n);
}
var Xt, Zt, X;
function Qt() {
  return (Qt = e(() => {
    ((Xt = W()), M(), (Zt = q()), Le(), rt(), (X = G()));
  }))();
}
function $t(e) {
  let t = (0, ln.c)(20),
    n,
    r,
    i,
    a;
  if (t[0] !== e) {
    a = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let { displayMode: o, field: s, label: c, ...l } = e;
      if (((n = s), (i = c), (r = l), o === `plain_text`)) {
        let e;
        t[5] === i
          ? (e = t[6])
          : ((e = (0, Q.jsx)(`div`, { className: `pt-0.5 leading-8 font-medium`, children: i })),
            (t[5] = i),
            (t[6] = e));
        let n = r.value.trim().length > 0 ? r.value : null,
          o;
        t[7] === n
          ? (o = t[8])
          : ((o = (0, Q.jsx)(`div`, {
              className: `min-w-0 flex-1 pt-0.5 leading-8 break-words [color:var(--oai-wb-text-primary)]`,
              children: n,
            })),
            (t[7] = n),
            (t[8] = o));
        let s;
        (t[9] !== e || t[10] !== o
          ? ((s = (0, Q.jsxs)(`div`, { className: `flex min-h-9 items-start gap-2`, children: [e, o] })),
            (t[9] = e),
            (t[10] = o),
            (t[11] = s))
          : (s = t[11]),
          (a = s));
        break bb0;
      }
    }
    ((t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i), (t[4] = a));
  } else ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]));
  if (a !== Symbol.for(`react.early_return_sentinel`)) return a;
  let o;
  t[12] === i
    ? (o = t[13])
    : ((o = (0, Q.jsx)(`div`, { className: `pt-0.5 leading-8 font-medium`, children: i })),
      (t[12] = i),
      (t[13] = o));
  let s;
  t[14] !== n || t[15] !== r
    ? ((s = (0, Q.jsx)(en, { ...r, inputName: n })), (t[14] = n), (t[15] = r), (t[16] = s))
    : (s = t[16]);
  let c;
  return (
    t[17] !== o || t[18] !== s
      ? ((c = (0, Q.jsxs)(`div`, { className: `flex min-h-9 items-start gap-2`, children: [o, s] })),
        (t[17] = o),
        (t[18] = s),
        (t[19] = c))
      : (c = t[19]),
    c
  );
}
function en({
  avatarFallbackColors: e,
  contacts: t,
  copiedIcon: n,
  copyIcon: r,
  getContactsForQuery: i,
  getContactQueryStatus: a,
  inputName: o = `writing-block-email-recipient`,
  isEditingDisabled: s,
  ariaLabels: c,
  loadingContacts: l,
  onCopyEmail: u,
  onMetadataChange: d,
  onContactSelected: f,
  onSearch: p,
  onValueChange: m,
  portalContainer: h,
  removeIcon: g,
  trailingContent: _,
  value: v,
}) {
  let y = (0, Z.useId)(),
    [b, x] = (0, Z.useState)(() => sn(v, t)),
    [S, C] = (0, Z.useState)(!1),
    [w, T] = (0, Z.useState)(!1),
    [E, D] = (0, Z.useState)(0),
    [O, k] = (0, Z.useState)(null),
    A = (0, Z.useRef)(null),
    j = (0, Z.useRef)(!1),
    M = (0, Z.useRef)(null),
    N = (0, Z.useRef)(d),
    P = (0, Z.useRef)(m),
    { refs: F, floatingStyles: I } = pt({
      middleware: [
        at({ alignmentAxis: -14, mainAxis: pn }),
        ct({ padding: pn }),
        it({ padding: pn }),
        ft({
          apply({ availableHeight: e, elements: t }) {
            t.floating.style.maxHeight = `${Math.max(0, e)}px`;
          },
          padding: pn,
        }),
      ],
      placement: `bottom-start`,
      strategy: `fixed`,
      whileElementsMounted: le,
    }),
    L = F.reference;
  ((N.current = d), (P.current = m));
  let R = () => {
    M.current != null && (clearTimeout(M.current), (M.current = null));
  };
  ((0, Z.useEffect)(() => {
    j.current || x(sn(v, t));
  }, [t, v]),
    (0, Z.useEffect)(() => R, []));
  let z = (e, t, n) => {
      let r = ze(e, t),
        i = we(
          r,
          e.map((e) => e.contact ?? { email: e.email }),
        );
      (R(),
        n
          ? P.current(r)
          : (M.current = setTimeout(() => {
              ((M.current = null), P.current(r));
            }, dn)),
        N.current(r, i, n));
    },
    B = (e, t, n) => {
      let r = cn(e);
      (x({ tokens: r, inputValue: t }), z(r, t, n));
    },
    H = () => {
      let e = sn(b.inputValue);
      (B([...b.tokens, ...e.tokens], e.inputValue, !0), C(!0));
    },
    U = i(b.inputValue)
      .filter((e) => !b.tokens.some((t) => t.email.trim().toLowerCase() === e.email.trim().toLowerCase()))
      .slice(0, fn),
    ee = a?.(b.inputValue) ?? `idle`,
    te = sn(b.inputValue),
    ne = ee === `pending`,
    re = !s && w && (U.length > 0 || ne),
    ie = re ? `${y}-option-${E}` : void 0;
  (0, Z.useEffect)(() => {
    F.floating.current?.querySelector(`[aria-selected="true"]`)?.scrollIntoView?.({ block: `nearest` });
  }, [E, re, U.length]);
  let ae = () => {
      ((j.current = !0), C(!1), T(!0), D(0), p(b.inputValue));
    },
    oe = (e) => {
      let t = { id: e.id ?? e.email, email: e.email, contact: e };
      (B([...b.tokens, t], ``, !0), f?.(), p(``), T(!1), on(A.current, () => L.current?.focus()));
    },
    se = (e) => {
      if (!e.nativeEvent.isComposing) {
        if (e.key === `ArrowDown` && U.length > 0) {
          (e.preventDefault(), T(!0), D((e) => Math.min(e + 1, U.length - 1)));
          return;
        }
        if (e.key === `ArrowUp` && U.length > 0) {
          (e.preventDefault(), D((e) => Math.max(e - 1, 0)));
          return;
        }
        if (e.key === `Enter` && w && U[E] != null) {
          (e.preventDefault(), oe(U[E]));
          return;
        }
        if ((e.key === `,` || e.key === `Enter`) && te.tokens.length > 0) {
          (e.preventDefault(), H(), p(``), T(!1));
          return;
        }
        if (e.key === `Backspace` && b.inputValue.length === 0 && b.tokens.length > 0) {
          B(b.tokens.slice(0, -1), ``, !0);
          return;
        }
        e.key === `Escape` && (T(!1), k(null));
      }
    },
    ce = (e) => {
      let t = e.relatedTarget,
        n = e.currentTarget.ownerDocument.defaultView;
      (n != null &&
        t instanceof n.Node &&
        (e.currentTarget.contains(t) ||
          (t instanceof n.Element && t.closest(`[data-writing-block-email-recipient-popover]`) != null)) &&
        !(t instanceof n.Element && t.closest(`[data-recipient-row-trailing="true"]`) != null)) ||
        on(A.current, () => {
          let e = A.current?.ownerDocument.activeElement;
          A.current?.contains(e ?? null) ||
            (n != null &&
              e instanceof n.Element &&
              e.closest(`[data-writing-block-email-recipient-popover]`) != null) ||
            ((j.current = !1), T(!1), k(null), H());
        });
    },
    W = L.current?.ownerDocument,
    ue = (h === W?.body ? null : h) ?? L.current?.closest(`dialog, [role="dialog"]`) ?? W?.body;
  return (0, Q.jsxs)(`div`, {
    ref: A,
    className: `relative min-h-9 min-w-0 flex-1 [color:var(--oai-wb-text-primary)]`,
    onBlurCapture: ce,
    onFocusCapture: () => {
      j.current = !0;
    },
    onPointerDown: (e) => {
      let t = e.currentTarget.ownerDocument.defaultView;
      t != null &&
        e.target instanceof t.Element &&
        e.target.closest(
          `[data-recipient-row-trailing="true"], button, [role="button"], [role="option"], input`,
        ) == null &&
        (e.preventDefault(), L.current?.focus());
    },
    children: [
      (0, Q.jsxs)(`div`, {
        className: `flex min-h-9 cursor-text flex-wrap items-start gap-y-1 overflow-y-auto`,
        children: [
          b.tokens.map((t, i) =>
            (0, Q.jsx)(
              nn,
              {
                avatarFallbackColors: e,
                copiedIcon: n,
                copyIcon: r,
                isEditingDisabled: s,
                isOpen: !s && O === t.id,
                ariaLabels: c,
                onCopyEmail: u,
                onOpenChange: (e) => k(e ? t.id : null),
                onRemove: () => {
                  (B(
                    b.tokens.filter((e, t) => t !== i),
                    b.inputValue,
                    !0,
                  ),
                    on(A.current, () => L.current?.focus()));
                },
                removeIcon: g,
                token: t,
              },
              t.id,
            ),
          ),
          (0, Q.jsx)(`input`, {
            ref: F.setReference,
            "aria-activedescendant": ie,
            "aria-autocomplete": `list`,
            "aria-controls": y,
            "aria-expanded": re,
            "aria-label": c.input,
            role: `combobox`,
            autoComplete: `off`,
            className: V(
              `m-0 mt-0.5 min-w-[2px] flex-1 border-none bg-transparent p-0 text-base leading-8 shadow-none ring-0 outline-hidden focus:border-transparent focus:shadow-none focus:ring-0 focus:outline-hidden focus-visible:ring-0 focus-visible:outline-hidden`,
              b.tokens.length > 0 && `ms-2`,
              S &&
                te.inputValue.length > 0 &&
                `[text-decoration-line:underline] [text-decoration-style:wavy] [text-decoration-thickness:1px] [text-decoration-color:var(--oai-wb-danger,var(--text-status-error))] [text-decoration-skip-ink:none]`,
            ),
            disabled: s,
            name: o,
            onChange: (e) => {
              let t = e.target.value;
              ((j.current = !0), B(b.tokens, t, !1), p(t), T(!0), D(0));
            },
            onFocus: ae,
            onKeyDown: se,
            value: b.inputValue,
          }),
          _ == null
            ? null
            : (0, Q.jsx)(`div`, {
                className: `flex min-h-9 items-start gap-2 pt-0.5`,
                "data-recipient-row-trailing": `true`,
                children: _,
              }),
        ],
      }),
      re && ue != null
        ? (0, Q.jsx)(tn, {
            className: `z-[var(--wb-menu-z-index,70)] w-80 max-w-full rounded-2xl [background:var(--oai-wb-surface-primary)] shadow-[0_0_0_1px_hsla(0,0%,0%,0.1),0_4px_11px_hsla(0,0%,0%,0.1)]`,
            container: ue,
            floatingRef: F.setFloating,
            style: { ...Y, ...I },
            children: (0, Q.jsx)(`div`, {
              className: `max-h-[inherit] overflow-y-auto p-1`,
              "data-writing-block-email-recipient-popover": ``,
              id: y,
              role: `listbox`,
              children:
                ne && U.length === 0
                  ? (0, Q.jsxs)(`div`, {
                      "aria-live": `polite`,
                      className: `flex min-h-16 items-center gap-3 px-3 py-3 [color:var(--oai-wb-text-secondary)]`,
                      role: `status`,
                      children: [
                        (0, Q.jsx)(`span`, {
                          "aria-hidden": `true`,
                          className: `size-5 animate-spin rounded-full border-2 border-current border-e-transparent`,
                        }),
                        (0, Q.jsx)(`span`, { children: l }),
                      ],
                    })
                  : U.map((t, n) =>
                      (0, Q.jsxs)(
                        `button`,
                        {
                          "aria-selected": n === E,
                          className: V(
                            `flex h-12 w-full cursor-pointer items-center gap-2 rounded-xl border-0 bg-transparent px-2 text-start`,
                            n === E && `[background:var(--oai-wb-interactive-secondary-hover)]`,
                          ),
                          id: `${y}-option-${n}`,
                          onClick: () => oe(t),
                          onMouseEnter: () => D(n),
                          onPointerDown: (e) => e.preventDefault(),
                          role: `option`,
                          type: `button`,
                          children: [
                            (0, Q.jsx)(rn, {
                              colors: e,
                              contact: t,
                              label: c.recipientAvatar,
                              size: `suggestion`,
                            }),
                            (0, Q.jsxs)(`span`, {
                              className: `flex min-w-0 flex-col justify-center leading-tight`,
                              children: [
                                (0, Q.jsx)(`span`, { className: `truncate text-sm`, children: t.email }),
                                t.name?.trim()
                                  ? (0, Q.jsx)(`span`, {
                                      className: `truncate text-xs [color:var(--oai-wb-text-secondary)]`,
                                      children: t.name,
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        },
                        t.id ?? t.email,
                      ),
                    ),
            }),
          })
        : null,
    ],
  });
}
function tn(e) {
  let t = (0, ln.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ container: n, floatingRef: r, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a;
  t[4] !== r || t[5] !== i
    ? ((a = (0, Q.jsx)(`div`, { ...i, ref: r })), (t[4] = r), (t[5] = i), (t[6] = a))
    : (a = t[6]);
  let o;
  return (
    t[7] !== n || t[8] !== a
      ? ((o = (0, un.createPortal)(a, n)), (t[7] = n), (t[8] = a), (t[9] = o))
      : (o = t[9]),
    o
  );
}
function nn({
  avatarFallbackColors: e,
  copiedIcon: t,
  copyIcon: n,
  isEditingDisabled: r,
  isOpen: i,
  ariaLabels: a,
  onCopyEmail: o,
  onOpenChange: s,
  onRemove: c,
  removeIcon: l,
  token: u,
}) {
  let [d, f] = (0, Z.useState)(!1),
    p = (0, Z.useRef)(null),
    m = (0, Z.useRef)(null),
    h = (0, Z.useRef)(null),
    g = (0, Z.useRef)(s);
  g.current = s;
  let _ = u.contact ?? { email: u.email },
    v = typeof _.id == `string` && typeof _.name == `string`,
    y = (_.name?.trim() ? _.name : null) ?? u.email,
    { refs: b, floatingStyles: x } = pt({
      middleware: [at(4), ct(), it({ padding: 8 })],
      placement: `bottom-start`,
      whileElementsMounted: le,
    }),
    S = b.setReference,
    C = b.setFloating;
  ((0, Z.useEffect)(
    () => () => {
      h.current != null && clearTimeout(h.current);
    },
    [],
  ),
    (0, Z.useEffect)(() => {
      if (!i) return;
      let e = p.current,
        t = m.current,
        n = e?.ownerDocument,
        r = n?.defaultView;
      if (e == null || t == null || n == null || r == null) return;
      let a = () => {
          g.current(!1);
        },
        o = (t) => {
          t.key === `Escape` && (t.preventDefault(), t.stopPropagation(), a(), e.focus());
        },
        s = (n) => {
          n.target instanceof r.Node && !e.contains(n.target) && !t.contains(n.target) && a();
        };
      return (
        n.addEventListener(`keydown`, o),
        n.addEventListener(`pointerdown`, s, !0),
        () => {
          (n.removeEventListener(`keydown`, o), n.removeEventListener(`pointerdown`, s, !0));
        }
      );
    }, [i]));
  let w = (0, Q.jsxs)(`div`, {
      className: `group/email flex min-w-0 items-center gap-1 [color:var(--oai-wb-text-secondary)]`,
      children: [
        (0, Q.jsx)(`div`, {
          className: V(`min-w-0 truncate`, v ? `text-lg` : `text-base`),
          children: u.email,
        }),
        o == null
          ? null
          : (0, Q.jsx)(`button`, {
              "aria-label": d ? a.copiedEmail : a.copyEmail,
              className: `shrink-0 rounded-md border-0 bg-transparent p-1 opacity-0 transition-opacity group-hover/email:opacity-100 focus-visible:opacity-100 hover:[background:var(--oai-wb-surface-secondary)] hover:[color:var(--oai-wb-text-primary)] focus-visible:[background:var(--oai-wb-surface-secondary)] focus-visible:[color:var(--oai-wb-text-primary)]`,
              onClick: (e) => {
                o != null &&
                  (e.stopPropagation(),
                  Promise.resolve(o(u.email, e)).then(
                    () => {
                      (h.current != null && clearTimeout(h.current),
                        f(!0),
                        (h.current = setTimeout(() => {
                          ((h.current = null), f(!1));
                        }, 2e3)));
                    },
                    () => void 0,
                  ));
              },
              type: `button`,
              children: d ? t : n,
            }),
      ],
    }),
    T = p.current?.ownerDocument;
  return (0, Q.jsxs)(`div`, {
    className: V(
      `mx-0.5 mt-0.5 mb-0 inline-flex h-8 items-center gap-1 rounded-[24px] border bg-transparent pe-2 py-0 text-base [border-color:var(--oai-wb-divider)] data-[state=open]:[background:var(--oai-wb-divider)]`,
      v ? `ps-1` : `ps-[9px]`,
      r ? `cursor-default` : `cursor-pointer hover:[background:var(--oai-wb-interactive-secondary-hover)]`,
    ),
    "data-state": i ? `open` : void 0,
    children: [
      (0, Q.jsxs)(`div`, {
        ref: (e) => {
          ((p.current = e), S(e));
        },
        "aria-disabled": r || void 0,
        "aria-expanded": i,
        "aria-haspopup": `dialog`,
        "aria-label": y,
        className: V(
          `flex min-w-0 items-center`,
          v ? `gap-1.5` : `gap-1`,
          r ? `cursor-default` : `cursor-pointer`,
        ),
        onClick: () => {
          r || s(!i);
        },
        onKeyDown: (e) => {
          !r && (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), s(!i));
        },
        role: `button`,
        tabIndex: r ? -1 : 0,
        children: [
          v ? (0, Q.jsx)(rn, { colors: e, contact: _, label: a.recipientAvatar, size: `chip` }) : null,
          (0, Q.jsx)(`span`, { className: `min-w-0 truncate leading-5`, children: y }),
        ],
      }),
      (0, Q.jsx)(`button`, {
        "aria-label": a.removeRecipient(y),
        className: `inline-flex cursor-pointer items-center border-0 bg-transparent p-0 disabled:cursor-default`,
        disabled: r,
        onClick: (e) => {
          (e.stopPropagation(), r || c());
        },
        onPointerDown: (e) => e.stopPropagation(),
        type: `button`,
        children: l,
      }),
      i && T != null
        ? (0, un.createPortal)(
            (0, Q.jsx)(`div`, {
              ref: (e) => {
                ((m.current = e), C(e));
              },
              "aria-label": y,
              className: `z-[calc(var(--wb-menu-z-index,70)+1)] [font-family:var(--oai-wb-font-sans)]`,
              "data-writing-block-email-recipient-popover": ``,
              role: `dialog`,
              style: { ...Y, ...x },
              children: v
                ? (0, Q.jsxs)(`div`, {
                    className: `flex w-[320px] items-center gap-4 rounded-2xl border p-5 [background:var(--oai-wb-surface-primary)] [border-color:var(--oai-wb-divider)] [box-shadow:0_8px_24px_rgba(0,0,0,0.08)]`,
                    children: [
                      (0, Q.jsx)(rn, { colors: e, contact: _, label: a.recipientAvatar, size: `large` }),
                      (0, Q.jsxs)(`div`, {
                        className: `min-w-0`,
                        children: [
                          (0, Q.jsx)(`div`, { className: `truncate text-lg font-medium`, children: _.name }),
                          w,
                        ],
                      }),
                    ],
                  })
                : (0, Q.jsx)(`div`, {
                    className: `w-[260px] rounded-2xl border p-3 [background:var(--oai-wb-surface-primary)] [border-color:var(--oai-wb-divider)] [box-shadow:0_8px_24px_rgba(0,0,0,0.08)]`,
                    children: w,
                  }),
            }),
            T.body,
          )
        : null,
    ],
  });
}
function rn(e) {
  let t = (0, ln.c)(19),
    { colors: n, contact: r, label: i, size: a } = e,
    [o, s] = (0, Z.useState)(!1),
    c = a === `large` ? `h-12 w-12 text-lg` : a === `suggestion` ? `h-7 w-7 text-sm` : `h-6 w-6 text-sm`;
  if (r.avatar_url != null && !o) {
    let e;
    t[0] === c
      ? (e = t[1])
      : ((e = V(`block shrink-0 rounded-full object-cover`, c)), (t[0] = c), (t[1] = e));
    let n;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = () => s(!0)), (t[2] = n)) : (n = t[2]);
    let i;
    return (
      t[3] !== r.avatar_url || t[4] !== e
        ? ((i = (0, Q.jsx)(`img`, {
            alt: ``,
            className: e,
            onError: n,
            referrerPolicy: `no-referrer`,
            src: r.avatar_url,
          })),
          (t[3] = r.avatar_url),
          (t[4] = e),
          (t[5] = i))
        : (i = t[5]),
      i
    );
  }
  let l;
  t[6] === n ? (l = t[7]) : ((l = n?.length ? n : [`var(--oai-wb-accent)`]), (t[6] = n), (t[7] = l));
  let u = l,
    d = r.email,
    f = Array.from(d).reduce(an, 0),
    p;
  t[8] === c
    ? (p = t[9])
    : ((p = V(`flex shrink-0 items-center justify-center rounded-full font-medium text-white`, c)),
      (t[8] = c),
      (t[9] = p));
  let m = u[f % u.length],
    h;
  t[10] === m ? (h = t[11]) : ((h = { backgroundColor: m }), (t[10] = m), (t[11] = h));
  let g;
  t[12] === d ? (g = t[13]) : ((g = d.trim().charAt(0).toUpperCase() || `?`), (t[12] = d), (t[13] = g));
  let _;
  return (
    t[14] !== i || t[15] !== p || t[16] !== h || t[17] !== g
      ? ((_ = (0, Q.jsx)(`span`, { "aria-label": i, className: p, role: `img`, style: h, children: g })),
        (t[14] = i),
        (t[15] = p),
        (t[16] = h),
        (t[17] = g),
        (t[18] = _))
      : (_ = t[18]),
    _
  );
}
function an(e, t) {
  return e + t.charCodeAt(0);
}
function on(e, t) {
  let n = e?.ownerDocument.defaultView;
  if (n?.requestAnimationFrame == null) {
    setTimeout(t, 0);
    return;
  }
  n.requestAnimationFrame(t);
}
function sn(e, t = []) {
  let { recipients: n, unfinishedValue: r } = _e(e, t);
  return { inputValue: r, tokens: cn(n.map((e) => ({ id: e.email, email: e.email, contact: e }))) };
}
function cn(e) {
  return e.map((e, t) => ({ ...e, id: `${e.email}::${t}` }));
}
var ln, un, Z, Q, dn, fn, pn;
function mn() {
  return (mn = e(() => {
    ((ln = W()), ot(), M(), (un = me()), (Z = q()), Le(), rt(), (Q = G()), (dn = 300), (fn = 7), (pn = 8));
  }))();
}
function hn(e) {
  let t = (0, gn.c)(30),
    {
      ariaLabels: n,
      avatarFallbackColors: r,
      contacts: i,
      displayMode: a,
      getContactsForQuery: o,
      getContactQueryStatus: s,
      icons: c,
      isEditingDisabled: l,
      labels: u,
      onContactSelected: d,
      onCopyEmail: f,
      onMetadataChange: p,
      onSearch: m,
      onValueChange: h,
      portalContainer: g,
      renderSender: _,
      values: v,
    } = e,
    y;
  t[0] !== n.bccInput ||
  t[1] !== n.ccInput ||
  t[2] !== n.copiedEmail ||
  t[3] !== n.copyEmail ||
  t[4] !== n.recipientAvatar ||
  t[5] !== n.recipientInput ||
  t[6] !== n.removeRecipient ||
  t[7] !== r ||
  t[8] !== s ||
  t[9] !== o ||
  t[10] !== c.copied ||
  t[11] !== c.copy ||
  t[12] !== c.remove ||
  t[13] !== l ||
  t[14] !== u.loadingContacts ||
  t[15] !== d ||
  t[16] !== f ||
  t[17] !== p ||
  t[18] !== m ||
  t[19] !== h ||
  t[20] !== g
    ? ((y = (e) => {
        let { contacts: t, displayMode: i, field: a, label: _, trailingContent: v, value: y } = e;
        return (0, _n.jsx)($t, {
          ariaLabels: {
            copiedEmail: n.copiedEmail,
            copyEmail: n.copyEmail,
            input: a === `recipient` ? n.recipientInput : a === `cc` ? n.ccInput : n.bccInput,
            recipientAvatar: n.recipientAvatar,
            removeRecipient: n.removeRecipient,
          },
          avatarFallbackColors: r,
          contacts: t,
          copiedIcon: c.copied,
          copyIcon: c.copy,
          displayMode: i,
          field: a,
          getContactsForQuery: o,
          getContactQueryStatus: s,
          isEditingDisabled: l,
          label: _,
          loadingContacts: u.loadingContacts,
          onContactSelected: () => d?.(a),
          onCopyEmail: f,
          onMetadataChange: (e, t, n) => p(a, e, t, n),
          onSearch: m,
          onValueChange: (e) => h(a, e),
          portalContainer: g,
          removeIcon: c.remove,
          trailingContent: v,
          value: y,
        });
      }),
      (t[0] = n.bccInput),
      (t[1] = n.ccInput),
      (t[2] = n.copiedEmail),
      (t[3] = n.copyEmail),
      (t[4] = n.recipientAvatar),
      (t[5] = n.recipientInput),
      (t[6] = n.removeRecipient),
      (t[7] = r),
      (t[8] = s),
      (t[9] = o),
      (t[10] = c.copied),
      (t[11] = c.copy),
      (t[12] = c.remove),
      (t[13] = l),
      (t[14] = u.loadingContacts),
      (t[15] = d),
      (t[16] = f),
      (t[17] = p),
      (t[18] = m),
      (t[19] = h),
      (t[20] = g),
      (t[21] = y))
    : (y = t[21]);
  let b;
  return (
    t[22] !== i || t[23] !== a || t[24] !== l || t[25] !== u || t[26] !== _ || t[27] !== y || t[28] !== v
      ? ((b = (0, _n.jsx)(Ht, {
          contacts: i,
          displayMode: a,
          isEditingDisabled: l,
          labels: u,
          renderRecipientRow: y,
          renderSender: _,
          values: v,
        })),
        (t[22] = i),
        (t[23] = a),
        (t[24] = l),
        (t[25] = u),
        (t[26] = _),
        (t[27] = y),
        (t[28] = v),
        (t[29] = b))
      : (b = t[29]),
    b
  );
}
var gn, _n;
function vn() {
  return (vn = e(() => {
    ((gn = W()), Qt(), mn(), (_n = G()));
  }))();
}
function yn(e) {
  let t = (0, xn.c)(17),
    { controls: n, labels: r, renderButton: i } = e;
  if (!n.hasSessionEdits || n.hasActivePreview === !0) return null;
  let a = bn,
    o = n.isInteractionDisabled === !0 || !n.canUndo,
    s;
  t[0] !== n.onUndo || t[1] !== r.undoButton || t[2] !== r.undoTooltip || t[3] !== i || t[4] !== o
    ? ((s = i({
        action: `undo`,
        disabled: o,
        label: r.undoButton,
        onClick: n.onUndo,
        onMouseDown: a,
        tooltip: r.undoTooltip,
      })),
      (t[0] = n.onUndo),
      (t[1] = r.undoButton),
      (t[2] = r.undoTooltip),
      (t[3] = i),
      (t[4] = o),
      (t[5] = s))
    : (s = t[5]);
  let c;
  t[6] !== n.canRedo ||
  t[7] !== n.isInteractionDisabled ||
  t[8] !== n.onRedo ||
  t[9] !== n.showRedoButton ||
  t[10] !== r.redoButton ||
  t[11] !== r.redoTooltip ||
  t[12] !== i
    ? ((c = n.showRedoButton
        ? i({
            action: `redo`,
            disabled: n.isInteractionDisabled === !0 || !n.canRedo,
            label: r.redoButton,
            onClick: n.onRedo,
            onMouseDown: a,
            tooltip: r.redoTooltip,
          })
        : null),
      (t[6] = n.canRedo),
      (t[7] = n.isInteractionDisabled),
      (t[8] = n.onRedo),
      (t[9] = n.showRedoButton),
      (t[10] = r.redoButton),
      (t[11] = r.redoTooltip),
      (t[12] = i),
      (t[13] = c))
    : (c = t[13]);
  let l;
  return (
    t[14] !== s || t[15] !== c
      ? ((l = (0, Sn.jsxs)(Sn.Fragment, { children: [s, c] })), (t[14] = s), (t[15] = c), (t[16] = l))
      : (l = t[16]),
    l
  );
}
function bn(e) {
  e.preventDefault();
}
var xn, Sn;
function Cn() {
  return (Cn = e(() => {
    ((xn = W()), (Sn = G()));
  }))();
}
function wn({
  activeOptionId: e,
  ariaLabel: t,
  options: n,
  className: r,
  chevronIcon: i,
  disabled: a = !1,
  onOptionChange: o,
  placement: s = `body`,
  renderMenu: c,
}) {
  let l = (0, Dn.useRef)(null),
    u = (0, Dn.useId)(),
    d = (0, Dn.useRef)(null),
    f = (0, Dn.useRef)(!1),
    [p, m] = (0, Dn.useState)(!1),
    [h, g] = (0, Dn.useState)(!1),
    _ = c != null,
    v = JSON.stringify(n.map((e) => e.id)),
    y = _ && (p || h);
  if (
    ((0, Dn.useLayoutEffect)(() => {
      let e = l.current;
      if (!_ || e == null) return;
      let t,
        n = () => {
          let n = e.scrollWidth > e.clientWidth;
          n !== t &&
            ((t = n),
            (f.current = e.contains(document.activeElement) || d.current === document.activeElement),
            m(n));
        };
      if ((n(), typeof ResizeObserver > `u`)) return;
      let r = new ResizeObserver(n);
      r.observe(e);
      for (let t of e.children) r.observe(t);
      return () => r.disconnect();
    }, [_, v]),
    (0, Dn.useLayoutEffect)(() => {
      if (!f.current) return;
      f.current = !1;
      let e = document.activeElement,
        t = requestAnimationFrame(() => {
          (document.activeElement === e || document.activeElement === document.body) &&
            (y ? d.current?.focus() : l.current?.querySelector(`[aria-selected="true"]`)?.focus());
        });
      return () => cancelAnimationFrame(t);
    }, [y]),
    n.length === 0)
  )
    return null;
  let b = Math.max(
      0,
      n.findIndex((t) => t.id === e),
    ),
    x = n[b];
  return (0, On.jsxs)(`div`, {
    className: V(
      `relative min-w-0`,
      s === `body`
        ? `px-[calc(var(--oai-wb-spacing)*4)] pt-[calc(var(--oai-wb-spacing)*2)] pb-0 [border-bottom:1px_solid_var(--oai-wb-divider)]`
        : `flex-[1_1_auto]`,
      r,
    ),
    style: { ...Y },
    children: [
      (0, On.jsx)(`div`, {
        "aria-label": t,
        "aria-hidden": y || void 0,
        className: V(
          `mx-[calc(var(--oai-wb-spacing)*-1)] flex min-w-0 gap-[var(--oai-wb-spacing)] overflow-x-auto overflow-y-hidden px-[var(--oai-wb-spacing)]`,
          y && `invisible`,
          s === `body`
            ? `mt-[calc(var(--oai-wb-spacing)*-1)] pt-[var(--oai-wb-spacing)] pb-[calc(var(--oai-wb-spacing)*2)]`
            : `my-[calc(var(--oai-wb-spacing)*-1)] py-[var(--oai-wb-spacing)]`,
        ),
        inert: y || void 0,
        ref: l,
        role: `tablist`,
        children: n.map((t, n) => {
          let r = t.id === e,
            i = a || t.disabled === !0,
            c = t.isGenerating === !0;
          return (0, On.jsx)(
            `button`,
            {
              "aria-selected": r,
              className: V(
                `flex-[0_1_auto] rounded-full border-0 px-[calc(var(--oai-wb-spacing)*3)] whitespace-nowrap [font-family:inherit] [font-stretch:inherit] [font-style:inherit] [font-variant:inherit] font-medium first:ms-auto focus-visible:[outline:2px_solid_var(--oai-wb-focus)] focus-visible:[outline-offset:1px]`,
                s === `body`
                  ? `block h-[calc(var(--oai-wb-spacing)*7)] py-[calc(var(--oai-wb-spacing)*1.5)] text-[0.75rem] [align-items:normal]`
                  : `flex h-[calc(var(--oai-wb-spacing)*9)] items-center py-0 [font-size:var(--oai-wb-font-size)]`,
                s === `header` && n === 0 && `ms-auto`,
                i && c
                  ? `cursor-not-allowed [background:var(--oai-wb-surface-primary)] [color:var(--oai-wb-text-tertiary)]`
                  : V(
                      i ? `cursor-not-allowed opacity-50` : `cursor-pointer`,
                      r
                        ? `[background:var(--oai-wb-surface-secondary)] [color:var(--oai-wb-text-primary)]`
                        : V(
                            `[background:transparent] [color:var(--oai-wb-text-tertiary)]`,
                            !i &&
                              `hover:[background:var(--oai-wb-surface-secondary)] hover:[color:var(--oai-wb-text-primary)]`,
                          ),
                    ),
                t.className,
              ),
              "data-active": r ? `true` : void 0,
              "data-generating": t.isGenerating ? `true` : void 0,
              "data-loading": t.isLoading ? `true` : void 0,
              disabled: i,
              onClick: () => o(t.id),
              role: `tab`,
              type: `button`,
              children: (0, On.jsxs)(`span`, {
                className: V(
                  `inline-flex items-center gap-[var(--oai-wb-spacing)]`,
                  c && `cursor-not-allowed`,
                  t.labelClassName,
                ),
                "data-testid": `writing-block-option-tab-label`,
                children: [
                  (0, On.jsx)(`span`, {
                    className: `inline-flex items-center text-[1.2em] leading-none`,
                    children: En(n),
                  }),
                  ` `,
                  typeof t.label == `string` ? Tn(t.label) : t.label,
                ],
              }),
            },
            t.id,
          );
        }),
      }),
      y &&
        c != null &&
        (0, On.jsx)(`div`, {
          className: V(
            `absolute flex min-w-0 justify-end`,
            s === `body`
              ? `inset-x-[calc(var(--oai-wb-spacing)*4)] top-[calc(var(--oai-wb-spacing)*2)]`
              : `inset-x-0 top-0`,
          ),
          children: c({
            activeOptionId: e,
            disabled: a,
            options: n.map((e, t) => ({
              ...e,
              textValue: e.textValue ?? (typeof e.label == `string` ? e.label : void 0),
              label: (0, On.jsxs)(`span`, {
                className: `inline-flex max-w-full min-w-0 items-center gap-[var(--oai-wb-spacing)]`,
                style: Y,
                children: [
                  (0, On.jsx)(`span`, {
                    className: `inline-flex shrink-0 items-center text-[1.2em] leading-none`,
                    children: En(t),
                  }),
                  ` `,
                  (0, On.jsx)(`span`, { className: `min-w-0 wrap-anywhere`, children: e.label }),
                ],
              }),
            })),
            onOptionChange: o,
            onOpenChange: (e) => {
              if (!e && !p) {
                let e = document.activeElement;
                f.current = e === d.current || e?.closest(`[role="menu"]`) != null;
              }
              g(e);
            },
            trigger: (0, On.jsxs)(`button`, {
              "aria-label": t,
              "aria-describedby": u,
              "aria-busy": x?.isLoading,
              className: V(
                `flex max-w-full items-center gap-[var(--oai-wb-spacing)] rounded-full border-0 px-[calc(var(--oai-wb-spacing)*3)] [background:var(--oai-wb-surface-secondary)] [color:var(--oai-wb-text-primary)] [font-family:inherit] font-medium focus-visible:[outline:2px_solid_var(--oai-wb-focus)] focus-visible:[outline-offset:1px]`,
                s === `body`
                  ? `h-[calc(var(--oai-wb-spacing)*7)] text-[0.75rem]`
                  : `h-[calc(var(--oai-wb-spacing)*9)] [font-size:var(--oai-wb-font-size)]`,
                a ? `cursor-not-allowed opacity-50` : `cursor-pointer`,
              ),
              disabled: a,
              "data-loading": x?.isLoading || void 0,
              ref: d,
              type: `button`,
              children: [
                (0, On.jsxs)(`span`, {
                  className: V(
                    `inline-flex min-w-0 items-center gap-[var(--oai-wb-spacing)]`,
                    x?.labelClassName,
                  ),
                  id: u,
                  children: [
                    (0, On.jsx)(`span`, {
                      className: `inline-flex shrink-0 items-center text-[1.2em] leading-none`,
                      children: En(b),
                    }),
                    ` `,
                    (0, On.jsx)(`span`, { className: `truncate`, children: x?.label }),
                  ],
                }),
                i,
              ],
            }),
          }),
        }),
    ],
  });
}
function Tn(e) {
  let t = Array.from(e);
  return t.length <= kn ? e : `${t.slice(0, 23).join(``).trimEnd()}…`;
}
function En(e) {
  let t = e + 1;
  return t > An ? `${t}.` : String.fromCodePoint(9312 + e);
}
var Dn, On, kn, An;
function jn() {
  return (jn = e(() => {
    (M(), (Dn = q()), rt(), (On = G()), (kn = 24), (An = 20));
  }))();
}
function Mn(e) {
  let t = (0, In.c)(53),
    {
      actionOption: n,
      ariaLabel: r,
      className: i,
      chevronIcon: a,
      disabled: o,
      isLoadingOptions: s,
      loadingLabelClassName: c,
      loadingOptionLabel: l,
      onOptionClick: u,
      onSelectionChange: d,
      options: f,
      originalLabel: p,
      placement: m,
      primaryOptionLabel: h,
      selection: g,
      renderMenu: _,
    } = e,
    v = o !== void 0 && o,
    y = s !== void 0 && s,
    b = m === void 0 ? `body` : m,
    x = h ?? f[0]?.label,
    S;
  t[0] !== l || t[1] !== f || t[2] !== x
    ? ((S = l != null && (x === l || f.some((e) => e.label === l))),
      (t[0] = l),
      (t[1] = f),
      (t[2] = x),
      (t[3] = S))
    : (S = t[3]);
  let C = y && l != null && !S;
  if (!(f.length > 0 || C || n != null || x != null)) return null;
  let w;
  t[4] !== y || t[5] !== l || t[6] !== x
    ? ((w = Fn(x, l, y)), (t[4] = y), (t[5] = l), (t[6] = x), (t[7] = w))
    : (w = t[7]);
  let T = w,
    E = x ?? p,
    D = T ? c : void 0,
    O;
  t[8] !== T || t[9] !== E || t[10] !== D
    ? ((O = { id: Rn, isLoading: T, label: E, labelClassName: D }),
      (t[8] = T),
      (t[9] = E),
      (t[10] = D),
      (t[11] = O))
    : (O = t[11]);
  let k;
  if (t[12] !== n || t[13] !== y || t[14] !== c || t[15] !== l || t[16] !== f || t[17] !== C || t[18] !== O) {
    let e;
    if (
      (t[20] !== y || t[21] !== c || t[22] !== l
        ? ((e = (e, t) => {
            let n = t + 1,
              r = Fn(e.label, l, y);
            return { id: Nn(e.id, n), isLoading: r, label: e.label, labelClassName: r ? c : void 0 };
          }),
          (t[20] = y),
          (t[21] = c),
          (t[22] = l),
          (t[23] = e))
        : (e = t[23]),
      (k = [O, ...f.slice(1).map(e)]),
      C)
    ) {
      let e;
      (t[24] !== c || t[25] !== l
        ? ((e = { disabled: !0, id: zn, isGenerating: !0, isLoading: !0, label: l, labelClassName: c }),
          (t[24] = c),
          (t[25] = l),
          (t[26] = e))
        : (e = t[26]),
        k.push(e));
    }
    if (n != null) {
      let e = n.isLoading,
        r;
      t[27] === n.id ? (r = t[28]) : ((r = Pn(n.id)), (t[27] = n.id), (t[28] = r));
      let i = n.isLoading ? c : void 0,
        a;
      (t[29] !== n.isLoading || t[30] !== n.label || t[31] !== r || t[32] !== i
        ? ((a = {
            disabled: e,
            id: r,
            isGenerating: n.isLoading,
            isLoading: n.isLoading,
            label: n.label,
            labelClassName: i,
          }),
          (t[29] = n.isLoading),
          (t[30] = n.label),
          (t[31] = r),
          (t[32] = i),
          (t[33] = a))
        : (a = t[33]),
        k.push(a));
    }
    ((t[12] = n), (t[13] = y), (t[14] = c), (t[15] = l), (t[16] = f), (t[17] = C), (t[18] = O), (t[19] = k));
  } else k = t[19];
  let A;
  t[34] !== n || t[35] !== g
    ? ((A = n?.isActive === !0 ? Pn(n.id) : g.isOriginal ? Rn : Nn(g.id, g.index)),
      (t[34] = n),
      (t[35] = g),
      (t[36] = A))
    : (A = t[36]);
  let j = A,
    M;
  t[37] !== n || t[38] !== u || t[39] !== d || t[40] !== f || t[41] !== x
    ? ((M = (e) => {
        if (n != null && e === Pn(n.id)) {
          n.onAction();
          return;
        }
        if (e === Rn) {
          let e = { isOriginal: !0 };
          (x != null && u?.({ index: 0, label: x, selection: e }), d(e));
          return;
        }
        let t = f.findIndex((t, n) => Nn(t.id, n) === e),
          r = f[t];
        if (r == null || t < 1) return;
        let i = { id: r.id, index: t, isOriginal: !1 };
        (u?.({ index: t, label: r.label, selection: i }), d(i));
      }),
      (t[37] = n),
      (t[38] = u),
      (t[39] = d),
      (t[40] = f),
      (t[41] = x),
      (t[42] = M))
    : (M = t[42]);
  let N;
  return (
    t[43] !== j ||
    t[44] !== r ||
    t[45] !== a ||
    t[46] !== i ||
    t[47] !== v ||
    t[48] !== b ||
    t[49] !== _ ||
    t[50] !== M ||
    t[51] !== k
      ? ((N = (0, Ln.jsx)(wn, {
          activeOptionId: j,
          ariaLabel: r,
          className: i,
          chevronIcon: a,
          disabled: v,
          onOptionChange: M,
          options: k,
          placement: b,
          renderMenu: _,
        })),
        (t[43] = j),
        (t[44] = r),
        (t[45] = a),
        (t[46] = i),
        (t[47] = v),
        (t[48] = b),
        (t[49] = _),
        (t[50] = M),
        (t[51] = k),
        (t[52] = N))
      : (N = t[52]),
    N
  );
}
function Nn(e, t) {
  return `${e}:${t}`;
}
function Pn(e) {
  return `${Bn}:${e}`;
}
function Fn(e, t, n) {
  return n && e != null && t != null && t === e;
}
var In, Ln, Rn, zn, Bn;
function Vn() {
  return (Vn = e(() => {
    ((In = W()),
      jn(),
      (Ln = G()),
      (Rn = `__writing-block-original__`),
      (zn = `__writing-block-generating__`),
      (Bn = `__writing-block-action__`));
  }))();
}
function Hn(e) {
  let t = (0, Un.c)(18),
    {
      activeToneSectionId: n,
      content: r,
      externalContentUpdate: i,
      onToneSectionSelect: a,
      proseMirrorStore: o,
      toneSections: s,
    } = e,
    [c] = (0, Wn.useState)(tt),
    l = o ?? c,
    u = Qe(l),
    [d, f] = (0, Wn.useState)(s?.[0]?.id ?? null),
    p = n ?? d,
    m;
  t[0] !== p || t[1] !== s
    ? ((m = s?.find((e) => e.id === p) ?? s?.[0]), (t[0] = p), (t[1] = s), (t[2] = m))
    : (m = t[2]);
  let h = m,
    g = h?.id,
    _ = h?.content ?? r,
    v = o != null,
    y;
  t[3] !== h?.id || t[4] !== n || t[5] !== a || t[6] !== l
    ? ((y = (e) => {
        e !== h?.id && (l.setView(null), n ?? f(e), a?.(e));
      }),
      (t[3] = h?.id),
      (t[4] = n),
      (t[5] = a),
      (t[6] = l),
      (t[7] = y))
    : (y = t[7]);
  let b;
  return (
    t[8] !== h ||
    t[9] !== i ||
    t[10] !== u ||
    t[11] !== l ||
    t[12] !== g ||
    t[13] !== _ ||
    t[14] !== v ||
    t[15] !== y ||
    t[16] !== s
      ? ((b = {
          ...u,
          activeToneSection: h,
          activeToneSectionId: g,
          displayedContent: _,
          externalContentUpdate: i,
          isProseMirrorStoreShared: v,
          proseMirrorStore: l,
          selectToneSection: y,
          toneSections: s,
        }),
        (t[8] = h),
        (t[9] = i),
        (t[10] = u),
        (t[11] = l),
        (t[12] = g),
        (t[13] = _),
        (t[14] = v),
        (t[15] = y),
        (t[16] = s),
        (t[17] = b))
      : (b = t[17]),
    b
  );
}
var Un, Wn;
function Gn() {
  return (Gn = e(() => {
    ((Un = W()), $e(), (Wn = q()));
  }))();
}
function Kn(e) {
  let t = (0, qn.c)(37),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ createEditor: n, onBeforeExternalContentUpdate: r, state: a, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o;
  if (t[5] !== a.displayedContent || t[6] !== a.externalContentUpdate) {
    let e = Ke();
    ((o = a.externalContentUpdate == null ? a.displayedContent : e.serialize(e.parse(a.displayedContent))),
      (t[5] = a.displayedContent),
      (t[6] = a.externalContentUpdate),
      (t[7] = o));
  } else o = t[7];
  let s = o,
    c = a.editorView,
    l;
  t[8] !== s || t[9] !== a
    ? ((l = Tt(a, a.externalContentUpdate, s)), (t[8] = s), (t[9] = a), (t[10] = l))
    : (l = t[10]);
  let u = l,
    d;
  t[11] === a.externalContentUpdate
    ? (d = t[12])
    : ((d = () => a.externalContentUpdate), (t[11] = a.externalContentUpdate), (t[12] = d));
  let f = K(d),
    p;
  t[13] === r
    ? (p = t[14])
    : ((p = (e) => {
        r?.(e);
      }),
      (t[13] = r),
      (t[14] = p));
  let m = K(p),
    h = (0, Jn.useRef)(null),
    g;
  t[15] !== n ||
  t[16] !== f ||
  t[17] !== m ||
  t[18] !== a.isProseMirrorStoreShared ||
  t[19] !== a.proseMirrorStore
    ? ((g = (e) => {
        let t = n({
          ...e,
          getExternalContentUpdate: f,
          onBeforeExternalContentUpdate: m,
          proseMirrorStore: a.isProseMirrorStoreShared ? a.proseMirrorStore : void 0,
        });
        return (
          (h.current = t),
          {
            ...t,
            destroy() {
              (h.current === t && (h.current = null), t.destroy());
            },
          }
        );
      }),
      (t[15] = n),
      (t[16] = f),
      (t[17] = m),
      (t[18] = a.isProseMirrorStoreShared),
      (t[19] = a.proseMirrorStore),
      (t[20] = g))
    : (g = t[20]);
  let _ = K(g),
    v;
  t[21] !== c || t[22] !== s || t[23] !== a
    ? ((v = () => {
        let e = h.current;
        e?.view === c && Tt(a, a.externalContentUpdate, s) === `unchanged` && e.setMarkdown(s);
      }),
      (t[21] = c),
      (t[22] = s),
      (t[23] = a),
      (t[24] = v))
    : (v = t[24]);
  let y = (0, Jn.useEffectEvent)(v),
    b;
  t[25] === y
    ? (b = t[26])
    : ((b = () => {
        y();
      }),
      (t[25] = y),
      (t[26] = b));
  let x = a.externalContentUpdate?.key,
    S;
  (t[27] !== c || t[28] !== s || t[29] !== x
    ? ((S = [s, c, x]), (t[27] = c), (t[28] = s), (t[29] = x), (t[30] = S))
    : (S = t[30]),
    (0, Jn.useEffect)(b, S));
  let C = i.editable !== !1 && u !== `changed`,
    w;
  return (
    t[31] !== _ || t[32] !== s || t[33] !== i || t[34] !== a.proseMirrorStore || t[35] !== C
      ? ((w = (0, Yn.jsx)(nt, {
          ...i,
          createEditor: _,
          editable: C,
          markdown: s,
          proseMirrorStore: a.proseMirrorStore,
        })),
        (t[31] = _),
        (t[32] = s),
        (t[33] = i),
        (t[34] = a.proseMirrorStore),
        (t[35] = C),
        (t[36] = w))
      : (w = t[36]),
    w
  );
}
var qn, Jn, Yn;
function Xn() {
  return (Xn = e(() => {
    ((qn = W()), We(), et(), (Jn = q()), L(), St(), (Yn = G()));
  }))();
}
function Zn(e, t) {
  let n = e.get(Qn, t),
    r = e.get(n.state$);
  r != null && !r.persistsUntilEdit && n.dismiss(`copy`);
}
var Qn;
function $n() {
  return ($n = e(() => {
    (We(),
      y(),
      J(),
      ue(),
      vt(),
      (Qn = R(c, (e, { signal: t, scope: n }) => {
        let r = t(null),
          i = null,
          a = null;
        return {
          state$: r,
          update(e, t) {
            let o = n.get(r);
            if (o?.dismissed == null) {
              if (o != null && !o.isStreaming) {
                if (a !== e.receivedMarkdown && o.changes != null)
                  try {
                    (e.receivedMarkdown.length > 2e4 ||
                      yt(Ke().parse(e.receivedMarkdown)).text !== o.changes.text) &&
                      n.set(r, { ...o, dismissed: `error` });
                  } catch {
                    n.set(r, { ...o, dismissed: `error` });
                  }
                a = e.receivedMarkdown;
                return;
              }
              if (
                ((a = e.receivedMarkdown),
                (!e.isStreaming && !e.isComplete) ||
                  e.previousMarkdown.length + e.receivedMarkdown.length > 2e4)
              ) {
                n.set(r, {
                  changes: null,
                  isStreaming: !1,
                  expiresAt: null,
                  persistsUntilEdit: t === `until-first-edit`,
                  dismissed: `error`,
                });
                return;
              }
              try {
                let a = Ke();
                i?.markdown !== e.previousMarkdown &&
                  (i = { markdown: e.previousMarkdown, doc: a.parse(e.previousMarkdown) });
                let o = xt({
                    previousDoc: i.doc,
                    receivedDoc: a.parse(
                      e.isStreaming ? He(e.receivedMarkdown).markdown : e.receivedMarkdown,
                    ),
                    isStreaming: e.isStreaming,
                    endsAtWordBoundary: /\s$/u.test(e.receivedMarkdown),
                  }),
                  s = e.isStreaming || o == null ? null : kt(o.text, t);
                n.set(r, {
                  changes: o,
                  isStreaming: e.isStreaming,
                  expiresAt: s == null ? null : Date.now() + s,
                  persistsUntilEdit: t === `until-first-edit`,
                  dismissed: null,
                });
              } catch {
                n.set(r, {
                  changes: null,
                  isStreaming: !1,
                  expiresAt: null,
                  persistsUntilEdit: t === `until-first-edit`,
                  dismissed: `error`,
                });
              }
            }
          },
          dismiss(e) {
            let t = n.get(r);
            t != null && t.dismissed == null && n.set(r, { ...t, dismissed: e });
          },
        };
      })));
  }))();
}
function er(e) {
  let t = (0, tr.c)(24),
    { editorView: n, revision: r } = e,
    i = p(c),
    a = x(Qn, r.id),
    o = O(a.state$),
    s = O(Se),
    l;
  t[0] !== a || t[1] !== r || t[2] !== s
    ? ((l = () => {
        a.update(r, s);
      }),
      (t[0] = a),
      (t[1] = r),
      (t[2] = s),
      (t[3] = l))
    : (l = t[3]);
  let u = (0, nr.useEffectEvent)(l),
    d;
  t[4] === u
    ? (d = t[5])
    : ((d = () => {
        u();
      }),
      (t[4] = u),
      (t[5] = d));
  let f;
  (t[6] !== a ||
  t[7] !== r.id ||
  t[8] !== r.isComplete ||
  t[9] !== r.isStreaming ||
  t[10] !== r.previousMarkdown ||
  t[11] !== r.receivedMarkdown ||
  t[12] !== s
    ? ((f = [a, r.id, r.previousMarkdown, r.receivedMarkdown, r.isStreaming, r.isComplete, s]),
      (t[6] = a),
      (t[7] = r.id),
      (t[8] = r.isComplete),
      (t[9] = r.isStreaming),
      (t[10] = r.previousMarkdown),
      (t[11] = r.receivedMarkdown),
      (t[12] = s),
      (t[13] = f))
    : (f = t[13]),
    (0, nr.useEffect)(d, f));
  let m, h;
  (t[14] !== n || t[15] !== r.id || t[16] !== o
    ? ((m = () => {
        n == null || n.isDestroyed || o == null || Dt(n, r.id, o);
      }),
      (h = [n, r.id, o]),
      (t[14] = n),
      (t[15] = r.id),
      (t[16] = o),
      (t[17] = m),
      (t[18] = h))
    : ((m = t[17]), (h = t[18])),
    (0, nr.useEffect)(m, h));
  let g, _;
  return (
    t[19] !== n || t[20] !== r.id || t[21] !== i
      ? ((g = () => {
          if (n == null || n.isDestroyed) return;
          let e = () => {
            n.state.selection.empty || Zn(i, r.id);
          };
          return (
            n.dom.addEventListener(`copy`, e),
            () => {
              (n.dom.removeEventListener(`copy`, e), _t(n));
            }
          );
        }),
        (_ = [n, r.id, i]),
        (t[19] = n),
        (t[20] = r.id),
        (t[21] = i),
        (t[22] = g),
        (t[23] = _))
      : ((g = t[22]), (_ = t[23])),
    (0, nr.useEffect)(g, _),
    null
  );
}
var tr, nr;
function rr() {
  return (rr = e(() => {
    ((tr = W()), y(), (nr = q()), ue(), wt(), Fe(), $n());
  }))();
}
function ir(e, t) {
  return (
    e?.write_like_me_offer_policy === `automatic` &&
    (t === `email` || t === `chat_message` || t === `social_post`)
  );
}
function ar(e) {
  let t = (0, sr.c)(89),
    {
      contacts: n,
      getContactsForQuery: r,
      isRecipientEditable: i,
      isSubjectEditable: a,
      metadata: o,
      onBlur: s,
      onRecipientChange: c,
      onRecipientMetadataChange: l,
      onSearch: u,
      onSubjectChange: d,
      renderSender: f,
      subjectKey: p,
    } = e,
    h = n === void 0 ? dr : n,
    _ = r === void 0 ? mr : r,
    v = u === void 0 ? pr : u,
    y = D(),
    b = o?.bcc ?? ``,
    x = o?.cc ?? ``,
    S = o?.recipient ?? ``,
    C;
  t[0] !== b || t[1] !== x || t[2] !== S
    ? ((C = { bcc: b, cc: x, recipient: S }), (t[0] = b), (t[1] = x), (t[2] = S), (t[3] = C))
    : (C = t[3]);
  let w = C,
    T;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((T = {}), (t[4] = T)) : (T = t[4]);
  let [E, O] = (0, cr.useState)(T),
    k = E.bcc?.source === w.bcc ? E.bcc.value : w.bcc,
    A = E.cc?.source === w.cc ? E.cc.value : w.cc,
    j = E.recipient?.source === w.recipient ? E.recipient.value : w.recipient,
    M;
  t[5] !== A || t[6] !== j || t[7] !== k
    ? ((M = { bcc: k, cc: A, recipient: j }), (t[5] = A), (t[6] = j), (t[7] = k), (t[8] = M))
    : (M = t[8]);
  let N = M,
    P;
  t[9] === w
    ? (P = t[10])
    : ((P = (e, t) => {
        O((n) => ({ ...n, [e]: { source: w[e], value: t } }));
      }),
      (t[9] = w),
      (t[10] = P));
  let F = P,
    I = o?.subject ?? ``,
    [L, R] = (0, cr.useState)(null),
    z = L?.key === p && L?.source === I ? L.value : I,
    B;
  t[11] !== d || t[12] !== I || t[13] !== p
    ? ((B = (e) => {
        (R({ key: p, source: I, value: e }), d?.(e));
      }),
      (t[11] = d),
      (t[12] = I),
      (t[13] = p),
      (t[14] = B))
    : (B = t[14]);
  let V = B,
    H;
  t[15] === y
    ? (H = t[16])
    : ((H = y.formatMessage({
        id: `codex.writingBlock.email.recipient.field.bcc.label`,
        defaultMessage: `Bcc`,
        description: `Short field label for the blind-carbon-copy recipient line in a shared Codex Apps email writing block used by local Codex threads and Quick Chat. It appears to the left of the recipient input without punctuation; use the locale's standard abbreviation.`,
      })),
      (t[15] = y),
      (t[16] = H));
  let U;
  t[17] === y
    ? (U = t[18])
    : ((U = y.formatMessage({
        id: `codex.writingBlock.email.recipient.toggle.bcc.label`,
        defaultMessage: `Bcc`,
        description: `Short button label that reveals the blind-carbon-copy recipient line in a shared Codex Apps email writing block used by local Codex threads and Quick Chat. Use the locale's standard abbreviation.`,
      })),
      (t[17] = y),
      (t[18] = U));
  let ee;
  t[19] === y
    ? (ee = t[20])
    : ((ee = y.formatMessage({
        id: `codex.writingBlock.email.recipient.field.cc.label`,
        defaultMessage: `Cc`,
        description: `Short field label for the carbon-copy recipient line in a shared Codex Apps email writing block used by local Codex threads and Quick Chat. It appears to the left of the recipient input without punctuation; use the locale's standard abbreviation.`,
      })),
      (t[19] = y),
      (t[20] = ee));
  let te;
  t[21] === y
    ? (te = t[22])
    : ((te = y.formatMessage({
        id: `codex.writingBlock.email.recipient.toggle.cc.label`,
        defaultMessage: `Cc`,
        description: `Short button label that reveals the carbon-copy recipient line in a shared Codex Apps email writing block used by local Codex threads and Quick Chat. Use the locale's standard abbreviation.`,
      })),
      (t[21] = y),
      (t[22] = te));
  let ne;
  t[23] === y
    ? (ne = t[24])
    : ((ne = y.formatMessage({
        id: `codex.writingBlock.email.recipient.field.to.label`,
        defaultMessage: `To`,
        description: `Short field label for the primary recipient line in a shared Codex Apps email writing block used by local Codex threads and Quick Chat. It appears to the left of the recipient input without punctuation; use the locale's standard email-client label.`,
      })),
      (t[23] = y),
      (t[24] = ne));
  let re;
  t[25] === y
    ? (re = t[26])
    : ((re = y.formatMessage({
        id: `codex.writingBlock.email.recipient.empty.placeholder`,
        defaultMessage: `Recipients`,
        description: `Placeholder in the collapsed recipient row of a shared Codex Apps email writing block used by local Codex threads and Quick Chat. It appears when the To, Cc, and Bcc fields are all empty.`,
      })),
      (t[25] = y),
      (t[26] = re));
  let ie;
  t[27] !== H || t[28] !== U || t[29] !== ee || t[30] !== te || t[31] !== ne || t[32] !== re
    ? ((ie = { bcc: H, bccToggle: U, cc: ee, ccToggle: te, recipient: ne, recipientsPlaceholder: re }),
      (t[27] = H),
      (t[28] = U),
      (t[29] = ee),
      (t[30] = te),
      (t[31] = ne),
      (t[32] = re),
      (t[33] = ie))
    : (ie = t[33]);
  let ae = ie,
    oe;
  t[34] === y
    ? (oe = t[35])
    : ((oe = y.formatMessage({
        id: `codex.writingBlock.email.subject.field.label`,
        defaultMessage: `Subject`,
        description: `Short field label for the subject line in a shared Codex Apps email writing block used by local Codex threads and Quick Chat. The label may also prefix copied subject text.`,
      })),
      (t[34] = y),
      (t[35] = oe));
  let se = oe,
    ce;
  t[36] === y
    ? (ce = t[37])
    : ((ce = y.formatMessage({
        id: `codex.writingBlock.email.recipient.input.ariaLabel.to`,
        defaultMessage: `To recipients`,
        description: `Accessible label for the To recipient input in a Codex Apps email writing block. Users type or select the primary email recipients here; this label is announced by assistive technology and is not visible.`,
      })),
      (t[36] = y),
      (t[37] = ce));
  let W;
  t[38] === y
    ? (W = t[39])
    : ((W = y.formatMessage({
        id: `codex.writingBlock.email.recipient.input.ariaLabel.cc`,
        defaultMessage: `Cc recipients`,
        description: `Accessible label for the Cc recipient input in a Codex Apps email writing block. Users type or select carbon-copy recipients here; this label is announced by assistive technology and is not visible.`,
      })),
      (t[38] = y),
      (t[39] = W));
  let le;
  t[40] === y
    ? (le = t[41])
    : ((le = y.formatMessage({
        id: `codex.writingBlock.email.recipient.input.ariaLabel.bcc`,
        defaultMessage: `Bcc recipients`,
        description: `Accessible label for the Bcc recipient input in a Codex Apps email writing block. Users type or select blind-carbon-copy recipients here; this label is announced by assistive technology and is not visible.`,
      })),
      (t[40] = y),
      (t[41] = le));
  let ue;
  t[42] === y
    ? (ue = t[43])
    : ((ue = y.formatMessage({
        id: `codex.writingBlock.email.recipient.contact.copy.ariaLabel.copied`,
        defaultMessage: `Copied email address`,
        description: `Accessible confirmation label on a recipient contact card after the user copies its email address in a Codex Apps email writing block. It is not visible text.`,
      })),
      (t[42] = y),
      (t[43] = ue));
  let G;
  t[44] === y
    ? (G = t[45])
    : ((G = y.formatMessage({
        id: `codex.writingBlock.email.recipient.contact.copy.ariaLabel.action`,
        defaultMessage: `Copy email address`,
        description: `Accessible label for the button that copies a recipient's email address from a contact card in a Codex Apps email writing block. It is not visible text.`,
      })),
      (t[44] = y),
      (t[45] = G));
  let de;
  t[46] === y
    ? (de = t[47])
    : ((de = y.formatMessage({
        id: `codex.writingBlock.email.recipient.contact.avatar.ariaLabel`,
        defaultMessage: `Profile avatar`,
        description: `Accessible label for a recipient's profile avatar in a Codex Apps email writing block contact chip or suggestion. It is not visible text.`,
      })),
      (t[46] = y),
      (t[47] = de));
  let fe;
  t[48] !== ce || t[49] !== W || t[50] !== le || t[51] !== ue || t[52] !== G || t[53] !== de
    ? ((fe = { recipient: ce, cc: W, bcc: le, copiedEmail: ue, copyEmail: G, recipientAvatar: de }),
      (t[48] = ce),
      (t[49] = W),
      (t[50] = le),
      (t[51] = ue),
      (t[52] = G),
      (t[53] = de),
      (t[54] = fe))
    : (fe = t[54]);
  let K = fe,
    me;
  t[55] === y
    ? (me = t[56])
    : ((me = (e) =>
        y.formatMessage(
          {
            id: `codex.writingBlock.email.recipient.contact.remove.ariaLabel`,
            defaultMessage: `Remove {recipient}`,
            description: `Accessible label for the button that removes a recipient chip from a Codex Apps email writing block. Placeholder {recipient} is the displayed contact name or email address; this label is not visible text.`,
          },
          { recipient: e },
        )),
      (t[55] = y),
      (t[56] = me));
  let ge;
  t[57] !== K.bcc ||
  t[58] !== K.cc ||
  t[59] !== K.copiedEmail ||
  t[60] !== K.copyEmail ||
  t[61] !== K.recipient ||
  t[62] !== K.recipientAvatar ||
  t[63] !== me
    ? ((ge = {
        bccInput: K.bcc,
        ccInput: K.cc,
        copiedEmail: K.copiedEmail,
        copyEmail: K.copyEmail,
        recipientAvatar: K.recipientAvatar,
        recipientInput: K.recipient,
        removeRecipient: me,
      }),
      (t[57] = K.bcc),
      (t[58] = K.cc),
      (t[59] = K.copiedEmail),
      (t[60] = K.copyEmail),
      (t[61] = K.recipient),
      (t[62] = K.recipientAvatar),
      (t[63] = me),
      (t[64] = ge))
    : (ge = t[64]);
  let q = i ? `tokenized` : `plain_text`,
    _e;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = {
        copied: (0, lr.jsx)(g, { "aria-hidden": !1, asset: pe }),
        copy: (0, lr.jsx)(g, { "aria-hidden": !1, asset: m }),
        remove: (0, lr.jsx)(he, { className: `icon-sm` }),
      }),
      (t[65] = _e))
    : (_e = t[65]);
  let ve = !i,
    ye;
  t[66] !== s || t[67] !== c || t[68] !== l
    ? ((ye = (e, t, n, r) => {
        (r && c?.(e, t), l?.(e, t, n, r), r && s?.());
      }),
      (t[66] = s),
      (t[67] = c),
      (t[68] = l),
      (t[69] = ye))
    : (ye = t[69]);
  let be;
  t[70] !== h ||
  t[71] !== _ ||
  t[72] !== F ||
  t[73] !== v ||
  t[74] !== ae ||
  t[75] !== N ||
  t[76] !== f ||
  t[77] !== ge ||
  t[78] !== q ||
  t[79] !== ve ||
  t[80] !== ye
    ? ((be = (0, lr.jsx)(hn, {
        ariaLabels: ge,
        avatarFallbackColors: fr,
        contacts: h,
        displayMode: q,
        getContactsForQuery: _,
        icons: _e,
        isEditingDisabled: ve,
        labels: ae,
        onCopyEmail: or,
        onMetadataChange: ye,
        onSearch: v,
        onValueChange: F,
        renderSender: f,
        values: N,
      })),
      (t[70] = h),
      (t[71] = _),
      (t[72] = F),
      (t[73] = v),
      (t[74] = ae),
      (t[75] = N),
      (t[76] = f),
      (t[77] = ge),
      (t[78] = q),
      (t[79] = ve),
      (t[80] = ye),
      (t[81] = be))
    : (be = t[81]);
  let xe;
  return (
    t[82] !== V || t[83] !== a || t[84] !== s || t[85] !== z || t[86] !== se || t[87] !== be
      ? ((xe = (0, lr.jsx)(Lt, {
          isSubjectEditable: a,
          onBlur: s,
          onSubjectChange: V,
          recipientClassName: `ps-4 pe-4 sm:ps-5 md:pe-5`,
          recipientFields: be,
          subject: z,
          subjectClassName: `ps-4 pe-3 sm:ps-5 sm:pe-2 md:pe-10`,
          subjectLabel: se,
          subjectPlaceholder: se,
        })),
        (t[82] = V),
        (t[83] = a),
        (t[84] = s),
        (t[85] = z),
        (t[86] = se),
        (t[87] = be),
        (t[88] = xe))
      : (xe = t[88]),
    xe
  );
}
function or(e, t) {
  return ie(e, t);
}
var sr, cr, lr, ur, dr, fr, pr, mr;
function hr() {
  return (hr = e(() => {
    ((sr = W()),
      P(),
      re(),
      Vt(),
      vn(),
      (cr = q()),
      U(),
      v(),
      F(),
      H(),
      (lr = G()),
      (ur = []),
      (dr = {}),
      (fr = [
        `var(--color-chart-blue)`,
        `var(--color-chart-green)`,
        `var(--color-chart-yellow)`,
        `var(--color-chart-orange)`,
        `var(--color-chart-purple)`,
        `var(--color-chart-red)`,
      ]),
      (pr = () => void 0),
      (mr = () => ur));
  }))();
}
function gr(e) {
  let t = (0, _r.c)(43),
    { editorView: n, suggestion: r } = e,
    i = E(),
    a = (0, vr.useRef)(null),
    o,
    c;
  (t[0] === r.mode
    ? ((o = t[1]), (c = t[2]))
    : ((o = () => {
        r.mode === `picker` && a.current?.focus();
      }),
      (c = [r.mode]),
      (t[0] = r.mode),
      (t[1] = o),
      (t[2] = c)),
    (0, vr.useEffect)(o, c));
  let l;
  t[3] !== n || t[4] !== r.from
    ? ((l = {
        contextElement: n.dom,
        getBoundingClientRect() {
          if (!n.isDestroyed)
            try {
              let { left: e, bottom: t } = n.coordsAtPos(r.from);
              return DOMRect.fromRect({ x: e, y: t });
            } catch {}
          return n.dom.getBoundingClientRect();
        },
      }),
      (t[3] = n),
      (t[4] = r.from),
      (t[5] = l))
    : (l = t[5]);
  let u = l,
    d;
  t[6] === u ? (d = t[7]) : ((d = { reference: u }), (t[6] = u), (t[7] = d));
  let f, p, m;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = I(8)), (p = N({ padding: 8 })), (m = fe({ padding: 8 })), (t[8] = f), (t[9] = p), (t[10] = m))
    : ((f = t[8]), (p = t[9]), (m = t[10]));
  let h;
  t[11] === i
    ? (h = t[12])
    : ((h = C({
        padding: 8,
        apply(e) {
          let { availableHeight: t, availableWidth: n, elements: r } = e;
          ((r.floating.style.maxWidth = `${n}px`),
            r.floating.style.setProperty(`--autocomplete-overlay-available-height`, `${t / i}px`));
        },
      })),
      (t[11] = i),
      (t[12] = h));
  let g;
  t[13] === h ? (g = t[14]) : ((g = [f, p, m, h]), (t[13] = h), (t[14] = g));
  let _ = !n.isDestroyed,
    v;
  t[15] !== _ || t[16] !== d || t[17] !== g
    ? ((v = { elements: d, middleware: g, open: _, placement: `bottom-start`, whileElementsMounted: le }),
      (t[15] = _),
      (t[16] = d),
      (t[17] = g),
      (t[18] = v))
    : (v = t[18]);
  let { floatingStyles: y, refs: b } = s(v),
    { setFloating: x } = b;
  if (n.isDestroyed) return null;
  let S = i === 1 ? void 0 : i,
    w;
  t[19] === S ? (w = t[20]) : ((w = { zoom: S }), (t[19] = S), (t[20] = w));
  let T;
  t[21] === Symbol.for(`react.memo_cache_sentinel`) ? ((T = { emoji: {} }), (t[21] = T)) : (T = t[21]);
  let D;
  t[22] === n ? (D = t[23]) : ((D = () => Ce(n)), (t[22] = n), (t[23] = D));
  let O;
  t[24] !== n || t[25] !== r
    ? ((O = (e) => {
        e.kind === `emoji` && !n.isDestroyed && (n.focus(), Me(n, e.value, r));
      }),
      (t[24] = n),
      (t[25] = r),
      (t[26] = O))
    : (O = t[26]);
  let k;
  t[27] !== n.dom || t[28] !== r.mode || t[29] !== r.query || t[30] !== D || t[31] !== O
    ? ((k = (0, br.jsx)(
        It,
        { capabilities: T, keyboardTarget: n.dom, inputRef: a, query: r.query, onDismiss: D, onSelect: O },
        r.mode,
      )),
      (t[27] = n.dom),
      (t[28] = r.mode),
      (t[29] = r.query),
      (t[30] = D),
      (t[31] = O),
      (t[32] = k))
    : (k = t[32]);
  let A;
  t[33] !== w || t[34] !== k
    ? ((A = (0, br.jsx)(`div`, { style: w, children: k })), (t[33] = w), (t[34] = k), (t[35] = A))
    : (A = t[35]);
  let j;
  t[36] !== y || t[37] !== x || t[38] !== A
    ? ((j = (0, br.jsx)(`div`, {
        ref: x,
        className: `z-50`,
        "data-writing-block-emoji-picker": !0,
        style: y,
        children: A,
      })),
      (t[36] = y),
      (t[37] = x),
      (t[38] = A),
      (t[39] = j))
    : (j = t[39]);
  let M;
  return (
    t[40] !== n.dom.ownerDocument.body || t[41] !== j
      ? ((M = (0, yr.createPortal)(j, n.dom.ownerDocument.body)),
        (t[40] = n.dom.ownerDocument.body),
        (t[41] = j),
        (t[42] = M))
      : (M = t[42]),
    M
  );
}
var _r, vr, yr, br;
function xr() {
  return (xr = e(() => {
    ((_r = W()), ge(), Ie(), (vr = q()), (yr = me()), l(), Ft(), (br = G()));
  }))();
}
function Sr(e) {
  let t = (0, wr.c)(41),
    { editorView: n, historySummary: r, isEditable: i, isInteractionDisabled: a, presentation: o } = e,
    s = o === void 0 ? `inline` : o,
    c = D(),
    [l, u] = (0, Tr.useState)(null),
    d;
  t[0] === c
    ? (d = t[1])
    : ((d = c.formatMessage({
        id: `codex.writingBlock.history.undo.button.tooltip`,
        defaultMessage: `Undo`,
        description: `Short tooltip for the Undo button in the header of a shared editable Codex Apps writing block used by local Codex threads and Quick Chat.`,
      })),
      (t[0] = c),
      (t[1] = d));
  let f = d,
    p;
  t[2] === c
    ? (p = t[3])
    : ((p = c.formatMessage({
        id: `codex.writingBlock.history.undo.button.ariaLabel`,
        defaultMessage: `Undo last edit`,
        description: `Short accessible label for the Undo button in the header of a shared editable Codex Apps writing block used by local Codex threads and Quick Chat. Activating it restores the previous direct edit.`,
      })),
      (t[2] = c),
      (t[3] = p));
  let m = p,
    h;
  t[4] === c
    ? (h = t[5])
    : ((h = c.formatMessage({
        id: `codex.writingBlock.history.redo.button.tooltip`,
        defaultMessage: `Redo`,
        description: `Short tooltip for the Redo button in the header of a shared editable Codex Apps writing block used by local Codex threads and Quick Chat.`,
      })),
      (t[4] = c),
      (t[5] = h));
  let g = h,
    _;
  t[6] === c
    ? (_ = t[7])
    : ((_ = c.formatMessage({
        id: `codex.writingBlock.history.redo.button.ariaLabel`,
        defaultMessage: `Redo last edit`,
        description: `Short accessible label for the Redo button in the header of a shared editable Codex Apps writing block used by local Codex threads and Quick Chat. Activating it restores the direct edit that was most recently undone.`,
      })),
      (t[6] = c),
      (t[7] = _));
  let v = _,
    y;
  t[8] !== n || t[9] !== i || t[10] !== a
    ? ((y = () => {
        !i || a || n == null || n.isDestroyed || (j(n.state, n.dispatch, n) && u(n));
      }),
      (t[8] = n),
      (t[9] = i),
      (t[10] = a),
      (t[11] = y))
    : (y = t[11]);
  let b = y,
    x;
  t[12] !== n || t[13] !== i || t[14] !== a
    ? ((x = () => {
        !i || a || n == null || n.isDestroyed || te(n.state, n.dispatch, n);
      }),
      (t[12] = n),
      (t[13] = i),
      (t[14] = a),
      (t[15] = x))
    : (x = t[15]);
  let S = x;
  if (s === `viewer`) {
    let e = !i || a,
      n;
    return (
      t[16] !== S || t[17] !== b || t[18] !== r.canRedo || t[19] !== r.canUndo || t[20] !== e
        ? ((n = (0, Er.jsx)(k, {
            canRedo: r.canRedo,
            canUndo: r.canUndo,
            disabled: e,
            onRedo: S,
            onUndo: b,
          })),
          (t[16] = S),
          (t[17] = b),
          (t[18] = r.canRedo),
          (t[19] = r.canUndo),
          (t[20] = e),
          (t[21] = n))
        : (n = t[21]),
      n
    );
  }
  if (!r.canUndo && !r.canRedo) return null;
  let C = r.canUndo || r.canRedo,
    w = !i || a,
    T = r.canRedo || (l != null && l === n),
    E;
  t[22] !== S ||
  t[23] !== b ||
  t[24] !== r.canRedo ||
  t[25] !== r.canUndo ||
  t[26] !== T ||
  t[27] !== C ||
  t[28] !== w
    ? ((E = {
        canRedo: r.canRedo,
        canUndo: r.canUndo,
        hasSessionEdits: C,
        isInteractionDisabled: w,
        onRedo: S,
        onUndo: b,
        showRedoButton: T,
      }),
      (t[22] = S),
      (t[23] = b),
      (t[24] = r.canRedo),
      (t[25] = r.canUndo),
      (t[26] = T),
      (t[27] = C),
      (t[28] = w),
      (t[29] = E))
    : (E = t[29]);
  let O;
  t[30] !== v || t[31] !== g || t[32] !== m || t[33] !== f
    ? ((O = { redoButton: v, redoTooltip: g, undoButton: m, undoTooltip: f }),
      (t[30] = v),
      (t[31] = g),
      (t[32] = m),
      (t[33] = f),
      (t[34] = O))
    : (O = t[34]);
  let A;
  t[35] !== E || t[36] !== O
    ? ((A = (0, Er.jsx)(yn, { controls: E, labels: O, renderButton: Cr })),
      (t[35] = E),
      (t[36] = O),
      (t[37] = A))
    : (A = t[37]);
  let M;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Er.jsx)(`div`, { "aria-hidden": `true`, className: `mx-1.5 h-3.5 w-px shrink-0 bg-border` })),
      (t[38] = M))
    : (M = t[38]);
  let N;
  return (
    t[39] === A
      ? (N = t[40])
      : ((N = (0, Er.jsxs)(`div`, { className: `flex items-center`, children: [A, M] })),
        (t[39] = A),
        (t[40] = N)),
    N
  );
}
function Cr(e) {
  let { action: n, disabled: r, label: i, onClick: a, onMouseDown: o, tooltip: s } = e;
  return (0, Er.jsx)(ae, {
    sideOffset: 0,
    tooltipContent: s,
    children: (0, Er.jsx)(t, {
      "aria-label": i,
      color: `ghostActive`,
      disabled: r,
      onClick: a,
      onMouseDown: o,
      size: `imageToolbar`,
      uniform: !0,
      children: (0, Er.jsx)(g, {
        className: V(n === `redo` && `-scale-x-100`),
        "aria-hidden": !1,
        asset: ee,
      }),
    }),
  });
}
var wr, Tr, Er;
function Dr() {
  return (Dr = e(() => {
    ((wr = W()), r(), ce(), Cn(), M(), (Tr = q()), U(), oe(), v(), B(), o(), (Er = G()));
  }))();
}
var Or;
function kr() {
  return (kr = e(() => {
    Or = { $type: `protobuf_analytics_events.v1.ChatgptWritingBlockOptionSelected` };
  }))();
}
function Ar(e) {
  let t = (0, jr.c)(76),
    {
      activeSectionId: n,
      isWriteLikeMeSubmitting: r,
      libraryFileId: i,
      metadata: o,
      onSelect: s,
      onWriteLikeMeAction: l,
      sections: u,
      content: d,
      variant: m,
    } = e,
    h = r !== void 0 && r,
    g = p(c),
    v = D(),
    y,
    b,
    x,
    S,
    C,
    w,
    E,
    O,
    k,
    j,
    M,
    N,
    P,
    F,
    I;
  if (
    t[0] !== n ||
    t[1] !== d ||
    t[2] !== v ||
    t[3] !== h ||
    t[4] !== i ||
    t[5] !== o ||
    t[6] !== s ||
    t[7] !== l ||
    t[8] !== g ||
    t[9] !== u ||
    t[10] !== m
  ) {
    E = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = Oe(o),
        r;
      (t[26] !== o || t[27] !== m ? ((r = ir(o, m)), (t[26] = o), (t[27] = m), (t[28] = r)) : (r = t[28]),
        (b = r),
        (S = v.formatMessage({
          id: `codex.writingBlock.toneVariants.original`,
          defaultMessage: `Original`,
          description: `Short tab label above a writing block editor. Selecting it restores the original draft after a Write Like Me rewrite. Keep the label compact.`,
        })));
      let a = e.findIndex(Ue),
        c = e[a],
        p = o?.[Re] === !0,
        T;
      t[29] === v
        ? (T = t[30])
        : ((T = v.formatMessage({
            id: `codex.writingBlock.toneVariants.writeLikeMe`,
            defaultMessage: `Write Like Me`,
            description: `Short action label in the writing-style tabs above a Codex Apps writing-block editor. Selecting it rewrites the current draft using the signed-in user's saved personal writing style.`,
          })),
          (t[29] = v),
          (t[30] = T));
      let D = T;
      x = u?.flatMap((e) =>
        e.id === `option_original_1` ? [{ ...e, tone: S }] : p || !Ue({ id: e.id, label: e.tone }) ? [e] : [],
      );
      let A = x?.findIndex((e) => e.id === n) ?? -1;
      C = A > 0 ? { id: n, index: A, isOriginal: !1 } : { isOriginal: !0 };
      let L;
      t[31] === o ? (L = t[32]) : ((L = be(o)), (t[31] = o), (t[32] = L));
      let R = L,
        z,
        B;
      t[33] !== R || t[34] !== o
        ? ((z = Je(o)), (B = R && Ee(z)), (t[33] = R), (t[34] = o), (t[35] = z), (t[36] = B))
        : ((z = t[35]), (B = t[36]));
      let V = B,
        H;
      t[37] !== e ||
      t[38] !== b ||
      t[39] !== d ||
      t[40] !== V ||
      t[41] !== p ||
      t[42] !== h ||
      t[43] !== l ||
      t[44] !== D ||
      t[45] !== c ||
      t[46] !== a
        ? ((H =
            l != null && !p && (c != null || V || b)
              ? {
                  id: Ye,
                  isActive: h,
                  isLoading: h || V,
                  label: D,
                  onAction: () => {
                    h ||
                      V ||
                      (c == null
                        ? b &&
                          d != null &&
                          l(
                            { id: Ye, index: e.length === 0 ? 1 : e.length },
                            e.length === 0
                              ? { primaryOption: { id: qe, label: `Original`, content: d } }
                              : {},
                          )
                        : l({ id: c.id, index: a }));
                  },
                }
              : void 0),
          (t[37] = e),
          (t[38] = b),
          (t[39] = d),
          (t[40] = V),
          (t[41] = p),
          (t[42] = h),
          (t[43] = l),
          (t[44] = D),
          (t[45] = c),
          (t[46] = a),
          (t[47] = H))
        : (H = t[47]);
      let U = H;
      if ((x?.length ?? 0) < 2 && U == null && !R) {
        E = null;
        break bb0;
      }
      ((y = Mn),
        (O = U),
        t[48] === v
          ? (k = t[49])
          : ((k = v.formatMessage({
              id: `codex.writingBlock.toneVariants.tabs.ariaLabel`,
              defaultMessage: `Writing style variants`,
              description: `Accessible label for the tone-variant tabs in a shared Codex Apps writing block used by local Codex threads and Quick Chat. Selecting a tab switches the editor to a generated writing style variant.`,
            })),
            (t[48] = v),
            (t[49] = k)),
        t[50] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((j = (0, Mr.jsx)(_, {})), (t[50] = j))
          : (j = t[50]),
        (M = h),
        (N = R),
        (P = V ? void 0 : z),
        t[51] !== i || t[52] !== g
          ? ((F = (e) => {
              let { index: t, label: n } = e,
                r = g.get(Be);
              r.isChatgptBrowserReplacement &&
                (r.logProductEvent(Or, { optionIndex: f(t), optionLabel: n }),
                r.logEventWithStatsig?.(`chatgpt_writing_block_option_clicked`, {
                  option_index: t,
                  option_label: n,
                  ...(i == null ? {} : { library_file_id: i }),
                }));
            }),
            (t[51] = i),
            (t[52] = g),
            (t[53] = F))
          : (F = t[53]),
        (I = (e) => {
          let t = e.isOriginal ? x?.[0] : x?.[e.index]?.id === e.id ? x[e.index] : void 0;
          t != null && s(t.id);
        }),
        (w = x?.map((e) => ({ id: e.id, label: Ue({ id: e.id, label: e.tone }) ? D : e.tone })) ?? []));
    }
    ((t[0] = n),
      (t[1] = d),
      (t[2] = v),
      (t[3] = h),
      (t[4] = i),
      (t[5] = o),
      (t[6] = s),
      (t[7] = l),
      (t[8] = g),
      (t[9] = u),
      (t[10] = m),
      (t[11] = y),
      (t[12] = b),
      (t[13] = x),
      (t[14] = S),
      (t[15] = C),
      (t[16] = w),
      (t[17] = E),
      (t[18] = O),
      (t[19] = k),
      (t[20] = j),
      (t[21] = M),
      (t[22] = N),
      (t[23] = P),
      (t[24] = F),
      (t[25] = I));
  } else
    ((y = t[11]),
      (b = t[12]),
      (x = t[13]),
      (S = t[14]),
      (C = t[15]),
      (w = t[16]),
      (E = t[17]),
      (O = t[18]),
      (k = t[19]),
      (j = t[20]),
      (M = t[21]),
      (N = t[22]),
      (P = t[23]),
      (F = t[24]),
      (I = t[25]));
  if (E !== Symbol.for(`react.early_return_sentinel`)) return E;
  let L = x?.[0]?.tone ?? S,
    R;
  t[54] !== b || t[55] !== x?.[0]?.id || t[56] !== o || t[57] !== S
    ? ((R = x?.[0]?.id === `option_original_1` ? S : (ke(o) ?? (b ? S : void 0))),
      (t[54] = b),
      (t[55] = x?.[0]?.id),
      (t[56] = o),
      (t[57] = S),
      (t[58] = R))
    : (R = t[58]);
  let z;
  t[59] === v.locale
    ? (z = t[60])
    : ((z = (e) => {
        let {
          activeOptionId: t,
          disabled: n,
          onOpenChange: r,
          onOptionChange: i,
          options: o,
          trigger: s,
        } = e;
        return (0, Mr.jsx)(a, {
          align: `end`,
          contentWidth: `menuBounded`,
          dir: A(v.locale),
          disabled: n,
          onOpenChange: r,
          triggerButton: s,
          children: (0, Mr.jsx)(T.RadioGroup, {
            value: t,
            children: o.map((e) =>
              (0, Mr.jsx)(
                T.RadioItem,
                {
                  "aria-busy": e.isLoading,
                  "data-generating": e.isGenerating || void 0,
                  "data-loading": e.isLoading || void 0,
                  disabled: n || e.disabled,
                  onSelect: () => i(e.id),
                  textValue: e.textValue,
                  value: e.id,
                  children: (0, Mr.jsx)(`span`, {
                    className: V(e.labelClassName, e.isLoading && `loading-shimmer-pure-text`),
                    children: e.label,
                  }),
                },
                e.id,
              ),
            ),
          }),
        });
      }),
      (t[59] = v.locale),
      (t[60] = z));
  let B;
  return (
    t[61] !== y ||
    t[62] !== C ||
    t[63] !== w ||
    t[64] !== L ||
    t[65] !== R ||
    t[66] !== z ||
    t[67] !== O ||
    t[68] !== k ||
    t[69] !== j ||
    t[70] !== M ||
    t[71] !== N ||
    t[72] !== P ||
    t[73] !== F ||
    t[74] !== I
      ? ((B = (0, Mr.jsx)(y, {
          actionOption: O,
          ariaLabel: k,
          chevronIcon: j,
          disabled: M,
          isLoadingOptions: N,
          loadingOptionLabel: P,
          onOptionClick: F,
          onSelectionChange: I,
          options: w,
          originalLabel: L,
          placement: `header`,
          primaryOptionLabel: R,
          renderMenu: z,
          selection: C,
        })),
        (t[61] = y),
        (t[62] = C),
        (t[63] = w),
        (t[64] = L),
        (t[65] = R),
        (t[66] = z),
        (t[67] = O),
        (t[68] = k),
        (t[69] = j),
        (t[70] = M),
        (t[71] = N),
        (t[72] = P),
        (t[73] = F),
        (t[74] = I),
        (t[75] = B))
      : (B = t[75]),
    B
  );
}
var jr, Mr;
function Nr() {
  return (Nr = e(() => {
    ((jr = W()), Ge(), kr(), xe(), Vn(), M(), y(), U(), i(), w(), Ne(), ue(), (Mr = G()));
  }))();
}
var Pr, Fr;
function Ir() {
  return (Ir = e(() => {
    ((Pr = `_content_1fnpo_1`), (Fr = { content: Pr }));
  }))();
}
function Lr(e) {
  let t = (0, Vr.c)(156),
    {
      placeholder: n,
      state: r,
      actionsBeforeHistory: i,
      actionsAfterHistory: o,
      actionsAfterCopy: s,
      actionsPresentation: c,
      viewerDownloadControl: l,
      viewerVersionHistoryMenuItem: f,
      assistantRevision: p,
      copyInteractionDisabled: m,
      createEditor: _,
      editorKey: v,
      editorOverlays: y,
      editorRootRef: x,
      emailMetadata: C,
      emailRowsCapabilities: w,
      editorInteractionDisabled: E,
      fillAvailableHeight: k,
      hideFormatToolbar: A,
      hideSlashMenu: j,
      historyInteractionDisabled: M,
      headerLeadingContent: N,
      isEditable: P,
      isEditSelectionLoading: F,
      isHeaderComposerOpen: I,
      isMagicEditSubmitting: L,
      isWriteLikeMeSubmitting: R,
      libraryFileId: B,
      metadataInteractionDisabled: H,
      onBlur: U,
      onAskForChanges: ee,
      onBeforeExternalContentUpdate: te,
      onCancelEditSelection: ne,
      onContentChange: re,
      onCopy: oe,
      onCopySuccess: ce,
      onCopyContentPrepared: W,
      onEditSelection: le,
      onEditSelectionOpenChange: ue,
      onEditorEscape: G,
      onEditorKeyDownCapture: de,
      onEditorPointerDownCapture: fe,
      onRecipientChange: K,
      onSlashMenuExecute: pe,
      onSubjectChange: me,
      onToneSectionSelect: he,
      onWriteLikeMeAction: ge,
      renderFrame: q,
      renderViewerMenu: _e,
      testId: xe,
      title: Se,
      variant: Ce,
      writingBlockMetadata: we,
    } = e,
    Ee = c === void 0 ? `inline` : c,
    De = m !== void 0 && m,
    Oe = _ === void 0 ? Ct : _,
    ke = E !== void 0 && E,
    Ae = k !== void 0 && k,
    je = A !== void 0 && A,
    Me = j !== void 0 && j,
    Ne = M !== void 0 && M,
    Pe = F !== void 0 && F,
    Fe = I !== void 0 && I,
    Ie = L !== void 0 && L,
    Le = H !== void 0 && H,
    Re = D(),
    ze = O(h() ? Ve : ve) && !u(),
    Be;
  t[0] !== Re || t[1] !== n
    ? ((Be =
        n ??
        Re.formatMessage({
          id: `codex.writingBlock.editor.placeholder`,
          defaultMessage: `Start writing`,
          description: `Placeholder in an editable writing block shared by local Codex threads and Quick Chat. It prompts the user to begin entering the writing block's content.`,
        })),
      (t[0] = Re),
      (t[1] = n),
      (t[2] = Be))
    : (Be = t[2]);
  let He = Be,
    Ue = r.displayedContent,
    We = `${v ?? ``}\n${r.activeToneSectionId ?? ``}`,
    { editorView: J, proseMirrorStore: Ge } = r,
    Ke;
  t[3] === Ge
    ? (Ke = t[4])
    : ((Ke = () => {
        let e = Ge.getSnapshot().editorView;
        return e == null || e.isDestroyed ? null : e.state.selection;
      }),
      (t[3] = Ge),
      (t[4] = Ke));
  let qe = Ke,
    Je = (0, Hr.useSyncExternalStore)(Ge.subscribe, qe, zr),
    Ye,
    Xe;
  (t[5] !== ke || t[6] !== J || t[7] !== P || t[8] !== ze
    ? ((Ye = () => {
        if (!(J == null || J.isDestroyed))
          return (J.dom.classList.toggle(Ur, !u() && (ze || !P || ke)), () => J.dom.classList.remove(Ur));
      }),
      (Xe = [ke, J, P, ze]),
      (t[5] = ke),
      (t[6] = J),
      (t[7] = P),
      (t[8] = ze),
      (t[9] = Ye),
      (t[10] = Xe))
    : ((Ye = t[9]), (Xe = t[10])),
    (0, Hr.useEffect)(Ye, Xe));
  let Qe;
  t[11] !== J || t[12] !== Ue || t[13] !== oe || t[14] !== W || t[15] !== ce
    ? ((Qe = (e) => {
        e.stopPropagation();
        let t = J == null ? null : ye(J.dom)?.htmlText,
          n = Br(Ue);
        (oe?.(n),
          W?.(),
          ie(t == null ? n : { "text/plain": n, "text/html": t }, e).then((e) => {
            e && ce?.();
          }));
      }),
      (t[11] = J),
      (t[12] = Ue),
      (t[13] = oe),
      (t[14] = W),
      (t[15] = ce),
      (t[16] = Qe))
    : (Qe = t[16]);
  let $e = Qe,
    et;
  t[17] === Symbol.for(`react.memo_cache_sentinel`) ? ((et = (0, $.jsx)(z, {})), (t[17] = et)) : (et = t[17]);
  let tt;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((tt = (0, $.jsx)(d, {
        id: `copyButton.copy`,
        defaultMessage: `Copy`,
        description: `Text displayed when the content can be copied`,
      })),
      (t[18] = tt))
    : (tt = t[18]);
  let nt;
  t[19] !== De || t[20] !== $e
    ? ((nt = (0, $.jsx)(T.Item, { disabled: De, leftIcon: et, onClick: $e, children: tt })),
      (t[19] = De),
      (t[20] = $e),
      (t[21] = nt))
    : (nt = t[21]);
  let Y = nt,
    rt;
  t[22] !== s || t[23] !== Y
    ? ((rt = (0, $.jsxs)($.Fragment, { children: [Y, s] })), (t[22] = s), (t[23] = Y), (t[24] = rt))
    : (rt = t[24]);
  let it = rt,
    at;
  t[25] === Re
    ? (at = t[26])
    : ((at = Re.formatMessage({
        id: `codex.writingBlock.actions.moreActions`,
        defaultMessage: `More actions`,
        description: `Tooltip and accessible label for the overflow menu in an expanded Codex Apps writing block editor. The menu contains Copy and Download actions.`,
      })),
      (t[25] = Re),
      (t[26] = at));
  let ot = at,
    st = Ee === `viewer` && `gap-2`,
    ct;
  t[27] === st ? (ct = t[28]) : ((ct = V(`flex items-center`, st)), (t[27] = st), (t[28] = ct));
  let lt;
  t[29] !== Ee || t[30] !== De || t[31] !== $e || t[32] !== B
    ? ((lt =
        Ee === `viewer` && B == null && (0, $.jsx)(Pt, { isDisabled: De, onCopy: $e, renderButton: Rr })),
      (t[29] = Ee),
      (t[30] = De),
      (t[31] = $e),
      (t[32] = B),
      (t[33] = lt))
    : (lt = t[33]);
  let ft = Ee === `viewer` ? `viewer` : `inline`,
    pt;
  t[34] !== J || t[35] !== Ne || t[36] !== P || t[37] !== r.historySummary || t[38] !== ft
    ? ((pt = (0, $.jsx)(Sr, {
        presentation: ft,
        editorView: J,
        historySummary: r.historySummary,
        isEditable: P,
        isInteractionDisabled: Ne,
      })),
      (t[34] = J),
      (t[35] = Ne),
      (t[36] = P),
      (t[37] = r.historySummary),
      (t[38] = ft),
      (t[39] = pt))
    : (pt = t[39]);
  let ht;
  t[40] !== s || t[41] !== Ee || t[42] !== De || t[43] !== it || t[44] !== $e || t[45] !== ot
    ? ((ht =
        Ee !== `viewer` &&
        (0, $.jsx)(`div`, {
          className: `flex items-center gap-1`,
          children:
            Ee === `menu`
              ? (0, $.jsx)(a, {
                  align: `end`,
                  contentWidth: `menuBounded`,
                  triggerButton: (0, $.jsx)(ae, {
                    cloneCustomTrigger: !0,
                    sideOffset: 0,
                    tooltipContent: ot,
                    children: (0, $.jsx)(b, { label: ot }),
                  }),
                  children: it,
                })
              : (0, $.jsxs)($.Fragment, { children: [(0, $.jsx)(Pt, { isDisabled: De, onCopy: $e }), s] }),
        })),
      (t[40] = s),
      (t[41] = Ee),
      (t[42] = De),
      (t[43] = it),
      (t[44] = $e),
      (t[45] = ot),
      (t[46] = ht))
    : (ht = t[46]);
  let _t;
  t[47] !== o || t[48] !== i || t[49] !== ct || t[50] !== lt || t[51] !== pt || t[52] !== ht
    ? ((_t = (0, $.jsxs)(`div`, { className: ct, children: [lt, i, pt, o, ht] })),
      (t[47] = o),
      (t[48] = i),
      (t[49] = ct),
      (t[50] = lt),
      (t[51] = pt),
      (t[52] = ht),
      (t[53] = _t))
    : (_t = t[53]);
  let vt = N == null ? void 0 : `!ps-0 !pe-2 !py-2`,
    yt;
  t[54] !== R ||
  t[55] !== B ||
  t[56] !== he ||
  t[57] !== ge ||
  t[58] !== r.activeToneSectionId ||
  t[59] !== r.displayedContent ||
  t[60] !== r.selectToneSection ||
  t[61] !== r.toneSections ||
  t[62] !== Ce ||
  t[63] !== we
    ? ((yt =
        (r.toneSections != null && r.toneSections.length > 0) || be(we) || (ge != null && ir(we, Ce))
          ? (0, $.jsx)(Ar, {
              activeSectionId: r.activeToneSectionId ?? r.toneSections?.[0]?.id ?? ``,
              isWriteLikeMeSubmitting: R,
              libraryFileId: B,
              metadata: we,
              onSelect: he ?? r.selectToneSection,
              onWriteLikeMeAction: ge,
              sections: r.toneSections,
              content: r.displayedContent,
              variant: Ce,
            })
          : null),
      (t[54] = R),
      (t[55] = B),
      (t[56] = he),
      (t[57] = ge),
      (t[58] = r.activeToneSectionId),
      (t[59] = r.displayedContent),
      (t[60] = r.selectToneSection),
      (t[61] = r.toneSections),
      (t[62] = Ce),
      (t[63] = we),
      (t[64] = yt))
    : (yt = t[64]);
  let bt;
  t[65] !== s ||
  t[66] !== Ee ||
  t[67] !== Y ||
  t[68] !== N ||
  t[69] !== Re ||
  t[70] !== B ||
  t[71] !== _e ||
  t[72] !== Se ||
  t[73] !== f
    ? ((bt =
        Ee === `viewer`
          ? (_e?.(Y) ??
            (0, $.jsx)(se, {
              icon: (0, $.jsx)(g, { asset: S }),
              libraryBreadcrumb: B == null ? null : (0, $.jsx)(Te, { libraryFileId: B }),
              tooltipBreadcrumb: B == null ? null : (0, $.jsx)(Te, { libraryFileId: B, variant: `text` }),
              title:
                typeof Se == `string`
                  ? Se
                  : Re.formatMessage({
                      id: `codex.writingBlock.header.title.fallback`,
                      defaultMessage: `Writing`,
                      description: `Short fallback title in the header of a writing block shared by local Codex threads and Quick Chat when the block does not provide a custom title.`,
                    }),
              children: (0, $.jsxs)(Ze, { libraryFileId: B, versionHistoryAction: f, children: [s, Y] }),
            }))
          : N),
      (t[65] = s),
      (t[66] = Ee),
      (t[67] = Y),
      (t[68] = N),
      (t[69] = Re),
      (t[70] = B),
      (t[71] = _e),
      (t[72] = Se),
      (t[73] = f),
      (t[74] = bt))
    : (bt = t[74]);
  let xt = Ee === `viewer` ? s : void 0,
    St = Ee === `viewer` ? f : void 0,
    wt = Ee === `viewer` ? Y : void 0,
    Tt;
  t[75] !== Se || t[76] !== Ce
    ? ((Tt =
        Se ??
        (Ce === `email`
          ? (0, $.jsx)(d, {
              id: `codex.writingBlock.email.header.title.fallback`,
              defaultMessage: `Email`,
              description: `Short fallback title in the header of an email writing block shared by local Codex threads and Quick Chat when the block does not provide a custom title.`,
            })
          : (0, $.jsx)(d, {
              id: `codex.writingBlock.header.title.fallback`,
              defaultMessage: `Writing`,
              description: `Short fallback title in the header of a writing block shared by local Codex threads and Quick Chat when the block does not provide a custom title.`,
            }))),
      (t[75] = Se),
      (t[76] = Ce),
      (t[77] = Tt))
    : (Tt = t[77]);
  let Dt;
  t[78] !== We ||
  t[79] !== C ||
  t[80] !== w ||
  t[81] !== P ||
  t[82] !== Le ||
  t[83] !== U ||
  t[84] !== K ||
  t[85] !== me ||
  t[86] !== Ce
    ? ((Dt =
        Ce === `email`
          ? (0, $.jsx)(ar, {
              ...w,
              isRecipientEditable: P && !Le && K != null,
              isSubjectEditable: P && !Le && me != null,
              metadata: C,
              onBlur: U,
              onRecipientChange: K,
              onSubjectChange: me,
              subjectKey: We,
            })
          : null),
      (t[78] = We),
      (t[79] = C),
      (t[80] = w),
      (t[81] = P),
      (t[82] = Le),
      (t[83] = U),
      (t[84] = K),
      (t[85] = me),
      (t[86] = Ce),
      (t[87] = Dt))
    : (Dt = t[87]);
  let kt;
  t[88] !== p ||
  t[89] !== Oe ||
  t[90] !== We ||
  t[91] !== ke ||
  t[92] !== v ||
  t[93] !== y ||
  t[94] !== x ||
  t[95] !== J ||
  t[96] !== Ae ||
  t[97] !== P ||
  t[98] !== Fe ||
  t[99] !== Ie ||
  t[100] !== te ||
  t[101] !== U ||
  t[102] !== re ||
  t[103] !== G ||
  t[104] !== de ||
  t[105] !== fe ||
  t[106] !== He ||
  t[107] !== r
    ? ((kt =
        v == null
          ? (0, $.jsx)(`div`, {
              className: V(
                mt.root,
                `text-size-chat whitespace-pre-wrap text-default [unicode-bidi:plaintext]`,
              ),
              "data-markdown-copy-content": !0,
              dir: `auto`,
              children: r.displayedContent,
            })
          : (0, $.jsxs)(`div`, {
              ref: x,
              className: V(`relative`, Ae && `flex grow flex-col`),
              onKeyDownCapture: (e) => {
                (de?.(e),
                  e.key === `Escape` &&
                    !e.defaultPrevented &&
                    G != null &&
                    J != null &&
                    Ot(J) &&
                    (e.preventDefault(), e.stopPropagation(), G()));
              },
              onPointerDownCapture: fe,
              children: [
                (0, $.jsx)(`div`, {
                  className: V(Fr.content, Ae && `flex grow flex-col`),
                  "data-markdown-copy-content": !0,
                  dir: `auto`,
                  children: (0, $.jsx)(Kn, {
                    ariaLabel: He,
                    className: V(
                      `magic-edit-minimal`,
                      Ae && mt.page,
                      Fe && `header-magic-edit-composer-open`,
                      Ie && `magic-edit-submitting`,
                    ),
                    createEditor: Oe,
                    editable: P && !ke,
                    editorClassName: `leading-relaxed`,
                    editorKey: We,
                    onBlur: U,
                    onBeforeExternalContentUpdate: te,
                    onChange: (e) => {
                      re?.(e, r.activeToneSectionId);
                    },
                    placeholder: He,
                    state: r,
                  }),
                }),
                p == null ? null : (0, $.jsx)(er, { editorView: J, revision: p }),
                y,
              ],
            })),
      (t[88] = p),
      (t[89] = Oe),
      (t[90] = We),
      (t[91] = ke),
      (t[92] = v),
      (t[93] = y),
      (t[94] = x),
      (t[95] = J),
      (t[96] = Ae),
      (t[97] = P),
      (t[98] = Fe),
      (t[99] = Ie),
      (t[100] = te),
      (t[101] = U),
      (t[102] = re),
      (t[103] = G),
      (t[104] = de),
      (t[105] = fe),
      (t[106] = He),
      (t[107] = r),
      (t[108] = kt))
    : (kt = t[108]);
  let At;
  t[109] !== ke || t[110] !== J || t[111] !== P || t[112] !== r.emojiSuggestionState
    ? ((At =
        P && !ke && J != null && r.emojiSuggestionState != null
          ? (0, $.jsx)(gr, { editorView: J, suggestion: r.emojiSuggestionState })
          : null),
      (t[109] = ke),
      (t[110] = J),
      (t[111] = P),
      (t[112] = r.emojiSuggestionState),
      (t[113] = At))
    : (At = t[113]);
  let jt;
  t[114] !== ke ||
  t[115] !== J ||
  t[116] !== Me ||
  t[117] !== P ||
  t[118] !== pe ||
  t[119] !== r.slashMenuState
    ? ((jt =
        P && !ke && J != null && !Me
          ? (0, $.jsx)(dt, {
              editorView: J,
              onExecute: (e, t) => {
                let n = { commandId: e, query: t, view: J };
                if (pe == null) {
                  Et(n);
                  return;
                }
                pe(n);
              },
              state: r.slashMenuState,
            })
          : null),
      (t[114] = ke),
      (t[115] = J),
      (t[116] = Me),
      (t[117] = P),
      (t[118] = pe),
      (t[119] = r.slashMenuState),
      (t[120] = jt))
    : (jt = t[120]);
  let Nt;
  t[121] !== J ||
  t[122] !== je ||
  t[123] !== Pe ||
  t[124] !== P ||
  t[125] !== ze ||
  t[126] !== ee ||
  t[127] !== ne ||
  t[128] !== le ||
  t[129] !== ue ||
  t[130] !== Je ||
  t[131] !== r.emojiSuggestionState ||
  t[132] !== r.proseMirrorStore ||
  t[133] !== r.selectionSummary
    ? ((Nt =
        P &&
        !je &&
        J != null &&
        r.emojiSuggestionState == null &&
        (!r.selectionSummary.isCollapsed || gt(Je) != null)
          ? (0, $.jsx)(ut, {
              editorView: J,
              isEditSelectionLoading: Pe,
              isOpenLinkModifierPressed: ze,
              onAskForChanges: ee,
              onCancelEditSelection: ne,
              onEditSelection: le,
              onEditSelectionOpenChange: ue,
              proseMirrorStore: r.proseMirrorStore,
            })
          : null),
      (t[121] = J),
      (t[122] = je),
      (t[123] = Pe),
      (t[124] = P),
      (t[125] = ze),
      (t[126] = ee),
      (t[127] = ne),
      (t[128] = le),
      (t[129] = ue),
      (t[130] = Je),
      (t[131] = r.emojiSuggestionState),
      (t[132] = r.proseMirrorStore),
      (t[133] = r.selectionSummary),
      (t[134] = Nt))
    : (Nt = t[134]);
  let Ft;
  t[135] !== Ue ||
  t[136] !== _t ||
  t[137] !== vt ||
  t[138] !== yt ||
  t[139] !== bt ||
  t[140] !== xt ||
  t[141] !== St ||
  t[142] !== wt ||
  t[143] !== Tt ||
  t[144] !== Dt ||
  t[145] !== kt ||
  t[146] !== At ||
  t[147] !== jt ||
  t[148] !== Nt ||
  t[149] !== xe ||
  t[150] !== Ce ||
  t[151] !== l
    ? ((Ft = (0, $.jsxs)(Mt, {
        viewerDownloadControl: l,
        actions: _t,
        "data-markdown-copy": `rich-block`,
        "data-markdown-copy-text": Ue,
        "data-testid": xe,
        "data-writing-block-variant": Ce,
        headerClassName: vt,
        inlineContent: yt,
        leadingContent: bt,
        viewerMenuItems: xt,
        viewerVersionHistoryMenuItem: St,
        viewerCopyMenuItem: wt,
        title: Tt,
        children: [Dt, kt, At, jt, Nt],
      })),
      (t[135] = Ue),
      (t[136] = _t),
      (t[137] = vt),
      (t[138] = yt),
      (t[139] = bt),
      (t[140] = xt),
      (t[141] = St),
      (t[142] = wt),
      (t[143] = Tt),
      (t[144] = Dt),
      (t[145] = kt),
      (t[146] = At),
      (t[147] = jt),
      (t[148] = Nt),
      (t[149] = xe),
      (t[150] = Ce),
      (t[151] = l),
      (t[152] = Ft))
    : (Ft = t[152]);
  let It = Ft,
    Lt;
  return (
    t[153] !== It || t[154] !== q
      ? ((Lt = q == null ? It : q(It.props)), (t[153] = It), (t[154] = q), (t[155] = Lt))
      : (Lt = t[155]),
    Lt
  );
}
function Rr(e) {
  return (0, $.jsx)(ne, { ...e, uniform: !0 });
}
function zr() {
  return null;
}
function Br(e) {
  let t = ``,
    n = 0;
  return (
    Ke()
      .parse(e)
      .descendants((r) => {
        if (r.type.name !== `hard_break`) return;
        let { start: i, end: a } = r.attrs;
        if (typeof i != `number` || typeof a != `number`) return;
        let o = e.slice(i, a);
        (o ===
          `\\
` ||
          o ===
            `\\\r
`) &&
          ((t += e.slice(n, i)), (n = i + 1));
      }),
    t + e.slice(n)
  );
}
var Vr, Hr, $, Ur;
function Wr() {
  return (Wr = e(() => {
    ((Vr = W()),
      de(),
      xe(),
      We(),
      At(),
      ht(),
      M(),
      y(),
      (Hr = q()),
      U(),
      Xe(),
      i(),
      v(),
      w(),
      n(),
      B(),
      Pe(),
      De(),
      Ae(),
      H(),
      o(),
      Xn(),
      rr(),
      Nt(),
      bt(),
      hr(),
      xr(),
      st(),
      lt(),
      Dr(),
      jt(),
      Nr(),
      Ir(),
      ($ = G()),
      (Ur = `writing-block-open-link-mode`));
  }))();
}
function Gr(e) {
  let t = (0, Kr.c)(23),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (s = t[6]), (c = t[7]), (l = t[8]))
    : (({
        activeToneSectionId: n,
        content: r,
        externalContentUpdate: i,
        onToneSectionSelect: a,
        proseMirrorStore: o,
        render: s,
        toneSections: c,
        ...l
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l));
  let u;
  t[9] !== n || t[10] !== r || t[11] !== i || t[12] !== a || t[13] !== o || t[14] !== c
    ? ((u = {
        activeToneSectionId: n,
        content: r,
        externalContentUpdate: i,
        onToneSectionSelect: a,
        proseMirrorStore: o,
        toneSections: c,
      }),
      (t[9] = n),
      (t[10] = r),
      (t[11] = i),
      (t[12] = a),
      (t[13] = o),
      (t[14] = c),
      (t[15] = u))
    : (u = t[15]);
  let d = Hn(u),
    f;
  t[16] !== d || t[17] !== l
    ? ((f = (e) => (0, qr.jsx)(Lr, { ...l, ...e, state: d })), (t[16] = d), (t[17] = l), (t[18] = f))
    : (f = t[18]);
  let p = f,
    m;
  return (
    t[19] !== s || t[20] !== p || t[21] !== d
      ? ((m = s?.({ renderView: p, state: d }) ?? p()), (t[19] = s), (t[20] = p), (t[21] = d), (t[22] = m))
      : (m = t[22]),
    m
  );
}
var Kr, qr;
function Jr() {
  return (Jr = e(() => {
    ((Kr = W()), Gn(), Wr(), (qr = G()));
  }))();
}
export { Qn as a, $n as i, Jr as n, Zn as r, Gr as t };
//# sourceMappingURL=editable-writing-block-67c0bb761270.js.map
