import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  A7 as r,
  AH as i,
  AMt as a,
  Amn as o,
  Aw as s,
  B0 as c,
  B4t as l,
  B6t as u,
  BS as d,
  Cpn as f,
  Den as p,
  Dpt as m,
  Eft as h,
  F3t as g,
  Fp as _,
  Fx as v,
  G0 as y,
  Gu as b,
  H4t as x,
  Hu as S,
  IXt as C,
  Ip as ee,
  Ix as te,
  JS as ne,
  JXt as re,
  K0 as ie,
  KS as ae,
  KXt as oe,
  KYt as w,
  L0 as T,
  M6t as se,
  MMt as E,
  Mw as ce,
  N3t as le,
  N6t as D,
  Np as ue,
  O3t as O,
  OW as de,
  Opn as fe,
  Opt as pe,
  Ow as k,
  Pp as A,
  Qu as j,
  Rpn as me,
  SC as he,
  Spn as M,
  T8 as N,
  Ten as P,
  Tft as ge,
  U0 as _e,
  VS as ve,
  Vu as F,
  XS as ye,
  Xen as be,
  Xu as I,
  YHt as xe,
  ZXt as Se,
  Zu as L,
  _3 as Ce,
  _Jt as R,
  a3t as we,
  ch as Te,
  gMt as Ee,
  hMt as De,
  hmn as Oe,
  ih as ke,
  jMt as Ae,
  jw as je,
  k7t as Me,
  kH as Ne,
  kMt as z,
  kW as Pe,
  kmn as B,
  lJt as Fe,
  o3t as Ie,
  o7t as Le,
  oh as Re,
  q4t as ze,
  qS as Be,
  qXt as Ve,
  qu as V,
  u3 as He,
  uJt as Ue,
  vJt as We,
  vit as H,
  w8 as Ge,
  xC as Ke,
  xpn as U,
  y7 as qe,
  yC as Je,
  yit as Ye,
  zXt as Xe,
  zpn as Ze,
} from "./app-initial-f094ef01c64d.js";
import { Fm as W, Im as G, cf as Qe, lf as $e } from "./app-primary-4c40d73a1074.js";
import { n as et, t as tt } from "./toolbar-breadcrumb-76687ef37675.js";
import { n as nt, t as rt } from "./local-environment-workflow-messages-6e2a4950d847.js";
import {
  _ as it,
  a as at,
  g as ot,
  i as st,
  l as ct,
  n as lt,
  o as ut,
  r as dt,
  t as ft,
  u as K,
} from "./local-environment-editor-1e185852cf27.js";
import { n as pt, t as mt } from "./settings-row-disclosure-d65042756aaf.js";
function ht(e, t) {
  return t?.label ?? W(e) ?? e;
}
var q = e(() => {
  G();
});
function gt(e) {
  let t = (0, J.c)(29),
    { actions: n, lifecycle: r, scriptType: i } = e,
    a = fe(),
    [o, s] = (0, Y.useState)(`default`),
    c = r?.script ?? ``,
    l = o === "default" ? null : (r?.[o]?.script ?? ``),
    u = l === `` && c.length > 0,
    d = l == null || u ? c : l,
    p;
  t[0] !== c.length || t[1] !== r
    ? ((p = c.length > 0 || Me.some((e) => !!r?.[e]?.script)),
      (t[0] = c.length),
      (t[1] = r),
      (t[2] = p))
    : (p = t[2]);
  let m = p,
    h = i === `setup`,
    g,
    _;
  t[3] === h
    ? ((g = t[4]), (_ = t[5]))
    : ((g = h ? (0, X.jsx)(f, { ...K.setupScript }) : (0, X.jsx)(f, { ...K.cleanupScript })),
      (_ = h
        ? (0, X.jsx)(f, {
            id: `settings.localEnvironments.environment.setup.description`,
            defaultMessage: `This script runs on worktree creation`,
            description: `Description for environment setup script summary`,
          })
        : (0, X.jsx)(f, { ...K.cleanupDescription })),
      (t[3] = h),
      (t[4] = g),
      (t[5] = _));
  let v;
  t[6] !== n || t[7] !== g || t[8] !== _
    ? ((v = (0, X.jsx)(L.Header, { title: g, subtitle: _, actions: n })),
      (t[6] = n),
      (t[7] = g),
      (t[8] = _),
      (t[9] = v))
    : (v = t[9]);
  let y;
  t[10] !== m || t[11] !== a || t[12] !== o || t[13] !== h
    ? ((y = m
        ? (0, X.jsx)(at, {
            leadingOption: `default`,
            selectedId: o,
            onSelect: s,
            ariaLabel: h
              ? a.formatMessage(K.setupPlatformSelector)
              : a.formatMessage(K.cleanupPlatformSelector),
          })
        : null),
      (t[10] = m),
      (t[11] = a),
      (t[12] = o),
      (t[13] = h),
      (t[14] = y))
    : (y = t[14]);
  let b;
  t[15] !== o || t[16] !== u
    ? ((b =
        o !== "default" && u
          ? (0, X.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: (0, X.jsx)(f, {
                id: `settings.localEnvironments.environment.platformUsesDefault`,
                defaultMessage: `No platform override. Using the default script`,
                description: `Message shown when a platform uses the default local environment script`,
              }),
            })
          : null),
      (t[15] = o),
      (t[16] = u),
      (t[17] = b))
    : (b = t[17]);
  let x;
  t[18] !== m || t[19] !== d || t[20] !== o
    ? ((x =
        d.length > 0
          ? (0, X.jsx)(Ne, {
              language: o === `win32` ? `text` : `bash`,
              content: d,
              shouldWrapCode: !0,
              codeContainerClassName: `max-h-56`,
            })
          : (0, X.jsx)(F, {
              variant: `secondary`,
              children: (0, X.jsx)(V, {
                label:
                  o === "default" || !m
                    ? (0, X.jsx)(f, {
                        id: `settings.localEnvironments.environment.script.empty`,
                        defaultMessage: `No script configured`,
                        description: `Empty state for a local environment script`,
                      })
                    : (0, X.jsx)(f, {
                        id: `settings.localEnvironments.environment.platformScript.empty`,
                        defaultMessage: `No script configured for this platform`,
                        description: `Empty state for a local environment platform script`,
                      }),
                control: null,
                size: `compact`,
              }),
            })),
      (t[18] = m),
      (t[19] = d),
      (t[20] = o),
      (t[21] = x))
    : (x = t[21]);
  let S;
  t[22] !== y || t[23] !== b || t[24] !== x
    ? ((S = (0, X.jsxs)(L.Content, { className: `gap-2`, children: [y, b, x] })),
      (t[22] = y),
      (t[23] = b),
      (t[24] = x),
      (t[25] = S))
    : (S = t[25]);
  let C;
  return (
    t[26] !== v || t[27] !== S
      ? ((C = (0, X.jsxs)(L, { className: `gap-2`, children: [v, S] })),
        (t[26] = v),
        (t[27] = S),
        (t[28] = C))
      : (C = t[28]),
    C
  );
}
var J,
  Y,
  X,
  _t = e(() => {
    ((J = B()), u(), (Y = t(o(), 1)), M(), i(), ct(), ut(), j(), I(), S(), (X = Oe()));
  });
