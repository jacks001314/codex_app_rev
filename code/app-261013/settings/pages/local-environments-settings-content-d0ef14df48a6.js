import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $X as r,
  ADt as i,
  BR as a,
  Cot as o,
  Ext as s,
  FR as c,
  HZ as l,
  Hbt as u,
  IDt as d,
  Ixt as f,
  JC as p,
  LR as m,
  Mdt as h,
  Mz as g,
  Nxt as _,
  Nz as v,
  Pxt as y,
  QC as b,
  Txt as x,
  VDt as ee,
  VZ as S,
  Vxt as C,
  XD as w,
  YD as te,
  _Mt as ne,
  _xt as re,
  crt as ie,
  cz as ae,
  eZ as oe,
  gMt as se,
  ght as ce,
  i3 as le,
  iw as T,
  jDt as E,
  l4 as ue,
  ldt as de,
  mht as fe,
  ob as D,
  oxt as pe,
  qC as me,
  r3 as he,
  rst as O,
  sb as k,
  srt as ge,
  sz as _e,
  t3 as A,
  tw as j,
  u4 as M,
  vzt as N,
  wot as P,
  wxt as ve,
  xMt as F,
  yft as ye,
  yzt as I,
  zxt as be,
} from "./app-shared-bbfeca5e5737.js";
import {
  AKt as L,
  BA as xe,
  BKt as Se,
  D_n as Ce,
  EX as we,
  E_n as R,
  Ek as z,
  Hrt as B,
  JPn as Te,
  N_r as Ee,
  P_r as De,
  Tk as V,
  VA as Oe,
  VCt as ke,
  Vrt as Ae,
  WCt as je,
  XCt as Me,
  XPn as Ne,
  YCt as Pe,
  _F as Fe,
  adt as Ie,
  eDr as Le,
  eF as Re,
  hF as ze,
  hp as Be,
  i7t as Ve,
  i_n as He,
  idt as Ue,
  mDt as We,
  mF as Ge,
  mp as Ke,
  n7t as H,
  nDr as qe,
  ndt as Je,
  o7t as Ye,
  oFr as Xe,
  pDt as Ze,
  pF as Qe,
  qCt as $e,
  s_n as et,
  tF as U,
} from "./app-initial-5851df3f6cb1.js";
import { n as tt, t as W } from "./local-environment-workflow-messages-113907dcb0c6.js";
import {
  _ as nt,
  a as rt,
  g as it,
  i as at,
  l as ot,
  n as st,
  o as ct,
  r as lt,
  t as ut,
  u as G,
} from "./local-environment-editor-e16d20074fb4.js";
import { n as dt, t as ft } from "./toolbar-breadcrumb-e1be94112dcb.js";
import { n as pt, t as K } from "./settings-row-disclosure-81330dc4d2f4.js";
import { n as mt, t as ht } from "./settings-tabs-7db1edf2adfc.js";
function gt(e, t) {
  return t?.label ?? we(e) ?? e;
}
function _t() {
  return (_t = e(() => {}))();
}
function vt() {
  let e = (0, q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, J.jsx)(`div`, {
          className: `select-none`,
          children: (0, J.jsx)(d, {
            id: `settings.localEnvironments.workspaceSelect.descriptionWithLink`,
            defaultMessage: `Local environments tell ChatGPT how to set up worktrees for a project. <learnMore>Learn more</learnMore>`,
            description: `Explanatory text for local environments in Worktrees settings. Local environments configure project worktree setup on the user's machine. The learnMore tag links to the environments guide.`,
            values: { learnMore: yt },
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function yt(e) {
  return (0, J.jsx)(`a`, {
    className: `inline-flex items-center gap-1 text-base text-info`,
    href: L,
    target: `_blank`,
    rel: `noreferrer`,
    onClick: bt,
    children: e,
  });
}
function bt(e) {
  Ne({ event: e, href: L, initiator: `open_in_browser_bridge` });
}
var q, J;
function xt() {
  return (xt = e(() => {
    ((q = N()), E(), Se(), Te(), (J = F()));
  }))();
}
function Y(e) {
  let t = (0, St.c)(29),
    { actions: n, lifecycle: r, scriptType: i } = e,
    a = ee(),
    [o, s] = (0, Ct.useState)(`default`),
    c = r?.script ?? ``,
    l = o === "default" ? null : (r?.[o]?.script ?? ``),
    u = l === `` && c.length > 0,
    f = l == null || u ? c : l,
    p;
  t[0] !== c.length || t[1] !== r
    ? ((p = c.length > 0 || ye.some((e) => !!r?.[e]?.script)), (t[0] = c.length), (t[1] = r), (t[2] = p))
    : (p = t[2]);
  let m = p,
    h = i === `setup`,
    g,
    _;
  t[3] === h
    ? ((g = t[4]), (_ = t[5]))
    : ((g = h ? (0, X.jsx)(d, { ...G.setupScript }) : (0, X.jsx)(d, { ...G.cleanupScript })),
      (_ = h
        ? (0, X.jsx)(d, {
            id: `settings.localEnvironments.environment.setup.description`,
            defaultMessage: `This script runs on worktree creation`,
            description: `Description for environment setup script summary`,
          })
        : (0, X.jsx)(d, { ...G.cleanupDescription })),
      (t[3] = h),
      (t[4] = g),
      (t[5] = _));
  let v;
  t[6] !== n || t[7] !== g || t[8] !== _
    ? ((v = (0, X.jsx)(V.Header, { title: g, subtitle: _, actions: n })),
      (t[6] = n),
      (t[7] = g),
      (t[8] = _),
      (t[9] = v))
    : (v = t[9]);
  let y;
  t[10] !== m || t[11] !== a || t[12] !== o || t[13] !== h
    ? ((y = m
        ? (0, X.jsx)(rt, {
            leadingOption: `default`,
            selectedId: o,
            onSelect: s,
            ariaLabel: h
              ? a.formatMessage(G.setupPlatformSelector)
              : a.formatMessage(G.cleanupPlatformSelector),
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
              children: (0, X.jsx)(d, {
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
  t[18] !== m || t[19] !== f || t[20] !== o
    ? ((x =
        f.length > 0
          ? (0, X.jsx)(D, {
              language: o === `win32` ? `text` : `bash`,
              content: f,
              shouldWrapCode: !0,
              codeContainerClassName: `max-h-56`,
            })
          : (0, X.jsx)(me, {
              variant: `secondary`,
              children: (0, X.jsx)(j, {
                label:
                  o === "default" || !m
                    ? (0, X.jsx)(d, {
                        id: `settings.localEnvironments.environment.script.empty`,
                        defaultMessage: `No script configured`,
                        description: `Empty state for a local environment script`,
                      })
                    : (0, X.jsx)(d, {
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
      (t[20] = o),
      (t[21] = x))
    : (x = t[21]);
  let S;
  t[22] !== y || t[23] !== b || t[24] !== x
    ? ((S = (0, X.jsxs)(V.Content, { className: `gap-2`, children: [y, b, x] })),
      (t[22] = y),
      (t[23] = b),
      (t[24] = x),
      (t[25] = S))
    : (S = t[25]);
  let C;
  return (
    t[26] !== v || t[27] !== S
      ? ((C = (0, X.jsxs)(V, { className: `gap-2`, children: [v, S] })),
        (t[26] = v),
        (t[27] = S),
        (t[28] = C))
      : (C = t[28]),
    C
  );
}
var St, Ct, X;
function wt() {
  return (wt = e(() => {
    ((St = N()), O(), (Ct = I()), E(), k(), ot(), ct(), z(), T(), p(), (X = F()));
  }))();
}
function Tt(e) {
  let t = (0, Ot.c)(12),
    { configExists: n, initialEnvironment: r, hasParseError: i, hasReadError: a } = e,
    o = r != null,
    s = r?.actions,
    c;
  t[0] !== n || t[1] !== i || t[2] !== o || t[3] !== a
    ? ((c =
        !o || i || a
          ? (0, Z.jsx)(V, {
              className: `gap-2`,
              children: (0, Z.jsxs)(V.Content, {
                children: [
                  n
                    ? null
                    : (0, Z.jsx)(me, {
                        children: (0, Z.jsx)(Ke, {
                          layout: `settings-row`,
                          children: (0, Z.jsx)(d, {
                            id: `settings.localEnvironments.environment.empty`,
                            defaultMessage: `No local environment is configured for this project yet`,
                            description: `Empty state when no local environment is configured`,
                          }),
                        }),
                      }),
                  i
                    ? (0, Z.jsx)(`div`, {
                        className: `mt-2 text-sm text-danger`,
                        children: (0, Z.jsx)(d, { ...tt.parseError }),
                      })
                    : null,
                  a
                    ? (0, Z.jsx)(`div`, {
                        className: `mt-2 text-sm text-danger`,
                        children: (0, Z.jsx)(d, { ...tt.readError }),
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
              (0, Z.jsx)(Y, { actions: (0, Z.jsx)(lt, {}), lifecycle: r.setup, scriptType: `setup` }),
              (0, Z.jsx)(Y, { lifecycle: r.cleanup, scriptType: `cleanup` }),
              (0, Z.jsxs)(V, {
                className: `gap-2`,
                children: [
                  (0, Z.jsx)(V.Header, {
                    title: (0, Z.jsx)(d, {
                      id: `settings.localEnvironments.environment.actionsLabel`,
                      defaultMessage: `Actions`,
                      description: `Label for actions count in local environment summary`,
                    }),
                    subtitle: (0, Z.jsx)(d, { ...G.actionsDescription }),
                  }),
                  (0, Z.jsx)(V.Content, {
                    children: (0, Z.jsx)(me, {
                      children:
                        s != null && s.length > 0
                          ? s.map(Et)
                          : (0, Z.jsx)(Ke, {
                              layout: `settings-row`,
                              children: (0, Z.jsx)(d, { ...G.actionsEmpty }),
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
function Et(e, t) {
  return (0, Z.jsx)(Dt, { action: e }, `${e.name}-${t}`);
}
function Dt(e) {
  let t = (0, Ot.c)(25),
    { action: r } = e,
    [i, a] = (0, kt.useState)(!1),
    o = (0, kt.useId)(),
    s;
  if (t[0] !== r.command) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = /\r?\n/), (t[2] = e)) : (e = t[2]),
      (s = r.command.trimEnd().split(e)),
      (t[0] = r.command),
      (t[1] = s));
  } else s = t[1];
  let c = s,
    l = c.length > 1,
    u;
  t[3] !== r.command || t[4] !== l
    ? ((u = l
        ? (0, Z.jsx)(j, {
            label: null,
            control: (0, Z.jsx)(`code`, {
              className: `block w-full font-mono text-xs break-all whitespace-pre-wrap`,
              dir: `ltr`,
              children: r.command,
            }),
            variant: `nested`,
          })
        : null),
      (t[3] = r.command),
      (t[4] = l),
      (t[5] = u))
    : (u = t[5]);
  let f = l && i,
    p = r.icon ?? `tool`,
    m;
  t[6] === p
    ? (m = t[7])
    : ((m = (0, Z.jsx)(`span`, { className: `text-secondary`, children: (0, Z.jsx)(it, { icon: p }) })),
      (t[6] = p),
      (t[7] = m));
  let h;
  t[8] === c[0]
    ? (h = t[9])
    : ((h = (0, Z.jsx)(`code`, { className: `font-mono text-wrap break-all`, dir: `ltr`, children: c[0] })),
      (t[8] = c[0]),
      (t[9] = h));
  let g;
  t[10] !== r.name || t[11] !== o || t[12] !== i || t[13] !== l
    ? ((g = l
        ? (0, Z.jsxs)(n, {
            "aria-controls": o,
            "aria-expanded": i,
            color: `ghost`,
            size: `icon`,
            uniform: !0,
            onClick: () => {
              a(!i);
            },
            children: [
              (0, Z.jsx)(`span`, {
                className: `sr-only`,
                children: i
                  ? (0, Z.jsx)(d, {
                      id: `settings.localEnvironments.environment.action.hideCommand`,
                      defaultMessage: `Hide full command for {actionName}`,
                      description: `Accessible label for collapsing a local environment action command`,
                      values: { actionName: r.name },
                    })
                  : (0, Z.jsx)(d, {
                      id: `settings.localEnvironments.environment.action.showCommand`,
                      defaultMessage: `Show full command for {actionName}`,
                      description: `Accessible label for expanding a local environment action command`,
                      values: { actionName: r.name },
                    }),
              }),
              (0, Z.jsx)(te, {
                "aria-hidden": !0,
                className: se(
                  `icon-2xs shrink-0 text-tertiary transition-transform`,
                  i ? `rotate-0` : `-rotate-90`,
                ),
              }),
            ],
          })
        : null),
      (t[10] = r.name),
      (t[11] = o),
      (t[12] = i),
      (t[13] = l),
      (t[14] = g))
    : (g = t[14]);
  let _;
  t[15] !== r.name || t[16] !== m || t[17] !== h || t[18] !== g
    ? ((_ = (0, Z.jsx)(j, { icon: m, label: r.name, description: h, control: g })),
      (t[15] = r.name),
      (t[16] = m),
      (t[17] = h),
      (t[18] = g),
      (t[19] = _))
    : (_ = t[19]);
  let v;
  return (
    t[20] !== o || t[21] !== u || t[22] !== f || t[23] !== _
      ? ((v = (0, Z.jsx)(K, { content: u, contentId: o, expanded: f, children: _ })),
        (t[20] = o),
        (t[21] = u),
        (t[22] = f),
        (t[23] = _),
        (t[24] = v))
      : (v = t[24]),
    v
  );
}
var Ot, kt, Z;
function At() {
  return (At = e(() => {
    ((Ot = N()),
      ne(),
      (kt = I()),
      E(),
      A(),
      Be(),
      w(),
      nt(),
      wt(),
      ot(),
      at(),
      W(),
      z(),
      T(),
      pt(),
      p(),
      (Z = F()));
  }))();
}
var jt;
function Mt() {
  return (Mt = e(() => {
    (E(),
      (jt = i({
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
function Nt(e) {
  let t = (0, zt.c)(17),
    {
      groups: r,
      hasError: i,
      hostId: a,
      isLoading: o,
      workspaceRoots: s,
      onAddWorkspace: c,
      onCreateEnvironment: l,
      onRetry: u,
      onSelectEnvironment: f,
    } = e,
    p;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Q.jsx)(d, { ...jt.selectProject })), (t[0] = p))
    : (p = t[0]);
  let m;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(d, {
        id: `settings.localEnvironments.workspace.add`,
        defaultMessage: `Add project`,
        description: `Button label to add a new workspace`,
      })),
      (t[1] = m))
    : (m = t[1]);
  let h;
  t[2] === c
    ? (h = t[3])
    : ((h = (0, Q.jsx)(V.Header, {
        title: p,
        actions: (0, Q.jsx)(n, { color: `secondary`, size: `toolbar`, onClick: c, children: m }),
      })),
      (t[2] = c),
      (t[3] = h));
  let g;
  t[4] !== r ||
  t[5] !== i ||
  t[6] !== a ||
  t[7] !== o ||
  t[8] !== c ||
  t[9] !== l ||
  t[10] !== u ||
  t[11] !== f ||
  t[12] !== s
    ? ((g = (0, Q.jsx)(V.Content, {
        children: (0, Q.jsx)(`div`, {
          className: `flex flex-col gap-2`,
          children: (0, Q.jsx)(Pt, {
            groups: r,
            hasError: i,
            hostId: a,
            isLoading: o,
            workspaceRoots: s,
            onAddWorkspace: c,
            onCreateEnvironment: l,
            onRetry: u,
            onSelectEnvironment: f,
          }),
        }),
      })),
      (t[4] = r),
      (t[5] = i),
      (t[6] = a),
      (t[7] = o),
      (t[8] = c),
      (t[9] = l),
      (t[10] = u),
      (t[11] = f),
      (t[12] = s),
      (t[13] = g))
    : (g = t[13]);
  let _;
  return (
    t[14] !== h || t[15] !== g
      ? ((_ = (0, Q.jsxs)(V, { children: [h, g] })), (t[14] = h), (t[15] = g), (t[16] = _))
      : (_ = t[16]),
    _
  );
}
function Pt(e) {
  let t = (0, zt.c)(33),
    {
      groups: r,
      hasError: i,
      hostId: a,
      isLoading: o,
      workspaceRoots: s,
      onAddWorkspace: c,
      onCreateEnvironment: l,
      onRetry: u,
      onSelectEnvironment: f,
    } = e,
    p = ee(),
    m,
    h,
    g,
    _,
    v;
  if (
    t[0] !== r ||
    t[1] !== i ||
    t[2] !== a ||
    t[3] !== p ||
    t[4] !== o ||
    t[5] !== c ||
    t[6] !== l ||
    t[7] !== u ||
    t[8] !== f ||
    t[9] !== s
  ) {
    v = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = new Set();
      if (o) {
        let e;
        (t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(Qe, {
              children: (0, Q.jsx)(d, {
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
      if (i) {
        let e;
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(d, { ...tt.retry })), (t[16] = e))
          : (e = t[16]);
        let r;
        t[17] === u
          ? (r = t[18])
          : ((r = (0, Q.jsx)(n, { color: `secondary`, size: `toolbar`, onClick: u, children: e })),
            (t[17] = u),
            (t[18] = r));
        let i;
        t[19] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((i = (0, Q.jsx)(`span`, {
              className: `text-danger`,
              role: `alert`,
              children: (0, Q.jsx)(d, {
                id: `settings.localEnvironments.workspaceSelect.error`,
                defaultMessage: `Could not load projects`,
                description: `Error shown when local environment projects cannot be loaded`,
              }),
            })),
            (t[19] = i))
          : (i = t[19]);
        let a;
        (t[20] === r
          ? (a = t[21])
          : ((a = (0, Q.jsx)(me, { children: (0, Q.jsx)(j, { control: r, label: i }) })),
            (t[20] = r),
            (t[21] = a)),
          (v = a));
        break bb0;
      }
      if (s.length === 0) {
        let e;
        t[22] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(d, {
              id: `settings.localEnvironments.workspaceSelect.empty`,
              defaultMessage: `No projects yet. Add one to configure local environments.`,
              description: `Empty state when no workspace roots are available`,
            })),
            (t[22] = e))
          : (e = t[22]);
        let r;
        t[23] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((r = (0, Q.jsx)(d, {
              id: `settings.localEnvironments.workspace.add`,
              defaultMessage: `Add project`,
              description: `Button label to add a new workspace`,
            })),
            (t[23] = r))
          : (r = t[23]);
        let i;
        (t[24] === c
          ? (i = t[25])
          : ((i = (0, Q.jsx)(me, {
              children: (0, Q.jsxs)(`div`, {
                className: `flex flex-col gap-3 p-3 text-sm text-secondary`,
                children: [
                  e,
                  (0, Q.jsx)(`div`, {
                    children: (0, Q.jsx)(n, { color: `primary`, size: `toolbar`, onClick: c, children: r }),
                  }),
                ],
              }),
            })),
            (t[24] = c),
            (t[25] = i)),
          (v = i));
        break bb0;
      }
      ((m = `flex flex-col gap-3`),
        (h = `list`),
        t[26] === p
          ? (g = t[27])
          : ((g = p.formatMessage({
              id: `settings.localEnvironments.workspaceSelect.listLabel`,
              defaultMessage: `Available projects`,
              description: `Aria label for the workspace selection list`,
            })),
            (t[26] = p),
            (t[27] = g)),
        (_ = s.map((t) => {
          let n = ce(t),
            i = r.find((r) => !e.has(`${r.projectId}:${n}`) && r.path != null && fe(r.path, t)) ?? null;
          return (
            i != null && e.add(`${i.projectId}:${n}`),
            (0, Q.jsx)(
              Ft,
              {
                hostId: a,
                resolvedProject: i,
                workspaceRoot: t,
                onCreateEnvironment: l,
                onSelectEnvironment: f,
              },
              `${i?.projectId ?? `unassigned`}:${t}`,
            )
          );
        })));
    }
    ((t[0] = r),
      (t[1] = i),
      (t[2] = a),
      (t[3] = p),
      (t[4] = o),
      (t[5] = c),
      (t[6] = l),
      (t[7] = u),
      (t[8] = f),
      (t[9] = s),
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
function Ft(e) {
  let t = (0, zt.c)(34),
    { hostId: r, resolvedProject: i, workspaceRoot: a, onCreateEnvironment: o, onSelectEnvironment: s } = e,
    l = ee(),
    u;
  t[0] !== r || t[1] !== a
    ? ((u = { hostId: r, workspaceRoot: a }), (t[0] = r), (t[1] = a), (t[2] = u))
    : (u = t[2]);
  let { data: f, isLoading: p, isFetching: m, error: _, refetch: v } = be(je, u),
    y = f === void 0 ? [] : f,
    [x, S] = (0, Vt.useState)(!1),
    C = `local-environment-inherited-${(0, Vt.useId)()}`,
    w = i == null ? void 0 : h(i.projectId),
    ne = !p && !m && _ == null,
    re = ne ? Lt(y, a) : null,
    ie = re?.projectEnvironments ?? [],
    ae = re?.inheritedEnvironments ?? [],
    ce = $e(ie),
    le = i?.isCodexWorktree ? Ze : xe,
    T,
    E,
    ue,
    de,
    fe,
    D;
  t[3] !== _ || t[4] !== m || t[5] !== p || t[6] !== l || t[7] !== i || t[8] !== a
    ? ((D = gt(a, i)),
      (ue = i?.gitRepos[0]?.ownerRepo?.owner ?? null),
      (de = p || m),
      (E = _ != null),
      (T = l.formatMessage(
        {
          id: `settings.localEnvironments.workspaceSelect.addLabel`,
          defaultMessage: `Add environment to {projectName}`,
          description: `Aria label for add environment button`,
        },
        { projectName: D },
      )),
      (fe = l.formatMessage(
        {
          id: `settings.localEnvironments.workspaceSelect.openProject`,
          defaultMessage: `Open {projectName}`,
          description: `Aria label for opening a project's default environment`,
        },
        { projectName: D },
      )),
      (t[3] = _),
      (t[4] = m),
      (t[5] = p),
      (t[6] = l),
      (t[7] = i),
      (t[8] = a),
      (t[9] = T),
      (t[10] = E),
      (t[11] = ue),
      (t[12] = de),
      (t[13] = fe),
      (t[14] = D))
    : ((T = t[9]), (E = t[10]), (ue = t[11]), (de = t[12]), (fe = t[13]), (D = t[14]));
  let pe = fe,
    O = ne ? Pe(y, a) : null,
    k;
  t[15] === l
    ? (k = t[16])
    : ((k = l.formatMessage({
        id: `settings.localEnvironments.workspaceSelect.loadingLabel`,
        defaultMessage: `Loading environment`,
        description: `Label for environment row while loading`,
      })),
      (t[15] = l),
      (t[16] = k));
  let ge = k,
    A;
  t[17] === l
    ? (A = t[18])
    : ((A = l.formatMessage({
        id: `settings.localEnvironments.workspaceSelect.errorLabel`,
        defaultMessage: `Environment needs attention`,
        description: `Label for environment row when environment data fails`,
      })),
      (t[17] = l),
      (t[18] = A));
  let M = A,
    N;
  t[19] !== l || t[20] !== x
    ? ((N = x
        ? l.formatMessage({
            id: `settings.localEnvironments.workspaceSelect.inherited.hide`,
            defaultMessage: `Hide inherited environments`,
            description: `Aria label for hiding inherited local environments`,
          })
        : l.formatMessage({
            id: `settings.localEnvironments.workspaceSelect.inherited.show`,
            defaultMessage: `Show inherited environments`,
            description: `Aria label for showing inherited local environments`,
          })),
      (t[19] = l),
      (t[20] = x),
      (t[21] = N))
    : (N = t[21]);
  let P = N,
    ve;
  t[22] === le
    ? (ve = t[23])
    : ((ve = (0, Q.jsx)(le, { className: `icon-sm text-secondary` })), (t[22] = le), (t[23] = ve));
  let F = ve,
    ye;
  t[24] === D
    ? (ye = t[25])
    : ((ye = (0, Q.jsx)(`span`, { className: `block truncate`, children: D })), (t[24] = D), (t[25] = ye));
  let I = ye,
    L;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Q.jsx)(g, { "aria-hidden": !1, asset: oe })), (t[26] = L))
    : (L = t[26]);
  let Se = (0, Q.jsx)(_e, {
      cloneCustomTrigger: !0,
      tooltipContent: T,
      children: (0, Q.jsx)(n, {
        "aria-label": T,
        color: `secondary`,
        disabled: O == null,
        size: `toolbar`,
        uniform: !0,
        onClick: () => {
          O != null && o(a, O, w);
        },
        children: L,
      }),
    }),
    Ce = me,
    we =
      ce == null
        ? (0, Q.jsx)(j, { control: Se, description: ue, icon: F, label: I })
        : (0, Q.jsx)(b, {
            actions: Se,
            ariaLabel: pe,
            description: ue,
            icon: F,
            label: I,
            onClick: () => {
              s(a, ce, w);
            },
          }),
    R = de
      ? (0, Q.jsx)(j, {
          control: null,
          icon: (0, Q.jsx)(he, { className: `icon-xs` }),
          label: ge,
          size: `compact`,
        })
      : E
        ? (0, Q.jsx)(j, {
            control: (0, Q.jsx)(n, {
              color: `secondary`,
              size: `toolbar`,
              onClick: () => {
                v();
              },
              children: (0, Q.jsx)(d, { ...tt.retry }),
            }),
            label: (0, Q.jsx)(`span`, { className: `text-danger`, role: `alert`, children: M }),
            size: `compact`,
          })
        : (0, Q.jsxs)(Q.Fragment, {
            children: [
              ie.map((e) =>
                (0, Q.jsx)(
                  It,
                  {
                    environment: e,
                    errorLabel: M,
                    onSelectEnvironment: () => {
                      s(a, e.configPath, w);
                    },
                  },
                  e.configPath,
                ),
              ),
              ae.length > 0
                ? (0, Q.jsx)(K, {
                    content: ae.map((e) =>
                      (0, Q.jsx)(
                        It,
                        {
                          environment: e,
                          errorLabel: M,
                          sourceFolderName: c(Rt(e.configPath)),
                          onSelectEnvironment: () => {
                            s(a, e.configPath, w);
                          },
                        },
                        e.configPath,
                      ),
                    ),
                    contentId: C,
                    expanded: x,
                    children: (0, Q.jsx)(j, {
                      control: (0, Q.jsx)(n, {
                        "aria-controls": C,
                        "aria-expanded": x,
                        "aria-label": P,
                        color: `ghost`,
                        size: `icon`,
                        uniform: !0,
                        onClick: () => {
                          S(!x);
                        },
                        children: (0, Q.jsx)(te, {
                          className: se(
                            `icon-2xs text-tertiary transition-transform`,
                            x ? `rotate-0` : `-rotate-90`,
                          ),
                        }),
                      }),
                      label: (0, Q.jsx)(d, {
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
    z;
  t[27] !== Ce || t[28] !== we || t[29] !== R
    ? ((z = (0, Q.jsxs)(Ce, { children: [we, R] })), (t[27] = Ce), (t[28] = we), (t[29] = R), (t[30] = z))
    : (z = t[30]);
  let B;
  return (
    t[31] !== z || t[32] !== D
      ? ((B = (0, Q.jsx)(`div`, { "aria-label": D, role: `listitem`, children: z })),
        (t[31] = z),
        (t[32] = D),
        (t[33] = B))
      : (B = t[33]),
    B
  );
}
function It(e) {
  let t = (0, zt.c)(23),
    { environment: n, errorLabel: r, sourceFolderName: i, onSelectEnvironment: a } = e,
    o = ee(),
    s,
    l,
    u,
    f,
    p;
  if (t[0] !== n.configPath || t[1] !== n.environment || t[2] !== n.type || t[3] !== o || t[4] !== i) {
    s = c(n.configPath);
    let e = n.type === `success` && n.environment?.name != null && n.environment.name.length > 0;
    ((l = e ? n.environment.name : s), (f = n.type === `error`), (u = f || (e && s !== l) ? s : null));
    let r = f ? s : l;
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
      (t[6] = l),
      (t[7] = u),
      (t[8] = f),
      (t[9] = p));
  } else ((s = t[5]), (l = t[6]), (u = t[7]), (f = t[8]), (p = t[9]));
  let m = p,
    h;
  t[10] !== s || t[11] !== u || t[12] !== i
    ? ((h =
        i == null
          ? u
          : (0, Q.jsx)(d, {
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
  let g = f ? `text-danger` : void 0,
    _ = f ? r : l,
    v;
  t[14] !== g || t[15] !== _
    ? ((v = (0, Q.jsx)(`span`, { className: g, children: _ })), (t[14] = g), (t[15] = _), (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsx)(te, { className: `icon-2xs -rotate-90 text-tertiary` })), (t[17] = y))
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
function Lt(e, t) {
  let n = [],
    r = [];
  for (let i of e) fe(Rt(i.configPath), t) ? n.push(i) : r.push(i);
  return { projectEnvironments: n, inheritedEnvironments: r };
}
function Rt(e) {
  let t = a(e),
    n = Bt.default.posix.dirname(t),
    r = Bt.default.posix.dirname(n);
  return Bt.default.posix.basename(n) !== `environments` || Bt.default.posix.basename(r) !== `.codex`
    ? t
    : Bt.default.posix.dirname(r);
}
var zt, Bt, Vt, Q;
function Ht() {
  return (Ht = e(() => {
    ((zt = N()),
      r(),
      ne(),
      y(),
      (Bt = t(de(), 1)),
      O(),
      (Vt = I()),
      E(),
      A(),
      v(),
      le(),
      ae(),
      w(),
      Oe(),
      We(),
      ke(),
      W(),
      _t(),
      z(),
      Ge(),
      T(),
      pt(),
      p(),
      Me(),
      m(),
      Mt(),
      (Q = F()));
  }))();
}
function Ut(e) {
  let t = (0, qt.c)(85),
    { settingsHostId: r } = e,
    i = f(o),
    a = qe(`375130565`),
    c = ee(),
    [p] = _(),
    m = ve(),
    v = s(),
    y = x(Je) != null,
    b = y ? Ue(p, m.state) : null,
    S = b?.hostId ?? r,
    { error: w, isFetching: te, isLoading: ne, refetch: re } = be(Ee, u.LOCAL_PROJECTS),
    { error: ae, isFetching: oe, isLoading: se, refetch: ce } = be(Ee, u.REMOTE_PROJECTS),
    le = C(et),
    T = Ae(le, S),
    E = T.flatMap(Gt),
    de = S === `local` ? ne : se,
    fe = S === `local` ? te : oe,
    D = S === `local` ? w : ae,
    [he, O] = (0, Jt.useState)(b?.workspaceRoot ?? p.get(`workspaceRoot`)),
    k = p.get(`projectId`),
    [ge, _e] = (0, Jt.useState)(b?.projectId ?? (k == null ? null : h(k))),
    [A, M] = (0, Jt.useState)(b?.configPath ?? p.get(`configPath`)),
    [N, P] = (0, Jt.useState)(b != null || p.get(`mode`) === `edit`),
    [F, ye] = (0, Jt.useState)(0),
    I = he ?? null,
    L = I != null && (b != null || E.includes(I) || A != null) ? I : null,
    xe = L == null ? null : (T.find((e) => e.projectId === ge || (ge == null && e.path === L)) ?? null),
    Se = L == null,
    Ce = () => {
      if (S !== `local`) {
        Ve({ hostId: S });
        return;
      }
      Ye(i);
    },
    we = () => {
      S === `local` ? re() : ce();
    },
    R;
  t[0] !== P || t[1] !== M
    ? ((R = () => {
        (_e(null), O(null), M(null), P(!1));
      }),
      (t[0] = P),
      (t[1] = M),
      (t[2] = R))
    : (R = t[2]);
  let z = R,
    B = () => {
      if (b != null) {
        v(b.returnTo, { replace: !0 });
        return;
      }
      P(!1);
    },
    Te;
  t[3] !== P || t[4] !== M
    ? ((Te = (e, t, n) => {
        (_e(n ?? null), O(e), M(t), P(!1));
      }),
      (t[3] = P),
      (t[4] = M),
      (t[5] = Te))
    : (Te = t[5]);
  let De = Te,
    Oe;
  t[6] !== P || t[7] !== M
    ? ((Oe = (e, t, n) => {
        (_e(n ?? null), O(e), M(t), P(!0));
      }),
      (t[6] = P),
      (t[7] = M),
      (t[8] = Oe))
    : (Oe = t[8]);
  let ke = Oe,
    {
      data: Me,
      isLoading: Ne,
      isFetching: Fe,
      error: Ie,
      refetch: Le,
    } = be(je, { hostId: S, workspaceRoot: L }),
    Re = Me != null && !Ne && !Fe && Ie == null,
    ze;
  t[9] !== Re || t[10] !== Me
    ? ((ze = Re ? $e(Me) : null), (t[9] = Re), (t[10] = Me), (t[11] = ze))
    : (ze = t[11]);
  let Be = ze,
    He = b != null && b.configPath == null && Re && L != null ? Pe(Me, L) : null,
    We = b?.configPath ?? He ?? (b == null ? Be : null);
  N && A == null && We != null && M(We);
  let Ge = A ?? We,
    Ke = L != null && Ge != null,
    {
      data: H,
      isLoading: Xe,
      error: Ze,
      refetch: U,
    } = ie(`local-environment-config`, {
      params: { configPath: Ge ?? ``, hostId: S },
      queryConfig: { enabled: Ke },
    }),
    W = H?.environment?.type === `success` ? H.environment.environment : null,
    nt = H?.environment?.type === `error`,
    rt = Ze != null,
    it = Ie != null || Ze != null,
    at = () => {
      if (Ge == null) {
        Le();
        return;
      }
      Promise.all([Le(), U()]);
    },
    ot;
  t[12] !== U || t[13] !== Le
    ? ((ot = async () => {
        Le();
        let e = await U();
        e.data != null && e.error == null && ye(Wt);
      }),
      (t[12] = U),
      (t[13] = Le),
      (t[14] = ot))
    : (ot = t[14]);
  let st = ot,
    ct;
  t[15] !== U || t[16] !== P || t[17] !== M
    ? ((ct = async () => {
        let e = await U();
        e.isSuccess && (M(e.data.configPath), P(!0));
      }),
      (t[15] = U),
      (t[16] = P),
      (t[17] = M),
      (t[18] = ct))
    : (ct = t[18]);
  let lt = ct,
    G = Ne || (Fe && Ge == null) || (Ke && Xe);
  if (y && b == null) {
    let e;
    return (
      t[19] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(pe, { to: `/settings/local-environments`, replace: !0 })), (t[19] = e))
        : (e = t[19]),
      e
    );
  }
  if (Se) {
    let e;
    t[20] === a
      ? (e = t[21])
      : ((e = a ? (0, $.jsx)(ht, { selectedTab: `environments` }) : null), (t[20] = a), (t[21] = e));
    let n;
    return (
      t[22] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(vt, {})), (t[22] = n))
        : (n = t[22]),
      (0, $.jsx)(Kt, {
        stickyControls: e,
        subtitle: n,
        children: (0, $.jsx)(Nt, {
          groups: T,
          hasError: D != null,
          hostId: S,
          isLoading: de || (D != null && fe),
          workspaceRoots: E,
          onAddWorkspace: Ce,
          onCreateEnvironment: ke,
          onRetry: we,
          onSelectEnvironment: De,
        }),
      })
    );
  }
  let dt = gt(L, xe),
    pt;
  t[23] !== b || t[24] !== z || t[25] !== B || t[26] !== N || t[27] !== dt
    ? ((pt =
        b == null
          ? (0, $.jsx)(ft, {
              ancestors: [
                {
                  id: `environments`,
                  label: (0, $.jsx)(d, {
                    id: `settings.localEnvironments.breadcrumb.root`,
                    defaultMessage: `Environments`,
                    description: `Breadcrumb label for the local environments page`,
                  }),
                  onClick: z,
                },
                ...(N ? [{ id: `workspace`, label: dt, onClick: B }] : []),
              ],
              current: N
                ? (0, $.jsx)(d, {
                    id: `settings.localEnvironments.breadcrumb.edit`,
                    defaultMessage: `edit`,
                    description: `Breadcrumb label for local environment edit mode`,
                  })
                : dt,
            })
          : (0, $.jsxs)(n, {
              color: `ghost`,
              size: `toolbar`,
              onClick: B,
              children: [
                (0, $.jsx)(g, { "aria-hidden": !1, asset: ue }),
                (0, $.jsx)(d, {
                  id: `settings.localEnvironments.breadcrumb.back`,
                  defaultMessage: `Back`,
                  description: `Button label to return from local environment creation`,
                }),
              ],
            })),
      (t[23] = b),
      (t[24] = z),
      (t[25] = B),
      (t[26] = N),
      (t[27] = dt),
      (t[28] = pt))
    : (pt = t[28]);
  let K = pt;
  if (G) {
    let e;
    t[29] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(Qe, {
          children: (0, $.jsx)(d, {
            id: `settings.localEnvironments.loading.body`,
            defaultMessage: `Fetching your project configuration…`,
            description: `Loading state body for local environments settings`,
          }),
        })),
        (t[29] = e))
      : (e = t[29]);
    let n;
    return (
      t[30] === K
        ? (n = t[31])
        : ((n = (0, $.jsx)(Kt, { backSlot: K, children: e })), (t[30] = K), (t[31] = n)),
      n
    );
  }
  if (!H || L == null) {
    let e;
    t[32] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(V.Header, {
          title: (0, $.jsx)(d, {
            id: `settings.localEnvironments.unavailable.title`,
            defaultMessage: `Local environments unavailable`,
            description: `Title for missing local environment config state`,
          }),
        })),
        (t[32] = e))
      : (e = t[32]);
    let r;
    t[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(d, {
          id: `settings.localEnvironments.unavailable.body`,
          defaultMessage: `We could not load local environment settings for this project`,
          description: `Body text for missing local environment config state`,
        })),
        (t[33] = r))
      : (r = t[33]);
    let i;
    t[34] !== at || t[35] !== it
      ? ((i = it
          ? (0, $.jsx)(n, {
              color: `secondary`,
              size: `toolbar`,
              type: `button`,
              onClick: at,
              children: (0, $.jsx)(d, { ...tt.retry }),
            })
          : null),
        (t[34] = at),
        (t[35] = it),
        (t[36] = i))
      : (i = t[36]);
    let a;
    t[37] === i
      ? (a = t[38])
      : ((a = (0, $.jsxs)(V, {
          children: [
            e,
            (0, $.jsx)(V.Content, {
              children: (0, $.jsx)(me, { children: (0, $.jsx)(j, { label: r, control: i }) }),
            }),
          ],
        })),
        (t[37] = i),
        (t[38] = a));
    let o;
    return (
      t[39] !== K || t[40] !== a
        ? ((o = (0, $.jsx)(Kt, { backSlot: K, children: a })), (t[39] = K), (t[40] = a), (t[41] = o))
        : (o = t[41]),
      o
    );
  }
  let mt;
  t[42] !== H.configPath || t[43] !== H.exists || t[44] !== lt || t[45] !== P || t[46] !== M
    ? ((mt = () => {
        if (H.exists) {
          lt();
          return;
        }
        (M(H.configPath), P(!0));
      }),
      (t[42] = H.configPath),
      (t[43] = H.exists),
      (t[44] = lt),
      (t[45] = P),
      (t[46] = M),
      (t[47] = mt))
    : (mt = t[47]);
  let _t = mt;
  if (N) {
    let e;
    t[48] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(d, {
          id: `settings.localEnvironments.edit.title`,
          defaultMessage: `Edit local environment`,
          description: `Title for the local environment editor`,
        })),
        (t[48] = e))
      : (e = t[48]);
    let n = `${S}:${H.configPath}:${F}`,
      r;
    t[49] !== H.configPath ||
    t[50] !== H.revision ||
    t[51] !== st ||
    t[52] !== B ||
    t[53] !== at ||
    t[54] !== nt ||
    t[55] !== rt ||
    t[56] !== W ||
    t[57] !== L ||
    t[58] !== S ||
    t[59] !== xe ||
    t[60] !== n
      ? ((r = (0, $.jsx)(
          ut,
          {
            hostId: S,
            workspaceRoot: L,
            resolvedProject: xe,
            configPath: H.configPath,
            expectedRevision: H.revision,
            initialEnvironment: W,
            hasParseError: nt,
            hasReadError: rt,
            onDiscardConflict: st,
            onRetryRead: at,
            onSaved: B,
          },
          n,
        )),
        (t[49] = H.configPath),
        (t[50] = H.revision),
        (t[51] = st),
        (t[52] = B),
        (t[53] = at),
        (t[54] = nt),
        (t[55] = rt),
        (t[56] = W),
        (t[57] = L),
        (t[58] = S),
        (t[59] = xe),
        (t[60] = n),
        (t[61] = r))
      : (r = t[61]);
    let i;
    return (
      t[62] !== K || t[63] !== r
        ? ((i = (0, $.jsx)(Kt, { backSlot: K, title: e, children: r })),
          (t[62] = K),
          (t[63] = r),
          (t[64] = i))
        : (i = t[64]),
      i
    );
  }
  let yt;
  t[65] !== H.exists || t[66] !== c
    ? ((yt = H.exists
        ? c.formatMessage({
            id: `settings.localEnvironments.environment.editLabel`,
            defaultMessage: `Edit local environment`,
            description: `Accessible label for editing a local environment`,
          })
        : void 0),
      (t[65] = H.exists),
      (t[66] = c),
      (t[67] = yt))
    : (yt = t[67]);
  let bt = H.exists ? `secondary` : `primary`,
    q;
  t[68] === H.exists
    ? (q = t[69])
    : ((q = H.exists
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(g, { "aria-hidden": !1, asset: l }),
              (0, $.jsx)(d, { ...jt.editEnvironment }),
            ],
          })
        : (0, $.jsx)(d, { ...jt.createEnvironment })),
      (t[68] = H.exists),
      (t[69] = q));
  let J;
  t[70] !== _t || t[71] !== bt || t[72] !== q || t[73] !== yt
    ? ((J = (0, $.jsx)(n, { "aria-label": yt, color: bt, size: `toolbar`, onClick: _t, children: q })),
      (t[70] = _t),
      (t[71] = bt),
      (t[72] = q),
      (t[73] = yt),
      (t[74] = J))
    : (J = t[74]);
  let xt = W?.name,
    Y;
  t[75] !== H.exists || t[76] !== nt || t[77] !== rt || t[78] !== W
    ? ((Y = (0, $.jsx)(Tt, {
        configExists: H.exists,
        initialEnvironment: W,
        hasParseError: nt,
        hasReadError: rt,
      })),
      (t[75] = H.exists),
      (t[76] = nt),
      (t[77] = rt),
      (t[78] = W),
      (t[79] = Y))
    : (Y = t[79]);
  let St;
  return (
    t[80] !== K || t[81] !== J || t[82] !== xt || t[83] !== Y
      ? ((St = (0, $.jsx)(Kt, { action: J, backSlot: K, title: xt, children: Y })),
        (t[80] = K),
        (t[81] = J),
        (t[82] = xt),
        (t[83] = Y),
        (t[84] = St))
      : (St = t[84]),
    St
  );
}
function Wt(e) {
  return e + 1;
}
function Gt(e) {
  return e.projectKind === `local` ? R(e) : [e.path];
}
function Kt(e) {
  let t = (0, qt.c)(10),
    { action: n, backSlot: r, stickyControls: i, subtitle: a, title: o, children: s } = e,
    c = qe(`375130565`),
    l;
  t[0] !== c || t[1] !== o
    ? ((l = o === void 0 ? (0, $.jsx)(Re, { slug: c ? `worktrees` : `local-environments` }) : o),
      (t[0] = c),
      (t[1] = o),
      (t[2] = l))
    : (l = t[2]);
  let u;
  return (
    t[3] !== n || t[4] !== r || t[5] !== s || t[6] !== i || t[7] !== a || t[8] !== l
      ? ((u = (0, $.jsx)(ze, {
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
var qt, Jt, $;
function Yt() {
  return (Yt = e(() => {
    ((qt = N()),
      M(),
      S(),
      y(),
      O(),
      (Jt = I()),
      E(),
      re(),
      A(),
      v(),
      dt(),
      De(),
      ke(),
      st(),
      W(),
      _t(),
      H(),
      Ce(),
      P(),
      Fe(),
      z(),
      B(),
      Ge(),
      T(),
      U(),
      p(),
      Xe(),
      He(),
      Le(),
      Me(),
      ge(),
      mt(),
      xt(),
      Ie(),
      At(),
      Ht(),
      Mt(),
      ($ = F()));
  }))();
}
export { Yt as n, Ut as t };
//# sourceMappingURL=local-environments-settings-content-d0ef14df48a6.js.map
