import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Ext as n,
  IDt as r,
  Nxt as i,
  Pxt as a,
  Vxt as o,
  _xt as s,
  jDt as c,
  t3 as l,
  vzt as u,
  xMt as d,
} from "./app-shared-bbfeca5e5737.js";
import {
  YMr as f,
  akn as p,
  bTn as m,
  fOr as h,
  fur as g,
  hOr as _,
  okn as v,
  pur as y,
  tNr as b,
  yTn as x,
} from "./app-initial-5851df3f6cb1.js";
import { n as S, t as C } from "./app-connect-modal-fb7e1b0124f4.js";
import { n as w, r as T, t as E } from "./app-connect-mfa-continuation-74487b9e9324.js";
function D() {
  let e = (0, O.c)(33),
    { isLoading: a } = y(),
    s = o(h),
    c = o(f),
    [l] = i(),
    u = n(),
    { markAppConnectOAuthPending: d } = v();
  if (a) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, k.jsx)(x, { fillParent: !0, debugName: `AppConnectMfaPage` })), (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let p;
  e[1] !== s || e[2] !== l || e[3] !== c
    ? ((p = T(l.get(`state`), s, c)), (e[1] = s), (e[2] = l), (e[3] = c), (e[4] = p))
    : (p = e[4]);
  let m = p;
  if (m == null) {
    let n;
    e[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, k.jsx)(`p`, {
          role: `alert`,
          children: (0, k.jsx)(r, {
            id: `apps.connectMfa.expired`,
            defaultMessage: `This app connection has expired. Start connecting the app again`,
            description: `Shown when the saved app connection is missing, expired, or belongs to a different ChatGPT account after MFA sign-in`,
          }),
        })),
        (e[5] = n))
      : (n = e[5]);
    let i;
    e[6] === u
      ? (i = e[7])
      : ((i = () => void u(`/settings/plugins-settings`, { replace: !0 })), (e[6] = u), (e[7] = i));
    let a;
    e[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, k.jsx)(r, {
          id: `apps.connectMfa.backToApps`,
          defaultMessage: `Back to apps`,
          description: `Returns to app settings after an MFA connection continuation expires`,
        })),
        (e[8] = a))
      : (a = e[8]);
    let o;
    return (
      e[9] === i
        ? (o = e[10])
        : ((o = (0, k.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [n, (0, k.jsx)(t, { onClick: i, children: a })],
          })),
          (e[9] = i),
          (e[10] = o)),
      o
    );
  }
  let g = m.plugin,
    _;
  e[11] === l ? (_ = e[12]) : ((_ = l.get(`factor`)), (e[11] = l), (e[12] = _));
  let b = _,
    S;
  e[13] === m.options
    ? (S = e[14])
    : ((S = m.options == null ? void 0 : { ...m.options, oauthPresentation: void 0 }),
      (e[13] = m.options),
      (e[14] = S));
  let w = S,
    D = m.hostId ?? g?.hostId,
    A = b === `totp` || b === `sms` ? b : void 0,
    j;
  e[15] !== m.returnTo || e[16] !== u
    ? ((j = (e) => {
        e || (E(), u(m.returnTo, { replace: !0 }));
      }),
      (e[15] = m.returnTo),
      (e[16] = u),
      (e[17] = j))
    : (j = e[17]);
  let M;
  e[18] !== m.hostId ||
  e[19] !== m.installAttemptId ||
  e[20] !== m.resumeTarget ||
  e[21] !== m.returnTo ||
  e[22] !== d ||
  e[23] !== w ||
  e[24] !== g
    ? ((M = (e) => {
        (d({
          ...e,
          appConnectOptions: w,
          hostId: m.hostId ?? g?.hostId,
          returnTo: m.returnTo,
          marketplaceAnalytics:
            g?.options.marketplaceAnalytics == null
              ? void 0
              : {
                  ...g.options.marketplaceAnalytics,
                  pluginId: g.pluginId,
                  remotePluginId: g.remotePluginId,
                  installAttemptId: m.installAttemptId,
                },
          resumeTarget:
            m.resumeTarget ??
            (g == null
              ? { kind: `apps-tab` }
              : {
                  kind: `plugin-install`,
                  pluginId: g.pluginId,
                  remotePluginId: g.remotePluginId,
                  installOptions: g.options,
                  pendingElicitationReply: g.options.pendingElicitationReply,
                  origin: g.options.origin === `in_conversation_elicitation` ? g.options.origin : void 0,
                  postInstallRequiredApps: g.requiredApps,
                }),
        }),
          E());
      }),
      (e[18] = m.hostId),
      (e[19] = m.installAttemptId),
      (e[20] = m.resumeTarget),
      (e[21] = m.returnTo),
      (e[22] = d),
      (e[23] = w),
      (e[24] = g),
      (e[25] = M))
    : (M = e[25]);
  let N;
  return (
    e[26] !== m || e[27] !== w || e[28] !== D || e[29] !== A || e[30] !== j || e[31] !== M
      ? ((N = (0, k.jsx)(
          C,
          {
            app: null,
            connectorId: m.connectorId,
            hostId: D,
            appConnectOptions: w,
            installAttemptId: m.installAttemptId,
            requestedCompanionConnectorIds: m.requestedCompanionConnectorIds,
            mfaContinuation: m,
            mfaFactor: A,
            closeOnOAuthStarted: !1,
            onOpenChange: j,
            onOAuthStarted: M,
          },
          m.id,
        )),
        (e[26] = m),
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
    ((O = u()), a(), c(), s(), _(), b(), g(), l(), m(), S(), w(), p(), (k = d()));
  }))();
}
A();
export { D as AppConnectMfaPage };
//# sourceMappingURL=app-connect-mfa-page-ff88329e6fc5.js.map
