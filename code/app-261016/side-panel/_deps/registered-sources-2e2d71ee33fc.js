import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  LNt as n,
  PBt as r,
  SCt as i,
  TY as a,
  Uk as o,
  Vk as s,
  XOt as c,
  YH as l,
  ZSt as u,
  _W as d,
  nCt as f,
  tkt as p,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CIr as m,
  ESr as h,
  Jbr as g,
  Olr as _,
  SIr as v,
  Ybr as y,
  _B as b,
  dw as x,
  fw as ee,
  iar as te,
  j3n as S,
  mSn as C,
  mSr as w,
  mlr as T,
  nL as E,
  nar as D,
  pSn as O,
  rL as k,
  rar as A,
  vB as j,
  xSr as M,
  z3n as N,
} from "./app-initial-ad16eaadf81f.js";
import { i as P, n as F, t as I } from "./local-conversation-webmcp-tools-model-dcbfecb89837.js";
import {
  a as ne,
  i as L,
  n as R,
  r as z,
  t as B,
} from "./local-conversation-summary-panel-sources-model-c02f64349e93.js";
function V(e) {
  let t = (0, G.c)(12),
    { sources: n, title: r, totalCount: i } = e;
  if (n.length === 0) return null;
  let a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = (0, q.jsx)(d, {})), (t[0] = a)) : (a = t[0]);
  let o;
  t[1] === i
    ? (o = t[2])
    : ((o =
        i == null
          ? null
          : (0, q.jsx)(p, {
              id: `tabThumbnail.localSources.count`,
              defaultMessage: `{count, plural, one {# source} other {# sources}}`,
              description: `Known total number of sources in a Local Sources tab thumbnail`,
              values: { count: i },
            })),
      (t[1] = i),
      (t[2] = o));
  let s;
  if (t[3] !== n || t[4] !== i) {
    let e;
    (t[6] === i
      ? (e = t[7])
      : ((e = (e) => ({
          kind: `block`,
          content: (0, q.jsx)(H, { hasCompleteCounts: i != null, source: e }),
        })),
        (t[6] = i),
        (t[7] = e)),
      (s = n.slice(0, 5).map(e)),
      (t[3] = n),
      (t[4] = i),
      (t[5] = s));
  } else s = t[5];
  let c;
  return (
    t[8] !== o || t[9] !== s || t[10] !== r
      ? ((c = (0, q.jsx)(b, { icon: a, title: r, subtitle: o, sections: s })),
        (t[8] = o),
        (t[9] = s),
        (t[10] = r),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function H(e) {
  let t = (0, G.c)(25),
    { hasCompleteCounts: n, source: r } = e,
    i,
    a,
    o;
  bb0: switch (r.kind) {
    case `external`: {
      let e;
      (t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(d, { className: `text-codex-description` })), (t[0] = e))
        : (e = t[0]),
        (i = e),
        (a = r.label));
      let n;
      (t[1] === r.activity
        ? (n = t[2])
        : ((n = (0, q.jsx)(U, { activity: r.activity })), (t[1] = r.activity), (t[2] = n)),
        (o = n));
      break bb0;
    }
    case `file`: {
      let e;
      (t[3] === r.path
        ? (e = t[4])
        : ((e = (0, K.createElement)(s(r.path), { className: `icon-sm text-codex-description` })),
          (t[3] = r.path),
          (t[4] = e)),
        (i = e),
        (a = r.label));
      let n;
      (t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, q.jsx)(p, {
            id: `tabThumbnail.localSources.fileAttached`,
            defaultMessage: `Attached`,
            description: `Compact usage label for a file attached to a conversation in a Local Sources tab thumbnail`,
          })),
          (t[5] = n))
        : (n = t[5]),
        (o = n));
      break bb0;
    }
    case `tool`: {
      let e;
      (t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(l, { className: `text-codex-description` })), (t[6] = e))
        : (e = t[6]),
        (i = e),
        (a = r.label),
        (o = r.activityLabel));
      break bb0;
    }
    case `web`: {
      let e;
      (t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(d, { className: `text-codex-description` })), (t[7] = e))
        : (e = t[7]),
        (i = e));
      let s;
      (t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((s = (0, q.jsx)(p, {
            id: `codex.localConversation.sources.webSearch`,
            defaultMessage: `Web search`,
            description: `Label for web search in the thread summary side panel sources section`,
          })),
          (t[8] = s))
        : (s = t[8]),
        (a = s));
      let c;
      (t[9] !== n || t[10] !== r.pageCount || t[11] !== r.searchCount
        ? ((c = n
            ? (0, q.jsx)(W, { pageCount: r.pageCount, searchCount: r.searchCount })
            : (0, q.jsx)(p, {
                id: `tabThumbnail.localSources.searched`,
                defaultMessage: `Searched`,
                description: `Compact usage label for incomplete cached Web search activity in a Local Sources tab thumbnail`,
              })),
          (t[9] = n),
          (t[10] = r.pageCount),
          (t[11] = r.searchCount),
          (t[12] = c))
        : (c = t[12]),
        (o = c));
      break bb0;
    }
    case `webmcp`: {
      let e;
      (t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(d, { className: `text-codex-description` })), (t[13] = e))
        : (e = t[13]),
        (i = e),
        (a = r.label));
      let s;
      (t[14] !== n || t[15] !== r.callCount
        ? ((s = n
            ? (0, q.jsx)(p, {
                id: `tabThumbnail.localSources.webMcpCalls`,
                defaultMessage: `{count, plural, one {# call} other {# calls}}`,
                description: `Known number of WebMCP calls for one hostname in a Local Sources tab thumbnail`,
                values: { count: r.callCount },
              })
            : (0, q.jsx)(p, {
                id: `tabThumbnail.localSources.used`,
                defaultMessage: `Used`,
                description: `Compact usage label for incomplete cached WebMCP activity in a Local Sources tab thumbnail`,
              })),
          (t[14] = n),
          (t[15] = r.callCount),
          (t[16] = s))
        : (s = t[16]),
        (o = s));
    }
  }
  let c;
  t[17] === a
    ? (c = t[18])
    : ((c = (0, q.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: a })),
      (t[17] = a),
      (t[18] = c));
  let u;
  t[19] === o
    ? (u = t[20])
    : ((u =
        o == null
          ? null
          : (0, q.jsx)(`span`, { className: `shrink-0 text-xs text-codex-description`, children: o })),
      (t[19] = o),
      (t[20] = u));
  let f;
  return (
    t[21] !== i || t[22] !== c || t[23] !== u
      ? ((f = (0, q.jsxs)(`div`, {
          className: `flex min-w-0 items-center gap-1.5 text-sm leading-5`,
          children: [i, c, u],
        })),
        (t[21] = i),
        (t[22] = c),
        (t[23] = u),
        (t[24] = f))
      : (f = t[24]),
    f
  );
}
function U(e) {
  let t = (0, G.c)(4),
    { activity: n } = e;
  switch (n) {
    case `created`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(p, {
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
          ? ((e = (0, q.jsx)(p, {
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
          ? ((e = (0, q.jsx)(p, {
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
          ? ((e = (0, q.jsx)(p, {
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
    { pageCount: n, searchCount: r } = e;
  if (r > 0) {
    let e;
    return (
      t[0] === r
        ? (e = t[1])
        : ((e = (0, q.jsx)(p, {
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
        : ((e = (0, q.jsx)(p, {
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
var G, K, q;
function J() {
  return (J = e(() => {
    ((G = r()), (K = t()), c(), j(), a(), o(), (q = n()));
  }))();
}
function Y(e) {
  let t = (0, X.c)(6),
    { conversationId: n, hostId: r, title: i } = e,
    a;
  t[0] !== n || t[1] !== r
    ? ((a = { conversationId: n, hostId: r }), (t[0] = n), (t[1] = r), (t[2] = a))
    : (a = t[2]);
  let o = f(Q, a),
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
    ((X = r()),
      u(),
      w(),
      C(),
      N(),
      x(),
      v(),
      T(),
      g(),
      A(),
      E(),
      ne(),
      P(),
      J(),
      (Z = n()),
      (Q = i(O, ({ conversationId: e, hostId: t }, { scope: n }) => {
        let r = { hostId: t, threadId: e },
          i = n.get(h, r);
        if (i == null) return null;
        let a = i.flatMap((e) => {
            let t = n.get(k, e);
            return t == null ? [] : [t];
          }),
          o = n.query.getData(S, t),
          s = n.get(_) === !0,
          { externalSources: c, webSearchSource: l } = L(D(a, o ?? [], s).filter(te), z(a)),
          u = R(
            a,
            o ?? [],
            n.get(m),
            void 0,
            n.query.getData(y, t),
            new Set(c.flatMap((e) => (e.provider == null ? [] : [e.provider.id]))),
            s,
          ),
          d = new Map();
        if (n.get(ee))
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
        return { sources: f, totalCount: o != null && n.get(M, r) ? f.length : null };
      })));
  }))();
}
$();
export { Y as RegisteredLocalSourcesThumbnail };
//# sourceMappingURL=registered-sources-2e2d71ee33fc.js.map
