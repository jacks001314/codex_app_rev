import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  LNt as i,
  Mst as a,
  PBt as o,
  Pit as s,
  Qst as c,
  TE as l,
  XOt as u,
  XS as d,
  Y3 as f,
  Z3 as p,
  ZSt as m,
  iCt as h,
  jit as g,
  jst as _,
  tkt as v,
  vD as ee,
  yD as y,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as b,
  Cp as x,
  Ep as S,
  Op as C,
  SRn as w,
  Sp as T,
  _Xn as E,
  ab as D,
  bRn as O,
  eRn as k,
  hXn as A,
  ib as j,
  jp as M,
  pmt as N,
  tRn as P,
  umt as F,
  wLr as I,
  zRr as te,
} from "./app-initial-ad16eaadf81f.js";
import { i as L, r as ne } from "./library-file-preview-kind-83a79c3eedc6.js";
import { n as re, r as R } from "./library-cloud-file-preview-cea0f3cb4b0c.js";
import { i as z, r as B } from "./preview-layout-ada06d877162.js";
function V(e) {
  let n = (0, H.c)(19),
    { fileId: r, provider: i, sourceUrl: a, openTarget: o, onResolve: s, preferDocumentBrowser: u } = e,
    d = t(c),
    f;
  n[0] !== r || n[1] !== s || n[2] !== o || n[3] !== u || n[4] !== d || n[5] !== a
    ? ((f = (e) => {
        if (a == null) {
          s();
          return;
        }
        (N(d, r), w({ event: e, href: a, openTarget: o ?? (u ? M(e) : void 0), initiator: `sites_library` }));
      }),
      (n[0] = r),
      (n[1] = s),
      (n[2] = o),
      (n[3] = u),
      (n[4] = d),
      (n[5] = a),
      (n[6] = f))
    : (f = n[6]);
  let p;
  n[7] === i ? (p = n[8]) : ((p = A(i)), (n[7] = i), (n[8] = p));
  let m;
  n[9] === p
    ? (m = n[10])
    : ((m = (0, U.jsx)(v, {
        id: `libraryProviderPreview.openOriginal`,
        defaultMessage: `Open in {provider}`,
        description: `Button in a connected file preview that opens the original file in its provider. The provider value is a product name such as Google Drive, Box, Dropbox, SharePoint, or OneDrive`,
        values: { provider: p },
      })),
      (n[9] = p),
      (n[10] = m));
  let h;
  n[11] !== o || n[12] !== u || n[13] !== a
    ? ((h = a == null ? null : (0, U.jsx)(k, { href: a, openTarget: o ?? (u ? M() : void 0) })),
      (n[11] = o),
      (n[12] = u),
      (n[13] = a),
      (n[14] = h))
    : (h = n[14]);
  let g;
  return (
    n[15] !== f || n[16] !== m || n[17] !== h
      ? ((g = (0, U.jsxs)(l, { onClick: f, children: [m, h] })),
        (n[15] = f),
        (n[16] = m),
        (n[17] = h),
        (n[18] = g))
      : (g = n[18]),
    g
  );
}
var H, U;
function W() {
  return (W = e(() => {
    ((H = o()), m(), u(), O(), P(), F(), n(), d(), E(), (U = i()));
  }))();
}
function G(e) {
  let n = (0, K.c)(9),
    { file: r, identity: i, onClose: o, onPreview: s, openTarget: l, preferDocumentBrowser: u } = e,
    d = t(c),
    p = S(r),
    m;
  n[0] !== r || n[1] !== i || n[2] !== d.query
    ? ((m = d.query.getOptions(T, { file: r, identity: i })),
      (n[0] = r),
      (n[1] = i),
      (n[2] = d.query),
      (n[3] = m))
    : (m = n[3]);
  let { data: h, isPending: _, isError: y, error: b, refetch: x } = a(m),
    C =
      !(b instanceof g && (b.status === 401 || b.status === 403)) &&
      ne({ file_name: r.name, library_file_category: r.category, mime_type: r.mimeType }) !== `unsupported`,
    w = B,
    E = _
      ? (0, q.jsx)(j, {})
      : (0, q.jsx)(`div`, {
          className: `flex h-full items-center justify-center p-6`,
          children: (0, q.jsxs)(`div`, {
            className: `flex max-w-sm flex-col items-center gap-4 text-center select-none`,
            children: [
              y || h == null || p == null
                ? (0, q.jsx)(ee, {
                    ariaLive: `polite`,
                    content: (0, q.jsx)(v, {
                      id: `connectedFileSource.unavailable`,
                      defaultMessage: `Unable to open the original file`,
                      description: `Error when a connected file's original provider link could not be retrieved; Retry tries again and Preview opens a supported local viewer`,
                    }),
                    role: `status`,
                    type: `error`,
                  })
                : (0, q.jsx)(v, {
                    id: `connectedFileSource.ready`,
                    defaultMessage: `Open this file in {provider}`,
                    description: `Prompt after resolving a connected file's original link. The provider is a product name such as Dropbox, SharePoint, or OneDrive`,
                    values: { provider: A(p.provider) },
                  }),
              (0, q.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  h != null && p != null
                    ? (0, q.jsx)(V, {
                        fileId: r.fileId,
                        provider: p.provider,
                        sourceUrl: h,
                        openTarget: l,
                        preferDocumentBrowser: u,
                      })
                    : (0, q.jsx)(f, {
                        color: `outline`,
                        onClick: () => void x(),
                        children: (0, q.jsx)(v, {
                          id: `connectedFileSource.retry`,
                          defaultMessage: `Retry`,
                          description: `Button that retries retrieving the original link for a connected file`,
                        }),
                      }),
                  C
                    ? (0, q.jsx)(f, {
                        color: `outline`,
                        onClick: s,
                        children: (0, q.jsx)(v, {
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
    D;
  return (
    n[4] !== w || n[5] !== r.name || n[6] !== o || n[7] !== E
      ? ((D = (0, q.jsx)(w, { assetName: r.name, onClose: o, children: E })),
        (n[4] = w),
        (n[5] = r.name),
        (n[6] = o),
        (n[7] = E),
        (n[8] = D))
      : (D = n[8]),
    D
  );
}
var K, q;
function J() {
  return (J = e(() => {
    ((K = o()), _(), m(), u(), y(), p(), n(), s(), E(), L(), D(), z(), W(), C(), x(), (q = i()));
  }))();
}
function Y(e) {
  let t = (0, X.c)(2),
    n;
  return (
    t[0] === e ? (n = t[1]) : ((n = (0, Q.jsx)(ie, { ...e }, e.file.fileId)), (t[0] = e), (t[1] = n)),
    n
  );
}
function ie(e) {
  let t = (0, X.c)(26),
    n = h(te),
    r = h(b),
    [i, a] = (0, Z.useState)(!1),
    { file: o } = e,
    s;
  t[0] === o ? (s = t[1]) : ((s = S(o)), (t[0] = o), (t[1] = s));
  let c = s;
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
        ? ((c = (0, Q.jsx)(G, {
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
  let l;
  if (c?.sourceUrl != null) {
    let n;
    (t[11] !== o.fileId || t[12] !== e.openTarget || t[13] !== c.provider || t[14] !== c.sourceUrl
      ? ((n = (0, Q.jsx)(V, {
          fileId: o.fileId,
          provider: c.provider,
          sourceUrl: c.sourceUrl,
          openTarget: e.openTarget,
        })),
        (t[11] = o.fileId),
        (t[12] = e.openTarget),
        (t[13] = c.provider),
        (t[14] = c.sourceUrl),
        (t[15] = n))
      : (n = t[15]),
      (l = n));
  } else if (c != null && n != null && r != null) {
    let e;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = () => a(!0)), (t[16] = e)) : (e = t[16]);
    let n;
    (t[17] !== o.fileId || t[18] !== c.provider
      ? ((n = (0, Q.jsx)(V, { fileId: o.fileId, provider: c.provider, sourceUrl: null, onResolve: e })),
        (t[17] = o.fileId),
        (t[18] = c.provider),
        (t[19] = n))
      : (n = t[19]),
      (l = n));
  }
  let u;
  t[20] !== l || t[21] !== c
    ? ((u = c == null ? void 0 : { content: null, hideDownload: !1, actions: l }),
      (t[20] = l),
      (t[21] = c),
      (t[22] = u))
    : (u = t[22]);
  let d;
  return (
    t[23] !== e || t[24] !== u
      ? ((d = (0, Q.jsx)(re, { ...e, googleWorkspaceIframePreviewEnabled: !1, providerPreview: u })),
        (t[23] = e),
        (t[24] = u),
        (t[25] = d))
      : (d = t[25]),
    d
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = o()), m(), (Z = r()), I(), R(), W(), C(), J(), (Q = i()));
  }))();
}
export { J as i, $ as n, G as r, Y as t };
//# sourceMappingURL=cloud-file-preview.electron-1bf94bd57c97.js.map
