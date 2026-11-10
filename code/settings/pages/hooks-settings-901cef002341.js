import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $7 as n,
  $G as r,
  $qt as i,
  A3t as a,
  A7 as o,
  AMt as s,
  Ad as c,
  Amn as l,
  Aw as u,
  B6t as d,
  B9 as f,
  BO as p,
  BS as m,
  Cj as h,
  Cpn as g,
  D3t as _,
  DG as v,
  E$ as y,
  E6t as b,
  F3t as x,
  FO as S,
  Gu as C,
  Hu as w,
  IXt as T,
  JS as ee,
  Jit as E,
  Jqt as D,
  Jrt as O,
  KS as k,
  KXt as A,
  KYt as j,
  Kit as M,
  LXt as N,
  N3t as te,
  Nvt as P,
  O3t as F,
  OG as I,
  Oit as L,
  Opn as ne,
  Ow as R,
  PO as z,
  Q7 as re,
  QG as B,
  Qu as V,
  Rit as H,
  Rpn as U,
  Rvt as ie,
  Sj as W,
  Spn as G,
  T$ as K,
  T6t as q,
  V9 as ae,
  VS as oe,
  Vu as J,
  XS as se,
  Xrt as ce,
  Xu as le,
  Yqt as ue,
  Z7 as de,
  ZXt as fe,
  Zrt as pe,
  Zu as Y,
  a3t as me,
  b7 as he,
  bMt as ge,
  bpt as _e,
  e9 as ve,
  e9t as ye,
  eit as be,
  fk as xe,
  g5t as Se,
  gMt as Ce,
  hMt as we,
  hmn as Te,
  iit as Ee,
  jXt as De,
  kMt as Oe,
  kXt as ke,
  kd as Ae,
  kit as je,
  kmn as Me,
  o3t as Ne,
  pk as Pe,
  qS as Fe,
  qYt as Ie,
  qqt as Le,
  qu as Re,
  rit as ze,
  s3t as Be,
  tJt as Ve,
  tit as He,
  vit as Ue,
  vpn as We,
  xpn as Ge,
  yMt as Ke,
  yit as qe,
  ypt as Je,
  zO as Ye,
  zit as Xe,
  zpn as Ze,
} from "./app-initial-f094ef01c64d.js";
import { Fm as Qe, Im as $e, fc as et, pc as tt } from "./app-primary-4c40d73a1074.js";
import { a as nt, i as rt, n as it, r as at, t as ot } from "./hooks-settings-copy-1a7d90350f27.js";
import {
  _ as st,
  a as ct,
  c as lt,
  g as ut,
  i as dt,
  l as ft,
  m as pt,
  o as mt,
  p as ht,
  r as gt,
  s as _t,
  u as vt,
} from "./hooks-settings-route-dc9cfc2985b4.js";
import { n as yt, t as bt } from "./settings-loading-row-de4ab81779d6.js";
function xt(e, t) {
  let n =
      e.issueCount > 0
        ? t.formatMessage(
            {
              id: `settings.hooks.summary.issueCounts`,
              defaultMessage: `{issueCount, plural, one {# issue} other {# issues}}`,
              description: `Hook load issue count for a project row`,
            },
            { issueCount: e.issueCount },
          )
        : ``,
    r =
      e.needsReview > 0
        ? t.formatMessage(
            {
              id: `settings.hooks.summary.reviewCounts`,
              defaultMessage: `{needsReview, plural, one {# needs review} other {# need review}}`,
              description: `Review-needed hook count for a project row`,
            },
            { needsReview: e.needsReview },
          )
        : ``;
  return (0, St.jsx)(g, {
    id: `settings.hooks.summary.attentionCounts`,
    defaultMessage: `{issueCount}{separator}{needsReview}`,
    description: `Combined hook load issue and review-needed counts for a project row`,
    values: { issueCount: n, separator: n !== `` && r !== `` ? ` · ` : ``, needsReview: r },
  });
}
var St,
  Ct = e(() => {
    (G(), (St = Te()));
  }),
  wt,
  Tt = e(() => {
    (ge(),
      (wt = Ke({
        name: `hook-light-16`,
        canvas: {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 2.141602, y: 1.597656, width: 11.716797, height: 12.62793 },
          visualBounds: { x: 2.141602, y: 1.597656, width: 11.716797, height: 12.62793 },
        },
        paint: { kind: `monochrome` },
        optical: {
          shape: `non-circular`,
          bounds: { x: 2.141602, y: 1.597656, width: 11.716797, height: 12.62793 },
          center: { x: 8, y: 7.911621 },
          insets: { top: 1.597656, right: 2.141601, bottom: 1.774414, left: 2.141602 },
          anchors: {
            frame: { x: 8, y: 8 },
            ink: { x: 8, y: 7.911621 },
            foreground: { x: 8, y: 7.911621 },
          },
        },
        capabilities: [`icon`],
        body: `<path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.59766C9.39452 1.59766 10.5254 2.72853 10.5254 4.12305C10.5254 5.33728 9.66764 6.34981 8.52539 6.5918V11.0342C8.52556 12.2139 9.47942 13.1717 10.6592 13.1758C11.8447 13.1798 12.8084 12.2197 12.8086 11.0342V9.95215L11.8086 10.6797C11.5742 10.8498 11.2457 10.7977 11.0752 10.5635C10.9049 10.329 10.9571 10.0006 11.1914 9.83008L12.7324 8.70898C13.2008 8.36838 13.8581 8.70314 13.8584 9.28223V11.0342C13.8582 12.801 12.4221 14.2316 10.6553 14.2256C9.5416 14.2216 8.56418 13.6464 7.99609 12.7793C7.42476 13.6433 6.44623 14.2148 5.33301 14.2148C3.57068 14.2147 2.14197 12.7857 2.1416 11.0234V9.28223C2.1416 8.70306 2.79918 8.36833 3.26758 8.70898L4.80859 9.83008C5.04289 10.0006 5.09511 10.329 4.9248 10.5635C4.75431 10.7977 4.42581 10.8498 4.19141 10.6797L3.19141 9.95215V11.0234C3.19178 12.2058 4.15058 13.1649 5.33301 13.165C6.51559 13.165 7.47424 12.2059 7.47461 11.0234V6.5918C6.33236 6.34981 5.47461 5.33728 5.47461 4.12305C5.47461 2.72853 6.60548 1.59766 8 1.59766ZM8 2.64844C7.18538 2.64844 6.52539 3.30843 6.52539 4.12305C6.52539 4.93767 7.18538 5.59766 8 5.59766C8.81462 5.59766 9.47461 4.93767 9.47461 4.12305C9.47461 3.30843 8.81462 2.64844 8 2.64844Z" fill="currentColor"/>`,
      })));
  });
