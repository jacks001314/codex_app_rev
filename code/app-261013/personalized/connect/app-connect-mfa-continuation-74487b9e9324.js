import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { BLt as t, EPt as n, TLt as r, fLt as i, pIt as a, pLt as o } from "./app-shared-bbfeca5e5737.js";
import {
  $On as s,
  Dsr as c,
  Msr as l,
  _1n as u,
  akn as d,
  v1n as f,
  vdr as p,
  xdr as m,
  y1n as h,
} from "./app-initial-5851df3f6cb1.js";
function g(e, t, n) {
  let r = e.get(l),
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
  let a = y.parse({
    ...t,
    plugin: i,
    id: n?.id ?? crypto.randomUUID(),
    expiresAt: n?.expiresAt ?? Date.now() + 18e5,
  });
  sessionStorage.setItem(b, JSON.stringify(a));
  let o = new URL(`/connector/mfa`, window.location.origin);
  return (o.searchParams.set(`state`, a.id), o.href);
}
function _(e, t, n) {
  try {
    let r = y.safeParse(JSON.parse(sessionStorage.getItem(b) ?? `null`));
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
function v(e) {
  try {
    if (e != null) {
      let t = y.safeParse(JSON.parse(sessionStorage.getItem(b) ?? `null`));
      if (!t.success || t.data.connectorId !== e) return;
    }
    sessionStorage.removeItem(b);
  } catch {}
}
var y, b;
function x() {
  return (x = e(() => {
    (n(),
      f(),
      c(),
      m(),
      d(),
      (y = o({
        id: t(),
        accountId: r().min(1),
        userId: r().min(1),
        expiresAt: i(),
        connectorId: r().min(1),
        hostId: r().min(1).optional(),
        resumeTarget: s.optional(),
        options: p.optional(),
        installAttemptId: r().optional(),
        requestedCompanionConnectorIds: a(r()).optional(),
        returnTo: p.shape.redirectAfter.unwrap(),
        plugin: o({
          hostId: r().min(1),
          pluginId: r().min(1),
          remotePluginId: r().optional(),
          options: u,
          requiredApps: h.optional(),
        }).optional(),
      })),
      (b = `app-connect-mfa-continuation`));
  }))();
}
export { g as i, x as n, _ as r, v as t };
//# sourceMappingURL=app-connect-mfa-continuation-74487b9e9324.js.map
