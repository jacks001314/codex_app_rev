import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Fyt as t,
  Kat as n,
  hot as r,
  lot as i,
  not as a,
  qat as o,
  rst as s,
} from "./app-shared-bbfeca5e5737.js";
import {
  Dor as c,
  GGn as l,
  Oor as u,
  aIr as d,
  aor as f,
  cor as p,
  iPr as m,
  oIr as h,
  sPr as g,
  xsn as _,
} from "./app-initial-5851df3f6cb1.js";
async function v(e, i, o, s) {
  let d = e.get(c),
    f = d == null ? null : u(e, d),
    g = o?.trim() || i,
    _ = t(/\.md$/iu.test(g) ? g : `${g}.md`);
  try {
    try {
      var v = a();
      let e = s?.();
      if (e == null) {
        if (f == null) throw Error(`page_menu_account_changed`);
        let t = await m.safeGet(`/pages/{page_id}`, {
          parameters: {
            path: { page_id: i },
            query: { include_content: !0, include_document_bootstrap: !1 },
          },
          signal: AbortSignal.any([f.signal, AbortSignal.timeout(15e3)]),
        });
        if (
          (f.signal.throwIfAborted(),
          p(t.metadata) !== `page` || !t.metadata.access.can_read || t.content == null)
        )
          throw Error(`page_menu_document_unavailable`);
        e = t.content.markdown;
      }
      if (v.u(await Promise.resolve(n.workspaceFiles.saveCopy)) != null)
        try {
          var y = a();
          return (
            y.u(await n.workspaceFiles.saveCopy?.({ bytes: new TextEncoder().encode(e), fileName: _ }))
              ?.path != null
          );
        } catch (e) {
          y.e = e;
        } finally {
          y.d();
        }
      return (l(new Blob([e], { type: `text/markdown;charset=utf-8` }), _), !0);
    } catch (e) {
      v.e = e;
    } finally {
      v.d();
    }
  } catch {
    return (
      e.get(c) === d &&
        e
          .get(r)
          .danger(
            e
              .get(h)
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
    f?.stop();
  }
}
function y() {
  return (y = e(() => {
    (s(), i(), d(), f(), _(), o(), g());
  }))();
}
y();
export { v as downloadPageMarkdown };
//# sourceMappingURL=download-markdown-2e1978953ead.js.map
