import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  B6t as t,
  BJ as n,
  BU as r,
  CJ as i,
  Cpn as a,
  F3t as o,
  GU as s,
  Gj as c,
  HJ as l,
  HKt as u,
  IU as d,
  Kj as f,
  N3t as p,
  O3t as m,
  O5t as h,
  Opn as g,
  Orn as _,
  PU as v,
  Rpn as y,
  S2 as b,
  S3t as x,
  SJ as S,
  Spn as C,
  Trn as w,
  UGt as T,
  VJ as E,
  VKt as D,
  VU as ee,
  WGt as te,
  WU as ne,
  _2 as re,
  _it as ie,
  aB as O,
  aR as ae,
  b2 as oe,
  bI as se,
  bJ as ce,
  bmn as le,
  bx as ue,
  cU as k,
  d5t as de,
  dY as fe,
  dqt as pe,
  drn as me,
  f5t as he,
  fY as ge,
  g2 as _e,
  gGt as ve,
  gMt as ye,
  git as be,
  hGt as xe,
  hMt as Se,
  hit as Ce,
  hmn as A,
  kmn as j,
  krn as M,
  lU as N,
  lwt as we,
  mwt as Te,
  nU as Ee,
  nVt as De,
  oB as Oe,
  oR as ke,
  pY as Ae,
  pit as je,
  pqt as Me,
  rU as Ne,
  rVt as Pe,
  rrn as P,
  s3t as Fe,
  snn as Ie,
  v2 as Le,
  vJ as Re,
  wrn as ze,
  x2 as Be,
  xI as Ve,
  xJ as He,
  xmn as Ue,
  xpn as F,
  xx as We,
  yJ as Ge,
  zpn as I,
} from "./app-initial-f094ef01c64d.js";
import {
  Jh as Ke,
  Mi as qe,
  ji as Je,
  lS as Ye,
  qh as Xe,
  uS as Ze,
} from "./app-primary-4c40d73a1074.js";
import {
  a as Qe,
  c as $e,
  l as et,
  n as tt,
  s as nt,
  t as rt,
} from "./skill-exploration-labels-375728b900a9.js";
import { n as it, t as at } from "./tool-activity-disclosure-6103c5aa72b1.js";
function ot({ item: e, mcpServerStatuses: t }) {
  if (e.isMcpAppWidgetSuperseded === !0) return `not-mcp-app`;
  let n = e.result?.type === `success` ? e.result.raw : null;
  return e.mcpAppResourceUri != null ||
    we({
      mcpServerStatuses: t,
      server: e.invocation.server,
      tool: e.invocation.tool,
      toolResult: n,
    }) != null
    ? `mcp-app`
    : n == null
      ? `not-mcp-app`
      : t == null
        ? `maybe-mcp-app`
        : `not-mcp-app`;
}
function st({ item: e, mcpServerStatuses: t }) {
  return ot({ item: e, mcpServerStatuses: t }) === `mcp-app`;
}
function ct({ item: e, mcpServerStatuses: t }) {
  return ot({ item: e, mcpServerStatuses: t }) !== `not-mcp-app`;
}
function lt(e) {
  return e.some((e) =>
    e.kind !== `item` || e.item.type !== `mcp-tool-call`
      ? !1
      : e.item.result?.type === `success` ||
        (!e.item.completed && e.item.result == null && e.item.mcpAppResourceUri == null),
  );
}
var ut = e(() => {
  Te();
});
function L(e) {
  let t = (0, dt.c)(3),
    n = o(Ve) === `work` ? ae : ne,
    r;
  return (
    t[0] !== n || t[1] !== e
      ? ((r = (0, ft.jsx)(n, { ...e })), (t[0] = n), (t[1] = e), (t[2] = r))
      : (r = t[2]),
    r
  );
}
var dt,
  ft,
  R = e(() => {
    ((dt = j()), m(), s(), ke(), se(), (ft = A()));
  });
