import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  BRt as t,
  B_t as n,
  CXt as r,
  Dmt as i,
  EXt as a,
  Eht as o,
  H_t as s,
  Irt as c,
  KWt as l,
  Kht as u,
  MXt as d,
  NXt as f,
  O3t as p,
  PRt as m,
  QWt as h,
  SFt as g,
  TFt as _,
  Tmt as v,
  Urt as y,
  ZWt as b,
  _6t as x,
  _gt as S,
  dqt as C,
  fxt as w,
  gRt as T,
  kRt as E,
  kht as D,
  mgt as O,
  mxt as k,
  pqt as A,
  qWt as j,
  uqt as M,
  xRt as N,
  zRt as P,
} from "./app-initial-f094ef01c64d.js";
import {
  $l as F,
  Hl as I,
  Ul as L,
  ao as R,
  eu as z,
  na as B,
  no as V,
  ta as H,
} from "./app-primary-4c40d73a1074.js";
async function U(e, t, n) {
  let i = e.get(r);
  if (i == null) return;
  let a = e.get(o),
    c = e.get(l),
    f = e.get(j),
    p = () => e.get(o) === a && e.get(l) === c && e.get(j) === f && e.get(b),
    h = await v(await V(e.get(w), { file_id: t.fileId, gizmo_id: t.gizmoId }, { showInline: !0 })),
    g = await s(new File([h], t.name, { type: t.mimeType ?? h.type }));
  if (g == null) throw Error(`Search image could not be prepared for editing`);
  if (!p() || e.get(r)?.key !== i.key) return;
  let S = O(e),
    D = { conversationId: S, pathname: C(S), routeKind: `chatgpt-thread`, routeTemplate: M },
    k = e.get(d).prepareNavigation(D.pathname);
  if (
    k == null ||
    (await k(),
    await e.when((e) => e.get(r)?.key !== i.key),
    !p() || e.get(r)?.pathname !== D.pathname)
  )
    return;
  let A = x(e, E, e.get(m, P(D))),
    N = A == null ? null : x(A, T, T.getKey?.(D));
  if (N == null) throw Error(`Search image draft route is unavailable`);
  let F = {
    height: g.height,
    id: t.fileId,
    libraryFileId: t.id,
    mimeType: t.mimeType,
    name: t.name,
    size: h.size,
    source: `library`,
    width: g.width,
  };
  y(e, S, [`picture_v2`]);
  let I = t.fileId.startsWith(`file_`) ? `sediment://${t.fileId}` : `file-service://${t.fileId}`,
    R = null;
  if (
    !z(N, {
      alt: t.name,
      attachmentId: t.id,
      attachmentSrc: I,
      downloadSrc: g.previewSrc,
      imageSource: `uploaded`,
      onImageEditSubmit: async (e) => {
        if (!p()) return !1;
        let n = await L(N, {
          conversationId: S,
          image: {
            chatGptGenerationId: ``,
            height: g.height,
            id: t.id,
            sizeBytes: h.size,
            src: I,
            status: `completed`,
            type: `generated-image`,
            width: g.width,
          },
          request: e,
          sourceAttachment: F,
        });
        return (n && R != null && _.closeTab(N, R), n);
      },
      openInEditor: !0,
      referrerPolicy: `no-referrer`,
      src: g.previewSrc,
      title: t.name,
    })
  ) {
    n(-1);
    return;
  }
  ((R = N.get(_.activeTab$)?.tabId ?? null),
    R != null &&
      (N.set(H, { attachment: F, tabId: R }),
      _.updateTab(N, R, {
        onClose: () => {
          (N.set(H, null),
            queueMicrotask(() => {
              N.get(_.tabs$).length === 0 &&
                e.get(u, S) == null &&
                e.get(r)?.pathname === D.pathname &&
                n(-1);
            }));
        },
      })));
}
e(() => {
  (p(), f(), g(), h(), k(), c(), n(), S(), D(), I(), B(), A(), F(), R(), a(), N(), t(), i());
})();
export { U as openChatGptSearchImagePreview };
//# sourceMappingURL=open-image-preview-d7d21c13ffb5.js.map
