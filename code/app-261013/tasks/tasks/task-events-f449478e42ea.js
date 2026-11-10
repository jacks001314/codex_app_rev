import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as n,
  Cot as r,
  EPt as i,
  HNt as a,
  Pxt as o,
  TLt as s,
  fSt as c,
  nSt as l,
  pLt as u,
  pRt as d,
  rst as f,
  spt as p,
  uSt as m,
  wot as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  $jr as g,
  GMr as _,
  OPr as v,
  Omr as y,
  Vpr as b,
  XMr as x,
  Ymr as S,
  eMr as C,
  ehr as w,
  kPr as T,
  tNr as E,
  zpr as D,
} from "./app-initial-5851df3f6cb1.js";
var O, k, A, j, M;
function N() {
  return (N = e(() => {
    ((O = t(a(), 1)),
      o(),
      f(),
      i(),
      E(),
      C(),
      w(),
      h(),
      v(),
      b(),
      (k = u({
        type: n(`task-upsert`),
        payload: u({
          tbo_id: s(),
          task: u({
            id: s(),
            title: s(),
            description: s().nullable(),
            status: s(),
            latest_update: s().nullable(),
            emoji: s().nullable(),
            created_at: d({ offset: !0 }),
            updated_at: d({ offset: !0 }),
          }),
          update: u({ id: s(), task_id: s(), text: s(), created_at: d({ offset: !0 }) }).nullable(),
        }),
      })),
      (A = c(r, { identity: ``, events: [] })),
      (j = m(
        r,
        () => !1,
        ({ get: e, scope: t, set: n }) => {
          let r = e(_),
            i = e(x),
            a = e(D) && e(T, `887686469`),
            o = JSON.stringify([r, i]);
          if (
            (t.get(A).identity !== o && t.set(A, { identity: o, events: [] }),
            n(!1),
            !a || r == null || i == null)
          )
            return;
          let s = g(
              `tbo-tasks`,
              () =>
                S.safeGet(`/celsius/ws/user`, {
                  additionalHeaders: { [p]: r },
                  expectedIdentity: { accountId: r, userId: i },
                }).then((e) => e.websocket_url),
              o,
            ),
            c = s.onMessage((e) => {
              if (t.get(_) !== r || t.get(x) !== i) return;
              let n = k.safeParse(e);
              !n.success ||
                (n.data.payload.update != null && n.data.payload.update.task_id !== n.data.payload.task.id) ||
                t.set(A, (e) =>
                  e.events.some(
                    (e) =>
                      e.payload.tbo_id === n.data.payload.tbo_id &&
                      e.payload.task.id === n.data.payload.task.id &&
                      e.payload.task.updated_at === n.data.payload.task.updated_at &&
                      e.payload.update?.id === n.data.payload.update?.id,
                  )
                    ? e
                    : { identity: o, events: [...e.events, n.data].slice(-1e3) },
                );
            }),
            l = s.onSubscribed(() => {
              n(!0);
              let e = { queryKey: [`orbit-task-history`, r, i] };
              t.queryClient.cancelQueries(e).then(() => {
                if (t.get(_) === r && t.get(x) === i) return t.queryClient.invalidateQueries(e);
              });
            }),
            u = s.onDisconnect(() => n(!1)),
            d = s.retainSubscription();
          return () => {
            (c(), l(), u(), d());
          };
        },
      )),
      (M = l(
        r,
        (e, { get: t }) => {
          t(j);
          let n = JSON.stringify([t(_), t(x)]),
            r = t(A),
            i = new Map();
          if (r.identity !== n) return [];
          let a = r.events
            .filter((t) => t.payload.tbo_id === e)
            .sort((e, t) => y(e.payload.task.updated_at, t.payload.task.updated_at));
          for (let e of a) {
            let { task: t, update: n } = e.payload,
              r = i.get(t.id)?.updates ?? [];
            (n != null &&
              !r.some((e) => e.id === n.id) &&
              r.push({ id: n.id, text: n.text, emittedAt: n.created_at }),
              i.set(t.id, {
                id: t.id,
                title: t.title,
                description: t.description,
                latestUpdate: t.latest_update,
                emoji: t.emoji,
                status: t.status,
                createdAt: t.created_at,
                updatedAt: t.updated_at,
                updates: r,
              }));
          }
          for (let e of i.values())
            e.updates.sort((e, t) => Date.parse(e.emittedAt) - Date.parse(t.emittedAt));
          return [...i.values()].sort(
            (e, t) =>
              (t.createdAt == null ? 0 : Date.parse(t.createdAt)) -
              (e.createdAt == null ? 0 : Date.parse(e.createdAt)),
          );
        },
        { isEqual: O.default },
      )));
  }))();
}
export { M as n, j as r, N as t };
//# sourceMappingURL=task-events-f449478e42ea.js.map
