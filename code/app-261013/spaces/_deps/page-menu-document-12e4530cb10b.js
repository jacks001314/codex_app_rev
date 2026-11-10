import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { hot as t, iO as n, lot as r, rO as i } from "./app-shared-bbfeca5e5737.js";
import {
  Bsn as a,
  Dor as o,
  O3 as s,
  Oor as c,
  T3 as l,
  _4 as u,
  a5 as d,
  aIr as f,
  aor as p,
  cor as m,
  d3 as h,
  f4 as g,
  h3 as _,
  i5 as v,
  oIr as y,
  xsn as b,
  zsn as x,
} from "./app-initial-5851df3f6cb1.js";
async function S(e, t, n, r) {
  let i = e.get(o);
  if (i == null) throw Error(`page_menu_account_changed`);
  let s = c(e, i);
  try {
    let r = e.get(x, t) ?? (await e.query.getOrFetch(a, t))?.metadata;
    if (s.signal.aborted) throw Error(`page_menu_account_changed`);
    if (r == null || m(r) !== `page` || !r.access.can_read || (n === `write` && !r.access.can_write))
      throw Error(`page_menu_document_unavailable`);
  } finally {
    s.stop();
  }
  let l = g({ scope: e, pageId: t, requestedScope: n });
  try {
    if (
      (await new Promise((e, t) => {
        let r = (n) => {
            (clearTimeout(o), a(), n ? e() : t(Error(`page_menu_document_unavailable`)));
          },
          i = () => {
            let e = l.session.getSnapshot();
            e.status === `error` || e.status === `closed`
              ? r(!1)
              : e.hasCanonicalDocument && (n === `read` || e.status === `connected`) && r(!0);
          },
          a = l.session.subscribe(i),
          o = setTimeout(() => r(!1), 3e4);
        i();
      }),
      i == null || e.get(o) !== i)
    )
      throw Error(`page_menu_account_changed`);
    await r(l.session);
  } finally {
    l.release();
  }
}
async function C(e, n) {
  let r = e.get(o);
  try {
    await S(e, n, `read`, async (t) => {
      let n = e.get(y),
        r = l((e) => n.formatMessage(e)),
        a = h(r.parse(``), d(t.document).units, r);
      await i(r.serialize(a));
    });
  } catch {
    e.get(o) === r &&
      e
        .get(t)
        .danger(
          e
            .get(y)
            .formatMessage({
              id: `codex.space.page.copyMarkdownError`,
              defaultMessage: `Could not copy page`,
              description: `Notification when loading a Page to copy its Markdown fails`,
            }),
          { errorAnalytics: { toastId: `codex.space.page.copyMarkdownError` } },
        );
  }
}
function w() {
  return (w = e(() => {
    (r(), f(), v(), _(), p(), s(), u(), b(), n());
  }))();
}
export { w as n, S as r, C as t };
//# sourceMappingURL=page-menu-document-12e4530cb10b.js.map
