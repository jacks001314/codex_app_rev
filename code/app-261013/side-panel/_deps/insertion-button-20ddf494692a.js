import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  CS as n,
  DG as r,
  Dz as i,
  EG as a,
  S_ as o,
  TJ as s,
  Uq as c,
  VDt as l,
  Wq as u,
  __ as d,
  b_ as f,
  cz as p,
  g_ as m,
  h_ as h,
  jDt as g,
  kz as _,
  oE as v,
  sz as y,
  v_ as b,
  vzt as x,
  xMt as S,
  x_ as C,
  y_ as w,
} from "./app-shared-bbfeca5e5737.js";
import { a as T, t as E } from "./PopcornManualEditHeaderControls-e0458d509e7c.js";
function D(e) {
  let t = (0, O.c)(20),
    n,
    s,
    d,
    p,
    h;
  t[0] === e
    ? ((n = t[1]), (s = t[2]), (d = t[3]), (p = t[4]), (h = t[5]))
    : (({ action: n, expanded: s, loading: d, pressed: p, ...h } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = s),
      (t[3] = d),
      (t[4] = p),
      (t[5] = h));
  let g = l(),
    _;
  t[6] !== n || t[7] !== g ? ((_ = g.formatMessage(A[n])), (t[6] = n), (t[7] = g), (t[8] = _)) : (_ = t[8]);
  let x = _,
    S;
  t[9] !== n || t[10] !== s || t[11] !== x || t[12] !== d || t[13] !== p || t[14] !== h
    ? ((S =
        n === `slide` || n === `text`
          ? (0, k.jsx)(E, {
              "aria-label": x,
              "aria-haspopup": n === `slide` ? `dialog` : void 0,
              expanded: s,
              pressed: p,
              size: `default`,
              ...h,
              children:
                n === `slide`
                  ? (0, k.jsx)(i, { icon: { assets: { 16: b, 20: m } } })
                  : (0, k.jsx)(i, { icon: { 16: c, 20: u } }),
            })
          : (0, k.jsx)(v, {
              uniform: !0,
              "aria-label": x,
              loading: d,
              ...h,
              children:
                !d &&
                (n === `image`
                  ? (0, k.jsx)(i, { icon: { 16: a, 20: r } })
                  : (0, k.jsx)(i, { icon: { assets: { 16: o, 20: f } } })),
            })),
      (t[9] = n),
      (t[10] = s),
      (t[11] = x),
      (t[12] = d),
      (t[13] = p),
      (t[14] = h),
      (t[15] = S))
    : (S = t[15]);
  let C;
  return (
    t[16] !== s || t[17] !== x || t[18] !== S
      ? ((C = (0, k.jsx)(y, { cloneCustomTrigger: !0, tooltipContent: x, triggerPopupOpen: s, children: S })),
        (t[16] = s),
        (t[17] = x),
        (t[18] = S),
        (t[19] = C))
      : (C = t[19]),
    C
  );
}
var O, k, A;
function j() {
  return (j = e(() => {
    ((O = x()),
      C(),
      w(),
      d(),
      h(),
      T(),
      g(),
      s(),
      _(),
      p(),
      n(),
      (k = S()),
      (A = t({
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
//# sourceMappingURL=insertion-button-20ddf494692a.js.map
