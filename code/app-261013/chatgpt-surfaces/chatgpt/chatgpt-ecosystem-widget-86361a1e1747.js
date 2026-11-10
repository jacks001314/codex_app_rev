const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./open-f18887a7ccee.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./account-linking-12b6a2862f9e.js",
      "./ValdiRuntimeProvider-2b6173af5e2b.js",
      "./LocaleResolver-ec903b26648d.js",
      "./src-2f77e687e887.js",
      "./Buffer-894a440955a0.js",
      "./CancelablePromise-9c54b89028f7.js",
      "./valdi-locale-68563ccde12a.js",
      "./experiment-service-77f186b83e5e.js",
      "./plaid-link-7ebfb008cf36.js",
      "./plaid-link-fb2ecd2502fa.css",
      "./open-chatgpt-file-6fc1fe73a6ed.js",
      "./chatgpt-ecosystem-widget-modal-8b5541de8566.js",
      "./chatgpt-ecosystem-widget-modal-78b0f8d9ccae.js",
      "./chatgpt-ecosystem-widget-resource-9c3e6a125c8e.js",
      "./resource-5df84eaadd7b.js",
      "./inline-height-de22080375ee.js",
      "./widget-focused-object-63f668fa1062.js",
      "./widget-focused-object-transfer-78a1edf05794.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $It as n,
  ADt as r,
  Cot as i,
  DIt as a,
  EPt as o,
  FR as s,
  GE as c,
  IDt as ee,
  Ixt as te,
  JMt as l,
  LR as u,
  Pxt as d,
  TLt as f,
  VDt as ne,
  WE as p,
  _Mt as m,
  _O as re,
  _xt as h,
  dft as ie,
  fLt as g,
  fPt as _,
  gMt as ae,
  gNt as oe,
  hot as se,
  jDt as v,
  lot as y,
  mO as ce,
  nSt as le,
  oIt as b,
  pIt as x,
  pLt as S,
  pPt as C,
  rst as w,
  t3 as T,
  vO as E,
  vzt as ue,
  wLt as de,
  wot as fe,
  wxt as pe,
  xMt as me,
  yzt as D,
  zxt as he,
} from "./app-shared-bbfeca5e5737.js";
import {
  BZn as ge,
  Cut as _e,
  Cwr as O,
  DSt as ve,
  E4n as k,
  ETr as A,
  GMr as j,
  I4n as ye,
  IWn as be,
  Jyr as xe,
  L4n as Se,
  LWn as M,
  NZn as Ce,
  O4n as we,
  OPr as Te,
  PWn as Ee,
  QDr as De,
  QMr as Oe,
  Qyr as N,
  SSt as ke,
  SXn as Ae,
  Sut as P,
  TSt as F,
  XDr as je,
  XMr as Me,
  ap as I,
  bOn as Ne,
  bSt as Pe,
  bTr as Fe,
  bZn as Ie,
  dIn as Le,
  dwn as L,
  e$n as Re,
  fur as ze,
  gwr as Be,
  hEr as Ve,
  hwn as He,
  kPr as R,
  mMn as z,
  nMn as Ue,
  op as We,
  pZn as Ge,
  pur as Ke,
  rMn as qe,
  sCr as Je,
  sSt as Ye,
  t$n as Xe,
  tNr as Ze,
  uIn as Qe,
  uMn as B,
  uSt as V,
  vEr as H,
  vSt as $e,
  wOn as U,
  wSt as et,
  wXn as W,
  wwr as G,
  xSt as tt,
  yCr as nt,
  yjn as rt,
} from "./app-initial-5851df3f6cb1.js";
import { a as it, i as K } from "./mcp-sandbox-rpc-ca8003ff80ff.js";
import { i as q, r as at, s as ot } from "./chatgpt_finance-6f5d98dfb009.js";
import {
  a as st,
  i as ct,
  l as lt,
  m as ut,
  o as dt,
  p as J,
  r as ft,
  t as pt,
  u as Y,
} from "./widget-ea192a210472.js";
import { n as mt, t as X } from "./frame-container-41423da37713.js";
import { n as ht, t as gt } from "./open-button-966628744c22.js";
import {
  a as _t,
  i as vt,
  o as yt,
  r as bt,
  s as xt,
  t as St,
} from "./chatgpt-ecosystem-widget-resource-9c3e6a125c8e.js";
async function Ct() {
  return (
    await _(
      async () => {
        let { openWidgetSource: e } = await import(`./open-f18887a7ccee.js`);
        return { openWidgetSource: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5]),
      import.meta.url,
    )
  ).openWidgetSource;
}
function wt() {
  return (wt = e(() => {
    C();
  }))();
}
function Tt() {
  return _(
    () => import(`./account-linking-12b6a2862f9e.js`),
    __vite__mapDeps([6, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
    import.meta.url,
  );
}
function Et() {
  return (Et = e(() => {
    C();
  }))();
}
function Dt(e, t) {
  let n = jt.safeParse(t);
  if (!n.success) return;
  let r = n.data;
  if (r.type === `event`) {
    let t = Ot[r.label];
    if (t == null) return;
    De(e, at, {
      eventType: t,
      accountSection: r.payload?.account_section,
      linkStatus: r.payload?.link_status,
      surface: r.payload?.surface,
      deviceType: r.payload?.device_type,
      selectionSource: r.payload?.selection_source,
      viewMode: r.payload?.view_mode,
      reason: r.payload?.reason,
      itemCount: r.payload?.item_count,
      result: r.payload?.result,
      provider: r.payload?.provider,
      plaidExitStatus: r.payload?.plaidExitStatus,
      plaidErrorCode: r.payload?.plaidErrorCode,
    });
    return;
  }
  let i = {
      ...(`tags` in r ? Object.fromEntries(r.tags?.map(({ key: e, value: t }) => [e, t]) ?? []) : {}),
      attribution_id: Fe,
      name: `ledger`,
      client_type: `chatgpt-web`,
    },
    a = e.get(Qe);
  switch (r.type) {
    case `count`:
      a.count(`ecosystem`, r.label, i, r.count);
      break;
    case `hist`:
      a.hist(`ecosystem`, r.label, i, r.value);
      break;
    case `error`:
      a.count(`ecosystem`, `app.error`, i);
  }
}
var Ot, kt, At, jt;
function Mt() {
  return (Mt = e(() => {
    (ot(),
      o(),
      Le(),
      je(),
      A(),
      (Ot = {
        "ledger.all_accounts_synced": q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ALL_ACCOUNTS_SYNCED,
        "ledger.recent_transactions_requested":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_REQUESTED,
        "ledger.recent_transactions_succeeded":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_SUCCEEDED,
        "ledger.refresh_profile": q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE,
        "ledger.refresh_profile_succeeded":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE_SUCCEEDED,
        "ledger.account_selected": q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_SELECTED,
        "ledger.account_detail_open_succeeded":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_OPEN_SUCCEEDED,
        "ledger.bank_reauth_initiated": q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_INITIATED,
        "ledger.bank_disconnected": q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_DISCONNECTED,
        "ledger.oauth_button_clicked": q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_BUTTON_CLICKED,
        "ledger.oauth_flow_web_exited": q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_WEB_EXITED,
        "ledger.oauth_flow_native_exited":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_NATIVE_EXITED,
        "ledger.oauth_flow_finishing": q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHING,
        "ledger.oauth_flow_finished": q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHED,
        "ledger.account_detail_loading_shown":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADING_SHOWN,
        "ledger.account_detail_loaded": q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADED,
        "ledger.account_detail_close_requested":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_CLOSE_REQUESTED,
        "ledger.bank_reauth_flow_started":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_FLOW_STARTED,
        "ledger.account_resync_initiated":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_INITIATED,
        "ledger.account_resync_succeeded":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_SUCCEEDED,
        "ledger.account_remove_initiated":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVE_INITIATED,
        "ledger.account_removed": q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVED,
        "ledger.account_follow_up_unavailable":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_UNAVAILABLE,
        "ledger.account_follow_up_clicked":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_CLICKED,
        "ledger.error.recent_transactions_failed":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RECENT_TRANSACTIONS_FAILED,
        "ledger.error.reauth_failed": q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REAUTH_FAILED,
        "ledger.error.resync_failed": q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RESYNC_FAILED,
        "ledger.error.account_remove_failed":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_REMOVE_FAILED,
        "ledger.error.account_follow_up_failed":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_FOLLOW_UP_FAILED,
        "ledger.error.account_detail_open_failed":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_DETAIL_OPEN_FAILED,
        "ledger.error.refresh_profile": q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REFRESH_PROFILE,
        "ledger.error.bank_disconnect_failed":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_DISCONNECT_FAILED,
        "ledger.error.unknown_action": q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_UNKNOWN_ACTION,
        "ledger.error.boundary_catch": q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BOUNDARY_CATCH,
        "ledger.error.oauth_mark_initializing_failed":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_MARK_INITIALIZING_FAILED,
        "ledger.error.oauth_start_flow_failed":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_START_FLOW_FAILED,
        "ledger.error.oauth_polling_failed":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_POLLING_FAILED,
        "ledger.error.bank_reauth_failed":
          q.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_REAUTH_FAILED,
      }),
      (kt = S({
        account_section: b([
          `banking`,
          `investments`,
          `credit_cards`,
          `real_estate`,
          `loans`,
          `payroll`,
          `other`,
        ])
          .optional()
          .catch(void 0),
        link_status: b([`linked`, `error`, `disconnected`])
          .optional()
          .catch(void 0),
        surface: b([`ledger_profile`, `mattress_accounts_tab`, `unknown`, `web`, `native`])
          .optional()
          .catch(void 0),
        device_type: b([`mobile`, `tablet`, `desktop`, `unknown`])
          .optional()
          .catch(void 0),
        selection_source: b([`profile`, `snapshot`])
          .optional()
          .catch(void 0),
        view_mode: b([`pip`, `inline`, `fullscreen`, `modal`, `sidebar`, `unknown`])
          .optional()
          .catch(void 0),
        reason: b([`close_button`, `follow_up`, `remove_success`])
          .optional()
          .catch(void 0),
        item_count: g()
          .int()
          .nonnegative()
          .max(2147483647)
          .optional()
          .catch(void 0),
        result: b([`empty`, `non_empty`])
          .optional()
          .catch(void 0),
        provider: n(`plaid`)
          .optional()
          .catch(void 0),
        plaidExitStatus: f()
          .regex(/^[a-zA-Z0-9_]{1,64}$/)
          .optional()
          .catch(void 0),
        plaidErrorCode: f()
          .regex(/^[a-zA-Z0-9_]{1,64}$/)
          .optional()
          .catch(void 0),
      })),
      (At = { label: f().startsWith(`ledger.`), tags: x(S({ key: f(), value: f() })).optional() }),
      (jt = a(`type`, [
        S({ type: n(`event`), label: At.label, payload: kt.optional().catch(void 0) }),
        S({ type: n(`count`), ...At, count: g().optional() }),
        S({ type: n(`hist`), ...At, value: g() }),
        S({ type: n(`error`) }),
      ])));
  }))();
}
function Nt(e, t, n) {
  return {
    requestModal:
      t == null || t.length === 0
        ? void 0
        : async (r, i) => {
            if (i.aborted || e.get(j) !== t) return !1;
            let { params: a } = Pt.parse(r),
              { openPersonalFinanceAccountLinking: o } = await Tt();
            return i.aborted || e.get(j) !== t
              ? !1
              : (await o(e, { accountId: t, initialTab: a.initialTab, returnTo: n, signal: i })) &&
                  !i.aborted &&
                  e.get(j) === t;
          },
    sendInstrument: (t) => Dt(e, t),
  };
}
var Pt;
function Ft() {
  return (Ft = e(() => {
    (o(),
      Ze(),
      Et(),
      Mt(),
      (Pt = de({
        title: f().optional(),
        params: de({
          view: n(`accountLinking`),
          initialTab: b([`accounts`, `creditScore`, `realEstate`]).optional(),
        }),
      })));
  }))();
}
async function It(e, t, n, r) {
  let { chatGptThreadId: i, sourceMessageId: a } = t.request;
  if (!a) throw k(`File opening requires a source message`, l.MethodNotFound);
  let o = e.get(Ge, i),
    { accountId: c, userId: ee } = t.resourceIdentity.identity,
    te = (e) => e.get(G) || !e.get(Lt, i) || e.get(j) !== c || e.get(Me) !== ee || e.get(Ge, i) !== o,
    u = () => {
      if ((r.throwIfAborted(), o == null || te(e)))
        throw k(`File opening is unavailable for this widget`, l.MethodNotFound);
    };
  if ((u(), !n.startsWith(`/`) || n.startsWith(`//`) || n.includes(`\\`) || n.includes(`\0`)))
    throw k(`Cannot open this file path`, l.InvalidParams);
  let d = e.get(Ce, i),
    f = I(e, i, { type: `sandbox`, messageId: a, sandboxPath: n }),
    { canOpenChatGptFilePreview: ne, openChatGptFile: p } = await _(
      async () => {
        let { canOpenChatGptFilePreview: e, openChatGptFile: t } = await import(
          `./open-chatgpt-file-6fc1fe73a6ed.js`
        );
        return { canOpenChatGptFilePreview: e, openChatGptFile: t };
      },
      __vite__mapDeps([16, 2, 1, 3, 4, 5]),
      import.meta.url,
    );
  if ((u(), !ne({ browserPreview: !0 })))
    throw k(`File previews are unavailable in this host`, l.MethodNotFound);
  try {
    await p(e, {
      conversationId: o,
      fileName: s(n),
      gizmoId: d,
      target: f,
      tabKey: `${a}:${n}`,
      browserPreview: !0,
      downloadFallback: !1,
      isAccessBlocked: te,
      signal: r,
    });
  } catch {
    throw (u(), k(`Unable to open file`, l.InternalError));
  }
  u();
}
var Lt;
function Rt() {
  return (Rt = e(() => {
    (oe(),
      d(),
      Ze(),
      we(),
      fe(),
      O(),
      Te(),
      u(),
      rt(),
      U(),
      We(),
      C(),
      (Lt = le(i, (e, { get: t }) => {
        let n = t(Oe);
        if (
          n.authLoading ||
          n.authMethod !== `chatgpt` ||
          n.supportedSurface !== !0 ||
          n.authenticatedAccountId == null ||
          n.userId == null ||
          !n.email?.endsWith(`@openai.com`) ||
          !t(R, `3080374709`) ||
          e == null ||
          t(Ge, e) == null ||
          t(ge, e) != null
        )
          return !1;
        let r = t(Ie, e);
        return (r === `tpp` || r === `flora`) && !t(Ne, e);
      })));
  }))();
}
function zt(e) {
  let t = (0, Bt.c)(1),
    n;
  return (
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Vt.jsx)(p, {
          content: (0, Vt.jsx)(ee, { ...Ee.notice }),
          role: `alert`,
          variant: `callout`,
        })),
        (t[0] = n))
      : (n = t[0]),
    n
  );
}
var Bt, Vt;
function Ht() {
  return (Ht = e(() => {
    ((Bt = ue()), v(), c(), be(), (Vt = me()));
  }))();
}
var Ut;
function Wt() {
  return (Wt = e(() => {
    (_e(), (Ut = [P]));
  }))();
}
function Gt(e, t, n, r) {
  if (n.widget.is_verified_first_party !== !0) return {};
  let { identity: i } = n.resourceIdentity,
    a = i.kind === `connector` ? Ut.find((e) => e.connectorId === i.connectorId && e.isSupported()) : void 0,
    o = (t) => {
      if (
        (t.throwIfAborted(), n.mcpAppHostAdapter.assertActive?.(), e.get(z, n.resourceIdentity) !== `current`)
      )
        throw Error(`The widget connection changed`);
    };
  return {
    openExternal: async (t, i) => {
      if ((o(i), await n.mcpAppHostAdapter.openExternal?.(t, i))) return !0;
      o(i);
      let s = it.safeParse(t);
      if (!s.success) return !1;
      if (a != null && s.data.openMode === `popup` && new URL(s.data.href).protocol === `https:`) {
        let t = await a.loadPreparePopupUrl();
        o(i);
        let n = await t(e, s.data.href);
        return (o(i), ut(e, n), !0);
      }
      return s.data.openMode == null ? ((await r?.(s.data.href, i)) ? !0 : (o(i), !1)) : !1;
    },
  };
}
function Kt() {
  return (Kt = e(() => {
    (B(), K(), J(), Wt());
  }))();
}
function qt(e) {
  let t = e._meta,
    n = e;
  for (let r of [
    t?.call_tool_result,
    t?.mcp_tool_result,
    t?.mcpToolResult,
    ...(Array.isArray(t?.content) ? [t] : []),
    e,
  ]) {
    let e = N(r);
    if (!Array.isArray(e?.content) && e?.structuredContent === void 0) continue;
    let t = Ae(r, { preserveStructuredContentNull: !0 });
    if (t != null) {
      n = t;
      break;
    }
  }
  let r;
  return (
    t?.cancelled === !0 || t?.is_cancelled === !0 || t?.status === `cancelled`
      ? (r = `cancelled`)
      : (n.isError === !0 || t?.status === `error` || e.isError === !0) && (r = `error`),
    {
      toolResultNotification: n,
      toolCallStatus: r,
      toolCallCancellationReason: r === `cancelled` && typeof t?.reason == `string` ? t.reason : void 0,
    }
  );
}
function Jt() {
  return (Jt = e(() => {
    (xe(), W());
  }))();
}
function Yt(e) {
  let t = (0, nn.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = e.recipient === void 0 ? (0, Q.jsx)(Xt, { ...e }) : (0, Q.jsx)(Zt, { ...e })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
function Xt(e) {
  let t = (0, nn.c)(3),
    n = te(Je),
    r;
  return (
    t[0] !== e || t[1] !== n
      ? ((r = (0, Q.jsx)(Zt, { ...e, recipient: n })), (t[0] = e), (t[1] = n), (t[2] = r))
      : (r = t[2]),
    r
  );
}
function Zt(e) {
  let t = (0, nn.c)(49),
    {
      recipient: n,
      conversationId: r,
      hostId: i,
      mcpAppId: a,
      onClose: o,
      state: s,
      heightHint: c,
      widthHint: l,
      allowsInteractiveDismissal: u,
    } = e,
    d = n === void 0 ? null : n,
    f = te(Be),
    p = ne(),
    m;
  t[0] === a ? (m = t[1]) : ((m = () => a ?? ie()), (t[0] = a), (t[1] = m));
  let [h] = (0, Z.useState)(m),
    g =
      s.kind === `ready` && s.result.request.mode === `modal`
        ? Math.max(c ?? s.result.widget.height_hint ?? 0, 0) || void 0
        : c,
    _ = s.kind === `ready` ? s.result.tracking : s.tracking,
    ae = s.kind === `ready` && s.result.request.mode === `fullscreen`,
    oe;
  t[2] !== ae || t[3] !== o || t[4] !== _
    ? ((oe = () => {
        ae && (_?.close(`user_dismissed`), o());
      }),
      (t[2] = ae),
      (t[3] = o),
      (t[4] = _),
      (t[5] = oe))
    : (oe = t[5]);
  let se = (0, Z.useEffectEvent)(oe),
    v;
  t[6] !== se || t[7] !== h || t[8] !== f || t[9] !== _
    ? ((v = () => {
        let e = f.watch((e) => {
          let t = e.get(ke, h);
          if (t != null && e.get(tt, t)?.isOpen === !1) {
            se();
            return;
          }
          (e.get(F, h) && _?.renderReady(), e.get(Pe, h) != null && _?.error(`widget_render`));
        });
        return () => {
          (e(), _?.close(`navigation_changed`));
        };
      }),
      (t[6] = se),
      (t[7] = h),
      (t[8] = f),
      (t[9] = _),
      (t[10] = v))
    : (v = t[10]);
  let y;
  if (
    (t[11] !== h || t[12] !== f || t[13] !== _
      ? ((y = [f, h, _]), (t[11] = h), (t[12] = f), (t[13] = _), (t[14] = y))
      : (y = t[14]),
    (0, Z.useEffect)(v, y),
    s.kind === `ready` && ae)
  ) {
    let e;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = [`fullscreen`]), (t[15] = e)) : (e = t[15]);
    let n;
    return (
      t[16] !== r || t[17] !== i || t[18] !== h || t[19] !== d || t[20] !== s.result
        ? ((n = (0, Q.jsx)(Qt, {
            recipient: d,
            conversationId: r,
            hostDisplayModes: e,
            hostId: i,
            lifetime: `component`,
            mcpAppId: h,
            result: s.result,
            showOpenButton: !1,
          })),
          (t[16] = r),
          (t[17] = i),
          (t[18] = h),
          (t[19] = d),
          (t[20] = s.result),
          (t[21] = n))
        : (n = t[21]),
      n
    );
  }
  let le = u === !1,
    b;
  t[22] === u
    ? (b = t[23])
    : ((b = (e) => {
        u === !1 && e.preventDefault();
      }),
      (t[22] = u),
      (t[23] = b));
  let x;
  t[24] === p ? (x = t[25]) : ((x = p.formatMessage($.appTitle)), (t[24] = p), (t[25] = x));
  let S;
  t[26] === g ? (S = t[27]) : ((S = g == null ? void 0 : { height: g }), (t[26] = g), (t[27] = S));
  let C;
  t[28] !== b || t[29] !== x || t[30] !== S
    ? ((C = { onEscapeKeyDown: b, "aria-label": x, style: S }),
      (t[28] = b),
      (t[29] = x),
      (t[30] = S),
      (t[31] = C))
    : (C = t[31]);
  let w;
  t[32] !== o || t[33] !== _
    ? ((w = (e) => {
        e || (_?.close(`user_dismissed`), o());
      }),
      (t[32] = o),
      (t[33] = _),
      (t[34] = w))
    : (w = t[34]);
  let T;
  t[35] !== r ||
  t[36] !== i ||
  t[37] !== h ||
  t[38] !== d ||
  t[39] !== s.error ||
  t[40] !== s.kind ||
  t[41] !== s.result
    ? ((T =
        s.kind === `loading`
          ? (0, Q.jsx)(`div`, {
              className: `flex h-full items-center justify-center`,
              role: `status`,
              children: (0, Q.jsx)(ee, { ...$.openingApp }),
            })
          : s.kind === `error`
            ? (0, Q.jsx)(`div`, {
                className: `flex h-full flex-col items-center justify-center gap-2 p-8 text-center`,
                children: M(s.error)
                  ? (0, Q.jsx)(zt, {})
                  : (0, Q.jsxs)(Q.Fragment, {
                      children: [
                        (0, Q.jsx)(re, {
                          className: `text-lg font-medium`,
                          children: (0, Q.jsx)(ee, { ...$.openAppError }),
                        }),
                        (0, Q.jsx)(`p`, {
                          className: `text-codex-description`,
                          children: (0, Q.jsx)(ee, { ...$.openAppErrorDescription }),
                        }),
                      ],
                    }),
              })
            : (0, Q.jsx)(Qt, {
                recipient: d,
                conversationId: r,
                hostId: i,
                inDialog: !0,
                lifetime: `component`,
                mcpAppId: h,
                result: s.result,
              })),
      (t[35] = r),
      (t[36] = i),
      (t[37] = h),
      (t[38] = d),
      (t[39] = s.error),
      (t[40] = s.kind),
      (t[41] = s.result),
      (t[42] = T))
    : (T = t[42]);
  let E;
  return (
    t[43] !== C || t[44] !== w || t[45] !== T || t[46] !== le || t[47] !== l
      ? ((E = (0, Q.jsx)(ce, {
          shouldIgnoreClickOutside: le,
          contentProps: C,
          dialogCloseClassName: `z-10`,
          onOpenChange: w,
          open: !0,
          size: `appLauncher`,
          widthHint: l,
          children: T,
        })),
        (t[43] = C),
        (t[44] = w),
        (t[45] = T),
        (t[46] = le),
        (t[47] = l),
        (t[48] = E))
      : (E = t[48]),
    E
  );
}
function Qt(e) {
  let n = (0, nn.c)(157),
    {
      recipient: r,
      conversationId: i,
      deepLink: a,
      initialWidgetState: o,
      pluginId: s,
      hostId: c,
      inDialog: l,
      Frame: u,
      lifetime: d,
      hostedInThreadScrollLayout: f,
      mcpAppId: p,
      result: m,
      fullSurface: h,
      globalSurface: ie,
      hostScroll: g,
      hostDisplayModes: _,
      inheritHostBackground: oe,
      showDialogTitle: v,
      heightHint: y,
      showOpenButton: ce,
      showLoadingStatus: le,
    } = e,
    b = r === void 0 ? null : r,
    x = l !== void 0 && l,
    S = f !== void 0 && f,
    C = h === void 0 ? x : h,
    w = ie !== void 0 && ie,
    T = g !== void 0 && g,
    E = _ === void 0 ? Ye : _,
    ue = oe !== void 0 && oe,
    de = v === void 0 ? x : v,
    fe = ce === void 0 || ce,
    me = le === void 0 || le,
    D = te(Be),
    ge = m.resourceQuery,
    _e;
  n[0] !== m.resourceKey || n[1] !== p
    ? ((_e = { mcpAppId: p, resourceKey: m.resourceKey }), (n[0] = m.resourceKey), (n[1] = p), (n[2] = _e))
    : (_e = n[2]);
  let O = he(St, _e),
    k;
  n[3] !== m || n[4] !== O
    ? ((k = O == null || O === m.widget ? m : { ...m, widget: O }), (n[3] = m), (n[4] = O), (n[5] = k))
    : (k = n[5]);
  let A = k,
    { accountId: j } = Ke(),
    { pathname: ye, search: be, hash: xe } = pe(),
    M = ne(),
    Ce = he(Lt, A.request.chatGptThreadId),
    we;
  n[6] !== i || n[7] !== c || n[8] !== M || n[9] !== b || n[10] !== A || n[11] !== D
    ? ((we = async (e, t) => {
        let n = D.get(Se),
          r = n?.widgetModal;
        if (
          n?.id === e &&
          n.restored &&
          n.result?.didConnect &&
          r != null &&
          A.modalOwner == null &&
          n.hostId === c &&
          r.accountId === A.resourceIdentity.identity.accountId &&
          r.userId === A.resourceIdentity.identity.userId &&
          r.sourceAppUri === A.request.appUri &&
          r.sourceTemplate === A.request.template &&
          r.sourceMessageId === A.request.sourceMessageId &&
          r.sourceThreadId === A.request.threadId &&
          r.sourceConversationId === D.get(Ge, A.request.chatGptThreadId)
        ) {
          D.set(Se, null);
          try {
            let { requestEcosystemWidgetModal: e } = await $t();
            (t.throwIfAborted(),
              await e(
                D,
                {
                  recipient: b,
                  conversationId: i,
                  hostId: c,
                  result: A,
                  WidgetDialog: Yt,
                  payload: r.payload,
                  signal: t,
                },
                n.result,
              ));
          } catch {
            t.aborted ||
              D.get(se).danger(M.formatMessage($.openAppError), {
                errorAnalytics: { toastId: `ecosystem.widget.modal.resume` },
              });
          }
        }
      }),
      (n[6] = i),
      (n[7] = c),
      (n[8] = M),
      (n[9] = b),
      (n[10] = A),
      (n[11] = D),
      (n[12] = we))
    : (we = n[12]);
  let Te = (0, Z.useEffectEvent)(we),
    Ee;
  n[13] !== x || n[14] !== Te || n[15] !== D
    ? ((Ee = () => {}), (n[13] = x), (n[14] = Te), (n[15] = D), (n[16] = Ee))
    : (Ee = n[16]);
  let De;
  (n[17] !== x ||
  n[18] !== A.request.appUri ||
  n[19] !== A.request.chatGptThreadId ||
  n[20] !== A.request.sourceMessageId ||
  n[21] !== A.request.template ||
  n[22] !== D
    ? ((De = [
        D,
        x,
        A.request.appUri,
        A.request.template,
        A.request.sourceMessageId,
        A.request.chatGptThreadId,
      ]),
      (n[17] = x),
      (n[18] = A.request.appUri),
      (n[19] = A.request.chatGptThreadId),
      (n[20] = A.request.sourceMessageId),
      (n[21] = A.request.template),
      (n[22] = D),
      (n[23] = De))
    : (De = n[23]),
    (0, Z.useEffect)(Ee, De));
  let Oe;
  n[24] === m ? (Oe = n[25]) : ((Oe = _t(m)), (n[24] = m), (n[25] = Oe));
  let N = Oe,
    ke = A.mcpAppHostAdapter.displayMode ?? (x ? `inline` : void 0),
    Ae;
  n[26] === N ? (Ae = n[27]) : ((Ae = { data: N, error: null, isLoading: !1 }), (n[26] = N), (n[27] = Ae));
  let P = Ae,
    F = he($e, p),
    je = he(et, p),
    Me = `ecosystem-focused:${p}`,
    I = he(He.tabById$, Me),
    Ne;
  n[28] !== p || n[29] !== A || n[30] !== D
    ? ((Ne = async () => {
        let { completeEcosystemWidgetFocusedObjectTransfer: e } = await tn();
        e(D, p, A);
      }),
      (n[28] = p),
      (n[29] = A),
      (n[30] = D),
      (n[31] = Ne))
    : (Ne = n[31]);
  let Pe = (0, Z.useEffectEvent)(Ne),
    Fe;
  n[32] !== Pe || n[33] !== I || n[34] !== x || n[35] !== p || n[36] !== D
    ? ((Fe = () => {}), (n[32] = Pe), (n[33] = I), (n[34] = x), (n[35] = p), (n[36] = D), (n[37] = Fe))
    : (Fe = n[37]);
  let Le;
  (n[38] !== I || n[39] !== x || n[40] !== p || n[41] !== D
    ? ((Le = [D, I, x, p]), (n[38] = I), (n[39] = x), (n[40] = p), (n[41] = D), (n[42] = Le))
    : (Le = n[42]),
    (0, Z.useEffect)(Fe, Le));
  let { identity: L } = A.resourceIdentity,
    Re = L.kind === `connector` ? L.connectorId : null,
    ze;
  n[43] !== M || n[44] !== A.widget.name
    ? ((ze = A.widget.name || M.formatMessage($.appTitle)),
      (n[43] = M),
      (n[44] = A.widget.name),
      (n[45] = ze))
    : (ze = n[45]);
  let R = ze,
    z = A.title || R,
    We;
  n[46] !== j ||
  n[47] !== Ce ||
  n[48] !== Re ||
  n[49] !== i ||
  n[50] !== m ||
  n[51] !== ke ||
  n[52] !== I ||
  n[53] !== Me ||
  n[54] !== xe ||
  n[55] !== y ||
  n[56] !== c ||
  n[57] !== x ||
  n[58] !== M ||
  n[59] !== p ||
  n[60] !== ye ||
  n[61] !== b ||
  n[62] !== D ||
  n[63] !== be
    ? ((We = (e) => {
        if (!xt(e)) throw Error(`Expected a hosted widget resource`);
        let t = { ...m, widget: e.widget, resourceKey: e.resourceKey };
        t.getPluginSuggestions != null &&
          (t.mcpAppHostAdapter = {
            ...t.mcpAppHostAdapter,
            pluginSuggestions: t.getPluginSuggestions(t.widget),
          });
        let n = t.widget.name || M.formatMessage($.appTitle),
          r = t.title || n;
        return {
          isVerifiedFirstParty: t.widget.is_verified_first_party === !0,
          heightHint: y ?? e.heightHint,
          minFrameHeight: vt(t),
          appIcon: e.appIcon,
          sourceName: n,
          title: r,
          sidePanelTitle: r,
          mcpAppHostAdapter: {
            ...t.mcpAppHostAdapter,
            displayMode: ke,
            ...Gt(D, c, t, async (e, n) => {
              let r = D.get(Ie, t.request.chatGptThreadId);
              if (r !== `tpp` && r !== `flora`) return !1;
              let a = await Ct();
              return (
                n.throwIfAborted(),
                a(D, {
                  recipient: b,
                  WidgetContent: Qt,
                  conversationId: i,
                  hostId: c,
                  result: t,
                  mcpAppId: p,
                  href: e,
                  signal: n,
                })
              );
            }),
            openFile: Ce && !x && t.request.sourceMessageId != null ? (e, n) => It(D, t, e, n) : null,
            presentation: void 0,
            requestModal: async (e, n) => {
              let { requestEcosystemWidgetModal: r } = await $t();
              (n.throwIfAborted(),
                t.mcpAppHostAdapter.assertActive?.(),
                await r(D, {
                  recipient: b,
                  WidgetDialog: Yt,
                  conversationId: i,
                  hostId: c,
                  result: t,
                  payload: e,
                  signal: n,
                }));
            },
            finance:
              Re === `connector_693864f100e4819093e6ed9b651239f1` ? Nt(D, j, `${ye}${be}${xe}`) : void 0,
          },
        };
      }),
      (n[46] = j),
      (n[47] = Ce),
      (n[48] = Re),
      (n[49] = i),
      (n[50] = m),
      (n[51] = ke),
      (n[52] = I),
      (n[53] = Me),
      (n[54] = xe),
      (n[55] = y),
      (n[56] = c),
      (n[57] = x),
      (n[58] = M),
      (n[59] = p),
      (n[60] = ye),
      (n[61] = b),
      (n[62] = D),
      (n[63] = be),
      (n[64] = We))
    : (We = n[64]);
  let qe = We,
    Je;
  n[65] !== m || n[66] !== ge || n[67] !== D.query
    ? ((Je =
        ge == null
          ? void 0
          : async () => {
              let e = await D.query.fetch(Ue, ge);
              return { resource: _t({ ...m, ...e }), resourceIdentity: e.resourceIdentity };
            }),
      (n[65] = m),
      (n[66] = ge),
      (n[67] = D.query),
      (n[68] = Je))
    : (Je = n[68]);
  let Ze = Je,
    Qe = x && `isolate`,
    B;
  n[69] === Qe ? (B = n[70]) : ((B = ae(`relative h-full min-h-0`, Qe)), (n[69] = Qe), (n[70] = B));
  let V;
  n[71] !== de || n[72] !== z
    ? ((V = de ? (0, Q.jsx)(re, { className: `sr-only`, children: z }) : null),
      (n[71] = de),
      (n[72] = z),
      (n[73] = V))
    : (V = n[73]);
  let H;
  n[74] === p
    ? (H = n[75])
    : ((H = (0, Q.jsx)(pt, { isInlineRequested: !0, mcpAppId: p })), (n[74] = p), (n[75] = H));
  let U;
  n[76] === w ? (U = n[77]) : ((U = w ? { source: `global` } : {}), (n[76] = w), (n[77] = U));
  let W;
  n[78] !== A.analyticsContext || n[79] !== U
    ? ((W = { ...A.analyticsContext, ...U }), (n[78] = A.analyticsContext), (n[79] = U), (n[80] = W))
    : (W = n[80]);
  let G;
  n[81] !== i || n[82] !== c || n[83] !== b || n[84] !== A.request.chatGptThreadId || n[85] !== D
    ? ((G = () =>
        b?.value.kind === `chatgpt`
          ? { kind: `chatgpt`, conversationOrigin: b.get(Ie, b.value.conversationId) }
          : A.request.chatGptThreadId == null && !i.startsWith(`chatgpt:`) && !Xe(i)
            ? { kind: `app-server`, hostId: c }
            : { kind: `chatgpt`, conversationOrigin: D.get(Ve) === `work` ? `tpp` : null }),
      (n[81] = i),
      (n[82] = c),
      (n[83] = b),
      (n[84] = A.request.chatGptThreadId),
      (n[85] = D),
      (n[86] = G))
    : (G = n[86]);
  let tt = A.preferredModelDisplayMode,
    nt = A.resourceIdentity,
    rt = A.widgetStatePersistence,
    it = A.widget.is_verified_first_party === !0,
    K;
  n[87] !== L.connectorId || n[88] !== L.kind || n[89] !== L.targetId || n[90] !== A.request.toolName
    ? ((K =
        L.kind === `connector`
          ? {
              connectorId: L.connectorId,
              linkId: L.targetId,
              resourceUri: null,
              appName: null,
              actionName: A.request.toolName,
            }
          : void 0),
      (n[87] = L.connectorId),
      (n[88] = L.kind),
      (n[89] = L.targetId),
      (n[90] = A.request.toolName),
      (n[91] = K))
    : (K = n[91]);
  let q;
  n[92] !== A.request.template || n[93] !== A.request.toolName || n[94] !== it || n[95] !== K
    ? ((q = {
        widgetSource: `hosted`,
        isVerifiedFirstParty: it,
        originResourceUri: A.request.template,
        originTool: A.request.toolName,
        appContext: K,
      }),
      (n[92] = A.request.template),
      (n[93] = A.request.toolName),
      (n[94] = it),
      (n[95] = K),
      (n[96] = q))
    : (q = n[96]);
  let at = A.mcpAppHostAdapter,
    ot = Re === `connector_693864f100e4819093e6ed9b651239f1` ? (j ?? void 0) : void 0,
    ct = x ? en : u,
    lt = N.appIcon,
    ut = A.request.toolInput,
    dt = A.toolResult,
    J;
  n[97] === A.toolResult ? (J = n[98]) : ((J = qt(A.toolResult)), (n[97] = A.toolResult), (n[98] = J));
  let Y;
  n[99] !== i ||
  n[100] !== a ||
  n[101] !== C ||
  n[102] !== qe ||
  n[103] !== w ||
  n[104] !== E ||
  n[105] !== c ||
  n[106] !== T ||
  n[107] !== S ||
  n[108] !== ue ||
  n[109] !== o ||
  n[110] !== d ||
  n[111] !== p ||
  n[112] !== R ||
  n[113] !== s ||
  n[114] !== b ||
  n[115] !== Ze ||
  n[116] !== N.appIcon ||
  n[117] !== P ||
  n[118] !== A.mcpAppHostAdapter ||
  n[119] !== A.preferredModelDisplayMode ||
  n[120] !== A.request.toolInput ||
  n[121] !== A.request.viewParams ||
  n[122] !== A.resourceIdentity ||
  n[123] !== A.toolResult ||
  n[124] !== A.widgetStatePersistence ||
  n[125] !== W ||
  n[126] !== G ||
  n[127] !== q ||
  n[128] !== ot ||
  n[129] !== ct ||
  n[130] !== J ||
  n[131] !== z
    ? ((Y = (0, Q.jsx)(ft, {
        analyticsContext: W,
        getNewThreadDestination: G,
        resource: P,
        legacyPreferredDisplayMode: tt,
        hostDisplayModes: E,
        recipient: b,
        conversationId: i,
        deepLink: a,
        pluginId: s,
        fullSurface: C,
        hostScroll: T,
        inheritHostBackground: ue,
        hostId: c,
        hostedInThreadScrollLayout: S,
        lifetime: d,
        resourceIdentity: nt,
        mcpAppId: p,
        initialWidgetState: o,
        widgetStatePersistence: rt,
        sourceName: R,
        getResourceHost: qe,
        refetchResource: Ze,
        mcpAppScope: q,
        mcpServerStatuses: void 0,
        mcpAppHostAdapter: at,
        plaidAccountId: ot,
        Frame: ct,
        server: `codex_apps`,
        appIcon: lt,
        sidePanelTitle: z,
        title: z,
        globalSurface: w,
        toolArguments: ut,
        toolResult: dt,
        ...J,
        viewParamsOverride: A.request.viewParams,
      })),
      (n[99] = i),
      (n[100] = a),
      (n[101] = C),
      (n[102] = qe),
      (n[103] = w),
      (n[104] = E),
      (n[105] = c),
      (n[106] = T),
      (n[107] = S),
      (n[108] = ue),
      (n[109] = o),
      (n[110] = d),
      (n[111] = p),
      (n[112] = R),
      (n[113] = s),
      (n[114] = b),
      (n[115] = Ze),
      (n[116] = N.appIcon),
      (n[117] = P),
      (n[118] = A.mcpAppHostAdapter),
      (n[119] = A.preferredModelDisplayMode),
      (n[120] = A.request.toolInput),
      (n[121] = A.request.viewParams),
      (n[122] = A.resourceIdentity),
      (n[123] = A.toolResult),
      (n[124] = A.widgetStatePersistence),
      (n[125] = W),
      (n[126] = G),
      (n[127] = q),
      (n[128] = ot),
      (n[129] = ct),
      (n[130] = J),
      (n[131] = z),
      (n[132] = Y))
    : (Y = n[132]);
  let X;
  n[133] !== je ||
  n[134] !== C ||
  n[135] !== p ||
  n[136] !== F ||
  n[137] !== D ||
  n[138] !== fe ||
  n[139] !== z
    ? ((X =
        !C && fe
          ? (0, Q.jsx)(`div`, {
              className: `flex items-center`,
              children:
                F === `launcher` && !je.isOpen
                  ? (0, Q.jsx)(t, {
                      color: `ghost`,
                      size: `compact`,
                      onClick: () => ve(D, p),
                      children: (0, Q.jsx)(ee, {
                        id: `chatgpt.widget.open`,
                        defaultMessage: `Open {name}`,
                        description: `Reopen a closed embedded app`,
                        values: { name: z },
                      }),
                    })
                  : (0, Q.jsx)(gt, { disabled: !1, mcpAppId: p }),
            })
          : null),
      (n[133] = je),
      (n[134] = C),
      (n[135] = p),
      (n[136] = F),
      (n[137] = D),
      (n[138] = fe),
      (n[139] = z),
      (n[140] = X))
    : (X = n[140]);
  let ht;
  n[141] !== C ||
  n[142] !== E ||
  n[143] !== T ||
  n[144] !== p ||
  n[145] !== R ||
  n[146] !== F ||
  n[147] !== P ||
  n[148] !== me
    ? ((ht = (0, Q.jsx)(st, {
        showLoadingStatus: me,
        hostDisplayModes: E,
        resource: P,
        fullSurface: C,
        hostScroll: T,
        mcpAppId: p,
        pluginName: R,
        presentation: F,
      })),
      (n[141] = C),
      (n[142] = E),
      (n[143] = T),
      (n[144] = p),
      (n[145] = R),
      (n[146] = F),
      (n[147] = P),
      (n[148] = me),
      (n[149] = ht))
    : (ht = n[149]);
  let yt;
  return (
    n[150] !== B || n[151] !== V || n[152] !== H || n[153] !== Y || n[154] !== X || n[155] !== ht
      ? ((yt = (0, Q.jsxs)(`div`, {
          ref: mt,
          className: B,
          "data-mcp-app-portal-target": `true`,
          children: [V, H, Y, X, ht],
        })),
        (n[150] = B),
        (n[151] = V),
        (n[152] = H),
        (n[153] = Y),
        (n[154] = X),
        (n[155] = ht),
        (n[156] = yt))
      : (yt = n[156]),
    yt
  );
}
async function $t() {
  return _(
    () => import(`./chatgpt-ecosystem-widget-modal-8b5541de8566.js`),
    __vite__mapDeps([17, 2, 1, 3, 18, 4, 5, 19, 20, 21]),
    import.meta.url,
  );
}
function en(e) {
  let t = (0, nn.c)(2),
    { sessionId: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Q.jsx)(lt, { allowGlobalHost: !1, sessionId: n })), (t[0] = n), (t[1] = r)),
    r
  );
}
async function tn() {
  return _(
    () => import(`./widget-focused-object-63f668fa1062.js`),
    __vite__mapDeps([22, 1, 2, 3, 4, 5, 23, 18, 19, 20, 21]),
    import.meta.url,
  );
}
var nn, Z, Q, $;
function rn() {
  return (rn = e(() => {
    ((nn = ue()),
      wt(),
      m(),
      d(),
      w(),
      (Z = D()),
      v(),
      h(),
      L(),
      ye(),
      ze(),
      H(),
      T(),
      E(),
      y(),
      A(),
      Ft(),
      Y(),
      X(),
      ht(),
      dt(),
      V(),
      ct(),
      nt(),
      O(),
      qe(),
      yt(),
      bt(),
      Re(),
      rt(),
      Rt(),
      be(),
      Ht(),
      Kt(),
      Jt(),
      (Q = me()),
      C(),
      ($ = r({
        appTitle: {
          id: `chatgpt.ecosystemWidget.title`,
          defaultMessage: `App`,
          description: `Fallback title for an Apps SDK widget opened from ChatGPT`,
        },
        openingApp: {
          id: `chatgpt.ecosystemWidget.opening`,
          defaultMessage: `Opening app…`,
          description: `Status shown while an Apps SDK widget is opening`,
        },
        openAppError: {
          id: `chatgpt.ecosystemWidget.openError`,
          defaultMessage: `Couldn’t open app`,
          description: `Error title shown when an Apps SDK widget cannot be opened`,
        },
        openAppErrorDescription: {
          id: `chatgpt.ecosystemWidget.openErrorDescription`,
          defaultMessage: `Try opening the app again`,
          description: `Error guidance shown when an Apps SDK widget cannot open`,
        },
      })));
  }))();
}
export { zt as a, Dt as c, rn as i, Et as l, Yt as n, Ht as o, en as r, Mt as s, Qt as t, Tt as u };
//# sourceMappingURL=chatgpt-ecosystem-widget-86361a1e1747.js.map
