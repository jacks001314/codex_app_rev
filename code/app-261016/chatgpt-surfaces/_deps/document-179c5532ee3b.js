const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./visualization-sandbox-html-c61b6489e1b9.js",
      "./visualization-sandbox-html-eabbc7bb6cee.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./visualization-sandbox-config-d6a8d5057bf3.js",
      "./dist-15e5c1229202.js",
      "./dist-c49309ceeb35.js",
      "./dist-ad7e2bb8433e.js",
      "./protocol-327656160da5.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { OFt as t, kFt as n } from "./app-shared-2feb3d4c6fcc.js";
import { n as r, u as i } from "./visualization-sandbox-config-d6a8d5057bf3.js";
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
                  `./visualization-sandbox-html-c61b6489e1b9.js`
                );
                return { getVisualizationSandboxHtml: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
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
//# sourceMappingURL=document-179c5532ee3b.js.map
