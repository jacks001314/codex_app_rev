import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import { t as n } from "./react-d6ffadc57208.js";
import { t as r } from "./compiler-runtime-292acb85cdd3.js";
import { n as i, t as a } from "./logger-9aedc477fd8d.js";
import {
  $K as o,
  $Q as s,
  $Rt as c,
  $Tt as l,
  A6t as u,
  Ann as d,
  BG as f,
  BU as p,
  C6t as m,
  CU as h,
  CX as g,
  Co as _,
  Cq as v,
  DN as y,
  DX as b,
  EU as x,
  Ewt as S,
  FTt as ee,
  FXt as C,
  Ft as te,
  G2 as ne,
  GU as w,
  HNt as re,
  HU as ie,
  It as ae,
  Jot as T,
  K2 as oe,
  K6t as se,
  LPt as ce,
  LU as le,
  Lt as ue,
  MQ as de,
  MTt as E,
  NQ as fe,
  O6t as D,
  ON as O,
  ONt as pe,
  Pt as me,
  QK as he,
  Qq as ge,
  RPt as _e,
  RU as ve,
  SU as ye,
  Sft as be,
  Son as xe,
  Spt as Se,
  Sq as Ce,
  T6t as we,
  Tft as Te,
  Twt as Ee,
  U6t as De,
  UPt as Oe,
  VU as ke,
  WPt as Ae,
  Wq as je,
  Xq as Me,
  Yq as Ne,
  _6t as Pe,
  _ft as Fe,
  _on as k,
  _q as A,
  a as Ie,
  aEt as Le,
  aZ as Re,
  bXt as ze,
  bq as Be,
  c as Ve,
  c$ as He,
  cEt as Ue,
  cYt as We,
  d as Ge,
  dNt as Ke,
  eEt as qe,
  fNt as Je,
  fVt as Ye,
  gNt as Xe,
  gon as j,
  gq as Ze,
  hft as Qe,
  hq as $e,
  iEt as et,
  iX as tt,
  iZ as nt,
  izt as M,
  mEt as rt,
  mVt as it,
  mq as at,
  n6t as N,
  nnn as P,
  pEt as ot,
  qot as F,
  qq as st,
  rEt as ct,
  rX as lt,
  u as ut,
  uVt as dt,
  uYt as ft,
  vVt as pt,
  vft as mt,
  vpt as ht,
  vq as gt,
  wft as _t,
  wo as vt,
  xNt as yt,
  xft as bt,
  xpt as I,
  xq as xt,
  yVt as St,
  ypt as Ct,
  yq as L,
  zG as wt,
} from "./app-initial-bcc2ff475eb6.js";
import { t as Tt } from "./jsx-runtime-a96621a2647a.js";
import { n as Et, t as R } from "./clsx-40813b86294f.js";
import {
  Bw as z,
  Iw as Dt,
  Jw as Ot,
  Lw as kt,
  QC as B,
  QT as V,
  UC as H,
  Vw as U,
  WC as At,
  Xw as jt,
  Yw as Mt,
  ZC as Nt,
  ZT as Pt,
  _T as Ft,
  bT as It,
  cd as W,
  eE as Lt,
  iE as Rt,
  sd as G,
  tE as zt,
  vT as Bt,
  zw as K,
} from "./app-primary-b36a719dba75.js";
import { Wn as Vt, pl as Ht, sa as Ut, t as Wt } from "./src-996ff3571e1f.js";
import {
  Cr as Gt,
  Hn as Kt,
  Vn as qt,
  fl as Jt,
  od as Yt,
  pl as Xt,
  sd as Zt,
  wr as Qt,
} from "./shared-icons-693ab6da8dfa.js";
import { r as $t, t as en } from "./tooltip-779782db7c30.js";
import { n as tn, t as nn } from "./button-6325b3939f12.js";
import { n as q, t as rn } from "./automation-status-messages-b5e4fcc4ced9.js";
import { n as an, t as on } from "./open-automation-side-panel-tab-681ae6b81fd1.js";
import { n as sn, t as cn } from "./webmcp-tool-calls-9d2f2272479b.js";
import { i as ln, n as un, r as dn, t as fn } from "./tool-activity-disclosure-19dc67d41057.js";
import { n as pn, t as mn } from "./computer-use-native-app-metadata-134ac526b8e6.js";
function hn({ mcpAppResourceUri: e, pluginId: t, plugins: n, serverName: r }) {
  if (e == null || t == null || qe(r)) return null;
  let i = n.find((e) => e.plugin.id === t) ?? null;
  return i == null ? null : { alt: F(i), logoUrl: i.composerIconPath ?? i.logoPath };
}
var gn = e(() => {
  (T(), l());
});
function _n(e, t) {
  e.set(J, bn(t), t);
}
function vn(e, t, n) {
  e.set(Sn, t, n);
}
function yn({ callId: e, conversationId: t }) {
  return `${t}${xn}${e}`;
}
function bn(e) {
  let t = e.indexOf(xn);
  return t === -1 ? e : e.slice(0, t);
}
var xn,
  J,
  Sn,
  Cn,
  wn = e(() => {
    (m(),
      M(),
      (xn = `\0`),
      (J = se(c, (e) => null)),
      (Sn = se(c, (e) => null)),
      (Cn = De(c, (e, { get: t }) => e != null && t(J, bn(e)) === e)));
  });