function pt(e, t) {
  let n = e.favIconUrl?.trim();
  if (n == null || n.length === 0) return null;
  let r = (e.url ?? e.pendingUrl ?? ``).trim();
  if (r.length === 0 || t == null) return n;
  try {
    let e = new URL(t.getURL(`/_favicon/`));
    return (e.searchParams.set(`pageUrl`, r), e.searchParams.set(`size`, `32`), e.toString());
  } catch {
    return n;
  }
}
var mt = e(() => {});
function ht(e) {
  let t = (0, z.c)(25),
    { item: n, isLeadingSummaryPart: r, tabId: i, variant: o, agentActivityIcon: s } = e,
    c = r === void 0 || r,
    { data: l } = _t(n, i),
    u = l?.faviconUrl ?? null,
    d = l?.title ?? null,
    f;
  if (d != null) {
    let e;
    (t[0] !== c || t[1] !== n.completed || t[2] !== d
      ? ((e = n.completed
          ? (0, B.jsx)(a, {
              ...(c ? V.completedWithTitle : V.completedWithTitleFollowing),
              values: { title: d },
            })
          : (0, B.jsx)(a, { ...V.activeWithTitle, values: { title: d } })),
        (t[0] = c),
        (t[1] = n.completed),
        (t[2] = d),
        (t[3] = e))
      : (e = t[3]),
      (f = e));
  } else {
    let e;
    (t[4] !== c || t[5] !== n.completed
      ? ((e = n.completed
          ? (0, B.jsx)(a, { ...(c ? V.completed : V.completedFollowing) })
          : (0, B.jsx)(a, { ...V.active })),
        (t[4] = c),
        (t[5] = n.completed),
        (t[6] = e))
      : (e = t[6]),
      (f = e));
  }
  let p = !n.completed,
    m = o !== `summary-text` && `min-w-0 truncate`,
    h;
  t[7] === m ? (h = t[8]) : ((h = y(m)), (t[7] = m), (t[8] = h));
  let g;
  t[9] !== f || t[10] !== p || t[11] !== h
    ? ((g = (0, B.jsx)(v, { active: p, className: h, children: f })),
      (t[9] = f),
      (t[10] = p),
      (t[11] = h),
      (t[12] = g))
    : (g = t[12]);
  let _ = g;
  if (o === `row` && s !== void 0) {
    let e;
    return (
      t[13] !== s || t[14] !== _
        ? ((e = (0, B.jsx)(Ee, { icon: s, summary: _ })), (t[13] = s), (t[14] = _), (t[15] = e))
        : (e = t[15]),
      e
    );
  }
  let b =
      o === `row`
        ? `text-text-tertiary/90`
        : `text-text/40 group-hover/activity-header:text-default`,
    x;
  t[16] === b ? (x = t[17]) : ((x = y(`text-size-chat`, b)), (t[16] = b), (t[17] = x));
  let S;
  t[18] !== u || t[19] !== o
    ? ((S =
        o !== `summary-text` && u != null
          ? (0, B.jsx)(Ye, {
              src: u,
              className: `icon-xs text-tertiary`,
              showFallbackWhileLoading: !1,
            })
          : null),
      (t[18] = u),
      (t[19] = o),
      (t[20] = S))
    : (S = t[20]);
  let C;
  return (
    t[21] !== _ || t[22] !== x || t[23] !== S
      ? ((C = (0, B.jsxs)(k, { className: x, children: [S, _] })),
        (t[21] = _),
        (t[22] = x),
        (t[23] = S),
        (t[24] = C))
      : (C = t[24]),
    C
  );
}
function gt(e) {
  let t = (0, z.c)(2),
    { item: n, tabId: r } = e,
    { data: i } = _t(n, r),
    a;
  return (
    t[0] === i
      ? (a = t[1])
      : ((a =
          i?.faviconUrl == null
            ? null
            : (0, B.jsx)(Ye, {
                src: i.faviconUrl,
                className: `icon-xs text-tertiary`,
                showFallbackWhileLoading: !1,
              })),
        (t[0] = i),
        (t[1] = a)),
    a
  );
}
function _t(e, t) {
  let n = (0, z.c)(9),
    r = !e.completed,
    i;
  n[0] === t ? (i = n[1]) : ((i = () => vt(t)), (n[0] = t), (n[1] = i));
  let a;
  n[2] !== e.callId || n[3] !== t
    ? ((a = [`chrome-tab-context-tool-call-metadata`, e.callId, t]),
      (n[2] = e.callId),
      (n[3] = t),
      (n[4] = a))
    : (a = n[4]);
  let o;
  return (
    n[5] !== r || n[6] !== i || n[7] !== a
      ? ((o = { enabled: r, queryFn: i, queryKey: a, staleTime: 1 / 0 }),
        (n[5] = r),
        (n[6] = i),
        (n[7] = a),
        (n[8] = o))
      : (o = n[8]),
    x(o)
  );
}
async function vt(e) {
  let t = D();
  if (t?.tabs == null) return null;
  try {
    let n = await t.tabs.get(e);
    return { faviconUrl: pt(n, t.runtime), title: n.title?.trim() || null };
  } catch {
    return null;
  }
}
var z,
  B,
  V,
  yt = e(() => {
    ((z = j()),
      Fe(),
      I(),
      C(),
      u(),
      mt(),
      Ze(),
      Ne(),
      d(),
      N(),
      (B = A()),
      (V = F({
        completedWithTitle: {
          id: `localConversation.chromeExtensionToolCall.getTabContext.completedWithTitle`,
          defaultMessage: `Read "{title}"`,
          description: `Completed label for reading the contents of a Chrome tab with a known page title.`,
        },
        completedWithTitleFollowing: {
          id: `localConversation.chromeExtensionToolCall.getTabContext.completedWithTitle.following`,
          defaultMessage: `read "{title}"`,
          description: `Non-leading completed label for reading the contents of a Chrome tab with a known page title in an agent activity summary`,
        },
        activeWithTitle: {
          id: `localConversation.chromeExtensionToolCall.getTabContext.activeWithTitle`,
          defaultMessage: `Reading "{title}"`,
          description: `In-progress label for reading the contents of a Chrome tab with a known page title.`,
        },
        completed: {
          id: `localConversation.chromeExtensionToolCall.getTabContext.completed`,
          defaultMessage: `Read tab`,
          description: `Completed label for reading the contents of a Chrome tab.`,
        },
        completedFollowing: {
          id: `localConversation.chromeExtensionToolCall.getTabContext.completed.following`,
          defaultMessage: `read tab`,
          description: `Non-leading completed label for reading the contents of a Chrome tab in an agent activity summary`,
        },
        active: {
          id: `localConversation.chromeExtensionToolCall.getTabContext.active`,
          defaultMessage: `Reading tab`,
          description: `In-progress label for reading the contents of a Chrome tab.`,
        },
      })));
  });
function bt(e) {
  let t = U.safeParse(e.arguments);
  return t.success ? (0, H.jsx)(gt, { item: e, tabId: t.data.tabId }) : null;
}
function xt(e, t, n, r = !0) {
  let i = U.safeParse(e.arguments);
  return i.success
    ? (0, H.jsx)(ht, {
        item: e,
        isLeadingSummaryPart: r,
        tabId: i.data.tabId,
        variant: t,
        agentActivityIcon: n,
      })
    : null;
}
function St(e) {
  return U.safeParse(e.arguments).success ? e.callId : null;
}
var H,
  U,
  Ct,
  wt = e(() => {
    (P(),
      te(),
      ve(),
      yt(),
      (H = A()),
      (U = _({ tabId: ze().int().nonnegative() })),
      (Ct = [
        {
          getCompletedSummaryPartKey: St,
          namespace: T,
          render: xt,
          renderAgentActivityIcon: bt,
          tool: xe,
        },
      ]));
  });
