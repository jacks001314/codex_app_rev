const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./library-item-dialogs-b3f9554157e9.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./site-delete-confirmation-ef0a116df40a.js",
      "./library-delete-analytics-8d6586b5e73e.js",
      "./library-name-validation-5559e2ce17f6.js",
      "./library-trash-analytics-87135fb4164d.js",
      "./library-page-actions-12f0701c9fb5.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  BSt as r,
  DB as i,
  FBt as a,
  FNt as o,
  Gu as s,
  IA as c,
  Jz as l,
  Ku as u,
  LA as d,
  LNt as f,
  Mst as p,
  NSt as m,
  OB as h,
  OFt as g,
  Oit as _,
  PBt as v,
  Pq as y,
  QY as b,
  Qst as ee,
  SB as x,
  SX as S,
  TY as C,
  Uot as w,
  Vot as T,
  XOt as E,
  XS as D,
  XY as O,
  YY as k,
  ZSt as A,
  ZY as j,
  _u as te,
  aCt as M,
  bu as N,
  cA as ne,
  ck as re,
  iCt as P,
  jit as ie,
  jst as ae,
  kFt as oe,
  lA as se,
  nCt as ce,
  okt as le,
  qz as ue,
  rk as de,
  tkt as F,
  vu as fe,
  wB as pe,
  wE as me,
  xX as he,
  yu as ge,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $cr as _e,
  A5n as ve,
  Air as ye,
  BRr as I,
  D5n as be,
  HRn as xe,
  Ix as L,
  Jht as Se,
  Kht as Ce,
  Mir as R,
  Nir as z,
  Nmt as we,
  OS as Te,
  Ozn as Ee,
  Px as De,
  RS as B,
  Uht as Oe,
  Xfn as ke,
  Ycr as Ae,
  _x as je,
  fS as Me,
  iRr as Ne,
  izn as Pe,
  kS as Fe,
  lx as Ie,
  mS as Le,
  pS as Re,
  qht as ze,
  tyr as Be,
  ux as Ve,
  vx as V,
  wLr as H,
  xLr as U,
  xMr as He,
  yMr as Ue,
  zRr as W,
} from "./app-initial-ad16eaadf81f.js";
import { n as We, t as Ge } from "./menu-items-83f6bf1513b1.js";
import { d as Ke, f as qe } from "./chatgpt_image_lightbox-600530866e50.js";
import { n as Je, t as Ye } from "./library-delete-analytics-8d6586b5e73e.js";
function Xe(e) {
  let t = (0, Ze.c)(6),
    { entry: n, prefetch: r, surface: i, onView: a } = e,
    o = r !== void 0 && r,
    s = i === void 0 ? `file_preview` : i;
  if (P(U).status !== `allowed` || !Te(n) || !Fe(n)) return null;
  if (o) {
    let e;
    return (
      t[0] === n.node.id
        ? (e = t[1])
        : ((e = (0, G.jsx)(Re, { libraryFileId: n.node.id })), (t[0] = n.node.id), (t[1] = e)),
      e
    );
  }
  let c;
  return (
    t[2] !== n.node.id || t[3] !== a || t[4] !== s
      ? ((c = (0, G.jsx)(Me, { libraryFileId: n.node.id, surface: s, onView: a })),
        (t[2] = n.node.id),
        (t[3] = a),
        (t[4] = s),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
var Ze, G;
function Qe() {
  return (Qe = e(() => {
    ((Ze = v()), A(), H(), B(), Le(), (G = f()));
  }))();
}
function $e(e, t) {
  if (t != null) {
    let e = c(t);
    if (
      e.kind === `document` &&
      (e.iconKey === `google-docs` || e.iconKey === `google-sheets` || e.iconKey === `google-slides`)
    )
      return (0, K.jsx)(ne, { ...t, fileName: t.fileName, mimeType: t.mimeType, size: 20 });
  }
  return e === `deep_research_report`
    ? (0, K.jsx)(ne, { fileName: void 0, mimeType: void 0, libraryArtifactType: e, size: 20 })
    : e === `writing_block`
      ? (0, K.jsx)(i, { asset: S })
      : e === `flashcards`
        ? (0, K.jsx)(i, { asset: ge })
        : e === `site_preview`
          ? (0, K.jsx)(y, {})
          : void 0;
}
var K;
function q() {
  return (q = e(() => {
    (d(), N(), he(), h(), C(), se(), (K = f()));
  }))();
}
function et(e) {
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
function tt() {
  return (tt = e(() => {}))();
}
function nt(e) {
  let t = (0, J.c)(8),
    n = P(Se),
    r = P(U),
    i = P(W),
    a = P(I);
  if (
    r.status !== `allowed` ||
    i == null ||
    a == null ||
    e.entry.node.trashed_at ||
    (n && e.entry.node.library_artifact_type === `saved_web_image`) ||
    !Fe(e.entry)
  )
    return null;
  let o;
  t[0] !== i || t[1] !== a
    ? ((o = { accountId: i, userId: a }), (t[0] = i), (t[1] = a), (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === e ? (s = t[4]) : ((s = (0, Y.jsx)(rt, { ...e })), (t[3] = e), (t[4] = s));
  let c;
  return (
    t[5] !== o || t[6] !== s
      ? ((c = (0, Y.jsx)(M, { scope: ke, value: o, children: s })), (t[5] = o), (t[6] = s), (t[7] = c))
      : (c = t[7]),
    c
  );
}
function rt(e) {
  let n = (0, J.c)(11),
    { analyticsContext: r, disabled: i, entry: a, onDeleted: o } = e,
    s = t(ke),
    c = ce(V, a.node.id),
    l = i || c,
    u;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Y.jsx)(x, { icon: { assets: { 16: b, 20: O } } })), (n[0] = u))
    : (u = n[0]);
  let d;
  n[1] !== r || n[2] !== i || n[3] !== a || n[4] !== o || n[5] !== s
    ? ((d = () => {
        i ||
          s.get(V, a.node.id) ||
          (Je(
            s,
            [a],
            r,
            xe.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_INITIATED,
            !1,
            Pe.CHATGPT_FILE_LIBRARY_ORIGIN_FILE_PREVIEW,
          ),
          ve(s, at, {
            accountId: s.value.accountId,
            userId: s.value.userId,
            analyticsContext: r,
            libraryOrigin: Pe.CHATGPT_FILE_LIBRARY_ORIGIN_FILE_PREVIEW,
            entries: [a],
            onCompleted: (e) => {
              e.includes(a.node.id) && s.get(W) === s.value.accountId && s.get(I) === s.value.userId && o?.();
            },
          }));
      }),
      (n[1] = r),
      (n[2] = i),
      (n[3] = a),
      (n[4] = o),
      (n[5] = s),
      (n[6] = d))
    : (d = n[6]);
  let f;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Y.jsx)(F, {
        id: `libraryNext.actions.delete`,
        defaultMessage: `Delete`,
        description: `Menu action to delete a Library item after confirmation`,
      })),
      (n[7] = f))
    : (f = n[7]);
  let p;
  return (
    n[8] !== l || n[9] !== d
      ? ((p = (0, Y.jsx)(de.Item, {
          disabled: l,
          tone: `destructive`,
          leftIcon: u,
          onSelect: d,
          children: f,
        })),
        (n[8] = l),
        (n[9] = d),
        (n[10] = p))
      : (p = n[10]),
    p
  );
}
var J, it, Y, at;
function ot() {
  return (ot = e(() => {
    ((J = v()),
      Ee(),
      j(),
      k(),
      A(),
      (it = a()),
      E(),
      H(),
      re(),
      be(),
      pe(),
      Ye(),
      je(),
      B(),
      we(),
      ze(),
      (Y = f()),
      oe(),
      (at = (0, it.lazy)(() =>
        g(
          () =>
            import(`./library-item-dialogs-b3f9554157e9.js`).then((e) => ({
              default: e.ConfirmLibraryItemsDialog,
            })),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
          import.meta.url,
        ),
      )));
  }))();
}
function st(e) {
  let n = (0, X.c)(30),
    { children: i, conversationId: a, messageId: o, disabled: c } = e,
    u = t(ee),
    d = P(W),
    f = P(I),
    m;
  n[0] !== d || n[1] !== a || n[2] !== f
    ? ((m = [`library-image-original-chat`, d, f, a]), (n[0] = d), (n[1] = a), (n[2] = f), (n[3] = m))
    : (m = n[3]);
  let h;
  n[4] !== d || n[5] !== a
    ? ((h = async (e) => {
        let { signal: t } = e;
        return (
          await Ne.safeGet(`/conversation/{conversation_id}`, {
            parameters: { path: { conversation_id: a } },
            expectedErrorStatuses: [403, 404],
            additionalHeaders: d == null ? void 0 : { "ChatGPT-Account-ID": d },
            signal: t,
          }),
          !0
        );
      }),
      (n[4] = d),
      (n[5] = a),
      (n[6] = h))
    : (h = n[6]);
  let g;
  n[7] !== m || n[8] !== h
    ? ((g = {
        queryKey: m,
        queryFn: h,
        retry: !1,
        staleTime: 1 / 0,
        gcTime: 0,
        refetchOnMount: `always`,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (n[7] = m),
      (n[8] = h),
      (n[9] = g))
    : (g = n[9]);
  let { isSuccess: _, error: v, isFetching: y } = p(g),
    b = c || !_ || y,
    S;
  n[10] === a ? (S = n[11]) : ((S = T(a)), (n[10] = a), (n[11] = S));
  let C;
  n[12] === o ? (C = n[13]) : ((C = new URLSearchParams({ messageId: o })), (n[12] = o), (n[13] = C));
  let w = `${S}?${C}`,
    E = r(w),
    D;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Z.jsx)(F, {
        id: `library.image.viewOriginalChat`,
        defaultMessage: `View original chat`,
        description: `Image menu action that opens the chat and message where the image originated`,
      })),
      (n[14] = D))
    : (D = n[14]);
  let O = D;
  if (v instanceof ie && v.errorCode === `conversation_deleted`) {
    let e;
    (n[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(F, {
          id: `library.image.originalChatDeleted`,
          defaultMessage: `This chat was deleted`,
          description: `Disabled image menu action when the image's original chat has been deleted`,
        })),
        (n[15] = e))
      : (e = n[15]),
      (O = e));
  } else if (v != null) {
    let e;
    (n[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(F, {
          id: `library.image.originalChatUnavailable`,
          defaultMessage: `This chat is unavailable`,
          description: `Disabled image menu action when the image's original chat could not be loaded`,
        })),
        (n[16] = e))
      : (e = n[16]),
      (O = e));
  }
  let k = b ? void 0 : E,
    A;
  n[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Z.jsx)(x, { icon: { assets: { 16: te, 20: s } } })), (n[17] = A))
    : (A = n[17]);
  let j;
  n[18] !== u || n[19] !== b || n[20] !== w
    ? ((j = (e) => {
        if (b) return;
        (He(u, Ke, {}), e.preventDefault(), e.stopPropagation());
        let t =
            !u.get(l) &&
            document.visibilityState !== `hidden` &&
            typeof document.startViewTransition == `function`,
          n = u.get(ye).prepareNavigation(w, { preventScrollReset: !0, viewTransition: t });
        n != null && (t ? document.startViewTransition(() => (0, lt.flushSync)(n)).ready.catch(ct) : n());
      }),
      (n[18] = u),
      (n[19] = b),
      (n[20] = w),
      (n[21] = j))
    : (j = n[21]);
  let M;
  n[22] !== O || n[23] !== k || n[24] !== j || n[25] !== b
    ? ((M = (0, Z.jsx)(de.Item, { disabled: b, href: k, leftIcon: A, onClick: j, children: O })),
      (n[22] = O),
      (n[23] = k),
      (n[24] = j),
      (n[25] = b),
      (n[26] = M))
    : (M = n[26]);
  let N;
  return (n[27] !== i || n[28] !== M ? ((N = i(M)), (n[27] = i), (n[28] = M), (n[29] = N)) : (N = n[29]), N);
}
function ct() {}
var X, lt, Z;
function ut() {
  return (ut = e(() => {
    ((X = v()),
      qe(),
      fe(),
      u(),
      ae(),
      A(),
      (lt = o()),
      E(),
      m(),
      R(),
      H(),
      Be(),
      w(),
      re(),
      pe(),
      Ue(),
      n(),
      ue(),
      _(),
      (Z = f()));
  }))();
}
function dt(e, t, n = e.get(Ae), r) {
  let i = e.get(L);
  if (n == null || i == null || i.entry?.node.saved_entity != null) return;
  let a = n.state;
  z(e, r ?? n, {
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
function ft(e, t, n) {
  let r = e.get(Ae)?.state?.libraryPreview;
  r?.request.entry?.node.id === t.node.id &&
    e.get(L)?.entry?.node.id === t.node.id &&
    (e.set(L, null),
    n === `delete` && z(e, r.returnLocation, { replace: !0, state: r.returnLocation.state }));
}
function Q() {
  return (Q = e(() => {
    (R(), _e(), De());
  }))();
}
function pt(e) {
  let n = (0, mt.c)(37),
    {
      analyticsContext: r,
      children: i,
      enableDelete: a,
      entry: o,
      fileType: s,
      footer: c,
      knownParentDirectories: l,
      mimeType: u,
      navigationDisabled: d,
      onDeleted: f,
      onOpenLibrary: p,
      open: m,
      onOpenChange: h,
      versionHistoryAction: g,
      versionHistoryFile: _,
    } = e,
    v = a !== void 0 && a,
    y = d !== void 0 && d,
    b = t(ee),
    x = le(),
    S;
  n[0] !== o || n[1] !== p || n[2] !== b
    ? ((S =
        p == null
          ? void 0
          : () => {
              (ft(b, o, `navigate`), p());
            }),
      (n[0] = o),
      (n[1] = p),
      (n[2] = b),
      (n[3] = S))
    : (S = n[3]);
  let C = S,
    w;
  n[4] !== o.node.library_artifact_type || n[5] !== o.node.name || n[6] !== x
    ? ((w = Oe(o.node.name, o.node.library_artifact_type, x)),
      (n[4] = o.node.library_artifact_type),
      (n[5] = o.node.name),
      (n[6] = x),
      (n[7] = w))
    : (w = n[7]);
  let T = w,
    E;
  n[8] !== r ||
  n[9] !== i ||
  n[10] !== T ||
  n[11] !== v ||
  n[12] !== o ||
  n[13] !== s ||
  n[14] !== c ||
  n[15] !== l ||
  n[16] !== u ||
  n[17] !== y ||
  n[18] !== f ||
  n[19] !== h ||
  n[20] !== C ||
  n[21] !== m ||
  n[22] !== b ||
  n[23] !== g ||
  n[24] !== _
    ? ((E = (e) =>
        (0, $.jsx)(me, {
          fileName: o.node.name,
          fileType: s,
          icon: $e(o.node.library_artifact_type, {
            fileName: o.node.name,
            mimeType: u ?? o.node.mime_type ?? void 0,
            mountedLibraryFileId: o.node.id,
            sourceMimeType: o.node.mime_type ?? void 0,
            sourceUrl: o.node.cloud_doc_url ?? void 0,
          }),
          menuTitle: T,
          mimeType: u ?? o.node.mime_type ?? void 0,
          title: T,
          libraryBreadcrumb: y
            ? null
            : (0, $.jsx)(Ie, {
                externalAccount: o.node.external_account,
                libraryFileId: o.node.id,
                knownParentDirectories: l,
                parentDirectoryId: o.node.parent_directory_id,
                onNavigate: C,
              }),
          tooltipBreadcrumb: y
            ? null
            : (0, $.jsx)(Ie, {
                externalAccount: o.node.external_account,
                libraryFileId: o.node.id,
                knownParentDirectories: l,
                parentDirectoryId: o.node.parent_directory_id,
                variant: `text`,
              }),
          open: m,
          onOpenChange: h,
          children: (0, $.jsxs)(Ge, {
            favoriteAction: (0, $.jsx)(Xe, {
              entry: o,
              onView: C,
              surface: s === `image` ? `image_lightbox` : `file_preview`,
            }),
            file: _,
            fileInfoSource: et(o.node),
            libraryFileId: o.node.id,
            openInLibraryDisabled: y,
            onOpenLibrary: C,
            versionHistoryAction: g,
            children: [
              i,
              e,
              v
                ? (0, $.jsx)(nt, {
                    analyticsContext: r,
                    disabled: y,
                    entry: o,
                    onDeleted: () => {
                      (ft(b, o, `delete`), f?.());
                    },
                  })
                : null,
              c,
            ],
          }),
        })),
      (n[8] = r),
      (n[9] = i),
      (n[10] = T),
      (n[11] = v),
      (n[12] = o),
      (n[13] = s),
      (n[14] = c),
      (n[15] = l),
      (n[16] = u),
      (n[17] = y),
      (n[18] = f),
      (n[19] = h),
      (n[20] = C),
      (n[21] = m),
      (n[22] = b),
      (n[23] = g),
      (n[24] = _),
      (n[25] = E))
    : (E = n[25]);
  let D = E,
    O;
  n[26] === o ? (O = n[27]) : ((O = (0, $.jsx)(Xe, { entry: o, prefetch: !0 })), (n[26] = o), (n[27] = O));
  let k;
  n[28] !== o.node.origination_message_id ||
  n[29] !== o.node.origination_thread_id ||
  n[30] !== s ||
  n[31] !== y ||
  n[32] !== D
    ? ((k =
        s === `image` && o.node.origination_thread_id && o.node.origination_message_id
          ? (0, $.jsx)(st, {
              conversationId: o.node.origination_thread_id,
              messageId: o.node.origination_message_id,
              disabled: y,
              children: D,
            })
          : D()),
      (n[28] = o.node.origination_message_id),
      (n[29] = o.node.origination_thread_id),
      (n[30] = s),
      (n[31] = y),
      (n[32] = D),
      (n[33] = k))
    : (k = n[33]);
  let A;
  return (
    n[34] !== O || n[35] !== k
      ? ((A = (0, $.jsxs)($.Fragment, { children: [O, k] })), (n[34] = O), (n[35] = k), (n[36] = A))
      : (A = n[36]),
    A
  );
}
var mt, $;
function ht() {
  return (ht = e(() => {
    ((mt = v()), A(), E(), We(), Qe(), Ve(), q(), Ce(), n(), D(), ot(), ut(), Q(), ($ = f()));
  }))();
}
export { et as a, q as c, dt as i, ht as n, tt as o, Q as r, $e as s, pt as t };
//# sourceMappingURL=file-actions-menu-6e870edcf7c5.js.map
