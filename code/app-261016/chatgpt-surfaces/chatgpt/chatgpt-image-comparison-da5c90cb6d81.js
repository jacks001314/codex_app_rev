import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  Bkt as i,
  DB as ee,
  FBt as a,
  Hkt as te,
  LNt as o,
  MNt as ne,
  NNt as s,
  OB as c,
  PBt as l,
  Qst as re,
  TY as u,
  Ukt as ie,
  Wkt as d,
  XOt as f,
  Y3 as ae,
  Z3 as p,
  ZSt as m,
  eV as oe,
  iCt as se,
  iFt as h,
  mu as g,
  nB as ce,
  nCt as _,
  okt as le,
  pu as ue,
  rB as v,
  yCt as y,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CMr as de,
  FZn as b,
  IZn as x,
  QCr as fe,
  TYn as pe,
  VPn as S,
  WCr as C,
  aon as w,
  eon as me,
  ewr as T,
  ion as he,
  jcn as ge,
  n0n as E,
  non as _e,
  ron as D,
  rwr as O,
  ton as ve,
  wcn as k,
  xYn as A,
  yMr as j,
} from "./app-initial-ad16eaadf81f.js";
import { a as M, i as N } from "./chatgpt_conversation_image-ea0e433caffc.js";
var P, F;
function I() {
  return (I = e(() => {
    ((P = t(h(), 1)),
      m(),
      fe(),
      x(),
      r(),
      S(),
      (F = y(
        re,
        ({ conversationId: e, messageId: t }, { get: n }) => {
          let r = n(E, e),
            i = O(r?.[t]?.message?.metadata?.comparison_source_asset_pointer);
          if (r == null || i == null) return null;
          let ee = C({ mapping: r, current_node: t });
          for (let e of ee) {
            if (e.id === t || T(e)) continue;
            let n = b(e).find((e) => e.src === i);
            if (n != null) return n;
          }
          return null;
        },
        { isEqual: P.default },
      )));
  }))();
}
function ye(e) {
  let t = (0, Ce.c)(45),
    {
      children: r,
      conversationId: a,
      image: o,
      imageNumber: s,
      isComparing: c,
      position: l,
      onToggle: u,
      onPositionChange: d,
    } = e,
    f = n(re),
    p = le(),
    { data: m } = ge(),
    h = m == null || m.plan_type === `free` || m.plan_type === `free_workspace`,
    g = o.chatGptMessageId ?? o.id,
    v;
  t[0] !== a || t[1] !== g
    ? ((v = { conversationId: a, messageId: g }), (t[0] = a), (t[1] = g), (t[2] = v))
    : (v = t[2]);
  let y = _(F, v),
    b = _(ve, a),
    x = se(he),
    fe = _(me, a),
    S = b ?? void 0,
    C = fe?.imageLoading,
    w;
  t[3] !== S || t[4] !== C || t[5] !== x
    ? ((w = _e(S, void 0, x, void 0, C)), (t[3] = S), (t[4] = C), (t[5] = x), (t[6] = w))
    : (w = t[6]);
  let T = w,
    E = y != null && y.src !== o.src && b != null,
    D = h ? (y?.watermarkedSrc ?? y?.src) : y?.src,
    O = h ? (o.watermarkedSrc ?? o.src) : o.src,
    k = pe(c && E ? (D ?? ``) : ``, T),
    A = pe(c && E ? (O ?? ``) : ``, T),
    [j, M] = (0, L.useState)(),
    [P, I] = (0, L.useState)(),
    [ye, z] = (0, L.useState)(!1),
    B = E && !ye && !k.isError && !A.isError && k.deleted == null && A.deleted == null,
    V = B && c && k.src != null && A.src != null && j === k.src && P === A.src,
    H,
    U;
  (t[7] !== V || t[8] !== f
    ? ((H = () => {
        V && f.get(de).trackCounter(N.CHATGPT_IMAGE_COMPARISON_SHOWN);
      }),
      (U = [V, f]),
      (t[7] = V),
      (t[8] = f),
      (t[9] = H),
      (t[10] = U))
    : ((H = t[9]), (U = t[10])),
    (0, L.useEffect)(H, U));
  let W;
  t[11] === p
    ? (W = t[12])
    : ((W = p.formatMessage({
        id: `imageGenActionOverlay.compareImages`,
        defaultMessage: `Compare images`,
        description: `Accessible label and tooltip for a button that toggles inline image-generation comparison. The reference is the attached image or the single generated image in the preceding response. The button shows or hides a slider comparing it with each new generated result.`,
      })),
      (t[11] = p),
      (t[12] = W));
  let G = W,
    K = V && `pb-14`,
    q;
  t[13] === K ? (q = t[14]) : ((q = ne(`relative`, K)), (t[13] = K), (t[14] = q));
  let J;
  t[15] !== r || t[16] !== V
    ? ((J = (0, R.jsx)(`div`, { inert: V, children: r })), (t[15] = r), (t[16] = V), (t[17] = J))
    : (J = t[17]);
  let Y;
  t[18] !== B ||
  t[19] !== V ||
  t[20] !== p ||
  t[21] !== c ||
  t[22] !== d ||
  t[23] !== A ||
  t[24] !== l ||
  t[25] !== f ||
  t[26] !== k
    ? ((Y =
        B && c && k.src != null && A.src != null
          ? (0, R.jsxs)(i, {
              className: ne(`absolute inset-0 touch-none select-none`, !V && `invisible`),
              dir: `ltr`,
              min: 0,
              max: 100,
              step: 1,
              value: [l],
              disabled: !V,
              onPointerDown: Se,
              onClick: xe,
              onKeyDown: be,
              onValueChange: (e) => {
                let [t] = e;
                t != null && d(t);
              },
              onValueCommit: () => {
                f.get(de).trackCounter(N.CHATGPT_IMAGE_COMPARISON_SLIDER_USED);
              },
              children: [
                (0, R.jsxs)(`div`, {
                  className: `relative size-full overflow-hidden rounded-lg bg-surface`,
                  children: [
                    (0, R.jsx)(`img`, {
                      className: `absolute inset-0 size-full object-contain`,
                      src: k.src,
                      alt: p.formatMessage({
                        id: `imageGenParagen.comparison.referenceImage`,
                        defaultMessage: `Reference image`,
                        description: `Accessible description of the attached image or the single generated image in the preceding response, shown on the left in an inline image-generation comparison while choosing between two generated results.`,
                      }),
                      draggable: !1,
                      style: { clipPath: `inset(0 ${100 - l}% 0 0)` },
                      onLoad: () => M(k.src ?? void 0),
                      onError: k.onImageError ?? (() => z(!0)),
                    }),
                    (0, R.jsx)(`img`, {
                      className: `absolute inset-0 size-full object-contain`,
                      src: A.src,
                      alt: p.formatMessage({
                        id: `imageGenParagen.comparison.outputImage`,
                        defaultMessage: `Output image`,
                        description: `Accessible description of the generated result, shown on the right in an inline image-generation comparison while choosing between two generated results.`,
                      }),
                      draggable: !1,
                      style: { clipPath: `inset(0 0 0 ${l}%)` },
                      onLoad: () => I(A.src ?? void 0),
                      onError: A.onImageError ?? (() => z(!0)),
                    }),
                    (0, R.jsx)(`span`, {
                      "aria-hidden": `true`,
                      className: `pointer-events-none absolute inset-y-0 w-px bg-media-foreground`,
                      style: { left: `${l}%` },
                    }),
                  ],
                }),
                (0, R.jsxs)(`div`, {
                  className: `relative mt-2 flex h-11 w-full items-center`,
                  children: [
                    (0, R.jsx)(ie, { className: `relative h-0.5 w-full rounded-full bg-border` }),
                    (0, R.jsx)(te, {
                      className: `relative flex h-11 w-0 cursor-ew-resize items-center justify-center before:absolute before:inset-y-0 before:left-1/2 before:w-11 before:-translate-x-1/2 focus-visible:outline-2`,
                      "aria-label": p.formatMessage({
                        id: `imageGenParagen.comparison.slider`,
                        defaultMessage: `Compare reference and generated images`,
                        description: `Accessible label for the slider below each image in an inline comparison while choosing between two generated results. Dragging reveals the reference image on the left and the generated image on the right.`,
                      }),
                      children: (0, R.jsx)(`span`, {
                        className: `flex size-8 shrink-0 items-center justify-center rounded-full bg-media-background text-media-foreground`,
                        children: (0, R.jsx)(oe, {}),
                      }),
                    }),
                  ],
                }),
              ],
            })
          : null),
      (t[18] = B),
      (t[19] = V),
      (t[20] = p),
      (t[21] = c),
      (t[22] = d),
      (t[23] = A),
      (t[24] = l),
      (t[25] = f),
      (t[26] = k),
      (t[27] = Y))
    : (Y = t[27]);
  let X;
  t[28] !== V || t[29] !== s
    ? ((X = V
        ? (0, R.jsx)(`span`, {
            className: `pointer-events-none absolute start-0 bottom-0 flex size-6 items-center justify-center rounded-md bg-media-background px-1 text-center text-sm font-semibold text-media-foreground select-none dark:bg-media-foreground dark:text-media-background`,
            children: s,
          })
        : null),
      (t[28] = V),
      (t[29] = s),
      (t[30] = X))
    : (X = t[30]);
  let Z;
  t[31] !== B || t[32] !== V || t[33] !== c || t[34] !== G || t[35] !== u
    ? ((Z = B
        ? (0, R.jsx)(`div`, {
            className: `absolute end-0 bottom-0`,
            children: (0, R.jsx)(ce, {
              tooltipContent: G,
              children: (0, R.jsx)(ae, {
                "aria-label": G,
                "aria-pressed": c,
                "aria-busy": c && !V,
                color: `primary`,
                size: `formatToolbarIcon`,
                onClick: (e) => {
                  (e.stopPropagation(), u());
                },
                children: (0, R.jsx)(ee, { asset: ue }),
              }),
            }),
          })
        : null),
      (t[31] = B),
      (t[32] = V),
      (t[33] = c),
      (t[34] = G),
      (t[35] = u),
      (t[36] = Z))
    : (Z = t[36]);
  let Q;
  t[37] !== J || t[38] !== Y || t[39] !== X || t[40] !== Z
    ? ((Q = (0, R.jsxs)(`div`, { className: `relative`, children: [J, Y, X, Z] })),
      (t[37] = J),
      (t[38] = Y),
      (t[39] = X),
      (t[40] = Z),
      (t[41] = Q))
    : (Q = t[41]);
  let $;
  return (
    t[42] !== q || t[43] !== Q
      ? (($ = (0, R.jsx)(`div`, { className: q, children: Q })), (t[42] = q), (t[43] = Q), (t[44] = $))
      : ($ = t[44]),
    $
  );
}
function be(e) {
  return e.stopPropagation();
}
function xe(e) {
  return e.stopPropagation();
}
function Se(e) {
  return e.stopPropagation();
}
var Ce, L, R;
function z() {
  return (z = e(() => {
    ((Ce = l()),
      M(),
      g(),
      d(),
      s(),
      m(),
      (L = a()),
      f(),
      k(),
      p(),
      c(),
      u(),
      v(),
      j(),
      r(),
      A(),
      D(),
      w(),
      I(),
      (R = o()));
  }))();
}
z();
export { ye as ChatGptImageComparison };
//# sourceMappingURL=chatgpt-image-comparison-da5c90cb6d81.js.map
