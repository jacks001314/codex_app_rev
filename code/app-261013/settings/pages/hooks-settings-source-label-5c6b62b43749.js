import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  DDt as r,
  Ez as i,
  IDt as a,
  MO as o,
  Mz as s,
  Nz as c,
  VDt as l,
  XD as u,
  Xw as d,
  YD as f,
  Zw as p,
  _Mt as m,
  cz as h,
  gMt as g,
  ic as _,
  jDt as v,
  jO as y,
  kz as b,
  qft as x,
  rc as S,
  rst as C,
  sz as w,
  t3 as T,
  vzt as E,
  xMt as D,
  yzt as O,
} from "./app-shared-bbfeca5e5737.js";
import { cVt as k, lVt as A } from "./app-initial-5851df3f6cb1.js";
import { m as j, o as M, p as N } from "./hooks-settings-model-f200bbc1bcb6.js";
import { a as P, n as F, r as I } from "./hooks-settings-copy-2f5f2d429af4.js";
import { n as L, t as R } from "./shield-check-5c6fcdcc94a6.js";
function z(e) {
  let n = (0, W.c)(26),
    {
      eventName: r,
      hostId: o,
      isRemoteHost: c,
      hooks: u,
      projectRoot: d,
      onToggleHookEnabled: m,
      onTrustHook: h,
    } = e,
    v = l(),
    [b, S] = (0, G.useState)(null),
    C,
    T,
    E;
  if (
    n[0] !== r ||
    n[1] !== b ||
    n[2] !== u ||
    n[3] !== o ||
    n[4] !== v ||
    n[5] !== c ||
    n[6] !== m ||
    n[7] !== h ||
    n[8] !== d
  ) {
    let e = M(u, r);
    ((E = `border-t border-default px-3`), (C = `divide-y-[0.5px] divide-border`));
    let l;
    (n[12] !== b || n[13] !== o || n[14] !== v || n[15] !== c || n[16] !== m || n[17] !== h || n[18] !== d
      ? ((l = (e, n) => {
          let r = j(e),
            l = !c && !e.isManaged,
            u = b === e.key,
            C = (0, K.jsx)(y, {
              "aria-hidden": r || void 0,
              ariaLabel: I(e, n, v),
              checked: e.enabled && !r,
              className: r ? `pointer-events-none` : ``,
              disabled: r,
              onChange: (t) => {
                m(e, t);
              },
            });
          return (0, K.jsxs)(
            `div`,
            {
              className: g(u && `pb-2`),
              children: [
                (0, K.jsxs)(`div`, {
                  className: `-mx-3 flex items-center gap-2 px-3 hover:bg-primary-ghost-hover`,
                  children: [
                    (0, K.jsxs)(`div`, {
                      className: `relative flex min-w-0 flex-1`,
                      children: [
                        (0, K.jsx)(`button`, {
                          type: `button`,
                          "aria-expanded": u,
                          className: g(
                            `flex min-w-0 flex-1 cursor-interaction appearance-none items-center border-0 bg-transparent py-2 ps-7 text-start text-sm text-inherit [font:inherit] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
                            l ? `pe-12` : `pe-6`,
                          ),
                          onClick: () => {
                            S(u ? null : e.key);
                          },
                          children: (0, K.jsx)(`span`, {
                            className: `min-w-0 break-words text-default`,
                            children: I(e, n, v),
                          }),
                        }),
                        l
                          ? (0, K.jsx)(w, {
                              triggerAsChild: !0,
                              tooltipContent: (0, K.jsx)(a, { ...q.openConfigFile }),
                              children: (0, K.jsx)(`button`, {
                                type: `button`,
                                "aria-label": v.formatMessage(q.openConfigFile),
                                className: `absolute top-1/2 right-6 inline-flex size-5 -translate-y-1/2 cursor-interaction items-center justify-center rounded-md text-tertiary hover:bg-primary-ghost-hover hover:text-default focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
                                onClick: () => {
                                  A({
                                    cwd: e.source === `project` ? x(d) : null,
                                    hostId: o,
                                    path: e.sourcePath,
                                  });
                                },
                                children: (0, K.jsx)(s, { asset: p, "aria-hidden": !0 }),
                              }),
                            })
                          : null,
                        (0, K.jsx)(f, {
                          "aria-hidden": !0,
                          className: g(
                            `icon-2xs pointer-events-none absolute top-1/2 right-1 -translate-y-1/2 text-secondary`,
                            u && `rotate-180`,
                          ),
                        }),
                      ],
                    }),
                    (0, K.jsxs)(`div`, {
                      className: `flex shrink-0 items-center gap-2`,
                      children: [
                        r
                          ? (0, K.jsx)(w, {
                              tooltipContent:
                                e.trustStatus === `modified`
                                  ? (0, K.jsx)(a, {
                                      id: `settings.hooks.event.changedReviewReason`,
                                      defaultMessage: `Hook changed since last trusted`,
                                      description: `Tooltip shown for changed hooks awaiting review`,
                                    })
                                  : (0, K.jsx)(a, {
                                      id: `settings.hooks.event.untrustedReviewReason`,
                                      defaultMessage: `New hook`,
                                      description: `Tooltip shown for hooks awaiting first review`,
                                    }),
                              children: (0, K.jsxs)(t, {
                                color: `outline`,
                                size: `composerSm`,
                                onClick: () => {
                                  h(e);
                                },
                                children: [
                                  (0, K.jsx)(i, {
                                    "aria-hidden": !1,
                                    legacyIcon: R,
                                    asset16: _,
                                    legacyClassName: `icon-2xs`,
                                  }),
                                  (0, K.jsx)(a, {
                                    id: `settings.hooks.event.trust`,
                                    defaultMessage: `Trust`,
                                    description: `Button label to trust a hook`,
                                  }),
                                ],
                              }),
                            })
                          : null,
                        e.isManaged
                          ? (0, K.jsx)(w, {
                              tooltipContent: (0, K.jsx)(a, {
                                id: `settings.hooks.event.managedTooltip`,
                                defaultMessage: `Managed hooks are always on`,
                                description: `Tooltip shown for admin-managed hooks`,
                              }),
                              children: (0, K.jsx)(`span`, {
                                "aria-checked": `true`,
                                "aria-disabled": `true`,
                                "aria-label": I(e, n, v),
                                className: `inline-flex cursor-not-allowed rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
                                role: `switch`,
                                tabIndex: 0,
                                children: (0, K.jsx)(y, {
                                  "aria-hidden": `true`,
                                  ariaLabel: I(e, n, v),
                                  checked: !0,
                                  className: `pointer-events-none`,
                                  disabled: !0,
                                  onChange: B,
                                }),
                              }),
                            })
                          : (0, K.jsx)(w, {
                              tooltipContent: r
                                ? (0, K.jsx)(a, {
                                    id: `settings.hooks.event.disabledUntilTrustedTooltip`,
                                    defaultMessage: `Disabled until hook is trusted`,
                                    description: `Tooltip shown for review-needed hooks whose toggle cannot be enabled yet`,
                                  })
                                : null,
                              children: r
                                ? (0, K.jsx)(`span`, {
                                    "aria-checked": `false`,
                                    "aria-disabled": `true`,
                                    "aria-label": I(e, n, v),
                                    className: `inline-flex cursor-not-allowed rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
                                    role: `switch`,
                                    tabIndex: 0,
                                    children: C,
                                  })
                                : C,
                            }),
                      ],
                    }),
                  ],
                }),
                u ? (0, K.jsx)(`div`, { className: `ps-7`, children: (0, K.jsx)(V, { hook: e }) }) : null,
              ],
            },
            e.key,
          );
        }),
        (n[12] = b),
        (n[13] = o),
        (n[14] = v),
        (n[15] = c),
        (n[16] = m),
        (n[17] = h),
        (n[18] = d),
        (n[19] = l))
      : (l = n[19]),
      (T = e.map(l)),
      (n[0] = r),
      (n[1] = b),
      (n[2] = u),
      (n[3] = o),
      (n[4] = v),
      (n[5] = c),
      (n[6] = m),
      (n[7] = h),
      (n[8] = d),
      (n[9] = C),
      (n[10] = T),
      (n[11] = E));
  } else ((C = n[9]), (T = n[10]), (E = n[11]));
  let D;
  n[20] !== C || n[21] !== T
    ? ((D = (0, K.jsx)(`div`, { className: C, children: T })), (n[20] = C), (n[21] = T), (n[22] = D))
    : (D = n[22]);
  let O;
  return (
    n[23] !== E || n[24] !== D
      ? ((O = (0, K.jsx)(`div`, { className: E, children: D })), (n[23] = E), (n[24] = D), (n[25] = O))
      : (O = n[25]),
    O
  );
}
function B() {}
function V(e) {
  let t = (0, W.c)(38),
    { hook: n, source: i, variant: o } = e,
    s = o === void 0 ? `default` : o,
    c = l(),
    u = s === "default" && `mt-2 rounded-md border border-default`,
    d;
  t[0] === u ? (d = t[1]) : ((d = g(`overflow-hidden text-sm`, u)), (t[0] = u), (t[1] = d));
  let f = s === "default" && `py-3`,
    p;
  t[2] === f
    ? (p = t[3])
    : ((p = g(`grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-2 px-3`, f)), (t[2] = f), (t[3] = p));
  let m;
  t[4] === i
    ? (m = t[5])
    : ((m =
        i == null
          ? null
          : (0, K.jsx)(H, {
              label: (0, K.jsx)(a, {
                id: `settings.hooks.event.source`,
                defaultMessage: `Source`,
                description: `Label for the project, plugin, or configuration that defines a hook`,
              }),
              children: i,
            })),
      (t[4] = i),
      (t[5] = m));
  let h;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, K.jsx)(a, {
        id: `settings.hooks.event.hookType`,
        defaultMessage: `Hook type`,
        description: `Label for the lifecycle event that triggers a hook, such as SessionStart or Stop`,
      })),
      (t[6] = h))
    : (h = t[6]);
  let _;
  t[7] !== n.eventName || t[8] !== c
    ? ((_ = F(n.eventName, c)), (t[7] = n.eventName), (t[8] = c), (t[9] = _))
    : (_ = t[9]);
  let v;
  t[10] === _ ? (v = t[11]) : ((v = (0, K.jsx)(H, { label: h, children: _ })), (t[10] = _), (t[11] = v));
  let y;
  t[12] === n.handlerType
    ? (y = t[13])
    : ((y =
        n.handlerType === `prompt` || n.handlerType === `agent`
          ? (0, K.jsx)(H, {
              label: (0, K.jsx)(a, {
                id: `settings.hooks.event.handler`,
                defaultMessage: `Handler`,
                description: `Label for the handler type of a configured hook`,
              }),
              children: (0, K.jsx)(U, { handlerType: n.handlerType }),
            })
          : null),
      (t[12] = n.handlerType),
      (t[13] = y));
  let b;
  t[14] !== n.command || t[15] !== n.handlerType
    ? ((b =
        n.handlerType === `command`
          ? (0, K.jsx)(H, {
              label: (0, K.jsx)(a, {
                id: `settings.hooks.event.command`,
                defaultMessage: `Command`,
                description: `Label for the command executed by a hook`,
              }),
              children: (0, K.jsx)(`code`, {
                className: `block font-mono text-xs break-all whitespace-pre-wrap`,
                children: n.command,
              }),
            })
          : null),
      (t[14] = n.command),
      (t[15] = n.handlerType),
      (t[16] = b))
    : (b = t[16]);
  let x;
  t[17] !== n.handlerType || t[18] !== n.server || t[19] !== n.tool
    ? ((x =
        n.handlerType === `mcpTool`
          ? (0, K.jsxs)(K.Fragment, {
              children: [
                (0, K.jsx)(H, {
                  label: (0, K.jsx)(a, {
                    id: `settings.hooks.event.server`,
                    defaultMessage: `MCP server`,
                    description: `Label for the MCP server called by a hook`,
                  }),
                  children: (0, K.jsx)(`code`, {
                    className: `font-mono text-xs break-all`,
                    children: n.server,
                  }),
                }),
                (0, K.jsx)(H, {
                  label: (0, K.jsx)(a, {
                    id: `settings.hooks.event.tool`,
                    defaultMessage: `Tool`,
                    description: `Label for the MCP tool called by a hook`,
                  }),
                  children: (0, K.jsx)(`code`, {
                    className: `font-mono text-xs break-all`,
                    children: n.tool,
                  }),
                }),
              ],
            })
          : null),
      (t[17] = n.handlerType),
      (t[18] = n.server),
      (t[19] = n.tool),
      (t[20] = x))
    : (x = t[20]);
  let S;
  t[21] === n.matcher
    ? (S = t[22])
    : ((S =
        n.matcher == null
          ? null
          : (0, K.jsx)(H, {
              label: (0, K.jsx)(a, {
                id: `settings.hooks.event.matcher`,
                defaultMessage: `Matcher`,
                description: `Label for the matcher configured for a hook`,
              }),
              children: (0, K.jsx)(`code`, { className: `font-mono text-xs break-all`, children: n.matcher }),
            })),
      (t[21] = n.matcher),
      (t[22] = S));
  let C;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, K.jsx)(a, {
        id: `settings.hooks.event.timeout`,
        defaultMessage: `Timeout`,
        description: `Label for a hook execution timeout`,
      })),
      (t[23] = C))
    : (C = t[23]);
  let w;
  t[24] === n.timeoutSec
    ? (w = t[25])
    : ((w = (0, K.jsx)(H, {
        label: C,
        children: (0, K.jsx)(r, {
          value: n.timeoutSec,
          style: `unit`,
          unit: `second`,
          unitDisplay: `narrow`,
        }),
      })),
      (t[24] = n.timeoutSec),
      (t[25] = w));
  let T;
  t[26] !== y ||
  t[27] !== b ||
  t[28] !== x ||
  t[29] !== S ||
  t[30] !== w ||
  t[31] !== p ||
  t[32] !== m ||
  t[33] !== v
    ? ((T = (0, K.jsxs)(`dl`, { className: p, children: [m, v, y, b, x, S, w] })),
      (t[26] = y),
      (t[27] = b),
      (t[28] = x),
      (t[29] = S),
      (t[30] = w),
      (t[31] = p),
      (t[32] = m),
      (t[33] = v),
      (t[34] = T))
    : (T = t[34]);
  let E;
  return (
    t[35] !== T || t[36] !== d
      ? ((E = (0, K.jsx)(`div`, { className: d, children: T })), (t[35] = T), (t[36] = d), (t[37] = E))
      : (E = t[37]),
    E
  );
}
function H(e) {
  let t = (0, W.c)(7),
    { label: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, K.jsx)(`dt`, { className: `text-secondary`, children: n })), (t[0] = n), (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = (0, K.jsx)(`dd`, { className: `min-w-0 text-default`, children: r })), (t[2] = r), (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, K.jsxs)(K.Fragment, { children: [i, a] })), (t[4] = i), (t[5] = a), (t[6] = o))
      : (o = t[6]),
    o
  );
}
function U(e) {
  let t = (0, W.c)(2),
    { handlerType: n } = e;
  switch (n) {
    case `prompt`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, K.jsx)(a, {
              id: `settings.hooks.event.promptHandler`,
              defaultMessage: `Prompt`,
              description: `Label for a prompt hook handler type`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `agent`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, K.jsx)(a, {
              id: `settings.hooks.event.agentHandler`,
              defaultMessage: `Agent`,
              description: `Label for an agent hook handler type`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
  }
}
var W, G, K, q;
function J() {
  return (J = e(() => {
    ((W = E()),
      d(),
      S(),
      m(),
      C(),
      (G = O()),
      v(),
      T(),
      c(),
      b(),
      o(),
      h(),
      k(),
      u(),
      L(),
      P(),
      N(),
      (K = D()),
      (q = n({
        openConfigFile: {
          id: `settings.hooks.event.openConfigFile`,
          defaultMessage: `Open config file`,
          description: `Button label for opening the config file that defines a hook`,
        },
      })));
  }))();
}
function Y(e) {
  let t = (0, X.c)(6),
    { source: n } = e;
  switch (n) {
    case `plugin`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(a, {
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
          ? ((e = (0, Z.jsx)(a, {
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
          ? ((e = (0, Z.jsx)(a, {
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
          ? ((e = (0, Z.jsx)(a, {
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
          ? ((e = (0, Z.jsx)(a, {
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
          ? ((e = (0, Z.jsx)(a, {
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
var X, Z;
function Q() {
  return (Q = e(() => {
    ((X = E()), v(), (Z = D()));
  }))();
}
export { J as a, z as i, Q as n, V as r, Y as t };
//# sourceMappingURL=hooks-settings-source-label-5c6b62b43749.js.map
