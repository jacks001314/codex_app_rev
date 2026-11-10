import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, nSt as r, wot as i } from "./app-shared-bbfeca5e5737.js";
import {
  M$t as a,
  T$t as o,
  _Zn as s,
  nYn as c,
  rYn as l,
  w$t as u,
  yjn as d,
} from "./app-initial-5851df3f6cb1.js";
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
    (n(),
      i(),
      d(),
      c(),
      a(),
      (p = r(t, (e, { get: t }) => {
        let n = t(s, e)?.at(-1);
        if (n == null) return null;
        let r = { conversationId: e, userMessageId: n };
        if (t(u, r)) return null;
        let i = t(o, r);
        return i?.response.visibility.status !== `allowed` || !l(i.response.content) || !f(i.response.content)
          ? null
          : n;
      })));
  }))();
}
export { m as n, f as r, p as t };
//# sourceMappingURL=composer-placement-state-2a0d9dbc106f.js.map
