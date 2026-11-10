import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Qst as n,
  TCt as r,
  ZSt as i,
  ast as a,
  ist as o,
  qst as s,
  sct as c,
  uSt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BBr as u,
  BRr as d,
  Cbr as f,
  FBr as p,
  IBr as m,
  Olr as h,
  RBr as g,
  Sa as _,
  Ta as v,
  gur as y,
  hdn as b,
  mlr as x,
  wLr as S,
  wbr as C,
} from "./app-initial-ad16eaadf81f.js";
import { a as w, i as T, n as E, o as D, t as O } from "./artifact-session-binding-de0b5463a756.js";
async function k(e, t, n, r) {
  if (!C(t.hostId) || o.artifactSessions == null) return null;
  let i =
      t.artifactRef == null ? await e.query.fetch(v, { hostId: t.hostId, conversationId: t.threadId }) : [],
    a = e.get(M, void 0),
    c = JSON.stringify([t.accountId, t.hostId, t.threadId, t.pageId]),
    u = a.get(c),
    f = (e, t, n) => {
      a.get(e) === t &&
        (a.delete(e), t.observe(`released`, n), clearTimeout(t.timer), t.stopWatching(), t.binding.dispose());
    },
    m = () => {
      u == null ||
        a.get(c) !== u ||
        u.retainUntilTurnEnds ||
        (clearTimeout(u.timer),
        (u.timer = setTimeout(() => {
          u != null && f(c, u, `idle`);
        }, P)),
        a.delete(c),
        a.set(c, u));
    };
  if (u == null) {
    if (a.size >= N) {
      let e = [...a.entries()].find(([, e]) => !e.retainUntilTurnEnds);
      if (e == null) return null;
      f(e[0], e[1], `capacity`);
    }
    let o = p(e, t.hostId),
      _ = e.get(g, t.hostId);
    if (_ == null) return null;
    let v = l(t.threadId),
      b = null,
      x,
      S = !1,
      C = (n) => {
        let r = b?.latestTurnId,
          i = () => {
            if (
              S ||
              e.get(g, t.hostId) !== _ ||
              r == null ||
              (n != null && r !== n) ||
              r === x ||
              b?.latestTurnId !== r ||
              b?.latestTurnStatus !== `inProgress`
            )
              throw Error(`native_artifact_task_inactive`);
          };
        return (i(), i);
      },
      w = async () => {
        try {
          var e = s();
          let t = e.u(await o.getThreadExecutionState(v));
          if (!t?.inProgress || t.activeTurnId == null) throw Error(`native_artifact_task_inactive`);
          C(t.activeTurnId)();
        } catch (t) {
          e.e = t;
        } finally {
          e.d();
        }
      },
      T =
        r ??
        E(
          e,
          { ...t, artifactRef: t.artifactRef ?? i.find((e) => e.pageId === t.pageId)?.targetArtifactRef },
          n,
          m,
          C,
          w,
        );
    r?.transferToTask(t, m, C, w);
    let k = new DisposableStack(),
      A = [
        o.subscribe({
          type: `thread`,
          key: { hostId: t.hostId, threadId: v },
          field: `listState`,
          listener: (e) => {
            b = e;
          },
        }),
        o.subscribe({
          type: `event`,
          key: { hostId: t.hostId },
          event: `turn-interrupt-started`,
          listener: (e) => {
            e === v && (x = b?.latestTurnId);
          },
        }),
        o.subscribe({
          type: `event`,
          key: { hostId: t.hostId },
          event: `thread-deleted`,
          listener: (e) => {
            e === v && ((S = !0), u != null && f(c, u, `thread_deleted`));
          },
        }),
        o.subscribe({
          type: `notification`,
          key: { hostId: t.hostId },
          methods: `turn/completed`,
          listener: (e) => {
            e.params.threadId === v && u?.retainUntilTurnEnds && f(c, u, `turn_completed`);
          },
        }),
      ],
      j = Promise.all(
        A.map(async (e) => {
          k.use(e);
          let t = await e;
          if (k.disposed) {
            t[Symbol.dispose]();
            return;
          }
          (k.use(t),
            t.onRpcBroken(() => {
              ((S = !0), u != null && f(c, u, `context_changed`));
            }));
        }),
      ).then(() => b != null && !S),
      M = performance.now(),
      P = crypto.randomUUID(),
      F = e.get(d);
    ((u = {
      activated: !1,
      ready: j,
      observe: (r, i = `disconnected`) => {
        D(
          e,
          {
            artifactType: O[n],
            threadId: t.threadId,
            pageId: t.pageId,
            isCurrent: () => e.get(y) === t.accountId && e.get(d) === F,
          },
          P,
          r,
          r === `released` ? i : `none`,
          r === `released` ? performance.now() - M : void 0,
        );
      },
      binding: T,
      timer: void 0,
      stopWatching: () => {},
      release: () => f(c, I, `disconnected`),
      retainUntilTurnEnds: r != null,
    }),
      a.set(c, u));
    let I = u;
    I.observe(`created`);
    let L = e.watch(({ get: e }) => {
      (e(g, t.hostId) !== _ || e(y) !== t.accountId || e(d) !== F || !e(h)) && f(c, I, `context_changed`);
    });
    ((I.stopWatching = () => {
      (L(), k.dispose());
    }),
      a.get(c) !== I && I.stopWatching());
  }
  m();
  try {
    if (!(await u.ready)) return (f(c, u, `unavailable`), null);
    let e = await u.binding.prepare();
    return e == null
      ? (f(c, u, `unavailable`), null)
      : (await u.binding.activate(t.threadId),
        u.activated || ((u.activated = !0), u.observe(`activated`)),
        e);
  } catch (e) {
    throw (f(c, u, `setup_failed`), e);
  }
}
function A(e, t, n) {
  let r = e.get(M, void 0).get(JSON.stringify([t.accountId, t.hostId, t.threadId, t.pageId]));
  r?.binding === n && r.release();
}
function j(e, t) {
  let n = e.get(M, void 0).get(JSON.stringify([t.accountId, t.hostId, t.threadId, t.pageId]));
  if (n == null) throw Error(`canvas_cursor_unavailable`);
  n.binding.moveCursorTo(t.turnId, t.point);
}
var M, N, P;
function F() {
  return (F = e(() => {
    (i(),
      c(),
      m(),
      u(),
      S(),
      f(),
      a(),
      t(),
      _(),
      x(),
      b(),
      T(),
      w(),
      (M = r(n, () => new Map())),
      (N = 32),
      (P = 18e5));
  }))();
}
F();
export {
  k as connectPageArtifactForTask,
  A as disconnectPageArtifactForTask,
  j as movePageArtifactCursorForTask,
};
//# sourceMappingURL=task-artifact-session-c5c38c57a795.js.map
