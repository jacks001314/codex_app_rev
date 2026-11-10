import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  LNt as i,
  PBt as a,
  Qst as o,
  XOt as s,
  ZSt as c,
  nCt as l,
  tkt as u,
  vD as d,
  yD as f,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Cjr as p,
  FAn as m,
  GRt as h,
  IJt as g,
  LAn as _,
  WRt as v,
  YLt as y,
  ZLt as ee,
  amr as b,
  dRt as x,
  eRt as S,
  nRt as C,
  pRt as te,
  rmr as w,
  tRt as T,
  xjr as E,
} from "./app-initial-ad16eaadf81f.js";
import {
  Bh as D,
  Ih as O,
  Jy as k,
  Ky as A,
  Lh as ne,
  Rh as re,
  Sh as j,
  Vh as M,
  Yy as ie,
  qy as N,
  xh as ae,
} from "./app-primary-3e00728c2a4c.js";
import { n as P, t as F } from "./workspace-renewal-payment-b21a13707fa8.js";
import { n as I, r as L, t as R } from "./state-c7fc406c6844.js";
function z(e) {
  let n = (0, ce.c)(54),
    { conversationId: r, turnId: i, suppressed: a } = e,
    s = p(a !== void 0 && a ? !1 : `3410379651`),
    c = t(o),
    { hostId: u } = l(_, r),
    d = b(u),
    { modelSettings: f, setModelAndReasoningEffortForNextTurn: m } = ee(r),
    v = f.model,
    y;
  n[0] === v ? (y = n[1]) : ((y = new Set([v])), (n[0] = v), (n[1] = y));
  let x = s && d?.authMethod === `chatgpt`,
    C;
  n[2] !== u || n[3] !== y || n[4] !== x
    ? ((C = { additionalAvailableModels: y, enabled: x, hostId: u }),
      (n[2] = u),
      (n[3] = y),
      (n[4] = x),
      (n[5] = C))
    : (C = n[5]);
  let { data: w } = te(C),
    E = l(ne, v),
    O = l(re, v),
    [k, A] = (0, B.useState)(!1),
    [j, ie] = (0, B.useState)(null),
    [N, P] = (0, B.useState)(se),
    F,
    I,
    L,
    R,
    z,
    V,
    H;
  n[6] !== v || n[7] !== j || n[8] !== w || n[9] !== f.reasoningEffort || n[10] !== N
    ? ((F = S(w?.models, v)),
      (z = F?.upgradeInfo?.retirementAt ?? null),
      (V = z == null ? null : z * 1e3),
      (L = V != null && V <= N),
      (I = j?.model === v && j.wasRetired === L),
      (R = F?.upgradeInfo == null ? void 0 : S(w?.models, F.upgradeInfo.model)),
      (H = T({
        userSavedModelString: R?.model ?? null,
        userSavedReasoningEffort: f.reasoningEffort,
        listModelsData: w,
      })),
      (n[6] = v),
      (n[7] = j),
      (n[8] = w),
      (n[9] = f.reasoningEffort),
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
      d?.authMethod === `chatgpt` &&
      !f.isLoading &&
      (E === `switched` || L) &&
      R != null &&
      R.model !== v &&
      !I
        ? v
        : null,
    K;
  n[19] !== r ||
  n[20] !== v ||
  n[21] !== F ||
  n[22] !== L ||
  n[23] !== R ||
  n[24] !== U ||
  n[25] !== z ||
  n[26] !== c ||
  n[27] !== m ||
  n[28] !== i
    ? ((K = () => {
        R != null &&
          m(R.model, U)
            .then(() => {
              (L && M(c, v, `switched`),
                i != null &&
                  F != null &&
                  D(c, {
                    conversationId: r,
                    replacementModelName: g(R.displayName),
                    retiringModelName: g(F.displayName),
                    turnId: i,
                    wasRetired: z == null || L,
                  }));
            })
            .catch(() => {
              ie({ model: v, wasRetired: L });
            });
      }),
      (n[19] = r),
      (n[20] = v),
      (n[21] = F),
      (n[22] = L),
      (n[23] = R),
      (n[24] = U),
      (n[25] = z),
      (n[26] = c),
      (n[27] = m),
      (n[28] = i),
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
      d?.authMethod !== `chatgpt` ||
      f.isLoading ||
      F == null ||
      R == null ||
      R.model === v ||
      (!L && (E === `dismissed` || (E === `override` && O))) ||
      ((E === `switched` || L) && !I))
  )
    return null;
  let X;
  n[35] !== v || n[36] !== c
    ? ((X = () => {
        M(c, v, `dismissed`);
      }),
      (n[35] = v),
      (n[36] = c),
      (n[37] = X))
    : (X = n[37]);
  let Z;
  n[38] !== v || n[39] !== R.model || n[40] !== U || n[41] !== c || n[42] !== m
    ? ((Z = () => {
        (A(!0),
          m(R.model, U)
            .then(() => {
              M(c, v, `switched`);
            })
            .catch(oe)
            .finally(() => {
              A(!1);
            }));
      }),
      (n[38] = v),
      (n[39] = R.model),
      (n[40] = U),
      (n[41] = c),
      (n[42] = m),
      (n[43] = Z))
    : (Z = n[43]);
  let Q;
  n[44] === R.displayName ? (Q = n[45]) : ((Q = g(R.displayName)), (n[44] = R.displayName), (n[45] = Q));
  let $;
  return (
    n[46] !== F || n[47] !== L || n[48] !== k || n[49] !== z || n[50] !== X || n[51] !== Z || n[52] !== Q
      ? (($ = (0, le.jsx)(ae, {
          currentModel: F,
          hasRetired: L,
          isSwitching: k,
          onDismiss: X,
          onSwitch: Z,
          replacementModel: Q,
          retirementAt: z,
        })),
        (n[46] = F),
        (n[47] = L),
        (n[48] = k),
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
    ((ce = a()), c(), (B = r()), w(), j(), O(), y(), m(), x(), n(), E(), C(), v(), (le = i()));
  }))();
}
function H(e) {
  let n = (0, G.c)(27),
    { conversationId: r, hostId: i } = e,
    a;
  n[0] !== r || n[1] !== i
    ? ((a = { conversationId: r, hostId: i }), (n[0] = r), (n[1] = i), (n[2] = a))
    : (a = n[2]);
  let s = l(L, a),
    c = t(o),
    { modelSettings: f, setModelAndReasoningEffort: p } = ee(r),
    m;
  n[3] === f.model ? (m = n[4]) : ((m = new Set([f.model])), (n[3] = f.model), (n[4] = m));
  let h;
  n[5] !== i || n[6] !== m
    ? ((h = { hostId: i, additionalAvailableModels: m }), (n[5] = i), (n[6] = m), (n[7] = h))
    : (h = n[7]);
  let { data: g } = te(h),
    [_, v] = (0, K.useState)(!1),
    y;
  n[8] === c
    ? (y = n[9])
    : ((y = () => {
        c.set(I, W);
      }),
      (n[8] = c),
      (n[9] = y));
  let b = y;
  if (
    s == null ||
    f.isLoading ||
    f.reasoningEffort == null ||
    [`none`, `minimal`, `low`].includes(f.reasoningEffort) ||
    !g?.models
      .find((e) => {
        let { model: t } = e;
        return t === f.model;
      })
      ?.supportedReasoningEfforts.some(U)
  )
    return null;
  let x;
  n[10] !== c || n[11] !== s
    ? ((x = (e) => {
        e != null &&
          c.set(I, (e) =>
            e == null || e.lastSessionId === s
              ? e
              : { ...e, impressions: e.impressions + 1, lastSessionId: s },
          );
      }),
      (n[10] = c),
      (n[11] = s),
      (n[12] = x))
    : (x = n[12]);
  let S, C, w;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, q.jsx)(u, {
        id: `realtimeVoice.reasoningNotice.description`,
        defaultMessage: `Switch to Light for faster Voice replies`,
        description: `Voice chat notice recommending lower reasoning for faster spoken replies`,
      })),
      (C = (0, q.jsx)(u, {
        id: `realtimeVoice.reasoningNotice.useLight`,
        defaultMessage: `Use Light`,
        description: `Button that changes the current Voice task to Light reasoning`,
      })),
      (w = (0, q.jsx)(u, {
        id: `realtimeVoice.reasoningNotice.dismiss`,
        defaultMessage: `Got it`,
        description: `Button that permanently dismisses the Voice reasoning notice`,
      })),
      (n[13] = S),
      (n[14] = C),
      (n[15] = w))
    : ((S = n[13]), (C = n[14]), (w = n[15]));
  let T;
  n[16] !== b || n[17] !== f.model || n[18] !== p
    ? ((T = () => {
        (v(!0),
          p(f.model, `low`).then((e) => {
            (e && b(), v(!1));
          }));
      }),
      (n[16] = b),
      (n[17] = f.model),
      (n[18] = p),
      (n[19] = T))
    : (T = n[19]);
  let E;
  n[20] !== b || n[21] !== _ || n[22] !== T
    ? ((E = (0, q.jsx)(`div`, {
        className: `select-none`,
        "data-realtime-voice-reasoning-notice": !0,
        children: (0, q.jsx)(d, {
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
    ((G = a()), c(), (K = r()), s(), f(), y(), x(), R(), n(), (q = i()));
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
  return (0, $.jsx)(A, { area: `task`, candidates: e });
}
function Z(e) {
  return (e.id === `cyber-safety` || e.id === `misalignment-policy`) && e.isEligible;
}
var Q, $;
function ue() {
  return (ue = e(() => {
    ((Q = a()), V(), J(), P(), ie(), N(), ($ = i()));
  }))();
}
ue();
export { Y as TaskAnnouncementCandidates };
//# sourceMappingURL=task-announcement-candidates-017ccecc082f.js.map
