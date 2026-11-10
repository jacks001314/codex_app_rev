import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  BV as r,
  Cat as i,
  Cot as a,
  Ext as o,
  HG as s,
  IDt as c,
  Ixt as l,
  JC as u,
  KB as d,
  O_t as f,
  Pxt as p,
  QC as m,
  Qot as h,
  TJ as g,
  VDt as _,
  Vxt as v,
  Zot as y,
  Zxt as b,
  _Mt as x,
  _O as S,
  _xt as C,
  cO as w,
  cz as T,
  fO as E,
  frt as D,
  gMt as ee,
  gO as O,
  hot as te,
  hrt as ne,
  i3 as k,
  iw as re,
  jDt as A,
  lO as j,
  lot as M,
  mO as N,
  nSt as P,
  nxt as ie,
  oO as ae,
  qC as F,
  r3 as oe,
  rst as I,
  sMt as se,
  sO as ce,
  sz as le,
  t3 as ue,
  tw as L,
  vO as de,
  vzt as fe,
  wot as R,
  wxt as pe,
  xMt as z,
  xat as me,
  yzt as he,
  zxt as ge,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Ar as _e,
  Akr as B,
  Blt as ve,
  Bur as ye,
  FAn as be,
  GMr as V,
  J5t as xe,
  K5t as Se,
  Lkr as Ce,
  OAr as we,
  OPr as Te,
  PAr as Ee,
  QAr as De,
  Rkr as Oe,
  SAn as ke,
  Udr as Ae,
  VAr as je,
  Vlt as Me,
  XMr as Ne,
  YOr as H,
  ZMr as U,
  aAr as Pe,
  bkr as Fe,
  dAr as Ie,
  ekr as Le,
  h3n as Re,
  hzt as W,
  iNr as ze,
  iPr as Be,
  kPr as G,
  lAr as Ve,
  m3n as He,
  mzt as Ue,
  nN as We,
  nT as Ge,
  rNr as Ke,
  rT as qe,
  rkr as K,
  sPr as Je,
  tAr as Ye,
  tN as q,
  tNr as Xe,
  tkr as Ze,
  ukr as Qe,
  xkr as $e,
  zur as et,
} from "./app-initial-5851df3f6cb1.js";
import { dm as tt, um as nt } from "./app-primary-fe8a450b3b04.js";
import { n as rt, t as it } from "./cloud-automation-actions-3a594ba7517b.js";
import { a as at, c as ot, l as st, n as ct } from "./schedule-draft-871290737b78.js";
import { o as lt, r as ut } from "./conversation-actions-2dd1edaae253.js";
import { n as dt, r as ft, t as pt } from "./automation-team-row-7df1613673f0.js";
import { a as mt, i as ht } from "./automation-frequency-section-b14557c3b8fc.js";
import { n as gt, t as _t } from "./PlatformUIKitProvider-8f7f0fbad1d5.js";
import {
  c as vt,
  d as yt,
  f as bt,
  l as xt,
  n as St,
  o as Ct,
  p as wt,
  s as Tt,
  t as Et,
  u as Dt,
} from "./configuration-schedule-48b79a5c9f8a.js";
import { a as Ot, l as kt, n as At, o as jt, s as Mt } from "./plugins-state-17abea2c5736.js";
import { n as Nt, t as Pt } from "./compact-cadence-61b84fe8d42f.js";
import { n as Ft, t as It } from "./schedule-fields-237908040925.js";
function Lt(e) {
  let t = (0, Bt.c)(17),
    { triggers: n, isAutomationEnabled: r, onOpenTrigger: i, showUnavailableConditions: a, variant: o } = e,
    s = a === void 0 || a,
    l = o === void 0 ? `default` : o;
  if (n == null || n.length === 0) {
    let e;
    return (
      t[0] !== r || t[1] !== s || t[2] !== l
        ? ((e = (0, J.jsx)(Rt, {
            variant: l,
            trigger: void 0,
            isAutomationEnabled: r,
            showUnavailableConditions: s,
          })),
          (t[0] = r),
          (t[1] = s),
          (t[2] = l),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let u;
  if (t[4] !== r || t[5] !== i || t[6] !== s || t[7] !== n || t[8] !== l) {
    let e;
    (t[10] !== r || t[11] !== i || t[12] !== s || t[13] !== l
      ? ((e = (e, t) =>
          (0, J.jsxs)(
            Vt.Fragment,
            {
              children: [
                t > 0
                  ? (0, J.jsx)(`div`, {
                      className: `text-center text-sm text-tertiary select-none`,
                      children: (0, J.jsx)(c, {
                        id: `inbox.automations.cloud.webhook.or`,
                        defaultMessage: `Or`,
                        description: `Separator between alternative triggers in a cloud webhook task's details panel; any one of the triggers can start the task`,
                      }),
                    })
                  : null,
                (0, J.jsx)(Rt, {
                  variant: l,
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
        (t[13] = l),
        (t[14] = e))
      : (e = t[14]),
      (u = n.map(e)),
      (t[4] = r),
      (t[5] = i),
      (t[6] = s),
      (t[7] = n),
      (t[8] = l),
      (t[9] = u));
  } else u = t[9];
  let d;
  return (
    t[15] === u ? (d = t[16]) : ((d = (0, J.jsx)(J.Fragment, { children: u })), (t[15] = u), (t[16] = d)),
    d
  );
}
function Rt(e) {
  let t = (0, Bt.c)(43),
    { trigger: n, isAutomationEnabled: i, onOpenTrigger: a, showUnavailableConditions: o, variant: s } = e,
    l = n?.presentation,
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, J.jsx)(`span`, { children: (0, J.jsx)(d, {}) })), (t[0] = u))
    : (u = t[0]);
  let f = n?.connector_type,
    p = l?.icon_url,
    h;
  t[1] !== f || t[2] !== p
    ? ((h = (0, J.jsx)(Ue, { size: 20, alt: ``, fallback: u, knownAppId: f, logoUrl: p })),
      (t[1] = f),
      (t[2] = p),
      (t[3] = h))
    : (h = t[3]);
  let g = h,
    _;
  t[4] !== l?.display_name || t[5] !== n?.connector_type
    ? ((_ =
        l?.display_name ??
        n?.connector_type ??
        (0, J.jsx)(c, {
          id: `inbox.automations.cloud.webhook.fallback`,
          defaultMessage: `Webhook`,
          description: `Fallback name for a cloud task's event trigger when its connected app is unavailable in the details panel`,
        })),
      (t[4] = l?.display_name),
      (t[5] = n?.connector_type),
      (t[6] = _))
    : (_ = t[6]);
  let v;
  t[7] === _
    ? (v = t[8])
    : ((v = (0, J.jsx)(`span`, { className: `break-words select-text`, children: _ })),
      (t[7] = _),
      (t[8] = v));
  let y = v;
  if (s === `form`) {
    let e = y;
    if (n?.connector_type === `slack` && n.webhook_name === `message`) {
      let n;
      (t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, J.jsx)(c, {
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
        ? ((n = (0, J.jsx)(c, {
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
        ? ((n = (0, J.jsx)(c, {
            id: `automations.configuration.githubEvent`,
            defaultMessage: `GitHub event`,
            description: `Trigger option for a GitHub event`,
          })),
          (t[11] = n))
        : (n = t[11]),
        (e = n));
    }
    let r;
    t[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, J.jsx)(c, {
          id: `automations.configuration.schedule`,
          defaultMessage: `Trigger`,
          description: `Label identifying the scheduled task trigger`,
        })),
        (t[12] = r))
      : (r = t[12]);
    let a;
    t[13] === e
      ? (a = t[14])
      : ((a = (0, J.jsx)(`span`, { className: `min-w-0 text-end break-words`, children: e })),
        (t[13] = e),
        (t[14] = a));
    let o;
    t[15] === g
      ? (o = t[16])
      : ((o = (0, J.jsx)(`span`, { className: `shrink-0 text-default`, children: g })),
        (t[15] = g),
        (t[16] = o));
    let s;
    t[17] !== a || t[18] !== o
      ? ((s = (0, J.jsx)(L, {
          variant: `nested`,
          labelSizing: `content`,
          label: r,
          control: (0, J.jsxs)(`span`, {
            className: `flex min-w-0 items-center gap-1.5 text-tertiary`,
            children: [a, o],
          }),
        })),
        (t[17] = a),
        (t[18] = o),
        (t[19] = s))
      : (s = t[19]);
    let u;
    t[20] !== i || t[21] !== n?.is_enabled
      ? ((u =
          i && n?.is_enabled === !1
            ? (0, J.jsx)(L, {
                variant: `nested`,
                label: (0, J.jsx)(c, {
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
    t[23] !== l || t[24] !== n?.connector_type
      ? ((d =
          l == null
            ? (0, J.jsx)(L, {
                variant: `nested`,
                label: (0, J.jsx)(c, {
                  id: `inbox.automations.cloud.webhook.unavailable`,
                  defaultMessage: `Trigger details unavailable`,
                  description: `Shown instead of event filters when a cloud webhook task's trigger metadata is unavailable; it does not mean the trigger has no filters`,
                }),
                control: null,
              })
            : l.condition_rows.map((e) => {
                let { id: t, label: r, value: i } = e;
                return (0, J.jsx)(
                  L,
                  {
                    variant: `nested`,
                    labelSizing: `content`,
                    label:
                      n?.connector_type === `slack` && t === `channels`
                        ? (0, J.jsx)(c, {
                            id: `automations.configuration.channels`,
                            defaultMessage: `In channels`,
                            description: `Slack channels to monitor for new messages`,
                          })
                        : r,
                    control: (0, J.jsx)(`span`, {
                      className: `min-w-0 text-end break-words text-tertiary select-text`,
                      children: i,
                    }),
                  },
                  t,
                );
              })),
        (t[23] = l),
        (t[24] = n?.connector_type),
        (t[25] = d))
      : (d = t[25]);
    let f;
    return (
      t[26] !== s || t[27] !== u || t[28] !== d
        ? ((f = (0, J.jsxs)(F, { variant: `form`, children: [s, u, d] })),
          (t[26] = s),
          (t[27] = u),
          (t[28] = d),
          (t[29] = f))
        : (f = t[29]),
      f
    );
  }
  let b;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, J.jsx)(`span`, {
        className: `select-none`,
        children: (0, J.jsx)(c, {
          id: `inbox.automations.cloud.webhook.trigger`,
          defaultMessage: `Trigger`,
          description: `Section heading above the connected app that can trigger a cloud webhook task in its details panel`,
        }),
      })),
      (t[30] = b))
    : (b = t[30]);
  let x;
  t[31] !== g || t[32] !== i || t[33] !== y || t[34] !== a || t[35] !== n
    ? ((x = (0, J.jsx)(ht, {
        title: b,
        children: (0, J.jsx)(F, {
          children:
            n != null && a != null
              ? (0, J.jsx)(m, {
                  edgeRounding: `surface`,
                  icon: g,
                  label: y,
                  trailing: (0, J.jsx)(r, {}),
                  onClick: () => a(n),
                })
              : (0, J.jsx)(L, {
                  control:
                    i && n?.is_enabled === !1
                      ? (0, J.jsx)(`span`, {
                          className: `text-sm text-secondary select-none`,
                          children: (0, J.jsx)(c, {
                            id: `inbox.automations.cloud.webhook.inactive`,
                            defaultMessage: `Trigger inactive — this trigger won’t start the task`,
                            description: `Warning that this connected-app trigger cannot start the active task; other enabled triggers may still start it`,
                          }),
                        })
                      : null,
                  icon: g,
                  label: y,
                }),
        }),
      })),
      (t[31] = g),
      (t[32] = i),
      (t[33] = y),
      (t[34] = a),
      (t[35] = n),
      (t[36] = x))
    : (x = t[36]);
  let S;
  t[37] !== l || t[38] !== o
    ? ((S =
        (l == null && o) || (l?.condition_rows.length ?? 0) > 0
          ? (0, J.jsx)(ht, {
              title: (0, J.jsx)(`span`, {
                className: `select-none`,
                children: (0, J.jsx)(c, {
                  id: `inbox.automations.cloud.webhook.condition`,
                  defaultMessage: `Condition`,
                  description: `Section heading above the read-only event filters for a cloud webhook task in its details panel`,
                }),
              }),
              children: (0, J.jsx)(F, {
                children:
                  l == null
                    ? (0, J.jsx)(L, {
                        control: null,
                        label: (0, J.jsx)(`span`, {
                          className: `select-none`,
                          children: (0, J.jsx)(c, {
                            id: `inbox.automations.cloud.webhook.unavailable`,
                            defaultMessage: `Trigger details unavailable`,
                            description: `Shown instead of event filters when a cloud webhook task's trigger metadata is unavailable; it does not mean the trigger has no filters`,
                          }),
                        }),
                        variant: `nested`,
                      })
                    : l.condition_rows.map(zt),
              }),
            })
          : null),
      (t[37] = l),
      (t[38] = o),
      (t[39] = S))
    : (S = t[39]);
  let C;
  return (
    t[40] !== x || t[41] !== S
      ? ((C = (0, J.jsxs)(J.Fragment, { children: [x, S] })), (t[40] = x), (t[41] = S), (t[42] = C))
      : (C = t[42]),
    C
  );
}
function zt(e) {
  let { id: t, label: n, value: r } = e;
  return (0, J.jsx)(
    L,
    {
      control: (0, J.jsx)(`span`, {
        className: `max-w-64 text-end text-base break-words text-default select-text`,
        children: r,
      }),
      label: (0, J.jsx)(`span`, { className: `select-none`, children: n }),
      labelSizing: `content`,
      variant: `nested`,
    },
    t,
  );
}
var Bt, Vt, J;
function Ht() {
  return (Ht = e(() => {
    ((Bt = fe()), (Vt = he()), A(), W(), g(), re(), u(), mt(), (J = z()));
  }))();
}
function Ut(e) {
  let t = (0, Y.c)(16),
    { draft: n, onChange: r, teamId: i } = e,
    a = v(V),
    o = ge(B, a),
    s;
  t[0] !== a || t[1] !== n.cloudTeam || t[2] !== i
    ? ((s = n.cloudTeam ?? (a != null && i != null ? { accountId: a, teamId: i } : null)),
      (t[0] = a),
      (t[1] = n.cloudTeam),
      (t[2] = i),
      (t[3] = s))
    : (s = t[3]);
  let l = s,
    u;
  if (n.id == null && (o || n.cloudTeam != null)) {
    let e = n.cloudTeam?.teamId ?? `personal`,
      i;
    t[4] !== n || t[5] !== r
      ? ((i = (e) => r({ ...n, cloudTeam: e, webhookTriggers: void 0 })), (t[4] = n), (t[5] = r), (t[6] = i))
      : (i = t[6]);
    let a;
    (t[7] !== n.cloudTeam || t[8] !== e || t[9] !== i
      ? ((a = (0, X.jsx)(dt, { variant: `form`, selection: n.cloudTeam, onSelect: i }, e)),
        (t[7] = n.cloudTeam),
        (t[8] = e),
        (t[9] = i),
        (t[10] = a))
      : (a = t[10]),
      (u = a));
  } else if (l != null) {
    let e;
    (t[11] === l.teamId
      ? (e = t[12])
      : ((e = (0, X.jsx)(pt, { teamId: l.teamId, variant: `form` })), (t[11] = l.teamId), (t[12] = e)),
      (u = e));
  } else {
    let e;
    (t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(L, {
          label: (0, X.jsx)(c, {
            id: `automations.configuration.runsAs`,
            defaultMessage: `Run as`,
            description: `Label identifying whose account runs this scheduled task`,
          }),
          control: (0, X.jsx)(c, {
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
      : ((d = (0, X.jsx)(F, { variant: `outlined`, children: u })), (t[14] = u), (t[15] = d)),
    d
  );
}
function Wt(e) {
  let t = (0, Y.c)(7),
    { draft: n, getOAuthReturnTo: r, teamId: i } = e,
    a = v(V),
    o;
  t[0] !== a || t[1] !== n.cloudTeam || t[2] !== i
    ? ((o = n.cloudTeam ?? (a != null && i != null ? { accountId: a, teamId: i } : null)),
      (t[0] = a),
      (t[1] = n.cloudTeam),
      (t[2] = i),
      (t[3] = o))
    : (o = t[3]);
  let s = o,
    c;
  return (
    t[4] !== r || t[5] !== s
      ? ((c =
          s == null
            ? null
            : (0, X.jsx)(F, {
                variant: `outlined`,
                children: (0, X.jsx)(tn, { children: (0, X.jsx)(Gt, { team: s, getOAuthReturnTo: r }) }),
              })),
        (t[4] = r),
        (t[5] = s),
        (t[6] = c))
      : (c = t[6]),
    c
  );
}
function Gt(e) {
  let t = (0, Y.c)(13),
    { team: r, getOAuthReturnTo: i } = e,
    { data: a, error: o, refetch: s } = ge(Ce, r),
    l;
  t[0] === a ? (l = t[1]) : ((l = a == null ? null : Fe(a)), (t[0] = a), (t[1] = l));
  let u = l;
  if (u != null) {
    let e;
    return (
      t[2] !== i || t[3] !== u || t[4] !== r
        ? ((e = (0, X.jsx)(Kt, { getOAuthReturnTo: i, ...r, serviceAccountId: u }, u)),
          (t[2] = i),
          (t[3] = u),
          (t[4] = r),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let d;
  t[6] === a
    ? (d = t[7])
    : ((d = a == null ? (0, X.jsx)(oe, {}) : (0, X.jsx)(nn, {})), (t[6] = a), (t[7] = d));
  let f = d;
  if (o != null) {
    let e;
    t[8] === s ? (e = t[9]) : ((e = () => void s()), (t[8] = s), (t[9] = e));
    let r;
    t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, X.jsx)(c, {
          id: `automations.configuration.retryPlugins`,
          defaultMessage: `Couldn’t load plugins. Retry`,
          description: `Retries loading team plugins after a request fails`,
        })),
        (t[10] = r))
      : (r = t[10]);
    let i;
    (t[11] === e
      ? (i = t[12])
      : ((i = (0, X.jsx)(n, { color: `ghost`, size: `toolbar`, onClick: e, children: r })),
        (t[11] = e),
        (t[12] = i)),
      (f = i));
  }
  return f;
}
function Kt(e) {
  let t = (0, Y.c)(22),
    r,
    i;
  t[0] === e
    ? ((r = t[1]), (i = t[2]))
    : (({ getOAuthReturnTo: r, ...i } = e), (t[0] = e), (t[1] = r), (t[2] = i));
  let a = ge(Oe, i.accountId),
    { data: o, error: l, isLoading: u, refetch: d } = ge(kt, i),
    { error: f, isPending: p, refetch: m } = ge(Ot, i),
    g;
  t[3] === i ? (g = t[4]) : ((g = { ...i, view: `installed`, query: `` }), (t[3] = i), (t[4] = g));
  let { data: _, error: v, isLoading: y, refetch: b, hasNextPage: x } = ge(jt, g),
    S = (0, rn.default)(o?.links.filter(Zt), Xt),
    { data: C } = h(et({ accountId: i.accountId, appIds: S.map(Yt), enabled: a })),
    w;
  t[5] === C ? (w = t[6]) : ((w = new Map(C?.map(Jt))), (t[5] = C), (t[6] = w));
  let T = w,
    E;
  t[7] === T
    ? (E = t[8])
    : ((E = (e) => ({
        id: e.link_id,
        name: (0, X.jsx)(c, {
          id: `automations.configuration.workspacePluginName`,
          defaultMessage: `{connectionName} · Workspace`,
          description: `Name of a plugin connection provided by the workspace, followed by its source`,
          values: { connectionName: e.name },
        }),
        logo: (0, X.jsx)(Ue, {
          alt: e.connector_name,
          connectorId: e.connector_id,
          knownAppId: e.connector_name,
          logoUrl: T.get(Ae(e.connector_id))?.light,
          logoDarkUrl: T.get(Ae(e.connector_id))?.dark,
          size: 20,
          fallback: (0, X.jsx)(s, {}),
        }),
      })),
      (t[7] = T),
      (t[8] = E));
  let D = [
      ...S.map(E),
      ...(_ ?? [])
        .filter((e) => !S.some((t) => e.connector_id != null && Ae(t.connector_id) === Ae(e.connector_id)))
        .map(qt),
    ],
    ee;
  t[9] !== p || t[10] !== y || t[11] !== u
    ? ((ee = p || y || u ? (0, X.jsx)(oe, {}) : null), (t[9] = p), (t[10] = y), (t[11] = u), (t[12] = ee))
    : (ee = t[12]);
  let O =
      f != null || v != null || l != null
        ? (0, X.jsx)(n, {
            color: `ghost`,
            size: `toolbar`,
            onClick: () => {
              (d(), m(), b());
            },
            children: (0, X.jsx)(c, {
              id: `automations.configuration.retryPlugins`,
              defaultMessage: `Couldn’t load plugins. Retry`,
              description: `Retries loading team plugins after a request fails`,
            }),
          })
        : (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(Qt, { plugins: D, hasNextPage: x }),
              _ != null && !u && D.length === 0 ? (0, X.jsx)(nn, {}) : null,
            ],
          }),
    te;
  t[13] !== ee || t[14] !== O
    ? ((te = (0, X.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [ee, O] })),
      (t[13] = ee),
      (t[14] = O),
      (t[15] = te))
    : (te = t[15]);
  let ne;
  t[16] !== r || t[17] !== i
    ? ((ne = (0, X.jsx)(Dt, { ...i, getOAuthReturnTo: r })), (t[16] = r), (t[17] = i), (t[18] = ne))
    : (ne = t[18]);
  let k;
  return (
    t[19] !== te || t[20] !== ne
      ? ((k = (0, X.jsxs)(X.Fragment, { children: [te, ne] })), (t[19] = te), (t[20] = ne), (t[21] = k))
      : (k = t[21]),
    k
  );
}
function qt(e) {
  return {
    id: e.id,
    name: e.release.display_name,
    logo: (0, X.jsx)(Ue, {
      alt: e.release.display_name,
      size: 20,
      logoUrl: e.release.interface.logo_url,
      logoDarkUrl: e.release.interface.logo_url_dark,
      fallback: (0, X.jsx)(s, {}),
    }),
  };
}
function Jt(e) {
  return [Ae(e.id), { light: e.icon_url, dark: e.icon_dark_url }];
}
function Yt(e) {
  return e.connector_id;
}
function Xt(e) {
  return Ae(e.connector_id);
}
function Zt(e) {
  return e.enabled;
}
function Qt(e) {
  let t = (0, Y.c)(8),
    { plugins: r, hasNextPage: i } = e,
    a = i !== void 0 && i,
    o;
  t[0] === r ? (o = t[1]) : ((o = r.slice(0, 4).map(en)), (t[0] = r), (t[1] = o));
  let s;
  t[2] !== a || t[3] !== r
    ? ((s =
        r.length > 4
          ? (0, X.jsx)(le, {
              align: `end`,
              cloneCustomTrigger: !0,
              interactive: !0,
              side: `bottom`,
              variant: `rich`,
              tooltipContent: (0, X.jsx)(`div`, {
                className: `min-w-48 p-2`,
                children: (0, X.jsx)(`div`, {
                  className: `flex max-h-64 flex-col overflow-y-auto`,
                  children: r.slice(4).map($t),
                }),
              }),
              children: (0, X.jsx)(n, {
                className: `shrink-0`,
                color: `ghost`,
                radius: `full`,
                size: `toolbar`,
                type: `button`,
                children: (0, X.jsx)(c, {
                  id: `automations.routine.morePlugins`,
                  defaultMessage: `+{count}{more}`,
                  description: `Number of additional plugins available to the team; a trailing plus means another page is available`,
                  values: { count: r.length - 4, more: a ? `+` : `` },
                }),
              }),
            })
          : null),
      (t[2] = a),
      (t[3] = r),
      (t[4] = s))
    : (s = t[4]);
  let l;
  return (
    t[5] !== o || t[6] !== s
      ? ((l = (0, X.jsxs)(X.Fragment, { children: [o, s] })), (t[5] = o), (t[6] = s), (t[7] = l))
      : (l = t[7]),
    l
  );
}
function $t(e) {
  return (0, X.jsxs)(
    `div`,
    {
      className: `flex items-center gap-2 px-2 py-1.5 text-sm text-default`,
      children: [
        (0, X.jsx)(`span`, { className: `inline-flex shrink-0`, children: e.logo }),
        (0, X.jsx)(`span`, { className: `min-w-0`, children: e.name }),
      ],
    },
    e.id,
  );
}
function en(e) {
  return (0, X.jsx)(
    le,
    {
      followPointer: `desktop`,
      tooltipContent: e.name,
      children: (0, X.jsx)(`span`, { className: `inline-flex shrink-0`, children: e.logo }),
    },
    e.id,
  );
}
function tn(e) {
  let t = (0, Y.c)(3),
    { children: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, X.jsx)(c, {
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
      : ((i = (0, X.jsx)(L, {
          variant: `nested`,
          label: r,
          control: (0, X.jsx)(`div`, {
            className: `flex min-w-0 items-center justify-end gap-2`,
            children: n,
          }),
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function nn() {
  let e = (0, Y.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, X.jsx)(`span`, {
          className: `text-secondary`,
          children: (0, X.jsx)(c, {
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
var Y, rn, X;
function an() {
  return (an = e(() => {
    ((Y = fe()),
      y(),
      (rn = t(se(), 1)),
      p(),
      A(),
      ye(),
      Xe(),
      yt(),
      W(),
      ue(),
      g(),
      k(),
      T(),
      re(),
      u(),
      ft(),
      At(),
      Mt(),
      $e(),
      (X = z()));
  }))();
}
function on(e, t, n) {
  let r = e.get(V),
    i = e.get(Ne);
  if (r == null || i == null) return null;
  let a = crypto.randomUUID();
  e.set(ln, {
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
      ((o.pathname = He()), (o.search = `automationMode=create`)),
    o.searchParams.set(`automationDraftId`, a),
    o.pathname + o.search
  );
}
function sn(e, t, n = null) {
  let r = e.get(ln);
  return r?.draft.id === n &&
    (n == null
      ? t.get(`automationMode`) === `create`
      : t.get(`automationMode`) !== `create` && t.get(`automationId`) === n) &&
    t.get(`automationDraftId`) === r.id &&
    r.accountId === e.get(V) &&
    r.userId === e.get(Ne) &&
    r.expiresAt > Date.now()
    ? { ...r, draft: je(r.draft), initialDraft: je(r.initialDraft) }
    : null;
}
function cn(e, t, n = null) {
  sn(e, t, n) != null && e.set(ln, null);
}
var ln;
function un() {
  return (un = e(() => {
    (Xe(), Re(), Ke(), (ln = ze(`scheduled-task-oauth-draft-v1`, null)));
  }))();
}
var dn;
function fn() {
  return (fn = e(() => {
    (p(),
      R(),
      At(),
      Mt(),
      $e(),
      xt(),
      (dn = P(a, (e, { get: t }) => {
        let n = e.cloudTeam;
        if (n != null && !t(B, n.accountId)) return !0;
        let r = t(vt, { draft: e, personal: n == null });
        if (n == null) return r?.status !== `loading`;
        let i = t(Ce, n);
        if (i.data == null) return i.error != null;
        let a = Fe(i.data);
        if (a == null) return !0;
        let o = { ...n, serviceAccountId: a },
          s = t(Ot, o),
          c = t(kt, o),
          l = t(jt, { ...o, view: `installed`, query: `` }),
          u =
            (s.data != null || s.error != null) &&
            (c.data != null || c.error != null) &&
            (s.error != null || c.error != null || l.data != null || l.error != null);
        return r?.status !== `loading` && u;
      })));
  }))();
}
function pn(e) {
  let t = (0, mn.c)(13),
    { isPaused: r, isPending: i, disabled: a, disabledReason: o, onClick: s, size: l } = e,
    u = l === void 0 ? `dialogAction` : l,
    d = i || void 0,
    f = a || void 0,
    p = a && o == null,
    m = a ? void 0 : s,
    h;
  t[0] === r
    ? (h = t[1])
    : ((h = r
        ? (0, hn.jsx)(c, {
            id: `inbox.automations.resumeTooltip`,
            defaultMessage: `Resume`,
            description: `Tooltip label for resuming an automation`,
          })
        : (0, hn.jsx)(c, {
            id: `inbox.automations.pauseTooltip`,
            defaultMessage: `Pause`,
            description: `Tooltip label for pausing an automation`,
          })),
      (t[0] = r),
      (t[1] = h));
  let g;
  t[2] !== i || t[3] !== u || t[4] !== d || t[5] !== f || t[6] !== p || t[7] !== m || t[8] !== h
    ? ((g = (0, hn.jsx)(n, {
        "aria-busy": d,
        "aria-disabled": f,
        color: `secondary`,
        radius: `full`,
        size: u,
        type: `button`,
        disabled: p,
        loading: i,
        onClick: m,
        children: h,
      })),
      (t[2] = i),
      (t[3] = u),
      (t[4] = d),
      (t[5] = f),
      (t[6] = p),
      (t[7] = m),
      (t[8] = h),
      (t[9] = g))
    : (g = t[9]);
  let _;
  return (
    t[10] !== o || t[11] !== g
      ? ((_ = (0, hn.jsx)(le, { tooltipContent: o, children: g })), (t[10] = o), (t[11] = g), (t[12] = _))
      : (_ = t[12]),
    _
  );
}
var mn, hn;
function gn() {
  return (gn = e(() => {
    ((mn = fe()), A(), ue(), T(), (hn = z()));
  }))();
}
function _n(e) {
  let t = (0, bn.c)(39),
    { automation: r, disabled: i, hasChanges: o, isRunning: s, onRunningChange: u, onStarted: d } = e,
    f = l(a),
    p = ge(G, `1159770884`),
    m = _(),
    h = (0, xn.useRef)(null),
    g;
  t[0] === p ? (g = t[1]) : ((g = { enabled: p }), (t[0] = p), (t[1] = g));
  let { data: y, isPending: b, error: x, refetch: S } = ge(Sn, r.id, g),
    { isPending: C } = v(Qe),
    w = x instanceof ne ? x.status : null,
    T = w === 404 || w === 410,
    E = w === 401 || w === 403,
    D = (y?.is_enabled ?? r.is_enabled) === !1 && !T && !E && y != null && y.pending_event_count > 0,
    ee = !D && !o && x == null && y != null && y.pending_event_count > 0,
    O,
    k;
  if (
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((O = () => () => h.current?.abort()), (k = []), (t[2] = O), (t[3] = k))
      : ((O = t[2]), (k = t[3])),
    (0, xn.useEffect)(O, k),
    !p)
  )
    return null;
  let re;
  t[4] !== r.conversation_id ||
  t[5] !== r.id ||
  t[6] !== i ||
  t[7] !== m ||
  t[8] !== u ||
  t[9] !== d ||
  t[10] !== S ||
  t[11] !== f
    ? ((re = (e) => {
        if (i || h.current != null) return;
        let t = f.get(V),
          n = new AbortController();
        ((h.current = n),
          u(!0),
          (e === `resume`
            ? f.get(Qe).mutateAsync({ automationId: r.id, isEnabled: !0 }).then(yn)
            : Be.safePost(`/automation/{automation_id}/webhook_batch/run_now`, {
                parameters: { path: { automation_id: r.id } },
                requestBody: { request_id: globalThis.crypto.randomUUID() },
                signal: n.signal,
              }).then(vn)
          )
            .then((e) => {
              n.signal.aborted ||
                f.get(V) !== t ||
                e === 0 ||
                (f
                  .get(te)
                  .success(
                    m.formatMessage(
                      {
                        id: `automations.editor.webhook.runNowSuccessWithCount`,
                        defaultMessage: `Running {count, plural, one {# pending event} other {# pending events}}`,
                        description: `Success toast after the Scheduled task editor starts a queued webhook-event batch. The count is the number of events started.`,
                      },
                      { count: e },
                    ),
                  ),
                r.conversation_id != null && f.query.invalidate(ke, r.conversation_id),
                d());
            })
            .catch(() => {
              !n.signal.aborted &&
                f.get(V) === t &&
                f
                  .get(te)
                  .danger(
                    e === `resume`
                      ? m.formatMessage({
                          id: `automations.scheduled.webhook.resumeError`,
                          defaultMessage: `Couldn’t resume task`,
                          description: `Error toast when resuming a paused webhook task from the Scheduled editor fails.`,
                        })
                      : m.formatMessage({
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
              ((h.current = null), !n.signal.aborted && f.get(V) === t && (u(!1), S()));
            }));
      }),
      (t[4] = r.conversation_id),
      (t[5] = r.id),
      (t[6] = i),
      (t[7] = m),
      (t[8] = u),
      (t[9] = d),
      (t[10] = S),
      (t[11] = f),
      (t[12] = re))
    : (re = t[12]);
  let A = re,
    j;
  if (b) {
    let e;
    (t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(c, {
          id: `automations.editor.webhook.pendingEventsLoading`,
          defaultMessage: `Checking pending events…`,
          description: `Loading status while the Scheduled task editor checks the queue of webhook events waiting to run.`,
        })),
        (t[13] = e))
      : (e = t[13]),
      (j = e));
  } else if (T) {
    let e;
    (t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(c, {
          id: `automations.editor.webhook.pendingEventsTerminal`,
          defaultMessage: `This task has ended and can’t process pending events`,
          description: `Status in the Scheduled editor when a webhook task no longer exists or has ended and cannot process queued events.`,
        })),
        (t[14] = e))
      : (e = t[14]),
      (j = e));
  } else if (x != null) {
    let e;
    (t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(c, {
          id: `automations.editor.webhook.pendingEventsError`,
          defaultMessage: `Unable to check pending events`,
          description: `Error status in the Scheduled task editor when the queue of webhook events cannot be loaded.`,
        })),
        (t[15] = e))
      : (e = t[15]),
      (j = e));
  } else {
    let e = y?.pending_event_count,
      n;
    (t[16] === e
      ? (n = t[17])
      : ((n = (0, Z.jsx)(c, {
          id: `automations.editor.webhook.pendingEvents`,
          defaultMessage: `{count, plural, one {# event waiting} other {# events waiting}}`,
          description: `Queue count in the Scheduled task editor. The count is the number of webhook events waiting to run.`,
          values: { count: e },
        })),
        (t[16] = e),
        (t[17] = n)),
      (j = n));
  }
  let M;
  if (C) {
    let e;
    (t[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(c, {
          id: `automations.editor.webhook.pendingEventsStatusUpdating`,
          defaultMessage: `Updating task status…`,
          description: `Progress label while the Scheduled editor resumes a paused webhook task.`,
        })),
        (t[18] = e))
      : (e = t[18]),
      (M = e));
  } else if (s) {
    let e;
    (t[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(c, {
          id: `automations.editor.webhook.pendingEventsStarting`,
          defaultMessage: `Starting pending events…`,
          description: `Progress label while the Scheduled editor starts queued webhook events.`,
        })),
        (t[19] = e))
      : (e = t[19]),
      (M = e));
  } else if (D) {
    let e;
    (t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(c, {
          id: `automations.editor.webhook.pendingEventsPaused`,
          defaultMessage: `Task is paused. Resume to process pending events.`,
          description: `Explanation in the Scheduled task editor that a paused webhook task must be resumed before its queued events can run.`,
        })),
        (t[20] = e))
      : (e = t[20]),
      (M = e));
  }
  let N;
  t[21] !== ee || t[22] !== x || t[23] !== E || t[24] !== D || t[25] !== T
    ? ((N = null),
      D ? (N = `resume`) : x != null && !E && !T ? (N = `retry`) : ee && (N = `run`),
      (t[21] = ee),
      (t[22] = x),
      (t[23] = E),
      (t[24] = D),
      (t[25] = T),
      (t[26] = N))
    : (N = t[26]);
  let P;
  t[27] === j
    ? (P = t[28])
    : ((P = (0, Z.jsx)(`span`, { "aria-live": `polite`, className: `select-none`, children: j })),
      (t[27] = j),
      (t[28] = P));
  let ie;
  t[29] !== N || t[30] !== i || t[31] !== s || t[32] !== S || t[33] !== A
    ? ((ie =
        N == null
          ? null
          : (0, Z.jsxs)(n, {
              color: `secondary`,
              disabled: i,
              loading: s,
              type: `button`,
              onClick: () => {
                N === `retry` ? S() : N != null && A(N);
              },
              children: [
                N === `resume` &&
                  (0, Z.jsx)(c, {
                    id: `automations.editor.webhook.resume`,
                    defaultMessage: `Resume`,
                    description: `Button in the Scheduled editor that resumes a paused webhook task so queued events can be processed.`,
                  }),
                N === `retry` &&
                  (0, Z.jsx)(c, {
                    id: `automations.editor.webhook.retry`,
                    defaultMessage: `Retry`,
                    description: `Button in the Scheduled editor that retries loading the queue of webhook events after a temporary error.`,
                  }),
                N === `run` &&
                  (0, Z.jsx)(c, {
                    id: `automations.editor.webhook.runNow`,
                    defaultMessage: `Run now`,
                    description: `Button in the Scheduled editor that immediately starts the pending webhook-event batch.`,
                  }),
              ],
            })),
      (t[29] = N),
      (t[30] = i),
      (t[31] = s),
      (t[32] = S),
      (t[33] = A),
      (t[34] = ie))
    : (ie = t[34]);
  let ae;
  return (
    t[35] !== M || t[36] !== P || t[37] !== ie
      ? ((ae = (0, Z.jsx)(F, {
          children: (0, Z.jsx)(L, { size: `compact`, label: P, description: M, control: ie }),
        })),
        (t[35] = M),
        (t[36] = P),
        (t[37] = ie),
        (t[38] = ae))
      : (ae = t[38]),
    ae
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
    ((bn = fe()),
      p(),
      (xn = he()),
      A(),
      Xe(),
      be(),
      ue(),
      M(),
      R(),
      re(),
      u(),
      Te(),
      Je(),
      D(),
      K(),
      (Z = z()),
      (Sn = b(a, (e, { get: t, scope: n }) => {
        let r = t(V);
        return {
          enabled: t(U).status === `allowed` && r != null,
          queryKey: [`cloud-automations`, `webhook-batch`, r, e],
          queryFn: async ({ signal: t }) => {
            let i = await Be.safeGet(`/automation/{automation_id}/webhook_batch_state`, {
              parameters: { path: { automation_id: e } },
              signal: t,
            });
            if ((t.throwIfAborted(), i.is_enabled != null && n.get(V) === r)) {
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
                n.query.setData(Le, (n) =>
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
                n.query.setData(H, e, (e) =>
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
    { ref: r, item: i, relatedActions: s, waitForInitialData: u, onOpen: d, onClose: p } = e,
    m = u !== void 0 && u,
    h = l(a),
    g = _(),
    y = o(),
    b = pe(),
    x = xe(),
    C = v(Me),
    w = (0, Q.useId)(),
    T = (0, Q.useId)(),
    E = (0, Q.useId)(),
    D = (0, Q.useContext)(ie),
    O = qe(),
    ne = (0, Q.useRef)(null),
    k = (0, Q.useRef)(!1),
    re = (0, Q.useRef)(null),
    A = (0, Q.useRef)(null),
    { automation: M } = i,
    P;
  t[0] !== C || t[1] !== i.teamId || t[2] !== h
    ? ((P = (e) => {
        let t = h.get(V),
          n = i.teamId ?? e.team_id,
          r = {
            ...ct(e, C ? `configuration` : void 0),
            cloudTeam: t != null && n != null ? { accountId: t, teamId: n } : null,
          };
        return C ? je(r) : r;
      }),
      (t[0] = C),
      (t[1] = i.teamId),
      (t[2] = h),
      (t[3] = P))
    : (P = t[3]);
  let F = P,
    oe;
  t[4] !== M || t[5] !== F ? ((oe = () => F(M)), (t[4] = M), (t[5] = F), (t[6] = oe)) : (oe = t[6]);
  let [I] = (0, Q.useState)(oe),
    [se, le] = (0, Q.useState)(!1),
    ue = ge(m && C ? dn : !0, I),
    L;
  t[7] !== se || t[8] !== d
    ? ((L = () => {
        se || (le(!0), d?.());
      }),
      (t[7] = se),
      (t[8] = d),
      (t[9] = L))
    : (L = t[9]);
  let de = L,
    fe;
  t[10] !== M.id || t[11] !== I || t[12] !== b.search || t[13] !== h
    ? ((fe = () => {
        let e = sn(h, new URLSearchParams(b.search), M.id);
        return e?.draft.cloudTeam?.teamId === I.cloudTeam?.teamId ? (e?.draft ?? I) : I;
      }),
      (t[10] = M.id),
      (t[11] = I),
      (t[12] = b.search),
      (t[13] = h),
      (t[14] = fe))
    : (fe = t[14]);
  let [R, z] = (0, Q.useState)(fe),
    he;
  t[15] !== R.scheduleConfig.oneTimeDate || t[16] !== R.scheduleConfig.time
    ? ((he = (e) => {
        z(
          e.scheduleConfig.oneTimeDate !== R.scheduleConfig.oneTimeDate ||
            e.scheduleConfig.time !== R.scheduleConfig.time
            ? { ...e, scheduleConfig: { ...e.scheduleConfig, oneTimeSeconds: 0 } }
            : e,
        );
      }),
      (t[15] = R.scheduleConfig.oneTimeDate),
      (t[16] = R.scheduleConfig.time),
      (t[17] = he))
    : (he = t[17]);
  let B = he,
    [ve, ye] = (0, Q.useState)(!1),
    [be, Se] = (0, Q.useState)(null),
    [Ce, Te] = (0, Q.useState)(!1),
    [Ee, De] = (0, Q.useState)(null),
    [Oe, ke] = (0, Q.useState)(!1),
    { isPending: Ae } = v(Qe),
    { isPending: Ne } = v(Ze),
    H = Ce || Oe || Ae || Ne,
    U = Ee ?? M,
    Fe;
  t[18] === U ? (Fe = t[19]) : ((Fe = Pe(U)), (t[18] = U), (t[19] = Fe));
  let Le = Fe === `completed`,
    Re;
  t[20] !== U || t[21] !== Le
    ? ((Re = Ye(U).canManage && !Le), (t[20] = U), (t[21] = Le), (t[22] = Re))
    : (Re = t[22]);
  let W = Re,
    ze = M.timing_mode === `condition_watch`,
    Be;
  t[23] === M ? (Be = t[24]) : ((Be = Ie(M)), (t[23] = M), (t[24] = Be));
  let G = Be,
    Ve;
  t[25] !== F || t[26] !== I || t[27] !== Ee
    ? ((Ve = Ee == null ? I : F(Ee)), (t[25] = F), (t[26] = I), (t[27] = Ee), (t[28] = Ve))
    : (Ve = t[28]);
  let Ue = Ve,
    We;
  t[29] !== U || t[30] !== R ? ((We = ot(U, R)), (t[29] = U), (t[30] = R), (t[31] = We)) : (We = t[31]);
  let Ge = We,
    Ke;
  t[32] !== R || t[33] !== Ue
    ? ((Ke =
        R.name !== Ue.name ||
        we(R) !== we(Ue) ||
        (R.eventTrigger?.when ?? ``) !== (Ue.eventTrigger?.when ?? ``)),
      (t[32] = R),
      (t[33] = Ue),
      (t[34] = Ke))
    : (Ke = t[34]);
  let K = Ke,
    Je;
  t[35] !== U || t[36] !== R || t[37] !== x
    ? ((Je = at(U, R, x)), (t[35] = U), (t[36] = R), (t[37] = x), (t[38] = Je))
    : (Je = t[38]);
  let q = Je,
    Xe;
  t[39] !== W || t[40] !== U || t[41] !== q || t[42] !== R || t[43] !== Ge || t[44] !== C
    ? ((Xe =
        W &&
        Ge &&
        R.name.trim().length > 0 &&
        R.prompt.trim().length > 0 &&
        (!C || (R.name.length <= 250 && !f(we(R, U.prompt)))) &&
        q == null &&
        (!R.scheduleDirty || _e(R.scheduleConfig))),
      (t[39] = W),
      (t[40] = U),
      (t[41] = q),
      (t[42] = R),
      (t[43] = Ge),
      (t[44] = C),
      (t[45] = Xe))
    : (Xe = t[45]);
  let $e = Xe,
    et;
  t[46] !== M.id || t[47] !== b.search || t[48] !== h
    ? ((et = () => {
        cn(h, new URLSearchParams(b.search), M.id);
      }),
      (t[46] = M.id),
      (t[47] = b.search),
      (t[48] = h),
      (t[49] = et))
    : (et = t[49]);
  let tt = et,
    rt;
  t[50] !== M.id || t[51] !== R || t[52] !== I || t[53] !== b.pathname || t[54] !== b.search || t[55] !== h
    ? ((rt = () => {
        let e = on(
          h,
          { draft: R, initialDraft: I, hasSelectedSchedule: !0 },
          `${He()}?${new URLSearchParams({ automationId: M.id, automationSource: `cloud`, edit_modal: `true` })}`,
        );
        return e == null ? b.pathname + b.search : ((re.current = R), e);
      }),
      (t[50] = M.id),
      (t[51] = R),
      (t[52] = I),
      (t[53] = b.pathname),
      (t[54] = b.search),
      (t[55] = h),
      (t[56] = rt))
    : (rt = t[56]);
  let st = rt,
    ut;
  t[57] !== tt || t[58] !== p
    ? ((ut = () => {
        let e = A.current;
        ((A.current = null), (k.current = !0), tt(), p(), e?.(!0));
      }),
      (t[57] = tt),
      (t[58] = p),
      (t[59] = ut))
    : (ut = t[59]);
  let dt = ut,
    ft;
  t[60] !== dt || t[61] !== K || t[62] !== H
    ? ((ft = () => {
        H || (K ? ye(!0) : dt());
      }),
      (t[60] = dt),
      (t[61] = K),
      (t[62] = H),
      (t[63] = ft))
    : (ft = t[63]);
  let pt = ft,
    mt;
  (t[64] !== H || t[65] !== pt
    ? ((mt = () => ({
        requestClose: () =>
          H || A.current != null
            ? Promise.resolve(!1)
            : new Promise((e) => {
                ((A.current = e), pt());
              }),
      })),
      (t[64] = H),
      (t[65] = pt),
      (t[66] = mt))
    : (mt = t[66]),
    (0, Q.useImperativeHandle)(r, mt));
  let _t;
  t[67] !== $e ||
  t[68] !== tt ||
  t[69] !== U ||
  t[70] !== R ||
  t[71] !== g ||
  t[72] !== O ||
  t[73] !== H ||
  t[74] !== p ||
  t[75] !== h
    ? ((_t = () => {
        if (H || ne.current != null || !$e) return;
        let e = h.get(V),
          t = new AbortController();
        ((ne.current = t), Te(!0));
        let n = () => !t.signal.aborted && O() && h.get(V) === e;
        lt(h, { automation: U, draft: R, signal: t.signal })
          .then(() => {
            n() && ((k.current = !0), tt(), p());
          })
          .catch((e) => {
            n() &&
              h
                .get(te)
                .danger(
                  g.formatMessage({
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
            ((ne.current = null), O() && Te(!1));
          });
      }),
      (t[67] = $e),
      (t[68] = tt),
      (t[69] = U),
      (t[70] = R),
      (t[71] = g),
      (t[72] = O),
      (t[73] = H),
      (t[74] = p),
      (t[75] = h),
      (t[76] = _t))
    : (_t = t[76]);
  let vt = _t,
    yt,
    xt;
  (t[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((yt = () => () => {
        (ne.current?.abort(), A.current?.(!1));
      }),
      (xt = []),
      (t[77] = yt),
      (t[78] = xt))
    : ((yt = t[77]), (xt = t[78])),
    (0, Q.useEffect)(yt, xt));
  let St;
  t[79] === R
    ? (St = t[80])
    : ((St = (e) => {
        re.current !== R && e.preventDefault();
      }),
      (t[79] = R),
      (t[80] = St));
  let wt = (0, Q.useEffectEvent)(St),
    Tt;
  t[81] !== K || t[82] !== wt
    ? ((Tt = () => {
        if (K)
          return (
            window.addEventListener(`beforeunload`, wt),
            () => window.removeEventListener(`beforeunload`, wt)
          );
      }),
      (t[81] = K),
      (t[82] = wt),
      (t[83] = Tt))
    : (Tt = t[83]);
  let Dt;
  (t[84] === K ? (Dt = t[85]) : ((Dt = [K]), (t[84] = K), (t[85] = Dt)), (0, Q.useEffect)(Tt, Dt));
  let Ot = ze ? `text-sm leading-5 font-medium uppercase` : `text-base leading-7 font-normal`,
    kt = ze || (U.is_enabled && !Le) ? `text-info` : `text-tertiary`,
    At;
  t[86] !== Ot || t[87] !== kt
    ? ((At = ee(`select-none`, Ot, kt)), (t[86] = Ot), (t[87] = kt), (t[88] = At))
    : (At = t[88]);
  let jt;
  t[89] !== U || t[90] !== ze || t[91] !== i.teamId
    ? ((jt = ze
        ? (0, $.jsx)(c, {
            id: `automations.scheduled.editor.monitoring`,
            defaultMessage: `Monitoring`,
            description: `Task type in the Scheduled editor for a task watching for changes`,
          })
        : (0, $.jsx)(Pt, { automation: U, teamId: i.teamId })),
      (t[89] = U),
      (t[90] = ze),
      (t[91] = i.teamId),
      (t[92] = jt))
    : (jt = t[92]);
  let Mt;
  t[93] !== At || t[94] !== jt
    ? ((Mt = (0, $.jsx)(`p`, { className: At, children: jt })), (t[93] = At), (t[94] = jt), (t[95] = Mt))
    : (Mt = t[95]);
  let Nt;
  t[96] === g
    ? (Nt = t[97])
    : ((Nt = g.formatMessage({
        id: `automations.editor.title`,
        defaultMessage: `Title`,
        description: `Accessible label for the editable title in the Scheduled task editor`,
      })),
      (t[96] = g),
      (t[97] = Nt));
  let Ft = !W,
    Rt;
  t[98] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Rt = (e) => z((t) => ({ ...t, name: e.target.value }))), (t[98] = Rt))
    : (Rt = t[98]);
  let zt;
  t[99] !== R.name || t[100] !== H || t[101] !== Nt || t[102] !== Ft || t[103] !== w
    ? ((zt = (0, $.jsx)(`textarea`, {
        id: w,
        className: `m-0 block field-sizing-content w-full min-w-0 resize-none overflow-hidden rounded-lg border-0 bg-transparent p-0 text-lg leading-7 font-medium wrap-anywhere text-default outline-none`,
        name: `title`,
        "aria-label": Nt,
        rows: 1,
        readOnly: Ft,
        disabled: H,
        value: R.name,
        onChange: Rt,
        onKeyDown: Tn,
      })),
      (t[99] = R.name),
      (t[100] = H),
      (t[101] = Nt),
      (t[102] = Ft),
      (t[103] = w),
      (t[104] = zt))
    : (zt = t[104]);
  let Bt;
  t[105] !== Mt || t[106] !== zt
    ? ((Bt = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-2`, children: [Mt, zt] })),
      (t[105] = Mt),
      (t[106] = zt),
      (t[107] = Bt))
    : (Bt = t[107]);
  let Vt = Bt,
    J;
  t[108] !== W || t[109] !== U || t[110] !== C || t[111] !== H || t[112] !== i
    ? ((J = W
        ? (0, $.jsx)(it, {
            item: { ...i, automation: U },
            statusMutation: Qe,
            onStatusChanged: De,
            renderActions: (e) => {
              let { isPaused: t, isStatusPending: n, pauseAction: r, resumeAction: i } = e;
              return (0, $.jsx)(pn, {
                isPaused: t,
                isPending: n ?? !1,
                disabled: H || (t ? i : r).disabled === !0,
                disabledReason: t ? i.disabledReason : void 0,
                onClick: (t ? i : r).onSelect,
                size: C ? `dialogAction` : `medium`,
              });
            },
          })
        : null),
      (t[108] = W),
      (t[109] = U),
      (t[110] = C),
      (t[111] = H),
      (t[112] = i),
      (t[113] = J))
    : (J = t[113]);
  let Ht = J,
    Gt = !$e || H,
    Kt;
  t[114] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Kt = (0, $.jsx)(c, {
        id: `automations.scheduled.editor.save`,
        defaultMessage: `Save`,
        description: `Button that saves edited Scheduled task instructions and schedule`,
      })),
      (t[114] = Kt))
    : (Kt = t[114]);
  let qt;
  t[115] !== E || t[116] !== Ce || t[117] !== Gt
    ? ((qt = (0, $.jsx)(n, { disabled: Gt, loading: Ce, form: E, type: `submit`, children: Kt })),
      (t[115] = E),
      (t[116] = Ce),
      (t[117] = Gt),
      (t[118] = qt))
    : (qt = t[118]);
  let Jt;
  t[119] !== Ht || t[120] !== qt
    ? ((Jt = (0, $.jsxs)(ce, { expandSingleButton: !1, children: [Ht, qt] })),
      (t[119] = Ht),
      (t[120] = qt),
      (t[121] = Jt))
    : (Jt = t[121]);
  let Yt = Jt,
    Xt,
    Zt;
  t[122] === vt
    ? ((Xt = t[123]), (Zt = t[124]))
    : ((Xt = (e) => nt(e, () => vt())),
      (Zt = (e) => {
        (e.preventDefault(), vt());
      }),
      (t[122] = vt),
      (t[123] = Xt),
      (t[124] = Zt));
  let Qt;
  t[125] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qt = (0, $.jsx)(S, {
        className: `sr-only`,
        children: (0, $.jsx)(c, {
          id: `automations.scheduled.editor.title`,
          defaultMessage: `Edit task`,
          description: `Accessible title of the Scheduled task editor dialog`,
        }),
      })),
      (t[125] = Qt))
    : (Qt = t[125]);
  let $t;
  t[126] === Vt
    ? ($t = t[127])
    : (($t = (0, $.jsxs)(j, { children: [Qt, Vt] })), (t[126] = Vt), (t[127] = $t));
  let en;
  t[128] === de
    ? (en = t[129])
    : ((en = (e) => {
        e != null && de();
      }),
      (t[128] = de),
      (t[129] = en));
  let tn = !W || H,
    nn;
  t[130] !== U || t[131] !== G || t[132] !== y
    ? ((nn = G
        ? (0, $.jsx)(Lt, {
            triggers: U.webhook_triggers,
            isAutomationEnabled: U.is_enabled,
            showUnavailableConditions: !1,
            onOpenTrigger: (e) => {
              y(`/settings/connectors?${new URLSearchParams({ connector: e.connector_id })}`);
            },
          })
        : null),
      (t[130] = U),
      (t[131] = G),
      (t[132] = y),
      (t[133] = nn))
    : (nn = t[133]);
  let Y = `${T}-label`,
    rn;
  t[134] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((rn = (0, $.jsx)(c, {
        id: `automations.editor.promptSectionLabel`,
        defaultMessage: `Prompt`,
        description: `Label above the editable instructions in the Scheduled task editor`,
      })),
      (t[134] = rn))
    : (rn = t[134]);
  let X;
  t[135] !== T || t[136] !== Y
    ? ((X = (0, $.jsx)(`label`, { id: Y, className: `uppercase select-none`, htmlFor: T, children: rn })),
      (t[135] = T),
      (t[136] = Y),
      (t[137] = X))
    : (X = t[137]);
  let an = `${T}-label`,
    ln = `${T}-label`,
    un = !W,
    fn;
  t[138] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fn = (e) => z((t) => ({ ...t, prompt: e.target.value }))), (t[138] = fn))
    : (fn = t[138]);
  let mn;
  t[139] !== R.prompt || t[140] !== T || t[141] !== ln || t[142] !== un
    ? ((mn = (0, $.jsx)(`textarea`, {
        id: T,
        className: `m-0 block field-sizing-content max-h-56 min-h-28 w-full min-w-0 resize-none overflow-y-auto border-0 bg-transparent p-0 text-base leading-7 font-normal wrap-anywhere text-default outline-none`,
        "aria-labelledby": ln,
        name: `prompt`,
        readOnly: un,
        rows: 1,
        value: R.prompt,
        onChange: fn,
      })),
      (t[139] = R.prompt),
      (t[140] = T),
      (t[141] = ln),
      (t[142] = un),
      (t[143] = mn))
    : (mn = t[143]);
  let hn;
  t[144] !== an || t[145] !== mn
    ? ((hn = (0, $.jsx)(`label`, {
        className: `block cursor-text rounded-[20px] border border-default p-6 focus-within:border-ring`,
        "aria-labelledby": an,
        children: mn,
      })),
      (t[144] = an),
      (t[145] = mn),
      (t[146] = hn))
    : (hn = t[146]);
  let gn;
  t[147] !== X || t[148] !== hn
    ? ((gn = (0, $.jsx)(ht, { title: X, children: hn })), (t[147] = X), (t[148] = hn), (t[149] = gn))
    : (gn = t[149]);
  let vn;
  t[150] !== M.conversation_id ||
  t[151] !== M.source_conversation_is_work_mode ||
  t[152] !== W ||
  t[153] !== U ||
  t[154] !== Ge ||
  t[155] !== H ||
  t[156] !== Oe ||
  t[157] !== G ||
  t[158] !== y ||
  t[159] !== p
    ? ((vn =
        G && M.source_conversation_is_work_mode === !0
          ? (0, $.jsx)(_n, {
              automation: U,
              disabled: !W || H,
              hasChanges: Ge,
              isRunning: Oe,
              onRunningChange: ke,
              onStarted: () => {
                ((k.current = !0), p(), M.conversation_id != null && y(me(M.conversation_id)));
              },
            })
          : null),
      (t[150] = M.conversation_id),
      (t[151] = M.source_conversation_is_work_mode),
      (t[152] = W),
      (t[153] = U),
      (t[154] = Ge),
      (t[155] = H),
      (t[156] = Oe),
      (t[157] = G),
      (t[158] = y),
      (t[159] = p),
      (t[160] = vn))
    : (vn = t[160]);
  let yn;
  t[161] !== U || t[162] !== R || t[163] !== G
    ? ((yn = G ? null : (0, $.jsx)(It, { automation: U, draft: R, onChange: z })),
      (t[161] = U),
      (t[162] = R),
      (t[163] = G),
      (t[164] = yn))
    : (yn = t[164]);
  let bn;
  t[165] === q
    ? (bn = t[166])
    : ((bn =
        q == null
          ? null
          : (0, $.jsxs)(`p`, {
              className: `text-sm text-danger select-none`,
              role: `alert`,
              children: [
                q === `too-far` &&
                  (0, $.jsx)(c, {
                    id: `automations.scheduled.editor.dateTooFar`,
                    defaultMessage: `Choose a date within the next two years`,
                    description: `Validation error in the Scheduled task editor when a one-time task is scheduled two years or more in the future`,
                  }),
                q === `end-past` &&
                  (0, $.jsx)(c, {
                    id: `automations.scheduled.editor.endDateInPast`,
                    defaultMessage: `Choose an end date today or later`,
                    description: `Validation error in the Scheduled task editor when a recurrence end date is in the past`,
                  }),
                q === `past` &&
                  (0, $.jsx)(c, {
                    id: `automations.scheduled.editor.dateInPast`,
                    defaultMessage: `Choose a date and time in the future`,
                    description: `Validation error in the Scheduled task editor when a one-time task is scheduled in the past`,
                  }),
              ],
            })),
      (t[165] = q),
      (t[166] = bn));
  let xn;
  t[167] !== en ||
  t[168] !== tn ||
  t[169] !== nn ||
  t[170] !== gn ||
  t[171] !== vn ||
  t[172] !== yn ||
  t[173] !== bn
    ? ((xn = (0, $.jsxs)(`fieldset`, {
        ref: en,
        className: `flex min-w-0 flex-col gap-6`,
        disabled: tn,
        children: [nn, gn, vn, yn, bn],
      })),
      (t[167] = en),
      (t[168] = tn),
      (t[169] = nn),
      (t[170] = gn),
      (t[171] = vn),
      (t[172] = yn),
      (t[173] = bn),
      (t[174] = xn))
    : (xn = t[174]);
  let Z;
  t[175] === Yt ? (Z = t[176]) : ((Z = (0, $.jsx)(j, { children: Yt })), (t[175] = Yt), (t[176] = Z));
  let Sn;
  t[177] !== E ||
  t[178] !== s ||
  t[179] !== Xt ||
  t[180] !== Zt ||
  t[181] !== $t ||
  t[182] !== xn ||
  t[183] !== Z
    ? ((Sn = (0, $.jsxs)(ae, {
        as: `form`,
        id: E,
        size: `viewport`,
        onKeyDown: Xt,
        onSubmit: Zt,
        children: [$t, s, xn, Z],
      })),
      (t[177] = E),
      (t[178] = s),
      (t[179] = Xt),
      (t[180] = Zt),
      (t[181] = $t),
      (t[182] = xn),
      (t[183] = Z),
      (t[184] = Sn))
    : (Sn = t[184]);
  let Cn = Sn,
    wn;
  if (C) {
    let e;
    if (G) {
      let n;
      (t[185] !== U.is_enabled || t[186] !== U.webhook_triggers
        ? ((n = (0, $.jsx)(Lt, {
            variant: `form`,
            triggers: U.webhook_triggers,
            isAutomationEnabled: U.is_enabled,
            showUnavailableConditions: !1,
          })),
          (t[185] = U.is_enabled),
          (t[186] = U.webhook_triggers),
          (t[187] = n))
        : (n = t[187]),
        (e = n));
    } else if (ze) {
      let n;
      (t[188] !== U || t[189] !== R
        ? ((n = (0, $.jsx)(It, { form: !0, automation: U, draft: R, onChange: z })),
          (t[188] = U),
          (t[189] = R),
          (t[190] = n))
        : (n = t[190]),
        (e = n));
    } else {
      let n = R.cloudTeam == null && i.teamId == null,
        r;
      t[191] !== M || t[192] !== F || t[193] !== B || t[194] !== R.scheduleConfig.oneTimeDate
        ? ((r = (e) => {
            if (
              R.scheduleConfig.oneTimeDate != null &&
              e.scheduleConfig.oneTimeDate == null &&
              e.webhookTriggers == null
            ) {
              let { untilDate: t, untilTime: n } = F(M).scheduleConfig;
              B({ ...e, scheduleConfig: { ...e.scheduleConfig, untilDate: t, untilTime: n } });
              return;
            }
            B(e);
          }),
          (t[191] = M),
          (t[192] = F),
          (t[193] = B),
          (t[194] = R.scheduleConfig.oneTimeDate),
          (t[195] = r))
        : (r = t[195]);
      let a;
      t[196] !== B || t[197] !== R
        ? ((a = (e) => {
            B({
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
          (t[196] = B),
          (t[197] = R),
          (t[198] = a))
        : (a = t[198]);
      let o;
      (t[199] !== R || t[200] !== n || t[201] !== r || t[202] !== a
        ? ((o = (0, $.jsx)(Et, {
            personal: n,
            draft: R,
            onChange: r,
            onChangeEndDate: a,
            executionLocation: `cloud`,
          })),
          (t[199] = R),
          (t[200] = n),
          (t[201] = r),
          (t[202] = a),
          (t[203] = o))
        : (o = t[203]),
        (e = o));
    }
    let n;
    t[204] !== W || t[205] !== I || t[206] !== ze || t[207] !== G
      ? ((n = W
          ? {
              executionLocation: `cloud`,
              hasSelectedSchedule: !0,
              initialDraft: I,
              triggerMode: G || ze ? `read-only` : `time`,
            }
          : void 0),
        (t[204] = W),
        (t[205] = I),
        (t[206] = ze),
        (t[207] = G),
        (t[208] = n))
      : (n = t[208]);
    let r = Ce || Oe || Ne,
      a = !W,
      o;
    t[209] === vt
      ? (o = t[210])
      : ((o = (e) => {
          (e.preventDefault(), vt());
        }),
        (t[209] = vt),
        (t[210] = o));
    let s, c;
    t[211] !== R || t[212] !== i.teamId
      ? ((s = (0, $.jsx)(bt, { draft: R, setDraft: z, executionLocation: `cloud`, teamId: i.teamId })),
        (c =
          R.cloudTeam == null && i.teamId == null
            ? null
            : (0, $.jsx)(Ut, { draft: R, onChange: z, teamId: i.teamId })),
        (t[211] = R),
        (t[212] = i.teamId),
        (t[213] = s),
        (t[214] = c))
      : ((s = t[213]), (c = t[214]));
    let l;
    t[215] !== R || t[216] !== st || t[217] !== i.teamId
      ? ((l = (0, $.jsx)(Wt, { draft: R, teamId: i.teamId, getOAuthReturnTo: st })),
        (t[215] = R),
        (t[216] = st),
        (t[217] = i.teamId),
        (t[218] = l))
      : (l = t[218]);
    let u;
    (t[219] !== $e ||
    t[220] !== B ||
    t[221] !== q ||
    t[222] !== R ||
    t[223] !== st ||
    t[224] !== de ||
    t[225] !== Ae ||
    t[226] !== pt ||
    t[227] !== e ||
    t[228] !== Ht ||
    t[229] !== n ||
    t[230] !== r ||
    t[231] !== a ||
    t[232] !== o ||
    t[233] !== s ||
    t[234] !== c ||
    t[235] !== l
      ? ((u = (0, $.jsx)(Ct, {
          onOpen: de,
          executionLocation: `cloud`,
          setup: n,
          getOAuthReturnTo: st,
          draft: R,
          onChange: B,
          onClose: pt,
          canSave: $e,
          isSaving: r,
          isChangingStatus: Ae,
          disabled: a,
          statusAction: Ht,
          onSubmit: o,
          dateError: q,
          schedule: e,
          advanced: s,
          owner: c,
          plugins: l,
        })),
        (t[219] = $e),
        (t[220] = B),
        (t[221] = q),
        (t[222] = R),
        (t[223] = st),
        (t[224] = de),
        (t[225] = Ae),
        (t[226] = pt),
        (t[227] = e),
        (t[228] = Ht),
        (t[229] = n),
        (t[230] = r),
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
    t[237] === pt
      ? (e = t[238])
      : ((e = (e) => {
          e || pt();
        }),
        (t[237] = pt),
        (t[238] = e));
    let n = be ?? void 0,
      r;
    t[239] !== Cn || t[240] !== n
      ? ((r = (0, $.jsx)(gt, { radixPortalContainer: n, children: Cn })),
        (t[239] = Cn),
        (t[240] = n),
        (t[241] = r))
      : (r = t[241]);
    let i;
    t[242] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(`div`, { ref: Se })), (t[242] = i))
      : (i = t[242]);
    let a;
    (t[243] !== e || t[244] !== r
      ? ((a = (0, $.jsxs)(N, {
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
    t[246] !== tt ||
    t[247] !== D ||
    t[248] !== wn ||
    t[249] !== dt ||
    t[250] !== se ||
    t[251] !== K ||
    t[252] !== ue ||
    t[253] !== H ||
    t[254] !== ve
      ? ((kn =
          se || ue
            ? (0, $.jsxs)($.Fragment, {
                children: [
                  wn,
                  D == null
                    ? null
                    : (0, $.jsx)(En, {
                        isPending: H,
                        onDiscard: tt,
                        shouldBlock: () => (K || H) && !k.current,
                      }),
                  ve
                    ? (0, $.jsx)(Dn, {
                        isPending: H,
                        onKeepEditing: () => {
                          (ye(!1), A.current?.(!1), (A.current = null));
                        },
                        onDiscard: dt,
                      })
                    : null,
                ],
              })
            : null),
        (t[246] = tt),
        (t[247] = D),
        (t[248] = wn),
        (t[249] = dt),
        (t[250] = se),
        (t[251] = K),
        (t[252] = ue),
        (t[253] = H),
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
    a = We(i),
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
    { isPending: r, onDiscard: i, onKeepEditing: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { shouldStopPointerDownPropagation: !1 }), (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === a
    ? (s = t[2])
    : ((s = (e) => {
        e || a();
      }),
      (t[1] = a),
      (t[2] = s));
  let l;
  t[3] !== r || t[4] !== i
    ? ((l = (e) => {
        (e.preventDefault(), r || i());
      }),
      (t[3] = r),
      (t[4] = i),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(S, {
        className: `text-form-title`,
        children: (0, $.jsx)(c, {
          id: `automations.editor.discardChangesTitle`,
          defaultMessage: `Discard changes?`,
          description: `Confirmation title when closing the Scheduled task editor with unsaved changes`,
        }),
      })),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, $.jsx)(j, {
        children: (0, $.jsx)(w, {
          subtitleSize: `sm`,
          subtitleTone: `secondary`,
          title: u,
          subtitle: (0, $.jsx)(O, {
            className: `text-form-body font-normal`,
            children: (0, $.jsx)(c, {
              id: `automations.scheduled.editor.discardDescription`,
              defaultMessage: `Your changes will not be saved`,
              description: `Warning in the discard confirmation for the Scheduled task editor`,
            }),
          }),
        }),
      })),
      (t[7] = d))
    : (d = t[7]);
  let f;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(c, {
        id: `automations.editor.keepEditing`,
        defaultMessage: `Keep editing`,
        description: `Button that returns to the Scheduled task editor without discarding the draft`,
      })),
      (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] === a
    ? (p = t[10])
    : ((p = (0, $.jsx)(n, {
        color: `secondary`,
        focusRing: `surface`,
        size: `dialogAction`,
        type: `button`,
        onClick: a,
        children: f,
      })),
      (t[9] = a),
      (t[10] = p));
  let m;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(c, {
        id: `automations.editor.discardChanges`,
        defaultMessage: `Discard changes`,
        description: `Button that closes the Scheduled task editor and discards unsaved changes`,
      })),
      (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === r
    ? (h = t[13])
    : ((h = (0, $.jsx)(n, {
        color: `danger`,
        disabled: r,
        size: `dialogAction`,
        type: `submit`,
        children: m,
      })),
      (t[12] = r),
      (t[13] = h));
  let g;
  t[14] !== p || t[15] !== h
    ? ((g = (0, $.jsx)(j, { children: (0, $.jsxs)(ce, { children: [p, h] }) })),
      (t[14] = p),
      (t[15] = h),
      (t[16] = g))
    : (g = t[16]);
  let _;
  t[17] !== g || t[18] !== l
    ? ((_ = (0, $.jsxs)(ae, { as: `form`, onSubmit: l, children: [d, g] })),
      (t[17] = g),
      (t[18] = l),
      (t[19] = _))
    : (_ = t[19]);
  let v;
  return (
    t[20] !== _ || t[21] !== s
      ? ((v = (0, $.jsx)(N, {
          open: !0,
          showDialogClose: !1,
          size: `narrow`,
          variant: `form`,
          contentProps: o,
          onOpenChange: s,
          children: _,
        })),
        (t[20] = _),
        (t[21] = s),
        (t[22] = v))
      : (v = t[22]),
    v
  );
}
var On, Q, $;
function kn() {
  return (kn = e(() => {
    ((On = fe()),
      _t(),
      x(),
      p(),
      I(),
      (Q = he()),
      A(),
      C(),
      Xe(),
      Ee(),
      wt(),
      Tt(),
      ve(),
      St(),
      an(),
      un(),
      i(),
      ue(),
      de(),
      E(),
      M(),
      Se(),
      tt(),
      R(),
      Ge(),
      q(),
      Re(),
      De(),
      mt(),
      rt(),
      Ve(),
      K(),
      Ht(),
      Nt(),
      ut(),
      fn(),
      gn(),
      st(),
      Ft(),
      Cn(),
      ($ = z()));
  }))();
}
export {
  pn as a,
  sn as c,
  Wt as d,
  an as f,
  kn as i,
  un as l,
  Ht as m,
  wn as n,
  gn as o,
  Lt as p,
  En as r,
  cn as s,
  Dn as t,
  on as u,
};
//# sourceMappingURL=editor-dialog-3a3a3a778e99.js.map