function vt(e) {
  let t = (0, xt.c)(12),
    { configExists: n, initialEnvironment: r, hasParseError: i, hasReadError: a } = e,
    o = r != null,
    s = r?.actions,
    c;
  t[0] !== n || t[1] !== i || t[2] !== o || t[3] !== a
    ? ((c =
        !o || i || a
          ? (0, Z.jsx)(L, {
              className: `gap-2`,
              children: (0, Z.jsxs)(L.Content, {
                children: [
                  n
                    ? null
                    : (0, Z.jsx)(F, {
                        children: (0, Z.jsx)(de, {
                          layout: `settings-row`,
                          children: (0, Z.jsx)(f, {
                            id: `settings.localEnvironments.environment.empty`,
                            defaultMessage: `No local environment is configured for this project yet`,
                            description: `Empty state when no local environment is configured`,
                          }),
                        }),
                      }),
                  i
                    ? (0, Z.jsx)(`div`, {
                        className: `mt-2 text-sm text-danger`,
                        children: (0, Z.jsx)(f, { ...nt.parseError }),
                      })
                    : null,
                  a
                    ? (0, Z.jsx)(`div`, {
                        className: `mt-2 text-sm text-danger`,
                        children: (0, Z.jsx)(f, { ...nt.readError }),
                      })
                    : null,
                ],
              }),
            })
          : null),
      (t[0] = n),
      (t[1] = i),
      (t[2] = o),
      (t[3] = a),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] !== s || t[6] !== o || t[7] !== r
    ? ((l = o
        ? (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsx)(gt, {
                actions: (0, Z.jsx)(dt, {}),
                lifecycle: r.setup,
                scriptType: `setup`,
              }),
              (0, Z.jsx)(gt, { lifecycle: r.cleanup, scriptType: `cleanup` }),
              (0, Z.jsxs)(L, {
                className: `gap-2`,
                children: [
                  (0, Z.jsx)(L.Header, {
                    title: (0, Z.jsx)(f, {
                      id: `settings.localEnvironments.environment.actionsLabel`,
                      defaultMessage: `Actions`,
                      description: `Label for actions count in local environment summary`,
                    }),
                    subtitle: (0, Z.jsx)(f, { ...K.actionsDescription }),
                  }),
                  (0, Z.jsx)(L.Content, {
                    children: (0, Z.jsx)(F, {
                      children:
                        s != null && s.length > 0
                          ? s.map(yt)
                          : (0, Z.jsx)(de, {
                              layout: `settings-row`,
                              children: (0, Z.jsx)(f, { ...K.actionsEmpty }),
                            }),
                    }),
                  }),
                ],
              }),
            ],
          })
        : null),
      (t[5] = s),
      (t[6] = o),
      (t[7] = r),
      (t[8] = l))
    : (l = t[8]);
  let u;
  return (
    t[9] !== c || t[10] !== l
      ? ((u = (0, Z.jsxs)(Z.Fragment, { children: [c, l] })), (t[9] = c), (t[10] = l), (t[11] = u))
      : (u = t[11]),
    u
  );
}
function yt(e, t) {
  return (0, Z.jsx)(bt, { action: e }, `${e.name}-${t}`);
}
function bt(e) {
  let t = (0, xt.c)(25),
    { action: n } = e,
    [r, i] = (0, St.useState)(!1),
    a = (0, St.useId)(),
    o;
  if (t[0] !== n.command) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = /\r?\n/), (t[2] = e)) : (e = t[2]),
      (o = n.command.trimEnd().split(e)),
      (t[0] = n.command),
      (t[1] = o));
  } else o = t[1];
  let s = o,
    c = s.length > 1,
    l;
  t[3] !== n.command || t[4] !== c
    ? ((l = c
        ? (0, Z.jsx)(V, {
            label: null,
            control: (0, Z.jsx)(`code`, {
              className: `block w-full font-mono text-xs break-all whitespace-pre-wrap`,
              dir: `ltr`,
              children: n.command,
            }),
            variant: `nested`,
          })
        : null),
      (t[3] = n.command),
      (t[4] = c),
      (t[5] = l))
    : (l = t[5]);
  let u = c && r,
    d = n.icon ?? `tool`,
    p;
  t[6] === d
    ? (p = t[7])
    : ((p = (0, Z.jsx)(`span`, {
        className: `text-secondary`,
        children: (0, Z.jsx)(ot, { icon: d }),
      })),
      (t[6] = d),
      (t[7] = p));
  let m;
  t[8] === s[0]
    ? (m = t[9])
    : ((m = (0, Z.jsx)(`code`, {
        className: `font-mono text-wrap break-all`,
        dir: `ltr`,
        children: s[0],
      })),
      (t[8] = s[0]),
      (t[9] = m));
  let h;
  t[10] !== n.name || t[11] !== a || t[12] !== r || t[13] !== c
    ? ((h = c
        ? (0, Z.jsxs)(z, {
            "aria-controls": a,
            "aria-expanded": r,
            color: `ghost`,
            size: `icon`,
            uniform: !0,
            onClick: () => {
              i(!r);
            },
            children: [
              (0, Z.jsx)(`span`, {
                className: `sr-only`,
                children: r
                  ? (0, Z.jsx)(f, {
                      id: `settings.localEnvironments.environment.action.hideCommand`,
                      defaultMessage: `Hide full command for {actionName}`,
                      description: `Accessible label for collapsing a local environment action command`,
                      values: { actionName: n.name },
                    })
                  : (0, Z.jsx)(f, {
                      id: `settings.localEnvironments.environment.action.showCommand`,
                      defaultMessage: `Show full command for {actionName}`,
                      description: `Accessible label for expanding a local environment action command`,
                      values: { actionName: n.name },
                    }),
              }),
              (0, Z.jsx)(H, {
                "aria-hidden": !0,
                className: me(
                  `icon-2xs shrink-0 text-tertiary transition-transform`,
                  r ? `rotate-0` : `-rotate-90`,
                ),
              }),
            ],
          })
        : null),
      (t[10] = n.name),
      (t[11] = a),
      (t[12] = r),
      (t[13] = c),
      (t[14] = h))
    : (h = t[14]);
  let g;
  t[15] !== n.name || t[16] !== p || t[17] !== m || t[18] !== h
    ? ((g = (0, Z.jsx)(V, { icon: p, label: n.name, description: m, control: h })),
      (t[15] = n.name),
      (t[16] = p),
      (t[17] = m),
      (t[18] = h),
      (t[19] = g))
    : (g = t[19]);
  let _;
  return (
    t[20] !== a || t[21] !== l || t[22] !== u || t[23] !== g
      ? ((_ = (0, Z.jsx)(mt, { content: l, contentId: a, expanded: u, children: g })),
        (t[20] = a),
        (t[21] = l),
        (t[22] = u),
        (t[23] = g),
        (t[24] = _))
      : (_ = t[24]),
    _
  );
}
var xt,
  St,
  Z,
  Ct = e(() => {
    ((xt = B()),
      Ze(),
      (St = t(o(), 1)),
      M(),
      a(),
      Pe(),
      Ye(),
      it(),
      _t(),
      ct(),
      st(),
      rt(),
      j(),
      I(),
      pt(),
      S(),
      (Z = Oe()));
  }),
  wt,
  Tt = e(() => {
    (M(),
      (wt = U({
        selectProject: {
          id: `settings.localEnvironments.workspaceSelect.title`,
          defaultMessage: `Select a project`,
          description: `Title for the workspace selection step`,
        },
        workspaceSelectDescription: {
          id: `settings.localEnvironments.workspaceSelect.description`,
          defaultMessage: `Local environments tell ChatGPT how to set up worktrees for a project. {learnMore}`,
          description: `Description for the workspace selection step`,
        },
        workspaceSelectLearnMore: {
          id: `settings.localEnvironments.workspaceSelect.learnMore`,
          defaultMessage: `Learn more.`,
          description: `Link label for local environments docs`,
        },
        editEnvironment: {
          id: `settings.localEnvironments.environment.editAction`,
          defaultMessage: `Edit`,
          description: `Button label to edit a local environment`,
        },
        createEnvironment: {
          id: `settings.localEnvironments.environment.create`,
          defaultMessage: `Create local environment`,
          description: `Button label to create a local environment`,
        },
      })));
  });
