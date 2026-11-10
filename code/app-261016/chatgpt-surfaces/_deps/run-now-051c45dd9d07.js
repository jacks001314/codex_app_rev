import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Oit as n,
  Qst as r,
  SCt as i,
  Uot as a,
  Vot as o,
  Vrt as s,
  Yst as c,
  ZSt as l,
  ast as u,
  ist as d,
  jit as ee,
  qrt as f,
  sct as p,
  tht as m,
  tit as h,
  uCt as g,
  uSt as _,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $N as v,
  $cr as y,
  ANr as b,
  B1n as x,
  CIr as S,
  DNr as te,
  DSr as ne,
  FNr as re,
  Fer as ie,
  H9t as ae,
  IAr as C,
  INr as w,
  KBr as T,
  NAr as E,
  O2n as D,
  RCn as O,
  SIr as k,
  T2n as A,
  U9t as j,
  VPn as M,
  Ycr as N,
  eer as P,
  her as F,
  mSr as I,
  nP as L,
  wLr as R,
  zCn as z,
  zRr as B,
} from "./app-initial-ad16eaadf81f.js";
import { a as V, r as H, t as U } from "./conversation-actions-12bca687c7ef.js";
import { a as W, t as G } from "./run-results-state-fd0c929556b9.js";
async function K(e, t) {
  let n = t.id;
  if (n == null) return null;
  let r = t.kind === `heartbeat` ? t.targetThreadId : null,
    i = r == null ? null : _(r),
    a = null;
  return (
    await e.when((e) =>
      i != null && e.get(ne, { hostId: e.get(ie, i), threadId: i }) === `loading`
        ? !1
        : ((a = {
            id: n,
            collaborationMode: i == null ? null : (e.get(F, i) ?? null),
            permissions: e.get(v, i),
          }),
          !0),
    ),
    a
  );
}
function q() {
  return (q = e(() => {
    (p(), P(), I(), L());
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
    (l(), t(), (Y = i(r, (e) => null)));
  }))();
}
var Z, Q;
function $() {
  return ($ = e(() => {
    (l(),
      p(),
      R(),
      O(),
      q(),
      w(),
      te(),
      H(),
      X(),
      G(),
      D(),
      M(),
      a(),
      C(),
      s(),
      k(),
      y(),
      u(),
      t(),
      T(),
      ae(),
      n(),
      (Z = g(r, (e, { scope: t }) => {
        let n = t.get(B),
          r = null;
        return {
          retry: !1,
          mutationFn: async ({
            item: i,
            navigate: a,
            onBeforeNavigate: s,
            navigationSignal: c,
            errorToastId: l,
            signal: u,
          }) => {
            if ((u?.throwIfAborted(), t.get(B) !== n))
              throw new DOMException(`The account is no longer active`, `AbortError`);
            if (r != null) return r;
            let d = m();
            r = d.promise;
            let f = { accountId: n, automationId: e },
              p = crypto.randomUUID(),
              h = Date.now(),
              g = t.query.getData(W, e)?.pages.flatMap((e) => e.runs.map((e) => e.id)) ?? null;
            t.set(Y, f, {
              requestId: p,
              requestedAt: h,
              previousRunIds: g,
              status: `starting`,
              destination: null,
            });
            let _ = () => {
                t.get(Y, f)?.requestId === p && t.set(Y, f, null);
              },
              v = () => {
                let e = t.get(Y, f);
                if (e?.requestId === p && e.destination?.type !== `conversation`) {
                  let n = { ...e, status: `unconfirmed` };
                  t.set(Y, f, n);
                }
              };
            try {
              if (i.teamId != null) {
                let n = await t
                  .get(b)
                  .mutateAsync({
                    automationId: e,
                    requestBody: { idempotency_key: crypto.randomUUID() },
                    errorToastId: l,
                    signal: u,
                  });
                (u?.throwIfAborted(),
                  t.set(Y, f, {
                    requestId: p,
                    requestedAt: h,
                    previousRunIds: g,
                    status: `starting`,
                    destination: { type: `run`, id: n.run_id },
                  }));
                return;
              }
              let r = await V(t, {
                automation: i.automation,
                conversationId: A(),
                conversationOrigin: t.get(E) === `work` ? `tpp` : null,
                signal: u ?? new AbortController().signal,
              });
              if (
                (u?.throwIfAborted(),
                t.set(Y, f, {
                  requestId: p,
                  requestedAt: h,
                  previousRunIds: g,
                  status: `starting`,
                  destination: { type: `conversation`, id: r },
                }),
                a == null || c?.aborted || t.get(B) !== n)
              )
                return;
              (s?.(),
                a(o(r), {
                  state: {
                    sidebarArea: `scheduled`,
                    sidebarAutomationId: e,
                    sidebarAutomationSource: `cloud`,
                    sidebarAutomationAccountId: n,
                    sidebarAutomationRunConversationId: r,
                  },
                }));
            } catch (e) {
              throw (
                e instanceof U || (e instanceof ee && [400, 401, 403, 404, 422, 429].includes(e.status))
                  ? _()
                  : v(),
                e
              );
            } finally {
              (d.resolve(void 0), (r = null));
              let i = t.get(Y, f);
              if (i?.requestId === p) {
                let r = setTimeout(v, 3e4);
                t.queryClient
                  .invalidateQueries({ queryKey: [`cloud-automations`, `runs`, n, e] })
                  .then(() => {
                    t.query
                      .getData(W, e)
                      ?.pages.some((e) =>
                        e.runs.some((e) =>
                          J(i, e, t.get(x, i.destination?.type === `conversation` ? i.destination.id : null)),
                        ),
                      ) && (clearTimeout(r), _());
                  });
              }
            }
          },
          onError: (e, { item: r, signal: i, errorToastId: a }) => {
            r.teamId != null ||
              i?.aborted ||
              t.get(B) !== n ||
              (e instanceof Error && e.name === `AbortError`) ||
              t
                .get(f)
                .danger(
                  t
                    .get(S)
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
      (Q = g(r, (e, { scope: t }) => {
        let n = (e) => {
          t.get(f).danger(
            t
              .get(S)
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
            if (n == null) return { success: !1 };
            let r = d.localAutomations;
            if (r == null) throw Error(`Local automations are unavailable for this host.`);
            return h(r.runNow(n));
          },
          networkMode: `always`,
          onMutate: () => {
            t.get(f).info(t.get(S).formatMessage(re.startingRun), { id: `local-automation-run-${e}` });
          },
          onSuccess: (
            { success: r },
            { navigateToLocalConversation: i, locationKey: a, useScheduledSidebar: o = !0 },
          ) => {
            if (!r) {
              n();
              return;
            }
            let s = t.query.getData(z)?.items.find((t) => t.id === e);
            s?.kind === `heartbeat` &&
              (j(t, c, _(s.targetThreadId)),
              t.get(N)?.key === a &&
                i(s.targetThreadId, void 0, {
                  state: o
                    ? {
                        sidebarArea: `scheduled`,
                        sidebarAutomationId: s.id,
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
//# sourceMappingURL=run-now-051c45dd9d07.js.map
