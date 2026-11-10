import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Amn as n,
  CE as r,
  DE as i,
  EE as a,
  F3t as o,
  HT as s,
  O3t as c,
  OE as l,
  SE as u,
  TE as d,
  WT as f,
  _E as p,
  gE as m,
  kmn as h,
  rE as g,
  vE as _,
  wE as v,
  yE as y,
} from "./app-initial-f094ef01c64d.js";
import { n as b, r as x } from "./highlight-selectors-9d1b805d6cf4.js";
import { n as S, t as C } from "./scroll-to-match-9d10be663eba.js";
function w(e) {
  let t = (0, D.c)(5),
    { path: n, skipFindHighlight: r } = e,
    i = o(s),
    a = o(f)?.id ?? null,
    c = (0, O.useRef)(!1),
    l;
  return (
    t[0] !== i || t[1] !== a || t[2] !== n || t[3] !== r
      ? ((l = (e) => {
          let t = !r && i != null;
          (!t && !c.current) ||
            ((c.current = t),
            T({
              activeDiffResult: i,
              activeMatchId: a,
              fileDiffElement: e,
              path: n,
              skipFindHighlight: r,
            }));
        }),
        (t[0] = i),
        (t[1] = a),
        (t[2] = n),
        (t[3] = r),
        (t[4] = l))
      : (l = t[4]),
    l
  );
}
function T({
  activeDiffResult: e,
  activeMatchId: t,
  fileDiffElement: n,
  path: r,
  skipFindHighlight: a,
}) {
  if ((y(n, { includeShadowRoots: !0 }), a || e == null)) return;
  let o = b(e.matches).get(r);
  o == null ||
    o.length === 0 ||
    E({ activeMatchId: t, fileDiffElement: n, query: e.query, sourceMatches: o }) ||
    d({ target: n, query: e.query, maxMatches: o.length, includeShadowRoots: !0 }).matches.forEach(
      (e, n) => {
        let r = o[n];
        r != null && (l({ element: e, matchId: r.id }), r.id === t && i(e, !0));
      },
    );
}
function E({ activeMatchId: e, fileDiffElement: t, query: n, sourceMatches: a }) {
  if (a.some((e) => e.location.domain === `diff` && e.location.hunkId === `path`)) return !1;
  let o = new Map();
  for (let e of a) {
    if (e.location.domain !== `diff` || e.location.lineStart !== e.location.lineEnd) continue;
    let t = `${e.location.side ?? `unified`}:${e.location.lineStart}`,
      n = o.get(t) ?? { lineNumber: e.location.lineStart, side: e.location.side, matches: [] };
    (n.matches.push(e), o.set(t, n));
  }
  let s = !1,
    c = !1;
  for (let a of o.values()) {
    s = !0;
    let o = r({ container: t, lineNumber: a.lineNumber, side: a.side, includeShadowRoots: !0 });
    o != null &&
      ((c = !0),
      d({
        target: o,
        query: n,
        maxMatches: a.matches.length,
        includeShadowRoots: !1,
      }).matches.forEach((t, n) => {
        let r = a.matches[n];
        r != null && (l({ element: t, matchId: r.id }), r.id === e && i(t, !0));
      }));
  }
  return c || (s && (t.matches(`[data-line]`) || t.querySelector(`[data-line]`) != null));
}
var D,
  O,
  k = e(() => {
    ((D = h()), c(), (O = t(n(), 1)), a(), x(), g());
  });
function A({ contextId: e, getFiles: t, preserveScrollBeforeResultClear: n, scrollAdapter: r }) {
  return {
    domain: `diff`,
    contextId: e,
    preserveScrollBeforeResultClear: n,
    async search(e) {
      return e.query.trim().length === 0 ? j(e, []) : j(e, t());
    },
    async ensureVisible(t, n) {
      if (t.domain !== `diff` || t.contextId !== e) return;
      let i = r.getFileContainer(t.path),
        a = u(t);
      if ((i == null ? null : v({ container: i, matchId: a, includeShadowRoots: !0 })) == null) {
        if (
          n?.signal?.aborted ||
          (n?.signal == null
            ? await r.scrollToFile(t.path)
            : await r.scrollToFile(t.path, { signal: n.signal }),
          n?.signal?.aborted) ||
          (r.scrollToLocation != null &&
            (n?.signal == null
              ? await r.scrollToLocation(t)
              : await r.scrollToLocation(t, { signal: n.signal })),
          n?.signal?.aborted)
        )
          return;
        i = r.getFileContainer(t.path);
      }
      i != null &&
        (await S({
          container: i,
          matchId: a,
          includeShadowRoots: !0,
          scrollBehavior: `auto`,
          signal: n?.signal,
        }));
    },
  };
}
function j(e, t) {
  let n = e.query.trim();
  if (n.length === 0)
    return {
      domain: e.domain,
      contextId: e.contextId,
      query: n,
      matches: [],
      totalMatches: 0,
      isCapped: !1,
    };
  let r = [],
    i = 0,
    a = 0,
    o = !1;
  for (let s of t)
    for (let t of s.hunks) {
      let c = t.text;
      if (c.length === 0) continue;
      let { offsets: l, totalMatches: u, isCapped: d } = p(c, n, F - r.length);
      ((i += u), d && (o = !0));
      for (let { start: n, end: i } of l) {
        let o = M(t, n, i);
        ((a += 1),
          r.push({
            id: `diff:${s.path}:${t.hunkId}:${n}`,
            ordinal: a,
            location: {
              domain: `diff`,
              contextId: e.contextId,
              path: s.path,
              hunkId: t.hunkId,
              side: o.side,
              lineStart: o.lineStart,
              lineEnd: o.lineEnd,
              start: n,
              end: i,
            },
            snippet: m(c, n, i),
          }));
      }
    }
  return {
    domain: e.domain,
    contextId: e.contextId,
    query: n,
    matches: r,
    totalMatches: i,
    isCapped: o,
  };
}
function M(e, t, n) {
  let r = N(e.lineSpans, t, n);
  if (r != null) return r;
  if (e.lineMapping !== `contiguous`) return { lineStart: e.lineStart, lineEnd: e.lineEnd };
  let i = e.lineStart + P(e.text.slice(0, t));
  return { lineStart: i, lineEnd: i + P(e.text.slice(t, n)) };
}
function N(e, t, n) {
  if (e == null) return null;
  let r = e.find((e) => t >= e.start && t < e.end);
  if (r == null) return null;
  let i = Math.max(t, n - 1),
    a = e.find((e) => i >= e.start && i < e.end) ?? r;
  return {
    lineStart: r.lineStart,
    lineEnd: a.lineEnd,
    ...(r.side != null && r.side === a.side ? { side: r.side } : {}),
  };
}
function P(e) {
  let t = 0;
  for (let n of e)
    n ===
      `
` && (t += 1);
  return t;
}
var F,
  I = e(() => {
    (a(), C(), _(), (F = 250));
  });
export { w as i, I as n, k as r, A as t };
//# sourceMappingURL=diff-source-a588acc09b83.js.map
