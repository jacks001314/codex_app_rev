import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as n,
  Amn as r,
  B6t as i,
  Cpn as a,
  GK as o,
  IU as s,
  IUt as c,
  Jit as l,
  KK as u,
  Kit as d,
  PU as f,
  QKt as p,
  Rpn as m,
  Spn as h,
  U3 as g,
  W3 as _,
  X0 as v,
  X2t as y,
  Y2t as b,
  gMt as x,
  hMt as S,
  hmn as C,
  i3t as w,
  kMt as ee,
  kmn as T,
  n7t as E,
  qKt as D,
  r3t as O,
  y0t as k,
  z7t as te,
  zpn as A,
} from "./app-initial-f094ef01c64d.js";
import { Ni as j, Pi as ne } from "./app-primary-4c40d73a1074.js";
import { n as M, t as N } from "./arrow-branch-light-16-cdf94f439042.js";
import { n as P, t as F } from "./exec-shell-container-5907f96a4bc6.js";
var I,
  L,
  re = e(() => {
    (r(),
      (I = C()),
      (L = (e) =>
        (0, I.jsxs)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, I.jsx)(`path`, {
              d: `M16.667 3.5C17.034 3.50026 17.332 3.79793 17.332 4.16504V15.832C17.3319 16.199 17.0339 16.4968 16.667 16.4971C16.2998 16.4971 16.0021 16.1992 16.002 15.832V4.16504C16.002 3.79777 16.2997 3.5 16.667 3.5Z`,
              fill: `currentColor`,
            }),
            (0, I.jsx)(`path`, {
              d: `M7.0293 5.36133C7.289 5.10163 7.711 5.10163 7.9707 5.36133L11.96 9.35156C12.317 9.70891 12.3172 10.2883 11.96 10.6455L7.9707 14.6357C7.71109 14.8954 7.28902 14.8952 7.0293 14.6357C6.76987 14.3761 6.76998 13.955 7.0293 13.6953L10.0605 10.6631H3.33301C2.96574 10.6631 2.66797 10.3653 2.66797 9.99805C2.66817 9.63095 2.96586 9.33301 3.33301 9.33301H10.0605L7.0293 6.30273C6.7696 6.04304 6.7696 5.62103 7.0293 5.36133Z`,
              fill: `currentColor`,
            }),
          ],
        })));
  });
function ie({ pendingWorktree: e, upstreamRefreshMode: t }) {
  let n = e.worktreeGitRoot != null && e.worktreeWorkspaceRoot != null,
    r = z(e.phase, n),
    i = R(e.worktreeOutputText, V),
    a =
      i != null ||
      /(?:^|[\r\n])(?:Preparing worktree|Updating index flags:)/.test(e.worktreeOutputText),
    o = r === `completed`,
    s = e.worktreeOutputText.includes(`[info] Refreshing upstream before creating worktree`),
    c = e.worktreeOutputText.includes(`[info] Continuing without updating`),
    l = e.worktreeOutputText.includes(
      `[warning] Could not refresh upstream; using cached Git state`,
    ),
    u =
      s ||
      (t === `best-effort` &&
        e.startingState.type === `branch` &&
        e.startingState.remoteRef == null &&
        !a &&
        !o &&
        r !== `failed`),
    d = s && (c || l || e.worktreeOutputText.includes(`[info] Upstream refreshed`) || a || o),
    f = u && !d,
    p = f ? `pending` : `running`;
  o || a ? (p = `completed`) : r === `failed` && !f && (p = `failed`);
  let m = `pending`;
  o ? (m = `completed`) : a && (m = r === `failed` ? `failed` : `running`);
  let h = [];
  if (u) {
    let t = r;
    (l ? (t = `failed`) : c ? (t = `skipped`) : d && (t = `completed`),
      h.push({
        kind: `fetch`,
        status: t,
        progressPercentage: f && r !== `failed` ? R(e.worktreeOutputText, H) : null,
      }));
  }
  return (
    h.push(
      { kind: `workspace`, status: p, progressPercentage: null },
      { kind: `checkout`, status: m, progressPercentage: m === `running` ? i : null },
    ),
    e.localEnvironmentConfigPath != null &&
      h.push({ kind: `setup`, status: B(e, n) ?? `pending`, progressPercentage: null }),
    h
  );
}
function R(e, t) {
  let n = null;
  for (let r of e.matchAll(t)) {
    let e = Number(r[1]);
    e >= 0 && e <= 100 && (n = e);
  }
  return n;
}
function z(e, t) {
  switch (e) {
    case `queued`:
    case `creating`:
      return `running`;
    case `setting-up`:
    case `worktree-ready`:
      return `completed`;
    case `failed`:
      return t ? `completed` : `failed`;
  }
}
function B(e, t) {
  switch (e.phase) {
    case `queued`:
    case `creating`:
      return null;
    case `setting-up`:
      return `running`;
    case `worktree-ready`:
      return e.localEnvironmentConfigPath == null
        ? null
        : e.errorMessage == null
          ? `completed`
          : `skipped`;
    case `failed`:
      return t ? `failed` : null;
  }
}
var V,
  H,
  U = e(() => {
    ((V = /(?:^|[\r\n])Updating files:\s+(\d{1,3})%\s+\(\d+\/\d+\)/g),
      (H = /(?:^|[\r\n])Receiving objects:\s+(\d{1,3})%\s+\(\d+\/\d+\)/g));
  });
