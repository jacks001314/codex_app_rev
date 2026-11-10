import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, oSt as r, wot as i } from "./app-shared-bbfeca5e5737.js";
import {
  AMr as a,
  EPr as o,
  IOn as s,
  NPr as c,
  OPr as l,
  POn as u,
  aMr as d,
  dMr as f,
  fMr as p,
  sMr as m,
} from "./app-initial-5851df3f6cb1.js";
import { Ib as h, Rb as g } from "./app-primary-fe8a450b3b04.js";
var _, v;
function y() {
  return (y = e(() => {
    (n(),
      p(),
      g(),
      s(),
      i(),
      l(),
      a(),
      (_ = r(t, ({ get: e }) => {
        let t = e(d);
        if (t.authLoading) return `loading`;
        let n = t.authMethod === `chatgpt` && t.accountId != null && o(t.plan) ? e(f, t.accountId) : null;
        return h(t.plan ?? void 0, t.authMethod, {
          isLoading: t.accountInfoLoading || n?.isPending === !0,
          hasErrors: t.accountInfoError || n?.isError === !0,
          hasWorkspaceEnabledCodex: n?.data?.beta_settings.wham_access === !0,
          needsOnboarding: !1,
        });
      })),
      (v = r(t, ({ get: e }) => {
        let t = e(_),
          n = e(u),
          r = e(m),
          i = { visible: t === `enabled`, pending: t === `loading`, error: t === `error` },
          a = {
            visible: r.status === `allowed`,
            pending: r.status === `loading`,
            error: r.status === `error`,
          };
        return {
          cloud: i,
          app: { visible: n && a.visible, pending: e(c) || (n && a.pending), error: n && a.error },
        };
      })));
  }))();
}
export { y as n, v as t };
//# sourceMappingURL=code-review-access-497dd017cf4b.js.map
