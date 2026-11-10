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
      "./announcement-66d2d3f1a29c.js",
      "./admin-console-locale-834f71e5097c.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  F3 as r,
  FBt as i,
  FNt as a,
  I3 as o,
  LNt as s,
  MNt as c,
  NNt as l,
  NSt as u,
  OFt as d,
  PBt as f,
  Qst as p,
  VSt as m,
  ZSt as h,
  iCt as g,
  kFt as _,
  nCt as v,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $$t as y,
  $Qt as b,
  H$t as x,
  IAr as S,
  JQt as C,
  L$t as w,
  Mir as T,
  Mkn as E,
  NAr as D,
  U$t as O,
  XAr as k,
  _Dt as A,
  a9n as j,
  e$t as M,
  imr as N,
  lBr as P,
  mBr as F,
  n$t as I,
  r9n as L,
  rmr as R,
  t$t as z,
  v$t as B,
  vDt as ee,
  wkn as V,
  xCt as H,
  xkn as U,
  y$t as te,
  yCt as W,
} from "./app-initial-ad16eaadf81f.js";
import {
  Bg as G,
  C_ as K,
  Ff as ne,
  Gb as q,
  Gg as re,
  Hg as J,
  If as Y,
  Ig as ie,
  Kb as X,
  Kg as ae,
  Rb as oe,
  Rf as se,
  S_ as ce,
  Vg as le,
  Wb as ue,
  db as de,
  hb as fe,
  lb as pe,
  qb as me,
  zb as he,
  zg as ge,
} from "./app-primary-3e00728c2a4c.js";
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
} from "./home-announcement-state-4cf8475b323d.js";
import { r as Le, t as Re } from "./codex-app-home-beacon-announcement-910215ce3170.js";
import { n as ze, r as Be } from "./banner-64014c85f1a6.js";
import { n as Ve, t as He } from "./worktree-onboarding-state-971393c21530.js";
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
} from "./entry-points-6246194bc82c.js";
import { n as ot, r as st } from "./entry-8f3751bad575.js";
import { n as ct, t as lt } from "./replay-completions-4dff28cc3f62.js";
import { n as ut, t as dt } from "./codex-announcement-slot-dc5821413f59.js";
function ft(e) {
  let t = (0, gt.c)(49),
    { announcementKey: n, entries: r, product: i, shouldHideOnboardingPromos: a, startRealtimeVoice: o } = e,
    s = ee(),
    c = N(),
    { userId: l, accountId: u } = c,
    d = m(),
    { pathname: f } = d,
    p;
  t[0] !== u || t[1] !== l ? ((p = re(l, u)), (t[0] = u), (t[1] = l), (t[2] = p)) : (p = t[2]);
  let h = v(le, p),
    _ = g(D),
    y = g(ae),
    x;
  t[3] !== u || t[4] !== y || t[5] !== f || t[6] !== l
    ? ((x = !1), (t[3] = u), (t[4] = y), (t[5] = f), (t[6] = l), (t[7] = x))
    : (x = t[7]);
  let S = x,
    T = (0, _t.useContext)(ce),
    E;
  t[8] !== c || t[9] !== _ || t[10] !== d || t[11] !== S || t[12] !== h
    ? ((E = S || G({ auth: c, location: d, homeComposerMode: _, trialStatus: h })),
      (t[8] = c),
      (t[9] = _),
      (t[10] = d),
      (t[11] = S),
      (t[12] = h),
      (t[13] = E))
    : (E = t[13]);
  let O = E,
    k = T?.composerSelectionContext,
    A = !O,
    j;
  t[14] === s
    ? (j = t[15])
    : ((j = () => s.getText().trim().length > 0 && s.view.hasFocus()), (t[14] = s), (t[15] = j));
  let P;
  t[16] !== k || t[17] !== A || t[18] !== j
    ? ((P = { composerSelectionContext: k, clientContextReady: A, shouldSuppressFocusedModal: j }),
      (t[16] = k),
      (t[17] = A),
      (t[18] = j),
      (t[19] = P))
    : (P = t[19]);
  let F = fe(i, P),
    I,
    L,
    R,
    z;
  if (
    t[20] !== n ||
    t[21] !== F.accountId ||
    t[22] !== F.beacon ||
    t[23] !== F.isEligible ||
    t[24] !== F.isLoading ||
    t[25] !== F.shouldSuppressVanillaPromos ||
    t[26] !== T?.actionOverrides ||
    t[27] !== T?.allowExternalActions ||
    t[28] !== T?.allowRemoteImages ||
    t[29] !== T?.getActionOverride ||
    t[30] !== s ||
    t[31] !== O ||
    t[32] !== r ||
    t[33] !== i ||
    t[34] !== a ||
    t[35] !== o
  ) {
    let e = `homepage`,
      c = `home-chat`;
    i === `codex`
      ? ((e = `codex_home`), (c = `home-codex`))
      : i === `work_tab` && ((e = `work_tab_home`), (c = `home-work`));
    let l = O || F.shouldSuppressVanillaPromos ? r.map(ht) : r,
      u = (t) =>
        O || F.accountId == null || F.beacon == null || he(F.beacon)
          ? null
          : (0, Z.jsx)(Re, {
              onModalOpen: t,
              accountId: F.accountId,
              actionAccountId: F.accountId,
              actionOverrides: T?.actionOverrides,
              allowExternalActions: T?.allowExternalActions,
              allowRemoteImages: T?.allowRemoteImages,
              analyticsContext: {
                placement: e,
                productExperience: i === `work_tab` ? `work` : `chat`,
                treatment: B(F.beacon),
              },
              beacon: F.beacon,
              getActionOverride: T?.getActionOverride,
              onComposerText: (e) => {
                (s.focus(), s.setText(e));
              },
              onStartVoice:
                o == null
                  ? void 0
                  : () => {
                      o();
                    },
            }),
      d = {
        pageContextClaim: w.HomeBeacon,
        content: u(),
        isEligible: !O && (!a || F.beacon?.custom_fields?.show_after_onboarding === !0) && F.isEligible,
        isLoading: !O && (!a || F.beacon?.custom_fields?.show_after_onboarding === !0) && F.isLoading,
      },
      f;
    t[40] === F.beacon
      ? (f = t[41])
      : ((f = F.beacon != null && (C(F.beacon) || he(F.beacon) || M(F.beacon) || b(F.beacon))),
        (t[40] = F.beacon),
        (t[41] = f));
    let p = f;
    ((L = (0, Z.jsx)(ue, {
      source: c,
      candidate: {
        id: `home-beacon:${i}:${F.beacon?.beacon_id ?? `loading`}`,
        status: X({ isEligible: d.isEligible && !p, isLoading: d.isLoading }),
        waitsForPresentation: !0,
        render: u,
      },
    })),
      (I = ne),
      (R = n),
      (z = [
        ...l.filter(mt),
        {
          ...d,
          content: p ? d.content : null,
          isEligible: d.isEligible && p,
          isLoading: O || d.isLoading || (d.isEligible && !p),
        },
        ...l.filter(pt),
      ]),
      (t[20] = n),
      (t[21] = F.accountId),
      (t[22] = F.beacon),
      (t[23] = F.isEligible),
      (t[24] = F.isLoading),
      (t[25] = F.shouldSuppressVanillaPromos),
      (t[26] = T?.actionOverrides),
      (t[27] = T?.allowExternalActions),
      (t[28] = T?.allowRemoteImages),
      (t[29] = T?.getActionOverride),
      (t[30] = s),
      (t[31] = O),
      (t[32] = r),
      (t[33] = i),
      (t[34] = a),
      (t[35] = o),
      (t[36] = I),
      (t[37] = L),
      (t[38] = R),
      (t[39] = z));
  } else ((I = t[36]), (L = t[37]), (R = t[38]), (z = t[39]));
  let V;
  t[42] !== I || t[43] !== R || t[44] !== z
    ? ((V = (0, Z.jsx)(I, { entries: z, trackVisibility: !1 }, R)),
      (t[42] = I),
      (t[43] = R),
      (t[44] = z),
      (t[45] = V))
    : (V = t[45]);
  let H;
  return (
    t[46] !== L || t[47] !== V
      ? ((H = (0, Z.jsxs)(Z.Fragment, { children: [L, V] })), (t[46] = L), (t[47] = V), (t[48] = H))
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
    ((gt = f()),
      h(),
      (_t = i()),
      u(),
      q(),
      me(),
      Y(),
      R(),
      te(),
      oe(),
      K(),
      Le(),
      de(),
      S(),
      A(),
      ge(),
      J(),
      O(),
      (Z = s()));
  }))();
}
function yt(e) {
  let n = (0, xt.c)(66),
    { beaconProduct: r, entryPoint: i, isLocalModeRemote: a, shouldHideOnboardingPromos: o } = e,
    s = t(p),
    c = g(ct),
    l = ee(),
    u = g(x),
    d = !u && !o,
    f;
  n[0] === d ? (f = n[1]) : ((f = { enabled: d }), (n[0] = d), (n[1] = f));
  let m = Xe(f),
    h = g(at),
    _ = g(Je),
    v = H(void 0, r === `work_tab` ? `work` : i),
    y = !u,
    b;
  n[2] === y ? (b = n[3]) : ((b = { enabled: y }), (n[2] = y), (n[3] = b));
  let S = et(b),
    C = !u && !o && !m.isEligible && !m.isLoading && !S.isEligible && !S.isLoading,
    w;
  n[4] !== i || n[5] !== a || n[6] !== C
    ? ((w = { enabled: C, entryPoint: i, isLocalModeRemote: a }),
      (n[4] = i),
      (n[5] = a),
      (n[6] = C),
      (n[7] = w))
    : (w = n[7]);
  let T = Ve(w);
  if (u) return null;
  let E;
  n[8] === T.isEligible
    ? (E = n[9])
    : ((E = T.isEligible ? (0, Q.jsx)(Ct, {}) : null), (n[8] = T.isEligible), (n[9] = E));
  let D;
  n[10] !== E || n[11] !== T.isEligible
    ? ((D = { isEligible: T.isEligible, isLoading: !1, content: E }),
      (n[10] = E),
      (n[11] = T.isEligible),
      (n[12] = D))
    : (D = n[12]);
  let O = D,
    k = !o && !a && r !== `chatgpt` && h === `eligible`,
    A = !o && !a && r !== `chatgpt` && h === `loading`,
    j;
  n[13] === s
    ? (j = n[14])
    : ((j = () => {
        s.set(Ze, !0);
      }),
      (n[13] = s),
      (n[14] = j));
  let M;
  n[15] !== l || n[16] !== s
    ? ((M = (e) => {
        (s.set(Ze, !0),
          (0, St.flushSync)(() => {
            l.setPromptText(e);
          }),
          l.eventEmitter.emit(`submit`));
      }),
      (n[15] = l),
      (n[16] = s),
      (n[17] = M))
    : (M = n[17]);
  let N;
  n[18] !== j || n[19] !== M
    ? ((N = (0, Q.jsx)(qe, { onDismiss: j, onViewRecap: M })), (n[18] = j), (n[19] = M), (n[20] = N))
    : (N = n[20]);
  let P;
  n[21] !== A || n[22] !== N || n[23] !== k
    ? ((P = { isEligible: k, isLoading: A, content: N }), (n[21] = A), (n[22] = N), (n[23] = k), (n[24] = P))
    : (P = n[24]);
  let F = P,
    I = _ !== `ineligible`,
    L;
  n[25] === Symbol.for(`react.memo_cache_sentinel`) ? ((L = (0, Q.jsx)(Qe, {})), (n[25] = L)) : (L = n[25]);
  let R;
  n[26] === I
    ? (R = n[27])
    : ((R = { id: `computer-history-active-reminder`, isEligible: I, isLoading: !1, content: L }),
      (n[26] = I),
      (n[27] = R));
  let z = R,
    B;
  n[28] === Symbol.for(`react.memo_cache_sentinel`) ? ((B = (0, Q.jsx)(ot, {})), (n[28] = B)) : (B = n[28]);
  let V;
  n[29] === c
    ? (V = n[30])
    : ((V = { id: `native-replay-completion`, isEligible: c, isLoading: !1, content: B }),
      (n[29] = c),
      (n[30] = V));
  let U = !o && m.isEligible,
    te = !o && m.isLoading,
    W;
  n[31] !== m.dismiss || n[32] !== m.isEligible || n[33] !== m.openGiftCredits
    ? ((W = m.isEligible
        ? (0, Q.jsx)(it, { onDismiss: m.dismiss, onOpenGiftCredits: m.openGiftCredits })
        : null),
      (n[31] = m.dismiss),
      (n[32] = m.isEligible),
      (n[33] = m.openGiftCredits),
      (n[34] = W))
    : (W = n[34]);
  let G;
  n[35] !== U || n[36] !== te || n[37] !== W
    ? ((G = { isEligible: U, isLoading: te, content: W }),
      (n[35] = U),
      (n[36] = te),
      (n[37] = W),
      (n[38] = G))
    : (G = n[38]);
  let K;
  n[39] !== S.dismiss || n[40] !== S.markShown || n[41] !== S.openImport || n[42] !== S.providerId
    ? ((K = (0, Q.jsx)(rt, {
        onDismiss: S.dismiss,
        onImport: S.openImport,
        onShown: S.markShown,
        providerId: S.providerId,
      })),
      (n[39] = S.dismiss),
      (n[40] = S.markShown),
      (n[41] = S.openImport),
      (n[42] = S.providerId),
      (n[43] = K))
    : (K = n[43]);
  let q;
  n[44] !== S.isEligible || n[45] !== S.isLoading || n[46] !== K
    ? ((q = { isEligible: S.isEligible, isLoading: S.isLoading, content: K }),
      (n[44] = S.isEligible),
      (n[45] = S.isLoading),
      (n[46] = K),
      (n[47] = q))
    : (q = n[47]);
  let re;
  n[48] !== F || n[49] !== z || n[50] !== V || n[51] !== G || n[52] !== q || n[53] !== O
    ? ((re = [z, V, G, q, O, F]),
      (n[48] = F),
      (n[49] = z),
      (n[50] = V),
      (n[51] = G),
      (n[52] = q),
      (n[53] = O),
      (n[54] = re))
    : (re = n[54]);
  let J = re,
    Y;
  n[55] === J ? (Y = n[56]) : ((Y = J.find(bt)), (n[55] = J), (n[56] = Y));
  let ie = Y,
    X = ie?.id ?? `default`;
  if ((ie === O ? (X = `worktree`) : ie === F && (X = `computer-history-weekly-insights`), r == null)) {
    let e;
    return (
      n[57] !== J || n[58] !== X
        ? ((e = (0, Q.jsx)(ne, { entries: J, trackVisibility: !1 }, X)),
          (n[57] = J),
          (n[58] = X),
          (n[59] = e))
        : (e = n[59]),
      e
    );
  }
  let ae;
  return (
    n[60] !== r || n[61] !== J || n[62] !== X || n[63] !== o || n[64] !== v
      ? ((ae = (0, Q.jsx)(
          ft,
          {
            announcementKey: X,
            entries: J,
            product: r,
            shouldHideOnboardingPromos: o,
            startRealtimeVoice: v,
          },
          r,
        )),
        (n[60] = r),
        (n[61] = J),
        (n[62] = X),
        (n[63] = o),
        (n[64] = v),
        (n[65] = ae))
      : (ae = n[65]),
    ae
  );
}
function bt(e) {
  return e.isEligible || e.isLoading;
}
var xt, St, Q, Ct;
function wt() {
  return (wt = e(() => {
    ((xt = f()),
      h(),
      (St = a()),
      Y(),
      vt(),
      A(),
      He(),
      Ye(),
      Ue(),
      tt(),
      Ke(),
      r(),
      Ge(),
      We(),
      st(),
      lt(),
      $e(),
      nt(),
      O(),
      W(),
      n(),
      (Q = s()),
      _(),
      (Ct = o(
        async () =>
          (
            await d(
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
function Tt(e) {
  let t = (0, kt.c)(15),
    {
      entryPoint: n,
      hasSeparateCodexAnnouncements: r,
      homeComposerMode: i,
      isLocalModeRemote: a,
      selectedCustomGptId: o,
    } = e,
    s = a !== void 0 && a,
    l = (0, At.useContext)(L),
    u = m(),
    d = g(U) ?? !1,
    f;
  t[0] !== d || t[1] !== u.pathname
    ? ((f = E({ hideFirstNewThreadOnboardingPromos: d, pathname: u.pathname })),
      (t[0] = d),
      (t[1] = u.pathname),
      (t[2] = f))
    : (f = t[2]);
  let p = f,
    h;
  i === `chat` ? (h = `chatgpt`) : i === `work` && (h = `work_tab`);
  let _;
  t[3] !== n || t[4] !== o
    ? ((_ = o == null ? null : (0, $.jsx)(ze, { entryPoint: n, gizmoId: o })),
      (t[3] = n),
      (t[4] = o),
      (t[5] = _))
    : (_ = t[5]);
  let v;
  t[6] !== h || t[7] !== n || t[8] !== s || t[9] !== l || t[10] !== p
    ? ((v =
        l === "default"
          ? (0, $.jsxs)(`div`, {
              className: c(
                `not-has-[>:not([hidden])]:hidden`,
                n === `codex` &&
                  `electron:mx-[var(--home-composer-inline-inset)] electron:has-[[data-home-beacon-banner]]:mx-0`,
              ),
              children: [
                null,
                (0, $.jsx)($.Fragment, {
                  children: (0, $.jsx)(yt, {
                    beaconProduct: h,
                    entryPoint: n,
                    isLocalModeRemote: s,
                    shouldHideOnboardingPromos: p,
                  }),
                }),
              ],
            })
          : null),
      (t[6] = h),
      (t[7] = n),
      (t[8] = s),
      (t[9] = l),
      (t[10] = p),
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
    a = r === void 0 || r,
    o = m(),
    s = g(U) ?? !1,
    c;
  t[0] !== s || t[1] !== o.pathname
    ? ((c = E({ hideFirstNewThreadOnboardingPromos: s, pathname: o.pathname })),
      (t[0] = s),
      (t[1] = o.pathname),
      (t[2] = c))
    : (c = t[2]);
  let l = c,
    u;
  return (
    t[3] !== i || t[4] !== a || t[5] !== l
      ? ((u = (0, $.jsxs)($.Fragment, {
          children: [
            null,
            (0, $.jsx)($.Fragment, {
              children: (0, $.jsx)(Dt, {
                homeRunLocationRemoteProject: i,
                includeGitCheckoutWarning: a,
                shouldHideOnboardingPromos: l,
              }),
            }),
            null,
          ],
        })),
        (t[3] = i),
        (t[4] = a),
        (t[5] = l),
        (t[6] = u))
      : (u = t[6]),
    u
  );
}
function Dt(e) {
  let n = (0, kt.c)(65),
    { homeRunLocationRemoteProject: r, includeGitCheckoutWarning: i, shouldHideOnboardingPromos: a } = e,
    o = t(p),
    s = Oe(),
    c = g(Je),
    l = _e(),
    u = g(we),
    d = g(F),
    f;
  n[0] !== l.estimatedSavedMs ||
  n[1] !== l.isEligible ||
  n[2] !== l.isSubmitting ||
  n[3] !== l.threadCount ||
  n[4] !== u
    ? ((f = u
        ? {
            codex_fast_mode_eligible: l.isEligible || l.isSubmitting,
            codex_fast_mode_saved_ms: l.estimatedSavedMs ?? void 0,
            codex_fast_mode_thread_count: l.threadCount ?? void 0,
          }
        : void 0),
      (n[0] = l.estimatedSavedMs),
      (n[1] = l.isEligible),
      (n[2] = l.isSubmitting),
      (n[3] = l.threadCount),
      (n[4] = u),
      (n[5] = f))
    : (f = n[5]);
  let m = !d && (!u || l.isBeaconContextReady),
    h;
  n[6] !== f || n[7] !== m
    ? ((h = { clientContext: f, clientContextReady: m }), (n[6] = f), (n[7] = m), (n[8] = h))
    : (h = n[8]);
  let _ = fe(`codex`, h),
    v = H(void 0, `codex`),
    y = Pe(),
    b = !_.shouldSuppressVanillaPromos,
    x;
  n[9] !== _.accountId || n[10] !== _.beacon || n[11] !== l || n[12] !== u || n[13] !== o || n[14] !== v
    ? ((x = (e) =>
        _.beacon != null && _.accountId != null
          ? (0, $.jsx)(Re, {
              onModalOpen: e,
              accountId: _.accountId,
              actionAccountId: _.accountId,
              actionOverrides:
                u && (l.isEligible || l.isSubmitting) ? { enable_codex_fast_mode: l.enableFastMode } : void 0,
              analyticsContext: {
                placement: `codex_home`,
                productExperience: `chat`,
                treatment: B(_.beacon),
              },
              beacon: _.beacon,
              onDismiss: () => {
                (_.beacon?.beacon_id === `codex_fast_mode_home_banner` && l.dismissFastMode(),
                  _.beacon != null && _.accountId != null && pe(o, _.accountId, _.beacon));
              },
              onStartVoice: v == null ? void 0 : () => void v(),
            })
          : null),
      (n[9] = _.accountId),
      (n[10] = _.beacon),
      (n[11] = l),
      (n[12] = u),
      (n[13] = o),
      (n[14] = v),
      (n[15] = x))
    : (x = n[15]);
  let S = x,
    C = (!a || _.beacon?.custom_fields?.show_after_onboarding === !0) && _.isEligible,
    T = (!a || _.beacon?.custom_fields?.show_after_onboarding === !0) && _.isLoading,
    E,
    D,
    O,
    k,
    A,
    j;
  if (
    n[16] !== _.beacon ||
    n[17] !== c ||
    n[18] !== l ||
    n[19] !== u ||
    n[20] !== y.hasLoggedViewRef ||
    n[21] !== y.isEligible ||
    n[22] !== y.isError ||
    n[23] !== y.isLoading ||
    n[24] !== s.availableCount ||
    n[25] !== s.dismiss ||
    n[26] !== s.isEligible ||
    n[27] !== s.isLoading ||
    n[28] !== S ||
    n[29] !== a ||
    n[30] !== b ||
    n[31] !== C ||
    n[32] !== T
  ) {
    let e = { isEligible: C, isLoading: T, pageContextClaim: w.HomeBeacon, content: S() },
      t;
    n[39] === _.beacon
      ? (t = n[40])
      : ((t = _.beacon != null && (z(_.beacon) || I(_.beacon))), (n[39] = _.beacon), (n[40] = t));
    let r = t,
      i;
    (n[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(Qe, {})), (n[41] = i))
      : (i = n[41]),
      (D = {
        id: `computer-history-active-reminder`,
        isEligible: c !== `ineligible`,
        isLoading: !1,
        content: i,
      }));
    let o;
    n[42] !== s.availableCount || n[43] !== s.dismiss
      ? ((o = (0, $.jsx)(je, { availableCount: s.availableCount, onDismiss: s.dismiss })),
        (n[42] = s.availableCount),
        (n[43] = s.dismiss),
        (n[44] = o))
      : (o = n[44]);
    let d;
    n[45] === y.hasLoggedViewRef
      ? (d = n[46])
      : ((d = (0, $.jsx)(Me, { hasLoggedViewRef: y.hasLoggedViewRef })),
        (n[45] = y.hasLoggedViewRef),
        (n[46] = d));
    let f;
    (n[47] === l
      ? (f = n[48])
      : ((f = l.content == null ? null : (0, $.jsx)(Fe, { ...l })), (n[47] = l), (n[48] = f)),
      (O = [
        { isEligible: s.isEligible, isLoading: s.isLoading, content: o },
        D,
        {
          ...e,
          content: r ? null : e.content,
          isEligible: e.isEligible && !r,
          isLoading: e.isLoading || (e.isEligible && r),
        },
        {
          isEligible: !a && b && y.isEligible,
          isLoading: !a && b && y.isLoading,
          isError: !a && b && y.isError,
          content: d,
        },
        { isEligible: !a && b && !u && l.isEligible, isLoading: !a && b && !u && l.isLoading, content: f },
      ]),
      (E = ue),
      (j = `home-codex`),
      (k = `home-beacon:codex:${_.beacon?.beacon_id ?? `loading`}`),
      (A = X({ isEligible: e.isEligible && r, isLoading: e.isLoading })),
      (n[16] = _.beacon),
      (n[17] = c),
      (n[18] = l),
      (n[19] = u),
      (n[20] = y.hasLoggedViewRef),
      (n[21] = y.isEligible),
      (n[22] = y.isError),
      (n[23] = y.isLoading),
      (n[24] = s.availableCount),
      (n[25] = s.dismiss),
      (n[26] = s.isEligible),
      (n[27] = s.isLoading),
      (n[28] = S),
      (n[29] = a),
      (n[30] = b),
      (n[31] = C),
      (n[32] = T),
      (n[33] = E),
      (n[34] = D),
      (n[35] = O),
      (n[36] = k),
      (n[37] = A),
      (n[38] = j));
  } else ((E = n[33]), (D = n[34]), (O = n[35]), (k = n[36]), (A = n[37]), (j = n[38]));
  let M;
  n[49] !== S || n[50] !== k || n[51] !== A
    ? ((M = { id: k, status: A, waitsForPresentation: !0, render: S }),
      (n[49] = S),
      (n[50] = k),
      (n[51] = A),
      (n[52] = M))
    : (M = n[52]);
  let N;
  n[53] !== E || n[54] !== M || n[55] !== j
    ? ((N = (0, $.jsx)(E, { source: j, candidate: M })), (n[53] = E), (n[54] = M), (n[55] = j), (n[56] = N))
    : (N = n[56]);
  let P = O.find(Ot) === D ? `computer-history-active-reminder` : `default`,
    L;
  n[57] !== O || n[58] !== r || n[59] !== i || n[60] !== P
    ? ((L = (0, $.jsx)(dt, { entries: O, homeRunLocationRemoteProject: r, includeGitCheckoutWarning: i }, P)),
      (n[57] = O),
      (n[58] = r),
      (n[59] = i),
      (n[60] = P),
      (n[61] = L))
    : (L = n[61]);
  let R;
  return (
    n[62] !== N || n[63] !== L
      ? ((R = (0, $.jsxs)($.Fragment, { children: [N, L] })), (n[62] = N), (n[63] = L), (n[64] = R))
      : (R = n[64]),
    R
  );
}
function Ot(e) {
  return e.isEligible || e.isLoading;
}
var kt, At, $;
function jt() {
  return (jt = e(() => {
    ((kt = f()),
      l(),
      h(),
      (At = i()),
      u(),
      q(),
      me(),
      ye(),
      Y(),
      Ie(),
      Ce(),
      ie(),
      T(),
      R(),
      te(),
      De(),
      Ae(),
      Se(),
      xe(),
      K(),
      Be(),
      vt(),
      Le(),
      de(),
      y(),
      S(),
      be(),
      Ee(),
      Ye(),
      Ue(),
      r(),
      ke(),
      ve(),
      Te(),
      Ne(),
      se(),
      wt(),
      ut(),
      V(),
      O(),
      W(),
      n(),
      k(),
      P(),
      j(),
      ($ = s()),
      _(),
      o(
        async () =>
          (
            await d(
              async () => {
                let { EnterpriseMigrationAnnouncement: e } = await import(`./announcement-66d2d3f1a29c.js`);
                return { EnterpriseMigrationAnnouncement: e };
              },
              __vite__mapDeps([10, 1, 2, 3, 4, 5, 6, 7, 11]),
              import.meta.url,
            )
          ).EnterpriseMigrationAnnouncement,
      ));
  }))();
}
export { vt as i, Tt as n, jt as r, Et as t };
//# sourceMappingURL=codex-home-announcements-c5142ad524cd.js.map
