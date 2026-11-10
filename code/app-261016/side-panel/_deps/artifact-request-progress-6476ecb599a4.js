import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, ZSt as r, yCt as i } from "./app-shared-2feb3d4c6fcc.js";
import {
  $Er as a,
  ESr as o,
  GCr as s,
  Gar as c,
  K$r as l,
  OSr as u,
  QCr as d,
  QEr as f,
  V1n as p,
  VPn as m,
  War as h,
  Y1n as g,
  Z1n as _,
  d2n as v,
  eer as y,
  f2n as b,
  fSr as x,
  g0n as S,
  gSr as C,
  jSr as w,
  jin as T,
  kin as E,
  ler as D,
  m0n as O,
  mSr as k,
  n0n as A,
  q$r as j,
  qCr as M,
  x0n as N,
} from "./app-initial-ad16eaadf81f.js";
var P;
function F() {
  return (F = e(() => {
    (r(),
      d(),
      j(),
      y(),
      f(),
      E(),
      k(),
      v(),
      m(),
      h(),
      t(),
      (P = i(n, ({ annotationId: e, streamRequestId: t, ...n }, { get: r }) => {
        let i = r(T, n);
        if (
          i?.some((t) =>
            t.context.commentAttachments?.some((t) => t.localArtifactAnnotationContext?.annotationId === e),
          )
        )
          return `queued`;
        if (r(_, n.threadId)) {
          let a = r(A, n.threadId);
          if (a == null) return null;
          if (t != null && r(S, n.threadId) !== t && !b(r(p, n.threadId))) return `finished`;
          let o = (t) => c(t).some((t) => t.annotationId === e);
          return s({ current_node: r(g, n.threadId), mapping: a }).some(
            (e) => e.author.role === `user` && o(M(e)),
          )
            ? N(r(O, n.threadId))
              ? `running`
              : `finished`
            : Object.values(a).some(({ message: e }) => e?.author.role === `user` && o(M(e)))
              ? `finished`
              : i == null
                ? null
                : `missing`;
        }
        r(x, n);
        let d = r(o, n);
        for (let t of d?.toReversed() ?? []) {
          let i = r(u, t);
          if (i == null) continue;
          let o = i.params.input;
          if (o.length === 0 && (i.params.commentAttachments?.length ?? 0) === 0)
            for (let e of r(w, t) ?? []) {
              let n = r(C, { ...t, itemId: e });
              if (n?.type === `userMessage`) {
                o = n.content;
                break;
              }
            }
          if (
            c(l({ input: o }).rawText, { commentAttachments: i.params.commentAttachments }).some(
              (t) => t.annotationId === e,
            )
          )
            return (i.pendingUserMessageAdmission != null || i.status === `inProgress`) &&
              (i.turnId == null || !r(a, n.threadId).has(i.turnId))
              ? `running`
              : `finished`;
        }
        let f = r(D, n.threadId);
        return d == null || i == null || f == null ? null : f ? `running` : `missing`;
      })));
  }))();
}
export { F as n, P as t };
//# sourceMappingURL=artifact-request-progress-6476ecb599a4.js.map
