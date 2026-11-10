import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Pxt as r,
  VDt as i,
  _xt as a,
  axt as o,
  hot as s,
  jDt as c,
  lot as l,
  nst as u,
  tI as d,
  tst as f,
  vzt as p,
  wot as m,
  yzt as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  $ur as g,
  JPn as _,
  Kur as v,
  Qur as y,
  U0n as ee,
  V0n as te,
  W0n as b,
  Wur as ne,
  Yur as re,
  ZPn as x,
  Zur as S,
  aDr as C,
  adr as ie,
  akn as w,
  bdr as ae,
  eDr as T,
  gkn as E,
  hOr as D,
  hkn as O,
  idr as k,
  mkn as A,
  nDr as j,
  oFr as M,
  okn as N,
  qur as oe,
  xdr as P,
  ydr as se,
} from "./app-initial-5851df3f6cb1.js";
import { i as ce, r as F } from "./app-connect-queries-d683cc7b9c3b.js";
import { i as le, n as ue, r as I, t as L } from "./availability-7c47246e0e1c.js";
import { o as de, s as fe } from "./microsoft-oauth-bundle-e77977413c17.js";
function R(e) {
  let r = (0, ye.c)(71),
    a;
  r[0] === e ? (a = r[1]) : ((a = e === void 0 ? {} : e), (r[0] = e), (r[1] = a));
  let {
      hostId: c,
      marketplaceAnalytics: l,
      oauthReferrer: d,
      onConnectStarted: f,
      onConnectFailed: p,
      onExternalConnectStarted: m,
    } = a,
    h = (0, z.useContext)(o),
    _ = n(t),
    b = i(),
    x = u(),
    w = c ?? `local`,
    T = j(`2761268526`),
    E = C(),
    {
      clearPendingAppConnect: D,
      getPendingAppConnectForApp: k,
      isAppConnectPending: M,
      markAppConnectOAuthPending: P,
    } = N(),
    [F, I] = (0, z.useState)(null),
    [L, de] = (0, z.useState)(),
    [R, B] = (0, z.useState)(),
    [V, H] = (0, z.useState)(null),
    U;
  r[2] !== k || r[3] !== w
    ? ((U = (e, t) => k(e, w, t == null || (t.kind === `apps-tab` && t.reauthLinkId == null) ? _e : t)),
      (r[2] = k),
      (r[3] = w),
      (r[4] = U))
    : (U = r[4]);
  let W = U,
    be = he,
    G,
    K,
    q,
    J,
    Y,
    X,
    Z;
  if (
    r[5] !== D ||
    r[6] !== F?.id ||
    r[7] !== R ||
    r[8] !== k ||
    r[9] !== W ||
    r[10] !== w ||
    r[11] !== b ||
    r[12] !== M ||
    r[13] !== T ||
    r[14] !== h?.location ||
    r[15] !== P ||
    r[16] !== l ||
    r[17] !== d ||
    r[18] !== p ||
    r[19] !== f ||
    r[20] !== m ||
    r[21] !== V ||
    r[22] !== x ||
    r[23] !== _ ||
    r[24] !== E
  ) {
    J = async (e, t) => {
      let {
          appConnectOptions: n,
          marketplaceAnalytics: r,
          addAccountAttempt: i,
          forceInApp: a,
          isAddingAccount: o,
          reauthLinkId: c,
          googleOAuthBundlePrepared: u,
          microsoftOAuthBundlePrepared: h,
          mustShowInstallationInterstitial: S,
        } = t === void 0 ? {} : t,
        C = a !== void 0 && a,
        D = o !== void 0 && o,
        O = u !== void 0 && u,
        k = h !== void 0 && h;
      if (V != null) return;
      let A = c == null && (!e.isAccessible || D) ? W(e.id) : null,
        j = se(
          e.id,
          n ??
            (c == null
              ? A?.appConnectOptions
              : W(e.id, { kind: `apps-tab`, reauthLinkId: c })?.appConnectOptions),
        ),
        M = d == null ? j : { connectorId: e.id, ...j, oauthReferrer: j?.oauthReferrer ?? d },
        N = A?.marketplaceAnalytics ?? r ?? (typeof l == `function` ? l() : l),
        P = f?.(e, N) ?? N;
      if (!T && !C && A == null) {
        (be(y(e, M)), m?.(e));
        return;
      }
      ce(x, e.id, M);
      let F = te({ connectorId: e.id, statsigClient: E }),
        L = ee(e.id, F) != null,
        R = fe({ connectorId: e.id, statsigClient: E });
      if (!C && !O && !k && A == null && e.isAccessible !== !0 && (L || R)) {
        H(e.id);
        let t = { scope: _, appId: e.id, browserAccountId: void 0, hostId: w, queryClient: x };
        await (L ? le({ ...t, connectors: F }) : ue(t))
          .catch((t) => {
            throw (p?.(e, P, `request_failed`), t);
          })
          .finally(() => {
            H(null);
          });
      }
      if (A != null || (S === !1 && (!C || D) && (!e.isAccessible || D) && (D || (!L && !R)))) {
        H(e.id);
        let t = await x
          .fetchQuery(v(e.id, { productSku: M?.productSku }))
          .catch(me)
          .then(async (t) =>
            t != null &&
            t.status !== `DISABLED_BY_ADMIN` &&
            ae(e.id, M) == null &&
            ne(t, M?.authTypeOverride) &&
            re(t, M?.authTypeOverride) === `OAUTH`
              ? ie({
                  scope: _,
                  allowBrowserFallback: !1,
                  app: e,
                  appConnectOptions: M,
                  connector: t,
                  installAttemptId: P?.installAttemptId,
                  requestedCompanionConnectorIds: A?.requestedCompanionConnectorIds,
                  onOAuthStarted: (n, r) => {
                    K({
                      app: e,
                      oauthFlowCorrelationId: r?.oauthFlowCorrelationId,
                      marketplaceAnalytics: P,
                      pastedLinkProductExperience: A?.pastedLinkProductExperience,
                      pluginInstallOAuthState:
                        A?.pluginInstallOAuthState ??
                        (A?.resumeTarget.kind === `plugin-install` ? A.oauthState : void 0),
                      previousOAuthState: A?.oauthState,
                      requestedCompanionConnectorIds: A?.requestedCompanionConnectorIds,
                      resumeTarget: A?.resumeTarget ?? { kind: `apps-tab`, addAccountAttempt: i },
                      isGithubConnector:
                        e.id === `connector_76869538009648d5b282a4bb21c3d157` ||
                        t.template_id === `templated_apps_GitHubEnterprise` ||
                        t.service === `github`,
                      redirectUrl: n,
                      returnTo: M?.redirectAfter ?? A?.returnTo,
                      appConnectOptions: M,
                    });
                  },
                  openInBrowser: pe,
                  queryClient: x,
                })
              : t == null
                ? null
                : { kind: `requires-connection-form` },
          )
          .finally(() => {
            H(null);
          });
        if (t?.kind === `oauth-started`) {
          _.get(s).info(g({ intl: b }));
          return;
        }
        if (
          ((t == null || t.kind === `failed`) && p?.(e, P, t == null ? `request_failed` : `connect_failed`),
          A != null && t?.kind !== `requires-connection-form` && t?.kind !== `requires-mfa`)
        ) {
          _.get(s).danger(oe(b), { errorAnalytics: { toastId: `useAppConnectFlow.handleConnectApp` } });
          return;
        }
      }
      (B(P), de(M), I(e));
    };
    let e;
    (r[32] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = () => {
          (I(null), de(void 0), B(void 0));
        }),
        (r[32] = e))
      : (e = r[32]),
      (G = e));
    let t;
    (r[33] !== F?.id || r[34] !== W || r[35] !== w || r[36] !== M || r[37] !== V
      ? ((t = (e, t) => V === e || F?.id === e || M(e, t ?? _e, w) || W(e, t) != null),
        (r[33] = F?.id),
        (r[34] = W),
        (r[35] = w),
        (r[36] = M),
        (r[37] = V),
        (r[38] = t))
      : (t = r[38]),
      (X = t));
    let n;
    (r[39] !== D || r[40] !== W || r[41] !== w || r[42] !== b || r[43] !== _
      ? ((n = (e, t) => {
          let n = W(e, t);
          if (n == null) return;
          let r =
            n.pluginInstallOAuthState ?? (n.resumeTarget.kind === `plugin-install` ? n.oauthState : void 0);
          (r != null &&
            (O(_, r)
              ? _.get(s).danger(S(b), { errorAnalytics: { toastId: `useAppConnectFlow.handleAppConnected` } })
              : A(_, r)),
            D({ oauthState: n.oauthState, hostId: w }));
        }),
        (r[39] = D),
        (r[40] = W),
        (r[41] = w),
        (r[42] = b),
        (r[43] = _),
        (r[44] = n))
      : (n = r[44]),
      (q = n));
    let i;
    (r[45] !== D || r[46] !== W || r[47] !== w || r[48] !== b || r[49] !== m || r[50] !== _
      ? ((i = (e, t) => {
          let n = W(e.id, t);
          if (n != null) {
            let e =
              n.pluginInstallOAuthState ?? (n.resumeTarget.kind === `plugin-install` ? n.oauthState : void 0);
            (e != null &&
              O(_, e) &&
              _.get(s).danger(S(b), {
                errorAnalytics: { toastId: `useAppConnectFlow.handleExternalConnectStarted` },
              }),
              D({ oauthState: n.oauthState, hostId: w }));
          }
          m?.(e);
        }),
        (r[45] = D),
        (r[46] = W),
        (r[47] = w),
        (r[48] = b),
        (r[49] = m),
        (r[50] = _),
        (r[51] = i))
      : (i = r[51]),
      (Y = i));
    let a;
    (r[52] !== k || r[53] !== w || r[54] !== M
      ? ((a = (e) => M(e, ge, w) || k(e, w, ge) != null), (r[52] = k), (r[53] = w), (r[54] = M), (r[55] = a))
      : (a = r[55]),
      (Z = a),
      (K = (e) => {
        let {
            app: t,
            appConnectOptions: n,
            isGithubConnector: r,
            marketplaceAnalytics: i,
            pastedLinkProductExperience: a,
            pluginInstallOAuthState: o,
            previousOAuthState: s,
            oauthFlowCorrelationId: c,
            requestedCompanionConnectorIds: u,
            redirectUrl: d,
            returnTo: f,
            resumeTarget: p,
          } = e,
          m = i ?? R ?? (typeof l == `function` ? l() : l),
          g = s == null && (p == null || p.kind === `apps-tab`) ? W(t.id, p) : null,
          _ = s ?? g?.oauthState,
          v = g?.resumeTarget ?? p,
          y = P({
            app: t,
            oauthFlowCorrelationId: c,
            appConnectOptions: n ?? g?.appConnectOptions,
            hostId: w,
            isGithubConnector: r,
            marketplaceAnalytics: g?.marketplaceAnalytics ?? m,
            pastedLinkProductExperience: a ?? g?.pastedLinkProductExperience,
            pluginInstallOAuthState:
              o ??
              g?.pluginInstallOAuthState ??
              (g?.resumeTarget.kind === `plugin-install` ? g.oauthState : void 0),
            requestedCompanionConnectorIds: u ?? g?.requestedCompanionConnectorIds,
            redirectUrl: d,
            returnTo:
              v?.kind === `apps-tab` && v.reauthLinkId != null && v.addAccountAttempt != null
                ? (g?.returnTo ?? ve(h?.location))
                : (f ?? g?.returnTo ?? ve(h?.location)),
            resumeTarget: v,
          });
        return (y != null && _ != null && _ !== y && D({ oauthState: _, hostId: w }), y);
      }),
      (r[5] = D),
      (r[6] = F?.id),
      (r[7] = R),
      (r[8] = k),
      (r[9] = W),
      (r[10] = w),
      (r[11] = b),
      (r[12] = M),
      (r[13] = T),
      (r[14] = h?.location),
      (r[15] = P),
      (r[16] = l),
      (r[17] = d),
      (r[18] = p),
      (r[19] = f),
      (r[20] = m),
      (r[21] = V),
      (r[22] = x),
      (r[23] = _),
      (r[24] = E),
      (r[25] = G),
      (r[26] = K),
      (r[27] = q),
      (r[28] = J),
      (r[29] = Y),
      (r[30] = X),
      (r[31] = Z));
  } else ((G = r[25]), (K = r[26]), (q = r[27]), (J = r[28]), (Y = r[29]), (X = r[30]), (Z = r[31]));
  let Q;
  r[56] !== D || r[57] !== w
    ? ((Q = (e) => {
        D({ ...e, hostId: w });
      }),
      (r[56] = D),
      (r[57] = w),
      (r[58] = Q))
    : (Q = r[58]);
  let $;
  return (
    r[59] !== G ||
    r[60] !== F ||
    r[61] !== R ||
    r[62] !== L ||
    r[63] !== K ||
    r[64] !== q ||
    r[65] !== J ||
    r[66] !== Y ||
    r[67] !== X ||
    r[68] !== Z ||
    r[69] !== Q
      ? (($ = {
          connectingApp: F,
          connectingOptions: L,
          connectingMarketplaceAnalytics: R,
          clearConnectingApp: G,
          clearPendingAppConnect: Q,
          handleAppConnected: q,
          handleAppConnectOAuthStarted: K,
          handleConnectApp: J,
          handleExternalConnectStarted: Y,
          handleOpenAppUrl: be,
          isAppConnectPending: X,
          isAppReauthPending: Z,
        }),
        (r[59] = G),
        (r[60] = F),
        (r[61] = R),
        (r[62] = L),
        (r[63] = K),
        (r[64] = q),
        (r[65] = J),
        (r[66] = Y),
        (r[67] = X),
        (r[68] = Z),
        (r[69] = Q),
        (r[70] = $))
      : ($ = r[70]),
    $
  );
}
function pe(e) {
  x({ disposition: void 0, href: e, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
}
function me() {
  return null;
}
function he(e) {
  let t = e?.trim();
  t && x({ href: t, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
}
function ge(e) {
  return e.kind === `apps-tab` && e.reauthLinkId != null;
}
function _e(e) {
  return (
    (e.kind === `apps-tab` && e.reauthLinkId == null) ||
    (e.kind === `plugin-install` &&
      e.origin == null &&
      e.pendingElicitationReply == null &&
      e.installOptions?.pendingElicitationReply == null)
  );
}
function ve(e) {
  return e == null
    ? `${window.location.pathname}${window.location.search}${window.location.hash}`
    : `${e.pathname}${e.search}${e.hash}`;
}
var ye, z;
function B() {
  return (B = e(() => {
    ((ye = p()),
      f(),
      r(),
      (z = h()),
      c(),
      a(),
      k(),
      P(),
      w(),
      F(),
      d(),
      b(),
      I(),
      de(),
      L(),
      D(),
      _(),
      l(),
      E(),
      m(),
      M(),
      T());
  }))();
}
export { R as n, B as t };
//# sourceMappingURL=use-app-connect-flow-7088479fda99.js.map
