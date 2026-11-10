import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $k as n,
  A3t as r,
  AJ as i,
  AMt as a,
  Act as o,
  Amn as s,
  B6t as c,
  CX as l,
  Cpn as u,
  D3t as d,
  DW as f,
  EW as p,
  Eln as m,
  F3t as h,
  FPt as g,
  Fk as _,
  Flt as v,
  Fn as y,
  GG as b,
  HLt as x,
  JA as S,
  JG as C,
  JV as w,
  Jit as T,
  Jv as E,
  KG as D,
  KYt as O,
  Kit as k,
  Kwt as A,
  LV as j,
  Ln as M,
  MCt as N,
  MPt as P,
  N3t as F,
  Nd as ee,
  Nmt as I,
  O3t as L,
  OL as R,
  Opn as z,
  Or as B,
  Pd as V,
  Pk as H,
  Pmt as U,
  QPt as te,
  QXt as W,
  Qit as G,
  Qv as ne,
  RV as K,
  Rk as q,
  Rn as J,
  Rpn as Y,
  Spn as X,
  Spt as re,
  TA as ie,
  TQ as ae,
  U7 as Z,
  VLt as oe,
  Vk as se,
  W7 as ce,
  WG as le,
  XPt as ue,
  XV as de,
  Xdt as fe,
  Xv as pe,
  Xwt as me,
  YV as he,
  Ydt as ge,
  Yv as _e,
  ZG as ve,
  ZPt as ye,
  Zit as be,
  Zut as xe,
  _gt as Se,
  _r as Ce,
  _yt as we,
  _zt as Te,
  a3t as Ee,
  aRt as De,
  bA as Oe,
  bMt as ke,
  bpn as Ae,
  br as je,
  cRt as Me,
  cft as Ne,
  cin as Pe,
  ddt as Fe,
  dit as Ie,
  eA as Le,
  eZt as Re,
  fH as ze,
  fTt as Be,
  fit as Ve,
  gA as He,
  gMt as Ue,
  gRt as We,
  gpn as Ge,
  gr as Ke,
  gyt as qe,
  hH as Je,
  hMt as Ye,
  hmn as Q,
  iHt as Xe,
  iin as Ze,
  ij as Qe,
  iy as $e,
  jCt as et,
  jTt as tt,
  jXt as nt,
  jr as rt,
  kL as it,
  kMt as at,
  kTt as ot,
  kXt as st,
  kmn as ct,
  kr as lt,
  lF as ut,
  lW as dt,
  lgt as ft,
  mH as pt,
  myt as mt,
  nR as ht,
  nTt as gt,
  nln as _t,
  o3t as vt,
  pH as yt,
  pmn as bt,
  qV as xt,
  qYt as St,
  rHt as Ct,
  rTt as wt,
  s3t as Tt,
  sH as Et,
  sW as Dt,
  sft as Ot,
  tR as kt,
  uF as At,
  udt as jt,
  v6 as Mt,
  vr as Nt,
  vzt as Pt,
  wQ as Ft,
  wct as It,
  xA as Lt,
  xRt as Rt,
  xX as zt,
  xpt as Bt,
  y6 as Vt,
  yMt as Ht,
  yr as Ut,
  yzt as Wt,
  zJ as Gt,
  zpn as Kt,
} from "./app-initial-f094ef01c64d.js";
import {
  Bw as qt,
  Cn as Jt,
  Cu as Yt,
  GE as Xt,
  Gl as Zt,
  H as Qt,
  In as $t,
  JE as en,
  Jl as tn,
  KE as nn,
  Kl as rn,
  Ln as an,
  Nw as on,
  Pw as sn,
  Rn as cn,
  Sn as ln,
  Su as un,
  Tn as dn,
  U as fn,
  V as pn,
  Vv as mn,
  W as hn,
  Wl as gn,
  _u as _n,
  _y as vn,
  au as yn,
  bu as bn,
  cu as xn,
  dy as Sn,
  gu as Cn,
  gy as wn,
  hu as Tn,
  hy as En,
  iu as Dn,
  lu as On,
  mu as kn,
  my as An,
  ny as jn,
  ou as Mn,
  qE as Nn,
  ru as Pn,
  su as Fn,
  uu as In,
  uy as Ln,
  vu as Rn,
  wn as zn,
  xu as Bn,
  yu as Vn,
  zn as Hn,
  zv as Un,
  zw as Wn,
} from "./app-primary-4c40d73a1074.js";
import { n as Gn, t as Kn } from "./segmented-toggle-30e6111a9bfb.js";
import { n as qn, r as Jn } from "./artifact-preview-header-abbff5f8a3ae.js";
import { n as Yn, t as Xn } from "./row-bc9dec132d18.js";
async function Zn(
  e,
  { hostId: t, image: n, imageAssetResolver: r, onFailure: i, queryClient: a, updateComments: o },
) {
  let s = Cn(n.id);
  (o(Qn(e, s)).length > 0 &&
    !(await Vn(e, {
      displaySrc: n.previewSrc,
      hostId: t,
      image: n,
      imageAssetResolver: r,
      onFailure: i,
      queryClient: a,
    }))) ||
    dn(
      {
        composerScope: e,
        absoluteImageFilePath: mt(n.src),
        attachmentId: s,
        attachmentSrc: n.src,
        downloadFileName: _n(n),
        downloadSrc: n.src,
        hostId: t,
        isCloudComposer: e.get(ie) === `cloud`,
        queryClient: a,
        src: n.previewSrc,
      },
      o(Qn(e, s)),
    );
}
function Qn(e, t) {
  return e.get(Lt).find((e) => e.attachmentId === t)?.comments ?? [];
}
var $n = e(() => {
  (S(), qe(), Rn(), zn());
});
function er(e) {
  let t = (0, tr.c)(57),
    {
      ariaLabel: n,
      authorAvatar: r,
      autoFocus: i,
      compact: a,
      disabled: s,
      discussion: c,
      embedded: l,
      maxLength: d,
      multiline: f,
      name: p,
      onCancel: m,
      onChange: h,
      onSubmit: g,
      placeholder: _,
      submitLabel: v,
      value: y,
    } = e,
    b = i === void 0 || i,
    x = a !== void 0 && a,
    S = s !== void 0 && s,
    C = l !== void 0 && l,
    w = f === void 0 || f,
    T;
  t[0] === y ? (T = t[1]) : ((T = y.trim()), (t[0] = y), (t[1] = T));
  let E = T !== ``,
    D = !S && E,
    O = x || c != null,
    k;
  if (
    t[2] !== n ||
    t[3] !== b ||
    t[4] !== S ||
    t[5] !== c ||
    t[6] !== O ||
    t[7] !== d ||
    t[8] !== w ||
    t[9] !== p ||
    t[10] !== m ||
    t[11] !== h ||
    t[12] !== _ ||
    t[13] !== y
  ) {
    let e = O
        ? Y(
            `min-h-0 w-full p-0 font-sans text-sm text-default`,
            c == null ? `leading-normal` : `leading-5`,
          )
        : En,
      r;
    t[15] === h ? (r = t[16]) : ((r = (e) => h(e.currentTarget.value)), (t[15] = h), (t[16] = r));
    let i;
    t[17] !== S || t[18] !== m
      ? ((i = (e) => {
          e.nativeEvent.isComposing ||
            (e.key === `Escape` && m != null && !S
              ? (e.preventDefault(), e.stopPropagation(), m())
              : e.key === `Enter` &&
                !e.shiftKey &&
                (e.preventDefault(), e.currentTarget.form?.requestSubmit()));
        }),
        (t[17] = S),
        (t[18] = m),
        (t[19] = i))
      : (i = t[19]);
    let a;
    t[20] !== n ||
    t[21] !== b ||
    t[22] !== S ||
    t[23] !== d ||
    t[24] !== p ||
    t[25] !== _ ||
    t[26] !== r ||
    t[27] !== i ||
    t[28] !== y
      ? ((a = {
          "aria-label": n,
          autoFocus: b,
          disabled: S,
          maxLength: d,
          name: p,
          placeholder: _,
          value: y,
          onChange: r,
          onKeyDown: i,
        }),
        (t[20] = n),
        (t[21] = b),
        (t[22] = S),
        (t[23] = d),
        (t[24] = p),
        (t[25] = _),
        (t[26] = r),
        (t[27] = i),
        (t[28] = y),
        (t[29] = a))
      : (a = t[29]);
    let o = a;
    ((k = w
      ? (0, nr.jsx)(`textarea`, {
          ...o,
          className: Y(
            e,
            `max-h-48 resize-none overflow-y-auto border-0 bg-transparent outline-none placeholder:text-tertiary`,
            c != null && `block`,
            O && `field-sizing-content`,
            O && `self-center`,
          ),
          rows: O ? 1 : 3,
        })
      : (0, nr.jsx)(`input`, {
          ...o,
          className: Y(e, `h-7 border-0 bg-transparent outline-none placeholder:text-tertiary`),
        })),
      (t[2] = n),
      (t[3] = b),
      (t[4] = S),
      (t[5] = c),
      (t[6] = O),
      (t[7] = d),
      (t[8] = w),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h),
      (t[12] = _),
      (t[13] = y),
      (t[14] = k));
  } else k = t[14];
  let A = k,
    j;
  t[30] !== D || t[31] !== g || t[32] !== y
    ? ((j = (e) => {
        (e.preventDefault(), D && g(y.trim()));
      }),
      (t[30] = D),
      (t[31] = g),
      (t[32] = y),
      (t[33] = j))
    : (j = t[33]);
  let M;
  t[34] !== r ||
  t[35] !== D ||
  t[36] !== c ||
  t[37] !== E ||
  t[38] !== A ||
  t[39] !== O ||
  t[40] !== w ||
  t[41] !== v
    ? ((M =
        c == null
          ? (0, nr.jsxs)(`div`, {
              className: Y(
                `flex min-w-0 gap-2 py-2 pe-2`,
                O ? `items-end ps-3` : `items-center ps-4`,
              ),
              children: [
                A,
                (O ? E : !w && D)
                  ? (0, nr.jsx)(at, {
                      "aria-label": v,
                      color: `primary`,
                      disabled: !D,
                      size: `composerSm`,
                      type: `submit`,
                      uniform: !0,
                      children: (0, nr.jsx)(o, {}),
                    })
                  : null,
              ],
            })
          : (0, nr.jsx)(Xn, {
              authorAvatar: r,
              disabled: !D,
              layout: c === `comment` ? `card` : `inline`,
              showSubmit: E,
              submitLabel: v,
              submitType: `submit`,
              children: A,
            })),
      (t[34] = r),
      (t[35] = D),
      (t[36] = c),
      (t[37] = E),
      (t[38] = A),
      (t[39] = O),
      (t[40] = w),
      (t[41] = v),
      (t[42] = M))
    : (M = t[42]);
  let N;
  t[43] !== D || t[44] !== S || t[45] !== O || t[46] !== w || t[47] !== m || t[48] !== v
    ? ((N =
        w && !O
          ? (0, nr.jsxs)(`div`, {
              className: `flex items-center justify-end gap-2 px-2 pb-2`,
              children: [
                m == null
                  ? null
                  : (0, nr.jsx)(at, {
                      color: `outline`,
                      disabled: S,
                      size: `composer`,
                      onClick: m,
                      children: (0, nr.jsx)(u, {
                        id: `annotationCommentComposer.cancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel action for a plain-text annotation comment`,
                      }),
                    }),
                (0, nr.jsx)(at, {
                  "aria-label": v,
                  color: `primary`,
                  disabled: !D,
                  size: `composer`,
                  type: `submit`,
                  uniform: !0,
                  children: (0, nr.jsx)(o, {}),
                }),
              ],
            })
          : null),
      (t[43] = D),
      (t[44] = S),
      (t[45] = O),
      (t[46] = w),
      (t[47] = m),
      (t[48] = v),
      (t[49] = N))
    : (N = t[49]);
  let P;
  t[50] !== N || t[51] !== j || t[52] !== M
    ? ((P = (0, nr.jsxs)(`form`, { className: `flex flex-col`, onSubmit: j, children: [M, N] })),
      (t[50] = N),
      (t[51] = j),
      (t[52] = M),
      (t[53] = P))
    : (P = t[53]);
  let F = P,
    ee;
  return (
    t[54] !== C || t[55] !== F
      ? ((ee = C ? F : (0, nr.jsx)(Ln, { children: F })), (t[54] = C), (t[55] = F), (t[56] = ee))
      : (ee = t[56]),
    ee
  );
}
var tr,
  nr,
  rr = e(() => {
    ((tr = ct()), Kt(), X(), a(), fe(), vn(), Sn(), Yn(), (nr = Q()));
  });
