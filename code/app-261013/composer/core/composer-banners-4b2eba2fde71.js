const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./task-announcement-candidates-b0d8e84615ff.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./workspace-renewal-payment-a33960e1f2f0.js",
      "./state-255f3b7248c2.js",
      "./workspace-billing-url-f5a0b078d3d4.js",
      "./state-58da6ae39d08.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  Cot as n,
  Ext as r,
  GE as i,
  IDt as a,
  Ixt as o,
  Pxt as s,
  Vxt as c,
  WE as l,
  _xt as u,
  fPt as d,
  jDt as f,
  pPt as p,
  qft as m,
  rst as h,
  vzt as g,
  wot as _,
  xMt as v,
  yzt as y,
  z4 as b,
  zxt as x,
} from "./app-shared-bbfeca5e5737.js";
import {
  Een as S,
  G4n as C,
  HHt as w,
  Hen as T,
  J4n as E,
  Pen as D,
  VHt as O,
  abn as k,
  bEt as A,
  fDn as j,
  fur as M,
  gCr as N,
  gEt as P,
  hHt as F,
  i7t as I,
  iNr as L,
  mur as ee,
  n7t as te,
  obn as ne,
  p8n as re,
  pDn as R,
  pHt as ie,
  rNr as ae,
  sCr as oe,
  v8n as se,
  yCr as ce,
  yEt as le,
} from "./app-initial-5851df3f6cb1.js";
import {
  $h as ue,
  Ah as de,
  Dy as fe,
  Ey as z,
  Sh as pe,
  Ty as me,
  Uh as he,
  Wh as ge,
  Yh as _e,
  Zh as ve,
  ag as ye,
  by as be,
  c_ as xe,
  eg as Se,
  kh as Ce,
  l_ as we,
  ng as Te,
  og as Ee,
  qh as B,
  rg as De,
  sg as Oe,
  tg as ke,
  wy as V,
  xh as Ae,
  xy as je,
} from "./app-primary-fe8a450b3b04.js";
import { n as Me, t as Ne } from "./usage-1fdc4b842956.js";
function Pe(e) {
  let t = (0, H.c)(16),
    { conversationId: r, model: i } = e,
    s = o(n),
    u = R(r),
    d = ee(u.hostId),
    f;
  t[0] === u.hostId ? (f = t[1]) : ((f = { hostId: u.hostId }), (t[0] = u.hostId), (t[1] = f));
  let { data: p } = F(f),
    m;
  t[2] !== u.cwd || t[3] !== u.hostId
    ? ((m = { cwd: u.cwd, hostId: u.hostId }), (t[2] = u.cwd), (t[3] = u.hostId), (t[4] = m))
    : (m = t[4]);
  let { data: h } = x(O, m),
    g = c(W),
    _;
  t[5] !== p?.models || t[6] !== i
    ? ((_ = De(p?.models, i).some(Fe)), (t[5] = p?.models), (t[6] = i), (t[7] = _))
    : (_ = t[7]);
  let v = _,
    y;
  t[8] !== d?.authMethod || t[9] !== h || t[10] !== v
    ? ((y = v ? ke({ authMethod: d?.authMethod, config: h }) : void 0),
      (t[8] = d?.authMethod),
      (t[9] = h),
      (t[10] = v),
      (t[11] = y))
    : (y = t[11]);
  let b = y,
    S;
  return (
    t[12] !== g || t[13] !== b || t[14] !== s
      ? ((S =
          b == null || g !== !1
            ? null
            : (0, U.jsx)(l, {
                ariaLive: `polite`,
                content: (0, U.jsx)(a, {
                  id: `composer.intelligenceDropdown.ultraAgentUsageWarning`,
                  defaultMessage: `Ultra with up to {count} agents can use your usage limits quickly`,
                  description: `Warning above the composer when a ChatGPT-authenticated user has configured many agents and selected Ultra reasoning`,
                  values: { count: b },
                }),
                Icon: be,
                onSecondaryCtaClick: () => {
                  s.set(W, !0);
                },
                role: `status`,
                secondaryCtaText: (0, U.jsx)(a, {
                  id: `composer.intelligenceDropdown.ultraAgentUsageWarning.dismiss`,
                  defaultMessage: `Dismiss`,
                  description: `Button to permanently dismiss the Ultra reasoning and high agent count usage warning`,
                }),
                type: `warning`,
              })),
        (t[12] = g),
        (t[13] = b),
        (t[14] = s),
        (t[15] = S))
      : (S = t[15]),
    S
  );
}
function Fe(e) {
  let { reasoningEffort: t } = e;
  return t === `ultra`;
}
var H, U, W;
function G() {
  return (G = e(() => {
    ((H = g()),
      s(),
      f(),
      w(),
      M(),
      ye(),
      Te(),
      i(),
      j(),
      je(),
      ie(),
      _(),
      ae(),
      (U = v()),
      (W = L(`ultra-agent-usage-warning-dismissed`, !1)));
  }))();
}
function Ie(e) {
  let t = (0, K.c)(29),
    { state: n } = e,
    i = o(oe),
    a;
  t[0] === i ? (a = t[1]) : ((a = N(i)), (t[0] = i), (t[1] = a));
  let s = a,
    c = r(),
    l = R(s),
    u = n.kind === `handoff` && l.cwd != null,
    d;
  t[2] === u ? (d = t[3]) : ((d = { enabled: u }), (t[2] = u), (t[3] = d));
  let { data: f } = ge(l.cwd, l.hostConfig, `local_remote_dropdown`, d),
    p = A(s),
    h = _e(p),
    { openOperation: g } = le(),
    _ = x(re, s),
    v = x(ne, s);
  if (
    n.kind === `hidden` ||
    s == null ||
    (n.kind === `handoff` &&
      h != null &&
      !ve({
        destinationHostId: n.project.hostId,
        destinationWorkspaceRoot: n.project.remotePath,
        operation: h,
      }))
  )
    return null;
  let y;
  t[4] === i
    ? (y = t[5])
    : ((y = () => {
        i.set(T, `composer`);
      }),
      (t[4] = i),
      (t[5] = y));
  let b;
  t[6] !== n.hostId || t[7] !== n.kind
    ? ((b = () => {
        I({ hostId: n.kind === `createProject` ? n.hostId : void 0 });
      }),
      (t[6] = n.hostId),
      (t[7] = n.kind),
      (t[8] = b))
    : (b = t[8]);
  let C;
  t[9] !== s ||
  t[10] !== v ||
  t[11] !== f ||
  t[12] !== l.cwd ||
  t[13] !== h ||
  t[14] !== g ||
  t[15] !== i ||
  t[16] !== n.destinationLabel ||
  t[17] !== n.kind ||
  t[18] !== n.project ||
  t[19] !== _
    ? ((C = () => {
        n.kind === `handoff` &&
          l.cwd != null &&
          (E(i, Ce, {
            conversationId: s,
            composerViewState: i.get(S),
            conversationTitle: v,
            currentBranch: f ?? B(h, s) ?? _ ?? ``,
            cwd: m(l.cwd),
            destinationHostId: n.project.hostId,
            destinationWorkspaceRoot: m(n.project.remotePath),
            destinationLabel: n.destinationLabel,
          }),
          h != null && g(h.id));
      }),
      (t[9] = s),
      (t[10] = v),
      (t[11] = f),
      (t[12] = l.cwd),
      (t[13] = h),
      (t[14] = g),
      (t[15] = i),
      (t[16] = n.destinationLabel),
      (t[17] = n.kind),
      (t[18] = n.project),
      (t[19] = _),
      (t[20] = C))
    : (C = t[20]);
  let w;
  t[21] === c
    ? (w = t[22])
    : ((w = () => {
        c(`/settings/connections/wsl`);
      }),
      (t[21] = c),
      (t[22] = w));
  let D;
  return (
    t[23] !== n || t[24] !== y || t[25] !== b || t[26] !== C || t[27] !== w
      ? ((D = (0, q.jsx)(ue, {
          state: n,
          onChooseProject: y,
          onCreateProject: b,
          onHandoff: C,
          onOpenConnections: w,
        })),
        (t[23] = n),
        (t[24] = y),
        (t[25] = b),
        (t[26] = C),
        (t[27] = w),
        (t[28] = D))
      : (D = t[28]),
    D
  );
}
var K, q;
function J() {
  return (J = e(() => {
    ((K = g()), s(), h(), u(), se(), D(), Se(), C(), he(), j(), k(), de(), P(), te(), ce(), (q = v()));
  }))();
}
function Le(e) {
  let t = (0, Y.c)(47),
    {
      conversationId: n,
      environmentBanners: r,
      hostId: i,
      homeComposerBanners: a,
      latestTurnId: o,
      misalignmentPolicyViolationBanner: s,
      safetyBufferingBanner: c,
      safetyEvent: l,
      onDismissSafetyEvent: u,
      showUltraWarning: d,
      ultraWarningModel: f,
      usageBannerProps: p,
    } = e,
    m;
  t[0] !== i || t[1] !== p ? ((m = { ...p, hostId: i }), (t[0] = i), (t[1] = p), (t[2] = m)) : (m = t[2]);
  let h = Me(m),
    g;
  t[3] === r?.legacyWslState
    ? (g = t[4])
    : ((g = r?.legacyWslState ?? { kind: `hidden` }), (t[3] = r?.legacyWslState), (t[4] = g));
  let _;
  t[5] === g ? (_ = t[6]) : ((_ = { state: g }), (t[5] = g), (t[6] = _));
  let v = Ie(_),
    y = f ?? ``,
    b;
  t[7] !== n || t[8] !== y
    ? ((b = { conversationId: n, model: y }), (t[7] = n), (t[8] = y), (t[9] = b))
    : (b = t[9]);
  let x = Pe(b),
    S = r?.windowsSandboxWarnings,
    C;
  t[10] === S ? (C = t[11]) : ((C = z(`windows-sandbox`, S)), (t[10] = S), (t[11] = C));
  let w;
  t[12] === v ? (w = t[13]) : ((w = z(`wsl-migration`, v)), (t[12] = v), (t[13] = w));
  let T;
  t[14] === r?.showFullAccessWarning
    ? (T = t[15])
    : ((T = r?.showFullAccessWarning ? (0, Z.jsx)(Ee, {}) : null),
      (t[14] = r?.showFullAccessWarning),
      (t[15] = T));
  let E;
  t[16] === T ? (E = t[17]) : ((E = z(`full-access`, T)), (t[16] = T), (t[17] = E));
  let D;
  t[18] !== u || t[19] !== l
    ? ((D = l == null ? null : (0, Z.jsx)(Ae, { event: l, onDismiss: u })),
      (t[18] = u),
      (t[19] = l),
      (t[20] = D))
    : (D = t[20]);
  let O;
  t[21] === D ? (O = t[22]) : ((O = z(`cyber-safety`, D)), (t[21] = D), (t[22] = O));
  let k;
  t[23] === h ? (k = t[24]) : ((k = z(`codex-usage`, h)), (t[23] = h), (t[24] = k));
  let A = d && f != null ? x : null,
    j;
  t[25] === A ? (j = t[26]) : ((j = z(`ultra-usage`, A)), (t[25] = A), (t[26] = j));
  let M;
  t[27] === s ? (M = t[28]) : ((M = z(`misalignment-policy`, s)), (t[27] = s), (t[28] = M));
  let N;
  t[29] === c ? (N = t[30]) : ((N = z(`safety-buffering`, c)), (t[29] = c), (t[30] = N));
  let P;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = z(`dictation-first-use`, (0, Z.jsx)(xe, {}))), (t[31] = P))
    : (P = t[31]);
  let F;
  t[32] !== E ||
  t[33] !== O ||
  t[34] !== k ||
  t[35] !== j ||
  t[36] !== M ||
  t[37] !== N ||
  t[38] !== C ||
  t[39] !== w
    ? ((F = [C, w, E, O, k, j, M, N, P]),
      (t[32] = E),
      (t[33] = O),
      (t[34] = k),
      (t[35] = j),
      (t[36] = M),
      (t[37] = N),
      (t[38] = C),
      (t[39] = w),
      (t[40] = F))
    : (F = t[40]);
  let I = F,
    L;
  return (
    t[41] !== I || t[42] !== n || t[43] !== a || t[44] !== i || t[45] !== o
      ? ((L =
          n == null
            ? (0, Z.jsx)(V, { area: `home`, candidates: I, homeCandidates: a })
            : (0, Z.jsx)(X.Suspense, {
                fallback: (0, Z.jsx)(V, {
                  area: `task`,
                  candidates: [
                    ...I,
                    { id: `workspace-renewal-payment`, isEligible: !1, isLoading: !0, content: null },
                  ],
                }),
                children: (0, Z.jsx)(Q, { conversationId: n, hostId: i, turnId: o, candidates: I }),
              })),
        (t[41] = I),
        (t[42] = n),
        (t[43] = a),
        (t[44] = i),
        (t[45] = o),
        (t[46] = L))
      : (L = t[46]),
    L
  );
}
var Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((Y = g()),
      (X = y()),
      Oe(),
      G(),
      Ne(),
      J(),
      fe(),
      me(),
      pe(),
      we(),
      b(),
      (Z = v()),
      p(),
      (Q = t(
        async () =>
          (
            await d(
              async () => {
                let { TaskAnnouncementCandidates: e } = await import(
                  `./task-announcement-candidates-b0d8e84615ff.js`
                );
                return { TaskAnnouncementCandidates: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
              import.meta.url,
            )
          ).TaskAnnouncementCandidates,
        { suspendToParent: !0, propagateLoadError: !0 },
      )));
  }))();
}
$();
export { Le as ComposerBanners };
//# sourceMappingURL=composer-banners-4b2eba2fde71.js.map
