import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $Ct as n,
  $R as r,
  AB as i,
  ADt as a,
  BE as o,
  Cz as s,
  Dz as c,
  EV as l,
  FU as u,
  HE as d,
  IDt as f,
  IH as p,
  JV as m,
  LH as h,
  MB as g,
  PU as _,
  Pxt as v,
  QCt as y,
  QR as b,
  RE as x,
  RK as S,
  SK as C,
  TJ as w,
  TV as T,
  Tz as E,
  UE as D,
  Uq as O,
  VDt as ee,
  Vxt as k,
  Wq as A,
  _H as j,
  _Mt as M,
  _O as N,
  _q as P,
  _wt as te,
  awt as ne,
  bJ as re,
  dH as F,
  dK as I,
  fB as L,
  fK as R,
  fO as z,
  fwt as B,
  gMt as ie,
  gwt as V,
  iwt as H,
  jB as ae,
  jDt as U,
  kB as oe,
  kz as se,
  lJ as ce,
  mO as le,
  nW as ue,
  oO as de,
  pB as fe,
  pwt as pe,
  qV as me,
  t3 as he,
  tW as ge,
  uH as _e,
  uJ as ve,
  vH as ye,
  vO as be,
  vq as xe,
  vwt as Se,
  vzt as W,
  xJ as Ce,
  xK as G,
  xMt as K,
  ywt as we,
  yzt as Te,
  zK as Ee,
} from "./app-shared-bbfeca5e5737.js";
import { n as De, t as Oe } from "./drawing-size-slider-666a00bfccd4.js";
import { l as ke, o as Ae, t as je } from "./sketch-80946af15140.js";
var q;
function Me() {
  return (Me = e(() => {
    (U(),
      (q = a({
        title: {
          id: `chatgpt.sketch.composer_modal.title`,
          defaultMessage: `Sketch editor`,
          description: `Accessible title for the sketch editor modal opened from the ChatGPT composer. It is announced to assistive technology and is not shown visually. Short modal title; no placeholders.`,
        },
        canvas: {
          id: `chatgpt.sketch.composer_modal.canvas.aria_label`,
          defaultMessage: `Sketch canvas`,
          description: `Accessible label for the interactive drawing canvas inside the sketch editor modal. Short control label; no placeholders.`,
        },
        close: {
          id: `chatgpt.sketch.composer_modal.close.button_label`,
          defaultMessage: `Close sketch editor`,
          description: `Accessible label for the icon button that closes the sketch editor without attaching the sketch. Short button label; no placeholders.`,
        },
        undo: {
          id: `chatgpt.sketch.composer_modal.undo.button_label`,
          defaultMessage: `Undo`,
          description: `Accessible label for the icon button that undoes the latest sketch edit. Short button label; no placeholders.`,
        },
        redo: {
          id: `chatgpt.sketch.composer_modal.redo.button_label`,
          defaultMessage: `Redo`,
          description: `Accessible label for the icon button that redoes the latest undone sketch edit. Short button label; no placeholders.`,
        },
        done: {
          id: `chatgpt.sketch.composer_modal.done.button_label`,
          defaultMessage: `Attach sketch`,
          description: `Accessible label for the checkmark button that finishes the sketch and attaches it to the composer. Short button label; no placeholders.`,
        },
        saving: {
          id: `chatgpt.sketch.composer_modal.saving.button_label`,
          defaultMessage: `Saving sketch`,
          description: `Accessible label for the disabled checkmark button while the sketch is being saved and attached. Short status label; no placeholders.`,
        },
        tools: {
          id: `chatgpt.sketch.composer_modal.tools.aria_label`,
          defaultMessage: `Drawing tools`,
          description: `Accessible label for the sketch editor toolbar containing drawing tool choices. Short group label; no placeholders.`,
        },
        colors: {
          id: `chatgpt.sketch.composer_modal.colors.legend`,
          defaultMessage: `Ink color`,
          description: `Accessible legend for the row of color choices in the sketch editor. Short group label; no placeholders.`,
        },
        select: {
          id: `chatgpt.sketch.composer_modal.tool.select`,
          defaultMessage: `Select`,
          description: `Accessible label for the sketch select tool, which selects, moves, and resizes objects. Short tool name; no placeholders.`,
        },
        pen: {
          id: `chatgpt.sketch.composer_modal.tool.pen`,
          defaultMessage: `Pen`,
          description: `Accessible label for the freehand pen tool in the sketch editor. Short tool name; no placeholders.`,
        },
        text: {
          id: `chatgpt.sketch.composer_modal.tool.text`,
          defaultMessage: `Text`,
          description: `Accessible label for the text tool in the sketch editor. Short tool name; no placeholders.`,
        },
        eraser: {
          id: `chatgpt.sketch.composer_modal.tool.eraser`,
          defaultMessage: `Eraser`,
          description: `Accessible label for the eraser tool in the sketch editor. Short tool name; no placeholders.`,
        },
        line: {
          id: `chatgpt.sketch.composer_modal.tool.line`,
          defaultMessage: `Line`,
          description: `Accessible label for the line shape tool in the sketch editor. Short tool name; no placeholders.`,
        },
        arrow: {
          id: `chatgpt.sketch.composer_modal.tool.arrow`,
          defaultMessage: `Arrow`,
          description: `Accessible label for the arrow shape tool in the sketch editor. Short tool name; no placeholders.`,
        },
        rectangle: {
          id: `chatgpt.sketch.composer_modal.tool.rectangle`,
          defaultMessage: `Rectangle`,
          description: `Accessible label for the rectangle shape tool in the sketch editor. Short tool name; no placeholders.`,
        },
        ellipse: {
          id: `chatgpt.sketch.composer_modal.tool.ellipse`,
          defaultMessage: `Ellipse`,
          description: `Accessible label for the ellipse shape tool in the sketch editor. Short tool name; no placeholders.`,
        },
        triangle: {
          id: `chatgpt.sketch.composer_modal.tool.triangle`,
          defaultMessage: `Triangle`,
          description: `Accessible label for the triangle shape tool in the sketch editor. Short tool name; no placeholders.`,
        },
        diamond: {
          id: `chatgpt.sketch.composer_modal.tool.diamond`,
          defaultMessage: `Diamond`,
          description: `Accessible label for the diamond shape tool in the sketch editor. Short tool name; no placeholders.`,
        },
        star: {
          id: `chatgpt.sketch.composer_modal.tool.star`,
          defaultMessage: `Star`,
          description: `Accessible label for the star shape tool in the sketch editor. Short tool name; no placeholders.`,
        },
        heart: {
          id: `chatgpt.sketch.composer_modal.tool.heart`,
          defaultMessage: `Heart`,
          description: `Accessible label for the heart shape tool in the sketch editor. Short tool name; no placeholders.`,
        },
        shapes: {
          id: `chatgpt.sketch.composer_modal.tool.shapes`,
          defaultMessage: `Shapes`,
          description: `Accessible label for the sketch toolbar menu containing shape tools. Short control label; no placeholders.`,
        },
        strokeWidth: {
          id: `chatgpt.sketch.composer_modal.stroke_width.aria_label`,
          defaultMessage: `Stroke width`,
          description: `Accessible label for the vertical slider that changes drawing stroke width. Short slider label; no placeholders.`,
        },
        eraserSize: {
          id: `chatgpt.sketch.composer_modal.eraser_size.aria_label`,
          defaultMessage: `Eraser size`,
          description: `Label for the brush-size slider shown when Eraser is selected in the ChatGPT sketch editor or image markup editor. It changes the diameter of the circular area erased, independently of pen thickness and text size. Short slider label; no placeholders.`,
        },
        textSize: {
          id: `chatgpt.sketch.composer_modal.text_size.aria_label`,
          defaultMessage: `Text size`,
          description: `Accessible label for the vertical slider that changes sketch text size. Short slider label; no placeholders.`,
        },
        customColor: {
          id: `chatgpt.sketch.composer_modal.color.custom`,
          defaultMessage: `Choose a custom color`,
          description: `Accessible label for the sketch color swatch that opens the native custom color picker. Short control label; no placeholders.`,
        },
        black: {
          id: `chatgpt.sketch.composer_modal.color.black`,
          defaultMessage: `Use black`,
          description: `Accessible label for the black sketch color swatch. Short button label; no placeholders.`,
        },
        white: {
          id: `chatgpt.sketch.composer_modal.color.white`,
          defaultMessage: `Use white`,
          description: `Accessible label for the white sketch color swatch shown on the dark sketch canvas. Short button label; no placeholders.`,
        },
        gray: {
          id: `chatgpt.sketch.composer_modal.color.gray`,
          defaultMessage: `Use gray`,
          description: `Accessible label for the gray sketch color swatch. Short button label; no placeholders.`,
        },
        brown: {
          id: `chatgpt.sketch.composer_modal.color.brown`,
          defaultMessage: `Use brown`,
          description: `Accessible label for the brown sketch color swatch. Short button label; no placeholders.`,
        },
        red: {
          id: `chatgpt.sketch.composer_modal.color.red`,
          defaultMessage: `Use red`,
          description: `Accessible label for the red sketch color swatch. Short button label; no placeholders.`,
        },
        orange: {
          id: `chatgpt.sketch.composer_modal.color.orange`,
          defaultMessage: `Use orange`,
          description: `Accessible label for the orange sketch color swatch. Short button label; no placeholders.`,
        },
        yellow: {
          id: `chatgpt.sketch.composer_modal.color.yellow`,
          defaultMessage: `Use yellow`,
          description: `Accessible label for the yellow sketch color swatch. Short button label; no placeholders.`,
        },
        green: {
          id: `chatgpt.sketch.composer_modal.color.green`,
          defaultMessage: `Use green`,
          description: `Accessible label for the green sketch color swatch. Short button label; no placeholders.`,
        },
        teal: {
          id: `chatgpt.sketch.composer_modal.color.teal`,
          defaultMessage: `Use teal`,
          description: `Accessible label for the teal sketch color swatch. Short button label; no placeholders.`,
        },
        cyan: {
          id: `chatgpt.sketch.composer_modal.color.cyan`,
          defaultMessage: `Use cyan`,
          description: `Accessible label for the cyan sketch color swatch. Short button label; no placeholders.`,
        },
        blue: {
          id: `chatgpt.sketch.composer_modal.color.blue`,
          defaultMessage: `Use blue`,
          description: `Accessible label for the blue sketch color swatch. Short button label; no placeholders.`,
        },
        indigo: {
          id: `chatgpt.sketch.composer_modal.color.indigo`,
          defaultMessage: `Use indigo`,
          description: `Accessible label for the indigo sketch color swatch. Short button label; no placeholders.`,
        },
        purple: {
          id: `chatgpt.sketch.composer_modal.color.purple`,
          defaultMessage: `Use purple`,
          description: `Accessible label for the purple sketch color swatch. Short button label; no placeholders.`,
        },
        pink: {
          id: `chatgpt.sketch.composer_modal.color.pink`,
          defaultMessage: `Use pink`,
          description: `Accessible label for the pink sketch color swatch. Short button label; no placeholders.`,
        },
      })));
  }))();
}
function Ne(e) {
  let t = (0, Pe.c)(93),
    {
      editor: n,
      snapshot: r,
      disabled: i,
      isDarkMode: a,
      open: o,
      dismissalBoundary: s,
      onOpenChange: c,
      compact: l,
      preserveTextFocus: u,
      onBeforeChange: d,
      onPresetSelect: p,
    } = e,
    m = l !== void 0 && l,
    h = u !== void 0 && u,
    g = ee(),
    _ = (0, J.useId)(),
    v = (0, J.useId)(),
    y = (0, J.useRef)(0),
    b = (0, J.useRef)(void 0),
    x = (0, J.useRef)(null),
    S = (0, J.useRef)(null),
    C = (0, J.useRef)(null),
    w = (0, J.useRef)(null),
    T = a ? Ie : Fe,
    E;
  t[0] !== T || t[1] !== r
    ? ((E = () =>
        T.some((e) => {
          let { color: t } = e;
          return t === r.style.color;
        })
          ? null
          : r.style.color),
      (t[0] = T),
      (t[1] = r),
      (t[2] = E))
    : (E = t[2]);
  let [D, O] = (0, J.useState)(E),
    k;
  if (t[3] !== T || t[4] !== r) {
    let e;
    (t[6] === r
      ? (e = t[7])
      : ((e = (e) => {
          let { color: t } = e;
          return t === r.style.color;
        }),
        (t[6] = r),
        (t[7] = e)),
      (k = T.some(e)),
      (t[3] = T),
      (t[4] = r),
      (t[5] = k));
  } else k = t[5];
  let A = !k,
    j = A ? r.style.color : D,
    M;
  t[8] !== n || t[9] !== d
    ? ((M = (e, t) => {
        (d?.(), n.setStyle({ color: e }, { historyGroup: t }));
        let r = n.getSnapshot();
        (r.activeTool === `eraser` || (r.activeTool === `select` && r.selectionId == null)) &&
          n.setTool(`pen`);
      }),
      (t[8] = n),
      (t[9] = d),
      (t[10] = M))
    : (M = t[10]);
  let N = M,
    P;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = () => {
        (w.current?.(), (w.current = null), (b.current = void 0));
      }),
      (t[11] = P))
    : (P = t[11]);
  let te = P,
    ne;
  t[12] === c
    ? (ne = t[13])
    : ((ne = () => {
        b.current != null && (te(), c(!1));
      }),
      (t[12] = c),
      (t[13] = ne));
  let re = ne,
    F;
  t[14] !== re || t[15] !== s || t[16] !== _ || t[17] !== c
    ? ((F = () => {
        (te(), (b.current = `${_}-${(y.current += 1)}`), c(!0));
        let e = x.current?.ownerDocument.defaultView,
          t = (e) => {
            let t = e.target;
            if (t instanceof Node && S.current?.contains(t)) return;
            let n = s ?? C.current;
            (((t instanceof Element && t.closest(`[data-sketch-canvas-surface]`) != null) ||
              (n != null && !(t instanceof Node && n.contains(t)))) &&
              (e.preventDefault(), e.stopPropagation()),
              re());
          };
        (e?.addEventListener(`pointerdown`, t, !0),
          (w.current = () => e?.removeEventListener(`pointerdown`, t, !0)));
      }),
      (t[14] = re),
      (t[15] = s),
      (t[16] = _),
      (t[17] = c),
      (t[18] = F))
    : (F = t[18]);
  let I = F,
    L;
  t[19] === N
    ? (L = t[20])
    : ((L = (e) => {
        (O(e), N(e, b.current));
      }),
      (t[19] = N),
      (t[20] = L));
  let R = L,
    z = (0, J.useEffectEvent)(te),
    B = (0, J.useEffectEvent)(re),
    V = (0, J.useEffectEvent)(R),
    H;
  t[21] !== V || t[22] !== B || t[23] !== z
    ? ((H = () => {
        let e = x.current,
          t = () => B(),
          n = () => {
            (e != null && V(e.value), B());
          };
        return (
          e?.addEventListener(`cancel`, t),
          e?.addEventListener(`change`, n),
          () => {
            (e?.removeEventListener(`cancel`, t), e?.removeEventListener(`change`, n), z());
          }
        );
      }),
      (t[21] = V),
      (t[22] = B),
      (t[23] = z),
      (t[24] = H))
    : (H = t[24]);
  let ae;
  (t[25] === Symbol.for(`react.memo_cache_sentinel`) ? ((ae = []), (t[25] = ae)) : (ae = t[25]),
    (0, J.useEffect)(H, ae));
  let U;
  t[26] !== i || t[27] !== z || t[28] !== o
    ? ((U = () => {
        (!o || i) && z();
      }),
      (t[26] = i),
      (t[27] = z),
      (t[28] = o),
      (t[29] = U))
    : (U = t[29]);
  let oe;
  (t[30] !== i || t[31] !== o ? ((oe = [i, o]), (t[30] = i), (t[31] = o), (t[32] = oe)) : (oe = t[32]),
    (0, J.useEffect)(U, oe));
  let se = m ? `grid grid-cols-7 p-0` : `flex px-1 py-1 browser:py-1.5`,
    ce;
  t[33] === se
    ? (ce = t[34])
    : ((ce = ie(`pointer-events-auto mx-auto w-max items-center gap-2 border-0 select-none`, se)),
      (t[33] = se),
      (t[34] = ce));
  let le;
  t[35] === g ? (le = t[36]) : ((le = g.formatMessage(q.colors)), (t[35] = g), (t[36] = le));
  let ue;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, Y.jsx)(`legend`, { className: `sr-only`, children: (0, Y.jsx)(f, { ...q.colors }) })),
      (t[37] = ue))
    : (ue = t[37]);
  let de;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, Y.jsx)(`span`, { className: `sr-only`, children: (0, Y.jsx)(f, { ...q.customColor }) })),
      (t[38] = de))
    : (de = t[38]);
  let fe = `sketch-custom-color-${_}`,
    pe = j ?? `#a855f7`,
    me;
  t[39] !== j || t[40] !== I || t[41] !== N
    ? ((me = (e) => {
        (e.stopPropagation(), I(), j != null && N(j, b.current));
      }),
      (t[39] = j),
      (t[40] = I),
      (t[41] = N),
      (t[42] = me))
    : (me = t[42]);
  let he;
  t[43] !== I || t[44] !== R
    ? ((he = (e) => {
        (b.current ?? I(), R(e.currentTarget.value));
      }),
      (t[43] = I),
      (t[44] = R),
      (t[45] = he))
    : (he = t[45]);
  let ge;
  t[46] !== i || t[47] !== v || t[48] !== fe || t[49] !== pe || t[50] !== me || t[51] !== he
    ? ((ge = (0, Y.jsx)(`input`, {
        ref: x,
        "aria-describedby": v,
        className: `peer absolute inset-0 z-20 m-0 h-full w-full cursor-interaction touch-manipulation border-0 bg-transparent p-0 opacity-0 disabled:cursor-not-allowed`,
        disabled: i,
        name: fe,
        type: `color`,
        value: pe,
        onClick: me,
        onInput: he,
      })),
      (t[46] = i),
      (t[47] = v),
      (t[48] = fe),
      (t[49] = pe),
      (t[50] = me),
      (t[51] = he),
      (t[52] = ge))
    : (ge = t[52]);
  let _e = A
      ? `ring-2 ring-[#2c67c5] ring-offset-2`
      : `peer-enabled:peer-hover:scale-105 peer-enabled:peer-hover:ring-2 peer-enabled:peer-hover:ring-black/15 dark:peer-enabled:peer-hover:ring-white/25`,
    ve = a ? `ring-offset-[#212121]` : `ring-offset-white`,
    ye;
  t[53] !== _e || t[54] !== ve
    ? ((ye = ie(
        `pointer-events-none relative z-10 size-full rounded-full bg-[conic-gradient(from_210deg,#ff375f_0deg,#ff9f0a_48deg,#ffd60a_92deg,#30d158_142deg,#64d2ff_202deg,#0a84ff_242deg,#5e5ce6_282deg,#bf5af2_324deg,#ff375f_360deg)] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] transition-transform peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#2c67c5] peer-disabled:opacity-50 motion-reduce:transition-none`,
        _e,
        ve,
      )),
      (t[53] = _e),
      (t[54] = ve),
      (t[55] = ye))
    : (ye = t[55]);
  let be;
  t[56] === j
    ? (be = t[57])
    : ((be =
        j != null &&
        (0, Y.jsxs)(Y.Fragment, {
          children: [
            (0, Y.jsx)(`span`, { className: `absolute inset-[3px] rounded-full bg-white` }),
            (0, Y.jsx)(`span`, {
              className: `absolute inset-[5px] rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.18)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]`,
              style: { backgroundColor: j },
            }),
          ],
        })),
      (t[56] = j),
      (t[57] = be));
  let xe;
  t[58] !== ye || t[59] !== be
    ? ((xe = (0, Y.jsx)(`span`, { "aria-hidden": !0, className: ye, children: be })),
      (t[58] = ye),
      (t[59] = be),
      (t[60] = xe))
    : (xe = t[60]);
  let Se;
  t[61] !== ge || t[62] !== xe
    ? ((Se = (0, Y.jsxs)(`label`, {
        ref: S,
        className: `relative flex size-5 shrink-0 items-center justify-center rounded-full browser:size-6`,
        children: [de, ge, xe],
      })),
      (t[61] = ge),
      (t[62] = xe),
      (t[63] = Se))
    : (Se = t[63]);
  let W;
  t[64] === A
    ? (W = t[65])
    : ((W = A
        ? (0, Y.jsx)(f, {
            id: `chatgpt.sketch.composer_modal.color.custom.selected`,
            defaultMessage: `Selected`,
            description: `Accessible state description announced for the custom sketch color swatch when it is the active drawing color. Short status; no placeholders.`,
          })
        : (0, Y.jsx)(f, {
            id: `chatgpt.sketch.composer_modal.color.custom.not_selected`,
            defaultMessage: `Not selected`,
            description: `Accessible state description announced for the custom sketch color swatch when it is not the active drawing color. Short status; no placeholders.`,
          })),
      (t[64] = A),
      (t[65] = W));
  let Ce;
  t[66] !== v || t[67] !== W
    ? ((Ce = (0, Y.jsx)(`span`, { id: v, className: `sr-only`, children: W })),
      (t[66] = v),
      (t[67] = W),
      (t[68] = Ce))
    : (Ce = t[68]);
  let G;
  if (
    t[69] !== i ||
    t[70] !== g ||
    t[71] !== a ||
    t[72] !== p ||
    t[73] !== T ||
    t[74] !== h ||
    t[75] !== N ||
    t[76] !== r
  ) {
    let e;
    (t[78] !== i || t[79] !== g || t[80] !== a || t[81] !== p || t[82] !== h || t[83] !== N || t[84] !== r
      ? ((e = (e) => {
          let { color: t, message: n } = e;
          return (0, Y.jsx)(
            `button`,
            {
              className: ie(
                `size-5 shrink-0 cursor-interaction rounded-full border border-black/20 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2c67c5] disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none browser:size-6 dark:border-white/25`,
                r.style.color === t
                  ? `ring-2 ring-[#2c67c5] ring-offset-2`
                  : `enabled:hover:scale-105 enabled:hover:ring-2 enabled:hover:ring-black/15 dark:enabled:hover:ring-white/25`,
                a ? `ring-offset-[#212121]` : `ring-offset-white`,
              ),
              "aria-label": g.formatMessage(n),
              "aria-pressed": r.style.color === t,
              disabled: i,
              style: { backgroundColor: t },
              type: `button`,
              onPointerDown: (e) => {
                h && e.preventDefault();
              },
              onClick: () => {
                (N(t), p?.());
              },
            },
            t,
          );
        }),
        (t[78] = i),
        (t[79] = g),
        (t[80] = a),
        (t[81] = p),
        (t[82] = h),
        (t[83] = N),
        (t[84] = r),
        (t[85] = e))
      : (e = t[85]),
      (G = T.map(e)),
      (t[69] = i),
      (t[70] = g),
      (t[71] = a),
      (t[72] = p),
      (t[73] = T),
      (t[74] = h),
      (t[75] = N),
      (t[76] = r),
      (t[77] = G));
  } else G = t[77];
  let K;
  return (
    t[86] !== i || t[87] !== ce || t[88] !== le || t[89] !== Se || t[90] !== Ce || t[91] !== G
      ? ((K = (0, Y.jsxs)(`fieldset`, {
          ref: C,
          className: ce,
          "aria-label": le,
          disabled: i,
          children: [ue, Se, Ce, G],
        })),
        (t[86] = i),
        (t[87] = ce),
        (t[88] = le),
        (t[89] = Se),
        (t[90] = Ce),
        (t[91] = G),
        (t[92] = K))
      : (K = t[92]),
    K
  );
}
var Pe, J, Y, Fe, Ie;
function Le() {
  return (Le = e(() => {
    ((Pe = W()),
      M(),
      (J = Te()),
      U(),
      Me(),
      (Y = K()),
      (Fe = [
        { color: `#000000`, message: q.black },
        { color: `#6b7280`, message: q.gray },
        { color: `#92400e`, message: q.brown },
        { color: `#dc2626`, message: q.red },
        { color: `#f97316`, message: q.orange },
        { color: `#f59e0b`, message: q.yellow },
        { color: `#16a34a`, message: q.green },
        { color: `#0d9488`, message: q.teal },
        { color: `#06b6d4`, message: q.cyan },
        { color: `#2563eb`, message: q.blue },
        { color: `#4f46e5`, message: q.indigo },
        { color: `#9333ea`, message: q.purple },
        { color: `#db2777`, message: q.pink },
      ]),
      (Ie = [{ color: `#ffffff`, message: q.white }, ...Fe.slice(1)]));
  }))();
}
function Re(e) {
  return e !== `select` && e !== `text` && e !== `comment`;
}
var ze, Be, Ve;
function He() {
  return (He = e(() => {
    ((ze = [`line`, `arrow`, `rectangle`, `ellipse`, `triangle`, `diamond`, `star`, `heart`]),
      (Be = [`select`, `pen`, `text`, `shapes`, `eraser`]),
      (Ve = [`pen`, `shapes`, `eraser`]));
  }))();
}
function Ue(e) {
  let t = (0, Ke.c)(35),
    {
      activeTool: n,
      disabled: r,
      isMobile: i,
      isUnifiedViewerEnabled: a,
      open: s,
      onOpenChange: l,
      onToolChange: u,
      tools: f,
      leadingControls: p,
      children: m,
      trailingControls: h,
    } = e,
    g = a !== void 0 && a,
    _ = f === void 0 ? (i ? Ve : Be) : f,
    v = ee(),
    y = (0, X.useRef)(!1),
    b = (0, X.useRef)(null),
    S;
  t[0] === l ? (S = t[1]) : ((S = () => l(!1)), (t[0] = l), (t[1] = S));
  let w = (0, X.useEffectEvent)(S),
    T;
  t[2] === w ? (T = t[3]) : ((T = () => () => w()), (t[2] = w), (t[3] = T));
  let E;
  (t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((E = []), (t[4] = E)) : (E = t[4]),
    (0, X.useEffect)(T, E));
  let D;
  t[5] !== w || t[6] !== r || t[7] !== s
    ? ((D = () => {
        let e = b.current;
        if (!s || r || e == null) return;
        let t = e.ownerDocument,
          n = e.closest(`[role="dialog"]`),
          i = (r) => {
            let i = r.target,
              a = e.getAttribute(`aria-controls`),
              o = a == null ? null : t.getElementById(a);
            !(i instanceof Node) ||
              e.contains(i) ||
              o?.contains(i) ||
              (((i instanceof Element && i.closest(`[data-sketch-canvas-surface]`) != null) ||
                (n != null && !n.contains(i))) &&
                (r.preventDefault(), r.stopPropagation()),
              w());
          };
        return (t.addEventListener(`pointerdown`, i, !0), () => t.removeEventListener(`pointerdown`, i, !0));
      }),
      (t[5] = w),
      (t[6] = r),
      (t[7] = s),
      (t[8] = D))
    : (D = t[8]);
  let O;
  (t[9] !== r || t[10] !== s ? ((O = [r, s]), (t[9] = r), (t[10] = s), (t[11] = O)) : (O = t[11]),
    (0, X.useEffect)(D, O));
  let k;
  t[12] === v ? (k = t[13]) : ((k = v.formatMessage(q.tools)), (t[12] = v), (t[13] = k));
  let A = g
      ? `flex min-w-0 items-center`
      : `flex max-w-full items-center gap-0.5 rounded-full border border-default bg-surface-elevated p-1 text-default shadow-sm`,
    j;
  t[14] !== n ||
  t[15] !== r ||
  t[16] !== v ||
  t[17] !== i ||
  t[18] !== g ||
  t[19] !== l ||
  t[20] !== u ||
  t[21] !== s ||
  t[22] !== _
    ? ((j = _.map((e) =>
        e === `shapes`
          ? (0, Z.jsxs)(
              x,
              {
                open: s && !r,
                onOpenChange: l,
                children: [
                  (0, Z.jsx)(d, {
                    asChild: !0,
                    children: (0, Z.jsx)(We, {
                      ref: b,
                      isUnifiedViewerEnabled: g,
                      "aria-label": v.formatMessage(q.shapes),
                      "aria-pressed": ze.some((e) => e === n),
                      disabled: r,
                      title: v.formatMessage(q.shapes),
                      onPointerDown: (e) => {
                        ((y.current = !0), e.preventDefault(), i && l(!s));
                      },
                      onClick: (e) => {
                        (e.preventDefault(),
                          e.stopPropagation(),
                          e.detail === 0 ? ((y.current = !1), l(!s)) : i || l(!s));
                      },
                      onKeyDown: () => {
                        y.current = !1;
                      },
                      children: (0, Z.jsx)(c, { icon: { 16: G, 20: C } }),
                    }),
                  }),
                  (0, Z.jsx)(o, {
                    "aria-label": v.formatMessage(q.shapes),
                    align: `center`,
                    collisionPadding: 10,
                    opaque: !0,
                    side: g ? `top` : `bottom`,
                    sideOffset: 4,
                    size: `content`,
                    onEscapeKeyDown: (e) => {
                      (e.stopPropagation(), (y.current = !1));
                    },
                    onKeyDown: () => {
                      y.current = !1;
                    },
                    onOpenAutoFocus: (e) => {
                      y.current && e.preventDefault();
                    },
                    onCloseAutoFocus: (e) => {
                      (!i && y.current && e.preventDefault(), (y.current = !1));
                    },
                    children: (0, Z.jsx)(`div`, {
                      className: `grid grid-cols-4 grid-rows-2 gap-0.5`,
                      children: ze.map((e) =>
                        (0, Z.jsx)(
                          We,
                          {
                            "aria-label": v.formatMessage(q[e]),
                            "aria-pressed": n === e,
                            disabled: r,
                            title: v.formatMessage(q[e]),
                            onPointerDown: (e) => {
                              i || e.preventDefault();
                            },
                            onClick: () => {
                              (i && (y.current = !1), u(e), l(!1));
                            },
                            children: qe[e],
                          },
                          e,
                        ),
                      ),
                    }),
                  }),
                ],
              },
              e,
            )
          : (0, Z.jsx)(
              We,
              {
                isUnifiedViewerEnabled: g,
                "aria-label": v.formatMessage(q[e]),
                "aria-pressed": n === e,
                disabled: r,
                title: v.formatMessage(q[e]),
                onPointerDown: (e) => {
                  i || e.preventDefault();
                },
                onClick: () => u(e),
                children: qe[e],
              },
              e,
            ),
      )),
      (t[14] = n),
      (t[15] = r),
      (t[16] = v),
      (t[17] = i),
      (t[18] = g),
      (t[19] = l),
      (t[20] = u),
      (t[21] = s),
      (t[22] = _),
      (t[23] = j))
    : (j = t[23]);
  let M;
  t[24] !== m || t[25] !== p || t[26] !== j
    ? ((M = (0, Z.jsxs)(`div`, {
        className: `no-scrollbar flex min-w-0 items-center gap-0.5 overflow-x-auto`,
        children: [p, j, m],
      })),
      (t[24] = m),
      (t[25] = p),
      (t[26] = j),
      (t[27] = M))
    : (M = t[27]);
  let N;
  t[28] !== M || t[29] !== A || t[30] !== h
    ? ((N = (0, Z.jsxs)(`div`, { className: A, children: [M, h] })),
      (t[28] = M),
      (t[29] = A),
      (t[30] = h),
      (t[31] = N))
    : (N = t[31]);
  let P;
  return (
    t[32] !== N || t[33] !== k
      ? ((P = (0, Z.jsx)(`fieldset`, {
          className: `pointer-events-auto m-0 min-w-0 border-0 p-0 select-none`,
          "aria-label": k,
          children: N,
        })),
        (t[32] = N),
        (t[33] = k),
        (t[34] = P))
      : (P = t[34]),
    P
  );
}
function We(e) {
  let n = (0, Ke.c)(8),
    r,
    i;
  n[0] === e
    ? ((r = n[1]), (i = n[2]))
    : (({ isUnifiedViewerEnabled: i, ...r } = e), (n[0] = e), (n[1] = r), (n[2] = i));
  let a = i !== void 0 && i,
    o = r[`aria-pressed`] === !0 ? `segmentedSelected` : `ghostSecondary`,
    s = a ? `large` : `full`,
    c = a ? `imageToolbar` : `composer`,
    l;
  return (
    n[3] !== r || n[4] !== o || n[5] !== s || n[6] !== c
      ? ((l = (0, Z.jsx)(t, { ...r, color: o, radius: s, size: c, type: `button`, uniform: !0 })),
        (n[3] = r),
        (n[4] = o),
        (n[5] = s),
        (n[6] = c),
        (n[7] = l))
      : (l = n[7]),
    l
  );
}
function Ge(e) {
  let t = (0, Ke.c)(59),
    { className: n, editor: r, forceExpanded: i, snapshot: a, disabled: o, viewportScale: s } = e,
    c = s === void 0 ? 1 : s,
    l = ee(),
    u = (0, X.useId)(),
    d = (0, X.useRef)(0),
    f = (0, X.useRef)(void 0),
    [p, m] = (0, X.useState)(null),
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    E,
    D;
  if (
    t[0] !== n ||
    t[1] !== l ||
    t[2] !== p ||
    t[3] !== a.activeTool ||
    t[4] !== a.document.objects ||
    t[5] !== a.drawingWidthPx ||
    t[6] !== a.eraserSizePx ||
    t[7] !== a.hasPendingTextEdit ||
    t[8] !== a.selectionId ||
    t[9] !== a.style.width ||
    t[10] !== a.textSizePx ||
    t[11] !== c
  ) {
    let e;
    (t[25] === a.selectionId
      ? (e = t[26])
      : ((e = (e) => e.id === a.selectionId), (t[25] = a.selectionId), (t[26] = e)),
      (w = a.document.objects.find(e)),
      (y = a.activeTool === `text` || w?.kind === `text`),
      (v = a.activeTool === `eraser`),
      (_ = !v && w?.kind === `ink`),
      (g = a.activeTool === `comment` || w?.kind === `comment`),
      t[27] !== g || t[28] !== y || t[29] !== a.drawingWidthPx || t[30] !== a.textSizePx
        ? ((C = g ? void 0 : a.drawingWidthPx),
          y && (C = a.textSizePx),
          (t[27] = g),
          (t[28] = y),
          (t[29] = a.drawingWidthPx),
          (t[30] = a.textSizePx),
          (t[31] = C))
        : (C = t[31]),
      (D = a.style.width),
      v ? (D = a.eraserSizePx) : C != null && (D = w == null ? C : a.style.width * c));
    let r = `stroke`;
    if (
      (v ? (r = `eraser`) : y && (r = `text`),
      (S = {
        stroke: {
          min: Math.min(C == null ? 2 : 1, D),
          max: Math.max(C == null ? 48 : 32, D),
          name: `sketch-stroke-width`,
          label: q.strokeWidth,
        },
        text: { min: Math.min(8, D), max: Math.max(128, D), name: `sketch-text-size`, label: q.textSize },
        eraser: { min: 4, max: 96, name: `sketch-eraser-size`, label: q.eraserSize },
      }[r]),
      ({ min: x, max: b } = S),
      !v && (w != null || a.hasPendingTextEdit))
    ) {
      let e = w?.id ?? null,
        t = p?.objectId === e && p.viewportScale === c;
      (t && ((x = Math.min(x, p.min)), (b = Math.max(b, p.max))),
        (!t || p.min !== x || p.max !== b) && m({ objectId: e, viewportScale: c, min: x, max: b }));
    } else p != null && m(null);
    ((h = Oe),
      (T = n),
      (E = l.formatMessage(S.label)),
      (t[0] = n),
      (t[1] = l),
      (t[2] = p),
      (t[3] = a.activeTool),
      (t[4] = a.document.objects),
      (t[5] = a.drawingWidthPx),
      (t[6] = a.eraserSizePx),
      (t[7] = a.hasPendingTextEdit),
      (t[8] = a.selectionId),
      (t[9] = a.style.width),
      (t[10] = a.textSizePx),
      (t[11] = c),
      (t[12] = h),
      (t[13] = g),
      (t[14] = _),
      (t[15] = v),
      (t[16] = y),
      (t[17] = b),
      (t[18] = x),
      (t[19] = S),
      (t[20] = C),
      (t[21] = w),
      (t[22] = T),
      (t[23] = E),
      (t[24] = D));
  } else
    ((h = t[12]),
      (g = t[13]),
      (_ = t[14]),
      (v = t[15]),
      (y = t[16]),
      (b = t[17]),
      (x = t[18]),
      (S = t[19]),
      (C = t[20]),
      (w = t[21]),
      (T = t[22]),
      (E = t[23]),
      (D = t[24]));
  let O = o || _ || (!v && g),
    k;
  t[32] !== l || t[33] !== _
    ? ((k = _
        ? l.formatMessage({
            id: `chatgpt.sketch.composer_modal.stroke_width.erased_help_text`,
            defaultMessage: `Width cannot be changed after partial erasing. Use the selection handles to resize.`,
            description: `Tooltip on the disabled stroke-width slider in Sketch and image Markup when the selected drawing has been partially erased. Erasing preserves the remaining painted shape but removes its editable stroke path, so users can resize it with the handles around the selection instead. Width means the thickness of the drawn line. Two short explanatory sentences; no placeholders.`,
          })
        : void 0),
      (t[32] = l),
      (t[33] = _),
      (t[34] = k))
    : (k = t[34]);
  let A;
  t[35] === u
    ? (A = t[36])
    : ((A = () => {
        f.current = `${u}-${(d.current += 1)}`;
      }),
      (t[35] = u),
      (t[36] = A));
  let j;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = () => {
        f.current = void 0;
      }),
      (t[37] = j))
    : (j = t[37]);
  let M;
  t[38] !== r || t[39] !== v || t[40] !== y || t[41] !== C || t[42] !== w || t[43] !== c
    ? ((M = (e) => {
        v
          ? r.setEraserSize(e)
          : C != null && w == null
            ? y
              ? r.setTextSize(e)
              : r.setDrawingWidth(e)
            : r.setStyle({ width: C == null ? e : e / c }, { historyGroup: f.current });
      }),
      (t[38] = r),
      (t[39] = v),
      (t[40] = y),
      (t[41] = C),
      (t[42] = w),
      (t[43] = c),
      (t[44] = M))
    : (M = t[44]);
  let N;
  return (
    t[45] !== h ||
    t[46] !== i ||
    t[47] !== y ||
    t[48] !== b ||
    t[49] !== x ||
    t[50] !== S.name ||
    t[51] !== T ||
    t[52] !== E ||
    t[53] !== O ||
    t[54] !== k ||
    t[55] !== A ||
    t[56] !== M ||
    t[57] !== D
      ? ((N = (0, Z.jsx)(h, {
          className: T,
          "aria-label": E,
          disabled: O,
          forceExpanded: i,
          min: x,
          max: b,
          name: S.name,
          preserveTextFocus: y,
          title: k,
          value: D,
          onInteractionStart: A,
          onInteractionEnd: j,
          onValueChange: M,
        })),
        (t[45] = h),
        (t[46] = i),
        (t[47] = y),
        (t[48] = b),
        (t[49] = x),
        (t[50] = S.name),
        (t[51] = T),
        (t[52] = E),
        (t[53] = O),
        (t[54] = k),
        (t[55] = A),
        (t[56] = M),
        (t[57] = D),
        (t[58] = N))
      : (N = t[58]),
    N
  );
}
var Ke, X, Z, qe;
function Je() {
  return (Je = e(() => {
    ((Ke = W()),
      je(),
      (X = Te()),
      U(),
      he(),
      De(),
      w(),
      D(),
      se(),
      Me(),
      He(),
      (Z = K()),
      (qe = {
        select: (0, Z.jsx)(c, { className: `translate-x-px translate-y-px`, icon: { 16: _e, 20: F } }),
        text: (0, Z.jsx)(c, { icon: { 16: O, 20: A } }),
        pen: (0, Z.jsx)(c, { icon: { 16: S, 20: Ee } }),
        eraser: (0, Z.jsx)(c, { icon: { 16: p, 20: h } }),
        line: (0, Z.jsx)(c, { icon: { 16: ge, 20: ue } }),
        arrow: (0, Z.jsx)(c, { icon: { 16: L, 20: fe } }),
        rectangle: (0, Z.jsx)(c, { icon: { 16: I, 20: R } }),
        ellipse: (0, Z.jsx)(c, { icon: { 16: me, 20: m } }),
        triangle: (0, Z.jsx)(c, { icon: { 16: ce, 20: ve } }),
        diamond: (0, Z.jsx)(c, { icon: { 16: j, 20: ye } }),
        star: (0, Z.jsx)(c, { icon: { 16: P, 20: xe } }),
        heart: (0, Z.jsx)(c, { icon: { 16: _, 20: u } }),
      }));
  }))();
}
function Ye(e) {
  let t = (0, Xe.c)(67),
    i,
    a,
    o,
    s,
    c,
    l;
  t[0] === e
    ? ((i = t[1]), (a = t[2]), (o = t[3]), (s = t[4]), (c = t[5]), (l = t[6]))
    : (({
        children: i,
        contentProps: a,
        overlayClassName: s,
        shouldIgnoreClickOutside: l,
        onRequestClose: o,
        ...c
      } = e),
      (t[0] = e),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l));
  let u = E(),
    d = k(r),
    f = n(),
    p = pe(0),
    m = (0, Q.useRef)(null),
    h = (0, Q.useRef)(null),
    g = (0, Q.useRef)(0),
    _ = (0, Q.useRef)(l),
    v = (0, Q.useRef)(null),
    [y, b] = (0, Q.useState)(!1),
    x;
  t[7] === d ? (x = t[8]) : ((x = d ? { duration: 0 } : Qe), (t[7] = d), (t[8] = x));
  let S = x,
    C,
    w;
  (t[9] === l
    ? ((C = t[10]), (w = t[11]))
    : ((C = () => {
        _.current = l;
      }),
      (w = [l]),
      (t[9] = l),
      (t[10] = C),
      (t[11] = w)),
    (0, Q.useLayoutEffect)(C, w));
  let T, D;
  (t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = () => () => {
        ((g.current += 1), h.current?.stop(), v.current != null && cancelAnimationFrame(v.current));
      }),
      (D = []),
      (t[12] = T),
      (t[13] = D))
    : ((T = t[12]), (D = t[13])),
    (0, Q.useEffect)(T, D));
  let O;
  t[14] !== p || t[15] !== S
    ? ((O = () => {
        (b(!1), (h.current = H(p, 0, S)), (v.current = requestAnimationFrame(() => m.current?.focus())));
      }),
      (t[14] = p),
      (t[15] = S),
      (t[16] = O))
    : (O = t[16]);
  let ee = O,
    A;
  t[17] !== y || t[18] !== p || t[19] !== o || t[20] !== ee || t[21] !== l || t[22] !== S
    ? ((A = async () => {
        if (l || y || m.current == null) return;
        b(!0);
        let e = (g.current += 1);
        if (((h.current = H(p, m.current.offsetHeight, S)), await h.current, e === g.current)) {
          if (_.current) {
            ee();
            return;
          }
          o(ee);
        }
      }),
      (t[17] = y),
      (t[18] = p),
      (t[19] = o),
      (t[20] = ee),
      (t[21] = l),
      (t[22] = S),
      (t[23] = A))
    : (A = t[23]);
  let j = A,
    M;
  t[24] === u
    ? (M = t[25])
    : ((M = (e) => {
        let { x: t, y: n } = e;
        return { x: t / u, y: n / u };
      }),
      (t[24] = u),
      (t[25] = M));
  let N;
  t[26] === a ? (N = t[27]) : ((N = { ...a, asChild: !0 }), (t[26] = a), (t[27] = N));
  let P = y && `opacity-0`,
    ne;
  t[28] !== s || t[29] !== P ? ((ne = ie(s, P)), (t[28] = s), (t[29] = P), (t[30] = ne)) : (ne = t[30]);
  let re = l || y,
    F;
  t[31] === j
    ? (F = t[32])
    : ((F = (e) => {
        e || j();
      }),
      (t[31] = j),
      (t[32] = F));
  let I;
  t[33] === Symbol.for(`react.memo_cache_sentinel`) ? ((I = { y: 0 }), (t[33] = I)) : (I = t[33]);
  let L;
  t[34] === d ? (L = t[35]) : ((L = !d && { y: `100%` }), (t[34] = d), (t[35] = L));
  let R;
  t[36] === p ? (R = t[37]) : ((R = { y: p }), (t[36] = p), (t[37] = R));
  let z;
  t[38] === Symbol.for(`react.memo_cache_sentinel`) ? ((z = { top: 0 }), (t[38] = z)) : (z = t[38]);
  let B;
  t[39] !== f || t[40] !== y || t[41] !== l
    ? ((B = (e) => {
        e.target === e.currentTarget && !l && !y && f.start(e);
      }),
      (t[39] = f),
      (t[40] = y),
      (t[41] = l),
      (t[42] = B))
    : (B = t[42]);
  let V;
  t[43] !== j || t[44] !== p || t[45] !== l || t[46] !== S
    ? ((V = (e, t) => {
        let n = m.current?.offsetHeight ?? 0;
        !l && (p.get() > n / 2 || t.velocity.y > 500) ? j() : (h.current = H(p, 0, S));
      }),
      (t[43] = j),
      (t[44] = p),
      (t[45] = l),
      (t[46] = S),
      (t[47] = V))
    : (V = t[47]);
  let ae;
  t[48] !== i ||
  t[49] !== f ||
  t[50] !== y ||
  t[51] !== L ||
  t[52] !== R ||
  t[53] !== B ||
  t[54] !== V ||
  t[55] !== S
    ? ((ae = (0, Ze.jsx)(te.div, {
        ref: m,
        className: `touch-pan-x`,
        inert: y,
        animate: I,
        initial: L,
        transition: S,
        style: R,
        drag: `y`,
        dragControls: f,
        dragConstraints: z,
        dragElastic: 0,
        dragListener: !1,
        dragMomentum: !1,
        onPointerDown: B,
        onDragEnd: V,
        children: i,
      })),
      (t[48] = i),
      (t[49] = f),
      (t[50] = y),
      (t[51] = L),
      (t[52] = R),
      (t[53] = B),
      (t[54] = V),
      (t[55] = S),
      (t[56] = ae))
    : (ae = t[56]);
  let U;
  t[57] !== c || t[58] !== ne || t[59] !== re || t[60] !== F || t[61] !== ae || t[62] !== N
    ? ((U = (0, Ze.jsx)(le, {
        ...c,
        contentProps: N,
        overlayClassName: ne,
        shouldIgnoreClickOutside: re,
        onOpenChange: F,
        children: ae,
      })),
      (t[57] = c),
      (t[58] = ne),
      (t[59] = re),
      (t[60] = F),
      (t[61] = ae),
      (t[62] = N),
      (t[63] = U))
    : (U = t[63]);
  let oe;
  return (
    t[64] !== U || t[65] !== M
      ? ((oe = (0, Ze.jsx)(Se, { transformPagePoint: M, children: U })),
        (t[64] = U),
        (t[65] = M),
        (t[66] = oe))
      : (oe = t[66]),
    oe
  );
}
var Xe, Q, Ze, Qe;
function $e() {
  return ($e = e(() => {
    ((Xe = W()),
      M(),
      ne(),
      V(),
      we(),
      y(),
      B(),
      v(),
      (Q = Te()),
      s(),
      be(),
      b(),
      (Ze = K()),
      (Qe = { type: `spring`, stiffness: 350, damping: 28, mass: 0.65 }));
  }))();
}
function et(e) {
  let t = (0, ot.c)(134),
    {
      allowCloseWhileSaving: n,
      editor: a,
      canSave: o,
      doneLabel: s,
      isSaving: u,
      isDarkMode: d,
      onRequestClose: p,
      onDone: m,
    } = e,
    h = n !== void 0 && n,
    _ = ee(),
    v = E(),
    [y] = (0, st.useState)(rt),
    [b, x] = (0, st.useState)(null),
    S;
  t[0] === a ? (S = t[1]) : ((S = () => a.getSurfaceBounds()), (t[0] = a), (t[1] = S));
  let [C, w] = (0, st.useState)(S),
    [D, O] = (0, st.useState)(null),
    [A, j] = (0, st.useState)(null),
    M = k(r),
    P;
  t[2] === M ? (P = t[3]) : ((P = () => !M), (t[2] = M), (t[3] = P));
  let [te, ne] = (0, st.useState)(P),
    F = (0, st.useRef)(`pen`),
    I = ke(a),
    L = !o || u,
    R = u && !h,
    z;
  t[4] !== s || t[5] !== _ || t[6] !== u
    ? ((z = u ? _.formatMessage(q.saving) : (s ?? _.formatMessage(q.done))),
      (t[4] = s),
      (t[5] = _),
      (t[6] = u),
      (t[7] = z))
    : (z = t[7]);
  let B = z;
  L && A != null && j(null);
  let ie = L || I.effectiveDocument.objects.length === 0,
    V = d ? `#212121` : `#ffffff`,
    H = C != null && D != null ? Math.min(D.width / C.width, D.height / C.height) : 1,
    U,
    se;
  (t[8] === te
    ? ((U = t[9]), (se = t[10]))
    : ((U = () => {
        if (!te) return;
        let e = window.setTimeout(() => ne(!1), 600);
        return () => window.clearTimeout(e);
      }),
      (se = [te]),
      (t[8] = te),
      (t[9] = U),
      (t[10] = se)),
    (0, st.useEffect)(U, se));
  let ce, ue;
  (t[11] === b
    ? ((ce = t[12]), (ue = t[13]))
    : ((ce = () => {
        if (b == null) return;
        let e = () => {
          let e = b.clientWidth,
            t = b.clientHeight;
          e <= 0 ||
            t <= 0 ||
            (w((n) => n ?? { width: e, height: t }),
            O((n) => (n?.width === e && n.height === t ? n : { width: e, height: t })));
        };
        e();
        let t = new ResizeObserver(e);
        return (t.observe(b), () => t.disconnect());
      }),
      (ue = [b]),
      (t[11] = b),
      (t[12] = ce),
      (t[13] = ue)),
    (0, st.useLayoutEffect)(ce, ue));
  let fe, pe;
  (t[14] !== a || t[15] !== y || t[16] !== I.activeTool || t[17] !== I.selectionId
    ? ((pe = () => {
        y &&
          (Re(I.activeTool)
            ? ((F.current = I.activeTool), I.selectionId != null && a.clearSelection())
            : I.activeTool === `select` && a.setTool(F.current));
      }),
      (fe = [a, y, I.activeTool, I.selectionId]),
      (t[14] = a),
      (t[15] = y),
      (t[16] = I.activeTool),
      (t[17] = I.selectionId),
      (t[18] = fe),
      (t[19] = pe))
    : ((fe = t[18]), (pe = t[19])),
    (0, st.useLayoutEffect)(pe, fe));
  let me;
  t[20] !== V || t[21] !== b || t[22] !== C || t[23] !== v
    ? ((me = (e) => {
        if (b == null || C == null) return null;
        let t = b.getBoundingClientRect(),
          n = b.ownerDocument.defaultView?.visualViewport,
          r = Math.min(t.width / C.width, t.height / C.height);
        return {
          left: (t.left + (n?.offsetLeft ?? 0) + (t.width - C.width * r) / 2 + e.x * r) / v,
          top: (t.top + (n?.offsetTop ?? 0) + (t.height - C.height * r) / 2 + e.y * r) / v,
          width: (e.width * r) / v,
          height: (e.height * r) / v,
          backgroundColor: V,
          borderRadius: 12,
        };
      }),
      (t[20] = V),
      (t[21] = b),
      (t[22] = C),
      (t[23] = v),
      (t[24] = me))
    : (me = t[24]);
  let he = me,
    ge;
  t[25] !== R || t[26] !== p
    ? ((ge = () => {
        R || p();
      }),
      (t[25] = R),
      (t[26] = p),
      (t[27] = ge))
    : (ge = t[27]);
  let _e = ge,
    ve = y ? Ye : le,
    ye = y ? `sheet` : `square`,
    be = y ? `pb-4` : void 0,
    xe = M ? void 0 : `transition-opacity duration-250 starting:opacity-0`,
    Se = R || A != null,
    W;
  t[28] !== y || t[29] !== v
    ? ((W = y ? { height: `calc(70dvh / ${v} + 1rem)` } : void 0), (t[28] = y), (t[29] = v), (t[30] = W))
    : (W = t[30]);
  let G;
  t[31] !== R || t[32] !== a || t[33] !== u
    ? ((G = (e) => {
        let t = a.getSnapshot();
        (R ||
          (!u &&
            e.target instanceof Element &&
            e.target.closest(`[data-sketch-canvas-surface]`) != null &&
            (t.hasActiveGesture ||
              t.hasPendingTextEdit ||
              t.selectionId != null ||
              t.activeTool === `text`))) &&
          e.preventDefault();
      }),
      (t[31] = R),
      (t[32] = a),
      (t[33] = u),
      (t[34] = G))
    : (G = t[34]);
  let K;
  t[35] !== W || t[36] !== G
    ? ((K = {
        "aria-describedby": void 0,
        style: W,
        shouldStopPointerDownPropagation: !1,
        onOpenAutoFocus: nt,
        onEscapeKeyDown: G,
      }),
      (t[35] = W),
      (t[36] = G),
      (t[37] = K))
    : (K = t[37]);
  let we;
  t[38] === _e
    ? (we = t[39])
    : ((we = (e) => {
        e || _e();
      }),
      (t[38] = _e),
      (t[39] = we));
  let Te;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (0, $.jsx)(N, { className: `sr-only`, children: (0, $.jsx)(f, { ...q.title }) })), (t[40] = Te))
    : (Te = t[40]);
  let Ee;
  t[41] !== ie || t[42] !== he || t[43] !== m
    ? ((Ee = (e) => {
        (e.preventDefault(), e.stopPropagation(), ie || m(he));
      }),
      (t[41] = ie),
      (t[42] = he),
      (t[43] = m),
      (t[44] = Ee))
    : (Ee = t[44]);
  let De;
  t[45] === A
    ? (De = t[46])
    : ((De = (e) => {
        A != null &&
          e.target instanceof Element &&
          e.target.closest(`[data-sketch-canvas-surface]`) != null &&
          e.preventDefault();
      }),
      (t[45] = A),
      (t[46] = De));
  let Oe;
  t[47] !== V ||
  t[48] !== b ||
  t[49] !== L ||
  t[50] !== a ||
  t[51] !== H ||
  t[52] !== _ ||
  t[53] !== C ||
  t[54] !== D ||
  t[55] !== v
    ? ((Oe =
        C != null &&
        D != null &&
        (0, $.jsx)(`div`, {
          className: `absolute`,
          style: {
            zoom: 1 / v,
            left: ((D.width - C.width * H) / 2) * v,
            top: ((D.height - C.height * H) / 2) * v,
            width: C.width * H * v,
            height: C.height * H * v,
          },
          children: (0, $.jsx)(Ae, {
            "aria-label": _.formatMessage(q.canvas),
            className: `h-full w-full`,
            backgroundColor: V,
            clipboardScope: b,
            editor: a,
            surfaceSize: C,
            readOnly: L,
          }),
        })),
      (t[47] = V),
      (t[48] = b),
      (t[49] = L),
      (t[50] = a),
      (t[51] = H),
      (t[52] = _),
      (t[53] = C),
      (t[54] = D),
      (t[55] = v),
      (t[56] = Oe))
    : (Oe = t[56]);
  let je;
  t[57] === _ ? (je = t[58]) : ((je = _.formatMessage(q.close)), (t[57] = _), (t[58] = je));
  let Me;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Me = (0, $.jsx)(c, { icon: { 16: re, 20: Ce } })), (t[59] = Me))
    : (Me = t[59]);
  let Pe;
  t[60] !== R || t[61] !== _e || t[62] !== je
    ? ((Pe = (0, $.jsx)(`div`, {
        className: `absolute inset-y-0 start-0 flex items-center`,
        children: (0, $.jsx)(it, { label: je, disabled: R, onClick: _e, children: Me }),
      })),
      (t[60] = R),
      (t[61] = _e),
      (t[62] = je),
      (t[63] = Pe))
    : (Pe = t[63]);
  let J;
  t[64] !== L ||
  t[65] !== a ||
  t[66] !== y ||
  t[67] !== A ||
  t[68] !== I.activeTool ||
  t[69] !== I.hasActiveGesture
    ? ((J =
        (!y || !I.hasActiveGesture) &&
        (0, $.jsx)(Ue, {
          activeTool: I.activeTool,
          disabled: L,
          isMobile: y,
          open: A === `shapes`,
          onOpenChange: (e) => j(e ? `shapes` : null),
          onToolChange: (e) => {
            (a.commitPendingTextEdit(), Re(e) && (F.current = e), a.setTool(e));
          },
        })),
      (t[64] = L),
      (t[65] = a),
      (t[66] = y),
      (t[67] = A),
      (t[68] = I.activeTool),
      (t[69] = I.hasActiveGesture),
      (t[70] = J))
    : (J = t[70]);
  let Y;
  t[71] === _ ? (Y = t[72]) : ((Y = _.formatMessage(q.undo)), (t[71] = _), (t[72] = Y));
  let Fe = L || !I.canUndo,
    Ie;
  t[73] === a
    ? (Ie = t[74])
    : ((Ie = () => {
        (a.commitPendingTextEdit(), a.undo());
      }),
      (t[73] = a),
      (t[74] = Ie));
  let Le;
  t[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Le = (0, $.jsx)(c, { icon: { 16: oe, 20: i } })), (t[75] = Le))
    : (Le = t[75]);
  let ze;
  t[76] !== Y || t[77] !== Fe || t[78] !== Ie
    ? ((ze = (0, $.jsx)(it, { label: Y, disabled: Fe, onClick: Ie, children: Le })),
      (t[76] = Y),
      (t[77] = Fe),
      (t[78] = Ie),
      (t[79] = ze))
    : (ze = t[79]);
  let Be;
  t[80] !== L || t[81] !== a || t[82] !== _ || t[83] !== y || t[84] !== I.canRedo
    ? ((Be =
        !y &&
        (0, $.jsx)(it, {
          label: _.formatMessage(q.redo),
          disabled: L || !I.canRedo,
          onClick: () => {
            (a.commitPendingTextEdit(), a.redo());
          },
          children: (0, $.jsx)(c, { icon: { 16: ae, 20: g } }),
        })),
      (t[80] = L),
      (t[81] = a),
      (t[82] = _),
      (t[83] = y),
      (t[84] = I.canRedo),
      (t[85] = Be))
    : (Be = t[85]);
  let Ve;
  t[86] !== ze || t[87] !== Be
    ? ((Ve = (0, $.jsxs)(`div`, {
        className: `absolute inset-y-0 end-0 flex items-center gap-token-button-composer-gap`,
        children: [ze, Be],
      })),
      (t[86] = ze),
      (t[87] = Be),
      (t[88] = Ve))
    : (Ve = t[88]);
  let He;
  t[89] !== Pe || t[90] !== J || t[91] !== Ve
    ? ((He = (0, $.jsxs)(`div`, {
        className: `pointer-events-none absolute inset-x-button-toolbar-inline top-3 z-30 flex h-token-button-composer items-center justify-center`,
        children: [Pe, J, Ve],
      })),
      (t[89] = Pe),
      (t[90] = J),
      (t[91] = Ve),
      (t[92] = He))
    : (He = t[92]);
  let We = te && !M,
    Ke;
  t[93] !== L || t[94] !== a || t[95] !== I || t[96] !== We
    ? ((Ke = (0, $.jsx)(`div`, {
        className: `pointer-events-none absolute start-button-toolbar-inline top-1/2 z-30 flex w-token-button-composer -translate-y-1/2 justify-center`,
        children: (0, $.jsx)(Ge, {
          className: `pointer-events-auto shrink-0`,
          editor: a,
          snapshot: I,
          disabled: L,
          forceExpanded: We,
        }),
      })),
      (t[93] = L),
      (t[94] = a),
      (t[95] = I),
      (t[96] = We),
      (t[97] = Ke))
    : (Ke = t[97]);
  let X = A === `color`,
    Z;
  t[98] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (e) => j(e ? `color` : null)), (t[98] = Z))
    : (Z = t[98]);
  let qe;
  t[99] !== b || t[100] !== L || t[101] !== a || t[102] !== d || t[103] !== I || t[104] !== X
    ? ((qe = (0, $.jsx)(`div`, {
        className: `horizontal-scroll-fade-mask pointer-events-auto min-w-0 flex-1 [scrollbar-width:none] overflow-x-auto overflow-y-hidden overscroll-x-contain [--edge-fade-distance:1.25rem] @[552px]/sketch-canvas:pointer-events-none @[552px]/sketch-canvas:absolute @[552px]/sketch-canvas:inset-x-0 @[552px]/sketch-canvas:flex @[552px]/sketch-canvas:justify-center`,
        children: (0, $.jsx)(Ne, {
          editor: a,
          snapshot: I,
          disabled: L,
          isDarkMode: d,
          open: X,
          dismissalBoundary: b,
          onOpenChange: Z,
        }),
      })),
      (t[99] = b),
      (t[100] = L),
      (t[101] = a),
      (t[102] = d),
      (t[103] = I),
      (t[104] = X),
      (t[105] = qe))
    : (qe = t[105]);
  let Je;
  t[106] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Je = (0, $.jsx)(c, { icon: { 16: T, 20: l } })), (t[106] = Je))
    : (Je = t[106]);
  let Xe;
  t[107] !== ie || t[108] !== u || t[109] !== B
    ? ((Xe = (0, $.jsx)(`button`, {
        className: `pointer-events-auto ms-auto flex size-token-button-composer shrink-0 cursor-interaction items-center justify-center rounded-full bg-composer-primary p-0 text-composer-primary transition-opacity focus-visible:outline-2 focus-visible:outline-background-composer-primary disabled:cursor-default disabled:opacity-50`,
        "aria-label": B,
        "aria-busy": u,
        disabled: ie,
        title: B,
        type: `submit`,
        onPointerDown: tt,
        children: Je,
      })),
      (t[107] = ie),
      (t[108] = u),
      (t[109] = B),
      (t[110] = Xe))
    : (Xe = t[110]);
  let Q;
  t[111] !== qe || t[112] !== Xe
    ? ((Q = (0, $.jsxs)(`div`, {
        className: `pointer-events-none absolute inset-x-button-toolbar-inline bottom-[calc(0.75rem+env(safe-area-inset-bottom,0px))] z-30 flex h-token-button-composer items-center gap-token-button-composer-gap`,
        children: [qe, Xe],
      })),
      (t[111] = qe),
      (t[112] = Xe),
      (t[113] = Q))
    : (Q = t[113]);
  let Ze;
  t[114] !== De || t[115] !== Oe || t[116] !== He || t[117] !== Ke || t[118] !== Q
    ? ((Ze = (0, $.jsxs)(`div`, {
        ref: x,
        className: `@container/sketch-canvas relative h-full w-full overflow-hidden bg-surface-secondary`,
        onPointerDownCapture: De,
        children: [Oe, He, Ke, Q],
      })),
      (t[114] = De),
      (t[115] = Oe),
      (t[116] = He),
      (t[117] = Ke),
      (t[118] = Q),
      (t[119] = Ze))
    : (Ze = t[119]);
  let Qe;
  t[120] !== u || t[121] !== Ee || t[122] !== Ze
    ? ((Qe = (0, $.jsx)(de, {
        as: `form`,
        variant: `chatgpt`,
        size: `full`,
        "aria-busy": u,
        onSubmit: Ee,
        children: Ze,
      })),
      (t[120] = u),
      (t[121] = Ee),
      (t[122] = Ze),
      (t[123] = Qe))
    : (Qe = t[123]);
  let $e;
  return (
    t[124] !== ve ||
    t[125] !== p ||
    t[126] !== ye ||
    t[127] !== be ||
    t[128] !== xe ||
    t[129] !== Se ||
    t[130] !== K ||
    t[131] !== we ||
    t[132] !== Qe
      ? (($e = (0, $.jsxs)(ve, {
          open: !0,
          onRequestClose: p,
          size: ye,
          contentClassName: be,
          overlayClassName: xe,
          showDialogClose: !1,
          shouldIgnoreClickOutside: Se,
          contentProps: K,
          onOpenChange: we,
          children: [Te, Qe],
        })),
        (t[124] = ve),
        (t[125] = p),
        (t[126] = ye),
        (t[127] = be),
        (t[128] = xe),
        (t[129] = Se),
        (t[130] = K),
        (t[131] = we),
        (t[132] = Qe),
        (t[133] = $e))
      : ($e = t[133]),
    $e
  );
}
function tt(e) {
  return e.preventDefault();
}
function nt(e) {
  (e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus());
}
function rt() {
  return window.matchMedia(`(max-width: 639px)`).matches;
}
function it(e) {
  let n = (0, ot.c)(5),
    { children: r, disabled: i, label: a, onClick: o } = e,
    s;
  return (
    n[0] !== r || n[1] !== i || n[2] !== a || n[3] !== o
      ? ((s = (0, $.jsx)(t, {
          className: `pointer-events-auto *:pointer-events-none`,
          "aria-label": a,
          color: `ghostSecondary`,
          disabled: i,
          radius: `full`,
          size: `composer`,
          title: a,
          type: `button`,
          uniform: !0,
          onPointerDown: at,
          onClick: o,
          children: r,
        })),
        (n[0] = r),
        (n[1] = i),
        (n[2] = a),
        (n[3] = o),
        (n[4] = s))
      : (s = n[4]),
    s
  );
}
function at(e) {
  return e.preventDefault();
}
var ot, st, $;
function ct() {
  return (ct = e(() => {
    ((ot = W()),
      je(),
      v(),
      (st = Te()),
      U(),
      s(),
      he(),
      be(),
      z(),
      w(),
      se(),
      b(),
      Le(),
      Je(),
      Me(),
      $e(),
      He(),
      ($ = K()));
  }))();
}
export { Ue as a, Le as c, We as i, Me as l, ct as n, Je as o, Ge as r, Ne as s, et as t, q as u };
//# sourceMappingURL=editor-2cfd48d71fbe.js.map
