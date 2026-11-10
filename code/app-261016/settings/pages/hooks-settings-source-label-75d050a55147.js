import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Bc as t,
  DB as n,
  EO as r,
  FBt as i,
  KOt as a,
  LNt as o,
  MNt as s,
  NNt as c,
  OB as l,
  PBt as u,
  TO as d,
  XOt as f,
  Xw as p,
  Y3 as m,
  YOt as h,
  Z3 as g,
  Zw as _,
  cmt as v,
  lk as y,
  nB as b,
  okt as x,
  rB as S,
  sct as C,
  tkt as w,
  uk as T,
  wB as E,
  xB as D,
  zc as O,
} from "./app-shared-2feb3d4c6fcc.js";
import { l5t as k, u5t as A } from "./app-initial-ad16eaadf81f.js";
import { m as j, o as M, p as N } from "./hooks-settings-model-f200bbc1bcb6.js";
import { a as P, n as F, r as I } from "./hooks-settings-copy-22021d3ecf83.js";
import { n as L, t as R } from "./shield-check-a274a615caa6.js";
function z(e) {
  let r = (0, W.c)(26),
    {
      eventName: i,
      hostId: a,
      isRemoteHost: o,
      hooks: c,
      projectRoot: l,
      onToggleHookEnabled: u,
      onTrustHook: f,
    } = e,
    p = x(),
    [h, g] = (0, G.useState)(null),
    S,
    C,
    T;
  if (
    r[0] !== i ||
    r[1] !== h ||
    r[2] !== c ||
    r[3] !== a ||
    r[4] !== p ||
    r[5] !== o ||
    r[6] !== u ||
    r[7] !== f ||
    r[8] !== l
  ) {
    let e = M(c, i);
    ((T = `border-t border-default px-3`), (S = `divide-y-[0.5px] divide-border`));
    let x;
    (r[12] !== h || r[13] !== a || r[14] !== p || r[15] !== o || r[16] !== u || r[17] !== f || r[18] !== l
      ? ((x = (e, r) => {
          let i = j(e),
            c = !o && !e.isManaged,
            x = h === e.key,
            S = (0, K.jsx)(y, {
              "aria-hidden": i || void 0,
              ariaLabel: I(e, r, p),
              checked: e.enabled && !i,
              className: i ? `pointer-events-none` : ``,
              disabled: i,
              onChange: (t) => {
                u(e, t);
              },
            });
          return (0, K.jsxs)(
            `div`,
            {
              className: s(x && `pb-2`),
              children: [
                (0, K.jsxs)(`div`, {
                  className: `-mx-3 flex items-center gap-2 px-3 hover:bg-primary-ghost-hover`,
                  children: [
                    (0, K.jsxs)(`div`, {
                      className: `relative flex min-w-0 flex-1`,
                      children: [
                        (0, K.jsx)(`button`, {
                          type: `button`,
                          "aria-expanded": x,
                          className: s(
                            `flex min-w-0 flex-1 cursor-interaction appearance-none items-center border-0 bg-transparent py-2 ps-7 text-start text-sm text-inherit [font:inherit] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
                            c ? `pe-12` : `pe-6`,
                          ),
                          onClick: () => {
                            g(x ? null : e.key);
                          },
                          children: (0, K.jsx)(`span`, {
                            className: `min-w-0 break-words text-default`,
                            children: I(e, r, p),
                          }),
                        }),
                        c
                          ? (0, K.jsx)(b, {
                              triggerAsChild: !0,
                              tooltipContent: (0, K.jsx)(w, { ...q.openConfigFile }),
                              children: (0, K.jsx)(`button`, {
                                type: `button`,
                                "aria-label": p.formatMessage(q.openConfigFile),
                                className: `absolute top-1/2 right-6 inline-flex size-5 -translate-y-1/2 cursor-interaction items-center justify-center rounded-md text-tertiary hover:bg-primary-ghost-hover hover:text-default focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
                                onClick: () => {
                                  A({
                                    cwd: e.source === `project` ? v(l) : null,
                                    hostId: a,
                                    path: e.sourcePath,
                                  });
                                },
                                children: (0, K.jsx)(n, { asset: _, "aria-hidden": !0 }),
                              }),
                            })
                          : null,
                        (0, K.jsx)(d, {
                          "aria-hidden": !0,
                          className: s(
                            `icon-2xs pointer-events-none absolute top-1/2 right-1 -translate-y-1/2 text-secondary`,
                            x && `rotate-180`,
                          ),
                        }),
                      ],
                    }),
                    (0, K.jsxs)(`div`, {
                      className: `flex shrink-0 items-center gap-2`,
                      children: [
                        i
                          ? (0, K.jsx)(b, {
                              tooltipContent:
                                e.trustStatus === `modified`
                                  ? (0, K.jsx)(w, {
                                      id: `settings.hooks.event.changedReviewReason`,
                                      defaultMessage: `Hook changed since last trusted`,
                                      description: `Tooltip shown for changed hooks awaiting review`,
                                    })
                                  : (0, K.jsx)(w, {
                                      id: `settings.hooks.event.untrustedReviewReason`,
                                      defaultMessage: `New hook`,
                                      description: `Tooltip shown for hooks awaiting first review`,
                                    }),
                              children: (0, K.jsxs)(m, {
                                color: `outline`,
                                size: `composerSm`,
                                onClick: () => {
                                  f(e);
                                },
                                children: [
                                  (0, K.jsx)(D, {
                                    "aria-hidden": !1,
                                    legacyIcon: R,
                                    asset16: t,
                                    legacyClassName: `icon-2xs`,
                                  }),
                                  (0, K.jsx)(w, {
                                    id: `settings.hooks.event.trust`,
                                    defaultMessage: `Trust`,
                                    description: `Button label to trust a hook`,
                                  }),
                                ],
                              }),
                            })
                          : null,
                        e.isManaged
                          ? (0, K.jsx)(b, {
                              tooltipContent: (0, K.jsx)(w, {
                                id: `settings.hooks.event.managedTooltip`,
                                defaultMessage: `Managed hooks are always on`,
                                description: `Tooltip shown for admin-managed hooks`,
                              }),
                              children: (0, K.jsx)(`span`, {
                                "aria-checked": `true`,
                                "aria-disabled": `true`,
                                "aria-label": I(e, r, p),
                                className: `inline-flex cursor-not-allowed rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
                                role: `switch`,
                                tabIndex: 0,
                                children: (0, K.jsx)(y, {
                                  "aria-hidden": `true`,
                                  ariaLabel: I(e, r, p),
                                  checked: !0,
                                  className: `pointer-events-none`,
                                  disabled: !0,
                                  onChange: B,
                                }),
                              }),
                            })
                          : (0, K.jsx)(b, {
                              tooltipContent: i
                                ? (0, K.jsx)(w, {
                                    id: `settings.hooks.event.disabledUntilTrustedTooltip`,
                                    defaultMessage: `Disabled until hook is trusted`,
                                    description: `Tooltip shown for review-needed hooks whose toggle cannot be enabled yet`,
                                  })
                                : null,
                              children: i
                                ? (0, K.jsx)(`span`, {
                                    "aria-checked": `false`,
                                    "aria-disabled": `true`,
                                    "aria-label": I(e, r, p),
                                    className: `inline-flex cursor-not-allowed rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
                                    role: `switch`,
                                    tabIndex: 0,
                                    children: S,
                                  })
                                : S,
                            }),
                      ],
                    }),
                  ],
                }),
                x ? (0, K.jsx)(`div`, { className: `ps-7`, children: (0, K.jsx)(V, { hook: e }) }) : null,
              ],
            },
            e.key,
          );
        }),
        (r[12] = h),
        (r[13] = a),
        (r[14] = p),
        (r[15] = o),
        (r[16] = u),
        (r[17] = f),
        (r[18] = l),
        (r[19] = x))
      : (x = r[19]),
      (C = e.map(x)),
      (r[0] = i),
      (r[1] = h),
      (r[2] = c),
      (r[3] = a),
      (r[4] = p),
      (r[5] = o),
      (r[6] = u),
      (r[7] = f),
      (r[8] = l),
      (r[9] = S),
      (r[10] = C),
      (r[11] = T));
  } else ((S = r[9]), (C = r[10]), (T = r[11]));
  let E;
  r[20] !== S || r[21] !== C
    ? ((E = (0, K.jsx)(`div`, { className: S, children: C })), (r[20] = S), (r[21] = C), (r[22] = E))
    : (E = r[22]);
  let O;
  return (
    r[23] !== T || r[24] !== E
      ? ((O = (0, K.jsx)(`div`, { className: T, children: E })), (r[23] = T), (r[24] = E), (r[25] = O))
      : (O = r[25]),
    O
  );
}
function B() {}
function V(e) {
  let t = (0, W.c)(38),
    { hook: n, source: r, variant: i } = e,
    o = i === void 0 ? `default` : i,
    c = x(),
    l = o === "default" && `mt-2 rounded-md border border-default`,
    u;
  t[0] === l ? (u = t[1]) : ((u = s(`overflow-hidden text-sm`, l)), (t[0] = l), (t[1] = u));
  let d = o === "default" && `py-3`,
    f;
  t[2] === d
    ? (f = t[3])
    : ((f = s(`grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-2 px-3`, d)), (t[2] = d), (t[3] = f));
  let p;
  t[4] === r
    ? (p = t[5])
    : ((p =
        r == null
          ? null
          : (0, K.jsx)(H, {
              label: (0, K.jsx)(w, {
                id: `settings.hooks.event.source`,
                defaultMessage: `Source`,
                description: `Label for the project, plugin, or configuration that defines a hook`,
              }),
              children: r,
            })),
      (t[4] = r),
      (t[5] = p));
  let m;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, K.jsx)(w, {
        id: `settings.hooks.event.hookType`,
        defaultMessage: `Hook type`,
        description: `Label for the lifecycle event that triggers a hook, such as SessionStart or Stop`,
      })),
      (t[6] = m))
    : (m = t[6]);
  let h;
  t[7] !== n.eventName || t[8] !== c
    ? ((h = F(n.eventName, c)), (t[7] = n.eventName), (t[8] = c), (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] === h ? (g = t[11]) : ((g = (0, K.jsx)(H, { label: m, children: h })), (t[10] = h), (t[11] = g));
  let _;
  t[12] === n.handlerType
    ? (_ = t[13])
    : ((_ =
        n.handlerType === `prompt` || n.handlerType === `agent`
          ? (0, K.jsx)(H, {
              label: (0, K.jsx)(w, {
                id: `settings.hooks.event.handler`,
                defaultMessage: `Handler`,
                description: `Label for the handler type of a configured hook`,
              }),
              children: (0, K.jsx)(U, { handlerType: n.handlerType }),
            })
          : null),
      (t[12] = n.handlerType),
      (t[13] = _));
  let v;
  t[14] !== n.command || t[15] !== n.handlerType
    ? ((v =
        n.handlerType === `command`
          ? (0, K.jsx)(H, {
              label: (0, K.jsx)(w, {
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
      (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] !== n.handlerType || t[18] !== n.server || t[19] !== n.tool
    ? ((y =
        n.handlerType === `mcpTool`
          ? (0, K.jsxs)(K.Fragment, {
              children: [
                (0, K.jsx)(H, {
                  label: (0, K.jsx)(w, {
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
                  label: (0, K.jsx)(w, {
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
      (t[20] = y))
    : (y = t[20]);
  let b;
  t[21] === n.matcher
    ? (b = t[22])
    : ((b =
        n.matcher == null
          ? null
          : (0, K.jsx)(H, {
              label: (0, K.jsx)(w, {
                id: `settings.hooks.event.matcher`,
                defaultMessage: `Matcher`,
                description: `Label for the matcher configured for a hook`,
              }),
              children: (0, K.jsx)(`code`, { className: `font-mono text-xs break-all`, children: n.matcher }),
            })),
      (t[21] = n.matcher),
      (t[22] = b));
  let S;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, K.jsx)(w, {
        id: `settings.hooks.event.timeout`,
        defaultMessage: `Timeout`,
        description: `Label for a hook execution timeout`,
      })),
      (t[23] = S))
    : (S = t[23]);
  let C;
  t[24] === n.timeoutSec
    ? (C = t[25])
    : ((C = (0, K.jsx)(H, {
        label: S,
        children: (0, K.jsx)(a, {
          value: n.timeoutSec,
          style: `unit`,
          unit: `second`,
          unitDisplay: `narrow`,
        }),
      })),
      (t[24] = n.timeoutSec),
      (t[25] = C));
  let T;
  t[26] !== _ ||
  t[27] !== v ||
  t[28] !== y ||
  t[29] !== b ||
  t[30] !== C ||
  t[31] !== f ||
  t[32] !== p ||
  t[33] !== g
    ? ((T = (0, K.jsxs)(`dl`, { className: f, children: [p, g, _, v, y, b, C] })),
      (t[26] = _),
      (t[27] = v),
      (t[28] = y),
      (t[29] = b),
      (t[30] = C),
      (t[31] = f),
      (t[32] = p),
      (t[33] = g),
      (t[34] = T))
    : (T = t[34]);
  let E;
  return (
    t[35] !== T || t[36] !== u
      ? ((E = (0, K.jsx)(`div`, { className: u, children: T })), (t[35] = T), (t[36] = u), (t[37] = E))
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
          ? ((e = (0, K.jsx)(w, {
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
          ? ((e = (0, K.jsx)(w, {
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
    ((W = u()),
      p(),
      O(),
      c(),
      C(),
      (G = i()),
      f(),
      g(),
      l(),
      E(),
      T(),
      S(),
      k(),
      r(),
      L(),
      P(),
      N(),
      (K = o()),
      (q = h({
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
          ? ((e = (0, Z.jsx)(w, {
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
          ? ((e = (0, Z.jsx)(w, {
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
          ? ((e = (0, Z.jsx)(w, {
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
          ? ((e = (0, Z.jsx)(w, {
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
          ? ((e = (0, Z.jsx)(w, {
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
          ? ((e = (0, Z.jsx)(w, {
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
    ((X = u()), f(), (Z = o()));
  }))();
}
export { J as a, z as i, Q as n, V as r, Y as t };
//# sourceMappingURL=hooks-settings-source-label-75d050a55147.js.map
