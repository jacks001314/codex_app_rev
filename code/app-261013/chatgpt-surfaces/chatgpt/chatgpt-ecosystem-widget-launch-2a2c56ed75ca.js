import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as t,
  Brt as n,
  EPt as r,
  Irt as i,
  JIt as a,
  JMt as o,
  LLt as s,
  Ort as c,
  RLt as l,
  Rpt as u,
  TLt as d,
  Trt as f,
  _It as p,
  eLt as m,
  fLt as h,
  gNt as g,
  hrt as _,
  krt as v,
  oIt as y,
  pIt as b,
  pLt as x,
  rst as S,
  spt as ee,
  vrt as C,
  xLt as w,
  xrt as T,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Qn as E,
  $yr as D,
  $yt as te,
  C4n as O,
  E4n as ne,
  EXn as re,
  FWn as ie,
  GMr as k,
  IWn as A,
  Kyt as ae,
  LWn as oe,
  NWn as se,
  O4n as j,
  QDr as M,
  Qyt as N,
  TXn as ce,
  XDr as P,
  XMr as F,
  YMr as I,
  Ymr as L,
  bOn as R,
  bZn as le,
  e$n as z,
  ehr as ue,
  fMn as de,
  fOr as fe,
  hOr as pe,
  nMn as B,
  oMn as me,
  pZn as he,
  qyt as V,
  rMn as H,
  tNr as U,
  uMn as W,
  vXn as ge,
  wOn as G,
  wXn as K,
  y4n as _e,
  yXn as q,
  yjn as J,
} from "./app-initial-5851df3f6cb1.js";
import { i as ve, r as ye } from "./plugin-connected-account-links-8dea8c830000.js";
var Y, be;
function X() {
  return (X = e(() => {
    ((Y = (function (e) {
      return (
        (e.CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_UNSPECIFIED = `CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_UNSPECIFIED`),
        (e.CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_LAUNCH_ATTEMPTED = `CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_LAUNCH_ATTEMPTED`),
        (e.CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_OPENED = `CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_OPENED`),
        (e.CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_RENDER_READY = `CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_RENDER_READY`),
        (e.CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_ERROR = `CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_ERROR`),
        (e.CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_CLOSED = `CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_CLOSED`),
        (e.UNRECOGNIZED = `UNRECOGNIZED`),
        e
      );
    })({})),
      (be = { $type: `protobuf_analytics_events.v1.ChatgptEcosystemWidgetLifecycle` }));
  }))();
}
function xe(e, t) {
  let n = {
      launchAttemptId: crypto.randomUUID(),
      sourceMessageId: t.sourceMessageId,
      surface: t.logging.surface,
      intentType: t.logging.intentType,
      entityType: t.logging.entityType,
    },
    r = { entrypointType: t.logging.entrypointType },
    a = null,
    o = 0,
    s = !1,
    l = !1,
    u = null,
    d = (r, i) => {
      M(e, be, { ...n, ...i, actionType: r, conversationId: e.get(he, t.chatGptThreadId) ?? void 0 });
    };
  return (
    d(Y.CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_LAUNCH_ATTEMPTED, r),
    {
      startSession() {
        o = Date.now();
        let e = crypto.randomUUID();
        a = { launcherSessionId: e, widgetSessionId: e, widgetInstanceId: crypto.randomUUID() };
      },
      opened({ messageId: e, widgetSessionId: t, widgetInstanceId: n }) {
        a != null &&
          ((a = { ...a, widgetSessionId: t ?? a.widgetSessionId, widgetInstanceId: n ?? a.widgetInstanceId }),
          d(Y.CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_OPENED, { ...a, ...r, messageId: e ?? void 0 }));
      },
      renderReady() {
        a != null &&
          !s &&
          !l &&
          ((s = !0), (u = null), d(Y.CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_RENDER_READY, a));
      },
      error(e, { reason: t = `unknown_error`, error: n, toolMetadata: o } = {}) {
        if (l || u === e) return;
        u = e;
        let s = Z.safeParse(o).data,
          f = n instanceof _ ? n.diagnosticError : n,
          p = f instanceof T ? f : void 0;
        d(Y.CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_ERROR, {
          ...r,
          failurePoint: Q.parse(e),
          errorReason: Se.parse(t),
          requestId: s?.request_id ?? v.parse(p?.requestId),
          xOaiRequestId: s?.x_oai_request_id,
          errorCode: s?.error_code ?? c.parse(p?.code),
          errorHttpStatusCode: i(
            s?.error_http_status_code ?? p?.status ?? (n instanceof _ ? n.responseStatus : void 0),
          ),
          toolStatus: s?.status,
          ...a,
        });
      },
      close(e) {
        a == null ||
          l ||
          ((l = !0),
          d(Y.CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_CLOSED, {
            ...a,
            closeReason: e,
            timeInWidgetMs: Math.max(0, Date.now() - o),
          }));
      },
    }
  );
}
var Z, Q, Se;
function Ce() {
  return (Ce = e(() => {
    (X(),
      n(),
      r(),
      f(),
      P(),
      C(),
      J(),
      (Z = x({
        request_id: v,
        x_oai_request_id: v,
        error_code: c,
        error_http_status_code: h()
          .int()
          .min(100)
          .max(599)
          .optional()
          .catch(void 0),
        status: y([`success`, `error`])
          .optional()
          .catch(void 0),
      })),
      (Q = y([
        `bootstrap_unexpected_error`,
        `bootstrap_status`,
        `file_authorization`,
        `launch_widget`,
        `widget_render`,
      ])
        .optional()
        .catch(void 0)),
      (Se = y([
        `unknown_error`,
        `ready`,
        `auto_install_required`,
        `connect_required`,
        `auth_required`,
        `blocked`,
        `not_found`,
        `missing_tool_response`,
        `tool_error`,
        `missing_widget_html`,
      ]).catch(`unknown_error`)));
  }))();
}
async function we(e, t) {
  let n = ae(e),
    r = n.connectorTarget;
  if (r == null || r.targetId != null || ![`CODEX`, `TPP`].includes(e.productSku?.toUpperCase() ?? ``))
    return null;
  let i = [],
    a = new Set(),
    o;
  for (let e = 0; e < 32; e++) {
    let t = De.parse(await n.handleRequest({ method: `tools/list`, params: o == null ? {} : { cursor: o } }));
    for (let e of t.tools) {
      let t = Ee.safeParse(e).data,
        n = t?._meta._codex_apps.resource_uri.split(`/`);
      if (
        t == null ||
        n?.length !== 4 ||
        n[0] !== `` ||
        n[1] !== r.connectorId ||
        !n[2] ||
        !n[3] ||
        n[2].startsWith(`synthetic_link::`)
      )
        continue;
      let a = t._meta._codex_apps.requires_explicit_link_id
        ? (t._meta.link_accounts?.map((e) => e.link_id) ?? [])
        : [n[2]];
      i.push({ tool: t, actionName: n[3], links: a });
    }
    if (((o = t.nextCursor), o == null)) break;
    if (a.has(o) || e === 31) throw Te();
    a.add(o);
  }
  let s = i.filter(({ tool: e, actionName: n }) => n === t || e.name === t);
  if (s.length !== 1 || s[0].links.length === 0) throw Te();
  let c = s[0].links[0];
  if (c.includes(`/`) || c.startsWith(`synthetic_link::`)) throw Te();
  let l = new Map();
  for (let { tool: e, actionName: t, links: n } of i) {
    let r = e._meta.ui?.visibility ?? e._meta[`ui/visibility`];
    if (n.includes(c) && (r == null || (Array.isArray(r) ? r.includes(`app`) : r === `app`))) {
      if (l.has(t)) throw Te();
      l.set(t, { name: e.name, metadata: e._meta._codex_apps });
    }
  }
  return {
    target: { connectorId: r.connectorId, targetId: c },
    actionName: s[0].actionName,
    toolDescriptors: l,
  };
}
function Te() {
  return ne(`The widget connection is unavailable. Reopen the app to retry.`, o.InvalidRequest);
}
var Ee, De;
function Oe() {
  return (Oe = e(() => {
    (g(),
      r(),
      j(),
      V(),
      (Ee = x({
        name: d(),
        _meta: x({
          _codex_apps: m({
            resource_uri: d(),
            contains_mcp_source: p(),
            requires_explicit_link_id: p().optional(),
          }),
          link_accounts: b(x({ link_id: d().min(1) })).optional(),
          ui: x({ visibility: b(d()).optional() }).optional(),
          "ui/visibility": s([d(), b(d())]).optional(),
        }),
      })),
      (De = x({ tools: b(l()), nextCursor: d().optional() })));
  }))();
}
async function ke({
  scope: e,
  hostId: t,
  chatGptConversationId: n,
  threadId: r,
  productSku: i,
  payload: a,
  sourceMessageId: o,
  prepareToolInput: s,
  onTracking: c,
  accountId: l,
  signal: u,
}) {
  let d = {
    ...Pe.parse(a),
    chatGptThreadId: n == null ? null : E(n),
    threadId: r,
    productSku: i,
    sourceMessageId: o,
  };
  u?.throwIfAborted();
  let f = xe(e, d);
  c?.(f);
  let p = await Ae({
    scope: e,
    hostId: t,
    request: d,
    mode: d.mode,
    sourceMessageId: o,
    prepareToolInput: s,
    tracking: f,
    accountId: l,
    signal: u,
  });
  return {
    ...p,
    tracking: f,
    request: {
      ...d,
      productSku: p.request.productSku,
      appUri: p.request.appUri,
      toolInput: Pe.shape.toolInput.parse(p.request.toolInput),
    },
  };
}
async function Ae({
  scope: e,
  analyticsContext: n,
  hostId: r,
  request: i,
  mode: a,
  sourceMessageId: o,
  accountId: s,
  accountSource: c,
  signal: u,
  prepareToolInput: f,
  tracking: p,
}) {
  u?.throwIfAborted();
  let m = e.get(F);
  return O(
    { operation: `Hosted app launch`, starting: `Launching hosted app` },
    {
      safe: { chatGptThreadId: i.chatGptThreadId },
      sensitive: { hostId: r, appUri: i.appUri, template: i.template },
    },
    async (h) => {
      let g = e.get(I),
        _ = e.get(k),
        v = c === `apps` ? fe : k,
        S = e.get(v);
      if (s != null && s !== S) throw Error(`MCP app account changed before opening`);
      let C = () => {
          if ((u?.throwIfAborted(), i.chatGptThreadId != null && e.get(R, i.chatGptThreadId)))
            throw new DOMException(`MCP app blocked by conversation Lockdown`, `AbortError`);
          if (S !== e.get(v) || _ !== e.get(k) || m !== e.get(F) || g !== e.get(I))
            throw Error(`MCP app account changed while opening`);
        },
        T = i.productSku ?? (e.get(le, i.chatGptThreadId) === `tpp` ? `tpp` : void 0),
        E = `bootstrap_unexpected_error`,
        O = `unknown_error`,
        ne;
      try {
        C();
        let s =
            S == null && T == null
              ? void 0
              : {
                  ...(S == null ? {} : { "ChatGPT-Account-ID": S, [ee]: S }),
                  ...(T == null ? {} : { "OAI-Product-Sku": T }),
                },
          _ = await te(e, i.chatGptThreadId, u);
        C();
        let v = i.linkId,
          k = ge(null, i.appUri);
        v === void 0 &&
          k != null &&
          S != null &&
          m != null &&
          (v = e.get(ve, { accountId: S, userId: m, appId: k.connectorId }) ?? void 0);
        let A = {
            additionalHeaders: s,
            expectedIdentity: S == null || g == null ? void 0 : { accountId: S, userId: g },
            assertRequestCurrent: C,
            signal: u,
          },
          se = {
            app_uri: i.appUri,
            link_id: v,
            conversation_id: _,
            launcher_host: `chatgpt`,
            template_pointer: i.template,
            tool_input: i.toolInput,
            tool_name: i.toolName,
          },
          j = await L.safePost(`/ecosystem/launcher/bootstrap`, { ...A, requestBody: se });
        if ((C(), f != null && j.status === `auto_install_required`)) throw new $(j.connector_id, `NONE`);
        let M =
          j.status === `auto_install_required`
            ? await L.safePost(`/ecosystem/launcher/auto_install`, { ...A, requestBody: se })
            : j;
        C();
        let N = M.reason?.trim();
        switch (
          (M.status !== `ready` &&
            M.status !== `connect_required` &&
            ((E = `bootstrap_status`), (O = M.status)),
          M.status)
        ) {
          case `ready`:
            break;
          case `connect_required`:
            throw new $(M.connector_id, M.preferred_auth_type === `oauth` ? `OAUTH` : void 0, N);
          case `auth_required`:
            throw c === `apps` && N === `selected_link_auth_required` && v != null
              ? new $(M.connector_id, `OAUTH`, N, v)
              : Error(N || `Sign in to ChatGPT before opening this app`);
          case `blocked`:
            throw Error(N || `This app is blocked from opening.`);
          case `not_found`:
            throw Error(N || `This app is no longer available.`);
        }
        let P = D(M.normalized_app_uri) ?? i.appUri;
        (C(), (E = `file_authorization`), h(`Preparing app tool input`));
        let F = f == null ? i.toolInput : await f(P);
        C();
        let I = T ?? me(P);
        ((E = `launch_widget`), p?.startSession(), C());
        let R = await we(
          {
            scope: e,
            attribution: n,
            appUri: P,
            accountId: S ?? void 0,
            accountSource: c,
            signal: u,
            threadId: i.threadId,
            productSku: T,
            chatGptConversationId: i.chatGptThreadId,
            messageId: o ?? null,
            originMetadata: { attribution_id: M.connector_id, link_id: v },
          },
          i.toolName,
        );
        (C(), (v ??= R?.target.targetId));
        let le = { ...i, appUri: P, toolInput: F, linkId: v, productSku: T, mode: a },
          z =
            R == null
              ? void 0
              : {
                  hostId: r,
                  accountId: S ?? void 0,
                  accountSource: c,
                  appUri: P,
                  template: i.template,
                  connectorId: R.target.connectorId,
                  targetId: R.target.targetId,
                  actionName: R.actionName,
                  productSku: I,
                },
          ue = z == null ? null : je(e, z, u);
        h(`Requesting app launch`);
        let fe = L.safePost(`/ecosystem/launch_widget`, {
            isExpectedError: Me,
            ...A,
            requestBody: {
              app_uri: P,
              link_id: v,
              conversation_id: _,
              launcher_host: `chatgpt`,
              mode: a,
              template: i.template,
              tool_input: F,
              tool_name: R?.actionName ?? i.toolName,
              view_params: i.viewParams ?? null,
            },
          }),
          pe = (
            ue ??
            L.safeGet(`/ecosystem/widget`, {
              isExpectedError: oe,
              ...A,
              additionalHeaders: { ...s, ...(I == null ? {} : { "OAI-Product-Sku": I }) },
              parameters: {
                query: {
                  launcher_host: `chatgpt`,
                  connector_id: v == null ? void 0 : M.connector_id,
                  action_name: v == null ? void 0 : i.toolName,
                  link_id: v,
                  template_pointer: i.template,
                  uri: P,
                },
              },
            }).then((e) => ({ widget: e, resourceKey: void 0 }))
          ).then(
            (e) => ({ resource: e }),
            (e) => ({ error: e }),
          ),
          B = await fe;
        C();
        let he =
          B.tool_response_metadata ??
          w(d(), l()).safeParse(B.widget?.chatgpt_sdk?.tool_response_metadata).data;
        if (he?.status === `error` && he.error_code === `tunnel_client_network_access_denied`) throw ie();
        let V = B.tool_response;
        if (V == null)
          throw (
            (O = `missing_tool_response`),
            Error(B.missing_widget_reason ?? `The app did not return a widget tool result.`)
          );
        let H = x({
          launcher_fallback: t(!0),
          status: y([`connect_required`, `auth_required`, `blocked`, `not_found`]),
          connector_id: d().nullish(),
          preferred_auth_type: t(`oauth`).nullish(),
        }).safeParse(V.structuredContent);
        if (H.success)
          throw H.data.status === `connect_required`
            ? new $(H.data.connector_id, H.data.preferred_auth_type === `oauth` ? `OAUTH` : void 0)
            : ((O = H.data.status), Error(`The app is no longer available to launch`));
        let U = B.widget?.chatgpt_sdk,
          W = { ...U, ...B.tool_response_metadata },
          G = ge(W, P);
        if (
          R != null &&
          G?.targetId != null &&
          (G.connectorId !== R.target.connectorId || G.targetId !== R.target.targetId)
        )
          throw Error(`The widget connection is unavailable. Reopen the app to retry.`);
        let K = B.tool_response_metadata ?? w(d(), l()).safeParse(U?.tool_response_metadata).data ?? V._meta,
          _e = x({ connector_id: d(), link_id: d() }).safeParse(K?.[`openai/connector_auth`]).data;
        if (V.isError && _e != null) throw new $(_e.connector_id, `OAUTH`);
        if (((ne = K), V.isError === !0 || K?.status === `error`))
          throw ((O = `tool_error`), Error(D(K?.reason) ?? `The app tool call failed.`));
        let q = await pe;
        if ((C(), `error` in q)) throw q.error;
        let { widget: J, resourceKey: ye } = q.resource;
        if (J.html.trim().length === 0)
          throw ((O = `missing_widget_html`), Error(`The app did not return widget HTML.`));
        let Y = ce.parse(
            re({ ...V, ...(K == null ? {} : { _meta: K }) }, { preserveStructuredContentNull: !0 }),
          ),
          be = D(U?.resolved_pineapple_uri) ?? P,
          X = B.widget?.tool_message_id ?? o ?? null,
          xe = ae({
            scope: e,
            attribution: n,
            appUri: be,
            accountId: S ?? void 0,
            accountSource: c,
            signal: u,
            threadId: i.threadId,
            productSku: T,
            chatGptConversationId: i.chatGptThreadId,
            messageId: X,
            originMetadata: {
              ...W,
              link_id: v ?? W.link_id,
              ...(R == null ? {} : { attribution_id: R.target.connectorId, link_id: R.target.targetId }),
            },
            toolDescriptors: R?.toolDescriptors,
          }),
          Z = {
            hostId: r,
            server: `codex_apps`,
            threadId: i.threadId ?? null,
            connectorTarget: xe.connectorTarget,
            accountSource: c,
          },
          Q = e.get(de, Z);
        if (Q == null) throw Error(`MCP app account changed while opening`);
        return (
          u?.throwIfAborted(),
          p?.opened({
            messageId: X,
            widgetSessionId: D(U?.widget_session_id),
            widgetInstanceId: B.widget?.tool_message_id ?? crypto.randomUUID(),
          }),
          {
            analyticsContext: n,
            distributionChannel: y([`only_me`, `openai`, `external`])
              .catch(`external`)
              .parse(U?.distribution_channel),
            suggestionMessageId: D(U?.suggestion_message_id) ?? void 0,
            redirectDomains: x({ redirect_domains: b(d()).optional() }).safeParse(U?.csp).data
              ?.redirect_domains,
            attributionId: D(U?.attribution_id) ?? void 0,
            widgetSessionId: D(U?.widget_session_id) ?? void 0,
            resourceIdentity: { context: Z, identity: Q },
            resourceQuery: z,
            resourceKey: ye,
            mcpAppHostAdapter: xe,
            request: le,
            toolResult: Y,
            widget: J,
          }
        );
      } catch (e) {
        throw Me(e)
          ? (C(), ie())
          : (h(`Hosted app launch stopped`, { safe: { failurePoint: E, failureReason: O } }),
            !u?.aborted &&
              !(e instanceof Error && e.name === `AbortError`) &&
              !(e instanceof $) &&
              p?.error(E, { reason: O, error: e, toolMetadata: ne }),
            e);
      }
    },
    { signal: u },
  );
}
async function je(e, t, n) {
  let r = e.query.getOptions(B, t),
    i = e.queryClient.fetchQuery(r),
    a = () => {},
    o = new Promise((t) => {
      let n = () => {
        let n = e.queryClient.getQueryData(r.queryKey);
        n !== void 0 && t(n);
      };
      ((a = e.queryClient.getQueryCache().subscribe(n)), n());
    });
  try {
    let e = Promise.race([i, o]);
    return await (n == null ? e : u(e, n));
  } finally {
    a();
  }
}
function Me(e) {
  if (oe(e)) return !0;
  if (!(e instanceof _ || e instanceof T) || e.status !== 403) return !1;
  let n = x({ tool_response_metadata: x({ status: t(`error`), error_code: t(se) }) });
  if (e instanceof T) return n.safeParse(e.json).success;
  try {
    return n.safeParse(JSON.parse(e.message)).success;
  } catch {
    return !1;
  }
}
var Ne, Pe, $;
function Fe() {
  return (Fe = e(() => {
    (S(),
      r(),
      W(),
      pe(),
      U(),
      ue(),
      f(),
      _e(),
      K(),
      ye(),
      C(),
      H(),
      q(),
      N(),
      z(),
      J(),
      A(),
      G(),
      V(),
      Ce(),
      Oe(),
      (Ne = x({
        entityId: d().min(1),
        entityType: y([`product`, `place`, `spotlight`, `account`]),
        entrypointLabel: d().min(1),
        entrypointType: y([`button`, `widget`]),
        intentType: y([`checkout`, `reservation`, `service`, `onboarding`, `account_detail`]),
        surface: y([`search_results`, `image_generation`, `new_thread_home`, `mattress_accounts_tab`]),
      })),
      (Pe = x({
        appUri: d().min(1),
        logging: Ne,
        mode: y([`fullscreen`, `modal`]),
        template: d().min(1),
        toolInput: w(d(), a()),
        toolName: d().min(1),
        viewParams: w(d(), a()).nullable().optional(),
      })),
      ($ = class extends Error {
        connectorId;
        authType;
        reauthLinkId;
        constructor(e, t, n, r) {
          (super(n || `Connect this app before opening it`),
            (this.connectorId = e),
            (this.authType = t),
            (this.reauthLinkId = r));
        }
      }));
  }))();
}
export { Ae as i, Fe as n, ke as r, $ as t };
//# sourceMappingURL=chatgpt-ecosystem-widget-launch-2a2c56ed75ca.js.map
