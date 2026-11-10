import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  LNt as i,
  PBt as a,
  Qst as o,
  ZSt as s,
  iCt as c,
} from "./app-shared-2feb3d4c6fcc.js";
import { DMn as l, OMn as u, _5n as d, v5n as f, y5n as p } from "./app-initial-ad16eaadf81f.js";
import { n as m, t as h } from "./app-connect-modal-by-id-ee9e7bc8d7c4.js";
function g(e) {
  let n = (0, _.c)(97),
    { onClose: r } = e,
    i = t(o),
    a = c(p),
    { isAppConnectPending: s, markAppConnectOAuthPending: l, openPendingAppConnectPopup: f } = u(),
    m = (0, v.useRef)(null),
    g;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = () => () => m.current?.()), (n[0] = g))
    : (g = n[0]);
  let b = a?.id,
    x;
  if (
    (n[1] === b ? (x = n[2]) : ((x = [b]), (n[1] = b), (n[2] = x)),
    (0, v.useEffect)(g, x),
    a == null || a.result != null)
  )
    return null;
  let S;
  n[3] !== a.connectorId || n[4] !== a.oauthPresentation || n[5] !== a.productSku
    ? ((S =
        a.oauthPresentation === `popup` || a.productSku != null
          ? { connectorId: a.connectorId, oauthPresentation: a.oauthPresentation, productSku: a.productSku }
          : void 0),
      (n[3] = a.connectorId),
      (n[4] = a.oauthPresentation),
      (n[5] = a.productSku),
      (n[6] = S))
    : (S = n[6]);
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
    n[7] !== C ||
    n[8] !== s ||
    n[9] !== a.authReason ||
    n[10] !== a.beforeConnect ||
    n[11] !== a.completing ||
    n[12] !== a.connectorId ||
    n[13] !== a.githubRepositoryAccess ||
    n[14] !== a.homeSuggestion ||
    n[15] !== a.hostId ||
    n[16] !== a.id ||
    n[17] !== a.reauthLinkId ||
    n[18] !== a.requestedScopes ||
    n[19] !== a.requireAuth ||
    n[20] !== a.startOAuth ||
    n[21] !== a.widgetModal ||
    n[22] !== i
  ) {
    T = {
      kind: `mcp-connect-sheet`,
      requestId: a.id,
      homeSuggestion: a.homeSuggestion,
      widgetModal: a.widgetModal,
    };
    let e = `mcp_connect_sheet`;
    (a.homeSuggestion == null ? a.widgetModal != null && (e = `widget`) : (e = `home_suggestion`),
      (w = h),
      (I = e),
      (L = !1),
      (R = C),
      (z = a.connectorId),
      (B = a.requireAuth ? `OAUTH` : void 0),
      (E = !1),
      (D = a.beforeConnect),
      (O = a.reauthLinkId != null),
      (k = a.reauthLinkId),
      n[40] !== a.authReason ||
      n[41] !== a.reauthLinkId ||
      n[42] !== a.requestedScopes ||
      n[43] !== a.startOAuth
        ? ((A =
            a.authReason == null
              ? void 0
              : {
                  authReason: a.authReason,
                  linkId: a.reauthLinkId,
                  requestedScopes: a.requestedScopes,
                  startOAuth: a.startOAuth,
                }),
          (n[40] = a.authReason),
          (n[41] = a.reauthLinkId),
          (n[42] = a.requestedScopes),
          (n[43] = a.startOAuth),
          (n[44] = A))
        : (A = n[44]),
      n[45] !== a.githubRepositoryAccess || n[46] !== a.id || n[47] !== i
        ? ((j =
            a.githubRepositoryAccess == null
              ? void 0
              : {
                  ...a.githubRepositoryAccess,
                  onContinue: () =>
                    void d(i, a.id, {
                      didConnect: !0,
                      linkId: a.githubRepositoryAccess?.linkId,
                      oauthState: a.githubRepositoryAccess?.oauthState,
                    }),
                }),
          (n[45] = a.githubRepositoryAccess),
          (n[46] = a.id),
          (n[47] = i),
          (n[48] = j))
        : (j = n[48]),
      (M = a.hostId),
      (N = a.homeSuggestion?.installAttemptId),
      (P = a.homeSuggestion == null ? void 0 : `elicitation`),
      (F = a.completing != null || s(a.connectorId, T, a.hostId)),
      (n[7] = C),
      (n[8] = s),
      (n[9] = a.authReason),
      (n[10] = a.beforeConnect),
      (n[11] = a.completing),
      (n[12] = a.connectorId),
      (n[13] = a.githubRepositoryAccess),
      (n[14] = a.homeSuggestion),
      (n[15] = a.hostId),
      (n[16] = a.id),
      (n[17] = a.reauthLinkId),
      (n[18] = a.requestedScopes),
      (n[19] = a.requireAuth),
      (n[20] = a.startOAuth),
      (n[21] = a.widgetModal),
      (n[22] = i),
      (n[23] = w),
      (n[24] = T),
      (n[25] = E),
      (n[26] = D),
      (n[27] = O),
      (n[28] = k),
      (n[29] = A),
      (n[30] = j),
      (n[31] = M),
      (n[32] = N),
      (n[33] = P),
      (n[34] = F),
      (n[35] = I),
      (n[36] = L),
      (n[37] = R),
      (n[38] = z),
      (n[39] = B));
  } else
    ((w = n[23]),
      (T = n[24]),
      (E = n[25]),
      (D = n[26]),
      (O = n[27]),
      (k = n[28]),
      (A = n[29]),
      (j = n[30]),
      (M = n[31]),
      (N = n[32]),
      (P = n[33]),
      (F = n[34]),
      (I = n[35]),
      (L = n[36]),
      (R = n[37]),
      (z = n[38]),
      (B = n[39]));
  let V;
  n[49] !== r || n[50] !== a.id || n[51] !== i
    ? ((V = (e) => {
        let t = i.get(p);
        !e && t?.id === a.id && t.result == null && r();
      }),
      (n[49] = r),
      (n[50] = a.id),
      (n[51] = i),
      (n[52] = V))
    : (V = n[52]);
  let H;
  n[53] !== a.id || n[54] !== i
    ? ((H = async (e) => {
        await d(i, a.id, { didConnect: !0, linkId: e });
      }),
      (n[53] = a.id),
      (n[54] = i),
      (n[55] = H))
    : (H = n[55]);
  let U;
  n[56] !== a.homeSuggestion || n[57] !== a.id || n[58] !== a.startOAuth || n[59] !== i
    ? ((U = () => {
        (a.homeSuggestion != null || a.startOAuth != null) && d(i, a.id, { didConnect: !1 }, `fail`);
      }),
      (n[56] = a.homeSuggestion),
      (n[57] = a.id),
      (n[58] = a.startOAuth),
      (n[59] = i),
      (n[60] = U))
    : (U = n[60]);
  let W;
  n[61] !== a.widgetModal?.returnTo || n[62] !== T
    ? ((W = () => ({ resumeTarget: T, returnTo: a.widgetModal?.returnTo ?? `/` })),
      (n[61] = a.widgetModal?.returnTo),
      (n[62] = T),
      (n[63] = W))
    : (W = n[63]);
  let G;
  n[64] !== C ||
  n[65] !== l ||
  n[66] !== f ||
  n[67] !== a.connectorId ||
  n[68] !== a.hostId ||
  n[69] !== a.id ||
  n[70] !== a.oauthPresentation ||
  n[71] !== a.startOAuth ||
  n[72] !== a.widgetModal?.returnTo ||
  n[73] !== i
    ? ((G = (e) => {
        if (
          l({ ...e, hostId: a.hostId, appConnectOptions: C, returnTo: a.widgetModal?.returnTo ?? `/` }) ==
          null
        ) {
          (e.preopenedPopup?.close(), d(i, a.id, { didConnect: !1 }, `fail`));
          return;
        }
      }),
      (n[64] = C),
      (n[65] = l),
      (n[66] = f),
      (n[67] = a.connectorId),
      (n[68] = a.hostId),
      (n[69] = a.id),
      (n[70] = a.oauthPresentation),
      (n[71] = a.startOAuth),
      (n[72] = a.widgetModal?.returnTo),
      (n[73] = i),
      (n[74] = G))
    : (G = n[74]);
  let K;
  return (
    n[75] !== w ||
    n[76] !== E ||
    n[77] !== D ||
    n[78] !== O ||
    n[79] !== k ||
    n[80] !== A ||
    n[81] !== j ||
    n[82] !== M ||
    n[83] !== N ||
    n[84] !== P ||
    n[85] !== F ||
    n[86] !== V ||
    n[87] !== H ||
    n[88] !== U ||
    n[89] !== W ||
    n[90] !== G ||
    n[91] !== I ||
    n[92] !== L ||
    n[93] !== R ||
    n[94] !== z ||
    n[95] !== B
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
        (n[75] = w),
        (n[76] = E),
        (n[77] = D),
        (n[78] = O),
        (n[79] = k),
        (n[80] = A),
        (n[81] = j),
        (n[82] = M),
        (n[83] = N),
        (n[84] = P),
        (n[85] = F),
        (n[86] = V),
        (n[87] = H),
        (n[88] = U),
        (n[89] = W),
        (n[90] = G),
        (n[91] = I),
        (n[92] = L),
        (n[93] = R),
        (n[94] = z),
        (n[95] = B),
        (n[96] = K))
      : (K = n[96]),
    K
  );
}
var _, v, y;
function b() {
  return (b = e(() => {
    ((_ = a()), s(), (v = r()), m(), l(), n(), f(), (y = i()));
  }))();
}
b();
export { g as McpConnectSheetModal };
//# sourceMappingURL=modal-ed38b5109c8e.js.map
