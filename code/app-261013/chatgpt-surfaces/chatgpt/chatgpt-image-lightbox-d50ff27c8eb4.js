const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./overlay-e5efab305c27.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./composer-scope-provider-cb17532fb9ac.js",
      "./local-generated-image-side-panel-7b37869cd190.js",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./image-loading-state-af1ec7ad2f7e.js",
      "./image-loading-state-8c612077a546.css",
      "./generated-image-placeholder-8a3a4a0b8b61.js",
      "./generated-image-placeholder-696fd55735f4.css",
      "./generated-image-source-27993f6c1759.js",
      "./generated-image-context-menu-c17f000c3733.js",
      "./copy-generated-image-to-clipboard-bbf8cd2a0fd7.js",
      "./image-data-65a946774990.js",
      "./image-edit-toolbar-5598d748a2a3.js",
      "./deleted-image-placeholder-303f4bbcbf13.js",
      "./image-side-panel-35356e8bb6f2.js",
      "./annotation-mode-analytics-883da7ddba89.js",
      "./artifact-accessories-fe3be839fff5.js",
      "./layout-7a4e7177e626.js",
      "./menu-items-b78a5ea99a11.js",
      "./query-4ecbf204b1e6.js",
      "./library-file-metadata-18e455d7ac7c.js",
      "./artifact-preview-header-b624a4e82866.js",
      "./use-app-connect-flow-7088479fda99.js",
      "./app-connect-queries-d683cc7b9c3b.js",
      "./availability-7c47246e0e1c.js",
      "./microsoft-oauth-bundle-e77977413c17.js",
      "./download-submenu-2fee9f2333f7.js",
      "./app-connect-modal-fb7e1b0124f4.js",
      "./app-connect-skeleton-ca153a13f650.js",
      "./save-cloud-file-copy-a8fdb6c780fc.js",
      "./download-file-manager-message-b11c6f057796.js",
      "./use-target-apps-df427db284a8.js",
      "./codex-analytics-attribution-da3e14c84e21.js",
      "./artifact-originating-turn-4517ac8fac03.js",
      "./artifact-preview-zoom-be9e5386c42a.js",
      "./image-favorite-actions-308dd8bfc2aa.js",
      "./favorite-folders-6a0ba920b2d1.js",
      "./generated-image-gallery-context-menu-42863b41c1d9.js",
      "./content-quick-chat-overlay-fae2ee1c31a8.js",
      "./drop-zones-aa6986de4c9a.js",
      "./quick-chat-floating-surface-51ff4a9417a5.js",
      "./quick-chat-floating-resize-handles-884029d75925.js",
      "./quick-chat-floating-surface-aa86cc62cf7b.css",
      "./floating-chat-dock-menu-ad701bd452d0.js",
      "./inline-playback-e4c8461b14e2.js",
      "./generated-image-file-info-d6d1a5de66bc.js",
      "./decoder-c080d3c57107.js",
      "./composer-1bf0334fecde.js",
      "./row-cb5037d08176.js",
      "./row-4f973c2b090e.css",
      "./speed-menu-425faa87f5ea.js",
      "./image-tools-toolbar-a580950d5cce.js",
      "./drawing-size-slider-666a00bfccd4.js",
      "./image-edit-size-control-250dfdf27978.js",
      "./image-tools-toolbar-5b451d990a61.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  CS as n,
  GE as r,
  IDt as i,
  Jbt as a,
  Pxt as o,
  VDt as s,
  Vxt as c,
  WE as ee,
  fPt as l,
  jDt as u,
  pPt as d,
  rst as f,
  tE as te,
  vzt as p,
  xMt as m,
  yzt as h,
  z4 as g,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cs as ne,
  Cwr as _,
  MRt as re,
  NRt as ie,
  Ss as v,
  eDr as y,
  nc as b,
  oDr as ae,
  rc as oe,
  ws as x,
  wwr as se,
  xs as ce,
} from "./app-initial-5851df3f6cb1.js";
import { n as le, t as S } from "./generated-image-source-27993f6c1759.js";
import { n as C, t as ue } from "./action-2329974d646c.js";
import { n as de, t as fe } from "./image-source-link-2067f5c323fe.js";
function w(e) {
  let t = (0, he.c)(106),
    {
      getThumbnail: n,
      imageRef: r,
      onClose: o,
      onDownloadClick: l,
      onNavigate: u,
      portalContainer: d,
      request: f,
      variant: p,
    } = e,
    m = s(),
    h = (0, T.useContext)(ne),
    g = d ?? h,
    _ = oe(),
    ie = !c(se) && g == null,
    v = !ie,
    y;
  t[0] === v ? (y = t[1]) : ((y = { disableExposureLog: v }), (t[0] = v), (t[1] = y));
  let b = ae(`2983946247`, y),
    x;
  t[2] === b ? (x = t[3]) : ((x = b.get(`image_overlay_enabled`, !1)), (t[2] = b), (t[3] = x));
  let S = ie && x,
    [C, de] = (0, T.useState)(f.selectedIndex),
    w;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((w = []), (t[4] = w)) : (w = t[4]);
  let [D, _e] = (0, T.useState)(w),
    [ve] = (0, T.useState)(me),
    O = f.images[C],
    ye = O?.src ?? ``,
    k;
  t[5] === f.imageAssetContext?.conversationId
    ? (k = t[6])
    : ((k = f.imageAssetContext?.conversationId ?? a(`chatgpt:image-lightbox`)),
      (t[5] = f.imageAssetContext?.conversationId),
      (t[6] = k));
  let be = f.imageAssetContext?.imageAssetResolver,
    A;
  t[7] !== ye || t[8] !== k || t[9] !== be
    ? ((A = { src: ye, conversationId: k, imageAssetResolver: be, shouldLoadFileDataUrl: !1 }),
      (t[7] = ye),
      (t[8] = k),
      (t[9] = be),
      (t[10] = A))
    : (A = t[10]);
  let { previewSrc: j } = le(A);
  if (O == null) return null;
  let M;
  t[11] !== D || t[12] !== O.fallbackSrc || t[13] !== j
    ? ((M = j != null && D.includes(j) ? (O.fallbackSrc ?? j) : j),
      (t[11] = D),
      (t[12] = O.fallbackSrc),
      (t[13] = j),
      (t[14] = M))
    : (M = t[14]);
  let N = M,
    P;
  t[15] !== D || t[16] !== N
    ? ((P = N != null && D.includes(N)), (t[15] = D), (t[16] = N), (t[17] = P))
    : (P = t[17]);
  let xe = P,
    Se = f.favorites?.sources[C],
    F;
  t[18] !== Se || t[19] !== f.favorites || t[20] !== S
    ? ((F =
        Se == null || f.favorites == null
          ? void 0
          : (0, E.jsx)(ue, {
              source: Se,
              sources: f.favorites.sources.flatMap(pe),
              conversationId: f.favorites.conversationId,
              messageId: f.favorites.messageId,
              surface: `image_lightbox`,
              presentation: S ? `menuItem` : `button`,
            })),
      (t[18] = Se),
      (t[19] = f.favorites),
      (t[20] = S),
      (t[21] = F))
    : (F = t[21]);
  let I = F,
    L = O.destinationUrl,
    Ce = C + 1,
    R;
  t[22] !== O.title || t[23] !== Ce || t[24] !== m
    ? ((R =
        O.title ??
        m.formatMessage(
          {
            id: `quickChat.imageLightbox.imageAlt`,
            defaultMessage: `Image {imageNumber}`,
            description: `Fallback alt text for an image opened in the ChatGPT image lightbox`,
          },
          { imageNumber: Ce },
        )),
      (t[22] = O.title),
      (t[23] = Ce),
      (t[24] = m),
      (t[25] = R))
    : (R = t[25]);
  let z = R,
    B;
  t[26] !== f.images.length || t[27] !== C
    ? ((B =
        f.images.length > 1
          ? (0, E.jsx)(`span`, {
              className: `shrink-0 select-none`,
              role: `status`,
              children: (0, E.jsx)(re, {
                children: (0, E.jsx)(i, {
                  id: `chatgptConversations.imageLightbox.position`,
                  defaultMessage: `{current} of {total}`,
                  description: `Position shown below the selected image in the ChatGPT image lightbox. current is the one-based image number and total is the number of images in the gallery.`,
                  values: { current: C + 1, total: f.images.length },
                }),
              }),
            })
          : void 0),
      (t[26] = f.images.length),
      (t[27] = C),
      (t[28] = B))
    : (B = t[28]);
  let V = B,
    H;
  t[29] !== D || t[30] !== O.fallbackSrc || t[31] !== xe || t[32] !== j
    ? ((H = xe
        ? (0, E.jsx)(`div`, {
            className: `m-auto select-none`,
            children: (0, E.jsx)(ee, {
              role: `status`,
              variant: `callout`,
              layout: `vertical`,
              content: (0, E.jsx)(i, {
                id: `chatgptConversations.imageLightbox.loadFailed`,
                defaultMessage: `Couldn't load this image`,
                description: `Shown when both the full-size image and its thumbnail fail to load in the image viewer`,
              }),
              onPrimaryCtaClick: () => _e(D.filter((e) => e !== j && e !== O.fallbackSrc)),
              primaryCtaText: (0, E.jsx)(i, {
                id: `chatgptConversations.imageLightbox.retry`,
                defaultMessage: `Try again`,
                description: `Button to retry loading an image in the image viewer`,
              }),
            }),
          })
        : void 0),
      (t[29] = D),
      (t[30] = O.fallbackSrc),
      (t[31] = xe),
      (t[32] = j),
      (t[33] = H))
    : (H = t[33]);
  let U = H,
    W;
  t[34] !== O.attribution ||
  t[35] !== O.title ||
  t[36] !== L ||
  t[37] !== g ||
  t[38] !== _?.shouldBlockExternalEgress
    ? ((W = (e) =>
        L == null
          ? null
          : (0, E.jsx)(fe, {
              className: e,
              href: L,
              title: O.title,
              attribution: O.attribution,
              loadRemote: _?.shouldBlockExternalEgress !== !0,
              openTarget: g == null ? `external-browser` : void 0,
            })),
      (t[34] = O.attribution),
      (t[35] = O.title),
      (t[36] = L),
      (t[37] = g),
      (t[38] = _?.shouldBlockExternalEgress),
      (t[39] = W))
    : (W = t[39]);
  let G = W,
    K;
  t[40] !== D || t[41] !== N
    ? ((K = () => {
        N != null && _e([...D, N]);
      }),
      (t[40] = D),
      (t[41] = N),
      (t[42] = K))
    : (K = t[42]);
  let q = K,
    J;
  t[43] !== d || t[44] !== ve
    ? ((J = (e) => {
        (e.preventDefault(), d ?? ve?.focus());
      }),
      (t[43] = d),
      (t[44] = ve),
      (t[45] = J))
    : (J = t[45]);
  let Y = J,
    we;
  t[46] !== u || t[47] !== f.images.length || t[48] !== C
    ? ((we =
        C >= f.images.length - 1
          ? void 0
          : () => {
              (de(C + 1), u?.(C + 1, `next`));
            }),
      (t[46] = u),
      (t[47] = f.images.length),
      (t[48] = C),
      (t[49] = we))
    : (we = t[49]);
  let X = we,
    Te;
  t[50] !== u || t[51] !== C
    ? ((Te =
        C === 0
          ? void 0
          : () => {
              (de(C - 1), u?.(C - 1, `previous`));
            }),
      (t[50] = u),
      (t[51] = C),
      (t[52] = Te))
    : (Te = t[52]);
  let Z = Te;
  if (S) {
    let e;
    t[53] !== n || t[54] !== C
      ? ((e = () => n?.(C) ?? null), (t[53] = n), (t[54] = C), (t[55] = e))
      : (e = t[55]);
    let i = j != null && D.includes(j) ? (O.fallbackSrc ?? O.src) : O.src,
      a = N ?? O.src,
      s;
    t[56] === f.viewOnly
      ? (s = t[57])
      : ((s = (e) => {
          let { saveAction: t } = e;
          return (0, E.jsx)(E.Fragment, { children: f.viewOnly ? null : t });
        }),
        (t[56] = f.viewOnly),
        (t[57] = s));
    let c;
    t[58] !== z || t[59] !== I || t[60] !== O.title
      ? ((c = () => (0, E.jsx)(te, { fileType: `image`, title: O.title ?? z, children: I })),
        (t[58] = z),
        (t[59] = I),
        (t[60] = O.title),
        (t[61] = c))
      : (c = t[61]);
    let ee = N ?? O.src,
      u = O.title ?? z,
      d;
    t[62] !== z ||
    t[63] !== U ||
    t[64] !== O.downloadFileName ||
    t[65] !== r ||
    t[66] !== l ||
    t[67] !== q ||
    t[68] !== i ||
    t[69] !== a ||
    t[70] !== s ||
    t[71] !== c ||
    t[72] !== ee ||
    t[73] !== u
      ? ((d = {
          alt: z,
          attachmentSrc: i,
          downloadSrc: a,
          downloadFilename: O.downloadFileName,
          imageRef: r,
          loadingContent: U,
          onImageError: q,
          onDownloadClick: l,
          readOnly: !0,
          referrerPolicy: `no-referrer`,
          renderHeaderActions: s,
          renderHeaderTitle: c,
          src: ee,
          title: u,
        }),
        (t[62] = z),
        (t[63] = U),
        (t[64] = O.downloadFileName),
        (t[65] = r),
        (t[66] = l),
        (t[67] = q),
        (t[68] = i),
        (t[69] = a),
        (t[70] = s),
        (t[71] = c),
        (t[72] = ee),
        (t[73] = u),
        (t[74] = d))
      : (d = t[74]);
    let p;
    t[75] === G ? (p = t[76]) : ((p = G()), (t[75] = G), (t[76] = p));
    let m;
    t[77] !== V || t[78] !== p
      ? ((m = (0, E.jsxs)(E.Fragment, { children: [V, p] })), (t[77] = V), (t[78] = p), (t[79] = m))
      : (m = t[79]);
    let h;
    return (
      t[80] !== o || t[81] !== Y || t[82] !== X || t[83] !== Z || t[84] !== e || t[85] !== d || t[86] !== m
        ? ((h = (0, E.jsx)(ge, {
            getThumbnail: e,
            image: d,
            bottomContent: m,
            onClose: o,
            onCloseAutoFocus: Y,
            onNextImage: X,
            onPreviousImage: Z,
          })),
          (t[80] = o),
          (t[81] = Y),
          (t[82] = X),
          (t[83] = Z),
          (t[84] = e),
          (t[85] = d),
          (t[86] = m),
          (t[87] = h))
        : (h = t[87]),
      h
    );
  }
  let Ee = L == null ? (O.title ?? void 0) : void 0,
    De = g != null,
    Oe = p === `window` ? `all` : `top-and-sides`,
    Q;
  t[88] === o
    ? (Q = t[89])
    : ((Q = (e) => {
        e || o();
      }),
      (t[88] = o),
      (t[89] = Q));
  let ke = L == null ? void 0 : G,
    Ae = N ?? `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==`,
    $;
  return (
    t[90] !== z ||
    t[91] !== U ||
    t[92] !== I ||
    t[93] !== Y ||
    t[94] !== q ||
    t[95] !== X ||
    t[96] !== Z ||
    t[97] !== g ||
    t[98] !== V ||
    t[99] !== Ee ||
    t[100] !== De ||
    t[101] !== Oe ||
    t[102] !== Q ||
    t[103] !== ke ||
    t[104] !== Ae
      ? (($ = (0, E.jsx)(ce, {
          alt: z,
          caption: Ee,
          bottomContent: V,
          containedInPortal: De,
          containerResizeEdges: Oe,
          imageReferrerPolicy: `no-referrer`,
          onCloseAutoFocus: Y,
          onImageError: q,
          onNextImage: X,
          onOpenChange: Q,
          onPreviousImage: Z,
          open: !0,
          portalContainer: g,
          previewContent: U,
          renderBottomAction: ke,
          toolbarContent: I,
          showDownload: !1,
          src: Ae,
        })),
        (t[90] = z),
        (t[91] = U),
        (t[92] = I),
        (t[93] = Y),
        (t[94] = q),
        (t[95] = X),
        (t[96] = Z),
        (t[97] = g),
        (t[98] = V),
        (t[99] = Ee),
        (t[100] = De),
        (t[101] = Oe),
        (t[102] = Q),
        (t[103] = ke),
        (t[104] = Ae),
        (t[105] = $))
      : ($ = t[105]),
    $
  );
}
function pe(e) {
  return e == null ? [] : [e];
}
function me() {
  let e = document.activeElement;
  for (; e?.shadowRoot?.activeElement != null;) e = e.shadowRoot.activeElement;
  return e instanceof HTMLElement ? e : null;
}
var he, T, E, ge;
function D() {
  return (D = e(() => {
    ((he = p()),
      o(),
      f(),
      (T = h()),
      u(),
      ie(),
      r(),
      g(),
      S(),
      x(),
      v(),
      _(),
      y(),
      n(),
      b(),
      de(),
      C(),
      (E = m()),
      d(),
      (ge = t(
        async () =>
          (
            await l(
              async () => {
                let { ImagePreviewOverlay: e } = await import(`./overlay-e5efab305c27.js`);
                return { ImagePreviewOverlay: e };
              },
              __vite__mapDeps([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
                26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
                49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
              ]),
              import.meta.url,
            )
          ).ImagePreviewOverlay,
      )));
  }))();
}
export { D as n, w as t };
//# sourceMappingURL=chatgpt-image-lightbox-d50ff27c8eb4.js.map
