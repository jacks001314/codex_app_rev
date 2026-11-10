import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Bbt as t, rst as n } from "./app-shared-bbfeca5e5737.js";
import { Ftr as r } from "./app-initial-5851df3f6cb1.js";
import { n as i, t as a } from "./webmcp-tool-calls-ca5a1d70fd15.js";
function o(e) {
  let n = [];
  for (let i = e.length - 1; i >= 0; --i) {
    let o = r(e[i]?.items ?? []);
    for (let e = o.length - 1; e >= 0; --e) {
      let r = o[e];
      r?.type === `mcpToolCall` &&
        r.status !== `inProgress` &&
        t(r.server) &&
        n.push(...a(r.result?._meta).slice().reverse());
    }
  }
  return n;
}
function s(e) {
  let t = new Map();
  for (let n of e) {
    let e = t.get(n.name);
    e == null ? t.set(n.name, { calls: [n], name: n.name }) : e.calls.push(n);
  }
  return Array.from(t.values());
}
function c(e) {
  try {
    return new URL(e).hostname || void 0;
  } catch {
    return;
  }
}
function l() {
  return (l = e(() => {
    (n(), i());
  }))();
}
export { l as i, o as n, s as r, c as t };
//# sourceMappingURL=local-conversation-webmcp-tools-model-a5b27ecc68d1.js.map
