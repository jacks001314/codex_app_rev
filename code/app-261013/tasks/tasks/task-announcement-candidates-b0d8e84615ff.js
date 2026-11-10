import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  GE as n,
  IDt as r,
  Ixt as i,
  Pxt as a,
  WE as o,
  jDt as s,
  vzt as c,
  wot as l,
  xMt as u,
  yzt as d,
  zxt as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  EXt as p,
  GHt as m,
  KHt as h,
  QBt as ee,
  XBt as g,
  eDr as _,
  fDn as v,
  fur as y,
  hHt as te,
  mDn as b,
  mur as x,
  nDr as S,
  nVt as C,
  pHt as w,
  rVt as T,
  tVt as E,
} from "./app-initial-5851df3f6cb1.js";
import {
  Ch as D,
  Dh as ne,
  Dy as O,
  Ey as k,
  Oh as A,
  Th as re,
  Ty as j,
  ch as ie,
  lh as M,
  wh as ae,
  wy as N,
} from "./app-primary-fe8a450b3b04.js";
import { n as P, t as F } from "./workspace-renewal-payment-a33960e1f2f0.js";
import { n as I, r as L, t as R } from "./state-58da6ae39d08.js";
function z(e) {
  let n = (0, ce.c)(54),
    { conversationId: r, turnId: a, suppressed: o } = e,
    s = S(o !== void 0 && o ? !1 : `3410379651`),
    c = i(t),
    { hostId: l } = f(b, r),
    u = x(l),
    { modelSettings: d, setModelAndReasoningEffortForNextTurn: m } = ee(r),
    g = d.model,
    _;
  n[0] === g ? (_ = n[1]) : ((_ = new Set([g])), (n[0] = g), (n[1] = _));
  let v = s && u?.authMethod === `chatgpt`,
    y;
  n[2] !== l || n[3] !== _ || n[4] !== v
    ? ((y = { additionalAvailableModels: _, enabled: v, hostId: l }),
      (n[2] = l),
      (n[3] = _),
      (n[4] = v),
      (n[5] = y))
    : (y = n[5]);
  let { data: w } = te(y),
    T = f(ae, g),
    D = f(re, g),
    [O, k] = (0, B.useState)(!1),
    [j, M] = (0, B.useState)(null),
    [N, P] = (0, B.useState)(se),
    F,
    I,
    L,
    R,
    z,
    V,
    H;
  n[6] !== g || n[7] !== j || n[8] !== w || n[9] !== d.reasoningEffort || n[10] !== N
    ? ((F = E(w?.models, g)),
      (z = F?.upgradeInfo?.retirementAt ?? null),
      (V = z == null ? null : z * 1e3),
      (L = V != null && V <= N),
      (I = j?.model === g && j.wasRetired === L),
      (R = F?.upgradeInfo == null ? void 0 : E(w?.models, F.upgradeInfo.model)),
      (H = C({
        userSavedModelString: R?.model ?? null,
        userSavedReasoningEffort: d.reasoningEffort,
        listModelsData: w,
      })),
      (n[6] = g),
      (n[7] = j),
      (n[8] = w),
      (n[9] = d.reasoningEffort),
      (n[10] = N),
      (n[11] = F),
      (n[12] = I),
      (n[13] = L),
      (n[14] = R),
      (n[15] = z),
      (n[16] = V),
      (n[17] = H))
    : ((F = n[11]), (I = n[12]), (L = n[13]), (R = n[14]), (z = n[15]), (V = n[16]), (H = n[17]));
  let U = H.reasoningEffort,
    W;
  (n[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = () => {
        P(Date.now());
      }),
      (n[18] = W))
    : (W = n[18]),
    h(W, V != null && !L ? Math.min(V - N, 2147483647) : null));
  let G =
      s &&
      u?.authMethod === `chatgpt` &&
      !d.isLoading &&
      (T === `switched` || L) &&
      R != null &&
      R.model !== g &&
      !I
        ? g
        : null,
    K;
  n[19] !== r ||
  n[20] !== g ||
  n[21] !== F ||
  n[22] !== L ||
  n[23] !== R ||
  n[24] !== U ||
  n[25] !== z ||
  n[26] !== c ||
  n[27] !== m ||
  n[28] !== a
    ? ((K = () => {
        R != null &&
          m(R.model, U)
            .then(() => {
              (L && A(c, g, `switched`),
                a != null &&
                  F != null &&
                  ne(c, {
                    conversationId: r,
                    replacementModelName: p(R.displayName),
                    retiringModelName: p(F.displayName),
                    turnId: a,
                    wasRetired: z == null || L,
                  }));
            })
            .catch(() => {
              M({ model: g, wasRetired: L });
            });
      }),
      (n[19] = r),
      (n[20] = g),
      (n[21] = F),
      (n[22] = L),
      (n[23] = R),
      (n[24] = U),
      (n[25] = z),
      (n[26] = c),
      (n[27] = m),
      (n[28] = a),
      (n[29] = K))
    : (K = n[29]);
  let q = (0, B.useEffectEvent)(K),
    J;
  n[30] !== G || n[31] !== q
    ? ((J = () => {
        G != null && q();
      }),
      (n[30] = G),
      (n[31] = q),
      (n[32] = J))
    : (J = n[32]);
  let Y;
  if (
    (n[33] === G ? (Y = n[34]) : ((Y = [G]), (n[33] = G), (n[34] = Y)),
    (0, B.useEffect)(J, Y),
    !s ||
      u?.authMethod !== `chatgpt` ||
      d.isLoading ||
      F == null ||
      R == null ||
      R.model === g ||
      (!L && (T === `dismissed` || (T === `override` && D))) ||
      ((T === `switched` || L) && !I))
  )
    return null;
  let X;
  n[35] !== g || n[36] !== c
    ? ((X = () => {
        A(c, g, `dismissed`);
      }),
      (n[35] = g),
      (n[36] = c),
      (n[37] = X))
    : (X = n[37]);
  let Z;
  n[38] !== g || n[39] !== R.model || n[40] !== U || n[41] !== c || n[42] !== m
    ? ((Z = () => {
        (k(!0),
          m(R.model, U)
            .then(() => {
              A(c, g, `switched`);
            })
            .catch(oe)
            .finally(() => {
              k(!1);
            }));
      }),
      (n[38] = g),
      (n[39] = R.model),
      (n[40] = U),
      (n[41] = c),
      (n[42] = m),
      (n[43] = Z))
    : (Z = n[43]);
  let Q;
  n[44] === R.displayName ? (Q = n[45]) : ((Q = p(R.displayName)), (n[44] = R.displayName), (n[45] = Q));
  let $;
  return (
    n[46] !== F || n[47] !== L || n[48] !== O || n[49] !== z || n[50] !== X || n[51] !== Z || n[52] !== Q
      ? (($ = (0, le.jsx)(ie, {
          currentModel: F,
          hasRetired: L,
          isSwitching: O,
          onDismiss: X,
          onSwitch: Z,
          replacementModel: Q,
          retirementAt: z,
        })),
        (n[46] = F),
        (n[47] = L),
        (n[48] = O),
        (n[49] = z),
        (n[50] = X),
        (n[51] = Z),
        (n[52] = Q),
        (n[53] = $))
      : ($ = n[53]),
    $
  );
}
function oe() {}
function se() {
  return Date.now();
}
var ce, B, le;
function V() {
  return (V = e(() => {
    ((ce = c()), a(), (B = d()), y(), M(), D(), g(), v(), w(), l(), _(), T(), m(), (le = u()));
  }))();
}
function H(e) {
  let n = (0, G.c)(27),
    { conversationId: a, hostId: s } = e,
    c;
  n[0] !== a || n[1] !== s
    ? ((c = { conversationId: a, hostId: s }), (n[0] = a), (n[1] = s), (n[2] = c))
    : (c = n[2]);
  let l = f(L, c),
    u = i(t),
    { modelSettings: d, setModelAndReasoningEffort: p } = ee(a),
    m;
  n[3] === d.model ? (m = n[4]) : ((m = new Set([d.model])), (n[3] = d.model), (n[4] = m));
  let h;
  n[5] !== s || n[6] !== m
    ? ((h = { hostId: s, additionalAvailableModels: m }), (n[5] = s), (n[6] = m), (n[7] = h))
    : (h = n[7]);
  let { data: g } = te(h),
    [_, v] = (0, K.useState)(!1),
    y;
  n[8] === u
    ? (y = n[9])
    : ((y = () => {
        u.set(I, W);
      }),
      (n[8] = u),
      (n[9] = y));
  let b = y;
  if (
    l == null ||
    d.isLoading ||
    d.reasoningEffort == null ||
    [`none`, `minimal`, `low`].includes(d.reasoningEffort) ||
    !g?.models
      .find((e) => {
        let { model: t } = e;
        return t === d.model;
      })
      ?.supportedReasoningEfforts.some(U)
  )
    return null;
  let x;
  n[10] !== u || n[11] !== l
    ? ((x = (e) => {
        e != null &&
          u.set(I, (e) =>
            e == null || e.lastSessionId === l
              ? e
              : { ...e, impressions: e.impressions + 1, lastSessionId: l },
          );
      }),
      (n[10] = u),
      (n[11] = l),
      (n[12] = x))
    : (x = n[12]);
  let S, C, w;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, q.jsx)(r, {
        id: `realtimeVoice.reasoningNotice.description`,
        defaultMessage: `Switch to Light for faster Voice replies`,
        description: `Voice chat notice recommending lower reasoning for faster spoken replies`,
      })),
      (C = (0, q.jsx)(r, {
        id: `realtimeVoice.reasoningNotice.useLight`,
        defaultMessage: `Use Light`,
        description: `Button that changes the current Voice task to Light reasoning`,
      })),
      (w = (0, q.jsx)(r, {
        id: `realtimeVoice.reasoningNotice.dismiss`,
        defaultMessage: `Got it`,
        description: `Button that permanently dismisses the Voice reasoning notice`,
      })),
      (n[13] = S),
      (n[14] = C),
      (n[15] = w))
    : ((S = n[13]), (C = n[14]), (w = n[15]));
  let T;
  n[16] !== b || n[17] !== d.model || n[18] !== p
    ? ((T = () => {
        (v(!0),
          p(d.model, `low`).then((e) => {
            (e && b(), v(!1));
          }));
      }),
      (n[16] = b),
      (n[17] = d.model),
      (n[18] = p),
      (n[19] = T))
    : (T = n[19]);
  let E;
  n[20] !== b || n[21] !== _ || n[22] !== T
    ? ((E = (0, q.jsx)(`div`, {
        className: `select-none`,
        "data-realtime-voice-reasoning-notice": !0,
        children: (0, q.jsx)(o, {
          density: `compact`,
          layout: `inline`,
          content: S,
          primaryCtaText: C,
          secondaryCtaText: w,
          isPrimaryCtaDisabled: _,
          onPrimaryCtaClick: T,
          onSecondaryCtaClick: b,
        }),
      })),
      (n[20] = b),
      (n[21] = _),
      (n[22] = T),
      (n[23] = E))
    : (E = n[23]);
  let D;
  return (
    n[24] !== E || n[25] !== x
      ? ((D = (0, q.jsx)(`div`, { ref: x, children: E })), (n[24] = E), (n[25] = x), (n[26] = D))
      : (D = n[26]),
    D
  );
}
function U(e) {
  let { reasoningEffort: t } = e;
  return t === `low`;
}
function W(e) {
  return e == null ? e : { ...e, dismissed: !0 };
}
var G, K, q;
function J() {
  return (J = e(() => {
    ((G = c()), a(), (K = d()), s(), n(), g(), w(), R(), l(), (q = u()));
  }))();
}
function Y(e) {
  let t = (0, Q.c)(17),
    { conversationId: n, hostId: r, turnId: i, candidates: a } = e,
    o;
  t[0] === a ? (o = t[1]) : ((o = a.some(Z)), (t[0] = a), (t[1] = o));
  let s;
  t[2] !== n || t[3] !== o || t[4] !== i
    ? ((s = { conversationId: n, turnId: i, suppressed: o }), (t[2] = n), (t[3] = o), (t[4] = i), (t[5] = s))
    : (s = t[5]);
  let c = z(s),
    l;
  t[6] !== n || t[7] !== r
    ? ((l = { conversationId: n, hostId: r }), (t[6] = n), (t[7] = r), (t[8] = l))
    : (l = t[8]);
  let u = H(l),
    d;
  t[9] === c ? (d = t[10]) : ((d = k(`model-upgrade`, c)), (t[9] = c), (t[10] = d));
  let f;
  t[11] === u ? (f = t[12]) : ((f = k(`voice-reasoning`, u)), (t[11] = u), (t[12] = f));
  let p;
  return (
    t[13] !== a || t[14] !== d || t[15] !== f
      ? ((p = (0, $.jsx)(F, { entries: [...a, d, f], renderSlot: X })),
        (t[13] = a),
        (t[14] = d),
        (t[15] = f),
        (t[16] = p))
      : (p = t[16]),
    p
  );
}
function X(e) {
  return (0, $.jsx)(N, { area: `task`, candidates: e });
}
function Z(e) {
  return (e.id === `cyber-safety` || e.id === `misalignment-policy`) && e.isEligible;
}
var Q, $;
function ue() {
  return (ue = e(() => {
    ((Q = c()), V(), J(), P(), O(), j(), ($ = u()));
  }))();
}
ue();
export { Y as TaskAnnouncementCandidates };
//# sourceMappingURL=task-announcement-candidates-b0d8e84615ff.js.map
