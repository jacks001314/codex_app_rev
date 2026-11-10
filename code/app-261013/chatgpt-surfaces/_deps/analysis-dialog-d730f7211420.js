import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  _O as n,
  fO as r,
  jDt as i,
  mO as a,
  oO as o,
  vO as s,
  vzt as c,
  xMt as l,
} from "./app-shared-bbfeca5e5737.js";
import { n as u, t as d } from "./details-6df4c7ff3dc6.js";
function f(e) {
  let r = (0, m.c)(13),
    { items: i, onClose: s, onCloseAutoFocus: c } = e,
    l;
  r[0] === c
    ? (l = r[1])
    : ((l = { "aria-describedby": void 0, onCloseAutoFocus: c }), (r[0] = c), (r[1] = l));
  let u;
  r[2] === s
    ? (u = r[3])
    : ((u = (e) => {
        e || s();
      }),
      (r[2] = s),
      (r[3] = u));
  let d;
  r[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, h.jsx)(n, {
        className: `shrink-0 p-4 pe-14 text-lg font-normal select-none`,
        children: (0, h.jsx)(t, {
          id: `chatgpt.pythonExecution.analysisTitle`,
          defaultMessage: `Analysis`,
          description: `Title of the dialog displaying the read-only Python source and output behind an assistant response`,
        }),
      })),
      (r[4] = d))
    : (d = r[4]);
  let f;
  r[5] === i ? (f = r[6]) : ((f = i.map(p)), (r[5] = i), (r[6] = f));
  let g;
  r[7] === f
    ? (g = r[8])
    : ((g = (0, h.jsxs)(o, {
        className: `max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] min-h-0 overflow-hidden`,
        variant: `chatgpt`,
        children: [
          d,
          (0, h.jsx)(`div`, {
            className: `min-h-0 overflow-y-auto p-4 pt-1`,
            children: (0, h.jsx)(`div`, { className: `flex min-w-0 flex-col gap-4`, children: f }),
          }),
        ],
      })),
      (r[7] = f),
      (r[8] = g));
  let _;
  return (
    r[9] !== l || r[10] !== u || r[11] !== g
      ? ((_ = (0, h.jsx)(a, {
          open: !0,
          contentProps: l,
          onOpenChange: u,
          size: `large`,
          variant: `chatgpt`,
          children: g,
        })),
        (r[9] = l),
        (r[10] = u),
        (r[11] = g),
        (r[12] = _))
      : (_ = r[12]),
    _
  );
}
function p(e) {
  return (0, h.jsx)(d, { item: e }, e.id);
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = c()), i(), s(), r(), u(), (h = l()));
  }))();
}
g();
export { f as PythonAnalysisDialog };
//# sourceMappingURL=analysis-dialog-d730f7211420.js.map
