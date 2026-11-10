import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { FBt as t, LNt as n, PBt as r, ZSt as i, iCt as a, tCt as o } from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as s,
  Ejr as c,
  Eo as l,
  Oo as u,
  wLr as d,
  xjr as f,
  zRr as p,
} from "./app-initial-ad16eaadf81f.js";
import { n as m, t as h } from "./execution-policy-status-59b22d9c000d.js";
import { n as g, t as _ } from "./code-execution-account-policy-8682cbed64b4.js";
import { r as v, t as y } from "./library-artifact-preview-chrome-696f2d2b7883.js";
import { n as b } from "./gating-aa49ce8f8b88.js";
import { n as x, t as S } from "./publish-button-e418c4b78a29.js";
import { a as C, i as w, n as T, o as E, r as D, s as O, t as k } from "./dropdown-6c3f6bdb91ed.js";
import { n as A, t as j } from "./panel-751f3e0e3ec4.js";
function M(e) {
  let t = (0, P.c)(13),
    n = a(p),
    r = a(s),
    [i, o] = (0, F.useState)(null);
  if (
    (n != null &&
    r != null &&
    e.content != null &&
    (i == null ||
      i.accountId !== n ||
      i.userId !== r ||
      i.libraryFileId !== e.file.id ||
      i.contentFileId !== e.file.file_id ||
      i.versionNumber !== e.file.current_version_number ||
      i.content !== e.content)
      ? o({
          accountId: n,
          userId: r,
          libraryFileId: e.file.id,
          contentFileId: e.file.file_id,
          versionNumber: e.file.current_version_number,
          content: e.content,
        })
      : i != null && (i.accountId !== n || i.userId !== r || i.libraryFileId !== e.file.id) && o(null),
    n == null || r == null)
  )
    return null;
  if (i == null) {
    let n;
    return (
      t[0] !== e.fallback ||
      t[1] !== e.file.file_name ||
      t[2] !== e.headerSupplementalActions ||
      t[3] !== e.headerTitleContent ||
      t[4] !== e.onClose ||
      t[5] !== e.onDownload ||
      t[6] !== e.tabId ||
      t[7] !== e.versionHistory ||
      t[8] !== e.versionHistoryEnabled
        ? ((n = (0, I.jsx)(y, {
            actions: e.headerTitleContent,
            title: e.file.file_name,
            onClose: e.onClose,
            onDownload: e.onDownload,
            supplementalActions: e.headerSupplementalActions,
            tabId: e.tabId,
            versionHistoryEnabled: e.versionHistoryEnabled,
            versionHistory: e.versionHistory,
            children: e.fallback,
          })),
          (t[0] = e.fallback),
          (t[1] = e.file.file_name),
          (t[2] = e.headerSupplementalActions),
          (t[3] = e.headerTitleContent),
          (t[4] = e.onClose),
          (t[5] = e.onDownload),
          (t[6] = e.tabId),
          (t[7] = e.versionHistory),
          (t[8] = e.versionHistoryEnabled),
          (t[9] = n))
        : (n = t[9]),
      n
    );
  }
  let c;
  return (
    t[10] !== e || t[11] !== i
      ? ((c = (0, I.jsx)(N, { ...e, source: i })), (t[10] = e), (t[11] = i), (t[12] = c))
      : (c = t[12]),
    c
  );
}
function N(e) {
  let t = (0, P.c)(55),
    {
      file: n,
      content: r,
      fallback: i,
      source: s,
      sharedFrameKey: u,
      headerTitleContent: d,
      headerSupplementalActions: f,
      onClose: p,
      onDownload: m,
      onDownloadContent: g,
      tabId: v,
      versionHistoryEnabled: x,
      versionHistory: C,
    } = e,
    T = o(w, s),
    D = a(T.documentState$),
    A = a(_),
    M = c(),
    N;
  t[0] === M ? (N = t[1]) : ((N = b(M)), (t[0] = M), (t[1] = N));
  let L = N,
    [R, z] = (0, F.useState)(null),
    B;
  if (A.status !== `allowed`) {
    let e;
    (t[2] === A.status
      ? (e = t[3])
      : ((e = (0, I.jsx)(h, { status: A.status })), (t[2] = A.status), (t[3] = e)),
      (B = e));
  } else if (L) {
    let e = r == null ? void 0 : T.content,
      a = A.networkAccessEnabled ? E : O,
      o;
    (t[4] !== D ||
    t[5] !== i ||
    t[6] !== n ||
    t[7] !== u ||
    t[8] !== s.contentFileId ||
    t[9] !== e ||
    t[10] !== a ||
    t[11] !== R
      ? ((o = (0, I.jsx)(j, {
          file: n,
          content: e,
          fallback: i,
          sandboxDocument: a,
          sandboxDocumentState: D,
          sharedFrameKey: u,
          sharedFrameSourceRevision: s.contentFileId,
          toolbarContainer: R,
        })),
        (t[4] = D),
        (t[5] = i),
        (t[6] = n),
        (t[7] = u),
        (t[8] = s.contentFileId),
        (t[9] = e),
        (t[10] = a),
        (t[11] = R),
        (t[12] = o))
      : (o = t[12]),
      (B = o));
  } else if (r == null) B = i;
  else {
    let e;
    t[13] === n.file_name ? (e = t[14]) : ((e = { path: n.file_name }), (t[13] = n.file_name), (t[14] = e));
    let r = A.networkAccessEnabled ? E : O,
      i;
    t[15] !== u || t[16] !== s
      ? ((i = u == null ? void 0 : { key: u, surface: `panel`, sourceRevision: s.contentFileId }),
        (t[15] = u),
        (t[16] = s),
        (t[17] = i))
      : (i = t[17]);
    let a;
    (t[18] !== D || t[19] !== n.file_name || t[20] !== T.content || t[21] !== e || t[22] !== r || t[23] !== i
      ? ((a = (0, I.jsx)(l, {
          attributes: e,
          embeddedHtml: T.content,
          embeddedFillContainer: !0,
          presentation: `app-block`,
          sandboxDocument: r,
          sandboxDocumentState: D,
          sharedFrame: i,
          onSendFollowUpMessage: null,
          title: n.file_name,
        })),
        (t[18] = D),
        (t[19] = n.file_name),
        (t[20] = T.content),
        (t[21] = e),
        (t[22] = r),
        (t[23] = i),
        (t[24] = a))
      : (a = t[24]),
      (B = a));
  }
  let V;
  t[25] !== r || t[26] !== m || t[27] !== g || t[28] !== T
    ? ((V = r == null || g == null ? m : () => g(T.getContent())),
      (t[25] = r),
      (t[26] = m),
      (t[27] = g),
      (t[28] = T),
      (t[29] = V))
    : (V = t[29]);
  let H;
  t[30] !== r || t[31] !== L || t[32] !== A.status || t[33] !== s
    ? ((H = L
        ? [
            {
              id: `site-annotation`,
              content: (0, I.jsx)(`div`, { ref: z, className: `contents` }),
              collapseSteps: [{ priority: 0, selector: `[data-popcorn-header-action-label]` }],
            },
            {
              id: `site-appearance`,
              content:
                r != null && A.status === `allowed` ? (0, I.jsx)(k, { source: s, surface: `viewer` }) : null,
            },
          ]
        : void 0),
      (t[30] = r),
      (t[31] = L),
      (t[32] = A.status),
      (t[33] = s),
      (t[34] = H))
    : (H = t[34]);
  let U;
  t[35] !== r || t[36] !== T
    ? ((U = () => (r == null ? Promise.resolve(!1) : T.save())), (t[35] = r), (t[36] = T), (t[37] = U))
    : (U = t[37]);
  let W;
  t[38] !== n || t[39] !== U
    ? ((W = (0, I.jsx)(S, { file: n, beforePublish: U })), (t[38] = n), (t[39] = U), (t[40] = W))
    : (W = t[40]);
  let G;
  t[41] === B
    ? (G = t[42])
    : ((G = (0, I.jsx)(`div`, {
        className: `flex h-full min-h-0 w-full flex-col overflow-hidden bg-surface`,
        children: B,
      })),
      (t[41] = B),
      (t[42] = G));
  let K;
  return (
    t[43] !== n.file_name ||
    t[44] !== f ||
    t[45] !== d ||
    t[46] !== p ||
    t[47] !== V ||
    t[48] !== H ||
    t[49] !== W ||
    t[50] !== G ||
    t[51] !== v ||
    t[52] !== C ||
    t[53] !== x
      ? ((K = (0, I.jsx)(y, {
          actions: d,
          title: n.file_name,
          onClose: p,
          onDownload: V,
          leadingActions: H,
          shareControl: W,
          supplementalActions: f,
          tabId: v,
          versionHistoryEnabled: x,
          versionHistory: C,
          children: G,
        })),
        (t[43] = n.file_name),
        (t[44] = f),
        (t[45] = d),
        (t[46] = p),
        (t[47] = V),
        (t[48] = H),
        (t[49] = W),
        (t[50] = G),
        (t[51] = v),
        (t[52] = C),
        (t[53] = x),
        (t[54] = K))
      : (K = t[54]),
    K
  );
}
var P, F, I;
function L() {
  return (L = e(() => {
    ((P = r()), i(), (F = t()), d(), m(), g(), f(), u(), v(), x(), A(), C(), T(), D(), (I = n()));
  }))();
}
L();
export { M as SitesPreviewEditablePanel };
//# sourceMappingURL=panel-61a32c791290.js.map