function W(e) {
  let t = (0, Y.c)(22),
    {
      pendingWorktree: n,
      isConversationStarting: r,
      isConversationStartFailed: i,
      onContinueWithoutUpdating: o,
      children: s,
    } = e,
    c = ie({ pendingWorktree: n, upstreamRefreshMode: p(te.upstreamRefreshMode) }),
    l = `${n.id}:${n.attempt}`,
    [u, m] = (0, X.useState)(null),
    h = c.some(ae),
    g = o != null;
  (0, X.useEffect)(() => {
    if (!h || !g) return;
    let e = window.setTimeout(() => {
      m(l);
    }, Q);
    return () => {
      window.clearTimeout(e);
    };
  }, [g, l, h]);
  let _ = h && g && (u === l || Array.from(n.worktreeOutputText.matchAll($)).some(J)),
    v;
  t[0] !== n.setupOutputText || t[1] !== n.worktreeOutputText
    ? ((v = [n.worktreeOutputText, n.setupOutputText].filter(q)),
      (t[0] = n.setupOutputText),
      (t[1] = n.worktreeOutputText),
      (t[2] = v))
    : (v = t[2]);
  let y = v.join(`
`),
    b;
  t[3] !== n.errorMessage || t[4] !== y
    ? ((b =
        n.errorMessage != null && !y.includes(n.errorMessage)
          ? [y, n.errorMessage].filter(K).join(`
`)
          : y),
      (t[3] = n.errorMessage),
      (t[4] = y),
      (t[5] = b))
    : (b = t[5]);
  let x = b,
    C = n.phase === `failed`,
    w = C || i,
    T;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Z.jsx)(S, { className: `shrink-0`, "aria-hidden": !1, asset: N })), (t[6] = T))
    : (T = t[6]);
  let E = !w && n.phase !== `worktree-ready`,
    D;
  t[7] !== C || t[8] !== i || t[9] !== n.phase
    ? ((D = (0, Z.jsx)(se, { hasWorktreeFailed: C, isConversationStartFailed: i, phase: n.phase })),
      (t[7] = C),
      (t[8] = i),
      (t[9] = n.phase),
      (t[10] = D))
    : (D = t[10]);
  let O;
  t[11] !== E || t[12] !== D
    ? ((O = (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-2 text-size-chat text-tertiary select-none`,
        children: [T, (0, Z.jsx)(f, { active: E, children: D })],
      })),
      (t[11] = E),
      (t[12] = D),
      (t[13] = O))
    : (O = t[13]);
  let k =
      n.phase !== `worktree-ready` || w
        ? (0, Z.jsxs)(`div`, {
            className: `flex flex-col gap-3 rounded-xl border border-default p-3`,
            children: [
              (0, Z.jsx)(`div`, {
                className: `flex flex-col gap-2 select-none`,
                children: c.map(G),
              }),
              x.length > 0 || s != null
                ? (0, Z.jsxs)(
                    oe,
                    {
                      hasFailed: C,
                      isInProgress: n.phase === `creating` || n.phase === `setting-up`,
                      outputText: x,
                      children: [
                        _
                          ? (0, Z.jsx)(d, {
                              tooltipContent: (0, Z.jsx)(a, {
                                id: `worktreeInitV2.progress.continueWithoutUpdatingTooltip`,
                                defaultMessage: `Stop fetching and create the worktree using the changes already available locally`,
                                description: `Tooltip explaining that continuing without updating cancels only the current upstream fetch and creates the worktree from locally available Git state`,
                              }),
                              children: (0, Z.jsxs)(ee, {
                                className: `text-size-chat`,
                                color: `ghost`,
                                onClick: o,
                                children: [
                                  (0, Z.jsx)(L, { "aria-hidden": !0, className: `icon-xs` }),
                                  (0, Z.jsx)(a, {
                                    id: `worktreeInitV2.progress.continueWithoutUpdating`,
                                    defaultMessage: `Skip update`,
                                    description: `Button that stops a slow upstream fetch and continues creating the worktree from locally available changes`,
                                  }),
                                ],
                              }),
                            })
                          : null,
                        s,
                      ],
                    },
                    `${n.id}:${n.attempt}:${w}`,
                  )
                : null,
            ],
          })
        : null,
    A;
  t[14] !== w || t[15] !== r || t[16] !== n.phase
    ? ((A =
        n.phase === `worktree-ready` && r && !w
          ? (0, Z.jsx)(`div`, {
              className: `mt-2 text-size-chat text-tertiary select-none`,
              children: (0, Z.jsx)(f, {
                active: !0,
                children: (0, Z.jsx)(a, {
                  id: `worktreeInitV2.progress.startingTaskStatus`,
                  defaultMessage: `Starting a task`,
                  description: `Status shown while starting a task after its worktree and environment are ready`,
                }),
              }),
            })
          : null),
      (t[14] = w),
      (t[15] = r),
      (t[16] = n.phase),
      (t[17] = A))
    : (A = t[17]);
  let j;
  return (
    t[18] !== O || t[19] !== k || t[20] !== A
      ? ((j = (0, Z.jsxs)(`div`, {
          className: `flex w-full max-w-3xl flex-col gap-2`,
          children: [O, k, A],
        })),
        (t[18] = O),
        (t[19] = k),
        (t[20] = A),
        (t[21] = j))
      : (j = t[21]),
    j
  );
}
function G(e) {
  return (0, Z.jsx)(ce, { step: e }, e.kind);
}
function K(e) {
  return e.length > 0;
}
function q(e) {
  return e.length > 0;
}
function J(e) {
  return Number(e[1]) * 1e3 >= Q;
}
function ae(e) {
  return e.kind === `fetch` && e.status === `running`;
}
function oe(e) {
  let t = (0, Y.c)(18),
    { hasFailed: n, isInProgress: r, outputText: i, children: s } = e,
    c = (0, X.useId)(),
    [l, u] = (0, X.useState)(n),
    [d] = (0, X.useState)(i),
    f;
  t[0] !== l || t[1] !== c || t[2] !== i.length
    ? ((f =
        i.length > 0
          ? (0, Z.jsxs)(`button`, {
              type: `button`,
              "aria-controls": c,
              "aria-expanded": l,
              className: `flex cursor-interaction items-center gap-2 text-size-chat text-tertiary select-none`,
              onClick: () => {
                u(!l);
              },
              children: [
                (0, Z.jsx)(`span`, {
                  className: `flex h-4 w-4 shrink-0 items-center justify-center`,
                  children: (0, Z.jsx)(o, {
                    className: m(
                      `icon-2xs transition-transform duration-relaxed`,
                      l && `rotate-90`,
                    ),
                  }),
                }),
                l
                  ? (0, Z.jsx)(a, {
                      id: `worktreeInitV2.progress.lessDetails`,
                      defaultMessage: `Less details`,
                      description: `Disclosure for hiding the detailed Git and environment output while preparing a worktree`,
                    })
                  : (0, Z.jsx)(a, {
                      id: `worktreeInitV2.progress.moreDetails`,
                      defaultMessage: `More details`,
                      description: `Disclosure for showing the detailed Git and environment output while preparing a worktree`,
                    }),
              ],
            })
          : (0, Z.jsx)(`span`, {})),
      (t[0] = l),
      (t[1] = c),
      (t[2] = i.length),
      (t[3] = f))
    : (f = t[3]);
  let p;
  t[4] === s
    ? (p = t[5])
    : ((p =
        s == null
          ? null
          : (0, Z.jsx)(`div`, {
              className: `flex flex-wrap items-center justify-end gap-2`,
              children: s,
            })),
      (t[4] = s),
      (t[5] = p));
  let h;
  t[6] !== f || t[7] !== p
    ? ((h = (0, Z.jsxs)(`footer`, {
        className: `flex min-w-0 flex-wrap items-center justify-between gap-2`,
        children: [f, p],
      })),
      (t[6] = f),
      (t[7] = p),
      (t[8] = h))
    : (h = t[8]);
  let g;
  t[9] !== d || t[10] !== l || t[11] !== r || t[12] !== c || t[13] !== i
    ? ((g =
        i.length > 0
          ? (0, Z.jsx)(`div`, {
              id: c,
              hidden: !l,
              children: (0, Z.jsx)(F, {
                command: ``,
                output: l ? i : d,
                isInProgress: r,
                surface: `plain`,
              }),
            })
          : null),
      (t[9] = d),
      (t[10] = l),
      (t[11] = r),
      (t[12] = c),
      (t[13] = i),
      (t[14] = g))
    : (g = t[14]);
  let _;
  return (
    t[15] !== h || t[16] !== g
      ? ((_ = (0, Z.jsxs)(Z.Fragment, { children: [h, g] })), (t[15] = h), (t[16] = g), (t[17] = _))
      : (_ = t[17]),
    _
  );
}
function se(e) {
  let t = (0, Y.c)(4),
    { hasWorktreeFailed: n, isConversationStartFailed: r, phase: i } = e;
  if (n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(a, {
            id: `worktreeInitV2.progress.failedTitle`,
            defaultMessage: `Worktree setup failed`,
            description: `Title shown when a worktree fails to be created or configured`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (r) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(a, {
            id: `worktreeInitV2.progress.taskFailedTitle`,
            defaultMessage: `Task failed to start`,
            description: `Title shown when a task fails to start after its worktree is ready`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (i === `worktree-ready`) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(a, {
            id: `worktreeInitV2.progress.readyTitle`,
            defaultMessage: `Worktree created`,
            description: `Title shown when a worktree and its optional environment setup are created`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let o;
  return (
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, Z.jsx)(a, {
          id: `worktreeInitV2.progress.runningTitle`,
          defaultMessage: `Creating a worktree`,
          description: `Title shown while preparing a new worktree and its environment`,
        })),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function ce(e) {
  let t = (0, Y.c)(15),
    { step: n } = e,
    r = (0, X.useId)(),
    i = n.status === `completed` || n.status === `skipped` ? `done` : n.status,
    o;
  t[0] === n ? (o = t[1]) : ((o = (0, Z.jsx)(le, { step: n })), (t[0] = n), (t[1] = o));
  let s;
  t[2] !== r || t[3] !== o
    ? ((s = (0, Z.jsx)(`span`, { id: r, children: o })), (t[2] = r), (t[3] = o), (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] !== i || t[6] !== s
    ? ((c = (0, Z.jsx)(j, { compact: !0, status: i, children: s })),
      (t[5] = i),
      (t[6] = s),
      (t[7] = c))
    : (c = t[7]);
  let l;
  t[8] !== r || t[9] !== n.kind || t[10] !== n.progressPercentage
    ? ((l =
        n.progressPercentage != null && !(n.kind === `fetch` && n.progressPercentage === 100)
          ? (0, Z.jsxs)(`div`, {
              className: `flex shrink-0 items-center gap-3`,
              children: [
                (0, Z.jsx)(`div`, {
                  role: `progressbar`,
                  "aria-labelledby": r,
                  "aria-valuemin": 0,
                  "aria-valuemax": 100,
                  "aria-valuenow": n.progressPercentage,
                  className: `h-2 w-28 overflow-hidden rounded-full bg-text/10 rtl:rotate-180`,
                  children: (0, Z.jsx)(`div`, {
                    className: `h-full w-full rounded-full bg-text-info`,
                    style: { transform: `translateX(${n.progressPercentage - 100}%)` },
                  }),
                }),
                (0, Z.jsx)(`span`, {
                  className: `w-12 pe-2 text-end text-size-chat text-secondary tabular-nums`,
                  children: (0, Z.jsx)(a, {
                    id: `worktreeInitV2.progress.checkoutPercentage`,
                    defaultMessage: `{progress, number, percent}`,
                    description: `Actual worktree fetch or checkout progress percentage reported by Git`,
                    values: { progress: n.progressPercentage / 100 },
                  }),
                }),
              ],
            })
          : null),
      (t[8] = r),
      (t[9] = n.kind),
      (t[10] = n.progressPercentage),
      (t[11] = l))
    : (l = t[11]);
  let u;
  return (
    t[12] !== c || t[13] !== l
      ? ((u = (0, Z.jsxs)(`div`, {
          className: `flex min-w-0 items-center justify-between gap-3`,
          children: [c, l],
        })),
        (t[12] = c),
        (t[13] = l),
        (t[14] = u))
      : (u = t[14]),
    u
  );
}
function le(e) {
  let t = (0, Y.c)(8),
    { step: n } = e;
  switch (n.kind) {
    case `fetch`: {
      if (n.status === `failed`) {
        let e;
        return (
          t[0] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, Z.jsx)(a, {
                id: `worktreeInitV2.progress.fetchFailed`,
                defaultMessage: `Couldn’t fetch latest changes`,
                description: `Failed worktree progress step shown when fetching the selected branch's latest upstream changes fails but worktree creation continues`,
              })),
              (t[0] = e))
            : (e = t[0]),
          e
        );
      }
      if (n.status === `skipped`) {
        let e;
        return (
          t[1] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, Z.jsx)(a, {
                id: `worktreeInitV2.progress.fetchSkipped`,
                defaultMessage: `Update skipped`,
                description: `Completed worktree progress step shown after the user skips fetching the selected branch's latest upstream changes`,
              })),
              (t[1] = e))
            : (e = t[1]),
          e
        );
      }
      if (n.status === `running` && n.progressPercentage === 100) {
        let e;
        return (
          t[2] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, Z.jsx)(a, {
                id: `worktreeInitV2.progress.fetchFinalizing`,
                defaultMessage: `Finalizing update…`,
                description: `Worktree progress step shown while Git finishes processing downloaded upstream changes before creating a worktree`,
              })),
              (t[2] = e))
            : (e = t[2]),
          e
        );
      }
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(a, {
              id: `worktreeInitV2.progress.fetch`,
              defaultMessage: `Fetching latest changes`,
              description: `Worktree progress step for fetching the selected branch's latest upstream changes before creating a worktree`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `workspace`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(a, {
              id: `worktreeInitV2.progress.workspace`,
              defaultMessage: `Preparing workspace`,
              description: `Worktree progress step for preparing the source repository and worktree location`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `checkout`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(a, {
              id: `worktreeInitV2.progress.checkout`,
              defaultMessage: `Checking out files`,
              description: `Worktree progress step for checking repository files out with Git`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `setup`: {
      if (n.status === `skipped`) {
        let e;
        return (
          t[6] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, Z.jsx)(a, {
                id: `worktreeInitV2.progress.setupSkipped`,
                defaultMessage: `Environment setup skipped`,
                description: `Worktree progress step shown when the user continues after environment setup fails`,
              })),
              (t[6] = e))
            : (e = t[6]),
          e
        );
      }
      let e;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(a, {
              id: `worktreeInitV2.progress.setup`,
              defaultMessage: `Setting up environment`,
              description: `Worktree progress step for running the repository's optional environment setup`,
            })),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
  }
}
var Y,
  X,
  Z,
  Q,
  $,
  ue = e(() => {
    ((Y = T()),
      M(),
      A(),
      i(),
      (X = t(r(), 1)),
      h(),
      n(),
      x(),
      l(),
      re(),
      u(),
      P(),
      s(),
      ne(),
      D(),
      U(),
      (Z = C()),
      (Q = 6e4),
      ($ = /\[info\] Refreshing upstream before creating worktree \((\d+)s elapsed\)/g));
  });
async function de({
  scope: e,
  createPendingWorktree: t,
  intl: n,
  pendingWorktree: r,
  serviceTier: i,
}) {
  let a = pe(r, n),
    o = await fe(e, r, a, i),
    s = n.formatMessage({
      id: `worktreeInitV2.autoFix.label`,
      defaultMessage: `Fix worktree setup`,
      description: `Pending worktree label for a repair thread created after local environment setup fails`,
    });
  return g(t, {
    hostId: r.hostId,
    label: s,
    initialThreadTitle: s,
    sourceWorkspaceRoot: r.sourceWorkspaceRoot,
    startingState: r.startingState,
    localEnvironmentConfigPath: null,
    launchMode: `start-conversation`,
    prompt: a,
    startConversationParamsInput: o,
    sourceConversationId: null,
    sourceCollaborationMode: null,
  });
}
async function fe(e, t, n, r) {
  let i = [{ type: `text`, text: n, text_elements: [] }],
    a = [
      t.sourceWorkspaceRoot,
      ...E(
        t.launchMode === `start-conversation`
          ? t.startConversationParamsInput.workspaceRoots
          : t.sourceWorkspaceRoots,
      ),
    ];
  if (t.launchMode === `start-conversation`)
    return {
      ...t.startConversationParamsInput,
      input: i,
      commentAttachments: [],
      workspaceRoots: a,
      cwd: t.sourceWorkspaceRoot,
      fileAttachments: [],
      addedFiles: [],
      threadSource: `worktree_setup_auto_fix`,
      serviceTier: r,
    };
  let { config: o } = await O(e, t.hostId).sendRequest(
    `config/read`,
    { includeLayers: !1, cwd: t.sourceWorkspaceRoot },
    { priority: `critical` },
  );
  return {
    input: i,
    commentAttachments: [],
    workspaceRoots: a,
    cwd: t.sourceWorkspaceRoot,
    fileAttachments: [],
    addedFiles: [],
    agentMode: b(`agent-mode-by-host-id`, {})[t.hostId] ?? `auto`,
    shouldSendPermissionOverrides: !0,
    model: null,
    serviceTier: r,
    reasoningEffort: null,
    collaborationMode: t.launchMode === `fork-conversation` ? t.sourceCollaborationMode : null,
    config: k(o),
    threadSource: `worktree_setup_auto_fix`,
    workspaceKind: `project`,
  };
}
function pe(e, t) {
  return t.formatMessage(
    {
      id: `worktreeInitV2.autoFix.prompt`,
      defaultMessage:
        "Fix this project's local environment setup.{paragraphBreak}The original worktree setup failed before its thread could start. Do not continue the original user request. Start a one-off repair task in this new worktree without running the broken setup automatically. Paths in the failure output refer to the original source or failed worktree, so edit the corresponding files in this current repair worktree. Inspect the selected local environment config and related setup files, reproduce the failure manually if useful, make the smallest source-controlled fix, verify the setup succeeds, and leave the proposed fix here for user review before they retry the original task. If the fix should not be made automatically, explain exactly what the user should change.{paragraphBreak}Selected local environment config: {configPath}{lineBreak}Original setup error: {errorMessage}{paragraphBreak}Original setup output:{lineBreak}```text{lineBreak}{outputText}{lineBreak}```",
      description: `Prompt sent to a repair thread created after local environment setup fails`,
    },
    {
      configPath: e.localEnvironmentConfigPath ?? ``,
      errorMessage: e.errorMessage ?? ``,
      lineBreak: `
`,
      outputText: e.setupOutputText,
      paragraphBreak: `

`,
    },
  );
}
var me = e(() => {
  (i(), w(), c(), v(), y(), _());
});
export { ue as i, me as n, W as r, de as t };
//# sourceMappingURL=worktree-setup-auto-fix-47aace51921d.js.map
