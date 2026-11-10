import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $R as t,
  Fy as n,
  IDt as r,
  Mz as i,
  Nz as a,
  Pxt as o,
  Py as s,
  QR as c,
  Vxt as l,
  _Mt as u,
  gMt as d,
  jDt as f,
  vzt as p,
  xMt as m,
} from "./app-shared-bbfeca5e5737.js";
import { n as h, t as g } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
function _(e) {
  let n = (0, v.c)(16),
    { stage: a, setupError: o } = e,
    c = l(t),
    u;
  if (o != null) {
    let e;
    (n[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, y.jsx)(r, {
          id: `codex.localConversation.environmentSummary.worktreeSetupFailed`,
          defaultMessage: `Checkout created; setup failed`,
          description: `Summary panel status when the checkout was created but its environment setup failed; the checkout remains available for repair`,
        })),
        (n[0] = e))
      : (e = n[0]),
      (u = e));
  } else if (a === `registering` || a === `completed`) {
    let e;
    (n[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, y.jsx)(r, {
          id: `codex.localConversation.environmentSummary.attachingWorktree`,
          defaultMessage: `Attaching worktree…`,
          description: `Summary panel status while a newly created worktree is being attached to this task`,
        })),
        (n[1] = e))
      : (e = n[1]),
      (u = e));
  } else {
    let e;
    (n[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, y.jsx)(r, {
          id: `codex.localConversation.environmentSummary.creatingWorktree`,
          defaultMessage: `Creating worktree…`,
          description: `Summary panel status while a managed Git worktree is being created for this task`,
        })),
        (n[2] = e))
      : (e = n[2]),
      (u = e));
  }
  let f = o == null && !c && `motion-safe:animate-pulse`,
    p;
  n[3] === f ? (p = n[4]) : ((p = d(`text-tertiary`, f)), (n[3] = f), (n[4] = p));
  let m;
  n[5] === p
    ? (m = n[6])
    : ((m = (0, y.jsx)(g.ItemLeading, { children: (0, y.jsx)(i, { asset: s, className: p }) })),
      (n[5] = p),
      (n[6] = m));
  let h = o == null && !c && `loading-shimmer-pure-text`,
    _;
  n[7] === h ? (_ = n[8]) : ((_ = d(h)), (n[7] = h), (n[8] = _));
  let b;
  n[9] !== u || n[10] !== _
    ? ((b = (0, y.jsx)(g.ItemLabel, { children: (0, y.jsx)(`span`, { className: _, children: u }) })),
      (n[9] = u),
      (n[10] = _),
      (n[11] = b))
    : (b = n[11]);
  let x;
  return (
    n[12] !== o || n[13] !== m || n[14] !== b
      ? ((x = (0, y.jsxs)(g.Item, { className: `select-none`, role: `status`, title: o, children: [m, b] })),
        (n[12] = o),
        (n[13] = m),
        (n[14] = b),
        (n[15] = x))
      : (x = n[15]),
    x
  );
}
var v, y;
function b() {
  return (b = e(() => {
    ((v = p()), n(), u(), o(), f(), a(), c(), h(), (y = m()));
  }))();
}
export { b as n, _ as t };
//# sourceMappingURL=worktree-creation-row-e92246d87ffa.js.map
