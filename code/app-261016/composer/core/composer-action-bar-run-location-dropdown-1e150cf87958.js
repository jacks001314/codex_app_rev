import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Art as r,
  DB as i,
  LNt as a,
  M$ as o,
  MNt as ee,
  NNt as s,
  OB as c,
  PBt as l,
  Qst as te,
  Rrt as u,
  XOt as d,
  Y3 as ne,
  Z3 as f,
  ZSt as p,
  b2 as m,
  ck as h,
  iCt as g,
  j$ as _,
  n6 as v,
  nB as re,
  okt as y,
  rB as b,
  rk as x,
  t6 as S,
  tk as C,
  tkt as w,
  y2 as ie,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ALr as T,
  CG as ae,
  CJt as E,
  Cjr as D,
  Mg as O,
  Ng as oe,
  fQ as se,
  kLr as k,
  pQ as A,
  wG as j,
  xJt as M,
  xMr as ce,
  xjr as N,
  yMr as P,
} from "./app-initial-ad16eaadf81f.js";
import { Du as F, Eu as le } from "./app-primary-3e00728c2a4c.js";
function ue(e) {
  let n = (0, I.c)(28),
    r,
    i,
    a;
  n[0] === e
    ? ((r = n[1]), (i = n[2]), (a = n[3]))
    : (({ eligible: r, onTryNow: i, ...a } = e), (n[0] = e), (n[1] = r), (n[2] = i), (n[3] = a));
  let o = t(te),
    ee = g(M),
    s = g(R),
    c = D(r && `242176852`) && ee && !s,
    l;
  n[4] === o
    ? (l = n[5])
    : ((l = () => {
        o.set(R, !0);
      }),
      (n[4] = o),
      (n[5] = l));
  let u = l,
    d = c ? !0 : a.open,
    f;
  n[6] !== u || n[7] !== a || n[8] !== c
    ? ((f = (e) => {
        (c && !e && u(), a.onOpenChange?.(e));
      }),
      (n[6] = u),
      (n[7] = a),
      (n[8] = c),
      (n[9] = f))
    : (f = n[9]);
  let p = c ? `bottom` : a.side,
    m = c ? `coachmark` : a.variant,
    h = c || a.interactive,
    _ = c || a.keyboardNavigation,
    v = c || a.disableHoverOpen,
    y = !c && a.closeOnTriggerBlur,
    b = !c && a.closeOnPointerLeave,
    x = !c && a.closeOnWindowBlur,
    S;
  n[10] !== u || n[11] !== i || n[12] !== a.tooltipContent || n[13] !== c
    ? ((S = c
        ? (0, L.jsxs)(`div`, {
            className: `flex w-full min-w-0 flex-col gap-2 select-none`,
            children: [
              (0, L.jsx)(`span`, {
                className: `font-bold`,
                children: (0, L.jsx)(w, {
                  id: `composer.runLocation.cloudNux.title`,
                  defaultMessage: `Continue across devices`,
                  description: `Heading of the announcement tooltip on the Work composer run-location picker, inviting external users to switch from local to cloud orchestration`,
                }),
              }),
              (0, L.jsx)(`span`, {
                children: (0, L.jsx)(w, {
                  id: `composer.runLocation.cloudNux.description`,
                  defaultMessage: `Run chats in the cloud to continue on web or mobile, with access to files and tools on your connected computer.`,
                  description: `Body of the Work cloud orchestrator announcement for users with the local executor enabled; cloud orchestration retains local file access and the user can choose local again`,
                }),
              }),
              (0, L.jsx)(`div`, {
                className: `flex items-center justify-end`,
                children: (0, L.jsx)(ne, {
                  color: `primary`,
                  size: `workPopover`,
                  onClick: (e) => {
                    (e.stopPropagation(), i(), u());
                  },
                  children: (0, L.jsx)(w, {
                    id: `composer.runLocation.cloudNux.tryNow`,
                    defaultMessage: `Try now`,
                    description: `Button switching the Work composer to cloud orchestration and dismissing the announcement tooltip`,
                  }),
                }),
              }),
            ],
          })
        : a.tooltipContent),
      (n[10] = u),
      (n[11] = i),
      (n[12] = a.tooltipContent),
      (n[13] = c),
      (n[14] = S))
    : (S = n[14]);
  let C;
  return (
    n[15] !== a ||
    n[16] !== b ||
    n[17] !== x ||
    n[18] !== S ||
    n[19] !== d ||
    n[20] !== f ||
    n[21] !== p ||
    n[22] !== m ||
    n[23] !== h ||
    n[24] !== _ ||
    n[25] !== v ||
    n[26] !== y
      ? ((C = (0, L.jsx)(re, {
          ...a,
          open: d,
          onOpenChange: f,
          side: p,
          variant: m,
          interactive: h,
          keyboardNavigation: _,
          disableHoverOpen: v,
          closeOnTriggerClick: !0,
          closeOnTriggerBlur: y,
          closeOnPointerLeave: b,
          closeOnWindowBlur: x,
          tooltipContent: S,
        })),
        (n[15] = a),
        (n[16] = b),
        (n[17] = x),
        (n[18] = S),
        (n[19] = d),
        (n[20] = f),
        (n[21] = p),
        (n[22] = m),
        (n[23] = h),
        (n[24] = _),
        (n[25] = v),
        (n[26] = y),
        (n[27] = C))
      : (C = n[27]),
    C
  );
}
var I, L, R;
function z() {
  return (z = e(() => {
    ((I = l()),
      p(),
      d(),
      f(),
      b(),
      n(),
      N(),
      k(),
      E(),
      (L = a()),
      (R = T(`work-cloud-orchestrator-nux-dismissed`, !1)));
  }))();
}
function B(e) {
  let n = (0, de.c)(71),
    {
      cloudUsesLocalExecutor: a,
      changeDisabledReason: s,
      isLocalExecutorStarting: c,
      onRunLocationChange: l,
      runLocationState: u,
    } = e,
    d = t(te),
    f = y(),
    { canChooseLocation: p, effectiveLocation: m, unavailableReasons: h } = u,
    g;
  n[0] !== s || n[1] !== m || n[2] !== l || n[3] !== d
    ? ((g = (e, t) => {
        (s == null || e === m) &&
          (l(e),
          (m === `cloud` || m === `local`) &&
            m !== e &&
            ce(d, r, { previousLocation: m, selectedLocation: e, source: t }));
      }),
      (n[0] = s),
      (n[1] = m),
      (n[2] = l),
      (n[3] = d),
      (n[4] = g))
    : (g = n[4]);
  let _ = g,
    b;
  n[5] === h.cloud ? (b = n[6]) : ((b = ae(h.cloud)), (n[5] = h.cloud), (n[6] = b));
  let S = b,
    T;
  n[7] !== p || n[8] !== s || n[9] !== m || n[10] !== h.cloud || n[11] !== h.local
    ? ((T = null),
      p && s == null && m === `cloud` && h.local == null
        ? (T = `local`)
        : p && s == null && m === `local` && h.cloud == null && (T = `cloud`),
      (n[7] = p),
      (n[8] = s),
      (n[9] = m),
      (n[10] = h.cloud),
      (n[11] = h.local),
      (n[12] = T))
    : (T = n[12]);
  let E;
  n[13] !== T || n[14] !== _
    ? ((E = () => {
        T != null && _(T, `keyboard`);
      }),
      (n[13] = T),
      (n[14] = _),
      (n[15] = E))
    : (E = n[15]);
  let D = T != null,
    O;
  if (
    (n[16] === D ? (O = n[17]) : ((O = { enabled: D }), (n[16] = D), (n[17] = O)),
    oe(`composer.toggleWorkRunLocation`, E, O),
    !p)
  )
    return null;
  let k = m === `local` ? void 0 : s;
  if (h.local === `workspace-disabled`) {
    let e;
    (n[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, V.jsxs)(`span`, {
          children: [
            (0, V.jsx)(i, { className: `me-1 inline-block align-middle`, "aria-hidden": !1, asset: o }),
            (0, V.jsx)(w, {
              id: `composer.runLocation.local.tooltip.workspaceDisabled`,
              defaultMessage: `Your workspace administrator has disabled Work on your computer`,
              description: `Tooltip on the disabled local Work composer option when the member's workspace role does not grant the Work Local permission`,
            }),
          ],
        })),
        (n[18] = e))
      : (e = n[18]),
      (k = e));
  }
  let A = m === `cloud` ? void 0 : s;
  if (h.cloud === `workspace-disabled`) {
    let e;
    (n[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, V.jsxs)(`span`, {
          children: [
            (0, V.jsx)(i, { className: `me-1 inline-block align-middle`, "aria-hidden": !1, asset: o }),
            (0, V.jsx)(w, {
              id: `composer.runLocation.cloud.tooltip.workspaceDisabled`,
              defaultMessage: `Your workspace administrator has disabled Work in the cloud`,
              description: `Tooltip on the disabled Cloud Work composer option when the member's workspace role does not grant the Work Cloud permission`,
            }),
          ],
        })),
        (n[19] = e))
      : (e = n[19]),
      (A = e));
  } else if (S != null) {
    let e;
    (n[20] === S ? (e = n[21]) : ((e = (0, V.jsx)(w, { ...S })), (n[20] = S), (n[21] = e)), (A = e));
  }
  let j;
  n[22] !== f || n[23] !== c
    ? ((j = c
        ? f.formatMessage({
            id: `composer.runLocation.triggerLabel.localExecutorStarting`,
            defaultMessage: `Choose where to run this chat. Local execution is starting…`,
            description: `Accessible label for the run location menu while local execution starts`,
          })
        : f.formatMessage({
            id: `composer.runLocation.triggerLabel`,
            defaultMessage: `Choose where to run this chat`,
            description: `Accessible label for the run location menu`,
          })),
      (n[22] = f),
      (n[23] = c),
      (n[24] = j))
    : (j = n[24]);
  let M = j,
    N;
  n[25] !== m || n[26] !== c
    ? ((N =
        m === `cloud`
          ? (0, V.jsx)(le, {
              ref: c ? v : void 0,
              className: ee(`icon-xs`, c && `motion-safe:animate-pulse`),
            })
          : null),
      (n[25] = m),
      (n[26] = c),
      (n[27] = N))
    : (N = n[27]);
  let P;
  n[28] === m
    ? (P = n[29])
    : ((P = m === `local` ? (0, V.jsx)(se, { className: `icon-xs` }) : null), (n[28] = m), (n[29] = P));
  let F;
  n[30] === m
    ? (F = n[31])
    : ((F = m == null ? (0, V.jsx)(i, { "aria-hidden": !1, asset: o }) : null), (n[30] = m), (n[31] = F));
  let I;
  n[32] !== c || n[33] !== N || n[34] !== P || n[35] !== F || n[36] !== M
    ? ((I = (0, V.jsxs)(ne, {
        "aria-busy": c,
        "aria-label": M,
        "data-composer-navigation-target": `run-location`,
        color: `ghost`,
        size: `composerSm`,
        uniform: !0,
        children: [N, P, F],
      })),
      (n[32] = c),
      (n[33] = N),
      (n[34] = P),
      (n[35] = F),
      (n[36] = M),
      (n[37] = I))
    : (I = n[37]);
  let L = I,
    R;
  n[38] !== s || n[39] !== a || n[40] !== m || n[41] !== _ || n[42] !== L || n[43] !== M || n[44] !== h.cloud
    ? ((R = a
        ? (0, V.jsx)(ue, {
            cloneCustomTrigger: !0,
            tooltipContent: M,
            eligible: m === `local` && h.cloud == null && s == null,
            onTryNow: () => _(`cloud`, `nux`),
            children: L,
          })
        : (0, V.jsx)(re, { cloneCustomTrigger: !0, tooltipContent: M, children: L })),
      (n[38] = s),
      (n[39] = a),
      (n[40] = m),
      (n[41] = _),
      (n[42] = L),
      (n[43] = M),
      (n[44] = h.cloud),
      (n[45] = R))
    : (R = n[45]);
  let z;
  n[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, V.jsx)(x.Title, {
        children: (0, V.jsx)(w, {
          id: `composer.runLocation.title.question`,
          defaultMessage: `Where should this chat run?`,
          description: `Header above the run location options in the composer action bar`,
        }),
      })),
      (n[46] = z))
    : (z = n[46]);
  let B = m === `local` ? ie : void 0,
    H = h.local != null || (m !== `local` && s != null),
    U;
  n[47] === _ ? (U = n[48]) : ((U = () => _(`local`, `menu`)), (n[47] = _), (n[48] = U));
  let W;
  n[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, V.jsx)(`span`, {
        className: `text-codex-description`,
        children: (0, V.jsx)(w, {
          id: `composer.runLocation.local.description`,
          defaultMessage: `This chat stays on this computer`,
          description: `Description explaining file access when a task runs on the user's computer`,
        }),
      })),
      (n[49] = W))
    : (W = n[49]);
  let G;
  n[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, V.jsx)(w, {
        id: `composer.runLocation.local.optionLabel`,
        defaultMessage: `On your computer`,
        description: `Option to run a task on the user's computer`,
      })),
      (n[50] = G))
    : (G = n[50]);
  let K;
  n[51] !== k || n[52] !== B || n[53] !== H || n[54] !== U
    ? ((K = (0, V.jsx)(x.Item, {
        LeftIcon: se,
        rightIconAsset: B,
        disabled: H,
        focusableWhenDisabled: !0,
        onClick: U,
        allowWrap: !0,
        SubText: W,
        tooltipText: k,
        children: G,
      })),
      (n[51] = k),
      (n[52] = B),
      (n[53] = H),
      (n[54] = U),
      (n[55] = K))
    : (K = n[55]);
  let q = m === `cloud` ? ie : void 0,
    J = h.cloud != null || (m !== `cloud` && s != null),
    Y;
  n[56] === _ ? (Y = n[57]) : ((Y = () => _(`cloud`, `menu`)), (n[56] = _), (n[57] = Y));
  let X;
  n[58] === a
    ? (X = n[59])
    : ((X = (0, V.jsx)(`span`, {
        className: `text-codex-description`,
        children: a
          ? (0, V.jsx)(w, {
              id: `composer.runLocation.cloud.description.localExecutor`,
              defaultMessage: `Available on any device and can access your computer`,
              description: `Description for the Cloud run location when local execution is enabled. Explains that ChatGPT runs in the cloud while retaining access to files on the user's computer.`,
            })
          : (0, V.jsx)(w, {
              id: `composer.runLocation.cloud.description`,
              defaultMessage: `Can't access local files unless attached`,
              description: `Description explaining file access limitations when a task runs in the cloud`,
            }),
      })),
      (n[58] = a),
      (n[59] = X));
  let Z;
  n[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (0, V.jsx)(w, {
        id: `composer.runLocation.cloud`,
        defaultMessage: `In the cloud`,
        description: `Option to run a task in the cloud`,
      })),
      (n[60] = Z))
    : (Z = n[60]);
  let Q;
  n[61] !== A || n[62] !== q || n[63] !== J || n[64] !== Y || n[65] !== X
    ? ((Q = (0, V.jsx)(x.Item, {
        LeftIcon: le,
        rightIconAsset: q,
        disabled: J,
        focusableWhenDisabled: !0,
        onClick: Y,
        allowWrap: !0,
        SubText: X,
        tooltipText: A,
        children: Z,
      })),
      (n[61] = A),
      (n[62] = q),
      (n[63] = J),
      (n[64] = Y),
      (n[65] = X),
      (n[66] = Q))
    : (Q = n[66]);
  let $;
  return (
    n[67] !== R || n[68] !== K || n[69] !== Q
      ? (($ = (0, V.jsxs)(C, {
          align: `end`,
          side: `top`,
          contentWidth: `sm`,
          triggerButton: R,
          children: [z, K, Q],
        })),
        (n[67] = R),
        (n[68] = K),
        (n[69] = Q),
        (n[70] = $))
      : ($ = n[70]),
    $
  );
}
var de, V;
function H() {
  return (H = e(() => {
    ((de = l()),
      u(),
      m(),
      _(),
      s(),
      p(),
      d(),
      j(),
      z(),
      f(),
      S(),
      h(),
      c(),
      b(),
      F(),
      A(),
      P(),
      n(),
      O(),
      (V = a()));
  }))();
}
H();
export { B as ComposerActionBarRunLocationDropdown };
//# sourceMappingURL=composer-action-bar-run-location-dropdown-1e150cf87958.js.map
