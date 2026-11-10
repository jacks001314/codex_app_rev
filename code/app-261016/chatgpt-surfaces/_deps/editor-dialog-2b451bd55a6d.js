import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as n,
  $C as r,
  $St as i,
  $st as a,
  CNt as o,
  FBt as s,
  HO as c,
  HV as l,
  IH as u,
  IO as d,
  JO as f,
  KO as p,
  LNt as m,
  LO as h,
  MNt as g,
  NNt as _,
  NSt as v,
  Nst as y,
  Oit as b,
  PBt as x,
  Pst as S,
  Qst as ee,
  RO as C,
  TY as w,
  USt as T,
  Uot as E,
  Uvt as D,
  VSt as O,
  Vot as k,
  Vrt as A,
  WO as j,
  XOt as M,
  Y3 as te,
  Z3 as N,
  ZSt as P,
  e6 as ne,
  ew as re,
  iCt as ie,
  iw as F,
  jit as ae,
  mCt as oe,
  nB as se,
  nCt as ce,
  okt as le,
  qO as ue,
  qrt as de,
  rB as fe,
  sct as pe,
  sw as I,
  tkt as L,
  uw as R,
  vSt as me,
  yCt as he,
  zK as ge,
  zO as _e,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ALr as z,
  AN as ve,
  Amr as ye,
  BRr as be,
  Bhr as xe,
  DNr as Se,
  FPr as Ce,
  GNr as we,
  Gut as Te,
  Kut as Ee,
  M6t as De,
  MT as Oe,
  N6t as ke,
  NPr as Ae,
  PNr as je,
  QPr as Me,
  SFr as Ne,
  TNr as Pe,
  TPr as Fe,
  WNn as Ie,
  WNr as Le,
  X5n as Re,
  Z5n as B,
  cPr as V,
  dFr as ze,
  ePr as Be,
  hen as Ve,
  iFr as He,
  iRr as Ue,
  jT as H,
  jmr as We,
  kLr as Ge,
  kN as U,
  kPr as Ke,
  lBr as qe,
  pen as Je,
  rPn as Ye,
  sPr as Xe,
  sRr as Ze,
  uBr as W,
  wLr as Qe,
  wNr as G,
  xFr as $e,
  xLr as et,
  yNr as tt,
  zRr as K,
} from "./app-initial-ad16eaadf81f.js";
import { Cm as nt, wm as rt } from "./app-primary-3e00728c2a4c.js";
import { n as it, t as at } from "./cloud-automation-actions-9f7b3ed7556e.js";
import { a as ot, c as st, l as ct, n as lt } from "./schedule-draft-f9ea92400312.js";
import { o as ut, r as dt } from "./conversation-actions-12bca687c7ef.js";
import { n as ft, r as pt, t as mt } from "./automation-team-row-cf974f62fd66.js";
import { a as ht, i as gt } from "./automation-frequency-section-caeb4180ce42.js";
import { n as _t, t as vt } from "./PlatformUIKitProvider-8a854188dc59.js";
import {
  c as yt,
  d as bt,
  f as xt,
  l as St,
  n as Ct,
  o as wt,
  p as Tt,
  s as Et,
  t as Dt,
  u as Ot,
} from "./configuration-schedule-349da7cdee3c.js";
import { a as kt, l as At, n as jt, o as Mt, s as Nt } from "./plugins-state-ed3d4c958838.js";
import { n as Pt, t as Ft } from "./compact-cadence-b0efce75e19e.js";
import { n as It, t as Lt } from "./schedule-fields-76d96cbe267b.js";
function Rt(e) {
  let t = (0, Vt.c)(17),
    { triggers: n, isAutomationEnabled: r, onOpenTrigger: i, showUnavailableConditions: a, variant: o } = e,
    s = a === void 0 || a,
    c = o === void 0 ? `default` : o;
  if (n == null || n.length === 0) {
    let e;
    return (
      t[0] !== r || t[1] !== s || t[2] !== c
        ? ((e = (0, q.jsx)(zt, {
            variant: c,
            trigger: void 0,
            isAutomationEnabled: r,
            showUnavailableConditions: s,
          })),
          (t[0] = r),
          (t[1] = s),
          (t[2] = c),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let l;
  if (t[4] !== r || t[5] !== i || t[6] !== s || t[7] !== n || t[8] !== c) {
    let e;
    (t[10] !== r || t[11] !== i || t[12] !== s || t[13] !== c
      ? ((e = (e, t) =>
          (0, q.jsxs)(
            Ht.Fragment,
            {
              children: [
                t > 0
                  ? (0, q.jsx)(`div`, {
                      className: `text-center text-sm text-tertiary select-none`,
                      children: (0, q.jsx)(L, {
                        id: `inbox.automations.cloud.webhook.or`,
                        defaultMessage: `Or`,
                        description: `Separator between alternative triggers in a cloud webhook task's details panel; any one of the triggers can start the task`,
                      }),
                    })
                  : null,
                (0, q.jsx)(zt, {
                  variant: c,
                  trigger: e,
                  isAutomationEnabled: r,
                  showUnavailableConditions: s,
                  onOpenTrigger: i,
                }),
              ],
            },
            e.id,
          )),
        (t[10] = r),
        (t[11] = i),
        (t[12] = s),
        (t[13] = c),
        (t[14] = e))
      : (e = t[14]),
      (l = n.map(e)),
      (t[4] = r),
      (t[5] = i),
      (t[6] = s),
      (t[7] = n),
      (t[8] = c),
      (t[9] = l));
  } else l = t[9];
  let u;
  return (
    t[15] === l ? (u = t[16]) : ((u = (0, q.jsx)(q.Fragment, { children: l })), (t[15] = l), (t[16] = u)),
    u
  );
}
function zt(e) {
  let t = (0, Vt.c)(43),
    { trigger: n, isAutomationEnabled: i, onOpenTrigger: a, showUnavailableConditions: o, variant: s } = e,
    c = n?.presentation,
    d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, q.jsx)(`span`, { children: (0, q.jsx)(l, {}) })), (t[0] = d))
    : (d = t[0]);
  let f = n?.connector_type,
    p = c?.icon_url,
    m;
  t[1] !== f || t[2] !== p
    ? ((m = (0, q.jsx)(De, { size: 20, alt: ``, fallback: d, knownAppId: f, logoUrl: p })),
      (t[1] = f),
      (t[2] = p),
      (t[3] = m))
    : (m = t[3]);
  let h = m,
    g;
  t[4] !== c?.display_name || t[5] !== n?.connector_type
    ? ((g =
        c?.display_name ??
        n?.connector_type ??
        (0, q.jsx)(L, {
          id: `inbox.automations.cloud.webhook.fallback`,
          defaultMessage: `Webhook`,
          description: `Fallback name for a cloud task's event trigger when its connected app is unavailable in the details panel`,
        })),
      (t[4] = c?.display_name),
      (t[5] = n?.connector_type),
      (t[6] = g))
    : (g = t[6]);
  let _;
  t[7] === g
    ? (_ = t[8])
    : ((_ = (0, q.jsx)(`span`, { className: `break-words select-text`, children: g })),
      (t[7] = g),
      (t[8] = _));
  let v = _;
  if (s === `form`) {
    let e = v;
    if (n?.connector_type === `slack` && n.webhook_name === `message`) {
      let n;
      (t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, q.jsx)(L, {
            id: `automations.configuration.slackTask`,
            defaultMessage: `New Slack message`,
            description: `Trigger option for a new Slack message`,
          })),
          (t[9] = n))
        : (n = t[9]),
        (e = n));
    } else if (n?.connector_type === `gmail` && n.webhook_name === `message`) {
      let n;
      (t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, q.jsx)(L, {
            id: `automations.configuration.gmailTask`,
            defaultMessage: `New email`,
            description: `Trigger option for new Gmail email`,
          })),
          (t[10] = n))
        : (n = t[10]),
        (e = n));
    } else if (n?.connector_type === `github` && n.webhook_name === `pull_request`) {
      let n;
      (t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, q.jsx)(L, {
            id: `automations.configuration.githubEvent`,
            defaultMessage: `GitHub event`,
            description: `Trigger option for a GitHub event`,
          })),
          (t[11] = n))
        : (n = t[11]),
        (e = n));
    }
    let a;
    t[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, q.jsx)(L, {
          id: `automations.configuration.schedule`,
          defaultMessage: `Trigger`,
          description: `Label identifying the scheduled task trigger`,
        })),
        (t[12] = a))
      : (a = t[12]);
    let o;
    t[13] === e
      ? (o = t[14])
      : ((o = (0, q.jsx)(`span`, { className: `min-w-0 text-end break-words`, children: e })),
        (t[13] = e),
        (t[14] = o));
    let s;
    t[15] === h
      ? (s = t[16])
      : ((s = (0, q.jsx)(`span`, { className: `shrink-0 text-default`, children: h })),
        (t[15] = h),
        (t[16] = s));
    let l;
    t[17] !== o || t[18] !== s
      ? ((l = (0, q.jsx)(I, {
          variant: `nested`,
          labelSizing: `content`,
          label: a,
          control: (0, q.jsxs)(`span`, {
            className: `flex min-w-0 items-center gap-1.5 text-tertiary`,
            children: [o, s],
          }),
        })),
        (t[17] = o),
        (t[18] = s),
        (t[19] = l))
      : (l = t[19]);
    let u;
    t[20] !== i || t[21] !== n?.is_enabled
      ? ((u =
          i && n?.is_enabled === !1
            ? (0, q.jsx)(I, {
                variant: `nested`,
                label: (0, q.jsx)(L, {
                  id: `inbox.automations.cloud.webhook.inactive`,
                  defaultMessage: `Trigger inactive — this trigger won’t start the task`,
                  description: `Warning that this connected-app trigger cannot start the active task; other enabled triggers may still start it`,
                }),
                control: null,
              })
            : null),
        (t[20] = i),
        (t[21] = n?.is_enabled),
        (t[22] = u))
      : (u = t[22]);
    let d;
    t[23] !== c || t[24] !== n?.connector_type
      ? ((d =
          c == null
            ? (0, q.jsx)(I, {
                variant: `nested`,
                label: (0, q.jsx)(L, {
                  id: `inbox.automations.cloud.webhook.unavailable`,
                  defaultMessage: `Trigger details unavailable`,
                  description: `Shown instead of event filters when a cloud webhook task's trigger metadata is unavailable; it does not mean the trigger has no filters`,
                }),
                control: null,
              })
            : c.condition_rows.map((e) => {
                let { id: t, label: r, value: i } = e;
                return (0, q.jsx)(
                  I,
                  {
                    variant: `nested`,
                    labelSizing: `content`,
                    label:
                      n?.connector_type === `slack` && t === `channels`
                        ? (0, q.jsx)(L, {
                            id: `automations.configuration.channels`,
                            defaultMessage: `In channels`,
                            description: `Slack channels to monitor for new messages`,
                          })
                        : r,
                    control: (0, q.jsx)(`span`, {
                      className: `min-w-0 text-end break-words text-tertiary select-text`,
                      children: i,
                    }),
                  },
                  t,
                );
              })),
        (t[23] = c),
        (t[24] = n?.connector_type),
        (t[25] = d))
      : (d = t[25]);
    let f;
    return (
      t[26] !== l || t[27] !== u || t[28] !== d
        ? ((f = (0, q.jsxs)(r, { variant: `form`, children: [l, u, d] })),
          (t[26] = l),
          (t[27] = u),
          (t[28] = d),
          (t[29] = f))
        : (f = t[29]),
      f
    );
  }
  let y;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, q.jsx)(`span`, {
        className: `select-none`,
        children: (0, q.jsx)(L, {
          id: `inbox.automations.cloud.webhook.trigger`,
          defaultMessage: `Trigger`,
          description: `Section heading above the connected app that can trigger a cloud webhook task in its details panel`,
        }),
      })),
      (t[30] = y))
    : (y = t[30]);
  let b;
  t[31] !== h || t[32] !== i || t[33] !== v || t[34] !== a || t[35] !== n
    ? ((b = (0, q.jsx)(gt, {
        title: y,
        children: (0, q.jsx)(r, {
          children:
            n != null && a != null
              ? (0, q.jsx)(F, {
                  edgeRounding: `surface`,
                  icon: h,
                  label: v,
                  trailing: (0, q.jsx)(u, {}),
                  onClick: () => a(n),
                })
              : (0, q.jsx)(I, {
                  control:
                    i && n?.is_enabled === !1
                      ? (0, q.jsx)(`span`, {
                          className: `text-sm text-secondary select-none`,
                          children: (0, q.jsx)(L, {
                            id: `inbox.automations.cloud.webhook.inactive`,
                            defaultMessage: `Trigger inactive — this trigger won’t start the task`,
                            description: `Warning that this connected-app trigger cannot start the active task; other enabled triggers may still start it`,
                          }),
                        })
                      : null,
                  icon: h,
                  label: v,
                }),
        }),
      })),
      (t[31] = h),
      (t[32] = i),
      (t[33] = v),
      (t[34] = a),
      (t[35] = n),
      (t[36] = b))
    : (b = t[36]);
  let x;
  t[37] !== c || t[38] !== o
    ? ((x =
        (c == null && o) || (c?.condition_rows.length ?? 0) > 0
          ? (0, q.jsx)(gt, {
              title: (0, q.jsx)(`span`, {
                className: `select-none`,
                children: (0, q.jsx)(L, {
                  id: `inbox.automations.cloud.webhook.condition`,
                  defaultMessage: `Condition`,
                  description: `Section heading above the read-only event filters for a cloud webhook task in its details panel`,
                }),
              }),
              children: (0, q.jsx)(r, {
                children:
                  c == null
                    ? (0, q.jsx)(I, {
                        control: null,
                        label: (0, q.jsx)(`span`, {
                          className: `select-none`,
                          children: (0, q.jsx)(L, {
                            id: `inbox.automations.cloud.webhook.unavailable`,
                            defaultMessage: `Trigger details unavailable`,
                            description: `Shown instead of event filters when a cloud webhook task's trigger metadata is unavailable; it does not mean the trigger has no filters`,
                          }),
                        }),
                        variant: `nested`,
                      })
                    : c.condition_rows.map(Bt),
              }),
            })
          : null),
      (t[37] = c),
      (t[38] = o),
      (t[39] = x))
    : (x = t[39]);
  let S;
  return (
    t[40] !== b || t[41] !== x
      ? ((S = (0, q.jsxs)(q.Fragment, { children: [b, x] })), (t[40] = b), (t[41] = x), (t[42] = S))
      : (S = t[42]),
    S
  );
}
function Bt(e) {
  let { id: t, label: n, value: r } = e;
  return (0, q.jsx)(
    I,
    {
      control: (0, q.jsx)(`span`, {
        className: `max-w-64 text-end text-base break-words text-default select-text`,
        children: r,
      }),
      label: (0, q.jsx)(`span`, { className: `select-none`, children: n }),
      labelSizing: `content`,
      variant: `nested`,
    },
    t,
  );
}
var Vt, Ht, q;
function Ut() {
  return (Ut = e(() => {
    ((Vt = x()), (Ht = s()), M(), ke(), w(), R(), re(), ht(), (q = m()));
  }))();
}
function Wt(e) {
  let t = (0, J.c)(16),
    { draft: n, onChange: i, teamId: a } = e,
    o = ie(K),
    s = ce(Be, o),
    c;
  t[0] !== o || t[1] !== n.cloudTeam || t[2] !== a
    ? ((c = n.cloudTeam ?? (o != null && a != null ? { accountId: o, teamId: a } : null)),
      (t[0] = o),
      (t[1] = n.cloudTeam),
      (t[2] = a),
      (t[3] = c))
    : (c = t[3]);
  let l = c,
    u;
  if (n.id == null && (s || n.cloudTeam != null)) {
    let e = n.cloudTeam?.teamId ?? `personal`,
      r;
    t[4] !== n || t[5] !== i
      ? ((r = (e) => i({ ...n, cloudTeam: e, webhookTriggers: void 0 })), (t[4] = n), (t[5] = i), (t[6] = r))
      : (r = t[6]);
    let a;
    (t[7] !== n.cloudTeam || t[8] !== e || t[9] !== r
      ? ((a = (0, Y.jsx)(ft, { variant: `form`, selection: n.cloudTeam, onSelect: r }, e)),
        (t[7] = n.cloudTeam),
        (t[8] = e),
        (t[9] = r),
        (t[10] = a))
      : (a = t[10]),
      (u = a));
  } else if (l != null) {
    let e;
    (t[11] === l.teamId
      ? (e = t[12])
      : ((e = (0, Y.jsx)(mt, { teamId: l.teamId, variant: `form` })), (t[11] = l.teamId), (t[12] = e)),
      (u = e));
  } else {
    let e;
    (t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(I, {
          label: (0, Y.jsx)(L, {
            id: `automations.configuration.runsAs`,
            defaultMessage: `Run as`,
            description: `Label identifying whose account runs this scheduled task`,
          }),
          control: (0, Y.jsx)(L, {
            id: `settings.teams.automation.me`,
            defaultMessage: `Me`,
            description: `Selected value for a cloud scheduled task that runs as the current user`,
          }),
          variant: `nested`,
        })),
        (t[13] = e))
      : (e = t[13]),
      (u = e));
  }
  let d;
  return (
    t[14] === u
      ? (d = t[15])
      : ((d = (0, Y.jsx)(r, { variant: `outlined`, children: u })), (t[14] = u), (t[15] = d)),
    d
  );
}
function Gt(e) {
  let t = (0, J.c)(7),
    { draft: n, getOAuthReturnTo: i, teamId: a } = e,
    o = ie(K),
    s;
  t[0] !== o || t[1] !== n.cloudTeam || t[2] !== a
    ? ((s = n.cloudTeam ?? (o != null && a != null ? { accountId: o, teamId: a } : null)),
      (t[0] = o),
      (t[1] = n.cloudTeam),
      (t[2] = a),
      (t[3] = s))
    : (s = t[3]);
  let c = s,
    l;
  return (
    t[4] !== i || t[5] !== c
      ? ((l =
          c == null
            ? null
            : (0, Y.jsx)(r, {
                variant: `outlined`,
                children: (0, Y.jsx)(nn, { children: (0, Y.jsx)(Kt, { team: c, getOAuthReturnTo: i }) }),
              })),
        (t[4] = i),
        (t[5] = c),
        (t[6] = l))
      : (l = t[6]),
    l
  );
}
function Kt(e) {
  let t = (0, J.c)(13),
    { team: r, getOAuthReturnTo: i } = e,
    { data: a, error: o, refetch: s } = ce(Xe, r),
    c;
  t[0] === a ? (c = t[1]) : ((c = a == null ? null : Le(a)), (t[0] = a), (t[1] = c));
  let l = c;
  if (l != null) {
    let e;
    return (
      t[2] !== i || t[3] !== l || t[4] !== r
        ? ((e = (0, Y.jsx)(qt, { getOAuthReturnTo: i, ...r, serviceAccountId: l }, l)),
          (t[2] = i),
          (t[3] = l),
          (t[4] = r),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let u;
  t[6] === a
    ? (u = t[7])
    : ((u = a == null ? (0, Y.jsx)(n, {}) : (0, Y.jsx)(rn, {})), (t[6] = a), (t[7] = u));
  let d = u;
  if (o != null) {
    let e;
    t[8] === s ? (e = t[9]) : ((e = () => void s()), (t[8] = s), (t[9] = e));
    let n;
    t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Y.jsx)(L, {
          id: `automations.configuration.retryPlugins`,
          defaultMessage: `Couldn’t load plugins. Retry`,
          description: `Retries loading team plugins after a request fails`,
        })),
        (t[10] = n))
      : (n = t[10]);
    let r;
    (t[11] === e
      ? (r = t[12])
      : ((r = (0, Y.jsx)(te, { color: `ghost`, size: `toolbar`, onClick: e, children: n })),
        (t[11] = e),
        (t[12] = r)),
      (d = r));
  }
  return d;
}
function qt(e) {
  let t = (0, J.c)(22),
    r,
    i;
  t[0] === e
    ? ((r = t[1]), (i = t[2]))
    : (({ getOAuthReturnTo: r, ...i } = e), (t[0] = e), (t[1] = r), (t[2] = i));
  let a = ce(V, i.accountId),
    { data: o, error: s, isLoading: c, refetch: l } = ce(At, i),
    { error: u, isPending: d, refetch: f } = ce(kt, i),
    p;
  t[3] === i ? (p = t[4]) : ((p = { ...i, view: `installed`, query: `` }), (t[3] = i), (t[4] = p));
  let { data: m, error: h, isLoading: g, refetch: _, hasNextPage: v } = ce(Mt, p),
    y = (0, an.default)(o?.links.filter(Qt), Zt),
    { data: b } = S(ye({ accountId: i.accountId, appIds: y.map(Xt), enabled: a })),
    x;
  t[5] === b ? (x = t[6]) : ((x = new Map(b?.map(Yt))), (t[5] = b), (t[6] = x));
  let ee = x,
    C;
  t[7] === ee
    ? (C = t[8])
    : ((C = (e) => ({
        id: e.link_id,
        name: (0, Y.jsx)(L, {
          id: `automations.configuration.workspacePluginName`,
          defaultMessage: `{connectionName} · Workspace`,
          description: `Name of a plugin connection provided by the workspace, followed by its source`,
          values: { connectionName: e.name },
        }),
        logo: (0, Y.jsx)(De, {
          alt: e.connector_name,
          connectorId: e.connector_id,
          knownAppId: e.connector_name,
          logoUrl: ee.get(xe(e.connector_id))?.light,
          logoDarkUrl: ee.get(xe(e.connector_id))?.dark,
          size: 20,
          fallback: (0, Y.jsx)(ge, {}),
        }),
      })),
      (t[7] = ee),
      (t[8] = C));
  let w = [
      ...y.map(C),
      ...(m ?? [])
        .filter((e) => !y.some((t) => e.connector_id != null && xe(t.connector_id) === xe(e.connector_id)))
        .map(Jt),
    ],
    T;
  t[9] !== d || t[10] !== g || t[11] !== c
    ? ((T = d || g || c ? (0, Y.jsx)(n, {}) : null), (t[9] = d), (t[10] = g), (t[11] = c), (t[12] = T))
    : (T = t[12]);
  let E =
      u != null || h != null || s != null
        ? (0, Y.jsx)(te, {
            color: `ghost`,
            size: `toolbar`,
            onClick: () => {
              (l(), f(), _());
            },
            children: (0, Y.jsx)(L, {
              id: `automations.configuration.retryPlugins`,
              defaultMessage: `Couldn’t load plugins. Retry`,
              description: `Retries loading team plugins after a request fails`,
            }),
          })
        : (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsx)($t, { plugins: w, hasNextPage: v }),
              m != null && !c && w.length === 0 ? (0, Y.jsx)(rn, {}) : null,
            ],
          }),
    D;
  t[13] !== T || t[14] !== E
    ? ((D = (0, Y.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [T, E] })),
      (t[13] = T),
      (t[14] = E),
      (t[15] = D))
    : (D = t[15]);
  let O;
  t[16] !== r || t[17] !== i
    ? ((O = (0, Y.jsx)(Ot, { ...i, getOAuthReturnTo: r })), (t[16] = r), (t[17] = i), (t[18] = O))
    : (O = t[18]);
  let k;
  return (
    t[19] !== D || t[20] !== O
      ? ((k = (0, Y.jsxs)(Y.Fragment, { children: [D, O] })), (t[19] = D), (t[20] = O), (t[21] = k))
      : (k = t[21]),
    k
  );
}
function Jt(e) {
  return {
    id: e.id,
    name: e.release.display_name,
    logo: (0, Y.jsx)(De, {
      alt: e.release.display_name,
      size: 20,
      logoUrl: e.release.interface.logo_url,
      logoDarkUrl: e.release.interface.logo_url_dark,
      fallback: (0, Y.jsx)(ge, {}),
    }),
  };
}
function Yt(e) {
  return [xe(e.id), { light: e.icon_url, dark: e.icon_dark_url }];
}
function Xt(e) {
  return e.connector_id;
}
function Zt(e) {
  return xe(e.connector_id);
}
function Qt(e) {
  return e.enabled;
}
function $t(e) {
  let t = (0, J.c)(8),
    { plugins: n, hasNextPage: r } = e,
    i = r !== void 0 && r,
    a;
  t[0] === n ? (a = t[1]) : ((a = n.slice(0, 4).map(tn)), (t[0] = n), (t[1] = a));
  let o;
  t[2] !== i || t[3] !== n
    ? ((o =
        n.length > 4
          ? (0, Y.jsx)(se, {
              align: `end`,
              cloneCustomTrigger: !0,
              interactive: !0,
              side: `bottom`,
              variant: `rich`,
              tooltipContent: (0, Y.jsx)(`div`, {
                className: `min-w-48 p-2`,
                children: (0, Y.jsx)(`div`, {
                  className: `flex max-h-64 flex-col overflow-y-auto`,
                  children: n.slice(4).map(en),
                }),
              }),
              children: (0, Y.jsx)(te, {
                className: `shrink-0`,
                color: `ghost`,
                radius: `full`,
                size: `toolbar`,
                type: `button`,
                children: (0, Y.jsx)(L, {
                  id: `automations.routine.morePlugins`,
                  defaultMessage: `+{count}{more}`,
                  description: `Number of additional plugins available to the team; a trailing plus means another page is available`,
                  values: { count: n.length - 4, more: i ? `+` : `` },
                }),
              }),
            })
          : null),
      (t[2] = i),
      (t[3] = n),
      (t[4] = o))
    : (o = t[4]);
  let s;
  return (
    t[5] !== a || t[6] !== o
      ? ((s = (0, Y.jsxs)(Y.Fragment, { children: [a, o] })), (t[5] = a), (t[6] = o), (t[7] = s))
      : (s = t[7]),
    s
  );
}
function en(e) {
  return (0, Y.jsxs)(
    `div`,
    {
      className: `flex items-center gap-2 px-2 py-1.5 text-sm text-default`,
      children: [
        (0, Y.jsx)(`span`, { className: `inline-flex shrink-0`, children: e.logo }),
        (0, Y.jsx)(`span`, { className: `min-w-0`, children: e.name }),
      ],
    },
    e.id,
  );
}
function tn(e) {
  return (0, Y.jsx)(
    se,
    {
      followPointer: `desktop`,
      tooltipContent: e.name,
      children: (0, Y.jsx)(`span`, { className: `inline-flex shrink-0`, children: e.logo }),
    },
    e.id,
  );
}
function nn(e) {
  let t = (0, J.c)(3),
    { children: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Y.jsx)(L, {
        id: `automations.routine.availablePlugins`,
        defaultMessage: `Plugins`,
        description: `Label for plugins available to the selected team routine`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, Y.jsx)(I, {
          variant: `nested`,
          label: r,
          control: (0, Y.jsx)(`div`, {
            className: `flex min-w-0 items-center justify-end gap-2`,
            children: n,
          }),
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function rn() {
  let e = (0, J.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Y.jsx)(`span`, {
          className: `text-secondary`,
          children: (0, Y.jsx)(L, {
            id: `automations.routine.noPlugins`,
            defaultMessage: `None connected`,
            description: `Shown when no plugins are available for a team routine`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var J, an, Y;
function on() {
  return (on = e(() => {
    ((J = x()),
      y(),
      (an = t(o(), 1)),
      P(),
      M(),
      We(),
      Qe(),
      bt(),
      ke(),
      N(),
      w(),
      ne(),
      fe(),
      R(),
      re(),
      pt(),
      jt(),
      Nt(),
      we(),
      (Y = m()));
  }))();
}
function sn(e, t, n) {
  let r = e.get(K),
    i = e.get(be);
  if (r == null || i == null) return null;
  let a = crypto.randomUUID();
  e.set(un, {
    ...t,
    draft: { ...t.draft, eventTrigger: t.draft.eventTrigger ?? { selected: !1, when: `` } },
    initialDraft: {
      ...t.initialDraft,
      eventTrigger: t.initialDraft.eventTrigger ?? { selected: !1, when: `` },
    },
    id: a,
    accountId: r,
    userId: i,
    expiresAt: Date.now() + 36e5,
  });
  let o = new URL(n, `https://chatgpt.com`);
  return (
    t.draft.id == null &&
      o.searchParams.get(`automationMode`) !== `create` &&
      ((o.pathname = Re()), (o.search = `automationMode=create`)),
    o.searchParams.set(`automationDraftId`, a),
    o.pathname + o.search
  );
}
function cn(e, t, n = null) {
  let r = e.get(un);
  return r?.draft.id === n &&
    (n == null
      ? t.get(`automationMode`) === `create`
      : t.get(`automationMode`) !== `create` && t.get(`automationId`) === n) &&
    t.get(`automationDraftId`) === r.id &&
    r.accountId === e.get(K) &&
    r.userId === e.get(be) &&
    r.expiresAt > Date.now()
    ? { ...r, draft: ze(r.draft), initialDraft: ze(r.initialDraft) }
    : null;
}
function ln(e, t, n = null) {
  cn(e, t, n) != null && e.set(un, null);
}
var un;
function dn() {
  return (dn = e(() => {
    (Qe(), B(), Ge(), (un = z(`scheduled-task-oauth-draft-v1`, null)));
  }))();
}
var fn;
function pn() {
  return (pn = e(() => {
    (P(),
      a(),
      jt(),
      Nt(),
      we(),
      St(),
      (fn = he(ee, (e, { get: t }) => {
        let n = e.cloudTeam;
        if (n != null && !t(Be, n.accountId)) return !0;
        let r = t(yt, { draft: e, personal: n == null });
        if (n == null) return r?.status !== `loading`;
        let i = t(Xe, n);
        if (i.data == null) return i.error != null;
        let a = Le(i.data);
        if (a == null) return !0;
        let o = { ...n, serviceAccountId: a },
          s = t(kt, o),
          c = t(At, o),
          l = t(Mt, { ...o, view: `installed`, query: `` }),
          u =
            (s.data != null || s.error != null) &&
            (c.data != null || c.error != null) &&
            (s.error != null || c.error != null || l.data != null || l.error != null);
        return r?.status !== `loading` && u;
      })));
  }))();
}
function mn(e) {
  let t = (0, hn.c)(13),
    { isPaused: n, isPending: r, disabled: i, disabledReason: a, onClick: o, size: s } = e,
    c = s === void 0 ? `dialogAction` : s,
    l = r || void 0,
    u = i || void 0,
    d = i && a == null,
    f = i ? void 0 : o,
    p;
  t[0] === n
    ? (p = t[1])
    : ((p = n
        ? (0, X.jsx)(L, {
            id: `inbox.automations.resumeTooltip`,
            defaultMessage: `Resume`,
            description: `Tooltip label for resuming an automation`,
          })
        : (0, X.jsx)(L, {
            id: `inbox.automations.pauseTooltip`,
            defaultMessage: `Pause`,
            description: `Tooltip label for pausing an automation`,
          })),
      (t[0] = n),
      (t[1] = p));
  let m;
  t[2] !== r || t[3] !== c || t[4] !== l || t[5] !== u || t[6] !== d || t[7] !== f || t[8] !== p
    ? ((m = (0, X.jsx)(te, {
        "aria-busy": l,
        "aria-disabled": u,
        color: `secondary`,
        radius: `full`,
        size: c,
        type: `button`,
        disabled: d,
        loading: r,
        onClick: f,
        children: p,
      })),
      (t[2] = r),
      (t[3] = c),
      (t[4] = l),
      (t[5] = u),
      (t[6] = d),
      (t[7] = f),
      (t[8] = p),
      (t[9] = m))
    : (m = t[9]);
  let h;
  return (
    t[10] !== a || t[11] !== m
      ? ((h = (0, X.jsx)(se, { tooltipContent: a, children: m })), (t[10] = a), (t[11] = m), (t[12] = h))
      : (h = t[12]),
    h
  );
}
var hn, X;
function gn() {
  return (gn = e(() => {
    ((hn = x()), M(), N(), fe(), (X = m()));
  }))();
}
function _n(e) {
  let t = (0, bn.c)(39),
    { automation: n, disabled: a, hasChanges: o, isRunning: s, onRunningChange: c, onStarted: l } = e,
    u = i(ee),
    d = ce(W, `1159770884`),
    f = le(),
    p = (0, xn.useRef)(null),
    m;
  t[0] === d ? (m = t[1]) : ((m = { enabled: d }), (t[0] = d), (t[1] = m));
  let { data: h, isPending: g, error: _, refetch: v } = ce(Sn, n.id, m),
    { isPending: y } = ie(je),
    b = _ instanceof ae ? _.status : null,
    x = b === 404 || b === 410,
    S = b === 401 || b === 403,
    C = (h?.is_enabled ?? n.is_enabled) === !1 && !x && !S && h != null && h.pending_event_count > 0,
    w = !C && !o && _ == null && h != null && h.pending_event_count > 0,
    T,
    E;
  if (
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((T = () => () => p.current?.abort()), (E = []), (t[2] = T), (t[3] = E))
      : ((T = t[2]), (E = t[3])),
    (0, xn.useEffect)(T, E),
    !d)
  )
    return null;
  let D;
  t[4] !== n.conversation_id ||
  t[5] !== n.id ||
  t[6] !== a ||
  t[7] !== f ||
  t[8] !== c ||
  t[9] !== l ||
  t[10] !== v ||
  t[11] !== u
    ? ((D = (e) => {
        if (a || p.current != null) return;
        let t = u.get(K),
          r = new AbortController();
        ((p.current = r),
          c(!0),
          (e === `resume`
            ? u.get(je).mutateAsync({ automationId: n.id, isEnabled: !0 }).then(yn)
            : Ue.safePost(`/automation/{automation_id}/webhook_batch/run_now`, {
                parameters: { path: { automation_id: n.id } },
                requestBody: { request_id: globalThis.crypto.randomUUID() },
                signal: r.signal,
              }).then(vn)
          )
            .then((e) => {
              r.signal.aborted ||
                u.get(K) !== t ||
                e === 0 ||
                (u
                  .get(de)
                  .success(
                    f.formatMessage(
                      {
                        id: `automations.editor.webhook.runNowSuccessWithCount`,
                        defaultMessage: `Running {count, plural, one {# pending event} other {# pending events}}`,
                        description: `Success toast after the Scheduled task editor starts a queued webhook-event batch. The count is the number of events started.`,
                      },
                      { count: e },
                    ),
                  ),
                n.conversation_id != null && u.query.invalidate(Ie, n.conversation_id),
                l());
            })
            .catch(() => {
              !r.signal.aborted &&
                u.get(K) === t &&
                u
                  .get(de)
                  .danger(
                    e === `resume`
                      ? f.formatMessage({
                          id: `automations.scheduled.webhook.resumeError`,
                          defaultMessage: `Couldn’t resume task`,
                          description: `Error toast when resuming a paused webhook task from the Scheduled editor fails.`,
                        })
                      : f.formatMessage({
                          id: `automations.editor.webhook.runNowFailure`,
                          defaultMessage: `Couldn’t run pending events`,
                          description: `Error toast when the Scheduled task editor cannot start the queued webhook-event batch.`,
                        }),
                    {
                      errorAnalytics: {
                        toastId:
                          e === `resume` ? `toggle_automation_status` : `automation_editor_webhook_run_now`,
                      },
                    },
                  );
            })
            .finally(() => {
              ((p.current = null), !r.signal.aborted && u.get(K) === t && (c(!1), v()));
            }));
      }),
      (t[4] = n.conversation_id),
      (t[5] = n.id),
      (t[6] = a),
      (t[7] = f),
      (t[8] = c),
      (t[9] = l),
      (t[10] = v),
      (t[11] = u),
      (t[12] = D))
    : (D = t[12]);
  let O = D,
    k;
  if (g) {
    let e;
    (t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(L, {
          id: `automations.editor.webhook.pendingEventsLoading`,
          defaultMessage: `Checking pending events…`,
          description: `Loading status while the Scheduled task editor checks the queue of webhook events waiting to run.`,
        })),
        (t[13] = e))
      : (e = t[13]),
      (k = e));
  } else if (x) {
    let e;
    (t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(L, {
          id: `automations.editor.webhook.pendingEventsTerminal`,
          defaultMessage: `This task has ended and can’t process pending events`,
          description: `Status in the Scheduled editor when a webhook task no longer exists or has ended and cannot process queued events.`,
        })),
        (t[14] = e))
      : (e = t[14]),
      (k = e));
  } else if (_ != null) {
    let e;
    (t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(L, {
          id: `automations.editor.webhook.pendingEventsError`,
          defaultMessage: `Unable to check pending events`,
          description: `Error status in the Scheduled task editor when the queue of webhook events cannot be loaded.`,
        })),
        (t[15] = e))
      : (e = t[15]),
      (k = e));
  } else {
    let e = h?.pending_event_count,
      n;
    (t[16] === e
      ? (n = t[17])
      : ((n = (0, Z.jsx)(L, {
          id: `automations.editor.webhook.pendingEvents`,
          defaultMessage: `{count, plural, one {# event waiting} other {# events waiting}}`,
          description: `Queue count in the Scheduled task editor. The count is the number of webhook events waiting to run.`,
          values: { count: e },
        })),
        (t[16] = e),
        (t[17] = n)),
      (k = n));
  }
  let A;
  if (y) {
    let e;
    (t[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(L, {
          id: `automations.editor.webhook.pendingEventsStatusUpdating`,
          defaultMessage: `Updating task status…`,
          description: `Progress label while the Scheduled editor resumes a paused webhook task.`,
        })),
        (t[18] = e))
      : (e = t[18]),
      (A = e));
  } else if (s) {
    let e;
    (t[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(L, {
          id: `automations.editor.webhook.pendingEventsStarting`,
          defaultMessage: `Starting pending events…`,
          description: `Progress label while the Scheduled editor starts queued webhook events.`,
        })),
        (t[19] = e))
      : (e = t[19]),
      (A = e));
  } else if (C) {
    let e;
    (t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(L, {
          id: `automations.editor.webhook.pendingEventsPaused`,
          defaultMessage: `Task is paused. Resume to process pending events.`,
          description: `Explanation in the Scheduled task editor that a paused webhook task must be resumed before its queued events can run.`,
        })),
        (t[20] = e))
      : (e = t[20]),
      (A = e));
  }
  let j;
  t[21] !== w || t[22] !== _ || t[23] !== S || t[24] !== C || t[25] !== x
    ? ((j = null),
      C ? (j = `resume`) : _ != null && !S && !x ? (j = `retry`) : w && (j = `run`),
      (t[21] = w),
      (t[22] = _),
      (t[23] = S),
      (t[24] = C),
      (t[25] = x),
      (t[26] = j))
    : (j = t[26]);
  let M;
  t[27] === k
    ? (M = t[28])
    : ((M = (0, Z.jsx)(`span`, { "aria-live": `polite`, className: `select-none`, children: k })),
      (t[27] = k),
      (t[28] = M));
  let N;
  t[29] !== j || t[30] !== a || t[31] !== s || t[32] !== v || t[33] !== O
    ? ((N =
        j == null
          ? null
          : (0, Z.jsxs)(te, {
              color: `secondary`,
              disabled: a,
              loading: s,
              type: `button`,
              onClick: () => {
                j === `retry` ? v() : j != null && O(j);
              },
              children: [
                j === `resume` &&
                  (0, Z.jsx)(L, {
                    id: `automations.editor.webhook.resume`,
                    defaultMessage: `Resume`,
                    description: `Button in the Scheduled editor that resumes a paused webhook task so queued events can be processed.`,
                  }),
                j === `retry` &&
                  (0, Z.jsx)(L, {
                    id: `automations.editor.webhook.retry`,
                    defaultMessage: `Retry`,
                    description: `Button in the Scheduled editor that retries loading the queue of webhook events after a temporary error.`,
                  }),
                j === `run` &&
                  (0, Z.jsx)(L, {
                    id: `automations.editor.webhook.runNow`,
                    defaultMessage: `Run now`,
                    description: `Button in the Scheduled editor that immediately starts the pending webhook-event batch.`,
                  }),
              ],
            })),
      (t[29] = j),
      (t[30] = a),
      (t[31] = s),
      (t[32] = v),
      (t[33] = O),
      (t[34] = N))
    : (N = t[34]);
  let P;
  return (
    t[35] !== A || t[36] !== M || t[37] !== N
      ? ((P = (0, Z.jsx)(r, {
          children: (0, Z.jsx)(I, { size: `compact`, label: M, description: A, control: N }),
        })),
        (t[35] = A),
        (t[36] = M),
        (t[37] = N),
        (t[38] = P))
      : (P = t[38]),
    P
  );
}
function vn(e) {
  return e.flushed_event_count ?? 0;
}
function yn() {
  return 0;
}
var bn, xn, Z, Sn;
function Cn() {
  return (Cn = e(() => {
    ((bn = x()),
      P(),
      (xn = s()),
      M(),
      Qe(),
      Ye(),
      N(),
      A(),
      a(),
      R(),
      re(),
      qe(),
      Ze(),
      b(),
      Se(),
      (Z = m()),
      (Sn = oe(ee, (e, { get: t, scope: n }) => {
        let r = t(K);
        return {
          enabled: t(et).status === `allowed` && r != null,
          queryKey: [`cloud-automations`, `webhook-batch`, r, e],
          queryFn: async ({ signal: t }) => {
            let i = await Ue.safeGet(`/automation/{automation_id}/webhook_batch_state`, {
              parameters: { path: { automation_id: e } },
              signal: t,
            });
            if ((t.throwIfAborted(), i.is_enabled != null && n.get(K) === r)) {
              let t = i.is_enabled;
              (n.queryClient.setQueriesData({ queryKey: [`cloud-automations`, `scheduled-page`, r] }, (n) => {
                if (n == null) return n;
                let r = n.pages.map((n) =>
                  n.items.some((n) => n.id === e && n.is_enabled !== t)
                    ? {
                        ...n,
                        items: n.items.map((n) =>
                          n.id === e && n.is_enabled !== t ? { ...n, is_enabled: t } : n,
                        ),
                      }
                    : n,
                );
                return r.some((e, t) => e !== n.pages[t]) ? { ...n, pages: r } : void 0;
              }),
                n.query.setData(G, (n) =>
                  n?.accountId !== r ||
                  !n?.items.some(({ automation: n }) => n.id === e && n.is_enabled !== t)
                    ? n
                    : {
                        ...n,
                        items: n.items.map((n) =>
                          n.automation.id === e
                            ? { ...n, automation: { ...n.automation, is_enabled: t } }
                            : n,
                        ),
                      },
                ),
                n.query.setData(tt, e, (e) =>
                  e == null || e.automation.is_enabled === t
                    ? e
                    : { ...e, automation: { ...e.automation, is_enabled: t } },
                ));
            }
            return i;
          },
          refetchInterval: 5e3,
          refetchOnMount: `always`,
          refetchOnWindowFocus: `always`,
          retry: !1,
          staleTime: 0,
        };
      })));
  }))();
}
function wn(e) {
  let t = (0, On.c)(256),
    { ref: n, item: r, relatedActions: a, waitForInitialData: o, onOpen: s, onClose: c } = e,
    l = o !== void 0 && o,
    u = i(ee),
    f = le(),
    p = T(),
    m = O(),
    _ = Ve(),
    v = ie(Ee),
    y = (0, Q.useId)(),
    b = (0, Q.useId)(),
    x = (0, Q.useId)(),
    S = (0, Q.useContext)(me),
    C = Oe(),
    w = (0, Q.useRef)(null),
    E = (0, Q.useRef)(!1),
    A = (0, Q.useRef)(null),
    M = (0, Q.useRef)(null),
    { automation: N } = r,
    P;
  t[0] !== v || t[1] !== r.teamId || t[2] !== u
    ? ((P = (e) => {
        let t = u.get(K),
          n = r.teamId ?? e.team_id,
          i = {
            ...lt(e, v ? `configuration` : void 0),
            cloudTeam: t != null && n != null ? { accountId: t, teamId: n } : null,
          };
        return v ? ze(i) : i;
      }),
      (t[0] = v),
      (t[1] = r.teamId),
      (t[2] = u),
      (t[3] = P))
    : (P = t[3]);
  let ne = P,
    re;
  t[4] !== N || t[5] !== ne ? ((re = () => ne(N)), (t[4] = N), (t[5] = ne), (t[6] = re)) : (re = t[6]);
  let [F] = (0, Q.useState)(re),
    [ae, oe] = (0, Q.useState)(!1),
    se = ce(l && v ? fn : !0, F),
    fe;
  t[7] !== ae || t[8] !== s
    ? ((fe = () => {
        ae || (oe(!0), s?.());
      }),
      (t[7] = ae),
      (t[8] = s),
      (t[9] = fe))
    : (fe = t[9]);
  let pe = fe,
    I;
  t[10] !== N.id || t[11] !== F || t[12] !== m.search || t[13] !== u
    ? ((I = () => {
        let e = cn(u, new URLSearchParams(m.search), N.id);
        return e?.draft.cloudTeam?.teamId === F.cloudTeam?.teamId ? (e?.draft ?? F) : F;
      }),
      (t[10] = N.id),
      (t[11] = F),
      (t[12] = m.search),
      (t[13] = u),
      (t[14] = I))
    : (I = t[14]);
  let [R, he] = (0, Q.useState)(I),
    ge;
  t[15] !== R.scheduleConfig.oneTimeDate || t[16] !== R.scheduleConfig.time
    ? ((ge = (e) => {
        he(
          e.scheduleConfig.oneTimeDate !== R.scheduleConfig.oneTimeDate ||
            e.scheduleConfig.time !== R.scheduleConfig.time
            ? { ...e, scheduleConfig: { ...e.scheduleConfig, oneTimeSeconds: 0 } }
            : e,
        );
      }),
      (t[15] = R.scheduleConfig.oneTimeDate),
      (t[16] = R.scheduleConfig.time),
      (t[17] = ge))
    : (ge = t[17]);
  let z = ge,
    [ve, ye] = (0, Q.useState)(!1),
    [be, xe] = (0, Q.useState)(null),
    [Se, we] = (0, Q.useState)(!1),
    [Te, De] = (0, Q.useState)(null),
    [ke, Ae] = (0, Q.useState)(!1),
    { isPending: Ie } = ie(je),
    { isPending: Le } = ie(Pe),
    B = Se || ke || Ie || Le,
    V = Te ?? N,
    Be;
  t[18] === V ? (Be = t[19]) : ((Be = Ke(V)), (t[18] = V), (t[19] = Be));
  let He = Be === `completed`,
    Ue;
  t[20] !== V || t[21] !== He
    ? ((Ue = Fe(V).canManage && !He), (t[20] = V), (t[21] = He), (t[22] = Ue))
    : (Ue = t[22]);
  let H = Ue,
    We = N.timing_mode === `condition_watch`,
    Ge;
  t[23] === N ? (Ge = t[24]) : ((Ge = Ce(N)), (t[23] = N), (t[24] = Ge));
  let U = Ge,
    qe;
  t[25] !== ne || t[26] !== F || t[27] !== Te
    ? ((qe = Te == null ? F : ne(Te)), (t[25] = ne), (t[26] = F), (t[27] = Te), (t[28] = qe))
    : (qe = t[28]);
  let Je = qe,
    Ye;
  t[29] !== V || t[30] !== R ? ((Ye = st(V, R)), (t[29] = V), (t[30] = R), (t[31] = Ye)) : (Ye = t[31]);
  let Xe = Ye,
    Ze;
  t[32] !== R || t[33] !== Je
    ? ((Ze =
        R.name !== Je.name ||
        Me(R) !== Me(Je) ||
        (R.eventTrigger?.when ?? ``) !== (Je.eventTrigger?.when ?? ``)),
      (t[32] = R),
      (t[33] = Je),
      (t[34] = Ze))
    : (Ze = t[34]);
  let W = Ze,
    Qe;
  t[35] !== V || t[36] !== R || t[37] !== _
    ? ((Qe = ot(V, R, _)), (t[35] = V), (t[36] = R), (t[37] = _), (t[38] = Qe))
    : (Qe = t[38]);
  let G = Qe,
    $e;
  t[39] !== H || t[40] !== V || t[41] !== G || t[42] !== R || t[43] !== Xe || t[44] !== v
    ? (($e =
        H &&
        Xe &&
        R.name.trim().length > 0 &&
        R.prompt.trim().length > 0 &&
        (!v || (R.name.length <= 250 && !D(Me(R, V.prompt)))) &&
        G == null &&
        (!R.scheduleDirty || Ne(R.scheduleConfig))),
      (t[39] = H),
      (t[40] = V),
      (t[41] = G),
      (t[42] = R),
      (t[43] = Xe),
      (t[44] = v),
      (t[45] = $e))
    : ($e = t[45]);
  let et = $e,
    tt;
  t[46] !== N.id || t[47] !== m.search || t[48] !== u
    ? ((tt = () => {
        ln(u, new URLSearchParams(m.search), N.id);
      }),
      (t[46] = N.id),
      (t[47] = m.search),
      (t[48] = u),
      (t[49] = tt))
    : (tt = t[49]);
  let rt = tt,
    it;
  t[50] !== N.id || t[51] !== R || t[52] !== F || t[53] !== m.pathname || t[54] !== m.search || t[55] !== u
    ? ((it = () => {
        let e = sn(
          u,
          { draft: R, initialDraft: F, hasSelectedSchedule: !0 },
          `${Re()}?${new URLSearchParams({ automationId: N.id, automationSource: `cloud`, edit_modal: `true` })}`,
        );
        return e == null ? m.pathname + m.search : ((A.current = R), e);
      }),
      (t[50] = N.id),
      (t[51] = R),
      (t[52] = F),
      (t[53] = m.pathname),
      (t[54] = m.search),
      (t[55] = u),
      (t[56] = it))
    : (it = t[56]);
  let ct = it,
    dt;
  t[57] !== rt || t[58] !== c
    ? ((dt = () => {
        let e = M.current;
        ((M.current = null), (E.current = !0), rt(), c(), e?.(!0));
      }),
      (t[57] = rt),
      (t[58] = c),
      (t[59] = dt))
    : (dt = t[59]);
  let ft = dt,
    pt;
  t[60] !== ft || t[61] !== W || t[62] !== B
    ? ((pt = () => {
        B || (W ? ye(!0) : ft());
      }),
      (t[60] = ft),
      (t[61] = W),
      (t[62] = B),
      (t[63] = pt))
    : (pt = t[63]);
  let mt = pt,
    ht;
  (t[64] !== B || t[65] !== mt
    ? ((ht = () => ({
        requestClose: () =>
          B || M.current != null
            ? Promise.resolve(!1)
            : new Promise((e) => {
                ((M.current = e), mt());
              }),
      })),
      (t[64] = B),
      (t[65] = mt),
      (t[66] = ht))
    : (ht = t[66]),
    (0, Q.useImperativeHandle)(n, ht));
  let vt;
  t[67] !== et ||
  t[68] !== rt ||
  t[69] !== V ||
  t[70] !== R ||
  t[71] !== f ||
  t[72] !== C ||
  t[73] !== B ||
  t[74] !== c ||
  t[75] !== u
    ? ((vt = () => {
        if (B || w.current != null || !et) return;
        let e = u.get(K),
          t = new AbortController();
        ((w.current = t), we(!0));
        let n = () => !t.signal.aborted && C() && u.get(K) === e;
        ut(u, { automation: V, draft: R, signal: t.signal })
          .then(() => {
            n() && ((E.current = !0), rt(), c());
          })
          .catch((e) => {
            n() &&
              u
                .get(de)
                .danger(
                  f.formatMessage({
                    id: `automations.scheduled.editor.saveError`,
                    defaultMessage: `Couldn’t save task`,
                    description: `Error toast when a Scheduled task edit could not be saved; the editor stays open with the user's draft intact`,
                  }),
                  {
                    errorAnalytics: { toastId: `automations.scheduled.editor.saveError` },
                    description: e instanceof Error ? e.message : void 0,
                  },
                );
          })
          .finally(() => {
            ((w.current = null), C() && we(!1));
          });
      }),
      (t[67] = et),
      (t[68] = rt),
      (t[69] = V),
      (t[70] = R),
      (t[71] = f),
      (t[72] = C),
      (t[73] = B),
      (t[74] = c),
      (t[75] = u),
      (t[76] = vt))
    : (vt = t[76]);
  let yt = vt,
    bt,
    St;
  (t[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((bt = () => () => {
        (w.current?.abort(), M.current?.(!1));
      }),
      (St = []),
      (t[77] = bt),
      (t[78] = St))
    : ((bt = t[77]), (St = t[78])),
    (0, Q.useEffect)(bt, St));
  let Ct;
  t[79] === R
    ? (Ct = t[80])
    : ((Ct = (e) => {
        A.current !== R && e.preventDefault();
      }),
      (t[79] = R),
      (t[80] = Ct));
  let Tt = (0, Q.useEffectEvent)(Ct),
    Et;
  t[81] !== W || t[82] !== Tt
    ? ((Et = () => {
        if (W)
          return (
            window.addEventListener(`beforeunload`, Tt),
            () => window.removeEventListener(`beforeunload`, Tt)
          );
      }),
      (t[81] = W),
      (t[82] = Tt),
      (t[83] = Et))
    : (Et = t[83]);
  let Ot;
  (t[84] === W ? (Ot = t[85]) : ((Ot = [W]), (t[84] = W), (t[85] = Ot)), (0, Q.useEffect)(Et, Ot));
  let kt = We ? `text-sm leading-5 font-medium uppercase` : `text-base leading-7 font-normal`,
    At = We || (V.is_enabled && !He) ? `text-info` : `text-tertiary`,
    jt;
  t[86] !== kt || t[87] !== At
    ? ((jt = g(`select-none`, kt, At)), (t[86] = kt), (t[87] = At), (t[88] = jt))
    : (jt = t[88]);
  let Mt;
  t[89] !== V || t[90] !== We || t[91] !== r.teamId
    ? ((Mt = We
        ? (0, $.jsx)(L, {
            id: `automations.scheduled.editor.monitoring`,
            defaultMessage: `Monitoring`,
            description: `Task type in the Scheduled editor for a task watching for changes`,
          })
        : (0, $.jsx)(Ft, { automation: V, teamId: r.teamId })),
      (t[89] = V),
      (t[90] = We),
      (t[91] = r.teamId),
      (t[92] = Mt))
    : (Mt = t[92]);
  let Nt;
  t[93] !== jt || t[94] !== Mt
    ? ((Nt = (0, $.jsx)(`p`, { className: jt, children: Mt })), (t[93] = jt), (t[94] = Mt), (t[95] = Nt))
    : (Nt = t[95]);
  let Pt;
  t[96] === f
    ? (Pt = t[97])
    : ((Pt = f.formatMessage({
        id: `automations.editor.title`,
        defaultMessage: `Title`,
        description: `Accessible label for the editable title in the Scheduled task editor`,
      })),
      (t[96] = f),
      (t[97] = Pt));
  let It = !H,
    zt;
  t[98] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((zt = (e) => he((t) => ({ ...t, name: e.target.value }))), (t[98] = zt))
    : (zt = t[98]);
  let Bt;
  t[99] !== R.name || t[100] !== B || t[101] !== Pt || t[102] !== It || t[103] !== y
    ? ((Bt = (0, $.jsx)(`textarea`, {
        id: y,
        className: `m-0 block field-sizing-content w-full min-w-0 resize-none overflow-hidden rounded-lg border-0 bg-transparent p-0 text-lg leading-7 font-medium wrap-anywhere text-default outline-none`,
        name: `title`,
        "aria-label": Pt,
        rows: 1,
        readOnly: It,
        disabled: B,
        value: R.name,
        onChange: zt,
        onKeyDown: Tn,
      })),
      (t[99] = R.name),
      (t[100] = B),
      (t[101] = Pt),
      (t[102] = It),
      (t[103] = y),
      (t[104] = Bt))
    : (Bt = t[104]);
  let Vt;
  t[105] !== Nt || t[106] !== Bt
    ? ((Vt = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-2`, children: [Nt, Bt] })),
      (t[105] = Nt),
      (t[106] = Bt),
      (t[107] = Vt))
    : (Vt = t[107]);
  let Ht = Vt,
    q;
  t[108] !== H || t[109] !== V || t[110] !== v || t[111] !== B || t[112] !== r
    ? ((q = H
        ? (0, $.jsx)(at, {
            item: { ...r, automation: V },
            statusMutation: je,
            onStatusChanged: De,
            renderActions: (e) => {
              let { isPaused: t, isStatusPending: n, pauseAction: r, resumeAction: i } = e;
              return (0, $.jsx)(mn, {
                isPaused: t,
                isPending: n ?? !1,
                disabled: B || (t ? i : r).disabled === !0,
                disabledReason: t ? i.disabledReason : void 0,
                onClick: (t ? i : r).onSelect,
                size: v ? `dialogAction` : `medium`,
              });
            },
          })
        : null),
      (t[108] = H),
      (t[109] = V),
      (t[110] = v),
      (t[111] = B),
      (t[112] = r),
      (t[113] = q))
    : (q = t[113]);
  let Ut = q,
    Kt = !et || B,
    qt;
  t[114] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qt = (0, $.jsx)(L, {
        id: `automations.scheduled.editor.save`,
        defaultMessage: `Save`,
        description: `Button that saves edited Scheduled task instructions and schedule`,
      })),
      (t[114] = qt))
    : (qt = t[114]);
  let Jt;
  t[115] !== x || t[116] !== Se || t[117] !== Kt
    ? ((Jt = (0, $.jsx)(te, { disabled: Kt, loading: Se, form: x, type: `submit`, children: qt })),
      (t[115] = x),
      (t[116] = Se),
      (t[117] = Kt),
      (t[118] = Jt))
    : (Jt = t[118]);
  let Yt;
  t[119] !== Ut || t[120] !== Jt
    ? ((Yt = (0, $.jsxs)(h, { expandSingleButton: !1, children: [Ut, Jt] })),
      (t[119] = Ut),
      (t[120] = Jt),
      (t[121] = Yt))
    : (Yt = t[121]);
  let Xt = Yt,
    Zt,
    Qt;
  t[122] === yt
    ? ((Zt = t[123]), (Qt = t[124]))
    : ((Zt = (e) => nt(e, () => yt())),
      (Qt = (e) => {
        (e.preventDefault(), yt());
      }),
      (t[122] = yt),
      (t[123] = Zt),
      (t[124] = Qt));
  let $t;
  t[125] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($t = (0, $.jsx)(ue, {
        className: `sr-only`,
        children: (0, $.jsx)(L, {
          id: `automations.scheduled.editor.title`,
          defaultMessage: `Edit task`,
          description: `Accessible title of the Scheduled task editor dialog`,
        }),
      })),
      (t[125] = $t))
    : ($t = t[125]);
  let en;
  t[126] === Ht
    ? (en = t[127])
    : ((en = (0, $.jsxs)(_e, { children: [$t, Ht] })), (t[126] = Ht), (t[127] = en));
  let tn;
  t[128] === pe
    ? (tn = t[129])
    : ((tn = (e) => {
        e != null && pe();
      }),
      (t[128] = pe),
      (t[129] = tn));
  let nn = !H || B,
    rn;
  t[130] !== V || t[131] !== U || t[132] !== p
    ? ((rn = U
        ? (0, $.jsx)(Rt, {
            triggers: V.webhook_triggers,
            isAutomationEnabled: V.is_enabled,
            showUnavailableConditions: !1,
            onOpenTrigger: (e) => {
              p(`/settings/connectors?${new URLSearchParams({ connector: e.connector_id })}`);
            },
          })
        : null),
      (t[130] = V),
      (t[131] = U),
      (t[132] = p),
      (t[133] = rn))
    : (rn = t[133]);
  let J = `${b}-label`,
    an;
  t[134] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((an = (0, $.jsx)(L, {
        id: `automations.editor.promptSectionLabel`,
        defaultMessage: `Prompt`,
        description: `Label above the editable instructions in the Scheduled task editor`,
      })),
      (t[134] = an))
    : (an = t[134]);
  let Y;
  t[135] !== b || t[136] !== J
    ? ((Y = (0, $.jsx)(`label`, { id: J, className: `uppercase select-none`, htmlFor: b, children: an })),
      (t[135] = b),
      (t[136] = J),
      (t[137] = Y))
    : (Y = t[137]);
  let on = `${b}-label`,
    un = `${b}-label`,
    dn = !H,
    pn;
  t[138] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pn = (e) => he((t) => ({ ...t, prompt: e.target.value }))), (t[138] = pn))
    : (pn = t[138]);
  let hn;
  t[139] !== R.prompt || t[140] !== b || t[141] !== un || t[142] !== dn
    ? ((hn = (0, $.jsx)(`textarea`, {
        id: b,
        className: `m-0 block field-sizing-content max-h-56 min-h-28 w-full min-w-0 resize-none overflow-y-auto border-0 bg-transparent p-0 text-base leading-7 font-normal wrap-anywhere text-default outline-none`,
        "aria-labelledby": un,
        name: `prompt`,
        readOnly: dn,
        rows: 1,
        value: R.prompt,
        onChange: pn,
      })),
      (t[139] = R.prompt),
      (t[140] = b),
      (t[141] = un),
      (t[142] = dn),
      (t[143] = hn))
    : (hn = t[143]);
  let X;
  t[144] !== on || t[145] !== hn
    ? ((X = (0, $.jsx)(`label`, {
        className: `block cursor-text rounded-[20px] border border-default p-6 focus-within:border-ring`,
        "aria-labelledby": on,
        children: hn,
      })),
      (t[144] = on),
      (t[145] = hn),
      (t[146] = X))
    : (X = t[146]);
  let gn;
  t[147] !== Y || t[148] !== X
    ? ((gn = (0, $.jsx)(gt, { title: Y, children: X })), (t[147] = Y), (t[148] = X), (t[149] = gn))
    : (gn = t[149]);
  let vn;
  t[150] !== N.conversation_id ||
  t[151] !== N.source_conversation_is_work_mode ||
  t[152] !== H ||
  t[153] !== V ||
  t[154] !== Xe ||
  t[155] !== B ||
  t[156] !== ke ||
  t[157] !== U ||
  t[158] !== p ||
  t[159] !== c
    ? ((vn =
        U && N.source_conversation_is_work_mode === !0
          ? (0, $.jsx)(_n, {
              automation: V,
              disabled: !H || B,
              hasChanges: Xe,
              isRunning: ke,
              onRunningChange: Ae,
              onStarted: () => {
                ((E.current = !0), c(), N.conversation_id != null && p(k(N.conversation_id)));
              },
            })
          : null),
      (t[150] = N.conversation_id),
      (t[151] = N.source_conversation_is_work_mode),
      (t[152] = H),
      (t[153] = V),
      (t[154] = Xe),
      (t[155] = B),
      (t[156] = ke),
      (t[157] = U),
      (t[158] = p),
      (t[159] = c),
      (t[160] = vn))
    : (vn = t[160]);
  let yn;
  t[161] !== V || t[162] !== R || t[163] !== U
    ? ((yn = U ? null : (0, $.jsx)(Lt, { automation: V, draft: R, onChange: he })),
      (t[161] = V),
      (t[162] = R),
      (t[163] = U),
      (t[164] = yn))
    : (yn = t[164]);
  let bn;
  t[165] === G
    ? (bn = t[166])
    : ((bn =
        G == null
          ? null
          : (0, $.jsxs)(`p`, {
              className: `text-sm text-danger select-none`,
              role: `alert`,
              children: [
                G === `too-far` &&
                  (0, $.jsx)(L, {
                    id: `automations.scheduled.editor.dateTooFar`,
                    defaultMessage: `Choose a date within the next two years`,
                    description: `Validation error in the Scheduled task editor when a one-time task is scheduled two years or more in the future`,
                  }),
                G === `end-past` &&
                  (0, $.jsx)(L, {
                    id: `automations.scheduled.editor.endDateInPast`,
                    defaultMessage: `Choose an end date today or later`,
                    description: `Validation error in the Scheduled task editor when a recurrence end date is in the past`,
                  }),
                G === `past` &&
                  (0, $.jsx)(L, {
                    id: `automations.scheduled.editor.dateInPast`,
                    defaultMessage: `Choose a date and time in the future`,
                    description: `Validation error in the Scheduled task editor when a one-time task is scheduled in the past`,
                  }),
              ],
            })),
      (t[165] = G),
      (t[166] = bn));
  let xn;
  t[167] !== tn ||
  t[168] !== nn ||
  t[169] !== rn ||
  t[170] !== gn ||
  t[171] !== vn ||
  t[172] !== yn ||
  t[173] !== bn
    ? ((xn = (0, $.jsxs)(`fieldset`, {
        ref: tn,
        className: `flex min-w-0 flex-col gap-6`,
        disabled: nn,
        children: [rn, gn, vn, yn, bn],
      })),
      (t[167] = tn),
      (t[168] = nn),
      (t[169] = rn),
      (t[170] = gn),
      (t[171] = vn),
      (t[172] = yn),
      (t[173] = bn),
      (t[174] = xn))
    : (xn = t[174]);
  let Z;
  t[175] === Xt ? (Z = t[176]) : ((Z = (0, $.jsx)(_e, { children: Xt })), (t[175] = Xt), (t[176] = Z));
  let Sn;
  t[177] !== x ||
  t[178] !== a ||
  t[179] !== Zt ||
  t[180] !== Qt ||
  t[181] !== en ||
  t[182] !== xn ||
  t[183] !== Z
    ? ((Sn = (0, $.jsxs)(d, {
        as: `form`,
        id: x,
        size: `viewport`,
        onKeyDown: Zt,
        onSubmit: Qt,
        children: [en, a, xn, Z],
      })),
      (t[177] = x),
      (t[178] = a),
      (t[179] = Zt),
      (t[180] = Qt),
      (t[181] = en),
      (t[182] = xn),
      (t[183] = Z),
      (t[184] = Sn))
    : (Sn = t[184]);
  let Cn = Sn,
    wn;
  if (v) {
    let e;
    if (U) {
      let n;
      (t[185] !== V.is_enabled || t[186] !== V.webhook_triggers
        ? ((n = (0, $.jsx)(Rt, {
            variant: `form`,
            triggers: V.webhook_triggers,
            isAutomationEnabled: V.is_enabled,
            showUnavailableConditions: !1,
          })),
          (t[185] = V.is_enabled),
          (t[186] = V.webhook_triggers),
          (t[187] = n))
        : (n = t[187]),
        (e = n));
    } else if (We) {
      let n;
      (t[188] !== V || t[189] !== R
        ? ((n = (0, $.jsx)(Lt, { form: !0, automation: V, draft: R, onChange: he })),
          (t[188] = V),
          (t[189] = R),
          (t[190] = n))
        : (n = t[190]),
        (e = n));
    } else {
      let n = R.cloudTeam == null && r.teamId == null,
        i;
      t[191] !== N || t[192] !== ne || t[193] !== z || t[194] !== R.scheduleConfig.oneTimeDate
        ? ((i = (e) => {
            if (
              R.scheduleConfig.oneTimeDate != null &&
              e.scheduleConfig.oneTimeDate == null &&
              e.webhookTriggers == null
            ) {
              let { untilDate: t, untilTime: n } = ne(N).scheduleConfig;
              z({ ...e, scheduleConfig: { ...e.scheduleConfig, untilDate: t, untilTime: n } });
              return;
            }
            z(e);
          }),
          (t[191] = N),
          (t[192] = ne),
          (t[193] = z),
          (t[194] = R.scheduleConfig.oneTimeDate),
          (t[195] = i))
        : (i = t[195]);
      let a;
      t[196] !== z || t[197] !== R
        ? ((a = (e) => {
            z({
              ...R,
              rawRrule: null,
              scheduleDirty: !0,
              scheduleConfig: {
                ...R.scheduleConfig,
                untilDate: e,
                untilTime: e == null ? void 0 : `23:59:59`,
              },
            });
          }),
          (t[196] = z),
          (t[197] = R),
          (t[198] = a))
        : (a = t[198]);
      let o;
      (t[199] !== R || t[200] !== n || t[201] !== i || t[202] !== a
        ? ((o = (0, $.jsx)(Dt, {
            personal: n,
            draft: R,
            onChange: i,
            onChangeEndDate: a,
            executionLocation: `cloud`,
          })),
          (t[199] = R),
          (t[200] = n),
          (t[201] = i),
          (t[202] = a),
          (t[203] = o))
        : (o = t[203]),
        (e = o));
    }
    let n;
    t[204] !== H || t[205] !== F || t[206] !== We || t[207] !== U
      ? ((n = H
          ? {
              executionLocation: `cloud`,
              hasSelectedSchedule: !0,
              initialDraft: F,
              triggerMode: U || We ? `read-only` : `time`,
            }
          : void 0),
        (t[204] = H),
        (t[205] = F),
        (t[206] = We),
        (t[207] = U),
        (t[208] = n))
      : (n = t[208]);
    let i = Se || ke || Le,
      a = !H,
      o;
    t[209] === yt
      ? (o = t[210])
      : ((o = (e) => {
          (e.preventDefault(), yt());
        }),
        (t[209] = yt),
        (t[210] = o));
    let s, c;
    t[211] !== R || t[212] !== r.teamId
      ? ((s = (0, $.jsx)(xt, { draft: R, setDraft: he, executionLocation: `cloud`, teamId: r.teamId })),
        (c =
          R.cloudTeam == null && r.teamId == null
            ? null
            : (0, $.jsx)(Wt, { draft: R, onChange: he, teamId: r.teamId })),
        (t[211] = R),
        (t[212] = r.teamId),
        (t[213] = s),
        (t[214] = c))
      : ((s = t[213]), (c = t[214]));
    let l;
    t[215] !== R || t[216] !== ct || t[217] !== r.teamId
      ? ((l = (0, $.jsx)(Gt, { draft: R, teamId: r.teamId, getOAuthReturnTo: ct })),
        (t[215] = R),
        (t[216] = ct),
        (t[217] = r.teamId),
        (t[218] = l))
      : (l = t[218]);
    let u;
    (t[219] !== et ||
    t[220] !== z ||
    t[221] !== G ||
    t[222] !== R ||
    t[223] !== ct ||
    t[224] !== pe ||
    t[225] !== Ie ||
    t[226] !== mt ||
    t[227] !== e ||
    t[228] !== Ut ||
    t[229] !== n ||
    t[230] !== i ||
    t[231] !== a ||
    t[232] !== o ||
    t[233] !== s ||
    t[234] !== c ||
    t[235] !== l
      ? ((u = (0, $.jsx)(wt, {
          onOpen: pe,
          executionLocation: `cloud`,
          setup: n,
          getOAuthReturnTo: ct,
          draft: R,
          onChange: z,
          onClose: mt,
          canSave: et,
          isSaving: i,
          isChangingStatus: Ie,
          disabled: a,
          statusAction: Ut,
          onSubmit: o,
          dateError: G,
          schedule: e,
          advanced: s,
          owner: c,
          plugins: l,
        })),
        (t[219] = et),
        (t[220] = z),
        (t[221] = G),
        (t[222] = R),
        (t[223] = ct),
        (t[224] = pe),
        (t[225] = Ie),
        (t[226] = mt),
        (t[227] = e),
        (t[228] = Ut),
        (t[229] = n),
        (t[230] = i),
        (t[231] = a),
        (t[232] = o),
        (t[233] = s),
        (t[234] = c),
        (t[235] = l),
        (t[236] = u))
      : (u = t[236]),
      (wn = u));
  } else {
    let e;
    t[237] === mt
      ? (e = t[238])
      : ((e = (e) => {
          e || mt();
        }),
        (t[237] = mt),
        (t[238] = e));
    let n = be ?? void 0,
      r;
    t[239] !== Cn || t[240] !== n
      ? ((r = (0, $.jsx)(_t, { radixPortalContainer: n, children: Cn })),
        (t[239] = Cn),
        (t[240] = n),
        (t[241] = r))
      : (r = t[241]);
    let i;
    t[242] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(`div`, { ref: xe })), (t[242] = i))
      : (i = t[242]);
    let a;
    (t[243] !== e || t[244] !== r
      ? ((a = (0, $.jsxs)(j, {
          contentOverflow: `visible`,
          open: !0,
          size: `xwide`,
          variant: `chatgpt`,
          onOpenChange: e,
          children: [r, i],
        })),
        (t[243] = e),
        (t[244] = r),
        (t[245] = a))
      : (a = t[245]),
      (wn = a));
  }
  let kn;
  return (
    t[246] !== rt ||
    t[247] !== S ||
    t[248] !== wn ||
    t[249] !== ft ||
    t[250] !== ae ||
    t[251] !== W ||
    t[252] !== se ||
    t[253] !== B ||
    t[254] !== ve
      ? ((kn =
          ae || se
            ? (0, $.jsxs)($.Fragment, {
                children: [
                  wn,
                  S == null
                    ? null
                    : (0, $.jsx)(En, {
                        isPending: B,
                        onDiscard: rt,
                        shouldBlock: () => (W || B) && !E.current,
                      }),
                  ve
                    ? (0, $.jsx)(Dn, {
                        isPending: B,
                        onKeepEditing: () => {
                          (ye(!1), M.current?.(!1), (M.current = null));
                        },
                        onDiscard: ft,
                      })
                    : null,
                ],
              })
            : null),
        (t[246] = rt),
        (t[247] = S),
        (t[248] = wn),
        (t[249] = ft),
        (t[250] = ae),
        (t[251] = W),
        (t[252] = se),
        (t[253] = B),
        (t[254] = ve),
        (t[255] = kn))
      : (kn = t[255]),
    kn
  );
}
function Tn(e) {
  e.key === `Enter` &&
    !e.shiftKey &&
    !e.nativeEvent.isComposing &&
    (e.preventDefault(), e.currentTarget.form?.requestSubmit());
}
function En(e) {
  let t = (0, On.c)(4),
    { isPending: n, onDiscard: r, shouldBlock: i } = e,
    a = ve(i),
    o;
  return (
    t[0] !== a || t[1] !== n || t[2] !== r
      ? ((o =
          a.state === `blocked` && !a.isCommitting
            ? (0, $.jsx)(Dn, {
                isPending: n,
                onKeepEditing: () => a.reset(),
                onDiscard: () => {
                  (r?.(), a.proceed());
                },
              })
            : null),
        (t[0] = a),
        (t[1] = n),
        (t[2] = r),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function Dn(e) {
  let t = (0, On.c)(23),
    { isPending: n, onDiscard: r, onKeepEditing: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = { shouldStopPointerDownPropagation: !1 }), (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === i
    ? (o = t[2])
    : ((o = (e) => {
        e || i();
      }),
      (t[1] = i),
      (t[2] = o));
  let s;
  t[3] !== n || t[4] !== r
    ? ((s = (e) => {
        (e.preventDefault(), n || r());
      }),
      (t[3] = n),
      (t[4] = r),
      (t[5] = s))
    : (s = t[5]);
  let c;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(ue, {
        className: `text-form-title`,
        children: (0, $.jsx)(L, {
          id: `automations.editor.discardChangesTitle`,
          defaultMessage: `Discard changes?`,
          description: `Confirmation title when closing the Scheduled task editor with unsaved changes`,
        }),
      })),
      (t[6] = c))
    : (c = t[6]);
  let l;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(_e, {
        children: (0, $.jsx)(C, {
          subtitleSize: `sm`,
          subtitleTone: `secondary`,
          title: c,
          subtitle: (0, $.jsx)(p, {
            className: `text-form-body font-normal`,
            children: (0, $.jsx)(L, {
              id: `automations.scheduled.editor.discardDescription`,
              defaultMessage: `Your changes will not be saved`,
              description: `Warning in the discard confirmation for the Scheduled task editor`,
            }),
          }),
        }),
      })),
      (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(L, {
        id: `automations.editor.keepEditing`,
        defaultMessage: `Keep editing`,
        description: `Button that returns to the Scheduled task editor without discarding the draft`,
      })),
      (t[8] = u))
    : (u = t[8]);
  let f;
  t[9] === i
    ? (f = t[10])
    : ((f = (0, $.jsx)(te, {
        color: `secondary`,
        focusRing: `surface`,
        size: `dialogAction`,
        type: `button`,
        onClick: i,
        children: u,
      })),
      (t[9] = i),
      (t[10] = f));
  let m;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(L, {
        id: `automations.editor.discardChanges`,
        defaultMessage: `Discard changes`,
        description: `Button that closes the Scheduled task editor and discards unsaved changes`,
      })),
      (t[11] = m))
    : (m = t[11]);
  let g;
  t[12] === n
    ? (g = t[13])
    : ((g = (0, $.jsx)(te, {
        color: `danger`,
        disabled: n,
        size: `dialogAction`,
        type: `submit`,
        children: m,
      })),
      (t[12] = n),
      (t[13] = g));
  let _;
  t[14] !== f || t[15] !== g
    ? ((_ = (0, $.jsx)(_e, { children: (0, $.jsxs)(h, { children: [f, g] }) })),
      (t[14] = f),
      (t[15] = g),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] !== _ || t[18] !== s
    ? ((v = (0, $.jsxs)(d, { as: `form`, onSubmit: s, children: [l, _] })),
      (t[17] = _),
      (t[18] = s),
      (t[19] = v))
    : (v = t[19]);
  let y;
  return (
    t[20] !== v || t[21] !== o
      ? ((y = (0, $.jsx)(j, {
          open: !0,
          showDialogClose: !1,
          size: `narrow`,
          variant: `form`,
          contentProps: a,
          onOpenChange: o,
          children: v,
        })),
        (t[20] = v),
        (t[21] = o),
        (t[22] = y))
      : (y = t[22]),
    y
  );
}
var On, Q, $;
function kn() {
  return (kn = e(() => {
    ((On = x()),
      vt(),
      _(),
      P(),
      pe(),
      (Q = s()),
      M(),
      v(),
      Qe(),
      He(),
      Tt(),
      Et(),
      Te(),
      Ct(),
      on(),
      dn(),
      E(),
      N(),
      f(),
      c(),
      A(),
      Je(),
      rt(),
      a(),
      H(),
      U(),
      B(),
      $e(),
      ht(),
      it(),
      Ae(),
      Se(),
      Ut(),
      Pt(),
      dt(),
      pn(),
      gn(),
      ct(),
      It(),
      Cn(),
      ($ = m()));
  }))();
}
export {
  mn as a,
  cn as c,
  Gt as d,
  on as f,
  kn as i,
  dn as l,
  Ut as m,
  wn as n,
  gn as o,
  Rt as p,
  En as r,
  ln as s,
  Dn as t,
  sn as u,
};
//# sourceMappingURL=editor-dialog-2b451bd55a6d.js.map
