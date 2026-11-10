import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  DB as r,
  FBt as i,
  LNt as a,
  MZ as o,
  OB as s,
  PBt as c,
  Qst as l,
  XOt as u,
  ZSt as d,
  iCt as f,
  jZ as p,
  okt as m,
  tkt as h,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  FBr as g,
  IBr as _,
  ILr as v,
  LLr as y,
  Uv as b,
  Wv as x,
  lSr as S,
  wEr as C,
} from "./app-initial-ad16eaadf81f.js";
var w;
function T() {
  return (T = e(() => {
    w = `` + new URL(`computer-use-plugin-icon-5eae5ff78888.png`, import.meta.url).href;
  }))();
}
function E(e) {
  let n = (0, D.c)(42),
    { ApprovalCard: i, conversationId: a, hostId: s, onRequestSettled: c, request: u, requestId: d } = e,
    p = t(l),
    _ = m(),
    y = f(b) ?? v(`has-approved-computer-use-app`, !1),
    x;
  n[0] !== a || n[1] !== s || n[2] !== d
    ? ((x = JSON.stringify([s, a, d])), (n[0] = a), (n[1] = s), (n[2] = d), (n[3] = x))
    : (x = n[3]);
  let S = x,
    T = (0, O.useRef)(null),
    [E, A] = (0, O.useState)(null),
    j = u.riskLevel === `high`,
    M;
  n[4] !== y || n[5] !== _ || n[6] !== u.subtitle
    ? ((M =
        [
          y === !1
            ? _.formatMessage({
                id: `composer.computerUseAppApproval.disclosure`,
                defaultMessage: `Computer Use lets ChatGPT use apps on your computer. It may take screenshots of app contents while working. You can choose which apps ChatGPT can access, stop actions at any time, and control whether screenshots are used for training.`,
                description: `First-use disclosure explaining native Computer Use app access, screenshot capture, and user controls, shown until the user approves an app`,
              })
            : void 0,
          u.subtitle,
        ].filter(Boolean).join(`

`) || void 0),
      (n[4] = y),
      (n[5] = _),
      (n[6] = u.subtitle),
      (n[7] = M))
    : (M = n[7]);
  let N = M,
    P;
  n[8] !== a || n[9] !== s || n[10] !== c || n[11] !== d || n[12] !== S || n[13] !== p
    ? ((P = (e, t) => {
        let n = t === void 0 ? null : t;
        T.current !== S &&
          ((T.current = S),
          A(S),
          e === `accept` && p.set(b, !0),
          g(p, s)
            .replyWithMcpServerElicitationResponse(
              a,
              d,
              C(e, e === `accept` && n != null ? { persist: n } : null),
            )
            .then(
              () => c(e),
              () => {
                T.current === S && ((T.current = null), A(null));
              },
            ));
      }),
      (n[8] = a),
      (n[9] = s),
      (n[10] = c),
      (n[11] = d),
      (n[12] = S),
      (n[13] = p),
      (n[14] = P))
    : (P = n[14]);
  let F = P,
    I;
  n[15] !== j || n[16] !== u.connectorName
    ? ((I = j
        ? (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsx)(r, { className: `shrink-0 text-warning`, "aria-hidden": !1, asset: o }),
              (0, k.jsx)(`span`, {
                className: `font-medium text-warning`,
                children: (0, k.jsx)(h, {
                  id: `composer.mcpToolCallApproval.elevatedRiskLabel`,
                  defaultMessage: `Elevated Risk`,
                  description: `Header label for elevated-risk MCP approval requests`,
                }),
              }),
            ],
          })
        : (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsx)(`img`, {
                alt: ``,
                className: `icon-sm rounded-[3px] object-contain`,
                draggable: !1,
                src: w,
              }),
              (0, k.jsx)(`span`, { children: u.connectorName }),
            ],
          })),
      (n[15] = j),
      (n[16] = u.connectorName),
      (n[17] = I))
    : (I = n[17]);
  let L;
  n[18] === u.appDisplayName
    ? (L = n[19])
    : ((L = (0, k.jsx)(h, {
        id: `composer.computerUseAppApproval.title.chatgpt`,
        defaultMessage: `Allow ChatGPT to use {appDisplayName}?`,
        description: `Title asking whether ChatGPT may use an app through Computer Use`,
        values: { appDisplayName: u.appDisplayName },
      })),
      (n[18] = u.appDisplayName),
      (n[19] = L));
  let R;
  n[20] === N
    ? (R = n[21])
    : ((R = N && (0, k.jsx)(`span`, { className: `whitespace-pre-line`, children: N })),
      (n[20] = N),
      (n[21] = R));
  let z = E === S,
    B;
  n[22] !== F || n[23] !== u.persistModes
    ? ((B = u.persistModes.includes(`always`)
        ? {
            label: (0, k.jsx)(h, {
              id: `composer.computerUseAppApproval.action.alwaysApprove`,
              defaultMessage: `Always allow`,
              description: `Button label for always approving Computer Use access to an app`,
            }),
            onClick: () => F(`accept`, `always`),
          }
        : void 0),
      (n[22] = F),
      (n[23] = u.persistModes),
      (n[24] = B))
    : (B = n[24]);
  let V;
  n[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, k.jsx)(h, {
        id: `composer.computerUseAppApproval.action.approve`,
        defaultMessage: `Allow this conversation`,
        description: `Primary action label for approving Computer Use access to an app`,
      })),
      (n[25] = V))
    : (V = n[25]);
  let H;
  n[26] !== F || n[27] !== u.persistModes
    ? ((H = () => {
        F(`accept`, u.persistModes.includes(`session`) ? `session` : null);
      }),
      (n[26] = F),
      (n[27] = u.persistModes),
      (n[28] = H))
    : (H = n[28]);
  let U;
  n[29] === F
    ? (U = n[30])
    : ((U = () => {
        F(`decline`);
      }),
      (n[29] = F),
      (n[30] = U));
  let W;
  n[31] !== H || n[32] !== U || n[33] !== z || n[34] !== B
    ? ((W = { isLoading: z, leadingAction: B, approveLabel: V, onApprove: H, onDeny: U }),
      (n[31] = H),
      (n[32] = U),
      (n[33] = z),
      (n[34] = B),
      (n[35] = W))
    : (W = n[35]);
  let G;
  return (
    n[36] !== i || n[37] !== W || n[38] !== I || n[39] !== L || n[40] !== R
      ? ((G = (0, k.jsx)(i, { headerContent: I, title: L, subtitle: R, actions: W })),
        (n[36] = i),
        (n[37] = W),
        (n[38] = I),
        (n[39] = L),
        (n[40] = R),
        (n[41] = G))
      : (G = n[41]),
    G
  );
}
var D, O, k;
function A() {
  return (A = e(() => {
    ((D = c()), p(), d(), S(), (O = i()), u(), _(), T(), s(), n(), y(), x(), (k = a()));
  }))();
}
export { T as i, A as n, w as r, E as t };
//# sourceMappingURL=computer-use-app-approval-request-card-11ed89d8962b.js.map
