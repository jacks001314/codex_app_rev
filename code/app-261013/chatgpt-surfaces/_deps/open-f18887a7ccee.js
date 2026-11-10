const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./open-45b03ff54aff.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./source-icons-5911d70f76b8.js",
      "./load-view-9bfb493f7113.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $It as r,
  Cot as i,
  EPt as a,
  HMt as o,
  HNt as s,
  IDt as c,
  JIt as l,
  Jbt as u,
  LLt as d,
  Pxt as f,
  RLt as p,
  RSt as m,
  Rpt as h,
  TLt as g,
  Zxt as _,
  _It as v,
  _xt as y,
  fLt as b,
  fPt as x,
  gNt as S,
  hot as C,
  hrt as ee,
  jDt as te,
  lIt as ne,
  lot as re,
  oIt as w,
  pIt as T,
  pLt as E,
  pPt as ie,
  rst as D,
  t3 as ae,
  vrt as oe,
  vzt as se,
  wot as ce,
  wxt as le,
  xLt as O,
  xMt as ue,
  yzt as de,
  zSt as fe,
  zxt as k,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Qn as pe,
  ASt as me,
  Byr as he,
  Gyr as ge,
  IWn as _e,
  Jyr as A,
  Kyt as ve,
  LWn as ye,
  Mwn as be,
  N4n as xe,
  NQn as Se,
  NWn as j,
  PQn as Ce,
  PWn as we,
  SSt as Te,
  SZn as Ee,
  Udr as M,
  WSt as De,
  Xyr as Oe,
  Ymr as ke,
  Yyr as Ae,
  aIr as je,
  bZn as N,
  dwn as Me,
  e$n as Ne,
  ehr as Pe,
  fMn as Fe,
  j4n as Ie,
  jwn as Le,
  kZn as Re,
  lIr as ze,
  mMn as P,
  nMn as Be,
  oIr as Ve,
  qyt as He,
  rMn as Ue,
  sIr as We,
  uMn as F,
  uSt as Ge,
  yjn as I,
} from "./app-initial-5851df3f6cb1.js";
function Ke(e, t) {
  let n = L(t);
  if (n == null) return null;
  let r = new Set(),
    i = [],
    a = 0;
  for (let t of e) {
    Ce(t) && a++;
    let e = t.id;
    if (e == null) continue;
    let n = U.safeParse(t.metadata).data;
    if (n == null) continue;
    for (let e of n.selected_mcp_sources ?? [])
      e.connector_type === `MCP` &&
        (e.status === `ONLY_ME` || e.app_metadata?.review?.status === `DEVELOPMENT`) &&
        r.add(M(e.id));
    let o = (t, n, r) => {
      i.push({
        index: i.length,
        connectorId: t,
        linkId: n?.trim() ? n : null,
        messageId: e,
        turn: a,
        resource: r,
      });
    };
    if (t.author.role === `assistant` && !Oe(t) && !Ae(t) && (t.channel === `final` || t.end_turn === !0)) {
      let t = 0;
      for (let r of n.content_references ?? []) {
        let n = G.safeParse(r).data;
        if (n == null) continue;
        let i = B.safeParse({
          id: JSON.stringify([e, n.citation_id]),
          url: n.url,
          title: n.title,
          activities: [`read`],
          open: { tool: n.tool_name, arguments: n.tool_arguments },
        }).data;
        if (i != null && (i.url != null || i.open != null) && (o(n.connector_id, n.link_id, i), ++t === 100))
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
      r.add(M(l));
      continue;
    }
    let u = W.safeParse(ge(t)).data,
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
      let t = V.safeParse(e).data;
      if (!t || t.isError) continue;
      let n = H.safeParse(t._meta ?? t.meta).data?.[`openai/resourceActivities`].resources;
      if (n != null) {
        for (let e of n) o(l, f, e);
        break;
      }
    }
  }
  let o = new Set(),
    s = new Map();
  for (let e of i) {
    if (r.has(M(e.connectorId))) continue;
    let { resource: t, connectorId: n, linkId: i } = e,
      a = [JSON.stringify([n, i, `id`, t.id])];
    (t.url != null && a.push(JSON.stringify([n, i, `url`, L(t.url)])),
      t.open != null && a.push(m([n, i, `open`, t.open])));
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
      L(r) === n &&
      e.activities.some((e) => e.resource.activities.includes(`read`) && !t.has(e.turn))
    );
  });
  if (c.length !== 1) return null;
  let l = c[0].activities.filter((e) => e.resource.activities.includes(`read`) && e.resource.open != null),
    u = l.reduce((e, t) => (e == null || t.index > e.index ? t : e), void 0);
  return u?.resource.open == null ||
    l.some(
      (e) =>
        e.resource.url != null &&
        L(e.resource.url) === n &&
        !(0, R.default)(e.resource.open, u.resource.open),
    )
    ? null
    : {
        connectorId: u.connectorId,
        linkId: u.linkId,
        messageId: u.messageId,
        title: u.resource.title?.trim() || t,
        ...u.resource.open,
      };
}
function L(e) {
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
var R, z, B, V, H, U, W, G;
function K() {
  return (K = e(() => {
    (fe(),
      (R = t(s(), 1)),
      A(),
      a(),
      Se(),
      (z = E({
        tool: g().regex(/^[a-zA-Z0-9_.-]{1,256}$/u),
        arguments: O(g(), l()).refine((e) => new TextEncoder().encode(JSON.stringify(e)).length <= 16384),
      })),
      (B = E({
        id: g().min(1).max(16384),
        url: g()
          .max(16384)
          .refine((e) => L(e) != null)
          .optional(),
        title: g().max(16384).optional(),
        activities: T(w([`read`, `created`, `updated`]))
          .min(1)
          .max(100),
        open: z.optional().catch(void 0),
      })),
      (V = E({ isError: v().optional(), _meta: p().optional(), meta: p().optional() })),
      (H = E({
        "openai/resourceActivities": E({
          version: r(1),
          resources: T(B.required({ url: !0 }))
            .min(1)
            .max(100),
        }),
      })),
      (U = E({
        selected_mcp_sources: T(
          E({
            id: g(),
            connector_type: g().nullish(),
            status: g().nullish(),
            app_metadata: E({ review: E({ status: g().nullish() }).nullish() }).nullish(),
          }),
        ).nullish(),
        invoked_resource: E({
          connector_id: g().nullish(),
          resource_uri: g().nullish(),
          publish_status: g().nullish(),
        }).nullish(),
        invoked_plugin: E({ http_response_status: d([g(), b()]).nullish() }).nullish(),
        is_error: v().nullish(),
        __internal: E({ api_tool_error: E({ error_code: p() }).nullish() }).nullish(),
        chatgpt_sdk: E({
          distribution_channel: g().nullish(),
          is_error: v().nullish(),
          link_id: g().nullish(),
          "openai/link_id": g().nullish(),
          tool_response_metadata: E({
            status: g().nullish(),
            call_tool_result: p().optional(),
            mcp_tool_result: p().optional(),
          }).nullish(),
        }).nullish(),
        content_references: T(p()).nullish(),
      })),
      (W = E({
        type: r(`mcpToolCall`),
        server: w([`codex_apps`, `codex-connectors-mcp`]),
        status: r(`completed`),
        error: ne().optional(),
        appContext: E({ connectorId: g(), linkId: g().nullable() }),
        result: V,
      })),
      (G = E({
        type: r(`mcp_source`),
        citation_id: g().trim().min(1),
        connector_id: g().trim().min(1),
        link_id: g().nullish(),
        title: g().optional(),
        url: g().optional(),
        tool_name: g(),
        tool_arguments: O(g(), l()),
      })));
  }))();
}
async function qe(e, t, n, r, i, a, o, s) {
  if (a == null) throw Error(`Widget requests require an active frame`);
  let c = () => {
      let t = e.get(Ve).formatMessage(we.notice);
      return (
        e.get(C).danger(t, { id: j, errorAnalytics: { toastId: `ecosystem.widget.networkDenied` } }),
        t
      );
    },
    l = () => ({
      isError: !0,
      content: [{ type: `text`, text: c() }],
      structuredContent: { error_code: j },
      _meta: { "openai/tool_error_kind": j },
    }),
    u = async (e) => {
      o(a);
      let t;
      try {
        t = await n.handleRequest(e, a, s);
      } catch (t) {
        if ((o(a), !ye(t))) throw t;
        if (e.method === `tools/call`) return l();
        throw new ee(c(), 403, j);
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
  let f = q.safeParse(d);
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
    y = await xe(e, {
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
var q;
function J() {
  return (J = e(() => {
    (a(),
      Ie(),
      re(),
      je(),
      oe(),
      _e(),
      (q = E({
        isError: r(!0),
        _meta: E({
          "openai/tool_error_kind": r(`connector_auth_required`),
          "openai/connector_auth": E({
            connector_id: g().min(1),
            link_id: g().min(1).nullish(),
            auth_reason: w([`missing_link`, `oauth_upgrade_required`, `reauthentication_required`]).nullish(),
            requested_scopes: T(g()).nullish(),
          }),
        }),
      })));
  }))();
}
function Je(e, t) {
  let n = e.find((e) => e.name === t),
    r = (e) => {
      let t = Y.safeParse(e.meta ?? {}).data,
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
      let t = Y.safeParse(e.meta ?? {}).data;
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
    let o = e.filter((e) => Y.safeParse(e.meta ?? {}).data?.[`openai/citationAliases`]?.includes(t));
    o.length === 1 && r(o[0]) && ((n = o[0]), (a = i(n)));
  }
  if (n == null || a == null) throw Error(`Source viewer unavailable`);
  return { action: n, template: a };
}
var Y, X;
function Ye() {
  return (Ye = e(() => {
    (S(),
      f(),
      D(),
      a(),
      F(),
      Ue(),
      Pe(),
      Ne(),
      I(),
      He(),
      J(),
      ce(),
      (Y = E({
        ui: E({ resourceUri: g().optional(), visibility: T(g()).optional() }).optional(),
        "ui/resourceUri": g().optional(),
        "ui/visibility": T(g()).optional(),
        "openai/outputTemplate": g().optional(),
        "openai/citationAliases": T(g()).optional(),
      })),
      (X = _(i, ({ hostId: e, conversationId: t, source: n, requestId: r }, { scope: i, get: a }) => {
        let s = a(N, t),
          c = s === `tpp` ? `TPP` : void 0,
          l = s === `tpp` ? u(t) : void 0,
          d = {
            hostId: e,
            server: `codex_apps`,
            threadId: l ?? null,
            connectorTarget: { connectorId: n.connectorId, targetId: n.linkId },
          },
          f = a(Fe, d);
        return {
          queryKey: [`widget-source-viewer`, f, t, c, n, r],
          staleTime: 1 / 0,
          retry: !1,
          enabled: f != null,
          queryFn: async ({ signal: r }) => {
            if (f == null) throw Error(`Source connection unavailable`);
            let a = { context: d, identity: f },
              s = (e) => {
                if ((r.throwIfAborted(), e?.throwIfAborted(), i.get(P, a) !== `current`))
                  throw Error(`Source connection changed`);
              };
            s();
            let u = await ke.safeGet(`/aip/connectors/{connector_id}`, {
              parameters: { path: { connector_id: n.connectorId }, query: { include_actions: !0 } },
              additionalHeaders: {
                "OAI-Product-Sku": `PINEAPPLE_TOOL`,
                ...(f.accountId == null ? {} : { "ChatGPT-Account-ID": f.accountId }),
              },
              signal: r,
            });
            s();
            let { action: p, template: m } = Je(u.actions, n.tool),
              g = `connectors://${n.connectorId}`,
              _ = new AbortController(),
              v = AbortSignal.any([r, _.signal]),
              y = {
                ...ve({
                  scope: i,
                  appUri: g,
                  accountId: f.accountId ?? void 0,
                  chatGptConversationId: t,
                  threadId: l,
                  productSku: c,
                  messageId: n.messageId,
                  originMetadata: {
                    "openai/connector_id": n.connectorId,
                    "openai/link_id": n.linkId,
                    "openai/action_name": p.name,
                  },
                  signal: v,
                }),
                assertActive: s,
              },
              b = {
                hostId: e,
                productSku: c,
                accountId: f.accountId ?? void 0,
                connectorId: n.connectorId,
                targetId: n.linkId,
                appUri: g,
                template: m,
              },
              [x, S] = await Promise.all([
                h(i.query.getOrFetch(Be, b), v),
                qe(
                  i,
                  e,
                  y,
                  a,
                  { method: `tools/call`, params: { name: p.name, arguments: n.arguments } },
                  v,
                  s,
                ),
              ]).catch((e) => {
                throw (_.abort(), e);
              });
            s();
            let C = o.parse(S);
            if (C.isError) throw Error(`Source tool failed`);
            return {
              ...x,
              resourceQuery: b,
              attributionId: n.connectorId,
              widget: { ...x.widget, name: n.title },
              request: {
                appUri: g,
                chatGptThreadId: pe(t),
                sourceMessageId: n.messageId,
                threadId: l,
                productSku: c,
                template: m,
                toolName: p.name,
                toolInput: n.arguments,
                viewParams: { forceFullHeight: !0, layout: { isSidebarResponsive: !0 } },
              },
              toolResult: C,
              mcpAppHostAdapter: y,
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
        i = t == null ? null : he({ mapping: t, current_node: e.get(Ee, c) });
      if (
        e.get(We).pathname !== e.value.pathname ||
        e.get(P, n.resourceIdentity) !== `current` ||
        (n.request.sourceMessageId != null && i?.some(({ id: e }) => e === n.request.sourceMessageId) !== !0)
      )
        throw Error(`The source widget is no longer active`);
      return i;
    },
    u = l(),
    d = e.get(N, c);
  if (
    n.widget.is_verified_first_party !== !0 ||
    c == null ||
    n.request.sourceMessageId == null ||
    (d !== `tpp` && d !== `flora`) ||
    u == null
  )
    return !1;
  let f = Ke(u, a);
  if (f == null) return !1;
  {
    let [{ openMcpSourceCitation: n }, { loadChatGptSourceView: r }] = await Promise.all([
      x(() => import(`./open-45b03ff54aff.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]), import.meta.url),
      x(() => import(`./load-view-9bfb493f7113.js`), __vite__mapDeps([7, 1, 2, 3, 4, 5]), import.meta.url),
    ]);
    if (l()?.some(({ id: e }) => e === f.messageId) !== !0)
      throw Error(`The source widget is no longer active`);
    n(e, {
      id: JSON.stringify([`chatgpt-widget-source`, c, f]),
      title: f.title,
      load: (e) =>
        r(
          e,
          {
            citation: {
              type: `mcp_source`,
              title: f.title,
              connector_id: f.connectorId,
              link_id: f.linkId,
              tool_name: f.tool,
              tool_arguments: f.arguments,
            },
            conversationId: c,
            conversationOrigin: d,
            hostId: t.hostId,
            messageId: f.messageId,
          },
          t.WidgetContent,
        ),
    });
    let i = e.get(Te, o);
    return (i != null && me(e, i, `inline`), !0);
  }
}
function Ze(e) {
  let t = (0, Qe.c)(43),
    r,
    i,
    a,
    o;
  t[0] === e
    ? ((r = t[1]), (i = t[2]), (a = t[3]), (o = t[4]))
    : (({ WidgetContent: r, onClose: i, renderSlots: o, ...a } = e),
      (t[0] = e),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o));
  let s = le(),
    l = k(P, a.owner.resourceIdentity),
    u;
  t[5] !== a.conversationId || t[6] !== a.hostId || t[7] !== a.requestId || t[8] !== a.source
    ? ((u = { hostId: a.hostId, conversationId: a.conversationId, source: a.source, requestId: a.requestId }),
      (t[5] = a.conversationId),
      (t[6] = a.hostId),
      (t[7] = a.requestId),
      (t[8] = a.source),
      (t[9] = u))
    : (u = t[9]);
  let { data: d, isError: f, refetch: p } = k(X, u),
    m = (0, Z.useEffectEvent)(i),
    h;
  t[10] !== m || t[11] !== l || t[12] !== s.pathname || t[13] !== a.pathname
    ? ((h = () => {
        (l !== `current` || s.pathname !== a.pathname) && m();
      }),
      (t[10] = m),
      (t[11] = l),
      (t[12] = s.pathname),
      (t[13] = a.pathname),
      (t[14] = h))
    : (h = t[14]);
  let g;
  (t[15] !== l || t[16] !== s.pathname || t[17] !== a.pathname
    ? ((g = [l, s.pathname, a.pathname]),
      (t[15] = l),
      (t[16] = s.pathname),
      (t[17] = a.pathname),
      (t[18] = g))
    : (g = t[18]),
    (0, Z.useEffect)(h, g));
  let _;
  if (l !== `current`) _ = null;
  else if (f) {
    let e;
    t[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(`p`, {
          role: `alert`,
          children: (0, Q.jsx)(c, {
            id: `chatgptConversations.widgetSource.error`,
            defaultMessage: `Couldn't open this source`,
            description: `Error in the Work conversation source side panel after a linked app could not load its read-only document viewer. Reassuring short sentence for the end user; the panel offers a separate retry button.`,
          }),
        })),
        (t[19] = e))
      : (e = t[19]);
    let r;
    t[20] === p ? (r = t[21]) : ((r = () => void p()), (t[20] = p), (t[21] = r));
    let i;
    t[22] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Q.jsx)(c, {
          id: `chatgptConversations.widgetSource.retry`,
          defaultMessage: `Try again`,
          description: `Short button in the Work source side panel after its app viewer failed to load. Retries the read-only viewer request for the same source.`,
        })),
        (t[22] = i))
      : (i = t[22]);
    let a;
    (t[23] === r
      ? (a = t[24])
      : ((a = (0, Q.jsxs)(`div`, {
          className: `flex h-full flex-col items-center justify-center gap-2 p-8 text-center`,
          children: [e, (0, Q.jsx)(n, { onClick: r, children: i })],
        })),
        (t[23] = r),
        (t[24] = a)),
      (_ = a));
  } else if (d == null) {
    let e;
    (t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(`div`, {
          className: `flex h-full items-center justify-center`,
          role: `status`,
          children: (0, Q.jsx)(c, {
            id: `chatgptConversations.widgetSource.loading`,
            defaultMessage: `Opening source…`,
            description: `Brief loading status in the Work conversation source side panel while a connected app retrieves a read-only document viewer. End users see this after clicking a source link.`,
          }),
        })),
        (t[25] = e))
      : (e = t[25]),
      (_ = e));
  } else {
    let e;
    t[26] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = [`inline`]), (t[26] = e)) : (e = t[26]);
    let n;
    t[27] !== d.mcpAppHostAdapter || t[28] !== i
      ? ((n = { ...d.mcpAppHostAdapter, displayMode: `sidebar`, onRequestClose: i }),
        (t[27] = d.mcpAppHostAdapter),
        (t[28] = i),
        (t[29] = n))
      : (n = t[29]);
    let o;
    t[30] !== d || t[31] !== n
      ? ((o = { ...d, mcpAppHostAdapter: n }), (t[30] = d), (t[31] = n), (t[32] = o))
      : (o = t[32]);
    let s;
    (t[33] !== r ||
    t[34] !== a.conversationId ||
    t[35] !== a.hostId ||
    t[36] !== a.mcpAppId ||
    t[37] !== a.recipient ||
    t[38] !== o
      ? ((s = (0, Q.jsx)(r, {
          recipient: a.recipient,
          conversationId: a.conversationId,
          hostId: a.hostId,
          lifetime: `component`,
          mcpAppId: a.mcpAppId,
          fullSurface: !0,
          hostDisplayModes: e,
          result: o,
        })),
        (t[33] = r),
        (t[34] = a.conversationId),
        (t[35] = a.hostId),
        (t[36] = a.mcpAppId),
        (t[37] = a.recipient),
        (t[38] = o),
        (t[39] = s))
      : (s = t[39]),
      (_ = s));
  }
  let v;
  return (
    t[40] !== _ || t[41] !== o
      ? ((v = o({ headerRows: [], content: _ })), (t[40] = _), (t[41] = o), (t[42] = v))
      : (v = t[42]),
    v
  );
}
var Qe, Z, Q;
function $() {
  return ($ = e(() => {
    ((Qe = se()),
      f(),
      D(),
      A(),
      (Z = de()),
      te(),
      y(),
      ze(),
      F(),
      Me(),
      Le(),
      I(),
      ae(),
      Ge(),
      De(),
      K(),
      Ye(),
      (Q = ue()),
      ie(),
      be(`ecosystem-source-viewer`, Ze, { isAvailable: () => !1, open: Xe, closeOnEscape: !0 }));
  }))();
}
$();
export { Xe as openWidgetSource };
//# sourceMappingURL=open-f18887a7ccee.js.map