function Tn(e, t, n) {
  let r = t != null && ie(t.automation) === `completed`,
    i = !r && (t?.automation.is_enabled ?? e.isEnabled),
    a = t == null ? e.title : le(t);
  if (!i)
    return {
      isEnabled: i,
      nextRunAt: null,
      scheduleLabel: r ? n.formatMessage(rn.completed) : n.formatMessage(rn.paused),
      title: a,
    };
  let o = t?.automation.schedule ?? e.schedule,
    s = (/^DTSTART[;:]/m.test(o) && !/^RRULE:/m.test(o)) || /(?:^|[;:])COUNT=1(?:;|$)/m.test(p(o)),
    c;
  return (
    (c = s
      ? (t == null ? e.displaySchedule : t.automation.display_schedule)?.trim() ||
        n.formatMessage({
          id: `chatgpt.automation.oneTimeSchedule`,
          defaultMessage: `Once`,
          description: `Schedule summary for a task that runs only once`,
        })
      : t == null
        ? e.displaySchedule?.trim() ||
          E({
            rrule: p(e.schedule),
            intl: n,
            fallbackMessage: n.formatMessage({
              id: `settings.automations.rruleSummaryFallback`,
              defaultMessage: `Custom schedule`,
              description: `Fallback label when RRULE summary cannot be generated`,
            }),
          })
        : ke(t, n)),
    {
      isEnabled: i,
      nextRunAt: t == null ? (e.nextRunAt ?? null) : ve(t),
      scheduleLabel: c,
      title: a,
    }
  );
}
var En = e(() => {
  (ee(), q(), w());
});
function Dn(e) {
  let t = (0, On.c)(30),
    { automation: n } = e,
    r = we(c),
    i = xe(),
    a = (0, kn.useId)(),
    o = D(ye, n.id),
    s,
    l,
    u,
    d,
    f,
    p,
    m,
    h,
    g,
    _,
    v;
  if (t[0] !== n || t[1] !== o || t[2] !== a || t[3] !== i || t[4] !== r) {
    let { isEnabled: e, nextRunAt: c, scheduleLabel: y, title: b } = Tn(n, o, i);
    v = b;
    let x = !!y || c != null;
    ((s = nn),
      (l = `max-w-full self-start`),
      (u = !0),
      (d = x ? a : void 0),
      (f = v),
      (p = `outline`),
      (m = `large`),
      (h = v),
      (g = () => {
        (o ?? r.queryClient.invalidateQueries({ queryKey: [`cloud-automations`] }),
          an({ scope: r, automationId: n.id, title: v }));
      }),
      (_ = x
        ? (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsxs)(`span`, {
                id: a,
                className: R(`flex min-w-0 items-center gap-1`, e ? `text-info` : `text-tertiary`),
                children: [
                  y ? (0, Y.jsx)(`span`, { className: `truncate`, children: y }) : null,
                  y && c != null ? (0, Y.jsx)(ae, { className: `shrink-0 text-tertiary` }) : null,
                  c == null
                    ? null
                    : (0, Y.jsx)(`span`, {
                        className: `truncate`,
                        children: (0, Y.jsx)(k, {
                          id: `chatgpt.automation.nextRun`,
                          defaultMessage: `Next {nextRunAt, date, ::MMMd}, {nextRunAt, time, short}`,
                          description: `Next scheduled run of a task, with a compact date and time in the user's locale`,
                          values: { nextRunAt: new Date(c) },
                        }),
                      }),
                ],
              }),
              (0, Y.jsx)(ae, { className: `shrink-0 text-tertiary` }),
            ],
          })
        : null),
      (t[0] = n),
      (t[1] = o),
      (t[2] = a),
      (t[3] = i),
      (t[4] = r),
      (t[5] = s),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p),
      (t[11] = m),
      (t[12] = h),
      (t[13] = g),
      (t[14] = _),
      (t[15] = v));
  } else
    ((s = t[5]),
      (l = t[6]),
      (u = t[7]),
      (d = t[8]),
      (f = t[9]),
      (p = t[10]),
      (m = t[11]),
      (h = t[12]),
      (g = t[13]),
      (_ = t[14]),
      (v = t[15]));
  let y;
  t[16] === v
    ? (y = t[17])
    : ((y = (0, Y.jsx)(`span`, { className: `min-w-0 flex-1 truncate text-default`, children: v })),
      (t[16] = v),
      (t[17] = y));
  let b;
  return (
    t[18] !== s ||
    t[19] !== l ||
    t[20] !== y ||
    t[21] !== u ||
    t[22] !== d ||
    t[23] !== f ||
    t[24] !== p ||
    t[25] !== m ||
    t[26] !== h ||
    t[27] !== g ||
    t[28] !== _
      ? ((b = (0, Y.jsxs)(s, {
          className: l,
          allowShrink: u,
          "aria-describedby": d,
          "aria-label": f,
          color: p,
          size: m,
          title: h,
          onClick: g,
          children: [_, y],
        })),
        (t[18] = s),
        (t[19] = l),
        (t[20] = y),
        (t[21] = u),
        (t[22] = d),
        (t[23] = f),
        (t[24] = p),
        (t[25] = m),
        (t[26] = h),
        (t[27] = g),
        (t[28] = _),
        (t[29] = b))
      : (b = t[29]),
    b
  );
}
var On,
  kn,
  Y,
  An = e(() => {
    ((On = r()), Et(), m(), (kn = t(n(), 1)), j(), x(), on(), ue(), tn(), M(), En(), (Y = Tt()));
  });
