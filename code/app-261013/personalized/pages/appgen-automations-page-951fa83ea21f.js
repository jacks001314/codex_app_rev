const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./site-automation-create-panel-ef2affa27e73.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./site-automation-create-panel-269a3999f344.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./automation-detail-panel-d783fffd1a5b.js",
      "./automation-notification-policy-dropdown-53dcfcad0c55.js",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./automation-dialog-8a01873d44d2.js",
      "./model-and-reasoning-effort-translations-96be4f100801.js",
      "./automation-team-row-7df1613673f0.js",
      "./automation-frequency-section-b14557c3b8fc.js",
      "./DatePicker-ab3817e664c5.js",
      "./helpers-a3a9f6ff3e2c.js",
      "./PlatformUIKitContext-75518ab926e7.js",
      "./ChevronRight-ffca387b610d.js",
      "./DatePicker-916e4078b8cc.css",
      "./site-automation-create-dialog-ab46820ab5fd.js",
      "./configuration-schedule-48b79a5c9f8a.js",
      "./schedule-draft-871290737b78.js",
      "./PlatformUIKitProvider-8f7f0fbad1d5.js",
      "./time-zone-options-5cb947c6c324.js",
      "./plugins-state-17abea2c5736.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $v as n,
  ADt as r,
  AO as i,
  B4 as a,
  CO as o,
  D2 as s,
  Ext as c,
  F0 as l,
  F2 as u,
  GE as d,
  I0 as f,
  I2 as p,
  IDt as m,
  Ixt as h,
  JC as g,
  Mz as _,
  NY as v,
  Nz as y,
  O2 as b,
  PY as x,
  Pxt as S,
  QJ as C,
  Qv as w,
  S2 as T,
  TO as E,
  VDt as D,
  Vxt as O,
  WE as k,
  ZJ as A,
  _xt as j,
  ay as M,
  fPt as N,
  iy as P,
  jDt as F,
  kxt as I,
  m1 as L,
  oy as R,
  p1 as z,
  pPt as B,
  qC as V,
  sy as H,
  t3 as ee,
  vzt as U,
  x2 as te,
  xMt as W,
  yzt as ne,
  z4 as re,
  zxt as G,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Q as ie,
  $ct as ae,
  $kr as oe,
  Cwr as se,
  Ek as ce,
  FEr as le,
  GS as ue,
  J5t as de,
  K5t as fe,
  PAr as pe,
  PEr as me,
  QAr as he,
  Tk as ge,
  Xct as _e,
  YS as ve,
  ZQ as ye,
  Zkr as be,
  aAr as K,
  dAr as q,
  dkr as xe,
  eC as Se,
  ekr as Ce,
  fAr as we,
  fkr as Te,
  gwr as Ee,
  h3n as De,
  iAr as Oe,
  lAr as J,
  m3n as ke,
  nC as Ae,
  njr as je,
  rkr as Me,
} from "./app-initial-5851df3f6cb1.js";
import {
  c as Ne,
  d as Pe,
  f as Fe,
  l as Ie,
  m as Le,
  n as Re,
  p as ze,
  t as Be,
} from "./appgen-site-detail-layout-f1525d985a83.js";
import { n as Ve, t as He } from "./cloud-automation-actions-3a594ba7517b.js";
import { n as Ue, r as We } from "./menu-items-18cfbf2a8c48.js";
import { n as Ge, t as Ke } from "./bullet-separator-9aa986eaf7a4.js";
function qe(e) {
  let t = (0, Je.c)(65),
    { item: n, showDivider: r } = e,
    i = D(),
    a = c(),
    l = de(),
    d;
  t[0] === n ? (d = t[1]) : ((d = be(n)), (t[0] = n), (t[1] = d));
  let f = d,
    p;
  t[2] === n.automation ? (p = t[3]) : ((p = K(n.automation)), (t[2] = n.automation), (t[3] = p));
  let h = p,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    T,
    O,
    k,
    A,
    j,
    M,
    N;
  if (t[4] !== i || t[5] !== n || t[6] !== a || t[7] !== l || t[8] !== r || t[9] !== h || t[10] !== f) {
    let e = oe(n),
      o;
    (t[25] !== n.automation.id || t[26] !== a
      ? ((o = () => {
          a(`${ke()}?automationId=${encodeURIComponent(n.automation.id)}&automationSource=cloud`);
        }),
        (t[25] = n.automation.id),
        (t[26] = a),
        (t[27] = o))
      : (o = t[27]),
      (_ = o),
      (g = _e),
      (N = f),
      (v = !0),
      (y = !1),
      (b = r),
      (x = f),
      (S = _),
      (M = `flex min-w-0 items-center justify-between gap-3`),
      (A = `flex min-w-0 flex-col gap-0.5`),
      t[28] === f
        ? (j = t[29])
        : ((j = (0, Y.jsx)(`div`, { className: `truncate text-sm font-medium text-default`, children: f })),
          (t[28] = f),
          (t[29] = j)),
      (T = `flex items-center gap-1 truncate text-xs leading-4 text-secondary`),
      t[30] === h
        ? (O = t[31])
        : ((O = h === `active` ? null : (0, Y.jsx)(m, { ...xe[h] })), (t[30] = h), (t[31] = O)),
      (k =
        h === `active` && e != null
          ? (0, Y.jsxs)(Y.Fragment, {
              children: [
                (0, Y.jsx)(`span`, {
                  className: `shrink-0`,
                  children: ye({ intl: i, nextRunAt: Date.parse(e), status: `ACTIVE`, now: l }),
                }),
                (0, Y.jsx)(Ke, {}),
              ],
            })
          : null),
      (t[4] = i),
      (t[5] = n),
      (t[6] = a),
      (t[7] = l),
      (t[8] = r),
      (t[9] = h),
      (t[10] = f),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y),
      (t[15] = b),
      (t[16] = x),
      (t[17] = S),
      (t[18] = T),
      (t[19] = O),
      (t[20] = k),
      (t[21] = A),
      (t[22] = j),
      (t[23] = M),
      (t[24] = N));
  } else
    ((g = t[11]),
      (_ = t[12]),
      (v = t[13]),
      (y = t[14]),
      (b = t[15]),
      (x = t[16]),
      (S = t[17]),
      (T = t[18]),
      (O = t[19]),
      (k = t[20]),
      (A = t[21]),
      (j = t[22]),
      (M = t[23]),
      (N = t[24]));
  let F;
  t[32] !== i || t[33] !== n || t[34] !== h
    ? ((F = h === `active` ? (0, Y.jsx)(`span`, { className: `truncate`, children: Oe(n, i) }) : null),
      (t[32] = i),
      (t[33] = n),
      (t[34] = h),
      (t[35] = F))
    : (F = t[35]);
  let I;
  t[36] !== F || t[37] !== T || t[38] !== O || t[39] !== k
    ? ((I = (0, Y.jsxs)(`div`, { className: T, children: [O, k, F] })),
      (t[36] = F),
      (t[37] = T),
      (t[38] = O),
      (t[39] = k),
      (t[40] = I))
    : (I = t[40]);
  let L;
  t[41] !== I || t[42] !== A || t[43] !== j
    ? ((L = (0, Y.jsxs)(`div`, { className: A, children: [j, I] })),
      (t[41] = I),
      (t[42] = A),
      (t[43] = j),
      (t[44] = L))
    : (L = t[44]);
  let z;
  t[45] !== i || t[46] !== n || t[47] !== _
    ? ((z = (e) => {
        let {
          deleteAction: t,
          isCompleted: r,
          isPaused: a,
          pauseAction: c,
          resumeAction: l,
          runNowAction: d,
        } = e;
        return (0, Y.jsxs)(o, {
          align: `end`,
          contentWidth: `xs`,
          triggerButton: (0, Y.jsx)(w, {
            label: i.formatMessage({
              id: `automations.tasks.row.moreActions`,
              defaultMessage: `More task actions`,
              description: `Accessible label for the menu of actions on a scheduled task`,
            }),
          }),
          children: [
            (0, Y.jsx)(E.Item, {
              leftIconAsset: u,
              onSelect: _,
              children: (0, Y.jsx)(m, {
                id: `appgenAutomations.openTask`,
                defaultMessage: `Open`,
                description: `Open this Site's task in the Scheduled page`,
              }),
            }),
            r
              ? null
              : (0, Y.jsx)(E.Item, {
                  disabled: a ? l.disabled : c.disabled,
                  leftIconAsset: a ? P : R,
                  onSelect: a ? l.onSelect : c.onSelect,
                  children: a
                    ? (0, Y.jsx)(m, {
                        id: `inbox.automations.resumeTooltip`,
                        defaultMessage: `Resume`,
                        description: `Tooltip label for resuming an automation`,
                      })
                    : (0, Y.jsx)(m, {
                        id: `inbox.automations.pauseTooltip`,
                        defaultMessage: `Pause`,
                        description: `Tooltip label for pausing an automation`,
                      }),
                }),
            !r && d != null
              ? (0, Y.jsx)(E.Item, {
                  disabled: d.disabled || q(n.automation),
                  leftIconAsset: s,
                  tooltipText: q(n.automation)
                    ? (0, Y.jsx)(m, {
                        id: `automations.actions.runNow.triggerBasedTooltip`,
                        defaultMessage: `Automations triggered by events can’t be run manually`,
                        description: `Tooltip on the disabled Run now menu action for automations that run only when an external event triggers them`,
                      })
                    : d.tooltipText,
                  onSelect: d.onSelect,
                  children: (0, Y.jsx)(m, {
                    id: `automations.actions.runNow`,
                    defaultMessage: `Run now`,
                    description: `Menu action on the Scheduled page that runs the selected task immediately`,
                  }),
                })
              : null,
            (0, Y.jsx)(Ue, { item: n, source: `site_scheduled_tab`, disabled: !1 }),
            t == null
              ? null
              : (0, Y.jsx)(E.Item, {
                  tone: `danger`,
                  disabled: t.disabled,
                  leftIconAsset: C,
                  onSelect: t.onSelect,
                  children: (0, Y.jsx)(m, {
                    id: `settings.automations.delete`,
                    defaultMessage: `Delete`,
                    description: `Menu item for deleting a scheduled task`,
                  }),
                }),
          ],
        });
      }),
      (t[45] = i),
      (t[46] = n),
      (t[47] = _),
      (t[48] = z))
    : (z = t[48]);
  let B;
  t[49] !== n || t[50] !== z
    ? ((B = (0, Y.jsx)(`div`, {
        className: `pointer-events-auto shrink-0 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 has-[[data-state=open]]:opacity-100 pointer-coarse:opacity-100`,
        children: (0, Y.jsx)(He, { item: n, renderActions: z }),
      })),
      (t[49] = n),
      (t[50] = z),
      (t[51] = B))
    : (B = t[51]);
  let V;
  t[52] !== L || t[53] !== B || t[54] !== M
    ? ((V = (0, Y.jsxs)(`div`, { className: M, children: [L, B] })),
      (t[52] = L),
      (t[53] = B),
      (t[54] = M),
      (t[55] = V))
    : (V = t[55]);
  let H;
  return (
    t[56] !== g ||
    t[57] !== v ||
    t[58] !== y ||
    t[59] !== b ||
    t[60] !== x ||
    t[61] !== S ||
    t[62] !== V ||
    t[63] !== N
      ? ((H = (0, Y.jsx)(g, {
          ariaLabel: N,
          hasInteractiveContent: v,
          isSelected: y,
          showDivider: b,
          title: x,
          onSelect: S,
          children: V,
        })),
        (t[56] = g),
        (t[57] = v),
        (t[58] = y),
        (t[59] = b),
        (t[60] = x),
        (t[61] = S),
        (t[62] = V),
        (t[63] = N),
        (t[64] = H))
      : (H = t[64]),
    H
  );
}
var Je, Y;
function Ye() {
  return (Ye = e(() => {
    ((Je = U()),
      p(),
      b(),
      H(),
      M(),
      A(),
      F(),
      j(),
      De(),
      Te(),
      Ve(),
      J(),
      ie(),
      We(),
      Ge(),
      i(),
      n(),
      ae(),
      fe(),
      (Y = W()));
  }))();
}
function Xe(e) {
  let t = (0, X.c)(5),
    { navigation: n } = e,
    r = I(),
    i = n?.projectId ?? r.projectId;
  if (i == null) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = (0, Q.jsx)(ze, { navigation: n, to: `/sites` })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, Q.jsx)(Be, { navigation: n, projectId: i, selectedTab: `automations`, children: Ze })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Ze(e) {
  return (0, Q.jsx)(Qe, { site: e }, e.id);
}
function Qe(e) {
  let n = (0, X.c)(54),
    { site: r } = e,
    i = h(Ee),
    a = D(),
    [s, c] = (0, Z.useState)(!1),
    [l, u] = (0, Z.useState)(`all`),
    d;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = { name: `automations.cloud` }), (n[0] = d))
    : (d = n[0]);
  let { isCapable: f } = G(me, d),
    p;
  n[1] === r.id ? (p = n[2]) : ((p = [r.id]), (n[1] = r.id), (n[2] = p));
  let { data: g, isLoading: v, isError: y, refetch: b } = G(Se, p),
    { data: x, isLoading: S, isError: C, refetch: w } = O(Ce),
    T = g?.[0]?.automation_ids,
    A,
    j,
    M,
    N;
  if (
    n[3] !== l ||
    n[4] !== T ||
    n[5] !== f ||
    n[6] !== y ||
    n[7] !== v ||
    n[8] !== b ||
    n[9] !== w ||
    n[10] !== i ||
    n[11] !== r.id ||
    n[12] !== r.status ||
    n[13] !== x?.isAvailable ||
    n[14] !== x?.items ||
    n[15] !== C ||
    n[16] !== S
  ) {
    M = x?.items.filter((e) => {
      let { automation: t } = e;
      return T?.includes(t.id);
    });
    let e = M?.filter((e) => {
      let { automation: t } = e;
      return l === `all` || K(t) === l;
    });
    j = !f || r.status !== `active`;
    let t;
    if (
      (n[21] !== i || n[22] !== r.id
        ? ((t = (e, t) => {
            let n = e === void 0 ? `` : e,
              a = t === void 0 ? `` : t;
            (u(`all`),
              ve(i, r.id, { ...we, kind: `cron`, name: n, prompt: a, scheduleConfig: je(null) }),
              c(!0));
          }),
          (n[21] = i),
          (n[22] = r.id),
          (n[23] = t))
        : (t = n[23]),
      (N = t),
      v || S)
    ) {
      let e;
      (n[24] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Ne, {})), (n[24] = e))
        : (e = n[24]),
        (A = e));
    } else if (y || C || x?.isAvailable === !1) {
      let e;
      n[25] !== b || n[26] !== w
        ? ((e = () => {
            Promise.all([b(), w()]);
          }),
          (n[25] = b),
          (n[26] = w),
          (n[27] = e))
        : (e = n[27]);
      let t, r;
      n[28] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Q.jsx)(m, {
            id: `appgenAutomations.retry`,
            defaultMessage: `Try again`,
            description: `Reload the Site schedules after a loading error`,
          })),
          (r = (0, Q.jsx)(m, {
            id: `appgenAutomations.loadError`,
            defaultMessage: `Couldn’t load scheduled tasks. Try again.`,
            description: `Error when the Site's scheduled tasks cannot be loaded`,
          })),
          (n[28] = t),
          (n[29] = r))
        : ((t = n[28]), (r = n[29]));
      let i;
      (n[30] === e
        ? (i = n[31])
        : ((i = (0, Q.jsx)(k, { type: `error`, onPrimaryCtaClick: e, primaryCtaText: t, content: r })),
          (n[30] = e),
          (n[31] = i)),
        (A = i));
    } else {
      let t = M?.length === 0 ? (0, Q.jsx)($e, { disabled: j, onCreate: N }) : null,
        r =
          M != null && M.length > 0 && e?.length === 0
            ? (0, Q.jsx)(`div`, {
                className: `px-4 py-8 text-center text-sm text-secondary`,
                children: (0, Q.jsx)(m, {
                  id: `appgenAutomations.emptyFilter`,
                  defaultMessage: `{status, select, active {No active tasks} paused {No paused tasks} completed {No completed tasks} other {No tasks}}`,
                  description: `Empty state when none of this Site's tasks match the selected status filter`,
                  values: { status: l },
                }),
              })
            : null,
        i =
          e != null && e.length > 0
            ? (0, Q.jsx)(`div`, {
                className: `p-3`,
                children: e.map((t, n) =>
                  (0, Q.jsx)(qe, { item: t, showDivider: n < e.length - 1 }, t.automation.id),
                ),
              })
            : null,
        a;
      (n[32] !== t || n[33] !== r || n[34] !== i
        ? ((a = (0, Q.jsxs)(V, { dividers: !1, children: [t, r, i] })),
          (n[32] = t),
          (n[33] = r),
          (n[34] = i),
          (n[35] = a))
        : (a = n[35]),
        (A = a));
    }
    ((n[3] = l),
      (n[4] = T),
      (n[5] = f),
      (n[6] = y),
      (n[7] = v),
      (n[8] = b),
      (n[9] = w),
      (n[10] = i),
      (n[11] = r.id),
      (n[12] = r.status),
      (n[13] = x?.isAvailable),
      (n[14] = x?.items),
      (n[15] = C),
      (n[16] = S),
      (n[17] = A),
      (n[18] = j),
      (n[19] = M),
      (n[20] = N));
  } else ((A = n[17]), (j = n[18]), (M = n[19]), (N = n[20]));
  let P;
  n[36] !== l || n[37] !== a || n[38] !== M
    ? ((P =
        M != null && M.length > 0
          ? (0, Q.jsxs)(o, {
              align: `end`,
              contentWidth: `xs`,
              triggerButton: (0, Q.jsx)(t, {
                uniform: !0,
                color: `ghost`,
                radius: `small`,
                size: `composerSmLabel`,
                "aria-label": a.formatMessage({
                  id: `automations.scheduled.filter.label`,
                  defaultMessage: `Filter tasks`,
                  description: `Accessible label for the task status filter`,
                }),
                children: (0, Q.jsx)(_, { asset: z }),
              }),
              children: [
                (0, Q.jsx)(E.SectionLabel, {
                  children: (0, Q.jsx)(m, {
                    id: `appgenAutomations.showTasks`,
                    defaultMessage: `Show tasks`,
                    description: `Heading above the Site task status filter options`,
                  }),
                }),
                (0, Q.jsx)(E.RadioGroup, {
                  value: l,
                  children: [`all`, `active`, `paused`, `completed`].map((e) =>
                    (0, Q.jsx)(
                      E.RadioItem,
                      {
                        value: e,
                        onSelect: () => u(e),
                        children: (0, Q.jsx)(m, {
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
      (n[36] = l),
      (n[37] = a),
      (n[38] = M),
      (n[39] = P))
    : (P = n[39]);
  let F;
  n[40] === N ? (F = n[41]) : ((F = () => N()), (n[40] = N), (n[41] = F));
  let I;
  n[42] !== j || n[43] !== P || n[44] !== F
    ? ((I = (0, Q.jsx)(Pe, { disabled: j, filter: P, onCreate: F })),
      (n[42] = j),
      (n[43] = P),
      (n[44] = F),
      (n[45] = I))
    : (I = n[45]);
  let L;
  n[46] !== s || n[47] !== r.id || n[48] !== r.title
    ? ((L = s
        ? (0, Q.jsx)(et, {
            presentation: `dialog`,
            proposal: { projectId: r.id, title: r.title, prompt: ``, closeOnSave: !0 },
            onClose: () => c(!1),
          })
        : null),
      (n[46] = s),
      (n[47] = r.id),
      (n[48] = r.title),
      (n[49] = L))
    : (L = n[49]);
  let R;
  return (
    n[50] !== A || n[51] !== I || n[52] !== L
      ? ((R = (0, Q.jsxs)(ge, { children: [I, A, L] })), (n[50] = A), (n[51] = I), (n[52] = L), (n[53] = R))
      : (R = n[53]),
    R
  );
}
function $e(e) {
  let n = (0, X.c)(14),
    { disabled: r, onCreate: i } = e,
    a = D(),
    o;
  n[0] === i ? (o = n[1]) : ((o = () => i()), (n[0] = i), (n[1] = o));
  let s;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(m, {
        id: `appgenAutomations.tryTask`,
        defaultMessage: `Try a scheduled task`,
        description: `Button to open a blank scheduled-task form on an empty Site Scheduled tab`,
      })),
      (n[2] = s))
    : (s = n[2]);
  let c;
  n[3] !== r || n[4] !== o
    ? ((c = (0, Q.jsx)(t, {
        className: `text-sm font-medium underline-offset-2 hover:underline focus-visible:underline disabled:hover:no-underline`,
        color: `ghostMuted`,
        size: `inline`,
        disabled: r,
        onClick: o,
        children: s,
      })),
      (n[3] = r),
      (n[4] = o),
      (n[5] = c))
    : (c = n[5]);
  let u;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = [
        { icon: l, name: $.eventsTitle, prompt: $.events },
        { icon: te, name: $.dashboardTitle, prompt: $.dashboard },
        { icon: x, name: $.promotionTitle, prompt: $.promotion },
      ]),
      (n[6] = u))
    : (u = n[6]);
  let d;
  n[7] !== r || n[8] !== a || n[9] !== i
    ? ((d = (0, Q.jsx)(`ul`, {
        className: `flex flex-col items-center gap-4 text-sm text-secondary`,
        children: u.map((e) => {
          let { icon: n, name: o, prompt: s } = e;
          return (0, Q.jsx)(
            `li`,
            {
              children: (0, Q.jsx)(t, {
                className: `underline-offset-2 hover:underline focus-visible:underline disabled:hover:no-underline`,
                color: r ? `ghostSecondary` : `ghostMuted`,
                size: `inline`,
                disabled: r,
                onClick: () => i(a.formatMessage(o), a.formatMessage(s)),
                children: (0, Q.jsxs)(`span`, {
                  className: `flex items-center gap-2.5`,
                  children: [(0, Q.jsx)(_, { asset: n }), (0, Q.jsx)(m, { ...s })],
                }),
              }),
            },
            s.id,
          );
        }),
      })),
      (n[7] = r),
      (n[8] = a),
      (n[9] = i),
      (n[10] = d))
    : (d = n[10]);
  let f;
  return (
    n[11] !== c || n[12] !== d
      ? ((f = (0, Q.jsxs)(`div`, {
          className: `flex flex-col items-center gap-4 px-4 py-12 select-none`,
          children: [c, d],
        })),
        (n[11] = c),
        (n[12] = d),
        (n[13] = f))
      : (f = n[13]),
    f
  );
}
var X, Z, Q, et, $;
function tt() {
  return (tt = e(() => {
    ((X = U()),
      T(),
      f(),
      L(),
      v(),
      S(),
      (Z = ne()),
      F(),
      j(),
      le(),
      he(),
      pe(),
      J(),
      Me(),
      ue(),
      d(),
      ee(),
      i(),
      y(),
      re(),
      se(),
      ce(),
      g(),
      Ae(),
      Ye(),
      Re(),
      Le(),
      Fe(),
      Ie(),
      (Q = W()),
      B(),
      (et = a(async () => {
        let [{ SiteAutomationCreatePanel: e }] = await Promise.all([
          N(
            () => import(`./site-automation-create-panel-ef2affa27e73.js`),
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
            import.meta.url,
          ),
          N(
            () => import(`./site-automation-create-dialog-ab46820ab5fd.js`),
            __vite__mapDeps([
              20, 2, 1, 3, 21, 5, 6, 9, 10, 22, 8, 11, 12, 14, 15, 16, 17, 18, 19, 23, 24, 25,
            ]),
            import.meta.url,
          ),
        ]);
        return e;
      })),
      ($ = r({
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
export { Xe as AppgenAutomationsPage };
//# sourceMappingURL=appgen-automations-page-951fa83ea21f.js.map
