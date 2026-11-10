import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ept as t,
  FBt as n,
  JO as r,
  LNt as i,
  PBt as a,
  WO as o,
  Y3 as s,
  Z3 as c,
  nB as l,
  qO as u,
  rB as d,
  sct as f,
} from "./app-shared-2feb3d4c6fcc.js";
import { Ffr as p, Hpt as m, Ifr as h, Upt as g } from "./app-initial-ad16eaadf81f.js";
import { n as _, t as v } from "./view-frame-468bae9642da.js";
function y(e) {
  let n = (0, b.c)(33),
    {
      action: r,
      pending: i,
      quickActionView: a,
      onOpen: c,
      view: d,
      trigger: f,
      tooltipText: h,
      source: g,
    } = e,
    _ = g === void 0 ? `quick_action` : g,
    [y, C] = (0, x.useState)(null),
    [w, T] = (0, x.useState)(null),
    E;
  n[0] !== c || n[1] !== i
    ? ((E = (e) => {
        if (!e) {
          C(null);
          return;
        }
        if (i) return;
        let n = t();
        (C({ mcpAppId: n, toolResult: null }),
          c().then((e) => {
            C((t) => (t?.mcpAppId === n ? (e == null ? null : { mcpAppId: n, toolResult: e }) : t));
          }));
      }),
      (n[0] = c),
      (n[1] = i),
      (n[2] = E))
    : (E = n[2]);
  let D = E,
    O;
  n[3] !== r || n[4] !== i || n[5] !== y || n[6] !== f || n[7] !== d
    ? ((O =
        f ??
        (0, S.jsx)(s, {
          "aria-label": r.title,
          color: `ghost`,
          disabled: i && y == null,
          size: `compact`,
          uniform: !0,
          children: (0, S.jsx)(m, {
            icon: p(r),
            monochrome: d.tool._meta?.[`openai/iconStyle`] === `monochrome`,
          }),
        })),
      (n[3] = r),
      (n[4] = i),
      (n[5] = y),
      (n[6] = f),
      (n[7] = d),
      (n[8] = O))
    : (O = n[8]);
  let k = O,
    A = y != null,
    j;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = { "aria-describedby": void 0 }), (n[9] = j))
    : (j = n[9]);
  let M = h ?? r.title,
    N;
  n[10] !== k || n[11] !== M
    ? ((N = (0, S.jsx)(l, { tooltipContent: M, cloneCustomTrigger: !0, delayOpen: !0, children: k })),
      (n[10] = k),
      (n[11] = M),
      (n[12] = N))
    : (N = n[12]);
  let P;
  n[13] === r.title
    ? (P = n[14])
    : ((P = (0, S.jsx)(u, { className: `sr-only`, children: r.title })), (n[13] = r.title), (n[14] = P));
  let F;
  n[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, S.jsx)(`div`, {
        ref: T,
        "data-mcp-app-portal-target": `true`,
        className: `relative max-h-[calc(100dvh/var(--codex-window-zoom)-6rem)] min-h-0 overflow-y-auto`,
      })),
      (n[15] = F))
    : (F = n[15]);
  let I;
  n[16] !== D || n[17] !== A || n[18] !== N || n[19] !== P
    ? ((I = (0, S.jsxs)(o, {
        open: A,
        onOpenChange: D,
        size: `compact`,
        dialogCloseClassName: `z-10`,
        contentProps: j,
        triggerContent: N,
        children: [P, F],
      })),
      (n[16] = D),
      (n[17] = A),
      (n[18] = N),
      (n[19] = P),
      (n[20] = I))
    : (I = n[20]);
  let L;
  n[21] !== r.target || n[22] !== D || n[23] !== w || n[24] !== a || n[25] !== y || n[26] !== _
    ? ((L =
        y == null
          ? null
          : (0, S.jsx)(v, {
              autoFocus: w != null,
              contentContainer: w,
              fullSurface: !1,
              inDialog: !0,
              source: _,
              lifetime: `component`,
              mcpAppId: y.mcpAppId,
              onRequestClose: () => D(!1),
              toolResult: y.toolResult,
              toolArguments: r.target.arguments,
              useHostThread: !0,
              view: a,
            })),
      (n[21] = r.target),
      (n[22] = D),
      (n[23] = w),
      (n[24] = a),
      (n[25] = y),
      (n[26] = _),
      (n[27] = L))
    : (L = n[27]);
  let R;
  n[28] === L
    ? (R = n[29])
    : ((R = (0, S.jsx)(`div`, {
        className: `pointer-events-none invisible fixed w-96`,
        inert: !0,
        children: L,
      })),
      (n[28] = L),
      (n[29] = R));
  let z;
  return (
    n[30] !== I || n[31] !== R
      ? ((z = (0, S.jsxs)(S.Fragment, { children: [I, R] })), (n[30] = I), (n[31] = R), (n[32] = z))
      : (z = n[32]),
    z
  );
}
var b, x, S;
function C() {
  return (C = e(() => {
    ((b = a()), f(), (x = n()), c(), r(), d(), h(), g(), _(), (S = i()));
  }))();
}
export { C as n, y as t };
//# sourceMappingURL=quick-action-dialog-e856f0090edc.js.map
