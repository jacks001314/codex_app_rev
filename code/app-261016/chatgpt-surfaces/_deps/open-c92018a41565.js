const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./open-5a77a42759ae.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./source-icons-98bd2838df77.js",
      "./load-view-c5fe81d0a2fa.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $Rt as n,
  $mt as r,
  $st as i,
  FBt as a,
  HFt as o,
  LNt as s,
  LRt as c,
  MPt as l,
  NLt as u,
  NSt as d,
  OFt as f,
  ORt as p,
  PBt as m,
  Pit as h,
  Qst as g,
  SLt as _,
  TLt as v,
  VRt as y,
  VSt as b,
  Vrt as ee,
  XOt as te,
  Y3 as ne,
  Z3 as re,
  ZSt as x,
  ezt as S,
  hRt as C,
  iFt as ie,
  iPt as ae,
  iwt as oe,
  jit as se,
  kFt as ce,
  kLt as w,
  kRt as T,
  mCt as le,
  nCt as ue,
  qrt as de,
  rwt as fe,
  sct as E,
  tkt as D,
  uRt as O,
  uSt as pe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Cr as me,
  A6t as he,
  ADn as ge,
  Air as _e,
  Bhr as k,
  CIr as ve,
  D2n as ye,
  DFn as be,
  EFn as xe,
  IFn as Se,
  K3t as Ce,
  Mir as we,
  O2n as Te,
  PFn as A,
  QCr as j,
  RFn as M,
  SIr as Ee,
  VPn as N,
  WCr as De,
  XDn as Oe,
  Y1n as ke,
  YCr as Ae,
  ZDn as je,
  aJn as Me,
  ewr as Ne,
  f6t as Pe,
  h5n as Fe,
  i6t as Ie,
  iRr as Le,
  n0n as Re,
  nJn as P,
  o2n as ze,
  oJn as Be,
  oxt as Ve,
  p5n as He,
  q1n as F,
  rJn as Ue,
  s2n as We,
  sxt as Ge,
  tyr as Ke,
} from "./app-initial-ad16eaadf81f.js";
function qe(e, t) {
  let n = I(t);
  if (n == null) return null;
  let r = new Set(),
    i = [],
    a = 0;
  for (let t of e) {
    We(t) && a++;
    let e = t.id;
    if (e == null) continue;
    let n = H.safeParse(t.metadata).data;
    if (n == null) continue;
    for (let e of n.selected_mcp_sources ?? [])
      e.connector_type === `MCP` &&
        (e.status === `ONLY_ME` || e.app_metadata?.review?.status === `DEVELOPMENT`) &&
        r.add(k(e.id));
    let o = (t, n, r, o) => {
      i.push({
        index: i.length,
        origin: o,
        connectorId: t,
        linkId: n?.trim() ? n : null,
        messageId: e,
        turn: a,
        resource: r,
      });
    };
    if (t.author.role === `assistant` && !Ne(t) && !me(t) && (t.channel === `final` || t.end_turn === !0)) {
      let t = 0;
      for (let r of n.content_references ?? []) {
        let n = W.safeParse(r).data;
        if (n == null) continue;
        let i = z.safeParse({
          id: JSON.stringify([e, n.citation_id]),
          url: n.url,
          title: n.title,
          activities: [`read`],
          open: { tool: n.tool_name, arguments: n.tool_arguments },
        }).data;
        if (
          i != null &&
          (i.url != null || i.open != null) &&
          (o(n.connector_id, n.link_id, i, `citation`), ++t === 100)
        )
          break;
      }
    }
    let s = n.chatgpt_sdk,
      c = n.invoked_plugin?.http_response_status;
    if (
      t.author.role !== `tool` ||
      t.status === `in_progress` ||
      t.status === `finished_partial_completion` ||
      n.is_error ||
      s?.is_error ||
      n.__internal?.api_tool_error?.error_code != null ||
      [`error`, `cancelled`].includes(s?.tool_response_metadata?.status ?? ``) ||
      (c != null && (!Number.isInteger(Number(c)) || Number(c) < 200 || Number(c) >= 300))
    )
      continue;
    let l = n.invoked_resource?.connector_id;
    if (!l || l === `connector_openai_plugin_management`) continue;
    if (n.invoked_resource?.publish_status === `private` || s?.distribution_channel === `only_me`) {
      r.add(k(l));
      continue;
    }
    let u = U.safeParse(Ae(t)).data,
      d,
      f;
    if (u != null) {
      if (u.appContext.connectorId !== l) continue;
      ((d = [u.result]), (f = u.appContext.linkId));
    } else {
      if (s?.tool_response_metadata?.status !== `success`) continue;
      let e = n.invoked_resource?.resource_uri?.replace(/^\/+|\/+$/gu, ``).split(`/`);
      if (
        e == null ||
        (e.length !== 2 && e.length !== 3) ||
        e.some((e) => !e) ||
        ((e.length === 3 || /^(connector_|asdk_app_)/u.test(e[0])) && e[0] !== l)
      )
        continue;
      ((d = [s.tool_response_metadata.call_tool_result, s.tool_response_metadata.mcp_tool_result]),
        (f = s.link_id || s[`openai/link_id`] || (e.length === 3 ? e[1] : null)));
    }
    for (let e of d) {
      let t = B.safeParse(e).data;
      if (!t || t.isError) continue;
      let n = V.safeParse(t._meta ?? t.meta).data?.[`openai/resourceActivities`].resources;
      if (n != null) {
        for (let e of n) o(l, f, e, `resource`);
        break;
      }
    }
  }
  let o = new Set(),
    s = new Map();
  for (let e of i) {
    if (r.has(k(e.connectorId))) continue;
    let { resource: t, connectorId: n, linkId: i } = e,
      a = [JSON.stringify([n, i, `id`, t.id])];
    (t.url != null && a.push(JSON.stringify([n, i, `url`, I(t.url)])),
      t.open != null && a.push(fe([n, i, `open`, t.open])));
    let c = new Set(
        a.flatMap((e) => {
          let t = s.get(e);
          return t == null ? [] : [t];
        }),
      ),
      l = c.values().next().value ?? { aliases: new Set(), activities: [] };
    for (let e of c)
      if (e !== l) {
        l.activities.push(...e.activities);
        for (let t of e.aliases) l.aliases.add(t);
        o.delete(e);
      }
    l.activities.push(e);
    for (let e of a) l.aliases.add(e);
    for (let e of l.aliases) s.set(e, l);
    o.add(l);
  }
  let c = [...o].filter((e) => {
    let t = new Set(e.activities.filter((e) => e.resource.activities.includes(`created`)).map((e) => e.turn)),
      r = e.activities.reduce(
        (e, t) => (t.resource.url != null && (e == null || t.index > e.index) ? t : e),
        void 0,
      )?.resource.url;
    return (
      r != null &&
      I(r) === n &&
      e.activities.some((e) => e.resource.activities.includes(`read`) && !t.has(e.turn))
    );
  });
  if (c.length !== 1) return null;
  let l = c[0].activities.filter((e) => e.resource.activities.includes(`read`) && e.resource.open != null),
    u = l.filter((e) => e.origin === `citation` && e.resource.url != null && I(e.resource.url) === n),
    d = u.length > 0 ? u : l,
    f = d.reduce((e, t) => (e == null || t.index > e.index ? t : e), void 0);
  return f?.resource.open == null ||
    d.some(
      (e) =>
        e.resource.url != null &&
        I(e.resource.url) === n &&
        !(0, L.default)(e.resource.open, f.resource.open),
    )
    ? null
    : {
        connectorId: f.connectorId,
        linkId: f.linkId,
        messageId: f.messageId,
        title: f.resource.title?.trim() || t,
        ...f.resource.open,
      };
}
function I(e) {
  let t = URL.parse(e);
  return t == null ||
    ![`https:`, `http:`].includes(t.protocol) ||
    t.username ||
    t.password ||
    e.includes(`\\`)
    ? null
    : (t.hostname !== `mail.google.com` && (t.hash = ``),
      (t.pathname = t.pathname.replace(/\/+$/u, ``) || `/`),
      t.searchParams.delete(`utm_source`),
      t.searchParams.sort(),
      t.href);
}
var L, R, z, B, V, H, U, W;
function G() {
  return (G = e(() => {
    (oe(),
      (L = t(ie(), 1)),
      j(),
      o(),
      ze(),
      (R = T({
        tool: y().regex(/^[a-zA-Z0-9_.-]{1,256}$/u),
        arguments: c(y(), O()).refine((e) => new TextEncoder().encode(JSON.stringify(e)).length <= 16384),
      })),
      (z = T({
        id: y().min(1).max(16384),
        url: y()
          .max(16384)
          .refine((e) => I(e) != null)
          .optional(),
        title: y().max(16384).optional(),
        activities: w(_([`read`, `created`, `updated`]))
          .min(1)
          .max(100),
        open: R.optional().catch(void 0),
      })),
      (B = T({ isError: u().optional(), _meta: S().optional(), meta: S().optional() })),
      (V = T({
        "openai/resourceActivities": T({
          version: C(1),
          resources: w(z.required({ url: !0 }))
            .min(1)
            .max(100),
        }),
      })),
      (H = T({
        selected_mcp_sources: w(
          T({
            id: y(),
            connector_type: y().nullish(),
            status: y().nullish(),
            app_metadata: T({ review: T({ status: y().nullish() }).nullish() }).nullish(),
          }),
        ).nullish(),
        invoked_resource: T({
          connector_id: y().nullish(),
          resource_uri: y().nullish(),
          publish_status: y().nullish(),
        }).nullish(),
        invoked_plugin: T({ http_response_status: n([y(), p()]).nullish() }).nullish(),
        is_error: u().nullish(),
        __internal: T({ api_tool_error: T({ error_code: S() }).nullish() }).nullish(),
        chatgpt_sdk: T({
          distribution_channel: y().nullish(),
          is_error: u().nullish(),
          link_id: y().nullish(),
          "openai/link_id": y().nullish(),
          tool_response_metadata: T({
            status: y().nullish(),
            call_tool_result: S().optional(),
            mcp_tool_result: S().optional(),
          }).nullish(),
        }).nullish(),
        content_references: w(S()).nullish(),
      })),
      (U = T({
        type: C(`mcpToolCall`),
        server: _([`codex_apps`, `codex-connectors-mcp`]),
        status: C(`completed`),
        error: v().optional(),
        appContext: T({ connectorId: y(), linkId: y().nullable() }),
        result: B,
      })),
      (W = T({
        type: C(`mcp_source`),
        citation_id: y().trim().min(1),
        connector_id: y().trim().min(1),
        link_id: y().nullish(),
        title: y().optional(),
        url: y().optional(),
        tool_name: y(),
        tool_arguments: c(y(), O()),
      })));
  }))();
}
async function Je(e, t, n, r, i, a, o, s) {
  if (a == null) throw Error(`Widget requests require an active frame`);
  let c = () => {
      let t = e.get(ve).formatMessage(Ue.notice);
      return (
        e.get(de).danger(t, { id: P, errorAnalytics: { toastId: `ecosystem.widget.networkDenied` } }),
        t
      );
    },
    l = () => ({
      isError: !0,
      content: [{ type: `text`, text: c() }],
      structuredContent: { error_code: P },
      _meta: { "openai/tool_error_kind": P },
    }),
    u = async (e) => {
      o(a);
      let t;
      try {
        t = await n.handleRequest(e, a, s);
      } catch (t) {
        if ((o(a), !Be(t))) throw t;
        if (e.method === `tools/call`) return l();
        throw new se(c(), 403, P);
      }
      return (
        o(a),
        e.method === `tools/call` &&
        t.isError === !0 &&
        t._meta?.[`openai/tool_error_kind`] === `tunnel_client_network_access_denied`
          ? l()
          : t
      );
    },
    d = await u(i);
  if (n.olympic != null || i.method !== `tools/call` || typeof i.params?.name != `string`) return d;
  let f = K.safeParse(d);
  if (!f.success || r.identity.kind !== `connector`) return d;
  let p = f.data._meta[`openai/connector_auth`],
    m = r.identity,
    h = i.params.name.startsWith(`/`) ? i.params.name.split(`/`).filter(Boolean) : [i.params.name],
    g = h.at(-1),
    _ = i.params._meta,
    v = m.targetId ?? _?.[`openai/link_id`] ?? (h.length === 3 ? h[1] : void 0);
  if (
    g == null ||
    g.length === 0 ||
    h.length > 3 ||
    p.connector_id !== m.connectorId ||
    (_?.[`openai/connector_id`] != null && _[`openai/connector_id`] !== p.connector_id) ||
    (_?.[`openai/action_name`] != null && _[`openai/action_name`] !== g) ||
    (v != null && v !== p.link_id)
  )
    return d;
  let y;
  try {
    y = await Fe(e, {
      connectorId: p.connector_id,
      hostId: t,
      signal: a,
      payload: {
        requireAuth: !0,
        reauthLinkId: p.link_id ?? void 0,
        authReason: p.auth_reason ?? `missing_link`,
        requestedScopes: p.requested_scopes ?? void 0,
      },
      beforeConnect: async () => (o(a), !0),
    });
  } catch {
    return (o(a), d);
  }
  return (
    o(a),
    !y.didConnect || !y.linkId || (p.link_id != null && y.linkId !== p.link_id)
      ? d
      : u({
          ...i,
          params: {
            ...i.params,
            name: g,
            _meta: {
              ...i.params._meta,
              "openai/connector_id": p.connector_id,
              "openai/action_name": g,
              "openai/link_id": y.linkId,
            },
          },
        })
  );
}
var K;
function q() {
  return (q = e(() => {
    (o(),
      He(),
      ee(),
      Ee(),
      h(),
      Me(),
      (K = T({
        isError: C(!0),
        _meta: T({
          "openai/tool_error_kind": C(`connector_auth_required`),
          "openai/connector_auth": T({
            connector_id: y().min(1),
            link_id: y().min(1).nullish(),
            auth_reason: _([`missing_link`, `oauth_upgrade_required`, `reauthentication_required`]).nullish(),
            requested_scopes: w(y()).nullish(),
          }),
        }),
      })));
  }))();
}
function Ye(e, t) {
  let n = e.find((e) => e.name === t),
    r = (e) => {
      let t = J.safeParse(e.meta ?? {}).data,
        n = t?.ui?.visibility ?? t?.[`ui/visibility`];
      return (
        t != null &&
        e.is_enabled !== !1 &&
        e.is_read_only === !0 &&
        e.is_destructive === !1 &&
        (n == null || n.includes(`app`))
      );
    },
    i = (e) => {
      let t = J.safeParse(e.meta ?? {}).data;
      return [
        t?.ui?.resourceUri,
        t?.[`ui/resourceUri`],
        t?.[`openai/outputTemplate`],
        e.templates?.[0]?.resource_uri,
      ].find((e) => e != null && e.length > 0);
    };
  if (n != null && !r(n)) throw Error(`Source tool unavailable`);
  let a = n == null ? void 0 : i(n);
  if (a == null) {
    let o = e.filter((e) => J.safeParse(e.meta ?? {}).data?.[`openai/citationAliases`]?.includes(t));
    o.length === 1 && r(o[0]) && ((n = o[0]), (a = i(n)));
  }
  if (n == null || a == null) throw Error(`Source viewer unavailable`);
  return { action: n, template: a };
}
var J, Y;
function X() {
  return (X = e(() => {
    (l(),
      x(),
      E(),
      o(),
      A(),
      be(),
      Ke(),
      Te(),
      N(),
      Ge(),
      q(),
      i(),
      (J = T({
        ui: T({ resourceUri: y().optional(), visibility: w(y()).optional() }).optional(),
        "ui/resourceUri": y().optional(),
        "ui/visibility": w(y()).optional(),
        "openai/outputTemplate": y().optional(),
        "openai/citationAliases": w(y()).optional(),
      })),
      (Y = le(g, ({ hostId: e, conversationId: t, source: n, requestId: i }, { scope: a, get: o }) => {
        let s = o(F, t),
          c = s === `tpp` ? `TPP` : void 0,
          l = s === `tpp` ? pe(t) : void 0,
          u = {
            hostId: e,
            server: `codex_apps`,
            threadId: l ?? null,
            connectorTarget: { connectorId: n.connectorId, targetId: n.linkId },
          },
          d = o(Se, u);
        return {
          queryKey: [`widget-source-viewer`, d, t, c, n, i],
          staleTime: 1 / 0,
          retry: !1,
          enabled: d != null,
          queryFn: async ({ signal: i }) => {
            if (d == null) throw Error(`Source connection unavailable`);
            let o = { context: u, identity: d },
              s = (e) => {
                if ((i.throwIfAborted(), e?.throwIfAborted(), a.get(M, o) !== `current`))
                  throw Error(`Source connection changed`);
              };
            s();
            let f = await Le.safeGet(`/aip/connectors/{connector_id}`, {
              parameters: { path: { connector_id: n.connectorId }, query: { include_actions: !0 } },
              additionalHeaders: {
                "OAI-Product-Sku": `PINEAPPLE_TOOL`,
                ...(d.accountId == null ? {} : { "ChatGPT-Account-ID": d.accountId }),
              },
              signal: i,
            });
            s();
            let { action: p, template: m } = Ye(f.actions, n.tool),
              h = `connectors://${n.connectorId}`,
              g = {
                ...Ve({
                  scope: a,
                  appUri: h,
                  accountId: d.accountId ?? void 0,
                  chatGptConversationId: t,
                  threadId: l,
                  productSku: c,
                  messageId: n.messageId,
                  originMetadata: {
                    "openai/connector_id": n.connectorId,
                    "openai/link_id": n.linkId,
                    "openai/action_name": p.name,
                  },
                  signal: i,
                }),
                assertActive: s,
              },
              _ = {
                hostId: e,
                productSku: c ?? `PINEAPPLE_TOOL`,
                accountId: d.accountId ?? void 0,
                connectorId: n.connectorId,
                targetId: n.linkId,
                actionName: p.name,
                appUri: h,
                template: m,
              },
              v = await r(a.query.getOrFetch(xe, _), i),
              y = await Je(
                a,
                e,
                g,
                o,
                { method: `tools/call`, params: { name: p.name, arguments: n.arguments } },
                i,
                s,
              );
            s();
            let b = ae.parse(y);
            if (b.isError) throw Error(`Source tool failed`);
            return {
              ...v,
              resourceQuery: _,
              attributionId: n.connectorId,
              widget: { ...v.widget, name: n.title },
              request: {
                appUri: h,
                chatGptThreadId: ye(t),
                sourceMessageId: n.messageId,
                threadId: l,
                productSku: c,
                template: m,
                toolName: p.name,
                toolInput: n.arguments,
                viewParams: { forceFullHeight: !0, layout: { isSidebarResponsive: !0 } },
              },
              toolResult: b,
              mcpAppHostAdapter: g,
            };
          },
        };
      })));
  }))();
}
async function Xe(e, t) {
  let { result: n, signal: r, conversationId: i, href: a, mcpAppId: o, ...s } = t,
    c = n.request.chatGptThreadId,
    l = () => {
      (r.throwIfAborted(), n.mcpAppHostAdapter.assertActive?.());
      let t = e.get(Re, c),
        i = t == null ? null : De({ mapping: t, current_node: e.get(ke, c) });
      if (
        e.get(_e).pathname !== e.value.pathname ||
        e.get(M, n.resourceIdentity) !== `current` ||
        (n.request.sourceMessageId != null && i?.some(({ id: e }) => e === n.request.sourceMessageId) !== !0)
      )
        throw Error(`The source widget is no longer active`);
      return i;
    },
    u = l(),
    d = e.get(F, c);
  if (
    n.widget.is_verified_first_party !== !0 ||
    c == null ||
    n.request.sourceMessageId == null ||
    (d !== `tpp` && d !== `flora`) ||
    u == null
  )
    return !1;
  let p = qe(u, a);
  if (p == null) return !1;
  {
    let [{ openMcpSourceCitation: n }, { loadChatGptSourceView: r }] = await Promise.all([
      f(() => import(`./open-5a77a42759ae.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]), import.meta.url),
      f(() => import(`./load-view-c5fe81d0a2fa.js`), __vite__mapDeps([7, 1, 2, 3, 4, 5]), import.meta.url),
    ]);
    if (l()?.some(({ id: e }) => e === p.messageId) !== !0)
      throw Error(`The source widget is no longer active`);
    n(e, {
      id: JSON.stringify([`chatgpt-widget-source`, c, p]),
      title: p.title,
      load: (e) =>
        r(
          e,
          {
            citation: {
              type: `mcp_source`,
              title: p.title,
              connector_id: p.connectorId,
              link_id: p.linkId,
              tool_name: p.tool,
              tool_arguments: p.arguments,
            },
            conversationId: c,
            conversationOrigin: d,
            hostId: t.hostId,
            messageId: p.messageId,
          },
          t.WidgetContent,
        ),
    });
    let i = e.get(Ie, o);
    return (i != null && Pe(e, i, `inline`), !0);
  }
}
function Ze(e) {
  let t = (0, Qe.c)(43),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ WidgetContent: n, onClose: r, renderSlots: a, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o = b(),
    s = ue(M, i.owner.resourceIdentity),
    c;
  t[5] !== i.conversationId || t[6] !== i.hostId || t[7] !== i.requestId || t[8] !== i.source
    ? ((c = { hostId: i.hostId, conversationId: i.conversationId, source: i.source, requestId: i.requestId }),
      (t[5] = i.conversationId),
      (t[6] = i.hostId),
      (t[7] = i.requestId),
      (t[8] = i.source),
      (t[9] = c))
    : (c = t[9]);
  let { data: l, isError: u, refetch: d } = ue(Y, c),
    f = (0, Z.useEffectEvent)(r),
    p;
  t[10] !== f || t[11] !== s || t[12] !== o.pathname || t[13] !== i.pathname
    ? ((p = () => {
        (s !== `current` || o.pathname !== i.pathname) && f();
      }),
      (t[10] = f),
      (t[11] = s),
      (t[12] = o.pathname),
      (t[13] = i.pathname),
      (t[14] = p))
    : (p = t[14]);
  let m;
  (t[15] !== s || t[16] !== o.pathname || t[17] !== i.pathname
    ? ((m = [s, o.pathname, i.pathname]),
      (t[15] = s),
      (t[16] = o.pathname),
      (t[17] = i.pathname),
      (t[18] = m))
    : (m = t[18]),
    (0, Z.useEffect)(p, m));
  let h;
  if (s !== `current`) h = null;
  else if (u) {
    let e;
    t[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(`p`, {
          role: `alert`,
          children: (0, Q.jsx)(D, {
            id: `chatgptConversations.widgetSource.error`,
            defaultMessage: `Couldn't open this source`,
            description: `Error in the Work conversation source side panel after a linked app could not load its read-only document viewer. Reassuring short sentence for the end user; the panel offers a separate retry button.`,
          }),
        })),
        (t[19] = e))
      : (e = t[19]);
    let n;
    t[20] === d ? (n = t[21]) : ((n = () => void d()), (t[20] = d), (t[21] = n));
    let r;
    t[22] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(D, {
          id: `chatgptConversations.widgetSource.retry`,
          defaultMessage: `Try again`,
          description: `Short button in the Work source side panel after its app viewer failed to load. Retries the read-only viewer request for the same source.`,
        })),
        (t[22] = r))
      : (r = t[22]);
    let i;
    (t[23] === n
      ? (i = t[24])
      : ((i = (0, Q.jsxs)(`div`, {
          className: `flex h-full flex-col items-center justify-center gap-2 p-8 text-center`,
          children: [e, (0, Q.jsx)(ne, { onClick: n, children: r })],
        })),
        (t[23] = n),
        (t[24] = i)),
      (h = i));
  } else if (l == null) {
    let e;
    (t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(`div`, {
          className: `flex h-full items-center justify-center`,
          role: `status`,
          children: (0, Q.jsx)(D, {
            id: `chatgptConversations.widgetSource.loading`,
            defaultMessage: `Opening source…`,
            description: `Brief loading status in the Work conversation source side panel while a connected app retrieves a read-only document viewer. End users see this after clicking a source link.`,
          }),
        })),
        (t[25] = e))
      : (e = t[25]),
      (h = e));
  } else {
    let e;
    t[26] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = [`inline`]), (t[26] = e)) : (e = t[26]);
    let a;
    t[27] !== l.mcpAppHostAdapter || t[28] !== r
      ? ((a = { ...l.mcpAppHostAdapter, displayMode: `sidebar`, onRequestClose: r }),
        (t[27] = l.mcpAppHostAdapter),
        (t[28] = r),
        (t[29] = a))
      : (a = t[29]);
    let o;
    t[30] !== l || t[31] !== a
      ? ((o = { ...l, mcpAppHostAdapter: a }), (t[30] = l), (t[31] = a), (t[32] = o))
      : (o = t[32]);
    let s;
    (t[33] !== n ||
    t[34] !== i.conversationId ||
    t[35] !== i.hostId ||
    t[36] !== i.mcpAppId ||
    t[37] !== i.recipient ||
    t[38] !== o
      ? ((s = (0, Q.jsx)(n, {
          recipient: i.recipient,
          conversationId: i.conversationId,
          hostId: i.hostId,
          lifetime: `component`,
          mcpAppId: i.mcpAppId,
          fullSurface: !0,
          hostDisplayModes: e,
          result: o,
        })),
        (t[33] = n),
        (t[34] = i.conversationId),
        (t[35] = i.hostId),
        (t[36] = i.mcpAppId),
        (t[37] = i.recipient),
        (t[38] = o),
        (t[39] = s))
      : (s = t[39]),
      (h = s));
  }
  let g;
  return (
    t[40] !== h || t[41] !== a
      ? ((g = a({ headerRows: [], content: h })), (t[40] = h), (t[41] = a), (t[42] = g))
      : (g = t[42]),
    g
  );
}
var Qe, Z, Q;
function $() {
  return ($ = e(() => {
    ((Qe = m()),
      x(),
      E(),
      j(),
      (Z = a()),
      te(),
      d(),
      we(),
      A(),
      ge(),
      Oe(),
      N(),
      re(),
      Ce(),
      he(),
      G(),
      X(),
      (Q = s()),
      ce(),
      je(`ecosystem-source-viewer`, Ze, { isAvailable: () => !1, open: Xe, closeOnEscape: !0 }));
  }))();
}
$();
export { Xe as openWidgetSource };
//# sourceMappingURL=open-c92018a41565.js.map
