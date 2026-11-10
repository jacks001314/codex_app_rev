import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  HO as t,
  IO as n,
  JO as r,
  LNt as i,
  PBt as a,
  WO as o,
  XOt as s,
  qO as c,
  tkt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import { n as u, t as d } from "./details-3933c27fd116.js";
function f(e) {
  let t = (0, m.c)(13),
    { items: r, onClose: i, onCloseAutoFocus: a } = e,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = { "aria-describedby": void 0, onCloseAutoFocus: a }), (t[0] = a), (t[1] = s));
  let u;
  t[2] === i
    ? (u = t[3])
    : ((u = (e) => {
        e || i();
      }),
      (t[2] = i),
      (t[3] = u));
  let d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, h.jsx)(c, {
        className: `shrink-0 p-4 pe-14 text-lg font-normal select-none`,
        children: (0, h.jsx)(l, {
          id: `chatgpt.pythonExecution.analysisTitle`,
          defaultMessage: `Analysis`,
          description: `Title of the dialog displaying the read-only Python source and output behind an assistant response`,
        }),
      })),
      (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === r ? (f = t[6]) : ((f = r.map(p)), (t[5] = r), (t[6] = f));
  let g;
  t[7] === f
    ? (g = t[8])
    : ((g = (0, h.jsxs)(n, {
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
      (t[7] = f),
      (t[8] = g));
  let _;
  return (
    t[9] !== s || t[10] !== u || t[11] !== g
      ? ((_ = (0, h.jsx)(o, {
          open: !0,
          contentProps: s,
          onOpenChange: u,
          size: `large`,
          variant: `chatgpt`,
          children: g,
        })),
        (t[9] = s),
        (t[10] = u),
        (t[11] = g),
        (t[12] = _))
      : (_ = t[12]),
    _
  );
}
function p(e) {
  return (0, h.jsx)(d, { item: e }, e.id);
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = a()), s(), r(), t(), u(), (h = i()));
  }))();
}
g();
export { f as PythonAnalysisDialog };
//# sourceMappingURL=analysis-dialog-488bd34e27ba.js.map
