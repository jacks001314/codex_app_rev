import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  _O as n,
  fO as r,
  jDt as i,
  oO as a,
  vO as o,
  vzt as s,
  xMt as c,
} from "./app-shared-bbfeca5e5737.js";
import { $3n as l, Q3n as u, e6n as d } from "./app-initial-5851df3f6cb1.js";
function f(e) {
  let r = (0, m.c)(12),
    { embedded: i } = e,
    o = i !== void 0 && i ? `h2` : n,
    s;
  r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, h.jsx)(t, {
        id: `beacons.connectApp.loading.title`,
        defaultMessage: `Connect app`,
        description: `Title of the dialog shown to an end user while app connection details requested by the user are loading. Keep this concise; there are no placeholders.`,
      })),
      (r[0] = s))
    : (s = r[0]);
  let c;
  r[1] === o
    ? (c = r[2])
    : ((c = (0, h.jsx)(o, { className: `sr-only`, children: s })), (r[1] = o), (r[2] = c));
  let l;
  r[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, h.jsx)(`div`, {
        className: `sr-only`,
        role: `status`,
        children: (0, h.jsx)(t, {
          id: `beacons.connectApp.loading.description`,
          defaultMessage: `Loading connection details…`,
          description: `Status message in the app connection dialog shown to an end user while connector details are loading. Keep this concise; there are no placeholders.`,
        }),
      })),
      (r[3] = l))
    : (l = r[3]);
  let d;
  r[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, h.jsx)(`div`, {
        className: `size-14 overflow-hidden rounded-xl`,
        children: (0, h.jsx)(u, { size: `fill` }),
      })),
      (r[4] = d))
    : (d = r[4]);
  let f;
  r[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, h.jsxs)(`span`, {
        className: `flex items-center gap-1`,
        children: [
          (0, h.jsx)(`span`, { className: `size-1.5 rounded-full bg-border` }),
          (0, h.jsx)(`span`, { className: `size-1.5 rounded-full bg-border` }),
          (0, h.jsx)(`span`, { className: `size-1.5 rounded-full bg-border` }),
        ],
      })),
      (r[5] = f))
    : (f = r[5]);
  let g;
  r[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, h.jsxs)(`div`, {
        className: `flex items-center gap-3`,
        children: [
          d,
          f,
          (0, h.jsx)(`div`, {
            className: `size-14 overflow-hidden rounded-xl`,
            children: (0, h.jsx)(u, { size: `fill` }),
          }),
        ],
      })),
      (r[6] = g))
    : (g = r[6]);
  let _;
  r[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, h.jsxs)(`div`, {
        className: `flex shrink-0 flex-col items-center gap-4`,
        children: [
          g,
          (0, h.jsxs)(`div`, {
            className: `flex w-full flex-col items-center gap-2`,
            children: [
              (0, h.jsx)(`div`, { className: `h-6 w-1/2`, children: (0, h.jsx)(u, { size: `fill` }) }),
              (0, h.jsx)(u, { className: `w-1/3`, size: `sm` }),
            ],
          }),
        ],
      })),
      (r[7] = _))
    : (_ = r[7]);
  let v;
  r[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, h.jsx)(`div`, {
        className: `min-h-0 overflow-hidden rounded-2xl border border-default px-4 py-2`,
        children: [0, 1, 2].map(p),
      })),
      (r[8] = v))
    : (v = r[8]);
  let y;
  r[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, h.jsxs)(`div`, {
        className: `flex min-h-0 flex-1 flex-col gap-6`,
        "aria-hidden": !0,
        children: [
          _,
          v,
          (0, h.jsx)(`div`, {
            className: `mt-auto h-9 shrink-0 overflow-hidden rounded-full`,
            children: (0, h.jsx)(u, { size: `fill` }),
          }),
        ],
      })),
      (r[9] = y))
    : (y = r[9]);
  let b;
  return (
    r[10] === c
      ? (b = r[11])
      : ((b = (0, h.jsxs)(a, {
          className: `gap-6 overflow-hidden px-6 pt-8 pb-6 select-none`,
          size: `full`,
          children: [c, l, y],
        })),
        (r[10] = c),
        (r[11] = b)),
    b
  );
}
function p(e) {
  return (0, h.jsxs)(
    `div`,
    {
      className: `flex flex-col gap-1 border-b border-default py-2.5 last:border-none`,
      children: [
        (0, h.jsx)(u, { className: `w-1/2` }),
        (0, h.jsx)(l, { lines: 2, seed: `app-connect-description-${e}`, size: `sm` }),
      ],
    },
    e,
  );
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = s()), i(), o(), r(), d(), (h = c()));
  }))();
}
export { g as n, f as t };
//# sourceMappingURL=app-connect-skeleton-ca153a13f650.js.map
