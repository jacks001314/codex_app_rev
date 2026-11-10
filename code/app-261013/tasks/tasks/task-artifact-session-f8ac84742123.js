import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Jbt as n,
  Kat as r,
  Pxt as i,
  cSt as a,
  not as o,
  qat as s,
  rst as c,
  wot as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bar as u,
  Cgr as d,
  Dor as f,
  Ear as p,
  Oa as m,
  QPr as h,
  XMr as g,
  XPr as _,
  YPr as v,
  eFr as y,
  ja as b,
  tNr as x,
  wgr as S,
  xsn as C,
} from "./app-initial-5851df3f6cb1.js";
import { a as w, i as T, n as E, o as D, t as O } from "./artifact-session-binding-6769673df157.js";
async function k(e, t, i, a) {
  if (!S(t.hostId) || r.artifactSessions == null) return null;
  let s =
      t.artifactRef == null ? await e.query.fetch(b, { hostId: t.hostId, conversationId: t.threadId }) : [],
    c = e.get(M, void 0),
    l = JSON.stringify([t.accountId, t.hostId, t.threadId, t.pageId]),
    d = c.get(l),
    p = (e, t, n) => {
      c.get(e) === t &&
        (c.delete(e), t.observe(`released`, n), clearTimeout(t.timer), t.stopWatching(), t.binding.dispose());
    },
    m = () => {
      d == null ||
        c.get(l) !== d ||
        d.retainUntilTurnEnds ||
        (clearTimeout(d.timer),
        (d.timer = setTimeout(() => {
          d != null && p(l, d, `idle`);
        }, P)),
        c.delete(l),
        c.set(l, d));
    };
  if (d == null) {
    if (c.size >= N) {
      let e = [...c.entries()].find(([, e]) => !e.retainUntilTurnEnds);
      if (e == null) return null;
      p(e[0], e[1], `capacity`);
    }
    let r = v(e, t.hostId),
      _ = e.get(h, t.hostId);
    if (_ == null) return null;
    let y = n(t.threadId),
      b = null,
      x,
      S = !1,
      C = (n) => {
        let r = b?.latestTurnId,
          i = () => {
            if (
              S ||
              e.get(h, t.hostId) !== _ ||
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
          var e = o();
          let t = e.u(await r.getThreadExecutionState(y));
          if (!t?.inProgress || t.activeTurnId == null) throw Error(`native_artifact_task_inactive`);
          C(t.activeTurnId)();
        } catch (t) {
          e.e = t;
        } finally {
          e.d();
        }
      },
      T =
        a ??
        E(
          e,
          { ...t, artifactRef: t.artifactRef ?? s.find((e) => e.pageId === t.pageId)?.targetArtifactRef },
          i,
          m,
          C,
          w,
        );
    a?.transferToTask(t, m, C, w);
    let k = new DisposableStack(),
      A = [
        r.subscribe({
          type: `thread`,
          key: { hostId: t.hostId, threadId: y },
          field: `listState`,
          listener: (e) => {
            b = e;
          },
        }),
        r.subscribe({
          type: `event`,
          key: { hostId: t.hostId },
          event: `turn-interrupt-started`,
          listener: (e) => {
            e === y && (x = b?.latestTurnId);
          },
        }),
        r.subscribe({
          type: `event`,
          key: { hostId: t.hostId },
          event: `thread-deleted`,
          listener: (e) => {
            e === y && ((S = !0), d != null && p(l, d, `thread_deleted`));
          },
        }),
        r.subscribe({
          type: `notification`,
          key: { hostId: t.hostId },
          methods: `turn/completed`,
          listener: (e) => {
            e.params.threadId === y && d?.retainUntilTurnEnds && p(l, d, `turn_completed`);
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
              ((S = !0), d != null && p(l, d, `context_changed`));
            }));
        }),
      ).then(() => b != null && !S),
      M = performance.now(),
      P = crypto.randomUUID(),
      F = e.get(g);
    ((d = {
      activated: !1,
      ready: j,
      observe: (n, r = `disconnected`) => {
        D(
          e,
          {
            artifactType: O[i],
            threadId: t.threadId,
            pageId: t.pageId,
            isCurrent: () => e.get(f) === t.accountId && e.get(g) === F,
          },
          P,
          n,
          n === `released` ? r : `none`,
          n === `released` ? performance.now() - M : void 0,
        );
      },
      binding: T,
      timer: void 0,
      stopWatching: () => {},
      release: () => p(l, I, `disconnected`),
      retainUntilTurnEnds: a != null,
    }),
      c.set(l, d));
    let I = d;
    I.observe(`created`);
    let L = e.watch(({ get: e }) => {
      (e(h, t.hostId) !== _ || e(f) !== t.accountId || e(g) !== F || !e(u)) && p(l, I, `context_changed`);
    });
    ((I.stopWatching = () => {
      (L(), k.dispose());
    }),
      c.get(l) !== I && I.stopWatching());
  }
  m();
  try {
    if (!(await d.ready)) return (p(l, d, `unavailable`), null);
    let e = await d.binding.prepare();
    return e == null
      ? (p(l, d, `unavailable`), null)
      : (await d.binding.activate(t.threadId),
        d.activated || ((d.activated = !0), d.observe(`activated`)),
        e);
  } catch (e) {
    throw (p(l, d, `setup_failed`), e);
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
      _(),
      y(),
      x(),
      d(),
      s(),
      l(),
      m(),
      p(),
      C(),
      T(),
      w(),
      (M = a(t, () => new Map())),
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
//# sourceMappingURL=task-artifact-session-f8ac84742123.js.map
