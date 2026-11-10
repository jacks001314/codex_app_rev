import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cat as t, Pxt as n, pSt as r, xat as i, yat as a } from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as o,
  FFr as s,
  GMr as c,
  GVn as l,
  HKn as u,
  Hwr as d,
  Iwr as f,
  Kwr as p,
  NDr as m,
  Oi as h,
  Q as g,
  QGn as _,
  Tjn as v,
  XGn as y,
  XMr as b,
  Y as x,
  ci as S,
  dKn as C,
  dwn as w,
  eNr as T,
  gwr as E,
  hwn as D,
  jNn as O,
  lIr as k,
  lKn as A,
  pOr as j,
  qVn as M,
  qwr as N,
  sIr as P,
  si as F,
  tNr as I,
  wi as L,
  xNn as R,
  yjn as z,
  zFr as B,
  zKn as V,
} from "./app-initial-5851df3f6cb1.js";
async function H(e, t, n) {
  let o = e.get(s);
  if (o == null) return;
  let m = e.get(j),
    h = e.get(c),
    _ = e.get(b),
    x = () => e.get(j) === m && e.get(c) === h && e.get(b) === _ && e.get(T),
    C = await y(await A({ file_id: t.fileId, gizmo_id: t.gizmoId }, { showInline: !0 })),
    w = await u(new File([C], t.name, { type: t.mimeType ?? C.type }));
  if (w == null) throw Error(`Search image could not be prepared for editing`);
  if (!x() || e.get(s)?.key !== o.key) return;
  let k = v(e),
    M = { conversationId: k, pathname: i(k), routeKind: `chatgpt-thread`, routeTemplate: a },
    N = e.get(P).prepareNavigation(M.pathname);
  if (
    N == null ||
    (await N(), await e.when((e) => e.get(s)?.key !== o.key), !x() || e.get(s)?.pathname !== M.pathname)
  )
    return;
  let F = r(e, f, e.get(d, p(M))),
    I = F == null ? null : r(F, E, E.getKey?.(M));
  if (I == null) throw Error(`Search image draft route is unavailable`);
  let R = {
    height: w.height,
    id: t.fileId,
    libraryFileId: t.id,
    libraryProvider: `native`,
    mimeType: t.mimeType,
    name: t.name,
    size: C.size,
    source: `library`,
    width: w.width,
  };
  O(e, k, [`picture_v2`]);
  let z = t.fileId.startsWith(`file_`) ? `sediment://${t.fileId}` : `file-service://${t.fileId}`,
    B = {
      chatGptGenerationId: ``,
      height: w.height,
      id: t.id,
      sizeBytes: C.size,
      src: z,
      status: `completed`,
      type: `generated-image`,
      width: w.width,
    },
    V = null;
  if (
    !S(
      I,
      {
        alt: t.name,
        attachmentId: t.id,
        attachmentSrc: z,
        downloadSrc: w.previewSrc,
        imageSource: `uploaded`,
        onImageEditSubmit: async (e) => {
          if (!x()) return !1;
          let t = await g(I, { conversationId: k, image: B, request: e, sourceAttachment: R });
          return (t && V != null && D.closeTab(I, V), t);
        },
        openInEditor: !0,
        referrerPolicy: `no-referrer`,
        sourceImage: B,
        src: w.previewSrc,
        title: t.name,
      },
      { addToHistory: !1 },
    )
  ) {
    n(-1);
    return;
  }
  ((V = I.get(D.activeTab$)?.tabId ?? null),
    V != null &&
      (I.set(L, { attachment: R, tabId: V }),
      D.updateTab(I, V, {
        onClose: () => {
          (I.set(L, null),
            queueMicrotask(() => {
              I.get(D.tabs$).length === 0 &&
                !e.get(l, k)?.length &&
                e.get(s)?.pathname === M.pathname &&
                n(-1);
            }));
        },
      })));
}
function U() {
  return (U = e(() => {
    (n(), k(), w(), I(), R(), M(), V(), z(), m(), x(), h(), t(), F(), C(), B(), o(), N(), _());
  }))();
}
U();
export { H as openChatGptSearchImagePreview };
//# sourceMappingURL=open-image-preview-d1d86ce10426.js.map
