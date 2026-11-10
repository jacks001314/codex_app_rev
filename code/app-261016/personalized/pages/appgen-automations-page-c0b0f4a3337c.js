const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./site-automation-create-panel-d9c7e3c33a9b.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-295ec67e1c5d.css",
      "./site-automation-create-panel-399dee493ef4.js",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./automation-detail-panel-9f15dc42249c.js",
      "./automation-notification-policy-dropdown-2708acfbf470.js",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./automation-dialog-843b9afb1cdf.js",
      "./model-and-reasoning-effort-translations-ac0973a6e9a8.js",
      "./automation-team-row-cf974f62fd66.js",
      "./automation-frequency-section-caeb4180ce42.js",
      "./DatePicker-aa68df19788f.js",
      "./helpers-97e80d920c48.js",
      "./PlatformUIKitContext-db1b777cfbe7.js",
      "./DatePicker-f2d11cc034ea.css",
      "./site-automation-create-dialog-1632ebebbecd.js",
      "./configuration-schedule-349da7cdee3c.js",
      "./schedule-draft-f9ea92400312.js",
      "./PlatformUIKitProvider-8a854188dc59.js",
      "./time-zone-options-f198c7e96682.js",
      "./plugins-state-ed3d4c958838.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  Ay as r,
  D4 as i,
  DB as a,
  F2 as o,
  F3 as s,
  F4 as c,
  FBt as l,
  I2 as u,
  I3 as d,
  I4 as f,
  KSt as p,
  LNt as m,
  My as h,
  NSt as g,
  NX as _,
  Ny as v,
  O4 as y,
  OB as b,
  OFt as x,
  PBt as S,
  PX as C,
  QY as w,
  S4 as T,
  Ty as E,
  USt as D,
  XOt as O,
  Y3 as k,
  YOt as A,
  Z3 as j,
  ZSt as M,
  ZY as N,
  ck as P,
  d0 as F,
  ew as I,
  f0 as L,
  iCt as ee,
  jy as te,
  kFt as ne,
  nCt as R,
  okt as z,
  rk as B,
  tk as V,
  tkt as H,
  vD as re,
  wy as ie,
  x4 as ae,
  yD as oe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CPr as se,
  DNr as ce,
  FNr as le,
  FPr as U,
  INr as ue,
  IPr as de,
  MOr as fe,
  NPr as W,
  OPr as pe,
  TFr as me,
  V1 as he,
  X5n as ge,
  Z5n as _e,
  bC as ve,
  cA as ye,
  hen as be,
  iFr as xe,
  iut as Se,
  jC as Ce,
  kC as we,
  kPr as G,
  njr as Te,
  pen as Ee,
  sA as De,
  tjr as Oe,
  tut as ke,
  wC as Ae,
  wNr as je,
  xFr as Me,
  xPr as Ne,
  z1 as Pe,
  zOr as Fe,
} from "./app-initial-ad16eaadf81f.js";
import {
  c as Ie,
  d as Le,
  f as Re,
  l as ze,
  m as Be,
  n as Ve,
  p as He,
  t as Ue,
} from "./appgen-site-detail-layout-8ded3439c229.js";
import { n as We, t as Ge } from "./cloud-automation-actions-9f7b3ed7556e.js";
import { n as Ke, r as qe } from "./menu-items-d31be3c38abb.js";
import { n as Je, t as Ye } from "./bullet-separator-fdae8fc4d5e0.js";
function Xe(e) {
  let t = (0, K.c)(65),
    { item: n, showDivider: a } = e,
    o = z(),
    s = D(),
    l = be(),
    u;
  t[0] === n ? (u = t[1]) : ((u = Ne(n)), (t[0] = n), (t[1] = u));
  let d = u,
    f;
  t[2] === n.automation ? (f = t[3]) : ((f = G(n.automation)), (t[2] = n.automation), (t[3] = f));
  let p = f,
    m,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    T,
    E,
    O,
    k,
    A;
  if (t[4] !== o || t[5] !== n || t[6] !== s || t[7] !== l || t[8] !== a || t[9] !== p || t[10] !== d) {
    let e = se(n),
      r;
    (t[25] !== n.automation.id || t[26] !== s
      ? ((r = () => {
          s(`${ge()}?automationId=${encodeURIComponent(n.automation.id)}&automationSource=cloud`);
        }),
        (t[25] = n.automation.id),
        (t[26] = s),
        (t[27] = r))
      : (r = t[27]),
      (g = r),
      (m = ke),
      (A = d),
      (_ = !0),
      (v = !1),
      (y = a),
      (b = d),
      (x = g),
      (k = `flex min-w-0 items-center justify-between gap-3`),
      (E = `flex min-w-0 flex-col gap-0.5`),
      t[28] === d
        ? (O = t[29])
        : ((O = (0, q.jsx)(`div`, { className: `truncate text-sm font-medium text-default`, children: d })),
          (t[28] = d),
          (t[29] = O)),
      (S = `flex items-center gap-1 truncate text-xs leading-4 text-secondary`),
      t[30] === p
        ? (C = t[31])
        : ((C = p === `active` ? null : (0, q.jsx)(H, { ...le[p] })), (t[30] = p), (t[31] = C)),
      (T =
        p === `active` && e != null
          ? (0, q.jsxs)(q.Fragment, {
              children: [
                (0, q.jsx)(`span`, {
                  className: `shrink-0`,
                  children: Pe({ intl: o, nextRunAt: Date.parse(e), status: `ACTIVE`, now: l }),
                }),
                (0, q.jsx)(Ye, {}),
              ],
            })
          : null),
      (t[4] = o),
      (t[5] = n),
      (t[6] = s),
      (t[7] = l),
      (t[8] = a),
      (t[9] = p),
      (t[10] = d),
      (t[11] = m),
      (t[12] = g),
      (t[13] = _),
      (t[14] = v),
      (t[15] = y),
      (t[16] = b),
      (t[17] = x),
      (t[18] = S),
      (t[19] = C),
      (t[20] = T),
      (t[21] = E),
      (t[22] = O),
      (t[23] = k),
      (t[24] = A));
  } else
    ((m = t[11]),
      (g = t[12]),
      (_ = t[13]),
      (v = t[14]),
      (y = t[15]),
      (b = t[16]),
      (x = t[17]),
      (S = t[18]),
      (C = t[19]),
      (T = t[20]),
      (E = t[21]),
      (O = t[22]),
      (k = t[23]),
      (A = t[24]));
  let j;
  t[32] !== o || t[33] !== n || t[34] !== p
    ? ((j = p === `active` ? (0, q.jsx)(`span`, { className: `truncate`, children: pe(n, o) }) : null),
      (t[32] = o),
      (t[33] = n),
      (t[34] = p),
      (t[35] = j))
    : (j = t[35]);
  let M;
  t[36] !== j || t[37] !== S || t[38] !== C || t[39] !== T
    ? ((M = (0, q.jsxs)(`div`, { className: S, children: [C, T, j] })),
      (t[36] = j),
      (t[37] = S),
      (t[38] = C),
      (t[39] = T),
      (t[40] = M))
    : (M = t[40]);
  let N;
  t[41] !== M || t[42] !== E || t[43] !== O
    ? ((N = (0, q.jsxs)(`div`, { className: E, children: [O, M] })),
      (t[41] = M),
      (t[42] = E),
      (t[43] = O),
      (t[44] = N))
    : (N = t[44]);
  let P;
  t[45] !== o || t[46] !== n || t[47] !== g
    ? ((P = (e) => {
        let {
          deleteAction: t,
          isCompleted: a,
          isPaused: s,
          pauseAction: l,
          resumeAction: u,
          runNowAction: d,
        } = e;
        return (0, q.jsxs)(V, {
          align: `end`,
          contentWidth: `xs`,
          triggerButton: (0, q.jsx)(ie, {
            label: o.formatMessage({
              id: `automations.tasks.row.moreActions`,
              defaultMessage: `More task actions`,
              description: `Accessible label for the menu of actions on a scheduled task`,
            }),
          }),
          children: [
            (0, q.jsx)(B.Item, {
              leftIconAsset: c,
              onSelect: g,
              children: (0, q.jsx)(H, {
                id: `appgenAutomations.openTask`,
                defaultMessage: `Open`,
                description: `Open this Site's task in the Scheduled page`,
              }),
            }),
            a
              ? null
              : (0, q.jsx)(B.Item, {
                  disabled: s ? u.disabled : l.disabled,
                  leftIconAsset: s ? r : h,
                  onSelect: s ? u.onSelect : l.onSelect,
                  children: s
                    ? (0, q.jsx)(H, {
                        id: `inbox.automations.resumeTooltip`,
                        defaultMessage: `Resume`,
                        description: `Tooltip label for resuming an automation`,
                      })
                    : (0, q.jsx)(H, {
                        id: `inbox.automations.pauseTooltip`,
                        defaultMessage: `Pause`,
                        description: `Tooltip label for pausing an automation`,
                      }),
                }),
            !a && d != null
              ? (0, q.jsx)(B.Item, {
                  disabled: d.disabled || U(n.automation),
                  leftIconAsset: i,
                  tooltipText: U(n.automation)
                    ? (0, q.jsx)(H, {
                        id: `automations.actions.runNow.triggerBasedTooltip`,
                        defaultMessage: `Automations triggered by events can’t be run manually`,
                        description: `Tooltip on the disabled Run now menu action for automations that run only when an external event triggers them`,
                      })
                    : d.tooltipText,
                  onSelect: d.onSelect,
                  children: (0, q.jsx)(H, {
                    id: `automations.actions.runNow`,
                    defaultMessage: `Run now`,
                    description: `Menu action on the Scheduled page that runs the selected task immediately`,
                  }),
                })
              : null,
            (0, q.jsx)(Ke, { item: n, source: `site_scheduled_tab`, disabled: !1 }),
            t == null
              ? null
              : (0, q.jsx)(B.Item, {
                  tone: `danger`,
                  disabled: t.disabled,
                  leftIconAsset: w,
                  onSelect: t.onSelect,
                  children: (0, q.jsx)(H, {
                    id: `settings.automations.delete`,
                    defaultMessage: `Delete`,
                    description: `Menu item for deleting a scheduled task`,
                  }),
                }),
          ],
        });
      }),
      (t[45] = o),
      (t[46] = n),
      (t[47] = g),
      (t[48] = P))
    : (P = t[48]);
  let F;
  t[49] !== n || t[50] !== P
    ? ((F = (0, q.jsx)(`div`, {
        className: `pointer-events-auto shrink-0 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 has-[[data-state=open]]:opacity-100 pointer-coarse:opacity-100`,
        children: (0, q.jsx)(Ge, { item: n, renderActions: P }),
      })),
      (t[49] = n),
      (t[50] = P),
      (t[51] = F))
    : (F = t[51]);
  let I;
  t[52] !== N || t[53] !== F || t[54] !== k
    ? ((I = (0, q.jsxs)(`div`, { className: k, children: [N, F] })),
      (t[52] = N),
      (t[53] = F),
      (t[54] = k),
      (t[55] = I))
    : (I = t[55]);
  let L;
  return (
    t[56] !== m ||
    t[57] !== _ ||
    t[58] !== v ||
    t[59] !== y ||
    t[60] !== b ||
    t[61] !== x ||
    t[62] !== I ||
    t[63] !== A
      ? ((L = (0, q.jsx)(m, {
          ariaLabel: A,
          hasInteractiveContent: _,
          isSelected: v,
          showDivider: y,
          title: b,
          onSelect: x,
          children: I,
        })),
        (t[56] = m),
        (t[57] = _),
        (t[58] = v),
        (t[59] = y),
        (t[60] = b),
        (t[61] = x),
        (t[62] = I),
        (t[63] = A),
        (t[64] = L))
      : (L = t[64]),
    L
  );
}
var K, q;
function J() {
  return (J = e(() => {
    ((K = S()),
      f(),
      y(),
      v(),
      te(),
      N(),
      O(),
      g(),
      _e(),
      ue(),
      We(),
      W(),
      he(),
      qe(),
      Je(),
      P(),
      E(),
      Se(),
      Ee(),
      (q = m()));
  }))();
}
function Ze(e) {
  let t = (0, Y.c)(5),
    { navigation: n } = e,
    r = p(),
    i = n?.projectId ?? r.projectId;
  if (i == null) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = (0, Z.jsx)(He, { navigation: n, to: `/sites` })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, Z.jsx)(Ue, { navigation: n, projectId: i, selectedTab: `automations`, children: Qe })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Qe(e) {
  return (0, Z.jsx)($e, { site: e }, e.id);
}
function $e(e) {
  let r = (0, Y.c)(54),
    { site: i } = e,
    o = n(fe),
    s = z(),
    [c, l] = (0, X.useState)(!1),
    [u, d] = (0, X.useState)(`all`),
    f;
  r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = { name: `automations.cloud` }), (r[0] = f))
    : (f = r[0]);
  let { isCapable: p } = R(Oe, f),
    m;
  r[1] === i.id ? (m = r[2]) : ((m = [i.id]), (r[1] = i.id), (r[2] = m));
  let { data: h, isLoading: g, isError: _, refetch: v } = R(we, m),
    { data: y, isLoading: b, isError: x, refetch: S } = ee(je),
    C = h?.[0]?.automation_ids,
    w,
    T,
    E,
    D;
  if (
    r[3] !== u ||
    r[4] !== C ||
    r[5] !== p ||
    r[6] !== _ ||
    r[7] !== g ||
    r[8] !== v ||
    r[9] !== S ||
    r[10] !== o ||
    r[11] !== i.id ||
    r[12] !== i.status ||
    r[13] !== y?.isAvailable ||
    r[14] !== y?.items ||
    r[15] !== x ||
    r[16] !== b
  ) {
    E = y?.items.filter((e) => {
      let { automation: t } = e;
      return C?.includes(t.id);
    });
    let e = E?.filter((e) => {
      let { automation: t } = e;
      return u === `all` || G(t) === u;
    });
    T = !p || i.status !== `active`;
    let n;
    if (
      (r[21] !== o || r[22] !== i.id
        ? ((n = (e, t) => {
            let n = e === void 0 ? `` : e,
              r = t === void 0 ? `` : t;
            (d(`all`),
              Ae(o, i.id, { ...de, kind: `cron`, name: n, prompt: r, scheduleConfig: me(null) }),
              l(!0));
          }),
          (r[21] = o),
          (r[22] = i.id),
          (r[23] = n))
        : (n = r[23]),
      (D = n),
      g || b)
    ) {
      let e;
      (r[24] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(Ie, {})), (r[24] = e))
        : (e = r[24]),
        (w = e));
    } else if (_ || x || y?.isAvailable === !1) {
      let e;
      r[25] !== v || r[26] !== S
        ? ((e = () => {
            Promise.all([v(), S()]);
          }),
          (r[25] = v),
          (r[26] = S),
          (r[27] = e))
        : (e = r[27]);
      let t, n;
      r[28] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Z.jsx)(H, {
            id: `appgenAutomations.retry`,
            defaultMessage: `Try again`,
            description: `Reload the Site schedules after a loading error`,
          })),
          (n = (0, Z.jsx)(H, {
            id: `appgenAutomations.loadError`,
            defaultMessage: `Couldn’t load scheduled tasks. Try again.`,
            description: `Error when the Site's scheduled tasks cannot be loaded`,
          })),
          (r[28] = t),
          (r[29] = n))
        : ((t = r[28]), (n = r[29]));
      let i;
      (r[30] === e
        ? (i = r[31])
        : ((i = (0, Z.jsx)(re, { type: `error`, onPrimaryCtaClick: e, primaryCtaText: t, content: n })),
          (r[30] = e),
          (r[31] = i)),
        (w = i));
    } else {
      let n = E?.length === 0 ? (0, Z.jsx)(et, { disabled: T, onCreate: D }) : null,
        i =
          E != null && E.length > 0 && e?.length === 0
            ? (0, Z.jsx)(`div`, {
                className: `px-4 py-8 text-center text-sm text-secondary`,
                children: (0, Z.jsx)(H, {
                  id: `appgenAutomations.emptyFilter`,
                  defaultMessage: `{status, select, active {No active tasks} paused {No paused tasks} completed {No completed tasks} other {No tasks}}`,
                  description: `Empty state when none of this Site's tasks match the selected status filter`,
                  values: { status: u },
                }),
              })
            : null,
        a =
          e != null && e.length > 0
            ? (0, Z.jsx)(`div`, {
                className: `p-3`,
                children: e.map((t, n) =>
                  (0, Z.jsx)(Xe, { item: t, showDivider: n < e.length - 1 }, t.automation.id),
                ),
              })
            : null,
        o;
      (r[32] !== n || r[33] !== i || r[34] !== a
        ? ((o = (0, Z.jsxs)(t, { dividers: !1, children: [n, i, a] })),
          (r[32] = n),
          (r[33] = i),
          (r[34] = a),
          (r[35] = o))
        : (o = r[35]),
        (w = o));
    }
    ((r[3] = u),
      (r[4] = C),
      (r[5] = p),
      (r[6] = _),
      (r[7] = g),
      (r[8] = v),
      (r[9] = S),
      (r[10] = o),
      (r[11] = i.id),
      (r[12] = i.status),
      (r[13] = y?.isAvailable),
      (r[14] = y?.items),
      (r[15] = x),
      (r[16] = b),
      (r[17] = w),
      (r[18] = T),
      (r[19] = E),
      (r[20] = D));
  } else ((w = r[17]), (T = r[18]), (E = r[19]), (D = r[20]));
  let O;
  r[36] !== u || r[37] !== s || r[38] !== E
    ? ((O =
        E != null && E.length > 0
          ? (0, Z.jsxs)(V, {
              align: `end`,
              contentWidth: `xs`,
              triggerButton: (0, Z.jsx)(k, {
                uniform: !0,
                color: `ghost`,
                radius: `small`,
                size: `composerSmLabel`,
                "aria-label": s.formatMessage({
                  id: `automations.scheduled.filter.label`,
                  defaultMessage: `Filter tasks`,
                  description: `Accessible label for the task status filter`,
                }),
                children: (0, Z.jsx)(a, { asset: F }),
              }),
              children: [
                (0, Z.jsx)(B.SectionLabel, {
                  children: (0, Z.jsx)(H, {
                    id: `appgenAutomations.showTasks`,
                    defaultMessage: `Show tasks`,
                    description: `Heading above the Site task status filter options`,
                  }),
                }),
                (0, Z.jsx)(B.RadioGroup, {
                  value: u,
                  children: [`all`, `active`, `paused`, `completed`].map((e) =>
                    (0, Z.jsx)(
                      B.RadioItem,
                      {
                        value: e,
                        onSelect: () => d(e),
                        children: (0, Z.jsx)(H, {
                          id: `appgenAutomations.filterOption`,
                          defaultMessage: `{status, select, active {Active} paused {Paused} completed {Completed} other {All}}`,
                          description: `Status filter for scheduled tasks attached to a Site`,
                          values: { status: e },
                        }),
                      },
                      e,
                    ),
                  ),
                }),
              ],
            })
          : null),
      (r[36] = u),
      (r[37] = s),
      (r[38] = E),
      (r[39] = O))
    : (O = r[39]);
  let A;
  r[40] === D ? (A = r[41]) : ((A = () => D()), (r[40] = D), (r[41] = A));
  let j;
  r[42] !== T || r[43] !== O || r[44] !== A
    ? ((j = (0, Z.jsx)(Le, { disabled: T, filter: O, onCreate: A })),
      (r[42] = T),
      (r[43] = O),
      (r[44] = A),
      (r[45] = j))
    : (j = r[45]);
  let M;
  r[46] !== c || r[47] !== i.id || r[48] !== i.title
    ? ((M = c
        ? (0, Z.jsx)(Q, {
            presentation: `dialog`,
            proposal: { projectId: i.id, title: i.title, prompt: ``, closeOnSave: !0 },
            onClose: () => l(!1),
          })
        : null),
      (r[46] = c),
      (r[47] = i.id),
      (r[48] = i.title),
      (r[49] = M))
    : (M = r[49]);
  let N;
  return (
    r[50] !== w || r[51] !== j || r[52] !== M
      ? ((N = (0, Z.jsxs)(De, { children: [j, w, M] })), (r[50] = w), (r[51] = j), (r[52] = M), (r[53] = N))
      : (N = r[53]),
    N
  );
}
function et(e) {
  let t = (0, Y.c)(14),
    { disabled: n, onCreate: r } = e,
    i = z(),
    s;
  t[0] === r ? (s = t[1]) : ((s = () => r()), (t[0] = r), (t[1] = s));
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Z.jsx)(H, {
        id: `appgenAutomations.tryTask`,
        defaultMessage: `Try a scheduled task`,
        description: `Button to open a blank scheduled-task form on an empty Site Scheduled tab`,
      })),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] !== n || t[4] !== s
    ? ((l = (0, Z.jsx)(k, {
        className: `text-sm font-medium underline-offset-2 hover:underline focus-visible:underline disabled:hover:no-underline`,
        color: `ghostMuted`,
        size: `inline`,
        disabled: n,
        onClick: s,
        children: c,
      })),
      (t[3] = n),
      (t[4] = s),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = [
        { icon: o, name: $.eventsTitle, prompt: $.events },
        { icon: ae, name: $.dashboardTitle, prompt: $.dashboard },
        { icon: C, name: $.promotionTitle, prompt: $.promotion },
      ]),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] !== n || t[8] !== i || t[9] !== r
    ? ((d = (0, Z.jsx)(`ul`, {
        className: `flex flex-col items-center gap-4 text-sm text-secondary`,
        children: u.map((e) => {
          let { icon: t, name: o, prompt: s } = e;
          return (0, Z.jsx)(
            `li`,
            {
              children: (0, Z.jsx)(k, {
                className: `underline-offset-2 hover:underline focus-visible:underline disabled:hover:no-underline`,
                color: n ? `ghostSecondary` : `ghostMuted`,
                size: `inline`,
                disabled: n,
                onClick: () => r(i.formatMessage(o), i.formatMessage(s)),
                children: (0, Z.jsxs)(`span`, {
                  className: `flex items-center gap-2.5`,
                  children: [(0, Z.jsx)(a, { asset: t }), (0, Z.jsx)(H, { ...s })],
                }),
              }),
            },
            s.id,
          );
        }),
      })),
      (t[7] = n),
      (t[8] = i),
      (t[9] = r),
      (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== l || t[12] !== d
      ? ((f = (0, Z.jsxs)(`div`, {
          className: `flex flex-col items-center gap-4 px-4 py-12 select-none`,
          children: [l, d],
        })),
        (t[11] = l),
        (t[12] = d),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
var Y, X, Z, Q, $;
function tt() {
  return (tt = e(() => {
    ((Y = S()),
      T(),
      u(),
      L(),
      _(),
      M(),
      (X = l()),
      O(),
      g(),
      Te(),
      Me(),
      xe(),
      W(),
      ce(),
      ve(),
      oe(),
      j(),
      P(),
      b(),
      s(),
      Fe(),
      ye(),
      I(),
      Ce(),
      J(),
      Ve(),
      Be(),
      Re(),
      ze(),
      (Z = m()),
      ne(),
      (Q = d(async () => {
        let [{ SiteAutomationCreatePanel: e }] = await Promise.all([
          x(
            () => import(`./site-automation-create-panel-d9c7e3c33a9b.js`),
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]),
            import.meta.url,
          ),
          x(
            () => import(`./site-automation-create-dialog-1632ebebbecd.js`),
            __vite__mapDeps([19, 2, 1, 3, 20, 5, 6, 9, 10, 21, 8, 11, 12, 14, 15, 16, 17, 18, 22, 23, 24]),
            import.meta.url,
          ),
        ]);
        return e;
      })),
      ($ = A({
        eventsTitle: {
          id: `appgenAutomations.example.eventsTitle`,
          defaultMessage: `Update events`,
          description: `Initial task name when choosing the suggestion to keep a Site's events current`,
        },
        events: {
          id: `appgenAutomations.example.events`,
          defaultMessage: `Keep events current`,
          description: `Example use of a Site scheduled task: keeping event information up to date`,
        },
        dashboardTitle: {
          id: `appgenAutomations.example.dashboardTitle`,
          defaultMessage: `Refresh dashboard`,
          description: `Initial task name when choosing the suggestion to refresh a Site's dashboard`,
        },
        dashboard: {
          id: `appgenAutomations.example.dashboard`,
          defaultMessage: `Refresh a dashboard`,
          description: `Example use of a Site scheduled task: refreshing a dashboard's data`,
        },
        promotionTitle: {
          id: `appgenAutomations.example.promotionTitle`,
          defaultMessage: `Run promotion`,
          description: `Initial task name when choosing the suggestion to run a promotion on a Site`,
        },
        promotion: {
          id: `appgenAutomations.example.promotion`,
          defaultMessage: `Run a promotion`,
          description: `Example use of a Site scheduled task: running a promotion on the Site`,
        },
      })));
  }))();
}
tt();
export { Ze as AppgenAutomationsPage };
//# sourceMappingURL=appgen-automations-page-c0b0f4a3337c.js.map
