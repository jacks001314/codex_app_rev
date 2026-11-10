import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $B as r,
  Ak as i,
  Cot as a,
  HNt as o,
  IDt as s,
  Iot as c,
  Ixt as l,
  Kat as u,
  Lot as d,
  PA as f,
  Pxt as p,
  Rrt as m,
  TJ as h,
  VDt as g,
  Vxt as _,
  WA as v,
  Zxt as y,
  aSt as b,
  hot as x,
  jDt as S,
  jk as C,
  lot as w,
  nSt as T,
  qA as ee,
  qat as te,
  t3 as ne,
  vzt as E,
  wot as D,
  xMt as O,
  yzt as re,
  zxt as k,
} from "./app-shared-bbfeca5e5737.js";
import {
  $3n as ie,
  $fr as ae,
  Byr as oe,
  Cwr as se,
  DGn as ce,
  E1t as le,
  GGn as ue,
  GMr as A,
  GVn as de,
  HUn as fe,
  IGn as pe,
  Jxn as me,
  Jyr as he,
  MFn as ge,
  Mwn as _e,
  NGn as ve,
  NZn as ye,
  QDr as j,
  QFn as be,
  QQn as xe,
  SFn as Se,
  SZn as Ce,
  T1t as we,
  TGn as Te,
  UUn as Ee,
  Wyr as De,
  XDr as Oe,
  XMr as M,
  Ymr as ke,
  _z as Ae,
  aIr as je,
  ap as Me,
  bFn as N,
  bOn as P,
  bZn as Ne,
  cyn as Pe,
  dFn as Fe,
  dwn as Ie,
  dxn as Le,
  e$n as Re,
  e6n as ze,
  eIn as Be,
  ehr as Ve,
  ep as He,
  epr as Ue,
  fFn as We,
  gFn as F,
  gWt as Ge,
  gwr as Ke,
  gz as qe,
  hFn as Je,
  hJn as Ye,
  hpt as Xe,
  iFn as Ze,
  inr as Qe,
  jFn as $e,
  jwn as et,
  kZn as tt,
  lyn as nt,
  mpt as rt,
  oIr as it,
  ocr as at,
  op as ot,
  pFn as st,
  pJn as ct,
  pWt as lt,
  ppt as ut,
  pwn as dt,
  qVn as ft,
  qxn as pt,
  rFn as mt,
  rnr as ht,
  tNr as I,
  tp as gt,
  uxn as _t,
  wOn as vt,
  yjn as L,
} from "./app-initial-5851df3f6cb1.js";
import { Mr as yt, Nr as bt, jr as xt } from "./app-primary-fe8a450b3b04.js";
import { n as St, t as R } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
async function Ct(e, t, n) {
  let r = new Map(),
    i = new Set(),
    a;
  do {
    n.throwIfAborted();
    let o = await ke.safeGet(`/conversations/{conversation_id}/files`, {
      parameters: { path: { conversation_id: e }, query: { limit: 200, cursor: a } },
      additionalHeaders: { "ChatGPT-Account-ID": t },
      expectedErrorStatuses: [401, 403, 404],
      signal: n,
    });
    n.throwIfAborted();
    for (let e of o.items) r.has(e.file_id) || r.set(e.file_id, e);
    if (((a = o.cursor ?? void 0), a == null || i.has(a))) break;
    i.add(a);
  } while (a != null);
  return [...r.values()];
}
var z;
function B() {
  return (B = e(() => {
    (p(),
      I(),
      Ve(),
      D(),
      (z = y(a, (e, { get: t }) => ({
        enabled: e.accountId === t(A) && e.userId === t(M),
        queryKey: [`conversation-files`, e.accountId, e.userId, e.serverConversationId],
        queryFn: ({ signal: t }) => Ct(e.serverConversationId, e.accountId, t),
        staleTime: 3e4,
        retry: !1,
      }))));
  }))();
}
function wt(e, t, n) {
  let r = new Set();
  for (let t of e)
    if (t.content.content_type === `gizmo_instructions_context`)
      for (let e of ct(t.metadata)) e.fileId != null && r.add(e.fileId);
  let i = e.filter(
      (e) =>
        e.content.content_type !== `gizmo_instructions_context` &&
        e.author.role !== `system` &&
        e.author.role !== `developer` &&
        e.author.role !== `tool` &&
        e.recipient === `all` &&
        (!e.metadata?.is_visually_hidden_from_conversation || !!e.metadata?.targeted_reply_label),
    ),
    a = new Set(i.map(De)),
    o = we(i),
    s = [...o.inputs, ...o.outputs],
    c = new Map(s.flatMap((e) => (e.fileId == null ? [] : [[e.fileId, e]]))),
    l = new Map();
  for (let e of t ?? []) {
    let t = c.get(e.file_id),
      i = e.origination_message_id != null && a.has(e.origination_message_id);
    ((!r.has(e.file_id) && ((e.gizmo_id == null && e.is_project !== !0) || e.origination_thread_id === n)) ||
      t != null ||
      i) &&
      l.set(e.file_id, {
        file: {
          downloadTarget:
            t?.downloadTarget?.type === `mounted-library`
              ? t.downloadTarget
              : ce(
                  { file_id: e.file_id, library_file_id: e.id, mime_type: e.mime_type },
                  { fileName: e.file_name },
                ),
          fileId: e.file_id,
          key: e.file_id,
          kind: `file`,
          libraryFileId: e.id,
          messageId:
            t?.messageId ?? (i || e.origination_thread_id === n ? (e.origination_message_id ?? ``) : ``),
          mimeType: e.mime_type ?? t?.mimeType ?? null,
          mountedLibraryFileId: t?.mountedLibraryFileId,
          sourceMimeType: t?.sourceMimeType,
          materializedMimeType: e.mime_type ?? t?.materializedMimeType,
          sourceUrl: t?.sourceUrl ?? e.cloud_doc_url,
          name: e.file_name,
          sandboxPath: t?.sandboxPath ?? null,
          sizeBytes: e.file_size_bytes ?? t?.sizeBytes ?? null,
        },
        gizmoId: e.gizmo_id,
        libraryArtifactType: e.library_artifact_type,
      });
  }
  for (let e of s) {
    let t = e.fileId ?? `${e.messageId}:${e.name}`;
    l.has(t) || l.set(t, { file: e });
  }
  return [...l.values()];
}
function V() {
  return (V = e(() => {
    (he(), Ye(), pe(), le());
  }))();
}
var Tt, H;
function U() {
  return (U = e(() => {
    ((Tt = t(o(), 1)),
      p(),
      he(),
      L(),
      D(),
      V(),
      B(),
      (H = T(
        a,
        (e, { get: t }) => {
          let { data: n } = t(z, e),
            r = t(tt, e.conversationId);
          return wt(
            r == null ? [] : oe({ mapping: r, current_node: t(Ce, e.conversationId) }),
            n,
            e.serverConversationId,
          );
        },
        { isEqual: Tt.default },
      )));
  }))();
}
function Et(e, t, n) {
  let r = W(e, t, n);
  j(e, mt, {
    ...r,
    action: Ze.CHATGPT_FILE_LIBRARY_ACTION_SHOWN,
    entryPoint: st.CHATGPT_FILE_LIBRARY_ENTRY_POINT_CONVERSATION_MENU,
  });
  let i = null,
    a,
    o = e.watch((e) => {
      if (e.get(A) !== t.accountId || e.get(M) !== t.userId) return;
      let { dataUpdatedAt: o, error: s, errorUpdatedAt: c, fetchStatus: l, status: u } = e.get(z, t),
        d = e.get(H, t),
        f = { ...r, loadType: Se.CHATGPT_FILE_LIBRARY_LOAD_TYPE_REFRESH };
      if (l === `fetching` && i == null)
        ((i = { operationId: crypto.randomUUID(), dataUpdatedAt: o, errorUpdatedAt: c }),
          j(e, N, {
            ...f,
            operationId: i.operationId,
            trigger: xt(
              e.queryClient.getQueryCache().find({ queryKey: e.query.getOptions(z, t).queryKey, exact: !0 }),
            ),
          }));
      else if (l === `idle` && i != null) {
        let t = i.operationId;
        (u === `success` && o > i.dataUpdatedAt
          ? j(e, N, { ...f, operationId: t, success: !0, itemCount: m(d.length) })
          : u === `error` &&
            c > i.errorUpdatedAt &&
            j(e, N, {
              ...f,
              operationId: t,
              success: !1,
              itemCount: m(d.length),
              errorType: `request_failed`,
              error: ut(s),
            }),
          (i = null));
      }
      let p = JSON.stringify(d.map(({ file: e }) => e.libraryFileId ?? e.fileId ?? e.messageId));
      (d.length > 0 || (u === `success` && l === `idle`)) &&
        p !== a &&
        ((a = p),
        j(e, ge, {
          sessionId: n,
          libraryVariant: r.libraryVariant,
          productExperience: r.productExperience,
          visibleItemCount: m(d.length),
          emptyReason: d.length === 0 ? We.CHATGPT_FILE_LIBRARY_EMPTY_REASON_NO_LIBRARY_FILES : void 0,
        }));
    });
  return () => {
    (o(),
      e.get(A) === t.accountId &&
        e.get(M) === t.userId &&
        j(e, mt, { ...r, action: Ze.CHATGPT_FILE_LIBRARY_ACTION_DISMISSED }));
  };
}
function Dt(e, t, n, { file: r }) {
  if (
    r.fileId == null ||
    (r.libraryFileId == null && !r.fileId.startsWith(`file-`) && !r.fileId.startsWith(`file_`))
  )
    return;
  let i = r.mimeType,
    a = `other`;
  (i?.startsWith(`image/`)
    ? (a = `image`)
    : i?.startsWith(`video/`)
      ? (a = `video`)
      : i?.startsWith(`audio/`)
        ? (a = `audio`)
        : i === `application/pdf`
          ? (a = `pdf`)
          : i?.startsWith(`text/`) && (a = `text`),
    j(e, Je, {
      ...W(e, t, n),
      interactionType: F.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_OPENED,
      libraryFileIds: r.libraryFileId == null ? void 0 : [r.libraryFileId],
      fileCategory: a,
    }));
}
function Ot(e, t, n, { file: r }) {
  if (e.get(A) !== t.accountId || e.get(M) !== t.userId) return;
  let i =
    r.downloadTarget?.type === `mounted-library` ? r.downloadTarget.mountedLibraryFileId : r.libraryFileId;
  if (i == null) return;
  let a = JSON.stringify({ libraryFileIds: [i] }).length <= 2e3 ? [i] : [],
    o = $e.CHATGPT_FILE_LIBRARY_ORIGIN_FILE_PREVIEW;
  (j(e, Fe, { artifactIds: a, itemCount: m(1), libraryOrigin: o, conversationId: t.serverConversationId }),
    j(e, Je, {
      ...W(e, t, n),
      libraryOrigin: o,
      interactionType: F.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DOWNLOAD,
      libraryFileIds: a.length > 0 ? a : void 0,
      provider: rt(i),
      selectedCount: m(1),
    }));
}
function W(e, t, n) {
  let r = e.get(Ne, t.conversationId);
  return {
    conversationId: t.serverConversationId,
    libraryOrigin: $e.CHATGPT_FILE_LIBRARY_ORIGIN_CONVERSATION_MENU,
    libraryVariant: be.CHATGPT_FILE_LIBRARY_VARIANT_CONVERSATION_FILES,
    productExperience: r === `tpp` || r === `flora` ? `work` : `chat`,
    sessionId: n,
  };
}
function kt() {
  return (kt = e(() => {
    (at(), Be(), I(), L(), Xe(), yt(), Oe(), B(), U());
  }))();
}
function At(e) {
  let t = (0, jt.c)(31),
    { conversationKey: r, onOpenFile: o } = e,
    c = l(a),
    u = g(),
    d = k(P, r.conversationId),
    f = k(H, r),
    { isPending: p, isError: m, isFetching: h, refetch: _ } = k(z, r),
    y;
  t[0] === p
    ? (y = t[1])
    : ((y = p
        ? (0, G.jsxs)(`div`, {
            className: `px-4 py-4 text-sm text-codex-description select-none`,
            role: `status`,
            children: [
              (0, G.jsx)(`span`, {
                className: `sr-only`,
                children: (0, G.jsx)(s, {
                  id: `chatgptConversations.files.loading`,
                  defaultMessage: `Loading files…`,
                  description: `Screen reader status while the Files in chat panel loads files referenced in the current conversation`,
                }),
              }),
              (0, G.jsx)(ie, { lines: 3 }),
            ],
          })
        : null),
      (t[0] = p),
      (t[1] = y));
  let b;
  t[2] !== r || t[3] !== m || t[4] !== h || t[5] !== _ || t[6] !== c
    ? ((b = m
        ? (0, G.jsxs)(`div`, {
            className: `flex items-center justify-between gap-3 px-4 py-4 text-sm text-codex-description select-none`,
            role: `alert`,
            children: [
              (0, G.jsx)(`span`, {
                children: (0, G.jsx)(s, {
                  id: `chatgptConversations.files.loadError`,
                  defaultMessage: `Couldn’t load files`,
                  description: `Error message in the Files in chat panel when the conversation file list fails to load; a nearby button retries the request`,
                }),
              }),
              (0, G.jsx)(n, {
                color: `secondary`,
                loading: h,
                size: `compact`,
                onClick: () => void bt(c.queryClient, c.query.getOptions(z, r).queryKey, _),
                children: (0, G.jsx)(s, {
                  id: `chatgptConversations.files.retry`,
                  defaultMessage: `Try again`,
                  description: `Compact button that retries a failed file-list request in the Files in chat panel`,
                }),
              }),
            ],
          })
        : null),
      (t[2] = r),
      (t[3] = m),
      (t[4] = h),
      (t[5] = _),
      (t[6] = c),
      (t[7] = b))
    : (b = t[7]);
  let x;
  t[8] !== f.length || t[9] !== m || t[10] !== p
    ? ((x =
        f.length === 0 && !p && !m
          ? (0, G.jsx)(`div`, {
              className: `px-4 py-4 text-sm text-codex-description select-none`,
              children: (0, G.jsx)(s, {
                id: `chatgptConversations.files.empty`,
                defaultMessage: `No files referenced yet`,
                description: `Empty state in the Files in chat panel after the current conversation’s file list loads successfully with no visible references`,
              }),
            })
          : null),
      (t[8] = f.length),
      (t[9] = m),
      (t[10] = p),
      (t[11] = x))
    : (x = t[11]);
  let S;
  t[12] === u
    ? (S = t[13])
    : ((S = u.formatMessage({
        id: `chatgptConversations.files.listLabel`,
        defaultMessage: `Files in chat`,
        description: `Accessible label of the list of files referenced in the current ChatGPT conversation`,
      })),
      (t[12] = u),
      (t[13] = S));
  let C;
  if (t[14] !== f || t[15] !== u || t[16] !== d || t[17] !== o) {
    let e;
    (t[19] !== u || t[20] !== d || t[21] !== o
      ? ((e = (e) =>
          (0, G.jsx)(
            R.SourceDetails,
            {
              label: e.file.name,
              meta:
                ht(e.file.name) ??
                u.formatMessage(
                  v(ee({ fileName: e.file.name, mimeType: e.file.mimeType ?? void 0 }).category),
                ),
              icon: (0, G.jsx)(i, {
                fileName: e.file.name,
                mimeType: e.file.materializedMimeType ?? e.file.mimeType ?? void 0,
                mountedLibraryFileId: e.file.mountedLibraryFileId ?? e.file.libraryFileId,
                sourceMimeType: e.file.sourceMimeType ?? void 0,
                sourceUrl: e.file.sourceUrl ?? void 0,
                libraryArtifactType: e.libraryArtifactType,
                size: 16,
              }),
              onOpen: d ? void 0 : () => o(e),
            },
            e.file.key,
          )),
        (t[19] = u),
        (t[20] = d),
        (t[21] = o),
        (t[22] = e))
      : (e = t[22]),
      (C = f.map(e)),
      (t[14] = f),
      (t[15] = u),
      (t[16] = d),
      (t[17] = o),
      (t[18] = C));
  } else C = t[18];
  let w;
  t[23] !== S || t[24] !== C
    ? ((w = (0, G.jsx)(R.SourcesSidePanelList, { label: S, children: C })),
      (t[23] = S),
      (t[24] = C),
      (t[25] = w))
    : (w = t[25]);
  let T;
  return (
    t[26] !== y || t[27] !== b || t[28] !== x || t[29] !== w
      ? ((T = (0, G.jsxs)(R.SourcesSidePanel, { children: [y, b, x, w] })),
        (t[26] = y),
        (t[27] = b),
        (t[28] = x),
        (t[29] = w),
        (t[30] = T))
      : (T = t[30]),
    T
  );
}
var jt, G;
function Mt() {
  return (Mt = e(() => {
    ((jt = E()), f(), p(), S(), vt(), ne(), ze(), Qe(), C(), yt(), D(), St(), B(), U(), (G = O()));
  }))();
}
function Nt(e) {
  let t = (0, q.c)(5),
    n = _(A),
    r = _(M);
  if (!e.isActive || e.accountId !== n || e.userId !== r) {
    let n;
    return (
      t[0] === e.renderSlots
        ? (n = t[1])
        : ((n = e.renderSlots({ headerRows: [], content: null })), (t[0] = e.renderSlots), (t[1] = n)),
      n
    );
  }
  let i = `${n}:${r}:${e.conversationId}`,
    a;
  return (
    t[2] !== e || t[3] !== i
      ? ((a = (0, Y.jsx)(Pt, { ...e }, i)), (t[2] = e), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Pt(e) {
  let t = (0, q.c)(35),
    {
      accountId: n,
      userId: r,
      conversationId: i,
      serverConversationId: a,
      onClose: o,
      onOpenMessage: s,
      renderSlots: c,
    } = e,
    u = l(Ke),
    d = g(),
    f;
  t[0] !== n || t[1] !== i || t[2] !== a || t[3] !== r
    ? ((f = { accountId: n, userId: r, conversationId: i, serverConversationId: a }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = r),
      (t[4] = f))
    : (f = t[4]);
  let p = f,
    [m] = (0, J.useState)(Ft),
    h,
    _;
  (t[5] !== n || t[6] !== i || t[7] !== u || t[8] !== a || t[9] !== m || t[10] !== r
    ? ((h = () => Et(u, { accountId: n, userId: r, conversationId: i, serverConversationId: a }, m)),
      (_ = [u, n, r, i, a, m]),
      (t[5] = n),
      (t[6] = i),
      (t[7] = u),
      (t[8] = a),
      (t[9] = m),
      (t[10] = r),
      (t[11] = h),
      (t[12] = _))
    : ((h = t[11]), (_ = t[12])),
    (0, J.useEffect)(h, _));
  let v;
  if (
    t[13] !== i ||
    t[14] !== d ||
    t[15] !== p ||
    t[16] !== o ||
    t[17] !== s ||
    t[18] !== c ||
    t[19] !== u ||
    t[20] !== a ||
    t[21] !== m
  ) {
    let e;
    t[23] !== i ||
    t[24] !== d ||
    t[25] !== p ||
    t[26] !== o ||
    t[27] !== s ||
    t[28] !== u ||
    t[29] !== a ||
    t[30] !== m
      ? ((e = (e) => {
          if (K(u, p)) return;
          let { file: t } = e,
            n = t.downloadTarget;
          if (
            n == null ||
            (n.type === `file-id` &&
              t.libraryFileId == null &&
              !n.fileId.startsWith(`file-`) &&
              !n.fileId.startsWith(`file_`))
          ) {
            t.messageId && (o(), Ge(u, u.get(me).chat), s(t.messageId));
            return;
          }
          (Dt(u, p, m, e),
            o(),
            gt(u, {
              messageId: t.messageId,
              connectedFileIntent: `open`,
              conversationId: xe(a),
              fileName: n.type === `mounted-library` ? ve(t.name, n.mimeType) : t.name,
              gizmoId: e.gizmoId ?? u.get(ye, i),
              target: n,
              isAccessBlocked: (e) => K(e, p),
              headerActions: (0, Y.jsx)(It, { conversationKey: p, item: e, sessionId: m }),
              tabKey: t.key,
              browserPreview: !0,
              onDownload: (t) => Lt(u, p, e, m, t),
            }).catch(() => {
              K(u, p) ||
                u
                  .get(x)
                  .danger(
                    d.formatMessage({
                      id: `chatgptConversations.files.openError`,
                      defaultMessage: `Couldn’t open file`,
                      description: `Error toast after selecting a file in the Files in chat panel when its preview or download fails`,
                    }),
                    { errorAnalytics: { toastId: `chatgptConversations.files.openError` } },
                  );
            }));
        }),
        (t[23] = i),
        (t[24] = d),
        (t[25] = p),
        (t[26] = o),
        (t[27] = s),
        (t[28] = u),
        (t[29] = a),
        (t[30] = m),
        (t[31] = e))
      : (e = t[31]);
    let n;
    (t[32] !== p || t[33] !== e
      ? ((n = (0, Y.jsx)(At, { conversationKey: p, onOpenFile: e })), (t[32] = p), (t[33] = e), (t[34] = n))
      : (n = t[34]),
      (v = c({ headerRows: [], content: n })),
      (t[13] = i),
      (t[14] = d),
      (t[15] = p),
      (t[16] = o),
      (t[17] = s),
      (t[18] = c),
      (t[19] = u),
      (t[20] = a),
      (t[21] = m),
      (t[22] = v));
  } else v = t[22];
  return v;
}
function Ft() {
  return crypto.randomUUID();
}
function It(e) {
  let t = (0, q.c)(19),
    { conversationKey: r, item: i, sessionId: a } = e,
    o = l(Ke),
    c = g(),
    u = k(P, r.conversationId),
    f;
  t[0] !== r || t[1] !== i || t[2] !== o || t[3] !== a
    ? ((f = () => Lt(o, r, i, a)), (t[0] = r), (t[1] = i), (t[2] = o), (t[3] = a), (t[4] = f))
    : (f = t[4]);
  let p;
  t[5] !== r || t[6] !== c || t[7] !== o
    ? ((p = () => {
        K(o, r) ||
          o
            .get(x)
            .danger(
              c.formatMessage({
                id: `chatgptConversations.files.downloadError`,
                defaultMessage: `Couldn’t download file`,
                description: `Error toast after the user selects Download in a file preview opened from Files in chat and the download fails`,
              }),
              { errorAnalytics: { toastId: `chatgptConversations.files.downloadError` } },
            );
      }),
      (t[5] = r),
      (t[6] = c),
      (t[7] = o),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] !== f || t[10] !== p
    ? ((m = { mutationFn: f, onError: p }), (t[9] = f), (t[10] = p), (t[11] = m))
    : (m = t[11]);
  let { mutate: h, isPending: _ } = d(m),
    v;
  t[12] === h ? (v = t[13]) : ((v = () => h()), (t[12] = h), (t[13] = v));
  let y;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Y.jsx)(s, {
        id: `chatgptConversations.files.download`,
        defaultMessage: `Download`,
        description: `Button in a preview opened from Files in chat that downloads the original file to the user's device`,
      })),
      (t[14] = y))
    : (y = t[14]);
  let b;
  return (
    t[15] !== u || t[16] !== _ || t[17] !== v
      ? ((b = (0, Y.jsx)(n, {
          color: `secondary`,
          disabled: u,
          size: `toolbar`,
          loading: _,
          onClick: v,
          children: y,
        })),
        (t[15] = u),
        (t[16] = _),
        (t[17] = v),
        (t[18] = b))
      : (b = t[18]),
    b
  );
}
async function Lt(e, t, n, r, i) {
  if (n.file.downloadTarget == null) return;
  let a = new AbortController(),
    o = e.watch((e) => (K(e, t) && a.abort(), () => a.abort()));
  try {
    if ((a.signal.throwIfAborted(), i == null))
      await Te({
        conversationId: xe(t.serverConversationId),
        fileName: n.file.name,
        gizmoId: n.gizmoId ?? e.get(ye, t.conversationId),
        signal: a.signal,
        target: Me(e, t.conversationId, n.file.downloadTarget),
      });
    else {
      let e = await u.workspaceFiles.read({ hostId: i.hostId, path: i.path, representation: `blob` });
      (a.signal.throwIfAborted(),
        ue(new Blob([`blob` in e ? Ue(e.blob) : e.text]), i.fileName ?? n.file.name));
    }
    a.signal.aborted || Ot(e, t, r, n);
  } catch (e) {
    if (!a.signal.aborted) throw e;
  } finally {
    o();
  }
}
function K(e, t) {
  return e.get(A) !== t.accountId || e.get(M) !== t.userId || e.get(P, t.conversationId);
}
var q, J, Y;
function Rt() {
  return (Rt = e(() => {
    ((q = E()),
      c(),
      p(),
      (J = re()),
      S(),
      I(),
      pe(),
      Re(),
      L(),
      vt(),
      ot(),
      He(),
      ne(),
      w(),
      te(),
      se(),
      lt(),
      pt(),
      ae(),
      kt(),
      Mt(),
      (Y = O()));
  }))();
}
function zt(e) {
  let t = (0, X.c)(8),
    { title: n, accountId: r, userId: i, conversationId: a, serverConversationId: o } = e,
    s = _(A),
    c = _(M),
    l;
  t[0] !== r || t[1] !== a || t[2] !== o || t[3] !== i
    ? ((l = { accountId: r, userId: i, conversationId: a, serverConversationId: o }),
      (t[0] = r),
      (t[1] = a),
      (t[2] = o),
      (t[3] = i),
      (t[4] = l))
    : (l = t[4]);
  let u = k(Ht, l);
  if (r !== s || i !== c || u == null) return null;
  let d;
  return (
    t[5] !== u || t[6] !== n
      ? ((d = (0, Z.jsx)(Bt, { title: n, ...u })), (t[5] = u), (t[6] = n), (t[7] = d))
      : (d = t[7]),
    d
  );
}
function Bt(e) {
  let t = (0, X.c)(10),
    { title: n, files: i, hasCompleteCount: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = (0, Z.jsx)(r, {})), (t[0] = o)) : (o = t[0]);
  let c;
  t[1] !== i.length || t[2] !== a
    ? ((c = a
        ? (0, Z.jsx)(s, {
            id: `tabThumbnail.conversationFiles.count`,
            defaultMessage: `{count, plural, =0 {No files referenced yet} one {# file} other {# files}}`,
            description: `Number of files in a Files in chat tab preview with a complete cached file list`,
            values: { count: i.length },
          })
        : null),
      (t[1] = i.length),
      (t[2] = a),
      (t[3] = c))
    : (c = t[3]);
  let l;
  t[4] === i ? (l = t[5]) : ((l = i.slice(0, 4).map(Vt)), (t[4] = i), (t[5] = l));
  let u;
  return (
    t[6] !== c || t[7] !== l || t[8] !== n
      ? ((u = (0, Z.jsx)(qe, { icon: o, title: n, subtitle: c, sections: l })),
        (t[6] = c),
        (t[7] = l),
        (t[8] = n),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function Vt(e) {
  let { file: t, libraryArtifactType: n } = e;
  return {
    kind: `block`,
    content: (0, Z.jsxs)(`div`, {
      className: `flex min-w-0 items-center gap-1.5 text-sm leading-5`,
      children: [
        (0, Z.jsx)(i, { fileName: t.name, mimeType: t.mimeType ?? void 0, libraryArtifactType: n, size: 16 }),
        (0, Z.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: t.name }),
        (0, Z.jsx)(`span`, {
          className: `shrink-0 text-xs text-codex-description`,
          children:
            ht(t.name) ??
            (0, Z.jsx)(s, { ...v(ee({ fileName: t.name, mimeType: t.mimeType ?? void 0 }).category) }),
        }),
      ],
    }),
  };
}
var X, Z, Ht;
function Ut() {
  return (Ut = e(() => {
    ((X = E()),
      f(),
      p(),
      S(),
      Ae(),
      nt(),
      I(),
      ft(),
      Ee(),
      h(),
      Qe(),
      C(),
      V(),
      B(),
      (Z = O()),
      (Ht = b(Pe, (e, { scope: t }) => {
        if (t.get(A) !== e.accountId || t.get(M) !== e.userId) return null;
        let n = t.get(de, e.conversationId),
          r = t.query.getData(z, e);
        return {
          files: wt(n ?? [], r, e.serverConversationId),
          hasCompleteCount: r != null && n != null && t.get(fe, e.conversationId)?.complete !== !1,
        };
      })));
  }))();
}
function Wt(e, t) {
  let n = e.get(A),
    i = e.get(M);
  n != null &&
    i != null &&
    dt(e, Gt, {
      revealAndFocus: !0,
      id: $,
      kind: $,
      icon: (0, Q.jsx)(r, {}),
      props: { ...t, accountId: n, userId: i },
      target: _t(e, $) ?? `right`,
      title: e
        .get(it)
        .formatMessage({
          id: `chatgptConversations.files.title`,
          defaultMessage: `Files in chat`,
          description: `Title of the side panel listing files referenced in the current ChatGPT conversation, opened from the header overflow menu`,
        }),
    });
}
var Q, $, Gt;
function Kt() {
  return (Kt = e(() => {
    (Ie(),
      et(),
      I(),
      h(),
      je(),
      Le(),
      Rt(),
      Ut(),
      (Q = O()),
      ($ = `chatgpt-conversation-files`),
      (Gt = _e($, Nt, {
        getId: () => $,
        isAvailable: (e) => e.value.routeKind === `chatgpt-thread`,
        open: Wt,
        showInNewTabLauncher: !1,
        renderThumbnail: (e, t) => (0, Q.jsx)(zt, { ...e, title: t.title }),
      })));
  }))();
}
Kt();
export { Wt as openConversationFiles };
//# sourceMappingURL=open-e0c2bf73a8b1.js.map
