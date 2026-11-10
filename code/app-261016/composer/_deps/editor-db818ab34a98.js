import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AW as t,
  CTt as n,
  DV as r,
  EV as i,
  FBt as a,
  FTt as o,
  Fq as s,
  HO as c,
  IO as l,
  ITt as ee,
  Iq as u,
  JO as d,
  Jz as f,
  LNt as p,
  LTt as m,
  MNt as h,
  MTt as g,
  NNt as _,
  NU as v,
  OV as y,
  PBt as b,
  PU as x,
  QW as S,
  RTt as C,
  SB as w,
  SH as T,
  TV as E,
  TY as D,
  UH as O,
  UJ as k,
  WH as A,
  WJ as j,
  WO as M,
  XOt as N,
  Y3 as te,
  YOt as P,
  Z3 as F,
  ZSt as I,
  ZW as L,
  _D as ne,
  _J as R,
  _Tt as z,
  bB as re,
  bY as ie,
  cV as B,
  cq as V,
  fD as H,
  gD as U,
  iCt as ae,
  jTt as W,
  jW as G,
  lV as K,
  lY as oe,
  lq as se,
  mD as ce,
  mU as le,
  oU as ue,
  okt as de,
  pU as fe,
  qO as pe,
  qz as me,
  sU as he,
  tkt as ge,
  uY as _e,
  vB as ve,
  vJ as ye,
  vTt as be,
  vq as xe,
  wB as q,
  wTt as Se,
  xH as Ce,
  xY as we,
  yq as Te,
} from "./app-shared-2feb3d4c6fcc.js";
import { n as Ee, t as De } from "./drawing-size-slider-ad117f2bc3b3.js";
import { l as Oe, o as ke, t as Ae } from "./sketch-8715d11e5761.js";
var J;
function je() {
  return (je = e(() => {
    (N(),
      (J = P({
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
function Me(e) {
  let t = (0, Ne.c)(93),
    {
      editor: n,
      snapshot: r,
      disabled: i,
      isDarkMode: a,
      open: o,
      dismissalBoundary: s,
      onOpenChange: c,
      compact: l,
      preserveTextFocus: ee,
      onBeforeChange: u,
      onPresetSelect: d,
    } = e,
    f = l !== void 0 && l,
    p = ee !== void 0 && ee,
    m = de(),
    g = (0, Y.useId)(),
    _ = (0, Y.useId)(),
    v = (0, Y.useRef)(0),
    y = (0, Y.useRef)(void 0),
    b = (0, Y.useRef)(null),
    x = (0, Y.useRef)(null),
    S = (0, Y.useRef)(null),
    C = (0, Y.useRef)(null),
    w = a ? Fe : Pe,
    T;
  t[0] !== w || t[1] !== r
    ? ((T = () =>
        w.some((e) => {
          let { color: t } = e;
          return t === r.style.color;
        })
          ? null
          : r.style.color),
      (t[0] = w),
      (t[1] = r),
      (t[2] = T))
    : (T = t[2]);
  let [E, D] = (0, Y.useState)(T),
    O;
  if (t[3] !== w || t[4] !== r) {
    let e;
    (t[6] === r
      ? (e = t[7])
      : ((e = (e) => {
          let { color: t } = e;
          return t === r.style.color;
        }),
        (t[6] = r),
        (t[7] = e)),
      (O = w.some(e)),
      (t[3] = w),
      (t[4] = r),
      (t[5] = O));
  } else O = t[5];
  let k = !O,
    A = k ? r.style.color : E,
    j;
  t[8] !== n || t[9] !== u
    ? ((j = (e, t) => {
        (u?.(), n.setStyle({ color: e }, { historyGroup: t }));
        let r = n.getSnapshot();
        (r.activeTool === `eraser` || (r.activeTool === `select` && r.selectionId == null)) &&
          n.setTool(`pen`);
      }),
      (t[8] = n),
      (t[9] = u),
      (t[10] = j))
    : (j = t[10]);
  let M = j,
    N;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = () => {
        (C.current?.(), (C.current = null), (y.current = void 0));
      }),
      (t[11] = N))
    : (N = t[11]);
  let te = N,
    P;
  t[12] === c
    ? (P = t[13])
    : ((P = () => {
        y.current != null && (te(), c(!1));
      }),
      (t[12] = c),
      (t[13] = P));
  let F = P,
    I;
  t[14] !== F || t[15] !== s || t[16] !== g || t[17] !== c
    ? ((I = () => {
        (te(), (y.current = `${g}-${(v.current += 1)}`), c(!0));
        let e = b.current?.ownerDocument.defaultView,
          t = (e) => {
            let t = e.target;
            if (t instanceof Node && x.current?.contains(t)) return;
            let n = s ?? S.current;
            (((t instanceof Element && t.closest(`[data-sketch-canvas-surface]`) != null) ||
              (n != null && !(t instanceof Node && n.contains(t)))) &&
              (e.preventDefault(), e.stopPropagation()),
              F());
          };
        (e?.addEventListener(`pointerdown`, t, !0),
          (C.current = () => e?.removeEventListener(`pointerdown`, t, !0)));
      }),
      (t[14] = F),
      (t[15] = s),
      (t[16] = g),
      (t[17] = c),
      (t[18] = I))
    : (I = t[18]);
  let L = I,
    ne;
  t[19] === M
    ? (ne = t[20])
    : ((ne = (e) => {
        (D(e), M(e, y.current));
      }),
      (t[19] = M),
      (t[20] = ne));
  let R = ne,
    z = (0, Y.useEffectEvent)(te),
    re = (0, Y.useEffectEvent)(F),
    ie = (0, Y.useEffectEvent)(R),
    B;
  t[21] !== ie || t[22] !== re || t[23] !== z
    ? ((B = () => {
        let e = b.current,
          t = () => re(),
          n = () => {
            (e != null && ie(e.value), re());
          };
        return (
          e?.addEventListener(`cancel`, t),
          e?.addEventListener(`change`, n),
          () => {
            (e?.removeEventListener(`cancel`, t), e?.removeEventListener(`change`, n), z());
          }
        );
      }),
      (t[21] = ie),
      (t[22] = re),
      (t[23] = z),
      (t[24] = B))
    : (B = t[24]);
  let V;
  (t[25] === Symbol.for(`react.memo_cache_sentinel`) ? ((V = []), (t[25] = V)) : (V = t[25]),
    (0, Y.useEffect)(B, V));
  let H;
  t[26] !== i || t[27] !== z || t[28] !== o
    ? ((H = () => {
        (!o || i) && z();
      }),
      (t[26] = i),
      (t[27] = z),
      (t[28] = o),
      (t[29] = H))
    : (H = t[29]);
  let U;
  (t[30] !== i || t[31] !== o ? ((U = [i, o]), (t[30] = i), (t[31] = o), (t[32] = U)) : (U = t[32]),
    (0, Y.useEffect)(H, U));
  let ae = f ? `grid grid-cols-7 p-0` : `flex px-1 py-1 browser:py-1.5`,
    W;
  t[33] === ae
    ? (W = t[34])
    : ((W = h(`pointer-events-auto mx-auto w-max items-center gap-2 border-0 select-none`, ae)),
      (t[33] = ae),
      (t[34] = W));
  let G;
  t[35] === m ? (G = t[36]) : ((G = m.formatMessage(J.colors)), (t[35] = m), (t[36] = G));
  let K;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, X.jsx)(`legend`, { className: `sr-only`, children: (0, X.jsx)(ge, { ...J.colors }) })),
      (t[37] = K))
    : (K = t[37]);
  let oe;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (0, X.jsx)(`span`, { className: `sr-only`, children: (0, X.jsx)(ge, { ...J.customColor }) })),
      (t[38] = oe))
    : (oe = t[38]);
  let se = `sketch-custom-color-${g}`,
    ce = A ?? `#a855f7`,
    le;
  t[39] !== A || t[40] !== L || t[41] !== M
    ? ((le = (e) => {
        (e.stopPropagation(), L(), A != null && M(A, y.current));
      }),
      (t[39] = A),
      (t[40] = L),
      (t[41] = M),
      (t[42] = le))
    : (le = t[42]);
  let ue;
  t[43] !== L || t[44] !== R
    ? ((ue = (e) => {
        (y.current ?? L(), R(e.currentTarget.value));
      }),
      (t[43] = L),
      (t[44] = R),
      (t[45] = ue))
    : (ue = t[45]);
  let fe;
  t[46] !== i || t[47] !== _ || t[48] !== se || t[49] !== ce || t[50] !== le || t[51] !== ue
    ? ((fe = (0, X.jsx)(`input`, {
        ref: b,
        "aria-describedby": _,
        className: `peer absolute inset-0 z-20 m-0 h-full w-full cursor-interaction touch-manipulation border-0 bg-transparent p-0 opacity-0 disabled:cursor-not-allowed`,
        disabled: i,
        name: se,
        type: `color`,
        value: ce,
        onClick: le,
        onInput: ue,
      })),
      (t[46] = i),
      (t[47] = _),
      (t[48] = se),
      (t[49] = ce),
      (t[50] = le),
      (t[51] = ue),
      (t[52] = fe))
    : (fe = t[52]);
  let pe = k
      ? `ring-2 ring-[#2c67c5] ring-offset-2`
      : `peer-enabled:peer-hover:scale-105 peer-enabled:peer-hover:ring-2 peer-enabled:peer-hover:ring-black/15 dark:peer-enabled:peer-hover:ring-white/25`,
    me = a ? `ring-offset-[#212121]` : `ring-offset-white`,
    he;
  t[53] !== pe || t[54] !== me
    ? ((he = h(
        `pointer-events-none relative z-10 size-full rounded-full bg-[conic-gradient(from_210deg,#ff375f_0deg,#ff9f0a_48deg,#ffd60a_92deg,#30d158_142deg,#64d2ff_202deg,#0a84ff_242deg,#5e5ce6_282deg,#bf5af2_324deg,#ff375f_360deg)] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] transition-transform peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#2c67c5] peer-disabled:opacity-50 motion-reduce:transition-none`,
        pe,
        me,
      )),
      (t[53] = pe),
      (t[54] = me),
      (t[55] = he))
    : (he = t[55]);
  let _e;
  t[56] === A
    ? (_e = t[57])
    : ((_e =
        A != null &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(`span`, { className: `absolute inset-[3px] rounded-full bg-white` }),
            (0, X.jsx)(`span`, {
              className: `absolute inset-[5px] rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.18)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]`,
              style: { backgroundColor: A },
            }),
          ],
        })),
      (t[56] = A),
      (t[57] = _e));
  let ve;
  t[58] !== he || t[59] !== _e
    ? ((ve = (0, X.jsx)(`span`, { "aria-hidden": !0, className: he, children: _e })),
      (t[58] = he),
      (t[59] = _e),
      (t[60] = ve))
    : (ve = t[60]);
  let ye;
  t[61] !== fe || t[62] !== ve
    ? ((ye = (0, X.jsxs)(`label`, {
        ref: x,
        className: `relative flex size-5 shrink-0 items-center justify-center rounded-full browser:size-6`,
        children: [oe, fe, ve],
      })),
      (t[61] = fe),
      (t[62] = ve),
      (t[63] = ye))
    : (ye = t[63]);
  let be;
  t[64] === k
    ? (be = t[65])
    : ((be = k
        ? (0, X.jsx)(ge, {
            id: `chatgpt.sketch.composer_modal.color.custom.selected`,
            defaultMessage: `Selected`,
            description: `Accessible state description announced for the custom sketch color swatch when it is the active drawing color. Short status; no placeholders.`,
          })
        : (0, X.jsx)(ge, {
            id: `chatgpt.sketch.composer_modal.color.custom.not_selected`,
            defaultMessage: `Not selected`,
            description: `Accessible state description announced for the custom sketch color swatch when it is not the active drawing color. Short status; no placeholders.`,
          })),
      (t[64] = k),
      (t[65] = be));
  let xe;
  t[66] !== _ || t[67] !== be
    ? ((xe = (0, X.jsx)(`span`, { id: _, className: `sr-only`, children: be })),
      (t[66] = _),
      (t[67] = be),
      (t[68] = xe))
    : (xe = t[68]);
  let q;
  if (
    t[69] !== i ||
    t[70] !== m ||
    t[71] !== a ||
    t[72] !== d ||
    t[73] !== w ||
    t[74] !== p ||
    t[75] !== M ||
    t[76] !== r
  ) {
    let e;
    (t[78] !== i || t[79] !== m || t[80] !== a || t[81] !== d || t[82] !== p || t[83] !== M || t[84] !== r
      ? ((e = (e) => {
          let { color: t, message: n } = e;
          return (0, X.jsx)(
            `button`,
            {
              className: h(
                `size-5 shrink-0 cursor-interaction rounded-full border border-black/20 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2c67c5] disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none browser:size-6 dark:border-white/25`,
                r.style.color === t
                  ? `ring-2 ring-[#2c67c5] ring-offset-2`
                  : `enabled:hover:scale-105 enabled:hover:ring-2 enabled:hover:ring-black/15 dark:enabled:hover:ring-white/25`,
                a ? `ring-offset-[#212121]` : `ring-offset-white`,
              ),
              "aria-label": m.formatMessage(n),
              "aria-pressed": r.style.color === t,
              disabled: i,
              style: { backgroundColor: t },
              type: `button`,
              onPointerDown: (e) => {
                p && e.preventDefault();
              },
              onClick: () => {
                (M(t), d?.());
              },
            },
            t,
          );
        }),
        (t[78] = i),
        (t[79] = m),
        (t[80] = a),
        (t[81] = d),
        (t[82] = p),
        (t[83] = M),
        (t[84] = r),
        (t[85] = e))
      : (e = t[85]),
      (q = w.map(e)),
      (t[69] = i),
      (t[70] = m),
      (t[71] = a),
      (t[72] = d),
      (t[73] = w),
      (t[74] = p),
      (t[75] = M),
      (t[76] = r),
      (t[77] = q));
  } else q = t[77];
  let Se;
  return (
    t[86] !== i || t[87] !== W || t[88] !== G || t[89] !== ye || t[90] !== xe || t[91] !== q
      ? ((Se = (0, X.jsxs)(`fieldset`, {
          ref: S,
          className: W,
          "aria-label": G,
          disabled: i,
          children: [K, ye, xe, q],
        })),
        (t[86] = i),
        (t[87] = W),
        (t[88] = G),
        (t[89] = ye),
        (t[90] = xe),
        (t[91] = q),
        (t[92] = Se))
      : (Se = t[92]),
    Se
  );
}
var Ne, Y, X, Pe, Fe;
function Ie() {
  return (Ie = e(() => {
    ((Ne = b()),
      _(),
      (Y = a()),
      N(),
      je(),
      (X = p()),
      (Pe = [
        { color: `#000000`, message: J.black },
        { color: `#6b7280`, message: J.gray },
        { color: `#92400e`, message: J.brown },
        { color: `#dc2626`, message: J.red },
        { color: `#f97316`, message: J.orange },
        { color: `#f59e0b`, message: J.yellow },
        { color: `#16a34a`, message: J.green },
        { color: `#0d9488`, message: J.teal },
        { color: `#06b6d4`, message: J.cyan },
        { color: `#2563eb`, message: J.blue },
        { color: `#4f46e5`, message: J.indigo },
        { color: `#9333ea`, message: J.purple },
        { color: `#db2777`, message: J.pink },
      ]),
      (Fe = [{ color: `#ffffff`, message: J.white }, ...Pe.slice(1)]));
  }))();
}
function Le(e) {
  return e !== `select` && e !== `text` && e !== `comment`;
}
var Re, ze, Be;
function Ve() {
  return (Ve = e(() => {
    ((Re = [`line`, `arrow`, `rectangle`, `ellipse`, `triangle`, `diamond`, `star`, `heart`]),
      (ze = [`select`, `pen`, `text`, `shapes`, `eraser`]),
      (Be = [`pen`, `shapes`, `eraser`]));
  }))();
}
function He(e) {
  let t = (0, Ge.c)(35),
    {
      activeTool: n,
      disabled: r,
      isMobile: i,
      isUnifiedViewerEnabled: a,
      open: o,
      onOpenChange: s,
      onToolChange: c,
      tools: l,
      leadingControls: ee,
      children: u,
      trailingControls: d,
    } = e,
    f = a !== void 0 && a,
    p = l === void 0 ? (i ? Be : ze) : l,
    m = de(),
    h = (0, Ke.useRef)(!1),
    g = (0, Ke.useRef)(null),
    _;
  t[0] === s ? (_ = t[1]) : ((_ = () => s(!1)), (t[0] = s), (t[1] = _));
  let v = (0, Ke.useEffectEvent)(_),
    y;
  t[2] === v ? (y = t[3]) : ((y = () => () => v()), (t[2] = v), (t[3] = y));
  let b;
  (t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = []), (t[4] = b)) : (b = t[4]),
    (0, Ke.useEffect)(y, b));
  let x;
  t[5] !== v || t[6] !== r || t[7] !== o
    ? ((x = () => {
        let e = g.current;
        if (!o || r || e == null) return;
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
              v());
          };
        return (t.addEventListener(`pointerdown`, i, !0), () => t.removeEventListener(`pointerdown`, i, !0));
      }),
      (t[5] = v),
      (t[6] = r),
      (t[7] = o),
      (t[8] = x))
    : (x = t[8]);
  let S;
  (t[9] !== r || t[10] !== o ? ((S = [r, o]), (t[9] = r), (t[10] = o), (t[11] = S)) : (S = t[11]),
    (0, Ke.useEffect)(x, S));
  let C;
  t[12] === m ? (C = t[13]) : ((C = m.formatMessage(J.tools)), (t[12] = m), (t[13] = C));
  let T = f
      ? `flex min-w-0 items-center`
      : `flex max-w-full items-center gap-0.5 rounded-full border border-default bg-surface-elevated p-1 text-default shadow-sm`,
    E;
  t[14] !== n ||
  t[15] !== r ||
  t[16] !== m ||
  t[17] !== i ||
  t[18] !== f ||
  t[19] !== s ||
  t[20] !== c ||
  t[21] !== o ||
  t[22] !== p
    ? ((E = p.map((e) =>
        e === `shapes`
          ? (0, Z.jsxs)(
              H,
              {
                open: o && !r,
                onOpenChange: s,
                children: [
                  (0, Z.jsx)(U, {
                    asChild: !0,
                    children: (0, Z.jsx)(Ue, {
                      ref: g,
                      isUnifiedViewerEnabled: f,
                      "aria-label": m.formatMessage(J.shapes),
                      "aria-pressed": Re.some((e) => e === n),
                      disabled: r,
                      title: m.formatMessage(J.shapes),
                      onPointerDown: (e) => {
                        ((h.current = !0), e.preventDefault(), i && s(!o));
                      },
                      onClick: (e) => {
                        (e.preventDefault(),
                          e.stopPropagation(),
                          e.detail === 0 ? ((h.current = !1), s(!o)) : i || s(!o));
                      },
                      onKeyDown: () => {
                        h.current = !1;
                      },
                      children: (0, Z.jsx)(w, { icon: { 16: xe, 20: Te } }),
                    }),
                  }),
                  (0, Z.jsx)(ce, {
                    "aria-label": m.formatMessage(J.shapes),
                    align: `center`,
                    collisionPadding: 10,
                    opaque: !0,
                    side: f ? `top` : `bottom`,
                    sideOffset: 4,
                    size: `content`,
                    onEscapeKeyDown: (e) => {
                      (e.stopPropagation(), (h.current = !1));
                    },
                    onKeyDown: () => {
                      h.current = !1;
                    },
                    onOpenAutoFocus: (e) => {
                      h.current && e.preventDefault();
                    },
                    onCloseAutoFocus: (e) => {
                      (!i && h.current && e.preventDefault(), (h.current = !1));
                    },
                    children: (0, Z.jsx)(`div`, {
                      className: `grid grid-cols-4 grid-rows-2 gap-0.5`,
                      children: Re.map((e) =>
                        (0, Z.jsx)(
                          Ue,
                          {
                            "aria-label": m.formatMessage(J[e]),
                            "aria-pressed": n === e,
                            disabled: r,
                            title: m.formatMessage(J[e]),
                            onPointerDown: (e) => {
                              i || e.preventDefault();
                            },
                            onClick: () => {
                              (i && (h.current = !1), c(e), s(!1));
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
              Ue,
              {
                isUnifiedViewerEnabled: f,
                "aria-label": m.formatMessage(J[e]),
                "aria-pressed": n === e,
                disabled: r,
                title: m.formatMessage(J[e]),
                onPointerDown: (e) => {
                  i || e.preventDefault();
                },
                onClick: () => c(e),
                children: qe[e],
              },
              e,
            ),
      )),
      (t[14] = n),
      (t[15] = r),
      (t[16] = m),
      (t[17] = i),
      (t[18] = f),
      (t[19] = s),
      (t[20] = c),
      (t[21] = o),
      (t[22] = p),
      (t[23] = E))
    : (E = t[23]);
  let D;
  t[24] !== u || t[25] !== ee || t[26] !== E
    ? ((D = (0, Z.jsxs)(`div`, {
        className: `no-scrollbar flex min-w-0 items-center gap-0.5 overflow-x-auto`,
        children: [ee, E, u],
      })),
      (t[24] = u),
      (t[25] = ee),
      (t[26] = E),
      (t[27] = D))
    : (D = t[27]);
  let O;
  t[28] !== D || t[29] !== T || t[30] !== d
    ? ((O = (0, Z.jsxs)(`div`, { className: T, children: [D, d] })),
      (t[28] = D),
      (t[29] = T),
      (t[30] = d),
      (t[31] = O))
    : (O = t[31]);
  let k;
  return (
    t[32] !== O || t[33] !== C
      ? ((k = (0, Z.jsx)(`fieldset`, {
          className: `pointer-events-auto m-0 min-w-0 border-0 p-0 select-none`,
          "aria-label": C,
          children: O,
        })),
        (t[32] = O),
        (t[33] = C),
        (t[34] = k))
      : (k = t[34]),
    k
  );
}
function Ue(e) {
  let t = (0, Ge.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ isUnifiedViewerEnabled: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = r !== void 0 && r,
    a = n[`aria-pressed`] === !0 ? `segmentedSelected` : `ghostSecondary`,
    o = i ? `large` : `full`,
    s = i ? `imageToolbar` : `composer`,
    c;
  return (
    t[3] !== n || t[4] !== a || t[5] !== o || t[6] !== s
      ? ((c = (0, Z.jsx)(te, { ...n, color: a, radius: o, size: s, type: `button`, uniform: !0 })),
        (t[3] = n),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function We(e) {
  let t = (0, Ge.c)(59),
    { className: n, editor: r, forceExpanded: i, snapshot: a, disabled: o, viewportScale: s } = e,
    c = s === void 0 ? 1 : s,
    l = de(),
    ee = (0, Ke.useId)(),
    u = (0, Ke.useRef)(0),
    d = (0, Ke.useRef)(void 0),
    [f, p] = (0, Ke.useState)(null),
    m,
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
    E;
  if (
    t[0] !== n ||
    t[1] !== l ||
    t[2] !== f ||
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
      (C = a.document.objects.find(e)),
      (v = a.activeTool === `text` || C?.kind === `text`),
      (_ = a.activeTool === `eraser`),
      (g = !_ && C?.kind === `ink`),
      (h = a.activeTool === `comment` || C?.kind === `comment`),
      t[27] !== h || t[28] !== v || t[29] !== a.drawingWidthPx || t[30] !== a.textSizePx
        ? ((S = h ? void 0 : a.drawingWidthPx),
          v && (S = a.textSizePx),
          (t[27] = h),
          (t[28] = v),
          (t[29] = a.drawingWidthPx),
          (t[30] = a.textSizePx),
          (t[31] = S))
        : (S = t[31]),
      (E = a.style.width),
      _ ? (E = a.eraserSizePx) : S != null && (E = C == null ? S : a.style.width * c));
    let r = `stroke`;
    if (
      (_ ? (r = `eraser`) : v && (r = `text`),
      (x = {
        stroke: {
          min: Math.min(S == null ? 2 : 1, E),
          max: Math.max(S == null ? 48 : 32, E),
          name: `sketch-stroke-width`,
          label: J.strokeWidth,
        },
        text: { min: Math.min(8, E), max: Math.max(128, E), name: `sketch-text-size`, label: J.textSize },
        eraser: { min: 4, max: 96, name: `sketch-eraser-size`, label: J.eraserSize },
      }[r]),
      ({ min: b, max: y } = x),
      !_ && (C != null || a.hasPendingTextEdit))
    ) {
      let e = C?.id ?? null,
        t = f?.objectId === e && f.viewportScale === c;
      (t && ((b = Math.min(b, f.min)), (y = Math.max(y, f.max))),
        (!t || f.min !== b || f.max !== y) && p({ objectId: e, viewportScale: c, min: b, max: y }));
    } else f != null && p(null);
    ((m = De),
      (w = n),
      (T = l.formatMessage(x.label)),
      (t[0] = n),
      (t[1] = l),
      (t[2] = f),
      (t[3] = a.activeTool),
      (t[4] = a.document.objects),
      (t[5] = a.drawingWidthPx),
      (t[6] = a.eraserSizePx),
      (t[7] = a.hasPendingTextEdit),
      (t[8] = a.selectionId),
      (t[9] = a.style.width),
      (t[10] = a.textSizePx),
      (t[11] = c),
      (t[12] = m),
      (t[13] = h),
      (t[14] = g),
      (t[15] = _),
      (t[16] = v),
      (t[17] = y),
      (t[18] = b),
      (t[19] = x),
      (t[20] = S),
      (t[21] = C),
      (t[22] = w),
      (t[23] = T),
      (t[24] = E));
  } else
    ((m = t[12]),
      (h = t[13]),
      (g = t[14]),
      (_ = t[15]),
      (v = t[16]),
      (y = t[17]),
      (b = t[18]),
      (x = t[19]),
      (S = t[20]),
      (C = t[21]),
      (w = t[22]),
      (T = t[23]),
      (E = t[24]));
  let D = o || g || (!_ && h),
    O;
  t[32] !== l || t[33] !== g
    ? ((O = g
        ? l.formatMessage({
            id: `chatgpt.sketch.composer_modal.stroke_width.erased_help_text`,
            defaultMessage: `Width cannot be changed after partial erasing. Use the selection handles to resize.`,
            description: `Tooltip on the disabled stroke-width slider in Sketch and image Markup when the selected drawing has been partially erased. Erasing preserves the remaining painted shape but removes its editable stroke path, so users can resize it with the handles around the selection instead. Width means the thickness of the drawn line. Two short explanatory sentences; no placeholders.`,
          })
        : void 0),
      (t[32] = l),
      (t[33] = g),
      (t[34] = O))
    : (O = t[34]);
  let k;
  t[35] === ee
    ? (k = t[36])
    : ((k = () => {
        d.current = `${ee}-${(u.current += 1)}`;
      }),
      (t[35] = ee),
      (t[36] = k));
  let A;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = () => {
        d.current = void 0;
      }),
      (t[37] = A))
    : (A = t[37]);
  let j;
  t[38] !== r || t[39] !== _ || t[40] !== v || t[41] !== S || t[42] !== C || t[43] !== c
    ? ((j = (e) => {
        _
          ? r.setEraserSize(e)
          : S != null && C == null
            ? v
              ? r.setTextSize(e)
              : r.setDrawingWidth(e)
            : r.setStyle({ width: S == null ? e : e / c }, { historyGroup: d.current });
      }),
      (t[38] = r),
      (t[39] = _),
      (t[40] = v),
      (t[41] = S),
      (t[42] = C),
      (t[43] = c),
      (t[44] = j))
    : (j = t[44]);
  let M;
  return (
    t[45] !== m ||
    t[46] !== i ||
    t[47] !== v ||
    t[48] !== y ||
    t[49] !== b ||
    t[50] !== x.name ||
    t[51] !== w ||
    t[52] !== T ||
    t[53] !== D ||
    t[54] !== O ||
    t[55] !== k ||
    t[56] !== j ||
    t[57] !== E
      ? ((M = (0, Z.jsx)(m, {
          className: w,
          "aria-label": T,
          disabled: D,
          forceExpanded: i,
          min: b,
          max: y,
          name: x.name,
          preserveTextFocus: v,
          title: O,
          value: E,
          onInteractionStart: k,
          onInteractionEnd: A,
          onValueChange: j,
        })),
        (t[45] = m),
        (t[46] = i),
        (t[47] = v),
        (t[48] = y),
        (t[49] = b),
        (t[50] = x.name),
        (t[51] = w),
        (t[52] = T),
        (t[53] = D),
        (t[54] = O),
        (t[55] = k),
        (t[56] = j),
        (t[57] = E),
        (t[58] = M))
      : (M = t[58]),
    M
  );
}
var Ge, Ke, Z, qe;
function Je() {
  return (Je = e(() => {
    ((Ge = b()),
      Ae(),
      (Ke = a()),
      N(),
      F(),
      Ee(),
      D(),
      ne(),
      q(),
      je(),
      Ve(),
      (Z = p()),
      (qe = {
        select: (0, Z.jsx)(w, { className: `translate-x-px translate-y-px`, icon: { 16: ue, 20: he } }),
        text: (0, Z.jsx)(w, { icon: { 16: k, 20: j } }),
        pen: (0, Z.jsx)(w, { icon: { 16: s, 20: u } }),
        eraser: (0, Z.jsx)(w, { icon: { 16: v, 20: x } }),
        line: (0, Z.jsx)(w, { icon: { 16: L, 20: S } }),
        arrow: (0, Z.jsx)(w, { icon: { 16: B, 20: K } }),
        rectangle: (0, Z.jsx)(w, { icon: { 16: V, 20: se } }),
        ellipse: (0, Z.jsx)(w, { icon: { 16: O, 20: A } }),
        triangle: (0, Z.jsx)(w, { icon: { 16: oe, 20: _e } }),
        diamond: (0, Z.jsx)(w, { icon: { 16: fe, 20: le } }),
        star: (0, Z.jsx)(w, { icon: { 16: R, 20: ye } }),
        heart: (0, Z.jsx)(w, { icon: { 16: t, 20: G } }),
      }));
  }))();
}
function Ye(e) {
  let t = (0, Xe.c)(67),
    r,
    i,
    a,
    o,
    s,
    c;
  t[0] === e
    ? ((r = t[1]), (i = t[2]), (a = t[3]), (o = t[4]), (s = t[5]), (c = t[6]))
    : (({
        children: r,
        contentProps: i,
        overlayClassName: o,
        shouldIgnoreClickOutside: c,
        onRequestClose: a,
        ...s
      } = e),
      (t[0] = e),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c));
  let l = re(),
    u = ae(f),
    d = be(),
    p = g(0),
    _ = (0, Q.useRef)(null),
    v = (0, Q.useRef)(null),
    y = (0, Q.useRef)(0),
    b = (0, Q.useRef)(c),
    x = (0, Q.useRef)(null),
    [S, C] = (0, Q.useState)(!1),
    w;
  t[7] === u ? (w = t[8]) : ((w = u ? { duration: 0 } : Qe), (t[7] = u), (t[8] = w));
  let T = w,
    E,
    D;
  (t[9] === c
    ? ((E = t[10]), (D = t[11]))
    : ((E = () => {
        b.current = c;
      }),
      (D = [c]),
      (t[9] = c),
      (t[10] = E),
      (t[11] = D)),
    (0, Q.useLayoutEffect)(E, D));
  let O, k;
  (t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = () => () => {
        ((y.current += 1), v.current?.stop(), x.current != null && cancelAnimationFrame(x.current));
      }),
      (k = []),
      (t[12] = O),
      (t[13] = k))
    : ((O = t[12]), (k = t[13])),
    (0, Q.useEffect)(O, k));
  let A;
  t[14] !== p || t[15] !== T
    ? ((A = () => {
        (C(!1), (v.current = n(p, 0, T)), (x.current = requestAnimationFrame(() => _.current?.focus())));
      }),
      (t[14] = p),
      (t[15] = T),
      (t[16] = A))
    : (A = t[16]);
  let j = A,
    N;
  t[17] !== S || t[18] !== p || t[19] !== a || t[20] !== j || t[21] !== c || t[22] !== T
    ? ((N = async () => {
        if (c || S || _.current == null) return;
        C(!0);
        let e = (y.current += 1);
        if (((v.current = n(p, _.current.offsetHeight, T)), await v.current, e === y.current)) {
          if (b.current) {
            j();
            return;
          }
          a(j);
        }
      }),
      (t[17] = S),
      (t[18] = p),
      (t[19] = a),
      (t[20] = j),
      (t[21] = c),
      (t[22] = T),
      (t[23] = N))
    : (N = t[23]);
  let te = N,
    P;
  t[24] === l
    ? (P = t[25])
    : ((P = (e) => {
        let { x: t, y: n } = e;
        return { x: t / l, y: n / l };
      }),
      (t[24] = l),
      (t[25] = P));
  let F;
  t[26] === i ? (F = t[27]) : ((F = { ...i, asChild: !0 }), (t[26] = i), (t[27] = F));
  let I = S && `opacity-0`,
    L;
  t[28] !== o || t[29] !== I ? ((L = h(o, I)), (t[28] = o), (t[29] = I), (t[30] = L)) : (L = t[30]);
  let ne = c || S,
    R;
  t[31] === te
    ? (R = t[32])
    : ((R = (e) => {
        e || te();
      }),
      (t[31] = te),
      (t[32] = R));
  let z;
  t[33] === Symbol.for(`react.memo_cache_sentinel`) ? ((z = { y: 0 }), (t[33] = z)) : (z = t[33]);
  let ie;
  t[34] === u ? (ie = t[35]) : ((ie = !u && { y: `100%` }), (t[34] = u), (t[35] = ie));
  let B;
  t[36] === p ? (B = t[37]) : ((B = { y: p }), (t[36] = p), (t[37] = B));
  let V;
  t[38] === Symbol.for(`react.memo_cache_sentinel`) ? ((V = { top: 0 }), (t[38] = V)) : (V = t[38]);
  let H;
  t[39] !== d || t[40] !== S || t[41] !== c
    ? ((H = (e) => {
        e.target === e.currentTarget && !c && !S && d.start(e);
      }),
      (t[39] = d),
      (t[40] = S),
      (t[41] = c),
      (t[42] = H))
    : (H = t[42]);
  let U;
  t[43] !== te || t[44] !== p || t[45] !== c || t[46] !== T
    ? ((U = (e, t) => {
        let r = _.current?.offsetHeight ?? 0;
        !c && (p.get() > r / 2 || t.velocity.y > 500) ? te() : (v.current = n(p, 0, T));
      }),
      (t[43] = te),
      (t[44] = p),
      (t[45] = c),
      (t[46] = T),
      (t[47] = U))
    : (U = t[47]);
  let W;
  t[48] !== r ||
  t[49] !== d ||
  t[50] !== S ||
  t[51] !== ie ||
  t[52] !== B ||
  t[53] !== H ||
  t[54] !== U ||
  t[55] !== T
    ? ((W = (0, Ze.jsx)(ee.div, {
        ref: _,
        className: `touch-pan-x`,
        inert: S,
        animate: z,
        initial: ie,
        transition: T,
        style: B,
        drag: `y`,
        dragControls: d,
        dragConstraints: V,
        dragElastic: 0,
        dragListener: !1,
        dragMomentum: !1,
        onPointerDown: H,
        onDragEnd: U,
        children: r,
      })),
      (t[48] = r),
      (t[49] = d),
      (t[50] = S),
      (t[51] = ie),
      (t[52] = B),
      (t[53] = H),
      (t[54] = U),
      (t[55] = T),
      (t[56] = W))
    : (W = t[56]);
  let G;
  t[57] !== s || t[58] !== L || t[59] !== ne || t[60] !== R || t[61] !== W || t[62] !== F
    ? ((G = (0, Ze.jsx)(M, {
        ...s,
        contentProps: F,
        overlayClassName: L,
        shouldIgnoreClickOutside: ne,
        onOpenChange: R,
        children: W,
      })),
      (t[57] = s),
      (t[58] = L),
      (t[59] = ne),
      (t[60] = R),
      (t[61] = W),
      (t[62] = F),
      (t[63] = G))
    : (G = t[63]);
  let K;
  return (
    t[64] !== G || t[65] !== P
      ? ((K = (0, Ze.jsx)(m, { transformPagePoint: P, children: G })), (t[64] = G), (t[65] = P), (t[66] = K))
      : (K = t[66]),
    K
  );
}
var Xe, Q, Ze, Qe;
function $e() {
  return ($e = e(() => {
    ((Xe = b()),
      _(),
      Se(),
      o(),
      C(),
      z(),
      W(),
      I(),
      (Q = a()),
      ve(),
      d(),
      me(),
      (Ze = p()),
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
      isSaving: c,
      isDarkMode: ee,
      onRequestClose: u,
      onDone: d,
    } = e,
    p = n !== void 0 && n,
    m = de(),
    h = re(),
    [g] = (0, st.useState)(rt),
    [_, v] = (0, st.useState)(null),
    b;
  t[0] === a ? (b = t[1]) : ((b = () => a.getSurfaceBounds()), (t[0] = a), (t[1] = b));
  let [x, S] = (0, st.useState)(b),
    [C, D] = (0, st.useState)(null),
    [O, k] = (0, st.useState)(null),
    A = ae(f),
    j;
  t[2] === A ? (j = t[3]) : ((j = () => !A), (t[2] = A), (t[3] = j));
  let [N, te] = (0, st.useState)(j),
    P = (0, st.useRef)(`pen`),
    F = Oe(a),
    I = !o || c,
    L = c && !p,
    ne;
  t[4] !== s || t[5] !== m || t[6] !== c
    ? ((ne = c ? m.formatMessage(J.saving) : (s ?? m.formatMessage(J.done))),
      (t[4] = s),
      (t[5] = m),
      (t[6] = c),
      (t[7] = ne))
    : (ne = t[7]);
  let R = ne;
  I && O != null && k(null);
  let z = I || F.effectiveDocument.objects.length === 0,
    B = ee ? `#212121` : `#ffffff`,
    V = x != null && C != null ? Math.min(C.width / x.width, C.height / x.height) : 1,
    H,
    U;
  (t[8] === N
    ? ((H = t[9]), (U = t[10]))
    : ((H = () => {
        if (!N) return;
        let e = window.setTimeout(() => te(!1), 600);
        return () => window.clearTimeout(e);
      }),
      (U = [N]),
      (t[8] = N),
      (t[9] = H),
      (t[10] = U)),
    (0, st.useEffect)(H, U));
  let W, G;
  (t[11] === _
    ? ((W = t[12]), (G = t[13]))
    : ((W = () => {
        if (_ == null) return;
        let e = () => {
          let e = _.clientWidth,
            t = _.clientHeight;
          e <= 0 ||
            t <= 0 ||
            (S((n) => n ?? { width: e, height: t }),
            D((n) => (n?.width === e && n.height === t ? n : { width: e, height: t })));
        };
        e();
        let t = new ResizeObserver(e);
        return (t.observe(_), () => t.disconnect());
      }),
      (G = [_]),
      (t[11] = _),
      (t[12] = W),
      (t[13] = G)),
    (0, st.useLayoutEffect)(W, G));
  let K, oe;
  (t[14] !== a || t[15] !== g || t[16] !== F.activeTool || t[17] !== F.selectionId
    ? ((oe = () => {
        g &&
          (Le(F.activeTool)
            ? ((P.current = F.activeTool), F.selectionId != null && a.clearSelection())
            : F.activeTool === `select` && a.setTool(P.current));
      }),
      (K = [a, g, F.activeTool, F.selectionId]),
      (t[14] = a),
      (t[15] = g),
      (t[16] = F.activeTool),
      (t[17] = F.selectionId),
      (t[18] = K),
      (t[19] = oe))
    : ((K = t[18]), (oe = t[19])),
    (0, st.useLayoutEffect)(oe, K));
  let se;
  t[20] !== B || t[21] !== _ || t[22] !== x || t[23] !== h
    ? ((se = (e) => {
        if (_ == null || x == null) return null;
        let t = _.getBoundingClientRect(),
          n = _.ownerDocument.defaultView?.visualViewport,
          r = Math.min(t.width / x.width, t.height / x.height);
        return {
          left: (t.left + (n?.offsetLeft ?? 0) + (t.width - x.width * r) / 2 + e.x * r) / h,
          top: (t.top + (n?.offsetTop ?? 0) + (t.height - x.height * r) / 2 + e.y * r) / h,
          width: (e.width * r) / h,
          height: (e.height * r) / h,
          backgroundColor: B,
          borderRadius: 12,
        };
      }),
      (t[20] = B),
      (t[21] = _),
      (t[22] = x),
      (t[23] = h),
      (t[24] = se))
    : (se = t[24]);
  let ce = se,
    le;
  t[25] !== L || t[26] !== u
    ? ((le = () => {
        L || u();
      }),
      (t[25] = L),
      (t[26] = u),
      (t[27] = le))
    : (le = t[27]);
  let ue = le,
    fe = g ? Ye : M,
    me = g ? `sheet` : `square`,
    he = g ? `pb-4` : void 0,
    _e = A ? void 0 : `transition-opacity duration-250 starting:opacity-0`,
    ve = L || O != null,
    ye;
  t[28] !== g || t[29] !== h
    ? ((ye = g ? { height: `calc(70dvh / ${h} + 1rem)` } : void 0), (t[28] = g), (t[29] = h), (t[30] = ye))
    : (ye = t[30]);
  let be;
  t[31] !== L || t[32] !== a || t[33] !== c
    ? ((be = (e) => {
        let t = a.getSnapshot();
        (L ||
          (!c &&
            e.target instanceof Element &&
            e.target.closest(`[data-sketch-canvas-surface]`) != null &&
            (t.hasActiveGesture ||
              t.hasPendingTextEdit ||
              t.selectionId != null ||
              t.activeTool === `text`))) &&
          e.preventDefault();
      }),
      (t[31] = L),
      (t[32] = a),
      (t[33] = c),
      (t[34] = be))
    : (be = t[34]);
  let xe;
  t[35] !== ye || t[36] !== be
    ? ((xe = {
        "aria-describedby": void 0,
        style: ye,
        shouldStopPointerDownPropagation: !1,
        onOpenAutoFocus: nt,
        onEscapeKeyDown: be,
      }),
      (t[35] = ye),
      (t[36] = be),
      (t[37] = xe))
    : (xe = t[37]);
  let q;
  t[38] === ue
    ? (q = t[39])
    : ((q = (e) => {
        e || ue();
      }),
      (t[38] = ue),
      (t[39] = q));
  let Se;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (0, $.jsx)(pe, { className: `sr-only`, children: (0, $.jsx)(ge, { ...J.title }) })),
      (t[40] = Se))
    : (Se = t[40]);
  let Te;
  t[41] !== z || t[42] !== ce || t[43] !== d
    ? ((Te = (e) => {
        (e.preventDefault(), e.stopPropagation(), z || d(ce));
      }),
      (t[41] = z),
      (t[42] = ce),
      (t[43] = d),
      (t[44] = Te))
    : (Te = t[44]);
  let Ee;
  t[45] === O
    ? (Ee = t[46])
    : ((Ee = (e) => {
        O != null &&
          e.target instanceof Element &&
          e.target.closest(`[data-sketch-canvas-surface]`) != null &&
          e.preventDefault();
      }),
      (t[45] = O),
      (t[46] = Ee));
  let De;
  t[47] !== B ||
  t[48] !== _ ||
  t[49] !== I ||
  t[50] !== a ||
  t[51] !== V ||
  t[52] !== m ||
  t[53] !== x ||
  t[54] !== C ||
  t[55] !== h
    ? ((De =
        x != null &&
        C != null &&
        (0, $.jsx)(`div`, {
          className: `absolute`,
          style: {
            zoom: 1 / h,
            left: ((C.width - x.width * V) / 2) * h,
            top: ((C.height - x.height * V) / 2) * h,
            width: x.width * V * h,
            height: x.height * V * h,
          },
          children: (0, $.jsx)(ke, {
            "aria-label": m.formatMessage(J.canvas),
            className: `h-full w-full`,
            backgroundColor: B,
            clipboardScope: _,
            editor: a,
            surfaceSize: x,
            readOnly: I,
          }),
        })),
      (t[47] = B),
      (t[48] = _),
      (t[49] = I),
      (t[50] = a),
      (t[51] = V),
      (t[52] = m),
      (t[53] = x),
      (t[54] = C),
      (t[55] = h),
      (t[56] = De))
    : (De = t[56]);
  let Ae;
  t[57] === m ? (Ae = t[58]) : ((Ae = m.formatMessage(J.close)), (t[57] = m), (t[58] = Ae));
  let je;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = (0, $.jsx)(w, { icon: { 16: ie, 20: we } })), (t[59] = je))
    : (je = t[59]);
  let Ne;
  t[60] !== L || t[61] !== ue || t[62] !== Ae
    ? ((Ne = (0, $.jsx)(`div`, {
        className: `absolute inset-y-0 start-0 flex items-center`,
        children: (0, $.jsx)(it, { label: Ae, disabled: L, onClick: ue, children: je }),
      })),
      (t[60] = L),
      (t[61] = ue),
      (t[62] = Ae),
      (t[63] = Ne))
    : (Ne = t[63]);
  let Y;
  t[64] !== I ||
  t[65] !== a ||
  t[66] !== g ||
  t[67] !== O ||
  t[68] !== F.activeTool ||
  t[69] !== F.hasActiveGesture
    ? ((Y =
        (!g || !F.hasActiveGesture) &&
        (0, $.jsx)(He, {
          activeTool: F.activeTool,
          disabled: I,
          isMobile: g,
          open: O === `shapes`,
          onOpenChange: (e) => k(e ? `shapes` : null),
          onToolChange: (e) => {
            (a.commitPendingTextEdit(), Le(e) && (P.current = e), a.setTool(e));
          },
        })),
      (t[64] = I),
      (t[65] = a),
      (t[66] = g),
      (t[67] = O),
      (t[68] = F.activeTool),
      (t[69] = F.hasActiveGesture),
      (t[70] = Y))
    : (Y = t[70]);
  let X;
  t[71] === m ? (X = t[72]) : ((X = m.formatMessage(J.undo)), (t[71] = m), (t[72] = X));
  let Pe = I || !F.canUndo,
    Fe;
  t[73] === a
    ? (Fe = t[74])
    : ((Fe = () => {
        (a.commitPendingTextEdit(), a.undo());
      }),
      (t[73] = a),
      (t[74] = Fe));
  let Ie;
  t[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = (0, $.jsx)(w, { icon: { 16: E, 20: i } })), (t[75] = Ie))
    : (Ie = t[75]);
  let Re;
  t[76] !== X || t[77] !== Pe || t[78] !== Fe
    ? ((Re = (0, $.jsx)(it, { label: X, disabled: Pe, onClick: Fe, children: Ie })),
      (t[76] = X),
      (t[77] = Pe),
      (t[78] = Fe),
      (t[79] = Re))
    : (Re = t[79]);
  let ze;
  t[80] !== I || t[81] !== a || t[82] !== m || t[83] !== g || t[84] !== F.canRedo
    ? ((ze =
        !g &&
        (0, $.jsx)(it, {
          label: m.formatMessage(J.redo),
          disabled: I || !F.canRedo,
          onClick: () => {
            (a.commitPendingTextEdit(), a.redo());
          },
          children: (0, $.jsx)(w, { icon: { 16: r, 20: y } }),
        })),
      (t[80] = I),
      (t[81] = a),
      (t[82] = m),
      (t[83] = g),
      (t[84] = F.canRedo),
      (t[85] = ze))
    : (ze = t[85]);
  let Be;
  t[86] !== Re || t[87] !== ze
    ? ((Be = (0, $.jsxs)(`div`, {
        className: `absolute inset-y-0 end-0 flex items-center gap-token-button-composer-gap`,
        children: [Re, ze],
      })),
      (t[86] = Re),
      (t[87] = ze),
      (t[88] = Be))
    : (Be = t[88]);
  let Ve;
  t[89] !== Ne || t[90] !== Y || t[91] !== Be
    ? ((Ve = (0, $.jsxs)(`div`, {
        className: `pointer-events-none absolute inset-x-button-toolbar-inline top-3 z-30 flex h-token-button-composer items-center justify-center`,
        children: [Ne, Y, Be],
      })),
      (t[89] = Ne),
      (t[90] = Y),
      (t[91] = Be),
      (t[92] = Ve))
    : (Ve = t[92]);
  let Ue = N && !A,
    Ge;
  t[93] !== I || t[94] !== a || t[95] !== F || t[96] !== Ue
    ? ((Ge = (0, $.jsx)(`div`, {
        className: `pointer-events-none absolute start-button-toolbar-inline top-1/2 z-30 flex w-token-button-composer -translate-y-1/2 justify-center`,
        children: (0, $.jsx)(We, {
          className: `pointer-events-auto shrink-0`,
          editor: a,
          snapshot: F,
          disabled: I,
          forceExpanded: Ue,
        }),
      })),
      (t[93] = I),
      (t[94] = a),
      (t[95] = F),
      (t[96] = Ue),
      (t[97] = Ge))
    : (Ge = t[97]);
  let Ke = O === `color`,
    Z;
  t[98] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (e) => k(e ? `color` : null)), (t[98] = Z))
    : (Z = t[98]);
  let qe;
  t[99] !== _ || t[100] !== I || t[101] !== a || t[102] !== ee || t[103] !== F || t[104] !== Ke
    ? ((qe = (0, $.jsx)(`div`, {
        className: `horizontal-scroll-fade-mask pointer-events-auto min-w-0 flex-1 [scrollbar-width:none] overflow-x-auto overflow-y-hidden overscroll-x-contain [--edge-fade-distance:1.25rem] @[552px]/sketch-canvas:pointer-events-none @[552px]/sketch-canvas:absolute @[552px]/sketch-canvas:inset-x-0 @[552px]/sketch-canvas:flex @[552px]/sketch-canvas:justify-center`,
        children: (0, $.jsx)(Me, {
          editor: a,
          snapshot: F,
          disabled: I,
          isDarkMode: ee,
          open: Ke,
          dismissalBoundary: _,
          onOpenChange: Z,
        }),
      })),
      (t[99] = _),
      (t[100] = I),
      (t[101] = a),
      (t[102] = ee),
      (t[103] = F),
      (t[104] = Ke),
      (t[105] = qe))
    : (qe = t[105]);
  let Je;
  t[106] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Je = (0, $.jsx)(w, { icon: { 16: Ce, 20: T } })), (t[106] = Je))
    : (Je = t[106]);
  let Xe;
  t[107] !== z || t[108] !== c || t[109] !== R
    ? ((Xe = (0, $.jsx)(`button`, {
        className: `pointer-events-auto ms-auto flex size-token-button-composer shrink-0 cursor-interaction items-center justify-center rounded-full bg-composer-primary p-0 text-composer-primary transition-opacity focus-visible:outline-2 focus-visible:outline-background-composer-primary disabled:cursor-default disabled:opacity-50`,
        "aria-label": R,
        "aria-busy": c,
        disabled: z,
        title: R,
        type: `submit`,
        onPointerDown: tt,
        children: Je,
      })),
      (t[107] = z),
      (t[108] = c),
      (t[109] = R),
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
  t[114] !== Ee || t[115] !== De || t[116] !== Ve || t[117] !== Ge || t[118] !== Q
    ? ((Ze = (0, $.jsxs)(`div`, {
        ref: v,
        className: `@container/sketch-canvas relative h-full w-full overflow-hidden bg-surface-secondary`,
        onPointerDownCapture: Ee,
        children: [De, Ve, Ge, Q],
      })),
      (t[114] = Ee),
      (t[115] = De),
      (t[116] = Ve),
      (t[117] = Ge),
      (t[118] = Q),
      (t[119] = Ze))
    : (Ze = t[119]);
  let Qe;
  t[120] !== c || t[121] !== Te || t[122] !== Ze
    ? ((Qe = (0, $.jsx)(l, {
        as: `form`,
        variant: `chatgpt`,
        size: `full`,
        "aria-busy": c,
        onSubmit: Te,
        children: Ze,
      })),
      (t[120] = c),
      (t[121] = Te),
      (t[122] = Ze),
      (t[123] = Qe))
    : (Qe = t[123]);
  let $e;
  return (
    t[124] !== fe ||
    t[125] !== u ||
    t[126] !== me ||
    t[127] !== he ||
    t[128] !== _e ||
    t[129] !== ve ||
    t[130] !== xe ||
    t[131] !== q ||
    t[132] !== Qe
      ? (($e = (0, $.jsxs)(fe, {
          open: !0,
          onRequestClose: u,
          size: me,
          contentClassName: he,
          overlayClassName: _e,
          showDialogClose: !1,
          shouldIgnoreClickOutside: ve,
          contentProps: xe,
          onOpenChange: q,
          children: [Se, Qe],
        })),
        (t[124] = fe),
        (t[125] = u),
        (t[126] = me),
        (t[127] = he),
        (t[128] = _e),
        (t[129] = ve),
        (t[130] = xe),
        (t[131] = q),
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
  let t = (0, ot.c)(5),
    { children: n, disabled: r, label: i, onClick: a } = e,
    o;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a
      ? ((o = (0, $.jsx)(te, {
          className: `pointer-events-auto *:pointer-events-none`,
          "aria-label": i,
          color: `ghostSecondary`,
          disabled: r,
          radius: `full`,
          size: `composer`,
          title: i,
          type: `button`,
          uniform: !0,
          onPointerDown: at,
          onClick: a,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function at(e) {
  return e.preventDefault();
}
var ot, st, $;
function ct() {
  return (ct = e(() => {
    ((ot = b()),
      Ae(),
      I(),
      (st = a()),
      N(),
      ve(),
      F(),
      d(),
      c(),
      D(),
      q(),
      me(),
      Ie(),
      Je(),
      je(),
      $e(),
      Ve(),
      ($ = p()));
  }))();
}
export { He as a, Ie as c, Ue as i, je as l, ct as n, Je as o, We as r, Me as s, et as t, J as u };
//# sourceMappingURL=editor-db818ab34a98.js.map
