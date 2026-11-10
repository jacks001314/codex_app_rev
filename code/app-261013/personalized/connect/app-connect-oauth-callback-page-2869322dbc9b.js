const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./oauth-resume-4e0f432f8658.js",
      "./oauth-resume-a80cf97b183d.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./rate-limit-523c452e35b8.js",
      "./shop-this-image-resume-4791fc739bcb.js",
      "./chatgpt-ecosystem-widget-86361a1e1747.js",
      "./mcp-sandbox-rpc-ca8003ff80ff.js",
      "./chatgpt_finance-6f5d98dfb009.js",
      "./widget-ea192a210472.js",
      "./mcp-app-host-styles-55af4a679ef7.js",
      "./sandbox-origin-6479c97e7d45.js",
      "./resource-5df84eaadd7b.js",
      "./mcp-app-follow-up-message-6745dc3197d3.js",
      "./widget-follow-up-request-a0e70ac59eed.js",
      "./mcp-app-follow-up-confirmation-dialog-4d62a209cf2f.js",
      "./mcp-sandbox-element-10552eb147d8.js",
      "./observe-layout-motion-cdda8b68cb96.js",
      "./message-submission-43662f2770ed.js",
      "./new-thread-toast-d8f4508f3402.js",
      "./back-forward-navigation-buttons-93aa83d145f3.js",
      "./viewer-header-6e3f79044bac.js",
      "./inline-height-de22080375ee.js",
      "./widget-e4bfe9e3f201.css",
      "./frame-container-41423da37713.js",
      "./open-button-966628744c22.js",
      "./chatgpt-ecosystem-widget-resource-9c3e6a125c8e.js",
      "./chatgpt-ecosystem-widget-launch-2a2c56ed75ca.js",
      "./plugin-connected-account-links-8dea8c830000.js",
      "./shop-this-image-input-e831e66662e6.js",
      "./app-connection-actions-243726f80a6a.js",
      "./app-connection-actions-51f046ccebce.js",
      "./builder-analytics-f0ccbf8827ee.js",
      "./workspace-agent-apps-6b85a870e5a0.js",
      "./apps-query-410f7e452f43.js",
      "./query-b1ceced7057f.js",
      "./state-4fc32571d1d6.js",
      "./continuation-d556d1c22ccb.js",
      "./continuation-df76213cae0c.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CPt as t,
  Cot as n,
  Ext as r,
  IDt as i,
  Iot as a,
  Ixt as o,
  Lot as s,
  Lvt as c,
  Pxt as l,
  SPt as u,
  VDt as d,
  _xt as f,
  cSt as p,
  fPt as m,
  hot as h,
  i3 as g,
  jDt as _,
  lot as v,
  nst as ee,
  pPt as y,
  r3 as te,
  rst as b,
  tI as x,
  tst as S,
  vxt as ne,
  vzt as C,
  wot as w,
  wxt as re,
  xMt as T,
  yzt as E,
  zxt as ie,
} from "./app-shared-bbfeca5e5737.js";
import {
  $1n as ae,
  Adn as oe,
  Dsr as D,
  FEr as O,
  GMr as k,
  Idn as se,
  Isr as ce,
  Ldn as A,
  Ocr as le,
  PEr as ue,
  Tdn as de,
  Tsr as fe,
  XMr as j,
  Ycr as pe,
  Zur as me,
  _ut as M,
  a0n as N,
  akn as P,
  alr as he,
  ddr as ge,
  dkn as _e,
  fOr as F,
  fT as ve,
  fdr as ye,
  gOr as be,
  gkn as I,
  gut as xe,
  hOr as L,
  hT as Se,
  idr as R,
  ikn as z,
  kcr as Ce,
  mT as we,
  nT as B,
  nft as V,
  oFr as H,
  okn as Te,
  pT as Ee,
  pkn as U,
  rT as De,
  rkn as Oe,
  skn as ke,
  tNr as W,
  tft as Ae,
  udr as je,
  ukn as Me,
  vut as Ne,
  wcr as Pe,
  xdr as G,
} from "./app-initial-5851df3f6cb1.js";
import { n as Fe, t as Ie } from "./app-connect-modal-fb7e1b0124f4.js";
import { t as Le } from "./url-15a20d86aee5.js";
import { n as Re, t as K } from "./app-connect-link-navigation-c4d344c7d84d.js";
import { n as q, t as J } from "./app-connect-modal-by-id-a3e486d4397f.js";
import { n as ze, t as Y } from "./use-app-connect-flow-7088479fda99.js";
import { n as X, t as Be } from "./plugin-connector-setup-a797a3cdb718.js";
function Ve(e) {
  let t = (0, He.c)(32),
    { pending: i } = e,
    a = o(n),
    s = r(),
    c;
  t[0] === i.hostId ? (c = t[1]) : ((c = { hostId: i.hostId }), (t[0] = i.hostId), (t[1] = c));
  let { clearPendingAppConnect: l, handleAppConnectOAuthStarted: u } = ze(c),
    d = i.pluginInstallOAuthState ?? (i.resumeTarget.kind === `plugin-install` ? i.oauthState : void 0),
    f = i.marketplaceAnalytics?.installAttemptId,
    p;
  t[2] !== i.accountId || t[3] !== a
    ? ((p = async () => i.accountId === a.get(F)), (t[2] = i.accountId), (t[3] = a), (t[4] = p))
    : (p = t[4]);
  let m;
  t[5] !== i.resumeTarget || t[6] !== i.returnTo
    ? ((m = () => ({ resumeTarget: i.resumeTarget, returnTo: i.returnTo })),
      (t[5] = i.resumeTarget),
      (t[6] = i.returnTo),
      (t[7] = m))
    : (m = t[7]);
  let h;
  t[8] !== u ||
  t[9] !== i.appConnectOptions ||
  t[10] !== i.marketplaceAnalytics ||
  t[11] !== i.oauthState ||
  t[12] !== i.pastedLinkProductExperience ||
  t[13] !== i.returnTo ||
  t[14] !== d
    ? ((h = (e) => {
        u({
          ...e,
          appConnectOptions: i.appConnectOptions,
          marketplaceAnalytics: i.marketplaceAnalytics,
          pastedLinkProductExperience: i.pastedLinkProductExperience,
          pluginInstallOAuthState: d,
          previousOAuthState: i.oauthState,
          returnTo: i.returnTo,
        });
      }),
      (t[8] = u),
      (t[9] = i.appConnectOptions),
      (t[10] = i.marketplaceAnalytics),
      (t[11] = i.oauthState),
      (t[12] = i.pastedLinkProductExperience),
      (t[13] = i.returnTo),
      (t[14] = d),
      (t[15] = h))
    : (h = t[15]);
  let g;
  t[16] !== l || t[17] !== s || t[18] !== i || t[19] !== d || t[20] !== a
    ? ((g = (e) => {
        e ||
          (d == null ? Promise.resolve() : U(a, d, a.queryClient))
            .finally(() => {
              let e = ge(i, a.get(j));
              if ((l({ oauthState: i.oauthState }), e != null)) {
                je(e, { kind: `cancelled` }, { accountId: a.get(F), userId: a.get(j) });
                return;
              }
              s(i.returnTo, {
                replace: !0,
                state:
                  i.resumeTarget.kind === `return-to-location-state` ? i.resumeTarget.failureState : void 0,
              });
            })
            .catch(Z);
      }),
      (t[16] = l),
      (t[17] = s),
      (t[18] = i),
      (t[19] = d),
      (t[20] = a),
      (t[21] = g))
    : (g = t[21]);
  let _;
  return (
    t[22] !== i.appConnectOptions ||
    t[23] !== i.appId ||
    t[24] !== i.hostId ||
    t[25] !== i.requestedCompanionConnectorIds ||
    t[26] !== f ||
    t[27] !== p ||
    t[28] !== m ||
    t[29] !== h ||
    t[30] !== g
      ? ((_ = (0, Ue.jsx)(J, {
          connectorId: i.appId,
          hostId: i.hostId,
          appConnectOptions: i.appConnectOptions,
          googleOAuthScopeMismatch: !0,
          requestedCompanionConnectorIds: i.requestedCompanionConnectorIds,
          installAttemptId: f,
          closeOnOAuthStarted: !1,
          beforeConnect: p,
          getOAuthResumeContext: m,
          onOAuthStarted: h,
          onOpenChange: g,
        })),
        (t[22] = i.appConnectOptions),
        (t[23] = i.appId),
        (t[24] = i.hostId),
        (t[25] = i.requestedCompanionConnectorIds),
        (t[26] = f),
        (t[27] = p),
        (t[28] = m),
        (t[29] = h),
        (t[30] = g),
        (t[31] = _))
      : (_ = t[31]),
    _
  );
}
function Z(e) {
  t.error(`Failed to dismiss Google permission recovery`, { safe: {}, sensitive: { error: e } });
}
var He, Ue;
function We() {
  return (We = e(() => {
    ((He = C()), l(), f(), q(), ye(), Y(), L(), W(), I(), w(), u(), (Ue = T()));
  }))();
}
function Ge(e, t, n) {
  let r = z(t);
  if (r == null) return null;
  let i = e.get(k),
    a = e.get(j),
    o = e.get(Ke, null),
    s = JSON.stringify([i, a, r]),
    c = o.get(s);
  if (c != null) return c;
  if (
    n?.resumeTarget.kind !== `return-to-location-state` ||
    n.resumeTarget.successState.orbitContactSetup !== !0 ||
    n.resumeTarget.successState.orbitSlackSetup == null
  )
    return null;
  let l = n.resumeTarget.successState,
    u,
    d = () => !1,
    f = () => e.get(k) === i && e.get(j) === a && d(),
    p = {
      pending: n,
      complete: (t, n) => (
        (d = n),
        (u ??= (async () => {
          let n = await t(),
            r = `failed`;
          try {
            let { resumeSlackOAuth: t } = await m(
              async () => {
                let { resumeSlackOAuth: e } = await import(`./oauth-resume-4e0f432f8658.js`);
                return { resumeSlackOAuth: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
              import.meta.url,
            );
            r = await t(e, l, n, void 0, f);
          } catch {}
          return { result: n, failure: r };
        })()
          .catch((e) => {
            throw (p.release(d), e);
          })
          .finally(() => {
            f() || p.release(d);
          })),
        u
      ),
      release: (e) => {
        d === e && o.get(s) === p && o.delete(s);
      },
    };
  return (o.set(s, p), p);
}
var Ke;
function qe() {
  return (qe = e(() => {
    (l(), P(), W(), w(), y(), (Ke = p(n, (e) => new Map())));
  }))();
}
function Je() {
  let e = (0, ot.c)(119),
    a = o(n),
    l = d(),
    u = r(),
    f = ee(),
    p = re(),
    m;
  e[0] === p ? (m = e[1]) : ((m = Xe(p)), (e[0] = p), (e[1] = m));
  let g = m,
    _ = De(),
    v;
  e[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((v = { name: `chatgpt` }), (e[2] = v)) : (v = e[2]);
  let y = ie(ue, v),
    b = ke(),
    { clearPendingAppConnect: x, getPendingAppConnectForCallbackUrl: S } = Te(),
    { closePluginInstallAppConnectBeforeInstall: C, markRequiredAppStatus: w, session: T } = ce(),
    [E, ae] = (0, Q.useState)(null),
    D;
  e[3] !== g || e[4] !== S
    ? ((D = () => {
        let e = g ? S(g)?.resumeTarget : void 0;
        return e?.kind === `plugin-install` &&
          e.pluginId != null &&
          e.installOptions?.pluginRedirect?.consentAfterOAuth
          ? { kind: `loading` }
          : null;
      }),
      (e[3] = g),
      (e[4] = S),
      (e[5] = D))
    : (D = e[5]);
  let [O, k] = (0, Q.useState)(D),
    [A, le] = (0, Q.useState)(!1);
  O?.kind === `consent` &&
    A &&
    T.kind !== `closed` &&
    (T.kind === `reviewIncentive` || fe(T) == null) &&
    k({ kind: `installing` });
  let de = (0, Q.useRef)(null),
    M = (0, Q.useRef)(!0),
    N,
    P;
  (e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = () => (
        (M.current = !0),
        () => {
          ((M.current = !1), de.current?.(!1));
        }
      )),
      (P = []),
      (e[6] = N),
      (e[7] = P))
    : ((N = e[6]), (P = e[7])),
    (0, Q.useEffect)(N, P));
  let he = (0, Q.useRef)(!1),
    [ve, ye] = (0, Q.useState)(!1),
    [I, xe] = (0, Q.useState)(null),
    L;
  e[8] !== E || e[9] !== f || e[10] !== a
    ? ((L = async () => {
        E?.resumeTarget.kind === `plugin-skill` &&
          E.accountId === a.get(F) &&
          (await _e({ ...E.resumeTarget, enabled: !0 }),
          await f.invalidateQueries({ queryKey: [`plugins`] }));
      }),
      (e[8] = E),
      (e[9] = f),
      (e[10] = a),
      (e[11] = L))
    : (L = e[11]);
  let R;
  e[12] !== E || e[13] !== u
    ? ((R = () => {
        E != null && u(E.resumePath, { replace: !0 });
      }),
      (e[12] = E),
      (e[13] = u),
      (e[14] = R))
    : (R = e[14]);
  let z;
  e[15] === a
    ? (z = e[16])
    : ((z = () => {
        a.get(h).danger(
          (0, $.jsx)(i, {
            id: `browserPluginSettings.skill.saveFailed`,
            defaultMessage: `Couldn't update this skill. Try again`,
            description: `Error saving a plugin skill's enabled state`,
          }),
          { errorAnalytics: { toastId: `browserPluginSettings.skill.saveFailed` } },
        );
      }),
      (e[15] = a),
      (e[16] = z));
  let B;
  e[17] !== L || e[18] !== R || e[19] !== z
    ? ((B = { mutationFn: L, onSuccess: R, onError: z }), (e[17] = L), (e[18] = R), (e[19] = z), (e[20] = B))
    : (B = e[20]);
  let { mutate: V, isPending: H } = s(B),
    U;
  e[21] !== u || e[22] !== a
    ? ((U = async (e) => {
        let { accountId: n, hostId: r, resumePath: i, target: o } = e;
        if (o.installOptions?.pluginRedirect != null && o.pluginId != null) {
          try {
            await Ne(a, u, r, o);
          } catch (e) {
            let n = e;
            (t.error(`Failed to resume plugin redirect installation`, { safe: {}, sensitive: { error: n } }),
              u(Le(o.installOptions.pluginRedirect.search), { replace: !0 }));
          }
          return;
        }
        let s = o.installOptions?.postInstallConnectorSetup,
          c = a.get(j);
        (u(i, { replace: !0, state: { connectorSetup: s } }),
          await oe(a, {
            accountId: n,
            hostId: r,
            target: o,
            onSuccess: async (e, t) => {
              if (o.installOptions?.sourceSectionId === `work_onboarding`) {
                let { onboardingIdentity$: r, recordEnterprisePluginConnection: i } = await it(),
                  s = a.get(r);
                s != null &&
                  s.accountId === n &&
                  s.userId === c &&
                  i(a, s, o.installOptions.sourceAttributionId, { id: e, name: se(t) });
              }
              (s != null && Be({ scope: a, navigate: u, setup: s }),
                await at(a, { resumePath: i, pluginId: e, accountId: n, userId: c }));
            },
          }));
      }),
      (e[21] = u),
      (e[22] = a),
      (e[23] = U))
    : (U = e[23]);
  let W = U,
    Ae = (0, Q.useEffectEvent)(W),
    Me = (0, Q.useRef)(null),
    G;
  e[24] !== w || e[25] !== T.app || e[26] !== T.connectMode || e[27] !== T.kind || e[28] !== T.status
    ? ((G = (e) => {
        T.kind === `connectAppBeforeInstall` &&
          T.connectMode === `automatic` &&
          T.status === `waitingForCallback` &&
          T.app.id === e &&
          w({ appId: e, status: `launching` });
      }),
      (e[24] = w),
      (e[25] = T.app),
      (e[26] = T.connectMode),
      (e[27] = T.kind),
      (e[28] = T.status),
      (e[29] = G))
    : (G = e[29]);
  let Fe = (0, Q.useEffectEvent)(G),
    K;
  e[30] !== C || e[31] !== w || e[32] !== T
    ? ((K = (e) => {
        let { appId: t, status: n } = e,
          r = t ?? (T.kind === `connectAppBeforeInstall` || T.kind === `connectApp` ? T.app.id : null);
        if (r != null) {
          if (n === `pending` && Se(T)) {
            C();
            return;
          }
          w({ appId: r, status: n });
        }
      }),
      (e[30] = C),
      (e[31] = w),
      (e[32] = T),
      (e[33] = K))
    : (K = e[33]);
  let q = (0, Q.useEffectEvent)(K),
    J;
  e[34] !== x || e[35] !== b || e[36] !== S || e[37] !== l || e[38] !== u || e[39] !== f || e[40] !== a
    ? ((J = async (e) => {
        let {
            appId: t,
            appName: n,
            callbackReceivedAtMs: r,
            fullRedirectUrl: o,
            hasCallbackClaim: s,
            shouldShowPendingToast: c,
            shouldShowSuccessToast: d,
          } = e,
          p = et(t);
        c &&
          o != null &&
          o.length > 0 &&
          a
            .get(h)
            .info(
              (0, $.jsx)(i, {
                id: `apps.appConnectOAuthCallbackPage.pending`,
                defaultMessage: `Finishing {connector} setup`,
                description: `Toast shown when an app OAuth callback has returned and Codex is finishing setup`,
                values: {
                  connector:
                    n ??
                    l.formatMessage({
                      id: `apps.appConnectOAuthCallbackPage.fallbackAppName`,
                      defaultMessage: `App`,
                      description: `Fallback app name used in app connect callback pending toasts`,
                    }),
                },
              }),
              { duration: 0, id: p, leading: (0, $.jsx)(te, { className: `icon-xs` }) },
            );
        let m = o ? S(o) : null,
          g = m?.resumeTarget;
        if (
          m != null &&
          o != null &&
          g?.kind === `plugin-install` &&
          g.pluginId != null &&
          g.installOptions?.pluginRedirect?.consentAfterOAuth
        ) {
          let e = g.installOptions.pluginRedirect;
          k({ kind: `loading` });
          let t = new URL(window.location.href);
          for (let e of [`code`, `state`, `oauth_state_id`]) t.searchParams.delete(e);
          window.history.replaceState(null, ``, t.pathname + t.search + t.hash);
          let n = () => M.current && m.accountId != null && m.accountId === a.get(be),
            r = !1;
          try {
            if (n() && !new URL(o).searchParams.has(`error`)) {
              let e = await f.fetchQuery({
                ...a.query.getOptions(Ce, Pe({ hostId: m.hostId, pluginId: g.pluginId })),
                staleTime: 0,
              });
              n() &&
                ((r = await new Promise((t) => {
                  let n = (e) => {
                    ((de.current = null), t(e));
                  };
                  ((de.current = n), k({ kind: `consent`, plugin: pe(e), complete: n }));
                })),
                (r &&= n()));
            }
          } catch {
            M.current &&
              a
                .get(h)
                .danger(
                  l.formatMessage({
                    id: `plugins.redirect.consentUnavailable`,
                    defaultMessage: `Couldn't finish connecting. Open the original link to try again`,
                    description: `Error shown after returning from a plugin provider when ChatGPT cannot load connection consent. Asks the end user to restart from the original third-party link.`,
                  }),
                  { errorAnalytics: { toastId: `plugins.redirect.consentUnavailable` } },
                );
          }
          if (!r)
            return (
              x({ oauthState: m.oauthState }),
              M.current && (k(null), u(Le(e.search), { replace: !0 })),
              { kind: `superseded` }
            );
        }
        let _ = await b({ callbackReceivedAtMs: r, fullRedirectUrl: o ?? ``, hasCallbackClaim: s });
        bb306: switch (_.kind) {
          case `superseded`:
            break bb306;
          case `missing-callback-data`:
            a.get(h).warning(
              (0, $.jsx)(i, {
                id: `apps.appConnectOAuthCallbackPage.missingData`,
                defaultMessage: `Missing OAuth callback data`,
                description: `Toast shown when an app connection OAuth callback is missing the redirect URL`,
              }),
              { id: p },
            );
            break bb306;
          case `request-failed`: {
            if (_.googleOAuthScopeMismatch) break bb306;
            let e = _.reinstallRequired
              ? me(l)
              : (_.message ??
                l.formatMessage({
                  id: `apps.appConnectOAuthCallbackPage.requestFailed`,
                  defaultMessage: `Failed to finish connecting app`,
                  description: `Toast shown when finishing an app connection OAuth callback fails`,
                }));
            a.get(h).danger(e, {
              errorAnalytics: { toastId: `appConnectOauthCallbackPage.runCallbackEvent` },
              id: p,
            });
            break bb306;
          }
          case `success`:
            if (!d) break bb306;
            a.get(h).success(
              (0, $.jsx)(i, {
                id: `apps.appConnectOAuthCallbackPage.success`,
                defaultMessage: `{appName} is now connected`,
                description: `Toast shown when an app connection OAuth callback succeeds`,
                values: { appName: _.appName },
              }),
              { id: p },
            );
        }
        return _;
      }),
      (e[34] = x),
      (e[35] = b),
      (e[36] = S),
      (e[37] = l),
      (e[38] = u),
      (e[39] = f),
      (e[40] = a),
      (e[41] = J))
    : (J = e[41]);
  let ze = (0, Q.useEffectEvent)(J),
    Y;
  e[42] !== y.isLoading ||
  e[43] !== x ||
  e[44] !== g ||
  e[45] !== S ||
  e[46] !== _ ||
  e[47] !== p.state ||
  e[48] !== Fe ||
  e[49] !== q ||
  e[50] !== u ||
  e[51] !== T ||
  e[52] !== Ae ||
  e[53] !== ze ||
  e[54] !== a
    ? ((Y = () => {
        let e = Oe(p.state);
        if (Me.current === g) return;
        Me.current = g;
        let t = g.length > 0 ? S(g) : null,
          n = ge(t, a.get(j)),
          r = n == null && g.length > 0 ? Ge(a, g, t) : null,
          i = r?.pending ?? t,
          o = i?.returnTo ?? e?.returnTo ?? `/skills`,
          s = i?.resumeTarget.kind === `plugin-install`,
          l = Ee(T, i);
        if (i != null && l) {
          (x({ oauthState: i.oauthState }),
            u(o, { replace: !0, state: { initialHostId: i.hostId, initialTab: `plugins` } }));
          return;
        }
        let d = i?.resumeTarget.kind === `service-account`,
          f = $e(i?.resumeTarget),
          m = i?.resumeTarget.kind === `return-to-location-state` ? i.resumeTarget : null,
          h = m?.successState.orbitSlackSetup != null,
          v = () => m?.successState.orbitContactSetup !== !0 || (_() && Me.current === g),
          ee = i?.isGithubConnector === !0 || i?.appId === `connector_76869538009648d5b282a4bb21c3d157`,
          { waitForCallback: y, showSuccessToast: te } = Ze(i?.resumeTarget, ee),
          b = i?.googleOAuthPermissionRecovery != null || y || f,
          C = (e) => {
            if (s || f || !Re(void 0)) {
              if (ne(c, o) != null) {
                u(o, { replace: !0 });
                return;
              }
              switch (i?.resumeTarget.kind) {
                case `plugin-install`:
                  (ee || Fe(i.appId),
                    u(o, { replace: !0, state: { initialHostId: i.hostId, initialTab: `plugins` } }));
                  return;
                case `chatgpt-tool-request`:
                case `chatgpt-pca-beacon`:
                case `service-account`:
                case `plugin-skill`:
                case `connector-auth-elicitation`:
                case `tool-suggestion-elicitation`:
                  u(o, { replace: !0 });
                  return;
                case `mcp-connect-sheet`: {
                  let e = i.resumeTarget.homeSuggestion;
                  u(o, {
                    replace: !0,
                    state:
                      e == null
                        ? void 0
                        : {
                            initialChatGptConversationId: e.conversationId,
                            chatGptProjectId: e.projectId,
                            prefillChatGptSystemHints: e.initialSystemHints ?? void 0,
                          },
                  });
                  return;
                }
                case `return-to-location-state`:
                  return;
                case `apps-tab`:
                case void 0:
                  u(o, {
                    replace: !0,
                    state: {
                      connectAppId: f ? void 0 : i?.appId,
                      connectorSetup: e,
                      initialHostId: i?.hostId,
                      initialTab: `apps`,
                    },
                  });
                  return;
              }
            }
          },
          w = () =>
            ze({
              appId: i?.appId,
              appName: i?.appName,
              callbackReceivedAtMs: e?.callbackReceivedAtMs,
              fullRedirectUrl: g,
              hasCallbackClaim: e?.hasCallbackClaim,
              shouldShowPendingToast: !1,
              shouldShowSuccessToast: te,
            }),
          re = r?.complete(w, v);
        ((re?.then(Ye) ?? w()).then(async (e) => {
          if (r != null && !v()) return e;
          if (e.kind === `superseded`) return (ye(!0), e);
          if ((we(a, i, e), e.kind === `request-failed` && e.googleOAuthScopeMismatch && i != null))
            return (xe(i), e);
          if (e.kind === `success`) {
            if (e.githubRepositoryAccess != null)
              return (
                ae({
                  popupReturn: n,
                  accountId: i?.accountId,
                  appConnectOptions: void 0,
                  appId: e.appId,
                  appName: e.appName,
                  connectorSetup: e.connectorSetup,
                  hostId: i?.hostId ?? `local`,
                  installationUrl: e.githubRepositoryAccess.installationUrl,
                  linkId: e.githubRepositoryAccess.linkId,
                  resumePath: o,
                  resumeTarget: i?.resumeTarget ?? { kind: `apps-tab` },
                }),
                e
              );
            if (n != null) return (je(n, e, { accountId: a.get(F), userId: a.get(j) }), e);
            if (!d)
              for (let t of [e.appId, ...(e.connectedCompanionAppIds ?? [])])
                q({ appId: t, status: `connected` });
          } else if (n != null)
            return (
              je(
                n,
                { kind: `failed`, message: e.kind === `request-failed` ? e.message : void 0 },
                { accountId: a.get(F), userId: a.get(j) },
              ),
              e
            );
          else (s || i == null) && q({ appId: i?.appId, status: `pending` });
          if (m != null) {
            if (m.successState.workspaceAgentConnection != null) {
              let { resumeWorkspaceAgentConnection: t } = await rt(),
                n = await t(
                  a,
                  m.successState,
                  e.kind === `success`,
                  e.kind === `success` ? e.linkId : void 0,
                );
              return (u(o, { replace: !0, state: { workspaceAgentConnectionFailed: !n } }), e);
            }
            if (h) {
              if (!v()) return e;
              let t = re == null ? await Qe(a, m.successState, e, v) : (await re).failure;
              return (
                v() &&
                  (await Promise.resolve(
                    u(o, {
                      replace: !0,
                      state:
                        t != null || m.successState.orbitContactSetup === !0
                          ? { ...m.successState, slackSetupFailure: t ?? void 0 }
                          : {},
                    }),
                  ).finally(() => {
                    r?.release(v);
                  })),
                e
              );
            }
            let t =
              e.kind === `success` &&
              (m.requiredConnectorIds == null || (await tt(a, m.requiredConnectorIds)));
            if (t && m.successState.shopThisImage != null) {
              let { resumeShopThisImage: e } = await nt();
              e(a, m.successState.shopThisImage, i?.accountId, i?.hostId ?? `local`);
            }
            return (u(o, { replace: !0, state: t ? m.successState : m.failureState }), e);
          }
          return (b && (e.kind, C(e.kind === `success` ? e.connectorSetup : void 0)), e);
        }),
          n ?? (b || C()));
      }),
      (e[42] = y.isLoading),
      (e[43] = x),
      (e[44] = g),
      (e[45] = S),
      (e[46] = _),
      (e[47] = p.state),
      (e[48] = Fe),
      (e[49] = q),
      (e[50] = u),
      (e[51] = T),
      (e[52] = Ae),
      (e[53] = ze),
      (e[54] = a),
      (e[55] = Y))
    : (Y = e[55]);
  let X;
  if (
    (e[56] !== y.isLoading ||
    e[57] !== x ||
    e[58] !== g ||
    e[59] !== S ||
    e[60] !== l ||
    e[61] !== _ ||
    e[62] !== p.state ||
    e[63] !== u ||
    e[64] !== T ||
    e[65] !== a
      ? ((X = [y.isLoading, x, g, S, l, _, p.state, u, T, a]),
        (e[56] = y.isLoading),
        (e[57] = x),
        (e[58] = g),
        (e[59] = S),
        (e[60] = l),
        (e[61] = _),
        (e[62] = p.state),
        (e[63] = u),
        (e[64] = T),
        (e[65] = a),
        (e[66] = X))
      : (X = e[66]),
    (0, Q.useEffect)(Y, X),
    I != null)
  ) {
    let t;
    return (e[67] === I ? (t = e[68]) : ((t = (0, $.jsx)(Ve, { pending: I })), (e[67] = I), (e[68] = t)), t);
  }
  if (E != null) {
    let t;
    e[69] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = []), (e[69] = t)) : (t = e[69]);
    let n;
    e[70] !== E.appId || e[71] !== E.appName || e[72] !== E.installationUrl
      ? ((n = {
          appMetadata: null,
          branding: null,
          description: null,
          distributionChannel: null,
          iconAssets: null,
          iconDarkAssets: null,
          id: E.appId,
          installUrl: E.installationUrl,
          isAccessible: !0,
          isEnabled: !0,
          labels: null,
          logoUrl: null,
          logoUrlDark: null,
          name: E.appName,
          pluginDisplayNames: t,
        }),
        (e[70] = E.appId),
        (e[71] = E.appName),
        (e[72] = E.installationUrl),
        (e[73] = n))
      : (n = e[73]);
    let r = n,
      i;
    e[74] !== V ||
    e[75] !== E.accountId ||
    e[76] !== E.appConnectOptions ||
    e[77] !== E.appId ||
    e[78] !== E.connectorSetup ||
    e[79] !== E.hostId ||
    e[80] !== E.linkId ||
    e[81] !== E.popupReturn ||
    e[82] !== E.resumePath ||
    e[83] !== E.resumeTarget ||
    e[84] !== H ||
    e[85] !== w ||
    e[86] !== u ||
    e[87] !== W ||
    e[88] !== a
      ? ((i = async () => {
          if (E.popupReturn != null) {
            je(
              E.popupReturn,
              { kind: `success`, appId: E.appId, linkId: E.linkId },
              { accountId: a.get(F), userId: a.get(j) },
            );
            return;
          }
          let e = $e(E.resumeTarget);
          if (E.resumeTarget.kind === `plugin-skill`) {
            H || V();
            return;
          }
          if (
            (w({ appId: E.appId, status: `connected` }),
            E.resumeTarget.kind === `plugin-install` || e || !Re(E.appConnectOptions))
          ) {
            if (E.resumeTarget.kind === `return-to-location-state`) {
              let e = E.resumeTarget.successState;
              if (e.workspaceAgentConnection != null) {
                if (he.current) return;
                he.current = !0;
                let { resumeWorkspaceAgentConnection: t } = await rt();
                e = { workspaceAgentConnectionFailed: !(await t(a, e, !0, E.linkId)) };
              }
              u(E.resumePath, { replace: !0, state: e });
              return;
            }
            if (ne(c, E.resumePath) != null) {
              u(E.resumePath, { replace: !0 });
              return;
            }
            u(E.resumePath, {
              replace: !0,
              state:
                E.resumeTarget.kind === `plugin-install`
                  ? { initialHostId: E.hostId, initialTab: `plugins` }
                  : {
                      connectAppId: e ? void 0 : E.appId,
                      connectorSetup: E.connectorSetup,
                      initialHostId: E.hostId,
                      initialTab: `apps`,
                    },
            });
          }
        }),
        (e[74] = V),
        (e[75] = E.accountId),
        (e[76] = E.appConnectOptions),
        (e[77] = E.appId),
        (e[78] = E.connectorSetup),
        (e[79] = E.hostId),
        (e[80] = E.linkId),
        (e[81] = E.popupReturn),
        (e[82] = E.resumePath),
        (e[83] = E.resumeTarget),
        (e[84] = H),
        (e[85] = w),
        (e[86] = u),
        (e[87] = W),
        (e[88] = a),
        (e[89] = i))
      : (i = e[89]);
    let o = i,
      s;
    e[90] === o
      ? (s = e[91])
      : ((s = () => {
          o();
        }),
        (e[90] = o),
        (e[91] = s));
    let l;
    e[92] !== E.installationUrl || e[93] !== E.linkId || e[94] !== s
      ? ((l = { installationUrl: E.installationUrl, linkId: E.linkId, onContinue: s }),
        (e[92] = E.installationUrl),
        (e[93] = E.linkId),
        (e[94] = s),
        (e[95] = l))
      : (l = e[95]);
    let d;
    e[96] !== o || e[97] !== E.resumePath || e[98] !== E.resumeTarget || e[99] !== H || e[100] !== u
      ? ((d = (e) => {
          e || (E.resumeTarget.kind === `plugin-skill` ? H || u(E.resumePath, { replace: !0 }) : o());
        }),
        (e[96] = o),
        (e[97] = E.resumePath),
        (e[98] = E.resumeTarget),
        (e[99] = H),
        (e[100] = u),
        (e[101] = d))
      : (d = e[101]);
    let f;
    return (
      e[102] !== r || e[103] !== E.appConnectOptions || e[104] !== E.hostId || e[105] !== l || e[106] !== d
        ? ((f = (0, $.jsx)(Ie, {
            app: r,
            appConnectOptions: E.appConnectOptions,
            hostId: E.hostId,
            githubRepositoryAccess: l,
            onOpenChange: d,
          })),
          (e[102] = r),
          (e[103] = E.appConnectOptions),
          (e[104] = E.hostId),
          (e[105] = l),
          (e[106] = d),
          (e[107] = f))
        : (f = e[107]),
      f
    );
  }
  if (O != null) {
    let t = O.kind === `consent` ? O.plugin : null,
      n,
      r;
    e[108] !== A || e[109] !== O
      ? ((n = async () => {
          O.kind !== `consent` || A || (le(!0), O.complete(!0));
        }),
        (r = () => {
          O.kind === `consent` && !A && O.complete(!1);
        }),
        (e[108] = A),
        (e[109] = O),
        (e[110] = n),
        (e[111] = r))
      : ((n = e[110]), (r = e[111]));
    let i;
    return (
      e[112] !== A || e[113] !== t || e[114] !== n || e[115] !== r
        ? ((i = (0, $.jsx)(Q.Suspense, {
            fallback: null,
            children: (0, $.jsx)(st, { plugin: t, isInstalling: A, onInstall: n, onClose: r }),
          })),
          (e[112] = A),
          (e[113] = t),
          (e[114] = n),
          (e[115] = r),
          (e[116] = i))
        : (i = e[116]),
      i
    );
  }
  if (ve) {
    let t;
    return (
      e[117] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, $.jsx)(`div`, {
            className: `flex h-full w-full items-center justify-center`,
            children: (0, $.jsx)(i, {
              id: `apps.appConnectOAuthCallbackPage.superseded`,
              defaultMessage: `This connection attempt was replaced`,
              description: `Status shown when an older OAuth callback finishes after a replacement attempt started`,
            }),
          })),
          (e[117] = t))
        : (t = e[117]),
      t
    );
  }
  let Z;
  return (
    e[118] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Z = (0, $.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center`,
          children: (0, $.jsx)(te, { className: `icon-sm` }),
        })),
        (e[118] = Z))
      : (Z = e[118]),
    Z
  );
}
function Ye(e) {
  let { result: t } = e;
  return t;
}
function Xe(e) {
  return Oe(e.state)?.fullRedirectUrl?.trim() ?? ``;
}
function Ze(e, t) {
  switch (e?.kind) {
    case `chatgpt-tool-request`:
    case `connector-auth-elicitation`:
    case `tool-suggestion-elicitation`:
      return { waitForCallback: !1, showSuccessToast: !1 };
    case `chatgpt-pca-beacon`:
      return { waitForCallback: !0, showSuccessToast: !1 };
    case `service-account`:
    case void 0:
      return { waitForCallback: !0, showSuccessToast: !0 };
    case `mcp-connect-sheet`:
      return e.homeSuggestion != null || e.widgetModal != null
        ? { waitForCallback: !0, showSuccessToast: !1 }
        : { waitForCallback: t, showSuccessToast: !0 };
    case `return-to-location-state`:
      return { waitForCallback: !0, showSuccessToast: e.successState.orbitSlackSetup == null };
    case `plugin-install`:
      return { waitForCallback: t, showSuccessToast: !1 };
    case `apps-tab`:
    case `plugin-skill`:
      return { waitForCallback: t, showSuccessToast: !0 };
  }
}
async function Qe(e, t, n, r) {
  try {
    let { resumeSlackOAuth: i } = await m(
      async () => {
        let { resumeSlackOAuth: e } = await import(`./oauth-resume-4e0f432f8658.js`);
        return { resumeSlackOAuth: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
      import.meta.url,
    );
    return await i(e, t, n, void 0, r);
  } catch {
    return `failed`;
  }
}
function $e(e) {
  return e?.kind === `apps-tab` && e.reauthLinkId != null && e.addAccountAttempt != null;
}
function et(e) {
  return e == null ? `app-connect-oauth-callback` : `app-connect-oauth-callback-${e}`;
}
async function tt(e, t) {
  return (
    await Promise.all(
      [...new Set(t)].map((t) => e.queryClient.fetchQuery({ ...ae(t), staleTime: 0 }).catch(() => null)),
    )
  ).every((e) => e != null && (e.auth_status == null || e.auth_status === `ACTIVE`));
}
function nt() {
  return m(
    () => import(`./shop-this-image-resume-4791fc739bcb.js`),
    __vite__mapDeps([
      8, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      31, 32,
    ]),
    import.meta.url,
  );
}
function rt() {
  return m(
    () => import(`./app-connection-actions-243726f80a6a.js`),
    __vite__mapDeps([33, 3, 2, 4, 34, 5, 6, 35, 36, 37, 38]),
    import.meta.url,
  );
}
function it() {
  return m(() => import(`./state-4fc32571d1d6.js`), __vite__mapDeps([39, 5, 2, 3, 4, 6]), import.meta.url);
}
async function at(e, n) {
  try {
    let { completePluginSuggestionOAuth: t } = await m(
      async () => {
        let { completePluginSuggestionOAuth: e } = await import(`./continuation-d556d1c22ccb.js`);
        return { completePluginSuggestionOAuth: e };
      },
      __vite__mapDeps([40, 41, 2, 3, 4, 5, 6]),
      import.meta.url,
    );
    await t(e, n);
  } catch {
    t.warning(`plugin_suggestion_continuation_unavailable`, { safe: {}, sensitive: {} });
  }
}
var ot, Q, $, st;
function ct() {
  return (ct = e(() => {
    ((ot = C()),
      xe(),
      a(),
      S(),
      l(),
      b(),
      A(),
      (Q = E()),
      _(),
      f(),
      O(),
      R(),
      K(),
      G(),
      P(),
      ve(),
      ye(),
      x(),
      We(),
      N(),
      L(),
      W(),
      g(),
      v(),
      Ae(),
      qe(),
      D(),
      de(),
      X(),
      Me(),
      le(),
      he(),
      w(),
      Fe(),
      H(),
      u(),
      B(),
      ($ = T()),
      y(),
      (st = V(M)));
  }))();
}
ct();
export { Je as AppConnectOAuthCallbackPage };
//# sourceMappingURL=app-connect-oauth-callback-page-2869322dbc9b.js.map
