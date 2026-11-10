import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Pxt as n,
  VDt as r,
  Zxt as i,
  hot as a,
  jDt as o,
  lot as s,
  vzt as c,
  xMt as l,
  zxt as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  Gr as d,
  Pen as f,
  W9t as p,
  Yrn as m,
  Zr as h,
  asr as g,
  ben as _,
  dsr as v,
  fsr as y,
  fur as b,
  iPr as x,
  pur as S,
  rsr as C,
  sCr as w,
  sPr as T,
  tDn as E,
  tin as D,
  uDn as O,
  yCr as k,
} from "./app-initial-5851df3f6cb1.js";
import { a as A, o as j } from "./shared-codex-snapshot-b6a27b298fc6.js";
function M(e) {
  let t = (0, N.c)(8),
    { shareId: n, handoffId: i } = e,
    a = r(),
    { accountId: o, userId: s } = S(),
    c;
  t[0] === a
    ? (c = t[1])
    : ((c = a.formatMessage({
        id: `codex.sharedSnapshot.continuationUntitled`,
        defaultMessage: `Shared chat`,
        description: `Composer attachment title for a shared chat that has no user-provided title`,
      })),
      (t[0] = a),
      (t[1] = c));
  let l;
  return (
    t[2] !== o || t[3] !== i || t[4] !== n || t[5] !== c || t[6] !== s
      ? ((l = { accountId: o, fallbackTitle: c, shareId: n, handoffId: i, userId: s }),
        (t[2] = o),
        (t[3] = i),
        (t[4] = n),
        (t[5] = c),
        (t[6] = s),
        (t[7] = l))
      : (l = t[7]),
    u(F, l),
    null
  );
}
var N, P, F;
function I() {
  return (I = e(() => {
    ((N = c()),
      y(),
      n(),
      o(),
      b(),
      f(),
      h(),
      D(),
      s(),
      k(),
      E(),
      T(),
      A(),
      C(),
      (P = l()),
      (F = i(
        w,
        ({ accountId: e, fallbackTitle: n, handoffId: r, shareId: i, userId: o }, { get: s, scope: c }) => {
          let l = s(O);
          return {
            queryKey: [`shared-codex-snapshot-continuation`, e, o, l, i, r],
            enabled: e != null && o != null,
            gcTime: 0,
            staleTime: 1 / 0,
            retry: !1,
            queryFn: ({ signal: e }) => {
              g(c, v.CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_APP_RECEIVED, i, r);
              let o = c.get(p),
                s = m(c, { hostId: l, id: i, preview: n });
              return x
                .safeGet(`/wham/shared_threads/{share_id}`, {
                  parameters: { path: { share_id: i } },
                  signal: e,
                })
                .then(async (t) => {
                  e.throwIfAborted();
                  let a = j(t);
                  if (a == null) throw Error(`Invalid shared Codex snapshot`);
                  let u = a.title?.trim() || n,
                    f = JSON.stringify({ source: `codex_shared_thread`, shareId: i, snapshot: a }),
                    m = await d({
                      scope: c,
                      executionHostId: l,
                      label: u,
                      text: f,
                      shouldDiscard: () => e.aborted || !s.isPending() || c.get(p) !== o || c.get(O) !== l,
                    });
                  return (
                    m != null &&
                    (c.set(_, (e) => [
                      ...e,
                      { file: { ...m, sharedThread: { shareId: i } }, hostId: l, handoffId: r },
                    ]),
                    s.succeed(),
                    g(c, v.CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_SNAPSHOT_LOADED, i, r),
                    !0)
                  );
                })
                .catch((n) => {
                  throw (
                    e.aborted ||
                      (g(c, v.CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_SNAPSHOT_LOAD_FAILED, i, r),
                      c
                        .get(a)
                        .danger(
                          (0, P.jsx)(t, {
                            id: `codex.sharedSnapshot.continuationUnavailable`,
                            defaultMessage: `This shared snapshot is unavailable`,
                            description: `Error shown when the current Codex account cannot access or validate a shared thread snapshot`,
                          }),
                          { errorAnalytics: { toastId: `codex.sharedSnapshot.continuationUnavailable` } },
                        )),
                    n
                  );
                })
                .finally(() => s.fail());
            },
          };
        },
      )));
  }))();
}
I();
export { M as SharedSnapshotContinuation };
//# sourceMappingURL=shared-snapshot-continuation-3a67e703a474.js.map
