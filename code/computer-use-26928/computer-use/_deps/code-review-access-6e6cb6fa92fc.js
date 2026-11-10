import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  CMt as n,
  JEt as r,
  O5t as i,
  RDt as a,
  XEt as o,
  dJt as s,
  e7t as c,
  fJt as l,
  nDt as u,
  tDt as d,
  vMt as f,
} from "./app-shared-7552fc8d5d82.js";
import { Jkn as p, Ykn as m } from "./app-initial-3916b423772b.js";
import { xb as h, yb as g } from "./app-primary-7b889402e22e.js";
var _, v;
function y() {
  return (y = e(() => {
    (i(),
      u(),
      h(),
      m(),
      l(),
      f(),
      t(),
      (_ = c(s, ({ get: e }) => {
        let t = e(r);
        if (t.authLoading) return `loading`;
        let n =
          t.authMethod === `chatgpt` && t.accountId != null && a(t.plan) ? e(d, t.accountId) : null;
        return g(t.plan ?? void 0, t.authMethod, {
          isLoading: t.accountInfoLoading || n?.isPending === !0,
          hasErrors: t.accountInfoError || n?.isError === !0,
          hasWorkspaceEnabledCodex: n?.data?.beta_settings.wham_access === !0,
          needsOnboarding: !1,
        });
      })),
      (v = c(s, ({ get: e }) => {
        let t = e(_),
          r = e(p),
          i = e(o),
          a = { visible: t === `enabled`, pending: t === `loading`, error: t === `error` },
          s = {
            visible: i.status === `allowed`,
            pending: i.status === `loading`,
            error: i.status === `error`,
          };
        return {
          cloud: a,
          app: { visible: r && s.visible, pending: e(n) || (r && s.pending), error: r && s.error },
        };
      })));
  }))();
}
export { y as n, v as t };
//# sourceMappingURL=code-review-access-6e6cb6fa92fc.js.map
