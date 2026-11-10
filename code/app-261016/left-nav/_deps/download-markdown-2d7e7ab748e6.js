import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Vrt as t,
  Zbt as n,
  ast as r,
  ist as i,
  qrt as a,
  qst as o,
  sct as s,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CIr as c,
  Jlr as l,
  SIr as u,
  Zlr as d,
  _ur as f,
  gur as p,
  hdn as m,
  iRr as h,
  mYn as g,
  sRr as _,
} from "./app-initial-ad16eaadf81f.js";
async function v(e, t, r, s) {
  let l = e.get(p),
    u = l == null ? null : f(e, l),
    m = r?.trim() || t,
    _ = n(/\.md$/iu.test(m) ? m : `${m}.md`);
  try {
    try {
      var v = o();
      let e = s?.();
      if (e == null) {
        if (u == null) throw Error(`page_menu_account_changed`);
        let n = await h.safeGet(`/pages/{page_id}`, {
          parameters: {
            path: { page_id: t },
            query: { include_content: !0, include_document_bootstrap: !1 },
          },
          signal: AbortSignal.any([u.signal, AbortSignal.timeout(15e3)]),
        });
        if (
          (u.signal.throwIfAborted(),
          d(n.metadata) !== `page` || !n.metadata.access.can_read || n.content == null)
        )
          throw Error(`page_menu_document_unavailable`);
        e = n.content.markdown;
      }
      if (v.u(await Promise.resolve(i.workspaceFiles.saveCopy)) != null)
        try {
          var y = o();
          return (
            y.u(await i.workspaceFiles.saveCopy?.({ bytes: new TextEncoder().encode(e), fileName: _ }))
              ?.path != null
          );
        } catch (e) {
          y.e = e;
        } finally {
          y.d();
        }
      return (g(new Blob([e], { type: `text/markdown;charset=utf-8` }), _), !0);
    } catch (e) {
      v.e = e;
    } finally {
      v.d();
    }
  } catch {
    return (
      e.get(p) === l &&
        e
          .get(a)
          .danger(
            e
              .get(c)
              .formatMessage({
                id: `codex.space.page.downloadMarkdownError`,
                defaultMessage: `Could not download page as Markdown`,
                description: `Notification when loading or saving a Page as a Markdown file fails`,
              }),
            { errorAnalytics: { toastId: `codex.space.page.downloadMarkdownError` } },
          ),
      !1
    );
  } finally {
    u?.stop();
  }
}
function y() {
  return (y = e(() => {
    (s(), t(), u(), l(), m(), r(), _());
  }))();
}
y();
export { v as downloadPageMarkdown };
//# sourceMappingURL=download-markdown-2d7e7ab748e6.js.map
