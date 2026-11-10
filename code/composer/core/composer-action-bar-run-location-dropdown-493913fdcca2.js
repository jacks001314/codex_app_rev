import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as t,
  Cpn as n,
  JG as r,
  JK as i,
  Jit as a,
  KG as o,
  Kit as s,
  Opn as c,
  Rpn as l,
  Spn as u,
  ZG as d,
  gMt as f,
  hMt as p,
  hmn as m,
  kMt as h,
  kmn as g,
  qK as _,
  zpn as v,
} from "./app-initial-f094ef01c64d.js";
import {
  $w as y,
  Jo as b,
  Qw as x,
  Yo as S,
  Zw as C,
  eT as w,
} from "./app-primary-4c40d73a1074.js";
import { n as T, t as E } from "./lock-light-16-53cceab671fe.js";
function D(e) {
  let t = (0, O.c)(60),
    {
      cloudUsesLocalExecutor: i,
      isLocalExecutorStarting: a,
      onRunLocationChange: u,
      runLocationState: d,
    } = e,
    f = c(),
    { effectiveLocation: m, unavailableReasons: g } = d,
    v;
  t[0] !== m || t[1] !== g.cloud || t[2] !== g.local
    ? ((v = null),
      m === `cloud` && g.local == null
        ? (v = `local`)
        : m === `local` && g.cloud == null && (v = `cloud`),
      (t[0] = m),
      (t[1] = g.cloud),
      (t[2] = g.local),
      (t[3] = v))
    : (v = t[3]);
  let b;
  t[4] !== v || t[5] !== u
    ? ((b = () => {
        v != null && u(v);
      }),
      (t[4] = v),
      (t[5] = u),
      (t[6] = b))
    : (b = t[6]);
  let x = v != null,
    w;
  (t[7] === x ? (w = t[8]) : ((w = { enabled: x }), (t[7] = x), (t[8] = w)),
    S(`composer.toggleWorkRunLocation`, b, w));
  let E;
  t[9] !== f || t[10] !== a
    ? ((E = a
        ? f.formatMessage({
            id: `composer.runLocation.triggerLabel.localExecutorStarting`,
            defaultMessage: `Choose where to run this task. Local execution is starting…`,
            description: `Accessible label for the run location menu while local execution starts`,
          })
        : f.formatMessage({
            id: `composer.runLocation.triggerLabel`,
            defaultMessage: `Choose where to run this chat`,
            description: `Accessible label for the run location menu`,
          })),
      (t[9] = f),
      (t[10] = a),
      (t[11] = E))
    : (E = t[11]);
  let D = E,
    A;
  t[12] !== m || t[13] !== a
    ? ((A =
        m === `cloud`
          ? (0, k.jsx)(y, { className: l(`icon-xs`, a && `motion-safe:animate-pulse`) })
          : null),
      (t[12] = m),
      (t[13] = a),
      (t[14] = A))
    : (A = t[14]);
  let j;
  t[15] === m
    ? (j = t[16])
    : ((j = m === `local` ? (0, k.jsx)(C, { className: `icon-xs` }) : null),
      (t[15] = m),
      (t[16] = j));
  let M;
  t[17] === m
    ? (M = t[18])
    : ((M = m == null ? (0, k.jsx)(p, { "aria-hidden": !1, asset: T }) : null),
      (t[17] = m),
      (t[18] = M));
  let N;
  t[19] !== a || t[20] !== A || t[21] !== j || t[22] !== M || t[23] !== D
    ? ((N = (0, k.jsxs)(h, {
        "aria-busy": a,
        "aria-label": D,
        "data-composer-navigation-target": `run-location`,
        color: `ghost`,
        size: `composerSm`,
        uniform: !0,
        children: [A, j, M],
      })),
      (t[19] = a),
      (t[20] = A),
      (t[21] = j),
      (t[22] = M),
      (t[23] = D),
      (t[24] = N))
    : (N = t[24]);
  let P;
  t[25] !== N || t[26] !== D
    ? ((P = (0, k.jsx)(s, { cloneCustomTrigger: !0, tooltipContent: D, children: N })),
      (t[25] = N),
      (t[26] = D),
      (t[27] = P))
    : (P = t[27]);
  let F;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, k.jsx)(r.Title, {
        children: (0, k.jsx)(n, {
          id: `composer.runLocation.title.question`,
          defaultMessage: `Where should this chat run?`,
          description: `Header above the run location options in the composer action bar`,
        }),
      })),
      (t[28] = F))
    : (F = t[28]);
  let I = m === `local` ? _ : void 0,
    L = g.local != null,
    R = g.local != null,
    z;
  t[29] === u ? (z = t[30]) : ((z = () => u(`local`)), (t[29] = u), (t[30] = z));
  let B;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, k.jsx)(`span`, {
        className: `text-codex-description`,
        children: (0, k.jsx)(n, {
          id: `composer.runLocation.local.description`,
          defaultMessage: `Read and edit local files with permission`,
          description: `Description explaining file access when a task runs on the user's computer`,
        }),
      })),
      (t[31] = B))
    : (B = t[31]);
  let V;
  t[32] === g.local
    ? (V = t[33])
    : ((V =
        g.local === `workspace-disabled`
          ? (0, k.jsxs)(`span`, {
              children: [
                (0, k.jsx)(p, {
                  className: `me-1 inline-block align-middle`,
                  "aria-hidden": !1,
                  asset: T,
                }),
                (0, k.jsx)(n, {
                  id: `composer.runLocation.local.tooltip.workspaceDisabled`,
                  defaultMessage: `Your workspace administrator has disabled Work on your computer`,
                  description: `Tooltip on the disabled local Work composer option when the member's workspace role does not grant the Work Local permission`,
                }),
              ],
            })
          : void 0),
      (t[32] = g.local),
      (t[33] = V));
  let H;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, k.jsx)(n, {
        id: `composer.runLocation.local.optionLabel`,
        defaultMessage: `On your computer`,
        description: `Option to run a task on the user's computer`,
      })),
      (t[34] = H))
    : (H = t[34]);
  let U;
  t[35] !== I || t[36] !== L || t[37] !== R || t[38] !== z || t[39] !== V
    ? ((U = (0, k.jsx)(r.Item, {
        LeftIcon: C,
        RightIcon: I,
        disabled: L,
        focusableWhenDisabled: R,
        onClick: z,
        allowWrap: !0,
        SubText: B,
        tooltipText: V,
        children: H,
      })),
      (t[35] = I),
      (t[36] = L),
      (t[37] = R),
      (t[38] = z),
      (t[39] = V),
      (t[40] = U))
    : (U = t[40]);
  let W = m === `cloud` ? _ : void 0,
    G = g.cloud != null,
    K = g.cloud != null,
    q;
  t[41] === u ? (q = t[42]) : ((q = () => u(`cloud`)), (t[41] = u), (t[42] = q));
  let J;
  t[43] === i
    ? (J = t[44])
    : ((J = (0, k.jsx)(`span`, {
        className: `text-codex-description`,
        children: i
          ? (0, k.jsx)(n, {
              id: `composer.runLocation.cloud.description.localExecutor`,
              defaultMessage: `Can read and edit local files`,
              description: `Description for the Cloud run location when local execution is enabled. Explains that ChatGPT runs in the cloud while retaining access to files on the user's computer.`,
            })
          : (0, k.jsx)(n, {
              id: `composer.runLocation.cloud.description`,
              defaultMessage: `Can't access local files unless attached`,
              description: `Description explaining file access limitations when a task runs in the cloud`,
            }),
      })),
      (t[43] = i),
      (t[44] = J));
  let Y;
  t[45] !== f || t[46] !== g.cloud
    ? ((Y =
        g.cloud === `workspace-disabled`
          ? (0, k.jsxs)(`span`, {
              children: [
                (0, k.jsx)(p, {
                  className: `me-1 inline-block align-middle`,
                  "aria-hidden": !1,
                  asset: T,
                }),
                (0, k.jsx)(n, {
                  id: `composer.runLocation.cloud.tooltip.workspaceDisabled`,
                  defaultMessage: `Your workspace administrator has disabled Work in the cloud`,
                  description: `Tooltip on the disabled Cloud Work composer option when the member's workspace role does not grant the Work Cloud permission`,
                }),
              ],
            })
          : g.cloud === `project-incompatible`
            ? f.formatMessage({
                id: `composer.runLocation.cloud.tooltip.projectOnlyMemory`,
                defaultMessage: `Cloud is unavailable for projects with project-only memory`,
                description: `Tooltip explaining why cloud Work cannot be selected for a project with project-only memory`,
              })
            : void 0),
      (t[45] = f),
      (t[46] = g.cloud),
      (t[47] = Y))
    : (Y = t[47]);
  let X;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, k.jsx)(n, {
        id: `composer.runLocation.cloud`,
        defaultMessage: `In the cloud`,
        description: `Option to run a task in the cloud`,
      })),
      (t[48] = X))
    : (X = t[48]);
  let Z;
  t[49] !== W || t[50] !== G || t[51] !== K || t[52] !== q || t[53] !== J || t[54] !== Y
    ? ((Z = (0, k.jsx)(r.Item, {
        LeftIcon: y,
        RightIcon: W,
        disabled: G,
        focusableWhenDisabled: K,
        onClick: q,
        allowWrap: !0,
        SubText: J,
        tooltipText: Y,
        children: X,
      })),
      (t[49] = W),
      (t[50] = G),
      (t[51] = K),
      (t[52] = q),
      (t[53] = J),
      (t[54] = Y),
      (t[55] = Z))
    : (Z = t[55]);
  let Q;
  return (
    t[56] !== U || t[57] !== Z || t[58] !== P
      ? ((Q = (0, k.jsxs)(o, {
          align: `end`,
          side: `top`,
          contentWidth: `sm`,
          triggerButton: P,
          children: [F, U, Z],
        })),
        (t[56] = U),
        (t[57] = Z),
        (t[58] = P),
        (t[59] = Q))
      : (Q = t[59]),
    Q
  );
}
var O, k;
e(() => {
  ((O = g()), E(), v(), u(), t(), d(), f(), a(), i(), w(), x(), b(), (k = m()));
})();
export { D as ComposerActionBarRunLocationDropdown };
//# sourceMappingURL=composer-action-bar-run-location-dropdown-493913fdcca2.js.map
