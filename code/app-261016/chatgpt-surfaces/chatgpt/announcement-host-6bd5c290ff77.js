const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./workspace-discovery-f9d2dc27cf79.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-295ec67e1c5d.css",
      "./workspace-discovery-c32912566416.js",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./workspace-2b6b070f8f00.js",
      "./session-7c09e4681e00.js",
      "./logout-engine-8fde8f64413f.js",
      "./datadog-rum.browser-219d0f1d0fbd.js",
      "./esm-b96d2f3fb76a.js",
      "./datadogProfiler-ae8ea0e10132.js",
      "./replayStats-8eb2b3f5a1de.js",
      "./workspace-picker-row-c31eb90f1084.js",
      "./workspace-avatar-fallback-a91361d9829b.js",
      "./workspace-identifier-79e2a97aa9b9.js",
      "./queries-216aaf6d66eb.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  F3 as n,
  FBt as r,
  I3 as i,
  LNt as a,
  OFt as o,
  PBt as s,
  Qst as c,
  SCt as l,
  ZSt as u,
  iCt as d,
  kFt as f,
  nCt as p,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Tcn as m,
  Y2 as h,
  YRr as g,
  Z2 as _,
  eMr as v,
  imr as y,
  nMr as b,
  nzr as x,
  rmr as S,
  sBr as C,
  tLr as w,
  wcn as T,
} from "./app-initial-ad16eaadf81f.js";
import { c as E, i as D, o as O, s as k, t as A } from "./queries-216aaf6d66eb.js";
function j(e) {
  let t = (0, I.c)(4),
    { children: n } = e,
    { authMethod: r, userId: i, accountId: a } = y();
  if (r !== `chatgpt` || i == null || a == null) return n;
  let o;
  return (
    t[0] !== a || t[1] !== n || t[2] !== i
      ? ((o = (0, R.jsx)(M, { userId: i, accountId: a, children: n }, i)),
        (t[0] = a),
        (t[1] = n),
        (t[2] = i),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function M(e) {
  let t = (0, I.c)(4),
    { userId: n, accountId: r, children: i } = e;
  if (!p(B, n)) return i;
  let a;
  return (
    t[0] !== r || t[1] !== i || t[2] !== n
      ? ((a = (0, R.jsx)(N, { userId: n, accountId: r, children: i }, r)),
        (t[0] = r),
        (t[1] = i),
        (t[2] = n),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function N(e) {
  let t = (0, I.c)(8),
    { userId: n, accountId: r, children: i } = e,
    [a, o] = (0, L.useState)(null),
    s;
  t[0] !== r || t[1] !== n
    ? ((s = { accountId: r, userId: n }), (t[0] = r), (t[1] = n), (t[2] = s))
    : (s = t[2]);
  let { data: c, isError: l } = p(h, s),
    { data: u, isError: f } = d(v),
    { data: g, isError: _ } = m();
  if (a != null) {
    let e;
    return (
      t[3] !== i || t[4] !== a || t[5] !== c?.email || t[6] !== n
        ? ((e = a ? (0, R.jsx)(F, { userId: n, email: c?.email ?? null, children: i }, c?.email) : i),
          (t[3] = i),
          (t[4] = a),
          (t[5] = c?.email),
          (t[6] = n),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  return l || f || _
    ? i
    : (c == null ||
        u == null ||
        g == null ||
        o(
          O(c) &&
            !!u.eligibleAnnouncements?.includes(`oai/apps/hasSeenWorkspaceDiscoveryFirstLogin`) &&
            !g.accounts?.some(P),
        ),
      null);
}
function P(e) {
  return C(e.plan_type);
}
function F(e) {
  let t = (0, I.c)(7),
    { userId: n, email: r, children: i } = e,
    { accountId: a } = y(),
    [o, s] = (0, L.useState)(null),
    c;
  t[0] !== r || t[1] !== n
    ? ((c = { userId: n, email: r, query: `` }), (t[0] = r), (t[1] = n), (t[2] = c))
    : (c = t[2]);
  let { data: l, isPending: u, isError: d } = p(D, c);
  if (o != null) {
    let e;
    return (
      t[3] !== a || t[4] !== i || t[5] !== o
        ? ((e = o ? (0, R.jsx)(z, { children: i }, a) : i), (t[3] = a), (t[4] = i), (t[5] = o), (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  if (u) return null;
  let f = l?.pages[0];
  return (s(!d && f != null && (f.workspaces.length > 0 || f.completion === `more`)), null);
}
var I, L, R, z, B;
function V() {
  return (V = e(() => {
    ((I = s()),
      u(),
      (L = r()),
      x(),
      S(),
      _(),
      b(),
      T(),
      n(),
      t(),
      w(),
      k(),
      A(),
      (R = a()),
      f(),
      (z = i(
        async () => {
          let { WorkspaceDiscovery: e } = await o(
            async () => {
              let { WorkspaceDiscovery: e } = await import(`./workspace-discovery-f9d2dc27cf79.js`);
              return { WorkspaceDiscovery: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]),
            import.meta.url,
          );
          return function (t) {
            return (0, R.jsx)(e, {});
          };
        },
        { errorFallback: ({ children: e }) => e },
      )),
      (B = l(c, (e) => E(g()?.accessToken, Date.now()), { getServerSnapshot: () => !1 })));
  }))();
}
V();
export { j as WorkspaceDiscoveryAnnouncementHost };
//# sourceMappingURL=announcement-host-6bd5c290ff77.js.map
