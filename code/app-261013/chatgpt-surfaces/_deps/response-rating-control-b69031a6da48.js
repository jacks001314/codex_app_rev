import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $q as n,
  ADt as r,
  AO as i,
  CO as a,
  CS as o,
  Dz as s,
  IDt as c,
  TJ as l,
  TO as u,
  VDt as d,
  _E as f,
  aJ as p,
  cz as m,
  eJ as h,
  iJ as g,
  jDt as _,
  jH as v,
  kz as y,
  nJ as b,
  oJ as ee,
  sz as x,
  t3 as S,
  vzt as C,
  xMt as w,
  yzt as T,
} from "./app-shared-bbfeca5e5737.js";
import { n as E, t as te } from "./thumb-mixed-c27b55f26fe7.js";
function D(e) {
  let r = (0, k.c)(95),
    {
      disabled: i,
      hideUnselectedRating: o,
      isAnimated: l,
      menuItems: m,
      rating: _,
      onRate: v,
      shouldRestoreFocus: y,
      variant: S,
    } = e,
    C = i !== void 0 && i,
    w = o !== void 0 && o,
    T = l !== void 0 && l,
    E = S === void 0 ? `response` : S,
    D = d(),
    N = (0, A.useRef)(null),
    P = (0, A.useRef)(null),
    F = (0, A.useRef)(!1),
    I;
  r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = () => {
        F.current &&= ((P.current ?? N.current)?.focus(), !1);
      }),
      (r[0] = I))
    : (I = r[0]);
  let L;
  (r[1] === _ ? (L = r[2]) : ((L = [_]), (r[1] = _), (r[2] = L)), (0, A.useLayoutEffect)(I, L));
  let R;
  r[3] !== v || r[4] !== _ || r[5] !== y
    ? ((R = (e) => {
        ((F.current = y?.(_ === e ? null : e) ?? !0), v(e));
      }),
      (r[3] = v),
      (r[4] = _),
      (r[5] = y),
      (r[6] = R))
    : (R = r[6]);
  let z = R;
  if (E === `imageTurn` || E === `imageOverlay`) {
    let e = E === `imageOverlay` ? `mediaOverlay` : `secondary`,
      i = E === `imageOverlay` ? `mediaOverlay` : `ghost`,
      a;
    r[7] !== D || r[8] !== T
      ? ((a = T ? D.formatMessage(M.likeGif) : D.formatMessage(M.likeImage)),
        (r[7] = D),
        (r[8] = T),
        (r[9] = a))
      : (a = r[9]);
    let o = a,
      s;
    r[10] !== D || r[11] !== T
      ? ((s = T ? D.formatMessage(M.dislikeGif) : D.formatMessage(M.dislikeImage)),
        (r[10] = D),
        (r[11] = T),
        (r[12] = s))
      : (s = r[12]);
    let c = s,
      l;
    r[13] !== C || r[14] !== o || r[15] !== z || r[16] !== _ || r[17] !== e || r[18] !== i || r[19] !== E
      ? ((l =
          _ === `thumbsDown`
            ? null
            : (0, j.jsx)(x, {
                tooltipContent: o,
                children: (0, j.jsx)(t, {
                  ref: N,
                  "aria-label": o,
                  "aria-pressed": _ === `thumbsUp`,
                  color: _ === `thumbsUp` ? e : i,
                  disabled: C || _ === `thumbsUp`,
                  size: E === `imageOverlay` ? `inputIcon` : `icon`,
                  radius: E === `imageOverlay` ? `full` : `default`,
                  onClick: (e) => {
                    (E === `imageOverlay` && e.stopPropagation(), z(`thumbsUp`));
                  },
                  children: _ === `thumbsUp` ? (0, j.jsx)(g, {}) : (0, j.jsx)(b, {}),
                }),
              })),
        (r[13] = C),
        (r[14] = o),
        (r[15] = z),
        (r[16] = _),
        (r[17] = e),
        (r[18] = i),
        (r[19] = E),
        (r[20] = l))
      : (l = r[20]);
    let u;
    r[21] !== C || r[22] !== c || r[23] !== z || r[24] !== _ || r[25] !== e || r[26] !== i || r[27] !== E
      ? ((u =
          _ === `thumbsUp`
            ? null
            : (0, j.jsx)(x, {
                tooltipContent: c,
                children: (0, j.jsx)(t, {
                  ref: N,
                  "aria-label": c,
                  "aria-pressed": _ === `thumbsDown`,
                  color: _ === `thumbsDown` ? e : i,
                  disabled: C || _ === `thumbsDown`,
                  size: E === `imageOverlay` ? `inputIcon` : `icon`,
                  radius: E === `imageOverlay` ? `full` : `default`,
                  onClick: (e) => {
                    (E === `imageOverlay` && e.stopPropagation(), z(`thumbsDown`));
                  },
                  children: _ === `thumbsDown` ? (0, j.jsx)(h, {}) : (0, j.jsx)(n, {}),
                }),
              })),
        (r[21] = C),
        (r[22] = c),
        (r[23] = z),
        (r[24] = _),
        (r[25] = e),
        (r[26] = i),
        (r[27] = E),
        (r[28] = u))
      : (u = r[28]);
    let d;
    return (
      r[29] !== l || r[30] !== u
        ? ((d = (0, j.jsxs)(j.Fragment, { children: [l, u] })), (r[29] = l), (r[30] = u), (r[31] = d))
        : (d = r[31]),
      d
    );
  }
  if (E === `imageViewerMenu` || E === `imageViewerSubmenu`) {
    let e;
    r[32] !== w || r[33] !== T || r[34] !== z || r[35] !== _
      ? ((e =
          !w || _ !== `thumbsDown`
            ? (0, j.jsx)(u.Item, {
                leftIcon: _ === `thumbsUp` ? (0, j.jsx)(g, {}) : (0, j.jsx)(b, {}),
                onSelect: () => z(`thumbsUp`),
                children: T ? (0, j.jsx)(c, { ...M.likeGif }) : (0, j.jsx)(c, { ...M.likeImage }),
              })
            : null),
        (r[32] = w),
        (r[33] = T),
        (r[34] = z),
        (r[35] = _),
        (r[36] = e))
      : (e = r[36]);
    let t;
    r[37] !== w || r[38] !== T || r[39] !== z || r[40] !== _
      ? ((t =
          !w || _ !== `thumbsUp`
            ? (0, j.jsx)(u.Item, {
                leftIcon: _ === `thumbsDown` ? (0, j.jsx)(h, {}) : (0, j.jsx)(n, {}),
                onSelect: () => z(`thumbsDown`),
                children: T ? (0, j.jsx)(c, { ...M.dislikeGif }) : (0, j.jsx)(c, { ...M.dislikeImage }),
              })
            : null),
        (r[37] = w),
        (r[38] = T),
        (r[39] = z),
        (r[40] = _),
        (r[41] = t))
      : (t = r[41]);
    let i;
    r[42] !== e || r[43] !== t
      ? ((i = (0, j.jsxs)(j.Fragment, { children: [e, t] })), (r[42] = e), (r[43] = t), (r[44] = i))
      : (i = r[44]);
    let a = i;
    if (E === `imageViewerSubmenu`) {
      let e;
      r[45] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, j.jsx)(c, { ...M.imageFeedback })), (r[45] = e))
        : (e = r[45]);
      let t;
      r[46] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, j.jsx)(s, { icon: { 16: p, 20: ee } })), (r[46] = t))
        : (t = r[46]);
      let n;
      return (
        r[47] !== C || r[48] !== a
          ? ((n = (0, j.jsx)(f, { ref: P, disabled: C, label: e, leftIcon: t, children: a })),
            (r[47] = C),
            (r[48] = a),
            (r[49] = n))
          : (n = r[49]),
        n
      );
    }
    let o;
    return (
      r[50] !== C || r[51] !== a || r[52] !== m
        ? ((o = (0, j.jsxs)(O, { triggerRef: N, disabled: C, children: [m, a] })),
          (r[50] = C),
          (r[51] = a),
          (r[52] = m),
          (r[53] = o))
        : (o = r[53]),
      o
    );
  }
  if (_ != null) {
    let e = _ === `thumbsUp`,
      n = e ? g : h,
      i;
    r[54] !== D || r[55] !== e
      ? ((i = D.formatMessage(e ? M.removeGoodResponse : M.removeBadResponse)),
        (r[54] = D),
        (r[55] = e),
        (r[56] = i))
      : (i = r[56]);
    let a = i,
      o;
    r[57] !== z || r[58] !== _ ? ((o = () => z(_)), (r[57] = z), (r[58] = _), (r[59] = o)) : (o = r[59]);
    let s;
    r[60] === n ? (s = r[61]) : ((s = (0, j.jsx)(n, {})), (r[60] = n), (r[61] = s));
    let c;
    r[62] !== C || r[63] !== a || r[64] !== s || r[65] !== o
      ? ((c = (0, j.jsx)(t, {
          ref: N,
          type: `button`,
          "aria-label": a,
          "aria-pressed": !0,
          color: `ghost`,
          disabled: C,
          size: `icon`,
          onClick: o,
          children: s,
        })),
        (r[62] = C),
        (r[63] = a),
        (r[64] = s),
        (r[65] = o),
        (r[66] = c))
      : (c = r[66]);
    let l;
    return (
      r[67] !== a || r[68] !== c
        ? ((l = (0, j.jsx)(x, { tooltipContent: a, children: c })), (r[67] = a), (r[68] = c), (r[69] = l))
        : (l = r[69]),
      l
    );
  }
  let B;
  r[70] === D ? (B = r[71]) : ((B = D.formatMessage(M.feedback)), (r[70] = D), (r[71] = B));
  let V = B,
    H;
  r[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, j.jsx)(te, { className: `icon-xs` })), (r[72] = H))
    : (H = r[72]);
  let U;
  r[73] === V
    ? (U = r[74])
    : ((U = (0, j.jsx)(t, { ref: N, "aria-label": V, color: `ghost`, size: `icon`, children: H })),
      (r[73] = V),
      (r[74] = U));
  let W;
  r[75] !== V || r[76] !== U
    ? ((W = (0, j.jsx)(x, { tooltipContent: V, children: U })), (r[75] = V), (r[76] = U), (r[77] = W))
    : (W = r[77]);
  let G;
  r[78] === Symbol.for(`react.memo_cache_sentinel`) ? ((G = (0, j.jsx)(b, {})), (r[78] = G)) : (G = r[78]);
  let K;
  r[79] === z ? (K = r[80]) : ((K = () => z(`thumbsUp`)), (r[79] = z), (r[80] = K));
  let q;
  r[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, j.jsx)(c, { ...M.goodResponse })), (r[81] = q))
    : (q = r[81]);
  let J;
  r[82] === K
    ? (J = r[83])
    : ((J = (0, j.jsx)(u.Item, { leftIcon: G, onSelect: K, children: q })), (r[82] = K), (r[83] = J));
  let Y;
  r[84] === Symbol.for(`react.memo_cache_sentinel`) ? ((Y = (0, j.jsx)(n, {})), (r[84] = Y)) : (Y = r[84]);
  let X;
  r[85] === z ? (X = r[86]) : ((X = () => z(`thumbsDown`)), (r[85] = z), (r[86] = X));
  let Z;
  r[87] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (0, j.jsx)(c, { ...M.badResponse })), (r[87] = Z))
    : (Z = r[87]);
  let Q;
  r[88] === X
    ? (Q = r[89])
    : ((Q = (0, j.jsx)(u.Item, { leftIcon: Y, onSelect: X, children: Z })), (r[88] = X), (r[89] = Q));
  let $;
  return (
    r[90] !== C || r[91] !== W || r[92] !== J || r[93] !== Q
      ? (($ = (0, j.jsxs)(a, { disabled: C, side: `top`, triggerButton: W, children: [J, Q] })),
        (r[90] = C),
        (r[91] = W),
        (r[92] = J),
        (r[93] = Q),
        (r[94] = $))
      : ($ = r[94]),
    $
  );
}
function O(e) {
  let n = (0, k.c)(14),
    { children: r, disabled: i, triggerRef: o } = e,
    s = i !== void 0 && i,
    c = d(),
    l;
  n[0] === c ? (l = n[1]) : ((l = c.formatMessage(M.imageMenu)), (n[0] = c), (n[1] = l));
  let u = l,
    f;
  n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = (0, j.jsx)(v, {})), (n[2] = f)) : (f = n[2]);
  let p;
  n[3] !== s || n[4] !== u || n[5] !== o
    ? ((p = (0, j.jsx)(t, {
        ref: o,
        "aria-label": u,
        color: `ghost`,
        disabled: s,
        size: `toolbar`,
        uniform: !0,
        children: f,
      })),
      (n[3] = s),
      (n[4] = u),
      (n[5] = o),
      (n[6] = p))
    : (p = n[6]);
  let m;
  n[7] !== u || n[8] !== p
    ? ((m = (0, j.jsx)(x, { tooltipContent: u, children: p })), (n[7] = u), (n[8] = p), (n[9] = m))
    : (m = n[9]);
  let h;
  return (
    n[10] !== r || n[11] !== s || n[12] !== m
      ? ((h = (0, j.jsx)(a, { disabled: s, align: `end`, side: `bottom`, triggerButton: m, children: r })),
        (n[10] = r),
        (n[11] = s),
        (n[12] = m),
        (n[13] = h))
      : (h = n[13]),
    h
  );
}
var k, A, j, M;
function N() {
  return (N = e(() => {
    ((k = C()),
      (A = T()),
      _(),
      S(),
      i(),
      l(),
      y(),
      m(),
      E(),
      o(),
      (j = w()),
      (M = r({
        imageFeedback: {
          id: `imageSidePanel.feedback`,
          defaultMessage: `Feedback`,
          description: `Submenu in the generated-image title menu that contains Like this image and Dislike this image feedback actions.`,
        },
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
        likeGif: {
          id: `imageSidePanel.likeGif`,
          defaultMessage: `Like this GIF`,
          description: `Short tooltip, accessible button label, or viewer menu item for a generated animated GIF in a ChatGPT conversation. Selecting it submits positive feedback for the GIF. In the viewer menu, selecting it again removes the existing positive rating.`,
        },
        dislikeGif: {
          id: `imageSidePanel.dislikeGif`,
          defaultMessage: `Dislike this GIF`,
          description: `Short tooltip, accessible button label, or viewer menu item for a generated animated GIF in a ChatGPT conversation. Selecting it submits negative feedback for the GIF and opens a form for more detail. In the viewer menu, selecting it again removes the existing negative rating.`,
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
  }))();
}
export { D as n, N as r, O as t };
//# sourceMappingURL=response-rating-control-b69031a6da48.js.map