function Tt() {
  return (0, W.jsx)(Se, { className: `shrink-0 text-text/60`, "aria-hidden": !1, asset: Xe });
}
function Et(e, t, n, r = !0) {
  let i;
  return (
    (i = e.completed ? (r ? `readCompleted` : `readCompletedFollowing`) : `readActive`),
    Ot(e, i, t, n)
  );
}
function Dt(e, t, n, r = !0) {
  let i;
  return (
    (i = e.completed
      ? e.success === !1
        ? r
          ? `writeFailed`
          : `writeFailedFollowing`
        : r
          ? `writeCompleted`
          : `writeCompletedFollowing`
      : e.arguments != null &&
          typeof e.arguments == `object` &&
          !Array.isArray(e.arguments) &&
          `config` in e.arguments
        ? `writeWaitingForApproval`
        : `writeActive`),
    Ot(e, i, t, n)
  );
}
function Ot(e, t, n, r) {
  return n === `row` && r !== void 0
    ? (0, W.jsx)(Ee, {
        icon: r,
        summary: (0, W.jsx)(v, {
          active: !e.completed,
          className: `min-w-0 truncate`,
          children: (0, W.jsx)(a, { ...At[t] }),
        }),
      })
    : (0, W.jsxs)(k, {
        className: y(
          `text-size-chat`,
          n === `row`
            ? `text-text-tertiary/90`
            : `text-text/40 group-hover/activity-header:text-default`,
        ),
        children: [
          n === `summary-text` ? null : Tt(),
          (0, W.jsx)(v, {
            active: !e.completed,
            className: y(n !== `summary-text` && `min-w-0 truncate`),
            children: (0, W.jsx)(a, { ...At[t] }),
          }),
        ],
      });
}
var W,
  kt,
  At,
  jt = e(() => {
    (Ke(),
      I(),
      C(),
      Oe(),
      b(),
      ye(),
      Ne(),
      d(),
      N(),
      (W = A()),
      (kt = [
        { namespace: O, render: Et, renderAgentActivityIcon: Tt, tool: oe },
        { namespace: O, render: Dt, renderAgentActivityIcon: Tt, tool: Be },
      ]),
      (At = F({
        readActive: {
          id: `localConversation.settingsToolCall.read.active`,
          defaultMessage: `Reading settings`,
          description: `In-progress label for reading Codex settings.`,
        },
        readCompleted: {
          id: `localConversation.settingsToolCall.read.completed`,
          defaultMessage: `Read settings`,
          description: `Completed label for reading Codex settings.`,
        },
        readCompletedFollowing: {
          id: `localConversation.settingsToolCall.read.completed.following`,
          defaultMessage: `read settings`,
          description: `Non-leading completed label for reading Codex settings in an agent activity summary`,
        },
        writeActive: {
          id: `localConversation.settingsToolCall.write.active`,
          defaultMessage: `Updating settings`,
          description: `In-progress label for updating Codex settings.`,
        },
        writeWaitingForApproval: {
          id: `localConversation.settingsToolCall.write.waitingForApproval`,
          defaultMessage: `Waiting for approval`,
          description: `In-progress label while a Codex configuration change is waiting for user approval.`,
        },
        writeCompleted: {
          id: `localConversation.settingsToolCall.write.completed`,
          defaultMessage: `Updated settings`,
          description: `Completed label for updating Codex settings.`,
        },
        writeCompletedFollowing: {
          id: `localConversation.settingsToolCall.write.completed.following`,
          defaultMessage: `updated settings`,
          description: `Non-leading completed label for updating Codex settings in an agent activity summary`,
        },
        writeFailed: {
          id: `localConversation.settingsToolCall.write.failed`,
          defaultMessage: `Couldn't update settings`,
          description: `Failed label for updating Codex settings.`,
        },
        writeFailedFollowing: {
          id: `localConversation.settingsToolCall.write.failed.following`,
          defaultMessage: `couldn't update settings`,
          description: `Non-leading failed label for updating Codex settings in an agent activity summary`,
        },
      })));
  });
