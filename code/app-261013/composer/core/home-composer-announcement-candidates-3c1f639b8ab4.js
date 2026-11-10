const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./worktree-onboarding-banner-controller-862bd861328b.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./worktree-onboarding-state-fdfd237fa3a4.js",
      "./use-codex-worktrees-5b60697f9783.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  Cot as ee,
  Ixt as te,
  Pxt as n,
  Vxt as r,
  fPt as i,
  pPt as a,
  vzt as o,
  wot as s,
  xMt as c,
  yMt as l,
  z4 as u,
} from "./app-shared-bbfeca5e5737.js";
import { FAt as ne, MEt as d, PAt as f, PEt as re } from "./app-initial-5851df3f6cb1.js";
import { c_ as ie, l_ as p } from "./app-primary-fe8a450b3b04.js";
import { n as m, t as ae } from "./chatgpt-home-beacon-announcement-candidates-8578676a5408.js";
import { n as oe, t as h } from "./worktree-onboarding-state-fdfd237fa3a4.js";
import {
  _ as g,
  a as _,
  c as v,
  d as y,
  f as se,
  g as ce,
  h as b,
  i as le,
  l as ue,
  m as de,
  n as x,
  o as fe,
  p as S,
  r as C,
  s as pe,
  t as me,
  u as he,
} from "./entry-points-180a9292a286.js";
import { n as ge, r as w } from "./entry-1f9ea350bb83.js";
import { n as _e, t as T } from "./replay-completions-8e31241101a8.js";
function E(e) {
  let t = (0, D.c)(68),
    {
      CodexAnnouncements: n,
      renderCandidates: i,
      beaconProduct: a,
      entryPoint: o,
      homeRunLocationRemoteProject: s,
      includeGitCheckoutWarning: c,
      shouldHideOnboardingPromos: l,
    } = e,
    u = te(ee),
    d = r(_e),
    f = s != null,
    p = ne(),
    m = !l,
    h;
  t[0] === m ? (h = t[1]) : ((h = { enabled: m }), (t[0] = m), (t[1] = h));
  let g = le(h),
    _ = r(he),
    v = r(ce),
    y = re(void 0, a === `work_tab` ? `work` : o),
    b;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = { enabled: !0 }), (t[2] = b)) : (b = t[2]);
  let x = fe(b),
    S = !l && !g.isEligible && !g.isLoading && !x.isEligible && !x.isLoading,
    C;
  t[3] !== o || t[4] !== f || t[5] !== S
    ? ((C = { enabled: S, entryPoint: o, isLocalModeRemote: f }),
      (t[3] = o),
      (t[4] = f),
      (t[5] = S),
      (t[6] = C))
    : (C = t[6]);
  let w = oe(C),
    T;
  t[7] === w.isEligible
    ? (T = t[8])
    : ((T = w.isEligible ? (0, k.jsx)(A, {}) : null), (t[7] = w.isEligible), (t[8] = T));
  let E;
  t[9] !== T || t[10] !== w.isEligible
    ? ((E = { id: `worktree-onboarding`, isEligible: w.isEligible, isLoading: !1, content: T }),
      (t[9] = T),
      (t[10] = w.isEligible),
      (t[11] = E))
    : (E = t[11]);
  let j = E,
    M = !l && !f && a !== `chatgpt` && _ === `eligible`,
    N = !l && !f && a !== `chatgpt` && _ === `loading`,
    P;
  t[12] === u
    ? (P = t[13])
    : ((P = () => {
        u.set(ue, !0);
      }),
      (t[12] = u),
      (t[13] = P));
  let F;
  t[14] !== p || t[15] !== u
    ? ((F = (e) => {
        (u.set(ue, !0),
          (0, O.flushSync)(() => {
            p.setPromptText(e);
          }),
          p.eventEmitter.emit(`submit`));
      }),
      (t[14] = p),
      (t[15] = u),
      (t[16] = F))
    : (F = t[16]);
  let I;
  t[17] !== P || t[18] !== F
    ? ((I = (0, k.jsx)(se, { onDismiss: P, onViewRecap: F })), (t[17] = P), (t[18] = F), (t[19] = I))
    : (I = t[19]);
  let L;
  t[20] !== I || t[21] !== M || t[22] !== N
    ? ((L = { id: `computer-history`, isEligible: M, isLoading: N, content: I }),
      (t[20] = I),
      (t[21] = M),
      (t[22] = N),
      (t[23] = L))
    : (L = t[23]);
  let R = L,
    z = v !== `ineligible`,
    B;
  t[24] === Symbol.for(`react.memo_cache_sentinel`) ? ((B = (0, k.jsx)(de, {})), (t[24] = B)) : (B = t[24]);
  let V;
  t[25] === z
    ? (V = t[26])
    : ((V = { id: `computer-history-active-reminder`, isEligible: z, isLoading: !1, content: B }),
      (t[25] = z),
      (t[26] = V));
  let H = !l && g.isEligible,
    U = !l && g.isLoading,
    W;
  t[27] !== g.dismiss || t[28] !== g.isEligible || t[29] !== g.openGiftCredits
    ? ((W = g.isEligible
        ? (0, k.jsx)(me, { onDismiss: g.dismiss, onOpenGiftCredits: g.openGiftCredits })
        : null),
      (t[27] = g.dismiss),
      (t[28] = g.isEligible),
      (t[29] = g.openGiftCredits),
      (t[30] = W))
    : (W = t[30]);
  let G;
  t[31] !== H || t[32] !== U || t[33] !== W
    ? ((G = { id: `gift-credits`, isEligible: H, isLoading: U, content: W }),
      (t[31] = H),
      (t[32] = U),
      (t[33] = W),
      (t[34] = G))
    : (G = t[34]);
  let K;
  t[35] !== x.dismiss || t[36] !== x.markShown || t[37] !== x.openImport || t[38] !== x.providerId
    ? ((K = (0, k.jsx)(pe, {
        onDismiss: x.dismiss,
        onImport: x.openImport,
        onShown: x.markShown,
        providerId: x.providerId,
      })),
      (t[35] = x.dismiss),
      (t[36] = x.markShown),
      (t[37] = x.openImport),
      (t[38] = x.providerId),
      (t[39] = K))
    : (K = t[39]);
  let q;
  t[40] !== x.isEligible || t[41] !== x.isLoading || t[42] !== K
    ? ((q = { id: `external-agent-import`, isEligible: x.isEligible, isLoading: x.isLoading, content: K }),
      (t[40] = x.isEligible),
      (t[41] = x.isLoading),
      (t[42] = K),
      (t[43] = q))
    : (q = t[43]);
  let J;
  t[44] === Symbol.for(`react.memo_cache_sentinel`) ? ((J = (0, k.jsx)(ge, {})), (t[44] = J)) : (J = t[44]);
  let Y;
  t[45] === d
    ? (Y = t[46])
    : ((Y = { id: `native-replay-completion`, isEligible: d, isLoading: !1, content: J }),
      (t[45] = d),
      (t[46] = Y));
  let X;
  t[47] !== R || t[48] !== V || t[49] !== G || t[50] !== q || t[51] !== Y || t[52] !== j
    ? ((X = [V, G, q, j, R, Y]),
      (t[47] = R),
      (t[48] = V),
      (t[49] = G),
      (t[50] = q),
      (t[51] = Y),
      (t[52] = j),
      (t[53] = X))
    : (X = t[53]);
  let Z = X,
    Q;
  t[54] === Symbol.for(`react.memo_cache_sentinel`) ? ((Q = (0, k.jsx)(ie, {})), (t[54] = Q)) : (Q = t[54]);
  let ve = Q;
  if (a == null) {
    let e;
    return (
      t[55] !== n || t[56] !== Z || t[57] !== s || t[58] !== c || t[59] !== i || t[60] !== l
        ? ((e = (0, k.jsx)(n, {
            renderCandidates: i,
            composerEntries: Z,
            fallbackContent: ve,
            homeRunLocationRemoteProject: s,
            includeGitCheckoutWarning: c,
            shouldHideOnboardingPromos: l,
          })),
          (t[55] = n),
          (t[56] = Z),
          (t[57] = s),
          (t[58] = c),
          (t[59] = i),
          (t[60] = l),
          (t[61] = e))
        : (e = t[61]),
      e
    );
  }
  let $;
  return (
    t[62] !== a || t[63] !== Z || t[64] !== i || t[65] !== l || t[66] !== y
      ? (($ = (0, k.jsx)(
          ae,
          {
            renderCandidates: i,
            entries: Z,
            fallbackContent: ve,
            product: a,
            shouldHideOnboardingPromos: l,
            startRealtimeVoice: y,
          },
          a,
        )),
        (t[62] = a),
        (t[63] = Z),
        (t[64] = i),
        (t[65] = l),
        (t[66] = y),
        (t[67] = $))
      : ($ = t[67]),
    $
  );
}
var D, O, k, A;
function j() {
  return (j = e(() => {
    ((D = o()),
      n(),
      (O = l()),
      m(),
      p(),
      f(),
      h(),
      b(),
      g(),
      S(),
      y(),
      u(),
      v(),
      _(),
      w(),
      T(),
      x(),
      C(),
      d(),
      s(),
      (k = c()),
      a(),
      (A = t(
        async () =>
          (
            await i(
              async () => {
                let { WorktreeOnboardingBannerController: e } = await import(
                  `./worktree-onboarding-banner-controller-862bd861328b.js`
                );
                return { WorktreeOnboardingBannerController: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
              import.meta.url,
            )
          ).WorktreeOnboardingBannerController,
        { propagateLoadError: !0 },
      )));
  }))();
}
j();
export { E as HomeComposerAnnouncementCandidates };
//# sourceMappingURL=home-composer-announcement-candidates-3c1f639b8ab4.js.map
