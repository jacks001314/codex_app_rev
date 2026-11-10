import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  BLt as t,
  HLt as n,
  MUt as r,
  NUt as i,
  RLt as a,
  ULt as o,
  VLt as s,
  _Vt as c,
  c5t as l,
  gVt as u,
  gkt as d,
  hkt as f,
  o5t as p,
  vVt as m,
  yVt as h,
  zLt as g,
} from "./app-initial-bcc2ff475eb6.js";
import { C as _, D as v, M as y, d as b, t as ee } from "./zod-d9fcb1c39dba.js";
import { na as x, pl as S, t as C } from "./src-996ff3571e1f.js";
import { n as w, t as T } from "./webmcp-tool-calls-9d2f2272479b.js";
function E(e) {
  return O(e)?.identity ?? null;
}
function D(e) {
  return O(e)?.getResourceKey(e) ?? null;
}
function O(e) {
  return k.find((t) => t.matches(e)) ?? null;
}
function te(e) {
  let t = e.pathname.match(/^\/(document|spreadsheets|presentation)\/d\/(?:e\/)?([^/]+)/u);
  if (
    [`docs.google.com`, `sheets.google.com`, `slides.google.com`].includes(e.hostname) &&
    t != null
  )
    return `google:${t[1] === `spreadsheets` ? `spreadsheet` : t[1]}:${t[2]}`;
  if (e.hostname !== `drive.google.com`) return null;
  let n =
    e.pathname.match(/^\/(?:file\/d|drive\/folders)\/([^/]+)/u)?.[1] ?? e.searchParams.get(`id`);
  return n == null || n.length === 0 ? null : `google:drive:${n}`;
}
function ne(e) {
  let t = Array.from(e.pathname.matchAll(/[0-9a-f]{32}|[0-9a-f]{8}-[0-9a-f-]{27}/giu)).at(-1)?.[0];
  return t == null ? null : `notion:${t.replaceAll(`-`, ``).toLowerCase()}`;
}
function re(e) {
  let t = e.pathname.match(/^\/([^/]+)\/(issue|project|document)\/([^/]+)/u);
  return t == null ? null : `linear:${t[1]?.toLowerCase()}:${t[2]}:${t[3]?.toLowerCase()}`;
}
function ie(e) {
  let t = e.pathname.match(/^\/(?:board|design|file|make|proto|slides)\/([^/]+)/u);
  return t?.[1] == null ? null : `figma:${t[1]}`;
}
var k,
  ae = e(() => {
    k = [
      {
        identity: { id: `google-drive`, name: `Google Drive` },
        matches: (e) =>
          [
            `docs.google.com`,
            `drive.google.com`,
            `sheets.google.com`,
            `slides.google.com`,
          ].includes(e.hostname),
        getResourceKey: te,
      },
      {
        identity: { id: `notion`, name: `Notion` },
        matches: (e) =>
          e.hostname === `notion.so` ||
          e.hostname.endsWith(`.notion.so`) ||
          e.hostname === `app.notion.com`,
        getResourceKey: ne,
      },
      {
        identity: { id: `linear`, name: `Linear` },
        matches: (e) => e.hostname === `linear.app`,
        getResourceKey: re,
      },
      {
        identity: { id: `figma`, name: `Figma` },
        matches: (e) => e.hostname === `figma.com` || e.hostname.endsWith(`.figma.com`),
        getResourceKey: ie,
      },
      {
        identity: { id: `github`, name: `GitHub` },
        matches: (e) => e.hostname === `github.com` || e.hostname.endsWith(`.github.com`),
        getResourceKey: () => null,
      },
    ];
  });
