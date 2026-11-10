import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $dt as t,
  Cot as n,
  Pxt as r,
  RSt as i,
  Xdt as a,
  Ydt as o,
  Zxt as s,
  ift as c,
  tft as l,
  wot as u,
  zSt as d,
} from "./app-shared-bbfeca5e5737.js";
import { Yfr as f } from "./app-initial-5851df3f6cb1.js";
function p(e) {
  let t = new URL(e);
  return `source-${f(`${t.protocol}//${t.host}`)}`;
}
function m(e) {
  if (e == null || e === ``) return null;
  let t;
  try {
    t = new URL(e.includes(`://`) ? e : `https://${e}`).hostname;
  } catch (e) {
    throw Error(`Invalid MCP app widget domain.`, { cause: e });
  }
  let n = t.replaceAll(`.`, `-`);
  if (!/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(n))
    throw Error(`MCP app widget domain does not map to a valid DNS label.`);
  return n;
}
var h;
function g() {
  return (g = e(() => {
    (d(),
      r(),
      c(),
      u(),
      (h = s(n, ({ identity: e, locale: n, widgetDomain: r }) => ({
        queryKey: [`mcp-app-sandbox-config`, e, n, r],
        queryFn: async () => {
          let s = await crypto.subtle.digest(`SHA-256`, new TextEncoder().encode(i([e]))),
            c = Array.from(new Uint8Array(s).slice(0, 24), (e) => e.toString(16).padStart(2, `0`)).join(``),
            u = e.kind === `connector` ? m(r) : null;
          return {
            sourceUrl: t({
              environment:
                window.location.hostname === `chatgpt-staging.com` ||
                window.location.hostname.endsWith(`.chatgpt-staging.com`)
                  ? `staging`
                  : `production`,
              locale: n,
              scheme: u == null ? a : `https`,
              subdomain: u ?? `mcp-app-${c}`,
            }),
            partition: u == null ? o : l(`connection-${c}`, { persist: !0 }),
          };
        },
        retry: !1,
        staleTime: 1 / 0,
      }))));
  }))();
}
export { g as n, h as r, p as t };
//# sourceMappingURL=sandbox-origin-6479c97e7d45.js.map
