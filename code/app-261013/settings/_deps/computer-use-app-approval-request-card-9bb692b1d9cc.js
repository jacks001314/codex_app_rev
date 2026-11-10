import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AX as t,
  Cot as n,
  IDt as r,
  Ixt as i,
  Mz as a,
  Nz as o,
  Pxt as s,
  VDt as c,
  Vxt as l,
  jDt as u,
  kX as d,
  vzt as f,
  wot as p,
  xMt as m,
  yzt as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  XPr as g,
  YPr as _,
  _v as v,
  bFr as y,
  gv as b,
  iSr as x,
  svr as S,
  xFr as C,
} from "./app-initial-5851df3f6cb1.js";
var w;
function T() {
  return (T = e(() => {
    w = `` + new URL(`computer-use-plugin-icon-5eae5ff78888.png`, import.meta.url).href;
  }))();
}
function E(e) {
  let o = (0, D.c)(42),
    { ApprovalCard: s, conversationId: u, hostId: d, onRequestSettled: f, request: p, requestId: m } = e,
    h = i(n),
    g = c(),
    v = l(b) ?? y(`has-approved-computer-use-app`, !1),
    S;
  o[0] !== u || o[1] !== d || o[2] !== m
    ? ((S = JSON.stringify([d, u, m])), (o[0] = u), (o[1] = d), (o[2] = m), (o[3] = S))
    : (S = o[3]);
  let C = S,
    T = (0, O.useRef)(null),
    [E, A] = (0, O.useState)(null),
    j = p.riskLevel === `high`,
    M;
  o[4] !== v || o[5] !== g || o[6] !== p.subtitle
    ? ((M =
        [
          v === !1
            ? g.formatMessage({
                id: `composer.computerUseAppApproval.disclosure`,
                defaultMessage: `Computer Use lets ChatGPT use apps on your computer. It may take screenshots of app contents while working. You can choose which apps ChatGPT can access, stop actions at any time, and control whether screenshots are used for training.`,
                description: `First-use disclosure explaining native Computer Use app access, screenshot capture, and user controls, shown until the user approves an app`,
              })
            : void 0,
          p.subtitle,
        ].filter(Boolean).join(`

`) || void 0),
      (o[4] = v),
      (o[5] = g),
      (o[6] = p.subtitle),
      (o[7] = M))
    : (M = o[7]);
  let N = M,
    P;
  o[8] !== u || o[9] !== d || o[10] !== f || o[11] !== m || o[12] !== C || o[13] !== h
    ? ((P = (e, t) => {
        let n = t === void 0 ? null : t;
        T.current !== C &&
          ((T.current = C),
          A(C),
          e === `accept` && h.set(b, !0),
          _(h, d)
            .replyWithMcpServerElicitationResponse(
              u,
              m,
              x(e, e === `accept` && n != null ? { persist: n } : null),
            )
            .then(
              () => f(e),
              () => {
                T.current === C && ((T.current = null), A(null));
              },
            ));
      }),
      (o[8] = u),
      (o[9] = d),
      (o[10] = f),
      (o[11] = m),
      (o[12] = C),
      (o[13] = h),
      (o[14] = P))
    : (P = o[14]);
  let F = P,
    I;
  o[15] !== j || o[16] !== p.connectorName
    ? ((I = j
        ? (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsx)(a, { className: `shrink-0 text-warning`, "aria-hidden": !1, asset: t }),
              (0, k.jsx)(`span`, {
                className: `font-medium text-warning`,
                children: (0, k.jsx)(r, {
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
              (0, k.jsx)(`span`, { children: p.connectorName }),
            ],
          })),
      (o[15] = j),
      (o[16] = p.connectorName),
      (o[17] = I))
    : (I = o[17]);
  let L;
  o[18] === p.appDisplayName
    ? (L = o[19])
    : ((L = (0, k.jsx)(r, {
        id: `composer.computerUseAppApproval.title.chatgpt`,
        defaultMessage: `Allow ChatGPT to use {appDisplayName}?`,
        description: `Title asking whether ChatGPT may use an app through Computer Use`,
        values: { appDisplayName: p.appDisplayName },
      })),
      (o[18] = p.appDisplayName),
      (o[19] = L));
  let R;
  o[20] === N
    ? (R = o[21])
    : ((R = N && (0, k.jsx)(`span`, { className: `whitespace-pre-line`, children: N })),
      (o[20] = N),
      (o[21] = R));
  let z = E === C,
    B;
  o[22] !== F || o[23] !== p.persistModes
    ? ((B = p.persistModes.includes(`always`)
        ? {
            label: (0, k.jsx)(r, {
              id: `composer.computerUseAppApproval.action.alwaysApprove`,
              defaultMessage: `Always allow`,
              description: `Button label for always approving Computer Use access to an app`,
            }),
            onClick: () => F(`accept`, `always`),
          }
        : void 0),
      (o[22] = F),
      (o[23] = p.persistModes),
      (o[24] = B))
    : (B = o[24]);
  let V;
  o[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, k.jsx)(r, {
        id: `composer.computerUseAppApproval.action.approve`,
        defaultMessage: `Allow this conversation`,
        description: `Primary action label for approving Computer Use access to an app`,
      })),
      (o[25] = V))
    : (V = o[25]);
  let H;
  o[26] !== F || o[27] !== p.persistModes
    ? ((H = () => {
        F(`accept`, p.persistModes.includes(`session`) ? `session` : null);
      }),
      (o[26] = F),
      (o[27] = p.persistModes),
      (o[28] = H))
    : (H = o[28]);
  let U;
  o[29] === F
    ? (U = o[30])
    : ((U = () => {
        F(`decline`);
      }),
      (o[29] = F),
      (o[30] = U));
  let W;
  o[31] !== H || o[32] !== U || o[33] !== z || o[34] !== B
    ? ((W = { isLoading: z, leadingAction: B, approveLabel: V, onApprove: H, onDeny: U }),
      (o[31] = H),
      (o[32] = U),
      (o[33] = z),
      (o[34] = B),
      (o[35] = W))
    : (W = o[35]);
  let G;
  return (
    o[36] !== s || o[37] !== W || o[38] !== I || o[39] !== L || o[40] !== R
      ? ((G = (0, k.jsx)(s, { headerContent: I, title: L, subtitle: R, actions: W })),
        (o[36] = s),
        (o[37] = W),
        (o[38] = I),
        (o[39] = L),
        (o[40] = R),
        (o[41] = G))
      : (G = o[41]),
    G
  );
}
var D, O, k;
function A() {
  return (A = e(() => {
    ((D = f()), d(), s(), S(), (O = h()), u(), g(), T(), o(), p(), C(), v(), (k = m()));
  }))();
}
export { T as i, A as n, w as r, E as t };
//# sourceMappingURL=computer-use-app-approval-request-card-9bb692b1d9cc.js.map
