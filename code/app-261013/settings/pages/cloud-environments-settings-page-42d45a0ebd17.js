import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $C as n,
  $X as r,
  $v as i,
  AO as a,
  BU as o,
  CO as s,
  Cot as c,
  D2 as l,
  Ext as u,
  GE as d,
  HZ as f,
  IDt as p,
  Ixt as m,
  JC as h,
  Kat as g,
  Mot as _,
  Mz as v,
  Not as y,
  Nz as b,
  O2 as x,
  Pxt as S,
  QC as C,
  QJ as w,
  Qv as T,
  TDt as E,
  TJ as D,
  TO as O,
  VDt as k,
  VZ as A,
  Vxt as j,
  WE as M,
  ZJ as N,
  _O as P,
  _xt as F,
  cO as ee,
  eZ as I,
  fO as te,
  gO as L,
  hot as ne,
  iw as R,
  jDt as z,
  lot as B,
  mO as V,
  oO as H,
  oxt as re,
  qC as U,
  qat as ie,
  sO as ae,
  t3 as oe,
  tw as se,
  vO as ce,
  vzt as W,
  wot as le,
  wxt as ue,
  xMt as G,
  yMt as de,
  yzt as fe,
  zxt as pe,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8t as me,
  A8t as he,
  B2n as ge,
  Ek as _e,
  GMr as ve,
  I2n as ye,
  L2n as be,
  OPr as xe,
  Q8t as Se,
  QBt as Ce,
  R2n as we,
  Tk as K,
  U2n as Te,
  V2n as Ee,
  XBt as De,
  XMr as Oe,
  _F as ke,
  co as Ae,
  eDr as je,
  eF as Me,
  ean as Ne,
  fOn as Pe,
  hF as q,
  hp as Fe,
  j2n as Ie,
  j8t as Le,
  k2n as Re,
  kPr as ze,
  llt as Be,
  lo as Ve,
  mF as He,
  mp as Ue,
  n0 as We,
  nDr as Ge,
  omr as Ke,
  pF as qe,
  smr as Je,
  t0 as Ye,
  tF as Xe,
  tNr as Ze,
  tan as Qe,
  uOn as $e,
  ult as et,
  vCt as tt,
  xPn as nt,
  yCt as rt,
  yPn as it,
} from "./app-initial-5851df3f6cb1.js";
import { n as at, r as ot, t as st } from "./pending-onboarding-actions-703a14dcae8c.js";
import { n as ct, t as lt } from "./toolbar-breadcrumb-e1be94112dcb.js";
import { n as ut, t as dt } from "./cloud-settings-toolbar-4cc3387176b2.js";
import { n as ft, t as pt } from "./cloud-environment-editor-d9338cd07955.js";
import { r as mt, t as ht } from "./cloud-preferences-settings-c04168cf2ce0.js";
function gt(e) {
  let t = (0, bt.c)(42),
    { environment: r } = e,
    i;
  t[0] === r.setup
    ? (i = t[1])
    : ((i = (
        Array.isArray(r.setup)
          ? r.setup.join(`
`)
          : r.setup
      )?.trim()),
      (t[0] = r.setup),
      (t[1] = i));
  let a = !!i,
    o;
  t[2] === r.maintenance_setup
    ? (o = t[3])
    : ((o = (
        Array.isArray(r.maintenance_setup)
          ? r.maintenance_setup.join(`
`)
          : r.maintenance_setup
      )?.trim()),
      (t[2] = r.maintenance_setup),
      (t[3] = o));
  let s = !!o,
    c;
  t[4] === r.env_vars ? (c = t[5]) : ((c = Object.keys(r.env_vars)), (t[4] = r.env_vars), (t[5] = c));
  let l = c,
    u;
  if (t[6] !== r || t[7] !== l || t[8] !== s || t[9] !== a) {
    let e = yt(r),
      i;
    t[11] === r.repo_map
      ? (i = t[12])
      : ((i = (e) => r.repo_map?.[e]?.repository_full_name ?? e), (t[11] = r.repo_map), (t[12] = i));
    let o = r.repos.map(i),
      c = a || s || l.length > 0 || e.length > 0,
      d;
    t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, J.jsx)(p, {
          id: `settings.cloudEnvironments.details.configured`,
          defaultMessage: `Configured`,
          description: `Label for a configured cloud environment setting`,
        })),
        (t[13] = d))
      : (d = t[13]);
    let f = d,
      m;
    t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((m = (0, J.jsx)(p, {
          id: `settings.cloudEnvironments.details.repository`,
          defaultMessage: `Repository`,
          description: `Label for the repository in cloud environment details`,
        })),
        (t[14] = m))
      : (m = t[14]);
    let h =
        o.length > 0
          ? o.join(`, `)
          : (0, J.jsx)(p, {
              id: `settings.cloudEnvironments.list.noRepository`,
              defaultMessage: `No repository configured`,
              description: `Description for a cloud environment without a repository`,
            }),
      g;
    t[15] === h
      ? (g = t[16])
      : ((g = (0, J.jsx)(n, { label: m, valueAlignment: `end`, children: h })), (t[15] = h), (t[16] = g));
    let _;
    t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((_ = (0, J.jsx)(p, {
          id: `settings.cloudEnvironments.details.machine`,
          defaultMessage: `Machine`,
          description: `Label for the machine in cloud environment details`,
        })),
        (t[17] = _))
      : (_ = t[17]);
    let v;
    t[18] === r.machine.label
      ? (v = t[19])
      : ((v = (0, J.jsx)(n, { label: _, valueAlignment: `end`, children: r.machine.label })),
        (t[18] = r.machine.label),
        (t[19] = v));
    let y;
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((y = (0, J.jsx)(p, {
          id: `settings.cloudEnvironments.details.creator`,
          defaultMessage: `Created by`,
          description: `Label for the creator in cloud environment details`,
        })),
        (t[20] = y))
      : (y = t[20]);
    let b = r.creator.name || r.creator.email,
      x;
    t[21] === b
      ? (x = t[22])
      : ((x = (0, J.jsx)(n, { label: y, valueAlignment: `end`, children: b })), (t[21] = b), (t[22] = x));
    let S;
    t[23] === r.created_at
      ? (S = t[24])
      : ((S =
          r.created_at == null
            ? null
            : (0, J.jsx)(n, {
                label: (0, J.jsx)(p, {
                  id: `settings.cloudEnvironments.details.created`,
                  defaultMessage: `Created`,
                  description: `Label for the creation date in cloud environment details`,
                }),
                valueAlignment: `end`,
                children: (0, J.jsx)(E, {
                  day: `numeric`,
                  month: `short`,
                  value: r.created_at * 1e3,
                  year: `numeric`,
                }),
              })),
        (t[23] = r.created_at),
        (t[24] = S));
    let C;
    t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((C = (0, J.jsx)(p, {
          id: `settings.cloudEnvironments.details.network`,
          defaultMessage: `Network access`,
          description: `Label for network access in cloud environment details`,
        })),
        (t[25] = C))
      : (C = t[25]);
    let w = r.agent_network_access?.mode,
      T;
    t[26] === w ? (T = t[27]) : ((T = _t(w)), (t[26] = w), (t[27] = T));
    let D;
    t[28] === T
      ? (D = t[29])
      : ((D = (0, J.jsx)(n, { label: C, valueAlignment: `end`, children: T })), (t[28] = T), (t[29] = D));
    let O;
    t[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((O = (0, J.jsx)(p, {
          id: `settings.cloudEnvironments.details.sharing`,
          defaultMessage: `Sharing`,
          description: `Label for cloud environment sharing`,
        })),
        (t[30] = O))
      : (O = t[30]);
    let k;
    t[31] === r.share_settings
      ? (k = t[32])
      : ((k = vt(r.share_settings)), (t[31] = r.share_settings), (t[32] = k));
    let A;
    t[33] === k
      ? (A = t[34])
      : ((A = (0, J.jsx)(n, { label: O, valueAlignment: `end`, children: k })), (t[33] = k), (t[34] = A));
    let j;
    (t[35] !== v || t[36] !== x || t[37] !== S || t[38] !== D || t[39] !== A || t[40] !== g
      ? ((j = (0, J.jsx)(K, {
          children: (0, J.jsx)(K.Content, { children: (0, J.jsxs)(U, { children: [g, v, x, S, D, A] }) }),
        })),
        (t[35] = v),
        (t[36] = x),
        (t[37] = S),
        (t[38] = D),
        (t[39] = A),
        (t[40] = g),
        (t[41] = j))
      : (j = t[41]),
      (u = (0, J.jsxs)(J.Fragment, {
        children: [
          j,
          c
            ? (0, J.jsxs)(K, {
                children: [
                  (0, J.jsx)(K.Header, {
                    title: (0, J.jsx)(p, {
                      id: `settings.cloudEnvironments.details.configuration`,
                      defaultMessage: `Configuration`,
                      description: `Heading for cloud environment configuration details`,
                    }),
                  }),
                  (0, J.jsx)(K.Content, {
                    children: (0, J.jsxs)(U, {
                      children: [
                        a
                          ? (0, J.jsx)(n, {
                              label: (0, J.jsx)(p, {
                                id: `settings.cloudEnvironments.details.setup`,
                                defaultMessage: `Setup script`,
                                description: `Label for the setup script in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: f,
                            })
                          : null,
                        s
                          ? (0, J.jsx)(n, {
                              label: (0, J.jsx)(p, {
                                id: `settings.cloudEnvironments.details.maintenance`,
                                defaultMessage: `Maintenance script`,
                                description: `Label for the maintenance script in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: f,
                            })
                          : null,
                        l.length > 0
                          ? (0, J.jsx)(n, {
                              label: (0, J.jsx)(p, {
                                id: `settings.cloudEnvironments.details.environmentVariables`,
                                defaultMessage: `Environment variables`,
                                description: `Label for environment variables in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: l.join(`, `),
                            })
                          : null,
                        e.length > 0
                          ? (0, J.jsx)(n, {
                              label: (0, J.jsx)(p, {
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
      (t[6] = r),
      (t[7] = l),
      (t[8] = s),
      (t[9] = a),
      (t[10] = u));
  } else u = t[10];
  return u;
}
function _t(e) {
  switch (e) {
    case `custom`:
      return (0, J.jsx)(p, {
        id: `settings.cloudEnvironments.network.custom`,
        defaultMessage: `Custom`,
        description: `Label for custom cloud environment network access`,
      });
    case `on`:
      return (0, J.jsx)(p, {
        id: `settings.cloudEnvironments.network.on`,
        defaultMessage: `On`,
        description: `Label for enabled cloud environment network access`,
      });
    case `off`:
    case void 0:
      return (0, J.jsx)(p, {
        id: `settings.cloudEnvironments.network.off`,
        defaultMessage: `Off`,
        description: `Label for disabled cloud environment network access`,
      });
  }
}
function vt(e) {
  switch (e) {
    case `private`:
      return (0, J.jsx)(p, {
        id: `settings.cloudEnvironments.sharing.private`,
        defaultMessage: `Private`,
        description: `Label for a private cloud environment`,
      });
    case `public`:
      return (0, J.jsx)(p, {
        id: `settings.cloudEnvironments.sharing.public`,
        defaultMessage: `Public`,
        description: `Label for a public cloud environment`,
      });
    case `workspace`:
      return (0, J.jsx)(p, {
        id: `settings.cloudEnvironments.sharing.workspace`,
        defaultMessage: `Workspace`,
        description: `Label for a workspace cloud environment`,
      });
  }
}
function yt(e) {
  let t = Object.keys(e.secrets ?? {});
  return t.length > 0 ? t : (e.secrets_with_domains ?? []).flatMap(({ name: e }) => (e == null ? [] : [e]));
}
var bt, J;
function xt() {
  return (xt = e(() => {
    ((bt = W()), z(), _e(), R(), h(), (J = G()));
  }))();
}
function St(e) {
  let n = (0, wt.c)(27),
    { environmentName: r, isPending: i, open: a, onConfirm: o, onOpenChange: s } = e,
    c;
  n[0] === o
    ? (c = n[1])
    : ((c = (e) => {
        (e.preventDefault(), o());
      }),
      (n[0] = o),
      (n[1] = c));
  let l;
  n[2] === r
    ? (l = n[3])
    : ((l = (0, Y.jsx)(P, {
        children: (0, Y.jsx)(p, {
          id: `settings.cloudEnvironments.delete.title`,
          defaultMessage: `Delete {environmentName}?`,
          description: `Title for the cloud environment deletion confirmation`,
          values: { environmentName: r },
        }),
      })),
      (n[2] = r),
      (n[3] = l));
  let u;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Y.jsx)(L, {
        className: `contents`,
        children: (0, Y.jsx)(p, {
          id: `settings.cloudEnvironments.delete.description`,
          defaultMessage: `Existing chats will remain, but you will not be able to create follow-ups with this environment`,
          description: `Description for the cloud environment deletion confirmation`,
        }),
      })),
      (n[4] = u))
    : (u = n[4]);
  let d;
  n[5] === l ? (d = n[6]) : ((d = (0, Y.jsx)(ee, { title: l, subtitle: u })), (n[5] = l), (n[6] = d));
  let f;
  n[7] === s ? (f = n[8]) : ((f = () => s(!1)), (n[7] = s), (n[8] = f));
  let m;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Y.jsx)(p, {
        id: `settings.cloudEnvironments.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label for cancelling a cloud environment action`,
      })),
      (n[9] = m))
    : (m = n[9]);
  let h;
  n[10] !== i || n[11] !== f
    ? ((h = (0, Y.jsx)(t, { color: `secondary`, disabled: i, onClick: f, type: `button`, children: m })),
      (n[10] = i),
      (n[11] = f),
      (n[12] = h))
    : (h = n[12]);
  let g;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Y.jsx)(p, {
        id: `settings.cloudEnvironments.delete.confirm`,
        defaultMessage: `Delete environment`,
        description: `Button label for confirming cloud environment deletion`,
      })),
      (n[13] = g))
    : (g = n[13]);
  let _;
  n[14] === i
    ? (_ = n[15])
    : ((_ = (0, Y.jsx)(t, { color: `danger`, loading: i, type: `submit`, children: g })),
      (n[14] = i),
      (n[15] = _));
  let v;
  n[16] !== h || n[17] !== _
    ? ((v = (0, Y.jsxs)(ae, { children: [h, _] })), (n[16] = h), (n[17] = _), (n[18] = v))
    : (v = n[18]);
  let y;
  n[19] !== c || n[20] !== v || n[21] !== d
    ? ((y = (0, Y.jsxs)(H, { as: `form`, onSubmit: c, children: [d, v] })),
      (n[19] = c),
      (n[20] = v),
      (n[21] = d),
      (n[22] = y))
    : (y = n[22]);
  let b;
  return (
    n[23] !== s || n[24] !== a || n[25] !== y
      ? ((b = (0, Y.jsx)(V, { open: a, onOpenChange: s, children: y })),
        (n[23] = s),
        (n[24] = a),
        (n[25] = y),
        (n[26] = b))
      : (b = n[26]),
    b
  );
}
function Ct(e) {
  let n = (0, wt.c)(23),
    { isPending: r, open: i, onConfirm: a, onOpenChange: o } = e,
    s;
  n[0] === a
    ? (s = n[1])
    : ((s = (e) => {
        (e.preventDefault(), a());
      }),
      (n[0] = a),
      (n[1] = s));
  let c;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Y.jsx)(P, {
        children: (0, Y.jsx)(p, {
          id: `settings.cloudEnvironments.resetCache.title`,
          defaultMessage: `Reset cached containers?`,
          description: `Title for the cloud environment cache reset confirmation`,
        }),
      })),
      (n[2] = c))
    : (c = n[2]);
  let l;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Y.jsx)(ee, {
        title: c,
        subtitle: (0, Y.jsx)(L, {
          className: `contents`,
          children: (0, Y.jsx)(p, {
            id: `settings.cloudEnvironments.resetCache.description`,
            defaultMessage: `This invalidates all cached containers for this environment and all users`,
            description: `Description for the cloud environment cache reset confirmation`,
          }),
        }),
      })),
      (n[3] = l))
    : (l = n[3]);
  let u;
  n[4] === o ? (u = n[5]) : ((u = () => o(!1)), (n[4] = o), (n[5] = u));
  let d;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Y.jsx)(p, {
        id: `settings.cloudEnvironments.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label for cancelling a cloud environment action`,
      })),
      (n[6] = d))
    : (d = n[6]);
  let f;
  n[7] !== r || n[8] !== u
    ? ((f = (0, Y.jsx)(t, { color: `secondary`, disabled: r, onClick: u, type: `button`, children: d })),
      (n[7] = r),
      (n[8] = u),
      (n[9] = f))
    : (f = n[9]);
  let m;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Y.jsx)(p, {
        id: `settings.cloudEnvironments.resetCache.confirm`,
        defaultMessage: `Reset cache`,
        description: `Button label for confirming a cloud environment cache reset`,
      })),
      (n[10] = m))
    : (m = n[10]);
  let h;
  n[11] === r
    ? (h = n[12])
    : ((h = (0, Y.jsx)(t, { color: `primary`, loading: r, type: `submit`, children: m })),
      (n[11] = r),
      (n[12] = h));
  let g;
  n[13] !== f || n[14] !== h
    ? ((g = (0, Y.jsxs)(ae, { children: [f, h] })), (n[13] = f), (n[14] = h), (n[15] = g))
    : (g = n[15]);
  let _;
  n[16] !== s || n[17] !== g
    ? ((_ = (0, Y.jsxs)(H, { as: `form`, onSubmit: s, children: [l, g] })),
      (n[16] = s),
      (n[17] = g),
      (n[18] = _))
    : (_ = n[18]);
  let v;
  return (
    n[19] !== o || n[20] !== i || n[21] !== _
      ? ((v = (0, Y.jsx)(V, { open: i, onOpenChange: o, children: _ })),
        (n[19] = o),
        (n[20] = i),
        (n[21] = _),
        (n[22] = v))
      : (v = n[22]),
    v
  );
}
var wt, Y;
function Tt() {
  return (Tt = e(() => {
    ((wt = W()), z(), oe(), ce(), te(), (Y = G()));
  }))();
}
function Et(e) {
  let n = (0, Dt.c)(14),
    { environment: r } = e,
    i = m(c),
    a = k(),
    o = u(),
    s = rt(),
    { modelSettings: l } = Ce(),
    d = j(ve),
    f = j(Oe);
  if (!pe(ze, `375130565`) || g?.environmentConfigs == null || !ge(r)) return null;
  let h = l.isLoading || d == null || f == null,
    _;
  n[0] !== r.id ||
  n[1] !== r.label ||
  n[2] !== r.repo_map ||
  n[3] !== r.repos ||
  n[4] !== a ||
  n[5] !== l ||
  n[6] !== o ||
  n[7] !== s ||
  n[8] !== i
    ? ((_ = () => {
        let e = at(i, a, {
          name: r.label,
          legacyEnvironmentId: r.id,
          repositoryNamesById: Object.fromEntries(
            r.repos.map((e) => [e, r.repo_map?.[e]?.repository_full_name ?? e]),
          ),
          modelSettings: l,
        });
        ((0, Ot.flushSync)(() => {
          s(e, Ke());
        }),
          ot(i, a, o, e));
      }),
      (n[0] = r.id),
      (n[1] = r.label),
      (n[2] = r.repo_map),
      (n[3] = r.repos),
      (n[4] = a),
      (n[5] = l),
      (n[6] = o),
      (n[7] = s),
      (n[8] = i),
      (n[9] = _))
    : (_ = n[9]);
  let v;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, kt.jsx)(p, {
        id: `settings.cloudEnvironments.migrate`,
        defaultMessage: `Migrate`,
        description: `Button next to a legacy cloud environment that copies its configuration to a new cloud environment draft and starts onboarding`,
      })),
      (n[10] = v))
    : (v = n[10]);
  let y;
  return (
    n[11] !== h || n[12] !== _
      ? ((y = (0, kt.jsx)(t, { color: `secondary`, disabled: h, size: `compact`, onClick: _, children: v })),
        (n[11] = h),
        (n[12] = _),
        (n[13] = y))
      : (y = n[13]),
    y
  );
}
var Dt, Ot, kt;
function At() {
  return (At = e(() => {
    ((Dt = W()),
      S(),
      (Ot = de()),
      z(),
      F(),
      Ze(),
      oe(),
      Je(),
      st(),
      De(),
      ie(),
      le(),
      xe(),
      tt(),
      Te(),
      (kt = G()));
  }))();
}
function jt(e) {
  let t = (0, Nt.c)(15),
    { selectedTab: n, search: r, children: i } = e,
    a = k(),
    o = u(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = (0, X.jsx)(Mt, {})), (t[0] = s)) : (s = t[0]);
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
        name: (0, X.jsx)(p, {
          id: `settings.legacyCodexCloud.environments`,
          defaultMessage: `Environments`,
          description: `Tab showing legacy Codex Cloud environments`,
        }),
      }),
      (t[3] = l))
    : (l = t[3]);
  let d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = [
        l,
        {
          key: `preferences`,
          name: (0, X.jsx)(p, {
            id: `settings.legacyCodexCloud.preferences`,
            defaultMessage: `Preferences`,
            description: `Tab showing legacy Codex Cloud preferences`,
          }),
        },
      ]),
      (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === o
    ? (f = t[6])
    : ((f = (e) =>
        void o(
          e === `environments`
            ? `/settings/cloud-environments`
            : `/settings/cloud-environments?tab=preferences`,
        )),
      (t[5] = o),
      (t[6] = f));
  let m;
  t[7] !== n || t[8] !== c || t[9] !== f
    ? ((m = (0, X.jsx)(Ae, { ariaLabel: c, selectedKey: n, tabs: d, variant: `toolbar`, onSelect: f })),
      (t[7] = n),
      (t[8] = c),
      (t[9] = f),
      (t[10] = m))
    : (m = t[10]);
  let h;
  return (
    t[11] !== i || t[12] !== r || t[13] !== m
      ? ((h = (0, X.jsxs)(`div`, {
          className: `flex flex-col gap-4`,
          children: [s, (0, X.jsx)(dt, { search: r, navigation: m, children: i })],
        })),
        (t[11] = i),
        (t[12] = r),
        (t[13] = m),
        (t[14] = h))
      : (h = t[14]),
    h
  );
}
function Mt() {
  let e = (0, Nt.c)(5),
    t,
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, X.jsx)(o, {})),
      (n = (0, X.jsx)(p, {
        id: `settings.legacyCodexCloud.noticeTitle`,
        defaultMessage: `A new Codex Cloud experience is here`,
        description: `Heading for the new Codex Cloud notice in legacy environment settings`,
      })),
      (e[0] = t),
      (e[1] = n))
    : ((t = e[0]), (n = e[1]));
  let r, i;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, X.jsx)(`p`, {
        children: (0, X.jsx)(p, {
          id: `settings.legacyCodexCloud.migrationNotice`,
          defaultMessage: `Legacy Cloud environments can be migrated to the new Cloud environments using the migration button.`,
          description: `Explains that users can migrate legacy Cloud environments using the migration button`,
        }),
      })),
      (i = (0, X.jsx)(`p`, {
        children: (0, X.jsx)(p, {
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
      ? ((a = (0, X.jsx)(M, {
          variant: `settings`,
          layout: `verticalIcon`,
          type: `caution`,
          icon: t,
          title: n,
          content: (0, X.jsxs)(`div`, {
            className: `flex flex-col gap-2`,
            children: [
              r,
              i,
              (0, X.jsx)(`div`, {
                children: (0, X.jsx)(it, {
                  className: `cursor-interaction text-info hover:underline`,
                  href: `https://learn.chatgpt.com/docs/environments/cloud-environment`,
                  initiator: `external_link`,
                  children: (0, X.jsx)(p, {
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
var Nt, X;
function Pt() {
  return (Pt = e(() => {
    ((Nt = W()), z(), F(), d(), nt(), D(), Ve(), ut(), (X = G()));
  }))();
}
function Ft(e) {
  let n = (0, Rt.c)(50),
    { onCreateEnvironment: r, onEditEnvironment: i, onSelectEnvironment: a } = e,
    o = k(),
    s = Ge(`375130565`),
    [c, l] = (0, zt.useState)(``),
    u;
  n[0] === c ? (u = n[1]) : ((u = c.trim()), (n[0] = c), (n[1] = u));
  let d = Qe(u, 200),
    f;
  n[2] === d ? (f = n[3]) : ((f = Ie(d)), (n[2] = d), (n[3] = f));
  let {
      data: m,
      fetchNextPage: h,
      hasNextPage: g,
      isFetchNextPageError: _,
      isFetchingNextPage: b,
      isPending: x,
      refetch: S,
    } = y(f),
    C,
    w,
    T,
    E,
    D;
  if (
    n[4] !== d ||
    n[5] !== m ||
    n[6] !== g ||
    n[7] !== o ||
    n[8] !== x ||
    n[9] !== r ||
    n[10] !== i ||
    n[11] !== a ||
    n[12] !== S ||
    n[13] !== c ||
    n[14] !== s
  ) {
    let e = m?.pages.flatMap(It) ?? [],
      u = e.sort(Ee),
      f =
        e.length > 0 || c !== ``
          ? {
              id: `cloud-environments-search`,
              label: o.formatMessage({
                id: `settings.cloudEnvironments.search.label`,
                defaultMessage: `Search cloud environments`,
                description: `Accessible label for cloud environment search`,
              }),
              maxLength: 128,
              onSearchQueryChange: l,
              placeholder: s
                ? o.formatMessage({
                    id: `settings.cloudEnvironments.search.toolbarPlaceholder`,
                    defaultMessage: `Search`,
                    description: `Placeholder for searching legacy cloud environments from the settings toolbar`,
                  })
                : o.formatMessage({
                    id: `settings.cloudEnvironments.search.placeholder`,
                    defaultMessage: `Search environments`,
                    description: `Placeholder for cloud environment search`,
                  }),
              searchQuery: c,
            }
          : null,
      h = s ? `toolbar` : void 0,
      _;
    n[20] === s
      ? (_ = n[21])
      : ((_ = s ? (0, Z.jsx)(v, { "aria-hidden": !1, asset: I }) : null), (n[20] = s), (n[21] = _));
    let y;
    n[22] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((y = (0, Z.jsx)(p, {
          id: `settings.cloudEnvironments.create.action`,
          defaultMessage: `Create environment`,
          description: `Button label for creating a cloud environment`,
        })),
        (n[22] = y))
      : (y = n[22]);
    let b;
    n[23] !== r || n[24] !== h || n[25] !== _
      ? ((b = (0, Z.jsxs)(t, { color: `primary`, onClick: r, size: h, children: [_, y] })),
        (n[23] = r),
        (n[24] = h),
        (n[25] = _),
        (n[26] = b))
      : (b = n[26]);
    let O = b;
    ((C = q),
      (w = s ? void 0 : O),
      n[27] !== O || n[28] !== f || n[29] !== s
        ? ((T = s
            ? (0, Z.jsx)(jt, { selectedTab: `environments`, search: f, children: O })
            : f && (0, Z.jsx)(Be, { ...f })),
          (n[27] = O),
          (n[28] = f),
          (n[29] = s),
          (n[30] = T))
        : (T = n[30]),
      n[31] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((E = (0, Z.jsx)(Me, { slug: `cloud-environments` })), (n[31] = E))
        : (E = n[31]),
      (D = x
        ? (0, Z.jsx)(qe, {
            children:
              c === ``
                ? (0, Z.jsx)(p, {
                    id: `settings.cloudEnvironments.list.loading`,
                    defaultMessage: `Loading cloud environments…`,
                    description: `Loading state for the cloud environments list`,
                  })
                : (0, Z.jsx)(p, {
                    id: `settings.cloudEnvironments.list.searching`,
                    defaultMessage: `Searching cloud environments…`,
                    description: `Loading state while searching cloud environments`,
                  }),
          })
        : m == null
          ? (0, Z.jsx)(U, {
              children: (0, Z.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3 p-3`,
                children: [
                  (0, Z.jsx)(p, {
                    id: `settings.cloudEnvironments.list.error`,
                    defaultMessage: `Unable to load cloud environments`,
                    description: `Error state for the cloud environments list`,
                  }),
                  (0, Z.jsx)(t, {
                    color: `secondary`,
                    onClick: () => void S(),
                    size: `toolbar`,
                    children: (0, Z.jsx)(p, {
                      id: `settings.cloudEnvironments.retry`,
                      defaultMessage: `Retry`,
                      description: `Button label to retry loading cloud environments`,
                    }),
                  }),
                ],
              }),
            })
          : u.length > 0 || !g
            ? (0, Z.jsx)(U, {
                children:
                  u.length === 0
                    ? (0, Z.jsx)(Ue, {
                        layout: `settings-row`,
                        children:
                          d === ``
                            ? (0, Z.jsx)(p, {
                                id: `settings.cloudEnvironments.list.empty`,
                                defaultMessage: `No cloud environments yet`,
                                description: `Empty state for the cloud environments list`,
                              })
                            : (0, Z.jsx)(p, {
                                id: `settings.cloudEnvironments.list.noResults`,
                                defaultMessage: `No matching cloud environments`,
                                description: `Search empty state for the cloud environments list`,
                              }),
                      })
                    : u.map((e) =>
                        (0, Z.jsx)(
                          Lt,
                          { environment: e, onEdit: () => i(e.id), onSelect: () => a(e.id) },
                          e.id,
                        ),
                      ),
              })
            : null),
      (n[4] = d),
      (n[5] = m),
      (n[6] = g),
      (n[7] = o),
      (n[8] = x),
      (n[9] = r),
      (n[10] = i),
      (n[11] = a),
      (n[12] = S),
      (n[13] = c),
      (n[14] = s),
      (n[15] = C),
      (n[16] = w),
      (n[17] = T),
      (n[18] = E),
      (n[19] = D));
  } else ((C = n[15]), (w = n[16]), (T = n[17]), (E = n[18]), (D = n[19]));
  let O;
  n[32] !== m || n[33] !== h || n[34] !== g || n[35] !== _ || n[36] !== b
    ? ((O =
        m == null
          ? null
          : (0, Z.jsx)(Ye, { hasNextPage: g && !_, isFetchingNextPage: b, onLoadNextPage: () => void h() })),
      (n[32] = m),
      (n[33] = h),
      (n[34] = g),
      (n[35] = _),
      (n[36] = b),
      (n[37] = O))
    : (O = n[37]);
  let A;
  n[38] !== m || n[39] !== h || n[40] !== _
    ? ((A =
        m != null && _
          ? (0, Z.jsx)(U, {
              children: (0, Z.jsx)(se, {
                control: (0, Z.jsx)(t, {
                  color: `secondary`,
                  onClick: () => void h(),
                  size: `toolbar`,
                  children: (0, Z.jsx)(p, {
                    id: `settings.cloudEnvironments.pagination.retryButton`,
                    defaultMessage: `Retry`,
                    description: `Button label to retry cloud environment pagination`,
                  }),
                }),
                label: (0, Z.jsx)(p, {
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
      (n[41] = A))
    : (A = n[41]);
  let j;
  return (
    n[42] !== C || n[43] !== w || n[44] !== T || n[45] !== E || n[46] !== D || n[47] !== O || n[48] !== A
      ? ((j = (0, Z.jsxs)(C, { action: w, stickyControls: T, title: E, children: [D, O, A] })),
        (n[42] = C),
        (n[43] = w),
        (n[44] = T),
        (n[45] = E),
        (n[46] = D),
        (n[47] = O),
        (n[48] = A),
        (n[49] = j))
      : (j = n[49]),
    j
  );
}
function It(e) {
  return e.items;
}
function Lt(e) {
  let t = (0, Rt.c)(25),
    { environment: n, onEdit: r, onSelect: i } = e,
    a = k(),
    o = n.permissions?.can_write === !0,
    c = j($e),
    l;
  t[0] === n ? (l = t[1]) : ((l = (0, Z.jsx)(Et, { environment: n })), (t[0] = n), (t[1] = l));
  let u = l,
    d;
  t[2] !== o || t[3] !== c || t[4] !== u
    ? ((d = o && (c ? u : (0, Z.jsx)(he, { name: `codex.browser`, children: u }))),
      (t[2] = o),
      (t[3] = c),
      (t[4] = u),
      (t[5] = d))
    : (d = t[5]);
  let m;
  t[6] !== o || t[7] !== a || t[8] !== r
    ? ((m = o
        ? (0, Z.jsx)(`div`, {
            className: `invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100`,
            children: (0, Z.jsx)(s, {
              align: `end`,
              contentWidth: `menu`,
              triggerButton: (0, Z.jsx)(T, {
                label: a.formatMessage({
                  id: `settings.cloudEnvironments.list.actions`,
                  defaultMessage: `Environment actions`,
                  description: `Accessible label for cloud environment row actions`,
                }),
                size: `xs`,
              }),
              children: (0, Z.jsx)(O.Item, {
                leftIconAsset: f,
                onSelect: r,
                children: (0, Z.jsx)(p, {
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
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] !== d || t[11] !== m
    ? ((h = (0, Z.jsxs)(Z.Fragment, { children: [d, m] })), (t[10] = d), (t[11] = m), (t[12] = h))
    : (h = t[12]);
  let g;
  t[13] !== n.label || t[14] !== a
    ? ((g = a.formatMessage(
        {
          id: `settings.cloudEnvironments.list.open`,
          defaultMessage: `Open {environmentName}`,
          description: `Accessible label for opening a cloud environment`,
        },
        { environmentName: n.label },
      )),
      (t[13] = n.label),
      (t[14] = a),
      (t[15] = g))
    : (g = t[15]);
  let _;
  t[16] !== n.repo_map || t[17] !== n.repos
    ? ((_ =
        n.repos.length > 0
          ? n.repos.map((e) => n.repo_map?.[e]?.repository_full_name ?? e).join(`, `)
          : (0, Z.jsx)(p, {
              id: `settings.cloudEnvironments.list.noRepository`,
              defaultMessage: `No repository configured`,
              description: `Description for a cloud environment without a repository`,
            })),
      (t[16] = n.repo_map),
      (t[17] = n.repos),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  return (
    t[19] !== n.label || t[20] !== i || t[21] !== h || t[22] !== g || t[23] !== _
      ? ((v = (0, Z.jsx)(C, { actions: h, ariaLabel: g, description: _, label: n.label, onClick: i })),
        (t[19] = n.label),
        (t[20] = i),
        (t[21] = h),
        (t[22] = g),
        (t[23] = _),
        (t[24] = v))
      : (v = t[24]),
    v
  );
}
var Rt, zt, Z;
function Bt() {
  return (Bt = e(() => {
    ((Rt = W()),
      A(),
      r(),
      _(),
      S(),
      (zt = fe()),
      z(),
      Le(),
      Pe(),
      oe(),
      a(),
      b(),
      We(),
      Fe(),
      i(),
      et(),
      ke(),
      He(),
      R(),
      Xe(),
      h(),
      je(),
      Ne(),
      At(),
      be(),
      Te(),
      Pt(),
      (Z = G()));
  }))();
}
function Vt() {
  let e = (0, Kt.c)(35),
    t = ue(),
    n = u(),
    r = Ge(`375130565`),
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
    : ((o = t.pathname.slice(28).split(`/`).filter(Ht)), (e[2] = t.pathname), (e[3] = o));
  let s = o,
    c = s.length === 1 && s[0] === `new`,
    l = s.length > 0 && s[0] !== `new` ? s[0] : null,
    d = l != null && s.length === 2 && s[1] === `edit`,
    f = l != null && s.length === 1;
  if (s.length === 0) {
    if (r && new URLSearchParams(t.search).get(`tab`) === `preferences`) {
      let t;
      return (
        e[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, Q.jsx)(q, {
              stickyControls: (0, Q.jsx)(jt, { selectedTab: `preferences` }),
              title: (0, Q.jsx)(Me, { slug: `cloud-environments` }),
              children: (0, Q.jsx)(ht, {}),
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
        : ((n = (0, Q.jsx)(Ft, {
            onCreateEnvironment: () => a(`${$}/new`),
            onEditEnvironment: (e) => a(`${$}/${e}/edit`),
            onSelectEnvironment: (e) => a(`${$}/${e}`),
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
      : ((t = (0, Q.jsx)(Gt, { current: Jt, onRootClick: () => a($) })), (e[7] = a), (e[8] = t));
    let n;
    e[9] === a
      ? (n = e[10])
      : ((n = (0, Q.jsx)(pt, { environment: null, onCancel: () => a($), onSaved: (e) => a(`${$}/${e}`) })),
        (e[9] = a),
        (e[10] = n));
    let r;
    return (
      e[11] !== t || e[12] !== n
        ? ((r = (0, Q.jsx)(q, { backSlot: t, title: Jt, children: n })),
          (e[11] = t),
          (e[12] = n),
          (e[13] = r))
        : (r = e[13]),
      r
    );
  }
  if (l != null && d) {
    let t;
    e[14] !== l || e[15] !== a
      ? ((t = () => a(`${$}/${l}`)), (e[14] = l), (e[15] = a), (e[16] = t))
      : (t = e[16]);
    let n;
    e[17] === a ? (n = e[18]) : ((n = () => a($)), (e[17] = a), (e[18] = n));
    let r;
    return (
      e[19] !== l || e[20] !== t || e[21] !== n
        ? ((r = (0, Q.jsx)(Wt, { environmentId: l, onBack: t, onRootClick: n })),
          (e[19] = l),
          (e[20] = t),
          (e[21] = n),
          (e[22] = r))
        : (r = e[22]),
      r
    );
  }
  if (l != null && f) {
    let t, n;
    e[23] === a
      ? ((t = e[24]), (n = e[25]))
      : ((t = () => a($)), (n = () => a($)), (e[23] = a), (e[24] = t), (e[25] = n));
    let r;
    e[26] !== l || e[27] !== a
      ? ((r = () => a(`${$}/${l}/edit`)), (e[26] = l), (e[27] = a), (e[28] = r))
      : (r = e[28]);
    let i;
    return (
      e[29] !== l || e[30] !== t || e[31] !== n || e[32] !== r
        ? ((i = (0, Q.jsx)(Ut, { environmentId: l, onBack: t, onDeleted: n, onEdit: r })),
          (e[29] = l),
          (e[30] = t),
          (e[31] = n),
          (e[32] = r),
          (e[33] = i))
        : (i = e[33]),
      i
    );
  }
  let p;
  return (
    e[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((p = (0, Q.jsx)(re, { to: $, replace: !0 })), (e[34] = p))
      : (p = e[34]),
    p
  );
}
function Ht(e) {
  return e !== ``;
}
function Ut(e) {
  let n = (0, Kt.c)(51),
    { environmentId: r, onBack: i, onDeleted: a, onEdit: o } = e,
    u = m(c),
    d = k(),
    h = pe(Re, r),
    g = j(ye),
    _ = j(we),
    [y, b] = (0, qt.useState)(null);
  if (h.isPending || h.isError) {
    let e;
    n[0] === i ? (e = n[1]) : ((e = (0, Q.jsx)(Gt, { current: Yt, onRootClick: i })), (n[0] = i), (n[1] = e));
    let r;
    n[2] === h
      ? (r = n[3])
      : ((r = h.isPending
          ? (0, Q.jsx)(qe, {
              children: (0, Q.jsx)(p, {
                id: `settings.cloudEnvironments.details.loading`,
                defaultMessage: `Loading environment…`,
                description: `Loading state for cloud environment details`,
              }),
            })
          : (0, Q.jsx)(U, {
              children: (0, Q.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3 p-3 text-sm text-secondary`,
                children: [
                  (0, Q.jsx)(p, {
                    id: `settings.cloudEnvironments.details.error`,
                    defaultMessage: `Unable to load this cloud environment`,
                    description: `Error state for cloud environment details`,
                  }),
                  (0, Q.jsx)(t, {
                    color: `secondary`,
                    onClick: () => void h.refetch(),
                    size: `toolbar`,
                    children: (0, Q.jsx)(p, {
                      id: `settings.cloudEnvironments.retry`,
                      defaultMessage: `Retry`,
                      description: `Button label to retry loading cloud environments`,
                    }),
                  }),
                ],
              }),
            })),
        (n[2] = h),
        (n[3] = r));
    let a;
    return (
      n[4] !== e || n[5] !== r
        ? ((a = (0, Q.jsx)(q, { backSlot: e, title: Yt, children: r })), (n[4] = e), (n[5] = r), (n[6] = a))
        : (a = n[6]),
      a
    );
  }
  let x = h.data,
    S = x.permissions?.can_write === !0,
    C = x.permissions?.can_delete === !0,
    E = S && (x.cache_settings?.post_setup_cache_enabled ?? !0),
    D;
  n[7] === d
    ? (D = n[8])
    : ((D = d.formatMessage({
        id: `settings.cloudEnvironments.details.edit`,
        defaultMessage: `Edit environment`,
        description: `Tooltip for editing a cloud environment`,
      })),
      (n[7] = d),
      (n[8] = D));
  let A = D,
    M;
  n[9] !== C || n[10] !== S || n[11] !== E || n[12] !== A || n[13] !== d || n[14] !== o
    ? ((M =
        S || C
          ? (0, Q.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                S
                  ? (0, Q.jsxs)(t, {
                      "aria-label": A,
                      color: `secondary`,
                      onClick: o,
                      size: `toolbar`,
                      children: [
                        (0, Q.jsx)(v, { "aria-hidden": !1, asset: f }),
                        (0, Q.jsx)(p, {
                          id: `settings.cloudEnvironments.details.editAction`,
                          defaultMessage: `Edit`,
                          description: `Button label for editing a cloud environment`,
                        }),
                      ],
                    })
                  : null,
                C || E
                  ? (0, Q.jsxs)(s, {
                      align: `end`,
                      contentWidth: `menu`,
                      triggerButton: (0, Q.jsx)(T, {
                        label: d.formatMessage({
                          id: `settings.cloudEnvironments.details.actions`,
                          defaultMessage: `Environment actions`,
                          description: `Accessible label for cloud environment actions`,
                        }),
                      }),
                      children: [
                        E
                          ? (0, Q.jsx)(O.Item, {
                              leftIconAsset: l,
                              onSelect: () => b(`reset-cache`),
                              children: (0, Q.jsx)(p, {
                                id: `settings.cloudEnvironments.details.resetCache`,
                                defaultMessage: `Reset cache`,
                                description: `Menu item for resetting a cloud environment cache`,
                              }),
                            })
                          : null,
                        C
                          ? (0, Q.jsx)(O.Item, {
                              leftIconAsset: w,
                              onSelect: () => b(`delete`),
                              children: (0, Q.jsx)(p, {
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
      (n[9] = C),
      (n[10] = S),
      (n[11] = E),
      (n[12] = A),
      (n[13] = d),
      (n[14] = o),
      (n[15] = M))
    : (M = n[15]);
  let N;
  n[16] !== x.label || n[17] !== i
    ? ((N = (0, Q.jsx)(Gt, { current: x.label, onRootClick: i })),
      (n[16] = x.label),
      (n[17] = i),
      (n[18] = N))
    : (N = n[18]);
  let P = x.description || void 0,
    F;
  n[19] === x ? (F = n[20]) : ((F = (0, Q.jsx)(gt, { environment: x })), (n[19] = x), (n[20] = F));
  let ee = y === `delete`,
    I;
  n[21] !== g || n[22] !== x.id || n[23] !== d || n[24] !== a || n[25] !== u
    ? ((I = () => {
        g.mutate(x.id, {
          onSuccess: () => {
            (u
              .get(ne)
              .success(
                d.formatMessage({
                  id: `settings.cloudEnvironments.delete.success`,
                  defaultMessage: `Deleted cloud environment`,
                  description: `Toast shown after deleting a cloud environment`,
                }),
              ),
              a());
          },
          onError: () => {
            u.get(ne).danger(
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
      (n[21] = g),
      (n[22] = x.id),
      (n[23] = d),
      (n[24] = a),
      (n[25] = u),
      (n[26] = I))
    : (I = n[26]);
  let te;
  n[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (e) => b(e ? `delete` : null)), (n[27] = te))
    : (te = n[27]);
  let L;
  n[28] !== g.isPending || n[29] !== x.label || n[30] !== ee || n[31] !== I
    ? ((L = (0, Q.jsx)(St, {
        environmentName: x.label,
        isPending: g.isPending,
        open: ee,
        onConfirm: I,
        onOpenChange: te,
      })),
      (n[28] = g.isPending),
      (n[29] = x.label),
      (n[30] = ee),
      (n[31] = I),
      (n[32] = L))
    : (L = n[32]);
  let R = y === `reset-cache`,
    z;
  n[33] !== x.id || n[34] !== d || n[35] !== _ || n[36] !== u
    ? ((z = () => {
        _.mutate(x.id, {
          onSuccess: () => {
            (b(null),
              u
                .get(ne)
                .success(
                  d.formatMessage({
                    id: `settings.cloudEnvironments.resetCache.success`,
                    defaultMessage: `Reset cloud environment cache`,
                    description: `Toast shown after resetting a cloud environment cache`,
                  }),
                ));
          },
          onError: () => {
            u.get(ne).danger(
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
      (n[33] = x.id),
      (n[34] = d),
      (n[35] = _),
      (n[36] = u),
      (n[37] = z))
    : (z = n[37]);
  let B;
  n[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (e) => b(e ? `reset-cache` : null)), (n[38] = B))
    : (B = n[38]);
  let V;
  n[39] !== _.isPending || n[40] !== R || n[41] !== z
    ? ((V = (0, Q.jsx)(Ct, { isPending: _.isPending, open: R, onConfirm: z, onOpenChange: B })),
      (n[39] = _.isPending),
      (n[40] = R),
      (n[41] = z),
      (n[42] = V))
    : (V = n[42]);
  let H;
  return (
    n[43] !== x.label ||
    n[44] !== V ||
    n[45] !== M ||
    n[46] !== N ||
    n[47] !== P ||
    n[48] !== F ||
    n[49] !== L
      ? ((H = (0, Q.jsxs)(q, { action: M, backSlot: N, subtitle: P, title: x.label, children: [F, L, V] })),
        (n[43] = x.label),
        (n[44] = V),
        (n[45] = M),
        (n[46] = N),
        (n[47] = P),
        (n[48] = F),
        (n[49] = L),
        (n[50] = H))
      : (H = n[50]),
    H
  );
}
function Wt(e) {
  let t = (0, Kt.c)(24),
    { environmentId: n, onBack: r, onRootClick: i } = e,
    a = pe(Re, n);
  if (a.isError) {
    let e = `${$}/${n}`,
      r;
    return (
      t[0] === e ? (r = t[1]) : ((r = (0, Q.jsx)(re, { to: e, replace: !0 })), (t[0] = e), (t[1] = r)),
      r
    );
  }
  if (a.isPending) {
    let e;
    t[2] === r ? (e = t[3]) : ((e = { label: Yt, onClick: r }), (t[2] = r), (t[3] = e));
    let n;
    t[4] !== i || t[5] !== e
      ? ((n = (0, Q.jsx)(Gt, { current: Xt, environment: e, onRootClick: i })),
        (t[4] = i),
        (t[5] = e),
        (t[6] = n))
      : (n = t[6]);
    let a;
    t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, Q.jsx)(qe, {
          children: (0, Q.jsx)(p, {
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
        : ((o = (0, Q.jsx)(q, { backSlot: n, title: Xt, children: a })), (t[8] = n), (t[9] = o)),
      o
    );
  }
  if (a.data.permissions?.can_write !== !0) {
    let e = `${$}/${n}`,
      r;
    return (
      t[10] === e ? (r = t[11]) : ((r = (0, Q.jsx)(re, { to: e, replace: !0 })), (t[10] = e), (t[11] = r)),
      r
    );
  }
  let o;
  t[12] !== a.data.label || t[13] !== r
    ? ((o = { label: a.data.label, onClick: r }), (t[12] = a.data.label), (t[13] = r), (t[14] = o))
    : (o = t[14]);
  let s;
  t[15] !== i || t[16] !== o
    ? ((s = (0, Q.jsx)(Gt, { current: Xt, environment: o, onRootClick: i })),
      (t[15] = i),
      (t[16] = o),
      (t[17] = s))
    : (s = t[17]);
  let c;
  t[18] !== a.data || t[19] !== r
    ? ((c = (0, Q.jsx)(pt, { environment: a.data, onCancel: r, onSaved: r }, a.data.id)),
      (t[18] = a.data),
      (t[19] = r),
      (t[20] = c))
    : (c = t[20]);
  let l;
  return (
    t[21] !== s || t[22] !== c
      ? ((l = (0, Q.jsx)(q, { backSlot: s, title: Xt, children: c })), (t[21] = s), (t[22] = c), (t[23] = l))
      : (l = t[23]),
    l
  );
}
function Gt(e) {
  let t = (0, Kt.c)(13),
    { current: n, environment: r, onRootClick: i } = e,
    a = (0, qt.useContext)(Se),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(Me, { slug: `cloud-environments` })), (t[0] = o))
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
      ? ((u = (0, Q.jsx)(lt, { ancestors: l, current: n })), (t[10] = n), (t[11] = l), (t[12] = u))
      : (u = t[12]),
    u
  );
}
var Kt, qt, Q, $, Jt, Yt, Xt;
function Zt() {
  return (Zt = e(() => {
    ((Kt = W()),
      x(),
      A(),
      N(),
      S(),
      (qt = fe()),
      z(),
      F(),
      me(),
      oe(),
      a(),
      b(),
      i(),
      B(),
      ct(),
      le(),
      ke(),
      He(),
      Xe(),
      h(),
      je(),
      mt(),
      xt(),
      Tt(),
      ft(),
      Bt(),
      be(),
      Pt(),
      (Q = G()),
      ($ = `/settings/cloud-environments`),
      (Jt = (0, Q.jsx)(p, {
        id: `settings.cloudEnvironments.create.title`,
        defaultMessage: `Create cloud environment`,
        description: `Title for creating a cloud environment`,
      })),
      (Yt = (0, Q.jsx)(p, {
        id: `settings.cloudEnvironments.details.title`,
        defaultMessage: `Cloud environment`,
        description: `Title for cloud environment details`,
      })),
      (Xt = (0, Q.jsx)(p, {
        id: `settings.cloudEnvironments.edit.title`,
        defaultMessage: `Edit cloud environment`,
        description: `Title for editing a cloud environment`,
      })));
  }))();
}
Zt();
export { Vt as CloudEnvironmentsSettingsPage };
//# sourceMappingURL=cloud-environments-settings-page-42d45a0ebd17.js.map
