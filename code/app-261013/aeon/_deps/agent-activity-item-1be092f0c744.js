const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./result-card-13ab6b1bf430.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./result-card-f5ffc05b1d93.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./result-values-ef2b1cdba93f.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  B1 as n,
  B4 as r,
  Cat as i,
  D1 as a,
  DJ as o,
  DQ as s,
  EJ as c,
  EPt as l,
  Eut as u,
  F1 as d,
  FZ as f,
  Fv as p,
  HZ as m,
  I1 as h,
  IDt as g,
  IZ as _,
  Iv as v,
  Jbt as y,
  L$ as b,
  Lv as x,
  M0 as ee,
  Mv as te,
  Mz as S,
  Nv as ne,
  Nz as C,
  O1 as re,
  OQ as ie,
  Pv as ae,
  Pxt as oe,
  Qvt as se,
  R$ as ce,
  S2 as le,
  TLt as w,
  VZ as ue,
  X1 as de,
  Xot as fe,
  Y1 as pe,
  Yot as me,
  Zvt as he,
  _Mt as T,
  aZ as ge,
  bd as _e,
  fLt as ve,
  fPt as ye,
  gMt as E,
  gPt as be,
  gY as xe,
  hPt as Se,
  hY as Ce,
  j0 as we,
  jDt as D,
  oIt as Te,
  oZ as Ee,
  pLt as O,
  pPt as De,
  rst as Oe,
  vzt as ke,
  wLt as Ae,
  x2 as je,
  xMt as k,
  xat as Me,
  yd as Ne,
  z1 as Pe,
  z4 as Fe,
  zxt as Ie,
} from "./app-shared-bbfeca5e5737.js";
import {
  $T as Le,
  AE as Re,
  CE as ze,
  DT as Be,
  Dgr as Ve,
  Djr as He,
  EE as Ue,
  ET as We,
  Ejr as Ge,
  FE as Ke,
  GE as qe,
  HE as Je,
  JPn as Ye,
  ME as Xe,
  Mgr as Ze,
  NE as Qe,
  Ngr as $e,
  Ntn as et,
  OT as tt,
  Ogr as nt,
  Ptn as rt,
  Rrr as it,
  SE as at,
  TE as ot,
  WE as st,
  XPn as ct,
  Yk as A,
  bD as lt,
  cSr as ut,
  cyr as dt,
  dj as j,
  eE as ft,
  jE as pt,
  kE as mt,
  kgr as ht,
  lE as gt,
  lSr as _t,
  lpr as vt,
  mjr as yt,
  nE as bt,
  oE as xt,
  oSr as St,
  oyr as Ct,
  pjr as wt,
  qk as M,
  sE as Tt,
  sjr as Et,
  uj as N,
  upr as Dt,
  vD as Ot,
  vrr as kt,
  xE as At,
  yD as jt,
  yrr as Mt,
  zE as Nt,
  zrr as Pt,
} from "./app-initial-5851df3f6cb1.js";
import {
  $l as Ft,
  $m as P,
  Fh as It,
  Gm as F,
  Ih as Lt,
  Ql as Rt,
  Qm as I,
  Wm as L,
} from "./app-primary-fe8a450b3b04.js";
import {
  a as zt,
  c as R,
  d as Bt,
  f as Vt,
  h as Ht,
  i as Ut,
  m as Wt,
  p as Gt,
  u as z,
} from "./mcp-tool-activity-label-220d2d98d4ad.js";
import {
  a as Kt,
  c as qt,
  l as Jt,
  n as Yt,
  s as Xt,
  t as Zt,
} from "./skill-exploration-labels-dbc7ec897dab.js";
import { i as Qt, n as $t, r as en } from "./mcp-tool-call-approval-2041ceff5519.js";
function tn(e, t, n = !1) {
  let r = an.get(e);
  if (e === `manage_page_comment`) {
    let e = on.safeParse(t);
    e.success && e.data.action === `resolve` ? (r = v) : e.success && e.data.action === `react` && (r = a);
  }
  return r == null ? null : (0, rn.jsx)(S, { className: `shrink-0 text-text/60`, asset: n ? o : r });
}
function nn(e, t, n = !1) {
  let r = kt({
      appContext: e.appContext,
      apps: t,
      functionName: e.functionName,
      serverName: e.invocation.server,
      toolName: e.invocation.tool,
    }),
    i = Ht({
      appContext: e.appContext,
      matchingApp: r,
      serverName: e.invocation.server,
      toolName: e.invocation.tool,
    });
  return i == null
    ? null
    : (tn(
        Ut({ matchingApp: i, toolName: e.appContext?.actionName ?? e.invocation.tool }),
        e.invocation.arguments,
        n,
      ) ?? (0, rn.jsx)(S, { className: `shrink-0 text-text/60`, asset: o }));
}
var rn, an, on;
function sn() {
  return (sn = e(() => {
    (le(),
      x(),
      ee(),
      p(),
      n(),
      h(),
      re(),
      ce(),
      s(),
      ue(),
      f(),
      ge(),
      te(),
      Ce(),
      l(),
      C(),
      c(),
      zt(),
      Mt(),
      (rn = k()),
      (an = new Map([
        [`list_spaces`, o],
        [`get_space`, o],
        [`create_space`, Ee],
        [`list_pages`, ne],
        [`find_pages`, ie],
        [`create_page`, Pe],
        [`read_page`, xe],
        [`read_artifact`, d],
        [`connect_spaces_artifact`, d],
        [`read_page_reference`, d],
        [`read_page_transcript`, d],
        [`read_page_changes`, ae],
        [`edit_page`, m],
        [`create_page_visualization`, je],
        [`list_page_comments`, we],
        [`manage_page_comment`, we],
        [`search_sharing_recipients`, ie],
        [`get_page_sharing`, _],
        [`get_space_sharing`, _],
        [`update_page_sharing`, b],
        [`update_space_sharing`, b],
      ])),
      (on = O({ action: w() })));
  }))();
}
function cn({ item: e, mcpServerStatuses: t }) {
  if (e.isMcpAppWidgetSuperseded === !0 || (e.completed && e.result == null)) return `not-mcp-app`;
  if (Ct(e)?.type === `chatgpt-automation`) return `mcp-app`;
  let n = e.result?.type === `success` ? e.result.raw : null;
  return e.mcpAppResourceUri != null ||
    Et({ mcpServerStatuses: t, server: e.invocation.server, tool: e.invocation.tool, toolResult: n }) != null
    ? `mcp-app`
    : n == null
      ? `not-mcp-app`
      : t == null
        ? `maybe-mcp-app`
        : `not-mcp-app`;
}
function ln({ item: e, mcpServerStatuses: t }) {
  return (
    cn({ item: e, mcpServerStatuses: t }) === `mcp-app` &&
    !yt({ isCodexAppsServer: He(e.invocation.server), result: e.result })
  );
}
function un({ item: e, mcpServerStatuses: t }) {
  return (
    cn({ item: e, mcpServerStatuses: t }) !== `not-mcp-app` &&
    !yt({ isCodexAppsServer: He(e.invocation.server), result: e.result })
  );
}
function dn(e) {
  return e.some((e) =>
    e.kind !== `item` || e.item.type !== `mcp-tool-call`
      ? !1
      : e.item.result?.type === `success` ||
        (!e.item.completed && e.item.result == null && e.item.mcpAppResourceUri == null),
  );
}
function fn() {
  return (fn = e(() => {
    (Ge(), dt(), wt());
  }))();
}
function pn(e, t, n) {
  let r = ut.safeParse(e.arguments);
  if (!r.success) return null;
  if (t === `row` && e.completed && e.success !== !1) return (0, B.jsx)(mn, { details: r.data });
  let i;
  return (
    (i = e.completed
      ? e.success === !1
        ? (0, B.jsx)(g, {
            id: `restricted.environmentSetup.result.failed`,
            defaultMessage: `Couldn’t prepare environment draft`,
            description: `Activity shown when an environment draft could not be finalized`,
          })
        : (0, B.jsx)(g, {
            id: `restricted.environmentSetup.result.completed`,
            defaultMessage: `Prepared environment draft`,
            description: `Activity shown when an environment draft has been finalized`,
          })
      : (0, B.jsx)(g, {
          id: `restricted.environmentSetup.result.finalizing`,
          defaultMessage: `Preparing environment draft`,
          description: `Activity shown while an environment draft is being finalized`,
        })),
    (0, B.jsxs)(I, {
      className: E(
        `text-size-chat text-text/40`,
        t === `row` ? `group-hover:text-default` : `group-hover/activity-header:text-default`,
      ),
      children: [
        t === `summary-text`
          ? null
          : (n ?? (0, B.jsx)(S, { className: `shrink-0 text-text/60`, "aria-hidden": !1, asset: pe })),
        (0, B.jsx)(M, { active: !e.completed, children: i }),
      ],
    })
  );
}
var B, mn, hn;
function gn() {
  return (gn = e(() => {
    (de(),
      T(),
      j(),
      _t(),
      D(),
      C(),
      Fe(),
      A(),
      P(),
      (B = k()),
      De(),
      (mn = r(() =>
        ye(
          () => import(`./result-card-13ab6b1bf430.js`).then((e) => e.EnvironmentSetupPrototypeResultCard),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
          import.meta.url,
        ),
      )),
      (hn = [N, null].map((e) => ({
        namespace: e,
        render: pn,
        renderAgentActivityIcon: () =>
          (0, B.jsx)(S, { className: `shrink-0 text-text/60`, "aria-hidden": !1, asset: pe }),
        persistentInCollapsedConversation: !0,
        standaloneInConversation: !0,
        tool: St,
      }))));
  }))();
}
function _n(e, t) {
  let n;
  if (t.kind === `chatgpt`) n = Me(`clientThreadId` in t ? t.clientThreadId : t.threadId);
  else if (`clientThreadId` in t) n = se(t.clientThreadId);
  else {
    ct({
      event: e,
      href: `codex://threads/${encodeURIComponent(t.threadId)}`,
      initiator: `open_in_browser_bridge`,
      originHostId: t.hostId,
    });
    return;
  }
  be.dispatchHostMessage({ type: `navigate-to-route`, path: n });
}
function vn() {
  return (vn = e(() => {
    (Oe(), i(), Ye(), Se());
  }))();
}
function yn(e) {
  let t = (0, V.c)(25),
    { agentActivityIcon: n, item: r, operation: i, variant: a } = e,
    o = r != null && r.completed && r.success === !0 ? Sn(r.contentItems ?? null) : null,
    s = i == null ? (o?.operationId ?? r.callId) : i.id,
    c = Ie(We, s),
    l = i ?? c,
    u = l == null ? (o == null ? (r?.completed ?? !1) : tt(o.status)) : tt(l.status),
    d = l == null ? r?.success : l.status === `error` ? !1 : l.status === `success` || l.status === `warning`,
    f = `running`;
  u && (f = d === !1 ? `failed` : `completed`);
  let p;
  t[0] === r ? (p = t[1]) : ((p = r == null ? null : R(r)), (t[0] = r), (t[1] = p));
  let m = p,
    h;
  t[2] === m?.icon
    ? (h = t[3])
    : ((h = m?.icon ?? (0, H.jsx)(Bt, { className: `icon-xs shrink-0 text-text/60` })),
      (t[2] = m?.icon),
      (t[3] = h));
  let _ = h,
    v = null;
  if (m != null) {
    let e;
    (t[4] !== m.message || t[5] !== m.values
      ? ((e = (0, H.jsx)(g, { ...m.message, values: m.values })),
        (t[4] = m.message),
        (t[5] = m.values),
        (t[6] = e))
      : (e = t[6]),
      (v = e));
  } else if (i != null) {
    let e;
    (t[7] === i ? (e = t[8]) : ((e = (0, H.jsx)(bn, { operation: i })), (t[7] = i), (t[8] = e)), (v = e));
  }
  if (a !== `row`) {
    let e = a === `summary-text` ? null : _,
      n = r == null ? !u : !r.completed,
      i = a !== `summary-text` && `min-w-0 truncate`,
      o;
    t[9] === i ? (o = t[10]) : ((o = E(i)), (t[9] = i), (t[10] = o));
    let s;
    t[11] !== v || t[12] !== n || t[13] !== o
      ? ((s = (0, H.jsx)(M, { active: n, className: o, children: v })),
        (t[11] = v),
        (t[12] = n),
        (t[13] = o),
        (t[14] = s))
      : (s = t[14]);
    let c;
    return (
      t[15] !== e || t[16] !== s
        ? ((c = (0, H.jsxs)(I, {
            className: `text-size-chat text-text/40 group-hover/activity-header:text-default`,
            children: [e, s],
          })),
          (t[15] = e),
          (t[16] = s),
          (t[17] = c))
        : (c = t[17]),
      c
    );
  }
  let y = n ?? _,
    b;
  t[18] === l
    ? (b = t[19])
    : ((b = l?.steps.map((e) =>
        (0, H.jsx)(
          It,
          {
            compact: !0,
            direction: l.direction,
            localBranch: l.localBranch,
            sourceBranch: l.sourceBranch,
            step: e,
            worktreeBranch: l.worktreeBranch,
          },
          e.id,
        ),
      )),
      (t[18] = l),
      (t[19] = b));
  let x;
  return (
    t[20] !== f || t[21] !== v || t[22] !== y || t[23] !== b
      ? ((x = (0, H.jsx)(en, { indentContent: !1, icon: y, status: f, summary: v, children: b })),
        (t[20] = f),
        (t[21] = v),
        (t[22] = y),
        (t[23] = b),
        (t[24] = x))
      : (x = t[24]),
    x
  );
}
function bn(e) {
  let t = (0, V.c)(10),
    { operation: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = (0, H.jsx)(xn, { operation: n })), (t[0] = n), (t[1] = r));
  let i = r;
  if (n.status === `queued` || n.status === `running`) {
    let e;
    return (
      t[2] === i
        ? (e = t[3])
        : ((e = (0, H.jsx)(g, {
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
        : ((e = (0, H.jsx)(g, {
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
        : ((e = (0, H.jsx)(g, {
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
  let a;
  return (
    t[8] === i
      ? (a = t[9])
      : ((a = (0, H.jsx)(g, {
          id: `localConversation.threadHandoff.inline.completed`,
          defaultMessage: `Handed off to {destination}`,
          description: `Completed label for handing the current task to another run location`,
          values: { destination: i },
        })),
        (t[8] = i),
        (t[9] = a)),
    a
  );
}
function xn(e) {
  let t = (0, V.c)(4),
    { operation: n } = e;
  if (n.direction === `to-local`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, H.jsx)(g, {
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
        ? ((e = (0, H.jsx)(g, {
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
      : ((r = (0, H.jsx)(H.Fragment, { children: n.request.destinationLabel })),
        (t[2] = n.request.destinationLabel),
        (t[3] = r)),
    r
  );
}
function Sn(e) {
  let t = e?.find((e) => e.type === `inputText`)?.text;
  if (t == null) return null;
  try {
    let e = JSON.parse(t),
      n = Cn.safeParse(e);
    return n.success ? n.data : null;
  } catch {
    return null;
  }
}
var V, H, Cn;
function wn() {
  return (wn = e(() => {
    ((V = ke()),
      T(),
      oe(),
      D(),
      l(),
      Be(),
      Lt(),
      Vt(),
      z(),
      A(),
      P(),
      Qt(),
      (H = k()),
      (Cn = O({
        destinationHostDisplayName: w().min(1),
        operationId: w().min(1),
        status: Te([`queued`, `running`, `success`, `warning`, `error`]),
        threadTitle: w().min(1),
      })));
  }))();
}
function Tn() {
  return (0, G.jsx)(S, { className: `shrink-0 text-text/60`, asset: Ne });
}
function U(e) {
  return R(e)?.icon ?? null;
}
function En(e, t, n) {
  return An.safeParse(e.arguments).success
    ? (0, G.jsx)(yn, { agentActivityIcon: n, item: e, variant: t })
    : null;
}
function Dn(e) {
  let t = An.safeParse(e.arguments);
  return t.success ? JSON.stringify([t.data.threadId, t.data.destinationHostId ?? null]) : null;
}
function On(e) {
  let t = jn.safeParse(e.arguments);
  return t.success ? t.data.operationId : null;
}
function W(e, t, n, r = !0) {
  let i = R(e, r);
  if (i == null) return null;
  let a =
      e.tool === `create_thread` && e.completed && e.success === !0 && t === `row`
        ? kn(e.contentItems ?? null)
        : null,
    o =
      t === `row` && (e.tool === `read_thread` || e.tool === `send_message_to_thread`)
        ? Mn.safeParse(e.arguments)
        : null,
    s = o?.success === !0 ? o.data.threadId : null,
    c;
  a == null
    ? s != null &&
      (c = () => {
        let e = y(s);
        be.dispatchHostMessage({ type: `navigate-to-route`, path: Dt() ? he(e) : se(e) });
      })
    : (c = (e) => _n(e, a));
  let l = t === `row` && n !== void 0,
    u = l ? `summary-text` : t,
    d = (0, G.jsxs)(I, {
      className: E(
        `text-size-chat`,
        u === `row` ? `text-text-tertiary/90` : `text-text/40 group-hover/activity-header:text-default`,
      ),
      children: [
        u === `summary-text` ? null : U(e),
        (0, G.jsx)(M, {
          active: !e.completed,
          className: E(u !== `summary-text` && `min-w-0 truncate`, c != null && `group-hover:!text-default`),
          children: (0, G.jsx)(g, { ...i.message, values: i.values }),
        }),
      ],
    }),
    f =
      c == null
        ? d
        : (0, G.jsx)(`button`, {
            type: `button`,
            className: `group max-w-full cursor-interaction rounded-md text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
            onClick: c,
            children: d,
          });
  return l ? (0, G.jsx)(L, { icon: n, summary: f }) : f;
}
function kn(e) {
  let t = e?.find((e) => e.type === `inputText`)?.text;
  return t == null ? null : u(t);
}
var G, An, jn, Mn, Nn;
function Pn() {
  return (Pn = e(() => {
    (_e(),
      T(),
      Oe(),
      j(),
      qe(),
      ze(),
      Nt(),
      D(),
      l(),
      C(),
      vt(),
      Se(),
      F(),
      z(),
      vn(),
      A(),
      wn(),
      P(),
      (G = k()),
      (An = O({ destinationHostId: w().min(1).optional(), threadId: w().min(1) })),
      (jn = O({ operationId: w().min(1) })),
      (Mn = O({ threadId: w().min(1) })),
      (Nn = [
        { namespace: N, render: W, renderAgentActivityIcon: U, tool: Ue },
        { namespace: N, render: W, renderAgentActivityIcon: U, tool: ot },
        {
          getCompletedSummaryPartKey: Dn,
          namespace: N,
          render: En,
          renderAgentActivityIcon: U,
          standaloneInConversation: !0,
          tool: at,
        },
        {
          getCompletedSummaryPartKey: On,
          namespace: N,
          render: W,
          renderAgentActivityIcon: U,
          summaryOnlyInConversationGroup: !0,
          tool: At,
        },
        {
          continuesLiveActivityBetweenCalls: !0,
          namespace: N,
          render: W,
          renderAgentActivityIcon: U,
          tool: mt,
        },
        {
          continuesLiveActivityBetweenCalls: !0,
          namespace: N,
          render: W,
          renderAgentActivityIcon: U,
          tool: Re,
        },
        { namespace: N, render: W, renderAgentActivityIcon: U, tool: pt },
        { namespace: N, render: W, renderAgentActivityIcon: U, tool: Qe },
        { namespace: N, render: W, renderAgentActivityIcon: U, tool: Xe },
        { namespace: N, render: W, renderAgentActivityIcon: U, tool: Ke },
        { namespace: N, renderAgentActivityIcon: Tn, tool: Je },
        { namespace: N, renderAgentActivityIcon: Tn, tool: st },
      ]));
  }))();
}
var Fn;
function In() {
  return (In = e(() => {
    (Pn(), (Fn = Nn.filter(({ tool: e }) => e === `create_thread`).map((e) => ({ ...e, namespace: null }))));
  }))();
}
var Ln;
function Rn() {
  return (Rn = e(() => {
    (j(), gt(), (Ln = [N, null].map((e) => ({ namespace: e, tool: Tt, hiddenInConversation: !0 }))));
  }))();
}
var K, zn;
function Bn() {
  return (Bn = e(() => {
    (j(),
      xt(),
      ft(),
      Wt(),
      sn(),
      (K = {
        namespace: N,
        tool: Le,
        getActivityMessage: (e, t) =>
          Gt({ tool: e.tool, toolArguments: e.arguments, completed: e.completed, isLeadingSummaryPart: t }),
        renderAgentActivityIcon: (e, t) => tn(e.tool, e.arguments, t),
        getCompletedSummaryPartKey: (e) =>
          Gt({ tool: e.tool, toolArguments: e.arguments, completed: !0 })?.id ?? null,
      }),
      (zn = [K, { ...K, tool: bt }, { ...K, tool: `read_artifact` }]));
  }))();
}
function Vn(e, t) {
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
function Hn() {
  return (Hn = e(() => {}))();
}
function Un(e) {
  let t = (0, q.c)(25),
    { item: n, isLeadingSummaryPart: r, tabId: i, variant: a, agentActivityIcon: o } = e,
    s = r === void 0 || r,
    { data: c } = Gn(n, i),
    l = c?.faviconUrl ?? null,
    u = c?.title ?? null,
    d;
  if (u != null) {
    let e;
    (t[0] !== s || t[1] !== n.completed || t[2] !== u
      ? ((e = n.completed
          ? (0, J.jsx)(g, {
              ...(s ? Y.completedWithTitle : Y.completedWithTitleFollowing),
              values: { title: u },
            })
          : (0, J.jsx)(g, { ...Y.activeWithTitle, values: { title: u } })),
        (t[0] = s),
        (t[1] = n.completed),
        (t[2] = u),
        (t[3] = e))
      : (e = t[3]),
      (d = e));
  } else {
    let e;
    (t[4] !== s || t[5] !== n.completed
      ? ((e = n.completed
          ? (0, J.jsx)(g, { ...(s ? Y.completed : Y.completedFollowing) })
          : (0, J.jsx)(g, { ...Y.active })),
        (t[4] = s),
        (t[5] = n.completed),
        (t[6] = e))
      : (e = t[6]),
      (d = e));
  }
  let f = !n.completed,
    p = a !== `summary-text` && `min-w-0 truncate`,
    m;
  t[7] === p ? (m = t[8]) : ((m = E(p)), (t[7] = p), (t[8] = m));
  let h;
  t[9] !== d || t[10] !== f || t[11] !== m
    ? ((h = (0, J.jsx)(M, { active: f, className: m, children: d })),
      (t[9] = d),
      (t[10] = f),
      (t[11] = m),
      (t[12] = h))
    : (h = t[12]);
  let _ = h;
  if (a === `row` && o !== void 0) {
    let e;
    return (
      t[13] !== o || t[14] !== _
        ? ((e = (0, J.jsx)(L, { icon: o, summary: _ })), (t[13] = o), (t[14] = _), (t[15] = e))
        : (e = t[15]),
      e
    );
  }
  let v = a === `row` ? `text-text-tertiary/90` : `text-text/40 group-hover/activity-header:text-default`,
    y;
  t[16] === v ? (y = t[17]) : ((y = E(`text-size-chat`, v)), (t[16] = v), (t[17] = y));
  let b;
  t[18] !== l || t[19] !== a
    ? ((b =
        a !== `summary-text` && l != null
          ? (0, J.jsx)(et, { src: l, className: `icon-xs text-tertiary`, showFallbackWhileLoading: !1 })
          : null),
      (t[18] = l),
      (t[19] = a),
      (t[20] = b))
    : (b = t[20]);
  let x;
  return (
    t[21] !== _ || t[22] !== y || t[23] !== b
      ? ((x = (0, J.jsxs)(I, { className: y, children: [b, _] })),
        (t[21] = _),
        (t[22] = y),
        (t[23] = b),
        (t[24] = x))
      : (x = t[24]),
    x
  );
}
function Wn(e) {
  let t = (0, q.c)(2),
    { item: n, tabId: r } = e,
    { data: i } = Gn(n, r),
    a;
  return (
    t[0] === i
      ? (a = t[1])
      : ((a =
          i?.faviconUrl == null
            ? null
            : (0, J.jsx)(et, {
                src: i.faviconUrl,
                className: `icon-xs text-tertiary`,
                showFallbackWhileLoading: !1,
              })),
        (t[0] = i),
        (t[1] = a)),
    a
  );
}
function Gn(e, t) {
  let n = (0, q.c)(9),
    r = !e.completed,
    i;
  n[0] === t ? (i = n[1]) : ((i = () => Kn(t)), (n[0] = t), (n[1] = i));
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
    fe(o)
  );
}
async function Kn(e) {
  let t = ht();
  if (t?.tabs == null) return null;
  try {
    let n = await t.tabs.get(e);
    return { faviconUrl: Vn(n, t.runtime), title: n.title?.trim() || null };
  } catch {
    return null;
  }
}
var q, J, Y;
function qn() {
  return (qn = e(() => {
    ((q = ke()),
      me(),
      T(),
      D(),
      Hn(),
      rt(),
      F(),
      A(),
      P(),
      (J = k()),
      (Y = t({
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
  }))();
}
function Jn(e) {
  let t = X.safeParse(e.arguments);
  return t.success ? (0, Zn.jsx)(Wn, { item: e, tabId: t.data.tabId }) : null;
}
function Yn(e, t, n, r = !0) {
  let i = X.safeParse(e.arguments);
  return i.success
    ? (0, Zn.jsx)(Un, {
        item: e,
        isLeadingSummaryPart: r,
        tabId: i.data.tabId,
        variant: t,
        agentActivityIcon: n,
      })
    : null;
}
function Xn(e) {
  return X.safeParse(e.arguments).success ? e.callId : null;
}
var Zn, X, Qn;
function $n() {
  return ($n = e(() => {
    (l(),
      $e(),
      nt(),
      qn(),
      (Zn = k()),
      (X = Ae({ tabId: ve().int().nonnegative() })),
      (Qn = [
        { getCompletedSummaryPartKey: Xn, namespace: Ze, render: Yn, renderAgentActivityIcon: Jn, tool: Ve },
      ]));
  }))();
}
function er() {
  return (0, Z.jsx)(S, { className: `shrink-0 text-text/60`, "aria-hidden": !1, asset: b });
}
function tr(e, t, n, r = !0) {
  let i = R(e, r);
  if (i == null) return null;
  let a =
    !e.completed && e.tool === `write_settings` && nr.safeParse(e.arguments).success
      ? (0, Z.jsx)(g, {
          id: `localConversation.settingsToolCall.write.waitingForApproval`,
          defaultMessage: `Waiting for approval`,
          description: `In-progress label while a Codex configuration change is waiting for user approval.`,
        })
      : (0, Z.jsx)(g, { ...i.message, values: i.values });
  return t === `row` && n !== void 0
    ? (0, Z.jsx)(L, {
        icon: n,
        summary: (0, Z.jsx)(M, { active: !e.completed, className: `min-w-0 truncate`, children: a }),
      })
    : (0, Z.jsxs)(I, {
        className: E(
          `text-size-chat`,
          t === `row` ? `text-text-tertiary/90` : `text-text/40 group-hover/activity-header:text-default`,
        ),
        children: [
          t === `summary-text` ? null : er(),
          (0, Z.jsx)(M, {
            active: !e.completed,
            className: E(t !== `summary-text` && `min-w-0 truncate`),
            children: a,
          }),
        ],
      });
}
var Z, nr, rr;
function ir() {
  return (ir = e(() => {
    (ce(),
      T(),
      j(),
      lt(),
      D(),
      l(),
      C(),
      F(),
      z(),
      A(),
      P(),
      (Z = k()),
      (nr = O({ config: O({}) })),
      (rr = [
        { namespace: N, render: tr, renderAgentActivityIcon: er, tool: Ot },
        { namespace: N, render: tr, renderAgentActivityIcon: er, tool: jt },
      ]));
  }))();
}
function Q(e) {
  return lr.find((t) => t.namespace === e.namespace && t.tool === e.tool);
}
function ar(e) {
  return Q(e)?.continuesLiveActivityBetweenCalls === !0;
}
function or(e) {
  return Q(e)?.persistentInCollapsedConversation === !0;
}
function sr(e) {
  return Q(e)?.summaryOnlyInConversationGroup === !0;
}
function cr(e) {
  let t = R(e),
    n = Q(e)?.getCompletedSummaryPartKey?.(e);
  return `${e.namespace}:${e.tool}:${n ?? ``}:${t?.key ?? ``}`;
}
var lr;
function ur() {
  return (ur = e(() => {
    (gn(), In(), Rn(), Bn(), $n(), z(), ir(), Pn(), (lr = [...Qn, ...Nn, ...Fn, ...hn, ...rr, ...Ln, ...zn]));
  }))();
}
function dr(e, { dynamicToolCallRenderer: t, includeGeneratedImages: n = !1, mcpServerStatuses: r } = {}) {
  switch (e.type) {
    case `external-event`:
      return $(e, `groupable`);
    case `exec`:
    case `patch`:
      return $(pr(e), Ft(e) ? `standalone` : `groupable`);
    case `mcp-tool-call`:
      return $(pr(e), $t(e) || ln({ item: e, mcpServerStatuses: r }) ? `standalone` : `groupable`);
    case `web-search`:
      return e.query.trim().length === 0 ? null : $(e, `groupable`);
    case `dynamic-tool-call`: {
      let n = t ?? Q(e);
      return n?.hiddenInConversation === !0
        ? null
        : $(e, n?.standaloneInConversation === !0 ? `standalone` : `groupable`);
    }
    case `generated-image`:
      return n ? $(e, `standalone`) : null;
    case `image-view`:
      return $(e, `standalone`);
    case `mcp-server-elicitation`:
      return !e.completed || e.elicitation.kind === `unsupportedOpenAIForm`
        ? null
        : $(
            e,
            e.elicitation.kind === `legacyOpenAIForm` &&
              Object.values(e.elicitation.schema.properties).some(Pt)
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
    case `dil-reasoning`:
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
function fr(e, t) {
  return e.type === `exec` &&
    Jt(e.executionStatus) &&
    Kt(e.parsedCmd.cmd) != null &&
    t?.type === `patch` &&
    t.visualizationActivities != null &&
    t.visualizationActivities.length > 0
    ? !0
    : e.type === `exec` && e.parsedCmd.type === `read` && qt(Zt({ summary: e.parsedCmd, cwd: e.cwd }));
}
function $(e, t) {
  return { item: e, grouping: t };
}
function pr(e) {
  let t = e.automaticApprovalReviews;
  if (t == null) return e;
  let n = t.filter((e) => e.status !== `approved`);
  if (n.length > 0 && n.length === t.length) return e;
  let { automaticApprovalReviews: r, ...i } = e;
  return n.length === 0 ? i : { ...i, automaticApprovalReviews: n };
}
function mr() {
  return (mr = e(() => {
    (it(), Xt(), Rt(), fn(), Yt(), ur());
  }))();
}
export {
  dn as _,
  cr as a,
  or as c,
  wn as d,
  vn as f,
  un as g,
  fn as h,
  ar as i,
  sr as l,
  ln as m,
  mr as n,
  Q as o,
  _n as p,
  fr as r,
  ur as s,
  dr as t,
  yn as u,
  nn as v,
  sn as y,
};
//# sourceMappingURL=agent-activity-item-1be092f0c744.js.map
