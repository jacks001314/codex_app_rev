import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  LNt as i,
  PBt as a,
  Qst as o,
  TY as s,
  Vrt as c,
  XOt as l,
  ZSt as u,
  dJ as d,
  iCt as f,
  nCt as p,
  okt as m,
  qrt as h,
  yCt as g,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  DW as _,
  Edn as v,
  Fan as y,
  Ian as b,
  Olr as x,
  Ran as S,
  Vdn as C,
  Zdn as w,
  _ur as T,
  dW as E,
  gur as D,
  hdn as O,
  iRr as k,
  kW as A,
  mlr as j,
  sRr as M,
  uW as N,
  vut as P,
  yut as F,
  zan as I,
} from "./app-initial-ad16eaadf81f.js";
function L(e) {
  let n = (0, R.c)(32),
    { children: r, space: i } = e,
    a = t(o),
    s = m(),
    c;
  n[0] === a ? (c = n[1]) : ((c = () => a.get(D)), (n[0] = a), (n[1] = c));
  let [l] = (0, z.useState)(c),
    u = f(D),
    d = f(x) && l != null && u === l,
    g;
  n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = { enabled: !1 }), (n[2] = g)) : (g = n[2]);
  let { data: _ } = p(C, i.id, g),
    y;
  n[3] === i.id ? (y = n[4]) : ((y = { spaceId: i.id }), (n[3] = i.id), (n[4] = y));
  let b = p(S, y),
    E = p(B, i.id),
    [O, A] = (0, z.useState)(null);
  O != null &&
    !O.saving &&
    (b?.emoji ?? null) === (O.appearance.emoji ?? null) &&
    (b?.theme ?? null) === (O.appearance.theme ?? null) &&
    A(null);
  let j = _ ?? i,
    M;
  n[5] !== j || n[6] !== _?.interaction_mode || n[7] !== d || n[8] !== E || n[9] !== i.interaction_mode
    ? ((M =
        d &&
        !E &&
        j.can_edit_appearance === !0 &&
        N(i.interaction_mode, _?.interaction_mode) !== `request_changes`),
      (n[5] = j),
      (n[6] = _?.interaction_mode),
      (n[7] = d),
      (n[8] = E),
      (n[9] = i.interaction_mode),
      (n[10] = M))
    : (M = n[10]);
  let P = M,
    F = O?.appearance ?? b ?? i.appearance,
    I = F?.emoji ?? null,
    L = F?.theme ?? null,
    V;
  n[11] !== l ||
  n[12] !== P ||
  n[13] !== I ||
  n[14] !== s ||
  n[15] !== O ||
  n[16] !== a ||
  n[17] !== i.id ||
  n[18] !== L
    ? ((V = async (e) => {
        if (!P || l == null || O?.saving === !0 || a.get(D) !== l) return;
        let t = T(a, l);
        (A({ appearance: { emoji: I, theme: L, ...e }, saving: !0 }),
          await k
            .safePatch(`/spaces/v2/{space_id}/appearance`, {
              parameters: { path: { space_id: i.id } },
              requestBody: e,
              signal: t.signal,
            })
            .then(async (e) => {
              t.signal.aborted ||
                (await Promise.all([a.query.cancel(w), a.query.cancel(C, i.id), a.query.cancel(v, i.id)]),
                !t.signal.aborted &&
                  (a.query.setData(w, (t) =>
                    t == null
                      ? t
                      : { ...t, items: t.items.map((t) => (t.id === i.id ? { ...t, appearance: e } : t)) },
                  ),
                  a.query.setData(C, i.id, (t) => (t == null ? t : { ...t, appearance: e })),
                  a.query.setData(v, i.id, (t) =>
                    t == null ? t : { ...t, space: { ...t.space, appearance: e } },
                  ),
                  A({ appearance: e, saving: !1 })));
            })
            .catch(() => {
              (A(O),
                t.signal.aborted ||
                  a
                    .get(h)
                    .danger(
                      s.formatMessage({
                        id: `codex.space.libraryAppearance.saveError`,
                        defaultMessage: `Could not save space appearance`,
                        description: `Toast shown when saving a Library Space icon and color fails. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                      }),
                      { errorAnalytics: { toastId: `codex.space.libraryAppearance.saveError` } },
                    ));
            })
            .finally(() => {
              (t.signal.aborted && A(null), t.stop());
            }));
      }),
      (n[11] = l),
      (n[12] = P),
      (n[13] = I),
      (n[14] = s),
      (n[15] = O),
      (n[16] = a),
      (n[17] = i.id),
      (n[18] = L),
      (n[19] = V))
    : (V = n[19]);
  let H = V;
  if (!d) return null;
  let U = O?.saving === !0,
    W,
    G;
  n[20] === H
    ? ((W = n[21]), (G = n[22]))
    : ((W = (e) => void H({ emoji: e })),
      (G = (e) => void H({ theme: e })),
      (n[20] = H),
      (n[21] = W),
      (n[22] = G));
  let K;
  return (
    n[23] !== P ||
    n[24] !== r ||
    n[25] !== I ||
    n[26] !== i.name ||
    n[27] !== U ||
    n[28] !== W ||
    n[29] !== G ||
    n[30] !== L
      ? ((K = r({
          canEditProject: P,
          emoji: I,
          isSaving: U,
          onEmojiChange: W,
          onThemeChange: G,
          projectName: i.name,
          theme: L,
        })),
        (n[23] = P),
        (n[24] = r),
        (n[25] = I),
        (n[26] = i.name),
        (n[27] = U),
        (n[28] = W),
        (n[29] = G),
        (n[30] = L),
        (n[31] = K))
      : (K = n[31]),
    K
  );
}
var R, z, B;
function V() {
  return (V = e(() => {
    ((R = a()),
      u(),
      (z = r()),
      l(),
      c(),
      n(),
      M(),
      _(),
      j(),
      E(),
      b(),
      O(),
      (B = g(o, (e, { get: t }) => t(A).some((t) => t.space?.spaceId === e && t.appearance != null))));
  }))();
}
function H(e) {
  let t = (0, U.c)(14),
    { children: n, space: r } = e,
    i;
  t[0] !== r.id || t[1] !== r.root_page_id
    ? ((i = { spaceId: r.id, pageId: r.root_page_id }), (t[0] = r.id), (t[1] = r.root_page_id), (t[2] = i))
    : (i = t[2]);
  let a;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = { enabled: !1 }), (t[3] = a)) : (a = t[3]);
  let { metadata: o, liveSymbol: s } = p(I, i, a),
    c;
  t[4] !== s || t[5] !== o || t[6] !== r
    ? ((c = y(r, o, s)), (t[4] = s), (t[5] = o), (t[6] = r), (t[7] = c))
    : (c = t[7]);
  let l = c,
    u;
  t[8] !== n || t[9] !== l
    ? ((u =
        n ??
        ((e) =>
          (0, W.jsx)(P, {
            ...e,
            canEditProject: e.canEditProject && l == null,
            defaultIcon:
              l?.kind === `emoji`
                ? (0, W.jsx)(`span`, { "aria-hidden": !0, children: l.value })
                : (0, W.jsx)(d, {}),
            variant: `card`,
          }))),
      (t[8] = n),
      (t[9] = l),
      (t[10] = u))
    : (u = t[10]);
  let f = u,
    m;
  return (
    t[11] !== f || t[12] !== r
      ? ((m = (0, W.jsx)(L, { space: r, children: f }, r.id)), (t[11] = f), (t[12] = r), (t[13] = m))
      : (m = t[13]),
    m
  );
}
var U, W;
function G() {
  return (G = e(() => {
    ((U = a()), u(), F(), s(), V(), b(), (W = i()));
  }))();
}
export { G as n, H as t };
//# sourceMappingURL=space-appearance-button-cab15cc62ff2.js.map
