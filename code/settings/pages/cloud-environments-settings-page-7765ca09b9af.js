import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $G as n,
  A3t as r,
  AKt as i,
  AMt as a,
  Amn as o,
  B3t as s,
  BS as c,
  CW as l,
  Cpn as u,
  Cq as d,
  Eft as f,
  F3t as p,
  FKt as m,
  Fj as h,
  G3t as g,
  Gu as _,
  Hu as v,
  IXt as y,
  Ij as b,
  JG as x,
  JK as S,
  JS as C,
  JXt as w,
  Jit as T,
  Jrt as E,
  KG as D,
  KS as O,
  KXt as k,
  Kit as A,
  Ku as j,
  MKt as M,
  MMt as ee,
  N3t as te,
  NKt as N,
  O3t as P,
  OC as ne,
  OW as re,
  Opn as F,
  QG as ie,
  Qu as I,
  RKt as ae,
  RS as oe,
  Sft as se,
  Spn as L,
  Sq as ce,
  TJt as le,
  TW as ue,
  Tft as de,
  U3t as fe,
  V3t as pe,
  VS as me,
  Vu as R,
  XS as he,
  Xrt as ge,
  Xu as _e,
  Yrt as ve,
  ZG as ye,
  Zu as z,
  _3t as be,
  a3t as B,
  aYt as xe,
  al as Se,
  bft as Ce,
  ck as we,
  dbt as Te,
  eit as Ee,
  gMt as De,
  gpn as Oe,
  hMt as ke,
  hmn as Ae,
  iit as je,
  jMt as Me,
  jXt as V,
  kC as Ne,
  kMt as H,
  kW as Pe,
  kXt as Fe,
  kmn as Ie,
  l3t as Le,
  lk as Re,
  nit as ze,
  o3t as Be,
  qK as Ve,
  qS as He,
  qu as U,
  rit as Ue,
  s3t as We,
  sYt as Ge,
  tit as Ke,
  ubt as qe,
  wJt as Je,
  wW as Ye,
  xft as Xe,
  xpn as Ze,
  yft as Qe,
  zXt as $e,
} from "./app-initial-f094ef01c64d.js";
import {
  Bw as et,
  Gw as tt,
  Kw as nt,
  iT as rt,
  rT as it,
  zw as at,
} from "./app-primary-4c40d73a1074.js";
import { n as ot, t as st } from "./toolbar-breadcrumb-76687ef37675.js";
import { n as ct, t as lt } from "./segmented-toggle-30e6111a9bfb.js";
import { r as ut, t as dt } from "./esm-14f726ca820a.js";
import { a as ft, r as pt } from "./cloud-preferences-534ab4bdf935.js";
function mt(e) {
  let t = (0, vt.c)(42),
    { environment: n } = e,
    r;
  t[0] === n.setup
    ? (r = t[1])
    : ((r = (
        Array.isArray(n.setup)
          ? n.setup.join(`
`)
          : n.setup
      )?.trim()),
      (t[0] = n.setup),
      (t[1] = r));
  let i = !!r,
    a;
  t[2] === n.maintenance_setup
    ? (a = t[3])
    : ((a = (
        Array.isArray(n.maintenance_setup)
          ? n.maintenance_setup.join(`
`)
          : n.maintenance_setup
      )?.trim()),
      (t[2] = n.maintenance_setup),
      (t[3] = a));
  let o = !!a,
    s;
  t[4] === n.env_vars
    ? (s = t[5])
    : ((s = Object.keys(n.env_vars)), (t[4] = n.env_vars), (t[5] = s));
  let c = s,
    l;
  if (t[6] !== n || t[7] !== c || t[8] !== o || t[9] !== i) {
    let e = _t(n),
      r;
    t[11] === n.repo_map
      ? (r = t[12])
      : ((r = (e) => n.repo_map?.[e]?.repository_full_name ?? e),
        (t[11] = n.repo_map),
        (t[12] = r));
    let a = n.repos.map(r),
      s = i || o || c.length > 0 || e.length > 0,
      d;
    t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, W.jsx)(u, {
          id: `settings.cloudEnvironments.details.configured`,
          defaultMessage: `Configured`,
          description: `Label for a configured cloud environment setting`,
        })),
        (t[13] = d))
      : (d = t[13]);
    let f = d,
      p;
    t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((p = (0, W.jsx)(u, {
          id: `settings.cloudEnvironments.details.repository`,
          defaultMessage: `Repository`,
          description: `Label for the repository in cloud environment details`,
        })),
        (t[14] = p))
      : (p = t[14]);
    let m =
        a.length > 0
          ? a.join(`, `)
          : (0, W.jsx)(u, {
              id: `settings.cloudEnvironments.list.noRepository`,
              defaultMessage: `No repository configured`,
              description: `Description for a cloud environment without a repository`,
            }),
      h;
    t[15] === m
      ? (h = t[16])
      : ((h = (0, W.jsx)(j, { label: p, valueAlignment: `end`, children: m })),
        (t[15] = m),
        (t[16] = h));
    let g;
    t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((g = (0, W.jsx)(u, {
          id: `settings.cloudEnvironments.details.machine`,
          defaultMessage: `Machine`,
          description: `Label for the machine in cloud environment details`,
        })),
        (t[17] = g))
      : (g = t[17]);
    let _;
    t[18] === n.machine.label
      ? (_ = t[19])
      : ((_ = (0, W.jsx)(j, { label: g, valueAlignment: `end`, children: n.machine.label })),
        (t[18] = n.machine.label),
        (t[19] = _));
    let v;
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((v = (0, W.jsx)(u, {
          id: `settings.cloudEnvironments.details.creator`,
          defaultMessage: `Created by`,
          description: `Label for the creator in cloud environment details`,
        })),
        (t[20] = v))
      : (v = t[20]);
    let y = n.creator.name || n.creator.email,
      b;
    t[21] === y
      ? (b = t[22])
      : ((b = (0, W.jsx)(j, { label: v, valueAlignment: `end`, children: y })),
        (t[21] = y),
        (t[22] = b));
    let x;
    t[23] === n.created_at
      ? (x = t[24])
      : ((x =
          n.created_at == null
            ? null
            : (0, W.jsx)(j, {
                label: (0, W.jsx)(u, {
                  id: `settings.cloudEnvironments.details.created`,
                  defaultMessage: `Created`,
                  description: `Label for the creation date in cloud environment details`,
                }),
                valueAlignment: `end`,
                children: (0, W.jsx)(Oe, {
                  day: `numeric`,
                  month: `short`,
                  value: n.created_at * 1e3,
                  year: `numeric`,
                }),
              })),
        (t[23] = n.created_at),
        (t[24] = x));
    let S;
    t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((S = (0, W.jsx)(u, {
          id: `settings.cloudEnvironments.details.network`,
          defaultMessage: `Network access`,
          description: `Label for network access in cloud environment details`,
        })),
        (t[25] = S))
      : (S = t[25]);
    let C = n.agent_network_access?.mode,
      w;
    t[26] === C ? (w = t[27]) : ((w = ht(C)), (t[26] = C), (t[27] = w));
    let T;
    t[28] === w
      ? (T = t[29])
      : ((T = (0, W.jsx)(j, { label: S, valueAlignment: `end`, children: w })),
        (t[28] = w),
        (t[29] = T));
    let E;
    t[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((E = (0, W.jsx)(u, {
          id: `settings.cloudEnvironments.details.sharing`,
          defaultMessage: `Sharing`,
          description: `Label for cloud environment sharing`,
        })),
        (t[30] = E))
      : (E = t[30]);
    let D;
    t[31] === n.share_settings
      ? (D = t[32])
      : ((D = gt(n.share_settings)), (t[31] = n.share_settings), (t[32] = D));
    let O;
    t[33] === D
      ? (O = t[34])
      : ((O = (0, W.jsx)(j, { label: E, valueAlignment: `end`, children: D })),
        (t[33] = D),
        (t[34] = O));
    let k;
    (t[35] !== _ || t[36] !== b || t[37] !== x || t[38] !== T || t[39] !== O || t[40] !== h
      ? ((k = (0, W.jsx)(z, {
          children: (0, W.jsx)(z.Content, {
            children: (0, W.jsxs)(R, { children: [h, _, b, x, T, O] }),
          }),
        })),
        (t[35] = _),
        (t[36] = b),
        (t[37] = x),
        (t[38] = T),
        (t[39] = O),
        (t[40] = h),
        (t[41] = k))
      : (k = t[41]),
      (l = (0, W.jsxs)(W.Fragment, {
        children: [
          k,
          s
            ? (0, W.jsxs)(z, {
                children: [
                  (0, W.jsx)(z.Header, {
                    title: (0, W.jsx)(u, {
                      id: `settings.cloudEnvironments.details.configuration`,
                      defaultMessage: `Configuration`,
                      description: `Heading for cloud environment configuration details`,
                    }),
                  }),
                  (0, W.jsx)(z.Content, {
                    children: (0, W.jsxs)(R, {
                      children: [
                        i
                          ? (0, W.jsx)(j, {
                              label: (0, W.jsx)(u, {
                                id: `settings.cloudEnvironments.details.setup`,
                                defaultMessage: `Setup script`,
                                description: `Label for the setup script in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: f,
                            })
                          : null,
                        o
                          ? (0, W.jsx)(j, {
                              label: (0, W.jsx)(u, {
                                id: `settings.cloudEnvironments.details.maintenance`,
                                defaultMessage: `Maintenance script`,
                                description: `Label for the maintenance script in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: f,
                            })
                          : null,
                        c.length > 0
                          ? (0, W.jsx)(j, {
                              label: (0, W.jsx)(u, {
                                id: `settings.cloudEnvironments.details.environmentVariables`,
                                defaultMessage: `Environment variables`,
                                description: `Label for environment variables in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: c.join(`, `),
                            })
                          : null,
                        e.length > 0
                          ? (0, W.jsx)(j, {
                              label: (0, W.jsx)(u, {
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
      (t[6] = n),
      (t[7] = c),
      (t[8] = o),
      (t[9] = i),
      (t[10] = l));
  } else l = t[10];
  return l;
}
function ht(e) {
  switch (e) {
    case `custom`:
      return (0, W.jsx)(u, {
        id: `settings.cloudEnvironments.network.custom`,
        defaultMessage: `Custom`,
        description: `Label for custom cloud environment network access`,
      });
    case `on`:
      return (0, W.jsx)(u, {
        id: `settings.cloudEnvironments.network.on`,
        defaultMessage: `On`,
        description: `Label for enabled cloud environment network access`,
      });
    case `off`:
    case void 0:
      return (0, W.jsx)(u, {
        id: `settings.cloudEnvironments.network.off`,
        defaultMessage: `Off`,
        description: `Label for disabled cloud environment network access`,
      });
  }
}
function gt(e) {
  switch (e) {
    case `private`:
      return (0, W.jsx)(u, {
        id: `settings.cloudEnvironments.sharing.private`,
        defaultMessage: `Private`,
        description: `Label for a private cloud environment`,
      });
    case `public`:
      return (0, W.jsx)(u, {
        id: `settings.cloudEnvironments.sharing.public`,
        defaultMessage: `Public`,
        description: `Label for a public cloud environment`,
      });
    case `workspace`:
      return (0, W.jsx)(u, {
        id: `settings.cloudEnvironments.sharing.workspace`,
        defaultMessage: `Workspace`,
        description: `Label for a workspace cloud environment`,
      });
  }
}
function _t(e) {
  let t = new Set(Object.keys(e.secrets ?? {}));
  for (let n of e.secrets_with_domains ?? []) n.name != null && t.add(n.name);
  return [...t];
}
var vt,
  W,
  yt = e(() => {
    ((vt = Ie()), L(), I(), _e(), v(), (W = Ae()));
  });
function bt(e) {
  let t = (0, St.c)(27),
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
    : ((c = (0, G.jsx)(Ue, {
        children: (0, G.jsx)(u, {
          id: `settings.cloudEnvironments.delete.title`,
          defaultMessage: `Delete {environmentName}?`,
          description: `Title for the cloud environment deletion confirmation`,
          values: { environmentName: n },
        }),
      })),
      (t[2] = n),
      (t[3] = c));
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, G.jsx)(ze, {
        className: `contents`,
        children: (0, G.jsx)(u, {
          id: `settings.cloudEnvironments.delete.description`,
          defaultMessage: `Existing chats will remain, but you will not be able to create follow-ups with this environment`,
          description: `Description for the cloud environment deletion confirmation`,
        }),
      })),
      (t[4] = l))
    : (l = t[4]);
  let d;
  t[5] === c
    ? (d = t[6])
    : ((d = (0, G.jsx)(ge, { title: c, subtitle: l })), (t[5] = c), (t[6] = d));
  let f;
  t[7] === o ? (f = t[8]) : ((f = () => o(!1)), (t[7] = o), (t[8] = f));
  let p;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, G.jsx)(u, {
        id: `settings.cloudEnvironments.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label for cancelling a cloud environment action`,
      })),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] !== r || t[11] !== f
    ? ((m = (0, G.jsx)(H, {
        color: `secondary`,
        disabled: r,
        onClick: f,
        type: `button`,
        children: p,
      })),
      (t[10] = r),
      (t[11] = f),
      (t[12] = m))
    : (m = t[12]);
  let h;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, G.jsx)(u, {
        id: `settings.cloudEnvironments.delete.confirm`,
        defaultMessage: `Delete environment`,
        description: `Button label for confirming cloud environment deletion`,
      })),
      (t[13] = h))
    : (h = t[13]);
  let g;
  t[14] === r
    ? (g = t[15])
    : ((g = (0, G.jsx)(H, { color: `danger`, loading: r, type: `submit`, children: h })),
      (t[14] = r),
      (t[15] = g));
  let _;
  t[16] !== m || t[17] !== g
    ? ((_ = (0, G.jsxs)(ve, { children: [m, g] })), (t[16] = m), (t[17] = g), (t[18] = _))
    : (_ = t[18]);
  let v;
  t[19] !== s || t[20] !== _ || t[21] !== d
    ? ((v = (0, G.jsxs)(E, { as: `form`, onSubmit: s, children: [d, _] })),
      (t[19] = s),
      (t[20] = _),
      (t[21] = d),
      (t[22] = v))
    : (v = t[22]);
  let y;
  return (
    t[23] !== o || t[24] !== i || t[25] !== v
      ? ((y = (0, G.jsx)(Ke, { open: i, onOpenChange: o, children: v })),
        (t[23] = o),
        (t[24] = i),
        (t[25] = v),
        (t[26] = y))
      : (y = t[26]),
    y
  );
}
function xt(e) {
  let t = (0, St.c)(23),
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
    ? ((s = (0, G.jsx)(Ue, {
        children: (0, G.jsx)(u, {
          id: `settings.cloudEnvironments.resetCache.title`,
          defaultMessage: `Reset cached containers?`,
          description: `Title for the cloud environment cache reset confirmation`,
        }),
      })),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, G.jsx)(ge, {
        title: s,
        subtitle: (0, G.jsx)(ze, {
          className: `contents`,
          children: (0, G.jsx)(u, {
            id: `settings.cloudEnvironments.resetCache.description`,
            defaultMessage: `This invalidates all cached containers for this environment and all users`,
            description: `Description for the cloud environment cache reset confirmation`,
          }),
        }),
      })),
      (t[3] = c))
    : (c = t[3]);
  let l;
  t[4] === a ? (l = t[5]) : ((l = () => a(!1)), (t[4] = a), (t[5] = l));
  let d;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, G.jsx)(u, {
        id: `settings.cloudEnvironments.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label for cancelling a cloud environment action`,
      })),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] !== n || t[8] !== l
    ? ((f = (0, G.jsx)(H, {
        color: `secondary`,
        disabled: n,
        onClick: l,
        type: `button`,
        children: d,
      })),
      (t[7] = n),
      (t[8] = l),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, G.jsx)(u, {
        id: `settings.cloudEnvironments.resetCache.confirm`,
        defaultMessage: `Reset cache`,
        description: `Button label for confirming a cloud environment cache reset`,
      })),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] === n
    ? (m = t[12])
    : ((m = (0, G.jsx)(H, { color: `primary`, loading: n, type: `submit`, children: p })),
      (t[11] = n),
      (t[12] = m));
  let h;
  t[13] !== f || t[14] !== m
    ? ((h = (0, G.jsxs)(ve, { children: [f, m] })), (t[13] = f), (t[14] = m), (t[15] = h))
    : (h = t[15]);
  let g;
  t[16] !== o || t[17] !== h
    ? ((g = (0, G.jsxs)(E, { as: `form`, onSubmit: o, children: [c, h] })),
      (t[16] = o),
      (t[17] = h),
      (t[18] = g))
    : (g = t[18]);
  let _;
  return (
    t[19] !== a || t[20] !== r || t[21] !== g
      ? ((_ = (0, G.jsx)(Ke, { open: r, onOpenChange: a, children: g })),
        (t[19] = a),
        (t[20] = r),
        (t[21] = g),
        (t[22] = _))
      : (_ = t[22]),
    _
  );
}
var St,
  G,
  Ct = e(() => {
    ((St = Ie()), L(), a(), je(), Ee(), (G = Ae()));
  });
function K(e) {
  let t = (0, wt.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Tt.jsx)(`div`, { className: `w-72 max-w-full`, children: n })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var wt,
  Tt,
  Et = e(() => {
    ((wt = Ie()), (Tt = Ae()));
  });
function Dt(e) {
  let t = (0, Pt.c)(16),
    { form: n, isPending: r } = e,
    i = F(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, q.jsx)(z.Header, {
        title: (0, q.jsx)(u, {
          id: `settings.cloudEnvironments.editor.scripts`,
          defaultMessage: `Scripts`,
          description: `Heading for cloud environment scripts`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] !== i || t[2] !== r
    ? ((o = (e) =>
        (0, q.jsx)(U, {
          label: (0, q.jsx)(u, {
            id: `settings.cloudEnvironments.editor.setup`,
            defaultMessage: `Setup script`,
            description: `Label for a cloud environment setup script`,
          }),
          description: (0, q.jsx)(u, {
            id: `settings.cloudEnvironments.editor.setup.description`,
            defaultMessage: `Runs after the repository is cloned; with caching enabled, it runs only for new containers`,
            description: `Explanation for the cloud environment setup script`,
          }),
          control: (0, q.jsx)(K, {
            children: (0, q.jsx)(Ye, {
              "aria-label": i.formatMessage({
                id: `settings.cloudEnvironments.editor.setup.aria`,
                defaultMessage: `Setup script`,
                description: `Accessible label for a cloud environment setup script`,
              }),
              disabled: r,
              rows: 5,
              value: e.state.value,
              variant: `code`,
              onChange: (t) => e.handleChange(t.target.value),
            }),
          }),
        })),
      (t[1] = i),
      (t[2] = r),
      (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] !== n.Field || t[5] !== o
    ? ((s = (0, q.jsx)(n.Field, { name: `setupCommands`, children: o })),
      (t[4] = n.Field),
      (t[5] = o),
      (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] !== i || t[8] !== r
    ? ((c = (e) =>
        (0, q.jsx)(U, {
          label: (0, q.jsx)(u, {
            id: `settings.cloudEnvironments.editor.maintenance`,
            defaultMessage: `Maintenance script`,
            description: `Label for a cloud environment maintenance script`,
          }),
          description: (0, q.jsx)(u, {
            id: `settings.cloudEnvironments.editor.maintenance.description`,
            defaultMessage: `Runs after branch checkout whenever ChatGPT reuses a cached container`,
            description: `Explanation for the cloud environment maintenance script`,
          }),
          control: (0, q.jsx)(K, {
            children: (0, q.jsx)(Ye, {
              "aria-label": i.formatMessage({
                id: `settings.cloudEnvironments.editor.maintenance.aria`,
                defaultMessage: `Maintenance script`,
                description: `Accessible label for a cloud environment maintenance script`,
              }),
              disabled: r,
              rows: 5,
              value: e.state.value,
              variant: `code`,
              onChange: (t) => e.handleChange(t.target.value),
            }),
          }),
        })),
      (t[7] = i),
      (t[8] = r),
      (t[9] = c))
    : (c = t[9]);
  let l;
  t[10] !== n.Field || t[11] !== c
    ? ((l = (0, q.jsx)(n.Field, { name: `maintenanceSetupCommands`, children: c })),
      (t[10] = n.Field),
      (t[11] = c),
      (t[12] = l))
    : (l = t[12]);
  let d;
  return (
    t[13] !== s || t[14] !== l
      ? ((d = (0, q.jsxs)(z, {
          children: [a, (0, q.jsx)(z.Content, { children: (0, q.jsxs)(R, { children: [s, l] }) })],
        })),
        (t[13] = s),
        (t[14] = l),
        (t[15] = d))
      : (d = t[15]),
    d
  );
}
function Ot(e) {
  let t = (0, Pt.c)(7),
    { form: n, isPending: r } = e,
    i = F(),
    a;
  t[0] !== n || t[1] !== i || t[2] !== r
    ? ((a = (e) => {
        let t = e ?? { mode: `off` };
        return (0, q.jsxs)(z, {
          children: [
            (0, q.jsx)(z.Header, {
              title: (0, q.jsx)(u, {
                id: `settings.cloudEnvironments.editor.network`,
                defaultMessage: `Network access`,
                description: `Heading for cloud environment network access`,
              }),
            }),
            (0, q.jsx)(z.Content, {
              children: (0, q.jsxs)(R, {
                children: [
                  (0, q.jsx)(U, {
                    label: (0, q.jsx)(u, {
                      id: `settings.cloudEnvironments.editor.network.mode`,
                      defaultMessage: `Access`,
                      description: `Label for the cloud environment network access mode`,
                    }),
                    description: (0, q.jsx)(u, {
                      id: `settings.cloudEnvironments.editor.network.mode.description`,
                      defaultMessage: `Controls internet access after setup completes`,
                      description: `Explanation for cloud environment network access`,
                    }),
                    control: (0, q.jsx)(lt, {
                      ariaLabel: i.formatMessage({
                        id: `settings.cloudEnvironments.editor.network.aria`,
                        defaultMessage: `Network access`,
                        description: `Accessible label for cloud environment network access`,
                      }),
                      options: [
                        {
                          id: `off`,
                          label: (0, q.jsx)(u, {
                            id: `settings.cloudEnvironments.network.off`,
                            defaultMessage: `Off`,
                            description: `Label for disabled cloud environment network access`,
                          }),
                          disabled: r,
                        },
                        {
                          id: `custom`,
                          label: (0, q.jsx)(u, {
                            id: `settings.cloudEnvironments.network.custom`,
                            defaultMessage: `Custom`,
                            description: `Label for custom cloud environment network access`,
                          }),
                          disabled: r,
                        },
                        {
                          id: `on`,
                          label: (0, q.jsx)(u, {
                            id: `settings.cloudEnvironments.network.on`,
                            defaultMessage: `On`,
                            description: `Label for enabled cloud environment network access`,
                          }),
                          disabled: r,
                        },
                      ],
                      selectedId: t.mode,
                      onSelect: (e) => n.setFieldValue(`agentNetworkAccess`, { ...t, mode: e }),
                    }),
                  }),
                  t.mode === `custom`
                    ? (0, q.jsxs)(q.Fragment, {
                        children: [
                          (0, q.jsx)(U, {
                            label: (0, q.jsx)(u, {
                              id: `settings.cloudEnvironments.editor.network.allowedDomains`,
                              defaultMessage: `Allowed domains`,
                              description: `Label for allowed cloud environment network domains`,
                            }),
                            control: (0, q.jsx)(K, {
                              children: (0, q.jsx)(l, {
                                "aria-label": i.formatMessage({
                                  id: `settings.cloudEnvironments.editor.network.allowedDomains.aria`,
                                  defaultMessage: `Allowed domains`,
                                  description: `Accessible label for allowed cloud environment network domains`,
                                }),
                                disabled: r,
                                value: t.allowlist_domains ?? ``,
                                onChange: (e) =>
                                  n.setFieldValue(`agentNetworkAccess`, {
                                    ...t,
                                    allowlist_domains: e.target.value,
                                  }),
                              }),
                            }),
                          }),
                          (0, q.jsx)(U, {
                            label: (0, q.jsx)(u, {
                              id: `settings.cloudEnvironments.editor.network.blockedDomains`,
                              defaultMessage: `Blocked domains`,
                              description: `Label for blocked cloud environment network domains`,
                            }),
                            control: (0, q.jsx)(K, {
                              children: (0, q.jsx)(l, {
                                "aria-label": i.formatMessage({
                                  id: `settings.cloudEnvironments.editor.network.blockedDomains.aria`,
                                  defaultMessage: `Blocked domains`,
                                  description: `Accessible label for blocked cloud environment network domains`,
                                }),
                                disabled: r,
                                value: t.denylist_domains ?? ``,
                                onChange: (e) =>
                                  n.setFieldValue(`agentNetworkAccess`, {
                                    ...t,
                                    denylist_domains: e.target.value,
                                  }),
                              }),
                            }),
                          }),
                        ],
                      })
                    : null,
                ],
              }),
            }),
          ],
        });
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = r),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] !== n.Subscribe || t[5] !== a
      ? ((o = (0, q.jsx)(n.Subscribe, { selector: kt, children: a })),
        (t[4] = n.Subscribe),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function kt(e) {
  return e.values.agentNetworkAccess;
}
function At(e) {
  let t = (0, Pt.c)(9),
    { form: n, isPending: r, showAuthtranslator: i, showDockerInDocker: a } = e,
    o = F(),
    s;
  t[0] !== n || t[1] !== o || t[2] !== r || t[3] !== i || t[4] !== a
    ? ((s = (e) =>
        (0, q.jsxs)(z, {
          children: [
            (0, q.jsx)(z.Header, {
              title: (0, q.jsx)(u, {
                id: `settings.cloudEnvironments.editor.runtime`,
                defaultMessage: `Runtime`,
                description: `Heading for cloud environment runtime settings`,
              }),
            }),
            (0, q.jsx)(z.Content, {
              children: (0, q.jsxs)(R, {
                children: [
                  (0, q.jsx)(U, {
                    label: (0, q.jsx)(u, {
                      id: `settings.cloudEnvironments.editor.runtime.autoSetup`,
                      defaultMessage: `Automatic setup`,
                      description: `Label for automatic cloud environment setup`,
                    }),
                    control: (0, q.jsx)(ie, {
                      ariaLabel: o.formatMessage({
                        id: `settings.cloudEnvironments.editor.runtime.autoSetup.aria`,
                        defaultMessage: `Automatic setup`,
                        description: `Accessible label for automatic cloud environment setup`,
                      }),
                      checked: e.autoSetupSettings?.use_auto_setup ?? !1,
                      disabled: r,
                      onChange: (e) => n.setFieldValue(`autoSetupSettings`, { use_auto_setup: e }),
                    }),
                  }),
                  (0, q.jsx)(U, {
                    label: (0, q.jsx)(u, {
                      id: `settings.cloudEnvironments.editor.runtime.cache`,
                      defaultMessage: `Post-setup cache`,
                      description: `Label for cloud environment post-setup caching`,
                    }),
                    description: (0, q.jsx)(u, {
                      id: `settings.cloudEnvironments.editor.runtime.cache.description`,
                      defaultMessage: `Speeds up chat startup by saving the container after setup`,
                      description: `Explanation for cloud environment post-setup caching`,
                    }),
                    control: (0, q.jsx)(ie, {
                      ariaLabel: o.formatMessage({
                        id: `settings.cloudEnvironments.editor.runtime.cache.aria`,
                        defaultMessage: `Post-setup cache`,
                        description: `Accessible label for cloud environment post-setup caching`,
                      }),
                      checked: e.cacheSettings?.post_setup_cache_enabled ?? !1,
                      disabled: r,
                      onChange: (e) =>
                        n.setFieldValue(`cacheSettings`, { post_setup_cache_enabled: e }),
                    }),
                  }),
                  i
                    ? (0, q.jsx)(U, {
                        label: (0, q.jsx)(u, {
                          id: `settings.cloudEnvironments.editor.runtime.authtranslator`,
                          defaultMessage: `Authentication translation`,
                          description: `Label for cloud environment authentication translation`,
                        }),
                        control: (0, q.jsx)(ie, {
                          ariaLabel: o.formatMessage({
                            id: `settings.cloudEnvironments.editor.runtime.authtranslator.aria`,
                            defaultMessage: `Authentication translation`,
                            description: `Accessible label for cloud environment authentication translation`,
                          }),
                          checked: e.enableAuthtranslator,
                          disabled: r,
                          onChange: (e) => n.setFieldValue(`enableAuthtranslator`, e),
                        }),
                      })
                    : null,
                  a
                    ? (0, q.jsx)(U, {
                        label: (0, q.jsx)(u, {
                          id: `settings.cloudEnvironments.editor.runtime.dockerInDocker`,
                          defaultMessage: `Docker in Docker`,
                          description: `Label for Docker in Docker support in a cloud environment`,
                        }),
                        control: (0, q.jsx)(ie, {
                          ariaLabel: o.formatMessage({
                            id: `settings.cloudEnvironments.editor.runtime.dockerInDocker.aria`,
                            defaultMessage: `Docker in Docker`,
                            description: `Accessible label for Docker in Docker support in a cloud environment`,
                          }),
                          checked: e.enableDockerInDocker,
                          disabled: r,
                          onChange: (e) => n.setFieldValue(`enableDockerInDocker`, e),
                        }),
                      })
                    : null,
                ],
              }),
            }),
          ],
        })),
      (t[0] = n),
      (t[1] = o),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = s))
    : (s = t[5]);
  let c;
  return (
    t[6] !== n.Subscribe || t[7] !== s
      ? ((c = (0, q.jsx)(n.Subscribe, { selector: jt, children: s })),
        (t[6] = n.Subscribe),
        (t[7] = s),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
function jt(e) {
  return e.values;
}
function Mt(e) {
  let t = (0, Pt.c)(7),
    { form: n, isPending: r } = e,
    i = F(),
    a;
  t[0] !== n || t[1] !== i || t[2] !== r
    ? ((a = (e) =>
        (0, q.jsxs)(z, {
          children: [
            (0, q.jsx)(z.Header, {
              title: (0, q.jsx)(u, {
                id: `settings.cloudEnvironments.editor.sharing`,
                defaultMessage: `Sharing`,
                description: `Heading for cloud environment sharing settings`,
              }),
            }),
            (0, q.jsx)(z.Content, {
              children: (0, q.jsxs)(R, {
                children: [
                  (0, q.jsx)(U, {
                    label: (0, q.jsx)(u, {
                      id: `settings.cloudEnvironments.editor.sharing.visibility`,
                      defaultMessage: `Visibility`,
                      description: `Label for cloud environment visibility`,
                    }),
                    control: (0, q.jsx)(lt, {
                      ariaLabel: i.formatMessage({
                        id: `settings.cloudEnvironments.editor.sharing.visibility.aria`,
                        defaultMessage: `Environment visibility`,
                        description: `Accessible label for cloud environment visibility`,
                      }),
                      options: [
                        {
                          id: `private`,
                          label: (0, q.jsx)(u, {
                            id: `settings.cloudEnvironments.sharing.private`,
                            defaultMessage: `Private`,
                            description: `Label for a private cloud environment`,
                          }),
                          disabled: r,
                        },
                        {
                          id: `workspace`,
                          label: (0, q.jsx)(u, {
                            id: `settings.cloudEnvironments.sharing.workspace`,
                            defaultMessage: `Workspace`,
                            description: `Label for a workspace cloud environment`,
                          }),
                          disabled: r,
                        },
                        {
                          id: `public`,
                          label: (0, q.jsx)(u, {
                            id: `settings.cloudEnvironments.sharing.public`,
                            defaultMessage: `Public`,
                            description: `Label for a public cloud environment`,
                          }),
                          disabled: r,
                        },
                      ],
                      selectedId: e.shareSettings,
                      onSelect: (e) => n.setFieldValue(`shareSettings`, e),
                    }),
                  }),
                  (0, q.jsx)(U, {
                    label: (0, q.jsx)(u, {
                      id: `settings.cloudEnvironments.editor.sharing.editors`,
                      defaultMessage: `Additional editors`,
                      description: `Label for additional cloud environment editors`,
                    }),
                    control: (0, q.jsx)(H, {
                      color: `secondary`,
                      disabled: r || e.shareSettings === `private`,
                      onClick: () => n.setFieldValue(`shareTargets`, [...e.shareTargets, ``]),
                      size: `toolbar`,
                      type: `button`,
                      children: (0, q.jsx)(u, {
                        id: `settings.cloudEnvironments.editor.sharing.addEditor`,
                        defaultMessage: `Add editor`,
                        description: `Button label for adding a cloud environment editor`,
                      }),
                    }),
                  }),
                  e.shareTargets.map((t, a) =>
                    (0, q.jsx)(
                      U,
                      {
                        label: null,
                        variant: `nested`,
                        control: (0, q.jsxs)(`div`, {
                          className: `flex w-full items-center gap-2`,
                          children: [
                            (0, q.jsx)(K, {
                              children: (0, q.jsx)(l, {
                                "aria-label": i.formatMessage(
                                  {
                                    id: `settings.cloudEnvironments.editor.sharing.editor.aria`,
                                    defaultMessage: `Editor email {number}`,
                                    description: `Accessible label for a cloud environment editor email input`,
                                  },
                                  { number: a + 1 },
                                ),
                                disabled: r || e.shareSettings === `private`,
                                type: `email`,
                                value: t,
                                onChange: (t) =>
                                  n.setFieldValue(
                                    `shareTargets`,
                                    e.shareTargets.map((e, n) => (n === a ? t.target.value : e)),
                                  ),
                              }),
                            }),
                            (0, q.jsx)(H, {
                              color: `secondary`,
                              disabled: r || e.shareSettings === `private`,
                              onClick: () =>
                                n.setFieldValue(
                                  `shareTargets`,
                                  e.shareTargets.filter((e, t) => t !== a),
                                ),
                              size: `toolbar`,
                              type: `button`,
                              children: (0, q.jsx)(u, {
                                id: `settings.cloudEnvironments.editor.sharing.removeEditor`,
                                defaultMessage: `Remove`,
                                description: `Button label for removing a cloud environment editor`,
                              }),
                            }),
                          ],
                        }),
                      },
                      a,
                    ),
                  ),
                ],
              }),
            }),
          ],
        })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = r),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] !== n.Subscribe || t[5] !== a
      ? ((o = (0, q.jsx)(n.Subscribe, { selector: Nt, children: a })),
        (t[4] = n.Subscribe),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function Nt(e) {
  return e.values;
}
var Pt,
  q,
  Ft = e(() => {
    ((Pt = Ie()), L(), a(), ct(), ue(), n(), I(), _e(), v(), Et(), (q = Ae()));
  });
function It(e, t) {
  let n = Wt(e);
  return {
    label: e?.label ?? ``,
    description: e?.description ?? ``,
    shareSettings: e?.share_settings ?? `private`,
    shareTargets: e?.share_targets?.map(({ email: e }) => e) ?? [],
    machineId: e?.machine_id ?? Xt,
    repositoryId: e?.repos[0] ?? ``,
    repositoryName: e?.repo_map?.[e.repos[0] ?? ``]?.repository_full_name ?? e?.repos[0] ?? ``,
    githubConnectorId: e?.github_connector_id ?? t ?? null,
    workspaceDirectory: e?.workspace_dir ?? `/workspace`,
    agentNetworkAccess: e?.agent_network_access ?? { mode: `off` },
    setupCommands: Ht(e?.setup),
    maintenanceSetupCommands: Ht(e?.maintenance_setup),
    secrets: n.map(({ name: e, domain: t }) => ({
      key: e,
      value: Yt,
      domain: t,
      previousKey: e,
      previousDomain: t,
    })),
    environmentVariables: Object.entries(e?.env_vars ?? {}).map(([e, t]) => ({ key: e, value: t })),
    autoSetupSettings: e?.auto_setup_settings ?? { use_auto_setup: !0 },
    cacheSettings: e?.cache_settings ?? { post_setup_cache_enabled: !0 },
    enableAuthtranslator: e?.enable_authtranslator ?? !1,
    enableDockerInDocker: e?.enable_docker_in_docker ?? !1,
  };
}
function Lt(e) {
  let t = {};
  (e.label.trim() === `` && (t.label = `required`),
    e.machineId === `` && (t.machineId = `required`),
    e.repositoryId === `` && (t.repositoryId = `required`));
  let n = e.secrets.map(({ key: e, domain: t }) => ({
    key: e.trim(),
    identity: Kt(e.trim(), qt(t)),
  }));
  n.some(({ key: e }) => e === ``)
    ? (t.secrets = `name-required`)
    : new Set(n.map(({ identity: e }) => e)).size === n.length
      ? e.secrets.some(({ value: e }) => e.trim() === ``)
        ? (t.secrets = `value-required`)
        : e.secrets.some(Jt) && (t.secrets = `global-rename-value-required`)
      : (t.secrets = `duplicate-name`);
  let r = e.environmentVariables.map(({ key: e }) => e.trim());
  return (
    r.some((e) => e === ``)
      ? (t.environmentVariables = `name-required`)
      : new Set(r).size === r.length
        ? e.environmentVariables.some(({ value: e }) => e.trim() === ``) &&
          (t.environmentVariables = `value-required`)
        : (t.environmentVariables = `duplicate-name`),
    t
  );
}
function Rt(e, t, n) {
  return (t || e.machineId === n) && Object.keys(Lt(e)).length === 0;
}
function zt(e) {
  return {
    label: e.label.trim(),
    description: e.description,
    machine_id: e.machineId,
    repos: [e.repositoryId],
    github_connector_id: e.githubConnectorId,
    workspace_dir: e.workspaceDirectory,
    agent_network_access: e.agentNetworkAccess,
    setup: e.setupCommands,
    maintenance_setup: e.maintenanceSetupCommands,
    env_vars: Object.fromEntries(
      e.environmentVariables.map(({ key: e, value: t }) => [e.trim(), t]),
    ),
    secrets_with_domains: e.secrets.map(({ key: e, value: t, domain: n }) => ({
      name: e.trim(),
      domain: qt(n),
      value: t,
    })),
    share_settings: e.shareSettings,
    share_targets: Ut(e),
    auto_setup_settings: e.autoSetupSettings,
    cache_settings: e.cacheSettings,
    enable_authtranslator: e.enableAuthtranslator,
    enable_docker_in_docker: e.enableDockerInDocker,
  };
}
function Bt(e) {
  let t = e.indexOf(`:`);
  return t === -1 ? null : e.slice(7, t);
}
function Vt(e, t) {
  return {
    etag: t.etag,
    label: e.label.trim(),
    description: e.description,
    machine_id: e.machineId,
    workspace_dir: e.workspaceDirectory,
    agent_network_access: e.agentNetworkAccess,
    setup: e.setupCommands,
    maintenance_setup: e.maintenanceSetupCommands,
    env_vars: Object.fromEntries(
      e.environmentVariables.map(({ key: e, value: t }) => [e.trim(), t]),
    ),
    secrets_with_domains: Gt(e.secrets, Wt(t)),
    share_settings: e.shareSettings,
    share_targets: Ut(e),
    auto_setup_settings: e.autoSetupSettings,
    cache_settings: e.cacheSettings,
    enable_authtranslator: e.enableAuthtranslator,
    enable_docker_in_docker: e.enableDockerInDocker,
  };
}
function Ht(e) {
  return Array.isArray(e)
    ? e.join(`
`)
    : (e ?? ``);
}
function Ut(e) {
  return e.shareSettings === `private`
    ? []
    : e.shareTargets
        .map((e) => e.trim())
        .filter((e) => e !== ``)
        .map((e) => ({ email: e, permission: `editor`, type: `user` }));
}
function Wt(e) {
  return e?.secrets_with_domains == null
    ? Object.keys(e?.secrets ?? {}).map((e) => {
        let [t, ...n] = e.split(`::`);
        return n.length === 0
          ? { name: e, domain: null }
          : { name: n.join(`::`) || e, domain: t || null };
      })
    : e.secrets_with_domains.flatMap((e) =>
        typeof e.name != `string` || e.name === ``
          ? []
          : [{ name: e.name, domain: e.domain ?? null }],
      );
}
function Gt(e, t) {
  let n = new Set(),
    r = [];
  for (let t of e) {
    let e = t.key.trim(),
      i = qt(t.domain);
    if (t.previousDomain === void 0) {
      t.value !== `` && (n.add(Kt(e, i)), r.push({ name: e, domain: i, value: t.value }));
      continue;
    }
    let a = t.previousKey ?? t.key,
      o = qt(t.previousDomain);
    n.add(Kt(a, o));
    let s = a !== e,
      c = o !== i,
      l = t.value !== Yt;
    (!s && !c && !l) ||
      r.push({
        name: e,
        domain: i,
        value: l ? t.value : null,
        previous_domain: o,
        ...(s ? { previous_name: a } : {}),
      });
  }
  for (let { name: e, domain: i } of t) {
    let t = Kt(e, i);
    n.has(t) || r.push({ name: e, domain: null, value: null, previous_domain: i });
  }
  return r;
}
function Kt(e, t) {
  return `${e}::${t ?? `__global__`}`;
}
function qt(e) {
  return e?.trim() || null;
}
function Jt(e) {
  return (
    e.previousDomain !== void 0 &&
    e.previousDomain == null &&
    qt(e.domain) == null &&
    e.previousKey != null &&
    e.previousKey !== e.key.trim() &&
    e.value === `<REDACTED>`
  );
}
var Yt,
  Xt,
  Zt = e(() => {
    ((Yt = `<REDACTED>`), (Xt = `wham-public/wham-universal`));
  });
function Qt(e) {
  let t = (0, nn.c)(7),
    { form: n, isPending: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, J.jsx)(z.Header, {
        title: (0, J.jsx)(u, {
          id: `settings.cloudEnvironments.editor.variables`,
          defaultMessage: `Variables and secrets`,
          description: `Heading for cloud environment variables and secrets`,
        }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] !== n || t[2] !== r
    ? ((a = (e) => {
        let t = Lt(e);
        return (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsx)(en, {
              entries: e.environmentVariables,
              error: t.environmentVariables
                ? (0, J.jsx)(u, {
                    id: `settings.cloudEnvironments.editor.variables.invalid`,
                    defaultMessage: `Variable names and values are required, and names must be unique`,
                    description: `Validation message for invalid cloud environment variables`,
                  })
                : void 0,
              isPending: r,
              label: (0, J.jsx)(u, {
                id: `settings.cloudEnvironments.editor.environmentVariables`,
                defaultMessage: `Environment variables`,
                description: `Label for cloud environment variables`,
              }),
              onChange: (e) => n.setFieldValue(`environmentVariables`, e),
            }),
            (0, J.jsx)(tn, {
              entries: e.secrets,
              error: t.secrets
                ? (0, J.jsx)(u, {
                    id: `settings.cloudEnvironments.editor.secrets.invalid`,
                    defaultMessage: `Secret names and values are required, and name and domain combinations must be unique. Renaming a global secret requires a new value`,
                    description: `Validation message for invalid cloud environment secrets`,
                  })
                : void 0,
              isPending: r,
              onChange: (e) => n.setFieldValue(`secrets`, e),
            }),
          ],
        });
      }),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] !== n.Subscribe || t[5] !== a
      ? ((o = (0, J.jsxs)(z, {
          children: [
            i,
            (0, J.jsx)(z.Content, {
              children: (0, J.jsx)(n.Subscribe, { selector: $t, children: a }),
            }),
          ],
        })),
        (t[4] = n.Subscribe),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function $t(e) {
  return e.values;
}
function en(e) {
  let t = (0, nn.c)(19),
    { entries: n, error: r, isPending: i, label: a, onChange: o } = e,
    s = F(),
    c;
  t[0] !== n || t[1] !== o
    ? ((c = () => o([...n, { key: ``, value: `` }])), (t[0] = n), (t[1] = o), (t[2] = c))
    : (c = t[2]);
  let d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, J.jsx)(u, {
        id: `settings.cloudEnvironments.editor.addVariable`,
        defaultMessage: `Add variable`,
        description: `Button label for adding a cloud environment variable`,
      })),
      (t[3] = d))
    : (d = t[3]);
  let f;
  t[4] !== i || t[5] !== c
    ? ((f = (0, J.jsx)(H, {
        color: `secondary`,
        disabled: i,
        onClick: c,
        size: `toolbar`,
        type: `button`,
        children: d,
      })),
      (t[4] = i),
      (t[5] = c),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== r || t[8] !== a || t[9] !== f
    ? ((p = (0, J.jsx)(U, { description: r, label: a, control: f })),
      (t[7] = r),
      (t[8] = a),
      (t[9] = f),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] !== n || t[12] !== s || t[13] !== i || t[14] !== o
    ? ((m = n.map((e, t) =>
        (0, J.jsx)(
          U,
          {
            label: null,
            variant: `nested`,
            control: (0, J.jsxs)(`div`, {
              className: `grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2`,
              children: [
                (0, J.jsx)(K, {
                  children: (0, J.jsx)(l, {
                    "aria-label": s.formatMessage({
                      id: `settings.cloudEnvironments.editor.variable.name`,
                      defaultMessage: `Variable name`,
                      description: `Accessible label for a cloud environment variable name`,
                    }),
                    disabled: i,
                    value: e.key,
                    onChange: (e) =>
                      o(n.map((n, r) => (r === t ? { ...n, key: e.target.value } : n))),
                  }),
                }),
                (0, J.jsx)(K, {
                  children: (0, J.jsx)(l, {
                    "aria-label": s.formatMessage({
                      id: `settings.cloudEnvironments.editor.variable.value`,
                      defaultMessage: `Variable value`,
                      description: `Accessible label for a cloud environment variable value`,
                    }),
                    disabled: i,
                    value: e.value,
                    onChange: (e) =>
                      o(n.map((n, r) => (r === t ? { ...n, value: e.target.value } : n))),
                  }),
                }),
                (0, J.jsx)(H, {
                  color: `secondary`,
                  disabled: i,
                  onClick: () => o(n.filter((e, n) => n !== t)),
                  size: `toolbar`,
                  type: `button`,
                  children: (0, J.jsx)(u, {
                    id: `settings.cloudEnvironments.editor.removeVariable`,
                    defaultMessage: `Remove`,
                    description: `Button label for removing a cloud environment variable`,
                  }),
                }),
              ],
            }),
          },
          t,
        ),
      )),
      (t[11] = n),
      (t[12] = s),
      (t[13] = i),
      (t[14] = o),
      (t[15] = m))
    : (m = t[15]);
  let h;
  return (
    t[16] !== p || t[17] !== m
      ? ((h = (0, J.jsxs)(R, { children: [p, m] })), (t[16] = p), (t[17] = m), (t[18] = h))
      : (h = t[18]),
    h
  );
}
function tn(e) {
  let t = (0, nn.c)(19),
    { entries: n, error: r, isPending: i, onChange: a } = e,
    o = F(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, J.jsx)(u, {
        id: `settings.cloudEnvironments.editor.secrets`,
        defaultMessage: `Secrets`,
        description: `Label for cloud environment secrets`,
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] !== n || t[2] !== a
    ? ((c = () => a([...n, { key: ``, value: `` }])), (t[1] = n), (t[2] = a), (t[3] = c))
    : (c = t[3]);
  let d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, J.jsx)(u, {
        id: `settings.cloudEnvironments.editor.addSecret`,
        defaultMessage: `Add secret`,
        description: `Button label for adding a cloud environment secret`,
      })),
      (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] !== i || t[6] !== c
    ? ((f = (0, J.jsx)(H, {
        color: `secondary`,
        disabled: i,
        onClick: c,
        size: `toolbar`,
        type: `button`,
        children: d,
      })),
      (t[5] = i),
      (t[6] = c),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== r || t[9] !== f
    ? ((p = (0, J.jsx)(U, { description: r, label: s, control: f })),
      (t[8] = r),
      (t[9] = f),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] !== n || t[12] !== o || t[13] !== i || t[14] !== a
    ? ((m = n.map((e, t) =>
        (0, J.jsx)(
          U,
          {
            label: null,
            variant: `nested`,
            control: (0, J.jsxs)(`div`, {
              className: `grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2`,
              children: [
                (0, J.jsx)(K, {
                  children: (0, J.jsx)(l, {
                    "aria-label": o.formatMessage({
                      id: `settings.cloudEnvironments.editor.secret.name`,
                      defaultMessage: `Secret name`,
                      description: `Accessible label for a cloud environment secret name`,
                    }),
                    disabled: i,
                    value: e.key,
                    onChange: (e) =>
                      a(n.map((n, r) => (r === t ? { ...n, key: e.target.value } : n))),
                  }),
                }),
                (0, J.jsx)(K, {
                  children: (0, J.jsx)(l, {
                    "aria-label": o.formatMessage({
                      id: `settings.cloudEnvironments.editor.secret.value`,
                      defaultMessage: `Secret value`,
                      description: `Accessible label for a cloud environment secret value`,
                    }),
                    disabled: i,
                    placeholder: e.previousKey
                      ? o.formatMessage({
                          id: `settings.cloudEnvironments.editor.secret.keepPlaceholder`,
                          defaultMessage: `Leave unchanged to keep`,
                          description: `Placeholder for an existing cloud environment secret value`,
                        })
                      : void 0,
                    type: `password`,
                    value: e.value,
                    onChange: (e) =>
                      a(n.map((n, r) => (r === t ? { ...n, value: e.target.value } : n))),
                  }),
                }),
                (0, J.jsx)(H, {
                  color: `secondary`,
                  disabled: i,
                  onClick: () => a(n.filter((e, n) => n !== t)),
                  size: `toolbar`,
                  type: `button`,
                  children: (0, J.jsx)(u, {
                    id: `settings.cloudEnvironments.editor.removeSecret`,
                    defaultMessage: `Remove`,
                    description: `Button label for removing a cloud environment secret`,
                  }),
                }),
                (0, J.jsx)(`div`, {
                  className: `col-span-2`,
                  children: (0, J.jsx)(K, {
                    children: (0, J.jsx)(l, {
                      "aria-label": o.formatMessage({
                        id: `settings.cloudEnvironments.editor.secret.domain`,
                        defaultMessage: `Secret domain`,
                        description: `Accessible label for a cloud environment secret domain`,
                      }),
                      disabled: i,
                      placeholder: o.formatMessage({
                        id: `settings.cloudEnvironments.editor.secret.domainPlaceholder`,
                        defaultMessage: `Optional domain`,
                        description: `Placeholder for an optional cloud environment secret domain`,
                      }),
                      value: e.domain ?? ``,
                      onChange: (e) =>
                        a(n.map((n, r) => (r === t ? { ...n, domain: e.target.value } : n))),
                    }),
                  }),
                }),
              ],
            }),
          },
          `${e.previousKey ?? `new`}-${t}`,
        ),
      )),
      (t[11] = n),
      (t[12] = o),
      (t[13] = i),
      (t[14] = a),
      (t[15] = m))
    : (m = t[15]);
  let h;
  return (
    t[16] !== p || t[17] !== m
      ? ((h = (0, J.jsxs)(R, { children: [p, m] })), (t[16] = p), (t[17] = m), (t[18] = h))
      : (h = t[18]),
    h
  );
}
var nn,
  J,
  rn = e(() => {
    ((nn = Ie()), L(), a(), ue(), I(), _e(), v(), Et(), Zt(), (J = Ae()));
  });
function an(e, t, n) {
  return m.safeGet(`/wham/environments/search`, {
    parameters: { query: { query: e || void 0, cursor: t ?? void 0, limit: n } },
  });
}
function on(e, t) {
  return !!e.is_pinned == !!t.is_pinned
    ? (t.task_count ?? 0) - (e.task_count ?? 0) || e.label.localeCompare(t.label)
    : e.is_pinned
      ? -1
      : 1;
}
function sn(e) {
  return m.safeGet(`/wham/environments/{environment_id}/with-creator-and-machine`, {
    parameters: { path: { environment_id: e } },
  });
}
function cn() {
  return m.safeGet(`/wham/machines`);
}
async function ln() {
  let { connectors: e } = await m.safeGet(`/aip/connectors/product_specific`, {
      parameters: { query: { purpose: `hermes` } },
      additionalHeaders: vn,
    }),
    t = e
      .filter(
        (e) =>
          e.status !== `DISABLED_BY_ADMIN` &&
          (e.id === `connector_76869538009648d5b282a4bb21c3d157` ||
            e.template_id === `templated_apps_GitHubEnterprise`),
      )
      .sort((e, t) =>
        e.id === `connector_76869538009648d5b282a4bb21c3d157`
          ? -1
          : t.id === `connector_76869538009648d5b282a4bb21c3d157`
            ? 1
            : e.name.localeCompare(t.name),
      ),
    n = await Promise.all(
      t.map((e) =>
        m.safeGet(`/aip/connectors/{connector_id}/link`, {
          parameters: { path: { connector_id: e.id } },
          additionalHeaders: vn,
        }),
      ),
    );
  return t.filter((e, t) => n[t].link != null);
}
function un(e, t, n) {
  return m.safeGet(`/wham/github/repositories/search/all-installations`, {
    parameters: { query: { query: e, limit: 20, page: n, connector_id: t } },
  });
}
function dn(e) {
  return m.safeGet(`/wham/github/installations/v2`, { parameters: { query: { connector_id: e } } });
}
function fn({ connectorId: e, installation: t, query: n }, r) {
  if (n !== ``)
    return t == null
      ? un(n, e, r)
      : m.safeGet(`/wham/github/repositories/search`, {
          parameters: {
            query: {
              account_login: t.account_login,
              account_type: t.account_type,
              query: n,
              page: r,
              per_page: 20,
              connector_id: e,
            },
          },
        });
  let i = { page: r, per_page: 20, connector_id: e };
  return t == null
    ? m.safeGet(`/wham/github/list-repositories`, { parameters: { query: i } })
    : m.safeGet(`/wham/github/repositories/v2/{installation_id}`, {
        parameters: { path: { installation_id: t.id }, query: i },
      });
}
function pn(e) {
  return m.safePost(`/wham/environments`, { requestBody: e });
}
function mn({ environmentId: e, requestBody: t }) {
  return m.safePatch(`/wham/environments/{environment_id}`, {
    parameters: { path: { environment_id: e } },
    requestBody: t,
  });
}
function hn(e) {
  return m.safeDelete(`/wham/environments/{environment_id}`, {
    parameters: { path: { environment_id: e } },
  });
}
function gn(e) {
  return m.safePost(`/wham/environments/{environment_id}/reset-cache`, {
    parameters: { path: { environment_id: e } },
  });
}
function _n({ environmentId: e, etag: t, isPinned: n }) {
  return mn({ environmentId: e, requestBody: { etag: t, is_pinned: n } });
}
var vn,
  yn = e(() => {
    (Se(), ae(), (vn = { "OAI-Product-Sku": `CODEX` }));
  });
function bn(e) {
  return be({
    queryKey: [`cloud-environments`, `search`, e],
    queryFn: ({ pageParam: t }) => an(e, t, t == null ? 25 : 100),
    initialPageParam: null,
    getNextPageParam: (e) => e.cursor ?? null,
    refetchOnMount: !0,
    retry: !1,
    staleTime: Je.FIVE_MINUTES,
  });
}
async function xn(e) {
  await Promise.all([
    e.queryClient.invalidateQueries({ queryKey: [`cloud-environments`, `search`] }),
    e.queryClient.invalidateQueries({ queryKey: [`environments`] }),
    e.queryClient.invalidateQueries({ queryKey: [`workspace`, `environments-search`] }),
    e.queryClient.invalidateQueries({ queryKey: [`workspace`, `environments-by-repo`] }),
  ]);
}
var Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn = e(() => {
    (We(),
      P(),
      Be(),
      le(),
      yn(),
      (Sn = fe(B, (e) => ({
        queryKey: [`cloud-environments`, `details`, e],
        queryFn: () => sn(e),
        refetchOnMount: !0,
        staleTime: Je.FIVE_MINUTES,
      }))),
      (Cn = g(B, () => ({
        queryKey: [`cloud-environments`, `machines`],
        queryFn: cn,
        refetchOnMount: !0,
        retry: !1,
        staleTime: Je.FIVE_MINUTES,
      }))),
      (wn = g(B, () => ({
        queryKey: [`cloud-environments`, `github-connectors`],
        queryFn: ln,
        refetchOnMount: !0,
        refetchOnWindowFocus: !0,
        retry: !1,
        staleTime: Je.FIVE_MINUTES,
      }))),
      fe(B, (e) => ({
        queryKey: [`cloud-environments`, `github-installations`, e],
        queryFn: () => dn(e),
        refetchOnWindowFocus: !0,
        retry: !1,
        staleTime: Je.FIVE_MINUTES,
      })),
      pe(B, (e) => ({
        queryKey: [
          `cloud-environments`,
          `github-repository-pages`,
          e.connectorId,
          e.installation?.id ?? null,
          e.query,
        ],
        initialPageParam: 1,
        queryFn: ({ pageParam: t }) => fn(e, t),
        getNextPageParam: (e, t, n) => (e.repositories.length === 20 ? n + 1 : void 0),
        refetchOnWindowFocus: !0,
        retry: !1,
        staleTime: Je.FIVE_MINUTES,
      })),
      (Tn = fe(B, ({ connectorId: e, query: t }) => ({
        queryKey: [`cloud-environments`, `repositories`, e, t],
        enabled: t !== `` && e != null,
        queryFn: () => {
          if (e == null) throw Error(`A connector ID is required to search repositories`);
          return un(t, e);
        },
        refetchOnMount: !0,
        refetchOnWindowFocus: !0,
        retry: !1,
        staleTime: Je.FIVE_MINUTES,
      }))),
      (En = s(B, ({ scope: e }) => ({ mutationFn: pn, onSuccess: () => xn(e) }))),
      (Dn = s(B, ({ scope: e }) => ({
        mutationFn: (e) => mn(e),
        onSuccess: async (t, { environmentId: n }) => {
          await Promise.all([xn(e), e.query.invalidate(Sn, n, { exact: !0 })]);
        },
      }))),
      (On = s(B, ({ scope: e }) => ({
        mutationFn: hn,
        onSuccess: async (t, n) => {
          (e.queryClient.removeQueries({ queryKey: e.query.getOptions(Sn, n).queryKey }),
            await xn(e));
        },
      }))),
      (kn = s(B, ({ scope: e }) => ({
        mutationFn: (e) => gn(e),
        onSuccess: (t, n) => e.query.invalidate(Sn, n, { exact: !0 }),
      }))),
      (An = s(B, ({ scope: e }) => ({
        mutationFn: (e) => _n(e),
        onSuccess: async (t, { environmentId: n }) => {
          await Promise.all([xn(e), e.query.invalidate(Sn, n, { exact: !0 })]);
        },
      }))));
  });
function Mn(e) {
  let t = (0, Fn.c)(7),
    { form: n, isPending: r, preferredConnectorId: i } = e,
    a;
  t[0] !== n || t[1] !== r || t[2] !== i
    ? ((a = (e) => {
        let { repositoryId: t, repositoryName: a } = e;
        return (0, Y.jsx)(Pn, {
          isPending: r,
          preferredConnectorId: i,
          repositoryId: t,
          repositoryName: a,
          onChange: (e, t) => {
            (n.setFieldValue(`githubConnectorId`, t),
              n.setFieldValue(`repositoryId`, e?.repository.id ?? ``),
              n.setFieldValue(`repositoryName`, e?.repository.repository_full_name ?? ``));
          },
        });
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] !== n.Subscribe || t[5] !== a
      ? ((o = (0, Y.jsx)(n.Subscribe, { selector: Nn, children: a })),
        (t[4] = n.Subscribe),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function Nn(e) {
  return { repositoryId: e.values.repositoryId, repositoryName: e.values.repositoryName };
}
function Pn(e) {
  let t = (0, Fn.c)(34),
    { isPending: n, preferredConnectorId: r, repositoryId: i, repositoryName: a, onChange: o } = e,
    s = F(),
    [c, l] = (0, In.useState)(``),
    f;
  t[0] === c ? (f = t[1]) : ((f = c.trim()), (t[0] = c), (t[1] = f));
  let m = d(f, 200),
    [h, g] = (0, In.useState)(null),
    _ = p(wn),
    v;
  t[2] !== _.data || t[3] !== r || t[4] !== h
    ? ((v = _.data?.find((e) => e.id === (h ?? r))?.id ?? _.data?.[0]?.id ?? null),
      (t[2] = _.data),
      (t[3] = r),
      (t[4] = h),
      (t[5] = v))
    : (v = t[5]);
  let y = v,
    b;
  t[6] !== y || t[7] !== m
    ? ((b = { connectorId: y, query: m }), (t[6] = y), (t[7] = m), (t[8] = b))
    : (b = t[8]);
  let S = te(Tn, b),
    C;
  t[9] === c ? (C = t[10]) : ((C = c.trim()), (t[9] = c), (t[10] = C));
  let w = m !== C,
    T = n || _.isPending,
    E = n || _.isPending,
    O;
  t[11] !== i || t[12] !== a
    ? ((O =
        i === ``
          ? (0, Y.jsx)(u, {
              id: `settings.cloudEnvironments.editor.repository.select`,
              defaultMessage: `Select a repository`,
              description: `Placeholder for the cloud environment repository selector`,
            })
          : a),
      (t[11] = i),
      (t[12] = a),
      (t[13] = O))
    : (O = t[13]);
  let k;
  t[14] !== E || t[15] !== O
    ? ((k = (0, Y.jsx)(oe, { disabled: E, children: O })), (t[14] = E), (t[15] = O), (t[16] = k))
    : (k = t[16]);
  let A;
  t[17] !== y || t[18] !== _ || t[19] !== o
    ? ((A = _.isError
        ? (0, Y.jsx)(x.Item, {
            onSelect: () => void _.refetch(),
            children: (0, Y.jsx)(u, {
              id: `settings.cloudEnvironments.editor.connector.retry`,
              defaultMessage: `Retry loading GitHub connections`,
              description: `Button label for retrying GitHub connections in the cloud environment repository selector`,
            }),
          })
        : _.data?.length === 0 && y == null
          ? (0, Y.jsx)(x.Message, {
              centered: !0,
              children: (0, Y.jsx)(u, {
                id: `settings.cloudEnvironments.editor.connector.empty`,
                defaultMessage: `No GitHub connections available`,
                description: `Empty state when no GitHub connection can be used for a cloud environment`,
              }),
            })
          : _.data != null && _.data.length > 1
            ? (0, Y.jsxs)(Y.Fragment, {
                children: [
                  (0, Y.jsxs)(x.Section, {
                    children: [
                      (0, Y.jsx)(x.SectionLabel, {
                        children: (0, Y.jsx)(u, {
                          id: `settings.cloudEnvironments.editor.connector`,
                          defaultMessage: `GitHub connection`,
                          description: `Label for choosing a GitHub connection when creating a cloud environment`,
                        }),
                      }),
                      _.data.map((e) =>
                        (0, Y.jsx)(
                          x.Item,
                          {
                            RightIcon: e.id === y ? Ve : void 0,
                            onSelect: () => {
                              (g(e.id), o(null, e.id));
                            },
                            children: e.name,
                          },
                          e.id,
                        ),
                      ),
                    ],
                  }),
                  (0, Y.jsx)(x.Separator, {}),
                ],
              })
            : null),
      (t[17] = y),
      (t[18] = _),
      (t[19] = o),
      (t[20] = A))
    : (A = t[20]);
  let j;
  t[21] !== y ||
  t[22] !== m ||
  t[23] !== s ||
  t[24] !== w ||
  t[25] !== o ||
  t[26] !== c ||
  t[27] !== S
    ? ((j =
        y == null
          ? null
          : (0, Y.jsxs)(Y.Fragment, {
              children: [
                (0, Y.jsx)(x.SearchInput, {
                  "aria-label": s.formatMessage(Ln.repositorySearch),
                  autoFocus: !0,
                  placeholder: s.formatMessage(Ln.repositorySearch),
                  trailingContent:
                    S.isFetching || w ? (0, Y.jsx)(Me, { className: `icon-2xs` }) : void 0,
                  value: c,
                  onChange: (e) => l(e.currentTarget.value),
                }),
                w
                  ? null
                  : m === ``
                    ? (0, Y.jsx)(x.Message, {
                        centered: !0,
                        children: (0, Y.jsx)(u, {
                          id: `settings.cloudEnvironments.editor.repository.searchPrompt`,
                          defaultMessage: `Search by repository name`,
                          description: `Prompt shown before searching for a cloud environment repository`,
                        }),
                      })
                    : S.isError
                      ? (0, Y.jsx)(x.Message, {
                          centered: !0,
                          children: (0, Y.jsx)(u, {
                            id: `settings.cloudEnvironments.editor.repository.error`,
                            defaultMessage: `Unable to load repositories`,
                            description: `Error shown when repository search fails`,
                          }),
                        })
                      : S.data?.repositories.length === 0
                        ? (0, Y.jsx)(x.Message, {
                            centered: !0,
                            children: (0, Y.jsx)(u, {
                              id: `settings.cloudEnvironments.editor.repository.empty`,
                              defaultMessage: `No repositories found`,
                              description: `Empty state for cloud environment repository search`,
                            }),
                          })
                        : S.data?.repositories.map((e) =>
                            (0, Y.jsx)(
                              x.Item,
                              {
                                onSelect: () => {
                                  let t = Bt(e.id) ?? y;
                                  o({ connectorId: t, repository: e }, t);
                                },
                                children: e.repository_full_name,
                              },
                              e.id,
                            ),
                          ),
              ],
            })),
      (t[21] = y),
      (t[22] = m),
      (t[23] = s),
      (t[24] = w),
      (t[25] = o),
      (t[26] = c),
      (t[27] = S),
      (t[28] = j))
    : (j = t[28]);
  let M;
  return (
    t[29] !== j || t[30] !== T || t[31] !== k || t[32] !== A
      ? ((M = (0, Y.jsxs)(D, {
          contentMaxHeight: `list`,
          contentWidth: `menu`,
          disabled: T,
          triggerButton: k,
          children: [A, j],
        })),
        (t[29] = j),
        (t[30] = T),
        (t[31] = k),
        (t[32] = A),
        (t[33] = M))
      : (M = t[33]),
    M
  );
}
var Fn,
  In,
  Y,
  Ln,
  Rn = e(() => {
    ((Fn = Ie()),
      P(),
      (In = t(o(), 1)),
      L(),
      ye(),
      ee(),
      S(),
      me(),
      ce(),
      Zt(),
      jn(),
      (Y = Ae()),
      (Ln = Ze({
        repositorySearch: {
          id: `settings.cloudEnvironments.editor.repository.search`,
          defaultMessage: `Search repositories`,
          description: `Accessible label and placeholder for searching repositories when creating a cloud environment`,
        },
      })));
  });
function zn(e) {
  let t = (0, Un.c)(7),
    { environment: n, onCancel: r, onSaved: i } = e;
  if (n == null) {
    let e;
    return (
      t[0] !== r || t[1] !== i
        ? ((e = (0, X.jsx)(Bn, { onCancel: r, onSaved: i })), (t[0] = r), (t[1] = i), (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let a;
  return (
    t[3] !== n || t[4] !== r || t[5] !== i
      ? ((a = (0, X.jsx)(Vn, {
          environment: n,
          onCancel: r,
          onSaved: i,
          preferredConnectorId: null,
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i),
        (t[6] = a))
      : (a = t[6]),
    a
  );
}
function Bn(e) {
  let t = (0, Un.c)(4),
    { onCancel: n, onSaved: r } = e,
    i = ft().data?.preferred_github_connector_id ?? null,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = (0, X.jsx)(Vn, {
          environment: null,
          onCancel: n,
          onSaved: r,
          preferredConnectorId: i,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function Vn(e) {
  let t = (0, Un.c)(35),
    { environment: n, onCancel: i, onSaved: a, preferredConnectorId: o } = e,
    s = r(B),
    c = F(),
    { planAtLogin: d } = Te(),
    f = p(Cn),
    m = p(En),
    h = p(Dn),
    g = Ge(`479474474`),
    _ = Ge(`2664309699`),
    v;
  t[0] === d ? (v = t[1]) : ((v = N(d) || M(d)), (t[0] = d), (t[1] = v));
  let y = v,
    b = n ?? void 0,
    S;
  t[2] !== o || t[3] !== b ? ((S = It(b, o)), (t[2] = o), (t[3] = b), (t[4] = S)) : (S = t[4]);
  let C;
  t[5] !== m ||
  t[6] !== n ||
  t[7] !== c ||
  t[8] !== f.data ||
  t[9] !== a ||
  t[10] !== s ||
  t[11] !== h
    ? ((C = (e) => {
        let { value: t } = e;
        if (Rt(t, f.data?.some((e) => e.id === t.machineId) === !0, n?.machine_id)) {
          if (n == null) {
            m.mutate(zt(t), {
              onSuccess: (e) => {
                (s.get(V).success(
                  c.formatMessage({
                    id: `settings.cloudEnvironments.create.success`,
                    defaultMessage: `Created cloud environment`,
                    description: `Toast shown after creating a cloud environment`,
                  }),
                ),
                  a(e.id));
              },
              onError: () => {
                s.get(V).danger(
                  c.formatMessage({
                    id: `settings.cloudEnvironments.create.error`,
                    defaultMessage: `Unable to create cloud environment`,
                    description: `Toast shown when creating a cloud environment fails`,
                  }),
                );
              },
            });
            return;
          }
          h.mutate(
            { environmentId: n.id, requestBody: Vt(t, n) },
            {
              onSuccess: () => {
                (s.get(V).success(
                  c.formatMessage({
                    id: `settings.cloudEnvironments.update.success`,
                    defaultMessage: `Updated cloud environment`,
                    description: `Toast shown after updating a cloud environment`,
                  }),
                ),
                  a(n.id));
              },
              onError: () => {
                s.get(V).danger(
                  c.formatMessage({
                    id: `settings.cloudEnvironments.update.error`,
                    defaultMessage: `Unable to update cloud environment. Reload and try again`,
                    description: `Toast shown when updating a cloud environment fails`,
                  }),
                );
              },
            },
          );
        }
      }),
      (t[5] = m),
      (t[6] = n),
      (t[7] = c),
      (t[8] = f.data),
      (t[9] = a),
      (t[10] = s),
      (t[11] = h),
      (t[12] = C))
    : (C = t[12]);
  let w;
  t[13] !== S || t[14] !== C
    ? ((w = { defaultValues: S, onSubmit: C }), (t[13] = S), (t[14] = C), (t[15] = w))
    : (w = t[15]);
  let T = ut(w),
    E = m.isPending || h.isPending,
    O;
  t[16] === T
    ? (O = t[17])
    : ((O = (e) => {
        (e.preventDefault(), T.handleSubmit());
      }),
      (t[16] = T),
      (t[17] = O));
  let k;
  t[18] !== n ||
  t[19] !== T ||
  t[20] !== c ||
  t[21] !== E ||
  t[22] !== f ||
  t[23] !== i ||
  t[24] !== o ||
  t[25] !== g ||
  t[26] !== _ ||
  t[27] !== y
    ? ((k = (e) => {
        let t = Lt(e),
          r = f.data?.find((t) => t.id === e.machineId),
          a = n?.machine_id === e.machineId ? n.machine : void 0;
        return (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(z, {
              children: (0, X.jsx)(z.Content, {
                children: (0, X.jsxs)(R, {
                  children: [
                    (0, X.jsx)(T.Field, {
                      name: `label`,
                      children: (e) =>
                        (0, X.jsx)(U, {
                          label: (0, X.jsx)(u, {
                            id: `settings.cloudEnvironments.editor.name`,
                            defaultMessage: `Name`,
                            description: `Label for a cloud environment name`,
                          }),
                          description: t.label
                            ? (0, X.jsx)(u, {
                                id: `settings.cloudEnvironments.editor.name.required`,
                                defaultMessage: `Name is required`,
                                description: `Validation message for a missing cloud environment name`,
                              })
                            : void 0,
                          control: (0, X.jsx)(K, {
                            children: (0, X.jsx)(l, {
                              "aria-label": c.formatMessage({
                                id: `settings.cloudEnvironments.editor.name.aria`,
                                defaultMessage: `Environment name`,
                                description: `Accessible label for a cloud environment name input`,
                              }),
                              disabled: E,
                              maxLength: 64,
                              value: e.state.value,
                              onChange: (t) => e.handleChange(t.target.value),
                            }),
                          }),
                        }),
                    }),
                    (0, X.jsx)(T.Field, {
                      name: `description`,
                      children: (e) =>
                        (0, X.jsx)(U, {
                          label: (0, X.jsx)(u, {
                            id: `settings.cloudEnvironments.editor.description`,
                            defaultMessage: `Description`,
                            description: `Label for a cloud environment description`,
                          }),
                          control: (0, X.jsx)(K, {
                            children: (0, X.jsx)(l, {
                              "aria-label": c.formatMessage({
                                id: `settings.cloudEnvironments.editor.description.aria`,
                                defaultMessage: `Environment description`,
                                description: `Accessible label for a cloud environment description input`,
                              }),
                              disabled: E,
                              maxLength: 512,
                              value: e.state.value,
                              onChange: (t) => e.handleChange(t.target.value),
                            }),
                          }),
                        }),
                    }),
                    (0, X.jsx)(U, {
                      label: (0, X.jsx)(u, {
                        id: `settings.cloudEnvironments.editor.repository`,
                        defaultMessage: `Repository`,
                        description: `Label for a cloud environment repository`,
                      }),
                      description: t.repositoryId
                        ? (0, X.jsx)(u, {
                            id: `settings.cloudEnvironments.editor.repository.required`,
                            defaultMessage: `Repository is required`,
                            description: `Validation message for a missing cloud environment repository`,
                          })
                        : void 0,
                      control:
                        n == null
                          ? (0, X.jsx)(Mn, { form: T, isPending: E, preferredConnectorId: o })
                          : (0, X.jsx)(K, {
                              children: (0, X.jsx)(l, {
                                "aria-label": c.formatMessage({
                                  id: `settings.cloudEnvironments.editor.repository.aria`,
                                  defaultMessage: `Repository`,
                                  description: `Accessible label for a cloud environment repository input`,
                                }),
                                disabled: !0,
                                value: e.repositoryName,
                              }),
                            }),
                    }),
                    (0, X.jsx)(T.Field, {
                      name: `machineId`,
                      children: (e) =>
                        (0, X.jsx)(U, {
                          label: (0, X.jsx)(u, {
                            id: `settings.cloudEnvironments.editor.machine`,
                            defaultMessage: `Machine`,
                            description: `Label for a cloud environment machine`,
                          }),
                          description: f.isError
                            ? (0, X.jsx)(u, {
                                id: `settings.cloudEnvironments.editor.machine.error`,
                                defaultMessage: `Unable to load machines`,
                                description: `Error shown when cloud environment machines cannot be loaded`,
                              })
                            : t.machineId
                              ? (0, X.jsx)(u, {
                                  id: `settings.cloudEnvironments.editor.machine.required`,
                                  defaultMessage: `Machine is required`,
                                  description: `Validation message for a missing cloud environment machine`,
                                })
                              : void 0,
                          control: f.isError
                            ? (0, X.jsxs)(`div`, {
                                className: `flex items-center gap-2`,
                                children: [
                                  a == null
                                    ? null
                                    : (0, X.jsx)(oe, { disabled: !0, children: a.label }),
                                  (0, X.jsx)(H, {
                                    color: `secondary`,
                                    onClick: () => void f.refetch(),
                                    size: `toolbar`,
                                    type: `button`,
                                    children: (0, X.jsx)(u, {
                                      id: `settings.cloudEnvironments.editor.machine.retry`,
                                      defaultMessage: `Retry`,
                                      description: `Button label for retrying cloud environment machine loading`,
                                    }),
                                  }),
                                ],
                              })
                            : (0, X.jsx)(D, {
                                triggerButton: (0, X.jsx)(oe, {
                                  disabled: f.isPending || E,
                                  children:
                                    r?.label ??
                                    a?.label ??
                                    (0, X.jsx)(u, {
                                      id: `settings.cloudEnvironments.editor.machine.select`,
                                      defaultMessage: `Select a machine`,
                                      description: `Placeholder for a cloud environment machine selector`,
                                    }),
                                }),
                                children: f.data?.map((t) =>
                                  (0, X.jsx)(
                                    x.Item,
                                    { onSelect: () => e.handleChange(t.id), children: t.label },
                                    t.id,
                                  ),
                                ),
                              }),
                        }),
                    }),
                    (0, X.jsx)(T.Field, {
                      name: `workspaceDirectory`,
                      children: (e) =>
                        (0, X.jsx)(U, {
                          label: (0, X.jsx)(u, {
                            id: `settings.cloudEnvironments.editor.workspaceDirectory`,
                            defaultMessage: `Workspace directory`,
                            description: `Label for a cloud environment workspace directory`,
                          }),
                          description: (0, X.jsx)(u, {
                            id: `settings.cloudEnvironments.editor.workspaceDirectory.description`,
                            defaultMessage: `Directory where the repository is cloned; change this only when setup requires an absolute path`,
                            description: `Explanation for the cloud environment workspace directory`,
                          }),
                          control: (0, X.jsx)(K, {
                            children: (0, X.jsx)(l, {
                              "aria-label": c.formatMessage({
                                id: `settings.cloudEnvironments.editor.workspaceDirectory.aria`,
                                defaultMessage: `Workspace directory`,
                                description: `Accessible label for the cloud environment workspace directory input`,
                              }),
                              disabled: E,
                              value: e.state.value,
                              onChange: (t) => e.handleChange(t.target.value),
                            }),
                          }),
                        }),
                    }),
                  ],
                }),
              }),
            }),
            (0, X.jsx)(Dt, { form: T, isPending: E }),
            (0, X.jsx)(Qt, { form: T, isPending: E }),
            (0, X.jsx)(Ot, { form: T, isPending: E }),
            (0, X.jsx)(At, { form: T, isPending: E, showAuthtranslator: g, showDockerInDocker: _ }),
            y ? (0, X.jsx)(Mt, { form: T, isPending: E }) : null,
            (0, X.jsxs)(`div`, {
              className: `flex items-center justify-end gap-2`,
              children: [
                (0, X.jsx)(H, {
                  color: `secondary`,
                  disabled: E,
                  onClick: i,
                  type: `button`,
                  children: (0, X.jsx)(u, {
                    id: `settings.cloudEnvironments.editor.cancel`,
                    defaultMessage: `Cancel`,
                    description: `Button label for cancelling cloud environment editing`,
                  }),
                }),
                (0, X.jsx)(H, {
                  color: `primary`,
                  disabled: !Rt(e, r != null, n?.machine_id),
                  loading: E,
                  type: `submit`,
                  children:
                    n == null
                      ? (0, X.jsx)(u, {
                          id: `settings.cloudEnvironments.editor.create`,
                          defaultMessage: `Create environment`,
                          description: `Button label for creating a cloud environment`,
                        })
                      : (0, X.jsx)(u, {
                          id: `settings.cloudEnvironments.editor.save`,
                          defaultMessage: `Save changes`,
                          description: `Button label for saving a cloud environment`,
                        }),
                }),
              ],
            }),
          ],
        });
      }),
      (t[18] = n),
      (t[19] = T),
      (t[20] = c),
      (t[21] = E),
      (t[22] = f),
      (t[23] = i),
      (t[24] = o),
      (t[25] = g),
      (t[26] = _),
      (t[27] = y),
      (t[28] = k))
    : (k = t[28]);
  let A;
  t[29] !== T.Subscribe || t[30] !== k
    ? ((A = (0, X.jsx)(T.Subscribe, { selector: Hn, children: k })),
      (t[29] = T.Subscribe),
      (t[30] = k),
      (t[31] = A))
    : (A = t[31]);
  let j;
  return (
    t[32] !== O || t[33] !== A
      ? ((j = (0, X.jsx)(`form`, {
          className: `flex flex-col gap-[var(--padding-panel)]`,
          onSubmit: O,
          children: A,
        })),
        (t[32] = O),
        (t[33] = A),
        (t[34] = j))
      : (j = t[34]),
    j
  );
}
function Hn(e) {
  return e.values;
}
var Un,
  X,
  Wn = e(() => {
    ((Un = Ie()),
      dt(),
      P(),
      L(),
      qe(),
      a(),
      ye(),
      ue(),
      Fe(),
      Be(),
      I(),
      _e(),
      me(),
      v(),
      xe(),
      i(),
      pt(),
      Ft(),
      rn(),
      Et(),
      Zt(),
      jn(),
      Rn(),
      (X = Ae()));
  });
function Gn(e) {
  let t = (0, Jn.c)(44),
    { onCreateEnvironment: n, onEditEnvironment: i, onSelectEnvironment: a } = e,
    o = r(B),
    s = F(),
    { userId: l } = Te(),
    [f, m] = (0, Yn.useState)(``),
    h;
  t[0] === f ? (h = t[1]) : ((h = f.trim()), (t[0] = f), (t[1] = h));
  let g = d(h, 200),
    _;
  t[2] === g ? (_ = t[3]) : ((_ = bn(g)), (t[2] = g), (t[3] = _));
  let {
      data: v,
      fetchNextPage: y,
      hasNextPage: b,
      isFetchNextPageError: x,
      isFetchingNextPage: S,
      isPending: w,
      refetch: T,
    } = Le(_),
    E = p(An),
    D,
    k,
    A,
    j,
    M;
  if (
    t[4] !== g ||
    t[5] !== v ||
    t[6] !== b ||
    t[7] !== s ||
    t[8] !== w ||
    t[9] !== n ||
    t[10] !== i ||
    t[11] !== a ||
    t[12] !== T ||
    t[13] !== o ||
    t[14] !== f ||
    t[15] !== E ||
    t[16] !== l
  ) {
    let e = v?.pages.flatMap(Kn) ?? [],
      r = e.sort(on);
    D = C;
    let d;
    (t[22] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, Z.jsx)(u, {
          id: `settings.cloudEnvironments.create.action`,
          defaultMessage: `Create environment`,
          description: `Button label for creating a cloud environment`,
        })),
        (t[22] = d))
      : (d = t[22]),
      t[23] === n
        ? (k = t[24])
        : ((k = (0, Z.jsx)(H, { color: `primary`, onClick: n, children: d })),
          (t[23] = n),
          (t[24] = k)),
      (A =
        e.length > 0 || f !== ``
          ? (0, Z.jsx)(ne, {
              id: `cloud-environments-search`,
              label: s.formatMessage({
                id: `settings.cloudEnvironments.search.label`,
                defaultMessage: `Search cloud environments`,
                description: `Accessible label for cloud environment search`,
              }),
              maxLength: 128,
              onSearchQueryChange: m,
              placeholder: s.formatMessage({
                id: `settings.cloudEnvironments.search.placeholder`,
                defaultMessage: `Search environments`,
                description: `Placeholder for cloud environment search`,
              }),
              searchQuery: f,
            })
          : null),
      t[25] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((j = (0, Z.jsx)(c, { slug: `cloud-environments` })), (t[25] = j))
        : (j = t[25]),
      (M = w
        ? (0, Z.jsx)(O, {
            children:
              f === ``
                ? (0, Z.jsx)(u, {
                    id: `settings.cloudEnvironments.list.loading`,
                    defaultMessage: `Loading cloud environments…`,
                    description: `Loading state for the cloud environments list`,
                  })
                : (0, Z.jsx)(u, {
                    id: `settings.cloudEnvironments.list.searching`,
                    defaultMessage: `Searching cloud environments…`,
                    description: `Loading state while searching cloud environments`,
                  }),
          })
        : v == null
          ? (0, Z.jsx)(R, {
              children: (0, Z.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3 p-3`,
                children: [
                  (0, Z.jsx)(u, {
                    id: `settings.cloudEnvironments.list.error`,
                    defaultMessage: `Unable to load cloud environments`,
                    description: `Error state for the cloud environments list`,
                  }),
                  (0, Z.jsx)(H, {
                    color: `secondary`,
                    onClick: () => void T(),
                    size: `toolbar`,
                    children: (0, Z.jsx)(u, {
                      id: `settings.cloudEnvironments.retry`,
                      defaultMessage: `Retry`,
                      description: `Button label to retry loading cloud environments`,
                    }),
                  }),
                ],
              }),
            })
          : r.length > 0 || !b
            ? (0, Z.jsx)(R, {
                children:
                  r.length === 0
                    ? (0, Z.jsx)(re, {
                        layout: `settings-row`,
                        children:
                          g === ``
                            ? (0, Z.jsx)(u, {
                                id: `settings.cloudEnvironments.list.empty`,
                                defaultMessage: `No cloud environments yet`,
                                description: `Empty state for the cloud environments list`,
                              })
                            : (0, Z.jsx)(u, {
                                id: `settings.cloudEnvironments.list.noResults`,
                                defaultMessage: `No matching cloud environments`,
                                description: `Search empty state for the cloud environments list`,
                              }),
                      })
                    : r.map((e) =>
                        (0, Z.jsx)(
                          qn,
                          {
                            environment: e,
                            isPinning: E.isPending && E.variables?.environmentId === e.id,
                            onEdit: () => i(e.id),
                            onSelect: () => a(e.id),
                            onTogglePin: () => {
                              E.mutate(
                                { environmentId: e.id, etag: e.etag, isPinned: !e.is_pinned },
                                {
                                  onError: () => {
                                    o.get(V).danger(
                                      s.formatMessage({
                                        id: `settings.cloudEnvironments.pin.error`,
                                        defaultMessage: `Unable to update pinned environment`,
                                        description: `Toast shown when pinning a cloud environment fails`,
                                      }),
                                    );
                                  },
                                },
                              );
                            },
                            userId: l,
                          },
                          e.id,
                        ),
                      ),
              })
            : null),
      (t[4] = g),
      (t[5] = v),
      (t[6] = b),
      (t[7] = s),
      (t[8] = w),
      (t[9] = n),
      (t[10] = i),
      (t[11] = a),
      (t[12] = T),
      (t[13] = o),
      (t[14] = f),
      (t[15] = E),
      (t[16] = l),
      (t[17] = D),
      (t[18] = k),
      (t[19] = A),
      (t[20] = j),
      (t[21] = M));
  } else ((D = t[17]), (k = t[18]), (A = t[19]), (j = t[20]), (M = t[21]));
  let ee;
  t[26] !== v || t[27] !== y || t[28] !== b || t[29] !== x || t[30] !== S
    ? ((ee =
        v == null
          ? null
          : (0, Z.jsx)(it, {
              hasNextPage: b && !x,
              isFetchingNextPage: S,
              onLoadNextPage: () => void y(),
            })),
      (t[26] = v),
      (t[27] = y),
      (t[28] = b),
      (t[29] = x),
      (t[30] = S),
      (t[31] = ee))
    : (ee = t[31]);
  let te;
  t[32] !== v || t[33] !== y || t[34] !== x
    ? ((te =
        v != null && x
          ? (0, Z.jsx)(R, {
              children: (0, Z.jsx)(U, {
                control: (0, Z.jsx)(H, {
                  color: `secondary`,
                  onClick: () => void y(),
                  size: `toolbar`,
                  children: (0, Z.jsx)(u, {
                    id: `settings.cloudEnvironments.pagination.retryButton`,
                    defaultMessage: `Retry`,
                    description: `Button label to retry cloud environment pagination`,
                  }),
                }),
                label: (0, Z.jsx)(u, {
                  id: `settings.cloudEnvironments.pagination.error`,
                  defaultMessage: `Unable to load more cloud environments`,
                  description: `Error shown when loading another page of cloud environments fails`,
                }),
              }),
            })
          : null),
      (t[32] = v),
      (t[33] = y),
      (t[34] = x),
      (t[35] = te))
    : (te = t[35]);
  let N;
  return (
    t[36] !== D ||
    t[37] !== k ||
    t[38] !== A ||
    t[39] !== j ||
    t[40] !== M ||
    t[41] !== ee ||
    t[42] !== te
      ? ((N = (0, Z.jsxs)(D, { action: k, stickyControls: A, title: j, children: [M, ee, te] })),
        (t[36] = D),
        (t[37] = k),
        (t[38] = A),
        (t[39] = j),
        (t[40] = M),
        (t[41] = ee),
        (t[42] = te),
        (t[43] = N))
      : (N = t[43]),
    N
  );
}
function Kn(e) {
  return e.items;
}
function qn(e) {
  let t = (0, Jn.c)(44),
    { environment: n, isPinning: r, onEdit: i, onSelect: a, onTogglePin: o, userId: s } = e,
    c = F(),
    l = n.permissions?.can_write === !0,
    d;
  t[0] !== n.creator_id || t[1] !== s
    ? ((d = s != null && n.creator_id.includes(s)), (t[0] = n.creator_id), (t[1] = s), (t[2] = d))
    : (d = t[2]);
  let f = d,
    p = l && f,
    m;
  if (!l) {
    let e;
    (t[3] === c
      ? (e = t[4])
      : ((e = c.formatMessage({
          id: `settings.cloudEnvironments.list.pin.noPermission`,
          defaultMessage: `You don't have permission to pin this environment`,
          description: `Tooltip explaining why a cloud environment cannot be pinned`,
        })),
        (t[3] = c),
        (t[4] = e)),
      (m = e));
  } else if (!f) {
    let e;
    (t[5] === c
      ? (e = t[6])
      : ((e = c.formatMessage({
          id: `settings.cloudEnvironments.list.pin.notCreator`,
          defaultMessage: `Only the creator can pin this environment`,
          description: `Tooltip explaining why a cloud environment cannot be pinned`,
        })),
        (t[5] = c),
        (t[6] = e)),
      (m = e));
  } else if (n.is_pinned) {
    let e;
    (t[7] === c
      ? (e = t[8])
      : ((e = c.formatMessage({
          id: `settings.cloudEnvironments.list.unpin`,
          defaultMessage: `Unpin environment`,
          description: `Tooltip for unpinning a cloud environment`,
        })),
        (t[7] = c),
        (t[8] = e)),
      (m = e));
  } else {
    let e;
    (t[9] === c
      ? (e = t[10])
      : ((e = c.formatMessage({
          id: `settings.cloudEnvironments.list.pin`,
          defaultMessage: `Pin environment`,
          description: `Tooltip for pinning a cloud environment`,
        })),
        (t[9] = c),
        (t[10] = e)),
      (m = e));
  }
  let g;
  t[11] !== l || t[12] !== c || t[13] !== i
    ? ((g = l
        ? (0, Z.jsx)(`div`, {
            className: `invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100`,
            children: (0, Z.jsx)(D, {
              align: `end`,
              contentWidth: `menu`,
              triggerButton: (0, Z.jsx)(tt, {
                label: c.formatMessage({
                  id: `settings.cloudEnvironments.list.actions`,
                  defaultMessage: `Environment actions`,
                  description: `Accessible label for cloud environment row actions`,
                }),
                size: `icon`,
              }),
              children: (0, Z.jsx)(x.Item, {
                LeftIcon: h,
                onSelect: i,
                children: (0, Z.jsx)(u, {
                  id: `settings.cloudEnvironments.list.edit`,
                  defaultMessage: `Edit environment`,
                  description: `Menu item for editing a cloud environment`,
                }),
              }),
            }),
          })
        : null),
      (t[11] = l),
      (t[12] = c),
      (t[13] = i),
      (t[14] = g))
    : (g = t[14]);
  let v = n.is_pinned
      ? void 0
      : `opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-within:opacity-100`,
    y = !p,
    b;
  t[15] === n.is_pinned
    ? (b = t[16])
    : ((b = n.is_pinned
        ? (0, Z.jsx)(ke, { "aria-hidden": !1, asset: se })
        : (0, Z.jsx)(ke, { "aria-hidden": !1, asset: Ce })),
      (t[15] = n.is_pinned),
      (t[16] = b));
  let S;
  t[17] !== r || t[18] !== o || t[19] !== m || t[20] !== y || t[21] !== b
    ? ((S = (0, Z.jsx)(H, {
        "aria-label": m,
        color: `ghost`,
        disabled: y,
        loading: r,
        onClick: o,
        size: `icon`,
        uniform: !0,
        children: b,
      })),
      (t[17] = r),
      (t[18] = o),
      (t[19] = m),
      (t[20] = y),
      (t[21] = b),
      (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] !== v || t[24] !== S
    ? ((C = (0, Z.jsx)(`span`, { className: v, children: S })),
      (t[23] = v),
      (t[24] = S),
      (t[25] = C))
    : (C = t[25]);
  let w;
  t[26] !== m || t[27] !== C
    ? ((w = (0, Z.jsx)(A, { tooltipContent: m, children: C })),
      (t[26] = m),
      (t[27] = C),
      (t[28] = w))
    : (w = t[28]);
  let T;
  t[29] !== g || t[30] !== w
    ? ((T = (0, Z.jsxs)(Z.Fragment, { children: [g, w] })), (t[29] = g), (t[30] = w), (t[31] = T))
    : (T = t[31]);
  let E;
  t[32] !== n.label || t[33] !== c
    ? ((E = c.formatMessage(
        {
          id: `settings.cloudEnvironments.list.open`,
          defaultMessage: `Open {environmentName}`,
          description: `Accessible label for opening a cloud environment`,
        },
        { environmentName: n.label },
      )),
      (t[32] = n.label),
      (t[33] = c),
      (t[34] = E))
    : (E = t[34]);
  let O;
  t[35] !== n.repo_map || t[36] !== n.repos
    ? ((O =
        n.repos.length > 0
          ? n.repos.map((e) => n.repo_map?.[e]?.repository_full_name ?? e).join(`, `)
          : (0, Z.jsx)(u, {
              id: `settings.cloudEnvironments.list.noRepository`,
              defaultMessage: `No repository configured`,
              description: `Description for a cloud environment without a repository`,
            })),
      (t[35] = n.repo_map),
      (t[36] = n.repos),
      (t[37] = O))
    : (O = t[37]);
  let k;
  return (
    t[38] !== n.label || t[39] !== a || t[40] !== E || t[41] !== O || t[42] !== T
      ? ((k = (0, Z.jsx)(_, {
          actions: T,
          ariaLabel: E,
          description: O,
          label: n.label,
          onClick: a,
        })),
        (t[38] = n.label),
        (t[39] = a),
        (t[40] = E),
        (t[41] = O),
        (t[42] = T),
        (t[43] = k))
      : (k = t[43]),
    k
  );
}
var Jn,
  Yn,
  Z,
  Xn = e(() => {
    ((Jn = Ie()),
      Xe(),
      Qe(),
      We(),
      P(),
      (Yn = t(o(), 1)),
      L(),
      qe(),
      a(),
      ye(),
      De(),
      rt(),
      Pe(),
      nt(),
      Ne(),
      Fe(),
      T(),
      b(),
      Be(),
      he(),
      He(),
      _e(),
      me(),
      v(),
      ce(),
      jn(),
      yn(),
      (Z = Ae()));
  });
function Zn() {
  let e = (0, nr.c)(34),
    t = k(),
    n = w(),
    r;
  e[0] === n
    ? (r = e[1])
    : ((r = (e) => {
        n(e);
      }),
      (e[0] = n),
      (e[1] = r));
  let i = r,
    a;
  e[2] === t.pathname
    ? (a = e[3])
    : ((a = t.pathname.slice(28).split(`/`).filter(Qn)), (e[2] = t.pathname), (e[3] = a));
  let o = a,
    s = o.length === 1 && o[0] === `new`,
    c = o.length > 0 && o[0] !== `new` ? o[0] : null,
    l = c != null && o.length === 2 && o[1] === `edit`,
    u = c != null && o.length === 1;
  if (o.length === 0) {
    let t;
    return (
      e[4] === i
        ? (t = e[5])
        : ((t = (0, Q.jsx)(Gn, {
            onCreateEnvironment: () => i(`${$}/new`),
            onEditEnvironment: (e) => i(`${$}/${e}/edit`),
            onSelectEnvironment: (e) => i(`${$}/${e}`),
          })),
          (e[4] = i),
          (e[5] = t)),
      t
    );
  }
  if (s) {
    let t;
    e[6] === i
      ? (t = e[7])
      : ((t = (0, Q.jsx)(tr, { current: ir, onRootClick: () => i($) })), (e[6] = i), (e[7] = t));
    let n;
    e[8] === i
      ? (n = e[9])
      : ((n = (0, Q.jsx)(zn, {
          environment: null,
          onCancel: () => i($),
          onSaved: (e) => i(`${$}/${e}`),
        })),
        (e[8] = i),
        (e[9] = n));
    let r;
    return (
      e[10] !== t || e[11] !== n
        ? ((r = (0, Q.jsx)(C, { backSlot: t, title: ir, children: n })),
          (e[10] = t),
          (e[11] = n),
          (e[12] = r))
        : (r = e[12]),
      r
    );
  }
  if (c != null && l) {
    let t;
    e[13] !== c || e[14] !== i
      ? ((t = () => i(`${$}/${c}`)), (e[13] = c), (e[14] = i), (e[15] = t))
      : (t = e[15]);
    let n;
    e[16] === i ? (n = e[17]) : ((n = () => i($)), (e[16] = i), (e[17] = n));
    let r;
    return (
      e[18] !== c || e[19] !== t || e[20] !== n
        ? ((r = (0, Q.jsx)(er, { environmentId: c, onBack: t, onRootClick: n })),
          (e[18] = c),
          (e[19] = t),
          (e[20] = n),
          (e[21] = r))
        : (r = e[21]),
      r
    );
  }
  if (c != null && u) {
    let t, n;
    e[22] === i
      ? ((t = e[23]), (n = e[24]))
      : ((t = () => i($)), (n = () => i($)), (e[22] = i), (e[23] = t), (e[24] = n));
    let r;
    e[25] !== c || e[26] !== i
      ? ((r = () => i(`${$}/${c}/edit`)), (e[25] = c), (e[26] = i), (e[27] = r))
      : (r = e[27]);
    let a;
    return (
      e[28] !== c || e[29] !== t || e[30] !== n || e[31] !== r
        ? ((a = (0, Q.jsx)($n, { environmentId: c, onBack: t, onDeleted: n, onEdit: r })),
          (e[28] = c),
          (e[29] = t),
          (e[30] = n),
          (e[31] = r),
          (e[32] = a))
        : (a = e[32]),
      a
    );
  }
  let d;
  return (
    e[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, Q.jsx)($e, { to: $, replace: !0 })), (e[33] = d))
      : (d = e[33]),
    d
  );
}
function Qn(e) {
  return e !== ``;
}
function $n(e) {
  let t = (0, nr.c)(64),
    { environmentId: n, onBack: i, onDeleted: a, onEdit: o } = e,
    s = r(B),
    c = F(),
    { userId: l } = Te(),
    d = te(Sn, n),
    m = p(On),
    h = p(kn),
    g = p(An),
    [_, v] = (0, rr.useState)(null);
  if (d.isPending || d.isError) {
    let e;
    t[0] === i
      ? (e = t[1])
      : ((e = (0, Q.jsx)(tr, { current: ar, onRootClick: i })), (t[0] = i), (t[1] = e));
    let n;
    t[2] === d
      ? (n = t[3])
      : ((n = d.isPending
          ? (0, Q.jsx)(O, {
              children: (0, Q.jsx)(u, {
                id: `settings.cloudEnvironments.details.loading`,
                defaultMessage: `Loading environment…`,
                description: `Loading state for cloud environment details`,
              }),
            })
          : (0, Q.jsx)(R, {
              children: (0, Q.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3 p-3 text-sm text-secondary`,
                children: [
                  (0, Q.jsx)(u, {
                    id: `settings.cloudEnvironments.details.error`,
                    defaultMessage: `Unable to load this cloud environment`,
                    description: `Error state for cloud environment details`,
                  }),
                  (0, Q.jsx)(H, {
                    color: `secondary`,
                    onClick: () => void d.refetch(),
                    size: `toolbar`,
                    children: (0, Q.jsx)(u, {
                      id: `settings.cloudEnvironments.retry`,
                      defaultMessage: `Retry`,
                      description: `Button label to retry loading cloud environments`,
                    }),
                  }),
                ],
              }),
            })),
        (t[2] = d),
        (t[3] = n));
    let r;
    return (
      t[4] !== e || t[5] !== n
        ? ((r = (0, Q.jsx)(C, { backSlot: e, title: ar, children: n })),
          (t[4] = e),
          (t[5] = n),
          (t[6] = r))
        : (r = t[6]),
      r
    );
  }
  let y = d.data,
    b = y.permissions?.can_write === !0,
    S = y.permissions?.can_delete === !0,
    w;
  t[7] !== y.creator || t[8] !== l
    ? ((w = l != null && y.creator.id.includes(l)), (t[7] = y.creator), (t[8] = l), (t[9] = w))
    : (w = t[9]);
  let T = b && w,
    E = b && (y.cache_settings?.post_setup_cache_enabled ?? !0),
    k;
  t[10] !== y.is_pinned || t[11] !== c
    ? ((k = y.is_pinned
        ? c.formatMessage({
            id: `settings.cloudEnvironments.details.unpin`,
            defaultMessage: `Unpin environment`,
            description: `Tooltip for unpinning a cloud environment`,
          })
        : c.formatMessage({
            id: `settings.cloudEnvironments.details.pin`,
            defaultMessage: `Pin environment`,
            description: `Tooltip for pinning a cloud environment`,
          })),
      (t[10] = y.is_pinned),
      (t[11] = c),
      (t[12] = k))
    : (k = t[12]);
  let j = k,
    M;
  t[13] === c
    ? (M = t[14])
    : ((M = c.formatMessage({
        id: `settings.cloudEnvironments.details.edit`,
        defaultMessage: `Edit environment`,
        description: `Tooltip for editing a cloud environment`,
      })),
      (t[13] = c),
      (t[14] = M));
  let ee = M,
    N;
  t[15] !== S ||
  t[16] !== b ||
  t[17] !== T ||
  t[18] !== E ||
  t[19] !== ee ||
  t[20] !== y.etag ||
  t[21] !== y.id ||
  t[22] !== y.is_pinned ||
  t[23] !== c ||
  t[24] !== o ||
  t[25] !== j ||
  t[26] !== s ||
  t[27] !== g
    ? ((N =
        b || S
          ? (0, Q.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                T
                  ? (0, Q.jsx)(A, {
                      tooltipContent: j,
                      children: (0, Q.jsx)(H, {
                        "aria-label": j,
                        color: `ghost`,
                        loading: g.isPending,
                        onClick: () => {
                          g.mutate(
                            { environmentId: y.id, etag: y.etag, isPinned: !y.is_pinned },
                            {
                              onError: () => {
                                s.get(V).danger(
                                  c.formatMessage({
                                    id: `settings.cloudEnvironments.pin.error`,
                                    defaultMessage: `Unable to update pinned environment`,
                                    description: `Toast shown when pinning a cloud environment fails`,
                                  }),
                                );
                              },
                            },
                          );
                        },
                        size: `toolbar`,
                        uniform: !0,
                        children: y.is_pinned
                          ? (0, Q.jsx)(ke, { "aria-hidden": !1, asset: se })
                          : (0, Q.jsx)(ke, { "aria-hidden": !1, asset: Ce }),
                      }),
                    })
                  : null,
                b
                  ? (0, Q.jsxs)(H, {
                      "aria-label": ee,
                      color: `secondary`,
                      onClick: o,
                      size: `toolbar`,
                      children: [
                        (0, Q.jsx)(ke, { "aria-hidden": !1, asset: f }),
                        (0, Q.jsx)(u, {
                          id: `settings.cloudEnvironments.details.editAction`,
                          defaultMessage: `Edit`,
                          description: `Button label for editing a cloud environment`,
                        }),
                      ],
                    })
                  : null,
                S || E
                  ? (0, Q.jsxs)(D, {
                      align: `end`,
                      contentWidth: `menu`,
                      triggerButton: (0, Q.jsx)(tt, {
                        label: c.formatMessage({
                          id: `settings.cloudEnvironments.details.actions`,
                          defaultMessage: `Environment actions`,
                          description: `Accessible label for cloud environment actions`,
                        }),
                      }),
                      children: [
                        E
                          ? (0, Q.jsx)(x.Item, {
                              LeftIcon: we,
                              onSelect: () => v(`reset-cache`),
                              children: (0, Q.jsx)(u, {
                                id: `settings.cloudEnvironments.details.resetCache`,
                                defaultMessage: `Reset cache`,
                                description: `Menu item for resetting a cloud environment cache`,
                              }),
                            })
                          : null,
                        S
                          ? (0, Q.jsx)(x.Item, {
                              LeftIcon: at,
                              onSelect: () => v(`delete`),
                              children: (0, Q.jsx)(u, {
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
      (t[15] = S),
      (t[16] = b),
      (t[17] = T),
      (t[18] = E),
      (t[19] = ee),
      (t[20] = y.etag),
      (t[21] = y.id),
      (t[22] = y.is_pinned),
      (t[23] = c),
      (t[24] = o),
      (t[25] = j),
      (t[26] = s),
      (t[27] = g),
      (t[28] = N))
    : (N = t[28]);
  let P;
  t[29] !== y.label || t[30] !== i
    ? ((P = (0, Q.jsx)(tr, { current: y.label, onRootClick: i })),
      (t[29] = y.label),
      (t[30] = i),
      (t[31] = P))
    : (P = t[31]);
  let ne = y.description || void 0,
    re;
  t[32] === y
    ? (re = t[33])
    : ((re = (0, Q.jsx)(mt, { environment: y })), (t[32] = y), (t[33] = re));
  let ie = _ === `delete`,
    I;
  t[34] !== m || t[35] !== y.id || t[36] !== c || t[37] !== a || t[38] !== s
    ? ((I = () => {
        m.mutate(y.id, {
          onSuccess: () => {
            (s.get(V).success(
              c.formatMessage({
                id: `settings.cloudEnvironments.delete.success`,
                defaultMessage: `Deleted cloud environment`,
                description: `Toast shown after deleting a cloud environment`,
              }),
            ),
              a());
          },
          onError: () => {
            s.get(V).danger(
              c.formatMessage({
                id: `settings.cloudEnvironments.delete.error`,
                defaultMessage: `Unable to delete cloud environment`,
                description: `Toast shown when cloud environment deletion fails`,
              }),
            );
          },
        });
      }),
      (t[34] = m),
      (t[35] = y.id),
      (t[36] = c),
      (t[37] = a),
      (t[38] = s),
      (t[39] = I))
    : (I = t[39]);
  let ae;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (e) => v(e ? `delete` : null)), (t[40] = ae))
    : (ae = t[40]);
  let oe;
  t[41] !== m.isPending || t[42] !== y.label || t[43] !== ie || t[44] !== I
    ? ((oe = (0, Q.jsx)(bt, {
        environmentName: y.label,
        isPending: m.isPending,
        open: ie,
        onConfirm: I,
        onOpenChange: ae,
      })),
      (t[41] = m.isPending),
      (t[42] = y.label),
      (t[43] = ie),
      (t[44] = I),
      (t[45] = oe))
    : (oe = t[45]);
  let L = _ === `reset-cache`,
    ce;
  t[46] !== y.id || t[47] !== c || t[48] !== h || t[49] !== s
    ? ((ce = () => {
        h.mutate(y.id, {
          onSuccess: () => {
            (v(null),
              s.get(V).success(
                c.formatMessage({
                  id: `settings.cloudEnvironments.resetCache.success`,
                  defaultMessage: `Reset cloud environment cache`,
                  description: `Toast shown after resetting a cloud environment cache`,
                }),
              ));
          },
          onError: () => {
            s.get(V).danger(
              c.formatMessage({
                id: `settings.cloudEnvironments.resetCache.error`,
                defaultMessage: `Unable to reset cloud environment cache`,
                description: `Toast shown when resetting a cloud environment cache fails`,
              }),
            );
          },
        });
      }),
      (t[46] = y.id),
      (t[47] = c),
      (t[48] = h),
      (t[49] = s),
      (t[50] = ce))
    : (ce = t[50]);
  let le;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = (e) => v(e ? `reset-cache` : null)), (t[51] = le))
    : (le = t[51]);
  let ue;
  t[52] !== h.isPending || t[53] !== L || t[54] !== ce
    ? ((ue = (0, Q.jsx)(xt, { isPending: h.isPending, open: L, onConfirm: ce, onOpenChange: le })),
      (t[52] = h.isPending),
      (t[53] = L),
      (t[54] = ce),
      (t[55] = ue))
    : (ue = t[55]);
  let de;
  return (
    t[56] !== y.label ||
    t[57] !== oe ||
    t[58] !== ue ||
    t[59] !== N ||
    t[60] !== P ||
    t[61] !== ne ||
    t[62] !== re
      ? ((de = (0, Q.jsxs)(C, {
          action: N,
          backSlot: P,
          subtitle: ne,
          title: y.label,
          children: [re, oe, ue],
        })),
        (t[56] = y.label),
        (t[57] = oe),
        (t[58] = ue),
        (t[59] = N),
        (t[60] = P),
        (t[61] = ne),
        (t[62] = re),
        (t[63] = de))
      : (de = t[63]),
    de
  );
}
function er(e) {
  let t = (0, nr.c)(24),
    { environmentId: n, onBack: r, onRootClick: i } = e,
    a = te(Sn, n);
  if (a.isError) {
    let e = `${$}/${n}`,
      r;
    return (
      t[0] === e
        ? (r = t[1])
        : ((r = (0, Q.jsx)($e, { to: e, replace: !0 })), (t[0] = e), (t[1] = r)),
      r
    );
  }
  if (a.isPending) {
    let e;
    t[2] === r ? (e = t[3]) : ((e = { label: ar, onClick: r }), (t[2] = r), (t[3] = e));
    let n;
    t[4] !== i || t[5] !== e
      ? ((n = (0, Q.jsx)(tr, { current: or, environment: e, onRootClick: i })),
        (t[4] = i),
        (t[5] = e),
        (t[6] = n))
      : (n = t[6]);
    let a;
    t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, Q.jsx)(O, {
          children: (0, Q.jsx)(u, {
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
        : ((o = (0, Q.jsx)(C, { backSlot: n, title: or, children: a })), (t[8] = n), (t[9] = o)),
      o
    );
  }
  if (a.data.permissions?.can_write !== !0) {
    let e = `${$}/${n}`,
      r;
    return (
      t[10] === e
        ? (r = t[11])
        : ((r = (0, Q.jsx)($e, { to: e, replace: !0 })), (t[10] = e), (t[11] = r)),
      r
    );
  }
  let o;
  t[12] !== a.data.label || t[13] !== r
    ? ((o = { label: a.data.label, onClick: r }), (t[12] = a.data.label), (t[13] = r), (t[14] = o))
    : (o = t[14]);
  let s;
  t[15] !== i || t[16] !== o
    ? ((s = (0, Q.jsx)(tr, { current: or, environment: o, onRootClick: i })),
      (t[15] = i),
      (t[16] = o),
      (t[17] = s))
    : (s = t[17]);
  let c;
  t[18] !== a.data || t[19] !== r
    ? ((c = (0, Q.jsx)(zn, { environment: a.data, onCancel: r, onSaved: r }, a.data.id)),
      (t[18] = a.data),
      (t[19] = r),
      (t[20] = c))
    : (c = t[20]);
  let l;
  return (
    t[21] !== s || t[22] !== c
      ? ((l = (0, Q.jsx)(C, { backSlot: s, title: or, children: c })),
        (t[21] = s),
        (t[22] = c),
        (t[23] = l))
      : (l = t[23]),
    l
  );
}
function tr(e) {
  let t = (0, nr.c)(11),
    { current: n, environment: r, onRootClick: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(c, { slug: `cloud-environments` })), (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === i
    ? (o = t[2])
    : ((o = { id: `cloud-environments`, label: a, onClick: i }), (t[1] = i), (t[2] = o));
  let s;
  t[3] === r
    ? (s = t[4])
    : ((s = r == null ? [] : [{ id: `environment`, label: r.label, onClick: r.onClick }]),
      (t[3] = r),
      (t[4] = s));
  let l;
  t[5] !== o || t[6] !== s ? ((l = [o, ...s]), (t[5] = o), (t[6] = s), (t[7] = l)) : (l = t[7]);
  let u;
  return (
    t[8] !== n || t[9] !== l
      ? ((u = (0, Q.jsx)(st, { ancestors: l, current: n })), (t[8] = n), (t[9] = l), (t[10] = u))
      : (u = t[10]),
    u
  );
}
var nr, rr, Q, $, ir, ar, or;
e(() => {
  ((nr = Ie()),
    de(),
    Xe(),
    Qe(),
    P(),
    (rr = t(o(), 1)),
    L(),
    y(),
    qe(),
    a(),
    ye(),
    De(),
    nt(),
    Fe(),
    ot(),
    T(),
    Re(),
    et(),
    Be(),
    he(),
    He(),
    me(),
    v(),
    yt(),
    Ct(),
    Wn(),
    Xn(),
    jn(),
    (Q = Ae()),
    ($ = `/settings/cloud-environments`),
    (ir = (0, Q.jsx)(u, {
      id: `settings.cloudEnvironments.create.title`,
      defaultMessage: `Create cloud environment`,
      description: `Title for creating a cloud environment`,
    })),
    (ar = (0, Q.jsx)(u, {
      id: `settings.cloudEnvironments.details.title`,
      defaultMessage: `Cloud environment`,
      description: `Title for cloud environment details`,
    })),
    (or = (0, Q.jsx)(u, {
      id: `settings.cloudEnvironments.edit.title`,
      defaultMessage: `Edit cloud environment`,
      description: `Title for editing a cloud environment`,
    })));
})();
export { Zn as CloudEnvironmentsSettingsPage };
//# sourceMappingURL=cloud-environments-settings-page-7765ca09b9af.js.map
