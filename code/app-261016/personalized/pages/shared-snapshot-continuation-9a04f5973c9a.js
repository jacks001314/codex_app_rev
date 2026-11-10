import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  LNt as t,
  PBt as n,
  Vrt as r,
  XOt as i,
  ZSt as a,
  mCt as o,
  nCt as s,
  okt as c,
  qrt as l,
  tkt as u,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CDr as d,
  FDr as f,
  Jur as p,
  Kur as m,
  NAn as h,
  Ssn as g,
  Vrn as _,
  drn as v,
  edr as y,
  gsn as b,
  iRr as x,
  imr as S,
  li as C,
  ri as w,
  rmr as T,
  sRr as E,
  tdr as D,
  tin as O,
  wAn as k,
} from "./app-initial-ad16eaadf81f.js";
import { a as A, o as j } from "./shared-codex-snapshot-23f1f3ddbc30.js";
function M(e) {
  let t = (0, N.c)(8),
    { shareId: n, handoffId: r } = e,
    i = c(),
    { accountId: a, userId: o } = S(),
    l;
  t[0] === i
    ? (l = t[1])
    : ((l = i.formatMessage({
        id: `codex.sharedSnapshot.continuationUntitled`,
        defaultMessage: `Shared chat`,
        description: `Composer attachment title for a shared chat that has no user-provided title`,
      })),
      (t[0] = i),
      (t[1] = l));
  let u;
  return (
    t[2] !== a || t[3] !== r || t[4] !== n || t[5] !== l || t[6] !== o
      ? ((u = { accountId: a, fallbackTitle: l, shareId: n, handoffId: r, userId: o }),
        (t[2] = a),
        (t[3] = r),
        (t[4] = n),
        (t[5] = l),
        (t[6] = o),
        (t[7] = u))
      : (u = t[7]),
    s(F, u),
    null
  );
}
var N, P, F;
function I() {
  return (I = e(() => {
    ((N = n()),
      D(),
      a(),
      i(),
      T(),
      O(),
      C(),
      g(),
      r(),
      f(),
      k(),
      E(),
      A(),
      m(),
      (P = t()),
      (F = o(
        d,
        ({ accountId: e, fallbackTitle: t, handoffId: n, shareId: r, userId: i }, { get: a, scope: o }) => {
          let s = a(h);
          return {
            queryKey: [`shared-codex-snapshot-continuation`, e, i, s, r, n],
            enabled: e != null && i != null,
            gcTime: 0,
            staleTime: 1 / 0,
            retry: !1,
            queryFn: ({ signal: e }) => {
              p(o, y.CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_APP_RECEIVED, r, n);
              let i = o.get(v),
                a = b(o, { hostId: s, id: r, preview: t });
              return x
                .safeGet(`/wham/shared_threads/{share_id}`, {
                  parameters: { path: { share_id: r } },
                  signal: e,
                })
                .then(async (c) => {
                  e.throwIfAborted();
                  let l = j(c);
                  if (l == null) throw Error(`Invalid shared Codex snapshot`);
                  let u = l.title?.trim() || t,
                    d = JSON.stringify({ source: `codex_shared_thread`, shareId: r, snapshot: l }),
                    f = await w({
                      scope: o,
                      executionHostId: s,
                      label: u,
                      text: d,
                      shouldDiscard: () => e.aborted || !a.isPending() || o.get(v) !== i || o.get(h) !== s,
                    });
                  return (
                    f != null &&
                    (o.set(_, (e) => [
                      ...e,
                      { file: { ...f, sharedThread: { shareId: r } }, hostId: s, handoffId: n },
                    ]),
                    a.succeed(),
                    p(o, y.CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_SNAPSHOT_LOADED, r, n),
                    !0)
                  );
                })
                .catch((t) => {
                  throw (
                    e.aborted ||
                      (p(o, y.CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_SNAPSHOT_LOAD_FAILED, r, n),
                      o
                        .get(l)
                        .danger(
                          (0, P.jsx)(u, {
                            id: `codex.sharedSnapshot.continuationUnavailable`,
                            defaultMessage: `This shared snapshot is unavailable`,
                            description: `Error shown when the current Codex account cannot access or validate a shared thread snapshot`,
                          }),
                          { errorAnalytics: { toastId: `codex.sharedSnapshot.continuationUnavailable` } },
                        )),
                    t
                  );
                })
                .finally(() => a.fail());
            },
          };
        },
      )));
  }))();
}
I();
export { M as SharedSnapshotContinuation };
//# sourceMappingURL=shared-snapshot-continuation-9a04f5973c9a.js.map
