import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  EPt as n,
  Fat as r,
  Pat as i,
  Pxt as a,
  TLt as o,
  Zxt as s,
  nSt as c,
  wot as l,
  xLt as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  Fcr as d,
  GMr as f,
  Icr as p,
  LMr as ee,
  Lcr as m,
  NDr as h,
  NPr as g,
  OPr as _,
  Udr as v,
  V0n as y,
  W0n as b,
  Wur as x,
  XMr as S,
  Ymr as C,
  dMr as w,
  ehr as T,
  fMr as E,
  gdr as D,
  idr as O,
  jDr as k,
  jPr as A,
  jcr as j,
  kPr as M,
  pOr as N,
  tNr as P,
  z0n as F,
  zOr as I,
} from "./app-initial-5851df3f6cb1.js";
import { o as L, s as R, t as z } from "./microsoft-oauth-bundle-e77977413c17.js";
var B;
function V() {
  return (V = e(() => {
    (a(),
      P(),
      E(),
      I(),
      h(),
      l(),
      _(),
      (B = c(t, (e, { get: t }) => {
        if (t(f) !== e.accountId || t(S) !== e.userId || t(N) !== e.accountId) return !1;
        let n = t(k);
        if (n.isPending) return;
        if (!n.isSuccess || n.data.developerMode !== !0) return !1;
        let r = t(A);
        if (t(g) || r == null) return;
        if ((t(M, `2042715633`), t(M, `1627064618`), r.checkGate(`2042715633`) || !r.checkGate(`1627064618`)))
          return !0;
        let i = t(ee, e.accountId);
        if (i.isPending) return;
        let a = i.data?.accounts?.[e.accountId]?.account;
        if (!i.isSuccess || a?.account_id !== e.accountId) return !1;
        if (a.account_user_role === `account-admin` || a.account_user_role === `account-owner`) return !0;
        let o = t(w, e.accountId);
        if (!o.isPending)
          return o.isSuccess && o.data.permissions?.includes(`chatgpt.workspace.connector.dev_mode`) === !0;
      })));
  }))();
}
function H(e, t, n, r, i = !0) {
  let a = new Set();
  return e.flatMap((e) => {
    let o = e
      .flatMap((e) => t.filter((t) => v(t.id) === v(e)))
      .find(
        (e) =>
          (e.status === `ENABLED` || (i && e.status === `ONLY_ME`)) &&
          e.name.trim().length > 0 &&
          !Z.has(v(e.id)) &&
          e.labels?.admin_only_connector !== `true`,
      );
    if (!o || a.has(v(o.id))) return [];
    a.add(v(o.id));
    let s = new Set(e.map(v));
    return [
      {
        connector: o,
        familyIds: e,
        connected: n.some(
          ({ canonicalAppId: e, plugin: t }) =>
            e != null && s.has(v(e)) && t.enabled && t.availability !== `DISABLED_BY_ADMIN`,
        ),
        teammateCount: Math.max(
          0,
          ...(r?.connector_stats
            ?.filter((e) => s.has(v(e.connector_id)))
            .map((e) => e.unique_user_cnt ?? 0) ?? []),
        ),
      },
    ];
  });
}
function U(e, t) {
  let n = e?.getDynamicConfig(`3365181325`).get(`old_to_new_mapping`, {}),
    r = Y.parse(n ?? {});
  return (t ? [...J.slice(0, 8), ...J.slice(-2)] : J).map((e) =>
    [Object.entries(r).find(([t]) => v(t) === v(e))?.[1], e].filter((e) => !!e && !Z.has(v(e))),
  );
}
async function W(e, t) {
  let n = U(e.get(A), !1),
    r = K.map((e) => ({
      ...e,
      familyIds: n.find((t) => t.some((t) => v(t) === v(e.connectorId))) ?? [e.connectorId],
    })),
    i = [...new Set(r.flatMap(({ familyIds: e }) => e))],
    a = { accountId: t.accountId, hostId: j, roots: void 0 };
  await Promise.all([
    e.queryClient.invalidateQueries({
      queryKey: e.query.getOptions(Q, t).queryKey,
      exact: !0,
      refetchType: `none`,
    }),
    e.queryClient.invalidateQueries({
      queryKey: e.query.getOptions(m, a).queryKey,
      exact: !0,
      refetchType: `none`,
    }),
  ]);
  let [o, s, c] = await Promise.all([
      e.query.getOrFetch(Q, t),
      C.safePost(`/aip/connectors/batch`, {
        additionalHeaders: { "ChatGPT-Account-Id": t.accountId, [D]: `CONNECTOR_SETTING` },
        parameters: { query: { apply_eligibility_filter: !0 } },
        requestBody: { connector_ids: i, include_actions: !1 },
      }),
      d(e, a, `connector_setup`),
    ]),
    l = s.connectors;
  return {
    provider: o.provider,
    mxProvider: o.mxProvider,
    recommendationSucceeded: o.requestSucceeded,
    connectors: r.map(({ provider: e, kind: t, connectorId: n, familyIds: r }) => {
      let i = new Set(r.map(v)),
        a = r.flatMap((e) => l.filter((t) => v(t.id) === v(e))),
        o = a.find(({ status: e }) => e === `ENABLED` || e === `ONLY_ME`),
        s = a.find((e) => v(e.id) === v(n) && (e.status === `ENABLED` || e.status === `ONLY_ME`)),
        u = (o ?? a[0])?.status ?? null,
        d = c.filter(({ canonicalAppId: e, plugin: t }) => e != null && i.has(v(e)) && t.installed),
        f = o != null && d.some(({ plugin: e }) => e.enabled && e.availability !== `DISABLED_BY_ADMIN`);
      return {
        provider: e,
        kind: t,
        connectorId: n,
        availableConnectorId: (s ?? o)?.id ?? null,
        status: u,
        enabledForWorkspace: u === `ENABLED`,
        availableToUser: o != null,
        installed: d.length > 0,
        usable: f,
        blockedByAdmin:
          !f &&
          ((o == null && a.some((e) => e.status === `DISABLED_BY_ADMIN`)) ||
            d.some(({ plugin: e }) => e.availability === `DISABLED_BY_ADMIN`)),
      };
    }),
  };
}
function G(e, t, n) {
  if (t == null) return [];
  let r = q[t].flatMap((t) =>
      e.filter((e) => e.familyIds.some((e) => v(e) === v(t)) && x(e.connector, `OAUTH`)),
    ),
    i = r.find((e) => !e.connected);
  if (i == null) return [];
  let a = q[t].find((e) => i.familyIds.some((t) => v(t) === v(e)));
  if (a == null) return [i];
  let o = [];
  return (
    t === `google`
      ? (o = y({ connectorId: a, statsigClient: n, disableExposureLog: !0 }).map(({ connectorId: e }) => e))
      : R({ connectorId: a, statsigClient: n, disableExposureLog: !0 }) && (o = [...q.microsoft]),
    r.filter((e) => e === i || e.familyIds.some((e) => o.some((t) => v(t) === v(e))))
  );
}
var K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (a(),
      n(),
      O(),
      b(),
      L(),
      T(),
      p(),
      l(),
      _(),
      r(),
      V(),
      (K = [
        { provider: `google`, kind: `email`, connectorId: F[0].connectorId },
        { provider: `google`, kind: `calendar`, connectorId: F[1].connectorId },
        { provider: `google`, kind: `contacts`, connectorId: F[2].connectorId },
        { provider: `google`, kind: `drive`, connectorId: F[3].connectorId },
        { provider: `microsoft`, kind: `email`, connectorId: z[0].connectorId },
        { provider: `microsoft`, kind: `calendar`, connectorId: z[1].connectorId },
        { provider: `microsoft`, kind: `sharepoint`, connectorId: z[2].connectorId },
        { provider: `microsoft`, kind: `teams`, connectorId: z[3].connectorId },
      ]),
      (q = {
        google: [F[0].connectorId, F[3].connectorId, F[1].connectorId, F[2].connectorId],
        microsoft: [z[0].connectorId, z[1].connectorId, z[3].connectorId, z[2].connectorId],
      }),
      (J = [
        F[3].connectorId,
        z[2].connectorId,
        `asdk_app_69a1d78e929881919bba0dbda1f6436d`,
        z[3].connectorId,
        F[0].connectorId,
        z[0].connectorId,
        F[1].connectorId,
        z[1].connectorId,
        F[2].connectorId,
        `asdk_app_69c18c28f1188191bf5b8445c4ab0a2e`,
        `connector_76869538009648d5b282a4bb21c3d157`,
        `asdk_app_69b31dc2110c8191b8b47dc98fe5a052`,
        `asdk_app_695bfc98071c8191bac7bc479aa27de7`,
      ]),
      (Y = u(o(), o().min(1).catch(``))),
      (X = s(t, (e, { get: t, scope: n }) => {
        let r = !e.education || t(B, e);
        return {
          queryKey: [
            `workspace-onboarding-apps`,
            e.accountId,
            e.userId,
            e.education,
            ...(e.education ? [r] : []),
          ],
          enabled: r !== void 0,
          staleTime: i.ONE_MINUTE,
          retry: !1,
          queryFn: async ({ signal: t }) => {
            let i = U(n.get(A), e.education),
              a = { "ChatGPT-Account-Id": e.accountId, [D]: `CONNECTOR_SETTING` },
              [o, s, c] = await Promise.all([
                C.safePost(`/aip/connectors/batch`, {
                  additionalHeaders: a,
                  parameters: { query: { apply_eligibility_filter: !0 } },
                  requestBody: { connector_ids: [...new Set(i.flat())], include_actions: !1 },
                  signal: t,
                }),
                d(n, { accountId: e.accountId, hostId: j, roots: void 0 }, `connector_setup`),
                C.safeGet(`/aip/workspace/connector-stats`, { additionalHeaders: a, signal: t }).catch(
                  () => null,
                ),
              ]);
            return (t.throwIfAborted(), H(i, o.connectors, s, c, r === !0));
          },
        };
      })),
      (Z = new Set(
        [
          `connector_bd313622bce5485cb3d0b338715f7108`,
          `connector_3f8d1a79f27c4c7ba1a897ab13bf37dc`,
          `connector_8cbe1e9e357f4ec79fa9f1a8aa78f4c1`,
          `connector_fdb98b59c8d44f678b086d20e82bd316`,
        ].map(v),
      )),
      (Q = s(t, (e, t) => ({
        queryKey: [`workspace-onboarding-recommendation`, e.accountId, e.userId],
        staleTime: i.FIVE_MINUTES,
        retry: !1,
        queryFn: async ({ signal: n }) => {
          let r = await C.safeGet(`/aip/workspace/connector-recommendation`, {
            additionalHeaders: { "ChatGPT-Account-Id": e.accountId },
            signal: n,
          }).catch(() => null);
          n.throwIfAborted();
          let i = U(t.get(A), !1).find((e) => e.some((e) => v(e) === v(r?.connector_id ?? ``))),
            a = r?.mx_provider === `google` || r?.mx_provider === `microsoft` ? r.mx_provider : null;
          for (let e of [`google`, `microsoft`])
            if (i?.some((t) => q[e].some((e) => v(t) === v(e))))
              return { provider: e, mxProvider: a, requestSucceeded: !0 };
          return { provider: a, mxProvider: a, requestSucceeded: r != null };
        },
      }))));
  }))();
}
export { Q as a, X as i, G as n, B as o, $ as r, V as s, W as t };
//# sourceMappingURL=apps-d2555ab84eb9.js.map
