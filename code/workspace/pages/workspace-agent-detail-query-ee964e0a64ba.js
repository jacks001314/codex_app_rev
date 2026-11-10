import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  FKt as n,
  Jxt as r,
  KWt as i,
  O3t as a,
  QWt as o,
  RKt as s,
  RWt as c,
  TJt as l,
  U3t as u,
  V3t as d,
  Xxt as f,
  a3t as p,
  b3t as m,
  bJt as h,
  gC as g,
  hC as _,
  lSt as v,
  o3t as y,
  s3t as b,
  uSt as x,
  wJt as S,
  xJt as C,
} from "./app-initial-f094ef01c64d.js";
function w({ accountId: e, connectorIds: t, enabled: n = !0 }) {
  let r = [...new Set(t)].sort();
  return m({
    queryKey: [`workspace-agent`, `apps`, e, r],
    queryFn: ({ signal: e }) => O(r, e),
    enabled: n,
    retry: !1,
    staleTime: S.FIVE_MINUTES,
  });
}
function T(e, t) {
  return m({
    queryKey: [`workspace-agent`, `connector-actions`, e, t],
    queryFn: async ({ signal: e }) =>
      (
        await n.safeGet(`/aip/connectors/{connector_id}/actions`, {
          parameters: { path: { connector_id: t } },
          signal: e,
        })
      ).actions,
    retry: !1,
    staleTime: S.FIVE_MINUTES,
  });
}
function E({ accountId: e, agentId: t, versionScope: r, enabled: i = !0 }) {
  return m({
    queryKey: [`workspace-agent`, `connector-readiness`, e, t, r],
    queryFn: ({ signal: e }) =>
      n.safeGet(`/hermes/agent/{agent_id}/list-connector-readiness`, {
        parameters: { path: { agent_id: t }, query: { version_scope: r } },
        signal: e,
      }),
    enabled: i,
    retry: !1,
    staleTime: S.ONE_MINUTE,
  });
}
function D(e) {
  return e.connector_identifier.type === `CONNECTOR_ID`
    ? e.connector_identifier.connector_id
    : null;
}
async function O(e, t) {
  let r = await n.safeGet(`/hermes/apps/browse`, { signal: t }),
    i = (0, k.default)(
      [
        [`recommended`, r.recommended_apps],
        [`workspace`, r.workspace_apps],
        [`public`, r.public_apps],
      ].flatMap(([e, t]) => t.map((t) => ({ ...t, source: e }))),
      `id`,
    ),
    a = new Map(i.map((e) => [e.id, e])),
    o = [...new Set([...a.keys(), ...e])],
    s =
      o.length === 0
        ? { apps: [], missing_app_ids: [] }
        : await n.safePost(`/hermes/apps/content`, { requestBody: { app_ids: o }, signal: t }),
    c = new Map(s.apps.map((e) => [e.id, e])),
    l = [];
  for (let e of o) {
    let t = c.get(e);
    if (t == null) continue;
    let n = a.get(e);
    l.push({
      id: e,
      name: t.name,
      description: t.description?.trim() || n?.subtitle?.trim() || null,
      logoUrl: t.logo_url ?? n?.logo_url ?? null,
      logoDarkUrl: t.logo_url_dark ?? n?.logo_dark_url ?? null,
      source: n?.source ?? `selected`,
      disabledByAdmin: n?.disabled_by_admin === !0,
      connectorType: t.connector_type ?? null,
      status: t.status ?? null,
      supportedAuthTypes: t.supported_auth_types ?? null,
    });
  }
  return { apps: l, missingConnectorIds: s.missing_app_ids };
}
var k,
  A = e(() => {
    (b(), (k = t(c(), 1)), l(), s());
  });
