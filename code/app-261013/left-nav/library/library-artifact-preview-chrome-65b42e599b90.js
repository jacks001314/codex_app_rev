const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./library-item-dialogs-9ee5fe2d2bc1.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./site-delete-confirmation-b17089235f40.js",
      "./library-delete-analytics-c95d15e65c53.js",
      "./library-name-validation-5559e2ce17f6.js",
      "./library-trash-analytics-b5f56547a9f3.js",
      "./library-page-actions-8e021b2c2498.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $R as t,
  AO as n,
  Ak as r,
  CS as i,
  Cat as a,
  Cot as o,
  Cxt as s,
  Dz as c,
  Fl as l,
  Hxt as u,
  IDt as d,
  Il as f,
  Ixt as p,
  LK as m,
  Mz as h,
  Nl as g,
  Nz as _,
  Pl as v,
  Pxt as y,
  QJ as b,
  QR as x,
  SY as S,
  TJ as C,
  TO as w,
  VDt as T,
  Vxt as E,
  XJ as D,
  Xot as O,
  YJ as k,
  Yot as A,
  ZJ as j,
  _xt as M,
  aA as N,
  fPt as P,
  frt as F,
  hrt as I,
  iA as L,
  jDt as R,
  jk as ee,
  kz as te,
  lu as ne,
  pPt as re,
  tE as ie,
  uu as ae,
  vzt as z,
  wot as oe,
  xMt as B,
  xY as se,
  xat as ce,
  yMt as le,
  yzt as ue,
  zxt as de,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bx as fe,
  FFr as pe,
  Fmt as me,
  G4n as he,
  GMr as V,
  Gb as ge,
  Imt as _e,
  J4n as ve,
  Jy as ye,
  Kb as be,
  Lb as xe,
  Lmt as Se,
  Mmt as Ce,
  QDr as we,
  Rb as Te,
  Rx as Ee,
  Ry as De,
  XDr as Oe,
  XMr as H,
  Ymr as ke,
  ZMr as Ae,
  cx as je,
  eIn as Me,
  eS as Ne,
  ehr as Pe,
  gFn as Fe,
  jFn as Ie,
  lIr as Le,
  lS as Re,
  qy as ze,
  sIr as Be,
  tNr as U,
  tS as Ve,
  tln as He,
  uIr as Ue,
  ux as W,
  wpt as We,
  zFr as Ge,
  zx as Ke,
} from "./app-initial-5851df3f6cb1.js";
import { r as qe, t as Je } from "./artifact-accessories-fe3be839fff5.js";
import { n as Ye, t as Xe } from "./menu-items-b78a5ea99a11.js";
import { n as Ze, t as Qe } from "./header-b4e8c147ec9e.js";
import { d as $e, f as et } from "./chatgpt_image_lightbox-600530866e50.js";
import { n as tt, t as nt } from "./library-delete-analytics-c95d15e65c53.js";
function rt(e) {
  let t = (0, it.c)(6),
    { entry: n, prefetch: r, surface: i, onView: a } = e,
    o = r !== void 0 && r,
    s = i === void 0 ? `file_preview` : i;
  if (E(Ae).status !== `allowed` || !Ne(n) || !Ve(n)) return null;
  if (o) {
    let e;
    return (
      t[0] === n.node.id
        ? (e = t[1])
        : ((e = (0, G.jsx)(Ke, { libraryFileId: n.node.id })), (t[0] = n.node.id), (t[1] = e)),
      e
    );
  }
  let c;
  return (
    t[2] !== n.node.id || t[3] !== a || t[4] !== s
      ? ((c = (0, G.jsx)(Ee, { libraryFileId: n.node.id, surface: s, onView: a })),
        (t[2] = n.node.id),
        (t[3] = a),
        (t[4] = s),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
var it, G;
function at() {
  return (at = e(() => {
    ((it = z()), y(), U(), Re(), fe(), (G = B()));
  }))();
}
function ot(e, t) {
  if (t != null) {
    let e = L(t);
    if (
      e.kind === `document` &&
      (e.iconKey === `google-docs` || e.iconKey === `google-sheets` || e.iconKey === `google-slides`)
    )
      return (0, K.jsx)(r, { ...t, fileName: t.fileName, mimeType: t.mimeType, size: 20 });
  }
  return e === `deep_research_report`
    ? (0, K.jsx)(r, { fileName: void 0, mimeType: void 0, libraryArtifactType: e, size: 20 })
    : e === `writing_block`
      ? (0, K.jsx)(h, { asset: S })
      : e === `flashcards`
        ? (0, K.jsx)(h, { asset: l })
        : e === `site_preview`
          ? (0, K.jsx)(m, {})
          : void 0;
}
var K;
function q() {
  return (q = e(() => {
    (N(), f(), se(), _(), C(), ee(), (K = B()));
  }))();
}
function st(e) {
  return {
    conversationId: e.origination_thread_id,
    createdAt: e.record_creation_time,
    externalAccount: e.external_account,
    gizmoId: e.gizmo_id,
    identity: { type: `library`, libraryFileId: e.id, fileId: e.file_id },
    mimeType: e.mime_type,
    name: e.name,
    parentDirectoryId: e.parent_directory_id,
    sizeBytes: e.file_size_bytes,
    sourceUrl: e.cloud_doc_url ?? void 0,
    updatedAt: e.updated_at,
  };
}
function ct() {
  return (ct = e(() => {}))();
}
function lt(e) {
  let t = (0, J.c)(8),
    n = E(Se),
    r = E(Ae),
    i = E(V),
    a = E(H);
  if (
    r.status !== `allowed` ||
    i == null ||
    a == null ||
    e.entry.node.trashed_at ||
    (n && e.entry.node.library_artifact_type === `saved_web_image`) ||
    !Ve(e.entry)
  )
    return null;
  let o;
  t[0] !== i || t[1] !== a
    ? ((o = { accountId: i, userId: a }), (t[0] = i), (t[1] = a), (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === e ? (s = t[4]) : ((s = (0, Y.jsx)(ut, { ...e })), (t[3] = e), (t[4] = s));
  let c;
  return (
    t[5] !== o || t[6] !== s
      ? ((c = (0, Y.jsx)(u, { scope: He, value: o, children: s })), (t[5] = o), (t[6] = s), (t[7] = c))
      : (c = t[7]),
    c
  );
}
function ut(e) {
  let t = (0, J.c)(11),
    { analyticsContext: n, disabled: r, entry: i, onDeleted: a } = e,
    o = p(He),
    s = de(be, i.node.id),
    l = r || s,
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Y.jsx)(c, { icon: { assets: { 16: b, 20: D } } })), (t[0] = u))
    : (u = t[0]);
  let f;
  t[1] !== n || t[2] !== r || t[3] !== i || t[4] !== a || t[5] !== o
    ? ((f = () => {
        r ||
          o.get(be, i.node.id) ||
          (tt(
            o,
            [i],
            n,
            Fe.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_INITIATED,
            !1,
            Ie.CHATGPT_FILE_LIBRARY_ORIGIN_FILE_PREVIEW,
          ),
          ve(o, ft, {
            accountId: o.value.accountId,
            userId: o.value.userId,
            analyticsContext: n,
            libraryOrigin: Ie.CHATGPT_FILE_LIBRARY_ORIGIN_FILE_PREVIEW,
            entries: [i],
            onCompleted: (e) => {
              e.includes(i.node.id) && o.get(V) === o.value.accountId && o.get(H) === o.value.userId && a?.();
            },
          }));
      }),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = f))
    : (f = t[6]);
  let m;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Y.jsx)(d, {
        id: `libraryNext.actions.delete`,
        defaultMessage: `Delete`,
        description: `Menu action to delete a Library item after confirmation`,
      })),
      (t[7] = m))
    : (m = t[7]);
  let h;
  return (
    t[8] !== l || t[9] !== f
      ? ((h = (0, Y.jsx)(w.Item, {
          disabled: l,
          tone: `destructive`,
          leftIcon: u,
          onSelect: f,
          children: m,
        })),
        (t[8] = l),
        (t[9] = f),
        (t[10] = h))
      : (h = t[10]),
    h
  );
}
var J, dt, Y, ft;
function pt() {
  return (pt = e(() => {
    ((J = z()),
      Me(),
      j(),
      k(),
      y(),
      (dt = ue()),
      R(),
      U(),
      n(),
      he(),
      te(),
      nt(),
      ge(),
      Re(),
      We(),
      _e(),
      (Y = B()),
      re(),
      (ft = (0, dt.lazy)(() =>
        P(
          () =>
            import(`./library-item-dialogs-9ee5fe2d2bc1.js`).then((e) => ({
              default: e.ConfirmLibraryItemsDialog,
            })),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
          import.meta.url,
        ),
      )));
  }))();
}
function mt(e) {
  let n = (0, gt.c)(30),
    { children: r, conversationId: i, messageId: a, disabled: l } = e,
    u = p(o),
    f = E(V),
    m = E(H),
    h;
  n[0] !== f || n[1] !== i || n[2] !== m
    ? ((h = [`library-image-original-chat`, f, m, i]), (n[0] = f), (n[1] = i), (n[2] = m), (n[3] = h))
    : (h = n[3]);
  let _;
  n[4] !== f || n[5] !== i
    ? ((_ = async (e) => {
        let { signal: t } = e;
        return (
          await ke.safeGet(`/conversation/{conversation_id}`, {
            parameters: { path: { conversation_id: i } },
            expectedErrorStatuses: [403, 404],
            additionalHeaders: f == null ? void 0 : { "ChatGPT-Account-ID": f },
            signal: t,
          }),
          !0
        );
      }),
      (n[4] = f),
      (n[5] = i),
      (n[6] = _))
    : (_ = n[6]);
  let v;
  n[7] !== h || n[8] !== _
    ? ((v = {
        queryKey: h,
        queryFn: _,
        retry: !1,
        staleTime: 1 / 0,
        gcTime: 0,
        refetchOnMount: `always`,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (n[7] = h),
      (n[8] = _),
      (n[9] = v))
    : (v = n[9]);
  let { isSuccess: y, error: b, isFetching: x } = O(v),
    S = l || !y || x,
    C;
  n[10] === i ? (C = n[11]) : ((C = ce(i)), (n[10] = i), (n[11] = C));
  let T;
  n[12] === a ? (T = n[13]) : ((T = new URLSearchParams({ messageId: a })), (n[12] = a), (n[13] = T));
  let D = `${C}?${T}`,
    k = s(D),
    A;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, X.jsx)(d, {
        id: `library.image.viewOriginalChat`,
        defaultMessage: `View original chat`,
        description: `Image menu action that opens the chat and message where the image originated`,
      })),
      (n[14] = A))
    : (A = n[14]);
  let j = A;
  if (b instanceof I && b.errorCode === `conversation_deleted`) {
    let e;
    (n[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(d, {
          id: `library.image.originalChatDeleted`,
          defaultMessage: `This chat was deleted`,
          description: `Disabled image menu action when the image's original chat has been deleted`,
        })),
        (n[15] = e))
      : (e = n[15]),
      (j = e));
  } else if (b != null) {
    let e;
    (n[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(d, {
          id: `library.image.originalChatUnavailable`,
          defaultMessage: `This chat is unavailable`,
          description: `Disabled image menu action when the image's original chat could not be loaded`,
        })),
        (n[16] = e))
      : (e = n[16]),
      (j = e));
  }
  let M = S ? void 0 : k,
    N;
  n[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, X.jsx)(c, { icon: { assets: { 16: g, 20: ne } } })), (n[17] = N))
    : (N = n[17]);
  let P;
  n[18] !== u || n[19] !== S || n[20] !== D
    ? ((P = (e) => {
        if (S) return;
        (we(u, $e, {}), e.preventDefault(), e.stopPropagation());
        let n =
            !u.get(t) &&
            document.visibilityState !== `hidden` &&
            typeof document.startViewTransition == `function`,
          r = u.get(Be).prepareNavigation(D, { preventScrollReset: !0, viewTransition: n });
        r != null && (n ? document.startViewTransition(() => (0, _t.flushSync)(r)).ready.catch(ht) : r());
      }),
      (n[18] = u),
      (n[19] = S),
      (n[20] = D),
      (n[21] = P))
    : (P = n[21]);
  let F;
  n[22] !== j || n[23] !== M || n[24] !== P || n[25] !== S
    ? ((F = (0, X.jsx)(w.Item, { disabled: S, href: M, leftIcon: N, onClick: P, children: j })),
      (n[22] = j),
      (n[23] = M),
      (n[24] = P),
      (n[25] = S),
      (n[26] = F))
    : (F = n[26]);
  let L;
  return (n[27] !== r || n[28] !== F ? ((L = r(F)), (n[27] = r), (n[28] = F), (n[29] = L)) : (L = n[29]), L);
}
function ht() {}
var gt, _t, X;
function vt() {
  return (vt = e(() => {
    ((gt = z()),
      et(),
      v(),
      ae(),
      A(),
      y(),
      (_t = le()),
      R(),
      M(),
      Le(),
      U(),
      Pe(),
      a(),
      n(),
      te(),
      Oe(),
      oe(),
      x(),
      F(),
      (X = B()));
  }))();
}
function yt(e, t, n = e.get(pe), r) {
  let i = e.get(W);
  if (n == null || i == null || i.entry?.node.saved_entity != null) return;
  let a = n.state;
  Ue(e, r ?? n, {
    replace: a?.libraryPreview != null,
    preventScrollReset: !0,
    state: {
      ...a,
      libraryPreview: {
        ...t,
        request: i.entry == null ? i : { ...i, verifiedProviderFileAccess: void 0 },
        returnLocation: a?.libraryPreview?.returnLocation ?? n,
      },
    },
  });
}
function bt(e, t, n) {
  let r = e.get(pe)?.state?.libraryPreview;
  r?.request.entry?.node.id === t.node.id &&
    e.get(W)?.entry?.node.id === t.node.id &&
    (e.set(W, null),
    n === `delete` && Ue(e, r.returnLocation, { replace: !0, state: r.returnLocation.state }));
}
function Z() {
  return (Z = e(() => {
    (Le(), Ge(), je());
  }))();
}
function xt(e) {
  let t = (0, St.c)(37),
    {
      analyticsContext: n,
      children: r,
      enableDelete: i,
      entry: a,
      fileType: s,
      footer: c,
      knownParentDirectories: l,
      mimeType: u,
      navigationDisabled: d,
      onDeleted: f,
      onOpenLibrary: m,
      open: h,
      onOpenChange: g,
      versionHistoryAction: _,
      versionHistoryFile: v,
    } = e,
    y = i !== void 0 && i,
    b = d !== void 0 && d,
    x = p(o),
    S = T(),
    C;
  t[0] !== a || t[1] !== m || t[2] !== x
    ? ((C =
        m == null
          ? void 0
          : () => {
              (bt(x, a, `navigate`), m());
            }),
      (t[0] = a),
      (t[1] = m),
      (t[2] = x),
      (t[3] = C))
    : (C = t[3]);
  let w = C,
    E;
  t[4] !== a.node.library_artifact_type || t[5] !== a.node.name || t[6] !== S
    ? ((E = Ce(a.node.name, a.node.library_artifact_type, S)),
      (t[4] = a.node.library_artifact_type),
      (t[5] = a.node.name),
      (t[6] = S),
      (t[7] = E))
    : (E = t[7]);
  let D = E,
    O;
  t[8] !== n ||
  t[9] !== r ||
  t[10] !== D ||
  t[11] !== y ||
  t[12] !== a ||
  t[13] !== s ||
  t[14] !== c ||
  t[15] !== l ||
  t[16] !== u ||
  t[17] !== b ||
  t[18] !== f ||
  t[19] !== g ||
  t[20] !== w ||
  t[21] !== h ||
  t[22] !== x ||
  t[23] !== _ ||
  t[24] !== v
    ? ((O = (e) =>
        (0, Q.jsx)(ie, {
          fileName: a.node.name,
          fileType: s,
          icon: ot(a.node.library_artifact_type, {
            fileName: a.node.name,
            mimeType: u ?? a.node.mime_type ?? void 0,
            mountedLibraryFileId: a.node.id,
            sourceMimeType: a.node.mime_type ?? void 0,
            sourceUrl: a.node.cloud_doc_url ?? void 0,
          }),
          menuTitle: D,
          mimeType: u ?? a.node.mime_type ?? void 0,
          title: D,
          libraryBreadcrumb: b
            ? null
            : (0, Q.jsx)(xe, {
                externalAccount: a.node.external_account,
                libraryFileId: a.node.id,
                knownParentDirectories: l,
                parentDirectoryId: a.node.parent_directory_id,
                onNavigate: w,
              }),
          tooltipBreadcrumb: b
            ? null
            : (0, Q.jsx)(xe, {
                externalAccount: a.node.external_account,
                libraryFileId: a.node.id,
                knownParentDirectories: l,
                parentDirectoryId: a.node.parent_directory_id,
                variant: `text`,
              }),
          open: h,
          onOpenChange: g,
          children: (0, Q.jsxs)(Xe, {
            favoriteAction: (0, Q.jsx)(rt, {
              entry: a,
              onView: w,
              surface: s === `image` ? `image_lightbox` : `file_preview`,
            }),
            file: v,
            fileInfoSource: st(a.node),
            libraryFileId: a.node.id,
            openInLibraryDisabled: b,
            onOpenLibrary: w,
            versionHistoryAction: _,
            children: [
              r,
              e,
              y
                ? (0, Q.jsx)(lt, {
                    analyticsContext: n,
                    disabled: b,
                    entry: a,
                    onDeleted: () => {
                      (bt(x, a, `delete`), f?.());
                    },
                  })
                : null,
              c,
            ],
          }),
        })),
      (t[8] = n),
      (t[9] = r),
      (t[10] = D),
      (t[11] = y),
      (t[12] = a),
      (t[13] = s),
      (t[14] = c),
      (t[15] = l),
      (t[16] = u),
      (t[17] = b),
      (t[18] = f),
      (t[19] = g),
      (t[20] = w),
      (t[21] = h),
      (t[22] = x),
      (t[23] = _),
      (t[24] = v),
      (t[25] = O))
    : (O = t[25]);
  let k = O,
    A;
  t[26] === a ? (A = t[27]) : ((A = (0, Q.jsx)(rt, { entry: a, prefetch: !0 })), (t[26] = a), (t[27] = A));
  let j;
  t[28] !== a.node.origination_message_id ||
  t[29] !== a.node.origination_thread_id ||
  t[30] !== s ||
  t[31] !== b ||
  t[32] !== k
    ? ((j =
        s === `image` && a.node.origination_thread_id && a.node.origination_message_id
          ? (0, Q.jsx)(mt, {
              conversationId: a.node.origination_thread_id,
              messageId: a.node.origination_message_id,
              disabled: b,
              children: k,
            })
          : k()),
      (t[28] = a.node.origination_message_id),
      (t[29] = a.node.origination_thread_id),
      (t[30] = s),
      (t[31] = b),
      (t[32] = k),
      (t[33] = j))
    : (j = t[33]);
  let M;
  return (
    t[34] !== A || t[35] !== j
      ? ((M = (0, Q.jsxs)(Q.Fragment, { children: [A, j] })), (t[34] = A), (t[35] = j), (t[36] = M))
      : (M = t[36]),
    M
  );
}
var St, Q;
function Ct() {
  return (Ct = e(() => {
    ((St = z()), y(), R(), Ye(), at(), Te(), q(), me(), oe(), i(), pt(), vt(), Z(), (Q = B()));
  }))();
}
function wt(e) {
  let t = (0, Et.c)(36),
    {
      accountId: n,
      accessoryOwnerId: r,
      actions: i,
      children: a,
      contentFade: o,
      placement: s,
      controls: c,
      downloadDisabled: l,
      filePreviewKind: u,
      fileInfoSource: d,
      downloadControl: f,
      historyControlGroup: p,
      hideHeader: m,
      headerActions: h,
      onClose: g,
      onDownload: _,
      onShare: v,
      primaryAction: y,
      shareControl: b,
      shareDisabled: x,
      status: S,
      supplementalActions: C,
      tabId: w,
      title: T,
      userId: E,
      versionHistory: D,
      versionHistoryEnabled: O,
    } = e,
    k = l !== void 0 && l,
    A = m !== void 0 && m,
    j = x !== void 0 && x,
    M = O !== void 0 && O,
    N;
  t[0] === u ? (N = t[1]) : ((N = De(u)), (t[0] = u), (t[1] = N));
  let P = `relative flex h-full min-h-0 flex-col ${N}`,
    F;
  t[2] !== i ||
  t[3] !== o ||
  t[4] !== c ||
  t[5] !== f ||
  t[6] !== k ||
  t[7] !== h ||
  t[8] !== A ||
  t[9] !== p ||
  t[10] !== g ||
  t[11] !== _ ||
  t[12] !== v ||
  t[13] !== s ||
  t[14] !== y ||
  t[15] !== b ||
  t[16] !== j ||
  t[17] !== S ||
  t[18] !== C ||
  t[19] !== w ||
  t[20] !== T ||
  t[21] !== D ||
  t[22] !== M
    ? ((F =
        !A &&
        (0, $.jsx)(Tt, {
          actions: i,
          contentFade: o,
          placement: s,
          controls: c,
          downloadControl: f,
          historyControlGroup: p,
          headerActions: h,
          status: S,
          downloadDisabled: k,
          onClose: g,
          onDownload: _,
          onShare: v,
          primaryAction: y,
          shareControl: b,
          shareDisabled: j,
          supplementalActions: C,
          tabId: w,
          title: T,
          versionHistory: D,
          versionHistoryEnabled: M,
        })),
      (t[2] = i),
      (t[3] = o),
      (t[4] = c),
      (t[5] = f),
      (t[6] = k),
      (t[7] = h),
      (t[8] = A),
      (t[9] = p),
      (t[10] = g),
      (t[11] = _),
      (t[12] = v),
      (t[13] = s),
      (t[14] = y),
      (t[15] = b),
      (t[16] = j),
      (t[17] = S),
      (t[18] = C),
      (t[19] = w),
      (t[20] = T),
      (t[21] = D),
      (t[22] = M),
      (t[23] = F))
    : (F = t[23]);
  let I = s === `overlay`,
    L;
  t[24] !== r || t[25] !== n || t[26] !== a || t[27] !== d || t[28] !== I || t[29] !== E || t[30] !== D
    ? ((L = (0, $.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children: (0, $.jsx)(Je, {
          accountId: n,
          fileInfoSource: d,
          ownerId: r,
          panelClearsHeader: I,
          userId: E,
          versionHistory: D,
          children: a,
        }),
      })),
      (t[24] = r),
      (t[25] = n),
      (t[26] = a),
      (t[27] = d),
      (t[28] = I),
      (t[29] = E),
      (t[30] = D),
      (t[31] = L))
    : (L = t[31]);
  let R;
  return (
    t[32] !== P || t[33] !== F || t[34] !== L
      ? ((R = (0, $.jsxs)(`section`, { className: P, children: [F, L] })),
        (t[32] = P),
        (t[33] = F),
        (t[34] = L),
        (t[35] = R))
      : (R = t[35]),
    R
  );
}
function Tt(e) {
  let t = (0, Et.c)(23),
    {
      actions: n,
      contentFade: r,
      placement: i,
      controls: a,
      downloadDisabled: o,
      downloadControl: s,
      historyControlGroup: c,
      headerActions: l,
      onClose: u,
      onDownload: d,
      onShare: f,
      primaryAction: p,
      shareControl: m,
      shareDisabled: h,
      status: g,
      supplementalActions: _,
      tabId: v,
      title: y,
      versionHistory: b,
      versionHistoryEnabled: x,
    } = e,
    S = o !== void 0 && o,
    C = h !== void 0 && h,
    w = x !== void 0 && x,
    T = a ?? ze,
    E;
  t[0] !== T || t[1] !== _
    ? ((E =
        _ == null
          ? T
          : {
              ...T,
              supplementalActions:
                T.supplementalActions == null
                  ? _
                  : (0, $.jsxs)($.Fragment, { children: [T.supplementalActions, _] }),
            }),
      (t[0] = T),
      (t[1] = _),
      (t[2] = E))
    : (E = t[2]);
  let D;
  return (
    t[3] !== n ||
    t[4] !== r ||
    t[5] !== s ||
    t[6] !== S ||
    t[7] !== l ||
    t[8] !== c ||
    t[9] !== u ||
    t[10] !== d ||
    t[11] !== f ||
    t[12] !== i ||
    t[13] !== p ||
    t[14] !== m ||
    t[15] !== C ||
    t[16] !== g ||
    t[17] !== E ||
    t[18] !== v ||
    t[19] !== y ||
    t[20] !== b ||
    t[21] !== w
      ? ((D = (0, $.jsx)(Qe, {
          enabled: w,
          actions: n,
          contentFade: r,
          placement: i,
          historyControlGroup: c,
          downloadDisabled: S,
          headerActions: l,
          controls: E,
          onClose: u,
          downloadControl: s,
          onDownload: d,
          onShare: f,
          primaryAction: p,
          shareControl: m,
          shareDisabled: C,
          status: g,
          tabId: v,
          title: y,
          versionHistory: b,
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = s),
        (t[6] = S),
        (t[7] = l),
        (t[8] = c),
        (t[9] = u),
        (t[10] = d),
        (t[11] = f),
        (t[12] = i),
        (t[13] = p),
        (t[14] = m),
        (t[15] = C),
        (t[16] = g),
        (t[17] = E),
        (t[18] = v),
        (t[19] = y),
        (t[20] = b),
        (t[21] = w),
        (t[22] = D))
      : (D = t[22]),
    D
  );
}
var Et, $;
function Dt() {
  return (Dt = e(() => {
    ((Et = z()), qe(), ye(), Ze(), ($ = B()));
  }))();
}
export { Ct as a, st as c, q as d, xt as i, ct as l, Tt as n, Z as o, Dt as r, yt as s, wt as t, ot as u };
//# sourceMappingURL=library-artifact-preview-chrome-65b42e599b90.js.map
