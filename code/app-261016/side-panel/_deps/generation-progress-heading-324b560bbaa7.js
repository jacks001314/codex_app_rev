import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, ZSt as r, yCt as i } from "./app-shared-2feb3d4c6fcc.js";
import {
  CIr as a,
  IUt as o,
  LUt as s,
  NSr as c,
  Ror as l,
  SIr as u,
  VUt as d,
  gSr as f,
  hCr as p,
  jSr as m,
  mSr as h,
  vCr as g,
  zUt as _,
  zor as v,
} from "./app-initial-ad16eaadf81f.js";
import { a as y, t as b } from "./mcp-tool-activity-label-1110f61411ea.js";
var x;
function S() {
  return (S = e(() => {
    (r(),
      h(),
      u(),
      s(),
      p(),
      y(),
      d(),
      v(),
      t(),
      (x = i(n, (e, { get: t }) => {
        if (e == null || t(c, e) !== `inProgress`) return null;
        for (let n of t(m, e)?.toReversed() ?? []) {
          let r = { ...e, itemId: n },
            i = t(o, r);
          if (i != null) return i;
          let s = t(f, r);
          if (s?.type === `mcpToolCall`)
            return b({
              appContext: s.appContext,
              completed: s.status !== `inProgress`,
              intl: t(a),
              matchingApp: null,
              serverName: s.server,
              toolName: s.tool,
              toolArguments: s.arguments,
              toolResult: g(s.result, s.error, s.status),
              source: l({ serverName: s.server, resultMeta: s.result?._meta ?? null }),
            });
          if (s?.type === `agentMessage` && s.phase === `commentary`) {
            let e = _(s.text);
            if (e != null) return e;
          }
        }
        return null;
      })));
  }))();
}
export { S as n, x as t };
//# sourceMappingURL=generation-progress-heading-324b560bbaa7.js.map
