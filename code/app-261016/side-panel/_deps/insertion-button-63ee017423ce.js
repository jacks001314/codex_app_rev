import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $_ as t,
  CK as n,
  J_ as r,
  LNt as i,
  OE as a,
  PBt as o,
  Q_ as s,
  SB as c,
  TY as l,
  UJ as u,
  WJ as d,
  XOt as f,
  XS as p,
  X_ as m,
  YOt as h,
  Y_ as g,
  Z_ as _,
  ev as v,
  nB as y,
  okt as b,
  q_ as x,
  rB as S,
  wB as C,
  wK as w,
} from "./app-shared-2feb3d4c6fcc.js";
import { a as T, t as E } from "./PopcornManualEditHeaderControls-45cc4843f346.js";
function D(e) {
  let t = (0, O.c)(20),
    i,
    o,
    l,
    f,
    p;
  t[0] === e
    ? ((i = t[1]), (o = t[2]), (l = t[3]), (f = t[4]), (p = t[5]))
    : (({ action: i, expanded: o, loading: l, pressed: f, ...p } = e),
      (t[0] = e),
      (t[1] = i),
      (t[2] = o),
      (t[3] = l),
      (t[4] = f),
      (t[5] = p));
  let h = b(),
    g;
  t[6] !== i || t[7] !== h ? ((g = h.formatMessage(A[i])), (t[6] = i), (t[7] = h), (t[8] = g)) : (g = t[8]);
  let _ = g,
    x;
  t[9] !== i || t[10] !== o || t[11] !== _ || t[12] !== l || t[13] !== f || t[14] !== p
    ? ((x =
        i === `slide` || i === `text`
          ? (0, k.jsx)(E, {
              "aria-label": _,
              "aria-haspopup": i === `slide` ? `dialog` : void 0,
              expanded: o,
              pressed: f,
              size: `default`,
              ...p,
              children:
                i === `slide`
                  ? (0, k.jsx)(c, { icon: { assets: { 16: m, 20: r } } })
                  : (0, k.jsx)(c, { icon: { 16: u, 20: d } }),
            })
          : (0, k.jsx)(a, {
              uniform: !0,
              "aria-label": _,
              loading: l,
              ...p,
              children:
                !l &&
                (i === `image`
                  ? (0, k.jsx)(c, { icon: { 16: n, 20: w } })
                  : (0, k.jsx)(c, { icon: { assets: { 16: v, 20: s } } })),
            })),
      (t[9] = i),
      (t[10] = o),
      (t[11] = _),
      (t[12] = l),
      (t[13] = f),
      (t[14] = p),
      (t[15] = x))
    : (x = t[15]);
  let S;
  return (
    t[16] !== o || t[17] !== _ || t[18] !== x
      ? ((S = (0, k.jsx)(y, { cloneCustomTrigger: !0, tooltipContent: _, triggerPopupOpen: o, children: x })),
        (t[16] = o),
        (t[17] = _),
        (t[18] = x),
        (t[19] = S))
      : (S = t[19]),
    S
  );
}
var O, k, A;
function j() {
  return (j = e(() => {
    ((O = o()),
      t(),
      _(),
      g(),
      x(),
      T(),
      f(),
      l(),
      C(),
      S(),
      p(),
      (k = i()),
      (A = h({
        slide: {
          id: `presentationEditor.insert.slide`,
          defaultMessage: `New slide`,
          description: `Open the slide layout menu to add a presentation slide`,
        },
        text: {
          id: `presentationEditor.insert.text`,
          defaultMessage: `Insert text`,
          description: `Activate text box placement on the presentation slide`,
        },
        image: {
          id: `presentationEditor.insert.image`,
          defaultMessage: `Insert image`,
          description: `Open the presentation image insertion menu`,
        },
        tools: {
          id: `presentationEditor.insert.tools`,
          defaultMessage: `Charts, tables, and more`,
          description: `Open the menu for inserting charts, tables and shapes`,
        },
      })));
  }))();
}
export { j as n, D as t };
//# sourceMappingURL=insertion-button-63ee017423ce.js.map
