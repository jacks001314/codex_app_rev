import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cat as t,
  Ent as n,
  FR as r,
  LR as i,
  Rnt as a,
  hot as o,
  iO as s,
  jDt as c,
  kDt as l,
  lot as u,
  rO as d,
  wat as f,
  wnt as p,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as m,
  $Gn as h,
  $R as g,
  Au as _,
  FHt as v,
  Fu as y,
  Hlr as b,
  IHt as x,
  Ii as S,
  LEr as ee,
  LHt as C,
  Li as w,
  MIr as T,
  Mu as te,
  N8n as E,
  NNn as ne,
  Nu as D,
  Pen as O,
  Pu as k,
  QGn as A,
  Ru as j,
  Txn as M,
  Wlr as N,
  Yrn as P,
  _Vt as re,
  _an as ie,
  _i as ae,
  _ur as oe,
  _xn as se,
  ci as ce,
  dbr as F,
  eO as I,
  ez as L,
  gAn as R,
  gCr as z,
  gi as B,
  gur as V,
  hAn as H,
  iur as U,
  jIr as W,
  ju as G,
  ku as le,
  m_r as ue,
  nen as K,
  rur as de,
  si as fe,
  tDn as pe,
  tO as q,
  tin as me,
  ttn as J,
  uDn as Y,
  v8n as he,
  vi as X,
  xNn as ge,
  yCr as _e,
  yVt as ve,
  yi as Z,
} from "./app-initial-5851df3f6cb1.js";
import { n as ye, r as be, t as xe } from "./copy-generated-image-to-clipboard-bbf8cd2a0fd7.js";
function Se(
  e,
  {
    chatGptConversationId: t,
    displaySrc: r,
    hostId: i,
    image: a,
    imageAssetResolver: s,
    intl: c,
    onAddToChat: u,
    onAddedToChat: m,
    onDownload: v,
    onDownloadClick: x,
    onDownloaded: C,
    onOpenedInNewTab: w,
  },
) {
  let T = z(e),
    E = i ?? e.get(Y),
    D = e.get(R, T == null ? null : { kind: `app-server`, conversationId: T }),
    O = D?.hostId === E ? D.environmentId : void 0,
    k = b(a.src),
    A = Ce(a, k, r),
    j = S({ isAnimated: `isAnimated` in a && a.isAnimated === !0 }),
    M = [];
  M.push({
    id: `open-image-in-new-tab`,
    message: l({
      id: `codex.localConversation.image.contextMenu.openInNewTab`,
      defaultMessage: `Open image in new tab`,
      description: `Context menu action that opens the full-resolution image in a new app tab`,
    }),
    onSelect: () => {
      let t = () => {
        e.get(o).danger(
          c.formatMessage({
            id: `codex.localConversation.image.contextMenu.openFailure`,
            defaultMessage: `Could not open image`,
            description: `Error shown when an image cannot be opened in a new tab`,
          }),
          { errorAnalytics: { toastId: `imageContextMenu.openFailure` } },
        );
      };
      (async () => {
        let n =
          k == null && (!(`kind` in a) || /^https?:/i.test(a.src))
            ? a.src
            : await X({
                conversationId: T,
                environmentId: O,
                absoluteImageFilePath: k,
                hostId: E,
                imageAssetResolver: s,
                queryClient: e.queryClient,
                src: a.src,
              });
        if (n == null) {
          t();
          return;
        }
        ce(e, {
          alt: a.alt,
          attachmentSrc: `kind` in a || k != null ? n : a.src,
          imageAssetResolver: s,
          isAnimated: j.isAnimated,
          openInEditor: !0,
          readOnly: !0,
          ...(!(`kind` in a) && k == null
            ? {
                src: r,
                title: a.tabTitle,
                generatedImages: [a],
                generatedImagesSource: `provided`,
                initialImageId: a.id,
              }
            : { src: n, downloadSrc: n, title: `kind` in a ? a.alt : a.tabTitle }),
        }) && w?.();
      })().catch(t);
    },
  });
  let N = [a.src, r].find((e) => {
    let t = URL.parse(e);
    return t?.protocol === `https:` || t?.protocol === `http:`;
  });
  (N != null &&
    M.push({
      id: `copy-image-address`,
      message: l({
        id: `codex.localConversation.image.contextMenu.copyAddress`,
        defaultMessage: `Copy image address`,
        description: `Context menu action that copies the image's web address`,
      }),
      onSelect: () => {
        d(N);
      },
    }),
    j.canSelect &&
      M.push({
        id: `add-to-chat`,
        message: l({
          id: `codex.localConversation.generatedImage.contextMenu.addToChat`,
          defaultMessage: `Add to chat`,
          description: `Context menu action that attaches an image to the current chat composer`,
        }),
        onSelect: () => {
          if (u?.() === !1) return;
          let n = () => {
            e.get(o).danger(
              c.formatMessage({
                id: `codex.localConversation.imagePlayground.selectFailed`,
                defaultMessage: `Could not select image`,
                description: `Error shown when a generated image could not be added to the composer.`,
              }),
              { errorAnalytics: { toastId: `codex.localConversation.imagePlayground.selectFailed` } },
            );
          };
          se();
          let i = t ?? (e.value.routeKind === `chatgpt-thread` ? e.value.conversationId : void 0);
          if (i != null) {
            X({
              conversationId: T,
              environmentId: O,
              absoluteImageFilePath: k,
              hostId: E,
              imageAssetResolver: s,
              queryClient: e.queryClient,
              src: a.src,
            })
              .then(async (t) => {
                if (t == null) {
                  n();
                  return;
                }
                let { file: r } = y(t, A);
                (await ne(e, i, [r], {
                  isTemporaryChat:
                    e.value.routeKind === `chatgpt-thread` &&
                    e.value.conversationId === i &&
                    f(e.value.search ?? ``),
                })) && m?.();
              })
              .catch(n);
            return;
          }
          if (`kind` in a) {
            we(e, {
              absoluteImageFilePath: k,
              displaySrc: r,
              filename: A,
              hostId: E,
              image: a,
              imageAssetResolver: s,
              intl: c,
              onFailure: n,
              onAddedToChat: m,
            });
            return;
          }
          Z(e, {
            displaySrc: r,
            hostId: E,
            image: a,
            imageAssetResolver: s,
            onFailure: n,
            queryClient: e.queryClient,
          })
            .then((e) => {
              e && m?.();
            })
            .catch(n);
        },
      }),
    j.canCopy &&
      xe() &&
      M.push({
        id: `copy-image`,
        message: l({
          id: `codex.localConversation.generatedImage.contextMenu.copyImage`,
          defaultMessage: `Copy image`,
          description: `Context menu action that copies an image to the system clipboard`,
        }),
        onSelect: () => {
          (q(e, {
            action: p.CODEX_VISUAL_CONTENT_ACTION_COPY_IMAGE,
            surface: n.CODEX_VISUAL_CONTENT_SURFACE_NATIVE_IMAGE_CONTEXT_MENU,
          }),
            ye({
              conversationId: T,
              environmentId: O,
              filename: A,
              hostId: E,
              imageAssetResolver: s,
              onFailure: () => {
                e.get(o).danger(
                  c.formatMessage({
                    id: `codex.localConversation.image.contextMenu.copyFailure`,
                    defaultMessage: `Could not copy image`,
                    description: `Error shown when an image cannot be copied to the system clipboard`,
                  }),
                  { errorAnalytics: { toastId: `codex.localConversation.image.contextMenu.copyFailure` } },
                );
              },
              queryClient: e.queryClient,
              src: a.src,
            }));
        },
      }));
  let P = k == null ? null : e.get(ee, E);
  return (
    k != null &&
      P?.kind === `local` &&
      P.id === E &&
      M.push({
        id: `open-in-file-manager`,
        message: g(e.get(U)),
        onSelect: () => {
          ve({ cwd: null, hostId: E, path: k, target: `fileManager` });
        },
      }),
    M.push({
      id: `download-a-copy`,
      message: j.downloadCopyLabel,
      onSelect: () => {
        q(e, {
          action: p.CODEX_VISUAL_CONTENT_ACTION_SAVE_FILE,
          surface: n.CODEX_VISUAL_CONTENT_SURFACE_NATIVE_IMAGE_CONTEXT_MENU,
        });
        let t = () => {
          e.get(o).danger(
            c.formatMessage({
              id: `imageSidePanel.downloadFailure`,
              defaultMessage: `Could not download image`,
              description: `Error shown when the image toolbar download fails.`,
            }),
            { errorAnalytics: { toastId: `imageSidePanel.downloadFailure` } },
          );
        };
        if (v != null) {
          v().catch(t);
          return;
        }
        (x?.(),
          (async () => {
            let n =
              k != null || h(a.src)
                ? await X({
                    conversationId: T,
                    environmentId: O,
                    absoluteImageFilePath: k,
                    hostId: E,
                    imageAssetResolver: s,
                    queryClient: e.queryClient,
                    src: a.src,
                  })
                : a.src;
            (n != null &&
              (await te({
                downloadSrc: n,
                onDownloaded: C,
                suggestedFilename: le(c, j.downloadExtension ?? _(n) ?? _(a.src) ?? `png`, {
                  title: `sourceImage` in a ? a.sourceImage?.chatGptDisplayTitle : void 0,
                  gifSpeed: `sourceImage` in a ? a.sourceImage?.gifPlayback?.speed : void 0,
                }),
              }))) ||
              t();
          })().catch(t));
      },
    }),
    M
  );
}
function Ce(e, t, n) {
  if (!(`kind` in e)) return B(e);
  let i = (e.filename ?? (t == null ? e.alt.trim() : r(t))) || `image`;
  return /\.[a-z\d]+$/i.test(i) ? i : `${i}.${_(e.src) ?? _(n) ?? `png`}`;
}
function we(
  e,
  {
    absoluteImageFilePath: t,
    displaySrc: n,
    filename: r,
    hostId: i,
    image: a,
    imageAssetResolver: s,
    intl: c,
    onFailure: l,
    onAddedToChat: u,
  },
) {
  let d = a.src.startsWith(`data:image/`) ? a.src : void 0,
    f = z(e),
    p = i;
  if ((f == null ? e.value.routeKind !== `other` && (p = e.get(Y)) : (p = e.get(m, f)), f != null)) {
    let t =
      e.get(v, [`conversation`, f])?.model ??
      e.get(C, [`conversation`, f])?.model ??
      e.get(E, f)?.settings.model;
    if (
      e.queryClient
        .getQueriesData({ queryKey: [...V, p] })
        .flatMap(([, e]) => e?.data ?? [])
        .find(({ model: e }) => e === t)
        ?.inputModalities.includes(`image`) === !1
    ) {
      e.get(o).danger(
        c.formatMessage({
          id: `composer.imageInputsUnsupported`,
          defaultMessage: `This model does not support image inputs. Try a different model`,
          description: `Toast shown when a user tries to add images for a text-only model`,
        }),
        { errorAnalytics: { toastId: `composer.imageInputsUnsupported` } },
      );
      return;
    }
  }
  let h = (e) => {
    l();
  };
  if (d != null)
    try {
      Q(e, p, d);
    } catch (e) {
      h(e);
      return;
    }
  let g = T(),
    _ = e.get(K) === `cloud` || d == null;
  if (
    (J(e, (e) => {
      e.imageAttachments.push({
        filename: r,
        id: g,
        localPath: i === p ? (t ?? void 0) : void 0,
        previewSrc: d ?? n,
        src: d ?? a.src,
        uploadStatus: _ ? `uploading` : `idle`,
      });
    }),
    !_)
  ) {
    u?.();
    return;
  }
  let y = P(e, { hostId: p, id: g }),
    b = (t) => {
      y.isPending() &&
        (y.fail(),
        J(e, (e) => {
          ((e.imageAttachments = e.imageAttachments.filter((e) => e.id !== g)),
            (e.imageCommentDrafts = e.imageCommentDrafts.filter((e) => e.attachmentId !== g)));
        }),
        h(t));
    };
  (async () => {
    let n =
      d ??
      (await X({
        conversationId: f,
        absoluteImageFilePath: t,
        hostId: i,
        imageAssetResolver: s,
        queryClient: e.queryClient,
        src: a.src,
      }));
    if (!y.isPending()) return;
    if (n == null) {
      b();
      return;
    }
    d ?? Q(e, p, n);
    let o = e.get(K) === `cloud`;
    if (
      (J(e, (e) => {
        let t = e.imageAttachments.find((e) => e.id === g);
        t != null &&
          ((t.src = n), (t.previewSrc = n), (t.uploadSrc = n), (t.uploadStatus = o ? `uploading` : `idle`));
      }),
      o)
    ) {
      let t = await k({ dataUrl: n, filename: r });
      if (!y.isPending()) return;
      J(e, (e) => {
        let n = e.imageAttachments.find((e) => e.id === g);
        n != null && Object.assign(n, t);
      });
    }
    (y.succeed(), u?.());
  })().catch(b);
}
function Q(e, t, n) {
  z(e);
}
function $() {
  return ($ = e(() => {
    (a(),
      F(),
      c(),
      W(),
      I(),
      he(),
      ge(),
      t(),
      ie(),
      O(),
      M(),
      x(),
      me(),
      D(),
      u(),
      re(),
      de(),
      w(),
      G(),
      fe(),
      N(),
      oe(),
      _e(),
      pe(),
      ue(),
      L(),
      H(),
      j(),
      A(),
      s(),
      i(),
      be(),
      ae());
  }))();
}
export { $ as n, Se as t };
//# sourceMappingURL=generated-image-context-menu-c17f000c3733.js.map
