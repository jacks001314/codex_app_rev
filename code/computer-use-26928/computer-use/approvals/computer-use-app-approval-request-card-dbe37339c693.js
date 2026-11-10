import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  A5t as t,
  CKt as n,
  EE as r,
  F5t as i,
  Gnt as a,
  LLt as o,
  O5t as s,
  RMt as c,
  TE as l,
  TKt as u,
  Wnt as d,
  Wrn as f,
  Yrn as p,
  _dn as m,
  dJt as h,
  ein as g,
  fJt as _,
  lJt as v,
  mcn as y,
  nQ as b,
  rQ as x,
  uJt as S,
  vdn as C,
} from "./app-shared-7552fc8d5d82.js";
var w;
function T() {
  return (T = e(() => {
    w = `` + new URL(`computer-use-plugin-icon-5eae5ff78888.png`, import.meta.url).href;
  }))();
}
function E(e) {
  let r = (0, D.c)(42),
    {
      ApprovalCard: s,
      conversationId: c,
      hostId: u,
      onRequestSettled: d,
      request: f,
      requestId: m,
    } = e,
    _ = t(h),
    y = g(),
    x = i(b) ?? n(`has-approved-computer-use-app`, !1),
    S;
  r[0] !== c || r[1] !== u || r[2] !== m
    ? ((S = JSON.stringify([u, c, m])), (r[0] = c), (r[1] = u), (r[2] = m), (r[3] = S))
    : (S = r[3]);
  let C = S,
    T = (0, O.useRef)(null),
    [E, A] = (0, O.useState)(null),
    j = f.riskLevel === `high`,
    M;
  r[4] !== x || r[5] !== y || r[6] !== f.subtitle
    ? ((M =
        [
          x === !1
            ? y.formatMessage({
                id: `composer.computerUseAppApproval.disclosure`,
                defaultMessage: `Computer Use lets ChatGPT use apps on your computer. It may take screenshots of app contents while working. You can choose which apps ChatGPT can access, stop actions at any time, and control whether screenshots are used for training.`,
                description: `First-use disclosure explaining native Computer Use app access, screenshot capture, and user controls, shown until the user approves an app`,
              })
            : void 0,
          f.subtitle,
        ].filter(Boolean).join(`

`) || void 0),
      (r[4] = x),
      (r[5] = y),
      (r[6] = f.subtitle),
      (r[7] = M))
    : (M = r[7]);
  let N = M,
    P;
  r[8] !== c || r[9] !== u || r[10] !== d || r[11] !== m || r[12] !== C || r[13] !== _
    ? ((P = (e, t) => {
        let n = t === void 0 ? null : t;
        T.current !== C &&
          ((T.current = C),
          A(C),
          e === `accept` && _.set(b, !0),
          v(_, u)
            .replyWithMcpServerElicitationResponse(
              c,
              m,
              o(e, e === `accept` && n != null ? { persist: n } : null),
            )
            .then(
              () => d(e),
              () => {
                T.current === C && ((T.current = null), A(null));
              },
            ));
      }),
      (r[8] = c),
      (r[9] = u),
      (r[10] = d),
      (r[11] = m),
      (r[12] = C),
      (r[13] = _),
      (r[14] = P))
    : (P = r[14]);
  let F = P,
    I;
  r[15] !== j || r[16] !== f.connectorName
    ? ((I = j
        ? (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsx)(l, { className: `shrink-0 text-warning`, "aria-hidden": !1, asset: a }),
              (0, k.jsx)(`span`, {
                className: `font-medium text-warning`,
                children: (0, k.jsx)(p, {
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
              (0, k.jsx)(`span`, { children: f.connectorName }),
            ],
          })),
      (r[15] = j),
      (r[16] = f.connectorName),
      (r[17] = I))
    : (I = r[17]);
  let L;
  r[18] === f.appDisplayName
    ? (L = r[19])
    : ((L = (0, k.jsx)(p, {
        id: `composer.computerUseAppApproval.title.chatgpt`,
        defaultMessage: `Allow ChatGPT to use {appDisplayName}?`,
        description: `Title asking whether ChatGPT may use an app through Computer Use`,
        values: { appDisplayName: f.appDisplayName },
      })),
      (r[18] = f.appDisplayName),
      (r[19] = L));
  let R;
  r[20] === N
    ? (R = r[21])
    : ((R = N && (0, k.jsx)(`span`, { className: `whitespace-pre-line`, children: N })),
      (r[20] = N),
      (r[21] = R));
  let z = E === C,
    B;
  r[22] !== F || r[23] !== f.persistModes
    ? ((B = f.persistModes.includes(`always`)
        ? {
            label: (0, k.jsx)(p, {
              id: `composer.computerUseAppApproval.action.alwaysApprove`,
              defaultMessage: `Always allow`,
              description: `Button label for always approving Computer Use access to an app`,
            }),
            onClick: () => F(`accept`, `always`),
          }
        : void 0),
      (r[22] = F),
      (r[23] = f.persistModes),
      (r[24] = B))
    : (B = r[24]);
  let V;
  r[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, k.jsx)(p, {
        id: `composer.computerUseAppApproval.action.approve`,
        defaultMessage: `Allow this conversation`,
        description: `Primary action label for approving Computer Use access to an app`,
      })),
      (r[25] = V))
    : (V = r[25]);
  let H;
  r[26] !== F || r[27] !== f.persistModes
    ? ((H = () => {
        F(`accept`, f.persistModes.includes(`session`) ? `session` : null);
      }),
      (r[26] = F),
      (r[27] = f.persistModes),
      (r[28] = H))
    : (H = r[28]);
  let U;
  r[29] === F
    ? (U = r[30])
    : ((U = () => {
        F(`decline`);
      }),
      (r[29] = F),
      (r[30] = U));
  let W;
  r[31] !== H || r[32] !== U || r[33] !== z || r[34] !== B
    ? ((W = { isLoading: z, leadingAction: B, approveLabel: V, onApprove: H, onDeny: U }),
      (r[31] = H),
      (r[32] = U),
      (r[33] = z),
      (r[34] = B),
      (r[35] = W))
    : (W = r[35]);
  let G;
  return (
    r[36] !== s || r[37] !== W || r[38] !== I || r[39] !== L || r[40] !== R
      ? ((G = (0, k.jsx)(s, { headerContent: I, title: L, subtitle: R, actions: W })),
        (r[36] = s),
        (r[37] = W),
        (r[38] = I),
        (r[39] = L),
        (r[40] = R),
        (r[41] = G))
      : (G = r[41]),
    G
  );
}
var D, O, k;
function A() {
  return (A = e(() => {
    ((D = m()), d(), s(), c(), (O = C()), f(), S(), T(), r(), _(), u(), x(), (k = y()));
  }))();
}
export { T as i, A as n, w as r, E as t };
//# sourceMappingURL=computer-use-app-approval-request-card-dbe37339c693.js.map
