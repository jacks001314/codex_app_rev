import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  PBt as r,
  Qst as i,
  ZSt as a,
  ast as o,
  bCt as s,
  iCt as c,
  ict as l,
  ist as u,
  nCt as d,
  qst as f,
  sct as p,
  tct as m,
  uSt as h,
  yCt as g,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Btr as _,
  Dor as v,
  ESr as y,
  Fer as b,
  Htr as x,
  OSr as S,
  Rer as C,
  bv as w,
  eTr as T,
  eer as E,
  gSr as D,
  jSr as O,
  lln as k,
  mSr as A,
  oln as j,
  sln as M,
  vv as N,
  yv as P,
} from "./app-initial-ad16eaadf81f.js";
var F;
function I() {
  return (I = e(() => {
    (l(),
      a(),
      o(),
      n(),
      (F = s(
        i,
        (e) => void 0,
        (e, { set: t }) => {
          try {
            var n = f();
            let r = u?.modelReviewComments;
            if (r == null) return;
            let i = !1,
              a,
              o = n.u(
                new m((e) => {
                  i || t(e);
                }),
              ),
              s = r.subscribe(e, o);
            return (
              s.then(
                (e) => {
                  i ? e[Symbol.dispose]() : (a = e);
                },
                () => {
                  i || t(void 0);
                },
              ),
              () => {
                ((i = !0), s[Symbol.dispose](), a?.[Symbol.dispose]());
              }
            );
          } catch (e) {
            n.e = e;
          } finally {
            n.d();
          }
        },
      )));
  }))();
}
function L({ cache: e, storedModelComments: t, turns: n, workspaceRoots: r }) {
  if (n == null || n.length === 0) return t;
  let i = new Set(t.map(T)),
    a = [...t],
    o = !1;
  for (let t of n)
    if (t.status === `completed`)
      for (let n of R(t, r, e)) {
        let e = T(n);
        i.has(e) || (i.add(e), a.push(n), (o = !0));
      }
  return o ? a : t;
}
function R(e, t, n) {
  let r = n?.get(e);
  if (r?.items === e.items && r.workspaceRoots === t) return r.comments;
  let i = [];
  for (let n of e.items)
    n.type === `agentMessage` && n.phase !== `commentary` && i.push(...x(n.text, e.params.cwd ?? null, t));
  return (n?.set(e, { comments: i, items: e.items, workspaceRoots: t }), i);
}
function z() {
  return (z = e(() => {
    (_(), v());
  }))();
}
function B(e, n, r) {
  let a = (0, U.c)(15),
    o = r === void 0 ? e : r,
    s = t(i),
    l;
  a[0] === o
    ? (l = a[1])
    : ((l = { conversationId: o, path: null, pullRequestReviewKey: null }), (a[0] = o), (a[1] = l));
  let u = d(M, l),
    f = d(F, e),
    p = c(N),
    m = d(K, n),
    h;
  if (a[2] !== p || a[3] !== f || a[4] !== m) {
    let e;
    (a[6] === p ? (e = a[7]) : ((e = (e) => !w(p, e)), (a[6] = p), (a[7] = e)),
      (h = V({ storedModelComments: f ?? W, turnModelComments: m }).filter(e)),
      (a[2] = p),
      (a[3] = f),
      (a[4] = m),
      (a[5] = h));
  } else h = a[5];
  let g = h,
    _;
  a[8] !== o || a[9] !== s
    ? ((_ = (e) => {
        k(s, { conversationId: o, path: null, pullRequestReviewKey: null }, e);
      }),
      (a[8] = o),
      (a[9] = s),
      (a[10] = _))
    : (_ = a[10]);
  let v = _,
    y;
  return (
    a[11] !== u || a[12] !== g || a[13] !== v
      ? ((y = { comments: u, modelComments: g, setComments: v }),
        (a[11] = u),
        (a[12] = g),
        (a[13] = v),
        (a[14] = y))
      : (y = a[14]),
    y
  );
}
function V({ storedModelComments: e, turnModelComments: t }) {
  if (t.length === 0) return e;
  let n = new Set(e.map(T)),
    r = [...e],
    i = !1;
  for (let e of t) {
    let t = T(e);
    n.has(t) || (n.add(t), r.push(e), (i = !0));
  }
  return i ? r : e;
}
function H(e, t) {
  return (
    e.length === t.length &&
    e.every((e, n) => {
      let r = t[n];
      return r != null && T(e) === T(r);
    })
  );
}
var U, W, G, K;
function q() {
  return (q = e(() => {
    ((U = r()),
      a(),
      p(),
      E(),
      A(),
      j(),
      I(),
      n(),
      z(),
      v(),
      P(),
      (W = []),
      (G = g(
        i,
        (e, { get: t }) => {
          let n = t(S, e);
          if (n?.status !== `completed`) return W;
          let r = (t(O, e) ?? []).flatMap((n) => {
            let r = t(D, { ...e, itemId: n });
            return r == null ? [] : [r];
          });
          return L({
            storedModelComments: W,
            turns: [{ ...n, items: r }],
            workspaceRoots: t(C, h(e.threadId)),
          });
        },
        { owner: (e) => e.threadId, isEqual: H },
      )),
      (K = g(
        i,
        (e, { get: t }) => {
          if (e == null) return W;
          let n = t(y, { hostId: t(b, e), threadId: e });
          return V({ storedModelComments: W, turnModelComments: n?.flatMap((e) => t(G, e)) ?? W });
        },
        { isEqual: H },
      )));
  }))();
}
export { B as n, q as t };
//# sourceMappingURL=use-conversation-diff-comments-4bbc633feaf1.js.map
