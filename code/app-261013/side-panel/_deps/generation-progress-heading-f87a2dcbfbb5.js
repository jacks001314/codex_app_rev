import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, nSt as r, wot as i } from "./app-shared-bbfeca5e5737.js";
import {
  aIr as a,
  d0t as o,
  f0t as s,
  fvr as c,
  g0t as l,
  gyr as u,
  jvr as d,
  kvr as f,
  m0t as p,
  mrr as m,
  mvr as h,
  oIr as g,
  prr as _,
  pyr as v,
} from "./app-initial-5851df3f6cb1.js";
import { a as y, t as b } from "./mcp-tool-activity-label-220d2d98d4ad.js";
var x;
function S() {
  return (S = e(() => {
    (n(),
      c(),
      a(),
      s(),
      v(),
      y(),
      l(),
      m(),
      i(),
      (x = r(t, (e, { get: t }) => {
        if (e == null || t(d, e) !== `inProgress`) return null;
        for (let n of t(f, e)?.toReversed() ?? []) {
          let r = { ...e, itemId: n },
            i = t(o, r);
          if (i != null) return i;
          let a = t(h, r);
          if (a?.type === `mcpToolCall`)
            return b({
              appContext: a.appContext,
              completed: a.status !== `inProgress`,
              intl: t(g),
              matchingApp: null,
              serverName: a.server,
              toolName: a.tool,
              toolArguments: a.arguments,
              toolResult: u(a.result, a.error, a.status),
              source: _({ serverName: a.server, resultMeta: a.result?._meta ?? null }),
            });
          if (a?.type === `agentMessage` && a.phase === `commentary`) {
            let e = p(a.text);
            if (e != null) return e;
          }
        }
        return null;
      })));
  }))();
}
export { S as n, x as t };
//# sourceMappingURL=generation-progress-heading-f87a2dcbfbb5.js.map
