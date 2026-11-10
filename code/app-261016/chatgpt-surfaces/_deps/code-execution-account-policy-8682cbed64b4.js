import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as n, CCt as r, Qst as i, ZSt as a, iFt as o } from "./app-shared-2feb3d4c6fcc.js";
import { BRr as s, lNr as c, tRr as l, wLr as u, xLr as d, zRr as f } from "./app-initial-ad16eaadf81f.js";
var p, m;
function h() {
  return (h = e(() => {
    ((p = t(o(), 1)),
      a(),
      u(),
      n(),
      c(),
      (m = r(
        i,
        ({ get: e }) => {
          let t = e(d);
          if (t.status === `loading`) return { status: `loading` };
          let n = e(f),
            r = e(s);
          if (t.status !== `allowed` || n == null || r == null) return { status: `unavailable` };
          let i = e(l, n);
          return i.isError
            ? { status: `error` }
            : i.data == null
              ? { status: `loading` }
              : i.data.features?.includes(`canvas_code_execution`)
                ? {
                    status: `allowed`,
                    accountId: n,
                    userId: r,
                    networkAccessEnabled: i.data.features.includes(`canvas_code_network_access`),
                  }
                : { status: `unavailable` };
        },
        { isEqual: p.default },
      )));
  }))();
}
export { h as n, m as t };
//# sourceMappingURL=code-execution-account-policy-8682cbed64b4.js.map
