const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./task-announcement-candidates-017ccecc082f.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./workspace-renewal-payment-b21a13707fa8.js",
      "./state-2495d1d7742b.js",
      "./workspace-billing-url-a7346df3d700.js",
      "./state-c7fc406c6844.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  F3 as r,
  FBt as i,
  I3 as a,
  LNt as o,
  NSt as s,
  OFt as c,
  PBt as l,
  Qst as u,
  USt as d,
  XOt as f,
  ZSt as p,
  cmt as m,
  iCt as h,
  kFt as g,
  nCt as _,
  sct as v,
  tkt as y,
  vD as b,
  yD as x,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A5n as S,
  ALr as C,
  BRt as w,
  CDr as T,
  Cen as E,
  D5n as D,
  FAn as O,
  FDr as k,
  IAn as A,
  MDr as j,
  Ten as M,
  VRt as N,
  Y9n as P,
  _Cn as F,
  amr as I,
  dRt as L,
  eer as R,
  gCn as ee,
  kLr as te,
  lin as ne,
  oCt as re,
  pRt as ie,
  qrn as ae,
  rCt as oe,
  rmr as se,
  sCt as ce,
  tin as le,
} from "./app-initial-ad16eaadf81f.js";
import {
  D_ as ue,
  E_ as de,
  Fh as fe,
  Gh as pe,
  Hy as me,
  Jy as z,
  Ky as B,
  Ph as he,
  Sg as ge,
  Uy as _e,
  Wh as ve,
  Yy as ye,
  _g as be,
  ag as xe,
  bg as Se,
  cg as Ce,
  fg as we,
  gg as Te,
  hg as V,
  ig as Ee,
  mg as De,
  qy as Oe,
  ug as ke,
  vg as Ae,
  xg as je,
} from "./app-primary-3e00728c2a4c.js";
import { n as Me, t as Ne } from "./usage-a835ee7a0d0b.js";
function Pe(e) {
  let n = (0, H.c)(16),
    { conversationId: r, model: i } = e,
    a = t(u),
    o = A(r),
    s = I(o.hostId),
    c;
  n[0] === o.hostId ? (c = n[1]) : ((c = { hostId: o.hostId }), (n[0] = o.hostId), (n[1] = c));
  let { data: l } = ie(c),
    d;
  n[2] !== o.cwd || n[3] !== o.hostId
    ? ((d = { cwd: o.cwd, hostId: o.hostId }), (n[2] = o.cwd), (n[3] = o.hostId), (n[4] = d))
    : (d = n[4]);
  let { data: f } = _(w, d),
    p = h(W),
    m;
  n[5] !== l?.models || n[6] !== i
    ? ((m = Ae(l?.models, i).some(Fe)), (n[5] = l?.models), (n[6] = i), (n[7] = m))
    : (m = n[7]);
  let g = m,
    v;
  n[8] !== s?.authMethod || n[9] !== f || n[10] !== g
    ? ((v = g ? Te({ authMethod: s?.authMethod, config: f }) : void 0),
      (n[8] = s?.authMethod),
      (n[9] = f),
      (n[10] = g),
      (n[11] = v))
    : (v = n[11]);
  let x = v,
    S;
  return (
    n[12] !== p || n[13] !== x || n[14] !== a
      ? ((S =
          x == null || p !== !1
            ? null
            : (0, U.jsx)(b, {
                ariaLive: `polite`,
                content: (0, U.jsx)(y, {
                  id: `composer.intelligenceDropdown.ultraAgentUsageWarning`,
                  defaultMessage: `Ultra with up to {count} agents can use your usage limits quickly`,
                  description: `Warning above the composer when a ChatGPT-authenticated user has configured many agents and selected Ultra reasoning`,
                  values: { count: x },
                }),
                Icon: me,
                onSecondaryCtaClick: () => {
                  a.set(W, !0);
                },
                role: `status`,
                secondaryCtaText: (0, U.jsx)(y, {
                  id: `composer.intelligenceDropdown.ultraAgentUsageWarning.dismiss`,
                  defaultMessage: `Dismiss`,
                  description: `Button to permanently dismiss the Ultra reasoning and high agent count usage warning`,
                }),
                type: `warning`,
              })),
        (n[12] = p),
        (n[13] = x),
        (n[14] = a),
        (n[15] = S))
      : (S = n[15]),
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
    ((H = l()),
      p(),
      f(),
      N(),
      se(),
      Se(),
      be(),
      x(),
      O(),
      _e(),
      L(),
      n(),
      te(),
      (U = o()),
      (W = C(`ultra-agent-usage-warning-dismissed`, !1)));
  }))();
}
function Ie(e) {
  let n = (0, K.c)(29),
    { state: r } = e,
    i = t(T),
    a;
  n[0] === i ? (a = n[1]) : ((a = j(i)), (n[0] = i), (n[1] = a));
  let o = a,
    s = d(),
    c = A(o),
    l = r.kind === `handoff` && c.cwd != null,
    u;
  n[2] === l ? (u = n[3]) : ((u = { enabled: l }), (n[2] = l), (n[3] = u));
  let { data: f } = xe(c.cwd, c.hostConfig, `local_remote_dropdown`, u),
    p = ce(o),
    h = ke(p),
    { openOperation: g } = re(),
    v = _(P, o),
    y = _(F, o);
  if (
    r.kind === `hidden` ||
    o == null ||
    (r.kind === `handoff` &&
      h != null &&
      !we({
        destinationHostId: r.project.hostId,
        destinationWorkspaceRoot: r.project.remotePath,
        operation: h,
      }))
  )
    return null;
  let b;
  n[4] === i
    ? (b = n[5])
    : ((b = () => {
        i.set(ne, `composer`);
      }),
      (n[4] = i),
      (n[5] = b));
  let x;
  n[6] !== r.hostId || n[7] !== r.kind
    ? ((x = () => {
        M({ hostId: r.kind === `createProject` ? r.hostId : void 0 });
      }),
      (n[6] = r.hostId),
      (n[7] = r.kind),
      (n[8] = x))
    : (x = n[8]);
  let C;
  n[9] !== o ||
  n[10] !== y ||
  n[11] !== f ||
  n[12] !== c.cwd ||
  n[13] !== h ||
  n[14] !== g ||
  n[15] !== i ||
  n[16] !== r.destinationLabel ||
  n[17] !== r.kind ||
  n[18] !== r.project ||
  n[19] !== v
    ? ((C = () => {
        r.kind === `handoff` &&
          c.cwd != null &&
          (S(i, ve, {
            conversationId: o,
            composerViewState: i.get(ae),
            conversationTitle: y,
            currentBranch: f ?? Ce(h, o) ?? v ?? ``,
            cwd: m(c.cwd),
            destinationHostId: r.project.hostId,
            destinationWorkspaceRoot: m(r.project.remotePath),
            destinationLabel: r.destinationLabel,
          }),
          h != null && g(h.id));
      }),
      (n[9] = o),
      (n[10] = y),
      (n[11] = f),
      (n[12] = c.cwd),
      (n[13] = h),
      (n[14] = g),
      (n[15] = i),
      (n[16] = r.destinationLabel),
      (n[17] = r.kind),
      (n[18] = r.project),
      (n[19] = v),
      (n[20] = C))
    : (C = n[20]);
  let w;
  n[21] === s
    ? (w = n[22])
    : ((w = () => {
        s(`/settings/connections/wsl`);
      }),
      (n[21] = s),
      (n[22] = w));
  let E;
  return (
    n[23] !== r || n[24] !== b || n[25] !== x || n[26] !== C || n[27] !== w
      ? ((E = (0, q.jsx)(De, {
          state: r,
          onChooseProject: b,
          onCreateProject: x,
          onHandoff: C,
          onOpenConnections: w,
        })),
        (n[23] = r),
        (n[24] = b),
        (n[25] = x),
        (n[26] = C),
        (n[27] = w),
        (n[28] = E))
      : (E = n[28]),
    E
  );
}
var K, q;
function J() {
  return (J = e(() => {
    ((K = l()), p(), v(), s(), R(), le(), V(), D(), Ee(), O(), ee(), pe(), oe(), E(), k(), (q = o()));
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
    : ((T = r?.showFullAccessWarning ? (0, Z.jsx)(je, {}) : null),
      (t[14] = r?.showFullAccessWarning),
      (t[15] = T));
  let E;
  t[16] === T ? (E = t[17]) : ((E = z(`full-access`, T)), (t[16] = T), (t[17] = E));
  let D;
  t[18] !== u || t[19] !== l
    ? ((D = l == null ? null : (0, Z.jsx)(he, { event: l, onDismiss: u })),
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
    ? ((P = z(`dictation-first-use`, (0, Z.jsx)(de, {}))), (t[31] = P))
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
            ? (0, Z.jsx)(B, { area: `home`, candidates: I, homeCandidates: a })
            : (0, Z.jsx)(X.Suspense, {
                fallback: (0, Z.jsx)(B, {
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
    ((Y = l()),
      (X = i()),
      ge(),
      G(),
      Ne(),
      J(),
      ye(),
      Oe(),
      fe(),
      ue(),
      r(),
      (Z = o()),
      g(),
      (Q = a(
        async () =>
          (
            await c(
              async () => {
                let { TaskAnnouncementCandidates: e } = await import(
                  `./task-announcement-candidates-017ccecc082f.js`
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
//# sourceMappingURL=composer-banners-7538693eb3e2.js.map
