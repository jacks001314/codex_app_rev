const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-c260d61c70d3.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./automation-delete-confirmation-dialog-7c5af9220f0a.js",
      "./automation-frequency-section-caeb4180ce42.js",
      "./DatePicker-aa68df19788f.js",
      "./helpers-97e80d920c48.js",
      "./PlatformUIKitContext-db1b777cfbe7.js",
      "./DatePicker-f2d11cc034ea.css",
      "./detail-section-state-45be9ee036ee.js",
      "./builder-analytics-f4d73421cfb8.js",
      "./read-error-b0681ff43794.js",
      "./apps-query-4cb3d9532588.js",
      "./query-28e51b942d45.js",
      "./workspace-agent-detail-query-e90126e3ca29.js",
      "./workspace-agent-apps-b1c524ac4449.js",
      "./query-4ad900313a0a.js",
      "./model-321ee010a278.js",
      "./memory-36ca2c71f24c.js",
      "./memory-a4a0492d023b.js",
      "./surface-c9a729ca89b3.js",
      "./toolbar-breadcrumb-d8f79235f5b5.js",
      "./apps-2e2d102c8399.js",
      "./card-tile-50cbf58d3a76.js",
      "./personal-apps-2ee58ab9049d.js",
      "./app-connect-modal-by-id-ee9e7bc8d7c4.js",
      "./app-connect-modal-763ad0733e86.js",
      "./app-connect-skeleton-990edda9425c.js",
      "./app-connect-load-state-80040a1f57f3.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $z as n,
  Af as r,
  CNt as i,
  DB as a,
  F3 as o,
  FBt as s,
  I3 as c,
  LNt as l,
  NSt as u,
  OB as d,
  OFt as f,
  PBt as p,
  Pit as m,
  QH as h,
  Qz as g,
  TY as _,
  USt as v,
  Uot as y,
  Vot as b,
  WOt as x,
  XOt as S,
  XSt as C,
  Y3 as ee,
  Yq as w,
  Z3 as T,
  ZSt as E,
  dH as D,
  iCt as O,
  jit as te,
  kFt as k,
  kf as A,
  nB as ne,
  nCt as re,
  okt as ie,
  qH as j,
  rB as M,
  tkt as N,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BFt as P,
  JOr as ae,
  JRt as oe,
  Qd as se,
  VOr as ce,
  YRt as F,
  ZOr as I,
  Zd as le,
  b0 as ue,
  bLr as L,
  iI as R,
  iut as z,
  rI as de,
  tut as B,
  wLr as V,
  x0 as H,
  y0 as U,
  zFt as fe,
  zRr as W,
} from "./app-initial-ad16eaadf81f.js";
import { n as G, t as pe } from "./home-suggestion-list-9dcf9383e42f.js";
import { n as K, t as q } from "./bullet-separator-fdae8fc4d5e0.js";
import { n as me, r as J } from "./detail-page-a44b593da037.js";
import { n as Y, t as he } from "./detail-section-state-45be9ee036ee.js";
import { b as X, l as ge } from "./builder-analytics-f4d73421cfb8.js";
import { n as _e, t as ve } from "./read-error-b0681ff43794.js";
import { i as ye, n as be, t as xe } from "./workspace-agent-detail-query-e90126e3ca29.js";
import { a as Se, i as Ce, t as we } from "./model-321ee010a278.js";
import { a as Te, i as Ee, r as De, t as Oe } from "./button-7fc71ca5d01f.js";
import { n as ke, t as Ae } from "./workspace-agent-icon-cf51c4c0930d.js";
import { n as je, t as Me } from "./workspace-agent-skill-icons-c17c64d82271.js";
import { n as Ne, t as Pe } from "./agent-menu-6ade040b4377.js";
function Fe(e) {
  let t = (0, Le.c)(10),
    { agentName: n, conversation: r } = e;
  switch (r.fiber_status) {
    case `pending`: {
      let e;
      return (
        t[0] === n
          ? (e = t[1])
          : ((e = (0, Z.jsx)(N, {
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
              ? (0, Z.jsx)(N, {
                  id: `workspaceAgents.detail.activity.responding`,
                  defaultMessage: `{agentName} is responding`,
                  description: `Status when a Workspace Agent is actively producing a response; agentName is the agent's display name`,
                  values: { agentName: n },
                })
              : (0, Z.jsx)(N, {
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
          ? ((e = (0, Z.jsx)(N, {
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
          ? ((e = (0, Z.jsx)(fe, {
              variant: `warning`,
              children: (0, Z.jsx)(N, {
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
          ? ((e = (0, Z.jsx)(fe, {
              variant: `danger`,
              children: (0, Z.jsx)(N, {
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
          ? ((e = (0, Z.jsx)(N, {
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
          ? ((e = (0, Z.jsx)(N, {
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
    { timestamp: r, upcoming: i } = e,
    a = i !== void 0 && i,
    o = ie(),
    s = n(),
    c,
    l,
    u;
  if (t[0] !== o || t[1] !== r) {
    l = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (((u = Date.parse(r)), !Number.isFinite(u))) {
        let e;
        (t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(N, {
              id: `workspaceAgents.detail.activity.unknownTime`,
              defaultMessage: `Time unavailable`,
              description: `Fallback when an agent activity timestamp cannot be read`,
            })),
            (t[5] = e))
          : (e = t[5]),
          (l = e));
        break bb0;
      }
      c = o.formatDate(u, {
        year: `numeric`,
        month: `short`,
        day: `numeric`,
        hour: `numeric`,
        minute: `2-digit`,
        timeZoneName: `short`,
      });
    }
    ((t[0] = o), (t[1] = r), (t[2] = c), (t[3] = l), (t[4] = u));
  } else ((c = t[2]), (l = t[3]), (u = t[4]));
  if (l !== Symbol.for(`react.early_return_sentinel`)) return l;
  let d = c,
    f;
  t[6] === u
    ? (f = t[7])
    : ((f = (0, Z.jsx)(x, {
        value: u,
        year: `numeric`,
        month: `short`,
        day: `numeric`,
        hour: `numeric`,
        minute: `2-digit`,
        timeZoneName: `short`,
      })),
      (t[6] = u),
      (t[7] = f));
  let p = f;
  if (s) {
    let e;
    (t[8] !== r || t[9] !== a
      ? ((e = a ? (0, Z.jsx)(ue, { dateString: r }) : (0, Z.jsx)(U, { dateString: r, format: `relative` })),
        (t[8] = r),
        (t[9] = a),
        (t[10] = e))
      : (e = t[10]),
      (p = e));
  }
  let m;
  t[11] === u ? (m = t[12]) : ((m = new Date(u).toISOString()), (t[11] = u), (t[12] = m));
  let h;
  t[13] !== d || t[14] !== p || t[15] !== m
    ? ((h = (0, Z.jsx)(`time`, { dateTime: m, "aria-label": d, children: p })),
      (t[13] = d),
      (t[14] = p),
      (t[15] = m),
      (t[16] = h))
    : (h = t[16]);
  let g;
  return (
    t[17] !== d || t[18] !== h
      ? ((g = (0, Z.jsx)(ne, { tooltipContent: d, children: h })), (t[17] = d), (t[18] = h), (t[19] = g))
      : (g = t[19]),
    g
  );
}
var Le, Z;
function Re() {
  return (Re = e(() => {
    ((Le = p()), S(), P(), H(), M(), g(), (Z = l()));
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
    { agentId: n, version: r } = e,
    i = ie(),
    a = O(W),
    o = O(L),
    [s, c] = (0, Ke.useState)(null),
    l = (0, Ke.useRef)(null),
    {
      data: u,
      dataUpdatedAt: d,
      error: f,
      fetchNextPage: p,
      hasNextPage: m,
      isFetchingNextPage: h,
      isFetchNextPageError: g,
      isPending: _,
      isFetching: v,
      refetch: y,
    } = re(be, n),
    b,
    x,
    S,
    C,
    w,
    T,
    E;
  if (
    t[0] !== u ||
    t[1] !== d ||
    t[2] !== f ||
    t[3] !== p ||
    t[4] !== m ||
    t[5] !== i ||
    t[6] !== g ||
    t[7] !== v ||
    t[8] !== h ||
    t[9] !== _ ||
    t[10] !== y ||
    t[11] !== r
  ) {
    E = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = u == null ? void 0 : (0, Ge.default)(u.pages.flatMap(He), Ve),
        n = ze(u?.pages[0]?.scheduled, d),
        a = Ce(r);
      if (_) {
        let e;
        (t[19] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(he, {
              role: `status`,
              children: (0, Q.jsx)(N, {
                id: `workspaceAgents.detail.activity.loading`,
                defaultMessage: `Loading activity…`,
                description: `Status while the recent activity and upcoming runs of a published agent load`,
              }),
            })),
            (t[19] = e))
          : (e = t[19]),
          (E = e));
        break bb0;
      }
      if (f != null && (!g || (f instanceof te && [401, 403, 404].includes(f.status)))) {
        let e;
        t[20] === y ? (e = t[21]) : ((e = () => void y()), (t[20] = y), (t[21] = e));
        let n;
        (t[22] !== v || t[23] !== e
          ? ((n = (0, Q.jsx)(ve, { loading: v, onRetry: e })), (t[22] = v), (t[23] = e), (t[24] = n))
          : (n = t[24]),
          (E = n));
        break bb0;
      }
      if (((b = null), g)) {
        let e;
        t[25] === p ? (e = t[26]) : ((e = () => void p({ cancelRefetch: !1 })), (t[25] = p), (t[26] = e));
        let n;
        t[27] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, Q.jsx)(N, {
              id: `workspaceAgents.detail.activity.loadMoreError`,
              defaultMessage: `Unable to load more activity`,
              description: `Error shown when another page of Workspace Agent activity cannot be loaded`,
            })),
            (t[27] = n))
          : (n = t[27]);
        let r;
        (t[28] !== h || t[29] !== e
          ? ((r = (0, Q.jsx)(ve, { loading: h, onRetry: e, children: n })),
            (t[28] = h),
            (t[29] = e),
            (t[30] = r))
          : (r = t[30]),
          (b = r));
      } else if (m) {
        let e;
        t[31] === p ? (e = t[32]) : ((e = () => void p({ cancelRefetch: !1 })), (t[31] = p), (t[32] = e));
        let n;
        t[33] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, Q.jsx)(N, {
              id: `workspaceAgents.detail.activity.loadMore`,
              defaultMessage: `Load more`,
              description: `Button that loads more Workspace Agent activity`,
            })),
            (t[33] = n))
          : (n = t[33]);
        let r;
        (t[34] !== h || t[35] !== e
          ? ((r = (0, Q.jsx)(ee, { color: `secondary`, loading: h, disabled: h, onClick: e, children: n })),
            (t[34] = h),
            (t[35] = e),
            (t[36] = r))
          : (r = t[36]),
          (b = r));
      }
      x = `flex flex-col gap-2`;
      let o;
      t[37] === y ? (o = t[38]) : ((o = () => void y()), (t[37] = y), (t[38] = o));
      let s;
      (t[39] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((s = (0, Q.jsx)(N, {
            id: `workspaceAgents.detail.activity.refresh`,
            defaultMessage: `Refresh activity`,
            description: `Button that refreshes an agent's recent conversations and next scheduled runs`,
          })),
          (t[39] = s))
        : (s = t[39]),
        t[40] !== v || t[41] !== o
          ? ((S = (0, Q.jsx)(`div`, {
              className: `flex justify-end`,
              children: (0, Q.jsx)(ee, {
                color: `ghostSecondary`,
                size: `toolbar`,
                loading: v,
                disabled: v,
                onClick: o,
                children: s,
              }),
            })),
            (t[40] = v),
            (t[41] = o),
            (t[42] = S))
          : (S = t[42]),
        (C =
          n.length === 0 && e?.length === 0
            ? (0, Q.jsx)(he, {
                children: (0, Q.jsx)(N, {
                  id: `workspaceAgents.detail.activity.empty`,
                  defaultMessage: `No activity yet. Conversations and automation runs will show up here.`,
                  description: `Message shown when a Workspace Agent has no activity`,
                }),
              })
            : null),
        (w = n.map((e) => {
          let { next_run_at: t, trigger: n, schedule_id: r } = e;
          if (n.trigger.type !== `SCHEDULE`) return null;
          let o = n.trigger.channel_binding,
            s = o?.type === `slack` ? (we(a, o)?.label ?? `#${o.channel_id}`) : null,
            u = n.trigger.instructions;
          return (0, Q.jsx)(
            B,
            {
              density: `compact`,
              titleWrap: !0,
              icon: (0, Q.jsx)(j, {}),
              isSelected: !1,
              ariaLabel: i.formatMessage(
                {
                  id: `workspaceAgents.detail.activity.openUpcoming`,
                  defaultMessage: `Open automation for {timestamp}`,
                  description: `Accessible action for an upcoming agent run. timestamp is the complete localized date and time.`,
                },
                {
                  timestamp: i.formatDate(t, {
                    month: `short`,
                    day: `numeric`,
                    hour: `numeric`,
                    minute: `2-digit`,
                    timeZoneName: `short`,
                  }),
                },
              ),
              title: (0, Q.jsx)(N, {
                id: `workspaceAgents.detail.activity.upcoming`,
                defaultMessage: `Upcoming run`,
                description: `Title of an upcoming scheduled Workspace Agent run in the activity timeline`,
              }),
              secondLine: (0, Q.jsxs)(`span`, {
                className: `line-clamp-2 wrap-anywhere whitespace-normal`,
                children: [
                  s,
                  s && u ? (0, Q.jsx)(q, { className: `mx-1` }) : null,
                  (0, Q.jsx)(`span`, { children: u }),
                ],
              }),
              rightText: (0, Q.jsx)(Ie, { timestamp: t, upcoming: !0 }),
              onSelect: (e) => {
                ((l.current = e.currentTarget), c(n.id));
              },
            },
            r,
          );
        })),
        (T = e?.map((e) => (0, Q.jsx)(Ue, { agentName: r.name, conversation: e }, e.id))));
    }
    ((t[0] = u),
      (t[1] = d),
      (t[2] = f),
      (t[3] = p),
      (t[4] = m),
      (t[5] = i),
      (t[6] = g),
      (t[7] = v),
      (t[8] = h),
      (t[9] = _),
      (t[10] = y),
      (t[11] = r),
      (t[12] = b),
      (t[13] = x),
      (t[14] = S),
      (t[15] = C),
      (t[16] = w),
      (t[17] = T),
      (t[18] = E));
  } else ((b = t[12]), (x = t[13]), (S = t[14]), (C = t[15]), (w = t[16]), (T = t[17]), (E = t[18]));
  if (E !== Symbol.for(`react.early_return_sentinel`)) return E;
  let D;
  t[43] !== a || t[44] !== n || t[45] !== s || t[46] !== o
    ? ((D =
        a != null && o != null && s != null
          ? (0, Q.jsx)(
              qe,
              {
                accountId: a,
                agentId: n,
                initialSelectedScheduleId: s,
                onClose: () => c(null),
                onCloseAutoFocus: () => l.current?.focus(),
              },
              `${a}:${o}:${s}`,
            )
          : null),
      (t[43] = a),
      (t[44] = n),
      (t[45] = s),
      (t[46] = o),
      (t[47] = D))
    : (D = t[47]);
  let k;
  return (
    t[48] !== b || t[49] !== x || t[50] !== S || t[51] !== C || t[52] !== w || t[53] !== T || t[54] !== D
      ? ((k = (0, Q.jsxs)(`div`, { className: x, children: [S, C, w, T, b, D] })),
        (t[48] = b),
        (t[49] = x),
        (t[50] = S),
        (t[51] = C),
        (t[52] = w),
        (t[53] = T),
        (t[54] = D),
        (t[55] = k))
      : (k = t[55]),
    k
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
    { agentName: n, conversation: i } = e,
    o = i.invocation,
    s = o.type !== `api` && o.is_scheduled,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = (0, Q.jsx)(D, {})), (t[0] = c)) : (c = t[0]);
  let l = c,
    u;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(N, {
        id: `workspaceAgents.detail.activity.chatgpt`,
        defaultMessage: `ChatGPT`,
        description: `Source of a direct conversation with a Workspace Agent`,
      })),
      (t[1] = u))
    : (u = t[1]);
  let d = u;
  if (s) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Q.jsx)(j, {})), (t[2] = e)) : (e = t[2]),
      (l = e));
  } else if (o.type === `slack`) {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(a, { asset: r, className: `shrink-0` })), (t[3] = e))
      : (e = t[3]),
      (l = e));
  } else if (o.type === `api`) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Q.jsx)(h, {})), (t[4] = e)) : (e = t[4]),
      (l = e));
  }
  if (o.type === `slack`) d = o.channel_name == null ? null : `#${o.channel_name}`;
  else if (o.type === `api`) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(N, {
          id: `workspaceAgents.detail.activity.api`,
          defaultMessage: `API`,
          description: `Source of a Workspace Agent conversation started through its API`,
        })),
        (t[5] = e))
      : (e = t[5]),
      (d = e));
  }
  let f = l,
    p;
  t[6] === i.id ? (p = t[7]) : ((p = b(i.id)), (t[6] = i.id), (t[7] = p));
  let m;
  t[8] === i.title
    ? (m = t[9])
    : ((m =
        i.title?.trim() ||
        (0, Q.jsx)(N, {
          id: `workspaceAgents.detail.activity.newChat`,
          defaultMessage: `New chat`,
          description: `Fallback title for a Workspace Agent conversation`,
        })),
      (t[8] = i.title),
      (t[9] = m));
  let g;
  t[10] === d
    ? (g = t[11])
    : ((g = d == null ? null : (0, Q.jsx)(q, { className: `mx-1` })), (t[10] = d), (t[11] = g));
  let _;
  t[12] !== n || t[13] !== i
    ? ((_ = (0, Q.jsx)(`span`, { children: (0, Q.jsx)(Fe, { agentName: n, conversation: i }) })),
      (t[12] = n),
      (t[13] = i),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  t[15] !== d || t[16] !== g || t[17] !== _
    ? ((v = (0, Q.jsxs)(`span`, { className: `block wrap-anywhere whitespace-normal`, children: [d, g, _] })),
      (t[15] = d),
      (t[16] = g),
      (t[17] = _),
      (t[18] = v))
    : (v = t[18]);
  let y;
  t[19] === i.last_used_at
    ? (y = t[20])
    : ((y = (0, Q.jsx)(Ie, { timestamp: i.last_used_at })), (t[19] = i.last_used_at), (t[20] = y));
  let x;
  return (
    t[21] !== l || t[22] !== p || t[23] !== m || t[24] !== v || t[25] !== y
      ? ((x = (0, Q.jsx)(B, {
          density: `compact`,
          titleWrap: !0,
          isSelected: !1,
          icon: f,
          to: p,
          title: m,
          secondLine: v,
          rightText: y,
        })),
        (t[21] = l),
        (t[22] = p),
        (t[23] = m),
        (t[24] = v),
        (t[25] = y),
        (t[26] = x))
      : (x = t[26]),
    x
  );
}
var We, Ge, Ke, Q, qe;
function Je() {
  return (Je = e(() => {
    ((We = p()),
      A(),
      (Ge = t(i(), 1)),
      E(),
      (Ke = s()),
      S(),
      V(),
      y(),
      K(),
      T(),
      Y(),
      d(),
      _(),
      o(),
      z(),
      m(),
      _e(),
      Se(),
      xe(),
      Re(),
      (Q = l()),
      k(),
      (qe = c(
        async () =>
          (
            await f(
              async () => {
                let { WorkspaceAgentSchedulesDialog: e } = await import(`./dialog-c260d61c70d3.js`);
                return { WorkspaceAgentSchedulesDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
              import.meta.url,
            )
          ).WorkspaceAgentSchedulesDialog,
      )));
  }))();
}
function Ye(e) {
  let t = (0, Ze.c)(89),
    { composer: n, agentId: r, onStarterPromptSelect: i } = e,
    o = ie(),
    s = v(),
    { data: c } = re(ye, r),
    [l, u] = (0, Qe.useState)(!1),
    d = c?.latest_published_version,
    f = c?.agent,
    p;
  t[0] === d?.config?.tools.connectors
    ? (p = t[1])
    : ((p = d?.config?.tools.connectors ?? []), (t[0] = d?.config?.tools.connectors), (t[1] = p));
  let m = p,
    h = d?.config?.persistent_folder === `per_user`,
    g;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = {
        id: `activity`,
        label: (0, $.jsx)(N, {
          id: `workspaceAgents.detail.tabs.activity`,
          defaultMessage: `Activity`,
          description: `Tab on a Workspace Agent page that lists its recent activity`,
        }),
      }),
      (t[2] = g))
    : (g = t[2]);
  let _;
  t[3] === m.length
    ? (_ = t[4])
    : ((_ =
        m.length === 0
          ? []
          : [
              {
                id: `apps`,
                label: (0, $.jsx)(N, {
                  id: `workspaceAgents.detail.tabs.apps`,
                  defaultMessage: `Apps`,
                  description: `Tab on a Workspace Agent page that lists its connected apps`,
                }),
              },
            ]),
      (t[3] = m.length),
      (t[4] = _));
  let y;
  t[5] === h
    ? (y = t[6])
    : ((y = h
        ? [
            {
              id: `memory`,
              label: (0, $.jsx)(N, {
                id: `workspaceAgents.detail.tabs.memory`,
                defaultMessage: `Memory`,
                description: `Tab on a Workspace Agent page that lists files saved in its memory`,
              }),
            },
          ]
        : []),
      (t[5] = h),
      (t[6] = y));
  let b;
  t[7] !== _ || t[8] !== y ? ((b = [g, ..._, ...y]), (t[7] = _), (t[8] = y), (t[9] = b)) : (b = t[9]);
  let x = b,
    [S, T] = C(),
    E =
      x.find((e) => {
        let { id: t } = e;
        return t === S.get(`tab`);
      })?.id ?? `activity`,
    D = f?.viewer_capability,
    O = D === `hermes_write` || D === `hermes_admin`,
    te = D === `hermes_read_config`,
    k;
  t[10] !== r || t[11] !== d?.name
    ? ((k = d?.name.trim() || r), (t[10] = r), (t[11] = d?.name), (t[12] = k))
    : (k = t[12]);
  let A = k,
    ne;
  t[13] !== r || t[14] !== O || t[15] !== te || t[16] !== d
    ? ((ne =
        d == null ? (0, $.jsx)(Xe, {}) : (0, $.jsx)($e, { agentId: r, canViewConfig: O || te, version: d })),
      (t[13] = r),
      (t[14] = O),
      (t[15] = te),
      (t[16] = d),
      (t[17] = ne))
    : (ne = t[17]);
  let j = ne;
  if (E === `activity`) {
    let e;
    (t[18] !== r || t[19] !== d
      ? ((e = d == null ? (0, $.jsx)(Xe, {}) : (0, $.jsx)(Be, { agentId: r, version: d })),
        (t[18] = r),
        (t[19] = d),
        (t[20] = e))
      : (e = t[20]),
      (j = e));
  } else if (E === `apps`) {
    let e;
    (t[21] !== r || t[22] !== O || t[23] !== m
      ? ((e = (0, $.jsx)(et, { agentId: r, canEdit: O, connectors: m })),
        (t[21] = r),
        (t[22] = O),
        (t[23] = m),
        (t[24] = e))
      : (e = t[24]),
      (j = e));
  }
  let M;
  t[25] === r ? (M = t[26]) : ((M = (0, $.jsx)(Ee, { agentId: r }, r)), (t[25] = r), (t[26] = M));
  let P;
  t[27] !== r || t[28] !== O
    ? ((P = O
        ? (0, $.jsx)(Oe, { agentId: r, page: ge.CHATGPT_AGENT_BUILDER_PAGE_AGENT_DIRECTORY_DETAIL })
        : null),
      (t[27] = r),
      (t[28] = O),
      (t[29] = P))
    : (P = t[29]);
  let se;
  t[30] !== r || t[31] !== O || t[32] !== te || t[33] !== s
    ? ((se =
        O || te
          ? (0, $.jsx)(ee, {
              color: `ghost`,
              size: `toolbar`,
              onClick: () => {
                s(ae(r));
              },
              children: O
                ? (0, $.jsx)(N, {
                    id: `workspaceAgents.detail.edit`,
                    defaultMessage: `Edit agent`,
                    description: `Button that opens a Workspace Agent in the native draft editor`,
                  })
                : (0, $.jsx)(N, {
                    id: `workspaceAgents.detail.view`,
                    defaultMessage: `View agent`,
                    description: `Button that opens an agent's configuration in the native read-only editor`,
                  }),
            })
          : null),
      (t[30] = r),
      (t[31] = O),
      (t[32] = te),
      (t[33] = s),
      (t[34] = se))
    : (se = t[34]);
  let F;
  t[35] !== r || t[36] !== A || t[37] !== s || t[38] !== d
    ? ((F =
        d == null
          ? null
          : (0, $.jsx)(Pe, {
              agent: { id: r, name: A, icon: d.icon },
              isPublished: !0,
              onPinError: u,
              onDeleted: () => {
                s(ce, { replace: !0 });
              },
            })),
      (t[35] = r),
      (t[36] = A),
      (t[37] = s),
      (t[38] = d),
      (t[39] = F))
    : (F = t[39]);
  let I;
  t[40] !== P || t[41] !== se || t[42] !== F || t[43] !== M
    ? ((I = (0, $.jsx)(oe.HeaderAction, {
        actionId: `workspace-agent-actions`,
        align: `end`,
        order: 80,
        children: (0, $.jsxs)($.Fragment, { children: [M, P, se, F] }),
      })),
      (t[40] = P),
      (t[41] = se),
      (t[42] = F),
      (t[43] = M),
      (t[44] = I))
    : (I = t[44]);
  let ue = d?.icon,
    L;
  t[45] === ue ? (L = t[46]) : ((L = (0, $.jsx)(Ae, { icon: ue, size: 48 })), (t[45] = ue), (t[46] = L));
  let R;
  t[47] === f?.is_private_to_creator
    ? (R = t[48])
    : ((R =
        f?.is_private_to_creator === !0
          ? (0, $.jsx)(fe, {
              variant: `outline`,
              children: (0, $.jsx)(N, {
                id: `workspaceAgents.detail.private`,
                defaultMessage: `Private to you`,
                description: `Badge on a Workspace Agent page when only its creator can access it`,
              }),
            })
          : null),
      (t[47] = f?.is_private_to_creator),
      (t[48] = R));
  let z;
  t[49] !== A || t[50] !== R
    ? ((z = (0, $.jsxs)(`span`, { className: `flex min-w-0 items-center gap-2`, children: [A, R] })),
      (t[49] = A),
      (t[50] = R),
      (t[51] = z))
    : (z = t[51]);
  let B;
  t[52] === f
    ? (B = t[53])
    : ((B =
        f?.creator_name != null && !f.is_private_to_creator
          ? (0, $.jsx)(`p`, {
              children: (0, $.jsx)(N, {
                id: `workspaceAgents.detail.creator`,
                defaultMessage: `By {creatorName}`,
                description: `Creator attribution on a Workspace Agent page`,
                values: { creatorName: f.creator_name },
              }),
            })
          : null),
      (t[52] = f),
      (t[53] = B));
  let V;
  t[54] === d
    ? (V = t[55])
    : ((V = d?.tagline.trim() ? (0, $.jsx)(`p`, { children: d.tagline }) : null), (t[54] = d), (t[55] = V));
  let H;
  t[56] !== B || t[57] !== V
    ? ((H = (0, $.jsxs)($.Fragment, { children: [B, V] })), (t[56] = B), (t[57] = V), (t[58] = H))
    : (H = t[58]);
  let U;
  t[59] !== L || t[60] !== z || t[61] !== H
    ? ((U = (0, $.jsx)(de, { asset: L, title: z, subtitle: H })),
      (t[59] = L),
      (t[60] = z),
      (t[61] = H),
      (t[62] = U))
    : (U = t[62]);
  let W;
  t[63] === l
    ? (W = t[64])
    : ((W = l
        ? (0, $.jsx)(he, {
            role: `alert`,
            tone: `danger`,
            children: (0, $.jsx)(N, {
              id: `workspaceAgents.detail.pinError`,
              defaultMessage: `Couldn't update the sidebar`,
              description: `Error shown when pinning or unpinning a Workspace Agent fails`,
            }),
          })
        : null),
      (t[63] = l),
      (t[64] = W));
  let G;
  t[65] !== i || t[66] !== d
    ? ((G =
        d == null || d.starter_prompts.length === 0
          ? null
          : (0, $.jsx)(pe, {
              composerMode: `chat`,
              disableWhileModelPickerOpen: !0,
              placement: `above-composer`,
              items: d.starter_prompts.slice(0, 4).map((e) => {
                let t = je.get(e.icon ?? `default`),
                  n = t?.icon,
                  r = (0, $.jsx)(w, {});
                return (
                  t?.asset == null
                    ? n != null && (r = (0, $.jsx)(n, { className: t?.color }))
                    : (r = (0, $.jsx)(a, { asset: t.asset, className: t.color })),
                  {
                    id: e.prompt,
                    label: e.title,
                    tooltipContent: e.short_description || e.prompt,
                    icon: r,
                    disabled: i == null,
                    onClick: () => i?.(e.prompt),
                  }
                );
              }),
            })),
      (t[65] = i),
      (t[66] = d),
      (t[67] = G))
    : (G = t[67]);
  let K;
  t[68] === o
    ? (K = t[69])
    : ((K = o.formatMessage({
        id: `workspaceAgents.detail.tabs.label`,
        defaultMessage: `Agent details tabs`,
        description: `Accessible label for tabs on a Workspace Agent page`,
      })),
      (t[68] = o),
      (t[69] = K));
  let q;
  t[70] === T
    ? (q = t[71])
    : ((q = (e) =>
        T(
          (t) => {
            let n = new URLSearchParams(t);
            return (n.set(`tab`, e), n);
          },
          { preventScrollReset: !0 },
        )),
      (t[70] = T),
      (t[71] = q));
  let J;
  t[72] !== E || t[73] !== K || t[74] !== q || t[75] !== x
    ? ((J = (0, $.jsx)(le, { ariaLabel: K, selectedId: E, options: x, onSelect: q })),
      (t[72] = E),
      (t[73] = K),
      (t[74] = q),
      (t[75] = x),
      (t[76] = J))
    : (J = t[76]);
  let Y;
  t[77] !== j || t[78] !== J
    ? ((Y = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-4`, children: [J, j] })),
      (t[77] = j),
      (t[78] = J),
      (t[79] = Y))
    : (Y = t[79]);
  let X;
  t[80] !== n || t[81] !== U || t[82] !== W || t[83] !== G || t[84] !== Y
    ? ((X = (0, $.jsx)(`div`, {
        className: `mx-auto flex w-full max-w-[var(--thread-content-max-width)] flex-col gap-6 px-panel py-panel`,
        children: (0, $.jsxs)(me, { children: [U, W, G, n, Y] }),
      })),
      (t[80] = n),
      (t[81] = U),
      (t[82] = W),
      (t[83] = G),
      (t[84] = Y),
      (t[85] = X))
    : (X = t[85]);
  let _e;
  return (
    t[86] !== I || t[87] !== X
      ? ((_e = (0, $.jsxs)(`div`, {
          className: `relative h-full min-h-0 flex-1 [scrollbar-gutter:stable] overflow-x-hidden overflow-y-auto`,
          children: [I, X],
        })),
        (t[86] = I),
        (t[87] = X),
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
      ? ((t = (0, $.jsx)(he, {
          children: (0, $.jsx)(N, {
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
    ((Ze = p()),
      X(),
      E(),
      (Qe = s()),
      S(),
      u(),
      G(),
      F(),
      P(),
      T(),
      J(),
      Y(),
      d(),
      _(),
      o(),
      R(),
      se(),
      Je(),
      Ne(),
      I(),
      Te(),
      De(),
      xe(),
      ke(),
      Me(),
      ($ = l()),
      k(),
      ($e = c(
        async () =>
          (
            await f(
              async () => {
                let { WorkspaceAgentMemory: e } = await import(`./memory-36ca2c71f24c.js`);
                return { WorkspaceAgentMemory: e };
              },
              __vite__mapDeps([21, 2, 1, 3, 22, 4, 5, 23, 24, 14, 12]),
              import.meta.url,
            )
          ).WorkspaceAgentMemory,
        { fallback: (0, $.jsx)(Xe, {}) },
      )),
      (et = c(
        async () =>
          (
            await f(
              async () => {
                let { WorkspaceAgentApps: e } = await import(`./apps-2e2d102c8399.js`);
                return { WorkspaceAgentApps: e };
              },
              __vite__mapDeps([25, 1, 2, 3, 4, 5, 26, 12, 14, 18, 15, 17, 27, 28, 29, 30, 31]),
              import.meta.url,
            )
          ).WorkspaceAgentApps,
        { fallback: (0, $.jsx)(Xe, {}) },
      )));
  }))();
}
tt();
export { Ye as WorkspaceAgentLanding };
//# sourceMappingURL=workspace-agent-landing-de1bd5d6920a.js.map
