import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { NO as t, PO as n, Vrt as r, qrt as i } from "./app-shared-2feb3d4c6fcc.js";
import {
  B3 as a,
  CIr as o,
  D7 as s,
  F3 as c,
  J6 as l,
  Jlr as u,
  Ndn as d,
  O7 as f,
  P6 as p,
  Pdn as m,
  R6 as h,
  SIr as g,
  Z6 as _,
  Zlr as v,
  _ur as y,
  gur as b,
  hdn as x,
} from "./app-initial-ad16eaadf81f.js";
async function S(e, t, n, r) {
  let i = e.get(b);
  if (i == null) throw Error(`page_menu_account_changed`);
  let a = y(e, i);
  try {
    let r = e.get(d, t) ?? (await e.query.getOrFetch(m, t))?.metadata;
    if (a.signal.aborted) throw Error(`page_menu_account_changed`);
    if (r == null || v(r) !== `page` || !r.access.can_read || (n === `write` && !r.access.can_write))
      throw Error(`page_menu_document_unavailable`);
  } finally {
    a.stop();
  }
  let o = c({ scope: e, pageId: t, requestedScope: n });
  try {
    if (
      (await new Promise((e, t) => {
        let r = (n) => {
            (clearTimeout(s), a(), n ? e() : t(Error(`page_menu_document_unavailable`)));
          },
          i = () => {
            let e = o.session.getSnapshot();
            e.status === `error` || e.status === `closed`
              ? r(!1)
              : e.hasCanonicalDocument && (n === `read` || e.status === `connected`) && r(!0);
          },
          a = o.session.subscribe(i),
          s = setTimeout(() => r(!1), 3e4);
        i();
      }),
      i == null || e.get(b) !== i)
    )
      throw Error(`page_menu_account_changed`);
    await r(o.session);
  } finally {
    o.release();
  }
}
async function C(e, n) {
  let r = e.get(b);
  try {
    await S(e, n, `read`, async (n) => {
      let r = e.get(o),
        i = l((e) => r.formatMessage(e)),
        a = p(i.parse(``), f(n.document).units, i);
      await t(i.serialize(a));
    });
  } catch {
    e.get(b) === r &&
      e
        .get(i)
        .danger(
          e
            .get(o)
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
    (r(), g(), s(), h(), u(), _(), a(), x(), n());
  }))();
}
export { w as n, S as r, C as t };
//# sourceMappingURL=page-menu-document-f4e5cf204ea3.js.map