function Et(e) {
  let t = (0, Mt.c)(17),
    {
      groups: n,
      hasError: r,
      hostId: i,
      isLoading: a,
      workspaceRoots: o,
      onAddWorkspace: s,
      onCreateEnvironment: c,
      onRetry: l,
      onSelectEnvironment: u,
    } = e,
    d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(f, { ...wt.selectProject })), (t[0] = d))
    : (d = t[0]);
  let p;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Q.jsx)(f, {
        id: `settings.localEnvironments.workspace.add`,
        defaultMessage: `Add project`,
        description: `Button label to add a new workspace`,
      })),
      (t[1] = p))
    : (p = t[1]);
  let m;
  t[2] === s
    ? (m = t[3])
    : ((m = (0, Q.jsx)(L.Header, {
        title: d,
        actions: (0, Q.jsx)(z, { color: `secondary`, size: `toolbar`, onClick: s, children: p }),
      })),
      (t[2] = s),
      (t[3] = m));
  let h;
  t[4] !== n ||
  t[5] !== r ||
  t[6] !== i ||
  t[7] !== a ||
  t[8] !== s ||
  t[9] !== c ||
  t[10] !== l ||
  t[11] !== u ||
  t[12] !== o
    ? ((h = (0, Q.jsx)(L.Content, {
        children: (0, Q.jsx)(`div`, {
          className: `flex flex-col gap-2`,
          children: (0, Q.jsx)(Dt, {
            groups: n,
            hasError: r,
            hostId: i,
            isLoading: a,
            workspaceRoots: o,
            onAddWorkspace: s,
            onCreateEnvironment: c,
            onRetry: l,
            onSelectEnvironment: u,
          }),
        }),
      })),
      (t[4] = n),
      (t[5] = r),
      (t[6] = i),
      (t[7] = a),
      (t[8] = s),
      (t[9] = c),
      (t[10] = l),
      (t[11] = u),
      (t[12] = o),
      (t[13] = h))
    : (h = t[13]);
  let g;
  return (
    t[14] !== m || t[15] !== h
      ? ((g = (0, Q.jsxs)(L, { children: [m, h] })), (t[14] = m), (t[15] = h), (t[16] = g))
      : (g = t[16]),
    g
  );
}
function Dt(e) {
  let t = (0, Mt.c)(33),
    {
      groups: n,
      hasError: r,
      hostId: i,
      isLoading: a,
      workspaceRoots: o,
      onAddWorkspace: s,
      onCreateEnvironment: c,
      onRetry: l,
      onSelectEnvironment: u,
    } = e,
    d = fe(),
    m,
    h,
    g,
    _,
    v;
  if (
    t[0] !== n ||
    t[1] !== r ||
    t[2] !== i ||
    t[3] !== d ||
    t[4] !== a ||
    t[5] !== s ||
    t[6] !== c ||
    t[7] !== l ||
    t[8] !== u ||
    t[9] !== o
  ) {
    v = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = new Set();
      if (a) {
        let e;
        (t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(ae, {
              children: (0, Q.jsx)(f, {
                id: `settings.localEnvironments.workspaceSelect.loading`,
                defaultMessage: `Loading projects…`,
                description: `Loading message while workspace options are fetched`,
              }),
            })),
            (t[15] = e))
          : (e = t[15]),
          (v = e));
        break bb0;
      }
      if (r) {
        let e;
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(f, { ...nt.retry })), (t[16] = e))
          : (e = t[16]);
        let n;
        t[17] === l
          ? (n = t[18])
          : ((n = (0, Q.jsx)(z, { color: `secondary`, size: `toolbar`, onClick: l, children: e })),
            (t[17] = l),
            (t[18] = n));
        let r;
        t[19] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((r = (0, Q.jsx)(`span`, {
              className: `text-danger`,
              role: `alert`,
              children: (0, Q.jsx)(f, {
                id: `settings.localEnvironments.workspaceSelect.error`,
                defaultMessage: `Could not load projects`,
                description: `Error shown when local environment projects cannot be loaded`,
              }),
            })),
            (t[19] = r))
          : (r = t[19]);
        let i;
        (t[20] === n
          ? (i = t[21])
          : ((i = (0, Q.jsx)(F, { children: (0, Q.jsx)(V, { control: n, label: r }) })),
            (t[20] = n),
            (t[21] = i)),
          (v = i));
        break bb0;
      }
      if (o.length === 0) {
        let e;
        t[22] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(f, {
              id: `settings.localEnvironments.workspaceSelect.empty`,
              defaultMessage: `No projects yet. Add one to configure local environments.`,
              description: `Empty state when no workspace roots are available`,
            })),
            (t[22] = e))
          : (e = t[22]);
        let n;
        t[23] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, Q.jsx)(f, {
              id: `settings.localEnvironments.workspace.add`,
              defaultMessage: `Add project`,
              description: `Button label to add a new workspace`,
            })),
            (t[23] = n))
          : (n = t[23]);
        let r;
        (t[24] === s
          ? (r = t[25])
          : ((r = (0, Q.jsx)(F, {
              children: (0, Q.jsxs)(`div`, {
                className: `flex flex-col gap-3 p-3 text-sm text-secondary`,
                children: [
                  e,
                  (0, Q.jsx)(`div`, {
                    children: (0, Q.jsx)(z, {
                      color: `primary`,
                      size: `toolbar`,
                      onClick: s,
                      children: n,
                    }),
                  }),
                ],
              }),
            })),
            (t[24] = s),
            (t[25] = r)),
          (v = r));
        break bb0;
      }
      ((m = `flex flex-col gap-3`),
        (h = `list`),
        t[26] === d
          ? (g = t[27])
          : ((g = d.formatMessage({
              id: `settings.localEnvironments.workspaceSelect.listLabel`,
              defaultMessage: `Available projects`,
              description: `Aria label for the workspace selection list`,
            })),
            (t[26] = d),
            (t[27] = g)),
        (_ = o.map((t) => {
          let r = p(t),
            a =
              n.find((n) => !e.has(`${n.projectId}:${r}`) && n.path != null && P(n.path, t)) ??
              null;
          return (
            a != null && e.add(`${a.projectId}:${r}`),
            (0, Q.jsx)(
              Ot,
              {
                hostId: i,
                resolvedProject: a,
                workspaceRoot: t,
                onCreateEnvironment: c,
                onSelectEnvironment: u,
              },
              `${a?.projectId ?? `unassigned`}:${t}`,
            )
          );
        })));
    }
    ((t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = d),
      (t[4] = a),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u),
      (t[9] = o),
      (t[10] = m),
      (t[11] = h),
      (t[12] = g),
      (t[13] = _),
      (t[14] = v));
  } else ((m = t[10]), (h = t[11]), (g = t[12]), (_ = t[13]), (v = t[14]));
  if (v !== Symbol.for(`react.early_return_sentinel`)) return v;
  let y;
  return (
    t[28] !== m || t[29] !== h || t[30] !== g || t[31] !== _
      ? ((y = (0, Q.jsx)(`div`, { className: m, role: h, "aria-label": g, children: _ })),
        (t[28] = m),
        (t[29] = h),
        (t[30] = g),
        (t[31] = _),
        (t[32] = y))
      : (y = t[32]),
    y
  );
}
function Ot(e) {
  let t = (0, Mt.c)(34),
    {
      hostId: n,
      resolvedProject: r,
      workspaceRoot: i,
      onCreateEnvironment: a,
      onSelectEnvironment: o,
    } = e,
    s = fe(),
    u;
  t[0] !== n || t[1] !== i
    ? ((u = { hostId: n, workspaceRoot: i }), (t[0] = n), (t[1] = i), (t[2] = u))
    : (u = t[2]);
  let { data: d, isLoading: p, isFetching: m, error: h, refetch: g } = le(c, u),
    v = d === void 0 ? [] : d,
    [x, S] = (0, Pt.useState)(!1),
    C = `local-environment-inherited-${(0, Pt.useId)()}`,
    ee = r == null ? void 0 : Le(r.projectId),
    ne = !p && !m && h == null,
    re = ne ? At(v, i) : null,
    ie = re?.projectEnvironments ?? [],
    ae = re?.inheritedEnvironments ?? [],
    oe = _e(ie),
    w = r?.isCodexWorktree ? ue : _,
    T,
    se,
    E,
    ce,
    D,
    O;
  t[3] !== h || t[4] !== m || t[5] !== p || t[6] !== s || t[7] !== r || t[8] !== i
    ? ((O = ht(i, r)),
      (E = r?.gitRepos[0]?.ownerRepo?.owner ?? null),
      (ce = p || m),
      (se = h != null),
      (T = s.formatMessage(
        {
          id: `settings.localEnvironments.workspaceSelect.addLabel`,
          defaultMessage: `Add environment to {projectName}`,
          description: `Aria label for add environment button`,
        },
        { projectName: O },
      )),
      (D = s.formatMessage(
        {
          id: `settings.localEnvironments.workspaceSelect.openProject`,
          defaultMessage: `Open {projectName}`,
          description: `Aria label for opening a project's default environment`,
        },
        { projectName: O },
      )),
      (t[3] = h),
      (t[4] = m),
      (t[5] = p),
      (t[6] = s),
      (t[7] = r),
      (t[8] = i),
      (t[9] = T),
      (t[10] = se),
      (t[11] = E),
      (t[12] = ce),
      (t[13] = D),
      (t[14] = O))
    : ((T = t[9]), (se = t[10]), (E = t[11]), (ce = t[12]), (D = t[13]), (O = t[14]));
  let de = D,
    pe = ne ? y(v, i) : null,
    k;
  t[15] === s
    ? (k = t[16])
    : ((k = s.formatMessage({
        id: `settings.localEnvironments.workspaceSelect.loadingLabel`,
        defaultMessage: `Loading environment`,
        description: `Label for environment row while loading`,
      })),
      (t[15] = s),
      (t[16] = k));
  let A = k,
    j;
  t[17] === s
    ? (j = t[18])
    : ((j = s.formatMessage({
        id: `settings.localEnvironments.workspaceSelect.errorLabel`,
        defaultMessage: `Environment needs attention`,
        description: `Label for environment row when environment data fails`,
      })),
      (t[17] = s),
      (t[18] = j));
  let he = j,
    M;
  t[19] !== s || t[20] !== x
    ? ((M = x
        ? s.formatMessage({
            id: `settings.localEnvironments.workspaceSelect.inherited.hide`,
            defaultMessage: `Hide inherited environments`,
            description: `Aria label for hiding inherited local environments`,
          })
        : s.formatMessage({
            id: `settings.localEnvironments.workspaceSelect.inherited.show`,
            defaultMessage: `Show inherited environments`,
            description: `Aria label for showing inherited local environments`,
          })),
      (t[19] = s),
      (t[20] = x),
      (t[21] = M))
    : (M = t[21]);
  let N = M,
    P;
  t[22] === w
    ? (P = t[23])
    : ((P = (0, Q.jsx)(w, { className: `icon-sm text-secondary` })), (t[22] = w), (t[23] = P));
  let ge = P,
    ve;
  t[24] === O
    ? (ve = t[25])
    : ((ve = (0, Q.jsx)(`span`, { className: `block truncate`, children: O })),
      (t[24] = O),
      (t[25] = ve));
  let ye = ve,
    be;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, Q.jsx)(De, { "aria-hidden": !1, asset: te })), (t[26] = be))
    : (be = t[26]);
  let I = (0, Q.jsx)(z, {
      "aria-label": T,
      color: `secondary`,
      disabled: pe == null,
      size: `toolbar`,
      uniform: !0,
      onClick: () => {
        pe != null && a(i, pe, ee);
      },
      children: be,
    }),
    xe = F,
    Se =
      oe == null
        ? (0, Q.jsx)(V, { control: I, description: E, icon: ge, label: ye })
        : (0, Q.jsx)(b, {
            actions: I,
            ariaLabel: de,
            description: E,
            icon: ge,
            label: ye,
            onClick: () => {
              o(i, oe, ee);
            },
          }),
    L = ce
      ? (0, Q.jsx)(V, {
          control: null,
          icon: (0, Q.jsx)(Ae, { className: `icon-xs` }),
          label: A,
          size: `compact`,
        })
      : se
        ? (0, Q.jsx)(V, {
            control: (0, Q.jsx)(z, {
              color: `secondary`,
              size: `toolbar`,
              onClick: () => {
                g();
              },
              children: (0, Q.jsx)(f, { ...nt.retry }),
            }),
            label: (0, Q.jsx)(`span`, { className: `text-danger`, role: `alert`, children: he }),
            size: `compact`,
          })
        : (0, Q.jsxs)(Q.Fragment, {
            children: [
              ie.map((e) =>
                (0, Q.jsx)(
                  kt,
                  {
                    environment: e,
                    errorLabel: he,
                    onSelectEnvironment: () => {
                      o(i, e.configPath, ee);
                    },
                  },
                  e.configPath,
                ),
              ),
              ae.length > 0
                ? (0, Q.jsx)(mt, {
                    content: ae.map((e) =>
                      (0, Q.jsx)(
                        kt,
                        {
                          environment: e,
                          errorLabel: he,
                          sourceFolderName: l(jt(e.configPath)),
                          onSelectEnvironment: () => {
                            o(i, e.configPath, ee);
                          },
                        },
                        e.configPath,
                      ),
                    ),
                    contentId: C,
                    expanded: x,
                    children: (0, Q.jsx)(V, {
                      control: (0, Q.jsx)(z, {
                        "aria-controls": C,
                        "aria-expanded": x,
                        "aria-label": N,
                        color: `ghost`,
                        size: `icon`,
                        uniform: !0,
                        onClick: () => {
                          S(!x);
                        },
                        children: (0, Q.jsx)(H, {
                          className: me(
                            `icon-2xs text-tertiary transition-transform`,
                            x ? `rotate-0` : `-rotate-90`,
                          ),
                        }),
                      }),
                      label: (0, Q.jsx)(f, {
                        id: `settings.localEnvironments.workspaceSelect.inherited`,
                        defaultMessage: `Inherited environments ({count})`,
                        description: `Accordion label for local environments inherited from parent folders`,
                        values: { count: ae.length },
                      }),
                      size: `compact`,
                    }),
                  })
                : null,
            ],
          }),
    Ce;
  t[27] !== xe || t[28] !== Se || t[29] !== L
    ? ((Ce = (0, Q.jsxs)(xe, { children: [Se, L] })),
      (t[27] = xe),
      (t[28] = Se),
      (t[29] = L),
      (t[30] = Ce))
    : (Ce = t[30]);
  let R;
  return (
    t[31] !== Ce || t[32] !== O
      ? ((R = (0, Q.jsx)(`div`, { "aria-label": O, role: `listitem`, children: Ce })),
        (t[31] = Ce),
        (t[32] = O),
        (t[33] = R))
      : (R = t[33]),
    R
  );
}
function kt(e) {
  let t = (0, Mt.c)(23),
    { environment: n, errorLabel: r, sourceFolderName: i, onSelectEnvironment: a } = e,
    o = fe(),
    s,
    c,
    u,
    d,
    p;
  if (
    t[0] !== n.configPath ||
    t[1] !== n.environment ||
    t[2] !== n.type ||
    t[3] !== o ||
    t[4] !== i
  ) {
    s = l(n.configPath);
    let e = n.type === `success` && n.environment?.name != null && n.environment.name.length > 0;
    ((c = e ? n.environment.name : s),
      (d = n.type === `error`),
      (u = d || (e && s !== c) ? s : null));
    let r = d ? s : c;
    ((p =
      i == null
        ? o.formatMessage(
            {
              id: `settings.localEnvironments.workspaceSelect.viewAction`,
              defaultMessage: `View {environmentName}`,
              description: `Action label to view a local environment`,
            },
            { environmentName: r },
          )
        : o.formatMessage(
            {
              id: `settings.localEnvironments.workspaceSelect.viewInheritedAction`,
              defaultMessage: `View {environmentName} from {sourceFolderName}`,
              description: `Action label to view a local environment inherited from a parent folder`,
            },
            { environmentName: r, sourceFolderName: i },
          )),
      (t[0] = n.configPath),
      (t[1] = n.environment),
      (t[2] = n.type),
      (t[3] = o),
      (t[4] = i),
      (t[5] = s),
      (t[6] = c),
      (t[7] = u),
      (t[8] = d),
      (t[9] = p));
  } else ((s = t[5]), (c = t[6]), (u = t[7]), (d = t[8]), (p = t[9]));
  let m = p,
    h;
  t[10] !== s || t[11] !== u || t[12] !== i
    ? ((h =
        i == null
          ? u
          : (0, Q.jsx)(f, {
              id: `settings.localEnvironments.workspaceSelect.inheritedSource`,
              defaultMessage: `From {sourceFolderName} · {fileName}`,
              description: `Description identifying the source folder and file for an inherited local environment`,
              values: { fileName: s, sourceFolderName: i },
            })),
      (t[10] = s),
      (t[11] = u),
      (t[12] = i),
      (t[13] = h))
    : (h = t[13]);
  let g = d ? `text-danger` : void 0,
    _ = d ? r : c,
    v;
  t[14] !== g || t[15] !== _
    ? ((v = (0, Q.jsx)(`span`, { className: g, children: _ })),
      (t[14] = g),
      (t[15] = _),
      (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsx)(H, { className: `icon-2xs -rotate-90 text-tertiary` })), (t[17] = y))
    : (y = t[17]);
  let x;
  return (
    t[18] !== a || t[19] !== h || t[20] !== v || t[21] !== m
      ? ((x = (0, Q.jsx)(b, { ariaLabel: m, description: h, label: v, onClick: a, trailing: y })),
        (t[18] = a),
        (t[19] = h),
        (t[20] = v),
        (t[21] = m),
        (t[22] = x))
      : (x = t[22]),
    x
  );
}
function At(e, t) {
  let n = [],
    r = [];
  for (let i of e) P(jt(i.configPath), t) ? n.push(i) : r.push(i);
  return { projectEnvironments: n, inheritedEnvironments: r };
}
function jt(e) {
  let t = ze(e),
    n = Nt.default.posix.dirname(t),
    r = Nt.default.posix.dirname(n);
  return Nt.default.posix.basename(n) !== `environments` ||
    Nt.default.posix.basename(r) !== `.codex`
    ? t
    : Nt.default.posix.dirname(r);
}
var Mt,
  Nt,
  Pt,
  Q,
  Ft = e(() => {
    ((Mt = B()),
      v(),
      Ze(),
      O(),
      (Nt = t(xe(), 1)),
      u(),
      (Pt = t(o(), 1)),
      M(),
      a(),
      Ee(),
      E(),
      Ye(),
      ee(),
      A(),
      T(),
      rt(),
      q(),
      j(),
      Be(),
      I(),
      pt(),
      S(),
      ie(),
      x(),
      Tt(),
      (Q = Oe()));
  });
