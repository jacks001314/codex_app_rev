import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  HFt as t,
  LRt as n,
  ORt as r,
  VRt as i,
  kLt as a,
  kRt as o,
  nzt as s,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  DMn as c,
  X4n as l,
  Y4n as u,
  Z4n as d,
  gdr as f,
  hhr as p,
  vhr as m,
  xMn as h,
  xdr as g,
} from "./app-initial-ad16eaadf81f.js";
function _(e, t, n) {
  let r = e.get(g),
    i = n?.plugin;
  (r.kind === `connectAppBeforeInstall` || r.kind === `connectApp`) &&
    r.app.id === t.connectorId &&
    r.hostedAccountId === t.accountId &&
    (i = {
      hostId: r.hostId,
      pluginId: r.plugin.plugin.id,
      remotePluginId: r.plugin.plugin.remotePluginId ?? void 0,
      options: u.parse(r),
      requiredApps:
        r.kind === `connectApp`
          ? r.requiredApps
              .filter(({ app: e, status: n }) => e.id !== t.connectorId && n !== `connected`)
              .map(({ app: e }) => e)
          : void 0,
    });
  let a = b.parse({
    ...t,
    plugin: i,
    id: n?.id ?? crypto.randomUUID(),
    expiresAt: n?.expiresAt ?? Date.now() + 18e5,
  });
  sessionStorage.setItem(x, JSON.stringify(a));
  let o = new URL(`/connector/mfa`, window.location.origin);
  return (o.searchParams.set(`state`, a.id), o.href);
}
function v(e, t, n) {
  try {
    let r = b.safeParse(JSON.parse(sessionStorage.getItem(x) ?? `null`));
    return !r.success ||
      r.data.id !== e ||
      r.data.accountId !== t ||
      r.data.userId !== n ||
      r.data.expiresAt <= Date.now()
      ? null
      : r.data;
  } catch {
    return null;
  }
}
function y(e) {
  try {
    if (e != null) {
      let t = b.safeParse(JSON.parse(sessionStorage.getItem(x) ?? `null`));
      if (!t.success || t.data.connectorId !== e) return;
    }
    sessionStorage.removeItem(x);
  } catch {}
}
var b, x;
function S() {
  return (S = e(() => {
    (t(),
      l(),
      f(),
      m(),
      c(),
      (b = o({
        id: s(),
        accountId: i().min(1),
        userId: i().min(1),
        expiresAt: r(),
        connectorId: i().min(1),
        hostId: i().min(1).optional(),
        resumeTarget: h.optional(),
        options: p.optional(),
        installAttemptId: i().optional(),
        requestedCompanionConnectorIds: a(i()).optional(),
        linkParams: n(i(), i()).optional(),
        returnTo: p.shape.redirectAfter.unwrap(),
        plugin: o({
          hostId: i().min(1),
          pluginId: i().min(1),
          remotePluginId: i().optional(),
          options: u,
          requiredApps: d.optional(),
        }).optional(),
      })),
      (x = `app-connect-mfa-continuation`));
  }))();
}
export { _ as i, S as n, v as r, y as t };
//# sourceMappingURL=app-connect-mfa-continuation-e50c4da2add7.js.map
