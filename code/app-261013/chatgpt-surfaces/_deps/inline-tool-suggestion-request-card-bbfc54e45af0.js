import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  CPt as n,
  Cot as r,
  Hvt as i,
  IDt as a,
  Ixt as ee,
  Mz as te,
  Nz as o,
  Pxt as s,
  SPt as c,
  VDt as ne,
  Vxt as l,
  gd as u,
  hd as re,
  hot as ie,
  iot as ae,
  jDt as d,
  lot as f,
  nst as oe,
  rst as p,
  tst as m,
  vzt as se,
  wot as h,
  xMt as ce,
  yzt as g,
  zxt as le,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bcr as ue,
  Ddn as de,
  Dkn as fe,
  Dsr as _,
  Ftn as pe,
  Icr as v,
  Idn as y,
  Itn as b,
  JPn as me,
  Jlr as he,
  Ldn as x,
  Msr as ge,
  Ocr as _e,
  QOn as ve,
  Rcr as ye,
  Skn as be,
  Tdn as S,
  U0n as xe,
  V0n as Se,
  W0n as Ce,
  XPr as C,
  YPr as we,
  Ycr as Te,
  ZOn as w,
  a0n as Ee,
  aDr as De,
  akn as T,
  alr as Oe,
  cdr as ke,
  eDr as E,
  fDn as D,
  hOr as O,
  hjt as Ae,
  hzt as k,
  iSr as je,
  idr as A,
  jdn as j,
  kcr as M,
  mjt as Me,
  mzt as Ne,
  nDr as Pe,
  oFr as Fe,
  odr as Ie,
  okn as Le,
  pDn as Re,
  qlr as N,
  s0n as ze,
  sdr as Be,
  svr as P,
  wcr as Ve,
} from "./app-initial-5851df3f6cb1.js";
import { n as F, t as He } from "./app-connect-modal-fb7e1b0124f4.js";
import { n as Ue, t as We } from "./app-connect-modal-by-id-a3e486d4397f.js";
import { i as Ge, n as Ke, r as I, t as qe } from "./availability-7c47246e0e1c.js";
import { o as L, s as Je } from "./microsoft-oauth-bundle-e77977413c17.js";
import { n as Ye, t as R } from "./use-app-connect-flow-7088479fda99.js";
import { c as Xe, s as Ze } from "./mcp-plugin-logo-807452fde2d3.js";
import { n as Qe, t as z } from "./apps-availability-30e091a5d405.js";
import { n as B, t as $e } from "./first-app-connect-ambient-suggestions-97c2f684e2f1.js";
import { n as et, r as V, t as tt } from "./state-4998d9d8a16e.js";
function nt(e) {
  let t = (0, rt.c)(129),
    { conversationId: i, hostId: o, requestId: s, auth: c } = e,
    u = ee(r),
    d = ne(),
    f = oe(),
    p = De(),
    m = l(ie),
    [se, h] = (0, H.useState)(!1),
    [ce, g] = (0, H.useState)(!1),
    [le, ue] = (0, H.useState)(!1),
    de = (0, H.useRef)(!1),
    fe = Pe(`403472035`),
    _ = o === `durable` ? ae : o,
    pe;
  t[0] === _ ? (pe = t[1]) : ((pe = { hostId: _ }), (t[0] = _), (t[1] = pe));
  let { data: v, hardRefetchAppsList: y, isPending: b } = ze(pe),
    me;
  t[2] === v ? (me = t[3]) : ((me = v === void 0 ? [] : v), (t[2] = v), (t[3] = me));
  let he = me,
    x;
  t[4] === c.connector.connector_id
    ? (x = t[5])
    : ((x = [c.connector.connector_id]), (t[4] = c.connector.connector_id), (t[5] = x));
  let ge;
  t[6] !== _ || t[7] !== x
    ? ((ge = { appIds: x, hostId: _ }), (t[6] = _), (t[7] = x), (t[8] = ge))
    : (ge = t[8]);
  let { data: _e } = Ae(ge),
    ve;
  t[9] === _e ? (ve = t[10]) : ((ve = _e === void 0 ? [] : _e), (t[9] = _e), (t[10] = ve));
  let ye = ve,
    be;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = () => {
        h(!0);
      }),
      (t[11] = be))
    : (be = t[11]);
  let S;
  t[12] === o
    ? (S = t[13])
    : ((S = { hostId: o, oauthReferrer: `conversation_auth`, onExternalConnectStarted: be }),
      (t[12] = o),
      (t[13] = S));
  let {
      clearConnectingApp: Ce,
      clearPendingAppConnect: C,
      connectingApp: Te,
      handleAppConnectOAuthStarted: w,
      handleConnectApp: Ee,
      handleOpenAppUrl: T,
      isAppConnectPending: Oe,
    } = Ye(S),
    { isAppConnectCallbackClaimed: ke } = Le(),
    E;
  t[14] !== he || t[15] !== c.connector.connector_id
    ? ((E = he.find((e) => e.id === c.connector.connector_id) ?? null),
      (t[14] = he),
      (t[15] = c.connector.connector_id),
      (t[16] = E))
    : (E = t[16]);
  let D = E,
    O;
  t[17] !== c.connector.connector_id || t[18] !== ye
    ? ((O = ye.find((e) => e.id === c.connector.connector_id) ?? null),
      (t[17] = c.connector.connector_id),
      (t[18] = ye),
      (t[19] = O))
    : (O = t[19]);
  let k = O,
    A = k?.name ?? c.connector.connector_name,
    j = c.connector.auth_reason,
    M = j === `missing_link`,
    Me;
  t[20] === c.connector.connector_id
    ? (Me = t[21])
    : ((Me = Be(c.connector.connector_id)), (t[20] = c.connector.connector_id), (t[21] = Me));
  let Fe = Me != null,
    Re = j === `oauth_upgrade_required`,
    N,
    P;
  t[22] !== c.connector.connector_id || t[23] !== M || t[24] !== p
    ? ((N = Se({ connectorId: c.connector.connector_id, disableExposureLog: !0, statsigClient: p })),
      (P = M && xe(c.connector.connector_id, N) != null),
      (t[22] = c.connector.connector_id),
      (t[23] = M),
      (t[24] = p),
      (t[25] = N),
      (t[26] = P))
    : ((N = t[25]), (P = t[26]));
  let Ve = P,
    F;
  t[27] !== c.connector.connector_id || t[28] !== M || t[29] !== p
    ? ((F = M && Je({ connectorId: c.connector.connector_id, disableExposureLog: !0, statsigClient: p })),
      (t[27] = c.connector.connector_id),
      (t[28] = M),
      (t[29] = p),
      (t[30] = F))
    : (F = t[30]);
  let Ue = F,
    I = Ve || Ue,
    qe,
    L,
    R;
  t[31] !== c.connector.connector_id ||
  t[32] !== i ||
  t[33] !== se ||
  t[34] !== ke ||
  t[35] !== Oe ||
  t[36] !== s ||
  t[37] !== Fe
    ? ((L = { kind: `connector-auth-elicitation`, conversationId: i, requestId: s }),
      (qe = ke(c.connector.connector_id, L)),
      (R = !Fe && (se || Oe(c.connector.connector_id, L))),
      (t[31] = c.connector.connector_id),
      (t[32] = i),
      (t[33] = se),
      (t[34] = ke),
      (t[35] = Oe),
      (t[36] = s),
      (t[37] = Fe),
      (t[38] = qe),
      (t[39] = L),
      (t[40] = R))
    : ((qe = t[38]), (L = t[39]), (R = t[40]));
  let Xe = R,
    Qe = Xe ? W.continue : M ? W.connect : Re ? W.updateAccess : W.reconnect,
    z;
  t[41] !== c.connector.connector_id ||
  t[42] !== C ||
  t[43] !== i ||
  t[44] !== o ||
  t[45] !== s ||
  t[46] !== L ||
  t[47] !== u
    ? ((z = (e) => {
        de.current ||
          ((de.current = !0),
          C({ appId: c.connector.connector_id, resumeTarget: L }),
          we(u, o).replyWithMcpServerElicitationResponse(i, s, je(e)));
      }),
      (t[41] = c.connector.connector_id),
      (t[42] = C),
      (t[43] = i),
      (t[44] = o),
      (t[45] = s),
      (t[46] = L),
      (t[47] = u),
      (t[48] = z))
    : (z = t[48]);
  let B = z,
    $e;
  t[49] === B
    ? ($e = t[50])
    : (($e = () => {
        B(`decline`);
      }),
      (t[49] = B),
      (t[50] = $e));
  let et = $e,
    V;
  t[51] !== c.connector.connector_id ||
  t[52] !== A ||
  t[53] !== y ||
  t[54] !== d ||
  t[55] !== B ||
  t[56] !== fe ||
  t[57] !== m
    ? ((V = async () => {
        if (fe) {
          B(`accept`);
          return;
        }
        (ue(!0),
          await (async () => {
            try {
              if (((await y()).find((e) => e.id === c.connector.connector_id) ?? null)?.isAccessible !== !0) {
                m.warning(d.formatMessage(W.connectorNotReady, { connectorName: A }));
                return;
              }
              B(`accept`);
            } catch (e) {
              let t = e;
              (n.error(`Failed to refresh connector auth readiness`, {
                safe: { connectorId: c.connector.connector_id },
                sensitive: { error: t },
              }),
                m.danger(d.formatMessage(W.genericLoadError), {
                  errorAnalytics: {
                    toastId: `inlineConnectorAuthRequestCard.handleContinue.genericLoadError`,
                  },
                }));
            }
          })().finally(() => {
            ue(!1);
          }));
      }),
      (t[51] = c.connector.connector_id),
      (t[52] = A),
      (t[53] = y),
      (t[54] = d),
      (t[55] = B),
      (t[56] = fe),
      (t[57] = m),
      (t[58] = V))
    : (V = t[58]);
  let tt = V,
    nt;
  t[59] !== c.connector.connector_id ||
  t[60] !== c.connector.install_url ||
  t[61] !== c.connector.link_id ||
  t[62] !== c.connector.requested_scopes ||
  t[63] !== c.url ||
  t[64] !== j ||
  t[65] !== _ ||
  t[66] !== A ||
  t[67] !== N ||
  t[68] !== w ||
  t[69] !== Ee ||
  t[70] !== T ||
  t[71] !== d ||
  t[72] !== b ||
  t[73] !== D ||
  t[74] !== f ||
  t[75] !== B ||
  t[76] !== Fe ||
  t[77] !== L ||
  t[78] !== u ||
  t[79] !== Ve ||
  t[80] !== Ue ||
  t[81] !== I ||
  t[82] !== m
    ? ((nt = async () => {
        if (Fe) {
          g(!0);
          return;
        }
        (I && b) ||
          (ue(!0),
          await (async () => {
            if (I && D != null) {
              let e = {
                scope: u,
                appId: c.connector.connector_id,
                browserAccountId: void 0,
                hostId: _,
                queryClient: f,
              };
              if ((await (Ve ? Ge({ ...e, connectors: N }) : Ke(e))).length > 0) {
                await Ee(D, {
                  forceInApp: !0,
                  googleOAuthBundlePrepared: Ve,
                  microsoftOAuthBundlePrepared: Ue,
                });
                return;
              }
            }
            let e = {
                id: c.connector.connector_id,
                installUrl: D?.installUrl ?? c.connector.install_url,
                name: A,
              },
              t = await Ie({
                scope: u,
                appConnectOptions: {
                  connectorId: c.connector.connector_id,
                  oauthReferrer: `conversation_auth`,
                },
                app: e,
                authReason: j,
                fallbackUrl: c.url,
                linkId: c.connector.link_id,
                onOAuthStarted: void 0,
                openInBrowser: (e) => {
                  T(e);
                },
                queryClient: f,
                requestedScopes: c.connector.requested_scopes,
              });
            switch (t.kind) {
              case `requires-mfa`:
              case `requires-connection-form`:
                g(!0);
                return;
              case `connected-directly`:
                B(`accept`);
                return;
              case `oauth-started`:
                (w({
                  app: e,
                  redirectUrl: t.redirectUrl,
                  oauthFlowCorrelationId: t.oauthFlowCorrelationId,
                  resumeTarget: L,
                }),
                  h(!0));
                return;
              case `browser-fallback`:
                h(!0);
                return;
              case `failed`:
                m.danger(
                  d.formatMessage({
                    id: `composer.connectorAuth.startError`,
                    defaultMessage: `Could not start connector authentication`,
                    description: `Toast shown when a connector auth elicitation cannot start authentication`,
                  }),
                  { errorAnalytics: { toastId: `composer.connectorAuth.startError` } },
                );
                return;
            }
          })().finally(() => {
            ue(!1);
          }));
      }),
      (t[59] = c.connector.connector_id),
      (t[60] = c.connector.install_url),
      (t[61] = c.connector.link_id),
      (t[62] = c.connector.requested_scopes),
      (t[63] = c.url),
      (t[64] = j),
      (t[65] = _),
      (t[66] = A),
      (t[67] = N),
      (t[68] = w),
      (t[69] = Ee),
      (t[70] = T),
      (t[71] = d),
      (t[72] = b),
      (t[73] = D),
      (t[74] = f),
      (t[75] = B),
      (t[76] = Fe),
      (t[77] = L),
      (t[78] = u),
      (t[79] = Ve),
      (t[80] = Ue),
      (t[81] = I),
      (t[82] = m),
      (t[83] = nt))
    : (nt = t[83]);
  let G = nt,
    K;
  t[84] !== tt || t[85] !== G || t[86] !== Xe
    ? ((K = () => {
        if (Xe) {
          tt();
          return;
        }
        G();
      }),
      (t[84] = tt),
      (t[85] = G),
      (t[86] = Xe),
      (t[87] = K))
    : (K = t[87]);
  let it = K;
  if (c.connector.connection_consent != null) return null;
  let q;
  if (M) {
    let e;
    (t[88] === A
      ? (e = t[89])
      : ((e = (0, U.jsx)(a, { ...W.missingConnectionDescription, values: { connectorName: A } })),
        (t[88] = A),
        (t[89] = e)),
      (q = e));
  } else if (Re) {
    let e;
    (t[90] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, U.jsx)(a, { ...W.missingScopesDescription })), (t[90] = e))
      : (e = t[90]),
      (q = e));
  } else {
    let e;
    (t[91] === A
      ? (e = t[92])
      : ((e = (0, U.jsx)(a, { ...W.reconnectDescription, values: { connectorName: A } })),
        (t[91] = A),
        (t[92] = e)),
      (q = e));
  }
  let at = k?.iconUrl,
    ot = k?.iconUrlDark,
    J;
  t[93] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, U.jsx)(te, { className: `text-secondary`, "aria-hidden": !1, asset: re })), (t[93] = J))
    : (J = t[93]);
  let st;
  t[94] !== c.connector.connector_id || t[95] !== A || t[96] !== at || t[97] !== ot
    ? ((st = (0, U.jsx)(Ne, {
        alt: A,
        className: `icon-md rounded-sm object-contain`,
        knownAppId: c.connector.connector_id,
        logoUrl: at,
        logoDarkUrl: ot,
        fallback: J,
      })),
      (t[94] = c.connector.connector_id),
      (t[95] = A),
      (t[96] = at),
      (t[97] = ot),
      (t[98] = st))
    : (st = t[98]);
  let ct;
  t[99] === Qe ? (ct = t[100]) : ((ct = (0, U.jsx)(a, { ...Qe })), (t[99] = Qe), (t[100] = ct));
  let lt = le || qe || (I && b),
    Y;
  t[101] !== A ||
  t[102] !== q ||
  t[103] !== et ||
  t[104] !== it ||
  t[105] !== st ||
  t[106] !== ct ||
  t[107] !== lt
    ? ((Y = (0, U.jsx)(Ze, {
        icon: st,
        title: A,
        description: q,
        primaryActionLabel: ct,
        isPrimaryActionLoading: lt,
        onDecline: et,
        onSubmit: it,
      })),
      (t[101] = A),
      (t[102] = q),
      (t[103] = et),
      (t[104] = it),
      (t[105] = st),
      (t[106] = ct),
      (t[107] = lt),
      (t[108] = Y))
    : (Y = t[108]);
  let X;
  t[109] !== c.connector.connector_id ||
  t[110] !== c.connector.link_id ||
  t[111] !== j ||
  t[112] !== _ ||
  t[113] !== y ||
  t[114] !== B ||
  t[115] !== ce
    ? ((X = ce
        ? (0, U.jsx)(We, {
            oauthReferrer: `conversation_auth`,
            connectorId: c.connector.connector_id,
            connectorAuth: { authReason: j, linkId: c.connector.link_id },
            hostId: _,
            onConnected: () => {
              (B(`accept`),
                y().catch(() => {
                  n.warning(`Failed to refresh apps after connection`, {
                    safe: { connectorId: c.connector.connector_id },
                  });
                }));
            },
            onOpenChange: (e) => {
              e || g(!1);
            },
          })
        : null),
      (t[109] = c.connector.connector_id),
      (t[110] = c.connector.link_id),
      (t[111] = j),
      (t[112] = _),
      (t[113] = y),
      (t[114] = B),
      (t[115] = ce),
      (t[116] = X))
    : (X = t[116]);
  let Z;
  t[117] !== Ce ||
  t[118] !== Te ||
  t[119] !== _ ||
  t[120] !== w ||
  t[121] !== B ||
  t[122] !== L ||
  t[123] !== I
    ? ((Z = I
        ? (0, U.jsx)(He, {
            oauthReferrer: `conversation_auth`,
            app: Te,
            hostId: _,
            onConnected: () => {
              B(`accept`);
            },
            onExternalConnectStarted: () => {
              h(!0);
            },
            getOAuthResumeContext: () => ({ resumeTarget: L }),
            onOAuthStarted: (e) => {
              (w({ ...e }), h(!0));
            },
            onOpenChange: (e) => {
              e || Ce();
            },
          })
        : null),
      (t[117] = Ce),
      (t[118] = Te),
      (t[119] = _),
      (t[120] = w),
      (t[121] = B),
      (t[122] = L),
      (t[123] = I),
      (t[124] = Z))
    : (Z = t[124]);
  let Q;
  return (
    t[125] !== Y || t[126] !== X || t[127] !== Z
      ? ((Q = (0, U.jsxs)(U.Fragment, { children: [Y, X, Z] })),
        (t[125] = Y),
        (t[126] = X),
        (t[127] = Z),
        (t[128] = Q))
      : (Q = t[128]),
    Q
  );
}
var rt, H, U, W;
function G() {
  return (G = e(() => {
    ((rt = se()),
      u(),
      m(),
      s(),
      p(),
      P(),
      (H = g()),
      d(),
      C(),
      A(),
      Ue(),
      T(),
      ke(),
      Ce(),
      I(),
      L(),
      qe(),
      Me(),
      Ee(),
      R(),
      O(),
      k(),
      me(),
      o(),
      f(),
      h(),
      F(),
      Fe(),
      E(),
      c(),
      Xe(),
      (U = ce()),
      (W = t({
        reconnect: {
          id: `composer.connectorAuth.reconnect.button.label`,
          defaultMessage: `Reconnect`,
          description: `Primary action label for reconnecting expired connector credentials.`,
        },
        continue: {
          id: `composer.connectorAuth.continue.button.label`,
          defaultMessage: `Continue`,
          description: `Primary action label shown after the user has opened the connector auth flow and Codex is checking whether auth completed.`,
        },
        connect: {
          id: `composer.connectorAuth.connect.button.label`,
          defaultMessage: `Connect`,
          description: `Primary action label for starting a first-time connector auth flow.`,
        },
        updateAccess: {
          id: `composer.connectorAuth.updateAccess.button.label`,
          defaultMessage: `Update access`,
          description: `Primary action label for starting a connector permission-upgrade auth flow.`,
        },
        missingConnectionDescription: {
          id: `composer.connectorAuth.missingConnection.description`,
          defaultMessage: `ChatGPT needs access to {connectorName} to help with this request`,
          description: `Description for a connector auth elicitation that requires first-time connection. Placeholder {connectorName} is the connector name, for example Gmail.`,
        },
        missingScopesDescription: {
          id: `composer.connectorAuth.missingScopes.description`,
          defaultMessage: `Your current connection doesn't include the permissions needed for this request.`,
          description: `Description for a connector auth elicitation that requires additional permissions.`,
        },
        reconnectDescription: {
          id: `composer.connectorAuth.reconnect.description`,
          defaultMessage: `Your {connectorName} connection has expired. Reconnect it before ChatGPT can use it for this request.`,
          description: `Description for a connector auth elicitation that requires reconnecting expired connector credentials. Placeholder {connectorName} is the connector name, for example Gmail.`,
        },
        connectorNotReady: {
          id: `composer.connectorAuth.connectorNotReady`,
          defaultMessage: `{connectorName} is not ready yet. Finish signing in, then continue`,
          description: `Toast shown when a connector auth elicitation has not completed yet`,
        },
        genericLoadError: {
          id: `composer.connectorAuth.loadError`,
          defaultMessage: `Could not refresh this connector`,
          description: `Toast shown when a connector auth elicitation cannot refresh connector state`,
        },
      })));
  }))();
}
function K(e) {
  let t = (0, it.c)(25),
    { onboarding: n } = e,
    i = ee(r),
    te;
  t[0] === n.plugin ? (te = t[1]) : ((te = y(n.plugin)), (t[0] = n.plugin), (t[1] = te));
  let o = te,
    s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, q.jsx)(pe, { className: `icon-md text-secondary` })), (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] !== n.plugin.logoDarkPath || t[4] !== n.plugin.logoPath || t[5] !== o
    ? ((c = (0, q.jsx)(Ne, {
        alt: o,
        className: `icon-md rounded-sm object-contain`,
        logoDarkUrl: n.plugin.logoDarkPath,
        logoUrl: n.plugin.logoPath,
        fallback: s,
      })),
      (t[3] = n.plugin.logoDarkPath),
      (t[4] = n.plugin.logoPath),
      (t[5] = o),
      (t[6] = c))
    : (c = t[6]);
  let ne;
  t[7] === o
    ? (ne = t[8])
    : ((ne = (0, q.jsx)(a, {
        id: `plugins.onboarding.title`,
        defaultMessage: `{pluginName} is ready for use`,
        description: `Title after installing a plugin that offers a setup conversation`,
        values: { pluginName: o },
      })),
      (t[7] = o),
      (t[8] = ne));
  let l;
  t[9] === o
    ? (l = t[10])
    : ((l = (0, q.jsx)(a, {
        id: `plugins.onboarding.description`,
        defaultMessage: `Set up {pluginName} to start using it in ChatGPT`,
        description: `Invites the user to set up their newly installed plugin in a conversation`,
        values: { pluginName: o },
      })),
      (t[9] = o),
      (t[10] = l));
  let u, re;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, q.jsx)(a, {
        id: `plugins.onboarding.inline.setup`,
        defaultMessage: `Setup`,
        description: `Start optional setup for the newly installed plugin in this conversation`,
      })),
      (re = (0, q.jsx)(a, {
        id: `plugins.onboarding.inline.skip`,
        defaultMessage: `Skip`,
        description: `Skip optional plugin setup and resume the conversation's original task`,
      })),
      (t[11] = u),
      (t[12] = re))
    : ((u = t[11]), (re = t[12]));
  let ie = n.submittingAction === `setup`,
    ae = n.submittingAction === `skip`,
    d,
    f;
  t[13] !== n || t[14] !== i
    ? ((d = () => void V(i, n, `skip`)),
      (f = () => void V(i, n, `setup`)),
      (t[13] = n),
      (t[14] = i),
      (t[15] = d),
      (t[16] = f))
    : ((d = t[15]), (f = t[16]));
  let oe;
  return (
    t[17] !== d || t[18] !== f || t[19] !== c || t[20] !== ne || t[21] !== l || t[22] !== ie || t[23] !== ae
      ? ((oe = (0, q.jsx)(Ze, {
          icon: c,
          title: ne,
          description: l,
          primaryActionLabel: u,
          secondaryActionLabel: re,
          isPrimaryActionLoading: ie,
          isSecondaryActionLoading: ae,
          onDecline: d,
          onSubmit: f,
        })),
        (t[17] = d),
        (t[18] = f),
        (t[19] = c),
        (t[20] = ne),
        (t[21] = l),
        (t[22] = ie),
        (t[23] = ae),
        (t[24] = oe))
      : (oe = t[24]),
    oe
  );
}
var it, q;
function at() {
  return (at = e(() => {
    ((it = se()), s(), x(), d(), k(), b(), Xe(), h(), tt(), (q = ce()));
  }))();
}
function ot(e) {
  let t = (0, lt.c)(7),
    n;
  t[0] !== e.conversationId || t[1] !== e.hostId || t[2] !== e.requestId
    ? ((n = { hostId: e.hostId, conversationId: e.conversationId, requestId: e.requestId }),
      (t[0] = e.conversationId),
      (t[1] = e.hostId),
      (t[2] = e.requestId),
      (t[3] = n))
    : (n = t[3]);
  let r = le(et, n),
    i;
  return (
    t[4] !== r || t[5] !== e
      ? ((i = r == null ? (0, X.jsx)(J, { ...e }) : (0, X.jsx)(K, { onboarding: r })),
        (t[4] = r),
        (t[5] = e),
        (t[6] = i))
      : (i = t[6]),
    i
  );
}
function J(e) {
  let t = (0, lt.c)(148),
    { conversationId: o, hostId: s, requestId: c, suggestion: u } = e,
    ae = ee(r),
    d = ne(),
    f = l(ie),
    p = oe(),
    m = Pe(`403472035`),
    [se, h] = (0, Y.useState)(!1),
    [ce, g] = (0, Y.useState)(null),
    _ = Re(o),
    v;
  t[0] === s ? (v = t[1]) : ((v = ye(s)), (t[0] = s), (t[1] = v));
  let b = v,
    me = !b && _.hostId === s && _.cwd != null ? [_.cwd] : void 0,
    x = !b,
    _e;
  t[2] !== s || t[3] !== x
    ? ((_e = { hostId: s, enabled: x }), (t[2] = s), (t[3] = x), (t[4] = _e))
    : (_e = t[4]);
  let be = he(_e),
    S = !b && u.tool_type === `plugin` && u.suggest_type === `enable`,
    xe = !S && u.tool_type === `plugin` && (b || be),
    Se = (0, Y.useRef)(!1),
    Ce;
  t[5] !== o || t[6] !== s || t[7] !== c || t[8] !== ae
    ? ((Ce = (e) => {
        Se.current || ((Se.current = !0), we(ae, s).replyWithMcpServerElicitationResponse(o, c, je(e)));
      }),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = ae),
      (t[9] = Ce))
    : (Ce = t[9]);
  let C = Ce,
    w = u.tool_type === `connector`,
    Ee;
  t[10] !== s || t[11] !== w
    ? ((Ee = { enabled: w, hostId: s }), (t[10] = s), (t[11] = w), (t[12] = Ee))
    : (Ee = t[12]);
  let { data: De, hardRefetchAppsList: T, refetch: Oe } = ze(Ee),
    ke = De === void 0 ? [] : De,
    E;
  t[13] !== u.tool_id || t[14] !== u.tool_type
    ? ((E = u.tool_type === `connector` ? [u.tool_id] : []),
      (t[13] = u.tool_id),
      (t[14] = u.tool_type),
      (t[15] = E))
    : (E = t[15]);
  let D;
  t[16] !== s || t[17] !== E
    ? ((D = { appIds: E, hostId: s }), (t[16] = s), (t[17] = E), (t[18] = D))
    : (D = t[18]);
  let { data: O } = Ae(D),
    k;
  t[19] === O ? (k = t[20]) : ((k = O === void 0 ? [] : O), (t[19] = O), (t[20] = k));
  let A = k,
    {
      data: Me,
      isLoading: Fe,
      refetch: Ie,
    } = ue({ enabled: u.tool_type === `plugin` && S && be, hostId: s, roots: me, resolveActiveRoots: S }),
    N = Me ?? [],
    P;
  t[21] === c
    ? (P = t[22])
    : ((P = () => {
        g(c);
      }),
      (t[21] = c),
      (t[22] = P));
  let F;
  t[23] !== s || t[24] !== P
    ? ((F = { hostId: s, oauthReferrer: `tool_suggestion`, onExternalConnectStarted: P }),
      (t[23] = s),
      (t[24] = P),
      (t[25] = F))
    : (F = t[25]);
  let {
      clearConnectingApp: Ue,
      connectingApp: We,
      handleAppConnectOAuthStarted: Ge,
      handleConnectApp: Ke,
      handleOpenAppUrl: I,
      isAppConnectPending: qe,
    } = Ye(F),
    { isAppConnectCallbackClaimed: L } = Le(),
    Je;
  t[26] === s ? (Je = t[27]) : ((Je = { hostId: s }), (t[26] = s), (t[27] = Je));
  let { setAppEnabled: R, updatingAppId: Xe } = Qe(Je),
    z;
  t[28] === s ? (z = t[29]) : ((z = { hostId: s }), (t[28] = s), (t[29] = z));
  let { pendingPluginId: $e, setPluginEnabled: et } = fe(z),
    V = u.tool_type === `plugin` ? u : null,
    { installPlugin: tt, status: nt } = j(),
    rt = l(ge),
    H = u.tool_type === `connector` ? u : null,
    U;
  t[30] === H
    ? (U = t[31])
    : ((U = H?.suggest_type === `install` && Be(H.tool_id) != null), (t[30] = H), (t[31] = U));
  let W = U,
    G =
      H == null
        ? null
        : { kind: `tool-suggestion-elicitation`, conversationId: o, requestId: c, response: je(`accept`) },
    K = V == null ? null : (V.remote_plugin_id ?? (b ? V.tool_id : null)),
    it = Ve({ hostId: s, pluginId: b ? K : (V?.tool_id ?? null), remotePluginId: K, roots: me }),
    q;
  t[32] === xe ? (q = t[33]) : ((q = { enabled: xe }), (t[32] = xe), (t[33] = q));
  let { data: at, isLoading: ot, refetch: J } = le(M, it, q),
    Q = H == null ? null : (ke.find((e) => e.id === H.tool_id) ?? null),
    ut;
  t[34] !== A || t[35] !== H
    ? ((ut = H == null ? null : (A.find((e) => e.id === H.tool_id) ?? null)),
      (t[34] = A),
      (t[35] = H),
      (t[36] = ut))
    : (ut = t[36]);
  let dt = ut,
    $ = V == null ? null : (N.find((e) => e.plugin.id === V.tool_id) ?? null);
  S || ($ = xe && at != null ? Te(at) : null);
  let ft = ct({ app: Q, plugin: $, suggestion: u }),
    pt = We?.id === u.tool_id,
    mt = G != null && qe(u.tool_id, G),
    ht = G != null && L(u.tool_id, G),
    gt = de(nt, {
      hostId: s,
      pluginId: nt?.phase === `loading` ? (K ?? u.tool_id) : ($?.plugin.id ?? u.tool_id),
    }),
    _t = ce === c || mt,
    vt =
      (m || b) &&
      u.tool_type === `plugin` &&
      u.suggest_type === `install` &&
      rt.kind !== `closed` &&
      rt.hostId === s &&
      rt.pendingElicitationReply?.conversationId === o &&
      rt.pendingElicitationReply?.requestId === c,
    yt = b && u.tool_type === `plugin` && u.suggest_type === `install`,
    bt = $e === ($?.plugin.id ?? u.tool_id);
  u.tool_type === `connector`
    ? (bt = u.suggest_type === `install` ? pt || ht : Xe === u.tool_id)
    : u.suggest_type === `install` && (bt = gt || vt);
  let xt = ht || (!yt && !bt && (ft || _t)),
    St =
      (V != null && ot) ||
      se ||
      bt ||
      ((b || S) && u.tool_type === `plugin` && u.suggest_type === `enable` && Fe),
    Ct = Z.enable;
  xt ? (Ct = Z.continue) : u.suggest_type === `install` && (Ct = Z.install);
  let wt = $ == null ? (dt?.name ?? Q?.name ?? u.tool_name) : y($),
    Tt = u.tool_type === `plugin` ? $?.description : (dt?.description ?? Q?.description),
    Et = H?.tool_id,
    Dt = dt?.iconUrl,
    Ot = dt?.iconUrlDark,
    kt;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((kt = (0, X.jsx)(te, { className: `text-secondary`, "aria-hidden": !1, asset: re })), (t[37] = kt))
    : (kt = t[37]);
  let At;
  t[38] !== wt || t[39] !== Et || t[40] !== Dt || t[41] !== Ot
    ? ((At = (0, X.jsx)(Ne, {
        alt: wt,
        className: `icon-md rounded-sm object-contain`,
        knownAppId: Et,
        logoUrl: Dt,
        logoDarkUrl: Ot,
        fallback: kt,
      })),
      (t[38] = wt),
      (t[39] = Et),
      (t[40] = Dt),
      (t[41] = Ot),
      (t[42] = At))
    : (At = t[42]);
  let jt = At;
  if (u.tool_type === `plugin`) {
    let e = $?.logoDarkPath ?? null,
      n = $?.logoPath ?? null,
      r;
    t[43] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, X.jsx)(pe, { className: `icon-md text-secondary` })), (t[43] = r))
      : (r = t[43]);
    let i;
    (t[44] !== u.tool_name || t[45] !== e || t[46] !== n
      ? ((i = (0, X.jsx)(Ne, {
          alt: u.tool_name,
          className: `icon-md rounded-sm object-contain`,
          logoDarkUrl: e,
          logoUrl: n,
          fallback: r,
        })),
        (t[44] = u.tool_name),
        (t[45] = e),
        (t[46] = n),
        (t[47] = i))
      : (i = t[47]),
      (jt = i));
  }
  let Mt;
  t[48] === C
    ? (Mt = t[49])
    : ((Mt = () => {
        C(`decline`);
      }),
      (t[48] = C),
      (t[49] = Mt));
  let Nt = Mt,
    Pt;
  t[50] !== H || t[51] !== Ke || t[52] !== I || t[53] !== W || t[54] !== Q || t[55] !== c
    ? ((Pt = async () => {
        if ((W || g(c), Q != null)) {
          await Ke(Q);
          return;
        }
        H != null && (I(H.install_url), g(c));
      }),
      (t[50] = H),
      (t[51] = Ke),
      (t[52] = I),
      (t[53] = W),
      (t[54] = Q),
      (t[55] = c),
      (t[56] = Pt))
    : (Pt = t[56]);
  let Ft = Pt,
    It;
  t[57] !== o ||
  t[58] !== s ||
  t[59] !== b ||
  t[60] !== tt ||
  t[61] !== d ||
  t[62] !== $ ||
  t[63] !== V?.suggestion_id ||
  t[64] !== J ||
  t[65] !== K ||
  t[66] !== c ||
  t[67] !== xe ||
  t[68] !== m ||
  t[69] !== u.tool_name ||
  t[70] !== f
    ? ((It = async () => {
        let e = $;
        if (b && K != null) e = { displayName: u.tool_name, remoteMarketplaceName: i, remotePluginId: K };
        else if (e == null && xe) {
          h(!0);
          let { data: t } = await J().finally(() => {
            h(!1);
          });
          e = t == null ? null : Te(t);
        }
        if (e == null) {
          f.danger(d.formatMessage(Z.missingPlugin), {
            errorAnalytics: { toastId: `inlineToolSuggestionRequestCard.handleInstallPlugin.missingPlugin` },
          });
          return;
        }
        let t;
        (!m &&
          !b &&
          (t = async () => {
            await J();
          }),
          tt(e, {
            elicitationOwnsConnectorRefresh: !0,
            hostId: s,
            marketplaceAnalytics: { ...ve.composer, suggestionId: V?.suggestion_id },
            origin: `in_conversation_elicitation`,
            pendingElicitationReply: { conversationId: o, requestId: c, response: je(`accept`) },
            onSuccess: t,
          }) &&
            !m &&
            !b &&
            g(c));
      }),
      (t[57] = o),
      (t[58] = s),
      (t[59] = b),
      (t[60] = tt),
      (t[61] = d),
      (t[62] = $),
      (t[63] = V?.suggestion_id),
      (t[64] = J),
      (t[65] = K),
      (t[66] = c),
      (t[67] = xe),
      (t[68] = m),
      (t[69] = u.tool_name),
      (t[70] = f),
      (t[71] = It))
    : (It = t[71]);
  let Lt = It,
    Rt;
  t[72] === c
    ? (Rt = t[73])
    : ((Rt = async (e) => {
        let { enabled: t, setEnabled: n } = e;
        t && g(c);
        try {
          await n();
        } catch {
          return;
        }
      }),
      (t[72] = c),
      (t[73] = Rt));
  let zt = Rt,
    Bt;
  t[74] !== zt || t[75] !== R
    ? ((Bt = (e) => {
        let { appId: t, enabled: n } = e;
        return zt({ enabled: n, setEnabled: () => R({ appId: t, enabled: n }) });
      }),
      (t[74] = zt),
      (t[75] = R),
      (t[76] = Bt))
    : (Bt = t[76]);
  let Vt = Bt,
    Ht;
  t[77] !== zt || t[78] !== b || t[79] !== $ || t[80] !== et
    ? ((Ht = (e) => {
        let { pluginDisplayName: t, pluginId: n, enabled: r } = e;
        return zt({
          enabled: r,
          setEnabled: () =>
            et({ pluginDisplayName: t, pluginId: n, plugin: b ? $?.plugin : void 0, enabled: r }),
        });
      }),
      (t[77] = zt),
      (t[78] = b),
      (t[79] = $),
      (t[80] = et),
      (t[81] = Ht))
    : (Ht = t[81]);
  let Ut = Ht,
    Wt;
  t[82] !== T ||
  t[83] !== d ||
  t[84] !== yt ||
  t[85] !== S ||
  t[86] !== vt ||
  t[87] !== Ie ||
  t[88] !== J ||
  t[89] !== C ||
  t[90] !== m ||
  t[91] !== u ||
  t[92] !== f
    ? ((Wt = async () => {
        yt ||
          vt ||
          (h(!0),
          await (async () => {
            try {
              if (u.tool_type === `connector`) {
                if (m) {
                  C(`accept`);
                  return;
                }
                if (
                  !ct({
                    app: (await T()).find((e) => e.id === u.tool_id) ?? null,
                    plugin: null,
                    suggestion: u,
                  })
                ) {
                  f.danger(d.formatMessage(Z.connectorNotReady, { toolName: u.tool_name }), {
                    errorAnalytics: {
                      toastId: `inlineToolSuggestionRequestCard.handleContinue.connectorNotReady`,
                    },
                  });
                  return;
                }
                C(`accept`);
                return;
              }
              let e;
              if (S) e = (await Ie()).data?.find((e) => e.plugin.id === u.tool_id) ?? null;
              else {
                let { data: t } = await J({ throwOnError: !0 });
                e = t == null ? null : Te(t);
              }
              if (!ct({ app: null, plugin: e, suggestion: u })) {
                f.danger(d.formatMessage(Z.pluginNotReady, { toolName: u.tool_name }), {
                  errorAnalytics: {
                    toastId: `inlineToolSuggestionRequestCard.handleContinue.pluginNotReady`,
                  },
                });
                return;
              }
              C(`accept`);
            } catch (e) {
              let t = e;
              (n.error(`Failed to refresh tool suggestion readiness`, {
                safe: { toolId: u.tool_id, toolType: u.tool_type },
                sensitive: { error: t },
              }),
                f.danger(d.formatMessage(Z.genericLoadError), {
                  errorAnalytics: {
                    toastId: `inlineToolSuggestionRequestCard.handleContinue.genericLoadError`,
                  },
                }));
            }
          })().finally(() => {
            h(!1);
          }));
      }),
      (t[82] = T),
      (t[83] = d),
      (t[84] = yt),
      (t[85] = S),
      (t[86] = vt),
      (t[87] = Ie),
      (t[88] = J),
      (t[89] = C),
      (t[90] = m),
      (t[91] = u),
      (t[92] = f),
      (t[93] = Wt))
    : (Wt = t[93]);
  let Gt = Wt,
    Kt;
  t[94] !== Gt ||
  t[95] !== Ft ||
  t[96] !== Lt ||
  t[97] !== Vt ||
  t[98] !== Ut ||
  t[99] !== d ||
  t[100] !== Q ||
  t[101] !== $ ||
  t[102] !== xt ||
  t[103] !== u.suggest_type ||
  t[104] !== u.tool_type ||
  t[105] !== f
    ? ((Kt = async () => {
        if (xt) {
          await Gt();
          return;
        }
        if (u.tool_type === `connector`) {
          if (u.suggest_type === `install`) {
            await Ft();
            return;
          }
          if (Q == null) {
            await Gt();
            return;
          }
          await Vt({ appId: Q.id, enabled: !0 });
          return;
        }
        if (u.suggest_type === `install`) {
          await Lt();
          return;
        }
        if ($ == null) {
          f.danger(d.formatMessage(Z.missingPlugin), {
            errorAnalytics: { toastId: `inlineToolSuggestionRequestCard.handlePrimaryAction.missingPlugin` },
          });
          return;
        }
        await Ut({ pluginDisplayName: y($), pluginId: $.plugin.id, enabled: !0 });
      }),
      (t[94] = Gt),
      (t[95] = Ft),
      (t[96] = Lt),
      (t[97] = Vt),
      (t[98] = Ut),
      (t[99] = d),
      (t[100] = Q),
      (t[101] = $),
      (t[102] = xt),
      (t[103] = u.suggest_type),
      (t[104] = u.tool_type),
      (t[105] = f),
      (t[106] = Kt))
    : (Kt = t[106]);
  let qt = Kt,
    Jt = xt && _t,
    Yt;
  t[107] !== u || t[108] !== wt || t[109] !== Jt
    ? ((Yt = (0, X.jsx)(st, { showContinueTitle: Jt, suggestion: u, title: wt })),
      (t[107] = u),
      (t[108] = wt),
      (t[109] = Jt),
      (t[110] = Yt))
    : (Yt = t[110]);
  let Xt;
  t[111] === Ct ? (Xt = t[112]) : ((Xt = (0, X.jsx)(a, { ...Ct })), (t[111] = Ct), (t[112] = Xt));
  let Zt;
  t[113] === qt
    ? (Zt = t[114])
    : ((Zt = () => {
        qt();
      }),
      (t[113] = qt),
      (t[114] = Zt));
  let Qt;
  t[115] !== Nt ||
  t[116] !== St ||
  t[117] !== Tt ||
  t[118] !== jt ||
  t[119] !== Yt ||
  t[120] !== Xt ||
  t[121] !== Zt
    ? ((Qt = (0, X.jsx)(Ze, {
        icon: jt,
        title: Yt,
        description: Tt,
        primaryActionLabel: Xt,
        isPrimaryActionLoading: St,
        onDecline: Nt,
        onSubmit: Zt,
      })),
      (t[115] = Nt),
      (t[116] = St),
      (t[117] = Tt),
      (t[118] = jt),
      (t[119] = Yt),
      (t[120] = Xt),
      (t[121] = Zt),
      (t[122] = Qt))
    : (Qt = t[122]);
  let $t;
  t[123] === Ue
    ? ($t = t[124])
    : (($t = (e) => {
        e || Ue();
      }),
      (t[123] = Ue),
      (t[124] = $t));
  let en;
  t[125] !== T ||
  t[126] !== s ||
  t[127] !== W ||
  t[128] !== p ||
  t[129] !== Oe ||
  t[130] !== c ||
  t[131] !== m
    ? ((en = async () => {
        (W && g(c),
          await B({
            hostId: s,
            queryClient: p,
            refreshAppsList: m ? async () => (await Oe()).data ?? [] : T,
          }));
      }),
      (t[125] = T),
      (t[126] = s),
      (t[127] = W),
      (t[128] = p),
      (t[129] = Oe),
      (t[130] = c),
      (t[131] = m),
      (t[132] = en))
    : (en = t[132]);
  let tn;
  t[133] !== o || t[134] !== c
    ? ((tn = () => ({
        resumeTarget: {
          kind: `tool-suggestion-elicitation`,
          conversationId: o,
          requestId: c,
          response: je(`accept`),
        },
      })),
      (t[133] = o),
      (t[134] = c),
      (t[135] = tn))
    : (tn = t[135]);
  let nn;
  t[136] === Ge
    ? (nn = t[137])
    : ((nn = (e) => {
        Ge({ ...e });
      }),
      (t[136] = Ge),
      (t[137] = nn));
  let rn;
  t[138] !== We || t[139] !== s || t[140] !== $t || t[141] !== en || t[142] !== tn || t[143] !== nn
    ? ((rn = (0, X.jsx)(He, {
        oauthReferrer: `tool_suggestion`,
        app: We,
        hostId: s,
        onOpenChange: $t,
        onConnected: en,
        getOAuthResumeContext: tn,
        onOAuthStarted: nn,
      })),
      (t[138] = We),
      (t[139] = s),
      (t[140] = $t),
      (t[141] = en),
      (t[142] = tn),
      (t[143] = nn),
      (t[144] = rn))
    : (rn = t[144]);
  let an;
  return (
    t[145] !== Qt || t[146] !== rn
      ? ((an = (0, X.jsxs)(X.Fragment, { children: [Qt, rn] })), (t[145] = Qt), (t[146] = rn), (t[147] = an))
      : (an = t[147]),
    an
  );
}
function st(e) {
  let t = (0, lt.c)(6),
    { showContinueTitle: n, suggestion: r, title: i } = e;
  if (r.suggest_type !== `install` || !n) {
    let e;
    return (
      t[0] === i ? (e = t[1]) : ((e = (0, X.jsx)(X.Fragment, { children: i })), (t[0] = i), (t[1] = e)),
      e
    );
  }
  switch (r.tool_type) {
    case `connector`: {
      let e;
      return (
        t[2] === i
          ? (e = t[3])
          : ((e = (0, X.jsx)(a, {
              id: `composer.toolSuggestion.connector.continueInstallTitle`,
              defaultMessage: `Click Continue when you're done connecting {toolName}`,
              description: `Title prompting the user to continue an MCP connector suggestion after finishing connection`,
              values: { toolName: i },
            })),
            (t[2] = i),
            (t[3] = e)),
        e
      );
    }
    case `plugin`: {
      let e;
      return (
        t[4] === i
          ? (e = t[5])
          : ((e = (0, X.jsx)(a, {
              id: `composer.toolSuggestion.plugin.continueInstallTitle`,
              defaultMessage: `Click Continue when you're done installing the {toolName} plugin`,
              description: `Title prompting the user to continue an MCP plugin suggestion after finishing installation`,
              values: { toolName: i },
            })),
            (t[4] = i),
            (t[5] = e)),
        e
      );
    }
  }
}
function ct({ app: e, plugin: t, suggestion: n }) {
  switch (n.tool_type) {
    case `connector`:
      return e?.isAccessible === !0 ? n.suggest_type === `install` || e.isEnabled : !1;
    case `plugin`:
      return t?.plugin.installed === !0 ? n.suggest_type === `install` || t.plugin.enabled : !1;
  }
}
var lt, Y, X, Z;
function Q() {
  return (Q = e(() => {
    ((lt = se()),
      u(),
      m(),
      s(),
      p(),
      P(),
      x(),
      (Y = g()),
      d(),
      C(),
      T(),
      ke(),
      z(),
      $e(),
      Me(),
      Ee(),
      R(),
      k(),
      o(),
      f(),
      N(),
      D(),
      b(),
      w(),
      _(),
      S(),
      at(),
      tt(),
      be(),
      _e(),
      v(),
      Oe(),
      h(),
      F(),
      E(),
      c(),
      Xe(),
      (X = ce()),
      (Z = t({
        install: {
          id: `composer.toolSuggestion.install`,
          defaultMessage: `Install`,
          description: `Primary action label for starting an MCP tool suggestion install flow`,
        },
        enable: {
          id: `composer.toolSuggestion.enable`,
          defaultMessage: `Enable`,
          description: `Primary action label for enabling an MCP tool suggestion target`,
        },
        continue: {
          id: `composer.toolSuggestion.continue`,
          defaultMessage: `Continue`,
          description: `Tooltip label for re-checking whether an MCP tool suggestion target is ready`,
        },
        connectorNotReady: {
          id: `composer.toolSuggestion.connector.notReady`,
          defaultMessage: `{toolName} is not ready yet. Finish setting it up, then continue`,
          description: `Toast shown when the user asks to continue but the suggested connector is still not ready`,
        },
        pluginNotReady: {
          id: `composer.toolSuggestion.plugin.notReady`,
          defaultMessage: `{toolName} is not ready yet. Finish setting it up, then continue`,
          description: `Toast shown when the user asks to continue but the suggested plugin is still not ready`,
        },
        missingPlugin: {
          id: `composer.toolSuggestion.plugin.missing`,
          defaultMessage: `Could not load this plugin right now`,
          description: `Toast shown when plugin metadata cannot be loaded for an MCP tool suggestion panel`,
        },
        genericLoadError: {
          id: `composer.toolSuggestion.loadError`,
          defaultMessage: `Could not refresh this tool suggestion`,
          description: `Toast shown when the tool suggestion panel cannot refresh its backing data`,
        },
      })));
  }))();
}
export { G as i, Q as n, nt as r, ot as t };
//# sourceMappingURL=inline-tool-suggestion-request-card-bbfc54e45af0.js.map
