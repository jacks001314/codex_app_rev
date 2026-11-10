import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $j as t, CM as n, TM as r, gI as i } from "./app-shared-bbfeca5e5737.js";
import { Idn as a, Ldn as o } from "./app-initial-5851df3f6cb1.js";
function s(e, t) {
  let n = a(t),
    o = new URLSearchParams(e).get(`prompt`) ?? ``,
    s = `@${n}`;
  o.startsWith(s) && (o.length === s.length || /[\s\p{P}]/u.test(o[s.length])) && (o = o.slice(s.length));
  let c = o.replaceAll(`](`, `]\\(`);
  return { prefillPrompt: `${r(s, i(t.plugin.id))} ${c}`, prefillPromptFormat: `plain` };
}
function c() {
  return (c = e(() => {
    (o(), t(), n());
  }))();
}
export { c as n, s as t };
//# sourceMappingURL=composer-prefill-5d18ad95c31c.js.map
