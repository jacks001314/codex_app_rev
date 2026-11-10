import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Pxt as r,
  Vxt as i,
  vzt as a,
  wot as o,
  xMt as s,
  yzt as c,
  zxt as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Qn as u,
  G4n as d,
  GQt as f,
  GZt as p,
  JQt as ee,
  JZn as te,
  JZt as m,
  SZn as ne,
  TQt as h,
  VZn as g,
  WQt as _,
  YZt as v,
  Z4n as y,
  ZZt as re,
  e$n as ie,
  oQt as ae,
  pZn as oe,
  qQt as se,
  qZt as ce,
  sQt as le,
  wQt as b,
  yjn as x,
  zQt as ue,
} from "./app-initial-5851df3f6cb1.js";
import { a_ as S, i_ as de } from "./app-primary-fe8a450b3b04.js";
import {
  a as C,
  i as fe,
  n as pe,
  o as me,
  r as he,
  s as w,
  t as ge,
} from "./share-conversation-action-deb7f4faa0fd.js";
import { r as T, t as _e } from "./codex-app-home-beacon-announcement-2b935397f978.js";
function E(e) {
  let r = (0, xe.c)(90),
    {
      actionOverrides: a,
      allowConversationSharing: o,
      allowExternalActions: s,
      allowRemoteImages: c,
      conversationId: d,
      getActionOverride: m,
      isCompetingModalOpen: _,
      isTemporaryChat: ie,
      onComposerText: b,
      onStartVoice: x,
    } = e,
    S = n(t),
    C = (0, D.useRef)(null),
    [me, w] = (0, D.useState)(null),
    T;
  r[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((T = new WeakSet()), (r[0] = T)) : (T = r[0]);
  let E = (0, D.useRef)(T),
    ye = i(f),
    Se = i(se),
    k = l(oe, d),
    A = l(p, k ?? d),
    Ce = l(ne, d),
    j = l(g, d),
    M;
  r[1] === j ? (M = r[2]) : ((M = te(j)), (r[1] = j), (r[2] = M));
  let we = M,
    Te = y(),
    Ee = null;
  A != null && (ae(A.beacon) || le(A.beacon)) && (Ee = A.beacon);
  let De =
      A?.eventMetadata.messageId == null
        ? k != null && A?.eventMetadata.conversationId === k
        : A.eventMetadata.messageId === Ce,
    N = De && A != null ? A.eventMetadata : null,
    P = N?.messageId ?? N?.conversationId ?? void 0,
    Oe =
      N?.suppressLifecycle !== !0 &&
      ee({ activeClaims: ye, isPageContextUpsellSuppressionEnabled: Se, responseLeafId: P }),
    F = De ? Ee : null,
    I = A != null && me === A,
    L = F != null && (!Oe || I) ? F : null,
    ke = L != null && fe(L.action_items),
    Ae = l(ge, ke ? d : null),
    R;
  r[3] !== F || r[4] !== N
    ? ((R = F == null || N == null ? null : be(F, N)), (r[3] = F), (r[4] = N), (r[5] = R))
    : (R = r[5]);
  let z = R,
    B = L == null ? null : z,
    V = _ || Te,
    H;
  r[6] === S
    ? (H = r[7])
    : ((H = (e) => {
        E.current.has(e.state) ||
          (E.current.add(e.state),
          C.current?.state === e.state && ((C.current = null), w((t) => (t === e.state ? null : t))),
          h(S, { action: `closed_without_dismiss`, beacon: e.beacon, ...e.analyticsContext }),
          v(S, e.conversationId, e.state));
      }),
      (r[6] = S),
      (r[7] = H));
  let U = H,
    W;
  r[8] === U
    ? (W = r[9])
    : ((W = (e) => {
        U(e);
      }),
      (r[8] = U),
      (r[9] = W));
  let G = (0, D.useEffectEvent)(W),
    je = (0, D.useRef)(0),
    K;
  r[10] === G
    ? (K = r[11])
    : ((K = (e) => {
        if (je.current !== e) return;
        let t = C.current;
        t != null && G(t);
      }),
      (r[10] = G),
      (r[11] = K));
  let Me = (0, D.useEffectEvent)(K),
    q;
  r[12] === Me
    ? (q = r[13])
    : ((q = () => {
        let e = (je.current += 1);
        return () => {
          queueMicrotask(() => {
            Me(e);
          });
        };
      }),
      (r[12] = Me),
      (r[13] = q));
  let Ne;
  (r[14] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ne = []), (r[14] = Ne)) : (Ne = r[14]),
    (0, D.useEffect)(q, Ne));
  let Pe;
  r[15] !== A || r[16] !== z || r[17] !== G || r[18] !== V
    ? ((Pe = () => {
        let e = C.current;
        e != null && (V || e.state !== A || z == null || e.presentationKey !== z) && G(e);
      }),
      (r[15] = A),
      (r[16] = z),
      (r[17] = G),
      (r[18] = V),
      (r[19] = Pe))
    : (Pe = r[19]);
  let Fe;
  if (
    (r[20] !== A || r[21] !== z || r[22] !== V
      ? ((Fe = [A, z, V]), (r[20] = A), (r[21] = z), (r[22] = V), (r[23] = Fe))
      : (Fe = r[23]),
    (0, D.useEffect)(Pe, Fe),
    L == null || N == null || B == null || A == null || V)
  )
    return null;
  let Ie;
  r[24] !== A.eventMetadata.suppressLifecycle || r[25] !== A.productExperience
    ? ((Ie = {
        placement: `in_conversation`,
        productExperience: A.productExperience,
        suppressLifecycle: A.eventMetadata.suppressLifecycle,
        treatment: `modal`,
      }),
      (r[24] = A.eventMetadata.suppressLifecycle),
      (r[25] = A.productExperience),
      (r[26] = Ie))
    : (Ie = r[26]);
  let J = Ie,
    Le;
  r[27] !== J || r[28] !== A || r[29] !== d || r[30] !== B || r[31] !== L
    ? ((Le = { analyticsContext: J, beacon: L, conversationId: d, state: A, presentationKey: B }),
      (r[27] = J),
      (r[28] = A),
      (r[29] = d),
      (r[30] = B),
      (r[31] = L),
      (r[32] = Le))
    : (Le = r[32]);
  let Re = Le,
    ze;
  r[33] !== A || r[34] !== d || r[35] !== S
    ? ((ze = () => {
        !E.current.has(A) &&
          ce(S, d, A) &&
          (E.current.add(A), C.current?.state === A && ((C.current = null), w((e) => (e === A ? null : e))));
      }),
      (r[33] = A),
      (r[34] = d),
      (r[35] = S),
      (r[36] = ze))
    : (ze = r[36]);
  let Be = ze,
    Ve;
  r[37] !== J || r[38] !== A || r[39] !== d || r[40] !== S || r[41] !== L
    ? ((Ve = (e) => {
        !E.current.has(A) &&
          v(S, d, A) &&
          (E.current.add(A),
          C.current?.state === A && ((C.current = null), w((e) => (e === A ? null : e))),
          ae(L) &&
            e.type !== `copy` &&
            e.action_v2.action_enum !== `open_connector_oauth_modal` &&
            e.action_v2.action_enum !== `open_pca_connector_auth_modal` &&
            h(S, { action: `closed_without_dismiss`, beacon: L, ...J }));
      }),
      (r[37] = J),
      (r[38] = A),
      (r[39] = d),
      (r[40] = S),
      (r[41] = L),
      (r[42] = Ve))
    : (Ve = r[42]);
  let He = Ve,
    Ue;
  r[43] !== A || r[44] !== d || r[45] !== S
    ? ((Ue = () => {
        (E.current.add(A),
          C.current?.state === A && (C.current = null),
          w((e) => (e === A ? null : e)),
          re(S, d, A));
      }),
      (r[43] = A),
      (r[44] = d),
      (r[45] = S),
      (r[46] = Ue))
    : (Ue = r[46]);
  let We = Ue,
    Ge = o && s && !ie && !we,
    Y;
  r[47] !== S || r[48] !== k || r[49] !== Ge
    ? ((Y = pe({ scope: S, canShare: Ge, conversationId: k })),
      (r[47] = S),
      (r[48] = k),
      (r[49] = Ge),
      (r[50] = Y))
    : (Y = r[50]);
  let Ke;
  r[51] !== a || r[52] !== Y
    ? ((Ke = { ...a, share_conversation: Y }), (r[51] = a), (r[52] = Y), (r[53] = Ke))
    : (Ke = r[53]);
  let X = Ke,
    Z;
  r[54] !== X || r[55] !== m || r[56] !== Ae
    ? ((Z = (e) =>
        he({
          action: e,
          getActionOverride: m,
          shareConversationEligible: Ae,
          shareConversationOverride: X.share_conversation,
        })),
      (r[54] = X),
      (r[55] = m),
      (r[56] = Ae),
      (r[57] = Z))
    : (Z = r[57]);
  let qe = Z,
    Je;
  r[58] !== J ||
  r[59] !== A ||
  r[60] !== d ||
  r[61] !== B ||
  r[62] !== P ||
  r[63] !== S ||
  r[64] !== L ||
  r[65] !== N?.suppressLifecycle
    ? ((Je = () => {
        (N?.suppressLifecycle !== !0 && new ue(S).shouldSuppressBeaconUI({ responseLeafId: P })) ||
          ((C.current = { analyticsContext: J, beacon: L, conversationId: d, state: A, presentationKey: B }),
          w(A));
      }),
      (r[58] = J),
      (r[59] = A),
      (r[60] = d),
      (r[61] = B),
      (r[62] = P),
      (r[63] = S),
      (r[64] = L),
      (r[65] = N?.suppressLifecycle),
      (r[66] = Je))
    : (Je = r[66]);
  let Ye = Je,
    Xe = `conversation-beacon:${d}:${B}`,
    Q;
  r[67] !== s ||
  r[68] !== c ||
  r[69] !== J ||
  r[70] !== U ||
  r[71] !== X ||
  r[72] !== d ||
  r[73] !== qe ||
  r[74] !== Be ||
  r[75] !== Ye ||
  r[76] !== He ||
  r[77] !== We ||
  r[78] !== I ||
  r[79] !== b ||
  r[80] !== x ||
  r[81] !== Re ||
  r[82] !== B ||
  r[83] !== k ||
  r[84] !== L ||
  r[85] !== N
    ? ((Q = (e) =>
        (0, O.jsx)(
          _e,
          {
            accountId: k ?? d,
            actionOverrides: X,
            allowExternalActions: s,
            allowRemoteImages: c,
            analyticsContext: J,
            beacon: L,
            eventMetadata: N,
            getActionOverride: qe,
            onActionComplete: He,
            onComposerText: b,
            onDismiss: Be,
            onUnsupported: We,
            onModalOpen: () => {
              (e(), Ye());
            },
            pcaConversationId: u(d),
            preserveOpenPageContextPresentation: I,
            onStartVoice: x,
            renderPresentation: (e) => {
              let { content: t, supportStatus: n } = e;
              return (0, O.jsx)(ve, {
                closeWithoutDismiss: U,
                openPresentation: Re,
                openPresentationRef: C,
                supportStatus: n,
                terminalPresentationStatesRef: E,
                children: t,
              });
            },
          },
          B,
        )),
      (r[67] = s),
      (r[68] = c),
      (r[69] = J),
      (r[70] = U),
      (r[71] = X),
      (r[72] = d),
      (r[73] = qe),
      (r[74] = Be),
      (r[75] = Ye),
      (r[76] = He),
      (r[77] = We),
      (r[78] = I),
      (r[79] = b),
      (r[80] = x),
      (r[81] = Re),
      (r[82] = B),
      (r[83] = k),
      (r[84] = L),
      (r[85] = N),
      (r[86] = Q))
    : (Q = r[86]);
  let $;
  return (
    r[87] !== Xe || r[88] !== Q
      ? (($ = (0, O.jsx)(de, {
          source: `conversation`,
          candidate: { id: Xe, waitsForPresentation: !0, status: `eligible`, render: Q },
        })),
        (r[87] = Xe),
        (r[88] = Q),
        (r[89] = $))
      : ($ = r[89]),
    $
  );
}
function ve(e) {
  let t = (0, xe.c)(9),
    {
      children: n,
      closeWithoutDismiss: r,
      openPresentation: i,
      openPresentationRef: a,
      supportStatus: o,
      terminalPresentationStatesRef: s,
    } = e,
    c = (0, D.useRef)(0),
    l,
    u;
  (t[0] !== r || t[1] !== i || t[2] !== a || t[3] !== o || t[4] !== s
    ? ((l = () => {
        let e = (c.current += 1);
        if (o === `unsupported`) {
          (s.current.add(i.state), a.current?.state === i.state && (a.current = null));
          return;
        }
        if (o !== `supported` || s.current.has(i.state) || a.current?.state === i.state) return;
        let t = a.current;
        return (
          t != null && r(t),
          (a.current = i),
          () => {
            queueMicrotask(() => {
              ye(c, e) && r(i);
            });
          }
        );
      }),
      (u = [r, i, a, o, s]),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = l),
      (t[6] = u))
    : ((l = t[5]), (u = t[6])),
    (0, D.useEffect)(l, u));
  let d;
  return (
    t[7] === n
      ? (d = t[8])
      : ((d = n == null ? null : (0, O.jsx)(O.Fragment, { children: n })), (t[7] = n), (t[8] = d)),
    d
  );
}
function ye(e, t) {
  return e.current === t;
}
function be(e, t) {
  return JSON.stringify([e.beacon_id, t.conversationId, t.messageId]);
}
var xe, D, O;
function Se() {
  return (Se = e(() => {
    ((xe = a()), r(), (D = c()), S(), b(), T(), d(), _(), o(), ie(), x(), C(), m(), (O = s()));
  }))();
}
function k(e) {
  let r = (0, A.c)(19),
    {
      actionOverrides: i,
      allowConversationSharing: a,
      allowExternalActions: o,
      allowRegeneration: s,
      allowRemoteImages: c,
      conversationId: l,
      getActionOverride: d,
      isTemporaryChat: f,
      onComposerText: p,
      onStartVoice: ee,
      regenerationModelSlug: te,
    } = e,
    m = s === void 0 || s,
    ne = te === void 0 ? null : te,
    h = n(t),
    g;
  r[0] !== m || r[1] !== l || r[2] !== f || r[3] !== ne || r[4] !== h
    ? ((g = m ? me({ scope: h, allowedModelSlug: ne, conversationId: u(l), isTemporaryChat: f }) : void 0),
      (r[0] = m),
      (r[1] = l),
      (r[2] = f),
      (r[3] = ne),
      (r[4] = h),
      (r[5] = g))
    : (g = r[5]);
  let _;
  r[6] !== i || r[7] !== g ? ((_ = { ...i, regenerate: g }), (r[6] = i), (r[7] = g), (r[8] = _)) : (_ = r[8]);
  let v = _,
    y;
  return (
    r[9] !== a ||
    r[10] !== o ||
    r[11] !== c ||
    r[12] !== v ||
    r[13] !== l ||
    r[14] !== d ||
    r[15] !== f ||
    r[16] !== p ||
    r[17] !== ee
      ? ((y = (0, Ce.jsx)(E, {
          actionOverrides: v,
          allowConversationSharing: a,
          allowExternalActions: o,
          allowRemoteImages: c,
          conversationId: l,
          getActionOverride: d,
          isCompetingModalOpen: !1,
          isTemporaryChat: f,
          onComposerText: p,
          onStartVoice: ee,
        })),
        (r[9] = a),
        (r[10] = o),
        (r[11] = c),
        (r[12] = v),
        (r[13] = l),
        (r[14] = d),
        (r[15] = f),
        (r[16] = p),
        (r[17] = ee),
        (r[18] = y))
      : (y = r[18]),
    y
  );
}
var A, Ce;
function j() {
  return (j = e(() => {
    ((A = a()), r(), o(), ie(), Se(), w(), (Ce = s()));
  }))();
}
j();
export { k as ChatGptConversationBeaconModalSurface };
//# sourceMappingURL=modal-surface-73084940d582.js.map
