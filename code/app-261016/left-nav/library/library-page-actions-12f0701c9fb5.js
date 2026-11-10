const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./download-markdown-2d7e7ab748e6.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { OFt as t, Vrt as n, kFt as r, qrt as i } from "./app-shared-2feb3d4c6fcc.js";
import {
  $V as a,
  CIr as o,
  EH as s,
  GV as c,
  JV as l,
  Jlr as u,
  OH as d,
  Odn as f,
  SIr as p,
  Vfn as m,
  WV as h,
  YV as g,
  Zlr as _,
  _ur as v,
  dW as y,
  hdn as b,
  iH as x,
  pW as S,
  vIr as C,
  yIr as w,
  zfn as T,
} from "./app-initial-ad16eaadf81f.js";
async function E(e, n) {
  let { accountId: r, userId: i } = e.value,
    a = v(e, r, i ?? null),
    o = [];
  try {
    let { downloadPageMarkdown: r } = await t(
      async () => {
        let { downloadPageMarkdown: e } = await import(`./download-markdown-2d7e7ab748e6.js`);
        return { downloadPageMarkdown: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5]),
      import.meta.url,
    );
    for (let t of n) {
      if (a.signal.aborted) break;
      _(t) === `page` && (await r(e, t.page_id, t.title)) && o.push(t.page_id);
    }
  } finally {
    a.stop();
  }
  return o;
}
async function D(e, t) {
  let { accountId: n, userId: r } = e.value,
    u = v(e, n, r ?? null);
  if (t.length === 0) return (u.stop(), []);
  let d = c(e, {
    documentType: t[0]?.document_type,
    pageTitle: t[0]?.title,
    multiple: t.length > 1 || t.some((e) => e.has_children === !0),
  });
  u.signal.addEventListener(`abort`, d.close, { once: !0 });
  let p = !0,
    h,
    g = new Set(),
    _ = { accountId: n, userId: r ?? null },
    y = t.map((e) => ({ id: e.page_id, committed: !1, pageIds: new Set([e.page_id]) }));
  e.set(m, _, (e) => [...e, ...y]);
  try {
    let i = await w(t, (t) => s(e, t.page_id, n, r ?? null), { concurrency: 4 });
    u.signal.throwIfAborted();
    let o = i.flatMap((t) => (t != null && a(t) && e.get(S, t) !== `request_changes` ? [t] : [])),
      c = new Map(o.map((t) => [t.page_id, e.get(f, t.page_id).ancestorPages.map((e) => e.page_id)]));
    o.sort((e, t) => (c.get(e.page_id)?.length ?? 0) - (c.get(t.page_id)?.length ?? 0));
    for (let n of o) {
      if ((u.signal.throwIfAborted(), g.has(n.page_id) || e.get(S, n) === `request_changes`)) continue;
      let r = await e.get(l).mutateAsync({ kind: `page`, id: n.page_id });
      u.signal.throwIfAborted();
      let i = r?.outcome;
      if (
        (t.length === 1 && (h = r?.receipt),
        (p &&= i === `completed`),
        i != null && g.add(n.page_id),
        i === `completed`)
      )
        for (let [e, t] of c) t.includes(n.page_id) && g.add(e);
    }
  } catch {
  } finally {
    (e.set(m, _, (e) => e.filter((e) => !y.includes(e))),
      !u.signal.aborted &&
        g.size < t.length &&
        e
          .get(i)
          .danger(
            e
              .get(o)
              .formatMessage({
                id: `space.library.deletePagesFailed`,
                defaultMessage: `Some pages could not be deleted. Check Trash before trying again`,
                description: `Bulk Page deletion failed or permission changed; the person must check Trash because a Page tree may have been partially deleted`,
              }),
            { errorAnalytics: { toastId: `space.library.deletePagesFailed` } },
          ),
      !u.signal.aborted && g.size === t.length
        ? d.complete(t.length > 1 || (p && t.some((e) => e.has_children === !0)), h)
        : d.close(),
      u.signal.removeEventListener(`abort`, d.close),
      u.stop());
  }
  return [...g];
}
function O() {
  return (O = e(() => {
    (C(), n(), p(), g(), T(), h(), u(), y(), x(), b(), d(), r());
  }))();
}
export { E as n, O as r, D as t };
//# sourceMappingURL=library-page-actions-12f0701c9fb5.js.map
