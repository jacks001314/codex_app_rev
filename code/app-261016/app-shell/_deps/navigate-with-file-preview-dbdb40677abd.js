import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { ACt as t, RFt as n, Vpt as r, ZSt as i, sct as a, zFt as o } from "./app-shared-2feb3d4c6fcc.js";
import {
  $cr as s,
  BRr as c,
  C2n as l,
  CLr as u,
  Fqn as d,
  Iqn as f,
  Ix as p,
  MOr as m,
  MYn as h,
  NOr as g,
  PYn as _,
  Px as v,
  QOr as y,
  S2n as b,
  Ujn as x,
  Ycr as S,
  _Xn as C,
  aYn as w,
  b2n as T,
  bp as E,
  ckr as D,
  ikr as O,
  lkr as k,
  mXn as A,
  nYn as j,
  np as M,
  qjn as N,
  rp as P,
  tp as F,
  vp as I,
  wLr as L,
  zOr as R,
  zRr as z,
} from "./app-initial-ad16eaadf81f.js";
import { n as B, r as V, t as H } from "./library-multiplayer-access-eac3de12d373.js";
function U({
  accountId: e,
  userId: t,
  file: n,
  browserLibraryFileId: i = n.id,
  currentVersion: a,
  modifiedAt: o,
  useDownloadUrlAsImageSrc: s = !1,
}) {
  let c = s && i != null && r(i) ? i : n.file_id;
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
      let t = await h({ ...n, file_id: c }, { browserLibraryFileId: i, showInline: !0 });
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
    (a(), _());
  }))();
}
function G(e, { conversationId: n, file: r, navigate: i, routeKind: a }) {
  let s = e.get(S),
    l = e.get(z),
    d = e.get(c),
    h = e.get(p),
    _ = i() !== !1;
  if (!_ || r == null || s == null) return _;
  return (
    v(r).catch((e) => {
      o.warning(`Library chat preview failed to open`, { safe: {}, sensitive: { error: e } });
    }),
    !0
  );
  async function v(r) {
    await e.when(
      (e) =>
        e.get(S)?.key !== s?.key ||
        e.get(z) !== l ||
        e.get(c) !== d ||
        (h?.entry?.node.id === r.id && e.get(p) !== h),
    );
    let i = e.get(S);
    if (i == null || l == null || d == null || e.get(z) !== l || e.get(c) !== d || !e.get(u) || e.get(x, n))
      return;
    let o = g({ pathname: i.pathname, routeTemplate: i.pathname, search: i.search }),
      _ = i.state;
    if (
      o.routeKind !== a ||
      (o.routeKind === `home` && _?.initialChatGptConversationId !== n) ||
      (o.routeKind === `chatgpt-thread` && b(e.get, o.conversationId) !== b(e.get, n))
    )
      return;
    o.routeKind === `chatgpt-thread` && (o.conversationId = e.get(T, o.conversationId) ?? o.conversationId);
    let v = t(e, y, e.get(O, D(o))),
      C = v == null ? null : t(v, m, m.getKey?.(o));
    if (C == null) return;
    let w = r.mountedLibraryFileId ?? (A(r.id) == null ? void 0 : r.id),
      k = r.providerMimeType ?? r.mime_type,
      M = w == null ? r.file_name : j(r.file_name, k),
      N = f(M, k),
      I = (e) => e.get(x, n);
    if (
      (r.library_artifact_type === `writing_block` && (e.get(V) || e.get(B))) ||
      !F({ browserPreview: N })
    ) {
      E(C, {
        file: {
          id: w ?? r.id,
          fileId: w ?? r.file_id,
          name: r.file_name,
          category: r.library_file_category,
          mimeType: k ?? null,
          libraryArtifactType: r.library_artifact_type,
          currentVersion: r.current_version_number,
          gizmoId: r.gizmo_id,
          originationThreadId: r.origination_thread_id,
          originationMessageId: r.origination_message_id,
          sizeBytes: r.file_size_bytes ?? null,
          modifiedAt: null,
          provider: r.mountedLibraryProvider ?? r.provider ?? A(r.id) ?? void 0,
          sourceUrl: r.sourceUrl,
        },
        fullWidth: !1,
        isAccessBlocked: I,
      });
      return;
    }
    await P(C, {
      browserPreview: N,
      conversationId: b(e.get, n),
      downloadFallback: !1,
      fileName: M,
      fullWidth: !1,
      gizmoId: r.gizmo_id,
      isAccessBlocked: I,
      mimeType: k,
      tabKey: r.id,
      versionNumber: r.current_version_number,
      target:
        w == null
          ? { type: `file-id`, fileId: r.file_id, libraryFileId: r.id }
          : {
              type: `mounted-library`,
              fileName: M,
              mountedLibraryFileId: w,
              mimeType: k,
              sourceFileName: r.file_name,
              sourceUrl: r.sourceUrl,
            },
    });
  }
}
function K() {
  return (K = e(() => {
    (i(), L(), d(), w(), l(), N(), M(), s(), R(), k(), n(), H(), v(), C(), I());
  }))();
}
export { W as i, G as n, U as r, K as t };
//# sourceMappingURL=navigate-with-file-preview-dbdb40677abd.js.map
