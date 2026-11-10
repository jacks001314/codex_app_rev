import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Ept as r,
  FBt as i,
  FNt as a,
  Fbt as o,
  HFt as s,
  Ibt as c,
  KSt as l,
  LNt as u,
  LRt as d,
  NSt as f,
  PBt as p,
  Pit as m,
  Qst as h,
  Rrt as g,
  SSt as _,
  USt as v,
  VRt as y,
  VSt as ee,
  XOt as b,
  Y3 as x,
  Yst as S,
  Z3 as C,
  ZSt as w,
  gB as T,
  hB as E,
  iCt as D,
  jit as O,
  mCt as k,
  n9 as A,
  nCt as te,
  sct as j,
  tkt as M,
  uSt as N,
  wbt as P,
  ybt as F,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $cr as I,
  ALr as L,
  BN as ne,
  BRr as R,
  CDr as z,
  D2n as re,
  E2n as B,
  Efr as V,
  FDr as H,
  FMr as ie,
  GK as ae,
  ILr as oe,
  K3t as se,
  KBr as U,
  LLr as ce,
  MOr as le,
  O2n as W,
  RMr as ue,
  T2n as de,
  Tfr as fe,
  ULr as pe,
  VFn as me,
  VN as he,
  WK as ge,
  WNn as _e,
  XFn as ve,
  XT as ye,
  Ycr as be,
  b6t as xe,
  bLr as Se,
  d6t as Ce,
  eE as we,
  h5n as Te,
  imr as Ee,
  kLr as De,
  lAn as Oe,
  oAn as ke,
  oqn as Ae,
  p5n as je,
  rPn as Me,
  rmr as Ne,
  rqn as Pe,
  v6t as Fe,
  wLr as Ie,
  xMr as Le,
  yMr as Re,
  zLr as ze,
  zOr as Be,
} from "./app-initial-ad16eaadf81f.js";
import { i as Ve, t as He } from "./chatgpt-ecosystem-widget-f627221f36cd.js";
import { i as Ue, r as We } from "./plugin-connected-account-links-e850d089d83d.js";
import { i as Ge, n as Ke, t as qe } from "./chatgpt-ecosystem-widget-launch-53c875439c23.js";
import { a as Je, t as Ye } from "./chatgpt-conversation-page-ccc364bfc217.js";
import { i as Xe, r as G } from "./plugin-view-frame-b4914cf87602.js";
import { i as Ze, t as Qe } from "./view-page-dd92188ae5b3.js";
import { n as $e, t as et } from "./global-view-fbdb5981e1cb.js";
function tt(e) {
  let n = (0, nt.c)(33),
    { appId: r, conversationId: i, pluginId: a, mcpAppId: s, result: l } = e,
    u = t(z),
    d = ee(),
    f = v(),
    p;
  if (n[0] !== d.hash) {
    let e = o(d.hash.slice(1));
    ((p = e == null ? `/` : P(e)), (n[0] = d.hash), (n[1] = p));
  } else p = n[1];
  let m;
  n[2] === p ? (m = n[3]) : ((m = { url: p }), (n[2] = p), (n[3] = m));
  let h = m,
    g;
  n[4] !== r ||
  n[5] !== h ||
  n[6] !== d ||
  n[7] !== f ||
  n[8] !== a ||
  n[9] !== l.analyticsContext?.connectorId ||
  n[10] !== l.analyticsContext?.pluginId ||
  n[11] !== l.request ||
  n[12] !== u
    ? ((g = (e) => {
        let t = c(e);
        if (t?.pluginId !== `self` || t.entrypoint !== `global`) return !1;
        let n = u.get(be) ?? d;
        if (n.pathname !== d.pathname || n.key !== d.key) return !0;
        let i = t.target == null ? `/` : P(t.target);
        return t.toolName === l.request.toolName
          ? (Le(u, A, {
              connectorId: l.analyticsContext?.connectorId,
              pluginId: l.analyticsContext?.pluginId,
              feature: `deep_link`,
              action: `requested`,
            }),
            i !== h.url &&
              (0, K.flushSync)(() => {
                f({ pathname: d.pathname, search: d.search, hash: i === `/` ? `` : i });
              }),
            !0)
          : ((0, K.flushSync)(() => {
              f(
                { pathname: F(a, t.toolName), search: new URLSearchParams({ path: i }).toString() },
                { state: { sourceMcpApp: { appId: r, toolName: l.request.toolName } } },
              );
            }),
            !0);
      }),
      (n[4] = r),
      (n[5] = h),
      (n[6] = d),
      (n[7] = f),
      (n[8] = a),
      (n[9] = l.analyticsContext?.connectorId),
      (n[10] = l.analyticsContext?.pluginId),
      (n[11] = l.request),
      (n[12] = u),
      (n[13] = g))
    : (g = n[13]);
  let _ = T(g),
    y;
  n[14] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = [`fullscreen`]), (n[14] = y)) : (y = n[14]);
  let b = u.value.kind === `chatgpt` ? u : null,
    x;
  n[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { kind: `chatgpt`, conversationOrigin: `tpp` }), (n[15] = x))
    : (x = n[15]);
  let C;
  n[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((C = {}), (n[16] = C)) : (C = n[16]);
  let w;
  n[17] === l.mcpAppHostAdapter.experimentalCapabilities
    ? (w = n[18])
    : ((w = { ...l.mcpAppHostAdapter.experimentalCapabilities, "openai/selfDeepLinks": C }),
      (n[17] = l.mcpAppHostAdapter.experimentalCapabilities),
      (n[18] = w));
  let E;
  n[19] !== _ || n[20] !== l.mcpAppHostAdapter || n[21] !== w
    ? ((E = { ...l.mcpAppHostAdapter, onOpenLink: _, experimentalCapabilities: w }),
      (n[19] = _),
      (n[20] = l.mcpAppHostAdapter),
      (n[21] = w),
      (n[22] = E))
    : (E = n[22]);
  let D;
  n[23] !== l || n[24] !== E
    ? ((D = { ...l, mcpAppHostAdapter: E }), (n[23] = l), (n[24] = E), (n[25] = D))
    : (D = n[25]);
  let O;
  return (
    n[26] !== i || n[27] !== h || n[28] !== s || n[29] !== a || n[30] !== D || n[31] !== b
      ? ((O = (0, rt.jsx)(He, {
          fullSurface: !0,
          globalSurface: !0,
          hostDisplayModes: y,
          lifetime: `app`,
          conversationId: i,
          recipient: b,
          newThreadDestination: x,
          pluginId: a,
          deepLink: h,
          hostId: S,
          mcpAppId: s,
          result: D,
        })),
        (n[26] = i),
        (n[27] = h),
        (n[28] = s),
        (n[29] = a),
        (n[30] = D),
        (n[31] = b),
        (n[32] = O))
      : (O = n[32]),
    O
  );
}
var nt, K, rt;
function it() {
  return (it = e(() => {
    ((nt = p()), g(), w(), j(), (K = a()), f(), Ve(), I(), Re(), H(), U(), E(), (rt = u()));
  }))();
}
async function at(e, t) {
  await pe();
  let n = e.get(J)[st(t)];
  return typeof n == `string` ? B(n) : void 0;
}
function ot(e, t, n, r) {
  (ze(q, { entries: { [st(t)]: { value: n, expectedValue: r } }, maxEntries: 100 }), e.set(J, oe(q, {})));
}
function st(e) {
  return JSON.stringify([
    e.accountId,
    e.userId,
    e.pluginId,
    e.appId,
    e.linkId ?? null,
    e.toolName,
    e.resourceUri,
  ]);
}
var q, ct, J;
function Y() {
  return (Y = e(() => {
    (s(),
      ce(),
      De(),
      W(),
      (q = `hosted-mcp-conversations-v1`),
      (ct = d(y(), y().nullable().catch(null)).catch({})),
      (J = L(q, {}, { coerceStoredValue: (e) => ct.parse(e) })));
  }))();
}
var lt;
function ut() {
  return (ut = e(() => {
    (w(),
      j(),
      Ie(),
      Ke(),
      W(),
      Fe(),
      se(),
      ve(),
      ke(),
      We(),
      fe(),
      n(),
      U(),
      m(),
      Me(),
      Ae(),
      Y(),
      (lt = k(h, (e, { scope: t, get: n }) => {
        let i = n(Se),
          a = [`hosted-mcp-extension`, e, i],
          o = ({ hostedEntrypoint: t, hostedPluginId: n }) =>
            n === e.pluginId &&
            t?.app_id === e.appId &&
            t.tool_name === e.toolName &&
            t.resource_uri === e.resourceUri;
        return {
          queryKey: a,
          enabled: i != null,
          queryFn: async ({ signal: n }) => {
            if (i == null) throw Error(`App conversation requires an authenticated user`);
            let s = { accountId: e.accountId, userId: i },
              c = await at(t, e),
              l;
            if ((n.throwIfAborted(), c != null)) {
              t.set(Pe, c, s);
              let e = t.query.snapshot(_e, c),
                r = () => {
                  e.cancel();
                };
              n.addEventListener(`abort`, r, { once: !0 });
              try {
                await e.fetch();
              } catch (e) {
                if (
                  (n.throwIfAborted(),
                  !(e instanceof O) ||
                    (e.errorCode !== `conversation_deleted` &&
                      e.errorCode !== `history_disabled_conversation_expired`))
                )
                  throw e;
                ((l = c), (c = void 0));
              } finally {
                n.removeEventListener(`abort`, r);
              }
            }
            n.throwIfAborted();
            let u = t.query.snapshot(V, { accountId: e.accountId, hostId: S, roots: [] }),
              d = me(u.getData() ?? []).find(o),
              f = { connectorId: e.appId, pluginId: d?.remotePluginId, source: `global` },
              p = await Ge({
                scope: t,
                analyticsContext: f,
                hostId: S,
                request: {
                  appUri: `connectors://${e.appId}`,
                  chatGptThreadId: c ?? null,
                  linkId: e.linkId,
                  productSku: `TPP`,
                  template: e.resourceUri,
                  toolName: e.toolName,
                  toolInput: {},
                },
                mode: `fullscreen`,
                accountId: e.accountId,
                accountSource: `apps`,
                signal: n,
              }),
              m = r(),
              h = {
                ...p.mcpAppHostAdapter,
                retain: (n, r) => {
                  let i = xe(n, a),
                    s = !1,
                    c = () => {
                      queueMicrotask(() => {
                        s || Ce(n, r);
                      });
                    },
                    l = t.watch(({ get: t }) => {
                      let n = t(Ue, { accountId: e.accountId, userId: e.userId, appId: e.appId });
                      if (n != null && n !== e.linkId) {
                        c();
                        return;
                      }
                      let r = t(Oe);
                      if (r?.entries == null) return;
                      let i = r.entries.find(o),
                        a = n ?? i?.hostedEntrypoint?.link_id ?? void 0;
                      (i == null || a !== e.linkId) && c();
                    });
                  return () => {
                    ((s = !0), l(), i());
                  };
                },
                dispose: () => {
                  if (t.queryClient.getQueryData(a)?.mcpAppId === m) {
                    let e = u.getData();
                    e != null && !me(e).some(o)
                      ? t.queryClient.removeQueries({ queryKey: a, exact: !0 })
                      : t.queryClient.resetQueries({ queryKey: a, exact: !0 });
                  }
                },
              };
            return {
              historyRequestIdentity: s,
              recoveredConversationId: l,
              result: { ...p, mcpAppHostAdapter: h },
              mcpAppId: m,
              conversationId: N(c ?? de()),
            };
          },
          gcTime: 0,
          refetchOnMount: !1,
          refetchOnReconnect: !1,
          refetchOnWindowFocus: !1,
          retry: !1,
          staleTime: 1 / 0,
        };
      })));
  }))();
}
function dt(e) {
  let t = (0, X.c)(20),
    { UnavailableState: n } = e,
    { server: r, toolName: i } = l(),
    { isLoading: a } = Ee(),
    o = D(ie),
    s = D(R),
    c = D(Se),
    u = D(Oe),
    d;
  t[0] !== u?.entries || t[1] !== r || t[2] !== i
    ? ((d = u?.entries?.find((e) => {
        let { hostedEntrypoint: t } = e;
        return t?.app_id === r && t?.tool_name === i;
      })),
      (t[0] = u?.entries),
      (t[1] = r),
      (t[2] = i),
      (t[3] = d))
    : (d = t[3]);
  let f = d;
  if (o == null || s == null || c == null || f?.hostedEntrypoint == null) {
    if (
      o != null &&
      s != null &&
      c != null &&
      r != null &&
      i != null &&
      u?.entries != null &&
      !u.isLoading &&
      !u.isFetching
    ) {
      let e;
      t[4] === u ? (e = t[5]) : ((e = () => void u.refetch()), (t[4] = u), (t[5] = e));
      let n;
      return (
        t[6] !== r || t[7] !== e || t[8] !== i
          ? ((n = (0, Z.jsx)(ft, { appId: r, toolName: i, onRetry: e })),
            (t[6] = r),
            (t[7] = e),
            (t[8] = i),
            (t[9] = n))
          : (n = t[9]),
        n
      );
    }
    let e = o == null || s == null || c == null ? a : u?.isLoading === !0 || u?.isFetching === !0,
      n;
    t[10] === u ? (n = t[11]) : ((n = () => void u?.refetch()), (t[10] = u), (t[11] = n));
    let l;
    return (
      t[12] !== e || t[13] !== n
        ? ((l = (0, Z.jsx)(G, { isLoading: e, onRetry: n })), (t[12] = e), (t[13] = n), (t[14] = l))
        : (l = t[14]),
      l
    );
  }
  let p;
  return (
    t[15] !== n || t[16] !== o || t[17] !== f || t[18] !== s
      ? ((p = (0, Z.jsx)(pt, { accountId: o, userId: s, entry: f, UnavailableState: n })),
        (t[15] = n),
        (t[16] = o),
        (t[17] = f),
        (t[18] = s),
        (t[19] = p))
      : (p = t[19]),
    p
  );
}
function ft(e) {
  let t = (0, X.c)(29),
    { appId: n, toolName: r, onRetry: i } = e,
    { hash: a } = ee(),
    s;
  t[0] === n ? (s = t[1]) : ((s = { appId: n, productContext: `chatgpt` }), (t[0] = n), (t[1] = s));
  let { data: c, isFetching: l, refetch: u } = te(ye, s);
  if (c == null) {
    let e;
    t[2] !== i || t[3] !== u
      ? ((e = () => {
          (u(), i());
        }),
        (t[2] = i),
        (t[3] = u),
        (t[4] = e))
      : (e = t[4]);
    let n;
    return (
      t[5] !== l || t[6] !== e
        ? ((n = (0, Z.jsx)(G, { isLoading: l, onRetry: e })), (t[5] = l), (t[6] = e), (t[7] = n))
        : (n = t[7]),
      n
    );
  }
  let d, f, p, m;
  if (t[8] !== a || t[9] !== c || t[10] !== r) {
    let e = o(a.slice(1));
    ((d = _),
      (m = !0),
      t[15] !== c || t[16] !== r ? ((f = F(c, r)), (t[15] = c), (t[16] = r), (t[17] = f)) : (f = t[17]),
      (p = new URLSearchParams({ path: e == null ? `/` : P(e) }).toString()),
      (t[8] = a),
      (t[9] = c),
      (t[10] = r),
      (t[11] = d),
      (t[12] = f),
      (t[13] = p),
      (t[14] = m));
  } else ((d = t[11]), (f = t[12]), (p = t[13]), (m = t[14]));
  let h;
  t[18] !== f || t[19] !== p
    ? ((h = { pathname: f, search: p }), (t[18] = f), (t[19] = p), (t[20] = h))
    : (h = t[20]);
  let g;
  t[21] !== n || t[22] !== r
    ? ((g = { sourceMcpApp: { appId: n, toolName: r } }), (t[21] = n), (t[22] = r), (t[23] = g))
    : (g = t[23]);
  let v;
  return (
    t[24] !== d || t[25] !== m || t[26] !== h || t[27] !== g
      ? ((v = (0, Z.jsx)(d, { replace: m, to: h, state: g })),
        (t[24] = d),
        (t[25] = m),
        (t[26] = h),
        (t[27] = g),
        (t[28] = v))
      : (v = t[28]),
    v
  );
}
function pt(e) {
  let n = (0, X.c)(77),
    { accountId: r, userId: i, entry: a, UnavailableState: s } = e,
    c = t(le),
    { hash: l } = ee(),
    u = o(l.slice(1)),
    { hostedEntrypoint: d, hostedPluginId: f } = a,
    p;
  n[0] !== r || n[1] !== d.app_id || n[2] !== i
    ? ((p = { accountId: r, userId: i, appId: d.app_id }),
      (n[0] = r),
      (n[1] = d.app_id),
      (n[2] = i),
      (n[3] = p))
    : (p = n[3]);
  let m = te(Ue, p) ?? d.link_id ?? void 0,
    h;
  n[4] !== r ||
  n[5] !== d.app_id ||
  n[6] !== d.resource_uri ||
  n[7] !== d.tool_name ||
  n[8] !== f ||
  n[9] !== m ||
  n[10] !== i
    ? ((h = {
        accountId: r,
        userId: i,
        appId: d.app_id,
        linkId: m,
        toolName: d.tool_name,
        resourceUri: d.resource_uri,
        pluginId: f,
      }),
      (n[4] = r),
      (n[5] = d.app_id),
      (n[6] = d.resource_uri),
      (n[7] = d.tool_name),
      (n[8] = f),
      (n[9] = m),
      (n[10] = i),
      (n[11] = h))
    : (h = n[11]);
  let g = h,
    { data: _, error: v, isFetching: y, refetch: b } = te(lt, g);
  if (_ == null) {
    let e;
    n[12] === g ? (e = n[13]) : ((e = JSON.stringify(g)), (n[12] = g), (n[13] = e));
    let t;
    n[14] === b
      ? (t = n[15])
      : ((t = () => {
          b();
        }),
        (n[14] = b),
        (n[15] = t));
    let r;
    return (
      n[16] !== s || n[17] !== v || n[18] !== y || n[19] !== e || n[20] !== t
        ? ((r = (0, Z.jsx)(s, { error: v, hostId: S, isLoading: y, onRetry: t }, e)),
          (n[16] = s),
          (n[17] = v),
          (n[18] = y),
          (n[19] = e),
          (n[20] = t),
          (n[21] = r))
        : (r = n[21]),
      r
    );
  }
  let x = ge,
    C = _.mcpAppId,
    w;
  n[22] !== _.conversationId ||
  n[23] !== c.value.pathname ||
  n[24] !== c.value.routeTemplate ||
  n[25] !== c.value.search
    ? ((w = {
        pathname: c.value.pathname,
        routeTemplate: c.value.routeTemplate,
        search: c.value.search,
        routeKind: `chatgpt-thread`,
        conversationId: _.conversationId,
      }),
      (n[22] = _.conversationId),
      (n[23] = c.value.pathname),
      (n[24] = c.value.routeTemplate),
      (n[25] = c.value.search),
      (n[26] = w))
    : (w = n[26]);
  let T = ne,
    E = Ye,
    D;
  n[27] === _.conversationId
    ? (D = n[28])
    : ((D = re(_.conversationId)), (n[27] = _.conversationId), (n[28] = D));
  let O = _.result.widget.name || d.title,
    k;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = [{ type: `text`, text: `The user is viewing this app.` }]), (n[29] = k))
    : (k = n[29]);
  let A = u == null ? `/` : P(u),
    j;
  n[30] !== d.app_id || n[31] !== d.resource_uri || n[32] !== d.tool_name || n[33] !== f || n[34] !== A
    ? ((j = {
        app_id: d.app_id,
        plugin_id: f,
        tool_name: d.tool_name,
        resource_uri: d.resource_uri,
        path: A,
      }),
      (n[30] = d.app_id),
      (n[31] = d.resource_uri),
      (n[32] = d.tool_name),
      (n[33] = f),
      (n[34] = A),
      (n[35] = j))
    : (j = n[35]);
  let M;
  n[36] !== d.app_id || n[37] !== O || n[38] !== k || n[39] !== j
    ? ((M = {
        id: d.app_id,
        kind: `context`,
        untrusted: !0,
        server: `codex_apps`,
        sourceName: O,
        content: k,
        structuredContent: j,
      }),
      (n[36] = d.app_id),
      (n[37] = O),
      (n[38] = k),
      (n[39] = j),
      (n[40] = M))
    : (M = n[40]);
  let N;
  n[41] !== _.historyRequestIdentity || n[42] !== _.recoveredConversationId || n[43] !== g || n[44] !== c
    ? ((N = (e) => {
        (c.set(Pe, e, _.historyRequestIdentity), ot(c, g, e, _.recoveredConversationId));
      }),
      (n[41] = _.historyRequestIdentity),
      (n[42] = _.recoveredConversationId),
      (n[43] = g),
      (n[44] = c),
      (n[45] = N))
    : (N = n[45]);
  let F = _.result.widget.name || d.title,
    I;
  n[46] !== a.remotePluginId || n[47] !== d.app_id
    ? ((I = { hostId: S, server: d.app_id, connectorId: d.app_id, pluginId: a.remotePluginId }),
      (n[46] = a.remotePluginId),
      (n[47] = d.app_id),
      (n[48] = I))
    : (I = n[48]);
  let L;
  n[49] !== _.conversationId ||
  n[50] !== _.mcpAppId ||
  n[51] !== _.result ||
  n[52] !== d.app_id ||
  n[53] !== f
    ? ((L = (0, Z.jsx)(tt, {
        appId: d.app_id,
        conversationId: _.conversationId,
        pluginId: f,
        mcpAppId: _.mcpAppId,
        result: _.result,
      })),
      (n[49] = _.conversationId),
      (n[50] = _.mcpAppId),
      (n[51] = _.result),
      (n[52] = d.app_id),
      (n[53] = f),
      (n[54] = L))
    : (L = n[54]);
  let R;
  n[55] !== d.title || n[56] !== F || n[57] !== I || n[58] !== L
    ? ((R = (0, Z.jsx)(et, { title: F, nativeTitle: d.title, source: I, children: L })),
      (n[55] = d.title),
      (n[56] = F),
      (n[57] = I),
      (n[58] = L),
      (n[59] = R))
    : (R = n[59]);
  let z;
  n[60] !== d.title || n[61] !== M || n[62] !== N || n[63] !== R
    ? ((z = { documentTitle: d.title, mcpAppContext: M, onServerThreadIdChange: N, fullscreenContent: R }),
      (n[60] = d.title),
      (n[61] = M),
      (n[62] = N),
      (n[63] = R),
      (n[64] = z))
    : (z = n[64]);
  let B;
  n[65] !== E || n[66] !== z || n[67] !== D
    ? ((B = (0, Z.jsx)(E, {
        conversationId: D,
        isTemporaryChat: !1,
        sharedConversationId: null,
        workspace: z,
      })),
      (n[65] = E),
      (n[66] = z),
      (n[67] = D),
      (n[68] = B))
    : (B = n[68]);
  let V;
  n[69] !== T || n[70] !== B
    ? ((V = (0, Z.jsx)(T, { children: B })), (n[69] = T), (n[70] = B), (n[71] = V))
    : (V = n[71]);
  let H;
  return (
    n[72] !== x || n[73] !== _.mcpAppId || n[74] !== V || n[75] !== w
      ? ((H = (0, Z.jsx)(x, { route: w, children: V }, C)),
        (n[72] = x),
        (n[73] = _.mcpAppId),
        (n[74] = V),
        (n[75] = w),
        (n[76] = H))
      : (H = n[76]),
    H
  );
}
var X, Z;
function mt() {
  return (mt = e(() => {
    ((X = p()),
      w(),
      j(),
      f(),
      ue(),
      Ie(),
      Ne(),
      $e(),
      it(),
      ke(),
      Xe(),
      We(),
      we(),
      he(),
      Be(),
      ae(),
      U(),
      Je(),
      W(),
      Ae(),
      Y(),
      ut(),
      (Z = u()));
  }))();
}
function ht() {
  let e = (0, vt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(Qe, { hostedView: (0, $.jsx)(dt, { UnavailableState: gt }) })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function gt(e) {
  let n = (0, vt.c)(24),
    { error: r, hostId: i, isLoading: a, onRetry: o } = e,
    s = t(h),
    [c, l] = (0, Q.useState)(null),
    u = r instanceof qe ? r : null,
    d;
  n[0] === u?.connectorId
    ? (d = n[1])
    : ((d = u?.connectorId?.trim() || null), (n[0] = u?.connectorId), (n[1] = d));
  let f = d,
    p = u?.reauthLinkId,
    m;
  n[2] === c ? (m = n[3]) : ((m = () => () => c?.abort()), (n[2] = c), (n[3] = m));
  let g;
  (n[4] !== c || n[5] !== f || n[6] !== i || n[7] !== p
    ? ((g = [c, f, i, p]), (n[4] = c), (n[5] = f), (n[6] = i), (n[7] = p), (n[8] = g))
    : (g = n[8]),
    (0, Q.useEffect)(m, g));
  let _;
  n[9] === f
    ? (_ = n[10])
    : ((_ =
        f == null
          ? void 0
          : (0, $.jsx)(M, {
              id: `openaiMcpCapabilities.unavailable.connectDescription`,
              defaultMessage: `Connect this app to open it`,
              description: `Recovery guidance when a hosted MCP app needs a connection before it can open`,
            })),
      (n[9] = f),
      (n[10] = _));
  let v;
  n[11] !== c || n[12] !== f || n[13] !== i || n[14] !== a || n[15] !== o || n[16] !== p || n[17] !== s
    ? ((v =
        f == null
          ? void 0
          : (0, $.jsx)(x, {
              color: `secondary`,
              disabled: c != null || a,
              loading: c != null || a,
              onClick: () => {
                let e = new AbortController();
                (l(e),
                  Te(s, {
                    connectorId: f,
                    hostId: i,
                    oauthPresentation: `popup`,
                    payload:
                      p == null
                        ? void 0
                        : { requireAuth: !0, authReason: `reauthentication_required`, reauthLinkId: p },
                    signal: e.signal,
                  })
                    .then((t) => {
                      let { didConnect: n } = t;
                      n && !e.signal.aborted && o();
                    })
                    .catch(_t)
                    .finally(() => l(null)));
              },
              children: (0, $.jsx)(M, {
                id: `openaiMcpCapabilities.unavailable.connect`,
                defaultMessage: `Connect`,
                description: `Button that opens the existing connection flow for a hosted MCP app`,
              }),
            })),
      (n[11] = c),
      (n[12] = f),
      (n[13] = i),
      (n[14] = a),
      (n[15] = o),
      (n[16] = p),
      (n[17] = s),
      (n[18] = v))
    : (v = n[18]);
  let y;
  return (
    n[19] !== a || n[20] !== o || n[21] !== _ || n[22] !== v
      ? ((y = (0, $.jsx)(G, { isLoading: a, onRetry: o, description: _, actions: v })),
        (n[19] = a),
        (n[20] = o),
        (n[21] = _),
        (n[22] = v),
        (n[23] = y))
      : (y = n[23]),
    y
  );
}
function _t() {}
var vt, Q, $;
function yt() {
  return (yt = e(() => {
    ((vt = p()), w(), (Q = i()), b(), je(), C(), Xe(), Ze(), n(), Ke(), mt(), ($ = u()));
  }))();
}
yt();
export { ht as ChatGptMcpExtensionGlobalViewPage };
//# sourceMappingURL=chatgpt-mcp-extension-view-page-c7dcc2a83512.js.map
