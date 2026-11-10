import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  DW as t,
  Kk as n,
  Mz as r,
  Nz as i,
  TJ as a,
  Xk as o,
  Zk as s,
  iL as c,
  kW as l,
  qk as u,
  rL as d,
  vzt as f,
  xMt as p,
} from "./app-shared-bbfeca5e5737.js";
import { aht as m, cht as h, iht as g, lht as _, oht as v, sht as y } from "./app-initial-5851df3f6cb1.js";
import { n as b, t as x } from "./Sharepoint-3cab95ef90ef.js";
function S(e) {
  let n = (0, C.c)(18),
    { provider: i, standalone: a, thumbnail: o } = e,
    c = a !== void 0 && a,
    f = o !== void 0 && o,
    p = `size-3`;
  (c === `row` && (p = `size-5`), c === `card` && (p = `size-12`));
  let m;
  bb0: switch (i) {
    case `google_drive`: {
      let e;
      (n[0] === p ? (e = n[1]) : ((e = (0, w.jsx)(d, { className: p })), (n[0] = p), (n[1] = e)), (m = e));
      break bb0;
    }
    case `box`: {
      let e;
      (n[2] === p ? (e = n[3]) : ((e = (0, w.jsx)(v, { className: p })), (n[2] = p), (n[3] = e)), (m = e));
      break bb0;
    }
    case `dropbox`: {
      let e;
      (n[4] === p ? (e = n[5]) : ((e = (0, w.jsx)(g, { className: p })), (n[4] = p), (n[5] = e)), (m = e));
      break bb0;
    }
    case `sharepoint`:
      if (c === `card`) {
        let e;
        (n[6] === p
          ? (e = n[7])
          : ((e = (0, w.jsx)(x, { className: p, "aria-hidden": `true`, fill: `none` })),
            (n[6] = p),
            (n[7] = e)),
          (m = e));
      } else if (c === `row`) {
        let e;
        (n[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, w.jsx)(l, {})), (n[8] = e))
          : (e = n[8]),
          (m = e));
      } else {
        let e;
        (n[9] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, w.jsx)(t, {})), (n[9] = e))
          : (e = n[9]),
          (m = e));
      }
      break bb0;
    case `onedrive`:
      if (c === `card`) {
        let e;
        (n[10] === p
          ? (e = n[11])
          : ((e = (0, w.jsx)(h, { className: p, "aria-hidden": `true` })), (n[10] = p), (n[11] = e)),
          (m = e));
      } else {
        let e = c === `row` ? u : s,
          t;
        (n[12] === e ? (t = n[13]) : ((t = (0, w.jsx)(r, { asset: e })), (n[12] = e), (n[13] = t)), (m = t));
      }
      break bb0;
    case `native`:
    case `native_shared`:
    case `unknown`:
    case null:
    case void 0:
      return null;
  }
  let _;
  return (
    n[14] !== m || n[15] !== c || n[16] !== f
      ? ((_ = c
          ? (0, w.jsx)(w.Fragment, { children: m })
          : (0, w.jsx)(`span`, {
              "aria-hidden": `true`,
              className: f
                ? `pointer-events-none absolute end-4.5 bottom-4.5 flex size-5 items-center justify-center rounded-full border border-default bg-surface`
                : `absolute -end-1 -bottom-1`,
              children: m,
            })),
        (n[14] = m),
        (n[15] = c),
        (n[16] = f),
        (n[17] = _))
      : (_ = n[17]),
    _
  );
}
var C, w;
function T() {
  return (T = e(() => {
    ((C = f()), o(), n(), _(), b(), i(), a(), y(), m(), c(), (w = p()));
  }))();
}
export { T as n, S as t };
//# sourceMappingURL=library-provider-badge-82157c3113b0.js.map
