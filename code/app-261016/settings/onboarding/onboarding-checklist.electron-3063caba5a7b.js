import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Bst as r,
  FBt as i,
  LNt as a,
  Mst as o,
  PBt as s,
  Qst as c,
  ZSt as l,
  iCt as u,
  jst as d,
  vst as f,
  yst as p,
  zst as m,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  KPt as h,
  OFt as g,
  TFt as _,
  WPt as v,
  az as y,
  dTn as b,
  dz as x,
  eMr as S,
  fz as C,
  imr as w,
  lz as T,
  nMr as E,
  oz as D,
  rmr as O,
  sBr as k,
  tFt as A,
  tLr as j,
  uTn as M,
  uz as N,
  wLr as P,
  xLr as F,
} from "./app-initial-ad16eaadf81f.js";
import { Eb as I, Tb as L } from "./app-primary-3e00728c2a4c.js";
import { n as R, t as z } from "./sidebar-onboarding-checklist.electron-9c2446c40227.js";
import { n as B, t as V } from "./use-initialize-sidebar-onboarding-checklist-559a7dc5394e.js";
function H(e) {
  let t = (0, G.c)(14),
    { fallback: n } = e,
    r = u(F),
    i = u(g),
    { data: a } = u(S),
    s,
    c,
    l;
  t[0] !== r || t[1] !== i
    ? ((s = r.status === `allowed` && `plan` in r && k(r.plan)),
      (l = o),
      (c = L({
        authMethod: `chatgpt`,
        enabled: s && i != null,
        userId: i?.userId ?? null,
        workspaceId: i?.accountId,
      })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = s),
      (t[3] = c),
      (t[4] = l))
    : ((s = t[2]), (c = t[3]), (l = t[4]));
  let d;
  t[5] === c
    ? (d = t[6])
    : ((d = {
        ...c,
        refetchOnMount: !0,
        refetchOnWindowFocus: !0,
        refetchOnReconnect: !0,
        staleTime: m.TEN_MINUTES,
      }),
      (t[5] = c),
      (t[6] = d));
  let { data: f, isPending: p } = l(d);
  if (r.status === `loading` || (s && (i == null || p))) return null;
  if (s && i != null && f?.enabled) {
    let e;
    t[7] === i ? (e = t[8]) : ((e = x(i)), (t[7] = i), (t[8] = e));
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
    i = t(c),
    { email: a, planAtLogin: s } = w(),
    l = B(i),
    { data: d } = u(S),
    f = u(A),
    p = d != null,
    m,
    h;
  n[0] !== r || n[1] !== f
    ? ((m = x(r)), (h = v(f, m)), (n[0] = r), (n[1] = f), (n[2] = m), (n[3] = h))
    : ((m = n[2]), (h = n[3]));
  let g = h,
    _ = d?.seenAnnouncements?.[T] != null,
    y = g != null && !g.expired && !g.dismissed && !_,
    b;
  (n[4] !== m || n[5] !== y
    ? ((b = { accountId: m, desktopOnboardingCompletedAt: null, enabled: y }),
      (n[4] = m),
      (n[5] = y),
      (n[6] = b))
    : (b = n[6]),
    D(i, b));
  let C;
  n[7] !== r.accountId || n[8] !== r.userId
    ? ((C = [`finance`, `initialize-checklist`, r.accountId, r.userId]),
      (n[7] = r.accountId),
      (n[8] = r.userId),
      (n[9] = C))
    : (C = n[9]);
  let E = d != null && !_ && g == null,
    O;
  n[10] !== a || n[11] !== r.accountId || n[12] !== l || n[13] !== s || n[14] !== m
    ? ((O = async (e) => {
        let { signal: t } = e;
        return (
          await l({
            accountId: r.accountId,
            independentStateKey: m,
            variant: `finance`,
            signal: t,
            email: a,
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
      (n[10] = a),
      (n[11] = r.accountId),
      (n[12] = l),
      (n[13] = s),
      (n[14] = m),
      (n[15] = O))
    : (O = n[15]);
  let k;
  if (
    (n[16] !== C || n[17] !== E || n[18] !== O
      ? ((k = { queryKey: C, enabled: E, staleTime: 0, retry: !1, queryFn: O }),
        (n[16] = C),
        (n[17] = E),
        (n[18] = O),
        (n[19] = k))
      : (k = n[19]),
    o(k),
    g == null || !p || _ || g.expired)
  )
    return null;
  let j = g.dismissed === !0,
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
    { identity: r, dismissed: i } = e,
    a = t(c),
    o;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = [`finance`, `save-checklist-completion`]), (n[0] = o))
    : (o = n[0]);
  let s;
  n[1] !== i || n[2] !== r || n[3] !== a
    ? ((s = {
        mutationKey: o,
        mutationFn: (e) => N(a, r, e, { surface: `sidebar_checklist`, dismissed: i }),
        retry: 2,
      }),
      (n[1] = i),
      (n[2] = r),
      (n[3] = a),
      (n[4] = s))
    : (s = n[4]);
  let { mutate: l } = p(s),
    u;
  n[5] !== l || n[6] !== a
    ? ((u = () => {
        let e = new AbortController(),
          t = a.watch((t) => {
            t.get(M) && l(e.signal);
          });
        return () => {
          (t(), e.abort());
        };
      }),
      (n[5] = l),
      (n[6] = a),
      (n[7] = u))
    : (u = n[7]);
  let d;
  return (
    n[8] !== r || n[9] !== l || n[10] !== a
      ? ((d = [a, r, l]), (n[8] = r), (n[9] = l), (n[10] = a), (n[11] = d))
      : (d = n[11]),
    (0, K.useEffect)(u, d),
    null
  );
}
var G, K, q;
function J() {
  return (J = e(() => {
    ((G = s()),
      f(),
      d(),
      l(),
      (K = i()),
      b(),
      P(),
      O(),
      E(),
      _(),
      h(),
      R(),
      V(),
      y(),
      n(),
      r(),
      j(),
      I(),
      C(),
      (q = a()));
  }))();
}
J();
export { H as FinanceOnboardingChecklist };
//# sourceMappingURL=onboarding-checklist.electron-3063caba5a7b.js.map