function oe(e) {
  let t = ce(e);
  if (t != null) return [t];
  let n = se(e);
  if (n != null) return [n];
  let r = le(e);
  return r == null ? A(e) : [r];
}
function se(e) {
  if (!j(e.tool).endsWith(`figma-create-new-file`)) return null;
  for (let t of M(e))
    try {
      let e = I.safeParse(JSON.parse(t));
      if (e.success) {
        let t = e.data.message?.match(/^File\s+"(.+)"\s+created successfully\.?$/u)?.[1]?.trim();
        return {
          activity: `created`,
          providerResourceId: e.data.file_key,
          title: t || null,
          url: e.data.file_url,
        };
      }
    } catch {
      continue;
    }
  return null;
}
function ce(e) {
  if (!s(e)) return null;
  let t = g(e.tool),
    r = a(t);
  if (r === `unknown` || t === `delete_file`) return null;
  let i = n(e.result?.structuredContent),
    o = i?.urls[0];
  return i == null || o == null
    ? null
    : {
        activity: r === `read` ? `read` : L.has(t) ? `created` : `updated`,
        mimeType: i.mimeType ?? void 0,
        title: i.title,
        url: o,
      };
}
function le(e) {
  if (j(e.tool) !== `notion-fetch`) return null;
  for (let t of M(e))
    try {
      let e = P.safeParse(JSON.parse(t));
      if (e.success) return { activity: `read`, title: e.data.title, url: e.data.url };
    } catch {
      continue;
    }
  return null;
}
function A(e) {
  if (!j(e.tool).endsWith(`notion-create-pages`)) return [];
  for (let t of M(e))
    try {
      let e = F.safeParse(JSON.parse(t));
      if (e.success)
        return e.data.pages.map((e) => ({
          activity: `created`,
          providerResourceId: e.id,
          title: e.properties.title,
          url: e.url,
        }));
    } catch {
      continue;
    }
  return [];
}
function j(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/gu, `-`);
}
function M(e) {
  return (e.result?.content ?? []).flatMap((e) => {
    let t = N.safeParse(e);
    return t.success ? [t.data.text] : [];
  });
}
var N,
  P,
  F,
  I,
  L,
  R = e(() => {
    (ee(),
      o(),
      t(),
      (N = v({ type: _(`text`), text: y() }).loose()),
      (P = v({ metadata: v({ type: _(`page`) }).loose(), title: y(), url: y() }).loose()),
      (F = v({
        pages: b(v({ id: y(), url: y(), properties: v({ title: y() }).loose() }).loose()),
      }).loose()),
      (I = v({ file_key: y(), file_url: y(), message: y().optional() }).loose()),
      (L = new Set([
        `copy_file`,
        `create_file`,
        `create_folder`,
        `create_presentation_from_template`,
        `duplicate_sheet_in_new_spreadsheet`,
        `import_document`,
        `import_presentation`,
        `import_spreadsheet`,
      ])));
  });
