const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./migration-onboarding-9b7356e3f28d.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./migration-onboarding-171bd0d04eb5.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./workspace-621c2c3096f1.js",
      "./session-594d75fbcc25.js",
      "./logout-engine-3e5ca2b0809a.js",
      "./datadog-rum.browser-33db5871e35e.js",
      "./esm-8e4e46801569.js",
      "./datadogProfiler-4df79f82be1b.js",
      "./replayStats-8eb2b3f5a1de.js",
      "./radio-group-11cefafc81df.js",
      "./radio-group-f986fd79de87.css",
      "./started-toast-a5d7b9a4a671.js",
      "./progress-state-2676229eff7e.js",
      "./chatgpt-saved-memory-state-4d665a109b5e.js",
      "./chatgpt-memory-source-feedback-2f818b93aa99.js",
      "./chatgpt-memory-citation-analytics-03fd6073aa78.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  Cot as n,
  Ixt as r,
  Nxt as i,
  Pxt as a,
  VDt as o,
  Vxt as s,
  _xt as c,
  fPt as l,
  jDt as u,
  pPt as d,
  vzt as f,
  wot as p,
  xMt as m,
  yzt as h,
  z4 as g,
  zxt as _,
} from "./app-shared-bbfeca5e5737.js";
import {
  AMr as v,
  FMr as y,
  LMr as b,
  NDr as x,
  NPr as S,
  OPr as C,
  fur as w,
  jDr as T,
  kPr as E,
  pOr as D,
  pur as O,
  zOr as k,
} from "./app-initial-5851df3f6cb1.js";
import { a as A, i as j, n as M, t as N } from "./started-toast-a5d7b9a4a671.js";
function P(e) {
  let t = (0, z.c)(10),
    { children: n } = e,
    { authMethod: r, accountId: i, userId: a } = O(),
    o = s(D);
  if (r !== `chatgpt` || i == null || a == null) return n;
  if (i !== o) return null;
  let c;
  t[0] === i ? (c = t[1]) : ((c = (0, V.jsx)(L, { accountId: i })), (t[0] = i), (t[1] = c));
  let l = `${a}:${i}`,
    u;
  t[2] !== i || t[3] !== n || t[4] !== l || t[5] !== a
    ? ((u = (0, V.jsx)(F, { accountId: i, userId: a, children: n }, l)),
      (t[2] = i),
      (t[3] = n),
      (t[4] = l),
      (t[5] = a),
      (t[6] = u))
    : (u = t[6]);
  let d;
  return (
    t[7] !== c || t[8] !== u
      ? ((d = (0, V.jsxs)(V.Fragment, { children: [c, u] })), (t[7] = c), (t[8] = u), (t[9] = d))
      : (d = t[9]),
    d
  );
}
function F(e) {
  let t = (0, z.c)(6),
    { accountId: n, userId: r, children: i } = e,
    [a, o] = (0, B.useState)(!1),
    [c, l] = (0, B.useState)(null),
    { data: u, isError: d } = s(T);
  if (a || (c == null && d)) return i;
  if (c == null && u == null) return null;
  if (c == null && !u?.eligibleAnnouncements?.includes(`oai/apps/hasSeenMigrationOnboarding`)) return i;
  let f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = () => o(!0)), (t[0] = f)) : (f = t[0]);
  let p;
  return (
    t[1] !== n || t[2] !== c || t[3] !== i || t[4] !== r
      ? ((p = (0, V.jsx)(I, {
          accountId: n,
          userId: r,
          activeTransferAccounts: c,
          onActiveTransferChange: l,
          onTransferStarted: f,
          children: i,
        })),
        (t[1] = n),
        (t[2] = c),
        (t[3] = i),
        (t[4] = r),
        (t[5] = p))
      : (p = t[5]),
    p
  );
}
function I(e) {
  let t = (0, z.c)(20),
    {
      accountId: n,
      userId: r,
      activeTransferAccounts: i,
      onActiveTransferChange: a,
      onTransferStarted: o,
      children: c,
    } = e,
    { data: l, isError: u } = _(b, n),
    d = _(E, `3283824397`),
    f = _(E, `1439503871`),
    p = s(S),
    m = l?.accounts[n]?.account.account_residency_region;
  if (i == null && u) return c;
  if (i == null && (l == null || (m != null && m !== `` && m !== `no_constraint` && p))) return null;
  let h;
  t[0] !== n || t[1] !== l || t[2] !== i || t[3] !== d || t[4] !== f
    ? ((h = i ?? (l == null ? null : j(l, n, d, f).accounts)),
      (t[0] = n),
      (t[1] = l),
      (t[2] = i),
      (t[3] = d),
      (t[4] = f),
      (t[5] = h))
    : (h = t[5]);
  let g = h;
  if (g == null) return c;
  let v;
  t[6] !== g || t[7] !== a
    ? ((v = (e) => {
        a(e ? g : null);
      }),
      (t[6] = g),
      (t[7] = a),
      (t[8] = v))
    : (v = t[8]);
  let x;
  t[9] !== g.destination.account_user_role || t[10] !== g.destination.plan_type
    ? ((x = g.destination.account_user_role === `account-owner` && y(g.destination.plan_type)),
      (t[9] = g.destination.account_user_role),
      (t[10] = g.destination.plan_type),
      (t[11] = x))
    : (x = t[11]);
  let C;
  return (
    t[12] !== n ||
    t[13] !== c ||
    t[14] !== g.personalAccountId ||
    t[15] !== o ||
    t[16] !== v ||
    t[17] !== x ||
    t[18] !== r
      ? ((C = (0, V.jsx)(H, {
          accountId: n,
          userId: r,
          personalAccountId: g.personalAccountId,
          onTransferStarted: o,
          onTransferActiveChange: v,
          isBusinessOwner: x,
          children: c,
        })),
        (t[12] = n),
        (t[13] = c),
        (t[14] = g.personalAccountId),
        (t[15] = o),
        (t[16] = v),
        (t[17] = x),
        (t[18] = r),
        (t[19] = C))
      : (C = t[19]),
    C
  );
}
function L(e) {
  let t = (0, z.c)(7),
    { accountId: a } = e,
    s = r(n),
    c = o(),
    [l, u] = i(),
    d,
    f;
  return (
    t[0] !== a || t[1] !== c || t[2] !== s || t[3] !== l || t[4] !== u
      ? ((d = () => {
          l.get(`_tm`) === `account_transfer_started` &&
            l.get(`migration_workspace_id`) === a &&
            (M(s, c), u(R, { replace: !0 }));
        }),
        (f = [a, c, s, l, u]),
        (t[0] = a),
        (t[1] = c),
        (t[2] = s),
        (t[3] = l),
        (t[4] = u),
        (t[5] = d),
        (t[6] = f))
      : ((d = t[5]), (f = t[6])),
    (0, B.useEffect)(d, f),
    null
  );
}
function R(e) {
  return (e.delete(`_tm`), e.delete(`migration_workspace_id`), e);
}
var z, B, V, H;
function U() {
  return (U = e(() => {
    ((z = f()),
      a(),
      (B = h()),
      u(),
      c(),
      w(),
      k(),
      x(),
      g(),
      p(),
      C(),
      v(),
      A(),
      N(),
      (V = m()),
      d(),
      (H = t(
        async () =>
          (
            await l(
              async () => {
                let { MigrationOnboarding: e } = await import(`./migration-onboarding-9b7356e3f28d.js`);
                return { MigrationOnboarding: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
              import.meta.url,
            )
          ).MigrationOnboarding,
        { errorFallback: ({ children: e }) => e },
      )));
  }))();
}
U();
export { P as PersonalMigrationAnnouncementHost };
//# sourceMappingURL=announcement-host-7b2bca63f9f9.js.map
