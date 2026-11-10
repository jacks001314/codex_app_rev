import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  _O as n,
  cz as r,
  dft as i,
  mO as a,
  rst as o,
  sz as s,
  t3 as c,
  vO as l,
  vzt as u,
  xMt as d,
  yzt as f,
} from "./app-shared-bbfeca5e5737.js";
import { Kcr as p, Nft as m, Pft as h, qcr as g } from "./app-initial-5851df3f6cb1.js";
import { n as _, t as v } from "./view-frame-c8d02fef58da.js";
function y(e) {
  let r = (0, b.c)(33),
    {
      action: o,
      pending: c,
      quickActionView: l,
      onOpen: u,
      view: d,
      trigger: f,
      tooltipText: h,
      source: g,
    } = e,
    _ = g === void 0 ? `quick_action` : g,
    [y, C] = (0, x.useState)(null),
    [w, T] = (0, x.useState)(null),
    E;
  r[0] !== u || r[1] !== c
    ? ((E = (e) => {
        if (!e) {
          C(null);
          return;
        }
        if (c) return;
        let t = i();
        (C({ mcpAppId: t, toolResult: null }),
          u().then((e) => {
            C((n) => (n?.mcpAppId === t ? (e == null ? null : { mcpAppId: t, toolResult: e }) : n));
          }));
      }),
      (r[0] = u),
      (r[1] = c),
      (r[2] = E))
    : (E = r[2]);
  let D = E,
    O;
  r[3] !== o || r[4] !== c || r[5] !== y || r[6] !== f || r[7] !== d
    ? ((O =
        f ??
        (0, S.jsx)(t, {
          "aria-label": o.title,
          color: `ghost`,
          disabled: c && y == null,
          size: `compact`,
          uniform: !0,
          children: (0, S.jsx)(m, {
            icon: p(o),
            monochrome: d.tool._meta?.[`openai/iconStyle`] === `monochrome`,
          }),
        })),
      (r[3] = o),
      (r[4] = c),
      (r[5] = y),
      (r[6] = f),
      (r[7] = d),
      (r[8] = O))
    : (O = r[8]);
  let k = O,
    A = y != null,
    j;
  r[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = { "aria-describedby": void 0 }), (r[9] = j))
    : (j = r[9]);
  let M = h ?? o.title,
    N;
  r[10] !== k || r[11] !== M
    ? ((N = (0, S.jsx)(s, { tooltipContent: M, cloneCustomTrigger: !0, delayOpen: !0, children: k })),
      (r[10] = k),
      (r[11] = M),
      (r[12] = N))
    : (N = r[12]);
  let P;
  r[13] === o.title
    ? (P = r[14])
    : ((P = (0, S.jsx)(n, { className: `sr-only`, children: o.title })), (r[13] = o.title), (r[14] = P));
  let F;
  r[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, S.jsx)(`div`, {
        ref: T,
        "data-mcp-app-portal-target": `true`,
        className: `relative max-h-[calc(100dvh/var(--codex-window-zoom)-6rem)] min-h-0 overflow-y-auto`,
      })),
      (r[15] = F))
    : (F = r[15]);
  let I;
  r[16] !== D || r[17] !== A || r[18] !== N || r[19] !== P
    ? ((I = (0, S.jsxs)(a, {
        open: A,
        onOpenChange: D,
        size: `compact`,
        dialogCloseClassName: `z-10`,
        contentProps: j,
        triggerContent: N,
        children: [P, F],
      })),
      (r[16] = D),
      (r[17] = A),
      (r[18] = N),
      (r[19] = P),
      (r[20] = I))
    : (I = r[20]);
  let L;
  r[21] !== o.target || r[22] !== D || r[23] !== w || r[24] !== l || r[25] !== y || r[26] !== _
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
              toolArguments: o.target.arguments,
              useHostThread: !0,
              view: l,
            })),
      (r[21] = o.target),
      (r[22] = D),
      (r[23] = w),
      (r[24] = l),
      (r[25] = y),
      (r[26] = _),
      (r[27] = L))
    : (L = r[27]);
  let R;
  r[28] === L
    ? (R = r[29])
    : ((R = (0, S.jsx)(`div`, {
        className: `pointer-events-none invisible fixed w-96`,
        inert: !0,
        children: L,
      })),
      (r[28] = L),
      (r[29] = R));
  let z;
  return (
    r[30] !== I || r[31] !== R
      ? ((z = (0, S.jsxs)(S.Fragment, { children: [I, R] })), (r[30] = I), (r[31] = R), (r[32] = z))
      : (z = r[32]),
    z
  );
}
var b, x, S;
function C() {
  return (C = e(() => {
    ((b = u()), o(), (x = f()), c(), l(), r(), g(), h(), _(), (S = d()));
  }))();
}
export { C as n, y as t };
//# sourceMappingURL=quick-action-dialog-cb81d076a636.js.map
