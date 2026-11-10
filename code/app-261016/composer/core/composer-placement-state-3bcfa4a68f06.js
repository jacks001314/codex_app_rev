import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, ZSt as r, yCt as i } from "./app-shared-2feb3d4c6fcc.js";
import {
  AQn as a,
  O1t as o,
  VPn as s,
  W1n as c,
  b1t as l,
  kQn as u,
  y1t as d,
} from "./app-initial-ad16eaadf81f.js";
function f(e) {
  return (
    e?.type === `single_advertiser_ad_unit` &&
    e.presentation === `composer_pinned` &&
    e.ad_cards?.length === 1 &&
    e.ad_cards[0].format === `image_card_v2`
  );
}
var p;
function m() {
  return (m = e(() => {
    (r(),
      t(),
      s(),
      u(),
      o(),
      (p = i(n, (e, { get: t }) => {
        let n = t(c, e)?.at(-1);
        if (n == null) return null;
        let r = { conversationId: e, userMessageId: n };
        if (t(d, r)) return null;
        let i = t(l, r);
        return i?.response.visibility.status !== `allowed` || !a(i.response.content) || !f(i.response.content)
          ? null
          : n;
      })));
  }))();
}
export { m as n, f as r, p as t };
//# sourceMappingURL=composer-placement-state-3bcfa4a68f06.js.map
