const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./download-markdown-2e1978953ead.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { fPt as t, hot as n, lot as r, pPt as i } from "./app-shared-bbfeca5e5737.js";
import {
  $H as a,
  Ez as o,
  Gcn as s,
  JV as c,
  Kcn as l,
  Oor as u,
  Oz as d,
  Psn as f,
  QV as p,
  Xjr as m,
  Yjr as h,
  ZH as g,
  ZV as _,
  aIr as v,
  aor as y,
  cor as b,
  nH as x,
  oIr as S,
  qV as C,
  sH as w,
  xsn as T,
} from "./app-initial-5851df3f6cb1.js";
async function E(e, n) {
  let { accountId: r, userId: i } = e.value,
    a = u(e, r, i ?? null),
    o = [];
  try {
    let { downloadPageMarkdown: r } = await t(
      async () => {
        let { downloadPageMarkdown: e } = await import(`./download-markdown-2e1978953ead.js`);
        return { downloadPageMarkdown: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5]),
      import.meta.url,
    );
    for (let t of n) {
      if (a.signal.aborted) break;
      b(t) === `page` && (await r(e, t.page_id, t.title)) && o.push(t.page_id);
    }
  } finally {
    a.stop();
  }
  return o;
}
async function D(e, t) {
  let { accountId: r, userId: i } = e.value,
    s = u(e, r, i ?? null);
  if (t.length === 0) return (s.stop(), []);
  let d = c(e, {
    documentType: t[0]?.document_type,
    pageTitle: t[0]?.title,
    multiple: t.length > 1 || t.some((e) => e.has_children === !0),
  });
  s.signal.addEventListener(`abort`, d.close, { once: !0 });
  let p = !0,
    h,
    g = new Set(),
    v = { accountId: r, userId: i ?? null },
    y = t.map((e) => ({ id: e.page_id, committed: !1, pageIds: new Set([e.page_id]) }));
  e.set(l, v, (e) => [...e, ...y]);
  try {
    let n = await m(t, (t) => o(e, t.page_id, r, i ?? null), { concurrency: 4 });
    s.signal.throwIfAborted();
    let c = n.flatMap((t) => (t != null && x(t) && e.get(a, t) !== `request_changes` ? [t] : [])),
      l = new Map(c.map((t) => [t.page_id, e.get(f, t.page_id).ancestorPages.map((e) => e.page_id)]));
    c.sort((e, t) => (l.get(e.page_id)?.length ?? 0) - (l.get(t.page_id)?.length ?? 0));
    for (let n of c) {
      if ((s.signal.throwIfAborted(), g.has(n.page_id) || e.get(a, n) === `request_changes`)) continue;
      let r = await e.get(_).mutateAsync({ kind: `page`, id: n.page_id });
      s.signal.throwIfAborted();
      let i = r?.outcome;
      if (
        (t.length === 1 && (h = r?.receipt),
        (p &&= i === `completed`),
        i != null && g.add(n.page_id),
        i === `completed`)
      )
        for (let [e, t] of l) t.includes(n.page_id) && g.add(e);
    }
  } catch {
  } finally {
    (e.set(l, v, (e) => e.filter((e) => !y.includes(e))),
      !s.signal.aborted &&
        g.size < t.length &&
        e
          .get(n)
          .danger(
            e
              .get(S)
              .formatMessage({
                id: `space.library.deletePagesFailed`,
                defaultMessage: `Some pages could not be deleted. Check Trash before trying again`,
                description: `Bulk Page deletion failed or permission changed; the person must check Trash because a Page tree may have been partially deleted`,
              }),
            { errorAnalytics: { toastId: `space.library.deletePagesFailed` } },
          ),
      !s.signal.aborted && g.size === t.length
        ? d.complete(t.length > 1 || (p && t.some((e) => e.has_children === !0)), h)
        : d.close(),
      s.signal.removeEventListener(`abort`, d.close),
      s.stop());
  }
  return [...g];
}
function O() {
  return (O = e(() => {
    (h(), r(), v(), p(), s(), C(), y(), g(), w(), T(), d(), i());
  }))();
}
export { E as n, O as r, D as t };
//# sourceMappingURL=library-page-actions-8e021b2c2498.js.map