function z(e, t = [], n = !1, r) {
  let i = [],
    a = (e, t) => {
      let n = i.filter((t) => e.aliases.some((e) => t.aliases.has(e))),
        r = n[0];
      if (r == null) {
        i.push({
          key: e.key,
          aliases: new Set(e.aliases),
          url: e.url,
          title: e.title,
          titlePriority: e.titlePriority,
          mimeType: e.mimeType,
          activities: new Set(e.activities),
          activitiesByTurn: new Map([[t, new Set(e.activities)]]),
          provider: e.provider,
          providerPriority: e.providerPriority,
          openInitiator: e.openInitiator,
          openInitiatorPriority: e.openInitiatorPriority,
        });
        return;
      }
      for (let e of n.slice(1)) {
        for (let t of e.aliases) r.aliases.add(t);
        for (let t of e.activities) r.activities.add(t);
        (de(r, e), G(r, e), i.splice(i.indexOf(e), 1));
      }
      for (let t of e.aliases) r.aliases.add(t);
      for (let t of e.activities) r.activities.add(t);
      (K(r, t, e.activities), G(r, e));
    };
  for (let i = e.length - 1; i >= 0; --i) {
    let o = e[i],
      s = (e) => {
        a(e, i);
      },
      c = f(o.items);
    for (let e = c.length - 1; e >= 0; --e) {
      let i = c[e];
      if (i.type === `userMessage`) U(i.content, s, n, r);
      else if (i.type === `steeringUserMessage`) U(i.input, s, n, r);
      else if (
        i.type === `webSearch` &&
        (i.action?.type === `openPage` || i.action?.type === `findInPage`) &&
        i.action.url != null
      ) {
        let e = q({ activities: [`read`], url: i.action.url });
        e != null && s(e);
      } else if (
        i.type === `mcpToolCall` &&
        i.status === `completed` &&
        i.error == null &&
        i.result != null
      ) {
        let e = i.result._meta == null ? null : x(i.result._meta);
        if (e == null || e.status === `absent`) {
          let e = oe(i);
          if (e.length === 0) continue;
          let n = X(i, t);
          for (let t of e) {
            let e = q({
              activities: [t.activity],
              mimeType: t.mimeType,
              provider: n,
              providerResourceId: t.providerResourceId,
              providerScope: i.pluginId ?? n.id,
              title: t.title,
              titlePriority: 2,
              url: t.url,
            });
            e != null && s(e);
          }
          continue;
        }
        if (e.status === `invalid` || e.resources.length === 0) continue;
        let n = X(i, t);
        for (let t of e.resources) {
          let e = q({
            activities: t.activities,
            mimeType: t.mimeType,
            provider: n,
            providerResourceId: t.id,
            providerScope: i.pluginId ?? n.id,
            title: t.title,
            titlePriority: 2,
            url: t.url,
          });
          e != null && s(e);
        }
      }
    }
    U(o.params.input, s, n, r);
  }
  return i.map((e) => ({
    key: e.key,
    url: e.url,
    title: e.title,
    mimeType: e.mimeType,
    activities: Z.filter((t) => e.activities.has(t)),
    isSource: fe(e),
    provider: e.provider,
    openInitiator: e.openInitiator,
  }));
}
function B(e) {
  return e.isSource;
}
function V(e) {
  return e.activities.includes(`created`) || e.activities.includes(`updated`);
}
function H(e) {
  let t = J(e);
  return t == null ? null : (D(t) ?? `url:${Y(t)}`);
}
function U(e, t, n, r) {
  for (let i of e) {
    if (i.type !== `text`) continue;
    let e = r?.get(i);
    e ?? ((e = W(i.text)), r?.set(i, e));
    for (let r of e) {
      let e = q({
        activities: [`provided`],
        title: r.label,
        titlePriority: r.label == null ? 0 : 1,
        url: r.url,
        includePages: n,
      });
      e != null && t(e);
    }
  }
}
function W(e) {
  if (!Q.test(e)) return [];
  let t = [];
  return (
    p(i(e, void 0), (e) => {
      if (!ue(e)) return;
      let n = e.text.trim();
      t.push({ label: n.length === 0 || n === e.href ? null : n, url: e.href });
    }),
    t
  );
}
function ue(e) {
  return e.type === `link`;
}
function G(e, t) {
  (t.titlePriority > e.titlePriority && ((e.title = t.title), (e.titlePriority = t.titlePriority)),
    e.mimeType == null && t.mimeType != null && (e.mimeType = t.mimeType),
    t.providerPriority > e.providerPriority &&
      ((e.provider = t.provider), (e.providerPriority = t.providerPriority)),
    t.openInitiatorPriority > e.openInitiatorPriority &&
      ((e.openInitiator = t.openInitiator), (e.openInitiatorPriority = t.openInitiatorPriority)));
}
function K(e, t, n) {
  let r = e.activitiesByTurn.get(t) ?? new Set();
  for (let e of n) r.add(e);
  e.activitiesByTurn.set(t, r);
}
function de(e, t) {
  for (let [n, r] of t.activitiesByTurn) K(e, n, r);
}
function fe(e) {
  for (let t of e.activitiesByTurn.values())
    if (t.has(`provided`) || (t.has(`read`) && !t.has(`created`))) return !0;
  return !1;
}
function q({
  activities: e,
  mimeType: t,
  provider: n = null,
  providerResourceId: r,
  providerScope: i,
  title: a,
  titlePriority: o = 0,
  url: s,
  includePages: c = !1,
}) {
  let l = J(s);
  if (l == null) return null;
  let u = `url:${Y(l)}`,
    d = D(l) ?? (r == null || i == null ? u : `provider:${i}:${r}`),
    f = [d, u];
  r != null && i != null && d !== `provider:${i}:${r}` && f.push(`provider:${i}:${r}`);
  let p = n ?? me(l),
    m = a?.trim();
  return {
    key: d,
    aliases: f,
    url: l.href,
    title: m || pe(l),
    titlePriority: m == null || m.length === 0 ? 0 : o,
    mimeType: t?.trim() || null,
    activities: e,
    provider: p,
    providerPriority: n == null ? (p == null ? 0 : 1) : 2,
    openInitiator: n == null ? `markdown_link_click` : `mcp_app_resource`,
    openInitiatorPriority: n == null ? 1 : 2,
  };
}
function J(e) {
  try {
    let t = new URL(e);
    return (t.protocol !== `http:` && t.protocol !== `https:`) ||
      t.username !== `` ||
      t.password !== ``
      ? null
      : t;
  } catch {
    return null;
  }
}
function Y(e) {
  let t = new URL(e);
  return (
    (t.hash = ``), t.pathname.length > 1 && (t.pathname = t.pathname.replace(/\/$/u, ``)), t.href
  );
}
function pe(e) {
  return `${e.host.replace(/^www\./u, ``)}${e.pathname === `/` ? `` : e.pathname}`;
}
function me(e) {
  let t = E(e);
  return t == null ? null : { ...t, pluginDisplayNames: [], logoUrl: null, logoUrlDark: null };
}
function X(e, t) {
  let n = u({
    appContext: e.appContext,
    apps: t,
    functionName: `${e.server}__${e.tool}`,
    serverName: e.server,
    toolName: e.tool,
  });
  return n == null
    ? {
        id: e.appContext?.connectorId ?? e.pluginId ?? `mcp-server:${e.server}`,
        name: e.appContext?.appName ?? e.appContext?.connectorId ?? m(e.server),
        pluginDisplayNames: [],
        logoUrl: null,
        logoUrlDark: null,
      }
    : {
        id: n.id,
        name: n.name,
        pluginDisplayNames: n.pluginDisplayNames ?? [],
        logoUrl: n.logoUrl,
        logoUrlDark: n.logoUrlDark,
      };
}
var Z,
  Q,
  he = e(() => {
    (l(),
      C(),
      d(),
      c(),
      r(),
      h(),
      ae(),
      R(),
      (Z = [`provided`, `read`, `created`, `updated`]),
      (Q = /h\t*t\t*t\t*p|www\.|page:\/\//iu));
  });
function ge(e) {
  let t = [];
  for (let n = e.length - 1; n >= 0; --n) {
    let r = f(e[n]?.items ?? []);
    for (let e = r.length - 1; e >= 0; --e) {
      let n = r[e];
      n?.type !== `mcpToolCall` ||
        n.status === `inProgress` ||
        !S(n.server) ||
        t.push(...T(n.result?._meta).slice().reverse());
    }
  }
  return t;
}
function $(e) {
  let t = new Map();
  for (let n of e) {
    let e = t.get(n.name);
    e == null ? t.set(n.name, { calls: [n], name: n.name }) : e.calls.push(n);
  }
  return Array.from(t.values());
}
function _e(e) {
  try {
    return new URL(e).hostname || void 0;
  } catch {
    return;
  }
}
var ve = e(() => {
  (C(), d(), w());
});
export { H as a, V as c, ve as i, B as l, ge as n, z as o, $ as r, he as s, _e as t };
//# sourceMappingURL=local-conversation-webmcp-tools-model-ece339cef129.js.map
