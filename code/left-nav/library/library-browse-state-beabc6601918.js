import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  G3t as t,
  IKt as n,
  K3t as r,
  O3t as i,
  QWt as a,
  RKt as o,
  Xxt as s,
  _3t as c,
  a3t as l,
  c6t as u,
  hYt as d,
  m6t as f,
  mYt as p,
  o3t as m,
  qWt as h,
  s3t as g,
  uSt as _,
  w6t as v,
} from "./app-initial-f094ef01c64d.js";
function y(e, t, n, r) {
  return t.deleted
    ? S(e, t, n, r)
    : t.search && !t.includeHiddenFiles
      ? b(e, t, n, r)
      : t.search || t.directoryId != null || t.tab === `all` || t.tab === `folders`
        ? x(e, t, n, r)
        : S(e, t, n, r);
}
async function b(e, t, n, r) {
  let i = await e.safePost(`/global/search`, {
    requestBody: {
      query: t.search,
      cursor: n,
      limit: 20,
      entrypoint: `library_page`,
      source_requests: [
        {
          type: `library`,
          filters: {
            lanes: [`image`, `document`, `folder`],
            providers: t.providers,
            file_types: t.categories.length > 0 ? t.categories : void 0,
            source: t.source,
            directory_id: t.directoryId,
          },
        },
      ],
    },
    additionalHeaders:
      t.directoryId == null ? void 0 : { "x-oai-library-folder-search-scope": `all_descendants` },
    signal: r,
  });
  return { cursor: i.cursor, partialResults: i.partial_results, items: i.items.flatMap(w) };
}
async function x(e, t, n, r) {
  let i = await e.safeGet(`/files/library/nodes`, {
    parameters: {
      query: {
        parent_directory_id: t.directoryId,
        cursor: n,
        q: t.search || void 0,
        categories: !t.search && t.tab === `images` ? [`image`] : t.categories,
        source: t.source,
        include_hidden_files: t.includeHiddenFiles,
        include_files: !!t.search || t.tab !== `folders` || t.directoryId != null,
        include_saved_entities: !0,
        include_sites: !0,
        include_folder_counts: !t.search,
        hydrate_folder_thumbnails: !0,
      },
    },
    signal: r,
  });
  return { ...i, items: i.items.map((e) => ({ node: e })) };
}
async function S(e, t, n, r) {
  let i = await e.safePost(`/files/library`, {
    requestBody: {
      cursor: n,
      limit: 50,
      q: t.search || void 0,
      categories: !t.search && t.tab === `images` ? [`image`] : t.categories,
      source: t.source,
      include_hidden_files: t.includeHiddenFiles,
      include_saved_entities: !0,
      include_sites: !0,
      trashed_only: t.deleted,
      ranking: !t.deleted && t.tab === `suggested` ? `suggested` : void 0,
      providers:
        !t.deleted && t.tab === `suggested`
          ? t.providers.filter(
              (e) => e === `google_drive` || e === `box` || e === `dropbox` || e === `sharepoint`,
            )
          : void 0,
    },
    signal: r,
  });
  return { ...i, items: i.items.map(C) };
}
function C(e) {
  return {
    node: { ...e, kind: `file`, name: e.file_name, parent_directory_id: e.directory_id ?? null },
    lastUsedAt: e.last_used_at,
  };
}
function w(e) {
  if (e.source_type !== `library`) return [];
  let t = `library_file` in e.payload ? e.payload.library_file : e.payload,
    n = e.update_time == null ? null : new Date(e.update_time * 1e3).toISOString();
  return `directory_id` in t
    ? [
        {
          node: {
            ...t,
            id: t.directory_id,
            kind: `directory`,
            name: e.title,
            parent_directory_id: t.parent_directory_id ?? null,
            updated_at: n,
          },
          provider: t.provider,
        },
      ]
    : `library_item_id` in t
      ? [
          {
            node: {
              ...t,
              id: t.library_item_id,
              kind: `file`,
              name: e.title,
              parent_directory_id: t.parent_directory_id ?? null,
              updated_at: n,
            },
            site: `library_file` in e.payload ? e.payload : void 0,
            lastUsedAt: t.last_used_at,
            provider: t.provider,
          },
        ]
      : [];
}
function T(e) {
  let t = new Map();
  for (let n of e) for (let e of n.items) t.set(e.node.id, e);
  return [...t.values()];
}
function E({ node: e }) {
  return (
    e.is_root === !0 ||
    e.id === `library:collection:shared-with-me` ||
    (e.id.startsWith(`external-`) && e.id.endsWith(`:root`))
  );
}
function D(e) {
  if (e.provider != null) return e.provider;
  switch (e.node.id.split(`:`, 1)[0]) {
    case `external-gdrive`:
      return `google_drive`;
    case `external-box`:
      return `box`;
    case `external-dropbox`:
      return `dropbox`;
    case `external-sharepoint`:
      return `sharepoint`;
    default:
      return `native`;
  }
}
var O = e(() => {});
function k(e, t) {
  let n = null;
  if (e.startsWith(`/library/d/`))
    try {
      n = decodeURIComponent(e.slice(11)) || null;
    } catch {
      n = null;
    }
  let r = new URLSearchParams(t),
    i = r.get(`tab`),
    a = r.get(`source`);
  return {
    directoryId: n,
    tab: i === `folders` || i === `images` || i === `all` ? i : `suggested`,
    search: r.get(`search`)?.trim() ?? ``,
    deleted: r.get(`deleted`) === `true`,
    categories: r
      .getAll(`category`)
      .filter(
        (e) =>
          e === `images` ||
          e === `documents` ||
          e === `spreadsheets` ||
          e === `presentations` ||
          e === `pdfs`,
      ),
    source: a === `uploaded` || a === `generated` ? a : null,
  };
}
function A(e) {
  let t = new URLSearchParams();
  (e.tab !== `suggested` && t.set(`tab`, e.tab),
    e.deleted && t.set(`deleted`, `true`),
    e.search && t.set(`search`, e.search));
  for (let n of e.categories) t.append(`category`, n);
  e.source != null && t.set(`source`, e.source);
  let n = e.directoryId == null ? `/library` : `/library/d/${encodeURIComponent(e.directoryId)}`;
  return t.size === 0 ? n : `${n}?${t}`;
}
var j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G = e(() => {
    (g(),
      i(),
      a(),
      _(),
      m(),
      p(),
      o(),
      O(),
      (j = v(`LibraryScope`, {
        parent: l,
        key: ({ accountId: e, userId: t }) => JSON.stringify([e, t]),
        retain: { max: 1 },
      })),
      (M = v(`LibraryBrowseScope`, { parent: j })),
      (N = u(M, ({ scope: e }) =>
        e.value.deleted
          ? `deleted`
          : e.value.directoryId === `library:collection:shared-with-me`
            ? `shared`
            : e.value.directoryId == null && (e.value.search || e.value.tab === `suggested`)
              ? `suggested`
              : `modified`,
      )),
      (P = f(j, `grid`)),
      (F = f(j, !1)),
      (I = f(j, () => new Set())),
      (L = f(
        j,
        ({ scope: e }) =>
          new n({
            getAdditionalHeaders: () => ({ ...s(), "ChatGPT-Account-ID": e.value.accountId }),
          }),
      )),
      (R = u(M, ({ get: e, scope: t }) => ({
        ...t.value,
        includeHiddenFiles: e(F),
        providers: e(B).filter((t) => !e(I).has(t)),
      }))),
      (z = [`native`, `native_shared`, `google_drive`, `box`, `dropbox`, `sharepoint`]),
      (B = u(j, ({ get: e }) => z.filter((t) => t !== `google_drive` || e(d, `3001618585`)))),
      (V = t(j, ({ get: e, scope: t }) => {
        let n = e(L),
          r = e(B);
        return {
          queryKey: [`library-api`, t.value.accountId, t.value.userId, `provider-roots`, r],
          queryFn: async ({ signal: e }) =>
            (
              await n.safeGet(`/files/library/nodes`, {
                parameters: { query: { include_files: !1 } },
                signal: e,
              })
            ).items
              .map((e) => ({ node: e }))
              .filter((e) => E(e) && D(e) !== `native` && r.includes(D(e))),
          staleTime: 6e4,
        };
      })),
      (H = r(M, ({ get: e, scope: t }) => {
        let n = e(R),
          r = e(L);
        return c({
          queryKey: [`library-api`, t.value.accountId, e(h), `browse`, n],
          queryFn: ({ pageParam: e, signal: t }) => y(r, n, e, t),
          initialPageParam: null,
          getNextPageParam: (e, t, n, r) => (e.cursor && !r.includes(e.cursor) ? e.cursor : void 0),
          staleTime: 3e4,
          retry: 1,
        });
      })),
      (U = u(M, ({ get: e }) => {
        let t = e(H).data?.pages,
          n = e(I),
          r = e(B);
        return t == null ? void 0 : T(t).filter((e) => !n.has(D(e)) && r.includes(D(e)));
      })),
      (W = t(M, ({ get: e, scope: t }) => {
        let n = e(L),
          { directoryId: r } = t.value;
        return {
          queryKey: [`library-api`, t.value.accountId, t.value.userId, `path`, r],
          queryFn: ({ signal: e }) =>
            n.safeGet(`/files/library/directories/path`, {
              parameters: { query: { directory_id: r } },
              signal: e,
            }),
          enabled: r != null,
          staleTime: 6e4,
        };
      })));
  });
export {
  D as _,
  L as a,
  F as c,
  A as d,
  V as f,
  E as g,
  O as h,
  G as i,
  N as l,
  k as m,
  j as n,
  H as o,
  P as p,
  I as r,
  W as s,
  M as t,
  U as u,
};
//# sourceMappingURL=library-browse-state-beabc6601918.js.map
