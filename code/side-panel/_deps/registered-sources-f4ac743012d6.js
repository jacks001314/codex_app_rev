import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Amn as n,
  CVt as r,
  Cit as i,
  Cpn as a,
  DXt as o,
  Dqt as s,
  Mwt as c,
  N3t as l,
  O3t as u,
  OXt as d,
  SVt as f,
  Spn as p,
  Xdt as m,
  aL as h,
  cL as g,
  d9 as _,
  eut as v,
  hYt as y,
  hmn as b,
  kmn as x,
  kqt as ee,
  mYt as te,
  oL as S,
  rTt as C,
  s6t as w,
  sL as T,
  xVt as E,
  xit as D,
  xlt as O,
  y9 as k,
} from "./app-initial-f094ef01c64d.js";
import {
  i as A,
  l as j,
  n as M,
  o as N,
  s as P,
  t as F,
} from "./local-conversation-webmcp-tools-model-40d1a7153ca0.js";
import { n as I, t as ne } from "./is-available-f419fd226def.js";
import {
  a as L,
  i as R,
  n as z,
  r as B,
  t as V,
} from "./local-conversation-summary-panel-sources-model-aebd81465a06.js";
function H(e) {
  let t = (0, K.c)(12),
    { sources: n, title: r, totalCount: i } = e;
  if (n.length === 0) return null;
  let o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, J.jsx)(v, {})), (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === i
    ? (s = t[2])
    : ((s =
        i == null
          ? null
          : (0, J.jsx)(a, {
              id: `tabThumbnail.localSources.count`,
              defaultMessage: `{count, plural, one {# source} other {# sources}}`,
              description: `Known total number of sources in a Local Sources tab thumbnail`,
              values: { count: i },
            })),
      (t[1] = i),
      (t[2] = s));
  let c;
  if (t[3] !== n || t[4] !== i) {
    let e;
    (t[6] === i
      ? (e = t[7])
      : ((e = (e) => ({
          kind: `block`,
          content: (0, J.jsx)(U, { hasCompleteCounts: i != null, source: e }),
        })),
        (t[6] = i),
        (t[7] = e)),
      (c = n.slice(0, 3).map(e)),
      (t[3] = n),
      (t[4] = i),
      (t[5] = c));
  } else c = t[5];
  let l;
  return (
    t[8] !== s || t[9] !== c || t[10] !== r
      ? ((l = (0, J.jsx)(T, { icon: o, title: r, subtitle: s, sections: c })),
        (t[8] = s),
        (t[9] = c),
        (t[10] = r),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function U(e) {
  let t = (0, K.c)(25),
    { hasCompleteCounts: n, source: r } = e,
    i,
    o,
    s;
  bb0: switch (r.kind) {
    case `external`: {
      let e;
      (t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(v, { className: `text-codex-description` })), (t[0] = e))
        : (e = t[0]),
        (i = e),
        (o = r.label));
      let n;
      (t[1] === r.activity
        ? (n = t[2])
        : ((n = (0, J.jsx)(W, { activity: r.activity })), (t[1] = r.activity), (t[2] = n)),
        (s = n));
      break bb0;
    }
    case `file`: {
      let e;
      (t[3] === r.path
        ? (e = t[4])
        : ((e = (0, q.createElement)(D(r.path), { className: `icon-sm text-codex-description` })),
          (t[3] = r.path),
          (t[4] = e)),
        (i = e),
        (o = r.label));
      let n;
      (t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, J.jsx)(a, {
            id: `tabThumbnail.localSources.fileAttached`,
            defaultMessage: `Attached`,
            description: `Compact usage label for a file attached to a conversation in a Local Sources tab thumbnail`,
          })),
          (t[5] = n))
        : (n = t[5]),
        (s = n));
      break bb0;
    }
    case `tool`: {
      let e;
      (t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(O, { className: `text-codex-description` })), (t[6] = e))
        : (e = t[6]),
        (i = e),
        (o = r.label),
        (s = r.activityLabel));
      break bb0;
    }
    case `web`: {
      let e;
      (t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(v, { className: `text-codex-description` })), (t[7] = e))
        : (e = t[7]),
        (i = e));
      let c;
      (t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((c = (0, J.jsx)(a, {
            id: `codex.localConversation.sources.webSearch`,
            defaultMessage: `Web search`,
            description: `Label for web search in the thread summary side panel sources section`,
          })),
          (t[8] = c))
        : (c = t[8]),
        (o = c));
      let l;
      (t[9] !== n || t[10] !== r.pageCount || t[11] !== r.searchCount
        ? ((l = n
            ? (0, J.jsx)(G, { pageCount: r.pageCount, searchCount: r.searchCount })
            : (0, J.jsx)(a, {
                id: `tabThumbnail.localSources.searched`,
                defaultMessage: `Searched`,
                description: `Compact usage label for incomplete cached Web search activity in a Local Sources tab thumbnail`,
              })),
          (t[9] = n),
          (t[10] = r.pageCount),
          (t[11] = r.searchCount),
          (t[12] = l))
        : (l = t[12]),
        (s = l));
      break bb0;
    }
    case `webmcp`: {
      let e;
      (t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(v, { className: `text-codex-description` })), (t[13] = e))
        : (e = t[13]),
        (i = e),
        (o = r.label));
      let c;
      (t[14] !== n || t[15] !== r.callCount
        ? ((c = n
            ? (0, J.jsx)(a, {
                id: `tabThumbnail.localSources.webMcpCalls`,
                defaultMessage: `{count, plural, one {# call} other {# calls}}`,
                description: `Known number of WebMCP calls for one hostname in a Local Sources tab thumbnail`,
                values: { count: r.callCount },
              })
            : (0, J.jsx)(a, {
                id: `tabThumbnail.localSources.used`,
                defaultMessage: `Used`,
                description: `Compact usage label for incomplete cached WebMCP activity in a Local Sources tab thumbnail`,
              })),
          (t[14] = n),
          (t[15] = r.callCount),
          (t[16] = c))
        : (c = t[16]),
        (s = c));
    }
  }
  let c;
  t[17] === o
    ? (c = t[18])
    : ((c = (0, J.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: o })),
      (t[17] = o),
      (t[18] = c));
  let l;
  t[19] === s
    ? (l = t[20])
    : ((l =
        s == null
          ? null
          : (0, J.jsx)(`span`, {
              className: `shrink-0 text-xs text-codex-description`,
              children: s,
            })),
      (t[19] = s),
      (t[20] = l));
  let u;
  return (
    t[21] !== i || t[22] !== c || t[23] !== l
      ? ((u = (0, J.jsxs)(`div`, {
          className: `flex min-w-0 items-center gap-1.5 text-sm leading-5`,
          children: [i, c, l],
        })),
        (t[21] = i),
        (t[22] = c),
        (t[23] = l),
        (t[24] = u))
      : (u = t[24]),
    u
  );
}
function W(e) {
  let t = (0, K.c)(4),
    { activity: n } = e;
  switch (n) {
    case `created`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(a, {
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
          ? ((e = (0, J.jsx)(a, {
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
          ? ((e = (0, J.jsx)(a, {
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
          ? ((e = (0, J.jsx)(a, {
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
function G(e) {
  let t = (0, K.c)(4),
    { pageCount: n, searchCount: r } = e;
  if (r > 0) {
    let e;
    return (
      t[0] === r
        ? (e = t[1])
        : ((e = (0, J.jsx)(a, {
            id: `tabThumbnail.localSources.webSearches`,
            defaultMessage: `{count, plural, one {# search} other {# searches}}`,
            description: `Known search count for Web search in a Local Sources tab thumbnail`,
            values: { count: r },
          })),
          (t[0] = r),
          (t[1] = e)),
      e
    );
  }
  if (n > 0) {
    let e;
    return (
      t[2] === n
        ? (e = t[3])
        : ((e = (0, J.jsx)(a, {
            id: `tabThumbnail.localSources.webPages`,
            defaultMessage: `{count, plural, one {# page} other {# pages}}`,
            description: `Known opened-page count for Web search in a Local Sources tab thumbnail`,
            values: { count: n },
          })),
          (t[2] = n),
          (t[3] = e)),
      e
    );
  }
  return null;
}
var K,
  q,
  J,
  Y = e(() => {
    ((K = x()), (q = t(n(), 1)), p(), g(), m(), i(), (J = b()));
  });
function X(e) {
  let t = (0, Z.c)(6),
    { conversationId: n, hostId: r, title: i } = e,
    a;
  t[0] !== n || t[1] !== r
    ? ((a = { conversationId: n, hostId: r }), (t[0] = n), (t[1] = r), (t[2] = a))
    : (a = t[2]);
  let o = l($, a),
    s;
  return (
    t[3] !== o || t[4] !== i
      ? ((s = o == null ? null : (0, Q.jsx)(H, { title: i, ...o })),
        (t[3] = o),
        (t[4] = i),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
var Z, Q, $;
e(() => {
  ((Z = x()),
    u(),
    C(),
    f(),
    S(),
    ne(),
    o(),
    k(),
    s(),
    te(),
    P(),
    L(),
    A(),
    Y(),
    (Q = b()),
    ($ = w(h, ({ conversationId: e, hostId: t }, { scope: n }) => {
      let i = n.get(c, t)?.getConversation(e);
      if (i == null) return null;
      let a = E(i),
        o = n.query.getData(_, t),
        { externalSources: s, webSearchSource: l } = R(N(a, o ?? [], !1).filter(j), B(a)),
        u = z(
          a,
          o ?? [],
          n.get(d),
          void 0,
          n.query.getData(ee, t),
          new Set(s.flatMap((e) => (e.provider == null ? [] : [e.provider.id]))),
          !1,
        ),
        f = new Map();
      if (I(n.get(y, `1256703444`)))
        for (let e of M(a))
          e.sourceHostname != null && f.set(e.sourceHostname, (f.get(e.sourceHostname) ?? 0) + 1);
      for (let e of s) {
        let t = F(e.url);
        t != null && e.title === t && f.delete(t);
      }
      let p = [
        ...V(a).map((e) => ({ kind: `file`, label: e.label, path: e.fsPath || e.path || e.label })),
        ...s.map((e) => ({
          kind: `external`,
          activity: e.activities.at(-1) ?? null,
          label: e.title,
        })),
        ...Array.from(f, ([e, t]) => ({ kind: `webmcp`, callCount: t, label: e })),
        ...u.map((e) => ({
          kind: `tool`,
          activityLabel: e.activities[0]?.label ?? null,
          label: e.name.trim() || e.pluginDisplayNames.join(`, `),
        })),
        ...(l == null
          ? []
          : [{ kind: `web`, pageCount: l.viewedLinks.length, searchCount: l.queryCount }]),
      ];
      return { sources: p, totalCount: o != null && r(i) ? p.length : null };
    })));
})();
export { X as RegisteredLocalSourcesThumbnail };
//# sourceMappingURL=registered-sources-f4ac743012d6.js.map