function ir(e) {
  let t = (0, cr.c)(75),
    {
      alt: n,
      comments: r,
      imageRef: i,
      isDraftActive: a,
      isFullscreen: o,
      layout: s,
      onDraftActiveChange: c,
      onDeleteComment: l,
      onSubmitComment: u,
      referrerPolicy: d,
      src: f,
    } = e,
    p = a === void 0 || a,
    m = o !== void 0 && o,
    h = s === void 0 ? `panel` : s,
    g = z(),
    [_, v] = (0, lr.useState)(null),
    [y, b] = (0, lr.useState)(null),
    [x, S] = (0, lr.useState)(``),
    C = p ? _ : null,
    w;
  t[0] !== r || t[1] !== C
    ? ((w = C?.id == null ? -1 : r.findIndex((e) => e.id === C.id)),
      (t[0] = r),
      (t[1] = C),
      (t[2] = w))
    : (w = t[2]);
  let T = w,
    E = T === -1 ? null : r[T],
    D;
  t[3] === c
    ? (D = t[4])
    : ((D = () => {
        (v(null), S(``), c?.(!1));
      }),
      (t[3] = c),
      (t[4] = D));
  let O = D,
    k;
  t[5] !== O || t[6] !== x || t[7] !== u || t[8] !== C
    ? ((k = () => {
        let e = x.trim();
        C == null || e.length === 0 || (u({ id: C.id, text: e, x: C.x, y: C.y }), O());
      }),
      (t[5] = O),
      (t[6] = x),
      (t[7] = u),
      (t[8] = C),
      (t[9] = k))
    : (k = t[9]);
  let A = k,
    j =
      h === `panel`
        ? `[container-type:size] flex h-0 min-h-0 flex-1 items-center justify-center overflow-hidden p-4`
        : `block max-w-full shrink-0`,
    M;
  t[10] === j ? (M = t[11]) : ((M = Y(`relative`, j)), (t[10] = j), (t[11] = M));
  let N;
  t[12] !== O || t[13] !== C
    ? ((N = (e) => {
        e.key !== `Escape` || C == null || (e.preventDefault(), O());
      }),
      (t[12] = O),
      (t[13] = C),
      (t[14] = N))
    : (N = t[14]);
  let P = h === `panel` && `max-h-[100cqh]`,
    F;
  t[15] === P ? (F = t[16]) : ((F = Y(`relative max-w-full`, P)), (t[15] = P), (t[16] = F));
  let ee = !m && `rounded-xl`,
    I = h === `panel` ? `!max-h-[100cqh]` : `h-auto !max-h-[292px] w-auto`,
    L;
  t[17] !== ee || t[18] !== I
    ? ((L = Y(`block max-w-full object-contain`, ee, I)), (t[17] = ee), (t[18] = I), (t[19] = L))
    : (L = t[19]);
  let R;
  t[20] !== n || t[21] !== d || t[22] !== f || t[23] !== L
    ? ((R = (0, ur.jsx)(`img`, { alt: n, className: L, referrerPolicy: d, src: f })),
      (t[20] = n),
      (t[21] = d),
      (t[22] = f),
      (t[23] = L),
      (t[24] = R))
    : (R = t[24]);
  let B = !m && `rounded-xl`,
    V = y == null ? `cursor-interaction` : `cursor-none`,
    H;
  t[25] !== B || t[26] !== V
    ? ((H = Y(
        `absolute inset-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring`,
        B,
        V,
      )),
      (t[25] = B),
      (t[26] = V),
      (t[27] = H))
    : (H = t[27]);
  let U;
  t[28] !== n || t[29] !== g || t[30] !== h
    ? ((U =
        h === `playground`
          ? g.formatMessage(
              {
                id: `imagePlayground.commentSurface`,
                defaultMessage: `Comment on {imageName}`,
                description: `Accessible label for placing a comment on one image in the image playground.`,
              },
              { imageName: n },
            )
          : g.formatMessage({
              id: `imageSidePanel.commentSurface`,
              defaultMessage: `Image comment surface`,
              description: `Accessible label for the image surface where users can place comments.`,
            })),
      (t[28] = n),
      (t[29] = g),
      (t[30] = h),
      (t[31] = U))
    : (U = t[31]);
  let te;
  t[32] === c
    ? (te = t[33])
    : ((te = (e) => {
        if (e.detail === 0) return;
        let t = ar(e);
        t != null && (b(null), c?.(!0), v(t), S(``));
      }),
      (t[32] = c),
      (t[33] = te));
  let W;
  t[34] === C
    ? (W = t[35])
    : ((W = (e) => {
        C ?? b(ar(e));
      }),
      (t[34] = C),
      (t[35] = W));
  let G;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = () => {
        b(null);
      }),
      (t[36] = G))
    : (G = t[36]);
  let ne;
  t[37] !== i || t[38] !== H || t[39] !== U || t[40] !== te || t[41] !== W
    ? ((ne = (0, ur.jsx)(`button`, {
        ref: i,
        type: `button`,
        className: H,
        "aria-label": U,
        onClick: te,
        onPointerMove: W,
        onPointerLeave: G,
      })),
      (t[37] = i),
      (t[38] = H),
      (t[39] = U),
      (t[40] = te),
      (t[41] = W),
      (t[42] = ne))
    : (ne = t[42]);
  let K;
  if (t[43] !== r || t[44] !== g || t[45] !== c || t[46] !== C?.id) {
    let e;
    (t[48] !== g || t[49] !== c || t[50] !== C?.id
      ? ((e = (e, t) =>
          e.id === C?.id
            ? null
            : (0, ur.jsx)(
                Un,
                {
                  ariaLabel: g.formatMessage(
                    {
                      id: `imageSidePanel.editComment`,
                      defaultMessage: `Edit comment {number}`,
                      description: `Accessible label for editing a numbered image comment.`,
                    },
                    { number: t + 1 },
                  ),
                  label: t + 1,
                  pageSize: { height: 1, width: 1 },
                  point: { x: e.x, y: e.y },
                  testId: `image-comment-marker`,
                  onClick: (t) => {
                    let n = t.currentTarget.parentElement;
                    n == null ||
                      n.clientHeight <= 0 ||
                      n.clientWidth <= 0 ||
                      (c?.(!0), v({ ...e, ...or(n) }), S(e.text));
                  },
                },
                e.id,
              )),
        (t[48] = g),
        (t[49] = c),
        (t[50] = C?.id),
        (t[51] = e))
      : (e = t[51]),
      (K = r.map(e)),
      (t[43] = r),
      (t[44] = g),
      (t[45] = c),
      (t[46] = C?.id),
      (t[47] = K));
  } else K = t[47];
  let q;
  t[52] !== E ||
  t[53] !== T ||
  t[54] !== O ||
  t[55] !== r.length ||
  t[56] !== x ||
  t[57] !== g ||
  t[58] !== l ||
  t[59] !== A ||
  t[60] !== C
    ? ((q =
        C == null
          ? null
          : (0, ur.jsxs)(ur.Fragment, {
              children: [
                (0, ur.jsx)(Un, {
                  draft: !0,
                  draftTestId: `image-comment-draft-marker`,
                  label: (T === -1 ? r.length : T) + 1,
                  pageSize: { height: 1, width: 1 },
                  point: { x: C.x, y: C.y },
                  testId: `image-comment-marker`,
                }),
                E == null
                  ? (0, ur.jsx)(`div`, {
                      className: `absolute`,
                      style: sr(C, !1),
                      children: (0, ur.jsx)(er, {
                        ariaLabel: g.formatMessage({
                          id: `imageSidePanel.addComment`,
                          defaultMessage: `Add comment`,
                          description: `Accessible label for adding a comment to an image.`,
                        }),
                        multiline: !1,
                        name: `image-comment-instruction`,
                        placeholder: g.formatMessage({
                          id: `imageSidePanel.addCommentPlaceholder`,
                          defaultMessage: `Add a comment…`,
                          description: `Placeholder for adding a comment to an image.`,
                        }),
                        submitLabel: g.formatMessage({
                          id: `imageSidePanel.addComment`,
                          defaultMessage: `Add comment`,
                          description: `Accessible label for adding a comment to an image.`,
                        }),
                        value: x,
                        onChange: S,
                        onSubmit: A,
                      }),
                    })
                  : (0, ur.jsxs)(Ln, {
                      className: `absolute`,
                      style: sr(C, !0),
                      children: [
                        (0, ur.jsx)(`div`, {
                          className: Y(wn, `top-2 right-4 bottom-[52px]`),
                          children: (0, ur.jsx)(`div`, {
                            className: `h-full min-h-0 translate-y-0.5`,
                            children: (0, ur.jsx)(`textarea`, {
                              autoFocus: !0,
                              className: Y(
                                En,
                                `h-full resize-none border-0 bg-transparent !outline-none`,
                              ),
                              name: `image-comment-instruction`,
                              value: x,
                              onChange: (e) => {
                                S(e.target.value);
                              },
                              onKeyDown: (e) => {
                                e.key === `Enter` &&
                                  (e.metaKey || e.ctrlKey) &&
                                  (e.preventDefault(), A());
                              },
                            }),
                          }),
                        }),
                        (0, ur.jsxs)(`div`, {
                          className: Y(An, `justify-between`),
                          children: [
                            (0, ur.jsx)(at, {
                              "aria-label": g.formatMessage({
                                id: `imageSidePanel.deleteComment`,
                                defaultMessage: `Delete comment`,
                                description: `Accessible label for deleting a saved image comment.`,
                              }),
                              color: `ghostMuted`,
                              size: `composer`,
                              uniform: !0,
                              onClick: () => {
                                (l(E.id), O());
                              },
                              children: (0, ur.jsx)(Wn, { className: `icon-sm` }),
                            }),
                            (0, ur.jsxs)(`div`, {
                              className: `flex items-center gap-1.5`,
                              children: [
                                (0, ur.jsx)(at, {
                                  color: `outline`,
                                  size: `composer`,
                                  onClick: O,
                                  children: g.formatMessage({
                                    id: `imageSidePanel.cancelCommentEdit`,
                                    defaultMessage: `Cancel`,
                                    description: `Button label for canceling an image comment edit.`,
                                  }),
                                }),
                                (0, ur.jsx)(at, {
                                  color: `primary`,
                                  disabled: x.trim().length === 0,
                                  size: `composer`,
                                  onClick: A,
                                  children: g.formatMessage({
                                    id: `imageSidePanel.saveCommentEdit`,
                                    defaultMessage: `Save`,
                                    description: `Button label for saving an image comment edit.`,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            })),
      (t[52] = E),
      (t[53] = T),
      (t[54] = O),
      (t[55] = r.length),
      (t[56] = x),
      (t[57] = g),
      (t[58] = l),
      (t[59] = A),
      (t[60] = C),
      (t[61] = q))
    : (q = t[61]);
  let J;
  t[62] === y
    ? (J = t[63])
    : ((J =
        y == null
          ? null
          : (0, ur.jsx)(Un, {
              draft: !0,
              draftTestId: `image-comment-hover-marker`,
              label: ``,
              pageSize: { height: 1, width: 1 },
              point: { x: y.x, y: y.y },
              testId: `image-comment-marker`,
            })),
      (t[62] = y),
      (t[63] = J));
  let X;
  t[64] !== F || t[65] !== R || t[66] !== ne || t[67] !== K || t[68] !== q || t[69] !== J
    ? ((X = (0, ur.jsxs)(`div`, { className: F, children: [R, ne, K, q, J] })),
      (t[64] = F),
      (t[65] = R),
      (t[66] = ne),
      (t[67] = K),
      (t[68] = q),
      (t[69] = J),
      (t[70] = X))
    : (X = t[70]);
  let re;
  return (
    t[71] !== X || t[72] !== M || t[73] !== N
      ? ((re = (0, ur.jsx)(`div`, { className: M, onKeyDownCapture: N, children: X })),
        (t[71] = X),
        (t[72] = M),
        (t[73] = N),
        (t[74] = re))
      : (re = t[74]),
    re
  );
}
function ar(e) {
  let t = e.currentTarget.getBoundingClientRect(),
    n = e.currentTarget.parentElement;
  return n == null || t.width <= 0 || t.height <= 0
    ? null
    : { ...or(n), x: (e.clientX - t.left) / t.width, y: (e.clientY - t.top) / t.height };
}
function or(e) {
  let t = e.parentElement;
  return {
    editorMaxX: (t?.clientWidth ?? e.clientWidth) - e.offsetLeft - dr,
    editorMaxY: (t?.clientHeight ?? e.clientHeight) - e.offsetTop - dr,
    editorMinX: dr - e.offsetLeft,
    editorMinY: dr - e.offsetTop,
    surfaceHeight: e.clientHeight,
    surfaceWidth: e.clientWidth,
  };
}
function sr(e, t) {
  let n = e.x * e.surfaceWidth,
    r = e.y * e.surfaceHeight,
    i = 30 / 2 + fr,
    a = Math.min(294, e.editorMaxX - e.editorMinX),
    o = t ? 120 : 44,
    s = e.editorMaxX - a,
    c = e.editorMaxY - o,
    l = Math.min(Math.max(r - o / 2, e.editorMinY), c),
    u = n + i;
  if (u <= s) return { height: o, left: u, top: l, width: a };
  let d = n - i - a;
  if (d >= e.editorMinX) return { height: o, left: d, top: l, width: a };
  let f = Math.min(Math.max(n - a / 2, e.editorMinX), s),
    p = r + i;
  return p <= c
    ? { height: o, left: f, top: p, width: a }
    : { height: o, left: f, top: Math.max(r - i - o, e.editorMinY), width: a };
}
var cr,
  lr,
  ur,
  dr,
  fr,
  pr = e(() => {
    ((cr = ct()),
      Kt(),
      c(),
      (lr = t(s(), 1)),
      X(),
      mn(),
      jn(),
      vn(),
      Sn(),
      rr(),
      a(),
      qt(),
      (ur = Q()),
      (dr = 8),
      (fr = 12));
  });
function mr(e) {
  let t = (0, gr.c)(32),
    {
      active: n,
      comments: a,
      conversationId: o,
      image: s,
      imageAssetResolver: c,
      imageRef: l,
      isDraftActive: u,
      isViewTransitioning: d,
      selected: f,
      tool: p,
      onActivate: m,
      onAddToChat: h,
      onDeleteComment: g,
      onDraftActiveChange: _,
      onSubmitComment: v,
    } = e,
    y = r(i),
    b = z(),
    x;
  t[0] !== o || t[1] !== s.previewSrc || t[2] !== c
    ? ((x = {
        src: s.previewSrc,
        conversationId: o,
        imageAssetResolver: c,
        shouldLoadFileDataUrl: !1,
      }),
      (t[0] = o),
      (t[1] = s.previewSrc),
      (t[2] = c),
      (t[3] = x))
    : (x = t[3]);
  let { previewSrc: S } = xn(x),
    C = S ?? s.previewSrc,
    w;
  t[4] !== C || t[5] !== s || t[6] !== c || t[7] !== b || t[8] !== h || t[9] !== y
    ? ((w = () =>
        On(y, { displaySrc: C, image: s, imageAssetResolver: c, intl: b, onAddToChat: h })),
      (t[4] = C),
      (t[5] = s),
      (t[6] = c),
      (t[7] = b),
      (t[8] = h),
      (t[9] = y),
      (t[10] = w))
    : (w = t[10]);
  let T = d && `z-10`,
    E;
  t[11] === T
    ? (E = t[12])
    : ((E = Y(`relative max-w-full shrink-0`, T)), (t[11] = T), (t[12] = E));
  let D;
  t[13] !== n ||
  t[14] !== a ||
  t[15] !== C ||
  t[16] !== s.alt ||
  t[17] !== l ||
  t[18] !== u ||
  t[19] !== m ||
  t[20] !== g ||
  t[21] !== _ ||
  t[22] !== v ||
  t[23] !== f ||
  t[24] !== p
    ? ((D =
        p === `comment`
          ? (0, _r.jsx)(`div`, {
              className: Y(
                `relative flex max-w-full shrink-0 items-center rounded-xl bg-surface-secondary/85 outline-none`,
                (u || a.length > 0) && `ring-2 ring-chart-blue`,
              ),
              onContextMenuCapture: hr,
              children: (0, _r.jsx)(ir, {
                alt: s.alt,
                comments: a,
                imageRef: l,
                isDraftActive: u,
                layout: `playground`,
                onDraftActiveChange: _,
                referrerPolicy: `no-referrer`,
                src: C,
                onDeleteComment: g,
                onSubmitComment: v,
              }),
            })
          : (0, _r.jsxs)(`button`, {
              ref: l,
              type: `button`,
              "aria-label": s.alt,
              "aria-pressed": p === `select` ? f : n,
              className: Y(
                `relative block max-w-full shrink-0 cursor-interaction overflow-hidden rounded-xl bg-surface-secondary/85 outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.995]`,
                (p === `select` ? f : n) && `ring-2 ring-chart-blue`,
              ),
              onClick: () => {
                m(C);
              },
              children: [
                (0, _r.jsx)(`img`, {
                  alt: ``,
                  className: `block h-auto !max-h-[292px] w-auto max-w-full object-contain`,
                  decoding: `async`,
                  draggable: !1,
                  referrerPolicy: `no-referrer`,
                  src: C,
                }),
                p === `select` && f
                  ? (0, _r.jsx)(`span`, {
                      className: `absolute top-2 right-2 rounded-full bg-surface text-chart-blue shadow-sm`,
                      children: (0, _r.jsx)(ee, { className: `size-5` }),
                    })
                  : null,
              ],
            })),
      (t[13] = n),
      (t[14] = a),
      (t[15] = C),
      (t[16] = s.alt),
      (t[17] = l),
      (t[18] = u),
      (t[19] = m),
      (t[20] = g),
      (t[21] = _),
      (t[22] = v),
      (t[23] = f),
      (t[24] = p),
      (t[25] = D))
    : (D = t[25]);
  let O;
  t[26] !== E || t[27] !== D
    ? ((O = (0, _r.jsx)(`div`, { className: E, children: D })),
      (t[26] = E),
      (t[27] = D),
      (t[28] = O))
    : (O = t[28]);
  let k;
  return (
    t[29] !== w || t[30] !== O
      ? ((k = (0, _r.jsx)(le, { getItems: w, children: O })), (t[29] = w), (t[30] = O), (t[31] = k))
      : (k = t[31]),
    k
  );
}
function hr(e) {
  e.target instanceof HTMLElement &&
    (e.target.isContentEditable ||
      e.target.closest(`input, textarea, [contenteditable='true']`) != null) &&
    e.stopPropagation();
}
var gr,
  _r,
  vr = e(() => {
    ((gr = ct()), Kt(), L(), X(), b(), V(), Gt(), In(), Fn(), pr(), (_r = Q()));
  }),
  yr,
  br = e(() => {
    (ke(),
      (yr = Ht({
        name: `chat-bubble-plus-light-16`,
        canvas: {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 1.474609, y: 1.808105, width: 13.050781, height: 12.383789 },
          visualBounds: { x: 1.474609, y: 1.808105, width: 13.050781, height: 12.383789 },
        },
        paint: { kind: `monochrome` },
        optical: {
          shape: `non-circular`,
          bounds: { x: 1.474609, y: 1.808105, width: 13.050781, height: 12.383789 },
          center: { x: 8, y: 8 },
          insets: { top: 1.808105, right: 1.47461, bottom: 1.808106, left: 1.474609 },
          anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8 }, foreground: { x: 8, y: 8 } },
        },
        capabilities: [`icon`],
        body: `<path d="M7.9834 5.3042C8.27312 5.30446 8.50879 5.5398 8.50879 5.82959V7.479H10.1582C10.4482 7.479 10.6836 7.71445 10.6836 8.00439C10.6836 8.29434 10.4482 8.52979 10.1582 8.52979H8.50879V10.1802C8.50853 10.4697 8.27296 10.7053 7.9834 10.7056C7.69361 10.7056 7.45827 10.4699 7.45801 10.1802V8.52979H5.80762C5.51767 8.52979 5.28223 8.29434 5.28223 8.00439C5.28223 7.71445 5.51767 7.479 5.80762 7.479H7.45801V5.82959C7.45801 5.53964 7.69345 5.3042 7.9834 5.3042Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.80811C11.575 1.80811 14.5254 4.55306 14.5254 8.00049C14.5252 11.4478 11.5749 14.1919 8 14.1919C6.78477 14.1919 5.75932 13.8294 4.75488 13.3599L2.9873 13.8188C2.5113 13.9421 2.07317 13.5186 2.17969 13.0386L2.5498 11.3638C2.03641 10.3602 1.4747 9.38219 1.47461 8.00049C1.47461 4.55306 4.42502 1.80811 8 1.80811ZM8 2.85889C4.94756 2.85889 2.52539 5.18869 2.52539 8.00049C2.52548 9.13389 2.98018 9.88342 3.55176 11.0151C3.62017 11.1507 3.63938 11.3062 3.60645 11.4546L3.34277 12.6411L4.62598 12.3091L4.74023 12.2896C4.81669 12.2837 4.89333 12.2917 4.9668 12.312L5.0752 12.3521L5.44238 12.522C6.29248 12.8997 7.09158 13.1421 8 13.1421C11.0523 13.1421 13.4744 10.8121 13.4746 8.00049C13.4746 5.18869 11.0524 2.85889 8 2.85889Z" fill="currentColor"/>`,
      })));
  }),
  xr,
  Sr,
  Cr = e(() => {
    (s(),
      (xr = Q()),
      (Sr = (e) =>
        (0, xr.jsx)(`svg`, {
          width: 13,
          height: 13,
          viewBox: `0 0 13 13`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, xr.jsx)(`path`, {
            d: `M0 2.44444C0 1.09442 1.09442 0 2.44444 0H3.33333C3.70152 0 4 0.298477 4 0.666667C4 1.03486 3.70152 1.33333 3.33333 1.33333H2.44444C1.83079 1.33333 1.33333 1.83079 1.33333 2.44444V3.33333C1.33333 3.70152 1.03486 4 0.666667 4C0.298477 4 0 3.70152 0 3.33333V2.44444ZM8 0.666667C8 0.298477 8.29848 0 8.66667 0H9.55556C10.9056 0 12 1.09442 12 2.44444V3.33333C12 3.70152 11.7015 4 11.3333 4C10.9651 4 10.6667 3.70152 10.6667 3.33333V2.44444C10.6667 1.83079 10.1692 1.33333 9.55556 1.33333H8.66667C8.29848 1.33333 8 1.03486 8 0.666667ZM7.09363 7.09256L8.43971 10.9065L9.0609 9.57534C9.16686 9.34829 9.34937 9.16578 9.57642 9.05983L10.9075 8.43864L7.09363 7.09256ZM5.65074 7.01053C5.35243 6.16531 6.16639 5.35136 7.01161 5.64967L11.9666 7.39849C12.8673 7.71639 12.9282 8.96701 12.0627 9.37094L10.2281 10.2271L9.37202 12.0616C8.96808 12.9272 7.71747 12.8663 7.39956 11.9655L5.65074 7.01053ZM0.666667 8C1.03486 8 1.33333 8.29848 1.33333 8.66667V9.55556C1.33333 10.1692 1.83079 10.6667 2.44444 10.6667H3.33333C3.70152 10.6667 4 10.9651 4 11.3333C4 11.7015 3.70152 12 3.33333 12H2.44444C1.09442 12 0 10.9056 0 9.55556V8.66667C0 8.29848 0.298477 8 0.666667 8Z`,
            fill: `currentColor`,
          }),
        })));
  });
function wr(e) {
  let t = (0, Er.c)(8),
    { ariaLabel: n, children: r, className: i, variant: a } = e,
    o = a === void 0 ? `compact` : a,
    s = n == null ? void 0 : `toolbar`,
    c =
      o === `imageTools`
        ? `gap-0 border border-default bg-surface-elevated`
        : `gap-0.5 bg-surface-tertiary/95 ring-1 ring-border-subtle backdrop-blur-sm`,
    l;
  t[0] !== i || t[1] !== c
    ? ((l = Y(
        `flex w-fit max-w-full select-none items-center overflow-hidden rounded-full p-0.5 shadow-md`,
        c,
        i,
      )),
      (t[0] = i),
      (t[1] = c),
      (t[2] = l))
    : (l = t[2]);
  let u;
  return (
    t[3] !== n || t[4] !== r || t[5] !== s || t[6] !== l
      ? ((u = (0, Dr.jsx)(`div`, { role: s, "aria-label": n, className: l, children: r })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = s),
        (t[6] = l),
        (t[7] = u))
      : (u = t[7]),
    u
  );
}
function Tr(e) {
  let t = (0, Er.c)(33),
    {
      ariaLabel: n,
      commentCount: r,
      emptyMessage: i,
      isSubmitting: a,
      onCancel: o,
      onSubmit: s,
      variant: c,
    } = e,
    l = a !== void 0 && a,
    d = c === void 0 ? `compact` : c,
    f = z(),
    p = d === `imageTools` ? `px-2.5 text-sm` : `px-1.5 text-base`,
    m = r === 0 ? `text-tertiary` : `text-default`,
    h;
  t[0] !== p || t[1] !== m
    ? ((h = Y(`min-w-0 truncate leading-[18px]`, p, m)), (t[0] = p), (t[1] = m), (t[2] = h))
    : (h = t[2]);
  let g;
  t[3] !== r || t[4] !== i
    ? ((g =
        r === 0
          ? i
          : (0, Dr.jsx)(u, {
              id: `imageSidePanel.commentCount`,
              defaultMessage: `{count, plural, one {# comment} other {# comments}}`,
              description: `Count of comments attached to images while image comment mode is active.`,
              values: { count: r },
            })),
      (t[3] = r),
      (t[4] = i),
      (t[5] = g))
    : (g = t[5]);
  let _;
  t[6] !== h || t[7] !== g
    ? ((_ = (0, Dr.jsx)(`span`, { className: h, children: g })), (t[6] = h), (t[7] = g), (t[8] = _))
    : (_ = t[8]);
  let v = r === 0 || l,
    y = d === `imageTools` ? `dialog` : `composerSm`,
    b;
  t[9] === s
    ? (b = t[10])
    : ((b = () => {
        if (s != null) {
          s();
          return;
        }
        ce(`composer.submit`, `image_comment_toolbar`);
      }),
      (t[9] = s),
      (t[10] = b));
  let x;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Dr.jsx)(u, {
        id: `imageSidePanel.sendComments`,
        defaultMessage: `Send`,
        description: `Toolbar action that submits image comments through the composer.`,
      })),
      (t[11] = x))
    : (x = t[11]);
  let S;
  t[12] !== l || t[13] !== b || t[14] !== v || t[15] !== y
    ? ((S = (0, Dr.jsx)(at, {
        color: `primary`,
        disabled: v,
        loading: l,
        size: y,
        onClick: b,
        children: x,
      })),
      (t[12] = l),
      (t[13] = b),
      (t[14] = v),
      (t[15] = y),
      (t[16] = S))
    : (S = t[16]);
  let C = d === `imageTools` ? `imageToolbar` : `composerSm`,
    w;
  t[17] === f
    ? (w = t[18])
    : ((w = f.formatMessage({
        id: `imageSidePanel.cancelCommentMode`,
        defaultMessage: `Cancel`,
        description: `Toolbar action that exits image comment mode.`,
      })),
      (t[17] = f),
      (t[18] = w));
  let T;
  t[19] === d
    ? (T = t[20])
    : ((T =
        d === `imageTools`
          ? (0, Dr.jsx)(ge, {})
          : (0, Dr.jsx)(Ie, { "aria-hidden": !0, className: `icon-2xs` })),
      (t[19] = d),
      (t[20] = T));
  let E;
  t[21] !== l || t[22] !== o || t[23] !== C || t[24] !== w || t[25] !== T
    ? ((E = (0, Dr.jsx)(at, {
        color: `ghostActive`,
        disabled: l,
        size: C,
        uniform: !0,
        "aria-label": w,
        onClick: o,
        children: T,
      })),
      (t[21] = l),
      (t[22] = o),
      (t[23] = C),
      (t[24] = w),
      (t[25] = T),
      (t[26] = E))
    : (E = t[26]);
  let D;
  return (
    t[27] !== n || t[28] !== S || t[29] !== E || t[30] !== _ || t[31] !== d
      ? ((D = (0, Dr.jsxs)(wr, { ariaLabel: n, variant: d, children: [_, S, E] })),
        (t[27] = n),
        (t[28] = S),
        (t[29] = E),
        (t[30] = _),
        (t[31] = d),
        (t[32] = D))
      : (D = t[32]),
    D
  );
}
var Er,
  Dr,
  Or = e(() => {
    ((Er = ct()), Kt(), X(), Z(), a(), fe(), Ve(), (Dr = Q()));
  });
function kr(e) {
  let t = (0, Ar.c)(28),
    { activeTool: n, commentCount: r, onActiveToolChange: i } = e,
    a = z(),
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = a.formatMessage({
        id: `codex.localConversation.imagePlayground.tools`,
        defaultMessage: `Image playground tools`,
        description: `Accessible label for the image playground toolbar.`,
      })),
      (t[0] = a),
      (t[1] = o));
  let s = o;
  if (n === `comment`) {
    let e;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, jr.jsx)(u, {
          id: `codex.localConversation.imagePlayground.commentHelper`,
          defaultMessage: `Add comments on multiple images to batch edit them`,
          description: `Helper text shown in canvas comment mode before the user has added comments to any images.`,
        })),
        (t[2] = e))
      : (e = t[2]);
    let n;
    t[3] === i
      ? (n = t[4])
      : ((n = () => {
          i(`navigate`);
        }),
        (t[3] = i),
        (t[4] = n));
    let a;
    return (
      t[5] !== r || t[6] !== n || t[7] !== s
        ? ((a = (0, jr.jsx)(Tr, { ariaLabel: s, commentCount: r, emptyMessage: e, onCancel: n })),
          (t[5] = r),
          (t[6] = n),
          (t[7] = s),
          (t[8] = a))
        : (a = t[8]),
      a
    );
  }
  let c;
  t[9] === i
    ? (c = t[10])
    : ((c = () => {
        i(`comment`);
      }),
      (t[9] = i),
      (t[10] = c));
  let l, d;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, jr.jsx)(Ye, { "aria-hidden": !1, asset: yr })),
      (d = (0, jr.jsx)(u, {
        id: `codex.localConversation.imagePlayground.commentAction`,
        defaultMessage: `Comment`,
        description: `Toolbar action that enters canvas image comment mode.`,
      })),
      (t[11] = l),
      (t[12] = d))
    : ((l = t[11]), (d = t[12]));
  let f;
  t[13] === c
    ? (f = t[14])
    : ((f = (0, jr.jsxs)(at, {
        className: `!text-base`,
        color: `ghostActive`,
        size: `composerSm`,
        onClick: c,
        children: [l, d],
      })),
      (t[13] = c),
      (t[14] = f));
  let p = n === `select`,
    m = n === `select` ? `secondary` : `ghostActive`,
    h;
  t[15] !== n || t[16] !== i
    ? ((h = () => {
        i(n === `select` ? `navigate` : `select`);
      }),
      (t[15] = n),
      (t[16] = i),
      (t[17] = h))
    : (h = t[17]);
  let g, _;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, jr.jsx)(Sr, {})),
      (g = (0, jr.jsx)(u, {
        id: `codex.localConversation.imagePlayground.multiSelectAction`,
        defaultMessage: `Multi-select`,
        description: `Toolbar action that enters canvas image multi-select mode.`,
      })),
      (t[18] = g),
      (t[19] = _))
    : ((g = t[18]), (_ = t[19]));
  let v;
  t[20] !== p || t[21] !== m || t[22] !== h
    ? ((v = (0, jr.jsxs)(at, {
        className: `!text-base`,
        "aria-pressed": p,
        color: m,
        size: `composerSm`,
        onClick: h,
        children: [_, g],
      })),
      (t[20] = p),
      (t[21] = m),
      (t[22] = h),
      (t[23] = v))
    : (v = t[23]);
  let y;
  return (
    t[24] !== v || t[25] !== f || t[26] !== s
      ? ((y = (0, jr.jsxs)(wr, { ariaLabel: s, children: [f, v] })),
        (t[24] = v),
        (t[25] = f),
        (t[26] = s),
        (t[27] = y))
      : (y = t[27]),
    y
  );
}
var Ar,
  jr,
  Mr = e(() => {
    ((Ar = ct()), br(), X(), a(), Ue(), Cr(), Or(), (jr = Q()));
  });
function Nr(e) {
  let t = (0, Fr.c)(30),
    { onZoomPercentChange: n, viewportCenterInlineOffset: r, zoomPercent: i } = e,
    a = r === void 0 ? 0 : r,
    o = Wt(),
    s = (0, Ir.useRef)(null),
    c = (0, Ir.useRef)(null),
    l = (0, Ir.useRef)(null),
    u = (0, Ir.useRef)(0),
    d = (0, Ir.useRef)(null),
    f;
  t[0] !== n || t[1] !== o
    ? ((f = (e, t) => {
        let { clientX: r, clientY: i } = t,
          a = s.current,
          l = c.current;
        if (a == null || l == null) {
          n(e);
          return;
        }
        let u = l.getBoundingClientRect(),
          d = u.width > 0 ? Pr((r - u.left) / u.width) : 0.5,
          f = u.height > 0 ? Pr((i - u.top) / u.height) : 0.5;
        if (
          ((0, Lr.flushSync)(() => {
            n(e);
          }),
          !a.isConnected || !l.isConnected)
        )
          return;
        let p = l.getBoundingClientRect();
        ((a.scrollLeft += Pt(p.left + p.width * d - r, o)),
          (a.scrollTop += Pt(p.top + p.height * f - i, o)));
      }),
      (t[0] = n),
      (t[1] = o),
      (t[2] = f))
    : (f = t[2]);
  let p = f,
    m;
  t[3] !== a || t[4] !== o
    ? ((m = (e) => {
        let t = e.getBoundingClientRect(),
          n = getComputedStyle(e).direction === `rtl` ? -1 : 1;
        return { clientX: t.left + t.width / 2 + a * o * n, clientY: t.top + t.height / 2 };
      }),
      (t[3] = a),
      (t[4] = o),
      (t[5] = m))
    : (m = t[5]);
  let h = m,
    g;
  t[6] !== h || t[7] !== n || t[8] !== p
    ? ((g = (e) => {
        let t = s.current;
        if (t == null) {
          n(e);
          return;
        }
        p(e, h(t));
      }),
      (t[6] = h),
      (t[7] = n),
      (t[8] = p),
      (t[9] = g))
    : (g = t[9]);
  let _ = g,
    v;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (e) => {
        (l.current != null && (u.current = e.timeStamp), (l.current = null));
      }),
      (t[10] = v))
    : (v = t[10]);
  let y = G(v),
    b;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (e) => {
        let t = u.current;
        t === 0 || e.timeStamp - t >= Rr || (e.preventDefault(), e.stopPropagation());
      }),
      (t[11] = b))
    : (b = t[11]);
  let x = b,
    S;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (e) => {
        ((d.current = { clientX: e.clientX, clientY: e.clientY }),
          e.pointerType === `touch` && l.current != null && e.stopPropagation());
      }),
      (t[12] = S))
    : (S = t[12]);
  let C = S,
    w;
  t[13] !== p || t[14] !== i
    ? ((w = (e) => {
        let t = l.current;
        if (e.touches.length !== 2 || t == null) return;
        (e.preventDefault(), e.stopPropagation());
        let n = e.touches.item(0),
          r = e.touches.item(1);
        if (n == null || r == null) return;
        let a = pt(n.clientX, n.clientY, r.clientX, r.clientY);
        if (a <= 0 || t.distance <= 0) return;
        let o = ze({
          initialDistance: t.distance,
          initialZoomPercent: t.zoomPercent,
          nextDistance: a,
        });
        o !== i &&
          p(o, { clientX: (n.clientX + r.clientX) / 2, clientY: (n.clientY + r.clientY) / 2 });
      }),
      (t[13] = p),
      (t[14] = i),
      (t[15] = w))
    : (w = t[15]);
  let T = G(w),
    E;
  t[16] === i
    ? (E = t[17])
    : ((E = (e) => {
        if (e.touches.length !== 2) {
          l.current = null;
          return;
        }
        e.preventDefault();
        let t = e.touches.item(0),
          n = e.touches.item(1);
        t == null ||
          n == null ||
          (l.current = {
            distance: pt(t.clientX, t.clientY, n.clientX, n.clientY),
            zoomPercent: i,
          });
      }),
      (t[16] = i),
      (t[17] = E));
  let D = G(E),
    O;
  t[18] !== h || t[19] !== p || t[20] !== i
    ? ((O = (e) => {
        if (!e.ctrlKey) return;
        (e.preventDefault(), e.stopPropagation());
        let t = yt(i, e.deltaY);
        if (t === i) return;
        let n =
            e.clientX === 0 && e.clientY === 0
              ? d.current
              : { clientX: e.clientX, clientY: e.clientY },
          r = s.current;
        r != null && p(t, n ?? h(r));
      }),
      (t[18] = h),
      (t[19] = p),
      (t[20] = i),
      (t[21] = O))
    : (O = t[21]);
  let k = G(O),
    A;
  t[22] !== y || t[23] !== T || t[24] !== D || t[25] !== k
    ? ((A = (e) => {
        let t = s.current;
        t !== e &&
          (t != null &&
            (t.removeEventListener(`touchcancel`, y),
            t.removeEventListener(`touchend`, y),
            t.removeEventListener(`touchmove`, T),
            t.removeEventListener(`touchstart`, D),
            t.removeEventListener(`wheel`, k)),
          (s.current = e),
          e != null &&
            (e.addEventListener(`touchcancel`, y),
            e.addEventListener(`touchend`, y),
            e.addEventListener(`touchmove`, T, { passive: !1 }),
            e.addEventListener(`touchstart`, D, { passive: !1 }),
            e.addEventListener(`wheel`, k, { passive: !1 })));
      }),
      (t[22] = y),
      (t[23] = T),
      (t[24] = D),
      (t[25] = k),
      (t[26] = A))
    : (A = t[26]);
  let j = A,
    M;
  return (
    t[27] !== j || t[28] !== _
      ? ((M = {
          zoomTargetRef: c,
          handleClickCapture: x,
          handlePointerMoveCapture: C,
          setScrollContainerRef: j,
          setZoomAtViewportCenter: _,
        }),
        (t[27] = j),
        (t[28] = _),
        (t[29] = M))
      : (M = t[29]),
    M
  );
}
function Pr(e) {
  return Math.min(Math.max(e, 0), 1);
}
var Fr,
  Ir,
  Lr,
  Rr,
  zr = e(() => {
    ((Fr = ct()), (Ir = t(s(), 1)), (Lr = t(bt(), 1)), Te(), Je(), be(), (Rr = 500));
  });
