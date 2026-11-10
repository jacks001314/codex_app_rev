const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./worktree-onboarding-banner-controller-6caa5afd321b.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./worktree-onboarding-state-971393c21530.js",
      "./use-codex-worktrees-d20378991919.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as ee,
  $st as t,
  F3 as n,
  FNt as r,
  I3 as i,
  LNt as a,
  OFt as o,
  PBt as s,
  Qst as te,
  ZSt as c,
  iCt as l,
  kFt as u,
} from "./app-shared-2feb3d4c6fcc.js";
import { _Dt as d, vDt as ne, xCt as re, yCt as f } from "./app-initial-ad16eaadf81f.js";
import { D_ as p, E_ as ie } from "./app-primary-3e00728c2a4c.js";
import { n as m, t as ae } from "./chatgpt-home-beacon-announcement-candidates-df2ece330c1e.js";
import { n as oe, t as h } from "./worktree-onboarding-state-971393c21530.js";
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
} from "./entry-points-6246194bc82c.js";
import { n as ge, r as w } from "./entry-8f3751bad575.js";
import { n as _e, t as T } from "./replay-completions-4dff28cc3f62.js";
function E(e) {
  let t = (0, D.c)(68),
    {
      CodexAnnouncements: n,
      renderCandidates: r,
      beaconProduct: i,
      entryPoint: a,
      homeRunLocationRemoteProject: o,
      includeGitCheckoutWarning: s,
      shouldHideOnboardingPromos: c,
    } = e,
    u = ee(te),
    d = l(_e),
    f = o != null,
    p = ne(),
    m = !c,
    h;
  t[0] === m ? (h = t[1]) : ((h = { enabled: m }), (t[0] = m), (t[1] = h));
  let g = le(h),
    _ = l(he),
    v = l(ce),
    y = re(void 0, i === `work_tab` ? `work` : a),
    b;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = { enabled: !0 }), (t[2] = b)) : (b = t[2]);
  let x = fe(b),
    S = !c && !g.isEligible && !g.isLoading && !x.isEligible && !x.isLoading,
    C;
  t[3] !== a || t[4] !== f || t[5] !== S
    ? ((C = { enabled: S, entryPoint: a, isLocalModeRemote: f }),
      (t[3] = a),
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
    M = !c && !f && i !== `chatgpt` && _ === `eligible`,
    N = !c && !f && i !== `chatgpt` && _ === `loading`,
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
  let H = !c && g.isEligible,
    U = !c && g.isLoading,
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
  if (i == null) {
    let e;
    return (
      t[55] !== n || t[56] !== Z || t[57] !== o || t[58] !== s || t[59] !== r || t[60] !== c
        ? ((e = (0, k.jsx)(n, {
            renderCandidates: r,
            composerEntries: Z,
            fallbackContent: ve,
            homeRunLocationRemoteProject: o,
            includeGitCheckoutWarning: s,
            shouldHideOnboardingPromos: c,
          })),
          (t[55] = n),
          (t[56] = Z),
          (t[57] = o),
          (t[58] = s),
          (t[59] = r),
          (t[60] = c),
          (t[61] = e))
        : (e = t[61]),
      e
    );
  }
  let $;
  return (
    t[62] !== i || t[63] !== Z || t[64] !== r || t[65] !== c || t[66] !== y
      ? (($ = (0, k.jsx)(
          ae,
          {
            renderCandidates: r,
            entries: Z,
            fallbackContent: ve,
            product: i,
            shouldHideOnboardingPromos: c,
            startRealtimeVoice: y,
          },
          i,
        )),
        (t[62] = i),
        (t[63] = Z),
        (t[64] = r),
        (t[65] = c),
        (t[66] = y),
        (t[67] = $))
      : ($ = t[67]),
    $
  );
}
var D, O, k, A;
function j() {
  return (j = e(() => {
    ((D = s()),
      c(),
      (O = r()),
      m(),
      p(),
      d(),
      h(),
      b(),
      g(),
      S(),
      y(),
      n(),
      v(),
      _(),
      w(),
      T(),
      x(),
      C(),
      f(),
      t(),
      (k = a()),
      u(),
      (A = i(
        async () =>
          (
            await o(
              async () => {
                let { WorktreeOnboardingBannerController: e } = await import(
                  `./worktree-onboarding-banner-controller-6caa5afd321b.js`
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
//# sourceMappingURL=home-composer-announcement-candidates-7e8d5f998dd1.js.map
