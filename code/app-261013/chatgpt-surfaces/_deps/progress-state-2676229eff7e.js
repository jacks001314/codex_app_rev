import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  EPt as n,
  Pxt as r,
  TLt as i,
  Zxt as a,
  fSt as o,
  hrt as s,
  pLt as c,
  vrt as l,
  wot as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  AIn as d,
  Bkt as f,
  Ckn as p,
  Hkt as m,
  NDr as h,
  NIn as g,
  Skn as _,
  Uur as v,
  Wkt as y,
  X1n as b,
  XMr as x,
  Ymr as S,
  a0n as C,
  con as w,
  ehr as T,
  idr as E,
  ikr as ee,
  jDr as D,
  pOr as O,
  rkr as k,
  son as A,
  tNr as j,
} from "./app-initial-5851df3f6cb1.js";
import { i as M, t as N } from "./chatgpt-saved-memory-state-4d665a109b5e.js";
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
        e.get(x) === n.data.userId &&
        e.get(O) === n.data.accountId &&
        (w(e), K(e, n.data.accountId));
    }),
    () => {
      (q.delete(e.queryClient), t.close());
    }
  );
}
function K(e, t) {
  Promise.all([
    e.query.invalidate(d),
    e.query.invalidate(f),
    e.query.invalidate(m),
    e.query.invalidate(N, t),
    e.query.invalidate(D),
    ee(e, t),
    p((t) => e.queryClient.invalidateQueries({ queryKey: t })),
    ...[[`library-api`, t], [`chatgpt-composer-library-files`, t], [`4231797315`], b, v].map((t) =>
      e.queryClient.invalidateQueries({ queryKey: t }),
    ),
  ]);
}
var q, J, Y;
function X() {
  return (X = e(() => {
    (n(),
      E(),
      C(),
      j(),
      k(),
      y(),
      g(),
      M(),
      h(),
      A(),
      _(),
      (q = new WeakMap()),
      (J = `chatgpt-personal-migration-content-refresh`),
      (Y = c({ userId: i(), accountId: i() })));
  }))();
}
var Z, Q;
function $() {
  return ($ = e(() => {
    (r(),
      j(),
      T(),
      h(),
      A(),
      u(),
      l(),
      U(),
      L(),
      X(),
      (Z = o(t, P, { getServerSnapshot: () => null })),
      (Q = a(t, ({ userId: e, accountId: t }, { scope: n }) => ({
        queryKey: [`personal-migration-progress`, e, t],
        queryFn: async ({ signal: r }) => {
          let i = await S.safeGet(`/accounts/transfer/status`, {
            additionalHeaders: { "ChatGPT-Account-ID": t },
            parameters: { query: { workspace_id: t } },
            signal: r,
            expectedErrorStatuses: [401, 403, 404, 503],
          });
          return (
            r.throwIfAborted(),
            n.get(x) !== e || n.get(O) !== t || n.get(Z) !== `${e}:${t}`
              ? i
              : (i != null && (w(n, { cancelRefetch: !z(i.status) }), z(i.status) || (K(n, t), W(n, e, t))),
                i == null && P() === `${e}:${t}` && F(null),
                i)
          );
        },
        staleTime: 5e3,
        gcTime: 0,
        retry: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
        refetchInterval: (e) =>
          e.state.status === `error`
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
//# sourceMappingURL=progress-state-2676229eff7e.js.map
