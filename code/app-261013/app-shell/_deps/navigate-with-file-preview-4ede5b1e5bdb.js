import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { CPt as t, Eft as n, Pxt as r, SPt as i, pSt as a, rst as o } from "./app-shared-bbfeca5e5737.js";
import {
  $f as s,
  Cwr as c,
  FFr as l,
  GMr as u,
  Hwr as d,
  IGn as f,
  Iwr as p,
  KKn as m,
  Kwr as h,
  NGn as g,
  UKn as _,
  XMr as v,
  XQn as y,
  YQn as b,
  _wr as x,
  bOn as S,
  cx as C,
  dKn as w,
  eNr as T,
  ep as E,
  fWn as D,
  gp as O,
  gwr as k,
  lKn as A,
  pWn as j,
  qQn as M,
  qwr as N,
  tNr as P,
  tp as F,
  ux as I,
  vp as L,
  wOn as R,
  zFr as z,
} from "./app-initial-5851df3f6cb1.js";
import { n as B, r as V, t as H } from "./library-multiplayer-access-d2184d962fe8.js";
function U({
  accountId: e,
  userId: t,
  file: r,
  browserLibraryFileId: i = r.id,
  currentVersion: a,
  modifiedAt: o,
  useDownloadUrlAsImageSrc: s = !1,
}) {
  let c = s && i != null && n(i) ? i : r.file_id;
  return {
    cacheKey: [
      `library-file-preview-image`,
      {
        accountId: e ?? null,
        userId: t ?? null,
        fileId: c,
        browserLibraryFileId: i ?? null,
        currentVersion: a ?? 0,
        modifiedAt: a ? null : (o ?? null),
        useDownloadUrlAsImageSrc: s,
      },
    ],
    useDownloadUrlAsImageSrc: s,
    resolveAsset: async () => {
      let t = await A({ ...r, file_id: c }, { browserLibraryFileId: i, showInline: !0 });
      return t.libraryFileState == null
        ? {
            kind: `available`,
            ...t,
            requestHeaders:
              t.requestHeaders == null || e == null
                ? t.requestHeaders
                : { ...t.requestHeaders, "ChatGPT-Account-ID": e },
          }
        : { kind: `trashed`, libraryFileId: t.libraryFileState.libraryFileId };
    },
  };
}
function W() {
  return (W = e(() => {
    (o(), w());
  }))();
}
function G(e, { conversationId: n, file: r, navigate: i, routeKind: o }) {
  let c = e.get(l),
    f = e.get(u),
    m = e.get(v),
    y = e.get(I),
    C = i() !== !1;
  if (!C || r == null || c == null) return C;
  return (
    w(r).catch((e) => {
      t.warning(`Library chat preview failed to open`, { safe: {}, sensitive: { error: e } });
    }),
    !0
  );
  async function w(t) {
    await e.when(
      (e) =>
        e.get(l)?.key !== c?.key ||
        e.get(u) !== f ||
        e.get(v) !== m ||
        (y?.entry?.node.id === t.id && e.get(I) !== y),
    );
    let r = e.get(l);
    if (r == null || f == null || m == null || e.get(u) !== f || e.get(v) !== m || !e.get(T) || e.get(S, n))
      return;
    let i = x({ pathname: r.pathname, routeTemplate: r.pathname, search: r.search }),
      C = r.state;
    if (
      i.routeKind !== o ||
      (i.routeKind === `home` && C?.initialChatGptConversationId !== n) ||
      (i.routeKind === `chatgpt-thread` && b(e.get, i.conversationId) !== b(e.get, n))
    )
      return;
    i.routeKind === `chatgpt-thread` && (i.conversationId = e.get(M, i.conversationId) ?? i.conversationId);
    let w = a(e, p, e.get(d, h(i))),
      E = w == null ? null : a(w, k, k.getKey?.(i));
    if (E == null) return;
    let D = t.mountedLibraryFileId ?? (_(t.id) == null ? void 0 : t.id),
      O = t.providerMimeType ?? t.mime_type,
      A = D == null ? t.file_name : g(t.file_name, O),
      N = j(A, O),
      P = (e) => e.get(S, n);
    if (
      (t.library_artifact_type === `writing_block` && (e.get(V) || e.get(B))) ||
      !s({ browserPreview: N })
    ) {
      L(E, {
        file: {
          id: D ?? t.id,
          fileId: D ?? t.file_id,
          name: t.file_name,
          category: t.library_file_category,
          mimeType: O ?? null,
          libraryArtifactType: t.library_artifact_type,
          currentVersion: t.current_version_number,
          gizmoId: t.gizmo_id,
          originationThreadId: t.origination_thread_id,
          originationMessageId: t.origination_message_id,
          sizeBytes: t.file_size_bytes ?? null,
          modifiedAt: null,
          provider: t.mountedLibraryProvider ?? t.provider ?? _(t.id) ?? void 0,
          sourceUrl: t.sourceUrl,
        },
        fullWidth: !1,
        isAccessBlocked: P,
      });
      return;
    }
    await F(E, {
      browserPreview: N,
      conversationId: b(e.get, n),
      downloadFallback: !1,
      fileName: A,
      fullWidth: !1,
      gizmoId: t.gizmo_id,
      isAccessBlocked: P,
      mimeType: O,
      tabKey: t.id,
      versionNumber: t.current_version_number,
      target:
        D == null
          ? { type: `file-id`, fileId: t.file_id, libraryFileId: t.id }
          : {
              type: `mounted-library`,
              fileName: A,
              mountedLibraryFileId: D,
              mimeType: O,
              sourceFileName: t.file_name,
              sourceUrl: t.sourceUrl,
            },
    });
  }
}
function K() {
  return (K = e(() => {
    (r(), P(), D(), f(), y(), R(), E(), z(), c(), N(), i(), H(), C(), m(), O());
  }))();
}
export { W as i, G as n, U as r, K as t };
//# sourceMappingURL=navigate-with-file-preview-4ede5b1e5bdb.js.map