async function j(e, t, i, a, o, s) {
  let c = await n.safeGet(
      `/hermes/agent/{agent_id}/persistent-folder/files/{file_id}/download_url`,
      {
        parameters: { path: { agent_id: e, file_id: t } },
        signal: s,
      },
    ),
    l = v(c.download_url);
  if (l == null) throw Error(`Workspace Agent memory file download URL is unsafe`);
  if (!M(c.mime_type ?? a, c.file_name ?? i)) return { kind: `unsupported`, reason: `binary` };
  let u = c.size_bytes ?? o;
  if (u != null && u > P) return { kind: `unsupported`, reason: `too-large` };
  let d = await h
      .getInstance()
      .fetch(r(l) ?? l, { headers: c.needs_auth_token === !0 ? f() : void 0, signal: s }),
    p = Number(d.headers.get(`Content-Length`));
  return Number.isFinite(p) && p > P
    ? (await d.body?.cancel(), { kind: `unsupported`, reason: `too-large` })
    : N(d, s);
}
function M(e, t) {
  let n = e?.split(`;`, 1)[0].trim().toLowerCase();
  return n?.startsWith(`text/`) ||
    n === `application/json` ||
    n?.endsWith(`+json`) ||
    n === `application/xml` ||
    n?.endsWith(`+xml`) ||
    n === `application/javascript` ||
    n === `application/x-yaml`
    ? !0
    : n != null && n !== `application/octet-stream`
      ? !1
      : /\.(?:css|csv|html?|js|json|jsx|log|md|mdx|py|text|toml|ts|tsx|txt|xml|ya?ml)$/i.test(
          t ?? ``,
        );
}
async function N(e, t) {
  if (e.body == null) return { kind: `text`, content: ``, truncated: !1 };
  let n = e.body.getReader(),
    r = new TextDecoder(),
    i = 0,
    a = ``,
    o = !1;
  for (;;) {
    t.throwIfAborted();
    let e = await n.read();
    if (e.done) {
      a += r.decode();
      break;
    }
    let s = P - i;
    if (e.value.byteLength > s) {
      ((a += r.decode(e.value.subarray(0, s), { stream: !0 })),
        (a += r.decode()),
        (o = !0),
        await n.cancel());
      break;
    }
    ((i += e.value.byteLength), (a += r.decode(e.value, { stream: !0 })));
  }
  return { kind: `text`, content: a, truncated: o };
}
var P,
  F,
  I,
  L,
  R,
  z,
  B = e(() => {
    (a(),
      o(),
      x(),
      y(),
      l(),
      s(),
      C(),
      _(),
      A(),
      (P = 1e5),
      (F = u(p, (e, { get: t }) => {
        let r = t(i);
        return {
          enabled: r != null && t(g) === !0,
          queryKey: [`workspace-agent`, `detail`, r, e],
          queryFn: ({ signal: t }) =>
            n.safeGet(`/hermes/agent/{agent_id}/detail-view`, {
              parameters: { path: { agent_id: e } },
              signal: t,
            }),
          retry: !1,
          staleTime: S.ONE_MINUTE,
        };
      })),
      (I = d(p, (e, { get: t }) => {
        let r = t(i);
        return {
          enabled: r != null && t(g) === !0,
          initialPageParam: null,
          queryKey: [`workspace-agent`, `activity`, r, e],
          queryFn: ({ pageParam: t, signal: r }) =>
            n.safeGet(`/hermes/agent/{agent_id}/conversations`, {
              parameters: { path: { agent_id: e }, query: { cursor: t, limit: 25 } },
              signal: r,
            }),
          getNextPageParam: (e) => e.cursor ?? void 0,
          retry: !1,
          staleTime: S.ONE_MINUTE,
        };
      })),
      (L = u(p, ({ agentId: e, channel: t }, { get: r }) => {
        let a = r(i);
        return {
          enabled: a != null && r(g) === !0,
          queryKey: [`workspace-agent`, `memory`, a, e, t],
          queryFn: ({ signal: r }) =>
            n.safeGet(`/hermes/agent/{agent_id}/persistent-folder/tree`, {
              parameters: {
                path: { agent_id: e },
                query: {
                  channel_binding_type: t.type,
                  channel_binding_link_id: t.type === `slack` ? t.linkId : void 0,
                  channel_binding_channel_id: t.type === `slack` ? t.channelId : void 0,
                },
              },
              signal: r,
            }),
          retry: !1,
          staleTime: S.ONE_MINUTE,
        };
      })),
      (R = u(
        p,
        (
          { agentId: e, fileId: t, fileName: n, mimeType: r, sizeBytes: a, updatedAt: o },
          { get: s },
        ) => {
          let c = s(i);
          return {
            enabled: c != null && t != null && s(g) === !0,
            queryKey: [`workspace-agent`, `memory-file`, c, e, t, o],
            queryFn: ({ signal: i }) => j(e, t ?? ``, n, r, a, i),
            retry: !1,
            staleTime: S.ONE_MINUTE,
          };
        },
      )),
      (z = u(p, (e, { get: t }) => {
        let n = t(i);
        return {
          ...w({ accountId: n ?? ``, connectorIds: e }),
          enabled: n != null && e.length > 0 && t(g) === !0,
        };
      })));
  });
export { R as a, T as c, A as d, F as i, D as l, I as n, L as o, z as r, w as s, B as t, E as u };
//# sourceMappingURL=workspace-agent-detail-query-ee964e0a64ba.js.map
