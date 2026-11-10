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
  Cot as n,
  Ixt as r,
  Pxt as i,
  Vxt as a,
  _Mt as o,
  _xt as s,
  fPt as c,
  gMt as l,
  pPt as u,
  vzt as d,
  wot as f,
  wxt as p,
  xMt as m,
  yMt as h,
  yzt as g,
  z4 as _,
  zxt as v,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Zt as y,
  CQt as b,
  FAt as x,
  MEt as S,
  NPr as C,
  OPr as w,
  PAt as T,
  PEt as E,
  QTn as D,
  RQt as O,
  S6n as k,
  UQt as A,
  WQt as j,
  aQt as M,
  b6n as N,
  e$t as P,
  fur as F,
  hEr as I,
  iQt as L,
  kEr as R,
  lEn as z,
  lIr as B,
  oQt as V,
  pur as ee,
  sQt as H,
  tEn as te,
  vEr as ne,
  wQt as U,
} from "./app-initial-5851df3f6cb1.js";
import {
  Ag as W,
  Df as G,
  Dg as K,
  Eg as q,
  Tf as J,
  Tg as re,
  Uy as ie,
  Vy as Y,
  _b as X,
  a_ as ae,
  e_ as oe,
  gb as se,
  i_ as ce,
  kg as le,
  o_ as ue,
  qy as de,
  s_ as fe,
  t_ as pe,
  wf as me,
  wg as he,
  xg as ge,
} from "./app-primary-fe8a450b3b04.js";
import {
  _ as _e,
  a as ve,
  b as ye,
  c as be,
  d as xe,
  f as Se,
  g as Ce,
  h as we,
  i as Te,
  l as Ee,
  m as De,
  n as Oe,
  o as ke,
  p as Ae,
  r as je,
  s as Me,
  t as Ne,
  u as Pe,
  v as Fe,
  y as Ie,
} from "./home-announcement-state-b5c69702eb91.js";
import { r as Le, t as Re } from "./codex-app-home-beacon-announcement-2b935397f978.js";
import { n as ze, r as Be } from "./banner-50cb6ed564d4.js";
import { n as Ve, t as He } from "./worktree-onboarding-state-fdfd237fa3a4.js";
import {
  _ as Ue,
  a as We,
  c as Ge,
  d as Ke,
  f as qe,
  g as Je,
  h as Ye,
  i as Xe,
  l as Ze,
  m as Qe,
  n as $e,
  o as et,
  p as tt,
  r as nt,
  s as rt,
  t as it,
  u as at,
} from "./entry-points-180a9292a286.js";
import { n as ot, r as st } from "./entry-1f9ea350bb83.js";
import { n as ct, t as lt } from "./replay-completions-8e31241101a8.js";
import { n as ut, t as dt } from "./codex-announcement-slot-7089c67f0d4e.js";
function ft(e) {
  let t = (0, gt.c)(49),
    { announcementKey: n, entries: r, product: i, shouldHideOnboardingPromos: o, startRealtimeVoice: s } = e,
    c = x(),
    l = ee(),
    { userId: u, accountId: d } = l,
    f = p(),
    { pathname: m } = f,
    h;
  t[0] !== d || t[1] !== u ? ((h = le(u, d)), (t[0] = d), (t[1] = u), (t[2] = h)) : (h = t[2]);
  let g = v(q, h),
    _ = a(I),
    S = a(W),
    C;
  t[3] !== d || t[4] !== S || t[5] !== m || t[6] !== u
    ? ((C = !1), (t[3] = d), (t[4] = S), (t[5] = m), (t[6] = u), (t[7] = C))
    : (C = t[7]);
  let w = C,
    T = (0, _t.useContext)(oe),
    E;
  t[8] !== l || t[9] !== _ || t[10] !== f || t[11] !== w || t[12] !== g
    ? ((E = w || re({ auth: l, location: f, homeComposerMode: _, trialStatus: g })),
      (t[8] = l),
      (t[9] = _),
      (t[10] = f),
      (t[11] = w),
      (t[12] = g),
      (t[13] = E))
    : (E = t[13]);
  let D = E,
    k = T?.composerSelectionContext,
    A = !D,
    j;
  t[14] === c
    ? (j = t[15])
    : ((j = () => c.getText().trim().length > 0 && c.view.hasFocus()), (t[14] = c), (t[15] = j));
  let N;
  t[16] !== k || t[17] !== A || t[18] !== j
    ? ((N = { composerSelectionContext: k, clientContextReady: A, shouldSuppressFocusedModal: j }),
      (t[16] = k),
      (t[17] = A),
      (t[18] = j),
      (t[19] = N))
    : (N = t[19]);
  let P = de(i, N),
    F,
    R,
    z,
    B;
  if (
    t[20] !== n ||
    t[21] !== P.accountId ||
    t[22] !== P.beacon ||
    t[23] !== P.isEligible ||
    t[24] !== P.isLoading ||
    t[25] !== P.shouldSuppressVanillaPromos ||
    t[26] !== T?.actionOverrides ||
    t[27] !== T?.allowExternalActions ||
    t[28] !== T?.allowRemoteImages ||
    t[29] !== T?.getActionOverride ||
    t[30] !== c ||
    t[31] !== D ||
    t[32] !== r ||
    t[33] !== i ||
    t[34] !== o ||
    t[35] !== s
  ) {
    let e = `homepage`,
      a = `home-chat`;
    i === `codex`
      ? ((e = `codex_home`), (a = `home-codex`))
      : i === `work_tab` && ((e = `work_tab_home`), (a = `home-work`));
    let l = D || P.shouldSuppressVanillaPromos ? r.map(ht) : r,
      u = (t) =>
        D || P.accountId == null || P.beacon == null || X(P.beacon)
          ? null
          : (0, Z.jsx)(Re, {
              onModalOpen: t,
              accountId: P.accountId,
              actionAccountId: P.accountId,
              actionOverrides: T?.actionOverrides,
              allowExternalActions: T?.allowExternalActions,
              allowRemoteImages: T?.allowRemoteImages,
              analyticsContext: {
                placement: e,
                productExperience: i === `work_tab` ? `work` : `chat`,
                treatment: b(P.beacon),
              },
              beacon: P.beacon,
              getActionOverride: T?.getActionOverride,
              onComposerText: (e) => {
                (c.focus(), c.setText(e));
              },
              onStartVoice:
                s == null
                  ? void 0
                  : () => {
                      s();
                    },
            }),
      d = {
        pageContextClaim: O.HomeBeacon,
        content: u(),
        isEligible: !D && (!o || P.beacon?.custom_fields?.show_after_onboarding === !0) && P.isEligible,
        isLoading: !D && (!o || P.beacon?.custom_fields?.show_after_onboarding === !0) && P.isLoading,
      },
      f;
    t[40] === P.beacon
      ? (f = t[41])
      : ((f = P.beacon != null && (y(P.beacon) || X(P.beacon) || M(P.beacon) || L(P.beacon))),
        (t[40] = P.beacon),
        (t[41] = f));
    let p = f;
    ((R = (0, Z.jsx)(ce, {
      source: a,
      candidate: {
        id: `home-beacon:${i}:${P.beacon?.beacon_id ?? `loading`}`,
        status: ue({ isEligible: d.isEligible && !p, isLoading: d.isLoading }),
        waitsForPresentation: !0,
        render: u,
      },
    })),
      (F = me),
      (z = n),
      (B = [
        ...l.filter(mt),
        {
          ...d,
          content: p ? d.content : null,
          isEligible: d.isEligible && p,
          isLoading: D || d.isLoading || (d.isEligible && !p),
        },
        ...l.filter(pt),
      ]),
      (t[20] = n),
      (t[21] = P.accountId),
      (t[22] = P.beacon),
      (t[23] = P.isEligible),
      (t[24] = P.isLoading),
      (t[25] = P.shouldSuppressVanillaPromos),
      (t[26] = T?.actionOverrides),
      (t[27] = T?.allowExternalActions),
      (t[28] = T?.allowRemoteImages),
      (t[29] = T?.getActionOverride),
      (t[30] = c),
      (t[31] = D),
      (t[32] = r),
      (t[33] = i),
      (t[34] = o),
      (t[35] = s),
      (t[36] = F),
      (t[37] = R),
      (t[38] = z),
      (t[39] = B));
  } else ((F = t[36]), (R = t[37]), (z = t[38]), (B = t[39]));
  let V;
  t[42] !== F || t[43] !== z || t[44] !== B
    ? ((V = (0, Z.jsx)(F, { entries: B, trackVisibility: !1 }, z)),
      (t[42] = F),
      (t[43] = z),
      (t[44] = B),
      (t[45] = V))
    : (V = t[45]);
  let H;
  return (
    t[46] !== R || t[47] !== V
      ? ((H = (0, Z.jsxs)(Z.Fragment, { children: [R, V] })), (t[46] = R), (t[47] = V), (t[48] = H))
      : (H = t[48]),
    H
  );
}
function pt(e) {
  return e.id !== `computer-history-active-reminder`;
}
function mt(e) {
  return e.id === `computer-history-active-reminder`;
}
function ht(e) {
  return e.id === `computer-history-active-reminder` ? e : { ...e, isEligible: !1, isLoading: !1 };
}
var gt, _t, Z;
function vt() {
  return (vt = e(() => {
    ((gt = d()),
      i(),
      (_t = g()),
      s(),
      ae(),
      fe(),
      J(),
      F(),
      U(),
      se(),
      pe(),
      Le(),
      ie(),
      ne(),
      T(),
      he(),
      K(),
      j(),
      (Z = m()));
  }))();
}
function yt(e) {
  let t = (0, xt.c)(66),
    { beaconProduct: i, entryPoint: o, isLocalModeRemote: s, shouldHideOnboardingPromos: c } = e,
    l = r(n),
    u = a(ct),
    d = x(),
    f = a(A),
    p = !f && !c,
    m;
  t[0] === p ? (m = t[1]) : ((m = { enabled: p }), (t[0] = p), (t[1] = m));
  let h = Xe(m),
    g = a(at),
    _ = a(Je),
    v = E(void 0, i === `work_tab` ? `work` : o),
    y = !f,
    b;
  t[2] === y ? (b = t[3]) : ((b = { enabled: y }), (t[2] = y), (t[3] = b));
  let S = et(b),
    C = !f && !c && !h.isEligible && !h.isLoading && !S.isEligible && !S.isLoading,
    w;
  t[4] !== o || t[5] !== s || t[6] !== C
    ? ((w = { enabled: C, entryPoint: o, isLocalModeRemote: s }),
      (t[4] = o),
      (t[5] = s),
      (t[6] = C),
      (t[7] = w))
    : (w = t[7]);
  let T = Ve(w);
  if (f) return null;
  let D;
  t[8] === T.isEligible
    ? (D = t[9])
    : ((D = T.isEligible ? (0, Q.jsx)(Ct, {}) : null), (t[8] = T.isEligible), (t[9] = D));
  let O;
  t[10] !== D || t[11] !== T.isEligible
    ? ((O = { isEligible: T.isEligible, isLoading: !1, content: D }),
      (t[10] = D),
      (t[11] = T.isEligible),
      (t[12] = O))
    : (O = t[12]);
  let k = O,
    j = !c && !s && i !== `chatgpt` && g === `eligible`,
    M = !c && !s && i !== `chatgpt` && g === `loading`,
    N;
  t[13] === l
    ? (N = t[14])
    : ((N = () => {
        l.set(Ze, !0);
      }),
      (t[13] = l),
      (t[14] = N));
  let P;
  t[15] !== d || t[16] !== l
    ? ((P = (e) => {
        (l.set(Ze, !0),
          (0, St.flushSync)(() => {
            d.setPromptText(e);
          }),
          d.eventEmitter.emit(`submit`));
      }),
      (t[15] = d),
      (t[16] = l),
      (t[17] = P))
    : (P = t[17]);
  let F;
  t[18] !== N || t[19] !== P
    ? ((F = (0, Q.jsx)(qe, { onDismiss: N, onViewRecap: P })), (t[18] = N), (t[19] = P), (t[20] = F))
    : (F = t[20]);
  let I;
  t[21] !== M || t[22] !== F || t[23] !== j
    ? ((I = { isEligible: j, isLoading: M, content: F }), (t[21] = M), (t[22] = F), (t[23] = j), (t[24] = I))
    : (I = t[24]);
  let L = I,
    R = _ !== `ineligible`,
    z;
  t[25] === Symbol.for(`react.memo_cache_sentinel`) ? ((z = (0, Q.jsx)(Qe, {})), (t[25] = z)) : (z = t[25]);
  let B;
  t[26] === R
    ? (B = t[27])
    : ((B = { id: `computer-history-active-reminder`, isEligible: R, isLoading: !1, content: z }),
      (t[26] = R),
      (t[27] = B));
  let V = B,
    ee;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, Q.jsx)(ot, {})), (t[28] = ee))
    : (ee = t[28]);
  let H;
  t[29] === u
    ? (H = t[30])
    : ((H = { id: `native-replay-completion`, isEligible: u, isLoading: !1, content: ee }),
      (t[29] = u),
      (t[30] = H));
  let te = !c && h.isEligible,
    ne = !c && h.isLoading,
    U;
  t[31] !== h.dismiss || t[32] !== h.isEligible || t[33] !== h.openGiftCredits
    ? ((U = h.isEligible
        ? (0, Q.jsx)(it, { onDismiss: h.dismiss, onOpenGiftCredits: h.openGiftCredits })
        : null),
      (t[31] = h.dismiss),
      (t[32] = h.isEligible),
      (t[33] = h.openGiftCredits),
      (t[34] = U))
    : (U = t[34]);
  let W;
  t[35] !== te || t[36] !== ne || t[37] !== U
    ? ((W = { isEligible: te, isLoading: ne, content: U }),
      (t[35] = te),
      (t[36] = ne),
      (t[37] = U),
      (t[38] = W))
    : (W = t[38]);
  let G;
  t[39] !== S.dismiss || t[40] !== S.markShown || t[41] !== S.openImport || t[42] !== S.providerId
    ? ((G = (0, Q.jsx)(rt, {
        onDismiss: S.dismiss,
        onImport: S.openImport,
        onShown: S.markShown,
        providerId: S.providerId,
      })),
      (t[39] = S.dismiss),
      (t[40] = S.markShown),
      (t[41] = S.openImport),
      (t[42] = S.providerId),
      (t[43] = G))
    : (G = t[43]);
  let K;
  t[44] !== S.isEligible || t[45] !== S.isLoading || t[46] !== G
    ? ((K = { isEligible: S.isEligible, isLoading: S.isLoading, content: G }),
      (t[44] = S.isEligible),
      (t[45] = S.isLoading),
      (t[46] = G),
      (t[47] = K))
    : (K = t[47]);
  let q;
  t[48] !== L || t[49] !== V || t[50] !== H || t[51] !== W || t[52] !== K || t[53] !== k
    ? ((q = [V, H, W, K, k, L]),
      (t[48] = L),
      (t[49] = V),
      (t[50] = H),
      (t[51] = W),
      (t[52] = K),
      (t[53] = k),
      (t[54] = q))
    : (q = t[54]);
  let J = q,
    re;
  t[55] === J ? (re = t[56]) : ((re = J.find(bt)), (t[55] = J), (t[56] = re));
  let ie = re,
    Y = ie?.id ?? `default`;
  if ((ie === k ? (Y = `worktree`) : ie === L && (Y = `computer-history-weekly-insights`), i == null)) {
    let e;
    return (
      t[57] !== J || t[58] !== Y
        ? ((e = (0, Q.jsx)(me, { entries: J, trackVisibility: !1 }, Y)),
          (t[57] = J),
          (t[58] = Y),
          (t[59] = e))
        : (e = t[59]),
      e
    );
  }
  let X;
  return (
    t[60] !== i || t[61] !== J || t[62] !== Y || t[63] !== c || t[64] !== v
      ? ((X = (0, Q.jsx)(
          ft,
          {
            announcementKey: Y,
            entries: J,
            product: i,
            shouldHideOnboardingPromos: c,
            startRealtimeVoice: v,
          },
          i,
        )),
        (t[60] = i),
        (t[61] = J),
        (t[62] = Y),
        (t[63] = c),
        (t[64] = v),
        (t[65] = X))
      : (X = t[65]),
    X
  );
}
function bt(e) {
  return e.isEligible || e.isLoading;
}
var xt, St, Q, Ct;
function wt() {
  return (wt = e(() => {
    ((xt = d()),
      i(),
      (St = h()),
      J(),
      vt(),
      T(),
      He(),
      Ye(),
      Ue(),
      tt(),
      Ke(),
      _(),
      Ge(),
      We(),
      st(),
      lt(),
      $e(),
      nt(),
      j(),
      S(),
      f(),
      (Q = m()),
      u(),
      (Ct = t(
        async () =>
          (
            await c(
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
function Tt(e) {
  let t = (0, kt.c)(15),
    {
      entryPoint: n,
      hasSeparateCodexAnnouncements: r,
      homeComposerMode: i,
      isLocalModeRemote: o,
      selectedCustomGptId: s,
    } = e,
    c = o !== void 0 && o,
    u = (0, At.useContext)(N),
    d = p(),
    f = a(D) ?? !1,
    m;
  t[0] !== f || t[1] !== d.pathname
    ? ((m = z({ hideFirstNewThreadOnboardingPromos: f, pathname: d.pathname })),
      (t[0] = f),
      (t[1] = d.pathname),
      (t[2] = m))
    : (m = t[2]);
  let h = m,
    g;
  i === `chat` ? (g = `chatgpt`) : i === `work` && (g = `work_tab`);
  let _;
  t[3] !== n || t[4] !== s
    ? ((_ = s == null ? null : (0, $.jsx)(ze, { entryPoint: n, gizmoId: s })),
      (t[3] = n),
      (t[4] = s),
      (t[5] = _))
    : (_ = t[5]);
  let v;
  t[6] !== g || t[7] !== n || t[8] !== c || t[9] !== u || t[10] !== h
    ? ((v =
        u === "default"
          ? (0, $.jsxs)(`div`, {
              className: l(
                `not-has-[>:not([hidden])]:hidden`,
                n === `codex` &&
                  `electron:mx-[var(--home-composer-inline-inset)] electron:has-[[data-home-beacon-banner]]:mx-0`,
              ),
              children: [
                null,
                (0, $.jsx)($.Fragment, {
                  children: (0, $.jsx)(yt, {
                    beaconProduct: g,
                    entryPoint: n,
                    isLocalModeRemote: c,
                    shouldHideOnboardingPromos: h,
                  }),
                }),
              ],
            })
          : null),
      (t[6] = g),
      (t[7] = n),
      (t[8] = c),
      (t[9] = u),
      (t[10] = h),
      (t[11] = v))
    : (v = t[11]);
  let y;
  return (
    t[12] !== _ || t[13] !== v
      ? ((y = (0, $.jsxs)($.Fragment, { children: [_, v] })), (t[12] = _), (t[13] = v), (t[14] = y))
      : (y = t[14]),
    y
  );
}
function Et(e) {
  let t = (0, kt.c)(7),
    { homeRunLocationRemoteProject: n, includeGitCheckoutWarning: r } = e,
    i = n === void 0 ? null : n,
    o = r === void 0 || r,
    s = p(),
    c = a(D) ?? !1,
    l;
  t[0] !== c || t[1] !== s.pathname
    ? ((l = z({ hideFirstNewThreadOnboardingPromos: c, pathname: s.pathname })),
      (t[0] = c),
      (t[1] = s.pathname),
      (t[2] = l))
    : (l = t[2]);
  let u = l,
    d;
  return (
    t[3] !== i || t[4] !== o || t[5] !== u
      ? ((d = (0, $.jsxs)($.Fragment, {
          children: [
            null,
            (0, $.jsx)($.Fragment, {
              children: (0, $.jsx)(Dt, {
                homeRunLocationRemoteProject: i,
                includeGitCheckoutWarning: o,
                shouldHideOnboardingPromos: u,
              }),
            }),
            null,
          ],
        })),
        (t[3] = i),
        (t[4] = o),
        (t[5] = u),
        (t[6] = d))
      : (d = t[6]),
    d
  );
}
function Dt(e) {
  let t = (0, kt.c)(65),
    { homeRunLocationRemoteProject: i, includeGitCheckoutWarning: o, shouldHideOnboardingPromos: s } = e,
    c = r(n),
    l = Oe(),
    u = a(Je),
    d = _e(),
    f = a(we),
    p = a(C),
    m;
  t[0] !== d.estimatedSavedMs ||
  t[1] !== d.isEligible ||
  t[2] !== d.isSubmitting ||
  t[3] !== d.threadCount ||
  t[4] !== f
    ? ((m = f
        ? {
            codex_fast_mode_eligible: d.isEligible || d.isSubmitting,
            codex_fast_mode_saved_ms: d.estimatedSavedMs ?? void 0,
            codex_fast_mode_thread_count: d.threadCount ?? void 0,
          }
        : void 0),
      (t[0] = d.estimatedSavedMs),
      (t[1] = d.isEligible),
      (t[2] = d.isSubmitting),
      (t[3] = d.threadCount),
      (t[4] = f),
      (t[5] = m))
    : (m = t[5]);
  let h = !p && (!f || d.isBeaconContextReady),
    g;
  t[6] !== m || t[7] !== h
    ? ((g = { clientContext: m, clientContextReady: h }), (t[6] = m), (t[7] = h), (t[8] = g))
    : (g = t[8]);
  let _ = de(`codex`, g),
    v = E(void 0, `codex`),
    y = Pe(),
    x = !_.shouldSuppressVanillaPromos,
    S;
  t[9] !== _.accountId || t[10] !== _.beacon || t[11] !== d || t[12] !== f || t[13] !== c || t[14] !== v
    ? ((S = (e) =>
        _.beacon != null && _.accountId != null
          ? (0, $.jsx)(Re, {
              onModalOpen: e,
              accountId: _.accountId,
              actionAccountId: _.accountId,
              actionOverrides:
                f && (d.isEligible || d.isSubmitting) ? { enable_codex_fast_mode: d.enableFastMode } : void 0,
              analyticsContext: {
                placement: `codex_home`,
                productExperience: `chat`,
                treatment: b(_.beacon),
              },
              beacon: _.beacon,
              onDismiss: () => {
                (_.beacon?.beacon_id === `codex_fast_mode_home_banner` && d.dismissFastMode(),
                  _.beacon != null && _.accountId != null && Y(c, _.accountId, _.beacon));
              },
              onStartVoice: v == null ? void 0 : () => void v(),
            })
          : null),
      (t[9] = _.accountId),
      (t[10] = _.beacon),
      (t[11] = d),
      (t[12] = f),
      (t[13] = c),
      (t[14] = v),
      (t[15] = S))
    : (S = t[15]);
  let w = S,
    T = (!s || _.beacon?.custom_fields?.show_after_onboarding === !0) && _.isEligible,
    D = (!s || _.beacon?.custom_fields?.show_after_onboarding === !0) && _.isLoading,
    k,
    A,
    j,
    M,
    N,
    P;
  if (
    t[16] !== _.beacon ||
    t[17] !== u ||
    t[18] !== d ||
    t[19] !== f ||
    t[20] !== y.hasLoggedViewRef ||
    t[21] !== y.isEligible ||
    t[22] !== y.isError ||
    t[23] !== y.isLoading ||
    t[24] !== l.availableCount ||
    t[25] !== l.dismiss ||
    t[26] !== l.isEligible ||
    t[27] !== l.isLoading ||
    t[28] !== w ||
    t[29] !== s ||
    t[30] !== x ||
    t[31] !== T ||
    t[32] !== D
  ) {
    let e = { isEligible: T, isLoading: D, pageContextClaim: O.HomeBeacon, content: w() },
      n;
    t[39] === _.beacon
      ? (n = t[40])
      : ((n = _.beacon != null && (V(_.beacon) || H(_.beacon))), (t[39] = _.beacon), (t[40] = n));
    let r = n,
      i;
    (t[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(Qe, {})), (t[41] = i))
      : (i = t[41]),
      (A = {
        id: `computer-history-active-reminder`,
        isEligible: u !== `ineligible`,
        isLoading: !1,
        content: i,
      }));
    let a;
    t[42] !== l.availableCount || t[43] !== l.dismiss
      ? ((a = (0, $.jsx)(je, { availableCount: l.availableCount, onDismiss: l.dismiss })),
        (t[42] = l.availableCount),
        (t[43] = l.dismiss),
        (t[44] = a))
      : (a = t[44]);
    let o;
    t[45] === y.hasLoggedViewRef
      ? (o = t[46])
      : ((o = (0, $.jsx)(Me, { hasLoggedViewRef: y.hasLoggedViewRef })),
        (t[45] = y.hasLoggedViewRef),
        (t[46] = o));
    let c;
    (t[47] === d
      ? (c = t[48])
      : ((c = d.content == null ? null : (0, $.jsx)(Fe, { ...d })), (t[47] = d), (t[48] = c)),
      (j = [
        { isEligible: l.isEligible, isLoading: l.isLoading, content: a },
        A,
        {
          ...e,
          content: r ? null : e.content,
          isEligible: e.isEligible && !r,
          isLoading: e.isLoading || (e.isEligible && r),
        },
        {
          isEligible: !s && x && y.isEligible,
          isLoading: !s && x && y.isLoading,
          isError: !s && x && y.isError,
          content: o,
        },
        { isEligible: !s && x && !f && d.isEligible, isLoading: !s && x && !f && d.isLoading, content: c },
      ]),
      (k = ce),
      (P = `home-codex`),
      (M = `home-beacon:codex:${_.beacon?.beacon_id ?? `loading`}`),
      (N = ue({ isEligible: e.isEligible && r, isLoading: e.isLoading })),
      (t[16] = _.beacon),
      (t[17] = u),
      (t[18] = d),
      (t[19] = f),
      (t[20] = y.hasLoggedViewRef),
      (t[21] = y.isEligible),
      (t[22] = y.isError),
      (t[23] = y.isLoading),
      (t[24] = l.availableCount),
      (t[25] = l.dismiss),
      (t[26] = l.isEligible),
      (t[27] = l.isLoading),
      (t[28] = w),
      (t[29] = s),
      (t[30] = x),
      (t[31] = T),
      (t[32] = D),
      (t[33] = k),
      (t[34] = A),
      (t[35] = j),
      (t[36] = M),
      (t[37] = N),
      (t[38] = P));
  } else ((k = t[33]), (A = t[34]), (j = t[35]), (M = t[36]), (N = t[37]), (P = t[38]));
  let F;
  t[49] !== w || t[50] !== M || t[51] !== N
    ? ((F = { id: M, status: N, waitsForPresentation: !0, render: w }),
      (t[49] = w),
      (t[50] = M),
      (t[51] = N),
      (t[52] = F))
    : (F = t[52]);
  let I;
  t[53] !== k || t[54] !== F || t[55] !== P
    ? ((I = (0, $.jsx)(k, { source: P, candidate: F })), (t[53] = k), (t[54] = F), (t[55] = P), (t[56] = I))
    : (I = t[56]);
  let L = j.find(Ot) === A ? `computer-history-active-reminder` : `default`,
    R;
  t[57] !== j || t[58] !== i || t[59] !== o || t[60] !== L
    ? ((R = (0, $.jsx)(dt, { entries: j, homeRunLocationRemoteProject: i, includeGitCheckoutWarning: o }, L)),
      (t[57] = j),
      (t[58] = i),
      (t[59] = o),
      (t[60] = L),
      (t[61] = R))
    : (R = t[61]);
  let z;
  return (
    t[62] !== I || t[63] !== R
      ? ((z = (0, $.jsxs)($.Fragment, { children: [I, R] })), (t[62] = I), (t[63] = R), (t[64] = z))
      : (z = t[64]),
    z
  );
}
function Ot(e) {
  return e.isEligible || e.isLoading;
}
var kt, At, $;
function jt() {
  return (jt = e(() => {
    ((kt = d()),
      o(),
      i(),
      (At = g()),
      s(),
      ae(),
      fe(),
      ye(),
      J(),
      Ie(),
      Ce(),
      ge(),
      B(),
      F(),
      U(),
      De(),
      Ae(),
      Se(),
      xe(),
      pe(),
      Be(),
      vt(),
      Le(),
      ie(),
      P(),
      ne(),
      be(),
      Ee(),
      Ye(),
      Ue(),
      ke(),
      ve(),
      Te(),
      Ne(),
      G(),
      wt(),
      ut(),
      te(),
      j(),
      S(),
      f(),
      R(),
      w(),
      k(),
      ($ = m()));
  }))();
}
export { vt as i, Tt as n, jt as r, Et as t };
//# sourceMappingURL=codex-home-announcements-b5429964d77b.js.map
