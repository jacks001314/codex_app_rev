const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./file-options-dialog-731360d4b99e.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./open-preview-ef57dc755876.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $It as r,
  $R as i,
  Ah as a,
  B4 as o,
  Cot as s,
  DV as c,
  EPt as l,
  FR as u,
  Fp as d,
  Fz as f,
  IDt as p,
  Ip as m,
  Ixt as h,
  Kat as g,
  LJ as _,
  LR as v,
  Lp as y,
  MR as b,
  Mz as x,
  Np as S,
  Nz as C,
  Pp as w,
  Pxt as T,
  Pz as E,
  QA as D,
  QI as O,
  QR as k,
  RJ as A,
  Rp as j,
  TJ as M,
  TLt as N,
  VDt as P,
  Vxt as F,
  XO as I,
  YMt as L,
  ZA as R,
  ZI as z,
  ZO as B,
  _It as V,
  _Mt as H,
  _O as U,
  bE as W,
  bH as ee,
  fLt as te,
  fO as ne,
  fPt as re,
  gMt as G,
  gNt as K,
  hot as ie,
  iq as ae,
  jDt as q,
  kh as oe,
  lot as se,
  mO as ce,
  nSt as le,
  oO as ue,
  oot as de,
  pIt as fe,
  pLt as J,
  pPt as pe,
  qat as me,
  rst as he,
  sMt as ge,
  sO as _e,
  t3 as ve,
  tU as ye,
  vO as be,
  vzt as Y,
  wot as xe,
  xB as Se,
  xMt as X,
  yE as Ce,
  yzt as we,
  z4 as Te,
  zxt as Ee,
} from "./app-shared-bbfeca5e5737.js";
import {
  Brr as De,
  Ct as Oe,
  Cwr as ke,
  DA as Ae,
  DPn as je,
  EA as Me,
  E_ as Ne,
  G_r as Pe,
  Grr as Fe,
  Hrr as Ie,
  Jrr as Le,
  Jxt as Re,
  Kcr as ze,
  Kxt as Be,
  Lrr as Ve,
  Mf as He,
  N0n as Ue,
  Nf as We,
  OA as Ge,
  Qrr as Ke,
  REr as qe,
  Rrr as Je,
  SWn as Ye,
  SWt as Xe,
  TPn as Ze,
  T_ as Qe,
  Tt as $e,
  Urr as et,
  Uxt as tt,
  W_r as nt,
  Wrr as rt,
  XPr as it,
  Xrr as at,
  YPr as ot,
  Zrr as st,
  _t as ct,
  _zt as lt,
  aO as ut,
  bWn as dt,
  bWt as ft,
  bt as pt,
  cPn as mt,
  cf as ht,
  ePn as gt,
  eir as _t,
  gwr as vt,
  gzt as yt,
  hf as bt,
  iO as xt,
  iSr as St,
  is as Ct,
  kA as wt,
  lPn as Tt,
  mf as Et,
  nO as Dt,
  nf as Ot,
  of as kt,
  pf as At,
  qcr as jt,
  qrr as Mt,
  rO as Nt,
  rf as Pt,
  sf as Ft,
  ss as It,
  svr as Lt,
  tPn as Rt,
  tir as zt,
  uf as Bt,
  vt as Vt,
  wt as Ht,
  yt as Ut,
  zrr as Wt,
} from "./app-initial-5851df3f6cb1.js";
import { r as Gt, t as Kt } from "./boundary-303cd7fff1c0.js";
import { n as qt, t as Jt } from "./request-action-chip-f9f928bcbf56.js";
import { n as Yt, t as Xt } from "./option-carousel-e5b5a4ffecb9.js";
function Zt(e) {
  let t = Qt.safeParse(e.confirmation);
  if (!t.success || !e.message.trim()) return null;
  let { field: n } = t.data;
  return Object.keys(e.schema.properties).length !== 1 ||
    e.schema.properties[n]?.type !== `boolean` ||
    e.schema.required?.length !== 1 ||
    e.schema.required[0] !== n
    ? null
    : t.data;
}
var Qt;
function $t() {
  return ($t = e(() => {
    (l(),
      (Qt = J({
        version: r(1),
        field: N().min(1),
        presentation: J({
          title: N().trim().min(1).max(120),
          triggerLabel: N().trim().min(1).max(80),
          confirmLabel: N().trim().min(1).max(80),
          icon: r(`shield`)
            .optional()
            .catch(void 0),
          destructive: V()
            .optional()
            .catch(void 0),
          fields: fe(
            J({
              label: N().trim().min(1).max(120),
              value: N()
                .min(1)
                .max(1e4)
                .refine((e) => e.trim().length > 0),
            }),
          )
            .min(1)
            .max(20)
            .optional()
            .catch(void 0),
          sections: fe(
            J({
              title: N().trim().min(1).max(120).optional(),
              bodyField: te().int().min(0).max(19),
              captionField: te().int().min(0).max(19),
            }),
          )
            .min(1)
            .max(10)
            .optional()
            .catch(void 0),
        })
          .transform(({ sections: e, ...t }) => {
            let { fields: n } = t,
              r = e?.flatMap(({ bodyField: e, captionField: t }) => [e, t]),
              i =
                n != null &&
                r?.length === n.length &&
                new Set(r).size === n.length &&
                r.every((e) => e < n.length);
            return {
              ...t,
              sections: i
                ? e?.map(({ title: e, bodyField: t, captionField: r }) => ({
                    title: e,
                    body: n[t],
                    caption: n[r],
                  }))
                : void 0,
            };
          })
          .optional()
          .catch(void 0),
      })));
  }))();
}
function en(e) {
  let t = (0, tn.c)(16),
    { disabled: r, isSubmitting: i, hotkeysEnabled: a, isStandardForm: o, onDecline: s } = e,
    c = o ? `mt-1 px-2 py-2` : `px-4 py-3`,
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = G(`flex shrink-0 items-center justify-end gap-2 border-t border-border/50`, c)),
      (t[0] = c),
      (t[1] = l));
  let u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, nn.jsx)(p, {
        id: `composer.mcpConfirmation.button.decline`,
        defaultMessage: `Decline`,
        description: `Short secondary button in an app's confirmation request. Rejects the described action without submitting form values. The other button is Accept.`,
      })),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] !== i || t[4] !== s
    ? ((d = (0, nn.jsx)(n, { color: `ghost`, disabled: i, type: `button`, onClick: s, children: u })),
      (t[3] = i),
      (t[4] = s),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, nn.jsx)(p, {
        id: `composer.mcpConfirmation.button.accept`,
        defaultMessage: `Accept`,
        description: `Short primary button in an app's confirmation request. Explicitly confirms the action described in the request. The other button is Decline.`,
      })),
      (t[6] = f))
    : (f = t[6]);
  let m;
  t[7] === a
    ? (m = t[8])
    : ((m = a && (0, nn.jsx)(bt, { variant: `primary`, children: I(`CmdOrCtrl+Enter`) })),
      (t[7] = a),
      (t[8] = m));
  let h;
  t[9] !== r || t[10] !== m
    ? ((h = (0, nn.jsxs)(n, {
        color: `primary`,
        size: `composer`,
        type: `submit`,
        disabled: r,
        children: [f, m],
      })),
      (t[9] = r),
      (t[10] = m),
      (t[11] = h))
    : (h = t[11]);
  let g;
  return (
    t[12] !== l || t[13] !== d || t[14] !== h
      ? ((g = (0, nn.jsxs)(`div`, { className: l, children: [d, h] })),
        (t[12] = l),
        (t[13] = d),
        (t[14] = h),
        (t[15] = g))
      : (g = t[15]),
    g
  );
}
var tn, nn;
function rn() {
  return (rn = e(() => {
    ((tn = Y()), H(), q(), Et(), ve(), B(), (nn = X()));
  }))();
}
var an, on;
function sn() {
  return (sn = e(() => {
    (we(),
      (an = X()),
      (on = (e) =>
        (0, an.jsxs)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 32,
          height: 32,
          fill: `none`,
          viewBox: `0 0 24 24`,
          ...e,
          children: [
            (0, an.jsx)(`path`, {
              fill: `#4D6FE6`,
              d: `M12 2.75c.248 0 .492.059.712.172l6 3.077A1.6 1.6 0 0 1 19.6 7.42v4.067c0 4.328-2.861 8.043-6.9 9.287a2.362 2.362 0 0 1-1.4 0c-4.039-1.244-6.9-4.959-6.9-9.287V7.42c0-.6.338-1.148.888-1.42l6-3.077A1.55 1.55 0 0 1 12 2.75Z`,
            }),
            (0, an.jsx)(`path`, {
              fill: `#86A0F2`,
              d: `M12 5.154 7.4 7.512v3.975c0 3.084 1.862 5.812 4.6 7.05V5.154Z`,
            }),
          ],
        })));
  }))();
}
var cn, ln;
function un() {
  return (un = e(() => {
    (we(),
      (cn = X()),
      (ln = (e) =>
        (0, cn.jsxs)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 24,
          height: 24,
          fill: `none`,
          viewBox: `0 0 24 24`,
          ...e,
          children: [
            (0, cn.jsx)(`path`, {
              fill: `#4D6FE6`,
              d: `M12 2.75c.248 0 .492.059.712.172l6 3.077A1.6 1.6 0 0 1 19.6 7.42v4.067c0 4.328-2.861 8.043-6.9 9.287a2.362 2.362 0 0 1-1.4 0c-4.039-1.244-6.9-4.959-6.9-9.287V7.42c0-.6.338-1.148.888-1.42l6-3.077A1.55 1.55 0 0 1 12 2.75Z`,
            }),
            (0, cn.jsx)(`path`, {
              fill: `#86A0F2`,
              d: `M12 5.154 7.4 7.512v3.975c0 3.084 1.862 5.812 4.6 7.05V5.154Z`,
            }),
          ],
        })));
  }))();
}
function dn(e) {
  let t = (0, mn.c)(65),
    {
      presentation: r,
      message: i,
      disabled: a,
      isSubmitting: o,
      succeeded: s,
      standalone: l,
      onOpen: u,
      onOpenInThread: d,
      onConfirm: f,
    } = e,
    m = s !== void 0 && s,
    h = l !== void 0 && l,
    g = P(),
    [_, v] = (0, hn.useState)(h),
    y;
  t[0] === h
    ? (y = t[1])
    : ((y = G(`flex flex-wrap items-center gap-2`, { "justify-center": h })), (t[0] = h), (t[1] = y));
  let b = r.icon === `shield` ? `actionChipWithIcon` : `actionChip`,
    x = a && !m,
    S;
  t[2] !== u || t[3] !== d || t[4] !== m
    ? ((S = () => {
        d != null && !m ? d() : (u?.(), v(!0));
      }),
      (t[2] = u),
      (t[3] = d),
      (t[4] = m),
      (t[5] = S))
    : (S = t[5]);
  let C;
  t[6] === r.icon
    ? (C = t[7])
    : ((C =
        r.icon === `shield` &&
        (0, Z.jsx)(`span`, {
          className: `flex shrink-0 items-center justify-center rounded-full bg-white p-0.5`,
          children: (0, Z.jsx)(ln, { "aria-hidden": `true` }),
        })),
      (t[6] = r.icon),
      (t[7] = C));
  let w;
  t[8] === r.triggerLabel
    ? (w = t[9])
    : ((w = (0, Z.jsx)(`span`, {
        className: `min-w-0 break-words whitespace-normal`,
        children: r.triggerLabel,
      })),
      (t[8] = r.triggerLabel),
      (t[9] = w));
  let T;
  t[10] !== g || t[11] !== r.destructive || t[12] !== m
    ? ((T =
        m &&
        (0, Z.jsx)(c, {
          "aria-label": r.destructive
            ? g.formatMessage({
                id: `mcpConfirmation.deleted`,
                defaultMessage: `Deleted`,
                description: `Accessible label for the checkmark on a custom-rule chip after the rule was successfully deleted`,
              })
            : g.formatMessage({
                id: `mcpConfirmation.saved`,
                defaultMessage: `Saved`,
                description: `Accessible label for the checkmark on a custom-rule chip after the rule was successfully saved`,
              }),
        })),
      (t[10] = g),
      (t[11] = r.destructive),
      (t[12] = m),
      (t[13] = T))
    : (T = t[13]);
  let E;
  t[14] !== o || t[15] !== b || t[16] !== x || t[17] !== S || t[18] !== C || t[19] !== w || t[20] !== T
    ? ((E = (0, Z.jsxs)(Jt, {
        color: `conversationAccentSubtle`,
        size: b,
        radius: `messageBubble`,
        type: `button`,
        className: `max-w-full`,
        disabled: x,
        loading: o,
        "aria-haspopup": `dialog`,
        onClick: S,
        children: [C, w, T],
      })),
      (t[14] = o),
      (t[15] = b),
      (t[16] = x),
      (t[17] = S),
      (t[18] = C),
      (t[19] = w),
      (t[20] = T),
      (t[21] = E))
    : (E = t[21]);
  let D;
  t[22] !== E || t[23] !== y
    ? ((D = (0, Z.jsx)(`div`, { "data-mcp-confirmation-chip": !0, className: y, children: E })),
      (t[22] = E),
      (t[23] = y),
      (t[24] = D))
    : (D = t[24]);
  let O;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = { "aria-describedby": void 0 }), (t[25] = O))
    : (O = t[25]);
  let k;
  t[26] !== a || t[27] !== f || t[28] !== m
    ? ((k = (e) => {
        (e.preventDefault(), !a && !m && (f(), v(!1)));
      }),
      (t[26] = a),
      (t[27] = f),
      (t[28] = m),
      (t[29] = k))
    : (k = t[29]);
  let A;
  t[30] === r.icon
    ? (A = t[31])
    : ((A =
        r.icon === `shield` &&
        (0, Z.jsx)(`span`, {
          className: `flex shrink-0 items-center justify-center rounded-xl border border-default bg-white p-3`,
          children: (0, Z.jsx)(on, { "aria-hidden": `true` }),
        })),
      (t[30] = r.icon),
      (t[31] = A));
  let j;
  t[32] === r.title
    ? (j = t[33])
    : ((j = (0, Z.jsx)(U, { variant: `confirmation`, className: `text-center`, children: r.title })),
      (t[32] = r.title),
      (t[33] = j));
  let M;
  t[34] !== A || t[35] !== j
    ? ((M = (0, Z.jsxs)(`div`, { className: `flex flex-col items-center gap-3`, children: [A, j] })),
      (t[34] = A),
      (t[35] = j),
      (t[36] = M))
    : (M = t[36]);
  let N;
  t[37] === r.sections
    ? (N = t[38])
    : ((N =
        r.sections &&
        (0, Z.jsx)(`div`, { className: `flex flex-col gap-5 select-text`, children: r.sections.map(pn) })),
      (t[37] = r.sections),
      (t[38] = N));
  let F;
  t[39] !== i || t[40] !== r.fields || t[41] !== r.sections
    ? ((F =
        !r.sections &&
        (r.fields
          ? (0, Z.jsx)(`dl`, {
              className: `flex flex-col gap-4 rounded-2xl border border-default p-5 text-document leading-5 font-normal break-words text-default select-text`,
              children: r.fields.map(fn),
            })
          : (0, Z.jsx)(`div`, {
              className: `text-sm break-words whitespace-pre-wrap text-default select-text`,
              children: i,
            }))),
      (t[39] = i),
      (t[40] = r.fields),
      (t[41] = r.sections),
      (t[42] = F))
    : (F = t[42]);
  let I = r.destructive ? `dangerSolid` : `primary`,
    L = a || m,
    R;
  t[43] === r.confirmLabel
    ? (R = t[44])
    : ((R = (0, Z.jsx)(`span`, {
        className: `min-w-0 break-words whitespace-normal`,
        children: r.confirmLabel,
      })),
      (t[43] = r.confirmLabel),
      (t[44] = R));
  let z;
  t[45] !== o || t[46] !== I || t[47] !== L || t[48] !== R
    ? ((z = (0, Z.jsx)(_e, {
        children: (0, Z.jsx)(n, {
          color: I,
          size: `modalPrimary`,
          radius: `full`,
          type: `submit`,
          disabled: L,
          loading: o,
          children: R,
        }),
      })),
      (t[45] = o),
      (t[46] = I),
      (t[47] = L),
      (t[48] = R),
      (t[49] = z))
    : (z = t[49]);
  let B;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Z.jsx)(_e, {
        children: (0, Z.jsx)(n, {
          color: `secondary`,
          size: `modalPrimary`,
          radius: `full`,
          type: `button`,
          onClick: () => v(!1),
          children: (0, Z.jsx)(p, {
            id: `mcpConfirmation.cancel`,
            defaultMessage: `Cancel`,
            description: `Close a proposed-change confirmation modal without submitting a response or changing anything`,
          }),
        }),
      })),
      (t[50] = B))
    : (B = t[50]);
  let V;
  t[51] === z
    ? (V = t[52])
    : ((V = (0, Z.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [z, B] })),
      (t[51] = z),
      (t[52] = V));
  let H;
  t[53] !== k || t[54] !== M || t[55] !== N || t[56] !== F || t[57] !== V
    ? ((H = (0, Z.jsxs)(ue, {
        as: `form`,
        size: `viewport`,
        variant: `confirmation`,
        onSubmit: k,
        children: [M, N, F, V],
      })),
      (t[53] = k),
      (t[54] = M),
      (t[55] = N),
      (t[56] = F),
      (t[57] = V),
      (t[58] = H))
    : (H = t[58]);
  let W;
  t[59] !== _ || t[60] !== H
    ? ((W = (0, Z.jsx)(ce, {
        open: _,
        onOpenChange: v,
        widthHint: 480,
        variant: `confirmation`,
        closeButtonSize: `large`,
        contentProps: O,
        children: H,
      })),
      (t[59] = _),
      (t[60] = H),
      (t[61] = W))
    : (W = t[61]);
  let ee;
  return (
    t[62] !== D || t[63] !== W
      ? ((ee = (0, Z.jsxs)(Z.Fragment, { children: [D, W] })), (t[62] = D), (t[63] = W), (t[64] = ee))
      : (ee = t[64]),
    ee
  );
}
function fn(e, t) {
  let { label: n, value: r } = e;
  return (0, Z.jsxs)(
    `div`,
    {
      className: `flex flex-col gap-1`,
      children: [
        (0, Z.jsx)(`dt`, { className: `text-secondary`, children: n }),
        (0, Z.jsx)(`dd`, { className: `whitespace-pre-wrap`, children: r }),
      ],
    },
    t,
  );
}
function pn(e, t) {
  let { title: n, body: r, caption: i } = e;
  return (0, Z.jsxs)(
    `section`,
    {
      className: `flex flex-col gap-2`,
      children: [
        n && (0, Z.jsx)(`h3`, { className: `text-base font-medium text-secondary`, children: n }),
        (0, Z.jsxs)(`dl`, {
          className: `flex flex-col gap-4 rounded-2xl border border-default p-5 break-words`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex flex-col gap-1`,
              children: [
                (0, Z.jsx)(`dt`, { className: `text-sm text-secondary`, children: r.label }),
                (0, Z.jsx)(`dd`, {
                  className: `text-document whitespace-pre-wrap text-default`,
                  children: r.value,
                }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex flex-col gap-1 border-t border-default pt-4`,
              children: [
                (0, Z.jsx)(`dt`, { className: `text-sm text-secondary`, children: i.label }),
                (0, Z.jsx)(`dd`, {
                  className: `text-document whitespace-pre-wrap text-default`,
                  children: i.value,
                }),
              ],
            }),
          ],
        }),
      ],
    },
    t,
  );
}
var mn, hn, Z;
function gn() {
  return (gn = e(() => {
    ((mn = Y()), H(), (hn = we()), q(), qt(), ve(), be(), ne(), M(), sn(), un(), (Z = X()));
  }))();
}
function _n(e) {
  let t = st(e.schema);
  return {
    kind: e.kind,
    fieldIndex: 0,
    customDrafts: {},
    values: at(t.flatMap(({ schema: e, ...t }) => (Fe(e) || Wt(e) ? [] : [{ ...t, schema: e }]))),
    fileOptions: Object.fromEntries(t.flatMap(({ name: e, schema: t }) => (Fe(t) ? [[e, Ie(t)]] : []))),
  };
}
function vn(e, t, n) {
  let r = { ...t.values };
  for (let [e, n] of Object.entries(t.customDrafts)) {
    let t = r[e];
    n.selected && n.text.length > 0 && Array.isArray(t) && (r[e] = [...t, n.text]);
  }
  switch (e.kind) {
    case `formElicitation`:
      return Mt(e.schema, r);
    case `openaiForm`:
      return et(e.schema, r, t.fileOptions, n);
    case `legacyOpenAIForm`:
      return Ve(e.schema, r);
  }
}
function yn() {
  return (yn = e(() => {
    (rt(), Je(), Le());
  }))();
}
function bn(e) {
  let t = (0, xn.c)(33),
    {
      conversationId: r,
      hostId: i,
      requestId: a,
      serverName: o,
      onReply: c,
      onStandaloneResponseChange: l,
      isSubmitting: u,
    } = e,
    d = u !== void 0 && u,
    f = h(s),
    m = We(),
    [g, _] = (0, Sn.useState)(!1),
    v = (0, Sn.useRef)(!1),
    y;
  t[0] !== r || t[1] !== i || t[2] !== d || t[3] !== c || t[4] !== l || t[5] !== a || t[6] !== f
    ? ((y = (e) => {
        if (d || v.current) return;
        let t = () => (c == null ? ot(f, i).replyWithMcpServerElicitationResponse(r, a, St(e)) : c(e));
        if (l == null) {
          t();
          return;
        }
        ((v.current = !0),
          _(!0),
          l(`submitting`),
          Promise.resolve()
            .then(t)
            .then(
              () => l(e === `decline` ? `declined` : `canceled`),
              () => l(`failed`),
            )
            .finally(() => {
              ((v.current = !1), _(!1));
            }));
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = d),
      (t[3] = c),
      (t[4] = l),
      (t[5] = a),
      (t[6] = f),
      (t[7] = y))
    : (y = t[7]);
  let b = y,
    x;
  t[8] === b
    ? (x = t[9])
    : ((x = (e) => {
        e.key === `Escape` && (e.preventDefault(), b(`cancel`));
      }),
      (t[8] = b),
      (t[9] = x));
  let S;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsxs)(`div`, {
        className: `text-sm font-medium`,
        children: [
          null,
          (0, Q.jsx)(Q.Fragment, {
            children: (0, Q.jsx)(p, {
              id: `composer.openAIForm.unsupported.title`,
              defaultMessage: `This form isn’t supported in this version`,
              description: `Title for an OpenAI form that uses fields this client cannot display`,
            }),
          }),
        ],
      })),
      (t[10] = S))
    : (S = t[10]);
  let C;
  t[11] === o
    ? (C = t[12])
    : ((C = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-1 p-4`,
        children: [
          S,
          (0, Q.jsxs)(`div`, {
            className: `text-size-chat-sm text-codex-description`,
            children: [
              null,
              (0, Q.jsx)(Q.Fragment, {
                children: (0, Q.jsx)(p, {
                  id: `composer.openAIForm.unsupported.description`,
                  defaultMessage: `{serverName} requested this form. You can skip it and keep going, or dismiss the request`,
                  description: `Explanation of the available actions for an unsupported OpenAI form`,
                  values: { serverName: o },
                }),
              }),
            ],
          }),
        ],
      })),
      (t[11] = o),
      (t[12] = C));
  let w = d || g,
    T;
  t[13] === b ? (T = t[14]) : ((T = () => b(`cancel`)), (t[13] = b), (t[14] = T));
  let E;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(p, {
        id: `composer.openAIForm.unsupported.dismiss`,
        defaultMessage: `Dismiss`,
        description: `Action for dismissing an unsupported OpenAI form request`,
      })),
      (t[15] = E))
    : (E = t[15]);
  let D;
  t[16] !== w || t[17] !== T
    ? ((D = (0, Q.jsx)(n, { color: `danger`, size: `composer`, disabled: w, onClick: T, children: E })),
      (t[16] = w),
      (t[17] = T),
      (t[18] = D))
    : (D = t[18]);
  let O = d || g,
    k;
  t[19] === b ? (k = t[20]) : ((k = () => b(`decline`)), (t[19] = b), (t[20] = k));
  let A;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Q.jsx)(p, {
        id: `composer.openAIForm.unsupported.skip`,
        defaultMessage: `Skip`,
        description: `Action for declining an unsupported OpenAI form and continuing`,
      })),
      (t[21] = A))
    : (A = t[21]);
  let j;
  t[22] !== m || t[23] !== O || t[24] !== k
    ? ((j = (0, Q.jsx)(n, {
        autoFocus: m,
        color: `primary`,
        size: `composer`,
        disabled: O,
        onClick: k,
        children: A,
      })),
      (t[22] = m),
      (t[23] = O),
      (t[24] = k),
      (t[25] = j))
    : (j = t[25]);
  let M;
  t[26] !== j || t[27] !== D
    ? ((M = (0, Q.jsxs)(`div`, {
        className: `flex justify-end gap-2 border-t border-border/50 px-4 py-3`,
        children: [null, (0, Q.jsxs)(Q.Fragment, { children: [D, j] })],
      })),
      (t[26] = j),
      (t[27] = D),
      (t[28] = M))
    : (M = t[28]);
  let N;
  return (
    t[29] !== M || t[30] !== x || t[31] !== C
      ? ((N = (0, Q.jsx)(At, {
          children: (0, Q.jsxs)(`div`, {
            className: `flex flex-col`,
            role: `presentation`,
            onKeyDown: x,
            children: [C, M],
          }),
        })),
        (t[29] = M),
        (t[30] = x),
        (t[31] = C),
        (t[32] = N))
      : (N = t[32]),
    N
  );
}
var xn, Sn, Q;
function Cn() {
  return (Cn = e(() => {
    ((xn = Y()), T(), Lt(), (Sn = we()), q(), it(), Et(), He(), ve(), xe(), (Q = X()));
  }))();
}
function wn(e) {
  let t = (0, Tn.c)(41),
    {
      autoResolution: r,
      disabled: i,
      isSubmitting: a,
      submitDisabled: o,
      fieldCount: s,
      hotkeysEnabled: c,
      isLastField: l,
      isStandardForm: u,
      isSingleChoice: d,
      showSubmit: f,
      showHeader: m,
      onCancel: h,
      onDismissLegacyImagePicker: g,
      onSkip: _,
      onViewAll: v,
    } = e,
    y = a !== void 0 && a,
    b = null;
  if (g != null) {
    let e = r?.deadlineMs ?? `no-deadline`,
      n = r?.deadlineMs,
      i = r?.nowMs,
      a;
    (t[0] !== y || t[1] !== g || t[2] !== e || t[3] !== n || t[4] !== i
      ? ((a = (0, En.jsx)(Ot, { disabled: y, deadlineMs: n, nowMs: i, variant: `button`, onDismiss: g }, e)),
        (t[0] = y),
        (t[1] = g),
        (t[2] = e),
        (t[3] = n),
        (t[4] = i),
        (t[5] = a))
      : (a = t[5]),
      (b = a));
  } else if (d) {
    let e;
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, En.jsx)(p, {
          id: `composer.mcpFormElicitation.skipChoice`,
          defaultMessage: `Skip`,
          description: `Skip the current single-choice question, or decline the form if it is the last question`,
        })),
        (t[6] = e))
      : (e = t[6]);
    let r;
    (t[7] !== i || t[8] !== _
      ? ((r = (0, En.jsx)(n, {
          color: `outlineSurface`,
          radius: `full`,
          size: `composer`,
          disabled: i,
          onClick: _,
          children: e,
        })),
        (t[7] = i),
        (t[8] = _),
        (t[9] = r))
      : (r = t[9]),
      (b = r));
  } else if (!l) {
    let e = u && `text-sm text-codex-description`,
      r;
    t[10] === e ? (r = t[11]) : ((r = G(e)), (t[10] = e), (t[11] = r));
    let a;
    t[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, En.jsx)(p, {
          id: `composer.mcpFormElicitation.skipQuestion`,
          defaultMessage: `Skip for now`,
          description: `Defer the current form question without clearing its answer. Required questions must still be answered before submitting.`,
        })),
        (t[12] = a))
      : (a = t[12]);
    let o;
    t[13] === r
      ? (o = t[14])
      : ((o = (0, En.jsx)(`span`, { className: r, children: a })), (t[13] = r), (t[14] = o));
    let s;
    (t[15] !== i || t[16] !== _ || t[17] !== o
      ? ((s = (0, En.jsx)(n, { color: `ghost`, disabled: i, onClick: _, children: o })),
        (t[15] = i),
        (t[16] = _),
        (t[17] = o),
        (t[18] = s))
      : (s = t[18]),
      (b = s));
  } else if (!m && s <= 1) {
    let e;
    t[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, En.jsx)(p, {
          id: `composer.mcpFormElicitation.cancel`,
          defaultMessage: `Cancel`,
          description: `Cancel an MCP form when it has no header dismiss button`,
        })),
        (t[19] = e))
      : (e = t[19]);
    let r;
    (t[20] !== y || t[21] !== h
      ? ((r = (0, En.jsx)(n, { color: `ghost`, disabled: y, onClick: h, children: e })),
        (t[20] = y),
        (t[21] = h),
        (t[22] = r))
      : (r = t[22]),
      (b = r));
  }
  let x = u && !d ? `mt-1 px-2 py-2` : `px-4 py-3`,
    S;
  t[23] === x
    ? (S = t[24])
    : ((S = G(`flex shrink-0 items-center justify-end gap-2 border-t border-border/50`, x)),
      (t[23] = x),
      (t[24] = S));
  let C;
  t[25] !== i || t[26] !== v
    ? ((C =
        v == null
          ? null
          : (0, En.jsx)(`div`, {
              className: `me-auto`,
              children: (0, En.jsxs)(n, {
                color: `outlineSurface`,
                radius: `full`,
                size: `composer`,
                disabled: i,
                onClick: v,
                children: [
                  (0, En.jsx)(ae, {}),
                  (0, En.jsx)(p, {
                    id: `composer.openAIForm.viewAll`,
                    defaultMessage: `View all`,
                    description: `Open a searchable grid of all files for the current form field`,
                  }),
                ],
              }),
            })),
      (t[25] = i),
      (t[26] = v),
      (t[27] = C))
    : (C = t[27]);
  let w;
  t[28] !== s || t[29] !== c || t[30] !== l || t[31] !== u || t[32] !== y || t[33] !== f || t[34] !== o
    ? ((w =
        f &&
        (0, En.jsxs)(n, {
          autoFocus: c && s === 0,
          color: `primary`,
          size: `composer`,
          type: `submit`,
          disabled: o,
          loading: y,
          children: [
            (0, En.jsx)(`span`, {
              className: G(u && `text-sm font-medium`),
              children: l
                ? (0, En.jsx)(p, {
                    id: `composer.mcpFormElicitation.continue`,
                    defaultMessage: `Continue`,
                    description: `Primary action for submitting an MCP form elicitation`,
                  })
                : (0, En.jsx)(p, {
                    id: `composer.mcpFormElicitation.next`,
                    defaultMessage: `Next`,
                    description: `Action to validate the current field and advance to the next field of an MCP form`,
                  }),
            }),
            c && (0, En.jsx)(bt, { variant: `primary`, children: I(`CmdOrCtrl+Enter`) }),
          ],
        })),
      (t[28] = s),
      (t[29] = c),
      (t[30] = l),
      (t[31] = u),
      (t[32] = y),
      (t[33] = f),
      (t[34] = o),
      (t[35] = w))
    : (w = t[35]);
  let T;
  return (
    t[36] !== b || t[37] !== S || t[38] !== C || t[39] !== w
      ? ((T = (0, En.jsxs)(`div`, { className: S, children: [C, b, w] })),
        (t[36] = b),
        (t[37] = S),
        (t[38] = C),
        (t[39] = w),
        (t[40] = T))
      : (T = t[40]),
    T
  );
}
var Tn, En;
function Dn() {
  return (Dn = e(() => {
    ((Tn = Y()), H(), q(), Et(), Pt(), ve(), M(), B(), (En = X()));
  }))();
}
function On(e, t) {
  return e.defaultPrevented ||
    e.nativeEvent.isComposing ||
    e.nativeEvent.keyCode === 229 ||
    !Xe(e.nativeEvent, `Enter`)
    ? !1
    : (e.preventDefault(), e.repeat || t(), !0);
}
function kn() {
  return (kn = e(() => {
    ft();
  }))();
}
var An;
function jn() {
  return (jn = e(() => {
    An = `` + new URL(`icon-a370999f24cd.png`, import.meta.url).href;
  }))();
}
var Mn;
function Nn() {
  return (Nn = e(() => {
    Mn = `` + new URL(`icon-b03edc1caacb.png`, import.meta.url).href;
  }))();
}
var Pn;
function Fn() {
  return (Fn = e(() => {
    Pn = `` + new URL(`icon-483deef47e49.png`, import.meta.url).href;
  }))();
}
function In(e) {
  let t = (0, Ln.c)(22),
    { layout: n, src: r, mimeType: i } = e,
    a = n === void 0 ? `thumbnail` : n,
    [o, s] = (0, Rn.useState)(),
    c = r != null && URL.canParse(r) && new URL(r).protocol === `https:` ? r : void 0,
    { safeUrl: l } = It(c, c != null),
    u;
  t[0] !== l || t[1] !== r
    ? ((u = r != null && D(r) ? r : l), (t[0] = l), (t[1] = r), (t[2] = u))
    : (u = t[2]);
  let d = u,
    f = i?.split(`;`)[0]?.trim().toLowerCase(),
    p = Bn[f ?? ``],
    m = a === `icon` ? `size-5` : `size-10`,
    h;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = (0, zn.jsx)(ee, {})), (t[3] = h)) : (h = t[3]);
  let g = h;
  if (p != null) {
    let e;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, zn.jsx)(ee, {})), (t[4] = e)) : (e = t[4]);
    let n;
    (t[5] !== m || t[6] !== p
      ? ((n = (0, zn.jsx)(yt, { className: m, alt: ``, fallback: e, src: p })),
        (t[5] = m),
        (t[6] = p),
        (t[7] = n))
      : (n = t[7]),
      (g = n));
  } else if (f === `text/html` || f === `application/xhtml+xml`) {
    let e;
    (t[8] === m ? (e = t[9]) : ((e = (0, zn.jsx)(z, { className: m })), (t[8] = m), (t[9] = e)), (g = e));
  }
  let _ = a === `card` || a === `card-icon`,
    v = a === `icon`,
    y = a === `thumbnail`,
    b;
  t[10] !== _ || t[11] !== v || t[12] !== y
    ? ((b = G(`flex items-center justify-center overflow-hidden`, {
        "h-full w-full": _,
        "size-5 shrink-0 rounded-xs": v,
        "size-10 shrink-0 rounded-md bg-surface": y,
      })),
      (t[10] = _),
      (t[11] = v),
      (t[12] = y),
      (t[13] = b))
    : (b = t[13]);
  let x;
  t[14] !== o || t[15] !== g || t[16] !== d || t[17] !== a
    ? ((x =
        d == null || o === d
          ? g
          : (0, zn.jsx)(`img`, {
              alt: ``,
              className: G(
                a === `card-icon` ? `size-10` : `h-full w-full`,
                a === `icon` || a === `card-icon` ? `object-contain` : `object-scale-down`,
                a === `card` && `block`,
              ),
              decoding: `async`,
              draggable: !1,
              loading: `lazy`,
              referrerPolicy: `no-referrer`,
              src: d,
              onError: () => s(d),
            })),
      (t[14] = o),
      (t[15] = g),
      (t[16] = d),
      (t[17] = a),
      (t[18] = x))
    : (x = t[18]);
  let S;
  return (
    t[19] !== b || t[20] !== x
      ? ((S = (0, zn.jsx)(`span`, { className: b, children: x })), (t[19] = b), (t[20] = x), (t[21] = S))
      : (S = t[21]),
    S
  );
}
var Ln, Rn, zn, Bn;
function Vn() {
  return (Vn = e(() => {
    ((Ln = Y()),
      H(),
      (Rn = we()),
      M(),
      lt(),
      O(),
      Ct(),
      R(),
      jn(),
      Nn(),
      Fn(),
      (zn = X()),
      (Bn = {
        "application/msword": An,
        "application/vnd.google-apps.document": An,
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": An,
        "text/markdown": An,
        "text/plain": An,
        "application/vnd.google-apps.presentation": Mn,
        "application/vnd.ms-powerpoint": Mn,
        "application/vnd.openxmlformats-officedocument.presentationml.presentation": Mn,
        "application/vnd.google-apps.spreadsheet": Pn,
        "application/vnd.ms-excel": Pn,
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": Pn,
        "text/csv": Pn,
        "text/tab-separated-values": Pn,
      }));
  }))();
}
function Hn(e) {
  let t = (0, Wn.c)(66),
    {
      autoFocus: n,
      advanceOnSelect: r,
      hasNextField: i,
      customOption: a,
      invalid: o,
      multiple: s,
      options: c,
      value: l,
      onChange: u,
    } = e,
    d = r === void 0 || r,
    f = i !== void 0 && i,
    p = (0, Gn.useId)(),
    m = c.length + (a == null ? 0 : 1) > 1,
    h = s ? kt : Ft,
    g = typeof l == `string` ? l : void 0,
    _;
  t[0] === l ? (_ = t[1]) : ((_ = Array.isArray(l) ? l : []), (t[0] = l), (t[1] = _));
  let v = _,
    b;
  t[2] === c ? (b = t[3]) : ((b = c.some(Un)), (t[2] = c), (t[3] = b));
  let S = b,
    C;
  t[4] !== s || t[5] !== c || t[6] !== g
    ? ((C = s
        ? 0
        : Math.max(
            0,
            c.findIndex((e) => e.const === g),
          )),
      (t[4] = s),
      (t[5] = c),
      (t[6] = g),
      (t[7] = C))
    : (C = t[7]);
  let w = C,
    T;
  t[8] !== d || t[9] !== a || t[10] !== s || t[11] !== u || t[12] !== c
    ? ((T = (e) => {
        let t = e.target;
        if (
          !(t instanceof HTMLInputElement || t instanceof HTMLButtonElement) ||
          !t.matches(`input[type="radio"], button[role="checkbox"]`) ||
          On(e, () => {
            s || !d || (t instanceof HTMLInputElement && !t.checked) ? t.click() : t.form?.requestSubmit();
          }) ||
          e.defaultPrevented ||
          e.nativeEvent.isComposing ||
          e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          (e.key !== `ArrowDown` && e.key !== `ArrowUp`)
        )
          return;
        let n = Array.from(e.currentTarget.querySelectorAll(`input[type="radio"], button[role="checkbox"]`)),
          r = (n.indexOf(t) + (e.key === `ArrowDown` ? 1 : -1) + n.length) % n.length,
          i = n[r];
        if (i != null && (e.preventDefault(), i.focus(), !s)) {
          let e = c[r];
          e == null ? a?.onSelect(!0) : u(e.const);
        }
      }),
      (t[8] = d),
      (t[9] = a),
      (t[10] = s),
      (t[11] = u),
      (t[12] = c),
      (t[13] = T))
    : (T = t[13]);
  let E = T,
    D;
  if (
    t[14] !== h ||
    t[15] !== d ||
    t[16] !== n ||
    t[17] !== a?.selected ||
    t[18] !== w ||
    t[19] !== f ||
    t[20] !== S ||
    t[21] !== p ||
    t[22] !== o ||
    t[23] !== s ||
    t[24] !== u ||
    t[25] !== c ||
    t[26] !== g ||
    t[27] !== v ||
    t[28] !== m
  ) {
    let e;
    (t[30] !== h ||
    t[31] !== d ||
    t[32] !== n ||
    t[33] !== a?.selected ||
    t[34] !== w ||
    t[35] !== f ||
    t[36] !== S ||
    t[37] !== p ||
    t[38] !== o ||
    t[39] !== s ||
    t[40] !== u ||
    t[41] !== g ||
    t[42] !== v ||
    t[43] !== m
      ? ((e = (e, t) => {
          let r = v.indexOf(e.const),
            i = s ? r !== -1 : !a?.selected && g === e.const;
          return (0, Kn.jsxs)(
            h,
            {
              autoFocus: n && !a?.selected && t === w,
              checked: i,
              invalid: o,
              name: p,
              type: s ? `checkbox` : `radio`,
              value: e.const,
              onActivate: !s && d ? () => u(e.const, !0) : void 0,
              onChange: () => {
                if (!s) {
                  d || u(e.const);
                  return;
                }
                u(i ? v.filter((e, t) => t !== r) : [...v, e.const]);
              },
              children: [
                !s && (0, Kn.jsx)(ht, { selected: i, showNumber: m, variant: `number`, index: t + 1 }),
                S ? (0, Kn.jsx)(In, { src: e[`x-openai-thumbnail`]?.src }) : null,
                (0, Kn.jsxs)(`span`, {
                  className: `flex min-w-0 flex-1 flex-wrap items-baseline gap-x-2 gap-y-0.5 @max-5xl/request-card:flex-col @max-5xl/request-card:items-stretch`,
                  children: [
                    (0, Kn.jsx)(`span`, {
                      className: `min-w-0 text-sm font-medium wrap-anywhere`,
                      children: e.title,
                    }),
                    e.description == null
                      ? null
                      : (0, Kn.jsx)(`span`, {
                          className: `min-w-0 text-sm wrap-anywhere text-codex-description`,
                          children: e.description,
                        }),
                  ],
                }),
                !s && d && f
                  ? (0, Kn.jsx)(x, {
                      asset: y,
                      className: `ms-auto shrink-0 self-center text-tertiary opacity-0 group-hover:opacity-100`,
                    })
                  : null,
              ],
            },
            e.const,
          );
        }),
        (t[30] = h),
        (t[31] = d),
        (t[32] = n),
        (t[33] = a?.selected),
        (t[34] = w),
        (t[35] = f),
        (t[36] = S),
        (t[37] = p),
        (t[38] = o),
        (t[39] = s),
        (t[40] = u),
        (t[41] = g),
        (t[42] = v),
        (t[43] = m),
        (t[44] = e))
      : (e = t[44]),
      (D = c.map(e)),
      (t[14] = h),
      (t[15] = d),
      (t[16] = n),
      (t[17] = a?.selected),
      (t[18] = w),
      (t[19] = f),
      (t[20] = S),
      (t[21] = p),
      (t[22] = o),
      (t[23] = s),
      (t[24] = u),
      (t[25] = c),
      (t[26] = g),
      (t[27] = v),
      (t[28] = m),
      (t[29] = D));
  } else D = t[29];
  let O;
  t[45] !== a || t[46] !== o || t[47] !== s || t[48] !== u || t[49] !== c || t[50] !== v
    ? ((O =
        a != null && s
          ? v.map((e, t) =>
              c.some((t) => t.const === e) && v.indexOf(e) === t
                ? null
                : (0, Kn.jsx)(
                    kt,
                    {
                      autoFocus: !1,
                      checked: !0,
                      invalid: o,
                      onChange: () => u(v.filter((e, n) => n !== t)),
                      children: (0, Kn.jsx)(`span`, {
                        className: `min-w-0 text-sm font-medium wrap-anywhere`,
                        children: c.find((t) => t.const === e)?.title ?? e,
                      }),
                    },
                    t,
                  ),
            )
          : null),
      (t[45] = a),
      (t[46] = o),
      (t[47] = s),
      (t[48] = u),
      (t[49] = c),
      (t[50] = v),
      (t[51] = O))
    : (O = t[51]);
  let k;
  t[52] !== h ||
  t[53] !== n ||
  t[54] !== a ||
  t[55] !== p ||
  t[56] !== o ||
  t[57] !== s ||
  t[58] !== c.length ||
  t[59] !== m
    ? ((k =
        a == null
          ? null
          : (0, Kn.jsx)(h, {
              accessibilityLabel: a.label,
              autoFocus: n && (c.length === 0 || a.selected),
              checked: a.selected,
              invalid: o,
              name: p,
              type: s ? `checkbox` : `radio`,
              onChange: () => a.onSelect(!s || !a.selected),
              editor: a.editor,
              children:
                !s &&
                (0, Kn.jsx)(ht, {
                  selected: a.selected,
                  showNumber: m,
                  variant: `number`,
                  index: c.length + 1,
                }),
            })),
      (t[52] = h),
      (t[53] = n),
      (t[54] = a),
      (t[55] = p),
      (t[56] = o),
      (t[57] = s),
      (t[58] = c.length),
      (t[59] = m),
      (t[60] = k))
    : (k = t[60]);
  let A;
  return (
    t[61] !== E || t[62] !== D || t[63] !== O || t[64] !== k
      ? ((A = (0, Kn.jsxs)(`div`, {
          className: `flex flex-col gap-1`,
          "data-mcp-form-choices": !0,
          role: `group`,
          onKeyDownCapture: E,
          children: [D, O, k],
        })),
        (t[61] = E),
        (t[62] = D),
        (t[63] = O),
        (t[64] = k),
        (t[65] = A))
      : (A = t[65]),
    A
  );
}
function Un(e) {
  return e[`x-openai-thumbnail`] != null;
}
var Wn, Gn, Kn;
function qn() {
  return (qn = e(() => {
    ((Wn = Y()), j(), (Gn = we()), Bt(), C(), kn(), Vn(), (Kn = X()));
  }))();
}
function Jn(e) {
  let t = (0, Yn.c)(27),
    { schema: n } = e,
    r = n.type === `string` && !(`x-openai-input` in n) ? n : null,
    i = n.type === `number` || n.type === `integer` ? n : null,
    a = i?.minimum,
    o = i?.maximum;
  n.type === `array`
    ? ((a = n.minItems == null || Number(n.minItems) === 0 ? void 0 : Number(n.minItems)),
      (o = n.maxItems == null ? void 0 : Number(n.maxItems)))
    : r != null && (`minLength` in r && (a = r.minLength || void 0), `maxLength` in r && (o = r.maxLength));
  let s = `none`;
  a != null && o != null
    ? (s = a === o ? `exact` : `both`)
    : a == null
      ? o != null && (s = `maximum`)
      : (s = `minimum`);
  let c = r != null && `format` in r ? r.format : void 0,
    l;
  t[0] !== s || t[1] !== o || t[2] !== a || t[3] !== n.type
    ? ((l =
        n.type === `array` && s !== `none`
          ? (0, Xn.jsx)(p, {
              id: `composer.mcpFormElicitation.selectionCount`,
              defaultMessage: `{bounds, select, exact {Choose exactly {minimum, plural, one {# item} other {# items}}} both {Choose {minimum}–{maximum} items} minimum {Choose at least {minimum, plural, one {# item} other {# items}}} other {Choose up to {maximum, plural, one {# item} other {# items}}}}`,
              description: `Number of choices or files allowed in an MCP form; bounds specifies an exact count, a range, a minimum, or a maximum`,
              values: { bounds: s, minimum: a, maximum: o },
            })
          : null),
      (t[0] = s),
      (t[1] = o),
      (t[2] = a),
      (t[3] = n.type),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] !== s || t[6] !== o || t[7] !== a || t[8] !== r
    ? ((u =
        r != null && s !== `none`
          ? (0, Xn.jsx)(`div`, {
              children: (0, Xn.jsx)(p, {
                id: `composer.mcpFormElicitation.textLength`,
                defaultMessage: `{bounds, select, exact {Use exactly {minimum, plural, one {# character} other {# characters}}} both {Use {minimum}–{maximum} characters} minimum {Use at least {minimum, plural, one {# character} other {# characters}}} other {Use up to {maximum, plural, one {# character} other {# characters}}}}`,
                description: `Text length allowed in an MCP form; bounds specifies an exact length, a range, a minimum, or a maximum`,
                values: { bounds: s, minimum: a, maximum: o },
              }),
            })
          : null),
      (t[5] = s),
      (t[6] = o),
      (t[7] = a),
      (t[8] = r),
      (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] !== s || t[11] !== o || t[12] !== a || t[13] !== i
    ? ((d =
        i == null
          ? null
          : (0, Xn.jsx)(p, {
              id: `composer.mcpFormElicitation.numberRange`,
              defaultMessage: `{kind, select, integer {Enter a whole number} other {Enter a number}}{bounds, select, exact { equal to {minimum}} both { from {minimum} to {maximum}} minimum { of at least {minimum}} maximum { of at most {maximum}} other {}}`,
              description: `Numeric value allowed in an MCP form; kind distinguishes whole numbers from decimals, and bounds specifies an exact value, a range, a minimum, a maximum, or no limit`,
              values: { kind: i.type, bounds: s, minimum: a, maximum: o },
            })),
      (t[10] = s),
      (t[11] = o),
      (t[12] = a),
      (t[13] = i),
      (t[14] = d))
    : (d = t[14]);
  let f;
  t[15] === c
    ? (f = t[16])
    : ((f =
        c == null
          ? null
          : (0, Xn.jsx)(`div`, {
              children: (0, Xn.jsx)(p, {
                id: `composer.mcpFormElicitation.requiredFormat`,
                defaultMessage: `Use a valid {format, select, email {email address} uri {URL} date {date} datetime {date and time, such as 2026-01-30T14:30:00Z} other {value}}`,
                description: `Expected format for an MCP form answer; format is email, uri, date, or datetime. The datetime example shows the accepted ISO timestamp syntax`,
                values: { format: c === `date-time` ? `datetime` : c },
              }),
            })),
      (t[15] = c),
      (t[16] = f));
  let m;
  t[17] !== s || t[18] !== c || t[19] !== i
    ? ((m =
        s === `none` && i == null && c == null
          ? (0, Xn.jsx)(p, {
              id: `composer.mcpFormElicitation.invalidField`,
              defaultMessage: `Check this answer and try again`,
              description: `Validation message shown when an MCP form answer is missing or does not meet its requirements`,
            })
          : null),
      (t[17] = s),
      (t[18] = c),
      (t[19] = i),
      (t[20] = m))
    : (m = t[20]);
  let h;
  return (
    t[21] !== l || t[22] !== u || t[23] !== d || t[24] !== f || t[25] !== m
      ? ((h = (0, Xn.jsxs)(`div`, { role: `alert`, children: [l, u, d, f, m] })),
        (t[21] = l),
        (t[22] = u),
        (t[23] = d),
        (t[24] = f),
        (t[25] = m),
        (t[26] = h))
      : (h = t[26]),
    h
  );
}
var Yn, Xn;
function Zn() {
  return (Zn = e(() => {
    ((Yn = Y()), q(), (Xn = X()));
  }))();
}
function Qn(e) {
  let t = (0, tr.c)(15),
    {
      id: n,
      autoFocus: r,
      disabled: i,
      invalid: a,
      label: o,
      placeholder: s,
      variant: c,
      format: l,
      maxLength: u,
      value: d,
      onChange: f,
      onKeyDown: p,
      onFocus: m,
    } = e,
    h = i !== void 0 && i,
    g = c === void 0 ? `default` : c,
    _ = (u ?? 0) >= rr,
    v =
      g === `choice`
        ? `block w-full resize-none bg-transparent text-default outline-none placeholder:text-tertiary`
        : ir,
    y;
  return (
    t[0] !== r ||
    t[1] !== h ||
    t[2] !== v ||
    t[3] !== l ||
    t[4] !== n ||
    t[5] !== a ||
    t[6] !== _ ||
    t[7] !== o ||
    t[8] !== f ||
    t[9] !== m ||
    t[10] !== p ||
    t[11] !== s ||
    t[12] !== d ||
    t[13] !== g
      ? ((y =
          l == null
            ? (0, nr.jsx)(`textarea`, {
                id: n,
                ref: r ? $n : void 0,
                autoFocus: r,
                disabled: h,
                "aria-invalid": a || void 0,
                "aria-label": o,
                placeholder: s,
                className: G(
                  v,
                  `[field-sizing:content] max-h-48 resize-none overflow-y-auto`,
                  g === "default" && `py-2`,
                  _ ? `min-h-20` : g === "default" && `min-h-8`,
                ),
                rows: _ ? 3 : 1,
                value: d,
                onChange: (e) => f(e.currentTarget.value),
                onKeyDown: p,
                onFocus: m,
              })
            : (0, nr.jsx)(`input`, {
                id: n,
                autoFocus: r,
                disabled: h,
                "aria-invalid": a || void 0,
                "aria-label": o,
                placeholder: s,
                className: G(v, g === "default" && `h-8`),
                type: er(l),
                value: d,
                onChange: (e) => f(e.currentTarget.value),
                onKeyDown: p,
                onFocus: m,
              })),
        (t[0] = r),
        (t[1] = h),
        (t[2] = v),
        (t[3] = l),
        (t[4] = n),
        (t[5] = a),
        (t[6] = _),
        (t[7] = o),
        (t[8] = f),
        (t[9] = m),
        (t[10] = p),
        (t[11] = s),
        (t[12] = d),
        (t[13] = g),
        (t[14] = y))
      : (y = t[14]),
    y
  );
}
function $n(e) {
  e?.setSelectionRange(e.value.length, e.value.length);
}
function er(e) {
  switch (e) {
    case `date`:
      return `date`;
    case `date-time`:
    case void 0:
      return `text`;
    case `email`:
      return `email`;
    case `uri`:
      return `url`;
  }
}
var tr, nr, rr, ir;
function ar() {
  return (ar = e(() => {
    ((tr = Y()),
      H(),
      (nr = X()),
      (rr = 160),
      (ir = `w-full rounded-xl border border-default px-3 outline-none focus:border-text/30 aria-invalid:border-text-danger`));
  }))();
}
function or(e) {
  let t = (0, sr.c)(59),
    {
      autoFocus: n,
      disabled: r,
      label: i,
      format: a,
      maxLength: o,
      invalid: s,
      multiple: c,
      options: l,
      value: u,
      draft: d,
      onDraftChange: f,
      onChange: p,
    } = e,
    m = P(),
    h = !c && typeof u == `string` && !l.some((e) => e.const === u) ? u : ``,
    g;
  t[0] !== d || t[1] !== h
    ? ((g = d ?? { text: h, selected: h !== `` }), (t[0] = d), (t[1] = h), (t[2] = g))
    : (g = t[2]);
  let _ = g,
    v;
  t[3] === m
    ? (v = t[4])
    : ((v = m.formatMessage({
        id: `composer.mcpFormElicitation.customChoice`,
        defaultMessage: `Something else`,
        description: `The final choice in a form field, where the user can type their own answer`,
      })),
      (t[3] = m),
      (t[4] = v));
  let y = v,
    b;
  t[5] !== _ || t[6] !== c || t[7] !== p || t[8] !== f
    ? ((b = (e) => {
        e !== _.selected && (f({ ..._, selected: e }), c || p(e ? _.text : ``));
      }),
      (t[5] = _),
      (t[6] = c),
      (t[7] = p),
      (t[8] = f),
      (t[9] = b))
    : (b = t[9]);
  let x = b,
    S;
  t[10] !== _.selected || t[11] !== _.text || t[12] !== p || t[13] !== f || t[14] !== u
    ? ((S = () => {
        _.selected &&
          _.text !== `` &&
          (p([...(Array.isArray(u) ? u : []), _.text]), f({ text: ``, selected: !1 }));
      }),
      (t[10] = _.selected),
      (t[11] = _.text),
      (t[12] = p),
      (t[13] = f),
      (t[14] = u),
      (t[15] = S))
    : (S = t[15]);
  let C = S,
    w;
  t[16] !== _ || t[17] !== c || t[18] !== p || t[19] !== f
    ? ((w = (e) => {
        (c || f({ ..._, selected: !1 }), p(e));
      }),
      (t[16] = _),
      (t[17] = c),
      (t[18] = p),
      (t[19] = f),
      (t[20] = w))
    : (w = t[20]);
  let T;
  t[21] === x ? (T = t[22]) : ((T = () => x(!0)), (t[21] = x), (t[22] = T));
  let E;
  t[23] !== c || t[24] !== p || t[25] !== f
    ? ((E = (e) => {
        (f({ text: e, selected: !0 }), c || p(e));
      }),
      (t[23] = c),
      (t[24] = p),
      (t[25] = f),
      (t[26] = E))
    : (E = t[26]);
  let D;
  t[27] !== C || t[28] !== _.selected || t[29] !== _.text || t[30] !== c
    ? ((D = (e) => {
        c && _.selected && _.text !== `` && On(e, C) && e.stopPropagation();
      }),
      (t[27] = C),
      (t[28] = _.selected),
      (t[29] = _.text),
      (t[30] = c),
      (t[31] = D))
    : (D = t[31]);
  let O;
  t[32] !== _.text ||
  t[33] !== y ||
  t[34] !== r ||
  t[35] !== a ||
  t[36] !== s ||
  t[37] !== i ||
  t[38] !== o ||
  t[39] !== T ||
  t[40] !== E ||
  t[41] !== D
    ? ((O = (0, cr.jsx)(Qn, {
        autoFocus: !1,
        disabled: r,
        label: i,
        placeholder: y,
        variant: `choice`,
        invalid: s,
        format: a,
        maxLength: o,
        value: _.text,
        onFocus: T,
        onChange: E,
        onKeyDown: D,
      })),
      (t[32] = _.text),
      (t[33] = y),
      (t[34] = r),
      (t[35] = a),
      (t[36] = s),
      (t[37] = i),
      (t[38] = o),
      (t[39] = T),
      (t[40] = E),
      (t[41] = D),
      (t[42] = O))
    : (O = t[42]);
  let k;
  t[43] !== _.selected || t[44] !== y || t[45] !== x || t[46] !== O
    ? ((k = { label: y, selected: _.selected, onSelect: x, editor: O }),
      (t[43] = _.selected),
      (t[44] = y),
      (t[45] = x),
      (t[46] = O),
      (t[47] = k))
    : (k = t[47]);
  let A;
  t[48] !== n || t[49] !== s || t[50] !== c || t[51] !== l || t[52] !== k || t[53] !== w || t[54] !== u
    ? ((A = (0, cr.jsx)(Hn, {
        autoFocus: n,
        advanceOnSelect: !1,
        invalid: s,
        multiple: c,
        options: l,
        value: u,
        onChange: w,
        customOption: k,
      })),
      (t[48] = n),
      (t[49] = s),
      (t[50] = c),
      (t[51] = l),
      (t[52] = k),
      (t[53] = w),
      (t[54] = u),
      (t[55] = A))
    : (A = t[55]);
  let j;
  return (
    t[56] !== r || t[57] !== A
      ? ((j = (0, cr.jsx)(`fieldset`, { disabled: r, className: `min-w-0`, children: A })),
        (t[56] = r),
        (t[57] = A),
        (t[58] = j))
      : (j = t[58]),
    j
  );
}
var sr, cr;
function lr() {
  return (lr = e(() => {
    ((sr = Y()), q(), qn(), kn(), ar(), (cr = X()));
  }))();
}
function ur(e) {
  let t = (0, pr.c)(117),
    {
      autoFocus: n,
      disabled: r,
      field: i,
      hasNextField: a,
      hideLabel: o,
      hideDescription: s,
      invalid: c,
      value: l,
      customDraft: u,
      onCustomDraftChange: d,
      onChange: f,
    } = e,
    p = r !== void 0 && r,
    m = a !== void 0 && a,
    h = s !== void 0 && s,
    g = (0, hr.useId)(),
    _;
  t[0] !== i.name || t[1] !== i.schema.title
    ? ((_ = i.schema.title ?? (0, mr.default)(i.name)), (t[0] = i.name), (t[1] = i.schema.title), (t[2] = _))
    : (_ = t[2]);
  let v = _,
    y = !o && i.schema.title != null,
    b = h ? null : (i.schema.description ?? null),
    x;
  t[3] !== i.schema || t[4] !== c
    ? ((x = c
        ? (0, $.jsx)(`div`, {
            className: `px-2 pt-1 text-size-chat-sm text-danger`,
            children: (0, $.jsx)(Jn, { schema: i.schema }),
          })
        : null),
      (t[3] = i.schema),
      (t[4] = c),
      (t[5] = x))
    : (x = t[5]);
  let S = x;
  if (
    zt(i.schema) &&
    (i.schema.type === `array` ||
      (`x-openai-suggestions` in i.schema && i.schema[`x-openai-suggestions`] != null))
  ) {
    let e = i.schema.type === `array` ? i.schema.items : i.schema,
      r;
    t[6] !== v || t[7] !== y
      ? ((r =
          y &&
          (0, $.jsx)(`legend`, {
            className: `px-2 text-size-chat-sm font-medium text-default`,
            children: v,
          })),
        (t[6] = v),
        (t[7] = y),
        (t[8] = r))
      : (r = t[8]);
    let a;
    t[9] === b ? (a = t[10]) : ((a = (0, $.jsx)(fr, { description: b })), (t[9] = b), (t[10] = a));
    let o = `format` in e ? e.format : void 0,
      s = `maxLength` in e ? e.maxLength : void 0,
      m = i.schema.type === `array`,
      h;
    t[11] === i.schema ? (h = t[12]) : ((h = Ke(i.schema)), (t[11] = i.schema), (t[12] = h));
    let g;
    t[13] !== n ||
    t[14] !== u ||
    t[15] !== p ||
    t[16] !== c ||
    t[17] !== v ||
    t[18] !== f ||
    t[19] !== d ||
    t[20] !== m ||
    t[21] !== h ||
    t[22] !== o ||
    t[23] !== s ||
    t[24] !== l
      ? ((g = (0, $.jsx)(or, {
          autoFocus: n,
          disabled: p,
          label: v,
          format: o,
          maxLength: s,
          invalid: c,
          multiple: m,
          options: h,
          value: l,
          draft: u,
          onDraftChange: d,
          onChange: f,
        })),
        (t[13] = n),
        (t[14] = u),
        (t[15] = p),
        (t[16] = c),
        (t[17] = v),
        (t[18] = f),
        (t[19] = d),
        (t[20] = m),
        (t[21] = h),
        (t[22] = o),
        (t[23] = s),
        (t[24] = l),
        (t[25] = g))
      : (g = t[25]);
    let _;
    return (
      t[26] !== S || t[27] !== v || t[28] !== g || t[29] !== r || t[30] !== a
        ? ((_ = (0, $.jsxs)(`fieldset`, {
            "aria-label": v,
            className: `flex flex-col gap-1`,
            children: [r, a, g, S],
          })),
          (t[26] = S),
          (t[27] = v),
          (t[28] = g),
          (t[29] = r),
          (t[30] = a),
          (t[31] = _))
        : (_ = t[31]),
      _
    );
  }
  if (i.schema.type === `array` || _t(i.schema)) {
    let e;
    t[32] !== v || t[33] !== y
      ? ((e =
          y &&
          (0, $.jsx)(`legend`, {
            className: `px-2 text-size-chat-sm font-medium text-default`,
            children: v,
          })),
        (t[32] = v),
        (t[33] = y),
        (t[34] = e))
      : (e = t[34]);
    let r;
    t[35] === b ? (r = t[36]) : ((r = (0, $.jsx)(fr, { description: b })), (t[35] = b), (t[36] = r));
    let a = i.schema.type === `array`,
      o;
    t[37] === i.schema ? (o = t[38]) : ((o = Ke(i.schema)), (t[37] = i.schema), (t[38] = o));
    let s;
    t[39] !== n || t[40] !== m || t[41] !== c || t[42] !== f || t[43] !== a || t[44] !== o || t[45] !== l
      ? ((s = (0, $.jsx)(Hn, {
          autoFocus: n,
          hasNextField: m,
          invalid: c,
          multiple: a,
          options: o,
          value: l,
          onChange: f,
        })),
        (t[39] = n),
        (t[40] = m),
        (t[41] = c),
        (t[42] = f),
        (t[43] = a),
        (t[44] = o),
        (t[45] = l),
        (t[46] = s))
      : (s = t[46]);
    let u;
    return (
      t[47] !== S || t[48] !== v || t[49] !== s || t[50] !== e || t[51] !== r
        ? ((u = (0, $.jsxs)(`fieldset`, {
            "aria-label": v,
            className: `flex flex-col gap-1`,
            children: [e, r, s, S],
          })),
          (t[47] = S),
          (t[48] = v),
          (t[49] = s),
          (t[50] = e),
          (t[51] = r),
          (t[52] = u))
        : (u = t[52]),
      u
    );
  }
  switch (i.schema.type) {
    case `string`: {
      let e;
      t[53] !== g || t[54] !== v || t[55] !== y
        ? ((e =
            y &&
            (0, $.jsx)(`label`, {
              htmlFor: g,
              className: `text-size-chat-sm font-medium text-default`,
              children: v,
            })),
          (t[53] = g),
          (t[54] = v),
          (t[55] = y),
          (t[56] = e))
        : (e = t[56]);
      let r;
      t[57] === b
        ? (r = t[58])
        : ((r = (0, $.jsx)(fr, { description: b, inset: !1 })), (t[57] = b), (t[58] = r));
      let a = `format` in i.schema ? i.schema.format : void 0,
        o = `maxLength` in i.schema ? i.schema.maxLength : void 0,
        s = typeof l == `string` ? l : ``,
        u;
      t[59] !== n ||
      t[60] !== p ||
      t[61] !== g ||
      t[62] !== c ||
      t[63] !== v ||
      t[64] !== f ||
      t[65] !== s ||
      t[66] !== a ||
      t[67] !== o
        ? ((u = (0, $.jsx)(Qn, {
            id: g,
            disabled: p,
            autoFocus: n,
            invalid: c,
            label: v,
            format: a,
            maxLength: o,
            value: s,
            onChange: f,
          })),
          (t[59] = n),
          (t[60] = p),
          (t[61] = g),
          (t[62] = c),
          (t[63] = v),
          (t[64] = f),
          (t[65] = s),
          (t[66] = a),
          (t[67] = o),
          (t[68] = u))
        : (u = t[68]);
      let d;
      return (
        t[69] !== S || t[70] !== u || t[71] !== e || t[72] !== r
          ? ((d = (0, $.jsxs)(`div`, {
              className: `flex flex-col gap-1 px-2 text-sm`,
              children: [e, r, u, S],
            })),
            (t[69] = S),
            (t[70] = u),
            (t[71] = e),
            (t[72] = r),
            (t[73] = d))
          : (d = t[73]),
        d
      );
    }
    case `boolean`: {
      let e;
      t[74] === b ? (e = t[75]) : ((e = (0, $.jsx)(fr, { description: b })), (t[74] = b), (t[75] = e));
      let r = l === !0,
        a;
      t[76] !== f || t[77] !== l
        ? ((a = () => f(l !== !0)), (t[76] = f), (t[77] = l), (t[78] = a))
        : (a = t[78]);
      let o = l === !0,
        s;
      t[79] === o
        ? (s = t[80])
        : ((s = (0, $.jsx)(`span`, {
            className: `flex h-5 items-center`,
            children: (0, $.jsx)(ht, { selected: o, variant: `checkbox` }),
          })),
          (t[79] = o),
          (t[80] = s));
      let u;
      t[81] === i.schema.title
        ? (u = t[82])
        : ((u =
            i.schema.title != null &&
            (0, $.jsx)(`span`, {
              className: `min-w-0 text-sm font-medium wrap-anywhere`,
              children: i.schema.title,
            })),
          (t[81] = i.schema.title),
          (t[82] = u));
      let d;
      t[83] !== n ||
      t[84] !== g ||
      t[85] !== c ||
      t[86] !== v ||
      t[87] !== s ||
      t[88] !== u ||
      t[89] !== r ||
      t[90] !== a
        ? ((d = (0, $.jsxs)(Ft, {
            accessibilityLabel: v,
            autoFocus: n,
            checked: r,
            invalid: c,
            name: g,
            type: `checkbox`,
            onChange: a,
            onKeyDown: dr,
            children: [s, u],
          })),
          (t[83] = n),
          (t[84] = g),
          (t[85] = c),
          (t[86] = v),
          (t[87] = s),
          (t[88] = u),
          (t[89] = r),
          (t[90] = a),
          (t[91] = d))
        : (d = t[91]);
      let p;
      return (
        t[92] !== S || t[93] !== d || t[94] !== e
          ? ((p = (0, $.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [e, d, S] })),
            (t[92] = S),
            (t[93] = d),
            (t[94] = e),
            (t[95] = p))
          : (p = t[95]),
        p
      );
    }
    case `integer`:
    case `number`: {
      let e;
      t[96] !== v || t[97] !== y
        ? ((e =
            y && (0, $.jsx)(`div`, { className: `text-size-chat-sm font-medium text-default`, children: v })),
          (t[96] = v),
          (t[97] = y),
          (t[98] = e))
        : (e = t[98]);
      let r;
      t[99] === b
        ? (r = t[100])
        : ((r = (0, $.jsx)(fr, { description: b, inset: !1 })), (t[99] = b), (t[100] = r));
      let a = c || void 0,
        o =
          i.schema.type === `integer` && i.schema.minimum != null
            ? Math.ceil(i.schema.minimum)
            : i.schema.minimum,
        s = i.schema.type === `integer` ? 1 : `any`,
        u = typeof l == `number` || typeof l == `string` ? l : ``,
        d;
      t[101] === f ? (d = t[102]) : ((d = (e) => f(e.currentTarget.value)), (t[101] = f), (t[102] = d));
      let p;
      t[103] !== n ||
      t[104] !== i.schema.maximum ||
      t[105] !== v ||
      t[106] !== s ||
      t[107] !== u ||
      t[108] !== d ||
      t[109] !== a ||
      t[110] !== o
        ? ((p = (0, $.jsx)(Ze, {
            autoFocus: n,
            "aria-label": v,
            "aria-invalid": a,
            focusRing: !1,
            max: i.schema.maximum,
            min: o,
            step: s,
            type: `number`,
            value: u,
            onChange: d,
          })),
          (t[103] = n),
          (t[104] = i.schema.maximum),
          (t[105] = v),
          (t[106] = s),
          (t[107] = u),
          (t[108] = d),
          (t[109] = a),
          (t[110] = o),
          (t[111] = p))
        : (p = t[111]);
      let m;
      return (
        t[112] !== S || t[113] !== p || t[114] !== e || t[115] !== r
          ? ((m = (0, $.jsxs)(`label`, {
              className: `flex flex-col gap-1 px-2 text-sm`,
              children: [e, r, p, S],
            })),
            (t[112] = S),
            (t[113] = p),
            (t[114] = e),
            (t[115] = r),
            (t[116] = m))
          : (m = t[116]),
        m
      );
    }
  }
}
function dr(e) {
  On(e, () => e.currentTarget.click());
}
function fr(e) {
  let t = (0, pr.c)(5),
    { description: n, inset: r } = e,
    i = r === void 0 || r;
  if (n == null) return null;
  let a = i && `px-2`,
    o;
  t[0] === a ? (o = t[1]) : ((o = G(`text-size-chat-sm text-codex-description`, a)), (t[0] = a), (t[1] = o));
  let s;
  return (
    t[2] !== n || t[3] !== o
      ? ((s = (0, $.jsx)(`div`, { className: o, children: n })), (t[2] = n), (t[3] = o), (t[4] = s))
      : (s = t[4]),
    s
  );
}
var pr, mr, hr, $;
function gr() {
  return (gr = e(() => {
    ((pr = Y()), H(), (mr = t(Ue(), 1)), (hr = we()), Bt(), je(), qn(), Zn(), kn(), ar(), lr(), ($ = X()));
  }))();
}
function _r(e) {
  let t = (0, vr.c)(63),
    {
      action: n,
      previewAction: r,
      metadata: i,
      layout: a,
      autoFocus: o,
      children: s,
      disabled: l,
      invalid: u,
      isPortrait: d,
      selected: f,
      highlighted: p,
      separatorBefore: m,
      title: h,
    } = e,
    g = a === void 0 ? `carousel` : a,
    _ = d !== void 0 && d,
    v = p !== void 0 && p,
    y = e.type === `button` || e.type === `preview`,
    b;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = { button: `button`, preview: `button`, static: `div`, checkbox: `label`, radio: `label` }),
      (t[0] = b))
    : (b = t[0]);
  let x = b[e.type],
    S = m && `ps-4`,
    C;
  t[1] === S
    ? (C = t[2])
    : ((C = G(`group/composer-attachment relative min-w-0 shrink-0 snap-start`, S)), (t[1] = S), (t[2] = C));
  let w;
  t[3] === m
    ? (w = t[4])
    : ((w =
        m &&
        (0, yr.jsx)(`div`, {
          "aria-hidden": !0,
          className: `absolute start-0 top-0 h-34 border-s border-subtle`,
        })),
      (t[3] = m),
      (t[4] = w));
  let T = y && o,
    E = g === `carousel` ? `w-fit` : `w-full`,
    D = g === `carousel` && `-m-1 p-1`,
    O = l ? `cursor-default opacity-50` : e.type !== `static` && `cursor-interaction`,
    k;
  t[5] !== O || t[6] !== E || t[7] !== D
    ? ((k = G(
        `group relative flex flex-col gap-1.5 rounded-2xl text-start select-none focus:outline-none`,
        E,
        D,
        O,
      )),
      (t[5] = O),
      (t[6] = E),
      (t[7] = D),
      (t[8] = k))
    : (k = t[8]);
  let A = y ? l : void 0,
    j = y ? `button` : void 0,
    M = y ? e.onClick : void 0,
    N;
  t[9] !== o ||
  t[10] !== l ||
  t[11] !== e.name ||
  t[12] !== e.onChange ||
  t[13] !== e.type ||
  t[14] !== e.value ||
  t[15] !== f
    ? ((N =
        e.type === `checkbox` || e.type === `radio`
          ? (0, yr.jsx)(`input`, {
              autoFocus: o,
              checked: f,
              className: `sr-only`,
              disabled: l,
              name: e.name,
              type: e.type,
              value: e.value,
              onChange: e.onChange,
              onKeyDown: (t) => {
                e.type === `checkbox` && On(t, () => t.currentTarget.click());
              },
            })
          : null),
      (t[9] = o),
      (t[10] = l),
      (t[11] = e.name),
      (t[12] = e.onChange),
      (t[13] = e.type),
      (t[14] = e.value),
      (t[15] = f),
      (t[16] = N))
    : (N = t[16]);
  let P;
  t[17] !== l || t[18] !== v || t[19] !== u || t[20] !== _ || t[21] !== g || t[22] !== e.type || t[23] !== f
    ? ((P = G(
        `relative overflow-hidden rounded-xl border ring-4 group-focus-visible:ring-ring group-has-[:focus-visible]:ring-ring`,
        e.type === `button` ? `bg-surface-secondary` : `bg-surface shadow-sm`,
        g === `standalone` && `h-40 w-full`,
        g === `grid` && `w-full`,
        g === `carousel` && `h-34`,
        e.type === `button` && `flex flex-col items-center justify-center gap-2 text-secondary`,
        g !== `standalone` && {
          "aspect-square": e.type === `button`,
          "aspect-[4/5]": e.type !== `button` && _,
          "aspect-video": e.type !== `button` && !_,
        },
        { "border-strong": f, "border-text-danger": !f && u, "border-default": !f && !u },
        {
          "ring-ring": v,
          "ring-border-strong": !v && f,
          "ring-text-danger/20": !v && !f && u,
          "ring-transparent": !v && !f && !u,
        },
        e.type !== `static` && e.type !== `preview` && !l && !f && !v && `group-hover:ring-border-subtle`,
      )),
      (t[17] = l),
      (t[18] = v),
      (t[19] = u),
      (t[20] = _),
      (t[21] = g),
      (t[22] = e.type),
      (t[23] = f),
      (t[24] = P))
    : (P = t[24]);
  let F;
  t[25] !== g || t[26] !== e.type || t[27] !== h
    ? ((F =
        e.type === `button` && g === `standalone`
          ? (0, yr.jsx)(`span`, { className: `text-sm`, children: h })
          : null),
      (t[25] = g),
      (t[26] = e.type),
      (t[27] = h),
      (t[28] = F))
    : (F = t[28]);
  let I;
  t[29] === i
    ? (I = t[30])
    : ((I =
        i == null
          ? null
          : (0, yr.jsx)(`div`, {
              "aria-hidden": !0,
              className: `pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 bg-surface px-2 py-1.5 text-sm opacity-0 group-focus-within/composer-attachment:opacity-100 group-hover/composer-attachment:opacity-100`,
              children: i,
            })),
      (t[29] = i),
      (t[30] = I));
  let L;
  t[31] !== n || t[32] !== f
    ? ((L = f
        ? (0, yr.jsx)(`span`, {
            className: G(
              `absolute top-2 right-2 flex size-4 items-center justify-center rounded-full bg-primary-solid text-primary-solid shadow-sm`,
              n != null &&
                `group-hover/composer-attachment:opacity-0 group-has-focus-visible/composer-attachment:opacity-0`,
            ),
            children: (0, yr.jsx)(c, {}),
          })
        : null),
      (t[31] = n),
      (t[32] = f),
      (t[33] = L))
    : (L = t[33]);
  let R;
  t[34] !== s || t[35] !== P || t[36] !== F || t[37] !== I || t[38] !== L
    ? ((R = (0, yr.jsxs)(`div`, { className: P, children: [s, F, I, L] })),
      (t[34] = s),
      (t[35] = P),
      (t[36] = F),
      (t[37] = I),
      (t[38] = L),
      (t[39] = R))
    : (R = t[39]);
  let z;
  t[40] !== g || t[41] !== e.type || t[42] !== h
    ? ((z =
        e.type === `button` && g === `standalone`
          ? null
          : (0, yr.jsx)(`div`, {
              className: `w-0 min-w-full truncate ps-0.5 pe-2 pb-1 text-sm leading-5 font-normal tracking-normal text-secondary`,
              children: h,
            })),
      (t[40] = g),
      (t[41] = e.type),
      (t[42] = h),
      (t[43] = z))
    : (z = t[43]);
  let B;
  t[44] !== x ||
  t[45] !== k ||
  t[46] !== A ||
  t[47] !== j ||
  t[48] !== M ||
  t[49] !== N ||
  t[50] !== R ||
  t[51] !== z ||
  t[52] !== T
    ? ((B = (0, yr.jsxs)(x, {
        autoFocus: T,
        className: k,
        disabled: A,
        type: j,
        onClick: M,
        children: [N, R, z],
      })),
      (t[44] = x),
      (t[45] = k),
      (t[46] = A),
      (t[47] = j),
      (t[48] = M),
      (t[49] = N),
      (t[50] = R),
      (t[51] = z),
      (t[52] = T),
      (t[53] = B))
    : (B = t[53]);
  let V;
  t[54] !== r || t[55] !== m
    ? ((V =
        r == null
          ? null
          : (0, yr.jsx)(`div`, {
              className: G(
                `pointer-events-none absolute top-2 opacity-0 group-hover/composer-attachment:pointer-events-auto group-hover/composer-attachment:opacity-100 group-focus-within/composer-attachment:pointer-events-auto group-focus-within/composer-attachment:opacity-100`,
                m ? `start-6` : `start-2`,
              ),
              children: r,
            })),
      (t[54] = r),
      (t[55] = m),
      (t[56] = V))
    : (V = t[56]);
  let H;
  return (
    t[57] !== n || t[58] !== B || t[59] !== V || t[60] !== C || t[61] !== w
      ? ((H = (0, yr.jsxs)(`div`, { className: C, children: [w, B, V, n] })),
        (t[57] = n),
        (t[58] = B),
        (t[59] = V),
        (t[60] = C),
        (t[61] = w),
        (t[62] = H))
      : (H = t[62]),
    H
  );
}
var vr, yr;
function br() {
  return (br = e(() => {
    ((vr = Y()), H(), M(), kn(), (yr = X()));
  }))();
}
function xr(e) {
  let t = (0, Sr.c)(60),
    {
      option: r,
      hostId: i,
      layout: a,
      name: o,
      multiple: s,
      implicit: c,
      disabled: l,
      invalid: u,
      separatorBefore: d,
      onChange: m,
      onRemove: h,
      onPreview: g,
    } = e,
    _ = P(),
    v = f(),
    y;
  t[0] === r ? (y = t[1]) : ((y = ze(r)), (t[0] = r), (t[1] = y));
  let b = y,
    x = r.title ?? r.name,
    S;
  t[2] === r._meta
    ? (S = t[3])
    : ((S = L.safeParse(r._meta?.[`openai/thumbnail`] ?? r._meta?.[`openai/preview`])),
      (t[2] = r._meta),
      (t[3] = S));
  let { data: C } = S,
    w;
  t[4] === r._meta
    ? (w = t[5])
    : ((w = wr.safeParse(r._meta?.[`openai/preview`])), (t[4] = r._meta), (t[5] = w));
  let { data: T } = w,
    E;
  t[6] !== r._meta || t[7] !== T?.target
    ? ((E =
        T?.target ??
        nt.safeParse(r._meta?.[`openai/preview`]).data ??
        nt.safeParse(r._meta?.[`openai/target`]).data),
      (t[6] = r._meta),
      (t[7] = T?.target),
      (t[8] = E))
    : (E = t[8]);
  let D = E,
    O;
  t[9] !== g || t[10] !== D || t[11] !== x
    ? ((O = D == null || g == null ? void 0 : () => g(D, x)),
      (t[9] = g),
      (t[10] = D),
      (t[11] = x),
      (t[12] = O))
    : (O = t[12]);
  let k = O,
    A;
  t[13] === k
    ? (A = t[14])
    : ((A = k == null ? { type: `static` } : { type: `preview`, onClick: k }), (t[13] = k), (t[14] = A));
  let j = A,
    M;
  t[15] !== l || t[16] !== c || t[17] !== k
    ? ((M =
        !c && k != null
          ? (0, Cr.jsx)(n, {
              color: `outlineSurface`,
              radius: `full`,
              size: `composer`,
              disabled: l,
              onClick: k,
              children: (0, Cr.jsx)(p, {
                id: `composer.mcpFormElicitation.preview`,
                defaultMessage: `Preview`,
                description: `Open expanded details for a form option`,
              }),
            })
          : null),
      (t[15] = l),
      (t[16] = c),
      (t[17] = k),
      (t[18] = M))
    : (M = t[18]);
  let N = v ? b?.logoDarkUrl : b?.logoUrl,
    F;
  t[19] !== r.mimeType || t[20] !== N
    ? ((F = (0, Cr.jsx)(In, { layout: `icon`, mimeType: r.mimeType, src: N })),
      (t[19] = r.mimeType),
      (t[20] = N),
      (t[21] = F))
    : (F = t[21]);
  let I = r.mimeType ?? x,
    R;
  t[22] === I
    ? (R = t[23])
    : ((R = (0, Cr.jsx)(`span`, { className: `truncate`, children: I })), (t[22] = I), (t[23] = R));
  let z;
  t[24] !== R || t[25] !== F
    ? ((z = (0, Cr.jsxs)(Cr.Fragment, { children: [F, R] })), (t[24] = R), (t[25] = F), (t[26] = z))
    : (z = t[26]);
  let B;
  t[27] !== l || t[28] !== _ || t[29] !== h || t[30] !== x
    ? ((B =
        l || h == null
          ? void 0
          : (0, Cr.jsx)(mt, {
              className: `top-2 right-2`,
              size: `composer`,
              ariaLabel: _.formatMessage(
                {
                  id: `composer.openAIForm.removeFile`,
                  defaultMessage: `Remove {filename}`,
                  description: `Accessible label for removing a resource from an elicitation form`,
                },
                { filename: x },
              ),
              onRemove: h,
            })),
      (t[27] = l),
      (t[28] = _),
      (t[29] = h),
      (t[30] = x),
      (t[31] = B))
    : (B = t[31]);
  let V = !c && r.selected,
    H;
  t[32] !== c || t[33] !== s || t[34] !== o || t[35] !== m || t[36] !== r.uri || t[37] !== j
    ? ((H = c ? j : { type: s ? `checkbox` : `radio`, name: o, value: r.uri, onChange: m }),
      (t[32] = c),
      (t[33] = s),
      (t[34] = o),
      (t[35] = m),
      (t[36] = r.uri),
      (t[37] = j),
      (t[38] = H))
    : (H = t[38]);
  let U;
  t[39] !== i ||
  t[40] !== b?.logoDarkUrl ||
  t[41] !== b?.logoUrl ||
  t[42] !== v ||
  t[43] !== r.localPath ||
  t[44] !== r.mimeType ||
  t[45] !== r.name ||
  t[46] !== C?.src
    ? ((U =
        r.localPath == null
          ? (0, Cr.jsx)(In, {
              layout: C?.src == null ? `card-icon` : `card`,
              mimeType: r.mimeType,
              src: C?.src ?? (v ? b?.logoDarkUrl : b?.logoUrl),
            })
          : (0, Cr.jsx)(gt, {
              hostId: i,
              imageFit: `scale-down`,
              path: r.localPath,
              importKind: dt(r.name),
              fallback: (0, Cr.jsx)(In, { layout: `card`, mimeType: r.mimeType, src: void 0 }),
            })),
      (t[39] = i),
      (t[40] = b?.logoDarkUrl),
      (t[41] = b?.logoUrl),
      (t[42] = v),
      (t[43] = r.localPath),
      (t[44] = r.mimeType),
      (t[45] = r.name),
      (t[46] = C?.src),
      (t[47] = U))
    : (U = t[47]);
  let W;
  return (
    t[48] !== l ||
    t[49] !== u ||
    t[50] !== a ||
    t[51] !== d ||
    t[52] !== z ||
    t[53] !== B ||
    t[54] !== V ||
    t[55] !== H ||
    t[56] !== U ||
    t[57] !== M ||
    t[58] !== x
      ? ((W = (0, Cr.jsx)(_r, {
          layout: a,
          previewAction: M,
          metadata: z,
          action: B,
          autoFocus: !1,
          disabled: l,
          invalid: u,
          selected: V,
          separatorBefore: d,
          title: x,
          ...H,
          children: U,
        })),
        (t[48] = l),
        (t[49] = u),
        (t[50] = a),
        (t[51] = d),
        (t[52] = z),
        (t[53] = B),
        (t[54] = V),
        (t[55] = H),
        (t[56] = U),
        (t[57] = M),
        (t[58] = x),
        (t[59] = W))
      : (W = t[59]),
    W
  );
}
var Sr, Cr, wr;
function Tr() {
  return (Tr = e(() => {
    ((Sr = Y()),
      K(),
      Pe(),
      q(),
      l(),
      Ye(),
      Tt(),
      Rt(),
      ve(),
      jt(),
      E(),
      br(),
      Vn(),
      (Cr = X()),
      (wr = J({ target: nt })));
  }))();
}
function Er(e) {
  let t = (0, jr.c)(52),
    {
      field: n,
      disabled: r,
      expanded: a,
      hideDescription: o,
      hostId: c,
      invalid: l,
      name: d,
      options: f,
      required: m,
      onChange: _,
      onPickingChange: v,
      onPickFiles: y,
      onCloseExpanded: x,
      onPreview: S,
    } = e,
    C = r !== void 0 && r,
    w = a !== void 0 && a,
    T = o !== void 0 && o;
  h(s);
  let E = P(),
    D = Vt(),
    O = F(i),
    k = (0, Pr.useRef)(null),
    A = (0, Pr.useRef)(null),
    j,
    M;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = () => () => A.current?.abort()), (M = []), (t[0] = j), (t[1] = M))
    : ((j = t[0]), (M = t[1])),
    (0, Pr.useEffect)(j, M));
  let [N, I] = (0, Pr.useState)(!1),
    [L, R] = (0, Pr.useState)(!1),
    [z, B] = (0, Pr.useState)(!1),
    [V, H] = (0, Pr.useState)(null),
    U = n[`x-openai-input`],
    W = U.userOptions?.kind ?? `file`,
    ee = Oe(W === `file` ? U.userOptions?.accept : void 0),
    te;
  t[2] !== n.title || t[3] !== d
    ? ((te = n.title ?? (0, Mr.default)(d)), (t[2] = n.title), (t[3] = d), (t[4] = te))
    : (te = t[4]);
  let ne = te,
    re = n.type === `array`,
    G = re && U.selection === `implicit`,
    K =
      y == null &&
      !C &&
      !L &&
      U.userOptions != null &&
      c === `local` &&
      window.electronBridge?.getPathForFile != null,
    ie;
  t[5] !== n.minItems || t[6] !== n.type || t[7] !== m
    ? ((ie = 0),
      m && (ie = n.type === `array` ? (n.minItems ?? 0) : 1),
      (t[5] = n.minItems),
      (t[6] = n.type),
      (t[7] = m),
      (t[8] = ie))
    : (ie = t[8]);
  let ae;
  t[9] === U.options ? (ae = t[10]) : ((ae = new Set(U.options.map(Ar))), (t[9] = U.options), (t[10] = ae));
  let q = ae,
    oe;
  t[11] === q ? (oe = t[12]) : ((oe = (e) => !q.has(e.uri)), (t[11] = q), (t[12] = oe));
  let se = f.filter(oe),
    ce;
  t[13] === q ? (ce = t[14]) : ((ce = (e) => q.has(e.uri)), (t[13] = q), (t[14] = ce));
  let le = [...se, ...f.filter(ce)],
    ue = (e) => {
      Array.from(k.current?.querySelectorAll(`input`) ?? [])
        .find((t) => t.value === e)
        ?.parentElement?.scrollIntoView({
          block: `nearest`,
          inline: `nearest`,
          behavior: O ? `instant` : `smooth`,
        });
    },
    de = () => {
      document.activeElement === document.body && k.current?.closest(`form`)?.focus();
    },
    fe;
  t[15] !== re || t[16] !== _ || t[17] !== f
    ? ((fe = (e, t) => {
        if (t.aborted || e.length === 0) return;
        let n = new Set(e.map(kr));
        _(
          (0, Nr.default)([...f, ...e.map(Or)], `uri`).map((t) => ({
            ...t,
            selected: re ? t.selected || n.has(t.uri) : t.uri === e[0].uri,
          })),
        );
      }),
      (t[15] = re),
      (t[16] = _),
      (t[17] = f),
      (t[18] = fe))
    : (fe = t[18]);
  let J = fe,
    pe = (e) => {
      let t = !1,
        n = () => {
          t ||
            ((t = !0), e.signal.removeEventListener(`abort`, n), v?.(!1), e.signal.aborted || (R(!1), de()));
        };
      return (e.signal.addEventListener(`abort`, n, { once: !0 }), R(!0), H(null), v?.(!0), n);
    },
    me = async (e, t) => {
      if (C || L || U.userOptions == null || e.length === 0) return;
      let n = pe(t),
        r = Error(`File type is not accepted`);
      await Promise.all(
        e.map(async (e) => {
          let { appServerPath: t, fsPath: n, label: i } = e,
            a = await g.workspaceFiles.getMetadata?.({ hostId: c, path: n });
          if (a?.kind !== W) throw Error(`Selection does not match the requested kind`);
          if (a.kind === `file` && !$e(n, ee)) throw r;
          return { uri: b(t ?? n), localPath: n, name: u(n), title: i, selected: !0 };
        }),
      )
        .then((e) => J(e, t.signal))
        .catch((e) => {
          t.signal.aborted || H(e === r ? `type` : `selection`);
        })
        .finally(n);
    },
    he;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, Fr.jsx)(p, {
        id: `composer.openAIForm.uploadTile`,
        defaultMessage: `Upload`,
        description: `Label below the upload tile in a file picker carousel`,
      })),
      (t[19] = he))
    : (he = t[19]);
  let ge = he;
  if (W === `directory`) {
    let e;
    (t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Fr.jsx)(p, {
          id: `composer.openAIForm.addFolder`,
          defaultMessage: `Choose folder`,
          description: `Button to add a user-selected directory to an elicitation form`,
        })),
        (t[20] = e))
      : (e = t[20]),
      (ge = e));
  } else if (f.length === 0) {
    let e;
    (t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Fr.jsx)(p, {
          id: `composer.openAIForm.addFiles`,
          defaultMessage: `Upload files`,
          description: `Button to add user-selected files to an elicitation form`,
        })),
        (t[21] = e))
      : (e = t[21]),
      (ge = e));
  }
  let _e =
      U.userOptions == null
        ? null
        : (0, Fr.jsx)(_r, {
            autoFocus: !1,
            highlighted: N,
            layout: f.length === 0 ? `standalone` : `carousel`,
            disabled: C || L,
            invalid: !1,
            selected: !1,
            title: ge,
            type: `button`,
            onClick: () => {
              A.current?.abort();
              let e = new AbortController();
              if (((A.current = e), y != null)) {
                let t = pe(e);
                y(e.signal)
                  .then((t) => J(t, e.signal))
                  .catch(() => {
                    e.signal.aborted || H(`selection`);
                  })
                  .finally(t);
                return;
              }
              if (c !== `local`) {
                B(!0);
                return;
              }
              D({ accept: W === `file` ? U.userOptions?.accept : void 0, kind: W, allowMultiple: re })
                .then((t) => {
                  if (!e.signal.aborted) return me(t, e);
                })
                .catch(() => {
                  e.signal.aborted || H(`selection`);
                })
                .finally(() => {
                  e.signal.aborted || de();
                });
            },
            children:
              W === `directory`
                ? (0, Fr.jsx)(ye, { className: `text-tertiary` })
                : (0, Fr.jsx)(Se, { className: `text-tertiary` }),
          }),
    ve = (e, t, n) =>
      (0, Fr.jsx)(
        xr,
        {
          option: e,
          hostId: c,
          layout: n,
          name: n === `grid` ? `${d}-expanded` : d,
          multiple: re,
          implicit: G,
          disabled: C || L,
          invalid: l || V != null,
          separatorBefore: n === `carousel` && t === 0 && _e != null,
          onChange: () => {
            (_(f.map((t) => ({ ...t, selected: t.uri === e.uri ? !re || !t.selected : re && t.selected }))),
              n === `carousel` && ue(e.uri));
          },
          onRemove:
            !G || (U.userOptions == null && f.length <= 1) || (q.has(e.uri) && f.length <= ie)
              ? void 0
              : () => _(f.filter((t) => t.uri !== e.uri)),
          onPreview:
            S == null
              ? void 0
              : (e, t) => {
                  (x?.(), S(e, t));
                },
        },
        e.uri,
      ),
    be;
  t[22] === K
    ? (be = t[23])
    : ((be = (e) => {
        tt(e.dataTransfer) &&
          (e.preventDefault(),
          e.stopPropagation(),
          e.type === `dragenter` ? I(K) : (e.dataTransfer.dropEffect = K ? `copy` : `none`));
      }),
      (t[22] = K),
      (t[23] = be));
  let Y = be,
    xe;
  t[24] !== n.description || t[25] !== T
    ? ((xe =
        T || n.description == null
          ? null
          : (0, Fr.jsx)(`div`, {
              className: `text-size-chat-sm text-codex-description`,
              children: n.description,
            })),
      (t[24] = n.description),
      (t[25] = T),
      (t[26] = xe))
    : (xe = t[26]);
  let X = xe,
    Ce;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (e) => {
        (e.stopPropagation(),
          (!(e.relatedTarget instanceof Node) || !e.currentTarget.contains(e.relatedTarget)) && I(!1));
      }),
      (t[27] = Ce))
    : (Ce = t[27]);
  let we = (e) => {
      if (!tt(e.dataTransfer) || (e.preventDefault(), e.stopPropagation(), I(!1), !K)) return;
      let t = Be(Array.from(e.dataTransfer.files), window.electronBridge?.getPathForFile, e.dataTransfer);
      if (t.length === 0 || (!re && t.length > 1)) {
        H(`selection`);
        return;
      }
      A.current?.abort();
      let n = new AbortController();
      ((A.current = n), me(t, n));
    },
    Te =
      f.length === 0 && _e != null
        ? (0, Fr.jsxs)(`div`, {
            className: `flex flex-col gap-2 px-4`,
            role: `group`,
            "aria-label": ne,
            children: [X, _e],
          })
        : (0, Fr.jsxs)(Xt, {
            ariaInvalid: l || V != null,
            ariaLabel: ne,
            backLabel: E.formatMessage({
              id: `composer.openAIForm.previousFiles`,
              defaultMessage: `Show previous files`,
              description: `Accessible label for scrolling a form file picker backward`,
            }),
            forwardLabel: E.formatMessage({
              id: `composer.openAIForm.moreFiles`,
              defaultMessage: `Show more files`,
              description: `Accessible label for scrolling a form file picker forward`,
            }),
            header: X,
            role: re ? `group` : `radiogroup`,
            shouldUseReducedMotion: O,
            children: [_e, le.map((e, t) => ve(e, t, `carousel`))],
          }),
    Ee =
      w && x != null
        ? (0, Fr.jsx)(Ir, {
            title: n.title,
            accessibilityLabel: ne,
            multiple: re,
            options: le,
            renderOption: (e, t) => ve(e, t, `grid`),
            onClose: x,
            onOptionActivate: ue,
            onRestoreFocus: () => {
              (
                k.current?.querySelector(`input:not(:disabled), button:not(:disabled)`) ??
                k.current?.closest(`form`)?.querySelector(`button[type="submit"]`)
              )?.focus();
            },
          })
        : null,
    De;
  t[28] !== ee ||
  t[29] !== me ||
  t[30] !== c ||
  t[31] !== W ||
  t[32] !== re ||
  t[33] !== z ||
  t[34] !== de ||
  t[35] !== B
    ? ((De = z
        ? (0, Fr.jsx)(Ut, {
            acceptedFileExtensions: ee,
            hostId: c,
            kind: W,
            multiple: re,
            onClose: () => B(!1),
            onRestoreFocus: de,
            onSelect: (e) => {
              let t = A.current;
              t != null && !t.signal.aborted && me(e.map(Dr), t);
            },
          })
        : null),
      (t[28] = ee),
      (t[29] = me),
      (t[30] = c),
      (t[31] = W),
      (t[32] = re),
      (t[33] = z),
      (t[34] = de),
      (t[35] = B),
      (t[36] = De))
    : (De = t[36]);
  let ke;
  t[37] === V
    ? (ke = t[38])
    : ((ke = V
        ? (0, Fr.jsx)(`div`, {
            className: `px-4 text-size-chat-sm text-danger`,
            role: `alert`,
            children:
              V === `selection`
                ? (0, Fr.jsx)(p, {
                    id: `composer.openAIForm.fileSelectionFailed`,
                    defaultMessage: `These files or folders could not be added`,
                    description: `Error when selected files or folders cannot be accessed or do not match the form's requested kind or number of items`,
                  })
                : (0, Fr.jsx)(p, {
                    id: `composer.openAIForm.fileTypeRejected`,
                    defaultMessage: `Choose a file of an allowed type`,
                    description: `Error for a file whose type does not match the file types accepted by the picker`,
                  }),
          })
        : null),
      (t[37] = V),
      (t[38] = ke));
  let Ae;
  t[39] !== n || t[40] !== l
    ? ((Ae = l
        ? (0, Fr.jsx)(`div`, {
            className: `px-4 text-size-chat-sm text-danger`,
            children: (0, Fr.jsx)(Jn, { schema: n }),
          })
        : null),
      (t[39] = n),
      (t[40] = l),
      (t[41] = Ae))
    : (Ae = t[41]);
  let je;
  return (
    t[42] !== k ||
    t[43] !== Y ||
    t[44] !== Ce ||
    t[45] !== we ||
    t[46] !== Te ||
    t[47] !== Ee ||
    t[48] !== De ||
    t[49] !== ke ||
    t[50] !== Ae
      ? ((je = (0, Fr.jsxs)(`div`, {
          ref: k,
          className: `flex w-full min-w-0 flex-col gap-2`,
          "data-mcp-form-file-drop": !0,
          onDragEnter: Y,
          onDragOver: Y,
          onDragLeave: Ce,
          onDrop: we,
          children: [Te, Ee, De, ke, Ae],
        })),
        (t[42] = k),
        (t[43] = Y),
        (t[44] = Ce),
        (t[45] = we),
        (t[46] = Te),
        (t[47] = Ee),
        (t[48] = De),
        (t[49] = ke),
        (t[50] = Ae),
        (t[51] = je))
      : (je = t[51]),
    je
  );
}
function Dr(e) {
  return { path: e, fsPath: e, label: u(e) };
}
function Or(e) {
  return { ...e, selected: !0 };
}
function kr(e) {
  return e.uri;
}
function Ar(e) {
  return e.uri;
}
var jr, Mr, Nr, Pr, Fr, Ir;
function Lr() {
  return (Lr = e(() => {
    ((jr = Y()),
      (Mr = t(Ue(), 1)),
      (Nr = t(ge(), 1)),
      T(),
      he(),
      (Pr = we()),
      q(),
      Re(),
      pt(),
      ct(),
      M(),
      Te(),
      me(),
      xe(),
      k(),
      qe(),
      de(),
      Ht(),
      v(),
      Zn(),
      br(),
      Yt(),
      Tr(),
      (Fr = X()),
      pe(),
      (Ir = o(
        async () =>
          (
            await re(
              async () => {
                let { FileOptionsDialog: e } = await import(`./file-options-dialog-731360d4b99e.js`);
                return { FileOptionsDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5]),
              import.meta.url,
            )
          ).FileOptionsDialog,
      )));
  }))();
}
function Rr(e) {
  let t = (0, zr.c)(55),
    {
      autoFocus: n,
      field: r,
      hideLabel: a,
      hostId: o,
      invalid: s,
      name: c,
      value: l,
      onChange: f,
      onPickFile: m,
    } = e,
    h = a !== void 0 && a,
    g = P(),
    _ = Vt(),
    v = F(i),
    [y, S] = (0, Vr.useState)(!1),
    [C, T] = (0, Vr.useState)(!1),
    E = C ? `aspect-[4/5]` : `aspect-video`,
    D;
  t[0] !== r.title || t[1] !== c
    ? ((D = r.title ?? (0, Br.default)(c)), (t[0] = r.title), (t[1] = c), (t[2] = D))
    : (D = t[2]);
  let O = D,
    k = r.file != null && De(r, l) && !r.items.some((e) => e.id === l) ? l : null,
    A;
  t[3] === g
    ? (A = t[4])
    : ((A = g.formatMessage({
        id: `composer.imagePicker.previous`,
        defaultMessage: `Show previous templates`,
        description: `Accessible label for scrolling an image picker backward`,
      })),
      (t[3] = g),
      (t[4] = A));
  let j;
  t[5] === g
    ? (j = t[6])
    : ((j = g.formatMessage({
        id: `composer.imagePicker.next`,
        defaultMessage: `Show more templates`,
        description: `Accessible label for scrolling an image picker forward`,
      })),
      (t[5] = g),
      (t[6] = j));
  let M;
  t[7] !== r.title || t[8] !== h
    ? ((M =
        h || r.title == null
          ? null
          : (0, Hr.jsx)(`div`, { className: `text-sm font-medium`, children: r.title })),
      (t[7] = r.title),
      (t[8] = h),
      (t[9] = M))
    : (M = t[9]);
  let N;
  t[10] !== r.file ||
  t[11] !== r.title ||
  t[12] !== o ||
  t[13] !== s ||
  t[14] !== f ||
  t[15] !== m ||
  t[16] !== _ ||
  t[17] !== E ||
  t[18] !== k
    ? ((N =
        r.file == null
          ? null
          : (0, Hr.jsx)(Hr.Fragment, {
              children: (0, Hr.jsxs)(`button`, {
                className: `group -m-1 flex w-fit shrink-0 cursor-interaction snap-start flex-col gap-1.5 rounded-2xl p-1 text-start select-none`,
                type: `button`,
                onClick: () => {
                  if (m != null) {
                    m().then((e) => {
                      e != null && f(e);
                    });
                    return;
                  }
                  if (o !== `local`) {
                    S(!0);
                    return;
                  }
                  _({
                    accept: r.file?.accept,
                    allowMultiple: !1,
                    pickerTitle: r.file?.title ?? r.title,
                  }).then((e) => {
                    let [t] = e;
                    t != null && f(b(t.fsPath));
                  });
                },
                children: [
                  (0, Hr.jsx)(`div`, {
                    className: G(
                      `flex h-34 items-center justify-center overflow-hidden rounded-xl border bg-surface shadow-sm ring-4 group-focus-within:ring-border-strong`,
                      E,
                      k == null
                        ? `border-default ring-transparent group-hover:ring-border-subtle`
                        : `border-strong ring-border-strong`,
                      s && k == null && `border-text-danger ring-text-danger/20`,
                    ),
                    children:
                      k == null
                        ? (0, Hr.jsx)(x, { className: `text-secondary`, asset: w, "aria-hidden": !0 })
                        : (0, Hr.jsxs)(`div`, {
                            className: `flex max-w-full flex-col items-center gap-2 px-4 text-secondary`,
                            children: [
                              (0, Hr.jsx)(x, { asset: d, "aria-hidden": !0 }),
                              (0, Hr.jsx)(`span`, {
                                className: `max-w-full truncate text-sm`,
                                children: u(decodeURIComponent(new URL(k).pathname)),
                              }),
                            ],
                          }),
                  }),
                  (0, Hr.jsx)(`div`, {
                    className: `w-0 min-w-full truncate ps-0.5 pe-2 pb-1 text-sm leading-5 font-normal tracking-normal text-secondary`,
                    children:
                      r.file.title ??
                      (0, Hr.jsx)(p, {
                        id: `composer.imagePicker.chooseFile`,
                        defaultMessage: `Choose a file`,
                        description: `Label for choosing a local file instead of a predefined image-picker option`,
                      }),
                  }),
                ],
              }),
            })),
      (t[10] = r.file),
      (t[11] = r.title),
      (t[12] = o),
      (t[13] = s),
      (t[14] = f),
      (t[15] = m),
      (t[16] = _),
      (t[17] = E),
      (t[18] = k),
      (t[19] = N))
    : (N = t[19]);
  let I;
  if (
    t[20] !== n ||
    t[21] !== r.items ||
    t[22] !== s ||
    t[23] !== C ||
    t[24] !== c ||
    t[25] !== f ||
    t[26] !== l
  ) {
    let e;
    (t[28] !== n || t[29] !== s || t[30] !== C || t[31] !== c || t[32] !== f || t[33] !== l
      ? ((e = (e, t) =>
          (0, Hr.jsx)(
            _r,
            {
              autoFocus: n && t === 0,
              invalid: s,
              isPortrait: C,
              name: c,
              selected: l === e.id,
              title: e.title,
              type: `radio`,
              value: e.id,
              onChange: () => f(e.id),
              children: (0, Hr.jsx)(`img`, {
                alt: ``,
                className: `block h-full w-full object-scale-down`,
                decoding: `async`,
                draggable: !1,
                loading: `lazy`,
                onLoad:
                  t === 0
                    ? (e) => {
                        T(e.currentTarget.naturalHeight > e.currentTarget.naturalWidth);
                      }
                    : void 0,
                src: e.image,
              }),
            },
            e.id,
          )),
        (t[28] = n),
        (t[29] = s),
        (t[30] = C),
        (t[31] = c),
        (t[32] = f),
        (t[33] = l),
        (t[34] = e))
      : (e = t[34]),
      (I = r.items.map(e)),
      (t[20] = n),
      (t[21] = r.items),
      (t[22] = s),
      (t[23] = C),
      (t[24] = c),
      (t[25] = f),
      (t[26] = l),
      (t[27] = I));
  } else I = t[27];
  let L;
  t[35] !== s ||
  t[36] !== v ||
  t[37] !== A ||
  t[38] !== j ||
  t[39] !== M ||
  t[40] !== N ||
  t[41] !== I ||
  t[42] !== O
    ? ((L = (0, Hr.jsxs)(Xt, {
        ariaInvalid: s,
        ariaLabel: O,
        backLabel: A,
        forwardLabel: j,
        header: M,
        role: `radiogroup`,
        shouldUseReducedMotion: v,
        children: [N, I],
      })),
      (t[35] = s),
      (t[36] = v),
      (t[37] = A),
      (t[38] = j),
      (t[39] = M),
      (t[40] = N),
      (t[41] = I),
      (t[42] = O),
      (t[43] = L))
    : (L = t[43]);
  let R;
  t[44] !== o || t[45] !== y || t[46] !== f
    ? ((R = y
        ? (0, Hr.jsx)(Ut, {
            hostId: o,
            multiple: !1,
            onClose: () => S(!1),
            onSelect: (e) => {
              let t = e[0];
              t != null && f(b(t));
            },
          })
        : null),
      (t[44] = o),
      (t[45] = y),
      (t[46] = f),
      (t[47] = R))
    : (R = t[47]);
  let z;
  t[48] !== r || t[49] !== s
    ? ((z = s
        ? (0, Hr.jsx)(`div`, {
            className: `px-4 text-size-chat-sm text-danger`,
            children: (0, Hr.jsx)(Jn, { schema: r }),
          })
        : null),
      (t[48] = r),
      (t[49] = s),
      (t[50] = z))
    : (z = t[50]);
  let B;
  return (
    t[51] !== z || t[52] !== L || t[53] !== R
      ? ((B = (0, Hr.jsxs)(`div`, { className: `flex w-full min-w-0 flex-col gap-2`, children: [L, R, z] })),
        (t[51] = z),
        (t[52] = L),
        (t[53] = R),
        (t[54] = B))
      : (B = t[54]),
    B
  );
}
var zr, Br, Vr, Hr;
function Ur() {
  return (Ur = e(() => {
    ((zr = Y()),
      m(),
      S(),
      H(),
      (Br = t(Ue(), 1)),
      T(),
      (Vr = we()),
      q(),
      pt(),
      ct(),
      C(),
      k(),
      de(),
      v(),
      Zn(),
      br(),
      Yt(),
      Je(),
      (Hr = X()));
  }))();
}
function Wr(e) {
  let t = (0, Kr.c)(91),
    {
      autoFocus: n,
      disabled: r,
      interactionDisabled: i,
      field: a,
      fieldCount: o,
      draft: s,
      expanded: c,
      hostId: l,
      invalid: u,
      showHeader: d,
      onCloseExpanded: f,
      onDraftChange: p,
      onValueChange: m,
      onPickLegacyFile: h,
      onPickingChange: g,
      onPickFiles: _,
      onPreview: v,
    } = e,
    y,
    b,
    x,
    S,
    C;
  if (
    t[0] !== n ||
    t[1] !== r ||
    t[2] !== s ||
    t[3] !== c ||
    t[4] !== a ||
    t[5] !== o ||
    t[6] !== l ||
    t[7] !== i ||
    t[8] !== u ||
    t[9] !== f ||
    t[10] !== p ||
    t[11] !== _ ||
    t[12] !== h ||
    t[13] !== g ||
    t[14] !== v ||
    t[15] !== m ||
    t[16] !== d
  ) {
    let e = a != null && (Fe(a.schema) || Wt(a.schema)),
      w;
    t[22] === a ? (w = t[23]) : ((w = a != null && _t(a.schema)), (t[22] = a), (t[23] = w));
    let T = w,
      E = T || a?.schema.type === `boolean` || (a?.schema.type === `array` && !e);
    if (((y = null), a != null)) {
      let { name: e, schema: b, required: x } = a;
      if (Fe(b)) {
        let n = s.fileOptions[e],
          i;
        t[24] !== e || t[25] !== p
          ? ((i = (t) => p((n) => ({ ...n, fileOptions: { ...n.fileOptions, [e]: t } }), e)),
            (t[24] = e),
            (t[25] = p),
            (t[26] = i))
          : (i = t[26]);
        let a;
        t[27] !== e || t[28] !== _
          ? ((a = _ == null ? void 0 : (t) => _(e, t)), (t[27] = e), (t[28] = _), (t[29] = a))
          : (a = t[29]);
        let o;
        (t[30] !== r ||
        t[31] !== c ||
        t[32] !== e ||
        t[33] !== l ||
        t[34] !== u ||
        t[35] !== f ||
        t[36] !== g ||
        t[37] !== v ||
        t[38] !== x ||
        t[39] !== b ||
        t[40] !== d ||
        t[41] !== n ||
        t[42] !== i ||
        t[43] !== a
          ? ((o = (0, qr.jsx)(Er, {
              field: b,
              disabled: r,
              expanded: c,
              hideDescription: d,
              onCloseExpanded: f,
              hostId: l,
              invalid: u,
              name: e,
              options: n,
              required: x,
              onPreview: v,
              onChange: i,
              onPickingChange: g,
              onPickFiles: a,
            })),
            (t[30] = r),
            (t[31] = c),
            (t[32] = e),
            (t[33] = l),
            (t[34] = u),
            (t[35] = f),
            (t[36] = g),
            (t[37] = v),
            (t[38] = x),
            (t[39] = b),
            (t[40] = d),
            (t[41] = n),
            (t[42] = i),
            (t[43] = a),
            (t[44] = o))
          : (o = t[44]),
          (y = o));
      } else if (Wt(b)) {
        let r = s.values[e],
          i;
        t[45] !== e || t[46] !== m
          ? ((i = (t) => m(e, t)), (t[45] = e), (t[46] = m), (t[47] = i))
          : (i = t[47]);
        let a;
        t[48] !== e || t[49] !== h
          ? ((a = h == null ? void 0 : () => h(e)), (t[48] = e), (t[49] = h), (t[50] = a))
          : (a = t[50]);
        let o;
        (t[51] !== n ||
        t[52] !== e ||
        t[53] !== l ||
        t[54] !== u ||
        t[55] !== b ||
        t[56] !== d ||
        t[57] !== r ||
        t[58] !== i ||
        t[59] !== a
          ? ((o = (0, qr.jsx)(Rr, {
              autoFocus: n,
              field: b,
              hideLabel: d,
              hostId: l,
              invalid: u,
              name: e,
              value: r,
              onChange: i,
              onPickFile: a,
            })),
            (t[51] = n),
            (t[52] = e),
            (t[53] = l),
            (t[54] = u),
            (t[55] = b),
            (t[56] = d),
            (t[57] = r),
            (t[58] = i),
            (t[59] = a),
            (t[60] = o))
          : (o = t[60]),
          (y = o));
      } else {
        let r = n && !T,
          a = s.fieldIndex < o - 1,
          c;
        t[61] !== e || t[62] !== x || t[63] !== b
          ? ((c = { name: e, required: x, schema: b }), (t[61] = e), (t[62] = x), (t[63] = b), (t[64] = c))
          : (c = t[64]);
        let l = s.customDrafts[e],
          f;
        t[65] !== e || t[66] !== p
          ? ((f = (t) => p((n) => ({ ...n, customDrafts: { ...n.customDrafts, [e]: t } }), e)),
            (t[65] = e),
            (t[66] = p),
            (t[67] = f))
          : (f = t[67]);
        let h = s.values[e],
          g;
        t[68] !== e || t[69] !== m
          ? ((g = (t, n) => m(e, t, n)), (t[68] = e), (t[69] = m), (t[70] = g))
          : (g = t[70]);
        let _;
        (t[71] !== i ||
        t[72] !== u ||
        t[73] !== d ||
        t[74] !== f ||
        t[75] !== h ||
        t[76] !== g ||
        t[77] !== r ||
        t[78] !== a ||
        t[79] !== c ||
        t[80] !== l
          ? ((_ = (0, qr.jsx)(ur, {
              disabled: i,
              autoFocus: r,
              hasNextField: a,
              field: c,
              customDraft: l,
              onCustomDraftChange: f,
              hideLabel: d,
              hideDescription: d,
              invalid: u,
              value: h,
              onChange: g,
            })),
            (t[71] = i),
            (t[72] = u),
            (t[73] = d),
            (t[74] = f),
            (t[75] = h),
            (t[76] = g),
            (t[77] = r),
            (t[78] = a),
            (t[79] = c),
            (t[80] = l),
            (t[81] = _))
          : (_ = t[81]),
          (y = _));
      }
    }
    ((C = `max-h-96 min-h-0 overflow-y-auto overscroll-contain`),
      (b = n && (e || T) ? Gr : void 0),
      (x = -1),
      (S = G(
        `flex min-w-0 flex-col gap-3 pb-4 outline-none`,
        E ? `px-3` : [!e && `px-2`, d || o > 1 ? e && `pt-1` : `pt-3`],
      )),
      (t[0] = n),
      (t[1] = r),
      (t[2] = s),
      (t[3] = c),
      (t[4] = a),
      (t[5] = o),
      (t[6] = l),
      (t[7] = i),
      (t[8] = u),
      (t[9] = f),
      (t[10] = p),
      (t[11] = _),
      (t[12] = h),
      (t[13] = g),
      (t[14] = v),
      (t[15] = m),
      (t[16] = d),
      (t[17] = y),
      (t[18] = b),
      (t[19] = x),
      (t[20] = S),
      (t[21] = C));
  } else ((y = t[17]), (b = t[18]), (x = t[19]), (S = t[20]), (C = t[21]));
  let w;
  t[82] !== y || t[83] !== i || t[84] !== b || t[85] !== x || t[86] !== S
    ? ((w = (0, qr.jsx)(`fieldset`, { ref: b, tabIndex: x, className: S, disabled: i, children: y })),
      (t[82] = y),
      (t[83] = i),
      (t[84] = b),
      (t[85] = x),
      (t[86] = S),
      (t[87] = w))
    : (w = t[87]);
  let T;
  return (
    t[88] !== C || t[89] !== w
      ? ((T = (0, qr.jsx)(`div`, { className: C, children: w })), (t[88] = C), (t[89] = w), (t[90] = T))
      : (T = t[90]),
    T
  );
}
function Gr(e) {
  e != null && !e.contains(document.activeElement) && e.focus();
}
var Kr, qr;
function Jr() {
  return (Jr = e(() => {
    ((Kr = Y()), H(), gr(), Lr(), rt(), Je(), Ur(), (qr = X()));
  }))();
}
function Yr(e) {
  let t = (0, Xr.c)(39),
    {
      disabled: r,
      isSubmitting: i,
      elicitation: a,
      fieldTitle: o,
      fieldDescription: s,
      fieldIndex: c,
      fieldCount: l,
      showHeader: u,
      onChangeField: d,
      onCancel: f,
    } = e,
    m = i !== void 0 && i,
    h = P();
  if (!u && l <= 1) return null;
  let g = u && (o || s) ? `pb-3` : `pb-4`,
    _;
  t[0] === g
    ? (_ = t[1])
    : ((_ = G(`flex shrink-0 flex-col gap-1 ps-5 pe-4 pt-4`, g)), (t[0] = g), (t[1] = _));
  let v = l > 1 && `flex-wrap`,
    y;
  t[2] === v ? (y = t[3]) : ((y = G(`flex items-start justify-between gap-3`, v)), (t[2] = v), (t[3] = y));
  let b;
  t[4] !== a || t[5] !== l || t[6] !== u
    ? ((b =
        u &&
        (0, Zr.jsx)(`span`, {
          className: G(
            `min-w-0 text-base leading-5 font-medium break-words whitespace-pre-wrap text-default`,
            l > 1 && `flex-1 basis-40`,
          ),
          children: a.message,
        })),
      (t[4] = a),
      (t[5] = l),
      (t[6] = u),
      (t[7] = b))
    : (b = t[7]);
  let S;
  t[8] !== r || t[9] !== l || t[10] !== c || t[11] !== h || t[12] !== d
    ? ((S =
        l > 1
          ? (0, Zr.jsxs)(Zr.Fragment, {
              children: [
                (0, Zr.jsx)(n, {
                  "aria-label": h.formatMessage({
                    id: `requestInputPanel.previousQuestion`,
                    defaultMessage: `Previous question`,
                    description: `Action to return to the previous field of an MCP form without losing entered answers`,
                  }),
                  color: `ghostSecondary`,
                  disabled: r || c === 0,
                  size: `compact`,
                  uniform: !0,
                  onClick: () => d(c - 1),
                  children: (0, Zr.jsx)(x, { asset: oe }),
                }),
                (0, Zr.jsx)(`span`, {
                  className: `@max-md/request-card:sr-only`,
                  role: `status`,
                  children: (0, Zr.jsx)(p, {
                    id: `composer.mcpFormElicitation.progress`,
                    defaultMessage: `{current} of {total}`,
                    description: `Progress through the fields of an MCP form, showing the current field number and total number of fields`,
                    values: { current: c + 1, total: l },
                  }),
                }),
                (0, Zr.jsx)(n, {
                  "aria-label": h.formatMessage({
                    id: `requestInputPanel.nextQuestion`,
                    defaultMessage: `Next question`,
                    description: `Action to browse to the next question without submitting an answer`,
                  }),
                  color: `ghostSecondary`,
                  disabled: r || c >= l - 1,
                  size: `compact`,
                  uniform: !0,
                  onClick: () => d(c + 1),
                  children: (0, Zr.jsx)(x, { asset: Ce }),
                }),
              ],
            })
          : null),
      (t[8] = r),
      (t[9] = l),
      (t[10] = c),
      (t[11] = h),
      (t[12] = d),
      (t[13] = S))
    : (S = t[13]);
  let C;
  t[14] === h
    ? (C = t[15])
    : ((C = h.formatMessage({
        id: `composer.mcpFormElicitation.cancel.ariaLabel`,
        defaultMessage: `Cancel`,
        description: `Accessible label for canceling an MCP form elicitation`,
      })),
      (t[14] = h),
      (t[15] = C));
  let w;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Zr.jsx)(x, { "aria-hidden": !1, asset: A })), (t[16] = w))
    : (w = t[16]);
  let T;
  t[17] !== m || t[18] !== f || t[19] !== C
    ? ((T = (0, Zr.jsx)(n, {
        "aria-label": C,
        color: `ghostSecondary`,
        size: `compact`,
        uniform: !0,
        disabled: m,
        onClick: f,
        children: w,
      })),
      (t[17] = m),
      (t[18] = f),
      (t[19] = C),
      (t[20] = T))
    : (T = t[20]);
  let E;
  t[21] !== T || t[22] !== S
    ? ((E = (0, Zr.jsxs)(`div`, {
        className: `ms-auto flex h-5 shrink-0 items-center gap-1 text-xs leading-5 text-codex-description select-none`,
        children: [S, T],
      })),
      (t[21] = T),
      (t[22] = S),
      (t[23] = E))
    : (E = t[23]);
  let D;
  t[24] !== E || t[25] !== y || t[26] !== b
    ? ((D = (0, Zr.jsxs)(`div`, { className: y, children: [b, E] })),
      (t[24] = E),
      (t[25] = y),
      (t[26] = b),
      (t[27] = D))
    : (D = t[27]);
  let O;
  t[28] !== o || t[29] !== u
    ? ((O =
        u &&
        o &&
        (0, Zr.jsx)(`div`, {
          className: `text-base leading-5 font-medium break-words whitespace-pre-wrap text-secondary`,
          children: o,
        })),
      (t[28] = o),
      (t[29] = u),
      (t[30] = O))
    : (O = t[30]);
  let k;
  t[31] !== s || t[32] !== u
    ? ((k =
        u &&
        s &&
        (0, Zr.jsx)(`div`, {
          className: `text-xs leading-4 font-normal break-words whitespace-pre-wrap text-tertiary`,
          children: s,
        })),
      (t[31] = s),
      (t[32] = u),
      (t[33] = k))
    : (k = t[33]);
  let j;
  return (
    t[34] !== D || t[35] !== O || t[36] !== k || t[37] !== _
      ? ((j = (0, Zr.jsxs)(`div`, { className: _, children: [D, O, k] })),
        (t[34] = D),
        (t[35] = O),
        (t[36] = k),
        (t[37] = _),
        (t[38] = j))
      : (j = t[38]),
    j
  );
}
var Xr, Zr;
function Qr() {
  return (Qr = e(() => {
    ((Xr = Y()), a(), W(), _(), H(), q(), ve(), C(), (Zr = X()));
  }))();
}
function $r(e) {
  let t = (0, ii.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = e.standalone ? (0, oi.jsx)(ei, { ...e }) : (0, oi.jsx)(ni, { ...e })), (t[0] = e), (t[1] = n)),
    n
  );
}
function ei(e) {
  let t = (0, ii.c)(23),
    {
      attribution: n,
      formType: r,
      autoResolution: i,
      confirmationPresentation: a,
      confirmationSucceeded: o,
      conversationId: c,
      elicitation: l,
      hostId: u,
      requestId: d,
      turnId: f,
      onUserInteraction: p,
      onOpenInThread: m,
      onStandaloneResponseChange: g,
      onReply: _,
      retainDraft: v,
      onPickLegacyFile: y,
      onPickFiles: b,
      validateContent: x,
      disabled: S,
      isSubmitting: C,
      onPreview: w,
    } = e,
    T = v !== void 0 && v,
    E = S !== void 0 && S,
    D = C !== void 0 && C,
    O = h(s),
    k = We(),
    A = l.kind === `formElicitation`,
    j;
  t[0] === l ? (j = t[1]) : ((j = Zt(l)), (t[0] = l), (t[1] = j));
  let M = j,
    N = M?.field ?? null,
    P = st(l.schema),
    I = P[0],
    L = P.length === 1 && I != null && Wt(I.schema) ? I.schema : null,
    R = L != null,
    z;
  t[2] !== l.message || t[3] !== R
    ? ((z = !R && l.message.trim().length > 0), (t[2] = l.message), (t[3] = R), (t[4] = z))
    : (z = t[4]);
  let B = z,
    V = Me(u, c, d),
    H = F(Ge).get(V),
    U;
  t[5] === l ? (U = t[6]) : ((U = () => _n(l)), (t[5] = l), (t[6] = U));
  let [W, ee] = (0, ai.useState)(U),
    te = H?.requestId === d && `kind` in H.draft && H.draft.kind === l.kind ? H.draft : _n(l),
    ne = _ != null && !T ? W : te,
    { values: re, fieldIndex: G } = ne,
    K = P[G],
    ie = K?.schema.type === `string` && _t(K.schema) ? Ke(K.schema) : null,
    ae = K == null ? void 0 : re[K.name],
    q = G >= P.length - 1,
    [oe, se] = (0, ai.useState)(null),
    [ce, le] = (0, ai.useState)(0),
    [ue, de] = (0, ai.useState)(!1),
    fe = (0, ai.useRef)(!1),
    J = E || D || ue || ce > 0,
    pe;
  t[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((pe = []), (t[7] = pe)) : (pe = t[7]);
  let [me, he] = (0, ai.useState)(pe),
    ge = (0, ai.useRef)(null),
    _e;
  (t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = () => () => {
        ge.current != null && (clearTimeout(ge.current), (ge.current = null));
      }),
      (t[8] = _e))
    : (_e = t[8]),
    (0, ai.useEffect)(_e, [V, J]));
  let ve = () => {
    ge.current != null && (clearTimeout(ge.current), (ge.current = null));
  };
  (0, ai.useEffect)(() => {
    L != null && _ == null && xt(O, { hostId: u, requestId: d }, L.items.length, { threadId: c, turnId: f });
  }, [c, u, _, d, O, L, f]);
  let ye = (e, t) => {
      if (_ != null && !T) ee(e);
      else {
        let t = O.get(Ge).get(V),
          n = t != null && `kind` in t.draft && t.draft.kind === l.kind ? t.draft : _n(l);
        wt(O, V, { conversationId: c, draft: e(n), requestId: d, cleanupOwner: T ? `hosted` : void 0 });
      }
      t != null && he((e) => e.filter((e) => e !== t));
    },
    be = (e, t, n) => {
      let r = n !== void 0 && n;
      J ||
        (ve(),
        ye((n) => ({ ...n, values: { ...n.values, [e]: t } }), e),
        r &&
          !q &&
          (ge.current = setTimeout(() => {
            ((ge.current = null),
              ye((t) =>
                t.fieldIndex === G && !vn(l, t, x).invalidFieldNames.includes(e)
                  ? { ...t, fieldIndex: G + 1 }
                  : t,
              ));
          }, 180)));
    },
    Y = (e, t) => {
      if ((ve(), D || fe.current)) return Promise.resolve(!1);
      if (m != null) return (J || m(), Promise.resolve(!1));
      if ((Ne(O, { action: e, formType: r ?? (A ? `mcp` : `openai`), identity: n }), _ != null))
        return _(e, t);
      let i = () => ot(O, u).replyWithMcpServerElicitationResponse(c, d, St(e, null, t ?? {}));
      return g == null
        ? i()
        : ((fe.current = !0),
          de(!0),
          g(`submitting`),
          Promise.resolve()
            .then(i)
            .then(
              () => (g({ accept: `accepted`, decline: `declined`, cancel: `canceled` }[e]), !0),
              () => (g(`failed`), !1),
            )
            .finally(() => {
              ((fe.current = !1), de(!1));
            }));
    },
    xe = () => {
      if ((ve(), J)) return;
      if (m != null) {
        m();
        return;
      }
      let e = vn(l, N == null ? ne : { ...ne, values: { [N]: !0 } }, x);
      if (!q) {
        let t = e.invalidFieldNames.filter((e) => e === K?.name);
        (he(t), t.length === 0 && (se(null), ye((e) => ({ ...e, fieldIndex: G + 1 }))));
        return;
      }
      if ((he(e.invalidFieldNames), e.content == null)) {
        let t = P.findIndex((t) => e.invalidFieldNames.includes(t.name));
        t >= 0 && ye((e) => ({ ...e, fieldIndex: t }));
        return;
      }
      let t = Y(`accept`, e.content);
      if (_ != null || L == null || I == null) return;
      let n = e.content[I.name];
      if (typeof n != `string`) return;
      let r = L.items.findIndex((e) => e.id === n);
      r < 0 ||
        t.then((e) => {
          e !== !1 && ut(O, { hostId: u, requestId: d }, n, r);
        });
    },
    Se = (e) => {
      (ve(), !J && (se(null), ye((t) => ({ ...t, fieldIndex: Math.max(0, Math.min(e, P.length - 1)) }))));
    },
    X = () => {
      (_ ?? Nt(O, { hostId: u, requestId: d }), Y(`decline`));
    },
    Ce = (e) => {
      if (
        !e.defaultPrevented &&
        !e.nativeEvent.isComposing &&
        e.target instanceof HTMLElement &&
        e.currentTarget.contains(e.target)
      ) {
        if (e.key === `Escape`) {
          (e.preventDefault(), Y(`cancel`));
          return;
        }
        if (!J) {
          if (Xe(e.nativeEvent, `CmdOrCtrl+Enter`)) {
            (e.preventDefault(), e.repeat || e.currentTarget.requestSubmit());
            return;
          }
          if (!(
            e.altKey ||
            e.ctrlKey ||
            e.metaKey ||
            e.shiftKey ||
            e.target.closest(
              `textarea, select, input:not([type="radio"]):not([type="checkbox"]), [contenteditable]:not([contenteditable="false"]), [data-mcp-form-file-drop], [role="radiogroup"]`,
            ) != null
          )) {
            if (e.key === `ArrowLeft` || e.key === `ArrowRight`) {
              (e.preventDefault(), e.repeat || Se(G + (e.key === `ArrowRight` ? 1 : -1)));
              return;
            }
            if (/^[1-9]$/.test(e.key)) {
              let t = e.currentTarget.querySelectorAll(
                `[data-mcp-form-choices] :is(input[type="radio"], button[role="checkbox"]):not(:disabled)`,
              )[Number(e.key) - 1];
              t != null && (e.preventDefault(), e.repeat || t.click());
            }
          }
        }
      }
    },
    we = b == null && P.some(ti),
    Te = Ee(_ == null && we ? ci : null, u);
  if (M?.presentation != null) {
    let e;
    return (
      t[9] !== l || t[10] !== d
        ? ((e = JSON.stringify([d, l])), (t[9] = l), (t[10] = d), (t[11] = e))
        : (e = t[11]),
      (0, oi.jsx)(Kt, {
        className: `contents`,
        children: (0, oi.jsx)(
          dn,
          {
            presentation: M.presentation,
            message: l.message,
            disabled: J,
            isSubmitting: D,
            succeeded: o,
            standalone: a === `standalone`,
            onOpen: p,
            onOpenInThread: m,
            onConfirm: xe,
          },
          e,
        ),
      })
    );
  }
  if (we && !Te) {
    let e;
    return (
      t[12] !== c ||
      t[13] !== l.serverName ||
      t[14] !== u ||
      t[15] !== D ||
      t[16] !== _ ||
      t[17] !== g ||
      t[18] !== d
        ? ((e = (0, oi.jsx)(bn, {
            conversationId: c,
            hostId: u,
            isSubmitting: D,
            requestId: d,
            serverName: l.serverName,
            onReply: _,
            onStandaloneResponseChange: g,
          })),
          (t[12] = c),
          (t[13] = l.serverName),
          (t[14] = u),
          (t[15] = D),
          (t[16] = _),
          (t[17] = g),
          (t[18] = d),
          (t[19] = e))
        : (e = t[19]),
      e
    );
  }
  let Oe, ke;
  return (
    t[20] === p
      ? ((Oe = t[21]), (ke = t[22]))
      : ((Oe = (e) => {
          (e.target instanceof Element && e.target.closest(`[data-request-input-dismiss]`) != null) || p?.();
        }),
        (ke = (e) => {
          tt(e.dataTransfer) && p?.();
        }),
        (t[20] = p),
        (t[21] = Oe),
        (t[22] = ke)),
    (0, oi.jsx)(Kt, {
      className: `contents`,
      children: (0, oi.jsx)(At, {
        className: `@container/request-card`,
        children: (0, oi.jsxs)(`form`, {
          className: `flex max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] min-h-0 flex-col outline-none`,
          noValidate: !0,
          tabIndex: -1,
          "data-codex-character-input-boundary": !0,
          "data-codex-escape-boundary": !0,
          "data-user-input-auto-resolution": p != null || void 0,
          onKeyDownCapture: (e) => {
            e.key === `Escape` ||
              (e.target instanceof Element && e.target.closest(`[data-request-input-dismiss]`) != null) ||
              (p?.(), Xe(e.nativeEvent, `CmdOrCtrl+Enter`) && Ce(e));
          },
          onPointerDownCapture: Oe,
          onDropCapture: ke,
          onKeyDown: Ce,
          onSubmit: (e) => {
            (e.preventDefault(), xe());
          },
          children: [
            (0, oi.jsx)(Yr, {
              isSubmitting: D,
              disabled: J,
              elicitation: l,
              fieldTitle: K?.schema.type === `boolean` ? void 0 : K?.schema.title,
              fieldDescription: K?.schema.description,
              fieldIndex: G,
              fieldCount: P.length,
              showHeader: B,
              onChangeField: m ?? Se,
              onCancel: () => void Y(`cancel`),
            }),
            N == null &&
              (0, oi.jsx)(
                Wr,
                {
                  autoFocus: k,
                  disabled: E,
                  interactionDisabled: J,
                  field: K,
                  fieldCount: P.length,
                  draft: ne,
                  expanded: oe === K?.name,
                  hostId: u,
                  invalid: K != null && me.includes(K.name),
                  showHeader: B,
                  onCloseExpanded: () => se(null),
                  onDraftChange: m ?? ye,
                  onValueChange: m ?? be,
                  onPickLegacyFile: y,
                  onPickingChange: (e) => le((t) => t + (e ? 1 : -1)),
                  onPickFiles: b,
                  onPreview: _ == null ? w : void 0,
                },
                K?.name,
              ),
            N == null
              ? (0, oi.jsx)(wn, {
                  isSubmitting: D,
                  autoResolution: i,
                  disabled: J,
                  submitDisabled: J || (K != null && K.required && Wt(K.schema) && !De(K.schema, re[K.name])),
                  fieldCount: P.length,
                  hotkeysEnabled: k,
                  isLastField: q,
                  isStandardForm: A,
                  isSingleChoice: ie != null,
                  showSubmit:
                    ie == null || (typeof ae == `string` && (ae !== `` || ie.some((e) => e.const === ae))),
                  showHeader: B,
                  onCancel: () => void Y(`cancel`),
                  onDismissLegacyImagePicker: R ? X : void 0,
                  onSkip: m ?? (() => (q ? void Y(`decline`) : Se(G + 1))),
                  onViewAll:
                    K != null && Fe(K.schema) && ne.fileOptions[K.name].length > 1
                      ? (m ?? (() => se(K.name)))
                      : void 0,
                })
              : (0, oi.jsx)(en, {
                  disabled: J,
                  isSubmitting: D,
                  hotkeysEnabled: k,
                  isStandardForm: A,
                  onDecline: () => void Y(`decline`),
                }),
          ],
        }),
      }),
    })
  );
}
function ti(e) {
  let { schema: t } = e;
  return Fe(t) && t[`x-openai-input`].userOptions != null;
}
function ni(e) {
  let t = (0, ii.c)(9),
    n = h(vt),
    r = P(),
    i;
  t[0] !== r || t[1] !== e.conversationId || t[2] !== e.elicitation || t[3] !== e.hostId || t[4] !== n
    ? ((i = (t, i) => {
        si()
          .then((r) => {
            let { openFormPreview: a } = r;
            return a(n, {
              hostId: e.hostId,
              threadId: e.conversationId,
              server: e.elicitation.serverName,
              target: t,
              title: i,
            });
          })
          .catch(ri)
          .then((e) => {
            e ||
              n
                .get(ie)
                .danger(
                  r.formatMessage({
                    id: `composer.mcpFormElicitation.previewUnavailable`,
                    defaultMessage: `Couldn't open preview`,
                    description: `Error when a form option's expanded details cannot be opened`,
                  }),
                  { errorAnalytics: { toastId: `composer.mcpFormElicitation.previewUnavailable` } },
                );
          });
      }),
      (t[0] = r),
      (t[1] = e.conversationId),
      (t[2] = e.elicitation),
      (t[3] = e.hostId),
      (t[4] = n),
      (t[5] = i))
    : (i = t[5]);
  let a = i,
    o;
  return (
    t[6] !== a || t[7] !== e
      ? ((o = (0, oi.jsx)(ei, { ...e, onPreview: a })), (t[6] = a), (t[7] = e), (t[8] = o))
      : (o = t[8]),
    o
  );
}
function ri() {
  return !1;
}
var ii, ai, oi, si, ci;
function li() {
  return (li = e(() => {
    ((ii = Y()),
      Gt(),
      T(),
      he(),
      Lt(),
      (ai = we()),
      q(),
      Dt(),
      it(),
      Et(),
      Bt(),
      He(),
      Re(),
      Ae(),
      se(),
      ft(),
      rn(),
      gn(),
      $t(),
      xe(),
      ke(),
      qe(),
      Qe(),
      yn(),
      rt(),
      Je(),
      Cn(),
      Dn(),
      Jr(),
      Qr(),
      (oi = X()),
      pe(),
      (si = () =>
        re(
          () => import(`./open-preview-ef57dc755876.js`),
          __vite__mapDeps([6, 1, 2, 3, 4, 5]),
          import.meta.url,
        )),
      (ci = le(s, (e, { get: t }) => !0)));
  }))();
}
export { Zt as a, Cn as i, li as n, $t as o, bn as r, $r as t };
//# sourceMappingURL=request-panel-26c348285c1a.js.map
