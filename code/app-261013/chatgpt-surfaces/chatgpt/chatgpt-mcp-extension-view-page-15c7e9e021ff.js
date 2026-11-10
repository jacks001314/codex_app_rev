import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  EPt as r,
  Ext as i,
  IDt as a,
  Ixt as o,
  Jbt as s,
  Pxt as c,
  Rnt as l,
  TLt as u,
  Txt as d,
  Vxt as f,
  Zxt as p,
  _xt as m,
  byt as h,
  bz as g,
  cyt as _,
  dft as v,
  hrt as y,
  iot as b,
  jDt as x,
  kxt as S,
  n7 as C,
  nSt as w,
  oxt as T,
  rst as E,
  ryt as D,
  t3 as O,
  vrt as k,
  vzt as A,
  wot as j,
  wxt as ee,
  xLt as M,
  xMt as N,
  xz as P,
  yMt as F,
  yyt as te,
  yzt as I,
  zxt as L,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Dt as R,
  $Qn as ne,
  BEn as z,
  BUn as re,
  CFr as B,
  Cwr as V,
  EFr as H,
  EMn as U,
  FAn as ie,
  FFr as ae,
  IOn as oe,
  Icr as se,
  LEn as ce,
  Lcr as le,
  N4n as ue,
  NOn as de,
  QDr as fe,
  QQn as pe,
  SAn as me,
  SG as he,
  UUn as ge,
  XDr as _e,
  XMr as ve,
  YMr as ye,
  ZQn as be,
  _Mn as W,
  bFr as xe,
  dat as Se,
  e$n as G,
  fOr as Ce,
  fur as we,
  gwr as Te,
  hOr as Ee,
  iN as De,
  iNr as Oe,
  j4n as ke,
  kSt as Ae,
  oFr as K,
  pur as je,
  rN as Me,
  rNr as Ne,
  sCr as Pe,
  sat as Fe,
  tNr as Ie,
  tOt as Le,
  uSt as Re,
  xFr as ze,
  xG as Be,
  yCr as Ve,
  zEn as He,
  zFr as Ue,
} from "./app-initial-5851df3f6cb1.js";
import { i as We, t as Ge } from "./chatgpt-ecosystem-widget-86361a1e1747.js";
import { i as Ke, r as qe } from "./plugin-connected-account-links-8dea8c830000.js";
import { i as Je, n as Ye, t as Xe } from "./chatgpt-ecosystem-widget-launch-2a2c56ed75ca.js";
import { s as Ze, t as Qe } from "./chatgpt-conversation-page-f7a3d5e5d239.js";
import { i as $e, r as q } from "./plugin-view-frame-aa4c893f33ff.js";
import { i as et, t as tt } from "./view-page-7e6e4c3c304d.js";
import { n as nt, t as rt } from "./global-view-b02f3e8505fd.js";
function it(e) {
  let t = (0, at.c)(32),
    { appId: n, conversationId: r, pluginId: a, mcpAppId: s, result: c } = e,
    l = o(Pe),
    u = ee(),
    d = i(),
    f;
  if (t[0] !== u.hash) {
    let e = te(u.hash.slice(1));
    ((f = e == null ? `/` : _(e)), (t[0] = u.hash), (t[1] = f));
  } else f = t[1];
  let p;
  t[2] === f ? (p = t[3]) : ((p = { url: f }), (t[2] = f), (t[3] = p));
  let m = p,
    g;
  t[4] !== n ||
  t[5] !== m ||
  t[6] !== u ||
  t[7] !== d ||
  t[8] !== a ||
  t[9] !== c.analyticsContext?.connectorId ||
  t[10] !== c.analyticsContext?.pluginId ||
  t[11] !== c.request ||
  t[12] !== l
    ? ((g = (e) => {
        let t = h(e);
        if (t?.pluginId !== `self` || t.entrypoint !== `global`) return !1;
        let r = l.get(ae) ?? u;
        if (r.pathname !== u.pathname || r.key !== u.key) return !0;
        let i = t.target == null ? `/` : _(t.target);
        return t.toolName === c.request.toolName
          ? (fe(l, C, {
              connectorId: c.analyticsContext?.connectorId,
              pluginId: c.analyticsContext?.pluginId,
              feature: `deep_link`,
              action: `requested`,
            }),
            i !== m.url &&
              (0, J.flushSync)(() => {
                d({ pathname: u.pathname, search: u.search, hash: i === `/` ? `` : i });
              }),
            !0)
          : ((0, J.flushSync)(() => {
              d(
                { pathname: D(a, t.toolName), search: new URLSearchParams({ path: i }).toString() },
                { state: { sourceMcpApp: { appId: n, toolName: c.request.toolName } } },
              );
            }),
            !0);
      }),
      (t[4] = n),
      (t[5] = m),
      (t[6] = u),
      (t[7] = d),
      (t[8] = a),
      (t[9] = c.analyticsContext?.connectorId),
      (t[10] = c.analyticsContext?.pluginId),
      (t[11] = c.request),
      (t[12] = l),
      (t[13] = g))
    : (g = t[13]);
  let v = P(g),
    y;
  t[14] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = [`fullscreen`]), (t[14] = y)) : (y = t[14]);
  let x = l.value.kind === `chatgpt` ? l : null,
    S;
  t[15] === Symbol.for(`react.memo_cache_sentinel`) ? ((S = {}), (t[15] = S)) : (S = t[15]);
  let w;
  t[16] === c.mcpAppHostAdapter.experimentalCapabilities
    ? (w = t[17])
    : ((w = { ...c.mcpAppHostAdapter.experimentalCapabilities, "openai/selfDeepLinks": S }),
      (t[16] = c.mcpAppHostAdapter.experimentalCapabilities),
      (t[17] = w));
  let T;
  t[18] !== v || t[19] !== c.mcpAppHostAdapter || t[20] !== w
    ? ((T = { ...c.mcpAppHostAdapter, onOpenLink: v, experimentalCapabilities: w }),
      (t[18] = v),
      (t[19] = c.mcpAppHostAdapter),
      (t[20] = w),
      (t[21] = T))
    : (T = t[21]);
  let E;
  t[22] !== c || t[23] !== T
    ? ((E = { ...c, mcpAppHostAdapter: T }), (t[22] = c), (t[23] = T), (t[24] = E))
    : (E = t[24]);
  let O;
  return (
    t[25] !== r || t[26] !== m || t[27] !== s || t[28] !== a || t[29] !== x || t[30] !== E
      ? ((O = (0, ot.jsx)(Ge, {
          fullSurface: !0,
          globalSurface: !0,
          hostDisplayModes: y,
          lifetime: `app`,
          conversationId: r,
          recipient: x,
          pluginId: a,
          deepLink: m,
          hostId: b,
          mcpAppId: s,
          result: E,
        })),
        (t[25] = r),
        (t[26] = m),
        (t[27] = s),
        (t[28] = a),
        (t[29] = x),
        (t[30] = E),
        (t[31] = O))
      : (O = t[31]),
    O
  );
}
var at, J, ot;
function st() {
  return (st = e(() => {
    ((at = A()), l(), c(), E(), (J = F()), m(), We(), Ue(), _e(), Ve(), K(), g(), (ot = N()));
  }))();
}
async function ct(e, t) {
  await H();
  let n = e.get(X)[ut(t)];
  return typeof n == `string` ? pe(n) : void 0;
}
function lt(e, t, n, r) {
  (B(Y, { entries: { [ut(t)]: { value: n, expectedValue: r } }, maxEntries: 100 }), e.set(X, xe(Y, {})));
}
function ut(e) {
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
var Y, dt, X;
function ft() {
  return (ft = e(() => {
    (r(),
      ze(),
      Ne(),
      G(),
      (Y = `hosted-mcp-conversations-v1`),
      (dt = M(u(), u().nullable().catch(null)).catch({})),
      (X = Oe(Y, {}, { coerceStoredValue: (e) => dt.parse(e) })));
  }))();
}
var pt, mt;
function ht() {
  return (ht = e(() => {
    (c(),
      E(),
      Ee(),
      Ie(),
      Ye(),
      G(),
      R(),
      Re(),
      U(),
      ce(),
      qe(),
      se(),
      j(),
      K(),
      k(),
      ie(),
      ge(),
      ft(),
      (pt = w(n, (e, { get: t }) => {
        if (e === `chatgpt`) return t(z);
        if (!t(He)) return;
        let n = t(Ce),
          {
            data: r,
            isPending: i,
            isFetching: a,
            refetch: o,
          } = t(le, { accountId: n, hostId: b, roots: [], productContext: e });
        return {
          entries: r == null ? void 0 : W(r),
          isFetching: a,
          isLoading: r == null && (a || (n != null && i)),
          refetch: o,
        };
      })),
      (mt = p(n, (e, { scope: t, get: n }) => {
        let r = n(ye),
          i = [`hosted-mcp-extension`, e, r],
          a = ({ hostedEntrypoint: t, hostedPluginId: n }) =>
            n === e.pluginId &&
            t?.app_id === e.appId &&
            t.tool_name === e.toolName &&
            t.resource_uri === e.resourceUri;
        return {
          queryKey: i,
          enabled: r != null,
          queryFn: async ({ signal: n }) => {
            if (r == null) throw Error(`App conversation requires an authenticated user`);
            let o = { accountId: e.accountId, userId: r },
              c = await ct(t, e),
              l;
            if ((n.throwIfAborted(), c != null)) {
              t.set(re, c, o);
              let e = t.query.snapshot(me, c),
                r = () => {
                  e.cancel();
                };
              n.addEventListener(`abort`, r, { once: !0 });
              try {
                await e.fetch();
              } catch (e) {
                if (
                  (n.throwIfAborted(),
                  !(e instanceof y) ||
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
            let u = t.query.snapshot(le, {
                accountId: e.accountId,
                hostId: b,
                roots: [],
                productContext: e.productContext,
              }),
              d = W(u.getData() ?? []).find(a),
              f = { connectorId: e.appId, pluginId: d?.remotePluginId, source: `global` },
              p = await Je({
                scope: t,
                analyticsContext: f,
                hostId: b,
                request: {
                  appUri: `connectors://${e.appId}`,
                  chatGptThreadId: c ?? null,
                  linkId: e.linkId,
                  productSku: e.productContext === `codex` ? `CODEX` : `TPP`,
                  template: e.resourceUri,
                  toolName: e.toolName,
                  toolInput: {},
                },
                mode: `fullscreen`,
                accountId: e.accountId,
                accountSource: `apps`,
                signal: n,
              }),
              m = v(),
              h = {
                ...p.mcpAppHostAdapter,
                retain: (n, r) => {
                  let o = Le(n, i),
                    s = !1,
                    c = () => {
                      queueMicrotask(() => {
                        s || Ae(n, r);
                      });
                    },
                    l = t.watch(({ get: t }) => {
                      let n = t(Ke, { accountId: e.accountId, userId: e.userId, appId: e.appId });
                      if (n != null && n !== e.linkId) {
                        c();
                        return;
                      }
                      let r = t(pt, e.productContext);
                      if (r?.entries == null) return;
                      let i = r.entries.find(a),
                        o = n ?? i?.hostedEntrypoint?.link_id ?? void 0;
                      (i == null || o !== e.linkId) && c();
                    });
                  return () => {
                    ((s = !0), l(), o());
                  };
                },
                dispose: () => {
                  if (t.queryClient.getQueryData(i)?.mcpAppId === m) {
                    let e = u.getData();
                    e != null && !W(e).some(a)
                      ? t.queryClient.removeQueries({ queryKey: i, exact: !0 })
                      : t.queryClient.resetQueries({ queryKey: i, exact: !0 });
                  }
                },
              };
            return {
              historyRequestIdentity: o,
              recoveredConversationId: l,
              result: { ...p, mcpAppHostAdapter: h },
              mcpAppId: m,
              conversationId: s(c ?? be()),
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
function gt(e) {
  let t = (0, Z.c)(21),
    { productContext: n, UnavailableState: r } = e,
    { server: i, toolName: a } = S(),
    { isLoading: o } = je(),
    s = f(Ce),
    c = f(ve),
    l = f(ye),
    u = L(pt, n),
    d;
  t[0] !== u?.entries || t[1] !== i || t[2] !== a
    ? ((d = u?.entries?.find((e) => {
        let { hostedEntrypoint: t } = e;
        return t?.app_id === i && t?.tool_name === a;
      })),
      (t[0] = u?.entries),
      (t[1] = i),
      (t[2] = a),
      (t[3] = d))
    : (d = t[3]);
  let p = d;
  if (s == null || c == null || l == null || p?.hostedEntrypoint == null) {
    if (
      n === `chatgpt` &&
      s != null &&
      c != null &&
      l != null &&
      i != null &&
      a != null &&
      u?.entries != null &&
      !u.isLoading &&
      !u.isFetching
    ) {
      let e;
      t[4] === u ? (e = t[5]) : ((e = () => void u.refetch()), (t[4] = u), (t[5] = e));
      let n;
      return (
        t[6] !== i || t[7] !== e || t[8] !== a
          ? ((n = (0, Q.jsx)(_t, { appId: i, toolName: a, onRetry: e })),
            (t[6] = i),
            (t[7] = e),
            (t[8] = a),
            (t[9] = n))
          : (n = t[9]),
        n
      );
    }
    let e = s == null || c == null || l == null ? o : u?.isLoading === !0 || u?.isFetching === !0,
      r;
    t[10] === u ? (r = t[11]) : ((r = () => void u?.refetch()), (t[10] = u), (t[11] = r));
    let d;
    return (
      t[12] !== e || t[13] !== r
        ? ((d = (0, Q.jsx)(q, { isLoading: e, onRetry: r })), (t[12] = e), (t[13] = r), (t[14] = d))
        : (d = t[14]),
      d
    );
  }
  let m;
  return (
    t[15] !== r || t[16] !== s || t[17] !== p || t[18] !== n || t[19] !== c
      ? ((m = (0, Q.jsx)(vt, { accountId: s, userId: c, entry: p, productContext: n, UnavailableState: r })),
        (t[15] = r),
        (t[16] = s),
        (t[17] = p),
        (t[18] = n),
        (t[19] = c),
        (t[20] = m))
      : (m = t[20]),
    m
  );
}
function _t(e) {
  let t = (0, Z.c)(29),
    { appId: n, toolName: r, onRetry: i } = e,
    { hash: a } = ee(),
    o;
  t[0] === n ? (o = t[1]) : ((o = { appId: n, productContext: `chatgpt` }), (t[0] = n), (t[1] = o));
  let { data: s, isFetching: c, refetch: l } = L(Fe, o);
  if (s == null) {
    let e;
    t[2] !== i || t[3] !== l
      ? ((e = () => {
          (l(), i());
        }),
        (t[2] = i),
        (t[3] = l),
        (t[4] = e))
      : (e = t[4]);
    let n;
    return (
      t[5] !== c || t[6] !== e
        ? ((n = (0, Q.jsx)(q, { isLoading: c, onRetry: e })), (t[5] = c), (t[6] = e), (t[7] = n))
        : (n = t[7]),
      n
    );
  }
  let u, d, f, p;
  if (t[8] !== a || t[9] !== s || t[10] !== r) {
    let e = te(a.slice(1));
    ((u = T),
      (p = !0),
      t[15] !== s || t[16] !== r ? ((d = D(s, r)), (t[15] = s), (t[16] = r), (t[17] = d)) : (d = t[17]),
      (f = new URLSearchParams({ path: e == null ? `/` : _(e) }).toString()),
      (t[8] = a),
      (t[9] = s),
      (t[10] = r),
      (t[11] = u),
      (t[12] = d),
      (t[13] = f),
      (t[14] = p));
  } else ((u = t[11]), (d = t[12]), (f = t[13]), (p = t[14]));
  let m;
  t[18] !== d || t[19] !== f
    ? ((m = { pathname: d, search: f }), (t[18] = d), (t[19] = f), (t[20] = m))
    : (m = t[20]);
  let h;
  t[21] !== n || t[22] !== r
    ? ((h = { sourceMcpApp: { appId: n, toolName: r } }), (t[21] = n), (t[22] = r), (t[23] = h))
    : (h = t[23]);
  let g;
  return (
    t[24] !== u || t[25] !== p || t[26] !== m || t[27] !== h
      ? ((g = (0, Q.jsx)(u, { replace: p, to: m, state: h })),
        (t[24] = u),
        (t[25] = p),
        (t[26] = m),
        (t[27] = h),
        (t[28] = g))
      : (g = t[28]),
    g
  );
}
function vt(e) {
  let t = (0, Z.c)(78),
    { accountId: n, userId: r, entry: i, productContext: a, UnavailableState: s } = e,
    c = o(Te),
    { hash: l } = ee(),
    u = te(l.slice(1)),
    { hostedEntrypoint: d, hostedPluginId: f } = i,
    p;
  t[0] !== n || t[1] !== d.app_id || t[2] !== r
    ? ((p = { accountId: n, userId: r, appId: d.app_id }),
      (t[0] = n),
      (t[1] = d.app_id),
      (t[2] = r),
      (t[3] = p))
    : (p = t[3]);
  let m = L(Ke, p) ?? d.link_id ?? void 0,
    h;
  t[4] !== n ||
  t[5] !== d.app_id ||
  t[6] !== d.resource_uri ||
  t[7] !== d.tool_name ||
  t[8] !== f ||
  t[9] !== a ||
  t[10] !== m ||
  t[11] !== r
    ? ((h = {
        accountId: n,
        userId: r,
        appId: d.app_id,
        linkId: m,
        toolName: d.tool_name,
        resourceUri: d.resource_uri,
        pluginId: f,
        productContext: a,
      }),
      (t[4] = n),
      (t[5] = d.app_id),
      (t[6] = d.resource_uri),
      (t[7] = d.tool_name),
      (t[8] = f),
      (t[9] = a),
      (t[10] = m),
      (t[11] = r),
      (t[12] = h))
    : (h = t[12]);
  let g = h,
    { data: v, error: y, isFetching: x, refetch: S } = L(mt, g);
  if (v == null) {
    let e;
    t[13] === g ? (e = t[14]) : ((e = JSON.stringify(g)), (t[13] = g), (t[14] = e));
    let n;
    t[15] === S
      ? (n = t[16])
      : ((n = () => {
          S();
        }),
        (t[15] = S),
        (t[16] = n));
    let r;
    return (
      t[17] !== s || t[18] !== y || t[19] !== x || t[20] !== e || t[21] !== n
        ? ((r = (0, Q.jsx)(s, { error: y, hostId: b, isLoading: x, onRetry: n }, e)),
          (t[17] = s),
          (t[18] = y),
          (t[19] = x),
          (t[20] = e),
          (t[21] = n),
          (t[22] = r))
        : (r = t[22]),
      r
    );
  }
  let C = Be,
    w = v.mcpAppId,
    T;
  t[23] !== v.conversationId ||
  t[24] !== c.value.pathname ||
  t[25] !== c.value.routeTemplate ||
  t[26] !== c.value.search
    ? ((T = {
        pathname: c.value.pathname,
        routeTemplate: c.value.routeTemplate,
        search: c.value.search,
        routeKind: `chatgpt-thread`,
        conversationId: v.conversationId,
      }),
      (t[23] = v.conversationId),
      (t[24] = c.value.pathname),
      (t[25] = c.value.routeTemplate),
      (t[26] = c.value.search),
      (t[27] = T))
    : (T = t[27]);
  let E = Me,
    D = Qe,
    O;
  t[28] === v.conversationId
    ? (O = t[29])
    : ((O = ne(v.conversationId)), (t[28] = v.conversationId), (t[29] = O));
  let k = v.result.widget.name || d.title,
    A;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = [{ type: `text`, text: `The user is viewing this app.` }]), (t[30] = A))
    : (A = t[30]);
  let j = u == null ? `/` : _(u),
    M;
  t[31] !== d.app_id || t[32] !== d.resource_uri || t[33] !== d.tool_name || t[34] !== f || t[35] !== j
    ? ((M = {
        app_id: d.app_id,
        plugin_id: f,
        tool_name: d.tool_name,
        resource_uri: d.resource_uri,
        path: j,
      }),
      (t[31] = d.app_id),
      (t[32] = d.resource_uri),
      (t[33] = d.tool_name),
      (t[34] = f),
      (t[35] = j),
      (t[36] = M))
    : (M = t[36]);
  let N;
  t[37] !== d.app_id || t[38] !== k || t[39] !== A || t[40] !== M
    ? ((N = {
        id: d.app_id,
        kind: `context`,
        untrusted: !0,
        server: `codex_apps`,
        sourceName: k,
        content: A,
        structuredContent: M,
      }),
      (t[37] = d.app_id),
      (t[38] = k),
      (t[39] = A),
      (t[40] = M),
      (t[41] = N))
    : (N = t[41]);
  let P;
  t[42] !== v.historyRequestIdentity || t[43] !== v.recoveredConversationId || t[44] !== g || t[45] !== c
    ? ((P = (e) => {
        (c.set(re, e, v.historyRequestIdentity), lt(c, g, e, v.recoveredConversationId));
      }),
      (t[42] = v.historyRequestIdentity),
      (t[43] = v.recoveredConversationId),
      (t[44] = g),
      (t[45] = c),
      (t[46] = P))
    : (P = t[46]);
  let F = v.result.widget.name || d.title,
    I;
  t[47] !== i.remotePluginId || t[48] !== d.app_id
    ? ((I = { hostId: b, server: d.app_id, connectorId: d.app_id, pluginId: i.remotePluginId }),
      (t[47] = i.remotePluginId),
      (t[48] = d.app_id),
      (t[49] = I))
    : (I = t[49]);
  let R;
  t[50] !== v.conversationId ||
  t[51] !== v.mcpAppId ||
  t[52] !== v.result ||
  t[53] !== d.app_id ||
  t[54] !== f
    ? ((R = (0, Q.jsx)(it, {
        appId: d.app_id,
        conversationId: v.conversationId,
        pluginId: f,
        mcpAppId: v.mcpAppId,
        result: v.result,
      })),
      (t[50] = v.conversationId),
      (t[51] = v.mcpAppId),
      (t[52] = v.result),
      (t[53] = d.app_id),
      (t[54] = f),
      (t[55] = R))
    : (R = t[55]);
  let z;
  t[56] !== d.title || t[57] !== F || t[58] !== I || t[59] !== R
    ? ((z = (0, Q.jsx)(rt, { title: F, nativeTitle: d.title, source: I, children: R })),
      (t[56] = d.title),
      (t[57] = F),
      (t[58] = I),
      (t[59] = R),
      (t[60] = z))
    : (z = t[60]);
  let B;
  t[61] !== d.title || t[62] !== N || t[63] !== P || t[64] !== z
    ? ((B = { documentTitle: d.title, mcpAppContext: N, onServerThreadIdChange: P, fullscreenContent: z }),
      (t[61] = d.title),
      (t[62] = N),
      (t[63] = P),
      (t[64] = z),
      (t[65] = B))
    : (B = t[65]);
  let V;
  t[66] !== D || t[67] !== B || t[68] !== O
    ? ((V = (0, Q.jsx)(D, {
        conversationId: O,
        isTemporaryChat: !1,
        sharedConversationId: null,
        workspace: B,
      })),
      (t[66] = D),
      (t[67] = B),
      (t[68] = O),
      (t[69] = V))
    : (V = t[69]);
  let H;
  t[70] !== E || t[71] !== V
    ? ((H = (0, Q.jsx)(E, { children: V })), (t[70] = E), (t[71] = V), (t[72] = H))
    : (H = t[72]);
  let U;
  return (
    t[73] !== C || t[74] !== v.mcpAppId || t[75] !== H || t[76] !== T
      ? ((U = (0, Q.jsx)(C, { route: T, children: H }, w)),
        (t[73] = C),
        (t[74] = v.mcpAppId),
        (t[75] = H),
        (t[76] = T),
        (t[77] = U))
      : (U = t[77]),
    U
  );
}
var Z, Q;
function yt() {
  return (yt = e(() => {
    ((Z = A()),
      c(),
      E(),
      m(),
      Ee(),
      Ie(),
      we(),
      nt(),
      st(),
      $e(),
      qe(),
      Se(),
      De(),
      V(),
      he(),
      K(),
      Ze(),
      G(),
      ge(),
      ft(),
      ht(),
      (Q = N()));
  }))();
}
function bt() {
  let e = (0, Ct.c)(3),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = { path: de, caseSensitive: !0 }), (e[0] = t))
    : (t = e[0]);
  let n = d(t) == null ? `chatgpt` : `codex`,
    r;
  return (
    e[1] === n
      ? (r = e[2])
      : ((r = (0, $.jsx)(tt, { hostedView: (0, $.jsx)(gt, { productContext: n, UnavailableState: xt }) })),
        (e[1] = n),
        (e[2] = r)),
    r
  );
}
function xt(e) {
  let r = (0, Ct.c)(24),
    { error: i, hostId: s, isLoading: c, onRetry: l } = e,
    u = o(n),
    [d, f] = (0, wt.useState)(null),
    p = i instanceof Xe ? i : null,
    m;
  r[0] === p?.connectorId
    ? (m = r[1])
    : ((m = p?.connectorId?.trim() || null), (r[0] = p?.connectorId), (r[1] = m));
  let h = m,
    g = p?.reauthLinkId,
    _;
  r[2] === d ? (_ = r[3]) : ((_ = () => () => d?.abort()), (r[2] = d), (r[3] = _));
  let v;
  (r[4] !== d || r[5] !== h || r[6] !== s || r[7] !== g
    ? ((v = [d, h, s, g]), (r[4] = d), (r[5] = h), (r[6] = s), (r[7] = g), (r[8] = v))
    : (v = r[8]),
    (0, wt.useEffect)(_, v));
  let y;
  r[9] === h
    ? (y = r[10])
    : ((y =
        h == null
          ? void 0
          : (0, $.jsx)(a, {
              id: `openaiMcpCapabilities.unavailable.connectDescription`,
              defaultMessage: `Connect this app to open it`,
              description: `Recovery guidance when a hosted MCP app needs a connection before it can open`,
            })),
      (r[9] = h),
      (r[10] = y));
  let b;
  r[11] !== d || r[12] !== h || r[13] !== s || r[14] !== c || r[15] !== l || r[16] !== g || r[17] !== u
    ? ((b =
        h == null
          ? void 0
          : (0, $.jsx)(t, {
              color: `secondary`,
              disabled: d != null || c,
              loading: d != null || c,
              onClick: () => {
                let e = new AbortController();
                (f(e),
                  ue(u, {
                    connectorId: h,
                    hostId: s,
                    oauthPresentation: `popup`,
                    payload:
                      g == null
                        ? void 0
                        : { requireAuth: !0, authReason: `reauthentication_required`, reauthLinkId: g },
                    signal: e.signal,
                  })
                    .then((t) => {
                      let { didConnect: n } = t;
                      n && !e.signal.aborted && l();
                    })
                    .catch(St)
                    .finally(() => f(null)));
              },
              children: (0, $.jsx)(a, {
                id: `openaiMcpCapabilities.unavailable.connect`,
                defaultMessage: `Connect`,
                description: `Button that opens the existing connection flow for a hosted MCP app`,
              }),
            })),
      (r[11] = d),
      (r[12] = h),
      (r[13] = s),
      (r[14] = c),
      (r[15] = l),
      (r[16] = g),
      (r[17] = u),
      (r[18] = b))
    : (b = r[18]);
  let x;
  return (
    r[19] !== c || r[20] !== l || r[21] !== y || r[22] !== b
      ? ((x = (0, $.jsx)(q, { isLoading: c, onRetry: l, description: y, actions: b })),
        (r[19] = c),
        (r[20] = l),
        (r[21] = y),
        (r[22] = b),
        (r[23] = x))
      : (x = r[23]),
    x
  );
}
function St() {}
var Ct, wt, $;
function Tt() {
  return (Tt = e(() => {
    ((Ct = A()), c(), (wt = I()), x(), m(), ke(), oe(), O(), $e(), et(), j(), Ye(), yt(), ($ = N()));
  }))();
}
Tt();
export { bt as ChatGptMcpExtensionGlobalViewPage };
//# sourceMappingURL=chatgpt-mcp-extension-view-page-15c7e9e021ff.js.map