function jn(e) {
  let t = (0, Nn.c)(22),
    { automations: n } = e,
    r = C(),
    { data: i, isSuccess: a } = u(h),
    o,
    s,
    c,
    l;
  if (t[0] !== n || t[1] !== i || t[2] !== a) {
    let e =
      a && i.isAvailable
        ? n.filter((e) => {
            let { id: t } = e;
            return i.items.some((e) => {
              let { automation: n } = e;
              return n.id === t;
            });
          })
        : n;
    c = `w-full max-w-sm overflow-hidden rounded-2xl border border-default bg-surface`;
    let r;
    (t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, X.jsx)(me, { "aria-hidden": `true`, className: `icon-sm shrink-0` })), (t[7] = r))
      : (r = t[7]),
      t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((l = (0, X.jsxs)(`header`, {
            className: `flex items-center gap-2 border-b border-subtle px-4 py-3 text-sm text-secondary select-none`,
            children: [
              r,
              (0, X.jsx)(`h2`, {
                className: `text-sm font-medium uppercase`,
                children: (0, X.jsx)(k, {
                  id: `automations.scheduled.destination.label`,
                  defaultMessage: `Scheduled`,
                  description: `Title of the Scheduled destination and the compact scheduled-task list in a conversation`,
                }),
              }),
            ],
          })),
          (t[8] = l))
        : (l = t[8]),
      (o = `px-4`),
      (s = e.slice(0, Fn).map(Mn)),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l));
  } else ((o = t[3]), (s = t[4]), (c = t[5]), (l = t[6]));
  let d;
  t[9] === r
    ? (d = t[10])
    : ((d = () => {
        r(`/automations`);
      }),
      (t[9] = r),
      (t[10] = d));
  let f;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, X.jsx)(k, {
        id: `automations.list.seeAllTasks`,
        defaultMessage: `See all tasks`,
        description: `Button in a compact scheduled-task conversation list that opens the Scheduled destination`,
      })),
      (t[11] = f))
    : (f = t[11]);
  let p;
  t[12] === d
    ? (p = t[13])
    : ((p = (0, X.jsx)(`li`, {
        children: (0, X.jsx)(`button`, {
          type: `button`,
          className: `w-full cursor-interaction py-3 text-start text-sm text-tertiary select-none hover:text-default`,
          onClick: d,
          children: f,
        }),
      })),
      (t[12] = d),
      (t[13] = p));
  let m;
  t[14] !== o || t[15] !== s || t[16] !== p
    ? ((m = (0, X.jsxs)(`ul`, { className: o, children: [s, p] })),
      (t[14] = o),
      (t[15] = s),
      (t[16] = p),
      (t[17] = m))
    : (m = t[17]);
  let g;
  return (
    t[18] !== c || t[19] !== l || t[20] !== m
      ? ((g = (0, X.jsxs)(`section`, { className: c, children: [l, m] })),
        (t[18] = c),
        (t[19] = l),
        (t[20] = m),
        (t[21] = g))
      : (g = t[21]),
    g
  );
}
function Mn(e) {
  return (0, X.jsx)(In, { automation: e }, e.id);
}
var Nn,
  Pn,
  X,
  Fn,
  In,
  Ln = e(() => {
    ((Nn = r()),
      m(),
      (Pn = t(n(), 1)),
      j(),
      ze(),
      x(),
      on(),
      Re(),
      te(),
      M(),
      En(),
      (X = Tt()),
      (Fn = 5),
      (In = (0, Pn.memo)(function (e) {
        let t = (0, Nn.c)(19),
          { automation: n } = e,
          r = we(c),
          i = xe(),
          a = D(ye, n.id),
          o;
        t[0] !== n || t[1] !== a || t[2] !== i
          ? ((o = Tn(n, a, i)), (t[0] = n), (t[1] = a), (t[2] = i), (t[3] = o))
          : (o = t[3]);
        let { scheduleLabel: s, title: l } = o,
          u;
        t[4] !== n.id || t[5] !== r || t[6] !== l
          ? ((u = () => {
              an({ scope: r, automationId: n.id, title: l });
            }),
            (t[4] = n.id),
            (t[5] = r),
            (t[6] = l),
            (t[7] = u))
          : (u = t[7]);
        let d;
        t[8] === l
          ? (d = t[9])
          : ((d = (0, X.jsx)(`span`, { className: `truncate text-sm text-default`, children: l })),
            (t[8] = l),
            (t[9] = d));
        let f;
        t[10] === s
          ? (f = t[11])
          : ((f =
              s == null || s.length === 0
                ? null
                : (0, X.jsx)(`span`, { className: `truncate text-sm text-tertiary`, children: s })),
            (t[10] = s),
            (t[11] = f));
        let p;
        t[12] !== d || t[13] !== f
          ? ((p = (0, X.jsxs)(`span`, {
              className: `flex min-w-0 flex-col gap-0.5`,
              children: [d, f],
            })),
            (t[12] = d),
            (t[13] = f),
            (t[14] = p))
          : (p = t[14]);
        let m;
        t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((m = (0, X.jsx)(nt, {
              "aria-hidden": `true`,
              className: `icon-sm shrink-0 text-tertiary`,
            })),
            (t[15] = m))
          : (m = t[15]);
        let h;
        return (
          t[16] !== u || t[17] !== p
            ? ((h = (0, X.jsx)(`li`, {
                className: `border-b border-subtle`,
                children: (0, X.jsxs)(`button`, {
                  type: `button`,
                  className: `flex w-full min-w-0 cursor-interaction items-center justify-between gap-4 py-3 text-start hover:text-default`,
                  onClick: u,
                  children: [p, m],
                }),
              })),
              (t[16] = u),
              (t[17] = p),
              (t[18] = h))
            : (h = t[18]),
          h
        );
      })));
  });
