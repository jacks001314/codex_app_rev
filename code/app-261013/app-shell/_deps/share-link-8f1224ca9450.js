import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $fr as t, Qfr as n, hS as r, mS as i } from "./app-initial-5851df3f6cb1.js";
function a(e, t) {
  let n = new URLSearchParams(t);
  if (n.get(`review_access_requests`) !== `1`) return null;
  let r = n.get(`file_id`)?.trim();
  if (r != null)
    return (e === `/library` || e === `/library/`) && l.test(r)
      ? { resourceId: r, resourceKind: `file` }
      : null;
  let i = /^\/library\/d\/([^/]+)\/?$/.exec(e);
  if (i == null) return null;
  try {
    let e = decodeURIComponent(i[1]);
    return /^(?:[A-Fa-f0-9]{32}|(?:libdir_|libdir-)[A-Za-z0-9_-]+)$/.test(e)
      ? { resourceId: e, resourceKind: `folder` }
      : null;
  } catch {
    return null;
  }
}
function o(e, t) {
  let r = new URLSearchParams(t).get(`file_id`)?.trim() || null;
  if (e.startsWith(`/library/share/`)) {
    let t = /^\/library\/share\/([^/]+)(?:\/([^/]+))?(?:\/([^/]+))?\/?$/.exec(e);
    if (t == null) return null;
    let i;
    try {
      i = t
        .slice(1)
        .filter((e) => e != null)
        .map(decodeURIComponent);
    } catch {
      return null;
    }
    let a = (e) => l.test(e);
    if (!i.every((e) => c.test(e)) || i.slice(0, -1).some(a) || (i.length === 3 && !a(i[2]))) return null;
    let o = i[i.length - 1],
      s = a(o) ? o : r;
    if (s != null && !c.test(s)) return null;
    a(o) && i.pop();
    let u = i[0] ?? null,
      d = i.map((e) => n(e).replaceAll(`+`, `-`).replaceAll(`/`, `_`).replace(/=+$/u, ``));
    return {
      fileId: s,
      directoryId: u == null ? null : `library:shared-directory:v1:${d[0]}.${d[1] ?? d[0]}`,
      folderResourceId: i[1] ?? u,
    };
  }
  if (r == null || !c.test(r)) return null;
  let a = null;
  if (e.startsWith(`/library/d/`))
    try {
      a = decodeURIComponent(e.slice(11));
    } catch {
      return null;
    }
  else if (e !== `/library` && e !== `/library/`) return null;
  return { fileId: r, directoryId: a, folderResourceId: i(a)?.[1] ?? null };
}
function s({ libraryFileId: e, origin: t = u, resourceKind: n, sharedDirectoryId: r, workspaceId: a }) {
  let o = i(r),
    s = o?.[0],
    c = n === `folder` ? e : o?.[1],
    d = s ?? (n === `folder` ? e : void 0),
    f = `/library`;
  d != null &&
    c != null &&
    ((f = `/library/share/${encodeURIComponent(d)}`), c !== d && (f += `/${encodeURIComponent(c)}`));
  let p = n === `file` && l.test(e);
  p && (f = `${d == null ? `/library/share` : f}/${encodeURIComponent(e)}`);
  let m = new URL(f, t);
  return (
    n === `file` && !p && m.searchParams.set(`file_id`, e),
    m.searchParams.set(`account_id`, a ?? `personal`),
    m
  );
}
var c, l, u;
function d() {
  return (d = e(() => {
    (r(),
      t(),
      (c = /^[A-Za-z0-9_-]+$/),
      (l = /^(?:libfile_|libfile-)[A-Za-z0-9_-]+$/),
      (u = `https://chatgpt.com`));
  }))();
}
export { o as a, a as i, s as n, d as r, u as t };
//# sourceMappingURL=share-link-8f1224ca9450.js.map
