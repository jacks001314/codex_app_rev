import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as n,
  Jbt as r,
  Qst as i,
  SCt as a,
  WNt as o,
  ZSt as s,
  iFt as c,
  sct as l,
  uSt as u,
  yCt as d,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ESr as f,
  GCr as p,
  Gar as m,
  K$r as h,
  OSr as g,
  QCr as _,
  VPn as v,
  VUt as y,
  War as b,
  Y1n as x,
  Z1n as S,
  fSr as C,
  g0n as w,
  gSr as T,
  jSr as E,
  jin as D,
  kin as O,
  lkr as k,
  m0n as A,
  mSr as j,
  n0n as M,
  q$r as N,
  qCr as P,
  vkr as F,
  x0n as I,
  zUt as L,
} from "./app-initial-ad16eaadf81f.js";
import { n as R, t as z } from "./artifact-request-progress-6476ecb599a4.js";
import { n as B, t as V } from "./generation-progress-heading-324b560bbaa7.js";
function H(e, t, n, r) {
  let i = t?.find((e) => o(e) === n),
    a = e.seenQueued || i != null,
    s =
      e.dispatched || r || i?.submission?.status === `sending` || i?.submission?.status === `outcome-unknown`;
  return { seenQueued: a, dispatched: s, canceled: a && i == null && t != null && !s };
}
function U(e, t, n, i) {
  e.set(J, t, (e) => new Map(e).set(i.requestId, { ...i, heading: null }));
  let a = () => {},
    o = { seenQueued: !1, dispatched: !1, canceled: !1 },
    s = () => {
      (a(),
        e.set(J, t, (e) => {
          let t = new Map(e);
          return (t.delete(i.requestId), t);
        }));
    };
  return {
    finish: s,
    accepted: (c, l = !1) => {
      if (c == null) {
        s();
        return;
      }
      ((o.seenQueued = l),
        (a = e.watch(({ get: a }) => {
          let l = { hostId: n, threadId: r(c) ? c : u(c) };
          if (
            !a(S, l.threadId) &&
            ((o = H(o, a(D, l), i.requestId, a(Y, { ...l, requestId: i.requestId }) != null)), o.canceled)
          ) {
            queueMicrotask(s);
            return;
          }
          let d = a(X, { ...l, requestId: i.requestId });
          d.complete
            ? queueMicrotask(s)
            : e.set(J, t, (e) => {
                let t = e.get(i.requestId);
                return t == null || t.heading === d.heading
                  ? e
                  : new Map(e).set(i.requestId, { ...t, heading: d.heading });
              });
        })));
    },
  };
}
function W(e, t, n) {
  e.set(Z, t, (e) => [
    ...e.filter((e) => e.request.annotationId !== n.annotationId),
    { request: n, task: null },
  ]);
}
function G(e, t, n) {
  e.set(Z, t, (e) => e.filter(({ request: e }) => e.annotationId !== n));
}
function K(e, t, n, i, a) {
  let o = r(a) ? a : u(a),
    s = e.get(w, o);
  (e.set(Z, t, (e) =>
    e.map((e) =>
      e.request.annotationId === n ? { ...e, task: { hostId: i, threadId: a, streamRequestId: s } } : e,
    ),
  ),
    e.when(({ get: e }) => !e(Q, t).some((e) => e.annotationId === n)).then(() => G(e, t, n)));
}
var q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((q = t(c(), 1)),
      s(),
      l(),
      _(),
      N(),
      O(),
      j(),
      v(),
      y(),
      b(),
      n(),
      k(),
      R(),
      B(),
      (J = a(i, (e) => new Map(), void 0, { autoDispose: !1 })),
      (Y = d(
        i,
        (e, { get: t }) => {
          let n = t(f, { hostId: e.hostId, threadId: e.threadId });
          for (let r of n?.toReversed() ?? []) {
            let n = t(g, r);
            if (n == null) continue;
            let i = n.params.input;
            if (i.length === 0 && !n.params.commentAttachments?.length)
              for (let e of t(E, r) ?? []) {
                let n = t(T, { ...r, itemId: e });
                if (n?.type === `userMessage`) {
                  i = n.content;
                  break;
                }
              }
            if (
              m(h({ input: i }).rawText, { commentAttachments: n.params.commentAttachments }).some(
                (t) => t.annotationId === e.requestId,
              )
            )
              return r;
          }
          return null;
        },
        { isEqual: q.default },
      )),
      (X = d(
        i,
        (e, { get: t }) => {
          if (t(S, e.threadId)) {
            let n = t(M, e.threadId);
            if (n == null) return { complete: !1, heading: null };
            let r = p({ current_node: t(x, e.threadId), mapping: n }),
              i = (t) => m(t).some((t) => t.annotationId === e.requestId),
              a = r.some((e) => e.author.role === `user` && i(P(e))),
              o =
                (a || Object.values(n).some(({ message: e }) => e?.author.role === `user` && i(P(e)))) &&
                (!a || !I(t(A, e.threadId))),
              s = a ? r.findLast((e) => e.author.role === `assistant` && e.channel === `commentary`) : void 0;
            return { complete: o, heading: s == null ? null : L(P(s)) };
          }
          t(C, { hostId: e.hostId, threadId: e.threadId });
          let n = t(Y, e),
            r = t(g, n);
          return n == null || r == null
            ? { complete: !1, heading: null }
            : r.status === `inProgress`
              ? { complete: !1, heading: t(V, n) }
              : { complete: !0, heading: null };
        },
        { isEqual: q.default },
      )),
      (Z = a(i, (e) => [], void 0, { autoDispose: !1 })),
      (Q = d(i, (e, { get: t }) =>
        t(Z, e).flatMap(({ request: e, task: n }) => {
          if (n == null) return [e];
          let i = t(F, r(n.threadId) ? n.threadId : u(n.threadId)),
            a =
              i == null
                ? null
                : t(z, {
                    hostId: n.hostId,
                    threadId: i,
                    annotationId: e.annotationId,
                    streamRequestId: n.streamRequestId,
                  });
          return a === `finished` || a === `missing` ? [] : [e];
        }),
      )));
  }))();
}
export { $ as a, K as i, J as n, W as o, G as r, U as s, Q as t };
//# sourceMappingURL=generation-progress-7c89ed0439c9.js.map
