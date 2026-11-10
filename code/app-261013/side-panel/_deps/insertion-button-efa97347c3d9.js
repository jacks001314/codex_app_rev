import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BB as t,
  DG as n,
  Dz as r,
  EG as i,
  TJ as a,
  VDt as o,
  cv as s,
  cz as c,
  dv as l,
  fE as u,
  jDt as d,
  kz as f,
  lv as p,
  oE as m,
  sz as h,
  uv as g,
  vzt as _,
  xMt as v,
  zB as y,
} from "./app-shared-bbfeca5e5737.js";
function b(e) {
  let a = (0, x.c)(20),
    s,
    c;
  a[0] === e ? ((s = a[1]), (c = a[2])) : (({ kind: s, ...c } = e), (a[0] = e), (a[1] = s), (a[2] = c));
  let u = o(),
    d,
    f;
  bb0: switch (s) {
    case `chart`: {
      let e;
      (a[3] === u
        ? (e = a[4])
        : ((e = u.formatMessage({
            id: `spreadsheetEditor.insertChart`,
            defaultMessage: `Insert chart`,
            description: `Open chart insertion options in the spreadsheet editor`,
          })),
          (a[3] = u),
          (a[4] = e)),
        (d = e));
      let n;
      (a[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, S.jsx)(r, { icon: { 16: y, 20: t } })), (a[5] = n))
        : (n = a[5]),
        (f = n));
      break bb0;
    }
    case `image`: {
      let e;
      (a[6] === u
        ? (e = a[7])
        : ((e = u.formatMessage({
            id: `spreadsheetEditor.insertImage`,
            defaultMessage: `Insert image`,
            description: `Open image insertion options in the spreadsheet editor`,
          })),
          (a[6] = u),
          (a[7] = e)),
        (d = e));
      let t;
      (a[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, S.jsx)(r, { icon: { 16: i, 20: n } })), (a[8] = t))
        : (t = a[8]),
        (f = t));
      break bb0;
    }
    case `tools`: {
      let e;
      (a[9] === u
        ? (e = a[10])
        : ((e = u.formatMessage({
            id: `spreadsheetEditor.insertTools`,
            defaultMessage: `Shapes, Checkboxes, and more`,
            description: `Open spreadsheet checkbox, data validation, and shape insertion options`,
          })),
          (a[9] = u),
          (a[10] = e)),
        (d = e));
      let t;
      (a[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, S.jsx)(r, { icon: { assets: { 16: l, 20: p } } })), (a[11] = t))
        : (t = a[11]),
        (f = t));
    }
  }
  let g = c[`aria-expanded`] === !0 || c[`aria-expanded`] === `true`,
    _;
  a[12] !== f || a[13] !== d || a[14] !== c
    ? ((_ = (0, S.jsx)(m, { uniform: !0, "aria-label": d, ...c, children: f })),
      (a[12] = f),
      (a[13] = d),
      (a[14] = c),
      (a[15] = _))
    : (_ = a[15]);
  let v;
  return (
    a[16] !== d || a[17] !== g || a[18] !== _
      ? ((v = (0, S.jsx)(h, { cloneCustomTrigger: !0, tooltipContent: d, triggerPopupOpen: g, children: _ })),
        (a[16] = d),
        (a[17] = g),
        (a[18] = _),
        (a[19] = v))
      : (v = a[19]),
    v
  );
}
var x, S;
function C() {
  return (C = e(() => {
    ((x = _()), g(), s(), d(), a(), f(), c(), u(), (S = v()));
  }))();
}
export { C as n, b as t };
//# sourceMappingURL=insertion-button-efa97347c3d9.js.map
