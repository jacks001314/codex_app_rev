const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./ended-556e9dd0c42f.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./trial-document-visible-db91614bf6cb.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  F3 as n,
  FBt as r,
  I3 as i,
  LNt as a,
  NSt as o,
  OFt as ee,
  PBt as s,
  VSt as te,
  ZSt as c,
  iCt as l,
  kFt as u,
  nCt as ne,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Qt as re,
  CDr as ie,
  FDr as d,
  GIn as f,
  IAr as p,
  JQt as ae,
  L$t as oe,
  NAr as se,
  U$t as ce,
  _Dt as m,
  aJt as le,
  bIn as ue,
  e$t as de,
  imr as fe,
  oJt as pe,
  qrn as me,
  rmr as h,
  sJt as g,
  tin as _,
  v$t as he,
  vDt as ge,
  y$t as v,
  yDt as _e,
} from "./app-initial-ad16eaadf81f.js";
import {
  Bg as ve,
  C_ as y,
  Gb as b,
  Gg as ye,
  Hg as x,
  Kb as be,
  Kg as xe,
  Rb as S,
  S_ as Se,
  Vg as Ce,
  Wb as we,
  qb as C,
  zb as Te,
  zg as w,
} from "./app-primary-3e00728c2a4c.js";
import { r as Ee, t as T } from "./home-beacon-b81b49ffbe31.js";
import { n as E, t as De } from "./workspace-renewal-payment-b21a13707fa8.js";
import { r as D, t as Oe } from "./codex-app-home-beacon-announcement-910215ce3170.js";
function O(e) {
  let n = (0, je.c)(92),
    {
      entries: r,
      fallbackContent: i,
      renderCandidates: a,
      product: o,
      deliverHomeBeacon: ee,
      shouldHideOnboardingPromos: s,
      startRealtimeVoice: c,
    } = e,
    u = ee === void 0 || ee,
    d = t(ie),
    f = ge(),
    p = l(me),
    ce = l(pe),
    m = ne(ue, ce),
    h = _e(f, Ae),
    g;
  n[0] !== f || n[1] !== d
    ? ((g = () => {
        let e = f.getChatGptPrompt();
        return (
          f.getText().trim().length === 0 &&
          e.prompt.trim().length === 0 &&
          e.systemHints.length === 0 &&
          d.get(me).addedFiles.length === 0 &&
          d.get(ue, d.get(pe)).length === 0 &&
          !le(d)
        );
      }),
      (n[0] = f),
      (n[1] = d),
      (n[2] = g))
    : (g = n[2]);
  let _ = g,
    v;
  n[3] !== h || n[4] !== d || n[5] !== p || n[6] !== m
    ? ((v = h && p.addedFiles.length === 0 && m.length === 0 && !le(d)),
      (n[3] = h),
      (n[4] = d),
      (n[5] = p),
      (n[6] = m),
      (n[7] = v))
    : (v = n[7]);
  let y = v,
    b = fe(),
    { userId: x, accountId: S } = b,
    C = te(),
    { pathname: w } = C,
    T;
  n[8] !== S || n[9] !== x ? ((T = ye(x, S)), (n[8] = S), (n[9] = x), (n[10] = T)) : (T = n[10]);
  let E = ne(Ce, T),
    D = l(se),
    O = l(xe),
    A;
  n[11] !== S || n[12] !== O || n[13] !== w || n[14] !== x
    ? ((A = !1), (n[11] = S), (n[12] = O), (n[13] = w), (n[14] = x), (n[15] = A))
    : (A = n[15]);
  let Ne = A,
    j = (0, Me.useContext)(Se),
    M;
  n[16] !== b || n[17] !== D || n[18] !== C || n[19] !== Ne || n[20] !== E
    ? ((M = Ne || ve({ auth: b, location: C, homeComposerMode: D, trialStatus: E })),
      (n[16] = b),
      (n[17] = D),
      (n[18] = C),
      (n[19] = Ne),
      (n[20] = E),
      (n[21] = M))
    : (M = n[21]);
  let N = M,
    P = j?.composerSelectionContext,
    F = u && !N,
    I;
  n[22] === f
    ? (I = n[23])
    : ((I = () => f.getText().trim().length > 0 && f.view.hasFocus()), (n[22] = f), (n[23] = I));
  let L;
  n[24] !== P || n[25] !== F || n[26] !== I
    ? ((L = { composerSelectionContext: P, clientContextReady: F, shouldSuppressFocusedModal: I }),
      (n[24] = P),
      (n[25] = F),
      (n[26] = I),
      (n[27] = L))
    : (L = n[27]);
  let R = Ee(o, L),
    z,
    B,
    V,
    H,
    U,
    W,
    G,
    K;
  if (
    n[28] !== R.accountId ||
    n[29] !== R.beacon ||
    n[30] !== R.isEligible ||
    n[31] !== R.isLoading ||
    n[32] !== R.shouldSuppressVanillaPromos ||
    n[33] !== j?.actionOverrides ||
    n[34] !== j?.allowExternalActions ||
    n[35] !== j?.allowRemoteImages ||
    n[36] !== j?.getActionOverride ||
    n[37] !== f ||
    n[38] !== N ||
    n[39] !== u ||
    n[40] !== r ||
    n[41] !== o ||
    n[42] !== s ||
    n[43] !== c
  ) {
    let e = `homepage`,
      t = `home-chat`;
    o === `codex`
      ? ((e = `codex_home`), (t = `home-codex`))
      : o === `work_tab` && ((e = `work_tab_home`), (t = `home-work`));
    let i;
    (n[52] !== R.shouldSuppressVanillaPromos || n[53] !== N || n[54] !== r
      ? ((i = N || R.shouldSuppressVanillaPromos ? r.map(ke) : r),
        (n[52] = R.shouldSuppressVanillaPromos),
        (n[53] = N),
        (n[54] = r),
        (n[55] = i))
      : (i = n[55]),
      (V = i),
      (H = (t) =>
        !u || N || R.accountId == null || R.beacon == null || Te(R.beacon)
          ? null
          : (0, k.jsx)(Oe, {
              onModalOpen: t,
              accountId: R.accountId,
              actionAccountId: R.accountId,
              actionOverrides: j?.actionOverrides,
              allowExternalActions: j?.allowExternalActions,
              allowRemoteImages: j?.allowRemoteImages,
              analyticsContext: {
                placement: e,
                productExperience: o === `work_tab` ? `work` : `chat`,
                treatment: he(R.beacon),
              },
              beacon: R.beacon,
              getActionOverride: j?.getActionOverride,
              onComposerText: (e) => {
                (f.focus(), f.setText(e));
              },
              onStartVoice:
                c == null
                  ? void 0
                  : () => {
                      c();
                    },
            })),
      (B = {
        id: `home-beacon`,
        pageContextClaim: oe.HomeBeacon,
        content: H(),
        isEligible: u && !N && (!s || R.beacon?.custom_fields?.show_after_onboarding === !0) && R.isEligible,
        isLoading: u && !N && (!s || R.beacon?.custom_fields?.show_after_onboarding === !0) && R.isLoading,
      }));
    let a;
    (n[56] === R.beacon
      ? (a = n[57])
      : ((a = R.beacon != null && (ae(R.beacon) || Te(R.beacon) || de(R.beacon) || re(R.beacon))),
        (n[56] = R.beacon),
        (n[57] = a)),
      (U = a),
      (z = we),
      (K = t),
      (W = `home-beacon:${o}:${R.beacon?.beacon_id ?? `loading`}`),
      (G = be({ isEligible: B.isEligible && !U, isLoading: B.isLoading })),
      (n[28] = R.accountId),
      (n[29] = R.beacon),
      (n[30] = R.isEligible),
      (n[31] = R.isLoading),
      (n[32] = R.shouldSuppressVanillaPromos),
      (n[33] = j?.actionOverrides),
      (n[34] = j?.allowExternalActions),
      (n[35] = j?.allowRemoteImages),
      (n[36] = j?.getActionOverride),
      (n[37] = f),
      (n[38] = N),
      (n[39] = u),
      (n[40] = r),
      (n[41] = o),
      (n[42] = s),
      (n[43] = c),
      (n[44] = z),
      (n[45] = B),
      (n[46] = V),
      (n[47] = H),
      (n[48] = U),
      (n[49] = W),
      (n[50] = G),
      (n[51] = K));
  } else
    ((z = n[44]), (B = n[45]), (V = n[46]), (H = n[47]), (U = n[48]), (W = n[49]), (G = n[50]), (K = n[51]));
  let q;
  n[58] !== H || n[59] !== W || n[60] !== G
    ? ((q = { id: W, status: G, waitsForPresentation: !0, render: H }),
      (n[58] = H),
      (n[59] = W),
      (n[60] = G),
      (n[61] = q))
    : (q = n[61]);
  let J;
  n[62] !== z || n[63] !== K || n[64] !== q
    ? ((J = (0, k.jsx)(z, { source: K, candidate: q })), (n[62] = z), (n[63] = K), (n[64] = q), (n[65] = J))
    : (J = n[65]);
  let Y;
  n[66] !== R.isLoading ||
  n[67] !== R.shouldSuppressVanillaPromos ||
  n[68] !== y ||
  n[69] !== N ||
  n[70] !== u ||
  n[71] !== B.isEligible ||
  n[72] !== o ||
  n[73] !== _ ||
  n[74] !== s
    ? ((Y = null),
      (n[66] = R.isLoading),
      (n[67] = R.shouldSuppressVanillaPromos),
      (n[68] = y),
      (n[69] = N),
      (n[70] = u),
      (n[71] = B.isEligible),
      (n[72] = o),
      (n[73] = _),
      (n[74] = s),
      (n[75] = Y))
    : (Y = n[75]);
  let Pe = U ? B.content : null,
    Fe = B.isEligible && U,
    Ie = B.isLoading || (B.isEligible && !U),
    X;
  n[76] !== B || n[77] !== Pe || n[78] !== Fe || n[79] !== Ie
    ? ((X = { ...B, content: Pe, isEligible: Fe, isLoading: Ie }),
      (n[76] = B),
      (n[77] = Pe),
      (n[78] = Fe),
      (n[79] = Ie),
      (n[80] = X))
    : (X = n[80]);
  let Z;
  n[81] !== V || n[82] !== X ? ((Z = [X, ...V]), (n[81] = V), (n[82] = X), (n[83] = Z)) : (Z = n[83]);
  let Q;
  n[84] !== i || n[85] !== a || n[86] !== Z
    ? ((Q = (0, k.jsx)(De, { renderCandidates: a, fallbackContent: i, entries: Z })),
      (n[84] = i),
      (n[85] = a),
      (n[86] = Z),
      (n[87] = Q))
    : (Q = n[87]);
  let $;
  return (
    n[88] !== J || n[89] !== Y || n[90] !== Q
      ? (($ = (0, k.jsxs)(k.Fragment, { children: [J, Y, Q] })),
        (n[88] = J),
        (n[89] = Y),
        (n[90] = Q),
        (n[91] = $))
      : ($ = n[91]),
    $
  );
}
function ke(e) {
  return e.id === `computer-history-active-reminder` ? e : { ...e, isEligible: !1, isLoading: !1 };
}
function Ae(e) {
  let t = e.getChatGptPrompt();
  return e.getText().trim().length === 0 && t.prompt.trim().length === 0 && t.systemHints.length === 0;
}
var je, Me, k;
function A() {
  return (A = e(() => {
    ((je = s()),
      c(),
      (Me = r()),
      o(),
      b(),
      C(),
      T(),
      E(),
      h(),
      v(),
      S(),
      y(),
      f(),
      g(),
      D(),
      _(),
      p(),
      m(),
      n(),
      w(),
      x(),
      ce(),
      d(),
      (k = a()),
      u(),
      i(
        async () =>
          (
            await ee(
              async () => {
                let { NoPaymentTrialExpiryAnnouncement: e } = await import(`./ended-556e9dd0c42f.js`);
                return { NoPaymentTrialExpiryAnnouncement: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
              import.meta.url,
            )
          ).NoPaymentTrialExpiryAnnouncement,
      ));
  }))();
}
export { A as n, O as t };
//# sourceMappingURL=chatgpt-home-beacon-announcement-candidates-df2ece330c1e.js.map
