import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  Al as r,
  COt as i,
  Cot as a,
  HNt as o,
  Ixt as ee,
  Mz as te,
  Nz as s,
  Pxt as c,
  TJ as l,
  TOt as u,
  VDt as ne,
  Vxt as re,
  _Mt as d,
  aB as ie,
  cz as f,
  gMt as ae,
  jDt as p,
  kl as oe,
  nSt as m,
  sz as se,
  t3 as h,
  vzt as g,
  wOt as ce,
  wot as _,
  xMt as v,
  xOt as le,
  yzt as y,
  zxt as b,
} from "./app-shared-bbfeca5e5737.js";
import {
  $yr as x,
  Byr as S,
  Fin as ue,
  Fnn as de,
  Hin as fe,
  Inn as C,
  Jyr as w,
  Lnn as pe,
  Nnn as me,
  Pnn as he,
  QGn as T,
  Rnn as E,
  XDr as D,
  Xyr as O,
  cJn as ge,
  eOr as _e,
  kZn as k,
  lJn as A,
  nKn as ve,
  yjn as ye,
} from "./app-initial-5851df3f6cb1.js";
import { a as j, i as M } from "./chatgpt_conversation_image-ea0e433caffc.js";
var N, P;
function F() {
  return (F = e(() => {
    ((N = t(o(), 1)),
      c(),
      w(),
      A(),
      _(),
      ye(),
      (P = m(
        a,
        ({ conversationId: e, messageId: t }, { get: n }) => {
          let r = n(k, e),
            i = x(r?.[t]?.message?.metadata?.comparison_source_asset_pointer);
          if (r == null || i == null) return null;
          let a = S({ mapping: r, current_node: t });
          for (let e of a) {
            if (e.id === t || O(e)) continue;
            let n = ge(e).find((e) => e.src === i);
            if (n != null) return n;
          }
          return null;
        },
        { isEqual: N.default },
      )));
  }))();
}
function I(e) {
  let t = (0, Ce.c)(45),
    {
      children: r,
      conversationId: o,
      image: s,
      imageNumber: c,
      isComparing: l,
      position: u,
      onToggle: d,
      onPositionChange: f,
    } = e,
    p = ee(a),
    m = ne(),
    { data: h } = fe(),
    g = h == null || h.plan_type === `free` || h.plan_type === `free_workspace`,
    _ = s.chatGptMessageId ?? s.id,
    v;
  t[0] !== o || t[1] !== _
    ? ((v = { conversationId: o, messageId: _ }), (t[0] = o), (t[1] = _), (t[2] = v))
    : (v = t[2]);
  let y = b(P, v),
    x = b(he, o),
    S = re(pe),
    ue = b(me, o),
    C = x ?? void 0,
    w = ue?.imageLoading,
    T;
  t[3] !== C || t[4] !== w || t[5] !== S
    ? ((T = de(C, void 0, S, void 0, w)), (t[3] = C), (t[4] = w), (t[5] = S), (t[6] = T))
    : (T = t[6]);
  let E = T,
    D = y != null && y.src !== s.src && x != null,
    O = g ? (y?.watermarkedSrc ?? y?.src) : y?.src,
    ge = g ? (s.watermarkedSrc ?? s.src) : s.src,
    k = ve(l && D ? (O ?? ``) : ``, E),
    A = ve(l && D ? (ge ?? ``) : ``, E),
    [ye, j] = (0, L.useState)(),
    [N, F] = (0, L.useState)(),
    [I, z] = (0, L.useState)(!1),
    B = D && !I && !k.isError && !A.isError && k.deleted == null && A.deleted == null,
    V = B && l && k.src != null && A.src != null && ye === k.src && N === A.src,
    H,
    U;
  (t[7] !== V || t[8] !== p
    ? ((H = () => {
        V && p.get(_e).trackCounter(M.CHATGPT_IMAGE_COMPARISON_SHOWN);
      }),
      (U = [V, p]),
      (t[7] = V),
      (t[8] = p),
      (t[9] = H),
      (t[10] = U))
    : ((H = t[9]), (U = t[10])),
    (0, L.useEffect)(H, U));
  let W;
  t[11] === m
    ? (W = t[12])
    : ((W = m.formatMessage({
        id: `imageGenActionOverlay.compareImages`,
        defaultMessage: `Compare images`,
        description: `Accessible label and tooltip for a button that toggles inline image-generation comparison. The reference is the attached image or the single generated image in the preceding response. The button shows or hides a slider comparing it with each new generated result.`,
      })),
      (t[11] = m),
      (t[12] = W));
  let G = W,
    K = V && `pb-14`,
    q;
  t[13] === K ? (q = t[14]) : ((q = ae(`relative`, K)), (t[13] = K), (t[14] = q));
  let J;
  t[15] !== r || t[16] !== V
    ? ((J = (0, R.jsx)(`div`, { inert: V, children: r })), (t[15] = r), (t[16] = V), (t[17] = J))
    : (J = t[17]);
  let Y;
  t[18] !== B ||
  t[19] !== V ||
  t[20] !== m ||
  t[21] !== l ||
  t[22] !== f ||
  t[23] !== A ||
  t[24] !== u ||
  t[25] !== p ||
  t[26] !== k
    ? ((Y =
        B && l && k.src != null && A.src != null
          ? (0, R.jsxs)(le, {
              className: ae(`absolute inset-0 touch-none select-none`, !V && `invisible`),
              dir: `ltr`,
              min: 0,
              max: 100,
              step: 1,
              value: [u],
              disabled: !V,
              onPointerDown: Se,
              onClick: xe,
              onKeyDown: be,
              onValueChange: (e) => {
                let [t] = e;
                t != null && f(t);
              },
              onValueCommit: () => {
                p.get(_e).trackCounter(M.CHATGPT_IMAGE_COMPARISON_SLIDER_USED);
              },
              children: [
                (0, R.jsxs)(`div`, {
                  className: `relative size-full overflow-hidden rounded-lg bg-surface`,
                  children: [
                    (0, R.jsx)(`img`, {
                      className: `absolute inset-0 size-full object-contain`,
                      src: k.src,
                      alt: m.formatMessage({
                        id: `imageGenParagen.comparison.referenceImage`,
                        defaultMessage: `Reference image`,
                        description: `Accessible description of the attached image or the single generated image in the preceding response, shown on the left in an inline image-generation comparison while choosing between two generated results.`,
                      }),
                      draggable: !1,
                      style: { clipPath: `inset(0 ${100 - u}% 0 0)` },
                      onLoad: () => j(k.src ?? void 0),
                      onError: k.onImageError ?? (() => z(!0)),
                    }),
                    (0, R.jsx)(`img`, {
                      className: `absolute inset-0 size-full object-contain`,
                      src: A.src,
                      alt: m.formatMessage({
                        id: `imageGenParagen.comparison.outputImage`,
                        defaultMessage: `Output image`,
                        description: `Accessible description of the generated result, shown on the right in an inline image-generation comparison while choosing between two generated results.`,
                      }),
                      draggable: !1,
                      style: { clipPath: `inset(0 0 0 ${u}%)` },
                      onLoad: () => F(A.src ?? void 0),
                      onError: A.onImageError ?? (() => z(!0)),
                    }),
                    (0, R.jsx)(`span`, {
                      "aria-hidden": `true`,
                      className: `pointer-events-none absolute inset-y-0 w-px bg-media-foreground`,
                      style: { left: `${u}%` },
                    }),
                  ],
                }),
                (0, R.jsxs)(`div`, {
                  className: `relative mt-2 flex h-11 w-full items-center`,
                  children: [
                    (0, R.jsx)(ce, { className: `relative h-0.5 w-full rounded-full bg-border` }),
                    (0, R.jsx)(i, {
                      className: `relative flex h-11 w-0 cursor-ew-resize items-center justify-center before:absolute before:inset-y-0 before:left-1/2 before:w-11 before:-translate-x-1/2 focus-visible:outline-2`,
                      "aria-label": m.formatMessage({
                        id: `imageGenParagen.comparison.slider`,
                        defaultMessage: `Compare reference and generated images`,
                        description: `Accessible label for the slider below each image in an inline comparison while choosing between two generated results. Dragging reveals the reference image on the left and the generated image on the right.`,
                      }),
                      children: (0, R.jsx)(`span`, {
                        className: `flex size-8 shrink-0 items-center justify-center rounded-full bg-media-background text-media-foreground`,
                        children: (0, R.jsx)(ie, {}),
                      }),
                    }),
                  ],
                }),
              ],
            })
          : null),
      (t[18] = B),
      (t[19] = V),
      (t[20] = m),
      (t[21] = l),
      (t[22] = f),
      (t[23] = A),
      (t[24] = u),
      (t[25] = p),
      (t[26] = k),
      (t[27] = Y))
    : (Y = t[27]);
  let X;
  t[28] !== V || t[29] !== c
    ? ((X = V
        ? (0, R.jsx)(`span`, {
            className: `pointer-events-none absolute start-0 bottom-0 flex size-6 items-center justify-center rounded-md bg-media-background px-1 text-center text-sm font-semibold text-media-foreground select-none dark:bg-media-foreground dark:text-media-background`,
            children: c,
          })
        : null),
      (t[28] = V),
      (t[29] = c),
      (t[30] = X))
    : (X = t[30]);
  let Z;
  t[31] !== B || t[32] !== V || t[33] !== l || t[34] !== G || t[35] !== d
    ? ((Z = B
        ? (0, R.jsx)(`div`, {
            className: `absolute end-0 bottom-0`,
            children: (0, R.jsx)(se, {
              tooltipContent: G,
              children: (0, R.jsx)(n, {
                "aria-label": G,
                "aria-pressed": l,
                "aria-busy": l && !V,
                color: `primary`,
                size: `formatToolbarIcon`,
                onClick: (e) => {
                  (e.stopPropagation(), d());
                },
                children: (0, R.jsx)(te, { asset: oe }),
              }),
            }),
          })
        : null),
      (t[31] = B),
      (t[32] = V),
      (t[33] = l),
      (t[34] = G),
      (t[35] = d),
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
    ((Ce = g()),
      j(),
      r(),
      u(),
      d(),
      c(),
      (L = y()),
      p(),
      ue(),
      h(),
      s(),
      l(),
      f(),
      D(),
      _(),
      T(),
      C(),
      E(),
      F(),
      (R = v()));
  }))();
}
z();
export { I as ChatGptImageComparison };
//# sourceMappingURL=chatgpt-image-comparison-b0dbb557bff5.js.map
