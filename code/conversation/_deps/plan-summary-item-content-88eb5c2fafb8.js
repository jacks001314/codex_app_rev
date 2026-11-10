import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  AV as i,
  Amn as a,
  An as o,
  Bat as s,
  Bdt as c,
  CQ as l,
  Cpn as u,
  Eln as d,
  F3t as f,
  GTt as p,
  IU as m,
  JG as h,
  Jit as g,
  Jrt as _,
  KG as v,
  Kit as y,
  LKt as b,
  Ldt as x,
  M6t as S,
  MH as C,
  N3t as w,
  N6t as T,
  O3t as E,
  Opn as ee,
  P6t as D,
  PU as O,
  Plt as k,
  QXt as A,
  Qrt as j,
  RKt as M,
  Rdt as N,
  Rpn as P,
  S3t as te,
  SFt as F,
  Spn as ne,
  TFt as I,
  TJt as re,
  TW as ie,
  Uat as ae,
  Vat as oe,
  Xdt as se,
  Xrt as ce,
  Yrt as le,
  ZG as ue,
  ZTt as de,
  Zrt as fe,
  _Q as pe,
  a3t as me,
  aYt as he,
  bJt as ge,
  d3t as _e,
  dK as ve,
  du as L,
  eit as R,
  fu as z,
  gMt as B,
  gRt as V,
  hMt as ye,
  hmn as H,
  iit as U,
  jH as be,
  jV as W,
  kMt as G,
  kmn as K,
  kn as q,
  lLt as J,
  m1 as xe,
  mK as Se,
  mu as Ce,
  nH as we,
  nZt as Te,
  nit as Ee,
  nln as De,
  o3t as Oe,
  p1 as ke,
  pu as Ae,
  rTt as je,
  rit as Me,
  s3t as Ne,
  sYt as Pe,
  tH as Fe,
  tit as Ie,
  vLt as Le,
  vit as Re,
  wJt as ze,
  wW as Be,
  xJt as Ve,
  xRt as He,
  xpn as Ue,
  yit as We,
  zdt as Ge,
  zpn as Ke,
} from "./app-initial-f094ef01c64d.js";
import {
  Ar as qe,
  Cr as Je,
  Ir as Ye,
  Lr as Xe,
  Or as Ze,
  wr as Qe,
} from "./app-primary-4c40d73a1074.js";
import { n as $e, t as et } from "./feedback-availability-ba2b2560dbae.js";
import { i as tt, n as nt, r as rt } from "./surface-572ba2609efa.js";
import { n as it, t as at } from "./thumb-mixed-74cb6fc32b2e.js";
function ot(e) {
  let t = (0, st.c)(94),
    { disabled: n, rating: r, onRate: i, shouldRestoreFocus: a, variant: o } = e,
    s = n !== void 0 && n,
    l = o === void 0 ? `response` : o,
    d = ee(),
    f = (0, ct.useRef)(null),
    p = (0, ct.useRef)(!1),
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = () => {
        p.current &&= (f.current?.focus(), !1);
      }),
      (t[0] = m))
    : (m = t[0]);
  let g;
  (t[1] === r ? (g = t[2]) : ((g = [r]), (t[1] = r), (t[2] = g)), (0, ct.useLayoutEffect)(m, g));
  let _;
  t[3] !== i || t[4] !== r || t[5] !== a
    ? ((_ = (e) => {
        ((p.current = a?.(r === e ? null : e) ?? !0), i(e));
      }),
      (t[3] = i),
      (t[4] = r),
      (t[5] = a),
      (t[6] = _))
    : (_ = t[6]);
  let b = _;
  if (l === `imageTurn`) {
    let e;
    t[7] === d ? (e = t[8]) : ((e = d.formatMessage(X.likeImage)), (t[7] = d), (t[8] = e));
    let n = e,
      i;
    t[9] === d ? (i = t[10]) : ((i = d.formatMessage(X.dislikeImage)), (t[9] = d), (t[10] = i));
    let a = i,
      o;
    t[11] !== s || t[12] !== n || t[13] !== b || t[14] !== r
      ? ((o =
          r === `thumbsDown`
            ? null
            : (0, Y.jsx)(y, {
                tooltipContent: n,
                children: (0, Y.jsx)(G, {
                  ref: f,
                  "aria-label": n,
                  "aria-pressed": r === `thumbsUp`,
                  color: r === `thumbsUp` ? `secondary` : `ghost`,
                  disabled: s || r === `thumbsUp`,
                  size: `icon`,
                  onClick: () => b(`thumbsUp`),
                  children: r === `thumbsUp` ? (0, Y.jsx)(c, {}) : (0, Y.jsx)(Ge, {}),
                }),
              })),
        (t[11] = s),
        (t[12] = n),
        (t[13] = b),
        (t[14] = r),
        (t[15] = o))
      : (o = t[15]);
    let l;
    t[16] !== s || t[17] !== a || t[18] !== b || t[19] !== r
      ? ((l =
          r === `thumbsUp`
            ? null
            : (0, Y.jsx)(y, {
                tooltipContent: a,
                children: (0, Y.jsx)(G, {
                  ref: f,
                  "aria-label": a,
                  "aria-pressed": r === `thumbsDown`,
                  color: r === `thumbsDown` ? `secondary` : `ghost`,
                  disabled: s || r === `thumbsDown`,
                  size: `icon`,
                  onClick: () => b(`thumbsDown`),
                  children: r === `thumbsDown` ? (0, Y.jsx)(N, {}) : (0, Y.jsx)(x, {}),
                }),
              })),
        (t[16] = s),
        (t[17] = a),
        (t[18] = b),
        (t[19] = r),
        (t[20] = l))
      : (l = t[20]);
    let u;
    return (
      t[21] !== o || t[22] !== l
        ? ((u = (0, Y.jsxs)(Y.Fragment, { children: [o, l] })),
          (t[21] = o),
          (t[22] = l),
          (t[23] = u))
        : (u = t[23]),
      u
    );
  }
  if (l === `imageViewerMenu`) {
    let e;
    t[24] === d ? (e = t[25]) : ((e = d.formatMessage(X.imageMenu)), (t[24] = d), (t[25] = e));
    let n = e,
      i;
    t[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Y.jsx)(k, {})), (t[26] = i))
      : (i = t[26]);
    let a;
    t[27] === n
      ? (a = t[28])
      : ((a = (0, Y.jsx)(G, {
          ref: f,
          "aria-label": n,
          color: `ghost`,
          size: `toolbar`,
          uniform: !0,
          children: i,
        })),
        (t[27] = n),
        (t[28] = a));
    let o;
    t[29] !== n || t[30] !== a
      ? ((o = (0, Y.jsx)(y, { tooltipContent: n, children: a })),
        (t[29] = n),
        (t[30] = a),
        (t[31] = o))
      : (o = t[31]);
    let l;
    t[32] === r
      ? (l = t[33])
      : ((l = r === `thumbsUp` ? (0, Y.jsx)(c, {}) : (0, Y.jsx)(Ge, {})), (t[32] = r), (t[33] = l));
    let p;
    t[34] === b ? (p = t[35]) : ((p = () => b(`thumbsUp`)), (t[34] = b), (t[35] = p));
    let m;
    t[36] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((m = (0, Y.jsx)(u, { ...X.likeImage })), (t[36] = m))
      : (m = t[36]);
    let g;
    t[37] !== l || t[38] !== p
      ? ((g = (0, Y.jsx)(h.Item, { leftIcon: l, onSelect: p, children: m })),
        (t[37] = l),
        (t[38] = p),
        (t[39] = g))
      : (g = t[39]);
    let _;
    t[40] === r
      ? (_ = t[41])
      : ((_ = r === `thumbsDown` ? (0, Y.jsx)(N, {}) : (0, Y.jsx)(x, {})),
        (t[40] = r),
        (t[41] = _));
    let S;
    t[42] === b ? (S = t[43]) : ((S = () => b(`thumbsDown`)), (t[42] = b), (t[43] = S));
    let C;
    t[44] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((C = (0, Y.jsx)(u, { ...X.dislikeImage })), (t[44] = C))
      : (C = t[44]);
    let w;
    t[45] !== _ || t[46] !== S
      ? ((w = (0, Y.jsx)(h.Item, { leftIcon: _, onSelect: S, children: C })),
        (t[45] = _),
        (t[46] = S),
        (t[47] = w))
      : (w = t[47]);
    let T;
    return (
      t[48] !== s || t[49] !== g || t[50] !== w || t[51] !== o
        ? ((T = (0, Y.jsxs)(v, {
            disabled: s,
            align: `end`,
            side: `bottom`,
            triggerButton: o,
            children: [g, w],
          })),
          (t[48] = s),
          (t[49] = g),
          (t[50] = w),
          (t[51] = o),
          (t[52] = T))
        : (T = t[52]),
      T
    );
  }
  if (r != null) {
    let e = r === `thumbsUp`,
      n = e ? c : N,
      i;
    t[53] !== d || t[54] !== e
      ? ((i = d.formatMessage(e ? X.removeGoodResponse : X.removeBadResponse)),
        (t[53] = d),
        (t[54] = e),
        (t[55] = i))
      : (i = t[55]);
    let a = i,
      o;
    t[56] !== b || t[57] !== r
      ? ((o = () => b(r)), (t[56] = b), (t[57] = r), (t[58] = o))
      : (o = t[58]);
    let l;
    t[59] === n ? (l = t[60]) : ((l = (0, Y.jsx)(n, {})), (t[59] = n), (t[60] = l));
    let u;
    t[61] !== s || t[62] !== a || t[63] !== o || t[64] !== l
      ? ((u = (0, Y.jsx)(G, {
          ref: f,
          type: `button`,
          "aria-label": a,
          "aria-pressed": !0,
          color: `ghost`,
          disabled: s,
          size: `icon`,
          onClick: o,
          children: l,
        })),
        (t[61] = s),
        (t[62] = a),
        (t[63] = o),
        (t[64] = l),
        (t[65] = u))
      : (u = t[65]);
    let p;
    return (
      t[66] !== a || t[67] !== u
        ? ((p = (0, Y.jsx)(y, { tooltipContent: a, children: u })),
          (t[66] = a),
          (t[67] = u),
          (t[68] = p))
        : (p = t[68]),
      p
    );
  }
  let S;
  t[69] === d ? (S = t[70]) : ((S = d.formatMessage(X.feedback)), (t[69] = d), (t[70] = S));
  let C = S,
    w;
  t[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Y.jsx)(at, { className: `icon-xs` })), (t[71] = w))
    : (w = t[71]);
  let T;
  t[72] === C
    ? (T = t[73])
    : ((T = (0, Y.jsx)(G, { ref: f, "aria-label": C, color: `ghost`, size: `icon`, children: w })),
      (t[72] = C),
      (t[73] = T));
  let E;
  t[74] !== C || t[75] !== T
    ? ((E = (0, Y.jsx)(y, { tooltipContent: C, children: T })),
      (t[74] = C),
      (t[75] = T),
      (t[76] = E))
    : (E = t[76]);
  let D;
  t[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Y.jsx)(Ge, {})), (t[77] = D))
    : (D = t[77]);
  let O;
  t[78] === b ? (O = t[79]) : ((O = () => b(`thumbsUp`)), (t[78] = b), (t[79] = O));
  let A;
  t[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Y.jsx)(u, { ...X.goodResponse })), (t[80] = A))
    : (A = t[80]);
  let j;
  t[81] === O
    ? (j = t[82])
    : ((j = (0, Y.jsx)(h.Item, { leftIcon: D, onSelect: O, children: A })),
      (t[81] = O),
      (t[82] = j));
  let M;
  t[83] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Y.jsx)(x, {})), (t[83] = M))
    : (M = t[83]);
  let P;
  t[84] === b ? (P = t[85]) : ((P = () => b(`thumbsDown`)), (t[84] = b), (t[85] = P));
  let te;
  t[86] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, Y.jsx)(u, { ...X.badResponse })), (t[86] = te))
    : (te = t[86]);
  let F;
  t[87] === P
    ? (F = t[88])
    : ((F = (0, Y.jsx)(h.Item, { leftIcon: M, onSelect: P, children: te })),
      (t[87] = P),
      (t[88] = F));
  let ne;
  return (
    t[89] !== s || t[90] !== j || t[91] !== F || t[92] !== E
      ? ((ne = (0, Y.jsxs)(v, { disabled: s, side: `top`, triggerButton: E, children: [j, F] })),
        (t[89] = s),
        (t[90] = j),
        (t[91] = F),
        (t[92] = E),
        (t[93] = ne))
      : (ne = t[93]),
    ne
  );
}
var st,
  ct,
  Y,
  X,
  lt = e(() => {
    ((st = K()),
      (ct = t(a(), 1)),
      ne(),
      r(),
      ue(),
      se(),
      g(),
      it(),
      (Y = H()),
      (X = Ue({
        imageMenu: {
          id: `imageSidePanel.more`,
          defaultMessage: `Show more`,
          description: `Accessible label for the image viewer header menu with Like this image and Dislike this image feedback actions.`,
        },
        likeImage: {
          id: `imageSidePanel.like`,
          defaultMessage: `Like this image`,
          description: `Image feedback button or menu item that submits positive feedback for the displayed image. In the image viewer menu, selecting it again removes the existing positive rating.`,
        },
        dislikeImage: {
          id: `imageSidePanel.dislike`,
          defaultMessage: `Dislike this image`,
          description: `Image feedback button or menu item that submits negative feedback and opens a form for more detail. In the image viewer menu, selecting it again removes the existing negative rating.`,
        },
        goodResponse: {
          id: `ConversationTurn.goodResponseFeedbackMenuItem`,
          defaultMessage: `Good response`,
          description: `Short menu item label in the feedback menu beneath a completed assistant response. Selecting it submits positive feedback for that response.`,
        },
        badResponse: {
          id: `ConversationTurn.badResponseFeedbackMenuItem`,
          defaultMessage: `Bad response`,
          description: `Short menu item label in the feedback menu beneath a completed assistant response. Selecting it submits negative feedback for that response.`,
        },
        feedback: {
          id: `ConversationTurn.rateResponseTooltip`,
          defaultMessage: `Rate response`,
          description: `Short tooltip and accessible label for the feedback action beneath a completed assistant response. Selecting it opens a menu with Good response and Bad response choices.`,
        },
        removeGoodResponse: {
          id: `ConversationTurn.removeGoodResponseFeedbackTooltip`,
          defaultMessage: `Remove good response feedback`,
          description: `Short tooltip and accessible label for selected positive feedback beneath a completed assistant response. Selecting it removes the feedback.`,
        },
        removeBadResponse: {
          id: `ConversationTurn.removeBadResponseFeedbackTooltip`,
          defaultMessage: `Remove bad response feedback`,
          description: `Short tooltip and accessible label for selected negative feedback beneath a completed assistant response. Selecting it removes the feedback.`,
        },
      })));
  });
