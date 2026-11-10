import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as n, HNt as r, Pxt as i, nSt as a, wot as o } from "./app-shared-bbfeca5e5737.js";
import {
  $8n as s,
  Ftr as c,
  fvr as l,
  gvr as u,
  jvr as d,
  kvr as f,
  mvr as p,
  pvr as m,
  v8n as h,
  wvr as g,
} from "./app-initial-5851df3f6cb1.js";
import { t as _ } from "./command-execution-command-615dea847916.js";
function v(e, t) {
  let { get: n } = e,
    r = n(m, t) ?? [];
  n(f, t);
  let i = u(e, t),
    a = [];
  for (let e of c(i?.items ?? [])) {
    if (e.type !== `commandExecution` || e.status !== `inProgress`) continue;
    let i = n(p, { ...t, itemId: e.id });
    i?.type === `commandExecution` &&
      i.status === `inProgress` &&
      !r.includes(i.id) &&
      a.push({
        id: i.id,
        itemKey: { ...t, itemId: i.id },
        command: _(i),
        cwd: i.cwd ?? null,
        processId: i.processId,
      });
  }
  return a;
}
var y, b, x, S;
function C() {
  return (C = e(() => {
    ((y = t(r(), 1)),
      i(),
      h(),
      l(),
      o(),
      (b = a(
        n,
        (e, { get: t }) => {
          let n = e == null ? null : t(p, e);
          return n?.type === `commandExecution` ? n.aggregatedOutput : null;
        },
        { owner: (e) => e?.threadId },
      )),
      (x = a(n, (e, { scope: t }) => v(t, e), { isEqual: y.default, owner: (e) => e.threadId })),
      (S = a(
        n,
        (e, { get: t, scope: n }) => {
          if (e == null) return null;
          let r = t(s, e);
          if (r == null) return null;
          let i = t(g, { hostId: r, threadId: e }) ?? [],
            a = [];
          for (let e = i.length - 1; e >= 0; --e) {
            let r = i[e];
            if (r == null || (e === i.length - 1 && t(d, r) === `inProgress`)) continue;
            t(f, r);
            let o = u(n, r);
            o != null &&
              o.items.some(
                (e) =>
                  e?.type === `commandExecution` &&
                  e.status === `inProgress` &&
                  !o.interruptedCommandExecutionItemIds?.includes(e.id),
              ) &&
              a.push(...t(x, r));
          }
          return a;
        },
        { isEqual: y.default, owner: (e) => e },
      )));
  }))();
}
export { S as n, C as r, b as t };
//# sourceMappingURL=local-conversation-background-terminal-signals-1dd17765e09e.js.map
