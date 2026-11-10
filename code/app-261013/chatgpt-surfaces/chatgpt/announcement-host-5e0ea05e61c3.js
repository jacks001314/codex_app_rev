const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./workspace-discovery-227e917bbb06.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./workspace-discovery-89b02d9720ca.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./workspace-621c2c3096f1.js",
      "./session-594d75fbcc25.js",
      "./logout-engine-3e5ca2b0809a.js",
      "./datadog-rum.browser-33db5871e35e.js",
      "./esm-8e4e46801569.js",
      "./datadogProfiler-4df79f82be1b.js",
      "./replayStats-8eb2b3f5a1de.js",
      "./workspace-picker-row-46b4bafe11d9.js",
      "./workspace-avatar-fallback-5a929aeed8cb.js",
      "./workspace-identifier-c40bd3d45121.js",
      "./queries-2cda695a27c9.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  Cot as n,
  Pxt as r,
  Vxt as i,
  aSt as a,
  fPt as o,
  pPt as s,
  vzt as c,
  wot as l,
  xMt as u,
  yzt as d,
  z4 as f,
  zxt as p,
} from "./app-shared-bbfeca5e5737.js";
import {
  A0 as m,
  AMr as h,
  EPr as g,
  Fin as _,
  Iin as v,
  NDr as y,
  O0 as b,
  TNr as x,
  eDr as S,
  fur as C,
  jDr as w,
  nDr as T,
  pur as E,
  rDr as D,
  yNr as O,
} from "./app-initial-5851df3f6cb1.js";
import { c as k, n as A, o as j, r as M, s as N, t as P } from "./queries-2cda695a27c9.js";
function F(e) {
  let t = (0, B.c)(4),
    { children: n } = e,
    { authMethod: r, userId: i, accountId: a } = E();
  if (r !== `chatgpt` || i == null || a == null) return n;
  let o;
  return (
    t[0] !== a || t[1] !== n || t[2] !== i
      ? ((o = (0, H.jsx)(I, { userId: i, accountId: a, children: n }, i)),
        (t[0] = a),
        (t[1] = n),
        (t[2] = i),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function I(e) {
  let t = (0, B.c)(4),
    { userId: n, accountId: r, children: i } = e;
  if (!p(W, n)) return i;
  let a;
  return (
    t[0] !== r || t[1] !== i || t[2] !== n
      ? ((a = (0, H.jsx)(L, { userId: n, accountId: r, children: i }, r)),
        (t[0] = r),
        (t[1] = i),
        (t[2] = n),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function L(e) {
  let t = (0, B.c)(8),
    { userId: n, accountId: r, children: a } = e,
    [o, s] = (0, V.useState)(null),
    c;
  t[0] !== r || t[1] !== n
    ? ((c = { accountId: r, userId: n }), (t[0] = r), (t[1] = n), (t[2] = c))
    : (c = t[2]);
  let { data: l, isError: u } = p(b, c),
    { data: d, isError: f } = i(w),
    { data: m, isError: h } = v();
  if (o != null) {
    let e;
    return (
      t[3] !== a || t[4] !== o || t[5] !== l?.email || t[6] !== n
        ? ((e = o ? (0, H.jsx)(z, { userId: n, email: l?.email ?? null, children: a }, l?.email) : a),
          (t[3] = a),
          (t[4] = o),
          (t[5] = l?.email),
          (t[6] = n),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  return u || f || h
    ? a
    : (l == null ||
        d == null ||
        m == null ||
        s(
          j(l) &&
            !!d.eligibleAnnouncements?.includes(`oai/apps/hasSeenWorkspaceDiscoveryFirstLogin`) &&
            !m.accounts?.some(R),
        ),
      null);
}
function R(e) {
  return g(e.plan_type);
}
function z(e) {
  let t = (0, B.c)(11),
    { userId: n, email: r, children: i } = e,
    { accountId: a } = E(),
    o = T(`3491636949`),
    s = D(`3491636949`),
    [c, l] = (0, V.useState)(null),
    u = !s && !o,
    d;
  t[0] === u ? (d = t[1]) : ((d = { enabled: u }), (t[0] = u), (t[1] = d));
  let { data: f, isPending: m, isFetching: h, isError: g } = p(P, n, d),
    _;
  t[2] !== r || t[3] !== n
    ? ((_ = { userId: n, email: r, query: `` }), (t[2] = r), (t[3] = n), (t[4] = _))
    : (_ = t[4]);
  let v = !s && o,
    y;
  t[5] === v ? (y = t[6]) : ((y = { enabled: v }), (t[5] = v), (t[6] = y));
  let { data: b, isPending: x, isError: S } = p(M, _, y);
  if (c != null) {
    let e;
    return (
      t[7] !== a || t[8] !== i || t[9] !== c
        ? ((e = c ? (0, H.jsx)(U, { children: i }, a) : i), (t[7] = a), (t[8] = i), (t[9] = c), (t[10] = e))
        : (e = t[10]),
      e
    );
  }
  if (s || (o ? x : m || h)) return null;
  let C = b?.pages[0];
  return (
    l(
      o
        ? !S && C != null && (C.workspaces.length > 0 || C.completion === `more`)
        : !g && f != null && f.workspaces.length > 0,
    ),
    null
  );
}
var B, V, H, U, W;
function G() {
  return (G = e(() => {
    ((B = c()),
      r(),
      (V = d()),
      x(),
      C(),
      m(),
      y(),
      _(),
      f(),
      l(),
      S(),
      h(),
      N(),
      A(),
      (H = u()),
      s(),
      (U = t(
        async () => {
          let { WorkspaceDiscovery: e } = await o(
            async () => {
              let { WorkspaceDiscovery: e } = await import(`./workspace-discovery-227e917bbb06.js`);
              return { WorkspaceDiscovery: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]),
            import.meta.url,
          );
          return function (t) {
            return (0, H.jsx)(e, {});
          };
        },
        { errorFallback: ({ children: e }) => e },
      )),
      (W = a(n, (e) => k(O()?.accessToken, Date.now()), { getServerSnapshot: () => !1 })));
  }))();
}
G();
export { F as WorkspaceDiscoveryAnnouncementHost };
//# sourceMappingURL=announcement-host-5e0ea05e61c3.js.map
