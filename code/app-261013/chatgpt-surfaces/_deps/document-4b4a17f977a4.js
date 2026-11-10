const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./visualization-sandbox-html-bf33420348b0.js",
      "./visualization-sandbox-html-76153247d80b.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./visualization-sandbox-config-193a3a874c91.js",
      "./protocol-732738b49eb3.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { fPt as t, pPt as n } from "./app-shared-bbfeca5e5737.js";
import { n as r, u as i } from "./visualization-sandbox-config-193a3a874c91.js";
var a, o, s;
function c() {
  return (c = e(() => {
    (i(),
      n(),
      (a = `<!--__INLINE_VISUALIZATION_FRAGMENT__-->`),
      (o = {
        requiresReadySignal: !1,
        hasPaintGutter: !1,
        inlineMaxHeight: 600,
        csp: {
          ...r,
          resourceDomains: [...r.resourceDomains, `https://cdn.tailwindcss.com`, `https://images.openai.com`],
        },
        async buildHtml(e, n, r) {
          let { getVisualizationSandboxHtml: i } = await t(
              async () => {
                let { getVisualizationSandboxHtml: e } = await import(
                  `./visualization-sandbox-html-bf33420348b0.js`
                );
                return { getVisualizationSandboxHtml: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
              import.meta.url,
            ),
            o = r.replace(/[^a-zA-Z0-9-]/g, ``) || `en`,
            s;
          if (/<!doctype\b|<html[\s>]/i.test(e)) {
            let t = e.match(/<\/body\s*>(?=\s*(?:<\/html\s*>)?\s*$)/i) ?? e.match(/<\/html\s*>\s*$/i);
            if (t?.index == null) s = `${e}\n${a}`;
            else {
              let n = t.index;
              s = [e.slice(0, n), a, e.slice(n)].join(`
`);
            }
          } else
            s = `<!doctype html>
<html lang="${o}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>body{margin:0}</style>
</head>
<body>${e}${a}</body>
</html>`;
          return i(``, { ...n, innerKit: s, lockDocumentOverflow: !1, styles: ``, syncHostStyles: !1 });
        },
      }),
      (s = { ...o, csp: { ...o.csp, disableNetworkRequests: !0 } }));
  }))();
}
export { o as n, s as r, c as t };
//# sourceMappingURL=document-4b4a17f977a4.js.map
