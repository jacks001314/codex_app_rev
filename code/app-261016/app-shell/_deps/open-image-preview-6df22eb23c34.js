import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { ACt as t, Uot as n, Vot as r, ZSt as i, zot as a } from "./app-shared-2feb3d4c6fcc.js";
import {
  $cr as o,
  ADn as s,
  Air as c,
  BRr as l,
  CLr as u,
  GIn as d,
  Hp as f,
  IMr as p,
  JPn as m,
  Kp as h,
  MOr as g,
  MYn as _,
  Mir as v,
  PDn as y,
  PYn as b,
  Q as x,
  QOr as S,
  VPn as C,
  Ycr as w,
  bi as T,
  cGn as E,
  ckr as D,
  ikr as O,
  lkr as k,
  nMr as A,
  pXn as j,
  tLn as M,
  tt as N,
  uGn as P,
  uXn as F,
  wLr as I,
  xYn as L,
  yYn as R,
  yi as z,
  zOr as B,
  zRr as V,
} from "./app-initial-ad16eaadf81f.js";
async function H(e, n, i) {
  let o = e.get(w);
  if (o == null) return;
  let s = e.get(p),
    d = e.get(V),
    h = e.get(l),
    v = () => e.get(p) === s && e.get(V) === d && e.get(l) === h && e.get(u),
    b = await R(await _({ file_id: n.fileId, gizmo_id: n.gizmoId }, { showInline: !0 })),
    x = await j(new File([b], n.name, { type: n.mimeType ?? b.type }));
  if (x == null) throw Error(`Search image could not be prepared for editing`);
  if (!v() || e.get(w)?.key !== o.key) return;
  let C = m(e),
    k = { conversationId: C, pathname: r(C), routeKind: `chatgpt-thread`, routeTemplate: a },
    A = e.get(c).prepareNavigation(k.pathname);
  if (
    A == null ||
    (await A(), await e.when((e) => e.get(w)?.key !== o.key), !v() || e.get(w)?.pathname !== k.pathname)
  )
    return;
  let P = t(e, S, e.get(O, D(k))),
    F = P == null ? null : t(P, g, g.getKey?.(k));
  if (F == null) throw Error(`Search image draft route is unavailable`);
  let I = {
    height: x.height,
    id: n.fileId,
    libraryFileId: n.id,
    libraryProvider: `native`,
    mimeType: n.mimeType,
    name: n.name,
    size: b.size,
    source: `library`,
    width: x.width,
  };
  M(e, C, [`picture_v2`]);
  let L = n.fileId.startsWith(`file_`) ? `sediment://${n.fileId}` : `file-service://${n.fileId}`,
    z = {
      chatGptGenerationId: ``,
      height: x.height,
      id: n.id,
      sizeBytes: b.size,
      src: L,
      status: `completed`,
      type: `generated-image`,
      width: x.width,
    },
    B = null;
  if (
    !T(
      F,
      {
        alt: n.name,
        attachmentId: n.id,
        attachmentSrc: L,
        downloadSrc: x.previewSrc,
        imageSource: `uploaded`,
        onImageEditSubmit: async (e) => {
          if (!v()) return !1;
          let t = await N(F, { conversationId: C, image: z, request: e, sourceAttachment: I });
          return (t && B != null && y.closeTab(F, B), t);
        },
        openInEditor: !0,
        referrerPolicy: `no-referrer`,
        sourceImage: z,
        src: x.previewSrc,
        title: n.name,
      },
      { addToHistory: !1 },
    )
  ) {
    i(-1);
    return;
  }
  ((B = F.get(y.activeTab$)?.tabId ?? null),
    B != null &&
      (F.set(f, { attachment: I, tabId: B }),
      y.updateTab(F, B, {
        onClose: () => {
          (F.set(f, null),
            queueMicrotask(() => {
              F.get(y.tabs$).length === 0 &&
                !e.get(E, C)?.length &&
                e.get(w)?.pathname === k.pathname &&
                i(-1);
            }));
        },
      })));
}
function U() {
  return (U = e(() => {
    (i(), v(), s(), I(), d(), P(), F(), C(), A(), x(), h(), n(), z(), b(), o(), B(), k(), L());
  }))();
}
U();
export { H as openChatGptSearchImagePreview };
//# sourceMappingURL=open-image-preview-6df22eb23c34.js.map
