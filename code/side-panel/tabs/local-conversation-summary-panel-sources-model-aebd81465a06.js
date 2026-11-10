import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  ABt as t,
  B4t as n,
  B6t as r,
  Czt as i,
  D_t as a,
  EBt as o,
  E_t as s,
  FEt as c,
  H4t as l,
  IWt as u,
  Jen as d,
  LWt as f,
  NWt as p,
  OBt as m,
  PEt as h,
  PWt as g,
  Q$ as _,
  Szt as v,
  Z$ as y,
  h as b,
  h2t as x,
  jBt as S,
  kBt as C,
  m2t as w,
  v as T,
  w7t as E,
  xBt as D,
} from "./app-initial-f094ef01c64d.js";
import { a as O, s as k } from "./local-conversation-webmcp-tools-model-40d1a7153ca0.js";
import { n as A, t as j } from "./mcp-app-analytics-d4aac36ba72c.js";
function M(e) {
  let t = new Map();
  for (let n of e?.data ?? []) {
    let e = n.serverInfo;
    if (e == null) continue;
    let r = y(e),
      i = e.title?.trim() || e.name.trim() || null;
    if (r == null && i == null) continue;
    let a = { logoUrl: r?.logoUrl ?? null, logoUrlDark: r?.logoDarkUrl ?? null, name: i };
    for (let r of [n.name, e.name]) {
      let e = N(r);
      e.length > 0 && !t.has(e) && t.set(e, a);
    }
  }
  return t;
}
function N(e) {
  return e?.trim().toLowerCase() ?? ``;
}
var P = e(() => {
  _();
});
function F(e) {
  let t = [],
    r = new Set(),
    i = (e, i) => {
      for (let a of [
        ...p({ attachments: e, input: i }),
        ...i.flatMap((e) =>
          e.type === `localImage`
            ? [{ label: n(e.path) || e.path, path: e.path, fsPath: e.path }]
            : [],
        ),
      ]) {
        let e = u(a);
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
        : t.type === `userMessage` && i(t.attachments ?? w(t.content), t.content);
    }
    i(n.params.attachments ?? [], n.params.input);
  }
  return t;
}
function I(e, t, n, r, a, o, s = !1) {
  let c = [],
    l = new Map(),
    u = M(a);
  for (let a = e.length - 1; a >= 0; --a) {
    let s = e[a],
      f = h(s.items);
    for (let e = f.length - 1; e >= 0; --e) {
      let a = f[e];
      if (a.type !== `mcpToolCall` || d(a.server) || N(a.server) === `plugin-runtime`) continue;
      let p = m({
          apps: t,
          functionName: `${a.server}__${a.tool}`,
          serverName: a.server,
          toolName: a.tool,
        }),
        h = z(a, p, u);
      if (o?.has(h.id) === !0) continue;
      let g = E(a.id),
        _ = r?.has(g) === !0 ? g : void 0,
        v = l.get(h.id),
        y = i(s, a),
        x = b({
          completed: y.completed,
          intl: n,
          matchingApp: p,
          serverName: a.server,
          toolArguments: void 0,
          toolName: a.tool,
        });
      if (v != null) {
        let e = v.activities.find((e) => e.label === x);
        (e == null ? v.activities.push({ calls: [y], label: x }) : e.calls.push(y),
          v.mcpAppId == null && _ != null && (v.mcpAppId = _));
        continue;
      }
      (_ != null && (h.mcpAppId = _),
        h.activities.push({ calls: [y], label: x }),
        l.set(h.id, h),
        c.push(h));
    }
  }
  return c;
}
function L(e) {
  let t = !1,
    n = 0,
    r = [],
    i = [],
    a = new Set(),
    o = new Set(),
    c = (e) => {
      let t = e.trim();
      t.length !== 0 && ((n += 1), !a.has(t) && (a.add(t), r.push(t)));
    },
    l = (e) => {
      let t = s({ url: e });
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
      if (r == null) c(n.query);
      else if (r.type === `search`) {
        let e = r.queries == null || r.queries.length === 0 ? [r.query] : r.queries;
        for (let t of e) t != null && c(t);
      } else
        r.type === `openPage` || r.type === `findInPage` ? r.url != null && l(r.url) : c(n.query);
    }
  }
  return t ? { queries: r, queryCount: n, viewedLinks: i } : null;
}
function R(e, t) {
  if (t == null) return { externalSources: e, webSearchSource: null };
  let n = new Set(
      t.viewedLinks.flatMap((e) => {
        let t = O(e.url);
        return t == null ? [] : [t];
      }),
    ),
    r = e.filter(
      (e) =>
        !(
          e.provider == null &&
          e.activities.length === 1 &&
          e.activities[0] === `read` &&
          n.has(e.key)
        ),
    ),
    i = new Set(r.map((e) => e.key)),
    a = {
      ...t,
      viewedLinks: t.viewedLinks.filter((e) => {
        let t = O(e.url);
        return t == null || !i.has(t);
      }),
    };
  return {
    externalSources: r,
    webSearchSource: a.queryCount === 0 && a.viewedLinks.length === 0 ? null : a,
  };
}
function z(e, n, r) {
  let i = N(e.server),
    a = i === `computer-use` ? D : null;
  if (n != null)
    return {
      id: a ?? n.id,
      name: n.name,
      pluginDisplayNames: n.pluginDisplayNames ?? [],
      logoUrl: n.logoUrl,
      logoUrlDark: n.logoUrlDark,
      activities: [],
      trustedAnalyticsAppName: j(n),
    };
  let o = r.get(i);
  return {
    id: a ?? e.pluginId ?? `mcp-server:${e.server}`,
    name: o?.name ?? t(e.server),
    pluginDisplayNames: [],
    logoUrl: o?.logoUrl ?? null,
    logoUrlDark: o?.logoUrlDark ?? null,
    activities: [],
  };
}
var B = e(() => {
  (r(), x(), A(), c(), f(), g(), a(), v(), T(), C(), P(), o(), S(), l(), k());
});
export { B as a, R as i, I as n, L as r, F as t };
//# sourceMappingURL=local-conversation-summary-panel-sources-model-aebd81465a06.js.map