function It(e) {
  let t = (0, Vt.c)(83),
    { locationTabs: r, settingsHostId: i } = e,
    a = n(we),
    o = fe(),
    [s] = Se(),
    l = oe(),
    u = re(),
    d = Ve(Je) != null,
    p = d ? Ke(s, l.state) : null,
    _ = p?.hostId ?? i,
    { error: v, isFetching: b, isLoading: x, refetch: S } = le(Fe, be.LOCAL_PROJECTS),
    { error: C, isFetching: ee, isLoading: te, refetch: ne } = le(Fe, be.REMOTE_PROJECTS),
    ie = je(g(Ce), _),
    w = ie.flatMap(zt),
    T = _ === `local` ? x : te,
    se = _ === `local` ? b : ee,
    E = _ === `local` ? v : C,
    [ce, D] = (0, Ht.useState)(p?.workspaceRoot ?? s.get(`workspaceRoot`)),
    ue = s.get(`projectId`),
    [O, de] = (0, Ht.useState)(p?.projectId ?? (ue == null ? null : Le(ue))),
    [pe, k] = (0, Ht.useState)(p?.configPath ?? s.get(`configPath`)),
    [A, j] = (0, Ht.useState)(p != null || s.get(`mode`) === `edit`),
    [me, he] = (0, Ht.useState)(0),
    M = ce ?? null,
    N = M != null && (p != null || w.includes(M) || pe != null) ? M : null,
    P =
      N == null ? null : (ie.find((e) => e.projectId === O || (O == null && e.path === N)) ?? null),
    ge = N == null,
    ve = () => {
      if (_ !== `local`) {
        Re({ hostId: _ });
        return;
      }
      Te(a);
    },
    ye = () => {
      _ === `local` ? S() : ne();
    },
    I;
  t[0] !== j || t[1] !== k
    ? ((I = () => {
        (de(null), D(null), k(null), j(!1));
      }),
      (t[0] = j),
      (t[1] = k),
      (t[2] = I))
    : (I = t[2]);
  let xe = I,
    R = () => {
      if (p != null) {
        (u(p.returnTo, { replace: !0 }),
          p.reopenStableWorktreeId != null &&
            $e(a, { id: p.reopenStableWorktreeId, launchMode: `create-stable-worktree` }));
        return;
      }
      j(!1);
    },
    Ee;
  t[3] !== j || t[4] !== k
    ? ((Ee = (e, t, n) => {
        (de(n ?? null), D(e), k(t), j(!1));
      }),
      (t[3] = j),
      (t[4] = k),
      (t[5] = Ee))
    : (Ee = t[5]);
  let Oe = Ee,
    ke;
  t[6] !== j || t[7] !== k
    ? ((ke = (e, t, n) => {
        (de(n ?? null), D(e), k(t), j(!0));
      }),
      (t[6] = j),
      (t[7] = k),
      (t[8] = ke))
    : (ke = t[8]);
  let Ae = ke,
    {
      data: Me,
      isLoading: Ne,
      isFetching: Pe,
      error: B,
      refetch: Ie,
    } = le(c, { hostId: _, workspaceRoot: N }),
    ze = Me != null && !Ne && !Pe && B == null,
    Be;
  t[9] !== ze || t[10] !== Me
    ? ((Be = ze ? _e(Me) : null), (t[9] = ze), (t[10] = Me), (t[11] = Be))
    : (Be = t[11]);
  let V = Be,
    He = p != null && p.configPath == null && ze && N != null ? y(Me, N) : null,
    Ue = p?.configPath ?? He ?? (p == null ? V : null);
  A && pe == null && Ue != null && k(Ue);
  let H = pe ?? Ue,
    Ge = N != null && H != null,
    {
      data: U,
      isLoading: Ye,
      error: Ze,
      refetch: W,
    } = We(`local-environment-config`, {
      params: { configPath: H ?? ``, hostId: _ },
      queryConfig: { enabled: Ge },
    }),
    G = U?.environment?.type === `success` ? U.environment.environment : null,
    Qe = U?.environment?.type === `error`,
    et = Ze != null,
    rt = B != null || Ze != null,
    it = () => {
      if (H == null) {
        Ie();
        return;
      }
      Promise.all([Ie(), W()]);
    },
    at;
  t[12] !== W || t[13] !== Ie
    ? ((at = async () => {
        Ie();
        let e = await W();
        e.data != null && e.error == null && he(Rt);
      }),
      (t[12] = W),
      (t[13] = Ie),
      (t[14] = at))
    : (at = t[14]);
  let ot = at,
    st;
  t[15] !== W || t[16] !== j || t[17] !== k
    ? ((st = async () => {
        let e = await W();
        e.isSuccess && (k(e.data.configPath), j(!0));
      }),
      (t[15] = W),
      (t[16] = j),
      (t[17] = k),
      (t[18] = st))
    : (st = t[18]);
  let ct = st,
    lt = Ne || (Pe && H == null) || (Ge && Ye);
  if (d && p == null) {
    let e;
    return (
      t[19] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(Xe, { to: `/settings/local-environments`, replace: !0 })), (t[19] = e))
        : (e = t[19]),
      e
    );
  }
  if (ge) {
    let e;
    return (
      t[20] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(f, {
            ...wt.workspaceSelectDescription,
            values: {
              learnMore: (0, $.jsx)(
                `a`,
                {
                  className: `inline-flex items-center gap-1 text-base text-info`,
                  href: qe,
                  target: `_blank`,
                  rel: `noreferrer`,
                  onClick: Lt,
                  children: (0, $.jsx)(f, { ...wt.workspaceSelectLearnMore }),
                },
                `learn-more`,
              ),
            },
          })),
          (t[20] = e))
        : (e = t[20]),
      (0, $.jsx)(Bt, {
        stickyControls: r,
        subtitle: e,
        children: (0, $.jsx)(Et, {
          groups: ie,
          hasError: E != null,
          hostId: _,
          isLoading: T || (E != null && se),
          workspaceRoots: w,
          onAddWorkspace: ve,
          onCreateEnvironment: Ae,
          onRetry: ye,
          onSelectEnvironment: Oe,
        }),
      })
    );
  }
  let ut = ht(N, P),
    dt;
  t[21] !== p || t[22] !== xe || t[23] !== R || t[24] !== A || t[25] !== ut
    ? ((dt =
        p == null
          ? (0, $.jsx)(tt, {
              ancestors: [
                {
                  id: `environments`,
                  label: (0, $.jsx)(f, {
                    id: `settings.localEnvironments.breadcrumb.root`,
                    defaultMessage: `Environments`,
                    description: `Breadcrumb label for the local environments page`,
                  }),
                  onClick: xe,
                },
                ...(A ? [{ id: `workspace`, label: ut, onClick: R }] : []),
              ],
              current: A
                ? (0, $.jsx)(f, {
                    id: `settings.localEnvironments.breadcrumb.edit`,
                    defaultMessage: `edit`,
                    description: `Breadcrumb label for local environment edit mode`,
                  })
                : ut,
            })
          : (0, $.jsxs)(z, {
              color: `ghost`,
              size: `toolbar`,
              onClick: R,
              children: [
                (0, $.jsx)(De, { "aria-hidden": !1, asset: m }),
                (0, $.jsx)(f, {
                  id: `settings.localEnvironments.breadcrumb.back`,
                  defaultMessage: `Back`,
                  description: `Button label to return from local environment creation`,
                }),
              ],
            })),
      (t[21] = p),
      (t[22] = xe),
      (t[23] = R),
      (t[24] = A),
      (t[25] = ut),
      (t[26] = dt))
    : (dt = t[26]);
  let K = dt;
  if (lt) {
    let e;
    t[27] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(ae, {
          children: (0, $.jsx)(f, {
            id: `settings.localEnvironments.loading.body`,
            defaultMessage: `Fetching your project configuration…`,
            description: `Loading state body for local environments settings`,
          }),
        })),
        (t[27] = e))
      : (e = t[27]);
    let n;
    return (
      t[28] === K
        ? (n = t[29])
        : ((n = (0, $.jsx)(Bt, { backSlot: K, children: e })), (t[28] = K), (t[29] = n)),
      n
    );
  }
  if (!U || N == null) {
    let e;
    t[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(L.Header, {
          title: (0, $.jsx)(f, {
            id: `settings.localEnvironments.unavailable.title`,
            defaultMessage: `Local environments unavailable`,
            description: `Title for missing local environment config state`,
          }),
        })),
        (t[30] = e))
      : (e = t[30]);
    let n;
    t[31] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(f, {
          id: `settings.localEnvironments.unavailable.body`,
          defaultMessage: `We could not load local environment settings for this project`,
          description: `Body text for missing local environment config state`,
        })),
        (t[31] = n))
      : (n = t[31]);
    let r;
    t[32] !== it || t[33] !== rt
      ? ((r = rt
          ? (0, $.jsx)(z, {
              color: `secondary`,
              size: `toolbar`,
              type: `button`,
              onClick: it,
              children: (0, $.jsx)(f, { ...nt.retry }),
            })
          : null),
        (t[32] = it),
        (t[33] = rt),
        (t[34] = r))
      : (r = t[34]);
    let i;
    t[35] === r
      ? (i = t[36])
      : ((i = (0, $.jsxs)(L, {
          children: [
            e,
            (0, $.jsx)(L.Content, {
              children: (0, $.jsx)(F, {
                children: (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between gap-3 p-3 text-sm text-secondary`,
                  children: [n, r],
                }),
              }),
            }),
          ],
        })),
        (t[35] = r),
        (t[36] = i));
    let a;
    return (
      t[37] !== K || t[38] !== i
        ? ((a = (0, $.jsx)(Bt, { backSlot: K, children: i })),
          (t[37] = K),
          (t[38] = i),
          (t[39] = a))
        : (a = t[39]),
      a
    );
  }
  let pt;
  t[40] !== U.configPath || t[41] !== U.exists || t[42] !== ct || t[43] !== j || t[44] !== k
    ? ((pt = () => {
        if (U.exists) {
          ct();
          return;
        }
        (k(U.configPath), j(!0));
      }),
      (t[40] = U.configPath),
      (t[41] = U.exists),
      (t[42] = ct),
      (t[43] = j),
      (t[44] = k),
      (t[45] = pt))
    : (pt = t[45]);
  let mt = pt;
  if (A) {
    let e;
    t[46] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(f, {
          id: `settings.localEnvironments.edit.title`,
          defaultMessage: `Edit local environment`,
          description: `Title for the local environment editor`,
        })),
        (t[46] = e))
      : (e = t[46]);
    let n = `${_}:${U.configPath}:${me}`,
      r;
    t[47] !== U.configPath ||
    t[48] !== U.revision ||
    t[49] !== ot ||
    t[50] !== R ||
    t[51] !== it ||
    t[52] !== Qe ||
    t[53] !== et ||
    t[54] !== G ||
    t[55] !== N ||
    t[56] !== _ ||
    t[57] !== P ||
    t[58] !== n
      ? ((r = (0, $.jsx)(
          ft,
          {
            hostId: _,
            workspaceRoot: N,
            resolvedProject: P,
            configPath: U.configPath,
            expectedRevision: U.revision,
            initialEnvironment: G,
            hasParseError: Qe,
            hasReadError: et,
            onDiscardConflict: ot,
            onRetryRead: it,
            onSaved: R,
          },
          n,
        )),
        (t[47] = U.configPath),
        (t[48] = U.revision),
        (t[49] = ot),
        (t[50] = R),
        (t[51] = it),
        (t[52] = Qe),
        (t[53] = et),
        (t[54] = G),
        (t[55] = N),
        (t[56] = _),
        (t[57] = P),
        (t[58] = n),
        (t[59] = r))
      : (r = t[59]);
    let i;
    return (
      t[60] !== K || t[61] !== r
        ? ((i = (0, $.jsx)(Bt, { backSlot: K, title: e, children: r })),
          (t[60] = K),
          (t[61] = r),
          (t[62] = i))
        : (i = t[62]),
      i
    );
  }
  let q;
  t[63] !== U.exists || t[64] !== o
    ? ((q = U.exists
        ? o.formatMessage({
            id: `settings.localEnvironments.environment.editLabel`,
            defaultMessage: `Edit local environment`,
            description: `Accessible label for editing a local environment`,
          })
        : void 0),
      (t[63] = U.exists),
      (t[64] = o),
      (t[65] = q))
    : (q = t[65]);
  let gt = U.exists ? `secondary` : `primary`,
    J;
  t[66] === U.exists
    ? (J = t[67])
    : ((J = U.exists
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(De, { "aria-hidden": !1, asset: h }),
              (0, $.jsx)(f, { ...wt.editEnvironment }),
            ],
          })
        : (0, $.jsx)(f, { ...wt.createEnvironment })),
      (t[66] = U.exists),
      (t[67] = J));
  let Y;
  t[68] !== mt || t[69] !== gt || t[70] !== J || t[71] !== q
    ? ((Y = (0, $.jsx)(z, {
        "aria-label": q,
        color: gt,
        size: `toolbar`,
        onClick: mt,
        children: J,
      })),
      (t[68] = mt),
      (t[69] = gt),
      (t[70] = J),
      (t[71] = q),
      (t[72] = Y))
    : (Y = t[72]);
  let X = G?.name,
    _t;
  t[73] !== U.exists || t[74] !== Qe || t[75] !== et || t[76] !== G
    ? ((_t = (0, $.jsx)(vt, {
        configExists: U.exists,
        initialEnvironment: G,
        hasParseError: Qe,
        hasReadError: et,
      })),
      (t[73] = U.exists),
      (t[74] = Qe),
      (t[75] = et),
      (t[76] = G),
      (t[77] = _t))
    : (_t = t[77]);
  let yt;
  return (
    t[78] !== K || t[79] !== Y || t[80] !== X || t[81] !== _t
      ? ((yt = (0, $.jsx)(Bt, { action: Y, backSlot: K, title: X, children: _t })),
        (t[78] = K),
        (t[79] = Y),
        (t[80] = X),
        (t[81] = _t),
        (t[82] = yt))
      : (yt = t[82]),
    yt
  );
}
function Lt(e) {
  D({ event: e, href: qe, initiator: `open_in_browser_bridge` });
}
function Rt(e) {
  return e + 1;
}
function zt(e) {
  return e.projectKind === `local` ? Ge(e) : [e.path];
}
function Bt(e) {
  let t = (0, Vt.c)(9),
    { action: n, backSlot: r, stickyControls: i, subtitle: a, title: o, children: s } = e,
    c;
  t[0] === o
    ? (c = t[1])
    : ((c = o === void 0 ? (0, $.jsx)(d, { slug: `local-environments` }) : o),
      (t[0] = o),
      (t[1] = c));
  let l;
  return (
    t[2] !== n || t[3] !== r || t[4] !== s || t[5] !== i || t[6] !== a || t[7] !== c
      ? ((l = (0, $.jsx)(ne, {
          action: n,
          title: c,
          subtitle: a,
          backSlot: r,
          stickyControls: i,
          children: s,
        })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = s),
        (t[5] = i),
        (t[6] = a),
        (t[7] = c),
        (t[8] = l))
      : (l = t[8]),
    l
  );
}
var Vt,
  Ht,
  $,
  Ut = e(() => {
    ((Vt = B()),
      pe(),
      ge(),
      O(),
      u(),
      (Ht = t(o(), 1)),
      M(),
      C(),
      r(),
      a(),
      se(),
      Ee(),
      et(),
      Ue(),
      T(),
      lt(),
      rt(),
      q(),
      ke(),
      N(),
      Ie(),
      ye(),
      j(),
      ce(),
      Be(),
      ve(),
      S(),
      w(),
      He(),
      ie(),
      R(),
      Qe(),
      he(),
      Ct(),
      Ft(),
      Tt(),
      ($ = Oe()));
  });
function Wt() {
  let e = (0, Gt.c)(4),
    t = oe(),
    { selectedHostId: n } = s(),
    r = `${n}:${t.key}`,
    i;
  return (
    e[1] !== n || e[2] !== r
      ? ((i = (0, Kt.jsx)(It, { settingsHostId: n }, r)), (e[1] = n), (e[2] = r), (e[3] = i))
      : (i = e[3]),
    i
  );
}
var Gt, Kt;
e(() => {
  ((Gt = B()), C(), k(), w(), Ut(), (Kt = Oe()));
})();
export { Wt as LocalEnvironmentsSettings };
//# sourceMappingURL=local-environments-settings-page-2caf15c22d59.js.map
