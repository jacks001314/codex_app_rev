import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as n,
  $C as r,
  $St as i,
  $st as a,
  DB as o,
  EO as s,
  Ez as c,
  FBt as l,
  Fb as u,
  HSt as d,
  Hft as f,
  LNt as p,
  MNt as m,
  NNt as h,
  NSt as g,
  OB as _,
  Oz as v,
  PBt as y,
  Pb as ee,
  Ppt as b,
  Qst as x,
  SSt as S,
  TO as C,
  UQ as w,
  USt as te,
  VSt as ne,
  WQ as re,
  XOt as T,
  XSt as ie,
  Y3 as E,
  YOt as ae,
  Z3 as D,
  ZSt as O,
  c3 as oe,
  e6 as se,
  ew as k,
  iCt as A,
  iSt as ce,
  iw as le,
  jgt as ue,
  jz as de,
  kgt as fe,
  nB as pe,
  nCt as me,
  nQ as he,
  okt as ge,
  rB as j,
  s3 as _e,
  sct as M,
  sw as N,
  tQ as P,
  tkt as F,
  uw as I,
  yft as ve,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Cen as L,
  Cjr as ye,
  Den as be,
  Dj as xe,
  Dyn as Se,
  EVt as R,
  Ej as Ce,
  Fxr as we,
  IVt as z,
  Ixr as Te,
  Jyn as Ee,
  K4t as De,
  KBr as Oe,
  LF as B,
  Q4t as ke,
  QF as Ae,
  R4t as je,
  RF as Me,
  SRn as Ne,
  Ten as Pe,
  V4t as Fe,
  W4t as Ie,
  XF as Le,
  Xft as Re,
  Yyn as ze,
  Z4t as V,
  ZF as Be,
  _p as Ve,
  bRn as He,
  cA as Ue,
  cat as We,
  eI as Ge,
  ept as Ke,
  ewt as qe,
  gp as Je,
  lft as Ye,
  mQ as Xe,
  q4t as Ze,
  sA as H,
  sat as Qe,
  sft as $e,
  twt as et,
  uft as tt,
  wyn as nt,
  xjr as rt,
} from "./app-initial-ad16eaadf81f.js";
import { n as it, t as at } from "./local-environment-workflow-messages-83f970f5c58f.js";
import {
  _ as ot,
  a as st,
  g as ct,
  i as lt,
  l as U,
  n as ut,
  o as dt,
  r as W,
  t as ft,
  u as G,
} from "./local-environment-editor-c900e0b21163.js";
import { n as pt, t as mt } from "./toolbar-breadcrumb-d8f79235f5b5.js";
import { n as ht, t as gt } from "./settings-unsaved-changes-dialog-ffd581d4a9b5.js";
import { n as _t, t as K } from "./settings-row-disclosure-4167ebc9233a.js";
import { n as vt, t as yt } from "./settings-tabs-ee9876da4c9d.js";
function bt(e, t) {
  return t?.label ?? Xe(e) ?? e;
}
function xt() {
  return (xt = e(() => {}))();
}
function St() {
  let e = (0, Tt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Et.jsx)(`div`, {
          className: `select-none`,
          children: (0, Et.jsx)(F, {
            id: `settings.localEnvironments.workspaceSelect.descriptionWithLink`,
            defaultMessage: `Local environments tell ChatGPT how to set up worktrees for a project. <learnMore>Learn more</learnMore>`,
            description: `Explanatory text for local environments in Worktrees settings. Local environments configure project worktree setup on the user's machine. The learnMore tag links to the environments guide.`,
            values: { learnMore: Ct },
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ct(e) {
  return (0, Et.jsx)(`a`, {
    className: `inline-flex items-center gap-1 text-base text-info`,
    href: R,
    target: `_blank`,
    rel: `noreferrer`,
    onClick: wt,
    children: e,
  });
}
function wt(e) {
  Ne({ event: e, href: R, initiator: `open_in_browser_bridge` });
}
var Tt, Et;
function Dt() {
  return (Dt = e(() => {
    ((Tt = y()), T(), z(), He(), (Et = p()));
  }))();
}
function q(e) {
  let t = (0, Ot.c)(29),
    { actions: n, lifecycle: i, scriptType: a } = e,
    o = ge(),
    [s, c] = (0, kt.useState)(`default`),
    l = i?.script ?? ``,
    u = s === "default" ? null : (i?.[s]?.script ?? ``),
    d = u === `` && l.length > 0,
    f = u == null || d ? l : u,
    p;
  t[0] !== l.length || t[1] !== i
    ? ((p = l.length > 0 || b.some((e) => !!i?.[e]?.script)), (t[0] = l.length), (t[1] = i), (t[2] = p))
    : (p = t[2]);
  let m = p,
    h = a === `setup`,
    g,
    _;
  t[3] === h
    ? ((g = t[4]), (_ = t[5]))
    : ((g = h ? (0, J.jsx)(F, { ...G.setupScript }) : (0, J.jsx)(F, { ...G.cleanupScript })),
      (_ = h
        ? (0, J.jsx)(F, {
            id: `settings.localEnvironments.environment.setup.description`,
            defaultMessage: `This script runs on worktree creation`,
            description: `Description for environment setup script summary`,
          })
        : (0, J.jsx)(F, { ...G.cleanupDescription })),
      (t[3] = h),
      (t[4] = g),
      (t[5] = _));
  let v;
  t[6] !== n || t[7] !== g || t[8] !== _
    ? ((v = (0, J.jsx)(H.Header, { title: g, subtitle: _, actions: n })),
      (t[6] = n),
      (t[7] = g),
      (t[8] = _),
      (t[9] = v))
    : (v = t[9]);
  let y;
  t[10] !== m || t[11] !== o || t[12] !== s || t[13] !== h
    ? ((y = m
        ? (0, J.jsx)(st, {
            leadingOption: `default`,
            selectedId: s,
            onSelect: c,
            ariaLabel: h
              ? o.formatMessage(G.setupPlatformSelector)
              : o.formatMessage(G.cleanupPlatformSelector),
          })
        : null),
      (t[10] = m),
      (t[11] = o),
      (t[12] = s),
      (t[13] = h),
      (t[14] = y))
    : (y = t[14]);
  let x;
  t[15] !== s || t[16] !== d
    ? ((x =
        s !== "default" && d
          ? (0, J.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: (0, J.jsx)(F, {
                id: `settings.localEnvironments.environment.platformUsesDefault`,
                defaultMessage: `No platform override. Using the default script`,
                description: `Message shown when a platform uses the default local environment script`,
              }),
            })
          : null),
      (t[15] = s),
      (t[16] = d),
      (t[17] = x))
    : (x = t[17]);
  let S;
  t[18] !== m || t[19] !== f || t[20] !== s
    ? ((S =
        f.length > 0
          ? (0, J.jsx)(ee, {
              language: s === `win32` ? `text` : `bash`,
              content: f,
              shouldWrapCode: !0,
              codeContainerClassName: `max-h-56`,
            })
          : (0, J.jsx)(r, {
              variant: `secondary`,
              children: (0, J.jsx)(N, {
                label:
                  s === "default" || !m
                    ? (0, J.jsx)(F, {
                        id: `settings.localEnvironments.environment.script.empty`,
                        defaultMessage: `No script configured`,
                        description: `Empty state for a local environment script`,
                      })
                    : (0, J.jsx)(F, {
                        id: `settings.localEnvironments.environment.platformScript.empty`,
                        defaultMessage: `No script configured for this platform`,
                        description: `Empty state for a local environment platform script`,
                      }),
                control: null,
                size: `compact`,
              }),
            })),
      (t[18] = m),
      (t[19] = f),
      (t[20] = s),
      (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] !== y || t[23] !== x || t[24] !== S
    ? ((C = (0, J.jsxs)(H.Content, { className: `gap-2`, children: [y, x, S] })),
      (t[22] = y),
      (t[23] = x),
      (t[24] = S),
      (t[25] = C))
    : (C = t[25]);
  let w;
  return (
    t[26] !== v || t[27] !== C
      ? ((w = (0, J.jsxs)(H, { className: `gap-2`, children: [v, C] })),
        (t[26] = v),
        (t[27] = C),
        (t[28] = w))
      : (w = t[28]),
    w
  );
}
var Ot, kt, J;
function At() {
  return (At = e(() => {
    ((Ot = y()), M(), (kt = l()), T(), u(), U(), dt(), Ue(), I(), k(), (J = p()));
  }))();
}
function jt(e) {
  let t = (0, Pt.c)(12),
    { configExists: n, initialEnvironment: i, hasParseError: a, hasReadError: o } = e,
    s = i != null,
    c = i?.actions,
    l;
  t[0] !== n || t[1] !== a || t[2] !== s || t[3] !== o
    ? ((l =
        !s || a || o
          ? (0, X.jsx)(H, {
              className: `gap-2`,
              children: (0, X.jsxs)(H.Content, {
                children: [
                  n
                    ? null
                    : (0, X.jsx)(r, {
                        children: (0, X.jsx)(Je, {
                          layout: `settings-row`,
                          children: (0, X.jsx)(F, {
                            id: `settings.localEnvironments.environment.empty`,
                            defaultMessage: `No local environment is configured for this project yet`,
                            description: `Empty state when no local environment is configured`,
                          }),
                        }),
                      }),
                  a
                    ? (0, X.jsx)(`div`, {
                        className: `mt-2 text-sm text-danger`,
                        children: (0, X.jsx)(F, { ...it.parseError }),
                      })
                    : null,
                  o
                    ? (0, X.jsx)(`div`, {
                        className: `mt-2 text-sm text-danger`,
                        children: (0, X.jsx)(F, { ...it.readError }),
                      })
                    : null,
                ],
              }),
            })
          : null),
      (t[0] = n),
      (t[1] = a),
      (t[2] = s),
      (t[3] = o),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] !== c || t[6] !== s || t[7] !== i
    ? ((u = s
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(q, { actions: (0, X.jsx)(W, {}), lifecycle: i.setup, scriptType: `setup` }),
              (0, X.jsx)(q, { lifecycle: i.cleanup, scriptType: `cleanup` }),
              (0, X.jsxs)(H, {
                className: `gap-2`,
                children: [
                  (0, X.jsx)(H.Header, {
                    title: (0, X.jsx)(F, {
                      id: `settings.localEnvironments.environment.actionsLabel`,
                      defaultMessage: `Actions`,
                      description: `Label for actions count in local environment summary`,
                    }),
                    subtitle: (0, X.jsx)(F, { ...G.actionsDescription }),
                  }),
                  (0, X.jsx)(H.Content, {
                    children: (0, X.jsx)(r, {
                      children:
                        c != null && c.length > 0
                          ? c.map(Mt)
                          : (0, X.jsx)(Je, {
                              layout: `settings-row`,
                              children: (0, X.jsx)(F, { ...G.actionsEmpty }),
                            }),
                    }),
                  }),
                ],
              }),
            ],
          })
        : null),
      (t[5] = c),
      (t[6] = s),
      (t[7] = i),
      (t[8] = u))
    : (u = t[8]);
  let d;
  return (
    t[9] !== l || t[10] !== u
      ? ((d = (0, X.jsxs)(X.Fragment, { children: [l, u] })), (t[9] = l), (t[10] = u), (t[11] = d))
      : (d = t[11]),
    d
  );
}
function Mt(e, t) {
  return (0, X.jsx)(Nt, { action: e }, `${e.name}-${t}`);
}
function Nt(e) {
  let t = (0, Pt.c)(25),
    { action: n } = e,
    [r, i] = (0, Y.useState)(!1),
    a = (0, Y.useId)(),
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
        ? (0, X.jsx)(N, {
            label: null,
            control: (0, X.jsx)(`code`, {
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
    f;
  t[6] === d
    ? (f = t[7])
    : ((f = (0, X.jsx)(`span`, { className: `text-secondary`, children: (0, X.jsx)(ct, { icon: d }) })),
      (t[6] = d),
      (t[7] = f));
  let p;
  t[8] === s[0]
    ? (p = t[9])
    : ((p = (0, X.jsx)(`code`, { className: `font-mono text-wrap break-all`, dir: `ltr`, children: s[0] })),
      (t[8] = s[0]),
      (t[9] = p));
  let h;
  t[10] !== n.name || t[11] !== a || t[12] !== r || t[13] !== c
    ? ((h = c
        ? (0, X.jsxs)(E, {
            "aria-controls": a,
            "aria-expanded": r,
            color: `ghost`,
            size: `icon`,
            uniform: !0,
            onClick: () => {
              i(!r);
            },
            children: [
              (0, X.jsx)(`span`, {
                className: `sr-only`,
                children: r
                  ? (0, X.jsx)(F, {
                      id: `settings.localEnvironments.environment.action.hideCommand`,
                      defaultMessage: `Hide full command for {actionName}`,
                      description: `Accessible label for collapsing a local environment action command`,
                      values: { actionName: n.name },
                    })
                  : (0, X.jsx)(F, {
                      id: `settings.localEnvironments.environment.action.showCommand`,
                      defaultMessage: `Show full command for {actionName}`,
                      description: `Accessible label for expanding a local environment action command`,
                      values: { actionName: n.name },
                    }),
              }),
              (0, X.jsx)(C, {
                "aria-hidden": !0,
                className: m(
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
  t[15] !== n.name || t[16] !== f || t[17] !== p || t[18] !== h
    ? ((g = (0, X.jsx)(N, { icon: f, label: n.name, description: p, control: h })),
      (t[15] = n.name),
      (t[16] = f),
      (t[17] = p),
      (t[18] = h),
      (t[19] = g))
    : (g = t[19]);
  let _;
  return (
    t[20] !== a || t[21] !== l || t[22] !== u || t[23] !== g
      ? ((_ = (0, X.jsx)(K, { content: l, contentId: a, expanded: u, children: g })),
        (t[20] = a),
        (t[21] = l),
        (t[22] = u),
        (t[23] = g),
        (t[24] = _))
      : (_ = t[24]),
    _
  );
}
var Pt, Y, X;
function Ft() {
  return (Ft = e(() => {
    ((Pt = y()),
      h(),
      (Y = l()),
      T(),
      D(),
      Ve(),
      s(),
      ot(),
      At(),
      U(),
      lt(),
      at(),
      Ue(),
      I(),
      _t(),
      k(),
      (X = p()));
  }))();
}
var It;
function Lt() {
  return (Lt = e(() => {
    (T(),
      (It = ae({
        selectProject: {
          id: `settings.localEnvironments.workspaceSelect.title`,
          defaultMessage: `Select a project`,
          description: `Title for the workspace selection step`,
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
  }))();
}
function Rt(e) {
  let t = (0, Wt.c)(17),
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
    ? ((d = (0, Z.jsx)(F, { ...It.selectProject })), (t[0] = d))
    : (d = t[0]);
  let f;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Z.jsx)(F, {
        id: `settings.localEnvironments.workspace.add`,
        defaultMessage: `Add project`,
        description: `Button label to add a new workspace`,
      })),
      (t[1] = f))
    : (f = t[1]);
  let p;
  t[2] === s
    ? (p = t[3])
    : ((p = (0, Z.jsx)(H.Header, {
        title: d,
        actions: (0, Z.jsx)(E, { color: `secondary`, size: `toolbar`, onClick: s, children: f }),
      })),
      (t[2] = s),
      (t[3] = p));
  let m;
  t[4] !== n ||
  t[5] !== r ||
  t[6] !== i ||
  t[7] !== a ||
  t[8] !== s ||
  t[9] !== c ||
  t[10] !== l ||
  t[11] !== u ||
  t[12] !== o
    ? ((m = (0, Z.jsx)(H.Content, {
        children: (0, Z.jsx)(`div`, {
          className: `flex flex-col gap-2`,
          children: (0, Z.jsx)(zt, {
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
      (t[13] = m))
    : (m = t[13]);
  let h;
  return (
    t[14] !== p || t[15] !== m
      ? ((h = (0, Z.jsxs)(H, { children: [p, m] })), (t[14] = p), (t[15] = m), (t[16] = h))
      : (h = t[16]),
    h
  );
}
function zt(e) {
  let t = (0, Wt.c)(33),
    {
      groups: n,
      hasError: i,
      hostId: a,
      isLoading: o,
      workspaceRoots: s,
      onAddWorkspace: c,
      onCreateEnvironment: l,
      onRetry: u,
      onSelectEnvironment: d,
    } = e,
    f = ge(),
    p,
    m,
    h,
    g,
    _;
  if (
    t[0] !== n ||
    t[1] !== i ||
    t[2] !== a ||
    t[3] !== f ||
    t[4] !== o ||
    t[5] !== c ||
    t[6] !== l ||
    t[7] !== u ||
    t[8] !== d ||
    t[9] !== s
  ) {
    _ = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = new Set();
      if (o) {
        let e;
        (t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(Le, {
              children: (0, Z.jsx)(F, {
                id: `settings.localEnvironments.workspaceSelect.loading`,
                defaultMessage: `Loading projects…`,
                description: `Loading message while workspace options are fetched`,
              }),
            })),
            (t[15] = e))
          : (e = t[15]),
          (_ = e));
        break bb0;
      }
      if (i) {
        let e;
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(F, { ...it.retry })), (t[16] = e))
          : (e = t[16]);
        let n;
        t[17] === u
          ? (n = t[18])
          : ((n = (0, Z.jsx)(E, { color: `secondary`, size: `toolbar`, onClick: u, children: e })),
            (t[17] = u),
            (t[18] = n));
        let i;
        t[19] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((i = (0, Z.jsx)(`span`, {
              className: `text-danger`,
              role: `alert`,
              children: (0, Z.jsx)(F, {
                id: `settings.localEnvironments.workspaceSelect.error`,
                defaultMessage: `Could not load projects`,
                description: `Error shown when local environment projects cannot be loaded`,
              }),
            })),
            (t[19] = i))
          : (i = t[19]);
        let a;
        (t[20] === n
          ? (a = t[21])
          : ((a = (0, Z.jsx)(r, { children: (0, Z.jsx)(N, { control: n, label: i }) })),
            (t[20] = n),
            (t[21] = a)),
          (_ = a));
        break bb0;
      }
      if (s.length === 0) {
        let e;
        t[22] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(F, {
              id: `settings.localEnvironments.workspaceSelect.empty`,
              defaultMessage: `No projects yet. Add one to configure local environments.`,
              description: `Empty state when no workspace roots are available`,
            })),
            (t[22] = e))
          : (e = t[22]);
        let n;
        t[23] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, Z.jsx)(F, {
              id: `settings.localEnvironments.workspace.add`,
              defaultMessage: `Add project`,
              description: `Button label to add a new workspace`,
            })),
            (t[23] = n))
          : (n = t[23]);
        let i;
        (t[24] === c
          ? (i = t[25])
          : ((i = (0, Z.jsx)(r, {
              children: (0, Z.jsxs)(`div`, {
                className: `flex flex-col gap-3 p-3 text-sm text-secondary`,
                children: [
                  e,
                  (0, Z.jsx)(`div`, {
                    children: (0, Z.jsx)(E, { color: `primary`, size: `toolbar`, onClick: c, children: n }),
                  }),
                ],
              }),
            })),
            (t[24] = c),
            (t[25] = i)),
          (_ = i));
        break bb0;
      }
      ((p = `flex flex-col gap-3`),
        (m = `list`),
        t[26] === f
          ? (h = t[27])
          : ((h = f.formatMessage({
              id: `settings.localEnvironments.workspaceSelect.listLabel`,
              defaultMessage: `Available projects`,
              description: `Aria label for the workspace selection list`,
            })),
            (t[26] = f),
            (t[27] = h)),
        (g = s.map((t) => {
          let r = ue(t),
            i = n.find((n) => !e.has(`${n.projectId}:${r}`) && n.path != null && fe(n.path, t)) ?? null;
          return (
            i != null && e.add(`${i.projectId}:${r}`),
            (0, Z.jsx)(
              Bt,
              {
                hostId: a,
                resolvedProject: i,
                workspaceRoot: t,
                onCreateEnvironment: l,
                onSelectEnvironment: d,
              },
              `${i?.projectId ?? `unassigned`}:${t}`,
            )
          );
        })));
    }
    ((t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = f),
      (t[4] = o),
      (t[5] = c),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d),
      (t[9] = s),
      (t[10] = p),
      (t[11] = m),
      (t[12] = h),
      (t[13] = g),
      (t[14] = _));
  } else ((p = t[10]), (m = t[11]), (h = t[12]), (g = t[13]), (_ = t[14]));
  if (_ !== Symbol.for(`react.early_return_sentinel`)) return _;
  let v;
  return (
    t[28] !== p || t[29] !== m || t[30] !== h || t[31] !== g
      ? ((v = (0, Z.jsx)(`div`, { className: p, role: m, "aria-label": h, children: g })),
        (t[28] = p),
        (t[29] = m),
        (t[30] = h),
        (t[31] = g),
        (t[32] = v))
      : (v = t[32]),
    v
  );
}
function Bt(e) {
  let t = (0, Wt.c)(34),
    { hostId: i, resolvedProject: a, workspaceRoot: s, onCreateEnvironment: l, onSelectEnvironment: u } = e,
    d = ge(),
    p;
  t[0] !== i || t[1] !== s
    ? ((p = { hostId: i, workspaceRoot: s }), (t[0] = i), (t[1] = s), (t[2] = p))
    : (p = t[2]);
  let { data: h, isLoading: g, isFetching: _, error: v, refetch: y } = me(Fe, p),
    ee = h === void 0 ? [] : h,
    [b, x] = (0, Kt.useState)(!1),
    S = `local-environment-inherited-${(0, Kt.useId)()}`,
    w = a == null ? void 0 : f(a.projectId),
    te = !g && !_ && v == null,
    ne = te ? Ht(ee, s) : null,
    re = ne?.projectEnvironments ?? [],
    T = ne?.inheritedEnvironments ?? [],
    ie = Ie(re),
    ae = a?.isCodexWorktree ? qe : Ce,
    D,
    O,
    oe,
    se,
    k,
    A;
  t[3] !== v || t[4] !== _ || t[5] !== g || t[6] !== d || t[7] !== a || t[8] !== s
    ? ((A = bt(s, a)),
      (oe = a?.gitRepos[0]?.ownerRepo?.owner ?? null),
      (se = g || _),
      (O = v != null),
      (D = d.formatMessage(
        {
          id: `settings.localEnvironments.workspaceSelect.addLabel`,
          defaultMessage: `Add environment to {projectName}`,
          description: `Aria label for add environment button`,
        },
        { projectName: A },
      )),
      (k = d.formatMessage(
        {
          id: `settings.localEnvironments.workspaceSelect.openProject`,
          defaultMessage: `Open {projectName}`,
          description: `Aria label for opening a project's default environment`,
        },
        { projectName: A },
      )),
      (t[3] = v),
      (t[4] = _),
      (t[5] = g),
      (t[6] = d),
      (t[7] = a),
      (t[8] = s),
      (t[9] = D),
      (t[10] = O),
      (t[11] = oe),
      (t[12] = se),
      (t[13] = k),
      (t[14] = A))
    : ((D = t[9]), (O = t[10]), (oe = t[11]), (se = t[12]), (k = t[13]), (A = t[14]));
  let ce = k,
    ue = te ? De(ee, s) : null,
    de;
  t[15] === d
    ? (de = t[16])
    : ((de = d.formatMessage({
        id: `settings.localEnvironments.workspaceSelect.loadingLabel`,
        defaultMessage: `Loading environment`,
        description: `Label for environment row while loading`,
      })),
      (t[15] = d),
      (t[16] = de));
  let fe = de,
    j;
  t[17] === d
    ? (j = t[18])
    : ((j = d.formatMessage({
        id: `settings.localEnvironments.workspaceSelect.errorLabel`,
        defaultMessage: `Environment needs attention`,
        description: `Label for environment row when environment data fails`,
      })),
      (t[17] = d),
      (t[18] = j));
  let _e = j,
    M;
  t[19] !== d || t[20] !== b
    ? ((M = b
        ? d.formatMessage({
            id: `settings.localEnvironments.workspaceSelect.inherited.hide`,
            defaultMessage: `Hide inherited environments`,
            description: `Aria label for hiding inherited local environments`,
          })
        : d.formatMessage({
            id: `settings.localEnvironments.workspaceSelect.inherited.show`,
            defaultMessage: `Show inherited environments`,
            description: `Aria label for showing inherited local environments`,
          })),
      (t[19] = d),
      (t[20] = b),
      (t[21] = M))
    : (M = t[21]);
  let P = M,
    I;
  t[22] === ae
    ? (I = t[23])
    : ((I = (0, Z.jsx)(ae, { className: `icon-sm text-secondary` })), (t[22] = ae), (t[23] = I));
  let ve = I,
    L;
  t[24] === A
    ? (L = t[25])
    : ((L = (0, Z.jsx)(`span`, { className: `block truncate`, children: A })), (t[24] = A), (t[25] = L));
  let ye = L,
    be;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, Z.jsx)(o, { "aria-hidden": !1, asset: he })), (t[26] = be))
    : (be = t[26]);
  let xe = (0, Z.jsx)(pe, {
      cloneCustomTrigger: !0,
      tooltipContent: D,
      children: (0, Z.jsx)(E, {
        "aria-label": D,
        color: `secondary`,
        disabled: ue == null,
        size: `toolbar`,
        uniform: !0,
        onClick: () => {
          ue != null && l(s, ue, w);
        },
        children: be,
      }),
    }),
    Se = r,
    R =
      ie == null
        ? (0, Z.jsx)(N, { control: xe, description: oe, icon: ve, label: ye })
        : (0, Z.jsx)(le, {
            actions: xe,
            ariaLabel: ce,
            description: oe,
            icon: ve,
            label: ye,
            onClick: () => {
              u(s, ie, w);
            },
          }),
    we = se
      ? (0, Z.jsx)(N, {
          control: null,
          icon: (0, Z.jsx)(n, { className: `icon-xs` }),
          label: fe,
          size: `compact`,
        })
      : O
        ? (0, Z.jsx)(N, {
            control: (0, Z.jsx)(E, {
              color: `secondary`,
              size: `toolbar`,
              onClick: () => {
                y();
              },
              children: (0, Z.jsx)(F, { ...it.retry }),
            }),
            label: (0, Z.jsx)(`span`, { className: `text-danger`, role: `alert`, children: _e }),
            size: `compact`,
          })
        : (0, Z.jsxs)(Z.Fragment, {
            children: [
              re.map((e) =>
                (0, Z.jsx)(
                  Vt,
                  {
                    environment: e,
                    errorLabel: _e,
                    onSelectEnvironment: () => {
                      u(s, e.configPath, w);
                    },
                  },
                  e.configPath,
                ),
              ),
              T.length > 0
                ? (0, Z.jsx)(K, {
                    content: T.map((e) =>
                      (0, Z.jsx)(
                        Vt,
                        {
                          environment: e,
                          errorLabel: _e,
                          sourceFolderName: c(Ut(e.configPath)),
                          onSelectEnvironment: () => {
                            u(s, e.configPath, w);
                          },
                        },
                        e.configPath,
                      ),
                    ),
                    contentId: S,
                    expanded: b,
                    children: (0, Z.jsx)(N, {
                      control: (0, Z.jsx)(E, {
                        "aria-controls": S,
                        "aria-expanded": b,
                        "aria-label": P,
                        color: `ghost`,
                        size: `icon`,
                        uniform: !0,
                        onClick: () => {
                          x(!b);
                        },
                        children: (0, Z.jsx)(C, {
                          className: m(
                            `icon-2xs text-tertiary transition-transform`,
                            b ? `rotate-0` : `-rotate-90`,
                          ),
                        }),
                      }),
                      label: (0, Z.jsx)(F, {
                        id: `settings.localEnvironments.workspaceSelect.inherited`,
                        defaultMessage: `Inherited environments ({count})`,
                        description: `Accordion label for local environments inherited from parent folders`,
                        values: { count: T.length },
                      }),
                      size: `compact`,
                    }),
                  })
                : null,
            ],
          }),
    z;
  t[27] !== Se || t[28] !== R || t[29] !== we
    ? ((z = (0, Z.jsxs)(Se, { children: [R, we] })), (t[27] = Se), (t[28] = R), (t[29] = we), (t[30] = z))
    : (z = t[30]);
  let Te;
  return (
    t[31] !== z || t[32] !== A
      ? ((Te = (0, Z.jsx)(`div`, { "aria-label": A, role: `listitem`, children: z })),
        (t[31] = z),
        (t[32] = A),
        (t[33] = Te))
      : (Te = t[33]),
    Te
  );
}
function Vt(e) {
  let t = (0, Wt.c)(23),
    { environment: n, errorLabel: r, sourceFolderName: i, onSelectEnvironment: a } = e,
    o = ge(),
    s,
    l,
    u,
    d,
    f;
  if (t[0] !== n.configPath || t[1] !== n.environment || t[2] !== n.type || t[3] !== o || t[4] !== i) {
    s = c(n.configPath);
    let e = n.type === `success` && n.environment?.name != null && n.environment.name.length > 0;
    ((l = e ? n.environment.name : s), (d = n.type === `error`), (u = d || (e && s !== l) ? s : null));
    let r = d ? s : l;
    ((f =
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
      (t[6] = l),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f));
  } else ((s = t[5]), (l = t[6]), (u = t[7]), (d = t[8]), (f = t[9]));
  let p = f,
    m;
  t[10] !== s || t[11] !== u || t[12] !== i
    ? ((m =
        i == null
          ? u
          : (0, Z.jsx)(F, {
              id: `settings.localEnvironments.workspaceSelect.inheritedSource`,
              defaultMessage: `From {sourceFolderName} · {fileName}`,
              description: `Description identifying the source folder and file for an inherited local environment`,
              values: { fileName: s, sourceFolderName: i },
            })),
      (t[10] = s),
      (t[11] = u),
      (t[12] = i),
      (t[13] = m))
    : (m = t[13]);
  let h = d ? `text-danger` : void 0,
    g = d ? r : l,
    _;
  t[14] !== h || t[15] !== g
    ? ((_ = (0, Z.jsx)(`span`, { className: h, children: g })), (t[14] = h), (t[15] = g), (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Z.jsx)(C, { className: `icon-2xs -rotate-90 text-tertiary` })), (t[17] = v))
    : (v = t[17]);
  let y;
  return (
    t[18] !== a || t[19] !== m || t[20] !== _ || t[21] !== p
      ? ((y = (0, Z.jsx)(le, { ariaLabel: p, description: m, label: _, onClick: a, trailing: v })),
        (t[18] = a),
        (t[19] = m),
        (t[20] = _),
        (t[21] = p),
        (t[22] = y))
      : (y = t[22]),
    y
  );
}
function Ht(e, t) {
  let n = [],
    r = [];
  for (let i of e) fe(Ut(i.configPath), t) ? n.push(i) : r.push(i);
  return { projectEnvironments: n, inheritedEnvironments: r };
}
function Ut(e) {
  let t = de(e),
    n = Gt.default.posix.dirname(t),
    r = Gt.default.posix.dirname(n);
  return Gt.default.posix.basename(n) !== `environments` || Gt.default.posix.basename(r) !== `.codex`
    ? t
    : Gt.default.posix.dirname(r);
}
var Wt, Gt, Kt, Z;
function qt() {
  return (qt = e(() => {
    ((Wt = y()),
      P(),
      h(),
      O(),
      (Gt = t(ve(), 1)),
      M(),
      (Kt = l()),
      T(),
      D(),
      _(),
      se(),
      j(),
      s(),
      xe(),
      et(),
      je(),
      at(),
      xt(),
      Ue(),
      Be(),
      I(),
      _t(),
      k(),
      Ze(),
      v(),
      Lt(),
      (Z = p()));
  }))();
}
function Jt(e) {
  let t = (0, Qt.c)(102),
    { settingsHostId: n } = e,
    a = i(x),
    s = ye(`375130565`),
    c = ge(),
    [l] = ie(),
    u = ne(),
    p = te(),
    m = d($e) != null,
    h = m ? Ye(l, u.state) : null,
    g = h?.hostId ?? n,
    { error: _, isFetching: v, isLoading: y, refetch: ee } = me(we, ce.LOCAL_PROJECTS),
    { error: b, isFetching: C, isLoading: w, refetch: T } = me(we, ce.REMOTE_PROJECTS),
    ae = A(Se),
    D = Qe(ae, g),
    O = D.flatMap(Xt),
    oe = g === `local` ? y : w,
    se = g === `local` ? v : C,
    k = g === `local` ? _ : b,
    [le, ue] = (0, Q.useState)(h?.workspaceRoot ?? l.get(`workspaceRoot`)),
    de = l.get(`projectId`),
    [fe, pe] = (0, Q.useState)(h?.projectId ?? (de == null ? null : f(de))),
    [he, j] = (0, Q.useState)(h?.configPath ?? l.get(`configPath`)),
    [M, P] = (0, Q.useState)(h != null || l.get(`mode`) === `edit`),
    I = (0, Q.useId)(),
    [ve, L] = (0, Q.useState)(!1),
    [xe, R] = (0, Q.useState)(!1),
    [Ce, z] = (0, Q.useState)(null);
  Ke(I, M && (ve || xe));
  let [Te, Ee] = (0, Q.useState)(0),
    Oe = le ?? null,
    B = Oe != null && (h != null || O.includes(Oe) || he != null) ? Oe : null,
    Ae = B == null ? null : (D.find((e) => e.projectId === fe || (fe == null && e.path === B)) ?? null),
    je = B == null,
    Me = () => {
      if (g !== `local`) {
        Pe({ hostId: g });
        return;
      }
      be(a);
    },
    Ne = () => {
      g === `local` ? ee() : T();
    },
    Re;
  t[0] !== L || t[1] !== P || t[2] !== j
    ? ((Re = () => {
        (L(!1), pe(null), ue(null), j(null), P(!1));
      }),
      (t[0] = L),
      (t[1] = P),
      (t[2] = j),
      (t[3] = Re))
    : (Re = t[3]);
  let ze = Re,
    V = () => {
      if ((L(!1), h != null)) {
        p(h.returnTo, { replace: !0 });
        return;
      }
      P(!1);
    },
    Be;
  t[4] !== ve || t[5] !== xe || t[6] !== z
    ? ((Be = (e) => {
        if (!xe) {
          if (ve) {
            z(() => e);
            return;
          }
          e();
        }
      }),
      (t[4] = ve),
      (t[5] = xe),
      (t[6] = z),
      (t[7] = Be))
    : (Be = t[7]);
  let Ve = Be,
    He;
  t[8] !== P || t[9] !== j
    ? ((He = (e, t, n) => {
        (pe(n ?? null), ue(e), j(t), P(!1));
      }),
      (t[8] = P),
      (t[9] = j),
      (t[10] = He))
    : (He = t[10]);
  let Ue = He,
    We;
  t[11] !== P || t[12] !== j
    ? ((We = (e, t, n) => {
        (pe(n ?? null), ue(e), j(t), P(!0));
      }),
      (t[11] = P),
      (t[12] = j),
      (t[13] = We))
    : (We = t[13]);
  let Ge = We,
    {
      data: qe,
      isLoading: Je,
      isFetching: Xe,
      error: Ze,
      refetch: et,
    } = me(Fe, { hostId: g, workspaceRoot: B }),
    tt = qe != null && !Je && !Xe && Ze == null,
    nt;
  t[14] !== tt || t[15] !== qe
    ? ((nt = tt ? Ie(qe) : null), (t[14] = tt), (t[15] = qe), (t[16] = nt))
    : (nt = t[16]);
  let rt = nt,
    at = h != null && h.configPath == null && tt && B != null ? De(qe, B) : null,
    ot = h?.configPath ?? at ?? (h == null ? rt : null);
  M && he == null && ot != null && j(ot);
  let st = he ?? ot,
    ct = B != null && st != null,
    lt;
  t[17] === ct ? (lt = t[18]) : ((lt = { enabled: ct }), (t[17] = ct), (t[18] = lt));
  let { data: U, isLoading: ut, error: dt, refetch: W } = me(ke, { configPath: st ?? ``, hostId: g }, lt),
    G = U?.environment?.type === `success` ? U.environment.environment : null,
    pt = U?.environment?.type === `error`,
    ht = dt != null,
    _t = Ze != null || dt != null,
    K = () => {
      if (st == null) {
        et();
        return;
      }
      Promise.all([et(), W()]);
    },
    vt;
  t[19] !== W || t[20] !== et || t[21] !== L
    ? ((vt = async () => {
        et();
        let e = await W();
        e.data != null && e.error == null && (L(!1), Ee(Yt));
      }),
      (t[19] = W),
      (t[20] = et),
      (t[21] = L),
      (t[22] = vt))
    : (vt = t[22]);
  let xt = vt,
    Ct;
  t[23] !== W || t[24] !== P || t[25] !== j
    ? ((Ct = async () => {
        let e = await W();
        e.isSuccess && (j(e.data.configPath), P(!0));
      }),
      (t[23] = W),
      (t[24] = P),
      (t[25] = j),
      (t[26] = Ct))
    : (Ct = t[26]);
  let wt = Ct,
    Tt = Je || (Xe && st == null) || (ct && ut);
  if (m && h == null) {
    let e;
    return (
      t[27] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(S, { to: `/settings/local-environments`, replace: !0 })), (t[27] = e))
        : (e = t[27]),
      e
    );
  }
  if (je) {
    let e;
    t[28] === s
      ? (e = t[29])
      : ((e = s ? (0, $.jsx)(yt, { selectedTab: `environments` }) : null), (t[28] = s), (t[29] = e));
    let n;
    return (
      t[30] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(St, {})), (t[30] = n))
        : (n = t[30]),
      (0, $.jsx)(Zt, {
        stickyControls: e,
        subtitle: n,
        children: (0, $.jsx)(Rt, {
          groups: D,
          hasError: k != null,
          hostId: g,
          isLoading: oe || (k != null && se),
          workspaceRoots: O,
          onAddWorkspace: Me,
          onCreateEnvironment: Ge,
          onRetry: Ne,
          onSelectEnvironment: Ue,
        }),
      })
    );
  }
  let Et = bt(B, Ae),
    Dt;
  t[31] !== h || t[32] !== ze || t[33] !== V || t[34] !== M || t[35] !== Ve || t[36] !== Et
    ? ((Dt =
        h == null
          ? (0, $.jsx)(mt, {
              ancestors: [
                {
                  id: `environments`,
                  label: (0, $.jsx)(F, {
                    id: `settings.localEnvironments.breadcrumb.root`,
                    defaultMessage: `Environments`,
                    description: `Breadcrumb label for the local environments page`,
                  }),
                  onClick: () => Ve(ze),
                },
                ...(M ? [{ id: `workspace`, label: Et, onClick: () => Ve(V) }] : []),
              ],
              current: M
                ? (0, $.jsx)(F, {
                    id: `settings.localEnvironments.breadcrumb.edit`,
                    defaultMessage: `edit`,
                    description: `Breadcrumb label for local environment edit mode`,
                  })
                : Et,
            })
          : (0, $.jsxs)(E, {
              color: `ghost`,
              size: `toolbar`,
              onClick: () => Ve(V),
              children: [
                (0, $.jsx)(o, { "aria-hidden": !1, asset: _e }),
                (0, $.jsx)(F, {
                  id: `settings.localEnvironments.breadcrumb.back`,
                  defaultMessage: `Back`,
                  description: `Button label to return from local environment creation`,
                }),
              ],
            })),
      (t[31] = h),
      (t[32] = ze),
      (t[33] = V),
      (t[34] = M),
      (t[35] = Ve),
      (t[36] = Et),
      (t[37] = Dt))
    : (Dt = t[37]);
  let q = Dt;
  if (Tt) {
    let e;
    t[38] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(Le, {
          children: (0, $.jsx)(F, {
            id: `settings.localEnvironments.loading.body`,
            defaultMessage: `Fetching your project configuration…`,
            description: `Loading state body for local environments settings`,
          }),
        })),
        (t[38] = e))
      : (e = t[38]);
    let n;
    return (
      t[39] === q
        ? (n = t[40])
        : ((n = (0, $.jsx)(Zt, { backSlot: q, children: e })), (t[39] = q), (t[40] = n)),
      n
    );
  }
  if (!U || B == null) {
    let e;
    t[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(H.Header, {
          title: (0, $.jsx)(F, {
            id: `settings.localEnvironments.unavailable.title`,
            defaultMessage: `Local environments unavailable`,
            description: `Title for missing local environment config state`,
          }),
        })),
        (t[41] = e))
      : (e = t[41]);
    let n;
    t[42] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(F, {
          id: `settings.localEnvironments.unavailable.body`,
          defaultMessage: `We could not load local environment settings for this project`,
          description: `Body text for missing local environment config state`,
        })),
        (t[42] = n))
      : (n = t[42]);
    let i;
    t[43] !== K || t[44] !== _t
      ? ((i = _t
          ? (0, $.jsx)(E, {
              color: `secondary`,
              size: `toolbar`,
              type: `button`,
              onClick: K,
              children: (0, $.jsx)(F, { ...it.retry }),
            })
          : null),
        (t[43] = K),
        (t[44] = _t),
        (t[45] = i))
      : (i = t[45]);
    let a;
    t[46] === i
      ? (a = t[47])
      : ((a = (0, $.jsxs)(H, {
          children: [
            e,
            (0, $.jsx)(H.Content, {
              children: (0, $.jsx)(r, { children: (0, $.jsx)(N, { label: n, control: i }) }),
            }),
          ],
        })),
        (t[46] = i),
        (t[47] = a));
    let o;
    return (
      t[48] !== q || t[49] !== a
        ? ((o = (0, $.jsx)(Zt, { backSlot: q, children: a })), (t[48] = q), (t[49] = a), (t[50] = o))
        : (o = t[50]),
      o
    );
  }
  let Ot;
  t[51] !== U.configPath || t[52] !== U.exists || t[53] !== wt || t[54] !== P || t[55] !== j
    ? ((Ot = () => {
        if (U.exists) {
          wt();
          return;
        }
        (j(U.configPath), P(!0));
      }),
      (t[51] = U.configPath),
      (t[52] = U.exists),
      (t[53] = wt),
      (t[54] = P),
      (t[55] = j),
      (t[56] = Ot))
    : (Ot = t[56]);
  let kt = Ot;
  if (M) {
    let e;
    t[57] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(F, {
          id: `settings.localEnvironments.edit.title`,
          defaultMessage: `Edit local environment`,
          description: `Title for the local environment editor`,
        })),
        (t[57] = e))
      : (e = t[57]);
    let n = `${g}:${U.configPath}:${Te}`,
      r;
    t[58] !== U.configPath ||
    t[59] !== U.revision ||
    t[60] !== xt ||
    t[61] !== V ||
    t[62] !== K ||
    t[63] !== pt ||
    t[64] !== ht ||
    t[65] !== G ||
    t[66] !== B ||
    t[67] !== g ||
    t[68] !== Ae ||
    t[69] !== L ||
    t[70] !== R ||
    t[71] !== n
      ? ((r = (0, $.jsx)(
          ft,
          {
            hostId: g,
            workspaceRoot: B,
            resolvedProject: Ae,
            configPath: U.configPath,
            expectedRevision: U.revision,
            initialEnvironment: G,
            hasParseError: pt,
            hasReadError: ht,
            onDirtyChange: L,
            onDiscardConflict: xt,
            onRetryRead: K,
            onSavingChange: R,
            onSaved: V,
          },
          n,
        )),
        (t[58] = U.configPath),
        (t[59] = U.revision),
        (t[60] = xt),
        (t[61] = V),
        (t[62] = K),
        (t[63] = pt),
        (t[64] = ht),
        (t[65] = G),
        (t[66] = B),
        (t[67] = g),
        (t[68] = Ae),
        (t[69] = L),
        (t[70] = R),
        (t[71] = n),
        (t[72] = r))
      : (r = t[72]);
    let i;
    t[73] === z ? (i = t[74]) : ((i = () => z(null)), (t[73] = z), (t[74] = i));
    let a;
    t[75] !== Ce || t[76] !== i
      ? ((a = (0, $.jsx)(gt, { pendingNavigation: Ce, onClearPendingNavigation: i })),
        (t[75] = Ce),
        (t[76] = i),
        (t[77] = a))
      : (a = t[77]);
    let o;
    return (
      t[78] !== q || t[79] !== r || t[80] !== a
        ? ((o = (0, $.jsxs)(Zt, { backSlot: q, title: e, children: [r, a] })),
          (t[78] = q),
          (t[79] = r),
          (t[80] = a),
          (t[81] = o))
        : (o = t[81]),
      o
    );
  }
  let J;
  t[82] !== U.exists || t[83] !== c
    ? ((J = U.exists
        ? c.formatMessage({
            id: `settings.localEnvironments.environment.editLabel`,
            defaultMessage: `Edit local environment`,
            description: `Accessible label for editing a local environment`,
          })
        : void 0),
      (t[82] = U.exists),
      (t[83] = c),
      (t[84] = J))
    : (J = t[84]);
  let At = U.exists ? `secondary` : `primary`,
    Mt;
  t[85] === U.exists
    ? (Mt = t[86])
    : ((Mt = U.exists
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(o, { "aria-hidden": !1, asset: re }),
              (0, $.jsx)(F, { ...It.editEnvironment }),
            ],
          })
        : (0, $.jsx)(F, { ...It.createEnvironment })),
      (t[85] = U.exists),
      (t[86] = Mt));
  let Nt;
  t[87] !== kt || t[88] !== J || t[89] !== At || t[90] !== Mt
    ? ((Nt = (0, $.jsx)(E, { "aria-label": J, color: At, size: `toolbar`, onClick: kt, children: Mt })),
      (t[87] = kt),
      (t[88] = J),
      (t[89] = At),
      (t[90] = Mt),
      (t[91] = Nt))
    : (Nt = t[91]);
  let Pt = G?.name,
    Y;
  t[92] !== U.exists || t[93] !== pt || t[94] !== ht || t[95] !== G
    ? ((Y = (0, $.jsx)(jt, {
        configExists: U.exists,
        initialEnvironment: G,
        hasParseError: pt,
        hasReadError: ht,
      })),
      (t[92] = U.exists),
      (t[93] = pt),
      (t[94] = ht),
      (t[95] = G),
      (t[96] = Y))
    : (Y = t[96]);
  let X;
  return (
    t[97] !== q || t[98] !== Nt || t[99] !== Pt || t[100] !== Y
      ? ((X = (0, $.jsx)(Zt, { action: Nt, backSlot: q, title: Pt, children: Y })),
        (t[97] = q),
        (t[98] = Nt),
        (t[99] = Pt),
        (t[100] = Y),
        (t[101] = X))
      : (X = t[101]),
    X
  );
}
function Yt(e) {
  return e + 1;
}
function Xt(e) {
  return e.projectKind === `local` ? Ee(e) : [e.path];
}
function Zt(e) {
  let t = (0, Qt.c)(10),
    { action: n, backSlot: r, stickyControls: i, subtitle: a, title: o, children: s } = e,
    c = ye(`375130565`),
    l;
  t[0] !== c || t[1] !== o
    ? ((l = o === void 0 ? (0, $.jsx)(B, { slug: c ? `worktrees` : `local-environments` }) : o),
      (t[0] = c),
      (t[1] = o),
      (t[2] = l))
    : (l = t[2]);
  let u;
  return (
    t[3] !== n || t[4] !== r || t[5] !== s || t[6] !== i || t[7] !== a || t[8] !== l
      ? ((u = (0, $.jsx)(Ae, {
          action: n,
          title: l,
          subtitle: a,
          backSlot: r,
          stickyControls: i,
          children: s,
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = s),
        (t[6] = i),
        (t[7] = a),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
var Qt, Q, $;
function $t() {
  return ($t = e(() => {
    ((Qt = y()),
      oe(),
      w(),
      O(),
      M(),
      (Q = l()),
      T(),
      g(),
      D(),
      _(),
      pt(),
      Te(),
      je(),
      V(),
      ut(),
      at(),
      xt(),
      L(),
      ze(),
      a(),
      Ge(),
      Ue(),
      We(),
      Be(),
      I(),
      Me(),
      k(),
      ht(),
      Re(),
      Oe(),
      nt(),
      rt(),
      Ze(),
      vt(),
      Dt(),
      tt(),
      Ft(),
      qt(),
      Lt(),
      ($ = p()));
  }))();
}
export { $t as n, Jt as t };
//# sourceMappingURL=local-environments-settings-content-5bc177910d1e.js.map
