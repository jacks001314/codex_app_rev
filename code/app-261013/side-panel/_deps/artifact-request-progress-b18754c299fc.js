import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, nSt as r, wot as i } from "./app-shared-bbfeca5e5737.js";
import {
  D8n as a,
  Evr as o,
  JZn as s,
  Jyr as c,
  MSr as l,
  NSr as u,
  QJr as d,
  RQn as f,
  SZn as p,
  UZn as m,
  Uyr as h,
  VZn as g,
  Vyr as _,
  ZJr as v,
  bnr as y,
  ctn as b,
  fvr as x,
  kZn as S,
  kvr as C,
  mZn as w,
  mvr as T,
  utn as E,
  uvr as D,
  v8n as O,
  wZn as k,
  wvr as A,
  yjn as j,
  ynr as M,
  zQn as N,
} from "./app-initial-5851df3f6cb1.js";
var P;
function F() {
  return (F = e(() => {
    (n(),
      c(),
      d(),
      O(),
      l(),
      b(),
      x(),
      f(),
      j(),
      M(),
      i(),
      (P = r(t, ({ annotationId: e, streamRequestId: t, ...n }, { get: r }) => {
        let i = r(E, n);
        if (
          i?.some((t) =>
            t.context.commentAttachments?.some((t) => t.localArtifactAnnotationContext?.annotationId === e),
          )
        )
          return `queued`;
        if (r(k, n.threadId)) {
          let a = r(S, n.threadId);
          if (a == null) return null;
          if (t != null && r(m, n.threadId) !== t && !N(r(w, n.threadId))) return `finished`;
          let o = (t) => y(t).some((t) => t.annotationId === e);
          return _({ current_node: r(p, n.threadId), mapping: a }).some(
            (e) => e.author.role === `user` && o(h(e)),
          )
            ? s(r(g, n.threadId))
              ? `running`
              : `finished`
            : Object.values(a).some(({ message: e }) => e?.author.role === `user` && o(h(e)))
              ? `finished`
              : i == null
                ? null
                : `missing`;
        }
        r(D, n);
        let c = r(A, n);
        for (let t of c?.toReversed() ?? []) {
          let i = r(o, t);
          if (i == null) continue;
          let a = i.params.input;
          if (a.length === 0 && (i.params.commentAttachments?.length ?? 0) === 0)
            for (let e of r(C, t) ?? []) {
              let n = r(T, { ...t, itemId: e });
              if (n?.type === `userMessage`) {
                a = n.content;
                break;
              }
            }
          if (
            y(v({ input: a }).rawText, { commentAttachments: i.params.commentAttachments }).some(
              (t) => t.annotationId === e,
            )
          )
            return (i.pendingUserMessageAdmission != null || i.status === `inProgress`) &&
              (i.turnId == null || !r(u, n.threadId).has(i.turnId))
              ? `running`
              : `finished`;
        }
        let l = r(a, n.threadId);
        return c == null || i == null || l == null ? null : l ? `running` : `missing`;
      })));
  }))();
}
export { F as n, P as t };
//# sourceMappingURL=artifact-request-progress-b18754c299fc.js.map
