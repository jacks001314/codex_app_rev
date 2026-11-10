import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $i as t,
  A3t as n,
  F3t as r,
  N3t as i,
  O3t as a,
  SEt as o,
  WTt as s,
  XYt as c,
  YUt as l,
  ZYt as u,
  Zi as d,
  a3t as f,
  c6t as p,
  cMt as m,
  kmn as h,
  lMt as g,
  nWt as _,
  o3t as v,
  rTt as y,
  u6t as b,
  uMt as x,
} from "./app-initial-f094ef01c64d.js";
import { Aw as S, Dw as C, Ow as w } from "./app-primary-4c40d73a1074.js";
function T({ cache: e, storedModelComments: t, turns: n, workspaceRoots: r }) {
  if (n == null || n.length === 0) return t;
  let i = new Set(t.map(l)),
    a = [...t],
    o = !1;
  for (let t of n)
    if (t.status === `completed`)
      for (let n of E(t, r, e)) {
        let e = l(n);
        i.has(e) || (i.add(e), a.push(n), (o = !0));
      }
  return o ? a : t;
}
function E(e, n, r) {
  let i = r?.get(e);
  if (i?.items === e.items && i.workspaceRoots === n) return i.comments;
  let a = [];
  for (let r of e.items)
    r.type !== `agentMessage` ||
      r.phase === `commentary` ||
      a.push(...t(r.text, e.params.cwd ?? null, n));
  return (r?.set(e, { comments: a, items: e.items, workspaceRoots: n }), a);
}
var D = e(() => {
  (d(), _());
});
function O(e, t) {
  let a = (0, j.c)(16),
    o = n(f),
    s;
  a[0] === e
    ? (s = a[1])
    : ((s = { conversationId: e, path: null, pullRequestReviewKey: null }), (a[0] = e), (a[1] = s));
  let c = i(w, s),
    [l] = u(`diff_comments_from_model`),
    d = r(m),
    p = i(N, t),
    h;
  if (a[2] !== d || a[3] !== e || a[4] !== l || a[5] !== p) {
    let t;
    (a[7] === d ? (t = a[8]) : ((t = (e) => !x(d, e)), (a[7] = d), (a[8] = t)),
      (h = k({ storedModelComments: l?.[e] ?? M, turnModelComments: p }).filter(t)),
      (a[2] = d),
      (a[3] = e),
      (a[4] = l),
      (a[5] = p),
      (a[6] = h));
  } else h = a[6];
  let g = h,
    _;
  a[9] !== e || a[10] !== o
    ? ((_ = (t) => {
        S(o, { conversationId: e, path: null, pullRequestReviewKey: null }, t);
      }),
      (a[9] = e),
      (a[10] = o),
      (a[11] = _))
    : (_ = a[11]);
  let v = _,
    y;
  return (
    a[12] !== c || a[13] !== g || a[14] !== v
      ? ((y = { comments: c, modelComments: g, setComments: v }),
        (a[12] = c),
        (a[13] = g),
        (a[14] = v),
        (a[15] = y))
      : (y = a[15]),
    y
  );
}
function k({ storedModelComments: e, turnModelComments: t }) {
  if (t.length === 0) return e;
  let n = new Set(e.map(l)),
    r = [...e],
    i = !1;
  for (let e of t) {
    let t = l(e);
    n.has(t) || (n.add(t), r.push(e), (i = !0));
  }
  return i ? r : e;
}
function A(e, t) {
  return (
    e.length === t.length &&
    e.every((e, n) => {
      let r = t[n];
      return r != null && l(e) === l(r);
    })
  );
}
var j,
  M,
  N,
  P = e(() => {
    ((j = h()),
      a(),
      y(),
      C(),
      v(),
      c(),
      D(),
      _(),
      g(),
      (M = []),
      (N = b(f, (e) => {
        let t = new WeakMap();
        return p(
          f,
          ({ get: n }) =>
            T({ cache: t, storedModelComments: M, turns: n(o, e), workspaceRoots: n(s, e) }),
          { isEqual: A },
        );
      })));
  });
export { O as n, P as t };
//# sourceMappingURL=use-conversation-diff-comments-ab6bb05add1f.js.map
