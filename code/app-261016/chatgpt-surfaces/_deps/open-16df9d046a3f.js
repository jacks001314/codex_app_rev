import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  Cj as i,
  FBt as a,
  Ij as o,
  LNt as s,
  Nj as c,
  PBt as l,
  Qst as u,
  SCt as d,
  TY as f,
  Vrt as p,
  XOt as m,
  Y3 as h,
  YV as g,
  Z3 as _,
  ZSt as v,
  ast as y,
  cA as ee,
  eat as b,
  iCt as x,
  iFt as S,
  ist as C,
  lA as te,
  mCt as ne,
  nCt as w,
  okt as T,
  qrt as re,
  tkt as E,
  vst as ie,
  yCt as ae,
  yst as oe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ADn as se,
  ARn as ce,
  BRr as D,
  BZn as le,
  CIr as ue,
  Cmt as de,
  E2n as fe,
  Ezn as pe,
  FWt as me,
  HRn as he,
  HZn as ge,
  I7n as _e,
  JCr as ve,
  JJn as ye,
  L7n as be,
  LRn as xe,
  MDn as Se,
  MOr as Ce,
  O2n as we,
  Oar as O,
  Ozn as Te,
  QCr as k,
  Qgr as Ee,
  RRn as De,
  RWt as Oe,
  S0t as ke,
  SIr as Ae,
  Smt as je,
  Swn as Me,
  Ujn as A,
  VPn as j,
  VRn as Ne,
  WCr as Pe,
  XDn as Fe,
  XJn as Ie,
  Y1n as Le,
  YRn as Re,
  Ydr as ze,
  ZDn as Be,
  Zgr as Ve,
  _B as He,
  aYn as Ue,
  aqn as We,
  azn as Ge,
  cGn as Ke,
  cp as qe,
  iRr as Je,
  izn as Ye,
  kRn as Xe,
  kar as Ze,
  mSn as Qe,
  mYn as $e,
  n0n as et,
  nTn as tt,
  nYn as nt,
  np as rt,
  o0n as M,
  oqn as it,
  pSn as at,
  q1n as ot,
  qRn as N,
  qjn as st,
  rp as ct,
  sp as lt,
  tTn as ut,
  tyr as dt,
  uGn as ft,
  vB as pt,
  wLr as P,
  wmt as mt,
  x0t as ht,
  xMr as F,
  xwn as gt,
  yMr as _t,
  zOr as vt,
  zRn as yt,
  zRr as I,
} from "./app-initial-ad16eaadf81f.js";
import { Hr as bt, Ur as xt, Vr as St } from "./app-primary-3e00728c2a4c.js";
import { n as Ct, t as L } from "./thread-summary-panel-components-10c7926d4688.js";
async function wt(e, t, n) {
  let r = new Map(),
    i = new Set(),
    a;
  do {
    n.throwIfAborted();
    let o = await Je.safeGet(`/conversations/{conversation_id}/files`, {
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
var R;
function z() {
  return (z = e(() => {
    (v(),
      P(),
      dt(),
      r(),
      (R = ne(u, (e, { get: t }) => ({
        enabled: e.accountId === t(I) && e.userId === t(D),
        queryKey: [`conversation-files`, e.accountId, e.userId, e.serverConversationId],
        queryFn: ({ signal: t }) => wt(e.serverConversationId, e.accountId, t),
        staleTime: 3e4,
        retry: !1,
      }))));
  }))();
}
function Tt(e, t, n) {
  let r = new Set();
  for (let t of e)
    if (t.content.content_type === `gizmo_instructions_context`)
      for (let e of le(t.metadata)) e.fileId != null && r.add(e.fileId);
  let i = e.filter(
      (e) =>
        e.content.content_type !== `gizmo_instructions_context` &&
        e.author.role !== `system` &&
        e.author.role !== `developer` &&
        e.author.role !== `tool` &&
        e.recipient === `all` &&
        (!e.metadata?.is_visually_hidden_from_conversation || !!e.metadata?.targeted_reply_label),
    ),
    a = new Set(i.map(ve)),
    o = ht(i),
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
              : Ie(
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
function B() {
  return (B = e(() => {
    (k(), ge(), Ue(), ke());
  }))();
}
var Et, V;
function H() {
  return (H = e(() => {
    ((Et = t(S(), 1)),
      v(),
      k(),
      j(),
      r(),
      B(),
      z(),
      (V = ae(
        u,
        (e, { get: t }) => {
          let { data: n } = t(R, e),
            r = t(et, e.conversationId);
          return Tt(
            r == null ? [] : Pe({ mapping: r, current_node: t(Le, e.conversationId) }),
            n,
            e.serverConversationId,
          );
        },
        { isEqual: Et.default },
      )));
  }))();
}
function Dt(e, t, n) {
  let r = U(e, t, n);
  F(e, Xe, {
    ...r,
    action: ce.CHATGPT_FILE_LIBRARY_ACTION_SHOWN,
    entryPoint: yt.CHATGPT_FILE_LIBRARY_ENTRY_POINT_CONVERSATION_MENU,
  });
  let i = null,
    a,
    o = e.watch((e) => {
      if (e.get(I) !== t.accountId || e.get(D) !== t.userId) return;
      let { dataUpdatedAt: o, error: s, errorUpdatedAt: c, fetchStatus: l, status: u } = e.get(R, t),
        d = e.get(V, t),
        f = { ...r, loadType: Re.CHATGPT_FILE_LIBRARY_LOAD_TYPE_REFRESH };
      if (l === `fetching` && i == null)
        ((i = { operationId: crypto.randomUUID(), dataUpdatedAt: o, errorUpdatedAt: c }),
          F(e, N, {
            ...f,
            operationId: i.operationId,
            trigger: St(
              e.queryClient.getQueryCache().find({ queryKey: e.query.getOptions(R, t).queryKey, exact: !0 }),
            ),
          }));
      else if (l === `idle` && i != null) {
        let t = i.operationId;
        (u === `success` && o > i.dataUpdatedAt
          ? F(e, N, { ...f, operationId: t, success: !0, itemCount: b(d.length) })
          : u === `error` &&
            c > i.errorUpdatedAt &&
            F(e, N, {
              ...f,
              operationId: t,
              success: !1,
              itemCount: b(d.length),
              errorType: `request_failed`,
              error: je(s),
            }),
          (i = null));
      }
      let p = JSON.stringify(d.map(({ file: e }) => e.libraryFileId ?? e.fileId ?? e.messageId));
      (d.length > 0 || (u === `success` && l === `idle`)) &&
        p !== a &&
        ((a = p),
        F(e, Ge, {
          sessionId: n,
          libraryVariant: r.libraryVariant,
          productExperience: r.productExperience,
          visibleItemCount: b(d.length),
          emptyReason: d.length === 0 ? De.CHATGPT_FILE_LIBRARY_EMPTY_REASON_NO_LIBRARY_FILES : void 0,
        }));
    });
  return () => {
    (o(),
      e.get(I) === t.accountId &&
        e.get(D) === t.userId &&
        F(e, Xe, { ...r, action: ce.CHATGPT_FILE_LIBRARY_ACTION_DISMISSED }));
  };
}
function Ot(e, t, n, { file: r }) {
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
    F(e, Ne, {
      ...U(e, t, n),
      interactionType: he.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_OPENED,
      libraryFileIds: r.libraryFileId == null ? void 0 : [r.libraryFileId],
      fileCategory: a,
    }));
}
function kt(e, t, n, { file: r }) {
  if (e.get(I) !== t.accountId || e.get(D) !== t.userId) return;
  let i =
    r.downloadTarget?.type === `mounted-library` ? r.downloadTarget.mountedLibraryFileId : r.libraryFileId;
  if (i == null) return;
  let a = JSON.stringify({ libraryFileIds: [i] }).length <= 2e3 ? [i] : [],
    o = Ye.CHATGPT_FILE_LIBRARY_ORIGIN_FILE_PREVIEW;
  (F(e, xe, { artifactIds: a, itemCount: b(1), libraryOrigin: o, conversationId: t.serverConversationId }),
    F(e, Ne, {
      ...U(e, t, n),
      libraryOrigin: o,
      interactionType: he.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DOWNLOAD,
      libraryFileIds: a.length > 0 ? a : void 0,
      provider: de(i),
      selectedCount: b(1),
    }));
}
function U(e, t, n) {
  let r = e.get(ot, t.conversationId);
  return {
    conversationId: t.serverConversationId,
    libraryOrigin: Ye.CHATGPT_FILE_LIBRARY_ORIGIN_CONVERSATION_MENU,
    libraryVariant: pe.CHATGPT_FILE_LIBRARY_VARIANT_CONVERSATION_FILES,
    productExperience: r === `tpp` || r === `flora` ? `work` : `chat`,
    sessionId: n,
  };
}
function At() {
  return (At = e(() => {
    (ze(), Te(), P(), j(), mt(), bt(), _t(), z(), H());
  }))();
}
function jt(e) {
  let t = (0, Mt.c)(31),
    { conversationKey: r, onOpenFile: i } = e,
    a = n(u),
    s = T(),
    l = w(A, r.conversationId),
    d = w(V, r),
    { isPending: f, isError: p, isFetching: m, refetch: g } = w(R, r),
    _;
  t[0] === f
    ? (_ = t[1])
    : ((_ = f
        ? (0, W.jsxs)(`div`, {
            className: `px-4 py-4 text-sm text-codex-description select-none`,
            role: `status`,
            children: [
              (0, W.jsx)(`span`, {
                className: `sr-only`,
                children: (0, W.jsx)(E, {
                  id: `chatgptConversations.files.loading`,
                  defaultMessage: `Loading files…`,
                  description: `Screen reader status while the Files in chat panel loads files referenced in the current conversation`,
                }),
              }),
              (0, W.jsx)(_e, { lines: 3 }),
            ],
          })
        : null),
      (t[0] = f),
      (t[1] = _));
  let v;
  t[2] !== r || t[3] !== p || t[4] !== m || t[5] !== g || t[6] !== a
    ? ((v = p
        ? (0, W.jsxs)(`div`, {
            className: `flex items-center justify-between gap-3 px-4 py-4 text-sm text-codex-description select-none`,
            role: `alert`,
            children: [
              (0, W.jsx)(`span`, {
                children: (0, W.jsx)(E, {
                  id: `chatgptConversations.files.loadError`,
                  defaultMessage: `Couldn’t load files`,
                  description: `Error message in the Files in chat panel when the conversation file list fails to load; a nearby button retries the request`,
                }),
              }),
              (0, W.jsx)(h, {
                color: `secondary`,
                loading: m,
                size: `compact`,
                onClick: () => void xt(a.queryClient, a.query.getOptions(R, r).queryKey, g),
                children: (0, W.jsx)(E, {
                  id: `chatgptConversations.files.retry`,
                  defaultMessage: `Try again`,
                  description: `Compact button that retries a failed file-list request in the Files in chat panel`,
                }),
              }),
            ],
          })
        : null),
      (t[2] = r),
      (t[3] = p),
      (t[4] = m),
      (t[5] = g),
      (t[6] = a),
      (t[7] = v))
    : (v = t[7]);
  let y;
  t[8] !== d.length || t[9] !== p || t[10] !== f
    ? ((y =
        d.length === 0 && !f && !p
          ? (0, W.jsx)(`div`, {
              className: `px-4 py-4 text-sm text-codex-description select-none`,
              children: (0, W.jsx)(E, {
                id: `chatgptConversations.files.empty`,
                defaultMessage: `No files referenced yet`,
                description: `Empty state in the Files in chat panel after the current conversation’s file list loads successfully with no visible references`,
              }),
            })
          : null),
      (t[8] = d.length),
      (t[9] = p),
      (t[10] = f),
      (t[11] = y))
    : (y = t[11]);
  let b;
  t[12] === s
    ? (b = t[13])
    : ((b = s.formatMessage({
        id: `chatgptConversations.files.listLabel`,
        defaultMessage: `Files in chat`,
        description: `Accessible label of the list of files referenced in the current ChatGPT conversation`,
      })),
      (t[12] = s),
      (t[13] = b));
  let x;
  if (t[14] !== d || t[15] !== s || t[16] !== l || t[17] !== i) {
    let e;
    (t[19] !== s || t[20] !== l || t[21] !== i
      ? ((e = (e) =>
          (0, W.jsx)(
            L.SourceDetails,
            {
              label: e.file.name,
              meta:
                O(e.file.name) ??
                s.formatMessage(
                  c(o({ fileName: e.file.name, mimeType: e.file.mimeType ?? void 0 }).category),
                ),
              icon: (0, W.jsx)(ee, {
                fileName: e.file.name,
                mimeType: e.file.materializedMimeType ?? e.file.mimeType ?? void 0,
                mountedLibraryFileId: e.file.mountedLibraryFileId ?? e.file.libraryFileId,
                sourceMimeType: e.file.sourceMimeType ?? void 0,
                sourceUrl: e.file.sourceUrl ?? void 0,
                libraryArtifactType: e.libraryArtifactType,
                size: 16,
              }),
              onOpen: l ? void 0 : () => i(e),
            },
            e.file.key,
          )),
        (t[19] = s),
        (t[20] = l),
        (t[21] = i),
        (t[22] = e))
      : (e = t[22]),
      (x = d.map(e)),
      (t[14] = d),
      (t[15] = s),
      (t[16] = l),
      (t[17] = i),
      (t[18] = x));
  } else x = t[18];
  let S;
  t[23] !== b || t[24] !== x
    ? ((S = (0, W.jsx)(L.SourcesSidePanelList, { label: b, children: x })),
      (t[23] = b),
      (t[24] = x),
      (t[25] = S))
    : (S = t[25]);
  let C;
  return (
    t[26] !== _ || t[27] !== v || t[28] !== y || t[29] !== S
      ? ((C = (0, W.jsxs)(L.SourcesSidePanel, { children: [_, v, y, S] })),
        (t[26] = _),
        (t[27] = v),
        (t[28] = y),
        (t[29] = S),
        (t[30] = C))
      : (C = t[30]),
    C
  );
}
var Mt, W;
function Nt() {
  return (Nt = e(() => {
    ((Mt = l()), i(), v(), m(), st(), _(), be(), Ze(), te(), bt(), r(), Ct(), z(), H(), (W = s()));
  }))();
}
function Pt(e) {
  let t = (0, K.c)(5),
    n = x(I),
    r = x(D);
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
      ? ((a = (0, J.jsx)(Ft, { ...e }, i)), (t[2] = e), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Ft(e) {
  let t = (0, K.c)(35),
    {
      accountId: r,
      userId: i,
      conversationId: a,
      serverConversationId: o,
      onClose: s,
      onOpenMessage: c,
      renderSlots: l,
    } = e,
    u = n(Ce),
    d = T(),
    f;
  t[0] !== r || t[1] !== a || t[2] !== o || t[3] !== i
    ? ((f = { accountId: r, userId: i, conversationId: a, serverConversationId: o }),
      (t[0] = r),
      (t[1] = a),
      (t[2] = o),
      (t[3] = i),
      (t[4] = f))
    : (f = t[4]);
  let p = f,
    [m] = (0, q.useState)(It),
    h,
    g;
  (t[5] !== r || t[6] !== a || t[7] !== u || t[8] !== o || t[9] !== m || t[10] !== i
    ? ((h = () => Dt(u, { accountId: r, userId: i, conversationId: a, serverConversationId: o }, m)),
      (g = [u, r, i, a, o, m]),
      (t[5] = r),
      (t[6] = a),
      (t[7] = u),
      (t[8] = o),
      (t[9] = m),
      (t[10] = i),
      (t[11] = h),
      (t[12] = g))
    : ((h = t[11]), (g = t[12])),
    (0, q.useEffect)(h, g));
  let _;
  if (
    t[13] !== a ||
    t[14] !== d ||
    t[15] !== p ||
    t[16] !== s ||
    t[17] !== c ||
    t[18] !== l ||
    t[19] !== u ||
    t[20] !== o ||
    t[21] !== m
  ) {
    let e;
    t[23] !== a ||
    t[24] !== d ||
    t[25] !== p ||
    t[26] !== s ||
    t[27] !== c ||
    t[28] !== u ||
    t[29] !== o ||
    t[30] !== m
      ? ((e = (e) => {
          if (G(u, p)) return;
          let { file: t } = e,
            n = t.downloadTarget;
          if (
            n == null ||
            (n.type === `file-id` &&
              t.libraryFileId == null &&
              !n.fileId.startsWith(`file-`) &&
              !n.fileId.startsWith(`file_`))
          ) {
            t.messageId && (s(), Oe(u, u.get(tt).chat), c(t.messageId));
            return;
          }
          (Ot(u, p, m, e),
            s(),
            ct(u, {
              messageId: t.messageId,
              connectedFileIntent: `open`,
              conversationId: fe(o),
              fileName: n.type === `mounted-library` ? nt(t.name, n.mimeType) : t.name,
              gizmoId: e.gizmoId ?? u.get(M, a),
              target: n,
              isAccessBlocked: (e) => G(e, p),
              headerActions: (0, J.jsx)(Lt, { conversationKey: p, item: e, sessionId: m }),
              tabKey: t.key,
              browserPreview: !0,
              onDownload: (t) => Rt(u, p, e, m, t),
            }).catch(() => {
              G(u, p) ||
                u
                  .get(re)
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
        (t[23] = a),
        (t[24] = d),
        (t[25] = p),
        (t[26] = s),
        (t[27] = c),
        (t[28] = u),
        (t[29] = o),
        (t[30] = m),
        (t[31] = e))
      : (e = t[31]);
    let n;
    (t[32] !== p || t[33] !== e
      ? ((n = (0, J.jsx)(jt, { conversationKey: p, onOpenFile: e })), (t[32] = p), (t[33] = e), (t[34] = n))
      : (n = t[34]),
      (_ = l({ headerRows: [], content: n })),
      (t[13] = a),
      (t[14] = d),
      (t[15] = p),
      (t[16] = s),
      (t[17] = c),
      (t[18] = l),
      (t[19] = u),
      (t[20] = o),
      (t[21] = m),
      (t[22] = _));
  } else _ = t[22];
  return _;
}
function It() {
  return crypto.randomUUID();
}
function Lt(e) {
  let t = (0, K.c)(19),
    { conversationKey: r, item: i, sessionId: a } = e,
    o = n(Ce),
    s = T(),
    c = w(A, r.conversationId),
    l;
  t[0] !== r || t[1] !== i || t[2] !== o || t[3] !== a
    ? ((l = () => Rt(o, r, i, a)), (t[0] = r), (t[1] = i), (t[2] = o), (t[3] = a), (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] !== r || t[6] !== s || t[7] !== o
    ? ((u = () => {
        G(o, r) ||
          o
            .get(re)
            .danger(
              s.formatMessage({
                id: `chatgptConversations.files.downloadError`,
                defaultMessage: `Couldn’t download file`,
                description: `Error toast after the user selects Download in a file preview opened from Files in chat and the download fails`,
              }),
              { errorAnalytics: { toastId: `chatgptConversations.files.downloadError` } },
            );
      }),
      (t[5] = r),
      (t[6] = s),
      (t[7] = o),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] !== l || t[10] !== u
    ? ((d = { mutationFn: l, onError: u }), (t[9] = l), (t[10] = u), (t[11] = d))
    : (d = t[11]);
  let { mutate: f, isPending: p } = oe(d),
    m;
  t[12] === f ? (m = t[13]) : ((m = () => f()), (t[12] = f), (t[13] = m));
  let g;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, J.jsx)(E, {
        id: `chatgptConversations.files.download`,
        defaultMessage: `Download`,
        description: `Button in a preview opened from Files in chat that downloads the original file to the user's device`,
      })),
      (t[14] = g))
    : (g = t[14]);
  let _;
  return (
    t[15] !== c || t[16] !== p || t[17] !== m
      ? ((_ = (0, J.jsx)(h, {
          color: `secondary`,
          disabled: c,
          size: `toolbar`,
          loading: p,
          onClick: m,
          children: g,
        })),
        (t[15] = c),
        (t[16] = p),
        (t[17] = m),
        (t[18] = _))
      : (_ = t[18]),
    _
  );
}
async function Rt(e, t, n, r, i) {
  if (n.file.downloadTarget == null) return;
  let a = new AbortController(),
    o = e.watch((e) => (G(e, t) && a.abort(), () => a.abort()));
  try {
    if ((a.signal.throwIfAborted(), i == null))
      await ye({
        conversationId: fe(t.serverConversationId),
        fileName: n.file.name,
        gizmoId: n.gizmoId ?? e.get(M, t.conversationId),
        signal: a.signal,
        target: lt(e, t.conversationId, n.file.downloadTarget),
      });
    else {
      let e = await C.workspaceFiles.read({ hostId: i.hostId, path: i.path, representation: `blob` });
      (a.signal.throwIfAborted(),
        $e(new Blob([`blob` in e ? Ee(e.blob) : e.text]), i.fileName ?? n.file.name));
    }
    a.signal.aborted || kt(e, t, r, n);
  } catch (e) {
    if (!a.signal.aborted) throw e;
  } finally {
    o();
  }
}
function G(e, t) {
  return e.get(I) !== t.accountId || e.get(D) !== t.userId || e.get(A, t.conversationId);
}
var K, q, J;
function zt() {
  return (zt = e(() => {
    ((K = l()),
      ie(),
      v(),
      (q = a()),
      m(),
      P(),
      Ue(),
      we(),
      j(),
      st(),
      qe(),
      rt(),
      _(),
      p(),
      y(),
      vt(),
      me(),
      ut(),
      Ve(),
      At(),
      Nt(),
      (J = s()));
  }))();
}
function Bt(e) {
  let t = (0, Y.c)(8),
    { title: n, accountId: r, userId: i, conversationId: a, serverConversationId: o } = e,
    s = x(I),
    c = x(D),
    l;
  t[0] !== r || t[1] !== a || t[2] !== o || t[3] !== i
    ? ((l = { accountId: r, userId: i, conversationId: a, serverConversationId: o }),
      (t[0] = r),
      (t[1] = a),
      (t[2] = o),
      (t[3] = i),
      (t[4] = l))
    : (l = t[4]);
  let u = w(Ut, l);
  if (r !== s || i !== c || u == null) return null;
  let d;
  return (
    t[5] !== u || t[6] !== n
      ? ((d = (0, X.jsx)(Vt, { title: n, ...u })), (t[5] = u), (t[6] = n), (t[7] = d))
      : (d = t[7]),
    d
  );
}
function Vt(e) {
  let t = (0, Y.c)(10),
    { title: n, files: r, hasCompleteCount: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = (0, X.jsx)(g, {})), (t[0] = a)) : (a = t[0]);
  let o;
  t[1] !== r.length || t[2] !== i
    ? ((o = i
        ? (0, X.jsx)(E, {
            id: `tabThumbnail.conversationFiles.count`,
            defaultMessage: `{count, plural, =0 {No files referenced yet} one {# file} other {# files}}`,
            description: `Number of files in a Files in chat tab preview with a complete cached file list`,
            values: { count: r.length },
          })
        : null),
      (t[1] = r.length),
      (t[2] = i),
      (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] === r ? (s = t[5]) : ((s = r.slice(0, 4).map(Ht)), (t[4] = r), (t[5] = s));
  let c;
  return (
    t[6] !== o || t[7] !== s || t[8] !== n
      ? ((c = (0, X.jsx)(He, { icon: a, title: n, subtitle: o, sections: s })),
        (t[6] = o),
        (t[7] = s),
        (t[8] = n),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function Ht(e) {
  let { file: t, libraryArtifactType: n } = e;
  return {
    kind: `block`,
    content: (0, X.jsxs)(`div`, {
      className: `flex min-w-0 items-center gap-1.5 text-sm leading-5`,
      children: [
        (0, X.jsx)(ee, {
          fileName: t.name,
          mimeType: t.mimeType ?? void 0,
          libraryArtifactType: n,
          size: 16,
        }),
        (0, X.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: t.name }),
        (0, X.jsx)(`span`, {
          className: `shrink-0 text-xs text-codex-description`,
          children:
            O(t.name) ??
            (0, X.jsx)(E, { ...c(o({ fileName: t.name, mimeType: t.mimeType ?? void 0 }).category) }),
        }),
      ],
    }),
  };
}
var Y, X, Ut;
function Wt() {
  return (Wt = e(() => {
    ((Y = l()),
      i(),
      v(),
      m(),
      pt(),
      Qe(),
      P(),
      ft(),
      it(),
      f(),
      Ze(),
      te(),
      B(),
      z(),
      (X = s()),
      (Ut = d(at, (e, { scope: t }) => {
        if (t.get(I) !== e.accountId || t.get(D) !== e.userId) return null;
        let n = t.get(Ke, e.conversationId),
          r = t.query.getData(R, e);
        return {
          files: Tt(n ?? [], r, e.serverConversationId),
          hasCompleteCount: r != null && n != null && t.get(We, e.conversationId)?.complete !== !1,
        };
      })));
  }))();
}
function Gt(e, t) {
  let n = e.get(I),
    r = e.get(D);
  n != null &&
    r != null &&
    Se(e, Kt, {
      revealAndFocus: !0,
      id: Q,
      kind: Q,
      icon: (0, Z.jsx)(g, {}),
      props: { ...t, accountId: n, userId: r },
      target: gt(e, Q) ?? `right`,
      title: e
        .get(ue)
        .formatMessage({
          id: `chatgptConversations.files.title`,
          defaultMessage: `Files in chat`,
          description: `Title of the side panel listing files referenced in the current ChatGPT conversation, opened from the header overflow menu`,
        }),
    });
}
var Z, Q, Kt;
function $() {
  return ($ = e(() => {
    (se(),
      Fe(),
      P(),
      f(),
      Ae(),
      Me(),
      zt(),
      Wt(),
      (Z = s()),
      (Q = `chatgpt-conversation-files`),
      (Kt = Be(Q, Pt, {
        getId: () => Q,
        isAvailable: (e) => e.value.routeKind === `chatgpt-thread`,
        open: Gt,
        showInNewTabLauncher: !1,
        renderThumbnail: (e, t) => (0, Z.jsx)(Bt, { ...e, title: t.title }),
      })));
  }))();
}
$();
export { Gt as openConversationFiles };
//# sourceMappingURL=open-16df9d046a3f.js.map
