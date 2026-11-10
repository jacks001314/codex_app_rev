import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  D4 as i,
  DB as a,
  FBt as o,
  FNt as s,
  HO as c,
  IO as l,
  IW as u,
  JO as d,
  KO as f,
  LNt as p,
  LO as m,
  NSt as h,
  O4 as g,
  OB as _,
  PBt as v,
  QY as y,
  Qst as b,
  RO as x,
  SSt as S,
  TY as C,
  Ty as w,
  UQ as T,
  USt as E,
  VSt as D,
  Vrt as O,
  WO as k,
  WOt as A,
  WQ as ee,
  XOt as j,
  Y3 as M,
  Z3 as N,
  ZSt as P,
  ZY as F,
  ast as I,
  aw as L,
  ck as R,
  ew as te,
  hst as ne,
  iCt as z,
  ist as re,
  iw as ie,
  mst as ae,
  nCt as oe,
  nQ as se,
  okt as B,
  qO as ce,
  qrt as V,
  rk as le,
  sw as ue,
  tQ as de,
  tk as fe,
  tkt as H,
  uw as pe,
  vD as me,
  wy as he,
  yD as ge,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as _e,
  C8n as ve,
  Cjr as ye,
  Fjn as be,
  GLn as xe,
  Hcn as Se,
  LF as Ce,
  Njn as we,
  QF as U,
  RF as Te,
  Ucn as Ee,
  XF as De,
  YLt as Oe,
  ZF as ke,
  ZLt as Ae,
  _8n as je,
  _p as Me,
  b2 as Ne,
  b8n as Pe,
  b9t as Fe,
  cA as Ie,
  cGt as Le,
  d8n as Re,
  do as ze,
  eI as Be,
  g8n as Ve,
  gp as He,
  hWt as Ue,
  hut as We,
  l8n as Ge,
  lBr as Ke,
  lvr as qe,
  mWt as Je,
  mut as Ye,
  qLn as Xe,
  sA as W,
  sGt as Ze,
  uBr as Qe,
  uo as $e,
  uvr as et,
  v8n as tt,
  wLr as nt,
  x2 as rt,
  x8n as it,
  xjr as at,
  y9t as ot,
  zRr as st,
} from "./app-initial-ad16eaadf81f.js";
import { n as ct, r as lt, t as ut } from "./pending-onboarding-actions-e6c9cf556c12.js";
import { n as dt, t as ft } from "./toolbar-breadcrumb-d8f79235f5b5.js";
import { n as pt, t as mt } from "./cloud-settings-toolbar-f4dd9fd3b411.js";
import { n as ht, t as gt } from "./cloud-environment-editor-252c3d5d6175.js";
import { r as _t, t as vt } from "./cloud-preferences-settings-54bfef4ea3ab.js";
function yt(e) {
  let n = (0, Ct.c)(42),
    { environment: r } = e,
    i;
  n[0] === r.setup
    ? (i = n[1])
    : ((i = (
        Array.isArray(r.setup)
          ? r.setup.join(`
`)
          : r.setup
      )?.trim()),
      (n[0] = r.setup),
      (n[1] = i));
  let a = !!i,
    o;
  n[2] === r.maintenance_setup
    ? (o = n[3])
    : ((o = (
        Array.isArray(r.maintenance_setup)
          ? r.maintenance_setup.join(`
`)
          : r.maintenance_setup
      )?.trim()),
      (n[2] = r.maintenance_setup),
      (n[3] = o));
  let s = !!o,
    c;
  n[4] === r.env_vars ? (c = n[5]) : ((c = Object.keys(r.env_vars)), (n[4] = r.env_vars), (n[5] = c));
  let l = c,
    u;
  if (n[6] !== r || n[7] !== l || n[8] !== s || n[9] !== a) {
    let e = St(r),
      i;
    n[11] === r.repo_map
      ? (i = n[12])
      : ((i = (e) => r.repo_map?.[e]?.repository_full_name ?? e), (n[11] = r.repo_map), (n[12] = i));
    let o = r.repos.map(i),
      c = a || s || l.length > 0 || e.length > 0,
      d;
    n[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, G.jsx)(H, {
          id: `settings.cloudEnvironments.details.configured`,
          defaultMessage: `Configured`,
          description: `Label for a configured cloud environment setting`,
        })),
        (n[13] = d))
      : (d = n[13]);
    let f = d,
      p;
    n[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((p = (0, G.jsx)(H, {
          id: `settings.cloudEnvironments.details.repository`,
          defaultMessage: `Repository`,
          description: `Label for the repository in cloud environment details`,
        })),
        (n[14] = p))
      : (p = n[14]);
    let m =
        o.length > 0
          ? o.join(`, `)
          : (0, G.jsx)(H, {
              id: `settings.cloudEnvironments.list.noRepository`,
              defaultMessage: `No repository configured`,
              description: `Description for a cloud environment without a repository`,
            }),
      h;
    n[15] === m
      ? (h = n[16])
      : ((h = (0, G.jsx)(L, { label: p, valueAlignment: `end`, children: m })), (n[15] = m), (n[16] = h));
    let g;
    n[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((g = (0, G.jsx)(H, {
          id: `settings.cloudEnvironments.details.machine`,
          defaultMessage: `Machine`,
          description: `Label for the machine in cloud environment details`,
        })),
        (n[17] = g))
      : (g = n[17]);
    let _;
    n[18] === r.machine.label
      ? (_ = n[19])
      : ((_ = (0, G.jsx)(L, { label: g, valueAlignment: `end`, children: r.machine.label })),
        (n[18] = r.machine.label),
        (n[19] = _));
    let v;
    n[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((v = (0, G.jsx)(H, {
          id: `settings.cloudEnvironments.details.creator`,
          defaultMessage: `Created by`,
          description: `Label for the creator in cloud environment details`,
        })),
        (n[20] = v))
      : (v = n[20]);
    let y = r.creator.name || r.creator.email,
      b;
    n[21] === y
      ? (b = n[22])
      : ((b = (0, G.jsx)(L, { label: v, valueAlignment: `end`, children: y })), (n[21] = y), (n[22] = b));
    let x;
    n[23] === r.created_at
      ? (x = n[24])
      : ((x =
          r.created_at == null
            ? null
            : (0, G.jsx)(L, {
                label: (0, G.jsx)(H, {
                  id: `settings.cloudEnvironments.details.created`,
                  defaultMessage: `Created`,
                  description: `Label for the creation date in cloud environment details`,
                }),
                valueAlignment: `end`,
                children: (0, G.jsx)(A, {
                  day: `numeric`,
                  month: `short`,
                  value: r.created_at * 1e3,
                  year: `numeric`,
                }),
              })),
        (n[23] = r.created_at),
        (n[24] = x));
    let S;
    n[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((S = (0, G.jsx)(H, {
          id: `settings.cloudEnvironments.details.network`,
          defaultMessage: `Network access`,
          description: `Label for network access in cloud environment details`,
        })),
        (n[25] = S))
      : (S = n[25]);
    let C = r.agent_network_access?.mode,
      w;
    n[26] === C ? (w = n[27]) : ((w = bt(C)), (n[26] = C), (n[27] = w));
    let T;
    n[28] === w
      ? (T = n[29])
      : ((T = (0, G.jsx)(L, { label: S, valueAlignment: `end`, children: w })), (n[28] = w), (n[29] = T));
    let E;
    n[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((E = (0, G.jsx)(H, {
          id: `settings.cloudEnvironments.details.sharing`,
          defaultMessage: `Sharing`,
          description: `Label for cloud environment sharing`,
        })),
        (n[30] = E))
      : (E = n[30]);
    let D;
    n[31] === r.share_settings
      ? (D = n[32])
      : ((D = xt(r.share_settings)), (n[31] = r.share_settings), (n[32] = D));
    let O;
    n[33] === D
      ? (O = n[34])
      : ((O = (0, G.jsx)(L, { label: E, valueAlignment: `end`, children: D })), (n[33] = D), (n[34] = O));
    let k;
    (n[35] !== _ || n[36] !== b || n[37] !== x || n[38] !== T || n[39] !== O || n[40] !== h
      ? ((k = (0, G.jsx)(W, {
          children: (0, G.jsx)(W.Content, { children: (0, G.jsxs)(t, { children: [h, _, b, x, T, O] }) }),
        })),
        (n[35] = _),
        (n[36] = b),
        (n[37] = x),
        (n[38] = T),
        (n[39] = O),
        (n[40] = h),
        (n[41] = k))
      : (k = n[41]),
      (u = (0, G.jsxs)(G.Fragment, {
        children: [
          k,
          c
            ? (0, G.jsxs)(W, {
                children: [
                  (0, G.jsx)(W.Header, {
                    title: (0, G.jsx)(H, {
                      id: `settings.cloudEnvironments.details.configuration`,
                      defaultMessage: `Configuration`,
                      description: `Heading for cloud environment configuration details`,
                    }),
                  }),
                  (0, G.jsx)(W.Content, {
                    children: (0, G.jsxs)(t, {
                      children: [
                        a
                          ? (0, G.jsx)(L, {
                              label: (0, G.jsx)(H, {
                                id: `settings.cloudEnvironments.details.setup`,
                                defaultMessage: `Setup script`,
                                description: `Label for the setup script in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: f,
                            })
                          : null,
                        s
                          ? (0, G.jsx)(L, {
                              label: (0, G.jsx)(H, {
                                id: `settings.cloudEnvironments.details.maintenance`,
                                defaultMessage: `Maintenance script`,
                                description: `Label for the maintenance script in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: f,
                            })
                          : null,
                        l.length > 0
                          ? (0, G.jsx)(L, {
                              label: (0, G.jsx)(H, {
                                id: `settings.cloudEnvironments.details.environmentVariables`,
                                defaultMessage: `Environment variables`,
                                description: `Label for environment variables in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: l.join(`, `),
                            })
                          : null,
                        e.length > 0
                          ? (0, G.jsx)(L, {
                              label: (0, G.jsx)(H, {
                                id: `settings.cloudEnvironments.details.secrets`,
                                defaultMessage: `Secrets`,
                                description: `Label for secrets in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: e.join(`, `),
                            })
                          : null,
                      ],
                    }),
                  }),
                ],
              })
            : null,
        ],
      })),
      (n[6] = r),
      (n[7] = l),
      (n[8] = s),
      (n[9] = a),
      (n[10] = u));
  } else u = n[10];
  return u;
}
function bt(e) {
  switch (e) {
    case `custom`:
      return (0, G.jsx)(H, {
        id: `settings.cloudEnvironments.network.custom`,
        defaultMessage: `Custom`,
        description: `Label for custom cloud environment network access`,
      });
    case `on`:
      return (0, G.jsx)(H, {
        id: `settings.cloudEnvironments.network.on`,
        defaultMessage: `On`,
        description: `Label for enabled cloud environment network access`,
      });
    case `off`:
    case void 0:
      return (0, G.jsx)(H, {
        id: `settings.cloudEnvironments.network.off`,
        defaultMessage: `Off`,
        description: `Label for disabled cloud environment network access`,
      });
  }
}
function xt(e) {
  switch (e) {
    case `private`:
      return (0, G.jsx)(H, {
        id: `settings.cloudEnvironments.sharing.private`,
        defaultMessage: `Private`,
        description: `Label for a private cloud environment`,
      });
    case `public`:
      return (0, G.jsx)(H, {
        id: `settings.cloudEnvironments.sharing.public`,
        defaultMessage: `Public`,
        description: `Label for a public cloud environment`,
      });
    case `workspace`:
      return (0, G.jsx)(H, {
        id: `settings.cloudEnvironments.sharing.workspace`,
        defaultMessage: `Workspace`,
        description: `Label for a workspace cloud environment`,
      });
  }
}
function St(e) {
  let t = Object.keys(e.secrets ?? {});
  return t.length > 0 ? t : (e.secrets_with_domains ?? []).flatMap(({ name: e }) => (e == null ? [] : [e]));
}
var Ct, G;
function wt() {
  return (wt = e(() => {
    ((Ct = v()), j(), Ie(), pe(), te(), (G = p()));
  }))();
}
function Tt(e) {
  let t = (0, Dt.c)(27),
    { environmentName: n, isPending: r, open: i, onConfirm: a, onOpenChange: o } = e,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = (e) => {
        (e.preventDefault(), a());
      }),
      (t[0] = a),
      (t[1] = s));
  let c;
  t[2] === n
    ? (c = t[3])
    : ((c = (0, K.jsx)(ce, {
        children: (0, K.jsx)(H, {
          id: `settings.cloudEnvironments.delete.title`,
          defaultMessage: `Delete {environmentName}?`,
          description: `Title for the cloud environment deletion confirmation`,
          values: { environmentName: n },
        }),
      })),
      (t[2] = n),
      (t[3] = c));
  let u;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, K.jsx)(f, {
        className: `contents`,
        children: (0, K.jsx)(H, {
          id: `settings.cloudEnvironments.delete.description`,
          defaultMessage: `Existing chats will remain, but you will not be able to create follow-ups with this environment`,
          description: `Description for the cloud environment deletion confirmation`,
        }),
      })),
      (t[4] = u))
    : (u = t[4]);
  let d;
  t[5] === c ? (d = t[6]) : ((d = (0, K.jsx)(x, { title: c, subtitle: u })), (t[5] = c), (t[6] = d));
  let p;
  t[7] === o ? (p = t[8]) : ((p = () => o(!1)), (t[7] = o), (t[8] = p));
  let h;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, K.jsx)(H, {
        id: `settings.cloudEnvironments.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label for cancelling a cloud environment action`,
      })),
      (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] !== r || t[11] !== p
    ? ((g = (0, K.jsx)(M, { color: `secondary`, disabled: r, onClick: p, type: `button`, children: h })),
      (t[10] = r),
      (t[11] = p),
      (t[12] = g))
    : (g = t[12]);
  let _;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, K.jsx)(H, {
        id: `settings.cloudEnvironments.delete.confirm`,
        defaultMessage: `Delete environment`,
        description: `Button label for confirming cloud environment deletion`,
      })),
      (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] === r
    ? (v = t[15])
    : ((v = (0, K.jsx)(M, { color: `danger`, loading: r, type: `submit`, children: _ })),
      (t[14] = r),
      (t[15] = v));
  let y;
  t[16] !== g || t[17] !== v
    ? ((y = (0, K.jsxs)(m, { children: [g, v] })), (t[16] = g), (t[17] = v), (t[18] = y))
    : (y = t[18]);
  let b;
  t[19] !== s || t[20] !== y || t[21] !== d
    ? ((b = (0, K.jsxs)(l, { as: `form`, onSubmit: s, children: [d, y] })),
      (t[19] = s),
      (t[20] = y),
      (t[21] = d),
      (t[22] = b))
    : (b = t[22]);
  let S;
  return (
    t[23] !== o || t[24] !== i || t[25] !== b
      ? ((S = (0, K.jsx)(k, { open: i, onOpenChange: o, children: b })),
        (t[23] = o),
        (t[24] = i),
        (t[25] = b),
        (t[26] = S))
      : (S = t[26]),
    S
  );
}
function Et(e) {
  let t = (0, Dt.c)(23),
    { isPending: n, open: r, onConfirm: i, onOpenChange: a } = e,
    o;
  t[0] === i
    ? (o = t[1])
    : ((o = (e) => {
        (e.preventDefault(), i());
      }),
      (t[0] = i),
      (t[1] = o));
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, K.jsx)(ce, {
        children: (0, K.jsx)(H, {
          id: `settings.cloudEnvironments.resetCache.title`,
          defaultMessage: `Reset cached containers?`,
          description: `Title for the cloud environment cache reset confirmation`,
        }),
      })),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, K.jsx)(x, {
        title: s,
        subtitle: (0, K.jsx)(f, {
          className: `contents`,
          children: (0, K.jsx)(H, {
            id: `settings.cloudEnvironments.resetCache.description`,
            defaultMessage: `This invalidates all cached containers for this environment and all users`,
            description: `Description for the cloud environment cache reset confirmation`,
          }),
        }),
      })),
      (t[3] = c))
    : (c = t[3]);
  let u;
  t[4] === a ? (u = t[5]) : ((u = () => a(!1)), (t[4] = a), (t[5] = u));
  let d;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, K.jsx)(H, {
        id: `settings.cloudEnvironments.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label for cancelling a cloud environment action`,
      })),
      (t[6] = d))
    : (d = t[6]);
  let p;
  t[7] !== n || t[8] !== u
    ? ((p = (0, K.jsx)(M, { color: `secondary`, disabled: n, onClick: u, type: `button`, children: d })),
      (t[7] = n),
      (t[8] = u),
      (t[9] = p))
    : (p = t[9]);
  let h;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, K.jsx)(H, {
        id: `settings.cloudEnvironments.resetCache.confirm`,
        defaultMessage: `Reset cache`,
        description: `Button label for confirming a cloud environment cache reset`,
      })),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] === n
    ? (g = t[12])
    : ((g = (0, K.jsx)(M, { color: `primary`, loading: n, type: `submit`, children: h })),
      (t[11] = n),
      (t[12] = g));
  let _;
  t[13] !== p || t[14] !== g
    ? ((_ = (0, K.jsxs)(m, { children: [p, g] })), (t[13] = p), (t[14] = g), (t[15] = _))
    : (_ = t[15]);
  let v;
  t[16] !== o || t[17] !== _
    ? ((v = (0, K.jsxs)(l, { as: `form`, onSubmit: o, children: [c, _] })),
      (t[16] = o),
      (t[17] = _),
      (t[18] = v))
    : (v = t[18]);
  let y;
  return (
    t[19] !== a || t[20] !== r || t[21] !== v
      ? ((y = (0, K.jsx)(k, { open: r, onOpenChange: a, children: v })),
        (t[19] = a),
        (t[20] = r),
        (t[21] = v),
        (t[22] = y))
      : (y = t[22]),
    y
  );
}
var Dt, K;
function Ot() {
  return (Ot = e(() => {
    ((Dt = v()), j(), N(), d(), c(), (K = p()));
  }))();
}
function kt(e) {
  let t = (0, At.c)(14),
    { environment: r } = e,
    i = n(b),
    a = B(),
    o = E(),
    s = Le(),
    { modelSettings: c } = Ae(),
    l = z(st),
    u = z(_e);
  if (!oe(Qe, `375130565`) || re?.environmentConfigs == null || !Pe(r)) return null;
  let d = c.isLoading || l == null || u == null,
    f;
  t[0] !== r.id ||
  t[1] !== r.label ||
  t[2] !== r.repo_map ||
  t[3] !== r.repos ||
  t[4] !== a ||
  t[5] !== c ||
  t[6] !== o ||
  t[7] !== s ||
  t[8] !== i
    ? ((f = () => {
        let e = ct(i, a, {
          name: r.label,
          legacyEnvironmentId: r.id,
          repositoryNamesById: Object.fromEntries(
            r.repos.map((e) => [e, r.repo_map?.[e]?.repository_full_name ?? e]),
          ),
          modelSettings: c,
        });
        ((0, jt.flushSync)(() => {
          s(e, qe());
        }),
          lt(i, a, o, e));
      }),
      (t[0] = r.id),
      (t[1] = r.label),
      (t[2] = r.repo_map),
      (t[3] = r.repos),
      (t[4] = a),
      (t[5] = c),
      (t[6] = o),
      (t[7] = s),
      (t[8] = i),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Mt.jsx)(H, {
        id: `settings.cloudEnvironments.migrate`,
        defaultMessage: `Migrate`,
        description: `Button next to a legacy cloud environment that copies its configuration to a new cloud environment draft and starts onboarding`,
      })),
      (t[10] = p))
    : (p = t[10]);
  let m;
  return (
    t[11] !== d || t[12] !== f
      ? ((m = (0, Mt.jsx)(M, { color: `secondary`, disabled: d, size: `compact`, onClick: f, children: p })),
        (t[11] = d),
        (t[12] = f),
        (t[13] = m))
      : (m = t[13]),
    m
  );
}
var At, jt, Mt;
function Nt() {
  return (Nt = e(() => {
    ((At = v()),
      P(),
      (jt = s()),
      j(),
      h(),
      nt(),
      N(),
      et(),
      ut(),
      Oe(),
      I(),
      r(),
      Ke(),
      Ze(),
      ve(),
      (Mt = p()));
  }))();
}
function Pt(e) {
  let t = (0, It.c)(15),
    { selectedTab: n, search: r, children: i } = e,
    a = B(),
    o = E(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = (0, q.jsx)(Ft, {})), (t[0] = s)) : (s = t[0]);
  let c;
  t[1] === a
    ? (c = t[2])
    : ((c = a.formatMessage({
        id: `settings.legacyCodexCloud.tabs`,
        defaultMessage: `Legacy Codex Cloud settings`,
        description: `Accessible label for the Legacy Codex Cloud settings tabs`,
      })),
      (t[1] = a),
      (t[2] = c));
  let l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = {
        key: `environments`,
        name: (0, q.jsx)(H, {
          id: `settings.legacyCodexCloud.environments`,
          defaultMessage: `Environments`,
          description: `Tab showing legacy Codex Cloud environments`,
        }),
      }),
      (t[3] = l))
    : (l = t[3]);
  let u;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = [
        l,
        {
          key: `preferences`,
          name: (0, q.jsx)(H, {
            id: `settings.legacyCodexCloud.preferences`,
            defaultMessage: `Preferences`,
            description: `Tab showing legacy Codex Cloud preferences`,
          }),
        },
      ]),
      (t[4] = u))
    : (u = t[4]);
  let d;
  t[5] === o
    ? (d = t[6])
    : ((d = (e) =>
        void o(
          e === `environments`
            ? `/settings/cloud-environments`
            : `/settings/cloud-environments?tab=preferences`,
        )),
      (t[5] = o),
      (t[6] = d));
  let f;
  t[7] !== n || t[8] !== c || t[9] !== d
    ? ((f = (0, q.jsx)($e, { ariaLabel: c, selectedKey: n, tabs: u, variant: `toolbar`, onSelect: d })),
      (t[7] = n),
      (t[8] = c),
      (t[9] = d),
      (t[10] = f))
    : (f = t[10]);
  let p;
  return (
    t[11] !== i || t[12] !== r || t[13] !== f
      ? ((p = (0, q.jsxs)(`div`, {
          className: `flex flex-col gap-4`,
          children: [s, (0, q.jsx)(mt, { search: r, navigation: f, children: i })],
        })),
        (t[11] = i),
        (t[12] = r),
        (t[13] = f),
        (t[14] = p))
      : (p = t[14]),
    p
  );
}
function Ft() {
  let e = (0, It.c)(5),
    t,
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, q.jsx)(u, {})),
      (n = (0, q.jsx)(H, {
        id: `settings.legacyCodexCloud.noticeTitle`,
        defaultMessage: `A new Codex Cloud experience is here`,
        description: `Heading for the new Codex Cloud notice in legacy environment settings`,
      })),
      (e[0] = t),
      (e[1] = n))
    : ((t = e[0]), (n = e[1]));
  let r, i;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, q.jsx)(`p`, {
        children: (0, q.jsx)(H, {
          id: `settings.legacyCodexCloud.migrationNotice`,
          defaultMessage: `Legacy Cloud environments can be migrated to the new Cloud environments using the migration button.`,
          description: `Explains that users can migrate legacy Cloud environments using the migration button`,
        }),
      })),
      (i = (0, q.jsx)(`p`, {
        children: (0, q.jsx)(H, {
          id: `settings.legacyCodexCloud.legacyAvailability`,
          defaultMessage: `You can continue to create and manage legacy environments for Code Review and integrations such as Linear and GitHub. Your workspace's existing cloud access settings apply to both legacy and new Cloud Environments.`,
          description: `Explains continued legacy cloud environment support and shared workspace access settings`,
        }),
      })),
      (e[2] = r),
      (e[3] = i))
    : ((r = e[2]), (i = e[3]));
  let a;
  return (
    e[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, q.jsx)(me, {
          variant: `settings`,
          layout: `verticalIcon`,
          type: `caution`,
          icon: t,
          title: n,
          content: (0, q.jsxs)(`div`, {
            className: `flex flex-col gap-2`,
            children: [
              r,
              i,
              (0, q.jsx)(`div`, {
                children: (0, q.jsx)(xe, {
                  className: `cursor-interaction text-info hover:underline`,
                  href: `https://learn.chatgpt.com/docs/environments/cloud-environment`,
                  initiator: `external_link`,
                  children: (0, q.jsx)(H, {
                    id: `settings.legacyCodexCloud.learnAboutCloud`,
                    defaultMessage: `Learn about the new Cloud Environment experience`,
                    description: `Link to the new Cloud Environment documentation from legacy cloud settings`,
                  }),
                }),
              }),
            ],
          }),
        })),
        (e[4] = a))
      : (a = e[4]),
    a
  );
}
var It, q;
function Lt() {
  return (Lt = e(() => {
    ((It = v()), j(), h(), ge(), Xe(), C(), ze(), pt(), (q = p()));
  }))();
}
function Rt(e) {
  let n = (0, Vt.c)(50),
    { onCreateEnvironment: r, onEditEnvironment: i, onSelectEnvironment: o } = e,
    s = B(),
    c = ye(`375130565`),
    [l, u] = (0, Ht.useState)(``),
    d;
  n[0] === l ? (d = n[1]) : ((d = l.trim()), (n[0] = l), (n[1] = d));
  let f = Ee(d, 200),
    p;
  n[2] === f ? (p = n[3]) : ((p = Re(f)), (n[2] = f), (n[3] = p));
  let {
      data: m,
      fetchNextPage: h,
      hasNextPage: g,
      isFetchNextPageError: _,
      isFetchingNextPage: v,
      isPending: y,
      refetch: b,
    } = ne(p),
    x,
    S,
    C,
    w,
    T;
  if (
    n[4] !== f ||
    n[5] !== m ||
    n[6] !== g ||
    n[7] !== s ||
    n[8] !== y ||
    n[9] !== r ||
    n[10] !== i ||
    n[11] !== o ||
    n[12] !== b ||
    n[13] !== l ||
    n[14] !== c
  ) {
    let e = m?.pages.flatMap(zt) ?? [],
      d = e.sort(it),
      p =
        e.length > 0 || l !== ``
          ? {
              id: `cloud-environments-search`,
              label: s.formatMessage({
                id: `settings.cloudEnvironments.search.label`,
                defaultMessage: `Search cloud environments`,
                description: `Accessible label for cloud environment search`,
              }),
              maxLength: 128,
              onSearchQueryChange: u,
              placeholder: c
                ? s.formatMessage({
                    id: `settings.cloudEnvironments.search.toolbarPlaceholder`,
                    defaultMessage: `Search`,
                    description: `Placeholder for searching legacy cloud environments from the settings toolbar`,
                  })
                : s.formatMessage({
                    id: `settings.cloudEnvironments.search.placeholder`,
                    defaultMessage: `Search environments`,
                    description: `Placeholder for cloud environment search`,
                  }),
              searchQuery: l,
            }
          : null,
      h = c ? `toolbar` : void 0,
      _;
    n[20] === c
      ? (_ = n[21])
      : ((_ = c ? (0, J.jsx)(a, { "aria-hidden": !1, asset: se }) : null), (n[20] = c), (n[21] = _));
    let v;
    n[22] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((v = (0, J.jsx)(H, {
          id: `settings.cloudEnvironments.create.action`,
          defaultMessage: `Create environment`,
          description: `Button label for creating a cloud environment`,
        })),
        (n[22] = v))
      : (v = n[22]);
    let E;
    n[23] !== r || n[24] !== h || n[25] !== _
      ? ((E = (0, J.jsxs)(M, { color: `primary`, onClick: r, size: h, children: [_, v] })),
        (n[23] = r),
        (n[24] = h),
        (n[25] = _),
        (n[26] = E))
      : (E = n[26]);
    let D = E;
    ((x = U),
      (S = c ? void 0 : D),
      n[27] !== D || n[28] !== p || n[29] !== c
        ? ((C = c
            ? (0, J.jsx)(Pt, { selectedTab: `environments`, search: p, children: D })
            : p && (0, J.jsx)(Ye, { ...p })),
          (n[27] = D),
          (n[28] = p),
          (n[29] = c),
          (n[30] = C))
        : (C = n[30]),
      n[31] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((w = (0, J.jsx)(Ce, { slug: `cloud-environments` })), (n[31] = w))
        : (w = n[31]),
      (T = y
        ? (0, J.jsx)(De, {
            children:
              l === ``
                ? (0, J.jsx)(H, {
                    id: `settings.cloudEnvironments.list.loading`,
                    defaultMessage: `Loading cloud environments…`,
                    description: `Loading state for the cloud environments list`,
                  })
                : (0, J.jsx)(H, {
                    id: `settings.cloudEnvironments.list.searching`,
                    defaultMessage: `Searching cloud environments…`,
                    description: `Loading state while searching cloud environments`,
                  }),
          })
        : m == null
          ? (0, J.jsx)(t, {
              children: (0, J.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3 p-3`,
                children: [
                  (0, J.jsx)(H, {
                    id: `settings.cloudEnvironments.list.error`,
                    defaultMessage: `Unable to load cloud environments`,
                    description: `Error state for the cloud environments list`,
                  }),
                  (0, J.jsx)(M, {
                    color: `secondary`,
                    onClick: () => void b(),
                    size: `toolbar`,
                    children: (0, J.jsx)(H, {
                      id: `settings.cloudEnvironments.retry`,
                      defaultMessage: `Retry`,
                      description: `Button label to retry loading cloud environments`,
                    }),
                  }),
                ],
              }),
            })
          : d.length > 0 || !g
            ? (0, J.jsx)(t, {
                children:
                  d.length === 0
                    ? (0, J.jsx)(He, {
                        layout: `settings-row`,
                        children:
                          f === ``
                            ? (0, J.jsx)(H, {
                                id: `settings.cloudEnvironments.list.empty`,
                                defaultMessage: `No cloud environments yet`,
                                description: `Empty state for the cloud environments list`,
                              })
                            : (0, J.jsx)(H, {
                                id: `settings.cloudEnvironments.list.noResults`,
                                defaultMessage: `No matching cloud environments`,
                                description: `Search empty state for the cloud environments list`,
                              }),
                      })
                    : d.map((e) =>
                        (0, J.jsx)(
                          Bt,
                          { environment: e, onEdit: () => i(e.id), onSelect: () => o(e.id) },
                          e.id,
                        ),
                      ),
              })
            : null),
      (n[4] = f),
      (n[5] = m),
      (n[6] = g),
      (n[7] = s),
      (n[8] = y),
      (n[9] = r),
      (n[10] = i),
      (n[11] = o),
      (n[12] = b),
      (n[13] = l),
      (n[14] = c),
      (n[15] = x),
      (n[16] = S),
      (n[17] = C),
      (n[18] = w),
      (n[19] = T));
  } else ((x = n[15]), (S = n[16]), (C = n[17]), (w = n[18]), (T = n[19]));
  let E;
  n[32] !== m || n[33] !== h || n[34] !== g || n[35] !== _ || n[36] !== v
    ? ((E =
        m == null
          ? null
          : (0, J.jsx)(Ne, { hasNextPage: g && !_, isFetchingNextPage: v, onLoadNextPage: () => void h() })),
      (n[32] = m),
      (n[33] = h),
      (n[34] = g),
      (n[35] = _),
      (n[36] = v),
      (n[37] = E))
    : (E = n[37]);
  let D;
  n[38] !== m || n[39] !== h || n[40] !== _
    ? ((D =
        m != null && _
          ? (0, J.jsx)(t, {
              children: (0, J.jsx)(ue, {
                control: (0, J.jsx)(M, {
                  color: `secondary`,
                  onClick: () => void h(),
                  size: `toolbar`,
                  children: (0, J.jsx)(H, {
                    id: `settings.cloudEnvironments.pagination.retryButton`,
                    defaultMessage: `Retry`,
                    description: `Button label to retry cloud environment pagination`,
                  }),
                }),
                label: (0, J.jsx)(H, {
                  id: `settings.cloudEnvironments.pagination.error`,
                  defaultMessage: `Unable to load more cloud environments`,
                  description: `Error shown when loading another page of cloud environments fails`,
                }),
              }),
            })
          : null),
      (n[38] = m),
      (n[39] = h),
      (n[40] = _),
      (n[41] = D))
    : (D = n[41]);
  let O;
  return (
    n[42] !== x || n[43] !== S || n[44] !== C || n[45] !== w || n[46] !== T || n[47] !== E || n[48] !== D
      ? ((O = (0, J.jsxs)(x, { action: S, stickyControls: C, title: w, children: [T, E, D] })),
        (n[42] = x),
        (n[43] = S),
        (n[44] = C),
        (n[45] = w),
        (n[46] = T),
        (n[47] = E),
        (n[48] = D),
        (n[49] = O))
      : (O = n[49]),
    O
  );
}
function zt(e) {
  return e.items;
}
function Bt(e) {
  let t = (0, Vt.c)(25),
    { environment: n, onEdit: r, onSelect: i } = e,
    a = B(),
    o = n.permissions?.can_write === !0,
    s = z(we),
    c;
  t[0] === n ? (c = t[1]) : ((c = (0, J.jsx)(kt, { environment: n })), (t[0] = n), (t[1] = c));
  let l = c,
    u;
  t[2] !== o || t[3] !== s || t[4] !== l
    ? ((u = o && (s ? l : (0, J.jsx)(Je, { name: `codex.browser`, children: l }))),
      (t[2] = o),
      (t[3] = s),
      (t[4] = l),
      (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] !== o || t[7] !== a || t[8] !== r
    ? ((d = o
        ? (0, J.jsx)(`div`, {
            className: `invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100`,
            children: (0, J.jsx)(fe, {
              align: `end`,
              contentWidth: `menu`,
              triggerButton: (0, J.jsx)(he, {
                label: a.formatMessage({
                  id: `settings.cloudEnvironments.list.actions`,
                  defaultMessage: `Environment actions`,
                  description: `Accessible label for cloud environment row actions`,
                }),
                size: `xs`,
              }),
              children: (0, J.jsx)(le.Item, {
                leftIconAsset: ee,
                onSelect: r,
                children: (0, J.jsx)(H, {
                  id: `settings.cloudEnvironments.list.edit`,
                  defaultMessage: `Edit environment`,
                  description: `Menu item for editing a cloud environment`,
                }),
              }),
            }),
          })
        : null),
      (t[6] = o),
      (t[7] = a),
      (t[8] = r),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] !== u || t[11] !== d
    ? ((f = (0, J.jsxs)(J.Fragment, { children: [u, d] })), (t[10] = u), (t[11] = d), (t[12] = f))
    : (f = t[12]);
  let p;
  t[13] !== n.label || t[14] !== a
    ? ((p = a.formatMessage(
        {
          id: `settings.cloudEnvironments.list.open`,
          defaultMessage: `Open {environmentName}`,
          description: `Accessible label for opening a cloud environment`,
        },
        { environmentName: n.label },
      )),
      (t[13] = n.label),
      (t[14] = a),
      (t[15] = p))
    : (p = t[15]);
  let m;
  t[16] !== n.repo_map || t[17] !== n.repos
    ? ((m =
        n.repos.length > 0
          ? n.repos.map((e) => n.repo_map?.[e]?.repository_full_name ?? e).join(`, `)
          : (0, J.jsx)(H, {
              id: `settings.cloudEnvironments.list.noRepository`,
              defaultMessage: `No repository configured`,
              description: `Description for a cloud environment without a repository`,
            })),
      (t[16] = n.repo_map),
      (t[17] = n.repos),
      (t[18] = m))
    : (m = t[18]);
  let h;
  return (
    t[19] !== n.label || t[20] !== i || t[21] !== f || t[22] !== p || t[23] !== m
      ? ((h = (0, J.jsx)(ie, { actions: f, ariaLabel: p, description: m, label: n.label, onClick: i })),
        (t[19] = n.label),
        (t[20] = i),
        (t[21] = f),
        (t[22] = p),
        (t[23] = m),
        (t[24] = h))
      : (h = t[24]),
    h
  );
}
var Vt, Ht, J;
function Ut() {
  return (Ut = e(() => {
    ((Vt = v()),
      T(),
      de(),
      ae(),
      P(),
      (Ht = o()),
      j(),
      Ue(),
      be(),
      N(),
      R(),
      _(),
      rt(),
      Me(),
      w(),
      We(),
      Be(),
      ke(),
      pe(),
      Te(),
      te(),
      at(),
      Se(),
      Nt(),
      je(),
      ve(),
      Lt(),
      (J = p()));
  }))();
}
function Wt() {
  let e = (0, X.c)(35),
    t = D(),
    n = E(),
    r = ye(`375130565`),
    i;
  e[0] === n
    ? (i = e[1])
    : ((i = (e) => {
        n(e);
      }),
      (e[0] = n),
      (e[1] = i));
  let a = i,
    o;
  e[2] === t.pathname
    ? (o = e[3])
    : ((o = t.pathname.slice(28).split(`/`).filter(Gt)), (e[2] = t.pathname), (e[3] = o));
  let s = o,
    c = s.length === 1 && s[0] === `new`,
    l = s.length > 0 && s[0] !== `new` ? s[0] : null,
    u = l != null && s.length === 2 && s[1] === `edit`,
    d = l != null && s.length === 1;
  if (s.length === 0) {
    if (r && new URLSearchParams(t.search).get(`tab`) === `preferences`) {
      let t;
      return (
        e[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, Z.jsx)(U, {
              stickyControls: (0, Z.jsx)(Pt, { selectedTab: `preferences` }),
              title: (0, Z.jsx)(Ce, { slug: `cloud-environments` }),
              children: (0, Z.jsx)(vt, {}),
            })),
            (e[4] = t))
          : (t = e[4]),
        t
      );
    }
    let n;
    return (
      e[5] === a
        ? (n = e[6])
        : ((n = (0, Z.jsx)(Rt, {
            onCreateEnvironment: () => a(`${Q}/new`),
            onEditEnvironment: (e) => a(`${Q}/${e}/edit`),
            onSelectEnvironment: (e) => a(`${Q}/${e}`),
          })),
          (e[5] = a),
          (e[6] = n)),
      n
    );
  }
  if (c) {
    let t;
    e[7] === a
      ? (t = e[8])
      : ((t = (0, Z.jsx)(Y, { current: Yt, onRootClick: () => a(Q) })), (e[7] = a), (e[8] = t));
    let n;
    e[9] === a
      ? (n = e[10])
      : ((n = (0, Z.jsx)(gt, { environment: null, onCancel: () => a(Q), onSaved: (e) => a(`${Q}/${e}`) })),
        (e[9] = a),
        (e[10] = n));
    let r;
    return (
      e[11] !== t || e[12] !== n
        ? ((r = (0, Z.jsx)(U, { backSlot: t, title: Yt, children: n })),
          (e[11] = t),
          (e[12] = n),
          (e[13] = r))
        : (r = e[13]),
      r
    );
  }
  if (l != null && u) {
    let t;
    e[14] !== l || e[15] !== a
      ? ((t = () => a(`${Q}/${l}`)), (e[14] = l), (e[15] = a), (e[16] = t))
      : (t = e[16]);
    let n;
    e[17] === a ? (n = e[18]) : ((n = () => a(Q)), (e[17] = a), (e[18] = n));
    let r;
    return (
      e[19] !== l || e[20] !== t || e[21] !== n
        ? ((r = (0, Z.jsx)(qt, { environmentId: l, onBack: t, onRootClick: n })),
          (e[19] = l),
          (e[20] = t),
          (e[21] = n),
          (e[22] = r))
        : (r = e[22]),
      r
    );
  }
  if (l != null && d) {
    let t, n;
    e[23] === a
      ? ((t = e[24]), (n = e[25]))
      : ((t = () => a(Q)), (n = () => a(Q)), (e[23] = a), (e[24] = t), (e[25] = n));
    let r;
    e[26] !== l || e[27] !== a
      ? ((r = () => a(`${Q}/${l}/edit`)), (e[26] = l), (e[27] = a), (e[28] = r))
      : (r = e[28]);
    let i;
    return (
      e[29] !== l || e[30] !== t || e[31] !== n || e[32] !== r
        ? ((i = (0, Z.jsx)(Kt, { environmentId: l, onBack: t, onDeleted: n, onEdit: r })),
          (e[29] = l),
          (e[30] = t),
          (e[31] = n),
          (e[32] = r),
          (e[33] = i))
        : (i = e[33]),
      i
    );
  }
  let f;
  return (
    e[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, Z.jsx)(S, { to: Q, replace: !0 })), (e[34] = f))
      : (f = e[34]),
    f
  );
}
function Gt(e) {
  return e !== ``;
}
function Kt(e) {
  let r = (0, X.c)(51),
    { environmentId: o, onBack: s, onDeleted: c, onEdit: l } = e,
    u = n(b),
    d = B(),
    f = oe(Ge, o),
    p = z(Ve),
    m = z(tt),
    [h, g] = (0, Jt.useState)(null);
  if (f.isPending || f.isError) {
    let e;
    r[0] === s ? (e = r[1]) : ((e = (0, Z.jsx)(Y, { current: Xt, onRootClick: s })), (r[0] = s), (r[1] = e));
    let n;
    r[2] === f
      ? (n = r[3])
      : ((n = f.isPending
          ? (0, Z.jsx)(De, {
              children: (0, Z.jsx)(H, {
                id: `settings.cloudEnvironments.details.loading`,
                defaultMessage: `Loading environment…`,
                description: `Loading state for cloud environment details`,
              }),
            })
          : (0, Z.jsx)(t, {
              children: (0, Z.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3 p-3 text-sm text-secondary`,
                children: [
                  (0, Z.jsx)(H, {
                    id: `settings.cloudEnvironments.details.error`,
                    defaultMessage: `Unable to load this cloud environment`,
                    description: `Error state for cloud environment details`,
                  }),
                  (0, Z.jsx)(M, {
                    color: `secondary`,
                    onClick: () => void f.refetch(),
                    size: `toolbar`,
                    children: (0, Z.jsx)(H, {
                      id: `settings.cloudEnvironments.retry`,
                      defaultMessage: `Retry`,
                      description: `Button label to retry loading cloud environments`,
                    }),
                  }),
                ],
              }),
            })),
        (r[2] = f),
        (r[3] = n));
    let i;
    return (
      r[4] !== e || r[5] !== n
        ? ((i = (0, Z.jsx)(U, { backSlot: e, title: Xt, children: n })), (r[4] = e), (r[5] = n), (r[6] = i))
        : (i = r[6]),
      i
    );
  }
  let _ = f.data,
    v = _.permissions?.can_write === !0,
    x = _.permissions?.can_delete === !0,
    S = v && (_.cache_settings?.post_setup_cache_enabled ?? !0),
    C;
  r[7] === d
    ? (C = r[8])
    : ((C = d.formatMessage({
        id: `settings.cloudEnvironments.details.edit`,
        defaultMessage: `Edit environment`,
        description: `Tooltip for editing a cloud environment`,
      })),
      (r[7] = d),
      (r[8] = C));
  let w = C,
    T;
  r[9] !== x || r[10] !== v || r[11] !== S || r[12] !== w || r[13] !== d || r[14] !== l
    ? ((T =
        v || x
          ? (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                v
                  ? (0, Z.jsxs)(M, {
                      "aria-label": w,
                      color: `secondary`,
                      onClick: l,
                      size: `toolbar`,
                      children: [
                        (0, Z.jsx)(a, { "aria-hidden": !1, asset: ee }),
                        (0, Z.jsx)(H, {
                          id: `settings.cloudEnvironments.details.editAction`,
                          defaultMessage: `Edit`,
                          description: `Button label for editing a cloud environment`,
                        }),
                      ],
                    })
                  : null,
                x || S
                  ? (0, Z.jsxs)(fe, {
                      align: `end`,
                      contentWidth: `menu`,
                      triggerButton: (0, Z.jsx)(he, {
                        label: d.formatMessage({
                          id: `settings.cloudEnvironments.details.actions`,
                          defaultMessage: `Environment actions`,
                          description: `Accessible label for cloud environment actions`,
                        }),
                      }),
                      children: [
                        S
                          ? (0, Z.jsx)(le.Item, {
                              leftIconAsset: i,
                              onSelect: () => g(`reset-cache`),
                              children: (0, Z.jsx)(H, {
                                id: `settings.cloudEnvironments.details.resetCache`,
                                defaultMessage: `Reset cache`,
                                description: `Menu item for resetting a cloud environment cache`,
                              }),
                            })
                          : null,
                        x
                          ? (0, Z.jsx)(le.Item, {
                              leftIconAsset: y,
                              onSelect: () => g(`delete`),
                              children: (0, Z.jsx)(H, {
                                id: `settings.cloudEnvironments.details.delete`,
                                defaultMessage: `Delete environment`,
                                description: `Menu item for deleting a cloud environment`,
                              }),
                            })
                          : null,
                      ],
                    })
                  : null,
              ],
            })
          : null),
      (r[9] = x),
      (r[10] = v),
      (r[11] = S),
      (r[12] = w),
      (r[13] = d),
      (r[14] = l),
      (r[15] = T))
    : (T = r[15]);
  let E;
  r[16] !== _.label || r[17] !== s
    ? ((E = (0, Z.jsx)(Y, { current: _.label, onRootClick: s })), (r[16] = _.label), (r[17] = s), (r[18] = E))
    : (E = r[18]);
  let D = _.description || void 0,
    O;
  r[19] === _ ? (O = r[20]) : ((O = (0, Z.jsx)(yt, { environment: _ })), (r[19] = _), (r[20] = O));
  let k = h === `delete`,
    A;
  r[21] !== p || r[22] !== _.id || r[23] !== d || r[24] !== c || r[25] !== u
    ? ((A = () => {
        p.mutate(_.id, {
          onSuccess: () => {
            (u
              .get(V)
              .success(
                d.formatMessage({
                  id: `settings.cloudEnvironments.delete.success`,
                  defaultMessage: `Deleted cloud environment`,
                  description: `Toast shown after deleting a cloud environment`,
                }),
              ),
              c());
          },
          onError: () => {
            u.get(V).danger(
              d.formatMessage({
                id: `settings.cloudEnvironments.delete.error`,
                defaultMessage: `Unable to delete cloud environment`,
                description: `Toast shown when cloud environment deletion fails`,
              }),
              { errorAnalytics: { toastId: `settings.cloudEnvironments.delete.error` } },
            );
          },
        });
      }),
      (r[21] = p),
      (r[22] = _.id),
      (r[23] = d),
      (r[24] = c),
      (r[25] = u),
      (r[26] = A))
    : (A = r[26]);
  let j;
  r[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (e) => g(e ? `delete` : null)), (r[27] = j))
    : (j = r[27]);
  let N;
  r[28] !== p.isPending || r[29] !== _.label || r[30] !== k || r[31] !== A
    ? ((N = (0, Z.jsx)(Tt, {
        environmentName: _.label,
        isPending: p.isPending,
        open: k,
        onConfirm: A,
        onOpenChange: j,
      })),
      (r[28] = p.isPending),
      (r[29] = _.label),
      (r[30] = k),
      (r[31] = A),
      (r[32] = N))
    : (N = r[32]);
  let P = h === `reset-cache`,
    F;
  r[33] !== _.id || r[34] !== d || r[35] !== m || r[36] !== u
    ? ((F = () => {
        m.mutate(_.id, {
          onSuccess: () => {
            (g(null),
              u
                .get(V)
                .success(
                  d.formatMessage({
                    id: `settings.cloudEnvironments.resetCache.success`,
                    defaultMessage: `Reset cloud environment cache`,
                    description: `Toast shown after resetting a cloud environment cache`,
                  }),
                ));
          },
          onError: () => {
            u.get(V).danger(
              d.formatMessage({
                id: `settings.cloudEnvironments.resetCache.error`,
                defaultMessage: `Unable to reset cloud environment cache`,
                description: `Toast shown when resetting a cloud environment cache fails`,
              }),
              { errorAnalytics: { toastId: `settings.cloudEnvironments.resetCache.error` } },
            );
          },
        });
      }),
      (r[33] = _.id),
      (r[34] = d),
      (r[35] = m),
      (r[36] = u),
      (r[37] = F))
    : (F = r[37]);
  let I;
  r[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (e) => g(e ? `reset-cache` : null)), (r[38] = I))
    : (I = r[38]);
  let L;
  r[39] !== m.isPending || r[40] !== P || r[41] !== F
    ? ((L = (0, Z.jsx)(Et, { isPending: m.isPending, open: P, onConfirm: F, onOpenChange: I })),
      (r[39] = m.isPending),
      (r[40] = P),
      (r[41] = F),
      (r[42] = L))
    : (L = r[42]);
  let R;
  return (
    r[43] !== _.label ||
    r[44] !== L ||
    r[45] !== T ||
    r[46] !== E ||
    r[47] !== D ||
    r[48] !== O ||
    r[49] !== N
      ? ((R = (0, Z.jsxs)(U, { action: T, backSlot: E, subtitle: D, title: _.label, children: [O, N, L] })),
        (r[43] = _.label),
        (r[44] = L),
        (r[45] = T),
        (r[46] = E),
        (r[47] = D),
        (r[48] = O),
        (r[49] = N),
        (r[50] = R))
      : (R = r[50]),
    R
  );
}
function qt(e) {
  let t = (0, X.c)(24),
    { environmentId: n, onBack: r, onRootClick: i } = e,
    a = oe(Ge, n);
  if (a.isError) {
    let e = `${Q}/${n}`,
      r;
    return (
      t[0] === e ? (r = t[1]) : ((r = (0, Z.jsx)(S, { to: e, replace: !0 })), (t[0] = e), (t[1] = r)),
      r
    );
  }
  if (a.isPending) {
    let e;
    t[2] === r ? (e = t[3]) : ((e = { label: Xt, onClick: r }), (t[2] = r), (t[3] = e));
    let n;
    t[4] !== i || t[5] !== e
      ? ((n = (0, Z.jsx)(Y, { current: $, environment: e, onRootClick: i })),
        (t[4] = i),
        (t[5] = e),
        (t[6] = n))
      : (n = t[6]);
    let a;
    t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, Z.jsx)(De, {
          children: (0, Z.jsx)(H, {
            id: `settings.cloudEnvironments.edit.loading`,
            defaultMessage: `Loading environment…`,
            description: `Loading state for the cloud environment editor`,
          }),
        })),
        (t[7] = a))
      : (a = t[7]);
    let o;
    return (
      t[8] === n
        ? (o = t[9])
        : ((o = (0, Z.jsx)(U, { backSlot: n, title: $, children: a })), (t[8] = n), (t[9] = o)),
      o
    );
  }
  if (a.data.permissions?.can_write !== !0) {
    let e = `${Q}/${n}`,
      r;
    return (
      t[10] === e ? (r = t[11]) : ((r = (0, Z.jsx)(S, { to: e, replace: !0 })), (t[10] = e), (t[11] = r)),
      r
    );
  }
  let o;
  t[12] !== a.data.label || t[13] !== r
    ? ((o = { label: a.data.label, onClick: r }), (t[12] = a.data.label), (t[13] = r), (t[14] = o))
    : (o = t[14]);
  let s;
  t[15] !== i || t[16] !== o
    ? ((s = (0, Z.jsx)(Y, { current: $, environment: o, onRootClick: i })),
      (t[15] = i),
      (t[16] = o),
      (t[17] = s))
    : (s = t[17]);
  let c;
  t[18] !== a.data || t[19] !== r
    ? ((c = (0, Z.jsx)(gt, { environment: a.data, onCancel: r, onSaved: r }, a.data.id)),
      (t[18] = a.data),
      (t[19] = r),
      (t[20] = c))
    : (c = t[20]);
  let l;
  return (
    t[21] !== s || t[22] !== c
      ? ((l = (0, Z.jsx)(U, { backSlot: s, title: $, children: c })), (t[21] = s), (t[22] = c), (t[23] = l))
      : (l = t[23]),
    l
  );
}
function Y(e) {
  let t = (0, X.c)(13),
    { current: n, environment: r, onRootClick: i } = e,
    a = (0, Jt.useContext)(ot),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Z.jsx)(Ce, { slug: `cloud-environments` })), (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] !== i || t[2] !== a
    ? ((s = { id: `cloud-environments`, label: o, onClick: () => a(i) }), (t[1] = i), (t[2] = a), (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] !== r || t[5] !== a
    ? ((c = r == null ? [] : [{ id: `environment`, label: r.label, onClick: () => a(r.onClick) }]),
      (t[4] = r),
      (t[5] = a),
      (t[6] = c))
    : (c = t[6]);
  let l;
  t[7] !== s || t[8] !== c ? ((l = [s, ...c]), (t[7] = s), (t[8] = c), (t[9] = l)) : (l = t[9]);
  let u;
  return (
    t[10] !== n || t[11] !== l
      ? ((u = (0, Z.jsx)(ft, { ancestors: l, current: n })), (t[10] = n), (t[11] = l), (t[12] = u))
      : (u = t[12]),
    u
  );
}
var X, Jt, Z, Q, Yt, Xt, $;
function Zt() {
  return (Zt = e(() => {
    ((X = v()),
      g(),
      T(),
      F(),
      P(),
      (Jt = o()),
      j(),
      h(),
      Fe(),
      N(),
      R(),
      _(),
      w(),
      O(),
      dt(),
      r(),
      Be(),
      ke(),
      Te(),
      te(),
      at(),
      _t(),
      wt(),
      Ot(),
      ht(),
      Ut(),
      je(),
      Lt(),
      (Z = p()),
      (Q = `/settings/cloud-environments`),
      (Yt = (0, Z.jsx)(H, {
        id: `settings.cloudEnvironments.create.title`,
        defaultMessage: `Create cloud environment`,
        description: `Title for creating a cloud environment`,
      })),
      (Xt = (0, Z.jsx)(H, {
        id: `settings.cloudEnvironments.details.title`,
        defaultMessage: `Cloud environment`,
        description: `Title for cloud environment details`,
      })),
      ($ = (0, Z.jsx)(H, {
        id: `settings.cloudEnvironments.edit.title`,
        defaultMessage: `Edit cloud environment`,
        description: `Title for editing a cloud environment`,
      })));
  }))();
}
Zt();
export { Wt as CloudEnvironmentsSettingsPage };
//# sourceMappingURL=cloud-environments-settings-page-9ed5157db04d.js.map
