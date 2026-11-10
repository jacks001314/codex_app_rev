import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, oSt as r, wot as i } from "./app-shared-bbfeca5e5737.js";
import {
  AMr as a,
  GMr as o,
  LMr as s,
  PMr as c,
  ZMr as l,
  tNr as u,
  zOr as d,
} from "./app-initial-5851df3f6cb1.js";
var f;
function p() {
  return (p = e(() => {
    (n(),
      u(),
      d(),
      i(),
      a(),
      (f = r(t, ({ get: e }) => {
        let t = e(l);
        if (t.status !== `allowed`) return { status: t.status };
        let n = e(o);
        if (n == null) return { status: `denied` };
        let { data: r, isPending: i, isError: a } = e(s, n);
        if (i) return { status: `loading` };
        if (a) return { status: `error`, accountId: n };
        let u = r?.account_ordering.map((e) => r.accounts[e]?.account).find((e) => e?.account_id === n);
        return u == null || !c(u.plan_type)
          ? { status: `denied` }
          : { status: `allowed`, accountId: n, isHipaaWorkspace: u.is_hipaa_compliant_workspace === !0 };
      })));
  }))();
}
export { p as n, f as t };
//# sourceMappingURL=agreements-access-caa07e5e90a8.js.map
