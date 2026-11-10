import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CG as t,
  DB as n,
  KL as r,
  LNt as i,
  OA as a,
  OB as o,
  PBt as s,
  TA as c,
  TG as l,
  TY as u,
  kA as d,
  qL as f,
  wA as p,
} from "./app-shared-2feb3d4c6fcc.js";
import { _gt as m, bgt as h, ggt as g, hgt as _, vgt as v, ygt as y } from "./app-initial-ad16eaadf81f.js";
import { n as b, t as x } from "./Sharepoint-380a58ac69c4.js";
function S(e) {
  let i = (0, C.c)(18),
    { provider: a, standalone: o, thumbnail: s } = e,
    u = o !== void 0 && o,
    f = s !== void 0 && s,
    p = `size-3`;
  (u === `row` && (p = `size-5`), u === `card` && (p = `size-12`));
  let h;
  bb0: switch (a) {
    case `google_drive`: {
      let e;
      (i[0] === p ? (e = i[1]) : ((e = (0, w.jsx)(r, { className: p })), (i[0] = p), (i[1] = e)), (h = e));
      break bb0;
    }
    case `box`: {
      let e;
      (i[2] === p ? (e = i[3]) : ((e = (0, w.jsx)(m, { className: p })), (i[2] = p), (i[3] = e)), (h = e));
      break bb0;
    }
    case `dropbox`: {
      let e;
      (i[4] === p ? (e = i[5]) : ((e = (0, w.jsx)(_, { className: p })), (i[4] = p), (i[5] = e)), (h = e));
      break bb0;
    }
    case `sharepoint`:
      if (u === `card`) {
        let e;
        (i[6] === p
          ? (e = i[7])
          : ((e = (0, w.jsx)(x, { className: p, "aria-hidden": `true`, fill: `none` })),
            (i[6] = p),
            (i[7] = e)),
          (h = e));
      } else if (u === `row`) {
        let e;
        (i[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, w.jsx)(l, {})), (i[8] = e))
          : (e = i[8]),
          (h = e));
      } else {
        let e;
        (i[9] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, w.jsx)(t, {})), (i[9] = e))
          : (e = i[9]),
          (h = e));
      }
      break bb0;
    case `onedrive`:
      if (u === `card`) {
        let e;
        (i[10] === p
          ? (e = i[11])
          : ((e = (0, w.jsx)(y, { className: p, "aria-hidden": `true` })), (i[10] = p), (i[11] = e)),
          (h = e));
      } else {
        let e = u === `row` ? c : d,
          t;
        (i[12] === e ? (t = i[13]) : ((t = (0, w.jsx)(n, { asset: e })), (i[12] = e), (i[13] = t)), (h = t));
      }
      break bb0;
    case `native`:
    case `native_shared`:
    case `unknown`:
    case null:
    case void 0:
      return null;
  }
  let g;
  return (
    i[14] !== h || i[15] !== u || i[16] !== f
      ? ((g = u
          ? (0, w.jsx)(w.Fragment, { children: h })
          : (0, w.jsx)(`span`, {
              "aria-hidden": `true`,
              className: f
                ? `pointer-events-none absolute end-4.5 bottom-4.5 flex size-5 items-center justify-center rounded-full border border-default bg-surface`
                : `absolute -end-1 -bottom-1`,
              children: h,
            })),
        (i[14] = h),
        (i[15] = u),
        (i[16] = f),
        (i[17] = g))
      : (g = i[17]),
    g
  );
}
var C, w;
function T() {
  return (T = e(() => {
    ((C = s()), a(), p(), h(), b(), o(), u(), v(), g(), f(), (w = i()));
  }))();
}
export { T as n, S as t };
//# sourceMappingURL=library-provider-badge-54f8b706eeef.js.map
