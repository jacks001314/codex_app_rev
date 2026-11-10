import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Bbt as t,
  FR as n,
  HR as r,
  LR as i,
  UR as a,
  _ht as o,
  mht as s,
  rst as c,
  uft as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bq as u,
  DKn as d,
  Djr as f,
  Ejr as p,
  Flr as m,
  Ftr as h,
  Ilr as g,
  Jxr as _,
  Ntr as v,
  Sar as y,
  Vq as b,
  bar as x,
  btr as S,
  cxr as C,
  jtr as w,
  lrr as T,
  mnr as E,
  mrr as D,
  pnr as O,
  qxr as k,
  sxr as A,
  uxr as j,
  vrr as M,
  vtr as N,
  yrr as P,
  ytr as F,
} from "./app-initial-5851df3f6cb1.js";
import { a as I, t as L } from "./mcp-tool-activity-label-220d2d98d4ad.js";
import { t as R } from "./mcp-app-analytics-7a30d3890ba8.js";
function z(e) {
  let t = [],
    r = new Set(),
    i = (e, i) => {
      for (let a of [
        ...A({ attachments: e, input: i }),
        ...i.flatMap((e) =>
          e.type === `localImage` ? [{ label: n(e.path) || e.path, path: e.path, fsPath: e.path }] : [],
        ),
        ...e.filter(
          (e) => e.isImageAttachment && !i.some((t) => t.type === `localImage` && s(t.path, e.fsPath)),
        ),
      ]) {
        let e = j(a);
        r.has(e) || (r.add(e), t.push(a));
      }
    };
  for (let t = e.length - 1; t >= 0; --t) {
    let n = e[t],
      r = h(n.items);
    for (let e = r.length - 1; e >= 0; --e) {
      let t = r[e];
      t.type === `steeringUserMessage`
        ? i(t.attachments, t.input)
        : t.type === `userMessage` && i(t.attachments ?? k(t.content), t.content);
    }
    i(n.params.attachments ?? [], n.params.input);
  }
  return t;
}
function B(e, n, r, i, a, o, s = !1, c) {
  let u = [],
    d = new Map(),
    f = F(a);
  for (let a = e.length - 1; a >= 0; --a) {
    let p = e[a],
      m = h(p.items);
    for (let e = m.length - 1; e >= 0; --e) {
      let a = m[e];
      if (a.type !== `mcpToolCall` || (s && x(a) != null) || t(a.server) || N(a.server) === `plugin-runtime`)
        continue;
      let h = M({
          appContext: a.appContext,
          apps: n,
          functionName: `${a.server}__${a.tool}`,
          serverName: a.server,
          toolName: a.tool,
        }),
        g = U(a, h, f, c, r);
      if (o?.has(g.id) === !0) continue;
      let _ = l(a.id),
        v = i?.has(_) === !0 ? _ : void 0,
        y = d.get(g.id),
        b = E(p, a),
        S = L({
          appContext: a.appContext,
          completed: b.completed,
          intl: r,
          matchingApp: h,
          serverName: a.server,
          toolArguments: void 0,
          toolName: a.tool,
        });
      if (y != null) {
        let e = y.activities.find((e) => e.label === S);
        (e == null ? y.activities.push({ calls: [b], label: S }) : e.calls.push(b),
          y.mcpAppId == null && v != null && (y.mcpAppId = v));
        continue;
      }
      (v != null && (g.mcpAppId = v), g.activities.push({ calls: [b], label: S }), d.set(g.id, g), u.push(g));
    }
  }
  return u;
}
function V(e) {
  let t = !1,
    n = 0,
    r = [],
    i = [],
    a = new Set(),
    o = new Set(),
    s = (e) => {
      let t = e.trim();
      t.length !== 0 && ((n += 1), !a.has(t) && (a.add(t), r.push(t)));
    },
    c = (e) => {
      let t = d({ url: e });
      t == null || o.has(t.url) || (o.add(t.url), i.push(t));
    };
  for (let n = e.length - 1; n >= 0; --n) {
    let r = e[n],
      i = h(r.items);
    for (let e = i.length - 1; e >= 0; --e) {
      let n = i[e];
      if (n.type !== `webSearch`) continue;
      t = !0;
      let r = n.action;
      if (r == null) s(n.query);
      else if (r.type === `search`) {
        let e = r.queries == null || r.queries.length === 0 ? [r.query] : r.queries;
        for (let t of e) t != null && s(t);
      } else r.type === `openPage` || r.type === `findInPage` ? r.url != null && c(r.url) : s(n.query);
    }
  }
  return t ? { queries: r, queryCount: n, viewedLinks: i } : null;
}
function H(e, t) {
  if (t == null) return { externalSources: e, webSearchSource: null };
  let n = new Set(
      t.viewedLinks.flatMap((e) => {
        let t = w(e.url);
        return t == null ? [] : [t];
      }),
    ),
    r = e.filter(
      (e) => !(e.provider == null && e.activities.length === 1 && e.activities[0] === `read` && n.has(e.key)),
    ),
    i = new Set(r.map((e) => e.key)),
    a = {
      ...t,
      viewedLinks: t.viewedLinks.filter((e) => {
        let t = w(e.url);
        return t == null || !i.has(t);
      }),
    };
  return { externalSources: r, webSearchSource: a.queryCount === 0 && a.viewedLinks.length === 0 ? null : a };
}
function U(e, t, n, i, a) {
  let o = N(e.server),
    s = o === `computer-use` ? T : null;
  if (t != null)
    return {
      id: s ?? t.id,
      name: t.id === `connector_openai_pages` ? a.formatMessage(b.navigation) : t.name,
      pluginDisplayNames: t.pluginDisplayNames ?? [],
      logoUrl: t.logoUrl,
      logoUrlDark: t.logoUrlDark,
      activities: [],
      trustedAnalyticsAppName: R(t),
    };
  if (e.appContext != null)
    return {
      id: s ?? e.appContext.connectorId,
      name:
        e.appContext.connectorId === `connector_openai_pages`
          ? a.formatMessage(b.navigation)
          : (e.appContext.appName ?? e.appContext.connectorId),
      pluginDisplayNames: [],
      logoUrl: null,
      logoUrlDark: null,
      activities: [],
    };
  let c = n.get(o),
    l =
      e.pluginId == null || f(e.server)
        ? void 0
        : i?.find(({ plugin: t }) => t.id === e.pluginId || m(t) === e.pluginId);
  return {
    id: s ?? e.pluginId ?? `mcp-server:${e.server}`,
    name: c?.name ?? r(e.server),
    pluginDisplayNames: [],
    logoUrl: c?.logoUrl ?? l?.composerIconPath ?? l?.logoPath ?? null,
    logoUrlDark: c?.logoUrlDark ?? l?.composerIconPath ?? l?.logoDarkPath ?? l?.logoPath ?? null,
    activities: [],
  };
}
function W() {
  return (W = e(() => {
    (c(), o(), a(), g(), _(), C(), p(), O(), I(), P(), S(), D(), y(), u(), i(), v());
  }))();
}
export { W as a, H as i, B as n, V as r, z as t };
//# sourceMappingURL=local-conversation-summary-panel-sources-model-a2fb0c4f9590.js.map
