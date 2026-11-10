import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CPt as t,
  Cot as n,
  Pxt as r,
  SPt as i,
  Zxt as a,
  hrt as o,
  nSt as s,
  vrt as c,
  wot as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  $hr as u,
  BAn as d,
  FAn as f,
  GMr as p,
  HAn as m,
  OPr as h,
  Opr as g,
  Qhr as _,
  VAn as v,
  XMr as y,
  Ymr as b,
  _$n as x,
  aIr as S,
  bpr as C,
  dIn as w,
  ehr as T,
  fbn as E,
  kPr as D,
  kpr as O,
  oIr as k,
  tNr as A,
  tgr as j,
  uIn as M,
  wpr as N,
  ypr as P,
} from "./app-initial-5851df3f6cb1.js";
function F(e, n, r) {
  try {
    let i = e.get(M);
    for (let e of n.computers) {
      if (e.kind !== `user`) continue;
      let a = e.is_attached ? `attached` : `detached`;
      i.count(`orbit_computers`, `availability_observed`, {
        status: e.status,
        attachment: e.is_attached == null ? `unknown` : a,
      });
      let o =
        r?.thread_id === n.thread_id
          ? r.computers.find((t) => t.environment_id === e.environment_id)
          : void 0;
      if (e.is_attached && o?.kind === `user` && o.is_attached && o.status !== e.status) {
        let r = { event: `orbit.computer.availability_changed`, from_status: o.status, to_status: e.status };
        (i.count(`orbit_computers`, `availability_changed`, { from_status: o.status, to_status: e.status }),
          t.info(`Orbit computer availability changed`, {
            safe: r,
            sensitive: { conversationId: n.thread_id, environmentId: e.environment_id },
          }));
      }
    }
  } catch {}
}
var I;
function L() {
  return (L = e(() => {
    (w(),
      x(),
      i(),
      c(),
      (I = class {
        scope;
        operation;
        conversationId;
        environmentId;
        constructor(e, t, n, r) {
          ((this.scope = e), (this.operation = t), (this.conversationId = n), (this.environmentId = r));
        }
        async measure(e, t, n) {
          let r = performance.now(),
            i = `success`,
            a;
          this.record(e, `started`);
          try {
            let e = await t();
            return ((i = n?.(e) ?? `success`), e);
          } catch (e) {
            throw (
              (i = e instanceof Error && e.name === `AbortError` ? `cancelled` : `error`),
              (a = e instanceof o ? e.status : void 0),
              e
            );
          } finally {
            let t = performance.now() - r;
            this.record(e, i, t, a);
          }
        }
        record(e, n, r, i) {
          try {
            let a = this.scope.get(M),
              o = { operation: this.operation, stage: e };
            if (
              (r == null
                ? a.count(`orbit_computers`, `stage_started`, o)
                : (a.count(`orbit_computers`, `stage_completed`, { ...o, outcome: n }),
                  a.hist(`orbit_computers`, `stage_duration_ms`, { ...o, outcome: n }, r)),
              this.operation === `list` && (n === `success` || n === `started`))
            )
              return;
            let s = {
              event: `orbit.computer.stage`,
              operation: this.operation,
              stage: e,
              outcome: n,
              durationMs: r,
              httpStatus: i,
            };
            t.info(`Orbit computer stage`, {
              safe: s,
              sensitive: { conversationId: this.conversationId, environmentId: this.environmentId },
            });
          } catch {}
        }
      }));
  }))();
}
async function R(e, t) {
  let n = v();
  if (n == null) throw Error(`Local computer is unavailable`);
  (await n.setDisplayName(t),
    e.queryClient.invalidateQueries({ queryKey: [`orbit-computers`, e.get(p), e.get(y)] }));
}
async function z(e, t, n, r) {
  let i = e.get(D, V),
    a = new I(e, r ? `connect` : `disconnect`, t, n);
  await a.measure(`operation`, async () => {
    let o = [`orbit-computers`, e.get(p), e.get(y), t],
      s = await a.measure(`resolve_orbit`, () => e.query.getOrFetch(N, t));
    if (!O(s, t))
      throw Error(
        e
          .get(k)
          .formatMessage(
            {
              id: `restricted.aeon.desktopConnection.environmentsUnavailable.productName`,
              defaultMessage: `Could not load your {dot}’s computers`,
              description: `Error when the agent's existing computers cannot be loaded before changing its desktop connection. dot is a common noun for the agent and must remain untranslated.`,
            },
            { dot: `dot` },
          ),
      );
    await e.queryClient.cancelQueries({ queryKey: o });
    try {
      await j(t, async () => {
        let c = u(t);
        return (
          await a.measure(`request`, () =>
            r
              ? b.safePost(
                  i
                    ? `/tbo/{tbo_id}/computers/{environment_id}/connect`
                    : `/tbo/{tbo_id}/computers/{environment_id}/connect-and-replace`,
                  {
                    parameters: {
                      path: { tbo_id: s.id, environment_id: n },
                      query: { expected_thread_id: t },
                    },
                    retry: !1,
                  },
                )
              : b.safePost(`/tbo/{tbo_id}/computers/{environment_id}/disconnect`, {
                  parameters: { path: { tbo_id: s.id, environment_id: n }, query: { expected_thread_id: t } },
                  retry: !1,
                }),
          ),
          await e.queryClient.cancelQueries({ queryKey: o }),
          e.queryClient.setQueriesData({ queryKey: o }, (e) =>
            e == null
              ? e
              : {
                  ...e,
                  computers: e.computers.map((e) =>
                    e.kind === `user`
                      ? e.environment_id === n
                        ? { ...e, is_attached: r }
                        : r && !i
                          ? { ...e, is_attached: !1 }
                          : e
                      : e,
                  ),
                },
          ),
          c &&
          (await a.measure(
            `reconcile`,
            () => C(e, t),
            (e) => (e == null ? `unconfirmed` : `success`),
          )) !== !1
            ? null
            : void 0
        );
      });
    } catch (t) {
      throw (await e.queryClient.invalidateQueries({ queryKey: o }), t);
    }
    e.queryClient.invalidateQueries({ queryKey: o });
  });
}
var B, V, H, U, W, G, K;
function q() {
  return (q = e(() => {
    (r(),
      A(),
      f(),
      T(),
      m(),
      S(),
      l(),
      h(),
      P(),
      _(),
      E(),
      g(),
      L(),
      (B = `codex_aeon_executors_testing_allowlist`),
      (V = `2798301859`),
      (H = a(n, (e, { get: t, scope: n }) => {
        let r = t(p),
          i = t(y),
          { data: a } = t(d),
          o = [`orbit-computers`, r, i, e, a?.environmentId, a?.ready];
        return {
          enabled: r != null && i != null,
          queryKey: o,
          queryFn: async ({ signal: t }) => {
            let r = await n.query.getOrFetch(N, e);
            if (!O(r, e)) return null;
            let i = await new I(n, `list`, e).measure(`request`, () =>
              b.safeGet(`/tbo/{tbo_id}/computers`, {
                parameters: { path: { tbo_id: r.id }, query: { expected_thread_id: e } },
                signal: t,
              }),
            );
            return (
              !t.aborted && i.thread_id === e && F(n, i, n.queryClient.getQueryData(o)),
              i.thread_id === e ? i : null
            );
          },
          staleTime: 0,
          refetchOnMount: !0,
        };
      })),
      (U = s(n, ({ conversationId: e, selection: t }, { get: n }) => {
        let { data: r, isError: i, isPending: a } = n(d),
          { data: o, isError: s, isLoading: c } = n(H, e),
          l = o?.computers.filter((e) => e.kind === `user` && e.environment_id != null),
          u = l?.find((e) => e.environment_id === r?.environmentId),
          f = t === `local` ? u : (l?.find((e) => e.is_attached) ?? u ?? l?.[0]),
          p = f == null || f.environment_id === r?.environmentId,
          m = f?.is_attached ?? void 0,
          h = c || (a && (p || !m)),
          g;
        return (
          (g = h
            ? `loading`
            : (p && i) || s || m == null
              ? `unknown`
              : (p && r?.ready === !1) || f?.status === `offline`
                ? `offline`
                : f?.status === `connected`
                  ? m
                    ? `connected`
                    : `disconnected`
                  : `unknown`),
          {
            localEnvironmentId: r?.environmentId,
            environmentId: f?.environment_id ?? r?.environmentId,
            computerName: f?.display_name ?? null,
            computers: s ? void 0 : l,
            attached: m,
            connectionStatus: g,
            accessDisabledByAdmin: o?.local_computer_access_disabled_by_admin,
            disabled:
              h ||
              (p && i) ||
              s ||
              m == null ||
              f?.environment_id == null ||
              !(m ? f?.can_disconnect : f?.can_connect),
            error:
              (p ? r?.error : null) ??
              (s && o == null
                ? n(k).formatMessage(
                    {
                      id: `restricted.aeon.desktopConnection.environmentsUnavailable.productName`,
                      defaultMessage: `Could not load your {dot}’s computers`,
                      description: `Error when the agent's existing computers cannot be loaded before changing its desktop connection. dot is a common noun for the agent and must remain untranslated.`,
                    },
                    { dot: `dot` },
                  )
                : null),
          }
        );
      })),
      (W = s(n, (e, { get: t }) => t(U, { conversationId: e, selection: `local` }))),
      (G = s(n, (e, { get: t }) => t(U, { conversationId: e, selection: `attached` }))),
      (K = s(n, (e, { get: t }) => {
        let { data: n } = t(d),
          { data: r, isError: i } = t(H, e);
        if (v() == null || n?.environmentId != null)
          return r?.computers.flatMap((e) =>
            e.kind === `user` &&
            e.is_attached &&
            e.environment_id != null &&
            e.environment_id !== n?.environmentId
              ? [
                  {
                    environmentId: e.environment_id,
                    computerName: e.display_name,
                    connectionStatus: i ? `unknown` : e.status,
                    disabled: i || !e.can_disconnect,
                    accessDisabledByAdmin: r.local_computer_access_disabled_by_admin,
                  },
                ]
              : [],
          );
      })));
  }))();
}
export { H as a, R as c, K as i, z as l, V as n, W as o, q as r, G as s, B as t };
//# sourceMappingURL=desktop-connection-6677730d0f6b.js.map