function Br(e) {
  let t = (0, Vr.c)(21),
    { children: n, onZoomPercentChange: r, zoomPercent: i } = e,
    a;
  t[0] !== r || t[1] !== i
    ? ((a = { onZoomPercentChange: r, zoomPercent: i }), (t[0] = r), (t[1] = i), (t[2] = a))
    : (a = t[2]);
  let {
      zoomTargetRef: o,
      handleClickCapture: s,
      handlePointerMoveCapture: c,
      setScrollContainerRef: l,
      setZoomAtViewportCenter: u,
    } = Nr(a),
    d;
  t[3] !== u || t[4] !== i
    ? ((d = (0, Hr.jsx)(`div`, {
        className: `absolute top-2 right-2 z-40 flex h-8 items-center`,
        children: (0, Hr.jsx)(Et, { zoomPercent: i, onZoomPercentChange: u }),
      })),
      (t[3] = u),
      (t[4] = i),
      (t[5] = d))
    : (d = t[5]);
  let f = i / 100,
    p;
  t[6] === f ? (p = t[7]) : ((p = { zoom: f }), (t[6] = f), (t[7] = p));
  let m;
  t[8] !== n || t[9] !== p || t[10] !== o
    ? ((m = (0, Hr.jsx)(`div`, {
        ref: o,
        className: `flex min-w-max flex-col items-start gap-6`,
        style: p,
        children: n,
      })),
      (t[8] = n),
      (t[9] = p),
      (t[10] = o),
      (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Hr.jsx)(`div`, { className: `h-1/2` })), (t[12] = h))
    : (h = t[12]);
  let g;
  t[13] !== s || t[14] !== c || t[15] !== l || t[16] !== m
    ? ((g = (0, Hr.jsxs)(`div`, {
        ref: l,
        "data-generated-image-playground-scroll": !0,
        className: `h-full min-h-0 scroll-pt-14 overflow-auto ps-3 pe-16 pt-14 pb-[calc(var(--right-panel-composer-overlay-reserve,0px)+var(--spacing)*6)]`,
        onClickCapture: s,
        onPointerMoveCapture: c,
        children: [m, h],
      })),
      (t[13] = s),
      (t[14] = c),
      (t[15] = l),
      (t[16] = m),
      (t[17] = g))
    : (g = t[17]);
  let _;
  return (
    t[18] !== d || t[19] !== g
      ? ((_ = (0, Hr.jsxs)(Hr.Fragment, { children: [d, g] })),
        (t[18] = d),
        (t[19] = g),
        (t[20] = _))
      : (_ = t[20]),
    _
  );
}
var Vr,
  Hr,
  Ur = e(() => {
    ((Vr = ct()), Jn(), zr(), (Hr = Q()));
  });
function Wr(e) {
  let t = (0, Jr.c)(123),
    {
      activeImageId: n,
      conversationId: a,
      focusedImageRef: o,
      groups: s,
      imageAssetResolver: c,
      initialTool: l,
      isViewTransitioning: u,
      onGeneratedImageSelection: p,
      onSelectImage: m,
      onZoomPercentChange: g,
      zoomPercent: _,
    } = e,
    v = l === void 0 ? `navigate` : l,
    y = r(i),
    b = d(),
    x = z(),
    S;
  t[0] !== a || t[1] !== x || t[2] !== y
    ? ((S = { scope: y, conversationId: a, intl: x }),
      (t[0] = a),
      (t[1] = x),
      (t[2] = y),
      (t[3] = S))
    : (S = t[3]);
  let { notifyImageInputUnsupported: C, supportsImageInputs: w } = Hn(S),
    T = F(gt, a) ?? `local`,
    E = h(He),
    D = h(Oe),
    O = h(Lt),
    [k, A] = (0, Yr.useState)(v),
    [j, M] = (0, Yr.useState)(null),
    N = (0, Yr.useRef)(null),
    [P, ee] = (0, Yr.useState)(E);
  P !== E && (ee(E), A(`navigate`), M(null));
  let I;
  t[4] === D ? (I = t[5]) : ((I = new Set(D.map(Kr))), (t[4] = D), (t[5] = I));
  let L = I,
    R;
  t[6] === O ? (R = t[7]) : ((R = new Map(O.map(Gr))), (t[6] = O), (t[7] = R));
  let B = R,
    V,
    H,
    U;
  if (t[8] !== n || t[9] !== s) {
    ((V = new Set()), (H = []));
    for (let e of s) for (let t of e.images) t.loading || (H.push(t), V.add(Cn(t.id)));
    let e;
    (t[13] === n ? (e = t[14]) : ((e = (e) => e.id === n), (t[13] = n), (t[14] = e)),
      (U = H.find(e)),
      (t[8] = n),
      (t[9] = s),
      (t[10] = V),
      (t[11] = H),
      (t[12] = U));
  } else ((V = t[10]), (H = t[11]), (U = t[12]));
  let te = U,
    W;
  if (t[15] !== O || t[16] !== V) {
    let e;
    (t[18] === V
      ? (e = t[19])
      : ((e = (e, t) => (V.has(t.attachmentId) ? e + t.comments.length : e)),
        (t[18] = V),
        (t[19] = e)),
      (W = O.reduce(e, 0)),
      (t[15] = O),
      (t[16] = V),
      (t[17] = W));
  } else W = t[17];
  let ne = W,
    K;
  t[20] !== x || t[21] !== y
    ? ((K = () => {
        y.get(nt).danger(
          x.formatMessage({
            id: `codex.localConversation.imagePlayground.commentFailed`,
            defaultMessage: `Could not add image comment`,
            description: `Error shown when an image comment could not be added in the image playground.`,
          }),
        );
      }),
      (t[20] = x),
      (t[21] = y),
      (t[22] = K))
    : (K = t[22]);
  let q = G(K),
    J;
  t[23] !== x || t[24] !== y
    ? ((J = () => {
        y.get(nt).danger(
          x.formatMessage({
            id: `codex.localConversation.imagePlayground.selectFailed`,
            defaultMessage: `Could not select image`,
            description: `Error shown when a generated image could not be added to the composer.`,
          }),
        );
      }),
      (t[23] = x),
      (t[24] = y),
      (t[25] = J))
    : (J = t[25]);
  let Y = G(J),
    X;
  t[26] !== C || t[27] !== p || t[28] !== w
    ? ((X = () => (w ? (p?.(), !0) : (C(), !1))),
      (t[26] = C),
      (t[27] = p),
      (t[28] = w),
      (t[29] = X))
    : (X = t[29]);
  let re = G(X),
    ie;
  t[30] !== T || t[31] !== c || t[32] !== p || t[33] !== b || t[34] !== y || t[35] !== Y
    ? ((ie = (e, t, n) => {
        (p?.(),
          Vn(y, {
            displaySrc: t,
            hostId: T,
            image: e,
            imageAssetResolver: c,
            onFailure: Y,
            queryClient: b,
            selectionMode: n,
          }));
      }),
      (t[30] = T),
      (t[31] = c),
      (t[32] = p),
      (t[33] = b),
      (t[34] = y),
      (t[35] = Y),
      (t[36] = ie))
    : (ie = t[36]);
  let ae = G(ie),
    Z;
  t[37] !== te || t[38] !== k || t[39] !== ae || t[40] !== w
    ? ((Z = (e) => {
        e == null || k !== `navigate` || !w || te == null || ae(te, te.previewSrc, `single`);
      }),
      (t[37] = te),
      (t[38] = k),
      (t[39] = ae),
      (t[40] = w),
      (t[41] = Z))
    : (Z = t[41]);
  let oe = G(Z),
    se = w ? oe : void 0,
    ce;
  t[42] !== o || t[43] !== se
    ? ((ce = f(o, se)), (t[42] = o), (t[43] = se), (t[44] = ce))
    : (ce = t[44]);
  let le = ce,
    ue;
  t[45] !== k || t[46] !== ae || t[47] !== C || t[48] !== m || t[49] !== y || t[50] !== w
    ? ((ue = (e, t, n) => {
        if (k === `navigate`) {
          (m(e), w && ae(e, n, `single`));
          return;
        }
        if (t) {
          (Tn(y, e.id), N.current?.image.id === e.id && (N.current = null));
          return;
        }
        if (!w) {
          C();
          return;
        }
        ((N.current = { displaySrc: n, image: e }), ae(e, n, `multiple`));
      }),
      (t[45] = k),
      (t[46] = ae),
      (t[47] = C),
      (t[48] = m),
      (t[49] = y),
      (t[50] = w),
      (t[51] = ue))
    : (ue = t[51]);
  let de = G(ue),
    fe;
  t[52] !== T || t[53] !== c || t[54] !== b || t[55] !== y || t[56] !== q
    ? ((fe = (e, t) => {
        Zn(y, {
          hostId: T,
          image: e,
          imageAssetResolver: c,
          onFailure: q,
          queryClient: b,
          updateComments: (e) => e.filter((e) => e.id !== t),
        });
      }),
      (t[52] = T),
      (t[53] = c),
      (t[54] = b),
      (t[55] = y),
      (t[56] = q),
      (t[57] = fe))
    : (fe = t[57]);
  let pe = G(fe),
    me;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (e, t) => {
        M(t ? e : null);
      }),
      (t[58] = me))
    : (me = t[58]);
  let he = G(me),
    ge;
  t[59] !== T ||
  t[60] !== c ||
  t[61] !== C ||
  t[62] !== b ||
  t[63] !== y ||
  t[64] !== q ||
  t[65] !== w
    ? ((ge = (e, t) => {
        if (!w) {
          C();
          return;
        }
        let n = { ...t, id: t.id ?? Pe() };
        Zn(y, {
          hostId: T,
          image: e,
          imageAssetResolver: c,
          onFailure: q,
          queryClient: b,
          updateComments: (e) => (t.id == null ? [...e, n] : e.map((e) => (e.id === t.id ? n : e))),
        });
      }),
      (t[59] = T),
      (t[60] = c),
      (t[61] = C),
      (t[62] = b),
      (t[63] = y),
      (t[64] = q),
      (t[65] = w),
      (t[66] = ge))
    : (ge = t[66]);
  let _e = G(ge),
    ve = u ? void 0 : `pointer-events-auto`,
    ye;
  t[67] !== n ||
  t[68] !== k ||
  t[69] !== ae ||
  t[70] !== m ||
  t[71] !== V ||
  t[72] !== H ||
  t[73] !== y ||
  t[74] !== w
    ? ((ye = (e) => {
        if (
          (e !== k &&
            e !== `navigate` &&
            Bn(y, { imageSource: `generated`, mode: e, view: `canvas` }),
          k !== `select` && e === `select` && (N.current = null),
          k === `select` && e === `navigate`)
        ) {
          let e = N.current;
          if (e == null) {
            let t;
            for (let e of y.get(Oe)) V.has(e.id) && (t = e.id);
            let r = t == null ? H.find((e) => e.id === n) : H.find((e) => Cn(e.id) === t);
            r != null && (e = { displaySrc: r.previewSrc, image: r });
          }
          (e != null && w && (m(e.image), ae(e.image, e.displaySrc, `single`)), (N.current = null));
        }
        (A(e), k === `comment` && e !== `comment` && (M(null), kn(y)));
      }),
      (t[67] = n),
      (t[68] = k),
      (t[69] = ae),
      (t[70] = m),
      (t[71] = V),
      (t[72] = H),
      (t[73] = y),
      (t[74] = w),
      (t[75] = ye))
    : (ye = t[75]);
  let be;
  t[76] !== k || t[77] !== ne || t[78] !== ye
    ? ((be = (0, Xr.jsx)(kr, { activeTool: k, commentCount: ne, onActiveToolChange: ye })),
      (t[76] = k),
      (t[77] = ne),
      (t[78] = ye),
      (t[79] = be))
    : (be = t[79]);
  let xe;
  t[80] !== ve || t[81] !== be
    ? ((xe = (0, Xr.jsx)(`div`, {
        className: `pointer-events-none absolute top-2 right-0 left-0 z-40 flex justify-center px-4`,
        children: (0, Xr.jsx)(`div`, { className: ve, children: be }),
      })),
      (t[80] = ve),
      (t[81] = be),
      (t[82] = xe))
    : (xe = t[82]);
  let Se;
  if (
    t[83] !== j ||
    t[84] !== n ||
    t[85] !== k ||
    t[86] !== L ||
    t[87] !== a ||
    t[88] !== o ||
    t[89] !== s ||
    t[90] !== re ||
    t[91] !== pe ||
    t[92] !== he ||
    t[93] !== de ||
    t[94] !== _e ||
    t[95] !== c ||
    t[96] !== B ||
    t[97] !== u ||
    t[98] !== le
  ) {
    let e;
    (t[100] !== j ||
    t[101] !== n ||
    t[102] !== k ||
    t[103] !== L ||
    t[104] !== a ||
    t[105] !== o ||
    t[106] !== re ||
    t[107] !== pe ||
    t[108] !== he ||
    t[109] !== de ||
    t[110] !== _e ||
    t[111] !== c ||
    t[112] !== B ||
    t[113] !== u ||
    t[114] !== le
      ? ((e = (e) =>
          (0, Xr.jsx)(
            Qr,
            {
              activeDraftImageId: j,
              activeImageId: n,
              attachmentIds: L,
              conversationId: a,
              focusedImageRef: le,
              group: e,
              imageAssetResolver: c,
              imageCommentsByAttachmentId: B,
              isViewTransitioning: u,
              loadingImageRef: o,
              tool: k,
              onAddToChat: re,
              onDeleteComment: pe,
              onDraftActiveChange: he,
              onImageActivate: de,
              onSubmitComment: _e,
            },
            e.id,
          )),
        (t[100] = j),
        (t[101] = n),
        (t[102] = k),
        (t[103] = L),
        (t[104] = a),
        (t[105] = o),
        (t[106] = re),
        (t[107] = pe),
        (t[108] = he),
        (t[109] = de),
        (t[110] = _e),
        (t[111] = c),
        (t[112] = B),
        (t[113] = u),
        (t[114] = le),
        (t[115] = e))
      : (e = t[115]),
      (Se = s.map(e)),
      (t[83] = j),
      (t[84] = n),
      (t[85] = k),
      (t[86] = L),
      (t[87] = a),
      (t[88] = o),
      (t[89] = s),
      (t[90] = re),
      (t[91] = pe),
      (t[92] = he),
      (t[93] = de),
      (t[94] = _e),
      (t[95] = c),
      (t[96] = B),
      (t[97] = u),
      (t[98] = le),
      (t[99] = Se));
  } else Se = t[99];
  let Ce;
  t[116] !== g || t[117] !== Se || t[118] !== _
    ? ((Ce = (0, Xr.jsx)(Br, { onZoomPercentChange: g, zoomPercent: _, children: Se })),
      (t[116] = g),
      (t[117] = Se),
      (t[118] = _),
      (t[119] = Ce))
    : (Ce = t[119]);
  let we;
  return (
    t[120] !== xe || t[121] !== Ce
      ? ((we = (0, Xr.jsxs)(`div`, {
          className: `relative h-full min-h-0 bg-surface-secondary`,
          children: [xe, Ce],
        })),
        (t[120] = xe),
        (t[121] = Ce),
        (t[122] = we))
      : (we = t[122]),
    we
  );
}
function Gr(e) {
  return [e.attachmentId, e.comments];
}
function Kr(e) {
  return e.id;
}
function qr(e) {
  return e.loading;
}
var Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r = e(() => {
    ((Jr = ct()),
      Tt(),
      Kt(),
      _t(),
      L(),
      (Yr = t(s(), 1)),
      X(),
      Ze(),
      wt(),
      S(),
      st(),
      cn(),
      Gt(),
      O(),
      p(),
      be(),
      bn(),
      $n(),
      vr(),
      Rn(),
      Mr(),
      Ur(),
      Mn(),
      (Xr = Q()),
      (Zr = []),
      (Qr = (0, Yr.memo)(function (e) {
        let t = (0, Jr.c)(49),
          {
            activeDraftImageId: n,
            activeImageId: r,
            attachmentIds: i,
            conversationId: a,
            focusedImageRef: o,
            group: s,
            imageAssetResolver: c,
            imageCommentsByAttachmentId: l,
            isViewTransitioning: u,
            loadingImageRef: d,
            tool: f,
            onAddToChat: p,
            onDeleteComment: h,
            onDraftActiveChange: g,
            onImageActivate: _,
            onSubmitComment: v,
          } = e,
          y = !u || s.images.some((e) => e.id === r) ? 1 : 0,
          b;
        t[0] === y ? (b = t[1]) : ((b = { opacity: y }), (t[0] = y), (t[1] = b));
        let x;
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((x = { opacity: 1 }), (t[2] = x))
          : (x = t[2]);
        let S = u ? 0.24 : 0,
          C;
        t[3] === S ? (C = t[4]) : ((C = { duration: 0.14, delay: S }), (t[3] = S), (t[4] = C));
        let w;
        t[5] !== s.images || t[6] !== s.turnStartedAtMs
          ? ((w = Y(
              `relative flex max-w-full gap-2`,
              (s.turnStartedAtMs != null || s.images.some(qr)) && `pt-6`,
            )),
            (t[5] = s.images),
            (t[6] = s.turnStartedAtMs),
            (t[7] = w))
          : (w = t[7]);
        let T;
        t[8] === s.turnStartedAtMs
          ? (T = t[9])
          : ((T =
              s.turnStartedAtMs == null
                ? null
                : (0, Xr.jsx)(`time`, {
                    className: `absolute top-0 text-xs text-tertiary select-none`,
                    dateTime: new Date(s.turnStartedAtMs).toISOString(),
                    children: (0, Xr.jsx)(Ge, {
                      value: s.turnStartedAtMs,
                      dateStyle: `medium`,
                      timeStyle: `short`,
                    }),
                  })),
            (t[8] = s.turnStartedAtMs),
            (t[9] = T));
        let E;
        if (
          t[10] !== n ||
          t[11] !== r ||
          t[12] !== i ||
          t[13] !== a ||
          t[14] !== o ||
          t[15] !== s.images ||
          t[16] !== c ||
          t[17] !== l ||
          t[18] !== u ||
          t[19] !== d ||
          t[20] !== p ||
          t[21] !== h ||
          t[22] !== g ||
          t[23] !== _ ||
          t[24] !== v ||
          t[25] !== f
        ) {
          let e;
          (t[27] !== n ||
          t[28] !== r ||
          t[29] !== i ||
          t[30] !== a ||
          t[31] !== o ||
          t[32] !== c ||
          t[33] !== l ||
          t[34] !== u ||
          t[35] !== d ||
          t[36] !== p ||
          t[37] !== h ||
          t[38] !== g ||
          t[39] !== _ ||
          t[40] !== v ||
          t[41] !== f
            ? ((e = (e) => {
                if (e.loading)
                  return (0, Xr.jsx)(
                    `div`,
                    {
                      ref: e.id === r ? d : void 0,
                      className: `w-72 max-w-full shrink-0`,
                      children: (0, Xr.jsx)(yn, { presentation: `playground` }),
                    },
                    e.id,
                  );
                let t = Cn(e.id),
                  s = e.id === r,
                  m = i.has(t);
                return (0, Xr.jsx)(
                  mr,
                  {
                    active: s,
                    comments: l.get(t) ?? Zr,
                    conversationId: a,
                    image: e,
                    imageAssetResolver: c,
                    imageRef: s ? o : void 0,
                    isDraftActive: n === e.id,
                    isViewTransitioning: s && u,
                    selected: m,
                    tool: f,
                    onActivate: (t) => {
                      _(e, m, t);
                    },
                    onAddToChat: p,
                    onDeleteComment: (t) => {
                      h(e, t);
                    },
                    onDraftActiveChange: (t) => {
                      g(e.id, t);
                    },
                    onSubmitComment: (t) => {
                      v(e, t);
                    },
                  },
                  e.id,
                );
              }),
              (t[27] = n),
              (t[28] = r),
              (t[29] = i),
              (t[30] = a),
              (t[31] = o),
              (t[32] = c),
              (t[33] = l),
              (t[34] = u),
              (t[35] = d),
              (t[36] = p),
              (t[37] = h),
              (t[38] = g),
              (t[39] = _),
              (t[40] = v),
              (t[41] = f),
              (t[42] = e))
            : (e = t[42]),
            (E = s.images.map(e)),
            (t[10] = n),
            (t[11] = r),
            (t[12] = i),
            (t[13] = a),
            (t[14] = o),
            (t[15] = s.images),
            (t[16] = c),
            (t[17] = l),
            (t[18] = u),
            (t[19] = d),
            (t[20] = p),
            (t[21] = h),
            (t[22] = g),
            (t[23] = _),
            (t[24] = v),
            (t[25] = f),
            (t[26] = E));
        } else E = t[26];
        let D;
        return (
          t[43] !== b || t[44] !== C || t[45] !== w || t[46] !== T || t[47] !== E
            ? ((D = (0, Xr.jsxs)(m.div, {
                initial: b,
                animate: x,
                transition: C,
                className: w,
                children: [T, E],
              })),
              (t[43] = b),
              (t[44] = C),
              (t[45] = w),
              (t[46] = T),
              (t[47] = E),
              (t[48] = D))
            : (D = t[48]),
          D
        );
      })));
  }),
  ei,
  ti = e(() => {
    (ke(),
      (ei = Ht({
        name: `slides-light-16`,
        canvas: {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 1.474609, y: 1.974609, width: 13.050781, height: 11.383789 },
          visualBounds: { x: 1.474609, y: 1.974609, width: 13.050781, height: 11.383789 },
        },
        paint: { kind: `monochrome` },
        optical: {
          shape: `non-circular`,
          bounds: { x: 1.474609, y: 1.974609, width: 13.050781, height: 11.383789 },
          center: { x: 8, y: 7.666504 },
          insets: { top: 1.974609, right: 1.47461, bottom: 2.641602, left: 1.474609 },
          anchors: {
            frame: { x: 8, y: 8 },
            ink: { x: 8, y: 7.666504 },
            foreground: { x: 8, y: 7.666504 },
          },
        },
        capabilities: [`icon`],
        body: `<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7998 4.30762C11.3511 4.30762 11.7964 4.30752 12.1562 4.33691C12.5222 4.36681 12.8463 4.43006 13.1465 4.58301C13.6215 4.82505 14.0079 5.21154 14.25 5.68652C14.403 5.98671 14.4662 6.31089 14.4961 6.67676C14.5255 7.03653 14.5254 7.48198 14.5254 8.0332V9.63281C14.5254 10.184 14.5255 10.6295 14.4961 10.9893C14.4662 11.3551 14.4029 11.6793 14.25 11.9795C14.0079 12.4545 13.6215 12.8409 13.1465 13.083C12.8462 13.236 12.5222 13.2992 12.1562 13.3291C11.7964 13.3585 11.3511 13.3584 10.7998 13.3584H5.2002C4.64886 13.3584 4.20357 13.3585 3.84375 13.3291C3.47779 13.2992 3.15377 13.236 2.85352 13.083C2.37848 12.8409 1.99206 12.4545 1.75 11.9795C1.59708 11.6793 1.5338 11.3551 1.50391 10.9893C1.47453 10.6295 1.47461 10.184 1.47461 9.63281V8.0332C1.47461 7.48198 1.47452 7.03653 1.50391 6.67676C1.53382 6.31089 1.59705 5.98671 1.75 5.68652C1.99208 5.21154 2.3785 4.82505 2.85352 4.58301C3.15375 4.43006 3.47782 4.36681 3.84375 4.33691C4.20357 4.30752 4.64887 4.30762 5.2002 4.30762H10.7998ZM5.2002 5.3584C4.63149 5.3584 4.23587 5.35869 3.92871 5.38379C3.62804 5.40839 3.45757 5.45362 3.33008 5.51855C3.05271 5.65992 2.82695 5.88575 2.68555 6.16309C2.6206 6.29055 2.57539 6.46112 2.55078 6.76172C2.52569 7.06884 2.52539 7.46462 2.52539 8.0332V9.63281C2.52539 10.2014 2.5257 10.5972 2.55078 10.9043C2.57537 11.2049 2.62064 11.3755 2.68555 11.5029C2.82692 11.7803 3.05269 12.0061 3.33008 12.1475C3.45758 12.2124 3.62797 12.2576 3.92871 12.2822C4.23588 12.3073 4.63148 12.3076 5.2002 12.3076H10.7998C11.3685 12.3076 11.7641 12.3073 12.0713 12.2822C12.372 12.2576 12.5424 12.2124 12.6699 12.1475C12.9473 12.0061 13.1731 11.7803 13.3145 11.5029C13.3794 11.3755 13.4246 11.2049 13.4492 10.9043C13.4743 10.5972 13.4746 10.2014 13.4746 9.63281V8.0332C13.4746 7.46462 13.4743 7.06884 13.4492 6.76172C13.4246 6.46112 13.3794 6.29055 13.3145 6.16309C13.1731 5.88575 12.9473 5.65992 12.6699 5.51855C12.5424 5.45362 12.372 5.40839 12.0713 5.38379C11.7641 5.35869 11.3685 5.3584 10.7998 5.3584H5.2002Z" fill="currentColor"/> <path d="M12 1.97461C12.2899 1.97461 12.5254 2.21005 12.5254 2.5C12.5254 2.78995 12.2899 3.02539 12 3.02539H4C3.71005 3.02539 3.47461 2.78995 3.47461 2.5C3.47461 2.21005 3.71005 1.97461 4 1.97461H12Z" fill="currentColor"/>`,
      })));
  });
