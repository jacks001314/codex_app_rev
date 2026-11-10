import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  AQ as r,
  Ant as i,
  CO as a,
  Cot as ee,
  IDt as o,
  Ixt as te,
  Mz as s,
  Nz as c,
  Pxt as l,
  Rnt as u,
  TO as d,
  VDt as f,
  Vxt as p,
  _Mt as m,
  a3 as h,
  b0 as g,
  cz as _,
  gMt as v,
  jDt as y,
  kQ as b,
  o3 as x,
  sz as ne,
  t3 as S,
  vzt as C,
  wot as w,
  xMt as T,
  y0 as re,
} from "./app-shared-bbfeca5e5737.js";
import {
  $$ as E,
  Q$ as ie,
  Q1t as D,
  QDr as ae,
  XDr as O,
  e0t as k,
  eDr as A,
  fg as j,
  iNr as M,
  lW as oe,
  nDr as N,
  pg as se,
  rNr as P,
  uW as F,
} from "./app-initial-5851df3f6cb1.js";
import { gu as I, hu as ce } from "./app-primary-fe8a450b3b04.js";
function le(e) {
  let n = (0, L.c)(28),
    r,
    i,
    a;
  n[0] === e
    ? ((r = n[1]), (i = n[2]), (a = n[3]))
    : (({ eligible: r, onTryNow: i, ...a } = e), (n[0] = e), (n[1] = r), (n[2] = i), (n[3] = a));
  let s = te(ee),
    c = p(D),
    l = p(z),
    u = N(r && `242176852`) && c && !l,
    d;
  n[4] === s
    ? (d = n[5])
    : ((d = () => {
        s.set(z, !0);
      }),
      (n[4] = s),
      (n[5] = d));
  let f = d,
    m = u ? !0 : a.open,
    h;
  n[6] !== f || n[7] !== a || n[8] !== u
    ? ((h = (e) => {
        (u && !e && f(), a.onOpenChange?.(e));
      }),
      (n[6] = f),
      (n[7] = a),
      (n[8] = u),
      (n[9] = h))
    : (h = n[9]);
  let g = u ? `bottom` : a.side,
    _ = u ? `coachmark` : a.variant,
    v = u || a.interactive,
    y = u || a.keyboardNavigation,
    b = u || a.disableHoverOpen,
    x = !u && a.closeOnTriggerBlur,
    S = !u && a.closeOnPointerLeave,
    C = !u && a.closeOnWindowBlur,
    w;
  n[10] !== f || n[11] !== i || n[12] !== a.tooltipContent || n[13] !== u
    ? ((w = u
        ? (0, R.jsxs)(`div`, {
            className: `flex w-full min-w-0 flex-col gap-2 select-none`,
            children: [
              (0, R.jsx)(`span`, {
                className: `font-bold`,
                children: (0, R.jsx)(o, {
                  id: `composer.runLocation.cloudNux.title`,
                  defaultMessage: `Continue across devices`,
                  description: `Heading of the announcement tooltip on the Work composer run-location picker, inviting external users to switch from local to cloud orchestration`,
                }),
              }),
              (0, R.jsx)(`span`, {
                children: (0, R.jsx)(o, {
                  id: `composer.runLocation.cloudNux.description`,
                  defaultMessage: `Run chats in the cloud to continue on web or mobile, with access to files and tools on your connected computer.`,
                  description: `Body of the Work cloud orchestrator announcement for users with the local executor enabled; cloud orchestration retains local file access and the user can choose local again`,
                }),
              }),
              (0, R.jsx)(`div`, {
                className: `flex items-center justify-end`,
                children: (0, R.jsx)(t, {
                  color: `primary`,
                  size: `workPopover`,
                  onClick: (e) => {
                    (e.stopPropagation(), i(), f());
                  },
                  children: (0, R.jsx)(o, {
                    id: `composer.runLocation.cloudNux.tryNow`,
                    defaultMessage: `Try now`,
                    description: `Button switching the Work composer to cloud orchestration and dismissing the announcement tooltip`,
                  }),
                }),
              }),
            ],
          })
        : a.tooltipContent),
      (n[10] = f),
      (n[11] = i),
      (n[12] = a.tooltipContent),
      (n[13] = u),
      (n[14] = w))
    : (w = n[14]);
  let T;
  return (
    n[15] !== a ||
    n[16] !== S ||
    n[17] !== C ||
    n[18] !== w ||
    n[19] !== m ||
    n[20] !== h ||
    n[21] !== g ||
    n[22] !== _ ||
    n[23] !== v ||
    n[24] !== y ||
    n[25] !== b ||
    n[26] !== x
      ? ((T = (0, R.jsx)(ne, {
          ...a,
          open: m,
          onOpenChange: h,
          side: g,
          variant: _,
          interactive: v,
          keyboardNavigation: y,
          disableHoverOpen: b,
          closeOnTriggerClick: !0,
          closeOnTriggerBlur: x,
          closeOnPointerLeave: S,
          closeOnWindowBlur: C,
          tooltipContent: w,
        })),
        (n[15] = a),
        (n[16] = S),
        (n[17] = C),
        (n[18] = w),
        (n[19] = m),
        (n[20] = h),
        (n[21] = g),
        (n[22] = _),
        (n[23] = v),
        (n[24] = y),
        (n[25] = b),
        (n[26] = x),
        (n[27] = T))
      : (T = n[27]),
    T
  );
}
var L, R, z;
function B() {
  return (B = e(() => {
    ((L = C()),
      l(),
      y(),
      S(),
      _(),
      w(),
      A(),
      P(),
      k(),
      (R = T()),
      (z = M(`work-cloud-orchestrator-nux-dismissed`, !1)));
  }))();
}
function V(e) {
  let n = (0, ue.c)(71),
    {
      cloudUsesLocalExecutor: c,
      changeDisabledReason: l,
      isLocalExecutorStarting: u,
      onRunLocationChange: p,
      runLocationState: m,
    } = e,
    h = te(ee),
    g = f(),
    { canChooseLocation: _, effectiveLocation: y, unavailableReasons: b } = m,
    S;
  n[0] !== l || n[1] !== y || n[2] !== p || n[3] !== h
    ? ((S = (e, t) => {
        (l == null || e === y) &&
          (p(e),
          (y === `cloud` || y === `local`) &&
            y !== e &&
            ae(h, i, { previousLocation: y, selectedLocation: e, source: t }));
      }),
      (n[0] = l),
      (n[1] = y),
      (n[2] = p),
      (n[3] = h),
      (n[4] = S))
    : (S = n[4]);
  let C = S,
    w;
  n[5] === b.cloud ? (w = n[6]) : ((w = oe(b.cloud)), (n[5] = b.cloud), (n[6] = w));
  let T = w,
    E;
  n[7] !== _ || n[8] !== l || n[9] !== y || n[10] !== b.cloud || n[11] !== b.local
    ? ((E = null),
      _ && l == null && y === `cloud` && b.local == null
        ? (E = `local`)
        : _ && l == null && y === `local` && b.cloud == null && (E = `cloud`),
      (n[7] = _),
      (n[8] = l),
      (n[9] = y),
      (n[10] = b.cloud),
      (n[11] = b.local),
      (n[12] = E))
    : (E = n[12]);
  let D;
  n[13] !== E || n[14] !== C
    ? ((D = () => {
        E != null && C(E, `keyboard`);
      }),
      (n[13] = E),
      (n[14] = C),
      (n[15] = D))
    : (D = n[15]);
  let O = E != null,
    k;
  if (
    (n[16] === O ? (k = n[17]) : ((k = { enabled: O }), (n[16] = O), (n[17] = k)),
    se(`composer.toggleWorkRunLocation`, D, k),
    !_)
  )
    return null;
  let A = y === `local` ? void 0 : l;
  if (b.local === `workspace-disabled`) {
    let e;
    (n[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, H.jsxs)(`span`, {
          children: [
            (0, H.jsx)(s, { className: `me-1 inline-block align-middle`, "aria-hidden": !1, asset: r }),
            (0, H.jsx)(o, {
              id: `composer.runLocation.local.tooltip.workspaceDisabled`,
              defaultMessage: `Your workspace administrator has disabled Work on your computer`,
              description: `Tooltip on the disabled local Work composer option when the member's workspace role does not grant the Work Local permission`,
            }),
          ],
        })),
        (n[18] = e))
      : (e = n[18]),
      (A = e));
  }
  let j = y === `cloud` ? void 0 : l;
  if (b.cloud === `workspace-disabled`) {
    let e;
    (n[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, H.jsxs)(`span`, {
          children: [
            (0, H.jsx)(s, { className: `me-1 inline-block align-middle`, "aria-hidden": !1, asset: r }),
            (0, H.jsx)(o, {
              id: `composer.runLocation.cloud.tooltip.workspaceDisabled`,
              defaultMessage: `Your workspace administrator has disabled Work in the cloud`,
              description: `Tooltip on the disabled Cloud Work composer option when the member's workspace role does not grant the Work Cloud permission`,
            }),
          ],
        })),
        (n[19] = e))
      : (e = n[19]),
      (j = e));
  } else if (T != null) {
    let e;
    (n[20] === T ? (e = n[21]) : ((e = (0, H.jsx)(o, { ...T })), (n[20] = T), (n[21] = e)), (j = e));
  }
  let M;
  n[22] !== g || n[23] !== u
    ? ((M = u
        ? g.formatMessage({
            id: `composer.runLocation.triggerLabel.localExecutorStarting`,
            defaultMessage: `Choose where to run this chat. Local execution is starting…`,
            description: `Accessible label for the run location menu while local execution starts`,
          })
        : g.formatMessage({
            id: `composer.runLocation.triggerLabel`,
            defaultMessage: `Choose where to run this chat`,
            description: `Accessible label for the run location menu`,
          })),
      (n[22] = g),
      (n[23] = u),
      (n[24] = M))
    : (M = n[24]);
  let N = M,
    P;
  n[25] !== y || n[26] !== u
    ? ((P =
        y === `cloud`
          ? (0, H.jsx)(ce, { ref: u ? x : void 0, className: v(`icon-xs`, u && `motion-safe:animate-pulse`) })
          : null),
      (n[25] = y),
      (n[26] = u),
      (n[27] = P))
    : (P = n[27]);
  let F;
  n[28] === y
    ? (F = n[29])
    : ((F = y === `local` ? (0, H.jsx)(ie, { className: `icon-xs` }) : null), (n[28] = y), (n[29] = F));
  let I;
  n[30] === y
    ? (I = n[31])
    : ((I = y == null ? (0, H.jsx)(s, { "aria-hidden": !1, asset: r }) : null), (n[30] = y), (n[31] = I));
  let L;
  n[32] !== u || n[33] !== P || n[34] !== F || n[35] !== I || n[36] !== N
    ? ((L = (0, H.jsxs)(t, {
        "aria-busy": u,
        "aria-label": N,
        "data-composer-navigation-target": `run-location`,
        color: `ghost`,
        size: `composerSm`,
        uniform: !0,
        children: [P, F, I],
      })),
      (n[32] = u),
      (n[33] = P),
      (n[34] = F),
      (n[35] = I),
      (n[36] = N),
      (n[37] = L))
    : (L = n[37]);
  let R = L,
    z;
  n[38] !== l || n[39] !== c || n[40] !== y || n[41] !== C || n[42] !== R || n[43] !== N || n[44] !== b.cloud
    ? ((z = c
        ? (0, H.jsx)(le, {
            cloneCustomTrigger: !0,
            tooltipContent: N,
            eligible: y === `local` && b.cloud == null && l == null,
            onTryNow: () => C(`cloud`, `nux`),
            children: R,
          })
        : (0, H.jsx)(ne, { cloneCustomTrigger: !0, tooltipContent: N, children: R })),
      (n[38] = l),
      (n[39] = c),
      (n[40] = y),
      (n[41] = C),
      (n[42] = R),
      (n[43] = N),
      (n[44] = b.cloud),
      (n[45] = z))
    : (z = n[45]);
  let B;
  n[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, H.jsx)(d.Title, {
        children: (0, H.jsx)(o, {
          id: `composer.runLocation.title.question`,
          defaultMessage: `Where should this chat run?`,
          description: `Header above the run location options in the composer action bar`,
        }),
      })),
      (n[46] = B))
    : (B = n[46]);
  let V = y === `local` ? re : void 0,
    U = b.local != null || (y !== `local` && l != null),
    W;
  n[47] === C ? (W = n[48]) : ((W = () => C(`local`, `menu`)), (n[47] = C), (n[48] = W));
  let G;
  n[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, H.jsx)(`span`, {
        className: `text-codex-description`,
        children: (0, H.jsx)(o, {
          id: `composer.runLocation.local.description`,
          defaultMessage: `This chat stays on this computer`,
          description: `Description explaining file access when a task runs on the user's computer`,
        }),
      })),
      (n[49] = G))
    : (G = n[49]);
  let K;
  n[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, H.jsx)(o, {
        id: `composer.runLocation.local.optionLabel`,
        defaultMessage: `On your computer`,
        description: `Option to run a task on the user's computer`,
      })),
      (n[50] = K))
    : (K = n[50]);
  let q;
  n[51] !== A || n[52] !== V || n[53] !== U || n[54] !== W
    ? ((q = (0, H.jsx)(d.Item, {
        LeftIcon: ie,
        rightIconAsset: V,
        disabled: U,
        focusableWhenDisabled: !0,
        onClick: W,
        allowWrap: !0,
        SubText: G,
        tooltipText: A,
        children: K,
      })),
      (n[51] = A),
      (n[52] = V),
      (n[53] = U),
      (n[54] = W),
      (n[55] = q))
    : (q = n[55]);
  let J = y === `cloud` ? re : void 0,
    de = b.cloud != null || (y !== `cloud` && l != null),
    Y;
  n[56] === C ? (Y = n[57]) : ((Y = () => C(`cloud`, `menu`)), (n[56] = C), (n[57] = Y));
  let X;
  n[58] === c
    ? (X = n[59])
    : ((X = (0, H.jsx)(`span`, {
        className: `text-codex-description`,
        children: c
          ? (0, H.jsx)(o, {
              id: `composer.runLocation.cloud.description.localExecutor`,
              defaultMessage: `Available on any device and can access your computer`,
              description: `Description for the Cloud run location when local execution is enabled. Explains that ChatGPT runs in the cloud while retaining access to files on the user's computer.`,
            })
          : (0, H.jsx)(o, {
              id: `composer.runLocation.cloud.description`,
              defaultMessage: `Can't access local files unless attached`,
              description: `Description explaining file access limitations when a task runs in the cloud`,
            }),
      })),
      (n[58] = c),
      (n[59] = X));
  let Z;
  n[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (0, H.jsx)(o, {
        id: `composer.runLocation.cloud`,
        defaultMessage: `In the cloud`,
        description: `Option to run a task in the cloud`,
      })),
      (n[60] = Z))
    : (Z = n[60]);
  let Q;
  n[61] !== j || n[62] !== J || n[63] !== de || n[64] !== Y || n[65] !== X
    ? ((Q = (0, H.jsx)(d.Item, {
        LeftIcon: ce,
        rightIconAsset: J,
        disabled: de,
        focusableWhenDisabled: !0,
        onClick: Y,
        allowWrap: !0,
        SubText: X,
        tooltipText: j,
        children: Z,
      })),
      (n[61] = j),
      (n[62] = J),
      (n[63] = de),
      (n[64] = Y),
      (n[65] = X),
      (n[66] = Q))
    : (Q = n[66]);
  let $;
  return (
    n[67] !== z || n[68] !== q || n[69] !== Q
      ? (($ = (0, H.jsxs)(a, {
          align: `end`,
          side: `top`,
          contentWidth: `sm`,
          triggerButton: z,
          children: [B, q, Q],
        })),
        (n[67] = z),
        (n[68] = q),
        (n[69] = Q),
        (n[70] = $))
      : ($ = n[70]),
    $
  );
}
var ue, H;
function U() {
  return (U = e(() => {
    ((ue = C()),
      u(),
      g(),
      b(),
      m(),
      l(),
      y(),
      F(),
      B(),
      S(),
      h(),
      n(),
      c(),
      _(),
      I(),
      E(),
      O(),
      w(),
      j(),
      (H = T()));
  }))();
}
U();
export { V as ComposerActionBarRunLocationDropdown };
//# sourceMappingURL=composer-action-bar-run-location-dropdown-3dfe5e572768.js.map
