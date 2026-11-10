import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { HM as t, aL as n, fN as r, mN as i } from "./app-shared-2feb3d4c6fcc.js";
import { Enn as a, Tnn as o } from "./app-initial-ad16eaadf81f.js";
function s(e, t) {
  let r = o(t),
    a = new URLSearchParams(e).get(`prompt`) ?? ``,
    s = `@${r}`;
  a.startsWith(s) && (a.length === s.length || /[\s\p{P}]/u.test(a[s.length])) && (a = a.slice(s.length));
  let c = a.replaceAll(`](`, `]\\(`);
  return { prefillPrompt: `${i(s, n(t.plugin.id))} ${c}`, prefillPromptFormat: `plain` };
}
function c() {
  return (c = e(() => {
    (a(), t(), r());
  }))();
}
export { c as n, s as t };
//# sourceMappingURL=composer-prefill-875bc7c1262c.js.map