function ni(e) {
  let t = (0, ri.c)(39),
    { shouldShowCoachmark: n, view: i, onViewChange: a } = e,
    o = r(Ee),
    s = h(oi),
    c = z(),
    [l, d] = (0, ii.useState)(!1),
    f = (0, ii.useRef)(!1),
    p = n && !l && s === !1,
    m,
    g;
  (t[0] !== o || t[1] !== p || t[2] !== i
    ? ((m = () => {
        !p || i !== `single` || f.current || ((f.current = !0), Re(o, _e, {}));
      }),
      (g = [o, p, i]),
      (t[0] = o),
      (t[1] = p),
      (t[2] = i),
      (t[3] = m),
      (t[4] = g))
    : ((m = t[3]), (g = t[4])),
    (0, ii.useEffect)(m, g));
  let _;
  t[5] === o
    ? (_ = t[6])
    : ((_ = () => {
        (d(!0), o.set(oi, !0));
      }),
      (t[5] = o),
      (t[6] = _));
  let v = _,
    y;
  t[7] === c
    ? (y = t[8])
    : ((y = c.formatMessage({
        id: `codex.localConversation.imagePlayground.view`,
        defaultMessage: `Image view`,
        description: `Accessible label for the image view toggle.`,
      })),
      (t[7] = c),
      (t[8] = y));
  let b;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, ai.jsx)(Ye, { "aria-hidden": !1, asset: ei })), (t[9] = b))
    : (b = t[9]);
  let x;
  t[10] === c
    ? (x = t[11])
    : ((x = c.formatMessage({
        id: `codex.localConversation.imagePlayground.singleView`,
        defaultMessage: `Focused view`,
        description: `Accessible label for the focused image view.`,
      })),
      (t[10] = c),
      (t[11] = x));
  let S;
  t[12] === x
    ? (S = t[13])
    : ((S = { id: `single`, label: b, ariaLabel: x }), (t[12] = x), (t[13] = S));
  let C;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, ai.jsx)(Ye, { "aria-hidden": !1, asset: Ne })), (t[14] = C))
    : (C = t[14]);
  let w;
  t[15] === c
    ? (w = t[16])
    : ((w = c.formatMessage({
        id: `codex.localConversation.imagePlayground.playgroundView`,
        defaultMessage: `Canvas view`,
        description: `Accessible label for the image canvas view.`,
      })),
      (t[15] = c),
      (t[16] = w));
  let T;
  t[17] === w
    ? (T = t[18])
    : ((T = { id: `playground`, label: C, ariaLabel: w }), (t[17] = w), (t[18] = T));
  let D;
  t[19] !== T || t[20] !== S ? ((D = [S, T]), (t[19] = T), (t[20] = S), (t[21] = D)) : (D = t[21]);
  let O;
  t[22] !== v || t[23] !== a || t[24] !== o || t[25] !== p || t[26] !== i
    ? ((O = (e) => {
        (p && i === `single` && e === `playground` && Re(o, E, {}), v(), a(e));
      }),
      (t[22] = v),
      (t[23] = a),
      (t[24] = o),
      (t[25] = p),
      (t[26] = i),
      (t[27] = O))
    : (O = t[27]);
  let k;
  t[28] !== D || t[29] !== O || t[30] !== y || t[31] !== i
    ? ((k = (0, ai.jsx)(Kn, {
        ariaLabel: y,
        buttonClassName: `size-6 rounded-md`,
        className: `rounded-lg bg-surface p-1 shadow-sm ring-1 ring-border`,
        options: D,
        selectedId: i,
        size: `icon`,
        onSelect: O,
      })),
      (t[28] = D),
      (t[29] = O),
      (t[30] = y),
      (t[31] = i),
      (t[32] = k))
    : (k = t[32]);
  let A = k,
    j;
  return (
    t[33] !== v || t[34] !== c || t[35] !== p || t[36] !== A || t[37] !== i
      ? ((j = (0, ai.jsx)(`div`, {
          className: `absolute top-2 left-2 z-40`,
          children: p
            ? (0, ai.jsx)(on, {
                align: `start`,
                arrowAlignment: `start`,
                description: (0, ai.jsx)(u, {
                  id: `codex.localConversation.imagePlayground.canvasViewCoachmarkDescription`,
                  defaultMessage: `Switch between a focused image and all generated images`,
                  description: `Body copy shown in the image view toggle coachmark.`,
                }),
                dismissLabel: c.formatMessage({
                  id: `codex.localConversation.imagePlayground.canvasViewCoachmarkDismiss`,
                  defaultMessage: `Dismiss`,
                  description: `Accessible label for dismissing the image view toggle coachmark.`,
                }),
                onDismiss: v,
                open: !0,
                side: `right`,
                sideOffset: 12,
                title:
                  i === `single`
                    ? (0, ai.jsx)(u, {
                        id: `codex.localConversation.imagePlayground.canvasViewCoachmarkTitle`,
                        defaultMessage: `Try Canvas view`,
                        description: `Title shown in the image view toggle coachmark when Canvas view is closed.`,
                      })
                    : (0, ai.jsx)(u, {
                        id: `codex.localConversation.imagePlayground.focusedViewCoachmarkTitle`,
                        defaultMessage: `Try focused view`,
                        description: `Title shown in the image view toggle coachmark when Canvas view is open.`,
                      }),
                children: A,
              })
            : A,
        })),
        (t[33] = v),
        (t[34] = c),
        (t[35] = p),
        (t[36] = A),
        (t[37] = i),
        (t[38] = j))
      : (j = t[38]),
    j
  );
}
var ri,
  ii,
  ai,
  oi,
  si = e(() => {
    ((ri = ct()),
      $e(),
      ti(),
      Ot(),
      L(),
      (ii = t(s(), 1)),
      X(),
      Ue(),
      Gn(),
      W(),
      vt(),
      sn(),
      Ct(),
      (ai = Q()),
      (oi = Xe(`has-dismissed-image-canvas-view-coachmark-v1`, !1)));
  }),
  ci,
  li = e(() => {
    (ke(),
      (ci = Ht({
        name: `eraser-light-16`,
        canvas: {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 1.719971, y: 1.720215, width: 12.560547, height: 12.560547 },
          visualBounds: { x: 1.719971, y: 1.720215, width: 12.560547, height: 12.560547 },
        },
        paint: { kind: `monochrome` },
        optical: {
          shape: `non-circular`,
          bounds: { x: 1.719971, y: 1.720215, width: 12.560547, height: 12.560547 },
          center: { x: 8.000244, y: 8.000488 },
          insets: { top: 1.720215, right: 1.719482, bottom: 1.719238, left: 1.719971 },
          anchors: {
            frame: { x: 8, y: 8 },
            ink: { x: 8.000244, y: 8.000488 },
            foreground: { x: 8.000244, y: 8.000488 },
          },
        },
        capabilities: [`icon`],
        body: `<path fill-rule="evenodd" clip-rule="evenodd" d="M8.49183 1.8534C9.03877 1.67576 9.62846 1.67588 10.1754 1.8534C10.5186 1.96489 10.8145 2.16268 11.1198 2.42176C11.4204 2.67698 11.7647 3.02276 12.194 3.45204L12.5494 3.80653C12.9787 4.23578 13.3235 4.5811 13.5787 4.88172C13.8378 5.18688 14.0355 5.48213 14.1471 5.82508C14.3249 6.37229 14.3248 6.96244 14.1471 7.50965C14.0355 7.85278 13.8379 8.14773 13.5787 8.45301C13.3235 8.7537 12.9788 9.09785 12.5494 9.52723L9.52699 12.5497C9.09761 12.9791 8.75346 13.3237 8.45277 13.579C8.14749 13.8381 7.85253 14.0358 7.50941 14.1473C6.96219 14.3251 6.37204 14.3251 5.82484 14.1473C5.48189 14.0358 5.18663 13.838 4.88148 13.579C4.58085 13.3237 4.23554 12.9789 3.80628 12.5497L3.45179 12.1942C3.02252 11.7649 2.67674 11.4206 2.42152 11.12C2.16244 10.8148 1.96465 10.5188 1.85316 10.1757C1.67564 9.6287 1.67551 9.03901 1.85316 8.49208C1.96473 8.14887 2.1623 7.85308 2.42152 7.54774C2.67683 7.247 3.02232 6.90299 3.45179 6.47352L6.47328 3.45204C6.90275 3.02256 7.24676 2.67707 7.5475 2.42176C7.85284 2.16255 8.14863 1.96497 8.49183 1.8534ZM4.00062 7.41004C3.66014 7.75146 3.40954 8.00688 3.2223 8.22743C3.00533 8.48301 2.90388 8.65739 2.85218 8.81629C2.74294 9.15252 2.74306 9.5152 2.85218 9.85145C2.90382 10.0103 3.00549 10.1849 3.2223 10.4403C3.44333 10.7007 3.75252 11.0106 4.19398 11.452L4.54945 11.8065C4.99068 12.2478 5.29993 12.5572 5.56019 12.7782C5.81557 12.995 5.99026 13.0976 6.14906 13.1493C6.48524 13.2585 6.848 13.2584 7.18421 13.1493C7.3432 13.0976 7.51734 12.9953 7.77308 12.7782C7.99364 12.591 8.24805 12.3394 8.58949 11.9989L4.00062 7.41004ZM9.85121 2.85243C9.51495 2.7433 9.15228 2.74318 8.81605 2.85243C8.65715 2.90412 8.48276 3.00557 8.22718 3.22254C7.96675 3.44365 7.65715 3.75254 7.21546 4.19422L4.74183 6.66688L9.33265 11.2577L11.8063 8.78504C12.248 8.34332 12.5569 8.03377 12.778 7.77333C12.9951 7.51758 13.0974 7.34345 13.1491 7.18446C13.2581 6.84824 13.2583 6.48548 13.1491 6.1493C13.0973 5.9905 12.9948 5.81581 12.778 5.56044C12.5569 5.30017 12.2475 4.99092 11.8063 4.54969L11.4518 4.19422C11.0103 3.75276 10.7004 3.44357 10.4401 3.22254C10.1846 3.00574 10.0101 2.90406 9.85121 2.85243Z" fill="currentColor"/>`,
      })));
  }),
  ui,
  di,
  fi = e(() => {
    (s(),
      (ui = Q()),
      (di = (e) =>
        (0, ui.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, ui.jsx)(`path`, {
            d: `M16.0015 7.33334C16.0015 6.62231 16.0016 6.12897 15.9702 5.74545C15.9472 5.4635 15.9094 5.27399 15.8579 5.13022L15.8022 5.00034C15.6483 4.69823 15.4139 4.4452 15.1265 4.26889L14.9995 4.19858C14.8415 4.11812 14.63 4.0613 14.2544 4.03061C13.8709 3.99929 13.3774 3.99838 12.6665 3.99838H7.3335C6.62246 3.99838 6.12913 3.99928 5.74561 4.03061C5.3699 4.06131 5.1585 4.11807 5.00049 4.19858C4.65524 4.3745 4.37465 4.65509 4.19873 5.00034C4.11822 5.15834 4.06146 5.36975 4.03076 5.74545C3.99943 6.12897 3.99854 6.62231 3.99854 7.33334V12.6664C3.99854 13.3772 3.99945 13.8708 4.03076 14.2542C4.06145 14.6298 4.11827 14.8414 4.19873 14.9994L4.26904 15.1263C4.44535 15.4137 4.69838 15.6482 5.00049 15.8021L5.13037 15.8578C5.27414 15.9092 5.46365 15.947 5.74561 15.9701C6.12912 16.0014 6.62246 16.0013 7.3335 16.0013H12.6665C13.3774 16.0013 13.8709 16.0014 14.2544 15.9701C14.6298 15.9394 14.8415 15.8825 14.9995 15.8021C15.3448 15.6262 15.6263 15.3446 15.8022 14.9994L15.8579 14.8695C15.9093 14.7257 15.9472 14.536 15.9702 14.2542C16.0015 13.8708 16.0015 13.3772 16.0015 12.6664V7.33334ZM17.3315 12.6664C17.3315 13.3554 17.3322 13.9124 17.2954 14.3626C17.2627 14.7636 17.1977 15.1248 17.0532 15.4613L16.9868 15.6039C16.6834 16.1992 16.1993 16.6833 15.604 16.9867C15.2272 17.1786 14.8208 17.2578 14.3628 17.2953C13.9126 17.332 13.3555 17.3314 12.6665 17.3314H7.3335C6.64441 17.3314 6.08745 17.332 5.63721 17.2953C5.23652 17.2625 4.87587 17.1973 4.53955 17.0531L4.39697 16.9867C3.87586 16.7211 3.43936 16.3174 3.13525 15.8216L3.01318 15.6039C2.82122 15.2271 2.74201 14.8206 2.70459 14.3626C2.66782 13.9124 2.66846 13.3553 2.66846 12.6664V7.33334C2.66846 6.64425 2.6678 6.0873 2.70459 5.63706C2.742 5.17926 2.82138 4.77344 3.01318 4.39682C3.31662 3.80129 3.80144 3.31647 4.39697 3.01303C4.77359 2.82123 5.17942 2.74185 5.63721 2.70444C6.08745 2.66765 6.6444 2.66831 7.3335 2.66831H12.6665C13.3555 2.66831 13.9126 2.66767 14.3628 2.70444C14.8208 2.74186 15.2272 2.82106 15.604 3.01303L15.8218 3.1351C16.3176 3.4392 16.7213 3.8757 16.9868 4.39682L17.0532 4.5394C17.1975 4.87572 17.2627 5.23637 17.2954 5.63706C17.3322 6.0873 17.3315 6.64425 17.3315 7.33334V12.6664Z`,
          }),
        })));
  }),
  pi,
  mi,
  hi = e(() => {
    (s(),
      (pi = Q()),
      (mi = (e) =>
        (0, pi.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, pi.jsx)(`path`, {
            d: `M15.1687 6.5C15.1687 5.78896 15.1678 5.29563 15.1365 4.91211C15.1134 4.6301 15.0756 4.44066 15.0242 4.29688L14.9685 4.16699C14.8145 3.8648 14.5803 3.61186 14.2927 3.43555L14.1667 3.36524C14.0088 3.28475 13.7971 3.22797 13.4216 3.19727C13.0382 3.16594 12.5446 3.16504 11.8337 3.16504H8.16675C7.45571 3.16504 6.96238 3.16593 6.57886 3.19727C6.20315 3.22797 5.99175 3.28473 5.83374 3.36524C5.4885 3.54116 5.2079 3.82175 5.03198 4.16699C4.95147 4.325 4.89472 4.5364 4.86401 4.91211C4.83268 5.29563 4.83179 5.78896 4.83179 6.5V13.5C4.83179 14.211 4.83268 14.7044 4.86401 15.0879C4.89472 15.4636 4.95147 15.675 5.03198 15.833L5.1023 15.959C5.27861 16.2466 5.53148 16.4807 5.83374 16.6348L5.96362 16.6914C6.10737 16.7428 6.297 16.7797 6.57886 16.8027C6.96238 16.8341 7.45571 16.835 8.16675 16.835H11.8337C12.5446 16.835 13.0382 16.8341 13.4216 16.8027C13.7971 16.772 14.0088 16.7153 14.1667 16.6348L14.2927 16.5645C14.5803 16.3881 14.8145 16.1352 14.9685 15.833L15.0242 15.7031C15.0756 15.5593 15.1134 15.3699 15.1365 15.0879C15.1678 14.7044 15.1687 14.211 15.1687 13.5V6.5ZM16.4988 13.5C16.4988 14.1891 16.4985 14.746 16.4617 15.1963C16.4289 15.5969 16.3647 15.9577 16.2205 16.2939L16.1531 16.4365C15.8875 16.9577 15.484 17.3941 14.988 17.6982L14.7703 17.8203C14.3937 18.0122 13.9878 18.0915 13.53 18.1289C13.0799 18.1657 12.5227 18.165 11.8337 18.165H8.16675C7.47766 18.165 6.9207 18.1657 6.47046 18.1289C6.06981 18.0962 5.70909 18.031 5.3728 17.8867L5.23023 17.8203C4.70919 17.5548 4.2726 17.151 3.96851 16.6553L3.84644 16.4365C3.65463 16.0599 3.57525 15.6541 3.53784 15.1963C3.50106 14.746 3.50171 14.1891 3.50171 13.5V6.5C3.50171 5.81091 3.50106 5.25395 3.53784 4.80371C3.57525 4.34592 3.65463 3.94009 3.84644 3.56348C4.14988 2.96794 4.63469 2.48313 5.23023 2.17969C5.60684 1.98788 6.01267 1.90851 6.47046 1.87109C6.9207 1.83431 7.47766 1.83496 8.16675 1.83496H11.8337C12.5227 1.83496 13.0799 1.83431 13.53 1.87109C13.9878 1.90853 14.3937 1.98783 14.7703 2.17969L14.988 2.30176C15.484 2.60587 15.8875 3.04228 16.1531 3.56348L16.2205 3.70606C16.3647 4.0423 16.4289 4.40313 16.4617 4.80371C16.4985 5.25395 16.4988 5.81091 16.4988 6.5V13.5Z`,
          }),
        })));
  }),
  gi,
  _i,
  vi = e(() => {
    (s(),
      (gi = Q()),
      (_i = (e) =>
        (0, gi.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, gi.jsx)(`path`, {
            d: `M16.835 8.16666C16.835 7.45562 16.8341 6.96229 16.8027 6.57877C16.7797 6.29691 16.7428 6.10728 16.6914 5.96353L16.6348 5.83365C16.4807 5.53139 16.2466 5.27852 15.959 5.1022L15.833 5.03189C15.675 4.95138 15.4636 4.89462 15.0879 4.86392C14.7044 4.83259 14.211 4.8317 13.5 4.8317H6.5C5.78896 4.8317 5.29563 4.83259 4.91211 4.86392C4.5364 4.89462 4.325 4.95138 4.16699 5.03189C3.82175 5.20781 3.54116 5.48841 3.36524 5.83365C3.28473 5.99166 3.22797 6.20306 3.19727 6.57877C3.16593 6.96229 3.16504 7.45562 3.16504 8.16666V11.8336C3.16504 12.5445 3.16594 13.0381 3.19727 13.4215C3.22797 13.797 3.28475 14.0087 3.36524 14.1667L3.43555 14.2926C3.61186 14.5802 3.8648 14.8144 4.16699 14.9684L4.29688 15.0241C4.44066 15.0756 4.6301 15.1133 4.91211 15.1364C5.29563 15.1677 5.78896 15.1686 6.5 15.1686H13.5C14.211 15.1686 14.7044 15.1677 15.0879 15.1364C15.4635 15.1057 15.675 15.0489 15.833 14.9684L15.959 14.8971C16.2464 14.7209 16.4808 14.4687 16.6348 14.1667L16.6914 14.0358C16.7427 13.8922 16.7797 13.7028 16.8027 13.4215C16.8341 13.0381 16.835 12.5445 16.835 11.8336V8.16666ZM18.165 11.8336C18.165 12.5226 18.1657 13.0798 18.1289 13.5299C18.0961 13.9306 18.031 14.2913 17.8867 14.6276L17.8203 14.7702C17.5549 15.2911 17.1509 15.7268 16.6553 16.0309L16.4365 16.153C16.0598 16.3449 15.6542 16.4242 15.1963 16.4616C14.746 16.4984 14.1891 16.4987 13.5 16.4987H6.5C5.81091 16.4987 5.25395 16.4984 4.80371 16.4616C4.40313 16.4288 4.0423 16.3646 3.70606 16.2204L3.56348 16.153C3.04228 15.8874 2.60587 15.4839 2.30176 14.9879L2.17969 14.7702C1.98783 14.3936 1.90853 13.9877 1.87109 13.5299C1.83431 13.0798 1.83496 12.5226 1.83496 11.8336V8.16666C1.83496 7.47757 1.83431 6.92061 1.87109 6.47037C1.90851 6.01258 1.98788 5.60675 2.17969 5.23013C2.48313 4.6346 2.96794 4.14978 3.56348 3.84634C3.94009 3.65454 4.34592 3.57516 4.80371 3.53775C5.25395 3.50096 5.81091 3.50162 6.5 3.50162H13.5C14.1891 3.50162 14.746 3.50096 15.1963 3.53775C15.6541 3.57516 16.0599 3.65454 16.4365 3.84634L16.6553 3.96842C17.151 4.27251 17.5548 4.7091 17.8203 5.23013L17.8867 5.37271C18.031 5.709 18.0962 6.06972 18.1289 6.47037C18.1657 6.92061 18.165 7.47756 18.165 8.16666V11.8336Z`,
          }),
        })));
  }),
  yi,
  bi,
  xi = e(() => {
    (s(),
      (yi = Q()),
      (bi = (e) =>
        (0, yi.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, yi.jsx)(`path`, {
            d: `M9.16504 2.33154C8.454 2.33154 7.96067 2.33243 7.57715 2.36377C7.29514 2.38681 7.1057 2.4246 6.96191 2.47607L6.83203 2.53174C6.52984 2.68571 6.2769 2.91997 6.10059 3.20752L6.03027 3.3335C5.94979 3.49146 5.89301 3.70311 5.86231 4.07861C5.83098 4.46207 5.83008 4.95564 5.83008 5.6665V14.3335C5.83008 15.0445 5.83097 15.5379 5.86231 15.9214C5.89301 16.2971 5.94977 16.5085 6.03027 16.6665C6.2062 17.0117 6.48679 17.2923 6.83203 17.4683C6.99004 17.5488 7.20144 17.6055 7.57715 17.6362C7.96067 17.6676 8.454 17.6685 9.16504 17.6685L10.835 17.7056C11.546 17.7056 12.0393 17.7047 12.4229 17.6733C12.7986 17.6426 13.01 17.5859 13.168 17.5054L13.2939 17.4351C13.5816 17.2587 13.8157 17.0059 13.9697 16.7036L14.0264 16.5737C14.0778 16.43 14.1147 16.2404 14.1377 15.9585C14.169 15.575 14.1699 15.0816 14.1699 14.3706V5.70361C14.1699 4.99275 14.169 4.49918 14.1377 4.11572C14.107 3.74022 14.0502 3.52857 13.9697 3.3706L13.8994 3.24463C13.7231 2.95708 13.4702 2.72282 13.168 2.56885L13.0381 2.51318C12.8943 2.46171 12.7049 2.42392 12.4229 2.40088C12.0393 2.36954 11.546 2.36865 10.835 2.36865L9.16504 2.33154ZM10.835 1.03857C11.5241 1.03857 12.081 1.0389 12.5312 1.07568C12.9318 1.10842 13.2927 1.1727 13.6289 1.31689L13.7715 1.38428C14.2927 1.64984 14.7291 2.05339 15.0332 2.54932L15.1553 2.76709C15.3471 3.14369 15.4264 3.54956 15.4639 4.00732C15.5006 4.45749 15.5 5.01467 15.5 5.70361V14.3706C15.5 15.0597 15.5007 15.6167 15.4639 16.0669C15.4311 16.4675 15.3659 16.8283 15.2217 17.1646L15.1553 17.3071C14.8898 17.8282 14.4859 18.2648 13.9902 18.5688L13.7715 18.6909C13.3949 18.8827 12.989 18.9621 12.5312 18.9995C12.081 19.0363 11.5241 19.0356 10.835 19.0356L9.16504 18.9985C8.47595 18.9985 7.91899 18.9992 7.46875 18.9624C7.01096 18.925 6.60513 18.8456 6.22852 18.6538C5.63298 18.3504 5.14817 17.8656 4.84473 17.27C4.65292 16.8934 4.57355 16.4876 4.53613 16.0298C4.49935 15.5795 4.5 15.0226 4.5 14.3335V5.6665C4.5 4.97756 4.49935 4.42038 4.53613 3.97021C4.57356 3.51245 4.65287 3.10658 4.84473 2.72998L4.9668 2.51221C5.2709 2.01628 5.70732 1.61273 6.22852 1.34717L6.37109 1.27979C6.70734 1.13559 7.06817 1.07131 7.46875 1.03857C7.91899 1.00179 8.47595 1.00146 9.16504 1.00146L10.835 1.03857Z`,
          }),
        })));
  }),
  Si,
  Ci,
  wi = e(() => {
    (s(),
      (Si = Q()),
      (Ci = (e) =>
        (0, Si.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, Si.jsx)(`path`, {
            d: `M17.6685 9C17.6685 8.28896 17.6676 7.79563 17.6362 7.41211C17.6132 7.1301 17.5754 6.94066 17.5239 6.79688L17.4683 6.66699C17.3143 6.3648 17.08 6.11186 16.7925 5.93555L16.6665 5.86524C16.5085 5.78475 16.2969 5.72797 15.9214 5.69727C15.5379 5.66594 15.0444 5.66504 14.3335 5.66504H5.6665C4.95547 5.66504 4.46213 5.66593 4.07861 5.69727C3.70291 5.72797 3.4915 5.78473 3.3335 5.86524C2.98825 6.04116 2.70766 6.32175 2.53174 6.66699C2.45123 6.825 2.39447 7.0364 2.36377 7.41211C2.33244 7.79563 2.33154 8.28896 2.33154 9V11C2.33154 11.711 2.33244 12.2044 2.36377 12.5879C2.39447 12.9636 2.45123 13.175 2.53174 13.333L2.60205 13.459C2.77837 13.7466 3.03124 13.9807 3.3335 14.1348L3.46338 14.1914C3.60713 14.2428 3.79676 14.2797 4.07861 14.3027C4.46213 14.3341 4.95547 14.335 5.6665 14.335H14.3335C15.0444 14.335 15.5379 14.3341 15.9214 14.3027C16.2969 14.272 16.5085 14.2153 16.6665 14.1348L16.7925 14.0645C17.08 13.8881 17.3143 13.6352 17.4683 13.333L17.5239 13.2031C17.5754 13.0593 17.6132 12.8699 17.6362 12.5879C17.6676 12.2044 17.6685 11.711 17.6685 11V9ZM18.9985 11C18.9985 11.6891 18.9982 12.246 18.9614 12.6963C18.9287 13.0969 18.8644 13.4577 18.7202 13.7939L18.6528 13.9365C18.3873 14.4577 17.9837 14.8941 17.4878 15.1982L17.27 15.3203C16.8934 15.5122 16.4876 15.5915 16.0298 15.6289C15.5796 15.6657 15.0224 15.665 14.3335 15.665H5.6665C4.97741 15.665 4.42046 15.6657 3.97022 15.6289C3.56957 15.5962 3.20885 15.531 2.87256 15.3867L2.72998 15.3203C2.20895 15.0548 1.77236 14.651 1.46826 14.1553L1.34619 13.9365C1.15439 13.5599 1.07501 13.1541 1.0376 12.6963C1.00081 12.246 1.00147 11.6891 1.00147 11V9C1.00147 8.31091 1.00081 7.75395 1.0376 7.30371C1.07501 6.84592 1.15439 6.44009 1.34619 6.06348C1.64963 5.46794 2.13445 4.98313 2.72998 4.67969C3.1066 4.48788 3.51242 4.40851 3.97022 4.37109C4.42046 4.33431 4.97741 4.33496 5.6665 4.33496H14.3335C15.0224 4.33496 15.5796 4.33431 16.0298 4.37109C16.4876 4.40853 16.8934 4.48783 17.27 4.67969L17.4878 4.80176C17.9837 5.10587 18.3873 5.54228 18.6528 6.06348L18.7202 6.20606C18.8644 6.5423 18.9287 6.90313 18.9614 7.30371C18.9982 7.75395 18.9985 8.31091 18.9985 9V11Z`,
          }),
        })));
  }),
  Ti,
  Ei,
  Di = e(() => {
    (s(),
      (Ti = Q()),
      (Ei = (e) =>
        (0, Ti.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, Ti.jsx)(`path`, {
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M14.667 4.80762C15.6931 4.80779 16.5252 5.63994 16.5254 6.66602V13.333C16.5254 14.3592 15.6932 15.1912 14.667 15.1914H5.33301C4.30683 15.1912 3.47461 14.3592 3.47461 13.333V6.66602C3.47478 5.63994 4.30694 4.80779 5.33301 4.80762H14.667ZM5.33301 5.8584C4.88683 5.85857 4.52557 6.21984 4.52539 6.66602V8.99414C4.76984 8.87578 5.04327 8.80767 5.33301 8.80762H10.667C11.6931 8.80779 12.5252 9.63995 12.5254 10.666V13.333C12.5254 13.6232 12.4566 13.8969 12.3379 14.1416H14.667C15.1133 14.1414 15.4746 13.7793 15.4746 13.333V6.66602C15.4744 6.21984 15.1132 5.85857 14.667 5.8584H5.33301ZM5.33301 9.8584C4.88684 9.85857 4.52557 10.2198 4.52539 10.666V13.333C4.52539 13.7793 4.88673 14.1414 5.33301 14.1416H10.667C11.1133 14.1414 11.4746 13.7793 11.4746 13.333V10.666C11.4744 10.2198 11.1132 9.85857 10.667 9.8584H5.33301Z`,
          }),
        })));
  });
function Oi(e) {
  let t = (0, Ii.c)(94),
    {
      alt: n,
      isFullscreen: r,
      isSubmitting: i,
      onCancel: a,
      onSubmit: o,
      referrerPolicy: s,
      src: c,
    } = e,
    l = r !== void 0 && r,
    d = z(),
    f = (0, Li.useRef)(null),
    p = (0, Li.useRef)(null),
    [m, h] = (0, Li.useState)(null),
    [g, _] = (0, Li.useState)(zi),
    [v, y] = (0, Li.useState)(null),
    b;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = []), (t[0] = b)) : (b = t[0]);
  let [x, S] = (0, Li.useState)(b),
    C;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((C = []), (t[1] = C)) : (C = t[1]);
  let [w, T] = (0, Li.useState)(C),
    E = x.length > 0 || w.length > 0,
    D;
  t[2] === m
    ? (D = t[3])
    : ((D = (e, t) => {
        (S(e), T(t));
        let n = f.current;
        n != null && m != null && Ai(n, m, e, getComputedStyle(n).color);
      }),
      (t[2] = m),
      (t[3] = D));
  let O = D,
    k;
  t[4] !== g || t[5] !== m
    ? ((k = (e, t) => {
        m != null && y(t == null ? null : { ...t, size: Fi(e, m, g) });
      }),
      (t[4] = g),
      (t[5] = m),
      (t[6] = k))
    : (k = t[6]);
  let A = k,
    j;
  t[7] !== x || t[8] !== O
    ? ((j = (e) => {
        let t = p.current;
        t != null &&
          ((p.current = null),
          e.currentTarget.releasePointerCapture(e.pointerId),
          O([...x, t], []));
      }),
      (t[7] = x),
      (t[8] = O),
      (t[9] = j))
    : (j = t[9]);
  let M = j,
    N;
  t[10] === E
    ? (N = t[11])
    : ((N = E
        ? null
        : (0, Ri.jsx)(`span`, {
            className: `min-w-0 truncate px-1.5 text-base leading-[18px] text-tertiary`,
            children: (0, Ri.jsx)(u, {
              id: `imageSidePanel.removeHelper`,
              defaultMessage: `Brush over what you want to remove`,
              description: `Helper text shown while selecting an image area to remove.`,
            }),
          })),
      (t[10] = E),
      (t[11] = N));
  let P = x.length === 0,
    F = !E,
    ee;
  t[12] === d
    ? (ee = t[13])
    : ((ee = d.formatMessage({
        id: `imageSidePanel.undoRemoveSelection`,
        defaultMessage: `Undo`,
        description: `Toolbar action that undoes the last brushed remove selection.`,
      })),
      (t[12] = d),
      (t[13] = ee));
  let I;
  t[14] !== x || t[15] !== w || t[16] !== O
    ? ((I = () => {
        let e = x.at(-1);
        e != null && O(x.slice(0, -1), [...w, e]);
      }),
      (t[14] = x),
      (t[15] = w),
      (t[16] = O),
      (t[17] = I))
    : (I = t[17]);
  let L;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Ri.jsx)(Ye, { "aria-hidden": !1, asset: Bt })), (t[18] = L))
    : (L = t[18]);
  let R;
  t[19] !== ee || t[20] !== I || t[21] !== P || t[22] !== F
    ? ((R = (0, Ri.jsx)(at, {
        color: `ghostActive`,
        disabled: P,
        hidden: F,
        size: `composerSm`,
        uniform: !0,
        "aria-label": ee,
        onClick: I,
        children: L,
      })),
      (t[19] = ee),
      (t[20] = I),
      (t[21] = P),
      (t[22] = F),
      (t[23] = R))
    : (R = t[23]);
  let B = w.length === 0,
    V = !E,
    H;
  t[24] === d
    ? (H = t[25])
    : ((H = d.formatMessage({
        id: `imageSidePanel.redoRemoveSelection`,
        defaultMessage: `Redo`,
        description: `Toolbar action that redoes the last undone remove selection.`,
      })),
      (t[24] = d),
      (t[25] = H));
  let U;
  t[26] !== x || t[27] !== w || t[28] !== O
    ? ((U = () => {
        let e = w.at(-1);
        e != null && O([...x, e], w.slice(0, -1));
      }),
      (t[26] = x),
      (t[27] = w),
      (t[28] = O),
      (t[29] = U))
    : (U = t[29]);
  let te;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, Ri.jsx)(Ye, { className: `-scale-x-100`, "aria-hidden": !1, asset: Bt })),
      (t[30] = te))
    : (te = t[30]);
  let W;
  t[31] !== B || t[32] !== V || t[33] !== H || t[34] !== U
    ? ((W = (0, Ri.jsx)(at, {
        color: `ghostActive`,
        disabled: B,
        hidden: V,
        size: `composerSm`,
        uniform: !0,
        "aria-label": H,
        onClick: U,
        children: te,
      })),
      (t[31] = B),
      (t[32] = V),
      (t[33] = H),
      (t[34] = U),
      (t[35] = W))
    : (W = t[35]);
  let G = m == null || x.length === 0,
    ne;
  t[36] !== m || t[37] !== o || t[38] !== x
    ? ((ne = () => {
        m != null && x.length > 0 && o(Ni(m, x));
      }),
      (t[36] = m),
      (t[37] = o),
      (t[38] = x),
      (t[39] = ne))
    : (ne = t[39]);
  let K;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, Ri.jsx)(u, {
        id: `imageSidePanel.sendRemoveSelection`,
        defaultMessage: `Send`,
        description: `Toolbar action that submits the selected image area to remove.`,
      })),
      (t[40] = K))
    : (K = t[40]);
  let q;
  t[41] !== i || t[42] !== G || t[43] !== ne
    ? ((q = (0, Ri.jsx)(at, {
        className: `!border-transparent !bg-chart-blue !text-base !text-inverse enabled:hover:!bg-chart-blue/90 data-[state=open]:!bg-chart-blue/90`,
        color: `primary`,
        disabled: G,
        loading: i,
        size: `composerSm`,
        onClick: ne,
        children: K,
      })),
      (t[41] = i),
      (t[42] = G),
      (t[43] = ne),
      (t[44] = q))
    : (q = t[44]);
  let J;
  t[45] === d
    ? (J = t[46])
    : ((J = d.formatMessage({
        id: `imageSidePanel.cancelRemoveMode`,
        defaultMessage: `Cancel`,
        description: `Toolbar action that exits image remove mode.`,
      })),
      (t[45] = d),
      (t[46] = J));
  let X;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, Ri.jsx)(Ie, { "aria-hidden": !0, className: `icon-2xs` })), (t[47] = X))
    : (X = t[47]);
  let re;
  t[48] !== a || t[49] !== J
    ? ((re = (0, Ri.jsx)(at, {
        color: `ghostTertiary`,
        size: `composerSm`,
        uniform: !0,
        "aria-label": J,
        onClick: a,
        children: X,
      })),
      (t[48] = a),
      (t[49] = J),
      (t[50] = re))
    : (re = t[50]);
  let ie;
  t[51] !== R || t[52] !== W || t[53] !== q || t[54] !== re || t[55] !== N
    ? ((ie = (0, Ri.jsx)(`div`, {
        className: `flex shrink-0 justify-center px-4 pt-2`,
        children: (0, Ri.jsxs)(`div`, {
          className: `flex w-fit max-w-full items-center gap-0.5 overflow-hidden rounded-full bg-surface-tertiary/95 p-0.5 shadow-md ring-1 ring-border-subtle backdrop-blur-sm`,
          children: [N, R, W, q, re],
        }),
      })),
      (t[51] = R),
      (t[52] = W),
      (t[53] = q),
      (t[54] = re),
      (t[55] = N),
      (t[56] = ie))
    : (ie = t[56]);
  let ae = !l && `rounded-xl`,
    Z;
  t[57] === ae
    ? (Z = t[58])
    : ((Z = Y(`block max-h-[100cqh] max-w-full object-contain`, ae)), (t[57] = ae), (t[58] = Z));
  let oe;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (e) => {
        h({ height: e.currentTarget.naturalHeight, width: e.currentTarget.naturalWidth });
      }),
      (t[59] = oe))
    : (oe = t[59]);
  let se;
  t[60] !== n || t[61] !== s || t[62] !== c || t[63] !== Z
    ? ((se = (0, Ri.jsx)(`img`, { alt: n, className: Z, referrerPolicy: s, src: c, onLoad: oe })),
      (t[60] = n),
      (t[61] = s),
      (t[62] = c),
      (t[63] = Z),
      (t[64] = se))
    : (se = t[64]);
  let ce;
  t[65] !== g || t[66] !== M || t[67] !== m || t[68] !== d || t[69] !== l || t[70] !== A
    ? ((ce =
        m == null
          ? null
          : (0, Ri.jsx)(`canvas`, {
              ref: f,
              "aria-label": d.formatMessage({
                id: `imageSidePanel.removeSurface`,
                defaultMessage: `Mark areas to remove`,
                description: `Accessible label for the image surface where users brush over areas to remove.`,
              }),
              className: Y(
                `absolute inset-0 h-full w-full cursor-none touch-none text-info opacity-50`,
                !l && `rounded-xl`,
              ),
              height: m.height,
              width: m.width,
              onPointerDown: (e) => {
                if (e.button !== 0) return;
                let t = ki(e);
                t != null &&
                  (A(e.currentTarget, t),
                  (p.current = { brushSize: g, points: [t] }),
                  e.currentTarget.setPointerCapture(e.pointerId),
                  Mi(e.currentTarget, m, t, t, g, getComputedStyle(e.currentTarget).color));
              },
              onPointerMove: (e) => {
                let t = ki(e);
                A(e.currentTarget, t);
                let n = p.current;
                if (n == null || t == null) return;
                let r = n.points.at(-1);
                r != null &&
                  (n.points.push(t),
                  Mi(
                    e.currentTarget,
                    m,
                    r,
                    t,
                    n.brushSize,
                    getComputedStyle(e.currentTarget).color,
                  ));
              },
              onPointerUp: M,
              onPointerCancel: M,
              onPointerLeave: () => {
                y(null);
              },
            })),
      (t[65] = g),
      (t[66] = M),
      (t[67] = m),
      (t[68] = d),
      (t[69] = l),
      (t[70] = A),
      (t[71] = ce))
    : (ce = t[71]);
  let le;
  t[72] === v
    ? (le = t[73])
    : ((le =
        v == null
          ? null
          : (0, Ri.jsx)(`div`, {
              "aria-hidden": !0,
              className: `pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-text/20`,
              style: { height: v.size, left: `${v.x * 100}%`, top: `${v.y * 100}%`, width: v.size },
            })),
      (t[72] = v),
      (t[73] = le));
  let ue;
  t[74] !== se || t[75] !== ce || t[76] !== le
    ? ((ue = (0, Ri.jsxs)(`div`, {
        className: `relative max-h-[100cqh] max-w-full`,
        children: [se, ce, le],
      })),
      (t[74] = se),
      (t[75] = ce),
      (t[76] = le),
      (t[77] = ue))
    : (ue = t[77]);
  let de;
  t[78] === d
    ? (de = t[79])
    : ((de = d.formatMessage({
        id: `imageSidePanel.removeBrushSize`,
        defaultMessage: `Brush size`,
        description: `Accessible label for the slider that changes the remove selection brush size.`,
      })),
      (t[78] = d),
      (t[79] = de));
  let fe;
  t[80] === g ? (fe = t[81]) : ((fe = [g]), (t[80] = g), (t[81] = fe));
  let pe;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (e) => {
        let t = e[0];
        t != null && (y(null), _(t));
      }),
      (t[82] = pe))
    : (pe = t[82]);
  let me, he;
  t[83] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, Ri.jsx)(Nn, {
        className: `relative h-full w-3 text-text/30`,
        children: (0, Ri.jsx)(`svg`, {
          "aria-hidden": !0,
          className: `absolute inset-0 h-full w-full`,
          preserveAspectRatio: `none`,
          viewBox: `0 0 12 160`,
          children: (0, Ri.jsx)(`path`, { d: `M5 0h2l5 160H0Z`, fill: `currentColor` }),
        }),
      })),
      (he = (0, Ri.jsx)(nn, {
        className: `block h-4 w-4 cursor-interaction rounded-full border border-default bg-surface-tertiary shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring`,
      })),
      (t[83] = me),
      (t[84] = he))
    : ((me = t[83]), (he = t[84]));
  let ge;
  t[85] !== de || t[86] !== fe
    ? ((ge = (0, Ri.jsx)(`div`, {
        className: `absolute top-1/2 left-4 flex -translate-y-1/2 items-center`,
        children: (0, Ri.jsxs)(Xt, {
          "aria-label": de,
          className: `relative flex h-40 w-5 touch-none items-center justify-center select-none`,
          inverted: !0,
          max: Bi,
          min: Vi,
          orientation: `vertical`,
          step: 1,
          value: fe,
          onValueChange: pe,
          children: [me, he],
        }),
      })),
      (t[85] = de),
      (t[86] = fe),
      (t[87] = ge))
    : (ge = t[87]);
  let _e;
  t[88] !== ue || t[89] !== ge
    ? ((_e = (0, Ri.jsxs)(`div`, {
        className: `[container-type:size] relative flex min-h-0 flex-1 items-center justify-center overflow-hidden p-4 ps-14`,
        children: [ue, ge],
      })),
      (t[88] = ue),
      (t[89] = ge),
      (t[90] = _e))
    : (_e = t[90]);
  let ve;
  return (
    t[91] !== ie || t[92] !== _e
      ? ((ve = (0, Ri.jsxs)(`div`, {
          className: `flex h-0 min-h-0 flex-1 flex-col`,
          children: [ie, _e],
        })),
        (t[91] = ie),
        (t[92] = _e),
        (t[93] = ve))
      : (ve = t[93]),
    ve
  );
}
function ki(e) {
  let t = e.currentTarget.getBoundingClientRect();
  return t.width <= 0 || t.height <= 0
    ? null
    : { x: (e.clientX - t.left) / t.width, y: (e.clientY - t.top) / t.height };
}
function Ai(e, t, n, r) {
  ((e.width = t.width), (e.height = t.height));
  for (let i of n) ji(e, t, i, r);
}
function ji(e, t, n, r) {
  for (let i = 0; i < n.points.length; i += 1) {
    let a = n.points[i];
    a != null && Mi(e, t, n.points[i - 1] ?? a, a, n.brushSize, r);
  }
}
function Mi(e, t, n, r, i, a) {
  let o = e.getContext(`2d`);
  if (o == null) return;
  let s = n.x * t.width,
    c = n.y * t.height,
    l = r.x * t.width,
    u = r.y * t.height,
    d = Pi(t, i);
  if (s === l && c === u) {
    ((o.fillStyle = a), o.beginPath(), o.arc(s, c, d / 2, 0, Math.PI * 2), o.fill());
    return;
  }
  ((o.strokeStyle = a),
    (o.lineCap = `round`),
    (o.lineJoin = `round`),
    (o.lineWidth = d),
    o.beginPath(),
    o.moveTo(s, c),
    o.lineTo(l, u),
    o.stroke());
}
function Ni(e, t) {
  let n = document.createElement(`canvas`);
  ((n.width = e.width), (n.height = e.height));
  let r = n.getContext(`2d`);
  if (r == null) return ``;
  ((r.fillStyle = `black`), r.fillRect(0, 0, e.width, e.height));
  for (let r of t) ji(n, e, r, `white`);
  return n.toDataURL(`image/png`);
}
function Pi(e, t) {
  return (Math.min(e.width, e.height) * t) / Hi;
}
function Fi(e, t, n) {
  return e.clientWidth === 0 ? 0 : (Pi(t, n) * e.clientWidth) / t.width;
}
var Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui = e(() => {
    ((Ii = ct()),
      re(),
      en(),
      Kt(),
      (Li = t(s(), 1)),
      X(),
      a(),
      Ue(),
      Ve(),
      (Ri = Q()),
      (zi = 70),
      (Bi = 130),
      (Vi = 5),
      (Hi = 500));
  });
function Wi(e) {
  let t = (0, qi.c)(82),
    {
      alt: n,
      hasImageRail: r,
      imageRef: i,
      isFullscreen: a,
      referrerPolicy: o,
      src: s,
      trailingControls: c,
      toolbarVariant: l,
      zoom: u,
    } = e,
    d = r !== void 0 && r,
    p = a !== void 0 && a,
    m = l === void 0 ? `compact` : l,
    h = Wt(),
    g = (0, Ji.useRef)(null),
    _ = (0, Ji.useRef)(!1),
    v = (0, Ji.useRef)(null),
    [y, b] = (0, Ji.useState)(!1),
    [x, S] = (0, Ji.useState)(null),
    [C, w] = (0, Ji.useState)(null),
    [T, E] = (0, Ji.useState)(null),
    D = d ? Xi : 0,
    O = D + Zi * 2,
    k = Ki({
      naturalImageSize: x,
      viewportSize: T == null ? null : { height: T.height, width: Math.max(T.width - O, 1) },
    }),
    A = u.manualZoomPercent ?? k,
    j = A ?? 100,
    {
      zoomTargetRef: M,
      handleClickCapture: N,
      handlePointerMoveCapture: P,
      setScrollContainerRef: F,
      setZoomAtViewportCenter: ee,
    } = Nr({
      onZoomPercentChange: (e) => {
        (x != null && (_.current = !0), u.onZoomPercentChange(e));
      },
      viewportCenterInlineOffset: -D / 2,
      zoomPercent: j,
    }),
    I;
  t[0] === u
    ? (I = t[1])
    : ((I = () => {
        u.onZoomToFit();
        let e = v.current;
        e != null && ((e.scrollLeft = 0), (e.scrollTop = 0));
      }),
      (t[0] = u),
      (t[1] = I));
  let L = I,
    R = A == null ? null : Gi({ naturalImageSize: x, zoomPercent: A }),
    z;
  t[2] !== O || t[3] !== T || t[4] !== R?.height || t[5] !== R?.width
    ? ((z =
        T == null
          ? null
          : {
              height: Math.max(T.height, R?.height ?? T.height),
              width: Math.max(T.width, (R?.width ?? 0) + O),
            }),
      (t[2] = O),
      (t[3] = T),
      (t[4] = R?.height),
      (t[5] = R?.width),
      (t[6] = z))
    : (z = t[6]);
  let B = z,
    V = R != null && T != null && (R.height > T.height || R.width + O > T.width),
    H;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (e) => {
        let t = { height: e.clientHeight, width: e.clientWidth };
        t.height <= 0 ||
          t.width <= 0 ||
          E((e) => (e?.height === t.height && e.width === t.width ? e : t));
      }),
      (t[7] = H))
    : (H = t[7]);
  let U = H,
    te;
  t[8] === F
    ? (te = t[9])
    : ((te = (e) => {
        (F(e), (v.current = e), w(e), e != null && U(e));
      }),
      (t[8] = F),
      (t[9] = te));
  let W = te,
    G,
    ne;
  (t[10] === C
    ? ((G = t[11]), (ne = t[12]))
    : ((G = () => {
        if (C == null || typeof ResizeObserver > `u`) return;
        let e = new ResizeObserver(() => {
          U(C);
        });
        return (
          e.observe(C),
          () => {
            e.disconnect();
          }
        );
      }),
      (ne = [C, U]),
      (t[10] = C),
      (t[11] = G),
      (t[12] = ne)),
    (0, Ji.useEffect)(G, ne));
  let K, q;
  (t[13] !== V || t[14] !== C || t[15] !== u.manualZoomPercent || t[16] !== R
    ? ((K = () => {
        let e = v.current;
        _.current ||
          u.manualZoomPercent == null ||
          C == null ||
          e == null ||
          R == null ||
          !V ||
          ((_.current = !0),
          (e.scrollLeft = Math.max((e.scrollWidth - e.clientWidth) / 2, 0)),
          (e.scrollTop = Math.max((e.scrollHeight - e.clientHeight) / 2, 0)));
      }),
      (q = [V, C, u.manualZoomPercent, R]),
      (t[13] = V),
      (t[14] = C),
      (t[15] = u.manualZoomPercent),
      (t[16] = R),
      (t[17] = K),
      (t[18] = q))
    : ((K = t[17]), (q = t[18])),
    (0, Ji.useLayoutEffect)(K, q));
  let J;
  t[19] === V
    ? (J = t[20])
    : ((J = (e) => {
        let t = v.current;
        !V ||
          t == null ||
          e.pointerType === `touch` ||
          e.button !== 0 ||
          (e.preventDefault(),
          (g.current = {
            clientX: e.clientX,
            clientY: e.clientY,
            pointerId: e.pointerId,
            scrollLeft: t.scrollLeft,
            scrollTop: t.scrollTop,
          }),
          b(!0),
          typeof e.currentTarget.setPointerCapture == `function` &&
            e.currentTarget.setPointerCapture(e.pointerId));
      }),
      (t[19] = V),
      (t[20] = J));
  let X = J,
    re;
  t[21] === h
    ? (re = t[22])
    : ((re = (e) => {
        let t = g.current,
          n = v.current;
        t == null ||
          n == null ||
          t.pointerId !== e.pointerId ||
          (e.preventDefault(),
          (n.scrollLeft = t.scrollLeft - Pt(e.clientX - t.clientX, h)),
          (n.scrollTop = t.scrollTop - Pt(e.clientY - t.clientY, h)));
      }),
      (t[21] = h),
      (t[22] = re));
  let ie = re,
    ae;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (e) => {
        let t = g.current;
        t == null ||
          t.pointerId !== e.pointerId ||
          ((g.current = null),
          b(!1),
          typeof e.currentTarget.hasPointerCapture == `function` &&
            typeof e.currentTarget.releasePointerCapture == `function` &&
            e.currentTarget.hasPointerCapture(e.pointerId) &&
            e.currentTarget.releasePointerCapture(e.pointerId));
      }),
      (t[23] = ae))
    : (ae = t[23]);
  let Z = ae,
    oe = u.manualZoomPercent == null,
    se;
  t[24] !== L || t[25] !== oe
    ? ((se = { selected: oe, onSelect: L }), (t[24] = L), (t[25] = oe), (t[26] = se))
    : (se = t[26]);
  let ce;
  t[27] === j ? (ce = t[28]) : ((ce = Math.round(j)), (t[27] = j), (t[28] = ce));
  let le;
  t[29] !== ee || t[30] !== se || t[31] !== ce || t[32] !== m
    ? ((le = (0, Yi.jsx)(Et, {
        variant: m,
        fitOption: se,
        zoomPercent: ce,
        onZoomPercentChange: ee,
      })),
      (t[29] = ee),
      (t[30] = se),
      (t[31] = ce),
      (t[32] = m),
      (t[33] = le))
    : (le = t[33]);
  let ue;
  t[34] !== le || t[35] !== m
    ? ((ue = (0, Yi.jsx)(wr, { variant: m, children: le })),
      (t[34] = le),
      (t[35] = m),
      (t[36] = ue))
    : (ue = t[36]);
  let de;
  t[37] !== ue || t[38] !== c
    ? ((de = (0, Yi.jsxs)(`div`, {
        className: `absolute top-2 right-2 z-40 flex items-center gap-1`,
        children: [ue, c],
      })),
      (t[37] = ue),
      (t[38] = c),
      (t[39] = de))
    : (de = t[39]);
  let fe = d && `-me-18`,
    pe;
  t[40] === fe
    ? (pe = t[41])
    : ((pe = Y(`min-h-0 min-w-0 flex-1 py-4`, fe)), (t[40] = fe), (t[41] = pe));
  let me = u.manualZoomPercent != null && V ? `overflow-auto` : `overflow-hidden`,
    he;
  t[42] === me
    ? (he = t[43])
    : ((he = Y(`h-full min-h-0 w-full min-w-0`, me)), (t[42] = me), (t[43] = he));
  let ge = d && `pe-20`,
    _e = B == null ? `h-full w-full` : `shrink-0`,
    ve;
  t[44] !== ge || t[45] !== _e
    ? ((ve = Y(`flex items-center justify-center px-2`, ge, _e)),
      (t[44] = ge),
      (t[45] = _e),
      (t[46] = ve))
    : (ve = t[46]);
  let ye = B ?? void 0,
    be;
  t[47] !== i || t[48] !== M
    ? ((be = f(i, M)), (t[47] = i), (t[48] = M), (t[49] = be))
    : (be = t[49]);
  let xe = !p && `rounded-xl`,
    Se = R == null ? `max-h-full max-w-full` : `max-w-none`,
    Ce = V && (y ? `cursor-grabbing` : `cursor-grab`),
    we;
  t[50] !== xe || t[51] !== Se || t[52] !== Ce
    ? ((we = Y(`block shrink-0 object-contain`, xe, Se, Ce)),
      (t[50] = xe),
      (t[51] = Se),
      (t[52] = Ce),
      (t[53] = we))
    : (we = t[53]);
  let Te;
  t[54] === R
    ? (Te = t[55])
    : ((Te = R == null ? void 0 : { height: R.height, width: R.width }), (t[54] = R), (t[55] = Te));
  let Ee;
  t[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = (e) => {
        let { naturalHeight: t, naturalWidth: n } = e.currentTarget;
        t === 0 || n === 0 || S({ height: t, width: n });
      }),
      (t[56] = Ee))
    : (Ee = t[56]);
  let De;
  t[57] !== n ||
  t[58] !== X ||
  t[59] !== ie ||
  t[60] !== o ||
  t[61] !== s ||
  t[62] !== be ||
  t[63] !== we ||
  t[64] !== Te
    ? ((De = (0, Yi.jsx)(`img`, {
        ref: be,
        alt: n,
        className: we,
        draggable: !1,
        referrerPolicy: o,
        src: s,
        style: Te,
        onLoad: Ee,
        onLostPointerCapture: Z,
        onPointerCancel: Z,
        onPointerDown: X,
        onPointerMove: ie,
        onPointerUp: Z,
      })),
      (t[57] = n),
      (t[58] = X),
      (t[59] = ie),
      (t[60] = o),
      (t[61] = s),
      (t[62] = be),
      (t[63] = we),
      (t[64] = Te),
      (t[65] = De))
    : (De = t[65]);
  let Oe;
  t[66] !== ve || t[67] !== ye || t[68] !== De
    ? ((Oe = (0, Yi.jsx)(`div`, { className: ve, style: ye, children: De })),
      (t[66] = ve),
      (t[67] = ye),
      (t[68] = De),
      (t[69] = Oe))
    : (Oe = t[69]);
  let ke;
  t[70] !== N || t[71] !== P || t[72] !== W || t[73] !== he || t[74] !== Oe
    ? ((ke = (0, Yi.jsx)(`div`, {
        ref: W,
        className: he,
        onClickCapture: N,
        onPointerMoveCapture: P,
        children: Oe,
      })),
      (t[70] = N),
      (t[71] = P),
      (t[72] = W),
      (t[73] = he),
      (t[74] = Oe),
      (t[75] = ke))
    : (ke = t[75]);
  let Ae;
  t[76] !== pe || t[77] !== ke
    ? ((Ae = (0, Yi.jsx)(`div`, { className: pe, children: ke })),
      (t[76] = pe),
      (t[77] = ke),
      (t[78] = Ae))
    : (Ae = t[78]);
  let je;
  return (
    t[79] !== de || t[80] !== Ae
      ? ((je = (0, Yi.jsxs)(Yi.Fragment, { children: [de, Ae] })),
        (t[79] = de),
        (t[80] = Ae),
        (t[81] = je))
      : (je = t[81]),
    je
  );
}
function Gi({ naturalImageSize: e, zoomPercent: t }) {
  if (e == null) return null;
  let n = t / 100;
  return !Number.isFinite(n) || n <= 0 ? null : { height: e.height * n, width: e.width * n };
}
function Ki({ naturalImageSize: e, viewportSize: t }) {
  if (e == null || t == null) return null;
  let n = Math.min(1, t.width / e.width, t.height / e.height);
  return !Number.isFinite(n) || n <= 0 ? null : n * 100;
}
var qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi = e(() => {
    ((qi = ct()),
      Kt(),
      (Ji = t(s(), 1)),
      Te(),
      Jn(),
      p(),
      zr(),
      Or(),
      (Yi = Q()),
      (Xi = 72),
      (Zi = 8));
  });
function $i(e) {
  let t = (0, ia.c)(196),
    {
      alt: n,
      attachmentId: a,
      attachmentSrc: o,
      readOnly: s,
      referrerPolicy: c,
      src: l,
      downloadSrc: f,
      hasImageRail: p,
      loadingContent: m,
      imageSource: g,
      imageRef: y,
      imageId: b,
      onImageEditSubmit: S,
      onDownloaded: T,
      renderHeaderActions: E,
      tabId: O,
      zoom: A,
    } = e,
    j = s !== void 0 && s,
    M = f === void 0 ? l : f,
    N = p !== void 0 && p,
    P = r(i),
    ee;
  t[0] !== P || t[1] !== O
    ? ((ee = O != null && ye(P, O) === `right`), (t[0] = P), (t[1] = O), (t[2] = ee))
    : (ee = t[2]);
  let I = ee,
    L = h(I ? x : !1),
    R = S != null,
    B = r(We).value.routeKind === `chatgpt-thread` && S != null,
    V = m != null,
    H;
  t[3] === a ? (H = t[4]) : ((H = a?.startsWith(`image-playground:`)), (t[3] = a), (t[4] = H));
  let U = H === !0,
    te = h(Lt),
    W = h(ie),
    G = P.value.routeConversationId,
    K = U ? `generated` : g,
    q = d(),
    J = z(),
    X = F(gt, G) ?? `local`,
    re = St(X),
    Z = ae(G),
    { activeMode: oe } = Le(G),
    ce;
  t[5] !== G || t[6] !== Z.hostId
    ? ((ce = { conversationId: G, hostId: Z.hostId }), (t[5] = G), (t[6] = Z.hostId), (t[7] = ce))
    : (ce = t[7]);
  let { agentMode: le, permissionProfileId: ue, shouldSendPermissionOverrides: fe } = se(ce),
    { mode: me } = an(),
    { serviceTierSettings: he } = _(G),
    [ge, _e] = (0, aa.useState)(!1),
    [ve, be] = (0, aa.useState)(!1),
    [Se, Ce] = (0, aa.useState)(!1),
    [Te, Ee] = (0, aa.useState)(!1),
    [De, Oe] = (0, aa.useState)(!1),
    [ke, Ae] = (0, aa.useState)(ea),
    je;
  t[8] !== o || t[9] !== G || t[10] !== Z.cwd || t[11] !== V || t[12] !== S || t[13] !== j
    ? ((je = !j && !V && o.trim().length > 0 && ((G != null && Z.cwd != null) || S != null)),
      (t[8] = o),
      (t[9] = G),
      (t[10] = Z.cwd),
      (t[11] = V),
      (t[12] = S),
      (t[13] = j),
      (t[14] = je))
    : (je = t[14]);
  let Me = je,
    Ne;
  t[15] !== n || t[16] !== l
    ? ((Ne = na(l, n)), (t[15] = n), (t[16] = l), (t[17] = Ne))
    : (Ne = t[17]);
  let Ie = Ne,
    ze;
  t[18] !== M || t[19] !== J
    ? ((ze = xt(J, w(M) ?? `png`)), (t[18] = M), (t[19] = J), (t[20] = ze))
    : (ze = t[20]);
  let Be = ze,
    Ve;
  t[21] === o ? (Ve = t[22]) : ((Ve = mt(o)), (t[21] = o), (t[22] = Ve));
  let He = Ve,
    Ue = re.kind === `local` && re.id === X && He != null,
    Ge = W === `cloud`,
    Ke;
  if (t[23] !== a || t[24] !== o || t[25] !== te) {
    let e;
    (t[27] !== a || t[28] !== o
      ? ((e = (e) => (a == null ? e.attachmentSrc === o : e.attachmentId === a)),
        (t[27] = a),
        (t[28] = o),
        (t[29] = e))
      : (e = t[29]),
      (Ke = te.find(e)),
      (t[23] = a),
      (t[24] = o),
      (t[25] = te),
      (t[26] = Ke));
  } else Ke = t[26];
  let qe = Ke,
    Je;
  t[30] === qe?.comments
    ? (Je = t[31])
    : ((Je = qe?.comments ?? []), (t[30] = qe?.comments), (t[31] = Je));
  let Q = Je,
    Xe = !j && !V && qe != null,
    Ze = Xe ? qe.attachmentId : (a ?? ke),
    $e;
  if (
    t[32] !== He ||
    t[33] !== Ie ||
    t[34] !== o ||
    t[35] !== M ||
    t[36] !== X ||
    t[37] !== Ze ||
    t[38] !== K ||
    t[39] !== J ||
    t[40] !== B ||
    t[41] !== Ge ||
    t[42] !== q ||
    t[43] !== P ||
    t[44] !== l
  ) {
    let e = () => {
      (P.get(nt).danger(
        J.formatMessage({
          id: `imageSidePanel.commentUploadFailure`,
          defaultMessage: `Failed to add image comment`,
          description: `Error shown when the image required for a comment could not be attached to the composer.`,
        }),
      ),
        $e([]));
    };
    (($e = (t) => {
      if (B) {
        if (t.length === 0) {
          Jt(P, Ze, o);
          return;
        }
        Qe(P, `imageCommentDrafts`, (e) =>
          e.map((e) => (e.attachmentId === Ze ? { ...e, comments: t } : e)),
        );
        return;
      }
      dn(
        {
          composerScope: P,
          absoluteImageFilePath: He,
          attachmentId: Ze,
          attachmentSrc: o,
          downloadFileName: Ie,
          downloadSrc: M,
          excludeFromImageAnalytics: K == null,
          hostId: X,
          isCloudComposer: Ge,
          onUploadFailure: e,
          queryClient: q,
          src: l,
        },
        t,
      );
    }),
      (t[32] = He),
      (t[33] = Ie),
      (t[34] = o),
      (t[35] = M),
      (t[36] = X),
      (t[37] = Ze),
      (t[38] = K),
      (t[39] = J),
      (t[40] = B),
      (t[41] = Ge),
      (t[42] = q),
      (t[43] = P),
      (t[44] = l),
      (t[45] = $e));
  } else $e = t[45];
  let et;
  t[46] !== oe ||
  t[47] !== le ||
  t[48] !== a ||
  t[49] !== o ||
  t[50] !== G ||
  t[51] !== Z.cwd ||
  t[52] !== Z.hostId ||
  t[53] !== me ||
  t[54] !== U ||
  t[55] !== S ||
  t[56] !== ue ||
  t[57] !== P ||
  t[58] !== he ||
  t[59] !== fe ||
  t[60] !== l
    ? ((et = async (e, t) =>
        S == null
          ? G != null && Z.cwd != null
            ? (await ta({
                scope: P,
                conversationId: G,
                hostId: Z.hostId,
                cwd: Z.cwd,
                agentMode: le,
                permissionProfileId: ue,
                serviceTier: he.serviceTierForRequest,
                shouldSendPermissionOverrides: fe,
                activeCollaborationMode: oe,
                attachmentSrcs: t == null ? [o] : [o, t],
                attachmentPreviewSrc: l,
                followUpSubmitAction: me,
                prompt: e,
              }),
              U
                ? kn(P)
                : a != null && Qe(P, `imageAttachments`, (e) => e.filter((e) => e.id !== a)),
              !0)
            : !1
          : (await S(t == null ? { prompt: e } : { prompt: e, maskSrc: t })) !== !1),
      (t[46] = oe),
      (t[47] = le),
      (t[48] = a),
      (t[49] = o),
      (t[50] = G),
      (t[51] = Z.cwd),
      (t[52] = Z.hostId),
      (t[53] = me),
      (t[54] = U),
      (t[55] = S),
      (t[56] = ue),
      (t[57] = P),
      (t[58] = he),
      (t[59] = fe),
      (t[60] = l),
      (t[61] = et))
    : (et = t[61]);
  let tt = et,
    rt;
  t[62] !== o ||
  t[63] !== Q ||
  t[64] !== Ze ||
  t[65] !== K ||
  t[66] !== J ||
  t[67] !== B ||
  t[68] !== ge ||
  t[69] !== P ||
  t[70] !== tt
    ? ((rt = async () => {
        if (!(!B || Q.length === 0 || ge)) {
          _e(!0);
          try {
            (await tt(
              fn({ imageCommentGroups: [{ comments: Q, imageNumber: 1 }], intl: J, prompt: `` }),
            )) &&
              (K != null &&
                un(P, {
                  commentCount: Q.length,
                  hasGeneralInstruction: !1,
                  imageSource: K,
                  mode: `comment`,
                  selectedImageCount: 1,
                }),
              Jt(P, Ze, o));
          } catch (e) {
            let t = e;
            P.get(nt).danger(pn(t, J));
          }
          _e(!1);
        }
      }),
      (t[62] = o),
      (t[63] = Q),
      (t[64] = Ze),
      (t[65] = K),
      (t[66] = J),
      (t[67] = B),
      (t[68] = ge),
      (t[69] = P),
      (t[70] = tt),
      (t[71] = rt))
    : (rt = t[71]);
  let it = rt,
    ot;
  t[72] !== Me || t[73] !== K || t[74] !== J || t[75] !== P || t[76] !== tt
    ? ((ot = async (e) => {
        Me &&
          (K != null && un(P, { imageSource: K, mode: `resize`, selectedImageCount: 1 }),
          be(!0),
          await (async () => {
            try {
              let t = J.formatMessage(
                {
                  id: `imageSidePanel.resizePrompt`,
                  defaultMessage: `Make the aspect ratio {aspectRatio}`,
                  description: `Instruction sent when the user resizes an image from the image side panel.`,
                },
                { aspectRatio: e },
              );
              await tt(t);
            } catch (e) {
              let t = e;
              P.get(nt).danger(pn(t, J));
            }
          })().finally(() => {
            be(!1);
          }));
      }),
      (t[72] = Me),
      (t[73] = K),
      (t[74] = J),
      (t[75] = P),
      (t[76] = tt),
      (t[77] = ot))
    : (ot = t[77]);
  let st = ot,
    ct;
  t[78] !== Me || t[79] !== K || t[80] !== J || t[81] !== R || t[82] !== P || t[83] !== tt
    ? ((ct = async (e) => {
        !Me ||
          e.length === 0 ||
          (K != null && un(P, { imageSource: K, mode: `remove`, selectedImageCount: 1 }),
          Oe(!0),
          await (async () => {
            try {
              let t = R
                ? J.formatMessage({
                    id: `imageSidePanel.removeSelectionPrompt`,
                    defaultMessage: `Remove the selected area from this image`,
                    description: `Instruction sent to ChatGPT with an inpainting selection when the user submits the image editor's Remove tool.`,
                  })
                : J.formatMessage({
                    id: `imageSidePanel.removePrompt`,
                    defaultMessage: `Remove the area marked in the second image from the first image`,
                    description: `Instruction sent with the original image and a black-and-white selection mask when the user removes an area.`,
                  });
              (await tt(t, e), Ee(!1));
            } catch (e) {
              let t = e;
              P.get(nt).danger(pn(t, J));
            }
          })().finally(() => {
            Oe(!1);
          }));
      }),
      (t[78] = Me),
      (t[79] = K),
      (t[80] = J),
      (t[81] = R),
      (t[82] = P),
      (t[83] = tt),
      (t[84] = ct))
    : (ct = t[84]);
  let lt = ct,
    dt;
  t[85] !== J || t[86] !== P
    ? ((dt = () => {
        P.get(nt).danger(
          J.formatMessage({
            id: `imageSidePanel.downloadFailure`,
            defaultMessage: `Could not download image`,
            description: `Error shown when the image toolbar download fails.`,
          }),
        );
      }),
      (t[85] = J),
      (t[86] = P),
      (t[87] = dt))
    : (dt = t[87]);
  let ft = dt,
    pt;
  t[88] !== He ||
  t[89] !== Be ||
  t[90] !== M ||
  t[91] !== X ||
  t[92] !== b ||
  t[93] !== T ||
  t[94] !== q ||
  t[95] !== ft
    ? ((pt = async () => {
        let e = He == null ? M : await we(He, X, q);
        if (e == null) {
          ft();
          return;
        }
        (await de({ downloadSrc: e, onDownloaded: () => T?.(b), suggestedFilename: Be })) || ft();
      }),
      (t[88] = He),
      (t[89] = Be),
      (t[90] = M),
      (t[91] = X),
      (t[92] = b),
      (t[93] = T),
      (t[94] = q),
      (t[95] = ft),
      (t[96] = pt))
    : (pt = t[96]);
  let ht = pt,
    _t;
  t[97] !== I || t[98] !== J
    ? ((_t = I
        ? J.formatMessage({
            id: `imageSidePanel.save`,
            defaultMessage: `Save`,
            description: `Accessible label for the image viewer header button that saves the current image to the user's device.`,
          })
        : J.formatMessage({
            id: `imageSidePanel.download`,
            defaultMessage: `Download`,
            description: `Toolbar action that downloads the current image.`,
          })),
      (t[97] = I),
      (t[98] = J),
      (t[99] = _t))
    : (_t = t[99]);
  let vt = _t,
    yt;
  t[100] !== vt ||
  t[101] !== ht ||
  t[102] !== Be ||
  t[103] !== M ||
  t[104] !== R ||
  t[105] !== U ||
  t[106] !== V ||
  t[107] !== P
    ? ((yt = V
        ? (0, $.jsx)(at, {
            "aria-label": vt,
            color: `ghostActive`,
            disabled: !0,
            size: R ? `imageToolbar` : `composerSm`,
            uniform: !0,
            children: (0, $.jsx)(Ye, { "aria-hidden": !1, asset: kt }),
          })
        : (0, $.jsx)(`a`, {
            className: Y(
              `flex aspect-square cursor-interaction items-center justify-center gap-1 rounded-full border border-default border-transparent p-0 whitespace-nowrap !text-default select-none no-drag visited:!text-default hover:bg-primary-ghost-hover hover:!text-default focus:!text-default focus:outline-none`,
              R ? `h-9` : `h-token-button-composer-sm`,
            ),
            href: M,
            download: Be,
            "aria-label": vt,
            onClick: (e) => {
              (U && Re(P, pe, {}), e.preventDefault(), ht());
            },
            children: R ? (0, $.jsx)(It, {}) : (0, $.jsx)(Ye, { "aria-hidden": !1, asset: kt }),
          })),
      (t[100] = vt),
      (t[101] = ht),
      (t[102] = Be),
      (t[103] = M),
      (t[104] = R),
      (t[105] = U),
      (t[106] = V),
      (t[107] = P),
      (t[108] = yt))
    : (yt = t[108]);
  let bt = yt,
    Ct;
  t[109] !== He ||
  t[110] !== bt ||
  t[111] !== ht ||
  t[112] !== X ||
  t[113] !== U ||
  t[114] !== V ||
  t[115] !== Ue ||
  t[116] !== P
    ? ((Ct = (0, $.jsx)($.Fragment, {
        children: (0, $.jsx)(`div`, {
          className: `flex items-center`,
          children: Ue
            ? (0, $.jsx)(qn, {
                disabled: V,
                hostId: X,
                onDownload: () => {
                  (U && Re(P, pe, {}), ht());
                },
                onBeforeOpen: () => {
                  U && Re(P, ne, {});
                },
                path: He,
                showLabel: !0,
              })
            : bt,
        }),
      })),
      (t[109] = He),
      (t[110] = bt),
      (t[111] = ht),
      (t[112] = X),
      (t[113] = U),
      (t[114] = V),
      (t[115] = Ue),
      (t[116] = P),
      (t[117] = Ct))
    : (Ct = t[117]);
  let wt = Ct,
    Tt = Ue ? wt : null,
    Et;
  t[118] !== ht || t[119] !== U || t[120] !== P
    ? ((Et = () => {
        (U && Re(P, pe, {}), ht());
      }),
      (t[118] = ht),
      (t[119] = U),
      (t[120] = P),
      (t[121] = Et))
    : (Et = t[121]);
  let Dt;
  t[122] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Dt = (0, $.jsx)(It, {})), (t[122] = Dt))
    : (Dt = t[122]);
  let Ot;
  t[123] !== vt || t[124] !== V || t[125] !== Et
    ? ((Ot = (0, $.jsx)(at, {
        "aria-label": vt,
        color: `ghost`,
        disabled: V,
        size: `toolbar`,
        uniform: !0,
        onClick: Et,
        children: Dt,
      })),
      (t[123] = vt),
      (t[124] = V),
      (t[125] = Et),
      (t[126] = Ot))
    : (Ot = t[126]);
  let At;
  t[127] !== vt || t[128] !== Ot
    ? ((At = (0, $.jsx)(k, { tooltipContent: vt, children: Ot })),
      (t[127] = vt),
      (t[128] = Ot),
      (t[129] = At))
    : (At = t[129]);
  let Mt;
  t[130] !== Tt || t[131] !== At
    ? ((Mt = (0, $.jsxs)($.Fragment, { children: [Tt, At] })),
      (t[130] = Tt),
      (t[131] = At),
      (t[132] = Mt))
    : (Mt = t[132]);
  let Nt = Mt,
    Pt = N && `pe-18`,
    Ft;
  t[133] === Pt
    ? (Ft = t[134])
    : ((Ft = Y(
        `@container relative flex h-full min-h-0 w-full min-w-0 flex-col bg-surface-secondary pb-[var(--right-panel-composer-overlay-reserve,0px)]`,
        Pt,
      )),
      (t[133] = Pt),
      (t[134] = Ft));
  let Rt;
  t[135] !== n || t[136] !== I || t[137] !== Nt || t[138] !== b || t[139] !== E || t[140] !== l
    ? ((Rt = I
        ? (0, $.jsx)(ut.RightPanelTabListAfter, {
            children: E?.({ alt: n, imageId: b, saveAction: Nt, src: l }) ?? Nt,
          })
        : null),
      (t[135] = n),
      (t[136] = I),
      (t[137] = Nt),
      (t[138] = b),
      (t[139] = E),
      (t[140] = l),
      (t[141] = Rt))
    : (Rt = t[141]);
  let zt;
  t[142] !== wt || t[143] !== I || t[144] !== V
    ? ((zt =
        V && !I
          ? (0, $.jsx)(`div`, {
              className: `absolute top-2 right-2 flex h-8 items-center`,
              children: wt,
            })
          : null),
      (t[142] = wt),
      (t[143] = I),
      (t[144] = V),
      (t[145] = zt))
    : (zt = t[145]);
  let Bt;
  t[146] !== o ||
  t[147] !== Me ||
  t[148] !== Q ||
  t[149] !== wt ||
  t[150] !== I ||
  t[151] !== Ze ||
  t[152] !== K ||
  t[153] !== J ||
  t[154] !== R ||
  t[155] !== B ||
  t[156] !== Xe ||
  t[157] !== V ||
  t[158] !== Te ||
  t[159] !== Se ||
  t[160] !== ge ||
  t[161] !== ve ||
  t[162] !== j ||
  t[163] !== P ||
  t[164] !== it ||
  t[165] !== tt ||
  t[166] !== st ||
  t[167] !== A
    ? ((Bt =
        j || Te
          ? null
          : Xe
            ? (0, $.jsx)(`div`, {
                className: `flex shrink-0 justify-center px-4 pt-2`,
                children: (0, $.jsx)(Tr, {
                  variant: R ? `imageTools` : `compact`,
                  commentCount: Q.length,
                  emptyMessage: (0, $.jsx)(u, {
                    id: `imageSidePanel.commentHelperDesktop`,
                    defaultMessage: `Click on the image to add comments`,
                    description: `Helper text shown in image comment mode before the user has added any comments on desktop.`,
                  }),
                  isSubmitting: ge,
                  onCancel: () => {
                    Jt(P, Ze, o);
                  },
                  onSubmit: B
                    ? () => {
                        it();
                      }
                    : void 0,
                }),
              })
            : (0, $.jsxs)(`div`, {
                className: `relative flex shrink-0 justify-center gap-2 px-4 pt-2`,
                children: [
                  (0, $.jsxs)(wr, {
                    className: `[@container_(max-width:450px)]:hidden`,
                    variant: R ? `imageTools` : `compact`,
                    children: [
                      (0, $.jsxs)(at, {
                        size: R ? `imageToolbar` : `composerSm`,
                        color: `ghostActive`,
                        disabled: V || Se,
                        onClick: () => {
                          (K != null && Bn(P, { imageSource: K, mode: `comment`, view: `single` }),
                            Ae(Pe()),
                            ln(P, Ze, o));
                        },
                        children: [
                          R ? (0, $.jsx)(xe, {}) : (0, $.jsx)(Ye, { "aria-hidden": !1, asset: yr }),
                          (0, $.jsx)(`span`, {
                            className: Y(
                              `[@container_(max-width:630px)]:sr-only`,
                              R ? `text-sm` : `text-base`,
                            ),
                            children: (0, $.jsx)(u, {
                              id: `imageSidePanel.comment`,
                              defaultMessage: `Comment`,
                              description: `Toolbar action that enters image comment mode.`,
                            }),
                          }),
                        ],
                      }),
                      (0, $.jsxs)(at, {
                        size: R ? `imageToolbar` : `composerSm`,
                        color: `ghostActive`,
                        disabled: !Me || ve,
                        loading: Se,
                        onClick: () => {
                          (Ce(!0),
                            tt(
                              J.formatMessage({
                                id: `imageSidePanel.removeBackgroundPrompt`,
                                defaultMessage: `Remove the background from this image. Keep all foreground subjects unchanged and fully intact, with clean, smooth edges. Make the background transparent.`,
                                description: `Prompt submitted immediately when the user selects Remove BG in the image panel. Instructs the image model to preserve all foreground subjects and make the background transparent. Appears in conversation history.`,
                              }),
                            )
                              .catch((e) => {
                                P.get(nt).danger(pn(e, J));
                              })
                              .finally(() => {
                                Ce(!1);
                              }));
                        },
                        children: [
                          R ? (0, $.jsx)(Fe, {}) : (0, $.jsx)(jt, {}),
                          (0, $.jsx)(`span`, {
                            className: `[@container_(max-width:630px)]:sr-only`,
                            children: (0, $.jsx)(u, {
                              id: `imageSidePanel.removeBackground`,
                              defaultMessage: `Remove BG`,
                              description: `Compact image panel action that immediately removes the current image's background while preserving its foreground subjects. BG is short for background.`,
                            }),
                          }),
                        ],
                      }),
                      (0, $.jsxs)(at, {
                        size: R ? `imageToolbar` : `composerSm`,
                        color: `ghostActive`,
                        disabled: !Me || Se,
                        onClick: () => {
                          (K != null && Bn(P, { imageSource: K, mode: `remove`, view: `single` }),
                            Ee(!0));
                        },
                        children: [
                          R ? (0, $.jsx)(v, {}) : (0, $.jsx)(Ye, { "aria-hidden": !1, asset: ci }),
                          (0, $.jsx)(`span`, {
                            className: Y(
                              `[@container_(max-width:630px)]:sr-only`,
                              R ? `text-sm` : `text-base`,
                            ),
                            children: R
                              ? (0, $.jsx)(u, {
                                  id: `imageSidePanel.erase`,
                                  defaultMessage: `Erase`,
                                  description: `Image panel toolbar action that lets the user brush over an area of the image to erase it.`,
                                })
                              : (0, $.jsx)(u, {
                                  id: `imageSidePanel.remove`,
                                  defaultMessage: `Remove`,
                                  description: `Toolbar action that enters image remove mode.`,
                                }),
                          }),
                        ],
                      }),
                      (0, $.jsx)(D, {
                        align: `center`,
                        contentWidth: `xs`,
                        onOpenChange: (e) => {
                          e &&
                            K != null &&
                            Bn(P, { imageSource: K, mode: `resize`, view: `single` });
                        },
                        side: `bottom`,
                        triggerButton: (0, $.jsxs)(at, {
                          size: R ? `imageToolbar` : `composerSm`,
                          color: `ghostActive`,
                          disabled: !Me || Se,
                          loading: ve,
                          children: [
                            (0, $.jsx)(Ei, { className: R ? `icon-md` : `icon-sm` }),
                            (0, $.jsx)(`span`, {
                              className: Y(
                                `[@container_(max-width:630px)]:sr-only`,
                                R ? `text-sm` : `text-base`,
                              ),
                              children: (0, $.jsx)(u, {
                                id: `imageSidePanel.resize`,
                                defaultMessage: `Resize`,
                                description: `Toolbar action that resizes the current image.`,
                              }),
                            }),
                          ],
                        }),
                        children: oa.map((e) => {
                          let { icon: t, label: n, ratio: r } = e;
                          return (0, $.jsx)(
                            C.Item,
                            {
                              LeftIcon: t,
                              onSelect: () => {
                                st(r);
                              },
                              children: (0, $.jsxs)(`span`, {
                                className: `flex w-full items-center justify-between gap-4`,
                                children: [
                                  (0, $.jsx)(u, { ...n }),
                                  (0, $.jsx)(`span`, { className: `text-tertiary`, children: r }),
                                ],
                              }),
                            },
                            r,
                          );
                        }),
                      }),
                      null,
                    ],
                  }),
                  A == null && !V && !I
                    ? (0, $.jsx)(`div`, {
                        className: `absolute top-2 right-2 flex h-8 items-center`,
                        children: wt,
                      })
                    : null,
                ],
              })),
      (t[146] = o),
      (t[147] = Me),
      (t[148] = Q),
      (t[149] = wt),
      (t[150] = I),
      (t[151] = Ze),
      (t[152] = K),
      (t[153] = J),
      (t[154] = R),
      (t[155] = B),
      (t[156] = Xe),
      (t[157] = V),
      (t[158] = Te),
      (t[159] = Se),
      (t[160] = ge),
      (t[161] = ve),
      (t[162] = j),
      (t[163] = P),
      (t[164] = it),
      (t[165] = tt),
      (t[166] = st),
      (t[167] = A),
      (t[168] = Bt))
    : (Bt = t[168]);
  let Vt;
  t[169] !== n ||
  t[170] !== Q ||
  t[171] !== wt ||
  t[172] !== N ||
  t[173] !== I ||
  t[174] !== y ||
  t[175] !== R ||
  t[176] !== Xe ||
  t[177] !== L ||
  t[178] !== V ||
  t[179] !== Te ||
  t[180] !== De ||
  t[181] !== m ||
  t[182] !== j ||
  t[183] !== c ||
  t[184] !== $e ||
  t[185] !== l ||
  t[186] !== lt ||
  t[187] !== A
    ? ((Vt =
        !j && Te
          ? (0, $.jsx)(Oi, {
              alt: n,
              isFullscreen: L,
              isSubmitting: De,
              referrerPolicy: c,
              src: l,
              onCancel: () => {
                Ee(!1);
              },
              onSubmit: (e) => {
                lt(e);
              },
            })
          : Xe
            ? (0, $.jsx)(ir, {
                alt: n,
                isFullscreen: L,
                comments: Q,
                referrerPolicy: c,
                src: l,
                onDeleteComment: (e) => {
                  $e(Q.filter((t) => t.id !== e));
                },
                onSubmitComment: (e) => {
                  let t = { ...e, id: e.id ?? Pe() };
                  $e(e.id == null ? [...Q, t] : Q.map((n) => (n.id === e.id ? t : n)));
                },
              })
            : V
              ? (0, $.jsx)(`div`, {
                  className: `[container-type:size] flex min-h-0 flex-1 items-center justify-center overflow-hidden p-4`,
                  children: m,
                })
              : A == null
                ? (0, $.jsx)(`div`, {
                    className: `flex min-h-0 flex-1 items-center justify-center p-4`,
                    children: (0, $.jsx)(`img`, {
                      ref: y,
                      alt: n,
                      className: Y(`max-h-full max-w-full object-contain`, !L && `rounded-xl`),
                      referrerPolicy: c,
                      src: l,
                    }),
                  })
                : (0, $.jsx)(Wi, {
                    alt: n,
                    hasImageRail: N,
                    imageRef: y,
                    isFullscreen: L,
                    referrerPolicy: c,
                    src: l,
                    trailingControls: I ? null : wt,
                    toolbarVariant: R ? `imageTools` : `compact`,
                    zoom: A,
                  })),
      (t[169] = n),
      (t[170] = Q),
      (t[171] = wt),
      (t[172] = N),
      (t[173] = I),
      (t[174] = y),
      (t[175] = R),
      (t[176] = Xe),
      (t[177] = L),
      (t[178] = V),
      (t[179] = Te),
      (t[180] = De),
      (t[181] = m),
      (t[182] = j),
      (t[183] = c),
      (t[184] = $e),
      (t[185] = l),
      (t[186] = lt),
      (t[187] = A),
      (t[188] = Vt))
    : (Vt = t[188]);
  let Ht;
  return (
    t[189] !== ge ||
    t[190] !== Ft ||
    t[191] !== Rt ||
    t[192] !== zt ||
    t[193] !== Bt ||
    t[194] !== Vt
      ? ((Ht = (0, $.jsxs)(`div`, { className: Ft, inert: ge, children: [Rt, zt, Bt, Vt] })),
        (t[189] = ge),
        (t[190] = Ft),
        (t[191] = Rt),
        (t[192] = zt),
        (t[193] = Bt),
        (t[194] = Vt),
        (t[195] = Ht))
      : (Ht = t[195]),
    Ht
  );
}
function ea() {
  return Pe();
}
async function ta({
  scope: e,
  conversationId: t,
  hostId: n,
  attachmentSrcs: r,
  attachmentPreviewSrc: i,
  cwd: a,
  agentMode: o,
  permissionProfileId: s,
  serviceTier: c,
  shouldSendPermissionOverrides: l,
  activeCollaborationMode: u,
  followUpSubmitAction: d,
  prompt: f,
}) {
  let p = {
      prompt: f,
      addedFiles: [],
      fileAttachments: [],
      ideContext: null,
      inAppBrowserContext: null,
      imageAttachments: r.map((e, t) => ({ id: Pe(), previewSrc: t === 0 ? i : void 0, src: e })),
      isImageEditFollowUp: !0,
      turnTrigger: `image_edit`,
      selectedTextAttachments: [],
      pullRequestChecks: [],
      pullRequestMergeConflict: null,
    },
    m = e.get(Be, t) === !0,
    h = B({ context: p, cwd: a, text: f }),
    g = m ? void 0 : h.id,
    _ = d === `queue` ? `queue` : `send-now`;
  (e.get(P, t) != null && (_ = `queue-only`), Ke(e, t, h.id));
  try {
    let r = await rt(
      {
        scope: e,
        turnTrigger: `image_edit`,
        manager: me(e, t) ?? e.get(A),
        hostId: n,
        context: p,
        targetConversationId: t,
        cwd: a,
        agentMode: o,
        permissionProfileId: s,
        serviceTier: c,
        shouldSendPermissionOverrides: l,
        activeCollaborationMode: u,
        restoreMessage: h,
        clientUserMessageId: g,
      },
      { queueModeOverride: _ },
    );
    if (r.status === `queued`) {
      Nt(e, t, h.id);
      return;
    }
    Ce(e, t, h.id, r.turnId);
  } catch (n) {
    throw (Nt(e, t, h.id), n);
  }
}
function na(e, t) {
  let n = ra(e),
    r = t.trim().length > 0 ? t.trim() : (n ?? `image`);
  return w(r) == null ? `${r}.${w(n ?? e) ?? `png`}` : r;
}
function ra(e) {
  if (e.startsWith(`data:`)) return null;
  let t = e.split(/[?#]/, 1)[0].split(/[\\/]/).at(-1);
  if (t == null || t.length === 0) return null;
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
}
var ia,
  aa,
  $,
  oa,
  sa = e(() => {
    ((ia = ct()),
      $e(),
      ht(),
      br(),
      li(),
      Tt(),
      Kt(),
      L(),
      (aa = t(s(), 1)),
      X(),
      Ze(),
      wt(),
      At(),
      oe(),
      Jn(),
      Qt(),
      S(),
      lt(),
      n(),
      q(),
      a(),
      ve(),
      Ue(),
      fe(),
      st(),
      T(),
      $t(),
      H(),
      Ft(),
      fi(),
      hi(),
      vi(),
      xi(),
      wi(),
      Di(),
      zn(),
      pr(),
      he(),
      g(),
      qe(),
      W(),
      Gt(),
      Rt(),
      O(),
      te(),
      bn(),
      Rn(),
      hn(),
      Or(),
      Ui(),
      Ut(),
      Qi(),
      ($ = Q()),
      (oa = [
        {
          icon: di,
          label: Ae({
            id: `imageSidePanel.aspectRatio.square`,
            defaultMessage: `Square`,
            description: `Label for the 1:1 image resize option.`,
          }),
          ratio: `1:1`,
        },
        {
          icon: mi,
          label: Ae({
            id: `imageSidePanel.aspectRatio.portrait`,
            defaultMessage: `Portrait`,
            description: `Label for the 3:4 image resize option.`,
          }),
          ratio: `3:4`,
        },
        {
          icon: bi,
          label: Ae({
            id: `imageSidePanel.aspectRatio.story`,
            defaultMessage: `Story`,
            description: `Label for the 9:16 image resize option.`,
          }),
          ratio: `9:16`,
        },
        {
          icon: _i,
          label: Ae({
            id: `imageSidePanel.aspectRatio.landscape`,
            defaultMessage: `Landscape`,
            description: `Label for the 4:3 image resize option.`,
          }),
          ratio: `4:3`,
        },
        {
          icon: Ci,
          label: Ae({
            id: `imageSidePanel.aspectRatio.widescreen`,
            defaultMessage: `Widescreen`,
            description: `Label for the 16:9 image resize option.`,
          }),
          ratio: `16:9`,
        },
      ]));
  });
function ca(e) {
  let t = (0, _a.c)(98),
    {
      conversationId: n,
      fallbackImage: a,
      historicalGeneratedImageGroups: o,
      imageAssetResolver: s,
      initialImageId: c,
      initialPlaygroundTool: l,
      liveTailGeneratedImageGroup: u,
      onActiveImageChange: d,
      onGeneratedImageSelection: f,
      onViewChange: p,
      optimisticImageEditMessageId: m,
      view: g,
    } = e,
    _ = r(i),
    v = h(x),
    y = it(),
    b = Wt(),
    S;
  t[0] === c ? (S = t[1]) : ((S = { id: c }), (t[0] = c), (t[1] = S));
  let [C, w] = (0, va.useState)(S),
    [T, E] = (0, va.useState)(null),
    [D, O] = (0, va.useState)(wa),
    [k, A] = (0, va.useState)(null),
    [j, M] = (0, va.useState)(!1),
    [N, P] = (0, va.useState)(y),
    F = (0, va.useRef)(null),
    ee = (0, va.useRef)(null),
    I = (0, va.useRef)(c),
    L = (0, va.useRef)(null),
    R = m == null ? null : `optimistic-image-edit:` + m,
    z,
    B,
    V,
    H;
  if (t[2] !== C || t[3] !== o || t[4] !== u || t[5] !== m || t[6] !== R || t[7] !== T) {
    let e = R == null ? null : { id: R, turnStartedAtMs: null, images: [{ id: R, loading: !0 }] };
    if (
      ((B = [...o, ...(u == null ? [] : [u]), ...(e == null ? [] : [e])]),
      (V = B.flatMap(da)),
      (H = V.filter(ua)),
      m !== T &&
        (E(m),
        R != null &&
          (w({
            id: R,
            optimisticLiveTailGroupId: u?.id,
            optimisticLiveTailImageCount: u?.images.length ?? 0,
            previousImageId: C.id,
          }),
          A(null))),
      (z = V.find((e) => e.id === C.id)),
      z == null && C.optimisticLiveTailImageCount != null && u != null)
    ) {
      let e =
        u.id === C.optimisticLiveTailGroupId
          ? u.images[C.optimisticLiveTailImageCount]
          : u.images.at(-1);
      e != null && (w({ id: e.id }), (z = e));
    }
    (z ??
      ((z = H.find((e) => e.id === C.previousImageId) ?? H.at(-1)),
      z != null && C.optimisticLiveTailImageCount != null && w({ id: z.id })),
      (B.find((e) => e.images.some((e) => e.id === z?.id))?.images ?? []).filter(la),
      (t[2] = C),
      (t[3] = o),
      (t[4] = u),
      (t[5] = m),
      (t[6] = R),
      (t[7] = T),
      (t[8] = z),
      (t[9] = B),
      (t[10] = V),
      (t[11] = H));
  } else ((z = t[8]), (B = t[9]), (V = t[10]), (H = t[11]));
  let U = v && V.length > 1,
    te;
  t[12] !== z || t[13] !== C || t[14] !== u?.id || t[15] !== u?.images || t[16] !== d || t[17] !== R
    ? ((te = (e) => {
        z == null ||
          e.id === z.id ||
          (w(
            e.loading && e.id === R
              ? {
                  id: e.id,
                  optimisticLiveTailGroupId: u?.id,
                  optimisticLiveTailImageCount: u?.images.length ?? 0,
                  previousImageId: z.loading ? C.previousImageId : z.id,
                }
              : { id: e.id },
          ),
          A(null),
          e.loading || ((I.current = e.id), d?.(e)));
      }),
      (t[12] = z),
      (t[13] = C),
      (t[14] = u?.id),
      (t[15] = u?.images),
      (t[16] = d),
      (t[17] = R),
      (t[18] = te))
    : (te = t[18]);
  let W = te,
    ne,
    K;
  (t[19] === y
    ? ((ne = t[20]), (K = t[21]))
    : ((ne = () => {
        let e = window.setTimeout(
          () => {
            P(!0);
          },
          y ? 0 : De.duration * 1e3,
        );
        return () => {
          window.clearTimeout(e);
        };
      }),
      (K = [y]),
      (t[19] = y),
      (t[20] = ne),
      (t[21] = K)),
    (0, va.useEffect)(ne, K));
  let q, J;
  (t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = () => () => {
        let e = L.current;
        ((L.current = null), e != null && ((e.oncancel = null), (e.onfinish = null), e.cancel()));
      }),
      (J = []),
      (t[22] = q),
      (t[23] = J))
    : ((q = t[22]), (J = t[23])),
    (0, va.useEffect)(q, J));
  let X;
  t[24] === g
    ? (X = t[25])
    : ((X = () => {
        let e = ee.current;
        g === `playground` && e != null && ha(e);
      }),
      (t[24] = g),
      (t[25] = X));
  let re = dt(X),
    ie,
    ae;
  (t[26] !== re || t[27] !== g
    ? ((ie = () => {
        let e = ee.current;
        if (g !== `playground` || e == null) {
          re(null);
          return;
        }
        return (
          re(e.closest(`[data-generated-image-playground-scroll]`)),
          ha(e),
          () => {
            re(null);
          }
        );
      }),
      (ae = [re, g]),
      (t[26] = re),
      (t[27] = g),
      (t[28] = ie),
      (t[29] = ae))
    : ((ie = t[28]), (ae = t[29])),
    (0, va.useLayoutEffect)(ie, ae));
  let Z;
  t[30] !== z || t[31] !== d || t[32] !== R || t[33] !== g
    ? ((Z = (e) => {
        ((ee.current = e),
          e != null && g === `playground` && z?.id === R && ha(e),
          e != null &&
            z != null &&
            !z.loading &&
            I.current !== z.id &&
            ((I.current = z.id), d?.(z)));
      }),
      (t[30] = z),
      (t[31] = d),
      (t[32] = R),
      (t[33] = g),
      (t[34] = Z))
    : (Z = t[34]);
  let oe = G(Z),
    se;
  t[35] !== z || t[36] !== V || t[37] !== W
    ? ((se = (e) => {
        if (
          e.defaultPrevented ||
          e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          (e.key !== `ArrowUp` && e.key !== `ArrowDown`) ||
          !(e.target instanceof HTMLElement) ||
          z == null ||
          e.target.isContentEditable ||
          e.target.closest(`input, textarea, select, button, [contenteditable="true"]`) != null
        )
          return;
        let t = V.findIndex((e) => e.id === z.id);
        if (t < 0) return;
        e.preventDefault();
        let n = V[t + (e.key === `ArrowUp` ? -1 : 1)];
        n != null && W(n);
      }),
      (t[35] = z),
      (t[36] = V),
      (t[37] = W),
      (t[38] = se))
    : (se = t[38]);
  let ce = (0, va.useEffectEvent)(se),
    le = g === `single` && z != null && V.length > 1,
    ue;
  t[39] !== ce || t[40] !== le
    ? ((ue = () => {
        let e = F.current?.closest(`[role="tabpanel"]`);
        if (!(!le || e == null))
          return (
            e.addEventListener(`keydown`, ce),
            () => {
              e.removeEventListener(`keydown`, ce);
            }
          );
      }),
      (t[39] = ce),
      (t[40] = le),
      (t[41] = ue))
    : (ue = t[41]);
  let de;
  if (
    (t[42] === le ? (de = t[43]) : ((de = [le]), (t[42] = le), (t[43] = de)),
    (0, va.useEffect)(ue, de),
    z == null)
  ) {
    let e;
    t[44] !== a.zoom || t[45] !== k
      ? ((e = a.zoom ?? {
          manualZoomPercent: k,
          onZoomPercentChange: A,
          onZoomToFit: () => A(null),
        }),
        (t[44] = a.zoom),
        (t[45] = k),
        (t[46] = e))
      : (e = t[46]);
    let n;
    return (
      t[47] !== a || t[48] !== e
        ? ((n = (0, ba.jsx)($i, { ...a, zoom: e })), (t[47] = a), (t[48] = e), (t[49] = n))
        : (n = t[49]),
      n
    );
  }
  let fe;
  t[50] !== p ||
  t[51] !== D ||
  t[52] !== H ||
  t[53] !== _ ||
  t[54] !== y ||
  t[55] !== g ||
  t[56] !== b
    ? ((fe = (e) => {
        if (e === g) return;
        let t = L.current;
        (t != null &&
          ((L.current = null), (t.oncancel = null), (t.onfinish = null), t.cancel(), M(!1)),
          Yt(_, {
            availableImageCount: H.length,
            entrypoint: `view_toggle`,
            imageSource: `generated`,
            view: e === `playground` ? `canvas` : `single`,
          }));
        let n = ma(ee.current);
        (M(!0),
          (0, ya.flushSync)(() => {
            p(e);
          }));
        let r = ee.current;
        e === `playground` && r != null && ha(r);
        let i = ma(r);
        if (y || n == null || i == null || r == null || typeof r.animate != `function`) {
          M(!1);
          return;
        }
        let a = r.animate(
          [
            {
              transform: ga(n, i, b, e === `playground` ? D / 100 : 1),
              transformOrigin: `top left`,
            },
            { transform: `none`, transformOrigin: `top left` },
          ],
          { duration: 450, easing: `cubic-bezier(0.22, 1, 0.36, 1)`, fill: `both` },
        );
        L.current = a;
        let o = () => {
          L.current === a &&
            ((L.current = null), (a.oncancel = null), (a.onfinish = null), M(!1), a.cancel());
        };
        ((a.oncancel = o), (a.onfinish = o));
      }),
      (t[50] = p),
      (t[51] = D),
      (t[52] = H),
      (t[53] = _),
      (t[54] = y),
      (t[55] = g),
      (t[56] = b),
      (t[57] = fe))
    : (fe = t[57]);
  let pe = fe,
    me;
  t[58] !== z ||
  t[59] !== n ||
  t[60] !== a ||
  t[61] !== s ||
  t[62] !== oe ||
  t[63] !== U ||
  t[64] !== k
    ? ((me = z.loading
        ? (0, ba.jsx)($i, {
            ...a,
            hasImageRail: U,
            loadingContent: (0, ba.jsx)(yn, { presentation: `single` }),
          })
        : (0, ba.jsx)(
            pa,
            {
              activeImage: z,
              conversationId: n,
              focusedImageRef: oe,
              hasImageRail: U,
              imageAssetResolver: s,
              manualZoomPercent: k,
              onManualZoomPercentChange: A,
              onImageEditSubmit: a.onImageEditSubmit,
              onDownloaded: a.onDownloaded,
              renderHeaderActions: a.renderHeaderActions,
              tabId: a.tabId,
            },
            z.id,
          )),
      (t[58] = z),
      (t[59] = n),
      (t[60] = a),
      (t[61] = s),
      (t[62] = oe),
      (t[63] = U),
      (t[64] = k),
      (t[65] = me))
    : (me = t[65]);
  let he = me,
    ge = j && `pointer-events-none`,
    _e;
  t[66] === ge
    ? (_e = t[67])
    : ((_e = Y(`relative h-full min-h-0 min-w-0 w-full bg-surface-secondary`, ge)),
      (t[66] = ge),
      (t[67] = _e));
  let ve;
  t[68] !== pe || t[69] !== n || t[70] !== N || t[71] !== g
    ? ((ve =
        n == null ? null : (0, ba.jsx)(ni, { shouldShowCoachmark: N, view: g, onViewChange: pe })),
      (t[68] = pe),
      (t[69] = n),
      (t[70] = N),
      (t[71] = g),
      (t[72] = ve))
    : (ve = t[72]);
  let ye;
  t[73] === n ? (ye = t[74]) : ((ye = null), (t[73] = n), (t[74] = ye));
  let be;
  t[75] !== z.id ||
  t[76] !== he ||
  t[77] !== n ||
  t[78] !== a ||
  t[79] !== B ||
  t[80] !== V ||
  t[81] !== s ||
  t[82] !== l ||
  t[83] !== j ||
  t[84] !== f ||
  t[85] !== R ||
  t[86] !== D ||
  t[87] !== W ||
  t[88] !== oe ||
  t[89] !== U ||
  t[90] !== y ||
  t[91] !== g
    ? ((be =
        g === `playground` && n != null
          ? (0, ba.jsx)(Wr, {
              activeImageId: z.id,
              conversationId: n,
              focusedImageRef: oe,
              groups: B,
              imageAssetResolver: s,
              initialTool: l,
              isViewTransitioning: j && !y,
              onGeneratedImageSelection: f,
              onSelectImage: W,
              onZoomPercentChange: O,
              zoomPercent: D,
            })
          : U
            ? (0, ba.jsxs)(`div`, {
                className: `flex h-full min-h-0`,
                children: [
                  (0, ba.jsx)(fa, {
                    activeId: z.id,
                    autoScrollImageId: R,
                    images: V,
                    conversationId: n,
                    imageAssetResolver: s,
                    onAddToChat: f,
                    onDownloaded: a.onDownloaded,
                    onSelect: W,
                  }),
                  (0, ba.jsx)(`div`, { className: `min-w-0 flex-1`, children: he }),
                ],
              })
            : he),
      (t[75] = z.id),
      (t[76] = he),
      (t[77] = n),
      (t[78] = a),
      (t[79] = B),
      (t[80] = V),
      (t[81] = s),
      (t[82] = l),
      (t[83] = j),
      (t[84] = f),
      (t[85] = R),
      (t[86] = D),
      (t[87] = W),
      (t[88] = oe),
      (t[89] = U),
      (t[90] = y),
      (t[91] = g),
      (t[92] = be))
    : (be = t[92]);
  let xe;
  return (
    t[93] !== _e || t[94] !== ve || t[95] !== ye || t[96] !== be
      ? ((xe = (0, ba.jsxs)(`div`, { ref: F, className: _e, children: [ve, ye, be] })),
        (t[93] = _e),
        (t[94] = ve),
        (t[95] = ye),
        (t[96] = be),
        (t[97] = xe))
      : (xe = t[97]),
    xe
  );
}
function la(e) {
  return !e.loading;
}
function ua(e) {
  return !e.loading;
}
function da(e) {
  return e.images;
}
function fa(e) {
  let t = (0, _a.c)(39),
    {
      activeId: n,
      autoScrollImageId: r,
      images: i,
      conversationId: a,
      imageAssetResolver: o,
      onAddToChat: s,
      onDownloaded: c,
      onSelect: l,
    } = e,
    u = z(),
    d;
  if (t[0] !== n || t[1] !== i) {
    let e;
    (t[3] === n ? (e = t[4]) : ((e = (e) => e.id === n), (t[3] = n), (t[4] = e)),
      (d = i.findIndex(e)),
      (t[0] = n),
      (t[1] = i),
      (t[2] = d));
  } else d = t[2];
  let f = Math.max(d, 0),
    p = (0, va.useRef)(null),
    h = (0, va.useRef)(null),
    g = (0, va.useRef)(Ca + f * Sa + xa / 2),
    _ = Ca * 2 + (i.length - 1) * Sa + xa,
    v,
    y;
  (t[5] !== n || t[6] !== r || t[7] !== i.length
    ? ((v = () => {
        let e = p.current;
        e == null ||
          r == null ||
          r !== n ||
          h.current === r ||
          ((h.current = r),
          (g.current = Ca + (i.length - 1) * Sa + xa / 2),
          e.scrollTo({ top: e.scrollHeight }));
      }),
      (y = [n, r, i.length]),
      (t[5] = n),
      (t[6] = r),
      (t[7] = i.length),
      (t[8] = v),
      (t[9] = y))
    : ((v = t[8]), (y = t[9])),
    (0, va.useLayoutEffect)(v, y));
  let b;
  t[10] === _
    ? (b = t[11])
    : ((b = (e, t) => {
        let n = Math.min(_, t.clientHeight) / 2;
        return Math.min(Math.max(e - n, 0), t.scrollHeight - t.clientHeight);
      }),
      (t[10] = _),
      (t[11] = b));
  let x = b,
    S,
    C,
    w,
    T;
  if (
    t[12] !== n ||
    t[13] !== f ||
    t[14] !== a ||
    t[15] !== x ||
    t[16] !== o ||
    t[17] !== i ||
    t[18] !== u ||
    t[19] !== s ||
    t[20] !== c ||
    t[21] !== l
  ) {
    let e = (e) => {
      let t = i[e];
      if (t == null) return;
      let n = Ca + e * Sa + xa / 2;
      ((g.current = n), l(t));
      let r = p.current;
      r?.scrollTo({ top: x(n, r) });
    };
    (t[26] === x
      ? (S = t[27])
      : ((S = (e) => {
          e == null || p.current != null || ((e.scrollTop = x(g.current, e)), (p.current = e));
        }),
        (t[26] = x),
        (t[27] = S)),
      (C = `mt-10 w-18 shrink-0 [scrollbar-width:none] overflow-y-auto py-1.5 ps-0.5 [&::-webkit-scrollbar]:hidden`),
      t[28] !== n || t[29] !== x || t[30] !== i || t[31] !== l
        ? ((w = (e) => {
            if (e.ctrlKey) return;
            e.preventDefault();
            let t =
                e.deltaMode === WheelEvent.DOM_DELTA_LINE
                  ? e.deltaY * 16
                  : e.deltaMode === WheelEvent.DOM_DELTA_PAGE
                    ? e.deltaY * e.currentTarget.clientHeight
                    : e.deltaY,
              r = Math.min(Math.max(g.current + t, 29), Ca + (i.length - 1) * Sa + xa / 2);
            ((g.current = r), (e.currentTarget.scrollTop = x(r, e.currentTarget)));
            let a = Math.round((r - Ca - xa / 2) / Sa),
              o = i[a];
            o != null && o.id !== n && l(o);
          }),
          (t[28] = n),
          (t[29] = x),
          (t[30] = i),
          (t[31] = l),
          (t[32] = w))
        : (w = t[32]),
      (T = i.map((t, r) => {
        let l = t.id === n;
        return (0, ba.jsx)(
          m.button,
          {
            type: `button`,
            animate: { opacity: l ? 1 : 0.34, scale: l ? 1.2 : 0.95 },
            "aria-current": l ? `true` : void 0,
            "aria-label": t.loading
              ? u.formatMessage({
                  id: `codex.chatGptConversation.imageGeneration.loadingLabel`,
                  defaultMessage: `Generating image...`,
                  description: `Aria label for the image generation loading placeholder`,
                })
              : t.alt,
            className: Y(
              `mx-auto mb-2 flex cursor-interaction overflow-hidden rounded-lg border border-default focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
              !t.loading && `bg-surface-secondary/85`,
            ),
            style: { height: xa, width: xa },
            transition: { duration: 0.12 },
            onClick: () => {
              e(r);
            },
            onKeyDown: (t) => {
              let n =
                t.key === `ArrowUp` || t.key === `ArrowLeft`
                  ? -1
                  : +(t.key === `ArrowDown` || t.key === `ArrowRight`);
              if (n === 0) return;
              t.preventDefault();
              let r = f + n;
              r < 0 || r >= i.length || e(r);
            },
            children: t.loading
              ? (0, ba.jsx)(yn, { presentation: `thumbnail` })
              : (0, ba.jsx)(Ta, {
                  image: t,
                  conversationId: a,
                  imageAssetResolver: o,
                  onAddToChat: s,
                  onDownloaded: () => c?.(t.id),
                }),
          },
          t.id,
        );
      })),
      (t[12] = n),
      (t[13] = f),
      (t[14] = a),
      (t[15] = x),
      (t[16] = o),
      (t[17] = i),
      (t[18] = u),
      (t[19] = s),
      (t[20] = c),
      (t[21] = l),
      (t[22] = S),
      (t[23] = C),
      (t[24] = w),
      (t[25] = T));
  } else ((S = t[22]), (C = t[23]), (w = t[24]), (T = t[25]));
  let E;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, ba.jsx)(`div`, { style: { height: `calc(50% - ${xa / 2}px)` } })), (t[33] = E))
    : (E = t[33]);
  let D;
  return (
    t[34] !== S || t[35] !== C || t[36] !== w || t[37] !== T
      ? ((D = (0, ba.jsxs)(`div`, { ref: S, className: C, onWheel: w, children: [T, E] })),
        (t[34] = S),
        (t[35] = C),
        (t[36] = w),
        (t[37] = T),
        (t[38] = D))
      : (D = t[38]),
    D
  );
}
function pa(e) {
  let t = (0, _a.c)(29),
    {
      activeImage: n,
      conversationId: r,
      focusedImageRef: i,
      hasImageRail: a,
      imageAssetResolver: o,
      manualZoomPercent: s,
      onImageEditSubmit: c,
      onDownloaded: l,
      renderHeaderActions: u,
      tabId: d,
      onManualZoomPercentChange: f,
    } = e,
    p;
  t[0] !== n.src || t[1] !== r || t[2] !== o
    ? ((p = { src: n.src, conversationId: r, imageAssetResolver: o, shouldLoadFileDataUrl: !1 }),
      (t[0] = n.src),
      (t[1] = r),
      (t[2] = o),
      (t[3] = p))
    : (p = t[3]);
  let { downloadSrc: m, previewSrc: h } = xn(p),
    g = n.alt,
    _;
  t[4] === n.id ? (_ = t[5]) : ((_ = Cn(n.id)), (t[4] = n.id), (t[5] = _));
  let v = m ?? h ?? n.src,
    y;
  t[6] !== n.id || t[7] !== c
    ? ((y = c == null ? void 0 : (e) => c({ ...e, imageId: n.id })),
      (t[6] = n.id),
      (t[7] = c),
      (t[8] = y))
    : (y = t[8]);
  let b = h ?? n.src,
    x;
  t[9] === f ? (x = t[10]) : ((x = () => f(null)), (t[9] = f), (t[10] = x));
  let S;
  t[11] !== s || t[12] !== f || t[13] !== x
    ? ((S = { manualZoomPercent: s, onZoomPercentChange: f, onZoomToFit: x }),
      (t[11] = s),
      (t[12] = f),
      (t[13] = x),
      (t[14] = S))
    : (S = t[14]);
  let C;
  return (
    t[15] !== n.alt ||
    t[16] !== n.id ||
    t[17] !== n.src ||
    t[18] !== i ||
    t[19] !== a ||
    t[20] !== l ||
    t[21] !== u ||
    t[22] !== _ ||
    t[23] !== v ||
    t[24] !== y ||
    t[25] !== b ||
    t[26] !== S ||
    t[27] !== d
      ? ((C = (0, ba.jsx)($i, {
          alt: g,
          attachmentId: _,
          attachmentSrc: n.src,
          downloadSrc: v,
          hasImageRail: a,
          imageRef: i,
          imageId: n.id,
          onDownloaded: l,
          renderHeaderActions: u,
          tabId: d,
          onImageEditSubmit: y,
          referrerPolicy: `no-referrer`,
          src: b,
          zoom: S,
        })),
        (t[15] = n.alt),
        (t[16] = n.id),
        (t[17] = n.src),
        (t[18] = i),
        (t[19] = a),
        (t[20] = l),
        (t[21] = u),
        (t[22] = _),
        (t[23] = v),
        (t[24] = y),
        (t[25] = b),
        (t[26] = S),
        (t[27] = d),
        (t[28] = C))
      : (C = t[28]),
    C
  );
}
function ma(e) {
  let t = e?.getBoundingClientRect();
  return t == null || t.width <= 0 || t.height <= 0 ? null : t;
}
function ha(e) {
  let t = e.closest(`[data-generated-image-playground-scroll]`),
    n = t != null && e.getBoundingClientRect().right > t.getBoundingClientRect().right;
  e.scrollIntoView({ block: `start`, inline: n ? `center` : `nearest` });
}
function ga(e, t, n, r) {
  return `translate(${Number((Pt(e.left - t.left, n) / r).toFixed(4))}px, ${Number((Pt(e.top - t.top, n) / r).toFixed(4))}px) scale(${Number((e.width / t.width).toFixed(4))}, ${Number((e.height / t.height).toFixed(4))})`;
}
var _a,
  va,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea = e(() => {
    ((_a = ct()),
      Kt(),
      _t(),
      L(),
      (va = t(s(), 1)),
      (ya = t(bt(), 1)),
      X(),
      Me(),
      oe(),
      Te(),
      b(),
      R(),
      Dt(),
      Gt(),
      be(),
      bn(),
      In(),
      $r(),
      Rn(),
      si(),
      Fn(),
      Mn(),
      sa(),
      (ba = Q()),
      (xa = 46),
      (Sa = 54),
      (Ca = 6),
      (wa = 100),
      (Ta = (0, va.memo)(function (e) {
        let t = (0, _a.c)(17),
          {
            image: n,
            conversationId: a,
            imageAssetResolver: o,
            onAddToChat: s,
            onDownloaded: c,
          } = e,
          l = r(i),
          u = z(),
          d;
        t[0] !== a || t[1] !== n.previewSrc || t[2] !== o
          ? ((d = {
              src: n.previewSrc,
              conversationId: a,
              imageAssetResolver: o,
              shouldLoadFileDataUrl: !1,
            }),
            (t[0] = a),
            (t[1] = n.previewSrc),
            (t[2] = o),
            (t[3] = d))
          : (d = t[3]);
        let { previewSrc: f } = xn(d),
          p;
        t[4] !== n ||
        t[5] !== o ||
        t[6] !== u ||
        t[7] !== s ||
        t[8] !== c ||
        t[9] !== f ||
        t[10] !== l
          ? ((p = () =>
              On(l, {
                displaySrc: f ?? n.previewSrc,
                image: n,
                imageAssetResolver: o,
                intl: u,
                onAddToChat: s,
                onDownloaded: c,
              })),
            (t[4] = n),
            (t[5] = o),
            (t[6] = u),
            (t[7] = s),
            (t[8] = c),
            (t[9] = f),
            (t[10] = l),
            (t[11] = p))
          : (p = t[11]);
        let m = f ?? n.previewSrc,
          h;
        t[12] === m
          ? (h = t[13])
          : ((h = (0, ba.jsx)(`img`, {
              alt: ``,
              className: `size-full rounded-lg object-cover`,
              decoding: `async`,
              loading: `lazy`,
              referrerPolicy: `no-referrer`,
              src: m,
            })),
            (t[12] = m),
            (t[13] = h));
        let g;
        return (
          t[14] !== p || t[15] !== h
            ? ((g = (0, ba.jsx)(le, { getItems: p, children: h })),
              (t[14] = p),
              (t[15] = h),
              (t[16] = g))
            : (g = t[16]),
          g
        );
      })));
  });
function Da(e) {
  let t = (0, Aa.c)(21),
    n,
    i;
  t[0] === e
    ? ((n = t[1]), (i = t[2]))
    : (({ initialImages: n, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = i));
  let { value: a } = r(We),
    o;
  t[3] !== a.conversationId || t[4] !== a.routeKind
    ? ((o = a.routeKind === `chatgpt-thread` ? et(a.conversationId) : null),
      (t[3] = a.conversationId),
      (t[4] = a.routeKind),
      (t[5] = o))
    : (o = t[5]);
  let s = o,
    c = z(),
    l = F(rn, s),
    u = F(ft, s),
    d = F(gn, s),
    f = F(I, s),
    p,
    m;
  if (t[6] !== u || t[7] !== n || t[8] !== c || t[9] !== f || t[10] !== l) {
    let e = Pn({ conversationTitle: u, images: l?.flatMap(ka) ?? [], intl: c }),
      r = 0;
    p = [];
    for (let t of l ?? []) {
      let n = [];
      for (let i of t.images)
        (n.push(i.src == null || i.status !== `completed` ? { id: i.id, loading: !0 } : e[r]),
          (r += 1));
      p.push({ id: t.id, turnStartedAtMs: t.turnStartedAtMs, images: n });
    }
    let i = new Set(e.map(Oa)),
      a = n.flatMap((e) =>
        i.has(e.id) || (f && K(e.src))
          ? []
          : [f && K(e.previewSrc) ? { ...e, previewSrc: e.src } : e],
      );
    ((m = p.slice(0, -1)),
      a.length > 0 && m.unshift({ id: `opening-images`, images: a, turnStartedAtMs: null }),
      (t[6] = u),
      (t[7] = n),
      (t[8] = c),
      (t[9] = f),
      (t[10] = l),
      (t[11] = p),
      (t[12] = m));
  } else ((p = t[11]), (m = t[12]));
  let h;
  t[13] === p ? (h = t[14]) : ((h = p.at(-1) ?? null), (t[13] = p), (t[14] = h));
  let g;
  return (
    t[15] !== u || t[16] !== m || t[17] !== d || t[18] !== i || t[19] !== h
      ? ((g = (0, ja.jsx)(ca, {
          ...i,
          conversationId: null,
          conversationTitle: u,
          historicalGeneratedImageGroups: m,
          liveTailGeneratedImageGroup: h,
          optimisticImageEditMessageId: d,
        })),
        (t[15] = u),
        (t[16] = m),
        (t[17] = d),
        (t[18] = i),
        (t[19] = h),
        (t[20] = g))
      : (g = t[20]),
    g
  );
}
function Oa(e) {
  return e.id;
}
function ka(e) {
  return e.images;
}
var Aa,
  ja,
  Ma = e(() => {
    ((Aa = ct()), L(), X(), Ea(), Dn(), j(), Rt(), U(), N(), Se(), tn(), Zt(), (ja = Q()));
  });
function Na(e) {
  let t = (0, La.c)(19),
    n,
    a,
    o;
  t[0] === e
    ? ((n = t[1]), (a = t[2]), (o = t[3]))
    : (({ initialImages: n, restrictLiveTailToInitialImages: o, ...a } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = a),
      (t[3] = o));
  let s = o !== void 0 && o,
    c = r(i),
    l = z(),
    u = c.value.routeConversationId,
    d = F(tt, u),
    f = F(ot, u),
    p = F(je, u),
    m = F(Vt, u),
    h,
    g;
  t[4] !== m || t[5] !== d || t[6] !== n || t[7] !== l || t[8] !== f || t[9] !== s
    ? ((h =
        d == null
          ? []
          : Fa({
              conversationTitle: m,
              metadataImages: n,
              generatedImageTurns: Ia(d, n),
              imageNumberOffset: 0,
              intl: l,
            })),
      (g =
        f == null
          ? null
          : (Fa({
              conversationTitle: m,
              metadataImages: n,
              generatedImageTurns: s ? Ia([f], n) : [f],
              imageNumberOffset: h.reduce(Pa, 0),
              intl: l,
            })[0] ?? null)),
      (t[4] = m),
      (t[5] = d),
      (t[6] = n),
      (t[7] = l),
      (t[8] = f),
      (t[9] = s),
      (t[10] = h),
      (t[11] = g))
    : ((h = t[10]), (g = t[11]));
  let _ = g,
    v;
  return (
    t[12] !== u || t[13] !== m || t[14] !== h || t[15] !== _ || t[16] !== p || t[17] !== a
      ? ((v = (0, Ra.jsx)(ca, {
          ...a,
          conversationId: u,
          conversationTitle: m,
          historicalGeneratedImageGroups: h,
          liveTailGeneratedImageGroup: _,
          optimisticImageEditMessageId: p,
        })),
        (t[12] = u),
        (t[13] = m),
        (t[14] = h),
        (t[15] = _),
        (t[16] = p),
        (t[17] = a),
        (t[18] = v))
      : (v = t[18]),
    v
  );
}
function Pa(e, t) {
  return e + t.images.length;
}
function Fa({
  conversationTitle: e,
  metadataImages: t,
  generatedImageTurns: n,
  imageNumberOffset: r,
  intl: i,
}) {
  let a = new Map(t.map((e) => [e.id, e])),
    o = r;
  return n.map((t) => ({
    id: t.id,
    turnStartedAtMs: t.turnStartedAtMs,
    images: t.images.map((t) => {
      if (((o += 1), t.src == null)) return { id: t.id, loading: !0 };
      let n = a.get(t.id),
        r =
          n?.alt ??
          i.formatMessage(
            {
              id: `codex.localConversation.generatedImage`,
              defaultMessage: `Generated image {imageNumber}`,
              description: `Alt text for an assistant-generated image shown in the final response`,
            },
            { imageNumber: o },
          );
      return {
        alt: r,
        id: t.id,
        previewSrc: n?.previewSrc ?? t.src,
        src: t.src,
        tabTitle:
          n?.tabTitle ??
          (e == null
            ? r
            : i.formatMessage(
                {
                  id: `codex.localConversation.generatedImageTabTitle`,
                  defaultMessage: `{conversationTitle} - Generated image {imageNumber}`,
                  description: `Title for a generated image preview tab, prefixed by the conversation title`,
                },
                { conversationTitle: e, imageNumber: o },
              )),
      };
    }),
  }));
}
function Ia(e, t) {
  let n = new Set(t.map((e) => e.id));
  return e.flatMap((e) => {
    let t = e.images.filter((e) => n.has(e.id));
    return t.length === 0 ? [] : [{ ...e, images: t }];
  });
}
var La,
  Ra,
  za = e(() => {
    ((La = ct()), L(), X(), wt(), Mt(), Gt(), Ea(), Ut(), (Ra = Q()));
  });
function Ba(e) {
  let t = (0, Ha.c)(35),
    {
      alt: n,
      attachmentId: i,
      attachmentSrc: a,
      downloadSrc: o,
      generatedImages: s,
      imageSourceContext: c,
      imageSource: u,
      imageAssetResolver: d,
      initialImageId: f,
      liveTailImagePolicy: p,
      onImageEditSubmit: m,
      onDownloaded: h,
      onActiveImageChange: g,
      renderHeaderActions: _,
      onGeneratedImageSelection: v,
      readOnly: b,
      referrerPolicy: x,
      setTabState: S,
      src: C,
      tabId: w,
      tabState: T,
    } = e,
    E = r(We),
    [D, O] = (0, Ua.useState)(null),
    k,
    A;
  if (
    t[0] !== n ||
    t[1] !== i ||
    t[2] !== a ||
    t[3] !== o ||
    t[4] !== s ||
    t[5] !== d ||
    t[6] !== u ||
    t[7] !== c ||
    t[8] !== f ||
    t[9] !== p ||
    t[10] !== D ||
    t[11] !== g ||
    t[12] !== h ||
    t[13] !== v ||
    t[14] !== m ||
    t[15] !== b ||
    t[16] !== x ||
    t[17] !== _ ||
    t[18] !== E ||
    t[19] !== S ||
    t[20] !== C ||
    t[21] !== w ||
    t[22] !== T
  ) {
    A = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = {
        alt: n,
        attachmentId: i,
        attachmentSrc: a,
        downloadSrc: o,
        imageSource: u,
        onImageEditSubmit: m,
        onDownloaded: h,
        renderHeaderActions: _,
        readOnly: b,
        referrerPolicy: x,
        src: C,
        tabId: w,
      };
      if (s != null && f != null) {
        let n;
        t[25] !== g || t[26] !== E || t[27] !== S || t[28] !== w
          ? ((n = (e) => {
              (g?.(e), S((t) => (t.activeImageId === e.id ? t : { ...t, activeImageId: e.id })));
              let t = ue(ye(E, w) ?? `right`),
                n = E.get(t.tabById$, w),
                r =
                  n?.durableRoute?.kind === `image-preview` && n.durableRoute.payloadVersion === 1
                    ? M.safeParse(n.durableRoute.params)
                    : null;
              t.updateTab(E, w, {
                ...(r?.success === !0 && r.data.source === `generated-image`
                  ? { durableRoute: y({ imageItemId: e.id, source: `generated-image` }) }
                  : {}),
                title: e.tabTitle,
                tooltip: e.tabTitle,
              });
            }),
            (t[25] = g),
            (t[26] = E),
            (t[27] = S),
            (t[28] = w),
            (t[29] = n))
          : (n = t[29]);
        let r;
        t[30] !== E || t[31] !== S || t[32] !== w
          ? ((r = (e) => {
              (e === `playground` && ye(E, w) === `right` && l(E, !0),
                S((t) => (t.view === e ? t : { ...t, view: e })));
            }),
            (t[30] = E),
            (t[31] = S),
            (t[32] = w),
            (t[33] = r))
          : (r = t[33]);
        let i = {
          fallbackImage: e,
          imageAssetResolver: d,
          initialImageId: T.activeImageId ?? f,
          initialImages: s,
          onGeneratedImageSelection: v,
          view: T.view,
          onActiveImageChange: n,
          onViewChange: r,
        };
        A =
          E.value.routeKind === `chatgpt-thread`
            ? (0, Ua.createElement)(Da, i)
            : (0, Ua.createElement)(Na, {
                ...i,
                restrictLiveTailToInitialImages: p === `initial-only`,
              });
        break bb0;
      }
      let r;
      t[34] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = () => O(null)), (t[34] = r))
        : (r = t[34]);
      let j = { manualZoomPercent: D, onZoomPercentChange: O, onZoomToFit: r };
      k =
        c == null
          ? (0, Ua.createElement)($i, { ...e, zoom: j })
          : (0, Ua.createElement)(Va, {
              ...e,
              conversationId: c.conversationId,
              hostId: c.hostId,
              zoom: j,
            });
    }
    ((t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = d),
      (t[6] = u),
      (t[7] = c),
      (t[8] = f),
      (t[9] = p),
      (t[10] = D),
      (t[11] = g),
      (t[12] = h),
      (t[13] = v),
      (t[14] = m),
      (t[15] = b),
      (t[16] = x),
      (t[17] = _),
      (t[18] = E),
      (t[19] = S),
      (t[20] = C),
      (t[21] = w),
      (t[22] = T),
      (t[23] = k),
      (t[24] = A));
  } else ((k = t[23]), (A = t[24]));
  return A === Symbol.for(`react.early_return_sentinel`) ? k : A;
}
function Va(e) {
  let t = (0, Ha.c)(4),
    { attachmentSrc: n, conversationId: r, downloadSrc: i, hostId: a, src: o, ...s } = e,
    c;
  t[0] !== n || t[1] !== r || t[2] !== a
    ? ((c = { conversationId: r, hostId: a, shouldLoadFileDataUrl: !1, src: n }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = c))
    : (c = t[3]);
  let { downloadSrc: l, previewSrc: u } = xn(c);
  return (0, Ua.createElement)($i, {
    ...s,
    attachmentSrc: n,
    downloadSrc: l ?? i ?? u ?? o,
    src: u ?? o,
  });
}
var Ha, Ua;
e(() => {
  ((Ha = ct()), L(), (Ua = t(s(), 1)), zt(), Ma(), Fn(), sa(), za(), J(), Rt(), te());
})();
export { Ba as ImagePreviewPanel };
//# sourceMappingURL=tab-content-d61f09bbfe58.js.map