function Et(e) {
  let t = (0, jt.c)(26),
    {
      eventName: n,
      hostId: r,
      isRemoteHost: i,
      hooks: a,
      projectRoot: o,
      onToggleHookEnabled: s,
      onTrustHook: c,
    } = e,
    l = ne(),
    [u, d] = (0, Mt.useState)(null),
    f,
    p,
    m;
  if (
    t[0] !== n ||
    t[1] !== u ||
    t[2] !== a ||
    t[3] !== r ||
    t[4] !== l ||
    t[5] !== i ||
    t[6] !== s ||
    t[7] !== c ||
    t[8] !== o
  ) {
    let e = lt(a, n);
    ((m = `border-t border-default px-3`), (f = `divide-y-[0.5px] divide-border`));
    let h;
    (t[12] !== u ||
    t[13] !== r ||
    t[14] !== l ||
    t[15] !== i ||
    t[16] !== s ||
    t[17] !== c ||
    t[18] !== o
      ? ((h = (e, t) => {
          let n = st(e),
            a = !i && !e.isManaged,
            f = u === e.key,
            p = (0, X.jsx)(B, {
              "aria-hidden": n || void 0,
              ariaLabel: at(t, l),
              checked: e.enabled && !n,
              className: n ? `pointer-events-none` : ``,
              disabled: n,
              onChange: (t) => {
                s(e, t);
              },
            });
          return (0, X.jsxs)(
            `div`,
            {
              className: U(f && `pb-2`),
              children: [
                (0, X.jsxs)(`div`, {
                  className: `-mx-3 flex items-center gap-2 px-3 hover:bg-primary-ghost-hover`,
                  children: [
                    (0, X.jsxs)(`div`, {
                      className: `relative flex min-w-0 flex-1`,
                      children: [
                        (0, X.jsx)(`button`, {
                          type: `button`,
                          "aria-expanded": f,
                          className: U(
                            `flex min-w-0 flex-1 cursor-interaction appearance-none items-center border-0 bg-transparent py-2 ps-7 text-start text-sm text-inherit [font:inherit] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
                            a ? `pe-12` : `pe-6`,
                          ),
                          onClick: () => {
                            d(f ? null : e.key);
                          },
                          children: (0, X.jsx)(`span`, {
                            className: `shrink-0 text-default`,
                            children: at(t, l),
                          }),
                        }),
                        a
                          ? (0, X.jsx)(M, {
                              triggerAsChild: !0,
                              tooltipContent: (0, X.jsx)(g, { ...Nt.openConfigFile }),
                              children: (0, X.jsx)(`button`, {
                                type: `button`,
                                "aria-label": l.formatMessage(Nt.openConfigFile),
                                className: `absolute top-1/2 right-6 inline-flex size-5 -translate-y-1/2 cursor-interaction items-center justify-center rounded-md text-tertiary hover:bg-primary-ghost-hover hover:text-default focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
                                onClick: () => {
                                  y({
                                    cwd: e.source === `project` ? ye(o) : null,
                                    hostId: r,
                                    path: e.sourcePath,
                                  });
                                },
                                children: (0, X.jsx)(q, {
                                  className: `icon-xxs`,
                                  "aria-hidden": !0,
                                }),
                              }),
                            })
                          : null,
                        (0, X.jsx)(Ue, {
                          "aria-hidden": !0,
                          className: U(
                            `icon-2xs pointer-events-none absolute top-1/2 right-1 -translate-y-1/2 text-secondary`,
                            f && `rotate-180`,
                          ),
                        }),
                      ],
                    }),
                    (0, X.jsxs)(`div`, {
                      className: `flex shrink-0 items-center gap-2`,
                      children: [
                        n
                          ? (0, X.jsx)(M, {
                              tooltipContent:
                                e.trustStatus === `modified`
                                  ? (0, X.jsx)(g, {
                                      id: `settings.hooks.event.changedReviewReason`,
                                      defaultMessage: `Hook changed since last trusted`,
                                      description: `Tooltip shown for changed hooks awaiting review`,
                                    })
                                  : (0, X.jsx)(g, {
                                      id: `settings.hooks.event.untrustedReviewReason`,
                                      defaultMessage: `New hook`,
                                      description: `Tooltip shown for hooks awaiting first review`,
                                    }),
                              children: (0, X.jsxs)(Oe, {
                                color: `outline`,
                                size: `composerSm`,
                                onClick: () => {
                                  c(e);
                                },
                                children: [
                                  (0, X.jsx)(et, { className: `icon-2xs` }),
                                  (0, X.jsx)(g, {
                                    id: `settings.hooks.event.trust`,
                                    defaultMessage: `Trust`,
                                    description: `Button label to trust a hook`,
                                  }),
                                ],
                              }),
                            })
                          : null,
                        e.isManaged
                          ? (0, X.jsx)(M, {
                              tooltipContent: (0, X.jsx)(g, {
                                id: `settings.hooks.event.managedTooltip`,
                                defaultMessage: `Managed hooks are always on`,
                                description: `Tooltip shown for admin-managed hooks`,
                              }),
                              children: (0, X.jsx)(`span`, {
                                "aria-checked": `true`,
                                "aria-disabled": `true`,
                                "aria-label": at(t, l),
                                className: `inline-flex cursor-not-allowed rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
                                role: `switch`,
                                tabIndex: 0,
                                children: (0, X.jsx)(B, {
                                  "aria-hidden": `true`,
                                  ariaLabel: at(t, l),
                                  checked: !0,
                                  className: `pointer-events-none`,
                                  disabled: !0,
                                  onChange: Dt,
                                }),
                              }),
                            })
                          : (0, X.jsx)(M, {
                              tooltipContent: n
                                ? (0, X.jsx)(g, {
                                    id: `settings.hooks.event.disabledUntilTrustedTooltip`,
                                    defaultMessage: `Disabled until hook is trusted`,
                                    description: `Tooltip shown for review-needed hooks whose toggle cannot be enabled yet`,
                                  })
                                : null,
                              children: n
                                ? (0, X.jsx)(`span`, {
                                    "aria-checked": `false`,
                                    "aria-disabled": `true`,
                                    "aria-label": at(t, l),
                                    className: `inline-flex cursor-not-allowed rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
                                    role: `switch`,
                                    tabIndex: 0,
                                    children: p,
                                  })
                                : p,
                            }),
                      ],
                    }),
                  ],
                }),
                f
                  ? (0, X.jsx)(`div`, { className: `ps-7`, children: (0, X.jsx)(Ot, { hook: e }) })
                  : null,
              ],
            },
            e.key,
          );
        }),
        (t[12] = u),
        (t[13] = r),
        (t[14] = l),
        (t[15] = i),
        (t[16] = s),
        (t[17] = c),
        (t[18] = o),
        (t[19] = h))
      : (h = t[19]),
      (p = e.map(h)),
      (t[0] = n),
      (t[1] = u),
      (t[2] = a),
      (t[3] = r),
      (t[4] = l),
      (t[5] = i),
      (t[6] = s),
      (t[7] = c),
      (t[8] = o),
      (t[9] = f),
      (t[10] = p),
      (t[11] = m));
  } else ((f = t[9]), (p = t[10]), (m = t[11]));
  let h;
  t[20] !== f || t[21] !== p
    ? ((h = (0, X.jsx)(`div`, { className: f, children: p })),
      (t[20] = f),
      (t[21] = p),
      (t[22] = h))
    : (h = t[22]);
  let _;
  return (
    t[23] !== m || t[24] !== h
      ? ((_ = (0, X.jsx)(`div`, { className: m, children: h })),
        (t[23] = m),
        (t[24] = h),
        (t[25] = _))
      : (_ = t[25]),
    _
  );
}
function Dt() {}
function Ot(e) {
  let t = (0, jt.c)(19),
    { hook: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, X.jsx)(g, {
        id: `settings.hooks.event.handler`,
        defaultMessage: `Handler`,
        description: `Label for the handler type of a configured hook`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n.handlerType
    ? (i = t[2])
    : ((i = (0, X.jsx)(kt, { label: r, children: (0, X.jsx)(At, { handlerType: n.handlerType }) })),
      (t[1] = n.handlerType),
      (t[2] = i));
  let a;
  t[3] !== n.command || t[4] !== n.handlerType
    ? ((a =
        n.handlerType === `command`
          ? (0, X.jsx)(kt, {
              label: (0, X.jsx)(g, {
                id: `settings.hooks.event.command`,
                defaultMessage: `Command`,
                description: `Label for the command executed by a hook`,
              }),
              children: (0, X.jsx)(`code`, {
                className: `block font-mono text-xs break-all whitespace-pre-wrap`,
                children: n.command,
              }),
            })
          : null),
      (t[3] = n.command),
      (t[4] = n.handlerType),
      (t[5] = a))
    : (a = t[5]);
  let o;
  t[6] === n.matcher
    ? (o = t[7])
    : ((o =
        n.matcher == null
          ? null
          : (0, X.jsx)(kt, {
              label: (0, X.jsx)(g, {
                id: `settings.hooks.event.matcher`,
                defaultMessage: `Matcher`,
                description: `Label for the matcher configured for a hook`,
              }),
              children: (0, X.jsx)(`code`, {
                className: `font-mono text-xs break-all`,
                children: n.matcher,
              }),
            })),
      (t[6] = n.matcher),
      (t[7] = o));
  let s;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsx)(g, {
        id: `settings.hooks.event.timeout`,
        defaultMessage: `Timeout`,
        description: `Label for a hook execution timeout`,
      })),
      (t[8] = s))
    : (s = t[8]);
  let c;
  t[9] === n.timeoutSec
    ? (c = t[10])
    : ((c = (0, X.jsx)(kt, {
        label: s,
        children: (0, X.jsx)(We, {
          value: n.timeoutSec,
          style: `unit`,
          unit: `second`,
          unitDisplay: `narrow`,
        }),
      })),
      (t[9] = n.timeoutSec),
      (t[10] = c));
  let l;
  t[11] === n.statusMessage
    ? (l = t[12])
    : ((l =
        n.statusMessage == null
          ? null
          : (0, X.jsx)(kt, {
              label: (0, X.jsx)(g, {
                id: `settings.hooks.event.statusMessage`,
                defaultMessage: `Status message`,
                description: `Label for the status message configured for a hook`,
              }),
              children: n.statusMessage,
            })),
      (t[11] = n.statusMessage),
      (t[12] = l));
  let u;
  return (
    t[13] !== i || t[14] !== a || t[15] !== o || t[16] !== c || t[17] !== l
      ? ((u = (0, X.jsx)(`div`, {
          className: `mt-2 overflow-hidden rounded-md border border-default text-sm`,
          children: (0, X.jsxs)(`dl`, {
            className: `grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-2 px-3 py-3`,
            children: [i, a, o, c, l],
          }),
        })),
        (t[13] = i),
        (t[14] = a),
        (t[15] = o),
        (t[16] = c),
        (t[17] = l),
        (t[18] = u))
      : (u = t[18]),
    u
  );
}
function kt(e) {
  let t = (0, jt.c)(7),
    { label: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, X.jsx)(`dt`, { className: `text-secondary`, children: n })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = (0, X.jsx)(`dd`, { className: `min-w-0 text-default`, children: r })),
      (t[2] = r),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, X.jsxs)(X.Fragment, { children: [i, a] })), (t[4] = i), (t[5] = a), (t[6] = o))
      : (o = t[6]),
    o
  );
}
function At(e) {
  let t = (0, jt.c)(4),
    { handlerType: n } = e;
  switch (n) {
    case `command`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(g, {
              id: `settings.hooks.event.commandHandler`,
              defaultMessage: `Command`,
              description: `Label for a command hook handler type`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `mcpTool`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(g, {
              id: `settings.hooks.event.mcpToolHandler`,
              defaultMessage: `MCP tool`,
              description: `Label for an MCP tool hook handler type`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `prompt`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(g, {
              id: `settings.hooks.event.promptHandler`,
              defaultMessage: `Prompt`,
              description: `Label for a prompt hook handler type`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `agent`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(g, {
              id: `settings.hooks.event.agentHandler`,
              defaultMessage: `Agent`,
              description: `Label for an agent hook handler type`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
  }
}
var jt,
  Mt,
  X,
  Nt,
  Pt = e(() => {
    ((jt = Me()),
      Ze(),
      d(),
      (Mt = t(l(), 1)),
      G(),
      s(),
      r(),
      E(),
      K(),
      qe(),
      b(),
      tt(),
      nt(),
      ut(),
      (X = Te()),
      (Nt = Ge({
        openConfigFile: {
          id: `settings.hooks.event.openConfigFile`,
          defaultMessage: `Open config file`,
          description: `Button label for opening the config file that defines a hook`,
        },
      })));
  });
function Ft(e) {
  let t = (0, Ht.c)(28),
    {
      entry: n,
      hostId: r,
      isOpen: i,
      isLoading: a,
      isRemoteHost: o,
      loadError: s,
      title: c,
      titleHref: l,
      titleIcon: u,
      subtitle: d,
      onClose: f,
      onToggleHookEnabled: p,
      onTrustHook: m,
    } = e,
    h;
  t[0] !== c || t[1] !== l || t[2] !== u
    ? ((h = (0, Z.jsx)(ze, {
        asChild: !0,
        children: (0, Z.jsx)(`h2`, {
          className: `flex min-w-0`,
          children:
            l == null
              ? (0, Z.jsxs)(`span`, {
                  className: `flex min-w-0 items-center gap-2`,
                  children: [
                    u == null
                      ? null
                      : (0, Z.jsx)(`span`, {
                          className: `flex shrink-0 items-center justify-center`,
                          children: u,
                        }),
                    (0, Z.jsx)(`span`, { className: `min-w-0`, children: c }),
                  ],
                })
              : (0, Z.jsxs)(N, {
                  className: `group -m-1 inline-flex min-w-0 cursor-interaction items-center gap-2 rounded-md p-1 hover:bg-primary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:scale-[0.98]`,
                  to: l,
                  children: [
                    u == null
                      ? null
                      : (0, Z.jsx)(`span`, {
                          className: `flex shrink-0 items-center justify-center`,
                          children: u,
                        }),
                    (0, Z.jsx)(`span`, { className: `min-w-0`, children: c }),
                    (0, Z.jsx)(Ue, {
                      className: `icon-2xs shrink-0 -rotate-90 opacity-0 transition-transform duration-basic group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:translate-x-0.5 group-focus-visible:opacity-100`,
                      "aria-hidden": !0,
                    }),
                  ],
                }),
        }),
      })),
      (t[0] = c),
      (t[1] = l),
      (t[2] = u),
      (t[3] = h))
    : (h = t[3]);
  let _ = h,
    v;
  t[4] === f
    ? (v = t[5])
    : ((v = (e) => {
        e || f();
      }),
      (t[4] = f),
      (t[5] = v));
  let y;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = { "aria-describedby": void 0 }), (t[6] = y))
    : (y = t[6]);
  let b;
  t[7] !== _ || t[8] !== d
    ? ((b = (0, Z.jsx)(pe, {
        children: (0, Z.jsx)(ce, { title: _, subtitle: d, subtitleClassName: `break-all` }),
      })),
      (t[7] = _),
      (t[8] = d),
      (t[9] = b))
    : (b = t[9]);
  let x;
  t[10] !== n ||
  t[11] !== r ||
  t[12] !== a ||
  t[13] !== i ||
  t[14] !== o ||
  t[15] !== s ||
  t[16] !== p ||
  t[17] !== m
    ? ((x = i
        ? a
          ? (0, Z.jsx)(J, {
              children: (0, Z.jsx)(bt, {
                children: (0, Z.jsx)(g, {
                  id: `settings.hooks.loading.label`,
                  defaultMessage: `Loading hooks…`,
                  description: `Label while hooks are loading`,
                }),
              }),
            })
          : s == null
            ? (0, Z.jsx)(It, {
                entry: n,
                hostId: r,
                isRemoteHost: o,
                onToggleHookEnabled: p,
                onTrustHook: m,
              })
            : (0, Z.jsx)(J, {
                children: (0, Z.jsx)(Re, {
                  label: (0, Z.jsx)(g, {
                    id: `settings.hooks.loadError.label`,
                    defaultMessage: `Could not load hooks`,
                    description: `Label when hooks settings fails to load hooks`,
                  }),
                  description: (0, Z.jsx)(`span`, {
                    className: `[text-wrap:wrap] break-words`,
                    children: s.message,
                  }),
                  control: null,
                }),
              })
        : null),
      (t[10] = n),
      (t[11] = r),
      (t[12] = a),
      (t[13] = i),
      (t[14] = o),
      (t[15] = s),
      (t[16] = p),
      (t[17] = m),
      (t[18] = x))
    : (x = t[18]);
  let S;
  t[19] === x
    ? (S = t[20])
    : ((S = (0, Z.jsx)(pe, {
        className: `vertical-scroll-fade-mask min-h-0 flex-1 gap-3 overflow-y-auto pe-1 [&>*]:shrink-0`,
        children: x,
      })),
      (t[19] = x),
      (t[20] = S));
  let C;
  t[21] !== b || t[22] !== S
    ? ((C = (0, Z.jsxs)(O, { className: `max-h-[calc(100vh-6rem)] min-h-0`, children: [b, S] })),
      (t[21] = b),
      (t[22] = S),
      (t[23] = C))
    : (C = t[23]);
  let w;
  return (
    t[24] !== i || t[25] !== v || t[26] !== C
      ? ((w = (0, Z.jsx)(He, {
          open: i,
          onOpenChange: v,
          contentProps: y,
          size: `xwide`,
          children: C,
        })),
        (t[24] = i),
        (t[25] = v),
        (t[26] = C),
        (t[27] = w))
      : (w = t[27]),
    w
  );
}
function It(e) {
  let t = (0, Ht.c)(24),
    { entry: n, hostId: r, isRemoteHost: i, onToggleHookEnabled: a, onTrustHook: o } = e,
    s = ne(),
    [c, l] = (0, Ut.useState)(!1);
  if (n == null) return null;
  let u = n.hooks,
    d,
    f,
    p;
  if (
    t[0] !== n.cwd ||
    t[1] !== n.errors ||
    t[2] !== n.warnings ||
    t[3] !== u ||
    t[4] !== r ||
    t[5] !== s ||
    t[6] !== i ||
    t[7] !== c ||
    t[8] !== a ||
    t[9] !== o
  ) {
    let e = mt(u).filter(Lt),
      m = n.warnings,
      h = n.errors,
      g = ft(u),
      _ = m.length + h.length;
    (t[13] === g
      ? (d = t[14])
      : ((d = g > 0 ? (0, Z.jsx)(Rt, {}) : null), (t[13] = g), (t[14] = d)),
      t[15] !== h || t[16] !== _ || t[17] !== c || t[18] !== m
        ? ((f =
            _ > 0
              ? (0, Z.jsx)(zt, {
                  errors: h,
                  expanded: c,
                  issueCount: _,
                  warnings: m,
                  onToggleExpanded: () => {
                    l(!c);
                  },
                })
              : null),
          (t[15] = h),
          (t[16] = _),
          (t[17] = c),
          (t[18] = m),
          (t[19] = f))
        : (f = t[19]),
      (p =
        e.length > 0
          ? (0, Z.jsx)(J, {
              children: e.map((e) =>
                (0, Z.jsxs)(
                  `div`,
                  {
                    children: [
                      (0, Z.jsx)(Re, {
                        icon: (0, Z.jsx)(we, { "aria-hidden": !1, asset: wt }),
                        label: (0, Z.jsx)(`span`, {
                          className: `font-medium`,
                          children: it(e.eventName, s),
                        }),
                        description: ot(e.eventName, s),
                        control:
                          e.needsReview > 0
                            ? (0, Z.jsx)(z, { className: `icon-2xs shrink-0 text-warning` })
                            : null,
                      }),
                      (0, Z.jsx)(Et, {
                        eventName: e.eventName,
                        hostId: r,
                        isRemoteHost: i,
                        hooks: u,
                        projectRoot: n.cwd,
                        onTrustHook: o,
                        onToggleHookEnabled: a,
                      }),
                    ],
                  },
                  e.eventName,
                ),
              ),
            })
          : null),
      (t[0] = n.cwd),
      (t[1] = n.errors),
      (t[2] = n.warnings),
      (t[3] = u),
      (t[4] = r),
      (t[5] = s),
      (t[6] = i),
      (t[7] = c),
      (t[8] = a),
      (t[9] = o),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p));
  } else ((d = t[10]), (f = t[11]), (p = t[12]));
  let m;
  return (
    t[20] !== d || t[21] !== f || t[22] !== p
      ? ((m = (0, Z.jsxs)(Z.Fragment, { children: [d, f, p] })),
        (t[20] = d),
        (t[21] = f),
        (t[22] = p),
        (t[23] = m))
      : (m = t[23]),
    m
  );
}
function Lt(e) {
  return e.installed > 0;
}
function Rt() {
  let e = (0, Ht.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(Ye, {
          Icon: z,
          type: `warning`,
          content: (0, Z.jsx)(g, {
            id: `settings.hooks.review.summary`,
            defaultMessage: `Hooks can run outside of the sandbox so we ask you to review any recently installed or modified hooks`,
            description: `Banner shown when hooks require trust review`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function zt(e) {
  let t = (0, Ht.c)(18),
    { errors: n, expanded: r, issueCount: i, warnings: a, onToggleExpanded: o } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Z.jsx)(z, { className: `icon-xs shrink-0 text-warning` })), (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === i
    ? (c = t[2])
    : ((c = (0, Z.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [
          s,
          (0, Z.jsx)(`span`, {
            className: `truncate text-sm text-default`,
            children: (0, Z.jsx)(g, {
              id: `settings.hooks.issues.summary`,
              defaultMessage: `{count, plural, one {# issue loading hooks for this source} other {# issues loading hooks for this source}}`,
              description: `Summary text for hook warnings and errors`,
              values: { count: i },
            }),
          }),
        ],
      })),
      (t[1] = i),
      (t[2] = c));
  let l = r && `rotate-180`,
    u;
  t[3] === l
    ? (u = t[4])
    : ((u = U(`icon-2xs shrink-0 transition-transform`, l)), (t[3] = l), (t[4] = u));
  let d;
  t[5] === u ? (d = t[6]) : ((d = (0, Z.jsx)(Ue, { className: u })), (t[5] = u), (t[6] = d));
  let f;
  t[7] !== o || t[8] !== c || t[9] !== d
    ? ((f = (0, Z.jsxs)(`button`, {
        type: `button`,
        className: `flex w-full cursor-interaction items-center justify-between gap-3 px-3 py-2 text-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring`,
        onClick: o,
        children: [c, d],
      })),
      (t[7] = o),
      (t[8] = c),
      (t[9] = d),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] !== n || t[12] !== r || t[13] !== a
    ? ((p = r
        ? (0, Z.jsxs)(`div`, {
            className: `space-y-2 border-t border-text-warning/20 px-3 py-2 text-sm text-secondary`,
            children: [a.map(Vt), n.map(Bt)],
          })
        : null),
      (t[11] = n),
      (t[12] = r),
      (t[13] = a),
      (t[14] = p))
    : (p = t[14]);
  let m;
  return (
    t[15] !== f || t[16] !== p
      ? ((m = (0, Z.jsxs)(`div`, {
          className: `overflow-hidden rounded-lg border border-text-warning/30`,
          children: [f, p],
        })),
        (t[15] = f),
        (t[16] = p),
        (t[17] = m))
      : (m = t[17]),
    m
  );
}
function Bt(e) {
  return (0, Z.jsx)(
    `div`,
    {
      children: (0, Z.jsx)(g, {
        id: `settings.hooks.issues.error`,
        defaultMessage: `{path}: {message}`,
        description: `Expanded hook error detail`,
        values: { path: e.path, message: e.message },
      }),
    },
    `${e.path}:${e.message}`,
  );
}
function Vt(e) {
  return (0, Z.jsx)(`div`, { children: e }, e);
}
var Ht,
  Ut,
  Z,
  Wt = e(() => {
    ((Ht = Me()),
      Tt(),
      Ze(),
      (Ut = t(l(), 1)),
      G(),
      T(),
      p(),
      Ee(),
      be(),
      Ce(),
      qe(),
      S(),
      yt(),
      le(),
      w(),
      nt(),
      Pt(),
      ut(),
      (Z = Te()));
  });
function Gt(e) {
  let t = (0, Q.c)(72),
    {
      entries: n,
      hostId: r,
      isRemoteHost: i,
      isLoadingProjectRoots: a,
      loadError: o,
      isLoading: s,
      isRefreshing: c,
      projectRootLabels: l,
      projectRoots: u,
      selectedSourceSection: d,
      onSelectSourceSection: f,
      onRefreshHooks: p,
      onToggleHookEnabled: h,
      onTrustHook: _,
    } = e,
    v = ne(),
    y;
  t[0] !== r || t[1] !== u
    ? ((y = { hostId: r, roots: u }), (t[0] = r), (t[1] = u), (t[2] = y))
    : (y = t[2]);
  let { data: b } = ie(y),
    x;
  t[3] === v
    ? (x = t[4])
    : ((x = v.formatMessage({
        id: `settings.hooks.refresh`,
        defaultMessage: `Reload hooks`,
        description: `Button label to reload hooks for the visible projects`,
      })),
      (t[3] = v),
      (t[4] = x));
  let S = x,
    C,
    w,
    T,
    E,
    D,
    O,
    A,
    j,
    N;
  if (t[5] !== n || t[6] !== b || t[7] !== s || t[8] !== l || t[9] !== d) {
    ((j = n == null || s ? [] : _t(n)),
      (w = new Map(b?.map(qt))),
      (C = []),
      (T = []),
      (E = null),
      (D = null));
    for (let e of j)
      bb0: switch (e.id) {
        case `plugin`:
          E = e;
          break bb0;
        case `project`:
          D = e;
          break bb0;
        case `user`:
        case `admin`:
          C.push(e);
          break bb0;
        case `sessionFlags`:
        case `unknown`:
          T.push(e);
      }
    ((O = pt(j, d)),
      (A = d?.source === `plugin` && d.pluginId != null ? w.get(d.pluginId) : void 0),
      (N = ln({ entry: O, plugin: A, projectRootLabels: l, selection: d })),
      (t[5] = n),
      (t[6] = b),
      (t[7] = s),
      (t[8] = l),
      (t[9] = d),
      (t[10] = C),
      (t[11] = w),
      (t[12] = T),
      (t[13] = E),
      (t[14] = D),
      (t[15] = O),
      (t[16] = A),
      (t[17] = j),
      (t[18] = N));
  } else
    ((C = t[10]),
      (w = t[11]),
      (T = t[12]),
      (E = t[13]),
      (D = t[14]),
      (O = t[15]),
      (A = t[16]),
      (j = t[17]),
      (N = t[18]));
  let te = N,
    P;
  t[19] !== r || t[20] !== d
    ? ((P =
        d?.source === `plugin` && d.pluginId != null
          ? Se({ hostId: r, pluginId: d.pluginId })
          : void 0),
      (t[19] = r),
      (t[20] = d),
      (t[21] = P))
    : (P = t[21]);
  let F = P,
    I = null;
  if (d?.source === `plugin`) {
    let e;
    (t[22] === A ? (e = t[23]) : ((e = (0, $.jsx)(Qt, { plugin: A })), (t[22] = A), (t[23] = e)),
      (I = e));
  } else if (d != null) {
    let e;
    (t[24] === d.source ? (e = t[25]) : ((e = nn(d.source)), (t[24] = d.source), (t[25] = e)),
      (I = e));
  }
  let L = null;
  if (d?.source === `project`) L = d.projectRoot;
  else if (d != null) {
    let e;
    (t[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(g, {
          id: `settings.hooks.source.sharedProjects`,
          defaultMessage: `All projects`,
          description: `Label for hook sources that apply across every project`,
        })),
        (t[26] = e))
      : (e = t[26]),
      (L = e));
  }
  let R = `none`;
  if (d?.source === `project`) R = d.projectRoot;
  else if (d?.source === `plugin`) {
    R = `plugin`;
    let e = d.pluginId;
    e !== void 0 && (R = `plugin:${e ?? `unknown`}`);
  } else d != null && (R = d.source);
  let z;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, $.jsx)(k, {
        children: (0, $.jsx)(g, {
          id: `settings.hooks.loading.label`,
          defaultMessage: `Loading hooks…`,
          description: `Label while hooks are loading`,
        }),
      })),
      (t[27] = z))
    : (z = t[27]);
  let re = z,
    B;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, $.jsx)(m, { slug: dn })), (t[28] = B))
    : (B = t[28]);
  let V;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, $.jsx)(g, {
        id: `settings.hooks.subtitle`,
        defaultMessage: `Manage lifecycle hooks from config and enabled plugins. <a>Learn more</a>`,
        description: `Subtitle for hooks settings`,
        values: { a: Kt },
      })),
      (t[29] = V))
    : (V = t[29]);
  let H = u == null || u.length === 0 || s || c,
    U;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, $.jsx)(we, { "aria-hidden": !1, asset: Je })), (t[30] = U))
    : (U = t[30]);
  let W;
  t[31] !== p || t[32] !== S || t[33] !== H
    ? ((W = (0, $.jsx)(Oe, {
        "aria-label": S,
        color: `ghost`,
        disabled: H,
        onClick: p,
        size: `icon`,
        children: U,
      })),
      (t[31] = p),
      (t[32] = S),
      (t[33] = H),
      (t[34] = W))
    : (W = t[34]);
  let G;
  t[35] !== S || t[36] !== W
    ? ((G = (0, $.jsx)(M, { tooltipContent: S, children: W })),
      (t[35] = S),
      (t[36] = W),
      (t[37] = G))
    : (G = t[37]);
  let K;
  t[38] !== C ||
  t[39] !== w ||
  t[40] !== s ||
  t[41] !== a ||
  t[42] !== o ||
  t[43] !== f ||
  t[44] !== T ||
  t[45] !== E ||
  t[46] !== l ||
  t[47] !== u ||
  t[48] !== D ||
  t[49] !== j
    ? ((K =
        u == null && a
          ? re
          : u == null || u.length === 0
            ? (0, $.jsx)(Jt, {})
            : o == null
              ? s
                ? re
                : j.length === 0
                  ? (0, $.jsx)(Jt, {})
                  : (0, $.jsxs)($.Fragment, {
                      children: [
                        C.length > 0
                          ? (0, $.jsx)(Yt, {
                              title: (0, $.jsx)(g, {
                                id: `settings.hooks.source.globalConfig`,
                                defaultMessage: `From Config`,
                                description: `Group heading for hooks from global user and admin config`,
                              }),
                              sections: C,
                              onSelectSourceSection: f,
                            })
                          : null,
                        E == null
                          ? null
                          : (0, $.jsx)(Xt, {
                              installedPluginsById: w,
                              section: E,
                              onSelectSourceSection: f,
                            }),
                        D == null
                          ? null
                          : (0, $.jsx)($t, {
                              section: D,
                              projectRootLabels: l,
                              onSelectSourceSection: f,
                            }),
                        T.length > 0
                          ? (0, $.jsx)(Yt, {
                              title: (0, $.jsx)(g, {
                                id: `settings.hooks.source.otherSources`,
                                defaultMessage: `Other sources`,
                                description: `Group heading for hooks from uncommon sources`,
                              }),
                              sections: T,
                              onSelectSourceSection: f,
                            })
                          : null,
                      ],
                    })
              : (0, $.jsx)(J, {
                  children: (0, $.jsx)(Re, {
                    label: (0, $.jsx)(g, {
                      id: `settings.hooks.loadError.label`,
                      defaultMessage: `Could not load hooks`,
                      description: `Label when hooks settings fails to load hooks`,
                    }),
                    description: (0, $.jsx)(`span`, {
                      className: `[text-wrap:wrap] break-words`,
                      children: o.message,
                    }),
                    control: null,
                  }),
                })),
      (t[38] = C),
      (t[39] = w),
      (t[40] = s),
      (t[41] = a),
      (t[42] = o),
      (t[43] = f),
      (t[44] = T),
      (t[45] = E),
      (t[46] = l),
      (t[47] = u),
      (t[48] = D),
      (t[49] = j),
      (t[50] = K))
    : (K = t[50]);
  let q = d != null && (s || O != null),
    ae;
  t[51] === f
    ? (ae = t[52])
    : ((ae = () => {
        f(null);
      }),
      (t[51] = f),
      (t[52] = ae));
  let oe;
  t[53] !== r ||
  t[54] !== s ||
  t[55] !== i ||
  t[56] !== o ||
  t[57] !== h ||
  t[58] !== _ ||
  t[59] !== O ||
  t[60] !== R ||
  t[61] !== L ||
  t[62] !== te ||
  t[63] !== F ||
  t[64] !== I ||
  t[65] !== q ||
  t[66] !== ae
    ? ((oe = (0, $.jsx)(
        Ft,
        {
          entry: O,
          hostId: r,
          isOpen: q,
          isLoading: s,
          isRemoteHost: i,
          loadError: o,
          title: te,
          titleHref: F,
          titleIcon: I,
          subtitle: L,
          onClose: ae,
          onToggleHookEnabled: h,
          onTrustHook: _,
        },
        R,
      )),
      (t[53] = r),
      (t[54] = s),
      (t[55] = i),
      (t[56] = o),
      (t[57] = h),
      (t[58] = _),
      (t[59] = O),
      (t[60] = R),
      (t[61] = L),
      (t[62] = te),
      (t[63] = F),
      (t[64] = I),
      (t[65] = q),
      (t[66] = ae),
      (t[67] = oe))
    : (oe = t[67]);
  let se;
  return (
    t[68] !== G || t[69] !== K || t[70] !== oe
      ? ((se = (0, $.jsxs)(ee, {
          title: B,
          subtitleClassName: `whitespace-normal`,
          subtitle: V,
          action: G,
          children: [K, oe],
        })),
        (t[68] = G),
        (t[69] = K),
        (t[70] = oe),
        (t[71] = se))
      : (se = t[71]),
    se
  );
}
function Kt(e) {
  return (0, $.jsx)(
    `a`,
    {
      className: `inline-flex text-info`,
      href: he,
      target: `_blank`,
      rel: `noreferrer`,
      children: e,
    },
    `learn-more`,
  );
}
function qt(e) {
  return [e.plugin.id, e];
}
function Jt() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(J, {
          children: (0, $.jsx)(Re, {
            label: (0, $.jsx)(g, {
              id: `settings.hooks.emptyHooks.label`,
              defaultMessage: `No hooks found`,
              description: `Label when known projects do not have hooks or hook load issues`,
            }),
            description: (0, $.jsx)(g, {
              id: `settings.hooks.emptyHooks.description`,
              defaultMessage: `Configured hooks will appear here`,
              description: `Description when no hooks are configured`,
            }),
            control: null,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Yt(e) {
  let t = (0, Q.c)(12),
    { sections: n, title: r, onSelectSourceSection: i } = e,
    a;
  t[0] === r ? (a = t[1]) : ((a = (0, $.jsx)(Y.Header, { title: r })), (t[0] = r), (t[1] = a));
  let o;
  if (t[2] !== i || t[3] !== n) {
    let e;
    (t[5] === i
      ? (e = t[6])
      : ((e = (e) => (0, $.jsx)(en, { section: e, onSelectSourceSection: i }, e.id)),
        (t[5] = i),
        (t[6] = e)),
      (o = n.map(e)),
      (t[2] = i),
      (t[3] = n),
      (t[4] = o));
  } else o = t[4];
  let s;
  t[7] === o
    ? (s = t[8])
    : ((s = (0, $.jsx)(Y.Content, { children: (0, $.jsx)(J, { children: o }) })),
      (t[7] = o),
      (t[8] = s));
  let c;
  return (
    t[9] !== a || t[10] !== s
      ? ((c = (0, $.jsxs)(Y, { children: [a, s] })), (t[9] = a), (t[10] = s), (t[11] = c))
      : (c = t[11]),
    c
  );
}
function Xt(e) {
  let t = (0, Q.c)(10),
    { installedPluginsById: n, section: r, onSelectSourceSection: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(Y.Header, {
        title: (0, $.jsx)(g, {
          id: `settings.hooks.source.plugins`,
          defaultMessage: `From Plugins`,
          description: `Group heading for hooks installed by plugins`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  if (t[1] !== n || t[2] !== i || t[3] !== r.pluginEntries) {
    let e;
    (t[5] !== n || t[6] !== i
      ? ((e = (e) =>
          (0, $.jsx)(
            Zt,
            {
              plugin: e.pluginId == null ? void 0 : n.get(e.pluginId),
              pluginEntry: e,
              onSelectSourceSection: i,
            },
            e.pluginId ?? `unknown-plugin`,
          )),
        (t[5] = n),
        (t[6] = i),
        (t[7] = e))
      : (e = t[7]),
      (o = r.pluginEntries.map(e)),
      (t[1] = n),
      (t[2] = i),
      (t[3] = r.pluginEntries),
      (t[4] = o));
  } else o = t[4];
  let s;
  return (
    t[8] === o
      ? (s = t[9])
      : ((s = (0, $.jsxs)(Y, {
          children: [a, (0, $.jsx)(Y.Content, { children: (0, $.jsx)(J, { children: o }) })],
        })),
        (t[8] = o),
        (t[9] = s)),
    s
  );
}
function Zt(e) {
  let t = (0, Q.c)(23),
    { plugin: n, pluginEntry: r, onSelectSourceSection: i } = e,
    a = ne(),
    o;
  t[0] !== a || t[1] !== n || t[2] !== r.pluginId
    ? ((o =
        (n == null ? void 0 : f(n)) ??
        rt(r.pluginId) ??
        a.formatMessage({
          id: `settings.hooks.source.unknownPlugin`,
          defaultMessage: `Unknown plugin`,
          description: `Fallback label for plugin hooks without a plugin id`,
        })),
      (t[0] = a),
      (t[1] = n),
      (t[2] = r.pluginId),
      (t[3] = o))
    : (o = t[3]);
  let s = o,
    c;
  t[4] === r.entry ? (c = t[5]) : ((c = ct(r.entry)), (t[4] = r.entry), (t[5] = c));
  let l = c,
    u;
  t[6] === n ? (u = t[7]) : ((u = (0, $.jsx)(Qt, { plugin: n })), (t[6] = n), (t[7] = u));
  let d;
  t[8] === s
    ? (d = t[9])
    : ((d = (0, $.jsx)(`span`, { className: `block truncate`, children: s })),
      (t[8] = s),
      (t[9] = d));
  let p;
  t[10] === r.entry.hooks.length
    ? (p = t[11])
    : ((p = (0, $.jsx)(an, { count: r.entry.hooks.length })),
      (t[10] = r.entry.hooks.length),
      (t[11] = p));
  let m;
  t[12] === l ? (m = t[13]) : ((m = (0, $.jsx)(on, { summary: l })), (t[12] = l), (t[13] = m));
  let h;
  t[14] !== i || t[15] !== r.pluginId
    ? ((h = () => {
        i({ source: `plugin`, pluginId: r.pluginId });
      }),
      (t[14] = i),
      (t[15] = r.pluginId),
      (t[16] = h))
    : (h = t[16]);
  let g;
  return (
    t[17] !== u || t[18] !== d || t[19] !== p || t[20] !== m || t[21] !== h
      ? ((g = (0, $.jsx)(C, {
          edgeRounding: `surface`,
          icon: u,
          label: d,
          description: p,
          trailing: m,
          onClick: h,
        })),
        (t[17] = u),
        (t[18] = d),
        (t[19] = p),
        (t[20] = m),
        (t[21] = h),
        (t[22] = g))
      : (g = t[22]),
    g
  );
}
function Qt(e) {
  let t = (0, Q.c)(5),
    { plugin: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(W, { className: `icon-sm text-secondary` })), (t[0] = r))
    : (r = t[0]);
  let i = n?.plugin.name,
    a = n?.logoDarkPath,
    o = n?.logoPath,
    s;
  return (
    t[1] !== i || t[2] !== a || t[3] !== o
      ? ((s = (0, $.jsx)(xe, {
          alt: ``,
          className: `icon-sm`,
          fallback: r,
          knownAppId: i,
          logoDarkUrl: a,
          logoUrl: o,
        })),
        (t[1] = i),
        (t[2] = a),
        (t[3] = o),
        (t[4] = s))
      : (s = t[4]),
    s
  );
}
function $t(e) {
  let t = (0, Q.c)(10),
    { section: n, projectRootLabels: r, onSelectSourceSection: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(Y.Header, {
        title: (0, $.jsx)(g, {
          id: `settings.hooks.source.projects`,
          defaultMessage: `From Projects`,
          description: `Group heading for hooks from project config files`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  if (t[1] !== i || t[2] !== r || t[3] !== n.projectEntries) {
    let e;
    (t[5] !== i || t[6] !== r
      ? ((e = (e) =>
          (0, $.jsx)(rn, { entry: e, projectRootLabels: r, onSelectSourceSection: i }, e.cwd)),
        (t[5] = i),
        (t[6] = r),
        (t[7] = e))
      : (e = t[7]),
      (o = n.projectEntries.map(e)),
      (t[1] = i),
      (t[2] = r),
      (t[3] = n.projectEntries),
      (t[4] = o));
  } else o = t[4];
  let s;
  return (
    t[8] === o
      ? (s = t[9])
      : ((s = (0, $.jsxs)(Y, {
          children: [a, (0, $.jsx)(Y.Content, { children: (0, $.jsx)(J, { children: o }) })],
        })),
        (t[8] = o),
        (t[9] = s)),
    s
  );
}
function en(e) {
  let t = (0, Q.c)(19),
    { section: n, onSelectSourceSection: r } = e,
    i = n.id,
    a = n.entry,
    o;
  t[0] === a ? (o = t[1]) : ((o = ct(a)), (t[0] = a), (t[1] = o));
  let s = o,
    c;
  t[2] === i ? (c = t[3]) : ((c = nn(i)), (t[2] = i), (t[3] = c));
  let l;
  t[4] === i ? (l = t[5]) : ((l = (0, $.jsx)(tn, { source: i })), (t[4] = i), (t[5] = l));
  let u;
  t[6] === a.hooks.length
    ? (u = t[7])
    : ((u = (0, $.jsx)(an, { count: a.hooks.length })), (t[6] = a.hooks.length), (t[7] = u));
  let d;
  t[8] === s ? (d = t[9]) : ((d = (0, $.jsx)(on, { summary: s })), (t[8] = s), (t[9] = d));
  let f;
  t[10] !== r || t[11] !== i
    ? ((f = () => {
        r({ source: i });
      }),
      (t[10] = r),
      (t[11] = i),
      (t[12] = f))
    : (f = t[12]);
  let p;
  return (
    t[13] !== c || t[14] !== l || t[15] !== u || t[16] !== d || t[17] !== f
      ? ((p = (0, $.jsx)(C, {
          edgeRounding: `surface`,
          icon: c,
          label: l,
          description: u,
          trailing: d,
          onClick: f,
        })),
        (t[13] = c),
        (t[14] = l),
        (t[15] = u),
        (t[16] = d),
        (t[17] = f),
        (t[18] = p))
      : (p = t[18]),
    p
  );
}
function tn(e) {
  let t = (0, Q.c)(6),
    { source: n } = e;
  switch (n) {
    case `plugin`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(g, {
              id: `settings.hooks.source.plugin`,
              defaultMessage: `Plugin`,
              description: `Source label for plugin hooks`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `user`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(g, {
              id: `settings.hooks.source.userConfig`,
              defaultMessage: `User config`,
              description: `Source label for user hooks`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `admin`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(g, {
              id: `settings.hooks.source.adminConfig`,
              defaultMessage: `Admin config`,
              description: `Source label for admin-managed hooks`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `project`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(g, {
              id: `settings.hooks.source.projectConfig`,
              defaultMessage: `Project config`,
              description: `Source label for project hooks`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `sessionFlags`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(g, {
              id: `settings.hooks.source.sessionFlags`,
              defaultMessage: `Session flags`,
              description: `Source label for session flag hooks`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `unknown`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(g, {
              id: `settings.hooks.source.unknown`,
              defaultMessage: `Unknown source`,
              description: `Source label for hooks with unknown provenance`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
  }
}
function nn(e) {
  let t = `icon-sm text-secondary`;
  switch (e) {
    case `plugin`:
      return (0, $.jsx)(W, { className: t });
    case `user`:
      return (0, $.jsx)(L, { className: t });
    case `admin`:
      return (0, $.jsx)(v, { className: t });
    case `project`:
      return (0, $.jsx)(H, { className: t });
    case `sessionFlags`:
    case `unknown`:
      return (0, $.jsx)(Ae, { className: t });
  }
}
function rn(e) {
  let t = (0, Q.c)(20),
    { entry: n, projectRootLabels: r, onSelectSourceSection: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = ct(n)), (t[0] = n), (t[1] = a));
  let o = a,
    s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(H, { className: `icon-sm text-secondary` })), (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] !== n.cwd || t[4] !== r
    ? ((c = cn(n.cwd, r)), (t[3] = n.cwd), (t[4] = r), (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] === c
    ? (l = t[7])
    : ((l = (0, $.jsx)(`span`, { className: `block truncate`, children: c })),
      (t[6] = c),
      (t[7] = l));
  let u;
  t[8] === n.hooks.length
    ? (u = t[9])
    : ((u = (0, $.jsx)(an, { count: n.hooks.length })), (t[8] = n.hooks.length), (t[9] = u));
  let d;
  t[10] === o ? (d = t[11]) : ((d = (0, $.jsx)(on, { summary: o })), (t[10] = o), (t[11] = d));
  let f;
  t[12] !== n.cwd || t[13] !== i
    ? ((f = () => {
        i({ source: `project`, projectRoot: n.cwd });
      }),
      (t[12] = n.cwd),
      (t[13] = i),
      (t[14] = f))
    : (f = t[14]);
  let p;
  return (
    t[15] !== l || t[16] !== u || t[17] !== d || t[18] !== f
      ? ((p = (0, $.jsx)(C, {
          edgeRounding: `surface`,
          icon: s,
          label: l,
          description: u,
          trailing: d,
          onClick: f,
        })),
        (t[15] = l),
        (t[16] = u),
        (t[17] = d),
        (t[18] = f),
        (t[19] = p))
      : (p = t[19]),
    p
  );
}
function an(e) {
  let t = (0, Q.c)(2),
    { count: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(g, {
          id: `settings.hooks.source.hookCount`,
          defaultMessage: `{count, plural, one {# hook} other {# hooks}}`,
          description: `Short hook count shown under a hook source row`,
          values: { count: n },
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function on(e) {
  let t = (0, Q.c)(5),
    { summary: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = (0, $.jsx)(sn, { summary: n })), (t[0] = n), (t[1] = r));
  let i;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(Ue, { className: `icon-2xs shrink-0 -rotate-90` })), (t[2] = i))
    : (i = t[2]);
  let a;
  return (
    t[3] === r
      ? (a = t[4])
      : ((a = (0, $.jsxs)(`div`, { className: `flex items-center gap-3`, children: [r, i] })),
        (t[3] = r),
        (t[4] = a)),
    a
  );
}
function sn(e) {
  let t = (0, Q.c)(6),
    { summary: n } = e,
    r = ne();
  if (n == null || (n.issueCount === 0 && n.needsReview === 0)) return null;
  let i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(z, { className: `icon-2xs shrink-0 text-warning` })), (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] !== r || t[2] !== n ? ((a = xt(n, r)), (t[1] = r), (t[2] = n), (t[3] = a)) : (a = t[3]);
  let o;
  return (
    t[4] === a
      ? (o = t[5])
      : ((o = (0, $.jsxs)(`div`, {
          className: `flex shrink-0 items-center gap-3 text-sm whitespace-nowrap text-default`,
          children: [i, (0, $.jsx)(`span`, { className: `max-[30rem]:hidden`, children: a })],
        })),
        (t[4] = a),
        (t[5] = o)),
    o
  );
}
function cn(e, t) {
  return t?.[e] ?? Qe(e) ?? e;
}
function ln({ entry: e, plugin: t, projectRootLabels: n, selection: r }) {
  if (r == null) return null;
  if (r.source === `project`) return cn(r.projectRoot, n);
  if (r.source === `plugin`) {
    if (t != null) return f(t);
    let n = r.pluginId === void 0 ? null : rt(r.pluginId);
    if ((n == null && e != null && (n = un(e.hooks)), n != null)) return n;
  }
  return (0, $.jsx)(tn, { source: r.source });
}
function un(e) {
  let t = null;
  for (let n of e) {
    let e = rt(n.pluginId);
    if (e == null || (t != null && t !== e)) return null;
    t = e;
  }
  return t;
}
var Q,
  $,
  dn,
  fn = e(() => {
    ((Q = Me()),
      _e(),
      d(),
      G(),
      Pe(),
      o(),
      s(),
      Ce(),
      E(),
      h(),
      I(),
      qe(),
      Xe(),
      c(),
      je(),
      S(),
      ae(),
      P(),
      se(),
      V(),
      Fe(),
      le(),
      oe(),
      w(),
      $e(),
      nt(),
      Ct(),
      ut(),
      Wt(),
      ($ = Te()),
      (dn = `hooks-settings`));
  });
function pn() {
  let e = (0, mn.c)(47),
    t = a(me),
    r = ne(),
    o = A(),
    [s, c] = fe(),
    l = _(),
    { selectedHostId: d, setSelectedHostId: f } = u(),
    p = Ie(d),
    m = x(i),
    h = x(D),
    g = m?.type === `local` ? (h[m.projectId]?.rootPaths ?? []) : [],
    v = x(Ve),
    y;
  e[0] === d ? (y = e[1]) : ((y = { hostId: d }), (e[0] = d), (e[1] = y));
  let { data: b, isPending: S } = te(ue, y),
    C;
  e[2] === s ? (C = e[3]) : ((C = s.get(`hostId`)), (e[2] = s), (e[3] = C));
  let w = C,
    T = w == null || w === d,
    ee = T ? s.get(`projectRoot`) : null,
    E = T ? s.get(`pluginId`) : null,
    O = [];
  d === `local` ? (O = g) : v?.hostId === d && (O = [v.remotePath]);
  let k = b == null ? void 0 : vt(b.roots, O, ee),
    j = T ? ht({ pluginId: E, source: s.get(`source`), projectRoot: ee, projectRoots: k }) : null,
    M;
  e[4] !== k || e[5] !== d
    ? ((M = { hostId: d, cwds: k }), (e[4] = k), (e[5] = d), (e[6] = M))
    : (M = e[6]);
  let N = te(de, M),
    P;
  e[7] === f
    ? (P = e[8])
    : ((P = (e) => {
        f(e);
      }),
      (e[7] = f),
      (e[8] = P));
  let F = (0, hn.useEffectEvent)(P),
    I;
  e[9] !== l || e[10] !== d || e[11] !== w || e[12] !== F
    ? ((I = () => {
        if (w != null && w !== d) {
          F(w);
          return;
        }
        n(l, d, { refetchType: `active` });
      }),
      (e[9] = l),
      (e[10] = d),
      (e[11] = w),
      (e[12] = F),
      (e[13] = I))
    : (I = e[13]);
  let L;
  (e[14] !== o.key || e[15] !== l || e[16] !== d || e[17] !== w
    ? ((L = [o.key, l, d, w]), (e[14] = o.key), (e[15] = l), (e[16] = d), (e[17] = w), (e[18] = L))
    : (L = e[18]),
    (0, hn.useEffect)(I, L));
  let R = te(ve, d),
    z;
  e[19] !== N || e[20] !== r || e[21] !== l || e[22] !== t || e[23] !== d
    ? ((z = () => {
        N.refetch().then(async (e) => {
          e.isSuccess &&
            (await n(l, d, { broadcast: !0, refetchType: `none` }),
            t.get(De).success(
              r.formatMessage({
                id: `settings.hooks.refresh.success`,
                defaultMessage: `Refreshed hooks`,
                description: `Success toast shown after manually refreshing hooks`,
              }),
            ));
        });
      }),
      (e[19] = N),
      (e[20] = r),
      (e[21] = l),
      (e[22] = t),
      (e[23] = d),
      (e[24] = z))
    : (z = e[24]);
  let re = z,
    B;
  e[25] !== s || e[26] !== d || e[27] !== c
    ? ((B = (e) => {
        let t = new URLSearchParams(s);
        (dt(t, d, e), c(t, { replace: !0 }));
      }),
      (e[25] = s),
      (e[26] = d),
      (e[27] = c),
      (e[28] = B))
    : (B = e[28]);
  let V = B,
    H = N.data?.data,
    U = p.kind !== `local`,
    ie = N.isFetching && !N.isPending,
    W = b?.labels,
    G,
    K;
  e[29] === R
    ? ((G = e[30]), (K = e[31]))
    : ((G = (e, t) => {
        R.mutate([{ key: e.key, enabled: t }]);
      }),
      (K = (e) => {
        R.mutate([{ key: e.key, trustedHash: e.currentHash }]);
      }),
      (e[29] = R),
      (e[30] = G),
      (e[31] = K));
  let q;
  return (
    e[32] !== re ||
    e[33] !== V ||
    e[34] !== N.error ||
    e[35] !== N.isPending ||
    e[36] !== S ||
    e[37] !== k ||
    e[38] !== d ||
    e[39] !== j ||
    e[40] !== ie ||
    e[41] !== W ||
    e[42] !== G ||
    e[43] !== K ||
    e[44] !== H ||
    e[45] !== U
      ? ((q = (0, gn.jsx)(Gt, {
          entries: H,
          hostId: d,
          isRemoteHost: U,
          isLoadingProjectRoots: S,
          loadError: N.error,
          isLoading: N.isPending,
          isRefreshing: ie,
          projectRootLabels: W,
          projectRoots: k,
          selectedSourceSection: j,
          onSelectSourceSection: V,
          onRefreshHooks: re,
          onToggleHookEnabled: G,
          onTrustHook: K,
        })),
        (e[32] = re),
        (e[33] = V),
        (e[34] = N.error),
        (e[35] = N.isPending),
        (e[36] = S),
        (e[37] = k),
        (e[38] = d),
        (e[39] = j),
        (e[40] = ie),
        (e[41] = W),
        (e[42] = G),
        (e[43] = K),
        (e[44] = H),
        (e[45] = U),
        (e[46] = q))
      : (q = e[46]),
    q
  );
}
var mn, hn, gn;
e(() => {
  ((mn = Me()),
    Be(),
    F(),
    (hn = t(l(), 1)),
    G(),
    T(),
    ke(),
    Ne(),
    Le(),
    R(),
    j(),
    ut(),
    re(),
    gt(),
    fn(),
    (gn = Te()));
})();
export { pn as HooksSettings };
//# sourceMappingURL=hooks-settings-901cef002341.js.map
