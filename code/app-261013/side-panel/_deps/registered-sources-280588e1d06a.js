import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $V as t,
  IDt as n,
  Pxt as r,
  TJ as i,
  aSt as a,
  dk as o,
  jDt as s,
  lk as c,
  vzt as l,
  xMt as u,
  xU as d,
  yzt as f,
  zxt as p,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bar as m,
  Ear as h,
  Ggr as g,
  IC as _,
  Kgr as v,
  LC as y,
  Mtr as b,
  Ntr as x,
  Ptr as ee,
  Z1n as te,
  _z as S,
  a0n as C,
  aIr as w,
  bI as T,
  cyn as E,
  fvr as D,
  gz as O,
  lyn as k,
  oIr as A,
  wvr as j,
  yI as M,
  yvr as N,
} from "./app-initial-5851df3f6cb1.js";
import { i as P, n as F, t as I } from "./local-conversation-webmcp-tools-model-a5b27ecc68d1.js";
import {
  a as ne,
  i as L,
  n as R,
  r as z,
  t as B,
} from "./local-conversation-summary-panel-sources-model-a2fb0c4f9590.js";
function V(e) {
  let t = (0, G.c)(12),
    { sources: r, title: i, totalCount: a } = e;
  if (r.length === 0) return null;
  let o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = (0, q.jsx)(d, {})), (t[0] = o)) : (o = t[0]);
  let s;
  t[1] === a
    ? (s = t[2])
    : ((s =
        a == null
          ? null
          : (0, q.jsx)(n, {
              id: `tabThumbnail.localSources.count`,
              defaultMessage: `{count, plural, one {# source} other {# sources}}`,
              description: `Known total number of sources in a Local Sources tab thumbnail`,
              values: { count: a },
            })),
      (t[1] = a),
      (t[2] = s));
  let c;
  if (t[3] !== r || t[4] !== a) {
    let e;
    (t[6] === a
      ? (e = t[7])
      : ((e = (e) => ({
          kind: `block`,
          content: (0, q.jsx)(H, { hasCompleteCounts: a != null, source: e }),
        })),
        (t[6] = a),
        (t[7] = e)),
      (c = r.slice(0, 5).map(e)),
      (t[3] = r),
      (t[4] = a),
      (t[5] = c));
  } else c = t[5];
  let l;
  return (
    t[8] !== s || t[9] !== c || t[10] !== i
      ? ((l = (0, q.jsx)(O, { icon: o, title: i, subtitle: s, sections: c })),
        (t[8] = s),
        (t[9] = c),
        (t[10] = i),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function H(e) {
  let r = (0, G.c)(25),
    { hasCompleteCounts: i, source: a } = e,
    o,
    s,
    l;
  bb0: switch (a.kind) {
    case `external`: {
      let e;
      (r[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(d, { className: `text-codex-description` })), (r[0] = e))
        : (e = r[0]),
        (o = e),
        (s = a.label));
      let t;
      (r[1] === a.activity
        ? (t = r[2])
        : ((t = (0, q.jsx)(U, { activity: a.activity })), (r[1] = a.activity), (r[2] = t)),
        (l = t));
      break bb0;
    }
    case `file`: {
      let e;
      (r[3] === a.path
        ? (e = r[4])
        : ((e = (0, K.createElement)(c(a.path), { className: `icon-sm text-codex-description` })),
          (r[3] = a.path),
          (r[4] = e)),
        (o = e),
        (s = a.label));
      let t;
      (r[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, q.jsx)(n, {
            id: `tabThumbnail.localSources.fileAttached`,
            defaultMessage: `Attached`,
            description: `Compact usage label for a file attached to a conversation in a Local Sources tab thumbnail`,
          })),
          (r[5] = t))
        : (t = r[5]),
        (l = t));
      break bb0;
    }
    case `tool`: {
      let e;
      (r[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(t, { className: `text-codex-description` })), (r[6] = e))
        : (e = r[6]),
        (o = e),
        (s = a.label),
        (l = a.activityLabel));
      break bb0;
    }
    case `web`: {
      let e;
      (r[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(d, { className: `text-codex-description` })), (r[7] = e))
        : (e = r[7]),
        (o = e));
      let t;
      (r[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, q.jsx)(n, {
            id: `codex.localConversation.sources.webSearch`,
            defaultMessage: `Web search`,
            description: `Label for web search in the thread summary side panel sources section`,
          })),
          (r[8] = t))
        : (t = r[8]),
        (s = t));
      let c;
      (r[9] !== i || r[10] !== a.pageCount || r[11] !== a.searchCount
        ? ((c = i
            ? (0, q.jsx)(W, { pageCount: a.pageCount, searchCount: a.searchCount })
            : (0, q.jsx)(n, {
                id: `tabThumbnail.localSources.searched`,
                defaultMessage: `Searched`,
                description: `Compact usage label for incomplete cached Web search activity in a Local Sources tab thumbnail`,
              })),
          (r[9] = i),
          (r[10] = a.pageCount),
          (r[11] = a.searchCount),
          (r[12] = c))
        : (c = r[12]),
        (l = c));
      break bb0;
    }
    case `webmcp`: {
      let e;
      (r[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(d, { className: `text-codex-description` })), (r[13] = e))
        : (e = r[13]),
        (o = e),
        (s = a.label));
      let t;
      (r[14] !== i || r[15] !== a.callCount
        ? ((t = i
            ? (0, q.jsx)(n, {
                id: `tabThumbnail.localSources.webMcpCalls`,
                defaultMessage: `{count, plural, one {# call} other {# calls}}`,
                description: `Known number of WebMCP calls for one hostname in a Local Sources tab thumbnail`,
                values: { count: a.callCount },
              })
            : (0, q.jsx)(n, {
                id: `tabThumbnail.localSources.used`,
                defaultMessage: `Used`,
                description: `Compact usage label for incomplete cached WebMCP activity in a Local Sources tab thumbnail`,
              })),
          (r[14] = i),
          (r[15] = a.callCount),
          (r[16] = t))
        : (t = r[16]),
        (l = t));
    }
  }
  let u;
  r[17] === s
    ? (u = r[18])
    : ((u = (0, q.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: s })),
      (r[17] = s),
      (r[18] = u));
  let f;
  r[19] === l
    ? (f = r[20])
    : ((f =
        l == null
          ? null
          : (0, q.jsx)(`span`, { className: `shrink-0 text-xs text-codex-description`, children: l })),
      (r[19] = l),
      (r[20] = f));
  let p;
  return (
    r[21] !== o || r[22] !== u || r[23] !== f
      ? ((p = (0, q.jsxs)(`div`, {
          className: `flex min-w-0 items-center gap-1.5 text-sm leading-5`,
          children: [o, u, f],
        })),
        (r[21] = o),
        (r[22] = u),
        (r[23] = f),
        (r[24] = p))
      : (p = r[24]),
    p
  );
}
function U(e) {
  let t = (0, G.c)(4),
    { activity: r } = e;
  switch (r) {
    case `created`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(n, {
              id: `tabThumbnail.localSources.created`,
              defaultMessage: `Created`,
              description: `Compact usage label for an external source created during a conversation`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `provided`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(n, {
              id: `tabThumbnail.localSources.provided`,
              defaultMessage: `Provided`,
              description: `Compact usage label for an external source provided in a conversation`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `read`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(n, {
              id: `tabThumbnail.localSources.read`,
              defaultMessage: `Read`,
              description: `Compact usage label for an external source read during a conversation`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `updated`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(n, {
              id: `tabThumbnail.localSources.updated`,
              defaultMessage: `Updated`,
              description: `Compact usage label for an external source updated during a conversation`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case null:
      return null;
  }
}
function W(e) {
  let t = (0, G.c)(4),
    { pageCount: r, searchCount: i } = e;
  if (i > 0) {
    let e;
    return (
      t[0] === i
        ? (e = t[1])
        : ((e = (0, q.jsx)(n, {
            id: `tabThumbnail.localSources.webSearches`,
            defaultMessage: `{count, plural, one {# search} other {# searches}}`,
            description: `Known search count for Web search in a Local Sources tab thumbnail`,
            values: { count: i },
          })),
          (t[0] = i),
          (t[1] = e)),
      e
    );
  }
  if (r > 0) {
    let e;
    return (
      t[2] === r
        ? (e = t[3])
        : ((e = (0, q.jsx)(n, {
            id: `tabThumbnail.localSources.webPages`,
            defaultMessage: `{count, plural, one {# page} other {# pages}}`,
            description: `Known opened-page count for Web search in a Local Sources tab thumbnail`,
            values: { count: r },
          })),
          (t[2] = r),
          (t[3] = e)),
      e
    );
  }
  return null;
}
var G, K, q;
function J() {
  return (J = e(() => {
    ((G = l()), (K = f()), s(), S(), i(), o(), (q = u()));
  }))();
}
function Y(e) {
  let t = (0, X.c)(6),
    { conversationId: n, hostId: r, title: i } = e,
    a;
  t[0] !== n || t[1] !== r
    ? ((a = { conversationId: n, hostId: r }), (t[0] = n), (t[1] = r), (t[2] = a))
    : (a = t[2]);
  let o = p(Q, a),
    s;
  return (
    t[3] !== o || t[4] !== i
      ? ((s = o == null ? null : (0, Z.jsx)(V, { title: i, ...o })), (t[3] = o), (t[4] = i), (t[5] = s))
      : (s = t[5]),
    s
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = l()),
      r(),
      D(),
      k(),
      C(),
      _(),
      w(),
      h(),
      g(),
      x(),
      M(),
      ne(),
      P(),
      J(),
      (Z = u()),
      (Q = a(E, ({ conversationId: e, hostId: t }, { scope: n }) => {
        let r = { hostId: t, threadId: e },
          i = n.get(j, r);
        if (i == null) return null;
        let a = i.flatMap((e) => {
            let t = n.get(T, e);
            return t == null ? [] : [t];
          }),
          o = n.query.getData(te, t),
          s = n.get(m) === !0,
          { externalSources: c, webSearchSource: l } = L(b(a, o ?? [], s).filter(ee), z(a)),
          u = R(
            a,
            o ?? [],
            n.get(A),
            void 0,
            n.query.getData(v, t),
            new Set(c.flatMap((e) => (e.provider == null ? [] : [e.provider.id]))),
            s,
          ),
          d = new Map();
        if (n.get(y))
          for (let e of F(a))
            e.sourceHostname != null && d.set(e.sourceHostname, (d.get(e.sourceHostname) ?? 0) + 1);
        for (let e of c) {
          let t = I(e.url);
          t != null && e.title === t && d.delete(t);
        }
        let f = [
          ...B(a).map((e) => ({ kind: `file`, label: e.label, path: e.fsPath || e.path || e.label })),
          ...c.map((e) => ({ kind: `external`, activity: e.activities.at(-1) ?? null, label: e.title })),
          ...Array.from(d, ([e, t]) => ({ kind: `webmcp`, callCount: t, label: e })),
          ...u.map((e) => ({
            kind: `tool`,
            activityLabel: e.activities[0]?.label ?? null,
            label: e.name.trim() || e.pluginDisplayNames.join(`, `),
          })),
          ...(l == null ? [] : [{ kind: `web`, pageCount: l.viewedLinks.length, searchCount: l.queryCount }]),
        ];
        return { sources: f, totalCount: o != null && n.get(N, r) ? f.length : null };
      })));
  }))();
}
$();
export { Y as RegisteredLocalSourcesThumbnail };
//# sourceMappingURL=registered-sources-280588e1d06a.js.map