function Mt(e) {
  let t = (0, G.c)(26),
    { agentActivityIcon: n, item: r, operation: i, variant: a } = e,
    o = r != null && r.completed && r.success === !0 ? It(r.contentItems ?? null) : null,
    s = p(fe, i == null ? (o?.operationId ?? r.callId) : i.id),
    c = i ?? s,
    l = s?.threadTitle ?? o?.threadTitle ?? null,
    u = s?.destinationHostDisplayName ?? o?.destinationHostDisplayName ?? null,
    d = c == null ? (o == null ? (r?.completed ?? !1) : Ae(o.status)) : Ae(c.status),
    f =
      c == null
        ? r?.success
        : c.status === `error`
          ? !1
          : c.status === `success` || c.status === `warning`,
    m = `running`;
  d && (m = f === !1 ? `failed` : `completed`);
  let h;
  t[0] !== d || t[1] !== u || t[2] !== i || t[3] !== f || t[4] !== l
    ? ((h =
        i == null
          ? (0, K.jsx)(Ft, {
              completed: d,
              destinationHostDisplayName: u,
              success: f,
              threadTitle: l,
            })
          : (0, K.jsx)(Nt, { operation: i })),
      (t[0] = d),
      (t[1] = u),
      (t[2] = i),
      (t[3] = f),
      (t[4] = l),
      (t[5] = h))
    : (h = t[5]);
  let g = h;
  if (a !== `row`) {
    let e;
    t[6] === a
      ? (e = t[7])
      : ((e =
          a === `summary-text`
            ? null
            : (0, K.jsx)(L, { className: `icon-xs shrink-0 text-text/60` })),
        (t[6] = a),
        (t[7] = e));
    let n = !d,
      r = a !== `summary-text` && `min-w-0 truncate`,
      i;
    t[8] === r ? (i = t[9]) : ((i = y(r)), (t[8] = r), (t[9] = i));
    let o;
    t[10] !== g || t[11] !== n || t[12] !== i
      ? ((o = (0, K.jsx)(v, { active: n, className: i, children: g })),
        (t[10] = g),
        (t[11] = n),
        (t[12] = i),
        (t[13] = o))
      : (o = t[13]);
    let s;
    return (
      t[14] !== e || t[15] !== o
        ? ((s = (0, K.jsxs)(k, {
            className: `text-size-chat text-text/40 group-hover/activity-header:text-default`,
            children: [e, o],
          })),
          (t[14] = e),
          (t[15] = o),
          (t[16] = s))
        : (s = t[16]),
      s
    );
  }
  let _;
  t[17] === n
    ? (_ = t[18])
    : ((_ = n ?? (0, K.jsx)(L, { className: `icon-xs shrink-0 text-text/60` })),
      (t[17] = n),
      (t[18] = _));
  let b;
  t[19] === c
    ? (b = t[20])
    : ((b = c?.steps.map((e) =>
        (0, K.jsx)(
          Je,
          {
            compact: !0,
            direction: c.direction,
            localBranch: c.localBranch,
            sourceBranch: c.sourceBranch,
            step: e,
            worktreeBranch: c.worktreeBranch,
          },
          e.id,
        ),
      )),
      (t[19] = c),
      (t[20] = b));
  let x;
  return (
    t[21] !== m || t[22] !== g || t[23] !== _ || t[24] !== b
      ? ((x = (0, K.jsx)(at, { indentContent: !1, icon: _, status: m, summary: g, children: b })),
        (t[21] = m),
        (t[22] = g),
        (t[23] = _),
        (t[24] = b),
        (t[25] = x))
      : (x = t[25]),
    x
  );
}
function Nt(e) {
  let t = (0, G.c)(10),
    { operation: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = (0, K.jsx)(Pt, { operation: n })), (t[0] = n), (t[1] = r));
  let i = r;
  if (n.status === `queued` || n.status === `running`) {
    let e;
    return (
      t[2] === i
        ? (e = t[3])
        : ((e = (0, K.jsx)(a, {
            id: `localConversation.threadHandoff.inline.active`,
            defaultMessage: `Handing off to {destination}`,
            description: `In-progress label for handing the current task to another run location`,
            values: { destination: i },
          })),
          (t[2] = i),
          (t[3] = e)),
      e
    );
  }
  if (n.status === `error`) {
    let e;
    return (
      t[4] === i
        ? (e = t[5])
        : ((e = (0, K.jsx)(a, {
            id: `localConversation.threadHandoff.inline.failed`,
            defaultMessage: `Failed to hand off to {destination}`,
            description: `Failed label for handing the current task to another run location`,
            values: { destination: i },
          })),
          (t[4] = i),
          (t[5] = e)),
      e
    );
  }
  if (n.status === `warning`) {
    let e;
    return (
      t[6] === i
        ? (e = t[7])
        : ((e = (0, K.jsx)(a, {
            id: `localConversation.threadHandoff.inline.warning`,
            defaultMessage: `Handoff to {destination} needs attention`,
            description: `Warning label for handing the current task to another run location`,
            values: { destination: i },
          })),
          (t[6] = i),
          (t[7] = e)),
      e
    );
  }
  let o;
  return (
    t[8] === i
      ? (o = t[9])
      : ((o = (0, K.jsx)(a, {
          id: `localConversation.threadHandoff.inline.completed`,
          defaultMessage: `Handed off to {destination}`,
          description: `Completed label for handing the current task to another run location`,
          values: { destination: i },
        })),
        (t[8] = i),
        (t[9] = o)),
    o
  );
}
function Pt(e) {
  let t = (0, G.c)(4),
    { operation: n } = e;
  if (n.direction === `to-local`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsx)(a, {
            id: `localConversation.threadHandoff.inline.destination.local`,
            defaultMessage: `local`,
            description: `Destination noun used in an inline task handoff status`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n.direction === `to-worktree`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsx)(a, {
            id: `localConversation.threadHandoff.inline.destination.worktree`,
            defaultMessage: `worktree`,
            description: `Destination noun used in an inline task handoff status`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let r;
  return (
    t[2] === n.request.destinationLabel
      ? (r = t[3])
      : ((r = (0, K.jsx)(K.Fragment, { children: n.request.destinationLabel })),
        (t[2] = n.request.destinationLabel),
        (t[3] = r)),
    r
  );
}
function Ft(e) {
  let t = (0, G.c)(12),
    { completed: n, destinationHostDisplayName: r, success: i, threadTitle: o } = e;
  if (o == null || r == null) {
    if (!n) {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, K.jsx)(a, {
              id: `localConversation.appControlToolCall.threadsHandoff.active`,
              defaultMessage: `Handing off chat`,
              description: `In-progress label for handing off a Codex task when its title or destination host is unavailable`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    if (i === !1) {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, K.jsx)(a, {
              id: `localConversation.appControlToolCall.threadsHandoff.failed`,
              defaultMessage: `Failed to hand off chat`,
              description: `Failed label for handing off a Codex task when its title or destination host is unavailable`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsx)(a, {
            id: `localConversation.appControlToolCall.threadsHandoff.completed`,
            defaultMessage: `Handed off chat`,
            description: `Completed label for handing off a Codex task when its title or destination host is unavailable`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (!n) {
    let e;
    return (
      t[3] !== r || t[4] !== o
        ? ((e = (0, K.jsx)(a, {
            id: `localConversation.appControlToolCall.threadsHandoffToHost.active`,
            defaultMessage: `Handing off {threadTitle} to {destinationHostDisplayName}`,
            description: `In-progress label for handing off a Codex task to a host`,
            values: { destinationHostDisplayName: r, threadTitle: o },
          })),
          (t[3] = r),
          (t[4] = o),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  if (i === !1) {
    let e;
    return (
      t[6] !== r || t[7] !== o
        ? ((e = (0, K.jsx)(a, {
            id: `localConversation.appControlToolCall.threadsHandoffToHost.failed`,
            defaultMessage: `Failed to hand off {threadTitle} to {destinationHostDisplayName}`,
            description: `Failed label for handing off a Codex task to a host`,
            values: { destinationHostDisplayName: r, threadTitle: o },
          })),
          (t[6] = r),
          (t[7] = o),
          (t[8] = e))
        : (e = t[8]),
      e
    );
  }
  let s;
  return (
    t[9] !== r || t[10] !== o
      ? ((s = (0, K.jsx)(a, {
          id: `localConversation.appControlToolCall.threadsHandoffToHost.completed`,
          defaultMessage: `Handed off {threadTitle} to {destinationHostDisplayName}`,
          description: `Completed label for handing off a Codex task to a host`,
          values: { destinationHostDisplayName: r, threadTitle: o },
        })),
        (t[9] = r),
        (t[10] = o),
        (t[11] = s))
      : (s = t[11]),
    s
  );
}
function It(e) {
  let t = e?.find((e) => e.type === `inputText`)?.text;
  if (t == null) return null;
  try {
    let e = JSON.parse(t),
      n = Lt.safeParse(e);
    return n.success ? n.data : null;
  } catch {
    return null;
  }
}
var G,
  K,
  Lt,
  Rt = e(() => {
    ((G = j()),
      I(),
      m(),
      C(),
      P(),
      ge(),
      qe(),
      R(),
      d(),
      N(),
      it(),
      (K = A()),
      (Lt = w({
        destinationHostDisplayName: M().min(1),
        operationId: M().min(1),
        status: me([`queued`, `running`, `success`, `warning`, `error`]),
        threadTitle: M().min(1),
      })));
  });
function zt(e) {
  let t = (0, Bt.c)(27),
    { compact: n, result: r } = e,
    i = g(),
    o = r.kind === `chatgpt`,
    s = !o && `clientThreadId` in r,
    l;
  t[0] === i ? (l = t[1]) : ((l = i.formatMessage(J.openCreatedThread)), (t[0] = i), (t[1] = l));
  let u = l,
    d;
  t[2] !== o || t[3] !== s || t[4] !== r
    ? ((d = () => {
        let e = `clientThreadId` in r ? r.clientThreadId : r.threadId;
        Ue.dispatchHostMessage({
          type: `navigate-to-route`,
          path: o ? pe(e) : he(s ? r.clientThreadId : Ie(r.threadId)),
        });
      }),
      (t[2] = o),
      (t[3] = s),
      (t[4] = r),
      (t[5] = d))
    : (d = t[5]);
  let f = d,
    p = n ? `size-7 rounded-md` : `size-8 rounded-lg`,
    m;
  t[6] === p
    ? (m = t[7])
    : ((m = y(
        `flex shrink-0 items-center justify-center bg-surface-secondary/92 text-secondary`,
        p,
      )),
      (t[6] = p),
      (t[7] = m));
  let h = n ? `icon-xs` : `icon-sm`,
    _;
  t[8] === h
    ? (_ = t[9])
    : ((_ = (0, q.jsx)(c, { className: h, "aria-hidden": !0 })), (t[8] = h), (t[9] = _));
  let v;
  t[10] !== m || t[11] !== _
    ? ((v = (0, q.jsx)(`span`, { className: m, children: _ })),
      (t[10] = m),
      (t[11] = _),
      (t[12] = v))
    : (v = t[12]);
  let b = n ? `compact` : `default`,
    x = s ? J.worktreeChat : J.threadCreated,
    S;
  t[13] === x ? (S = t[14]) : ((S = (0, q.jsx)(a, { ...x })), (t[13] = x), (t[14] = S));
  let C;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, q.jsx)(Ce, { label: (0, q.jsx)(a, { ...J.openThread }) })), (t[15] = C))
    : (C = t[15]);
  let w;
  t[16] !== S || t[17] !== v || t[18] !== b
    ? ((w = (0, q.jsx)(be, { icon: v, padding: b, title: S, trailing: C })),
      (t[16] = S),
      (t[17] = v),
      (t[18] = b),
      (t[19] = w))
    : (w = t[19]);
  let T;
  t[20] !== u || t[21] !== f || t[22] !== w
    ? ((T = (0, q.jsx)(`button`, {
        type: `button`,
        "aria-label": u,
        className: `w-full cursor-interaction text-start hover:bg-background-primary-ghost-hover/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
        onClick: f,
        children: w,
      })),
      (t[20] = u),
      (t[21] = f),
      (t[22] = w),
      (t[23] = T))
    : (T = t[23]);
  let E = T,
    D;
  return (
    t[24] !== n || t[25] !== E
      ? ((D = n ? E : (0, q.jsx)(je, { children: E })), (t[24] = n), (t[25] = E), (t[26] = D))
      : (D = t[26]),
    D
  );
}
var Bt,
  q,
  J,
  Vt = e(() => {
    ((Bt = j()),
      I(),
      t(),
      C(),
      Me(),
      f(),
      le(),
      ie(),
      (q = A()),
      (J = F({
        threadCreated: {
          id: `localConversation.appControlToolCall.threadCreated`,
          defaultMessage: `Chat created`,
          description: `Title for a card shown after a Codex task is created.`,
        },
        openCreatedThread: {
          id: `localConversation.appControlToolCall.openCreatedThread`,
          defaultMessage: `Open chat`,
          description: `Accessible label for opening a newly created Codex task.`,
        },
        openThread: {
          id: `localConversation.appControlToolCall.openThread`,
          defaultMessage: `Open chat`,
          description: `Button label for opening a newly created Codex task.`,
        },
        worktreeChat: {
          id: `localConversation.appControlToolCall.worktreeChat`,
          defaultMessage: `Worktree chat`,
          description: `Title for a card linking to a worktree-backed Codex task.`,
        },
      })));
  });
function Y(e) {
  return (0, Z.jsx)(
    e.tool === `create_thread` &&
      e.completed &&
      e.success === !0 &&
      Kt(e.contentItems ?? null) != null
      ? c
      : L,
    { className: `icon-xs shrink-0 text-text/60` },
  );
}
function Ht(e, t, n) {
  return Yt.safeParse(e.arguments).success
    ? (0, Z.jsx)(Mt, { agentActivityIcon: n, item: e, variant: t })
    : null;
}
function Ut(e) {
  let t = Yt.safeParse(e.arguments);
  return t.success ? JSON.stringify([t.data.threadId, t.data.destinationHostId ?? null]) : null;
}
function Wt(e) {
  let t = Xt.safeParse(e.arguments);
  return t.success ? t.data.operationId : null;
}
function X(e, t, n, r = !0) {
  let i = Gt(e);
  if (i == null) return null;
  let o = r ? i : (Qt[i] ?? i),
    s =
      e.tool === `create_thread` && e.completed && e.success === !0 && t === `row`
        ? Kt(e.contentItems ?? null)
        : null;
  if (s != null) return (0, Z.jsx)(zt, { result: s });
  let c =
      t === `row` && (e.tool === `read_thread` || e.tool === `send_message_to_thread`)
        ? Zt.safeParse(e.arguments)
        : null,
    l = c?.success === !0 ? c.data.threadId : null,
    u = t === `row` && n !== void 0,
    d = u ? `summary-text` : t,
    f = (0, Z.jsxs)(k, {
      className: y(
        `text-size-chat`,
        d === `row`
          ? `text-text-tertiary/90`
          : `text-text/40 group-hover/activity-header:text-default`,
      ),
      children: [
        d === `summary-text` ? null : Y(e),
        (0, Z.jsx)(v, {
          active: !e.completed,
          className: y(
            d !== `summary-text` && `min-w-0 truncate`,
            l != null && `group-hover:!text-default`,
          ),
          children: (0, Z.jsx)(a, { ...en[o] }),
        }),
      ],
    }),
    p =
      l == null
        ? f
        : (0, Z.jsx)(`button`, {
            type: `button`,
            className: `group max-w-full cursor-interaction rounded-md text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
            onClick: () => {
              let e = Ie(l);
              Ue.dispatchHostMessage({ type: `navigate-to-route`, path: We() ? de(e) : he(e) });
            },
            children: f,
          });
  return u ? (0, Z.jsx)(Ee, { icon: n, summary: p }) : p;
}
function Gt(e) {
  switch (e.tool) {
    case Re: {
      let t = Jt.safeParse(e.arguments);
      return t.success
        ? t.data.environment?.type === `worktree`
          ? e.completed
            ? `threadsForkInWorktreeCompleted`
            : `threadsForkInWorktreeActive`
          : e.completed
            ? `threadsForkCompleted`
            : `threadsForkActive`
        : null;
    }
    case _e: {
      let t = qt.safeParse(e.arguments);
      return t.success
        ? t.data.target.type === `project` && t.data.target.environment?.type === `worktree`
          ? e.completed
            ? `threadsCreateInWorktreeCompleted`
            : `threadsCreateInWorktreeActive`
          : e.completed
            ? `threadsCreateCompleted`
            : `threadsCreateActive`
        : null;
    }
    case Ge:
      return e.completed ? `threadsListCompleted` : `threadsListActive`;
    case re:
      return e.completed ? `threadsReadCompleted` : `threadsReadActive`;
    case Le:
      return e.completed ? `threadsSendMessageCompleted` : `threadsSendMessageActive`;
    case n:
      return Xt.safeParse(e.arguments).success
        ? e.completed
          ? `threadsHandoffStatusCompleted`
          : `threadsHandoffStatusActive`
        : null;
    case He:
      return e.completed ? `threadsSetPinnedCompleted` : `threadsSetPinnedActive`;
    case ce:
      return e.completed ? `threadsSetArchivedCompleted` : `threadsSetArchivedActive`;
    case S:
      return e.completed ? `threadsSetTitleCompleted` : `threadsSetTitleActive`;
    default:
      return null;
  }
}
function Kt(e) {
  let t = e?.find((e) => e.type === `inputText`)?.text;
  return t == null ? null : h(t);
}
var Z,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn = e(() => {
    (I(),
      t(),
      C(),
      P(),
      Oe(),
      l(),
      i(),
      ue(),
      f(),
      le(),
      Ne(),
      R(),
      d(),
      Rt(),
      Vt(),
      N(),
      (Z = A()),
      (qt = w({ target: w({ type: M(), environment: w({ type: M() }).optional() }) })),
      (Jt = w({ environment: w({ type: M() }).optional() })),
      (Yt = w({ destinationHostId: M().min(1).optional(), threadId: M().min(1) })),
      (Xt = w({ operationId: M().min(1) })),
      (Zt = w({ threadId: M().min(1) })),
      (Qt = {
        threadsCreateCompleted: `threadsCreateCompletedFollowing`,
        threadsCreateInWorktreeCompleted: `threadsCreateInWorktreeCompletedFollowing`,
        threadsForkCompleted: `threadsForkCompletedFollowing`,
        threadsForkInWorktreeCompleted: `threadsForkInWorktreeCompletedFollowing`,
        threadsHandoffStatusCompleted: `threadsHandoffStatusCompletedFollowing`,
        threadsListCompleted: `threadsListCompletedFollowing`,
        threadsReadCompleted: `threadsReadCompletedFollowing`,
        threadsSendMessageCompleted: `threadsSendMessageCompletedFollowing`,
        threadsSetArchivedCompleted: `threadsSetArchivedCompletedFollowing`,
        threadsSetPinnedCompleted: `threadsSetPinnedCompletedFollowing`,
        threadsSetTitleCompleted: `threadsSetTitleCompletedFollowing`,
      }),
      ($t = [
        {
          getCompletedSummaryPartKey: Gt,
          namespace: O,
          render: X,
          renderAgentActivityIcon: Y,
          tool: Re,
        },
        {
          getCompletedSummaryPartKey: Gt,
          namespace: O,
          render: X,
          renderAgentActivityIcon: Y,
          tool: _e,
        },
        {
          getCompletedSummaryPartKey: Ut,
          namespace: O,
          render: Ht,
          renderAgentActivityIcon: Y,
          standaloneInConversation: !0,
          tool: E,
        },
        {
          getCompletedSummaryPartKey: Wt,
          namespace: O,
          render: X,
          renderAgentActivityIcon: Y,
          summaryOnlyInConversationGroup: !0,
          tool: n,
        },
        {
          continuesLiveActivityBetweenCalls: !0,
          namespace: O,
          render: X,
          renderAgentActivityIcon: Y,
          tool: Ge,
        },
        {
          continuesLiveActivityBetweenCalls: !0,
          namespace: O,
          render: X,
          renderAgentActivityIcon: Y,
          tool: re,
        },
        { namespace: O, render: X, renderAgentActivityIcon: Y, tool: Le },
        { namespace: O, render: X, renderAgentActivityIcon: Y, tool: He },
        { namespace: O, render: X, renderAgentActivityIcon: Y, tool: ce },
        { namespace: O, render: X, renderAgentActivityIcon: Y, tool: S },
      ]),
      (en = F({
        threadsForkActive: {
          id: `localConversation.appControlToolCall.threadsFork.active`,
          defaultMessage: `Forking chat`,
          description: `In-progress label while the agent forks a chat`,
        },
        threadsForkCompleted: {
          id: `localConversation.appControlToolCall.threadsFork.completed`,
          defaultMessage: `Forked chat`,
          description: `Completed label after the agent forks a chat`,
        },
        threadsForkCompletedFollowing: {
          id: `localConversation.appControlToolCall.threadsFork.completed.following`,
          defaultMessage: `forked chat`,
          description: `Non-leading completed label for forking a chat in an activity summary`,
        },
        threadsForkInWorktreeActive: {
          id: `localConversation.appControlToolCall.threadsForkInWorktree.active`,
          defaultMessage: `Forking chat in new worktree`,
          description: `In-progress label while the agent forks a chat in a new worktree`,
        },
        threadsForkInWorktreeCompleted: {
          id: `localConversation.appControlToolCall.threadsForkInWorktree.completed`,
          defaultMessage: `Forked chat in new worktree`,
          description: `Completed label after the agent forks a chat in a new worktree`,
        },
        threadsForkInWorktreeCompletedFollowing: {
          id: `localConversation.appControlToolCall.threadsForkInWorktree.completed.following`,
          defaultMessage: `forked chat in new worktree`,
          description: `Non-leading completed label for forking a chat in a new worktree in an activity summary`,
        },
        threadsCreateActive: {
          id: `localConversation.appControlToolCall.threadsCreate.active`,
          defaultMessage: `Creating chat`,
          description: `In-progress label for creating a Codex task.`,
        },
        threadsCreateCompleted: {
          id: `localConversation.appControlToolCall.threadsCreate.completed`,
          defaultMessage: `Created chat`,
          description: `Completed label for creating a Codex task.`,
        },
        threadsCreateCompletedFollowing: {
          id: `localConversation.appControlToolCall.threadsCreate.completed.following`,
          defaultMessage: `created chat`,
          description: `Non-leading completed label for creating a Codex task in an agent activity summary`,
        },
        threadsCreateInWorktreeActive: {
          id: `localConversation.appControlToolCall.threadsCreateInWorktree.active`,
          defaultMessage: `Creating worktree chat`,
          description: `In-progress label for creating a Codex worktree task.`,
        },
        threadsCreateInWorktreeCompleted: {
          id: `localConversation.appControlToolCall.threadsCreateInWorktree.completed`,
          defaultMessage: `Created worktree chat`,
          description: `Completed label for creating a Codex worktree task.`,
        },
        threadsCreateInWorktreeCompletedFollowing: {
          id: `localConversation.appControlToolCall.threadsCreateInWorktree.completed.following`,
          defaultMessage: `created worktree chat`,
          description: `Non-leading completed label for creating a Codex worktree task in an agent activity summary`,
        },
        threadsListActive: {
          id: `localConversation.appControlToolCall.threadsList.active`,
          defaultMessage: `Listing chats`,
          description: `In-progress label for listing Codex tasks.`,
        },
        threadsListCompleted: {
          id: `localConversation.appControlToolCall.threadsList.completed`,
          defaultMessage: `Listed chats`,
          description: `Completed label for listing Codex tasks.`,
        },
        threadsListCompletedFollowing: {
          id: `localConversation.appControlToolCall.threadsList.completed.following`,
          defaultMessage: `listed chats`,
          description: `Non-leading completed label for listing Codex tasks in an agent activity summary`,
        },
        threadsReadActive: {
          id: `localConversation.appControlToolCall.threadsRead.active`,
          defaultMessage: `Reading chat`,
          description: `In-progress label for reading a Codex task.`,
        },
        threadsReadCompleted: {
          id: `localConversation.appControlToolCall.threadsRead.completed`,
          defaultMessage: `Read chat`,
          description: `Completed label for reading a Codex task.`,
        },
        threadsReadCompletedFollowing: {
          id: `localConversation.appControlToolCall.threadsRead.completed.following`,
          defaultMessage: `read chat`,
          description: `Non-leading completed label for reading a Codex task in an agent activity summary`,
        },
        threadsHandoffStatusActive: {
          id: `localConversation.appControlToolCall.threadsHandoffStatus.active`,
          defaultMessage: `Checking handoff status`,
          description: `In-progress label for checking an asynchronous Codex task handoff operation.`,
        },
        threadsHandoffStatusCompleted: {
          id: `localConversation.appControlToolCall.threadsHandoffStatus.completed`,
          defaultMessage: `Checked handoff status`,
          description: `Completed label for checking an asynchronous Codex task handoff operation.`,
        },
        threadsHandoffStatusCompletedFollowing: {
          id: `localConversation.appControlToolCall.threadsHandoffStatus.completed.following`,
          defaultMessage: `checked handoff status`,
          description: `Non-leading completed label for checking an asynchronous Codex task handoff operation in an agent activity summary`,
        },
        threadsSendMessageActive: {
          id: `localConversation.appControlToolCall.threadsSendMessage.active`,
          defaultMessage: `Sending message to chat`,
          description: `In-progress label for sending a message to a Codex task.`,
        },
        threadsSendMessageCompleted: {
          id: `localConversation.appControlToolCall.threadsSendMessage.completed`,
          defaultMessage: `Sent message to chat`,
          description: `Completed label for sending a message to a Codex task.`,
        },
        threadsSendMessageCompletedFollowing: {
          id: `localConversation.appControlToolCall.threadsSendMessage.completed.following`,
          defaultMessage: `sent message to chat`,
          description: `Non-leading completed label for sending a message to a Codex task in an agent activity summary`,
        },
        threadsSetArchivedActive: {
          id: `localConversation.appControlToolCall.threadsSetArchived.active`,
          defaultMessage: `Updating chat archive`,
          description: `In-progress label for archiving or unarchiving a Codex chat.`,
        },
        threadsSetArchivedCompleted: {
          id: `localConversation.appControlToolCall.threadsSetArchived.completed`,
          defaultMessage: `Updated chat archive`,
          description: `Completed label for archiving or unarchiving a Codex chat.`,
        },
        threadsSetArchivedCompletedFollowing: {
          id: `localConversation.appControlToolCall.threadsSetArchived.completed.following`,
          defaultMessage: `updated chat archive`,
          description: `Non-leading completed label for archiving or unarchiving a Codex chat in an agent activity summary`,
        },
        threadsSetPinnedActive: {
          id: `localConversation.appControlToolCall.threadsSetPinned.active`,
          defaultMessage: `Updating chat pin`,
          description: `In-progress label for pinning or unpinning a Codex chat.`,
        },
        threadsSetPinnedCompleted: {
          id: `localConversation.appControlToolCall.threadsSetPinned.completed`,
          defaultMessage: `Updated chat pin`,
          description: `Completed label for pinning or unpinning a Codex chat.`,
        },
        threadsSetPinnedCompletedFollowing: {
          id: `localConversation.appControlToolCall.threadsSetPinned.completed.following`,
          defaultMessage: `updated chat pin`,
          description: `Non-leading completed label for pinning or unpinning a Codex chat in an agent activity summary`,
        },
        threadsSetTitleActive: {
          id: `localConversation.appControlToolCall.threadsSetTitle.active`,
          defaultMessage: `Renaming chat`,
          description: `In-progress label for renaming a Codex chat.`,
        },
        threadsSetTitleCompleted: {
          id: `localConversation.appControlToolCall.threadsSetTitle.completed`,
          defaultMessage: `Renamed chat`,
          description: `Completed label for renaming a Codex chat.`,
        },
        threadsSetTitleCompletedFollowing: {
          id: `localConversation.appControlToolCall.threadsSetTitle.completed.following`,
          defaultMessage: `renamed chat`,
          description: `Non-leading completed label for renaming a Codex chat in an agent activity summary`,
        },
      })));
  });
function Q(e) {
  return sn.find((t) => t.namespace === e.namespace && t.tool === e.tool);
}
function nn(e) {
  return Q(e)?.continuesLiveActivityBetweenCalls === !0;
}
function rn(e) {
  return Q(e)?.persistentInCollapsedConversation === !0;
}
function an(e) {
  return Q(e)?.summaryOnlyInConversationGroup === !0;
}
function on(e) {
  let t = Q(e)?.getCompletedSummaryPartKey?.(e);
  return `${e.namespace}:${e.tool}:${t ?? ``}`;
}
var sn,
  cn = e(() => {
    (wt(), jt(), tn(), (sn = [...Ct, ...$t, ...kt]));
  });
function ln(
  e,
  { dynamicToolCallRenderer: t, includeGeneratedImages: n = !1, mcpServerStatuses: r } = {},
) {
  switch (e.type) {
    case `external-event`:
      return null;
    case `exec`:
    case `patch`:
      return $(dn(e), ee(e) ? `standalone` : `groupable`);
    case `mcp-tool-call`:
      return $(dn(e), st({ item: e, mcpServerStatuses: r }) ? `standalone` : `groupable`);
    case `web-search`:
      return e.query.trim().length === 0 ? null : $(e, `groupable`);
    case `dynamic-tool-call`:
      return $(e, (t ?? Q(e))?.standaloneInConversation === !0 ? `standalone` : `groupable`);
    case `generated-image`:
      return n ? $(e, `standalone`) : null;
    case `image-view`:
      return $(e, `standalone`);
    case `mcp-server-elicitation`:
      return !e.completed || e.elicitation.kind === `unsupportedOpenAIForm`
        ? null
        : $(
            e,
            e.elicitation.kind === `openaiForm` &&
              Object.values(e.elicitation.schema.properties).some(Pe)
              ? `groupable`
              : `standalone`,
          );
    case `automatic-approval-review`:
      switch (e.status) {
        case `approved`:
          return null;
        case `inProgress`:
          return $(e, `groupable`);
        case `aborted`:
        case `denied`:
        case `timedOut`:
          return $(e, `standalone`);
      }
    case `assistant-message`:
    case `auto-review-interruption-warning`:
    case `context-compaction`:
    case `multi-agent-action`:
    case `realtime-transcript`:
    case `stream-error`:
    case `strict-review-notice`:
    case `subagent-activity`:
    case `system-error`:
    case `user-input-response`:
    case `user-message`:
    case `worked-for`:
    case `worktree-init`:
      return $(e, `standalone`);
    case `reasoning`:
    case `automation-update`:
    case `forked-from-conversation`:
    case `model-changed`:
    case `model-rerouted`:
    case `permission-request`:
    case `personality-changed`:
    case `plan-implementation`:
    case `proposed-plan`:
    case `remote-task-created`:
    case `todo-list`:
    case `turn-diff`:
    case `userInput`:
    case `steered`:
      return null;
  }
}
function un(e, t) {
  return e.type === `exec` &&
    et(e.executionStatus) &&
    Qe(e.parsedCmd.cmd) != null &&
    t?.type === `patch` &&
    t.visualizationActivities != null &&
    t.visualizationActivities.length > 0
    ? !0
    : e.type === `exec` &&
        e.parsedCmd.type === `read` &&
        $e(rt({ summary: e.parsedCmd, cwd: e.cwd }));
}
function $(e, t) {
  return { item: e, grouping: t };
}
function dn(e) {
  let t = e.automaticApprovalReviews;
  if (t == null) return e;
  let n = t.filter((e) => e.status !== `approved`);
  if (n.length > 0 && n.length === t.length) return e;
  let { automaticApprovalReviews: r, ...i } = e;
  return n.length === 0 ? i : { ...i, automaticApprovalReviews: n };
}
var fn = e(() => {
  (nt(), r(), ut(), De(), tt(), cn());
});
export {
  ut as _,
  on as a,
  rn as c,
  Vt as d,
  Mt as f,
  st as g,
  R as h,
  nn as i,
  an as l,
  L as m,
  fn as n,
  Q as o,
  Rt as p,
  un as r,
  cn as s,
  ln as t,
  zt as u,
  ct as v,
  lt as y,
};
//# sourceMappingURL=agent-activity-item-99bed1259d6b.js.map
