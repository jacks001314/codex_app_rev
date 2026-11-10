import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as n,
  HNt as r,
  Jbt as i,
  Myt as a,
  OMt as o,
  Pxt as s,
  aSt as c,
  nSt as l,
  rst as u,
  wot as d,
} from "./app-shared-bbfeca5e5737.js";
import {
  Evr as f,
  JZn as p,
  Jyr as m,
  QJr as h,
  SZn as g,
  UZn as _,
  Uyr as v,
  VZn as y,
  Vyr as b,
  ZJr as x,
  bnr as S,
  ctn as C,
  fvr as w,
  g0t as T,
  kZn as E,
  kvr as D,
  m0t as O,
  mvr as k,
  nTr as A,
  qwr as j,
  utn as M,
  uvr as N,
  wZn as P,
  wvr as F,
  yjn as I,
  ynr as L,
} from "./app-initial-5851df3f6cb1.js";
import { n as R, t as z } from "./artifact-request-progress-b18754c299fc.js";
import { n as B, t as V } from "./generation-progress-heading-f87a2dcbfbb5.js";
function H(e, t, n, r) {
  let i = t?.find((e) => o(e) === n),
    a = e.seenQueued || i != null,
    s =
      e.dispatched || r || i?.submission?.status === `sending` || i?.submission?.status === `outcome-unknown`;
  return { seenQueued: a, dispatched: s, canceled: a && i == null && t != null && !s };
}
function U(e, t, n, r) {
  e.set(J, t, (e) => new Map(e).set(r.requestId, { ...r, heading: null }));
  let o = () => {},
    s = { seenQueued: !1, dispatched: !1, canceled: !1 },
    c = () => {
      (o(),
        e.set(J, t, (e) => {
          let t = new Map(e);
          return (t.delete(r.requestId), t);
        }));
    };
  return {
    finish: c,
    accepted: (l, u = !1) => {
      if (l == null) {
        c();
        return;
      }
      ((s.seenQueued = u),
        (o = e.watch(({ get: o }) => {
          let u = { hostId: n, threadId: a(l) ? l : i(l) };
          if (
            !o(P, u.threadId) &&
            ((s = H(s, o(M, u), r.requestId, o(Y, { ...u, requestId: r.requestId }) != null)), s.canceled)
          ) {
            queueMicrotask(c);
            return;
          }
          let d = o(X, { ...u, requestId: r.requestId });
          d.complete
            ? queueMicrotask(c)
            : e.set(J, t, (e) => {
                let t = e.get(r.requestId);
                return t == null || t.heading === d.heading
                  ? e
                  : new Map(e).set(r.requestId, { ...t, heading: d.heading });
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
function K(e, t, n, r, o) {
  let s = a(o) ? o : i(o),
    c = e.get(_, s);
  (e.set(Z, t, (e) =>
    e.map((e) =>
      e.request.annotationId === n ? { ...e, task: { hostId: r, threadId: o, streamRequestId: c } } : e,
    ),
  ),
    e.when(({ get: e }) => !e(Q, t).some((e) => e.annotationId === n)).then(() => G(e, t, n)));
}
var q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((q = t(r(), 1)),
      s(),
      u(),
      m(),
      h(),
      C(),
      w(),
      I(),
      T(),
      L(),
      d(),
      j(),
      R(),
      B(),
      (J = c(n, (e) => new Map(), void 0, { autoDispose: !1 })),
      (Y = l(
        n,
        (e, { get: t }) => {
          let n = t(F, { hostId: e.hostId, threadId: e.threadId });
          for (let r of n?.toReversed() ?? []) {
            let n = t(f, r);
            if (n == null) continue;
            let i = n.params.input;
            if (i.length === 0 && !n.params.commentAttachments?.length)
              for (let e of t(D, r) ?? []) {
                let n = t(k, { ...r, itemId: e });
                if (n?.type === `userMessage`) {
                  i = n.content;
                  break;
                }
              }
            if (
              S(x({ input: i }).rawText, { commentAttachments: n.params.commentAttachments }).some(
                (t) => t.annotationId === e.requestId,
              )
            )
              return r;
          }
          return null;
        },
        { isEqual: q.default },
      )),
      (X = l(
        n,
        (e, { get: t }) => {
          if (t(P, e.threadId)) {
            let n = t(E, e.threadId);
            if (n == null) return { complete: !1, heading: null };
            let r = b({ current_node: t(g, e.threadId), mapping: n }),
              i = (t) => S(t).some((t) => t.annotationId === e.requestId),
              a = r.some((e) => e.author.role === `user` && i(v(e))),
              o =
                (a || Object.values(n).some(({ message: e }) => e?.author.role === `user` && i(v(e)))) &&
                (!a || !p(t(y, e.threadId))),
              s = a ? r.findLast((e) => e.author.role === `assistant` && e.channel === `commentary`) : void 0;
            return { complete: o, heading: s == null ? null : O(v(s)) };
          }
          t(N, { hostId: e.hostId, threadId: e.threadId });
          let n = t(Y, e),
            r = t(f, n);
          return n == null || r == null
            ? { complete: !1, heading: null }
            : r.status === `inProgress`
              ? { complete: !1, heading: t(V, n) }
              : { complete: !0, heading: null };
        },
        { isEqual: q.default },
      )),
      (Z = c(n, (e) => [], void 0, { autoDispose: !1 })),
      (Q = l(n, (e, { get: t }) =>
        t(Z, e).flatMap(({ request: e, task: n }) => {
          if (n == null) return [e];
          let r = t(A, a(n.threadId) ? n.threadId : i(n.threadId)),
            o =
              r == null
                ? null
                : t(z, {
                    hostId: n.hostId,
                    threadId: r,
                    annotationId: e.annotationId,
                    streamRequestId: n.streamRequestId,
                  });
          return o === `finished` || o === `missing` ? [] : [e];
        }),
      )));
  }))();
}
export { $ as a, K as i, J as n, W as o, G as r, U as s, Q as t };
//# sourceMappingURL=generation-progress-490dcbbf687d.js.map
