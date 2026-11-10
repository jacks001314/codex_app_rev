const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./migration-onboarding-5e887a02d606.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-295ec67e1c5d.css",
      "./migration-onboarding-1cc20ed60a83.js",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./workspace-2b6b070f8f00.js",
      "./session-7c09e4681e00.js",
      "./logout-engine-8fde8f64413f.js",
      "./datadog-rum.browser-219d0f1d0fbd.js",
      "./esm-b96d2f3fb76a.js",
      "./datadogProfiler-ae8ea0e10132.js",
      "./replayStats-8eb2b3f5a1de.js",
      "./radio-group-8a1b881bed8e.js",
      "./radio-group-374e0c5aa421.css",
      "./contracts-f473c8d038ac.js",
      "./eligibility-ad39d272751d.js",
      "./started-toast-c563ca86941b.js",
      "./progress-state-5cf15308345a.js",
      "./chatgpt-saved-memory-state-b80493d2aa2a.js",
      "./chatgpt-memory-source-feedback-f68db5a6cb57.js",
      "./chatgpt-memory-citation-analytics-12d391658a94.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  F3 as r,
  FBt as i,
  I3 as a,
  LNt as o,
  NSt as s,
  OFt as c,
  PBt as l,
  Qst as u,
  Vrt as d,
  XOt as f,
  XSt as p,
  ZSt as m,
  iCt as h,
  kFt as g,
  nCt as _,
  okt as v,
  qrt as y,
  tkt as b,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  IMr as x,
  eMr as S,
  imr as C,
  lBr as w,
  lLr as T,
  lNr as E,
  mBr as D,
  nMr as O,
  rmr as k,
  sLr as A,
  tLr as j,
  uBr as M,
} from "./app-initial-ad16eaadf81f.js";
import "./contracts-f473c8d038ac.js";
import { n as N, t as P } from "./eligibility-ad39d272751d.js";
import { n as F, t as I } from "./started-toast-c563ca86941b.js";
function L(e) {
  let t = (0, H.c)(10),
    { children: n } = e,
    { authMethod: r, accountId: i, userId: a } = C(),
    o = h(x);
  if (r !== `chatgpt` || i == null || a == null) return n;
  if (i !== o) return null;
  let s;
  t[0] === i ? (s = t[1]) : ((s = (0, W.jsx)(B, { accountId: i })), (t[0] = i), (t[1] = s));
  let c = `${a}:${i}`,
    l;
  t[2] !== i || t[3] !== n || t[4] !== c || t[5] !== a
    ? ((l = (0, W.jsx)(R, { accountId: i, userId: a, children: n }, c)),
      (t[2] = i),
      (t[3] = n),
      (t[4] = c),
      (t[5] = a),
      (t[6] = l))
    : (l = t[6]);
  let u;
  return (
    t[7] !== s || t[8] !== l
      ? ((u = (0, W.jsxs)(W.Fragment, { children: [s, l] })), (t[7] = s), (t[8] = l), (t[9] = u))
      : (u = t[9]),
    u
  );
}
function R(e) {
  let t = (0, H.c)(6),
    { accountId: n, userId: r, children: i } = e,
    [a, o] = (0, U.useState)(!1),
    [s, c] = (0, U.useState)(null),
    { data: l, isError: u } = h(S);
  if (a || (s == null && u)) return i;
  if (s == null && l == null) return null;
  if (s == null && !l?.eligibleAnnouncements?.includes(`oai/apps/hasSeenMigrationOnboarding`)) return i;
  let d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = () => o(!0)), (t[0] = d)) : (d = t[0]);
  let f;
  return (
    t[1] !== n || t[2] !== s || t[3] !== i || t[4] !== r
      ? ((f = (0, W.jsx)(z, {
          accountId: n,
          userId: r,
          activeTransferAccounts: s,
          onActiveTransferChange: c,
          onTransferStarted: d,
          children: i,
        })),
        (t[1] = n),
        (t[2] = s),
        (t[3] = i),
        (t[4] = r),
        (t[5] = f))
      : (f = t[5]),
    f
  );
}
function z(e) {
  let t = (0, H.c)(20),
    {
      accountId: n,
      userId: r,
      activeTransferAccounts: i,
      onActiveTransferChange: a,
      onTransferStarted: o,
      children: s,
    } = e,
    { data: c, isError: l } = _(T, n),
    u = _(M, `3283824397`),
    d = _(M, `1439503871`),
    f = h(D),
    p = c?.accounts[n]?.account.account_residency_region;
  if (i == null && l) return s;
  if (i == null && (c == null || (p != null && p !== `` && p !== `no_constraint` && f))) return null;
  let m;
  t[0] !== n || t[1] !== c || t[2] !== i || t[3] !== u || t[4] !== d
    ? ((m = i ?? (c == null ? null : P(c, n, u, d).accounts)),
      (t[0] = n),
      (t[1] = c),
      (t[2] = i),
      (t[3] = u),
      (t[4] = d),
      (t[5] = m))
    : (m = t[5]);
  let g = m;
  if (g == null) return s;
  let v;
  t[6] !== g || t[7] !== a
    ? ((v = (e) => {
        a(e ? g : null);
      }),
      (t[6] = g),
      (t[7] = a),
      (t[8] = v))
    : (v = t[8]);
  let y;
  t[9] !== g.destination.account_user_role || t[10] !== g.destination.plan_type
    ? ((y = g.destination.account_user_role === `account-owner` && A(g.destination.plan_type)),
      (t[9] = g.destination.account_user_role),
      (t[10] = g.destination.plan_type),
      (t[11] = y))
    : (y = t[11]);
  let b;
  return (
    t[12] !== n ||
    t[13] !== s ||
    t[14] !== g.personalAccountId ||
    t[15] !== o ||
    t[16] !== v ||
    t[17] !== y ||
    t[18] !== r
      ? ((b = (0, W.jsx)(G, {
          accountId: n,
          userId: r,
          personalAccountId: g.personalAccountId,
          onTransferStarted: o,
          onTransferActiveChange: v,
          isBusinessOwner: y,
          children: s,
        })),
        (t[12] = n),
        (t[13] = s),
        (t[14] = g.personalAccountId),
        (t[15] = o),
        (t[16] = v),
        (t[17] = y),
        (t[18] = r),
        (t[19] = b))
      : (b = t[19]),
    b
  );
}
function B(e) {
  let n = (0, H.c)(7),
    { accountId: r } = e,
    i = t(u),
    a = v(),
    [o, s] = p(),
    c,
    l;
  return (
    n[0] !== r || n[1] !== a || n[2] !== i || n[3] !== o || n[4] !== s
      ? ((c = () => {
          let e = o.get(`_tm`);
          (e !== `account_transfer_started` && e !== `account_export_and_deactivate_started`) ||
            o.get(`migration_workspace_id`) !== r ||
            (e === `account_transfer_started`
              ? F(i, a)
              : i
                  .get(y)
                  .success(
                    (0, W.jsx)(b, {
                      id: `chatgpt.account_transfer.toast.export_and_deactivate_started`,
                      defaultMessage: `Your data export has started. We'll notify you when it's ready.`,
                      description: `Success toast after a required personal workspace export and deletion starts and the user switches to the Enterprise or Edu destination. The export runs asynchronously and notification follows when it is ready.`,
                    }),
                  ),
            s(V, { replace: !0 }));
        }),
        (l = [r, a, i, o, s]),
        (n[0] = r),
        (n[1] = a),
        (n[2] = i),
        (n[3] = o),
        (n[4] = s),
        (n[5] = c),
        (n[6] = l))
      : ((c = n[5]), (l = n[6])),
    (0, U.useEffect)(c, l),
    null
  );
}
function V(e) {
  return (e.delete(`_tm`), e.delete(`migration_workspace_id`), e);
}
var H, U, W, G;
function K() {
  return (K = e(() => {
    ((H = l()),
      m(),
      (U = i()),
      f(),
      s(),
      k(),
      E(),
      O(),
      r(),
      d(),
      n(),
      w(),
      j(),
      N(),
      I(),
      (W = o()),
      g(),
      (G = a(
        async () =>
          (
            await c(
              async () => {
                let { MigrationOnboarding: e } = await import(`./migration-onboarding-5e887a02d606.js`);
                return { MigrationOnboarding: e };
              },
              __vite__mapDeps([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
              ]),
              import.meta.url,
            )
          ).MigrationOnboarding,
        { errorFallback: ({ children: e }) => e },
      )));
  }))();
}
K();
export { L as PersonalMigrationAnnouncementHost };
//# sourceMappingURL=announcement-host-f539e53b9f3f.js.map
