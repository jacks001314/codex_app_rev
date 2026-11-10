import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  LNt as t,
  NSt as n,
  PBt as r,
  USt as i,
  XOt as a,
  XSt as o,
  Y3 as s,
  Z3 as c,
  ZSt as l,
  iCt as u,
  tkt as d,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  DMn as f,
  FMr as p,
  HOn as m,
  OMn as h,
  RMr as g,
  UOn as _,
  bLr as v,
  imr as y,
  rmr as b,
  wLr as x,
} from "./app-initial-ad16eaadf81f.js";
import { n as S, t as C } from "./app-connect-modal-763ad0733e86.js";
import { n as w, r as T, t as E } from "./app-connect-mfa-continuation-e50c4da2add7.js";
function D() {
  let e = (0, O.c)(33),
    { isLoading: t } = y(),
    n = u(p),
    r = u(v),
    [a] = o(),
    c = i(),
    { markAppConnectOAuthPending: l } = h();
  if (t) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, k.jsx)(m, { fillParent: !0, debugName: `AppConnectMfaPage` })), (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let f;
  e[1] !== n || e[2] !== a || e[3] !== r
    ? ((f = T(a.get(`state`), n, r)), (e[1] = n), (e[2] = a), (e[3] = r), (e[4] = f))
    : (f = e[4]);
  let g = f;
  if (g == null) {
    let t;
    e[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, k.jsx)(`p`, {
          role: `alert`,
          children: (0, k.jsx)(d, {
            id: `apps.connectMfa.expired`,
            defaultMessage: `This app connection has expired. Start connecting the app again`,
            description: `Shown when the saved app connection is missing, expired, or belongs to a different ChatGPT account after MFA sign-in`,
          }),
        })),
        (e[5] = t))
      : (t = e[5]);
    let n;
    e[6] === c
      ? (n = e[7])
      : ((n = () => void c(`/settings/plugins-settings`, { replace: !0 })), (e[6] = c), (e[7] = n));
    let r;
    e[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, k.jsx)(d, {
          id: `apps.connectMfa.backToApps`,
          defaultMessage: `Back to apps`,
          description: `Returns to app settings after an MFA connection continuation expires`,
        })),
        (e[8] = r))
      : (r = e[8]);
    let i;
    return (
      e[9] === n
        ? (i = e[10])
        : ((i = (0, k.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [t, (0, k.jsx)(s, { onClick: n, children: r })],
          })),
          (e[9] = n),
          (e[10] = i)),
      i
    );
  }
  let _ = g.plugin,
    b;
  e[11] === a ? (b = e[12]) : ((b = a.get(`factor`)), (e[11] = a), (e[12] = b));
  let x = b,
    S;
  e[13] === g.options
    ? (S = e[14])
    : ((S = g.options == null ? void 0 : { ...g.options, oauthPresentation: void 0 }),
      (e[13] = g.options),
      (e[14] = S));
  let w = S,
    D = g.hostId ?? _?.hostId,
    A = x === `totp` || x === `sms` ? x : void 0,
    j;
  e[15] !== g.returnTo || e[16] !== c
    ? ((j = (e) => {
        e || (E(), c(g.returnTo, { replace: !0 }));
      }),
      (e[15] = g.returnTo),
      (e[16] = c),
      (e[17] = j))
    : (j = e[17]);
  let M;
  e[18] !== g.hostId ||
  e[19] !== g.installAttemptId ||
  e[20] !== g.resumeTarget ||
  e[21] !== g.returnTo ||
  e[22] !== l ||
  e[23] !== w ||
  e[24] !== _
    ? ((M = (e) => {
        (l({
          ...e,
          appConnectOptions: w,
          hostId: g.hostId ?? _?.hostId,
          returnTo: g.returnTo,
          marketplaceAnalytics:
            _?.options.marketplaceAnalytics == null
              ? void 0
              : {
                  ..._.options.marketplaceAnalytics,
                  pluginId: _.pluginId,
                  remotePluginId: _.remotePluginId,
                  installAttemptId: g.installAttemptId,
                },
          resumeTarget:
            g.resumeTarget ??
            (_ == null
              ? { kind: `apps-tab` }
              : {
                  kind: `plugin-install`,
                  pluginId: _.pluginId,
                  remotePluginId: _.remotePluginId,
                  installOptions: _.options,
                  pendingElicitationReply: _.options.pendingElicitationReply,
                  origin: _.options.origin === `in_conversation_elicitation` ? _.options.origin : void 0,
                  postInstallRequiredApps: _.requiredApps,
                }),
        }),
          E());
      }),
      (e[18] = g.hostId),
      (e[19] = g.installAttemptId),
      (e[20] = g.resumeTarget),
      (e[21] = g.returnTo),
      (e[22] = l),
      (e[23] = w),
      (e[24] = _),
      (e[25] = M))
    : (M = e[25]);
  let N;
  return (
    e[26] !== g || e[27] !== w || e[28] !== D || e[29] !== A || e[30] !== j || e[31] !== M
      ? ((N = (0, k.jsx)(
          C,
          {
            app: null,
            connectorId: g.connectorId,
            hostId: D,
            appConnectOptions: w,
            installAttemptId: g.installAttemptId,
            requestedCompanionConnectorIds: g.requestedCompanionConnectorIds,
            mfaContinuation: g,
            mfaFactor: A,
            closeOnOAuthStarted: !1,
            onOpenChange: j,
            onOAuthStarted: M,
          },
          g.id,
        )),
        (e[26] = g),
        (e[27] = w),
        (e[28] = D),
        (e[29] = A),
        (e[30] = j),
        (e[31] = M),
        (e[32] = N))
      : (N = e[32]),
    N
  );
}
var O, k;
function A() {
  return (A = e(() => {
    ((O = r()), l(), a(), n(), g(), x(), b(), c(), _(), S(), w(), f(), (k = t()));
  }))();
}
A();
export { D as AppConnectMfaPage };
//# sourceMappingURL=app-connect-mfa-page-59433ed1f248.js.map
