import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  Amn as r,
  O3t as i,
  a3t as a,
  cHt as o,
  hZt as ee,
  hmn as s,
  kmn as c,
  lHt as l,
  o3t as u,
  oHt as d,
  pZt as te,
  uHt as ne,
} from "./app-initial-f094ef01c64d.js";
import {
  $x as f,
  Bx as p,
  ES as m,
  Jx as h,
  Qx as g,
  Rx as _,
  TS as v,
  Ux as y,
  Wx as b,
  Xx as x,
  Yx as S,
  Zx as C,
  eS as re,
  gS as w,
  hS as ie,
  zx as ae,
} from "./app-primary-4c40d73a1074.js";
function T(e) {
  let t = (0, A.c)(10),
    n,
    r,
    i;
  if (
    (t[0] === e
      ? ((n = t[1]), (r = t[2]), (i = t[3]))
      : (({ source: n, typedSitesMentionRef: i, ...r } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = i)),
    m(n))
  ) {
    let e;
    return (
      t[4] !== n || t[5] !== r
        ? ((e = (0, M.jsx)(h, { ...r, source: n })), (t[4] = n), (t[5] = r), (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  let a;
  return (
    t[7] !== r || t[8] !== i
      ? ((a = (0, M.jsx)(E, { ...r, typedSitesMentionRef: i })), (t[7] = r), (t[8] = i), (t[9] = a))
      : (a = t[9]),
    a
  );
}
function E(e) {
  let t = (0, A.c)(43),
    {
      backgroundAgents: r,
      className: i,
      chromeVariant: o,
      excludedAgentConversationIds: s,
      excludedThreadReferences: c,
      hostId: l,
      isHomeMenu: u,
      keyboardEventTarget: d,
      leadingItems: f,
      pluginHostId: m,
      onAddContext: h,
      onRequestClose: _,
      onUpdateSelectedMention: v,
      placement: y,
      query: b,
      rankingContext: x,
      fileSearchRootPaths: C,
      selectedModel: w,
      skillRoots: T,
      threadSearchRoots: E,
      typedSitesMentionRef: D,
    } = e,
    O;
  t[0] === r ? (O = t[1]) : ((O = r === void 0 ? [] : r), (t[0] = r), (t[1] = O));
  let N = O,
    P = o === void 0 ? `default` : o,
    F;
  t[2] === s ? (F = t[3]) : ((F = s === void 0 ? [] : s), (t[2] = s), (t[3] = F));
  let I = F,
    L;
  t[4] === c ? (L = t[5]) : ((L = c === void 0 ? [] : c), (t[4] = c), (t[5] = L));
  let R = L,
    z = u !== void 0 && u,
    se = f === void 0 ? [] : f,
    B = y === void 0 ? `top` : y,
    V = n(a),
    H = p(ae(), k),
    U = (0, j.useRef)(null),
    W;
  t[6] !== R || t[7] !== l || t[8] !== b || t[9] !== E
    ? ((W = { excludedThreadReferences: R, hostId: l, query: b, roots: E }),
      (t[6] = R),
      (t[7] = l),
      (t[8] = b),
      (t[9] = E),
      (t[10] = W))
    : (W = t[10]);
  let G = g(W),
    K;
  t[11] !== N ||
  t[12] !== I ||
  t[13] !== C ||
  t[14] !== l ||
  t[15] !== m ||
  t[16] !== b ||
  t[17] !== w ||
  t[18] !== T ||
  t[19] !== G
    ? ((K = {
        backgroundAgents: N,
        excludedAgentConversationIds: I,
        hostId: l,
        pluginHostId: m,
        query: b,
        roots: C,
        selectedModel: w,
        skillRoots: T,
        threadSource: G,
      }),
      (t[11] = N),
      (t[12] = I),
      (t[13] = C),
      (t[14] = l),
      (t[15] = m),
      (t[16] = b),
      (t[17] = w),
      (t[18] = T),
      (t[19] = G),
      (t[20] = K))
    : (K = t[20]);
  let { sections: ce } = re(K),
    q = ie(ce, b, se, !1, x),
    J = q.some(oe),
    Y;
  t[21] === V
    ? (Y = t[22])
    : ((Y = () => {
        ne(V, {
          action: te.CODEX_APPGEN_INTERACTION_ACTION_MENTION_SUGGESTIONS_LOADED,
          source: ee.CODEX_APPGEN_INTERACTION_SOURCE_AT_MENTION,
        });
      }),
      (t[21] = V),
      (t[22] = Y));
  let X = (0, j.useEffectEvent)(Y),
    Z;
  t[23] !== J || t[24] !== X || t[25] !== H || t[26] !== D
    ? ((Z = () => {
        if (H == null || D?.current !== H) {
          U.current = null;
          return;
        }
        J && U.current !== H && ((U.current = H), X());
      }),
      (t[23] = J),
      (t[24] = X),
      (t[25] = H),
      (t[26] = D),
      (t[27] = Z))
    : (Z = t[27]);
  let Q;
  (t[28] !== J || t[29] !== H || t[30] !== D
    ? ((Q = [J, H, D]), (t[28] = J), (t[29] = H), (t[30] = D), (t[31] = Q))
    : (Q = t[31]),
    (0, j.useEffect)(Z, Q));
  let $;
  return (
    t[32] !== P ||
    t[33] !== i ||
    t[34] !== z ||
    t[35] !== d ||
    t[36] !== h ||
    t[37] !== _ ||
    t[38] !== v ||
    t[39] !== B ||
    t[40] !== b ||
    t[41] !== q
      ? (($ = (0, M.jsx)(S, {
          className: i,
          chromeVariant: P,
          isHomeMenu: z,
          keyboardEventTarget: d,
          onAddContext: h,
          onRequestClose: _,
          onUpdateSelectedMention: v,
          placement: B,
          query: b,
          sections: q,
        })),
        (t[32] = P),
        (t[33] = i),
        (t[34] = z),
        (t[35] = d),
        (t[36] = h),
        (t[37] = _),
        (t[38] = v),
        (t[39] = B),
        (t[40] = b),
        (t[41] = q),
        (t[42] = $))
      : ($ = t[42]),
    $
  );
}
function oe(e) {
  return e.items.some(D);
}
function D(e) {
  let { key: t, searchTerms: n } = e;
  return (
    t.startsWith(`site:`) || t === `plugin:plugin://${d}` || (t.startsWith(`app:`) && n?.some(O))
  );
}
function O(e) {
  return e.trim().toLowerCase() === `sites`;
}
function k(e) {
  let t = y.getState(e.view.state);
  return t?.active === !0 &&
    t.activation === `typed` &&
    t.kind === `at-mention` &&
    t.trigger === `@`
    ? (t.range?.from ?? null)
    : null;
}
var A, j, M;
e(() => {
  ((A = c()), i(), (j = t(r(), 1)), l(), v(), o(), u(), x(), w(), b(), _(), f(), C(), (M = s()));
})();
export { T as PrimaryComposerAtMentionList };
//# sourceMappingURL=primary-composer-at-mention-list-f7e9ab40467d.js.map
