import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Hxt as t,
  O3t as n,
  QWt as r,
  U3t as i,
  YWt as a,
  _Yt as o,
  a3t as s,
  aSt as c,
  c6t as l,
  dKt as u,
  fKt as d,
  gSt as f,
  hYt as p,
  jrn as m,
  krn as h,
  lxt as g,
  mYt as _,
  o3t as v,
  pSt as y,
  rrn as b,
  sxt as x,
  uSt as S,
  wrn as C,
  yYt as w,
} from "./app-initial-f094ef01c64d.js";
function T(e, t) {
  if (
    !(Date.parse(e.updated_at) > Date.parse(t.enabledFrom)) ||
    e.safety_check_status === `approved`
  )
    return null;
  let n = e.safety_scan?.risk_score;
  return n == null || Number.isNaN(n)
    ? null
    : n >= t.blockedScore
      ? `blocked`
      : n >= t.warningScore
        ? `needsReview`
        : null;
}
function E(e, t) {
  return !e.surfaces?.length || e.surfaces.includes(t);
}
function D(e) {
  return e.display_name?.trim() || e.name;
}
function O(e, t) {
  return e.id !== `system_699a14cbc6e4819181b9a89478de1733` || t;
}
var k = e(() => {});
async function A(e, t, n) {
  let r = e.get(N);
  if (r == null || e.get(P) !== !0 || (!n && t.id.startsWith(`system_`))) return !1;
  await f(r.accountId, t.id, n);
  let i = [`browser-skills`, r.accountId, r.userId];
  return (
    await e.queryClient.cancelQueries({ queryKey: i }),
    e.queryClient.setQueriesData({ queryKey: [...i, `collection`] }, (e) =>
      e?.map((e) => (e.id === t.id ? { ...e, enabled: n } : e)),
    ),
    e.queryClient.setQueryData([...i, `collection`, `installed`], (e) =>
      n
        ? [...(e?.filter((e) => e.id !== t.id) ?? []), { ...t, enabled: n }]
        : e?.filter((e) => e.id !== t.id),
    ),
    e.queryClient.setQueryData([...i, `detail`, t.id], { ...t, enabled: n }),
    e.get(N)?.accountId === r.accountId && e.get(N)?.userId === r.userId
  );
}
async function j(e, n) {
  let r = e.get(N);
  if (r == null || e.get(P) !== !0) return;
  let i = await t(r.accountId, n.id),
    a = [`browser-skills`, r.accountId, r.userId];
  (await e.queryClient.cancelQueries({ queryKey: a }),
    e.queryClient.setQueriesData({ queryKey: [...a, `collection`] }, (e) =>
      e?.map((e) => (e.id === n.id ? i : e)),
    ),
    e.queryClient.setQueryData([...a, `detail`, n.id], i));
}
var M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B = e(() => {
    (n(),
      b(),
      g(),
      r(),
      d(),
      S(),
      v(),
      _(),
      (M = l(s, ({ get: e }) => (e(w) ? null : (e(o)?.getDynamicConfig(`3553340571`) ?? null)))),
      (N = l(s, ({ get: e }) => {
        let t = e(a),
          n = e(x);
        return t.authLoading ||
          t.accountLoading ||
          t.authMethod !== `chatgpt` ||
          n == null ||
          t.accountId !== n ||
          t.authenticatedAccountId !== n
          ? null
          : { accountId: n, userId: t.userId, isWorkspace: t.accountStructure === `workspace` };
      })),
      (P = l(s, ({ get: e }) => {
        let t = e(M),
          n = e(N);
        if (t == null || n == null) return null;
        if (!t.get(`enable_api`, !1)) return !1;
        if (!n.isWorkspace) return !0;
        let r = e(p, `1355972088`);
        if (r && !t.get(`skills_rbac_enabled`, !1)) return !0;
        let { data: i, isLoading: a, isError: o } = e(u, n.accountId);
        return a
          ? null
          : r
            ? o || i == null
              ? !1
              : i.permissions?.includes(`chatgpt.workspace.skills.access`) === !0
            : (i?.beta_settings.skills ?? !0);
      })),
      (F = l(s, ({ get: e }) => {
        let t = e(M),
          n = m([C(), h()]).transform(Number).pipe(C());
        return {
          enabledFrom: t?.get(`enable_safety_filter_date`, ``) ?? ``,
          warningScore: n.catch(2).parse(t?.get(`hazelnut_min_warning_safety_score`)),
          blockedScore: n.catch(5).parse(t?.get(`hazelnut_min_blocked_safety_score`)),
        };
      })),
      (I = l(s, ({ get: e }) => {
        if (e(P) !== !0) return !1;
        let t = e(N),
          n = e(M);
        return (
          !t?.isWorkspace ||
          !e(p, `1355972088`) ||
          !n?.get(`skills_rbac_enabled`, !1) ||
          !e(p, `2711242789`) ||
          e(u, t.accountId).data?.permissions?.includes(`chatgpt.workspace.skills.create`) === !0
        );
      })),
      (L = l(
        s,
        ({ get: e }) => e(N)?.isWorkspace === !0 && e(M)?.get(`skills_rbac_enabled`, !1) === !0,
      )),
      (R = i(s, (e, { get: t }) => {
        let n = t(N),
          r = e === `workspace-shared` || e === `shared-personal`;
        return {
          queryKey: [`browser-skills`, n?.accountId, n?.userId, `collection`, e],
          enabled:
            t(P) === !0 && n != null && (!r || n.isWorkspace) && (e !== `shared-personal` || t(L)),
          staleTime: 5 * 6e4,
          queryFn: async () => {
            if (n == null) throw Error(`Skills account unavailable`);
            return (await y(n.accountId, e)).hazelnuts;
          },
        };
      })),
      (z = i(s, (e, { get: t }) => {
        let n = t(N);
        return {
          queryKey: [`browser-skills`, n?.accountId, n?.userId, `detail`, e],
          enabled: t(P) === !0 && n != null,
          staleTime: 5 * 6e4,
          queryFn: () => {
            if (n == null) throw Error(`Skills account unavailable`);
            return c(n.accountId, e);
          },
        };
      })));
  });
export {
  F as a,
  R as c,
  O as d,
  D as f,
  E as h,
  z as i,
  N as l,
  k as m,
  B as n,
  P as o,
  T as p,
  A as r,
  I as s,
  j as t,
  L as u,
};
//# sourceMappingURL=state-42e575f64eb1.js.map
