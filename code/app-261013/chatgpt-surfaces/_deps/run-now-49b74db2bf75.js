import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Bpt as t,
  Cat as n,
  Cot as r,
  Jbt as i,
  Pxt as a,
  aSt as o,
  frt as s,
  hot as c,
  hrt as l,
  iot as u,
  lot as d,
  qxt as f,
  rrt as p,
  rst as m,
  srt as h,
  wot as g,
  xat as ee,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as _,
  Dbn as v,
  FFr as te,
  GMr as y,
  N8n as b,
  Obn as x,
  S5t as S,
  Tvr as C,
  ZQn as w,
  aIr as ne,
  dkr as re,
  e$n as ie,
  fkr as T,
  fvr as E,
  gN as D,
  hEr as O,
  oFr as k,
  oIr as A,
  okr as j,
  pZn as M,
  rkr as N,
  tNr as P,
  v8n as F,
  vEr as I,
  x5t as L,
  yN as R,
  yjn as z,
  zFr as B,
} from "./app-initial-5851df3f6cb1.js";
import { a as V, r as H, t as U } from "./conversation-actions-2dd1edaae253.js";
import { a as W, t as G } from "./run-results-state-b1592f2a7689.js";
async function K(e, t) {
  let n = t.id;
  if (n == null) return null;
  let r = t.kind === `heartbeat` ? t.targetThreadId : null,
    a = r == null ? null : i(r),
    o = null;
  return (
    await e.when((e) =>
      a != null && e.get(C, { hostId: e.get(_, a), threadId: a }) === `loading`
        ? !1
        : ((o = {
            id: n,
            collaborationMode: a == null ? null : (e.get(b, a) ?? null),
            permissions: e.get(D, a),
          }),
          !0),
    ),
    o
  );
}
function q() {
  return (q = e(() => {
    (m(), F(), E(), R());
  }))();
}
function J(e, t, n) {
  return e.destination?.type === `run`
    ? t.id === e.destination.id
    : e.destination?.type === `conversation` &&
        t.chat_ref?.type === `chatgpt` &&
        t.chat_ref.id === (n ?? e.destination.id) &&
        (e.previousRunIds == null
          ? Date.parse(t.started_at ?? t.scheduled_for) >= e.requestedAt
          : !e.previousRunIds.includes(t.id));
}
var Y;
function X() {
  return (X = e(() => {
    (a(), g(), (Y = o(r, (e) => null)));
  }))();
}
var Z, Q;
function $() {
  return ($ = e(() => {
    (a(),
      m(),
      P(),
      v(),
      q(),
      T(),
      N(),
      H(),
      X(),
      G(),
      ie(),
      z(),
      n(),
      I(),
      d(),
      ne(),
      B(),
      g(),
      k(),
      L(),
      h(),
      s(),
      (Z = f(r, (e, { scope: n }) => {
        let r = n.get(y),
          i = null;
        return {
          retry: !1,
          mutationFn: async ({
            item: a,
            navigate: o,
            onBeforeNavigate: s,
            navigationSignal: c,
            errorToastId: u,
            signal: d,
          }) => {
            if ((d?.throwIfAborted(), n.get(y) !== r))
              throw new DOMException(`The account is no longer active`, `AbortError`);
            if (i != null) return i;
            let f = t();
            i = f.promise;
            let p = { accountId: r, automationId: e },
              m = crypto.randomUUID(),
              h = Date.now(),
              g = n.query.getData(W, e)?.pages.flatMap((e) => e.runs.map((e) => e.id)) ?? null;
            n.set(Y, p, {
              requestId: m,
              requestedAt: h,
              previousRunIds: g,
              status: `starting`,
              destination: null,
            });
            let _ = () => {
                n.get(Y, p)?.requestId === m && n.set(Y, p, null);
              },
              v = () => {
                let e = n.get(Y, p);
                if (e?.requestId === m && e.destination?.type !== `conversation`) {
                  let t = { ...e, status: `unconfirmed` };
                  n.set(Y, p, t);
                }
              };
            try {
              if (a.teamId != null) {
                let t = await n
                  .get(j)
                  .mutateAsync({
                    automationId: e,
                    requestBody: { idempotency_key: crypto.randomUUID() },
                    errorToastId: u,
                    signal: d,
                  });
                (d?.throwIfAborted(),
                  n.set(Y, p, {
                    requestId: m,
                    requestedAt: h,
                    previousRunIds: g,
                    status: `starting`,
                    destination: { type: `run`, id: t.run_id },
                  }));
                return;
              }
              let t = await V(n, {
                automation: a.automation,
                conversationId: w(),
                conversationOrigin: n.get(O) === `work` ? `tpp` : null,
                signal: d ?? new AbortController().signal,
              });
              if (
                (d?.throwIfAborted(),
                n.set(Y, p, {
                  requestId: m,
                  requestedAt: h,
                  previousRunIds: g,
                  status: `starting`,
                  destination: { type: `conversation`, id: t },
                }),
                o == null || c?.aborted || n.get(y) !== r)
              )
                return;
              (s?.(),
                o(ee(t), {
                  state: {
                    sidebarArea: `scheduled`,
                    sidebarAutomationId: e,
                    sidebarAutomationSource: `cloud`,
                    sidebarAutomationAccountId: r,
                    sidebarAutomationRunConversationId: t,
                  },
                }));
            } catch (e) {
              throw (
                e instanceof U || (e instanceof l && [400, 401, 403, 404, 422, 429].includes(e.status))
                  ? _()
                  : v(),
                e
              );
            } finally {
              (f.resolve(void 0), (i = null));
              let t = n.get(Y, p);
              if (t?.requestId === m) {
                let i = setTimeout(v, 3e4);
                n.queryClient
                  .invalidateQueries({ queryKey: [`cloud-automations`, `runs`, r, e] })
                  .then(() => {
                    n.query
                      .getData(W, e)
                      ?.pages.some((e) =>
                        e.runs.some((e) =>
                          J(t, e, n.get(M, t.destination?.type === `conversation` ? t.destination.id : null)),
                        ),
                      ) && (clearTimeout(i), _());
                  });
              }
            }
          },
          onError: (e, { item: t, signal: i, errorToastId: a }) => {
            t.teamId != null ||
              i?.aborted ||
              n.get(y) !== r ||
              (e instanceof Error && e.name === `AbortError`) ||
              n
                .get(c)
                .danger(
                  n
                    .get(A)
                    .formatMessage({
                      id: `automations.scheduled.runNow.error`,
                      defaultMessage: `Couldn’t run this task`,
                      description: `Error shown when starting an immediate run of a scheduled task fails`,
                    }),
                  { errorAnalytics: { toastId: a ?? `automations.scheduled.runNow.error` } },
                );
          },
        };
      })),
      (Q = f(r, (e, { scope: t }) => {
        let n = (e) => {
          t.get(c).danger(
            t
              .get(A)
              .formatMessage({
                id: `inbox.automations.runNowError`,
                defaultMessage: `Could not start scheduled task`,
                description: `Toast title when starting a scheduled task immediately fails`,
              }),
            { description: e, errorAnalytics: { toastId: `inbox.automations.runNowError` } },
          );
        };
        return {
          mutationFn: async ({ automation: e }) => {
            let n = await K(t, e);
            return n == null ? { success: !1 } : p(`automation-run-now`, { params: n });
          },
          networkMode: `always`,
          onMutate: () => {
            t.get(c).info(t.get(A).formatMessage(re.startingRun), { id: `local-automation-run-${e}` });
          },
          onSuccess: (
            { success: r },
            { navigateToLocalConversation: a, locationKey: o, useScheduledSidebar: s = !0 },
          ) => {
            if (!r) {
              n();
              return;
            }
            let c = t.query.getData(x)?.items.find((t) => t.id === e);
            c?.kind === `heartbeat` &&
              (S(t, u, i(c.targetThreadId)),
              t.get(te)?.key === o &&
                a(c.targetThreadId, void 0, {
                  state: s
                    ? {
                        sidebarArea: `scheduled`,
                        sidebarAutomationId: c.id,
                        sidebarAutomationSource: `local`,
                      }
                    : void 0,
                }));
          },
          onError: (e) => n(e.message),
        };
      })));
  }))();
}
export { J as a, X as i, Z as n, Y as o, Q as r, $ as t };
//# sourceMappingURL=run-now-49b74db2bf75.js.map
