import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  CS as n,
  Cot as r,
  GE as i,
  IDt as a,
  Ixt as o,
  Pxt as s,
  Vxt as c,
  WE as l,
  Xot as u,
  Yot as d,
  hrt as f,
  jDt as p,
  nE as m,
  t3 as h,
  vrt as g,
  vzt as _,
  wot as v,
  xMt as y,
  yzt as b,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ep as x,
  GMr as S,
  Iy as ee,
  JPn as C,
  KKn as w,
  Ly as T,
  OPn as E,
  WKn as D,
  XMr as te,
  XPn as ne,
  bp as O,
  ipt as k,
  kPn as A,
  kp as j,
  tNr as M,
  tpt as N,
  wp as P,
  xp as F,
} from "./app-initial-5851df3f6cb1.js";
import { i as I, r as L } from "./library-file-preview-kind-e4aa21315c05.js";
import { n as R, r as z } from "./library-cloud-file-preview-dc5b405ea2fb.js";
import { i as B, r as V } from "./preview-layout-654555235726.js";
function H(e) {
  let t = (0, U.c)(19),
    { fileId: n, provider: i, sourceUrl: s, openTarget: c, onResolve: l, preferDocumentBrowser: u } = e,
    d = o(r),
    f;
  t[0] !== n || t[1] !== l || t[2] !== c || t[3] !== u || t[4] !== d || t[5] !== s
    ? ((f = (e) => {
        if (s == null) {
          l();
          return;
        }
        (k(d, n),
          ne({ event: e, href: s, openTarget: c ?? (u ? j(e) : void 0), initiator: `sites_library` }));
      }),
      (t[0] = n),
      (t[1] = l),
      (t[2] = c),
      (t[3] = u),
      (t[4] = d),
      (t[5] = s),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] === i ? (p = t[8]) : ((p = D(i)), (t[7] = i), (t[8] = p));
  let h;
  t[9] === p
    ? (h = t[10])
    : ((h = (0, W.jsx)(a, {
        id: `libraryProviderPreview.openOriginal`,
        defaultMessage: `Open in {provider}`,
        description: `Button in a connected file preview that opens the original file in its provider. The provider value is a product name such as Google Drive, Box, Dropbox, SharePoint, or OneDrive`,
        values: { provider: p },
      })),
      (t[9] = p),
      (t[10] = h));
  let g;
  t[11] !== c || t[12] !== u || t[13] !== s
    ? ((g = s == null ? null : (0, W.jsx)(E, { href: s, openTarget: c ?? (u ? j() : void 0) })),
      (t[11] = c),
      (t[12] = u),
      (t[13] = s),
      (t[14] = g))
    : (g = t[14]);
  let _;
  return (
    t[15] !== f || t[16] !== h || t[17] !== g
      ? ((_ = (0, W.jsxs)(m, { onClick: f, children: [h, g] })),
        (t[15] = f),
        (t[16] = h),
        (t[17] = g),
        (t[18] = _))
      : (_ = t[18]),
    _
  );
}
var U, W;
function G() {
  return (G = e(() => {
    ((U = _()), s(), p(), C(), A(), N(), v(), n(), w(), (W = y()));
  }))();
}
function K(e) {
  let n = (0, q.c)(9),
    { file: i, identity: s, onClose: c, onPreview: d, openTarget: p, preferDocumentBrowser: m } = e,
    h = o(r),
    g = P(i),
    _;
  n[0] !== i || n[1] !== s || n[2] !== h.query
    ? ((_ = h.query.getOptions(O, { file: i, identity: s })),
      (n[0] = i),
      (n[1] = s),
      (n[2] = h.query),
      (n[3] = _))
    : (_ = n[3]);
  let { data: v, isPending: y, isError: b, error: x, refetch: S } = u(_),
    C =
      !(x instanceof f && (x.status === 401 || x.status === 403)) &&
      L({ file_name: i.name, library_file_category: i.category, mime_type: i.mimeType }) !== `unsupported`,
    w = V,
    T = y
      ? (0, J.jsx)(ee, {})
      : (0, J.jsx)(`div`, {
          className: `flex h-full items-center justify-center p-6`,
          children: (0, J.jsxs)(`div`, {
            className: `flex max-w-sm flex-col items-center gap-4 text-center select-none`,
            children: [
              b || v == null || g == null
                ? (0, J.jsx)(l, {
                    ariaLive: `polite`,
                    content: (0, J.jsx)(a, {
                      id: `connectedFileSource.unavailable`,
                      defaultMessage: `Unable to open the original file`,
                      description: `Error when a connected file's original provider link could not be retrieved; Retry tries again and Preview opens a supported local viewer`,
                    }),
                    role: `status`,
                    type: `error`,
                  })
                : (0, J.jsx)(a, {
                    id: `connectedFileSource.ready`,
                    defaultMessage: `Open this file in {provider}`,
                    description: `Prompt after resolving a connected file's original link. The provider is a product name such as Dropbox, SharePoint, or OneDrive`,
                    values: { provider: D(g.provider) },
                  }),
              (0, J.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  v != null && g != null
                    ? (0, J.jsx)(H, {
                        fileId: i.fileId,
                        provider: g.provider,
                        sourceUrl: v,
                        openTarget: p,
                        preferDocumentBrowser: m,
                      })
                    : (0, J.jsx)(t, {
                        color: `outline`,
                        onClick: () => void S(),
                        children: (0, J.jsx)(a, {
                          id: `connectedFileSource.retry`,
                          defaultMessage: `Retry`,
                          description: `Button that retries retrieving the original link for a connected file`,
                        }),
                      }),
                  C
                    ? (0, J.jsx)(t, {
                        color: `outline`,
                        onClick: d,
                        children: (0, J.jsx)(a, {
                          id: `connectedFileSource.preview`,
                          defaultMessage: `Preview`,
                          description: `Button that opens a supported connected file in the app's file viewer instead of navigating to its provider`,
                        }),
                      })
                    : null,
                ],
              }),
            ],
          }),
        }),
    E;
  return (
    n[4] !== w || n[5] !== i.name || n[6] !== c || n[7] !== T
      ? ((E = (0, J.jsx)(w, { assetName: i.name, onClose: c, children: T })),
        (n[4] = w),
        (n[5] = i.name),
        (n[6] = c),
        (n[7] = T),
        (n[8] = E))
      : (E = n[8]),
    E
  );
}
var q, J;
function Y() {
  return (Y = e(() => {
    ((q = _()), d(), s(), p(), i(), h(), v(), g(), w(), I(), T(), B(), G(), x(), F(), (J = y()));
  }))();
}
function re(e) {
  let t = (0, X.c)(2),
    n;
  return (
    t[0] === e ? (n = t[1]) : ((n = (0, Q.jsx)(ie, { ...e }, e.file.fileId)), (t[0] = e), (t[1] = n)),
    n
  );
}
function ie(e) {
  let t = (0, X.c)(26),
    n = c(S),
    r = c(te),
    [i, a] = (0, Z.useState)(!1),
    { file: o } = e,
    s;
  t[0] === o ? (s = t[1]) : ((s = P(o)), (t[0] = o), (t[1] = s));
  let l = s;
  if (i && n != null && r != null) {
    let i;
    t[2] !== n || t[3] !== r
      ? ((i = { accountId: n, userId: r }), (t[2] = n), (t[3] = r), (t[4] = i))
      : (i = t[4]);
    let s;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = () => a(!1)), (t[5] = s)) : (s = t[5]);
    let c;
    return (
      t[6] !== o || t[7] !== e.onClose || t[8] !== e.openTarget || t[9] !== i
        ? ((c = (0, Q.jsx)(K, {
            file: o,
            identity: i,
            onClose: e.onClose,
            onPreview: s,
            openTarget: e.openTarget,
          })),
          (t[6] = o),
          (t[7] = e.onClose),
          (t[8] = e.openTarget),
          (t[9] = i),
          (t[10] = c))
        : (c = t[10]),
      c
    );
  }
  let u;
  if (l?.sourceUrl != null) {
    let n;
    (t[11] !== o.fileId || t[12] !== e.openTarget || t[13] !== l.provider || t[14] !== l.sourceUrl
      ? ((n = (0, Q.jsx)(H, {
          fileId: o.fileId,
          provider: l.provider,
          sourceUrl: l.sourceUrl,
          openTarget: e.openTarget,
        })),
        (t[11] = o.fileId),
        (t[12] = e.openTarget),
        (t[13] = l.provider),
        (t[14] = l.sourceUrl),
        (t[15] = n))
      : (n = t[15]),
      (u = n));
  } else if (l != null && n != null && r != null) {
    let e;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = () => a(!0)), (t[16] = e)) : (e = t[16]);
    let n;
    (t[17] !== o.fileId || t[18] !== l.provider
      ? ((n = (0, Q.jsx)(H, { fileId: o.fileId, provider: l.provider, sourceUrl: null, onResolve: e })),
        (t[17] = o.fileId),
        (t[18] = l.provider),
        (t[19] = n))
      : (n = t[19]),
      (u = n));
  }
  let d;
  t[20] !== u || t[21] !== l
    ? ((d = l == null ? void 0 : { content: null, hideDownload: !1, actions: u }),
      (t[20] = u),
      (t[21] = l),
      (t[22] = d))
    : (d = t[22]);
  let f;
  return (
    t[23] !== e || t[24] !== d
      ? ((f = (0, Q.jsx)(R, { ...e, googleWorkspaceIframePreviewEnabled: !1, providerPreview: d })),
        (t[23] = e),
        (t[24] = d),
        (t[25] = f))
      : (f = t[25]),
    f
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = _()), s(), (Z = b()), M(), z(), G(), x(), Y(), (Q = y()));
  }))();
}
export { Y as i, $ as n, K as r, re as t };
//# sourceMappingURL=cloud-file-preview.electron-11396ee5238f.js.map
