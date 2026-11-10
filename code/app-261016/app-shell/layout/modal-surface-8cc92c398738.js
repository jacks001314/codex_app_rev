import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  LNt as i,
  PBt as a,
  Qst as o,
  ZSt as s,
  iCt as c,
  nCt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B1n as u,
  BQt as d,
  D2n as ee,
  D5n as f,
  HQt as p,
  K$t as te,
  KQt as m,
  N5n as h,
  O2n as g,
  R$t as _,
  U$t as v,
  UQt as y,
  VPn as b,
  W$t as ne,
  WQt as re,
  Y1n as ie,
  b$t as ae,
  m0n as oe,
  n$t as se,
  q$t as ce,
  t$t as le,
  x0n as ue,
  y$t as x,
} from "./app-initial-ad16eaadf81f.js";
import { Gb as S, Wb as de } from "./app-primary-3e00728c2a4c.js";
import {
  a as C,
  i as fe,
  n as pe,
  o as me,
  r as he,
  s as w,
  t as ge,
} from "./share-conversation-action-61d6c8ca1283.js";
import { r as T, t as _e } from "./codex-app-home-beacon-announcement-910215ce3170.js";
function E(e) {
  let n = (0, xe.c)(90),
    {
      actionOverrides: r,
      allowConversationSharing: i,
      allowExternalActions: a,
      allowRemoteImages: s,
      conversationId: f,
      getActionOverride: g,
      isCompetingModalOpen: v,
      isTemporaryChat: y,
      onComposerText: b,
      onStartVoice: x,
    } = e,
    S = t(o),
    C = (0, D.useRef)(null),
    [me, w] = (0, D.useState)(null),
    T;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((T = new WeakSet()), (n[0] = T)) : (T = n[0]);
  let E = (0, D.useRef)(T),
    ye = c(ne),
    Se = c(te),
    k = l(u, f),
    A = l(d, k ?? f),
    Ce = l(ie, f),
    j = l(oe, f),
    M;
  n[1] === j ? (M = n[2]) : ((M = ue(j)), (n[1] = j), (n[2] = M));
  let we = M,
    Te = h(),
    Ee = null;
  A != null && (le(A.beacon) || se(A.beacon)) && (Ee = A.beacon);
  let De =
      A?.eventMetadata.messageId == null
        ? k != null && A?.eventMetadata.conversationId === k
        : A.eventMetadata.messageId === Ce,
    N = De && A != null ? A.eventMetadata : null,
    P = N?.messageId ?? N?.conversationId ?? void 0,
    Oe =
      N?.suppressLifecycle !== !0 &&
      ce({ activeClaims: ye, isPageContextUpsellSuppressionEnabled: Se, responseLeafId: P }),
    F = De ? Ee : null,
    I = A != null && me === A,
    L = F != null && (!Oe || I) ? F : null,
    ke = L != null && fe(L.action_items),
    Ae = l(ge, ke ? f : null),
    R;
  n[3] !== F || n[4] !== N
    ? ((R = F == null || N == null ? null : be(F, N)), (n[3] = F), (n[4] = N), (n[5] = R))
    : (R = n[5]);
  let z = R,
    B = L == null ? null : z,
    V = v || Te,
    H;
  n[6] === S
    ? (H = n[7])
    : ((H = (e) => {
        E.current.has(e.state) ||
          (E.current.add(e.state),
          C.current?.state === e.state && ((C.current = null), w((t) => (t === e.state ? null : t))),
          ae(S, { action: `closed_without_dismiss`, beacon: e.beacon, ...e.analyticsContext }),
          re(S, e.conversationId, e.state));
      }),
      (n[6] = S),
      (n[7] = H));
  let U = H,
    W;
  n[8] === U
    ? (W = n[9])
    : ((W = (e) => {
        U(e);
      }),
      (n[8] = U),
      (n[9] = W));
  let G = (0, D.useEffectEvent)(W),
    je = (0, D.useRef)(0),
    K;
  n[10] === G
    ? (K = n[11])
    : ((K = (e) => {
        if (je.current !== e) return;
        let t = C.current;
        t != null && G(t);
      }),
      (n[10] = G),
      (n[11] = K));
  let Me = (0, D.useEffectEvent)(K),
    q;
  n[12] === Me
    ? (q = n[13])
    : ((q = () => {
        let e = (je.current += 1);
        return () => {
          queueMicrotask(() => {
            Me(e);
          });
        };
      }),
      (n[12] = Me),
      (n[13] = q));
  let J;
  (n[14] === Symbol.for(`react.memo_cache_sentinel`) ? ((J = []), (n[14] = J)) : (J = n[14]),
    (0, D.useEffect)(q, J));
  let Ne;
  n[15] !== A || n[16] !== z || n[17] !== G || n[18] !== V
    ? ((Ne = () => {
        let e = C.current;
        e != null && (V || e.state !== A || z == null || e.presentationKey !== z) && G(e);
      }),
      (n[15] = A),
      (n[16] = z),
      (n[17] = G),
      (n[18] = V),
      (n[19] = Ne))
    : (Ne = n[19]);
  let Pe;
  if (
    (n[20] !== A || n[21] !== z || n[22] !== V
      ? ((Pe = [A, z, V]), (n[20] = A), (n[21] = z), (n[22] = V), (n[23] = Pe))
      : (Pe = n[23]),
    (0, D.useEffect)(Ne, Pe),
    L == null || N == null || B == null || A == null || V)
  )
    return null;
  let Fe;
  n[24] !== A.eventMetadata.suppressLifecycle || n[25] !== A.productExperience
    ? ((Fe = {
        placement: `in_conversation`,
        productExperience: A.productExperience,
        suppressLifecycle: A.eventMetadata.suppressLifecycle,
        treatment: `modal`,
      }),
      (n[24] = A.eventMetadata.suppressLifecycle),
      (n[25] = A.productExperience),
      (n[26] = Fe))
    : (Fe = n[26]);
  let Y = Fe,
    Ie;
  n[27] !== Y || n[28] !== A || n[29] !== f || n[30] !== B || n[31] !== L
    ? ((Ie = { analyticsContext: Y, beacon: L, conversationId: f, state: A, presentationKey: B }),
      (n[27] = Y),
      (n[28] = A),
      (n[29] = f),
      (n[30] = B),
      (n[31] = L),
      (n[32] = Ie))
    : (Ie = n[32]);
  let Le = Ie,
    Re;
  n[33] !== A || n[34] !== f || n[35] !== S
    ? ((Re = () => {
        !E.current.has(A) &&
          p(S, f, A) &&
          (E.current.add(A), C.current?.state === A && ((C.current = null), w((e) => (e === A ? null : e))));
      }),
      (n[33] = A),
      (n[34] = f),
      (n[35] = S),
      (n[36] = Re))
    : (Re = n[36]);
  let ze = Re,
    Be;
  n[37] !== Y || n[38] !== A || n[39] !== f || n[40] !== S || n[41] !== L
    ? ((Be = (e) => {
        !E.current.has(A) &&
          re(S, f, A) &&
          (E.current.add(A),
          C.current?.state === A && ((C.current = null), w((e) => (e === A ? null : e))),
          le(L) &&
            e.type !== `copy` &&
            e.action_v2.action_enum !== `open_connector_oauth_modal` &&
            e.action_v2.action_enum !== `open_pca_connector_auth_modal` &&
            ae(S, { action: `closed_without_dismiss`, beacon: L, ...Y }));
      }),
      (n[37] = Y),
      (n[38] = A),
      (n[39] = f),
      (n[40] = S),
      (n[41] = L),
      (n[42] = Be))
    : (Be = n[42]);
  let Ve = Be,
    He;
  n[43] !== A || n[44] !== f || n[45] !== S
    ? ((He = () => {
        (E.current.add(A),
          C.current?.state === A && (C.current = null),
          w((e) => (e === A ? null : e)),
          m(S, f, A));
      }),
      (n[43] = A),
      (n[44] = f),
      (n[45] = S),
      (n[46] = He))
    : (He = n[46]);
  let Ue = He,
    We = i && a && !y && !we,
    X;
  n[47] !== S || n[48] !== k || n[49] !== We
    ? ((X = pe({ scope: S, canShare: We, conversationId: k })),
      (n[47] = S),
      (n[48] = k),
      (n[49] = We),
      (n[50] = X))
    : (X = n[50]);
  let Ge;
  n[51] !== r || n[52] !== X
    ? ((Ge = { ...r, share_conversation: X }), (n[51] = r), (n[52] = X), (n[53] = Ge))
    : (Ge = n[53]);
  let Z = Ge,
    Q;
  n[54] !== Z || n[55] !== g || n[56] !== Ae
    ? ((Q = (e) =>
        he({
          action: e,
          getActionOverride: g,
          shareConversationEligible: Ae,
          shareConversationOverride: Z.share_conversation,
        })),
      (n[54] = Z),
      (n[55] = g),
      (n[56] = Ae),
      (n[57] = Q))
    : (Q = n[57]);
  let Ke = Q,
    qe;
  n[58] !== Y ||
  n[59] !== A ||
  n[60] !== f ||
  n[61] !== B ||
  n[62] !== P ||
  n[63] !== S ||
  n[64] !== L ||
  n[65] !== N?.suppressLifecycle
    ? ((qe = () => {
        (N?.suppressLifecycle !== !0 && new _(S).shouldSuppressBeaconUI({ responseLeafId: P })) ||
          ((C.current = { analyticsContext: Y, beacon: L, conversationId: f, state: A, presentationKey: B }),
          w(A));
      }),
      (n[58] = Y),
      (n[59] = A),
      (n[60] = f),
      (n[61] = B),
      (n[62] = P),
      (n[63] = S),
      (n[64] = L),
      (n[65] = N?.suppressLifecycle),
      (n[66] = qe))
    : (qe = n[66]);
  let Je = qe,
    Ye = `conversation-beacon:${f}:${B}`,
    $;
  n[67] !== a ||
  n[68] !== s ||
  n[69] !== Y ||
  n[70] !== U ||
  n[71] !== Z ||
  n[72] !== f ||
  n[73] !== Ke ||
  n[74] !== ze ||
  n[75] !== Je ||
  n[76] !== Ve ||
  n[77] !== Ue ||
  n[78] !== I ||
  n[79] !== b ||
  n[80] !== x ||
  n[81] !== Le ||
  n[82] !== B ||
  n[83] !== k ||
  n[84] !== L ||
  n[85] !== N
    ? (($ = (e) =>
        (0, O.jsx)(
          _e,
          {
            accountId: k ?? f,
            actionOverrides: Z,
            allowExternalActions: a,
            allowRemoteImages: s,
            analyticsContext: Y,
            beacon: L,
            eventMetadata: N,
            getActionOverride: Ke,
            onActionComplete: Ve,
            onComposerText: b,
            onDismiss: ze,
            onUnsupported: Ue,
            onModalOpen: () => {
              (e(), Je());
            },
            pcaConversationId: ee(f),
            preserveOpenPageContextPresentation: I,
            onStartVoice: x,
            renderPresentation: (e) => {
              let { content: t, supportStatus: n } = e;
              return (0, O.jsx)(ve, {
                closeWithoutDismiss: U,
                openPresentation: Le,
                openPresentationRef: C,
                supportStatus: n,
                terminalPresentationStatesRef: E,
                children: t,
              });
            },
          },
          B,
        )),
      (n[67] = a),
      (n[68] = s),
      (n[69] = Y),
      (n[70] = U),
      (n[71] = Z),
      (n[72] = f),
      (n[73] = Ke),
      (n[74] = ze),
      (n[75] = Je),
      (n[76] = Ve),
      (n[77] = Ue),
      (n[78] = I),
      (n[79] = b),
      (n[80] = x),
      (n[81] = Le),
      (n[82] = B),
      (n[83] = k),
      (n[84] = L),
      (n[85] = N),
      (n[86] = $))
    : ($ = n[86]);
  let Xe;
  return (
    n[87] !== Ye || n[88] !== $
      ? ((Xe = (0, O.jsx)(de, {
          source: `conversation`,
          candidate: { id: Ye, waitsForPresentation: !0, status: `eligible`, render: $ },
        })),
        (n[87] = Ye),
        (n[88] = $),
        (n[89] = Xe))
      : (Xe = n[89]),
    Xe
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
    ((xe = a()), s(), (D = r()), S(), x(), T(), f(), v(), n(), g(), b(), C(), y(), (O = i()));
  }))();
}
function k(e) {
  let n = (0, A.c)(19),
    {
      actionOverrides: r,
      allowConversationSharing: i,
      allowExternalActions: a,
      allowRegeneration: s,
      allowRemoteImages: c,
      conversationId: l,
      getActionOverride: u,
      isTemporaryChat: d,
      onComposerText: f,
      onStartVoice: p,
      regenerationModelSlug: te,
    } = e,
    m = s === void 0 || s,
    h = te === void 0 ? null : te,
    g = t(o),
    _;
  n[0] !== m || n[1] !== l || n[2] !== d || n[3] !== h || n[4] !== g
    ? ((_ = m ? me({ scope: g, allowedModelSlug: h, conversationId: ee(l), isTemporaryChat: d }) : void 0),
      (n[0] = m),
      (n[1] = l),
      (n[2] = d),
      (n[3] = h),
      (n[4] = g),
      (n[5] = _))
    : (_ = n[5]);
  let v;
  n[6] !== r || n[7] !== _ ? ((v = { ...r, regenerate: _ }), (n[6] = r), (n[7] = _), (n[8] = v)) : (v = n[8]);
  let y = v,
    b;
  return (
    n[9] !== i ||
    n[10] !== a ||
    n[11] !== c ||
    n[12] !== y ||
    n[13] !== l ||
    n[14] !== u ||
    n[15] !== d ||
    n[16] !== f ||
    n[17] !== p
      ? ((b = (0, Ce.jsx)(E, {
          actionOverrides: y,
          allowConversationSharing: i,
          allowExternalActions: a,
          allowRemoteImages: c,
          conversationId: l,
          getActionOverride: u,
          isCompetingModalOpen: !1,
          isTemporaryChat: d,
          onComposerText: f,
          onStartVoice: p,
        })),
        (n[9] = i),
        (n[10] = a),
        (n[11] = c),
        (n[12] = y),
        (n[13] = l),
        (n[14] = u),
        (n[15] = d),
        (n[16] = f),
        (n[17] = p),
        (n[18] = b))
      : (b = n[18]),
    b
  );
}
var A, Ce;
function j() {
  return (j = e(() => {
    ((A = a()), s(), n(), g(), Se(), w(), (Ce = i()));
  }))();
}
j();
export { k as ChatGptConversationBeaconModalSurface };
//# sourceMappingURL=modal-surface-8cc92c398738.js.map
