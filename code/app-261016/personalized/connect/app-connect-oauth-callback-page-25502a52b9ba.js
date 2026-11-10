const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./oauth-resume-afa4a14e3f7f.js",
      "./oauth-resume-741fc966dd6d.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./rate-limit-666ce943b15f.js",
      "./shop-this-image-resume-3bb0a8872576.js",
      "./chatgpt-ecosystem-widget-f627221f36cd.js",
      "./mcp-sandbox-rpc-251a9f57e376.js",
      "./chatgpt_finance-6f5d98dfb009.js",
      "./widget-99db50d86406.js",
      "./mcp-app-host-styles-feb07f83d29c.js",
      "./sandbox-origin-aa6844200a73.js",
      "./resource-88825e0ab028.js",
      "./mcp-server-status-signals-624da44163ce.js",
      "./mcp-app-follow-up-message-1e1ce85efd65.js",
      "./widget-follow-up-request-6dd4483be247.js",
      "./mcp-app-follow-up-confirmation-dialog-74f4e721bdcc.js",
      "./mcp-sandbox-element-e1c5ac2ed0f6.js",
      "./observe-layout-motion-3c80574e2b68.js",
      "./message-submission-67f579a872bc.js",
      "./back-forward-navigation-buttons-fadf9016822e.js",
      "./viewer-header-e24c04d958ef.js",
      "./inline-height-de22080375ee.js",
      "./widget-e4bfe9e3f201.css",
      "./frame-container-4ff95dd0a333.js",
      "./open-button-590e357513e6.js",
      "./chatgpt-ecosystem-widget-resource-14d53e34c162.js",
      "./chatgpt-ecosystem-widget-launch-53c875439c23.js",
      "./plugin-connected-account-links-e850d089d83d.js",
      "./shop-this-image-input-56157b01b29a.js",
      "./app-connection-actions-12eaa812c848.js",
      "./app-connection-actions-35756e521b8f.js",
      "./builder-analytics-f4d73421cfb8.js",
      "./workspace-agent-apps-b1c524ac4449.js",
      "./apps-query-4cb3d9532588.js",
      "./query-28e51b942d45.js",
      "./state-4d9d953f85fe.js",
      "./continuation-ab32ad3665af.js",
      "./continuation-28eee2bccb5c.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  $yt as i,
  FBt as a,
  LNt as o,
  Lst as s,
  NSt as c,
  OFt as l,
  PBt as u,
  PSt as d,
  Qst as f,
  RFt as p,
  Rst as m,
  TCt as h,
  USt as g,
  VSt as _,
  Vrt as v,
  WI as y,
  XOt as b,
  ZSt as x,
  e6 as S,
  kFt as C,
  nCt as ee,
  okt as te,
  qrt as w,
  sct as T,
  tkt as E,
  vst as D,
  yst as ne,
  zFt as re,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as O,
  Cdt as ie,
  DMn as ae,
  EMn as k,
  Enn as A,
  FMn as j,
  FMr as M,
  HT as oe,
  Ihr as N,
  Jfr as se,
  KBr as ce,
  MMn as P,
  MT as le,
  Mhr as ue,
  N3n as F,
  NMn as de,
  OMn as fe,
  RMn as I,
  RMr as pe,
  Rfr as me,
  Sdt as he,
  TMn as ge,
  Tdr as _e,
  Tnn as ve,
  UT as ye,
  Umr as be,
  VT as xe,
  WT as Se,
  Xmr as L,
  _fr as Ce,
  chr as R,
  dpt as z,
  gdr as B,
  ihr as V,
  jT as we,
  jhr as Te,
  kMn as Ee,
  lhr as De,
  mdr as Oe,
  mnn as H,
  nhr as ke,
  njr as U,
  pfr as Ae,
  rhr as je,
  tjr as Me,
  upt as Ne,
  vfr as Pe,
  vhr as Fe,
  wLr as W,
  xdt as G,
  ynn as Ie,
  z3n as Le,
  zMr as Re,
  zRr as K,
} from "./app-initial-ad16eaadf81f.js";
import { n as q, t as ze } from "./app-connect-modal-763ad0733e86.js";
import { t as Be } from "./url-15a20d86aee5.js";
import { n as Ve, t as J } from "./app-connect-link-navigation-8abfdb199032.js";
import { n as He, t as Y } from "./app-connect-modal-by-id-ee9e7bc8d7c4.js";
import { n as X, t as Z } from "./use-app-connect-flow-7fc070fa8fd7.js";
import { n as Ue, t as We } from "./plugin-connector-setup-b971d5575d59.js";
function Ge(e) {
  let t = (0, qe.c)(32),
    { pending: r } = e,
    i = n(f),
    a = g(),
    o;
  t[0] === r.hostId ? (o = t[1]) : ((o = { hostId: r.hostId }), (t[0] = r.hostId), (t[1] = o));
  let { clearPendingAppConnect: s, handleAppConnectOAuthStarted: c } = X(o),
    l = r.pluginInstallOAuthState ?? (r.resumeTarget.kind === `plugin-install` ? r.oauthState : void 0),
    u = r.marketplaceAnalytics?.installAttemptId,
    d;
  t[2] !== r.accountId || t[3] !== i
    ? ((d = async () => r.accountId === i.get(M)), (t[2] = r.accountId), (t[3] = i), (t[4] = d))
    : (d = t[4]);
  let p;
  t[5] !== r.resumeTarget || t[6] !== r.returnTo
    ? ((p = () => ({ resumeTarget: r.resumeTarget, returnTo: r.returnTo })),
      (t[5] = r.resumeTarget),
      (t[6] = r.returnTo),
      (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] !== c ||
  t[9] !== r.appConnectOptions ||
  t[10] !== r.marketplaceAnalytics ||
  t[11] !== r.oauthState ||
  t[12] !== r.pastedLinkProductExperience ||
  t[13] !== r.returnTo ||
  t[14] !== l
    ? ((m = (e) => {
        c({
          ...e,
          appConnectOptions: r.appConnectOptions,
          marketplaceAnalytics: r.marketplaceAnalytics,
          pastedLinkProductExperience: r.pastedLinkProductExperience,
          pluginInstallOAuthState: l,
          previousOAuthState: r.oauthState,
          returnTo: r.returnTo,
        });
      }),
      (t[8] = c),
      (t[9] = r.appConnectOptions),
      (t[10] = r.marketplaceAnalytics),
      (t[11] = r.oauthState),
      (t[12] = r.pastedLinkProductExperience),
      (t[13] = r.returnTo),
      (t[14] = l),
      (t[15] = m))
    : (m = t[15]);
  let h;
  t[16] !== s || t[17] !== a || t[18] !== r || t[19] !== l || t[20] !== i
    ? ((h = (e) => {
        e ||
          (l == null ? Promise.resolve() : j(i, l, i.queryClient))
            .finally(() => {
              let e = je(r, i.get(O));
              if ((s({ oauthState: r.oauthState }), e != null)) {
                ke(e, { kind: `cancelled` }, { accountId: i.get(M), userId: i.get(O) });
                return;
              }
              a(r.returnTo, {
                replace: !0,
                state:
                  r.resumeTarget.kind === `return-to-location-state` ? r.resumeTarget.failureState : void 0,
              });
            })
            .catch(Ke);
      }),
      (t[16] = s),
      (t[17] = a),
      (t[18] = r),
      (t[19] = l),
      (t[20] = i),
      (t[21] = h))
    : (h = t[21]);
  let _;
  return (
    t[22] !== r.appConnectOptions ||
    t[23] !== r.appId ||
    t[24] !== r.hostId ||
    t[25] !== r.requestedCompanionConnectorIds ||
    t[26] !== u ||
    t[27] !== d ||
    t[28] !== p ||
    t[29] !== m ||
    t[30] !== h
      ? ((_ = (0, Je.jsx)(Y, {
          connectorId: r.appId,
          hostId: r.hostId,
          appConnectOptions: r.appConnectOptions,
          googleOAuthScopeMismatch: !0,
          requestedCompanionConnectorIds: r.requestedCompanionConnectorIds,
          installAttemptId: u,
          closeOnOAuthStarted: !1,
          beforeConnect: d,
          getOAuthResumeContext: p,
          onOAuthStarted: m,
          onOpenChange: h,
        })),
        (t[22] = r.appConnectOptions),
        (t[23] = r.appId),
        (t[24] = r.hostId),
        (t[25] = r.requestedCompanionConnectorIds),
        (t[26] = u),
        (t[27] = d),
        (t[28] = p),
        (t[29] = m),
        (t[30] = h),
        (t[31] = _))
      : (_ = t[31]),
    _
  );
}
function Ke(e) {
  re.error(`Failed to dismiss Google permission recovery`, { safe: {}, sensitive: { error: e } });
}
var qe, Je;
function Ye() {
  return (Ye = e(() => {
    ((qe = u()), x(), c(), He(), V(), Z(), pe(), W(), I(), r(), p(), (Je = o()));
  }))();
}
function Xe(e, t, n) {
  let r = k(t);
  if (r == null) return null;
  let i = e.get(K),
    a = e.get(O),
    o = e.get(Ze, null),
    s = JSON.stringify([i, a, r]),
    c = o.get(s);
  if (c != null) return c;
  if (
    n?.resumeTarget.kind !== `return-to-location-state` ||
    n.resumeTarget.successState.orbitContactSetup !== !0 ||
    n.resumeTarget.successState.orbitSlackSetup == null
  )
    return null;
  let u = n.resumeTarget.successState,
    d,
    f = () => !1,
    p = () => e.get(K) === i && e.get(O) === a && f(),
    m = {
      pending: n,
      complete: (t, n) => (
        (f = n),
        (d ??= (async () => {
          let n = await t(),
            r = `failed`;
          try {
            let { resumeSlackOAuth: t } = await l(
              async () => {
                let { resumeSlackOAuth: e } = await import(`./oauth-resume-afa4a14e3f7f.js`);
                return { resumeSlackOAuth: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
              import.meta.url,
            );
            r = await t(e, u, n, void 0, p);
          } catch {}
          return { result: n, failure: r };
        })()
          .catch((e) => {
            throw (m.release(f), e);
          })
          .finally(() => {
            p() || m.release(f);
          })),
        d
      ),
      release: (e) => {
        f === e && o.get(s) === m && o.delete(s);
      },
    };
  return (o.set(s, m), m);
}
var Ze;
function Qe() {
  return (Qe = e(() => {
    (x(), ae(), W(), r(), C(), (Ze = h(f, (e) => new Map())));
  }))();
}
function $e() {
  let e = (0, dt.c)(120),
    r = n(f),
    a = te(),
    o = g(),
    s = m(),
    c = _(),
    l;
  e[0] === c ? (l = e[1]) : ((l = tt(c)), (e[0] = c), (e[1] = l));
  let u = l,
    p = le(),
    h;
  e[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = { name: `chatgpt` }), (e[2] = h)) : (h = e[2]);
  let v = ee(Me, h),
    y = Ee(),
    { clearPendingAppConnect: b, getPendingAppConnectForCallbackUrl: x } = fe(),
    { closePluginInstallAppConnectBeforeInstall: S, markRequiredAppStatus: C, session: T } = _e(),
    [D, ae] = (0, Q.useState)(null),
    k;
  e[3] !== u || e[4] !== x
    ? ((k = () => {
        let e = u ? x(u)?.resumeTarget : void 0;
        return e?.kind === `plugin-install` &&
          e.pluginId != null &&
          e.installOptions?.pluginRedirect?.consentAfterOAuth
          ? { kind: `loading` }
          : null;
      }),
      (e[3] = u),
      (e[4] = x),
      (e[5] = k))
    : (k = e[5]);
  let [A, j] = (0, Q.useState)(k),
    [N, se] = (0, Q.useState)(!1);
  A?.kind === `consent` &&
    N &&
    T.kind !== `closed` &&
    (T.kind === `reviewIncentive` || Oe(T) == null) &&
    j({ kind: `installing` });
  let ce = (0, Q.useRef)(null),
    P = (0, Q.useRef)(!0),
    F,
    I;
  (e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = () => (
        (P.current = !0),
        () => {
          ((P.current = !1), ce.current?.(!1));
        }
      )),
      (I = []),
      (e[6] = F),
      (e[7] = I))
    : ((F = e[6]), (I = e[7])),
    (0, Q.useEffect)(F, I));
  let pe = (0, Q.useRef)(!1),
    [he, xe] = (0, Q.useState)(!1),
    [L, Ce] = (0, Q.useState)(null),
    R;
  e[8] !== D || e[9] !== s || e[10] !== r
    ? ((R = async () => {
        D?.resumeTarget.kind === `plugin-skill` &&
          D.accountId === r.get(M) &&
          (await de({ ...D.resumeTarget, enabled: !0 }),
          await s.invalidateQueries({ queryKey: [`plugins`] }));
      }),
      (e[8] = D),
      (e[9] = s),
      (e[10] = r),
      (e[11] = R))
    : (R = e[11]);
  let z;
  e[12] !== D || e[13] !== o
    ? ((z = () => {
        D != null && o(D.resumePath, { replace: !0 });
      }),
      (e[12] = D),
      (e[13] = o),
      (e[14] = z))
    : (z = e[14]);
  let B;
  e[15] === r
    ? (B = e[16])
    : ((B = () => {
        r.get(w).danger(
          (0, $.jsx)(E, {
            id: `browserPluginSettings.skill.saveFailed`,
            defaultMessage: `Couldn't update this skill. Try again`,
            description: `Error saving a plugin skill's enabled state`,
          }),
          { errorAnalytics: { toastId: `browserPluginSettings.skill.saveFailed` } },
        );
      }),
      (e[15] = r),
      (e[16] = B));
  let V;
  e[17] !== R || e[18] !== z || e[19] !== B
    ? ((V = { mutationFn: R, onSuccess: z, onError: B }), (e[17] = R), (e[18] = z), (e[19] = B), (e[20] = V))
    : (V = e[20]);
  let { mutate: we, isPending: H } = ne(V),
    U;
  e[21] !== o || e[22] !== r
    ? ((U = async (e) => {
        let { accountId: t, hostId: n, resumePath: i, target: a } = e;
        if (a.installOptions?.pluginRedirect != null && a.pluginId != null) {
          try {
            await ie(r, o, n, a);
          } catch (e) {
            let t = e;
            (re.error(`Failed to resume plugin redirect installation`, { safe: {}, sensitive: { error: t } }),
              o(Be(a.installOptions.pluginRedirect.search), { replace: !0 }));
          }
          return;
        }
        let s = a.installOptions?.postInstallConnectorSetup,
          c = r.get(O);
        (o(i, { replace: !0, state: { connectorSetup: s } }),
          await Ie(r, {
            accountId: t,
            hostId: n,
            target: a,
            onSuccess: async (e, n) => {
              if (a.installOptions?.sourceSectionId === `work_onboarding`) {
                let { onboardingIdentity$: i, recordEnterprisePluginConnection: o } = await lt(),
                  s = r.get(i);
                s != null &&
                  s.accountId === t &&
                  s.userId === c &&
                  o(r, s, a.installOptions.sourceAttributionId, { id: e, name: ve(n) });
              }
              (s != null && We({ scope: r, navigate: o, setup: s }),
                await ut(r, { resumePath: i, pluginId: e, accountId: t, userId: c }));
            },
          }));
      }),
      (e[21] = o),
      (e[22] = r),
      (e[23] = U))
    : (U = e[23]);
  let Ne = U,
    Fe = (0, Q.useEffectEvent)(Ne),
    W = (0, Q.useRef)(null),
    G;
  e[24] !== C || e[25] !== T.app || e[26] !== T.connectMode || e[27] !== T.kind || e[28] !== T.status
    ? ((G = (e) => {
        T.kind === `connectAppBeforeInstall` &&
          T.connectMode === `automatic` &&
          T.status === `waitingForCallback` &&
          T.app.id === e &&
          C({ appId: e, status: `launching` });
      }),
      (e[24] = C),
      (e[25] = T.app),
      (e[26] = T.connectMode),
      (e[27] = T.kind),
      (e[28] = T.status),
      (e[29] = G))
    : (G = e[29]);
  let Le = (0, Q.useEffectEvent)(G),
    K;
  e[30] !== S || e[31] !== C || e[32] !== T
    ? ((K = (e) => {
        let { appId: t, status: n } = e,
          r = t ?? (T.kind === `connectAppBeforeInstall` || T.kind === `connectApp` ? T.app.id : null);
        if (r != null) {
          if (n === `pending` && Se(T)) {
            S();
            return;
          }
          C({ appId: r, status: n });
        }
      }),
      (e[30] = S),
      (e[31] = C),
      (e[32] = T),
      (e[33] = K))
    : (K = e[33]);
  let q = (0, Q.useEffectEvent)(K),
    J;
  e[34] !== b || e[35] !== y || e[36] !== x || e[37] !== a || e[38] !== o || e[39] !== s || e[40] !== r
    ? ((J = async (e) => {
        let {
            appId: n,
            appName: i,
            callbackReceivedAtMs: c,
            fullRedirectUrl: l,
            hasCallbackClaim: u,
            shouldShowPendingToast: d,
            shouldShowSuccessToast: f,
          } = e,
          p = at(n);
        d &&
          l != null &&
          l.length > 0 &&
          r
            .get(w)
            .info(
              (0, $.jsx)(E, {
                id: `apps.appConnectOAuthCallbackPage.pending`,
                defaultMessage: `Finishing {connector} setup`,
                description: `Toast shown when an app OAuth callback has returned and Codex is finishing setup`,
                values: {
                  connector:
                    i ??
                    a.formatMessage({
                      id: `apps.appConnectOAuthCallbackPage.fallbackAppName`,
                      defaultMessage: `App`,
                      description: `Fallback app name used in app connect callback pending toasts`,
                    }),
                },
              }),
              { duration: 0, id: p, leading: (0, $.jsx)(t, { className: `icon-xs` }) },
            );
        let m = l ? x(l) : null,
          h = m?.resumeTarget;
        if (
          (m != null &&
            m.accountId === r.get(Re) &&
            De(r, {
              stage: Te.CHATGPT_CONNECTOR_AUTH_STAGE_CALLBACK_RECEIVED,
              surface: ue.CHATGPT_CONNECTOR_AUTH_SURFACE_OAUTH_CALLBACK,
              connectorId: m.appId,
              flowCorrelationId: m.oauthFlowCorrelationId,
              referrer: m.appConnectOptions?.oauthReferrer,
            }),
          m != null &&
            l != null &&
            h?.kind === `plugin-install` &&
            h.pluginId != null &&
            h.installOptions?.pluginRedirect?.consentAfterOAuth)
        ) {
          let e = h.installOptions.pluginRedirect;
          j({ kind: `loading` });
          let t = new URL(window.location.href);
          for (let e of [`code`, `state`, `oauth_state_id`]) t.searchParams.delete(e);
          window.history.replaceState(null, ``, t.pathname + t.search + t.hash);
          let n = () => P.current && m.accountId != null && m.accountId === r.get(Re),
            i = !1;
          try {
            if (n() && !new URL(l).searchParams.has(`error`)) {
              let e = await s.fetchQuery({
                ...r.query.getOptions(Pe, Ae({ hostId: m.hostId, pluginId: h.pluginId })),
                staleTime: 0,
              });
              n() &&
                ((i = await new Promise((t) => {
                  let n = (e) => {
                    ((ce.current = null), t(e));
                  };
                  ((ce.current = n),
                    j({ kind: `consent`, installOptions: h.installOptions, plugin: me(e), complete: n }));
                })),
                (i &&= n()));
            }
          } catch {
            P.current &&
              r
                .get(w)
                .danger(
                  a.formatMessage({
                    id: `plugins.redirect.consentUnavailable`,
                    defaultMessage: `Couldn't finish connecting. Open the original link to try again`,
                    description: `Error shown after returning from a plugin provider when ChatGPT cannot load connection consent. Asks the end user to restart from the original third-party link.`,
                  }),
                  { errorAnalytics: { toastId: `plugins.redirect.consentUnavailable` } },
                );
          }
          if (!i)
            return (
              b({ oauthState: m.oauthState }),
              P.current && (j(null), o(Be(e.search), { replace: !0 })),
              { kind: `superseded` }
            );
        }
        let g = await y({ callbackReceivedAtMs: c, fullRedirectUrl: l ?? ``, hasCallbackClaim: u });
        bb316: switch (g.kind) {
          case `superseded`:
            break bb316;
          case `missing-callback-data`:
            r.get(w).warning(
              (0, $.jsx)(E, {
                id: `apps.appConnectOAuthCallbackPage.missingData`,
                defaultMessage: `Missing OAuth callback data`,
                description: `Toast shown when an app connection OAuth callback is missing the redirect URL`,
              }),
              { id: p },
            );
            break bb316;
          case `request-failed`: {
            if (g.googleOAuthScopeMismatch) break bb316;
            let e = g.reinstallRequired
              ? be(a)
              : (g.message ??
                a.formatMessage({
                  id: `apps.appConnectOAuthCallbackPage.requestFailed`,
                  defaultMessage: `Failed to finish connecting app`,
                  description: `Toast shown when finishing an app connection OAuth callback fails`,
                }));
            r.get(w).danger(e, {
              errorAnalytics: { toastId: `appConnectOauthCallbackPage.runCallbackEvent` },
              id: p,
            });
            break bb316;
          }
          case `success`:
            if (!f) break bb316;
            r.get(w).success(
              (0, $.jsx)(E, {
                id: `apps.appConnectOAuthCallbackPage.success`,
                defaultMessage: `{appName} is now connected`,
                description: `Toast shown when an app connection OAuth callback succeeds`,
                values: { appName: g.appName },
              }),
              { id: p },
            );
        }
        return g;
      }),
      (e[34] = b),
      (e[35] = y),
      (e[36] = x),
      (e[37] = a),
      (e[38] = o),
      (e[39] = s),
      (e[40] = r),
      (e[41] = J))
    : (J = e[41]);
  let He = (0, Q.useEffectEvent)(J),
    Y;
  e[42] !== v.isLoading ||
  e[43] !== b ||
  e[44] !== u ||
  e[45] !== x ||
  e[46] !== p ||
  e[47] !== c.state ||
  e[48] !== Le ||
  e[49] !== q ||
  e[50] !== o ||
  e[51] !== T ||
  e[52] !== Fe ||
  e[53] !== He ||
  e[54] !== r
    ? ((Y = () => {
        let e = ge(c.state);
        if (W.current === u) return;
        W.current = u;
        let t = u.length > 0 ? x(u) : null,
          n = je(t, r.get(O)),
          a = n == null && u.length > 0 ? Xe(r, u, t) : null,
          s = a?.pending ?? t,
          l = s?.returnTo ?? e?.returnTo ?? `/skills`,
          f = s?.resumeTarget.kind === `plugin-install`,
          m = oe(T, s);
        if (s != null && m) {
          (b({ oauthState: s.oauthState }),
            o(l, { replace: !0, state: { initialHostId: s.hostId, initialTab: `plugins` } }));
          return;
        }
        let h = s?.resumeTarget.kind === `service-account`,
          g = it(s?.resumeTarget),
          _ = s?.resumeTarget.kind === `return-to-location-state` ? s.resumeTarget : null,
          v = _?.successState.orbitSlackSetup != null,
          y = () => _?.successState.orbitContactSetup !== !0 || (p() && W.current === u),
          S = s?.isGithubConnector === !0 || s?.appId === `connector_76869538009648d5b282a4bb21c3d157`,
          { waitForCallback: C, showSuccessToast: ee } = nt(s?.resumeTarget, S),
          te = s?.googleOAuthPermissionRecovery != null || C || g,
          w = (e) => {
            if (f || g || !Ve(void 0)) {
              if (d(i, l) != null) {
                o(l, { replace: !0 });
                return;
              }
              switch (s?.resumeTarget.kind) {
                case `plugin-install`:
                  (S || Le(s.appId),
                    o(l, { replace: !0, state: { initialHostId: s.hostId, initialTab: `plugins` } }));
                  return;
                case `chatgpt-tool-request`:
                case `chatgpt-pca-beacon`:
                case `service-account`:
                case `plugin-skill`:
                case `connector-auth-elicitation`:
                case `tool-suggestion-elicitation`:
                  o(l, { replace: !0 });
                  return;
                case `mcp-connect-sheet`: {
                  let e = s.resumeTarget.homeSuggestion;
                  o(l, {
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
                  o(l, {
                    replace: !0,
                    state: {
                      connectAppId: g ? void 0 : s?.appId,
                      connectorSetup: e,
                      initialHostId: s?.hostId,
                      initialTab: `apps`,
                    },
                  });
                  return;
              }
            }
          },
          E = () =>
            He({
              appId: s?.appId,
              appName: s?.appName,
              callbackReceivedAtMs: e?.callbackReceivedAtMs,
              fullRedirectUrl: u,
              hasCallbackClaim: e?.hasCallbackClaim,
              shouldShowPendingToast: !1,
              shouldShowSuccessToast: ee,
            }),
          D = a?.complete(E, y);
        ((D?.then(et) ?? E()).then(async (e) => {
          if (a != null && !y()) return e;
          if (e.kind === `superseded`) return (xe(!0), e);
          if ((ye(r, s, e), e.kind === `request-failed` && e.googleOAuthScopeMismatch && s != null))
            return (Ce(s), e);
          if (e.kind === `success`) {
            if (e.githubRepositoryAccess != null)
              return (
                ae({
                  popupReturn: n,
                  accountId: s?.accountId,
                  appConnectOptions: void 0,
                  appId: e.appId,
                  appName: e.appName,
                  connectorSetup: e.connectorSetup,
                  hostId: s?.hostId ?? `local`,
                  installationUrl: e.githubRepositoryAccess.installationUrl,
                  linkId: e.githubRepositoryAccess.linkId,
                  resumePath: l,
                  resumeTarget: s?.resumeTarget ?? { kind: `apps-tab` },
                }),
                e
              );
            if (n != null) return (ke(n, e, { accountId: r.get(M), userId: r.get(O) }), e);
            if (!h)
              for (let t of [e.appId, ...(e.connectedCompanionAppIds ?? [])])
                q({ appId: t, status: `connected` });
          } else if (n != null)
            return (
              ke(
                n,
                { kind: `failed`, message: e.kind === `request-failed` ? e.message : void 0 },
                { accountId: r.get(M), userId: r.get(O) },
              ),
              e
            );
          else (f || s == null) && q({ appId: s?.appId, status: `pending` });
          if (_ != null) {
            if (_.successState.workspaceAgentConnection != null) {
              let { resumeWorkspaceAgentConnection: t } = await ct(),
                n = await t(
                  r,
                  _.successState,
                  e.kind === `success`,
                  e.kind === `success` ? e.linkId : void 0,
                );
              return (o(l, { replace: !0, state: { workspaceAgentConnectionFailed: !n } }), e);
            }
            if (v) {
              if (!y()) return e;
              let t = D == null ? await rt(r, _.successState, e, y) : (await D).failure;
              return (
                y() &&
                  (await Promise.resolve(
                    o(l, {
                      replace: !0,
                      state:
                        t != null || _.successState.orbitContactSetup === !0
                          ? { ..._.successState, slackSetupFailure: t ?? void 0 }
                          : {},
                    }),
                  ).finally(() => {
                    a?.release(y);
                  })),
                e
              );
            }
            let t =
              e.kind === `success` &&
              (_.requiredConnectorIds == null || (await ot(r, _.requiredConnectorIds)));
            if (t && _.successState.shopThisImage != null) {
              let { resumeShopThisImage: e } = await st();
              e(r, _.successState.shopThisImage, s?.accountId, s?.hostId ?? `local`);
            }
            return (o(l, { replace: !0, state: t ? _.successState : _.failureState }), e);
          }
          return (te && (e.kind, w(e.kind === `success` ? e.connectorSetup : void 0)), e);
        }),
          n ?? (te || w()));
      }),
      (e[42] = v.isLoading),
      (e[43] = b),
      (e[44] = u),
      (e[45] = x),
      (e[46] = p),
      (e[47] = c.state),
      (e[48] = Le),
      (e[49] = q),
      (e[50] = o),
      (e[51] = T),
      (e[52] = Fe),
      (e[53] = He),
      (e[54] = r),
      (e[55] = Y))
    : (Y = e[55]);
  let X;
  if (
    (e[56] !== v.isLoading ||
    e[57] !== b ||
    e[58] !== u ||
    e[59] !== x ||
    e[60] !== a ||
    e[61] !== p ||
    e[62] !== c.state ||
    e[63] !== o ||
    e[64] !== T ||
    e[65] !== r
      ? ((X = [v.isLoading, b, u, x, a, p, c.state, o, T, r]),
        (e[56] = v.isLoading),
        (e[57] = b),
        (e[58] = u),
        (e[59] = x),
        (e[60] = a),
        (e[61] = p),
        (e[62] = c.state),
        (e[63] = o),
        (e[64] = T),
        (e[65] = r),
        (e[66] = X))
      : (X = e[66]),
    (0, Q.useEffect)(Y, X),
    L != null)
  ) {
    let t;
    return (e[67] === L ? (t = e[68]) : ((t = (0, $.jsx)(Ge, { pending: L })), (e[67] = L), (e[68] = t)), t);
  }
  if (D != null) {
    let t;
    e[69] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = []), (e[69] = t)) : (t = e[69]);
    let n;
    e[70] !== D.appId || e[71] !== D.appName || e[72] !== D.installationUrl
      ? ((n = {
          appMetadata: null,
          branding: null,
          description: null,
          distributionChannel: null,
          iconAssets: null,
          iconDarkAssets: null,
          id: D.appId,
          installUrl: D.installationUrl,
          isAccessible: !0,
          isEnabled: !0,
          labels: null,
          logoUrl: null,
          logoUrlDark: null,
          name: D.appName,
          pluginDisplayNames: t,
        }),
        (e[70] = D.appId),
        (e[71] = D.appName),
        (e[72] = D.installationUrl),
        (e[73] = n))
      : (n = e[73]);
    let a = n,
      s;
    e[74] !== we ||
    e[75] !== D.accountId ||
    e[76] !== D.appConnectOptions ||
    e[77] !== D.appId ||
    e[78] !== D.connectorSetup ||
    e[79] !== D.hostId ||
    e[80] !== D.linkId ||
    e[81] !== D.popupReturn ||
    e[82] !== D.resumePath ||
    e[83] !== D.resumeTarget ||
    e[84] !== H ||
    e[85] !== C ||
    e[86] !== o ||
    e[87] !== Ne ||
    e[88] !== r
      ? ((s = async () => {
          if (D.popupReturn != null) {
            ke(
              D.popupReturn,
              { kind: `success`, appId: D.appId, linkId: D.linkId },
              { accountId: r.get(M), userId: r.get(O) },
            );
            return;
          }
          let e = it(D.resumeTarget);
          if (D.resumeTarget.kind === `plugin-skill`) {
            H || we();
            return;
          }
          if (
            (C({ appId: D.appId, status: `connected` }),
            D.resumeTarget.kind === `plugin-install` || e || !Ve(D.appConnectOptions))
          ) {
            if (D.resumeTarget.kind === `return-to-location-state`) {
              let e = D.resumeTarget.successState;
              if (e.workspaceAgentConnection != null) {
                if (pe.current) return;
                pe.current = !0;
                let { resumeWorkspaceAgentConnection: t } = await ct();
                e = { workspaceAgentConnectionFailed: !(await t(r, e, !0, D.linkId)) };
              }
              o(D.resumePath, { replace: !0, state: e });
              return;
            }
            if (d(i, D.resumePath) != null) {
              o(D.resumePath, { replace: !0 });
              return;
            }
            o(D.resumePath, {
              replace: !0,
              state:
                D.resumeTarget.kind === `plugin-install`
                  ? { initialHostId: D.hostId, initialTab: `plugins` }
                  : {
                      connectAppId: e ? void 0 : D.appId,
                      connectorSetup: D.connectorSetup,
                      initialHostId: D.hostId,
                      initialTab: `apps`,
                    },
            });
          }
        }),
        (e[74] = we),
        (e[75] = D.accountId),
        (e[76] = D.appConnectOptions),
        (e[77] = D.appId),
        (e[78] = D.connectorSetup),
        (e[79] = D.hostId),
        (e[80] = D.linkId),
        (e[81] = D.popupReturn),
        (e[82] = D.resumePath),
        (e[83] = D.resumeTarget),
        (e[84] = H),
        (e[85] = C),
        (e[86] = o),
        (e[87] = Ne),
        (e[88] = r),
        (e[89] = s))
      : (s = e[89]);
    let c = s,
      l;
    e[90] === c
      ? (l = e[91])
      : ((l = () => {
          c();
        }),
        (e[90] = c),
        (e[91] = l));
    let u;
    e[92] !== D.installationUrl || e[93] !== D.linkId || e[94] !== l
      ? ((u = { installationUrl: D.installationUrl, linkId: D.linkId, onContinue: l }),
        (e[92] = D.installationUrl),
        (e[93] = D.linkId),
        (e[94] = l),
        (e[95] = u))
      : (u = e[95]);
    let f;
    e[96] !== c || e[97] !== D.resumePath || e[98] !== D.resumeTarget || e[99] !== H || e[100] !== o
      ? ((f = (e) => {
          e || (D.resumeTarget.kind === `plugin-skill` ? H || o(D.resumePath, { replace: !0 }) : c());
        }),
        (e[96] = c),
        (e[97] = D.resumePath),
        (e[98] = D.resumeTarget),
        (e[99] = H),
        (e[100] = o),
        (e[101] = f))
      : (f = e[101]);
    let p;
    return (
      e[102] !== a || e[103] !== D.appConnectOptions || e[104] !== D.hostId || e[105] !== u || e[106] !== f
        ? ((p = (0, $.jsx)(ze, {
            app: a,
            appConnectOptions: D.appConnectOptions,
            hostId: D.hostId,
            githubRepositoryAccess: u,
            onOpenChange: f,
          })),
          (e[102] = a),
          (e[103] = D.appConnectOptions),
          (e[104] = D.hostId),
          (e[105] = u),
          (e[106] = f),
          (e[107] = p))
        : (p = e[107]),
      p
    );
  }
  if (A != null) {
    let t = A.kind === `consent` ? A.plugin : null,
      n = A.kind === `consent` ? A.installOptions : void 0,
      r,
      i;
    e[108] !== N || e[109] !== A
      ? ((r = async () => {
          A.kind !== `consent` || N || (se(!0), A.complete(!0));
        }),
        (i = () => {
          A.kind === `consent` && !N && A.complete(!1);
        }),
        (e[108] = N),
        (e[109] = A),
        (e[110] = r),
        (e[111] = i))
      : ((r = e[110]), (i = e[111]));
    let a;
    return (
      e[112] !== N || e[113] !== t || e[114] !== n || e[115] !== r || e[116] !== i
        ? ((a = (0, $.jsx)(Q.Suspense, {
            fallback: null,
            children: (0, $.jsx)(ft, {
              plugin: t,
              installOptions: n,
              isInstalling: N,
              onInstall: r,
              onClose: i,
            }),
          })),
          (e[112] = N),
          (e[113] = t),
          (e[114] = n),
          (e[115] = r),
          (e[116] = i),
          (e[117] = a))
        : (a = e[117]),
      a
    );
  }
  if (he) {
    let t;
    return (
      e[118] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, $.jsx)(`div`, {
            className: `flex h-full w-full items-center justify-center`,
            children: (0, $.jsx)(E, {
              id: `apps.appConnectOAuthCallbackPage.superseded`,
              defaultMessage: `This connection attempt was replaced`,
              description: `Status shown when an older OAuth callback finishes after a replacement attempt started`,
            }),
          })),
          (e[118] = t))
        : (t = e[118]),
      t
    );
  }
  let Z;
  return (
    e[119] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Z = (0, $.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center`,
          children: (0, $.jsx)(t, { className: `icon-sm` }),
        })),
        (e[119] = Z))
      : (Z = e[119]),
    Z
  );
}
function et(e) {
  let { result: t } = e;
  return t;
}
function tt(e) {
  return ge(e.state)?.fullRedirectUrl?.trim() ?? ``;
}
function nt(e, t) {
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
async function rt(e, t, n, r) {
  try {
    let { resumeSlackOAuth: i } = await l(
      async () => {
        let { resumeSlackOAuth: e } = await import(`./oauth-resume-afa4a14e3f7f.js`);
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
function it(e) {
  return e?.kind === `apps-tab` && e.reauthLinkId != null && e.addAccountAttempt != null;
}
function at(e) {
  return e == null ? `app-connect-oauth-callback` : `app-connect-oauth-callback-${e}`;
}
async function ot(e, t) {
  return (
    await Promise.all(
      [...new Set(t)].map((t) => e.queryClient.fetchQuery({ ...F(t), staleTime: 0 }).catch(() => null)),
    )
  ).every((e) => e != null && (e.auth_status == null || e.auth_status === `ACTIVE`));
}
function st() {
  return l(
    () => import(`./shop-this-image-resume-3bb0a8872576.js`),
    __vite__mapDeps([
      8, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      31, 32,
    ]),
    import.meta.url,
  );
}
function ct() {
  return l(
    () => import(`./app-connection-actions-12eaa812c848.js`),
    __vite__mapDeps([33, 3, 2, 4, 34, 5, 6, 35, 36, 37, 38]),
    import.meta.url,
  );
}
function lt() {
  return l(() => import(`./state-4d9d953f85fe.js`), __vite__mapDeps([39, 5, 2, 3, 4, 6]), import.meta.url);
}
async function ut(e, t) {
  try {
    let { completePluginSuggestionOAuth: n } = await l(
      async () => {
        let { completePluginSuggestionOAuth: e } = await import(`./continuation-ab32ad3665af.js`);
        return { completePluginSuggestionOAuth: e };
      },
      __vite__mapDeps([40, 41, 2, 3, 4, 5, 6]),
      import.meta.url,
    );
    await n(e, t);
  } catch {
    re.warning(`plugin_suggestion_continuation_unavailable`, { safe: {}, sensitive: {} });
  }
}
var dt, Q, $, ft;
function pt() {
  return (pt = e(() => {
    ((dt = u()),
      G(),
      N(),
      D(),
      s(),
      x(),
      T(),
      A(),
      (Q = a()),
      b(),
      c(),
      U(),
      L(),
      J(),
      Fe(),
      ae(),
      xe(),
      V(),
      y(),
      Ye(),
      Le(),
      pe(),
      W(),
      S(),
      v(),
      Ne(),
      Qe(),
      B(),
      H(),
      Ue(),
      P(),
      Ce(),
      se(),
      r(),
      q(),
      ce(),
      p(),
      we(),
      R(),
      ($ = o()),
      C(),
      (ft = z(he)));
  }))();
}
pt();
export { $e as AppConnectOAuthCallbackPage };
//# sourceMappingURL=app-connect-oauth-callback-page-25502a52b9ba.js.map
