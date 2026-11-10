import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Fat as n,
  Iot as r,
  Ixt as i,
  Lot as a,
  Pat as o,
  Pxt as s,
  Vxt as c,
  Xot as l,
  Yot as u,
  vzt as d,
  wot as f,
  xMt as p,
  yzt as m,
} from "./app-shared-bbfeca5e5737.js";
import {
  AMr as h,
  CR as g,
  DR as _,
  EPr as v,
  ER as y,
  JLt as b,
  LLt as x,
  NDr as S,
  OR as C,
  SR as w,
  ZMr as T,
  fur as E,
  jDr as D,
  kR as O,
  nSn as k,
  pur as A,
  rSn as j,
  tNr as M,
  vRt as N,
  xRt as P,
  zLt as F,
} from "./app-initial-5851df3f6cb1.js";
import { ib as I, rb as L } from "./app-primary-fe8a450b3b04.js";
import { n as R, t as z } from "./sidebar-onboarding-checklist.electron-ecfa5cc73ca0.js";
import { n as B, t as V } from "./use-initialize-sidebar-onboarding-checklist-b302cd2c01bc.js";
function H(e) {
  let t = (0, G.c)(14),
    { fallback: n } = e,
    r = c(T),
    i = c(P),
    { data: a } = c(D),
    s,
    u,
    d;
  t[0] !== r || t[1] !== i
    ? ((s = r.status === `allowed` && `plan` in r && v(r.plan)),
      (d = l),
      (u = L({
        authMethod: `chatgpt`,
        enabled: s && i != null,
        userId: i?.userId ?? null,
        workspaceId: i?.accountId,
      })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = s),
      (t[3] = u),
      (t[4] = d))
    : ((s = t[2]), (u = t[3]), (d = t[4]));
  let f;
  t[5] === u
    ? (f = t[6])
    : ((f = {
        ...u,
        refetchOnMount: !0,
        refetchOnWindowFocus: !0,
        refetchOnReconnect: !0,
        staleTime: o.TEN_MINUTES,
      }),
      (t[5] = u),
      (t[6] = f));
  let { data: p, isPending: m } = d(f);
  if (r.status === `loading` || (s && (i == null || m))) return null;
  if (s && i != null && p?.enabled) {
    let e;
    t[7] === i ? (e = t[8]) : ((e = C(i)), (t[7] = i), (t[8] = e));
    let n;
    return (
      t[9] !== i || t[10] !== e
        ? ((n = (0, q.jsx)(U, { identity: i }, e)), (t[9] = i), (t[10] = e), (t[11] = n))
        : (n = t[11]),
      n
    );
  }
  if (a?.seenAnnouncements?.[`oai/apps/hasCompletedFinservActions`] != null) return null;
  let h;
  return (
    t[12] === n ? (h = t[13]) : ((h = (0, q.jsx)(q.Fragment, { children: n })), (t[12] = n), (t[13] = h)),
    h
  );
}
function U(e) {
  let n = (0, G.c)(26),
    { identity: r } = e,
    a = i(t),
    { email: o, planAtLogin: s } = A(),
    u = B(a),
    { data: d } = c(D),
    f = c(b),
    p = d != null,
    m,
    h;
  n[0] !== r || n[1] !== f
    ? ((m = C(r)), (h = x(f, m)), (n[0] = r), (n[1] = f), (n[2] = m), (n[3] = h))
    : ((m = n[2]), (h = n[3]));
  let _ = h,
    v = d?.seenAnnouncements?.[y] != null,
    S = _ != null && !_.expired && !_.dismissed && !v,
    w;
  (n[4] !== m || n[5] !== S
    ? ((w = { accountId: m, desktopOnboardingCompletedAt: null, enabled: S }),
      (n[4] = m),
      (n[5] = S),
      (n[6] = w))
    : (w = n[6]),
    g(a, w));
  let T;
  n[7] !== r.accountId || n[8] !== r.userId
    ? ((T = [`finance`, `initialize-checklist`, r.accountId, r.userId]),
      (n[7] = r.accountId),
      (n[8] = r.userId),
      (n[9] = T))
    : (T = n[9]);
  let E = d != null && !v && _ == null,
    O;
  n[10] !== o || n[11] !== r.accountId || n[12] !== u || n[13] !== s || n[14] !== m
    ? ((O = async (e) => {
        let { signal: t } = e;
        return (
          await u({
            accountId: r.accountId,
            independentStateKey: m,
            variant: `finance`,
            signal: t,
            email: o,
            plan: s,
            personalizedSuggestionsEnabled: !1,
            representativeRole: `finance`,
            roles: [`finance`],
            completedConversationalOnboardingTaskId: null,
            completedConversationalOnboardingTaskSnapshot: null,
          }),
          !0
        );
      }),
      (n[10] = o),
      (n[11] = r.accountId),
      (n[12] = u),
      (n[13] = s),
      (n[14] = m),
      (n[15] = O))
    : (O = n[15]);
  let k;
  if (
    (n[16] !== T || n[17] !== E || n[18] !== O
      ? ((k = { queryKey: T, enabled: E, staleTime: 0, retry: !1, queryFn: O }),
        (n[16] = T),
        (n[17] = E),
        (n[18] = O),
        (n[19] = k))
      : (k = n[19]),
    l(k),
    _ == null || !p || v || _.expired)
  )
    return null;
  let j = _.dismissed === !0,
    M;
  n[20] !== r || n[21] !== j
    ? ((M = (0, q.jsx)(W, { identity: r, dismissed: j })), (n[20] = r), (n[21] = j), (n[22] = M))
    : (M = n[22]);
  let N;
  return (
    n[23] !== m || n[24] !== M
      ? ((N = (0, q.jsx)(z, { checklistStateKey: m, onboardingRole: `finance`, finishedContent: M })),
        (n[23] = m),
        (n[24] = M),
        (n[25] = N))
      : (N = n[25]),
    N
  );
}
function W(e) {
  let n = (0, G.c)(12),
    { identity: r, dismissed: o } = e,
    s = i(t),
    c;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = [`finance`, `save-checklist-completion`]), (n[0] = c))
    : (c = n[0]);
  let l;
  n[1] !== o || n[2] !== r || n[3] !== s
    ? ((l = {
        mutationKey: c,
        mutationFn: (e) => _(s, r, e, { surface: `sidebar_checklist`, dismissed: o }),
        retry: 2,
      }),
      (n[1] = o),
      (n[2] = r),
      (n[3] = s),
      (n[4] = l))
    : (l = n[4]);
  let { mutate: u } = a(l),
    d;
  n[5] !== u || n[6] !== s
    ? ((d = () => {
        let e = new AbortController(),
          t = s.watch((t) => {
            t.get(k) && u(e.signal);
          });
        return () => {
          (t(), e.abort());
        };
      }),
      (n[5] = u),
      (n[6] = s),
      (n[7] = d))
    : (d = n[7]);
  let f;
  return (
    n[8] !== r || n[9] !== u || n[10] !== s
      ? ((f = [s, r, u]), (n[8] = r), (n[9] = u), (n[10] = s), (n[11] = f))
      : (f = n[11]),
    (0, K.useEffect)(d, f),
    null
  );
}
var G, K, q;
function J() {
  return (J = e(() => {
    ((G = d()),
      r(),
      u(),
      s(),
      (K = m()),
      j(),
      M(),
      E(),
      S(),
      N(),
      F(),
      R(),
      V(),
      w(),
      f(),
      n(),
      h(),
      I(),
      O(),
      (q = p()));
  }))();
}
J();
export { H as FinanceOnboardingChecklist };
//# sourceMappingURL=onboarding-checklist.electron-5f92df07fbb9.js.map
