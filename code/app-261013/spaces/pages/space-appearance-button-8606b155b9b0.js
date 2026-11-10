import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Pxt as r,
  TJ as i,
  VDt as a,
  Vxt as o,
  dq as s,
  hot as c,
  jDt as l,
  lot as u,
  nSt as d,
  vzt as f,
  wot as p,
  xMt as m,
  yzt as h,
  zxt as g,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bar as _,
  Dor as v,
  Ear as y,
  Msn as b,
  Oor as x,
  XH as S,
  ZH as C,
  _nn as w,
  hU as T,
  hnn as E,
  iPr as D,
  mlt as O,
  mnn as k,
  pU as A,
  plt as j,
  qsn as M,
  rcn as N,
  sPr as P,
  vnn as F,
  xsn as I,
} from "./app-initial-5851df3f6cb1.js";
function L(e) {
  let r = (0, R.c)(32),
    { children: i, space: s } = e,
    l = n(t),
    u = a(),
    d;
  r[0] === l ? (d = r[1]) : ((d = () => l.get(v)), (r[0] = l), (r[1] = d));
  let [f] = (0, z.useState)(d),
    p = o(v),
    m = o(_) && f != null && p === f,
    h;
  r[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = { enabled: !1 }), (r[2] = h)) : (h = r[2]);
  let { data: y } = g(M, s.id, h),
    C;
  r[3] === s.id ? (C = r[4]) : ((C = { spaceId: s.id }), (r[3] = s.id), (r[4] = C));
  let T = g(w, C),
    E = g(B, s.id),
    [O, k] = (0, z.useState)(null);
  O != null &&
    !O.saving &&
    (T?.emoji ?? null) === (O.appearance.emoji ?? null) &&
    (T?.theme ?? null) === (O.appearance.theme ?? null) &&
    k(null);
  let A = y ?? s,
    j;
  r[5] !== A || r[6] !== y?.interaction_mode || r[7] !== m || r[8] !== E || r[9] !== s.interaction_mode
    ? ((j =
        m &&
        !E &&
        A.can_edit_appearance === !0 &&
        S(s.interaction_mode, y?.interaction_mode) !== `request_changes`),
      (r[5] = A),
      (r[6] = y?.interaction_mode),
      (r[7] = m),
      (r[8] = E),
      (r[9] = s.interaction_mode),
      (r[10] = j))
    : (j = r[10]);
  let P = j,
    F = O?.appearance ?? T ?? s.appearance,
    I = F?.emoji ?? null,
    L = F?.theme ?? null,
    V;
  r[11] !== f ||
  r[12] !== P ||
  r[13] !== I ||
  r[14] !== u ||
  r[15] !== O ||
  r[16] !== l ||
  r[17] !== s.id ||
  r[18] !== L
    ? ((V = async (e) => {
        if (!P || f == null || O?.saving === !0 || l.get(v) !== f) return;
        let t = x(l, f);
        (k({ appearance: { emoji: I, theme: L, ...e }, saving: !0 }),
          await D.safePatch(`/spaces/v2/{space_id}/appearance`, {
            parameters: { path: { space_id: s.id } },
            requestBody: e,
            signal: t.signal,
          })
            .then(async (e) => {
              t.signal.aborted ||
                (await Promise.all([l.query.cancel(N), l.query.cancel(M, s.id), l.query.cancel(b, s.id)]),
                !t.signal.aborted &&
                  (l.query.setData(N, (t) =>
                    t == null
                      ? t
                      : { ...t, items: t.items.map((t) => (t.id === s.id ? { ...t, appearance: e } : t)) },
                  ),
                  l.query.setData(M, s.id, (t) => (t == null ? t : { ...t, appearance: e })),
                  l.query.setData(b, s.id, (t) =>
                    t == null ? t : { ...t, space: { ...t.space, appearance: e } },
                  ),
                  k({ appearance: e, saving: !1 })));
            })
            .catch(() => {
              (k(O),
                t.signal.aborted ||
                  l
                    .get(c)
                    .danger(
                      u.formatMessage({
                        id: `codex.space.libraryAppearance.saveError`,
                        defaultMessage: `Could not save space appearance`,
                        description: `Toast shown when saving a Library Space icon and color fails. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                      }),
                      { errorAnalytics: { toastId: `codex.space.libraryAppearance.saveError` } },
                    ));
            })
            .finally(() => {
              (t.signal.aborted && k(null), t.stop());
            }));
      }),
      (r[11] = f),
      (r[12] = P),
      (r[13] = I),
      (r[14] = u),
      (r[15] = O),
      (r[16] = l),
      (r[17] = s.id),
      (r[18] = L),
      (r[19] = V))
    : (V = r[19]);
  let H = V;
  if (!m) return null;
  let U = O?.saving === !0,
    W,
    G;
  r[20] === H
    ? ((W = r[21]), (G = r[22]))
    : ((W = (e) => void H({ emoji: e })),
      (G = (e) => void H({ theme: e })),
      (r[20] = H),
      (r[21] = W),
      (r[22] = G));
  let K;
  return (
    r[23] !== P ||
    r[24] !== i ||
    r[25] !== I ||
    r[26] !== s.name ||
    r[27] !== U ||
    r[28] !== W ||
    r[29] !== G ||
    r[30] !== L
      ? ((K = i({
          canEditProject: P,
          emoji: I,
          isSaving: U,
          onEmojiChange: W,
          onThemeChange: G,
          projectName: s.name,
          theme: L,
        })),
        (r[23] = P),
        (r[24] = i),
        (r[25] = I),
        (r[26] = s.name),
        (r[27] = U),
        (r[28] = W),
        (r[29] = G),
        (r[30] = L),
        (r[31] = K))
      : (K = r[31]),
    K
  );
}
var R, z, B;
function V() {
  return (V = e(() => {
    ((R = f()),
      r(),
      (z = h()),
      l(),
      u(),
      p(),
      P(),
      A(),
      y(),
      C(),
      E(),
      I(),
      (B = d(t, (e, { get: t }) => t(T).some((t) => t.space?.spaceId === e && t.appearance != null))));
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
  let { metadata: o, liveSymbol: c } = g(F, i, a),
    l;
  t[4] !== c || t[5] !== o || t[6] !== r
    ? ((l = k(r, o, c)), (t[4] = c), (t[5] = o), (t[6] = r), (t[7] = l))
    : (l = t[7]);
  let u = l,
    d;
  t[8] !== n || t[9] !== u
    ? ((d =
        n ??
        ((e) =>
          (0, W.jsx)(j, {
            ...e,
            canEditProject: e.canEditProject && u == null,
            defaultIcon:
              u?.kind === `emoji`
                ? (0, W.jsx)(`span`, { "aria-hidden": !0, children: u.value })
                : (0, W.jsx)(s, {}),
            variant: `card`,
          }))),
      (t[8] = n),
      (t[9] = u),
      (t[10] = d))
    : (d = t[10]);
  let f = d,
    p;
  return (
    t[11] !== f || t[12] !== r
      ? ((p = (0, W.jsx)(L, { space: r, children: f }, r.id)), (t[11] = f), (t[12] = r), (t[13] = p))
      : (p = t[13]),
    p
  );
}
var U, W;
function G() {
  return (G = e(() => {
    ((U = f()), r(), O(), i(), V(), E(), (W = m()));
  }))();
}
export { G as n, H as t };
//# sourceMappingURL=space-appearance-button-8606b155b9b0.js.map