function Rn({
  item: e,
  conversationId: t,
  expandedContentOnly: n = !1,
  hideTextBlocksWithStructuredContent: r = !1,
  hostId: i,
  loadRemoteLogos: a = !0,
  matchingApp: o,
  onExpand: s,
  renderMcpApps: l = !0,
  shouldAutoExpandMcpApp: f = !1,
  summary: p = null,
  summaryIcon: m,
  toolActivityTurnKey: h,
}) {
  let _ = we(c),
    v = xe(),
    { platform: b } = Ae(),
    x = l && oe() && e.isMcpAppWidgetSuperseded !== !0,
    S = Ut(e.callId),
    ee = yn({ callId: e.callId, conversationId: t }),
    C = D(Sn, ee),
    te = ft(`3350594700`);
  ft(`2957382457`);
  let ne = u(vt),
    w = qe(e.invocation.server),
    re = w && e.appContext != null ? e.callId : null,
    ie = D(Bt, i),
    ae = rt({ isCodexAppsServer: w, result: e.result }),
    T = e.result?.type === `success` && !ae ? e.result.raw : null,
    se = (0, Q.useRef)(null);
  T != null && (se.current = T);
  let ce = T ?? se.current,
    { elementHeightPx: le, elementRef: ue } = ln(),
    E = e.result?.type === `success` ? e.result.content : null,
    fe = e.result?.type === `error` ? e.result.error : null,
    O = Ye({ item: e, platform: b }),
    me = O?.nativeAppReference ?? null,
    ge = pn(me),
    { iconSmall: ve } = At({ appPath: ge?.appPath ?? null }),
    ye = m === void 0 ? ut(e, o == null ? [] : [o])?.icon : m,
    Se = Ie({
      appContext: e.appContext,
      completed: e.completed,
      intl: v,
      toolName: e.invocation.tool,
      serverName: e.invocation.server,
      matchingApp: o ?? null,
      nativeDesktopAppMetadata: ge,
      platform: b,
      source: e.source,
      toolArguments: e.invocation.arguments,
      toolResult: e.result,
    }),
    Te = e.source?.kind === `browserUse` && T != null ? dt(T._meta) : null,
    Ee =
      ne && !n && e.completed && Ht(e.invocation.server) && e.invocation.tool === `js` && T != null
        ? cn(T._meta)
        : [],
    De = Ue({
      mcpServerStatuses: void 0,
      server: e.invocation.server,
      tool: e.invocation.tool,
      toolResult: T,
    }),
    Oe = x && (w || e.mcpAppResourceUri == null || De != null || C === !0 || f),
    ke = D(Mt, { hostId: i, conversationId: t }),
    { data: Ne, isLoading: A } = D(
      jt,
      {
        appContext: e.appContext,
        hostId: i,
        invocationResourceUri: e.invocationResourceUri,
        server: e.invocation.server,
        threadId: ke,
        tool: e.invocation.tool,
      },
      { enabled: Oe },
    ),
    Re = Ue({
      invocationResourceUri: e.invocationResourceUri,
      mcpServerStatuses: Ne,
      server: e.invocation.server,
      tool: e.invocation.tool,
      toolResult: A ? null : ce,
    }),
    ze = w
      ? ct({
          invocationResourceUri: e.invocationResourceUri,
          mcpServerStatuses: Ne,
          server: e.invocation.server,
          tool: e.invocation.tool,
        })
      : null,
    Ve = re == null ? null : (e.appContext?.resourceUri ?? null),
    He =
      Ue({
        invocationResourceUri: e.invocationResourceUri,
        mcpServerStatuses: Ne,
        server: e.invocation.server,
        tool: e.invocation.tool,
        toolResult: A ? null : T,
      })?.resourceUri ??
      e.mcpAppResourceUri ??
      null,
    We = (0, Q.useRef)(null);
  Re != null && (We.current = Re);
  let Ge = Re ?? We.current,
    Ke = Ve ?? Ge?.resourceUri ?? e.mcpAppResourceUri ?? null,
    Xe = _e({ enabled: He != null && e.pluginId != null && !w, hostId: i }),
    { data: j } = yt({ enabled: Xe, hostId: i, roots: void 0, resolveActiveRoots: !0 }),
    $e = j?.find(
      ({ plugin: t }) =>
        t.id === e.pluginId || (te && t.remotePluginId != null && t.remotePluginId === e.pluginId),
    ),
    tt = Xe && j != null && e.pluginId != null && $e == null,
    nt = _.query.getOptions(Je, {
      hostId: i,
      marketplacePath: null,
      pluginName: tt ? (e.pluginId ?? null) : null,
      remoteMarketplaceName: Vt,
    }),
    { data: M } = Pe({ ...nt, enabled: tt && nt.enabled, retry: !1 }),
    it = M == null ? null : pe(M),
    N = hn({
      mcpAppResourceUri: He,
      pluginId: it?.plugin.id ?? $e?.plugin.id ?? e.pluginId,
      plugins: tt && it != null ? [it] : (j ?? []),
      serverName: e.invocation.server,
    }),
    P = Ve ?? Ge?.resourceUri ?? (A ? null : e.mcpAppResourceUri) ?? null,
    ot = D(zt, S),
    F = x && Ke != null && !ae && (!e.completed || ce != null);
  x && ot != null && (F = !0);
  let [lt, pt] = (0, Q.useState)(!1),
    {
      data: bt,
      error: xt,
      isLoading: St,
      refetch: Ct,
    } = It({
      connectorId: ze ?? null,
      hostId: i,
      originCallId: re,
      server: e.invocation.server,
      threadId: t,
      uri: Ke,
      enabled: F && (re == null || e.completed),
    }),
    L = (0, Q.useMemo)(() => Le(bt), [bt]),
    wt = (0, Q.useRef)(null);
  L != null && (wt.current = L);
  let Tt = L ?? wt.current,
    Et = re != null && ie !== `legacy` ? L : Tt,
    z = F && (P == null || (Et == null && (A || St))),
    Ot = D(Rt, S),
    B = et({
      hasResourceError: xt != null,
      isDilEnabled: !1,
      isResourceLoading: z,
      renderData: Et,
      resourceUri: P,
      shouldRenderMcpApp: F,
    }),
    V = B.kind === `html` ? B.renderData : null,
    H = V?.isCollapsible ?? !0,
    U = B.kind !== `fallback`,
    Ft = B.kind === `html` ? Ot : B.kind,
    W = Ft === `pending`,
    Lt = Ft === `launcher`,
    G = W || Lt,
    K = Ft === `inline`,
    Wt = f && F,
    qt = U && !Lt && (!H || (C ?? (lt || Wt))),
    Jt = qt && !W,
    Yt = lt || (C ?? Wt),
    [Qt, $t] = (0, Q.useState)(!1),
    tn = K && Jt && Qt,
    q = !G && (n || (U ? Jt : Yt)),
    { displayContent: rn, displayStructuredContentJson: an } = (0, Q.useMemo)(() => {
      if (!q) return { displayContent: E, displayStructuredContentJson: null };
      let t =
          e.result?.type === `success` && e.result.structuredContent != null
            ? Z(e.result.structuredContent, 2)
            : null,
        n = r && t != null && E != null ? E.filter((e) => e.type !== `text`) : E,
        i = Un(n);
      return i == null
        ? { displayContent: n, displayStructuredContentJson: t }
        : t == null || i === t
          ? { displayContent: [], displayStructuredContentJson: t ?? i }
          : { displayContent: n, displayStructuredContentJson: t };
    }, [E, r, q, e.result]),
    [on, sn] = (0, Q.useState)(!1),
    un = (0, Q.useMemo)(
      () =>
        on
          ? Z(
              {
                callId: e.callId,
                invocation: e.invocation,
                durationMs: e.durationMs,
                result: e.result,
              },
              2,
            )
          : null,
      [on, e.callId, e.invocation, e.durationMs, e.result],
    ),
    dn = v.formatMessage({
      id: `codex.mcpTool.rawOutputTriggerTooltip`,
      defaultMessage: `Show raw tool call output`,
      description: `Tooltip for the button that opens the raw MCP tool output dialog`,
    }),
    fn = e.completed || e.result != null || U,
    mn = q ? le : 0,
    gn = (0, $.jsx)(Me, {
      active: !e.completed,
      className: R(
        `text-text-tertiary/90 group-hover/activity-header:text-default`,
        `text-size-chat min-w-0 shrink truncate`,
      ),
      children: (0, $.jsx)(k, {
        id: `codex.mcpTool.collapsedLabel.toolOnly`,
        defaultMessage: `{tool}`,
        description: `Short MCP tool label shown in the collapsed summary row`,
        values: { tool: (0, $.jsx)(`span`, { children: Se }, `tool`) },
      }),
    }),
    bn =
      p ??
      (0, $.jsxs)($.Fragment, {
        children: [
          ye === void 0
            ? N == null && me != null
              ? (0, $.jsx)(y, {
                  alt: ge?.displayName ?? O?.name ?? e.invocation.server,
                  className: `icon-xs shrink-0 scale-[1.15] object-contain`,
                  loadRemote: a,
                  logoUrl: ve,
                  logoDarkUrl: null,
                  fallback: (0, $.jsx)(I, {
                    className: `shrink-0 text-secondary`,
                    "aria-hidden": !1,
                    asset: Gt,
                  }),
                })
              : N == null && O?.groupKey === `computer-use`
                ? (0, $.jsx)(I, { className: `shrink-0 text-secondary`, asset: Gt })
                : N == null && O?.logoUrl != null
                  ? (0, $.jsx)(y, {
                      alt: O.name,
                      className: `icon-xs shrink-0 object-contain`,
                      loadRemote: a,
                      logoUrl: O.logoUrl,
                      logoDarkUrl: null,
                      fallback: (0, $.jsx)(I, {
                        className: `shrink-0 text-secondary`,
                        "aria-hidden": !1,
                        asset: Zt,
                      }),
                    })
                  : N == null && O?.usesBrowserIcon === !0
                    ? Te == null
                      ? (0, $.jsx)(I, {
                          className: `shrink-0 object-contain text-secondary`,
                          asset: Kt,
                        })
                      : (0, $.jsx)(Nt, {
                          className: `icon-xs shrink-0 object-contain text-secondary`,
                          href: Te,
                          loadRemote: a,
                        })
                    : N == null && Ht(e.invocation.server)
                      ? (0, $.jsx)(I, {
                          className: `shrink-0 object-contain text-secondary`,
                          asset: Xt,
                        })
                      : (0, $.jsx)(y, {
                          alt: N?.alt ?? o?.name ?? e.appContext?.appName ?? e.invocation.server,
                          appInfo: N == null ? o : null,
                          className: `icon-xs shrink-0 object-contain text-secondary`,
                          loadRemote: a,
                          knownAppId: N?.alt ?? e.appContext?.appName ?? e.appContext?.connectorId,
                          logoUrl: N?.logoUrl,
                          fallback: (0, $.jsx)(I, {
                            className: `shrink-0 text-secondary`,
                            "aria-hidden": !1,
                            asset: Zt,
                          }),
                        })
            : ye,
          gn,
        ],
      }),
    xn = () => {
      let e = U ? !qt : !Yt;
      if ((e && s?.(), U)) {
        ($t(e && K), vn(_, ee, e), pt(e));
        return;
      }
      (e && h != null && _n(_, h), !e && (C === !0 || Wt) && vn(_, ee, !1), pt(e));
    },
    J = (0, $.jsxs)($.Fragment, {
      children: [
        e.automaticApprovalReviews == null ? null : (0, $.jsx)(je, {}),
        Lt || (W && !qt)
          ? (0, $.jsx)(Pt, { disabled: !W && St, mcpAppId: S, onInitialize: W ? xn : void 0 })
          : null,
      ],
    }),
    Cn = fn && !G ? { expanded: q, onToggle: xn } : void 0,
    wn = R(
      `group`,
      K && V?.prefersBorder && `overflow-hidden rounded-lg border border-strong bg-surface`,
    ),
    Tn = R(G && `w-full`, K && (Jt ? `w-full px-4 pt-3 pb-2` : `w-full px-4 py-3`)),
    En = (0, $.jsx)(Ce, { accessory: J, className: Tn, disclosure: Cn, children: bn }),
    Dn = (0, $.jsx)(kt, {
      error: P == null ? null : xt,
      heightHint: V?.heightHint ?? null,
      html: P == null ? null : (V?.html ?? null),
      inlineSurface: K ? `card` : `standalone`,
      isLoading: z,
      mcpAppId: S,
      minFrameHeight: V?.minFrameHeight ?? null,
      onRetryResourceRead: () => {
        Ct({ cancelRefetch: !1 });
      },
    }),
    On = (0, $.jsx)(d.div, {
      initial: !1,
      animate: { height: mn, opacity: +!!q },
      transition: g,
      className: R(q ? `overflow-visible` : `overflow-hidden`),
      style: { pointerEvents: q ? `auto` : `none` },
      onAnimationComplete: () => {
        Jt && $t(!1);
      },
      children: (0, $.jsx)(at, {
        ref: q ? ue : null,
        className: R(F && `relative`, !H && `p-1`),
        variant: !K && H ? `grouped` : `flush`,
        children: q
          ? (0, $.jsxs)($.Fragment, {
              children: [
                e.automaticApprovalReviews == null
                  ? null
                  : (0, $.jsx)(st, {
                      className: K ? `px-4` : void 0,
                      isExpandable: !K,
                      reviews: e.automaticApprovalReviews,
                    }),
                U
                  ? tn
                    ? (0, $.jsx)(Bn, {
                        heightHint: V?.heightHint ?? null,
                        intl: v,
                        minFrameHeight: V?.minFrameHeight ?? null,
                      })
                    : Dn
                  : rn && rn.length > 0
                    ? (0, $.jsx)(`div`, {
                        className: R(`[&_*]:text-text/50`, `flex flex-col gap-0.5`),
                        children: rn.map((e, n) =>
                          (0, $.jsx)(Wn, { block: e, conversationId: t, hostId: i }, n),
                        ),
                      })
                    : fe
                      ? (0, $.jsx)(de, {
                          className: `w-full`,
                          fullWidth: !0,
                          level: `danger`,
                          children: (0, $.jsx)(`div`, {
                            className: `max-h-48 overflow-auto text-size-chat whitespace-pre-wrap`,
                            children: fe,
                          }),
                        })
                      : an
                        ? null
                        : (0, $.jsx)(`p`, {
                            className: `text-codex-description/80`,
                            children: (0, $.jsx)(k, {
                              id: `codex.mcpTool.noResult`,
                              defaultMessage: `Tool returned no content`,
                              description: `Message shown when an MCP tool call produced no content`,
                            }),
                          }),
                !z &&
                  q &&
                  !tn &&
                  !U &&
                  an &&
                  (0, $.jsx)(he, {
                    codeContainerClassName: `max-h-48 overflow-auto`,
                    language: `json`,
                    content: an,
                    showStickyRightContent: !1,
                  }),
                !z &&
                  q &&
                  !tn &&
                  (0, $.jsx)(be, {
                    open: on,
                    onOpenChange: sn,
                    triggerContent: (0, $.jsx)(en, {
                      side: `top`,
                      align: `center`,
                      tooltipContent: dn,
                      children: (0, $.jsx)(`div`, {
                        className: R(`inline-flex w-fit`, F && `absolute right-1 bottom-2 z-50`),
                        children: (0, $.jsx)(nn, {
                          className: `cursor-interaction opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-visible:opacity-100`,
                          "aria-label": dn,
                          color: `ghost`,
                          onClick: () => {
                            sn(!0);
                          },
                          size: `icon`,
                          children: (0, $.jsx)(ht, { className: `icon-xxs` }),
                        }),
                      }),
                    }),
                    children: (0, $.jsxs)(Qe, {
                      children: [
                        (0, $.jsx)(mt, {
                          children: (0, $.jsx)(Fe, {
                            title: (0, $.jsx)(_t, {
                              children: (0, $.jsx)(k, {
                                id: `codex.mcpTool.rawOutputHeading`,
                                defaultMessage: `Raw {server}.{tool} tool call output`,
                                description: `Heading shown within the raw output dialog`,
                                values: { server: e.invocation.server, tool: e.invocation.tool },
                              }),
                            }),
                          }),
                        }),
                        (0, $.jsx)(mt, {
                          children:
                            un == null
                              ? null
                              : (0, $.jsx)(he, {
                                  codeContainerClassName: `max-h-128 overflow-auto`,
                                  language: `json`,
                                  content: un,
                                  showStickyRightContent: !0,
                                }),
                        }),
                      ],
                    }),
                  }),
              ],
            })
          : null,
      }),
    }),
    kn = G ? Dn : On;
  return (0, $.jsxs)($.Fragment, {
    children: [
      l || _.value.routeKind !== `chatgpt-thread`
        ? (0, $.jsx)(Dt, { mcpAppId: S, isInlineRequested: F && qt && !A && P != null })
        : null,
      m !== void 0 && (G || (H && !n))
        ? (0, $.jsx)(gt, {
            accessory: J,
            body: kn,
            className: wn,
            "data-mcp-app-card": K ? !0 : void 0,
            disclosure: Cn,
            headerClassName: Tn,
            icon: m,
            summary: p ?? gn,
          })
        : (0, $.jsx)(Be, {
            className: wn,
            "data-mcp-app-card": K ? !0 : void 0,
            header: G || (H && !n) ? En : null,
            body: kn,
          }),
      Ee.map((t, n) =>
        (0, $.jsxs)(
          Q.Fragment,
          {
            children: [
              (0, $.jsx)(Ze, { variant: `grouped` }),
              (0, $.jsx)(zn, { call: t, fallbackPageUrl: Te, loadRemoteLogos: a }),
            ],
          },
          `${e.callId}:webmcp:${n}:${t.name}`,
        ),
      ),
    ],
  });
}
function zn(e) {
  let t = (0, Jn.c)(32),
    { call: n, fallbackPageUrl: r, loadRemoteLogos: i } = e,
    a = n.sourceHostname == null ? r : `https://${n.sourceHostname}`,
    o = n.kind === `invokeTool` ? n.inputJson : void 0,
    s = n.kind === `invokeTool` && n.inputTruncated === !0,
    c;
  t[0] !== i || t[1] !== a
    ? ((c =
        a == null
          ? (0, $.jsx)(I, { className: `shrink-0 text-text/60`, asset: Kt })
          : (0, $.jsx)(Nt, { className: `icon-xs shrink-0 text-text/60`, href: a, loadRemote: i })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] !== n.name || t[4] !== n.title
    ? ((l = n.title ?? pt(n.name, { style: `sentence` })),
      (t[3] = n.name),
      (t[4] = n.title),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] !== n.kind || t[7] !== l
    ? ((u = (0, $.jsx)(k, {
        id: `codex.mcpTool.webMcpActivity.completed`,
        defaultMessage: `{kind, select, listTools {Listed website tools} other {{toolName}}}`,
        description: `Human-readable activity label for a website-provided WebMCP tool invocation`,
        values: { kind: n.kind, toolName: l },
      })),
      (t[6] = n.kind),
      (t[7] = l),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] !== n.description ||
  t[10] !== n.name ||
  t[11] !== n.readOnlyHint ||
  t[12] !== n.sourceHostname ||
  t[13] !== n.title ||
  t[14] !== o ||
  t[15] !== s
    ? ((d = Z(
        {
          name: n.name,
          title: n.title,
          description: n.description,
          website: n.sourceHostname,
          readOnlyHint: n.readOnlyHint,
          input: o == null || s ? o : Vn(o),
          inputTruncated: s ? !0 : void 0,
        },
        2,
      )),
      (t[9] = n.description),
      (t[10] = n.name),
      (t[11] = n.readOnlyHint),
      (t[12] = n.sourceHostname),
      (t[13] = n.title),
      (t[14] = o),
      (t[15] = s),
      (t[16] = d))
    : (d = t[16]);
  let f = s ? `true` : `false`,
    p;
  t[17] === f
    ? (p = t[18])
    : ((p = (0, $.jsx)(k, {
        id: `codex.localConversation.webMcpTools.toolLabel`,
        defaultMessage: `{truncated, select, true {Tool (input truncated)} other {Tool}}`,
        description: `Title for a website-provided WebMCP tool definition and its input`,
        values: { truncated: f },
      })),
      (t[17] = f),
      (t[18] = p));
  let m;
  t[19] !== d || t[20] !== p
    ? ((m = (0, $.jsx)(he, {
        codeContainerClassName: `max-h-48 overflow-auto`,
        content: d,
        language: `json`,
        showStickyRightContent: !1,
        title: p,
      })),
      (t[19] = d),
      (t[20] = p),
      (t[21] = m))
    : (m = t[21]);
  let h;
  t[22] !== n.outputJson || t[23] !== n.outputTruncated
    ? ((h =
        n.outputJson == null
          ? null
          : (0, $.jsx)(he, {
              codeContainerClassName: `max-h-48 overflow-auto`,
              content: n.outputTruncated ? n.outputJson : Hn(n.outputJson),
              language: `json`,
              showStickyRightContent: !1,
              title: (0, $.jsx)(k, {
                id: `codex.localConversation.webMcpTools.resultLabel`,
                defaultMessage: `{truncated, select, true {Result (truncated)} other {Result}}`,
                description: `Title for a website-provided WebMCP tool result`,
                values: { truncated: n.outputTruncated ? `true` : `false` },
              }),
            })),
      (t[22] = n.outputJson),
      (t[23] = n.outputTruncated),
      (t[24] = h))
    : (h = t[24]);
  let g;
  t[25] !== m || t[26] !== h
    ? ((g = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-2`, children: [m, h] })),
      (t[25] = m),
      (t[26] = h),
      (t[27] = g))
    : (g = t[27]);
  let _;
  return (
    t[28] !== c || t[29] !== u || t[30] !== g
      ? ((_ = (0, $.jsx)(fn, { icon: c, status: `completed`, summary: u, children: g })),
        (t[28] = c),
        (t[29] = u),
        (t[30] = g),
        (t[31] = _))
      : (_ = t[31]),
    _
  );
}
function Bn(e) {
  let t = (0, Jn.c)(10),
    { heightHint: n, intl: r, minFrameHeight: i } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = r.formatMessage({
        id: `codex.mcpTool.mcpAppLoading`,
        defaultMessage: `Loading MCP app`,
        description: `Accessible label for the MCP app loading placeholder`,
      })),
      (t[0] = r),
      (t[1] = a));
  let o;
  t[2] !== n || t[3] !== i ? ((o = z(n, i)), (t[2] = n), (t[3] = i), (t[4] = o)) : (o = t[4]);
  let s;
  t[5] === o ? (s = t[6]) : ((s = { height: o }), (t[5] = o), (t[6] = s));
  let c;
  return (
    t[7] !== a || t[8] !== s
      ? ((c = (0, $.jsx)(wt, {
          role: `status`,
          "aria-label": a,
          "data-mcp-app-expanding-placeholder": `true`,
          className: `w-full`,
          style: s,
        })),
        (t[7] = a),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function Z(e, t) {
  try {
    return JSON.stringify(e, null, t) ?? `null`;
  } catch {
    return (
      i.debug(`Failed to stringify MCP tool call payload`, { safe: { value: e }, sensitive: {} }),
      ``
    );
  }
}
function Vn(e) {
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}
function Hn(e) {
  try {
    return Z(JSON.parse(e), 2);
  } catch {
    return e;
  }
}
function Un(e) {
  if (e?.length !== 1) return null;
  let [t] = e;
  if (t.type !== `text` || t.annotations != null) return null;
  let n = t.text.trim();
  if (n[0] !== `{` && n[0] !== `[`) return null;
  try {
    return Z(JSON.parse(n), 2);
  } catch {
    return null;
  }
}
function Wn(e) {
  let t = (0, Jn.c)(73),
    { block: n, conversationId: r, hostId: i } = e,
    a = we(s),
    o = xe();
  switch (n.type) {
    case `image`: {
      let e;
      t[0] !== n.annotations || t[1] !== o
        ? ((e = Gn(n.annotations, o)), (t[0] = n.annotations), (t[1] = o), (t[2] = e))
        : (e = t[2]);
      let s = e,
        c = `data:${n.mimeType};base64,${n.data}`,
        l;
      t[3] === o
        ? (l = t[4])
        : ((l = o.formatMessage({
            id: `codex.mcpTool.contentBlock.imageAlt`,
            defaultMessage: `Image returned by tool`,
            description: `Accessible description for an image included in an MCP tool result`,
          })),
          (t[3] = o),
          (t[4] = l));
      let u = l,
        d;
      t[5] !== r || t[6] !== i || t[7] !== u || t[8] !== c || t[9] !== o || t[10] !== a
        ? ((d = () =>
            G(a, {
              chatGptConversationId: r.startsWith(`chatgpt:`) ? Ee(r.slice(8)) : void 0,
              displaySrc: c,
              hostId: i,
              image: { kind: `generic`, src: c, alt: u },
              intl: o,
            })),
          (t[5] = r),
          (t[6] = i),
          (t[7] = u),
          (t[8] = c),
          (t[9] = o),
          (t[10] = a),
          (t[11] = d))
        : (d = t[11]);
      let f;
      t[12] !== u || t[13] !== c
        ? ((f = (0, $.jsx)(`img`, {
            className: `max-h-48 w-max max-w-full gap-0.5 rounded-md object-contain`,
            alt: u,
            src: c,
          })),
          (t[12] = u),
          (t[13] = c),
          (t[14] = f))
        : (f = t[14]);
      let p;
      t[15] !== d || t[16] !== f
        ? ((p = (0, $.jsx)(lt, { getItems: d, children: f })),
          (t[15] = d),
          (t[16] = f),
          (t[17] = p))
        : (p = t[17]);
      let m = p;
      if (s == null) return m;
      let h;
      t[18] === s
        ? (h = t[19])
        : ((h = (0, $.jsx)(`p`, {
            className: `text-size-chat whitespace-pre-wrap text-codex-description/80`,
            children: s,
          })),
          (t[18] = s),
          (t[19] = h));
      let g;
      return (
        t[20] !== m || t[21] !== h
          ? ((g = (0, $.jsxs)(`div`, { className: `flex flex-col gap-0.5`, children: [m, h] })),
            (t[20] = m),
            (t[21] = h),
            (t[22] = g))
          : (g = t[22]),
        g
      );
    }
    case `audio`: {
      let e;
      t[23] !== n.annotations || t[24] !== o
        ? ((e = Gn(n.annotations, o)), (t[23] = n.annotations), (t[24] = o), (t[25] = e))
        : (e = t[25]);
      let r = e,
        i = `data:${n.mimeType};base64,${n.data}`,
        a;
      t[26] === i
        ? (a = t[27])
        : ((a = (0, $.jsx)(`audio`, {
            className: `w-full gap-0.5`,
            controls: !0,
            src: i,
            preload: `metadata`,
          })),
          (t[26] = i),
          (t[27] = a));
      let s;
      t[28] === r
        ? (s = t[29])
        : ((s =
            r == null
              ? null
              : (0, $.jsx)(`p`, {
                  className: `text-size-chat whitespace-pre-wrap text-codex-description/80`,
                  children: r,
                })),
          (t[28] = r),
          (t[29] = s));
      let c;
      return (
        t[30] !== a || t[31] !== s
          ? ((c = (0, $.jsxs)(`div`, { className: `flex flex-col gap-0.5`, children: [a, s] })),
            (t[30] = a),
            (t[31] = s),
            (t[32] = c))
          : (c = t[32]),
        c
      );
    }
    case `resource_link`: {
      let e;
      t[33] !== n.annotations || t[34] !== o
        ? ((e = Gn(n.annotations, o)), (t[33] = n.annotations), (t[34] = o), (t[35] = e))
        : (e = t[35]);
      let r = e,
        i = n.title ?? n.name ?? n.uri,
        a;
      t[36] === i
        ? (a = t[37])
        : ((a = (0, $.jsx)(`div`, {
            className: `break-words text-codex-description/80`,
            children: (0, $.jsx)(k, {
              id: `codex.mcpTool.resourceLink.reading`,
              defaultMessage: `Read {resourceLinkName}`,
              description: `Summary shown for MCP resource link content blocks`,
              values: { resourceLinkName: i },
            }),
          })),
          (t[36] = i),
          (t[37] = a));
      let s;
      t[38] === r
        ? (s = t[39])
        : ((s =
            r == null
              ? null
              : (0, $.jsx)(`div`, {
                  className: `break-words whitespace-pre-wrap text-codex-description/80`,
                  children: r,
                })),
          (t[38] = r),
          (t[39] = s));
      let c;
      return (
        t[40] !== a || t[41] !== s
          ? ((c = (0, $.jsxs)(`div`, {
              className: `flex flex-col gap-0.5 text-size-chat`,
              children: [a, s],
            })),
            (t[40] = a),
            (t[41] = s),
            (t[42] = c))
          : (c = t[42]),
        c
      );
    }
    case `embedded_resource`: {
      let e = n.resource.text ?? n.resource.blob ?? ``,
        r = e !== ``,
        i;
      t[43] === n.resource.annotations
        ? (i = t[44])
        : ((i = Kn(n.resource.annotations)), (t[43] = n.resource.annotations), (t[44] = i));
      let a = i,
        o;
      t[45] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((o = (0, $.jsx)(`span`, {
            className: `font-medium text-default`,
            children: (0, $.jsx)(k, {
              id: `codex.mcpTool.embeddedResource.uriLabel`,
              defaultMessage: `URI`,
              description: `Label for the URI of an embedded resource`,
            }),
          })),
          (t[45] = o))
        : (o = t[45]);
      let s;
      t[46] === n.resource.uri
        ? (s = t[47])
        : ((s = (0, $.jsxs)(`div`, {
            className: `flex gap-1`,
            children: [o, (0, $.jsx)(`span`, { className: `break-all`, children: n.resource.uri })],
          })),
          (t[46] = n.resource.uri),
          (t[47] = s));
      let c;
      t[48] === n.resource.mimeType
        ? (c = t[49])
        : ((c =
            n.resource.mimeType == null
              ? null
              : (0, $.jsxs)(`div`, {
                  className: `flex gap-1`,
                  children: [
                    (0, $.jsx)(`span`, {
                      className: `font-medium text-default`,
                      children: (0, $.jsx)(k, {
                        id: `codex.mcpTool.embeddedResource.mimeTypeLabel`,
                        defaultMessage: `MIME type`,
                        description: `Label for the MIME type of an embedded resource`,
                      }),
                    }),
                    (0, $.jsx)(`span`, { className: `break-all`, children: n.resource.mimeType }),
                  ],
                })),
          (t[48] = n.resource.mimeType),
          (t[49] = c));
      let l;
      t[50] === a
        ? (l = t[51])
        : ((l =
            a == null
              ? null
              : (0, $.jsxs)(`div`, {
                  className: `flex gap-1`,
                  children: [
                    (0, $.jsx)(`span`, {
                      className: `font-medium text-default`,
                      children: (0, $.jsx)(k, {
                        id: `codex.mcpTool.embeddedResource.annotationsLabel`,
                        defaultMessage: `Annotations`,
                        description: `Label for annotations shown with an embedded resource`,
                      }),
                    }),
                    (0, $.jsx)(`span`, { className: `break-all`, children: a }),
                  ],
                })),
          (t[50] = a),
          (t[51] = l));
      let u;
      t[52] !== r || t[53] !== e
        ? ((u = r
            ? (0, $.jsxs)(`div`, {
                className: `flex flex-col gap-0.5`,
                children: [
                  (0, $.jsx)(`span`, {
                    className: `font-medium text-default`,
                    children: (0, $.jsx)(k, {
                      id: `codex.mcpTool.embeddedResource.contentLabel`,
                      defaultMessage: `Content`,
                      description: `Label for the content of an embedded resource`,
                    }),
                  }),
                  (0, $.jsx)(`pre`, {
                    className: `max-h-48 overflow-auto rounded-md bg-primary-soft px-3 py-2 whitespace-pre-wrap text-codex-description/80`,
                    children: e,
                  }),
                ],
              })
            : null),
          (t[52] = r),
          (t[53] = e),
          (t[54] = u))
        : (u = t[54]);
      let d;
      return (
        t[55] !== s || t[56] !== c || t[57] !== l || t[58] !== u
          ? ((d = (0, $.jsxs)(`div`, {
              className: `flex flex-col gap-0.5 text-size-chat text-codex-description/80`,
              children: [s, c, l, u],
            })),
            (t[55] = s),
            (t[56] = c),
            (t[57] = l),
            (t[58] = u),
            (t[59] = d))
          : (d = t[59]),
        d
      );
    }
    case `unknown`: {
      let e;
      t[60] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = R(
            `[&_*]:text-text/50`,
            `bg-primary-soft text-codex-description/80 max-h-48 overflow-auto whitespace-pre-wrap rounded-md px-3 py-2 text-size-chat`,
          )),
          (t[60] = e))
        : (e = t[60]);
      let r;
      t[61] === n.raw ? (r = t[62]) : ((r = Z(n.raw, 2)), (t[61] = n.raw), (t[62] = r));
      let i;
      return (
        t[63] === r
          ? (i = t[64])
          : ((i = (0, $.jsx)(`pre`, { className: e, children: r })), (t[63] = r), (t[64] = i)),
        i
      );
    }
    case `text`: {
      let e;
      t[65] !== n.annotations || t[66] !== n.text || t[67] !== o
        ? ((e = qn([n.text, Gn(n.annotations, o)])),
          (t[65] = n.annotations),
          (t[66] = n.text),
          (t[67] = o),
          (t[68] = e))
        : (e = t[68]);
      let r = e,
        i;
      t[69] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((i = (0, $.jsxs)(`div`, {
            className: `sticky top-0 z-10 flex items-center justify-between py-1 ps-2 pe-2 font-sans text-sm text-codex-description select-none`,
            children: [
              (0, $.jsx)(`div`, {
                className: `min-w-0 truncate`,
                children: (0, $.jsx)(k, {
                  id: `codex.mcpTool.textBlock.plaintextTitle`,
                  defaultMessage: `plaintext`,
                  description: `Title shown for MCP text content blocks rendered in a code-style container`,
                }),
              }),
              (0, $.jsx)(`div`, { className: `flex items-center` }),
            ],
          })),
          (t[69] = i))
        : (i = t[69]);
      let a;
      t[70] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((a = R(
            `[&_*]:text-text/50`,
            `text-codex-description/80 m-0 whitespace-pre-wrap break-words font-sans text-size-chat leading-relaxed extension:leading-normal`,
          )),
          (t[70] = a))
        : (a = t[70]);
      let s;
      return (
        t[71] === r
          ? (s = t[72])
          : ((s = (0, $.jsxs)(`div`, {
              className: `relative overflow-clip rounded-lg border border-strong bg-secondary-soft-alpha contain-inline-size`,
              children: [
                i,
                (0, $.jsx)(`div`, {
                  className: `max-h-48 overflow-y-auto p-2`,
                  children: (0, $.jsx)(`pre`, { className: a, children: r }),
                }),
              ],
            })),
            (t[71] = r),
            (t[72] = s)),
        s
      );
    }
  }
}
function Gn(e, t) {
  let n = Kn(e);
  return n == null
    ? null
    : t.formatMessage(
        {
          id: `codex.mcpTool.contentBlock.annotationsLine`,
          defaultMessage: `Annotations: {annotations}`,
          description: `Line showing MCP content block annotations in text output`,
        },
        { annotations: n },
      );
}
function Kn(e) {
  if (e == null) return null;
  let t = [];
  return (
    e.audience != null && e.audience.length > 0 && t.push(`audience=${e.audience.join(`, `)}`),
    e.priority != null && t.push(`priority=${String(e.priority)}`),
    e.lastModified != null && t.push(`lastModified=${e.lastModified}`),
    t.length === 0 ? null : t.join(`; `)
  );
}
function qn(e) {
  return e.filter((e) => e != null).join(`
`);
}
var Jn,
  Q,
  $,
  Yn = e(() => {
    ((Jn = r()),
      Qt(),
      Yt(),
      Jt(),
      qt(),
      N(),
      Et(),
      P(),
      m(),
      Wt(),
      (Q = t(n(), 1)),
      j(),
      _(),
      An(),
      Ln(),
      S(),
      H(),
      O(),
      tn(),
      o(),
      tt(),
      Te(),
      bt(),
      B(),
      Se(),
      f(),
      fe(),
      $t(),
      ce(),
      Oe(),
      Ct(),
      W(),
      Xe(),
      re(),
      Ft(),
      Ke(),
      He(),
      M(),
      We(),
      b(),
      St(),
      a(),
      Ne(),
      Ot(),
      ne(),
      l(),
      it(),
      wn(),
      dn(),
      sn(),
      L(),
      Ge(),
      mn(),
      A(),
      Lt(),
      U(),
      V(),
      K(),
      gn(),
      Ve(),
      ot(),
      ge(),
      $e(),
      v(),
      xt(),
      un(),
      ($ = Tt()));
  });
export {
  Dn as a,
  wn as c,
  gn as d,
  Ln as i,
  _n as l,
  Yn as n,
  An as o,
  jn as r,
  Cn as s,
  Rn as t,
  hn as u,
};
//# sourceMappingURL=mcp-tool-item-content-7c62ea7fb2cf.js.map
