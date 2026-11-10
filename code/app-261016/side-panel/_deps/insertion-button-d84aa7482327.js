import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Bv as t,
  CK as n,
  FV as r,
  IV as i,
  LNt as a,
  NE as o,
  OE as s,
  PBt as c,
  SB as l,
  TS as u,
  TY as d,
  Vv as f,
  XOt as p,
  nB as m,
  okt as h,
  rB as g,
  wB as _,
  wK as v,
  wS as y,
} from "./app-shared-2feb3d4c6fcc.js";
function b(e) {
  let t = (0, x.c)(20),
    a,
    o;
  t[0] === e ? ((a = t[1]), (o = t[2])) : (({ kind: a, ...o } = e), (t[0] = e), (t[1] = a), (t[2] = o));
  let c = h(),
    d,
    p;
  bb0: switch (a) {
    case `chart`: {
      let e;
      (t[3] === c
        ? (e = t[4])
        : ((e = c.formatMessage({
            id: `spreadsheetEditor.insertChart`,
            defaultMessage: `Insert chart`,
            description: `Open chart insertion options in the spreadsheet editor`,
          })),
          (t[3] = c),
          (t[4] = e)),
        (d = e));
      let n;
      (t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, S.jsx)(l, { icon: { 16: r, 20: i } })), (t[5] = n))
        : (n = t[5]),
        (p = n));
      break bb0;
    }
    case `image`: {
      let e;
      (t[6] === c
        ? (e = t[7])
        : ((e = c.formatMessage({
            id: `spreadsheetEditor.insertImage`,
            defaultMessage: `Insert image`,
            description: `Open image insertion options in the spreadsheet editor`,
          })),
          (t[6] = c),
          (t[7] = e)),
        (d = e));
      let r;
      (t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, S.jsx)(l, { icon: { 16: n, 20: v } })), (t[8] = r))
        : (r = t[8]),
        (p = r));
      break bb0;
    }
    case `tools`: {
      let e;
      (t[9] === c
        ? (e = t[10])
        : ((e = c.formatMessage({
            id: `spreadsheetEditor.insertTools`,
            defaultMessage: `Shapes, Checkboxes, and more`,
            description: `Open spreadsheet checkbox, data validation, and shape insertion options`,
          })),
          (t[9] = c),
          (t[10] = e)),
        (d = e));
      let n;
      (t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, S.jsx)(l, { icon: { assets: { 16: f, 20: u } } })), (t[11] = n))
        : (n = t[11]),
        (p = n));
    }
  }
  let g = o[`aria-expanded`] === !0 || o[`aria-expanded`] === `true`,
    _;
  t[12] !== p || t[13] !== d || t[14] !== o
    ? ((_ = (0, S.jsx)(s, { uniform: !0, "aria-label": d, ...o, children: p })),
      (t[12] = p),
      (t[13] = d),
      (t[14] = o),
      (t[15] = _))
    : (_ = t[15]);
  let y;
  return (
    t[16] !== d || t[17] !== g || t[18] !== _
      ? ((y = (0, S.jsx)(m, { cloneCustomTrigger: !0, tooltipContent: d, triggerPopupOpen: g, children: _ })),
        (t[16] = d),
        (t[17] = g),
        (t[18] = _),
        (t[19] = y))
      : (y = t[19]),
    y
  );
}
var x, S;
function C() {
  return (C = e(() => {
    ((x = c()), t(), y(), p(), d(), _(), g(), o(), (S = a()));
  }))();
}
export { C as n, b as t };
//# sourceMappingURL=insertion-button-d84aa7482327.js.map
