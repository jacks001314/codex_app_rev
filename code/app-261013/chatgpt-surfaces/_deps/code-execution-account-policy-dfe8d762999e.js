import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as n, HNt as r, Pxt as i, oSt as a, wot as o } from "./app-shared-bbfeca5e5737.js";
import { GMr as s, XMr as c, ZMr as l, tNr as u, tPr as d, zOr as f } from "./app-initial-5851df3f6cb1.js";
var p, m;
function h() {
  return (h = e(() => {
    ((p = t(r(), 1)),
      i(),
      u(),
      o(),
      f(),
      (m = a(
        n,
        ({ get: e }) => {
          let t = e(l);
          if (t.status === `loading`) return { status: `loading` };
          let n = e(s),
            r = e(c);
          if (t.status !== `allowed` || n == null || r == null) return { status: `unavailable` };
          let i = e(d, n);
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
//# sourceMappingURL=code-execution-account-policy-dfe8d762999e.js.map
