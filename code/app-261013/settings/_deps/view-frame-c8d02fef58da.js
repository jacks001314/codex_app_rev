import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $It as n,
  Cot as r,
  EPt as i,
  Ext as a,
  HMt as o,
  IDt as s,
  Ixt as c,
  Jbt as ee,
  Pxt as l,
  Rnt as u,
  TLt as d,
  _Mt as f,
  _xt as p,
  _yt as te,
  byt as ne,
  bz as m,
  cLt as h,
  dft as re,
  eyt as ie,
  gMt as ae,
  gNt as g,
  jDt as _,
  n7 as oe,
  nSt as v,
  oIt as y,
  pIt as b,
  pLt as x,
  rst as S,
  sft as se,
  t3 as C,
  uyt as ce,
  vzt as w,
  wot as le,
  wxt as ue,
  xMt as de,
  xz as fe,
  yMt as T,
  yzt as pe,
  zxt as me,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Dt as he,
  $En as ge,
  A4n as _e,
  C4n as E,
  Cjr as ve,
  Cwr as ye,
  Djr as be,
  Ejr as xe,
  FFr as Se,
  Ggr as D,
  HEn as Ce,
  IOn as we,
  I_r as O,
  Iwr as k,
  JVt as Te,
  J_r as A,
  Jgr as j,
  KVt as Ee,
  LEn as De,
  L_r as Oe,
  N4n as ke,
  O4n as M,
  QDr as Ae,
  QEn as N,
  ROn as P,
  R_r as je,
  Sjr as Me,
  TEn as Ne,
  XDr as Pe,
  bjr as F,
  djr as Fe,
  eDr as Ie,
  f4n as I,
  fMn as Le,
  gjr as Re,
  gwr as ze,
  h4n as Be,
  hjr as Ve,
  j4n as L,
  mMn as He,
  nDr as Ue,
  oFr as We,
  pMn as Ge,
  pSt as Ke,
  pjr as qe,
  qVt as Je,
  q_r as R,
  qwr as Ye,
  sSt as Xe,
  tOt as Ze,
  u4n as Qe,
  uMn as z,
  uSt as $e,
  wEn as et,
  wjr as tt,
  xSt as B,
  xwr as nt,
  y4n as rt,
  yjr as it,
  zFr as at,
  z_r as ot,
} from "./app-initial-5851df3f6cb1.js";
import { n as st, r as ct, t as lt } from "./resource-5df84eaadd7b.js";
import { a as ut, i as dt, n as ft, o as pt, r as mt, t as ht } from "./view-queries-5ab962aa3a9a.js";
import {
  C as gt,
  a as _t,
  i as vt,
  l as V,
  o as H,
  r as yt,
  t as bt,
  u as xt,
  w as St,
} from "./widget-ea192a210472.js";
import { r as Ct, t as wt } from "./hosted-mcp-app-adapter-e0d6623ad644.js";
function Tt(e) {
  let n = (0, U.c)(21),
    { view: i, threadId: a, result: o, fullSurface: ee, children: l } = e,
    u = c(r),
    d;
  n[0] !== a || n[1] !== i
    ? ((d = ft({ view: i, threadId: a })), (n[0] = a), (n[1] = i), (n[2] = d))
    : (d = n[2]);
  let f = d,
    p = me(Le, f),
    te = (0, W.useRef)(null),
    [ne, m] = (0, W.useState)(!1),
    [h, re] = (0, W.useState)(null),
    ie;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = () => () => te.current?.abort()), (n[3] = ie))
    : (ie = n[3]);
  let ae;
  (n[4] === p ? (ae = n[5]) : ((ae = [p]), (n[4] = p), (n[5] = ae)), (0, W.useEffect)(ie, ae));
  let g;
  n[6] === o
    ? (g = n[7])
    : ((g = Ot.safeParse(o).data?._meta._codex_apps.connector_auth_failure), (n[6] = o), (n[7] = g));
  let _ = g;
  if (
    p?.kind !== `connector` ||
    _ == null ||
    _.connector_id !== p.connectorId ||
    _.link_id !== p.targetId ||
    o === h
  )
    return l;
  let oe = ee ? `large` : `compact`,
    v;
  n[8] !== _ || n[9] !== f || n[10] !== p || n[11] !== o || n[12] !== u || n[13] !== a || n[14] !== i
    ? ((v = () => {
        if (te.current != null) return;
        let e = new AbortController();
        ((te.current = e),
          m(!0),
          E(
            { operation: `App reconnection`, starting: `Reconnecting app` },
            { safe: { connectorId: _.connector_id, threadId: a }, sensitive: { hostId: i.hostId } },
            async (t) => {
              let n = await ke(u, {
                connectorId: _.connector_id,
                hostId: i.hostId,
                signal: e.signal,
                payload: {
                  requireAuth: !0,
                  reauthLinkId: _.link_id,
                  authReason: _.auth_reason ?? `missing_link`,
                  requestedScopes: _.requested_scopes,
                },
                beforeConnect: async () => u.get(He, { context: f, identity: p }) === `current`,
              });
              return (t(n.didConnect ? `App reconnected` : `App reconnection did not complete`), n);
            },
            { signal: e.signal },
          )
            .then((t) => {
              let { didConnect: n } = t;
              n && !e.signal.aborted && re(o ?? null);
            })
            .catch(Et)
            .finally(() => {
              ((te.current = null), m(!1));
            }));
      }),
      (n[8] = _),
      (n[9] = f),
      (n[10] = p),
      (n[11] = o),
      (n[12] = u),
      (n[13] = a),
      (n[14] = i),
      (n[15] = v))
    : (v = n[15]);
  let y;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Dt.jsx)(s, {
        id: `codex.mcpApp.reconnect`,
        defaultMessage: `Reconnect`,
        description: `Button opening the existing app connection dialog`,
      })),
      (n[16] = y))
    : (y = n[16]);
  let b;
  return (
    n[17] !== ne || n[18] !== oe || n[19] !== v
      ? ((b = (0, Dt.jsx)(t, {
          color: `secondary`,
          size: oe,
          loading: ne,
          disabled: ne,
          onClick: v,
          children: y,
        })),
        (n[17] = ne),
        (n[18] = oe),
        (n[19] = v),
        (n[20] = b))
      : (b = n[20]),
    b
  );
}
function Et() {}
var U, W, Dt, Ot;
function G() {
  return (G = e(() => {
    ((U = w()),
      l(),
      (W = pe()),
      _(),
      i(),
      z(),
      L(),
      C(),
      rt(),
      le(),
      mt(),
      (Dt = de()),
      (Ot = x({
        isError: n(!0),
        _meta: x({
          _codex_apps: x({
            connector_auth_failure: x({
              is_auth_failure: n(!0),
              connector_id: d().min(1),
              link_id: d().min(1),
              auth_reason: y([
                `missing_link`,
                `oauth_upgrade_required`,
                `reauthentication_required`,
              ]).optional(),
              requested_scopes: b(d()).optional(),
              connection_consent: h().optional(),
            }),
          }),
        }),
      })));
  }))();
}
function kt(e) {
  let t = (0, Ft.c)(192),
    {
      recipient: n,
      panelTabId: r,
      className: i,
      autoFocus: s,
      contentContainer: l,
      globalSurface: u,
      source: d,
      fullSurface: f,
      inheritHostBackground: p,
      modalOpen: m,
      hostToolCallMetadata: h,
      hostToolResultMetadata: g,
      experimentalCapabilities: _,
      inDialog: v,
      onRequestClose: y,
      onOpenLink: b,
      onToolCall: x,
      deepLink: S,
      mcpAppId: se,
      lifetime: C,
      readHostResource: w,
      resolveHostResourceSubscriptionPath: le,
      sourceThreadId: de,
      writeHostResource: T,
      toolArguments: pe,
      toolCallPriorities: he,
      toolResult: E,
      useHostThread: ye,
      viewParamsOverride: xe,
      view: D,
    } = e,
    we = n === void 0 ? null : n,
    O = u !== void 0 && u,
    k = f === void 0 || f,
    Te = v !== void 0 && v,
    A = pe === void 0 ? zt : pe,
    j = c(ze),
    De;
  t[0] === se ? (De = t[1]) : ((De = () => se ?? re()), (t[0] = se), (t[1] = De));
  let [ke] = (0, It.useState)(De),
    M = se ?? ke,
    N = me(ge, D.icon),
    P = ue(),
    Ne = a(),
    Pe;
  t[2] !== D.server || t[3] !== D.tool.name
    ? ((Pe = ie(D.server, D.tool.name)), (t[2] = D.server), (t[3] = D.tool.name), (t[4] = Pe))
    : (Pe = t[4]);
  let F = Pe,
    Ie = P.pathname === F,
    I;
  t[5] !== j || t[6] !== D ? ((I = et(j, D)), (t[5] = j), (t[6] = D), (t[7] = I)) : (I = t[7]);
  let Le;
  t[8] !== d || t[9] !== I
    ? ((Le = { ...I, source: d }), (t[8] = d), (t[9] = I), (t[10] = Le))
    : (Le = t[10]);
  let L = Le,
    We = (0, It.useRef)(null),
    qe = j.value.routeKind === `local-thread` || j.value.routeKind === `remote-thread`,
    R,
    Ye,
    z,
    $e,
    B;
  if (t[11] !== qe || t[12] !== j.value || t[13] !== de || t[14] !== ye || t[15] !== D) {
    let e = qe ? nt(j.value) : null;
    ((B = de ?? e),
      (R = ye ? void 0 : (B ?? void 0)),
      (Ye = me),
      (z = Ge),
      ($e = ft({ view: D, threadId: R })),
      (t[11] = qe),
      (t[12] = j.value),
      (t[13] = de),
      (t[14] = ye),
      (t[15] = D),
      (t[16] = R),
      (t[17] = Ye),
      (t[18] = z),
      (t[19] = $e),
      (t[20] = B));
  } else ((R = t[16]), (Ye = t[17]), (z = t[18]), ($e = t[19]), (B = t[20]));
  let { error: rt } = Ye(z, $e),
    at;
  t[21] !== R || t[22] !== D
    ? ((at = { threadId: R, view: D }), (t[21] = R), (t[22] = D), (t[23] = at))
    : (at = t[23]);
  let { data: ct, error: mt, isPending: vt } = me(dt, at),
    V = rt ?? (ct == null ? mt : null),
    H = vt && rt == null,
    xt;
  t[24] !== h || t[25] !== M || t[26] !== R || t[27] !== A || t[28] !== D
    ? ((xt = { hostToolCallMetadata: h, mcpAppId: M, threadId: R, toolArguments: A, view: D }),
      (t[24] = h),
      (t[25] = M),
      (t[26] = R),
      (t[27] = A),
      (t[28] = D),
      (t[29] = xt))
    : (xt = t[29]);
  let St = xt,
    Ct = E === void 0,
    Et;
  t[30] === Ct ? (Et = t[31]) : ((Et = { enabled: Ct }), (t[30] = Ct), (t[31] = Et));
  let { data: U, error: W, fetchStatus: Dt, isFetched: Ot, isFetching: G, refetch: kt } = me(ut, St, Et),
    q;
  t[32] !== St || t[33] !== E || t[34] !== j.query
    ? ((q = E === void 0 ? j.query.getOptions(ut, St).queryKey : void 0),
      (t[32] = St),
      (t[33] = E),
      (t[34] = j.query),
      (t[35] = q))
    : (q = t[35]);
  let J = q,
    Vt = E === void 0 && Ot && Dt !== `idle`,
    Ht = E === void 0 ? W : null,
    Ut;
  t[36] !== E || t[37] !== U || t[38] !== W
    ? ((Ut =
        E === void 0
          ? (W ?? (U?.isError === !0 ? Error(U.content.find(At)?.text || `MCP app launch failed`) : null))
          : null),
      (t[36] = E),
      (t[37] = U),
      (t[38] = W),
      (t[39] = Ut))
    : (Ut = t[39]);
  let Y = Ut,
    Wt = E === void 0 ? U : E,
    Gt = st(ct?.resource),
    Kt;
  bb0: {
    let e;
    t[40] !== Wt || t[41] !== Ht
      ? ((e =
          Ht == null
            ? Wt
            : {
                isError: !0,
                content: [{ type: `text`, text: Ht.message }],
                structuredContent: { error: Ht.message },
              }),
        (t[40] = Wt),
        (t[41] = Ht),
        (t[42] = e))
      : (e = t[42]);
    let n = e;
    if (n == null || g == null) {
      Kt = n;
      break bb0;
    }
    let r;
    t[43] !== g || t[44] !== n._meta
      ? ((r = { ...n._meta, ...g }), (t[43] = g), (t[44] = n._meta), (t[45] = r))
      : (r = t[45]);
    let i;
    (t[46] !== n || t[47] !== r
      ? ((i = { ...n, _meta: r }), (t[46] = n), (t[47] = r), (t[48] = i))
      : (i = t[48]),
      (Kt = i));
  }
  let qt = Kt;
  Ue(`2957382457`);
  let Jt = lt({
      hasResourceError: V != null,
      isDilEnabled: !1,
      isResourceLoading: H,
      renderData: Gt,
      resourceUri: D.resourceUri,
      shouldRenderMcpApp: !0,
    }),
    Yt = Jt.kind === `html` ? Jt.renderData : null,
    Xt;
  t[49] !== D.server || t[50] !== D.tool
    ? ((Xt = ve({ server: D.server, tool: D.tool })), (t[49] = D.server), (t[50] = D.tool), (t[51] = Xt))
    : (Xt = t[51]);
  let X = Xt,
    Zt = B ?? M,
    Qt;
  t[52] === Zt ? (Qt = t[53]) : ((Qt = ee(Zt)), (t[52] = Zt), (t[53] = Qt));
  let Z = Qt,
    $t;
  t[54] !== L ||
  t[55] !== Z ||
  t[56] !== O ||
  t[57] !== h ||
  t[58] !== X ||
  t[59] !== M ||
  t[60] !== x ||
  t[61] !== R ||
  t[62] !== j ||
  t[63] !== d ||
  t[64] !== he ||
  t[65] !== D ||
  t[66] !== T
    ? (($t = async (e, t, n, r) => {
        let i = j.get(Ke, M)?.content.resourceIdentity ?? null,
          a = () => {
            if (j.get(He, i) !== `current`)
              throw Error(`MCP app identity changed before sending its request`);
          };
        switch (e.method) {
          case `tools/call`: {
            let n = _e(ot, e.params, `Invalid MCP tool call params`),
              s = Me({
                toolScope: D.toolScope ?? (X == null ? null : { kind: `connector`, connectorId: X }),
                server: D.server,
                toolName: n.name,
                toolArguments: n.arguments,
                tools: D.serverTools,
              }),
              c = _e(je, n.arguments ?? {}, `Invalid MCP tool arguments`),
              ee = async () => {
                let e = gt({
                  scope: j,
                  toolIdentity: s.codexAppsToolIdentity,
                  resourceIdentity: i,
                  toolArguments: c,
                });
                if (e != null) return e;
                let n = s.codexAppsToolIdentity;
                if (
                  x == null &&
                  O &&
                  R == null &&
                  D.hostId === `local` &&
                  i?.context.connectorTarget?.targetId != null &&
                  n != null
                )
                  return wt({
                    scope: j,
                    resourceIdentity: i,
                    resourceUri: D.resourceUri,
                    tool: s,
                    arguments: c,
                    recipientThreadId: r,
                    attribution: L,
                    signal: t,
                  });
                let o = await Qe(j, D.hostId, D.server, s.name, c, {
                  hostToolCallMetadata:
                    D.toolScope != null && s.codexAppsResourceUri != null
                      ? { _codex_apps: { resource_uri: s.codexAppsResourceUri } }
                      : h,
                  requestOptions: { priority: he?.[s.name], widget: { conversationId: Z, mcpAppId: M } },
                  threadId: R,
                  beforeRequest: a,
                });
                return Fe({ isCodexAppsServer: be(D.server), toolResult: o });
              };
            return x == null
              ? ee()
              : x({
                  identity: structuredClone(s.codexAppsToolIdentity),
                  arguments: structuredClone(c),
                  call: async () => o.parse(await ee()),
                });
          }
          case `resources/read`: {
            let t = _e(Oe, e.params, `Invalid MCP resource read params`);
            return (
              Ve({ mcpAppScope: { originResourceUri: D.resourceUri }, server: D.server, uri: t.uri }),
              Be(
                j,
                D.hostId,
                { server: D.server, uri: t.uri, threadId: R, connectorId: X, target: tt(D) },
                { widget: { conversationId: Z, mcpAppId: M } },
                a,
              )
            );
          }
          case Ee: {
            let t = _e(Je, e.params, `Invalid MCP resource write params`);
            if (T == null) throw Error(`Resource is not writable.`);
            Ae(j, oe, { ...et(j, D), feature: `resource`, action: `write`, source: d });
            let n = await T(t);
            if (n == null) throw Error(`Resource is not writable.`);
            return n;
          }
          case `tools/list`:
            return { tools: it({ connectorId: X, server: D.server, tools: D.serverTools }) };
          case `resources/list`:
            return { resources: [] };
          case `resources/templates/list`:
            return { resourceTemplates: [] };
          case `prompts/list`:
            return { prompts: [] };
          default:
            throw Error(`Unsupported OpenAI MCP extension request: ${e.method}`);
        }
      }),
      (t[54] = L),
      (t[55] = Z),
      (t[56] = O),
      (t[57] = h),
      (t[58] = X),
      (t[59] = M),
      (t[60] = x),
      (t[61] = R),
      (t[62] = j),
      (t[63] = d),
      (t[64] = he),
      (t[65] = D),
      (t[66] = T),
      (t[67] = $t))
    : ($t = t[67]);
  let en = fe($t),
    tn;
  t[68] !== S || t[69] !== F || t[70] !== P || t[71] !== Ne || t[72] !== b || t[73] !== j || t[74] !== D
    ? ((tn = (e) => {
        if (b?.(e)) return !0;
        let t = ne(e);
        if (t?.entrypoint !== `global`) return !1;
        let n = t.pluginId === `self`,
          r = j.get(Se) ?? P;
        if (
          r.pathname !== F ||
          r.key !== P.key ||
          (t.toolName !== D.tool.name && (!be(D.server) || t.toolName !== Re(D.tool)?.actionName))
        )
          return n;
        if (!n) {
          if (D.hostId !== `local`) return !1;
          if (ce(t.pluginId) != null) {
            if (t.pluginId !== D.pluginId) return !1;
          } else if (
            jt(D) !== t.pluginId ||
            j
              .get(Ce)
              .some(
                (e) =>
                  e.tool.name === t.toolName &&
                  (e.hostId !== D.hostId || e.server !== D.server) &&
                  jt(e) === t.pluginId,
              )
          )
            return !1;
        }
        Ae(j, oe, { ...et(j, D), feature: `deep_link`, action: `requested` });
        let i = te.safeParse(r.state).data?.mcpAppDeepLink;
        We.current?.locationKey !== r.key &&
          (We.current = {
            locationKey: r.key,
            target: i == null && S != null && S.url !== `/` ? S.url : Mt(i),
          });
        let a = t.target ?? { path: [], query: [] },
          o = Mt(a);
        return (
          We.current.target !== o &&
            ((We.current.target = o),
            (0, Lt.flushSync)(() => {
              Ne(
                { pathname: F, search: r.search, hash: r.hash },
                { state: { ...r.state, mcpHistoryNavigation: !1, entrypoint: `global`, mcpAppDeepLink: a } },
              );
            })),
          !0
        );
      }),
      (t[68] = S),
      (t[69] = F),
      (t[70] = P),
      (t[71] = Ne),
      (t[72] = b),
      (t[73] = j),
      (t[74] = D),
      (t[75] = tn))
    : (tn = t[75]);
  let nn = fe(tn),
    rn;
  t[76] !== R || t[77] !== j || t[78] !== D
    ? ((rn = async () => {
        let e = await ht(j, { view: D, threadId: R }),
          t = st(e.resource),
          n = t?.kind === `dil` ? t.htmlFallback : t;
        if (n?.kind !== `html`) throw Error(`The app returned an unsupported widget resource`);
        return { resource: n, resourceIdentity: e.identitySnapshot };
      }),
      (t[76] = R),
      (t[77] = j),
      (t[78] = D),
      (t[79] = rn))
    : (rn = t[79]);
  let an = rn,
    on = k && !Te ? void 0 : `inline`,
    sn;
  t[80] === J ? (sn = t[81]) : ((sn = J == null ? void 0 : (e) => Ze(e, J)), (t[80] = J), (t[81] = sn));
  let cn;
  t[82] !== J || t[83] !== j.queryClient
    ? ((cn =
        J == null
          ? void 0
          : () => {
              j.queryClient.removeQueries({ queryKey: J, exact: !0 });
            }),
      (t[82] = J),
      (t[83] = j.queryClient),
      (t[84] = cn))
    : (cn = t[84]);
  let ln = C === `app` ? void 0 : y,
    un;
  t[85] === w
    ? (un = t[86])
    : ((un =
        w == null
          ? void 0
          : async (e) => {
              let t = await w(e);
              return t == null ? null : { contents: [{ ...t, uri: e.uri }] };
            }),
      (t[85] = w),
      (t[86] = un));
  let dn;
  t[87] === w ? (dn = t[88]) : ((dn = w == null ? {} : { "openai/resource": {} }), (t[87] = w), (t[88] = dn));
  let fn;
  t[89] === Ie ? (fn = t[90]) : ((fn = Ie ? { "openai/selfDeepLinks": {} } : {}), (t[89] = Ie), (t[90] = fn));
  let pn;
  t[91] !== _ || t[92] !== dn || t[93] !== fn
    ? ((pn = { ..._, ...dn, ...fn }), (t[91] = _), (t[92] = dn), (t[93] = fn), (t[94] = pn))
    : (pn = t[94]);
  let mn;
  t[95] === T ? (mn = t[96]) : ((mn = T == null ? [] : [Ee]), (t[95] = T), (t[96] = mn));
  let hn;
  t[97] !== s ||
  t[98] !== en ||
  t[99] !== nn ||
  t[100] !== r ||
  t[101] !== on ||
  t[102] !== sn ||
  t[103] !== cn ||
  t[104] !== ln ||
  t[105] !== un ||
  t[106] !== pn ||
  t[107] !== mn
    ? ((hn = {
        panelTabId: r,
        autoFocus: s,
        displayMode: on,
        retain: sn,
        dispose: cn,
        onOpenLink: nn,
        onRequestClose: ln,
        readHostResource: un,
        experimentalCapabilities: pn,
        forwardedRequestMethods: mn,
        handleRequest: en,
      }),
      (t[97] = s),
      (t[98] = en),
      (t[99] = nn),
      (t[100] = r),
      (t[101] = on),
      (t[102] = sn),
      (t[103] = cn),
      (t[104] = ln),
      (t[105] = un),
      (t[106] = pn),
      (t[107] = mn),
      (t[108] = hn))
    : (hn = t[108]);
  let gn = hn,
    _n;
  t[109] !== Yt || t[110] !== H || t[111] !== V
    ? ((_n = { data: Yt, error: V, isLoading: H }), (t[109] = Yt), (t[110] = H), (t[111] = V), (t[112] = _n))
    : (_n = t[112]);
  let vn = _n,
    yn = k && !Te ? Rt : Xe,
    bn = V ?? Y,
    xn = H || (Vt && G),
    Sn;
  t[113] !== vn || t[114] !== bn || t[115] !== xn
    ? ((Sn = { ...vn, error: bn, isLoading: xn }), (t[113] = vn), (t[114] = bn), (t[115] = xn), (t[116] = Sn))
    : (Sn = t[116]);
  let Cn;
  t[117] !== Y || t[118] !== R || t[119] !== kt || t[120] !== j || t[121] !== D || t[122] !== V
    ? ((Cn = () => {
        (Y != null && kt({ cancelRefetch: !1 }), (V != null || Y == null) && pt(j, { threadId: R, view: D }));
      }),
      (t[117] = Y),
      (t[118] = R),
      (t[119] = kt),
      (t[120] = j),
      (t[121] = D),
      (t[122] = V),
      (t[123] = Cn))
    : (Cn = t[123]);
  let wn;
  t[124] !== k || t[125] !== G || t[126] !== E || t[127] !== U || t[128] !== R || t[129] !== D
    ? ((wn = (e) =>
        E === void 0 && !G
          ? (0, K.jsx)(Tt, { view: D, threadId: R, result: U, fullSurface: k, children: e })
          : e),
      (t[124] = k),
      (t[125] = G),
      (t[126] = E),
      (t[127] = U),
      (t[128] = R),
      (t[129] = D),
      (t[130] = wn))
    : (wn = t[130]);
  let Tn;
  t[131] !== k ||
  t[132] !== yn ||
  t[133] !== Y ||
  t[134] !== M ||
  t[135] !== Sn ||
  t[136] !== Cn ||
  t[137] !== wn ||
  t[138] !== D.title
    ? ((Tn = (0, K.jsx)(_t, {
        hostDisplayModes: yn,
        error: Y,
        resource: Sn,
        fullSurface: k,
        mcpAppId: M,
        pluginName: D.title,
        onRetryResourceRead: Cn,
        renderErrorActions: wn,
        presentation: `inline`,
      })),
      (t[131] = k),
      (t[132] = yn),
      (t[133] = Y),
      (t[134] = M),
      (t[135] = Sn),
      (t[136] = Cn),
      (t[137] = wn),
      (t[138] = D.title),
      (t[139] = Tn))
    : (Tn = t[139]);
  let En = Tn,
    Dn;
  t[140] === M
    ? (Dn = t[141])
    : ((Dn = (0, K.jsx)(bt, { isInlineRequested: !0, mcpAppId: M })), (t[140] = M), (t[141] = Dn));
  let Q;
  t[142] === D.hostId
    ? (Q = t[143])
    : ((Q = () => ({ kind: `app-server`, hostId: D.hostId })), (t[142] = D.hostId), (t[143] = Q));
  let On = ct?.identitySnapshot ?? null,
    kn;
  t[144] !== D.resourceUri || t[145] !== D.tool.name
    ? ((kn = { originResourceUri: D.resourceUri, originTool: D.tool.name }),
      (t[144] = D.resourceUri),
      (t[145] = D.tool.name),
      (t[146] = kn))
    : (kn = t[146]);
  let An = D.pluginId ?? D.hostedPluginId,
    jn = S ?? (Ie && C === `app` ? Bt : null),
    Mn = Te ? Pt : Nt,
    Nn;
  t[147] === N
    ? (Nn = t[148])
    : ((Nn =
        N == null ? null : { knownAppId: N.connectorId, logoUrl: N.logoUrl, logoDarkUrl: N.logoDarkUrl }),
      (t[147] = N),
      (t[148] = Nn));
  let Pn = qt ?? null,
    Fn;
  t[149] !== L ||
  t[150] !== Z ||
  t[151] !== k ||
  t[152] !== O ||
  t[153] !== yn ||
  t[154] !== p ||
  t[155] !== C ||
  t[156] !== gn ||
  t[157] !== M ||
  t[158] !== m ||
  t[159] !== we ||
  t[160] !== an ||
  t[161] !== le ||
  t[162] !== vn ||
  t[163] !== Q ||
  t[164] !== On ||
  t[165] !== kn ||
  t[166] !== An ||
  t[167] !== jn ||
  t[168] !== Mn ||
  t[169] !== Nn ||
  t[170] !== Pn ||
  t[171] !== A ||
  t[172] !== D.hostId ||
  t[173] !== D.server ||
  t[174] !== D.title ||
  t[175] !== xe
    ? ((Fn = (0, K.jsx)(yt, {
        analyticsContext: L,
        getNewThreadDestination: Q,
        resourceIdentity: On,
        resource: vn,
        hostDisplayModes: yn,
        recipient: we,
        conversationId: Z,
        fullSurface: k,
        inheritHostBackground: p,
        hostId: D.hostId,
        hostedInThreadScrollLayout: !1,
        lifetime: C,
        mcpAppId: M,
        mcpAppScope: kn,
        sourceName: D.title,
        mcpServerStatuses: void 0,
        modalOpen: m,
        pluginId: An,
        deepLink: jn,
        mcpAppHostAdapter: gn,
        refetchResource: an,
        Frame: Mn,
        resolveResourceWatchPath: le,
        server: D.server,
        appIcon: Nn,
        sidePanelTitle: D.title,
        title: D.title,
        globalSurface: O,
        toolArguments: A,
        toolResult: Pn,
        viewParamsOverride: xe,
      })),
      (t[149] = L),
      (t[150] = Z),
      (t[151] = k),
      (t[152] = O),
      (t[153] = yn),
      (t[154] = p),
      (t[155] = C),
      (t[156] = gn),
      (t[157] = M),
      (t[158] = m),
      (t[159] = we),
      (t[160] = an),
      (t[161] = le),
      (t[162] = vn),
      (t[163] = Q),
      (t[164] = On),
      (t[165] = kn),
      (t[166] = An),
      (t[167] = jn),
      (t[168] = Mn),
      (t[169] = Nn),
      (t[170] = Pn),
      (t[171] = A),
      (t[172] = D.hostId),
      (t[173] = D.server),
      (t[174] = D.title),
      (t[175] = xe),
      (t[176] = Fn))
    : (Fn = t[176]);
  let In;
  t[177] !== l || t[178] !== Jt.kind || t[179] !== Vt || t[180] !== Y || t[181] !== En
    ? ((In = l == null ? En : (0, Lt.createPortal)(En, l)),
      (t[177] = l),
      (t[178] = Jt.kind),
      (t[179] = Vt),
      (t[180] = Y),
      (t[181] = En),
      (t[182] = In))
    : (In = t[182]);
  let Ln;
  t[183] !== Dn || t[184] !== Fn || t[185] !== In
    ? ((Ln = (0, K.jsxs)(K.Fragment, { children: [Dn, Fn, In] })),
      (t[183] = Dn),
      (t[184] = Fn),
      (t[185] = In),
      (t[186] = Ln))
    : (Ln = t[186]);
  let Rn = Ln,
    $;
  t[187] === i ? ($ = t[188]) : (($ = ae(`relative h-full min-h-0`, i)), (t[187] = i), (t[188] = $));
  let zn;
  return (
    t[189] !== Rn || t[190] !== $
      ? ((zn = (0, K.jsx)(`div`, { "data-mcp-app-portal-target": `true`, className: $, children: Rn })),
        (t[189] = Rn),
        (t[190] = $),
        (t[191] = zn))
      : (zn = t[191]),
    zn
  );
}
function At(e) {
  return e.type === `text`;
}
function jt(e) {
  let t = e.pluginId ?? (be(e.server) ? ve({ server: e.server, tool: e.tool }) : e.server);
  if (t == null) return null;
  let n = ce(t);
  return n == null ? t : t.slice(0, -(n.length + 1));
}
function Mt(e) {
  return JSON.stringify([e?.path ?? [], e?.query ?? []]);
}
function Nt(e) {
  let t = (0, Ft.c)(4),
    { allowGlobalHost: n, sessionId: r } = e,
    i = n === void 0 || n,
    a = me(q, r) === !1,
    o;
  return (
    t[0] !== i || t[1] !== r || t[2] !== a
      ? ((o = (0, K.jsx)(V, { isAccessRevoked: a, allowGlobalHost: i, sessionId: r })),
        (t[0] = i),
        (t[1] = r),
        (t[2] = a),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function Pt(e) {
  let t = (0, Ft.c)(2),
    { sessionId: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, K.jsx)(Nt, { allowGlobalHost: !1, sessionId: n })), (t[0] = n), (t[1] = r)),
    r
  );
}
var Ft, It, Lt, K, Rt, zt, Bt, q;
function J() {
  return (J = e(() => {
    ((Ft = w()),
      g(),
      u(),
      Te(),
      f(),
      l(),
      S(),
      (It = pe()),
      (Lt = T()),
      p(),
      z(),
      A(),
      xe(),
      St(),
      we(),
      Ct(),
      qe(),
      M(),
      xt(),
      ct(),
      H(),
      he(),
      F(),
      $e(),
      vt(),
      at(),
      Pe(),
      D(),
      ye(),
      Ye(),
      We(),
      Ie(),
      m(),
      Ne(),
      N(),
      I(),
      G(),
      O(),
      De(),
      mt(),
      (K = de()),
      (Rt = [`fullscreen`]),
      (zt = {}),
      (Bt = { url: `/` }),
      (q = v(k, (e, { get: t, scope: n }) => {
        let r = t(B, e),
          i = r == null ? null : t(Ke, r.sourceMcpAppId)?.content;
        if (i == null || !P(n.get, i.server)) return !1;
        let { data: a } = t(j, i.hostId);
        return a?.data.some(
          ({ name: e, tools: t }) =>
            e === i.server &&
            R(t).some(
              (e) => e.name === i.mcpAppScope.originTool && se(e._meta) === i.mcpAppScope.originResourceUri,
            ),
        );
      })));
  }))();
}
export { G as i, J as n, Tt as r, kt as t };
//# sourceMappingURL=view-frame-c8d02fef58da.js.map
