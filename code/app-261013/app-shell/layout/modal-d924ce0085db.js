import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Pxt as r,
  Vxt as i,
  vzt as a,
  wot as o,
  xMt as s,
  yzt as c,
} from "./app-shared-bbfeca5e5737.js";
import { F4n as l, I4n as u, L4n as d, akn as f, okn as p } from "./app-initial-5851df3f6cb1.js";
import { n as m, t as h } from "./app-connect-modal-by-id-a3e486d4397f.js";
function g(e) {
  let r = (0, _.c)(97),
    { onClose: a } = e,
    o = n(t),
    s = i(d),
    { isAppConnectPending: c, markAppConnectOAuthPending: u, openPendingAppConnectPopup: f } = p(),
    m = (0, v.useRef)(null),
    g;
  r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = () => () => m.current?.()), (r[0] = g))
    : (g = r[0]);
  let b = s?.id,
    x;
  if (
    (r[1] === b ? (x = r[2]) : ((x = [b]), (r[1] = b), (r[2] = x)),
    (0, v.useEffect)(g, x),
    s == null || s.result != null)
  )
    return null;
  let S;
  r[3] !== s.connectorId || r[4] !== s.oauthPresentation || r[5] !== s.productSku
    ? ((S =
        s.oauthPresentation === `popup` || s.productSku != null
          ? { connectorId: s.connectorId, oauthPresentation: s.oauthPresentation, productSku: s.productSku }
          : void 0),
      (r[3] = s.connectorId),
      (r[4] = s.oauthPresentation),
      (r[5] = s.productSku),
      (r[6] = S))
    : (S = r[6]);
  let C = S,
    w,
    T,
    E,
    D,
    O,
    k,
    A,
    j,
    M,
    N,
    P,
    F,
    I,
    L,
    R,
    z,
    B;
  if (
    r[7] !== C ||
    r[8] !== c ||
    r[9] !== s.authReason ||
    r[10] !== s.beforeConnect ||
    r[11] !== s.completing ||
    r[12] !== s.connectorId ||
    r[13] !== s.githubRepositoryAccess ||
    r[14] !== s.homeSuggestion ||
    r[15] !== s.hostId ||
    r[16] !== s.id ||
    r[17] !== s.reauthLinkId ||
    r[18] !== s.requestedScopes ||
    r[19] !== s.requireAuth ||
    r[20] !== s.startOAuth ||
    r[21] !== s.widgetModal ||
    r[22] !== o
  ) {
    T = {
      kind: `mcp-connect-sheet`,
      requestId: s.id,
      homeSuggestion: s.homeSuggestion,
      widgetModal: s.widgetModal,
    };
    let e = `mcp_connect_sheet`;
    (s.homeSuggestion == null ? s.widgetModal != null && (e = `widget`) : (e = `home_suggestion`),
      (w = h),
      (I = e),
      (L = !1),
      (R = C),
      (z = s.connectorId),
      (B = s.requireAuth ? `OAUTH` : void 0),
      (E = !1),
      (D = s.beforeConnect),
      (O = s.reauthLinkId != null),
      (k = s.reauthLinkId),
      r[40] !== s.authReason ||
      r[41] !== s.reauthLinkId ||
      r[42] !== s.requestedScopes ||
      r[43] !== s.startOAuth
        ? ((A =
            s.authReason == null
              ? void 0
              : {
                  authReason: s.authReason,
                  linkId: s.reauthLinkId,
                  requestedScopes: s.requestedScopes,
                  startOAuth: s.startOAuth,
                }),
          (r[40] = s.authReason),
          (r[41] = s.reauthLinkId),
          (r[42] = s.requestedScopes),
          (r[43] = s.startOAuth),
          (r[44] = A))
        : (A = r[44]),
      r[45] !== s.githubRepositoryAccess || r[46] !== s.id || r[47] !== o
        ? ((j =
            s.githubRepositoryAccess == null
              ? void 0
              : {
                  ...s.githubRepositoryAccess,
                  onContinue: () =>
                    void l(o, s.id, {
                      didConnect: !0,
                      linkId: s.githubRepositoryAccess?.linkId,
                      oauthState: s.githubRepositoryAccess?.oauthState,
                    }),
                }),
          (r[45] = s.githubRepositoryAccess),
          (r[46] = s.id),
          (r[47] = o),
          (r[48] = j))
        : (j = r[48]),
      (M = s.hostId),
      (N = s.homeSuggestion?.installAttemptId),
      (P = s.homeSuggestion == null ? void 0 : `elicitation`),
      (F = s.completing != null || c(s.connectorId, T, s.hostId)),
      (r[7] = C),
      (r[8] = c),
      (r[9] = s.authReason),
      (r[10] = s.beforeConnect),
      (r[11] = s.completing),
      (r[12] = s.connectorId),
      (r[13] = s.githubRepositoryAccess),
      (r[14] = s.homeSuggestion),
      (r[15] = s.hostId),
      (r[16] = s.id),
      (r[17] = s.reauthLinkId),
      (r[18] = s.requestedScopes),
      (r[19] = s.requireAuth),
      (r[20] = s.startOAuth),
      (r[21] = s.widgetModal),
      (r[22] = o),
      (r[23] = w),
      (r[24] = T),
      (r[25] = E),
      (r[26] = D),
      (r[27] = O),
      (r[28] = k),
      (r[29] = A),
      (r[30] = j),
      (r[31] = M),
      (r[32] = N),
      (r[33] = P),
      (r[34] = F),
      (r[35] = I),
      (r[36] = L),
      (r[37] = R),
      (r[38] = z),
      (r[39] = B));
  } else
    ((w = r[23]),
      (T = r[24]),
      (E = r[25]),
      (D = r[26]),
      (O = r[27]),
      (k = r[28]),
      (A = r[29]),
      (j = r[30]),
      (M = r[31]),
      (N = r[32]),
      (P = r[33]),
      (F = r[34]),
      (I = r[35]),
      (L = r[36]),
      (R = r[37]),
      (z = r[38]),
      (B = r[39]));
  let V;
  r[49] !== a || r[50] !== s.id || r[51] !== o
    ? ((V = (e) => {
        let t = o.get(d);
        !e && t?.id === s.id && t.result == null && a();
      }),
      (r[49] = a),
      (r[50] = s.id),
      (r[51] = o),
      (r[52] = V))
    : (V = r[52]);
  let H;
  r[53] !== s.id || r[54] !== o
    ? ((H = async (e) => {
        await l(o, s.id, { didConnect: !0, linkId: e });
      }),
      (r[53] = s.id),
      (r[54] = o),
      (r[55] = H))
    : (H = r[55]);
  let U;
  r[56] !== s.homeSuggestion || r[57] !== s.id || r[58] !== s.startOAuth || r[59] !== o
    ? ((U = () => {
        (s.homeSuggestion != null || s.startOAuth != null) && l(o, s.id, { didConnect: !1 }, `fail`);
      }),
      (r[56] = s.homeSuggestion),
      (r[57] = s.id),
      (r[58] = s.startOAuth),
      (r[59] = o),
      (r[60] = U))
    : (U = r[60]);
  let W;
  r[61] !== s.widgetModal?.returnTo || r[62] !== T
    ? ((W = () => ({ resumeTarget: T, returnTo: s.widgetModal?.returnTo ?? `/` })),
      (r[61] = s.widgetModal?.returnTo),
      (r[62] = T),
      (r[63] = W))
    : (W = r[63]);
  let G;
  r[64] !== C ||
  r[65] !== u ||
  r[66] !== f ||
  r[67] !== s.connectorId ||
  r[68] !== s.hostId ||
  r[69] !== s.id ||
  r[70] !== s.oauthPresentation ||
  r[71] !== s.startOAuth ||
  r[72] !== s.widgetModal?.returnTo ||
  r[73] !== o
    ? ((G = (e) => {
        if (
          u({ ...e, hostId: s.hostId, appConnectOptions: C, returnTo: s.widgetModal?.returnTo ?? `/` }) ==
          null
        ) {
          (e.preopenedPopup?.close(), l(o, s.id, { didConnect: !1 }, `fail`));
          return;
        }
      }),
      (r[64] = C),
      (r[65] = u),
      (r[66] = f),
      (r[67] = s.connectorId),
      (r[68] = s.hostId),
      (r[69] = s.id),
      (r[70] = s.oauthPresentation),
      (r[71] = s.startOAuth),
      (r[72] = s.widgetModal?.returnTo),
      (r[73] = o),
      (r[74] = G))
    : (G = r[74]);
  let K;
  return (
    r[75] !== w ||
    r[76] !== E ||
    r[77] !== D ||
    r[78] !== O ||
    r[79] !== k ||
    r[80] !== A ||
    r[81] !== j ||
    r[82] !== M ||
    r[83] !== N ||
    r[84] !== P ||
    r[85] !== F ||
    r[86] !== V ||
    r[87] !== H ||
    r[88] !== U ||
    r[89] !== W ||
    r[90] !== G ||
    r[91] !== I ||
    r[92] !== L ||
    r[93] !== R ||
    r[94] !== z ||
    r[95] !== B
      ? ((K = (0, y.jsx)(w, {
          oauthReferrer: I,
          allowBrowserFallback: L,
          appConnectOptions: R,
          connectorId: z,
          authTypeOverride: B,
          closeOnOAuthStarted: E,
          beforeConnect: D,
          isReconnecting: O,
          reauthLinkId: k,
          connectorAuth: A,
          githubRepositoryAccess: j,
          hostId: M,
          installAttemptId: N,
          postConnectSource: P,
          isCompletingConnection: F,
          onOpenChange: V,
          onConnected: H,
          onConnectFailed: U,
          getOAuthResumeContext: W,
          onOAuthStarted: G,
          waitForConnectedHandler: !0,
        })),
        (r[75] = w),
        (r[76] = E),
        (r[77] = D),
        (r[78] = O),
        (r[79] = k),
        (r[80] = A),
        (r[81] = j),
        (r[82] = M),
        (r[83] = N),
        (r[84] = P),
        (r[85] = F),
        (r[86] = V),
        (r[87] = H),
        (r[88] = U),
        (r[89] = W),
        (r[90] = G),
        (r[91] = I),
        (r[92] = L),
        (r[93] = R),
        (r[94] = z),
        (r[95] = B),
        (r[96] = K))
      : (K = r[96]),
    K
  );
}
var _, v, y;
function b() {
  return (b = e(() => {
    ((_ = a()), r(), (v = c()), m(), f(), o(), u(), (y = s()));
  }))();
}
b();
export { g as McpConnectSheetModal };
//# sourceMappingURL=modal-d924ce0085db.js.map
