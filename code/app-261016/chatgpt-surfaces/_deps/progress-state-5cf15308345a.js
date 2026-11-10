import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  HFt as n,
  Pit as r,
  Qst as i,
  VRt as a,
  ZSt as o,
  jit as s,
  kCt as c,
  kRt as l,
  mCt as u,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A3n as d,
  BRr as f,
  CEt as p,
  DEt as m,
  DNr as h,
  GMn as g,
  IMr as _,
  ONr as v,
  Pmr as y,
  TEt as b,
  WMn as ee,
  Xmr as x,
  bLr as S,
  eMr as C,
  iBn as w,
  iRr as T,
  nMr as E,
  oun as D,
  sBn as te,
  sun as O,
  tyr as k,
  wLr as A,
  z3n as j,
} from "./app-initial-ad16eaadf81f.js";
import { i as M, t as N } from "./chatgpt-saved-memory-state-b80493d2aa2a.js";
function P() {
  try {
    return window.sessionStorage.getItem(I);
  } catch {
    return null;
  }
}
function F(e) {
  try {
    e == null ? window.sessionStorage.removeItem(I) : window.sessionStorage.setItem(I, e);
  } catch {}
}
var I;
function L() {
  return (L = e(() => {
    I = `personal-migration-progress-session`;
  }))();
}
function R(e, t) {
  let n = H[t],
    r = e.resources[n];
  if (!(z(e.status) || (r !== `succeeded` && r !== `succeeded_with_errors`))) return e.copied_counts?.[n];
}
function z(e) {
  return e === `pending` || e === `running`;
}
function B(e, t) {
  let n = V[t].flatMap((t) => (e[t] == null ? [] : [e[t]]));
  if (n.length === 0) return null;
  if (n.some(z)) return `running`;
  for (let e of [`unknown`, `failed`, `succeeded_with_errors`, `skipped`]) if (n.includes(e)) return e;
  return `succeeded`;
}
var V, H;
function U() {
  return (U = e(() => {
    ((V = {
      chats: [`CONVERSATIONS`],
      files: [`LIBRARY`, `GIZMOS`, `CONVERSATIONS`],
      memory: [`MEMORIES`],
      automations: [`AUTOMATIONS`],
      plugins: [`CONNECTOR_AUTH`, `SKILLS`, `PLUGIN_INSTALLS`],
    }),
      (H = {
        chats: `CONVERSATIONS`,
        files: `LIBRARY`,
        memory: `MEMORIES`,
        automations: `AUTOMATIONS`,
        plugins: `PLUGIN_INSTALLS`,
      }));
  }))();
}
function W(e, t, n) {
  let r = q.get(e.queryClient),
    i = r ?? new BroadcastChannel(J);
  (i.postMessage({ userId: t, accountId: n }), r ?? i.close());
}
function G(e) {
  let t = new BroadcastChannel(J);
  return (
    q.set(e.queryClient, t),
    (t.onmessage = (t) => {
      let n = Y.safeParse(t.data);
      n.success &&
        e.get(f) === n.data.userId &&
        e.get(_) === n.data.accountId &&
        (O(e), K(e, n.data.accountId));
    }),
    () => {
      (q.delete(e.queryClient), t.close());
    }
  );
}
function K(e, t) {
  Promise.all([
    e.query.invalidate(w),
    e.query.invalidate(p),
    e.query.invalidate(b),
    e.query.invalidate(N, t),
    e.query.invalidate(C),
    v(e, t),
    g((t) => e.queryClient.invalidateQueries({ queryKey: t })),
    ...[[`library-api`, t], [`chatgpt-composer-library-files`, t], [`4231797315`], d, y].map((t) =>
      e.queryClient.invalidateQueries({ queryKey: t }),
    ),
  ]);
}
var q, J, Y;
function X() {
  return (X = e(() => {
    (n(),
      x(),
      j(),
      A(),
      h(),
      m(),
      te(),
      M(),
      E(),
      D(),
      ee(),
      (q = new WeakMap()),
      (J = `chatgpt-personal-migration-content-refresh`),
      (Y = l({ userId: a(), accountId: a() })));
  }))();
}
var Z, Q;
function $() {
  return ($ = e(() => {
    (o(),
      A(),
      k(),
      E(),
      D(),
      t(),
      r(),
      U(),
      L(),
      X(),
      (Z = c(i, P, { getServerSnapshot: () => null })),
      (Q = u(i, ({ userId: e, accountId: t, includeAccepted: n = !1 }, { scope: r }) => ({
        queryKey: n
          ? [`personal-migration-progress`, e, t, `accepted`]
          : [`personal-migration-progress`, e, t],
        queryFn: async ({ signal: i }) => {
          function a() {
            if (n && (r.get(S) !== e || r.get(_) !== t)) throw Error(`Migration status identity changed`);
          }
          a();
          let o = await T.safeGet(`/accounts/transfer/status`, {
            expectedIdentity: n ? { accountId: t, userId: e } : void 0,
            additionalHeaders: { "ChatGPT-Account-ID": t },
            parameters: { query: { workspace_id: t, include_accepted: n || void 0 } },
            signal: i,
            expectedErrorStatuses: [401, 403, 404, 409, 503],
          });
          return (
            i.throwIfAborted(),
            a(),
            r.get(f) !== e || r.get(_) !== t || r.get(Z) !== `${e}:${t}`
              ? o
              : (o != null && (O(r, { cancelRefetch: !z(o.status) }), z(o.status) || (K(r, t), W(r, e, t))),
                o == null && P() === `${e}:${t}` && F(null),
                o)
          );
        },
        staleTime: 5e3,
        gcTime: 0,
        retry: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
        refetchInterval: (e) =>
          n
            ? !1
            : e.state.status === `error`
              ? e.state.error instanceof s && e.state.error.status >= 400 && e.state.error.status < 500
                ? !1
                : 3e4
              : e.state.data != null && z(e.state.data.status)
                ? 5e3
                : !1,
      }))));
  }))();
}
export { G as a, R as c, F as d, X as i, B as l, Q as n, U as o, Z as r, z as s, $ as t, L as u };
//# sourceMappingURL=progress-state-5cf15308345a.js.map
