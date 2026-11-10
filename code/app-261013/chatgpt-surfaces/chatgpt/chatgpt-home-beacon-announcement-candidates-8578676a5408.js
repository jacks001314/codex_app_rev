const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./ended-dc1967774e1e.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./trial-document-visible-53fb8da71ae7.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  Ixt as n,
  Pxt as r,
  Vxt as i,
  _xt as a,
  fPt as o,
  pPt as s,
  vzt as c,
  wxt as ee,
  xMt as l,
  yzt as u,
  z4 as d,
  zxt as te,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Zt as ne,
  CQt as re,
  Een as ie,
  FAt as ae,
  IAt as oe,
  PAt as f,
  Pen as p,
  RQt as se,
  WQt as m,
  XMn as ce,
  aQt as le,
  cXt as ue,
  fur as de,
  hEr as fe,
  iQt as pe,
  lXt as me,
  pur as he,
  sCr as ge,
  uXt as h,
  vEr as g,
  wQt as _,
  xNn as v,
  yCr as y,
} from "./app-initial-5851df3f6cb1.js";
import {
  Ag as _e,
  Dg as ve,
  Eg as ye,
  Tg as be,
  _b as xe,
  a_ as b,
  e_ as Se,
  gb as x,
  i_ as Ce,
  kg as we,
  o_ as Te,
  s_ as S,
  t_ as C,
  wg as w,
} from "./app-primary-fe8a450b3b04.js";
import { r as Ee, t as T } from "./home-beacon-bdd468b02f42.js";
import { n as E, t as De } from "./workspace-renewal-payment-a33960e1f2f0.js";
import { r as D, t as Oe } from "./codex-app-home-beacon-announcement-2b935397f978.js";
function O(e) {
  let t = (0, je.c)(92),
    {
      entries: r,
      fallbackContent: a,
      renderCandidates: o,
      product: s,
      deliverHomeBeacon: c,
      shouldHideOnboardingPromos: l,
      startRealtimeVoice: u,
    } = e,
    d = c === void 0 || c,
    f = n(ge),
    p = ae(),
    m = i(ie),
    de = i(me),
    h = te(ce, de),
    g = oe(p, Ae),
    _;
  t[0] !== p || t[1] !== f
    ? ((_ = () => {
        let e = p.getChatGptPrompt();
        return (
          p.getText().trim().length === 0 &&
          e.prompt.trim().length === 0 &&
          e.systemHints.length === 0 &&
          f.get(ie).addedFiles.length === 0 &&
          f.get(ce, f.get(me)).length === 0 &&
          !ue(f)
        );
      }),
      (t[0] = p),
      (t[1] = f),
      (t[2] = _))
    : (_ = t[2]);
  let v = _,
    y;
  t[3] !== g || t[4] !== f || t[5] !== m || t[6] !== h
    ? ((y = g && m.addedFiles.length === 0 && h.length === 0 && !ue(f)),
      (t[3] = g),
      (t[4] = f),
      (t[5] = m),
      (t[6] = h),
      (t[7] = y))
    : (y = t[7]);
  let ve = y,
    b = he(),
    { userId: x, accountId: S } = b,
    C = ee(),
    { pathname: w } = C,
    T;
  t[8] !== S || t[9] !== x ? ((T = we(x, S)), (t[8] = S), (t[9] = x), (t[10] = T)) : (T = t[10]);
  let E = te(ye, T),
    D = i(fe),
    O = i(_e),
    A;
  t[11] !== S || t[12] !== O || t[13] !== w || t[14] !== x
    ? ((A = !1), (t[11] = S), (t[12] = O), (t[13] = w), (t[14] = x), (t[15] = A))
    : (A = t[15]);
  let j = A,
    M = (0, Me.useContext)(Se),
    N;
  t[16] !== b || t[17] !== D || t[18] !== C || t[19] !== j || t[20] !== E
    ? ((N = j || be({ auth: b, location: C, homeComposerMode: D, trialStatus: E })),
      (t[16] = b),
      (t[17] = D),
      (t[18] = C),
      (t[19] = j),
      (t[20] = E),
      (t[21] = N))
    : (N = t[21]);
  let P = N,
    F = M?.composerSelectionContext,
    Ne = d && !P,
    I;
  t[22] === p
    ? (I = t[23])
    : ((I = () => p.getText().trim().length > 0 && p.view.hasFocus()), (t[22] = p), (t[23] = I));
  let L;
  t[24] !== F || t[25] !== Ne || t[26] !== I
    ? ((L = { composerSelectionContext: F, clientContextReady: Ne, shouldSuppressFocusedModal: I }),
      (t[24] = F),
      (t[25] = Ne),
      (t[26] = I),
      (t[27] = L))
    : (L = t[27]);
  let R = Ee(s, L),
    z,
    B,
    V,
    H,
    U,
    W,
    G,
    K;
  if (
    t[28] !== R.accountId ||
    t[29] !== R.beacon ||
    t[30] !== R.isEligible ||
    t[31] !== R.isLoading ||
    t[32] !== R.shouldSuppressVanillaPromos ||
    t[33] !== M?.actionOverrides ||
    t[34] !== M?.allowExternalActions ||
    t[35] !== M?.allowRemoteImages ||
    t[36] !== M?.getActionOverride ||
    t[37] !== p ||
    t[38] !== P ||
    t[39] !== d ||
    t[40] !== r ||
    t[41] !== s ||
    t[42] !== l ||
    t[43] !== u
  ) {
    let e = `homepage`,
      n = `home-chat`;
    s === `codex`
      ? ((e = `codex_home`), (n = `home-codex`))
      : s === `work_tab` && ((e = `work_tab_home`), (n = `home-work`));
    let i;
    (t[52] !== R.shouldSuppressVanillaPromos || t[53] !== P || t[54] !== r
      ? ((i = P || R.shouldSuppressVanillaPromos ? r.map(ke) : r),
        (t[52] = R.shouldSuppressVanillaPromos),
        (t[53] = P),
        (t[54] = r),
        (t[55] = i))
      : (i = t[55]),
      (V = i),
      (H = (t) =>
        !d || P || R.accountId == null || R.beacon == null || xe(R.beacon)
          ? null
          : (0, k.jsx)(Oe, {
              onModalOpen: t,
              accountId: R.accountId,
              actionAccountId: R.accountId,
              actionOverrides: M?.actionOverrides,
              allowExternalActions: M?.allowExternalActions,
              allowRemoteImages: M?.allowRemoteImages,
              analyticsContext: {
                placement: e,
                productExperience: s === `work_tab` ? `work` : `chat`,
                treatment: re(R.beacon),
              },
              beacon: R.beacon,
              getActionOverride: M?.getActionOverride,
              onComposerText: (e) => {
                (p.focus(), p.setText(e));
              },
              onStartVoice:
                u == null
                  ? void 0
                  : () => {
                      u();
                    },
            })),
      (B = {
        id: `home-beacon`,
        pageContextClaim: se.HomeBeacon,
        content: H(),
        isEligible: d && !P && (!l || R.beacon?.custom_fields?.show_after_onboarding === !0) && R.isEligible,
        isLoading: d && !P && (!l || R.beacon?.custom_fields?.show_after_onboarding === !0) && R.isLoading,
      }));
    let a;
    (t[56] === R.beacon
      ? (a = t[57])
      : ((a = R.beacon != null && (ne(R.beacon) || xe(R.beacon) || le(R.beacon) || pe(R.beacon))),
        (t[56] = R.beacon),
        (t[57] = a)),
      (U = a),
      (z = Ce),
      (K = n),
      (W = `home-beacon:${s}:${R.beacon?.beacon_id ?? `loading`}`),
      (G = Te({ isEligible: B.isEligible && !U, isLoading: B.isLoading })),
      (t[28] = R.accountId),
      (t[29] = R.beacon),
      (t[30] = R.isEligible),
      (t[31] = R.isLoading),
      (t[32] = R.shouldSuppressVanillaPromos),
      (t[33] = M?.actionOverrides),
      (t[34] = M?.allowExternalActions),
      (t[35] = M?.allowRemoteImages),
      (t[36] = M?.getActionOverride),
      (t[37] = p),
      (t[38] = P),
      (t[39] = d),
      (t[40] = r),
      (t[41] = s),
      (t[42] = l),
      (t[43] = u),
      (t[44] = z),
      (t[45] = B),
      (t[46] = V),
      (t[47] = H),
      (t[48] = U),
      (t[49] = W),
      (t[50] = G),
      (t[51] = K));
  } else
    ((z = t[44]), (B = t[45]), (V = t[46]), (H = t[47]), (U = t[48]), (W = t[49]), (G = t[50]), (K = t[51]));
  let q;
  t[58] !== H || t[59] !== W || t[60] !== G
    ? ((q = { id: W, status: G, waitsForPresentation: !0, render: H }),
      (t[58] = H),
      (t[59] = W),
      (t[60] = G),
      (t[61] = q))
    : (q = t[61]);
  let J;
  t[62] !== z || t[63] !== K || t[64] !== q
    ? ((J = (0, k.jsx)(z, { source: K, candidate: q })), (t[62] = z), (t[63] = K), (t[64] = q), (t[65] = J))
    : (J = t[65]);
  let Y;
  t[66] !== R.isLoading ||
  t[67] !== R.shouldSuppressVanillaPromos ||
  t[68] !== ve ||
  t[69] !== P ||
  t[70] !== d ||
  t[71] !== B.isEligible ||
  t[72] !== s ||
  t[73] !== v ||
  t[74] !== l
    ? ((Y = null),
      (t[66] = R.isLoading),
      (t[67] = R.shouldSuppressVanillaPromos),
      (t[68] = ve),
      (t[69] = P),
      (t[70] = d),
      (t[71] = B.isEligible),
      (t[72] = s),
      (t[73] = v),
      (t[74] = l),
      (t[75] = Y))
    : (Y = t[75]);
  let Pe = U ? B.content : null,
    Fe = B.isEligible && U,
    Ie = B.isLoading || (B.isEligible && !U),
    X;
  t[76] !== B || t[77] !== Pe || t[78] !== Fe || t[79] !== Ie
    ? ((X = { ...B, content: Pe, isEligible: Fe, isLoading: Ie }),
      (t[76] = B),
      (t[77] = Pe),
      (t[78] = Fe),
      (t[79] = Ie),
      (t[80] = X))
    : (X = t[80]);
  let Z;
  t[81] !== V || t[82] !== X ? ((Z = [X, ...V]), (t[81] = V), (t[82] = X), (t[83] = Z)) : (Z = t[83]);
  let Q;
  t[84] !== a || t[85] !== o || t[86] !== Z
    ? ((Q = (0, k.jsx)(De, { renderCandidates: o, fallbackContent: a, entries: Z })),
      (t[84] = a),
      (t[85] = o),
      (t[86] = Z),
      (t[87] = Q))
    : (Q = t[87]);
  let $;
  return (
    t[88] !== J || t[89] !== Y || t[90] !== Q
      ? (($ = (0, k.jsxs)(k.Fragment, { children: [J, Y, Q] })),
        (t[88] = J),
        (t[89] = Y),
        (t[90] = Q),
        (t[91] = $))
      : ($ = t[91]),
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
    ((je = c()),
      r(),
      (Me = u()),
      a(),
      b(),
      S(),
      T(),
      E(),
      de(),
      _(),
      x(),
      C(),
      v(),
      h(),
      D(),
      p(),
      g(),
      f(),
      d(),
      w(),
      ve(),
      m(),
      y(),
      (k = l()),
      s(),
      t(
        async () =>
          (
            await o(
              async () => {
                let { NoPaymentTrialExpiryAnnouncement: e } = await import(`./ended-dc1967774e1e.js`);
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
//# sourceMappingURL=chatgpt-home-beacon-announcement-candidates-8578676a5408.js.map
