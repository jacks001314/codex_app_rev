import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as n,
  Fat as r,
  IDt as i,
  Ixt as a,
  Pat as o,
  Pxt as s,
  crt as c,
  hot as l,
  iot as u,
  irt as d,
  jDt as f,
  ldt as p,
  lot as m,
  lrt as h,
  nst as g,
  rrt as _,
  srt as v,
  tst as y,
  vzt as b,
  wot as x,
  xMt as S,
  yzt as C,
  zxt as w,
} from "./app-shared-bbfeca5e5737.js";
import {
  BPr as T,
  HPr as E,
  Jdr as D,
  Kkn as O,
  Ydr as k,
  Zkn as A,
  __r as ee,
  dAn as te,
  dFr as j,
  fAn as M,
  m_r as N,
  oFr as P,
  uAn as F,
  uFr as I,
} from "./app-initial-5851df3f6cb1.js";
import { o as L, t as R, x as z } from "./plugins-page-selectors-463d7aa7d76e.js";
import { n as B, r as V, t as H } from "./recommended-skill-statsig-overrides-446bdc28c39a.js";
function U(e) {
  let t = (0, G.c)(29),
    { hostId: n, loadOnMount: r } = e,
    i = r === void 0 || r,
    a = g(),
    s = V(),
    l;
  t[0] === n
    ? (l = t[1])
    : ((l = d(`recommended-skills`, { hostId: n, refresh: !1 })), (t[0] = n), (t[1] = l));
  let u = l,
    f;
  t[2] === n ? (f = t[3]) : ((f = { hostId: n, refresh: !1 }), (t[2] = n), (t[3] = f));
  let p;
  t[4] === i ? (p = t[5]) : ((p = { enabled: i, staleTime: o.FIVE_MINUTES }), (t[4] = i), (t[5] = p));
  let m;
  t[6] !== f || t[7] !== p
    ? ((m = { params: f, queryConfig: p }), (t[6] = f), (t[7] = p), (t[8] = m))
    : (m = t[8]);
  let v = c(`recommended-skills`, m),
    y = v.data?.error ?? (v.error ? (v.error.message ?? v.error) : null),
    b = h(`install-recommended-skill`),
    x;
  t[9] !== n || t[10] !== a || t[11] !== u
    ? ((x = async () => {
        let e = await _(`recommended-skills`, { params: { hostId: n, refresh: !0 } });
        a.setQueryData(u, e);
      }),
      (t[9] = n),
      (t[10] = a),
      (t[11] = u),
      (t[12] = x))
    : (x = t[12]);
  let S = x,
    C = W,
    w;
  t[13] !== n || t[14] !== v.data?.skills || t[15] !== a || t[16] !== u
    ? ((w = async (e) => {
        let t = C(v.data?.skills ?? [], e);
        if (t) return t;
        let r = await _(`recommended-skills`, { params: { hostId: n, refresh: !1 } });
        return (a.setQueryData(u, r), C(r.skills, e));
      }),
      (t[13] = n),
      (t[14] = v.data?.skills),
      (t[15] = a),
      (t[16] = u),
      (t[17] = w))
    : (w = t[17]);
  let T = w,
    E;
  t[18] !== n || t[19] !== b || t[20] !== s
    ? ((E = async (e) => {
        let { skill: t, installRoot: r } = e,
          i = r === void 0 ? null : r;
        return b.mutateAsync({
          hostId: n,
          skillId: t.id,
          repoPath: t.repoPath,
          installRoot: i,
          skillStatsigOverride: H(s, t.id),
        });
      }),
      (t[18] = n),
      (t[19] = b),
      (t[20] = s),
      (t[21] = E))
    : (E = t[21]);
  let D = E,
    O;
  return (
    t[22] !== T || t[23] !== y || t[24] !== D || t[25] !== v.data || t[26] !== v.isLoading || t[27] !== S
      ? ((O = {
          data: v.data,
          errorMessage: y,
          isLoading: v.isLoading,
          refresh: S,
          ensureSkillByName: T,
          installSkill: D,
        }),
        (t[22] = T),
        (t[23] = y),
        (t[24] = D),
        (t[25] = v.data),
        (t[26] = v.isLoading),
        (t[27] = S),
        (t[28] = O))
      : (O = t[28]),
    O
  );
}
function W(e, t) {
  let n = t.toLowerCase();
  return (
    e.find((e) => {
      let t = e.name.toLowerCase(),
        r = e.id.toLowerCase();
      return t === n || r === n;
    }) ?? null
  );
}
var G;
function K() {
  return (K = e(() => {
    ((G = b()), y(), r(), v(), B());
  }))();
}
function q(e) {
  let t = (0, Y.c)(6),
    n = k(e === void 0 ? u : e),
    r = n != null,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = n == null ? null : X.default.join(n, `vendor_imports`, `skills`)), (t[0] = n), (t[1] = i));
  let a = n == null ? null : `${n}/skills/.system/skill-creator/SKILL.md`,
    o;
  return (
    t[2] !== r || t[3] !== i || t[4] !== a
      ? ((o = { canInstallRecommendedSkills: r, defaultRecommendedRepoRoot: i, skillCreatorPath: a }),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function ne(e) {
  let t = (0, Y.c)(28),
    n = e === void 0 ? u : e,
    r = E(),
    [, i] = j(`skills_refresh_nonce`),
    a;
  t[0] === n ? (a = t[1]) : ((a = { hostId: n }), (t[0] = n), (t[1] = a));
  let o = w(ee, a),
    s;
  t[2] === o.data?.roots ? (s = t[3]) : ((s = o.data?.roots ?? []), (t[2] = o.data?.roots), (t[3] = s));
  let c = s,
    { skills: l, isFetching: d, isLoading: f, forceReload: p } = M(c, n),
    m;
  t[4] === p
    ? (m = t[5])
    : ((m = async () => {
        await p();
      }),
      (t[4] = p),
      (t[5] = m));
  let h = m,
    g,
    _,
    v,
    y;
  if (t[6] !== h || t[7] !== l) {
    g = O(l);
    let e;
    (t[12] === l ? (e = t[13]) : ((e = z(l)), (t[12] = l), (t[13] = e)),
      (_ = e),
      (v = h),
      (y = R(g)),
      (t[6] = h),
      (t[7] = l),
      (t[8] = g),
      (t[9] = _),
      (t[10] = v),
      (t[11] = y));
  } else ((g = t[8]), (_ = t[9]), (v = t[10]), (y = t[11]));
  let b = o.isFetching || d,
    x = o.isLoading || f,
    S;
  t[14] !== h || t[15] !== r || t[16] !== i
    ? ((S = () => {
        J({ forceReload: h, invalidateQueriesAndBroadcast: r, setSkillsRefreshNonce: i });
      }),
      (t[14] = h),
      (t[15] = r),
      (t[16] = i),
      (t[17] = S))
    : (S = t[17]);
  let C;
  return (
    t[18] !== g ||
    t[19] !== l ||
    t[20] !== _ ||
    t[21] !== v ||
    t[22] !== y ||
    t[23] !== b ||
    t[24] !== x ||
    t[25] !== S ||
    t[26] !== c
      ? ((C = {
          forceReloadSkills: v,
          installedSkillMatchKeys: y,
          installedSkillMetadata: l,
          isFetching: b,
          isLoading: x,
          markSkillsUpdated: S,
          skills: g,
          standaloneInstalledSkills: _,
          workspaceRoots: c,
        }),
        (t[18] = g),
        (t[19] = l),
        (t[20] = _),
        (t[21] = v),
        (t[22] = y),
        (t[23] = b),
        (t[24] = x),
        (t[25] = S),
        (t[26] = c),
        (t[27] = C))
      : (C = t[27]),
    C
  );
}
function re(e, t, n) {
  let r = (0, Y.c)(15),
    i;
  r[0] !== t || r[1] !== n
    ? ((i = { hostId: t, loadOnMount: n }), (r[0] = t), (r[1] = n), (r[2] = i))
    : (i = r[2]);
  let { data: a, errorMessage: o, isLoading: s, refresh: c } = U(i),
    l = n ? o : null,
    u = n && s,
    d;
  r[3] !== n || r[4] !== c
    ? ((d = async () => {
        n && (await c());
      }),
      (r[3] = n),
      (r[4] = c),
      (r[5] = d))
    : (d = r[5]);
  let f = n ? (a?.repoRoot ?? e) : null,
    p;
  r[6] !== a?.skills || r[7] !== n
    ? ((p = n ? (a?.skills ?? []) : []), (r[6] = a?.skills), (r[7] = n), (r[8] = p))
    : (p = r[8]);
  let m;
  return (
    r[9] !== l || r[10] !== u || r[11] !== d || r[12] !== f || r[13] !== p
      ? ((m = { errorMessage: l, isLoading: u, refresh: d, repoRoot: f, skills: p }),
        (r[9] = l),
        (r[10] = u),
        (r[11] = d),
        (r[12] = f),
        (r[13] = p),
        (r[14] = m))
      : (m = r[14]),
    m
  );
}
function ie(e) {
  let t = (0, Y.c)(21),
    { forceReloadSkills: r, hostId: o, onInstalled: s } = e,
    c = a(n),
    u = E(),
    [, f] = j(`skills_refresh_nonce`),
    p = k(o) != null,
    m = V(),
    [g, _] = (0, Z.useState)(null),
    v;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((v = Symbol()), (t[0] = v)) : (v = t[0]);
  let y = (0, Z.useRef)(v),
    b;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = {}), (t[1] = b)) : (b = t[1]);
  let [x, S] = (0, Z.useState)(b),
    C = h(`install-recommended-skill`),
    w;
  t[2] === o
    ? (w = t[3])
    : ((w = () => {
        ((y.current = Symbol()), _(null), S((e) => ({ ...e, [o]: [] })));
      }),
      (t[2] = o),
      (t[3] = w));
  let T;
  t[4] !== p ||
  t[5] !== r ||
  t[6] !== o ||
  t[7] !== C ||
  t[8] !== u ||
  t[9] !== s ||
  t[10] !== m ||
  t[11] !== c ||
  t[12] !== f
    ? ((T = (e, t) => {
        if (!p) return;
        let n = y.current;
        (_(e.id),
          C.mutate(
            {
              hostId: o,
              skillId: e.id,
              repoPath: e.repoPath,
              installRoot: t,
              skillStatsigOverride: H(m, e.id),
            },
            {
              onSuccess: (t, a) => {
                t.success &&
                  y.current === n &&
                  (S((e) => {
                    let t = e[a.hostId];
                    return t?.includes(a.skillId) ? e : { ...e, [a.hostId]: [...(t ?? []), a.skillId] };
                  }),
                  u(d(`recommended-skills`)),
                  J({ forceReload: r, invalidateQueriesAndBroadcast: u, setSkillsRefreshNonce: f }),
                  s?.(),
                  c
                    .get(l)
                    .success(
                      (0, Q.jsx)(i, {
                        id: `skills.recommended.installSuccess`,
                        defaultMessage: `{skillName} skill installed`,
                        description: `Toast shown after successfully installing a recommended skill`,
                        values: {
                          skillName: (0, Q.jsx)(`span`, { className: `font-medium`, children: e.name }),
                        },
                      }),
                    ));
              },
              onSettled: () => {
                y.current === n && _((t) => (t === e.id ? null : t));
              },
            },
          ));
      }),
      (t[4] = p),
      (t[5] = r),
      (t[6] = o),
      (t[7] = C),
      (t[8] = u),
      (t[9] = s),
      (t[10] = m),
      (t[11] = c),
      (t[12] = f),
      (t[13] = T))
    : (T = t[13]);
  let D = x[o],
    O;
  t[14] === D ? (O = t[15]) : ((O = new Set(D)), (t[14] = D), (t[15] = O));
  let A;
  return (
    t[16] !== g || t[17] !== w || t[18] !== T || t[19] !== O
      ? ((A = {
          clearInstalledRecommendedSkills: w,
          installRecommendedSkill: T,
          installedRecommendedSkillIds: O,
          installingSkillId: g,
        }),
        (t[16] = g),
        (t[17] = w),
        (t[18] = T),
        (t[19] = O),
        (t[20] = A))
      : (A = t[20]),
    A
  );
}
function J({ forceReload: e, invalidateQueriesAndBroadcast: t, setSkillsRefreshNonce: n }) {
  (t(F), e(), n((e) => (e ?? 0) + 1));
}
var Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((Y = b()),
      s(),
      (X = t(p(), 1)),
      (Z = C()),
      f(),
      m(),
      D(),
      T(),
      x(),
      N(),
      P(),
      I(),
      v(),
      L(),
      A(),
      B(),
      K(),
      te(),
      (Q = S()));
  }))();
}
export { q as a, re as i, ie as n, ne as r, $ as t };
//# sourceMappingURL=use-skills-page-data-8427fb73d2f5.js.map
