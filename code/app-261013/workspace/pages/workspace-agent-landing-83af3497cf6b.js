const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-d5f4f7c0e2cc.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./automation-delete-confirmation-dialog-c8c0c59ec586.js",
      "./automation-frequency-section-b14557c3b8fc.js",
      "./DatePicker-ab3817e664c5.js",
      "./helpers-a3a9f6ff3e2c.js",
      "./PlatformUIKitContext-75518ab926e7.js",
      "./ChevronRight-ffca387b610d.js",
      "./DatePicker-916e4078b8cc.css",
      "./detail-section-state-e7774e5ba7f3.js",
      "./builder-analytics-f0ccbf8827ee.js",
      "./read-error-29adc71a8032.js",
      "./apps-query-410f7e452f43.js",
      "./query-b1ceced7057f.js",
      "./workspace-agent-detail-query-c8301c5fcc0a.js",
      "./workspace-agent-apps-6b85a870e5a0.js",
      "./query-89ce93dd0b9b.js",
      "./model-80ecbc793fd2.js",
      "./memory-750b1870574a.js",
      "./memory-fe8ee0015df7.js",
      "./surface-3fad834862de.js",
      "./toolbar-breadcrumb-e1be94112dcb.js",
      "./apps-263d5791a9a3.js",
      "./card-tile-a92df345e9ab.js",
      "./personal-apps-bcb923c96925.js",
      "./app-connect-modal-by-id-a3e486d4397f.js",
      "./app-connect-modal-fb7e1b0124f4.js",
      "./app-connect-skeleton-ca153a13f650.js",
      "./app-connect-load-state-bbeb24b226fa.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  B4 as r,
  Cat as i,
  Ext as a,
  IDt as o,
  Jd as s,
  Mz as c,
  Nxt as l,
  Nz as u,
  Pxt as d,
  TDt as f,
  TJ as p,
  VDt as m,
  Vxt as h,
  YK as g,
  ZV as _,
  _xt as v,
  cz as y,
  fPt as b,
  hV as x,
  hrt as S,
  iz as C,
  jDt as w,
  nH as T,
  pPt as E,
  qd as D,
  rz as O,
  sMt as k,
  sz as A,
  t3 as j,
  vrt as M,
  vzt as N,
  xMt as P,
  xat as ee,
  yzt as F,
  z4 as I,
  zxt as te,
} from "./app-shared-bbfeca5e5737.js";
import {
  $ct as L,
  Fwr as ne,
  GMr as re,
  M$ as ie,
  MRt as ae,
  Mwr as oe,
  N$ as se,
  NRt as R,
  Twr as ce,
  XHt as z,
  Xct as B,
  Xd as V,
  YHt as le,
  YMr as H,
  Yd as ue,
  bF as de,
  j$ as U,
  tNr as W,
  xF as G,
} from "./app-initial-5851df3f6cb1.js";
import { n as K, t as fe } from "./home-suggestion-list-3dfbdedc041d.js";
import { n as q, t as J } from "./bullet-separator-9aa986eaf7a4.js";
import { n as pe, r as Y } from "./detail-page-affba5a9d44d.js";
import { n as X, t as me } from "./detail-section-state-e7774e5ba7f3.js";
import { b as he, l as ge } from "./builder-analytics-f0ccbf8827ee.js";
import { n as _e, t as ve } from "./read-error-29adc71a8032.js";
import { i as ye, n as be, t as xe } from "./workspace-agent-detail-query-c8301c5fcc0a.js";
import { a as Se, i as Ce, t as we } from "./model-80ecbc793fd2.js";
import { i as Te, n as Ee, r as De, t as Oe } from "./button-b8f6289915e3.js";
import { n as ke, t as Ae } from "./workspace-agent-icon-89bcc04ee2a2.js";
import { n as je, t as Me } from "./workspace-agent-skill-icons-8e48380d39c1.js";
import { n as Ne, t as Pe } from "./agent-menu-c3dd02be85a2.js";
function Fe(e) {
  let t = (0, Le.c)(10),
    { agentName: n, conversation: r } = e;
  switch (r.fiber_status) {
    case `pending`: {
      let e;
      return (
        t[0] === n
          ? (e = t[1])
          : ((e = (0, Z.jsx)(o, {
              id: `workspaceAgents.detail.activity.queued`,
              defaultMessage: `{agentName} is queued`,
              description: `Status when a Workspace Agent run has been accepted but has not started; agentName is the agent's display name`,
              values: { agentName: n },
            })),
            (t[0] = n),
            (t[1] = e)),
        e
      );
    }
    case `in_progress`: {
      let e;
      return (
        t[2] !== n || t[3] !== r.fiber_is_responding
          ? ((e = r.fiber_is_responding
              ? (0, Z.jsx)(o, {
                  id: `workspaceAgents.detail.activity.responding`,
                  defaultMessage: `{agentName} is responding`,
                  description: `Status when a Workspace Agent is actively producing a response; agentName is the agent's display name`,
                  values: { agentName: n },
                })
              : (0, Z.jsx)(o, {
                  id: `workspaceAgents.detail.activity.working`,
                  defaultMessage: `{agentName} is working`,
                  description: `Status when a Workspace Agent is actively running without producing a response yet; agentName is the agent's display name`,
                  values: { agentName: n },
                })),
            (t[2] = n),
            (t[3] = r.fiber_is_responding),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `completed`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(o, {
              id: `workspaceAgents.detail.activity.completed`,
              defaultMessage: `Task completed`,
              description: `Status of a completed Workspace Agent run`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `blocked`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(ae, {
              variant: `warning`,
              children: (0, Z.jsx)(o, {
                id: `workspaceAgents.detail.activity.blocked`,
                defaultMessage: `Needs your attention`,
                description: `Status of a Workspace Agent run blocked on user input`,
              }),
            })),
            (t[6] = e))
          : (e = t[6]),
        e
      );
    }
    case `timed_out_waiting_on_tool`:
    case `failed`: {
      let e;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(ae, {
              variant: `danger`,
              children: (0, Z.jsx)(o, {
                id: `workspaceAgents.detail.activity.failed`,
                defaultMessage: `Could not complete task`,
                description: `Status of a failed Workspace Agent run`,
              }),
            })),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
    case `aborted`: {
      let e;
      return (
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(o, {
              id: `workspaceAgents.detail.activity.aborted`,
              defaultMessage: `Run stopped`,
              description: `Status of a stopped Workspace Agent run`,
            })),
            (t[8] = e))
          : (e = t[8]),
        e
      );
    }
    case null:
    case void 0: {
      let e;
      return (
        t[9] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(o, {
              id: `workspaceAgents.detail.activity.unknown`,
              defaultMessage: `Unknown status`,
              description: `Fallback status for a Workspace Agent run`,
            })),
            (t[9] = e))
          : (e = t[9]),
        e
      );
    }
  }
}
function Ie(e) {
  let t = (0, Le.c)(20),
    { timestamp: n, upcoming: r } = e,
    i = r !== void 0 && r,
    a = m(),
    s = C(),
    c,
    l,
    u;
  if (t[0] !== a || t[1] !== n) {
    l = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (((u = Date.parse(n)), !Number.isFinite(u))) {
        let e;
        (t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(o, {
              id: `workspaceAgents.detail.activity.unknownTime`,
              defaultMessage: `Time unavailable`,
              description: `Fallback when an agent activity timestamp cannot be read`,
            })),
            (t[5] = e))
          : (e = t[5]),
          (l = e));
        break bb0;
      }
      c = a.formatDate(u, {
        year: `numeric`,
        month: `short`,
        day: `numeric`,
        hour: `numeric`,
        minute: `2-digit`,
        timeZoneName: `short`,
      });
    }
    ((t[0] = a), (t[1] = n), (t[2] = c), (t[3] = l), (t[4] = u));
  } else ((c = t[2]), (l = t[3]), (u = t[4]));
  if (l !== Symbol.for(`react.early_return_sentinel`)) return l;
  let d = c,
    p;
  t[6] === u
    ? (p = t[7])
    : ((p = (0, Z.jsx)(f, {
        value: u,
        year: `numeric`,
        month: `short`,
        day: `numeric`,
        hour: `numeric`,
        minute: `2-digit`,
        timeZoneName: `short`,
      })),
      (t[6] = u),
      (t[7] = p));
  let h = p;
  if (s) {
    let e;
    (t[8] !== n || t[9] !== i
      ? ((e = i ? (0, Z.jsx)(ie, { dateString: n }) : (0, Z.jsx)(U, { dateString: n, format: `relative` })),
        (t[8] = n),
        (t[9] = i),
        (t[10] = e))
      : (e = t[10]),
      (h = e));
  }
  let g;
  t[11] === u ? (g = t[12]) : ((g = new Date(u).toISOString()), (t[11] = u), (t[12] = g));
  let _;
  t[13] !== d || t[14] !== h || t[15] !== g
    ? ((_ = (0, Z.jsx)(`time`, { dateTime: g, "aria-label": d, children: h })),
      (t[13] = d),
      (t[14] = h),
      (t[15] = g),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  return (
    t[17] !== d || t[18] !== _
      ? ((v = (0, Z.jsx)(A, { tooltipContent: d, children: _ })), (t[17] = d), (t[18] = _), (t[19] = v))
      : (v = t[19]),
    v
  );
}
var Le, Z;
function Re() {
  return (Re = e(() => {
    ((Le = N()), w(), R(), se(), y(), O(), (Z = P()));
  }))();
}
function ze(e, t) {
  let n = new Date(t);
  (n.setDate(n.getDate() + 2), n.setHours(0, 0, 0, 0));
  let r = (e ?? [])
      .filter(
        ({ next_run_at: e, trigger: n }) =>
          n.trigger.type === `SCHEDULE` && n.trigger.enabled !== !1 && Date.parse(e) > t,
      )
      .toSorted((e, t) => Date.parse(e.next_run_at) - Date.parse(t.next_run_at)),
    i = r.filter(({ next_run_at: e }) => Date.parse(e) < n.getTime());
  return i.length > 0 ? i : r.slice(0, 1);
}
function Be(e) {
  let t = (0, We.c)(56),
    { agentId: r, version: i } = e,
    a = m(),
    s = h(re),
    c = h(H),
    [l, u] = (0, Ke.useState)(null),
    d = (0, Ke.useRef)(null),
    {
      data: f,
      dataUpdatedAt: p,
      error: g,
      fetchNextPage: v,
      hasNextPage: y,
      isFetchingNextPage: b,
      isFetchNextPageError: x,
      isPending: C,
      isFetching: w,
      refetch: T,
    } = te(be, r),
    E,
    D,
    O,
    k,
    A,
    j,
    M;
  if (
    t[0] !== f ||
    t[1] !== p ||
    t[2] !== g ||
    t[3] !== v ||
    t[4] !== y ||
    t[5] !== a ||
    t[6] !== x ||
    t[7] !== w ||
    t[8] !== b ||
    t[9] !== C ||
    t[10] !== T ||
    t[11] !== i
  ) {
    M = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = f == null ? void 0 : (0, Ge.default)(f.pages.flatMap(He), Ve),
        r = ze(f?.pages[0]?.scheduled, p),
        s = Ce(i);
      if (C) {
        let e;
        (t[19] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(me, {
              role: `status`,
              children: (0, Q.jsx)(o, {
                id: `workspaceAgents.detail.activity.loading`,
                defaultMessage: `Loading activity…`,
                description: `Status while the recent activity and upcoming runs of a published agent load`,
              }),
            })),
            (t[19] = e))
          : (e = t[19]),
          (M = e));
        break bb0;
      }
      if (g != null && (!x || (g instanceof S && [401, 403, 404].includes(g.status)))) {
        let e;
        t[20] === T ? (e = t[21]) : ((e = () => void T()), (t[20] = T), (t[21] = e));
        let n;
        (t[22] !== w || t[23] !== e
          ? ((n = (0, Q.jsx)(ve, { loading: w, onRetry: e })), (t[22] = w), (t[23] = e), (t[24] = n))
          : (n = t[24]),
          (M = n));
        break bb0;
      }
      if (((E = null), x)) {
        let e;
        t[25] === v ? (e = t[26]) : ((e = () => void v({ cancelRefetch: !1 })), (t[25] = v), (t[26] = e));
        let n;
        t[27] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, Q.jsx)(o, {
              id: `workspaceAgents.detail.activity.loadMoreError`,
              defaultMessage: `Unable to load more activity`,
              description: `Error shown when another page of Workspace Agent activity cannot be loaded`,
            })),
            (t[27] = n))
          : (n = t[27]);
        let r;
        (t[28] !== b || t[29] !== e
          ? ((r = (0, Q.jsx)(ve, { loading: b, onRetry: e, children: n })),
            (t[28] = b),
            (t[29] = e),
            (t[30] = r))
          : (r = t[30]),
          (E = r));
      } else if (y) {
        let e;
        t[31] === v ? (e = t[32]) : ((e = () => void v({ cancelRefetch: !1 })), (t[31] = v), (t[32] = e));
        let r;
        t[33] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((r = (0, Q.jsx)(o, {
              id: `workspaceAgents.detail.activity.loadMore`,
              defaultMessage: `Load more`,
              description: `Button that loads more Workspace Agent activity`,
            })),
            (t[33] = r))
          : (r = t[33]);
        let i;
        (t[34] !== b || t[35] !== e
          ? ((i = (0, Q.jsx)(n, { color: `secondary`, loading: b, disabled: b, onClick: e, children: r })),
            (t[34] = b),
            (t[35] = e),
            (t[36] = i))
          : (i = t[36]),
          (E = i));
      }
      D = `flex flex-col gap-2`;
      let c;
      t[37] === T ? (c = t[38]) : ((c = () => void T()), (t[37] = T), (t[38] = c));
      let l;
      (t[39] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((l = (0, Q.jsx)(o, {
            id: `workspaceAgents.detail.activity.refresh`,
            defaultMessage: `Refresh activity`,
            description: `Button that refreshes an agent's recent conversations and next scheduled runs`,
          })),
          (t[39] = l))
        : (l = t[39]),
        t[40] !== w || t[41] !== c
          ? ((O = (0, Q.jsx)(`div`, {
              className: `flex justify-end`,
              children: (0, Q.jsx)(n, {
                color: `ghostSecondary`,
                size: `toolbar`,
                loading: w,
                disabled: w,
                onClick: c,
                children: l,
              }),
            })),
            (t[40] = w),
            (t[41] = c),
            (t[42] = O))
          : (O = t[42]),
        (k =
          r.length === 0 && e?.length === 0
            ? (0, Q.jsx)(me, {
                children: (0, Q.jsx)(o, {
                  id: `workspaceAgents.detail.activity.empty`,
                  defaultMessage: `No activity yet. Conversations and automation runs will show up here.`,
                  description: `Message shown when a Workspace Agent has no activity`,
                }),
              })
            : null),
        (A = r.map((e) => {
          let { next_run_at: t, trigger: n, schedule_id: r } = e;
          if (n.trigger.type !== `SCHEDULE`) return null;
          let i = n.trigger.channel_binding,
            c = i?.type === `slack` ? (we(s, i)?.label ?? `#${i.channel_id}`) : null,
            l = n.trigger.instructions;
          return (0, Q.jsx)(
            B,
            {
              density: `compact`,
              titleWrap: !0,
              icon: (0, Q.jsx)(_, {}),
              isSelected: !1,
              ariaLabel: a.formatMessage(
                {
                  id: `workspaceAgents.detail.activity.openUpcoming`,
                  defaultMessage: `Open automation for {timestamp}`,
                  description: `Accessible action for an upcoming agent run. timestamp is the complete localized date and time.`,
                },
                {
                  timestamp: a.formatDate(t, {
                    month: `short`,
                    day: `numeric`,
                    hour: `numeric`,
                    minute: `2-digit`,
                    timeZoneName: `short`,
                  }),
                },
              ),
              title: (0, Q.jsx)(o, {
                id: `workspaceAgents.detail.activity.upcoming`,
                defaultMessage: `Upcoming run`,
                description: `Title of an upcoming scheduled Workspace Agent run in the activity timeline`,
              }),
              secondLine: (0, Q.jsxs)(`span`, {
                className: `block wrap-anywhere whitespace-normal`,
                children: [
                  c,
                  c && l ? (0, Q.jsx)(J, { className: `mx-1` }) : null,
                  (0, Q.jsx)(`span`, { children: l }),
                ],
              }),
              rightText: (0, Q.jsx)(Ie, { timestamp: t, upcoming: !0 }),
              onSelect: (e) => {
                ((d.current = e.currentTarget), u(n.id));
              },
            },
            r,
          );
        })),
        (j = e?.map((e) => (0, Q.jsx)(Ue, { agentName: i.name, conversation: e }, e.id))));
    }
    ((t[0] = f),
      (t[1] = p),
      (t[2] = g),
      (t[3] = v),
      (t[4] = y),
      (t[5] = a),
      (t[6] = x),
      (t[7] = w),
      (t[8] = b),
      (t[9] = C),
      (t[10] = T),
      (t[11] = i),
      (t[12] = E),
      (t[13] = D),
      (t[14] = O),
      (t[15] = k),
      (t[16] = A),
      (t[17] = j),
      (t[18] = M));
  } else ((E = t[12]), (D = t[13]), (O = t[14]), (k = t[15]), (A = t[16]), (j = t[17]), (M = t[18]));
  if (M !== Symbol.for(`react.early_return_sentinel`)) return M;
  let N;
  t[43] !== s || t[44] !== r || t[45] !== l || t[46] !== c
    ? ((N =
        s != null && c != null && l != null
          ? (0, Q.jsx)(
              qe,
              {
                accountId: s,
                agentId: r,
                initialSelectedScheduleId: l,
                onClose: () => u(null),
                onCloseAutoFocus: () => d.current?.focus(),
              },
              `${s}:${c}:${l}`,
            )
          : null),
      (t[43] = s),
      (t[44] = r),
      (t[45] = l),
      (t[46] = c),
      (t[47] = N))
    : (N = t[47]);
  let P;
  return (
    t[48] !== E || t[49] !== D || t[50] !== O || t[51] !== k || t[52] !== A || t[53] !== j || t[54] !== N
      ? ((P = (0, Q.jsxs)(`div`, { className: D, children: [O, k, A, j, E, N] })),
        (t[48] = E),
        (t[49] = D),
        (t[50] = O),
        (t[51] = k),
        (t[52] = A),
        (t[53] = j),
        (t[54] = N),
        (t[55] = P))
      : (P = t[55]),
    P
  );
}
function Ve(e) {
  return e.id;
}
function He(e) {
  return e.items;
}
function Ue(e) {
  let t = (0, We.c)(27),
    { agentName: n, conversation: r } = e,
    i = r.invocation,
    a = i.type !== `api` && i.is_scheduled,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = (0, Q.jsx)(x, {})), (t[0] = l)) : (l = t[0]);
  let u = l,
    d;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(o, {
        id: `workspaceAgents.detail.activity.chatgpt`,
        defaultMessage: `ChatGPT`,
        description: `Source of a direct conversation with a Workspace Agent`,
      })),
      (t[1] = d))
    : (d = t[1]);
  let f = d;
  if (a) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Q.jsx)(_, {})), (t[2] = e)) : (e = t[2]),
      (u = e));
  } else if (i.type === `slack`) {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(c, { asset: s, className: `shrink-0` })), (t[3] = e))
      : (e = t[3]),
      (u = e));
  } else if (i.type === `api`) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Q.jsx)(T, {})), (t[4] = e)) : (e = t[4]),
      (u = e));
  }
  if (i.type === `slack`) f = i.channel_name == null ? null : `#${i.channel_name}`;
  else if (i.type === `api`) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(o, {
          id: `workspaceAgents.detail.activity.api`,
          defaultMessage: `API`,
          description: `Source of a Workspace Agent conversation started through its API`,
        })),
        (t[5] = e))
      : (e = t[5]),
      (f = e));
  }
  let p = u,
    m;
  t[6] === r.id ? (m = t[7]) : ((m = ee(r.id)), (t[6] = r.id), (t[7] = m));
  let h;
  t[8] === r.title
    ? (h = t[9])
    : ((h =
        r.title?.trim() ||
        (0, Q.jsx)(o, {
          id: `workspaceAgents.detail.activity.newChat`,
          defaultMessage: `New chat`,
          description: `Fallback title for a Workspace Agent conversation`,
        })),
      (t[8] = r.title),
      (t[9] = h));
  let g;
  t[10] === f
    ? (g = t[11])
    : ((g = f == null ? null : (0, Q.jsx)(J, { className: `mx-1` })), (t[10] = f), (t[11] = g));
  let v;
  t[12] !== n || t[13] !== r
    ? ((v = (0, Q.jsx)(`span`, { children: (0, Q.jsx)(Fe, { agentName: n, conversation: r }) })),
      (t[12] = n),
      (t[13] = r),
      (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] !== f || t[16] !== g || t[17] !== v
    ? ((y = (0, Q.jsxs)(`span`, { className: `block wrap-anywhere whitespace-normal`, children: [f, g, v] })),
      (t[15] = f),
      (t[16] = g),
      (t[17] = v),
      (t[18] = y))
    : (y = t[18]);
  let b;
  t[19] === r.last_used_at
    ? (b = t[20])
    : ((b = (0, Q.jsx)(Ie, { timestamp: r.last_used_at })), (t[19] = r.last_used_at), (t[20] = b));
  let S;
  return (
    t[21] !== u || t[22] !== m || t[23] !== h || t[24] !== y || t[25] !== b
      ? ((S = (0, Q.jsx)(B, {
          density: `compact`,
          titleWrap: !0,
          isSelected: !1,
          icon: p,
          to: m,
          title: h,
          secondLine: y,
          rightText: b,
        })),
        (t[21] = u),
        (t[22] = m),
        (t[23] = h),
        (t[24] = y),
        (t[25] = b),
        (t[26] = S))
      : (S = t[26]),
    S
  );
}
var We, Ge, Ke, Q, qe;
function Je() {
  return (Je = e(() => {
    ((We = N()),
      D(),
      (Ge = t(k(), 1)),
      d(),
      (Ke = F()),
      w(),
      W(),
      i(),
      q(),
      j(),
      X(),
      u(),
      p(),
      I(),
      L(),
      M(),
      _e(),
      Se(),
      xe(),
      Re(),
      (Q = P()),
      E(),
      (qe = r(
        async () =>
          (
            await b(
              async () => {
                let { WorkspaceAgentSchedulesDialog: e } = await import(`./dialog-d5f4f7c0e2cc.js`);
                return { WorkspaceAgentSchedulesDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]),
              import.meta.url,
            )
          ).WorkspaceAgentSchedulesDialog,
      )));
  }))();
}
function Ye(e) {
  let t = (0, Ze.c)(89),
    { composer: r, agentId: i, onStarterPromptSelect: s } = e,
    u = m(),
    d = a(),
    { data: f } = te(ye, i),
    [p, h] = (0, Qe.useState)(!1),
    _ = f?.latest_published_version,
    v = f?.agent,
    y;
  t[0] === _?.config?.tools.connectors
    ? (y = t[1])
    : ((y = _?.config?.tools.connectors ?? []), (t[0] = _?.config?.tools.connectors), (t[1] = y));
  let b = y,
    x = _?.config?.persistent_folder === `per_user`,
    S;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = {
        id: `activity`,
        label: (0, $.jsx)(o, {
          id: `workspaceAgents.detail.tabs.activity`,
          defaultMessage: `Activity`,
          description: `Tab on a Workspace Agent page that lists its recent activity`,
        }),
      }),
      (t[2] = S))
    : (S = t[2]);
  let C;
  t[3] === b.length
    ? (C = t[4])
    : ((C =
        b.length === 0
          ? []
          : [
              {
                id: `apps`,
                label: (0, $.jsx)(o, {
                  id: `workspaceAgents.detail.tabs.apps`,
                  defaultMessage: `Apps`,
                  description: `Tab on a Workspace Agent page that lists its connected apps`,
                }),
              },
            ]),
      (t[3] = b.length),
      (t[4] = C));
  let w;
  t[5] === x
    ? (w = t[6])
    : ((w = x
        ? [
            {
              id: `memory`,
              label: (0, $.jsx)(o, {
                id: `workspaceAgents.detail.tabs.memory`,
                defaultMessage: `Memory`,
                description: `Tab on a Workspace Agent page that lists files saved in its memory`,
              }),
            },
          ]
        : []),
      (t[5] = x),
      (t[6] = w));
  let T;
  t[7] !== C || t[8] !== w ? ((T = [S, ...C, ...w]), (t[7] = C), (t[8] = w), (t[9] = T)) : (T = t[9]);
  let E = T,
    [D, O] = l(),
    k =
      E.find((e) => {
        let { id: t } = e;
        return t === D.get(`tab`);
      })?.id ?? `activity`,
    A = v?.viewer_capability,
    j = A === `hermes_write` || A === `hermes_admin`,
    M = A === `hermes_read_config`,
    N;
  t[10] !== i || t[11] !== _?.name
    ? ((N = _?.name.trim() || i), (t[10] = i), (t[11] = _?.name), (t[12] = N))
    : (N = t[12]);
  let P = N,
    ee;
  t[13] !== i || t[14] !== j || t[15] !== M || t[16] !== _
    ? ((ee =
        _ == null ? (0, $.jsx)(Xe, {}) : (0, $.jsx)($e, { agentId: i, canViewConfig: j || M, version: _ })),
      (t[13] = i),
      (t[14] = j),
      (t[15] = M),
      (t[16] = _),
      (t[17] = ee))
    : (ee = t[17]);
  let F = ee;
  if (k === `activity`) {
    let e;
    (t[18] !== i || t[19] !== _
      ? ((e = _ == null ? (0, $.jsx)(Xe, {}) : (0, $.jsx)(Be, { agentId: i, version: _ })),
        (t[18] = i),
        (t[19] = _),
        (t[20] = e))
      : (e = t[20]),
      (F = e));
  } else if (k === `apps`) {
    let e;
    (t[21] !== i || t[22] !== j || t[23] !== b
      ? ((e = (0, $.jsx)(et, { agentId: i, canEdit: j, connectors: b })),
        (t[21] = i),
        (t[22] = j),
        (t[23] = b),
        (t[24] = e))
      : (e = t[24]),
      (F = e));
  }
  let I;
  t[25] === i ? (I = t[26]) : ((I = (0, $.jsx)(De, { agentId: i }, i)), (t[25] = i), (t[26] = I));
  let L;
  t[27] !== i || t[28] !== j
    ? ((L = j
        ? (0, $.jsx)(Oe, { agentId: i, page: ge.CHATGPT_AGENT_BUILDER_PAGE_AGENT_DIRECTORY_DETAIL })
        : null),
      (t[27] = i),
      (t[28] = j),
      (t[29] = L))
    : (L = t[29]);
  let ne;
  t[30] !== i || t[31] !== j || t[32] !== M || t[33] !== d
    ? ((ne =
        j || M
          ? (0, $.jsx)(n, {
              color: `ghost`,
              size: `toolbar`,
              onClick: () => {
                d(oe(i));
              },
              children: j
                ? (0, $.jsx)(o, {
                    id: `workspaceAgents.detail.edit`,
                    defaultMessage: `Edit agent`,
                    description: `Button that opens a Workspace Agent in the native draft editor`,
                  })
                : (0, $.jsx)(o, {
                    id: `workspaceAgents.detail.view`,
                    defaultMessage: `View agent`,
                    description: `Button that opens an agent's configuration in the native read-only editor`,
                  }),
            })
          : null),
      (t[30] = i),
      (t[31] = j),
      (t[32] = M),
      (t[33] = d),
      (t[34] = ne))
    : (ne = t[34]);
  let re;
  t[35] !== i || t[36] !== P || t[37] !== d || t[38] !== _
    ? ((re =
        _ == null
          ? null
          : (0, $.jsx)(Pe, {
              agent: { id: i, name: P, icon: _.icon },
              isPublished: !0,
              onPinError: h,
              onDeleted: () => {
                d(ce, { replace: !0 });
              },
            })),
      (t[35] = i),
      (t[36] = P),
      (t[37] = d),
      (t[38] = _),
      (t[39] = re))
    : (re = t[39]);
  let ie;
  t[40] !== L || t[41] !== ne || t[42] !== re || t[43] !== I
    ? ((ie = (0, $.jsx)(le.HeaderAction, {
        actionId: `workspace-agent-actions`,
        align: `end`,
        order: 80,
        children: (0, $.jsxs)($.Fragment, { children: [I, L, ne, re] }),
      })),
      (t[40] = L),
      (t[41] = ne),
      (t[42] = re),
      (t[43] = I),
      (t[44] = ie))
    : (ie = t[44]);
  let se = _?.icon,
    R;
  t[45] === se ? (R = t[46]) : ((R = (0, $.jsx)(Ae, { icon: se, size: 48 })), (t[45] = se), (t[46] = R));
  let z;
  t[47] === v?.is_private_to_creator
    ? (z = t[48])
    : ((z =
        v?.is_private_to_creator === !0
          ? (0, $.jsx)(ae, {
              variant: `outline`,
              children: (0, $.jsx)(o, {
                id: `workspaceAgents.detail.private`,
                defaultMessage: `Private to you`,
                description: `Badge on a Workspace Agent page when only its creator can access it`,
              }),
            })
          : null),
      (t[47] = v?.is_private_to_creator),
      (t[48] = z));
  let B;
  t[49] !== P || t[50] !== z
    ? ((B = (0, $.jsxs)(`span`, { className: `flex min-w-0 items-center gap-2`, children: [P, z] })),
      (t[49] = P),
      (t[50] = z),
      (t[51] = B))
    : (B = t[51]);
  let V;
  t[52] === v
    ? (V = t[53])
    : ((V =
        v?.creator_name != null && !v.is_private_to_creator
          ? (0, $.jsx)(`p`, {
              children: (0, $.jsx)(o, {
                id: `workspaceAgents.detail.creator`,
                defaultMessage: `By {creatorName}`,
                description: `Creator attribution on a Workspace Agent page`,
                values: { creatorName: v.creator_name },
              }),
            })
          : null),
      (t[52] = v),
      (t[53] = V));
  let H;
  t[54] === _
    ? (H = t[55])
    : ((H = _?.tagline.trim() ? (0, $.jsx)(`p`, { children: _.tagline }) : null), (t[54] = _), (t[55] = H));
  let U;
  t[56] !== V || t[57] !== H
    ? ((U = (0, $.jsxs)($.Fragment, { children: [V, H] })), (t[56] = V), (t[57] = H), (t[58] = U))
    : (U = t[58]);
  let W;
  t[59] !== R || t[60] !== B || t[61] !== U
    ? ((W = (0, $.jsx)(de, { asset: R, title: B, subtitle: U })),
      (t[59] = R),
      (t[60] = B),
      (t[61] = U),
      (t[62] = W))
    : (W = t[62]);
  let G;
  t[63] === p
    ? (G = t[64])
    : ((G = p
        ? (0, $.jsx)(me, {
            role: `alert`,
            tone: `danger`,
            children: (0, $.jsx)(o, {
              id: `workspaceAgents.detail.pinError`,
              defaultMessage: `Couldn't update the sidebar`,
              description: `Error shown when pinning or unpinning a Workspace Agent fails`,
            }),
          })
        : null),
      (t[63] = p),
      (t[64] = G));
  let K;
  t[65] !== s || t[66] !== _
    ? ((K =
        _ == null || _.starter_prompts.length === 0
          ? null
          : (0, $.jsx)(fe, {
              composerMode: `chat`,
              disableWhileModelPickerOpen: !0,
              placement: `above-composer`,
              items: _.starter_prompts.slice(0, 4).map((e) => {
                let t = je.get(e.icon ?? `default`),
                  n = t?.icon,
                  r = (0, $.jsx)(g, {});
                return (
                  t?.asset == null
                    ? n != null && (r = (0, $.jsx)(n, { className: t?.color }))
                    : (r = (0, $.jsx)(c, { asset: t.asset, className: t.color })),
                  {
                    id: e.prompt,
                    label: e.title,
                    tooltipContent: e.short_description || e.prompt,
                    icon: r,
                    disabled: s == null,
                    onClick: () => s?.(e.prompt),
                  }
                );
              }),
            })),
      (t[65] = s),
      (t[66] = _),
      (t[67] = K))
    : (K = t[67]);
  let q;
  t[68] === u
    ? (q = t[69])
    : ((q = u.formatMessage({
        id: `workspaceAgents.detail.tabs.label`,
        defaultMessage: `Agent details tabs`,
        description: `Accessible label for tabs on a Workspace Agent page`,
      })),
      (t[68] = u),
      (t[69] = q));
  let J;
  t[70] === O
    ? (J = t[71])
    : ((J = (e) =>
        O(
          (t) => {
            let n = new URLSearchParams(t);
            return (n.set(`tab`, e), n);
          },
          { preventScrollReset: !0 },
        )),
      (t[70] = O),
      (t[71] = J));
  let Y;
  t[72] !== k || t[73] !== q || t[74] !== J || t[75] !== E
    ? ((Y = (0, $.jsx)(ue, { ariaLabel: q, selectedId: k, options: E, onSelect: J })),
      (t[72] = k),
      (t[73] = q),
      (t[74] = J),
      (t[75] = E),
      (t[76] = Y))
    : (Y = t[76]);
  let X;
  t[77] !== F || t[78] !== Y
    ? ((X = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-4`, children: [Y, F] })),
      (t[77] = F),
      (t[78] = Y),
      (t[79] = X))
    : (X = t[79]);
  let he;
  t[80] !== r || t[81] !== W || t[82] !== G || t[83] !== K || t[84] !== X
    ? ((he = (0, $.jsx)(`div`, {
        className: `mx-auto flex w-full max-w-[var(--thread-content-max-width)] flex-col gap-6 px-panel py-panel`,
        children: (0, $.jsxs)(pe, { children: [W, G, K, r, X] }),
      })),
      (t[80] = r),
      (t[81] = W),
      (t[82] = G),
      (t[83] = K),
      (t[84] = X),
      (t[85] = he))
    : (he = t[85]);
  let _e;
  return (
    t[86] !== ie || t[87] !== he
      ? ((_e = (0, $.jsxs)(`div`, {
          className: `relative h-full min-h-0 flex-1 [scrollbar-gutter:stable] overflow-x-hidden overflow-y-auto`,
          children: [ie, he],
        })),
        (t[86] = ie),
        (t[87] = he),
        (t[88] = _e))
      : (_e = t[88]),
    _e
  );
}
function Xe() {
  let e = (0, Ze.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(me, {
          children: (0, $.jsx)(o, {
            id: `workspaceAgents.detail.loading`,
            defaultMessage: `Loading…`,
            description: `Loading state for Workspace Agent detail tabs`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Ze, Qe, $, $e, et;
function tt() {
  return (tt = e(() => {
    ((Ze = N()),
      he(),
      d(),
      (Qe = F()),
      w(),
      v(),
      K(),
      z(),
      R(),
      j(),
      Y(),
      X(),
      u(),
      p(),
      I(),
      G(),
      V(),
      Je(),
      Ne(),
      ne(),
      Te(),
      Ee(),
      xe(),
      ke(),
      Me(),
      ($ = P()),
      E(),
      ($e = r(
        async () =>
          (
            await b(
              async () => {
                let { WorkspaceAgentMemory: e } = await import(`./memory-750b1870574a.js`);
                return { WorkspaceAgentMemory: e };
              },
              __vite__mapDeps([22, 2, 1, 3, 23, 4, 5, 24, 25, 15, 13]),
              import.meta.url,
            )
          ).WorkspaceAgentMemory,
        { fallback: (0, $.jsx)(Xe, {}) },
      )),
      (et = r(
        async () =>
          (
            await b(
              async () => {
                let { WorkspaceAgentApps: e } = await import(`./apps-263d5791a9a3.js`);
                return { WorkspaceAgentApps: e };
              },
              __vite__mapDeps([26, 1, 2, 3, 4, 5, 27, 13, 15, 19, 16, 18, 28, 29, 30, 31, 32]),
              import.meta.url,
            )
          ).WorkspaceAgentApps,
        { fallback: (0, $.jsx)(Xe, {}) },
      )));
  }))();
}
tt();
export { Ye as WorkspaceAgentLanding };
//# sourceMappingURL=workspace-agent-landing-83af3497cf6b.js.map
