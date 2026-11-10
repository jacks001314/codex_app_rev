import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Jbt as r,
  Pxt as i,
  Vxt as a,
  nSt as o,
  rst as s,
  vzt as c,
  wot as l,
  zxt as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as d,
  Evr as f,
  G_ as p,
  K_ as m,
  Qnr as h,
  _an as g,
  ban as _,
  dFr as v,
  fvr as y,
  i7n as b,
  kvr as x,
  mvr as S,
  n5n as C,
  o7n as w,
  q_ as T,
  rrr as E,
  uFr as D,
  v8n as O,
  van as k,
  wvr as A,
} from "./app-initial-5851df3f6cb1.js";
function j({ cache: e, storedModelComments: t, turns: n, workspaceRoots: r }) {
  if (n == null || n.length === 0) return t;
  let i = new Set(t.map(h)),
    a = [...t],
    o = !1;
  for (let t of n)
    if (t.status === `completed`)
      for (let n of M(t, r, e)) {
        let e = h(n);
        i.has(e) || (i.add(e), a.push(n), (o = !0));
      }
  return o ? a : t;
}
function M(e, t, n) {
  let r = n?.get(e);
  if (r?.items === e.items && r.workspaceRoots === t) return r.comments;
  let i = [];
  for (let n of e.items)
    n.type === `agentMessage` && n.phase !== `commentary` && i.push(...w(n.text, e.params.cwd ?? null, t));
  return (n?.set(e, { comments: i, items: e.items, workspaceRoots: t }), i);
}
function N() {
  return (N = e(() => {
    (b(), E());
  }))();
}
function P(e, r, i) {
  let o = (0, L.c)(16),
    s = i === void 0 ? e : i,
    c = n(t),
    l;
  o[0] === s
    ? (l = o[1])
    : ((l = { conversationId: s, path: null, pullRequestReviewKey: null }), (o[0] = s), (o[1] = l));
  let d = u(k, l),
    [f] = v(`diff_comments_from_model`),
    m = a(p),
    h = u(B, r),
    g;
  if (o[2] !== m || o[3] !== e || o[4] !== f || o[5] !== h) {
    let t;
    (o[7] === m ? (t = o[8]) : ((t = (e) => !T(m, e)), (o[7] = m), (o[8] = t)),
      (g = F({ storedModelComments: f?.[e] ?? R, turnModelComments: h }).filter(t)),
      (o[2] = m),
      (o[3] = e),
      (o[4] = f),
      (o[5] = h),
      (o[6] = g));
  } else g = o[6];
  let y = g,
    b;
  o[9] !== s || o[10] !== c
    ? ((b = (e) => {
        _(c, { conversationId: s, path: null, pullRequestReviewKey: null }, e);
      }),
      (o[9] = s),
      (o[10] = c),
      (o[11] = b))
    : (b = o[11]);
  let x = b,
    S;
  return (
    o[12] !== d || o[13] !== y || o[14] !== x
      ? ((S = { comments: d, modelComments: y, setComments: x }),
        (o[12] = d),
        (o[13] = y),
        (o[14] = x),
        (o[15] = S))
      : (S = o[15]),
    S
  );
}
function F({ storedModelComments: e, turnModelComments: t }) {
  if (t.length === 0) return e;
  let n = new Set(e.map(h)),
    r = [...e],
    i = !1;
  for (let e of t) {
    let t = h(e);
    n.has(t) || (n.add(t), r.push(e), (i = !0));
  }
  return i ? r : e;
}
function I(e, t) {
  return (
    e.length === t.length &&
    e.every((e, n) => {
      let r = t[n];
      return r != null && h(e) === h(r);
    })
  );
}
var L, R, z, B;
function V() {
  return (V = e(() => {
    ((L = c()),
      i(),
      s(),
      O(),
      y(),
      g(),
      l(),
      D(),
      N(),
      E(),
      m(),
      (R = []),
      (z = o(
        t,
        (e, { get: t }) => {
          let n = t(f, e);
          if (n?.status !== `completed`) return R;
          let i = (t(x, e) ?? []).flatMap((n) => {
            let r = t(S, { ...e, itemId: n });
            return r == null ? [] : [r];
          });
          return j({
            storedModelComments: R,
            turns: [{ ...n, items: i }],
            workspaceRoots: t(C, r(e.threadId)),
          });
        },
        { owner: (e) => e.threadId, isEqual: I },
      )),
      (B = o(
        t,
        (e, { get: t }) => {
          if (e == null) return R;
          let n = t(A, { hostId: t(d, e), threadId: e });
          return F({ storedModelComments: R, turnModelComments: n?.flatMap((e) => t(z, e)) ?? R });
        },
        { isEqual: I },
      )));
  }))();
}
export { P as n, V as t };
//# sourceMappingURL=use-conversation-diff-comments-4ddc9aaa442f.js.map