function ut(e) {
  let t = (0, xt.c)(98),
    {
      onBackToFeedback: n,
      onClose: r,
      reportRequest: i,
      chatGptMessageId: a,
      reportEntityType: o,
      reportReasonsEntityType: s,
      threadId: c,
    } = e,
    l = ee(),
    d = s ?? o,
    f;
  t[0] === d ? (f = t[1]) : ((f = [Ct, d]), (t[0] = d), (t[1] = f));
  let p;
  t[2] !== d || t[3] !== i
    ? ((p = () => yt(d, i)), (t[2] = d), (t[3] = i), (t[4] = p))
    : (p = t[4]);
  let m;
  t[5] !== f || t[6] !== p
    ? ((m = { queryKey: f, queryFn: p, staleTime: ze.ONE_MINUTE }),
      (t[5] = f),
      (t[6] = p),
      (t[7] = m))
    : (m = t[7]);
  let h = te(m),
    g;
  t[8] !== a || t[9] !== i
    ? ((g = { mutationFn: (e) => bt(e, i, a) }), (t[8] = a), (t[9] = i), (t[10] = g))
    : (g = t[10]);
  let v = _e(g),
    [y, b] = (0, St.useState)(``),
    [x, S] = (0, St.useState)(null),
    C;
  t[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((C = []), (t[11] = C)) : (C = t[11]);
  let [w, E] = (0, St.useState)(C),
    O = w.length === 0 ? null : w[w.length - 1],
    k,
    A,
    M,
    N,
    P;
  t[12] !== O?.details_placeholder ||
  t[13] !== O?.link_attachment ||
  t[14] !== O?.sub_reasons ||
  t[15] !== h.data?.reasons ||
  t[16] !== x
    ? ((P = O?.sub_reasons ?? h.data?.reasons ?? []),
      (M = P.find((e) => e.id === x) ?? null),
      (k = O?.details_placeholder != null),
      (A = O?.link_attachment != null),
      (N = k || (M != null && _t(M))),
      (t[12] = O?.details_placeholder),
      (t[13] = O?.link_attachment),
      (t[14] = O?.sub_reasons),
      (t[15] = h.data?.reasons),
      (t[16] = x),
      (t[17] = k),
      (t[18] = A),
      (t[19] = M),
      (t[20] = N),
      (t[21] = P))
    : ((k = t[17]), (A = t[18]), (M = t[19]), (N = t[20]), (P = t[21]));
  let F = N,
    ne = M == null || h.isPending || v.isPending,
    I = v.isSuccess || h.isError,
    re = !I && !F && !A && ne,
    ie;
  t[22] === r
    ? (ie = t[23])
    : ((ie = (e) => {
        e || r();
      }),
      (t[22] = r),
      (t[23] = ie));
  let ae = ie,
    oe;
  t[24] !== O || t[25] !== n || t[26] !== r || t[27] !== w
    ? ((oe = () => {
        if (O == null) {
          (r(), n?.());
          return;
        }
        let e = w[w.length - 1];
        (E(dt), S(e?.id ?? null), b(``));
      }),
      (t[24] = O),
      (t[25] = n),
      (t[26] = r),
      (t[27] = w),
      (t[28] = oe))
    : (oe = t[28]);
  let se = oe,
    ue;
  t[29] !== O ||
  t[30] !== y ||
  t[31] !== k ||
  t[32] !== A ||
  t[33] !== r ||
  t[34] !== o ||
  t[35] !== i ||
  t[36] !== v ||
  t[37] !== M ||
  t[38] !== I ||
  t[39] !== c
    ? ((ue = (e) => {
        if ((e.preventDefault(), I)) {
          r();
          return;
        }
        if (A && O?.link_attachment != null) {
          if (i != null) {
            vt(O.link_attachment);
            return;
          }
          D({
            href: O.link_attachment,
            initiator: `open_in_browser_bridge`,
            openTarget: `external-browser`,
          });
          return;
        }
        if (k && O != null) {
          v.mutate({ details: y.trim(), entityType: o, reasonId: O.id, threadId: c });
          return;
        }
        if (M != null) {
          if (_t(M)) {
            v.mutate({ details: ``, entityType: o, reasonId: M.id, threadId: c });
            return;
          }
          (E((e) => [...e, M]), S(null), b(``));
        }
      }),
      (t[29] = O),
      (t[30] = y),
      (t[31] = k),
      (t[32] = A),
      (t[33] = r),
      (t[34] = o),
      (t[35] = i),
      (t[36] = v),
      (t[37] = M),
      (t[38] = I),
      (t[39] = c),
      (t[40] = ue))
    : (ue = t[40]);
  let de = ue,
    pe;
  t[41] !== O || t[42] !== i
    ? ((pe = (e) => {
        if (O?.link_attachment != null) {
          if (i != null) {
            vt(O.link_attachment);
            return;
          }
          T({
            event: e,
            href: O.link_attachment,
            initiator: `open_in_browser_bridge`,
            openTarget: `external-browser`,
          });
        }
      }),
      (t[41] = O),
      (t[42] = i),
      (t[43] = pe))
    : (pe = t[43]);
  let me = pe,
    he;
  t[44] !== O || t[45] !== h.data || t[46] !== v.isSuccess
    ? ((he = gt({ activeReason: O, reportReasons: h.data, isSuccess: v.isSuccess })),
      (t[44] = O),
      (t[45] = h.data),
      (t[46] = v.isSuccess),
      (t[47] = he))
    : (he = t[47]);
  let ge = he,
    ve;
  t[48] === v.isSuccess
    ? (ve = t[49])
    : ((ve = (0, Z.jsx)(Me, { children: (0, Z.jsx)(ft, { success: v.isSuccess }) })),
      (t[48] = v.isSuccess),
      (t[49] = ve));
  let L;
  t[50] === ge
    ? (L = t[51])
    : ((L = ge == null ? void 0 : (0, Z.jsx)(Ee, { children: ge })), (t[50] = ge), (t[51] = L));
  let R;
  t[52] !== ve || t[53] !== L
    ? ((R = (0, Z.jsx)(fe, {
        children: (0, Z.jsx)(ce, { title: ve, subtitle: L, titleSize: `dialog` }),
      })),
      (t[52] = ve),
      (t[53] = L),
      (t[54] = R))
    : (R = t[54]);
  let z;
  t[55] !== O ||
  t[56] !== y ||
  t[57] !== l ||
  t[58] !== k ||
  t[59] !== A ||
  t[60] !== h.isError ||
  t[61] !== h.isPending ||
  t[62] !== v.isSuccess ||
  t[63] !== x ||
  t[64] !== P
    ? ((z = v.isSuccess
        ? (0, Z.jsx)(ht, {
            children: (0, Z.jsx)(u, {
              id: `codexThreadReportDialog.successBody`,
              defaultMessage: `Our team will review the content to determine if it violates our policies`,
              description: `Body shown after a Codex thread safety or legal report is submitted`,
            }),
          })
        : h.isPending
          ? (0, Z.jsx)(ht, {
              children: (0, Z.jsx)(u, {
                id: `codexThreadReportDialog.loading`,
                defaultMessage: `Loading reporting options…`,
                description: `Loading text while Codex thread report reasons are fetched`,
              }),
            })
          : h.isError
            ? (0, Z.jsx)(ht, {
                children: (0, Z.jsx)(u, {
                  id: `codexThreadReportDialog.loadError`,
                  defaultMessage: `We couldn't load reporting options. Please try again in a moment`,
                  description: `Error text shown when Codex thread report reasons fail to load`,
                }),
              })
            : k && O != null
              ? (0, Z.jsxs)(j, {
                  className: `gap-3`,
                  children: [
                    (0, Z.jsx)(Be, {
                      autoFocus: !0,
                      rows: 5,
                      placeholder: O.details_placeholder ?? void 0,
                      "aria-label": l.formatMessage({
                        id: `codexThreadReportDialog.detailsLabel`,
                        defaultMessage: `Add details`,
                        description: `Accessible label for Codex thread report details field`,
                      }),
                      value: y,
                      onChange: (e) => {
                        b(e.target.value);
                      },
                    }),
                    O.subtext == null ? null : (0, Z.jsx)(ht, { children: O.subtext }),
                  ],
                })
              : A
                ? (0, Z.jsx)(ht, {
                    children:
                      O?.subtext ??
                      (0, Z.jsx)(u, {
                        id: `codexThreadReportDialog.linkBody`,
                        defaultMessage: `Open the linked form to finish this report`,
                        description: `Body shown when a Codex thread report reason needs an external form`,
                      }),
                  })
                : (0, Z.jsx)(mt, { reasons: P, selectedReasonId: x, setSelectedReasonId: S })),
      (t[55] = O),
      (t[56] = y),
      (t[57] = l),
      (t[58] = k),
      (t[59] = A),
      (t[60] = h.isError),
      (t[61] = h.isPending),
      (t[62] = v.isSuccess),
      (t[63] = x),
      (t[64] = P),
      (t[65] = z))
    : (z = t[65]);
  let B;
  t[66] === v.isError
    ? (B = t[67])
    : ((B = v.isError
        ? (0, Z.jsx)(`p`, {
            className: `text-sm`,
            children: (0, Z.jsx)(u, {
              id: `codexThreadReportDialog.submitError`,
              defaultMessage: `We couldn't submit your report. Please try again in a moment`,
              description: `Error text shown when Codex thread report submission fails`,
            }),
          })
        : null),
      (t[66] = v.isError),
      (t[67] = B));
  let V;
  t[68] !== z || t[69] !== B
    ? ((V = (0, Z.jsxs)(fe, { children: [z, B] })), (t[68] = z), (t[69] = B), (t[70] = V))
    : (V = t[70]);
  let ye;
  t[71] !== O || t[72] !== se || t[73] !== n || t[74] !== v.isPending || t[75] !== v.isSuccess
    ? ((ye =
        (O != null || n != null) && !v.isSuccess
          ? (0, Z.jsx)(G, {
              color: `secondary`,
              disabled: v.isPending,
              type: `button`,
              onClick: se,
              children: (0, Z.jsx)(u, {
                id: `codexThreadReportDialog.back`,
                defaultMessage: `Back`,
                description: `Back button for Codex thread report reason selection`,
              }),
            })
          : null),
      (t[71] = O),
      (t[72] = se),
      (t[73] = n),
      (t[74] = v.isPending),
      (t[75] = v.isSuccess),
      (t[76] = ye))
    : (ye = t[76]);
  let H = A ? `button` : `submit`,
    U = A ? me : void 0,
    be;
  t[77] !== A || t[78] !== F || t[79] !== I
    ? ((be = (0, Z.jsx)(pt, { close: I, isLinkStep: A, isSubmitStep: F })),
      (t[77] = A),
      (t[78] = F),
      (t[79] = I),
      (t[80] = be))
    : (be = t[80]);
  let W;
  t[81] !== re || t[82] !== v.isPending || t[83] !== H || t[84] !== U || t[85] !== be
    ? ((W = (0, Z.jsx)(G, {
        color: `primary`,
        disabled: re,
        loading: v.isPending,
        type: H,
        onClick: U,
        children: be,
      })),
      (t[81] = re),
      (t[82] = v.isPending),
      (t[83] = H),
      (t[84] = U),
      (t[85] = be),
      (t[86] = W))
    : (W = t[86]);
  let K;
  t[87] !== ye || t[88] !== W
    ? ((K = (0, Z.jsx)(fe, { children: (0, Z.jsxs)(le, { children: [ye, W] }) })),
      (t[87] = ye),
      (t[88] = W),
      (t[89] = K))
    : (K = t[89]);
  let q;
  t[90] !== de || t[91] !== R || t[92] !== V || t[93] !== K
    ? ((q = (0, Z.jsxs)(_, { as: `form`, className: `gap-4`, onSubmit: de, children: [R, V, K] })),
      (t[90] = de),
      (t[91] = R),
      (t[92] = V),
      (t[93] = K),
      (t[94] = q))
    : (q = t[94]);
  let J;
  return (
    t[95] !== ae || t[96] !== q
      ? ((J = (0, Z.jsx)(Ie, { open: !0, onOpenChange: ae, size: `wide`, children: q })),
        (t[95] = ae),
        (t[96] = q),
        (t[97] = J))
      : (J = t[97]),
    J
  );
}
function dt(e) {
  return e.slice(0, -1);
}
function ft(e) {
  let t = (0, xt.c)(2),
    { success: n } = e;
  if (n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(u, {
            id: `codexThreadReportDialog.successTitle`,
            defaultMessage: `Thanks for your report`,
            description: `Title shown after a Codex thread safety or legal report is submitted`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let r;
  return (
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Z.jsx)(u, {
          id: `codexThreadReportDialog.title`,
          defaultMessage: `Report response`,
          description: `Title for the modal where users report a Codex response for safety or legal reasons`,
        })),
        (t[1] = r))
      : (r = t[1]),
    r
  );
}
function pt(e) {
  let t = (0, xt.c)(4),
    { close: n, isLinkStep: r, isSubmitStep: i } = e;
  if (n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(u, {
            id: `codexThreadReportDialog.close`,
            defaultMessage: `Close`,
            description: `Close button for Codex thread report dialog`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (r) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(u, {
            id: `codexThreadReportDialog.viewForm`,
            defaultMessage: `View form`,
            description: `Button label for opening an external Codex report form`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (i) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(u, {
            id: `codexThreadReportDialog.submit`,
            defaultMessage: `Submit`,
            description: `Submit button for Codex thread report dialog`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let a;
  return (
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, Z.jsx)(u, {
          id: `codexThreadReportDialog.next`,
          defaultMessage: `Next`,
          description: `Next button for Codex thread report reason selection`,
        })),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function mt(e) {
  let t = (0, xt.c)(12),
    { reasons: n, selectedReasonId: r, setSelectedReasonId: i } = e,
    a = ee(),
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = a.formatMessage({
        id: `codexThreadReportDialog.optionsLabel`,
        defaultMessage: `Reporting options`,
        description: `Accessible label for Codex thread report reason options`,
      })),
      (t[0] = a),
      (t[1] = o));
  let s;
  if (t[2] !== n || t[3] !== r || t[4] !== i) {
    let e;
    (t[6] !== r || t[7] !== i
      ? ((e = (e) => {
          let t = r === e.id;
          return (0, Z.jsx)(
            `button`,
            {
              type: `button`,
              role: `radio`,
              "aria-checked": t,
              onClick: () => {
                i(e.id);
              },
              className: P(
                `border-default cursor-interaction rounded-lg border px-3 py-2 text-start text-sm`,
                `focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2`,
                t
                  ? `bg-primary-solid text-primary-solid`
                  : `text-default hover:bg-surface-elevated/60`,
              ),
              children: e.cta,
            },
            e.id,
          );
        }),
        (t[6] = r),
        (t[7] = i),
        (t[8] = e))
      : (e = t[8]),
      (s = n.map(e)),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = s));
  } else s = t[5];
  let c;
  return (
    t[9] !== o || t[10] !== s
      ? ((c = (0, Z.jsx)(`div`, {
          role: `radiogroup`,
          "aria-label": o,
          className: `flex flex-col gap-2`,
          children: s,
        })),
        (t[9] = o),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function ht(e) {
  let t = (0, xt.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(`div`, { className: `text-sm text-codex-description`, children: n })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function gt({ activeReason: e, isSuccess: t, reportReasons: n }) {
  return t ? null : e == null ? (n?.header_explanation ?? n?.header ?? null) : e.cta;
}
function _t(e) {
  return (
    (e.sub_reasons?.length ?? 0) === 0 &&
    e.details_placeholder == null &&
    e.link_attachment == null &&
    e.subtext == null
  );
}
function vt(e) {
  if (!/^https:\/\//i.test(e)) return;
  let t = document.createElement(`a`);
  ((t.href = e), (t.target = `_blank`), (t.rel = `noopener noreferrer`), t.click());
}
async function yt(e, t) {
  if (t != null) {
    let n = await t(`/report_flow/reasons/${e}`);
    if (!n.ok) throw Error(`Could not load reporting options`);
    return await n.json();
  }
  return (await ge.getInstance().get(`/report_flow/reasons/${e}`, b())).body;
}
async function bt({ details: e, entityType: t, reasonId: n, threadId: r }, i, a) {
  let o = JSON.stringify({
    entity_id: r,
    entity_type: t,
    product_area: t === `conversation` ? `1p` : `codex`,
    reason: e.length === 0 ? { id: n } : { id: n, details: e },
  });
  if (i != null) {
    if (
      !(
        await i(`/report_flow/report`, {
          method: `POST`,
          headers: { "Content-Type": `application/json` },
          body: o,
        })
      ).ok
    )
      throw Error(`Could not submit report`);
    return;
  }
  await ge
    .getInstance()
    .post(`/report_flow/report`, o, {
      ...b(),
      ...(a == null ? {} : { "chatgpt-conv-message-id": a }),
    });
}
var xt,
  St,
  Z,
  Ct,
  wt = e(() => {
    ((xt = K()),
      Ne(),
      Ke(),
      (St = t(a(), 1)),
      ne(),
      r(),
      U(),
      R(),
      S(),
      ie(),
      re(),
      M(),
      Ve(),
      (Z = H()),
      (Ct = `codex-thread-report-reasons`));
  });
function Tt(e) {
  let t = (0, Ot.c)(20),
    { hasArtifacts: r, reportEntityType: i, threadId: a, turnId: o } = e,
    c = r !== void 0 && r,
    l = i === void 0 ? `thread` : i,
    u = n(me),
    [d, m] = (0, kt.useState)(null),
    h = f(Te),
    g = Pe(`584954669`),
    _;
  if (
    t[0] !== c ||
    t[1] !== h ||
    t[2] !== l ||
    t[3] !== g ||
    t[4] !== u ||
    t[5] !== a ||
    t[6] !== o
  ) {
    _ = (t, n, r) => {
      let i = n === void 0 ? `` : n,
        l = c ? Nt[t] : Pt[t],
        d = g ? l : l.filter(Dt);
      ae(u, Ae, {
        belowFreeformContent: (0, At.jsx)(L, {}),
        freeformFeedbackRequired: !1,
        initialDetails: i,
        initialSelectedOptionId: r,
        onOptionSelect: (n) => {
          let { details: r, selectedOptionId: i } = n;
          i === jt && (s(u, Ae), e(r, t));
        },
        onSubmit: (n) => {
          let { details: r, selectedOptionId: i } = n;
          if (i === jt) {
            e(r, t);
            return;
          }
          return h.submitCodexAnalyticsEvent?.({
            action: `submit_turn_feedback`,
            eventKind: `action`,
            threadId: a,
            turnId: o,
            metadata: { details: r, has_artifacts: c, selected_option: i },
          });
        },
        options: d,
      });
    };
    let e = (e, t) => {
      ae(u, ut, {
        onBackToFeedback: () => {
          _(t, e, jt);
        },
        reportEntityType: l,
        threadId: a,
      });
    };
    ((t[0] = c),
      (t[1] = h),
      (t[2] = l),
      (t[3] = g),
      (t[4] = u),
      (t[5] = a),
      (t[6] = o),
      (t[7] = _));
  } else _ = t[7];
  let v;
  t[8] !== _ || t[9] !== h || t[10] !== u || t[11] !== d || t[12] !== a || t[13] !== o
    ? ((v = (e) => {
        if (d === e) {
          m(null);
          return;
        }
        m(e);
        let t = u.get(p, a);
        (h.submitCodexAnalyticsEvent?.({
          eventKind: `turn_rating`,
          threadId: a,
          turnId: o,
          sessionId: t === a && u.get(de, a) != null ? null : t,
          rating: e,
        }),
          _(e));
      }),
      (t[8] = _),
      (t[9] = h),
      (t[10] = u),
      (t[11] = d),
      (t[12] = a),
      (t[13] = o),
      (t[14] = v))
    : (v = t[14]);
  let y = v,
    b = d == null ? null : Mt[d],
    x;
  t[15] === y
    ? (x = t[16])
    : ((x = (e) => y(e === `thumbsUp` ? `thumbs_up` : `thumbs_down`)), (t[15] = y), (t[16] = x));
  let S;
  return (
    t[17] !== b || t[18] !== x
      ? ((S = (0, At.jsx)(ot, { rating: b, onRate: x, shouldRestoreFocus: Et })),
        (t[17] = b),
        (t[18] = x),
        (t[19] = S))
      : (S = t[19]),
    S
  );
}
function Et(e) {
  return e == null;
}
function Dt(e) {
  return e.id !== jt;
}
var Ot,
  kt,
  At,
  jt,
  Mt,
  Q,
  Nt,
  Pt,
  Ft = e(() => {
    ((Ot = K()),
      E(),
      (kt = t(a(), 1)),
      ne(),
      je(),
      oe(),
      Ce(),
      z(),
      lt(),
      A(),
      Oe(),
      he(),
      wt(),
      (At = H()),
      (jt = `safety_or_legal_concern`),
      (Mt = { thumbs_down: `thumbsDown`, thumbs_up: `thumbsUp` }),
      (Q = Ue({
        wrongPresentationLength: {
          id: `turnRatingControls.artifactFeedback.wrongPresentationLength`,
          defaultMessage: `Wrong presentation length`,
          description: `Feedback option for an artifact with the wrong presentation length`,
        },
        poorWriting: {
          id: `turnRatingControls.artifactFeedback.poorWriting`,
          defaultMessage: `Poor writing`,
          description: `Feedback option for an artifact with poor writing`,
        },
        poorStyleFormatOrVisuals: {
          id: `turnRatingControls.artifactFeedback.poorStyleFormatOrVisuals`,
          defaultMessage: `Poor style, format, or visuals`,
          description: `Feedback option for an artifact with poor style, formatting, or visuals`,
        },
        wrongTopicsOrSubtopics: {
          id: `turnRatingControls.artifactFeedback.wrongTopicsOrSubtopics`,
          defaultMessage: `Wrong topics or subtopics`,
          description: `Feedback option for an artifact with incorrect topic coverage`,
        },
        didntFollowMyInstructions: {
          id: `turnRatingControls.artifactFeedback.didntFollowMyInstructions`,
          defaultMessage: `Didn't follow my instructions`,
          description: `Feedback option for an artifact that missed instructions`,
        },
        didntFollowMyTemplate: {
          id: `turnRatingControls.artifactFeedback.didntFollowMyTemplate`,
          defaultMessage: `Didn't follow my template`,
          description: `Feedback option for an artifact that missed the template`,
        },
        incorrectContent: {
          id: `turnRatingControls.artifactFeedback.incorrectContent`,
          defaultMessage: `Incorrect content`,
          description: `Feedback option for an artifact with incorrect content`,
        },
        goodContent: {
          id: `turnRatingControls.artifactFeedback.goodContent`,
          defaultMessage: `Good content`,
          description: `Positive feedback option for artifact content`,
        },
        goodWritingQuality: {
          id: `turnRatingControls.artifactFeedback.goodWritingQuality`,
          defaultMessage: `Good writing quality`,
          description: `Positive feedback option for artifact writing quality`,
        },
        goodStyleFormatOrVisuals: {
          id: `turnRatingControls.artifactFeedback.goodStyleFormatOrVisuals`,
          defaultMessage: `Good style, format, or visuals`,
          description: `Positive feedback option for artifact style, formatting, or visuals`,
        },
        followedMyInstructionsWell: {
          id: `turnRatingControls.artifactFeedback.followedMyInstructionsWell`,
          defaultMessage: `Followed my instructions well`,
          description: `Positive feedback option for following instructions`,
        },
        generatedQuickly: {
          id: `turnRatingControls.artifactFeedback.generatedQuickly`,
          defaultMessage: `Generated quickly`,
          description: `Positive feedback option for fast artifact generation`,
        },
        solvedMyTask: {
          id: `turnRatingControls.feedback.solvedMyTask`,
          defaultMessage: `Solved my task`,
          description: `Positive feedback option for a turn that solved the task`,
        },
        followedMyInstructions: {
          id: `turnRatingControls.feedback.followedMyInstructions`,
          defaultMessage: `Followed my instructions`,
          description: `Positive feedback option for following instructions`,
        },
        goodCodeOrOutputQuality: {
          id: `turnRatingControls.feedback.goodCodeOrOutputQuality`,
          defaultMessage: `Good code / output quality`,
          description: `Positive feedback option for good code or output quality`,
        },
        fastAndEfficient: {
          id: `turnRatingControls.feedback.fastAndEfficient`,
          defaultMessage: `Fast and efficient`,
          description: `Positive feedback option for fast and efficient work`,
        },
        usefulAutonomy: {
          id: `turnRatingControls.feedback.usefulAutonomy`,
          defaultMessage: `Useful autonomy`,
          description: `Positive feedback option for useful autonomous behavior`,
        },
        incorrectOrIncomplete: {
          id: `turnRatingControls.feedback.incorrectOrIncomplete`,
          defaultMessage: `Incorrect or incomplete`,
          description: `Negative feedback option for incorrect or incomplete work`,
        },
        offTrackOrWrongScope: {
          id: `turnRatingControls.feedback.offTrackOrWrongScope`,
          defaultMessage: `Off track / wrong scope`,
          description: `Negative feedback option for going off track or out of scope`,
        },
        lostContext: {
          id: `turnRatingControls.feedback.lostContext`,
          defaultMessage: `Lost context`,
          description: `Negative feedback option for losing context`,
        },
        slowOrBuggy: {
          id: `turnRatingControls.feedback.slowOrBuggy`,
          defaultMessage: `Slow or buggy`,
          description: `Negative feedback option for slow or buggy behavior`,
        },
        safetyOrLegalConcern: {
          id: `turnRatingControls.feedback.safetyOrLegalConcern`,
          defaultMessage: `Safety or legal concern`,
          description: `Negative feedback option that opens a safety or legal report flow`,
        },
        other: {
          id: `turnRatingControls.feedback.other`,
          defaultMessage: `Other`,
          description: `Feedback option for other feedback`,
        },
      })),
      (Nt = {
        thumbs_down: [
          { id: `wrong_presentation_length`, label: Q.wrongPresentationLength },
          { id: `poor_writing`, label: Q.poorWriting },
          { id: `poor_style_format_or_visuals`, label: Q.poorStyleFormatOrVisuals },
          { id: `wrong_topics_or_subtopics`, label: Q.wrongTopicsOrSubtopics },
          { id: `didnt_follow_my_instructions`, label: Q.didntFollowMyInstructions },
          { id: `didnt_follow_my_template`, label: Q.didntFollowMyTemplate },
          { id: `incorrect_content`, label: Q.incorrectContent },
          { id: jt, label: Q.safetyOrLegalConcern },
        ],
        thumbs_up: [
          { id: `good_content`, label: Q.goodContent },
          { id: `good_writing_quality`, label: Q.goodWritingQuality },
          { id: `good_style_format_or_visuals`, label: Q.goodStyleFormatOrVisuals },
          { id: `followed_my_instructions_well`, label: Q.followedMyInstructionsWell },
          { id: `generated_quickly`, label: Q.generatedQuickly },
        ],
      }),
      (Pt = {
        thumbs_down: [
          { id: `incorrect_or_incomplete`, label: Q.incorrectOrIncomplete },
          { id: `didnt_follow_my_instructions`, label: Q.didntFollowMyInstructions },
          { id: `off_track_or_wrong_scope`, label: Q.offTrackOrWrongScope },
          { id: `lost_context`, label: Q.lostContext },
          { id: `slow_or_buggy`, label: Q.slowOrBuggy },
          { id: jt, label: Q.safetyOrLegalConcern },
          { id: `other`, label: Q.other },
        ],
        thumbs_up: [
          { id: `solved_my_task`, label: Q.solvedMyTask },
          { id: `followed_my_instructions`, label: Q.followedMyInstructions },
          { id: `good_code_or_output_quality`, label: Q.goodCodeOrOutputQuality },
          { id: `fast_and_efficient`, label: Q.fastAndEfficient },
          { id: `useful_autonomy`, label: Q.usefulAutonomy },
          { id: `other`, label: Q.other },
        ],
      }));
  }),
  It,
  Lt,
  Rt = e(() => {
    (a(),
      (It = H()),
      (Lt = (e) =>
        (0, It.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, It.jsx)(`path`, {
            d: `M7.33496 16V12.665H4C3.63273 12.665 3.33496 12.3673 3.33496 12C3.33496 11.6327 3.63273 11.335 4 11.335H8C8.36727 11.335 8.66504 11.6327 8.66504 12V16C8.66504 16.3673 8.36727 16.665 8 16.665C7.63273 16.665 7.33496 16.3673 7.33496 16ZM11.335 4C11.335 3.63273 11.6327 3.33496 12 3.33496C12.3673 3.33496 12.665 3.63273 12.665 4V7.33496H16L16.1338 7.34863C16.4369 7.41057 16.665 7.67857 16.665 8C16.665 8.32143 16.4369 8.58943 16.1338 8.65137L16 8.66504H12C11.6327 8.66504 11.335 8.36727 11.335 8V4Z`,
          }),
        })));
  });
function zt(e) {
  let t = (0, Ut.c)(4);
  if (e.showOpenButton === !1) {
    let n;
    return (t[0] === e ? (n = t[1]) : ((n = (0, $.jsx)(Vt, { ...e })), (t[0] = e), (t[1] = n)), n);
  }
  let n;
  return (
    t[2] === e
      ? (n = t[3])
      : ((n = (0, $.jsxs)($.Fragment, {
          children: [(0, $.jsx)($.Fragment, { children: (0, $.jsx)(Bt, { ...e }) }), null],
        })),
        (t[2] = e),
        (t[3] = n)),
    n
  );
}
function Bt(e) {
  let t = (0, Ut.c)(25),
    r = n(V),
    i = f(I.activeTab$),
    a = f(Ze),
    o = f(J),
    s = (0, Wt.useId)(),
    c = e.turnId ?? s,
    u = w(qe, `${f(l)}:${e.conversationId}:${c}`),
    d = ee(),
    p;
  t[0] === d
    ? (p = t[1])
    : ((p = d.formatMessage({
        id: `localConversation.planSummary.title`,
        defaultMessage: `Plan`,
        description: `Title for the plan summary card header`,
      })),
      (t[0] = d),
      (t[1] = p));
  let m = p,
    h;
  t[2] !== u ||
  t[3] !== c ||
  t[4] !== e.conversationId ||
  t[5] !== e.cwd ||
  t[6] !== e.hideCodeBlocks ||
  t[7] !== e.item.content ||
  t[8] !== e.turnId ||
  t[9] !== r ||
  t[10] !== m
    ? ((h = () => {
        Qe(r, {
          content: u ?? e.item.content,
          conversationId: e.conversationId,
          cwd: e.cwd,
          hideCodeBlocks: e.hideCodeBlocks,
          key: c,
          planKey: e.turnId,
          title: m,
        });
      }),
      (t[2] = u),
      (t[3] = c),
      (t[4] = e.conversationId),
      (t[5] = e.cwd),
      (t[6] = e.hideCodeBlocks),
      (t[7] = e.item.content),
      (t[8] = e.turnId),
      (t[9] = r),
      (t[10] = m),
      (t[11] = h))
    : (h = t[11]);
  let g = h,
    _ = e.item.completed && o && a?.key === c && i?.tabId === a.tabId,
    v;
  t[12] !== i || t[13] !== _ || t[14] !== g || t[15] !== r
    ? ((v = () => {
        if (_ && i != null) {
          I.closeTab(r, i.tabId);
          return;
        }
        g();
      }),
      (t[12] = i),
      (t[13] = _),
      (t[14] = g),
      (t[15] = r),
      (t[16] = v))
    : (v = t[16]);
  let y = v,
    b;
  t[17] !== u || t[18] !== e.item
    ? ((b = u == null ? e.item : { ...e.item, content: u }),
      (t[17] = u),
      (t[18] = e.item),
      (t[19] = b))
    : (b = t[19]);
  let x = e.item.completed ? y : void 0,
    S;
  return (
    t[20] !== _ || t[21] !== e || t[22] !== b || t[23] !== x
      ? ((S = (0, $.jsx)(Vt, {
          ...e,
          item: b,
          isThreadPreview: !0,
          isThreadPreviewCollapsed: _,
          onOpenInSidePanel: x,
        })),
        (t[20] = _),
        (t[21] = e),
        (t[22] = b),
        (t[23] = x),
        (t[24] = S))
      : (S = t[24]),
    S
  );
}
function Vt(e) {
  let t = (0, Ut.c)(106),
    {
      item: n,
      conversationId: r,
      cwd: a,
      hideCodeBlocks: s,
      defaultCollapsed: c,
      hasArtifacts: p,
      reportEntityType: m,
      showOpenButton: h,
      turnId: g,
      isThreadPreview: _,
      isThreadPreviewCollapsed: v,
      onOpenInSidePanel: b,
    } = e,
    x = s !== void 0 && s,
    S = c !== void 0 && c,
    C = p !== void 0 && p,
    w = m === void 0 ? `thread` : m,
    T = h === void 0 || h,
    E = _ !== void 0 && _,
    D = v !== void 0 && v,
    [k, A] = (0, Wt.useState)(S),
    j = f(l),
    M = ee(),
    N = f(Te),
    te = f($e);
  T && n.completed;
  let F;
  t[0] !== n.completed || t[1] !== n.content
    ? ((F = n.completed && n.content.trim().length > 0),
      (t[0] = n.completed),
      (t[1] = n.content),
      (t[2] = F))
    : (F = t[2]);
  let ne = F,
    I;
  t[3] !== n.completed || t[4] !== n.content
    ? ((I = n.completed && n.content.trim().length > 0),
      (t[3] = n.completed),
      (t[4] = n.content),
      (t[5] = I))
    : (I = t[5]);
  let re = I,
    ie = ne && !0,
    ae = re && !0,
    oe = te && g != null && N.submitCodexAnalyticsEvent != null && !0,
    se;
  t[6] === M
    ? (se = t[7])
    : ((se = M.formatMessage({
        id: `localConversation.planSummary.download`,
        defaultMessage: `Download plan`,
        description: `Tooltip text for button that downloads the plan markdown`,
      })),
      (t[6] = M),
      (t[7] = se));
  let ce = se,
    le;
  t[8] === M
    ? (le = t[9])
    : ((le = M.formatMessage({
        id: `localConversation.planSummary.openInSidePanel`,
        defaultMessage: `Open plan in side panel`,
        description: `Tooltip text for button that opens the plan in the side panel`,
      })),
      (t[8] = M),
      (t[9] = le));
  let ue = le,
    de;
  t[10] === M
    ? (de = t[11])
    : ((de = M.formatMessage({
        id: `localConversation.planSummary.closeSidePanel`,
        defaultMessage: `Close plan side panel`,
        description: `Accessible label for the collapsed plan card that closes the plan side panel`,
      })),
      (t[10] = M),
      (t[11] = de));
  let fe = de,
    pe;
  t[12] !== M || t[13] !== k
    ? ((pe = k
        ? M.formatMessage({
            id: `localConversation.planSummary.expand`,
            defaultMessage: `Expand plan summary`,
            description: `Aria label for button that expands a collapsed plan summary`,
          })
        : M.formatMessage({
            id: `localConversation.planSummary.collapse`,
            defaultMessage: `Collapse plan summary`,
            description: `Aria label for button that collapses the plan summary content`,
          })),
      (t[12] = M),
      (t[13] = k),
      (t[14] = pe))
    : (pe = t[14]);
  let me = pe,
    he;
  t[15] === n.content
    ? (he = t[16])
    : ((he = () => {
        let e = new Blob([n.content], { type: `text/markdown;charset=utf-8` }),
          t = URL.createObjectURL(e),
          r = document.createElement(`a`);
        ((r.href = t), (r.download = Kt), r.click(), URL.revokeObjectURL(t));
      }),
      (t[15] = n.content),
      (t[16] = he));
  let ge = he,
    _e;
  t[17] !== r || t[18] !== n.content || t[19] !== N || t[20] !== g
    ? ((_e = (e) => {
        (g != null &&
          N.submitCodexAnalyticsEvent?.({
            action: `copy`,
            eventKind: `action`,
            metadata: { surface: `plan_summary` },
            threadId: r,
            turnId: g,
          }),
          ke(n.content, e));
      }),
      (t[17] = r),
      (t[18] = n.content),
      (t[19] = N),
      (t[20] = g),
      (t[21] = _e))
    : (_e = t[21]);
  let L = _e,
    R = E
      ? `max-h-[200px] cursor-default border border-default !bg-surface-elevated-secondary/50 select-none extension:!bg-background-primary-soft/50`
      : void 0,
    z;
  t[22] !== E || t[23] !== D || t[24] !== b
    ? ((z =
        E && !D && b != null
          ? (0, $.jsx)(`button`, {
              type: `button`,
              "aria-hidden": !0,
              tabIndex: -1,
              className: `absolute inset-0 z-10 cursor-interaction`,
              onClick: b,
            })
          : null),
      (t[22] = E),
      (t[23] = D),
      (t[24] = b),
      (t[25] = z))
    : (z = t[25]);
  let B;
  t[26] !== fe || t[27] !== D || t[28] !== b
    ? ((B =
        D && b != null
          ? (0, $.jsx)(`button`, {
              type: `button`,
              "aria-label": fe,
              className: `absolute inset-0 z-10 flex cursor-interaction items-center justify-end px-3 text-tertiary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
              onClick: b,
              children: (0, $.jsx)(`span`, {
                className: `flex size-6 items-center justify-center rounded-full hover:bg-primary-ghost-hover electron:rounded-md`,
                children: (0, $.jsx)(Lt, { className: `icon-sm`, "aria-hidden": !0 }),
              }),
            })
          : null),
      (t[26] = fe),
      (t[27] = D),
      (t[28] = b),
      (t[29] = B))
    : (B = t[29]);
  let V = E
      ? `inline-flex items-center gap-2 font-normal text-tertiary`
      : `font-semibold text-default`,
    H;
  t[30] === V ? (H = t[31]) : ((H = P(`text-base leading-tight`, V)), (t[30] = V), (t[31] = H));
  let U;
  t[32] === E
    ? (U = t[33])
    : ((U = E ? (0, $.jsx)(ye, { className: `shrink-0`, asset: o }) : null),
      (t[32] = E),
      (t[33] = U));
  let W;
  t[34] === n.completed
    ? (W = t[35])
    : ((W = n.completed
        ? (0, $.jsx)(u, {
            id: `localConversation.planSummary.title`,
            defaultMessage: `Plan`,
            description: `Title for the plan summary card header`,
          })
        : (0, $.jsx)(O, {
            children: (0, $.jsx)(u, {
              id: `localConversation.planSummary.titleWriting`,
              defaultMessage: `Writing plan`,
              description: `Title for the plan summary card header while the plan is still being written`,
            }),
          })),
      (t[34] = n.completed),
      (t[35] = W));
  let K;
  t[36] !== H || t[37] !== U || t[38] !== W
    ? ((K = (0, $.jsxs)(`span`, { className: H, children: [U, W] })),
      (t[36] = H),
      (t[37] = U),
      (t[38] = W),
      (t[39] = K))
    : (K = t[39]);
  let q = D && `hidden`,
    J;
  t[40] === q
    ? (J = t[41])
    : ((J = P(`relative z-20 flex items-center gap-1`, q)), (t[40] = q), (t[41] = J));
  let xe;
  t[42] !== ce || t[43] !== ge || t[44] !== ae
    ? ((xe = ae
        ? (0, $.jsx)(y, {
            tooltipContent: ce,
            children: (0, $.jsx)(G, {
              color: `ghost`,
              size: `icon`,
              "aria-label": ce,
              onClick: ge,
              children: (0, $.jsx)(Fe, { className: `icon-2xs` }),
            }),
          })
        : null),
      (t[42] = ce),
      (t[43] = ge),
      (t[44] = ae),
      (t[45] = xe))
    : (xe = t[45]);
  let Se;
  t[46] !== L || t[47] !== ie
    ? ((Se = ie ? (0, $.jsx)(be, { iconOnly: !0, iconClassName: `icon-2xs`, onCopy: L }) : null),
      (t[46] = L),
      (t[47] = ie),
      (t[48] = Se))
    : (Se = t[48]);
  let Ce;
  t[49] !== r || t[50] !== C || t[51] !== w || t[52] !== oe || t[53] !== g
    ? ((Ce = oe
        ? (0, $.jsx)(Tt, { hasArtifacts: C, reportEntityType: w, threadId: r, turnId: g })
        : null),
      (t[49] = r),
      (t[50] = C),
      (t[51] = w),
      (t[52] = oe),
      (t[53] = g),
      (t[54] = Ce))
    : (Ce = t[54]);
  let we;
  t[55] !== b || t[56] !== ue
    ? ((we =
        b == null
          ? null
          : (0, $.jsx)(y, {
              tooltipContent: ue,
              children: (0, $.jsx)(G, {
                color: `ghost`,
                size: `icon`,
                "aria-label": ue,
                onClick: b,
                children: (0, $.jsx)(i, { className: `icon-2xs` }),
              }),
            })),
      (t[55] = b),
      (t[56] = ue),
      (t[57] = we))
    : (we = t[57]);
  let Ee;
  t[58] !== me || t[59] !== k || t[60] !== E
    ? ((Ee = E
        ? null
        : (0, $.jsx)(y, {
            tooltipContent: k
              ? (0, $.jsx)(u, {
                  id: `localConversation.planSummary.expandTooltip`,
                  defaultMessage: `Expand`,
                  description: `Tooltip text for button that expands a collapsed plan summary`,
                })
              : (0, $.jsx)(u, {
                  id: `localConversation.planSummary.collapseTooltip`,
                  defaultMessage: `Collapse`,
                  description: `Tooltip text for button that collapses the plan summary content`,
                }),
            children: (0, $.jsx)(G, {
              color: `ghost`,
              size: `icon`,
              "aria-label": me,
              onClick: () => {
                A(Ht);
              },
              children: (0, $.jsx)(Re, {
                className: P(`icon-2xs transition-transform`, k ? `rotate-180` : `rotate-0`),
              }),
            }),
          })),
      (t[58] = me),
      (t[59] = k),
      (t[60] = E),
      (t[61] = Ee))
    : (Ee = t[61]);
  let De;
  t[62] !== D ||
  t[63] !== J ||
  t[64] !== null ||
  t[65] !== xe ||
  t[66] !== Se ||
  t[67] !== Ce ||
  t[68] !== we ||
  t[69] !== Ee
    ? ((De = (0, $.jsxs)(`div`, {
        "aria-hidden": D,
        className: J,
        children: [null, xe, Se, Ce, we, Ee],
      })),
      (t[62] = D),
      (t[63] = J),
      (t[64] = null),
      (t[65] = xe),
      (t[66] = Se),
      (t[67] = Ce),
      (t[68] = we),
      (t[69] = Ee),
      (t[70] = De))
    : (De = t[70]);
  let Oe;
  t[71] !== B || t[72] !== K || t[73] !== De
    ? ((Oe = (0, $.jsxs)(`div`, {
        className: `relative flex h-10 flex-wrap items-center justify-between gap-2 px-3 py-2`,
        children: [B, K, De],
      })),
      (t[71] = B),
      (t[72] = K),
      (t[73] = De),
      (t[74] = Oe))
    : (Oe = t[74]);
  let Ae;
  t[75] === r ? (Ae = t[76]) : ((Ae = { [Ye]: r }), (t[75] = r), (t[76] = Ae));
  let je = D || void 0,
    Me = E && !D && `[mask-image:linear-gradient(to_bottom,black_calc(100%_-_4rem),transparent)]`,
    Ne;
  t[77] === Me
    ? (Ne = t[78])
    : ((Ne = P(`relative overflow-hidden`, Me)), (t[77] = Me), (t[78] = Ne));
  let Pe = D || void 0,
    Ie;
  t[79] !== k || t[80] !== E || t[81] !== D
    ? ((Ie = E
        ? { maxHeight: D ? 0 : 160, opacity: +!D }
        : {
            height: k ? Gt : `auto`,
            ...(k ? { overflow: `hidden` } : { transitionEnd: { overflow: `visible` } }),
          }),
      (t[79] = k),
      (t[80] = E),
      (t[81] = D),
      (t[82] = Ie))
    : (Ie = t[82]);
  let Le = !n.completed,
    ze;
  t[83] !== r || t[84] !== a || t[85] !== x || t[86] !== j || t[87] !== n.content || t[88] !== Le
    ? ((ze = (0, $.jsx)(rt, {
        markdown: n.content,
        conversationId: r,
        hostId: j,
        hideCodeBlocks: x,
        isStreaming: Le,
        cwd: a,
      })),
      (t[83] = r),
      (t[84] = a),
      (t[85] = x),
      (t[86] = j),
      (t[87] = n.content),
      (t[88] = Le),
      (t[89] = ze))
    : (ze = t[89]);
  let Be;
  t[90] !== k || t[91] !== E
    ? ((Be =
        !E && k
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(`div`, {
                  className: `pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background-primary-soft to-transparent`,
                }),
                (0, $.jsx)(`div`, {
                  className: `pointer-events-none absolute inset-x-0 bottom-3 flex justify-center`,
                  children: (0, $.jsx)(G, {
                    className: `pointer-events-auto`,
                    color: `primary`,
                    onClick: () => {
                      A(!1);
                    },
                    children: (0, $.jsx)(u, {
                      id: `localConversation.planSummary.viewPlan`,
                      defaultMessage: `Expand plan`,
                      description: `Button label to expand a collapsed plan summary`,
                    }),
                  }),
                }),
              ],
            })
          : null),
      (t[90] = k),
      (t[91] = E),
      (t[92] = Be))
    : (Be = t[92]);
  let Ve;
  t[93] !== Ae ||
  t[94] !== je ||
  t[95] !== Ne ||
  t[96] !== Pe ||
  t[97] !== Ie ||
  t[98] !== ze ||
  t[99] !== Be
    ? ((Ve = (0, $.jsxs)(d.div, {
        ...Ae,
        "aria-hidden": je,
        className: Ne,
        inert: Pe,
        initial: !1,
        animate: Ie,
        transition: ve,
        children: [ze, Be],
      })),
      (t[93] = Ae),
      (t[94] = je),
      (t[95] = Ne),
      (t[96] = Pe),
      (t[97] = Ie),
      (t[98] = ze),
      (t[99] = Be),
      (t[100] = Ve))
    : (Ve = t[100]);
  let He;
  return (
    t[101] !== R || t[102] !== z || t[103] !== Oe || t[104] !== Ve
      ? ((He = (0, $.jsxs)(nt, { className: R, children: [z, Oe, Ve] })),
        (t[101] = R),
        (t[102] = z),
        (t[103] = Oe),
        (t[104] = Ve),
        (t[105] = He))
      : (He = t[105]),
    He
  );
}
function Ht(e) {
  return !e;
}
var Ut,
  Wt,
  $,
  Gt,
  Kt,
  qt = e(() => {
    ((Ut = K()),
      q(),
      Ke(),
      De(),
      E(),
      (Wt = t(a(), 1)),
      ne(),
      F(),
      Le(),
      r(),
      C(),
      B(),
      g(),
      et(),
      We(),
      Rt(),
      we(),
      W(),
      tt(),
      A(),
      He(),
      pe(),
      Se(),
      xe(),
      Xe(),
      Je(),
      m(),
      Ft(),
      ($ = H()),
      (Gt = 320),
      (Kt = `PLAN.md`));
  });
export { ut as a, lt as c, Ft as i, qt as n, wt as o, Tt as r, ot as s, zt as t };
//# sourceMappingURL=plan-summary-item-content-88eb5c2fafb8.js.map
